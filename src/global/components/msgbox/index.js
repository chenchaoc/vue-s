import Vue from 'vue'
import MsgboxTemplate from './msgbox'

const MsgboxConstructor = Vue.extend(MsgboxTemplate)

MsgboxConstructor.prototype.close = function () {
  instance.show = false
  const el = instance.$el
  el.parentNode && el.parentNode.removeChild(el)
}

const instance = new MsgboxConstructor({
  el: document.createElement('div')
})

const Msgbox = function () {
  const len = arguments.length
  let options = typeof arguments[len - 1] === 'object' ? arguments[len - 1] : {}
  options.title = typeof arguments[0] === 'string' ? arguments[0] : options.title
  options.msg = typeof arguments[1] === 'string' ? arguments[1] : options.msg
  Object.assign(instance, {
    title: '',
    msg: '',
    confirmText: '',
    cancelText: ''
  }, options)

  document.body.appendChild(instance.$el)
  Vue.nextTick(function () {
    instance.show = true
  })
  const p = new Promise(function (resolve, reject) {
    instance.confirm = function () {
      instance.close()
      resolve(instance)
    }
    instance.cancel = function () {
      instance.close()
      reject(instance)
    }
  })
  p.close = function () {
    instance.close()
  }
  return p
}
export default Msgbox
