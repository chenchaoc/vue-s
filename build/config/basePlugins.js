/*
* @Author: chenchao
* @Date: 2018-08-21 16:07:48
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-08-29 16:41:14
*/

import webpack from 'webpack'
import ProgressBarPlugin from 'progress-bar-webpack-plugin'
import chalk from 'chalk';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import WebpackNotifierPlugin from 'webpack-notifier'
import { envName } from './env'
const VueLoaderPlugin = require('vue-loader/lib/plugin')
//公共插件
export default [
  new VueLoaderPlugin(),
  new ProgressBarPlugin({
    format: `${chalk.bold('[:bar]')} ${chalk.cyan.bold(':percent (:elapseds)')} :msg`,
    clear: true,
    summary: false,
    summaryContent: false,
    customSummary (buildTime) {
      process.stdout.write(`=====${chalk.green.bold(`[ built in ${buildTime} ]`)}=====`)
    }
  }),
  //webpack4中process.env.NODE_ENV默认为production
  new webpack.DefinePlugin({
    'process.env': {
      //'NODE_ENV': '"production"',
      'GLOBAL_ENV': JSON.stringify(envName)
    }
  }),
  new webpack.ProvidePlugin({  //全局载入的可以调用的组件名称
    Vue: 'vue',
    VueRouter: 'vue-router',
    util: 'util',
    common: 'common'
  }),
  new HtmlWebpackPlugin({  //自动生成html文件并载入打包后的css js
    title: '无忧宝',
    filename: 'index.html',
    template: 'app.html',
    inject: 'body',  //默认插入body底部 选项：true, body, head, false
    minify: false,  //是否压缩html文件
  }),
  new WebpackNotifierPlugin({
    title: '开发服务器',
    successSound: 'Submarine',
    failureSound: 'Glass',
    suppressSuccess: true
  }),
  new webpack.HashedModuleIdsPlugin()
]



