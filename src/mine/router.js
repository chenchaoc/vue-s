/*
* @Author: chenchao
* @Date: 2018-08-21 14:47:00
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-08-24 17:07:36
*/
export default [{
  path: '/mine',
  name: 'wyb-mine-index',
  component: () => import(/* webpackChunkName: "wyb-mine-index" */ './views/mine-index'),
  meta: {
    title: '我的'
  }
}]
