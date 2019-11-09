// pages/results/results.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    array: [{
      mode: "aspectFit",
      text: "aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来"
    }],
    tempPic: null,
    resultAindex: null,
    resultBindex: null,
    resultCindex: null,
    resultDindex: null,
    resultEindex: null,
    resultAname: null,
    resultBname: null,
    resultCname: null,
    resultDname: null,
    resultEname: null,
    resultAnameCHS: null,
    resultBnameCHS: null,
    resultCnameCHS: null,
    resultDnameCHS: null,
    resultEnameCHS: null,
    resultArate: null,
    resultBrate: null,
    resultCrate: null,
    resultDrate: null,
    resultErate: null,
    resultAnum: null,
    resultBnum: null,
    resultCnum: null,
    resultDnum: null,
    resultEnum: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const data = JSON.parse(options.data["detected"][0][1]);
    const birdData = require("../../utils/data.js").birdData()

    const id0 = data[0]["birdNameCN"];
    const id1 = data[1]["birdNameCN"];
    const id2 = data[2]["birdNameCN"];
    const id3 = data[3]["birdNameCN"];
    const id4 = data[4]["birdNameCN"];

    this.setData({
      resultAindex: birdData[id0]["pic"],
      resultBindex: birdData[id1]["pic"],
      resultCindex: birdData[id2]["pic"],
      resultDindex: birdData[id3]["pic"],
      resultEindex: birdData[id4]["pic"],

      resultAname: birdData[id0]["英文名"],
      resultBname: birdData[id1]["英文名"],
      resultCname: birdData[id2]["英文名"],
      resultDname: birdData[id3]["英文名"],
      resultEname: birdData[id4]["英文名"],

      resultArate: data[0]["probability"],
      resultBrate: data[1]["probability"],
      resultCrate: data[2]["probability"],
      resultDrate: data[3]["probability"],
      resultErate: data[4]["probability"],

      resultAnameCHS: data[0]["birdNameCN"],
      resultBnameCHS: data[1]["birdNameCN"],
      resultCnameCHS: data[2]["birdNameCN"],
      resultDnameCHS: data[3]["birdNameCN"],
      resultEnameCHS: data[4]["birdNameCN"],
    })

  },

  showdetailButtonA: function() {
    wx.navigateTo({
      url: "../showdetail/showdetail?showId=" + this.data.resultAnameCHS
    })
  },
  showdetailButtonB: function() {
    wx.navigateTo({
      url: "../showdetail/showdetail?showId=" + this.data.resultBnameCHS
    })
  },
  showdetailButtonC: function() {
    wx.navigateTo({
      url: "../showdetail/showdetail?showId=" + this.data.resultCnameCHS
    })
  },
  showdetailButtonD: function() {
    wx.navigateTo({
      url: "../showdetail/showdetail?showId=" + this.data.resultDnameCHS
    })
  },
  showdetailButtonE: function() {
    wx.navigateTo({
      url: "../showdetail/showdetail?showId=" + this.data.resultEnameCHS
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})