var ep = (r) => {
  throw TypeError(r);
};
var tp = (r, n, i) => n.has(r) || ep("Cannot " + i);
var rp = (r, n, i) => (tp(r, n, "read from private field"), i ? i.call(r) : n.get(r)), np = (r, n, i) => n.has(r) ? ep("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(r) : n.set(r, i), Bs = (r, n, i, s) => (tp(r, n, "write to private field"), s ? s.call(r, i) : n.set(r, i), i);
function G0(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Hs = { exports: {} }, ve = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var op;
function X0() {
  if (op) return ve;
  op = 1;
  var r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), h = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), d = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), w = Symbol.iterator;
  function v(_) {
    return _ === null || typeof _ != "object" ? null : (_ = w && _[w] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var k = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, C = Object.assign, y = {};
  function F(_, I, de) {
    this.props = _, this.context = I, this.refs = y, this.updater = de || k;
  }
  F.prototype.isReactComponent = {}, F.prototype.setState = function(_, I) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, I, "setState");
  }, F.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function N() {
  }
  N.prototype = F.prototype;
  function M(_, I, de) {
    this.props = _, this.context = I, this.refs = y, this.updater = de || k;
  }
  var D = M.prototype = new N();
  D.constructor = M, C(D, F.prototype), D.isPureReactComponent = !0;
  var H = Array.isArray, ne = Object.prototype.hasOwnProperty, ae = { current: null }, oe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function xe(_, I, de) {
    var ce, ge = {}, ye = null, Fe = null;
    if (I != null) for (ce in I.ref !== void 0 && (Fe = I.ref), I.key !== void 0 && (ye = "" + I.key), I) ne.call(I, ce) && !oe.hasOwnProperty(ce) && (ge[ce] = I[ce]);
    var Ce = arguments.length - 2;
    if (Ce === 1) ge.children = de;
    else if (1 < Ce) {
      for (var Ae = Array(Ce), Ze = 0; Ze < Ce; Ze++) Ae[Ze] = arguments[Ze + 2];
      ge.children = Ae;
    }
    if (_ && _.defaultProps) for (ce in Ce = _.defaultProps, Ce) ge[ce] === void 0 && (ge[ce] = Ce[ce]);
    return { $$typeof: r, type: _, key: ye, ref: Fe, props: ge, _owner: ae.current };
  }
  function me(_, I) {
    return { $$typeof: r, type: _.type, key: I, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function Se(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === r;
  }
  function we(_) {
    var I = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(de) {
      return I[de];
    });
  }
  var Q = /\/+/g;
  function te(_, I) {
    return typeof _ == "object" && _ !== null && _.key != null ? we("" + _.key) : I.toString(36);
  }
  function A(_, I, de, ce, ge) {
    var ye = typeof _;
    (ye === "undefined" || ye === "boolean") && (_ = null);
    var Fe = !1;
    if (_ === null) Fe = !0;
    else switch (ye) {
      case "string":
      case "number":
        Fe = !0;
        break;
      case "object":
        switch (_.$$typeof) {
          case r:
          case n:
            Fe = !0;
        }
    }
    if (Fe) return Fe = _, ge = ge(Fe), _ = ce === "" ? "." + te(Fe, 0) : ce, H(ge) ? (de = "", _ != null && (de = _.replace(Q, "$&/") + "/"), A(ge, I, de, "", function(Ze) {
      return Ze;
    })) : ge != null && (Se(ge) && (ge = me(ge, de + (!ge.key || Fe && Fe.key === ge.key ? "" : ("" + ge.key).replace(Q, "$&/") + "/") + _)), I.push(ge)), 1;
    if (Fe = 0, ce = ce === "" ? "." : ce + ":", H(_)) for (var Ce = 0; Ce < _.length; Ce++) {
      ye = _[Ce];
      var Ae = ce + te(ye, Ce);
      Fe += A(ye, I, de, Ae, ge);
    }
    else if (Ae = v(_), typeof Ae == "function") for (_ = Ae.call(_), Ce = 0; !(ye = _.next()).done; ) ye = ye.value, Ae = ce + te(ye, Ce++), Fe += A(ye, I, de, Ae, ge);
    else if (ye === "object") throw I = String(_), Error("Objects are not valid as a React child (found: " + (I === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : I) + "). If you meant to render a collection of children, use an array instead.");
    return Fe;
  }
  function Y(_, I, de) {
    if (_ == null) return _;
    var ce = [], ge = 0;
    return A(_, ce, "", "", function(ye) {
      return I.call(de, ye, ge++);
    }), ce;
  }
  function G(_) {
    if (_._status === -1) {
      var I = _._result;
      I = I(), I.then(function(de) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = de);
      }, function(de) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = de);
      }), _._status === -1 && (_._status = 0, _._result = I);
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var R = { current: null }, L = { transition: null }, $ = { ReactCurrentDispatcher: R, ReactCurrentBatchConfig: L, ReactCurrentOwner: ae };
  function O() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return ve.Children = { map: Y, forEach: function(_, I, de) {
    Y(_, function() {
      I.apply(this, arguments);
    }, de);
  }, count: function(_) {
    var I = 0;
    return Y(_, function() {
      I++;
    }), I;
  }, toArray: function(_) {
    return Y(_, function(I) {
      return I;
    }) || [];
  }, only: function(_) {
    if (!Se(_)) throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, ve.Component = F, ve.Fragment = i, ve.Profiler = c, ve.PureComponent = M, ve.StrictMode = s, ve.Suspense = p, ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $, ve.act = O, ve.cloneElement = function(_, I, de) {
    if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var ce = C({}, _.props), ge = _.key, ye = _.ref, Fe = _._owner;
    if (I != null) {
      if (I.ref !== void 0 && (ye = I.ref, Fe = ae.current), I.key !== void 0 && (ge = "" + I.key), _.type && _.type.defaultProps) var Ce = _.type.defaultProps;
      for (Ae in I) ne.call(I, Ae) && !oe.hasOwnProperty(Ae) && (ce[Ae] = I[Ae] === void 0 && Ce !== void 0 ? Ce[Ae] : I[Ae]);
    }
    var Ae = arguments.length - 2;
    if (Ae === 1) ce.children = de;
    else if (1 < Ae) {
      Ce = Array(Ae);
      for (var Ze = 0; Ze < Ae; Ze++) Ce[Ze] = arguments[Ze + 2];
      ce.children = Ce;
    }
    return { $$typeof: r, type: _.type, key: ge, ref: ye, props: ce, _owner: Fe };
  }, ve.createContext = function(_) {
    return _ = { $$typeof: h, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: f, _context: _ }, _.Consumer = _;
  }, ve.createElement = xe, ve.createFactory = function(_) {
    var I = xe.bind(null, _);
    return I.type = _, I;
  }, ve.createRef = function() {
    return { current: null };
  }, ve.forwardRef = function(_) {
    return { $$typeof: g, render: _ };
  }, ve.isValidElement = Se, ve.lazy = function(_) {
    return { $$typeof: b, _payload: { _status: -1, _result: _ }, _init: G };
  }, ve.memo = function(_, I) {
    return { $$typeof: d, type: _, compare: I === void 0 ? null : I };
  }, ve.startTransition = function(_) {
    var I = L.transition;
    L.transition = {};
    try {
      _();
    } finally {
      L.transition = I;
    }
  }, ve.unstable_act = O, ve.useCallback = function(_, I) {
    return R.current.useCallback(_, I);
  }, ve.useContext = function(_) {
    return R.current.useContext(_);
  }, ve.useDebugValue = function() {
  }, ve.useDeferredValue = function(_) {
    return R.current.useDeferredValue(_);
  }, ve.useEffect = function(_, I) {
    return R.current.useEffect(_, I);
  }, ve.useId = function() {
    return R.current.useId();
  }, ve.useImperativeHandle = function(_, I, de) {
    return R.current.useImperativeHandle(_, I, de);
  }, ve.useInsertionEffect = function(_, I) {
    return R.current.useInsertionEffect(_, I);
  }, ve.useLayoutEffect = function(_, I) {
    return R.current.useLayoutEffect(_, I);
  }, ve.useMemo = function(_, I) {
    return R.current.useMemo(_, I);
  }, ve.useReducer = function(_, I, de) {
    return R.current.useReducer(_, I, de);
  }, ve.useRef = function(_) {
    return R.current.useRef(_);
  }, ve.useState = function(_) {
    return R.current.useState(_);
  }, ve.useSyncExternalStore = function(_, I, de) {
    return R.current.useSyncExternalStore(_, I, de);
  }, ve.useTransition = function() {
    return R.current.useTransition();
  }, ve.version = "18.3.1", ve;
}
var ip;
function Ru() {
  return ip || (ip = 1, Hs.exports = X0()), Hs.exports;
}
var B = Ru();
const re = /* @__PURE__ */ G0(B);
var ga = {}, Ws = { exports: {} }, dt = {}, Ks = { exports: {} }, Ys = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ap;
function q0() {
  return ap || (ap = 1, (function(r) {
    function n(L, $) {
      var O = L.length;
      L.push($);
      e: for (; 0 < O; ) {
        var _ = O - 1 >>> 1, I = L[_];
        if (0 < c(I, $)) L[_] = $, L[O] = I, O = _;
        else break e;
      }
    }
    function i(L) {
      return L.length === 0 ? null : L[0];
    }
    function s(L) {
      if (L.length === 0) return null;
      var $ = L[0], O = L.pop();
      if (O !== $) {
        L[0] = O;
        e: for (var _ = 0, I = L.length, de = I >>> 1; _ < de; ) {
          var ce = 2 * (_ + 1) - 1, ge = L[ce], ye = ce + 1, Fe = L[ye];
          if (0 > c(ge, O)) ye < I && 0 > c(Fe, ge) ? (L[_] = Fe, L[ye] = O, _ = ye) : (L[_] = ge, L[ce] = O, _ = ce);
          else if (ye < I && 0 > c(Fe, O)) L[_] = Fe, L[ye] = O, _ = ye;
          else break e;
        }
      }
      return $;
    }
    function c(L, $) {
      var O = L.sortIndex - $.sortIndex;
      return O !== 0 ? O : L.id - $.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      r.unstable_now = function() {
        return f.now();
      };
    } else {
      var h = Date, g = h.now();
      r.unstable_now = function() {
        return h.now() - g;
      };
    }
    var p = [], d = [], b = 1, w = null, v = 3, k = !1, C = !1, y = !1, F = typeof setTimeout == "function" ? setTimeout : null, N = typeof clearTimeout == "function" ? clearTimeout : null, M = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function D(L) {
      for (var $ = i(d); $ !== null; ) {
        if ($.callback === null) s(d);
        else if ($.startTime <= L) s(d), $.sortIndex = $.expirationTime, n(p, $);
        else break;
        $ = i(d);
      }
    }
    function H(L) {
      if (y = !1, D(L), !C) if (i(p) !== null) C = !0, G(ne);
      else {
        var $ = i(d);
        $ !== null && R(H, $.startTime - L);
      }
    }
    function ne(L, $) {
      C = !1, y && (y = !1, N(xe), xe = -1), k = !0;
      var O = v;
      try {
        for (D($), w = i(p); w !== null && (!(w.expirationTime > $) || L && !we()); ) {
          var _ = w.callback;
          if (typeof _ == "function") {
            w.callback = null, v = w.priorityLevel;
            var I = _(w.expirationTime <= $);
            $ = r.unstable_now(), typeof I == "function" ? w.callback = I : w === i(p) && s(p), D($);
          } else s(p);
          w = i(p);
        }
        if (w !== null) var de = !0;
        else {
          var ce = i(d);
          ce !== null && R(H, ce.startTime - $), de = !1;
        }
        return de;
      } finally {
        w = null, v = O, k = !1;
      }
    }
    var ae = !1, oe = null, xe = -1, me = 5, Se = -1;
    function we() {
      return !(r.unstable_now() - Se < me);
    }
    function Q() {
      if (oe !== null) {
        var L = r.unstable_now();
        Se = L;
        var $ = !0;
        try {
          $ = oe(!0, L);
        } finally {
          $ ? te() : (ae = !1, oe = null);
        }
      } else ae = !1;
    }
    var te;
    if (typeof M == "function") te = function() {
      M(Q);
    };
    else if (typeof MessageChannel < "u") {
      var A = new MessageChannel(), Y = A.port2;
      A.port1.onmessage = Q, te = function() {
        Y.postMessage(null);
      };
    } else te = function() {
      F(Q, 0);
    };
    function G(L) {
      oe = L, ae || (ae = !0, te());
    }
    function R(L, $) {
      xe = F(function() {
        L(r.unstable_now());
      }, $);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(L) {
      L.callback = null;
    }, r.unstable_continueExecution = function() {
      C || k || (C = !0, G(ne));
    }, r.unstable_forceFrameRate = function(L) {
      0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : me = 0 < L ? Math.floor(1e3 / L) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return v;
    }, r.unstable_getFirstCallbackNode = function() {
      return i(p);
    }, r.unstable_next = function(L) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = v;
      }
      var O = v;
      v = $;
      try {
        return L();
      } finally {
        v = O;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function(L, $) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var O = v;
      v = L;
      try {
        return $();
      } finally {
        v = O;
      }
    }, r.unstable_scheduleCallback = function(L, $, O) {
      var _ = r.unstable_now();
      switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? _ + O : _) : O = _, L) {
        case 1:
          var I = -1;
          break;
        case 2:
          I = 250;
          break;
        case 5:
          I = 1073741823;
          break;
        case 4:
          I = 1e4;
          break;
        default:
          I = 5e3;
      }
      return I = O + I, L = { id: b++, callback: $, priorityLevel: L, startTime: O, expirationTime: I, sortIndex: -1 }, O > _ ? (L.sortIndex = O, n(d, L), i(p) === null && L === i(d) && (y ? (N(xe), xe = -1) : y = !0, R(H, O - _))) : (L.sortIndex = I, n(p, L), C || k || (C = !0, G(ne))), L;
    }, r.unstable_shouldYield = we, r.unstable_wrapCallback = function(L) {
      var $ = v;
      return function() {
        var O = v;
        v = $;
        try {
          return L.apply(this, arguments);
        } finally {
          v = O;
        }
      };
    };
  })(Ys)), Ys;
}
var lp;
function Z0() {
  return lp || (lp = 1, Ks.exports = q0()), Ks.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sp;
function J0() {
  if (sp) return dt;
  sp = 1;
  var r = Ru(), n = Z0();
  function i(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, o = 1; o < arguments.length; o++) t += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var s = /* @__PURE__ */ new Set(), c = {};
  function f(e, t) {
    h(e, t), h(e + "Capture", t);
  }
  function h(e, t) {
    for (c[e] = t, e = 0; e < t.length; e++) s.add(t[e]);
  }
  var g = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), p = Object.prototype.hasOwnProperty, d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, b = {}, w = {};
  function v(e) {
    return p.call(w, e) ? !0 : p.call(b, e) ? !1 : d.test(e) ? w[e] = !0 : (b[e] = !0, !1);
  }
  function k(e, t, o, a) {
    if (o !== null && o.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return a ? !1 : o !== null ? !o.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function C(e, t, o, a) {
    if (t === null || typeof t > "u" || k(e, t, o, a)) return !0;
    if (a) return !1;
    if (o !== null) switch (o.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function y(e, t, o, a, l, u, m) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = a, this.attributeNamespace = l, this.mustUseProperty = o, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = m;
  }
  var F = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    F[e] = new y(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    F[t] = new y(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    F[e] = new y(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    F[e] = new y(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    F[e] = new y(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    F[e] = new y(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    F[e] = new y(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    F[e] = new y(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    F[e] = new y(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var N = /[\-:]([a-z])/g;
  function M(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      N,
      M
    );
    F[t] = new y(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(N, M);
    F[t] = new y(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(N, M);
    F[t] = new y(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    F[e] = new y(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), F.xlinkHref = new y("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    F[e] = new y(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function D(e, t, o, a) {
    var l = F.hasOwnProperty(t) ? F[t] : null;
    (l !== null ? l.type !== 0 : a || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (C(t, o, l, a) && (o = null), a || l === null ? v(t) && (o === null ? e.removeAttribute(t) : e.setAttribute(t, "" + o)) : l.mustUseProperty ? e[l.propertyName] = o === null ? l.type === 3 ? !1 : "" : o : (t = l.attributeName, a = l.attributeNamespace, o === null ? e.removeAttribute(t) : (l = l.type, o = l === 3 || l === 4 && o === !0 ? "" : "" + o, a ? e.setAttributeNS(a, t, o) : e.setAttribute(t, o))));
  }
  var H = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ne = Symbol.for("react.element"), ae = Symbol.for("react.portal"), oe = Symbol.for("react.fragment"), xe = Symbol.for("react.strict_mode"), me = Symbol.for("react.profiler"), Se = Symbol.for("react.provider"), we = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), G = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), L = Symbol.iterator;
  function $(e) {
    return e === null || typeof e != "object" ? null : (e = L && e[L] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var O = Object.assign, _;
  function I(e) {
    if (_ === void 0) try {
      throw Error();
    } catch (o) {
      var t = o.stack.trim().match(/\n( *(at )?)/);
      _ = t && t[1] || "";
    }
    return `
` + _ + e;
  }
  var de = !1;
  function ce(e, t) {
    if (!e || de) return "";
    de = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (z) {
          var a = z;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (z) {
          a = z;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (z) {
          a = z;
        }
        e();
      }
    } catch (z) {
      if (z && a && typeof z.stack == "string") {
        for (var l = z.stack.split(`
`), u = a.stack.split(`
`), m = l.length - 1, x = u.length - 1; 1 <= m && 0 <= x && l[m] !== u[x]; ) x--;
        for (; 1 <= m && 0 <= x; m--, x--) if (l[m] !== u[x]) {
          if (m !== 1 || x !== 1)
            do
              if (m--, x--, 0 > x || l[m] !== u[x]) {
                var E = `
` + l[m].replace(" at new ", " at ");
                return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), E;
              }
            while (1 <= m && 0 <= x);
          break;
        }
      }
    } finally {
      de = !1, Error.prepareStackTrace = o;
    }
    return (e = e ? e.displayName || e.name : "") ? I(e) : "";
  }
  function ge(e) {
    switch (e.tag) {
      case 5:
        return I(e.type);
      case 16:
        return I("Lazy");
      case 13:
        return I("Suspense");
      case 19:
        return I("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = ce(e.type, !1), e;
      case 11:
        return e = ce(e.type.render, !1), e;
      case 1:
        return e = ce(e.type, !0), e;
      default:
        return "";
    }
  }
  function ye(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case oe:
        return "Fragment";
      case ae:
        return "Portal";
      case me:
        return "Profiler";
      case xe:
        return "StrictMode";
      case te:
        return "Suspense";
      case A:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case we:
        return (e.displayName || "Context") + ".Consumer";
      case Se:
        return (e._context.displayName || "Context") + ".Provider";
      case Q:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Y:
        return t = e.displayName || null, t !== null ? t : ye(e.type) || "Memo";
      case G:
        t = e._payload, e = e._init;
        try {
          return ye(e(t));
        } catch {
        }
    }
    return null;
  }
  function Fe(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ye(t);
      case 8:
        return t === xe ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Ce(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Ae(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ze(e) {
    var t = Ae(e) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), a = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var l = o.get, u = o.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(m) {
        a = "" + m, u.call(this, m);
      } }), Object.defineProperty(e, t, { enumerable: o.enumerable }), { getValue: function() {
        return a;
      }, setValue: function(m) {
        a = "" + m;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function nn(e) {
    e._valueTracker || (e._valueTracker = Ze(e));
  }
  function li(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var o = t.getValue(), a = "";
    return e && (a = Ae(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== o ? (t.setValue(e), !0) : !1;
  }
  function on(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function an(e, t) {
    var o = t.checked;
    return O({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? e._wrapperState.initialChecked });
  }
  function ie(e, t) {
    var o = t.defaultValue == null ? "" : t.defaultValue, a = t.checked != null ? t.checked : t.defaultChecked;
    o = Ce(t.value != null ? t.value : o), e._wrapperState = { initialChecked: a, initialValue: o, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function ke(e, t) {
    t = t.checked, t != null && D(e, "checked", t, !1);
  }
  function Ut(e, t) {
    ke(e, t);
    var o = Ce(t.value), a = t.type;
    if (o != null) a === "number" ? (o === 0 && e.value === "" || e.value != o) && (e.value = "" + o) : e.value !== "" + o && (e.value = "" + o);
    else if (a === "submit" || a === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Nr(e, t.type, o) : t.hasOwnProperty("defaultValue") && Nr(e, t.type, Ce(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Rr(e, t, o) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var a = t.type;
      if (!(a !== "submit" && a !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, o || t === e.value || (e.value = t), e.defaultValue = t;
    }
    o = e.name, o !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, o !== "" && (e.name = o);
  }
  function Nr(e, t, o) {
    (t !== "number" || on(e.ownerDocument) !== e) && (o == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + o && (e.defaultValue = "" + o));
  }
  var Yn = Array.isArray;
  function ln(e, t, o, a) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < o.length; l++) t["$" + o[l]] = !0;
      for (o = 0; o < e.length; o++) l = t.hasOwnProperty("$" + e[o].value), e[o].selected !== l && (e[o].selected = l), l && a && (e[o].defaultSelected = !0);
    } else {
      for (o = "" + Ce(o), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === o) {
          e[l].selected = !0, a && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ja(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return O({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function uc(e, t) {
    var o = t.value;
    if (o == null) {
      if (o = t.children, t = t.defaultValue, o != null) {
        if (t != null) throw Error(i(92));
        if (Yn(o)) {
          if (1 < o.length) throw Error(i(93));
          o = o[0];
        }
        t = o;
      }
      t == null && (t = ""), o = t;
    }
    e._wrapperState = { initialValue: Ce(o) };
  }
  function cc(e, t) {
    var o = Ce(t.value), a = Ce(t.defaultValue);
    o != null && (o = "" + o, o !== e.value && (e.value = o), t.defaultValue == null && e.defaultValue !== o && (e.defaultValue = o)), a != null && (e.defaultValue = "" + a);
  }
  function dc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function fc(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function el(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? fc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var si, pc = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, o, a, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, o, a, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (si = si || document.createElement("div"), si.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = si.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Qn(e, t) {
    if (t) {
      var o = e.firstChild;
      if (o && o === e.lastChild && o.nodeType === 3) {
        o.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Gn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Jm = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Gn).forEach(function(e) {
    Jm.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Gn[t] = Gn[e];
    });
  });
  function hc(e, t, o) {
    return t == null || typeof t == "boolean" || t === "" ? "" : o || typeof t != "number" || t === 0 || Gn.hasOwnProperty(e) && Gn[e] ? ("" + t).trim() : t + "px";
  }
  function mc(e, t) {
    e = e.style;
    for (var o in t) if (t.hasOwnProperty(o)) {
      var a = o.indexOf("--") === 0, l = hc(o, t[o], a);
      o === "float" && (o = "cssFloat"), a ? e.setProperty(o, l) : e[o] = l;
    }
  }
  var eg = O({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function tl(e, t) {
    if (t) {
      if (eg[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(i(62));
    }
  }
  function rl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var nl = null;
  function ol(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var il = null, sn = null, un = null;
  function gc(e) {
    if (e = wo(e)) {
      if (typeof il != "function") throw Error(i(280));
      var t = e.stateNode;
      t && (t = zi(t), il(e.stateNode, e.type, t));
    }
  }
  function vc(e) {
    sn ? un ? un.push(e) : un = [e] : sn = e;
  }
  function wc() {
    if (sn) {
      var e = sn, t = un;
      if (un = sn = null, gc(e), t) for (e = 0; e < t.length; e++) gc(t[e]);
    }
  }
  function yc(e, t) {
    return e(t);
  }
  function bc() {
  }
  var al = !1;
  function xc(e, t, o) {
    if (al) return e(t, o);
    al = !0;
    try {
      return yc(e, t, o);
    } finally {
      al = !1, (sn !== null || un !== null) && (bc(), wc());
    }
  }
  function Xn(e, t) {
    var o = e.stateNode;
    if (o === null) return null;
    var a = zi(o);
    if (a === null) return null;
    o = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (o && typeof o != "function") throw Error(i(231, t, typeof o));
    return o;
  }
  var ll = !1;
  if (g) try {
    var qn = {};
    Object.defineProperty(qn, "passive", { get: function() {
      ll = !0;
    } }), window.addEventListener("test", qn, qn), window.removeEventListener("test", qn, qn);
  } catch {
    ll = !1;
  }
  function tg(e, t, o, a, l, u, m, x, E) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(o, z);
    } catch (U) {
      this.onError(U);
    }
  }
  var Zn = !1, ui = null, ci = !1, sl = null, rg = { onError: function(e) {
    Zn = !0, ui = e;
  } };
  function ng(e, t, o, a, l, u, m, x, E) {
    Zn = !1, ui = null, tg.apply(rg, arguments);
  }
  function og(e, t, o, a, l, u, m, x, E) {
    if (ng.apply(this, arguments), Zn) {
      if (Zn) {
        var z = ui;
        Zn = !1, ui = null;
      } else throw Error(i(198));
      ci || (ci = !0, sl = z);
    }
  }
  function Mr(e) {
    var t = e, o = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (o = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? o : null;
  }
  function kc(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function _c(e) {
    if (Mr(e) !== e) throw Error(i(188));
  }
  function ig(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Mr(e), t === null) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var o = e, a = t; ; ) {
      var l = o.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (a = l.return, a !== null) {
          o = a;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === o) return _c(l), e;
          if (u === a) return _c(l), t;
          u = u.sibling;
        }
        throw Error(i(188));
      }
      if (o.return !== a.return) o = l, a = u;
      else {
        for (var m = !1, x = l.child; x; ) {
          if (x === o) {
            m = !0, o = l, a = u;
            break;
          }
          if (x === a) {
            m = !0, a = l, o = u;
            break;
          }
          x = x.sibling;
        }
        if (!m) {
          for (x = u.child; x; ) {
            if (x === o) {
              m = !0, o = u, a = l;
              break;
            }
            if (x === a) {
              m = !0, a = u, o = l;
              break;
            }
            x = x.sibling;
          }
          if (!m) throw Error(i(189));
        }
      }
      if (o.alternate !== a) throw Error(i(190));
    }
    if (o.tag !== 3) throw Error(i(188));
    return o.stateNode.current === o ? e : t;
  }
  function Ec(e) {
    return e = ig(e), e !== null ? Sc(e) : null;
  }
  function Sc(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Sc(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Cc = n.unstable_scheduleCallback, Fc = n.unstable_cancelCallback, ag = n.unstable_shouldYield, lg = n.unstable_requestPaint, je = n.unstable_now, sg = n.unstable_getCurrentPriorityLevel, ul = n.unstable_ImmediatePriority, Pc = n.unstable_UserBlockingPriority, di = n.unstable_NormalPriority, ug = n.unstable_LowPriority, Tc = n.unstable_IdlePriority, fi = null, Vt = null;
  function cg(e) {
    if (Vt && typeof Vt.onCommitFiberRoot == "function") try {
      Vt.onCommitFiberRoot(fi, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var At = Math.clz32 ? Math.clz32 : pg, dg = Math.log, fg = Math.LN2;
  function pg(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (dg(e) / fg | 0) | 0;
  }
  var pi = 64, hi = 4194304;
  function Jn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function mi(e, t) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var a = 0, l = e.suspendedLanes, u = e.pingedLanes, m = o & 268435455;
    if (m !== 0) {
      var x = m & ~l;
      x !== 0 ? a = Jn(x) : (u &= m, u !== 0 && (a = Jn(u)));
    } else m = o & ~l, m !== 0 ? a = Jn(m) : u !== 0 && (a = Jn(u));
    if (a === 0) return 0;
    if (t !== 0 && t !== a && (t & l) === 0 && (l = a & -a, u = t & -t, l >= u || l === 16 && (u & 4194240) !== 0)) return t;
    if ((a & 4) !== 0 && (a |= o & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= a; 0 < t; ) o = 31 - At(t), l = 1 << o, a |= e[o], t &= ~l;
    return a;
  }
  function hg(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function mg(e, t) {
    for (var o = e.suspendedLanes, a = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var m = 31 - At(u), x = 1 << m, E = l[m];
      E === -1 ? ((x & o) === 0 || (x & a) !== 0) && (l[m] = hg(x, t)) : E <= t && (e.expiredLanes |= x), u &= ~x;
    }
  }
  function cl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Ac() {
    var e = pi;
    return pi <<= 1, (pi & 4194240) === 0 && (pi = 64), e;
  }
  function dl(e) {
    for (var t = [], o = 0; 31 > o; o++) t.push(e);
    return t;
  }
  function eo(e, t, o) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - At(t), e[t] = o;
  }
  function gg(e, t) {
    var o = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var a = e.eventTimes;
    for (e = e.expirationTimes; 0 < o; ) {
      var l = 31 - At(o), u = 1 << l;
      t[l] = 0, a[l] = -1, e[l] = -1, o &= ~u;
    }
  }
  function fl(e, t) {
    var o = e.entangledLanes |= t;
    for (e = e.entanglements; o; ) {
      var a = 31 - At(o), l = 1 << a;
      l & t | e[a] & t && (e[a] |= t), o &= ~l;
    }
  }
  var Pe = 0;
  function zc(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var $c, pl, Ic, Lc, Rc, hl = !1, gi = [], cr = null, dr = null, fr = null, to = /* @__PURE__ */ new Map(), ro = /* @__PURE__ */ new Map(), pr = [], vg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Nc(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        cr = null;
        break;
      case "dragenter":
      case "dragleave":
        dr = null;
        break;
      case "mouseover":
      case "mouseout":
        fr = null;
        break;
      case "pointerover":
      case "pointerout":
        to.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ro.delete(t.pointerId);
    }
  }
  function no(e, t, o, a, l, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: o, eventSystemFlags: a, nativeEvent: u, targetContainers: [l] }, t !== null && (t = wo(t), t !== null && pl(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function wg(e, t, o, a, l) {
    switch (t) {
      case "focusin":
        return cr = no(cr, e, t, o, a, l), !0;
      case "dragenter":
        return dr = no(dr, e, t, o, a, l), !0;
      case "mouseover":
        return fr = no(fr, e, t, o, a, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return to.set(u, no(to.get(u) || null, e, t, o, a, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, ro.set(u, no(ro.get(u) || null, e, t, o, a, l)), !0;
    }
    return !1;
  }
  function Mc(e) {
    var t = Or(e.target);
    if (t !== null) {
      var o = Mr(t);
      if (o !== null) {
        if (t = o.tag, t === 13) {
          if (t = kc(o), t !== null) {
            e.blockedOn = t, Rc(e.priority, function() {
              Ic(o);
            });
            return;
          }
        } else if (t === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function vi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var o = gl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (o === null) {
        o = e.nativeEvent;
        var a = new o.constructor(o.type, o);
        nl = a, o.target.dispatchEvent(a), nl = null;
      } else return t = wo(o), t !== null && pl(t), e.blockedOn = o, !1;
      t.shift();
    }
    return !0;
  }
  function Oc(e, t, o) {
    vi(e) && o.delete(t);
  }
  function yg() {
    hl = !1, cr !== null && vi(cr) && (cr = null), dr !== null && vi(dr) && (dr = null), fr !== null && vi(fr) && (fr = null), to.forEach(Oc), ro.forEach(Oc);
  }
  function oo(e, t) {
    e.blockedOn === t && (e.blockedOn = null, hl || (hl = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, yg)));
  }
  function io(e) {
    function t(l) {
      return oo(l, e);
    }
    if (0 < gi.length) {
      oo(gi[0], e);
      for (var o = 1; o < gi.length; o++) {
        var a = gi[o];
        a.blockedOn === e && (a.blockedOn = null);
      }
    }
    for (cr !== null && oo(cr, e), dr !== null && oo(dr, e), fr !== null && oo(fr, e), to.forEach(t), ro.forEach(t), o = 0; o < pr.length; o++) a = pr[o], a.blockedOn === e && (a.blockedOn = null);
    for (; 0 < pr.length && (o = pr[0], o.blockedOn === null); ) Mc(o), o.blockedOn === null && pr.shift();
  }
  var cn = H.ReactCurrentBatchConfig, wi = !0;
  function bg(e, t, o, a) {
    var l = Pe, u = cn.transition;
    cn.transition = null;
    try {
      Pe = 1, ml(e, t, o, a);
    } finally {
      Pe = l, cn.transition = u;
    }
  }
  function xg(e, t, o, a) {
    var l = Pe, u = cn.transition;
    cn.transition = null;
    try {
      Pe = 4, ml(e, t, o, a);
    } finally {
      Pe = l, cn.transition = u;
    }
  }
  function ml(e, t, o, a) {
    if (wi) {
      var l = gl(e, t, o, a);
      if (l === null) Il(e, t, a, yi, o), Nc(e, a);
      else if (wg(l, e, t, o, a)) a.stopPropagation();
      else if (Nc(e, a), t & 4 && -1 < vg.indexOf(e)) {
        for (; l !== null; ) {
          var u = wo(l);
          if (u !== null && $c(u), u = gl(e, t, o, a), u === null && Il(e, t, a, yi, o), u === l) break;
          l = u;
        }
        l !== null && a.stopPropagation();
      } else Il(e, t, a, null, o);
    }
  }
  var yi = null;
  function gl(e, t, o, a) {
    if (yi = null, e = ol(a), e = Or(e), e !== null) if (t = Mr(e), t === null) e = null;
    else if (o = t.tag, o === 13) {
      if (e = kc(t), e !== null) return e;
      e = null;
    } else if (o === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return yi = e, null;
  }
  function Dc(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (sg()) {
          case ul:
            return 1;
          case Pc:
            return 4;
          case di:
          case ug:
            return 16;
          case Tc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var hr = null, vl = null, bi = null;
  function jc() {
    if (bi) return bi;
    var e, t = vl, o = t.length, a, l = "value" in hr ? hr.value : hr.textContent, u = l.length;
    for (e = 0; e < o && t[e] === l[e]; e++) ;
    var m = o - e;
    for (a = 1; a <= m && t[o - a] === l[u - a]; a++) ;
    return bi = l.slice(e, 1 < a ? 1 - a : void 0);
  }
  function xi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function ki() {
    return !0;
  }
  function Uc() {
    return !1;
  }
  function mt(e) {
    function t(o, a, l, u, m) {
      this._reactName = o, this._targetInst = l, this.type = a, this.nativeEvent = u, this.target = m, this.currentTarget = null;
      for (var x in e) e.hasOwnProperty(x) && (o = e[x], this[x] = o ? o(u) : u[x]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? ki : Uc, this.isPropagationStopped = Uc, this;
    }
    return O(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = ki);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = ki);
    }, persist: function() {
    }, isPersistent: ki }), t;
  }
  var dn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, wl = mt(dn), ao = O({}, dn, { view: 0, detail: 0 }), kg = mt(ao), yl, bl, lo, _i = O({}, ao, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: kl, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== lo && (lo && e.type === "mousemove" ? (yl = e.screenX - lo.screenX, bl = e.screenY - lo.screenY) : bl = yl = 0, lo = e), yl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : bl;
  } }), Vc = mt(_i), _g = O({}, _i, { dataTransfer: 0 }), Eg = mt(_g), Sg = O({}, ao, { relatedTarget: 0 }), xl = mt(Sg), Cg = O({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Fg = mt(Cg), Pg = O({}, dn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Tg = mt(Pg), Ag = O({}, dn, { data: 0 }), Bc = mt(Ag), zg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, $g = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Ig = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Lg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ig[e]) ? !!t[e] : !1;
  }
  function kl() {
    return Lg;
  }
  var Rg = O({}, ao, { key: function(e) {
    if (e.key) {
      var t = zg[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = xi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? $g[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: kl, charCode: function(e) {
    return e.type === "keypress" ? xi(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? xi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Ng = mt(Rg), Mg = O({}, _i, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Hc = mt(Mg), Og = O({}, ao, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: kl }), Dg = mt(Og), jg = O({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ug = mt(jg), Vg = O({}, _i, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Bg = mt(Vg), Hg = [9, 13, 27, 32], _l = g && "CompositionEvent" in window, so = null;
  g && "documentMode" in document && (so = document.documentMode);
  var Wg = g && "TextEvent" in window && !so, Wc = g && (!_l || so && 8 < so && 11 >= so), Kc = " ", Yc = !1;
  function Qc(e, t) {
    switch (e) {
      case "keyup":
        return Hg.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Gc(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var fn = !1;
  function Kg(e, t) {
    switch (e) {
      case "compositionend":
        return Gc(t);
      case "keypress":
        return t.which !== 32 ? null : (Yc = !0, Kc);
      case "textInput":
        return e = t.data, e === Kc && Yc ? null : e;
      default:
        return null;
    }
  }
  function Yg(e, t) {
    if (fn) return e === "compositionend" || !_l && Qc(e, t) ? (e = jc(), bi = vl = hr = null, fn = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Wc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Qg = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Xc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Qg[e.type] : t === "textarea";
  }
  function qc(e, t, o, a) {
    vc(a), t = Pi(t, "onChange"), 0 < t.length && (o = new wl("onChange", "change", null, o, a), e.push({ event: o, listeners: t }));
  }
  var uo = null, co = null;
  function Gg(e) {
    md(e, 0);
  }
  function Ei(e) {
    var t = vn(e);
    if (li(t)) return e;
  }
  function Xg(e, t) {
    if (e === "change") return t;
  }
  var Zc = !1;
  if (g) {
    var El;
    if (g) {
      var Sl = "oninput" in document;
      if (!Sl) {
        var Jc = document.createElement("div");
        Jc.setAttribute("oninput", "return;"), Sl = typeof Jc.oninput == "function";
      }
      El = Sl;
    } else El = !1;
    Zc = El && (!document.documentMode || 9 < document.documentMode);
  }
  function ed() {
    uo && (uo.detachEvent("onpropertychange", td), co = uo = null);
  }
  function td(e) {
    if (e.propertyName === "value" && Ei(co)) {
      var t = [];
      qc(t, co, e, ol(e)), xc(Gg, t);
    }
  }
  function qg(e, t, o) {
    e === "focusin" ? (ed(), uo = t, co = o, uo.attachEvent("onpropertychange", td)) : e === "focusout" && ed();
  }
  function Zg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ei(co);
  }
  function Jg(e, t) {
    if (e === "click") return Ei(t);
  }
  function e0(e, t) {
    if (e === "input" || e === "change") return Ei(t);
  }
  function t0(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var zt = typeof Object.is == "function" ? Object.is : t0;
  function fo(e, t) {
    if (zt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var o = Object.keys(e), a = Object.keys(t);
    if (o.length !== a.length) return !1;
    for (a = 0; a < o.length; a++) {
      var l = o[a];
      if (!p.call(t, l) || !zt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function rd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function nd(e, t) {
    var o = rd(e);
    e = 0;
    for (var a; o; ) {
      if (o.nodeType === 3) {
        if (a = e + o.textContent.length, e <= t && a >= t) return { node: o, offset: t - e };
        e = a;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = rd(o);
    }
  }
  function od(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? od(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function id() {
    for (var e = window, t = on(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var o = typeof t.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o) e = t.contentWindow;
      else break;
      t = on(e.document);
    }
    return t;
  }
  function Cl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function r0(e) {
    var t = id(), o = e.focusedElem, a = e.selectionRange;
    if (t !== o && o && o.ownerDocument && od(o.ownerDocument.documentElement, o)) {
      if (a !== null && Cl(o)) {
        if (t = a.start, e = a.end, e === void 0 && (e = t), "selectionStart" in o) o.selectionStart = t, o.selectionEnd = Math.min(e, o.value.length);
        else if (e = (t = o.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = o.textContent.length, u = Math.min(a.start, l);
          a = a.end === void 0 ? u : Math.min(a.end, l), !e.extend && u > a && (l = a, a = u, u = l), l = nd(o, u);
          var m = nd(
            o,
            a
          );
          l && m && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== m.node || e.focusOffset !== m.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), u > a ? (e.addRange(t), e.extend(m.node, m.offset)) : (t.setEnd(m.node, m.offset), e.addRange(t)));
        }
      }
      for (t = [], e = o; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < t.length; o++) e = t[o], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var n0 = g && "documentMode" in document && 11 >= document.documentMode, pn = null, Fl = null, po = null, Pl = !1;
  function ad(e, t, o) {
    var a = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Pl || pn == null || pn !== on(a) || (a = pn, "selectionStart" in a && Cl(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), po && fo(po, a) || (po = a, a = Pi(Fl, "onSelect"), 0 < a.length && (t = new wl("onSelect", "select", null, t, o), e.push({ event: t, listeners: a }), t.target = pn)));
  }
  function Si(e, t) {
    var o = {};
    return o[e.toLowerCase()] = t.toLowerCase(), o["Webkit" + e] = "webkit" + t, o["Moz" + e] = "moz" + t, o;
  }
  var hn = { animationend: Si("Animation", "AnimationEnd"), animationiteration: Si("Animation", "AnimationIteration"), animationstart: Si("Animation", "AnimationStart"), transitionend: Si("Transition", "TransitionEnd") }, Tl = {}, ld = {};
  g && (ld = document.createElement("div").style, "AnimationEvent" in window || (delete hn.animationend.animation, delete hn.animationiteration.animation, delete hn.animationstart.animation), "TransitionEvent" in window || delete hn.transitionend.transition);
  function Ci(e) {
    if (Tl[e]) return Tl[e];
    if (!hn[e]) return e;
    var t = hn[e], o;
    for (o in t) if (t.hasOwnProperty(o) && o in ld) return Tl[e] = t[o];
    return e;
  }
  var sd = Ci("animationend"), ud = Ci("animationiteration"), cd = Ci("animationstart"), dd = Ci("transitionend"), fd = /* @__PURE__ */ new Map(), pd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function mr(e, t) {
    fd.set(e, t), f(t, [e]);
  }
  for (var Al = 0; Al < pd.length; Al++) {
    var zl = pd[Al], o0 = zl.toLowerCase(), i0 = zl[0].toUpperCase() + zl.slice(1);
    mr(o0, "on" + i0);
  }
  mr(sd, "onAnimationEnd"), mr(ud, "onAnimationIteration"), mr(cd, "onAnimationStart"), mr("dblclick", "onDoubleClick"), mr("focusin", "onFocus"), mr("focusout", "onBlur"), mr(dd, "onTransitionEnd"), h("onMouseEnter", ["mouseout", "mouseover"]), h("onMouseLeave", ["mouseout", "mouseover"]), h("onPointerEnter", ["pointerout", "pointerover"]), h("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ho = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), a0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));
  function hd(e, t, o) {
    var a = e.type || "unknown-event";
    e.currentTarget = o, og(a, t, void 0, e), e.currentTarget = null;
  }
  function md(e, t) {
    t = (t & 4) !== 0;
    for (var o = 0; o < e.length; o++) {
      var a = e[o], l = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t) for (var m = a.length - 1; 0 <= m; m--) {
          var x = a[m], E = x.instance, z = x.currentTarget;
          if (x = x.listener, E !== u && l.isPropagationStopped()) break e;
          hd(l, x, z), u = E;
        }
        else for (m = 0; m < a.length; m++) {
          if (x = a[m], E = x.instance, z = x.currentTarget, x = x.listener, E !== u && l.isPropagationStopped()) break e;
          hd(l, x, z), u = E;
        }
      }
    }
    if (ci) throw e = sl, ci = !1, sl = null, e;
  }
  function $e(e, t) {
    var o = t[Dl];
    o === void 0 && (o = t[Dl] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    o.has(a) || (gd(t, e, 2, !1), o.add(a));
  }
  function $l(e, t, o) {
    var a = 0;
    t && (a |= 4), gd(o, e, a, t);
  }
  var Fi = "_reactListening" + Math.random().toString(36).slice(2);
  function mo(e) {
    if (!e[Fi]) {
      e[Fi] = !0, s.forEach(function(o) {
        o !== "selectionchange" && (a0.has(o) || $l(o, !1, e), $l(o, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Fi] || (t[Fi] = !0, $l("selectionchange", !1, t));
    }
  }
  function gd(e, t, o, a) {
    switch (Dc(t)) {
      case 1:
        var l = bg;
        break;
      case 4:
        l = xg;
        break;
      default:
        l = ml;
    }
    o = l.bind(null, t, o, e), l = void 0, !ll || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), a ? l !== void 0 ? e.addEventListener(t, o, { capture: !0, passive: l }) : e.addEventListener(t, o, !0) : l !== void 0 ? e.addEventListener(t, o, { passive: l }) : e.addEventListener(t, o, !1);
  }
  function Il(e, t, o, a, l) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null) e: for (; ; ) {
      if (a === null) return;
      var m = a.tag;
      if (m === 3 || m === 4) {
        var x = a.stateNode.containerInfo;
        if (x === l || x.nodeType === 8 && x.parentNode === l) break;
        if (m === 4) for (m = a.return; m !== null; ) {
          var E = m.tag;
          if ((E === 3 || E === 4) && (E = m.stateNode.containerInfo, E === l || E.nodeType === 8 && E.parentNode === l)) return;
          m = m.return;
        }
        for (; x !== null; ) {
          if (m = Or(x), m === null) return;
          if (E = m.tag, E === 5 || E === 6) {
            a = u = m;
            continue e;
          }
          x = x.parentNode;
        }
      }
      a = a.return;
    }
    xc(function() {
      var z = u, U = ol(o), V = [];
      e: {
        var j = fd.get(e);
        if (j !== void 0) {
          var X = wl, Z = e;
          switch (e) {
            case "keypress":
              if (xi(o) === 0) break e;
            case "keydown":
            case "keyup":
              X = Ng;
              break;
            case "focusin":
              Z = "focus", X = xl;
              break;
            case "focusout":
              Z = "blur", X = xl;
              break;
            case "beforeblur":
            case "afterblur":
              X = xl;
              break;
            case "click":
              if (o.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              X = Vc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              X = Eg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              X = Dg;
              break;
            case sd:
            case ud:
            case cd:
              X = Fg;
              break;
            case dd:
              X = Ug;
              break;
            case "scroll":
              X = kg;
              break;
            case "wheel":
              X = Bg;
              break;
            case "copy":
            case "cut":
            case "paste":
              X = Tg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              X = Hc;
          }
          var J = (t & 4) !== 0, Ue = !J && e === "scroll", P = J ? j !== null ? j + "Capture" : null : j;
          J = [];
          for (var S = z, T; S !== null; ) {
            T = S;
            var W = T.stateNode;
            if (T.tag === 5 && W !== null && (T = W, P !== null && (W = Xn(S, P), W != null && J.push(go(S, W, T)))), Ue) break;
            S = S.return;
          }
          0 < J.length && (j = new X(j, Z, null, o, U), V.push({ event: j, listeners: J }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (j = e === "mouseover" || e === "pointerover", X = e === "mouseout" || e === "pointerout", j && o !== nl && (Z = o.relatedTarget || o.fromElement) && (Or(Z) || Z[Xt])) break e;
          if ((X || j) && (j = U.window === U ? U : (j = U.ownerDocument) ? j.defaultView || j.parentWindow : window, X ? (Z = o.relatedTarget || o.toElement, X = z, Z = Z ? Or(Z) : null, Z !== null && (Ue = Mr(Z), Z !== Ue || Z.tag !== 5 && Z.tag !== 6) && (Z = null)) : (X = null, Z = z), X !== Z)) {
            if (J = Vc, W = "onMouseLeave", P = "onMouseEnter", S = "mouse", (e === "pointerout" || e === "pointerover") && (J = Hc, W = "onPointerLeave", P = "onPointerEnter", S = "pointer"), Ue = X == null ? j : vn(X), T = Z == null ? j : vn(Z), j = new J(W, S + "leave", X, o, U), j.target = Ue, j.relatedTarget = T, W = null, Or(U) === z && (J = new J(P, S + "enter", Z, o, U), J.target = T, J.relatedTarget = Ue, W = J), Ue = W, X && Z) t: {
              for (J = X, P = Z, S = 0, T = J; T; T = mn(T)) S++;
              for (T = 0, W = P; W; W = mn(W)) T++;
              for (; 0 < S - T; ) J = mn(J), S--;
              for (; 0 < T - S; ) P = mn(P), T--;
              for (; S--; ) {
                if (J === P || P !== null && J === P.alternate) break t;
                J = mn(J), P = mn(P);
              }
              J = null;
            }
            else J = null;
            X !== null && vd(V, j, X, J, !1), Z !== null && Ue !== null && vd(V, Ue, Z, J, !0);
          }
        }
        e: {
          if (j = z ? vn(z) : window, X = j.nodeName && j.nodeName.toLowerCase(), X === "select" || X === "input" && j.type === "file") var ee = Xg;
          else if (Xc(j)) if (Zc) ee = e0;
          else {
            ee = Zg;
            var le = qg;
          }
          else (X = j.nodeName) && X.toLowerCase() === "input" && (j.type === "checkbox" || j.type === "radio") && (ee = Jg);
          if (ee && (ee = ee(e, z))) {
            qc(V, ee, o, U);
            break e;
          }
          le && le(e, j, z), e === "focusout" && (le = j._wrapperState) && le.controlled && j.type === "number" && Nr(j, "number", j.value);
        }
        switch (le = z ? vn(z) : window, e) {
          case "focusin":
            (Xc(le) || le.contentEditable === "true") && (pn = le, Fl = z, po = null);
            break;
          case "focusout":
            po = Fl = pn = null;
            break;
          case "mousedown":
            Pl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Pl = !1, ad(V, o, U);
            break;
          case "selectionchange":
            if (n0) break;
          case "keydown":
          case "keyup":
            ad(V, o, U);
        }
        var se;
        if (_l) e: {
          switch (e) {
            case "compositionstart":
              var ue = "onCompositionStart";
              break e;
            case "compositionend":
              ue = "onCompositionEnd";
              break e;
            case "compositionupdate":
              ue = "onCompositionUpdate";
              break e;
          }
          ue = void 0;
        }
        else fn ? Qc(e, o) && (ue = "onCompositionEnd") : e === "keydown" && o.keyCode === 229 && (ue = "onCompositionStart");
        ue && (Wc && o.locale !== "ko" && (fn || ue !== "onCompositionStart" ? ue === "onCompositionEnd" && fn && (se = jc()) : (hr = U, vl = "value" in hr ? hr.value : hr.textContent, fn = !0)), le = Pi(z, ue), 0 < le.length && (ue = new Bc(ue, e, null, o, U), V.push({ event: ue, listeners: le }), se ? ue.data = se : (se = Gc(o), se !== null && (ue.data = se)))), (se = Wg ? Kg(e, o) : Yg(e, o)) && (z = Pi(z, "onBeforeInput"), 0 < z.length && (U = new Bc("onBeforeInput", "beforeinput", null, o, U), V.push({ event: U, listeners: z }), U.data = se));
      }
      md(V, t);
    });
  }
  function go(e, t, o) {
    return { instance: e, listener: t, currentTarget: o };
  }
  function Pi(e, t) {
    for (var o = t + "Capture", a = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = Xn(e, o), u != null && a.unshift(go(e, u, l)), u = Xn(e, t), u != null && a.push(go(e, u, l))), e = e.return;
    }
    return a;
  }
  function mn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function vd(e, t, o, a, l) {
    for (var u = t._reactName, m = []; o !== null && o !== a; ) {
      var x = o, E = x.alternate, z = x.stateNode;
      if (E !== null && E === a) break;
      x.tag === 5 && z !== null && (x = z, l ? (E = Xn(o, u), E != null && m.unshift(go(o, E, x))) : l || (E = Xn(o, u), E != null && m.push(go(o, E, x)))), o = o.return;
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var l0 = /\r\n?/g, s0 = /\u0000|\uFFFD/g;
  function wd(e) {
    return (typeof e == "string" ? e : "" + e).replace(l0, `
`).replace(s0, "");
  }
  function Ti(e, t, o) {
    if (t = wd(t), wd(e) !== t && o) throw Error(i(425));
  }
  function Ai() {
  }
  var Ll = null, Rl = null;
  function Nl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ml = typeof setTimeout == "function" ? setTimeout : void 0, u0 = typeof clearTimeout == "function" ? clearTimeout : void 0, yd = typeof Promise == "function" ? Promise : void 0, c0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof yd < "u" ? function(e) {
    return yd.resolve(null).then(e).catch(d0);
  } : Ml;
  function d0(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ol(e, t) {
    var o = t, a = 0;
    do {
      var l = o.nextSibling;
      if (e.removeChild(o), l && l.nodeType === 8) if (o = l.data, o === "/$") {
        if (a === 0) {
          e.removeChild(l), io(t);
          return;
        }
        a--;
      } else o !== "$" && o !== "$?" && o !== "$!" || a++;
      o = l;
    } while (o);
    io(t);
  }
  function gr(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function bd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var o = e.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (t === 0) return e;
          t--;
        } else o === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var gn = Math.random().toString(36).slice(2), Bt = "__reactFiber$" + gn, vo = "__reactProps$" + gn, Xt = "__reactContainer$" + gn, Dl = "__reactEvents$" + gn, f0 = "__reactListeners$" + gn, p0 = "__reactHandles$" + gn;
  function Or(e) {
    var t = e[Bt];
    if (t) return t;
    for (var o = e.parentNode; o; ) {
      if (t = o[Xt] || o[Bt]) {
        if (o = t.alternate, t.child !== null || o !== null && o.child !== null) for (e = bd(e); e !== null; ) {
          if (o = e[Bt]) return o;
          e = bd(e);
        }
        return t;
      }
      e = o, o = e.parentNode;
    }
    return null;
  }
  function wo(e) {
    return e = e[Bt] || e[Xt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function vn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function zi(e) {
    return e[vo] || null;
  }
  var jl = [], wn = -1;
  function vr(e) {
    return { current: e };
  }
  function Ie(e) {
    0 > wn || (e.current = jl[wn], jl[wn] = null, wn--);
  }
  function ze(e, t) {
    wn++, jl[wn] = e.current, e.current = t;
  }
  var wr = {}, Je = vr(wr), at = vr(!1), Dr = wr;
  function yn(e, t) {
    var o = e.type.contextTypes;
    if (!o) return wr;
    var a = e.stateNode;
    if (a && a.__reactInternalMemoizedUnmaskedChildContext === t) return a.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in o) l[u] = t[u];
    return a && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function lt(e) {
    return e = e.childContextTypes, e != null;
  }
  function $i() {
    Ie(at), Ie(Je);
  }
  function xd(e, t, o) {
    if (Je.current !== wr) throw Error(i(168));
    ze(Je, t), ze(at, o);
  }
  function kd(e, t, o) {
    var a = e.stateNode;
    if (t = t.childContextTypes, typeof a.getChildContext != "function") return o;
    a = a.getChildContext();
    for (var l in a) if (!(l in t)) throw Error(i(108, Fe(e) || "Unknown", l));
    return O({}, o, a);
  }
  function Ii(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || wr, Dr = Je.current, ze(Je, e), ze(at, at.current), !0;
  }
  function _d(e, t, o) {
    var a = e.stateNode;
    if (!a) throw Error(i(169));
    o ? (e = kd(e, t, Dr), a.__reactInternalMemoizedMergedChildContext = e, Ie(at), Ie(Je), ze(Je, e)) : Ie(at), ze(at, o);
  }
  var qt = null, Li = !1, Ul = !1;
  function Ed(e) {
    qt === null ? qt = [e] : qt.push(e);
  }
  function h0(e) {
    Li = !0, Ed(e);
  }
  function yr() {
    if (!Ul && qt !== null) {
      Ul = !0;
      var e = 0, t = Pe;
      try {
        var o = qt;
        for (Pe = 1; e < o.length; e++) {
          var a = o[e];
          do
            a = a(!0);
          while (a !== null);
        }
        qt = null, Li = !1;
      } catch (l) {
        throw qt !== null && (qt = qt.slice(e + 1)), Cc(ul, yr), l;
      } finally {
        Pe = t, Ul = !1;
      }
    }
    return null;
  }
  var bn = [], xn = 0, Ri = null, Ni = 0, bt = [], xt = 0, jr = null, Zt = 1, Jt = "";
  function Ur(e, t) {
    bn[xn++] = Ni, bn[xn++] = Ri, Ri = e, Ni = t;
  }
  function Sd(e, t, o) {
    bt[xt++] = Zt, bt[xt++] = Jt, bt[xt++] = jr, jr = e;
    var a = Zt;
    e = Jt;
    var l = 32 - At(a) - 1;
    a &= ~(1 << l), o += 1;
    var u = 32 - At(t) + l;
    if (30 < u) {
      var m = l - l % 5;
      u = (a & (1 << m) - 1).toString(32), a >>= m, l -= m, Zt = 1 << 32 - At(t) + l | o << l | a, Jt = u + e;
    } else Zt = 1 << u | o << l | a, Jt = e;
  }
  function Vl(e) {
    e.return !== null && (Ur(e, 1), Sd(e, 1, 0));
  }
  function Bl(e) {
    for (; e === Ri; ) Ri = bn[--xn], bn[xn] = null, Ni = bn[--xn], bn[xn] = null;
    for (; e === jr; ) jr = bt[--xt], bt[xt] = null, Jt = bt[--xt], bt[xt] = null, Zt = bt[--xt], bt[xt] = null;
  }
  var gt = null, vt = null, Re = !1, $t = null;
  function Cd(e, t) {
    var o = St(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = t, o.return = e, t = e.deletions, t === null ? (e.deletions = [o], e.flags |= 16) : t.push(o);
  }
  function Fd(e, t) {
    switch (e.tag) {
      case 5:
        var o = e.type;
        return t = t.nodeType !== 1 || o.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, gt = e, vt = gr(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, gt = e, vt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (o = jr !== null ? { id: Zt, overflow: Jt } : null, e.memoizedState = { dehydrated: t, treeContext: o, retryLane: 1073741824 }, o = St(18, null, null, 0), o.stateNode = t, o.return = e, e.child = o, gt = e, vt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Hl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Wl(e) {
    if (Re) {
      var t = vt;
      if (t) {
        var o = t;
        if (!Fd(e, t)) {
          if (Hl(e)) throw Error(i(418));
          t = gr(o.nextSibling);
          var a = gt;
          t && Fd(e, t) ? Cd(a, o) : (e.flags = e.flags & -4097 | 2, Re = !1, gt = e);
        }
      } else {
        if (Hl(e)) throw Error(i(418));
        e.flags = e.flags & -4097 | 2, Re = !1, gt = e;
      }
    }
  }
  function Pd(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    gt = e;
  }
  function Mi(e) {
    if (e !== gt) return !1;
    if (!Re) return Pd(e), Re = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Nl(e.type, e.memoizedProps)), t && (t = vt)) {
      if (Hl(e)) throw Td(), Error(i(418));
      for (; t; ) Cd(e, t), t = gr(t.nextSibling);
    }
    if (Pd(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var o = e.data;
            if (o === "/$") {
              if (t === 0) {
                vt = gr(e.nextSibling);
                break e;
              }
              t--;
            } else o !== "$" && o !== "$!" && o !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        vt = null;
      }
    } else vt = gt ? gr(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Td() {
    for (var e = vt; e; ) e = gr(e.nextSibling);
  }
  function kn() {
    vt = gt = null, Re = !1;
  }
  function Kl(e) {
    $t === null ? $t = [e] : $t.push(e);
  }
  var m0 = H.ReactCurrentBatchConfig;
  function yo(e, t, o) {
    if (e = o.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1) throw Error(i(309));
          var a = o.stateNode;
        }
        if (!a) throw Error(i(147, e));
        var l = a, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(m) {
          var x = l.refs;
          m === null ? delete x[u] : x[u] = m;
        }, t._stringRef = u, t);
      }
      if (typeof e != "string") throw Error(i(284));
      if (!o._owner) throw Error(i(290, e));
    }
    return e;
  }
  function Oi(e, t) {
    throw e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Ad(e) {
    var t = e._init;
    return t(e._payload);
  }
  function zd(e) {
    function t(P, S) {
      if (e) {
        var T = P.deletions;
        T === null ? (P.deletions = [S], P.flags |= 16) : T.push(S);
      }
    }
    function o(P, S) {
      if (!e) return null;
      for (; S !== null; ) t(P, S), S = S.sibling;
      return null;
    }
    function a(P, S) {
      for (P = /* @__PURE__ */ new Map(); S !== null; ) S.key !== null ? P.set(S.key, S) : P.set(S.index, S), S = S.sibling;
      return P;
    }
    function l(P, S) {
      return P = Fr(P, S), P.index = 0, P.sibling = null, P;
    }
    function u(P, S, T) {
      return P.index = T, e ? (T = P.alternate, T !== null ? (T = T.index, T < S ? (P.flags |= 2, S) : T) : (P.flags |= 2, S)) : (P.flags |= 1048576, S);
    }
    function m(P) {
      return e && P.alternate === null && (P.flags |= 2), P;
    }
    function x(P, S, T, W) {
      return S === null || S.tag !== 6 ? (S = Ms(T, P.mode, W), S.return = P, S) : (S = l(S, T), S.return = P, S);
    }
    function E(P, S, T, W) {
      var ee = T.type;
      return ee === oe ? U(P, S, T.props.children, W, T.key) : S !== null && (S.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === G && Ad(ee) === S.type) ? (W = l(S, T.props), W.ref = yo(P, S, T), W.return = P, W) : (W = sa(T.type, T.key, T.props, null, P.mode, W), W.ref = yo(P, S, T), W.return = P, W);
    }
    function z(P, S, T, W) {
      return S === null || S.tag !== 4 || S.stateNode.containerInfo !== T.containerInfo || S.stateNode.implementation !== T.implementation ? (S = Os(T, P.mode, W), S.return = P, S) : (S = l(S, T.children || []), S.return = P, S);
    }
    function U(P, S, T, W, ee) {
      return S === null || S.tag !== 7 ? (S = Gr(T, P.mode, W, ee), S.return = P, S) : (S = l(S, T), S.return = P, S);
    }
    function V(P, S, T) {
      if (typeof S == "string" && S !== "" || typeof S == "number") return S = Ms("" + S, P.mode, T), S.return = P, S;
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case ne:
            return T = sa(S.type, S.key, S.props, null, P.mode, T), T.ref = yo(P, null, S), T.return = P, T;
          case ae:
            return S = Os(S, P.mode, T), S.return = P, S;
          case G:
            var W = S._init;
            return V(P, W(S._payload), T);
        }
        if (Yn(S) || $(S)) return S = Gr(S, P.mode, T, null), S.return = P, S;
        Oi(P, S);
      }
      return null;
    }
    function j(P, S, T, W) {
      var ee = S !== null ? S.key : null;
      if (typeof T == "string" && T !== "" || typeof T == "number") return ee !== null ? null : x(P, S, "" + T, W);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case ne:
            return T.key === ee ? E(P, S, T, W) : null;
          case ae:
            return T.key === ee ? z(P, S, T, W) : null;
          case G:
            return ee = T._init, j(
              P,
              S,
              ee(T._payload),
              W
            );
        }
        if (Yn(T) || $(T)) return ee !== null ? null : U(P, S, T, W, null);
        Oi(P, T);
      }
      return null;
    }
    function X(P, S, T, W, ee) {
      if (typeof W == "string" && W !== "" || typeof W == "number") return P = P.get(T) || null, x(S, P, "" + W, ee);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case ne:
            return P = P.get(W.key === null ? T : W.key) || null, E(S, P, W, ee);
          case ae:
            return P = P.get(W.key === null ? T : W.key) || null, z(S, P, W, ee);
          case G:
            var le = W._init;
            return X(P, S, T, le(W._payload), ee);
        }
        if (Yn(W) || $(W)) return P = P.get(T) || null, U(S, P, W, ee, null);
        Oi(S, W);
      }
      return null;
    }
    function Z(P, S, T, W) {
      for (var ee = null, le = null, se = S, ue = S = 0, Ye = null; se !== null && ue < T.length; ue++) {
        se.index > ue ? (Ye = se, se = null) : Ye = se.sibling;
        var Ee = j(P, se, T[ue], W);
        if (Ee === null) {
          se === null && (se = Ye);
          break;
        }
        e && se && Ee.alternate === null && t(P, se), S = u(Ee, S, ue), le === null ? ee = Ee : le.sibling = Ee, le = Ee, se = Ye;
      }
      if (ue === T.length) return o(P, se), Re && Ur(P, ue), ee;
      if (se === null) {
        for (; ue < T.length; ue++) se = V(P, T[ue], W), se !== null && (S = u(se, S, ue), le === null ? ee = se : le.sibling = se, le = se);
        return Re && Ur(P, ue), ee;
      }
      for (se = a(P, se); ue < T.length; ue++) Ye = X(se, P, ue, T[ue], W), Ye !== null && (e && Ye.alternate !== null && se.delete(Ye.key === null ? ue : Ye.key), S = u(Ye, S, ue), le === null ? ee = Ye : le.sibling = Ye, le = Ye);
      return e && se.forEach(function(Pr) {
        return t(P, Pr);
      }), Re && Ur(P, ue), ee;
    }
    function J(P, S, T, W) {
      var ee = $(T);
      if (typeof ee != "function") throw Error(i(150));
      if (T = ee.call(T), T == null) throw Error(i(151));
      for (var le = ee = null, se = S, ue = S = 0, Ye = null, Ee = T.next(); se !== null && !Ee.done; ue++, Ee = T.next()) {
        se.index > ue ? (Ye = se, se = null) : Ye = se.sibling;
        var Pr = j(P, se, Ee.value, W);
        if (Pr === null) {
          se === null && (se = Ye);
          break;
        }
        e && se && Pr.alternate === null && t(P, se), S = u(Pr, S, ue), le === null ? ee = Pr : le.sibling = Pr, le = Pr, se = Ye;
      }
      if (Ee.done) return o(
        P,
        se
      ), Re && Ur(P, ue), ee;
      if (se === null) {
        for (; !Ee.done; ue++, Ee = T.next()) Ee = V(P, Ee.value, W), Ee !== null && (S = u(Ee, S, ue), le === null ? ee = Ee : le.sibling = Ee, le = Ee);
        return Re && Ur(P, ue), ee;
      }
      for (se = a(P, se); !Ee.done; ue++, Ee = T.next()) Ee = X(se, P, ue, Ee.value, W), Ee !== null && (e && Ee.alternate !== null && se.delete(Ee.key === null ? ue : Ee.key), S = u(Ee, S, ue), le === null ? ee = Ee : le.sibling = Ee, le = Ee);
      return e && se.forEach(function(Q0) {
        return t(P, Q0);
      }), Re && Ur(P, ue), ee;
    }
    function Ue(P, S, T, W) {
      if (typeof T == "object" && T !== null && T.type === oe && T.key === null && (T = T.props.children), typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case ne:
            e: {
              for (var ee = T.key, le = S; le !== null; ) {
                if (le.key === ee) {
                  if (ee = T.type, ee === oe) {
                    if (le.tag === 7) {
                      o(P, le.sibling), S = l(le, T.props.children), S.return = P, P = S;
                      break e;
                    }
                  } else if (le.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === G && Ad(ee) === le.type) {
                    o(P, le.sibling), S = l(le, T.props), S.ref = yo(P, le, T), S.return = P, P = S;
                    break e;
                  }
                  o(P, le);
                  break;
                } else t(P, le);
                le = le.sibling;
              }
              T.type === oe ? (S = Gr(T.props.children, P.mode, W, T.key), S.return = P, P = S) : (W = sa(T.type, T.key, T.props, null, P.mode, W), W.ref = yo(P, S, T), W.return = P, P = W);
            }
            return m(P);
          case ae:
            e: {
              for (le = T.key; S !== null; ) {
                if (S.key === le) if (S.tag === 4 && S.stateNode.containerInfo === T.containerInfo && S.stateNode.implementation === T.implementation) {
                  o(P, S.sibling), S = l(S, T.children || []), S.return = P, P = S;
                  break e;
                } else {
                  o(P, S);
                  break;
                }
                else t(P, S);
                S = S.sibling;
              }
              S = Os(T, P.mode, W), S.return = P, P = S;
            }
            return m(P);
          case G:
            return le = T._init, Ue(P, S, le(T._payload), W);
        }
        if (Yn(T)) return Z(P, S, T, W);
        if ($(T)) return J(P, S, T, W);
        Oi(P, T);
      }
      return typeof T == "string" && T !== "" || typeof T == "number" ? (T = "" + T, S !== null && S.tag === 6 ? (o(P, S.sibling), S = l(S, T), S.return = P, P = S) : (o(P, S), S = Ms(T, P.mode, W), S.return = P, P = S), m(P)) : o(P, S);
    }
    return Ue;
  }
  var _n = zd(!0), $d = zd(!1), Di = vr(null), ji = null, En = null, Yl = null;
  function Ql() {
    Yl = En = ji = null;
  }
  function Gl(e) {
    var t = Di.current;
    Ie(Di), e._currentValue = t;
  }
  function Xl(e, t, o) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === o) break;
      e = e.return;
    }
  }
  function Sn(e, t) {
    ji = e, Yl = En = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (st = !0), e.firstContext = null);
  }
  function kt(e) {
    var t = e._currentValue;
    if (Yl !== e) if (e = { context: e, memoizedValue: t, next: null }, En === null) {
      if (ji === null) throw Error(i(308));
      En = e, ji.dependencies = { lanes: 0, firstContext: e };
    } else En = En.next = e;
    return t;
  }
  var Vr = null;
  function ql(e) {
    Vr === null ? Vr = [e] : Vr.push(e);
  }
  function Id(e, t, o, a) {
    var l = t.interleaved;
    return l === null ? (o.next = o, ql(t)) : (o.next = l.next, l.next = o), t.interleaved = o, er(e, a);
  }
  function er(e, t) {
    e.lanes |= t;
    var o = e.alternate;
    for (o !== null && (o.lanes |= t), o = e, e = e.return; e !== null; ) e.childLanes |= t, o = e.alternate, o !== null && (o.childLanes |= t), o = e, e = e.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var br = !1;
  function Zl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Ld(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function tr(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function xr(e, t, o) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (_e & 2) !== 0) {
      var l = a.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), a.pending = t, er(e, o);
    }
    return l = a.interleaved, l === null ? (t.next = t, ql(a)) : (t.next = l.next, l.next = t), a.interleaved = t, er(e, o);
  }
  function Ui(e, t, o) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (o & 4194240) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, o |= a, t.lanes = o, fl(e, o);
    }
  }
  function Rd(e, t) {
    var o = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, o === a)) {
      var l = null, u = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var m = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          u === null ? l = u = m : u = u.next = m, o = o.next;
        } while (o !== null);
        u === null ? l = u = t : u = u.next = t;
      } else l = u = t;
      o = { baseState: a.baseState, firstBaseUpdate: l, lastBaseUpdate: u, shared: a.shared, effects: a.effects }, e.updateQueue = o;
      return;
    }
    e = o.lastBaseUpdate, e === null ? o.firstBaseUpdate = t : e.next = t, o.lastBaseUpdate = t;
  }
  function Vi(e, t, o, a) {
    var l = e.updateQueue;
    br = !1;
    var u = l.firstBaseUpdate, m = l.lastBaseUpdate, x = l.shared.pending;
    if (x !== null) {
      l.shared.pending = null;
      var E = x, z = E.next;
      E.next = null, m === null ? u = z : m.next = z, m = E;
      var U = e.alternate;
      U !== null && (U = U.updateQueue, x = U.lastBaseUpdate, x !== m && (x === null ? U.firstBaseUpdate = z : x.next = z, U.lastBaseUpdate = E));
    }
    if (u !== null) {
      var V = l.baseState;
      m = 0, U = z = E = null, x = u;
      do {
        var j = x.lane, X = x.eventTime;
        if ((a & j) === j) {
          U !== null && (U = U.next = {
            eventTime: X,
            lane: 0,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          });
          e: {
            var Z = e, J = x;
            switch (j = t, X = o, J.tag) {
              case 1:
                if (Z = J.payload, typeof Z == "function") {
                  V = Z.call(X, V, j);
                  break e;
                }
                V = Z;
                break e;
              case 3:
                Z.flags = Z.flags & -65537 | 128;
              case 0:
                if (Z = J.payload, j = typeof Z == "function" ? Z.call(X, V, j) : Z, j == null) break e;
                V = O({}, V, j);
                break e;
              case 2:
                br = !0;
            }
          }
          x.callback !== null && x.lane !== 0 && (e.flags |= 64, j = l.effects, j === null ? l.effects = [x] : j.push(x));
        } else X = { eventTime: X, lane: j, tag: x.tag, payload: x.payload, callback: x.callback, next: null }, U === null ? (z = U = X, E = V) : U = U.next = X, m |= j;
        if (x = x.next, x === null) {
          if (x = l.shared.pending, x === null) break;
          j = x, x = j.next, j.next = null, l.lastBaseUpdate = j, l.shared.pending = null;
        }
      } while (!0);
      if (U === null && (E = V), l.baseState = E, l.firstBaseUpdate = z, l.lastBaseUpdate = U, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          m |= l.lane, l = l.next;
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      Wr |= m, e.lanes = m, e.memoizedState = V;
    }
  }
  function Nd(e, t, o) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var a = e[t], l = a.callback;
      if (l !== null) {
        if (a.callback = null, a = o, typeof l != "function") throw Error(i(191, l));
        l.call(a);
      }
    }
  }
  var bo = {}, Ht = vr(bo), xo = vr(bo), ko = vr(bo);
  function Br(e) {
    if (e === bo) throw Error(i(174));
    return e;
  }
  function Jl(e, t) {
    switch (ze(ko, t), ze(xo, e), ze(Ht, bo), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : el(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = el(t, e);
    }
    Ie(Ht), ze(Ht, t);
  }
  function Cn() {
    Ie(Ht), Ie(xo), Ie(ko);
  }
  function Md(e) {
    Br(ko.current);
    var t = Br(Ht.current), o = el(t, e.type);
    t !== o && (ze(xo, e), ze(Ht, o));
  }
  function es(e) {
    xo.current === e && (Ie(Ht), Ie(xo));
  }
  var Ne = vr(0);
  function Bi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var o = t.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var ts = [];
  function rs() {
    for (var e = 0; e < ts.length; e++) ts[e]._workInProgressVersionPrimary = null;
    ts.length = 0;
  }
  var Hi = H.ReactCurrentDispatcher, ns = H.ReactCurrentBatchConfig, Hr = 0, Me = null, Be = null, We = null, Wi = !1, _o = !1, Eo = 0, g0 = 0;
  function et() {
    throw Error(i(321));
  }
  function os(e, t) {
    if (t === null) return !1;
    for (var o = 0; o < t.length && o < e.length; o++) if (!zt(e[o], t[o])) return !1;
    return !0;
  }
  function is(e, t, o, a, l, u) {
    if (Hr = u, Me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Hi.current = e === null || e.memoizedState === null ? b0 : x0, e = o(a, l), _o) {
      u = 0;
      do {
        if (_o = !1, Eo = 0, 25 <= u) throw Error(i(301));
        u += 1, We = Be = null, t.updateQueue = null, Hi.current = k0, e = o(a, l);
      } while (_o);
    }
    if (Hi.current = Qi, t = Be !== null && Be.next !== null, Hr = 0, We = Be = Me = null, Wi = !1, t) throw Error(i(300));
    return e;
  }
  function as() {
    var e = Eo !== 0;
    return Eo = 0, e;
  }
  function Wt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return We === null ? Me.memoizedState = We = e : We = We.next = e, We;
  }
  function _t() {
    if (Be === null) {
      var e = Me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Be.next;
    var t = We === null ? Me.memoizedState : We.next;
    if (t !== null) We = t, Be = e;
    else {
      if (e === null) throw Error(i(310));
      Be = e, e = { memoizedState: Be.memoizedState, baseState: Be.baseState, baseQueue: Be.baseQueue, queue: Be.queue, next: null }, We === null ? Me.memoizedState = We = e : We = We.next = e;
    }
    return We;
  }
  function So(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ls(e) {
    var t = _t(), o = t.queue;
    if (o === null) throw Error(i(311));
    o.lastRenderedReducer = e;
    var a = Be, l = a.baseQueue, u = o.pending;
    if (u !== null) {
      if (l !== null) {
        var m = l.next;
        l.next = u.next, u.next = m;
      }
      a.baseQueue = l = u, o.pending = null;
    }
    if (l !== null) {
      u = l.next, a = a.baseState;
      var x = m = null, E = null, z = u;
      do {
        var U = z.lane;
        if ((Hr & U) === U) E !== null && (E = E.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), a = z.hasEagerState ? z.eagerState : e(a, z.action);
        else {
          var V = {
            lane: U,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          };
          E === null ? (x = E = V, m = a) : E = E.next = V, Me.lanes |= U, Wr |= U;
        }
        z = z.next;
      } while (z !== null && z !== u);
      E === null ? m = a : E.next = x, zt(a, t.memoizedState) || (st = !0), t.memoizedState = a, t.baseState = m, t.baseQueue = E, o.lastRenderedState = a;
    }
    if (e = o.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, Me.lanes |= u, Wr |= u, l = l.next;
      while (l !== e);
    } else l === null && (o.lanes = 0);
    return [t.memoizedState, o.dispatch];
  }
  function ss(e) {
    var t = _t(), o = t.queue;
    if (o === null) throw Error(i(311));
    o.lastRenderedReducer = e;
    var a = o.dispatch, l = o.pending, u = t.memoizedState;
    if (l !== null) {
      o.pending = null;
      var m = l = l.next;
      do
        u = e(u, m.action), m = m.next;
      while (m !== l);
      zt(u, t.memoizedState) || (st = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), o.lastRenderedState = u;
    }
    return [u, a];
  }
  function Od() {
  }
  function Dd(e, t) {
    var o = Me, a = _t(), l = t(), u = !zt(a.memoizedState, l);
    if (u && (a.memoizedState = l, st = !0), a = a.queue, us(Vd.bind(null, o, a, e), [e]), a.getSnapshot !== t || u || We !== null && We.memoizedState.tag & 1) {
      if (o.flags |= 2048, Co(9, Ud.bind(null, o, a, l, t), void 0, null), Ke === null) throw Error(i(349));
      (Hr & 30) !== 0 || jd(o, t, l);
    }
    return l;
  }
  function jd(e, t, o) {
    e.flags |= 16384, e = { getSnapshot: t, value: o }, t = Me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Me.updateQueue = t, t.stores = [e]) : (o = t.stores, o === null ? t.stores = [e] : o.push(e));
  }
  function Ud(e, t, o, a) {
    t.value = o, t.getSnapshot = a, Bd(t) && Hd(e);
  }
  function Vd(e, t, o) {
    return o(function() {
      Bd(t) && Hd(e);
    });
  }
  function Bd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var o = t();
      return !zt(e, o);
    } catch {
      return !0;
    }
  }
  function Hd(e) {
    var t = er(e, 1);
    t !== null && Nt(t, e, 1, -1);
  }
  function Wd(e) {
    var t = Wt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: So, lastRenderedState: e }, t.queue = e, e = e.dispatch = y0.bind(null, Me, e), [t.memoizedState, e];
  }
  function Co(e, t, o, a) {
    return e = { tag: e, create: t, destroy: o, deps: a, next: null }, t = Me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Me.updateQueue = t, t.lastEffect = e.next = e) : (o = t.lastEffect, o === null ? t.lastEffect = e.next = e : (a = o.next, o.next = e, e.next = a, t.lastEffect = e)), e;
  }
  function Kd() {
    return _t().memoizedState;
  }
  function Ki(e, t, o, a) {
    var l = Wt();
    Me.flags |= e, l.memoizedState = Co(1 | t, o, void 0, a === void 0 ? null : a);
  }
  function Yi(e, t, o, a) {
    var l = _t();
    a = a === void 0 ? null : a;
    var u = void 0;
    if (Be !== null) {
      var m = Be.memoizedState;
      if (u = m.destroy, a !== null && os(a, m.deps)) {
        l.memoizedState = Co(t, o, u, a);
        return;
      }
    }
    Me.flags |= e, l.memoizedState = Co(1 | t, o, u, a);
  }
  function Yd(e, t) {
    return Ki(8390656, 8, e, t);
  }
  function us(e, t) {
    return Yi(2048, 8, e, t);
  }
  function Qd(e, t) {
    return Yi(4, 2, e, t);
  }
  function Gd(e, t) {
    return Yi(4, 4, e, t);
  }
  function Xd(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function qd(e, t, o) {
    return o = o != null ? o.concat([e]) : null, Yi(4, 4, Xd.bind(null, t, e), o);
  }
  function cs() {
  }
  function Zd(e, t) {
    var o = _t();
    t = t === void 0 ? null : t;
    var a = o.memoizedState;
    return a !== null && t !== null && os(t, a[1]) ? a[0] : (o.memoizedState = [e, t], e);
  }
  function Jd(e, t) {
    var o = _t();
    t = t === void 0 ? null : t;
    var a = o.memoizedState;
    return a !== null && t !== null && os(t, a[1]) ? a[0] : (e = e(), o.memoizedState = [e, t], e);
  }
  function ef(e, t, o) {
    return (Hr & 21) === 0 ? (e.baseState && (e.baseState = !1, st = !0), e.memoizedState = o) : (zt(o, t) || (o = Ac(), Me.lanes |= o, Wr |= o, e.baseState = !0), t);
  }
  function v0(e, t) {
    var o = Pe;
    Pe = o !== 0 && 4 > o ? o : 4, e(!0);
    var a = ns.transition;
    ns.transition = {};
    try {
      e(!1), t();
    } finally {
      Pe = o, ns.transition = a;
    }
  }
  function tf() {
    return _t().memoizedState;
  }
  function w0(e, t, o) {
    var a = Sr(e);
    if (o = { lane: a, action: o, hasEagerState: !1, eagerState: null, next: null }, rf(e)) nf(t, o);
    else if (o = Id(e, t, o, a), o !== null) {
      var l = it();
      Nt(o, e, a, l), of(o, t, a);
    }
  }
  function y0(e, t, o) {
    var a = Sr(e), l = { lane: a, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (rf(e)) nf(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var m = t.lastRenderedState, x = u(m, o);
        if (l.hasEagerState = !0, l.eagerState = x, zt(x, m)) {
          var E = t.interleaved;
          E === null ? (l.next = l, ql(t)) : (l.next = E.next, E.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      o = Id(e, t, l, a), o !== null && (l = it(), Nt(o, e, a, l), of(o, t, a));
    }
  }
  function rf(e) {
    var t = e.alternate;
    return e === Me || t !== null && t === Me;
  }
  function nf(e, t) {
    _o = Wi = !0;
    var o = e.pending;
    o === null ? t.next = t : (t.next = o.next, o.next = t), e.pending = t;
  }
  function of(e, t, o) {
    if ((o & 4194240) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, o |= a, t.lanes = o, fl(e, o);
    }
  }
  var Qi = { readContext: kt, useCallback: et, useContext: et, useEffect: et, useImperativeHandle: et, useInsertionEffect: et, useLayoutEffect: et, useMemo: et, useReducer: et, useRef: et, useState: et, useDebugValue: et, useDeferredValue: et, useTransition: et, useMutableSource: et, useSyncExternalStore: et, useId: et, unstable_isNewReconciler: !1 }, b0 = { readContext: kt, useCallback: function(e, t) {
    return Wt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: kt, useEffect: Yd, useImperativeHandle: function(e, t, o) {
    return o = o != null ? o.concat([e]) : null, Ki(
      4194308,
      4,
      Xd.bind(null, t, e),
      o
    );
  }, useLayoutEffect: function(e, t) {
    return Ki(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Ki(4, 2, e, t);
  }, useMemo: function(e, t) {
    var o = Wt();
    return t = t === void 0 ? null : t, e = e(), o.memoizedState = [e, t], e;
  }, useReducer: function(e, t, o) {
    var a = Wt();
    return t = o !== void 0 ? o(t) : t, a.memoizedState = a.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, a.queue = e, e = e.dispatch = w0.bind(null, Me, e), [a.memoizedState, e];
  }, useRef: function(e) {
    var t = Wt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Wd, useDebugValue: cs, useDeferredValue: function(e) {
    return Wt().memoizedState = e;
  }, useTransition: function() {
    var e = Wd(!1), t = e[0];
    return e = v0.bind(null, e[1]), Wt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, o) {
    var a = Me, l = Wt();
    if (Re) {
      if (o === void 0) throw Error(i(407));
      o = o();
    } else {
      if (o = t(), Ke === null) throw Error(i(349));
      (Hr & 30) !== 0 || jd(a, t, o);
    }
    l.memoizedState = o;
    var u = { value: o, getSnapshot: t };
    return l.queue = u, Yd(Vd.bind(
      null,
      a,
      u,
      e
    ), [e]), a.flags |= 2048, Co(9, Ud.bind(null, a, u, o, t), void 0, null), o;
  }, useId: function() {
    var e = Wt(), t = Ke.identifierPrefix;
    if (Re) {
      var o = Jt, a = Zt;
      o = (a & ~(1 << 32 - At(a) - 1)).toString(32) + o, t = ":" + t + "R" + o, o = Eo++, 0 < o && (t += "H" + o.toString(32)), t += ":";
    } else o = g0++, t = ":" + t + "r" + o.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, x0 = {
    readContext: kt,
    useCallback: Zd,
    useContext: kt,
    useEffect: us,
    useImperativeHandle: qd,
    useInsertionEffect: Qd,
    useLayoutEffect: Gd,
    useMemo: Jd,
    useReducer: ls,
    useRef: Kd,
    useState: function() {
      return ls(So);
    },
    useDebugValue: cs,
    useDeferredValue: function(e) {
      var t = _t();
      return ef(t, Be.memoizedState, e);
    },
    useTransition: function() {
      var e = ls(So)[0], t = _t().memoizedState;
      return [e, t];
    },
    useMutableSource: Od,
    useSyncExternalStore: Dd,
    useId: tf,
    unstable_isNewReconciler: !1
  }, k0 = { readContext: kt, useCallback: Zd, useContext: kt, useEffect: us, useImperativeHandle: qd, useInsertionEffect: Qd, useLayoutEffect: Gd, useMemo: Jd, useReducer: ss, useRef: Kd, useState: function() {
    return ss(So);
  }, useDebugValue: cs, useDeferredValue: function(e) {
    var t = _t();
    return Be === null ? t.memoizedState = e : ef(t, Be.memoizedState, e);
  }, useTransition: function() {
    var e = ss(So)[0], t = _t().memoizedState;
    return [e, t];
  }, useMutableSource: Od, useSyncExternalStore: Dd, useId: tf, unstable_isNewReconciler: !1 };
  function It(e, t) {
    if (e && e.defaultProps) {
      t = O({}, t), e = e.defaultProps;
      for (var o in e) t[o] === void 0 && (t[o] = e[o]);
      return t;
    }
    return t;
  }
  function ds(e, t, o, a) {
    t = e.memoizedState, o = o(a, t), o = o == null ? t : O({}, t, o), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
  }
  var Gi = { isMounted: function(e) {
    return (e = e._reactInternals) ? Mr(e) === e : !1;
  }, enqueueSetState: function(e, t, o) {
    e = e._reactInternals;
    var a = it(), l = Sr(e), u = tr(a, l);
    u.payload = t, o != null && (u.callback = o), t = xr(e, u, l), t !== null && (Nt(t, e, l, a), Ui(t, e, l));
  }, enqueueReplaceState: function(e, t, o) {
    e = e._reactInternals;
    var a = it(), l = Sr(e), u = tr(a, l);
    u.tag = 1, u.payload = t, o != null && (u.callback = o), t = xr(e, u, l), t !== null && (Nt(t, e, l, a), Ui(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var o = it(), a = Sr(e), l = tr(o, a);
    l.tag = 2, t != null && (l.callback = t), t = xr(e, l, a), t !== null && (Nt(t, e, a, o), Ui(t, e, a));
  } };
  function af(e, t, o, a, l, u, m) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, m) : t.prototype && t.prototype.isPureReactComponent ? !fo(o, a) || !fo(l, u) : !0;
  }
  function lf(e, t, o) {
    var a = !1, l = wr, u = t.contextType;
    return typeof u == "object" && u !== null ? u = kt(u) : (l = lt(t) ? Dr : Je.current, a = t.contextTypes, u = (a = a != null) ? yn(e, l) : wr), t = new t(o, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Gi, e.stateNode = t, t._reactInternals = e, a && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function sf(e, t, o, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(o, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(o, a), t.state !== e && Gi.enqueueReplaceState(t, t.state, null);
  }
  function fs(e, t, o, a) {
    var l = e.stateNode;
    l.props = o, l.state = e.memoizedState, l.refs = {}, Zl(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? l.context = kt(u) : (u = lt(t) ? Dr : Je.current, l.context = yn(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (ds(e, t, u, o), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Gi.enqueueReplaceState(l, l.state, null), Vi(e, o, l, a), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Fn(e, t) {
    try {
      var o = "", a = t;
      do
        o += ge(a), a = a.return;
      while (a);
      var l = o;
    } catch (u) {
      l = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function ps(e, t, o) {
    return { value: e, source: null, stack: o ?? null, digest: t ?? null };
  }
  function hs(e, t) {
    try {
      console.error(t.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var _0 = typeof WeakMap == "function" ? WeakMap : Map;
  function uf(e, t, o) {
    o = tr(-1, o), o.tag = 3, o.payload = { element: null };
    var a = t.value;
    return o.callback = function() {
      ra || (ra = !0, Ts = a), hs(e, t);
    }, o;
  }
  function cf(e, t, o) {
    o = tr(-1, o), o.tag = 3;
    var a = e.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var l = t.value;
      o.payload = function() {
        return a(l);
      }, o.callback = function() {
        hs(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (o.callback = function() {
      hs(e, t), typeof a != "function" && (_r === null ? _r = /* @__PURE__ */ new Set([this]) : _r.add(this));
      var m = t.stack;
      this.componentDidCatch(t.value, { componentStack: m !== null ? m : "" });
    }), o;
  }
  function df(e, t, o) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new _0();
      var l = /* @__PURE__ */ new Set();
      a.set(t, l);
    } else l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l));
    l.has(o) || (l.add(o), e = M0.bind(null, e, t, o), t.then(e, e));
  }
  function ff(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function pf(e, t, o, a, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (t = tr(-1, 1), t.tag = 2, xr(o, t, 1))), o.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var E0 = H.ReactCurrentOwner, st = !1;
  function ot(e, t, o, a) {
    t.child = e === null ? $d(t, null, o, a) : _n(t, e.child, o, a);
  }
  function hf(e, t, o, a, l) {
    o = o.render;
    var u = t.ref;
    return Sn(t, l), a = is(e, t, o, a, u, l), o = as(), e !== null && !st ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, rr(e, t, l)) : (Re && o && Vl(t), t.flags |= 1, ot(e, t, a, l), t.child);
  }
  function mf(e, t, o, a, l) {
    if (e === null) {
      var u = o.type;
      return typeof u == "function" && !Ns(u) && u.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (t.tag = 15, t.type = u, gf(e, t, u, a, l)) : (e = sa(o.type, null, a, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & l) === 0) {
      var m = u.memoizedProps;
      if (o = o.compare, o = o !== null ? o : fo, o(m, a) && e.ref === t.ref) return rr(e, t, l);
    }
    return t.flags |= 1, e = Fr(u, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function gf(e, t, o, a, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (fo(u, a) && e.ref === t.ref) if (st = !1, t.pendingProps = a = u, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (st = !0);
      else return t.lanes = e.lanes, rr(e, t, l);
    }
    return ms(e, t, o, a, l);
  }
  function vf(e, t, o) {
    var a = t.pendingProps, l = a.children, u = e !== null ? e.memoizedState : null;
    if (a.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ze(Tn, wt), wt |= o;
    else {
      if ((o & 1073741824) === 0) return e = u !== null ? u.baseLanes | o : o, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ze(Tn, wt), wt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, a = u !== null ? u.baseLanes : o, ze(Tn, wt), wt |= a;
    }
    else u !== null ? (a = u.baseLanes | o, t.memoizedState = null) : a = o, ze(Tn, wt), wt |= a;
    return ot(e, t, l, o), t.child;
  }
  function wf(e, t) {
    var o = t.ref;
    (e === null && o !== null || e !== null && e.ref !== o) && (t.flags |= 512, t.flags |= 2097152);
  }
  function ms(e, t, o, a, l) {
    var u = lt(o) ? Dr : Je.current;
    return u = yn(t, u), Sn(t, l), o = is(e, t, o, a, u, l), a = as(), e !== null && !st ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, rr(e, t, l)) : (Re && a && Vl(t), t.flags |= 1, ot(e, t, o, l), t.child);
  }
  function yf(e, t, o, a, l) {
    if (lt(o)) {
      var u = !0;
      Ii(t);
    } else u = !1;
    if (Sn(t, l), t.stateNode === null) qi(e, t), lf(t, o, a), fs(t, o, a, l), a = !0;
    else if (e === null) {
      var m = t.stateNode, x = t.memoizedProps;
      m.props = x;
      var E = m.context, z = o.contextType;
      typeof z == "object" && z !== null ? z = kt(z) : (z = lt(o) ? Dr : Je.current, z = yn(t, z));
      var U = o.getDerivedStateFromProps, V = typeof U == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      V || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (x !== a || E !== z) && sf(t, m, a, z), br = !1;
      var j = t.memoizedState;
      m.state = j, Vi(t, a, m, l), E = t.memoizedState, x !== a || j !== E || at.current || br ? (typeof U == "function" && (ds(t, o, U, a), E = t.memoizedState), (x = br || af(t, o, x, a, j, E, z)) ? (V || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = E), m.props = a, m.state = E, m.context = z, a = x) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      m = t.stateNode, Ld(e, t), x = t.memoizedProps, z = t.type === t.elementType ? x : It(t.type, x), m.props = z, V = t.pendingProps, j = m.context, E = o.contextType, typeof E == "object" && E !== null ? E = kt(E) : (E = lt(o) ? Dr : Je.current, E = yn(t, E));
      var X = o.getDerivedStateFromProps;
      (U = typeof X == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (x !== V || j !== E) && sf(t, m, a, E), br = !1, j = t.memoizedState, m.state = j, Vi(t, a, m, l);
      var Z = t.memoizedState;
      x !== V || j !== Z || at.current || br ? (typeof X == "function" && (ds(t, o, X, a), Z = t.memoizedState), (z = br || af(t, o, z, a, j, Z, E) || !1) ? (U || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(a, Z, E), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(a, Z, E)), typeof m.componentDidUpdate == "function" && (t.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || x === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || x === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = Z), m.props = a, m.state = Z, m.context = E, a = z) : (typeof m.componentDidUpdate != "function" || x === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || x === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return gs(e, t, o, a, u, l);
  }
  function gs(e, t, o, a, l, u) {
    wf(e, t);
    var m = (t.flags & 128) !== 0;
    if (!a && !m) return l && _d(t, o, !1), rr(e, t, u);
    a = t.stateNode, E0.current = t;
    var x = m && typeof o.getDerivedStateFromError != "function" ? null : a.render();
    return t.flags |= 1, e !== null && m ? (t.child = _n(t, e.child, null, u), t.child = _n(t, null, x, u)) : ot(e, t, x, u), t.memoizedState = a.state, l && _d(t, o, !0), t.child;
  }
  function bf(e) {
    var t = e.stateNode;
    t.pendingContext ? xd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && xd(e, t.context, !1), Jl(e, t.containerInfo);
  }
  function xf(e, t, o, a, l) {
    return kn(), Kl(l), t.flags |= 256, ot(e, t, o, a), t.child;
  }
  var vs = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ws(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function kf(e, t, o) {
    var a = t.pendingProps, l = Ne.current, u = !1, m = (t.flags & 128) !== 0, x;
    if ((x = m) || (x = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), x ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ze(Ne, l & 1), e === null)
      return Wl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (m = a.children, e = a.fallback, u ? (a = t.mode, u = t.child, m = { mode: "hidden", children: m }, (a & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = m) : u = ua(m, a, 0, null), e = Gr(e, a, o, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = ws(o), t.memoizedState = vs, e) : ys(t, m));
    if (l = e.memoizedState, l !== null && (x = l.dehydrated, x !== null)) return S0(e, t, m, a, x, l, o);
    if (u) {
      u = a.fallback, m = t.mode, l = e.child, x = l.sibling;
      var E = { mode: "hidden", children: a.children };
      return (m & 1) === 0 && t.child !== l ? (a = t.child, a.childLanes = 0, a.pendingProps = E, t.deletions = null) : (a = Fr(l, E), a.subtreeFlags = l.subtreeFlags & 14680064), x !== null ? u = Fr(x, u) : (u = Gr(u, m, o, null), u.flags |= 2), u.return = t, a.return = t, a.sibling = u, t.child = a, a = u, u = t.child, m = e.child.memoizedState, m = m === null ? ws(o) : { baseLanes: m.baseLanes | o, cachePool: null, transitions: m.transitions }, u.memoizedState = m, u.childLanes = e.childLanes & ~o, t.memoizedState = vs, a;
    }
    return u = e.child, e = u.sibling, a = Fr(u, { mode: "visible", children: a.children }), (t.mode & 1) === 0 && (a.lanes = o), a.return = t, a.sibling = null, e !== null && (o = t.deletions, o === null ? (t.deletions = [e], t.flags |= 16) : o.push(e)), t.child = a, t.memoizedState = null, a;
  }
  function ys(e, t) {
    return t = ua({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Xi(e, t, o, a) {
    return a !== null && Kl(a), _n(t, e.child, null, o), e = ys(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function S0(e, t, o, a, l, u, m) {
    if (o)
      return t.flags & 256 ? (t.flags &= -257, a = ps(Error(i(422))), Xi(e, t, m, a)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = a.fallback, l = t.mode, a = ua({ mode: "visible", children: a.children }, l, 0, null), u = Gr(u, l, m, null), u.flags |= 2, a.return = t, u.return = t, a.sibling = u, t.child = a, (t.mode & 1) !== 0 && _n(t, e.child, null, m), t.child.memoizedState = ws(m), t.memoizedState = vs, u);
    if ((t.mode & 1) === 0) return Xi(e, t, m, null);
    if (l.data === "$!") {
      if (a = l.nextSibling && l.nextSibling.dataset, a) var x = a.dgst;
      return a = x, u = Error(i(419)), a = ps(u, a, void 0), Xi(e, t, m, a);
    }
    if (x = (m & e.childLanes) !== 0, st || x) {
      if (a = Ke, a !== null) {
        switch (m & -m) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = (l & (a.suspendedLanes | m)) !== 0 ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, er(e, l), Nt(a, e, l, -1));
      }
      return Rs(), a = ps(Error(i(421))), Xi(e, t, m, a);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = O0.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, vt = gr(l.nextSibling), gt = t, Re = !0, $t = null, e !== null && (bt[xt++] = Zt, bt[xt++] = Jt, bt[xt++] = jr, Zt = e.id, Jt = e.overflow, jr = t), t = ys(t, a.children), t.flags |= 4096, t);
  }
  function _f(e, t, o) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), Xl(e.return, t, o);
  }
  function bs(e, t, o, a, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: o, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = a, u.tail = o, u.tailMode = l);
  }
  function Ef(e, t, o) {
    var a = t.pendingProps, l = a.revealOrder, u = a.tail;
    if (ot(e, t, a.children, o), a = Ne.current, (a & 2) !== 0) a = a & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && _f(e, o, t);
        else if (e.tag === 19) _f(e, o, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      a &= 1;
    }
    if (ze(Ne, a), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (o = t.child, l = null; o !== null; ) e = o.alternate, e !== null && Bi(e) === null && (l = o), o = o.sibling;
        o = l, o === null ? (l = t.child, t.child = null) : (l = o.sibling, o.sibling = null), bs(t, !1, l, o, u);
        break;
      case "backwards":
        for (o = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Bi(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = o, o = l, l = e;
        }
        bs(t, !0, o, null, u);
        break;
      case "together":
        bs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function qi(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function rr(e, t, o) {
    if (e !== null && (t.dependencies = e.dependencies), Wr |= t.lanes, (o & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, o = Fr(e, e.pendingProps), t.child = o, o.return = t; e.sibling !== null; ) e = e.sibling, o = o.sibling = Fr(e, e.pendingProps), o.return = t;
      o.sibling = null;
    }
    return t.child;
  }
  function C0(e, t, o) {
    switch (t.tag) {
      case 3:
        bf(t), kn();
        break;
      case 5:
        Md(t);
        break;
      case 1:
        lt(t.type) && Ii(t);
        break;
      case 4:
        Jl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var a = t.type._context, l = t.memoizedProps.value;
        ze(Di, a._currentValue), a._currentValue = l;
        break;
      case 13:
        if (a = t.memoizedState, a !== null)
          return a.dehydrated !== null ? (ze(Ne, Ne.current & 1), t.flags |= 128, null) : (o & t.child.childLanes) !== 0 ? kf(e, t, o) : (ze(Ne, Ne.current & 1), e = rr(e, t, o), e !== null ? e.sibling : null);
        ze(Ne, Ne.current & 1);
        break;
      case 19:
        if (a = (o & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (a) return Ef(e, t, o);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ze(Ne, Ne.current), a) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, vf(e, t, o);
    }
    return rr(e, t, o);
  }
  var Sf, xs, Cf, Ff;
  Sf = function(e, t) {
    for (var o = t.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6) e.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === t) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === t) return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, xs = function() {
  }, Cf = function(e, t, o, a) {
    var l = e.memoizedProps;
    if (l !== a) {
      e = t.stateNode, Br(Ht.current);
      var u = null;
      switch (o) {
        case "input":
          l = an(e, l), a = an(e, a), u = [];
          break;
        case "select":
          l = O({}, l, { value: void 0 }), a = O({}, a, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = Ja(e, l), a = Ja(e, a), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof a.onClick == "function" && (e.onclick = Ai);
      }
      tl(o, a);
      var m;
      o = null;
      for (z in l) if (!a.hasOwnProperty(z) && l.hasOwnProperty(z) && l[z] != null) if (z === "style") {
        var x = l[z];
        for (m in x) x.hasOwnProperty(m) && (o || (o = {}), o[m] = "");
      } else z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (c.hasOwnProperty(z) ? u || (u = []) : (u = u || []).push(z, null));
      for (z in a) {
        var E = a[z];
        if (x = l != null ? l[z] : void 0, a.hasOwnProperty(z) && E !== x && (E != null || x != null)) if (z === "style") if (x) {
          for (m in x) !x.hasOwnProperty(m) || E && E.hasOwnProperty(m) || (o || (o = {}), o[m] = "");
          for (m in E) E.hasOwnProperty(m) && x[m] !== E[m] && (o || (o = {}), o[m] = E[m]);
        } else o || (u || (u = []), u.push(
          z,
          o
        )), o = E;
        else z === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0, x = x ? x.__html : void 0, E != null && x !== E && (u = u || []).push(z, E)) : z === "children" ? typeof E != "string" && typeof E != "number" || (u = u || []).push(z, "" + E) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (c.hasOwnProperty(z) ? (E != null && z === "onScroll" && $e("scroll", e), u || x === E || (u = [])) : (u = u || []).push(z, E));
      }
      o && (u = u || []).push("style", o);
      var z = u;
      (t.updateQueue = z) && (t.flags |= 4);
    }
  }, Ff = function(e, t, o, a) {
    o !== a && (t.flags |= 4);
  };
  function Fo(e, t) {
    if (!Re) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var o = null; t !== null; ) t.alternate !== null && (o = t), t = t.sibling;
        o === null ? e.tail = null : o.sibling = null;
        break;
      case "collapsed":
        o = e.tail;
        for (var a = null; o !== null; ) o.alternate !== null && (a = o), o = o.sibling;
        a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
    }
  }
  function tt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, o = 0, a = 0;
    if (t) for (var l = e.child; l !== null; ) o |= l.lanes | l.childLanes, a |= l.subtreeFlags & 14680064, a |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) o |= l.lanes | l.childLanes, a |= l.subtreeFlags, a |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= a, e.childLanes = o, t;
  }
  function F0(e, t, o) {
    var a = t.pendingProps;
    switch (Bl(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return tt(t), null;
      case 1:
        return lt(t.type) && $i(), tt(t), null;
      case 3:
        return a = t.stateNode, Cn(), Ie(at), Ie(Je), rs(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Mi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, $t !== null && ($s($t), $t = null))), xs(e, t), tt(t), null;
      case 5:
        es(t);
        var l = Br(ko.current);
        if (o = t.type, e !== null && t.stateNode != null) Cf(e, t, o, a, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(i(166));
            return tt(t), null;
          }
          if (e = Br(Ht.current), Mi(t)) {
            a = t.stateNode, o = t.type;
            var u = t.memoizedProps;
            switch (a[Bt] = t, a[vo] = u, e = (t.mode & 1) !== 0, o) {
              case "dialog":
                $e("cancel", a), $e("close", a);
                break;
              case "iframe":
              case "object":
              case "embed":
                $e("load", a);
                break;
              case "video":
              case "audio":
                for (l = 0; l < ho.length; l++) $e(ho[l], a);
                break;
              case "source":
                $e("error", a);
                break;
              case "img":
              case "image":
              case "link":
                $e(
                  "error",
                  a
                ), $e("load", a);
                break;
              case "details":
                $e("toggle", a);
                break;
              case "input":
                ie(a, u), $e("invalid", a);
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!u.multiple }, $e("invalid", a);
                break;
              case "textarea":
                uc(a, u), $e("invalid", a);
            }
            tl(o, u), l = null;
            for (var m in u) if (u.hasOwnProperty(m)) {
              var x = u[m];
              m === "children" ? typeof x == "string" ? a.textContent !== x && (u.suppressHydrationWarning !== !0 && Ti(a.textContent, x, e), l = ["children", x]) : typeof x == "number" && a.textContent !== "" + x && (u.suppressHydrationWarning !== !0 && Ti(
                a.textContent,
                x,
                e
              ), l = ["children", "" + x]) : c.hasOwnProperty(m) && x != null && m === "onScroll" && $e("scroll", a);
            }
            switch (o) {
              case "input":
                nn(a), Rr(a, u, !0);
                break;
              case "textarea":
                nn(a), dc(a);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (a.onclick = Ai);
            }
            a = l, t.updateQueue = a, a !== null && (t.flags |= 4);
          } else {
            m = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = fc(o)), e === "http://www.w3.org/1999/xhtml" ? o === "script" ? (e = m.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof a.is == "string" ? e = m.createElement(o, { is: a.is }) : (e = m.createElement(o), o === "select" && (m = e, a.multiple ? m.multiple = !0 : a.size && (m.size = a.size))) : e = m.createElementNS(e, o), e[Bt] = t, e[vo] = a, Sf(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (m = rl(o, a), o) {
                case "dialog":
                  $e("cancel", e), $e("close", e), l = a;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  $e("load", e), l = a;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < ho.length; l++) $e(ho[l], e);
                  l = a;
                  break;
                case "source":
                  $e("error", e), l = a;
                  break;
                case "img":
                case "image":
                case "link":
                  $e(
                    "error",
                    e
                  ), $e("load", e), l = a;
                  break;
                case "details":
                  $e("toggle", e), l = a;
                  break;
                case "input":
                  ie(e, a), l = an(e, a), $e("invalid", e);
                  break;
                case "option":
                  l = a;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!a.multiple }, l = O({}, a, { value: void 0 }), $e("invalid", e);
                  break;
                case "textarea":
                  uc(e, a), l = Ja(e, a), $e("invalid", e);
                  break;
                default:
                  l = a;
              }
              tl(o, l), x = l;
              for (u in x) if (x.hasOwnProperty(u)) {
                var E = x[u];
                u === "style" ? mc(e, E) : u === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0, E != null && pc(e, E)) : u === "children" ? typeof E == "string" ? (o !== "textarea" || E !== "") && Qn(e, E) : typeof E == "number" && Qn(e, "" + E) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (c.hasOwnProperty(u) ? E != null && u === "onScroll" && $e("scroll", e) : E != null && D(e, u, E, m));
              }
              switch (o) {
                case "input":
                  nn(e), Rr(e, a, !1);
                  break;
                case "textarea":
                  nn(e), dc(e);
                  break;
                case "option":
                  a.value != null && e.setAttribute("value", "" + Ce(a.value));
                  break;
                case "select":
                  e.multiple = !!a.multiple, u = a.value, u != null ? ln(e, !!a.multiple, u, !1) : a.defaultValue != null && ln(
                    e,
                    !!a.multiple,
                    a.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Ai);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a = !!a.autoFocus;
                  break e;
                case "img":
                  a = !0;
                  break e;
                default:
                  a = !1;
              }
            }
            a && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return tt(t), null;
      case 6:
        if (e && t.stateNode != null) Ff(e, t, e.memoizedProps, a);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(i(166));
          if (o = Br(ko.current), Br(Ht.current), Mi(t)) {
            if (a = t.stateNode, o = t.memoizedProps, a[Bt] = t, (u = a.nodeValue !== o) && (e = gt, e !== null)) switch (e.tag) {
              case 3:
                Ti(a.nodeValue, o, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ti(a.nodeValue, o, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else a = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(a), a[Bt] = t, t.stateNode = a;
        }
        return tt(t), null;
      case 13:
        if (Ie(Ne), a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Re && vt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Td(), kn(), t.flags |= 98560, u = !1;
          else if (u = Mi(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(i(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(i(317));
              u[Bt] = t;
            } else kn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            tt(t), u = !1;
          } else $t !== null && ($s($t), $t = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = o, t) : (a = a !== null, a !== (e !== null && e.memoizedState !== null) && a && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Ne.current & 1) !== 0 ? He === 0 && (He = 3) : Rs())), t.updateQueue !== null && (t.flags |= 4), tt(t), null);
      case 4:
        return Cn(), xs(e, t), e === null && mo(t.stateNode.containerInfo), tt(t), null;
      case 10:
        return Gl(t.type._context), tt(t), null;
      case 17:
        return lt(t.type) && $i(), tt(t), null;
      case 19:
        if (Ie(Ne), u = t.memoizedState, u === null) return tt(t), null;
        if (a = (t.flags & 128) !== 0, m = u.rendering, m === null) if (a) Fo(u, !1);
        else {
          if (He !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (m = Bi(e), m !== null) {
              for (t.flags |= 128, Fo(u, !1), a = m.updateQueue, a !== null && (t.updateQueue = a, t.flags |= 4), t.subtreeFlags = 0, a = o, o = t.child; o !== null; ) u = o, e = a, u.flags &= 14680066, m = u.alternate, m === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = m.childLanes, u.lanes = m.lanes, u.child = m.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = m.memoizedProps, u.memoizedState = m.memoizedState, u.updateQueue = m.updateQueue, u.type = m.type, e = m.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), o = o.sibling;
              return ze(Ne, Ne.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && je() > An && (t.flags |= 128, a = !0, Fo(u, !1), t.lanes = 4194304);
        }
        else {
          if (!a) if (e = Bi(m), e !== null) {
            if (t.flags |= 128, a = !0, o = e.updateQueue, o !== null && (t.updateQueue = o, t.flags |= 4), Fo(u, !0), u.tail === null && u.tailMode === "hidden" && !m.alternate && !Re) return tt(t), null;
          } else 2 * je() - u.renderingStartTime > An && o !== 1073741824 && (t.flags |= 128, a = !0, Fo(u, !1), t.lanes = 4194304);
          u.isBackwards ? (m.sibling = t.child, t.child = m) : (o = u.last, o !== null ? o.sibling = m : t.child = m, u.last = m);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = je(), t.sibling = null, o = Ne.current, ze(Ne, a ? o & 1 | 2 : o & 1), t) : (tt(t), null);
      case 22:
      case 23:
        return Ls(), a = t.memoizedState !== null, e !== null && e.memoizedState !== null !== a && (t.flags |= 8192), a && (t.mode & 1) !== 0 ? (wt & 1073741824) !== 0 && (tt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : tt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function P0(e, t) {
    switch (Bl(t), t.tag) {
      case 1:
        return lt(t.type) && $i(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Cn(), Ie(at), Ie(Je), rs(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return es(t), null;
      case 13:
        if (Ie(Ne), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(i(340));
          kn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ie(Ne), null;
      case 4:
        return Cn(), null;
      case 10:
        return Gl(t.type._context), null;
      case 22:
      case 23:
        return Ls(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Zi = !1, rt = !1, T0 = typeof WeakSet == "function" ? WeakSet : Set, q = null;
  function Pn(e, t) {
    var o = e.ref;
    if (o !== null) if (typeof o == "function") try {
      o(null);
    } catch (a) {
      De(e, t, a);
    }
    else o.current = null;
  }
  function ks(e, t, o) {
    try {
      o();
    } catch (a) {
      De(e, t, a);
    }
  }
  var Pf = !1;
  function A0(e, t) {
    if (Ll = wi, e = id(), Cl(e)) {
      if ("selectionStart" in e) var o = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        o = (o = e.ownerDocument) && o.defaultView || window;
        var a = o.getSelection && o.getSelection();
        if (a && a.rangeCount !== 0) {
          o = a.anchorNode;
          var l = a.anchorOffset, u = a.focusNode;
          a = a.focusOffset;
          try {
            o.nodeType, u.nodeType;
          } catch {
            o = null;
            break e;
          }
          var m = 0, x = -1, E = -1, z = 0, U = 0, V = e, j = null;
          t: for (; ; ) {
            for (var X; V !== o || l !== 0 && V.nodeType !== 3 || (x = m + l), V !== u || a !== 0 && V.nodeType !== 3 || (E = m + a), V.nodeType === 3 && (m += V.nodeValue.length), (X = V.firstChild) !== null; )
              j = V, V = X;
            for (; ; ) {
              if (V === e) break t;
              if (j === o && ++z === l && (x = m), j === u && ++U === a && (E = m), (X = V.nextSibling) !== null) break;
              V = j, j = V.parentNode;
            }
            V = X;
          }
          o = x === -1 || E === -1 ? null : { start: x, end: E };
        } else o = null;
      }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (Rl = { focusedElem: e, selectionRange: o }, wi = !1, q = t; q !== null; ) if (t = q, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, q = e;
    else for (; q !== null; ) {
      t = q;
      try {
        var Z = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Z !== null) {
              var J = Z.memoizedProps, Ue = Z.memoizedState, P = t.stateNode, S = P.getSnapshotBeforeUpdate(t.elementType === t.type ? J : It(t.type, J), Ue);
              P.__reactInternalSnapshotBeforeUpdate = S;
            }
            break;
          case 3:
            var T = t.stateNode.containerInfo;
            T.nodeType === 1 ? T.textContent = "" : T.nodeType === 9 && T.documentElement && T.removeChild(T.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(i(163));
        }
      } catch (W) {
        De(t, t.return, W);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, q = e;
        break;
      }
      q = t.return;
    }
    return Z = Pf, Pf = !1, Z;
  }
  function Po(e, t, o) {
    var a = t.updateQueue;
    if (a = a !== null ? a.lastEffect : null, a !== null) {
      var l = a = a.next;
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          l.destroy = void 0, u !== void 0 && ks(t, o, u);
        }
        l = l.next;
      } while (l !== a);
    }
  }
  function Ji(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var o = t = t.next;
      do {
        if ((o.tag & e) === e) {
          var a = o.create;
          o.destroy = a();
        }
        o = o.next;
      } while (o !== t);
    }
  }
  function _s(e) {
    var t = e.ref;
    if (t !== null) {
      var o = e.stateNode;
      switch (e.tag) {
        case 5:
          e = o;
          break;
        default:
          e = o;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Tf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Tf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Bt], delete t[vo], delete t[Dl], delete t[f0], delete t[p0])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Af(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function zf(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Af(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Es(e, t, o) {
    var a = e.tag;
    if (a === 5 || a === 6) e = e.stateNode, t ? o.nodeType === 8 ? o.parentNode.insertBefore(e, t) : o.insertBefore(e, t) : (o.nodeType === 8 ? (t = o.parentNode, t.insertBefore(e, o)) : (t = o, t.appendChild(e)), o = o._reactRootContainer, o != null || t.onclick !== null || (t.onclick = Ai));
    else if (a !== 4 && (e = e.child, e !== null)) for (Es(e, t, o), e = e.sibling; e !== null; ) Es(e, t, o), e = e.sibling;
  }
  function Ss(e, t, o) {
    var a = e.tag;
    if (a === 5 || a === 6) e = e.stateNode, t ? o.insertBefore(e, t) : o.appendChild(e);
    else if (a !== 4 && (e = e.child, e !== null)) for (Ss(e, t, o), e = e.sibling; e !== null; ) Ss(e, t, o), e = e.sibling;
  }
  var Ge = null, Lt = !1;
  function kr(e, t, o) {
    for (o = o.child; o !== null; ) $f(e, t, o), o = o.sibling;
  }
  function $f(e, t, o) {
    if (Vt && typeof Vt.onCommitFiberUnmount == "function") try {
      Vt.onCommitFiberUnmount(fi, o);
    } catch {
    }
    switch (o.tag) {
      case 5:
        rt || Pn(o, t);
      case 6:
        var a = Ge, l = Lt;
        Ge = null, kr(e, t, o), Ge = a, Lt = l, Ge !== null && (Lt ? (e = Ge, o = o.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(o) : e.removeChild(o)) : Ge.removeChild(o.stateNode));
        break;
      case 18:
        Ge !== null && (Lt ? (e = Ge, o = o.stateNode, e.nodeType === 8 ? Ol(e.parentNode, o) : e.nodeType === 1 && Ol(e, o), io(e)) : Ol(Ge, o.stateNode));
        break;
      case 4:
        a = Ge, l = Lt, Ge = o.stateNode.containerInfo, Lt = !0, kr(e, t, o), Ge = a, Lt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!rt && (a = o.updateQueue, a !== null && (a = a.lastEffect, a !== null))) {
          l = a = a.next;
          do {
            var u = l, m = u.destroy;
            u = u.tag, m !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && ks(o, t, m), l = l.next;
          } while (l !== a);
        }
        kr(e, t, o);
        break;
      case 1:
        if (!rt && (Pn(o, t), a = o.stateNode, typeof a.componentWillUnmount == "function")) try {
          a.props = o.memoizedProps, a.state = o.memoizedState, a.componentWillUnmount();
        } catch (x) {
          De(o, t, x);
        }
        kr(e, t, o);
        break;
      case 21:
        kr(e, t, o);
        break;
      case 22:
        o.mode & 1 ? (rt = (a = rt) || o.memoizedState !== null, kr(e, t, o), rt = a) : kr(e, t, o);
        break;
      default:
        kr(e, t, o);
    }
  }
  function If(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var o = e.stateNode;
      o === null && (o = e.stateNode = new T0()), t.forEach(function(a) {
        var l = D0.bind(null, e, a);
        o.has(a) || (o.add(a), a.then(l, l));
      });
    }
  }
  function Rt(e, t) {
    var o = t.deletions;
    if (o !== null) for (var a = 0; a < o.length; a++) {
      var l = o[a];
      try {
        var u = e, m = t, x = m;
        e: for (; x !== null; ) {
          switch (x.tag) {
            case 5:
              Ge = x.stateNode, Lt = !1;
              break e;
            case 3:
              Ge = x.stateNode.containerInfo, Lt = !0;
              break e;
            case 4:
              Ge = x.stateNode.containerInfo, Lt = !0;
              break e;
          }
          x = x.return;
        }
        if (Ge === null) throw Error(i(160));
        $f(u, m, l), Ge = null, Lt = !1;
        var E = l.alternate;
        E !== null && (E.return = null), l.return = null;
      } catch (z) {
        De(l, t, z);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Lf(t, e), t = t.sibling;
  }
  function Lf(e, t) {
    var o = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Rt(t, e), Kt(e), a & 4) {
          try {
            Po(3, e, e.return), Ji(3, e);
          } catch (J) {
            De(e, e.return, J);
          }
          try {
            Po(5, e, e.return);
          } catch (J) {
            De(e, e.return, J);
          }
        }
        break;
      case 1:
        Rt(t, e), Kt(e), a & 512 && o !== null && Pn(o, o.return);
        break;
      case 5:
        if (Rt(t, e), Kt(e), a & 512 && o !== null && Pn(o, o.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Qn(l, "");
          } catch (J) {
            De(e, e.return, J);
          }
        }
        if (a & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, m = o !== null ? o.memoizedProps : u, x = e.type, E = e.updateQueue;
          if (e.updateQueue = null, E !== null) try {
            x === "input" && u.type === "radio" && u.name != null && ke(l, u), rl(x, m);
            var z = rl(x, u);
            for (m = 0; m < E.length; m += 2) {
              var U = E[m], V = E[m + 1];
              U === "style" ? mc(l, V) : U === "dangerouslySetInnerHTML" ? pc(l, V) : U === "children" ? Qn(l, V) : D(l, U, V, z);
            }
            switch (x) {
              case "input":
                Ut(l, u);
                break;
              case "textarea":
                cc(l, u);
                break;
              case "select":
                var j = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var X = u.value;
                X != null ? ln(l, !!u.multiple, X, !1) : j !== !!u.multiple && (u.defaultValue != null ? ln(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : ln(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[vo] = u;
          } catch (J) {
            De(e, e.return, J);
          }
        }
        break;
      case 6:
        if (Rt(t, e), Kt(e), a & 4) {
          if (e.stateNode === null) throw Error(i(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (J) {
            De(e, e.return, J);
          }
        }
        break;
      case 3:
        if (Rt(t, e), Kt(e), a & 4 && o !== null && o.memoizedState.isDehydrated) try {
          io(t.containerInfo);
        } catch (J) {
          De(e, e.return, J);
        }
        break;
      case 4:
        Rt(t, e), Kt(e);
        break;
      case 13:
        Rt(t, e), Kt(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (Ps = je())), a & 4 && If(e);
        break;
      case 22:
        if (U = o !== null && o.memoizedState !== null, e.mode & 1 ? (rt = (z = rt) || U, Rt(t, e), rt = z) : Rt(t, e), Kt(e), a & 8192) {
          if (z = e.memoizedState !== null, (e.stateNode.isHidden = z) && !U && (e.mode & 1) !== 0) for (q = e, U = e.child; U !== null; ) {
            for (V = q = U; q !== null; ) {
              switch (j = q, X = j.child, j.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Po(4, j, j.return);
                  break;
                case 1:
                  Pn(j, j.return);
                  var Z = j.stateNode;
                  if (typeof Z.componentWillUnmount == "function") {
                    a = j, o = j.return;
                    try {
                      t = a, Z.props = t.memoizedProps, Z.state = t.memoizedState, Z.componentWillUnmount();
                    } catch (J) {
                      De(a, o, J);
                    }
                  }
                  break;
                case 5:
                  Pn(j, j.return);
                  break;
                case 22:
                  if (j.memoizedState !== null) {
                    Mf(V);
                    continue;
                  }
              }
              X !== null ? (X.return = j, q = X) : Mf(V);
            }
            U = U.sibling;
          }
          e: for (U = null, V = e; ; ) {
            if (V.tag === 5) {
              if (U === null) {
                U = V;
                try {
                  l = V.stateNode, z ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (x = V.stateNode, E = V.memoizedProps.style, m = E != null && E.hasOwnProperty("display") ? E.display : null, x.style.display = hc("display", m));
                } catch (J) {
                  De(e, e.return, J);
                }
              }
            } else if (V.tag === 6) {
              if (U === null) try {
                V.stateNode.nodeValue = z ? "" : V.memoizedProps;
              } catch (J) {
                De(e, e.return, J);
              }
            } else if ((V.tag !== 22 && V.tag !== 23 || V.memoizedState === null || V === e) && V.child !== null) {
              V.child.return = V, V = V.child;
              continue;
            }
            if (V === e) break e;
            for (; V.sibling === null; ) {
              if (V.return === null || V.return === e) break e;
              U === V && (U = null), V = V.return;
            }
            U === V && (U = null), V.sibling.return = V.return, V = V.sibling;
          }
        }
        break;
      case 19:
        Rt(t, e), Kt(e), a & 4 && If(e);
        break;
      case 21:
        break;
      default:
        Rt(
          t,
          e
        ), Kt(e);
    }
  }
  function Kt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var o = e.return; o !== null; ) {
            if (Af(o)) {
              var a = o;
              break e;
            }
            o = o.return;
          }
          throw Error(i(160));
        }
        switch (a.tag) {
          case 5:
            var l = a.stateNode;
            a.flags & 32 && (Qn(l, ""), a.flags &= -33);
            var u = zf(e);
            Ss(e, u, l);
            break;
          case 3:
          case 4:
            var m = a.stateNode.containerInfo, x = zf(e);
            Es(e, x, m);
            break;
          default:
            throw Error(i(161));
        }
      } catch (E) {
        De(e, e.return, E);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function z0(e, t, o) {
    q = e, Rf(e);
  }
  function Rf(e, t, o) {
    for (var a = (e.mode & 1) !== 0; q !== null; ) {
      var l = q, u = l.child;
      if (l.tag === 22 && a) {
        var m = l.memoizedState !== null || Zi;
        if (!m) {
          var x = l.alternate, E = x !== null && x.memoizedState !== null || rt;
          x = Zi;
          var z = rt;
          if (Zi = m, (rt = E) && !z) for (q = l; q !== null; ) m = q, E = m.child, m.tag === 22 && m.memoizedState !== null ? Of(l) : E !== null ? (E.return = m, q = E) : Of(l);
          for (; u !== null; ) q = u, Rf(u), u = u.sibling;
          q = l, Zi = x, rt = z;
        }
        Nf(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = l, q = u) : Nf(e);
    }
  }
  function Nf(e) {
    for (; q !== null; ) {
      var t = q;
      if ((t.flags & 8772) !== 0) {
        var o = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              rt || Ji(5, t);
              break;
            case 1:
              var a = t.stateNode;
              if (t.flags & 4 && !rt) if (o === null) a.componentDidMount();
              else {
                var l = t.elementType === t.type ? o.memoizedProps : It(t.type, o.memoizedProps);
                a.componentDidUpdate(l, o.memoizedState, a.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && Nd(t, u, a);
              break;
            case 3:
              var m = t.updateQueue;
              if (m !== null) {
                if (o = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    o = t.child.stateNode;
                    break;
                  case 1:
                    o = t.child.stateNode;
                }
                Nd(t, m, o);
              }
              break;
            case 5:
              var x = t.stateNode;
              if (o === null && t.flags & 4) {
                o = x;
                var E = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    E.autoFocus && o.focus();
                    break;
                  case "img":
                    E.src && (o.src = E.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var z = t.alternate;
                if (z !== null) {
                  var U = z.memoizedState;
                  if (U !== null) {
                    var V = U.dehydrated;
                    V !== null && io(V);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(i(163));
          }
          rt || t.flags & 512 && _s(t);
        } catch (j) {
          De(t, t.return, j);
        }
      }
      if (t === e) {
        q = null;
        break;
      }
      if (o = t.sibling, o !== null) {
        o.return = t.return, q = o;
        break;
      }
      q = t.return;
    }
  }
  function Mf(e) {
    for (; q !== null; ) {
      var t = q;
      if (t === e) {
        q = null;
        break;
      }
      var o = t.sibling;
      if (o !== null) {
        o.return = t.return, q = o;
        break;
      }
      q = t.return;
    }
  }
  function Of(e) {
    for (; q !== null; ) {
      var t = q;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var o = t.return;
            try {
              Ji(4, t);
            } catch (E) {
              De(t, o, E);
            }
            break;
          case 1:
            var a = t.stateNode;
            if (typeof a.componentDidMount == "function") {
              var l = t.return;
              try {
                a.componentDidMount();
              } catch (E) {
                De(t, l, E);
              }
            }
            var u = t.return;
            try {
              _s(t);
            } catch (E) {
              De(t, u, E);
            }
            break;
          case 5:
            var m = t.return;
            try {
              _s(t);
            } catch (E) {
              De(t, m, E);
            }
        }
      } catch (E) {
        De(t, t.return, E);
      }
      if (t === e) {
        q = null;
        break;
      }
      var x = t.sibling;
      if (x !== null) {
        x.return = t.return, q = x;
        break;
      }
      q = t.return;
    }
  }
  var $0 = Math.ceil, ea = H.ReactCurrentDispatcher, Cs = H.ReactCurrentOwner, Et = H.ReactCurrentBatchConfig, _e = 0, Ke = null, Ve = null, Xe = 0, wt = 0, Tn = vr(0), He = 0, To = null, Wr = 0, ta = 0, Fs = 0, Ao = null, ut = null, Ps = 0, An = 1 / 0, nr = null, ra = !1, Ts = null, _r = null, na = !1, Er = null, oa = 0, zo = 0, As = null, ia = -1, aa = 0;
  function it() {
    return (_e & 6) !== 0 ? je() : ia !== -1 ? ia : ia = je();
  }
  function Sr(e) {
    return (e.mode & 1) === 0 ? 1 : (_e & 2) !== 0 && Xe !== 0 ? Xe & -Xe : m0.transition !== null ? (aa === 0 && (aa = Ac()), aa) : (e = Pe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Dc(e.type)), e);
  }
  function Nt(e, t, o, a) {
    if (50 < zo) throw zo = 0, As = null, Error(i(185));
    eo(e, o, a), ((_e & 2) === 0 || e !== Ke) && (e === Ke && ((_e & 2) === 0 && (ta |= o), He === 4 && Cr(e, Xe)), ct(e, a), o === 1 && _e === 0 && (t.mode & 1) === 0 && (An = je() + 500, Li && yr()));
  }
  function ct(e, t) {
    var o = e.callbackNode;
    mg(e, t);
    var a = mi(e, e === Ke ? Xe : 0);
    if (a === 0) o !== null && Fc(o), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = a & -a, e.callbackPriority !== t) {
      if (o != null && Fc(o), t === 1) e.tag === 0 ? h0(jf.bind(null, e)) : Ed(jf.bind(null, e)), c0(function() {
        (_e & 6) === 0 && yr();
      }), o = null;
      else {
        switch (zc(a)) {
          case 1:
            o = ul;
            break;
          case 4:
            o = Pc;
            break;
          case 16:
            o = di;
            break;
          case 536870912:
            o = Tc;
            break;
          default:
            o = di;
        }
        o = Qf(o, Df.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = o;
    }
  }
  function Df(e, t) {
    if (ia = -1, aa = 0, (_e & 6) !== 0) throw Error(i(327));
    var o = e.callbackNode;
    if (zn() && e.callbackNode !== o) return null;
    var a = mi(e, e === Ke ? Xe : 0);
    if (a === 0) return null;
    if ((a & 30) !== 0 || (a & e.expiredLanes) !== 0 || t) t = la(e, a);
    else {
      t = a;
      var l = _e;
      _e |= 2;
      var u = Vf();
      (Ke !== e || Xe !== t) && (nr = null, An = je() + 500, Yr(e, t));
      do
        try {
          R0();
          break;
        } catch (x) {
          Uf(e, x);
        }
      while (!0);
      Ql(), ea.current = u, _e = l, Ve !== null ? t = 0 : (Ke = null, Xe = 0, t = He);
    }
    if (t !== 0) {
      if (t === 2 && (l = cl(e), l !== 0 && (a = l, t = zs(e, l))), t === 1) throw o = To, Yr(e, 0), Cr(e, a), ct(e, je()), o;
      if (t === 6) Cr(e, a);
      else {
        if (l = e.current.alternate, (a & 30) === 0 && !I0(l) && (t = la(e, a), t === 2 && (u = cl(e), u !== 0 && (a = u, t = zs(e, u))), t === 1)) throw o = To, Yr(e, 0), Cr(e, a), ct(e, je()), o;
        switch (e.finishedWork = l, e.finishedLanes = a, t) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            Qr(e, ut, nr);
            break;
          case 3:
            if (Cr(e, a), (a & 130023424) === a && (t = Ps + 500 - je(), 10 < t)) {
              if (mi(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & a) !== a) {
                it(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = Ml(Qr.bind(null, e, ut, nr), t);
              break;
            }
            Qr(e, ut, nr);
            break;
          case 4:
            if (Cr(e, a), (a & 4194240) === a) break;
            for (t = e.eventTimes, l = -1; 0 < a; ) {
              var m = 31 - At(a);
              u = 1 << m, m = t[m], m > l && (l = m), a &= ~u;
            }
            if (a = l, a = je() - a, a = (120 > a ? 120 : 480 > a ? 480 : 1080 > a ? 1080 : 1920 > a ? 1920 : 3e3 > a ? 3e3 : 4320 > a ? 4320 : 1960 * $0(a / 1960)) - a, 10 < a) {
              e.timeoutHandle = Ml(Qr.bind(null, e, ut, nr), a);
              break;
            }
            Qr(e, ut, nr);
            break;
          case 5:
            Qr(e, ut, nr);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return ct(e, je()), e.callbackNode === o ? Df.bind(null, e) : null;
  }
  function zs(e, t) {
    var o = Ao;
    return e.current.memoizedState.isDehydrated && (Yr(e, t).flags |= 256), e = la(e, t), e !== 2 && (t = ut, ut = o, t !== null && $s(t)), e;
  }
  function $s(e) {
    ut === null ? ut = e : ut.push.apply(ut, e);
  }
  function I0(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var o = t.updateQueue;
        if (o !== null && (o = o.stores, o !== null)) for (var a = 0; a < o.length; a++) {
          var l = o[a], u = l.getSnapshot;
          l = l.value;
          try {
            if (!zt(u(), l)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (o = t.child, t.subtreeFlags & 16384 && o !== null) o.return = t, t = o;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Cr(e, t) {
    for (t &= ~Fs, t &= ~ta, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var o = 31 - At(t), a = 1 << o;
      e[o] = -1, t &= ~a;
    }
  }
  function jf(e) {
    if ((_e & 6) !== 0) throw Error(i(327));
    zn();
    var t = mi(e, 0);
    if ((t & 1) === 0) return ct(e, je()), null;
    var o = la(e, t);
    if (e.tag !== 0 && o === 2) {
      var a = cl(e);
      a !== 0 && (t = a, o = zs(e, a));
    }
    if (o === 1) throw o = To, Yr(e, 0), Cr(e, t), ct(e, je()), o;
    if (o === 6) throw Error(i(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Qr(e, ut, nr), ct(e, je()), null;
  }
  function Is(e, t) {
    var o = _e;
    _e |= 1;
    try {
      return e(t);
    } finally {
      _e = o, _e === 0 && (An = je() + 500, Li && yr());
    }
  }
  function Kr(e) {
    Er !== null && Er.tag === 0 && (_e & 6) === 0 && zn();
    var t = _e;
    _e |= 1;
    var o = Et.transition, a = Pe;
    try {
      if (Et.transition = null, Pe = 1, e) return e();
    } finally {
      Pe = a, Et.transition = o, _e = t, (_e & 6) === 0 && yr();
    }
  }
  function Ls() {
    wt = Tn.current, Ie(Tn);
  }
  function Yr(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var o = e.timeoutHandle;
    if (o !== -1 && (e.timeoutHandle = -1, u0(o)), Ve !== null) for (o = Ve.return; o !== null; ) {
      var a = o;
      switch (Bl(a), a.tag) {
        case 1:
          a = a.type.childContextTypes, a != null && $i();
          break;
        case 3:
          Cn(), Ie(at), Ie(Je), rs();
          break;
        case 5:
          es(a);
          break;
        case 4:
          Cn();
          break;
        case 13:
          Ie(Ne);
          break;
        case 19:
          Ie(Ne);
          break;
        case 10:
          Gl(a.type._context);
          break;
        case 22:
        case 23:
          Ls();
      }
      o = o.return;
    }
    if (Ke = e, Ve = e = Fr(e.current, null), Xe = wt = t, He = 0, To = null, Fs = ta = Wr = 0, ut = Ao = null, Vr !== null) {
      for (t = 0; t < Vr.length; t++) if (o = Vr[t], a = o.interleaved, a !== null) {
        o.interleaved = null;
        var l = a.next, u = o.pending;
        if (u !== null) {
          var m = u.next;
          u.next = l, a.next = m;
        }
        o.pending = a;
      }
      Vr = null;
    }
    return e;
  }
  function Uf(e, t) {
    do {
      var o = Ve;
      try {
        if (Ql(), Hi.current = Qi, Wi) {
          for (var a = Me.memoizedState; a !== null; ) {
            var l = a.queue;
            l !== null && (l.pending = null), a = a.next;
          }
          Wi = !1;
        }
        if (Hr = 0, We = Be = Me = null, _o = !1, Eo = 0, Cs.current = null, o === null || o.return === null) {
          He = 1, To = t, Ve = null;
          break;
        }
        e: {
          var u = e, m = o.return, x = o, E = t;
          if (t = Xe, x.flags |= 32768, E !== null && typeof E == "object" && typeof E.then == "function") {
            var z = E, U = x, V = U.tag;
            if ((U.mode & 1) === 0 && (V === 0 || V === 11 || V === 15)) {
              var j = U.alternate;
              j ? (U.updateQueue = j.updateQueue, U.memoizedState = j.memoizedState, U.lanes = j.lanes) : (U.updateQueue = null, U.memoizedState = null);
            }
            var X = ff(m);
            if (X !== null) {
              X.flags &= -257, pf(X, m, x, u, t), X.mode & 1 && df(u, z, t), t = X, E = z;
              var Z = t.updateQueue;
              if (Z === null) {
                var J = /* @__PURE__ */ new Set();
                J.add(E), t.updateQueue = J;
              } else Z.add(E);
              break e;
            } else {
              if ((t & 1) === 0) {
                df(u, z, t), Rs();
                break e;
              }
              E = Error(i(426));
            }
          } else if (Re && x.mode & 1) {
            var Ue = ff(m);
            if (Ue !== null) {
              (Ue.flags & 65536) === 0 && (Ue.flags |= 256), pf(Ue, m, x, u, t), Kl(Fn(E, x));
              break e;
            }
          }
          u = E = Fn(E, x), He !== 4 && (He = 2), Ao === null ? Ao = [u] : Ao.push(u), u = m;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var P = uf(u, E, t);
                Rd(u, P);
                break e;
              case 1:
                x = E;
                var S = u.type, T = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof S.getDerivedStateFromError == "function" || T !== null && typeof T.componentDidCatch == "function" && (_r === null || !_r.has(T)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var W = cf(u, x, t);
                  Rd(u, W);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        Hf(o);
      } catch (ee) {
        t = ee, Ve === o && o !== null && (Ve = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Vf() {
    var e = ea.current;
    return ea.current = Qi, e === null ? Qi : e;
  }
  function Rs() {
    (He === 0 || He === 3 || He === 2) && (He = 4), Ke === null || (Wr & 268435455) === 0 && (ta & 268435455) === 0 || Cr(Ke, Xe);
  }
  function la(e, t) {
    var o = _e;
    _e |= 2;
    var a = Vf();
    (Ke !== e || Xe !== t) && (nr = null, Yr(e, t));
    do
      try {
        L0();
        break;
      } catch (l) {
        Uf(e, l);
      }
    while (!0);
    if (Ql(), _e = o, ea.current = a, Ve !== null) throw Error(i(261));
    return Ke = null, Xe = 0, He;
  }
  function L0() {
    for (; Ve !== null; ) Bf(Ve);
  }
  function R0() {
    for (; Ve !== null && !ag(); ) Bf(Ve);
  }
  function Bf(e) {
    var t = Yf(e.alternate, e, wt);
    e.memoizedProps = e.pendingProps, t === null ? Hf(e) : Ve = t, Cs.current = null;
  }
  function Hf(e) {
    var t = e;
    do {
      var o = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (o = F0(o, t, wt), o !== null) {
          Ve = o;
          return;
        }
      } else {
        if (o = P0(o, t), o !== null) {
          o.flags &= 32767, Ve = o;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          He = 6, Ve = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Ve = t;
        return;
      }
      Ve = t = e;
    } while (t !== null);
    He === 0 && (He = 5);
  }
  function Qr(e, t, o) {
    var a = Pe, l = Et.transition;
    try {
      Et.transition = null, Pe = 1, N0(e, t, o, a);
    } finally {
      Et.transition = l, Pe = a;
    }
    return null;
  }
  function N0(e, t, o, a) {
    do
      zn();
    while (Er !== null);
    if ((_e & 6) !== 0) throw Error(i(327));
    o = e.finishedWork;
    var l = e.finishedLanes;
    if (o === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, o === e.current) throw Error(i(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = o.lanes | o.childLanes;
    if (gg(e, u), e === Ke && (Ve = Ke = null, Xe = 0), (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || na || (na = !0, Qf(di, function() {
      return zn(), null;
    })), u = (o.flags & 15990) !== 0, (o.subtreeFlags & 15990) !== 0 || u) {
      u = Et.transition, Et.transition = null;
      var m = Pe;
      Pe = 1;
      var x = _e;
      _e |= 4, Cs.current = null, A0(e, o), Lf(o, e), r0(Rl), wi = !!Ll, Rl = Ll = null, e.current = o, z0(o), lg(), _e = x, Pe = m, Et.transition = u;
    } else e.current = o;
    if (na && (na = !1, Er = e, oa = l), u = e.pendingLanes, u === 0 && (_r = null), cg(o.stateNode), ct(e, je()), t !== null) for (a = e.onRecoverableError, o = 0; o < t.length; o++) l = t[o], a(l.value, { componentStack: l.stack, digest: l.digest });
    if (ra) throw ra = !1, e = Ts, Ts = null, e;
    return (oa & 1) !== 0 && e.tag !== 0 && zn(), u = e.pendingLanes, (u & 1) !== 0 ? e === As ? zo++ : (zo = 0, As = e) : zo = 0, yr(), null;
  }
  function zn() {
    if (Er !== null) {
      var e = zc(oa), t = Et.transition, o = Pe;
      try {
        if (Et.transition = null, Pe = 16 > e ? 16 : e, Er === null) var a = !1;
        else {
          if (e = Er, Er = null, oa = 0, (_e & 6) !== 0) throw Error(i(331));
          var l = _e;
          for (_e |= 4, q = e.current; q !== null; ) {
            var u = q, m = u.child;
            if ((q.flags & 16) !== 0) {
              var x = u.deletions;
              if (x !== null) {
                for (var E = 0; E < x.length; E++) {
                  var z = x[E];
                  for (q = z; q !== null; ) {
                    var U = q;
                    switch (U.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Po(8, U, u);
                    }
                    var V = U.child;
                    if (V !== null) V.return = U, q = V;
                    else for (; q !== null; ) {
                      U = q;
                      var j = U.sibling, X = U.return;
                      if (Tf(U), U === z) {
                        q = null;
                        break;
                      }
                      if (j !== null) {
                        j.return = X, q = j;
                        break;
                      }
                      q = X;
                    }
                  }
                }
                var Z = u.alternate;
                if (Z !== null) {
                  var J = Z.child;
                  if (J !== null) {
                    Z.child = null;
                    do {
                      var Ue = J.sibling;
                      J.sibling = null, J = Ue;
                    } while (J !== null);
                  }
                }
                q = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && m !== null) m.return = u, q = m;
            else e: for (; q !== null; ) {
              if (u = q, (u.flags & 2048) !== 0) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Po(9, u, u.return);
              }
              var P = u.sibling;
              if (P !== null) {
                P.return = u.return, q = P;
                break e;
              }
              q = u.return;
            }
          }
          var S = e.current;
          for (q = S; q !== null; ) {
            m = q;
            var T = m.child;
            if ((m.subtreeFlags & 2064) !== 0 && T !== null) T.return = m, q = T;
            else e: for (m = S; q !== null; ) {
              if (x = q, (x.flags & 2048) !== 0) try {
                switch (x.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ji(9, x);
                }
              } catch (ee) {
                De(x, x.return, ee);
              }
              if (x === m) {
                q = null;
                break e;
              }
              var W = x.sibling;
              if (W !== null) {
                W.return = x.return, q = W;
                break e;
              }
              q = x.return;
            }
          }
          if (_e = l, yr(), Vt && typeof Vt.onPostCommitFiberRoot == "function") try {
            Vt.onPostCommitFiberRoot(fi, e);
          } catch {
          }
          a = !0;
        }
        return a;
      } finally {
        Pe = o, Et.transition = t;
      }
    }
    return !1;
  }
  function Wf(e, t, o) {
    t = Fn(o, t), t = uf(e, t, 1), e = xr(e, t, 1), t = it(), e !== null && (eo(e, 1, t), ct(e, t));
  }
  function De(e, t, o) {
    if (e.tag === 3) Wf(e, e, o);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Wf(t, e, o);
        break;
      } else if (t.tag === 1) {
        var a = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (_r === null || !_r.has(a))) {
          e = Fn(o, e), e = cf(t, e, 1), t = xr(t, e, 1), e = it(), t !== null && (eo(t, 1, e), ct(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function M0(e, t, o) {
    var a = e.pingCache;
    a !== null && a.delete(t), t = it(), e.pingedLanes |= e.suspendedLanes & o, Ke === e && (Xe & o) === o && (He === 4 || He === 3 && (Xe & 130023424) === Xe && 500 > je() - Ps ? Yr(e, 0) : Fs |= o), ct(e, t);
  }
  function Kf(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = hi, hi <<= 1, (hi & 130023424) === 0 && (hi = 4194304)));
    var o = it();
    e = er(e, t), e !== null && (eo(e, t, o), ct(e, o));
  }
  function O0(e) {
    var t = e.memoizedState, o = 0;
    t !== null && (o = t.retryLane), Kf(e, o);
  }
  function D0(e, t) {
    var o = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode, l = e.memoizedState;
        l !== null && (o = l.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      default:
        throw Error(i(314));
    }
    a !== null && a.delete(t), Kf(e, o);
  }
  var Yf;
  Yf = function(e, t, o) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || at.current) st = !0;
    else {
      if ((e.lanes & o) === 0 && (t.flags & 128) === 0) return st = !1, C0(e, t, o);
      st = (e.flags & 131072) !== 0;
    }
    else st = !1, Re && (t.flags & 1048576) !== 0 && Sd(t, Ni, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var a = t.type;
        qi(e, t), e = t.pendingProps;
        var l = yn(t, Je.current);
        Sn(t, o), l = is(null, t, a, e, l, o);
        var u = as();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, lt(a) ? (u = !0, Ii(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Zl(t), l.updater = Gi, t.stateNode = l, l._reactInternals = t, fs(t, a, e, o), t = gs(null, t, a, !0, u, o)) : (t.tag = 0, Re && u && Vl(t), ot(null, t, l, o), t = t.child), t;
      case 16:
        a = t.elementType;
        e: {
          switch (qi(e, t), e = t.pendingProps, l = a._init, a = l(a._payload), t.type = a, l = t.tag = U0(a), e = It(a, e), l) {
            case 0:
              t = ms(null, t, a, e, o);
              break e;
            case 1:
              t = yf(null, t, a, e, o);
              break e;
            case 11:
              t = hf(null, t, a, e, o);
              break e;
            case 14:
              t = mf(null, t, a, It(a.type, e), o);
              break e;
          }
          throw Error(i(
            306,
            a,
            ""
          ));
        }
        return t;
      case 0:
        return a = t.type, l = t.pendingProps, l = t.elementType === a ? l : It(a, l), ms(e, t, a, l, o);
      case 1:
        return a = t.type, l = t.pendingProps, l = t.elementType === a ? l : It(a, l), yf(e, t, a, l, o);
      case 3:
        e: {
          if (bf(t), e === null) throw Error(i(387));
          a = t.pendingProps, u = t.memoizedState, l = u.element, Ld(e, t), Vi(t, a, null, o);
          var m = t.memoizedState;
          if (a = m.element, u.isDehydrated) if (u = { element: a, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            l = Fn(Error(i(423)), t), t = xf(e, t, a, o, l);
            break e;
          } else if (a !== l) {
            l = Fn(Error(i(424)), t), t = xf(e, t, a, o, l);
            break e;
          } else for (vt = gr(t.stateNode.containerInfo.firstChild), gt = t, Re = !0, $t = null, o = $d(t, null, a, o), t.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (kn(), a === l) {
              t = rr(e, t, o);
              break e;
            }
            ot(e, t, a, o);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Md(t), e === null && Wl(t), a = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, m = l.children, Nl(a, l) ? m = null : u !== null && Nl(a, u) && (t.flags |= 32), wf(e, t), ot(e, t, m, o), t.child;
      case 6:
        return e === null && Wl(t), null;
      case 13:
        return kf(e, t, o);
      case 4:
        return Jl(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = _n(t, null, a, o) : ot(e, t, a, o), t.child;
      case 11:
        return a = t.type, l = t.pendingProps, l = t.elementType === a ? l : It(a, l), hf(e, t, a, l, o);
      case 7:
        return ot(e, t, t.pendingProps, o), t.child;
      case 8:
        return ot(e, t, t.pendingProps.children, o), t.child;
      case 12:
        return ot(e, t, t.pendingProps.children, o), t.child;
      case 10:
        e: {
          if (a = t.type._context, l = t.pendingProps, u = t.memoizedProps, m = l.value, ze(Di, a._currentValue), a._currentValue = m, u !== null) if (zt(u.value, m)) {
            if (u.children === l.children && !at.current) {
              t = rr(e, t, o);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var x = u.dependencies;
            if (x !== null) {
              m = u.child;
              for (var E = x.firstContext; E !== null; ) {
                if (E.context === a) {
                  if (u.tag === 1) {
                    E = tr(-1, o & -o), E.tag = 2;
                    var z = u.updateQueue;
                    if (z !== null) {
                      z = z.shared;
                      var U = z.pending;
                      U === null ? E.next = E : (E.next = U.next, U.next = E), z.pending = E;
                    }
                  }
                  u.lanes |= o, E = u.alternate, E !== null && (E.lanes |= o), Xl(
                    u.return,
                    o,
                    t
                  ), x.lanes |= o;
                  break;
                }
                E = E.next;
              }
            } else if (u.tag === 10) m = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (m = u.return, m === null) throw Error(i(341));
              m.lanes |= o, x = m.alternate, x !== null && (x.lanes |= o), Xl(m, o, t), m = u.sibling;
            } else m = u.child;
            if (m !== null) m.return = u;
            else for (m = u; m !== null; ) {
              if (m === t) {
                m = null;
                break;
              }
              if (u = m.sibling, u !== null) {
                u.return = m.return, m = u;
                break;
              }
              m = m.return;
            }
            u = m;
          }
          ot(e, t, l.children, o), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, a = t.pendingProps.children, Sn(t, o), l = kt(l), a = a(l), t.flags |= 1, ot(e, t, a, o), t.child;
      case 14:
        return a = t.type, l = It(a, t.pendingProps), l = It(a.type, l), mf(e, t, a, l, o);
      case 15:
        return gf(e, t, t.type, t.pendingProps, o);
      case 17:
        return a = t.type, l = t.pendingProps, l = t.elementType === a ? l : It(a, l), qi(e, t), t.tag = 1, lt(a) ? (e = !0, Ii(t)) : e = !1, Sn(t, o), lf(t, a, l), fs(t, a, l, o), gs(null, t, a, !0, e, o);
      case 19:
        return Ef(e, t, o);
      case 22:
        return vf(e, t, o);
    }
    throw Error(i(156, t.tag));
  };
  function Qf(e, t) {
    return Cc(e, t);
  }
  function j0(e, t, o, a) {
    this.tag = e, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function St(e, t, o, a) {
    return new j0(e, t, o, a);
  }
  function Ns(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function U0(e) {
    if (typeof e == "function") return Ns(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Q) return 11;
      if (e === Y) return 14;
    }
    return 2;
  }
  function Fr(e, t) {
    var o = e.alternate;
    return o === null ? (o = St(e.tag, t, e.key, e.mode), o.elementType = e.elementType, o.type = e.type, o.stateNode = e.stateNode, o.alternate = e, e.alternate = o) : (o.pendingProps = t, o.type = e.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = e.flags & 14680064, o.childLanes = e.childLanes, o.lanes = e.lanes, o.child = e.child, o.memoizedProps = e.memoizedProps, o.memoizedState = e.memoizedState, o.updateQueue = e.updateQueue, t = e.dependencies, o.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, o.sibling = e.sibling, o.index = e.index, o.ref = e.ref, o;
  }
  function sa(e, t, o, a, l, u) {
    var m = 2;
    if (a = e, typeof e == "function") Ns(e) && (m = 1);
    else if (typeof e == "string") m = 5;
    else e: switch (e) {
      case oe:
        return Gr(o.children, l, u, t);
      case xe:
        m = 8, l |= 8;
        break;
      case me:
        return e = St(12, o, t, l | 2), e.elementType = me, e.lanes = u, e;
      case te:
        return e = St(13, o, t, l), e.elementType = te, e.lanes = u, e;
      case A:
        return e = St(19, o, t, l), e.elementType = A, e.lanes = u, e;
      case R:
        return ua(o, l, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Se:
            m = 10;
            break e;
          case we:
            m = 9;
            break e;
          case Q:
            m = 11;
            break e;
          case Y:
            m = 14;
            break e;
          case G:
            m = 16, a = null;
            break e;
        }
        throw Error(i(130, e == null ? e : typeof e, ""));
    }
    return t = St(m, o, t, l), t.elementType = e, t.type = a, t.lanes = u, t;
  }
  function Gr(e, t, o, a) {
    return e = St(7, e, a, t), e.lanes = o, e;
  }
  function ua(e, t, o, a) {
    return e = St(22, e, a, t), e.elementType = R, e.lanes = o, e.stateNode = { isHidden: !1 }, e;
  }
  function Ms(e, t, o) {
    return e = St(6, e, null, t), e.lanes = o, e;
  }
  function Os(e, t, o) {
    return t = St(4, e.children !== null ? e.children : [], e.key, t), t.lanes = o, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function V0(e, t, o, a, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = dl(0), this.expirationTimes = dl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = dl(0), this.identifierPrefix = a, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function Ds(e, t, o, a, l, u, m, x, E) {
    return e = new V0(e, t, o, x, E), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = St(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: a, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Zl(u), e;
  }
  function B0(e, t, o) {
    var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ae, key: a == null ? null : "" + a, children: e, containerInfo: t, implementation: o };
  }
  function Gf(e) {
    if (!e) return wr;
    e = e._reactInternals;
    e: {
      if (Mr(e) !== e || e.tag !== 1) throw Error(i(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (lt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(i(171));
    }
    if (e.tag === 1) {
      var o = e.type;
      if (lt(o)) return kd(e, o, t);
    }
    return t;
  }
  function Xf(e, t, o, a, l, u, m, x, E) {
    return e = Ds(o, a, !0, e, l, u, m, x, E), e.context = Gf(null), o = e.current, a = it(), l = Sr(o), u = tr(a, l), u.callback = t ?? null, xr(o, u, l), e.current.lanes = l, eo(e, l, a), ct(e, a), e;
  }
  function ca(e, t, o, a) {
    var l = t.current, u = it(), m = Sr(l);
    return o = Gf(o), t.context === null ? t.context = o : t.pendingContext = o, t = tr(u, m), t.payload = { element: e }, a = a === void 0 ? null : a, a !== null && (t.callback = a), e = xr(l, t, m), e !== null && (Nt(e, l, m, u), Ui(e, l, m)), m;
  }
  function da(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function qf(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var o = e.retryLane;
      e.retryLane = o !== 0 && o < t ? o : t;
    }
  }
  function js(e, t) {
    qf(e, t), (e = e.alternate) && qf(e, t);
  }
  function H0() {
    return null;
  }
  var Zf = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Us(e) {
    this._internalRoot = e;
  }
  fa.prototype.render = Us.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(i(409));
    ca(e, t, null, null);
  }, fa.prototype.unmount = Us.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Kr(function() {
        ca(null, e, null, null);
      }), t[Xt] = null;
    }
  };
  function fa(e) {
    this._internalRoot = e;
  }
  fa.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Lc();
      e = { blockedOn: null, target: e, priority: t };
      for (var o = 0; o < pr.length && t !== 0 && t < pr[o].priority; o++) ;
      pr.splice(o, 0, e), o === 0 && Mc(e);
    }
  };
  function Vs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function pa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Jf() {
  }
  function W0(e, t, o, a, l) {
    if (l) {
      if (typeof a == "function") {
        var u = a;
        a = function() {
          var z = da(m);
          u.call(z);
        };
      }
      var m = Xf(t, a, e, 0, null, !1, !1, "", Jf);
      return e._reactRootContainer = m, e[Xt] = m.current, mo(e.nodeType === 8 ? e.parentNode : e), Kr(), m;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof a == "function") {
      var x = a;
      a = function() {
        var z = da(E);
        x.call(z);
      };
    }
    var E = Ds(e, 0, !1, null, null, !1, !1, "", Jf);
    return e._reactRootContainer = E, e[Xt] = E.current, mo(e.nodeType === 8 ? e.parentNode : e), Kr(function() {
      ca(t, E, o, a);
    }), E;
  }
  function ha(e, t, o, a, l) {
    var u = o._reactRootContainer;
    if (u) {
      var m = u;
      if (typeof l == "function") {
        var x = l;
        l = function() {
          var E = da(m);
          x.call(E);
        };
      }
      ca(t, m, e, l);
    } else m = W0(o, t, e, l, a);
    return da(m);
  }
  $c = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var o = Jn(t.pendingLanes);
          o !== 0 && (fl(t, o | 1), ct(t, je()), (_e & 6) === 0 && (An = je() + 500, yr()));
        }
        break;
      case 13:
        Kr(function() {
          var a = er(e, 1);
          if (a !== null) {
            var l = it();
            Nt(a, e, 1, l);
          }
        }), js(e, 1);
    }
  }, pl = function(e) {
    if (e.tag === 13) {
      var t = er(e, 134217728);
      if (t !== null) {
        var o = it();
        Nt(t, e, 134217728, o);
      }
      js(e, 134217728);
    }
  }, Ic = function(e) {
    if (e.tag === 13) {
      var t = Sr(e), o = er(e, t);
      if (o !== null) {
        var a = it();
        Nt(o, e, t, a);
      }
      js(e, t);
    }
  }, Lc = function() {
    return Pe;
  }, Rc = function(e, t) {
    var o = Pe;
    try {
      return Pe = e, t();
    } finally {
      Pe = o;
    }
  }, il = function(e, t, o) {
    switch (t) {
      case "input":
        if (Ut(e, o), t = o.name, o.type === "radio" && t != null) {
          for (o = e; o.parentNode; ) o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < o.length; t++) {
            var a = o[t];
            if (a !== e && a.form === e.form) {
              var l = zi(a);
              if (!l) throw Error(i(90));
              li(a), Ut(a, l);
            }
          }
        }
        break;
      case "textarea":
        cc(e, o);
        break;
      case "select":
        t = o.value, t != null && ln(e, !!o.multiple, t, !1);
    }
  }, yc = Is, bc = Kr;
  var K0 = { usingClientEntryPoint: !1, Events: [wo, vn, zi, vc, wc, Is] }, $o = { findFiberByHostInstance: Or, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Y0 = { bundleType: $o.bundleType, version: $o.version, rendererPackageName: $o.rendererPackageName, rendererConfig: $o.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: H.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Ec(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: $o.findFiberByHostInstance || H0, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ma = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ma.isDisabled && ma.supportsFiber) try {
      fi = ma.inject(Y0), Vt = ma;
    } catch {
    }
  }
  return dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K0, dt.createPortal = function(e, t) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Vs(t)) throw Error(i(200));
    return B0(e, t, null, o);
  }, dt.createRoot = function(e, t) {
    if (!Vs(e)) throw Error(i(299));
    var o = !1, a = "", l = Zf;
    return t != null && (t.unstable_strictMode === !0 && (o = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Ds(e, 1, !1, null, null, o, !1, a, l), e[Xt] = t.current, mo(e.nodeType === 8 ? e.parentNode : e), new Us(t);
  }, dt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = Ec(t), e = e === null ? null : e.stateNode, e;
  }, dt.flushSync = function(e) {
    return Kr(e);
  }, dt.hydrate = function(e, t, o) {
    if (!pa(t)) throw Error(i(200));
    return ha(null, e, t, !0, o);
  }, dt.hydrateRoot = function(e, t, o) {
    if (!Vs(e)) throw Error(i(405));
    var a = o != null && o.hydratedSources || null, l = !1, u = "", m = Zf;
    if (o != null && (o.unstable_strictMode === !0 && (l = !0), o.identifierPrefix !== void 0 && (u = o.identifierPrefix), o.onRecoverableError !== void 0 && (m = o.onRecoverableError)), t = Xf(t, null, e, 1, o ?? null, l, !1, u, m), e[Xt] = t.current, mo(e), a) for (e = 0; e < a.length; e++) o = a[e], l = o._getVersion, l = l(o._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [o, l] : t.mutableSourceEagerHydrationData.push(
      o,
      l
    );
    return new fa(t);
  }, dt.render = function(e, t, o) {
    if (!pa(t)) throw Error(i(200));
    return ha(null, e, t, !1, o);
  }, dt.unmountComponentAtNode = function(e) {
    if (!pa(e)) throw Error(i(40));
    return e._reactRootContainer ? (Kr(function() {
      ha(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Xt] = null;
      });
    }), !0) : !1;
  }, dt.unstable_batchedUpdates = Is, dt.unstable_renderSubtreeIntoContainer = function(e, t, o, a) {
    if (!pa(o)) throw Error(i(200));
    if (e == null || e._reactInternals === void 0) throw Error(i(38));
    return ha(e, t, o, !1, a);
  }, dt.version = "18.3.1-next-f1338f8080-20240426", dt;
}
var up;
function gh() {
  if (up) return Ws.exports;
  up = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (n) {
        console.error(n);
      }
  }
  return r(), Ws.exports = J0(), Ws.exports;
}
var cp;
function ev() {
  if (cp) return ga;
  cp = 1;
  var r = gh();
  return ga.createRoot = r.createRoot, ga.hydrateRoot = r.hydrateRoot, ga;
}
var tv = ev();
const rv = `:root{--border-highlight-color: rgb(7, 45, 162);--border-neutral-bold-color: rgba(0, 0, 0, .8);--border-neutral-regular-color: rgba(0, 0, 0, .3);--border-neutral-subtle-color: rgba(0, 0, 0, .1);--border-neutral-minimal-color: rgba(0, 0, 0, .05);--border-positive-color: rgb(43, 92, 25);--border-warning-color: rgb(195, 92, 0);--border-negative-color: rgb(203, 31, 31);--surface-highlight-subtle-color: rgb(211, 221, 253);--surface-highlight-bold-color: rgb(7, 45, 162);--surface-container-color: rgb(255, 255, 255);--surface-level-01-color: rgba(250, 250, 250, .98);--surface-level-02-color: rgba(242, 242, 242, .95);--surface-level-03-color: rgba(235, 235, 235, .92);--surface-inverse-color: rgba(0, 0, 0, .97);--surface-positive-subtle-color: rgb(222, 242, 214);--surface-positive-bold-color: rgb(43, 92, 25);--surface-warning-subtle-color: rgb(255, 228, 204);--surface-warning-bold-color: rgb(137, 64, 0);--surface-negative-subtle-color: rgb(245, 210, 210);--surface-negative-bold-color: rgb(203, 31, 31);--surface-overlay-color: rgba(255, 255, 255, .97);--content-highlight-color: rgb(7, 45, 162);--content-neutral-bold-color: rgba(15, 15, 15, .95);--content-neutral-regular-color: rgba(15, 15, 15, .75);--content-neutral-subtle-color: rgba(15, 15, 15, .6);--content-inverse-bold-color: rgb(255, 255, 255);--content-inverse-regular-color: rgba(255, 255, 255, .7);--content-inverse-subtle-color: rgba(255, 255, 255, .6);--content-positive-color: rgb(28, 60, 17);--content-warning-color: rgb(92, 43, 0);--content-negative-color: rgb(155, 24, 24);--interactive-highlight-color: rgb(7, 45, 162);--interactive-neutral-bold-color: rgb(0, 0, 0);--interactive-neutral-regular-color: rgba(235, 235, 235, .92);--interactive-neutral-subtle-color: rgba(242, 242, 242, .95);--interactive-neutral-minimal-color: rgb(255, 255, 255);--interactive-inverse-color: rgb(255, 255, 255);--interactive-negative-bold-color: rgb(155, 24, 24);--interactive-negative-subtle-color: rgb(245, 210, 210);--background-base-color: rgb(235, 240, 254);--background-accent-color: rgb(123, 154, 250);--background-glow-color: rgb(186, 132, 241);--background-backdrop-color: rgba(255, 255, 255, .8);--paloma-font-family-body: Electronic Arts Text;--paloma-font-family-heading: Electronic Arts Display;--font-size-body-medium: 1rem;--line-height-body-medium: 1.5rem;--font-size-body-large: 1.125rem;--line-height-body-large: 2rem;--font-size-body-x-small: .75rem;--line-height-body-x-small: 1rem;--font-size-body-small: .875rem;--line-height-body-small: 1.25rem;--font-size-heading-x-small: 1.25rem;--line-height-heading-x-small: 1.75rem;--font-size-lg-heading-large: 3.25rem;--line-height-lg-heading-large: 4rem;--font-size-xs-heading-large: 2rem;--line-height-xs-heading-large: 2.5rem;--font-size-heading-small: 1.75rem;--line-height-heading-small: 2.25rem;--font-size-xs-heading-medium: 2rem;--line-height-xs-heading-medium: 2.5rem;--font-size-lg-heading-x-large: 4.5rem;--line-height-lg-heading-x-large: 5rem;--font-size-lg-heading-medium: 2.25rem;--line-height-lg-heading-medium: 2.75rem;--font-size-xs-heading-x-large: 2.25rem;--line-height-xs-heading-x-large: 2.625rem }[data-paloma-mode=dark]{--border-highlight-color: rgb(123, 154, 250);--border-neutral-bold-color: rgba(255, 255, 255, .8);--border-neutral-regular-color: rgba(255, 255, 255, .3);--border-neutral-subtle-color: rgba(255, 255, 255, .1);--border-neutral-minimal-color: rgba(255, 255, 255, .05);--border-positive-color: rgb(88, 188, 52);--border-warning-color: rgb(255, 120, 0);--border-negative-color: rgb(221, 108, 108);--surface-highlight-subtle-color: rgba(211, 221, 253, .1);--surface-highlight-bold-color: rgb(211, 221, 253);--surface-container-color: rgba(15, 15, 15, .06);--surface-level-01-color: rgba(31, 31, 31, .12);--surface-level-02-color: rgba(61, 61, 61, .16);--surface-level-03-color: rgba(122, 122, 122, .2);--surface-inverse-color: rgba(255, 255, 255, .97);--surface-positive-subtle-color: rgba(27, 58, 16, .4);--surface-positive-bold-color: rgb(88, 188, 52);--surface-warning-subtle-color: rgba(79, 37, 0, .5);--surface-warning-bold-color: rgb(255, 120, 0);--surface-negative-subtle-color: rgba(63, 10, 10, .5);--surface-negative-bold-color: rgb(221, 108, 108);--surface-overlay-color: rgba(0, 0, 0, .97);--content-highlight-color: rgb(123, 154, 250);--content-neutral-bold-color: rgba(255, 255, 255, .97);--content-neutral-regular-color: rgba(255, 255, 255, .75);--content-neutral-subtle-color: rgba(255, 255, 255, .5);--content-inverse-bold-color: rgb(15, 15, 15);--content-inverse-regular-color: rgba(0, 0, 0, .75);--content-inverse-subtle-color: rgba(0, 0, 0, .6);--content-positive-color: rgb(188, 228, 174);--content-warning-color: rgb(255, 120, 0);--content-negative-color: rgb(229, 144, 144);--interactive-highlight-color: rgb(123, 154, 250);--interactive-neutral-bold-color: rgb(255, 255, 255);--interactive-neutral-regular-color: rgba(122, 122, 122, .2);--interactive-neutral-subtle-color: rgba(61, 61, 61, .16);--interactive-neutral-minimal-color: rgba(61, 61, 61, .16);--interactive-inverse-color: rgb(15, 15, 15);--interactive-negative-bold-color: rgb(245, 210, 210);--interactive-negative-subtle-color: rgb(229, 144, 144);--background-base-color: rgb(1, 8, 29);--background-accent-color: rgb(109, 23, 196);--background-glow-color: rgb(9, 61, 216);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-mode=light]{--border-highlight-color: rgb(7, 45, 162);--border-neutral-bold-color: rgba(0, 0, 0, .8);--border-neutral-regular-color: rgba(0, 0, 0, .3);--border-neutral-subtle-color: rgba(0, 0, 0, .1);--border-neutral-minimal-color: rgba(0, 0, 0, .05);--border-positive-color: rgb(43, 92, 25);--border-warning-color: rgb(195, 92, 0);--border-negative-color: rgb(203, 31, 31);--surface-highlight-subtle-color: rgb(211, 221, 253);--surface-highlight-bold-color: rgb(7, 45, 162);--surface-container-color: rgb(255, 255, 255);--surface-level-01-color: rgba(250, 250, 250, .98);--surface-level-02-color: rgba(242, 242, 242, .95);--surface-level-03-color: rgba(235, 235, 235, .92);--surface-inverse-color: rgba(0, 0, 0, .97);--surface-positive-subtle-color: rgb(222, 242, 214);--surface-positive-bold-color: rgb(43, 92, 25);--surface-warning-subtle-color: rgb(255, 228, 204);--surface-warning-bold-color: rgb(137, 64, 0);--surface-negative-subtle-color: rgb(245, 210, 210);--surface-negative-bold-color: rgb(203, 31, 31);--surface-overlay-color: rgba(255, 255, 255, .97);--content-highlight-color: rgb(7, 45, 162);--content-neutral-bold-color: rgba(15, 15, 15, .95);--content-neutral-regular-color: rgba(15, 15, 15, .75);--content-neutral-subtle-color: rgba(15, 15, 15, .6);--content-inverse-bold-color: rgb(255, 255, 255);--content-inverse-regular-color: rgba(255, 255, 255, .7);--content-inverse-subtle-color: rgba(255, 255, 255, .6);--content-positive-color: rgb(28, 60, 17);--content-warning-color: rgb(92, 43, 0);--content-negative-color: rgb(155, 24, 24);--interactive-highlight-color: rgb(7, 45, 162);--interactive-neutral-bold-color: rgb(0, 0, 0);--interactive-neutral-regular-color: rgba(235, 235, 235, .92);--interactive-neutral-subtle-color: rgba(242, 242, 242, .95);--interactive-neutral-minimal-color: rgb(255, 255, 255);--interactive-inverse-color: rgb(255, 255, 255);--interactive-negative-bold-color: rgb(155, 24, 24);--interactive-negative-subtle-color: rgb(245, 210, 210);--background-base-color: rgb(235, 240, 254);--background-accent-color: rgb(123, 154, 250);--background-glow-color: rgb(186, 132, 241);--background-backdrop-color: rgba(255, 255, 255, .8);--paloma-font-family-body: Electronic Arts Text;--paloma-font-family-heading: Electronic Arts Display }[data-paloma-theme=ea-blue][data-paloma-mode=light]{--border-highlight-color: rgb(7, 45, 162);--surface-highlight-subtle-color: rgb(211, 221, 253);--surface-highlight-bold-color: rgb(7, 45, 162);--content-highlight-color: rgb(7, 45, 162);--interactive-highlight-color: rgb(7, 45, 162);--background-base-color: rgb(235, 240, 254);--background-accent-color: rgb(123, 154, 250);--background-glow-color: rgb(186, 132, 241);--background-backdrop-color: rgba(255, 255, 255, .8) }[data-paloma-theme=ea-blue][data-paloma-mode=dark]{--border-highlight-color: rgb(123, 154, 250);--surface-highlight-subtle-color: rgba(211, 221, 253, .1);--surface-highlight-bold-color: rgb(211, 221, 253);--content-highlight-color: rgb(123, 154, 250);--interactive-highlight-color: rgb(123, 154, 250);--background-base-color: rgb(1, 8, 29);--background-accent-color: rgb(109, 23, 196);--background-glow-color: rgb(9, 61, 216);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-theme=ea-sims][data-paloma-mode=light]{--border-highlight-color: rgb(30, 134, 179);--surface-highlight-subtle-color: rgba(124, 203, 236, .1);--surface-highlight-bold-color: rgb(22, 101, 134);--content-highlight-color: rgb(22, 101, 134);--interactive-highlight-color: rgb(31, 52, 98);--background-base-color: rgb(235, 238, 246);--background-accent-color: rgb(168, 220, 243);--background-glow-color: rgb(173, 187, 219);--background-backdrop-color: rgba(255, 255, 255, .8) }[data-paloma-theme=ea-sims][data-paloma-mode=dark]{--border-highlight-color: rgb(30, 134, 179);--surface-highlight-subtle-color: rgba(81, 185, 230, .1);--surface-highlight-bold-color: rgb(168, 220, 243);--content-highlight-color: rgb(168, 220, 243);--interactive-highlight-color: rgb(37, 168, 224);--background-base-color: rgb(20, 34, 66);--background-accent-color: rgb(37, 168, 224);--background-glow-color: rgb(51, 86, 164);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-theme=fc-green][data-paloma-mode=light]{--border-highlight-color: rgb(4, 146, 62);--surface-highlight-subtle-color: rgba(57, 246, 134, .1);--surface-highlight-bold-color: rgb(4, 146, 62);--content-highlight-color: rgb(3, 98, 42);--interactive-highlight-color: rgb(3, 98, 42);--background-base-color: rgb(227, 251, 233);--background-accent-color: rgb(106, 248, 164);--background-glow-color: rgb(7, 244, 104);--background-backdrop-color: rgba(255, 255, 255, .8) }[data-paloma-theme=fc-green][data-paloma-mode=dark]{--border-highlight-color: rgb(4, 146, 62);--surface-highlight-subtle-color: rgba(106, 248, 164, .1);--surface-highlight-bold-color: rgb(57, 246, 134);--content-highlight-color: rgb(7, 244, 104);--interactive-highlight-color: rgb(6, 195, 83);--background-base-color: rgb(2, 11, 7);--background-accent-color: rgb(3, 98, 42);--background-glow-color: rgb(7, 244, 104);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-theme=ea-madden][data-paloma-mode=dark]{--border-highlight-color: rgb(255, 41, 0);--surface-highlight-subtle-color: rgba(255, 88, 56, .1);--surface-highlight-bold-color: rgb(255, 88, 56);--content-highlight-color: rgb(255, 88, 56);--interactive-highlight-color: rgb(255, 88, 56);--background-base-color: rgb(0, 0, 0);--background-accent-color: rgb(255, 127, 102);--background-glow-color: rgb(255, 41, 0);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-theme=ea-madden][data-paloma-mode=light]{--border-highlight-color: rgb(255, 88, 56);--surface-highlight-subtle-color: rgba(255, 41, 0, .1);--surface-highlight-bold-color: rgb(255, 41, 0);--content-highlight-color: rgb(204, 33, 0);--interactive-highlight-color: rgb(204, 33, 0);--background-base-color: rgb(255, 238, 235);--background-accent-color: rgb(255, 222, 215);--background-glow-color: rgb(255, 212, 204);--background-backdrop-color: rgba(255, 255, 255, .8) }[data-paloma-theme=ea-battlefield6][data-paloma-mode=light]{--border-highlight-color: rgb(255, 60, 0);--surface-highlight-subtle-color: rgba(229, 54, 0, .1);--surface-highlight-bold-color: rgb(229, 54, 0);--content-highlight-color: rgb(204, 48, 0);--interactive-highlight-color: rgb(204, 48, 0);--background-base-color: rgb(191, 202, 209);--background-accent-color: rgb(255, 216, 204);--background-glow-color: rgb(255, 177, 153);--background-backdrop-color: rgba(255, 255, 255, .8) }[data-paloma-theme=ea-battlefield6][data-paloma-mode=dark]{--border-highlight-color: rgb(229, 54, 0);--surface-highlight-subtle-color: rgba(255, 60, 0, .1);--surface-highlight-bold-color: rgb(255, 60, 0);--content-highlight-color: rgb(255, 60, 0);--interactive-highlight-color: rgb(255, 60, 0);--background-base-color: rgb(0, 0, 0);--background-accent-color: rgb(255, 99, 51);--background-glow-color: rgb(229, 54, 0);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-theme=purple][data-paloma-mode=light]{--border-highlight-color: rgb(217, 115, 186);--surface-highlight-subtle-color: rgb(243, 212, 234);--surface-highlight-bold-color: rgb(151, 32, 115);--content-highlight-color: rgb(151, 32, 115);--interactive-highlight-color: rgb(151, 32, 115);--background-base-color: rgb(252, 245, 250);--background-accent-color: rgb(217, 115, 186);--background-glow-color: rgb(186, 132, 241);--background-backdrop-color: rgba(255, 255, 255, .8) }[data-paloma-theme=purple][data-paloma-mode=dark]{--border-highlight-color: rgb(151, 32, 115);--surface-highlight-subtle-color: rgba(243, 212, 234, .1);--surface-highlight-bold-color: rgb(243, 212, 234);--content-highlight-color: rgb(217, 115, 186);--interactive-highlight-color: rgb(217, 115, 186);--background-base-color: rgb(22, 5, 17);--background-accent-color: rgb(151, 32, 115);--background-glow-color: rgb(135, 42, 230);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-theme=red][data-paloma-mode=light]{--border-highlight-color: rgb(229, 144, 144);--surface-highlight-subtle-color: rgb(245, 210, 210);--surface-highlight-bold-color: rgb(109, 17, 17);--content-highlight-color: rgb(109, 17, 17);--interactive-highlight-color: rgb(109, 17, 17);--background-base-color: rgb(255, 235, 235);--background-accent-color: rgb(229, 144, 144);--background-glow-color: rgb(229, 144, 144);--background-backdrop-color: rgba(255, 255, 255, .8) }[data-paloma-theme=red][data-paloma-mode=dark]{--border-highlight-color: rgb(109, 17, 17);--surface-highlight-subtle-color: rgba(245, 210, 210, .1);--surface-highlight-bold-color: rgb(245, 210, 210);--content-highlight-color: rgb(229, 144, 144);--interactive-highlight-color: rgb(229, 144, 144);--background-base-color: rgb(22, 3, 3);--background-accent-color: rgb(155, 24, 24);--background-glow-color: rgb(224, 0, 0);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-theme=ea-madden][data-paloma-variant=loyalty][data-paloma-mode=dark]{--background-glow-color: rgba(234, 205, 111, .3);--content-highlight-color: rgb(234, 205, 111) }[type=search]::-webkit-search-decoration{display:none}[type=search]::-webkit-search-cancel-button{display:none}[type=search]::-webkit-search-results-button{display:none}[type=search]::-webkit-search-results-decoration{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.container{width:100%;margin-right:auto;margin-left:auto;padding-right:24px;padding-left:24px}@media(min-width:1440px){.container{max-width:1440px;padding-right:40px;padding-left:40px}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.visible{visibility:visible}.invisible{visibility:hidden}.collapse{visibility:collapse}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.\\!relative{position:relative!important}.relative{position:relative}.\\!sticky{position:sticky!important}.sticky{position:sticky}.inset-0{top:0;right:0;bottom:0;left:0}.inset-x-0{left:0;right:0}.-bottom-0{bottom:-0px}.-bottom-0\\.5{bottom:-.125rem}.-bottom-1{bottom:-.25rem}.-bottom-1\\.5{bottom:-.375rem}.-bottom-2{bottom:-.5rem}.-bottom-3{bottom:-.75rem}.-bottom-3\\.5{bottom:-.875rem}.-bottom-8{bottom:-2rem}.-bottom-\\[6px\\]{bottom:-6px}.-left-0{left:-0px}.-left-0\\.5{left:-.125rem}.-left-2{left:-.5rem}.-left-8{left:-2rem}.-left-\\[125\\%\\]{left:-125%}.-left-\\[20px\\]{left:-20px}.-left-\\[50\\%\\]{left:-50%}.-right-0{right:-0px}.-right-0\\.5{right:-.125rem}.-right-2{right:-.5rem}.-right-\\[40\\%\\]{right:-40%}.-right-\\[50\\%\\]{right:-50%}.-top-0{top:-0px}.-top-0\\.5{top:-.125rem}.-top-1{top:-.25rem}.-top-1\\.5{top:-.375rem}.-top-10{top:-2.5rem}.-top-2{top:-.5rem}.-top-3{top:-.75rem}.-top-3\\.5{top:-.875rem}.bottom-0{bottom:0}.bottom-1{bottom:.25rem}.bottom-2{bottom:.5rem}.bottom-\\[10\\%\\]{bottom:10%}.end-0{inset-inline-end:0px}.left-0{left:0}.left-1\\/2{left:50%}.left-4{left:1rem}.left-\\[-350px\\]{left:-350px}.left-\\[12\\.5\\%\\]{left:12.5%}.right-0{right:0}.right-3{right:.75rem}.right-\\[15\\%\\]{right:15%}.top-0{top:0}.top-1{top:.25rem}.top-12{top:3rem}.top-14{top:3.5rem}.top-2{top:.5rem}.top-28{top:7rem}.top-3{top:.75rem}.top-4{top:1rem}.top-\\[10\\%\\]{top:10%}.top-\\[20\\%\\]{top:20%}.top-\\[7\\.25rem\\]{top:7.25rem}.top-\\[90vh\\]{top:90vh}.-z-\\[1\\]{z-index:-1}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.z-\\[10\\]{z-index:10}.z-\\[15\\]{z-index:15}.z-\\[2147483646\\]{z-index:2147483646}.z-\\[2147483647\\]{z-index:2147483647}.z-\\[90\\]{z-index:90}.col-span-4{grid-column:span 4 / span 4}.col-span-full{grid-column:1 / -1}.\\!col-start-3{grid-column-start:3!important}.m-0{margin:0}.m-auto{margin:auto}.mx-0{margin-left:0;margin-right:0}.mx-0\\.5{margin-left:.125rem;margin-right:.125rem}.mx-1{margin-left:.25rem;margin-right:.25rem}.mx-10{margin-left:2.5rem;margin-right:2.5rem}.mx-auto{margin-left:auto;margin-right:auto}.my-0{margin-top:0;margin-bottom:0}.my-1{margin-top:.25rem;margin-bottom:.25rem}.my-2{margin-top:.5rem;margin-bottom:.5rem}.my-3{margin-top:.75rem;margin-bottom:.75rem}.my-4{margin-top:1rem;margin-bottom:1rem}.my-auto{margin-top:auto;margin-bottom:auto}.-mb-2{margin-bottom:-.5rem}.-ms-10{margin-inline-start:-2.5rem}.-mt-10{margin-top:-2.5rem}.-mt-20{margin-top:-5rem}.-mt-6{margin-top:-1.5rem}.-mt-\\[52px\\]{margin-top:-52px}.-mt-\\[72px\\]{margin-top:-72px}.mb-1{margin-bottom:.25rem}.mb-10{margin-bottom:2.5rem}.mb-2{margin-bottom:.5rem}.mb-20{margin-bottom:5rem}.mb-3{margin-bottom:.75rem}.mb-5{margin-bottom:1.25rem}.mb-6{margin-bottom:1.5rem}.mb-\\[52px\\]{margin-bottom:52px}.mb-\\[72px\\]{margin-bottom:72px}.ml-0{margin-left:0}.ml-4{margin-left:1rem}.ml-5{margin-left:1.25rem}.ml-6{margin-left:1.5rem}.ml-8{margin-left:2rem}.mr-1{margin-right:.25rem}.mr-4{margin-right:1rem}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-20{margin-top:5rem}.mt-3{margin-top:.75rem}.mt-32{margin-top:8rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.mt-96{margin-top:24rem}.mt-auto{margin-top:auto}.box-border{box-sizing:border-box}.box-content{box-sizing:content-box}.line-clamp-1{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.line-clamp-2{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.line-clamp-3{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3}.line-clamp-4{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4}.line-clamp-5{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:5}.line-clamp-6{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:6}.line-clamp-none{overflow:visible;display:block;-webkit-box-orient:horizontal;-webkit-line-clamp:none}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.contents{display:contents}.hidden{display:none}.aspect-\\[16\\/9\\]{aspect-ratio:16/9}.aspect-\\[2\\/3\\]{aspect-ratio:2/3}.aspect-\\[3\\/2\\]{aspect-ratio:3/2}.aspect-\\[9\\/16\\]{aspect-ratio:9/16}.aspect-square{aspect-ratio:1 / 1}.size-8{width:2rem;height:2rem}.h-1{height:.25rem}.h-10{height:2.5rem}.h-11{height:2.75rem}.h-14{height:3.5rem}.h-16{height:4rem}.h-2{height:.5rem}.h-2\\.5{height:.625rem}.h-20{height:5rem}.h-24{height:6rem}.h-3{height:.75rem}.h-40{height:10rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-\\[100dvh\\]{height:100dvh}.h-\\[100px\\]{height:100px}.h-\\[100vh\\]{height:100vh}.h-\\[106px\\]{height:106px}.h-\\[110px\\]{height:110px}.h-\\[120vh\\]{height:120vh}.h-\\[140px\\]{height:140px}.h-\\[160px\\]{height:160px}.h-\\[1lh\\]{height:1lh}.h-\\[200px\\]{height:200px}.h-\\[300px\\]{height:300px}.h-\\[32px\\]{height:32px}.h-\\[340px\\]{height:340px}.h-\\[400px\\]{height:400px}.h-\\[58px\\]{height:58px}.h-\\[62px\\]{height:62px}.h-\\[64px\\]{height:64px}.h-\\[68px\\]{height:68px}.h-\\[700px\\]{height:700px}.h-\\[70px\\]{height:70px}.h-\\[72px\\]{height:72px}.h-\\[900px\\]{height:900px}.h-\\[90vh\\]{height:90vh}.h-\\[calc\\(100vh_-_2em\\)\\]{height:calc(100vh - 2em)}.h-\\[calc\\(var\\(--vh\\)\\*100\\)\\]{height:calc(var(--vh) * 100)}.h-auto{height:auto}.h-fit{height:-moz-fit-content;height:fit-content}.h-full{height:100%}.h-screen{height:100vh}.max-h-\\[900px\\]{max-height:900px}.max-h-\\[calc\\(100dvh_-_0\\.625rem\\)\\]{max-height:calc(100dvh - .625rem)}.max-h-\\[calc\\(100vh_-_0\\.625rem\\)\\]{max-height:calc(100vh - .625rem)}.max-h-\\[calc\\(var\\(--vh\\)\\*100_-_0\\.625rem\\)\\]{max-height:calc(var(--vh) * 100 - .625rem)}.max-h-full{max-height:100%}.max-h-screen{max-height:100vh}.min-h-24{min-height:6rem}.min-h-6{min-height:1.5rem}.min-h-\\[100dvh\\]{min-height:100dvh}.min-h-\\[100vh\\]{min-height:100vh}.min-h-\\[1px\\]{min-height:1px}.min-h-\\[320px\\]{min-height:320px}.min-h-\\[900px\\]{min-height:900px}.min-h-screen{min-height:100vh}.w-0{width:0px}.w-1{width:.25rem}.w-10{width:2.5rem}.w-11{width:2.75rem}.w-12{width:3rem}.w-14{width:3.5rem}.w-16{width:4rem}.w-2{width:.5rem}.w-2\\.5{width:.625rem}.w-20{width:5rem}.w-24{width:6rem}.w-3{width:.75rem}.w-3\\/4{width:75%}.w-40{width:10rem}.w-48{width:12rem}.w-6{width:1.5rem}.w-8{width:2rem}.w-\\[100px\\]{width:100px}.w-\\[100vw\\]{width:100vw}.w-\\[110px\\]{width:110px}.w-\\[1280px\\]{width:1280px}.w-\\[136px\\]{width:136px}.w-\\[140px\\]{width:140px}.w-\\[148px\\]{width:148px}.w-\\[175\\%\\]{width:175%}.w-\\[200\\%\\]{width:200%}.w-\\[200px\\]{width:200px}.w-\\[250\\%\\]{width:250%}.w-\\[250px\\]{width:250px}.w-\\[256px\\]{width:256px}.w-\\[300px\\]{width:300px}.w-\\[30vw\\]{width:30vw}.w-\\[312px\\]{width:312px}.w-\\[32px\\]{width:32px}.w-\\[393px\\]{width:393px}.w-\\[400px\\]{width:400px}.w-\\[500px\\]{width:500px}.w-\\[58px\\]{width:58px}.w-\\[6\\.25rem\\]{width:6.25rem}.w-\\[600px\\]{width:600px}.w-\\[62px\\]{width:62px}.w-\\[64px\\]{width:64px}.w-\\[68px\\]{width:68px}.w-\\[700px\\]{width:700px}.w-\\[70px\\]{width:70px}.w-\\[72px\\]{width:72px}.w-\\[73px\\]{width:73px}.w-\\[800px\\]{width:800px}.w-\\[80vw\\]{width:80vw}.w-\\[9\\.375rem\\]{width:9.375rem}.w-\\[90vw\\]{width:90vw}.w-\\[95vw\\]{width:95vw}.w-auto{width:auto}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.w-min{width:-moz-min-content;width:min-content}.w-screen{width:100vw}.min-w-0{min-width:0px}.min-w-36{min-width:9rem}.min-w-6{min-width:1.5rem}.min-w-\\[0\\]{min-width:0}.min-w-\\[100px\\]{min-width:100px}.min-w-\\[140px\\]{min-width:140px}.min-w-\\[1px\\]{min-width:1px}.min-w-\\[280px\\]{min-width:280px}.min-w-\\[clamp\\(52\\.75rem\\,_100vw\\,_120rem\\)\\]{min-width:clamp(52.75rem,100vw,120rem)}.min-w-\\[min\\(32\\.188rem\\,_50\\.688rem\\)\\]{min-width:min(32.188rem,50.688rem)}.min-w-fit{min-width:-moz-fit-content;min-width:fit-content}.max-w-\\[100vw\\]{max-width:100vw}.max-w-\\[1440px\\]{max-width:1440px}.max-w-\\[1920px\\]{max-width:1920px}.max-w-\\[600px\\]{max-width:600px}.max-w-\\[80\\%\\]{max-width:80%}.max-w-\\[80px\\]{max-width:80px}.max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.flex-auto{flex:1 1 auto}.flex-none{flex:none}.flex-shrink-0{flex-shrink:0}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.flex-grow,.flex-grow-\\[1\\]{flex-grow:1}.flex-grow-\\[3\\]{flex-grow:3}.basis-\\[0\\%\\]{flex-basis:0%}.origin-center{transform-origin:center}.origin-left{transform-origin:left}.origin-top-left{transform-origin:top left}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-1\\/4{--tw-translate-x: -25%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-\\[45\\%\\]{--tw-translate-y: -45%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-full{--tw-translate-y: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-1\\/2{--tw-translate-x: 50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[10\\%\\]{--tw-translate-x: 10%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[15\\%\\]{--tw-translate-x: 15%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[20\\%\\]{--tw-translate-x: 20%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-full{--tw-translate-x: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-0{--tw-translate-y: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-1\\/2{--tw-translate-y: 50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-\\[40\\%\\]{--tw-translate-y: 40%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-\\[calc\\(100\\%-5rem\\)\\]{--tw-translate-y: calc(100% - 5rem) ;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-rotate-180{--tw-rotate: -180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-rotate-45{--tw-rotate: -45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-0{--tw-rotate: 0deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-45{--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[-100deg\\]{--tw-rotate: -100deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[-200deg\\]{--tw-rotate: -200deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[-260deg\\]{--tw-rotate: -260deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[-90deg\\]{--tw-rotate: -90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[200deg\\]{--tw-rotate: 200deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[80deg\\]{--tw-rotate: 80deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-100{--tw-scale-x: 1;--tw-scale-y: 1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-75{--tw-scale-x: .75;--tw-scale-y: .75;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes loading-hourglass{0%{transform:rotate(0)}23%{transform:rotate(180deg)}to{transform:rotate(180deg)}}.animate-loading-hourglass{animation:loading-hourglass 1.3s ease-in-out infinite}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.cursor-wait{cursor:wait}.touch-pan-y{--tw-pan-y: pan-y;touch-action:var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.resize{resize:both}.list-none{list-style-type:none}.auto-cols-\\[min-content_1fr\\]{grid-auto-columns:min-content 1fr}.grid-flow-col{grid-auto-flow:column}.auto-rows-max{grid-auto-rows:max-content}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-\\[1fr_auto\\]{grid-template-columns:1fr auto}.grid-cols-\\[auto_1fr_auto\\]{grid-template-columns:auto 1fr auto}.grid-cols-\\[minmax\\(24\\.563rem\\,_100vw\\)\\]{grid-template-columns:minmax(24.563rem,100vw)}.grid-cols-\\[minmax\\(24\\.563rem\\,_50\\.688rem\\)\\]{grid-template-columns:minmax(24.563rem,50.688rem)}.grid-rows-4{grid-template-rows:repeat(4,minmax(0,1fr))}.grid-rows-\\[0fr\\]{grid-template-rows:0fr}.grid-rows-\\[1fr\\]{grid-template-rows:1fr}.grid-rows-\\[37\\.5rem\\]{grid-template-rows:37.5rem}.grid-rows-\\[minmax\\(14\\.375rem\\,_22\\.625rem\\)\\]{grid-template-rows:minmax(14.375rem,22.625rem)}.flex-row{flex-direction:row}.flex-row-reverse{flex-direction:row-reverse}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-wrap{flex-wrap:wrap}.flex-nowrap{flex-wrap:nowrap}.place-content-start{place-content:start}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.items-baseline{align-items:baseline}.items-stretch{align-items:stretch}.justify-normal{justify-content:normal}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-stretch{justify-content:stretch}.gap-0{gap:0px}.gap-0\\.5{gap:.125rem}.gap-1{gap:.25rem}.gap-10{gap:2.5rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-5{gap:1.25rem}.gap-6{gap:1.5rem}.gap-8{gap:2rem}.gap-x-12{-moz-column-gap:3rem;column-gap:3rem}.gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.gap-x-5{-moz-column-gap:1.25rem;column-gap:1.25rem}.gap-x-6{-moz-column-gap:1.5rem;column-gap:1.5rem}.gap-y-0{row-gap:0px}.gap-y-1{row-gap:.25rem}.gap-y-10{row-gap:2.5rem}.gap-y-3{row-gap:.75rem}.space-y-0>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(0px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0px * var(--tw-space-y-reverse))}.space-y-0\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.125rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.125rem * var(--tw-space-y-reverse))}.self-start{align-self:flex-start}.self-end{align-self:flex-end}.self-center{align-self:center}.justify-self-end{justify-self:end}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-visible{overflow:visible}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.overflow-y-hidden{overflow-y:hidden}.overscroll-contain{overscroll-behavior:contain}.overscroll-none{overscroll-behavior:none}.\\!truncate{overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-nowrap{white-space:nowrap}.whitespace-pre-wrap{white-space:pre-wrap}.text-wrap{text-wrap:wrap}.break-all{word-break:break-all}.break-keep{word-break:keep-all}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:1rem}.rounded-\\[0\\.25rem\\]{border-radius:.25rem}.rounded-\\[8px\\]{border-radius:8px}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-none{border-radius:0}.rounded-sm{border-radius:.125rem}.rounded-xl{border-radius:.75rem}.rounded-b-none{border-bottom-right-radius:0;border-bottom-left-radius:0}.rounded-b-xl{border-bottom-right-radius:.75rem;border-bottom-left-radius:.75rem}.rounded-r-none{border-top-right-radius:0;border-bottom-right-radius:0}.rounded-t-none{border-top-left-radius:0;border-top-right-radius:0}.rounded-t-xl{border-top-left-radius:.75rem;border-top-right-radius:.75rem}.border{border-width:1px}.border-2{border-width:2px}.border-\\[1px\\]{border-width:1px}.border-\\[3px\\]{border-width:3px}.border-x{border-left-width:1px;border-right-width:1px}.border-x-0{border-left-width:0px;border-right-width:0px}.border-y-0{border-top-width:0px;border-bottom-width:0px}.border-b{border-bottom-width:1px}.border-b-0{border-bottom-width:0px}.border-b-2{border-bottom-width:2px}.border-b-\\[1px\\]{border-bottom-width:1px}.border-e-0{border-inline-end-width:0px}.border-l{border-left-width:1px}.border-l-0{border-left-width:0px}.border-l-2{border-left-width:2px}.border-l-\\[1px\\]{border-left-width:1px}.border-r-0{border-right-width:0px}.border-s-0{border-inline-start-width:0px}.border-s-\\[1px\\]{border-inline-start-width:1px}.border-t{border-top-width:1px}.border-t-0{border-top-width:0px}.border-t-\\[1px\\]{border-top-width:1px}.border-solid{border-style:solid}.border-none{border-style:none}.border-base{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--background-base-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-highlight{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-highlight-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-negative{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-negative-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-neutral-minimal{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-minimal-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-neutral-regular{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-regular-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-neutral-subtle{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-positive{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-positive-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-transparent{border-color:transparent}.border-warning{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-warning-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-b-neutral-bold{--tw-border-opacity: 1;border-bottom-color:color-mix(in srgb,var(--border-neutral-bold-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-b-neutral-minimal{--tw-border-opacity: 1;border-bottom-color:color-mix(in srgb,var(--border-neutral-minimal-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-b-neutral-subtle{--tw-border-opacity: 1;border-bottom-color:color-mix(in srgb,var(--border-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-s-neutral-bold{--tw-border-opacity: 1;border-inline-start-color:color-mix(in srgb,var(--border-neutral-bold-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-t-neutral-minimal{--tw-border-opacity: 1;border-top-color:color-mix(in srgb,var(--border-neutral-minimal-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.\\!bg-base{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--background-base-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.bg-\\[\\#BFCAD1\\]{--tw-bg-opacity: 1;background-color:rgb(191 202 209 / var(--tw-bg-opacity))}.bg-\\[\\#E3FBE9\\]{--tw-bg-opacity: 1;background-color:rgb(227 251 233 / var(--tw-bg-opacity))}.bg-\\[\\#EBEEF6\\]{--tw-bg-opacity: 1;background-color:rgb(235 238 246 / var(--tw-bg-opacity))}.bg-\\[\\#EBF0FE\\]{--tw-bg-opacity: 1;background-color:rgb(235 240 254 / var(--tw-bg-opacity))}.bg-\\[\\#FCF5FA\\]{--tw-bg-opacity: 1;background-color:rgb(252 245 250 / var(--tw-bg-opacity))}.bg-\\[\\#FDF4F4\\]{--tw-bg-opacity: 1;background-color:rgb(253 244 244 / var(--tw-bg-opacity))}.bg-\\[\\#FFEEEB\\]{--tw-bg-opacity: 1;background-color:rgb(255 238 235 / var(--tw-bg-opacity))}.bg-\\[blue\\]{--tw-bg-opacity: 1;background-color:rgb(0 0 255 / var(--tw-bg-opacity))}.bg-\\[red\\]{--tw-bg-opacity: 1;background-color:rgb(255 0 0 / var(--tw-bg-opacity))}.bg-\\[var\\(--base-color-light\\)\\]{background-color:var(--base-color-light)}.bg-base{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--background-base-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-base\\/60{background-color:color-mix(in srgb,var(--background-base-color),transparent 40%)}.bg-black\\/5{background-color:#0000000d}.bg-content-inverse-bold{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--content-inverse-bold-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-content-inverse-subtle{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--content-inverse-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-content-neutral-bold\\/\\[0\\.08\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.bg-content-neutral-bold\\/\\[0\\.12\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.bg-content-neutral-bold\\/\\[0\\.15\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 85%)}.bg-green-500{--tw-bg-opacity: 1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))}.bg-interactive-highlight{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-highlight-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-interactive-inverse{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-inverse-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-interactive-neutral-bold{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-bold-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-interactive-neutral-minimal{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-minimal-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-interactive-neutral-regular{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-interactive-neutral-subtle{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-interactive-neutral-subtle\\/\\[0\\.95\\]{background-color:color-mix(in srgb,var(--interactive-neutral-subtle-color),transparent 5%)}.bg-lime-400{--tw-bg-opacity: 1;background-color:rgb(163 230 53 / var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.bg-surface-container{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-container-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-highlight-bold{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-highlight-bold-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-highlight-subtle{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-highlight-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-inverse{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-inverse-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-level-01{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-level-01-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-level-02{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-level-02-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-level-03{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-level-03-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-negative-bold{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-negative-bold-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-negative-subtle{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-negative-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-overlay{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-overlay-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-overlay\\/40{background-color:color-mix(in srgb,var(--surface-overlay-color),transparent 60%)}.bg-surface-positive-bold{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-positive-bold-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-positive-subtle{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-positive-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-warning-bold{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-warning-bold-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-warning-subtle{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-warning-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-transparent{background-color:transparent}.bg-violet-300{--tw-bg-opacity: 1;background-color:rgb(196 181 253 / var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-\\[linear-gradient\\(185deg\\,transparent_20\\%\\,var\\(--base-color\\)_35\\%\\)\\]{background-image:linear-gradient(185deg,transparent 20%,var(--base-color) 35%)}.bg-\\[linear-gradient\\(to_top\\,var\\(--surface-overlay-color\\)_20\\%\\,transparent\\)\\]{background-image:linear-gradient(to top,var(--surface-overlay-color) 20%,transparent)}.fill-\\[var\\(--accent-color\\)\\]{fill:var(--accent-color)}.fill-\\[var\\(--base-color\\)\\]{fill:var(--base-color)}.fill-\\[var\\(--glow-color\\)\\]{fill:var(--glow-color)}.stroke-\\[var\\(--border-negative-color\\)\\]{stroke:var(--border-negative-color)}.stroke-\\[var\\(--border-neutral-subtle-color\\)\\]{stroke:var(--border-neutral-subtle-color)}.stroke-\\[var\\(--border-positive-color\\)\\]{stroke:var(--border-positive-color)}.stroke-\\[var\\(--border-warning-color\\)\\]{stroke:var(--border-warning-color)}.stroke-\\[var\\(--surface-highlight-bold-color\\)\\]{stroke:var(--surface-highlight-bold-color)}.object-cover{-o-object-fit:cover;object-fit:cover}.p-0{padding:0}.p-1{padding:.25rem}.p-1\\.5{padding:.375rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-5{padding:1.25rem}.p-6{padding:1.5rem}.p-8{padding:2rem}.p-\\[1px\\]{padding:1px}.px-0{padding-left:0;padding-right:0}.px-1{padding-left:.25rem;padding-right:.25rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-8{padding-left:2rem;padding-right:2rem}.px-\\[0\\.375rem\\]{padding-left:.375rem;padding-right:.375rem}.px-\\[6px\\]{padding-left:6px;padding-right:6px}.py-0{padding-top:0;padding-bottom:0}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.py-8{padding-top:2rem;padding-bottom:2rem}.pb-0{padding-bottom:0}.pb-10{padding-bottom:2.5rem}.pb-20{padding-bottom:5rem}.pb-4{padding-bottom:1rem}.pb-8{padding-bottom:2rem}.pb-\\[env\\(safe-area-inset-bottom\\)\\]{padding-bottom:env(safe-area-inset-bottom)}.pe-0{padding-inline-end:0px}.pe-0\\.5{padding-inline-end:.125rem}.pe-1{padding-inline-end:.25rem}.pe-2{padding-inline-end:.5rem}.pe-2\\.5{padding-inline-end:.625rem}.pe-3{padding-inline-end:.75rem}.pe-4{padding-inline-end:1rem}.pl-0{padding-left:0}.pl-3{padding-left:.75rem}.pl-4{padding-left:1rem}.pr-0{padding-right:0}.pr-1{padding-right:.25rem}.pr-2{padding-right:.5rem}.pr-48{padding-right:12rem}.pr-8{padding-right:2rem}.ps-0{padding-inline-start:0px}.ps-2{padding-inline-start:.5rem}.ps-3{padding-inline-start:.75rem}.ps-4{padding-inline-start:1rem}.pt-0{padding-top:0}.pt-0\\.5{padding-top:.125rem}.pt-10{padding-top:2.5rem}.pt-14{padding-top:3.5rem}.pt-16{padding-top:4rem}.pt-2{padding-top:.5rem}.pt-20{padding-top:5rem}.pt-4{padding-top:1rem}.pt-6{padding-top:1.5rem}.pt-\\[\\.375rem\\]{padding-top:.375rem}.pt-\\[0\\.625rem\\]{padding-top:.625rem}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.text-start{text-align:start}.align-top{vertical-align:top}.align-middle{vertical-align:middle}.font-body{font-family:var(--paloma-font-family-body),sans-serif}.font-heading{font-family:var(--paloma-font-family-heading),sans-serif}.\\!text-\\[0\\.67em\\]{font-size:.67em!important}.\\!text-\\[0\\.83em\\]{font-size:.83em!important}.\\!text-\\[1\\.17em\\]{font-size:1.17em!important}.\\!text-\\[1\\.5em\\]{font-size:1.5em!important}.\\!text-\\[1em\\]{font-size:1em!important}.text-size-body-large{font-size:var(--font-size-body-large);line-height:var(--line-height-body-large)}.text-size-body-medium{font-size:var(--font-size-body-medium);line-height:var(--line-height-body-medium)}.text-size-body-small{font-size:var(--font-size-body-small);line-height:var(--line-height-body-small)}.text-size-body-x-small{font-size:var(--font-size-body-x-small);line-height:var(--line-height-body-x-small)}.text-size-heading-small{font-size:var(--font-size-heading-small);line-height:var(--line-height-heading-small)}.text-size-heading-x-small{font-size:var(--font-size-heading-x-small);line-height:var(--line-height-heading-x-small)}.text-size-lg-heading-large{font-size:var(--font-size-lg-heading-large);line-height:var(--line-height-lg-heading-large)}.text-size-lg-heading-medium{font-size:var(--font-size-lg-heading-medium);line-height:var(--line-height-lg-heading-medium)}.text-size-xs-heading-large{font-size:var(--font-size-xs-heading-large);line-height:var(--line-height-xs-heading-large)}.text-size-xs-heading-medium{font-size:var(--font-size-xs-heading-medium);line-height:var(--line-height-xs-heading-medium)}.text-size-xs-heading-x-large{font-size:var(--font-size-xs-heading-x-large);line-height:var(--line-height-xs-heading-x-large)}.font-bold{font-weight:700}.font-normal{font-weight:400}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.leading-\\[--line-height-body-large\\]{line-height:var(--line-height-body-large)}.leading-\\[--line-height-body-medium\\]{line-height:var(--line-height-body-medium)}.leading-\\[--line-height-body-small\\]{line-height:var(--line-height-body-small)}.leading-\\[150\\%\\]{line-height:150%}.leading-\\[28px\\]{line-height:28px}.leading-\\[40px\\]{line-height:40px}.leading-\\[42px\\]{line-height:42px}.leading-none{line-height:1}.tracking-wide{letter-spacing:.025em}.\\!text-content-highlight{--tw-text-opacity: 1 !important;color:color-mix(in srgb,var(--content-highlight-color),transparent calc(100% - 100% * var(--tw-text-opacity)))!important}.text-content-highlight{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-highlight-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-content-inverse-bold{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-inverse-bold-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-content-negative{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-negative-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-content-neutral-bold{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-neutral-bold-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-content-neutral-regular{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-neutral-regular-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-content-neutral-subtle{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-content-positive{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-positive-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-content-warning{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-warning-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-inherit{color:inherit}.text-red-600{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.underline{text-decoration-line:underline}.no-underline{text-decoration-line:none}.underline-offset-4{text-underline-offset:4px}.opacity-0{opacity:0}.opacity-100{opacity:1}.opacity-30{opacity:.3}.opacity-40{opacity:.4}.opacity-50{opacity:.5}.opacity-70{opacity:.7}.opacity-\\[30\\%\\]{opacity:30%}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-\\[inset_0_0_0_2px_var\\(--interactive-highlight-color\\)\\]{--tw-shadow: inset 0 0 0 2px var(--interactive-highlight-color);--tw-shadow-colored: inset 0 0 0 2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.outline-2{outline-width:2px}.outline-offset-0{outline-offset:0px}.outline-offset-2{outline-offset:2px}.outline-interactive-highlight{outline-color:var(--interactive-highlight-color)}.ring{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.blur{--tw-blur: blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur-\\[10px\\]{--tw-blur: blur(10px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur-\\[18px\\]{--tw-blur: blur(18px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur-\\[4px\\]{--tw-blur: blur(4px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur-\\[50px\\]{--tw-blur: blur(50px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-surface{--tw-backdrop-blur: blur(48px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[color\\,font-weight\\]{transition-property:color,font-weight;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[padding\\]{transition-property:padding;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[stroke-dashoffset\\]{transition-property:stroke-dashoffset;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.delay-500{transition-delay:.5s}.duration-150{transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.duration-500{transition-duration:.5s}.ease-in{transition-timing-function:cubic-bezier(.4,0,1,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.will-change-transform{will-change:transform}@keyframes enter{0%{opacity:var(--tw-enter-opacity, 1);transform:translate3d(var(--tw-enter-translate-x, 0),var(--tw-enter-translate-y, 0),0) scale3d(var(--tw-enter-scale, 1),var(--tw-enter-scale, 1),var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity, 1);transform:translate3d(var(--tw-exit-translate-x, 0),var(--tw-exit-translate-y, 0),0) scale3d(var(--tw-exit-scale, 1),var(--tw-exit-scale, 1),var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))}}.fade-out{--tw-exit-opacity: 0 }.zoom-in-95{--tw-enter-scale: .95 }.duration-150{animation-duration:.15s}.duration-200{animation-duration:.2s}.duration-300{animation-duration:.3s}.duration-500{animation-duration:.5s}.delay-500{animation-delay:.5s}.ease-in{animation-timing-function:cubic-bezier(.4,0,1,1)}.ease-in-out{animation-timing-function:cubic-bezier(.4,0,.2,1)}.paused{animation-play-state:paused}.fill-mode-forwards{animation-fill-mode:forwards}.\\!grid-in-\\[2\\/2\\/2\\/2\\]{grid-area:2/2/2/2!important}.grid-areas-\\[bar\\]{grid-template-areas:"bar"}.grid-areas-\\[label_bar_percent\\]{grid-template-areas:"label bar percent"}.grid-areas-\\[label_percent\\,_bar_bar\\]{grid-template-areas:"label percent" "bar bar"}.grid-in-\\[1\\/1\\/2\\/1\\]{grid-area:1/1/2/1}.grid-in-\\[1\\/2\\/1\\/2\\]{grid-area:1/2/1/2}.grid-in-\\[2\\/1\\/2\\/1\\]{grid-area:2/1/2/1}.grid-in-\\[bar\\]{grid-area:bar}.grid-in-\\[label\\]{grid-area:label}.grid-in-\\[percent\\]{grid-area:percent}.font-variant-none{font-variant:none}.\\[--accent-color\\:\\#6AF8A4\\]{--accent-color: #6AF8A4 }.\\[--accent-color\\:\\#7B9AFA\\]{--accent-color: #7B9AFA }.\\[--accent-color\\:\\#A8DCF3\\]{--accent-color: #A8DCF3 }.\\[--accent-color\\:\\#D973BA\\]{--accent-color: #D973BA }.\\[--accent-color\\:\\#E59090\\]{--accent-color: #E59090 }.\\[--accent-color\\:\\#FFD8CC\\]{--accent-color: #FFD8CC }.\\[--accent-color\\:\\#FFDED7\\]{--accent-color: #FFDED7 }.\\[--accent-color\\:var\\(--accent-color-light\\)\\]{--accent-color: var(--accent-color-light) }.\\[--base-color\\:\\#BFCAD1\\]{--base-color: #BFCAD1 }.\\[--base-color\\:\\#E3FBE9\\]{--base-color: #E3FBE9 }.\\[--base-color\\:\\#EBEEF6\\]{--base-color: #EBEEF6 }.\\[--base-color\\:\\#EBF0FE\\]{--base-color: #EBF0FE }.\\[--base-color\\:\\#FCF5FA\\]{--base-color: #FCF5FA }.\\[--base-color\\:\\#FFEBEB\\]{--base-color: #FFEBEB }.\\[--base-color\\:\\#FFEEEB\\]{--base-color: #FFEEEB }.\\[--base-color\\:var\\(--base-color-light\\)\\]{--base-color: var(--base-color-light) }.\\[--glow-color\\:\\#07F468\\]{--glow-color: #07F468 }.\\[--glow-color\\:\\#ADBBDB\\]{--glow-color: #ADBBDB }.\\[--glow-color\\:\\#BA84F1\\]{--glow-color: #BA84F1 }.\\[--glow-color\\:\\#E59090\\]{--glow-color: #E59090 }.\\[--glow-color\\:\\#FFB199\\]{--glow-color: #FFB199 }.\\[--glow-color\\:\\#FFD4CC\\]{--glow-color: #FFD4CC }.\\[--glow-color\\:var\\(--glow-color-light\\)\\]{--glow-color: var(--glow-color-light) }.\\[-webkit-mask-image\\:linear-gradient\\(to_top\\,transparent_0\\%\\,rgba\\(0\\,0\\,0\\,0\\.7\\)_50\\%\\)\\]{-webkit-mask-image:linear-gradient(to top,transparent 0%,rgba(0,0,0,.7) 50%)}.\\[mask-image\\:linear-gradient\\(to_top\\,transparent_0\\%\\,rgba\\(0\\,0\\,0\\,0\\.7\\)_50\\%\\)\\]{-webkit-mask-image:linear-gradient(to top,transparent 0%,rgba(0,0,0,.7) 50%);mask-image:linear-gradient(to top,transparent 0%,rgba(0,0,0,.7) 50%)}.\\[mask-type\\:alpha\\]{mask-type:alpha}.\\[place-content\\:start_center\\]{place-content:start center}.\\[place-self\\:start_center\\]{place-self:start center}.\\[transition-duration\\:2s\\]{transition-duration:2s}.\\[transition-duration\\:6s\\]{transition-duration:6s}.\\[transition-property\\:transform\\]{transition-property:transform}@media(min-width:768px){.md\\:container{width:100%;margin-right:auto;margin-left:auto;padding-right:24px;padding-left:24px}@media(min-width:1440px){.md\\:container{max-width:1440px;padding-right:40px;padding-left:40px}}}.last\\:pb-0:last-child{padding-bottom:0}.active\\:\\!bg-surface-level-03:active{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--surface-level-03-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.active\\:bg-content-neutral-bold\\/\\[0\\.12\\]:active{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.active\\:bg-content-neutral-regular:active{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.active\\:bg-content-neutral-regular\\/\\[0\\.12\\]:active{background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent 88%)}.active\\:bg-interactive-neutral-regular:active{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.active\\:bg-interactive-neutral-subtle:active{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.enabled\\:cursor-pointer:enabled{cursor:pointer}.group:active .group-active\\:bg-content-neutral-bold\\/\\[0\\.12\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.aria-disabled\\:pointer-events-none[aria-disabled=true]{pointer-events:none}.aria-disabled\\:opacity-30[aria-disabled=true]{opacity:.3}.data-\\[position-y\\=bottom\\]\\:-bottom-1\\.5[data-position-y=bottom]{bottom:-.375rem}.data-\\[position-y\\=bottom\\]\\:-bottom-3\\.5[data-position-y=bottom]{bottom:-.875rem}.data-\\[position-y\\=top\\]\\:-top-1\\.5[data-position-y=top]{top:-.375rem}.data-\\[position-y\\=top\\]\\:-top-3\\.5[data-position-y=top]{top:-.875rem}.data-\\[position-x\\=center\\]\\:flex[data-position-x=center],.data-\\[shape\\=circle\\]\\:flex[data-shape=circle]{display:flex}.data-\\[size\\=large\\]\\:h-8[data-size=large]{height:2rem}.data-\\[size\\=medium\\]\\:h-6[data-size=medium]{height:1.5rem}.data-\\[size\\=small\\]\\:h-5[data-size=small]{height:1.25rem}.data-\\[size\\=x-small\\]\\:h-4[data-size=x-small]{height:1rem}.data-\\[orientation\\=horizontal\\]\\:w-\\[-webkit-fill-available\\][data-orientation=horizontal]{width:-webkit-fill-available}.data-\\[position-x\\=center\\]\\:w-full[data-position-x=center],.data-\\[shape\\=circle\\]\\:w-full[data-shape=circle]{width:100%}.data-\\[size\\=large\\]\\:w-8[data-size=large]{width:2rem}.data-\\[size\\=medium\\]\\:w-6[data-size=medium]{width:1.5rem}.data-\\[size\\=small\\]\\:w-5[data-size=small]{width:1.25rem}.data-\\[size\\=x-small\\]\\:w-4[data-size=x-small]{width:1rem}.data-\\[position-x\\=center\\]\\:justify-center[data-position-x=center],.data-\\[shape\\=circle\\]\\:justify-center[data-shape=circle]{justify-content:center}.data-\\[emphasis\\=bold\\]\\:border-neutral-bold[data-emphasis=bold]{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-bold-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.data-\\[emphasis\\=minimal\\]\\:border-neutral-minimal[data-emphasis=minimal]{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-minimal-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.data-\\[emphasis\\=regular\\]\\:border-neutral-regular[data-emphasis=regular]{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-regular-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.data-\\[emphasis\\=subtle\\]\\:border-neutral-subtle[data-emphasis=subtle]{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.data-\\[orientation\\=vertical\\]\\:p-6[data-orientation=vertical]{padding:1.5rem}.data-\\[orientation\\=horizontal\\]\\:px-8[data-orientation=horizontal]{padding-left:2rem;padding-right:2rem}.data-\\[orientation\\=horizontal\\]\\:py-12[data-orientation=horizontal]{padding-top:3rem;padding-bottom:3rem}.data-\\[selected\\=true\\]\\:data-\\[emphasis\\=bold\\]\\:text-content-inverse-bold[data-emphasis=bold][data-selected=true]{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-inverse-bold-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.data-\\[selected\\=true\\]\\:data-\\[emphasis\\=regular\\]\\:text-content-neutral-bold[data-emphasis=regular][data-selected=true]{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-neutral-bold-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.data-\\[focus-visible\\]\\:shadow-\\[inset_0_0_0_2px_var\\(--interactive-highlight-color\\)\\][data-focus-visible]{--tw-shadow: inset 0 0 0 2px var(--interactive-highlight-color);--tw-shadow-colored: inset 0 0 0 2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.group\\/menu[data-variant=mega] .group-data-\\[variant\\=mega\\]\\/menu\\:mx-2{margin-left:.5rem;margin-right:.5rem}.group[data-variant=dot] .group-data-\\[variant\\=dot\\]\\:h-1\\.5{height:.375rem}.group[data-variant=dot] .group-data-\\[variant\\=dot\\]\\:h-2{height:.5rem}.group[data-variant=icon] .group-data-\\[variant\\=icon\\]\\:h-\\[22px\\]{height:22px}.group[data-variant=icon] .group-data-\\[variant\\=icon\\]\\:h-\\[32px\\]{height:32px}.group[data-variant=text] .group-data-\\[variant\\=text\\]\\:h-\\[22px\\]{height:22px}.group[data-variant=text] .group-data-\\[variant\\=text\\]\\:h-\\[30px\\]{height:30px}.group\\/menu[data-orientation=horizontal] .group-data-\\[orientation\\=horizontal\\]\\/menu\\:w-\\[inherit\\]{width:inherit}.group[data-variant=dot] .group-data-\\[variant\\=dot\\]\\:w-1\\.5{width:.375rem}.group[data-variant=dot] .group-data-\\[variant\\=dot\\]\\:w-2{width:.5rem}.group[data-variant=icon] .group-data-\\[variant\\=icon\\]\\:w-\\[22px\\]{width:22px}.group[data-variant=icon] .group-data-\\[variant\\=icon\\]\\:w-\\[32px\\]{width:32px}.group\\/menu[data-variant=mega] .group-data-\\[variant\\=mega\\]\\/menu\\:w-auto{width:auto}.group\\/menu[data-variant=standard] .group-data-\\[variant\\=standard\\]\\/menu\\:w-\\[--trigger-width\\]{width:var(--trigger-width)}.group\\/menu[data-variant=standard] .group-data-\\[variant\\=standard\\]\\/menu\\:w-\\[250px\\]{width:250px}.group\\/menu[data-variant=standard] .group-data-\\[variant\\=standard\\]\\/menu\\:w-fit{width:-moz-fit-content;width:fit-content}.group[data-variant=text][data-content-single-element=true] .group-data-\\[variant\\=text\\]\\:group-data-\\[content-single-element\\=true\\]\\:w-\\[22px\\]{width:22px}.group[data-variant=text][data-content-single-element=true] .group-data-\\[variant\\=text\\]\\:group-data-\\[content-single-element\\=true\\]\\:w-\\[30px\\]{width:30px}.group\\/menu[data-variant=mega] .group-data-\\[variant\\=mega\\]\\/menu\\:max-w-\\[1440px\\]{max-width:1440px}.group\\/menu[data-variant=standard] .group-data-\\[variant\\=standard\\]\\/menu\\:p-2{padding:.5rem}.group\\/menu[data-variant=mega] .group-data-\\[variant\\=mega\\]\\/menu\\:px-8{padding-left:2rem;padding-right:2rem}.group\\/menu[data-variant=standard] .group-data-\\[variant\\=standard\\]\\/menu\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.group[data-variant=text][data-content-single-element=false] .group-data-\\[variant\\=text\\]\\:group-data-\\[content-single-element\\=false\\]\\:px-\\[11px\\]{padding-left:11px;padding-right:11px}.group[data-variant=text][data-content-single-element=false] .group-data-\\[variant\\=text\\]\\:group-data-\\[content-single-element\\=false\\]\\:px-\\[7px\\]{padding-left:7px;padding-right:7px}.entering\\:zoom-in-95[data-entering]{--tw-enter-scale: .95 }.hover\\:cursor-pointer:where([data-rac])[data-hovered]{cursor:pointer}.hover\\:bg-content-neutral-bold\\/\\[0\\.08\\]:where([data-rac])[data-hovered]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.hover\\:bg-content-neutral-regular:where([data-rac])[data-hovered]{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:bg-content-neutral-regular\\/\\[0\\.08\\]:where([data-rac])[data-hovered]{background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent 92%)}.hover\\:bg-interactive-neutral-regular:where([data-rac])[data-hovered]{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:bg-interactive-neutral-subtle:where([data-rac])[data-hovered]{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:bg-surface-level-02:where([data-rac])[data-hovered]{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-level-02-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:active\\:bg-content-neutral-bold\\/\\[0\\.12\\]:active:where([data-rac])[data-hovered]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.hover\\:active\\:bg-content-neutral-regular\\/\\[0\\.12\\]:active:where([data-rac])[data-hovered]{background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent 88%)}.hover\\:cursor-pointer:where(:not([data-rac])):hover{cursor:pointer}.hover\\:bg-content-neutral-bold\\/\\[0\\.08\\]:where(:not([data-rac])):hover{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.hover\\:bg-content-neutral-regular:where(:not([data-rac])):hover{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:bg-content-neutral-regular\\/\\[0\\.08\\]:where(:not([data-rac])):hover{background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent 92%)}.hover\\:bg-interactive-neutral-regular:where(:not([data-rac])):hover{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:bg-interactive-neutral-subtle:where(:not([data-rac])):hover{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:bg-surface-level-02:where(:not([data-rac])):hover{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-level-02-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:active\\:bg-content-neutral-bold\\/\\[0\\.12\\]:active:where(:not([data-rac])):hover{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.hover\\:active\\:bg-content-neutral-regular\\/\\[0\\.12\\]:active:where(:not([data-rac])):hover{background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent 88%)}.group:where([data-rac])[data-hovered] .group-hover\\:bg-content-neutral-bold\\/\\[0\\.08\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.group:where(:not([data-rac])):hover .group-hover\\:bg-content-neutral-bold\\/\\[0\\.08\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.group:where([data-rac])[data-hovered]:active .group-hover\\:group-active\\:bg-content-neutral-bold\\/\\[0\\.12\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.group:where(:not([data-rac])):hover:active .group-hover\\:group-active\\:bg-content-neutral-bold\\/\\[0\\.12\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.focus\\:shadow-\\[inset_0_0_0_2px_var\\(--interactive-highlight-color\\)\\]:where([data-rac])[data-focused]{--tw-shadow: inset 0 0 0 2px var(--interactive-highlight-color);--tw-shadow-colored: inset 0 0 0 2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.focus\\:outline-none:where([data-rac])[data-focused]{outline:2px solid transparent;outline-offset:2px}.focus\\:shadow-\\[inset_0_0_0_2px_var\\(--interactive-highlight-color\\)\\]:where(:not([data-rac])):focus{--tw-shadow: inset 0 0 0 2px var(--interactive-highlight-color);--tw-shadow-colored: inset 0 0 0 2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.focus\\:outline-none:where(:not([data-rac])):focus{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:outline:where([data-rac])[data-focus-visible]{outline-style:solid}.focus-visible\\:outline-\\[3px\\]:where([data-rac])[data-focus-visible]{outline-width:3px}.focus-visible\\:outline-offset-2:where([data-rac])[data-focus-visible]{outline-offset:2px}.focus-visible\\:outline-offset-\\[1px\\]:where([data-rac])[data-focus-visible]{outline-offset:1px}.focus-visible\\:outline-interactive-highlight:where([data-rac])[data-focus-visible]{outline-color:var(--interactive-highlight-color)}.focus-visible\\:outline:where(:not([data-rac])):focus-visible{outline-style:solid}.focus-visible\\:outline-\\[3px\\]:where(:not([data-rac])):focus-visible{outline-width:3px}.focus-visible\\:outline-offset-2:where(:not([data-rac])):focus-visible{outline-offset:2px}.focus-visible\\:outline-offset-\\[1px\\]:where(:not([data-rac])):focus-visible{outline-offset:1px}.focus-visible\\:outline-interactive-highlight:where(:not([data-rac])):focus-visible{outline-color:var(--interactive-highlight-color)}.disabled\\:pointer-events-none:where([data-rac])[data-disabled]{pointer-events:none}.disabled\\:opacity-30:where([data-rac])[data-disabled]{opacity:.3}.disabled\\:pointer-events-none:where(:not([data-rac])):disabled{pointer-events:none}.disabled\\:opacity-30:where(:not([data-rac])):disabled{opacity:.3}@media(prefers-reduced-motion:no-preference){.motion-safe\\:duration-300{transition-duration:.3s}.motion-safe\\:ease-in{transition-timing-function:cubic-bezier(.4,0,1,1)}.motion-safe\\:ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.motion-safe\\:animate-in{animation-name:enter;animation-duration:.15s;--tw-enter-opacity: initial;--tw-enter-scale: initial;--tw-enter-rotate: initial;--tw-enter-translate-x: initial;--tw-enter-translate-y: initial }.motion-safe\\:animate-out{animation-name:exit;animation-duration:.15s;--tw-exit-opacity: initial;--tw-exit-scale: initial;--tw-exit-rotate: initial;--tw-exit-translate-x: initial;--tw-exit-translate-y: initial }.motion-safe\\:fade-in{--tw-enter-opacity: 0 }.motion-safe\\:fade-out{--tw-exit-opacity: 0 }.motion-safe\\:slide-in-from-bottom{--tw-enter-translate-y: 100% }.motion-safe\\:slide-out-to-bottom{--tw-exit-translate-y: 100% }.motion-safe\\:duration-300{animation-duration:.3s}.motion-safe\\:ease-in{animation-timing-function:cubic-bezier(.4,0,1,1)}.motion-safe\\:ease-out{animation-timing-function:cubic-bezier(0,0,.2,1)}.motion-safe\\:entering\\:animate-in[data-entering]{animation-name:enter;animation-duration:.15s;--tw-enter-opacity: initial;--tw-enter-scale: initial;--tw-enter-rotate: initial;--tw-enter-translate-x: initial;--tw-enter-translate-y: initial }.motion-safe\\:entering\\:fade-in[data-entering]{--tw-enter-opacity: 0 }.motion-safe\\:entering\\:zoom-in-95[data-entering]{--tw-enter-scale: .95 }.motion-safe\\:exiting\\:animate-out[data-exiting]{animation-name:exit;animation-duration:.15s;--tw-exit-opacity: initial;--tw-exit-scale: initial;--tw-exit-rotate: initial;--tw-exit-translate-x: initial;--tw-exit-translate-y: initial }.motion-safe\\:exiting\\:fade-out[data-exiting]{--tw-exit-opacity: 0 }.motion-safe\\:exiting\\:zoom-out-95[data-exiting]{--tw-exit-scale: .95 }}@media(prefers-reduced-motion:reduce){.motion-reduce\\:transition-none{transition-property:none}}.dark\\:bg-\\[\\#000000\\]:is([data-paloma-mode=dark] *){--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.dark\\:bg-\\[\\#01081D\\]:is([data-paloma-mode=dark] *){--tw-bg-opacity: 1;background-color:rgb(1 8 29 / var(--tw-bg-opacity))}.dark\\:bg-\\[\\#020B07\\]:is([data-paloma-mode=dark] *){--tw-bg-opacity: 1;background-color:rgb(2 11 7 / var(--tw-bg-opacity))}.dark\\:bg-\\[\\#142242\\]:is([data-paloma-mode=dark] *){--tw-bg-opacity: 1;background-color:rgb(20 34 66 / var(--tw-bg-opacity))}.dark\\:bg-\\[\\#160303\\]:is([data-paloma-mode=dark] *){--tw-bg-opacity: 1;background-color:rgb(22 3 3 / var(--tw-bg-opacity))}.dark\\:bg-\\[\\#160511\\]:is([data-paloma-mode=dark] *){--tw-bg-opacity: 1;background-color:rgb(22 5 17 / var(--tw-bg-opacity))}.dark\\:bg-\\[var\\(--base-color-dark\\)\\]:is([data-paloma-mode=dark] *){background-color:var(--base-color-dark)}.dark\\:\\[--accent-color\\:\\#03622A\\]:is([data-paloma-mode=dark] *){--accent-color: #03622A }.dark\\:\\[--accent-color\\:\\#25A8E0\\]:is([data-paloma-mode=dark] *){--accent-color: #25A8E0 }.dark\\:\\[--accent-color\\:\\#6D1111\\]:is([data-paloma-mode=dark] *){--accent-color: #6D1111 }.dark\\:\\[--accent-color\\:\\#6D17C4\\]:is([data-paloma-mode=dark] *){--accent-color: #6D17C4 }.dark\\:\\[--accent-color\\:\\#972073\\]:is([data-paloma-mode=dark] *){--accent-color: #972073 }.dark\\:\\[--accent-color\\:\\#FF6333\\]:is([data-paloma-mode=dark] *){--accent-color: #FF6333 }.dark\\:\\[--accent-color\\:\\#FF7F66\\]:is([data-paloma-mode=dark] *){--accent-color: #FF7F66 }.dark\\:\\[--accent-color\\:var\\(--accent-color-dark\\)\\]:is([data-paloma-mode=dark] *){--accent-color: var(--accent-color-dark) }.dark\\:\\[--base-color\\:\\#000000\\]:is([data-paloma-mode=dark] *){--base-color: #000000 }.dark\\:\\[--base-color\\:\\#01081D\\]:is([data-paloma-mode=dark] *){--base-color: #01081D }.dark\\:\\[--base-color\\:\\#020B07\\]:is([data-paloma-mode=dark] *){--base-color: #020B07 }.dark\\:\\[--base-color\\:\\#142242\\]:is([data-paloma-mode=dark] *){--base-color: #142242 }.dark\\:\\[--base-color\\:\\#160303\\]:is([data-paloma-mode=dark] *){--base-color: #160303 }.dark\\:\\[--base-color\\:\\#160511\\]:is([data-paloma-mode=dark] *){--base-color: #160511 }.dark\\:\\[--base-color\\:var\\(--base-color-dark\\)\\]:is([data-paloma-mode=dark] *){--base-color: var(--base-color-dark) }.dark\\:\\[--glow-color\\:\\#07F468\\]:is([data-paloma-mode=dark] *){--glow-color: #07F468 }.dark\\:\\[--glow-color\\:\\#093DD8\\]:is([data-paloma-mode=dark] *){--glow-color: #093DD8 }.dark\\:\\[--glow-color\\:\\#3356A4\\]:is([data-paloma-mode=dark] *){--glow-color: #3356A4 }.dark\\:\\[--glow-color\\:\\#872AE6\\]:is([data-paloma-mode=dark] *){--glow-color: #872AE6 }.dark\\:\\[--glow-color\\:\\#E00000\\]:is([data-paloma-mode=dark] *){--glow-color: #E00000 }.dark\\:\\[--glow-color\\:\\#E53600\\]:is([data-paloma-mode=dark] *){--glow-color: #E53600 }.dark\\:\\[--glow-color\\:\\#FF2900\\]:is([data-paloma-mode=dark] *){--glow-color: #FF2900 }.dark\\:\\[--glow-color\\:var\\(--glow-color-dark\\)\\]:is([data-paloma-mode=dark] *){--glow-color: var(--glow-color-dark) }@media(max-width:1440px){.max-\\[1440px\\]\\:px-5{padding-left:1.25rem;padding-right:1.25rem}}@media not all and (min-width:1280px){.max-lg\\:flex{display:flex}.max-lg\\:hidden{display:none}.max-lg\\:-translate-y-full{--tw-translate-y: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.max-lg\\:flex-col{flex-direction:column}.max-lg\\:justify-between{justify-content:space-between}.max-lg\\:gap-2{gap:.5rem}.max-lg\\:gap-4{gap:1rem}.max-lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}@media not all and (min-width:768px){.max-md\\:flex{display:flex}.max-md\\:hidden{display:none}.max-md\\:w-auto{width:auto}.max-md\\:w-full{width:100%}.max-md\\:max-w-\\[250px\\]{max-width:250px}.max-md\\:max-w-\\[767px\\]{max-width:767px}.max-md\\:max-w-\\[815px\\]{max-width:815px}.max-md\\:flex-col{flex-direction:column}.max-md\\:justify-normal{justify-content:normal}.max-md\\:justify-between{justify-content:space-between}.max-md\\:px-4{padding-left:1rem;padding-right:1rem}.max-md\\:py-2{padding-top:.5rem;padding-bottom:.5rem}.max-md\\:py-3{padding-top:.75rem;padding-bottom:.75rem}.max-md\\:text-center{text-align:center}.max-md\\:text-size-heading-x-small{font-size:var(--font-size-heading-x-small);line-height:var(--line-height-heading-x-small)}.max-md\\:\\!grid-in-\\[2\\/2\\/2\\/2\\]{grid-area:2/2/2/2!important}.max-md\\:grid-in-\\[1\\/1\\/2\\/1\\]{grid-area:1/1/2/1}.max-md\\:grid-in-\\[1\\/2\\/1\\/2\\]{grid-area:1/2/1/2}.max-md\\:grid-in-\\[2\\/1\\/2\\/1\\]{grid-area:2/1/2/1}@media(prefers-reduced-motion:no-preference){.max-md\\:motion-safe\\:slide-in-from-bottom{--tw-enter-translate-y: 100% }.max-md\\:motion-safe\\:slide-out-to-bottom{--tw-exit-translate-y: 100% }}}@media not all and (min-width:640px){.max-sm\\:w-full{width:100%}.max-sm\\:max-w-full{max-width:100%}}@media(min-width:640px){.sm\\:w-\\[345px\\]{width:345px}.sm\\:place-content-center{place-content:center}.sm\\:place-items-center{place-items:center}.sm\\:\\[place-self\\:stretch\\]{place-self:stretch}}@media(min-width:768px){.md\\:-left-\\[12\\.5\\%\\]{left:-12.5%}.md\\:-right-\\[10\\%\\]{right:-10%}.md\\:-right-\\[20\\%\\]{right:-20%}.md\\:bottom-0{bottom:0}.md\\:bottom-20{bottom:5rem}.md\\:bottom-40{bottom:10rem}.md\\:left-0{left:0}.md\\:left-\\[40\\%\\]{left:40%}.md\\:top-20{top:5rem}.md\\:top-28{top:7rem}.md\\:top-\\[7\\.5rem\\]{top:7.5rem}.md\\:top-auto{top:auto}.md\\:mt-36{margin-top:9rem}.md\\:block{display:block}.md\\:flex{display:flex}.md\\:grid{display:grid}.md\\:hidden{display:none}.md\\:max-h-\\[calc\\(100dvh_-_\\(4rem_\\*_2\\)\\)\\]{max-height:calc(100dvh - 8rem)}.md\\:max-h-\\[calc\\(100vh_-_\\(4rem_\\*_2\\)\\)\\]{max-height:calc(100vh - 8rem)}.md\\:min-h-\\[100dvh\\]{min-height:100dvh}.md\\:min-h-screen{min-height:100vh}.md\\:w-1\\/2{width:50%}.md\\:w-\\[100\\%\\]{width:100%}.md\\:w-\\[150\\%\\]{width:150%}.md\\:w-\\[80\\%\\]{width:80%}.md\\:w-auto{width:auto}.md\\:w-full{width:100%}.md\\:max-w-\\[1279px\\]{max-width:1279px}.md\\:max-w-\\[1327px\\]{max-width:1327px}.md\\:max-w-\\[420px\\]{max-width:420px}.md\\:max-w-\\[486px\\]{max-width:486px}.md\\:translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.md\\:\\!grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))!important}.md\\:grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.md\\:flex-row{flex-direction:row}.md\\:flex-row-reverse{flex-direction:row-reverse}.md\\:flex-col{flex-direction:column}.md\\:place-items-center{place-items:center}.md\\:items-center{align-items:center}.md\\:justify-between{justify-content:space-between}.md\\:gap-0{gap:0px}.md\\:gap-2{gap:.5rem}.md\\:gap-4{gap:1rem}.md\\:gap-6{gap:1.5rem}.md\\:gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.md\\:place-self-center{place-self:center}.md\\:self-start{align-self:flex-start}.md\\:self-center{align-self:center}.md\\:bg-\\[linear-gradient\\(185deg\\,transparent_30\\%\\,var\\(--base-color\\)_50\\%\\)\\]{background-image:linear-gradient(185deg,transparent 30%,var(--base-color) 50%)}.md\\:p-10{padding:2.5rem}.md\\:p-5{padding:1.25rem}.md\\:p-8{padding:2rem}.md\\:py-16{padding-top:4rem;padding-bottom:4rem}.md\\:pb-10{padding-bottom:2.5rem}.md\\:pb-8{padding-bottom:2rem}.md\\:pt-28{padding-top:7rem}.md\\:text-left{text-align:left}.md\\:grid-in-\\[1\\/1\\/1\\/1\\]{grid-area:1/1/1/1}@media(prefers-reduced-motion:no-preference){.md\\:motion-safe\\:zoom-in-95{--tw-enter-scale: .95 }.md\\:motion-safe\\:zoom-out-95{--tw-exit-scale: .95 }}@media not all and (min-width:1280px){.md\\:max-lg\\:col-span-4{grid-column:span 4 / span 4}.md\\:max-lg\\:col-span-6{grid-column:span 6 / span 6}.md\\:max-lg\\:col-start-2{grid-column-start:2}.md\\:max-lg\\:col-start-3{grid-column-start:3}.md\\:max-lg\\:flex{display:flex}.md\\:max-lg\\:grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}}}@media(min-width:1280px){.lg\\:-bottom-20{bottom:-5rem}.lg\\:left-0{left:0}.lg\\:left-\\[5\\%\\]{left:5%}.lg\\:right-\\[5\\%\\]{right:5%}.lg\\:top-10{top:2.5rem}.lg\\:top-24{top:6rem}.lg\\:top-6{top:1.5rem}.lg\\:col-span-10{grid-column:span 10 / span 10}.lg\\:col-span-4{grid-column:span 4 / span 4}.lg\\:col-span-6{grid-column:span 6 / span 6}.lg\\:col-span-8{grid-column:span 8 / span 8}.lg\\:col-start-2{grid-column-start:2}.lg\\:col-start-4{grid-column-start:4}.lg\\:col-start-5{grid-column-start:5}.lg\\:-mt-12{margin-top:-3rem}.lg\\:flex{display:flex}.lg\\:grid{display:grid}.lg\\:hidden{display:none}.lg\\:h-11{height:2.75rem}.lg\\:h-16{height:4rem}.lg\\:h-20{height:5rem}.lg\\:h-32{height:8rem}.lg\\:h-52{height:13rem}.lg\\:h-\\[132px\\]{height:132px}.lg\\:h-\\[3\\.75rem\\]{height:3.75rem}.lg\\:w-11{width:2.75rem}.lg\\:w-16{width:4rem}.lg\\:w-20{width:5rem}.lg\\:w-32{width:8rem}.lg\\:w-52{width:13rem}.lg\\:w-\\[132px\\]{width:132px}.lg\\:w-\\[138px\\]{width:138px}.lg\\:w-\\[3\\.75rem\\]{width:3.75rem}.lg\\:w-\\[82\\%\\]{width:82%}.lg\\:w-\\[90\\%\\]{width:90%}.lg\\:w-full{width:100%}.lg\\:max-w-\\[120rem\\]{max-width:120rem}.lg\\:max-w-\\[1440px\\]{max-width:1440px}.lg\\:max-w-\\[1520px\\]{max-width:1520px}.lg\\:max-w-\\[59\\.625rem\\]{max-width:59.625rem}.lg\\:max-w-none{max-width:none}.lg\\:-translate-y-full{--tw-translate-y: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.lg\\:\\!grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))!important}.lg\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.lg\\:grid-cols-subgrid{grid-template-columns:subgrid}.lg\\:flex-row{flex-direction:row}.lg\\:justify-end{justify-content:flex-end}.lg\\:justify-between{justify-content:space-between}.lg\\:gap-3{gap:.75rem}.lg\\:gap-5{gap:1.25rem}.lg\\:gap-8{gap:2rem}.lg\\:border-x-0{border-left-width:0px;border-right-width:0px}.lg\\:border-b{border-bottom-width:1px}.lg\\:border-t-0{border-top-width:0px}.lg\\:border-solid{border-style:solid}.lg\\:border-neutral-subtle{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.lg\\:\\!bg-base{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--background-base-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.lg\\:bg-transparent{background-color:transparent}.lg\\:bg-\\[linear-gradient\\(185deg\\,transparent_30\\%\\,var\\(--base-color\\)_60\\%\\)\\]{background-image:linear-gradient(185deg,transparent 30%,var(--base-color) 60%)}.lg\\:\\!p-6{padding:1.5rem!important}.lg\\:px-10{padding-left:2.5rem;padding-right:2.5rem}.lg\\:pb-10{padding-bottom:2.5rem}.lg\\:pb-14{padding-bottom:3.5rem}.lg\\:pt-0{padding-top:0}.lg\\:pt-16{padding-top:4rem}.lg\\:pt-36{padding-top:9rem}.lg\\:text-size-lg-heading-large{font-size:var(--font-size-lg-heading-large);line-height:var(--line-height-lg-heading-large)}.lg\\:text-size-lg-heading-medium{font-size:var(--font-size-lg-heading-medium);line-height:var(--line-height-lg-heading-medium)}.lg\\:text-size-lg-heading-x-large{font-size:var(--font-size-lg-heading-x-large);line-height:var(--line-height-lg-heading-x-large)}.lg\\:blur-\\[30px\\]{--tw-blur: blur(30px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.group\\/menu[data-variant=mega] .lg\\:group-data-\\[variant\\=mega\\]\\/menu\\:mx-10{margin-left:2.5rem;margin-right:2.5rem}}.ltr\\:ml-6:where([dir=ltr],[dir=ltr] *){margin-left:1.5rem}.ltr\\:rounded-bl-xl:where([dir=ltr],[dir=ltr] *){border-bottom-left-radius:.75rem}.ltr\\:rounded-br-xl:where([dir=ltr],[dir=ltr] *){border-bottom-right-radius:.75rem}.ltr\\:rounded-tl-xl:where([dir=ltr],[dir=ltr] *){border-top-left-radius:.75rem}.ltr\\:rounded-tr-xl:where([dir=ltr],[dir=ltr] *){border-top-right-radius:.75rem}.ltr\\:border-l-0:where([dir=ltr],[dir=ltr] *){border-left-width:0px}.ltr\\:text-left:where([dir=ltr],[dir=ltr] *){text-align:left}.rtl\\:-left-0:where([dir=rtl],[dir=rtl] *){left:-0px}.rtl\\:-left-0\\.5:where([dir=rtl],[dir=rtl] *){left:-.125rem}.rtl\\:-left-2:where([dir=rtl],[dir=rtl] *){left:-.5rem}.rtl\\:-right-0:where([dir=rtl],[dir=rtl] *){right:-0px}.rtl\\:-right-0\\.5:where([dir=rtl],[dir=rtl] *){right:-.125rem}.rtl\\:-right-2:where([dir=rtl],[dir=rtl] *){right:-.5rem}.rtl\\:mr-6:where([dir=rtl],[dir=rtl] *){margin-right:1.5rem}.rtl\\:-rotate-45:where([dir=rtl],[dir=rtl] *){--tw-rotate: -45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rtl\\:rotate-180:where([dir=rtl],[dir=rtl] *){--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rtl\\:rotate-45:where([dir=rtl],[dir=rtl] *){--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rtl\\:scale-x-\\[-1\\]:where([dir=rtl],[dir=rtl] *){--tw-scale-x: -1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rtl\\:rounded-bl-xl:where([dir=rtl],[dir=rtl] *){border-bottom-left-radius:.75rem}.rtl\\:rounded-br-xl:where([dir=rtl],[dir=rtl] *){border-bottom-right-radius:.75rem}.rtl\\:rounded-tl-xl:where([dir=rtl],[dir=rtl] *){border-top-left-radius:.75rem}.rtl\\:rounded-tr-xl:where([dir=rtl],[dir=rtl] *){border-top-right-radius:.75rem}.rtl\\:border-r-0:where([dir=rtl],[dir=rtl] *){border-right-width:0px}.rtl\\:pl-2:where([dir=rtl],[dir=rtl] *){padding-left:.5rem}.rtl\\:pr-1:where([dir=rtl],[dir=rtl] *){padding-right:.25rem}.rtl\\:pr-1\\.5:where([dir=rtl],[dir=rtl] *){padding-right:.375rem}.rtl\\:pr-3:where([dir=rtl],[dir=rtl] *){padding-right:.75rem}.rtl\\:pr-4:where([dir=rtl],[dir=rtl] *){padding-right:1rem}.rtl\\:text-right:where([dir=rtl],[dir=rtl] *){text-align:right}.rtl\\:\\[transform\\:scaleX\\(-1\\)\\]:where([dir=rtl],[dir=rtl] *){transform:scaleX(-1)}.\\[\\&\\>\\*\\:nth-child\\(n\\+8\\)\\]\\:absolute>*:nth-child(n+8){position:absolute}.\\[\\&\\>\\*\\:nth-child\\(n\\+8\\)\\]\\:opacity-0>*:nth-child(n+8){opacity:0}.\\[\\&\\>button\\]\\:w-full>button{width:100%}@media(min-width:768px){.md\\:\\[\\&\\>button\\]\\:w-auto>button{width:auto}}.\\[\\&\\>div\\]\\:-rotate-90>div{--tw-rotate: -90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.\\[\\&\\>div\\]\\:rotate-180>div{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.\\[\\&\\>div\\]\\:rotate-90>div{--tw-rotate: 90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@media(min-width:768px){@media not all and (min-width:1280px){.md\\:max-lg\\:\\[\\&\\>li\\:last-child\\>\\:last-child\\]\\:truncate>li:last-child>:last-child{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.md\\:max-lg\\:\\[\\&\\>li\\:last-child\\]\\:overflow-hidden>li:last-child{overflow:hidden}}}.\\[\\&\\>li\\:nth-last-child\\(2\\)\\]\\:flex>li:nth-last-child(2){display:flex}.\\[\\&\\>li\\]\\:hidden>li{display:none}.\\[\\&\\>li\\]\\:flex-1>li{flex:1 1 0%}@media not all and (min-width:768px){.max-md\\:\\[\\&\\>span\\]\\:text-size-body-small>span{font-size:var(--font-size-body-small);line-height:var(--line-height-body-small)}}@media(min-width:1280px){.lg\\:\\[\\&\\>svg\\]\\:h-16>svg{height:4rem}.lg\\:\\[\\&\\>svg\\]\\:w-16>svg{width:4rem}}@media(min-width:768px){.md\\:\\[\\&\\[data-trailing-bottom\\=true\\]\\]\\:items-end[data-trailing-bottom=true]{align-items:flex-end}}.\\[\\&\\[data-trailing-slot-bottom\\=true\\]\\]\\:items-end[data-trailing-slot-bottom=true]{align-items:flex-end}.\\[\\&_\\.paloma-toast\\]\\:outline .paloma-toast{outline-style:solid}.\\[\\&_\\.paloma-toast\\]\\:outline-2 .paloma-toast{outline-width:2px}.\\[\\&_\\.paloma-toast\\]\\:outline-offset-2 .paloma-toast{outline-offset:2px}.\\[\\&_\\.paloma-toast\\]\\:outline-interactive-highlight .paloma-toast{outline-color:var(--interactive-highlight-color)}.\\[\\&_\\[data-variant\\=danger\\]\\]\\:\\!bg-interactive-neutral-regular [data-variant=danger]{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--interactive-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.\\[\\&_\\[data-variant\\=inverse\\]\\]\\:\\!bg-interactive-neutral-subtle [data-variant=inverse]{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--interactive-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.\\[\\&_\\[data-variant\\=primary\\]\\]\\:\\!bg-content-neutral-regular [data-variant=primary]{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.\\[\\&_\\[data-variant\\=secondary\\]\\]\\:\\!bg-interactive-neutral-regular [data-variant=secondary]{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--interactive-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.\\[\\&_\\[data-vrt-overlay\\]\\]\\:\\!bg-content-neutral-bold\\/\\[0\\.08\\] [data-vrt-overlay]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)!important}.\\[\\&_\\[data-vrt-overlay\\]\\]\\:\\!bg-content-neutral-bold\\/\\[0\\.12\\] [data-vrt-overlay]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)!important}.\\[\\&_\\[role\\=tab\\]\\]\\:bg-content-neutral-regular\\/\\[0\\.08\\] [role=tab]{background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent 92%)}.\\[\\&_\\[role\\=tab\\]\\]\\:outline [role=tab]{outline-style:solid}.\\[\\&_\\[role\\=tab\\]\\]\\:outline-\\[3px\\] [role=tab]{outline-width:3px}.\\[\\&_\\[role\\=tab\\]\\]\\:outline-offset-2 [role=tab]{outline-offset:2px}.\\[\\&_\\[role\\=tab\\]\\]\\:outline-interactive-highlight [role=tab]{outline-color:var(--interactive-highlight-color)}.\\[\\&_a\\]\\:rounded-sm a{border-radius:.125rem}.\\[\\&_a\\]\\:bg-content-neutral-bold\\/\\[0\\.08\\] a{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.\\[\\&_a\\]\\:outline a{outline-style:solid}.\\[\\&_a\\]\\:outline-2 a{outline-width:2px}.\\[\\&_a\\]\\:outline-offset-2 a{outline-offset:2px}.\\[\\&_a\\]\\:outline-interactive-highlight a{outline-color:var(--interactive-highlight-color)}.\\[\\&_button\\]\\:rounded-md button{border-radius:.375rem}.\\[\\&_button\\]\\:\\!bg-surface-level-02 button{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--surface-level-02-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.\\[\\&_button\\]\\:bg-content-neutral-bold\\/\\[0\\.08\\] button{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.\\[\\&_button\\]\\:bg-content-neutral-bold\\/\\[0\\.12\\] button{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.\\[\\&_button\\]\\:outline button{outline-style:solid}.\\[\\&_button\\]\\:outline-2 button{outline-width:2px}.\\[\\&_button\\]\\:outline-offset-2 button{outline-offset:2px}.\\[\\&_button\\]\\:outline-interactive-highlight button{outline-color:var(--interactive-highlight-color)}@media not all and (min-width:1280px){.\\[\\&_span\\[data-logo-product-name\\=paloma-logo\\]\\]\\:max-lg\\:hidden span[data-logo-product-name=paloma-logo]{display:none}}@media(hover:hover){.\\[\\@media\\(hover\\:hover\\)\\]\\:hover\\:bg-content-neutral-bold\\/\\[0\\.08\\]:where([data-rac])[data-hovered]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.\\[\\@media\\(hover\\:hover\\)\\]\\:hover\\:bg-surface-level-02:where([data-rac])[data-hovered]{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-level-02-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.\\[\\@media\\(hover\\:hover\\)\\]\\:hover\\:active\\:bg-content-neutral-bold\\/\\[0\\.12\\]:active:where([data-rac])[data-hovered]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.\\[\\@media\\(hover\\:hover\\)\\]\\:hover\\:bg-content-neutral-bold\\/\\[0\\.08\\]:where(:not([data-rac])):hover{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.\\[\\@media\\(hover\\:hover\\)\\]\\:hover\\:bg-surface-level-02:where(:not([data-rac])):hover{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-level-02-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.\\[\\@media\\(hover\\:hover\\)\\]\\:hover\\:active\\:bg-content-neutral-bold\\/\\[0\\.12\\]:active:where(:not([data-rac])):hover{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.group:where([data-rac])[data-hovered] .\\[\\@media\\(hover\\:hover\\)\\]\\:group-hover\\:underline{text-decoration-line:underline}.group:where([data-rac])[data-hovered] .\\[\\@media\\(hover\\:hover\\)\\]\\:group-hover\\:no-underline{text-decoration-line:none}.group:where(:not([data-rac])):hover .\\[\\@media\\(hover\\:hover\\)\\]\\:group-hover\\:underline{text-decoration-line:underline}.group:where(:not([data-rac])):hover .\\[\\@media\\(hover\\:hover\\)\\]\\:group-hover\\:no-underline{text-decoration-line:none}}[tabindex="0"].\\[\\[tabindex\\=\\'0\\'\\]\\&\\:focus-visible\\]\\:outline:focus-visible{outline-style:solid}[tabindex="0"].\\[\\[tabindex\\=\\'0\\'\\]\\&\\:focus-visible\\]\\:outline-2:focus-visible{outline-width:2px}[tabindex="0"].\\[\\[tabindex\\=\\'0\\'\\]\\&\\:focus-visible\\]\\:outline-offset-2:focus-visible{outline-offset:2px}[tabindex="0"].\\[\\[tabindex\\=\\'0\\'\\]\\&\\:focus-visible\\]\\:outline-offset-\\[-3px\\]:focus-visible{outline-offset:-3px}[tabindex="0"].\\[\\[tabindex\\=\\'0\\'\\]\\&\\:focus-visible\\]\\:outline-interactive-highlight:focus-visible{outline-color:var(--interactive-highlight-color)}`;
var Qs = { exports: {} }, Io = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dp;
function nv() {
  if (dp) return Io;
  dp = 1;
  var r = Ru(), n = Symbol.for("react.element"), i = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(g, p, d) {
    var b, w = {}, v = null, k = null;
    d !== void 0 && (v = "" + d), p.key !== void 0 && (v = "" + p.key), p.ref !== void 0 && (k = p.ref);
    for (b in p) s.call(p, b) && !f.hasOwnProperty(b) && (w[b] = p[b]);
    if (g && g.defaultProps) for (b in p = g.defaultProps, p) w[b] === void 0 && (w[b] = p[b]);
    return { $$typeof: n, type: g, key: v, ref: k, props: w, _owner: c.current };
  }
  return Io.Fragment = i, Io.jsx = h, Io.jsxs = h, Io;
}
var fp;
function ov() {
  return fp || (fp = 1, Qs.exports = nv()), Qs.exports;
}
var fe = ov();
function Vn(r) {
  if (iv()) r.focus({
    preventScroll: !0
  });
  else {
    let n = av(r);
    r.focus(), lv(n);
  }
}
let va = null;
function iv() {
  if (va == null) {
    va = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return va = !0, !0;
        }
      });
    } catch {
    }
  }
  return va;
}
function av(r) {
  let n = r.parentNode, i = [], s = document.scrollingElement || document.documentElement;
  for (; n instanceof HTMLElement && n !== s; )
    (n.offsetHeight < n.scrollHeight || n.offsetWidth < n.scrollWidth) && i.push({
      element: n,
      scrollTop: n.scrollTop,
      scrollLeft: n.scrollLeft
    }), n = n.parentNode;
  return s instanceof HTMLElement && i.push({
    element: s,
    scrollTop: s.scrollTop,
    scrollLeft: s.scrollLeft
  }), i;
}
function lv(r) {
  for (let { element: n, scrollTop: i, scrollLeft: s } of r)
    n.scrollTop = i, n.scrollLeft = s;
}
const qe = (r) => sv(r) ? r.document : uv(r) ? r : (r == null ? void 0 : r.ownerDocument) ?? (typeof document < "u" ? document : void 0), Tt = (r) => {
  let n = qe(r);
  return (n == null ? void 0 : n.defaultView) ?? (typeof window < "u" ? window : void 0);
};
function vh(r) {
  return r !== null && typeof r == "object" && "nodeType" in r && typeof r.nodeType == "number";
}
function sv(r) {
  return typeof r == "object" && r != null && "window" in r && r.window === r;
}
function uv(r) {
  return vh(r) && r.nodeType === 9;
}
function wh(r) {
  return vh(r) && r.nodeType === 11 && "host" in r;
}
let cv = !1;
function Nu() {
  return cv;
}
function Qe(r, n) {
  var s;
  if (!Nu()) return n && r ? r.contains(n) : !1;
  if (!r || !n) return !1;
  let i = n;
  for (; i !== null; ) {
    if (i === r) return !0;
    typeof i.assignedElements != "function" && ((s = i.assignedSlot) != null && s.parentNode) ? i = i.assignedSlot.parentNode : wh(i) ? i = i.host : i = i.parentNode;
  }
  return !1;
}
const sr = (r = document) => {
  var i;
  if (!Nu()) return r.activeElement;
  let n = r.activeElement;
  for (; n && "shadowRoot" in n && ((i = n.shadowRoot) != null && i.activeElement); ) n = n.shadowRoot.activeElement;
  return n;
};
function Te(r) {
  if (Nu() && r.target instanceof Element && r.target.shadowRoot) {
    if ("composedPath" in r) return r.composedPath()[0] ?? null;
    if ("composedPath" in r.nativeEvent) return r.nativeEvent.composedPath()[0] ?? null;
  }
  return r.target;
}
const dv = typeof Element < "u" && "checkVisibility" in Element.prototype;
function fv(r) {
  const n = Tt(r);
  if (!(r instanceof n.HTMLElement) && !(r instanceof n.SVGElement)) return !1;
  let { display: i, visibility: s } = r.style, c = i !== "none" && s !== "hidden" && s !== "collapse";
  if (c) {
    const { getComputedStyle: f } = Tt(r);
    let { display: h, visibility: g } = f(r);
    c = h !== "none" && g !== "hidden" && g !== "collapse";
  }
  return c;
}
function pv(r, n) {
  return !r.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !r.hasAttribute("data-react-aria-prevent-focus") && (r.nodeName === "DETAILS" && n && n.nodeName !== "SUMMARY" ? r.hasAttribute("open") : !0);
}
function yh(r, n) {
  return dv ? r.checkVisibility({
    visibilityProperty: !0
  }) && !r.closest("[data-react-aria-prevent-focus]") : r.nodeName !== "#comment" && fv(r) && pv(r, n) && (!r.parentElement || yh(r.parentElement, r));
}
const bh = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable^="false"])',
  "permission"
], hv = bh.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
bh.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
function mv(r, n) {
  return r.matches(hv) && !gv(r) && ((n == null ? void 0 : n.skipVisibilityCheck) || yh(r));
}
function gv(r) {
  let n = r;
  for (; n != null; ) {
    if (n instanceof Tt(n).HTMLElement && n.inert) return !0;
    n = n.parentElement;
  }
  return !1;
}
const Mu = typeof document < "u" ? re.useLayoutEffect : () => {
};
function Ou(r) {
  let n = r;
  return n.nativeEvent = r, n.isDefaultPrevented = () => n.defaultPrevented, n.isPropagationStopped = () => n.cancelBubble, n.persist = () => {
  }, n;
}
function xh(r, n) {
  Object.defineProperty(r, "target", {
    value: n
  }), Object.defineProperty(r, "currentTarget", {
    value: n
  });
}
function kh(r) {
  let n = B.useRef({
    isFocused: !1,
    observer: null
  });
  return Mu(() => {
    const i = n.current;
    return () => {
      i.observer && (i.observer.disconnect(), i.observer = null);
    };
  }, []), B.useCallback((i) => {
    let s = Te(i);
    if (s instanceof HTMLButtonElement || s instanceof HTMLInputElement || s instanceof HTMLTextAreaElement || s instanceof HTMLSelectElement) {
      n.current.isFocused = !0;
      let c = s, f = (h) => {
        if (n.current.isFocused = !1, c.disabled) {
          let g = Ou(h);
          r == null || r(g);
        }
        n.current.observer && (n.current.observer.disconnect(), n.current.observer = null);
      };
      c.addEventListener("focusout", f, {
        once: !0
      }), n.current.observer = new MutationObserver(() => {
        var h;
        if (n.current.isFocused && c.disabled) {
          (h = n.current.observer) == null || h.disconnect();
          let g = c === sr() ? null : sr();
          c.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: g
          })), c.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: g
          }));
        }
      }), n.current.observer.observe(c, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    r
  ]);
}
let Aa = !1;
function vv(r) {
  for (; r && !mv(r, {
    skipVisibilityCheck: !0
  }); ) r = r.parentElement;
  let n = Tt(r), i = sr(n.document);
  if (!i || i === r) return;
  let s = r == null ? void 0 : r.getRootNode(), c = s != null && wh(s) ? s : Tt(r), f = (C) => C === r || C != null && Qe(r, C), h = (C) => C === i || i != null && C != null && Qe(i, C);
  Aa = !0;
  let g = !1, p = (C) => {
    (h(Te(C)) || g) && C.stopImmediatePropagation();
  }, d = (C) => {
    (h(Te(C)) || g) && (C.stopImmediatePropagation(), !r && !g && (g = !0, Vn(i), v()));
  }, b = (C) => {
    (f(Te(C)) || g) && C.stopImmediatePropagation();
  }, w = (C) => {
    (f(Te(C)) || g) && (C.stopImmediatePropagation(), g || (g = !0, Vn(i), v()));
  };
  c.addEventListener("blur", p, !0), c.addEventListener("focusout", d, !0), c.addEventListener("focusin", w, !0), c.addEventListener("focus", b, !0);
  let v = () => {
    cancelAnimationFrame(k), c.removeEventListener("blur", p, !0), c.removeEventListener("focusout", d, !0), c.removeEventListener("focusin", w, !0), c.removeEventListener("focus", b, !0), Aa = !1, g = !1;
  }, k = requestAnimationFrame(v);
  return v;
}
function ja(r) {
  var i;
  if (typeof window > "u" || window.navigator == null) return !1;
  let n = (i = window.navigator.userAgentData) == null ? void 0 : i.brands;
  return Array.isArray(n) && n.some((s) => r.test(s.brand)) || r.test(window.navigator.userAgent);
}
function Du(r) {
  var n;
  return typeof window < "u" && window.navigator != null ? r.test(((n = window.navigator.userAgentData) == null ? void 0 : n.platform) || window.navigator.platform) : !1;
}
function Lr(r) {
  let n = null;
  return () => (n == null && (n = r()), n);
}
const Jr = Lr(function() {
  return Du(/^Mac/i);
}), wv = Lr(function() {
  return Du(/^iPhone/i);
}), _h = Lr(function() {
  return Du(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Jr() && navigator.maxTouchPoints > 1;
}), ju = Lr(function() {
  return wv() || _h();
}), za = Lr(function() {
  return ja(/AppleWebKit/i) && (ju() || !yv());
}), yv = Lr(function() {
  return ja(/Chrome|CriOS|CrMo/i);
}), fu = Lr(function() {
  return ja(/Android/i);
}), bv = Lr(function() {
  return ja(/(Firefox|FxiOS)/i);
});
function Eh(r) {
  return r.pointerType === "" && r.isTrusted ? !0 : fu() && r.pointerType ? r.type === "click" && r.buttons === 1 : r.detail === 0 && !r.pointerType;
}
function xv(r) {
  return !fu() && r.width === 0 && r.height === 0 || fu() && r.width === 1 && r.height === 1 && r.pressure === 0 && r.detail === 0 && r.pointerType === "mouse";
}
function en(r, n, i = !0) {
  var p, d;
  let { metaKey: s, ctrlKey: c, altKey: f, shiftKey: h } = n;
  !za() && bv() && ((d = (p = window.event) == null ? void 0 : p.type) != null && d.startsWith("key")) && r.target === "_blank" && (Jr() ? s = !0 : c = !0);
  let g = za() && Jr() && !_h() ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: s,
    ctrlKey: c,
    altKey: f,
    shiftKey: h
  }) : new MouseEvent("click", {
    metaKey: s,
    ctrlKey: c,
    altKey: f,
    shiftKey: h,
    detail: 1,
    bubbles: !0,
    cancelable: !0
  });
  en.isOpening = i, Vn(r), r.dispatchEvent(g), en.isOpening = !1;
}
en.isOpening = !1;
let Hn = null;
const pu = /* @__PURE__ */ new Set();
let jo = /* @__PURE__ */ new Map(), tn = !1, ka = !1;
const kv = {
  Tab: !0,
  Escape: !0
};
function Uu(r, n) {
  for (let i of pu) i(r, n);
}
function _v(r) {
  return !(r.metaKey || !Jr() && r.altKey || r.ctrlKey || r.key === "Control" || r.key === "Shift" || r.key === "Meta");
}
function $a(r) {
  tn = !0, !en.isOpening && _v(r) && (Hn = "keyboard", Uu("keyboard", r));
}
function Mn(r) {
  Hn = "pointer", "pointerType" in r && r.pointerType, (r.type === "mousedown" || r.type === "pointerdown") && (tn = !0, Uu("pointer", r));
}
function Sh(r) {
  !en.isOpening && Eh(r) && (tn = !0, Hn = "virtual");
}
function Ch(r) {
  if (Aa) return;
  let n = Te(r), i = Tt(n), s = qe(n);
  if (n === i) {
    ka = !0;
    return;
  }
  n === s || !r.isTrusted || (!tn && !ka && (Hn = "virtual", Uu("virtual", r)), tn = !1, ka = !1);
}
function Fh() {
  Aa || (tn = !1, ka = !0);
}
function hu(r) {
  if (typeof window > "u" || typeof document > "u") return;
  const n = Tt(r), i = qe(r);
  if (jo.get(n)) return;
  let s = n.HTMLElement.prototype.focus;
  Reflect.defineProperty(n.HTMLElement.prototype, "focus", {
    configurable: !0,
    writable: !0,
    value: function() {
      tn = !0, s.apply(this, arguments);
    }
  }), i.addEventListener("keydown", $a, !0), i.addEventListener("keyup", $a, !0), i.addEventListener("click", Sh, !0), n.addEventListener("focus", Ch, !0), n.addEventListener("blur", Fh, !1), typeof PointerEvent < "u" && (i.addEventListener("pointerdown", Mn, !0), i.addEventListener("pointermove", Mn, !0), i.addEventListener("pointerup", Mn, !0)), n.addEventListener("beforeunload", () => {
    Ph(r);
  }, {
    once: !0
  }), jo.set(n, {
    focus: s
  });
}
const Ph = (r, n) => {
  const i = Tt(r), s = qe(r);
  n && s.removeEventListener("DOMContentLoaded", n), jo.has(i) && (Reflect.defineProperty(i.HTMLElement.prototype, "focus", {
    configurable: !0,
    writable: !0,
    value: jo.get(i).focus
  }), s.removeEventListener("keydown", $a, !0), s.removeEventListener("keyup", $a, !0), s.removeEventListener("click", Sh, !0), i.removeEventListener("focus", Ch, !0), i.removeEventListener("blur", Fh, !1), typeof PointerEvent < "u" && (s.removeEventListener("pointerdown", Mn, !0), s.removeEventListener("pointermove", Mn, !0), s.removeEventListener("pointerup", Mn, !0)), jo.delete(i));
};
function Ev(r) {
  const n = qe(r);
  let i;
  return n.readyState !== "loading" ? hu(r) : (i = () => {
    hu(r);
  }, n.addEventListener("DOMContentLoaded", i)), () => Ph(r, i);
}
typeof document < "u" && Ev();
function mu() {
  return Hn !== "pointer";
}
function Sv() {
  return Hn;
}
const Cv = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function Fv(r, n, i) {
  let s = i ? Te(i) : void 0, c = qe(s), f = Tt(s);
  const h = typeof f < "u" ? f.HTMLInputElement : HTMLInputElement, g = typeof f < "u" ? f.HTMLTextAreaElement : HTMLTextAreaElement, p = typeof f < "u" ? f.HTMLElement : HTMLElement, d = typeof f < "u" ? f.KeyboardEvent : KeyboardEvent;
  let b = sr(c);
  return r = r || b instanceof h && !Cv.has(b.type) || b instanceof g || b instanceof p && b.isContentEditable, !(r && n === "keyboard" && i instanceof d && !kv[i.key]);
}
function Pv(r, n, i) {
  hu(), B.useEffect(() => {
    if ((i == null ? void 0 : i.enabled) === !1) return;
    let s = (c, f) => {
      Fv(!!(i != null && i.isTextInput), c, f) && r(mu());
    };
    return pu.add(s), () => {
      pu.delete(s);
    };
  }, n);
}
let Ar = /* @__PURE__ */ new Map(), gu = /* @__PURE__ */ new Set();
function pp() {
  if (typeof window > "u") return;
  function r(s) {
    return "propertyName" in s;
  }
  let n = (s) => {
    let c = Te(s);
    if (!r(s) || !c) return;
    let f = Ar.get(c);
    f || (f = /* @__PURE__ */ new Set(), Ar.set(c, f), c.addEventListener("transitioncancel", i, {
      once: !0
    })), f.add(s.propertyName);
  }, i = (s) => {
    let c = Te(s);
    if (!r(s) || !c) return;
    let f = Ar.get(c);
    if (f && (f.delete(s.propertyName), f.size === 0 && (c.removeEventListener("transitioncancel", i), Ar.delete(c)), Ar.size === 0)) {
      for (let h of gu) h();
      gu.clear();
    }
  };
  document.body.addEventListener("transitionrun", n), document.body.addEventListener("transitionend", i);
}
typeof document < "u" && (document.readyState !== "loading" ? pp() : document.addEventListener("DOMContentLoaded", pp));
function Tv() {
  for (const [r] of Ar)
    "isConnected" in r && !r.isConnected && Ar.delete(r);
}
function Th(r) {
  requestAnimationFrame(() => {
    Tv(), Ar.size === 0 ? r() : gu.add(r);
  });
}
function Av(r) {
  if (!r.isConnected) return;
  const n = qe(r);
  if (Sv() === "virtual") {
    let i = sr(n);
    Th(() => {
      const s = sr(n);
      (s === i || s === n.body) && r.isConnected && Vn(r);
    });
  } else Vn(r);
}
function Ia(...r) {
  return (...n) => {
    for (let i of r) typeof i == "function" && i(...n);
  };
}
let vu = /* @__PURE__ */ new Map();
typeof FinalizationRegistry < "u" && new FinalizationRegistry((r) => {
  vu.delete(r);
});
function zv(r, n) {
  if (r === n) return r;
  let i = vu.get(r);
  if (i)
    return i.forEach((c) => c.current = n), n;
  let s = vu.get(n);
  return s ? (s.forEach((c) => c.current = r), r) : n;
}
function Vu(...r) {
  return r.length === 1 && r[0] ? r[0] : (n) => {
    let i = !1;
    const s = r.map((c) => {
      const f = hp(c, n);
      return i || (i = typeof f == "function"), f;
    });
    if (i) return () => {
      s.forEach((c, f) => {
        typeof c == "function" ? c() : hp(r[f], null);
      });
    };
  };
}
function hp(r, n) {
  if (typeof r == "function") return r(n);
  r != null && (r.current = n);
}
function Ah(r) {
  var n, i, s = "";
  if (typeof r == "string" || typeof r == "number") s += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var c = r.length;
    for (n = 0; n < c; n++) r[n] && (i = Ah(r[n])) && (s && (s += " "), s += i);
  } else for (i in r) r[i] && (s && (s += " "), s += i);
  return s;
}
function Bu() {
  for (var r, n, i = 0, s = "", c = arguments.length; i < c; i++) (r = arguments[i]) && (n = Ah(r)) && (s && (s += " "), s += n);
  return s;
}
function ur(...r) {
  let n = {
    ...r[0]
  };
  for (let i = 1; i < r.length; i++) {
    let s = r[i];
    for (let c in s) {
      let f = n[c], h = s[c];
      typeof f == "function" && typeof h == "function" && // This is a lot faster than a regex.
      c[0] === "o" && c[1] === "n" && c.charCodeAt(2) >= /* 'A' */
      65 && c.charCodeAt(2) <= /* 'Z' */
      90 ? n[c] = Ia(f, h) : (c === "className" || c === "UNSAFE_className") && typeof f == "string" && typeof h == "string" ? n[c] = Bu(f, h) : c === "id" && f && h ? n.id = zv(f, h) : c === "ref" && f && h ? n.ref = Vu(f, h) : n[c] = h !== void 0 ? h : f;
    }
  }
  return n;
}
function zh(r) {
  let { isDisabled: n, onFocus: i, onBlur: s, onFocusChange: c } = r;
  const f = B.useCallback((p) => {
    if (Te(p) === p.currentTarget)
      return s && s(p), c && c(!1), !0;
  }, [
    s,
    c
  ]), h = kh(f), g = B.useCallback((p) => {
    let d = Te(p);
    const b = qe(d), w = b ? sr(b) : sr();
    d === p.currentTarget && d === w && (i && i(p), c && c(!0), h(p));
  }, [
    c,
    i,
    h
  ]);
  return {
    focusProps: {
      onFocus: !n && (i || c || s) ? g : void 0,
      onBlur: !n && (s || c) ? f : void 0
    }
  };
}
function wa(r) {
  if (r)
    return (n) => {
      let i = !0, s = {
        ...n,
        preventDefault() {
          n.preventDefault();
        },
        isDefaultPrevented() {
          return n.isDefaultPrevented();
        },
        stopPropagation() {
          i = !0;
        },
        continuePropagation() {
          i = !1, typeof n.continuePropagation == "function" && n.continuePropagation();
        },
        isPropagationStopped() {
          return i;
        }
      };
      r(s), i && !(typeof n.isPropagationStopped == "function" && n.isPropagationStopped()) && n.stopPropagation();
    };
}
const $v = /* @__PURE__ */ new Set([
  "shift",
  "alt",
  "control",
  "meta",
  "mod"
  // OS dependent - Cmd on Mac, Control on Windows/Linux
]), Iv = [
  "Alt",
  "Control",
  "Meta",
  "Shift"
];
function Lv(r) {
  let n = /* @__PURE__ */ new Set();
  return r.alt && n.add("Alt"), r.shift && n.add("Shift"), r.ctrl && n.add("Control"), r.meta && n.add("Meta"), r.mod && n.add(Jr() ? "Meta" : "Control"), n;
}
function Rv(r) {
  let n = /* @__PURE__ */ new Set();
  return r.altKey && n.add("Alt"), r.ctrlKey && n.add("Control"), r.metaKey && n.add("Meta"), r.shiftKey && n.add("Shift"), n;
}
function $h(r) {
  return Iv.filter((n) => r.has(n));
}
function Nv(r) {
  let n = r.split("+").reduce((i, s) => {
    let c = s.toLowerCase();
    return $v.has(c) ? c === "shift" ? i.shift = !0 : c === "alt" ? i.alt = !0 : c === "control" ? i.ctrl = !0 : c === "meta" ? i.meta = !0 : c === "mod" && (i.mod = !0) : i.key = s, i;
  }, {
    shift: !1,
    alt: !1,
    ctrl: !1,
    meta: !1,
    mod: !1,
    key: ""
  });
  if (n.key === "") throw new Error(`Invalid keyboard shortcut: "${r}". Must include exactly one non-modifier key (e.g. "a", "Enter", "ArrowDown"). Combine any of Shift, Alt, Ctrl, Meta, and Mod.`);
  return n;
}
function Ih(r) {
  return r.toLowerCase();
}
const Mv = {
  space: " ",
  esc: "escape",
  del: "delete",
  ins: "insert",
  left: "arrowleft",
  right: "arrowright",
  up: "arrowup",
  down: "arrowdown",
  pageup: "pageup",
  pagedown: "pagedown"
};
function Ov(r) {
  let n = Ih(r), i = Mv[n];
  return i ?? n;
}
function Dv(r) {
  let n = $h(Lv(r)), i = Ov(r.key);
  return n.length > 0 ? `${n.join("+")}+${i}` : i;
}
function jv(r) {
  let n = $h(Rv(r)), i = Ih(r.key);
  return (n.length > 0 ? `${n.join("+")}+` : "") + i;
}
function Uv(r) {
  let n = /* @__PURE__ */ new Map();
  for (let [i, s] of Object.entries(r)) {
    let c = Nv(i);
    n.set(Dv(c), s);
  }
  return (i) => {
    let s = jv(i), c = n.get(s), f = c == null ? void 0 : c(i);
    f === void 0 && c !== void 0 ? f = {
      shouldContinuePropagation: !1,
      shouldPreventDefault: !0
    } : typeof f == "boolean" && (f = {
      shouldContinuePropagation: !f,
      shouldPreventDefault: f
    }), f != null && f.shouldPreventDefault && i.preventDefault(), (!c || f != null && f.shouldContinuePropagation) && i.continuePropagation();
  };
}
function Vv(r) {
  let { shortcuts: n, allowRepeats: i = !1, allowComposing: s = !1 } = r, c, f;
  if (n) {
    let h = Uv(n), g = wa((d) => {
      var b, w;
      if (!Qe(d.currentTarget, Te(d))) {
        d.continuePropagation();
        return;
      }
      if ((b = d.nativeEvent) != null && b.repeat && !i || (w = d.nativeEvent) != null && w.isComposing && !s) {
        d.continuePropagation();
        return;
      }
      h(d);
    }), p = wa((d) => {
      var b, w;
      if (!Qe(d.currentTarget, Te(d))) {
        d.continuePropagation();
        return;
      }
      if ((b = d.nativeEvent) != null && b.repeat && !i || (w = d.nativeEvent) != null && w.isComposing && !s) {
        d.continuePropagation();
        return;
      }
      d.continuePropagation();
    });
    c = r.onKeyDown ? Ia(r.onKeyDown, g) : g, f = r.onKeyUp ? Ia(r.onKeyUp, p) : p;
  } else
    c = wa(r.onKeyDown), f = wa(r.onKeyUp);
  return {
    keyboardProps: r.isDisabled ? {} : {
      onKeyDown: c,
      onKeyUp: f
    }
  };
}
function Lh(r, n) {
  Mu(() => {
    if (r && r.ref && n)
      return r.ref.current = n.current, () => {
        r.ref && (r.ref.current = null);
      };
  });
}
let Bv = /* @__PURE__ */ re.createContext(null);
function Hv(r) {
  let n = B.useContext(Bv) || {};
  Lh(n, r);
  let { ref: i, ...s } = n;
  return s;
}
function Wv(r, n) {
  let { focusProps: i } = zh(r), { keyboardProps: s } = Vv(r), c = ur(i, s), f = Hv(n), h = r.isDisabled ? {} : f, g = B.useRef(r.autoFocus);
  B.useEffect(() => {
    g.current && n.current && Av(n.current), g.current = !1;
  }, [
    n
  ]);
  let p = r.excludeFromTabOrder ? -1 : 0;
  return r.isDisabled && (p = void 0), {
    focusableProps: ur({
      ...c,
      tabIndex: p
    }, h)
  };
}
var Kv = gh();
const Yv = re.useInsertionEffect ?? Mu;
function Gs(r) {
  const n = B.useRef(null);
  return Yv(() => {
    n.current = r;
  }, [
    r
  ]), B.useCallback((...i) => {
    const s = n.current;
    return s == null ? void 0 : s(...i);
  }, []);
}
const Qv = /* @__PURE__ */ new Set([
  "id"
]), Gv = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), Xv = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), qv = /* @__PURE__ */ new Set([
  "dir",
  "lang",
  "hidden",
  "inert",
  "translate"
]), mp = /* @__PURE__ */ new Set([
  "onClick",
  "onAuxClick",
  "onContextMenu",
  "onDoubleClick",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp",
  "onTouchCancel",
  "onTouchEnd",
  "onTouchMove",
  "onTouchStart",
  "onPointerDown",
  "onPointerMove",
  "onPointerUp",
  "onPointerCancel",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerOver",
  "onPointerOut",
  "onGotPointerCapture",
  "onLostPointerCapture",
  "onScroll",
  "onWheel",
  "onAnimationStart",
  "onAnimationEnd",
  "onAnimationIteration",
  "onTransitionCancel",
  "onTransitionEnd",
  "onTransitionRun",
  "onTransitionStart"
]), Zv = /^(data-.*)$/;
function Jv(r, n = {}) {
  let { labelable: i, isLink: s, global: c, events: f = c, propNames: h } = n, g = {};
  for (const p in r) Object.prototype.hasOwnProperty.call(r, p) && (Qv.has(p) || i && Gv.has(p) || s && Xv.has(p) || c && qv.has(p) || f && (mp.has(p) || p.endsWith("Capture") && mp.has(p.slice(0, -7))) || h != null && h.has(p) || Zv.test(p)) && (g[p] = r[p]);
  return g;
}
let Nn = "default", wu = "", _a = /* @__PURE__ */ new WeakMap();
function e1(r) {
  if (ju() && za()) {
    if (Nn === "default") {
      const n = qe(r);
      wu = n.documentElement.style.webkitUserSelect, n.documentElement.style.webkitUserSelect = "none";
    }
    Nn = "disabled";
  } else if (r instanceof HTMLElement || r instanceof SVGElement) {
    let n = "userSelect" in r.style ? "userSelect" : "webkitUserSelect";
    _a.set(r, r.style[n]), r.style[n] = "none";
  }
}
function gp(r) {
  if (ju() && za()) {
    if (Nn !== "disabled") return;
    Nn = "restoring", setTimeout(() => {
      Th(() => {
        if (Nn === "restoring") {
          const n = qe(r);
          n.documentElement.style.webkitUserSelect === "none" && (n.documentElement.style.webkitUserSelect = wu || ""), wu = "", Nn = "default";
        }
      });
    }, 300);
  } else if ((r instanceof HTMLElement || r instanceof SVGElement) && r && _a.has(r)) {
    let n = _a.get(r), i = "userSelect" in r.style ? "userSelect" : "webkitUserSelect";
    r.style[i] === "none" && (r.style[i] = n), r.getAttribute("style") === "" && r.removeAttribute("style"), _a.delete(r);
  }
}
function t1(r, n) {
  let i = Tt(n), s = qe(n);
  if (s == null || i == null) return;
  let c, f = `meta[name="${CSS.escape(r)}"], meta[property="${CSS.escape(r)}"]`, h = s.querySelector(f);
  return h && h instanceof i.HTMLMetaElement && (r === "csp-nonce" && h.nonce && (c ?? (c = h.nonce || void 0)), h.content && (c ?? (c = h.content || void 0))), r === "csp-nonce" && (c ?? (c = i.__webpack_nonce__ || globalThis.__webpack_nonce__ || void 0)), c;
}
let vp = /* @__PURE__ */ new WeakMap();
function r1(r) {
  let n = qe(r), i = vp.get(n);
  return i ?? (i = t1("csp-nonce", n)), i !== void 0 && vp.set(n, i), i;
}
const Rh = re.createContext({
  register: () => {
  }
});
Rh.displayName = "PressResponderContext";
function Nh() {
  let r = B.useRef(/* @__PURE__ */ new Map()), n = B.useCallback((c, f, h, g) => {
    let p = g != null && g.once ? (...d) => {
      r.current.delete(h), h(...d);
    } : h;
    r.current.set(h, {
      type: f,
      eventTarget: c,
      fn: p,
      options: g
    }), c.addEventListener(f, p, g);
  }, []), i = B.useCallback((c, f, h, g) => {
    var d;
    let p = ((d = r.current.get(h)) == null ? void 0 : d.fn) || h;
    c.removeEventListener(f, p, g), r.current.delete(h);
  }, []), s = B.useCallback(() => {
    r.current.forEach((c, f) => {
      i(c.eventTarget, c.type, f, c.options);
    });
  }, [
    i
  ]);
  return B.useEffect(() => s, [
    s
  ]), {
    addGlobalListener: n,
    removeGlobalListener: i,
    removeAllGlobalListeners: s
  };
}
function n1(r) {
  let n = B.useContext(Rh);
  if (n) {
    let { register: i, ref: s, ...c } = n;
    r = ur(c, r), i();
  }
  return Lh(n, r.ref), r;
}
var Un;
class ya {
  constructor(n, i, s, c) {
    np(this, Un);
    Bs(this, Un, !0);
    let f = (c == null ? void 0 : c.target) ?? s.currentTarget;
    const h = f == null ? void 0 : f.getBoundingClientRect();
    let g, p = 0, d, b = null;
    s.clientX != null && s.clientY != null && (d = s.clientX, b = s.clientY), h && (d != null && b != null ? (g = d - h.left, p = b - h.top) : (g = h.width / 2, p = h.height / 2)), this.type = n, this.pointerType = i, this.target = s.currentTarget, this.shiftKey = s.shiftKey, this.metaKey = s.metaKey, this.ctrlKey = s.ctrlKey, this.altKey = s.altKey, this.x = g, this.y = p, this.key = s.key;
  }
  continuePropagation() {
    Bs(this, Un, !1);
  }
  get shouldStopPropagation() {
    return rp(this, Un);
  }
}
Un = new WeakMap();
const wp = Symbol("linkClicked"), yp = "react-aria-pressable-style", bp = "data-react-aria-pressable";
function o1(r) {
  let { onPress: n, onPressChange: i, onPressStart: s, onPressEnd: c, onPressUp: f, onClick: h, isDisabled: g, isPressed: p, preventFocusOnPress: d, shouldCancelOnPointerExit: b, allowTextSelectionOnPress: w, ref: v, ...k } = n1(r), [C, y] = B.useState(!1), F = B.useRef({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: N, removeAllGlobalListeners: M } = Nh(), D = B.useCallback((A, Y) => {
    let G = F.current;
    if (g || G.didFirePressStart) return !1;
    let R = !0;
    if (G.isTriggeringEvent = !0, s) {
      let L = new ya("pressstart", Y, A);
      s(L), R = L.shouldStopPropagation;
    }
    return i && i(!0), G.isTriggeringEvent = !1, G.didFirePressStart = !0, y(!0), R;
  }, [
    g,
    s,
    i
  ]), H = B.useCallback((A, Y, G = !0) => {
    let R = F.current;
    if (!R.didFirePressStart) return !1;
    R.didFirePressStart = !1, R.isTriggeringEvent = !0;
    let L = !0;
    if (c) {
      let $ = new ya("pressend", Y, A);
      c($), L = $.shouldStopPropagation;
    }
    if (i && i(!1), y(!1), n && G && !g) {
      let $ = new ya("press", Y, A);
      n($), L && (L = $.shouldStopPropagation);
    }
    return R.isTriggeringEvent = !1, L;
  }, [
    g,
    c,
    i,
    n
  ]), ne = Gs(H), ae = B.useCallback((A, Y) => {
    let G = F.current;
    if (g) return !1;
    if (f) {
      G.isTriggeringEvent = !0;
      let R = new ya("pressup", Y, A);
      return f(R), G.isTriggeringEvent = !1, R.shouldStopPropagation;
    }
    return !0;
  }, [
    g,
    f
  ]), oe = Gs(ae), xe = B.useCallback((A) => {
    let Y = F.current;
    if (Y.isPressed && Y.target) {
      Y.didFirePressStart && Y.pointerType != null && H(Xr(Y.target, A), Y.pointerType, !1), Y.isPressed = !1, Y.isOverTarget = !1, Y.activePointerId = null, Y.pointerType = null, M(), w || gp(Y.target);
      for (let G of Y.disposables) G();
      Y.disposables = [];
    }
  }, [
    w,
    M,
    H
  ]), me = Gs(xe);
  B.useEffect(() => {
    g && F.current.isPressed && me({
      currentTarget: F.current.target,
      shiftKey: !1,
      ctrlKey: !1,
      metaKey: !1,
      altKey: !1
    });
  }, [
    g
  ]);
  let Se = B.useCallback((A) => {
    b && xe(A);
  }, [
    b,
    xe
  ]), we = B.useCallback((A) => {
    g || h == null || h(A);
  }, [
    g,
    h
  ]), Q = B.useCallback((A, Y) => {
    if (!g && h) {
      let G = new MouseEvent("click", A);
      xh(G, Y), h(Ou(G));
    }
  }, [
    g,
    h
  ]), te = B.useMemo(() => {
    let A = F.current, Y = {
      onKeyDown(R) {
        var L;
        if (Xs(R.nativeEvent, R.currentTarget) && Qe(R.currentTarget, Te(R))) {
          xp(Te(R), R.key) && R.preventDefault();
          let $ = !0;
          !A.isPressed && !R.repeat && (A.target = R.currentTarget, A.isPressed = !0, A.pointerType = "keyboard", $ = D(R, "keyboard"));
          let O = R.currentTarget, _ = (I) => {
            Xs(I, O) && !I.repeat && Qe(O, Te(I)) && A.target && oe(Xr(A.target, I), "keyboard");
          };
          N(qe(R.currentTarget), "keyup", Ia(_, G), !0), $ && R.stopPropagation(), R.metaKey && Jr() && ((L = A.metaKeyEvents) == null || L.set(R.key, R.nativeEvent));
        } else R.key === "Meta" && (A.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(R) {
        if (!(R && !Qe(R.currentTarget, Te(R))) && R && R.button === 0 && !A.isTriggeringEvent && !en.isOpening) {
          let L = !0;
          if (g && R.preventDefault(), !A.ignoreEmulatedMouseEvents && !A.isPressed && (A.pointerType === "virtual" || Eh(R.nativeEvent))) {
            let $ = D(R, "virtual"), O = oe(R, "virtual"), _ = ne(R, "virtual");
            we(R), L = $ && O && _;
          } else if (A.isPressed && A.pointerType !== "keyboard") {
            let $ = A.pointerType || R.nativeEvent.pointerType || "virtual", O = oe(Xr(R.currentTarget, R), $), _ = ne(Xr(R.currentTarget, R), $, !0);
            L = O && _, A.isOverTarget = !1, we(R), me(R);
          }
          A.ignoreEmulatedMouseEvents = !1, L && R.stopPropagation();
        }
      }
    }, G = (R) => {
      var L, $, O;
      if (A.isPressed && A.target && Xs(R, A.target)) {
        xp(Te(R), R.key) && R.preventDefault();
        let _ = Te(R), I = Qe(A.target, _);
        ne(Xr(A.target, R), "keyboard", I), I && Q(R, A.target), M(), R.key !== "Enter" && Hu(A.target) && Qe(A.target, _) && !R[wp] && (R[wp] = !0, en(A.target, R, !1)), A.isPressed = !1, (L = A.metaKeyEvents) == null || L.delete(R.key);
      } else if (R.key === "Meta" && (($ = A.metaKeyEvents) != null && $.size)) {
        let _ = A.metaKeyEvents;
        A.metaKeyEvents = void 0;
        for (let I of _.values()) (O = A.target) == null || O.dispatchEvent(new KeyboardEvent("keyup", I));
      }
    };
    if (typeof PointerEvent < "u") {
      Y.onPointerDown = ($) => {
        if ($.button !== 0 || !Qe($.currentTarget, Te($))) return;
        if (xv($.nativeEvent)) {
          A.pointerType = "virtual";
          return;
        }
        A.pointerType = $.pointerType;
        let O = !0;
        if (!A.isPressed) {
          A.isPressed = !0, A.isOverTarget = !0, A.activePointerId = $.pointerId, A.target = $.currentTarget, w || e1(A.target), O = D($, A.pointerType);
          let _ = Te($);
          "releasePointerCapture" in _ && ("hasPointerCapture" in _ ? _.hasPointerCapture($.pointerId) && _.releasePointerCapture($.pointerId) : _.releasePointerCapture($.pointerId)), N(qe($.currentTarget), "pointerup", R, !1), N(qe($.currentTarget), "pointercancel", L, !1);
        }
        O && $.stopPropagation();
      }, Y.onMouseDown = ($) => {
        if (Qe($.currentTarget, Te($)) && $.button === 0) {
          if (d) {
            let O = vv($.target);
            O && A.disposables.push(O);
          }
          $.stopPropagation();
        }
      }, Y.onPointerUp = ($) => {
        !Qe($.currentTarget, Te($)) || A.pointerType === "virtual" || $.button === 0 && !A.isPressed && oe($, A.pointerType || $.pointerType);
      }, Y.onPointerEnter = ($) => {
        $.pointerId === A.activePointerId && A.target && !A.isOverTarget && A.pointerType != null && (A.isOverTarget = !0, D(Xr(A.target, $), A.pointerType));
      }, Y.onPointerLeave = ($) => {
        $.pointerId === A.activePointerId && A.target && A.isOverTarget && A.pointerType != null && (A.isOverTarget = !1, ne(Xr(A.target, $), A.pointerType, !1), Se($));
      };
      let R = ($) => {
        if ($.pointerId === A.activePointerId && A.isPressed && $.button === 0 && A.target) {
          if (Qe(A.target, Te($)) && A.pointerType != null) {
            let O = !1, _ = setTimeout(() => {
              A.isPressed && A.target instanceof HTMLElement && (O ? me($) : (Vn(A.target), A.target.click()));
            }, 80);
            N($.currentTarget, "click", () => O = !0, !0), A.disposables.push(() => clearTimeout(_));
          } else me($);
          A.isOverTarget = !1;
        }
      }, L = ($) => {
        me($);
      };
      Y.onDragStart = ($) => {
        Qe($.currentTarget, Te($)) && me($);
      };
    }
    return Y;
  }, [
    N,
    g,
    d,
    M,
    w,
    Se,
    D,
    we,
    Q
  ]);
  return B.useEffect(() => {
    if (!v) return;
    const A = qe(v.current);
    if (!A || !A.head || A.getElementById(yp)) return;
    const Y = A.createElement("style");
    Y.id = yp;
    let G = r1(A);
    G && (Y.nonce = G), Y.textContent = `
@layer {
  [${bp}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), A.head.prepend(Y);
  }, [
    v
  ]), B.useEffect(() => {
    let A = F.current;
    return () => {
      w || gp(A.target ?? void 0);
      for (let Y of A.disposables) Y();
      A.disposables = [];
    };
  }, [
    w
  ]), {
    isPressed: p || C,
    // oxlint-disable-next-line react/react-compiler
    pressProps: ur(k, te, {
      [bp]: !0
    })
  };
}
function Hu(r) {
  return r.tagName === "A" && r.hasAttribute("href");
}
function Xs(r, n) {
  const { key: i, code: s } = r, c = n, f = c.getAttribute("role");
  return (i === "Enter" || i === " " || i === "Spacebar" || s === "Space") && !(c instanceof Tt(c).HTMLInputElement && !Mh(c, i) || c instanceof Tt(c).HTMLTextAreaElement || c.isContentEditable) && // Links should only trigger with Enter key
  !((f === "link" || !f && Hu(c)) && i !== "Enter");
}
function Xr(r, n) {
  let i = n.clientX, s = n.clientY;
  return {
    currentTarget: r,
    shiftKey: n.shiftKey,
    ctrlKey: n.ctrlKey,
    metaKey: n.metaKey,
    altKey: n.altKey,
    clientX: i,
    clientY: s,
    key: n.key
  };
}
function i1(r) {
  return r instanceof HTMLInputElement ? !1 : r instanceof HTMLButtonElement ? r.type !== "submit" && r.type !== "reset" : !Hu(r);
}
function xp(r, n) {
  return Jr() && n === "Enter" ? !1 : r instanceof HTMLInputElement ? n === "Enter" && (r.type === "checkbox" || r.type === "radio") ? !1 : !Mh(r, n) : i1(r);
}
const a1 = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function Mh(r, n) {
  return r.type === "checkbox" || r.type === "radio" ? n === " " : a1.has(r.type);
}
function Wu(r, n) {
  let { elementType: i = "button", isDisabled: s, onPress: c, onPressStart: f, onPressEnd: h, onPressUp: g, onPressChange: p, preventFocusOnPress: d, allowFocusWhenDisabled: b, onClick: w, href: v, target: k, rel: C, type: y = "button" } = r, F;
  i === "button" ? F = {
    type: y,
    disabled: s,
    form: r.form,
    formAction: r.formAction,
    formEncType: r.formEncType,
    formMethod: r.formMethod,
    formNoValidate: r.formNoValidate,
    formTarget: r.formTarget,
    name: r.name,
    value: r.value
  } : F = {
    role: "button",
    href: i === "a" && !s ? v : void 0,
    target: i === "a" ? k : void 0,
    type: i === "input" ? y : void 0,
    disabled: i === "input" ? s : void 0,
    "aria-disabled": !s || i === "input" ? void 0 : s,
    rel: i === "a" ? C : void 0
  };
  let { pressProps: N, isPressed: M } = o1({
    onPressStart: f,
    onPressEnd: h,
    onPressChange: p,
    onPress: c,
    onPressUp: g,
    onClick: w,
    isDisabled: s,
    preventFocusOnPress: d,
    ref: n
  }), { focusableProps: D } = Wv(r, n);
  b && (D.tabIndex = s ? -1 : D.tabIndex);
  let H = ur(D, N, Jv(r, {
    labelable: !0
  }));
  return {
    isPressed: M,
    buttonProps: ur(F, H, {
      "aria-haspopup": r["aria-haspopup"],
      "aria-expanded": r["aria-expanded"],
      "aria-controls": r["aria-controls"],
      "aria-pressed": r["aria-pressed"],
      "aria-current": r["aria-current"],
      "aria-disabled": r["aria-disabled"]
    })
  };
}
function l1(r) {
  let { isDisabled: n, onBlurWithin: i, onFocusWithin: s, onFocusWithinChange: c } = r, f = B.useRef({
    isFocusWithin: !1
  }), { addGlobalListener: h, removeAllGlobalListeners: g } = Nh(), p = B.useCallback((w) => {
    Qe(w.currentTarget, Te(w)) && f.current.isFocusWithin && !Qe(w.currentTarget, w.relatedTarget) && (f.current.isFocusWithin = !1, g(), i && i(w), c && c(!1));
  }, [
    i,
    c,
    f,
    g
  ]), d = kh(p), b = B.useCallback((w) => {
    if (!Qe(w.currentTarget, Te(w))) return;
    let v = Te(w);
    const k = qe(v), C = sr(k);
    if (!f.current.isFocusWithin && C === v) {
      s && s(w), c && c(!0), f.current.isFocusWithin = !0, d(w);
      let y = w.currentTarget;
      h(k, "focus", (F) => {
        let N = Te(F);
        if (f.current.isFocusWithin && !Qe(y, N)) {
          let M = new k.defaultView.FocusEvent("blur", {
            relatedTarget: N
          });
          xh(M, y);
          let D = Ou(M);
          p(D);
        }
      }, {
        capture: !0
      });
    }
  }, [
    s,
    c,
    d,
    h,
    p
  ]);
  return n ? {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: b,
      onBlur: p
    }
  };
}
function s1(r = {}) {
  let { autoFocus: n = !1, isTextInput: i, within: s } = r, c = B.useRef({
    isFocused: !1,
    isFocusVisible: n || mu()
  }), [f, h] = B.useState(!1), [g, p] = B.useState(
    // oxlint-disable-next-line react/react-compiler
    () => c.current.isFocused && c.current.isFocusVisible
  ), d = B.useCallback(() => p(c.current.isFocused && c.current.isFocusVisible), []), b = B.useCallback((k) => {
    c.current.isFocused = k, c.current.isFocusVisible = mu(), h(k), d();
  }, [
    d
  ]);
  Pv((k) => {
    c.current.isFocusVisible = k, d();
  }, [
    i,
    f
  ], {
    enabled: f,
    isTextInput: i
  });
  let { focusProps: w } = zh({
    isDisabled: s,
    onFocusChange: b
  }), { focusWithinProps: v } = l1({
    isDisabled: !s,
    onFocusWithinChange: b
  });
  return {
    isFocused: f,
    isFocusVisible: g,
    focusProps: s ? v : w
  };
}
function Ku(r) {
  let { children: n, focusClass: i, focusRingClass: s } = r, { isFocused: c, isFocusVisible: f, focusProps: h } = s1(r), g = re.Children.only(n);
  return /* @__PURE__ */ re.cloneElement(g, ur(g.props, {
    ...h,
    className: Bu({
      [i || ""]: c,
      [s || ""]: f
    })
  }));
}
const u1 = (r) => fe.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...r, children: fe.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 11H20V13H4V11Z" }) });
var kp = (r) => typeof r == "boolean" ? `${r}` : r === 0 ? "0" : r, ft = (r) => !r || typeof r != "object" || Object.keys(r).length === 0, c1 = (r, n) => JSON.stringify(r) === JSON.stringify(n);
function Oh(r, n) {
  r.forEach(function(i) {
    Array.isArray(i) ? Oh(i, n) : n.push(i);
  });
}
function Dh(r) {
  let n = [];
  return Oh(r, n), n;
}
var jh = (...r) => Dh(r).filter(Boolean), Uh = (r, n) => {
  let i = {}, s = Object.keys(r), c = Object.keys(n);
  for (let f of s) if (c.includes(f)) {
    let h = r[f], g = n[f];
    typeof h == "object" && typeof g == "object" ? i[f] = Uh(h, g) : Array.isArray(h) || Array.isArray(g) ? i[f] = jh(g, h) : i[f] = g + " " + h;
  } else i[f] = r[f];
  for (let f of c) s.includes(f) || (i[f] = n[f]);
  return i;
}, _p = (r) => !r || typeof r != "string" ? r : r.replace(/\s+/g, " ").trim();
const Yu = "-", d1 = (r) => {
  const n = p1(r), {
    conflictingClassGroups: i,
    conflictingClassGroupModifiers: s
  } = r;
  return {
    getClassGroupId: (h) => {
      const g = h.split(Yu);
      return g[0] === "" && g.length !== 1 && g.shift(), Vh(g, n) || f1(h);
    },
    getConflictingClassGroupIds: (h, g) => {
      const p = i[h] || [];
      return g && s[h] ? [...p, ...s[h]] : p;
    }
  };
}, Vh = (r, n) => {
  var h;
  if (r.length === 0)
    return n.classGroupId;
  const i = r[0], s = n.nextPart.get(i), c = s ? Vh(r.slice(1), s) : void 0;
  if (c)
    return c;
  if (n.validators.length === 0)
    return;
  const f = r.join(Yu);
  return (h = n.validators.find(({
    validator: g
  }) => g(f))) == null ? void 0 : h.classGroupId;
}, Ep = /^\[(.+)\]$/, f1 = (r) => {
  if (Ep.test(r)) {
    const n = Ep.exec(r)[1], i = n == null ? void 0 : n.substring(0, n.indexOf(":"));
    if (i)
      return "arbitrary.." + i;
  }
}, p1 = (r) => {
  const {
    theme: n,
    prefix: i
  } = r, s = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return m1(Object.entries(r.classGroups), i).forEach(([f, h]) => {
    yu(h, s, f, n);
  }), s;
}, yu = (r, n, i, s) => {
  r.forEach((c) => {
    if (typeof c == "string") {
      const f = c === "" ? n : Sp(n, c);
      f.classGroupId = i;
      return;
    }
    if (typeof c == "function") {
      if (h1(c)) {
        yu(c(s), n, i, s);
        return;
      }
      n.validators.push({
        validator: c,
        classGroupId: i
      });
      return;
    }
    Object.entries(c).forEach(([f, h]) => {
      yu(h, Sp(n, f), i, s);
    });
  });
}, Sp = (r, n) => {
  let i = r;
  return n.split(Yu).forEach((s) => {
    i.nextPart.has(s) || i.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), i = i.nextPart.get(s);
  }), i;
}, h1 = (r) => r.isThemeGetter, m1 = (r, n) => n ? r.map(([i, s]) => {
  const c = s.map((f) => typeof f == "string" ? n + f : typeof f == "object" ? Object.fromEntries(Object.entries(f).map(([h, g]) => [n + h, g])) : f);
  return [i, c];
}) : r, g1 = (r) => {
  if (r < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  const c = (f, h) => {
    i.set(f, h), n++, n > r && (n = 0, s = i, i = /* @__PURE__ */ new Map());
  };
  return {
    get(f) {
      let h = i.get(f);
      if (h !== void 0)
        return h;
      if ((h = s.get(f)) !== void 0)
        return c(f, h), h;
    },
    set(f, h) {
      i.has(f) ? i.set(f, h) : c(f, h);
    }
  };
}, Bh = "!", v1 = (r) => {
  const {
    separator: n,
    experimentalParseClassName: i
  } = r, s = n.length === 1, c = n[0], f = n.length, h = (g) => {
    const p = [];
    let d = 0, b = 0, w;
    for (let F = 0; F < g.length; F++) {
      let N = g[F];
      if (d === 0) {
        if (N === c && (s || g.slice(F, F + f) === n)) {
          p.push(g.slice(b, F)), b = F + f;
          continue;
        }
        if (N === "/") {
          w = F;
          continue;
        }
      }
      N === "[" ? d++ : N === "]" && d--;
    }
    const v = p.length === 0 ? g : g.substring(b), k = v.startsWith(Bh), C = k ? v.substring(1) : v, y = w && w > b ? w - b : void 0;
    return {
      modifiers: p,
      hasImportantModifier: k,
      baseClassName: C,
      maybePostfixModifierPosition: y
    };
  };
  return i ? (g) => i({
    className: g,
    parseClassName: h
  }) : h;
}, w1 = (r) => {
  if (r.length <= 1)
    return r;
  const n = [];
  let i = [];
  return r.forEach((s) => {
    s[0] === "[" ? (n.push(...i.sort(), s), i = []) : i.push(s);
  }), n.push(...i.sort()), n;
}, y1 = (r) => ({
  cache: g1(r.cacheSize),
  parseClassName: v1(r),
  ...d1(r)
}), b1 = /\s+/, x1 = (r, n) => {
  const {
    parseClassName: i,
    getClassGroupId: s,
    getConflictingClassGroupIds: c
  } = n, f = [], h = r.trim().split(b1);
  let g = "";
  for (let p = h.length - 1; p >= 0; p -= 1) {
    const d = h[p], {
      modifiers: b,
      hasImportantModifier: w,
      baseClassName: v,
      maybePostfixModifierPosition: k
    } = i(d);
    let C = !!k, y = s(C ? v.substring(0, k) : v);
    if (!y) {
      if (!C) {
        g = d + (g.length > 0 ? " " + g : g);
        continue;
      }
      if (y = s(v), !y) {
        g = d + (g.length > 0 ? " " + g : g);
        continue;
      }
      C = !1;
    }
    const F = w1(b).join(":"), N = w ? F + Bh : F, M = N + y;
    if (f.includes(M))
      continue;
    f.push(M);
    const D = c(y, C);
    for (let H = 0; H < D.length; ++H) {
      const ne = D[H];
      f.push(N + ne);
    }
    g = d + (g.length > 0 ? " " + g : g);
  }
  return g;
};
function k1() {
  let r = 0, n, i, s = "";
  for (; r < arguments.length; )
    (n = arguments[r++]) && (i = Hh(n)) && (s && (s += " "), s += i);
  return s;
}
const Hh = (r) => {
  if (typeof r == "string")
    return r;
  let n, i = "";
  for (let s = 0; s < r.length; s++)
    r[s] && (n = Hh(r[s])) && (i && (i += " "), i += n);
  return i;
};
function bu(r, ...n) {
  let i, s, c, f = h;
  function h(p) {
    const d = n.reduce((b, w) => w(b), r());
    return i = y1(d), s = i.cache.get, c = i.cache.set, f = g, g(p);
  }
  function g(p) {
    const d = s(p);
    if (d)
      return d;
    const b = x1(p, i);
    return c(p, b), b;
  }
  return function() {
    return f(k1.apply(null, arguments));
  };
}
const Le = (r) => {
  const n = (i) => i[r] || [];
  return n.isThemeGetter = !0, n;
}, Wh = /^\[(?:([a-z-]+):)?(.+)\]$/i, _1 = /^\d+\/\d+$/, E1 = /* @__PURE__ */ new Set(["px", "full", "screen"]), S1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, C1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, F1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, P1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, T1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Yt = (r) => Zr(r) || E1.has(r) || _1.test(r), or = (r) => Wn(r, "length", $1), Zr = (r) => !!r && !Number.isNaN(Number(r)), Ea = (r) => Wn(r, "number", Zr), Ln = (r) => !!r && Number.isInteger(Number(r)), Kh = (r) => r.endsWith("%") && Zr(r.slice(0, -1)), he = (r) => Wh.test(r), ir = (r) => S1.test(r), A1 = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Yh = (r) => Wn(r, A1, qh), Qh = (r) => Wn(r, "position", qh), z1 = /* @__PURE__ */ new Set(["image", "url"]), Gh = (r) => Wn(r, z1, L1), Xh = (r) => Wn(r, "", I1), Rn = () => !0, Wn = (r, n, i) => {
  const s = Wh.exec(r);
  return s ? s[1] ? typeof n == "string" ? s[1] === n : n.has(s[1]) : i(s[2]) : !1;
}, $1 = (r) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  C1.test(r) && !F1.test(r)
), qh = () => !1, I1 = (r) => P1.test(r), L1 = (r) => T1.test(r), R1 = /* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isAny: Rn,
  isArbitraryImage: Gh,
  isArbitraryLength: or,
  isArbitraryNumber: Ea,
  isArbitraryPosition: Qh,
  isArbitraryShadow: Xh,
  isArbitrarySize: Yh,
  isArbitraryValue: he,
  isInteger: Ln,
  isLength: Yt,
  isNumber: Zr,
  isPercent: Kh,
  isTshirtSize: ir
}, Symbol.toStringTag, {
  value: "Module"
}), xu = () => {
  const r = Le("colors"), n = Le("spacing"), i = Le("blur"), s = Le("brightness"), c = Le("borderColor"), f = Le("borderRadius"), h = Le("borderSpacing"), g = Le("borderWidth"), p = Le("contrast"), d = Le("grayscale"), b = Le("hueRotate"), w = Le("invert"), v = Le("gap"), k = Le("gradientColorStops"), C = Le("gradientColorStopPositions"), y = Le("inset"), F = Le("margin"), N = Le("opacity"), M = Le("padding"), D = Le("saturate"), H = Le("scale"), ne = Le("sepia"), ae = Le("skew"), oe = Le("space"), xe = Le("translate"), me = () => ["auto", "contain", "none"], Se = () => ["auto", "hidden", "clip", "visible", "scroll"], we = () => ["auto", he, n], Q = () => [he, n], te = () => ["", Yt, or], A = () => ["auto", Zr, he], Y = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], G = () => ["solid", "dashed", "dotted", "double", "none"], R = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], L = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], $ = () => ["", "0", he], O = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], _ = () => [Zr, he];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Rn],
      spacing: [Yt, or],
      blur: ["none", "", ir, he],
      brightness: _(),
      borderColor: [r],
      borderRadius: ["none", "", "full", ir, he],
      borderSpacing: Q(),
      borderWidth: te(),
      contrast: _(),
      grayscale: $(),
      hueRotate: _(),
      invert: $(),
      gap: Q(),
      gradientColorStops: [r],
      gradientColorStopPositions: [Kh, or],
      inset: we(),
      margin: we(),
      opacity: _(),
      padding: Q(),
      saturate: _(),
      scale: _(),
      sepia: $(),
      skew: _(),
      space: Q(),
      translate: Q()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", he]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ir]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": O()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": O()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...Y(), he]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Se()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Se()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Se()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: me()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": me()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": me()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [y]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [y]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [y]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [y]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [y]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [y]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [y]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [y]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [y]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Ln, he]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: we()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", he]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: $()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: $()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Ln, he]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Rn]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ln, he]
        }, he]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": A()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": A()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Rn]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ln, he]
        }, he]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": A()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": A()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", he]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", he]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [v]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [v]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [v]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...L()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...L(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...L(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [M]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [M]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [M]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [M]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [M]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [M]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [M]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [M]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [M]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [F]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [F]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [F]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [F]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [F]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [F]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [F]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [F]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [F]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [oe]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [oe]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", he, n]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [he, n, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [he, n, "none", "full", "min", "max", "fit", "prose", {
          screen: [ir]
        }, ir]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [he, n, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [he, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [he, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [he, n, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ir, or]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ea]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Rn]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", he]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Zr, Ea]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Yt, he]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", he]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", he]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [r]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [N]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [r]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [N]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...G(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Yt, or]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Yt, he]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [r]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: Q()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", he]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", he]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [N]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...Y(), Qh]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Yh]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Gh]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [r]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [C]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [C]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [C]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [k]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [k]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [k]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [f]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [f]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [f]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [f]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [f]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [f]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [f]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [f]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [f]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [f]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [f]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [f]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [f]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [f]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [f]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [g]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [g]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [g]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [g]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [g]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [g]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [g]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [g]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [g]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [N]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...G(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [g]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [g]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [N]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: G()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [c]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [c]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [c]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [c]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [c]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [c]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [c]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [c]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [c]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [c]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...G()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Yt, he]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Yt, or]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [r]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: te()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [r]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [N]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Yt, or]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [r]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", ir, Xh]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Rn]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [N]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...R(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": R()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [i]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [s]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [p]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", ir, he]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [d]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [b]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [w]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [D]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [ne]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [i]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [s]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [p]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [d]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [b]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [w]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [N]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [D]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [ne]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [h]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [h]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [h]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", he]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: _()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", he]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: _()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", he]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [H]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [H]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [H]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Ln, he]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [xe]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [xe]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [ae]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [ae]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", he]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", r]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", he]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [r]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": Q()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": Q()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": Q()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": Q()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": Q()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": Q()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": Q()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": Q()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": Q()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": Q()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": Q()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": Q()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": Q()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": Q()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": Q()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": Q()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": Q()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": Q()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", he]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [r, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Yt, or, Ea]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [r, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, N1 = (r, {
  cacheSize: n,
  prefix: i,
  separator: s,
  experimentalParseClassName: c,
  extend: f = {},
  override: h = {}
}) => {
  Oo(r, "cacheSize", n), Oo(r, "prefix", i), Oo(r, "separator", s), Oo(r, "experimentalParseClassName", c);
  for (const g in h)
    M1(r[g], h[g]);
  for (const g in f)
    O1(r[g], f[g]);
  return r;
}, Oo = (r, n, i) => {
  i !== void 0 && (r[n] = i);
}, M1 = (r, n) => {
  if (n)
    for (const i in n)
      Oo(r, i, n[i]);
}, O1 = (r, n) => {
  if (n)
    for (const i in n) {
      const s = n[i];
      s !== void 0 && (r[i] = (r[i] || []).concat(s));
    }
}, Zh = (r, ...n) => typeof r == "function" ? bu(xu, r, ...n) : bu(() => N1(xu(), r), ...n), D1 = /* @__PURE__ */ bu(xu);
var j1 = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, Jh = (r) => r || void 0, Wo = (...r) => Jh(Dh(r).filter(Boolean).join(" ")), qs = null, ar = {}, ku = !1, Lo = (...r) => (n) => n.twMerge ? ((!qs || ku) && (ku = !1, qs = ft(ar) ? D1 : Zh({ ...ar, extend: { theme: ar.theme, classGroups: ar.classGroups, conflictingClassGroupModifiers: ar.conflictingClassGroupModifiers, conflictingClassGroups: ar.conflictingClassGroups, ...ar.extend } })), Jh(qs(Wo(r)))) : Wo(r), Cp = (r, n) => {
  for (let i in n) r.hasOwnProperty(i) ? r[i] = Wo(r[i], n[i]) : r[i] = n[i];
  return r;
}, ti = (r, n) => {
  let { extend: i = null, slots: s = {}, variants: c = {}, compoundVariants: f = [], compoundSlots: h = [], defaultVariants: g = {} } = r, p = { ...j1, ...n }, d = i != null && i.base ? Wo(i.base, r == null ? void 0 : r.base) : r == null ? void 0 : r.base, b = i != null && i.variants && !ft(i.variants) ? Uh(c, i.variants) : c, w = i != null && i.defaultVariants && !ft(i.defaultVariants) ? { ...i.defaultVariants, ...g } : g;
  !ft(p.twMergeConfig) && !c1(p.twMergeConfig, ar) && (ku = !0, ar = p.twMergeConfig);
  let v = ft(i == null ? void 0 : i.slots), k = ft(s) ? {} : { base: Wo(r == null ? void 0 : r.base, v && (i == null ? void 0 : i.base)), ...s }, C = v ? k : Cp({ ...i == null ? void 0 : i.slots }, ft(k) ? { base: r == null ? void 0 : r.base } : k), y = ft(i == null ? void 0 : i.compoundVariants) ? f : jh(i == null ? void 0 : i.compoundVariants, f), F = (M) => {
    if (ft(b) && ft(s) && v) return Lo(d, M == null ? void 0 : M.class, M == null ? void 0 : M.className)(p);
    if (y && !Array.isArray(y)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof y}`);
    if (h && !Array.isArray(h)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof h}`);
    let D = (Q, te, A = [], Y) => {
      let G = A;
      if (typeof te == "string") G = G.concat(_p(te).split(" ").map((R) => `${Q}:${R}`));
      else if (Array.isArray(te)) G = G.concat(te.reduce((R, L) => R.concat(`${Q}:${L}`), []));
      else if (typeof te == "object" && typeof Y == "string") {
        for (let R in te) if (te.hasOwnProperty(R) && R === Y) {
          let L = te[R];
          if (L && typeof L == "string") {
            let $ = _p(L);
            G[Y] ? G[Y] = G[Y].concat($.split(" ").map((O) => `${Q}:${O}`)) : G[Y] = $.split(" ").map((O) => `${Q}:${O}`);
          } else Array.isArray(L) && L.length > 0 && (G[Y] = L.reduce(($, O) => $.concat(`${Q}:${O}`), []));
        }
      }
      return G;
    }, H = (Q, te = b, A = null, Y = null) => {
      var G;
      let R = te[Q];
      if (!R || ft(R)) return null;
      let L = (G = Y == null ? void 0 : Y[Q]) != null ? G : M == null ? void 0 : M[Q];
      if (L === null) return null;
      let $ = kp(L), O = Array.isArray(p.responsiveVariants) && p.responsiveVariants.length > 0 || p.responsiveVariants === !0, _ = w == null ? void 0 : w[Q], I = [];
      if (typeof $ == "object" && O) for (let [ge, ye] of Object.entries($)) {
        let Fe = R[ye];
        if (ge === "initial") {
          _ = ye;
          continue;
        }
        Array.isArray(p.responsiveVariants) && !p.responsiveVariants.includes(ge) || (I = D(ge, Fe, I, A));
      }
      let de = $ != null && typeof $ != "object" ? $ : kp(_), ce = R[de || "false"];
      return typeof I == "object" && typeof A == "string" && I[A] ? Cp(I, ce) : I.length > 0 ? (I.push(ce), I) : ce;
    }, ne = () => b ? Object.keys(b).map((Q) => H(Q, b)) : null, ae = (Q, te) => {
      if (!b || typeof b != "object") return null;
      let A = new Array();
      for (let Y in b) {
        let G = H(Y, b, Q, te), R = Q === "base" && typeof G == "string" ? G : G && G[Q];
        R && (A[A.length] = R);
      }
      return A;
    }, oe = {};
    for (let Q in M) M[Q] !== void 0 && (oe[Q] = M[Q]);
    let xe = (Q, te) => {
      var A;
      let Y = typeof (M == null ? void 0 : M[Q]) == "object" ? { [Q]: (A = M[Q]) == null ? void 0 : A.initial } : {};
      return { ...w, ...oe, ...Y, ...te };
    }, me = (Q = [], te) => {
      let A = [];
      for (let { class: Y, className: G, ...R } of Q) {
        let L = !0;
        for (let [$, O] of Object.entries(R)) {
          let _ = xe($, te);
          if (Array.isArray(O)) {
            if (!O.includes(_[$])) {
              L = !1;
              break;
            }
          } else if (_[$] !== O) {
            L = !1;
            break;
          }
        }
        L && (Y && A.push(Y), G && A.push(G));
      }
      return A;
    }, Se = (Q) => {
      let te = me(y, Q);
      if (!Array.isArray(te)) return te;
      let A = {};
      for (let Y of te) if (typeof Y == "string" && (A.base = Lo(A.base, Y)(p)), typeof Y == "object") for (let [G, R] of Object.entries(Y)) A[G] = Lo(A[G], R)(p);
      return A;
    }, we = (Q) => {
      if (h.length < 1) return null;
      let te = {};
      for (let { slots: A = [], class: Y, className: G, ...R } of h) {
        if (!ft(R)) {
          let L = !0;
          for (let $ of Object.keys(R)) {
            let O = xe($, Q)[$];
            if (O === void 0 || (Array.isArray(R[$]) ? !R[$].includes(O) : R[$] !== O)) {
              L = !1;
              break;
            }
          }
          if (!L) continue;
        }
        for (let L of A) te[L] = te[L] || [], te[L].push([Y, G]);
      }
      return te;
    };
    if (!ft(s) || !v) {
      let Q = {};
      if (typeof C == "object" && !ft(C)) for (let te of Object.keys(C)) Q[te] = (A) => {
        var Y, G;
        return Lo(C[te], ae(te, A), ((Y = Se(A)) != null ? Y : [])[te], ((G = we(A)) != null ? G : [])[te], A == null ? void 0 : A.class, A == null ? void 0 : A.className)(p);
      };
      return Q;
    }
    return Lo(d, ne(), me(y), M == null ? void 0 : M.class, M == null ? void 0 : M.className)(p);
  }, N = () => {
    if (!(!b || typeof b != "object")) return Object.keys(b);
  };
  return F.variantKeys = N(), F.extend = i, F.base = d, F.slots = C, F.variants = b, F.defaultVariants = w, F.compoundSlots = h, F.compoundVariants = y, F;
};
const em = {
  large: "w-8 h-8",
  medium: "w-6 h-6",
  small: "w-5 h-5",
  undefined: "",
  "x-small": "w-4 h-4",
  "xx-small": "w-3.5 h-3.5"
}, tm = ti({
  base: "inline-flex items-center justify-center p-0 m-0",
  variants: {
    size: em
  }
}), Ua = ti({
  variants: {
    size: em
  }
}), Va = ti({
  base: "box-content",
  compoundVariants: [
    {
      class: "rounded",
      emphasis: ["minimal", "regular"],
      shape: "square",
      size: ["x-small", "xx-small"]
    },
    {
      class: "rounded-lg",
      emphasis: ["minimal", "regular"],
      shape: "square",
      size: ["large", "medium", "small", "undefined"]
    },
    {
      class: "rounded",
      emphasis: !1,
      size: ["xx-small", "x-small", "small", "medium"]
    },
    {
      class: "rounded-md",
      emphasis: !1,
      size: "large"
    },
    {
      button: !0,
      class: "p-1",
      emphasis: !1,
      size: "x-small"
    },
    {
      button: !0,
      class: "p-1.5",
      emphasis: !1,
      size: "small"
    },
    {
      button: !0,
      class: "p-1.5",
      emphasis: !1,
      size: "medium"
    },
    {
      button: !0,
      class: "p-2",
      emphasis: !1,
      size: "large"
    },
    {
      class: "w-4 h-4 p-2",
      emphasis: ["minimal", "regular"],
      size: "x-small"
    },
    {
      class: "w-5 h-5 p-3",
      emphasis: ["minimal", "regular"],
      size: "small"
    },
    {
      class: "w-6 h-6 p-4",
      emphasis: ["minimal", "regular"],
      size: "medium"
    },
    {
      class: "w-8 h-8 p-4",
      emphasis: ["minimal", "regular"],
      size: "large"
    }
  ],
  variants: {
    button: {
      true: "inline-flex items-center justify-center outline-none border-none bg-transparent m-0 appearance-none disabled:opacity-30 cursor-pointer"
    },
    emphasis: {
      false: "",
      minimal: "bg-interactive-neutral-minimal",
      regular: "bg-interactive-neutral-regular"
    },
    shape: {
      circle: "rounded-full",
      square: ""
    },
    size: {
      large: "",
      medium: "",
      small: "",
      undefined: "",
      "x-small": "",
      "xx-small": "w-3.5 h-3.5 p-[5px]"
    }
  }
}), rm = ti({
  base: "outline outline-offset-0 outline-interactive-highlight outline-2"
}), U1 = ({ children: r, containerClassName: n, emphasis: i, shape: s, size: c }) => {
  const f = typeof c == "number", h = f ? {
    height: c,
    padding: c / 2,
    width: c
  } : void 0, g = f ? void 0 : c;
  return fe.jsx("div", { className: Va({
    class: n,
    emphasis: i,
    shape: s,
    size: g
  }), "data-testid": "@paloma-icons-contained-id", style: h, children: r });
}, V1 = ({ "aria-label": r, className: n, color: i, contained: s, containerClassName: c, emphasis: f = "regular", shape: h = "circle", size: g = "medium", svgClassName: p, ...d }) => {
  const b = !r, w = typeof g == "number", v = w ? { height: g, width: g } : void 0, k = w ? void 0 : g, C = s ? U1 : B.Fragment, y = s ? { containerClassName: c, emphasis: f, shape: h, size: g } : {};
  return fe.jsx(C, { ...y, children: fe.jsx("span", { ...d, className: tm({ class: n, size: k }), "data-namespace": "@paloma/icons", "data-size": g, id: "minus-id", style: { color: i, ...v }, children: fe.jsx(u1, { "aria-hidden": b, "aria-label": r, className: Ua({ class: p, size: k }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "minus-svg-id", style: { fill: B1, ...v } }) }) });
}, B1 = "currentColor", H1 = (r) => fe.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...r, children: fe.jsx("path", { d: "M11 13V20H13V13H20V11H13V4H11V11H4V13H11Z" }) }), W1 = ({ children: r, containerClassName: n, emphasis: i, shape: s, size: c }) => {
  const f = typeof c == "number", h = f ? {
    height: c,
    padding: c / 2,
    width: c
  } : void 0, g = f ? void 0 : c;
  return fe.jsx("div", { className: Va({
    class: n,
    emphasis: i,
    shape: s,
    size: g
  }), "data-testid": "@paloma-icons-contained-id", style: h, children: r });
}, K1 = ({ "aria-label": r, className: n, color: i, contained: s, containerClassName: c, emphasis: f = "regular", shape: h = "circle", size: g = "medium", svgClassName: p, ...d }) => {
  const b = !r, w = typeof g == "number", v = w ? { height: g, width: g } : void 0, k = w ? void 0 : g, C = s ? W1 : B.Fragment, y = s ? { containerClassName: c, emphasis: f, shape: h, size: g } : {};
  return fe.jsx(C, { ...y, children: fe.jsx("span", { ...d, className: tm({ class: n, size: k }), "data-namespace": "@paloma/icons", "data-size": g, id: "plus-id", style: { color: i, ...v }, children: fe.jsx(H1, { "aria-hidden": b, "aria-label": r, className: Ua({ class: p, size: k }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "plus-svg-id", style: { fill: Y1, ...v } }) }) });
}, Y1 = "currentColor";
var ba = {}, Sa = { exports: {} }, Q1 = Sa.exports, Fp;
function G1() {
  return Fp || (Fp = 1, (function(r) {
    (function(n) {
      i(Math.pow(36, 5)), i(Math.pow(16, 7)), i(Math.pow(10, 9)), i(Math.pow(2, 30)), i(36), i(16), i(10), i(2);
      function i(h, g) {
        if (!(this instanceof i))
          return new i(h, g);
        if (this._low = 0, this._high = 0, this.remainder = null, typeof g > "u")
          return c.call(this, h);
        if (typeof h == "string")
          return f.call(this, h, g);
        s.call(this, h, g);
      }
      function s(h, g) {
        return this._low = h | 0, this._high = g | 0, this;
      }
      i.prototype.fromBits = s;
      function c(h) {
        return this._low = h & 65535, this._high = h >>> 16, this;
      }
      i.prototype.fromNumber = c;
      function f(h, g) {
        var p = parseInt(h, g || 10);
        return this._low = p & 65535, this._high = p >>> 16, this;
      }
      i.prototype.fromString = f, i.prototype.toNumber = function() {
        return this._high * 65536 + this._low;
      }, i.prototype.toString = function(h) {
        return this.toNumber().toString(h || 10);
      }, i.prototype.add = function(h) {
        var g = this._low + h._low, p = g >>> 16;
        return p += this._high + h._high, this._low = g & 65535, this._high = p & 65535, this;
      }, i.prototype.subtract = function(h) {
        return this.add(h.clone().negate());
      }, i.prototype.multiply = function(h) {
        var g = this._high, p = this._low, d = h._high, b = h._low, w, v;
        return v = p * b, w = v >>> 16, w += g * b, w &= 65535, w += p * d, this._low = v & 65535, this._high = w & 65535, this;
      }, i.prototype.div = function(h) {
        if (h._low == 0 && h._high == 0) throw Error("division by zero");
        if (h._high == 0 && h._low == 1)
          return this.remainder = new i(0), this;
        if (h.gt(this))
          return this.remainder = this.clone(), this._low = 0, this._high = 0, this;
        if (this.eq(h))
          return this.remainder = new i(0), this._low = 1, this._high = 0, this;
        for (var g = h.clone(), p = -1; !this.lt(g); )
          g.shiftLeft(1, !0), p++;
        for (this.remainder = this.clone(), this._low = 0, this._high = 0; p >= 0; p--)
          g.shiftRight(1), this.remainder.lt(g) || (this.remainder.subtract(g), p >= 16 ? this._high |= 1 << p - 16 : this._low |= 1 << p);
        return this;
      }, i.prototype.negate = function() {
        var h = (~this._low & 65535) + 1;
        return this._low = h & 65535, this._high = ~this._high + (h >>> 16) & 65535, this;
      }, i.prototype.equals = i.prototype.eq = function(h) {
        return this._low == h._low && this._high == h._high;
      }, i.prototype.greaterThan = i.prototype.gt = function(h) {
        return this._high > h._high ? !0 : this._high < h._high ? !1 : this._low > h._low;
      }, i.prototype.lessThan = i.prototype.lt = function(h) {
        return this._high < h._high ? !0 : this._high > h._high ? !1 : this._low < h._low;
      }, i.prototype.or = function(h) {
        return this._low |= h._low, this._high |= h._high, this;
      }, i.prototype.and = function(h) {
        return this._low &= h._low, this._high &= h._high, this;
      }, i.prototype.not = function() {
        return this._low = ~this._low & 65535, this._high = ~this._high & 65535, this;
      }, i.prototype.xor = function(h) {
        return this._low ^= h._low, this._high ^= h._high, this;
      }, i.prototype.shiftRight = i.prototype.shiftr = function(h) {
        return h > 16 ? (this._low = this._high >> h - 16, this._high = 0) : h == 16 ? (this._low = this._high, this._high = 0) : (this._low = this._low >> h | this._high << 16 - h & 65535, this._high >>= h), this;
      }, i.prototype.shiftLeft = i.prototype.shiftl = function(h, g) {
        return h > 16 ? (this._high = this._low << h - 16, this._low = 0, g || (this._high &= 65535)) : h == 16 ? (this._high = this._low, this._low = 0) : (this._high = this._high << h | this._low >> 16 - h, this._low = this._low << h & 65535, g || (this._high &= 65535)), this;
      }, i.prototype.rotateLeft = i.prototype.rotl = function(h) {
        var g = this._high << 16 | this._low;
        return g = g << h | g >>> 32 - h, this._low = g & 65535, this._high = g >>> 16, this;
      }, i.prototype.rotateRight = i.prototype.rotr = function(h) {
        var g = this._high << 16 | this._low;
        return g = g >>> h | g << 32 - h, this._low = g & 65535, this._high = g >>> 16, this;
      }, i.prototype.clone = function() {
        return new i(this._low, this._high);
      }, r.exports ? r.exports = i : n.UINT32 = i;
    })(Q1);
  })(Sa)), Sa.exports;
}
var Ca = { exports: {} }, X1 = Ca.exports, Pp;
function q1() {
  return Pp || (Pp = 1, (function(r) {
    (function(n) {
      var i = {
        16: c(Math.pow(16, 5)),
        10: c(Math.pow(10, 5)),
        2: c(Math.pow(2, 5))
      }, s = {
        16: c(16),
        10: c(10),
        2: c(2)
      };
      function c(p, d, b, w) {
        if (!(this instanceof c))
          return new c(p, d, b, w);
        if (this.remainder = null, typeof p == "string")
          return g.call(this, p, d);
        if (typeof d > "u")
          return h.call(this, p);
        f.apply(this, arguments);
      }
      function f(p, d, b, w) {
        return typeof b > "u" ? (this._a00 = p & 65535, this._a16 = p >>> 16, this._a32 = d & 65535, this._a48 = d >>> 16, this) : (this._a00 = p | 0, this._a16 = d | 0, this._a32 = b | 0, this._a48 = w | 0, this);
      }
      c.prototype.fromBits = f;
      function h(p) {
        return this._a00 = p & 65535, this._a16 = p >>> 16, this._a32 = 0, this._a48 = 0, this;
      }
      c.prototype.fromNumber = h;
      function g(p, d) {
        d = d || 10, this._a00 = 0, this._a16 = 0, this._a32 = 0, this._a48 = 0;
        for (var b = i[d] || new c(Math.pow(d, 5)), w = 0, v = p.length; w < v; w += 5) {
          var k = Math.min(5, v - w), C = parseInt(p.slice(w, w + k), d);
          this.multiply(
            k < 5 ? new c(Math.pow(d, k)) : b
          ).add(new c(C));
        }
        return this;
      }
      c.prototype.fromString = g, c.prototype.toNumber = function() {
        return this._a16 * 65536 + this._a00;
      }, c.prototype.toString = function(p) {
        p = p || 10;
        var d = s[p] || new c(p);
        if (!this.gt(d)) return this.toNumber().toString(p);
        for (var b = this.clone(), w = new Array(64), v = 63; v >= 0 && (b.div(d), w[v] = b.remainder.toNumber().toString(p), !!b.gt(d)); v--)
          ;
        return w[v - 1] = b.toNumber().toString(p), w.join("");
      }, c.prototype.add = function(p) {
        var d = this._a00 + p._a00, b = d >>> 16;
        b += this._a16 + p._a16;
        var w = b >>> 16;
        w += this._a32 + p._a32;
        var v = w >>> 16;
        return v += this._a48 + p._a48, this._a00 = d & 65535, this._a16 = b & 65535, this._a32 = w & 65535, this._a48 = v & 65535, this;
      }, c.prototype.subtract = function(p) {
        return this.add(p.clone().negate());
      }, c.prototype.multiply = function(p) {
        var d = this._a00, b = this._a16, w = this._a32, v = this._a48, k = p._a00, C = p._a16, y = p._a32, F = p._a48, N = d * k, M = N >>> 16;
        M += d * C;
        var D = M >>> 16;
        M &= 65535, M += b * k, D += M >>> 16, D += d * y;
        var H = D >>> 16;
        return D &= 65535, D += b * C, H += D >>> 16, D &= 65535, D += w * k, H += D >>> 16, H += d * F, H &= 65535, H += b * y, H &= 65535, H += w * C, H &= 65535, H += v * k, this._a00 = N & 65535, this._a16 = M & 65535, this._a32 = D & 65535, this._a48 = H & 65535, this;
      }, c.prototype.div = function(p) {
        if (p._a16 == 0 && p._a32 == 0 && p._a48 == 0) {
          if (p._a00 == 0) throw Error("division by zero");
          if (p._a00 == 1)
            return this.remainder = new c(0), this;
        }
        if (p.gt(this))
          return this.remainder = this.clone(), this._a00 = 0, this._a16 = 0, this._a32 = 0, this._a48 = 0, this;
        if (this.eq(p))
          return this.remainder = new c(0), this._a00 = 1, this._a16 = 0, this._a32 = 0, this._a48 = 0, this;
        for (var d = p.clone(), b = -1; !this.lt(d); )
          d.shiftLeft(1, !0), b++;
        for (this.remainder = this.clone(), this._a00 = 0, this._a16 = 0, this._a32 = 0, this._a48 = 0; b >= 0; b--)
          d.shiftRight(1), this.remainder.lt(d) || (this.remainder.subtract(d), b >= 48 ? this._a48 |= 1 << b - 48 : b >= 32 ? this._a32 |= 1 << b - 32 : b >= 16 ? this._a16 |= 1 << b - 16 : this._a00 |= 1 << b);
        return this;
      }, c.prototype.negate = function() {
        var p = (~this._a00 & 65535) + 1;
        return this._a00 = p & 65535, p = (~this._a16 & 65535) + (p >>> 16), this._a16 = p & 65535, p = (~this._a32 & 65535) + (p >>> 16), this._a32 = p & 65535, this._a48 = ~this._a48 + (p >>> 16) & 65535, this;
      }, c.prototype.equals = c.prototype.eq = function(p) {
        return this._a48 == p._a48 && this._a00 == p._a00 && this._a32 == p._a32 && this._a16 == p._a16;
      }, c.prototype.greaterThan = c.prototype.gt = function(p) {
        return this._a48 > p._a48 ? !0 : this._a48 < p._a48 ? !1 : this._a32 > p._a32 ? !0 : this._a32 < p._a32 ? !1 : this._a16 > p._a16 ? !0 : this._a16 < p._a16 ? !1 : this._a00 > p._a00;
      }, c.prototype.lessThan = c.prototype.lt = function(p) {
        return this._a48 < p._a48 ? !0 : this._a48 > p._a48 ? !1 : this._a32 < p._a32 ? !0 : this._a32 > p._a32 ? !1 : this._a16 < p._a16 ? !0 : this._a16 > p._a16 ? !1 : this._a00 < p._a00;
      }, c.prototype.or = function(p) {
        return this._a00 |= p._a00, this._a16 |= p._a16, this._a32 |= p._a32, this._a48 |= p._a48, this;
      }, c.prototype.and = function(p) {
        return this._a00 &= p._a00, this._a16 &= p._a16, this._a32 &= p._a32, this._a48 &= p._a48, this;
      }, c.prototype.xor = function(p) {
        return this._a00 ^= p._a00, this._a16 ^= p._a16, this._a32 ^= p._a32, this._a48 ^= p._a48, this;
      }, c.prototype.not = function() {
        return this._a00 = ~this._a00 & 65535, this._a16 = ~this._a16 & 65535, this._a32 = ~this._a32 & 65535, this._a48 = ~this._a48 & 65535, this;
      }, c.prototype.shiftRight = c.prototype.shiftr = function(p) {
        return p %= 64, p >= 48 ? (this._a00 = this._a48 >> p - 48, this._a16 = 0, this._a32 = 0, this._a48 = 0) : p >= 32 ? (p -= 32, this._a00 = (this._a32 >> p | this._a48 << 16 - p) & 65535, this._a16 = this._a48 >> p & 65535, this._a32 = 0, this._a48 = 0) : p >= 16 ? (p -= 16, this._a00 = (this._a16 >> p | this._a32 << 16 - p) & 65535, this._a16 = (this._a32 >> p | this._a48 << 16 - p) & 65535, this._a32 = this._a48 >> p & 65535, this._a48 = 0) : (this._a00 = (this._a00 >> p | this._a16 << 16 - p) & 65535, this._a16 = (this._a16 >> p | this._a32 << 16 - p) & 65535, this._a32 = (this._a32 >> p | this._a48 << 16 - p) & 65535, this._a48 = this._a48 >> p & 65535), this;
      }, c.prototype.shiftLeft = c.prototype.shiftl = function(p, d) {
        return p %= 64, p >= 48 ? (this._a48 = this._a00 << p - 48, this._a32 = 0, this._a16 = 0, this._a00 = 0) : p >= 32 ? (p -= 32, this._a48 = this._a16 << p | this._a00 >> 16 - p, this._a32 = this._a00 << p & 65535, this._a16 = 0, this._a00 = 0) : p >= 16 ? (p -= 16, this._a48 = this._a32 << p | this._a16 >> 16 - p, this._a32 = (this._a16 << p | this._a00 >> 16 - p) & 65535, this._a16 = this._a00 << p & 65535, this._a00 = 0) : (this._a48 = this._a48 << p | this._a32 >> 16 - p, this._a32 = (this._a32 << p | this._a16 >> 16 - p) & 65535, this._a16 = (this._a16 << p | this._a00 >> 16 - p) & 65535, this._a00 = this._a00 << p & 65535), d || (this._a48 &= 65535), this;
      }, c.prototype.rotateLeft = c.prototype.rotl = function(p) {
        if (p %= 64, p == 0) return this;
        if (p >= 32) {
          var d = this._a00;
          if (this._a00 = this._a32, this._a32 = d, d = this._a48, this._a48 = this._a16, this._a16 = d, p == 32) return this;
          p -= 32;
        }
        var b = this._a48 << 16 | this._a32, w = this._a16 << 16 | this._a00, v = b << p | w >>> 32 - p, k = w << p | b >>> 32 - p;
        return this._a00 = k & 65535, this._a16 = k >>> 16, this._a32 = v & 65535, this._a48 = v >>> 16, this;
      }, c.prototype.rotateRight = c.prototype.rotr = function(p) {
        if (p %= 64, p == 0) return this;
        if (p >= 32) {
          var d = this._a00;
          if (this._a00 = this._a32, this._a32 = d, d = this._a48, this._a48 = this._a16, this._a16 = d, p == 32) return this;
          p -= 32;
        }
        var b = this._a48 << 16 | this._a32, w = this._a16 << 16 | this._a00, v = b >>> p | w << 32 - p, k = w >>> p | b << 32 - p;
        return this._a00 = k & 65535, this._a16 = k >>> 16, this._a32 = v & 65535, this._a48 = v >>> 16, this;
      }, c.prototype.clone = function() {
        return new c(this._a00, this._a16, this._a32, this._a48);
      }, r.exports ? r.exports = c : n.UINT64 = c;
    })(X1);
  })(Ca)), Ca.exports;
}
var Tp;
function nm() {
  return Tp || (Tp = 1, ba.UINT32 = G1(), ba.UINT64 = q1()), ba;
}
var Zs, Ap;
function Z1() {
  if (Ap) return Zs;
  Ap = 1;
  var r = nm().UINT32;
  r.prototype.xxh_update = function(d, b) {
    var w = i._low, v = i._high, k, C;
    C = d * w, k = C >>> 16, k += b * w, k &= 65535, k += d * v;
    var y = this._low + (C & 65535), F = y >>> 16;
    F += this._high + (k & 65535);
    var N = F << 16 | y & 65535;
    N = N << 13 | N >>> 19, y = N & 65535, F = N >>> 16, w = n._low, v = n._high, C = y * w, k = C >>> 16, k += F * w, k &= 65535, k += y * v, this._low = C & 65535, this._high = k & 65535;
  };
  var n = r("2654435761"), i = r("2246822519"), s = r("3266489917"), c = r("668265263"), f = r("374761393");
  function h(d) {
    for (var b = [], w = 0, v = d.length; w < v; w++) {
      var k = d.charCodeAt(w);
      k < 128 ? b.push(k) : k < 2048 ? b.push(
        192 | k >> 6,
        128 | k & 63
      ) : k < 55296 || k >= 57344 ? b.push(
        224 | k >> 12,
        128 | k >> 6 & 63,
        128 | k & 63
      ) : (w++, k = 65536 + ((k & 1023) << 10 | d.charCodeAt(w) & 1023), b.push(
        240 | k >> 18,
        128 | k >> 12 & 63,
        128 | k >> 6 & 63,
        128 | k & 63
      ));
    }
    return new Uint8Array(b);
  }
  function g() {
    if (arguments.length == 2)
      return new g(arguments[1]).update(arguments[0]).digest();
    if (!(this instanceof g))
      return new g(arguments[0]);
    p.call(this, arguments[0]);
  }
  function p(d) {
    return this.seed = d instanceof r ? d.clone() : r(d), this.v1 = this.seed.clone().add(n).add(i), this.v2 = this.seed.clone().add(i), this.v3 = this.seed.clone(), this.v4 = this.seed.clone().subtract(n), this.total_len = 0, this.memsize = 0, this.memory = null, this;
  }
  return g.prototype.init = p, g.prototype.update = function(d) {
    var b = typeof d == "string", w;
    b && (d = h(d), b = !1, w = !0), typeof ArrayBuffer < "u" && d instanceof ArrayBuffer && (w = !0, d = new Uint8Array(d));
    var v = 0, k = d.length, C = v + k;
    if (k == 0) return this;
    if (this.total_len += k, this.memsize == 0 && (b ? this.memory = "" : w ? this.memory = new Uint8Array(16) : this.memory = new Buffer(16)), this.memsize + k < 16)
      return b ? this.memory += d : w ? this.memory.set(d.subarray(0, k), this.memsize) : d.copy(this.memory, this.memsize, 0, k), this.memsize += k, this;
    if (this.memsize > 0) {
      b ? this.memory += d.slice(0, 16 - this.memsize) : w ? this.memory.set(d.subarray(0, 16 - this.memsize), this.memsize) : d.copy(this.memory, this.memsize, 0, 16 - this.memsize);
      var y = 0;
      b ? (this.v1.xxh_update(
        this.memory.charCodeAt(y + 1) << 8 | this.memory.charCodeAt(y),
        this.memory.charCodeAt(y + 3) << 8 | this.memory.charCodeAt(y + 2)
      ), y += 4, this.v2.xxh_update(
        this.memory.charCodeAt(y + 1) << 8 | this.memory.charCodeAt(y),
        this.memory.charCodeAt(y + 3) << 8 | this.memory.charCodeAt(y + 2)
      ), y += 4, this.v3.xxh_update(
        this.memory.charCodeAt(y + 1) << 8 | this.memory.charCodeAt(y),
        this.memory.charCodeAt(y + 3) << 8 | this.memory.charCodeAt(y + 2)
      ), y += 4, this.v4.xxh_update(
        this.memory.charCodeAt(y + 1) << 8 | this.memory.charCodeAt(y),
        this.memory.charCodeAt(y + 3) << 8 | this.memory.charCodeAt(y + 2)
      )) : (this.v1.xxh_update(
        this.memory[y + 1] << 8 | this.memory[y],
        this.memory[y + 3] << 8 | this.memory[y + 2]
      ), y += 4, this.v2.xxh_update(
        this.memory[y + 1] << 8 | this.memory[y],
        this.memory[y + 3] << 8 | this.memory[y + 2]
      ), y += 4, this.v3.xxh_update(
        this.memory[y + 1] << 8 | this.memory[y],
        this.memory[y + 3] << 8 | this.memory[y + 2]
      ), y += 4, this.v4.xxh_update(
        this.memory[y + 1] << 8 | this.memory[y],
        this.memory[y + 3] << 8 | this.memory[y + 2]
      )), v += 16 - this.memsize, this.memsize = 0, b && (this.memory = "");
    }
    if (v <= C - 16) {
      var F = C - 16;
      do
        b ? (this.v1.xxh_update(
          d.charCodeAt(v + 1) << 8 | d.charCodeAt(v),
          d.charCodeAt(v + 3) << 8 | d.charCodeAt(v + 2)
        ), v += 4, this.v2.xxh_update(
          d.charCodeAt(v + 1) << 8 | d.charCodeAt(v),
          d.charCodeAt(v + 3) << 8 | d.charCodeAt(v + 2)
        ), v += 4, this.v3.xxh_update(
          d.charCodeAt(v + 1) << 8 | d.charCodeAt(v),
          d.charCodeAt(v + 3) << 8 | d.charCodeAt(v + 2)
        ), v += 4, this.v4.xxh_update(
          d.charCodeAt(v + 1) << 8 | d.charCodeAt(v),
          d.charCodeAt(v + 3) << 8 | d.charCodeAt(v + 2)
        )) : (this.v1.xxh_update(
          d[v + 1] << 8 | d[v],
          d[v + 3] << 8 | d[v + 2]
        ), v += 4, this.v2.xxh_update(
          d[v + 1] << 8 | d[v],
          d[v + 3] << 8 | d[v + 2]
        ), v += 4, this.v3.xxh_update(
          d[v + 1] << 8 | d[v],
          d[v + 3] << 8 | d[v + 2]
        ), v += 4, this.v4.xxh_update(
          d[v + 1] << 8 | d[v],
          d[v + 3] << 8 | d[v + 2]
        )), v += 4;
      while (v <= F);
    }
    return v < C && (b ? this.memory += d.slice(v) : w ? this.memory.set(d.subarray(v, C), this.memsize) : d.copy(this.memory, this.memsize, v, C), this.memsize = C - v), this;
  }, g.prototype.digest = function() {
    var d = this.memory, b = typeof d == "string", w = 0, v = this.memsize, k, C, y = new r();
    for (this.total_len >= 16 ? k = this.v1.rotl(1).add(this.v2.rotl(7).add(this.v3.rotl(12).add(this.v4.rotl(18)))) : k = this.seed.clone().add(f), k.add(y.fromNumber(this.total_len)); w <= v - 4; )
      b ? y.fromBits(
        d.charCodeAt(w + 1) << 8 | d.charCodeAt(w),
        d.charCodeAt(w + 3) << 8 | d.charCodeAt(w + 2)
      ) : y.fromBits(
        d[w + 1] << 8 | d[w],
        d[w + 3] << 8 | d[w + 2]
      ), k.add(y.multiply(s)).rotl(17).multiply(c), w += 4;
    for (; w < v; )
      y.fromBits(b ? d.charCodeAt(w++) : d[w++], 0), k.add(y.multiply(f)).rotl(11).multiply(n);
    return C = k.clone().shiftRight(15), k.xor(C).multiply(i), C = k.clone().shiftRight(13), k.xor(C).multiply(s), C = k.clone().shiftRight(16), k.xor(C), this.init(this.seed), k;
  }, Zs = g, Zs;
}
var Js, zp;
function J1() {
  if (zp) return Js;
  zp = 1;
  var r = nm().UINT64, n = r("11400714785074694791"), i = r("14029467366897019727"), s = r("1609587929392839161"), c = r("9650029242287828579"), f = r("2870177450012600261");
  function h(d) {
    for (var b = [], w = 0, v = d.length; w < v; w++) {
      var k = d.charCodeAt(w);
      k < 128 ? b.push(k) : k < 2048 ? b.push(
        192 | k >> 6,
        128 | k & 63
      ) : k < 55296 || k >= 57344 ? b.push(
        224 | k >> 12,
        128 | k >> 6 & 63,
        128 | k & 63
      ) : (w++, k = 65536 + ((k & 1023) << 10 | d.charCodeAt(w) & 1023), b.push(
        240 | k >> 18,
        128 | k >> 12 & 63,
        128 | k >> 6 & 63,
        128 | k & 63
      ));
    }
    return new Uint8Array(b);
  }
  function g() {
    if (arguments.length == 2)
      return new g(arguments[1]).update(arguments[0]).digest();
    if (!(this instanceof g))
      return new g(arguments[0]);
    p.call(this, arguments[0]);
  }
  function p(d) {
    return this.seed = d instanceof r ? d.clone() : r(d), this.v1 = this.seed.clone().add(n).add(i), this.v2 = this.seed.clone().add(i), this.v3 = this.seed.clone(), this.v4 = this.seed.clone().subtract(n), this.total_len = 0, this.memsize = 0, this.memory = null, this;
  }
  return g.prototype.init = p, g.prototype.update = function(d) {
    var b = typeof d == "string", w;
    b && (d = h(d), b = !1, w = !0), typeof ArrayBuffer < "u" && d instanceof ArrayBuffer && (w = !0, d = new Uint8Array(d));
    var v = 0, k = d.length, C = v + k;
    if (k == 0) return this;
    if (this.total_len += k, this.memsize == 0 && (b ? this.memory = "" : w ? this.memory = new Uint8Array(32) : this.memory = new Buffer(32)), this.memsize + k < 32)
      return b ? this.memory += d : w ? this.memory.set(d.subarray(0, k), this.memsize) : d.copy(this.memory, this.memsize, 0, k), this.memsize += k, this;
    if (this.memsize > 0) {
      b ? this.memory += d.slice(0, 32 - this.memsize) : w ? this.memory.set(d.subarray(0, 32 - this.memsize), this.memsize) : d.copy(this.memory, this.memsize, 0, 32 - this.memsize);
      var y = 0;
      if (b) {
        var F;
        F = r(
          this.memory.charCodeAt(y + 1) << 8 | this.memory.charCodeAt(y),
          this.memory.charCodeAt(y + 3) << 8 | this.memory.charCodeAt(y + 2),
          this.memory.charCodeAt(y + 5) << 8 | this.memory.charCodeAt(y + 4),
          this.memory.charCodeAt(y + 7) << 8 | this.memory.charCodeAt(y + 6)
        ), this.v1.add(F.multiply(i)).rotl(31).multiply(n), y += 8, F = r(
          this.memory.charCodeAt(y + 1) << 8 | this.memory.charCodeAt(y),
          this.memory.charCodeAt(y + 3) << 8 | this.memory.charCodeAt(y + 2),
          this.memory.charCodeAt(y + 5) << 8 | this.memory.charCodeAt(y + 4),
          this.memory.charCodeAt(y + 7) << 8 | this.memory.charCodeAt(y + 6)
        ), this.v2.add(F.multiply(i)).rotl(31).multiply(n), y += 8, F = r(
          this.memory.charCodeAt(y + 1) << 8 | this.memory.charCodeAt(y),
          this.memory.charCodeAt(y + 3) << 8 | this.memory.charCodeAt(y + 2),
          this.memory.charCodeAt(y + 5) << 8 | this.memory.charCodeAt(y + 4),
          this.memory.charCodeAt(y + 7) << 8 | this.memory.charCodeAt(y + 6)
        ), this.v3.add(F.multiply(i)).rotl(31).multiply(n), y += 8, F = r(
          this.memory.charCodeAt(y + 1) << 8 | this.memory.charCodeAt(y),
          this.memory.charCodeAt(y + 3) << 8 | this.memory.charCodeAt(y + 2),
          this.memory.charCodeAt(y + 5) << 8 | this.memory.charCodeAt(y + 4),
          this.memory.charCodeAt(y + 7) << 8 | this.memory.charCodeAt(y + 6)
        ), this.v4.add(F.multiply(i)).rotl(31).multiply(n);
      } else {
        var F;
        F = r(
          this.memory[y + 1] << 8 | this.memory[y],
          this.memory[y + 3] << 8 | this.memory[y + 2],
          this.memory[y + 5] << 8 | this.memory[y + 4],
          this.memory[y + 7] << 8 | this.memory[y + 6]
        ), this.v1.add(F.multiply(i)).rotl(31).multiply(n), y += 8, F = r(
          this.memory[y + 1] << 8 | this.memory[y],
          this.memory[y + 3] << 8 | this.memory[y + 2],
          this.memory[y + 5] << 8 | this.memory[y + 4],
          this.memory[y + 7] << 8 | this.memory[y + 6]
        ), this.v2.add(F.multiply(i)).rotl(31).multiply(n), y += 8, F = r(
          this.memory[y + 1] << 8 | this.memory[y],
          this.memory[y + 3] << 8 | this.memory[y + 2],
          this.memory[y + 5] << 8 | this.memory[y + 4],
          this.memory[y + 7] << 8 | this.memory[y + 6]
        ), this.v3.add(F.multiply(i)).rotl(31).multiply(n), y += 8, F = r(
          this.memory[y + 1] << 8 | this.memory[y],
          this.memory[y + 3] << 8 | this.memory[y + 2],
          this.memory[y + 5] << 8 | this.memory[y + 4],
          this.memory[y + 7] << 8 | this.memory[y + 6]
        ), this.v4.add(F.multiply(i)).rotl(31).multiply(n);
      }
      v += 32 - this.memsize, this.memsize = 0, b && (this.memory = "");
    }
    if (v <= C - 32) {
      var N = C - 32;
      do {
        if (b) {
          var F;
          F = r(
            d.charCodeAt(v + 1) << 8 | d.charCodeAt(v),
            d.charCodeAt(v + 3) << 8 | d.charCodeAt(v + 2),
            d.charCodeAt(v + 5) << 8 | d.charCodeAt(v + 4),
            d.charCodeAt(v + 7) << 8 | d.charCodeAt(v + 6)
          ), this.v1.add(F.multiply(i)).rotl(31).multiply(n), v += 8, F = r(
            d.charCodeAt(v + 1) << 8 | d.charCodeAt(v),
            d.charCodeAt(v + 3) << 8 | d.charCodeAt(v + 2),
            d.charCodeAt(v + 5) << 8 | d.charCodeAt(v + 4),
            d.charCodeAt(v + 7) << 8 | d.charCodeAt(v + 6)
          ), this.v2.add(F.multiply(i)).rotl(31).multiply(n), v += 8, F = r(
            d.charCodeAt(v + 1) << 8 | d.charCodeAt(v),
            d.charCodeAt(v + 3) << 8 | d.charCodeAt(v + 2),
            d.charCodeAt(v + 5) << 8 | d.charCodeAt(v + 4),
            d.charCodeAt(v + 7) << 8 | d.charCodeAt(v + 6)
          ), this.v3.add(F.multiply(i)).rotl(31).multiply(n), v += 8, F = r(
            d.charCodeAt(v + 1) << 8 | d.charCodeAt(v),
            d.charCodeAt(v + 3) << 8 | d.charCodeAt(v + 2),
            d.charCodeAt(v + 5) << 8 | d.charCodeAt(v + 4),
            d.charCodeAt(v + 7) << 8 | d.charCodeAt(v + 6)
          ), this.v4.add(F.multiply(i)).rotl(31).multiply(n);
        } else {
          var F;
          F = r(
            d[v + 1] << 8 | d[v],
            d[v + 3] << 8 | d[v + 2],
            d[v + 5] << 8 | d[v + 4],
            d[v + 7] << 8 | d[v + 6]
          ), this.v1.add(F.multiply(i)).rotl(31).multiply(n), v += 8, F = r(
            d[v + 1] << 8 | d[v],
            d[v + 3] << 8 | d[v + 2],
            d[v + 5] << 8 | d[v + 4],
            d[v + 7] << 8 | d[v + 6]
          ), this.v2.add(F.multiply(i)).rotl(31).multiply(n), v += 8, F = r(
            d[v + 1] << 8 | d[v],
            d[v + 3] << 8 | d[v + 2],
            d[v + 5] << 8 | d[v + 4],
            d[v + 7] << 8 | d[v + 6]
          ), this.v3.add(F.multiply(i)).rotl(31).multiply(n), v += 8, F = r(
            d[v + 1] << 8 | d[v],
            d[v + 3] << 8 | d[v + 2],
            d[v + 5] << 8 | d[v + 4],
            d[v + 7] << 8 | d[v + 6]
          ), this.v4.add(F.multiply(i)).rotl(31).multiply(n);
        }
        v += 8;
      } while (v <= N);
    }
    return v < C && (b ? this.memory += d.slice(v) : w ? this.memory.set(d.subarray(v, C), this.memsize) : d.copy(this.memory, this.memsize, v, C), this.memsize = C - v), this;
  }, g.prototype.digest = function() {
    var d = this.memory, b = typeof d == "string", w = 0, v = this.memsize, k, C, y = new r();
    for (this.total_len >= 32 ? (k = this.v1.clone().rotl(1), k.add(this.v2.clone().rotl(7)), k.add(this.v3.clone().rotl(12)), k.add(this.v4.clone().rotl(18)), k.xor(this.v1.multiply(i).rotl(31).multiply(n)), k.multiply(n).add(c), k.xor(this.v2.multiply(i).rotl(31).multiply(n)), k.multiply(n).add(c), k.xor(this.v3.multiply(i).rotl(31).multiply(n)), k.multiply(n).add(c), k.xor(this.v4.multiply(i).rotl(31).multiply(n)), k.multiply(n).add(c)) : k = this.seed.clone().add(f), k.add(y.fromNumber(this.total_len)); w <= v - 8; )
      b ? y.fromBits(
        d.charCodeAt(w + 1) << 8 | d.charCodeAt(w),
        d.charCodeAt(w + 3) << 8 | d.charCodeAt(w + 2),
        d.charCodeAt(w + 5) << 8 | d.charCodeAt(w + 4),
        d.charCodeAt(w + 7) << 8 | d.charCodeAt(w + 6)
      ) : y.fromBits(
        d[w + 1] << 8 | d[w],
        d[w + 3] << 8 | d[w + 2],
        d[w + 5] << 8 | d[w + 4],
        d[w + 7] << 8 | d[w + 6]
      ), y.multiply(i).rotl(31).multiply(n), k.xor(y).rotl(27).multiply(n).add(c), w += 8;
    for (w + 4 <= v && (b ? y.fromBits(
      d.charCodeAt(w + 1) << 8 | d.charCodeAt(w),
      d.charCodeAt(w + 3) << 8 | d.charCodeAt(w + 2),
      0,
      0
    ) : y.fromBits(
      d[w + 1] << 8 | d[w],
      d[w + 3] << 8 | d[w + 2],
      0,
      0
    ), k.xor(y.multiply(n)).rotl(23).multiply(i).add(s), w += 4); w < v; )
      y.fromBits(b ? d.charCodeAt(w++) : d[w++], 0, 0, 0), k.xor(y.multiply(f)).rotl(11).multiply(n);
    return C = k.clone().shiftRight(33), k.xor(C).multiply(i), C = k.clone().shiftRight(29), k.xor(C).multiply(s), C = k.clone().shiftRight(32), k.xor(C), this.init(this.seed), k;
  }, Js = g, Js;
}
var eu, $p;
function ew() {
  return $p || ($p = 1, eu = {
    h32: Z1(),
    h64: J1()
  }), eu;
}
ew();
var tw = Object.create, Ba = Object.defineProperty, rw = Object.getOwnPropertyDescriptor, Qu = Object.getOwnPropertyNames, nw = Object.getPrototypeOf, ow = Object.prototype.hasOwnProperty, iw = (r, n) => function() {
  return r && (n = (0, r[Qu(r)[0]])(r = 0)), n;
}, aw = (r, n) => function() {
  return n || (0, r[Qu(r)[0]])((n = { exports: {} }).exports, n), n.exports;
}, lw = (r, n) => {
  for (var i in n)
    Ba(r, i, { get: n[i], enumerable: !0 });
}, om = (r, n, i, s) => {
  if (n && typeof n == "object" || typeof n == "function")
    for (let c of Qu(n))
      !ow.call(r, c) && c !== i && Ba(r, c, { get: () => n[c], enumerable: !(s = rw(n, c)) || s.enumerable });
  return r;
}, sw = (r, n, i) => (i = r != null ? tw(nw(r)) : {}, om(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Ba(i, "default", { value: r, enumerable: !0 }),
  r
)), uw = (r) => om(Ba({}, "__esModule", { value: !0 }), r), im = {};
lw(im, {
  MODE_VALUES: () => lm,
  THEME_VALUES: () => am
});
var am, lm, cw = iw({
  "../@paloma-tokens/dist/assets/paloma-theme-mode-values.ts"() {
    am = [
      "ea-blue",
      "ea-sims",
      "fc-green",
      "ea-battlefield6",
      // eslint-disable-line perfectionist/sort-union-types
      "purple",
      "red",
      "ea-madden"
    ], lm = ["dark", "light"];
  }
}), dw = aw({
  "../@paloma-tokens/dist/index.js"(r) {
    Object.defineProperty(r, "__esModule", { value: !0 }), r.THEME_VALUES = r.MODE_VALUES = void 0;
    var n = (cw(), uw(im));
    Object.defineProperty(r, "MODE_VALUES", { enumerable: !0, get: function() {
      return n.MODE_VALUES;
    } }), Object.defineProperty(r, "THEME_VALUES", { enumerable: !0, get: function() {
      return n.THEME_VALUES;
    } });
  }
}), Ip = (r) => {
  console.error(`Assertion failed: ${r}`);
}, sm = (r, n) => {
  n || Ip("The assert function requires a message."), r || Ip(n);
};
function On(r) {
  if (r === void 0)
    return !1;
}
var _u = (r) => {
  On() && console.warn(r);
}, fw = "It seems like you're using the cn function with a single string input. The cn function is designed for handling conditional classes. If you're not dealing with conditional classes, consider using the class directly.", pw = (r) => !r.startsWith("size"), um = {
  override: {
    classGroups: {
      "font-size": [{ "text-size": [R1.isAny] }],
      "font-variant": ["font-variant-none"],
      "text-color": [
        {
          text: [pw]
        }
      ]
    }
  }
}, hw = Zh(um), mw = /\s\s+/g, gw = (r) => r.replace(mw, " "), vw = (...r) => {
  if (typeof r[0] == "string" && r.length === 1)
    return _u(fw), _u(`cn("${r[0]}")`), r[0];
  const n = hw(Bu(...r));
  return gw(n);
}, jt = (r, n) => ti(r, { twMergeConfig: um, ...n }), cm = sw(dw());
cm.MODE_VALUES;
cm.THEME_VALUES;
function ww({
  controlledValue: r,
  defaultValue: n,
  warnFn: i
}) {
  const [s, c] = B.useState(n);
  return r !== void 0 && n !== void 0 && (i ? i() : _u(
    "A controlled value and a default value were both provided. An element must be either controlled or uncontrolled. Decide between using any and remove on of these props"
  )), [
    r ?? s,
    r !== void 0 ? void 0 : c
  ];
}
var Lp = 0;
function yw(r = "") {
  return Lp += 1, r + Lp;
}
function bw(r, n) {
  const i = B.useRef(r ?? null);
  return sm(
    n.length > 0,
    "useUniqueId(): The prefix provided is an empty string. If you want to remove the prefix, do not provide it. If you want to use the default prefix, do not provide a prefix."
  ), i.current === null && (i.current = yw(
    `${n}-`
  )), r && (i.current = r), i.current;
}
function xw(r, n, i) {
  try {
    const c = re.Children.only(r);
    if (c.type === n)
      return i ? i(c, c == null ? void 0 : c.props) : r;
  } catch {
  }
  return null;
}
function kw(r, n) {
  if (!n)
    return null;
  const i = re.Children.only(n);
  return re.cloneElement(i, { ...r });
}
var _w = jt({
  base: "leading-[150%] rtl:text-right",
  variants: {
    body: {
      large: "font-body text-size-body-large",
      medium: "font-body text-size-body-medium",
      small: "font-body text-size-body-small",
      "x-small": "font-body text-size-body-x-small"
    },
    fontWeight: {
      bold: "font-bold",
      normal: "font-normal"
    },
    heading: {
      large: "text-size-xs-heading-large lg:text-size-lg-heading-large font-heading",
      medium: "text-size-xs-heading-medium lg:text-size-lg-heading-medium font-heading",
      small: "text-size-heading-small font-heading",
      "x-large": "text-size-xs-heading-x-large lg:text-size-lg-heading-x-large leading-[42px] font-heading",
      "x-small": "text-size-heading-x-small font-heading"
    },
    truncate: {
      true: "truncate min-w-0"
    },
    underline: {
      true: "underline underline-offset-4"
    }
  }
}), Ew = "span", tu = B.forwardRef(
  ({
    as: r,
    children: n,
    className: i,
    fontWeight: s = "normal",
    showTitle: c = !1,
    size: f,
    truncate: h = !1,
    underline: g = !1,
    variant: p,
    ...d
  }, b) => {
    const w = r ?? Ew, [v, k] = B.useMemo(() => p === "heading" ? [f ?? "large", p] : [f ?? "medium", "body"], [f, p]);
    return /* @__PURE__ */ re.createElement(
      w,
      {
        className: _w({
          className: i,
          fontWeight: s,
          truncate: h,
          underline: g,
          [k]: v
        }),
        "data-font-weight": s,
        "data-size": v,
        "data-truncate": h,
        "data-underline": g,
        "data-variant": k,
        ref: b,
        title: c ? d.title ?? (h && typeof n == "string" ? n : void 0) : void 0,
        ...d
      },
      n
    );
  }
), ru = (r, n = {}) => {
  if (typeof r == "string")
    return /* @__PURE__ */ re.createElement(tu, { ...n }, r);
  if (xw(r, tu)) {
    const i = {
      ...n ?? {},
      ...r.props
    };
    return /* @__PURE__ */ re.createElement(tu, { ...i });
  }
  if (re.isValidElement(r) && typeof r.type == "string") {
    const i = {};
    r.type === "a" && (i.color = "#0000EE", i.textDecoration = "underline");
    const s = r.props, c = {
      ...i,
      ...n.style,
      ...s.style
    };
    return re.cloneElement(
      r,
      {
        style: c
      }
    );
  }
  return r;
}, Sw = [
  /* Uses a dummy class because FocusRing is a functional component that just adds
      the class to the content.
  
      The cn or other style functions on the FocusRing are always called, so we can't
      listen to them to test functionality */
  "@paloma-focus-ring",
  "outline",
  "outline-2",
  "outline-offset-2",
  "outline-interactive-highlight"
], Cw = ({
  children: r,
  disabled: n,
  focusRingClass: i,
  ...s
}) => n ? r : /* @__PURE__ */ re.createElement(Ku, { focusRingClass: vw(Sw, i), ...s }, r), Fw = "text-content-neutral-subtle", Pw = jt({
  base: "py-4 flex flex-col items-start border-t-0 border-l-0 border-r-0 border-b border-b-neutral-subtle border-solid",
  variants: {
    expanded: {
      true: "pb-8"
    }
  }
}), Tw = jt({
  base: "flex items-center text-content-neutral-bold",
  variants: {
    expanded: {
      true: "text-content-highlight"
    }
  }
}), Aw = jt({
  base: "text-content-neutral-bold",
  variants: {
    expanded: {
      true: "!text-content-highlight"
    }
  }
}), zw = jt({
  base: "flex items-center text-content-neutral-subtle",
  variants: {
    size: {
      large: "h-8",
      medium: "h-6"
    }
  }
}), $w = jt({
  base: "w-full grid overflow-hidden transition-all duration-300 ease-in-out motion-reduce:transition-none",
  variants: {
    expanded: {
      false: "grid-rows-[0fr] invisible",
      true: "grid-rows-[1fr] visible"
    }
  }
}), Iw = jt({
  variants: {
    variant: {
      contained: "p-8 rounded-md bg-surface-level-01",
      "un-contained": ""
    }
  }
}), Lw = ({
  children: r,
  className: n,
  defaultExpanded: i,
  expanded: s,
  headingAs: c,
  id: f,
  label: h,
  leadingIcon: g,
  onToggle: p,
  size: d = "medium",
  subtitle: b,
  title: w,
  titleClassName: v,
  variant: k = "contained",
  ...C
}) => {
  const [y, F] = ww({
    controlledValue: s,
    defaultValue: i
  }), N = (xe) => {
    F == null || F(!y), p == null || p(xe, !y);
  }, M = B.useRef(null), { buttonProps: D } = Wu(
    { onPress: N },
    M
  ), H = bw(f, "accordion"), ne = `${H}-content`, ae = c ?? "h3", oe = !!y;
  return /* @__PURE__ */ re.createElement(
    "div",
    {
      className: Pw({
        class: n,
        expanded: oe
      }),
      ...C
    },
    /* @__PURE__ */ re.createElement(
      ae,
      {
        className: "w-full m-0",
        "data-testid": "@paloma-accordion-heading-id"
      },
      /* @__PURE__ */ re.createElement(Cw, { focusRingClass: "rounded-md" }, /* @__PURE__ */ re.createElement(
        "button",
        {
          ...D,
          "aria-controls": ne,
          "aria-expanded": oe,
          className: "w-full outline-none border-none bg-transparent cursor-pointer px-2 py-2 my-2 flex gap-2 justify-between hover:bg-content-neutral-bold/[0.08] active:bg-content-neutral-bold/[0.12] hover:active:bg-content-neutral-bold/[0.12]",
          id: H,
          ref: M
        },
        /* @__PURE__ */ re.createElement("div", { className: "flex items-start gap-2 text-left" }, g && /* @__PURE__ */ re.createElement(
          "div",
          {
            "aria-hidden": !0,
            className: Tw({ expanded: oe }),
            "data-testid": "@paloma-accordion-leading-icon-id"
          },
          kw({ size: d }, g)
        ), /* @__PURE__ */ re.createElement("div", { className: "title flex flex-col gap-1 items-start" }, ru(w, {
          className: Aw({
            class: v,
            expanded: oe
          }),
          fontWeight: "bold",
          size: d,
          variant: "body"
        }), ru(b, {
          className: Fw,
          size: d === "large" ? "small" : "x-small",
          variant: "body"
        }))),
        /* @__PURE__ */ re.createElement("div", { className: "flex items-start gap-2" }, ru(h, {
          className: zw({ size: d }),
          size: d === "large" ? "small" : "x-small",
          variant: "body"
        }), y ? /* @__PURE__ */ re.createElement(
          V1,
          {
            className: "text-content-highlight",
            "data-testid": "@paloma-accordion-button-expanded-id",
            size: d
          }
        ) : /* @__PURE__ */ re.createElement(
          K1,
          {
            className: "text-content-highlight",
            "data-testid": "@paloma-accordion-button-collapsed-id",
            size: d
          }
        ))
      ))
    ),
    /* @__PURE__ */ re.createElement(
      "section",
      {
        "aria-labelledby": H,
        className: $w({ expanded: oe }),
        id: ne
      },
      /* @__PURE__ */ re.createElement("div", { className: "overflow-hidden" }, /* @__PURE__ */ re.createElement("div", { className: Iw({ variant: k }) }, r))
    )
  );
};
const Rw = [
  {
    title: "Apex Legends: Marked Patch Notes",
    subtitle: "Apex Legends",
    label: "Patch notes",
    content: "Read about the latest balance changes, fixes, and improvements."
  },
  {
    title: "Friday Highlights",
    subtitle: "The Sims 4",
    label: "Community update",
    content: "See this week's featured community stories and updates."
  },
  {
    title: "Battlefield 6 Update Notes",
    subtitle: "Battlefield",
    label: "Game update",
    content: "Explore the latest Battlefield 6 changes and new features."
  },
  {
    title: "Full FC 27 Player Database",
    subtitle: "EA Sports FC 27",
    label: "Database",
    content: "Browse player ratings, attributes, and team information."
  }
];
function Nw() {
  return /* @__PURE__ */ fe.jsxs("section", { children: [
    /* @__PURE__ */ fe.jsx("h2", { className: "ea-section-heading", children: "Announcements" }),
    /* @__PURE__ */ fe.jsx("div", { children: Rw.map((r) => /* @__PURE__ */ fe.jsx(
      Lw,
      {
        className: "block-announcements__accordion",
        title: r.title,
        subtitle: r.subtitle,
        label: r.label,
        leadingIcon: /* @__PURE__ */ fe.jsx("span", { "aria-hidden": "true", children: "EA" }),
        children: /* @__PURE__ */ fe.jsx("p", { children: r.content })
      },
      r.title
    )) })
  ] });
}
var Gu = ni(), pe = (r) => ri(r, Gu), Xu = ni();
pe.write = (r) => ri(r, Xu);
var Ha = ni();
pe.onStart = (r) => ri(r, Ha);
var qu = ni();
pe.onFrame = (r) => ri(r, qu);
var Zu = ni();
pe.onFinish = (r) => ri(r, Zu);
var Dn = [];
pe.setTimeout = (r, n) => {
  const i = pe.now() + n, s = () => {
    const f = Dn.findIndex((h) => h.cancel == s);
    ~f && Dn.splice(f, 1), $r -= ~f ? 1 : 0;
  }, c = { time: i, handler: r, cancel: s };
  return Dn.splice(dm(i), 0, c), $r += 1, fm(), c;
};
var dm = (r) => ~(~Dn.findIndex((n) => n.time > r) || ~Dn.length);
pe.cancel = (r) => {
  Ha.delete(r), qu.delete(r), Zu.delete(r), Gu.delete(r), Xu.delete(r);
};
pe.sync = (r) => {
  Eu = !0, pe.batchedUpdates(r), Eu = !1;
};
pe.throttle = (r) => {
  let n;
  function i() {
    try {
      r(...n);
    } finally {
      n = null;
    }
  }
  function s(...c) {
    n = c, pe.onStart(i);
  }
  return s.handler = r, s.cancel = () => {
    Ha.delete(i), n = null;
  }, s;
};
var Ju = typeof window < "u" ? window.requestAnimationFrame : (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  (() => {
  })
);
pe.use = (r) => Ju = r;
pe.now = typeof performance < "u" ? () => performance.now() : Date.now;
pe.batchedUpdates = (r) => r();
pe.catch = console.error;
pe.frameLoop = "always";
pe.advance = () => {
  pe.frameLoop !== "demand" ? console.warn(
    "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
  ) : hm();
};
var zr = -1, $r = 0, Eu = !1;
function ri(r, n) {
  Eu ? (n.delete(r), r(0)) : (n.add(r), fm());
}
function fm() {
  zr < 0 && (zr = 0, pe.frameLoop !== "demand" && Ju(pm));
}
function Mw() {
  zr = -1;
}
function pm() {
  ~zr && (Ju(pm), pe.batchedUpdates(hm));
}
function hm() {
  const r = zr;
  zr = pe.now();
  const n = dm(zr);
  if (n && (mm(Dn.splice(0, n), (i) => i.handler()), $r -= n), !$r) {
    Mw();
    return;
  }
  Ha.flush(), Gu.flush(r ? Math.min(64, zr - r) : 16.667), qu.flush(), Xu.flush(), Zu.flush();
}
function ni() {
  let r = /* @__PURE__ */ new Set(), n = r;
  return {
    add(i) {
      $r += n == r && !r.has(i) ? 1 : 0, r.add(i);
    },
    delete(i) {
      return $r -= n == r && r.has(i) ? 1 : 0, r.delete(i);
    },
    flush(i) {
      n.size && (r = /* @__PURE__ */ new Set(), $r -= n.size, mm(n, (s) => s(i) && r.add(s)), $r += r.size, n = r);
    }
  };
}
function mm(r, n) {
  r.forEach((i) => {
    try {
      n(i);
    } catch (s) {
      pe.catch(s);
    }
  });
}
var Ow = Object.defineProperty, Dw = (r, n) => {
  for (var i in n)
    Ow(r, i, { get: n[i], enumerable: !0 });
}, Dt = {};
Dw(Dt, {
  assign: () => Uw,
  colors: () => Ir,
  createStringInterpolator: () => tc,
  skipAnimation: () => vm,
  to: () => gm,
  willAdvance: () => rc
});
function Su() {
}
var jw = (r, n, i) => Object.defineProperty(r, n, { value: i, writable: !0, configurable: !0 }), K = {
  arr: Array.isArray,
  obj: (r) => !!r && r.constructor.name === "Object",
  fun: (r) => typeof r == "function",
  str: (r) => typeof r == "string",
  num: (r) => typeof r == "number",
  und: (r) => r === void 0
};
function lr(r, n) {
  if (K.arr(r)) {
    if (!K.arr(n) || r.length !== n.length)
      return !1;
    for (let i = 0; i < r.length; i++)
      if (r[i] !== n[i])
        return !1;
    return !0;
  }
  return r === n;
}
var be = (r, n) => r.forEach(n);
function Gt(r, n, i) {
  if (K.arr(r)) {
    for (let s = 0; s < r.length; s++)
      n.call(i, r[s], `${s}`);
    return;
  }
  for (const s in r)
    r.hasOwnProperty(s) && n.call(i, r[s], s);
}
var yt = (r) => K.und(r) ? [] : K.arr(r) ? r : [r];
function Uo(r, n) {
  if (r.size) {
    const i = Array.from(r);
    r.clear(), be(i, n);
  }
}
var Do = (r, ...n) => Uo(r, (i) => i(...n)), ec = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), tc, gm, Ir = null, vm = !1, rc = Su, Uw = (r) => {
  r.to && (gm = r.to), r.now && (pe.now = r.now), r.colors !== void 0 && (Ir = r.colors), r.skipAnimation != null && (vm = r.skipAnimation), r.createStringInterpolator && (tc = r.createStringInterpolator), r.requestAnimationFrame && pe.use(r.requestAnimationFrame), r.batchedUpdates && (pe.batchedUpdates = r.batchedUpdates), r.willAdvance && (rc = r.willAdvance), r.frameLoop && (pe.frameLoop = r.frameLoop);
}, Vo = /* @__PURE__ */ new Set(), Pt = [], nu = [], La = 0, Wa = {
  get idle() {
    return !Vo.size && !Pt.length;
  },
  /** Advance the given animation on every frame until idle. */
  start(r) {
    La > r.priority ? (Vo.add(r), pe.onStart(Vw)) : (wm(r), pe(Cu));
  },
  /** Advance all animations by the given time. */
  advance: Cu,
  /** Call this when an animation's priority changes. */
  sort(r) {
    if (La)
      pe.onFrame(() => Wa.sort(r));
    else {
      const n = Pt.indexOf(r);
      ~n && (Pt.splice(n, 1), ym(r));
    }
  },
  /**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */
  clear() {
    Pt = [], Vo.clear();
  }
};
function Vw() {
  Vo.forEach(wm), Vo.clear(), pe(Cu);
}
function wm(r) {
  Pt.includes(r) || ym(r);
}
function ym(r) {
  Pt.splice(
    Bw(Pt, (n) => n.priority > r.priority),
    0,
    r
  );
}
function Cu(r) {
  const n = nu;
  for (let i = 0; i < Pt.length; i++) {
    const s = Pt[i];
    La = s.priority, s.idle || (rc(s), s.advance(r), s.idle || n.push(s));
  }
  return La = 0, nu = Pt, nu.length = 0, Pt = n, Pt.length > 0;
}
function Bw(r, n) {
  const i = r.findIndex(n);
  return i < 0 ? r.length : i;
}
var Hw = {
  transparent: 0,
  aliceblue: 4042850303,
  antiquewhite: 4209760255,
  aqua: 16777215,
  aquamarine: 2147472639,
  azure: 4043309055,
  beige: 4126530815,
  bisque: 4293182719,
  black: 255,
  blanchedalmond: 4293643775,
  blue: 65535,
  blueviolet: 2318131967,
  brown: 2771004159,
  burlywood: 3736635391,
  burntsienna: 3934150143,
  cadetblue: 1604231423,
  chartreuse: 2147418367,
  chocolate: 3530104575,
  coral: 4286533887,
  cornflowerblue: 1687547391,
  cornsilk: 4294499583,
  crimson: 3692313855,
  cyan: 16777215,
  darkblue: 35839,
  darkcyan: 9145343,
  darkgoldenrod: 3095792639,
  darkgray: 2846468607,
  darkgreen: 6553855,
  darkgrey: 2846468607,
  darkkhaki: 3182914559,
  darkmagenta: 2332068863,
  darkolivegreen: 1433087999,
  darkorange: 4287365375,
  darkorchid: 2570243327,
  darkred: 2332033279,
  darksalmon: 3918953215,
  darkseagreen: 2411499519,
  darkslateblue: 1211993087,
  darkslategray: 793726975,
  darkslategrey: 793726975,
  darkturquoise: 13554175,
  darkviolet: 2483082239,
  deeppink: 4279538687,
  deepskyblue: 12582911,
  dimgray: 1768516095,
  dimgrey: 1768516095,
  dodgerblue: 512819199,
  firebrick: 2988581631,
  floralwhite: 4294635775,
  forestgreen: 579543807,
  fuchsia: 4278255615,
  gainsboro: 3705462015,
  ghostwhite: 4177068031,
  gold: 4292280575,
  goldenrod: 3668254975,
  gray: 2155905279,
  green: 8388863,
  greenyellow: 2919182335,
  grey: 2155905279,
  honeydew: 4043305215,
  hotpink: 4285117695,
  indianred: 3445382399,
  indigo: 1258324735,
  ivory: 4294963455,
  khaki: 4041641215,
  lavender: 3873897215,
  lavenderblush: 4293981695,
  lawngreen: 2096890111,
  lemonchiffon: 4294626815,
  lightblue: 2916673279,
  lightcoral: 4034953471,
  lightcyan: 3774873599,
  lightgoldenrodyellow: 4210742015,
  lightgray: 3553874943,
  lightgreen: 2431553791,
  lightgrey: 3553874943,
  lightpink: 4290167295,
  lightsalmon: 4288707327,
  lightseagreen: 548580095,
  lightskyblue: 2278488831,
  lightslategray: 2005441023,
  lightslategrey: 2005441023,
  lightsteelblue: 2965692159,
  lightyellow: 4294959359,
  lime: 16711935,
  limegreen: 852308735,
  linen: 4210091775,
  magenta: 4278255615,
  maroon: 2147483903,
  mediumaquamarine: 1724754687,
  mediumblue: 52735,
  mediumorchid: 3126187007,
  mediumpurple: 2473647103,
  mediumseagreen: 1018393087,
  mediumslateblue: 2070474495,
  mediumspringgreen: 16423679,
  mediumturquoise: 1221709055,
  mediumvioletred: 3340076543,
  midnightblue: 421097727,
  mintcream: 4127193855,
  mistyrose: 4293190143,
  moccasin: 4293178879,
  navajowhite: 4292783615,
  navy: 33023,
  oldlace: 4260751103,
  olive: 2155872511,
  olivedrab: 1804477439,
  orange: 4289003775,
  orangered: 4282712319,
  orchid: 3664828159,
  palegoldenrod: 4008225535,
  palegreen: 2566625535,
  paleturquoise: 2951671551,
  palevioletred: 3681588223,
  papayawhip: 4293907967,
  peachpuff: 4292524543,
  peru: 3448061951,
  pink: 4290825215,
  plum: 3718307327,
  powderblue: 2967529215,
  purple: 2147516671,
  rebeccapurple: 1714657791,
  red: 4278190335,
  rosybrown: 3163525119,
  royalblue: 1097458175,
  saddlebrown: 2336560127,
  salmon: 4202722047,
  sandybrown: 4104413439,
  seagreen: 780883967,
  seashell: 4294307583,
  sienna: 2689740287,
  silver: 3233857791,
  skyblue: 2278484991,
  slateblue: 1784335871,
  slategray: 1887473919,
  slategrey: 1887473919,
  snow: 4294638335,
  springgreen: 16744447,
  steelblue: 1182971135,
  tan: 3535047935,
  teal: 8421631,
  thistle: 3636451583,
  tomato: 4284696575,
  turquoise: 1088475391,
  violet: 4001558271,
  wheat: 4125012991,
  white: 4294967295,
  whitesmoke: 4126537215,
  yellow: 4294902015,
  yellowgreen: 2597139199
}, Ot = "[-+]?\\d*\\.?\\d+", Ra = Ot + "%";
function Ka(...r) {
  return "\\(\\s*(" + r.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var Ww = new RegExp("rgb" + Ka(Ot, Ot, Ot)), Kw = new RegExp("rgba" + Ka(Ot, Ot, Ot, Ot)), Yw = new RegExp("hsl" + Ka(Ot, Ra, Ra)), Qw = new RegExp(
  "hsla" + Ka(Ot, Ra, Ra, Ot)
), Gw = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Xw = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, qw = /^#([0-9a-fA-F]{6})$/, Zw = /^#([0-9a-fA-F]{8})$/;
function Jw(r) {
  let n;
  return typeof r == "number" ? r >>> 0 === r && r >= 0 && r <= 4294967295 ? r : null : (n = qw.exec(r)) ? parseInt(n[1] + "ff", 16) >>> 0 : Ir && Ir[r] !== void 0 ? Ir[r] : (n = Ww.exec(r)) ? ($n(n[1]) << 24 | // r
  $n(n[2]) << 16 | // g
  $n(n[3]) << 8 | // b
  255) >>> // a
  0 : (n = Kw.exec(r)) ? ($n(n[1]) << 24 | // r
  $n(n[2]) << 16 | // g
  $n(n[3]) << 8 | // b
  Mp(n[4])) >>> // a
  0 : (n = Gw.exec(r)) ? parseInt(
    n[1] + n[1] + // r
    n[2] + n[2] + // g
    n[3] + n[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (n = Zw.exec(r)) ? parseInt(n[1], 16) >>> 0 : (n = Xw.exec(r)) ? parseInt(
    n[1] + n[1] + // r
    n[2] + n[2] + // g
    n[3] + n[3] + // b
    n[4] + n[4],
    // a
    16
  ) >>> 0 : (n = Yw.exec(r)) ? (Rp(
    Np(n[1]),
    // h
    xa(n[2]),
    // s
    xa(n[3])
    // l
  ) | 255) >>> // a
  0 : (n = Qw.exec(r)) ? (Rp(
    Np(n[1]),
    // h
    xa(n[2]),
    // s
    xa(n[3])
    // l
  ) | Mp(n[4])) >>> // a
  0 : null;
}
function ou(r, n, i) {
  return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? r + (n - r) * 6 * i : i < 1 / 2 ? n : i < 2 / 3 ? r + (n - r) * (2 / 3 - i) * 6 : r;
}
function Rp(r, n, i) {
  const s = i < 0.5 ? i * (1 + n) : i + n - i * n, c = 2 * i - s, f = ou(c, s, r + 1 / 3), h = ou(c, s, r), g = ou(c, s, r - 1 / 3);
  return Math.round(f * 255) << 24 | Math.round(h * 255) << 16 | Math.round(g * 255) << 8;
}
function $n(r) {
  const n = parseInt(r, 10);
  return n < 0 ? 0 : n > 255 ? 255 : n;
}
function Np(r) {
  return (parseFloat(r) % 360 + 360) % 360 / 360;
}
function Mp(r) {
  const n = parseFloat(r);
  return n < 0 ? 0 : n > 1 ? 255 : Math.round(n * 255);
}
function xa(r) {
  const n = parseFloat(r);
  return n < 0 ? 0 : n > 100 ? 1 : n / 100;
}
function Op(r) {
  let n = Jw(r);
  if (n === null)
    return r;
  n = n || 0;
  const i = (n & 4278190080) >>> 24, s = (n & 16711680) >>> 16, c = (n & 65280) >>> 8, f = (n & 255) / 255;
  return `rgba(${i}, ${s}, ${c}, ${f})`;
}
var Ko = (r, n, i) => {
  if (K.fun(r))
    return r;
  if (K.arr(r))
    return Ko({
      range: r,
      output: n,
      extrapolate: i
    });
  if (K.str(r.output[0]))
    return tc(r);
  const s = r, c = s.output, f = s.range || [0, 1], h = s.extrapolateLeft || s.extrapolate || "extend", g = s.extrapolateRight || s.extrapolate || "extend", p = s.easing || ((d) => d);
  return (d) => {
    const b = ty(d, f);
    return ey(
      d,
      f[b],
      f[b + 1],
      c[b],
      c[b + 1],
      p,
      h,
      g,
      s.map
    );
  };
};
function ey(r, n, i, s, c, f, h, g, p) {
  let d = p ? p(r) : r;
  if (d < n) {
    if (h === "identity")
      return d;
    h === "clamp" && (d = n);
  }
  if (d > i) {
    if (g === "identity")
      return d;
    g === "clamp" && (d = i);
  }
  return s === c ? s : n === i ? r <= n ? s : c : (n === -1 / 0 ? d = -d : i === 1 / 0 ? d = d - n : d = (d - n) / (i - n), d = f(d), s === -1 / 0 ? d = -d : c === 1 / 0 ? d = d + s : d = d * (c - s) + s, d);
}
function ty(r, n) {
  for (var i = 1; i < n.length - 1 && !(n[i] >= r); ++i)
    ;
  return i - 1;
}
var bm = {
  linear: (r) => r,
  easeInOutCubic: (r) => r < 0.5 ? 4 * r * r * r : 1 - Math.pow(-2 * r + 2, 3) / 2
}, Yo = Symbol.for("FluidValue.get"), Bn = Symbol.for("FluidValue.observers"), Ct = (r) => !!(r && r[Yo]), ht = (r) => r && r[Yo] ? r[Yo]() : r, Dp = (r) => r[Bn] || null;
function ry(r, n) {
  r.eventObserved ? r.eventObserved(n) : r(n);
}
function Qo(r, n) {
  const i = r[Bn];
  i && i.forEach((s) => {
    ry(s, n);
  });
}
var xm = class {
  constructor(r) {
    if (!r && !(r = this.get))
      throw Error("Unknown getter");
    ny(this, r);
  }
}, ny = (r, n) => km(r, Yo, n);
function Kn(r, n) {
  if (r[Yo]) {
    let i = r[Bn];
    i || km(r, Bn, i = /* @__PURE__ */ new Set()), i.has(n) || (i.add(n), r.observerAdded && r.observerAdded(i.size, n));
  }
  return n;
}
function Go(r, n) {
  const i = r[Bn];
  if (i && i.has(n)) {
    const s = i.size - 1;
    s ? i.delete(n) : r[Bn] = null, r.observerRemoved && r.observerRemoved(s, n);
  }
}
var km = (r, n, i) => Object.defineProperty(r, n, {
  value: i,
  writable: !0,
  configurable: !0
}), Fa = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, oy = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, jp = new RegExp(`(${Fa.source})(%|[a-z]+)`, "i"), iy = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, Ya = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, _m = (r) => {
  const [n, i] = ay(r);
  if (!n || ec())
    return r;
  const s = window.getComputedStyle(document.documentElement).getPropertyValue(n);
  if (s)
    return s.trim();
  if (i && i.startsWith("--")) {
    const c = window.getComputedStyle(document.documentElement).getPropertyValue(i);
    return c || r;
  } else {
    if (i && Ya.test(i))
      return _m(i);
    if (i)
      return i;
  }
  return r;
}, ay = (r) => {
  const n = Ya.exec(r);
  if (!n)
    return [,];
  const [, i, s] = n;
  return [i, s];
}, iu, ly = (r, n, i, s, c) => `rgba(${Math.round(n)}, ${Math.round(i)}, ${Math.round(s)}, ${c})`, Em = (r) => {
  iu || (iu = Ir ? (
    // match color names, ignore partial matches
    new RegExp(`(${Object.keys(Ir).join("|")})(?!\\w)`, "g")
  ) : (
    // never match
    /^\b$/
  ));
  const n = r.output.map((f) => ht(f).replace(Ya, _m).replace(oy, Op).replace(iu, Op)), i = n.map((f) => f.match(Fa).map(Number)), c = i[0].map(
    (f, h) => i.map((g) => {
      if (!(h in g))
        throw Error('The arity of each "output" value must be equal');
      return g[h];
    })
  ).map(
    (f) => Ko({ ...r, output: f })
  );
  return (f) => {
    var p;
    const h = !jp.test(n[0]) && ((p = n.find((d) => jp.test(d))) == null ? void 0 : p.replace(Fa, ""));
    let g = 0;
    return n[0].replace(
      Fa,
      () => `${c[g++](f)}${h || ""}`
    ).replace(iy, ly);
  };
}, nc = "react-spring: ", Sm = (r) => {
  const n = r;
  let i = !1;
  if (typeof n != "function")
    throw new TypeError(`${nc}once requires a function parameter`);
  return (...s) => {
    i || (n(...s), i = !0);
  };
}, sy = Sm(console.warn);
function uy() {
  sy(
    `${nc}The "interpolate" function is deprecated in v9 (use "to" instead)`
  );
}
var cy = Sm(console.warn);
function dy() {
  cy(
    `${nc}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function Qa(r) {
  return K.str(r) && (r[0] == "#" || /\d/.test(r) || // Do not identify a CSS variable as an AnimatedString if its SSR
  !ec() && Ya.test(r) || r in (Ir || {}));
}
var oc = ec() ? B.useEffect : B.useLayoutEffect, fy = () => {
  const r = B.useRef(!1);
  return oc(() => (r.current = !0, () => {
    r.current = !1;
  }), []), r;
};
function Cm() {
  const r = B.useState()[1], n = fy();
  return () => {
    n.current && r(Math.random());
  };
}
function py(r, n) {
  const [i] = B.useState(
    () => ({
      inputs: n,
      result: r()
    })
  ), s = B.useRef(), c = s.current;
  let f = c;
  return f ? n && f.inputs && hy(n, f.inputs) || (f = {
    inputs: n,
    result: r()
  }) : f = i, B.useEffect(() => {
    s.current = f, c == i && (i.inputs = i.result = void 0);
  }, [f]), f.result;
}
function hy(r, n) {
  if (r.length !== n.length)
    return !1;
  for (let i = 0; i < r.length; i++)
    if (r[i] !== n[i])
      return !1;
  return !0;
}
var Fm = (r) => B.useEffect(r, my), my = [];
function Up(r) {
  const n = B.useRef();
  return B.useEffect(() => {
    n.current = r;
  }), n.current;
}
var Xo = Symbol.for("Animated:node"), gy = (r) => !!r && r[Xo] === r, Qt = (r) => r && r[Xo], ic = (r, n) => jw(r, Xo, n), Ga = (r) => r && r[Xo] && r[Xo].getPayload(), Pm = class {
  constructor() {
    ic(this, this);
  }
  /** Get every `AnimatedValue` used by this node. */
  getPayload() {
    return this.payload || [];
  }
}, oi = class extends Pm {
  constructor(r) {
    super(), this._value = r, this.done = !0, this.durationProgress = 0, K.num(this._value) && (this.lastPosition = this._value);
  }
  /** @internal */
  static create(r) {
    return new oi(r);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(r, n) {
    return K.num(r) && (this.lastPosition = r, n && (r = Math.round(r / n) * n, this.done && (this.lastPosition = r))), this._value === r ? !1 : (this._value = r, !0);
  }
  reset() {
    const { done: r } = this;
    this.done = !1, K.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, r && (this.lastVelocity = null), this.v0 = null);
  }
}, qo = class extends oi {
  constructor(r) {
    super(0), this._string = null, this._toString = Ko({
      output: [r, r]
    });
  }
  /** @internal */
  static create(r) {
    return new qo(r);
  }
  getValue() {
    const r = this._string;
    return r ?? (this._string = this._toString(this._value));
  }
  setValue(r) {
    if (K.str(r)) {
      if (r == this._string)
        return !1;
      this._string = r, this._value = 1;
    } else if (super.setValue(r))
      this._string = null;
    else
      return !1;
    return !0;
  }
  reset(r) {
    r && (this._toString = Ko({
      output: [this.getValue(), r]
    })), this._value = 0, super.reset();
  }
}, Na = { dependencies: null }, Xa = class extends Pm {
  constructor(r) {
    super(), this.source = r, this.setValue(r);
  }
  getValue(r) {
    const n = {};
    return Gt(this.source, (i, s) => {
      gy(i) ? n[s] = i.getValue(r) : Ct(i) ? n[s] = ht(i) : r || (n[s] = i);
    }), n;
  }
  /** Replace the raw object data */
  setValue(r) {
    this.source = r, this.payload = this._makePayload(r);
  }
  reset() {
    this.payload && be(this.payload, (r) => r.reset());
  }
  /** Create a payload set. */
  _makePayload(r) {
    if (r) {
      const n = /* @__PURE__ */ new Set();
      return Gt(r, this._addToPayload, n), Array.from(n);
    }
  }
  /** Add to a payload set. */
  _addToPayload(r) {
    Na.dependencies && Ct(r) && Na.dependencies.add(r);
    const n = Ga(r);
    n && be(n, (i) => this.add(i));
  }
}, Tm = class extends Xa {
  constructor(r) {
    super(r);
  }
  /** @internal */
  static create(r) {
    return new Tm(r);
  }
  getValue() {
    return this.source.map((r) => r.getValue());
  }
  setValue(r) {
    const n = this.getPayload();
    return r.length == n.length ? n.map((i, s) => i.setValue(r[s])).some(Boolean) : (super.setValue(r.map(vy)), !0);
  }
};
function vy(r) {
  return (Qa(r) ? qo : oi).create(r);
}
function Fu(r) {
  const n = Qt(r);
  return n ? n.constructor : K.arr(r) ? Tm : Qa(r) ? qo : oi;
}
var Vp = (r, n) => {
  const i = (
    // Function components must use "forwardRef" to avoid being
    // re-rendered on every animation frame.
    !K.fun(r) || r.prototype && r.prototype.isReactComponent
  );
  return B.forwardRef((s, c) => {
    const f = B.useRef(null), h = i && // eslint-disable-next-line react-hooks/rules-of-hooks
    B.useCallback(
      (C) => {
        f.current = by(c, C);
      },
      [c]
    ), [g, p] = yy(s, n), d = Cm(), b = () => {
      const C = f.current;
      if (i && !C)
        return;
      (C ? n.applyAnimatedValues(C, g.getValue(!0)) : !1) === !1 && d();
    }, w = new wy(b, p), v = B.useRef();
    oc(() => (v.current = w, be(p, (C) => Kn(C, w)), () => {
      v.current && (be(
        v.current.deps,
        (C) => Go(C, v.current)
      ), pe.cancel(v.current.update));
    })), B.useEffect(b, []), Fm(() => () => {
      const C = v.current;
      be(C.deps, (y) => Go(y, C));
    });
    const k = n.getComponentProps(g.getValue());
    return /* @__PURE__ */ B.createElement(r, { ...k, ref: h });
  });
}, wy = class {
  constructor(r, n) {
    this.update = r, this.deps = n;
  }
  eventObserved(r) {
    r.type == "change" && pe.write(this.update);
  }
};
function yy(r, n) {
  const i = /* @__PURE__ */ new Set();
  return Na.dependencies = i, r.style && (r = {
    ...r,
    style: n.createAnimatedStyle(r.style)
  }), r = new Xa(r), Na.dependencies = null, [r, i];
}
function by(r, n) {
  return r && (K.fun(r) ? r(n) : r.current = n), n;
}
var Bp = Symbol.for("AnimatedComponent"), xy = (r, {
  applyAnimatedValues: n = () => !1,
  createAnimatedStyle: i = (c) => new Xa(c),
  getComponentProps: s = (c) => c
} = {}) => {
  const c = {
    applyAnimatedValues: n,
    createAnimatedStyle: i,
    getComponentProps: s
  }, f = (h) => {
    const g = Hp(h) || "Anonymous";
    return K.str(h) ? h = f[h] || (f[h] = Vp(h, c)) : h = h[Bp] || (h[Bp] = Vp(h, c)), h.displayName = `Animated(${g})`, h;
  };
  return Gt(r, (h, g) => {
    K.arr(r) && (g = Hp(h)), f[g] = f(h);
  }), {
    animated: f
  };
}, Hp = (r) => K.str(r) ? r : r && K.str(r.displayName) ? r.displayName : K.fun(r) && r.name || null;
function qr(r, ...n) {
  return K.fun(r) ? r(...n) : r;
}
var Bo = (r, n) => r === !0 || !!(n && r && (K.fun(r) ? r(n) : yt(r).includes(n))), Am = (r, n) => K.obj(r) ? n && r[n] : r, zm = (r, n) => r.default === !0 ? r[n] : r.default ? r.default[n] : void 0, ky = (r) => r, ac = (r, n = ky) => {
  let i = _y;
  r.default && r.default !== !0 && (r = r.default, i = Object.keys(r));
  const s = {};
  for (const c of i) {
    const f = n(r[c], c);
    K.und(f) || (s[c] = f);
  }
  return s;
}, _y = [
  "config",
  "onProps",
  "onStart",
  "onChange",
  "onPause",
  "onResume",
  "onRest"
], Ey = {
  config: 1,
  from: 1,
  to: 1,
  ref: 1,
  loop: 1,
  reset: 1,
  pause: 1,
  cancel: 1,
  reverse: 1,
  immediate: 1,
  default: 1,
  delay: 1,
  onProps: 1,
  onStart: 1,
  onChange: 1,
  onPause: 1,
  onResume: 1,
  onRest: 1,
  onResolve: 1,
  // Transition props
  items: 1,
  trail: 1,
  sort: 1,
  expires: 1,
  initial: 1,
  enter: 1,
  update: 1,
  leave: 1,
  children: 1,
  onDestroyed: 1,
  // Internal props
  keys: 1,
  callId: 1,
  parentId: 1
};
function Sy(r) {
  const n = {};
  let i = 0;
  if (Gt(r, (s, c) => {
    Ey[c] || (n[c] = s, i++);
  }), i)
    return n;
}
function $m(r) {
  const n = Sy(r);
  if (n) {
    const i = { to: n };
    return Gt(r, (s, c) => c in n || (i[c] = s)), i;
  }
  return { ...r };
}
function Zo(r) {
  return r = ht(r), K.arr(r) ? r.map(Zo) : Qa(r) ? Dt.createStringInterpolator({
    range: [0, 1],
    output: [r, r]
  })(1) : r;
}
function Cy(r) {
  for (const n in r)
    return !0;
  return !1;
}
function Pu(r) {
  return K.fun(r) || K.arr(r) && K.obj(r[0]);
}
function Fy(r, n) {
  var i;
  (i = r.ref) == null || i.delete(r), n == null || n.delete(r);
}
function Py(r, n) {
  var i;
  n && r.ref !== n && ((i = r.ref) == null || i.delete(r), n.add(r), r.ref = n);
}
var Ty = {
  default: { tension: 170, friction: 26 }
}, Tu = {
  ...Ty.default,
  mass: 1,
  damping: 1,
  easing: bm.linear,
  clamp: !1
}, Ay = class {
  constructor() {
    this.velocity = 0, Object.assign(this, Tu);
  }
};
function zy(r, n, i) {
  i && (i = { ...i }, Wp(i, n), n = { ...i, ...n }), Wp(r, n), Object.assign(r, n);
  for (const h in Tu)
    r[h] == null && (r[h] = Tu[h]);
  let { frequency: s, damping: c } = r;
  const { mass: f } = r;
  return K.und(s) || (s < 0.01 && (s = 0.01), c < 0 && (c = 0), r.tension = Math.pow(2 * Math.PI / s, 2) * f, r.friction = 4 * Math.PI * c * f / s), r;
}
function Wp(r, n) {
  if (!K.und(n.decay))
    r.duration = void 0;
  else {
    const i = !K.und(n.tension) || !K.und(n.friction);
    (i || !K.und(n.frequency) || !K.und(n.damping) || !K.und(n.mass)) && (r.duration = void 0, r.decay = void 0), i && (r.frequency = void 0);
  }
}
var Kp = [], $y = class {
  constructor() {
    this.changed = !1, this.values = Kp, this.toValues = null, this.fromValues = Kp, this.config = new Ay(), this.immediate = !1;
  }
};
function Im(r, { key: n, props: i, defaultProps: s, state: c, actions: f }) {
  return new Promise((h, g) => {
    let p, d, b = Bo(i.cancel ?? (s == null ? void 0 : s.cancel), n);
    if (b)
      k();
    else {
      K.und(i.pause) || (c.paused = Bo(i.pause, n));
      let C = s == null ? void 0 : s.pause;
      C !== !0 && (C = c.paused || Bo(C, n)), p = qr(i.delay || 0, n), C ? (c.resumeQueue.add(v), f.pause()) : (f.resume(), v());
    }
    function w() {
      c.resumeQueue.add(v), c.timeouts.delete(d), d.cancel(), p = d.time - pe.now();
    }
    function v() {
      p > 0 && !Dt.skipAnimation ? (c.delayed = !0, d = pe.setTimeout(k, p), c.pauseQueue.add(w), c.timeouts.add(d)) : k();
    }
    function k() {
      c.delayed && (c.delayed = !1), c.pauseQueue.delete(w), c.timeouts.delete(d), r <= (c.cancelId || 0) && (b = !0);
      try {
        f.start({ ...i, callId: r, cancel: b }, h);
      } catch (C) {
        g(C);
      }
    }
  });
}
var lc = (r, n) => n.length == 1 ? n[0] : n.some((i) => i.cancelled) ? jn(r.get()) : n.every((i) => i.noop) ? Lm(r.get()) : Mt(
  r.get(),
  n.every((i) => i.finished)
), Lm = (r) => ({
  value: r,
  noop: !0,
  finished: !0,
  cancelled: !1
}), Mt = (r, n, i = !1) => ({
  value: r,
  finished: n,
  cancelled: i
}), jn = (r) => ({
  value: r,
  cancelled: !0,
  finished: !1
});
function Rm(r, n, i, s) {
  const { callId: c, parentId: f, onRest: h } = n, { asyncTo: g, promise: p } = i;
  return !f && r === g && !n.reset ? p : i.promise = (async () => {
    i.asyncId = c, i.asyncTo = r;
    const d = ac(
      n,
      (F, N) => (
        // The `onRest` prop is only called when the `runAsync` promise is resolved.
        N === "onRest" ? void 0 : F
      )
    );
    let b, w;
    const v = new Promise(
      (F, N) => (b = F, w = N)
    ), k = (F) => {
      const N = (
        // The `cancel` prop or `stop` method was used.
        c <= (i.cancelId || 0) && jn(s) || // The async `to` prop was replaced.
        c !== i.asyncId && Mt(s, !1)
      );
      if (N)
        throw F.result = N, w(F), F;
    }, C = (F, N) => {
      const M = new Yp(), D = new Qp();
      return (async () => {
        if (Dt.skipAnimation)
          throw Jo(i), D.result = Mt(s, !1), w(D), D;
        k(M);
        const H = K.obj(F) ? { ...F } : { ...N, to: F };
        H.parentId = c, Gt(d, (ae, oe) => {
          K.und(H[oe]) && (H[oe] = ae);
        });
        const ne = await s.start(H);
        return k(M), i.paused && await new Promise((ae) => {
          i.resumeQueue.add(ae);
        }), ne;
      })();
    };
    let y;
    if (Dt.skipAnimation)
      return Jo(i), Mt(s, !1);
    try {
      let F;
      K.arr(r) ? F = (async (N) => {
        for (const M of N)
          await C(M);
      })(r) : F = Promise.resolve(r(C, s.stop.bind(s))), await Promise.all([F.then(b), v]), y = Mt(s.get(), !0, !1);
    } catch (F) {
      if (F instanceof Yp)
        y = F.result;
      else if (F instanceof Qp)
        y = F.result;
      else
        throw F;
    } finally {
      c == i.asyncId && (i.asyncId = f, i.asyncTo = f ? g : void 0, i.promise = f ? p : void 0);
    }
    return K.fun(h) && pe.batchedUpdates(() => {
      h(y, s, s.item);
    }), y;
  })();
}
function Jo(r, n) {
  Uo(r.timeouts, (i) => i.cancel()), r.pauseQueue.clear(), r.resumeQueue.clear(), r.asyncId = r.asyncTo = r.promise = void 0, n && (r.cancelId = n);
}
var Yp = class extends Error {
  constructor() {
    super(
      "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
    );
  }
}, Qp = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
  }
}, Au = (r) => r instanceof sc, Iy = 1, sc = class extends xm {
  constructor() {
    super(...arguments), this.id = Iy++, this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(r) {
    this._priority != r && (this._priority = r, this._onPriorityChange(r));
  }
  /** Get the current value */
  get() {
    const r = Qt(this);
    return r && r.getValue();
  }
  /** Create a spring that maps our value to another value */
  to(...r) {
    return Dt.to(this, r);
  }
  /** @deprecated Use the `to` method instead. */
  interpolate(...r) {
    return uy(), Dt.to(this, r);
  }
  toJSON() {
    return this.get();
  }
  observerAdded(r) {
    r == 1 && this._attach();
  }
  observerRemoved(r) {
    r == 0 && this._detach();
  }
  /** Called when the first child is added. */
  _attach() {
  }
  /** Called when the last child is removed. */
  _detach() {
  }
  /** Tell our children about our new value */
  _onChange(r, n = !1) {
    Qo(this, {
      type: "change",
      parent: this,
      value: r,
      idle: n
    });
  }
  /** Tell our children about our new priority */
  _onPriorityChange(r) {
    this.idle || Wa.sort(this), Qo(this, {
      type: "priority",
      parent: this,
      priority: r
    });
  }
}, rn = Symbol.for("SpringPhase"), Nm = 1, zu = 2, $u = 4, au = (r) => (r[rn] & Nm) > 0, Tr = (r) => (r[rn] & zu) > 0, Ro = (r) => (r[rn] & $u) > 0, Gp = (r, n) => n ? r[rn] |= zu | Nm : r[rn] &= ~zu, Xp = (r, n) => n ? r[rn] |= $u : r[rn] &= ~$u, Ly = class extends sc {
  constructor(r, n) {
    if (super(), this.animation = new $y(), this.defaultProps = {}, this._state = {
      paused: !1,
      delayed: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._pendingCalls = /* @__PURE__ */ new Set(), this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !K.und(r) || !K.und(n)) {
      const i = K.obj(r) ? { ...r } : { ...n, from: r };
      K.und(i.default) && (i.default = !0), this.start(i);
    }
  }
  /** Equals true when not advancing on each frame. */
  get idle() {
    return !(Tr(this) || this._state.asyncTo) || Ro(this);
  }
  get goal() {
    return ht(this.animation.to);
  }
  get velocity() {
    const r = Qt(this);
    return r instanceof oi ? r.lastVelocity || 0 : r.getPayload().map((n) => n.lastVelocity || 0);
  }
  /**
   * When true, this value has been animated at least once.
   */
  get hasAnimated() {
    return au(this);
  }
  /**
   * When true, this value has an unfinished animation,
   * which is either active or paused.
   */
  get isAnimating() {
    return Tr(this);
  }
  /**
   * When true, all current and future animations are paused.
   */
  get isPaused() {
    return Ro(this);
  }
  /**
   *
   *
   */
  get isDelayed() {
    return this._state.delayed;
  }
  /** Advance the current animation by a number of milliseconds */
  advance(r) {
    let n = !0, i = !1;
    const s = this.animation;
    let { toValues: c } = s;
    const { config: f } = s, h = Ga(s.to);
    !h && Ct(s.to) && (c = yt(ht(s.to))), s.values.forEach((d, b) => {
      if (d.done)
        return;
      const w = (
        // Animated strings always go from 0 to 1.
        d.constructor == qo ? 1 : h ? h[b].lastPosition : c[b]
      );
      let v = s.immediate, k = w;
      if (!v) {
        if (k = d.lastPosition, f.tension <= 0) {
          d.done = !0;
          return;
        }
        let C = d.elapsedTime += r;
        const y = s.fromValues[b], F = d.v0 != null ? d.v0 : d.v0 = K.arr(f.velocity) ? f.velocity[b] : f.velocity;
        let N;
        const M = f.precision || (y == w ? 5e-3 : Math.min(1, Math.abs(w - y) * 1e-3));
        if (K.und(f.duration))
          if (f.decay) {
            const D = f.decay === !0 ? 0.998 : f.decay, H = Math.exp(-(1 - D) * C);
            k = y + F / (1 - D) * (1 - H), v = Math.abs(d.lastPosition - k) <= M, N = F * H;
          } else {
            N = d.lastVelocity == null ? F : d.lastVelocity;
            const D = f.restVelocity || M / 10, H = f.clamp ? 0 : f.bounce, ne = !K.und(H), ae = y == w ? d.v0 > 0 : y < w;
            let oe, xe = !1;
            const me = 1, Se = Math.ceil(r / me);
            for (let we = 0; we < Se && (oe = Math.abs(N) > D, !(!oe && (v = Math.abs(w - k) <= M, v))); ++we) {
              ne && (xe = k == w || k > w == ae, xe && (N = -N * H, k = w));
              const Q = -f.tension * 1e-6 * (k - w), te = -f.friction * 1e-3 * N, A = (Q + te) / f.mass;
              N = N + A * me, k = k + N * me;
            }
          }
        else {
          let D = 1;
          f.duration > 0 && (this._memoizedDuration !== f.duration && (this._memoizedDuration = f.duration, d.durationProgress > 0 && (d.elapsedTime = f.duration * d.durationProgress, C = d.elapsedTime += r)), D = (f.progress || 0) + C / this._memoizedDuration, D = D > 1 ? 1 : D < 0 ? 0 : D, d.durationProgress = D), k = y + f.easing(D) * (w - y), N = (k - d.lastPosition) / r, v = D == 1;
        }
        d.lastVelocity = N, Number.isNaN(k) && (console.warn("Got NaN while animating:", this), v = !0);
      }
      h && !h[b].done && (v = !1), v ? d.done = !0 : n = !1, d.setValue(k, f.round) && (i = !0);
    });
    const g = Qt(this), p = g.getValue();
    if (n) {
      const d = ht(s.to);
      (p !== d || i) && !f.decay ? (g.setValue(d), this._onChange(d)) : i && f.decay && this._onChange(p), this._stop();
    } else i && this._onChange(p);
  }
  /** Set the current value, while stopping the current animation */
  set(r) {
    return pe.batchedUpdates(() => {
      this._stop(), this._focus(r), this._set(r);
    }), this;
  }
  /**
   * Freeze the active animation in time, as well as any updates merged
   * before `resume` is called.
   */
  pause() {
    this._update({ pause: !0 });
  }
  /** Resume the animation if paused. */
  resume() {
    this._update({ pause: !1 });
  }
  /** Skip to the end of the current animation. */
  finish() {
    if (Tr(this)) {
      const { to: r, config: n } = this.animation;
      pe.batchedUpdates(() => {
        this._onStart(), n.decay || this._set(r, !1), this._stop();
      });
    }
    return this;
  }
  /** Push props into the pending queue. */
  update(r) {
    return (this.queue || (this.queue = [])).push(r), this;
  }
  start(r, n) {
    let i;
    return K.und(r) ? (i = this.queue || [], this.queue = []) : i = [K.obj(r) ? r : { ...n, to: r }], Promise.all(
      i.map((s) => this._update(s))
    ).then((s) => lc(this, s));
  }
  /**
   * Stop the current animation, and cancel any delayed updates.
   *
   * Pass `true` to call `onRest` with `cancelled: true`.
   */
  stop(r) {
    const { to: n } = this.animation;
    return this._focus(this.get()), Jo(this._state, r && this._lastCallId), pe.batchedUpdates(() => this._stop(n, r)), this;
  }
  /** Restart the animation. */
  reset() {
    this._update({ reset: !0 });
  }
  /** @internal */
  eventObserved(r) {
    r.type == "change" ? this._start() : r.type == "priority" && (this.priority = r.priority + 1);
  }
  /**
   * Parse the `to` and `from` range from the given `props` object.
   *
   * This also ensures the initial value is available to animated components
   * during the render phase.
   */
  _prepareNode(r) {
    const n = this.key || "";
    let { to: i, from: s } = r;
    i = K.obj(i) ? i[n] : i, (i == null || Pu(i)) && (i = void 0), s = K.obj(s) ? s[n] : s, s == null && (s = void 0);
    const c = { to: i, from: s };
    return au(this) || (r.reverse && ([i, s] = [s, i]), s = ht(s), K.und(s) ? Qt(this) || this._set(i) : this._set(s)), c;
  }
  /** Every update is processed by this method before merging. */
  _update({ ...r }, n) {
    const { key: i, defaultProps: s } = this;
    r.default && Object.assign(
      s,
      ac(
        r,
        (h, g) => /^on/.test(g) ? Am(h, i) : h
      )
    ), Zp(this, r, "onProps"), Mo(this, "onProps", r, this);
    const c = this._prepareNode(r);
    if (Object.isFrozen(this))
      throw Error(
        "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
      );
    const f = this._state;
    return Im(++this._lastCallId, {
      key: i,
      props: r,
      defaultProps: s,
      state: f,
      actions: {
        pause: () => {
          Ro(this) || (Xp(this, !0), Do(f.pauseQueue), Mo(
            this,
            "onPause",
            Mt(this, No(this, this.animation.to)),
            this
          ));
        },
        resume: () => {
          Ro(this) && (Xp(this, !1), Tr(this) && this._resume(), Do(f.resumeQueue), Mo(
            this,
            "onResume",
            Mt(this, No(this, this.animation.to)),
            this
          ));
        },
        start: this._merge.bind(this, c)
      }
    }).then((h) => {
      if (r.loop && h.finished && !(n && h.noop)) {
        const g = Mm(r);
        if (g)
          return this._update(g, !0);
      }
      return h;
    });
  }
  /** Merge props into the current animation */
  _merge(r, n, i) {
    if (n.cancel)
      return this.stop(!0), i(jn(this));
    const s = !K.und(r.to), c = !K.und(r.from);
    if (s || c)
      if (n.callId > this._lastToId)
        this._lastToId = n.callId;
      else
        return i(jn(this));
    const { key: f, defaultProps: h, animation: g } = this, { to: p, from: d } = g;
    let { to: b = p, from: w = d } = r;
    c && !s && (!n.default || K.und(b)) && (b = w), n.reverse && ([b, w] = [w, b]);
    const v = !lr(w, d);
    v && (g.from = w), w = ht(w);
    const k = !lr(b, p);
    k && this._focus(b);
    const C = Pu(n.to), { config: y } = g, { decay: F, velocity: N } = y;
    (s || c) && (y.velocity = 0), n.config && !C && zy(
      y,
      qr(n.config, f),
      // Avoid calling the same "config" prop twice.
      n.config !== h.config ? qr(h.config, f) : void 0
    );
    let M = Qt(this);
    if (!M || K.und(b))
      return i(Mt(this, !0));
    const D = (
      // When `reset` is undefined, the `from` prop implies `reset: true`,
      // except for declarative updates. When `reset` is defined, there
      // must exist a value to animate from.
      K.und(n.reset) ? c && !n.default : !K.und(w) && Bo(n.reset, f)
    ), H = D ? w : this.get(), ne = Zo(b), ae = K.num(ne) || K.arr(ne) || Qa(ne), oe = !C && (!ae || Bo(h.immediate || n.immediate, f));
    if (k) {
      const we = Fu(b);
      if (we !== M.constructor)
        if (oe)
          M = this._set(ne);
        else
          throw Error(
            `Cannot animate between ${M.constructor.name} and ${we.name}, as the "to" prop suggests`
          );
    }
    const xe = M.constructor;
    let me = Ct(b), Se = !1;
    if (!me) {
      const we = D || !au(this) && v;
      (k || we) && (Se = lr(Zo(H), ne), me = !Se), (!lr(g.immediate, oe) && !oe || !lr(y.decay, F) || !lr(y.velocity, N)) && (me = !0);
    }
    if (Se && Tr(this) && (g.changed && !D ? me = !0 : me || this._stop(p)), !C && ((me || Ct(p)) && (g.values = M.getPayload(), g.toValues = Ct(b) ? null : xe == qo ? [1] : yt(ne)), g.immediate != oe && (g.immediate = oe, !oe && !D && this._set(p)), me)) {
      const { onRest: we } = g;
      be(Ny, (te) => Zp(this, n, te));
      const Q = Mt(this, No(this, p));
      Do(this._pendingCalls, Q), this._pendingCalls.add(i), g.changed && pe.batchedUpdates(() => {
        var te;
        g.changed = !D, we == null || we(Q, this), D ? qr(h.onRest, Q) : (te = g.onStart) == null || te.call(g, Q, this);
      });
    }
    D && this._set(H), C ? i(Rm(n.to, n, this._state, this)) : me ? this._start() : Tr(this) && !k ? this._pendingCalls.add(i) : i(Lm(H));
  }
  /** Update the `animation.to` value, which might be a `FluidValue` */
  _focus(r) {
    const n = this.animation;
    r !== n.to && (Dp(this) && this._detach(), n.to = r, Dp(this) && this._attach());
  }
  _attach() {
    let r = 0;
    const { to: n } = this.animation;
    Ct(n) && (Kn(n, this), Au(n) && (r = n.priority + 1)), this.priority = r;
  }
  _detach() {
    const { to: r } = this.animation;
    Ct(r) && Go(r, this);
  }
  /**
   * Update the current value from outside the frameloop,
   * and return the `Animated` node.
   */
  _set(r, n = !0) {
    const i = ht(r);
    if (!K.und(i)) {
      const s = Qt(this);
      if (!s || !lr(i, s.getValue())) {
        const c = Fu(i);
        !s || s.constructor != c ? ic(this, c.create(i)) : s.setValue(i), s && pe.batchedUpdates(() => {
          this._onChange(i, n);
        });
      }
    }
    return Qt(this);
  }
  _onStart() {
    const r = this.animation;
    r.changed || (r.changed = !0, Mo(
      this,
      "onStart",
      Mt(this, No(this, r.to)),
      this
    ));
  }
  _onChange(r, n) {
    n || (this._onStart(), qr(this.animation.onChange, r, this)), qr(this.defaultProps.onChange, r, this), super._onChange(r, n);
  }
  // This method resets the animation state (even if already animating) to
  // ensure the latest from/to range is used, and it also ensures this spring
  // is added to the frameloop.
  _start() {
    const r = this.animation;
    Qt(this).reset(ht(r.to)), r.immediate || (r.fromValues = r.values.map((n) => n.lastPosition)), Tr(this) || (Gp(this, !0), Ro(this) || this._resume());
  }
  _resume() {
    Dt.skipAnimation ? this.finish() : Wa.start(this);
  }
  /**
   * Exit the frameloop and notify `onRest` listeners.
   *
   * Always wrap `_stop` calls with `batchedUpdates`.
   */
  _stop(r, n) {
    if (Tr(this)) {
      Gp(this, !1);
      const i = this.animation;
      be(i.values, (c) => {
        c.done = !0;
      }), i.toValues && (i.onChange = i.onPause = i.onResume = void 0), Qo(this, {
        type: "idle",
        parent: this
      });
      const s = n ? jn(this.get()) : Mt(this.get(), No(this, r ?? i.to));
      Do(this._pendingCalls, s), i.changed && (i.changed = !1, Mo(this, "onRest", s, this));
    }
  }
};
function No(r, n) {
  const i = Zo(n), s = Zo(r.get());
  return lr(s, i);
}
function Mm(r, n = r.loop, i = r.to) {
  const s = qr(n);
  if (s) {
    const c = s !== !0 && $m(s), f = (c || r).reverse, h = !c || c.reset;
    return ei({
      ...r,
      loop: n,
      // Avoid updating default props when looping.
      default: !1,
      // Never loop the `pause` prop.
      pause: void 0,
      // For the "reverse" prop to loop as expected, the "to" prop
      // must be undefined. The "reverse" prop is ignored when the
      // "to" prop is an array or function.
      to: !f || Pu(i) ? i : void 0,
      // Ignore the "from" prop except on reset.
      from: h ? r.from : void 0,
      reset: h,
      // The "loop" prop can return a "useSpring" props object to
      // override any of the original props.
      ...c
    });
  }
}
function ei(r) {
  const { to: n, from: i } = r = $m(r), s = /* @__PURE__ */ new Set();
  return K.obj(n) && qp(n, s), K.obj(i) && qp(i, s), r.keys = s.size ? Array.from(s) : null, r;
}
function Ry(r) {
  const n = ei(r);
  return K.und(n.default) && (n.default = ac(n)), n;
}
function qp(r, n) {
  Gt(r, (i, s) => i != null && n.add(s));
}
var Ny = [
  "onStart",
  "onRest",
  "onChange",
  "onPause",
  "onResume"
];
function Zp(r, n, i) {
  r.animation[i] = n[i] !== zm(n, i) ? Am(n[i], r.key) : void 0;
}
function Mo(r, n, ...i) {
  var s, c, f, h;
  (c = (s = r.animation)[n]) == null || c.call(s, ...i), (h = (f = r.defaultProps)[n]) == null || h.call(f, ...i);
}
var My = ["onStart", "onChange", "onRest"], Oy = 1, Dy = class {
  constructor(n, i) {
    this.id = Oy++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = !1, this._state = {
      paused: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._events = {
      onStart: /* @__PURE__ */ new Map(),
      onChange: /* @__PURE__ */ new Map(),
      onRest: /* @__PURE__ */ new Map()
    }, this._onFrame = this._onFrame.bind(this), i && (this._flush = i), n && this.start({ default: !0, ...n });
  }
  /**
   * Equals `true` when no spring values are in the frameloop, and
   * no async animation is currently active.
   */
  get idle() {
    return !this._state.asyncTo && Object.values(this.springs).every((n) => n.idle && !n.isDelayed && !n.isPaused);
  }
  get item() {
    return this._item;
  }
  set item(n) {
    this._item = n;
  }
  /** Get the current values of our springs */
  get() {
    const n = {};
    return this.each((i, s) => n[s] = i.get()), n;
  }
  /** Set the current values without animating. */
  set(n) {
    for (const i in n) {
      const s = n[i];
      K.und(s) || this.springs[i].set(s);
    }
  }
  /** Push an update onto the queue of each value. */
  update(n) {
    return n && this.queue.push(ei(n)), this;
  }
  /**
   * Start the queued animations for every spring, and resolve the returned
   * promise once all queued animations have finished or been cancelled.
   *
   * When you pass a queue (instead of nothing), that queue is used instead of
   * the queued animations added with the `update` method, which are left alone.
   */
  start(n) {
    let { queue: i } = this;
    return n ? i = yt(n).map(ei) : this.queue = [], this._flush ? this._flush(this, i) : (Vm(this, i), Iu(this, i));
  }
  /** @internal */
  stop(n, i) {
    if (n !== !!n && (i = n), i) {
      const s = this.springs;
      be(yt(i), (c) => s[c].stop(!!n));
    } else
      Jo(this._state, this._lastAsyncId), this.each((s) => s.stop(!!n));
    return this;
  }
  /** Freeze the active animation in time */
  pause(n) {
    if (K.und(n))
      this.start({ pause: !0 });
    else {
      const i = this.springs;
      be(yt(n), (s) => i[s].pause());
    }
    return this;
  }
  /** Resume the animation if paused. */
  resume(n) {
    if (K.und(n))
      this.start({ pause: !1 });
    else {
      const i = this.springs;
      be(yt(n), (s) => i[s].resume());
    }
    return this;
  }
  /** Call a function once per spring value */
  each(n) {
    Gt(this.springs, n);
  }
  /** @internal Called at the end of every animation frame */
  _onFrame() {
    const { onStart: n, onChange: i, onRest: s } = this._events, c = this._active.size > 0, f = this._changed.size > 0;
    (c && !this._started || f && !this._started) && (this._started = !0, Uo(n, ([p, d]) => {
      d.value = this.get(), p(d, this, this._item);
    }));
    const h = !c && this._started, g = f || h && s.size ? this.get() : null;
    f && i.size && Uo(i, ([p, d]) => {
      d.value = g, p(d, this, this._item);
    }), h && (this._started = !1, Uo(s, ([p, d]) => {
      d.value = g, p(d, this, this._item);
    }));
  }
  /** @internal */
  eventObserved(n) {
    if (n.type == "change")
      this._changed.add(n.parent), n.idle || this._active.add(n.parent);
    else if (n.type == "idle")
      this._active.delete(n.parent);
    else
      return;
    pe.onFrame(this._onFrame);
  }
};
function Iu(r, n) {
  return Promise.all(n.map((i) => Om(r, i))).then(
    (i) => lc(r, i)
  );
}
async function Om(r, n, i) {
  const { keys: s, to: c, from: f, loop: h, onRest: g, onResolve: p } = n, d = K.obj(n.default) && n.default;
  h && (n.loop = !1), c === !1 && (n.to = null), f === !1 && (n.from = null);
  const b = K.arr(c) || K.fun(c) ? c : void 0;
  b ? (n.to = void 0, n.onRest = void 0, d && (d.onRest = void 0)) : be(My, (y) => {
    const F = n[y];
    if (K.fun(F)) {
      const N = r._events[y];
      n[y] = ({ finished: M, cancelled: D }) => {
        const H = N.get(F);
        H ? (M || (H.finished = !1), D && (H.cancelled = !0)) : N.set(F, {
          value: null,
          finished: M || !1,
          cancelled: D || !1
        });
      }, d && (d[y] = n[y]);
    }
  });
  const w = r._state;
  n.pause === !w.paused ? (w.paused = n.pause, Do(n.pause ? w.pauseQueue : w.resumeQueue)) : w.paused && (n.pause = !0);
  const v = (s || Object.keys(r.springs)).map(
    (y) => r.springs[y].start(n)
  ), k = n.cancel === !0 || zm(n, "cancel") === !0;
  (b || k && w.asyncId) && v.push(
    Im(++r._lastAsyncId, {
      props: n,
      state: w,
      actions: {
        pause: Su,
        resume: Su,
        start(y, F) {
          k ? (Jo(w, r._lastAsyncId), F(jn(r))) : (y.onRest = g, F(
            Rm(
              b,
              y,
              w,
              r
            )
          ));
        }
      }
    })
  ), w.paused && await new Promise((y) => {
    w.resumeQueue.add(y);
  });
  const C = lc(r, await Promise.all(v));
  if (h && C.finished && !(i && C.noop)) {
    const y = Mm(n, h, c);
    if (y)
      return Vm(r, [y]), Om(r, y, !0);
  }
  return p && pe.batchedUpdates(() => p(C, r, r.item)), C;
}
function Jp(r, n) {
  const i = { ...r.springs };
  return n && be(yt(n), (s) => {
    K.und(s.keys) && (s = ei(s)), K.obj(s.to) || (s = { ...s, to: void 0 }), Um(i, s, (c) => jm(c));
  }), Dm(r, i), i;
}
function Dm(r, n) {
  Gt(n, (i, s) => {
    r.springs[s] || (r.springs[s] = i, Kn(i, r));
  });
}
function jm(r, n) {
  const i = new Ly();
  return i.key = r, n && Kn(i, n), i;
}
function Um(r, n, i) {
  n.keys && be(n.keys, (s) => {
    (r[s] || (r[s] = i(s)))._prepareNode(n);
  });
}
function Vm(r, n) {
  be(n, (i) => {
    Um(r.springs, i, (s) => jm(s, r));
  });
}
var qa = ({
  children: r,
  ...n
}) => {
  const i = B.useContext(Ma), s = n.pause || !!i.pause, c = n.immediate || !!i.immediate;
  n = py(() => ({ pause: s, immediate: c }), [s, c]);
  const { Provider: f } = Ma;
  return /* @__PURE__ */ B.createElement(f, { value: n }, r);
}, Ma = jy(qa, {});
qa.Provider = Ma.Provider;
qa.Consumer = Ma.Consumer;
function jy(r, n) {
  return Object.assign(r, B.createContext(n)), r.Provider._context = r, r.Consumer._context = r, r;
}
var Uy = () => {
  const r = [], n = function(s) {
    dy();
    const c = [];
    return be(r, (f, h) => {
      if (K.und(s))
        c.push(f.start());
      else {
        const g = i(s, f, h);
        g && c.push(f.start(g));
      }
    }), c;
  };
  n.current = r, n.add = function(s) {
    r.includes(s) || r.push(s);
  }, n.delete = function(s) {
    const c = r.indexOf(s);
    ~c && r.splice(c, 1);
  }, n.pause = function() {
    return be(r, (s) => s.pause(...arguments)), this;
  }, n.resume = function() {
    return be(r, (s) => s.resume(...arguments)), this;
  }, n.set = function(s) {
    be(r, (c, f) => {
      const h = K.fun(s) ? s(f, c) : s;
      h && c.set(h);
    });
  }, n.start = function(s) {
    const c = [];
    return be(r, (f, h) => {
      if (K.und(s))
        c.push(f.start());
      else {
        const g = this._getProps(s, f, h);
        g && c.push(f.start(g));
      }
    }), c;
  }, n.stop = function() {
    return be(r, (s) => s.stop(...arguments)), this;
  }, n.update = function(s) {
    return be(r, (c, f) => c.update(this._getProps(s, c, f))), this;
  };
  const i = function(s, c, f) {
    return K.fun(s) ? s(f, c) : s;
  };
  return n._getProps = i, n;
};
function Vy(r, n, i) {
  const s = K.fun(n) && n;
  s && !i && (i = []);
  const c = B.useMemo(
    () => s || arguments.length == 3 ? Uy() : void 0,
    []
  ), f = B.useRef(0), h = Cm(), g = B.useMemo(
    () => ({
      ctrls: [],
      queue: [],
      flush(N, M) {
        const D = Jp(N, M);
        return f.current > 0 && !g.queue.length && !Object.keys(D).some((ne) => !N.springs[ne]) ? Iu(N, M) : new Promise((ne) => {
          Dm(N, D), g.queue.push(() => {
            ne(Iu(N, M));
          }), h();
        });
      }
    }),
    []
  ), p = B.useRef([...g.ctrls]), d = [], b = Up(r) || 0;
  B.useMemo(() => {
    be(p.current.slice(r, b), (N) => {
      Fy(N, c), N.stop(!0);
    }), p.current.length = r, w(b, r);
  }, [r]), B.useMemo(() => {
    w(0, Math.min(b, r));
  }, i);
  function w(N, M) {
    for (let D = N; D < M; D++) {
      const H = p.current[D] || (p.current[D] = new Dy(null, g.flush)), ne = s ? s(D, H) : n[D];
      ne && (d[D] = Ry(ne));
    }
  }
  const v = p.current.map((N, M) => Jp(N, d[M])), k = B.useContext(qa), C = Up(k), y = k !== C && Cy(k);
  oc(() => {
    f.current++, g.ctrls = p.current;
    const { queue: N } = g;
    N.length && (g.queue = [], be(N, (M) => M())), be(p.current, (M, D) => {
      c == null || c.add(M), y && M.start({ default: k });
      const H = d[D];
      H && (Py(M, H.ref), M.ref ? M.queue.push(H) : M.start(H));
    });
  }), Fm(() => () => {
    be(g.ctrls, (N) => N.stop(!0));
  });
  const F = v.map((N) => ({ ...N }));
  return c ? [F, c] : F;
}
function eh(r, n) {
  const i = K.fun(r), [[s], c] = Vy(
    1,
    i ? r : [r],
    i ? [] : n
  );
  return i || arguments.length == 2 ? [s, c] : s;
}
var By = class extends sc {
  constructor(r, n) {
    super(), this.source = r, this.idle = !0, this._active = /* @__PURE__ */ new Set(), this.calc = Ko(...n);
    const i = this._get(), s = Fu(i);
    ic(this, s.create(i));
  }
  advance(r) {
    const n = this._get(), i = this.get();
    lr(n, i) || (Qt(this).setValue(n), this._onChange(n, this.idle)), !this.idle && th(this._active) && lu(this);
  }
  _get() {
    const r = K.arr(this.source) ? this.source.map(ht) : yt(ht(this.source));
    return this.calc(...r);
  }
  _start() {
    this.idle && !th(this._active) && (this.idle = !1, be(Ga(this), (r) => {
      r.done = !1;
    }), Dt.skipAnimation ? (pe.batchedUpdates(() => this.advance()), lu(this)) : Wa.start(this));
  }
  // Observe our sources only when we're observed.
  _attach() {
    let r = 1;
    be(yt(this.source), (n) => {
      Ct(n) && Kn(n, this), Au(n) && (n.idle || this._active.add(n), r = Math.max(r, n.priority + 1));
    }), this.priority = r, this._start();
  }
  // Stop observing our sources once we have no observers.
  _detach() {
    be(yt(this.source), (r) => {
      Ct(r) && Go(r, this);
    }), this._active.clear(), lu(this);
  }
  /** @internal */
  eventObserved(r) {
    r.type == "change" ? r.idle ? this.advance() : (this._active.add(r.parent), this._start()) : r.type == "idle" ? this._active.delete(r.parent) : r.type == "priority" && (this.priority = yt(this.source).reduce(
      (n, i) => Math.max(n, (Au(i) ? i.priority : 0) + 1),
      0
    ));
  }
};
function Hy(r) {
  return r.idle !== !1;
}
function th(r) {
  return !r.size || Array.from(r).every(Hy);
}
function lu(r) {
  r.idle || (r.idle = !0, be(Ga(r), (n) => {
    n.done = !0;
  }), Qo(r, {
    type: "idle",
    parent: r
  }));
}
Dt.assign({
  createStringInterpolator: Em,
  to: (r, n) => new By(r, n)
});
var Bm = /^--/;
function Wy(r, n) {
  return n == null || typeof n == "boolean" || n === "" ? "" : typeof n == "number" && n !== 0 && !Bm.test(r) && !(Ho.hasOwnProperty(r) && Ho[r]) ? n + "px" : ("" + n).trim();
}
var rh = {};
function Ky(r, n) {
  if (!r.nodeType || !r.setAttribute)
    return !1;
  const i = r.nodeName === "filter" || r.parentNode && r.parentNode.nodeName === "filter", { style: s, children: c, scrollTop: f, scrollLeft: h, viewBox: g, ...p } = n, d = Object.values(p), b = Object.keys(p).map(
    (w) => i || r.hasAttribute(w) ? w : rh[w] || (rh[w] = w.replace(
      /([A-Z])/g,
      // Attributes are written in dash case
      (v) => "-" + v.toLowerCase()
    ))
  );
  c !== void 0 && (r.textContent = c);
  for (const w in s)
    if (s.hasOwnProperty(w)) {
      const v = Wy(w, s[w]);
      Bm.test(w) ? r.style.setProperty(w, v) : r.style[w] = v;
    }
  b.forEach((w, v) => {
    r.setAttribute(w, d[v]);
  }), f !== void 0 && (r.scrollTop = f), h !== void 0 && (r.scrollLeft = h), g !== void 0 && r.setAttribute("viewBox", g);
}
var Ho = {
  animationIterationCount: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  // SVG-related properties
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Yy = (r, n) => r + n.charAt(0).toUpperCase() + n.substring(1), Qy = ["Webkit", "Ms", "Moz", "O"];
Ho = Object.keys(Ho).reduce((r, n) => (Qy.forEach((i) => r[Yy(i, n)] = r[n]), r), Ho);
var Gy = /^(matrix|translate|scale|rotate|skew)/, Xy = /^(translate)/, qy = /^(rotate|skew)/, su = (r, n) => K.num(r) && r !== 0 ? r + n : r, Pa = (r, n) => K.arr(r) ? r.every((i) => Pa(i, n)) : K.num(r) ? r === n : parseFloat(r) === n, Zy = class extends Xa {
  constructor({ x: r, y: n, z: i, ...s }) {
    const c = [], f = [];
    (r || n || i) && (c.push([r || 0, n || 0, i || 0]), f.push((h) => [
      `translate3d(${h.map((g) => su(g, "px")).join(",")})`,
      // prettier-ignore
      Pa(h, 0)
    ])), Gt(s, (h, g) => {
      if (g === "transform")
        c.push([h || ""]), f.push((p) => [p, p === ""]);
      else if (Gy.test(g)) {
        if (delete s[g], K.und(h))
          return;
        const p = Xy.test(g) ? "px" : qy.test(g) ? "deg" : "";
        c.push(yt(h)), f.push(
          g === "rotate3d" ? ([d, b, w, v]) => [
            `rotate3d(${d},${b},${w},${su(v, p)})`,
            Pa(v, 0)
          ] : (d) => [
            `${g}(${d.map((b) => su(b, p)).join(",")})`,
            Pa(d, g.startsWith("scale") ? 1 : 0)
          ]
        );
      }
    }), c.length && (s.transform = new Jy(c, f)), super(s);
  }
}, Jy = class extends xm {
  constructor(r, n) {
    super(), this.inputs = r, this.transforms = n, this._value = null;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let r = "", n = !0;
    return be(this.inputs, (i, s) => {
      const c = ht(i[0]), [f, h] = this.transforms[s](
        K.arr(c) ? c : i.map(ht)
      );
      r += " " + f, n = n && h;
    }), n ? "none" : r;
  }
  // Start observing our inputs once we have an observer.
  observerAdded(r) {
    r == 1 && be(
      this.inputs,
      (n) => be(
        n,
        (i) => Ct(i) && Kn(i, this)
      )
    );
  }
  // Stop observing our inputs once we have no observers.
  observerRemoved(r) {
    r == 0 && be(
      this.inputs,
      (n) => be(
        n,
        (i) => Ct(i) && Go(i, this)
      )
    );
  }
  eventObserved(r) {
    r.type == "change" && (this._value = null), Qo(this, r);
  }
}, eb = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
Dt.assign({
  batchedUpdates: Kv.unstable_batchedUpdates,
  createStringInterpolator: Em,
  colors: Hw
});
var tb = xy(eb, {
  applyAnimatedValues: Ky,
  createAnimatedStyle: (r) => new Zy(r),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getComponentProps: ({ scrollTop: r, scrollLeft: n, ...i }) => i
}), Hm = tb.animated;
function rb(r, n, i) {
  return Math.max(n, Math.min(r, i));
}
const nt = {
  toVector(r, n) {
    return r === void 0 && (r = n), Array.isArray(r) ? r : [r, r];
  },
  add(r, n) {
    return [r[0] + n[0], r[1] + n[1]];
  },
  sub(r, n) {
    return [r[0] - n[0], r[1] - n[1]];
  },
  addTo(r, n) {
    r[0] += n[0], r[1] += n[1];
  },
  subTo(r, n) {
    r[0] -= n[0], r[1] -= n[1];
  }
};
function nh(r, n, i) {
  return n === 0 || Math.abs(n) === 1 / 0 ? Math.pow(r, i * 5) : r * n * i / (n + i * r);
}
function oh(r, n, i, s = 0.15) {
  return s === 0 ? rb(r, n, i) : r < n ? -nh(n - r, i - n, s) + n : r > i ? +nh(r - i, i - n, s) + i : r;
}
function nb(r, [n, i], [s, c]) {
  const [[f, h], [g, p]] = r;
  return [oh(n, f, h, s), oh(i, g, p, c)];
}
function ob(r, n) {
  if (typeof r != "object" || r === null) return r;
  var i = r[Symbol.toPrimitive];
  if (i !== void 0) {
    var s = i.call(r, n);
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(r);
}
function ib(r) {
  var n = ob(r, "string");
  return typeof n == "symbol" ? n : String(n);
}
function pt(r, n, i) {
  return n = ib(n), n in r ? Object.defineProperty(r, n, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[n] = i, r;
}
function ih(r, n) {
  var i = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(r);
    n && (s = s.filter(function(c) {
      return Object.getOwnPropertyDescriptor(r, c).enumerable;
    })), i.push.apply(i, s);
  }
  return i;
}
function Oe(r) {
  for (var n = 1; n < arguments.length; n++) {
    var i = arguments[n] != null ? arguments[n] : {};
    n % 2 ? ih(Object(i), !0).forEach(function(s) {
      pt(r, s, i[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : ih(Object(i)).forEach(function(s) {
      Object.defineProperty(r, s, Object.getOwnPropertyDescriptor(i, s));
    });
  }
  return r;
}
const Wm = {
  pointer: {
    start: "down",
    change: "move",
    end: "up"
  },
  mouse: {
    start: "down",
    change: "move",
    end: "up"
  },
  touch: {
    start: "start",
    change: "move",
    end: "end"
  },
  gesture: {
    start: "start",
    change: "change",
    end: "end"
  }
};
function ah(r) {
  return r ? r[0].toUpperCase() + r.slice(1) : "";
}
const ab = ["enter", "leave"];
function lb(r = !1, n) {
  return r && !ab.includes(n);
}
function sb(r, n = "", i = !1) {
  const s = Wm[r], c = s && s[n] || n;
  return "on" + ah(r) + ah(c) + (lb(i, c) ? "Capture" : "");
}
const ub = ["gotpointercapture", "lostpointercapture"];
function cb(r) {
  let n = r.substring(2).toLowerCase();
  const i = !!~n.indexOf("passive");
  i && (n = n.replace("passive", ""));
  const s = ub.includes(n) ? "capturecapture" : "capture", c = !!~n.indexOf(s);
  return c && (n = n.replace("capture", "")), {
    device: n,
    capture: c,
    passive: i
  };
}
function db(r, n = "") {
  const i = Wm[r], s = i && i[n] || n;
  return r + s;
}
function Za(r) {
  return "touches" in r;
}
function Km(r) {
  return Za(r) ? "touch" : "pointerType" in r ? r.pointerType : "mouse";
}
function fb(r) {
  return Array.from(r.touches).filter((n) => {
    var i, s;
    return n.target === r.currentTarget || ((i = r.currentTarget) === null || i === void 0 || (s = i.contains) === null || s === void 0 ? void 0 : s.call(i, n.target));
  });
}
function pb(r) {
  return r.type === "touchend" || r.type === "touchcancel" ? r.changedTouches : r.targetTouches;
}
function Ym(r) {
  return Za(r) ? pb(r)[0] : r;
}
function hb(r) {
  return fb(r).map((n) => n.identifier);
}
function uu(r) {
  const n = Ym(r);
  return Za(r) ? n.identifier : n.pointerId;
}
function lh(r) {
  const n = Ym(r);
  return [n.clientX, n.clientY];
}
function mb(r) {
  const n = {};
  if ("buttons" in r && (n.buttons = r.buttons), "shiftKey" in r) {
    const {
      shiftKey: i,
      altKey: s,
      metaKey: c,
      ctrlKey: f
    } = r;
    Object.assign(n, {
      shiftKey: i,
      altKey: s,
      metaKey: c,
      ctrlKey: f
    });
  }
  return n;
}
function Oa(r, ...n) {
  return typeof r == "function" ? r(...n) : r;
}
function gb() {
}
function vb(...r) {
  return r.length === 0 ? gb : r.length === 1 ? r[0] : function() {
    let n;
    for (const i of r)
      n = i.apply(this, arguments) || n;
    return n;
  };
}
function sh(r, n) {
  return Object.assign({}, n, r || {});
}
const wb = 32;
class yb {
  constructor(n, i, s) {
    this.ctrl = n, this.args = i, this.key = s, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset());
  }
  get state() {
    return this.ctrl.state[this.key];
  }
  set state(n) {
    this.ctrl.state[this.key] = n;
  }
  get shared() {
    return this.ctrl.state.shared;
  }
  get eventStore() {
    return this.ctrl.gestureEventStores[this.key];
  }
  get timeoutStore() {
    return this.ctrl.gestureTimeoutStores[this.key];
  }
  get config() {
    return this.ctrl.config[this.key];
  }
  get sharedConfig() {
    return this.ctrl.config.shared;
  }
  get handler() {
    return this.ctrl.handlers[this.key];
  }
  reset() {
    const {
      state: n,
      shared: i,
      ingKey: s,
      args: c
    } = this;
    i[s] = n._active = n.active = n._blocked = n._force = !1, n._step = [!1, !1], n.intentional = !1, n._movement = [0, 0], n._distance = [0, 0], n._direction = [0, 0], n._delta = [0, 0], n._bounds = [[-1 / 0, 1 / 0], [-1 / 0, 1 / 0]], n.args = c, n.axis = void 0, n.memo = void 0, n.elapsedTime = n.timeDelta = 0, n.direction = [0, 0], n.distance = [0, 0], n.overflow = [0, 0], n._movementBound = [!1, !1], n.velocity = [0, 0], n.movement = [0, 0], n.delta = [0, 0], n.timeStamp = 0;
  }
  start(n) {
    const i = this.state, s = this.config;
    i._active || (this.reset(), this.computeInitial(), i._active = !0, i.target = n.target, i.currentTarget = n.currentTarget, i.lastOffset = s.from ? Oa(s.from, i) : i.offset, i.offset = i.lastOffset, i.startTime = i.timeStamp = n.timeStamp);
  }
  computeValues(n) {
    const i = this.state;
    i._values = n, i.values = this.config.transform(n);
  }
  computeInitial() {
    const n = this.state;
    n._initial = n._values, n.initial = n.values;
  }
  compute(n) {
    const {
      state: i,
      config: s,
      shared: c
    } = this;
    i.args = this.args;
    let f = 0;
    if (n && (i.event = n, s.preventDefault && n.cancelable && i.event.preventDefault(), i.type = n.type, c.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, c.locked = !!document.pointerLockElement, Object.assign(c, mb(n)), c.down = c.pressed = c.buttons % 2 === 1 || c.touches > 0, f = n.timeStamp - i.timeStamp, i.timeStamp = n.timeStamp, i.elapsedTime = i.timeStamp - i.startTime), i._active) {
      const ae = i._delta.map(Math.abs);
      nt.addTo(i._distance, ae);
    }
    this.axisIntent && this.axisIntent(n);
    const [h, g] = i._movement, [p, d] = s.threshold, {
      _step: b,
      values: w
    } = i;
    if (s.hasCustomTransform ? (b[0] === !1 && (b[0] = Math.abs(h) >= p && w[0]), b[1] === !1 && (b[1] = Math.abs(g) >= d && w[1])) : (b[0] === !1 && (b[0] = Math.abs(h) >= p && Math.sign(h) * p), b[1] === !1 && (b[1] = Math.abs(g) >= d && Math.sign(g) * d)), i.intentional = b[0] !== !1 || b[1] !== !1, !i.intentional) return;
    const v = [0, 0];
    if (s.hasCustomTransform) {
      const [ae, oe] = w;
      v[0] = b[0] !== !1 ? ae - b[0] : 0, v[1] = b[1] !== !1 ? oe - b[1] : 0;
    } else
      v[0] = b[0] !== !1 ? h - b[0] : 0, v[1] = b[1] !== !1 ? g - b[1] : 0;
    this.restrictToAxis && !i._blocked && this.restrictToAxis(v);
    const k = i.offset, C = i._active && !i._blocked || i.active;
    C && (i.first = i._active && !i.active, i.last = !i._active && i.active, i.active = c[this.ingKey] = i._active, n && (i.first && ("bounds" in s && (i._bounds = Oa(s.bounds, i)), this.setup && this.setup()), i.movement = v, this.computeOffset()));
    const [y, F] = i.offset, [[N, M], [D, H]] = i._bounds;
    i.overflow = [y < N ? -1 : y > M ? 1 : 0, F < D ? -1 : F > H ? 1 : 0], i._movementBound[0] = i.overflow[0] ? i._movementBound[0] === !1 ? i._movement[0] : i._movementBound[0] : !1, i._movementBound[1] = i.overflow[1] ? i._movementBound[1] === !1 ? i._movement[1] : i._movementBound[1] : !1;
    const ne = i._active ? s.rubberband || [0, 0] : [0, 0];
    if (i.offset = nb(i._bounds, i.offset, ne), i.delta = nt.sub(i.offset, k), this.computeMovement(), C && (!i.last || f > wb)) {
      i.delta = nt.sub(i.offset, k);
      const ae = i.delta.map(Math.abs);
      nt.addTo(i.distance, ae), i.direction = i.delta.map(Math.sign), i._direction = i._delta.map(Math.sign), !i.first && f > 0 && (i.velocity = [ae[0] / f, ae[1] / f], i.timeDelta = f);
    }
  }
  emit() {
    const n = this.state, i = this.shared, s = this.config;
    if (n._active || this.clean(), (n._blocked || !n.intentional) && !n._force && !s.triggerAllEvents) return;
    const c = this.handler(Oe(Oe(Oe({}, i), n), {}, {
      [this.aliasKey]: n.values
    }));
    c !== void 0 && (n.memo = c);
  }
  clean() {
    this.eventStore.clean(), this.timeoutStore.clean();
  }
}
function bb([r, n], i) {
  const s = Math.abs(r), c = Math.abs(n);
  if (s > c && s > i)
    return "x";
  if (c > s && c > i)
    return "y";
}
class xb extends yb {
  constructor(...n) {
    super(...n), pt(this, "aliasKey", "xy");
  }
  reset() {
    super.reset(), this.state.axis = void 0;
  }
  init() {
    this.state.offset = [0, 0], this.state.lastOffset = [0, 0];
  }
  computeOffset() {
    this.state.offset = nt.add(this.state.lastOffset, this.state.movement);
  }
  computeMovement() {
    this.state.movement = nt.sub(this.state.offset, this.state.lastOffset);
  }
  axisIntent(n) {
    const i = this.state, s = this.config;
    if (!i.axis && n) {
      const c = typeof s.axisThreshold == "object" ? s.axisThreshold[Km(n)] : s.axisThreshold;
      i.axis = bb(i._movement, c);
    }
    i._blocked = (s.lockDirection || !!s.axis) && !i.axis || !!s.axis && s.axis !== i.axis;
  }
  restrictToAxis(n) {
    if (this.config.axis || this.config.lockDirection)
      switch (this.state.axis) {
        case "x":
          n[1] = 0;
          break;
        case "y":
          n[0] = 0;
          break;
      }
  }
}
const kb = (r) => r, uh = 0.15, Qm = {
  enabled(r = !0) {
    return r;
  },
  eventOptions(r, n, i) {
    return Oe(Oe({}, i.shared.eventOptions), r);
  },
  preventDefault(r = !1) {
    return r;
  },
  triggerAllEvents(r = !1) {
    return r;
  },
  rubberband(r = 0) {
    switch (r) {
      case !0:
        return [uh, uh];
      case !1:
        return [0, 0];
      default:
        return nt.toVector(r);
    }
  },
  from(r) {
    if (typeof r == "function") return r;
    if (r != null) return nt.toVector(r);
  },
  transform(r, n, i) {
    const s = r || i.shared.transform;
    return this.hasCustomTransform = !!s, s || kb;
  },
  threshold(r) {
    return nt.toVector(r, 0);
  }
}, _b = 0, ii = Oe(Oe({}, Qm), {}, {
  axis(r, n, {
    axis: i
  }) {
    if (this.lockDirection = i === "lock", !this.lockDirection) return i;
  },
  axisThreshold(r = _b) {
    return r;
  },
  bounds(r = {}) {
    if (typeof r == "function")
      return (f) => ii.bounds(r(f));
    if ("current" in r)
      return () => r.current;
    if (typeof HTMLElement == "function" && r instanceof HTMLElement)
      return r;
    const {
      left: n = -1 / 0,
      right: i = 1 / 0,
      top: s = -1 / 0,
      bottom: c = 1 / 0
    } = r;
    return [[n, i], [s, c]];
  }
}), ch = {
  ArrowRight: (r, n = 1) => [r * n, 0],
  ArrowLeft: (r, n = 1) => [-1 * r * n, 0],
  ArrowUp: (r, n = 1) => [0, -1 * r * n],
  ArrowDown: (r, n = 1) => [0, r * n]
};
class Eb extends xb {
  constructor(...n) {
    super(...n), pt(this, "ingKey", "dragging");
  }
  reset() {
    super.reset();
    const n = this.state;
    n._pointerId = void 0, n._pointerActive = !1, n._keyboardActive = !1, n._preventScroll = !1, n._delayed = !1, n.swipe = [0, 0], n.tap = !1, n.canceled = !1, n.cancel = this.cancel.bind(this);
  }
  setup() {
    const n = this.state;
    if (n._bounds instanceof HTMLElement) {
      const i = n._bounds.getBoundingClientRect(), s = n.currentTarget.getBoundingClientRect(), c = {
        left: i.left - s.left + n.offset[0],
        right: i.right - s.right + n.offset[0],
        top: i.top - s.top + n.offset[1],
        bottom: i.bottom - s.bottom + n.offset[1]
      };
      n._bounds = ii.bounds(c);
    }
  }
  cancel() {
    const n = this.state;
    n.canceled || (n.canceled = !0, n._active = !1, setTimeout(() => {
      this.compute(), this.emit();
    }, 0));
  }
  setActive() {
    this.state._active = this.state._pointerActive || this.state._keyboardActive;
  }
  clean() {
    this.pointerClean(), this.state._pointerActive = !1, this.state._keyboardActive = !1, super.clean();
  }
  pointerDown(n) {
    const i = this.config, s = this.state;
    if (n.buttons != null && (Array.isArray(i.pointerButtons) ? !i.pointerButtons.includes(n.buttons) : i.pointerButtons !== -1 && i.pointerButtons !== n.buttons)) return;
    const c = this.ctrl.setEventIds(n);
    i.pointerCapture && n.target.setPointerCapture(n.pointerId), !(c && c.size > 1 && s._pointerActive) && (this.start(n), this.setupPointer(n), s._pointerId = uu(n), s._pointerActive = !0, this.computeValues(lh(n)), this.computeInitial(), i.preventScrollAxis && Km(n) !== "mouse" ? (s._active = !1, this.setupScrollPrevention(n)) : i.delay > 0 ? (this.setupDelayTrigger(n), i.triggerAllEvents && (this.compute(n), this.emit())) : this.startPointerDrag(n));
  }
  startPointerDrag(n) {
    const i = this.state;
    i._active = !0, i._preventScroll = !0, i._delayed = !1, this.compute(n), this.emit();
  }
  pointerMove(n) {
    const i = this.state, s = this.config;
    if (!i._pointerActive) return;
    const c = uu(n);
    if (i._pointerId !== void 0 && c !== i._pointerId) return;
    const f = lh(n);
    if (document.pointerLockElement === n.target ? i._delta = [n.movementX, n.movementY] : (i._delta = nt.sub(f, i._values), this.computeValues(f)), nt.addTo(i._movement, i._delta), this.compute(n), i._delayed && i.intentional) {
      this.timeoutStore.remove("dragDelay"), i.active = !1, this.startPointerDrag(n);
      return;
    }
    if (s.preventScrollAxis && !i._preventScroll)
      if (i.axis)
        if (i.axis === s.preventScrollAxis || s.preventScrollAxis === "xy") {
          i._active = !1, this.clean();
          return;
        } else {
          this.timeoutStore.remove("startPointerDrag"), this.startPointerDrag(n);
          return;
        }
      else
        return;
    this.emit();
  }
  pointerUp(n) {
    this.ctrl.setEventIds(n);
    try {
      this.config.pointerCapture && n.target.hasPointerCapture(n.pointerId) && n.target.releasePointerCapture(n.pointerId);
    } catch {
    }
    const i = this.state, s = this.config;
    if (!i._active || !i._pointerActive) return;
    const c = uu(n);
    if (i._pointerId !== void 0 && c !== i._pointerId) return;
    this.state._pointerActive = !1, this.setActive(), this.compute(n);
    const [f, h] = i._distance;
    if (i.tap = f <= s.tapsThreshold && h <= s.tapsThreshold, i.tap && s.filterTaps)
      i._force = !0;
    else {
      const [g, p] = i._delta, [d, b] = i._movement, [w, v] = s.swipe.velocity, [k, C] = s.swipe.distance, y = s.swipe.duration;
      if (i.elapsedTime < y) {
        const F = Math.abs(g / i.timeDelta), N = Math.abs(p / i.timeDelta);
        F > w && Math.abs(d) > k && (i.swipe[0] = Math.sign(g)), N > v && Math.abs(b) > C && (i.swipe[1] = Math.sign(p));
      }
    }
    this.emit();
  }
  pointerClick(n) {
    !this.state.tap && n.detail > 0 && (n.preventDefault(), n.stopPropagation());
  }
  setupPointer(n) {
    const i = this.config, s = i.device;
    i.pointerLock && n.currentTarget.requestPointerLock(), i.pointerCapture || (this.eventStore.add(this.sharedConfig.window, s, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, s, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, s, "cancel", this.pointerUp.bind(this)));
  }
  pointerClean() {
    this.config.pointerLock && document.pointerLockElement === this.state.currentTarget && document.exitPointerLock();
  }
  preventScroll(n) {
    this.state._preventScroll && n.cancelable && n.preventDefault();
  }
  setupScrollPrevention(n) {
    this.state._preventScroll = !1, Sb(n);
    const i = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
      passive: !1
    });
    this.eventStore.add(this.sharedConfig.window, "touch", "end", i), this.eventStore.add(this.sharedConfig.window, "touch", "cancel", i), this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, n);
  }
  setupDelayTrigger(n) {
    this.state._delayed = !0, this.timeoutStore.add("dragDelay", () => {
      this.state._step = [0, 0], this.startPointerDrag(n);
    }, this.config.delay);
  }
  keyDown(n) {
    const i = ch[n.key];
    if (i) {
      const s = this.state, c = n.shiftKey ? 10 : n.altKey ? 0.1 : 1;
      this.start(n), s._delta = i(this.config.keyboardDisplacement, c), s._keyboardActive = !0, nt.addTo(s._movement, s._delta), this.compute(n), this.emit();
    }
  }
  keyUp(n) {
    n.key in ch && (this.state._keyboardActive = !1, this.setActive(), this.compute(n), this.emit());
  }
  bind(n) {
    const i = this.config.device;
    n(i, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (n(i, "change", this.pointerMove.bind(this)), n(i, "end", this.pointerUp.bind(this)), n(i, "cancel", this.pointerUp.bind(this)), n("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (n("key", "down", this.keyDown.bind(this)), n("key", "up", this.keyUp.bind(this))), this.config.filterTaps && n("click", "", this.pointerClick.bind(this), {
      capture: !0,
      passive: !1
    });
  }
}
function Sb(r) {
  "persist" in r && typeof r.persist == "function" && r.persist();
}
const ai = typeof window < "u" && window.document && window.document.createElement;
function Gm() {
  return ai && "ontouchstart" in window;
}
function Cb() {
  return Gm() || ai && window.navigator.maxTouchPoints > 1;
}
function Fb() {
  return ai && "onpointerdown" in window;
}
function Pb() {
  return ai && "exitPointerLock" in window.document;
}
function Tb() {
  try {
    return "constructor" in GestureEvent;
  } catch {
    return !1;
  }
}
const Ft = {
  isBrowser: ai,
  gesture: Tb(),
  touch: Gm(),
  touchscreen: Cb(),
  pointer: Fb(),
  pointerLock: Pb()
}, Ab = 250, zb = 180, $b = 0.5, Ib = 50, Lb = 250, Rb = 10, dh = {
  mouse: 0,
  touch: 0,
  pen: 8
}, Nb = Oe(Oe({}, ii), {}, {
  device(r, n, {
    pointer: {
      touch: i = !1,
      lock: s = !1,
      mouse: c = !1
    } = {}
  }) {
    return this.pointerLock = s && Ft.pointerLock, Ft.touch && i ? "touch" : this.pointerLock ? "mouse" : Ft.pointer && !c ? "pointer" : Ft.touch ? "touch" : "mouse";
  },
  preventScrollAxis(r, n, {
    preventScroll: i
  }) {
    if (this.preventScrollDelay = typeof i == "number" ? i : i || i === void 0 && r ? Ab : void 0, !(!Ft.touchscreen || i === !1))
      return r || (i !== void 0 ? "y" : void 0);
  },
  pointerCapture(r, n, {
    pointer: {
      capture: i = !0,
      buttons: s = 1,
      keys: c = !0
    } = {}
  }) {
    return this.pointerButtons = s, this.keys = c, !this.pointerLock && this.device === "pointer" && i;
  },
  threshold(r, n, {
    filterTaps: i = !1,
    tapsThreshold: s = 3,
    axis: c = void 0
  }) {
    const f = nt.toVector(r, i ? s : c ? 1 : 0);
    return this.filterTaps = i, this.tapsThreshold = s, f;
  },
  swipe({
    velocity: r = $b,
    distance: n = Ib,
    duration: i = Lb
  } = {}) {
    return {
      velocity: this.transform(nt.toVector(r)),
      distance: this.transform(nt.toVector(n)),
      duration: i
    };
  },
  delay(r = 0) {
    switch (r) {
      case !0:
        return zb;
      case !1:
        return 0;
      default:
        return r;
    }
  },
  axisThreshold(r) {
    return r ? Oe(Oe({}, dh), r) : dh;
  },
  keyboardDisplacement(r = Rb) {
    return r;
  }
});
Oe(Oe({}, Qm), {}, {
  device(r, n, {
    shared: i,
    pointer: {
      touch: s = !1
    } = {}
  }) {
    if (i.target && !Ft.touch && Ft.gesture) return "gesture";
    if (Ft.touch && s) return "touch";
    if (Ft.touchscreen) {
      if (Ft.pointer) return "pointer";
      if (Ft.touch) return "touch";
    }
  },
  bounds(r, n, {
    scaleBounds: i = {},
    angleBounds: s = {}
  }) {
    const c = (h) => {
      const g = sh(Oa(i, h), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [g.min, g.max];
    }, f = (h) => {
      const g = sh(Oa(s, h), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [g.min, g.max];
    };
    return typeof i != "function" && typeof s != "function" ? [c(), f()] : (h) => [c(h), f(h)];
  },
  threshold(r, n, i) {
    return this.lockDirection = i.axis === "lock", nt.toVector(r, this.lockDirection ? [0.1, 3] : 0);
  },
  modifierKey(r) {
    return r === void 0 ? "ctrlKey" : r;
  },
  pinchOnWheel(r = !0) {
    return r;
  }
});
Oe(Oe({}, ii), {}, {
  mouseOnly: (r = !0) => r
});
Oe(Oe({}, ii), {}, {
  mouseOnly: (r = !0) => r
});
const Xm = /* @__PURE__ */ new Map(), Lu = /* @__PURE__ */ new Map();
function Mb(r) {
  Xm.set(r.key, r.engine), Lu.set(r.key, r.resolver);
}
const Ob = {
  key: "drag",
  engine: Eb,
  resolver: Nb
};
function Db(r, n) {
  if (r == null) return {};
  var i = {}, s = Object.keys(r), c, f;
  for (f = 0; f < s.length; f++)
    c = s[f], !(n.indexOf(c) >= 0) && (i[c] = r[c]);
  return i;
}
function jb(r, n) {
  if (r == null) return {};
  var i = Db(r, n), s, c;
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(r);
    for (c = 0; c < f.length; c++)
      s = f[c], !(n.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(r, s) && (i[s] = r[s]);
  }
  return i;
}
const Ub = {
  target(r) {
    if (r)
      return () => "current" in r ? r.current : r;
  },
  enabled(r = !0) {
    return r;
  },
  window(r = Ft.isBrowser ? window : void 0) {
    return r;
  },
  eventOptions({
    passive: r = !0,
    capture: n = !1
  } = {}) {
    return {
      passive: r,
      capture: n
    };
  },
  transform(r) {
    return r;
  }
}, Vb = ["target", "eventOptions", "window", "enabled", "transform"];
function Ta(r = {}, n) {
  const i = {};
  for (const [s, c] of Object.entries(n))
    switch (typeof c) {
      case "function":
        i[s] = c.call(i, r[s], s, r);
        break;
      case "object":
        i[s] = Ta(r[s], c);
        break;
      case "boolean":
        c && (i[s] = r[s]);
        break;
    }
  return i;
}
function Bb(r, n, i = {}) {
  const s = r, {
    target: c,
    eventOptions: f,
    window: h,
    enabled: g,
    transform: p
  } = s, d = jb(s, Vb);
  if (i.shared = Ta({
    target: c,
    eventOptions: f,
    window: h,
    enabled: g,
    transform: p
  }, Ub), n) {
    const b = Lu.get(n);
    i[n] = Ta(Oe({
      shared: i.shared
    }, d), b);
  } else
    for (const b in d) {
      const w = Lu.get(b);
      w && (i[b] = Ta(Oe({
        shared: i.shared
      }, d[b]), w));
    }
  return i;
}
class qm {
  constructor(n, i) {
    pt(this, "_listeners", /* @__PURE__ */ new Set()), this._ctrl = n, this._gestureKey = i;
  }
  add(n, i, s, c, f) {
    const h = this._listeners, g = db(i, s), p = this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}, d = Oe(Oe({}, p), f);
    n.addEventListener(g, c, d);
    const b = () => {
      n.removeEventListener(g, c, d), h.delete(b);
    };
    return h.add(b), b;
  }
  clean() {
    this._listeners.forEach((n) => n()), this._listeners.clear();
  }
}
class Hb {
  constructor() {
    pt(this, "_timeouts", /* @__PURE__ */ new Map());
  }
  add(n, i, s = 140, ...c) {
    this.remove(n), this._timeouts.set(n, window.setTimeout(i, s, ...c));
  }
  remove(n) {
    const i = this._timeouts.get(n);
    i && window.clearTimeout(i);
  }
  clean() {
    this._timeouts.forEach((n) => void window.clearTimeout(n)), this._timeouts.clear();
  }
}
class Wb {
  constructor(n) {
    pt(this, "gestures", /* @__PURE__ */ new Set()), pt(this, "_targetEventStore", new qm(this)), pt(this, "gestureEventStores", {}), pt(this, "gestureTimeoutStores", {}), pt(this, "handlers", {}), pt(this, "config", {}), pt(this, "pointerIds", /* @__PURE__ */ new Set()), pt(this, "touchIds", /* @__PURE__ */ new Set()), pt(this, "state", {
      shared: {
        shiftKey: !1,
        metaKey: !1,
        ctrlKey: !1,
        altKey: !1
      }
    }), Kb(this, n);
  }
  setEventIds(n) {
    if (Za(n))
      return this.touchIds = new Set(hb(n)), this.touchIds;
    if ("pointerId" in n)
      return n.type === "pointerup" || n.type === "pointercancel" ? this.pointerIds.delete(n.pointerId) : n.type === "pointerdown" && this.pointerIds.add(n.pointerId), this.pointerIds;
  }
  applyHandlers(n, i) {
    this.handlers = n, this.nativeHandlers = i;
  }
  applyConfig(n, i) {
    this.config = Bb(n, i, this.config);
  }
  clean() {
    this._targetEventStore.clean();
    for (const n of this.gestures)
      this.gestureEventStores[n].clean(), this.gestureTimeoutStores[n].clean();
  }
  effect() {
    return this.config.shared.target && this.bind(), () => this._targetEventStore.clean();
  }
  bind(...n) {
    const i = this.config.shared, s = {};
    let c;
    if (!(i.target && (c = i.target(), !c))) {
      if (i.enabled) {
        for (const h of this.gestures) {
          const g = this.config[h], p = fh(s, g.eventOptions, !!c);
          if (g.enabled) {
            const d = Xm.get(h);
            new d(this, n, h).bind(p);
          }
        }
        const f = fh(s, i.eventOptions, !!c);
        for (const h in this.nativeHandlers)
          f(h, "", (g) => this.nativeHandlers[h](Oe(Oe({}, this.state.shared), {}, {
            event: g,
            args: n
          })), void 0, !0);
      }
      for (const f in s)
        s[f] = vb(...s[f]);
      if (!c) return s;
      for (const f in s) {
        const {
          device: h,
          capture: g,
          passive: p
        } = cb(f);
        this._targetEventStore.add(c, h, "", s[f], {
          capture: g,
          passive: p
        });
      }
    }
  }
}
function In(r, n) {
  r.gestures.add(n), r.gestureEventStores[n] = new qm(r, n), r.gestureTimeoutStores[n] = new Hb();
}
function Kb(r, n) {
  n.drag && In(r, "drag"), n.wheel && In(r, "wheel"), n.scroll && In(r, "scroll"), n.move && In(r, "move"), n.pinch && In(r, "pinch"), n.hover && In(r, "hover");
}
const fh = (r, n, i) => (s, c, f, h = {}, g = !1) => {
  var p, d;
  const b = (p = h.capture) !== null && p !== void 0 ? p : n.capture, w = (d = h.passive) !== null && d !== void 0 ? d : n.passive;
  let v = g ? s : sb(s, c, b);
  i && w && (v += "Passive"), r[v] = r[v] || [], r[v].push(f);
};
function Yb(r, n = {}, i, s) {
  const c = re.useMemo(() => new Wb(r), []);
  if (c.applyHandlers(r, s), c.applyConfig(n, i), re.useEffect(c.effect.bind(c)), re.useEffect(() => c.clean.bind(c), []), n.target === void 0)
    return c.bind.bind(c);
}
function Qb(r, n) {
  return Mb(Ob), Yb({
    drag: r
  }, n || {}, "drag");
}
const Gb = (r) => fe.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...r, children: fe.jsx("path", { d: "M11.7071 3.29291L3 12L11.7071 20.7071L13.1213 19.2929L6.82841 13L20 13V11L6.82844 11L13.1213 4.70712L11.7071 3.29291Z" }) }), Xb = B.forwardRef(({ "aria-label": r, as: n, className: i, color: s, contained: c = !1, disabled: f, emphasis: h = "regular", onBlur: g, onClick: p, onFocus: d, shape: b = "square", size: w = "medium", svgClassName: v, ...k }, C) => {
  const y = n ?? "button", F = B.useRef(null), { buttonProps: N } = Wu({
    elementType: y,
    isDisabled: f,
    onBlur: g,
    onFocus: d,
    onPress: p
  }, F), M = !!(f || !r), D = typeof w == "number", H = D ? { height: w, width: w } : void 0, ne = D && c ? { padding: w / 2 } : void 0, ae = D ? void 0 : w, oe = ur(N, k);
  return fe.jsx(Zb, { disabled: f, children: fe.jsx(y, { "aria-disabled": f, "aria-hidden": M, "aria-label": r, className: Va({
    button: !0,
    class: i,
    emphasis: c && h,
    shape: b,
    size: ae
  }), "data-namespace": "@paloma/icons", "data-size": w, id: "arrow-left-id", ref: Vu(F, C), style: { color: s, ...ne, ...H }, ...oe, children: fe.jsx(Gb, { className: Ua({ class: v, size: ae }), "data-testid": "@paloma-icon-button-svg-id", focusable: "false", id: "arrow-left-svg-id", style: { fill: qb, ...H } }) }) });
}), qb = "currentColor", Zb = ({ children: r, disabled: n, ...i }) => n ? r : fe.jsx(Ku, { focusRingClass: rm(), ...i, children: r }), Jb = (r) => fe.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...r, children: fe.jsx("path", { d: "M12.2929 3.29291L21 12L12.2929 20.7071L10.8787 19.2929L17.1716 13H4V11H17.1716L10.8787 4.70712L12.2929 3.29291Z" }) }), e2 = B.forwardRef(({ "aria-label": r, as: n, className: i, color: s, contained: c = !1, disabled: f, emphasis: h = "regular", onBlur: g, onClick: p, onFocus: d, shape: b = "square", size: w = "medium", svgClassName: v, ...k }, C) => {
  const y = n ?? "button", F = B.useRef(null), { buttonProps: N } = Wu({
    elementType: y,
    isDisabled: f,
    onBlur: g,
    onFocus: d,
    onPress: p
  }, F), M = !!(f || !r), D = typeof w == "number", H = D ? { height: w, width: w } : void 0, ne = D && c ? { padding: w / 2 } : void 0, ae = D ? void 0 : w, oe = ur(N, k);
  return fe.jsx(r2, { disabled: f, children: fe.jsx(y, { "aria-disabled": f, "aria-hidden": M, "aria-label": r, className: Va({
    button: !0,
    class: i,
    emphasis: c && h,
    shape: b,
    size: ae
  }), "data-namespace": "@paloma/icons", "data-size": w, id: "arrow-right-id", ref: Vu(F, C), style: { color: s, ...ne, ...H }, ...oe, children: fe.jsx(Jb, { className: Ua({ class: v, size: ae }), "data-testid": "@paloma-icon-button-svg-id", focusable: "false", id: "arrow-right-svg-id", style: { fill: t2, ...H } }) }) });
}), t2 = "currentColor", r2 = ({ children: r, disabled: n, ...i }) => n ? r : fe.jsx(Ku, { focusRingClass: rm(), ...i, children: r });
var n2 = typeof window > "u" ? B.useEffect : B.useLayoutEffect, o2 = jt({
  base: "h-1 w-1 bg-content-neutral-bold/[0.15] rounded-full",
  variants: {
    isCurrent: {
      true: "w-12"
    }
  }
}), i2 = jt({
  base: "flex flex-col gap-4 flex-grow w-full"
}), a2 = jt({
  base: "absolute touch-pan-y",
  variants: {
    isFirst: {
      true: "opacity-0"
    },
    withBackdropBlur: {
      false: "",
      true: "backdrop-blur-surface"
    }
  }
}), Zm = (r, n, i) => ({
  dotWidthGrow: () => r.to([0, 1], [4, 48]).to((C) => `${C}px`),
  dotWidthShrink: () => r.to([0, 1], [48, 4]).to((C) => `${C}px`),
  fadeIn: () => r.to([0, 1], [0, 1]).to((C) => C),
  fadeOut: () => r.to([0, 1], [1, 0]).to((C) => C),
  scaleCard: (C, y) => {
    if (i)
      return r.to([0, 1], [C, y]).to((F) => F);
  },
  slideBack: () => {
    if (i)
      return r.to([0, 1], [0, i]).to((C) => C);
  },
  slideForward: () => {
    if (i)
      return r.to([0, 1], [0, -i]).to((C) => C);
  },
  slideIn: () => {
    if (n)
      return r.to([0, 1], [0, n]).to((C) => C);
  },
  slideOut: (C = 0, y = "left") => {
    if (!n)
      return;
    const F = y === "left" ? -1 : 1;
    return r.to([0, 1], [C, n]).to((N) => F * N);
  }
}), l2 = ({
  currentSlide: r = 1,
  isAnimatingBackward: n,
  isAnimatingForward: i,
  items: s,
  motion: c
}) => {
  const { dotWidthGrow: f, dotWidthShrink: h } = Zm(c), g = (p) => {
    if (i) {
      if (p === r)
        return f();
      if (p === (r || s.length) - 1)
        return h();
    } else if (n) {
      if (p === r)
        return f();
      if (p === r + 1 || p === 0 && r + 1 === s.length)
        return h();
    }
  };
  return /* @__PURE__ */ re.createElement(
    "div",
    {
      className: "flex gap-2 self-center",
      "data-testid": On("@paloma-carousel-dots-id")
    },
    s.map((p, d) => /* @__PURE__ */ re.createElement(
      Hm.div,
      {
        className: o2({ isCurrent: d === r }),
        "data-testid": On(`@paloma-carousel-dot-${d}-id`),
        key: d,
        style: { width: g(d) }
      }
    ))
  );
};
function s2(r, n, i) {
  try {
    const c = re.Children.only(r);
    if (c.type === n)
      return i ? i(c, c == null ? void 0 : c.props) : r;
  } catch {
  }
  return null;
}
var u2 = jt({
  base: "leading-[150%] rtl:text-right",
  variants: {
    body: {
      large: "font-body text-size-body-large",
      medium: "font-body text-size-body-medium",
      small: "font-body text-size-body-small",
      "x-small": "font-body text-size-body-x-small"
    },
    fontWeight: {
      bold: "font-bold",
      normal: "font-normal"
    },
    heading: {
      large: "text-size-xs-heading-large lg:text-size-lg-heading-large font-heading",
      medium: "text-size-xs-heading-medium lg:text-size-lg-heading-medium font-heading",
      small: "text-size-heading-small font-heading",
      "x-large": "text-size-xs-heading-x-large lg:text-size-lg-heading-x-large leading-[42px] font-heading",
      "x-small": "text-size-heading-x-small font-heading"
    },
    truncate: {
      true: "truncate min-w-0"
    },
    underline: {
      true: "underline underline-offset-4"
    }
  }
}), c2 = "span", cu = B.forwardRef(
  ({
    as: r,
    children: n,
    className: i,
    fontWeight: s = "normal",
    showTitle: c = !1,
    size: f,
    truncate: h = !1,
    underline: g = !1,
    variant: p,
    ...d
  }, b) => {
    const w = r ?? c2, [v, k] = B.useMemo(() => p === "heading" ? [f ?? "large", p] : [f ?? "medium", "body"], [f, p]);
    return /* @__PURE__ */ re.createElement(
      w,
      {
        className: u2({
          className: i,
          fontWeight: s,
          truncate: h,
          underline: g,
          [k]: v
        }),
        "data-font-weight": s,
        "data-size": v,
        "data-truncate": h,
        "data-underline": g,
        "data-variant": k,
        ref: b,
        title: c ? d.title ?? (h && typeof n == "string" ? n : void 0) : void 0,
        ...d
      },
      n
    );
  }
), d2 = (r, n = {}) => {
  if (typeof r == "string")
    return /* @__PURE__ */ re.createElement(cu, { ...n }, r);
  if (s2(r, cu)) {
    const i = {
      ...n ?? {},
      ...r.props
    };
    return /* @__PURE__ */ re.createElement(cu, { ...i });
  }
  if (re.isValidElement(r) && typeof r.type == "string") {
    const i = {};
    r.type === "a" && (i.color = "#0000EE", i.textDecoration = "underline");
    const s = r.props, c = {
      ...i,
      ...n.style,
      ...s.style
    };
    return re.cloneElement(
      r,
      {
        style: c
      }
    );
  }
  return r;
}, f2 = ({
  arrows: r = !0,
  backArrowLabel: n = "Back",
  forwardArrowLabel: i = "Forward",
  handleBackPress: s,
  handleForwardPress: c,
  title: f,
  titleTag: h = "div"
}) => /* @__PURE__ */ re.createElement(re.Fragment, null, d2(f, {
  as: h,
  className: "m-0 text-content-neutral-bold",
  fontWeight: "bold",
  size: "x-small",
  variant: "heading"
}), r && /* @__PURE__ */ re.createElement("div", { className: "flex gap-8 self-start" }, /* @__PURE__ */ re.createElement(
  Xb,
  {
    "aria-label": n,
    className: "rtl:rotate-180 text-content-neutral-bold",
    onClick: s,
    size: "small"
  }
), /* @__PURE__ */ re.createElement(
  e2,
  {
    "aria-label": i,
    className: "rtl:rotate-180 text-content-neutral-bold",
    onClick: c,
    size: "small"
  }
))), du = 2, ph = 5, hh = 3, p2 = ({
  carouselItemWrapperClassname: r,
  children: n,
  className: i,
  dots: s = !0,
  onSlideChange: c,
  overlap: f = 12,
  scale: h = 0.9,
  titleTag: g = "div",
  withBackdropBlur: p = !1,
  ...d
}) => {
  const [b, w] = B.useState(!1);
  B.useEffect(() => {
    const ie = window.matchMedia("(prefers-reduced-motion: reduce)");
    w(ie.matches);
    const ke = (Ut) => w(Ut.matches);
    return ie.addEventListener("change", ke), () => ie.removeEventListener("change", ke);
  }, []);
  const v = B.useRef(!1), k = B.useRef(null), [C, y] = B.useState(0), [F, N] = B.useState(() => {
    const ie = re.Children.toArray(n);
    return [
      ie[C === 0 ? ie.length - 1 : C - 1],
      ...ie.slice(C),
      ...ie.slice(0, C)
    ];
  }), M = n.length ?? 0, D = M >= hh ? hh : du;
  sm(
    M >= du && M <= ph,
    `A carousel must contain between ${du} - ${ph} items.`
  );
  const [H, ne] = B.useState(!1), [ae, oe] = B.useState(!1), [xe, me] = B.useState(!1), Se = H || ae, [we, Q] = B.useState({ height: 0, width: 0 }), te = B.useMemo(() => {
    const ie = D - 1;
    return we.width + f * ie;
  }, [D, we.width, f]);
  B.useEffect(() => {
    v.current ? c == null || c(C) : v.current = !0;
  }, [c, C]), B.useEffect(() => {
    if (!Se) {
      const ie = re.Children.toArray(n), ke = [
        ie[C === 0 ? ie.length - 1 : C - 1],
        ...ie.slice(C),
        ...ie.slice(0, C)
      ];
      N(ke);
    }
  }, [n, C, Se]);
  const A = () => {
    k.current && Q({
      height: k.current.offsetHeight,
      width: k.current.offsetWidth
    });
  };
  n2(() => {
    A();
    const ie = () => {
      A();
    };
    window.addEventListener("resize", ie);
    let ke = null;
    return k.current && window.ResizeObserver && (ke = new ResizeObserver(() => {
      A();
    }), ke.observe(k.current)), () => {
      window.removeEventListener("resize", ie), ke && ke.disconnect();
    };
  }, []);
  const Y = () => {
    if (!Se)
      return y(C === 0 ? M - 1 : C - 1), oe(!0), Ze();
  }, G = () => {
    if (!Se)
      return y(C === M - 1 ? 0 : C + 1), ne(!0), Ze();
  }, [R, L] = eh(() => ({
    config: {
      duration: 600,
      easing: bm.easeInOutCubic
    },
    motion: 0
  })), [{ x: $ }, O] = eh(() => ({ x: 0 })), _ = we.width / 4, I = Qb(
    ({ active: ie, args: [ke], cancel: Ut, down: Rr, movement: [Nr] }) => {
      if (ke === 1) {
        if (me(!0), O.start({
          immediate: b || ie,
          x: Rr ? Nr : 0
        }), Nr < -_)
          return Ut(), G();
        if (Nr > _)
          return Ut(), Y();
        !Rr && !ie && me(!1);
      }
    },
    {
      axis: "x",
      // Capture-phase is required so that the gesture fires before react-aria's usePress
      // (used by Link and other interactive elements) calls stopPropagation on pointerdown,
      // which would otherwise prevent this handler from ever seeing the event.
      eventOptions: { capture: !0 }
    }
  ), {
    fadeIn: de,
    fadeOut: ce,
    scaleCard: ge,
    slideBack: ye,
    slideForward: Fe,
    slideIn: Ce,
    slideOut: Ae
  } = Zm(R.motion, we.width, f), Ze = () => {
    if (b) {
      ne(!1), oe(!1), me(!1);
      return;
    }
    return L.start({
      motion: 1,
      onRest: () => (ne(!1), oe(!1), me(!1), L.start({ immediate: !0, motion: 0 }))
    });
  }, nn = (ie) => {
    if (!Se && xe && ie === 1)
      return $;
    if (H) {
      if (ie === 1)
        return Ae(xe ? _ : 0);
      if (ie !== 1 && ie !== 0)
        return Fe();
    }
    if (ae) {
      if (ie === 0)
        return Ce();
      if (ie === 1 && xe)
        return Ae(_, "right");
      if (ie !== D)
        return ye();
    }
  }, li = (ie) => {
    if (H && ie === 1)
      return ce();
    if (ae) {
      if (ie === 0)
        return de();
      if (ie === 1 && xe)
        return ce();
    }
  }, on = (ie) => {
    const ke = Math.pow(h, ie - 1);
    if (!Se) {
      if (ie === 0 || ie === 1)
        return;
      if (ie !== 1)
        return [1, ke];
    }
    if (H)
      return ie === 1 || ie === 0 ? void 0 : [1, ge(ke, Math.pow(h, ie - 2))];
    if (ae) {
      if (ie === 0)
        return;
      if (ie === D)
        return [1, ke];
      if (ie !== 0)
        return [1, ge(ke, Math.pow(h, ie))];
    }
  }, an = (ie) => ie === 0 ? -we.width : ie === 1 ? 0 : (ie - 1) * f;
  return /* @__PURE__ */ re.createElement(
    "div",
    {
      className: i2({ class: i }),
      "data-testid": On("@paloma-carousel-id"),
      style: { maxWidth: te }
    },
    /* @__PURE__ */ re.createElement("div", { className: "flex flex-grow justify-between items-center gap-4" }, /* @__PURE__ */ re.createElement(
      f2,
      {
        handleBackPress: Y,
        handleForwardPress: G,
        titleTag: g,
        ...d
      }
    )),
    /* @__PURE__ */ re.createElement("div", { className: "flex flex-col items-start gap-6" }, /* @__PURE__ */ re.createElement(
      "div",
      {
        className: "flex relative z-0 select-none",
        "data-carousel-card-container": !0,
        "data-testid": On("@paloma-carousel-card-container-id"),
        style: { height: we.height, width: we.width }
      },
      F.map((ie, ke) => {
        if (ke > D)
          return;
        const Ut = {
          index: ke,
          left: an(ke),
          opacity: li(ke),
          scale: on(ke),
          translateX: nn(ke),
          zIndex: ke === 0 ? 2 : ke === 1 ? 1 : -(M * ke)
        };
        return /* @__PURE__ */ re.createElement(
          Hm.div,
          {
            ...I(ke),
            className: a2({
              class: r,
              isFirst: ke === 0,
              withBackdropBlur: p
            }),
            key: ke,
            onDragStart: (Rr) => Rr.preventDefault(),
            style: Ut
          },
          ie
        );
      }),
      /* @__PURE__ */ re.createElement(
        "div",
        {
          className: "absolute",
          "data-testid": On("@paloma-carousel-last-id"),
          ref: k,
          style: {
            left: an(D),
            scale: `1 ${Math.pow(h, D - 1)}`,
            zIndex: M * -(M + 1)
          }
        },
        F[M - 1]
      )
    ), s && /* @__PURE__ */ re.createElement(
      l2,
      {
        currentSlide: C,
        isAnimatingBackward: ae,
        isAnimatingForward: H,
        items: n,
        motion: R.motion
      }
    ))
  );
};
function mh({ card: r }) {
  const n = /* @__PURE__ */ fe.jsxs("article", { className: "block-stat-slider__paloma-card", children: [
    r.image && /* @__PURE__ */ fe.jsx(
      "img",
      {
        className: "block-stat-slider__paloma-image",
        src: r.image,
        alt: r.title,
        loading: "lazy"
      }
    ),
    /* @__PURE__ */ fe.jsx("span", { className: "block-stat-slider__paloma-title", children: r.title })
  ] });
  return r.link ? /* @__PURE__ */ fe.jsx("a", { className: "block-stat-slider__paloma-link", href: r.link, children: n }) : n;
}
function h2({ cards: r = [], title: n = "Help by games" }) {
  const i = r.filter((s) => s == null ? void 0 : s.title).slice(0, 10);
  return i.length ? i.length === 1 ? /* @__PURE__ */ fe.jsxs("section", { className: "block-stat-slider", children: [
    /* @__PURE__ */ fe.jsx("h2", { className: "block-stat-slider__title", children: n }),
    /* @__PURE__ */ fe.jsx(mh, { card: i[0] })
  ] }) : /* @__PURE__ */ fe.jsx("section", { className: "block-stat-slider", children: /* @__PURE__ */ fe.jsx(
    p2,
    {
      title: n,
      arrows: !0,
      dots: !0,
      backArrowLabel: "Previous games",
      forwardArrowLabel: "Next games",
      className: "block-stat-slider__paloma-carousel",
      carouselItemWrapperClassname: "block-stat-slider__paloma-item",
      children: i.map((s) => /* @__PURE__ */ fe.jsx(mh, { card: s }, `${s.title}-${s.link || "card"}`))
    }
  ) }) : null;
}
function m2({ cards: r = [] }) {
  return /* @__PURE__ */ fe.jsxs("main", { className: "ea-react-homepage-layout", children: [
    /* @__PURE__ */ fe.jsx(h2, { cards: r }),
    /* @__PURE__ */ fe.jsx(Nw, {})
  ] });
}
if (typeof document < "u" && !document.querySelector("[data-ea-paloma-styles]")) {
  const r = document.createElement("style");
  r.dataset.eaPalomaStyles = "true", r.textContent = rv, document.head.appendChild(r);
}
const Da = /* @__PURE__ */ new WeakMap();
function g2(r, n, i = {}) {
  if (!r || !n)
    return;
  let s = Da.get(r);
  s || (s = tv.createRoot(r), Da.set(r, s)), s.render(re.createElement(n, i));
}
function y2(r) {
  const n = Da.get(r);
  n && (n.unmount(), Da.delete(r));
}
function b2(r, n = {}) {
  g2(r, m2, n);
}
export {
  g2 as mount,
  b2 as mountHomepage,
  y2 as unmount
};
