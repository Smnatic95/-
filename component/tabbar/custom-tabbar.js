Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 自定义的组件属性,这里是tabbar的list
    tabbar: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    change: function(e) {
      // 更新属性和数据的方法与更新页面数据的方法类似
      //获取当前选中的下标
      var index = e.currentTarget.dataset.selectedindex;
      this.triggerEvent('tabChange',index);
    },
  }
})
