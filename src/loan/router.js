/*
* @Author: chenchao
* @Date: 2018-08-21 14:47:21
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-08-24 14:49:13
*/
export default [{
  path: '/',
  alias: ['/index', '/loan'],
  name: 'wyb-loan',
  component: () => import(/* webpackChunkName: "wyb-index" */ './views/wyb-loan.vue'),
  meta: {
    title: ''
  }
}]
