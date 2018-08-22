/*
* @Author: chenchao
* @Date: 2018-08-21 20:33:10
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-08-21 21:18:36
*/
export default [{
  path: '/repay',
  name: 'wyb-repay',
  component: () => import(/* webpackChunkName: "wyb-repay" */ './views/wyb-repay'),
  meta: {
    title: '还款'
  }
}]
