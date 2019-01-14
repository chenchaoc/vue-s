/*
 * @Author:  chenchao
 * @Date:  2018-08-28 14:39:19
 * @email:  chenchao3.sh@superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-11-21 15:14:11
 */

import store from './store/store'
import { Toast } from 'mint-ui'

import loanApi from './loan/api'
import mineApi from './mine/api'
import repayApi from './repay/api'
import staticApi from './static/api'

const apiMap = {
  //公共的
  signatureUrl: '/signature.action', //微信获取code
  //各个页面的
  ...loanApi,
  ...mineApi,
  ...repayApi,
  ...staticApi
}

//example  API('homeList', { a: 1 }, { headers: { OS: 'WECHAT' }, showLoading: false, hideToast: true }).then(() => {}).catch(() => {})
export function request(name, data = {}, options = {}) {
  const { showLoading = true, hideToast = false } = options
  !store.state.isLoading && showLoading && store.dispatch('startLoading')
  console.log(apiMap[name], data)
  return common.ajax(apiMap[name], data, options).then((res) => {
    store.state.isLoading && showLoading && store.dispatch('stopLoading')
    if (res.errorCode == 0) {
      return res
    }
    return Promise.reject(res)
  }).catch((error) => {
    store.state.isLoading && showLoading && store.dispatch('stopLoading')
    !hideToast && Toast(error.message || '网络异常，请稍后再试')
    return Promise.reject(error)
  })
}
