// pages/goods/goods_detail/goods_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperHeight: 300,
    swiperIndex: 0,
    goodsImgs: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this,
      goodsImgs = [
        '/static/goods/s1.jpg',
        '/static/goods/s2.jpg',
        '/static/goods/s3.jpg'
      ];
    wx.getImageInfo({
      src: goodsImgs[0],
      success(res) {
        console.log(res)
        let windowWidth = wx.getSystemInfoSync().windowWidth;
        _this.setData({
          swiperHeight: (windowWidth / res.width) * res.height,
          goodsImgs
        })
      },
      fail(err) {
        console.log(err)
        wx.showModal({
          title: '图片加载出错',
          showCancel: 0,
          content: err.errMsg
        })
      }
    })
    this.setData({
      goodsId: options.id
    });
  },
  report(e) {
    wx.showModal({
      confirmText: '确认举报',
      confirmColor: '#FE080B',
      editable:true,
      placeholderText:'请填写举报原因',
      success(res) {
        console.log(res)
      },
      fail(err) {
        console.log(err)
      }
    })
  },
  previewSwiperImg(e) {
    let curIndex = e.currentTarget.dataset.index,
      _this = this;
    wx.previewImage({
      urls: _this.data.goodsImgs,
      current: _this.data.goodsImgs[curIndex]
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
  bindSwiperchange(e) {
    let current = e.detail.current;
    this.setData({
      swiperIndex: current
    })
  },
  back1() {
    wx.navigateBack({
      delta: 1,
    })
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