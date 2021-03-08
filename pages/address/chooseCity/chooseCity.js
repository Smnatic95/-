// pages/address/chooseCity/chooseCity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    word_citys: [{
      initials: 'A',
      citys: [{
        name: "阿里市"
      }, {
        name: "阿里市"
      }, {
        name: "阿里市"
      }, {
        name: "阿里市"
      }, {
        name: "阿里市"
      }, {
        name: "阿里市"
      }]
    }, {
      initials: 'B',
      citys: [{
        name: "北京市"
      }, {
        name: "北京市"
      }, {
        name: "北京市"
      }, {
        name: "北京市"
      }, {
        name: "北京市"
      }, {
        name: "北京市"
      }]
    }, {
      initials: 'G',
      citys: [{
        name: "广州市"
      }, {
        name: "广州市"
      }, {
        name: "广州市"
      }, {
        name: "广州市"
      }, {
        name: "广州市"
      }, {
        name: "广州市"
      }]
    },{
      initials: 'K',
      citys: [{
        name: "开封市"
      }, {
        name: "开封市"
      }, {
        name: "开封市"
      }, {
        name: "开封市"
      }, {
        name: "开封市"
      }, {
        name: "开封市"
      }]
    },
    {
      initials: 'Z',
      citys: [{
        name: "郑州市"
      }, {
        name: "郑州市"
      }, {
        name: "郑州市"
      }, {
        name: "郑州市"
      }, {
        name: "郑州市"
      }, {
        name: "郑州市"
      }]
    }],
    word_list: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    goCitysId: 'A',
    showChsWordClass: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  wordClick(e) {
    let chooseWord = e.currentTarget.dataset.word,
      hasCity = this.data.word_citys.some(citys => citys.initials == chooseWord);
      console.log(chooseWord,hasCity)
    this.setData({
      showChsWordClass: '',
      goCitysId: chooseWord
    })
    setTimeout(() => {
      this.setData({
        showChsWordClass: 'fadeOut'
      });
    }, 50)
    if (hasCity) {
      wx.pageScrollTo({
        selector: '#' + 'word' + chooseWord,
        duration: 150
      })
    } else {
      wx.showToast({
        icon: 'none',
        title: '暂无与' + chooseWord + '相关的城市',
        duration: 1500
      });
    };
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