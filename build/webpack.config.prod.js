/*
* @Author: chenchao
* @Date: 2018-08-21 14:27:44
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-08-30 10:23:29
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
  output: {
    path: `${process.cwd()}/dist`,
    publicPath: envConfig.publicPath,
    filename: '[name]_[hash:8].js',
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