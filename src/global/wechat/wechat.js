/*
* @Author: chenchao
* @Date: 2018-08-21 15:29:49
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-11-09 17:57:18
*/
//https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115
const wx = window.wx
const allJsApiList = [ //js接口列表
  'onMenuShareTimeline', //朋友圈
  'onMenuShareAppMessage', //好友
  'onMenuShareQQ', //QQ
  'onMenuShareWeibo', //微博
  'onMenuShareQZone', //QQ空间
  'startRecord', //开始录音
  'stopRecord', //停止录音
  'onVoiceRecordEnd', //监听录音自动停止
  'playVoice', //播放语音
  'pauseVoice', //暂停播放
  'stopVoice', //停止播放
  'onVoicePlayEnd', //监听语音播放完毕
  'uploadVoice', //上传语音
  'downloadVoice', //下载语音
  'chooseImage', //拍照或从手机相册中选图
  'previewImage', //预览图片
  'uploadImage', //上传图片
  'downloadImage', //下载图片
  'translateVoice', //识别音频并返回识别结果
  'getNetworkType', //网络状态 返回网络类型2g，3g，4g，wifi
  'openLocation', //微信内置地图查看位置
  'getLocation', //地理位置
  'hideOptionMenu', //隐藏右上角菜单接口
  'showOptionMenu', //显示右上角菜单接口
  'hideMenuItems', //批量隐藏功能按钮
  'showMenuItems', //批量显示功能按钮
  'hideAllNonBaseMenuItem', //隐藏所有非基础按钮接口
  'showAllNonBaseMenuItem', //显示所有非基础按钮接口
  'closeWindow', //关闭当前网页窗口
  'scanQRCode', //微信扫一扫
  'chooseWXPay', //微信支付
  'openProductSpecificView', //跳转微信商品页
  'addCard', //添加微信卡券
  'chooseCard', //拉取适用卡券列表并获取用户选择信息
  'openCard' //查看微信卡券
]
function filterJsApiList(l = [0, 1]) {
  let list = []
  if (l.length > 0) {
    l.map((item, index) => {
      list.push(allJsApiList[item])
    })
  }
  return list
}
/**
 * [initSignature 所有需要使用JS-SDK的页面必须先注入配置信息，否则将无法调用]
 * @param  {Array}  jsApiList [description]
 * @return {[Promise]}           [description]
 */
function initSignature(jsApiList = filterJsApiList()) {
  console.log(location.href.split('#')[0])
  return $api.request('signatureUrl', { url: encodeURIComponent(location.href.split('#')[0]) }).then((res) => {
    const { appId, timestamp, nonceStr, signature } = res.data
    wx.config({
      debug: false,
      appId,
      timestamp,
      nonceStr,
      signature,
      jsApiList
    })
  })
}

/**
 * [share 微信分享页面必须加载的时候注入配置信息 一般在vue的created或者react的componentDidMount执行]
 * @param  {Object} option [配置信息]
 * @return {[type]}        [description]
 */
export function share(option = {}, jsApiList = filterJsApiList()) {
  return new Promise((resolve, reject) => {
    initSignature(jsApiList).then(() => {
      wx.ready(() => {
        const config = Object.assign({}, {
          type: 'link', //不填默认为link 如果是分享到朋友圈(可为music、video、link)
          title: '无忧宝，借款无忧', //分享标题
          link: 'http://www.chenchaoc.top', //分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致  公众号设置-->功能设置-->js接口安全域名
          imgUrl: 'http://www.chenchaoc.top/cc.jpeg', //分享图标
          dataUrl: '', //默认为空,朋友圈分享(如果type是music或video,则要提供数据链接)
          desc: '无忧宝，借款无忧' //分享描述
        }, option)
        //console.warn('wechat.share', config)
        wx.updateTimelineShareData({ //朋友圈
          type: config.type,
          title: config.title,
          link: config.link,
          imgUrl: config.imgUrl,
          desc: config.desc
        }, function(res) {
          resolve(res)
        })
        wx.updateAppMessageShareData({ //好友
          type: config.type, //可以为link、music、video
          title: config.title,
          link: config.link,
          imgUrl: config.imgUrl,
          desc: config.desc,
          dataUrl: config.dataUrl
        }, function(res) {
          resolve(res)
        })
      })
      wx.error((error) => {
        reject(error)
      })
    })
  })
}

/**
 * [closeWindow 关闭页面]
 * @return {[type]} [description]
 */
export function closeWindow() {
  wx.closeWindow()
}
/*基本类

举报: "menuItem:exposeArticle"

调整字体: "menuItem:setFont"

日间模式: "menuItem:dayMode"

夜间模式: "menuItem:nightMode"

刷新: "menuItem:refresh"

查看公众号（已添加）: "menuItem:profile"

查看公众号（未添加）: "menuItem:addContact"

传播类

发送给朋友: "menuItem:share:appMessage"

分享到朋友圈: "menuItem:share:timeline"

分享到QQ: "menuItem:share:qq"

分享到Weibo: "menuItem:share:weiboApp"

收藏: "menuItem:favorite"

分享到FB: "menuItem:share:facebook"

分享到 QQ 空间/menuItem:share:QZone

保护类

编辑标签: "menuItem:editTag"

删除: "menuItem:delete"

复制链接: "menuItem:copyUrl"

原网页: "menuItem:originPage"

阅读模式: "menuItem:readMode"

在QQ浏览器中打开: "menuItem:openWithQQBrowser"

在Safari中打开: "menuItem:openWithSafari"

邮件: "menuItem:share:email"

一些特殊公众号: "menuItem:share:brand" */

/**
 * [hideMenuItem 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮]
 * @return {[type]} [description]
 */
export function hideMenuItem(list = []) {
  initSignature([]).then(() => {
    wx.ready(() => {
      wx.hideMenuItems({
        menuList: list
      })
    })
  })
}

/**
 * [showMenuItem 要显示的菜单项，只能显示“传播类”和“保护类”按钮]
 * @param  {Array}  list [description]
 * @return {[type]}      [description]
 */
export function showMenuItem(list = []) {
  initSignature([]).then(() => {
    wx.ready(() => {
      wx.showMenuItems({
        menuList: list
      })
    })
  })
}

/**
 * [hideAllNonBaseMenuItem 隐藏所有非基础按钮接口]
 * @return {[type]} [description]
 */
export function hideAllNonBaseMenuItem() {
  initSignature([]).then(() => {
    wx.ready(() => {
      wx.hideAllNonBaseMenuItem()
    })
  })
}
/**
 * [showAllNonBaseMenuItem 显示所有功能按钮接口]
 * @return {[type]} [description]
 */
export function showAllNonBaseMenuItem() {
  initSignature([]).then(() => {
    wx.ready(() => {
      wx.showAllNonBaseMenuItem()
    })
  })
}
