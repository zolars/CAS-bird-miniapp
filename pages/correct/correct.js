// pages/correct/correct.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imageURL: null,
    coordinate: null,
    inputShowed: false,
    inputVal: "",
    matches: {},
    onChoose: false,
    selected: null,
    toast: false,
    hideToast: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData(JSON.parse(options.data));
    this.setData({ imageURL: options.imageURL });
  },

  showInput: function() {
    this.setData({
      inputShowed: true,
    });
  },

  hideInput: function() {
    this.setData({
      inputVal: "",
      inputShowed: false,
    });
  },

  clearInput: function() {
    this.setData({
      inputVal: "",
    });
  },

  inputTyping: function(e) {
    const birdData = require("../../utils/data.js").getData("new_pedia");
    let inputVal = e.detail.value;
    this.setData({
      inputVal: inputVal,
    });
    if (inputVal !== "") {
      let str = ["", ...inputVal, ""].join(".*");
      let reg = new RegExp(str);
      let matches = {};
      for (let key in birdData) {
        if (reg.test(key)) {
          matches[key] = birdData[key];
        }
      }
      console.log(matches);
      this.setData({ matches: matches });
    }
  },

  onChoose: function(e) {
    this.setData({ onChoose: true, selected: e.currentTarget.id });
  },

  cancel: function() {
    this.setData({ onChoose: false, selected: null });
  },

  upload: function() {
    console.log("Upload the correct result: " + this.data.selected);
    this.setData({ onChoose: false, selected: null });
    this.setData({
      toast: true,
    });
    setTimeout(() => {
      this.setData({
        hideToast: true,
      });
      setTimeout(() => {
        this.setData({
          toast: false,
          hideToast: false,
        });
      }, 300);
    }, 1000);
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
