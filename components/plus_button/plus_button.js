Component({

  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    array: [{
      mode: "aspectFit",
      text: "aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来"
    }]
  },

  /**
   * 组件的方法列表
   */

  methods: {
    getImage: function(e) {
      e = e.currentTarget.dataset.type;
      console.log(e);

      var tempFile = null;

      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: [e],
        success: function(res) {
          const tempFilePaths = res.tempFilePaths;

          console.log(tempFilePaths);
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片

          wx.uploadFile({
            url: "https://birdid.iscas.ac.cn:8080/",
            header: {
              "content-type": "multipart/form-data" // 默认值
            },
            filePath: tempFilePaths[0],
            name: "file",
            formData: {
              userId: 1234567
            },
            success(res) {
              console.log(JSON.parse(res.data));
              if (!JSON.parse(res.data)["birdExists"]) {
                if (JSON.parse(res.data)["detected"] != {}) {
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
                wx.navigateTo({
                  url: "../success/success?data=" + res.data
                });
              }
            },
            fail(res) {
              console.log("Fail. Log: " + res);
            }
          });

          
        }
      })
    }
  }
})