// 获取应用实例
const app = getApp();
Page({
  data: {
    tabbar: {
      "color": "#999999",
      "selectedColor": "#7788dd",
      "borderStyle": "#dcdcdc",
      "backgroundColor": "#ffffff",
      "selectedIndex": null,
      "list": [{
          "key": "index",
          "iconPath": "../../static/tabbar/index.jpg",
          "selectedIconPath": "../../static/tabbar/indexSel.jpg",
          "text": "首页"
        },
        {
          "key": "add",
          "iconPath": "../../static/tabbar/add.png",
          "iconType": "big overflow circle shadow",
          "choose": "disable"
        },
        {
          "key": "my",
          "iconPath": "../../static/tabbar/my.png",
          "selectedIconPath": "../../static/tabbar/mySel.png",
          "text": "我的"
        }
      ]
    }
  },
  onLoad(options) {
    if(options.page&&options.page=="my"){
      this.selTab(2)
    }else{
      this.selTab(0)
    }
  },
  tabChange: function (e) {
    let selectedIndex = e.detail;
    console.log('点击了第' + (selectedIndex + 1) + '项');
    if (selectedIndex == 0) {
      wx.setNavigationBarTitle({
        title: '小程序名称'
      })
    } else if (selectedIndex == 2) {
      wx.setNavigationBarTitle({
        title: '我的'
      })
    }
    if (selectedIndex == 1) {
      wx.showActionSheet({
        alertText: '选择操作',
        itemList: ['发布商品', '转卖'],
        success(res){
          console.log(res.tapIndex)
          if(res.tapIndex==0){
            wx.navigateTo({
              url: '/pages/goods/release/index',
            })
          }
        },
        fail(err){
          console.log(err)
        }
      })
    } else {
      this.selTab(selectedIndex)
    }
  },
  selTab(index) {
    let tabbar = this.data.tabbar;
    tabbar.selectedIndex = index;
    this.setData({
      tabbar
    })
  },
  onPageScroll(e){
    
  }
})