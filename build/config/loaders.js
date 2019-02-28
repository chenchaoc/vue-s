/*
* @Author: chenchao
* @Date: 2018-08-21 17:08:12
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-11-27 17:43:43
*/
import MiniCssExtractPlugin from 'mini-css-extract-plugin' //从js分离出css,代替ExtractTextPlugin,webpack4官方推荐,支持非入口文件的css异步加载
import eslintFriendlyFormatter from 'eslint-friendly-formatter'
import { envName } from './env.js'

function postcssPlugins() {
  return {
    plugins() {
      return [
        require('autoprefixer')({
            browsers: ['> 0.01%', 'last 8 version', 'not ie <= 8', 'Firefox > 20']
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
    test: /\.(png|jpg|gif|swf|jpeg|svg)(\?.*)?$/,
    exclude: /iconfont.svg/, //字体图标的svg打包至iconfont文件夹
    use: [{
      loader: 'file-loader',
      options:{
        name: 'images/[name]_[sha512:hash:base64:8].[ext]'
      }
    }]
  }, {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'file-loader',
    options: {
      name: 'iconfont/[name]_[sha512:hash:base64:8].[ext]'
    }
  }, {
    test: /iconfont.svg/,
    loader: 'file-loader',
    options: {
      name: 'iconfont/[name]_[sha512:hash:base64:8].[ext]'
    }
  }, {
    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: 'media/[name]_[hash:8].[ext]'
    }
  }, /* { //如果用url-loader就会生成base64，不会在iconfont出来 .woff .eot .ttf .otf的文件，全部打包至common.css
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      name: 'iconfont/[name]_[sha512:hash:base64:8].[ext]'
    }
  } */
]
