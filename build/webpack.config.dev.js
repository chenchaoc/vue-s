/*
* @Author: chenchao
* @Date: 2018-08-21 14:27:30
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-08-22 13:23:50
*/

import loaders from './config/loaders.js'
import alias from './config/alias.js'
import basePlugins from './config/basePlugins.js'
import devPlugins from './config/devPlugins.js'
import optimization from './config/optimization.js'
import entry from './config/entry.js'
import { envConfig } from './config/env.js'

export default {
  mode: 'development',
  context: `${process.cwd()}/src`,
  entry,
  optimization,
  devtool: 'source-map',
  output: {
    path: `${process.cwd()}/dist`,
    publicPath: envConfig.publicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.css', '.scss'],
    alias
  },
  module: {
    rules: loaders
  },
  plugins: [...basePlugins,...devPlugins]
}
