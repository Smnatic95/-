// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperDuration: 500,
    status_orders: [{
        name: '全部',
        code: 0,
        orders: null
      },
      {
        name: '待付款',
        code: 1,
        orders: null
      },
      {
        name: '待核销',
        code: 2,
        orders: null
      },
      {
        name: '待评价',
        code: 3,
        orders: null
      },
      {
        name: '退款/售后',
        code: 4,
        orders: null
      },
    ],
    currentSwiper_o: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      curTabindex: options.status || 0
    });
    this.getOrderList();
  },
  tabClick(e) {
    let curTabindex = e.currentTarget.dataset.index;
    //禁用动画
    this.setData({
      swiperDuration: 0
    })
    //切换
    this.setData({
      curTabindex
    })
    this.getOrderList();
  },
  getOrderList() {
    wx.showLoading({
      title: '加载中'
    })
    let status_orders = this.data.status_orders;
    let curTabindex = this.data.curTabindex;
    let curStatusCode = status_orders[curTabindex].code;
    status_orders[curTabindex].orders = null;
    this.setData({
      status_orders
    })
    setTimeout(() => {
      wx.hideLoading();
      // let randomC = parseInt(Math.random() * 3);
      let randomC = 4 - curTabindex;
        let orders = [];
      for (var i = 0; i < randomC; i++) {
        orders.push({
          id: i,
          statusCode: curStatusCode
        })
      }
      status_orders[curTabindex].orders = orders;
      this.setData({
        status_orders
      })
      console.log(this.data.status_orders)
    }, 500);
  },
  swiperChange(e) {
    let curTabindex = e.detail.current;
    //切换
    this.setData({
      curTabindex
    });
    this.getOrderList();
  },
  onSwipeFinish(e) {
    //重置动画
    this.setData({
      swiperDuration: 500
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