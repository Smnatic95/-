// index.js
// 获取应用实例
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true
  },
  properties: {

  },
  attached: function () {
    this.getCurCity();
  },
  /**
   * 组件的初始数据
   */
  data: {
    showSwitchCity: 0,
    show_sortTypes: 0,
    show_mask_transparent: 0,
    cityName_location: null,
    curCityName: '广州',
    curSort_type: '默认排序',
    sort_types: [
      '价格高低',
      '优惠幅度',
      '距离远近'
    ]
  },
  /**
   * 组件的方法列表
   */
  methods: {
    scanCode() {
      wx.scanCode({
        onlyFromCamera: false,
        complete(res) {
          if (res.result) {
            console.log(res)
          } else {
            wx.showToast({
              title: res.errMsg,
              icon: 'error'
            })
          }
        }
      })
    },
    //获取定位
    getCurCity() {
      this.checkLocationAuth().then(() => {
        let _this = this;
        wx.getLocation({
          altitude: true,
          success(res) {
            console.log(res);
            if (_this.data.curCityName != "res.latitude") {
              _this.setData({
                showSwitchCity: 1,
                cityName_location: res.latitude
              })
            }
          },
          fail(err) {
            console.log(err)
          }
        })
      }).catch(err => {
        console.log(err)
      })
    },
    switchCity() {
      this.setData({
        curCityName: this.data.cityName_location,
        showSwitchCity: 0
      })
    },
    sortType_click() {
      this.setData({
        show_mask_transparent: 1,
        show_sortTypes: !this.data.show_sortTypes,
      })
    },
    chsSortType(e) {
      let index = e.currentTarget.dataset.index,
        curSort_type = this.data.sort_types[index];
      this.hideSortTypes();
      this.setData({
        curSort_type
      })
    },
    hideSortTypes() {
      this.setData({
        show_mask_transparent: 0,
        show_sortTypes:0
      })
    },
    checkLocationAuth() {
      return new Promise((resolve, reject) => {
        wx.getSetting({
          success: (res) => {
            console.log(JSON.stringify(res));
            //曾拒绝授权
            if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
              wx.showModal({
                title: '请求获取当前位置',
                content: '点击确认打开设置页面进行授权',
                success(res) {
                  if (res.confirm) {
                    wx.openSetting({
                      withSubscriptions: true,
                      success(dataAu) {
                        if (dataAu.authSetting["scope.userLocation"] == true) {
                          resolve()
                        } else {
                          reject('reject')
                        }
                      }
                    })
                  } else {
                    reject('cancel')
                  }
                }
              })
            } else {
              resolve();
            }
          }
        })
      });
    },
    ts_mask_transparent(e) {
      this.hideSortTypes()
    }
  }
})