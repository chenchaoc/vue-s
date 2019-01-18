/*
* @Author: chenchao
* @Date: 2018-08-21 15:41:54
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-11-14 14:45:36
*/

import express from 'express' //nodejs 框架
import ip from 'ip' //ip地址
import open from 'open' //打开浏览器
import chalk from 'chalk' //变色
import webpack from 'webpack' //webpack
import webpackDevMiddleware from 'webpack-dev-middleware' //nodejs服务中间件
import webpackHotMiddleware from 'webpack-hot-middleware' //热刷新
import connectHistoryApiFallback from 'connect-history-api-fallback' //刷新页面不会404
import httpProxyMiddleware from 'http-proxy-middleware' //http代理中间件
import readline from 'readline'

import proxyConfig from '../config/proxyConfig'
import webpackConfig from '../webpack.config.dev'

const hotclient = ['webpack-hot-middleware/client?noInfo=true&reload=true']
const entry = webpackConfig.entry
Object.keys(entry).forEach((name) => {
  const value = entry[name]
  if (Array.isArray(value)) {
    value.unshift(...hotclient)
  } else {
    entry[name] = [...hotclient, value]
  }
})

const webpackCompiler = webpack(webpackConfig)
const devMiddleware = webpackDevMiddleware(webpackCompiler, {
  publicPath: webpackCompiler.options.output.publicPath,
  noInfo: true,
  quiet: false,
  stats: {
    colors: true,
    hash: false,
    version: false,
    timings: false,
    assets: false,
    chunks: false,
    children: false,
    modules: false
  }
})

const hotMiddleware = webpackHotMiddleware(webpackCompiler, {
  log: false
})

const devServer = express()

devServer.use(connectHistoryApiFallback({ verbose: false }))
devServer.use(devMiddleware)
devServer.use(hotMiddleware)

// devServer.use(httpProxyMiddleware(['/api', '/img'], {
//   logLevel: 'silent',
//   target: proxyConfig.proxyTarget,
//   changeOrigin: true
// }))

// devServer.use(httpProxyMiddleware(['**/*.rest', '**/*.action'], {
//   logLevel: 'silent',
//   target: proxyConfig.proxyTarget,
//   changeOrigin: true
// }))

devServer.listen(proxyConfig.devServerPort, function () {
  readline.clearLine(process.stdout, 0);
  readline.cursorTo(process.stdout, 0, null);
  console.log(`dev-server at ${chalk.magenta.underline(`http://${ip.address()}:${proxyConfig.devServerPort}/`)}`)
  open(`http://${ip.address()}:${proxyConfig.devServerPort}/`)
})
