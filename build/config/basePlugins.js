/*
* @Author: chenchao
* @Date: 2018-08-21 16:07:48
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-11-28 09:52:30
*/

import webpack from 'webpack'
import ProgressBarPlugin from 'progress-bar-webpack-plugin'
import chalk from 'chalk';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { envName } from './env'
import VueLoaderPlugin from 'vue-loader/lib/plugin'
//公共插件
export default [
  //打包进度
  new ProgressBarPlugin({
    format: `${chalk.bold('[:bar]')} ${chalk.cyan.bold(':percent (:elapseds)')} :msg`,
    clear: true,
    summary: false,
    summaryContent: false,
    customSummary (buildTime) {
      process.stdout.write(`=====${chalk.green.bold(`[ built in ${buildTime} ]`)}=====`)
    }
  }),
  // vue-loader
  new VueLoaderPlugin(),
  //全局环境变量 webpack4中process.env.NODE_ENV默认为production
  new webpack.DefinePlugin({
    'process.env': {
      //'NODE_ENV': '"production"',
      'GLOBAL_ENV': JSON.stringify(envName)
    }
  }),
  // 全局变量
  new webpack.ProvidePlugin({
    Vue: 'vue',
    VueRouter: 'vue-router',
    Vuex: 'vuex',
    util: 'util',
    bridge: 'bridge',
    common: 'common',
    wechat: 'wechat',
    $api: 'api'
  }),
  //自动生成html文件并载入打包后的css js
  new HtmlWebpackPlugin({
    //title: '无忧宝',
    filename: 'index.html',
    template: 'app.html',
    inject: 'body',  //默认插入body底部 选项：true, body, head, false
    chunksSortMode: 'manual',
    chunks: ['manifest', 'wyb-vendor', 'wyb-common'],
    minify: false,  //是否压缩html文件
  }),
  //chunkhash长效缓存
  new webpack.HashedModuleIdsPlugin()
]
