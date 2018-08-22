/*
* @Author: chenchao
* @Date: 2018-08-21 14:27:44
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-08-22 13:23:19
*/

import entry from './config/entry.js'
import alias from './config/alias.js'
import loaders from './config/loaders.js'
import basePlugins from './config/basePlugins.js'
import prodPlugins from './config/prodPlugins.js'
import optimization from './config/optimization.js'
import { envConfig } from './config/env.js'

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