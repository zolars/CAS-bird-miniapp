"use strict";
var _baseComponent = _interopRequireDefault(
    require("../helpers/baseComponent")
  ),
  _classNames5 = _interopRequireDefault(require("../helpers/classNames"));
function _interopRequireDefault(t) {
  return t && t.__esModule ? t : { default: t };
}
function ownKeys(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      a.push.apply(a, n);
  }
  return a;
}
function _objectSpread(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? ownKeys(a, !0).forEach(function(t) {
          _defineProperty(e, t, a[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
        : ownKeys(a).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
          });
  }
  return e;
}
function _defineProperty(t, e, a) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = a),
    t
  );
}
var defaultAction =
    // "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAHdElNRQfhBAQLCR5MtjrbAAAAjUlEQVRo3u3ZMRKAIAxEUbDirp4nXnctFFDHBtDQ/O1Nnk6aHUMgZCBKMkmmNAtgOmL9M+IQQGVM95zljy8DAAAAAAAAAAAAAACALsDZcppSx7Q+WdtUvA5xffUtrjeA8/qQ21S9gc15/3Nfzw0M5O0G2kM5BQAAAAAAAAAAAAAAQGk33q0qZ/p/Q/JFdmei9usomnwIAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA0LTA0VDExOjA5OjMwKzA4OjAw1U4c3wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNC0wNFQxMTowOTozMCswODowMKQTpGMAAAAASUVORK5CYII=",
    "data:image/png;base64,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",
  setTransform = function(t, e, a, n) {
    var o = 0 < arguments.length && void 0 !== t ? t : 0,
      r = 1 < arguments.length && void 0 !== e ? e : 1,
      i = !(3 < arguments.length && void 0 !== n) || n,
      c = "transition-duration: ".concat(
        2 < arguments.length && void 0 !== a ? a : 300,
        "ms"
      ),
      s = "transform: scale("
        .concat(r, ") translate3d(")
        .concat(i ? o : 0, "px, ")
        .concat(i ? 0 : o, "px, 0)");
    return "opacity: 1; ".concat(c, "; ").concat(s);
  };
(0, _baseComponent.default)({
  properties: {
    prefixCls: { type: String, value: "wux-fab-button" },
    hoverClass: { type: String, value: "default" },
    theme: { type: String, value: "balanced" },
    position: { type: String, value: "bottomRight" },
    action: { type: String, value: defaultAction },
    actionRotate: { type: Boolean, value: !0 },
    hideShadow: { type: Boolean, value: !1 },
    backdrop: { type: Boolean, value: !1 },
    buttons: { type: Array, value: [], observer: "forceUpdateButtonStyle" },
    direction: {
      type: String,
      value: "horizontal",
      observer: "forceUpdateButtonStyle",
    },
    spaceBetween: {
      type: Number,
      value: 10,
      observer: "forceUpdateButtonStyle",
    },
    duration: { type: Number, value: 300 },
    scale: { type: Number, value: 0.9, observer: "forceUpdateButtonStyle" },
    reverse: { type: Boolean, value: !1, observer: "forceUpdateButtonStyle" },
    sAngle: { type: Number, value: 0, observer: "forceUpdateButtonStyle" },
    eAngle: { type: Number, value: 360, observer: "forceUpdateButtonStyle" },
    defaultVisible: { type: Boolean, value: !1 },
    visible: {
      type: Boolean,
      value: !1,
      observer: function(t) {
        this.data.controlled && this.updated(t);
      },
    },
    controlled: { type: Boolean, value: !1 },
  },
  data: { buttonStyle: [], buttonVisible: !1 },
  computed: {
    classes: [
      "prefixCls, position, theme, direction, reverse, buttonVisible, hideShadow, actionRotate, buttons, hoverClass",
      function(a, t, e, n, o, r, i, c, s, l) {
        var u;
        return {
          wrap: (0, _classNames5.default)(
            a,
            (_defineProperty((u = {}), "".concat(a, "--").concat(t), t),
            _defineProperty(u, "".concat(a, "--").concat(e), e),
            _defineProperty(u, "".concat(a, "--").concat(n), n),
            _defineProperty(u, "".concat(a, "--reverse"), o),
            _defineProperty(u, "".concat(a, "--opened"), r),
            u)
          ),
          action: (0, _classNames5.default)(
            "".concat(a, "__action"),
            _defineProperty({}, "".concat(a, "__action--hide-shadow"), i)
          ),
          text: (0, _classNames5.default)(
            "".concat(a, "__text"),
            _defineProperty({}, "".concat(a, "__text--rotate"), r && c)
          ),
          button: s.map(function(t) {
            var e;
            return {
              wrap: (0, _classNames5.default)(
                "".concat(a, "__button"),
                (_defineProperty(
                  (e = {}),
                  "".concat(a, "__button--hide-shadow"),
                  t.hideShadow
                ),
                _defineProperty(
                  e,
                  "".concat(a, "__button--disabled"),
                  t.disabled
                ),
                _defineProperty(e, "".concat(t.className), t.className),
                e)
              ),
              hover:
                t.hoverClass && "default" !== t.hoverClass
                  ? t.hoverClass
                  : "".concat(a, "__button--hover"),
            };
          }),
          icon: "".concat(a, "__icon"),
          label: "".concat(a, "__label"),
          backdrop: "".concat(a, "__backdrop"),
          hover: l && "default" !== l ? l : "".concat(a, "--hover"),
        };
      },
    ],
  },
  methods: {
    updated: function(t) {
      this.data.buttonVisible !== t &&
        (this.setData({ buttonVisible: t }), this.updateButtonStyle(!t));
    },
    onChange: function(t) {
      this.data.controlled || this.updated(t),
        this.triggerEvent("change", { value: t });
    },
    onToggle: function() {
      wx.vibrateShort();
      this.onChange(!this.data.buttonVisible);
    },
    onTap: function(t) {
      var e = t.currentTarget.dataset,
        a = e.index,
        n = e.value,
        o = { index: a, value: n, buttons: this.data.buttons };
      n.disabled || (this.triggerEvent("click", o), this.onChange(!1));
    },
    getRect: function(t, a) {
      var n = this;
      return new Promise(function(e) {
        wx.createSelectorQuery()
          .in(n)
          [a ? "selectAll" : "select"](t)
          .boundingClientRect(function(t) {
            a && Array.isArray(t) && t.length && e(t), !a && t && e(t);
          })
          .exec();
      });
    },
    forceUpdateButtonStyle: function() {
      this.updateButtonStyle(!this.data.buttonVisible);
    },
    updateButtonStyle: function(t) {
      var n = this,
        e = this.data,
        a = e.prefixCls,
        r = e.buttons,
        i = e.duration,
        c = e.direction,
        s = e.spaceBetween,
        l = e.scale,
        u = [],
        d = this.data.reverse ? 1 : -1,
        A = "horizontal" === c;
      if (t)
        return (
          r.forEach(function() {
            u.push("opacity: 0; transform: translate3d(0, 0, 0)");
          }),
          void (this.data.buttonStyle !== u && this.setData({ buttonStyle: u }))
        );
      this.getRect(".".concat(a, "__action")).then(function(o) {
        switch (c) {
          case "horizontal":
          case "vertical":
            r.forEach(function(t, e) {
              var a = "".concat(d * (o.width + s) * (e + 1)),
                n = setTransform(a, l, i, A);
              u.push(n);
            });
            break;
          case "circle":
            var a = o.width + s;
            r.forEach(function(t, e) {
              u.push(n.getCircleStyle(e, a));
            });
        }
        n.data.buttonStyle !== u && n.setData({ buttonStyle: u });
      });
    },
    getCircleStyle: function(t, e) {
      var a = this.data,
        n = a.sAngle,
        o = a.eAngle,
        r = a.duration,
        i = a.scale,
        c = this.data.buttons.length,
        s = Math.max,
        l = Math.sin,
        u = Math.cos,
        d = Math.PI,
        A = (n * d) / 180,
        p = (o * d) / 180,
        f = A + ((p - A) / (p % (2 * d) == 0 ? c : s(1, c - 1))) * t,
        b = l(f) * e,
        h = u(f) * e;
      (b = parseFloat(b.toFixed(6))), (h = parseFloat(h.toFixed(6)));
      var v = "transform: scale("
        .concat(i, ") translate3d(")
        .concat(b, "px, ")
        .concat(h, "px, 0)");
      return "opacity: 1; transition-duration: ".concat(r, "ms; ").concat(v);
    },
    bindgetuserinfo: function(t) {
      this.triggerEvent(
        "getuserinfo",
        _objectSpread({}, t.detail, {}, t.currentTarget.dataset)
      );
    },
    bindcontact: function(t) {
      this.triggerEvent(
        "contact",
        _objectSpread({}, t.detail, {}, t.currentTarget.dataset)
      );
    },
    bindgetphonenumber: function(t) {
      this.triggerEvent(
        "getphonenumber",
        _objectSpread({}, t.detail, {}, t.currentTarget.dataset)
      );
    },
    bindopensetting: function(t) {
      this.triggerEvent(
        "opensetting",
        _objectSpread({}, t.detail, {}, t.currentTarget.dataset)
      );
    },
    onError: function(t) {
      this.triggerEvent(
        "error",
        _objectSpread({}, t.detail, {}, t.currentTarget.dataset)
      );
    },
  },
  ready: function() {
    var t = this.data,
      e = t.defaultVisible,
      a = t.visible,
      n = t.controlled ? a : e;
    this.updated(n);
  },
});
