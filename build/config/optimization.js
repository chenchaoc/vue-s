/*
* @Author: chenchao
* @Date: 2018-08-21 16:05:59
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-11-07 17:29:42
*/
//提取重复引用文件 
//runtimeChunk，将入口提取出来，这样入口文件可以很快加载，并且当哪里有改动的时候，只有改动的地方和这个文件有变化
//import UglifyJsPlugin from 'uglifyjs-webpack-plugin'

export default {
  // runtimeChunk: {
  //   name: 'manifest'
  // },
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
        filename: 'js/wyb-[name].js',
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
