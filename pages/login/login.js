// pages/telLogin/telLogin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    role: 'visitor',
    telError:'',
    yzmError:'',
    telNumber:'',
    yzmNumber:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  radioChange(e){
    this.setData({
      role:e.detail.value
    })
  },
  handleLogin(){
    if(!this.data.telNumber){
      this.setData({
        telError: '请输入手机号'
      })
      return
    }else{
      this.setData({
        telError: ''
      })
    }
    if(!this.data.yzmNumber){
      this.setData({
        yzmError: '请输入验证码'
      })
      return
    }else{
      this.setData({
        yzmError: ''
      })
    }
    wx.switchTab({
      url: '../my-order/my-order',
    })
  },
  handletelInput(e){
    this.setData({
      telNumber: e.detail.value
    })
  },
  handleyzmInput(e){
    this.setData({
      yzmNumber: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})