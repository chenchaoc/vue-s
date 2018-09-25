/*
* @Author: chenchao
* @Date: 2018-08-21 15:24:53
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-09-25 17:33:29
*/
//入口文件
export default {
  'vendor': [
    'vue',
    'vuex',
    'vue-router',
    'axios',
    'fastclick',
  ],
  'common': [
    './global/common/common.js',
    './global/util/util.js',
    './global/wechat/wechat.js',
    './global/iconfont/iconfont.css',
    './global/style/reset.scss',
    './global/style/base.scss',
    './app.js'
  ]
}
