/*
* @Author: chenchao
* @Date: 2018-08-21 16:07:22
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-08-21 17:22:26
*/
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default [
  new MiniCssExtractPlugin({ filename: '[name].css'}),
  new webpack.HotModuleReplacementPlugin()
]
