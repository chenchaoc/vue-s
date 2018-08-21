/*
* @Author: chenchao
* @Date: 2018-08-21 17:05:28
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-08-21 17:07:31
*/
import ip from 'ip'; //ip地址

export default {
  devServerPort: 6888, // 开发服务器端口号
  proxyTarget: `http://${ip.address()}:6888`, // 代理目标API
  bkdServerPort: 6888
}