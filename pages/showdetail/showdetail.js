// pages/showdetail/showdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resultBindex: null,  //"../../images/label/003.jpg",
    showId: null,

    birdInfoMap: {
      number: "Null",
      attrs: {
        "中文名": "Null",
        "英文名": "Null",
        "拉丁文名": "Null",
        "分类": "Null",
        "IUCN 红色名录等级": "Null",
        "描述": "Null",
        "虹膜": "Null",
        "嘴": "Null",
        "脚": "Null",
        "叫声": "Null",
        "分布范围": "Null",
        "分布状况": "Null",
        "习性": "Null",
        "俗名": "Null"
      }
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const showId = options.showId;
    console.log(showId)
    const birdData = require("../../utils/data.js").birdData()
    this.setData({
      showId: showId,
      resultBindex: birdData[showId]["pic"],
      birdInfoMap: {
        number: "Null",
        attrs: {
          "中文名": showId,
          "英文名": birdData[showId]["英文名"],
          "拉丁文名": birdData[showId]["拉丁文名"],
          "分类": birdData[showId]["分类"],
          "IUCN 红色名录等级": birdData[showId]["IUCN 红色名录等级"],
          "描述": birdData[showId]["描述"],
          "虹膜": birdData[showId]["虹膜"],
          "嘴": birdData[showId]["嘴"],
          "脚": birdData[showId]["脚"],
          "叫声": birdData[showId]["叫声"],
          "分布范围": birdData[showId]["分布范围"],
          "分布状况": birdData[showId]["分布状况"],
          "习性": birdData[showId]["习性"],
          "俗名": birdData[showId]["俗名"],
        }
      },
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
    return {
      title: '中科院软件所 - 水鸟识别',
      desc: '由中科院软件所开发拍照水鸟识别小程序',
      path: '/pages/index/index',
      imageUrl: '/images/temp1.jpeg',
    }
  }
})