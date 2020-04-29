// pages/aboutUs/aboutUs.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    image_bg: "../../images/temp4.jpeg",
  },

  onClickBack: function(e) {
    wx.navigateBack();
  },
  onClickNext: function(e) {
    console.log("Click NEXT");
  },

  onClickColor: function(e) {
    console.log(e);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(option) {
    console.log("onLoad", option);
    const length = option.data;
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    const query = wx.createSelectorQuery();
    query
      .select("#myCanvas")
      .fields({ node: true, size: true })
      .exec((res) => {
        const canvas = res[0].node;
        const ctx = canvas.getContext("2d");

        const dpr = wx.getSystemInfoSync().pixelRatio;
        canvas.width = res[0].width * dpr;
        canvas.height = res[0].height * dpr;
        ctx.scale(dpr, dpr);

        function roundRectFill(x, y, w, h, r, fillColor_start, fillColor_end) {
          if (w < 2 * r) r = w / 2;
          if (h < 2 * r) r = h / 2;
          ctx.beginPath();
          ctx.moveTo(x + r, y);
          ctx.arcTo(x + w, y, x + w, y + h, r);
          ctx.arcTo(x + w, y + h, x, y + h, r);
          ctx.arcTo(x, y + h, x, y, r);
          ctx.arcTo(x, y, x + w, y, r);
          ctx.closePath();

          var gradient = ctx.createLinearGradient(x, y, x + w, y); //创建一个线性渐变
          gradient.addColorStop(0, fillColor_start);
          gradient.addColorStop(1, fillColor_end);

          ctx.fillStyle = gradient;
          ctx.fill();
          ctx.restore();
        }

        let row_gap = 30;
        let colunm_gap = 40;
        let r = 10;

        // Row 0
        roundRectFill(
          row_gap,
          colunm_gap,
          (res[0].width - row_gap * 4) / 3,
          (res[0].height - colunm_gap * 4) / 3,
          r,
          "rgb(33,33,34)",
          "rgb(0,0,0)"
        );
        roundRectFill(
          row_gap * 2 + (res[0].width - row_gap * 4) / 3,
          colunm_gap,
          (res[0].width - row_gap * 4) / 3,
          (res[0].height - colunm_gap * 4) / 3,
          r,
          "rgb(166,170,171)",
          "rgb(109,113,114)"
        );
        roundRectFill(
          row_gap * 3 + ((res[0].width - row_gap * 4) / 3) * 2,
          colunm_gap,
          (res[0].width - row_gap * 4) / 3,
          (res[0].height - colunm_gap * 4) / 3,
          r,
          "rgb(255,255,255)",
          "rgb(255,255,255)"
        );
        // Row 1
        roundRectFill(
          row_gap,
          colunm_gap * 2 + (res[0].height - colunm_gap * 4) / 3,
          (res[0].width - row_gap * 4) / 3,
          (res[0].height - colunm_gap * 4) / 3,
          r,
          "rgb(214,195,162)",
          "rgb(91,60,29)"
        );
        roundRectFill(
          row_gap * 2 + (res[0].width - row_gap * 4) / 3,
          colunm_gap * 2 + (res[0].height - colunm_gap * 4) / 3,
          (res[0].width - row_gap * 4) / 3,
          (res[0].height - colunm_gap * 4) / 3,
          r,
          "rgb(158,47,43)",
          "rgb(82,48,25)"
        );
        roundRectFill(
          row_gap * 3 + ((res[0].width - row_gap * 4) / 3) * 2,
          colunm_gap * 2 + (res[0].height - colunm_gap * 4) / 3,
          (res[0].width - row_gap * 4) / 3,
          (res[0].height - colunm_gap * 4) / 3,
          r,
          "rgb(239,227,80)",
          "rgb(210,192,75)"
        );
        // Row 2
        roundRectFill(
          row_gap,
          colunm_gap * 3 + ((res[0].height - colunm_gap * 4) / 3) * 2,
          (res[0].width - row_gap * 4) / 3,
          (res[0].height - colunm_gap * 4) / 3,
          r,
          "rgb(136,135,104)",
          "rgb(58,73,62)"
        );
        roundRectFill(
          row_gap * 2 + (res[0].width - row_gap * 4) / 3,
          colunm_gap * 3 + ((res[0].height - colunm_gap * 4) / 3) * 2,
          (res[0].width - row_gap * 4) / 3,
          (res[0].height - colunm_gap * 4) / 3,
          r,
          "rgb(95,142,193)",
          "rgb(58,64,100)"
        );
        roundRectFill(
          row_gap * 3 + ((res[0].width - row_gap * 4) / 3) * 2,
          colunm_gap * 3 + ((res[0].height - colunm_gap * 4) / 3) * 2,
          (res[0].width - row_gap * 4) / 3,
          (res[0].height - colunm_gap * 4) / 3,
          r,
          "rgb(231,154,63)",
          "rgb(216,127,60)"
        );

        ctx.fillStyle = "black";
        ctx.font = "15px 'KaiTi'";
        ctx.textAlign = "left";
        // Row 1
        ctx.fillText(
          "黑色",
          row_gap + (res[0].width - row_gap * 4) / 3 / 3,
          colunm_gap + (res[0].height - colunm_gap * 4) / 3 + colunm_gap / 2
        );
        ctx.fillText(
          "灰色",
          row_gap +
            (res[0].width - row_gap * 4) / 3 / 3 +
            row_gap +
            (res[0].width - row_gap * 4) / 3,
          colunm_gap + (res[0].height - colunm_gap * 4) / 3 + colunm_gap / 2
        );
        ctx.fillText(
          "白色",
          row_gap +
            (res[0].width - row_gap * 4) / 3 / 3 +
            row_gap +
            (res[0].width - row_gap * 4) / 3 +
            row_gap +
            (res[0].width - row_gap * 4) / 3,
          colunm_gap + (res[0].height - colunm_gap * 4) / 3 + colunm_gap / 2
        );
        // Row 2
        ctx.fillText(
          "浅黄/棕色",
          row_gap + (res[0].width - row_gap * 4) / 3 / 3 - 14,
          colunm_gap +
            (res[0].height - colunm_gap * 4) / 3 +
            colunm_gap / 2 +
            colunm_gap +
            (res[0].height - colunm_gap * 4) / 3
        );
        ctx.fillText(
          "红褐色",
          row_gap +
            (res[0].width - row_gap * 4) / 3 / 3 +
            row_gap +
            (res[0].width - row_gap * 4) / 3 -
            6,
          colunm_gap +
            (res[0].height - colunm_gap * 4) / 3 +
            colunm_gap / 2 +
            colunm_gap +
            (res[0].height - colunm_gap * 4) / 3
        );
        ctx.fillText(
          "黄色",
          row_gap +
            (res[0].width - row_gap * 4) / 3 / 3 +
            row_gap +
            (res[0].width - row_gap * 4) / 3 +
            row_gap +
            (res[0].width - row_gap * 4) / 3,
          colunm_gap +
            (res[0].height - colunm_gap * 4) / 3 +
            colunm_gap / 2 +
            colunm_gap +
            (res[0].height - colunm_gap * 4) / 3
        );
        // Row 3
        ctx.fillText(
          "橄榄/绿色",
          row_gap + (res[0].width - row_gap * 4) / 3 / 3 - 14,
          colunm_gap +
            (res[0].height - colunm_gap * 4) / 3 +
            colunm_gap / 2 +
            colunm_gap +
            (res[0].height - colunm_gap * 4) / 3 +
            colunm_gap +
            (res[0].height - colunm_gap * 4) / 3
        );
        ctx.fillText(
          "蓝色",
          row_gap +
            (res[0].width - row_gap * 4) / 3 / 3 +
            row_gap +
            (res[0].width - row_gap * 4) / 3,
          colunm_gap +
            (res[0].height - colunm_gap * 4) / 3 +
            colunm_gap / 2 +
            colunm_gap +
            (res[0].height - colunm_gap * 4) / 3 +
            colunm_gap +
            (res[0].height - colunm_gap * 4) / 3
        );
        ctx.fillText(
          "橙色",
          row_gap +
            (res[0].width - row_gap * 4) / 3 / 3 +
            row_gap +
            (res[0].width - row_gap * 4) / 3 +
            row_gap +
            (res[0].width - row_gap * 4) / 3,
          colunm_gap +
            (res[0].height - colunm_gap * 4) / 3 +
            colunm_gap / 2 +
            colunm_gap +
            (res[0].height - colunm_gap * 4) / 3 +
            colunm_gap +
            (res[0].height - colunm_gap * 4) / 3
        );
      });
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
  onUnload: function() {},

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
