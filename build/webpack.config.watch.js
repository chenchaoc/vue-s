/*
 * @Author:  chenchao
* @Date:  2018-09-18 10:24:12
* @email:  chenchao3.sh@superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-09-26 11:38:48
 */
//"watch-test": "babel-node ./build/task/watch.js --test" test环境生成本地代码nginx代理调试app内页面
//"watch-beta": "babel-node ./build/task/watch.js --beta" beta环境生成本地代码nginx代理调试app内页面

import loaders from './config/loaders'
import alias from './config/alias'
import basePlugins from './config/basePlugins'
import watchPlugins from './config/watchPlugins'
import optimization from './config/optimization'
import entry from './config/entry'
import { envConfig } from './config/env'

export default {
  mode: 'production',
  context: `${process.cwd()}/src`,
  entry,
  watch: true,
  optimization,
  performance: { //The following asset(s) exceed the recommended size limit (244 KiB)  单个文件超过244K不会出现告警
    hints: false
  },
  output: {
    path: `${process.cwd()}/dist`,
    publicPath: envConfig.publicPath,
    filename: 'js/[name].js' //chunkhash在watch的情况下只会重新生成更改的文件，而如果用hash的话会将所有文件重新生成一遍，配合webpack.HashedModuleIdsPlugin
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias
  },
  module: {
    rules: loaders
  },
  plugins: [...basePlugins, ...watchPlugins]
}
