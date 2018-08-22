/*
* @Author: chenchao
* @Date: 2018-08-21 14:47:00
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-08-21 21:16:36
*/
export default [{
  path: '/mine',
  name: 'wyb-mine',
  component: () => import(/* webpackChunkName: "wyb-mine" */ './views/wyb-mine'),
  meta: {
    title: '我的'
  }
}]
