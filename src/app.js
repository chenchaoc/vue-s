/*
* @Author: chenchao
* @Date: 2018-08-21 14:36:40
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-08-22 17:13:07
*/

import App from './app.vue'
import Vue from 'vue'
import router from './router/index'
import store from './store/store'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
