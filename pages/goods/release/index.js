// pages/goods/release/release.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgTempFilePaths: [],
    show_panel_type: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  release(e) {
    console.log(e)
  },
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
  cateGoryClick(e) {
    this.setData({
      show_panel_type: !this.data.show_panel_type
    })
  },
  back1(){
    wx.navigateBack({
      delta: 1
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