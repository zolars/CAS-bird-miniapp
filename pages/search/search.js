// pages/aboutUs/aboutUs.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    image_bg: "../../images/temp4.jpeg",
    images: [
      "../../images/0.png",
      "../../images/1.png",
      "../../images/2.png",
      "../../images/3.png",
    ],
    if_hidden: [true, true, true, true],
    sliderText: "请拖动滑框选择您看到的鸟类的体长",
    length: -1,
  },

  onClick: function(e) {
    wx.navigateBack();
  },

  sliderChange: function(e) {
    let length = e.detail.value;
    let sliderText = "该鸟的体长约为：";
    let if_hidden = [true, true, true, true];
    if (length >= 1000) {
      sliderText += length / 1000 + "米";
    } else if (length > 10) {
      sliderText += length / 10 + "厘米";
    }

    if (length < 150) {
      sliderText += "\n麻雀体型或者更小";
      if_hidden[0] = false;
    } else if (length >= 150 && length < 300) {
      sliderText += "\n麻雀和雪鸽体型之间";
      if_hidden[1] = false;
    } else if (length >= 300 && length < 600) {
      sliderText += "\n雪鸽和渡鸦体型之间";
      if_hidden[2] = false;
    } else if (length >= 600 && length < 1400) {
      sliderText += "\n渡鸦和天鹅体型之间";
      if_hidden[3] = false;
    } else if (length >= 1400) {
      sliderText += "\n天鹅体型或者更大";
      if_hidden[3] = false;
    }
    this.setData({
      length: length,
      sliderText: sliderText,
      if_hidden: if_hidden,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

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
