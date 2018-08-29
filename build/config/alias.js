/*
* @Author: chenchao
* @Date: 2018-08-21 15:24:44
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-08-29 16:42:04
*/

const cwd = process.cwd() //项目根路径
//全局别名
export default {
  'util': `${cwd}/src/global/util/util.js`,
  'common': `${cwd}/src/global/common/common.js`,
  'ui': `${cwd}/src/global/components`,
  '@global': `${cwd}/src/global`,
  '@images': `${cwd}/src/images`
}