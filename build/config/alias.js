/*
* @Author: chenchao
* @Date: 2018-08-21 15:24:44
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-08-22 17:13:59
*/

const cwd = process.cwd()

export default {
  'util': `${cwd}/src/global/util/util.js`,
  'common': `${cwd}/src/global/common/common.js`,
  '@global': `${cwd}/src/global`,
  '@globalcomponents': `${cwd}/src/global/components`
}