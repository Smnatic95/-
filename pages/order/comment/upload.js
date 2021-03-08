// pages/order/comment/upload.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgTempFilePaths: [],
    starArray: new Array(5),
    desc_score: 1,
    wuliu_score: 5,
    attitude_score: 2
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
  chooseImg(e) {
    let _this = this;
    wx.chooseImage({
      count: 8,
      success(res) {
        _this.setData({
          imgTempFilePaths: _this.data.imgTempFilePaths.concat(res.tempFilePaths)
        })
        console.log(_this.data.imgTempFilePaths)
      }
    })
  },
  previewUpImgs(e) {
    let curIndex = e.currentTarget.dataset.index,
      _this = this;
    wx.previewImage({
      urls: _this.data.imgTempFilePaths,
      current: _this.data.imgTempFilePaths[curIndex]
    })
  },
  starClick(e) {
    let type = e.currentTarget.dataset.type,
      score = Number(e.currentTarget.dataset.index) + 1;
    this.setData({
      [type]: score
    });
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