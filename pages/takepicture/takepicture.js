// logs.js
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
        this.setData({src: res.tempImagePath});

        const tempFilePaths = res.tempImagePath;

        wx.uploadFile({
          url: 'https://birdid.iscas.ac.cn:8080/',
          header: {
            'content-type': 'multipart/form-data'  // 默认值
          },
          filePath: tempFilePaths,
          name: 'file',
          formData: {userId: 1234567},
          success(res) {
            const data = JSON.parse(res.data);
            const birdData = require('../../utils/data.js').birdData()

            const id0 = data[0]['birdNum'];
            const id1 = data[1]['birdNum'];
            const id2 = data[2]['birdNum'];
            const id3 = data[3]['birdNum'];
            const id4 = data[4]['birdNum'];

            console.log(data)
            console.log(birdData[id0]['pic'])
            console.log(birdData[id1]['pic'])
            console.log(birdData[id2]['pic'])
            console.log(birdData[id3]['pic'])
            console.log(birdData[id4]['pic'])



            that.setData({
              resultAindex: birdData[id0]['pic'],
              resultBindex: birdData[id1]['pic'],
              resultCindex: birdData[id2]['pic'],
              resultDindex: birdData[id3]['pic'],
              resultEindex: birdData[id4]['pic'],

              resultAname: birdData[id0]['英文名'],
              resultBname: birdData[id1]['英文名'],
              resultCname: birdData[id2]['英文名'],
              resultDname: birdData[id3]['英文名'],
              resultEname: birdData[id4]['英文名'],

              resultArate: data[0]['probability'],
              resultBrate: data[1]['probability'],
              resultCrate: data[2]['probability'],
              resultDrate: data[3]['probability'],
              resultErate: data[4]['probability'],

              resultAnameCHS: data[0]['birdNameCN'],
              resultBnameCHS: data[1]['birdNameCN'],
              resultCnameCHS: data[2]['birdNameCN'],
              resultDnameCHS: data[3]['birdNameCN'],
              resultEnameCHS: data[4]['birdNameCN'],
            });
          },
          fail(res) {
            console.log('fail' + res);
          }
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  }
})