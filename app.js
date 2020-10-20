//app.js
App({
  onLaunch: function () {
    // let that = this
    // wx.login({
    //   success: function(res) {
    //     var code = res.code;
    //     if (code) {
    //       console.log('获取用户登录凭证：' + code);
    //       //that.toLogin()
    //     } else {
    //       console.log('获取用户登录态失败：' + res.errMsg);
    //     }
    //   }
    // });
  },
  toIndex(){
    wx.navigateTo({
      url:'../index/index',
      success: function(res){
        console.log('跳转成功')
      },
      fail: function(res){
        console.log('跳转失败：'+res.errMsg)
      }
    })
  },
  globalData: {

  }
})