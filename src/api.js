import store from './store/store'

const apiMap = {
  homeList: 'homeList',
}
//例子  API('homeList', { a: 1 }, { headers: { OS: 'WECHAT' } })
export default function(name, data = {}, options = {}) {
  const { showLoading = true, hideToast } = options
  showLoading && store.dispatch('addLoading')
  return common.ajax(`${apiMap[name]}.action`, data, options).then((res) => {
    showLoading && store.dispatch('stopLoading')
    if (res.errorCode == 0) {
      return res
    }
    return Promise.reject(res)
  }).catch((error) => {
    showLoading && store.dispatch('stopLoading')
    //!hideToast && toast(error.message || '网络异常，请稍后再试')
    return Promise.reject(error)
  })
}
