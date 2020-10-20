//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    typeList:[
      {
        text:'全部'
      },{
        text:'待审核'
      },{
        text:'审核通过'
      },{
        text:'审核不通过'
      },{
        text:'待确认'
      },{
        text:'邀约成功'
      }
    ],
    orderList:[
      {
        status: 0,
        type: 1,
        orderText: '尊敬的[访客姓名] 您好， 您预约的【XXX公司】【被访人】 [预约起止时间]的预约申请，请耐心等待审核',
        orderId: 123456789
      },
      {
        status: 1,
        type: 1,
        orderText: '尊敬的[访客姓名] 您好， 您预约的【XXX公司】【被访人姓名】 [预约起止时间]的预约申请已成功，请准时到达',
        orderId: 123456789
      },
      {
        status: 3,
        type: 2,
        orderText: '尊敬的[访客姓名] 您好， 您预约的【XXX公司】【被访人】 [预约起止时间]的预约申请，请耐心等待审核',
        orderId: 123456789
      },
      {
        status: 4,
        type: 1,
        orderText: '尊敬的[访客姓名] 您好， 您预约的【XXX公司】【被访人】 [预约起止时间]的预约申请，请耐心等待审核',
        orderId: 123456789
      },
    ],
    statusText:{
      0:'待审核',
      1:'审核通过',
      2:'待确认',
      3:'审核不通过'
    },
    activeIndex:0,
  },
  onShow: function(){
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  onLoad: function () {

  },
  select(e){
    this.setData({
      activeIndex: e.currentTarget.dataset.currentIndex
    })
  }
})
