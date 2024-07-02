import {
  require_prop_types
} from "./chunk-BU46R5M6.js";
import {
  __commonJS,
  require_react
} from "./chunk-DVCWAFVK.js";

// node_modules/react-reveal/globals.js
var require_globals = __commonJS({
  "node_modules/react-reveal/globals.js"(exports) {
    "use strict";
    function insertRule(e) {
      try {
        return sheet.insertRule(e, sheet.cssRules.length);
      } catch (e2) {
        console.warn("react-reveal - animation failed");
      }
    }
    function cascade(e, n, t, o, r) {
      var s = Math.log(o), i = Math.log(r), a = (i - s) / (t - n);
      return Math.exp(s + a * (e - n));
    }
    function animation(e) {
      if (!sheet) return "";
      var n = "@keyframes " + (name + counter) + "{" + e + "}", t = effectMap[e];
      return t ? "" + name + t : (sheet.insertRule(n, sheet.cssRules.length), effectMap[e] = counter, "" + name + counter++);
    }
    function hideAll() {
      globalHide || (exports.globalHide = globalHide = true, window.removeEventListener("scroll", hideAll, true), insertRule("." + namespace + " { opacity: 0; }"), window.removeEventListener("orientationchange", hideAll, true), window.document.removeEventListener("visibilitychange", hideAll));
    }
    function config(e) {
      var n = e.ssrFadeout;
      exports.fadeOutEnabled = fadeOutEnabled = n;
    }
    Object.defineProperty(exports, "__esModule", { value: true }), exports.insertRule = insertRule, exports.cascade = cascade, exports.animation = animation, exports.hideAll = hideAll, exports.default = config;
    var namespace = exports.namespace = "react-reveal";
    var defaults = exports.defaults = { duration: 1e3, delay: 0, count: 1 };
    var ssr = exports.ssr = true;
    var observerMode = exports.observerMode = false;
    var raf = exports.raf = function(e) {
      return window.setTimeout(e, 66);
    };
    var disableSsr = exports.disableSsr = function() {
      return exports.ssr = ssr = false;
    };
    var fadeOutEnabled = exports.fadeOutEnabled = false;
    var ssrFadeout = exports.ssrFadeout = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return exports.fadeOutEnabled = fadeOutEnabled = e;
    };
    var globalHide = exports.globalHide = false;
    var ie10 = exports.ie10 = false;
    var collapseend = exports.collapseend = void 0;
    var counter = 1;
    var effectMap = {};
    var sheet = false;
    var name = namespace + "-" + Math.floor(1e15 * Math.random()) + "-";
    if ("undefined" != typeof window && "nodejs" !== window.name && window.document && "undefined" != typeof navigator) {
      exports.observerMode = observerMode = "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype && /\{\s*\[native code\]\s*\}/.test("" + IntersectionObserver), exports.raf = raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || raf, exports.ssr = ssr = window.document.querySelectorAll("div[data-reactroot]").length > 0, -1 !== navigator.appVersion.indexOf("MSIE 10") && (exports.ie10 = ie10 = true), ssr && "performance" in window && "timing" in window.performance && "domContentLoadedEventEnd" in window.performance.timing && window.performance.timing.domLoading && Date.now() - window.performance.timing.domLoading < 300 && (exports.ssr = ssr = false), ssr && window.setTimeout(disableSsr, 1500), observerMode || (exports.collapseend = collapseend = document.createEvent("Event"), collapseend.initEvent("collapseend", true, true));
      element = document.createElement("style");
      document.head.appendChild(element), element.sheet && element.sheet.cssRules && element.sheet.insertRule && (sheet = element.sheet, window.addEventListener("scroll", hideAll, true), window.addEventListener("orientationchange", hideAll, true), window.document.addEventListener("visibilitychange", hideAll));
    }
    var element;
  }
});

// node_modules/react-reveal/RevealBase.js
var require_RevealBase = __commonJS({
  "node_modules/react-reveal/RevealBase.js"(exports, module) {
    "use strict";
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function _defineProperty(e, t, i) {
      return t in e ? Object.defineProperty(e, t, { value: i, enumerable: true, configurable: true, writable: true }) : e[t] = i, e;
    }
    function _classCallCheck(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function _inherits(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e;
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    var _slicedToArray = /* @__PURE__ */ function() {
      function e(e2, t) {
        var i = [], s = true, o = false, n = void 0;
        try {
          for (var r, a = e2[Symbol.iterator](); !(s = (r = a.next()).done) && (i.push(r.value), !t || i.length !== t); s = true) ;
        } catch (e3) {
          o = true, n = e3;
        } finally {
          try {
            !s && a.return && a.return();
          } finally {
            if (o) throw n;
          }
        }
        return i;
      }
      return function(t, i) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return e(t, i);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }();
    var _extends = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];
        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
      }
      return e;
    };
    var _createClass = /* @__PURE__ */ function() {
      function e(e2, t) {
        for (var i = 0; i < t.length; i++) {
          var s = t[i];
          s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(e2, s.key, s);
        }
      }
      return function(t, i, s) {
        return i && e(t.prototype, i), s && e(t, s), t;
      };
    }();
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _propTypes = require_prop_types();
    var _globals = require_globals();
    var inOut = (0, _propTypes.shape)({ make: _propTypes.func, duration: _propTypes.number.isRequired, delay: _propTypes.number.isRequired, forever: _propTypes.bool, count: _propTypes.number.isRequired, style: _propTypes.object.isRequired, reverse: _propTypes.bool });
    var propTypes = { collapse: _propTypes.bool, collapseEl: _propTypes.element, cascade: _propTypes.bool, wait: _propTypes.number, force: _propTypes.bool, disabled: _propTypes.bool, appear: _propTypes.bool, enter: _propTypes.bool, exit: _propTypes.bool, fraction: _propTypes.number, refProp: _propTypes.string, innerRef: _propTypes.func, onReveal: _propTypes.func, unmountOnExit: _propTypes.bool, mountOnEnter: _propTypes.bool, inEffect: inOut.isRequired, outEffect: (0, _propTypes.oneOfType)([inOut, (0, _propTypes.oneOf)([false])]).isRequired, ssrReveal: _propTypes.bool, collapseOnly: _propTypes.bool, ssrFadeout: _propTypes.bool };
    var defaultProps = { fraction: 0.2, refProp: "ref" };
    var contextTypes = { transitionGroup: _propTypes.object };
    var RevealBase = function(e) {
      function t(e2, i) {
        _classCallCheck(this, t);
        var s = _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e2, i));
        return s.isOn = void 0 === e2.when || !!e2.when, s.state = { collapse: e2.collapse ? t.getInitialCollapseStyle(e2) : void 0, style: { opacity: s.isOn && !e2.ssrReveal || !e2.outEffect ? void 0 : 0 } }, s.savedChild = false, s.isShown = false, _globals.observerMode ? s.handleObserve = s.handleObserve.bind(s) : (s.revealHandler = s.makeHandler(s.reveal), s.resizeHandler = s.makeHandler(s.resize)), s.saveRef = s.saveRef.bind(s), s;
      }
      return _inherits(t, e), _createClass(t, [{ key: "saveRef", value: function(e2) {
        this.childRef && this.childRef(e2), this.props.innerRef && this.props.innerRef(e2), this.el !== e2 && (this.el = e2 && "offsetHeight" in e2 ? e2 : void 0, this.observe(this.props, true));
      } }, { key: "invisible", value: function() {
        this && this.el && (this.savedChild = false, this.isShown || (this.setState({ hasExited: true, collapse: this.props.collapse ? _extends({}, this.state.collapse, { visibility: "hidden" }) : null, style: { opacity: 0 } }), !_globals.observerMode && this.props.collapse && window.document.dispatchEvent(_globals.collapseend)));
      } }, { key: "animationEnd", value: function(e2, t2, i) {
        var s = this, o = i.forever, n = i.count, r = i.delay, a = i.duration;
        if (!o) {
          var l = function() {
            s && s.el && (s.animationEndTimeout = void 0, e2.call(s));
          };
          this.animationEndTimeout = window.setTimeout(l, r + (a + (t2 ? a : 0) * n));
        }
      } }, { key: "getDimensionValue", value: function() {
        return this.el.offsetHeight + parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-top"), 10) + parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-bottom"), 10);
      } }, { key: "collapse", value: function(e2, t2, i) {
        var s = i.duration + (t2.cascade ? i.duration : 0), o = this.isOn ? this.getDimensionValue() : 0, n = void 0, r = void 0;
        if (t2.collapseOnly) n = i.duration / 3, r = i.delay;
        else {
          var a = s >> 2, l = a >> 1;
          n = a, r = i.delay + (this.isOn ? 0 : s - a - l), e2.style.animationDuration = s - a + (this.isOn ? l : -l) + "ms", e2.style.animationDelay = i.delay + (this.isOn ? a - l : 0) + "ms";
        }
        return e2.collapse = { height: o, transition: "height " + n + "ms ease " + r + "ms", overflow: t2.collapseOnly ? "hidden" : void 0 }, e2;
      } }, { key: "animate", value: function(e2) {
        if (this && this.el && (this.unlisten(), this.isShown !== this.isOn)) {
          this.isShown = this.isOn;
          var t2 = !this.isOn && e2.outEffect, i = e2[t2 ? "outEffect" : "inEffect"], s = "style" in i && i.style.animationName || void 0, o = void 0;
          e2.collapseOnly ? o = { hasAppeared: true, hasExited: false, style: { opacity: 1 } } : ((e2.outEffect || this.isOn) && i.make && (s = i.make), o = { hasAppeared: true, hasExited: false, collapse: void 0, style: _extends({}, i.style, { animationDuration: i.duration + "ms", animationDelay: i.delay + "ms", animationIterationCount: i.forever ? "infinite" : i.count, opacity: 1, animationName: s }), className: i.className }), this.setState(e2.collapse ? this.collapse(o, e2, i) : o), t2 ? (this.savedChild = _react2.default.cloneElement(this.getChild()), this.animationEnd(this.invisible, e2.cascade, i)) : this.savedChild = false, this.onReveal(e2);
        }
      } }, { key: "onReveal", value: function(e2) {
        e2.onReveal && this.isOn && (this.onRevealTimeout && (this.onRevealTimeout = window.clearTimeout(this.onRevealTimeout)), e2.wait ? this.onRevealTimeout = window.setTimeout(e2.onReveal, e2.wait) : e2.onReveal());
      } }, { key: "componentWillUnmount", value: function() {
        this.unlisten(), _globals.ssr && (0, _globals.disableSsr)();
      } }, { key: "handleObserve", value: function(e2, t2) {
        _slicedToArray(e2, 1)[0].intersectionRatio > 0 && (t2.disconnect(), this.observer = null, this.reveal(this.props, true));
      } }, { key: "observe", value: function(e2) {
        var t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.el && _globals.observerMode) {
          if (this.observer) {
            if (!t2) return;
            this.observer.disconnect();
          } else if (t2) return;
          this.observer = new IntersectionObserver(this.handleObserve, { threshold: e2.fraction }), this.observer.observe(this.el);
        }
      } }, { key: "reveal", value: function(e2) {
        var t2 = this, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        _globals.globalHide || (0, _globals.hideAll)(), this && this.el && (e2 || (e2 = this.props), _globals.ssr && (0, _globals.disableSsr)(), this.isOn && this.isShown && void 0 !== e2.spy ? (this.isShown = false, this.setState({ style: {} }), window.setTimeout(function() {
          return t2.reveal(e2);
        }, 200)) : i || this.inViewport(e2) || e2.force ? this.animate(e2) : _globals.observerMode ? this.observe(e2) : this.listen());
      } }, { key: "componentDidMount", value: function() {
        var e2 = this;
        if (this.el && !this.props.disabled) {
          this.props.collapseOnly || ("make" in this.props.inEffect && this.props.inEffect.make(false, this.props), void 0 !== this.props.when && this.props.outEffect && "make" in this.props.outEffect && this.props.outEffect.make(true, this.props));
          var i = this.context.transitionGroup, s = i && !i.isMounting ? !("enter" in this.props && false === this.props.enter) : this.props.appear;
          return this.isOn && ((void 0 !== this.props.when || void 0 !== this.props.spy) && !s || _globals.ssr && !_globals.fadeOutEnabled && !this.props.ssrFadeout && this.props.outEffect && !this.props.ssrReveal && t.getTop(this.el) < window.pageYOffset + window.innerHeight) ? (this.isShown = true, this.setState({ hasAppeared: true, collapse: this.props.collapse ? { height: this.getDimensionValue() } : this.state.collapse, style: { opacity: 1 } }), void this.onReveal(this.props)) : _globals.ssr && (_globals.fadeOutEnabled || this.props.ssrFadeout) && this.props.outEffect && t.getTop(this.el) < window.pageYOffset + window.innerHeight ? (this.setState({ style: { opacity: 0, transition: "opacity 1000ms 1000ms" } }), void window.setTimeout(function() {
            return e2.reveal(e2.props, true);
          }, 2e3)) : void (this.isOn && (this.props.force ? this.animate(this.props) : this.reveal(this.props)));
        }
      } }, { key: "cascade", value: function(e2) {
        var t2 = this, i = void 0;
        i = "string" == typeof e2 ? e2.split("").map(function(e3, t3) {
          return _react2.default.createElement("span", { key: t3, style: { display: "inline-block", whiteSpace: "pre" } }, e3);
        }) : _react2.default.Children.toArray(e2);
        var s = this.props[this.isOn || !this.props.outEffect ? "inEffect" : "outEffect"], o = s.duration, n = s.reverse, r = i.length, a = 2 * o;
        this.props.collapse && (a = parseInt(this.state.style.animationDuration, 10), o = a / 2);
        var l = n ? r : 0;
        return i = i.map(function(e3) {
          return "object" === (void 0 === e3 ? "undefined" : _typeof(e3)) && e3 ? _react2.default.cloneElement(e3, { style: _extends({}, e3.props.style, t2.state.style, { animationDuration: Math.round((0, _globals.cascade)(n ? l-- : l++, 0, r, o, a)) + "ms" }) }) : e3;
        });
      } }, { key: "componentWillReceiveProps", value: function(e2) {
        if (void 0 !== e2.when && (this.isOn = !!e2.when), e2.fraction !== this.props.fraction && this.observe(e2, true), !this.isOn && e2.onExited && "exit" in e2 && false === e2.exit) return void e2.onExited();
        e2.disabled || (e2.collapse && !this.props.collapse && (this.setState({ style: {}, collapse: t.getInitialCollapseStyle(e2) }), this.isShown = false), e2.when === this.props.when && e2.spy === this.props.spy || this.reveal(e2), this.onRevealTimeout && !this.isOn && (this.onRevealTimeout = window.clearTimeout(this.onRevealTimeout)));
      } }, { key: "getChild", value: function() {
        if (this.savedChild && !this.props.disabled) return this.savedChild;
        if ("object" === _typeof(this.props.children)) {
          var e2 = _react2.default.Children.only(this.props.children);
          return "type" in e2 && "string" == typeof e2.type || "ref" !== this.props.refProp ? e2 : _react2.default.createElement("div", null, e2);
        }
        return _react2.default.createElement("div", null, this.props.children);
      } }, { key: "render", value: function() {
        var e2 = void 0;
        e2 = this.state.hasAppeared ? !this.props.unmountOnExit || !this.state.hasExited || this.isOn : !this.props.mountOnEnter || this.isOn;
        var t2 = this.getChild();
        "function" == typeof t2.ref && (this.childRef = t2.ref);
        var i = false, s = t2.props, o = s.style, n = s.className, r = s.children, a = this.props.disabled ? n : (this.props.outEffect ? _globals.namespace : "") + (this.state.className ? " " + this.state.className : "") + (n ? " " + n : "") || void 0, l = void 0;
        "function" == typeof this.state.style.animationName && (this.state.style.animationName = this.state.style.animationName(!this.isOn, this.props)), this.props.cascade && !this.props.disabled && r && this.state.style.animationName ? (i = this.cascade(r), l = _extends({}, o, { opacity: 1 })) : l = this.props.disabled ? o : _extends({}, o, this.state.style);
        var p = _extends({}, this.props.props, _defineProperty({ className: a, style: l }, this.props.refProp, this.saveRef)), h = _react2.default.cloneElement(t2, p, e2 ? i || r : void 0);
        return void 0 !== this.props.collapse ? this.props.collapseEl ? _react2.default.cloneElement(this.props.collapseEl, { style: _extends({}, this.props.collapseEl.style, this.props.disabled ? void 0 : this.state.collapse), children: h }) : _react2.default.createElement("div", { style: this.props.disabled ? void 0 : this.state.collapse, children: h }) : h;
      } }, { key: "makeHandler", value: function(e2) {
        var t2 = this, i = function() {
          e2.call(t2, t2.props), t2.ticking = false;
        };
        return function() {
          t2.ticking || ((0, _globals.raf)(i), t2.ticking = true);
        };
      } }, { key: "inViewport", value: function(e2) {
        if (!this.el || window.document.hidden) return false;
        var i = this.el.offsetHeight, s = window.pageYOffset - t.getTop(this.el), o = Math.min(i, window.innerHeight) * (_globals.globalHide ? e2.fraction : 0);
        return s > o - window.innerHeight && s < i - o;
      } }, { key: "resize", value: function(e2) {
        this && this.el && this.isOn && this.inViewport(e2) && (this.unlisten(), this.isShown = this.isOn, this.setState({ hasExited: !this.isOn, hasAppeared: true, collapse: void 0, style: { opacity: this.isOn || !e2.outEffect ? 1 : 0 } }), this.onReveal(e2));
      } }, { key: "listen", value: function() {
        _globals.observerMode || this.isListener || (this.isListener = true, window.addEventListener("scroll", this.revealHandler, { passive: true }), window.addEventListener("orientationchange", this.revealHandler, { passive: true }), window.document.addEventListener("visibilitychange", this.revealHandler, { passive: true }), window.document.addEventListener("collapseend", this.revealHandler, { passive: true }), window.addEventListener("resize", this.resizeHandler, { passive: true }));
      } }, { key: "unlisten", value: function() {
        !_globals.observerMode && this.isListener && (window.removeEventListener("scroll", this.revealHandler, { passive: true }), window.removeEventListener("orientationchange", this.revealHandler, { passive: true }), window.document.removeEventListener("visibilitychange", this.revealHandler, { passive: true }), window.document.removeEventListener("collapseend", this.revealHandler, { passive: true }), window.removeEventListener("resize", this.resizeHandler, { passive: true }), this.isListener = false), this.onRevealTimeout && (this.onRevealTimeout = window.clearTimeout(this.onRevealTimeout)), this.animationEndTimeout && (this.animationEndTimeout = window.clearTimeout(this.animationEndTimeout));
      } }], [{ key: "getInitialCollapseStyle", value: function(e2) {
        return { height: 0, visibility: e2.when ? void 0 : "hidden" };
      } }, { key: "getTop", value: function(e2) {
        for (; void 0 === e2.offsetTop; ) e2 = e2.parentNode;
        for (var t2 = e2.offsetTop; e2.offsetParent; t2 += e2.offsetTop) e2 = e2.offsetParent;
        return t2;
      } }]), t;
    }(_react2.default.Component);
    RevealBase.propTypes = propTypes, RevealBase.defaultProps = defaultProps, RevealBase.contextTypes = contextTypes, RevealBase.displayName = "RevealBase", exports.default = RevealBase, module.exports = exports.default;
  }
});

// node_modules/react-reveal/wrap.js
var require_wrap = __commonJS({
  "node_modules/react-reveal/wrap.js"(exports, module) {
    "use strict";
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function wrap(e, t, a, r) {
      return "in" in e && (e.when = e.in), _react2.default.Children.count(r) < 2 ? _react2.default.createElement(_RevealBase2.default, _extends({}, e, { inEffect: t, outEffect: a, children: r })) : (r = _react2.default.Children.map(r, function(r2) {
        return _react2.default.createElement(_RevealBase2.default, _extends({}, e, { inEffect: t, outEffect: a, children: r2 }));
      }), "Fragment" in _react2.default ? _react2.default.createElement(_react2.default.Fragment, null, r) : _react2.default.createElement("span", null, r));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    var _extends = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
      }
      return e;
    };
    exports.default = wrap;
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _RevealBase = require_RevealBase();
    var _RevealBase2 = _interopRequireDefault(_RevealBase);
    module.exports = exports.default;
  }
});

// node_modules/react-reveal/Fade.js
var require_Fade = __commonJS({
  "node_modules/react-reveal/Fade.js"(exports, module) {
    function _interopRequireDefault(o) {
      return o && o.__esModule ? o : { default: o };
    }
    function _objectWithoutProperties(o, e) {
      var r = {};
      for (var t in o) e.indexOf(t) >= 0 || Object.prototype.hasOwnProperty.call(o, t) && (r[t] = o[t]);
      return r;
    }
    function make(o, e) {
      var r = e.distance, t = e.left, p = e.right, a = e.up, l = e.down, i = e.top, u = e.bottom, n = e.big, s = e.mirror, d = e.opposite, _ = (r ? r.toString() : 0) + ((t ? 1 : 0) | (p ? 2 : 0) | (i || l ? 4 : 0) | (u || a ? 8 : 0) | (s ? 16 : 0) | (d ? 32 : 0) | (o ? 64 : 0) | (n ? 128 : 0));
      if (lookup.hasOwnProperty(_)) return lookup[_];
      var f = t || p || a || l || i || u, y = void 0, b = void 0;
      if (f) {
        if (!s != !(o && d)) {
          var v = [p, t, u, i, l, a];
          t = v[0], p = v[1], i = v[2], u = v[3], a = v[4], l = v[5];
        }
        var c = r || (n ? "2000px" : "100%");
        y = t ? "-" + c : p ? c : "0", b = l || i ? "-" + c : a || u ? c : "0";
      }
      return lookup[_] = (0, _globals.animation)((o ? "to" : "from") + " {opacity: 0;" + (f ? " transform: translate3d(" + y + ", " + b + ", 0);" : "") + "}\n     " + (o ? "from" : "to") + " {opacity: 1;transform: none;} "), lookup[_];
    }
    function Fade() {
      var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _globals.defaults, e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = o.children, t = (o.out, o.forever), p = o.timeout, a = o.duration, l = void 0 === a ? _globals.defaults.duration : a, i = o.delay, u = void 0 === i ? _globals.defaults.delay : i, n = o.count, s = void 0 === n ? _globals.defaults.count : n, d = _objectWithoutProperties(o, ["children", "out", "forever", "timeout", "duration", "delay", "count"]), _ = { make, duration: void 0 === p ? l : p, delay: u, forever: t, count: s, style: { animationFillMode: "both" }, reverse: d.left };
      return e ? (0, _wrap2.default)(d, _, _, r) : _;
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    var _propTypes = require_prop_types();
    var _globals = require_globals();
    var _wrap = require_wrap();
    var _wrap2 = _interopRequireDefault(_wrap);
    var propTypes = { out: _propTypes.bool, left: _propTypes.bool, right: _propTypes.bool, top: _propTypes.bool, bottom: _propTypes.bool, big: _propTypes.bool, mirror: _propTypes.bool, opposite: _propTypes.bool, duration: _propTypes.number, timeout: _propTypes.number, distance: _propTypes.string, delay: _propTypes.number, count: _propTypes.number, forever: _propTypes.bool };
    var lookup = {};
    Fade.propTypes = propTypes, exports.default = Fade, module.exports = exports.default;
  }
});
export default require_Fade();
//# sourceMappingURL=react-reveal_Fade.js.map