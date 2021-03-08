// pages/shop/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabbar: {
      "color": "#999999",
      "selectedColor": "#7788dd",
      "borderStyle": "#dcdcdc",
      "backgroundColor": "#ffffff",
      "selectedIndex": 0,
      "list": [{
          "key": "index",
          "iconPath": "/static/shop/tabbar/shop.png",
          "selectedIconPath": "/static/shop/tabbar/shopSel.png",
          "text": "首页"
        },
        {
          "key": "dynamic",
          "iconPath": "/static/shop/tabbar/dynamic.png",
          "selectedIconPath":"/static/shop/tabbar/dynamicSel.png",
          "text": "店铺动态"
        },
        {
          "key": "category",
          "iconPath": "/static/shop/tabbar/category.png",
          "selectedIconPath": "/static/shop/tabbar/categorySel.png",
          "text": "宝贝分类"
        }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  tabChange: function (e) {
    let selectedIndex = e.detail;
    console.log('点击了第' + (selectedIndex + 1) + '项');
    this.selTab(selectedIndex)
    if (selectedIndex == 0) {
      wx.setNavigationBarTitle({
        title: '店铺首页'
      })
    } else if (selectedIndex == 1) {
      wx.setNavigationBarTitle({
        title: '店铺动态'
      })
    }else if (selectedIndex == 2) {
      wx.setNavigationBarTitle({
        title: '宝贝分类'
      })
    }
  },
  selTab(index) {
    let tabbar = this.data.tabbar;
    tabbar.selectedIndex = index;
    this.setData({
      tabbar
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