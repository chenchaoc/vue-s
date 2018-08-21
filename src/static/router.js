/*
* @Author: chenchao
* @Date: 2018-08-21 14:47:00
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-08-21 15:12:23
*/
export default [{
  path: '/wyb/static',
  name: 'wyb-static',
  component: () => import(/* webpackChunkName: "wyb-static" */ './views/wyb-static'),
  meta: {
    title: 'static页面'
  }
}]