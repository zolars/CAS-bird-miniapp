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

  onClick(e) {
    if (e.detail.index == 0) {
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['camera'],
        success(res) {
          const tempFilePaths = res.tempFilePaths
          console.log("Done camera");
        }
      })
    } else if (e.detail.index == 1) {
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album'],
        success(res) {
          const tempFilePaths = res.tempFilePaths
          console.log("Done album");
        }
      })
    } else if (e.detail.index == 2) {
      wx.chooseMessageFile({
        count: 10,
        type: 'image',
        success(res) {
          const tempFilePaths = res.tempFilePaths
          console.log("Done message");
        }
      })
    }
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
  }
})