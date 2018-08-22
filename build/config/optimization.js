/*
* @Author: chenchao
* @Date: 2018-08-21 16:05:59
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-08-22 14:33:02
*/

export default {
  splitChunks: {
    cacheGroups: {
      vendor: { 
        name: 'vendor',
        chunks: 'initial',
        priority: -10,
        minChunks: 2,
        reuseExistingChunk: true
      },
      common: {
        name: 'common',
        chunks: 'initial',
        minChunks: 2,
        test: /[\\/]src[\\/]/,
        priority: -5,
        reuseExistingChunk: true
      }
    }
  }
}