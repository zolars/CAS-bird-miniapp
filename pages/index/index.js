//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    pic: ["../../images/temp1.jpeg", "../../images/temp2.jpeg", "../../images/temp3.jpeg"]
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