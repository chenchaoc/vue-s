/*
 * @Author:  chenchao
* @Date:  2018-09-18 10:06:56
* @email:  chenchao3.sh@superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-09-18 14:33:37
 */
// 混合app生成压缩静态文件至项目的dist文件夹，使用nginx将beta环境(目前是配置成beta环境的ajax)的app页面代理至本地js，便于调试
//location chenchaoc.top/vb/([a-z0-9,-]*\.?[a-z,0-9]*)(?:-.*)?.(css|js|png|jpeg|jpg|gif|bmp|svg){
  //add_header Access-Control-Allow-Origin *;
  //alias  /Users/chenchao/githubdesktop/vue-s/dist/$1.$2;
//}
import webpack from 'webpack'
import webpackConfigWatch from '../webpack.config.watch'

webpack(webpackConfigWatch, (err, stats) => {
  if (err) {
    return console.error(err)
  }
  const jsonStats = stats.toJson()
  if(jsonStats.errors.length > 0) {
    return console.log(jsonStats.errors.toString())
  }
  if(jsonStats.warnings.length > 0) {
    return console.log(jsonStats.warnings.toString())
  }
})
