import store from './store/store'
import Toast from 'ui/toast'

const apiMap = {
  homeList: 'homeList.action',
}

//例子  API('homeList', { a: 1 }, { headers: { OS: 'WECHAT' } })
export default function(name, data = {}, options = {}) {
  const { showLoading = true, hideToast } = options
  !store.state.isLoading && showLoading && store.dispatch('addLoading')
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
