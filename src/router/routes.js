/*
* @Author: chenchao
* @Date: 2018-08-21 14:45:46
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-09-05 11:44:40
*/
import loan from '../loan/router' //借款
import repay from '../repay/router' //还款
import mine from '../mine/router' //我的

export default [
  ...loan,
  ...repay,
  ...mine
]
