// pages/aboutUs/aboutUs.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    image_bg: "../../images/temp4.jpeg",
    btn_hidden: "none",
    length: 0,
    selected: {
      黑: false,
      灰: false,
      白: false,
      棕: false,
      红: false,
      黄: false,
      绿: false,
      蓝: false,
      橙: false,
    },
  },

  onClickBack: function(e) {
    wx.navigateBack();
  },
  onClickNext: function(e) {
    let selected = this.data.selected;
    for (let key in selected) {
      if (selected[key] && key == "棕") {
        selected["金"] = true;
      }
      if (selected[key] && key == "红") {
        selected["褐"] = true;
      }
      if (selected[key] && key == "绿") {
        selected["橄榄"] = true;
      }
      if (selected[key] && key == "蓝") {
        selected["紫"] = true;
      }
    }

    wx.navigateTo({
      url:
        "/pages/search_result/search_result?length=" +
        this.data.length +
        "&colors=" +
        JSON.stringify(selected),
    });
  },

  onClickColor: function(e) {
    let selected = this.data.selected;
    let x_click = e.changedTouches[0].x;
    let y_click = e.changedTouches[0].y;

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
        ctx.clearRect(0, 0, res[0].width, res[0].height);

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

        function roundRect(x, y, w, h, r, color) {
          if (w < 2 * r) r = w / 2;
          if (h < 2 * r) r = h / 2;
          ctx.beginPath();
          ctx.moveTo(x + r, y);
          ctx.arcTo(x + w, y, x + w, y + h, r);
          ctx.arcTo(x + w, y + h, x, y + h, r);
          ctx.arcTo(x, y + h, x, y, r);
          ctx.arcTo(x, y, x + w, y, r);
          ctx.closePath();
          ctx.strokeStyle = color;
          ctx.stroke();
        }

        let width = res[0].width;
        let height = res[0].height;
        let column_gap = 30;
        let row_gap = 40;
        let r = 10;

        // Row 0
        roundRectFill(
          column_gap,
          row_gap,
          (width - column_gap * 4) / 3,
          (height - row_gap * 4) / 3,
          r,
          "rgb(33,33,34)",
          "rgb(0,0,0)"
        );
        roundRectFill(
          column_gap * 2 + (width - column_gap * 4) / 3,
          row_gap,
          (width - column_gap * 4) / 3,
          (height - row_gap * 4) / 3,
          r,
          "rgb(166,170,171)",
          "rgb(109,113,114)"
        );
        roundRectFill(
          column_gap * 3 + ((width - column_gap * 4) / 3) * 2,
          row_gap,
          (width - column_gap * 4) / 3,
          (height - row_gap * 4) / 3,
          r,
          "rgb(255,255,255)",
          "rgb(255,255,255)"
        );
        // Row 1
        roundRectFill(
          column_gap,
          row_gap * 2 + (height - row_gap * 4) / 3,
          (width - column_gap * 4) / 3,
          (height - row_gap * 4) / 3,
          r,
          "rgb(214,195,162)",
          "rgb(91,60,29)"
        );
        roundRectFill(
          column_gap * 2 + (width - column_gap * 4) / 3,
          row_gap * 2 + (height - row_gap * 4) / 3,
          (width - column_gap * 4) / 3,
          (height - row_gap * 4) / 3,
          r,
          "rgb(158,47,43)",
          "rgb(82,48,25)"
        );
        roundRectFill(
          column_gap * 3 + ((width - column_gap * 4) / 3) * 2,
          row_gap * 2 + (height - row_gap * 4) / 3,
          (width - column_gap * 4) / 3,
          (height - row_gap * 4) / 3,
          r,
          "rgb(239,227,80)",
          "rgb(210,192,75)"
        );
        // Row 2
        roundRectFill(
          column_gap,
          row_gap * 3 + ((height - row_gap * 4) / 3) * 2,
          (width - column_gap * 4) / 3,
          (height - row_gap * 4) / 3,
          r,
          "rgb(136,135,104)",
          "rgb(58,73,62)"
        );
        roundRectFill(
          column_gap * 2 + (width - column_gap * 4) / 3,
          row_gap * 3 + ((height - row_gap * 4) / 3) * 2,
          (width - column_gap * 4) / 3,
          (height - row_gap * 4) / 3,
          r,
          "rgb(95,142,193)",
          "rgb(58,64,100)"
        );
        roundRectFill(
          column_gap * 3 + ((width - column_gap * 4) / 3) * 2,
          row_gap * 3 + ((height - row_gap * 4) / 3) * 2,
          (width - column_gap * 4) / 3,
          (height - row_gap * 4) / 3,
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
          column_gap + (width - column_gap * 4) / 3 / 3,
          row_gap + (height - row_gap * 4) / 3 + row_gap / 2
        );
        ctx.fillText(
          "灰色",
          column_gap +
            (width - column_gap * 4) / 3 / 3 +
            column_gap +
            (width - column_gap * 4) / 3,
          row_gap + (height - row_gap * 4) / 3 + row_gap / 2
        );
        ctx.fillText(
          "白色",
          column_gap +
            (width - column_gap * 4) / 3 / 3 +
            column_gap +
            (width - column_gap * 4) / 3 +
            column_gap +
            (width - column_gap * 4) / 3,
          row_gap + (height - row_gap * 4) / 3 + row_gap / 2
        );
        // Row 2
        ctx.fillText(
          "浅黄/棕色",
          column_gap + (width - column_gap * 4) / 3 / 3 - 14,
          row_gap +
            (height - row_gap * 4) / 3 +
            row_gap / 2 +
            row_gap +
            (height - row_gap * 4) / 3
        );
        ctx.fillText(
          "红褐色",
          column_gap +
            (width - column_gap * 4) / 3 / 3 +
            column_gap +
            (width - column_gap * 4) / 3 -
            6,
          row_gap +
            (height - row_gap * 4) / 3 +
            row_gap / 2 +
            row_gap +
            (height - row_gap * 4) / 3
        );
        ctx.fillText(
          "黄色",
          column_gap +
            (width - column_gap * 4) / 3 / 3 +
            column_gap +
            (width - column_gap * 4) / 3 +
            column_gap +
            (width - column_gap * 4) / 3,
          row_gap +
            (height - row_gap * 4) / 3 +
            row_gap / 2 +
            row_gap +
            (height - row_gap * 4) / 3
        );
        // Row 3
        ctx.fillText(
          "橄榄/绿色",
          column_gap + (width - column_gap * 4) / 3 / 3 - 14,
          row_gap +
            (height - row_gap * 4) / 3 +
            row_gap / 2 +
            row_gap +
            (height - row_gap * 4) / 3 +
            row_gap +
            (height - row_gap * 4) / 3
        );
        ctx.fillText(
          "蓝紫色",
          column_gap +
            (width - column_gap * 4) / 3 / 3 +
            column_gap +
            (width - column_gap * 4) / 3 -
            6,
          row_gap +
            (height - row_gap * 4) / 3 +
            row_gap / 2 +
            row_gap +
            (height - row_gap * 4) / 3 +
            row_gap +
            (height - row_gap * 4) / 3
        );
        ctx.fillText(
          "橙色",
          column_gap +
            (width - column_gap * 4) / 3 / 3 +
            column_gap +
            (width - column_gap * 4) / 3 +
            column_gap +
            (width - column_gap * 4) / 3,
          row_gap +
            (height - row_gap * 4) / 3 +
            row_gap / 2 +
            row_gap +
            (height - row_gap * 4) / 3 +
            row_gap +
            (height - row_gap * 4) / 3
        );

        x_click = Math.floor(
          x_click / ((width - column_gap * 4) / 3 + column_gap)
        );
        y_click = Math.floor(
          (y_click - row_gap) / ((height - row_gap * 4) / 3 + row_gap)
        );

        let new_selected = JSON.parse(JSON.stringify(selected));

        switch (x_click) {
          case 0:
            switch (y_click) {
              case 0:
                new_selected["黑"] = !selected["黑"];
                break;
              case 1:
                new_selected["棕"] = !selected["棕"];
                break;
              case 2:
                new_selected["绿"] = !selected["绿"];
                break;
            }
            break;
          case 1:
            switch (y_click) {
              case 0:
                new_selected["灰"] = !selected["灰"];
                break;
              case 1:
                new_selected["红"] = !selected["红"];
                break;
              case 2:
                new_selected["蓝"] = !selected["蓝"];
                break;
            }
            break;
          case 2:
            switch (y_click) {
              case 0:
                new_selected["白"] = !selected["白"];
                break;
              case 1:
                new_selected["黄"] = !selected["黄"];
                break;
              case 2:
                new_selected["橙"] = !selected["橙"];
                break;
            }
            break;
        }

        let count = 0;
        for (let key in new_selected) {
          if (new_selected[key]) {
            count += 1;
          }
        }

        if (count > 3) {
          new_selected = selected;
        }

        let mark = false;
        for (let key in new_selected) {
          if (new_selected[key]) {
            mark = true;
            if (key == "黑") {
              roundRect(
                column_gap - column_gap / 3,
                row_gap - row_gap / 5,
                (width - column_gap * 4) / 3 + (column_gap / 3) * 2,
                (height - row_gap * 4) / 3 + (row_gap / 5) * 4,
                r,
                "rgb(33,33,34)"
              );
            }
            if (key == "灰") {
              roundRect(
                column_gap * 2 + (width - column_gap * 4) / 3 - column_gap / 3,
                row_gap - row_gap / 5,
                (width - column_gap * 4) / 3 + (column_gap / 3) * 2,
                (height - row_gap * 4) / 3 + (row_gap / 5) * 4,
                r,
                "rgb(166,170,171)"
              );
            }
            if (key == "白") {
              roundRect(
                column_gap * 3 +
                  ((width - column_gap * 4) / 3) * 2 -
                  column_gap / 3,
                row_gap - row_gap / 5,
                (width - column_gap * 4) / 3 + (column_gap / 3) * 2,
                (height - row_gap * 4) / 3 + (row_gap / 5) * 4,
                r,
                "rgb(255,255,255)"
              );
            }
            if (key == "棕") {
              roundRect(
                column_gap - column_gap / 3,
                row_gap * 2 + (height - row_gap * 4) / 3 - row_gap / 5,
                (width - column_gap * 4) / 3 + (column_gap / 3) * 2,
                (height - row_gap * 4) / 3 + (row_gap / 5) * 4,
                r,
                "rgb(91,60,29)"
              );
            }
            if (key == "红") {
              roundRect(
                column_gap * 2 + (width - column_gap * 4) / 3 - column_gap / 3,
                row_gap * 2 + (height - row_gap * 4) / 3 - row_gap / 5,
                (width - column_gap * 4) / 3 + (column_gap / 3) * 2,
                (height - row_gap * 4) / 3 + (row_gap / 5) * 4,
                r,
                "rgb(158,47,43)"
              );
            }
            if (key == "黄") {
              roundRect(
                column_gap * 3 +
                  ((width - column_gap * 4) / 3) * 2 -
                  column_gap / 3,
                row_gap * 2 + (height - row_gap * 4) / 3 - row_gap / 5,
                (width - column_gap * 4) / 3 + (column_gap / 3) * 2,
                (height - row_gap * 4) / 3 + (row_gap / 5) * 4,
                r,
                "rgb(210,192,75)"
              );
            }
            if (key == "绿") {
              roundRect(
                column_gap - column_gap / 3,
                row_gap * 3 + ((height - row_gap * 4) / 3) * 2 - row_gap / 5,
                (width - column_gap * 4) / 3 + (column_gap / 3) * 2,
                (height - row_gap * 4) / 3 + (row_gap / 5) * 4,
                r,
                "rgb(58,73,62)"
              );
            }
            if (key == "蓝") {
              roundRect(
                column_gap * 2 + (width - column_gap * 4) / 3 - column_gap / 3,
                row_gap * 3 + ((height - row_gap * 4) / 3) * 2 - row_gap / 5,
                (width - column_gap * 4) / 3 + (column_gap / 3) * 2,
                (height - row_gap * 4) / 3 + (row_gap / 5) * 4,
                r,
                "rgb(95,142,193)"
              );
            }
            if (key == "橙") {
              roundRect(
                column_gap * 3 +
                  ((width - column_gap * 4) / 3) * 2 -
                  column_gap / 3,
                row_gap * 3 + ((height - row_gap * 4) / 3) * 2 - row_gap / 5,
                (width - column_gap * 4) / 3 + (column_gap / 3) * 2,
                (height - row_gap * 4) / 3 + (row_gap / 5) * 4,
                r,
                "rgb(231,154,63)"
              );
            }
          }
        }

        if (mark) {
          this.setData({ btn_hidden: "block", selected: new_selected });
        } else {
          this.setData({ btn_hidden: "none", selected: new_selected });
        }
      });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(option) {
    this.setData({ length: option.length });
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

        let width = res[0].width;
        let height = res[0].height;
        let column_gap = 30;
        let row_gap = 40;
        let r = 10;

        // Row 0
        roundRectFill(
          column_gap,
          row_gap,
          (width - column_gap * 4) / 3,
          (height - row_gap * 4) / 3,
          r,
          "rgb(33,33,34)",
          "rgb(0,0,0)"
        );
        roundRectFill(
          column_gap * 2 + (width - column_gap * 4) / 3,
          row_gap,
          (width - column_gap * 4) / 3,
          (height - row_gap * 4) / 3,
          r,
          "rgb(166,170,171)",
          "rgb(109,113,114)"
        );
        roundRectFill(
          column_gap * 3 + ((width - column_gap * 4) / 3) * 2,
          row_gap,
          (width - column_gap * 4) / 3,
          (height - row_gap * 4) / 3,
          r,
          "rgb(255,255,255)",
          "rgb(255,255,255)"
        );
        // Row 1
        roundRectFill(
          column_gap,
          row_gap * 2 + (height - row_gap * 4) / 3,
          (width - column_gap * 4) / 3,
          (height - row_gap * 4) / 3,
          r,
          "rgb(214,195,162)",
          "rgb(91,60,29)"
        );
        roundRectFill(
          column_gap * 2 + (width - column_gap * 4) / 3,
          row_gap * 2 + (height - row_gap * 4) / 3,
          (width - column_gap * 4) / 3,
          (height - row_gap * 4) / 3,
          r,
          "rgb(158,47,43)",
          "rgb(82,48,25)"
        );
        roundRectFill(
          column_gap * 3 + ((width - column_gap * 4) / 3) * 2,
          row_gap * 2 + (height - row_gap * 4) / 3,
          (width - column_gap * 4) / 3,
          (height - row_gap * 4) / 3,
          r,
          "rgb(239,227,80)",
          "rgb(210,192,75)"
        );
        // Row 2
        roundRectFill(
          column_gap,
          row_gap * 3 + ((height - row_gap * 4) / 3) * 2,
          (width - column_gap * 4) / 3,
          (height - row_gap * 4) / 3,
          r,
          "rgb(136,135,104)",
          "rgb(58,73,62)"
        );
        roundRectFill(
          column_gap * 2 + (width - column_gap * 4) / 3,
          row_gap * 3 + ((height - row_gap * 4) / 3) * 2,
          (width - column_gap * 4) / 3,
          (height - row_gap * 4) / 3,
          r,
          "rgb(95,142,193)",
          "rgb(58,64,100)"
        );
        roundRectFill(
          column_gap * 3 + ((width - column_gap * 4) / 3) * 2,
          row_gap * 3 + ((height - row_gap * 4) / 3) * 2,
          (width - column_gap * 4) / 3,
          (height - row_gap * 4) / 3,
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
          column_gap + (width - column_gap * 4) / 3 / 3,
          row_gap + (height - row_gap * 4) / 3 + row_gap / 2
        );
        ctx.fillText(
          "灰色",
          column_gap +
            (width - column_gap * 4) / 3 / 3 +
            column_gap +
            (width - column_gap * 4) / 3,
          row_gap + (height - row_gap * 4) / 3 + row_gap / 2
        );
        ctx.fillText(
          "白色",
          column_gap +
            (width - column_gap * 4) / 3 / 3 +
            column_gap +
            (width - column_gap * 4) / 3 +
            column_gap +
            (width - column_gap * 4) / 3,
          row_gap + (height - row_gap * 4) / 3 + row_gap / 2
        );
        // Row 2
        ctx.fillText(
          "浅黄/棕色",
          column_gap + (width - column_gap * 4) / 3 / 3 - 14,
          row_gap +
            (height - row_gap * 4) / 3 +
            row_gap / 2 +
            row_gap +
            (height - row_gap * 4) / 3
        );
        ctx.fillText(
          "红褐色",
          column_gap +
            (width - column_gap * 4) / 3 / 3 +
            column_gap +
            (width - column_gap * 4) / 3 -
            6,
          row_gap +
            (height - row_gap * 4) / 3 +
            row_gap / 2 +
            row_gap +
            (height - row_gap * 4) / 3
        );
        ctx.fillText(
          "黄色",
          column_gap +
            (width - column_gap * 4) / 3 / 3 +
            column_gap +
            (width - column_gap * 4) / 3 +
            column_gap +
            (width - column_gap * 4) / 3,
          row_gap +
            (height - row_gap * 4) / 3 +
            row_gap / 2 +
            row_gap +
            (height - row_gap * 4) / 3
        );
        // Row 3
        ctx.fillText(
          "橄榄/绿色",
          column_gap + (width - column_gap * 4) / 3 / 3 - 14,
          row_gap +
            (height - row_gap * 4) / 3 +
            row_gap / 2 +
            row_gap +
            (height - row_gap * 4) / 3 +
            row_gap +
            (height - row_gap * 4) / 3
        );
        ctx.fillText(
          "蓝紫色",
          column_gap +
            (width - column_gap * 4) / 3 / 3 +
            column_gap +
            (width - column_gap * 4) / 3 -
            6,
          row_gap +
            (height - row_gap * 4) / 3 +
            row_gap / 2 +
            row_gap +
            (height - row_gap * 4) / 3 +
            row_gap +
            (height - row_gap * 4) / 3
        );
        ctx.fillText(
          "橙色",
          column_gap +
            (width - column_gap * 4) / 3 / 3 +
            column_gap +
            (width - column_gap * 4) / 3 +
            column_gap +
            (width - column_gap * 4) / 3,
          row_gap +
            (height - row_gap * 4) / 3 +
            row_gap / 2 +
            row_gap +
            (height - row_gap * 4) / 3 +
            row_gap +
            (height - row_gap * 4) / 3
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
