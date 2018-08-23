/*
* @Author: chenchao
* @Date: 2018-08-21 16:07:22
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-08-22 21:22:12
*/
import webpack from 'webpack'
import { BundleAnalyzerPlugin }  from 'webpack-bundle-analyzer' //可视化查看打包后的文件

export default [
  new webpack.HotModuleReplacementPlugin(),
  //new BundleAnalyzerPlugin(), //可视化查看打包后的文件
]
