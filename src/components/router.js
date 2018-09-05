/*
 * @Author:  chenchao
 * @Date:  2018-09-05 11:40:48
 * @email:  chenchao3.sh@superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-09-05 16:01:45
 */

export default [{
  path: '/demo/picker',
  name: 'wyb-demo-picker',
  component: () => import(/* webpackChunkName: "wyb-demo-picker" */ './Picker/demo.vue'),
  meta: {
    title: 'picker'
  }
}, {
  path: '/demo/multiple/picker',
  name: 'wyb-demo-multiple-picker',
  component: () => import(/* webpackChunkName: "wyb-demo-multiple-picker" */ './MultiplePicker/demo.vue'),
  meta: {
    title: 'multiple-picker'
  }
}]
