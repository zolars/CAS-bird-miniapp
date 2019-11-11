//index.js
//获取应用实例
const app = getApp()

const buttons = [{
    index: 'camera',
    label: '拍照识别',
    icon: "/images/camera.png",
  },
  {
    index: 'ablum',
    label: '相册识别',
    icon: "/images/album.png",
  },
  {
    index: 'message',
    label: '聊天图片识别',
    icon: "/images/message.png",
  },
]

Page({

  data: {
    imageURL: null,
    imageFile: null,
    pic: ["../../images/temp1.jpeg", "../../images/temp2.jpeg", "../../images/temp3.jpeg"],

    types: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'center'],
    typeIndex: 3,
    colors: ['light', 'stable', 'positive', 'calm', 'balanced', 'energized', 'assertive', 'royal', 'dark'],
    colorIndex: 4,
    dirs: ['horizontal', 'vertical', 'circle'],
    dirIndex: 1,
    sAngle: 0,
    eAngle: 360,
    spaceBetween: 12,
    buttons,
  },

  onClick: function(e) {
    let that = this;
    const method = e.detail.index;
    if (method == 0) {
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['camera'],
        success(res) {
          that.imageURL = res.tempFiles[0].path;
          that.imageFile = res.tempFiles[0];
          that.recognition();
        }
      })
    } else if (method == 1) {
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album'],
        success(res) {
          console.log(res);
          that.imageURL = res.tempFiles[0].path;
          that.imageFile = res.tempFiles[0];
          that.recognition();
        }
      })
    } else if (method == 2) {
      wx.chooseMessageFile({
        count: 1,
        type: 'image',
        success(res) {
          that.imageURL = res.tempFiles[0].path;
          that.imageFile = res.tempFiles[0];
          that.recognition();
        }
      })
    }
  },

  recognition: function() {
    var that = this;
    console.log(this.imageURL);

    wx.showToast({
      title: '努力识别中',
      icon: 'loading',
      mask: true,
      duration: 20000,
      success: function(res) {
        console.log(res);
      },
      fail: function(res) {
        console.log(res);
      }
    });

    wx.uploadFile({
      url: "https://birdid.iscas.ac.cn:8080/",
      header: {
        "content-type": "multipart/form-data" // 默认值
      },
      filePath: this.imageURL,
      name: "file",
      formData: {
        userId: 1234567
      },
      success(res) {
        console.log(JSON.parse(res.data));
        wx.hideToast();

        if (!JSON.parse(res.data)["birdExists"]) {
          if (JSON.stringify(JSON.parse(res.data)["detected"]) != "{}") {
            var text = ""
            for (var obj in JSON.parse(res.data)["detected"]) {
              text += obj + ", "
            }
            wx.showModal({
              title: "没找到水鸟",
              content: "图片中似乎没有水鸟? 它看上去是: " + text.slice(0, -2),
              showCancel: false
            });
          } else {
            wx.showModal({
              title: "没找到水鸟",
              content: "图片中似乎没有水鸟? ",
              showCancel: false
            });
          }

        } else {
          const results = res.data;
          // Handle the image storage
          const fs = wx.getFileSystemManager();
          fs.saveFile({
            tempFilePath: that.imageURL,
            success(res) {
              console.log('Success to give a image cache', res.savedFilePath);
              wx.setStorageSync('image_cache', res.savedFilePath);
              wx.navigateTo({
                url: "/pages/results/results?data=" + results
              });
            },
            fail(res) {
              console.log("Fail to give a image cache", res);
            }
          });
        }
      },
      fail(res) {
        console.log("Fail. Log: " + res);
        wx.hideToast();
      }
    });
  },

  mapButton: function(e) {
    wx.navigateTo({
      url: "../indexMap/indexMap",
    })
  },

  knowledgeButton: function() {
    wx.request({
      url: "http://localhost:8082/JavaSdkServerWechat_Web_exploded/Startup", // 仅为示例，并非真实的接口地址
      data: {
        x: "",
        y: ""
      },
      header: {
        "content-type": "application/json" // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })
  },

  aboutButton: function() {
    wx.navigateTo({
      url: "../aboutUs/aboutUs"
    })
  },

  onLoad: function(option) {
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
})