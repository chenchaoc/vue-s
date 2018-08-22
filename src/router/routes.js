/*
* @Author: chenchao
* @Date: 2018-08-21 14:45:46
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-08-21 21:16:41
*/
import index from '../index/router.js'
import repay from '../repay/router.js'
import mine from '../mine/router.js'

export default [
  ...index,
  ...repay,
  ...mine
]
