/*
* @Author: chenchao
* @Date: 2018-08-21 15:27:48
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-12-06 10:27:18
*/

let idCounter = 1 // 全局唯一标识，从1开始累加

function callnative(api, params) {
  if (!util.browser.isApp) {
    console.warn(`[bridge.${api}]`, params)
    return Promise.resolve()
  }
  return new Promise(function (resolve, reject) {
    try {
      // 1.创建全局回调函数，放在映射表中
      const callback = `cb_${idCounter++}`
      if (process.env.GLOBAL_ENV == 'dev') {
        console.warn(`[bridge.${api}.${callback}]`, params)
      }
      window[callback] = data => {
        if (process.env.GLOBAL_ENV == 'dev') {
          console.warn(`${callback}-->`, data && JSON.parse(JSON.stringify(data)))
        }
        // data ? resolve(data) : reject(data)
        resolve(data)
        setTimeout(() => delete window[callback], 0)
      }
      params.callback = callback
      params._t = Date.now()

      // 2.序列化参数
      const search = Object.keys(params).map(k => {
        let v = params[k]
        // v = encodeURIComponent(encodeURIComponent(typeof v === 'string' ? v : JSON.stringify(v)))
        v = encodeURIComponent(typeof v === 'string' ? v : JSON.stringify(v))
        return `${k}=${v}`
      }).join('&')
      // 3.通过iframe与原生通信
      const url = `wyb://callnatvie/${api}?${search}`
      const iframe = document.createElement('iframe')
      iframe.style.display = 'none'
      iframe.src = url
      document.body.appendChild(iframe)
      setTimeout(() => {
        iframe.parentNode.removeChild(iframe)
      }, 300)
    } catch (err) {
      reject(err)
    }
  })
}

/**
 * 方法调用
 * @param {string} method 方法名称
 * finishWithdraw 提现去华瑞验证交易密码后回调方法
 * finishDeposit 充值去华瑞验证交易密码后回调方法
 * @param {object} params 参数
 * @return {promise}
 */
export function call(method, params = {}) {
  params = Object.assign({ method }, params)
  return callnative('callmethod', params)
}

/**
 * 打开UI界面
 * @param {object} params 参数
 * @return {promise}
 * bridge.back() 返回上一个页面
 * page值为gomine：我的页面
 */
export function jumpui(params = {}) {
  return callnative('jumpui', params)
}

/**
 * 调用后台API
 * @param {string} url API地址
 * @param {object} params 参数
 * @return {promise}
 */
export function ajax(url, params) {
  params = Object.assign({ apiname: url }, params)
  return callnative('callapiservice', params)
}

/**
 * 弹出原生登录页面
 * @param {object} params 参数
 * @return {promise}
 */
export function loginwithui(params = {}) {
  return callnative('loginwithui', params)
}

/**
 * 日志收集
 * @param {object} params 参数
 * @return {promise}
 */
export function log(params = {}) {
  return callnative('datacollection', { data: params })
}

/**
 * 关闭当前webview
 * @return {promise}
 */
export function back() {
  return callnative('back', {})
}

/* *************************
 * APP调用H5
 **************************/

const callbackMap = {} // 回调映射表

/**
 * 注册一个回调函数
 * @param {string} 回调函数名称
 * @param {function} 回调函数
 */
export function onCallback(method, callback) {
  callbackMap[method] = callback
}

/**
 * 解除回调函数
 * @param {string} 回调函数名称
 * @param {function} 回调函数
 */
export function offCallback(method) {
  delete callbackMap[method]
}

/**
 * APP回调H5
 * @param {string} method 方法名称
 * @param {object} params 参数
 */
window.callJs = function (method, params) {
  callbackMap[method] && callbackMap[method](params)
}
