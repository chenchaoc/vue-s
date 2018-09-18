/*
* @Author: chenchao
* @Date: 2018-08-21 14:27:30
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-09-18 10:06:00
*/

import loaders from './config/loaders'
import alias from './config/alias'
import basePlugins from './config/basePlugins'
import devPlugins from './config/devPlugins'
import optimization from './config/optimization'
import entry from './config/entry'
import { envConfig } from './config/env'

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
    extensions: ['.js', '.vue', '.json'],
    alias
  },
  module: {
    rules: loaders
  },
  plugins: [...basePlugins, ...devPlugins]
}
