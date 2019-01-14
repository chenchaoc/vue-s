/*
* @Author: chenchao
* @Date: 2018-08-21 15:18:09
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-11-21 14:30:58
*/
import axios from 'axios'
import router from '../../router'
// console.log(bridge.ajax)
axios.interceptors.request.use(config => {
  config.headers = Object.assign({}, { 'X-Requested-With': 'XMLHttpRequest' }, config.headers)
  return config
}, error => {
  return Promise.reject(error)
})
axios.interceptors.response.use(response => response, error => Promise.reject(error.response))
//所有api地址
const apiUrls = {
  'dev': {
    mApi: 'https://www.easy-mock.com/mock/5add7e95fe29a6045d0a7baa/study',
    mUrl: 'http//10.7.248.232:6888'
  },
  'test': {
    mApi: 'http//mtest.chenchaoc.top',
    mUrl: 'http//mtest.chenchaoc.top'
  },
  'beta': {
    mApi: 'http//mbeta.chenchaoc.top',
    mUrl: 'http//mbeta.chenchaoc.top'
  },
  'prod': {
    mApi: 'https://www.easy-mock.com/mock/5add7e95fe29a6045d0a7baa/study',
    mUrl: 'https//m.chenchaoc.top'
  }
}
// 注入window.pageConfig
window.pageConfig = apiUrls[process.env.GLOBAL_ENV]
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
  const defaultOptions = {
    method: 'post',
    timeout: 20000,
    data,
    // data: Object.assign({ _t: new Date().getTime() }, data),
    url: `${apiUrls[process.env.GLOBAL_ENV].mApi}${url}`
  }
  const ajaxOptions = Object.assign({}, defaultOptions, options)
  return axios(ajaxOptions).then((res = {}) => {
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

/**
 *
 * @param {*} app
 * @param {*} h5
 */
export function go(app, h5) {
  if (process.env.GLOBAL_ENV == 'dev') {
    console.warn('common.go', app, h5)
  }
  if (util.browser.isApp && app) {
    if (app.back) {
      bridge.back()
    } else {
      bridge.jumpui(app)
    }
  } else if (h5) {
    if (h5.href) {
      location.href = h5.href
    } else if (h5.replace) {
      router.replace(h5)
    } else if (h5.go) {
      router.go(h5.go)
    } else {
      router.push(h5)
    }
  }
}
