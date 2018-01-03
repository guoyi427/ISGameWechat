// pages/task_decide/task_decide.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    viewAnimationData: {},

    defenseViewSub: "bottomViewHide",
    destroyViewSub: "bottomViewHide",
    fireViewSub: "bottomViewHide",

    defenseShow: false,
    destroyShow: false,
    fireShow: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '任务判定',
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
  
  },

  /// 坚守
  defenseAction: function () {
    var showAnimation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease'
    })
    
    if (this.data.defenseShow) {
      this.setData({
        destroyViewSub: "bottomViewHide",
        fireViewSub: "bottomViewHide",
        defenseViewSub: "bottomViewHide",
        defenseShow: false
      })
      showAnimation.opacity(0).step()
    } else {
      this.setData({
        destroyViewSub: "bottomViewHide",
        fireViewSub: "bottomViewHide",
        defenseViewSub: "bottomViewShow",
        defenseShow: true
      })
      showAnimation.opacity(1).step()
    }

    showAnimation.scale(1.2, 1.2).step()
    showAnimation.rotate(180).step()

    this.setData({
      viewAnimationData:showAnimation.export()
    })
  },

  /// 破坏
  destroyAction: function () {
    var showAnimation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })

    this.showAnimation = showAnimation

    if (this.data.destroyShow) {
      this.setData({
        destroyViewSub: "bottomViewHide",
        fireViewSub: "bottomViewHide",
        defenseViewSub: "bottomViewHide",
        destroyShow: false
      })
      this.showAnimation.opacity(0).step()
    } else {
      this.setData({
        destroyViewSub: "bottomViewShow",
        fireViewSub: "bottomViewHide",
        defenseViewSub: "bottomViewHide",
        destroyShow: true
      })
      this.showAnimation.opacity(1).step()
    }
    this.setData({
      viewAnimationData: this.showAnimation.export()
    })
  },

  /// 行动
  fireAction: function () {
    var showAnimation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })

    this.showAnimation = showAnimation

    if (this.data.fireShow) {
      this.setData({
        destroyViewSub: "bottomViewHide",
        fireViewSub: "bottomViewHide",
        defenseViewSub: "bottomViewHide",
        fireShow: false
      })
      showAnimation.opacity(0).step()
    } else {
      this.setData({
        destroyViewSub: "bottomViewHide",
        fireViewSub: "bottomViewShow",
        defenseViewSub: "bottomViewHide",
        fireShow: true
      })
      showAnimation.opacity(1).step()
    }

    this.setData({
      viewAnimationData: showAnimation.export()
    })
  }
})