/*
* @Author: chenchao
* @Date: 2018-08-21 14:27:30
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-08-21 21:54:46
*/
import webpack from 'webpack'
import ProgressBarPlugin from 'progress-bar-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import chalk from 'chalk'
import readline from 'readline'

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
    extensions: ['.js', '.vue'],
    alias
  },
  module: {
    rules: loaders
  },
  plugins: [...basePlugins,...devPlugins]
}
