/*
* @Author: chenchao
* @Date: 2018-08-21 14:45:46
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-09-18 17:19:59
*/
import loan from '../loan/router' //借款
import repay from '../repay/router' //还款
import mine from '../mine/router' //我的
import demo from '../components/router'
import _static from '../static/router'

let routes = []
if (process.env.NODE_ENV == 'development') {
  routes.push(...demo)
}
export default [
  ...routes,
  ...loan,
  ...repay,
  ...mine,
  ..._static,
  {
    path: '*',
    component: () => import(/* webpackChunkName: "wyb-404" */ '../static/views/404.vue')
  }
]
