# 无忧宝
移动端单页应用样例。
## 实现
+ vue2 + vue-router3 + axios + vuex3 SPA
+ webpack4 + HMR
+ 环境配置 + 打包 + 发布
+ ES6+构建，ES6+代码 + ESLint

## 使用
### 开发
    npm run dev
1.编写`src`目录下的代码保存，浏览器即可热刷新  

### 构建发版
    npm run test
    npm run beta
    npm run prod

### 监听 不发布版本生成本地代码调试app内页面
    npm run watch-test
    npm run watch-beta
    nginx 配置

## 目录结构

h5-app 项目根目录
|---build 项目构建代码
|　　|---config 构建项目用到的配置
|　　|---task 构建任务入口
|　　|---webpack.config.dev.js webpack开发配置
|　　|---webpack.config.prod.js webpack上线配置
|　　|---webpack.config.watch.js webpack本地调试app内页面
|---dist 打包代码目录
|---node_modules node模块
|---src 应用源码目录
|　　|---components 部分通用组件
|　　|---app 浏览器下载app相关
|　　|---global 全局性
|　　|　　|---bridge 与原生app交互桥
|　　|　　|---components 全局组件
|　　|　　|---iconfont 字体图标
|　　|　　|---common 整站通用适配
|　　|　　|---module 其他模块(样式重置，polyfill)
|　　|　　|---util 工具方法
|　　|　　|---style 样式
|　　|　　|---wechat 微信相关
|　　|---loan 借款相关
|　　|---mine 我的相关
|　　|---repay 还款相关
|　　|---router 所有route集合
|　　|---static 静态页面相关
|　　|---store vuex相关
|　　|---app.js 业务入口
|---uploadZip 上线Zip包目录
|---.babelrc babel运行时配置
|---.editorconfig 编辑器配置
|---.eslintignore eslint忽略配置
|---.eslintrc.js eslint运行时配置
|---.gitignore git忽略配置
|---package-lock.json npm配置锁
|---package.json npm配置
|---README.md 项目自述
