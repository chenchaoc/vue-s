/*
* @Author: chenchao
* @Date: 2018-08-21 14:36:40
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-08-31 14:53:12
*/

import App from './app.vue'
import Vue from 'vue'
import router from './router/index'
import store from './store/store'
import Fastclick from 'fastclick'
Fastclick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
