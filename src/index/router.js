/*
* @Author: chenchao
* @Date: 2018-08-21 14:47:21
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-08-21 19:56:45
*/
export default [{
  path: '/',
  //alias: ['/'],
  name: 'wyb-index',
  component: () => import(/* webpackChunkName: "wyb-index" */ './views/wyb-index.vue'),
  meta: {
    title: 'index页面'
  }
}]