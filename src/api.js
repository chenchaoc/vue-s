/*
 * @Author:  chenchao
 * @Date:  2018-08-28 14:39:19
 * @email:  chenchao3.sh@superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-08-30 21:31:07
 */

import store from './store/store'
import Toast from 'ui/toast'

const apiMap = {
  homeList: 'homeList.action',
}

//example  API('homeList', { a: 1 }, { headers: { OS: 'WECHAT' } }).then(() => {}).catch(() => {})
export default function(name, data = {}, options = {}) {
  const { showLoading = true, hideToast = false } = options
  !store.state.isLoading && showLoading && store.dispatch('startLoading')
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
