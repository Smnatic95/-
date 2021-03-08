// pages/Logistics/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: '',
    latitude: '',
    points: [],
    polyline: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var lat = 39.921354,
      lng = 116.416917;
    var temp = [{
        latitude: 29.730558,
        longitude: 91.089588
      },
      {
        latitude: 34.778887,
        longitude: 113.628577
      }
    ]
    var polyline = [{
      points: temp,
      color: "#ff0000",
      width: 5
    }];
    this.setData({
      longitude: lng,
      latitude: lat,
      polyline: polyline,
      points: temp,
      markers: [{
          id: 0,
          latitude: temp[0].latitude,
          longitude: temp[0].longitude,
          width: 0,
          height: 0,
          // alpha:0,
          callout: {
            content: "收货地址",
            padding: 3,
            display: 'ALWAYS',
            textAlign: 'center',
          }
        },
        {
          id: 1,
          latitude: temp[1].latitude,
          longitude: temp[1].longitude,
          width: 0,
          height: 0,
          callout: {
            content: "发货地址",
            padding: 3,
            display: 'ALWAYS',
            textAlign: 'center'
          }
        }
      ]
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