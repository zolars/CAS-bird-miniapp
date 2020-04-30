// pages/aboutUs/aboutUs.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    image_bg: "../../images/temp4.jpeg",
    btn_hidden: "none",
    length: -1,
    color: null,
    results: null,
  },

  onClickHome: function(e) {
    wx.reLaunch({ url: "/pages/index/index" });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const length = options.length;
    const colors = JSON.parse(options.colors);
    const dataSearch = require("../../utils/data.js").getData("data_search");
    const poyang = require("../../utils/data.js").getData("poyang");
    const birdData = require("../../utils/data.js").getData("pedia");

    let results = [];
    for (let key in dataSearch) {
      if (
        dataSearch[key]["体长"] >= 0.95 * length &&
        dataSearch[key]["体长"] <= 1.05 * length
      ) {
        for (let color in colors) {
          if (colors[color] && dataSearch[key]["颜色"].indexOf(color) != -1) {
            if (poyang.indexOf(key) != -1) {
              results.push({
                key: key,
                length: dataSearch[key]["体长"],
                color: dataSearch[key]["颜色"],
                pic: birdData[key]["pic"],
              });
            }
          }
        }
      }
    }

    this.setData({ results: results });
    console.log(this.data.results);
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
      imageUrl: "/images/share.png",
    };
  },
});
