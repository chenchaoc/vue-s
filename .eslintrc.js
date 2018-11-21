/*
* @Author: chenchao
* @Date: 2018-08-21 20:56:24
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-11-21 16:35:47
*/
module.exports = {
  "root": true,
  "parser": "babel-eslint", //解析器
  "parserOptions": {
    "ecmaVersion": 9, //默认设置为3，5（默认）， 你可以使用 6、7、8 或 9 来指定你想要使用的 ECMAScript 版本。你也可以用使用年份命名的版本号指定为 2015（同 6），2016（同 7），或 2017（同 8）或 2018（同 9）
    "sourceType": "module", //设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
    "ecmaFeatures": {
      "globalReturn": true, //允许在全局作用域下使用 return 语句
      "impliedStrict": true, //启用全局 strict mode (如果 ecmaVersion 是 5 或更高)
      "jsx": true, //启用 JSX
      "allowImportExportEverywhere": false //允许在文件任意位置使用import 或者 export ?
    }
  },

  "env": { //一个环境定义了一组预定义的全局变量
    "browser": true, //浏览器环境中的全局变量
    "node": true, //Node.js 全局变量和 Node.js 作用域
  },

  "globals": Object.assign({ //脚本在执行期间访问的额外的全局变量
    "pageConfig": true,
    "window": true
  }, {
    "Vue": "vue",
    "VueRouter": "vue-router",
    "Vuex": "vuex",
    "util": "util",
    "common": "common",
    "wechat": "wechat",
    "$api": 'api'
  }),

  "extends": "vue", //一个配置文件可以从基础配置中继承已启用的规则
  "plugins": ["vue", "html"], //插件 是一个 npm 包，通常输出规则。一些插件也可以输出一个或多个命名的 配置。要确保这个包安装在 ESLint 能请求到的目录下 plugins 属性值 可以省略包名的前缀 eslint-plugin-

  /**
   * http://eslint.cn/
   *
   * "off" 或 0 - 关闭规则
   * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
   * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  "rules": { //启用的规则及其各自的错误级别
    "indent": [2, 2, { "SwitchCase": 1 }], //缩进
    "camelcase": [2, { "properties": "never" }], //强制使用骆驼拼写法命名约定
    "prefer-const": 0, //要求使用 const 声明那些声明后不再被修改的变量
    "eqeqeq": 0, //要求使用 === 和 !== 
    "comma-dangle": 2, //要求或禁止末尾逗号
    "generator-star-spacing": [2, { "before": false, "after": true }], //强制 generator 函数中 * 号周围使用一致的空格
    // "space-before-function-paren": [2, { "anonymous": "never", "named": "never", "asyncArrow": "always" }],
    "space-before-function-paren": 0, //强制在 function的左括号之前使用一致的空格
    "no-unused-vars": 0, //禁止出现未使用过的变量
    "spaced-comment": 0, //强制在注释中 // 或 /* 使用一致的空格
    "no-return-assign": 0, //禁止在 return 语句中使用赋值语句
    "object-curly-spacing": [2, "always"] //强制在大括号中使用一致的空格
  }
}
