// pages/message/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message_list: [{
        icon: "/static/message/icon1.png",
        name: '服务通知',
        title: ' 恭喜你参加的拼团已经组团成功了，请您恭喜你参加的拼团已经组团成功了，请您',
        time: '08:40',
        xmove: 0
      },
      {
        icon: "/static/message/icon2.png",
        name: '优惠促销',
        title: ' 恭喜你参加的拼团已经组团成功了，请您恭喜你参加的拼团已经组团成功了，请您',
        time: '08:40',
        xmove: 0
      },
      {
        icon: "/static/message/icon3.png",
        name: '物流助手',
        title: ' 恭喜你参加的拼团已经组团成功了，请您恭喜你参加的拼团已经组团成功了，请您',
        time: '两天前',
        xmove: 0
      }
    ],
    isToast: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (this.data.isToast) {
      this.delToa()
    }
  },
  delMsg(e) {
    let curIndex = e.currentTarget.dataset.index;
    this.setData({
      message_list: this.data.message_list.filter((item,index) => index != curIndex)
    })
  },
  delToa() {
    let message_list = this.data.message_list;
    message_list[0].xmove = -65;
    this.setData({
      message_list
    });
    setTimeout(() => {
     message_list = this.data.message_list;
      message_list[0].xmove = 0;
      this.setData({
        message_list,
        isToast: 0
      })
    }, 2500)
  },
  toDetail(e) {
    if (e.currentTarget.dataset.xmove == 0) {
      wx.navigateTo({
        url: '/pages/message/detail',
      })
    }
  },
  /**
   * 显示删除按钮
   */
  showDeleteButton: function (e) {
    let messageIndex = e.currentTarget.dataset.messageindex
    this.setXmove(messageIndex, -65)
  },
  /**
   * 隐藏删除按钮
   */
  hideDeleteButton: function (e) {
    let messageIndex = e.currentTarget.dataset.messageindex
    this.setXmove(messageIndex, 0)
  },
  /**
   * 设置movable-view位移
   */
  setXmove: function (messageIndex, xmove) {
    let message_list = this.data.message_list
    message_list[messageIndex].xmove = xmove
    this.setData({
      message_list: message_list
    })
  },

  /**
   * 处理movable-view移动事件
   */
  handleMovableChange: function (e) {
    if (e.detail.source === 'friction') {
      if (e.detail.x < -30) {
        this.showDeleteButton(e)
      } else {
        this.hideDeleteButton(e)
      }
    } else if (e.detail.source === 'out-of-bounds' && e.detail.x === 0) {
      this.hideDeleteButton(e)
    }
  },

  /**
   * 处理touchstart事件
   */
  handleTouchStart(e) {
    this.startX = e.touches[0].pageX;
  },

  /**
   * 处理touchend事件
   */
  handleTouchEnd(e) {
    if (e.changedTouches[0].pageX < this.startX && e.changedTouches[0].pageX - this.startX <= -30) {
      this.showDeleteButton(e)
    } else if (e.changedTouches[0].pageX > this.startX && e.changedTouches[0].pageX - this.startX < 30) {
      this.showDeleteButton(e)
    } else {
      this.hideDeleteButton(e)
    }
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