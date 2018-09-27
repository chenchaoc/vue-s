/*
 * @Author:  chenchao
* @Date:  2018-09-18 10:26:17
* @email:  chenchao3.sh@superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-09-26 11:40:29
 */

import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import ImageminPlugin from 'imagemin-webpack-plugin'

export default [
  new MiniCssExtractPlugin({
    filename: 'css/[name].css'
  }),
  new ImageminPlugin({  //图片压缩插件
    test: /\.(jp[e]?g|png|gif|svg)$/i,
    disable: false,
    pngquant: {
      quality: '90'
    }
  }),
  new OptimizeCssAssetsPlugin({  //css压缩去除注释
    cssProcessor: require('cssnano'),
    cssProcessorOptions: { discardComments: {removeAll: true } },
    canPrint: true
  }),
  new CleanWebpackPlugin(
    ['uploadZip','dist'],  //清空文件夹名称
    {
      root: process.cwd(),  //根目录
      verbose: false,  //是否在控制台输出
      dry: false,  //false直接删除文件  true模拟删除
      exclude: [''], //排除不删除的目录
      watch: false,  //true删除文件重新编译
      allowExternal: false  //允许是否在webpack跟外清除文件夹，默认false 不允许
    }
  ),
]