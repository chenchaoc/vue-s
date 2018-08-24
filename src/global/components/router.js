/**
 * 理财UI组件demo
 */
export default [{
  path: '/demo',
  name: 'demo',
  component: resolve => import(/* webpackChunkName: "demo" */ './index').then(resolve),
  meta: {
    title: 'demo'
  }
}, {
  path: '/demo/accordion',
  name: 'demo-accordion',
  component: resolve => import(/* webpackChunkName: "demo-accordion" */ './accordion/demo').then(resolve),
  meta: {
    title: '折叠面板'
  }
}, {
  path: '/demo/actionsheet',
  name: 'demo-actionsheet',
  component: resolve => import(/* webpackChunkName: "demo-actionsheet" */ './actionsheet/demo').then(resolve),
  meta: {
    title: '上拉菜单'
  }
}, {
  path: '/demo/animated-num',
  name: 'demo-animated-num',
  component: resolve => import(/* webpackChunkName: "demo-animated-num" */ './animated-num/demo').then(resolve),
  meta: {
    title: '数值动画'
  }
}, {
  path: '/demo/button',
  name: 'demo-button',
  component: resolve => import(/* webpackChunkName: "demo-button" */ './button/demo').then(resolve),
  meta: {
    title: '按钮'
  }
}, {
  path: '/demo/cell',
  name: 'demo-cell',
  component: resolve => import(/* webpackChunkName: "demo-cell" */ './cell/demo').then(resolve),
  meta: {
    title: '单元格'
  }
}, {
  path: '/demo/flexbox',
  name: 'demo-flexbox',
  component: resolve => import(/* webpackChunkName: "demo-flexbox" */ './flexbox/demo').then(resolve),
  meta: {
    title: '弹性盒子'
  }
}, {
  path: '/demo/input',
  name: 'demo-input',
  component: resolve => import(/* webpackChunkName: "demo-input" */ './input/demo').then(resolve),
  meta: {
    title: '输入框'
  }
}, {
  path: '/demo/msgbox',
  name: 'demo-msgbox',
  component: resolve => import(/* webpackChunkName: "demo-msgbox" */ './msgbox/demo').then(resolve),
  meta: {
    title: '提示框'
  }
}, {
  path: '/demo/page',
  name: 'demo-page',
  component: resolve => import(/* webpackChunkName: "demo-page" */ './page/demo').then(resolve),
  meta: {
    title: '页面刷新或无限加载'
  }
}, {
  path: '/demo/panel',
  name: 'demo-panel',
  component: resolve => import(/* webpackChunkName: "demo-panel" */ './panel/demo').then(resolve),
  meta: {
    title: '面板'
  }
}, {
  path: '/demo/progress',
  name: 'demo-progress',
  component: resolve => import(/* webpackChunkName: "demo-progress" */ './progress/demo').then(resolve),
  meta: {
    title: '进度条'
  }
}, {
  path: '/demo/slider',
  name: 'demo-slider',
  component: resolve => import(/* webpackChunkName: "demo-slider" */ './slider/demo').then(resolve),
  meta: {
    title: '轮播'
  }
}, {
  path: '/demo/swiper',
  name: 'demo-swiper',
  component: resolve => import(/* webpackChunkName: "demo-swiper" */ './swiper/demo').then(resolve),
  meta: {
    title: '滑动轮播'
  }
}, {
  path: '/demo/tab',
  name: 'demo-tab',
  component: resolve => import(/* webpackChunkName: "demo-tab" */ './tab/demo').then(resolve),
  meta: {
    title: '选项卡'
  }
}, {
  path: '/demo/toast',
  name: 'demo-toast',
  component: resolve => import(/* webpackChunkName: "demo-toast" */ './toast/demo').then(resolve),
  meta: {
    title: '消息提示'
  }
}, {
  path: '/demo/picker',
  name: 'demo-picker',
  component: resolve => import(/* webpackChunkName: "demo-picker" */ './picker/demo').then(resolve),
  meta: {
    title: 'picker选择'
  }
}]
