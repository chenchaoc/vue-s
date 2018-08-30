/*
* @Author: chenchao
* @Date: 2018-08-21 20:33:10
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-08-30 14:04:03
*/
export default [{
  path: '/repay/index',
  name: 'wyb-repay-index',
  component: () => import(/* webpackChunkName: "wyb-repay-index" */ './views/repay-index'),
  meta: {
    title: '还款'
  }
}, {
  path: '/repay/way',
  name: 'wyb-repay-way',
  component: () => import(/* webpackChunkName: "wyb-repay-way" */ './views/repay-way'),
  meta: {
    title: '还款'
  }
}]
