/*
 * @Author:  chenchao
* @Date:  2018-09-18 10:06:56
* @email:  chenchao3.sh@superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-09-26 17:47:37
 */
// 混合app生成压缩静态文件至项目的dist文件夹，使用nginx将beta环境(目前是配置成beta环境的ajax)的app页面代理至本地js，便于调试
//location ~* /vp\/(?:js|css|images)\/([a-z0-9,-]*)(?:_.*)?.(css|js|png|jpg|gif|swf|jpeg)$ {
  //add_header Access-Control-Allow-Origin *;
  //alias  /Users/chenchao/githubdesktop/vue-s/dist/$1.$2;
//}
import webpack from 'webpack'
import webpackConfigWatch from '../webpack.config.watch'

// webpackConfigWatch.plugins.pop()

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
