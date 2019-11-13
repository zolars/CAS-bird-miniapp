// pages/indexMap/indexMap.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    scale: 5,
    alpha: 0.8,
    markers:[{
      latitude: -39.540000,
      longtitude: 116.230000,
      iconPath: "/images/location-fill.png"
    },{
        latitude: 39.540000,
        longtitude: -116.230000,
        iconPath: "/images/location-fill.png"
    },{
        latitude: 39.540000,
        longtitude: 116.230000,
        iconPath: "/images/location-fill.png"
    },{
        latitude: -39.540000,
        longtitude: -116.230000,
        iconPath: "/images/location-fill.png"
    }]
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
    return {
      title: '中科院软件所 - 水鸟识别',
      desc: '由中科院软件所开发拍照水鸟识别小程序',
      path: '/page/index/index',
      imageUrl: '/images/temp1.jpeg',
    }
  }

})