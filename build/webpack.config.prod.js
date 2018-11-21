/*
* @Author: chenchao
* @Date: 2018-08-21 14:27:44
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-11-21 17:28:33
*/

import entry from './config/entry'
import alias from './config/alias'
import loaders from './config/loaders'
import basePlugins from './config/basePlugins'
import prodPlugins from './config/prodPlugins'
import optimization from './config/optimization'
import { envConfig } from './config/env'
export default {
  mode: 'production',
  context: `${process.cwd()}/src`,
  entry,
  optimization,
  performance: { //The following asset(s) exceed the recommended size limit (244 KiB)  单个文件超过244K不会出现告警
    hints: false
  },  
  output: {
    path: `${process.cwd()}/dist`,
    publicPath: envConfig.publicPath,
    filename: 'js/[name].js',
    chunkFilename: 'js/[name]_[chunkhash:8].js'
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias
  },
  module: {
    rules: loaders
  },
  plugins: [...basePlugins,...prodPlugins]
}
