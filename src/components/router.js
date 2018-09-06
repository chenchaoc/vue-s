/*
 * @Author:  chenchao
 * @Date:  2018-09-05 11:40:48
 * @email:  chenchao3.sh@superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-09-06 18:11:15
 */

export default [{
  path: '/demo',
  name: 'wyb-demo',
  component: () => import(/* webpackChunkName: "wyb-demo" */ './index.vue'),
  meta: {
    title: 'demo'
  }
}, {
  path: '/demo/picker',
  name: 'wyb-demo-picker',
  component: () => import(/* webpackChunkName: "wyb-demo-picker" */ './Picker/demo.vue'),
  meta: {
    title: '筛选'
  }
}, {
  path: '/demo/multiple-picker',
  name: 'wyb-demo-multiple-picker',
  component: () => import(/* webpackChunkName: "wyb-demo-multiple-picker" */ './MultiplePicker/demo.vue'),
  meta: {
    title: '组合筛选'
  }
}, {
  path: '/demo/header',
  name: 'wyb-demo-header',
  component: () => import(/* webpackChunkName: "wyb-demo-header" */ './Header/demo.vue'),
  meta: {
    title: '头部'
  }
}, {
  path: '/demo/nodatas',
  name: 'wyb-demo-nodatas',
  component: () => import(/* webpackChunkName: "wyb-demo-nodatas" */ './NoDatas/demo.vue'),
  meta: {
    title: '无数据'
  }
}, {
  path: '/demo/img-view',
  name: 'wyb-demo-img-view',
  component: () => import(/* webpackChunkName: "wyb-demo-img-view" */ './ImgView/demo.vue'),
  meta: {
    title: '图片预览'
  }
}]
