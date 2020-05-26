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
    const birdData = require("../../utils/data.js").getData("new_pedia");
    const results = JSON.parse(option.data)["detected"][0][1];

    // const poyang = require("../../utils/data.js").getData("poyang");
    // if (poyang.indexOf(results[0].birdNameCN) == -1) {
    //   results[0].probability = "很少出现在鄱阳湖: 0";
    // }
    // if (poyang.indexOf(results[1].birdNameCN) == -1) {
    //   results[1].probability = "很少出现在鄱阳湖: 0";
    // }
    // if (poyang.indexOf(results[2].birdNameCN) == -1) {
    //   results[2].probability = "很少出现在鄱阳湖: 0";
    // }

    this.setData({
      data: JSON.parse(option.data)["detected"],
      amount: JSON.parse(option.data)["detected"].length,
      results: [
        {
          key: results[0].birdNameCN,
          nameEN: birdData[results[0].birdNameCN]["英文名"],
          probability: results[0].probability,
          pic:
            "https://birdid.iscas.ac.cn:8080/getImage?birdNameCN=" +
            results[0].birdNameCN,
        },
        {
          key: results[1].birdNameCN,
          nameEN: birdData[results[1].birdNameCN]["英文名"],
          probability: results[1].probability,
          pic:
            "https://birdid.iscas.ac.cn:8080/getImage?birdNameCN=" +
            results[1].birdNameCN,
        },
        {
          key: results[2].birdNameCN,
          nameEN: birdData[results[2].birdNameCN]["英文名"],
          probability: results[2].probability,
          pic:
            "https://birdid.iscas.ac.cn:8080/getImage?birdNameCN=" +
            results[2].birdNameCN,
        },
      ],
    });
  },

  onTabsChange: function(e) {
    console.log("onTabsChange", e);

    const { key } = e.detail;
    const index = this.data.results.map((n) => n.key).indexOf(key);

    this.setData({
      key,
      index,
    });
  },

  onSwiperChange: function(e) {
    wx.vibrateShort();

    console.log("onSwiperChange", e);
    const { current: index, source } = e.detail;
    const { key } = this.data.results[index];

    if (!!source) {
      this.setData({
        key,
        index,
      });
    }
  },

  drawRect: function() {
    console.log("drawRect");

    const imageURL = wx.getStorageSync("image_cache");
    const ctx = wx.createCanvasContext("myCanvas", this);
    let that = this;

    wx.getImageInfo({
      src: imageURL,
      success: function(res) {
        let imageHeight = 350;
        let imageWidth = 300;
        wx.getSystemInfo({
          success: function(res) {
            imageHeight = (res.windowHeight / 724) * 350;
            imageWidth = (res.windowWidth / 375) * 300;
          },
        });

        if (res.width <= res.height) {
          const temp_width = (imageHeight / res.height) * res.width;
          ctx.drawImage(
            imageURL,
            (imageWidth - temp_width) / 2,
            0,
            temp_width,
            imageHeight
          );
          ctx.setStrokeStyle("red");

          const coordinates = [
            that.data.data[that.data.current - 1][0][0] / res.width,
            that.data.data[that.data.current - 1][0][1] / res.height,
            (that.data.data[that.data.current - 1][0][2] -
              that.data.data[that.data.current - 1][0][0]) /
              res.width,
            (that.data.data[that.data.current - 1][0][3] -
              that.data.data[that.data.current - 1][0][1]) /
              res.height,
          ];
          ctx.strokeRect(
            (imageWidth - temp_width) / 2 + temp_width * coordinates[0],
            0 + imageHeight * coordinates[1],
            temp_width * coordinates[2],
            imageHeight * coordinates[3]
          );
          ctx.draw();
        } else {
          const temp_height = (imageWidth / res.width) * res.height;
          ctx.drawImage(
            imageURL,
            0,
            (imageHeight - temp_height) / 2,
            imageWidth,
            temp_height
          );
          ctx.setStrokeStyle("red");

          const coordinates = [
            that.data.data[that.data.current - 1][0][0] / res.width,
            that.data.data[that.data.current - 1][0][1] / res.height,
            (that.data.data[that.data.current - 1][0][2] -
              that.data.data[that.data.current - 1][0][0]) /
              res.width,
            (that.data.data[that.data.current - 1][0][3] -
              that.data.data[that.data.current - 1][0][1]) /
              res.height,
          ];
          ctx.strokeRect(
            0 + imageWidth * coordinates[0],
            (imageHeight - temp_height) / 2 + temp_height * coordinates[1],
            imageWidth * coordinates[2],
            temp_height * coordinates[3]
          );
          ctx.draw();
        }
      },
      fail: function(res) {
        console.log("drawRect Fail", res);
      },
    });
  },

  onChange: function(e) {
    console.log("onChange", e);
    const results = this.data.data[e.detail.current - 1][1];
    const birdData = require("../../utils/data.js").getData("new_pedia");

    wx.vibrateShort();

    this.setData({
      current: e.detail.current,
      key: results[0].birdNameCN,
      index: results[0].birdNameCN,
      results: [
        {
          key: results[0].birdNameCN,
          nameEN: birdData[results[0].birdNameCN]["英文名"],
          probability: results[0].probability,
          pic:
            "https://birdid.iscas.ac.cn:8080/getImage?birdNameCN=" +
            results[0].birdNameCN,
        },
        {
          key: results[1].birdNameCN,
          nameEN: birdData[results[1].birdNameCN]["英文名"],
          probability: results[1].probability,
          pic:
            "https://birdid.iscas.ac.cn:8080/getImage?birdNameCN=" +
            results[1].birdNameCN,
        },
        {
          key: results[2].birdNameCN,
          nameEN: birdData[results[2].birdNameCN]["英文名"],
          probability: results[2].probability,
          pic:
            "https://birdid.iscas.ac.cn:8080/getImage?birdNameCN=" +
            results[2].birdNameCN,
        },
      ],
    });

    // this.onTabsChange()
    this.drawRect();
  },

  onCanvas: function() {
    const imageURL = wx.getStorageSync("image_cache");
    wx.previewImage({
      urls: [imageURL],
    });
  },

  onCorrect: function() {
    wx.vibrateShort();

    const imageURL = wx.getStorageSync("image_cache");
    let coordinate = this.data.data[this.data.current - 1][0];
    let width = 0;
    let height = 0;

    wx.getImageInfo({
      src: imageURL,
      success: function(res) {
        width = res.width;
        height = res.height;
        wx.getSystemInfo({
          success: function(res) {
            height = (res.windowWidth / width) * height;
            width = res.windowWidth;
            wx.canvasToTempFilePath({
              x: 0,
              y: 0,
              width: width,
              height: height,
              canvasId: "myCanvas",
              success: function(res) {
                console.log(res.tempFilePath);
                wx.navigateTo({
                  url:
                    "/pages/correct/correct?data=" +
                    JSON.stringify({
                      coordinate: coordinate,
                    }) +
                    "&imageURL=" +
                    res.tempFilePath,
                });
              },
              fail: function(res) {
                console.log("canvasToTempFilePath Fail", res);
              },
            });
          },
        });
      },
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.drawRect();
  },

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
  onUnload: function() {
    wx.getSavedFileList({
      success(res) {
        if (res.fileList.length > 0) {
          wx.removeSavedFile({
            filePath: res.fileList[0].filePath,
            complete(res) {
              console.log(res);
            },
          });
        }
      },
    });

    wx.clearStorage();
    try {
      wx.clearStorageSync();
    } catch (e) {
      // Do something when catch error
    }
  },

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
