/*
* @Author: chenchao
* @Date: 2018-08-21 16:52:21
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-08-30 11:47:40
*/
import { argv } from 'yargs'; //可以拿到npm run命令中的字段

// 环境：dev|test|beta|prod
export const envName = ['dev', 'test', 'beta', 'prod'].find(e => argv[e])

export const envConfig = {
    dev: {
        publicPath: '/',
        assetsSubDirectory: 'static'
    },
    test: {
        publicPath: '//www.chenchaoc.top/vue-test/',
        assetsSubDirectory: 'static'
    },
    beta: {
        publicPath: '//www.chenchaoc.top/vue-beta/',
        assetsSubDirectory: 'static'
    },
    prod: {
        publicPath: '//www.chenchaoc.top/vue-prod/',
        assetsSubDirectory: 'static'
    }
}[envName]