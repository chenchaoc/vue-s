/*
* @Author: chenchao
* @Date: 2018-08-21 20:56:24
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-11-09 17:56:43
*/
module.exports = {
  "root": true,

  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module",
    "ecmaFeatures": {
      "globalReturn": true,
      "impliedStrict": true,
      "jsx": true,
      "allowImportExportEverywhere": false
    }
  },

  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "commonjs": true
  },

  "globals": Object.assign({
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

  "extends": "vue",
  "plugins": ["vue", "html"],

  /**
   * http://eslint.cn/
   *
   * "off" 或 0 - 关闭规则
   * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
   * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  "rules": {
    "indent": [2, 2, { "SwitchCase": 1 }],
    "camelcase": [2, { "properties": "never" }],
    "prefer-const": 0,
    "eqeqeq": 0,
    "comma-dangle": 0,
    "generator-star-spacing": [2, { "before": false, "after": true }],
    // "space-before-function-paren": [2, { "anonymous": "never", "named": "never", "asyncArrow": "always" }],
    "space-before-function-paren": 0,
    "no-unused-vars": 0,
    "spaced-comment": 0,
    "no-return-assign": 0,
    "object-curly-spacing": [2, "always"]
  }
}
