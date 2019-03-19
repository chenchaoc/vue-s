/*
* @Author: chenchao
* @Date: 2018-08-21 16:05:59
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-11-20 16:50:29
*/
//提取重复引用文件 
//runtimeChunk，将入口提取出来，这样入口文件可以很快加载，并且当哪里有改动的时候，只有改动的地方和这个文件有变化
//import UglifyJsPlugin from 'uglifyjs-webpack-plugin'

export default {
/*  minimizer: [
    new UglifyJsPlugin({  //js压缩工具 //产品模式没有把console.log去掉，所以重写，否则的话mode为production情况下自动压缩
      uglifyOptions: {
        output: {
          comments: false, //去掉注释
          beautify: false //压缩成只有一整行
        },
        compress: {
        // 删除所有的console语句 产品模式删除  开发模式显示
          drop_console: true
        }
      }
    })
  ],*/
  runtimeChunk: {
    name: 'manifest'
  },
  splitChunks: {
    automaticNameDelimiter: '-',
    cacheGroups: {
      'wyb-common': {
        name: 'wyb-common',
        // filename: 'js/[name].js',
        chunks: 'initial',
        // minChunks: 2,
        test: /[\\/]src[\\/]/,
        priority: 0,
        reuseExistingChunk: true,
        enforce: true
      },
      'wyb-vendor': {
        name: 'wyb-vendor', //生成文件名，依据output规则
        filename: 'js/wyb-vendor.js',
        test: /[\\/]node_modules[\\/]/, //提取哪个目录下
        // test: /[\\/]node_modules[\\/](vue|vue-router|vuex|axios|fastclick)[\\/]/, //提取哪个目录下
        chunks: 'initial', //对于异步导入的文件是否处理 initial否 async是
        // chunks: 'all', //对于异步导入的文件是否处理 initial否 async是
        // priority: -5, //优先级，多个分组冲突时决定把代码放在哪块
        minChunks: 2, //被不同entry引用次数(import)
        // reuseExistingChunk: true,
        // enforce: true
      },
      default: false,
      vendors: false, //控制单路由的公共文件是否提取
      // vendors: {
      //   minChunks: 2,
      //   priority: -15,
      //   test: (module, chunks) => !(/mint-ui/.test(module.context)),
      // },
      // default: {
      //   minChunks: 2,
      //   priority: -15,
      //   test: (module, chunks) => !(/mint-ui/.test(module.context))
      // }
    }
  }
}
