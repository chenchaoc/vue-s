/*
* @Author: chenchao
* @Date: 2018-08-21 15:24:44
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-11-09 17:58:52
*/

const cwd = process.cwd() //项目根路径
//全局路径别名
export default {
  // 文件
  'vue$': 'vue/dist/vue.js',
  'util': `${cwd}/src/global/util/util.js`,
  'wechat': `${cwd}/src/global/wechat/wechat.js`,
  'common': `${cwd}/src/global/common/common.js`,
  'api': `${cwd}/src/api.js`,
  // 文件夹
  '@components': `${cwd}/src/components`,
  '@globalcomponents': `${cwd}/src/global/components`,
}
