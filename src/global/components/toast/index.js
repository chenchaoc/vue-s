import Vue from 'vue'
import ToastTemplate from './toast'

const ToastConstructor = Vue.extend(ToastTemplate)

ToastConstructor.prototype.close = function () {
  instance.show = false
  clearTimeout(instance.timer)
  // const el = instance.$el
  // el.parentNode && el.parentNode.removeChild(el)
}

const instance = new ToastConstructor({
  el: document.createElement('div')
})

const Toast = function (options = {}) {
  const opts = typeof options === 'string' ? Object.assign(arguments[1] || {}, { msg: options }) : options
  Object.assign(instance, {
    position: 'middle',
    icon: '',
    duration: 0
  }, opts)

  clearTimeout(instance.timer)
  document.body.appendChild(instance.$el)
  Vue.nextTick(function () {
    instance.show = true
    instance.timer = setTimeout(function () {
      instance.close()
    }, instance.duration || 2000)
  })
  return instance
}
export default Toast
