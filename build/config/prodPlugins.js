/*
 * @Author:  chenchao 
 * @Date:  2018-08-22 13:11:37 
 * @email:  chenchao3.sh@superjia.com 
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-09-07 09:57:13
 */

import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import ZipWebpackPlugin from 'zip-webpack-plugin'
import ImageminPlugin from 'imagemin-webpack-plugin'
import ManifestPlugin from 'webpack-plugin-manifest'

//生产插件
export default [
  new MiniCssExtractPlugin({
    filename: 'css/[name]-[contenthash:8].css'
  }),
  new ImageminPlugin({  //图片压缩插件
    test: /\.(jp[e]?g|png|gif|svg)$/i,
    disable: false,
    pngquant: {
      quality: '90'
    }            
  }),  
  new ManifestPlugin({ //文件路径映射
    fileName: 'manifest.json',
    basePath: `${process.cwd()}/dist/`
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
  new ZipWebpackPlugin({
    path: '../uploadZip',  //相对于根目录
    filename: 'wyb.zip'
  })
]










