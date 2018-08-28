/*
* @Author: chenchao
* @Date: 2018-08-21 14:45:46
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-08-28 14:51:38
*/
import loan from '../loan/router.js' //借款
import repay from '../repay/router.js' //还款
import mine from '../mine/router.js' //我的

export default [
  ...loan,
  ...repay,
  ...mine
]
