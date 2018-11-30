/*
* @Author: chenchao
* @Date: 2018-08-21 16:07:22
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-11-28 09:53:08
*/
import webpack from 'webpack'
import WebpackNotifierPlugin from 'webpack-notifier'
import { BundleAnalyzerPlugin }  from 'webpack-bundle-analyzer' //可视化查看打包后的文件
//开发插件
export default [
  new webpack.HotModuleReplacementPlugin(),
  new WebpackNotifierPlugin({
    title: '开发服务器',
    successSound: 'Submarine',
    failureSound: 'Glass',
    suppressSuccess: true
  }),
  // new BundleAnalyzerPlugin(), //可视化查看打包后的文件
]
