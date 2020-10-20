// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list:  [
      {
        "pagePath": "/pages/my-order/my-order",
        "iconPath": "/image/solution.png",
        "selectedIconPath": "/image/solution-active.png",
        "text": "我的预约"
      },
      {
        "pagePath": "/pages/new-order/new-order",
        "iconPath": "/image/file-add.png",
        "selectedIconPath": "/image/file-add-active.png",
        "text": "新增预约"
      },
      {
        "pagePath": "/pages/personal/personal",
        "iconPath": "/image/user.png",
        "selectedIconPath": "/image/user-active.png",
        "text": "个人中心"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})
