/*
* @Author: chenchao
* @Date: 2018-08-21 14:47:21
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-08-24 17:11:16
*/
export default [{
  path: '/',
  alias: ['/index', '/loan'],
  name: 'wyb-loan-index',
  component: () => import(/* webpackChunkName: "wyb-loan-index" */ './views/loan-index.vue'),
  meta: {
    title: '借款'
  }
}, {
  path: '/loan/request',
  name: 'wyb-loan-request',
  component: () => import(/* webpackChunkName: "wyb-loan-request" */ './views/loan-request.vue'),
  meta: {
    title: '申请借款'
  }
}]
