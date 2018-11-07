/*
* @Author: chenchao
* @Date: 2018-08-21 14:36:40
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-10-11 17:00:39
*/

import App from './app.vue'
import router from './router/index'
import store from './store/store'
import Fastclick from 'fastclick'
Fastclick.attach(document.body)
// import VConsole from 'vconsole' //微信里面调试工具
// if (process.env.GLOBAL_ENV != 'prod') {
//   new VConsole()
// }
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
