/*
* @Author: chenchao
* @Date: 2018-08-21 14:36:40
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-08-22 11:38:35
*/

import App from './app.vue'
import Vue from 'vue'
import router from './router/index.js'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
