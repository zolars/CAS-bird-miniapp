// pages/showdetail/showdetail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    resultIndex: null, //"../../images/label/003.jpg",
    showId: null,

    birdInfoMap: {
      number: "Null",
      attrs: null,
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const showId = options.showId;
    console.log(showId);
    const birdData = require("../../utils/data.js").getData("pedia");
    const newbirdData = require("../../utils/data.js").getData("new_pedia");

    var detail = {};

    for (var attr in newbirdData[showId]) {
      detail[attr] = newbirdData[showId][attr];
    }
    for (var attr in birdData[showId]) {
      detail[attr] = birdData[showId][attr];
    }

    var pic = detail.pic;
    delete detail.pic;
    this.setData({
      showId: showId,
      resultIndex: pic,
      birdInfoMap: {
        number: "Null",
        attrs: detail,
      },
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: "水鸟识别 - 中科院软件所",
      desc: "由中科院软件所开发拍照水鸟识别小程序",
      path: "/pages/index/index",
      imageUrl: "/images/temp1.jpeg",
    };
  },
});
