/*
* @Author: chenchao
* @Date: 2018-08-21 17:08:12
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-09-14 11:52:32
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
        cacheDirectory: true
      }
    }
  }, {
    test: /\.(sa|sc|c)ss$/,
    include: [ //可以是正则也可以是路径字符串的数组
      /src/,
      /mint-ui/
    ],
    //exclude: /node_modules/, //排除node_modules,mint-ui引入单独文件时不能排除掉
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
      }, {
        loader: 'sass-resources-loader', //全局sass变量
        options: {
          resources: `${process.cwd()}/src/global/style/color.scss`
        }
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
