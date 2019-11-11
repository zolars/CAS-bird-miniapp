Page({
  data: {
    data: null,
    amount: 0,
    current: 1,
    results: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(option) {
    const birdData = require("../../utils/data.js").birdData();
    const results = JSON.parse(option.data)["detected"][0][1];
    console.log(JSON.parse(option.data)["detected"]);

    this.setData({
      data: JSON.parse(option.data)["detected"],
      // current: results[0].birdNameCN,
      amount: JSON.parse(option.data)["detected"].length,
      results: [{
        key: results[0].birdNameCN,
        nameEN: birdData[results[0].birdNameCN]["英文名"],
        probability: results[0].probability,
        pic: birdData[results[0].birdNameCN]["pic"],
      }, {
        key: results[1].birdNameCN,
        nameEN: birdData[results[1].birdNameCN]["英文名"],
        probability: results[1].probability,
        pic: birdData[results[1].birdNameCN]["pic"],
      }, {
        key: results[2].birdNameCN,
        nameEN: birdData[results[2].birdNameCN]["英文名"],
        probability: results[2].probability,
        pic: birdData[results[2].birdNameCN]["pic"],
      }],
    });
    console.log(results);
  },

  onTabsChange(e) {
    console.log('onTabsChange', e)
    const {
      key
    } = e.detail
    const index = this.data.results.map((n) => n.key).indexOf(key)

    this.setData({
      key,
      index,
    })
  },

  onSwiperChange(e) {
    console.log('onSwiperChange', e)
    const {
      current: index,
      source
    } = e.detail
    const {
      key
    } = this.data.results[index]

    if (!!source) {
      this.setData({
        key,
        index,
      })
    }
  },

  onChange(e) {
    console.log(this.data.data, this.data.amount, e.detail.current);
    const results = this.data.data[e.detail.current - 1][1];
    const birdData = require("../../utils/data.js").birdData();

    this.setData({
      current: e.detail.current,
      index: results[0].birdNameCN,
      results: [{
        key: results[0].birdNameCN,
        nameEN: birdData[results[0].birdNameCN]["英文名"],
        probability: results[0].probability,
        pic: birdData[results[0].birdNameCN]["pic"],
      }, {
        key: results[1].birdNameCN,
        nameEN: birdData[results[1].birdNameCN]["英文名"],
        probability: results[1].probability,
        pic: birdData[results[1].birdNameCN]["pic"],
      }, {
        key: results[2].birdNameCN,
        nameEN: birdData[results[2].birdNameCN]["英文名"],
        probability: results[2].probability,
        pic: birdData[results[2].birdNameCN]["pic"],
      }],
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    const imageURL = wx.getStorageSync('image_cache');
    const ctx = wx.createCanvasContext('myCanvas', this);

    // let img = new Image();
    // img.src = imageURL;
    // console.log('width:' + img.width + ', height:' + img.height);

    ctx.drawImage(imageURL, 40, 0, 220, 400);
    ctx.draw();
  },

  onCanvas(){
    wx.previewImage({
      urls: [wx.getStorageSync('image_cache')] // 需要预览的图片http链接列表
    })
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