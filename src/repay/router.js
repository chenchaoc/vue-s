/*
* @Author: chenchao
* @Date: 2018-08-21 20:33:10
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-12-06 11:51:41
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
    title: '还款方式'
  }
}, {
  path: '/repay/video',
  name: 'wyb-repay-video',
  component: () => import(/* webpackChunkName: "wyb-repay-video" */ './views/repay-video'),
  meta: {
    title: '视频播放'
  }
}, {
  path: '/repay/test',
  component: () => import(/* webpackChunkName: "wyb-repay-test" */ './views/repay-test'),
  children: [{
    path: 'a',
    name: 'wyb-repay-test-a',
    component: () => import(/* webpackChunkName: "wyb-repay-test-a" */ './views/repay-test-a'),
    meta: {
      keepAlive: true,
      title: 'test-a'
    }
  }, {
    path: 'b',
    name: 'wyb-repay-test-b',
    component: () => import(/* webpackChunkName: "wyb-repay-test-b" */ './views/repay-test-b'),
    meta: {
      title: 'test-b'
    }
  }]
}]
