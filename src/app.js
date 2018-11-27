/*
* @Author: chenchao
* @Date: 2018-08-21 14:36:40
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-11-23 11:07:27
*/

import App from './app.vue'
import router from './router/index'
import store from './store/store'
import Fastclick from 'fastclick'
Fastclick.attach(document.body)
if (['test', 'beta'].includes(process.env.GLOBAL_ENV)) { //在test beta环境引入vconsole调试
  new (require('vconsole'))()
}
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
