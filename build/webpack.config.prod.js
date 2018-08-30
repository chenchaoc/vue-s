/*
* @Author: chenchao
* @Date: 2018-08-21 14:27:44
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-08-30 13:03:22
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
    filename: 'js/[name]_[hash:8].js',
    //chunkFilename: '[name][id].js'
  },
  resolve: {
    extensions: [".js", ".vue", ".css", ".scss"],
    alias
  },
  module: {
    rules: loaders
  },
  plugins: [...basePlugins,...prodPlugins]
}