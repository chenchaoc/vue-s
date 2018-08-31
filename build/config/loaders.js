/*
* @Author: chenchao
* @Date: 2018-08-21 17:08:12
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-08-31 16:08:01
*/
import MiniCssExtractPlugin from 'mini-css-extract-plugin' //从js分离出css,代替ExtractTextPlugin,webpack4官方推荐,支持非入口文件的css异步加载
import eslintFriendlyFormatter from 'eslint-friendly-formatter'
import { envName } from './env.js'

function postcssPlugins() {
  return {
    plugins() {
      return [
        require('autoprefixer')({
            browsers: ['last 2 version', 'iOS >= 7', 'Android >= 4', 'not ie < 9']
        })
      ]
    }
  }
}
// 文件规则
export default [
  {
    enforce: 'pre',
    test: /\.(vue|js)$/,
    exclude: /node_modules/,
    use: [{
      loader: 'eslint-loader',
      options: {
        failOnError: true,
        cache: true,
        emitWarning: true,
        formatter: eslintFriendlyFormatter
      }
    }]
  }, {
    test: /\.vue$/,
    exclude: /node_modules/,
    use: {
      loader: 'vue-loader'
    }   
  }, {
    test: /\.js$/, //匹配文件
    exclude: /node_modules/, //排除node_modules
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: false
      }
    }
  }, {
    test: /\.(sa|sc|c)ss$/,
    //exclude: /node_modules/, //排除node_modules
    use: [
      {
        loader: envName == 'dev' ? 'vue-style-loader' : MiniCssExtractPlugin.loader
      }, {
        loader: 'css-loader'
      }, {
        loader: 'postcss-loader',
        options: postcssPlugins()
      }, {
        loader: 'sass-loader'
      }
    ]
  }, {
    test: /\.(png|jpg|gif|swf|jpeg)(\?.*)?$/,
    use: [{
      loader: 'file-loader',
      options:{
        name: 'images/[name]_[sha512:hash:base64:8].[ext]'
      }
    }]
  }, {
    test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      name: 'iconfont/[name]_[sha512:hash:base64:8].[ext]'
    }
  }
]