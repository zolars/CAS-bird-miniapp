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
    const birdData = require("../../utils/data.js").birdData()
    const results = JSON.parse(option.data)["detected"][0][1]
    console.log(JSON.parse(option.data)["detected"])

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
    })
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

  onSwiperChange: function(e) {
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


  drawRect: function() {
    const imageURL = wx.getStorageSync('image_cache')
    const ctx = wx.createCanvasContext('myCanvas', this)
    let that = this

    wx.getImageInfo({
      src: imageURL,
      success: function(res) {
        if (res.width <= res.height) {
          const temp_width = 350 / res.height * res.width
          ctx.drawImage(imageURL, (300 - temp_width) / 2, 0, temp_width, 350)
          ctx.setStrokeStyle('red')

          const coordinates = [
            that.data.data[that.data.current - 1][0][0] / res.width,
            that.data.data[that.data.current - 1][0][1] / res.height,
            (that.data.data[that.data.current - 1][0][2] - that.data.data[that.data.current - 1][0][0]) / res.width,
            (that.data.data[that.data.current - 1][0][3] - that.data.data[that.data.current - 1][0][1]) / res.height
          ]
          ctx.strokeRect((300 - temp_width) / 2 + temp_width * coordinates[0], 0 + 350 * coordinates[1], temp_width * coordinates[2], 350 * coordinates[3])
          ctx.draw()

        } else {
          const temp_height = 300 / res.width * res.height
          ctx.drawImage(imageURL, 0, (350 - temp_height) / 2, 300, temp_height)
          ctx.setStrokeStyle('red')

          const coordinates = [
            that.data.data[that.data.current - 1][0][0] / res.width,
            that.data.data[that.data.current - 1][0][1] / res.height,
            (that.data.data[that.data.current - 1][0][2] - that.data.data[that.data.current - 1][0][0]) / res.width,
            (that.data.data[that.data.current - 1][0][3] - that.data.data[that.data.current - 1][0][1]) / res.height
          ]
          ctx.strokeRect(0 + 300 * coordinates[0], (350 - temp_height) / 2 + temp_height * coordinates[1], 300 * coordinates[2], temp_height * coordinates[3])
          ctx.draw()
        }
      },
      fail: function(res) {
        console.log("drawRect Fail: ", res)
      },
    })
  },

  onChange: function(e) {
    console.log(e)
    const results = this.data.data[e.detail.current - 1][1]
    const birdData = require("../../utils/data.js").birdData()
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

    this.drawRect()

  },

  onCanvas: function() {
    const imageURL = wx.getStorageSync('image_cache')
    wx.previewImage({
      urls: [imageURL]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.drawRect()
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
    wx.getSavedFileList({
      success(res) {
        if (res.fileList.length > 0) {
          wx.removeSavedFile({
            filePath: res.fileList[0].filePath,
            complete(res) {
              console.log(res)
            }
          })
        }
      }
    })

    wx.clearStorage()
    try {
      wx.clearStorageSync()
    } catch (e) {
      // Do something when catch error
    }
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
  onShareAppMessage: function () {
    return {
      title: '中科院软件所 - 水鸟识别',
      desc: '由中科院软件所开发拍照水鸟识别小程序',
      path: '/page/index/index',
      imageUrl: '/images/temp1.jpeg',
    }
  }
})