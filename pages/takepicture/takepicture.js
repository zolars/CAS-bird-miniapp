//logs.js
const util = require('../../utils/util.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    array: [{
      mode: 'aspectFit',
      text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
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
  onLoad() {
    this.ctx = wx.createCameraContext()
  },
  takePhoto() {

    var that = this;

    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        });

        const tempFilePaths = res.tempImagePath;

        wx.uploadFile({
          url: 'http://127.0.0.1:5000/ImageUpdate',
          header: {
            'content-type': 'multipart/form-data' // 默认值
          },
          filePath: tempFilePaths,
          name: 'file',
          formData: {
            userId: 1234567
          },
          success(res) {
            const data = JSON.parse(res.data);

            console.log(data)
            console.log(data[1][0])
            console.log(data[1][1])
            console.log(data[1][2])

            that.setData({
              resultAindex: "../../resources/label/" + data[1][0] + ".jpg",
              resultBindex: "../../resources/label/" + data[2][0] + ".jpg",
              resultCindex: "../../resources/label/" + data[3][0] + ".jpg",
              resultDindex: "../../resources/label/" + data[4][0] + ".jpg",
              resultEindex: "../../resources/label/" + data[5][0] + ".jpg",

              resultAname: data[1][2],
              resultBname: data[2][2],
              resultCname: data[3][2],
              resultDname: data[4][2],
              resultEname: data[5][2],

              resultArate: data[1][3],
              resultBrate: data[2][3],
              resultCrate: data[3][3],
              resultDrate: data[4][3],
              resultErate: data[5][3],

              resultAnameCHS: data[1][1],
              resultBnameCHS: data[2][1],
              resultCnameCHS: data[3][1],
              resultDnameCHS: data[4][1],
              resultEnameCHS: data[5][1]
            });
          },
          fail(res) {
            console.log("fail" + res);
          }
        })

      }
    })
  },
  error(e) {
    console.log(e.detail)
  }
})