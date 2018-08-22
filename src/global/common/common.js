/*
* @Author: chenchao
* @Date: 2018-08-21 15:18:09
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-08-22 19:23:03
*/
import axios from 'axios'

//所有api地址
const urls = {
  'dev': {
    mApi: 'https://www.easy-mock.com/mock/5add7e95fe29a6045d0a7baa/study/',
    mUrl: 'http//10.7.248.232:6888/'
  },
  'test': {
    mApi: 'http//mtest.chenchaoc.top/',
    mUrl: 'http//mtest.chenchaoc.top/'
  },
  'beta': {
    mApi: 'http//mbeta.chenchaoc.top/',
    mUrl: 'http//mbeta.chenchaoc.top/'
  },
  'prod': {
    mApi: 'https://www.easy-mock.com/mock/5add7e95fe29a6045d0a7baa/study/',
    mUrl: 'https//m.chenchaoc.top/'
  }
}
// 注入window.pageConfig
window.pageConfig = urls[process.env.GLOBAL_ENV]
/**
 * 设置文档标题
 */
export function changeDocTitle(title) {
  document.title = title
  // 在webview或微信浏览器中，可能需要再触发一次文档更新才能使document.title生效
  const iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  iframe.src = 'javascript:void(0)' // 使用空iframe，减小请求
  iframe.onload = function () {
    setTimeout(() => iframe.parentNode.removeChild(iframe), 0)
  }
  document.body.appendChild(iframe)
}

/**
 * [公共ajax]
 * @param  {String} url  [请求url]
 * @param  {Object} data [请求参数]
 * @param  {Object} options [axios设置]
 * @return {Promise}     [返回结果]
 */
export function ajax(url, data = {}, options = {}) {
  const {
    method = 'post',
    headers = {},
  } = options
  return axios({
    method,
    url: `${urls[process.env.GLOBAL_ENV].mApi}${url}`,
    data,
    headers
  }).then((res = {}) => {
    return res.data
  }).catch((error) => {
    return error.data
  })
}

/**
 * [ajaxOrder 按顺序发送ajax并执行每个回调，最终返回返回值的数组]
 * @param  {[Function|Promise]} args [每个函数必须带上 * yield]
 * @return {[Promise]}           [description]
 */
export async function ajaxOrder(...args) {
  const promises = args.map(gen => ({ gen, promise: gen.next().value }))
  let result = []
  let hasErr = false
  for (const { gen, promise } of promises) {
    try {
      result.push(await promise)
    } catch (err) {
      result.push(err)
      hasErr = true
    } finally {
      gen.next(promise)
    }
  }
  if (hasErr) {
    throw result
  }
  return result
}
