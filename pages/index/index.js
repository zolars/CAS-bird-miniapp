//index.js
import { $wuxLoading } from "../../components/index";

//获取应用实例
const app = getApp();

const recog_buttons = [
  {
    index: "camera",
    label: "拍照识别",
    icon: "/images/camera.png",
  },
  {
    index: "ablum",
    label: "相册识别",
    icon: "/images/album.png",
  },
  {
    index: "message",
    label: "聊天图片识别",
    icon: "/images/message.png",
  },
];

Page({
  data: {
    imageURL: null,
    imageFile: null,
    pic: [
      "https://birdid.iscas.ac.cn:8080/getImage?picName=cover1",
      "https://birdid.iscas.ac.cn:8080/getImage?picName=cover2",
      "https://birdid.iscas.ac.cn:8080/getImage?picName=cover3",
    ],

    types: ["topLeft", "topRight", "bottomLeft", "bottomRight", "center"],
    typeIndex: 3,
    colors: [
      "light",
      "stable",
      "positive",
      "calm",
      "balanced",
      "energized",
      "assertive",
      "royal",
      "dark",
    ],
    colorIndex: 7,
    recog_buttons,
    visitors: 0,
  },

  onClick: function(e) {
    wx.vibrateShort();
    let that = this;
    const method = e.detail.index;
    if (method == 0) {
      wx.chooseImage({
        count: 1,
        sizeType: ["original", "compressed"],
        sourceType: ["camera"],
        success(res) {
          that.imageURL = res.tempFiles[0].path;
          that.imageFile = res.tempFiles[0];
          that.recognition();
        },
      });
    } else if (method == 1) {
      wx.chooseImage({
        count: 1,
        sizeType: ["original", "compressed"],
        sourceType: ["album"],
        success(res) {
          console.log(res);
          that.imageURL = res.tempFiles[0].path;
          that.imageFile = res.tempFiles[0];
          that.recognition();
        },
      });
    } else if (method == 2) {
      wx.chooseMessageFile({
        count: 1,
        type: "image",
        success(res) {
          that.imageURL = res.tempFiles[0].path;
          that.imageFile = res.tempFiles[0];
          that.recognition();
        },
      });
    } else if (method == -1) {
      wx.navigateTo({ url: "/pages/search_length/search_length" });
    }
  },

  recognition: function() {
    var that = this;
    console.log(this.imageURL);

    this.$wuxLoading = $wuxLoading();
    this.$wuxLoading.show({
      text: "努力识别中",
    });

    wx.uploadFile({
      url: "https://birdid.iscas.ac.cn:8080/",
      header: {
        "content-type": "multipart/form-data", // 默认值
      },
      filePath: that.imageURL,
      name: "file",
      formData: {
        userId: 1234567,
      },
      success(res) {
        console.log(JSON.parse(res.data));
        that.$wuxLoading.hide();

        if (!JSON.parse(res.data)["birdExists"]) {
          if (JSON.stringify(JSON.parse(res.data)["detected"]) != "{}") {
            var text = "";
            for (var obj in JSON.parse(res.data)["detected"]) {
              text += obj + ", ";
            }
            wx.showModal({
              title: "没找到水鸟",
              content: "图片中似乎没有水鸟? 它看上去是: " + text.slice(0, -2),
              showCancel: false,
            });
          } else {
            wx.showModal({
              title: "没找到水鸟",
              content: "图片中似乎没有水鸟? ",
              showCancel: false,
            });
          }
        } else {
          const results = res.data;
          // Handle the image storage
          const fs = wx.getFileSystemManager();
          fs.saveFile({
            tempFilePath: that.imageURL,
            success(res) {
              console.log("Success to give a image cache", res.savedFilePath);
              wx.setStorageSync("image_cache", res.savedFilePath);
              wx.navigateTo({
                url: "/pages/results/results?data=" + results,
              });
            },
            fail(res) {
              console.log("Fail to give a image cache", res);
            },
          });
        }
      },
      fail(res) {
        console.log("Get result Fail...");
        console.log(res);
        that.$wuxLoading.hide();
      },
    });
  },

  aboutButton: function() {
    wx.navigateTo({
      url: "../aboutUs/aboutUs",
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(option) {
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
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
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

    let that = this;
    wx.request({
      url: "https://birdid.iscas.ac.cn:8080/getVisitAmount", //仅为示例，并非真实的接口地址
      success(res) {
        let visitors = res.data.list[0].visit_total;
        that.setData({ visitors: visitors });
      },
    });
  },

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
