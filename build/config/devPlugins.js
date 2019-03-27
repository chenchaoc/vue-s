/*
* @Author: chenchao
* @Date: 2018-08-21 16:07:22
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-11-28 09:53:08
*/
import webpack from 'webpack'
import WebpackNotifierPlugin from 'webpack-notifier'
import { BundleAnalyzerPlugin }  from 'webpack-bundle-analyzer'
//开发插件
export default [
  // 热刷新
  new webpack.HotModuleReplacementPlugin(),
  // 打包完成通知
  new WebpackNotifierPlugin({
    contentImage: `${process.cwd()}/src/global/images/logo.jpg`,
    title: '开发环境编译成功',
    successSound: 'Submarine',
    failureSound: 'Glass',
    suppressSuccess: true
  }),
  // 可视化查看打包后的文件大小
  // new BundleAnalyzerPlugin(),
]
