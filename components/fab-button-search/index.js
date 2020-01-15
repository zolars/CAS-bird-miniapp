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
          writable: !0
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
      observer: "forceUpdateButtonStyle"
    },
    spaceBetween: {
      type: Number,
      value: 10,
      observer: "forceUpdateButtonStyle"
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
      }
    },
    controlled: { type: Boolean, value: !1 }
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
                  : "".concat(a, "__button--hover")
            };
          }),
          icon: "".concat(a, "__icon"),
          label: "".concat(a, "__label"),
          backdrop: "".concat(a, "__backdrop"),
          hover: l && "default" !== l ? l : "".concat(a, "--hover")
        };
      }
    ]
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
      this.triggerEvent("searchButtonClick", { index: -1 }, {});
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
    }
  },
  ready: function() {
    var t = this.data,
      e = t.defaultVisible,
      a = t.visible,
      n = t.controlled ? a : e;
    this.updated(n);
  }
});
