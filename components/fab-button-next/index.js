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
      this.onChange(!this.data.buttonVisible);
      this.triggerEvent("nextButtonClick", { index: -1 }, {});
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
