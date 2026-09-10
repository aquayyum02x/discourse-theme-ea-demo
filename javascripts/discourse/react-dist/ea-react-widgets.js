var Zc = (o) => {
  throw TypeError(o);
};
var Jc = (o, s, l) => s.has(o) || Zc("Cannot " + l);
var ed = (o, s, l) => (Jc(o, s, "read from private field"), l ? l.call(o) : s.get(o)), td = (o, s, l) => s.has(o) ? Zc("Cannot add the same private member more than once") : s instanceof WeakSet ? s.add(o) : s.set(o, l), xl = (o, s, l, p) => (Jc(o, s, "write to private field"), p ? p.call(o, l) : s.set(o, l), l);
function Sh(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var kl = { exports: {} }, le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rd;
function Ch() {
  if (rd) return le;
  rd = 1;
  var o = Symbol.for("react.element"), s = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), h = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), c = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), k = Symbol.iterator;
  function g(x) {
    return x === null || typeof x != "object" ? null : (x = k && x[k] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var S = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, I = Object.assign, b = {};
  function T(x, A, ae) {
    this.props = x, this.context = A, this.refs = b, this.updater = ae || S;
  }
  T.prototype.isReactComponent = {}, T.prototype.setState = function(x, A) {
    if (typeof x != "object" && typeof x != "function" && x != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, x, A, "setState");
  }, T.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function G() {
  }
  G.prototype = T.prototype;
  function X(x, A, ae) {
    this.props = x, this.context = A, this.refs = b, this.updater = ae || S;
  }
  var ne = X.prototype = new G();
  ne.constructor = X, I(ne, T.prototype), ne.isPureReactComponent = !0;
  var ee = Array.isArray, we = Object.prototype.hasOwnProperty, _e = { current: null }, fe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ee(x, A, ae) {
    var ie, se = {}, ue = null, ve = null;
    if (A != null) for (ie in A.ref !== void 0 && (ve = A.ref), A.key !== void 0 && (ue = "" + A.key), A) we.call(A, ie) && !fe.hasOwnProperty(ie) && (se[ie] = A[ie]);
    var pe = arguments.length - 2;
    if (pe === 1) se.children = ae;
    else if (1 < pe) {
      for (var Se = Array(pe), at = 0; at < pe; at++) Se[at] = arguments[at + 2];
      se.children = Se;
    }
    if (x && x.defaultProps) for (ie in pe = x.defaultProps, pe) se[ie] === void 0 && (se[ie] = pe[ie]);
    return { $$typeof: o, type: x, key: ue, ref: ve, props: se, _owner: _e.current };
  }
  function $e(x, A) {
    return { $$typeof: o, type: x.type, key: A, ref: x.ref, props: x.props, _owner: x._owner };
  }
  function Ie(x) {
    return typeof x == "object" && x !== null && x.$$typeof === o;
  }
  function Ve(x) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(ae) {
      return A[ae];
    });
  }
  var V = /\/+/g;
  function J(x, A) {
    return typeof x == "object" && x !== null && x.key != null ? Ve("" + x.key) : A.toString(36);
  }
  function P(x, A, ae, ie, se) {
    var ue = typeof x;
    (ue === "undefined" || ue === "boolean") && (x = null);
    var ve = !1;
    if (x === null) ve = !0;
    else switch (ue) {
      case "string":
      case "number":
        ve = !0;
        break;
      case "object":
        switch (x.$$typeof) {
          case o:
          case s:
            ve = !0;
        }
    }
    if (ve) return ve = x, se = se(ve), x = ie === "" ? "." + J(ve, 0) : ie, ee(se) ? (ae = "", x != null && (ae = x.replace(V, "$&/") + "/"), P(se, A, ae, "", function(at) {
      return at;
    })) : se != null && (Ie(se) && (se = $e(se, ae + (!se.key || ve && ve.key === se.key ? "" : ("" + se.key).replace(V, "$&/") + "/") + x)), A.push(se)), 1;
    if (ve = 0, ie = ie === "" ? "." : ie + ":", ee(x)) for (var pe = 0; pe < x.length; pe++) {
      ue = x[pe];
      var Se = ie + J(ue, pe);
      ve += P(ue, A, ae, Se, se);
    }
    else if (Se = g(x), typeof Se == "function") for (x = Se.call(x), pe = 0; !(ue = x.next()).done; ) ue = ue.value, Se = ie + J(ue, pe++), ve += P(ue, A, ae, Se, se);
    else if (ue === "object") throw A = String(x), Error("Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead.");
    return ve;
  }
  function U(x, A, ae) {
    if (x == null) return x;
    var ie = [], se = 0;
    return P(x, ie, "", "", function(ue) {
      return A.call(ae, ue, se++);
    }), ie;
  }
  function H(x) {
    if (x._status === -1) {
      var A = x._result;
      A = A(), A.then(function(ae) {
        (x._status === 0 || x._status === -1) && (x._status = 1, x._result = ae);
      }, function(ae) {
        (x._status === 0 || x._status === -1) && (x._status = 2, x._result = ae);
      }), x._status === -1 && (x._status = 0, x._result = A);
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var L = { current: null }, N = { transition: null }, $ = { ReactCurrentDispatcher: L, ReactCurrentBatchConfig: N, ReactCurrentOwner: _e };
  function M() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return le.Children = { map: U, forEach: function(x, A, ae) {
    U(x, function() {
      A.apply(this, arguments);
    }, ae);
  }, count: function(x) {
    var A = 0;
    return U(x, function() {
      A++;
    }), A;
  }, toArray: function(x) {
    return U(x, function(A) {
      return A;
    }) || [];
  }, only: function(x) {
    if (!Ie(x)) throw Error("React.Children.only expected to receive a single React element child.");
    return x;
  } }, le.Component = T, le.Fragment = l, le.Profiler = d, le.PureComponent = X, le.StrictMode = p, le.Suspense = f, le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $, le.act = M, le.cloneElement = function(x, A, ae) {
    if (x == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + x + ".");
    var ie = I({}, x.props), se = x.key, ue = x.ref, ve = x._owner;
    if (A != null) {
      if (A.ref !== void 0 && (ue = A.ref, ve = _e.current), A.key !== void 0 && (se = "" + A.key), x.type && x.type.defaultProps) var pe = x.type.defaultProps;
      for (Se in A) we.call(A, Se) && !fe.hasOwnProperty(Se) && (ie[Se] = A[Se] === void 0 && pe !== void 0 ? pe[Se] : A[Se]);
    }
    var Se = arguments.length - 2;
    if (Se === 1) ie.children = ae;
    else if (1 < Se) {
      pe = Array(Se);
      for (var at = 0; at < Se; at++) pe[at] = arguments[at + 2];
      ie.children = pe;
    }
    return { $$typeof: o, type: x.type, key: se, ref: ue, props: ie, _owner: ve };
  }, le.createContext = function(x) {
    return x = { $$typeof: h, _currentValue: x, _currentValue2: x, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, x.Provider = { $$typeof: w, _context: x }, x.Consumer = x;
  }, le.createElement = Ee, le.createFactory = function(x) {
    var A = Ee.bind(null, x);
    return A.type = x, A;
  }, le.createRef = function() {
    return { current: null };
  }, le.forwardRef = function(x) {
    return { $$typeof: v, render: x };
  }, le.isValidElement = Ie, le.lazy = function(x) {
    return { $$typeof: E, _payload: { _status: -1, _result: x }, _init: H };
  }, le.memo = function(x, A) {
    return { $$typeof: c, type: x, compare: A === void 0 ? null : A };
  }, le.startTransition = function(x) {
    var A = N.transition;
    N.transition = {};
    try {
      x();
    } finally {
      N.transition = A;
    }
  }, le.unstable_act = M, le.useCallback = function(x, A) {
    return L.current.useCallback(x, A);
  }, le.useContext = function(x) {
    return L.current.useContext(x);
  }, le.useDebugValue = function() {
  }, le.useDeferredValue = function(x) {
    return L.current.useDeferredValue(x);
  }, le.useEffect = function(x, A) {
    return L.current.useEffect(x, A);
  }, le.useId = function() {
    return L.current.useId();
  }, le.useImperativeHandle = function(x, A, ae) {
    return L.current.useImperativeHandle(x, A, ae);
  }, le.useInsertionEffect = function(x, A) {
    return L.current.useInsertionEffect(x, A);
  }, le.useLayoutEffect = function(x, A) {
    return L.current.useLayoutEffect(x, A);
  }, le.useMemo = function(x, A) {
    return L.current.useMemo(x, A);
  }, le.useReducer = function(x, A, ae) {
    return L.current.useReducer(x, A, ae);
  }, le.useRef = function(x) {
    return L.current.useRef(x);
  }, le.useState = function(x) {
    return L.current.useState(x);
  }, le.useSyncExternalStore = function(x, A, ae) {
    return L.current.useSyncExternalStore(x, A, ae);
  }, le.useTransition = function() {
    return L.current.useTransition();
  }, le.version = "18.3.1", le;
}
var nd;
function Kl() {
  return nd || (nd = 1, kl.exports = Ch()), kl.exports;
}
var re = Kl();
const me = /* @__PURE__ */ Sh(re);
var da = {}, _l = { exports: {} }, nt = {}, El = { exports: {} }, Sl = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var od;
function Fh() {
  return od || (od = 1, (function(o) {
    function s(N, $) {
      var M = N.length;
      N.push($);
      e: for (; 0 < M; ) {
        var x = M - 1 >>> 1, A = N[x];
        if (0 < d(A, $)) N[x] = $, N[M] = A, M = x;
        else break e;
      }
    }
    function l(N) {
      return N.length === 0 ? null : N[0];
    }
    function p(N) {
      if (N.length === 0) return null;
      var $ = N[0], M = N.pop();
      if (M !== $) {
        N[0] = M;
        e: for (var x = 0, A = N.length, ae = A >>> 1; x < ae; ) {
          var ie = 2 * (x + 1) - 1, se = N[ie], ue = ie + 1, ve = N[ue];
          if (0 > d(se, M)) ue < A && 0 > d(ve, se) ? (N[x] = ve, N[ue] = M, x = ue) : (N[x] = se, N[ie] = M, x = ie);
          else if (ue < A && 0 > d(ve, M)) N[x] = ve, N[ue] = M, x = ue;
          else break e;
        }
      }
      return $;
    }
    function d(N, $) {
      var M = N.sortIndex - $.sortIndex;
      return M !== 0 ? M : N.id - $.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var w = performance;
      o.unstable_now = function() {
        return w.now();
      };
    } else {
      var h = Date, v = h.now();
      o.unstable_now = function() {
        return h.now() - v;
      };
    }
    var f = [], c = [], E = 1, k = null, g = 3, S = !1, I = !1, b = !1, T = typeof setTimeout == "function" ? setTimeout : null, G = typeof clearTimeout == "function" ? clearTimeout : null, X = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ne(N) {
      for (var $ = l(c); $ !== null; ) {
        if ($.callback === null) p(c);
        else if ($.startTime <= N) p(c), $.sortIndex = $.expirationTime, s(f, $);
        else break;
        $ = l(c);
      }
    }
    function ee(N) {
      if (b = !1, ne(N), !I) if (l(f) !== null) I = !0, H(we);
      else {
        var $ = l(c);
        $ !== null && L(ee, $.startTime - N);
      }
    }
    function we(N, $) {
      I = !1, b && (b = !1, G(Ee), Ee = -1), S = !0;
      var M = g;
      try {
        for (ne($), k = l(f); k !== null && (!(k.expirationTime > $) || N && !Ve()); ) {
          var x = k.callback;
          if (typeof x == "function") {
            k.callback = null, g = k.priorityLevel;
            var A = x(k.expirationTime <= $);
            $ = o.unstable_now(), typeof A == "function" ? k.callback = A : k === l(f) && p(f), ne($);
          } else p(f);
          k = l(f);
        }
        if (k !== null) var ae = !0;
        else {
          var ie = l(c);
          ie !== null && L(ee, ie.startTime - $), ae = !1;
        }
        return ae;
      } finally {
        k = null, g = M, S = !1;
      }
    }
    var _e = !1, fe = null, Ee = -1, $e = 5, Ie = -1;
    function Ve() {
      return !(o.unstable_now() - Ie < $e);
    }
    function V() {
      if (fe !== null) {
        var N = o.unstable_now();
        Ie = N;
        var $ = !0;
        try {
          $ = fe(!0, N);
        } finally {
          $ ? J() : (_e = !1, fe = null);
        }
      } else _e = !1;
    }
    var J;
    if (typeof X == "function") J = function() {
      X(V);
    };
    else if (typeof MessageChannel < "u") {
      var P = new MessageChannel(), U = P.port2;
      P.port1.onmessage = V, J = function() {
        U.postMessage(null);
      };
    } else J = function() {
      T(V, 0);
    };
    function H(N) {
      fe = N, _e || (_e = !0, J());
    }
    function L(N, $) {
      Ee = T(function() {
        N(o.unstable_now());
      }, $);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(N) {
      N.callback = null;
    }, o.unstable_continueExecution = function() {
      I || S || (I = !0, H(we));
    }, o.unstable_forceFrameRate = function(N) {
      0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $e = 0 < N ? Math.floor(1e3 / N) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return g;
    }, o.unstable_getFirstCallbackNode = function() {
      return l(f);
    }, o.unstable_next = function(N) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = g;
      }
      var M = g;
      g = $;
      try {
        return N();
      } finally {
        g = M;
      }
    }, o.unstable_pauseExecution = function() {
    }, o.unstable_requestPaint = function() {
    }, o.unstable_runWithPriority = function(N, $) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var M = g;
      g = N;
      try {
        return $();
      } finally {
        g = M;
      }
    }, o.unstable_scheduleCallback = function(N, $, M) {
      var x = o.unstable_now();
      switch (typeof M == "object" && M !== null ? (M = M.delay, M = typeof M == "number" && 0 < M ? x + M : x) : M = x, N) {
        case 1:
          var A = -1;
          break;
        case 2:
          A = 250;
          break;
        case 5:
          A = 1073741823;
          break;
        case 4:
          A = 1e4;
          break;
        default:
          A = 5e3;
      }
      return A = M + A, N = { id: E++, callback: $, priorityLevel: N, startTime: M, expirationTime: A, sortIndex: -1 }, M > x ? (N.sortIndex = M, s(c, N), l(f) === null && N === l(c) && (b ? (G(Ee), Ee = -1) : b = !0, L(ee, M - x))) : (N.sortIndex = A, s(f, N), I || S || (I = !0, H(we))), N;
    }, o.unstable_shouldYield = Ve, o.unstable_wrapCallback = function(N) {
      var $ = g;
      return function() {
        var M = g;
        g = $;
        try {
          return N.apply(this, arguments);
        } finally {
          g = M;
        }
      };
    };
  })(Sl)), Sl;
}
var ad;
function Ph() {
  return ad || (ad = 1, El.exports = Fh()), El.exports;
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
var id;
function zh() {
  if (id) return nt;
  id = 1;
  var o = Kl(), s = Ph();
  function l(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var p = /* @__PURE__ */ new Set(), d = {};
  function w(e, t) {
    h(e, t), h(e + "Capture", t);
  }
  function h(e, t) {
    for (d[e] = t, e = 0; e < t.length; e++) p.add(t[e]);
  }
  var v = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), f = Object.prototype.hasOwnProperty, c = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, E = {}, k = {};
  function g(e) {
    return f.call(k, e) ? !0 : f.call(E, e) ? !1 : c.test(e) ? k[e] = !0 : (E[e] = !0, !1);
  }
  function S(e, t, r, n) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return n ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function I(e, t, r, n) {
    if (t === null || typeof t > "u" || S(e, t, r, n)) return !0;
    if (n) return !1;
    if (r !== null) switch (r.type) {
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
  function b(e, t, r, n, a, i, u) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = a, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = u;
  }
  var T = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    T[e] = new b(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    T[t] = new b(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    T[e] = new b(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    T[e] = new b(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    T[e] = new b(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    T[e] = new b(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    T[e] = new b(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    T[e] = new b(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    T[e] = new b(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var G = /[\-:]([a-z])/g;
  function X(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      G,
      X
    );
    T[t] = new b(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(G, X);
    T[t] = new b(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(G, X);
    T[t] = new b(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    T[e] = new b(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), T.xlinkHref = new b("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    T[e] = new b(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function ne(e, t, r, n) {
    var a = T.hasOwnProperty(t) ? T[t] : null;
    (a !== null ? a.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (I(t, r, a, n) && (r = null), n || a === null ? g(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : a.mustUseProperty ? e[a.propertyName] = r === null ? a.type === 3 ? !1 : "" : r : (t = a.attributeName, n = a.attributeNamespace, r === null ? e.removeAttribute(t) : (a = a.type, r = a === 3 || a === 4 && r === !0 ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
  }
  var ee = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, we = Symbol.for("react.element"), _e = Symbol.for("react.portal"), fe = Symbol.for("react.fragment"), Ee = Symbol.for("react.strict_mode"), $e = Symbol.for("react.profiler"), Ie = Symbol.for("react.provider"), Ve = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), N = Symbol.iterator;
  function $(e) {
    return e === null || typeof e != "object" ? null : (e = N && e[N] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var M = Object.assign, x;
  function A(e) {
    if (x === void 0) try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      x = t && t[1] || "";
    }
    return `
` + x + e;
  }
  var ae = !1;
  function ie(e, t) {
    if (!e || ae) return "";
    ae = !0;
    var r = Error.prepareStackTrace;
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
          var n = z;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (z) {
          n = z;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (z) {
          n = z;
        }
        e();
      }
    } catch (z) {
      if (z && n && typeof z.stack == "string") {
        for (var a = z.stack.split(`
`), i = n.stack.split(`
`), u = a.length - 1, m = i.length - 1; 1 <= u && 0 <= m && a[u] !== i[m]; ) m--;
        for (; 1 <= u && 0 <= m; u--, m--) if (a[u] !== i[m]) {
          if (u !== 1 || m !== 1)
            do
              if (u--, m--, 0 > m || a[u] !== i[m]) {
                var y = `
` + a[u].replace(" at new ", " at ");
                return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), y;
              }
            while (1 <= u && 0 <= m);
          break;
        }
      }
    } finally {
      ae = !1, Error.prepareStackTrace = r;
    }
    return (e = e ? e.displayName || e.name : "") ? A(e) : "";
  }
  function se(e) {
    switch (e.tag) {
      case 5:
        return A(e.type);
      case 16:
        return A("Lazy");
      case 13:
        return A("Suspense");
      case 19:
        return A("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = ie(e.type, !1), e;
      case 11:
        return e = ie(e.type.render, !1), e;
      case 1:
        return e = ie(e.type, !0), e;
      default:
        return "";
    }
  }
  function ue(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case fe:
        return "Fragment";
      case _e:
        return "Portal";
      case $e:
        return "Profiler";
      case Ee:
        return "StrictMode";
      case J:
        return "Suspense";
      case P:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Ve:
        return (e.displayName || "Context") + ".Consumer";
      case Ie:
        return (e._context.displayName || "Context") + ".Provider";
      case V:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case U:
        return t = e.displayName || null, t !== null ? t : ue(e.type) || "Memo";
      case H:
        t = e._payload, e = e._init;
        try {
          return ue(e(t));
        } catch {
        }
    }
    return null;
  }
  function ve(e) {
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
        return ue(t);
      case 8:
        return t === Ee ? "StrictMode" : "Mode";
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
  function pe(e) {
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
  function Se(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function at(e) {
    var t = Se(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), n = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
      var a = r.get, i = r.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return a.call(this);
      }, set: function(u) {
        n = "" + u, i.call(this, u);
      } }), Object.defineProperty(e, t, { enumerable: r.enumerable }), { getValue: function() {
        return n;
      }, setValue: function(u) {
        n = "" + u;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function eo(e) {
    e._valueTracker || (e._valueTracker = at(e));
  }
  function os(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(), n = "";
    return e && (n = Se(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== r ? (t.setValue(e), !0) : !1;
  }
  function to(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Pa(e, t) {
    var r = t.checked;
    return M({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
  }
  function as(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue, n = t.checked != null ? t.checked : t.defaultChecked;
    r = pe(t.value != null ? t.value : r), e._wrapperState = { initialChecked: n, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function is(e, t) {
    t = t.checked, t != null && ne(e, "checked", t, !1);
  }
  function za(e, t) {
    is(e, t);
    var r = pe(t.value), n = t.type;
    if (r != null) n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
    else if (n === "submit" || n === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? $a(e, t.type, r) : t.hasOwnProperty("defaultValue") && $a(e, t.type, pe(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function ls(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var n = t.type;
      if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t;
    }
    r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r);
  }
  function $a(e, t, r) {
    (t !== "number" || to(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var un = Array.isArray;
  function zr(e, t, r, n) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < r.length; a++) t["$" + r[a]] = !0;
      for (r = 0; r < e.length; r++) a = t.hasOwnProperty("$" + e[r].value), e[r].selected !== a && (e[r].selected = a), a && n && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + pe(r), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === r) {
          e[a].selected = !0, n && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ta(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(l(91));
    return M({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function ss(e, t) {
    var r = t.value;
    if (r == null) {
      if (r = t.children, t = t.defaultValue, r != null) {
        if (t != null) throw Error(l(92));
        if (un(r)) {
          if (1 < r.length) throw Error(l(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ""), r = t;
    }
    e._wrapperState = { initialValue: pe(r) };
  }
  function us(e, t) {
    var r = pe(t.value), n = pe(t.defaultValue);
    r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n);
  }
  function cs(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function ds(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Aa(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ds(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var ro, fs = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, a) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, r, n, a);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (ro = ro || document.createElement("div"), ro.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ro.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function cn(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var dn = {
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
  }, zf = ["Webkit", "ms", "Moz", "O"];
  Object.keys(dn).forEach(function(e) {
    zf.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), dn[t] = dn[e];
    });
  });
  function ps(e, t, r) {
    return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || dn.hasOwnProperty(e) && dn[e] ? ("" + t).trim() : t + "px";
  }
  function hs(e, t) {
    e = e.style;
    for (var r in t) if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0, a = ps(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, a) : e[r] = a;
    }
  }
  var $f = M({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Na(e, t) {
    if (t) {
      if ($f[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(l(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(l(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(l(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(l(62));
    }
  }
  function La(e, t) {
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
  var Ma = null;
  function Ra(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ia = null, $r = null, Tr = null;
  function ms(e) {
    if (e = Nn(e)) {
      if (typeof Ia != "function") throw Error(l(280));
      var t = e.stateNode;
      t && (t = Co(t), Ia(e.stateNode, e.type, t));
    }
  }
  function gs(e) {
    $r ? Tr ? Tr.push(e) : Tr = [e] : $r = e;
  }
  function vs() {
    if ($r) {
      var e = $r, t = Tr;
      if (Tr = $r = null, ms(e), t) for (e = 0; e < t.length; e++) ms(t[e]);
    }
  }
  function ws(e, t) {
    return e(t);
  }
  function ys() {
  }
  var Da = !1;
  function bs(e, t, r) {
    if (Da) return e(t, r);
    Da = !0;
    try {
      return ws(e, t, r);
    } finally {
      Da = !1, ($r !== null || Tr !== null) && (ys(), vs());
    }
  }
  function fn(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var n = Co(r);
    if (n === null) return null;
    r = n[t];
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
        (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(l(231, t, typeof r));
    return r;
  }
  var Oa = !1;
  if (v) try {
    var pn = {};
    Object.defineProperty(pn, "passive", { get: function() {
      Oa = !0;
    } }), window.addEventListener("test", pn, pn), window.removeEventListener("test", pn, pn);
  } catch {
    Oa = !1;
  }
  function Tf(e, t, r, n, a, i, u, m, y) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, z);
    } catch (D) {
      this.onError(D);
    }
  }
  var hn = !1, no = null, oo = !1, ja = null, Af = { onError: function(e) {
    hn = !0, no = e;
  } };
  function Nf(e, t, r, n, a, i, u, m, y) {
    hn = !1, no = null, Tf.apply(Af, arguments);
  }
  function Lf(e, t, r, n, a, i, u, m, y) {
    if (Nf.apply(this, arguments), hn) {
      if (hn) {
        var z = no;
        hn = !1, no = null;
      } else throw Error(l(198));
      oo || (oo = !0, ja = z);
    }
  }
  function ur(e) {
    var t = e, r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (r = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function xs(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function ks(e) {
    if (ur(e) !== e) throw Error(l(188));
  }
  function Mf(e) {
    var t = e.alternate;
    if (!t) {
      if (t = ur(e), t === null) throw Error(l(188));
      return t !== e ? null : e;
    }
    for (var r = e, n = t; ; ) {
      var a = r.return;
      if (a === null) break;
      var i = a.alternate;
      if (i === null) {
        if (n = a.return, n !== null) {
          r = n;
          continue;
        }
        break;
      }
      if (a.child === i.child) {
        for (i = a.child; i; ) {
          if (i === r) return ks(a), e;
          if (i === n) return ks(a), t;
          i = i.sibling;
        }
        throw Error(l(188));
      }
      if (r.return !== n.return) r = a, n = i;
      else {
        for (var u = !1, m = a.child; m; ) {
          if (m === r) {
            u = !0, r = a, n = i;
            break;
          }
          if (m === n) {
            u = !0, n = a, r = i;
            break;
          }
          m = m.sibling;
        }
        if (!u) {
          for (m = i.child; m; ) {
            if (m === r) {
              u = !0, r = i, n = a;
              break;
            }
            if (m === n) {
              u = !0, n = i, r = a;
              break;
            }
            m = m.sibling;
          }
          if (!u) throw Error(l(189));
        }
      }
      if (r.alternate !== n) throw Error(l(190));
    }
    if (r.tag !== 3) throw Error(l(188));
    return r.stateNode.current === r ? e : t;
  }
  function _s(e) {
    return e = Mf(e), e !== null ? Es(e) : null;
  }
  function Es(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Es(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ss = s.unstable_scheduleCallback, Cs = s.unstable_cancelCallback, Rf = s.unstable_shouldYield, If = s.unstable_requestPaint, Ae = s.unstable_now, Df = s.unstable_getCurrentPriorityLevel, Ua = s.unstable_ImmediatePriority, Fs = s.unstable_UserBlockingPriority, ao = s.unstable_NormalPriority, Of = s.unstable_LowPriority, Ps = s.unstable_IdlePriority, io = null, Et = null;
  function jf(e) {
    if (Et && typeof Et.onCommitFiberRoot == "function") try {
      Et.onCommitFiberRoot(io, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var vt = Math.clz32 ? Math.clz32 : Bf, Uf = Math.log, Vf = Math.LN2;
  function Bf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Uf(e) / Vf | 0) | 0;
  }
  var lo = 64, so = 4194304;
  function mn(e) {
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
  function uo(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var n = 0, a = e.suspendedLanes, i = e.pingedLanes, u = r & 268435455;
    if (u !== 0) {
      var m = u & ~a;
      m !== 0 ? n = mn(m) : (i &= u, i !== 0 && (n = mn(i)));
    } else u = r & ~a, u !== 0 ? n = mn(u) : i !== 0 && (n = mn(i));
    if (n === 0) return 0;
    if (t !== 0 && t !== n && (t & a) === 0 && (a = n & -n, i = t & -t, a >= i || a === 16 && (i & 4194240) !== 0)) return t;
    if ((n & 4) !== 0 && (n |= r & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= n; 0 < t; ) r = 31 - vt(t), a = 1 << r, n |= e[r], t &= ~a;
    return n;
  }
  function Hf(e, t) {
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
  function Wf(e, t) {
    for (var r = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
      var u = 31 - vt(i), m = 1 << u, y = a[u];
      y === -1 ? ((m & r) === 0 || (m & n) !== 0) && (a[u] = Hf(m, t)) : y <= t && (e.expiredLanes |= m), i &= ~m;
    }
  }
  function Va(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function zs() {
    var e = lo;
    return lo <<= 1, (lo & 4194240) === 0 && (lo = 64), e;
  }
  function Ba(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function gn(e, t, r) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - vt(t), e[t] = r;
  }
  function Yf(e, t) {
    var r = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var n = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var a = 31 - vt(r), i = 1 << a;
      t[a] = 0, n[a] = -1, e[a] = -1, r &= ~i;
    }
  }
  function Ha(e, t) {
    var r = e.entangledLanes |= t;
    for (e = e.entanglements; r; ) {
      var n = 31 - vt(r), a = 1 << n;
      a & t | e[n] & t && (e[n] |= t), r &= ~a;
    }
  }
  var he = 0;
  function $s(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Ts, Wa, As, Ns, Ls, Ya = !1, co = [], Vt = null, Bt = null, Ht = null, vn = /* @__PURE__ */ new Map(), wn = /* @__PURE__ */ new Map(), Wt = [], Kf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ms(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Vt = null;
        break;
      case "dragenter":
      case "dragleave":
        Bt = null;
        break;
      case "mouseover":
      case "mouseout":
        Ht = null;
        break;
      case "pointerover":
      case "pointerout":
        vn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        wn.delete(t.pointerId);
    }
  }
  function yn(e, t, r, n, a, i) {
    return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: r, eventSystemFlags: n, nativeEvent: i, targetContainers: [a] }, t !== null && (t = Nn(t), t !== null && Wa(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function Xf(e, t, r, n, a) {
    switch (t) {
      case "focusin":
        return Vt = yn(Vt, e, t, r, n, a), !0;
      case "dragenter":
        return Bt = yn(Bt, e, t, r, n, a), !0;
      case "mouseover":
        return Ht = yn(Ht, e, t, r, n, a), !0;
      case "pointerover":
        var i = a.pointerId;
        return vn.set(i, yn(vn.get(i) || null, e, t, r, n, a)), !0;
      case "gotpointercapture":
        return i = a.pointerId, wn.set(i, yn(wn.get(i) || null, e, t, r, n, a)), !0;
    }
    return !1;
  }
  function Rs(e) {
    var t = cr(e.target);
    if (t !== null) {
      var r = ur(t);
      if (r !== null) {
        if (t = r.tag, t === 13) {
          if (t = xs(r), t !== null) {
            e.blockedOn = t, Ls(e.priority, function() {
              As(r);
            });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function fo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = Xa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var n = new r.constructor(r.type, r);
        Ma = n, r.target.dispatchEvent(n), Ma = null;
      } else return t = Nn(r), t !== null && Wa(t), e.blockedOn = r, !1;
      t.shift();
    }
    return !0;
  }
  function Is(e, t, r) {
    fo(e) && r.delete(t);
  }
  function Qf() {
    Ya = !1, Vt !== null && fo(Vt) && (Vt = null), Bt !== null && fo(Bt) && (Bt = null), Ht !== null && fo(Ht) && (Ht = null), vn.forEach(Is), wn.forEach(Is);
  }
  function bn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ya || (Ya = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, Qf)));
  }
  function xn(e) {
    function t(a) {
      return bn(a, e);
    }
    if (0 < co.length) {
      bn(co[0], e);
      for (var r = 1; r < co.length; r++) {
        var n = co[r];
        n.blockedOn === e && (n.blockedOn = null);
      }
    }
    for (Vt !== null && bn(Vt, e), Bt !== null && bn(Bt, e), Ht !== null && bn(Ht, e), vn.forEach(t), wn.forEach(t), r = 0; r < Wt.length; r++) n = Wt[r], n.blockedOn === e && (n.blockedOn = null);
    for (; 0 < Wt.length && (r = Wt[0], r.blockedOn === null); ) Rs(r), r.blockedOn === null && Wt.shift();
  }
  var Ar = ee.ReactCurrentBatchConfig, po = !0;
  function Gf(e, t, r, n) {
    var a = he, i = Ar.transition;
    Ar.transition = null;
    try {
      he = 1, Ka(e, t, r, n);
    } finally {
      he = a, Ar.transition = i;
    }
  }
  function qf(e, t, r, n) {
    var a = he, i = Ar.transition;
    Ar.transition = null;
    try {
      he = 4, Ka(e, t, r, n);
    } finally {
      he = a, Ar.transition = i;
    }
  }
  function Ka(e, t, r, n) {
    if (po) {
      var a = Xa(e, t, r, n);
      if (a === null) di(e, t, n, ho, r), Ms(e, n);
      else if (Xf(a, e, t, r, n)) n.stopPropagation();
      else if (Ms(e, n), t & 4 && -1 < Kf.indexOf(e)) {
        for (; a !== null; ) {
          var i = Nn(a);
          if (i !== null && Ts(i), i = Xa(e, t, r, n), i === null && di(e, t, n, ho, r), i === a) break;
          a = i;
        }
        a !== null && n.stopPropagation();
      } else di(e, t, n, null, r);
    }
  }
  var ho = null;
  function Xa(e, t, r, n) {
    if (ho = null, e = Ra(n), e = cr(e), e !== null) if (t = ur(e), t === null) e = null;
    else if (r = t.tag, r === 13) {
      if (e = xs(t), e !== null) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return ho = e, null;
  }
  function Ds(e) {
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
        switch (Df()) {
          case Ua:
            return 1;
          case Fs:
            return 4;
          case ao:
          case Of:
            return 16;
          case Ps:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Yt = null, Qa = null, mo = null;
  function Os() {
    if (mo) return mo;
    var e, t = Qa, r = t.length, n, a = "value" in Yt ? Yt.value : Yt.textContent, i = a.length;
    for (e = 0; e < r && t[e] === a[e]; e++) ;
    var u = r - e;
    for (n = 1; n <= u && t[r - n] === a[i - n]; n++) ;
    return mo = a.slice(e, 1 < n ? 1 - n : void 0);
  }
  function go(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function vo() {
    return !0;
  }
  function js() {
    return !1;
  }
  function it(e) {
    function t(r, n, a, i, u) {
      this._reactName = r, this._targetInst = a, this.type = n, this.nativeEvent = i, this.target = u, this.currentTarget = null;
      for (var m in e) e.hasOwnProperty(m) && (r = e[m], this[m] = r ? r(i) : i[m]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? vo : js, this.isPropagationStopped = js, this;
    }
    return M(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var r = this.nativeEvent;
      r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = vo);
    }, stopPropagation: function() {
      var r = this.nativeEvent;
      r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = vo);
    }, persist: function() {
    }, isPersistent: vo }), t;
  }
  var Nr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ga = it(Nr), kn = M({}, Nr, { view: 0, detail: 0 }), Zf = it(kn), qa, Za, _n, wo = M({}, kn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ei, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== _n && (_n && e.type === "mousemove" ? (qa = e.screenX - _n.screenX, Za = e.screenY - _n.screenY) : Za = qa = 0, _n = e), qa);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Za;
  } }), Us = it(wo), Jf = M({}, wo, { dataTransfer: 0 }), ep = it(Jf), tp = M({}, kn, { relatedTarget: 0 }), Ja = it(tp), rp = M({}, Nr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), np = it(rp), op = M({}, Nr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), ap = it(op), ip = M({}, Nr, { data: 0 }), Vs = it(ip), lp = {
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
  }, sp = {
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
  }, up = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function cp(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = up[e]) ? !!t[e] : !1;
  }
  function ei() {
    return cp;
  }
  var dp = M({}, kn, { key: function(e) {
    if (e.key) {
      var t = lp[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = go(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? sp[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ei, charCode: function(e) {
    return e.type === "keypress" ? go(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? go(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), fp = it(dp), pp = M({}, wo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Bs = it(pp), hp = M({}, kn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ei }), mp = it(hp), gp = M({}, Nr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), vp = it(gp), wp = M({}, wo, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), yp = it(wp), bp = [9, 13, 27, 32], ti = v && "CompositionEvent" in window, En = null;
  v && "documentMode" in document && (En = document.documentMode);
  var xp = v && "TextEvent" in window && !En, Hs = v && (!ti || En && 8 < En && 11 >= En), Ws = " ", Ys = !1;
  function Ks(e, t) {
    switch (e) {
      case "keyup":
        return bp.indexOf(t.keyCode) !== -1;
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
  function Xs(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Lr = !1;
  function kp(e, t) {
    switch (e) {
      case "compositionend":
        return Xs(t);
      case "keypress":
        return t.which !== 32 ? null : (Ys = !0, Ws);
      case "textInput":
        return e = t.data, e === Ws && Ys ? null : e;
      default:
        return null;
    }
  }
  function _p(e, t) {
    if (Lr) return e === "compositionend" || !ti && Ks(e, t) ? (e = Os(), mo = Qa = Yt = null, Lr = !1, e) : null;
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
        return Hs && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Ep = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Qs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Ep[e.type] : t === "textarea";
  }
  function Gs(e, t, r, n) {
    gs(n), t = _o(t, "onChange"), 0 < t.length && (r = new Ga("onChange", "change", null, r, n), e.push({ event: r, listeners: t }));
  }
  var Sn = null, Cn = null;
  function Sp(e) {
    hu(e, 0);
  }
  function yo(e) {
    var t = Or(e);
    if (os(t)) return e;
  }
  function Cp(e, t) {
    if (e === "change") return t;
  }
  var qs = !1;
  if (v) {
    var ri;
    if (v) {
      var ni = "oninput" in document;
      if (!ni) {
        var Zs = document.createElement("div");
        Zs.setAttribute("oninput", "return;"), ni = typeof Zs.oninput == "function";
      }
      ri = ni;
    } else ri = !1;
    qs = ri && (!document.documentMode || 9 < document.documentMode);
  }
  function Js() {
    Sn && (Sn.detachEvent("onpropertychange", eu), Cn = Sn = null);
  }
  function eu(e) {
    if (e.propertyName === "value" && yo(Cn)) {
      var t = [];
      Gs(t, Cn, e, Ra(e)), bs(Sp, t);
    }
  }
  function Fp(e, t, r) {
    e === "focusin" ? (Js(), Sn = t, Cn = r, Sn.attachEvent("onpropertychange", eu)) : e === "focusout" && Js();
  }
  function Pp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return yo(Cn);
  }
  function zp(e, t) {
    if (e === "click") return yo(t);
  }
  function $p(e, t) {
    if (e === "input" || e === "change") return yo(t);
  }
  function Tp(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var wt = typeof Object.is == "function" ? Object.is : Tp;
  function Fn(e, t) {
    if (wt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var r = Object.keys(e), n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (n = 0; n < r.length; n++) {
      var a = r[n];
      if (!f.call(t, a) || !wt(e[a], t[a])) return !1;
    }
    return !0;
  }
  function tu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ru(e, t) {
    var r = tu(e);
    e = 0;
    for (var n; r; ) {
      if (r.nodeType === 3) {
        if (n = e + r.textContent.length, e <= t && n >= t) return { node: r, offset: t - e };
        e = n;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = tu(r);
    }
  }
  function nu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? nu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function ou() {
    for (var e = window, t = to(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = to(e.document);
    }
    return t;
  }
  function oi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Ap(e) {
    var t = ou(), r = e.focusedElem, n = e.selectionRange;
    if (t !== r && r && r.ownerDocument && nu(r.ownerDocument.documentElement, r)) {
      if (n !== null && oi(r)) {
        if (t = n.start, e = n.end, e === void 0 && (e = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
        else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var a = r.textContent.length, i = Math.min(n.start, a);
          n = n.end === void 0 ? i : Math.min(n.end, a), !e.extend && i > n && (a = n, n = i, i = a), a = ru(r, i);
          var u = ru(
            r,
            n
          );
          a && u && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== u.node || e.focusOffset !== u.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e.removeAllRanges(), i > n ? (e.addRange(t), e.extend(u.node, u.offset)) : (t.setEnd(u.node, u.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++) e = t[r], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Np = v && "documentMode" in document && 11 >= document.documentMode, Mr = null, ai = null, Pn = null, ii = !1;
  function au(e, t, r) {
    var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    ii || Mr == null || Mr !== to(n) || (n = Mr, "selectionStart" in n && oi(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), Pn && Fn(Pn, n) || (Pn = n, n = _o(ai, "onSelect"), 0 < n.length && (t = new Ga("onSelect", "select", null, t, r), e.push({ event: t, listeners: n }), t.target = Mr)));
  }
  function bo(e, t) {
    var r = {};
    return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
  }
  var Rr = { animationend: bo("Animation", "AnimationEnd"), animationiteration: bo("Animation", "AnimationIteration"), animationstart: bo("Animation", "AnimationStart"), transitionend: bo("Transition", "TransitionEnd") }, li = {}, iu = {};
  v && (iu = document.createElement("div").style, "AnimationEvent" in window || (delete Rr.animationend.animation, delete Rr.animationiteration.animation, delete Rr.animationstart.animation), "TransitionEvent" in window || delete Rr.transitionend.transition);
  function xo(e) {
    if (li[e]) return li[e];
    if (!Rr[e]) return e;
    var t = Rr[e], r;
    for (r in t) if (t.hasOwnProperty(r) && r in iu) return li[e] = t[r];
    return e;
  }
  var lu = xo("animationend"), su = xo("animationiteration"), uu = xo("animationstart"), cu = xo("transitionend"), du = /* @__PURE__ */ new Map(), fu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Kt(e, t) {
    du.set(e, t), w(t, [e]);
  }
  for (var si = 0; si < fu.length; si++) {
    var ui = fu[si], Lp = ui.toLowerCase(), Mp = ui[0].toUpperCase() + ui.slice(1);
    Kt(Lp, "on" + Mp);
  }
  Kt(lu, "onAnimationEnd"), Kt(su, "onAnimationIteration"), Kt(uu, "onAnimationStart"), Kt("dblclick", "onDoubleClick"), Kt("focusin", "onFocus"), Kt("focusout", "onBlur"), Kt(cu, "onTransitionEnd"), h("onMouseEnter", ["mouseout", "mouseover"]), h("onMouseLeave", ["mouseout", "mouseover"]), h("onPointerEnter", ["pointerout", "pointerover"]), h("onPointerLeave", ["pointerout", "pointerover"]), w("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), w("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), w("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), w("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), w("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), w("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var zn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Rp = new Set("cancel close invalid load scroll toggle".split(" ").concat(zn));
  function pu(e, t, r) {
    var n = e.type || "unknown-event";
    e.currentTarget = r, Lf(n, t, void 0, e), e.currentTarget = null;
  }
  function hu(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var n = e[r], a = n.event;
      n = n.listeners;
      e: {
        var i = void 0;
        if (t) for (var u = n.length - 1; 0 <= u; u--) {
          var m = n[u], y = m.instance, z = m.currentTarget;
          if (m = m.listener, y !== i && a.isPropagationStopped()) break e;
          pu(a, m, z), i = y;
        }
        else for (u = 0; u < n.length; u++) {
          if (m = n[u], y = m.instance, z = m.currentTarget, m = m.listener, y !== i && a.isPropagationStopped()) break e;
          pu(a, m, z), i = y;
        }
      }
    }
    if (oo) throw e = ja, oo = !1, ja = null, e;
  }
  function be(e, t) {
    var r = t[vi];
    r === void 0 && (r = t[vi] = /* @__PURE__ */ new Set());
    var n = e + "__bubble";
    r.has(n) || (mu(t, e, 2, !1), r.add(n));
  }
  function ci(e, t, r) {
    var n = 0;
    t && (n |= 4), mu(r, e, n, t);
  }
  var ko = "_reactListening" + Math.random().toString(36).slice(2);
  function $n(e) {
    if (!e[ko]) {
      e[ko] = !0, p.forEach(function(r) {
        r !== "selectionchange" && (Rp.has(r) || ci(r, !1, e), ci(r, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ko] || (t[ko] = !0, ci("selectionchange", !1, t));
    }
  }
  function mu(e, t, r, n) {
    switch (Ds(t)) {
      case 1:
        var a = Gf;
        break;
      case 4:
        a = qf;
        break;
      default:
        a = Ka;
    }
    r = a.bind(null, t, r, e), a = void 0, !Oa || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), n ? a !== void 0 ? e.addEventListener(t, r, { capture: !0, passive: a }) : e.addEventListener(t, r, !0) : a !== void 0 ? e.addEventListener(t, r, { passive: a }) : e.addEventListener(t, r, !1);
  }
  function di(e, t, r, n, a) {
    var i = n;
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null) e: for (; ; ) {
      if (n === null) return;
      var u = n.tag;
      if (u === 3 || u === 4) {
        var m = n.stateNode.containerInfo;
        if (m === a || m.nodeType === 8 && m.parentNode === a) break;
        if (u === 4) for (u = n.return; u !== null; ) {
          var y = u.tag;
          if ((y === 3 || y === 4) && (y = u.stateNode.containerInfo, y === a || y.nodeType === 8 && y.parentNode === a)) return;
          u = u.return;
        }
        for (; m !== null; ) {
          if (u = cr(m), u === null) return;
          if (y = u.tag, y === 5 || y === 6) {
            n = i = u;
            continue e;
          }
          m = m.parentNode;
        }
      }
      n = n.return;
    }
    bs(function() {
      var z = i, D = Ra(r), O = [];
      e: {
        var R = du.get(e);
        if (R !== void 0) {
          var B = Ga, Y = e;
          switch (e) {
            case "keypress":
              if (go(r) === 0) break e;
            case "keydown":
            case "keyup":
              B = fp;
              break;
            case "focusin":
              Y = "focus", B = Ja;
              break;
            case "focusout":
              Y = "blur", B = Ja;
              break;
            case "beforeblur":
            case "afterblur":
              B = Ja;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              B = Us;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              B = ep;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              B = mp;
              break;
            case lu:
            case su:
            case uu:
              B = np;
              break;
            case cu:
              B = vp;
              break;
            case "scroll":
              B = Zf;
              break;
            case "wheel":
              B = yp;
              break;
            case "copy":
            case "cut":
            case "paste":
              B = ap;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              B = Bs;
          }
          var K = (t & 4) !== 0, Ne = !K && e === "scroll", C = K ? R !== null ? R + "Capture" : null : R;
          K = [];
          for (var _ = z, F; _ !== null; ) {
            F = _;
            var j = F.stateNode;
            if (F.tag === 5 && j !== null && (F = j, C !== null && (j = fn(_, C), j != null && K.push(Tn(_, j, F)))), Ne) break;
            _ = _.return;
          }
          0 < K.length && (R = new B(R, Y, null, r, D), O.push({ event: R, listeners: K }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (R = e === "mouseover" || e === "pointerover", B = e === "mouseout" || e === "pointerout", R && r !== Ma && (Y = r.relatedTarget || r.fromElement) && (cr(Y) || Y[$t])) break e;
          if ((B || R) && (R = D.window === D ? D : (R = D.ownerDocument) ? R.defaultView || R.parentWindow : window, B ? (Y = r.relatedTarget || r.toElement, B = z, Y = Y ? cr(Y) : null, Y !== null && (Ne = ur(Y), Y !== Ne || Y.tag !== 5 && Y.tag !== 6) && (Y = null)) : (B = null, Y = z), B !== Y)) {
            if (K = Us, j = "onMouseLeave", C = "onMouseEnter", _ = "mouse", (e === "pointerout" || e === "pointerover") && (K = Bs, j = "onPointerLeave", C = "onPointerEnter", _ = "pointer"), Ne = B == null ? R : Or(B), F = Y == null ? R : Or(Y), R = new K(j, _ + "leave", B, r, D), R.target = Ne, R.relatedTarget = F, j = null, cr(D) === z && (K = new K(C, _ + "enter", Y, r, D), K.target = F, K.relatedTarget = Ne, j = K), Ne = j, B && Y) t: {
              for (K = B, C = Y, _ = 0, F = K; F; F = Ir(F)) _++;
              for (F = 0, j = C; j; j = Ir(j)) F++;
              for (; 0 < _ - F; ) K = Ir(K), _--;
              for (; 0 < F - _; ) C = Ir(C), F--;
              for (; _--; ) {
                if (K === C || C !== null && K === C.alternate) break t;
                K = Ir(K), C = Ir(C);
              }
              K = null;
            }
            else K = null;
            B !== null && gu(O, R, B, K, !1), Y !== null && Ne !== null && gu(O, Ne, Y, K, !0);
          }
        }
        e: {
          if (R = z ? Or(z) : window, B = R.nodeName && R.nodeName.toLowerCase(), B === "select" || B === "input" && R.type === "file") var Q = Cp;
          else if (Qs(R)) if (qs) Q = $p;
          else {
            Q = Pp;
            var q = Fp;
          }
          else (B = R.nodeName) && B.toLowerCase() === "input" && (R.type === "checkbox" || R.type === "radio") && (Q = zp);
          if (Q && (Q = Q(e, z))) {
            Gs(O, Q, r, D);
            break e;
          }
          q && q(e, R, z), e === "focusout" && (q = R._wrapperState) && q.controlled && R.type === "number" && $a(R, "number", R.value);
        }
        switch (q = z ? Or(z) : window, e) {
          case "focusin":
            (Qs(q) || q.contentEditable === "true") && (Mr = q, ai = z, Pn = null);
            break;
          case "focusout":
            Pn = ai = Mr = null;
            break;
          case "mousedown":
            ii = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ii = !1, au(O, r, D);
            break;
          case "selectionchange":
            if (Np) break;
          case "keydown":
          case "keyup":
            au(O, r, D);
        }
        var Z;
        if (ti) e: {
          switch (e) {
            case "compositionstart":
              var te = "onCompositionStart";
              break e;
            case "compositionend":
              te = "onCompositionEnd";
              break e;
            case "compositionupdate":
              te = "onCompositionUpdate";
              break e;
          }
          te = void 0;
        }
        else Lr ? Ks(e, r) && (te = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (te = "onCompositionStart");
        te && (Hs && r.locale !== "ko" && (Lr || te !== "onCompositionStart" ? te === "onCompositionEnd" && Lr && (Z = Os()) : (Yt = D, Qa = "value" in Yt ? Yt.value : Yt.textContent, Lr = !0)), q = _o(z, te), 0 < q.length && (te = new Vs(te, e, null, r, D), O.push({ event: te, listeners: q }), Z ? te.data = Z : (Z = Xs(r), Z !== null && (te.data = Z)))), (Z = xp ? kp(e, r) : _p(e, r)) && (z = _o(z, "onBeforeInput"), 0 < z.length && (D = new Vs("onBeforeInput", "beforeinput", null, r, D), O.push({ event: D, listeners: z }), D.data = Z));
      }
      hu(O, t);
    });
  }
  function Tn(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function _o(e, t) {
    for (var r = t + "Capture", n = []; e !== null; ) {
      var a = e, i = a.stateNode;
      a.tag === 5 && i !== null && (a = i, i = fn(e, r), i != null && n.unshift(Tn(e, i, a)), i = fn(e, t), i != null && n.push(Tn(e, i, a))), e = e.return;
    }
    return n;
  }
  function Ir(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function gu(e, t, r, n, a) {
    for (var i = t._reactName, u = []; r !== null && r !== n; ) {
      var m = r, y = m.alternate, z = m.stateNode;
      if (y !== null && y === n) break;
      m.tag === 5 && z !== null && (m = z, a ? (y = fn(r, i), y != null && u.unshift(Tn(r, y, m))) : a || (y = fn(r, i), y != null && u.push(Tn(r, y, m)))), r = r.return;
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var Ip = /\r\n?/g, Dp = /\u0000|\uFFFD/g;
  function vu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Ip, `
`).replace(Dp, "");
  }
  function Eo(e, t, r) {
    if (t = vu(t), vu(e) !== t && r) throw Error(l(425));
  }
  function So() {
  }
  var fi = null, pi = null;
  function hi(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var mi = typeof setTimeout == "function" ? setTimeout : void 0, Op = typeof clearTimeout == "function" ? clearTimeout : void 0, wu = typeof Promise == "function" ? Promise : void 0, jp = typeof queueMicrotask == "function" ? queueMicrotask : typeof wu < "u" ? function(e) {
    return wu.resolve(null).then(e).catch(Up);
  } : mi;
  function Up(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function gi(e, t) {
    var r = t, n = 0;
    do {
      var a = r.nextSibling;
      if (e.removeChild(r), a && a.nodeType === 8) if (r = a.data, r === "/$") {
        if (n === 0) {
          e.removeChild(a), xn(t);
          return;
        }
        n--;
      } else r !== "$" && r !== "$?" && r !== "$!" || n++;
      r = a;
    } while (r);
    xn(t);
  }
  function Xt(e) {
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
  function yu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (t === 0) return e;
          t--;
        } else r === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Dr = Math.random().toString(36).slice(2), St = "__reactFiber$" + Dr, An = "__reactProps$" + Dr, $t = "__reactContainer$" + Dr, vi = "__reactEvents$" + Dr, Vp = "__reactListeners$" + Dr, Bp = "__reactHandles$" + Dr;
  function cr(e) {
    var t = e[St];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if (t = r[$t] || r[St]) {
        if (r = t.alternate, t.child !== null || r !== null && r.child !== null) for (e = yu(e); e !== null; ) {
          if (r = e[St]) return r;
          e = yu(e);
        }
        return t;
      }
      e = r, r = e.parentNode;
    }
    return null;
  }
  function Nn(e) {
    return e = e[St] || e[$t], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Or(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(l(33));
  }
  function Co(e) {
    return e[An] || null;
  }
  var wi = [], jr = -1;
  function Qt(e) {
    return { current: e };
  }
  function xe(e) {
    0 > jr || (e.current = wi[jr], wi[jr] = null, jr--);
  }
  function ye(e, t) {
    jr++, wi[jr] = e.current, e.current = t;
  }
  var Gt = {}, Ye = Qt(Gt), Ze = Qt(!1), dr = Gt;
  function Ur(e, t) {
    var r = e.type.contextTypes;
    if (!r) return Gt;
    var n = e.stateNode;
    if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
    var a = {}, i;
    for (i in r) a[i] = t[i];
    return n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
  }
  function Je(e) {
    return e = e.childContextTypes, e != null;
  }
  function Fo() {
    xe(Ze), xe(Ye);
  }
  function bu(e, t, r) {
    if (Ye.current !== Gt) throw Error(l(168));
    ye(Ye, t), ye(Ze, r);
  }
  function xu(e, t, r) {
    var n = e.stateNode;
    if (t = t.childContextTypes, typeof n.getChildContext != "function") return r;
    n = n.getChildContext();
    for (var a in n) if (!(a in t)) throw Error(l(108, ve(e) || "Unknown", a));
    return M({}, r, n);
  }
  function Po(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Gt, dr = Ye.current, ye(Ye, e), ye(Ze, Ze.current), !0;
  }
  function ku(e, t, r) {
    var n = e.stateNode;
    if (!n) throw Error(l(169));
    r ? (e = xu(e, t, dr), n.__reactInternalMemoizedMergedChildContext = e, xe(Ze), xe(Ye), ye(Ye, e)) : xe(Ze), ye(Ze, r);
  }
  var Tt = null, zo = !1, yi = !1;
  function _u(e) {
    Tt === null ? Tt = [e] : Tt.push(e);
  }
  function Hp(e) {
    zo = !0, _u(e);
  }
  function qt() {
    if (!yi && Tt !== null) {
      yi = !0;
      var e = 0, t = he;
      try {
        var r = Tt;
        for (he = 1; e < r.length; e++) {
          var n = r[e];
          do
            n = n(!0);
          while (n !== null);
        }
        Tt = null, zo = !1;
      } catch (a) {
        throw Tt !== null && (Tt = Tt.slice(e + 1)), Ss(Ua, qt), a;
      } finally {
        he = t, yi = !1;
      }
    }
    return null;
  }
  var Vr = [], Br = 0, $o = null, To = 0, ct = [], dt = 0, fr = null, At = 1, Nt = "";
  function pr(e, t) {
    Vr[Br++] = To, Vr[Br++] = $o, $o = e, To = t;
  }
  function Eu(e, t, r) {
    ct[dt++] = At, ct[dt++] = Nt, ct[dt++] = fr, fr = e;
    var n = At;
    e = Nt;
    var a = 32 - vt(n) - 1;
    n &= ~(1 << a), r += 1;
    var i = 32 - vt(t) + a;
    if (30 < i) {
      var u = a - a % 5;
      i = (n & (1 << u) - 1).toString(32), n >>= u, a -= u, At = 1 << 32 - vt(t) + a | r << a | n, Nt = i + e;
    } else At = 1 << i | r << a | n, Nt = e;
  }
  function bi(e) {
    e.return !== null && (pr(e, 1), Eu(e, 1, 0));
  }
  function xi(e) {
    for (; e === $o; ) $o = Vr[--Br], Vr[Br] = null, To = Vr[--Br], Vr[Br] = null;
    for (; e === fr; ) fr = ct[--dt], ct[dt] = null, Nt = ct[--dt], ct[dt] = null, At = ct[--dt], ct[dt] = null;
  }
  var lt = null, st = null, Ce = !1, yt = null;
  function Su(e, t) {
    var r = mt(5, null, null, 0);
    r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r);
  }
  function Cu(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, lt = e, st = Xt(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, lt = e, st = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (r = fr !== null ? { id: At, overflow: Nt } : null, e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = mt(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, lt = e, st = null, !0) : !1;
      default:
        return !1;
    }
  }
  function ki(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function _i(e) {
    if (Ce) {
      var t = st;
      if (t) {
        var r = t;
        if (!Cu(e, t)) {
          if (ki(e)) throw Error(l(418));
          t = Xt(r.nextSibling);
          var n = lt;
          t && Cu(e, t) ? Su(n, r) : (e.flags = e.flags & -4097 | 2, Ce = !1, lt = e);
        }
      } else {
        if (ki(e)) throw Error(l(418));
        e.flags = e.flags & -4097 | 2, Ce = !1, lt = e;
      }
    }
  }
  function Fu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    lt = e;
  }
  function Ao(e) {
    if (e !== lt) return !1;
    if (!Ce) return Fu(e), Ce = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !hi(e.type, e.memoizedProps)), t && (t = st)) {
      if (ki(e)) throw Pu(), Error(l(418));
      for (; t; ) Su(e, t), t = Xt(t.nextSibling);
    }
    if (Fu(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                st = Xt(e.nextSibling);
                break e;
              }
              t--;
            } else r !== "$" && r !== "$!" && r !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        st = null;
      }
    } else st = lt ? Xt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Pu() {
    for (var e = st; e; ) e = Xt(e.nextSibling);
  }
  function Hr() {
    st = lt = null, Ce = !1;
  }
  function Ei(e) {
    yt === null ? yt = [e] : yt.push(e);
  }
  var Wp = ee.ReactCurrentBatchConfig;
  function Ln(e, t, r) {
    if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (r._owner) {
        if (r = r._owner, r) {
          if (r.tag !== 1) throw Error(l(309));
          var n = r.stateNode;
        }
        if (!n) throw Error(l(147, e));
        var a = n, i = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(u) {
          var m = a.refs;
          u === null ? delete m[i] : m[i] = u;
        }, t._stringRef = i, t);
      }
      if (typeof e != "string") throw Error(l(284));
      if (!r._owner) throw Error(l(290, e));
    }
    return e;
  }
  function No(e, t) {
    throw e = Object.prototype.toString.call(t), Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function zu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function $u(e) {
    function t(C, _) {
      if (e) {
        var F = C.deletions;
        F === null ? (C.deletions = [_], C.flags |= 16) : F.push(_);
      }
    }
    function r(C, _) {
      if (!e) return null;
      for (; _ !== null; ) t(C, _), _ = _.sibling;
      return null;
    }
    function n(C, _) {
      for (C = /* @__PURE__ */ new Map(); _ !== null; ) _.key !== null ? C.set(_.key, _) : C.set(_.index, _), _ = _.sibling;
      return C;
    }
    function a(C, _) {
      return C = ar(C, _), C.index = 0, C.sibling = null, C;
    }
    function i(C, _, F) {
      return C.index = F, e ? (F = C.alternate, F !== null ? (F = F.index, F < _ ? (C.flags |= 2, _) : F) : (C.flags |= 2, _)) : (C.flags |= 1048576, _);
    }
    function u(C) {
      return e && C.alternate === null && (C.flags |= 2), C;
    }
    function m(C, _, F, j) {
      return _ === null || _.tag !== 6 ? (_ = ml(F, C.mode, j), _.return = C, _) : (_ = a(_, F), _.return = C, _);
    }
    function y(C, _, F, j) {
      var Q = F.type;
      return Q === fe ? D(C, _, F.props.children, j, F.key) : _ !== null && (_.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === H && zu(Q) === _.type) ? (j = a(_, F.props), j.ref = Ln(C, _, F), j.return = C, j) : (j = na(F.type, F.key, F.props, null, C.mode, j), j.ref = Ln(C, _, F), j.return = C, j);
    }
    function z(C, _, F, j) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== F.containerInfo || _.stateNode.implementation !== F.implementation ? (_ = gl(F, C.mode, j), _.return = C, _) : (_ = a(_, F.children || []), _.return = C, _);
    }
    function D(C, _, F, j, Q) {
      return _ === null || _.tag !== 7 ? (_ = xr(F, C.mode, j, Q), _.return = C, _) : (_ = a(_, F), _.return = C, _);
    }
    function O(C, _, F) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number") return _ = ml("" + _, C.mode, F), _.return = C, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case we:
            return F = na(_.type, _.key, _.props, null, C.mode, F), F.ref = Ln(C, null, _), F.return = C, F;
          case _e:
            return _ = gl(_, C.mode, F), _.return = C, _;
          case H:
            var j = _._init;
            return O(C, j(_._payload), F);
        }
        if (un(_) || $(_)) return _ = xr(_, C.mode, F, null), _.return = C, _;
        No(C, _);
      }
      return null;
    }
    function R(C, _, F, j) {
      var Q = _ !== null ? _.key : null;
      if (typeof F == "string" && F !== "" || typeof F == "number") return Q !== null ? null : m(C, _, "" + F, j);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case we:
            return F.key === Q ? y(C, _, F, j) : null;
          case _e:
            return F.key === Q ? z(C, _, F, j) : null;
          case H:
            return Q = F._init, R(
              C,
              _,
              Q(F._payload),
              j
            );
        }
        if (un(F) || $(F)) return Q !== null ? null : D(C, _, F, j, null);
        No(C, F);
      }
      return null;
    }
    function B(C, _, F, j, Q) {
      if (typeof j == "string" && j !== "" || typeof j == "number") return C = C.get(F) || null, m(_, C, "" + j, Q);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case we:
            return C = C.get(j.key === null ? F : j.key) || null, y(_, C, j, Q);
          case _e:
            return C = C.get(j.key === null ? F : j.key) || null, z(_, C, j, Q);
          case H:
            var q = j._init;
            return B(C, _, F, q(j._payload), Q);
        }
        if (un(j) || $(j)) return C = C.get(F) || null, D(_, C, j, Q, null);
        No(_, j);
      }
      return null;
    }
    function Y(C, _, F, j) {
      for (var Q = null, q = null, Z = _, te = _ = 0, je = null; Z !== null && te < F.length; te++) {
        Z.index > te ? (je = Z, Z = null) : je = Z.sibling;
        var de = R(C, Z, F[te], j);
        if (de === null) {
          Z === null && (Z = je);
          break;
        }
        e && Z && de.alternate === null && t(C, Z), _ = i(de, _, te), q === null ? Q = de : q.sibling = de, q = de, Z = je;
      }
      if (te === F.length) return r(C, Z), Ce && pr(C, te), Q;
      if (Z === null) {
        for (; te < F.length; te++) Z = O(C, F[te], j), Z !== null && (_ = i(Z, _, te), q === null ? Q = Z : q.sibling = Z, q = Z);
        return Ce && pr(C, te), Q;
      }
      for (Z = n(C, Z); te < F.length; te++) je = B(Z, C, te, F[te], j), je !== null && (e && je.alternate !== null && Z.delete(je.key === null ? te : je.key), _ = i(je, _, te), q === null ? Q = je : q.sibling = je, q = je);
      return e && Z.forEach(function(ir) {
        return t(C, ir);
      }), Ce && pr(C, te), Q;
    }
    function K(C, _, F, j) {
      var Q = $(F);
      if (typeof Q != "function") throw Error(l(150));
      if (F = Q.call(F), F == null) throw Error(l(151));
      for (var q = Q = null, Z = _, te = _ = 0, je = null, de = F.next(); Z !== null && !de.done; te++, de = F.next()) {
        Z.index > te ? (je = Z, Z = null) : je = Z.sibling;
        var ir = R(C, Z, de.value, j);
        if (ir === null) {
          Z === null && (Z = je);
          break;
        }
        e && Z && ir.alternate === null && t(C, Z), _ = i(ir, _, te), q === null ? Q = ir : q.sibling = ir, q = ir, Z = je;
      }
      if (de.done) return r(
        C,
        Z
      ), Ce && pr(C, te), Q;
      if (Z === null) {
        for (; !de.done; te++, de = F.next()) de = O(C, de.value, j), de !== null && (_ = i(de, _, te), q === null ? Q = de : q.sibling = de, q = de);
        return Ce && pr(C, te), Q;
      }
      for (Z = n(C, Z); !de.done; te++, de = F.next()) de = B(Z, C, te, de.value, j), de !== null && (e && de.alternate !== null && Z.delete(de.key === null ? te : de.key), _ = i(de, _, te), q === null ? Q = de : q.sibling = de, q = de);
      return e && Z.forEach(function(Eh) {
        return t(C, Eh);
      }), Ce && pr(C, te), Q;
    }
    function Ne(C, _, F, j) {
      if (typeof F == "object" && F !== null && F.type === fe && F.key === null && (F = F.props.children), typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case we:
            e: {
              for (var Q = F.key, q = _; q !== null; ) {
                if (q.key === Q) {
                  if (Q = F.type, Q === fe) {
                    if (q.tag === 7) {
                      r(C, q.sibling), _ = a(q, F.props.children), _.return = C, C = _;
                      break e;
                    }
                  } else if (q.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === H && zu(Q) === q.type) {
                    r(C, q.sibling), _ = a(q, F.props), _.ref = Ln(C, q, F), _.return = C, C = _;
                    break e;
                  }
                  r(C, q);
                  break;
                } else t(C, q);
                q = q.sibling;
              }
              F.type === fe ? (_ = xr(F.props.children, C.mode, j, F.key), _.return = C, C = _) : (j = na(F.type, F.key, F.props, null, C.mode, j), j.ref = Ln(C, _, F), j.return = C, C = j);
            }
            return u(C);
          case _e:
            e: {
              for (q = F.key; _ !== null; ) {
                if (_.key === q) if (_.tag === 4 && _.stateNode.containerInfo === F.containerInfo && _.stateNode.implementation === F.implementation) {
                  r(C, _.sibling), _ = a(_, F.children || []), _.return = C, C = _;
                  break e;
                } else {
                  r(C, _);
                  break;
                }
                else t(C, _);
                _ = _.sibling;
              }
              _ = gl(F, C.mode, j), _.return = C, C = _;
            }
            return u(C);
          case H:
            return q = F._init, Ne(C, _, q(F._payload), j);
        }
        if (un(F)) return Y(C, _, F, j);
        if ($(F)) return K(C, _, F, j);
        No(C, F);
      }
      return typeof F == "string" && F !== "" || typeof F == "number" ? (F = "" + F, _ !== null && _.tag === 6 ? (r(C, _.sibling), _ = a(_, F), _.return = C, C = _) : (r(C, _), _ = ml(F, C.mode, j), _.return = C, C = _), u(C)) : r(C, _);
    }
    return Ne;
  }
  var Wr = $u(!0), Tu = $u(!1), Lo = Qt(null), Mo = null, Yr = null, Si = null;
  function Ci() {
    Si = Yr = Mo = null;
  }
  function Fi(e) {
    var t = Lo.current;
    xe(Lo), e._currentValue = t;
  }
  function Pi(e, t, r) {
    for (; e !== null; ) {
      var n = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === r) break;
      e = e.return;
    }
  }
  function Kr(e, t) {
    Mo = e, Si = Yr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (et = !0), e.firstContext = null);
  }
  function ft(e) {
    var t = e._currentValue;
    if (Si !== e) if (e = { context: e, memoizedValue: t, next: null }, Yr === null) {
      if (Mo === null) throw Error(l(308));
      Yr = e, Mo.dependencies = { lanes: 0, firstContext: e };
    } else Yr = Yr.next = e;
    return t;
  }
  var hr = null;
  function zi(e) {
    hr === null ? hr = [e] : hr.push(e);
  }
  function Au(e, t, r, n) {
    var a = t.interleaved;
    return a === null ? (r.next = r, zi(t)) : (r.next = a.next, a.next = r), t.interleaved = r, Lt(e, n);
  }
  function Lt(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; ) e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
    return r.tag === 3 ? r.stateNode : null;
  }
  var Zt = !1;
  function $i(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Nu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Mt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Jt(e, t, r) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (ce & 2) !== 0) {
      var a = n.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, Lt(e, r);
    }
    return a = n.interleaved, a === null ? (t.next = t, zi(n)) : (t.next = a.next, a.next = t), n.interleaved = t, Lt(e, r);
  }
  function Ro(e, t, r) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
      var n = t.lanes;
      n &= e.pendingLanes, r |= n, t.lanes = r, Ha(e, r);
    }
  }
  function Lu(e, t) {
    var r = e.updateQueue, n = e.alternate;
    if (n !== null && (n = n.updateQueue, r === n)) {
      var a = null, i = null;
      if (r = r.firstBaseUpdate, r !== null) {
        do {
          var u = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
          i === null ? a = i = u : i = i.next = u, r = r.next;
        } while (r !== null);
        i === null ? a = i = t : i = i.next = t;
      } else a = i = t;
      r = { baseState: n.baseState, firstBaseUpdate: a, lastBaseUpdate: i, shared: n.shared, effects: n.effects }, e.updateQueue = r;
      return;
    }
    e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t;
  }
  function Io(e, t, r, n) {
    var a = e.updateQueue;
    Zt = !1;
    var i = a.firstBaseUpdate, u = a.lastBaseUpdate, m = a.shared.pending;
    if (m !== null) {
      a.shared.pending = null;
      var y = m, z = y.next;
      y.next = null, u === null ? i = z : u.next = z, u = y;
      var D = e.alternate;
      D !== null && (D = D.updateQueue, m = D.lastBaseUpdate, m !== u && (m === null ? D.firstBaseUpdate = z : m.next = z, D.lastBaseUpdate = y));
    }
    if (i !== null) {
      var O = a.baseState;
      u = 0, D = z = y = null, m = i;
      do {
        var R = m.lane, B = m.eventTime;
        if ((n & R) === R) {
          D !== null && (D = D.next = {
            eventTime: B,
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          });
          e: {
            var Y = e, K = m;
            switch (R = t, B = r, K.tag) {
              case 1:
                if (Y = K.payload, typeof Y == "function") {
                  O = Y.call(B, O, R);
                  break e;
                }
                O = Y;
                break e;
              case 3:
                Y.flags = Y.flags & -65537 | 128;
              case 0:
                if (Y = K.payload, R = typeof Y == "function" ? Y.call(B, O, R) : Y, R == null) break e;
                O = M({}, O, R);
                break e;
              case 2:
                Zt = !0;
            }
          }
          m.callback !== null && m.lane !== 0 && (e.flags |= 64, R = a.effects, R === null ? a.effects = [m] : R.push(m));
        } else B = { eventTime: B, lane: R, tag: m.tag, payload: m.payload, callback: m.callback, next: null }, D === null ? (z = D = B, y = O) : D = D.next = B, u |= R;
        if (m = m.next, m === null) {
          if (m = a.shared.pending, m === null) break;
          R = m, m = R.next, R.next = null, a.lastBaseUpdate = R, a.shared.pending = null;
        }
      } while (!0);
      if (D === null && (y = O), a.baseState = y, a.firstBaseUpdate = z, a.lastBaseUpdate = D, t = a.shared.interleaved, t !== null) {
        a = t;
        do
          u |= a.lane, a = a.next;
        while (a !== t);
      } else i === null && (a.shared.lanes = 0);
      vr |= u, e.lanes = u, e.memoizedState = O;
    }
  }
  function Mu(e, t, r) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var n = e[t], a = n.callback;
      if (a !== null) {
        if (n.callback = null, n = r, typeof a != "function") throw Error(l(191, a));
        a.call(n);
      }
    }
  }
  var Mn = {}, Ct = Qt(Mn), Rn = Qt(Mn), In = Qt(Mn);
  function mr(e) {
    if (e === Mn) throw Error(l(174));
    return e;
  }
  function Ti(e, t) {
    switch (ye(In, t), ye(Rn, e), ye(Ct, Mn), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Aa(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Aa(t, e);
    }
    xe(Ct), ye(Ct, t);
  }
  function Xr() {
    xe(Ct), xe(Rn), xe(In);
  }
  function Ru(e) {
    mr(In.current);
    var t = mr(Ct.current), r = Aa(t, e.type);
    t !== r && (ye(Rn, e), ye(Ct, r));
  }
  function Ai(e) {
    Rn.current === e && (xe(Ct), xe(Rn));
  }
  var Pe = Qt(0);
  function Do(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!")) return t;
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
  var Ni = [];
  function Li() {
    for (var e = 0; e < Ni.length; e++) Ni[e]._workInProgressVersionPrimary = null;
    Ni.length = 0;
  }
  var Oo = ee.ReactCurrentDispatcher, Mi = ee.ReactCurrentBatchConfig, gr = 0, ze = null, Me = null, De = null, jo = !1, Dn = !1, On = 0, Yp = 0;
  function Ke() {
    throw Error(l(321));
  }
  function Ri(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!wt(e[r], t[r])) return !1;
    return !0;
  }
  function Ii(e, t, r, n, a, i) {
    if (gr = i, ze = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Oo.current = e === null || e.memoizedState === null ? Gp : qp, e = r(n, a), Dn) {
      i = 0;
      do {
        if (Dn = !1, On = 0, 25 <= i) throw Error(l(301));
        i += 1, De = Me = null, t.updateQueue = null, Oo.current = Zp, e = r(n, a);
      } while (Dn);
    }
    if (Oo.current = Bo, t = Me !== null && Me.next !== null, gr = 0, De = Me = ze = null, jo = !1, t) throw Error(l(300));
    return e;
  }
  function Di() {
    var e = On !== 0;
    return On = 0, e;
  }
  function Ft() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return De === null ? ze.memoizedState = De = e : De = De.next = e, De;
  }
  function pt() {
    if (Me === null) {
      var e = ze.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Me.next;
    var t = De === null ? ze.memoizedState : De.next;
    if (t !== null) De = t, Me = e;
    else {
      if (e === null) throw Error(l(310));
      Me = e, e = { memoizedState: Me.memoizedState, baseState: Me.baseState, baseQueue: Me.baseQueue, queue: Me.queue, next: null }, De === null ? ze.memoizedState = De = e : De = De.next = e;
    }
    return De;
  }
  function jn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Oi(e) {
    var t = pt(), r = t.queue;
    if (r === null) throw Error(l(311));
    r.lastRenderedReducer = e;
    var n = Me, a = n.baseQueue, i = r.pending;
    if (i !== null) {
      if (a !== null) {
        var u = a.next;
        a.next = i.next, i.next = u;
      }
      n.baseQueue = a = i, r.pending = null;
    }
    if (a !== null) {
      i = a.next, n = n.baseState;
      var m = u = null, y = null, z = i;
      do {
        var D = z.lane;
        if ((gr & D) === D) y !== null && (y = y.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), n = z.hasEagerState ? z.eagerState : e(n, z.action);
        else {
          var O = {
            lane: D,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          };
          y === null ? (m = y = O, u = n) : y = y.next = O, ze.lanes |= D, vr |= D;
        }
        z = z.next;
      } while (z !== null && z !== i);
      y === null ? u = n : y.next = m, wt(n, t.memoizedState) || (et = !0), t.memoizedState = n, t.baseState = u, t.baseQueue = y, r.lastRenderedState = n;
    }
    if (e = r.interleaved, e !== null) {
      a = e;
      do
        i = a.lane, ze.lanes |= i, vr |= i, a = a.next;
      while (a !== e);
    } else a === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function ji(e) {
    var t = pt(), r = t.queue;
    if (r === null) throw Error(l(311));
    r.lastRenderedReducer = e;
    var n = r.dispatch, a = r.pending, i = t.memoizedState;
    if (a !== null) {
      r.pending = null;
      var u = a = a.next;
      do
        i = e(i, u.action), u = u.next;
      while (u !== a);
      wt(i, t.memoizedState) || (et = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), r.lastRenderedState = i;
    }
    return [i, n];
  }
  function Iu() {
  }
  function Du(e, t) {
    var r = ze, n = pt(), a = t(), i = !wt(n.memoizedState, a);
    if (i && (n.memoizedState = a, et = !0), n = n.queue, Ui(Uu.bind(null, r, n, e), [e]), n.getSnapshot !== t || i || De !== null && De.memoizedState.tag & 1) {
      if (r.flags |= 2048, Un(9, ju.bind(null, r, n, a, t), void 0, null), Oe === null) throw Error(l(349));
      (gr & 30) !== 0 || Ou(r, t, a);
    }
    return a;
  }
  function Ou(e, t, r) {
    e.flags |= 16384, e = { getSnapshot: t, value: r }, t = ze.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ze.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
  }
  function ju(e, t, r, n) {
    t.value = r, t.getSnapshot = n, Vu(t) && Bu(e);
  }
  function Uu(e, t, r) {
    return r(function() {
      Vu(t) && Bu(e);
    });
  }
  function Vu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !wt(e, r);
    } catch {
      return !0;
    }
  }
  function Bu(e) {
    var t = Lt(e, 1);
    t !== null && _t(t, e, 1, -1);
  }
  function Hu(e) {
    var t = Ft();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: jn, lastRenderedState: e }, t.queue = e, e = e.dispatch = Qp.bind(null, ze, e), [t.memoizedState, e];
  }
  function Un(e, t, r, n) {
    return e = { tag: e, create: t, destroy: r, deps: n, next: null }, t = ze.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ze.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e)), e;
  }
  function Wu() {
    return pt().memoizedState;
  }
  function Uo(e, t, r, n) {
    var a = Ft();
    ze.flags |= e, a.memoizedState = Un(1 | t, r, void 0, n === void 0 ? null : n);
  }
  function Vo(e, t, r, n) {
    var a = pt();
    n = n === void 0 ? null : n;
    var i = void 0;
    if (Me !== null) {
      var u = Me.memoizedState;
      if (i = u.destroy, n !== null && Ri(n, u.deps)) {
        a.memoizedState = Un(t, r, i, n);
        return;
      }
    }
    ze.flags |= e, a.memoizedState = Un(1 | t, r, i, n);
  }
  function Yu(e, t) {
    return Uo(8390656, 8, e, t);
  }
  function Ui(e, t) {
    return Vo(2048, 8, e, t);
  }
  function Ku(e, t) {
    return Vo(4, 2, e, t);
  }
  function Xu(e, t) {
    return Vo(4, 4, e, t);
  }
  function Qu(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Gu(e, t, r) {
    return r = r != null ? r.concat([e]) : null, Vo(4, 4, Qu.bind(null, t, e), r);
  }
  function Vi() {
  }
  function qu(e, t) {
    var r = pt();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && Ri(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e);
  }
  function Zu(e, t) {
    var r = pt();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && Ri(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e);
  }
  function Ju(e, t, r) {
    return (gr & 21) === 0 ? (e.baseState && (e.baseState = !1, et = !0), e.memoizedState = r) : (wt(r, t) || (r = zs(), ze.lanes |= r, vr |= r, e.baseState = !0), t);
  }
  function Kp(e, t) {
    var r = he;
    he = r !== 0 && 4 > r ? r : 4, e(!0);
    var n = Mi.transition;
    Mi.transition = {};
    try {
      e(!1), t();
    } finally {
      he = r, Mi.transition = n;
    }
  }
  function ec() {
    return pt().memoizedState;
  }
  function Xp(e, t, r) {
    var n = nr(e);
    if (r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }, tc(e)) rc(t, r);
    else if (r = Au(e, t, r, n), r !== null) {
      var a = qe();
      _t(r, e, n, a), nc(r, t, n);
    }
  }
  function Qp(e, t, r) {
    var n = nr(e), a = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
    if (tc(e)) rc(t, a);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
        var u = t.lastRenderedState, m = i(u, r);
        if (a.hasEagerState = !0, a.eagerState = m, wt(m, u)) {
          var y = t.interleaved;
          y === null ? (a.next = a, zi(t)) : (a.next = y.next, y.next = a), t.interleaved = a;
          return;
        }
      } catch {
      } finally {
      }
      r = Au(e, t, a, n), r !== null && (a = qe(), _t(r, e, n, a), nc(r, t, n));
    }
  }
  function tc(e) {
    var t = e.alternate;
    return e === ze || t !== null && t === ze;
  }
  function rc(e, t) {
    Dn = jo = !0;
    var r = e.pending;
    r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
  }
  function nc(e, t, r) {
    if ((r & 4194240) !== 0) {
      var n = t.lanes;
      n &= e.pendingLanes, r |= n, t.lanes = r, Ha(e, r);
    }
  }
  var Bo = { readContext: ft, useCallback: Ke, useContext: Ke, useEffect: Ke, useImperativeHandle: Ke, useInsertionEffect: Ke, useLayoutEffect: Ke, useMemo: Ke, useReducer: Ke, useRef: Ke, useState: Ke, useDebugValue: Ke, useDeferredValue: Ke, useTransition: Ke, useMutableSource: Ke, useSyncExternalStore: Ke, useId: Ke, unstable_isNewReconciler: !1 }, Gp = { readContext: ft, useCallback: function(e, t) {
    return Ft().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: ft, useEffect: Yu, useImperativeHandle: function(e, t, r) {
    return r = r != null ? r.concat([e]) : null, Uo(
      4194308,
      4,
      Qu.bind(null, t, e),
      r
    );
  }, useLayoutEffect: function(e, t) {
    return Uo(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Uo(4, 2, e, t);
  }, useMemo: function(e, t) {
    var r = Ft();
    return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e;
  }, useReducer: function(e, t, r) {
    var n = Ft();
    return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, n.queue = e, e = e.dispatch = Xp.bind(null, ze, e), [n.memoizedState, e];
  }, useRef: function(e) {
    var t = Ft();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Hu, useDebugValue: Vi, useDeferredValue: function(e) {
    return Ft().memoizedState = e;
  }, useTransition: function() {
    var e = Hu(!1), t = e[0];
    return e = Kp.bind(null, e[1]), Ft().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, r) {
    var n = ze, a = Ft();
    if (Ce) {
      if (r === void 0) throw Error(l(407));
      r = r();
    } else {
      if (r = t(), Oe === null) throw Error(l(349));
      (gr & 30) !== 0 || Ou(n, t, r);
    }
    a.memoizedState = r;
    var i = { value: r, getSnapshot: t };
    return a.queue = i, Yu(Uu.bind(
      null,
      n,
      i,
      e
    ), [e]), n.flags |= 2048, Un(9, ju.bind(null, n, i, r, t), void 0, null), r;
  }, useId: function() {
    var e = Ft(), t = Oe.identifierPrefix;
    if (Ce) {
      var r = Nt, n = At;
      r = (n & ~(1 << 32 - vt(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = On++, 0 < r && (t += "H" + r.toString(32)), t += ":";
    } else r = Yp++, t = ":" + t + "r" + r.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, qp = {
    readContext: ft,
    useCallback: qu,
    useContext: ft,
    useEffect: Ui,
    useImperativeHandle: Gu,
    useInsertionEffect: Ku,
    useLayoutEffect: Xu,
    useMemo: Zu,
    useReducer: Oi,
    useRef: Wu,
    useState: function() {
      return Oi(jn);
    },
    useDebugValue: Vi,
    useDeferredValue: function(e) {
      var t = pt();
      return Ju(t, Me.memoizedState, e);
    },
    useTransition: function() {
      var e = Oi(jn)[0], t = pt().memoizedState;
      return [e, t];
    },
    useMutableSource: Iu,
    useSyncExternalStore: Du,
    useId: ec,
    unstable_isNewReconciler: !1
  }, Zp = { readContext: ft, useCallback: qu, useContext: ft, useEffect: Ui, useImperativeHandle: Gu, useInsertionEffect: Ku, useLayoutEffect: Xu, useMemo: Zu, useReducer: ji, useRef: Wu, useState: function() {
    return ji(jn);
  }, useDebugValue: Vi, useDeferredValue: function(e) {
    var t = pt();
    return Me === null ? t.memoizedState = e : Ju(t, Me.memoizedState, e);
  }, useTransition: function() {
    var e = ji(jn)[0], t = pt().memoizedState;
    return [e, t];
  }, useMutableSource: Iu, useSyncExternalStore: Du, useId: ec, unstable_isNewReconciler: !1 };
  function bt(e, t) {
    if (e && e.defaultProps) {
      t = M({}, t), e = e.defaultProps;
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function Bi(e, t, r, n) {
    t = e.memoizedState, r = r(n, t), r = r == null ? t : M({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var Ho = { isMounted: function(e) {
    return (e = e._reactInternals) ? ur(e) === e : !1;
  }, enqueueSetState: function(e, t, r) {
    e = e._reactInternals;
    var n = qe(), a = nr(e), i = Mt(n, a);
    i.payload = t, r != null && (i.callback = r), t = Jt(e, i, a), t !== null && (_t(t, e, a, n), Ro(t, e, a));
  }, enqueueReplaceState: function(e, t, r) {
    e = e._reactInternals;
    var n = qe(), a = nr(e), i = Mt(n, a);
    i.tag = 1, i.payload = t, r != null && (i.callback = r), t = Jt(e, i, a), t !== null && (_t(t, e, a, n), Ro(t, e, a));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var r = qe(), n = nr(e), a = Mt(r, n);
    a.tag = 2, t != null && (a.callback = t), t = Jt(e, a, n), t !== null && (_t(t, e, n, r), Ro(t, e, n));
  } };
  function oc(e, t, r, n, a, i, u) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, u) : t.prototype && t.prototype.isPureReactComponent ? !Fn(r, n) || !Fn(a, i) : !0;
  }
  function ac(e, t, r) {
    var n = !1, a = Gt, i = t.contextType;
    return typeof i == "object" && i !== null ? i = ft(i) : (a = Je(t) ? dr : Ye.current, n = t.contextTypes, i = (n = n != null) ? Ur(e, a) : Gt), t = new t(r, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ho, e.stateNode = t, t._reactInternals = e, n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = i), t;
  }
  function ic(e, t, r, n) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && Ho.enqueueReplaceState(t, t.state, null);
  }
  function Hi(e, t, r, n) {
    var a = e.stateNode;
    a.props = r, a.state = e.memoizedState, a.refs = {}, $i(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? a.context = ft(i) : (i = Je(t) ? dr : Ye.current, a.context = Ur(e, i)), a.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Bi(e, t, i, r), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && Ho.enqueueReplaceState(a, a.state, null), Io(e, r, a, n), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Qr(e, t) {
    try {
      var r = "", n = t;
      do
        r += se(n), n = n.return;
      while (n);
      var a = r;
    } catch (i) {
      a = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function Wi(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function Yi(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  var Jp = typeof WeakMap == "function" ? WeakMap : Map;
  function lc(e, t, r) {
    r = Mt(-1, r), r.tag = 3, r.payload = { element: null };
    var n = t.value;
    return r.callback = function() {
      qo || (qo = !0, ll = n), Yi(e, t);
    }, r;
  }
  function sc(e, t, r) {
    r = Mt(-1, r), r.tag = 3;
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var a = t.value;
      r.payload = function() {
        return n(a);
      }, r.callback = function() {
        Yi(e, t);
      };
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (r.callback = function() {
      Yi(e, t), typeof n != "function" && (tr === null ? tr = /* @__PURE__ */ new Set([this]) : tr.add(this));
      var u = t.stack;
      this.componentDidCatch(t.value, { componentStack: u !== null ? u : "" });
    }), r;
  }
  function uc(e, t, r) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new Jp();
      var a = /* @__PURE__ */ new Set();
      n.set(t, a);
    } else a = n.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(t, a));
    a.has(r) || (a.add(r), e = ph.bind(null, e, t, r), t.then(e, e));
  }
  function cc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function dc(e, t, r, n, a) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = Mt(-1, 1), t.tag = 2, Jt(r, t, 1))), r.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e);
  }
  var eh = ee.ReactCurrentOwner, et = !1;
  function Ge(e, t, r, n) {
    t.child = e === null ? Tu(t, null, r, n) : Wr(t, e.child, r, n);
  }
  function fc(e, t, r, n, a) {
    r = r.render;
    var i = t.ref;
    return Kr(t, a), n = Ii(e, t, r, n, i, a), r = Di(), e !== null && !et ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Rt(e, t, a)) : (Ce && r && bi(t), t.flags |= 1, Ge(e, t, n, a), t.child);
  }
  function pc(e, t, r, n, a) {
    if (e === null) {
      var i = r.type;
      return typeof i == "function" && !hl(i) && i.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = i, hc(e, t, i, n, a)) : (e = na(r.type, null, n, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, (e.lanes & a) === 0) {
      var u = i.memoizedProps;
      if (r = r.compare, r = r !== null ? r : Fn, r(u, n) && e.ref === t.ref) return Rt(e, t, a);
    }
    return t.flags |= 1, e = ar(i, n), e.ref = t.ref, e.return = t, t.child = e;
  }
  function hc(e, t, r, n, a) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Fn(i, n) && e.ref === t.ref) if (et = !1, t.pendingProps = n = i, (e.lanes & a) !== 0) (e.flags & 131072) !== 0 && (et = !0);
      else return t.lanes = e.lanes, Rt(e, t, a);
    }
    return Ki(e, t, r, n, a);
  }
  function mc(e, t, r) {
    var n = t.pendingProps, a = n.children, i = e !== null ? e.memoizedState : null;
    if (n.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ye(qr, ut), ut |= r;
    else {
      if ((r & 1073741824) === 0) return e = i !== null ? i.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ye(qr, ut), ut |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = i !== null ? i.baseLanes : r, ye(qr, ut), ut |= n;
    }
    else i !== null ? (n = i.baseLanes | r, t.memoizedState = null) : n = r, ye(qr, ut), ut |= n;
    return Ge(e, t, a, r), t.child;
  }
  function gc(e, t) {
    var r = t.ref;
    (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Ki(e, t, r, n, a) {
    var i = Je(r) ? dr : Ye.current;
    return i = Ur(t, i), Kr(t, a), r = Ii(e, t, r, n, i, a), n = Di(), e !== null && !et ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Rt(e, t, a)) : (Ce && n && bi(t), t.flags |= 1, Ge(e, t, r, a), t.child);
  }
  function vc(e, t, r, n, a) {
    if (Je(r)) {
      var i = !0;
      Po(t);
    } else i = !1;
    if (Kr(t, a), t.stateNode === null) Yo(e, t), ac(t, r, n), Hi(t, r, n, a), n = !0;
    else if (e === null) {
      var u = t.stateNode, m = t.memoizedProps;
      u.props = m;
      var y = u.context, z = r.contextType;
      typeof z == "object" && z !== null ? z = ft(z) : (z = Je(r) ? dr : Ye.current, z = Ur(t, z));
      var D = r.getDerivedStateFromProps, O = typeof D == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      O || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (m !== n || y !== z) && ic(t, u, n, z), Zt = !1;
      var R = t.memoizedState;
      u.state = R, Io(t, n, u, a), y = t.memoizedState, m !== n || R !== y || Ze.current || Zt ? (typeof D == "function" && (Bi(t, r, D, n), y = t.memoizedState), (m = Zt || oc(t, r, m, n, R, y, z)) ? (O || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = y), u.props = n, u.state = y, u.context = z, n = m) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
    } else {
      u = t.stateNode, Nu(e, t), m = t.memoizedProps, z = t.type === t.elementType ? m : bt(t.type, m), u.props = z, O = t.pendingProps, R = u.context, y = r.contextType, typeof y == "object" && y !== null ? y = ft(y) : (y = Je(r) ? dr : Ye.current, y = Ur(t, y));
      var B = r.getDerivedStateFromProps;
      (D = typeof B == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (m !== O || R !== y) && ic(t, u, n, y), Zt = !1, R = t.memoizedState, u.state = R, Io(t, n, u, a);
      var Y = t.memoizedState;
      m !== O || R !== Y || Ze.current || Zt ? (typeof B == "function" && (Bi(t, r, B, n), Y = t.memoizedState), (z = Zt || oc(t, r, z, n, R, Y, y) || !1) ? (D || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(n, Y, y), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(n, Y, y)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || m === e.memoizedProps && R === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && R === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = Y), u.props = n, u.state = Y, u.context = y, n = z) : (typeof u.componentDidUpdate != "function" || m === e.memoizedProps && R === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && R === e.memoizedState || (t.flags |= 1024), n = !1);
    }
    return Xi(e, t, r, n, i, a);
  }
  function Xi(e, t, r, n, a, i) {
    gc(e, t);
    var u = (t.flags & 128) !== 0;
    if (!n && !u) return a && ku(t, r, !1), Rt(e, t, i);
    n = t.stateNode, eh.current = t;
    var m = u && typeof r.getDerivedStateFromError != "function" ? null : n.render();
    return t.flags |= 1, e !== null && u ? (t.child = Wr(t, e.child, null, i), t.child = Wr(t, null, m, i)) : Ge(e, t, m, i), t.memoizedState = n.state, a && ku(t, r, !0), t.child;
  }
  function wc(e) {
    var t = e.stateNode;
    t.pendingContext ? bu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && bu(e, t.context, !1), Ti(e, t.containerInfo);
  }
  function yc(e, t, r, n, a) {
    return Hr(), Ei(a), t.flags |= 256, Ge(e, t, r, n), t.child;
  }
  var Qi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Gi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function bc(e, t, r) {
    var n = t.pendingProps, a = Pe.current, i = !1, u = (t.flags & 128) !== 0, m;
    if ((m = u) || (m = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), m ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), ye(Pe, a & 1), e === null)
      return _i(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (u = n.children, e = n.fallback, i ? (n = t.mode, i = t.child, u = { mode: "hidden", children: u }, (n & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = u) : i = oa(u, n, 0, null), e = xr(e, n, r, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Gi(r), t.memoizedState = Qi, e) : qi(t, u));
    if (a = e.memoizedState, a !== null && (m = a.dehydrated, m !== null)) return th(e, t, u, n, m, a, r);
    if (i) {
      i = n.fallback, u = t.mode, a = e.child, m = a.sibling;
      var y = { mode: "hidden", children: n.children };
      return (u & 1) === 0 && t.child !== a ? (n = t.child, n.childLanes = 0, n.pendingProps = y, t.deletions = null) : (n = ar(a, y), n.subtreeFlags = a.subtreeFlags & 14680064), m !== null ? i = ar(m, i) : (i = xr(i, u, r, null), i.flags |= 2), i.return = t, n.return = t, n.sibling = i, t.child = n, n = i, i = t.child, u = e.child.memoizedState, u = u === null ? Gi(r) : { baseLanes: u.baseLanes | r, cachePool: null, transitions: u.transitions }, i.memoizedState = u, i.childLanes = e.childLanes & ~r, t.memoizedState = Qi, n;
    }
    return i = e.child, e = i.sibling, n = ar(i, { mode: "visible", children: n.children }), (t.mode & 1) === 0 && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n;
  }
  function qi(e, t) {
    return t = oa({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Wo(e, t, r, n) {
    return n !== null && Ei(n), Wr(t, e.child, null, r), e = qi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function th(e, t, r, n, a, i, u) {
    if (r)
      return t.flags & 256 ? (t.flags &= -257, n = Wi(Error(l(422))), Wo(e, t, u, n)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = n.fallback, a = t.mode, n = oa({ mode: "visible", children: n.children }, a, 0, null), i = xr(i, a, u, null), i.flags |= 2, n.return = t, i.return = t, n.sibling = i, t.child = n, (t.mode & 1) !== 0 && Wr(t, e.child, null, u), t.child.memoizedState = Gi(u), t.memoizedState = Qi, i);
    if ((t.mode & 1) === 0) return Wo(e, t, u, null);
    if (a.data === "$!") {
      if (n = a.nextSibling && a.nextSibling.dataset, n) var m = n.dgst;
      return n = m, i = Error(l(419)), n = Wi(i, n, void 0), Wo(e, t, u, n);
    }
    if (m = (u & e.childLanes) !== 0, et || m) {
      if (n = Oe, n !== null) {
        switch (u & -u) {
          case 4:
            a = 2;
            break;
          case 16:
            a = 8;
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
            a = 32;
            break;
          case 536870912:
            a = 268435456;
            break;
          default:
            a = 0;
        }
        a = (a & (n.suspendedLanes | u)) !== 0 ? 0 : a, a !== 0 && a !== i.retryLane && (i.retryLane = a, Lt(e, a), _t(n, e, a, -1));
      }
      return pl(), n = Wi(Error(l(421))), Wo(e, t, u, n);
    }
    return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = hh.bind(null, e), a._reactRetry = t, null) : (e = i.treeContext, st = Xt(a.nextSibling), lt = t, Ce = !0, yt = null, e !== null && (ct[dt++] = At, ct[dt++] = Nt, ct[dt++] = fr, At = e.id, Nt = e.overflow, fr = t), t = qi(t, n.children), t.flags |= 4096, t);
  }
  function xc(e, t, r) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), Pi(e.return, t, r);
  }
  function Zi(e, t, r, n, a) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: a } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = n, i.tail = r, i.tailMode = a);
  }
  function kc(e, t, r) {
    var n = t.pendingProps, a = n.revealOrder, i = n.tail;
    if (Ge(e, t, n.children, r), n = Pe.current, (n & 2) !== 0) n = n & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xc(e, r, t);
        else if (e.tag === 19) xc(e, r, t);
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
      n &= 1;
    }
    if (ye(Pe, n), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (a) {
      case "forwards":
        for (r = t.child, a = null; r !== null; ) e = r.alternate, e !== null && Do(e) === null && (a = r), r = r.sibling;
        r = a, r === null ? (a = t.child, t.child = null) : (a = r.sibling, r.sibling = null), Zi(t, !1, a, r, i);
        break;
      case "backwards":
        for (r = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && Do(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = r, r = a, a = e;
        }
        Zi(t, !0, r, null, i);
        break;
      case "together":
        Zi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Yo(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Rt(e, t, r) {
    if (e !== null && (t.dependencies = e.dependencies), vr |= t.lanes, (r & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(l(153));
    if (t.child !== null) {
      for (e = t.child, r = ar(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; ) e = e.sibling, r = r.sibling = ar(e, e.pendingProps), r.return = t;
      r.sibling = null;
    }
    return t.child;
  }
  function rh(e, t, r) {
    switch (t.tag) {
      case 3:
        wc(t), Hr();
        break;
      case 5:
        Ru(t);
        break;
      case 1:
        Je(t.type) && Po(t);
        break;
      case 4:
        Ti(t, t.stateNode.containerInfo);
        break;
      case 10:
        var n = t.type._context, a = t.memoizedProps.value;
        ye(Lo, n._currentValue), n._currentValue = a;
        break;
      case 13:
        if (n = t.memoizedState, n !== null)
          return n.dehydrated !== null ? (ye(Pe, Pe.current & 1), t.flags |= 128, null) : (r & t.child.childLanes) !== 0 ? bc(e, t, r) : (ye(Pe, Pe.current & 1), e = Rt(e, t, r), e !== null ? e.sibling : null);
        ye(Pe, Pe.current & 1);
        break;
      case 19:
        if (n = (r & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (n) return kc(e, t, r);
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), ye(Pe, Pe.current), n) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, mc(e, t, r);
    }
    return Rt(e, t, r);
  }
  var _c, Ji, Ec, Sc;
  _c = function(e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
  }, Ji = function() {
  }, Ec = function(e, t, r, n) {
    var a = e.memoizedProps;
    if (a !== n) {
      e = t.stateNode, mr(Ct.current);
      var i = null;
      switch (r) {
        case "input":
          a = Pa(e, a), n = Pa(e, n), i = [];
          break;
        case "select":
          a = M({}, a, { value: void 0 }), n = M({}, n, { value: void 0 }), i = [];
          break;
        case "textarea":
          a = Ta(e, a), n = Ta(e, n), i = [];
          break;
        default:
          typeof a.onClick != "function" && typeof n.onClick == "function" && (e.onclick = So);
      }
      Na(r, n);
      var u;
      r = null;
      for (z in a) if (!n.hasOwnProperty(z) && a.hasOwnProperty(z) && a[z] != null) if (z === "style") {
        var m = a[z];
        for (u in m) m.hasOwnProperty(u) && (r || (r = {}), r[u] = "");
      } else z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (d.hasOwnProperty(z) ? i || (i = []) : (i = i || []).push(z, null));
      for (z in n) {
        var y = n[z];
        if (m = a != null ? a[z] : void 0, n.hasOwnProperty(z) && y !== m && (y != null || m != null)) if (z === "style") if (m) {
          for (u in m) !m.hasOwnProperty(u) || y && y.hasOwnProperty(u) || (r || (r = {}), r[u] = "");
          for (u in y) y.hasOwnProperty(u) && m[u] !== y[u] && (r || (r = {}), r[u] = y[u]);
        } else r || (i || (i = []), i.push(
          z,
          r
        )), r = y;
        else z === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, m = m ? m.__html : void 0, y != null && m !== y && (i = i || []).push(z, y)) : z === "children" ? typeof y != "string" && typeof y != "number" || (i = i || []).push(z, "" + y) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (d.hasOwnProperty(z) ? (y != null && z === "onScroll" && be("scroll", e), i || m === y || (i = [])) : (i = i || []).push(z, y));
      }
      r && (i = i || []).push("style", r);
      var z = i;
      (t.updateQueue = z) && (t.flags |= 4);
    }
  }, Sc = function(e, t, r, n) {
    r !== n && (t.flags |= 4);
  };
  function Vn(e, t) {
    if (!Ce) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
        r === null ? e.tail = null : r.sibling = null;
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; ) r.alternate !== null && (n = r), r = r.sibling;
        n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null;
    }
  }
  function Xe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, r = 0, n = 0;
    if (t) for (var a = e.child; a !== null; ) r |= a.lanes | a.childLanes, n |= a.subtreeFlags & 14680064, n |= a.flags & 14680064, a.return = e, a = a.sibling;
    else for (a = e.child; a !== null; ) r |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= n, e.childLanes = r, t;
  }
  function nh(e, t, r) {
    var n = t.pendingProps;
    switch (xi(t), t.tag) {
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
        return Xe(t), null;
      case 1:
        return Je(t.type) && Fo(), Xe(t), null;
      case 3:
        return n = t.stateNode, Xr(), xe(Ze), xe(Ye), Li(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Ao(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, yt !== null && (cl(yt), yt = null))), Ji(e, t), Xe(t), null;
      case 5:
        Ai(t);
        var a = mr(In.current);
        if (r = t.type, e !== null && t.stateNode != null) Ec(e, t, r, n, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(l(166));
            return Xe(t), null;
          }
          if (e = mr(Ct.current), Ao(t)) {
            n = t.stateNode, r = t.type;
            var i = t.memoizedProps;
            switch (n[St] = t, n[An] = i, e = (t.mode & 1) !== 0, r) {
              case "dialog":
                be("cancel", n), be("close", n);
                break;
              case "iframe":
              case "object":
              case "embed":
                be("load", n);
                break;
              case "video":
              case "audio":
                for (a = 0; a < zn.length; a++) be(zn[a], n);
                break;
              case "source":
                be("error", n);
                break;
              case "img":
              case "image":
              case "link":
                be(
                  "error",
                  n
                ), be("load", n);
                break;
              case "details":
                be("toggle", n);
                break;
              case "input":
                as(n, i), be("invalid", n);
                break;
              case "select":
                n._wrapperState = { wasMultiple: !!i.multiple }, be("invalid", n);
                break;
              case "textarea":
                ss(n, i), be("invalid", n);
            }
            Na(r, i), a = null;
            for (var u in i) if (i.hasOwnProperty(u)) {
              var m = i[u];
              u === "children" ? typeof m == "string" ? n.textContent !== m && (i.suppressHydrationWarning !== !0 && Eo(n.textContent, m, e), a = ["children", m]) : typeof m == "number" && n.textContent !== "" + m && (i.suppressHydrationWarning !== !0 && Eo(
                n.textContent,
                m,
                e
              ), a = ["children", "" + m]) : d.hasOwnProperty(u) && m != null && u === "onScroll" && be("scroll", n);
            }
            switch (r) {
              case "input":
                eo(n), ls(n, i, !0);
                break;
              case "textarea":
                eo(n), cs(n);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (n.onclick = So);
            }
            n = a, t.updateQueue = n, n !== null && (t.flags |= 4);
          } else {
            u = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ds(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = u.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = u.createElement(r, { is: n.is }) : (e = u.createElement(r), r === "select" && (u = e, n.multiple ? u.multiple = !0 : n.size && (u.size = n.size))) : e = u.createElementNS(e, r), e[St] = t, e[An] = n, _c(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (u = La(r, n), r) {
                case "dialog":
                  be("cancel", e), be("close", e), a = n;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  be("load", e), a = n;
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < zn.length; a++) be(zn[a], e);
                  a = n;
                  break;
                case "source":
                  be("error", e), a = n;
                  break;
                case "img":
                case "image":
                case "link":
                  be(
                    "error",
                    e
                  ), be("load", e), a = n;
                  break;
                case "details":
                  be("toggle", e), a = n;
                  break;
                case "input":
                  as(e, n), a = Pa(e, n), be("invalid", e);
                  break;
                case "option":
                  a = n;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!n.multiple }, a = M({}, n, { value: void 0 }), be("invalid", e);
                  break;
                case "textarea":
                  ss(e, n), a = Ta(e, n), be("invalid", e);
                  break;
                default:
                  a = n;
              }
              Na(r, a), m = a;
              for (i in m) if (m.hasOwnProperty(i)) {
                var y = m[i];
                i === "style" ? hs(e, y) : i === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, y != null && fs(e, y)) : i === "children" ? typeof y == "string" ? (r !== "textarea" || y !== "") && cn(e, y) : typeof y == "number" && cn(e, "" + y) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (d.hasOwnProperty(i) ? y != null && i === "onScroll" && be("scroll", e) : y != null && ne(e, i, y, u));
              }
              switch (r) {
                case "input":
                  eo(e), ls(e, n, !1);
                  break;
                case "textarea":
                  eo(e), cs(e);
                  break;
                case "option":
                  n.value != null && e.setAttribute("value", "" + pe(n.value));
                  break;
                case "select":
                  e.multiple = !!n.multiple, i = n.value, i != null ? zr(e, !!n.multiple, i, !1) : n.defaultValue != null && zr(
                    e,
                    !!n.multiple,
                    n.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof a.onClick == "function" && (e.onclick = So);
              }
              switch (r) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  n = !!n.autoFocus;
                  break e;
                case "img":
                  n = !0;
                  break e;
                default:
                  n = !1;
              }
            }
            n && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Xe(t), null;
      case 6:
        if (e && t.stateNode != null) Sc(e, t, e.memoizedProps, n);
        else {
          if (typeof n != "string" && t.stateNode === null) throw Error(l(166));
          if (r = mr(In.current), mr(Ct.current), Ao(t)) {
            if (n = t.stateNode, r = t.memoizedProps, n[St] = t, (i = n.nodeValue !== r) && (e = lt, e !== null)) switch (e.tag) {
              case 3:
                Eo(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Eo(n.nodeValue, r, (e.mode & 1) !== 0);
            }
            i && (t.flags |= 4);
          } else n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[St] = t, t.stateNode = n;
        }
        return Xe(t), null;
      case 13:
        if (xe(Pe), n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ce && st !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Pu(), Hr(), t.flags |= 98560, i = !1;
          else if (i = Ao(t), n !== null && n.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(l(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(l(317));
              i[St] = t;
            } else Hr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Xe(t), i = !1;
          } else yt !== null && (cl(yt), yt = null), i = !0;
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = r, t) : (n = n !== null, n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Pe.current & 1) !== 0 ? Re === 0 && (Re = 3) : pl())), t.updateQueue !== null && (t.flags |= 4), Xe(t), null);
      case 4:
        return Xr(), Ji(e, t), e === null && $n(t.stateNode.containerInfo), Xe(t), null;
      case 10:
        return Fi(t.type._context), Xe(t), null;
      case 17:
        return Je(t.type) && Fo(), Xe(t), null;
      case 19:
        if (xe(Pe), i = t.memoizedState, i === null) return Xe(t), null;
        if (n = (t.flags & 128) !== 0, u = i.rendering, u === null) if (n) Vn(i, !1);
        else {
          if (Re !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (u = Do(e), u !== null) {
              for (t.flags |= 128, Vn(i, !1), n = u.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null; ) i = r, e = n, i.flags &= 14680066, u = i.alternate, u === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = u.childLanes, i.lanes = u.lanes, i.child = u.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = u.memoizedProps, i.memoizedState = u.memoizedState, i.updateQueue = u.updateQueue, i.type = u.type, e = u.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), r = r.sibling;
              return ye(Pe, Pe.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          i.tail !== null && Ae() > Zr && (t.flags |= 128, n = !0, Vn(i, !1), t.lanes = 4194304);
        }
        else {
          if (!n) if (e = Do(u), e !== null) {
            if (t.flags |= 128, n = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), Vn(i, !0), i.tail === null && i.tailMode === "hidden" && !u.alternate && !Ce) return Xe(t), null;
          } else 2 * Ae() - i.renderingStartTime > Zr && r !== 1073741824 && (t.flags |= 128, n = !0, Vn(i, !1), t.lanes = 4194304);
          i.isBackwards ? (u.sibling = t.child, t.child = u) : (r = i.last, r !== null ? r.sibling = u : t.child = u, i.last = u);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ae(), t.sibling = null, r = Pe.current, ye(Pe, n ? r & 1 | 2 : r & 1), t) : (Xe(t), null);
      case 22:
      case 23:
        return fl(), n = t.memoizedState !== null, e !== null && e.memoizedState !== null !== n && (t.flags |= 8192), n && (t.mode & 1) !== 0 ? (ut & 1073741824) !== 0 && (Xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Xe(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function oh(e, t) {
    switch (xi(t), t.tag) {
      case 1:
        return Je(t.type) && Fo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Xr(), xe(Ze), xe(Ye), Li(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Ai(t), null;
      case 13:
        if (xe(Pe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(l(340));
          Hr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return xe(Pe), null;
      case 4:
        return Xr(), null;
      case 10:
        return Fi(t.type._context), null;
      case 22:
      case 23:
        return fl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ko = !1, Qe = !1, ah = typeof WeakSet == "function" ? WeakSet : Set, W = null;
  function Gr(e, t) {
    var r = e.ref;
    if (r !== null) if (typeof r == "function") try {
      r(null);
    } catch (n) {
      Te(e, t, n);
    }
    else r.current = null;
  }
  function el(e, t, r) {
    try {
      r();
    } catch (n) {
      Te(e, t, n);
    }
  }
  var Cc = !1;
  function ih(e, t) {
    if (fi = po, e = ou(), oi(e)) {
      if ("selectionStart" in e) var r = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        r = (r = e.ownerDocument) && r.defaultView || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var a = n.anchorOffset, i = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, i.nodeType;
          } catch {
            r = null;
            break e;
          }
          var u = 0, m = -1, y = -1, z = 0, D = 0, O = e, R = null;
          t: for (; ; ) {
            for (var B; O !== r || a !== 0 && O.nodeType !== 3 || (m = u + a), O !== i || n !== 0 && O.nodeType !== 3 || (y = u + n), O.nodeType === 3 && (u += O.nodeValue.length), (B = O.firstChild) !== null; )
              R = O, O = B;
            for (; ; ) {
              if (O === e) break t;
              if (R === r && ++z === a && (m = u), R === i && ++D === n && (y = u), (B = O.nextSibling) !== null) break;
              O = R, R = O.parentNode;
            }
            O = B;
          }
          r = m === -1 || y === -1 ? null : { start: m, end: y };
        } else r = null;
      }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (pi = { focusedElem: e, selectionRange: r }, po = !1, W = t; W !== null; ) if (t = W, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, W = e;
    else for (; W !== null; ) {
      t = W;
      try {
        var Y = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Y !== null) {
              var K = Y.memoizedProps, Ne = Y.memoizedState, C = t.stateNode, _ = C.getSnapshotBeforeUpdate(t.elementType === t.type ? K : bt(t.type, K), Ne);
              C.__reactInternalSnapshotBeforeUpdate = _;
            }
            break;
          case 3:
            var F = t.stateNode.containerInfo;
            F.nodeType === 1 ? F.textContent = "" : F.nodeType === 9 && F.documentElement && F.removeChild(F.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(l(163));
        }
      } catch (j) {
        Te(t, t.return, j);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, W = e;
        break;
      }
      W = t.return;
    }
    return Y = Cc, Cc = !1, Y;
  }
  function Bn(e, t, r) {
    var n = t.updateQueue;
    if (n = n !== null ? n.lastEffect : null, n !== null) {
      var a = n = n.next;
      do {
        if ((a.tag & e) === e) {
          var i = a.destroy;
          a.destroy = void 0, i !== void 0 && el(t, r, i);
        }
        a = a.next;
      } while (a !== n);
    }
  }
  function Xo(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var r = t = t.next;
      do {
        if ((r.tag & e) === e) {
          var n = r.create;
          r.destroy = n();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function tl(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Fc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Fc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[St], delete t[An], delete t[vi], delete t[Vp], delete t[Bp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Pc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function zc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Pc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function rl(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6) e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = So));
    else if (n !== 4 && (e = e.child, e !== null)) for (rl(e, t, r), e = e.sibling; e !== null; ) rl(e, t, r), e = e.sibling;
  }
  function nl(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6) e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (n !== 4 && (e = e.child, e !== null)) for (nl(e, t, r), e = e.sibling; e !== null; ) nl(e, t, r), e = e.sibling;
  }
  var Be = null, xt = !1;
  function er(e, t, r) {
    for (r = r.child; r !== null; ) $c(e, t, r), r = r.sibling;
  }
  function $c(e, t, r) {
    if (Et && typeof Et.onCommitFiberUnmount == "function") try {
      Et.onCommitFiberUnmount(io, r);
    } catch {
    }
    switch (r.tag) {
      case 5:
        Qe || Gr(r, t);
      case 6:
        var n = Be, a = xt;
        Be = null, er(e, t, r), Be = n, xt = a, Be !== null && (xt ? (e = Be, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : Be.removeChild(r.stateNode));
        break;
      case 18:
        Be !== null && (xt ? (e = Be, r = r.stateNode, e.nodeType === 8 ? gi(e.parentNode, r) : e.nodeType === 1 && gi(e, r), xn(e)) : gi(Be, r.stateNode));
        break;
      case 4:
        n = Be, a = xt, Be = r.stateNode.containerInfo, xt = !0, er(e, t, r), Be = n, xt = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Qe && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
          a = n = n.next;
          do {
            var i = a, u = i.destroy;
            i = i.tag, u !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && el(r, t, u), a = a.next;
          } while (a !== n);
        }
        er(e, t, r);
        break;
      case 1:
        if (!Qe && (Gr(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function")) try {
          n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount();
        } catch (m) {
          Te(r, t, m);
        }
        er(e, t, r);
        break;
      case 21:
        er(e, t, r);
        break;
      case 22:
        r.mode & 1 ? (Qe = (n = Qe) || r.memoizedState !== null, er(e, t, r), Qe = n) : er(e, t, r);
        break;
      default:
        er(e, t, r);
    }
  }
  function Tc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new ah()), t.forEach(function(n) {
        var a = mh.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(a, a));
      });
    }
  }
  function kt(e, t) {
    var r = t.deletions;
    if (r !== null) for (var n = 0; n < r.length; n++) {
      var a = r[n];
      try {
        var i = e, u = t, m = u;
        e: for (; m !== null; ) {
          switch (m.tag) {
            case 5:
              Be = m.stateNode, xt = !1;
              break e;
            case 3:
              Be = m.stateNode.containerInfo, xt = !0;
              break e;
            case 4:
              Be = m.stateNode.containerInfo, xt = !0;
              break e;
          }
          m = m.return;
        }
        if (Be === null) throw Error(l(160));
        $c(i, u, a), Be = null, xt = !1;
        var y = a.alternate;
        y !== null && (y.return = null), a.return = null;
      } catch (z) {
        Te(a, t, z);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ac(t, e), t = t.sibling;
  }
  function Ac(e, t) {
    var r = e.alternate, n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (kt(t, e), Pt(e), n & 4) {
          try {
            Bn(3, e, e.return), Xo(3, e);
          } catch (K) {
            Te(e, e.return, K);
          }
          try {
            Bn(5, e, e.return);
          } catch (K) {
            Te(e, e.return, K);
          }
        }
        break;
      case 1:
        kt(t, e), Pt(e), n & 512 && r !== null && Gr(r, r.return);
        break;
      case 5:
        if (kt(t, e), Pt(e), n & 512 && r !== null && Gr(r, r.return), e.flags & 32) {
          var a = e.stateNode;
          try {
            cn(a, "");
          } catch (K) {
            Te(e, e.return, K);
          }
        }
        if (n & 4 && (a = e.stateNode, a != null)) {
          var i = e.memoizedProps, u = r !== null ? r.memoizedProps : i, m = e.type, y = e.updateQueue;
          if (e.updateQueue = null, y !== null) try {
            m === "input" && i.type === "radio" && i.name != null && is(a, i), La(m, u);
            var z = La(m, i);
            for (u = 0; u < y.length; u += 2) {
              var D = y[u], O = y[u + 1];
              D === "style" ? hs(a, O) : D === "dangerouslySetInnerHTML" ? fs(a, O) : D === "children" ? cn(a, O) : ne(a, D, O, z);
            }
            switch (m) {
              case "input":
                za(a, i);
                break;
              case "textarea":
                us(a, i);
                break;
              case "select":
                var R = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!i.multiple;
                var B = i.value;
                B != null ? zr(a, !!i.multiple, B, !1) : R !== !!i.multiple && (i.defaultValue != null ? zr(
                  a,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : zr(a, !!i.multiple, i.multiple ? [] : "", !1));
            }
            a[An] = i;
          } catch (K) {
            Te(e, e.return, K);
          }
        }
        break;
      case 6:
        if (kt(t, e), Pt(e), n & 4) {
          if (e.stateNode === null) throw Error(l(162));
          a = e.stateNode, i = e.memoizedProps;
          try {
            a.nodeValue = i;
          } catch (K) {
            Te(e, e.return, K);
          }
        }
        break;
      case 3:
        if (kt(t, e), Pt(e), n & 4 && r !== null && r.memoizedState.isDehydrated) try {
          xn(t.containerInfo);
        } catch (K) {
          Te(e, e.return, K);
        }
        break;
      case 4:
        kt(t, e), Pt(e);
        break;
      case 13:
        kt(t, e), Pt(e), a = e.child, a.flags & 8192 && (i = a.memoizedState !== null, a.stateNode.isHidden = i, !i || a.alternate !== null && a.alternate.memoizedState !== null || (il = Ae())), n & 4 && Tc(e);
        break;
      case 22:
        if (D = r !== null && r.memoizedState !== null, e.mode & 1 ? (Qe = (z = Qe) || D, kt(t, e), Qe = z) : kt(t, e), Pt(e), n & 8192) {
          if (z = e.memoizedState !== null, (e.stateNode.isHidden = z) && !D && (e.mode & 1) !== 0) for (W = e, D = e.child; D !== null; ) {
            for (O = W = D; W !== null; ) {
              switch (R = W, B = R.child, R.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Bn(4, R, R.return);
                  break;
                case 1:
                  Gr(R, R.return);
                  var Y = R.stateNode;
                  if (typeof Y.componentWillUnmount == "function") {
                    n = R, r = R.return;
                    try {
                      t = n, Y.props = t.memoizedProps, Y.state = t.memoizedState, Y.componentWillUnmount();
                    } catch (K) {
                      Te(n, r, K);
                    }
                  }
                  break;
                case 5:
                  Gr(R, R.return);
                  break;
                case 22:
                  if (R.memoizedState !== null) {
                    Mc(O);
                    continue;
                  }
              }
              B !== null ? (B.return = R, W = B) : Mc(O);
            }
            D = D.sibling;
          }
          e: for (D = null, O = e; ; ) {
            if (O.tag === 5) {
              if (D === null) {
                D = O;
                try {
                  a = O.stateNode, z ? (i = a.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (m = O.stateNode, y = O.memoizedProps.style, u = y != null && y.hasOwnProperty("display") ? y.display : null, m.style.display = ps("display", u));
                } catch (K) {
                  Te(e, e.return, K);
                }
              }
            } else if (O.tag === 6) {
              if (D === null) try {
                O.stateNode.nodeValue = z ? "" : O.memoizedProps;
              } catch (K) {
                Te(e, e.return, K);
              }
            } else if ((O.tag !== 22 && O.tag !== 23 || O.memoizedState === null || O === e) && O.child !== null) {
              O.child.return = O, O = O.child;
              continue;
            }
            if (O === e) break e;
            for (; O.sibling === null; ) {
              if (O.return === null || O.return === e) break e;
              D === O && (D = null), O = O.return;
            }
            D === O && (D = null), O.sibling.return = O.return, O = O.sibling;
          }
        }
        break;
      case 19:
        kt(t, e), Pt(e), n & 4 && Tc(e);
        break;
      case 21:
        break;
      default:
        kt(
          t,
          e
        ), Pt(e);
    }
  }
  function Pt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (Pc(r)) {
              var n = r;
              break e;
            }
            r = r.return;
          }
          throw Error(l(160));
        }
        switch (n.tag) {
          case 5:
            var a = n.stateNode;
            n.flags & 32 && (cn(a, ""), n.flags &= -33);
            var i = zc(e);
            nl(e, i, a);
            break;
          case 3:
          case 4:
            var u = n.stateNode.containerInfo, m = zc(e);
            rl(e, m, u);
            break;
          default:
            throw Error(l(161));
        }
      } catch (y) {
        Te(e, e.return, y);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function lh(e, t, r) {
    W = e, Nc(e);
  }
  function Nc(e, t, r) {
    for (var n = (e.mode & 1) !== 0; W !== null; ) {
      var a = W, i = a.child;
      if (a.tag === 22 && n) {
        var u = a.memoizedState !== null || Ko;
        if (!u) {
          var m = a.alternate, y = m !== null && m.memoizedState !== null || Qe;
          m = Ko;
          var z = Qe;
          if (Ko = u, (Qe = y) && !z) for (W = a; W !== null; ) u = W, y = u.child, u.tag === 22 && u.memoizedState !== null ? Rc(a) : y !== null ? (y.return = u, W = y) : Rc(a);
          for (; i !== null; ) W = i, Nc(i), i = i.sibling;
          W = a, Ko = m, Qe = z;
        }
        Lc(e);
      } else (a.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = a, W = i) : Lc(e);
    }
  }
  function Lc(e) {
    for (; W !== null; ) {
      var t = W;
      if ((t.flags & 8772) !== 0) {
        var r = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Qe || Xo(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !Qe) if (r === null) n.componentDidMount();
              else {
                var a = t.elementType === t.type ? r.memoizedProps : bt(t.type, r.memoizedProps);
                n.componentDidUpdate(a, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
              }
              var i = t.updateQueue;
              i !== null && Mu(t, i, n);
              break;
            case 3:
              var u = t.updateQueue;
              if (u !== null) {
                if (r = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    r = t.child.stateNode;
                    break;
                  case 1:
                    r = t.child.stateNode;
                }
                Mu(t, u, r);
              }
              break;
            case 5:
              var m = t.stateNode;
              if (r === null && t.flags & 4) {
                r = m;
                var y = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    y.autoFocus && r.focus();
                    break;
                  case "img":
                    y.src && (r.src = y.src);
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
                  var D = z.memoizedState;
                  if (D !== null) {
                    var O = D.dehydrated;
                    O !== null && xn(O);
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
              throw Error(l(163));
          }
          Qe || t.flags & 512 && tl(t);
        } catch (R) {
          Te(t, t.return, R);
        }
      }
      if (t === e) {
        W = null;
        break;
      }
      if (r = t.sibling, r !== null) {
        r.return = t.return, W = r;
        break;
      }
      W = t.return;
    }
  }
  function Mc(e) {
    for (; W !== null; ) {
      var t = W;
      if (t === e) {
        W = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        r.return = t.return, W = r;
        break;
      }
      W = t.return;
    }
  }
  function Rc(e) {
    for (; W !== null; ) {
      var t = W;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              Xo(4, t);
            } catch (y) {
              Te(t, r, y);
            }
            break;
          case 1:
            var n = t.stateNode;
            if (typeof n.componentDidMount == "function") {
              var a = t.return;
              try {
                n.componentDidMount();
              } catch (y) {
                Te(t, a, y);
              }
            }
            var i = t.return;
            try {
              tl(t);
            } catch (y) {
              Te(t, i, y);
            }
            break;
          case 5:
            var u = t.return;
            try {
              tl(t);
            } catch (y) {
              Te(t, u, y);
            }
        }
      } catch (y) {
        Te(t, t.return, y);
      }
      if (t === e) {
        W = null;
        break;
      }
      var m = t.sibling;
      if (m !== null) {
        m.return = t.return, W = m;
        break;
      }
      W = t.return;
    }
  }
  var sh = Math.ceil, Qo = ee.ReactCurrentDispatcher, ol = ee.ReactCurrentOwner, ht = ee.ReactCurrentBatchConfig, ce = 0, Oe = null, Le = null, He = 0, ut = 0, qr = Qt(0), Re = 0, Hn = null, vr = 0, Go = 0, al = 0, Wn = null, tt = null, il = 0, Zr = 1 / 0, It = null, qo = !1, ll = null, tr = null, Zo = !1, rr = null, Jo = 0, Yn = 0, sl = null, ea = -1, ta = 0;
  function qe() {
    return (ce & 6) !== 0 ? Ae() : ea !== -1 ? ea : ea = Ae();
  }
  function nr(e) {
    return (e.mode & 1) === 0 ? 1 : (ce & 2) !== 0 && He !== 0 ? He & -He : Wp.transition !== null ? (ta === 0 && (ta = zs()), ta) : (e = he, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ds(e.type)), e);
  }
  function _t(e, t, r, n) {
    if (50 < Yn) throw Yn = 0, sl = null, Error(l(185));
    gn(e, r, n), ((ce & 2) === 0 || e !== Oe) && (e === Oe && ((ce & 2) === 0 && (Go |= r), Re === 4 && or(e, He)), rt(e, n), r === 1 && ce === 0 && (t.mode & 1) === 0 && (Zr = Ae() + 500, zo && qt()));
  }
  function rt(e, t) {
    var r = e.callbackNode;
    Wf(e, t);
    var n = uo(e, e === Oe ? He : 0);
    if (n === 0) r !== null && Cs(r), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = n & -n, e.callbackPriority !== t) {
      if (r != null && Cs(r), t === 1) e.tag === 0 ? Hp(Dc.bind(null, e)) : _u(Dc.bind(null, e)), jp(function() {
        (ce & 6) === 0 && qt();
      }), r = null;
      else {
        switch ($s(n)) {
          case 1:
            r = Ua;
            break;
          case 4:
            r = Fs;
            break;
          case 16:
            r = ao;
            break;
          case 536870912:
            r = Ps;
            break;
          default:
            r = ao;
        }
        r = Yc(r, Ic.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = r;
    }
  }
  function Ic(e, t) {
    if (ea = -1, ta = 0, (ce & 6) !== 0) throw Error(l(327));
    var r = e.callbackNode;
    if (Jr() && e.callbackNode !== r) return null;
    var n = uo(e, e === Oe ? He : 0);
    if (n === 0) return null;
    if ((n & 30) !== 0 || (n & e.expiredLanes) !== 0 || t) t = ra(e, n);
    else {
      t = n;
      var a = ce;
      ce |= 2;
      var i = jc();
      (Oe !== e || He !== t) && (It = null, Zr = Ae() + 500, yr(e, t));
      do
        try {
          dh();
          break;
        } catch (m) {
          Oc(e, m);
        }
      while (!0);
      Ci(), Qo.current = i, ce = a, Le !== null ? t = 0 : (Oe = null, He = 0, t = Re);
    }
    if (t !== 0) {
      if (t === 2 && (a = Va(e), a !== 0 && (n = a, t = ul(e, a))), t === 1) throw r = Hn, yr(e, 0), or(e, n), rt(e, Ae()), r;
      if (t === 6) or(e, n);
      else {
        if (a = e.current.alternate, (n & 30) === 0 && !uh(a) && (t = ra(e, n), t === 2 && (i = Va(e), i !== 0 && (n = i, t = ul(e, i))), t === 1)) throw r = Hn, yr(e, 0), or(e, n), rt(e, Ae()), r;
        switch (e.finishedWork = a, e.finishedLanes = n, t) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            br(e, tt, It);
            break;
          case 3:
            if (or(e, n), (n & 130023424) === n && (t = il + 500 - Ae(), 10 < t)) {
              if (uo(e, 0) !== 0) break;
              if (a = e.suspendedLanes, (a & n) !== n) {
                qe(), e.pingedLanes |= e.suspendedLanes & a;
                break;
              }
              e.timeoutHandle = mi(br.bind(null, e, tt, It), t);
              break;
            }
            br(e, tt, It);
            break;
          case 4:
            if (or(e, n), (n & 4194240) === n) break;
            for (t = e.eventTimes, a = -1; 0 < n; ) {
              var u = 31 - vt(n);
              i = 1 << u, u = t[u], u > a && (a = u), n &= ~i;
            }
            if (n = a, n = Ae() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * sh(n / 1960)) - n, 10 < n) {
              e.timeoutHandle = mi(br.bind(null, e, tt, It), n);
              break;
            }
            br(e, tt, It);
            break;
          case 5:
            br(e, tt, It);
            break;
          default:
            throw Error(l(329));
        }
      }
    }
    return rt(e, Ae()), e.callbackNode === r ? Ic.bind(null, e) : null;
  }
  function ul(e, t) {
    var r = Wn;
    return e.current.memoizedState.isDehydrated && (yr(e, t).flags |= 256), e = ra(e, t), e !== 2 && (t = tt, tt = r, t !== null && cl(t)), e;
  }
  function cl(e) {
    tt === null ? tt = e : tt.push.apply(tt, e);
  }
  function uh(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && (r = r.stores, r !== null)) for (var n = 0; n < r.length; n++) {
          var a = r[n], i = a.getSnapshot;
          a = a.value;
          try {
            if (!wt(i(), a)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (r = t.child, t.subtreeFlags & 16384 && r !== null) r.return = t, t = r;
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
  function or(e, t) {
    for (t &= ~al, t &= ~Go, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var r = 31 - vt(t), n = 1 << r;
      e[r] = -1, t &= ~n;
    }
  }
  function Dc(e) {
    if ((ce & 6) !== 0) throw Error(l(327));
    Jr();
    var t = uo(e, 0);
    if ((t & 1) === 0) return rt(e, Ae()), null;
    var r = ra(e, t);
    if (e.tag !== 0 && r === 2) {
      var n = Va(e);
      n !== 0 && (t = n, r = ul(e, n));
    }
    if (r === 1) throw r = Hn, yr(e, 0), or(e, t), rt(e, Ae()), r;
    if (r === 6) throw Error(l(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, br(e, tt, It), rt(e, Ae()), null;
  }
  function dl(e, t) {
    var r = ce;
    ce |= 1;
    try {
      return e(t);
    } finally {
      ce = r, ce === 0 && (Zr = Ae() + 500, zo && qt());
    }
  }
  function wr(e) {
    rr !== null && rr.tag === 0 && (ce & 6) === 0 && Jr();
    var t = ce;
    ce |= 1;
    var r = ht.transition, n = he;
    try {
      if (ht.transition = null, he = 1, e) return e();
    } finally {
      he = n, ht.transition = r, ce = t, (ce & 6) === 0 && qt();
    }
  }
  function fl() {
    ut = qr.current, xe(qr);
  }
  function yr(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var r = e.timeoutHandle;
    if (r !== -1 && (e.timeoutHandle = -1, Op(r)), Le !== null) for (r = Le.return; r !== null; ) {
      var n = r;
      switch (xi(n), n.tag) {
        case 1:
          n = n.type.childContextTypes, n != null && Fo();
          break;
        case 3:
          Xr(), xe(Ze), xe(Ye), Li();
          break;
        case 5:
          Ai(n);
          break;
        case 4:
          Xr();
          break;
        case 13:
          xe(Pe);
          break;
        case 19:
          xe(Pe);
          break;
        case 10:
          Fi(n.type._context);
          break;
        case 22:
        case 23:
          fl();
      }
      r = r.return;
    }
    if (Oe = e, Le = e = ar(e.current, null), He = ut = t, Re = 0, Hn = null, al = Go = vr = 0, tt = Wn = null, hr !== null) {
      for (t = 0; t < hr.length; t++) if (r = hr[t], n = r.interleaved, n !== null) {
        r.interleaved = null;
        var a = n.next, i = r.pending;
        if (i !== null) {
          var u = i.next;
          i.next = a, n.next = u;
        }
        r.pending = n;
      }
      hr = null;
    }
    return e;
  }
  function Oc(e, t) {
    do {
      var r = Le;
      try {
        if (Ci(), Oo.current = Bo, jo) {
          for (var n = ze.memoizedState; n !== null; ) {
            var a = n.queue;
            a !== null && (a.pending = null), n = n.next;
          }
          jo = !1;
        }
        if (gr = 0, De = Me = ze = null, Dn = !1, On = 0, ol.current = null, r === null || r.return === null) {
          Re = 1, Hn = t, Le = null;
          break;
        }
        e: {
          var i = e, u = r.return, m = r, y = t;
          if (t = He, m.flags |= 32768, y !== null && typeof y == "object" && typeof y.then == "function") {
            var z = y, D = m, O = D.tag;
            if ((D.mode & 1) === 0 && (O === 0 || O === 11 || O === 15)) {
              var R = D.alternate;
              R ? (D.updateQueue = R.updateQueue, D.memoizedState = R.memoizedState, D.lanes = R.lanes) : (D.updateQueue = null, D.memoizedState = null);
            }
            var B = cc(u);
            if (B !== null) {
              B.flags &= -257, dc(B, u, m, i, t), B.mode & 1 && uc(i, z, t), t = B, y = z;
              var Y = t.updateQueue;
              if (Y === null) {
                var K = /* @__PURE__ */ new Set();
                K.add(y), t.updateQueue = K;
              } else Y.add(y);
              break e;
            } else {
              if ((t & 1) === 0) {
                uc(i, z, t), pl();
                break e;
              }
              y = Error(l(426));
            }
          } else if (Ce && m.mode & 1) {
            var Ne = cc(u);
            if (Ne !== null) {
              (Ne.flags & 65536) === 0 && (Ne.flags |= 256), dc(Ne, u, m, i, t), Ei(Qr(y, m));
              break e;
            }
          }
          i = y = Qr(y, m), Re !== 4 && (Re = 2), Wn === null ? Wn = [i] : Wn.push(i), i = u;
          do {
            switch (i.tag) {
              case 3:
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var C = lc(i, y, t);
                Lu(i, C);
                break e;
              case 1:
                m = y;
                var _ = i.type, F = i.stateNode;
                if ((i.flags & 128) === 0 && (typeof _.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && (tr === null || !tr.has(F)))) {
                  i.flags |= 65536, t &= -t, i.lanes |= t;
                  var j = sc(i, m, t);
                  Lu(i, j);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        Vc(r);
      } catch (Q) {
        t = Q, Le === r && r !== null && (Le = r = r.return);
        continue;
      }
      break;
    } while (!0);
  }
  function jc() {
    var e = Qo.current;
    return Qo.current = Bo, e === null ? Bo : e;
  }
  function pl() {
    (Re === 0 || Re === 3 || Re === 2) && (Re = 4), Oe === null || (vr & 268435455) === 0 && (Go & 268435455) === 0 || or(Oe, He);
  }
  function ra(e, t) {
    var r = ce;
    ce |= 2;
    var n = jc();
    (Oe !== e || He !== t) && (It = null, yr(e, t));
    do
      try {
        ch();
        break;
      } catch (a) {
        Oc(e, a);
      }
    while (!0);
    if (Ci(), ce = r, Qo.current = n, Le !== null) throw Error(l(261));
    return Oe = null, He = 0, Re;
  }
  function ch() {
    for (; Le !== null; ) Uc(Le);
  }
  function dh() {
    for (; Le !== null && !Rf(); ) Uc(Le);
  }
  function Uc(e) {
    var t = Wc(e.alternate, e, ut);
    e.memoizedProps = e.pendingProps, t === null ? Vc(e) : Le = t, ol.current = null;
  }
  function Vc(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (r = nh(r, t, ut), r !== null) {
          Le = r;
          return;
        }
      } else {
        if (r = oh(r, t), r !== null) {
          r.flags &= 32767, Le = r;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Re = 6, Le = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Le = t;
        return;
      }
      Le = t = e;
    } while (t !== null);
    Re === 0 && (Re = 5);
  }
  function br(e, t, r) {
    var n = he, a = ht.transition;
    try {
      ht.transition = null, he = 1, fh(e, t, r, n);
    } finally {
      ht.transition = a, he = n;
    }
    return null;
  }
  function fh(e, t, r, n) {
    do
      Jr();
    while (rr !== null);
    if ((ce & 6) !== 0) throw Error(l(327));
    r = e.finishedWork;
    var a = e.finishedLanes;
    if (r === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(l(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = r.lanes | r.childLanes;
    if (Yf(e, i), e === Oe && (Le = Oe = null, He = 0), (r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0 || Zo || (Zo = !0, Yc(ao, function() {
      return Jr(), null;
    })), i = (r.flags & 15990) !== 0, (r.subtreeFlags & 15990) !== 0 || i) {
      i = ht.transition, ht.transition = null;
      var u = he;
      he = 1;
      var m = ce;
      ce |= 4, ol.current = null, ih(e, r), Ac(r, e), Ap(pi), po = !!fi, pi = fi = null, e.current = r, lh(r), If(), ce = m, he = u, ht.transition = i;
    } else e.current = r;
    if (Zo && (Zo = !1, rr = e, Jo = a), i = e.pendingLanes, i === 0 && (tr = null), jf(r.stateNode), rt(e, Ae()), t !== null) for (n = e.onRecoverableError, r = 0; r < t.length; r++) a = t[r], n(a.value, { componentStack: a.stack, digest: a.digest });
    if (qo) throw qo = !1, e = ll, ll = null, e;
    return (Jo & 1) !== 0 && e.tag !== 0 && Jr(), i = e.pendingLanes, (i & 1) !== 0 ? e === sl ? Yn++ : (Yn = 0, sl = e) : Yn = 0, qt(), null;
  }
  function Jr() {
    if (rr !== null) {
      var e = $s(Jo), t = ht.transition, r = he;
      try {
        if (ht.transition = null, he = 16 > e ? 16 : e, rr === null) var n = !1;
        else {
          if (e = rr, rr = null, Jo = 0, (ce & 6) !== 0) throw Error(l(331));
          var a = ce;
          for (ce |= 4, W = e.current; W !== null; ) {
            var i = W, u = i.child;
            if ((W.flags & 16) !== 0) {
              var m = i.deletions;
              if (m !== null) {
                for (var y = 0; y < m.length; y++) {
                  var z = m[y];
                  for (W = z; W !== null; ) {
                    var D = W;
                    switch (D.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Bn(8, D, i);
                    }
                    var O = D.child;
                    if (O !== null) O.return = D, W = O;
                    else for (; W !== null; ) {
                      D = W;
                      var R = D.sibling, B = D.return;
                      if (Fc(D), D === z) {
                        W = null;
                        break;
                      }
                      if (R !== null) {
                        R.return = B, W = R;
                        break;
                      }
                      W = B;
                    }
                  }
                }
                var Y = i.alternate;
                if (Y !== null) {
                  var K = Y.child;
                  if (K !== null) {
                    Y.child = null;
                    do {
                      var Ne = K.sibling;
                      K.sibling = null, K = Ne;
                    } while (K !== null);
                  }
                }
                W = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && u !== null) u.return = i, W = u;
            else e: for (; W !== null; ) {
              if (i = W, (i.flags & 2048) !== 0) switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  Bn(9, i, i.return);
              }
              var C = i.sibling;
              if (C !== null) {
                C.return = i.return, W = C;
                break e;
              }
              W = i.return;
            }
          }
          var _ = e.current;
          for (W = _; W !== null; ) {
            u = W;
            var F = u.child;
            if ((u.subtreeFlags & 2064) !== 0 && F !== null) F.return = u, W = F;
            else e: for (u = _; W !== null; ) {
              if (m = W, (m.flags & 2048) !== 0) try {
                switch (m.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Xo(9, m);
                }
              } catch (Q) {
                Te(m, m.return, Q);
              }
              if (m === u) {
                W = null;
                break e;
              }
              var j = m.sibling;
              if (j !== null) {
                j.return = m.return, W = j;
                break e;
              }
              W = m.return;
            }
          }
          if (ce = a, qt(), Et && typeof Et.onPostCommitFiberRoot == "function") try {
            Et.onPostCommitFiberRoot(io, e);
          } catch {
          }
          n = !0;
        }
        return n;
      } finally {
        he = r, ht.transition = t;
      }
    }
    return !1;
  }
  function Bc(e, t, r) {
    t = Qr(r, t), t = lc(e, t, 1), e = Jt(e, t, 1), t = qe(), e !== null && (gn(e, 1, t), rt(e, t));
  }
  function Te(e, t, r) {
    if (e.tag === 3) Bc(e, e, r);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Bc(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (tr === null || !tr.has(n))) {
          e = Qr(r, e), e = sc(t, e, 1), t = Jt(t, e, 1), e = qe(), t !== null && (gn(t, 1, e), rt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function ph(e, t, r) {
    var n = e.pingCache;
    n !== null && n.delete(t), t = qe(), e.pingedLanes |= e.suspendedLanes & r, Oe === e && (He & r) === r && (Re === 4 || Re === 3 && (He & 130023424) === He && 500 > Ae() - il ? yr(e, 0) : al |= r), rt(e, t);
  }
  function Hc(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = so, so <<= 1, (so & 130023424) === 0 && (so = 4194304)));
    var r = qe();
    e = Lt(e, t), e !== null && (gn(e, t, r), rt(e, r));
  }
  function hh(e) {
    var t = e.memoizedState, r = 0;
    t !== null && (r = t.retryLane), Hc(e, r);
  }
  function mh(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var n = e.stateNode, a = e.memoizedState;
        a !== null && (r = a.retryLane);
        break;
      case 19:
        n = e.stateNode;
        break;
      default:
        throw Error(l(314));
    }
    n !== null && n.delete(t), Hc(e, r);
  }
  var Wc;
  Wc = function(e, t, r) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ze.current) et = !0;
    else {
      if ((e.lanes & r) === 0 && (t.flags & 128) === 0) return et = !1, rh(e, t, r);
      et = (e.flags & 131072) !== 0;
    }
    else et = !1, Ce && (t.flags & 1048576) !== 0 && Eu(t, To, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var n = t.type;
        Yo(e, t), e = t.pendingProps;
        var a = Ur(t, Ye.current);
        Kr(t, r), a = Ii(null, t, n, e, a, r);
        var i = Di();
        return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Je(n) ? (i = !0, Po(t)) : i = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, $i(t), a.updater = Ho, t.stateNode = a, a._reactInternals = t, Hi(t, n, e, r), t = Xi(null, t, n, !0, i, r)) : (t.tag = 0, Ce && i && bi(t), Ge(null, t, a, r), t = t.child), t;
      case 16:
        n = t.elementType;
        e: {
          switch (Yo(e, t), e = t.pendingProps, a = n._init, n = a(n._payload), t.type = n, a = t.tag = vh(n), e = bt(n, e), a) {
            case 0:
              t = Ki(null, t, n, e, r);
              break e;
            case 1:
              t = vc(null, t, n, e, r);
              break e;
            case 11:
              t = fc(null, t, n, e, r);
              break e;
            case 14:
              t = pc(null, t, n, bt(n.type, e), r);
              break e;
          }
          throw Error(l(
            306,
            n,
            ""
          ));
        }
        return t;
      case 0:
        return n = t.type, a = t.pendingProps, a = t.elementType === n ? a : bt(n, a), Ki(e, t, n, a, r);
      case 1:
        return n = t.type, a = t.pendingProps, a = t.elementType === n ? a : bt(n, a), vc(e, t, n, a, r);
      case 3:
        e: {
          if (wc(t), e === null) throw Error(l(387));
          n = t.pendingProps, i = t.memoizedState, a = i.element, Nu(e, t), Io(t, n, null, r);
          var u = t.memoizedState;
          if (n = u.element, i.isDehydrated) if (i = { element: n, isDehydrated: !1, cache: u.cache, pendingSuspenseBoundaries: u.pendingSuspenseBoundaries, transitions: u.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            a = Qr(Error(l(423)), t), t = yc(e, t, n, r, a);
            break e;
          } else if (n !== a) {
            a = Qr(Error(l(424)), t), t = yc(e, t, n, r, a);
            break e;
          } else for (st = Xt(t.stateNode.containerInfo.firstChild), lt = t, Ce = !0, yt = null, r = Tu(t, null, n, r), t.child = r; r; ) r.flags = r.flags & -3 | 4096, r = r.sibling;
          else {
            if (Hr(), n === a) {
              t = Rt(e, t, r);
              break e;
            }
            Ge(e, t, n, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Ru(t), e === null && _i(t), n = t.type, a = t.pendingProps, i = e !== null ? e.memoizedProps : null, u = a.children, hi(n, a) ? u = null : i !== null && hi(n, i) && (t.flags |= 32), gc(e, t), Ge(e, t, u, r), t.child;
      case 6:
        return e === null && _i(t), null;
      case 13:
        return bc(e, t, r);
      case 4:
        return Ti(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = Wr(t, null, n, r) : Ge(e, t, n, r), t.child;
      case 11:
        return n = t.type, a = t.pendingProps, a = t.elementType === n ? a : bt(n, a), fc(e, t, n, a, r);
      case 7:
        return Ge(e, t, t.pendingProps, r), t.child;
      case 8:
        return Ge(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return Ge(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (n = t.type._context, a = t.pendingProps, i = t.memoizedProps, u = a.value, ye(Lo, n._currentValue), n._currentValue = u, i !== null) if (wt(i.value, u)) {
            if (i.children === a.children && !Ze.current) {
              t = Rt(e, t, r);
              break e;
            }
          } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
            var m = i.dependencies;
            if (m !== null) {
              u = i.child;
              for (var y = m.firstContext; y !== null; ) {
                if (y.context === n) {
                  if (i.tag === 1) {
                    y = Mt(-1, r & -r), y.tag = 2;
                    var z = i.updateQueue;
                    if (z !== null) {
                      z = z.shared;
                      var D = z.pending;
                      D === null ? y.next = y : (y.next = D.next, D.next = y), z.pending = y;
                    }
                  }
                  i.lanes |= r, y = i.alternate, y !== null && (y.lanes |= r), Pi(
                    i.return,
                    r,
                    t
                  ), m.lanes |= r;
                  break;
                }
                y = y.next;
              }
            } else if (i.tag === 10) u = i.type === t.type ? null : i.child;
            else if (i.tag === 18) {
              if (u = i.return, u === null) throw Error(l(341));
              u.lanes |= r, m = u.alternate, m !== null && (m.lanes |= r), Pi(u, r, t), u = i.sibling;
            } else u = i.child;
            if (u !== null) u.return = i;
            else for (u = i; u !== null; ) {
              if (u === t) {
                u = null;
                break;
              }
              if (i = u.sibling, i !== null) {
                i.return = u.return, u = i;
                break;
              }
              u = u.return;
            }
            i = u;
          }
          Ge(e, t, a.children, r), t = t.child;
        }
        return t;
      case 9:
        return a = t.type, n = t.pendingProps.children, Kr(t, r), a = ft(a), n = n(a), t.flags |= 1, Ge(e, t, n, r), t.child;
      case 14:
        return n = t.type, a = bt(n, t.pendingProps), a = bt(n.type, a), pc(e, t, n, a, r);
      case 15:
        return hc(e, t, t.type, t.pendingProps, r);
      case 17:
        return n = t.type, a = t.pendingProps, a = t.elementType === n ? a : bt(n, a), Yo(e, t), t.tag = 1, Je(n) ? (e = !0, Po(t)) : e = !1, Kr(t, r), ac(t, n, a), Hi(t, n, a, r), Xi(null, t, n, !0, e, r);
      case 19:
        return kc(e, t, r);
      case 22:
        return mc(e, t, r);
    }
    throw Error(l(156, t.tag));
  };
  function Yc(e, t) {
    return Ss(e, t);
  }
  function gh(e, t, r, n) {
    this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function mt(e, t, r, n) {
    return new gh(e, t, r, n);
  }
  function hl(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function vh(e) {
    if (typeof e == "function") return hl(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === V) return 11;
      if (e === U) return 14;
    }
    return 2;
  }
  function ar(e, t) {
    var r = e.alternate;
    return r === null ? (r = mt(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r;
  }
  function na(e, t, r, n, a, i) {
    var u = 2;
    if (n = e, typeof e == "function") hl(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else e: switch (e) {
      case fe:
        return xr(r.children, a, i, t);
      case Ee:
        u = 8, a |= 8;
        break;
      case $e:
        return e = mt(12, r, t, a | 2), e.elementType = $e, e.lanes = i, e;
      case J:
        return e = mt(13, r, t, a), e.elementType = J, e.lanes = i, e;
      case P:
        return e = mt(19, r, t, a), e.elementType = P, e.lanes = i, e;
      case L:
        return oa(r, a, i, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Ie:
            u = 10;
            break e;
          case Ve:
            u = 9;
            break e;
          case V:
            u = 11;
            break e;
          case U:
            u = 14;
            break e;
          case H:
            u = 16, n = null;
            break e;
        }
        throw Error(l(130, e == null ? e : typeof e, ""));
    }
    return t = mt(u, r, t, a), t.elementType = e, t.type = n, t.lanes = i, t;
  }
  function xr(e, t, r, n) {
    return e = mt(7, e, n, t), e.lanes = r, e;
  }
  function oa(e, t, r, n) {
    return e = mt(22, e, n, t), e.elementType = L, e.lanes = r, e.stateNode = { isHidden: !1 }, e;
  }
  function ml(e, t, r) {
    return e = mt(6, e, null, t), e.lanes = r, e;
  }
  function gl(e, t, r) {
    return t = mt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function wh(e, t, r, n, a) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ba(0), this.expirationTimes = Ba(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ba(0), this.identifierPrefix = n, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
  }
  function vl(e, t, r, n, a, i, u, m, y) {
    return e = new wh(e, t, r, m, y), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = mt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: n, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, $i(i), e;
  }
  function yh(e, t, r) {
    var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: _e, key: n == null ? null : "" + n, children: e, containerInfo: t, implementation: r };
  }
  function Kc(e) {
    if (!e) return Gt;
    e = e._reactInternals;
    e: {
      if (ur(e) !== e || e.tag !== 1) throw Error(l(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Je(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(l(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (Je(r)) return xu(e, r, t);
    }
    return t;
  }
  function Xc(e, t, r, n, a, i, u, m, y) {
    return e = vl(r, n, !0, e, a, i, u, m, y), e.context = Kc(null), r = e.current, n = qe(), a = nr(r), i = Mt(n, a), i.callback = t ?? null, Jt(r, i, a), e.current.lanes = a, gn(e, a, n), rt(e, n), e;
  }
  function aa(e, t, r, n) {
    var a = t.current, i = qe(), u = nr(a);
    return r = Kc(r), t.context === null ? t.context = r : t.pendingContext = r, t = Mt(i, u), t.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e = Jt(a, t, u), e !== null && (_t(e, a, u, i), Ro(e, a, u)), u;
  }
  function ia(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Qc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function wl(e, t) {
    Qc(e, t), (e = e.alternate) && Qc(e, t);
  }
  function bh() {
    return null;
  }
  var Gc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function yl(e) {
    this._internalRoot = e;
  }
  la.prototype.render = yl.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(l(409));
    aa(e, t, null, null);
  }, la.prototype.unmount = yl.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      wr(function() {
        aa(null, e, null, null);
      }), t[$t] = null;
    }
  };
  function la(e) {
    this._internalRoot = e;
  }
  la.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ns();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < Wt.length && t !== 0 && t < Wt[r].priority; r++) ;
      Wt.splice(r, 0, e), r === 0 && Rs(e);
    }
  };
  function bl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function sa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function qc() {
  }
  function xh(e, t, r, n, a) {
    if (a) {
      if (typeof n == "function") {
        var i = n;
        n = function() {
          var z = ia(u);
          i.call(z);
        };
      }
      var u = Xc(t, n, e, 0, null, !1, !1, "", qc);
      return e._reactRootContainer = u, e[$t] = u.current, $n(e.nodeType === 8 ? e.parentNode : e), wr(), u;
    }
    for (; a = e.lastChild; ) e.removeChild(a);
    if (typeof n == "function") {
      var m = n;
      n = function() {
        var z = ia(y);
        m.call(z);
      };
    }
    var y = vl(e, 0, !1, null, null, !1, !1, "", qc);
    return e._reactRootContainer = y, e[$t] = y.current, $n(e.nodeType === 8 ? e.parentNode : e), wr(function() {
      aa(t, y, r, n);
    }), y;
  }
  function ua(e, t, r, n, a) {
    var i = r._reactRootContainer;
    if (i) {
      var u = i;
      if (typeof a == "function") {
        var m = a;
        a = function() {
          var y = ia(u);
          m.call(y);
        };
      }
      aa(t, u, e, a);
    } else u = xh(r, t, e, a, n);
    return ia(u);
  }
  Ts = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = mn(t.pendingLanes);
          r !== 0 && (Ha(t, r | 1), rt(t, Ae()), (ce & 6) === 0 && (Zr = Ae() + 500, qt()));
        }
        break;
      case 13:
        wr(function() {
          var n = Lt(e, 1);
          if (n !== null) {
            var a = qe();
            _t(n, e, 1, a);
          }
        }), wl(e, 1);
    }
  }, Wa = function(e) {
    if (e.tag === 13) {
      var t = Lt(e, 134217728);
      if (t !== null) {
        var r = qe();
        _t(t, e, 134217728, r);
      }
      wl(e, 134217728);
    }
  }, As = function(e) {
    if (e.tag === 13) {
      var t = nr(e), r = Lt(e, t);
      if (r !== null) {
        var n = qe();
        _t(r, e, t, n);
      }
      wl(e, t);
    }
  }, Ns = function() {
    return he;
  }, Ls = function(e, t) {
    var r = he;
    try {
      return he = e, t();
    } finally {
      he = r;
    }
  }, Ia = function(e, t, r) {
    switch (t) {
      case "input":
        if (za(e, r), t = r.name, r.type === "radio" && t != null) {
          for (r = e; r.parentNode; ) r = r.parentNode;
          for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
            var n = r[t];
            if (n !== e && n.form === e.form) {
              var a = Co(n);
              if (!a) throw Error(l(90));
              os(n), za(n, a);
            }
          }
        }
        break;
      case "textarea":
        us(e, r);
        break;
      case "select":
        t = r.value, t != null && zr(e, !!r.multiple, t, !1);
    }
  }, ws = dl, ys = wr;
  var kh = { usingClientEntryPoint: !1, Events: [Nn, Or, Co, gs, vs, dl] }, Kn = { findFiberByHostInstance: cr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, _h = { bundleType: Kn.bundleType, version: Kn.version, rendererPackageName: Kn.rendererPackageName, rendererConfig: Kn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ee.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = _s(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Kn.findFiberByHostInstance || bh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ca = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ca.isDisabled && ca.supportsFiber) try {
      io = ca.inject(_h), Et = ca;
    } catch {
    }
  }
  return nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kh, nt.createPortal = function(e, t) {
    var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!bl(t)) throw Error(l(200));
    return yh(e, t, null, r);
  }, nt.createRoot = function(e, t) {
    if (!bl(e)) throw Error(l(299));
    var r = !1, n = "", a = Gc;
    return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = vl(e, 1, !1, null, null, r, !1, n, a), e[$t] = t.current, $n(e.nodeType === 8 ? e.parentNode : e), new yl(t);
  }, nt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
    return e = _s(t), e = e === null ? null : e.stateNode, e;
  }, nt.flushSync = function(e) {
    return wr(e);
  }, nt.hydrate = function(e, t, r) {
    if (!sa(t)) throw Error(l(200));
    return ua(null, e, t, !0, r);
  }, nt.hydrateRoot = function(e, t, r) {
    if (!bl(e)) throw Error(l(405));
    var n = r != null && r.hydratedSources || null, a = !1, i = "", u = Gc;
    if (r != null && (r.unstable_strictMode === !0 && (a = !0), r.identifierPrefix !== void 0 && (i = r.identifierPrefix), r.onRecoverableError !== void 0 && (u = r.onRecoverableError)), t = Xc(t, null, e, 1, r ?? null, a, !1, i, u), e[$t] = t.current, $n(e), n) for (e = 0; e < n.length; e++) r = n[e], a = r._getVersion, a = a(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, a] : t.mutableSourceEagerHydrationData.push(
      r,
      a
    );
    return new la(t);
  }, nt.render = function(e, t, r) {
    if (!sa(t)) throw Error(l(200));
    return ua(null, e, t, !1, r);
  }, nt.unmountComponentAtNode = function(e) {
    if (!sa(e)) throw Error(l(40));
    return e._reactRootContainer ? (wr(function() {
      ua(null, null, e, !1, function() {
        e._reactRootContainer = null, e[$t] = null;
      });
    }), !0) : !1;
  }, nt.unstable_batchedUpdates = dl, nt.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
    if (!sa(r)) throw Error(l(200));
    if (e == null || e._reactInternals === void 0) throw Error(l(38));
    return ua(e, t, r, !1, n);
  }, nt.version = "18.3.1-next-f1338f8080-20240426", nt;
}
var ld;
function Nd() {
  if (ld) return _l.exports;
  ld = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (s) {
        console.error(s);
      }
  }
  return o(), _l.exports = zh(), _l.exports;
}
var sd;
function $h() {
  if (sd) return da;
  sd = 1;
  var o = Nd();
  return da.createRoot = o.createRoot, da.hydrateRoot = o.hydrateRoot, da;
}
var Th = $h();
const Ah = `:root{--border-highlight-color: rgb(7, 45, 162);--border-neutral-bold-color: rgba(0, 0, 0, .8);--border-neutral-regular-color: rgba(0, 0, 0, .3);--border-neutral-subtle-color: rgba(0, 0, 0, .1);--border-neutral-minimal-color: rgba(0, 0, 0, .05);--border-positive-color: rgb(43, 92, 25);--border-warning-color: rgb(195, 92, 0);--border-negative-color: rgb(203, 31, 31);--surface-highlight-subtle-color: rgb(211, 221, 253);--surface-highlight-bold-color: rgb(7, 45, 162);--surface-container-color: rgb(255, 255, 255);--surface-level-01-color: rgba(250, 250, 250, .98);--surface-level-02-color: rgba(242, 242, 242, .95);--surface-level-03-color: rgba(235, 235, 235, .92);--surface-inverse-color: rgba(0, 0, 0, .97);--surface-positive-subtle-color: rgb(222, 242, 214);--surface-positive-bold-color: rgb(43, 92, 25);--surface-warning-subtle-color: rgb(255, 228, 204);--surface-warning-bold-color: rgb(137, 64, 0);--surface-negative-subtle-color: rgb(245, 210, 210);--surface-negative-bold-color: rgb(203, 31, 31);--surface-overlay-color: rgba(255, 255, 255, .97);--content-highlight-color: rgb(7, 45, 162);--content-neutral-bold-color: rgba(15, 15, 15, .95);--content-neutral-regular-color: rgba(15, 15, 15, .75);--content-neutral-subtle-color: rgba(15, 15, 15, .6);--content-inverse-bold-color: rgb(255, 255, 255);--content-inverse-regular-color: rgba(255, 255, 255, .7);--content-inverse-subtle-color: rgba(255, 255, 255, .6);--content-positive-color: rgb(28, 60, 17);--content-warning-color: rgb(92, 43, 0);--content-negative-color: rgb(155, 24, 24);--interactive-highlight-color: rgb(7, 45, 162);--interactive-neutral-bold-color: rgb(0, 0, 0);--interactive-neutral-regular-color: rgba(235, 235, 235, .92);--interactive-neutral-subtle-color: rgba(242, 242, 242, .95);--interactive-neutral-minimal-color: rgb(255, 255, 255);--interactive-inverse-color: rgb(255, 255, 255);--interactive-negative-bold-color: rgb(155, 24, 24);--interactive-negative-subtle-color: rgb(245, 210, 210);--background-base-color: rgb(235, 240, 254);--background-accent-color: rgb(123, 154, 250);--background-glow-color: rgb(186, 132, 241);--background-backdrop-color: rgba(255, 255, 255, .8);--paloma-font-family-body: Electronic Arts Text;--paloma-font-family-heading: Electronic Arts Display;--font-size-body-medium: 1rem;--line-height-body-medium: 1.5rem;--font-size-body-large: 1.125rem;--line-height-body-large: 2rem;--font-size-body-x-small: .75rem;--line-height-body-x-small: 1rem;--font-size-body-small: .875rem;--line-height-body-small: 1.25rem;--font-size-heading-x-small: 1.25rem;--line-height-heading-x-small: 1.75rem;--font-size-lg-heading-large: 3.25rem;--line-height-lg-heading-large: 4rem;--font-size-xs-heading-large: 2rem;--line-height-xs-heading-large: 2.5rem;--font-size-heading-small: 1.75rem;--line-height-heading-small: 2.25rem;--font-size-xs-heading-medium: 2rem;--line-height-xs-heading-medium: 2.5rem;--font-size-lg-heading-x-large: 4.5rem;--line-height-lg-heading-x-large: 5rem;--font-size-lg-heading-medium: 2.25rem;--line-height-lg-heading-medium: 2.75rem;--font-size-xs-heading-x-large: 2.25rem;--line-height-xs-heading-x-large: 2.625rem }[data-paloma-mode=dark]{--border-highlight-color: rgb(123, 154, 250);--border-neutral-bold-color: rgba(255, 255, 255, .8);--border-neutral-regular-color: rgba(255, 255, 255, .3);--border-neutral-subtle-color: rgba(255, 255, 255, .1);--border-neutral-minimal-color: rgba(255, 255, 255, .05);--border-positive-color: rgb(88, 188, 52);--border-warning-color: rgb(255, 120, 0);--border-negative-color: rgb(221, 108, 108);--surface-highlight-subtle-color: rgba(211, 221, 253, .1);--surface-highlight-bold-color: rgb(211, 221, 253);--surface-container-color: rgba(15, 15, 15, .06);--surface-level-01-color: rgba(31, 31, 31, .12);--surface-level-02-color: rgba(61, 61, 61, .16);--surface-level-03-color: rgba(122, 122, 122, .2);--surface-inverse-color: rgba(255, 255, 255, .97);--surface-positive-subtle-color: rgba(27, 58, 16, .4);--surface-positive-bold-color: rgb(88, 188, 52);--surface-warning-subtle-color: rgba(79, 37, 0, .5);--surface-warning-bold-color: rgb(255, 120, 0);--surface-negative-subtle-color: rgba(63, 10, 10, .5);--surface-negative-bold-color: rgb(221, 108, 108);--surface-overlay-color: rgba(0, 0, 0, .97);--content-highlight-color: rgb(123, 154, 250);--content-neutral-bold-color: rgba(255, 255, 255, .97);--content-neutral-regular-color: rgba(255, 255, 255, .75);--content-neutral-subtle-color: rgba(255, 255, 255, .5);--content-inverse-bold-color: rgb(15, 15, 15);--content-inverse-regular-color: rgba(0, 0, 0, .75);--content-inverse-subtle-color: rgba(0, 0, 0, .6);--content-positive-color: rgb(188, 228, 174);--content-warning-color: rgb(255, 120, 0);--content-negative-color: rgb(229, 144, 144);--interactive-highlight-color: rgb(123, 154, 250);--interactive-neutral-bold-color: rgb(255, 255, 255);--interactive-neutral-regular-color: rgba(122, 122, 122, .2);--interactive-neutral-subtle-color: rgba(61, 61, 61, .16);--interactive-neutral-minimal-color: rgba(61, 61, 61, .16);--interactive-inverse-color: rgb(15, 15, 15);--interactive-negative-bold-color: rgb(245, 210, 210);--interactive-negative-subtle-color: rgb(229, 144, 144);--background-base-color: rgb(1, 8, 29);--background-accent-color: rgb(109, 23, 196);--background-glow-color: rgb(9, 61, 216);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-mode=light]{--border-highlight-color: rgb(7, 45, 162);--border-neutral-bold-color: rgba(0, 0, 0, .8);--border-neutral-regular-color: rgba(0, 0, 0, .3);--border-neutral-subtle-color: rgba(0, 0, 0, .1);--border-neutral-minimal-color: rgba(0, 0, 0, .05);--border-positive-color: rgb(43, 92, 25);--border-warning-color: rgb(195, 92, 0);--border-negative-color: rgb(203, 31, 31);--surface-highlight-subtle-color: rgb(211, 221, 253);--surface-highlight-bold-color: rgb(7, 45, 162);--surface-container-color: rgb(255, 255, 255);--surface-level-01-color: rgba(250, 250, 250, .98);--surface-level-02-color: rgba(242, 242, 242, .95);--surface-level-03-color: rgba(235, 235, 235, .92);--surface-inverse-color: rgba(0, 0, 0, .97);--surface-positive-subtle-color: rgb(222, 242, 214);--surface-positive-bold-color: rgb(43, 92, 25);--surface-warning-subtle-color: rgb(255, 228, 204);--surface-warning-bold-color: rgb(137, 64, 0);--surface-negative-subtle-color: rgb(245, 210, 210);--surface-negative-bold-color: rgb(203, 31, 31);--surface-overlay-color: rgba(255, 255, 255, .97);--content-highlight-color: rgb(7, 45, 162);--content-neutral-bold-color: rgba(15, 15, 15, .95);--content-neutral-regular-color: rgba(15, 15, 15, .75);--content-neutral-subtle-color: rgba(15, 15, 15, .6);--content-inverse-bold-color: rgb(255, 255, 255);--content-inverse-regular-color: rgba(255, 255, 255, .7);--content-inverse-subtle-color: rgba(255, 255, 255, .6);--content-positive-color: rgb(28, 60, 17);--content-warning-color: rgb(92, 43, 0);--content-negative-color: rgb(155, 24, 24);--interactive-highlight-color: rgb(7, 45, 162);--interactive-neutral-bold-color: rgb(0, 0, 0);--interactive-neutral-regular-color: rgba(235, 235, 235, .92);--interactive-neutral-subtle-color: rgba(242, 242, 242, .95);--interactive-neutral-minimal-color: rgb(255, 255, 255);--interactive-inverse-color: rgb(255, 255, 255);--interactive-negative-bold-color: rgb(155, 24, 24);--interactive-negative-subtle-color: rgb(245, 210, 210);--background-base-color: rgb(235, 240, 254);--background-accent-color: rgb(123, 154, 250);--background-glow-color: rgb(186, 132, 241);--background-backdrop-color: rgba(255, 255, 255, .8);--paloma-font-family-body: Electronic Arts Text;--paloma-font-family-heading: Electronic Arts Display }[data-paloma-theme=ea-blue][data-paloma-mode=light]{--border-highlight-color: rgb(7, 45, 162);--surface-highlight-subtle-color: rgb(211, 221, 253);--surface-highlight-bold-color: rgb(7, 45, 162);--content-highlight-color: rgb(7, 45, 162);--interactive-highlight-color: rgb(7, 45, 162);--background-base-color: rgb(235, 240, 254);--background-accent-color: rgb(123, 154, 250);--background-glow-color: rgb(186, 132, 241);--background-backdrop-color: rgba(255, 255, 255, .8) }[data-paloma-theme=ea-blue][data-paloma-mode=dark]{--border-highlight-color: rgb(123, 154, 250);--surface-highlight-subtle-color: rgba(211, 221, 253, .1);--surface-highlight-bold-color: rgb(211, 221, 253);--content-highlight-color: rgb(123, 154, 250);--interactive-highlight-color: rgb(123, 154, 250);--background-base-color: rgb(1, 8, 29);--background-accent-color: rgb(109, 23, 196);--background-glow-color: rgb(9, 61, 216);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-theme=ea-sims][data-paloma-mode=light]{--border-highlight-color: rgb(30, 134, 179);--surface-highlight-subtle-color: rgba(124, 203, 236, .1);--surface-highlight-bold-color: rgb(22, 101, 134);--content-highlight-color: rgb(22, 101, 134);--interactive-highlight-color: rgb(31, 52, 98);--background-base-color: rgb(235, 238, 246);--background-accent-color: rgb(168, 220, 243);--background-glow-color: rgb(173, 187, 219);--background-backdrop-color: rgba(255, 255, 255, .8) }[data-paloma-theme=ea-sims][data-paloma-mode=dark]{--border-highlight-color: rgb(30, 134, 179);--surface-highlight-subtle-color: rgba(81, 185, 230, .1);--surface-highlight-bold-color: rgb(168, 220, 243);--content-highlight-color: rgb(168, 220, 243);--interactive-highlight-color: rgb(37, 168, 224);--background-base-color: rgb(20, 34, 66);--background-accent-color: rgb(37, 168, 224);--background-glow-color: rgb(51, 86, 164);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-theme=fc-green][data-paloma-mode=light]{--border-highlight-color: rgb(4, 146, 62);--surface-highlight-subtle-color: rgba(57, 246, 134, .1);--surface-highlight-bold-color: rgb(4, 146, 62);--content-highlight-color: rgb(3, 98, 42);--interactive-highlight-color: rgb(3, 98, 42);--background-base-color: rgb(227, 251, 233);--background-accent-color: rgb(106, 248, 164);--background-glow-color: rgb(7, 244, 104);--background-backdrop-color: rgba(255, 255, 255, .8) }[data-paloma-theme=fc-green][data-paloma-mode=dark]{--border-highlight-color: rgb(4, 146, 62);--surface-highlight-subtle-color: rgba(106, 248, 164, .1);--surface-highlight-bold-color: rgb(57, 246, 134);--content-highlight-color: rgb(7, 244, 104);--interactive-highlight-color: rgb(6, 195, 83);--background-base-color: rgb(2, 11, 7);--background-accent-color: rgb(3, 98, 42);--background-glow-color: rgb(7, 244, 104);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-theme=ea-madden][data-paloma-mode=dark]{--border-highlight-color: rgb(255, 41, 0);--surface-highlight-subtle-color: rgba(255, 88, 56, .1);--surface-highlight-bold-color: rgb(255, 88, 56);--content-highlight-color: rgb(255, 88, 56);--interactive-highlight-color: rgb(255, 88, 56);--background-base-color: rgb(0, 0, 0);--background-accent-color: rgb(255, 127, 102);--background-glow-color: rgb(255, 41, 0);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-theme=ea-madden][data-paloma-mode=light]{--border-highlight-color: rgb(255, 88, 56);--surface-highlight-subtle-color: rgba(255, 41, 0, .1);--surface-highlight-bold-color: rgb(255, 41, 0);--content-highlight-color: rgb(204, 33, 0);--interactive-highlight-color: rgb(204, 33, 0);--background-base-color: rgb(255, 238, 235);--background-accent-color: rgb(255, 222, 215);--background-glow-color: rgb(255, 212, 204);--background-backdrop-color: rgba(255, 255, 255, .8) }[data-paloma-theme=ea-battlefield6][data-paloma-mode=light]{--border-highlight-color: rgb(255, 60, 0);--surface-highlight-subtle-color: rgba(229, 54, 0, .1);--surface-highlight-bold-color: rgb(229, 54, 0);--content-highlight-color: rgb(204, 48, 0);--interactive-highlight-color: rgb(204, 48, 0);--background-base-color: rgb(191, 202, 209);--background-accent-color: rgb(255, 216, 204);--background-glow-color: rgb(255, 177, 153);--background-backdrop-color: rgba(255, 255, 255, .8) }[data-paloma-theme=ea-battlefield6][data-paloma-mode=dark]{--border-highlight-color: rgb(229, 54, 0);--surface-highlight-subtle-color: rgba(255, 60, 0, .1);--surface-highlight-bold-color: rgb(255, 60, 0);--content-highlight-color: rgb(255, 60, 0);--interactive-highlight-color: rgb(255, 60, 0);--background-base-color: rgb(0, 0, 0);--background-accent-color: rgb(255, 99, 51);--background-glow-color: rgb(229, 54, 0);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-theme=purple][data-paloma-mode=light]{--border-highlight-color: rgb(217, 115, 186);--surface-highlight-subtle-color: rgb(243, 212, 234);--surface-highlight-bold-color: rgb(151, 32, 115);--content-highlight-color: rgb(151, 32, 115);--interactive-highlight-color: rgb(151, 32, 115);--background-base-color: rgb(252, 245, 250);--background-accent-color: rgb(217, 115, 186);--background-glow-color: rgb(186, 132, 241);--background-backdrop-color: rgba(255, 255, 255, .8) }[data-paloma-theme=purple][data-paloma-mode=dark]{--border-highlight-color: rgb(151, 32, 115);--surface-highlight-subtle-color: rgba(243, 212, 234, .1);--surface-highlight-bold-color: rgb(243, 212, 234);--content-highlight-color: rgb(217, 115, 186);--interactive-highlight-color: rgb(217, 115, 186);--background-base-color: rgb(22, 5, 17);--background-accent-color: rgb(151, 32, 115);--background-glow-color: rgb(135, 42, 230);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-theme=red][data-paloma-mode=light]{--border-highlight-color: rgb(229, 144, 144);--surface-highlight-subtle-color: rgb(245, 210, 210);--surface-highlight-bold-color: rgb(109, 17, 17);--content-highlight-color: rgb(109, 17, 17);--interactive-highlight-color: rgb(109, 17, 17);--background-base-color: rgb(255, 235, 235);--background-accent-color: rgb(229, 144, 144);--background-glow-color: rgb(229, 144, 144);--background-backdrop-color: rgba(255, 255, 255, .8) }[data-paloma-theme=red][data-paloma-mode=dark]{--border-highlight-color: rgb(109, 17, 17);--surface-highlight-subtle-color: rgba(245, 210, 210, .1);--surface-highlight-bold-color: rgb(245, 210, 210);--content-highlight-color: rgb(229, 144, 144);--interactive-highlight-color: rgb(229, 144, 144);--background-base-color: rgb(22, 3, 3);--background-accent-color: rgb(155, 24, 24);--background-glow-color: rgb(224, 0, 0);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-theme=ea-madden][data-paloma-variant=loyalty][data-paloma-mode=dark]{--background-glow-color: rgba(234, 205, 111, .3);--content-highlight-color: rgb(234, 205, 111) }[type=search]::-webkit-search-decoration{display:none}[type=search]::-webkit-search-cancel-button{display:none}[type=search]::-webkit-search-results-button{display:none}[type=search]::-webkit-search-results-decoration{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.container{width:100%;margin-right:auto;margin-left:auto;padding-right:24px;padding-left:24px}@media(min-width:1440px){.container{max-width:1440px;padding-right:40px;padding-left:40px}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.visible{visibility:visible}.invisible{visibility:hidden}.collapse{visibility:collapse}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.\\!relative{position:relative!important}.relative{position:relative}.\\!sticky{position:sticky!important}.sticky{position:sticky}.inset-0{top:0;right:0;bottom:0;left:0}.inset-x-0{left:0;right:0}.-bottom-0{bottom:-0px}.-bottom-0\\.5{bottom:-.125rem}.-bottom-1{bottom:-.25rem}.-bottom-1\\.5{bottom:-.375rem}.-bottom-2{bottom:-.5rem}.-bottom-3{bottom:-.75rem}.-bottom-3\\.5{bottom:-.875rem}.-bottom-8{bottom:-2rem}.-bottom-\\[6px\\]{bottom:-6px}.-left-0{left:-0px}.-left-0\\.5{left:-.125rem}.-left-2{left:-.5rem}.-left-8{left:-2rem}.-left-\\[125\\%\\]{left:-125%}.-left-\\[20px\\]{left:-20px}.-left-\\[50\\%\\]{left:-50%}.-right-0{right:-0px}.-right-0\\.5{right:-.125rem}.-right-2{right:-.5rem}.-right-\\[40\\%\\]{right:-40%}.-right-\\[50\\%\\]{right:-50%}.-top-0{top:-0px}.-top-0\\.5{top:-.125rem}.-top-1{top:-.25rem}.-top-1\\.5{top:-.375rem}.-top-10{top:-2.5rem}.-top-2{top:-.5rem}.-top-3{top:-.75rem}.-top-3\\.5{top:-.875rem}.bottom-0{bottom:0}.bottom-1{bottom:.25rem}.bottom-2{bottom:.5rem}.bottom-\\[10\\%\\]{bottom:10%}.end-0{inset-inline-end:0px}.left-0{left:0}.left-1\\/2{left:50%}.left-4{left:1rem}.left-\\[-350px\\]{left:-350px}.left-\\[12\\.5\\%\\]{left:12.5%}.right-0{right:0}.right-3{right:.75rem}.right-\\[15\\%\\]{right:15%}.top-0{top:0}.top-1{top:.25rem}.top-12{top:3rem}.top-14{top:3.5rem}.top-2{top:.5rem}.top-28{top:7rem}.top-3{top:.75rem}.top-4{top:1rem}.top-\\[10\\%\\]{top:10%}.top-\\[20\\%\\]{top:20%}.top-\\[7\\.25rem\\]{top:7.25rem}.top-\\[90vh\\]{top:90vh}.-z-\\[1\\]{z-index:-1}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.z-\\[10\\]{z-index:10}.z-\\[15\\]{z-index:15}.z-\\[2147483646\\]{z-index:2147483646}.z-\\[2147483647\\]{z-index:2147483647}.z-\\[90\\]{z-index:90}.col-span-4{grid-column:span 4 / span 4}.col-span-full{grid-column:1 / -1}.\\!col-start-3{grid-column-start:3!important}.m-0{margin:0}.m-auto{margin:auto}.mx-0{margin-left:0;margin-right:0}.mx-0\\.5{margin-left:.125rem;margin-right:.125rem}.mx-1{margin-left:.25rem;margin-right:.25rem}.mx-10{margin-left:2.5rem;margin-right:2.5rem}.mx-auto{margin-left:auto;margin-right:auto}.my-0{margin-top:0;margin-bottom:0}.my-1{margin-top:.25rem;margin-bottom:.25rem}.my-2{margin-top:.5rem;margin-bottom:.5rem}.my-3{margin-top:.75rem;margin-bottom:.75rem}.my-4{margin-top:1rem;margin-bottom:1rem}.my-auto{margin-top:auto;margin-bottom:auto}.-mb-2{margin-bottom:-.5rem}.-ms-10{margin-inline-start:-2.5rem}.-mt-10{margin-top:-2.5rem}.-mt-20{margin-top:-5rem}.-mt-6{margin-top:-1.5rem}.-mt-\\[52px\\]{margin-top:-52px}.-mt-\\[72px\\]{margin-top:-72px}.mb-1{margin-bottom:.25rem}.mb-10{margin-bottom:2.5rem}.mb-2{margin-bottom:.5rem}.mb-20{margin-bottom:5rem}.mb-3{margin-bottom:.75rem}.mb-5{margin-bottom:1.25rem}.mb-6{margin-bottom:1.5rem}.mb-\\[52px\\]{margin-bottom:52px}.mb-\\[72px\\]{margin-bottom:72px}.ml-0{margin-left:0}.ml-4{margin-left:1rem}.ml-5{margin-left:1.25rem}.ml-6{margin-left:1.5rem}.ml-8{margin-left:2rem}.mr-1{margin-right:.25rem}.mr-4{margin-right:1rem}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-20{margin-top:5rem}.mt-3{margin-top:.75rem}.mt-32{margin-top:8rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.mt-96{margin-top:24rem}.mt-auto{margin-top:auto}.box-border{box-sizing:border-box}.box-content{box-sizing:content-box}.line-clamp-1{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.line-clamp-2{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.line-clamp-3{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3}.line-clamp-4{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4}.line-clamp-5{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:5}.line-clamp-6{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:6}.line-clamp-none{overflow:visible;display:block;-webkit-box-orient:horizontal;-webkit-line-clamp:none}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.contents{display:contents}.hidden{display:none}.aspect-\\[16\\/9\\]{aspect-ratio:16/9}.aspect-\\[2\\/3\\]{aspect-ratio:2/3}.aspect-\\[3\\/2\\]{aspect-ratio:3/2}.aspect-\\[9\\/16\\]{aspect-ratio:9/16}.aspect-square{aspect-ratio:1 / 1}.size-8{width:2rem;height:2rem}.h-1{height:.25rem}.h-10{height:2.5rem}.h-11{height:2.75rem}.h-14{height:3.5rem}.h-16{height:4rem}.h-2{height:.5rem}.h-2\\.5{height:.625rem}.h-20{height:5rem}.h-24{height:6rem}.h-3{height:.75rem}.h-40{height:10rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-\\[100dvh\\]{height:100dvh}.h-\\[100px\\]{height:100px}.h-\\[100vh\\]{height:100vh}.h-\\[106px\\]{height:106px}.h-\\[110px\\]{height:110px}.h-\\[120vh\\]{height:120vh}.h-\\[140px\\]{height:140px}.h-\\[160px\\]{height:160px}.h-\\[1lh\\]{height:1lh}.h-\\[200px\\]{height:200px}.h-\\[300px\\]{height:300px}.h-\\[32px\\]{height:32px}.h-\\[340px\\]{height:340px}.h-\\[400px\\]{height:400px}.h-\\[58px\\]{height:58px}.h-\\[62px\\]{height:62px}.h-\\[64px\\]{height:64px}.h-\\[68px\\]{height:68px}.h-\\[700px\\]{height:700px}.h-\\[70px\\]{height:70px}.h-\\[72px\\]{height:72px}.h-\\[900px\\]{height:900px}.h-\\[90vh\\]{height:90vh}.h-\\[calc\\(100vh_-_2em\\)\\]{height:calc(100vh - 2em)}.h-\\[calc\\(var\\(--vh\\)\\*100\\)\\]{height:calc(var(--vh) * 100)}.h-auto{height:auto}.h-fit{height:-moz-fit-content;height:fit-content}.h-full{height:100%}.h-screen{height:100vh}.max-h-\\[900px\\]{max-height:900px}.max-h-\\[calc\\(100dvh_-_0\\.625rem\\)\\]{max-height:calc(100dvh - .625rem)}.max-h-\\[calc\\(100vh_-_0\\.625rem\\)\\]{max-height:calc(100vh - .625rem)}.max-h-\\[calc\\(var\\(--vh\\)\\*100_-_0\\.625rem\\)\\]{max-height:calc(var(--vh) * 100 - .625rem)}.max-h-full{max-height:100%}.max-h-screen{max-height:100vh}.min-h-24{min-height:6rem}.min-h-6{min-height:1.5rem}.min-h-\\[100dvh\\]{min-height:100dvh}.min-h-\\[100vh\\]{min-height:100vh}.min-h-\\[1px\\]{min-height:1px}.min-h-\\[320px\\]{min-height:320px}.min-h-\\[900px\\]{min-height:900px}.min-h-screen{min-height:100vh}.w-0{width:0px}.w-1{width:.25rem}.w-10{width:2.5rem}.w-11{width:2.75rem}.w-12{width:3rem}.w-14{width:3.5rem}.w-16{width:4rem}.w-2{width:.5rem}.w-2\\.5{width:.625rem}.w-20{width:5rem}.w-24{width:6rem}.w-3{width:.75rem}.w-3\\/4{width:75%}.w-40{width:10rem}.w-48{width:12rem}.w-6{width:1.5rem}.w-8{width:2rem}.w-\\[100px\\]{width:100px}.w-\\[100vw\\]{width:100vw}.w-\\[110px\\]{width:110px}.w-\\[1280px\\]{width:1280px}.w-\\[136px\\]{width:136px}.w-\\[140px\\]{width:140px}.w-\\[148px\\]{width:148px}.w-\\[175\\%\\]{width:175%}.w-\\[200\\%\\]{width:200%}.w-\\[200px\\]{width:200px}.w-\\[250\\%\\]{width:250%}.w-\\[250px\\]{width:250px}.w-\\[256px\\]{width:256px}.w-\\[300px\\]{width:300px}.w-\\[30vw\\]{width:30vw}.w-\\[312px\\]{width:312px}.w-\\[32px\\]{width:32px}.w-\\[393px\\]{width:393px}.w-\\[400px\\]{width:400px}.w-\\[500px\\]{width:500px}.w-\\[58px\\]{width:58px}.w-\\[6\\.25rem\\]{width:6.25rem}.w-\\[600px\\]{width:600px}.w-\\[62px\\]{width:62px}.w-\\[64px\\]{width:64px}.w-\\[68px\\]{width:68px}.w-\\[700px\\]{width:700px}.w-\\[70px\\]{width:70px}.w-\\[72px\\]{width:72px}.w-\\[73px\\]{width:73px}.w-\\[800px\\]{width:800px}.w-\\[80vw\\]{width:80vw}.w-\\[9\\.375rem\\]{width:9.375rem}.w-\\[90vw\\]{width:90vw}.w-\\[95vw\\]{width:95vw}.w-auto{width:auto}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.w-min{width:-moz-min-content;width:min-content}.w-screen{width:100vw}.min-w-0{min-width:0px}.min-w-36{min-width:9rem}.min-w-6{min-width:1.5rem}.min-w-\\[0\\]{min-width:0}.min-w-\\[100px\\]{min-width:100px}.min-w-\\[140px\\]{min-width:140px}.min-w-\\[1px\\]{min-width:1px}.min-w-\\[280px\\]{min-width:280px}.min-w-\\[clamp\\(52\\.75rem\\,_100vw\\,_120rem\\)\\]{min-width:clamp(52.75rem,100vw,120rem)}.min-w-\\[min\\(32\\.188rem\\,_50\\.688rem\\)\\]{min-width:min(32.188rem,50.688rem)}.min-w-fit{min-width:-moz-fit-content;min-width:fit-content}.max-w-\\[100vw\\]{max-width:100vw}.max-w-\\[1440px\\]{max-width:1440px}.max-w-\\[1920px\\]{max-width:1920px}.max-w-\\[600px\\]{max-width:600px}.max-w-\\[80\\%\\]{max-width:80%}.max-w-\\[80px\\]{max-width:80px}.max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.flex-auto{flex:1 1 auto}.flex-none{flex:none}.flex-shrink-0{flex-shrink:0}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.flex-grow,.flex-grow-\\[1\\]{flex-grow:1}.flex-grow-\\[3\\]{flex-grow:3}.basis-\\[0\\%\\]{flex-basis:0%}.origin-center{transform-origin:center}.origin-left{transform-origin:left}.origin-top-left{transform-origin:top left}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-1\\/4{--tw-translate-x: -25%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-\\[45\\%\\]{--tw-translate-y: -45%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-full{--tw-translate-y: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-1\\/2{--tw-translate-x: 50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[10\\%\\]{--tw-translate-x: 10%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[15\\%\\]{--tw-translate-x: 15%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[20\\%\\]{--tw-translate-x: 20%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-full{--tw-translate-x: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-0{--tw-translate-y: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-1\\/2{--tw-translate-y: 50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-\\[40\\%\\]{--tw-translate-y: 40%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-\\[calc\\(100\\%-5rem\\)\\]{--tw-translate-y: calc(100% - 5rem) ;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-rotate-180{--tw-rotate: -180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-rotate-45{--tw-rotate: -45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-0{--tw-rotate: 0deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-45{--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[-100deg\\]{--tw-rotate: -100deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[-200deg\\]{--tw-rotate: -200deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[-260deg\\]{--tw-rotate: -260deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[-90deg\\]{--tw-rotate: -90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[200deg\\]{--tw-rotate: 200deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[80deg\\]{--tw-rotate: 80deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-100{--tw-scale-x: 1;--tw-scale-y: 1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-75{--tw-scale-x: .75;--tw-scale-y: .75;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes loading-hourglass{0%{transform:rotate(0)}23%{transform:rotate(180deg)}to{transform:rotate(180deg)}}.animate-loading-hourglass{animation:loading-hourglass 1.3s ease-in-out infinite}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.cursor-wait{cursor:wait}.touch-pan-y{--tw-pan-y: pan-y;touch-action:var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.resize{resize:both}.list-none{list-style-type:none}.auto-cols-\\[min-content_1fr\\]{grid-auto-columns:min-content 1fr}.grid-flow-col{grid-auto-flow:column}.auto-rows-max{grid-auto-rows:max-content}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-\\[1fr_auto\\]{grid-template-columns:1fr auto}.grid-cols-\\[auto_1fr_auto\\]{grid-template-columns:auto 1fr auto}.grid-cols-\\[minmax\\(24\\.563rem\\,_100vw\\)\\]{grid-template-columns:minmax(24.563rem,100vw)}.grid-cols-\\[minmax\\(24\\.563rem\\,_50\\.688rem\\)\\]{grid-template-columns:minmax(24.563rem,50.688rem)}.grid-rows-4{grid-template-rows:repeat(4,minmax(0,1fr))}.grid-rows-\\[0fr\\]{grid-template-rows:0fr}.grid-rows-\\[1fr\\]{grid-template-rows:1fr}.grid-rows-\\[37\\.5rem\\]{grid-template-rows:37.5rem}.grid-rows-\\[minmax\\(14\\.375rem\\,_22\\.625rem\\)\\]{grid-template-rows:minmax(14.375rem,22.625rem)}.flex-row{flex-direction:row}.flex-row-reverse{flex-direction:row-reverse}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-wrap{flex-wrap:wrap}.flex-nowrap{flex-wrap:nowrap}.place-content-start{place-content:start}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.items-baseline{align-items:baseline}.items-stretch{align-items:stretch}.justify-normal{justify-content:normal}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-stretch{justify-content:stretch}.gap-0{gap:0px}.gap-0\\.5{gap:.125rem}.gap-1{gap:.25rem}.gap-10{gap:2.5rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-5{gap:1.25rem}.gap-6{gap:1.5rem}.gap-8{gap:2rem}.gap-x-12{-moz-column-gap:3rem;column-gap:3rem}.gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.gap-x-5{-moz-column-gap:1.25rem;column-gap:1.25rem}.gap-x-6{-moz-column-gap:1.5rem;column-gap:1.5rem}.gap-y-0{row-gap:0px}.gap-y-1{row-gap:.25rem}.gap-y-10{row-gap:2.5rem}.gap-y-3{row-gap:.75rem}.space-y-0>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(0px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0px * var(--tw-space-y-reverse))}.space-y-0\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.125rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.125rem * var(--tw-space-y-reverse))}.self-start{align-self:flex-start}.self-end{align-self:flex-end}.self-center{align-self:center}.justify-self-end{justify-self:end}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-visible{overflow:visible}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.overflow-y-hidden{overflow-y:hidden}.overscroll-contain{overscroll-behavior:contain}.overscroll-none{overscroll-behavior:none}.\\!truncate{overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-nowrap{white-space:nowrap}.whitespace-pre-wrap{white-space:pre-wrap}.text-wrap{text-wrap:wrap}.break-all{word-break:break-all}.break-keep{word-break:keep-all}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:1rem}.rounded-\\[0\\.25rem\\]{border-radius:.25rem}.rounded-\\[8px\\]{border-radius:8px}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-none{border-radius:0}.rounded-sm{border-radius:.125rem}.rounded-xl{border-radius:.75rem}.rounded-b-none{border-bottom-right-radius:0;border-bottom-left-radius:0}.rounded-b-xl{border-bottom-right-radius:.75rem;border-bottom-left-radius:.75rem}.rounded-r-none{border-top-right-radius:0;border-bottom-right-radius:0}.rounded-t-none{border-top-left-radius:0;border-top-right-radius:0}.rounded-t-xl{border-top-left-radius:.75rem;border-top-right-radius:.75rem}.border{border-width:1px}.border-2{border-width:2px}.border-\\[1px\\]{border-width:1px}.border-\\[3px\\]{border-width:3px}.border-x{border-left-width:1px;border-right-width:1px}.border-x-0{border-left-width:0px;border-right-width:0px}.border-y-0{border-top-width:0px;border-bottom-width:0px}.border-b{border-bottom-width:1px}.border-b-0{border-bottom-width:0px}.border-b-2{border-bottom-width:2px}.border-b-\\[1px\\]{border-bottom-width:1px}.border-e-0{border-inline-end-width:0px}.border-l{border-left-width:1px}.border-l-0{border-left-width:0px}.border-l-2{border-left-width:2px}.border-l-\\[1px\\]{border-left-width:1px}.border-r-0{border-right-width:0px}.border-s-0{border-inline-start-width:0px}.border-s-\\[1px\\]{border-inline-start-width:1px}.border-t{border-top-width:1px}.border-t-0{border-top-width:0px}.border-t-\\[1px\\]{border-top-width:1px}.border-solid{border-style:solid}.border-none{border-style:none}.border-base{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--background-base-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-highlight{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-highlight-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-negative{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-negative-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-neutral-minimal{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-minimal-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-neutral-regular{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-regular-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-neutral-subtle{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-positive{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-positive-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-transparent{border-color:transparent}.border-warning{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-warning-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-b-neutral-bold{--tw-border-opacity: 1;border-bottom-color:color-mix(in srgb,var(--border-neutral-bold-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-b-neutral-minimal{--tw-border-opacity: 1;border-bottom-color:color-mix(in srgb,var(--border-neutral-minimal-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-b-neutral-subtle{--tw-border-opacity: 1;border-bottom-color:color-mix(in srgb,var(--border-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-s-neutral-bold{--tw-border-opacity: 1;border-inline-start-color:color-mix(in srgb,var(--border-neutral-bold-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-t-neutral-minimal{--tw-border-opacity: 1;border-top-color:color-mix(in srgb,var(--border-neutral-minimal-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.\\!bg-base{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--background-base-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.bg-\\[\\#BFCAD1\\]{--tw-bg-opacity: 1;background-color:rgb(191 202 209 / var(--tw-bg-opacity))}.bg-\\[\\#E3FBE9\\]{--tw-bg-opacity: 1;background-color:rgb(227 251 233 / var(--tw-bg-opacity))}.bg-\\[\\#EBEEF6\\]{--tw-bg-opacity: 1;background-color:rgb(235 238 246 / var(--tw-bg-opacity))}.bg-\\[\\#EBF0FE\\]{--tw-bg-opacity: 1;background-color:rgb(235 240 254 / var(--tw-bg-opacity))}.bg-\\[\\#FCF5FA\\]{--tw-bg-opacity: 1;background-color:rgb(252 245 250 / var(--tw-bg-opacity))}.bg-\\[\\#FDF4F4\\]{--tw-bg-opacity: 1;background-color:rgb(253 244 244 / var(--tw-bg-opacity))}.bg-\\[\\#FFEEEB\\]{--tw-bg-opacity: 1;background-color:rgb(255 238 235 / var(--tw-bg-opacity))}.bg-\\[blue\\]{--tw-bg-opacity: 1;background-color:rgb(0 0 255 / var(--tw-bg-opacity))}.bg-\\[red\\]{--tw-bg-opacity: 1;background-color:rgb(255 0 0 / var(--tw-bg-opacity))}.bg-\\[var\\(--base-color-light\\)\\]{background-color:var(--base-color-light)}.bg-base{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--background-base-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-base\\/60{background-color:color-mix(in srgb,var(--background-base-color),transparent 40%)}.bg-black\\/5{background-color:#0000000d}.bg-content-inverse-bold{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--content-inverse-bold-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-content-inverse-subtle{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--content-inverse-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-content-neutral-bold\\/\\[0\\.08\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.bg-content-neutral-bold\\/\\[0\\.12\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.bg-content-neutral-bold\\/\\[0\\.15\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 85%)}.bg-green-500{--tw-bg-opacity: 1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))}.bg-interactive-highlight{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-highlight-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-interactive-inverse{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-inverse-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-interactive-neutral-bold{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-bold-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-interactive-neutral-minimal{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-minimal-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-interactive-neutral-regular{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-interactive-neutral-subtle{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-interactive-neutral-subtle\\/\\[0\\.95\\]{background-color:color-mix(in srgb,var(--interactive-neutral-subtle-color),transparent 5%)}.bg-lime-400{--tw-bg-opacity: 1;background-color:rgb(163 230 53 / var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.bg-surface-container{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-container-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-highlight-bold{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-highlight-bold-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-highlight-subtle{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-highlight-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-inverse{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-inverse-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-level-01{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-level-01-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-level-02{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-level-02-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-level-03{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-level-03-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-negative-bold{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-negative-bold-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-negative-subtle{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-negative-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-overlay{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-overlay-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-overlay\\/40{background-color:color-mix(in srgb,var(--surface-overlay-color),transparent 60%)}.bg-surface-positive-bold{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-positive-bold-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-positive-subtle{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-positive-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-warning-bold{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-warning-bold-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-warning-subtle{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-warning-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-transparent{background-color:transparent}.bg-violet-300{--tw-bg-opacity: 1;background-color:rgb(196 181 253 / var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-\\[linear-gradient\\(185deg\\,transparent_20\\%\\,var\\(--base-color\\)_35\\%\\)\\]{background-image:linear-gradient(185deg,transparent 20%,var(--base-color) 35%)}.bg-\\[linear-gradient\\(to_top\\,var\\(--surface-overlay-color\\)_20\\%\\,transparent\\)\\]{background-image:linear-gradient(to top,var(--surface-overlay-color) 20%,transparent)}.fill-\\[var\\(--accent-color\\)\\]{fill:var(--accent-color)}.fill-\\[var\\(--base-color\\)\\]{fill:var(--base-color)}.fill-\\[var\\(--glow-color\\)\\]{fill:var(--glow-color)}.stroke-\\[var\\(--border-negative-color\\)\\]{stroke:var(--border-negative-color)}.stroke-\\[var\\(--border-neutral-subtle-color\\)\\]{stroke:var(--border-neutral-subtle-color)}.stroke-\\[var\\(--border-positive-color\\)\\]{stroke:var(--border-positive-color)}.stroke-\\[var\\(--border-warning-color\\)\\]{stroke:var(--border-warning-color)}.stroke-\\[var\\(--surface-highlight-bold-color\\)\\]{stroke:var(--surface-highlight-bold-color)}.object-cover{-o-object-fit:cover;object-fit:cover}.p-0{padding:0}.p-1{padding:.25rem}.p-1\\.5{padding:.375rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-5{padding:1.25rem}.p-6{padding:1.5rem}.p-8{padding:2rem}.p-\\[1px\\]{padding:1px}.px-0{padding-left:0;padding-right:0}.px-1{padding-left:.25rem;padding-right:.25rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-8{padding-left:2rem;padding-right:2rem}.px-\\[0\\.375rem\\]{padding-left:.375rem;padding-right:.375rem}.px-\\[6px\\]{padding-left:6px;padding-right:6px}.py-0{padding-top:0;padding-bottom:0}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.py-8{padding-top:2rem;padding-bottom:2rem}.pb-0{padding-bottom:0}.pb-10{padding-bottom:2.5rem}.pb-20{padding-bottom:5rem}.pb-4{padding-bottom:1rem}.pb-8{padding-bottom:2rem}.pb-\\[env\\(safe-area-inset-bottom\\)\\]{padding-bottom:env(safe-area-inset-bottom)}.pe-0{padding-inline-end:0px}.pe-0\\.5{padding-inline-end:.125rem}.pe-1{padding-inline-end:.25rem}.pe-2{padding-inline-end:.5rem}.pe-2\\.5{padding-inline-end:.625rem}.pe-3{padding-inline-end:.75rem}.pe-4{padding-inline-end:1rem}.pl-0{padding-left:0}.pl-3{padding-left:.75rem}.pl-4{padding-left:1rem}.pr-0{padding-right:0}.pr-1{padding-right:.25rem}.pr-2{padding-right:.5rem}.pr-48{padding-right:12rem}.pr-8{padding-right:2rem}.ps-0{padding-inline-start:0px}.ps-2{padding-inline-start:.5rem}.ps-3{padding-inline-start:.75rem}.ps-4{padding-inline-start:1rem}.pt-0{padding-top:0}.pt-0\\.5{padding-top:.125rem}.pt-10{padding-top:2.5rem}.pt-14{padding-top:3.5rem}.pt-16{padding-top:4rem}.pt-2{padding-top:.5rem}.pt-20{padding-top:5rem}.pt-4{padding-top:1rem}.pt-6{padding-top:1.5rem}.pt-\\[\\.375rem\\]{padding-top:.375rem}.pt-\\[0\\.625rem\\]{padding-top:.625rem}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.text-start{text-align:start}.align-top{vertical-align:top}.align-middle{vertical-align:middle}.font-body{font-family:var(--paloma-font-family-body),sans-serif}.font-heading{font-family:var(--paloma-font-family-heading),sans-serif}.\\!text-\\[0\\.67em\\]{font-size:.67em!important}.\\!text-\\[0\\.83em\\]{font-size:.83em!important}.\\!text-\\[1\\.17em\\]{font-size:1.17em!important}.\\!text-\\[1\\.5em\\]{font-size:1.5em!important}.\\!text-\\[1em\\]{font-size:1em!important}.text-size-body-large{font-size:var(--font-size-body-large);line-height:var(--line-height-body-large)}.text-size-body-medium{font-size:var(--font-size-body-medium);line-height:var(--line-height-body-medium)}.text-size-body-small{font-size:var(--font-size-body-small);line-height:var(--line-height-body-small)}.text-size-body-x-small{font-size:var(--font-size-body-x-small);line-height:var(--line-height-body-x-small)}.text-size-heading-small{font-size:var(--font-size-heading-small);line-height:var(--line-height-heading-small)}.text-size-heading-x-small{font-size:var(--font-size-heading-x-small);line-height:var(--line-height-heading-x-small)}.text-size-lg-heading-large{font-size:var(--font-size-lg-heading-large);line-height:var(--line-height-lg-heading-large)}.text-size-lg-heading-medium{font-size:var(--font-size-lg-heading-medium);line-height:var(--line-height-lg-heading-medium)}.text-size-xs-heading-large{font-size:var(--font-size-xs-heading-large);line-height:var(--line-height-xs-heading-large)}.text-size-xs-heading-medium{font-size:var(--font-size-xs-heading-medium);line-height:var(--line-height-xs-heading-medium)}.text-size-xs-heading-x-large{font-size:var(--font-size-xs-heading-x-large);line-height:var(--line-height-xs-heading-x-large)}.font-bold{font-weight:700}.font-normal{font-weight:400}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.leading-\\[--line-height-body-large\\]{line-height:var(--line-height-body-large)}.leading-\\[--line-height-body-medium\\]{line-height:var(--line-height-body-medium)}.leading-\\[--line-height-body-small\\]{line-height:var(--line-height-body-small)}.leading-\\[150\\%\\]{line-height:150%}.leading-\\[28px\\]{line-height:28px}.leading-\\[40px\\]{line-height:40px}.leading-\\[42px\\]{line-height:42px}.leading-none{line-height:1}.tracking-wide{letter-spacing:.025em}.\\!text-content-highlight{--tw-text-opacity: 1 !important;color:color-mix(in srgb,var(--content-highlight-color),transparent calc(100% - 100% * var(--tw-text-opacity)))!important}.text-content-highlight{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-highlight-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-content-inverse-bold{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-inverse-bold-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-content-negative{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-negative-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-content-neutral-bold{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-neutral-bold-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-content-neutral-regular{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-neutral-regular-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-content-neutral-subtle{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-content-positive{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-positive-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-content-warning{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-warning-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-inherit{color:inherit}.text-red-600{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.underline{text-decoration-line:underline}.no-underline{text-decoration-line:none}.underline-offset-4{text-underline-offset:4px}.opacity-0{opacity:0}.opacity-100{opacity:1}.opacity-30{opacity:.3}.opacity-40{opacity:.4}.opacity-50{opacity:.5}.opacity-70{opacity:.7}.opacity-\\[30\\%\\]{opacity:30%}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-\\[inset_0_0_0_2px_var\\(--interactive-highlight-color\\)\\]{--tw-shadow: inset 0 0 0 2px var(--interactive-highlight-color);--tw-shadow-colored: inset 0 0 0 2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.outline-2{outline-width:2px}.outline-offset-0{outline-offset:0px}.outline-offset-2{outline-offset:2px}.outline-interactive-highlight{outline-color:var(--interactive-highlight-color)}.ring{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.blur{--tw-blur: blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur-\\[10px\\]{--tw-blur: blur(10px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur-\\[18px\\]{--tw-blur: blur(18px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur-\\[4px\\]{--tw-blur: blur(4px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur-\\[50px\\]{--tw-blur: blur(50px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-surface{--tw-backdrop-blur: blur(48px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[color\\,font-weight\\]{transition-property:color,font-weight;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[padding\\]{transition-property:padding;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[stroke-dashoffset\\]{transition-property:stroke-dashoffset;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.delay-500{transition-delay:.5s}.duration-150{transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.duration-500{transition-duration:.5s}.ease-in{transition-timing-function:cubic-bezier(.4,0,1,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.will-change-transform{will-change:transform}@keyframes enter{0%{opacity:var(--tw-enter-opacity, 1);transform:translate3d(var(--tw-enter-translate-x, 0),var(--tw-enter-translate-y, 0),0) scale3d(var(--tw-enter-scale, 1),var(--tw-enter-scale, 1),var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity, 1);transform:translate3d(var(--tw-exit-translate-x, 0),var(--tw-exit-translate-y, 0),0) scale3d(var(--tw-exit-scale, 1),var(--tw-exit-scale, 1),var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))}}.fade-out{--tw-exit-opacity: 0 }.zoom-in-95{--tw-enter-scale: .95 }.duration-150{animation-duration:.15s}.duration-200{animation-duration:.2s}.duration-300{animation-duration:.3s}.duration-500{animation-duration:.5s}.delay-500{animation-delay:.5s}.ease-in{animation-timing-function:cubic-bezier(.4,0,1,1)}.ease-in-out{animation-timing-function:cubic-bezier(.4,0,.2,1)}.paused{animation-play-state:paused}.fill-mode-forwards{animation-fill-mode:forwards}.\\!grid-in-\\[2\\/2\\/2\\/2\\]{grid-area:2/2/2/2!important}.grid-areas-\\[bar\\]{grid-template-areas:"bar"}.grid-areas-\\[label_bar_percent\\]{grid-template-areas:"label bar percent"}.grid-areas-\\[label_percent\\,_bar_bar\\]{grid-template-areas:"label percent" "bar bar"}.grid-in-\\[1\\/1\\/2\\/1\\]{grid-area:1/1/2/1}.grid-in-\\[1\\/2\\/1\\/2\\]{grid-area:1/2/1/2}.grid-in-\\[2\\/1\\/2\\/1\\]{grid-area:2/1/2/1}.grid-in-\\[bar\\]{grid-area:bar}.grid-in-\\[label\\]{grid-area:label}.grid-in-\\[percent\\]{grid-area:percent}.font-variant-none{font-variant:none}.\\[--accent-color\\:\\#6AF8A4\\]{--accent-color: #6AF8A4 }.\\[--accent-color\\:\\#7B9AFA\\]{--accent-color: #7B9AFA }.\\[--accent-color\\:\\#A8DCF3\\]{--accent-color: #A8DCF3 }.\\[--accent-color\\:\\#D973BA\\]{--accent-color: #D973BA }.\\[--accent-color\\:\\#E59090\\]{--accent-color: #E59090 }.\\[--accent-color\\:\\#FFD8CC\\]{--accent-color: #FFD8CC }.\\[--accent-color\\:\\#FFDED7\\]{--accent-color: #FFDED7 }.\\[--accent-color\\:var\\(--accent-color-light\\)\\]{--accent-color: var(--accent-color-light) }.\\[--base-color\\:\\#BFCAD1\\]{--base-color: #BFCAD1 }.\\[--base-color\\:\\#E3FBE9\\]{--base-color: #E3FBE9 }.\\[--base-color\\:\\#EBEEF6\\]{--base-color: #EBEEF6 }.\\[--base-color\\:\\#EBF0FE\\]{--base-color: #EBF0FE }.\\[--base-color\\:\\#FCF5FA\\]{--base-color: #FCF5FA }.\\[--base-color\\:\\#FFEBEB\\]{--base-color: #FFEBEB }.\\[--base-color\\:\\#FFEEEB\\]{--base-color: #FFEEEB }.\\[--base-color\\:var\\(--base-color-light\\)\\]{--base-color: var(--base-color-light) }.\\[--glow-color\\:\\#07F468\\]{--glow-color: #07F468 }.\\[--glow-color\\:\\#ADBBDB\\]{--glow-color: #ADBBDB }.\\[--glow-color\\:\\#BA84F1\\]{--glow-color: #BA84F1 }.\\[--glow-color\\:\\#E59090\\]{--glow-color: #E59090 }.\\[--glow-color\\:\\#FFB199\\]{--glow-color: #FFB199 }.\\[--glow-color\\:\\#FFD4CC\\]{--glow-color: #FFD4CC }.\\[--glow-color\\:var\\(--glow-color-light\\)\\]{--glow-color: var(--glow-color-light) }.\\[-webkit-mask-image\\:linear-gradient\\(to_top\\,transparent_0\\%\\,rgba\\(0\\,0\\,0\\,0\\.7\\)_50\\%\\)\\]{-webkit-mask-image:linear-gradient(to top,transparent 0%,rgba(0,0,0,.7) 50%)}.\\[mask-image\\:linear-gradient\\(to_top\\,transparent_0\\%\\,rgba\\(0\\,0\\,0\\,0\\.7\\)_50\\%\\)\\]{-webkit-mask-image:linear-gradient(to top,transparent 0%,rgba(0,0,0,.7) 50%);mask-image:linear-gradient(to top,transparent 0%,rgba(0,0,0,.7) 50%)}.\\[mask-type\\:alpha\\]{mask-type:alpha}.\\[place-content\\:start_center\\]{place-content:start center}.\\[place-self\\:start_center\\]{place-self:start center}.\\[transition-duration\\:2s\\]{transition-duration:2s}.\\[transition-duration\\:6s\\]{transition-duration:6s}.\\[transition-property\\:transform\\]{transition-property:transform}@media(min-width:768px){.md\\:container{width:100%;margin-right:auto;margin-left:auto;padding-right:24px;padding-left:24px}@media(min-width:1440px){.md\\:container{max-width:1440px;padding-right:40px;padding-left:40px}}}.last\\:pb-0:last-child{padding-bottom:0}.active\\:\\!bg-surface-level-03:active{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--surface-level-03-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.active\\:bg-content-neutral-bold\\/\\[0\\.12\\]:active{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.active\\:bg-content-neutral-regular:active{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.active\\:bg-content-neutral-regular\\/\\[0\\.12\\]:active{background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent 88%)}.active\\:bg-interactive-neutral-regular:active{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.active\\:bg-interactive-neutral-subtle:active{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.enabled\\:cursor-pointer:enabled{cursor:pointer}.group:active .group-active\\:bg-content-neutral-bold\\/\\[0\\.12\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.aria-disabled\\:pointer-events-none[aria-disabled=true]{pointer-events:none}.aria-disabled\\:opacity-30[aria-disabled=true]{opacity:.3}.data-\\[position-y\\=bottom\\]\\:-bottom-1\\.5[data-position-y=bottom]{bottom:-.375rem}.data-\\[position-y\\=bottom\\]\\:-bottom-3\\.5[data-position-y=bottom]{bottom:-.875rem}.data-\\[position-y\\=top\\]\\:-top-1\\.5[data-position-y=top]{top:-.375rem}.data-\\[position-y\\=top\\]\\:-top-3\\.5[data-position-y=top]{top:-.875rem}.data-\\[position-x\\=center\\]\\:flex[data-position-x=center],.data-\\[shape\\=circle\\]\\:flex[data-shape=circle]{display:flex}.data-\\[size\\=large\\]\\:h-8[data-size=large]{height:2rem}.data-\\[size\\=medium\\]\\:h-6[data-size=medium]{height:1.5rem}.data-\\[size\\=small\\]\\:h-5[data-size=small]{height:1.25rem}.data-\\[size\\=x-small\\]\\:h-4[data-size=x-small]{height:1rem}.data-\\[orientation\\=horizontal\\]\\:w-\\[-webkit-fill-available\\][data-orientation=horizontal]{width:-webkit-fill-available}.data-\\[position-x\\=center\\]\\:w-full[data-position-x=center],.data-\\[shape\\=circle\\]\\:w-full[data-shape=circle]{width:100%}.data-\\[size\\=large\\]\\:w-8[data-size=large]{width:2rem}.data-\\[size\\=medium\\]\\:w-6[data-size=medium]{width:1.5rem}.data-\\[size\\=small\\]\\:w-5[data-size=small]{width:1.25rem}.data-\\[size\\=x-small\\]\\:w-4[data-size=x-small]{width:1rem}.data-\\[position-x\\=center\\]\\:justify-center[data-position-x=center],.data-\\[shape\\=circle\\]\\:justify-center[data-shape=circle]{justify-content:center}.data-\\[emphasis\\=bold\\]\\:border-neutral-bold[data-emphasis=bold]{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-bold-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.data-\\[emphasis\\=minimal\\]\\:border-neutral-minimal[data-emphasis=minimal]{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-minimal-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.data-\\[emphasis\\=regular\\]\\:border-neutral-regular[data-emphasis=regular]{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-regular-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.data-\\[emphasis\\=subtle\\]\\:border-neutral-subtle[data-emphasis=subtle]{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.data-\\[orientation\\=vertical\\]\\:p-6[data-orientation=vertical]{padding:1.5rem}.data-\\[orientation\\=horizontal\\]\\:px-8[data-orientation=horizontal]{padding-left:2rem;padding-right:2rem}.data-\\[orientation\\=horizontal\\]\\:py-12[data-orientation=horizontal]{padding-top:3rem;padding-bottom:3rem}.data-\\[selected\\=true\\]\\:data-\\[emphasis\\=bold\\]\\:text-content-inverse-bold[data-emphasis=bold][data-selected=true]{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-inverse-bold-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.data-\\[selected\\=true\\]\\:data-\\[emphasis\\=regular\\]\\:text-content-neutral-bold[data-emphasis=regular][data-selected=true]{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-neutral-bold-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.data-\\[focus-visible\\]\\:shadow-\\[inset_0_0_0_2px_var\\(--interactive-highlight-color\\)\\][data-focus-visible]{--tw-shadow: inset 0 0 0 2px var(--interactive-highlight-color);--tw-shadow-colored: inset 0 0 0 2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.group\\/menu[data-variant=mega] .group-data-\\[variant\\=mega\\]\\/menu\\:mx-2{margin-left:.5rem;margin-right:.5rem}.group[data-variant=dot] .group-data-\\[variant\\=dot\\]\\:h-1\\.5{height:.375rem}.group[data-variant=dot] .group-data-\\[variant\\=dot\\]\\:h-2{height:.5rem}.group[data-variant=icon] .group-data-\\[variant\\=icon\\]\\:h-\\[22px\\]{height:22px}.group[data-variant=icon] .group-data-\\[variant\\=icon\\]\\:h-\\[32px\\]{height:32px}.group[data-variant=text] .group-data-\\[variant\\=text\\]\\:h-\\[22px\\]{height:22px}.group[data-variant=text] .group-data-\\[variant\\=text\\]\\:h-\\[30px\\]{height:30px}.group\\/menu[data-orientation=horizontal] .group-data-\\[orientation\\=horizontal\\]\\/menu\\:w-\\[inherit\\]{width:inherit}.group[data-variant=dot] .group-data-\\[variant\\=dot\\]\\:w-1\\.5{width:.375rem}.group[data-variant=dot] .group-data-\\[variant\\=dot\\]\\:w-2{width:.5rem}.group[data-variant=icon] .group-data-\\[variant\\=icon\\]\\:w-\\[22px\\]{width:22px}.group[data-variant=icon] .group-data-\\[variant\\=icon\\]\\:w-\\[32px\\]{width:32px}.group\\/menu[data-variant=mega] .group-data-\\[variant\\=mega\\]\\/menu\\:w-auto{width:auto}.group\\/menu[data-variant=standard] .group-data-\\[variant\\=standard\\]\\/menu\\:w-\\[--trigger-width\\]{width:var(--trigger-width)}.group\\/menu[data-variant=standard] .group-data-\\[variant\\=standard\\]\\/menu\\:w-\\[250px\\]{width:250px}.group\\/menu[data-variant=standard] .group-data-\\[variant\\=standard\\]\\/menu\\:w-fit{width:-moz-fit-content;width:fit-content}.group[data-variant=text][data-content-single-element=true] .group-data-\\[variant\\=text\\]\\:group-data-\\[content-single-element\\=true\\]\\:w-\\[22px\\]{width:22px}.group[data-variant=text][data-content-single-element=true] .group-data-\\[variant\\=text\\]\\:group-data-\\[content-single-element\\=true\\]\\:w-\\[30px\\]{width:30px}.group\\/menu[data-variant=mega] .group-data-\\[variant\\=mega\\]\\/menu\\:max-w-\\[1440px\\]{max-width:1440px}.group\\/menu[data-variant=standard] .group-data-\\[variant\\=standard\\]\\/menu\\:p-2{padding:.5rem}.group\\/menu[data-variant=mega] .group-data-\\[variant\\=mega\\]\\/menu\\:px-8{padding-left:2rem;padding-right:2rem}.group\\/menu[data-variant=standard] .group-data-\\[variant\\=standard\\]\\/menu\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.group[data-variant=text][data-content-single-element=false] .group-data-\\[variant\\=text\\]\\:group-data-\\[content-single-element\\=false\\]\\:px-\\[11px\\]{padding-left:11px;padding-right:11px}.group[data-variant=text][data-content-single-element=false] .group-data-\\[variant\\=text\\]\\:group-data-\\[content-single-element\\=false\\]\\:px-\\[7px\\]{padding-left:7px;padding-right:7px}.entering\\:zoom-in-95[data-entering]{--tw-enter-scale: .95 }.hover\\:cursor-pointer:where([data-rac])[data-hovered]{cursor:pointer}.hover\\:bg-content-neutral-bold\\/\\[0\\.08\\]:where([data-rac])[data-hovered]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.hover\\:bg-content-neutral-regular:where([data-rac])[data-hovered]{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:bg-content-neutral-regular\\/\\[0\\.08\\]:where([data-rac])[data-hovered]{background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent 92%)}.hover\\:bg-interactive-neutral-regular:where([data-rac])[data-hovered]{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:bg-interactive-neutral-subtle:where([data-rac])[data-hovered]{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:bg-surface-level-02:where([data-rac])[data-hovered]{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-level-02-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:active\\:bg-content-neutral-bold\\/\\[0\\.12\\]:active:where([data-rac])[data-hovered]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.hover\\:active\\:bg-content-neutral-regular\\/\\[0\\.12\\]:active:where([data-rac])[data-hovered]{background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent 88%)}.hover\\:cursor-pointer:where(:not([data-rac])):hover{cursor:pointer}.hover\\:bg-content-neutral-bold\\/\\[0\\.08\\]:where(:not([data-rac])):hover{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.hover\\:bg-content-neutral-regular:where(:not([data-rac])):hover{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:bg-content-neutral-regular\\/\\[0\\.08\\]:where(:not([data-rac])):hover{background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent 92%)}.hover\\:bg-interactive-neutral-regular:where(:not([data-rac])):hover{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:bg-interactive-neutral-subtle:where(:not([data-rac])):hover{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:bg-surface-level-02:where(:not([data-rac])):hover{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-level-02-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:active\\:bg-content-neutral-bold\\/\\[0\\.12\\]:active:where(:not([data-rac])):hover{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.hover\\:active\\:bg-content-neutral-regular\\/\\[0\\.12\\]:active:where(:not([data-rac])):hover{background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent 88%)}.group:where([data-rac])[data-hovered] .group-hover\\:bg-content-neutral-bold\\/\\[0\\.08\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.group:where(:not([data-rac])):hover .group-hover\\:bg-content-neutral-bold\\/\\[0\\.08\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.group:where([data-rac])[data-hovered]:active .group-hover\\:group-active\\:bg-content-neutral-bold\\/\\[0\\.12\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.group:where(:not([data-rac])):hover:active .group-hover\\:group-active\\:bg-content-neutral-bold\\/\\[0\\.12\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.focus\\:shadow-\\[inset_0_0_0_2px_var\\(--interactive-highlight-color\\)\\]:where([data-rac])[data-focused]{--tw-shadow: inset 0 0 0 2px var(--interactive-highlight-color);--tw-shadow-colored: inset 0 0 0 2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.focus\\:outline-none:where([data-rac])[data-focused]{outline:2px solid transparent;outline-offset:2px}.focus\\:shadow-\\[inset_0_0_0_2px_var\\(--interactive-highlight-color\\)\\]:where(:not([data-rac])):focus{--tw-shadow: inset 0 0 0 2px var(--interactive-highlight-color);--tw-shadow-colored: inset 0 0 0 2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.focus\\:outline-none:where(:not([data-rac])):focus{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:outline:where([data-rac])[data-focus-visible]{outline-style:solid}.focus-visible\\:outline-\\[3px\\]:where([data-rac])[data-focus-visible]{outline-width:3px}.focus-visible\\:outline-offset-2:where([data-rac])[data-focus-visible]{outline-offset:2px}.focus-visible\\:outline-offset-\\[1px\\]:where([data-rac])[data-focus-visible]{outline-offset:1px}.focus-visible\\:outline-interactive-highlight:where([data-rac])[data-focus-visible]{outline-color:var(--interactive-highlight-color)}.focus-visible\\:outline:where(:not([data-rac])):focus-visible{outline-style:solid}.focus-visible\\:outline-\\[3px\\]:where(:not([data-rac])):focus-visible{outline-width:3px}.focus-visible\\:outline-offset-2:where(:not([data-rac])):focus-visible{outline-offset:2px}.focus-visible\\:outline-offset-\\[1px\\]:where(:not([data-rac])):focus-visible{outline-offset:1px}.focus-visible\\:outline-interactive-highlight:where(:not([data-rac])):focus-visible{outline-color:var(--interactive-highlight-color)}.disabled\\:pointer-events-none:where([data-rac])[data-disabled]{pointer-events:none}.disabled\\:opacity-30:where([data-rac])[data-disabled]{opacity:.3}.disabled\\:pointer-events-none:where(:not([data-rac])):disabled{pointer-events:none}.disabled\\:opacity-30:where(:not([data-rac])):disabled{opacity:.3}@media(prefers-reduced-motion:no-preference){.motion-safe\\:duration-300{transition-duration:.3s}.motion-safe\\:ease-in{transition-timing-function:cubic-bezier(.4,0,1,1)}.motion-safe\\:ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.motion-safe\\:animate-in{animation-name:enter;animation-duration:.15s;--tw-enter-opacity: initial;--tw-enter-scale: initial;--tw-enter-rotate: initial;--tw-enter-translate-x: initial;--tw-enter-translate-y: initial }.motion-safe\\:animate-out{animation-name:exit;animation-duration:.15s;--tw-exit-opacity: initial;--tw-exit-scale: initial;--tw-exit-rotate: initial;--tw-exit-translate-x: initial;--tw-exit-translate-y: initial }.motion-safe\\:fade-in{--tw-enter-opacity: 0 }.motion-safe\\:fade-out{--tw-exit-opacity: 0 }.motion-safe\\:slide-in-from-bottom{--tw-enter-translate-y: 100% }.motion-safe\\:slide-out-to-bottom{--tw-exit-translate-y: 100% }.motion-safe\\:duration-300{animation-duration:.3s}.motion-safe\\:ease-in{animation-timing-function:cubic-bezier(.4,0,1,1)}.motion-safe\\:ease-out{animation-timing-function:cubic-bezier(0,0,.2,1)}.motion-safe\\:entering\\:animate-in[data-entering]{animation-name:enter;animation-duration:.15s;--tw-enter-opacity: initial;--tw-enter-scale: initial;--tw-enter-rotate: initial;--tw-enter-translate-x: initial;--tw-enter-translate-y: initial }.motion-safe\\:entering\\:fade-in[data-entering]{--tw-enter-opacity: 0 }.motion-safe\\:entering\\:zoom-in-95[data-entering]{--tw-enter-scale: .95 }.motion-safe\\:exiting\\:animate-out[data-exiting]{animation-name:exit;animation-duration:.15s;--tw-exit-opacity: initial;--tw-exit-scale: initial;--tw-exit-rotate: initial;--tw-exit-translate-x: initial;--tw-exit-translate-y: initial }.motion-safe\\:exiting\\:fade-out[data-exiting]{--tw-exit-opacity: 0 }.motion-safe\\:exiting\\:zoom-out-95[data-exiting]{--tw-exit-scale: .95 }}@media(prefers-reduced-motion:reduce){.motion-reduce\\:transition-none{transition-property:none}}.dark\\:bg-\\[\\#000000\\]:is([data-paloma-mode=dark] *){--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.dark\\:bg-\\[\\#01081D\\]:is([data-paloma-mode=dark] *){--tw-bg-opacity: 1;background-color:rgb(1 8 29 / var(--tw-bg-opacity))}.dark\\:bg-\\[\\#020B07\\]:is([data-paloma-mode=dark] *){--tw-bg-opacity: 1;background-color:rgb(2 11 7 / var(--tw-bg-opacity))}.dark\\:bg-\\[\\#142242\\]:is([data-paloma-mode=dark] *){--tw-bg-opacity: 1;background-color:rgb(20 34 66 / var(--tw-bg-opacity))}.dark\\:bg-\\[\\#160303\\]:is([data-paloma-mode=dark] *){--tw-bg-opacity: 1;background-color:rgb(22 3 3 / var(--tw-bg-opacity))}.dark\\:bg-\\[\\#160511\\]:is([data-paloma-mode=dark] *){--tw-bg-opacity: 1;background-color:rgb(22 5 17 / var(--tw-bg-opacity))}.dark\\:bg-\\[var\\(--base-color-dark\\)\\]:is([data-paloma-mode=dark] *){background-color:var(--base-color-dark)}.dark\\:\\[--accent-color\\:\\#03622A\\]:is([data-paloma-mode=dark] *){--accent-color: #03622A }.dark\\:\\[--accent-color\\:\\#25A8E0\\]:is([data-paloma-mode=dark] *){--accent-color: #25A8E0 }.dark\\:\\[--accent-color\\:\\#6D1111\\]:is([data-paloma-mode=dark] *){--accent-color: #6D1111 }.dark\\:\\[--accent-color\\:\\#6D17C4\\]:is([data-paloma-mode=dark] *){--accent-color: #6D17C4 }.dark\\:\\[--accent-color\\:\\#972073\\]:is([data-paloma-mode=dark] *){--accent-color: #972073 }.dark\\:\\[--accent-color\\:\\#FF6333\\]:is([data-paloma-mode=dark] *){--accent-color: #FF6333 }.dark\\:\\[--accent-color\\:\\#FF7F66\\]:is([data-paloma-mode=dark] *){--accent-color: #FF7F66 }.dark\\:\\[--accent-color\\:var\\(--accent-color-dark\\)\\]:is([data-paloma-mode=dark] *){--accent-color: var(--accent-color-dark) }.dark\\:\\[--base-color\\:\\#000000\\]:is([data-paloma-mode=dark] *){--base-color: #000000 }.dark\\:\\[--base-color\\:\\#01081D\\]:is([data-paloma-mode=dark] *){--base-color: #01081D }.dark\\:\\[--base-color\\:\\#020B07\\]:is([data-paloma-mode=dark] *){--base-color: #020B07 }.dark\\:\\[--base-color\\:\\#142242\\]:is([data-paloma-mode=dark] *){--base-color: #142242 }.dark\\:\\[--base-color\\:\\#160303\\]:is([data-paloma-mode=dark] *){--base-color: #160303 }.dark\\:\\[--base-color\\:\\#160511\\]:is([data-paloma-mode=dark] *){--base-color: #160511 }.dark\\:\\[--base-color\\:var\\(--base-color-dark\\)\\]:is([data-paloma-mode=dark] *){--base-color: var(--base-color-dark) }.dark\\:\\[--glow-color\\:\\#07F468\\]:is([data-paloma-mode=dark] *){--glow-color: #07F468 }.dark\\:\\[--glow-color\\:\\#093DD8\\]:is([data-paloma-mode=dark] *){--glow-color: #093DD8 }.dark\\:\\[--glow-color\\:\\#3356A4\\]:is([data-paloma-mode=dark] *){--glow-color: #3356A4 }.dark\\:\\[--glow-color\\:\\#872AE6\\]:is([data-paloma-mode=dark] *){--glow-color: #872AE6 }.dark\\:\\[--glow-color\\:\\#E00000\\]:is([data-paloma-mode=dark] *){--glow-color: #E00000 }.dark\\:\\[--glow-color\\:\\#E53600\\]:is([data-paloma-mode=dark] *){--glow-color: #E53600 }.dark\\:\\[--glow-color\\:\\#FF2900\\]:is([data-paloma-mode=dark] *){--glow-color: #FF2900 }.dark\\:\\[--glow-color\\:var\\(--glow-color-dark\\)\\]:is([data-paloma-mode=dark] *){--glow-color: var(--glow-color-dark) }@media(max-width:1440px){.max-\\[1440px\\]\\:px-5{padding-left:1.25rem;padding-right:1.25rem}}@media not all and (min-width:1280px){.max-lg\\:flex{display:flex}.max-lg\\:hidden{display:none}.max-lg\\:-translate-y-full{--tw-translate-y: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.max-lg\\:flex-col{flex-direction:column}.max-lg\\:justify-between{justify-content:space-between}.max-lg\\:gap-2{gap:.5rem}.max-lg\\:gap-4{gap:1rem}.max-lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}@media not all and (min-width:768px){.max-md\\:flex{display:flex}.max-md\\:hidden{display:none}.max-md\\:w-auto{width:auto}.max-md\\:w-full{width:100%}.max-md\\:max-w-\\[250px\\]{max-width:250px}.max-md\\:max-w-\\[767px\\]{max-width:767px}.max-md\\:max-w-\\[815px\\]{max-width:815px}.max-md\\:flex-col{flex-direction:column}.max-md\\:justify-normal{justify-content:normal}.max-md\\:justify-between{justify-content:space-between}.max-md\\:px-4{padding-left:1rem;padding-right:1rem}.max-md\\:py-2{padding-top:.5rem;padding-bottom:.5rem}.max-md\\:py-3{padding-top:.75rem;padding-bottom:.75rem}.max-md\\:text-center{text-align:center}.max-md\\:text-size-heading-x-small{font-size:var(--font-size-heading-x-small);line-height:var(--line-height-heading-x-small)}.max-md\\:\\!grid-in-\\[2\\/2\\/2\\/2\\]{grid-area:2/2/2/2!important}.max-md\\:grid-in-\\[1\\/1\\/2\\/1\\]{grid-area:1/1/2/1}.max-md\\:grid-in-\\[1\\/2\\/1\\/2\\]{grid-area:1/2/1/2}.max-md\\:grid-in-\\[2\\/1\\/2\\/1\\]{grid-area:2/1/2/1}@media(prefers-reduced-motion:no-preference){.max-md\\:motion-safe\\:slide-in-from-bottom{--tw-enter-translate-y: 100% }.max-md\\:motion-safe\\:slide-out-to-bottom{--tw-exit-translate-y: 100% }}}@media not all and (min-width:640px){.max-sm\\:w-full{width:100%}.max-sm\\:max-w-full{max-width:100%}}@media(min-width:640px){.sm\\:w-\\[345px\\]{width:345px}.sm\\:place-content-center{place-content:center}.sm\\:place-items-center{place-items:center}.sm\\:\\[place-self\\:stretch\\]{place-self:stretch}}@media(min-width:768px){.md\\:-left-\\[12\\.5\\%\\]{left:-12.5%}.md\\:-right-\\[10\\%\\]{right:-10%}.md\\:-right-\\[20\\%\\]{right:-20%}.md\\:bottom-0{bottom:0}.md\\:bottom-20{bottom:5rem}.md\\:bottom-40{bottom:10rem}.md\\:left-0{left:0}.md\\:left-\\[40\\%\\]{left:40%}.md\\:top-20{top:5rem}.md\\:top-28{top:7rem}.md\\:top-\\[7\\.5rem\\]{top:7.5rem}.md\\:top-auto{top:auto}.md\\:mt-36{margin-top:9rem}.md\\:block{display:block}.md\\:flex{display:flex}.md\\:grid{display:grid}.md\\:hidden{display:none}.md\\:max-h-\\[calc\\(100dvh_-_\\(4rem_\\*_2\\)\\)\\]{max-height:calc(100dvh - 8rem)}.md\\:max-h-\\[calc\\(100vh_-_\\(4rem_\\*_2\\)\\)\\]{max-height:calc(100vh - 8rem)}.md\\:min-h-\\[100dvh\\]{min-height:100dvh}.md\\:min-h-screen{min-height:100vh}.md\\:w-1\\/2{width:50%}.md\\:w-\\[100\\%\\]{width:100%}.md\\:w-\\[150\\%\\]{width:150%}.md\\:w-\\[80\\%\\]{width:80%}.md\\:w-auto{width:auto}.md\\:w-full{width:100%}.md\\:max-w-\\[1279px\\]{max-width:1279px}.md\\:max-w-\\[1327px\\]{max-width:1327px}.md\\:max-w-\\[420px\\]{max-width:420px}.md\\:max-w-\\[486px\\]{max-width:486px}.md\\:translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.md\\:\\!grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))!important}.md\\:grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.md\\:flex-row{flex-direction:row}.md\\:flex-row-reverse{flex-direction:row-reverse}.md\\:flex-col{flex-direction:column}.md\\:place-items-center{place-items:center}.md\\:items-center{align-items:center}.md\\:justify-between{justify-content:space-between}.md\\:gap-0{gap:0px}.md\\:gap-2{gap:.5rem}.md\\:gap-4{gap:1rem}.md\\:gap-6{gap:1.5rem}.md\\:gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.md\\:place-self-center{place-self:center}.md\\:self-start{align-self:flex-start}.md\\:self-center{align-self:center}.md\\:bg-\\[linear-gradient\\(185deg\\,transparent_30\\%\\,var\\(--base-color\\)_50\\%\\)\\]{background-image:linear-gradient(185deg,transparent 30%,var(--base-color) 50%)}.md\\:p-10{padding:2.5rem}.md\\:p-5{padding:1.25rem}.md\\:p-8{padding:2rem}.md\\:py-16{padding-top:4rem;padding-bottom:4rem}.md\\:pb-10{padding-bottom:2.5rem}.md\\:pb-8{padding-bottom:2rem}.md\\:pt-28{padding-top:7rem}.md\\:text-left{text-align:left}.md\\:grid-in-\\[1\\/1\\/1\\/1\\]{grid-area:1/1/1/1}@media(prefers-reduced-motion:no-preference){.md\\:motion-safe\\:zoom-in-95{--tw-enter-scale: .95 }.md\\:motion-safe\\:zoom-out-95{--tw-exit-scale: .95 }}@media not all and (min-width:1280px){.md\\:max-lg\\:col-span-4{grid-column:span 4 / span 4}.md\\:max-lg\\:col-span-6{grid-column:span 6 / span 6}.md\\:max-lg\\:col-start-2{grid-column-start:2}.md\\:max-lg\\:col-start-3{grid-column-start:3}.md\\:max-lg\\:flex{display:flex}.md\\:max-lg\\:grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}}}@media(min-width:1280px){.lg\\:-bottom-20{bottom:-5rem}.lg\\:left-0{left:0}.lg\\:left-\\[5\\%\\]{left:5%}.lg\\:right-\\[5\\%\\]{right:5%}.lg\\:top-10{top:2.5rem}.lg\\:top-24{top:6rem}.lg\\:top-6{top:1.5rem}.lg\\:col-span-10{grid-column:span 10 / span 10}.lg\\:col-span-4{grid-column:span 4 / span 4}.lg\\:col-span-6{grid-column:span 6 / span 6}.lg\\:col-span-8{grid-column:span 8 / span 8}.lg\\:col-start-2{grid-column-start:2}.lg\\:col-start-4{grid-column-start:4}.lg\\:col-start-5{grid-column-start:5}.lg\\:-mt-12{margin-top:-3rem}.lg\\:flex{display:flex}.lg\\:grid{display:grid}.lg\\:hidden{display:none}.lg\\:h-11{height:2.75rem}.lg\\:h-16{height:4rem}.lg\\:h-20{height:5rem}.lg\\:h-32{height:8rem}.lg\\:h-52{height:13rem}.lg\\:h-\\[132px\\]{height:132px}.lg\\:h-\\[3\\.75rem\\]{height:3.75rem}.lg\\:w-11{width:2.75rem}.lg\\:w-16{width:4rem}.lg\\:w-20{width:5rem}.lg\\:w-32{width:8rem}.lg\\:w-52{width:13rem}.lg\\:w-\\[132px\\]{width:132px}.lg\\:w-\\[138px\\]{width:138px}.lg\\:w-\\[3\\.75rem\\]{width:3.75rem}.lg\\:w-\\[82\\%\\]{width:82%}.lg\\:w-\\[90\\%\\]{width:90%}.lg\\:w-full{width:100%}.lg\\:max-w-\\[120rem\\]{max-width:120rem}.lg\\:max-w-\\[1440px\\]{max-width:1440px}.lg\\:max-w-\\[1520px\\]{max-width:1520px}.lg\\:max-w-\\[59\\.625rem\\]{max-width:59.625rem}.lg\\:max-w-none{max-width:none}.lg\\:-translate-y-full{--tw-translate-y: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.lg\\:\\!grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))!important}.lg\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.lg\\:grid-cols-subgrid{grid-template-columns:subgrid}.lg\\:flex-row{flex-direction:row}.lg\\:justify-end{justify-content:flex-end}.lg\\:justify-between{justify-content:space-between}.lg\\:gap-3{gap:.75rem}.lg\\:gap-5{gap:1.25rem}.lg\\:gap-8{gap:2rem}.lg\\:border-x-0{border-left-width:0px;border-right-width:0px}.lg\\:border-b{border-bottom-width:1px}.lg\\:border-t-0{border-top-width:0px}.lg\\:border-solid{border-style:solid}.lg\\:border-neutral-subtle{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.lg\\:\\!bg-base{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--background-base-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.lg\\:bg-transparent{background-color:transparent}.lg\\:bg-\\[linear-gradient\\(185deg\\,transparent_30\\%\\,var\\(--base-color\\)_60\\%\\)\\]{background-image:linear-gradient(185deg,transparent 30%,var(--base-color) 60%)}.lg\\:\\!p-6{padding:1.5rem!important}.lg\\:px-10{padding-left:2.5rem;padding-right:2.5rem}.lg\\:pb-10{padding-bottom:2.5rem}.lg\\:pb-14{padding-bottom:3.5rem}.lg\\:pt-0{padding-top:0}.lg\\:pt-16{padding-top:4rem}.lg\\:pt-36{padding-top:9rem}.lg\\:text-size-lg-heading-large{font-size:var(--font-size-lg-heading-large);line-height:var(--line-height-lg-heading-large)}.lg\\:text-size-lg-heading-medium{font-size:var(--font-size-lg-heading-medium);line-height:var(--line-height-lg-heading-medium)}.lg\\:text-size-lg-heading-x-large{font-size:var(--font-size-lg-heading-x-large);line-height:var(--line-height-lg-heading-x-large)}.lg\\:blur-\\[30px\\]{--tw-blur: blur(30px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.group\\/menu[data-variant=mega] .lg\\:group-data-\\[variant\\=mega\\]\\/menu\\:mx-10{margin-left:2.5rem;margin-right:2.5rem}}.ltr\\:ml-6:where([dir=ltr],[dir=ltr] *){margin-left:1.5rem}.ltr\\:rounded-bl-xl:where([dir=ltr],[dir=ltr] *){border-bottom-left-radius:.75rem}.ltr\\:rounded-br-xl:where([dir=ltr],[dir=ltr] *){border-bottom-right-radius:.75rem}.ltr\\:rounded-tl-xl:where([dir=ltr],[dir=ltr] *){border-top-left-radius:.75rem}.ltr\\:rounded-tr-xl:where([dir=ltr],[dir=ltr] *){border-top-right-radius:.75rem}.ltr\\:border-l-0:where([dir=ltr],[dir=ltr] *){border-left-width:0px}.ltr\\:text-left:where([dir=ltr],[dir=ltr] *){text-align:left}.rtl\\:-left-0:where([dir=rtl],[dir=rtl] *){left:-0px}.rtl\\:-left-0\\.5:where([dir=rtl],[dir=rtl] *){left:-.125rem}.rtl\\:-left-2:where([dir=rtl],[dir=rtl] *){left:-.5rem}.rtl\\:-right-0:where([dir=rtl],[dir=rtl] *){right:-0px}.rtl\\:-right-0\\.5:where([dir=rtl],[dir=rtl] *){right:-.125rem}.rtl\\:-right-2:where([dir=rtl],[dir=rtl] *){right:-.5rem}.rtl\\:mr-6:where([dir=rtl],[dir=rtl] *){margin-right:1.5rem}.rtl\\:-rotate-45:where([dir=rtl],[dir=rtl] *){--tw-rotate: -45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rtl\\:rotate-180:where([dir=rtl],[dir=rtl] *){--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rtl\\:rotate-45:where([dir=rtl],[dir=rtl] *){--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rtl\\:scale-x-\\[-1\\]:where([dir=rtl],[dir=rtl] *){--tw-scale-x: -1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rtl\\:rounded-bl-xl:where([dir=rtl],[dir=rtl] *){border-bottom-left-radius:.75rem}.rtl\\:rounded-br-xl:where([dir=rtl],[dir=rtl] *){border-bottom-right-radius:.75rem}.rtl\\:rounded-tl-xl:where([dir=rtl],[dir=rtl] *){border-top-left-radius:.75rem}.rtl\\:rounded-tr-xl:where([dir=rtl],[dir=rtl] *){border-top-right-radius:.75rem}.rtl\\:border-r-0:where([dir=rtl],[dir=rtl] *){border-right-width:0px}.rtl\\:pl-2:where([dir=rtl],[dir=rtl] *){padding-left:.5rem}.rtl\\:pr-1:where([dir=rtl],[dir=rtl] *){padding-right:.25rem}.rtl\\:pr-1\\.5:where([dir=rtl],[dir=rtl] *){padding-right:.375rem}.rtl\\:pr-3:where([dir=rtl],[dir=rtl] *){padding-right:.75rem}.rtl\\:pr-4:where([dir=rtl],[dir=rtl] *){padding-right:1rem}.rtl\\:text-right:where([dir=rtl],[dir=rtl] *){text-align:right}.rtl\\:\\[transform\\:scaleX\\(-1\\)\\]:where([dir=rtl],[dir=rtl] *){transform:scaleX(-1)}.\\[\\&\\>\\*\\:nth-child\\(n\\+8\\)\\]\\:absolute>*:nth-child(n+8){position:absolute}.\\[\\&\\>\\*\\:nth-child\\(n\\+8\\)\\]\\:opacity-0>*:nth-child(n+8){opacity:0}.\\[\\&\\>button\\]\\:w-full>button{width:100%}@media(min-width:768px){.md\\:\\[\\&\\>button\\]\\:w-auto>button{width:auto}}.\\[\\&\\>div\\]\\:-rotate-90>div{--tw-rotate: -90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.\\[\\&\\>div\\]\\:rotate-180>div{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.\\[\\&\\>div\\]\\:rotate-90>div{--tw-rotate: 90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@media(min-width:768px){@media not all and (min-width:1280px){.md\\:max-lg\\:\\[\\&\\>li\\:last-child\\>\\:last-child\\]\\:truncate>li:last-child>:last-child{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.md\\:max-lg\\:\\[\\&\\>li\\:last-child\\]\\:overflow-hidden>li:last-child{overflow:hidden}}}.\\[\\&\\>li\\:nth-last-child\\(2\\)\\]\\:flex>li:nth-last-child(2){display:flex}.\\[\\&\\>li\\]\\:hidden>li{display:none}.\\[\\&\\>li\\]\\:flex-1>li{flex:1 1 0%}@media not all and (min-width:768px){.max-md\\:\\[\\&\\>span\\]\\:text-size-body-small>span{font-size:var(--font-size-body-small);line-height:var(--line-height-body-small)}}@media(min-width:1280px){.lg\\:\\[\\&\\>svg\\]\\:h-16>svg{height:4rem}.lg\\:\\[\\&\\>svg\\]\\:w-16>svg{width:4rem}}@media(min-width:768px){.md\\:\\[\\&\\[data-trailing-bottom\\=true\\]\\]\\:items-end[data-trailing-bottom=true]{align-items:flex-end}}.\\[\\&\\[data-trailing-slot-bottom\\=true\\]\\]\\:items-end[data-trailing-slot-bottom=true]{align-items:flex-end}.\\[\\&_\\.paloma-toast\\]\\:outline .paloma-toast{outline-style:solid}.\\[\\&_\\.paloma-toast\\]\\:outline-2 .paloma-toast{outline-width:2px}.\\[\\&_\\.paloma-toast\\]\\:outline-offset-2 .paloma-toast{outline-offset:2px}.\\[\\&_\\.paloma-toast\\]\\:outline-interactive-highlight .paloma-toast{outline-color:var(--interactive-highlight-color)}.\\[\\&_\\[data-variant\\=danger\\]\\]\\:\\!bg-interactive-neutral-regular [data-variant=danger]{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--interactive-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.\\[\\&_\\[data-variant\\=inverse\\]\\]\\:\\!bg-interactive-neutral-subtle [data-variant=inverse]{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--interactive-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.\\[\\&_\\[data-variant\\=primary\\]\\]\\:\\!bg-content-neutral-regular [data-variant=primary]{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.\\[\\&_\\[data-variant\\=secondary\\]\\]\\:\\!bg-interactive-neutral-regular [data-variant=secondary]{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--interactive-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.\\[\\&_\\[data-vrt-overlay\\]\\]\\:\\!bg-content-neutral-bold\\/\\[0\\.08\\] [data-vrt-overlay]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)!important}.\\[\\&_\\[data-vrt-overlay\\]\\]\\:\\!bg-content-neutral-bold\\/\\[0\\.12\\] [data-vrt-overlay]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)!important}.\\[\\&_\\[role\\=tab\\]\\]\\:bg-content-neutral-regular\\/\\[0\\.08\\] [role=tab]{background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent 92%)}.\\[\\&_\\[role\\=tab\\]\\]\\:outline [role=tab]{outline-style:solid}.\\[\\&_\\[role\\=tab\\]\\]\\:outline-\\[3px\\] [role=tab]{outline-width:3px}.\\[\\&_\\[role\\=tab\\]\\]\\:outline-offset-2 [role=tab]{outline-offset:2px}.\\[\\&_\\[role\\=tab\\]\\]\\:outline-interactive-highlight [role=tab]{outline-color:var(--interactive-highlight-color)}.\\[\\&_a\\]\\:rounded-sm a{border-radius:.125rem}.\\[\\&_a\\]\\:bg-content-neutral-bold\\/\\[0\\.08\\] a{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.\\[\\&_a\\]\\:outline a{outline-style:solid}.\\[\\&_a\\]\\:outline-2 a{outline-width:2px}.\\[\\&_a\\]\\:outline-offset-2 a{outline-offset:2px}.\\[\\&_a\\]\\:outline-interactive-highlight a{outline-color:var(--interactive-highlight-color)}.\\[\\&_button\\]\\:rounded-md button{border-radius:.375rem}.\\[\\&_button\\]\\:\\!bg-surface-level-02 button{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--surface-level-02-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.\\[\\&_button\\]\\:bg-content-neutral-bold\\/\\[0\\.08\\] button{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.\\[\\&_button\\]\\:bg-content-neutral-bold\\/\\[0\\.12\\] button{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.\\[\\&_button\\]\\:outline button{outline-style:solid}.\\[\\&_button\\]\\:outline-2 button{outline-width:2px}.\\[\\&_button\\]\\:outline-offset-2 button{outline-offset:2px}.\\[\\&_button\\]\\:outline-interactive-highlight button{outline-color:var(--interactive-highlight-color)}@media not all and (min-width:1280px){.\\[\\&_span\\[data-logo-product-name\\=paloma-logo\\]\\]\\:max-lg\\:hidden span[data-logo-product-name=paloma-logo]{display:none}}@media(hover:hover){.\\[\\@media\\(hover\\:hover\\)\\]\\:hover\\:bg-content-neutral-bold\\/\\[0\\.08\\]:where([data-rac])[data-hovered]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.\\[\\@media\\(hover\\:hover\\)\\]\\:hover\\:bg-surface-level-02:where([data-rac])[data-hovered]{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-level-02-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.\\[\\@media\\(hover\\:hover\\)\\]\\:hover\\:active\\:bg-content-neutral-bold\\/\\[0\\.12\\]:active:where([data-rac])[data-hovered]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.\\[\\@media\\(hover\\:hover\\)\\]\\:hover\\:bg-content-neutral-bold\\/\\[0\\.08\\]:where(:not([data-rac])):hover{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.\\[\\@media\\(hover\\:hover\\)\\]\\:hover\\:bg-surface-level-02:where(:not([data-rac])):hover{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-level-02-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.\\[\\@media\\(hover\\:hover\\)\\]\\:hover\\:active\\:bg-content-neutral-bold\\/\\[0\\.12\\]:active:where(:not([data-rac])):hover{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.group:where([data-rac])[data-hovered] .\\[\\@media\\(hover\\:hover\\)\\]\\:group-hover\\:underline{text-decoration-line:underline}.group:where([data-rac])[data-hovered] .\\[\\@media\\(hover\\:hover\\)\\]\\:group-hover\\:no-underline{text-decoration-line:none}.group:where(:not([data-rac])):hover .\\[\\@media\\(hover\\:hover\\)\\]\\:group-hover\\:underline{text-decoration-line:underline}.group:where(:not([data-rac])):hover .\\[\\@media\\(hover\\:hover\\)\\]\\:group-hover\\:no-underline{text-decoration-line:none}}[tabindex="0"].\\[\\[tabindex\\=\\'0\\'\\]\\&\\:focus-visible\\]\\:outline:focus-visible{outline-style:solid}[tabindex="0"].\\[\\[tabindex\\=\\'0\\'\\]\\&\\:focus-visible\\]\\:outline-2:focus-visible{outline-width:2px}[tabindex="0"].\\[\\[tabindex\\=\\'0\\'\\]\\&\\:focus-visible\\]\\:outline-offset-2:focus-visible{outline-offset:2px}[tabindex="0"].\\[\\[tabindex\\=\\'0\\'\\]\\&\\:focus-visible\\]\\:outline-offset-\\[-3px\\]:focus-visible{outline-offset:-3px}[tabindex="0"].\\[\\[tabindex\\=\\'0\\'\\]\\&\\:focus-visible\\]\\:outline-interactive-highlight:focus-visible{outline-color:var(--interactive-highlight-color)}`;
var Cl = { exports: {} }, Xn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ud;
function Nh() {
  if (ud) return Xn;
  ud = 1;
  var o = Kl(), s = Symbol.for("react.element"), l = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, d = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(v, f, c) {
    var E, k = {}, g = null, S = null;
    c !== void 0 && (g = "" + c), f.key !== void 0 && (g = "" + f.key), f.ref !== void 0 && (S = f.ref);
    for (E in f) p.call(f, E) && !w.hasOwnProperty(E) && (k[E] = f[E]);
    if (v && v.defaultProps) for (E in f = v.defaultProps, f) k[E] === void 0 && (k[E] = f[E]);
    return { $$typeof: s, type: v, key: g, ref: S, props: k, _owner: d.current };
  }
  return Xn.Fragment = l, Xn.jsx = h, Xn.jsxs = h, Xn;
}
var cd;
function Lh() {
  return cd || (cd = 1, Cl.exports = Nh()), Cl.exports;
}
var Fe = Lh();
function an(o) {
  if (Mh()) o.focus({
    preventScroll: !0
  });
  else {
    let s = Rh(o);
    o.focus(), Ih(s);
  }
}
let fa = null;
function Mh() {
  if (fa == null) {
    fa = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return fa = !0, !0;
        }
      });
    } catch {
    }
  }
  return fa;
}
function Rh(o) {
  let s = o.parentNode, l = [], p = document.scrollingElement || document.documentElement;
  for (; s instanceof HTMLElement && s !== p; )
    (s.offsetHeight < s.scrollHeight || s.offsetWidth < s.scrollWidth) && l.push({
      element: s,
      scrollTop: s.scrollTop,
      scrollLeft: s.scrollLeft
    }), s = s.parentNode;
  return p instanceof HTMLElement && l.push({
    element: p,
    scrollTop: p.scrollTop,
    scrollLeft: p.scrollLeft
  }), l;
}
function Ih(o) {
  for (let { element: s, scrollTop: l, scrollLeft: p } of o)
    s.scrollTop = l, s.scrollLeft = p;
}
const We = (o) => Dh(o) ? o.document : Oh(o) ? o : (o == null ? void 0 : o.ownerDocument) ?? (typeof document < "u" ? document : void 0), gt = (o) => {
  let s = We(o);
  return (s == null ? void 0 : s.defaultView) ?? (typeof window < "u" ? window : void 0);
};
function Ld(o) {
  return o !== null && typeof o == "object" && "nodeType" in o && typeof o.nodeType == "number";
}
function Dh(o) {
  return typeof o == "object" && o != null && "window" in o && o.window === o;
}
function Oh(o) {
  return Ld(o) && o.nodeType === 9;
}
function Md(o) {
  return Ld(o) && o.nodeType === 11 && "host" in o;
}
let jh = !1;
function Xl() {
  return jh;
}
function Ue(o, s) {
  var p;
  if (!Xl()) return s && o ? o.contains(s) : !1;
  if (!o || !s) return !1;
  let l = s;
  for (; l !== null; ) {
    if (l === o) return !0;
    typeof l.assignedElements != "function" && ((p = l.assignedSlot) != null && p.parentNode) ? l = l.assignedSlot.parentNode : Md(l) ? l = l.host : l = l.parentNode;
  }
  return !1;
}
const Ut = (o = document) => {
  var l;
  if (!Xl()) return o.activeElement;
  let s = o.activeElement;
  for (; s && "shadowRoot" in s && ((l = s.shadowRoot) != null && l.activeElement); ) s = s.shadowRoot.activeElement;
  return s;
};
function ge(o) {
  if (Xl() && o.target instanceof Element && o.target.shadowRoot) {
    if ("composedPath" in o) return o.composedPath()[0] ?? null;
    if ("composedPath" in o.nativeEvent) return o.nativeEvent.composedPath()[0] ?? null;
  }
  return o.target;
}
const Uh = typeof Element < "u" && "checkVisibility" in Element.prototype;
function Vh(o) {
  const s = gt(o);
  if (!(o instanceof s.HTMLElement) && !(o instanceof s.SVGElement)) return !1;
  let { display: l, visibility: p } = o.style, d = l !== "none" && p !== "hidden" && p !== "collapse";
  if (d) {
    const { getComputedStyle: w } = gt(o);
    let { display: h, visibility: v } = w(o);
    d = h !== "none" && v !== "hidden" && v !== "collapse";
  }
  return d;
}
function Bh(o, s) {
  return !o.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !o.hasAttribute("data-react-aria-prevent-focus") && (o.nodeName === "DETAILS" && s && s.nodeName !== "SUMMARY" ? o.hasAttribute("open") : !0);
}
function Rd(o, s) {
  return Uh ? o.checkVisibility({
    visibilityProperty: !0
  }) && !o.closest("[data-react-aria-prevent-focus]") : o.nodeName !== "#comment" && Vh(o) && Bh(o, s) && (!o.parentElement || Rd(o.parentElement, o));
}
const Id = [
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
], Hh = Id.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
Id.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
function Wh(o, s) {
  return o.matches(Hh) && !Yh(o) && ((s == null ? void 0 : s.skipVisibilityCheck) || Rd(o));
}
function Yh(o) {
  let s = o;
  for (; s != null; ) {
    if (s instanceof gt(s).HTMLElement && s.inert) return !0;
    s = s.parentElement;
  }
  return !1;
}
const Ql = typeof document < "u" ? me.useLayoutEffect : () => {
};
function Gl(o) {
  let s = o;
  return s.nativeEvent = o, s.isDefaultPrevented = () => s.defaultPrevented, s.isPropagationStopped = () => s.cancelBubble, s.persist = () => {
  }, s;
}
function Dd(o, s) {
  Object.defineProperty(o, "target", {
    value: s
  }), Object.defineProperty(o, "currentTarget", {
    value: s
  });
}
function Od(o) {
  let s = re.useRef({
    isFocused: !1,
    observer: null
  });
  return Ql(() => {
    const l = s.current;
    return () => {
      l.observer && (l.observer.disconnect(), l.observer = null);
    };
  }, []), re.useCallback((l) => {
    let p = ge(l);
    if (p instanceof HTMLButtonElement || p instanceof HTMLInputElement || p instanceof HTMLTextAreaElement || p instanceof HTMLSelectElement) {
      s.current.isFocused = !0;
      let d = p, w = (h) => {
        if (s.current.isFocused = !1, d.disabled) {
          let v = Gl(h);
          o == null || o(v);
        }
        s.current.observer && (s.current.observer.disconnect(), s.current.observer = null);
      };
      d.addEventListener("focusout", w, {
        once: !0
      }), s.current.observer = new MutationObserver(() => {
        var h;
        if (s.current.isFocused && d.disabled) {
          (h = s.current.observer) == null || h.disconnect();
          let v = d === Ut() ? null : Ut();
          d.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: v
          })), d.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: v
          }));
        }
      }), s.current.observer.observe(d, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    o
  ]);
}
let xa = !1;
function Kh(o) {
  for (; o && !Wh(o, {
    skipVisibilityCheck: !0
  }); ) o = o.parentElement;
  let s = gt(o), l = Ut(s.document);
  if (!l || l === o) return;
  let p = o == null ? void 0 : o.getRootNode(), d = p != null && Md(p) ? p : gt(o), w = (I) => I === o || I != null && Ue(o, I), h = (I) => I === l || l != null && I != null && Ue(l, I);
  xa = !0;
  let v = !1, f = (I) => {
    (h(ge(I)) || v) && I.stopImmediatePropagation();
  }, c = (I) => {
    (h(ge(I)) || v) && (I.stopImmediatePropagation(), !o && !v && (v = !0, an(l), g()));
  }, E = (I) => {
    (w(ge(I)) || v) && I.stopImmediatePropagation();
  }, k = (I) => {
    (w(ge(I)) || v) && (I.stopImmediatePropagation(), v || (v = !0, an(l), g()));
  };
  d.addEventListener("blur", f, !0), d.addEventListener("focusout", c, !0), d.addEventListener("focusin", k, !0), d.addEventListener("focus", E, !0);
  let g = () => {
    cancelAnimationFrame(S), d.removeEventListener("blur", f, !0), d.removeEventListener("focusout", c, !0), d.removeEventListener("focusin", k, !0), d.removeEventListener("focus", E, !0), xa = !1, v = !1;
  }, S = requestAnimationFrame(g);
  return g;
}
function Ca(o) {
  var l;
  if (typeof window > "u" || window.navigator == null) return !1;
  let s = (l = window.navigator.userAgentData) == null ? void 0 : l.brands;
  return Array.isArray(s) && s.some((p) => o.test(p.brand)) || o.test(window.navigator.userAgent);
}
function ql(o) {
  var s;
  return typeof window < "u" && window.navigator != null ? o.test(((s = window.navigator.userAgentData) == null ? void 0 : s.platform) || window.navigator.platform) : !1;
}
function sr(o) {
  let s = null;
  return () => (s == null && (s = o()), s);
}
const Er = sr(function() {
  return ql(/^Mac/i);
}), Xh = sr(function() {
  return ql(/^iPhone/i);
}), jd = sr(function() {
  return ql(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Er() && navigator.maxTouchPoints > 1;
}), Zl = sr(function() {
  return Xh() || jd();
}), ka = sr(function() {
  return Ca(/AppleWebKit/i) && (Zl() || !Qh());
}), Qh = sr(function() {
  return Ca(/Chrome|CriOS|CrMo/i);
}), Ml = sr(function() {
  return Ca(/Android/i);
}), Gh = sr(function() {
  return Ca(/(Firefox|FxiOS)/i);
});
function Ud(o) {
  return o.pointerType === "" && o.isTrusted ? !0 : Ml() && o.pointerType ? o.type === "click" && o.buttons === 1 : o.detail === 0 && !o.pointerType;
}
function qh(o) {
  return !Ml() && o.width === 0 && o.height === 0 || Ml() && o.width === 1 && o.height === 1 && o.pressure === 0 && o.detail === 0 && o.pointerType === "mouse";
}
function Sr(o, s, l = !0) {
  var f, c;
  let { metaKey: p, ctrlKey: d, altKey: w, shiftKey: h } = s;
  !ka() && Gh() && ((c = (f = window.event) == null ? void 0 : f.type) != null && c.startsWith("key")) && o.target === "_blank" && (Er() ? p = !0 : d = !0);
  let v = ka() && Er() && !jd() ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: p,
    ctrlKey: d,
    altKey: w,
    shiftKey: h
  }) : new MouseEvent("click", {
    metaKey: p,
    ctrlKey: d,
    altKey: w,
    shiftKey: h,
    detail: 1,
    bubbles: !0,
    cancelable: !0
  });
  Sr.isOpening = l, an(o), o.dispatchEvent(v), Sr.isOpening = !1;
}
Sr.isOpening = !1;
let ln = null;
const Rl = /* @__PURE__ */ new Set();
let qn = /* @__PURE__ */ new Map(), Cr = !1, ga = !1;
const Zh = {
  Tab: !0,
  Escape: !0
};
function Jl(o, s) {
  for (let l of Rl) l(o, s);
}
function Jh(o) {
  return !(o.metaKey || !Er() && o.altKey || o.ctrlKey || o.key === "Control" || o.key === "Shift" || o.key === "Meta");
}
function _a(o) {
  Cr = !0, !Sr.isOpening && Jh(o) && (ln = "keyboard", Jl("keyboard", o));
}
function nn(o) {
  ln = "pointer", "pointerType" in o && o.pointerType, (o.type === "mousedown" || o.type === "pointerdown") && (Cr = !0, Jl("pointer", o));
}
function Vd(o) {
  !Sr.isOpening && Ud(o) && (Cr = !0, ln = "virtual");
}
function Bd(o) {
  if (xa) return;
  let s = ge(o), l = gt(s), p = We(s);
  if (s === l) {
    ga = !0;
    return;
  }
  s === p || !o.isTrusted || (!Cr && !ga && (ln = "virtual", Jl("virtual", o)), Cr = !1, ga = !1);
}
function Hd() {
  xa || (Cr = !1, ga = !0);
}
function Il(o) {
  if (typeof window > "u" || typeof document > "u") return;
  const s = gt(o), l = We(o);
  if (qn.get(s)) return;
  let p = s.HTMLElement.prototype.focus;
  Reflect.defineProperty(s.HTMLElement.prototype, "focus", {
    configurable: !0,
    writable: !0,
    value: function() {
      Cr = !0, p.apply(this, arguments);
    }
  }), l.addEventListener("keydown", _a, !0), l.addEventListener("keyup", _a, !0), l.addEventListener("click", Vd, !0), s.addEventListener("focus", Bd, !0), s.addEventListener("blur", Hd, !1), typeof PointerEvent < "u" && (l.addEventListener("pointerdown", nn, !0), l.addEventListener("pointermove", nn, !0), l.addEventListener("pointerup", nn, !0)), s.addEventListener("beforeunload", () => {
    Wd(o);
  }, {
    once: !0
  }), qn.set(s, {
    focus: p
  });
}
const Wd = (o, s) => {
  const l = gt(o), p = We(o);
  s && p.removeEventListener("DOMContentLoaded", s), qn.has(l) && (Reflect.defineProperty(l.HTMLElement.prototype, "focus", {
    configurable: !0,
    writable: !0,
    value: qn.get(l).focus
  }), p.removeEventListener("keydown", _a, !0), p.removeEventListener("keyup", _a, !0), p.removeEventListener("click", Vd, !0), l.removeEventListener("focus", Bd, !0), l.removeEventListener("blur", Hd, !1), typeof PointerEvent < "u" && (p.removeEventListener("pointerdown", nn, !0), p.removeEventListener("pointermove", nn, !0), p.removeEventListener("pointerup", nn, !0)), qn.delete(l));
};
function em(o) {
  const s = We(o);
  let l;
  return s.readyState !== "loading" ? Il(o) : (l = () => {
    Il(o);
  }, s.addEventListener("DOMContentLoaded", l)), () => Wd(o, l);
}
typeof document < "u" && em();
function Dl() {
  return ln !== "pointer";
}
function tm() {
  return ln;
}
const rm = /* @__PURE__ */ new Set([
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
function nm(o, s, l) {
  let p = l ? ge(l) : void 0, d = We(p), w = gt(p);
  const h = typeof w < "u" ? w.HTMLInputElement : HTMLInputElement, v = typeof w < "u" ? w.HTMLTextAreaElement : HTMLTextAreaElement, f = typeof w < "u" ? w.HTMLElement : HTMLElement, c = typeof w < "u" ? w.KeyboardEvent : KeyboardEvent;
  let E = Ut(d);
  return o = o || E instanceof h && !rm.has(E.type) || E instanceof v || E instanceof f && E.isContentEditable, !(o && s === "keyboard" && l instanceof c && !Zh[l.key]);
}
function om(o, s, l) {
  Il(), re.useEffect(() => {
    if ((l == null ? void 0 : l.enabled) === !1) return;
    let p = (d, w) => {
      nm(!!(l != null && l.isTextInput), d, w) && o(Dl());
    };
    return Rl.add(p), () => {
      Rl.delete(p);
    };
  }, s);
}
let lr = /* @__PURE__ */ new Map(), Ol = /* @__PURE__ */ new Set();
function dd() {
  if (typeof window > "u") return;
  function o(p) {
    return "propertyName" in p;
  }
  let s = (p) => {
    let d = ge(p);
    if (!o(p) || !d) return;
    let w = lr.get(d);
    w || (w = /* @__PURE__ */ new Set(), lr.set(d, w), d.addEventListener("transitioncancel", l, {
      once: !0
    })), w.add(p.propertyName);
  }, l = (p) => {
    let d = ge(p);
    if (!o(p) || !d) return;
    let w = lr.get(d);
    if (w && (w.delete(p.propertyName), w.size === 0 && (d.removeEventListener("transitioncancel", l), lr.delete(d)), lr.size === 0)) {
      for (let h of Ol) h();
      Ol.clear();
    }
  };
  document.body.addEventListener("transitionrun", s), document.body.addEventListener("transitionend", l);
}
typeof document < "u" && (document.readyState !== "loading" ? dd() : document.addEventListener("DOMContentLoaded", dd));
function am() {
  for (const [o] of lr)
    "isConnected" in o && !o.isConnected && lr.delete(o);
}
function Yd(o) {
  requestAnimationFrame(() => {
    am(), lr.size === 0 ? o() : Ol.add(o);
  });
}
function im(o) {
  if (!o.isConnected) return;
  const s = We(o);
  if (tm() === "virtual") {
    let l = Ut(s);
    Yd(() => {
      const p = Ut(s);
      (p === l || p === s.body) && o.isConnected && an(o);
    });
  } else an(o);
}
function Ea(...o) {
  return (...s) => {
    for (let l of o) typeof l == "function" && l(...s);
  };
}
let jl = /* @__PURE__ */ new Map();
typeof FinalizationRegistry < "u" && new FinalizationRegistry((o) => {
  jl.delete(o);
});
function lm(o, s) {
  if (o === s) return o;
  let l = jl.get(o);
  if (l)
    return l.forEach((d) => d.current = s), s;
  let p = jl.get(s);
  return p ? (p.forEach((d) => d.current = o), o) : s;
}
function sm(...o) {
  return o.length === 1 && o[0] ? o[0] : (s) => {
    let l = !1;
    const p = o.map((d) => {
      const w = fd(d, s);
      return l || (l = typeof w == "function"), w;
    });
    if (l) return () => {
      p.forEach((d, w) => {
        typeof d == "function" ? d() : fd(o[w], null);
      });
    };
  };
}
function fd(o, s) {
  if (typeof o == "function") return o(s);
  o != null && (o.current = s);
}
function Kd(o) {
  var s, l, p = "";
  if (typeof o == "string" || typeof o == "number") p += o;
  else if (typeof o == "object") if (Array.isArray(o)) {
    var d = o.length;
    for (s = 0; s < d; s++) o[s] && (l = Kd(o[s])) && (p && (p += " "), p += l);
  } else for (l in o) o[l] && (p && (p += " "), p += l);
  return p;
}
function es() {
  for (var o, s, l = 0, p = "", d = arguments.length; l < d; l++) (o = arguments[l]) && (s = Kd(o)) && (p && (p += " "), p += s);
  return p;
}
function Fr(...o) {
  let s = {
    ...o[0]
  };
  for (let l = 1; l < o.length; l++) {
    let p = o[l];
    for (let d in p) {
      let w = s[d], h = p[d];
      typeof w == "function" && typeof h == "function" && // This is a lot faster than a regex.
      d[0] === "o" && d[1] === "n" && d.charCodeAt(2) >= /* 'A' */
      65 && d.charCodeAt(2) <= /* 'Z' */
      90 ? s[d] = Ea(w, h) : (d === "className" || d === "UNSAFE_className") && typeof w == "string" && typeof h == "string" ? s[d] = es(w, h) : d === "id" && w && h ? s.id = lm(w, h) : d === "ref" && w && h ? s.ref = sm(w, h) : s[d] = h !== void 0 ? h : w;
    }
  }
  return s;
}
function Xd(o) {
  let { isDisabled: s, onFocus: l, onBlur: p, onFocusChange: d } = o;
  const w = re.useCallback((f) => {
    if (ge(f) === f.currentTarget)
      return p && p(f), d && d(!1), !0;
  }, [
    p,
    d
  ]), h = Od(w), v = re.useCallback((f) => {
    let c = ge(f);
    const E = We(c), k = E ? Ut(E) : Ut();
    c === f.currentTarget && c === k && (l && l(f), d && d(!0), h(f));
  }, [
    d,
    l,
    h
  ]);
  return {
    focusProps: {
      onFocus: !s && (l || d || p) ? v : void 0,
      onBlur: !s && (p || d) ? w : void 0
    }
  };
}
function pa(o) {
  if (o)
    return (s) => {
      let l = !0, p = {
        ...s,
        preventDefault() {
          s.preventDefault();
        },
        isDefaultPrevented() {
          return s.isDefaultPrevented();
        },
        stopPropagation() {
          l = !0;
        },
        continuePropagation() {
          l = !1, typeof s.continuePropagation == "function" && s.continuePropagation();
        },
        isPropagationStopped() {
          return l;
        }
      };
      o(p), l && !(typeof s.isPropagationStopped == "function" && s.isPropagationStopped()) && s.stopPropagation();
    };
}
const um = /* @__PURE__ */ new Set([
  "shift",
  "alt",
  "control",
  "meta",
  "mod"
  // OS dependent - Cmd on Mac, Control on Windows/Linux
]), cm = [
  "Alt",
  "Control",
  "Meta",
  "Shift"
];
function dm(o) {
  let s = /* @__PURE__ */ new Set();
  return o.alt && s.add("Alt"), o.shift && s.add("Shift"), o.ctrl && s.add("Control"), o.meta && s.add("Meta"), o.mod && s.add(Er() ? "Meta" : "Control"), s;
}
function fm(o) {
  let s = /* @__PURE__ */ new Set();
  return o.altKey && s.add("Alt"), o.ctrlKey && s.add("Control"), o.metaKey && s.add("Meta"), o.shiftKey && s.add("Shift"), s;
}
function Qd(o) {
  return cm.filter((s) => o.has(s));
}
function pm(o) {
  let s = o.split("+").reduce((l, p) => {
    let d = p.toLowerCase();
    return um.has(d) ? d === "shift" ? l.shift = !0 : d === "alt" ? l.alt = !0 : d === "control" ? l.ctrl = !0 : d === "meta" ? l.meta = !0 : d === "mod" && (l.mod = !0) : l.key = p, l;
  }, {
    shift: !1,
    alt: !1,
    ctrl: !1,
    meta: !1,
    mod: !1,
    key: ""
  });
  if (s.key === "") throw new Error(`Invalid keyboard shortcut: "${o}". Must include exactly one non-modifier key (e.g. "a", "Enter", "ArrowDown"). Combine any of Shift, Alt, Ctrl, Meta, and Mod.`);
  return s;
}
function Gd(o) {
  return o.toLowerCase();
}
const hm = {
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
function mm(o) {
  let s = Gd(o), l = hm[s];
  return l ?? s;
}
function gm(o) {
  let s = Qd(dm(o)), l = mm(o.key);
  return s.length > 0 ? `${s.join("+")}+${l}` : l;
}
function vm(o) {
  let s = Qd(fm(o)), l = Gd(o.key);
  return (s.length > 0 ? `${s.join("+")}+` : "") + l;
}
function wm(o) {
  let s = /* @__PURE__ */ new Map();
  for (let [l, p] of Object.entries(o)) {
    let d = pm(l);
    s.set(gm(d), p);
  }
  return (l) => {
    let p = vm(l), d = s.get(p), w = d == null ? void 0 : d(l);
    w === void 0 && d !== void 0 ? w = {
      shouldContinuePropagation: !1,
      shouldPreventDefault: !0
    } : typeof w == "boolean" && (w = {
      shouldContinuePropagation: !w,
      shouldPreventDefault: w
    }), w != null && w.shouldPreventDefault && l.preventDefault(), (!d || w != null && w.shouldContinuePropagation) && l.continuePropagation();
  };
}
function ym(o) {
  let { shortcuts: s, allowRepeats: l = !1, allowComposing: p = !1 } = o, d, w;
  if (s) {
    let h = wm(s), v = pa((c) => {
      var E, k;
      if (!Ue(c.currentTarget, ge(c))) {
        c.continuePropagation();
        return;
      }
      if ((E = c.nativeEvent) != null && E.repeat && !l || (k = c.nativeEvent) != null && k.isComposing && !p) {
        c.continuePropagation();
        return;
      }
      h(c);
    }), f = pa((c) => {
      var E, k;
      if (!Ue(c.currentTarget, ge(c))) {
        c.continuePropagation();
        return;
      }
      if ((E = c.nativeEvent) != null && E.repeat && !l || (k = c.nativeEvent) != null && k.isComposing && !p) {
        c.continuePropagation();
        return;
      }
      c.continuePropagation();
    });
    d = o.onKeyDown ? Ea(o.onKeyDown, v) : v, w = o.onKeyUp ? Ea(o.onKeyUp, f) : f;
  } else
    d = pa(o.onKeyDown), w = pa(o.onKeyUp);
  return {
    keyboardProps: o.isDisabled ? {} : {
      onKeyDown: d,
      onKeyUp: w
    }
  };
}
function qd(o, s) {
  Ql(() => {
    if (o && o.ref && s)
      return o.ref.current = s.current, () => {
        o.ref && (o.ref.current = null);
      };
  });
}
let bm = /* @__PURE__ */ me.createContext(null);
function xm(o) {
  let s = re.useContext(bm) || {};
  qd(s, o);
  let { ref: l, ...p } = s;
  return p;
}
function km(o, s) {
  let { focusProps: l } = Xd(o), { keyboardProps: p } = ym(o), d = Fr(l, p), w = xm(s), h = o.isDisabled ? {} : w, v = re.useRef(o.autoFocus);
  re.useEffect(() => {
    v.current && s.current && im(s.current), v.current = !1;
  }, [
    s
  ]);
  let f = o.excludeFromTabOrder ? -1 : 0;
  return o.isDisabled && (f = void 0), {
    focusableProps: Fr({
      ...d,
      tabIndex: f
    }, h)
  };
}
Nd();
const _m = me.useInsertionEffect ?? Ql;
function Fl(o) {
  const s = re.useRef(null);
  return _m(() => {
    s.current = o;
  }, [
    o
  ]), re.useCallback((...l) => {
    const p = s.current;
    return p == null ? void 0 : p(...l);
  }, []);
}
const Em = /* @__PURE__ */ new Set([
  "id"
]), Sm = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), Cm = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), Fm = /* @__PURE__ */ new Set([
  "dir",
  "lang",
  "hidden",
  "inert",
  "translate"
]), pd = /* @__PURE__ */ new Set([
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
]), Pm = /^(data-.*)$/;
function zm(o, s = {}) {
  let { labelable: l, isLink: p, global: d, events: w = d, propNames: h } = s, v = {};
  for (const f in o) Object.prototype.hasOwnProperty.call(o, f) && (Em.has(f) || l && Sm.has(f) || p && Cm.has(f) || d && Fm.has(f) || w && (pd.has(f) || f.endsWith("Capture") && pd.has(f.slice(0, -7))) || h != null && h.has(f) || Pm.test(f)) && (v[f] = o[f]);
  return v;
}
let rn = "default", Ul = "", va = /* @__PURE__ */ new WeakMap();
function $m(o) {
  if (Zl() && ka()) {
    if (rn === "default") {
      const s = We(o);
      Ul = s.documentElement.style.webkitUserSelect, s.documentElement.style.webkitUserSelect = "none";
    }
    rn = "disabled";
  } else if (o instanceof HTMLElement || o instanceof SVGElement) {
    let s = "userSelect" in o.style ? "userSelect" : "webkitUserSelect";
    va.set(o, o.style[s]), o.style[s] = "none";
  }
}
function hd(o) {
  if (Zl() && ka()) {
    if (rn !== "disabled") return;
    rn = "restoring", setTimeout(() => {
      Yd(() => {
        if (rn === "restoring") {
          const s = We(o);
          s.documentElement.style.webkitUserSelect === "none" && (s.documentElement.style.webkitUserSelect = Ul || ""), Ul = "", rn = "default";
        }
      });
    }, 300);
  } else if ((o instanceof HTMLElement || o instanceof SVGElement) && o && va.has(o)) {
    let s = va.get(o), l = "userSelect" in o.style ? "userSelect" : "webkitUserSelect";
    o.style[l] === "none" && (o.style[l] = s), o.getAttribute("style") === "" && o.removeAttribute("style"), va.delete(o);
  }
}
function Tm(o, s) {
  let l = gt(s), p = We(s);
  if (p == null || l == null) return;
  let d, w = `meta[name="${CSS.escape(o)}"], meta[property="${CSS.escape(o)}"]`, h = p.querySelector(w);
  return h && h instanceof l.HTMLMetaElement && (o === "csp-nonce" && h.nonce && (d ?? (d = h.nonce || void 0)), h.content && (d ?? (d = h.content || void 0))), o === "csp-nonce" && (d ?? (d = l.__webpack_nonce__ || globalThis.__webpack_nonce__ || void 0)), d;
}
let md = /* @__PURE__ */ new WeakMap();
function Am(o) {
  let s = We(o), l = md.get(s);
  return l ?? (l = Tm("csp-nonce", s)), l !== void 0 && md.set(s, l), l;
}
const Zd = me.createContext({
  register: () => {
  }
});
Zd.displayName = "PressResponderContext";
function Jd() {
  let o = re.useRef(/* @__PURE__ */ new Map()), s = re.useCallback((d, w, h, v) => {
    let f = v != null && v.once ? (...c) => {
      o.current.delete(h), h(...c);
    } : h;
    o.current.set(h, {
      type: w,
      eventTarget: d,
      fn: f,
      options: v
    }), d.addEventListener(w, f, v);
  }, []), l = re.useCallback((d, w, h, v) => {
    var c;
    let f = ((c = o.current.get(h)) == null ? void 0 : c.fn) || h;
    d.removeEventListener(w, f, v), o.current.delete(h);
  }, []), p = re.useCallback(() => {
    o.current.forEach((d, w) => {
      l(d.eventTarget, d.type, w, d.options);
    });
  }, [
    l
  ]);
  return re.useEffect(() => p, [
    p
  ]), {
    addGlobalListener: s,
    removeGlobalListener: l,
    removeAllGlobalListeners: p
  };
}
function Nm(o) {
  let s = re.useContext(Zd);
  if (s) {
    let { register: l, ref: p, ...d } = s;
    o = Fr(d, o), l();
  }
  return qd(s, o.ref), o;
}
var on;
class ha {
  constructor(s, l, p, d) {
    td(this, on);
    xl(this, on, !0);
    let w = (d == null ? void 0 : d.target) ?? p.currentTarget;
    const h = w == null ? void 0 : w.getBoundingClientRect();
    let v, f = 0, c, E = null;
    p.clientX != null && p.clientY != null && (c = p.clientX, E = p.clientY), h && (c != null && E != null ? (v = c - h.left, f = E - h.top) : (v = h.width / 2, f = h.height / 2)), this.type = s, this.pointerType = l, this.target = p.currentTarget, this.shiftKey = p.shiftKey, this.metaKey = p.metaKey, this.ctrlKey = p.ctrlKey, this.altKey = p.altKey, this.x = v, this.y = f, this.key = p.key;
  }
  continuePropagation() {
    xl(this, on, !1);
  }
  get shouldStopPropagation() {
    return ed(this, on);
  }
}
on = new WeakMap();
const gd = Symbol("linkClicked"), vd = "react-aria-pressable-style", wd = "data-react-aria-pressable";
function Lm(o) {
  let { onPress: s, onPressChange: l, onPressStart: p, onPressEnd: d, onPressUp: w, onClick: h, isDisabled: v, isPressed: f, preventFocusOnPress: c, shouldCancelOnPointerExit: E, allowTextSelectionOnPress: k, ref: g, ...S } = Nm(o), [I, b] = re.useState(!1), T = re.useRef({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: G, removeAllGlobalListeners: X } = Jd(), ne = re.useCallback((P, U) => {
    let H = T.current;
    if (v || H.didFirePressStart) return !1;
    let L = !0;
    if (H.isTriggeringEvent = !0, p) {
      let N = new ha("pressstart", U, P);
      p(N), L = N.shouldStopPropagation;
    }
    return l && l(!0), H.isTriggeringEvent = !1, H.didFirePressStart = !0, b(!0), L;
  }, [
    v,
    p,
    l
  ]), ee = re.useCallback((P, U, H = !0) => {
    let L = T.current;
    if (!L.didFirePressStart) return !1;
    L.didFirePressStart = !1, L.isTriggeringEvent = !0;
    let N = !0;
    if (d) {
      let $ = new ha("pressend", U, P);
      d($), N = $.shouldStopPropagation;
    }
    if (l && l(!1), b(!1), s && H && !v) {
      let $ = new ha("press", U, P);
      s($), N && (N = $.shouldStopPropagation);
    }
    return L.isTriggeringEvent = !1, N;
  }, [
    v,
    d,
    l,
    s
  ]), we = Fl(ee), _e = re.useCallback((P, U) => {
    let H = T.current;
    if (v) return !1;
    if (w) {
      H.isTriggeringEvent = !0;
      let L = new ha("pressup", U, P);
      return w(L), H.isTriggeringEvent = !1, L.shouldStopPropagation;
    }
    return !0;
  }, [
    v,
    w
  ]), fe = Fl(_e), Ee = re.useCallback((P) => {
    let U = T.current;
    if (U.isPressed && U.target) {
      U.didFirePressStart && U.pointerType != null && ee(kr(U.target, P), U.pointerType, !1), U.isPressed = !1, U.isOverTarget = !1, U.activePointerId = null, U.pointerType = null, X(), k || hd(U.target);
      for (let H of U.disposables) H();
      U.disposables = [];
    }
  }, [
    k,
    X,
    ee
  ]), $e = Fl(Ee);
  re.useEffect(() => {
    v && T.current.isPressed && $e({
      currentTarget: T.current.target,
      shiftKey: !1,
      ctrlKey: !1,
      metaKey: !1,
      altKey: !1
    });
  }, [
    v
  ]);
  let Ie = re.useCallback((P) => {
    E && Ee(P);
  }, [
    E,
    Ee
  ]), Ve = re.useCallback((P) => {
    v || h == null || h(P);
  }, [
    v,
    h
  ]), V = re.useCallback((P, U) => {
    if (!v && h) {
      let H = new MouseEvent("click", P);
      Dd(H, U), h(Gl(H));
    }
  }, [
    v,
    h
  ]), J = re.useMemo(() => {
    let P = T.current, U = {
      onKeyDown(L) {
        var N;
        if (Pl(L.nativeEvent, L.currentTarget) && Ue(L.currentTarget, ge(L))) {
          yd(ge(L), L.key) && L.preventDefault();
          let $ = !0;
          !P.isPressed && !L.repeat && (P.target = L.currentTarget, P.isPressed = !0, P.pointerType = "keyboard", $ = ne(L, "keyboard"));
          let M = L.currentTarget, x = (A) => {
            Pl(A, M) && !A.repeat && Ue(M, ge(A)) && P.target && fe(kr(P.target, A), "keyboard");
          };
          G(We(L.currentTarget), "keyup", Ea(x, H), !0), $ && L.stopPropagation(), L.metaKey && Er() && ((N = P.metaKeyEvents) == null || N.set(L.key, L.nativeEvent));
        } else L.key === "Meta" && (P.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(L) {
        if (!(L && !Ue(L.currentTarget, ge(L))) && L && L.button === 0 && !P.isTriggeringEvent && !Sr.isOpening) {
          let N = !0;
          if (v && L.preventDefault(), !P.ignoreEmulatedMouseEvents && !P.isPressed && (P.pointerType === "virtual" || Ud(L.nativeEvent))) {
            let $ = ne(L, "virtual"), M = fe(L, "virtual"), x = we(L, "virtual");
            Ve(L), N = $ && M && x;
          } else if (P.isPressed && P.pointerType !== "keyboard") {
            let $ = P.pointerType || L.nativeEvent.pointerType || "virtual", M = fe(kr(L.currentTarget, L), $), x = we(kr(L.currentTarget, L), $, !0);
            N = M && x, P.isOverTarget = !1, Ve(L), $e(L);
          }
          P.ignoreEmulatedMouseEvents = !1, N && L.stopPropagation();
        }
      }
    }, H = (L) => {
      var N, $, M;
      if (P.isPressed && P.target && Pl(L, P.target)) {
        yd(ge(L), L.key) && L.preventDefault();
        let x = ge(L), A = Ue(P.target, x);
        we(kr(P.target, L), "keyboard", A), A && V(L, P.target), X(), L.key !== "Enter" && ts(P.target) && Ue(P.target, x) && !L[gd] && (L[gd] = !0, Sr(P.target, L, !1)), P.isPressed = !1, (N = P.metaKeyEvents) == null || N.delete(L.key);
      } else if (L.key === "Meta" && (($ = P.metaKeyEvents) != null && $.size)) {
        let x = P.metaKeyEvents;
        P.metaKeyEvents = void 0;
        for (let A of x.values()) (M = P.target) == null || M.dispatchEvent(new KeyboardEvent("keyup", A));
      }
    };
    if (typeof PointerEvent < "u") {
      U.onPointerDown = ($) => {
        if ($.button !== 0 || !Ue($.currentTarget, ge($))) return;
        if (qh($.nativeEvent)) {
          P.pointerType = "virtual";
          return;
        }
        P.pointerType = $.pointerType;
        let M = !0;
        if (!P.isPressed) {
          P.isPressed = !0, P.isOverTarget = !0, P.activePointerId = $.pointerId, P.target = $.currentTarget, k || $m(P.target), M = ne($, P.pointerType);
          let x = ge($);
          "releasePointerCapture" in x && ("hasPointerCapture" in x ? x.hasPointerCapture($.pointerId) && x.releasePointerCapture($.pointerId) : x.releasePointerCapture($.pointerId)), G(We($.currentTarget), "pointerup", L, !1), G(We($.currentTarget), "pointercancel", N, !1);
        }
        M && $.stopPropagation();
      }, U.onMouseDown = ($) => {
        if (Ue($.currentTarget, ge($)) && $.button === 0) {
          if (c) {
            let M = Kh($.target);
            M && P.disposables.push(M);
          }
          $.stopPropagation();
        }
      }, U.onPointerUp = ($) => {
        !Ue($.currentTarget, ge($)) || P.pointerType === "virtual" || $.button === 0 && !P.isPressed && fe($, P.pointerType || $.pointerType);
      }, U.onPointerEnter = ($) => {
        $.pointerId === P.activePointerId && P.target && !P.isOverTarget && P.pointerType != null && (P.isOverTarget = !0, ne(kr(P.target, $), P.pointerType));
      }, U.onPointerLeave = ($) => {
        $.pointerId === P.activePointerId && P.target && P.isOverTarget && P.pointerType != null && (P.isOverTarget = !1, we(kr(P.target, $), P.pointerType, !1), Ie($));
      };
      let L = ($) => {
        if ($.pointerId === P.activePointerId && P.isPressed && $.button === 0 && P.target) {
          if (Ue(P.target, ge($)) && P.pointerType != null) {
            let M = !1, x = setTimeout(() => {
              P.isPressed && P.target instanceof HTMLElement && (M ? $e($) : (an(P.target), P.target.click()));
            }, 80);
            G($.currentTarget, "click", () => M = !0, !0), P.disposables.push(() => clearTimeout(x));
          } else $e($);
          P.isOverTarget = !1;
        }
      }, N = ($) => {
        $e($);
      };
      U.onDragStart = ($) => {
        Ue($.currentTarget, ge($)) && $e($);
      };
    }
    return U;
  }, [
    G,
    v,
    c,
    X,
    k,
    Ie,
    ne,
    Ve,
    V
  ]);
  return re.useEffect(() => {
    if (!g) return;
    const P = We(g.current);
    if (!P || !P.head || P.getElementById(vd)) return;
    const U = P.createElement("style");
    U.id = vd;
    let H = Am(P);
    H && (U.nonce = H), U.textContent = `
@layer {
  [${wd}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), P.head.prepend(U);
  }, [
    g
  ]), re.useEffect(() => {
    let P = T.current;
    return () => {
      k || hd(P.target ?? void 0);
      for (let U of P.disposables) U();
      P.disposables = [];
    };
  }, [
    k
  ]), {
    isPressed: f || I,
    // oxlint-disable-next-line react/react-compiler
    pressProps: Fr(S, J, {
      [wd]: !0
    })
  };
}
function ts(o) {
  return o.tagName === "A" && o.hasAttribute("href");
}
function Pl(o, s) {
  const { key: l, code: p } = o, d = s, w = d.getAttribute("role");
  return (l === "Enter" || l === " " || l === "Spacebar" || p === "Space") && !(d instanceof gt(d).HTMLInputElement && !ef(d, l) || d instanceof gt(d).HTMLTextAreaElement || d.isContentEditable) && // Links should only trigger with Enter key
  !((w === "link" || !w && ts(d)) && l !== "Enter");
}
function kr(o, s) {
  let l = s.clientX, p = s.clientY;
  return {
    currentTarget: o,
    shiftKey: s.shiftKey,
    ctrlKey: s.ctrlKey,
    metaKey: s.metaKey,
    altKey: s.altKey,
    clientX: l,
    clientY: p,
    key: s.key
  };
}
function Mm(o) {
  return o instanceof HTMLInputElement ? !1 : o instanceof HTMLButtonElement ? o.type !== "submit" && o.type !== "reset" : !ts(o);
}
function yd(o, s) {
  return Er() && s === "Enter" ? !1 : o instanceof HTMLInputElement ? s === "Enter" && (o.type === "checkbox" || o.type === "radio") ? !1 : !ef(o, s) : Mm(o);
}
const Rm = /* @__PURE__ */ new Set([
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
function ef(o, s) {
  return o.type === "checkbox" || o.type === "radio" ? s === " " : Rm.has(o.type);
}
function Im(o, s) {
  let { elementType: l = "button", isDisabled: p, onPress: d, onPressStart: w, onPressEnd: h, onPressUp: v, onPressChange: f, preventFocusOnPress: c, allowFocusWhenDisabled: E, onClick: k, href: g, target: S, rel: I, type: b = "button" } = o, T;
  l === "button" ? T = {
    type: b,
    disabled: p,
    form: o.form,
    formAction: o.formAction,
    formEncType: o.formEncType,
    formMethod: o.formMethod,
    formNoValidate: o.formNoValidate,
    formTarget: o.formTarget,
    name: o.name,
    value: o.value
  } : T = {
    role: "button",
    href: l === "a" && !p ? g : void 0,
    target: l === "a" ? S : void 0,
    type: l === "input" ? b : void 0,
    disabled: l === "input" ? p : void 0,
    "aria-disabled": !p || l === "input" ? void 0 : p,
    rel: l === "a" ? I : void 0
  };
  let { pressProps: G, isPressed: X } = Lm({
    onPressStart: w,
    onPressEnd: h,
    onPressChange: f,
    onPress: d,
    onPressUp: v,
    onClick: k,
    isDisabled: p,
    preventFocusOnPress: c,
    ref: s
  }), { focusableProps: ne } = km(o, s);
  E && (ne.tabIndex = p ? -1 : ne.tabIndex);
  let ee = Fr(ne, G, zm(o, {
    labelable: !0
  }));
  return {
    isPressed: X,
    buttonProps: Fr(T, ee, {
      "aria-haspopup": o["aria-haspopup"],
      "aria-expanded": o["aria-expanded"],
      "aria-controls": o["aria-controls"],
      "aria-pressed": o["aria-pressed"],
      "aria-current": o["aria-current"],
      "aria-disabled": o["aria-disabled"]
    })
  };
}
function Dm(o) {
  let { isDisabled: s, onBlurWithin: l, onFocusWithin: p, onFocusWithinChange: d } = o, w = re.useRef({
    isFocusWithin: !1
  }), { addGlobalListener: h, removeAllGlobalListeners: v } = Jd(), f = re.useCallback((k) => {
    Ue(k.currentTarget, ge(k)) && w.current.isFocusWithin && !Ue(k.currentTarget, k.relatedTarget) && (w.current.isFocusWithin = !1, v(), l && l(k), d && d(!1));
  }, [
    l,
    d,
    w,
    v
  ]), c = Od(f), E = re.useCallback((k) => {
    if (!Ue(k.currentTarget, ge(k))) return;
    let g = ge(k);
    const S = We(g), I = Ut(S);
    if (!w.current.isFocusWithin && I === g) {
      p && p(k), d && d(!0), w.current.isFocusWithin = !0, c(k);
      let b = k.currentTarget;
      h(S, "focus", (T) => {
        let G = ge(T);
        if (w.current.isFocusWithin && !Ue(b, G)) {
          let X = new S.defaultView.FocusEvent("blur", {
            relatedTarget: G
          });
          Dd(X, b);
          let ne = Gl(X);
          f(ne);
        }
      }, {
        capture: !0
      });
    }
  }, [
    p,
    d,
    c,
    h,
    f
  ]);
  return s ? {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: E,
      onBlur: f
    }
  };
}
function Om(o = {}) {
  let { autoFocus: s = !1, isTextInput: l, within: p } = o, d = re.useRef({
    isFocused: !1,
    isFocusVisible: s || Dl()
  }), [w, h] = re.useState(!1), [v, f] = re.useState(
    // oxlint-disable-next-line react/react-compiler
    () => d.current.isFocused && d.current.isFocusVisible
  ), c = re.useCallback(() => f(d.current.isFocused && d.current.isFocusVisible), []), E = re.useCallback((S) => {
    d.current.isFocused = S, d.current.isFocusVisible = Dl(), h(S), c();
  }, [
    c
  ]);
  om((S) => {
    d.current.isFocusVisible = S, c();
  }, [
    l,
    w
  ], {
    enabled: w,
    isTextInput: l
  });
  let { focusProps: k } = Xd({
    isDisabled: p,
    onFocusChange: E
  }), { focusWithinProps: g } = Dm({
    isDisabled: !p,
    onFocusWithinChange: E
  });
  return {
    isFocused: w,
    isFocusVisible: v,
    focusProps: p ? g : k
  };
}
function jm(o) {
  let { children: s, focusClass: l, focusRingClass: p } = o, { isFocused: d, isFocusVisible: w, focusProps: h } = Om(o), v = me.Children.only(s);
  return /* @__PURE__ */ me.cloneElement(v, Fr(v.props, {
    ...h,
    className: es({
      [l || ""]: d,
      [p || ""]: w
    })
  }));
}
const Um = (o) => Fe.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...o, children: Fe.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 11H20V13H4V11Z" }) });
var bd = (o) => typeof o == "boolean" ? `${o}` : o === 0 ? "0" : o, ot = (o) => !o || typeof o != "object" || Object.keys(o).length === 0, Vm = (o, s) => JSON.stringify(o) === JSON.stringify(s);
function tf(o, s) {
  o.forEach(function(l) {
    Array.isArray(l) ? tf(l, s) : s.push(l);
  });
}
function rf(o) {
  let s = [];
  return tf(o, s), s;
}
var nf = (...o) => rf(o).filter(Boolean), of = (o, s) => {
  let l = {}, p = Object.keys(o), d = Object.keys(s);
  for (let w of p) if (d.includes(w)) {
    let h = o[w], v = s[w];
    typeof h == "object" && typeof v == "object" ? l[w] = of(h, v) : Array.isArray(h) || Array.isArray(v) ? l[w] = nf(v, h) : l[w] = v + " " + h;
  } else l[w] = o[w];
  for (let w of d) p.includes(w) || (l[w] = s[w]);
  return l;
}, xd = (o) => !o || typeof o != "string" ? o : o.replace(/\s+/g, " ").trim();
const rs = "-", Bm = (o) => {
  const s = Wm(o), {
    conflictingClassGroups: l,
    conflictingClassGroupModifiers: p
  } = o;
  return {
    getClassGroupId: (h) => {
      const v = h.split(rs);
      return v[0] === "" && v.length !== 1 && v.shift(), af(v, s) || Hm(h);
    },
    getConflictingClassGroupIds: (h, v) => {
      const f = l[h] || [];
      return v && p[h] ? [...f, ...p[h]] : f;
    }
  };
}, af = (o, s) => {
  var h;
  if (o.length === 0)
    return s.classGroupId;
  const l = o[0], p = s.nextPart.get(l), d = p ? af(o.slice(1), p) : void 0;
  if (d)
    return d;
  if (s.validators.length === 0)
    return;
  const w = o.join(rs);
  return (h = s.validators.find(({
    validator: v
  }) => v(w))) == null ? void 0 : h.classGroupId;
}, kd = /^\[(.+)\]$/, Hm = (o) => {
  if (kd.test(o)) {
    const s = kd.exec(o)[1], l = s == null ? void 0 : s.substring(0, s.indexOf(":"));
    if (l)
      return "arbitrary.." + l;
  }
}, Wm = (o) => {
  const {
    theme: s,
    prefix: l
  } = o, p = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Km(Object.entries(o.classGroups), l).forEach(([w, h]) => {
    Vl(h, p, w, s);
  }), p;
}, Vl = (o, s, l, p) => {
  o.forEach((d) => {
    if (typeof d == "string") {
      const w = d === "" ? s : _d(s, d);
      w.classGroupId = l;
      return;
    }
    if (typeof d == "function") {
      if (Ym(d)) {
        Vl(d(p), s, l, p);
        return;
      }
      s.validators.push({
        validator: d,
        classGroupId: l
      });
      return;
    }
    Object.entries(d).forEach(([w, h]) => {
      Vl(h, _d(s, w), l, p);
    });
  });
}, _d = (o, s) => {
  let l = o;
  return s.split(rs).forEach((p) => {
    l.nextPart.has(p) || l.nextPart.set(p, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), l = l.nextPart.get(p);
  }), l;
}, Ym = (o) => o.isThemeGetter, Km = (o, s) => s ? o.map(([l, p]) => {
  const d = p.map((w) => typeof w == "string" ? s + w : typeof w == "object" ? Object.fromEntries(Object.entries(w).map(([h, v]) => [s + h, v])) : w);
  return [l, d];
}) : o, Xm = (o) => {
  if (o < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let s = 0, l = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map();
  const d = (w, h) => {
    l.set(w, h), s++, s > o && (s = 0, p = l, l = /* @__PURE__ */ new Map());
  };
  return {
    get(w) {
      let h = l.get(w);
      if (h !== void 0)
        return h;
      if ((h = p.get(w)) !== void 0)
        return d(w, h), h;
    },
    set(w, h) {
      l.has(w) ? l.set(w, h) : d(w, h);
    }
  };
}, lf = "!", Qm = (o) => {
  const {
    separator: s,
    experimentalParseClassName: l
  } = o, p = s.length === 1, d = s[0], w = s.length, h = (v) => {
    const f = [];
    let c = 0, E = 0, k;
    for (let T = 0; T < v.length; T++) {
      let G = v[T];
      if (c === 0) {
        if (G === d && (p || v.slice(T, T + w) === s)) {
          f.push(v.slice(E, T)), E = T + w;
          continue;
        }
        if (G === "/") {
          k = T;
          continue;
        }
      }
      G === "[" ? c++ : G === "]" && c--;
    }
    const g = f.length === 0 ? v : v.substring(E), S = g.startsWith(lf), I = S ? g.substring(1) : g, b = k && k > E ? k - E : void 0;
    return {
      modifiers: f,
      hasImportantModifier: S,
      baseClassName: I,
      maybePostfixModifierPosition: b
    };
  };
  return l ? (v) => l({
    className: v,
    parseClassName: h
  }) : h;
}, Gm = (o) => {
  if (o.length <= 1)
    return o;
  const s = [];
  let l = [];
  return o.forEach((p) => {
    p[0] === "[" ? (s.push(...l.sort(), p), l = []) : l.push(p);
  }), s.push(...l.sort()), s;
}, qm = (o) => ({
  cache: Xm(o.cacheSize),
  parseClassName: Qm(o),
  ...Bm(o)
}), Zm = /\s+/, Jm = (o, s) => {
  const {
    parseClassName: l,
    getClassGroupId: p,
    getConflictingClassGroupIds: d
  } = s, w = [], h = o.trim().split(Zm);
  let v = "";
  for (let f = h.length - 1; f >= 0; f -= 1) {
    const c = h[f], {
      modifiers: E,
      hasImportantModifier: k,
      baseClassName: g,
      maybePostfixModifierPosition: S
    } = l(c);
    let I = !!S, b = p(I ? g.substring(0, S) : g);
    if (!b) {
      if (!I) {
        v = c + (v.length > 0 ? " " + v : v);
        continue;
      }
      if (b = p(g), !b) {
        v = c + (v.length > 0 ? " " + v : v);
        continue;
      }
      I = !1;
    }
    const T = Gm(E).join(":"), G = k ? T + lf : T, X = G + b;
    if (w.includes(X))
      continue;
    w.push(X);
    const ne = d(b, I);
    for (let ee = 0; ee < ne.length; ++ee) {
      const we = ne[ee];
      w.push(G + we);
    }
    v = c + (v.length > 0 ? " " + v : v);
  }
  return v;
};
function eg() {
  let o = 0, s, l, p = "";
  for (; o < arguments.length; )
    (s = arguments[o++]) && (l = sf(s)) && (p && (p += " "), p += l);
  return p;
}
const sf = (o) => {
  if (typeof o == "string")
    return o;
  let s, l = "";
  for (let p = 0; p < o.length; p++)
    o[p] && (s = sf(o[p])) && (l && (l += " "), l += s);
  return l;
};
function Bl(o, ...s) {
  let l, p, d, w = h;
  function h(f) {
    const c = s.reduce((E, k) => k(E), o());
    return l = qm(c), p = l.cache.get, d = l.cache.set, w = v, v(f);
  }
  function v(f) {
    const c = p(f);
    if (c)
      return c;
    const E = Jm(f, l);
    return d(f, E), E;
  }
  return function() {
    return w(eg.apply(null, arguments));
  };
}
const ke = (o) => {
  const s = (l) => l[o] || [];
  return s.isThemeGetter = !0, s;
}, uf = /^\[(?:([a-z-]+):)?(.+)\]$/i, tg = /^\d+\/\d+$/, rg = /* @__PURE__ */ new Set(["px", "full", "screen"]), ng = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, og = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ag = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ig = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, lg = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, zt = (o) => _r(o) || rg.has(o) || tg.test(o), Dt = (o) => sn(o, "length", cg), _r = (o) => !!o && !Number.isNaN(Number(o)), wa = (o) => sn(o, "number", _r), en = (o) => !!o && Number.isInteger(Number(o)), cf = (o) => o.endsWith("%") && _r(o.slice(0, -1)), oe = (o) => uf.test(o), Ot = (o) => ng.test(o), sg = /* @__PURE__ */ new Set(["length", "size", "percentage"]), df = (o) => sn(o, sg, mf), ff = (o) => sn(o, "position", mf), ug = /* @__PURE__ */ new Set(["image", "url"]), pf = (o) => sn(o, ug, fg), hf = (o) => sn(o, "", dg), tn = () => !0, sn = (o, s, l) => {
  const p = uf.exec(o);
  return p ? p[1] ? typeof s == "string" ? p[1] === s : s.has(p[1]) : l(p[2]) : !1;
}, cg = (o) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  og.test(o) && !ag.test(o)
), mf = () => !1, dg = (o) => ig.test(o), fg = (o) => lg.test(o), pg = /* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isAny: tn,
  isArbitraryImage: pf,
  isArbitraryLength: Dt,
  isArbitraryNumber: wa,
  isArbitraryPosition: ff,
  isArbitraryShadow: hf,
  isArbitrarySize: df,
  isArbitraryValue: oe,
  isInteger: en,
  isLength: zt,
  isNumber: _r,
  isPercent: cf,
  isTshirtSize: Ot
}, Symbol.toStringTag, {
  value: "Module"
}), Hl = () => {
  const o = ke("colors"), s = ke("spacing"), l = ke("blur"), p = ke("brightness"), d = ke("borderColor"), w = ke("borderRadius"), h = ke("borderSpacing"), v = ke("borderWidth"), f = ke("contrast"), c = ke("grayscale"), E = ke("hueRotate"), k = ke("invert"), g = ke("gap"), S = ke("gradientColorStops"), I = ke("gradientColorStopPositions"), b = ke("inset"), T = ke("margin"), G = ke("opacity"), X = ke("padding"), ne = ke("saturate"), ee = ke("scale"), we = ke("sepia"), _e = ke("skew"), fe = ke("space"), Ee = ke("translate"), $e = () => ["auto", "contain", "none"], Ie = () => ["auto", "hidden", "clip", "visible", "scroll"], Ve = () => ["auto", oe, s], V = () => [oe, s], J = () => ["", zt, Dt], P = () => ["auto", _r, oe], U = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], H = () => ["solid", "dashed", "dotted", "double", "none"], L = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], N = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], $ = () => ["", "0", oe], M = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], x = () => [_r, oe];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [tn],
      spacing: [zt, Dt],
      blur: ["none", "", Ot, oe],
      brightness: x(),
      borderColor: [o],
      borderRadius: ["none", "", "full", Ot, oe],
      borderSpacing: V(),
      borderWidth: J(),
      contrast: x(),
      grayscale: $(),
      hueRotate: x(),
      invert: $(),
      gap: V(),
      gradientColorStops: [o],
      gradientColorStopPositions: [cf, Dt],
      inset: Ve(),
      margin: Ve(),
      opacity: x(),
      padding: V(),
      saturate: x(),
      scale: x(),
      sepia: $(),
      skew: x(),
      space: V(),
      translate: V()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", oe]
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
        columns: [Ot]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": M()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": M()
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
        object: [...U(), oe]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Ie()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Ie()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Ie()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: $e()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": $e()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": $e()
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
        inset: [b]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [b]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [b]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [b]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [b]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [b]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [b]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [b]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [b]
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
        z: ["auto", en, oe]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: Ve()
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
        flex: ["1", "auto", "initial", "none", oe]
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
        order: ["first", "last", "none", en, oe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [tn]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", en, oe]
        }, oe]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": P()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": P()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [tn]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [en, oe]
        }, oe]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": P()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": P()
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
        "auto-cols": ["auto", "min", "max", "fr", oe]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", oe]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [g]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [g]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [g]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...N()]
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
        content: ["normal", ...N(), "baseline"]
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
        "place-content": [...N(), "baseline"]
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
        p: [X]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [X]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [X]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [X]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [X]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [X]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [X]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [X]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [X]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [T]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [T]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [T]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [T]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [T]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [T]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [T]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [T]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [T]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [fe]
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
        "space-y": [fe]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", oe, s]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [oe, s, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [oe, s, "none", "full", "min", "max", "fit", "prose", {
          screen: [Ot]
        }, Ot]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [oe, s, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [oe, s, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [oe, s, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [oe, s, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Ot, Dt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", wa]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [tn]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", oe]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", _r, wa]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", zt, oe]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", oe]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", oe]
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
        placeholder: [o]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [G]
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
        text: [o]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [G]
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
        decoration: [...H(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", zt, Dt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", zt, oe]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [o]
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
        indent: V()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", oe]
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
        content: ["none", oe]
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
        "bg-opacity": [G]
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
        bg: [...U(), ff]
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
        bg: ["auto", "cover", "contain", df]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, pf]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [o]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [I]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [I]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [I]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [S]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [S]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [S]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [w]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [w]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [w]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [w]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [w]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [w]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [w]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [w]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [w]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [w]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [w]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [w]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [w]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [w]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [w]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [v]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [v]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [v]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [v]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [v]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [v]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [v]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [v]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [v]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [G]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...H(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [v]
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
        "divide-y": [v]
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
        "divide-opacity": [G]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: H()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [d]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [d]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [d]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [d]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [d]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [d]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [d]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [d]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [d]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [d]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...H()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [zt, oe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [zt, Dt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [o]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: J()
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
        ring: [o]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [G]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [zt, Dt]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [o]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Ot, hf]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [tn]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [G]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...L(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": L()
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
        blur: [l]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [p]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [f]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Ot, oe]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [c]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [E]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [k]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ne]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [we]
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
        "backdrop-blur": [l]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [p]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [f]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [c]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [E]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [k]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [G]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ne]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [we]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", oe]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: x()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", oe]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: x()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", oe]
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
        scale: [ee]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [ee]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [ee]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [en, oe]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [Ee]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [Ee]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [_e]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [_e]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", oe]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", o]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", oe]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [o]
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
        "scroll-m": V()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": V()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": V()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": V()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": V()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": V()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": V()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": V()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": V()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": V()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": V()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": V()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": V()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": V()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": V()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": V()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": V()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": V()
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
        "will-change": ["auto", "scroll", "contents", "transform", oe]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [o, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [zt, Dt, wa]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [o, "none"]
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
}, hg = (o, {
  cacheSize: s,
  prefix: l,
  separator: p,
  experimentalParseClassName: d,
  extend: w = {},
  override: h = {}
}) => {
  Gn(o, "cacheSize", s), Gn(o, "prefix", l), Gn(o, "separator", p), Gn(o, "experimentalParseClassName", d);
  for (const v in h)
    mg(o[v], h[v]);
  for (const v in w)
    gg(o[v], w[v]);
  return o;
}, Gn = (o, s, l) => {
  l !== void 0 && (o[s] = l);
}, mg = (o, s) => {
  if (s)
    for (const l in s)
      Gn(o, l, s[l]);
}, gg = (o, s) => {
  if (s)
    for (const l in s) {
      const p = s[l];
      p !== void 0 && (o[l] = (o[l] || []).concat(p));
    }
}, gf = (o, ...s) => typeof o == "function" ? Bl(Hl, o, ...s) : Bl(() => hg(Hl(), o), ...s), vg = /* @__PURE__ */ Bl(Hl);
var wg = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, vf = (o) => o || void 0, Zn = (...o) => vf(rf(o).filter(Boolean).join(" ")), zl = null, jt = {}, Wl = !1, Qn = (...o) => (s) => s.twMerge ? ((!zl || Wl) && (Wl = !1, zl = ot(jt) ? vg : gf({ ...jt, extend: { theme: jt.theme, classGroups: jt.classGroups, conflictingClassGroupModifiers: jt.conflictingClassGroupModifiers, conflictingClassGroups: jt.conflictingClassGroups, ...jt.extend } })), vf(zl(Zn(o)))) : Zn(o), Ed = (o, s) => {
  for (let l in s) o.hasOwnProperty(l) ? o[l] = Zn(o[l], s[l]) : o[l] = s[l];
  return o;
}, Jn = (o, s) => {
  let { extend: l = null, slots: p = {}, variants: d = {}, compoundVariants: w = [], compoundSlots: h = [], defaultVariants: v = {} } = o, f = { ...wg, ...s }, c = l != null && l.base ? Zn(l.base, o == null ? void 0 : o.base) : o == null ? void 0 : o.base, E = l != null && l.variants && !ot(l.variants) ? of(d, l.variants) : d, k = l != null && l.defaultVariants && !ot(l.defaultVariants) ? { ...l.defaultVariants, ...v } : v;
  !ot(f.twMergeConfig) && !Vm(f.twMergeConfig, jt) && (Wl = !0, jt = f.twMergeConfig);
  let g = ot(l == null ? void 0 : l.slots), S = ot(p) ? {} : { base: Zn(o == null ? void 0 : o.base, g && (l == null ? void 0 : l.base)), ...p }, I = g ? S : Ed({ ...l == null ? void 0 : l.slots }, ot(S) ? { base: o == null ? void 0 : o.base } : S), b = ot(l == null ? void 0 : l.compoundVariants) ? w : nf(l == null ? void 0 : l.compoundVariants, w), T = (X) => {
    if (ot(E) && ot(p) && g) return Qn(c, X == null ? void 0 : X.class, X == null ? void 0 : X.className)(f);
    if (b && !Array.isArray(b)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof b}`);
    if (h && !Array.isArray(h)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof h}`);
    let ne = (V, J, P = [], U) => {
      let H = P;
      if (typeof J == "string") H = H.concat(xd(J).split(" ").map((L) => `${V}:${L}`));
      else if (Array.isArray(J)) H = H.concat(J.reduce((L, N) => L.concat(`${V}:${N}`), []));
      else if (typeof J == "object" && typeof U == "string") {
        for (let L in J) if (J.hasOwnProperty(L) && L === U) {
          let N = J[L];
          if (N && typeof N == "string") {
            let $ = xd(N);
            H[U] ? H[U] = H[U].concat($.split(" ").map((M) => `${V}:${M}`)) : H[U] = $.split(" ").map((M) => `${V}:${M}`);
          } else Array.isArray(N) && N.length > 0 && (H[U] = N.reduce(($, M) => $.concat(`${V}:${M}`), []));
        }
      }
      return H;
    }, ee = (V, J = E, P = null, U = null) => {
      var H;
      let L = J[V];
      if (!L || ot(L)) return null;
      let N = (H = U == null ? void 0 : U[V]) != null ? H : X == null ? void 0 : X[V];
      if (N === null) return null;
      let $ = bd(N), M = Array.isArray(f.responsiveVariants) && f.responsiveVariants.length > 0 || f.responsiveVariants === !0, x = k == null ? void 0 : k[V], A = [];
      if (typeof $ == "object" && M) for (let [se, ue] of Object.entries($)) {
        let ve = L[ue];
        if (se === "initial") {
          x = ue;
          continue;
        }
        Array.isArray(f.responsiveVariants) && !f.responsiveVariants.includes(se) || (A = ne(se, ve, A, P));
      }
      let ae = $ != null && typeof $ != "object" ? $ : bd(x), ie = L[ae || "false"];
      return typeof A == "object" && typeof P == "string" && A[P] ? Ed(A, ie) : A.length > 0 ? (A.push(ie), A) : ie;
    }, we = () => E ? Object.keys(E).map((V) => ee(V, E)) : null, _e = (V, J) => {
      if (!E || typeof E != "object") return null;
      let P = new Array();
      for (let U in E) {
        let H = ee(U, E, V, J), L = V === "base" && typeof H == "string" ? H : H && H[V];
        L && (P[P.length] = L);
      }
      return P;
    }, fe = {};
    for (let V in X) X[V] !== void 0 && (fe[V] = X[V]);
    let Ee = (V, J) => {
      var P;
      let U = typeof (X == null ? void 0 : X[V]) == "object" ? { [V]: (P = X[V]) == null ? void 0 : P.initial } : {};
      return { ...k, ...fe, ...U, ...J };
    }, $e = (V = [], J) => {
      let P = [];
      for (let { class: U, className: H, ...L } of V) {
        let N = !0;
        for (let [$, M] of Object.entries(L)) {
          let x = Ee($, J);
          if (Array.isArray(M)) {
            if (!M.includes(x[$])) {
              N = !1;
              break;
            }
          } else if (x[$] !== M) {
            N = !1;
            break;
          }
        }
        N && (U && P.push(U), H && P.push(H));
      }
      return P;
    }, Ie = (V) => {
      let J = $e(b, V);
      if (!Array.isArray(J)) return J;
      let P = {};
      for (let U of J) if (typeof U == "string" && (P.base = Qn(P.base, U)(f)), typeof U == "object") for (let [H, L] of Object.entries(U)) P[H] = Qn(P[H], L)(f);
      return P;
    }, Ve = (V) => {
      if (h.length < 1) return null;
      let J = {};
      for (let { slots: P = [], class: U, className: H, ...L } of h) {
        if (!ot(L)) {
          let N = !0;
          for (let $ of Object.keys(L)) {
            let M = Ee($, V)[$];
            if (M === void 0 || (Array.isArray(L[$]) ? !L[$].includes(M) : L[$] !== M)) {
              N = !1;
              break;
            }
          }
          if (!N) continue;
        }
        for (let N of P) J[N] = J[N] || [], J[N].push([U, H]);
      }
      return J;
    };
    if (!ot(p) || !g) {
      let V = {};
      if (typeof I == "object" && !ot(I)) for (let J of Object.keys(I)) V[J] = (P) => {
        var U, H;
        return Qn(I[J], _e(J, P), ((U = Ie(P)) != null ? U : [])[J], ((H = Ve(P)) != null ? H : [])[J], P == null ? void 0 : P.class, P == null ? void 0 : P.className)(f);
      };
      return V;
    }
    return Qn(c, we(), $e(b), X == null ? void 0 : X.class, X == null ? void 0 : X.className)(f);
  }, G = () => {
    if (!(!E || typeof E != "object")) return Object.keys(E);
  };
  return T.variantKeys = G(), T.extend = l, T.base = c, T.slots = I, T.variants = E, T.defaultVariants = k, T.compoundSlots = h, T.compoundVariants = b, T;
};
const wf = {
  large: "w-8 h-8",
  medium: "w-6 h-6",
  small: "w-5 h-5",
  undefined: "",
  "x-small": "w-4 h-4",
  "xx-small": "w-3.5 h-3.5"
}, yf = Jn({
  base: "inline-flex items-center justify-center p-0 m-0",
  variants: {
    size: wf
  }
}), bf = Jn({
  variants: {
    size: wf
  }
}), xf = Jn({
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
});
Jn({
  base: "outline outline-offset-0 outline-interactive-highlight outline-2"
});
const yg = ({ children: o, containerClassName: s, emphasis: l, shape: p, size: d }) => {
  const w = typeof d == "number", h = w ? {
    height: d,
    padding: d / 2,
    width: d
  } : void 0, v = w ? void 0 : d;
  return Fe.jsx("div", { className: xf({
    class: s,
    emphasis: l,
    shape: p,
    size: v
  }), "data-testid": "@paloma-icons-contained-id", style: h, children: o });
}, bg = ({ "aria-label": o, className: s, color: l, contained: p, containerClassName: d, emphasis: w = "regular", shape: h = "circle", size: v = "medium", svgClassName: f, ...c }) => {
  const E = !o, k = typeof v == "number", g = k ? { height: v, width: v } : void 0, S = k ? void 0 : v, I = p ? yg : re.Fragment, b = p ? { containerClassName: d, emphasis: w, shape: h, size: v } : {};
  return Fe.jsx(I, { ...b, children: Fe.jsx("span", { ...c, className: yf({ class: s, size: S }), "data-namespace": "@paloma/icons", "data-size": v, id: "minus-id", style: { color: l, ...g }, children: Fe.jsx(Um, { "aria-hidden": E, "aria-label": o, className: bf({ class: f, size: S }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "minus-svg-id", style: { fill: xg, ...g } }) }) });
}, xg = "currentColor", kg = (o) => Fe.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...o, children: Fe.jsx("path", { d: "M11 13V20H13V13H20V11H13V4H11V11H4V13H11Z" }) }), _g = ({ children: o, containerClassName: s, emphasis: l, shape: p, size: d }) => {
  const w = typeof d == "number", h = w ? {
    height: d,
    padding: d / 2,
    width: d
  } : void 0, v = w ? void 0 : d;
  return Fe.jsx("div", { className: xf({
    class: s,
    emphasis: l,
    shape: p,
    size: v
  }), "data-testid": "@paloma-icons-contained-id", style: h, children: o });
}, Eg = ({ "aria-label": o, className: s, color: l, contained: p, containerClassName: d, emphasis: w = "regular", shape: h = "circle", size: v = "medium", svgClassName: f, ...c }) => {
  const E = !o, k = typeof v == "number", g = k ? { height: v, width: v } : void 0, S = k ? void 0 : v, I = p ? _g : re.Fragment, b = p ? { containerClassName: d, emphasis: w, shape: h, size: v } : {};
  return Fe.jsx(I, { ...b, children: Fe.jsx("span", { ...c, className: yf({ class: s, size: S }), "data-namespace": "@paloma/icons", "data-size": v, id: "plus-id", style: { color: l, ...g }, children: Fe.jsx(kg, { "aria-hidden": E, "aria-label": o, className: bf({ class: f, size: S }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "plus-svg-id", style: { fill: Sg, ...g } }) }) });
}, Sg = "currentColor";
var ma = {}, ya = { exports: {} }, Cg = ya.exports, Sd;
function Fg() {
  return Sd || (Sd = 1, (function(o) {
    (function(s) {
      l(Math.pow(36, 5)), l(Math.pow(16, 7)), l(Math.pow(10, 9)), l(Math.pow(2, 30)), l(36), l(16), l(10), l(2);
      function l(h, v) {
        if (!(this instanceof l))
          return new l(h, v);
        if (this._low = 0, this._high = 0, this.remainder = null, typeof v > "u")
          return d.call(this, h);
        if (typeof h == "string")
          return w.call(this, h, v);
        p.call(this, h, v);
      }
      function p(h, v) {
        return this._low = h | 0, this._high = v | 0, this;
      }
      l.prototype.fromBits = p;
      function d(h) {
        return this._low = h & 65535, this._high = h >>> 16, this;
      }
      l.prototype.fromNumber = d;
      function w(h, v) {
        var f = parseInt(h, v || 10);
        return this._low = f & 65535, this._high = f >>> 16, this;
      }
      l.prototype.fromString = w, l.prototype.toNumber = function() {
        return this._high * 65536 + this._low;
      }, l.prototype.toString = function(h) {
        return this.toNumber().toString(h || 10);
      }, l.prototype.add = function(h) {
        var v = this._low + h._low, f = v >>> 16;
        return f += this._high + h._high, this._low = v & 65535, this._high = f & 65535, this;
      }, l.prototype.subtract = function(h) {
        return this.add(h.clone().negate());
      }, l.prototype.multiply = function(h) {
        var v = this._high, f = this._low, c = h._high, E = h._low, k, g;
        return g = f * E, k = g >>> 16, k += v * E, k &= 65535, k += f * c, this._low = g & 65535, this._high = k & 65535, this;
      }, l.prototype.div = function(h) {
        if (h._low == 0 && h._high == 0) throw Error("division by zero");
        if (h._high == 0 && h._low == 1)
          return this.remainder = new l(0), this;
        if (h.gt(this))
          return this.remainder = this.clone(), this._low = 0, this._high = 0, this;
        if (this.eq(h))
          return this.remainder = new l(0), this._low = 1, this._high = 0, this;
        for (var v = h.clone(), f = -1; !this.lt(v); )
          v.shiftLeft(1, !0), f++;
        for (this.remainder = this.clone(), this._low = 0, this._high = 0; f >= 0; f--)
          v.shiftRight(1), this.remainder.lt(v) || (this.remainder.subtract(v), f >= 16 ? this._high |= 1 << f - 16 : this._low |= 1 << f);
        return this;
      }, l.prototype.negate = function() {
        var h = (~this._low & 65535) + 1;
        return this._low = h & 65535, this._high = ~this._high + (h >>> 16) & 65535, this;
      }, l.prototype.equals = l.prototype.eq = function(h) {
        return this._low == h._low && this._high == h._high;
      }, l.prototype.greaterThan = l.prototype.gt = function(h) {
        return this._high > h._high ? !0 : this._high < h._high ? !1 : this._low > h._low;
      }, l.prototype.lessThan = l.prototype.lt = function(h) {
        return this._high < h._high ? !0 : this._high > h._high ? !1 : this._low < h._low;
      }, l.prototype.or = function(h) {
        return this._low |= h._low, this._high |= h._high, this;
      }, l.prototype.and = function(h) {
        return this._low &= h._low, this._high &= h._high, this;
      }, l.prototype.not = function() {
        return this._low = ~this._low & 65535, this._high = ~this._high & 65535, this;
      }, l.prototype.xor = function(h) {
        return this._low ^= h._low, this._high ^= h._high, this;
      }, l.prototype.shiftRight = l.prototype.shiftr = function(h) {
        return h > 16 ? (this._low = this._high >> h - 16, this._high = 0) : h == 16 ? (this._low = this._high, this._high = 0) : (this._low = this._low >> h | this._high << 16 - h & 65535, this._high >>= h), this;
      }, l.prototype.shiftLeft = l.prototype.shiftl = function(h, v) {
        return h > 16 ? (this._high = this._low << h - 16, this._low = 0, v || (this._high &= 65535)) : h == 16 ? (this._high = this._low, this._low = 0) : (this._high = this._high << h | this._low >> 16 - h, this._low = this._low << h & 65535, v || (this._high &= 65535)), this;
      }, l.prototype.rotateLeft = l.prototype.rotl = function(h) {
        var v = this._high << 16 | this._low;
        return v = v << h | v >>> 32 - h, this._low = v & 65535, this._high = v >>> 16, this;
      }, l.prototype.rotateRight = l.prototype.rotr = function(h) {
        var v = this._high << 16 | this._low;
        return v = v >>> h | v << 32 - h, this._low = v & 65535, this._high = v >>> 16, this;
      }, l.prototype.clone = function() {
        return new l(this._low, this._high);
      }, o.exports ? o.exports = l : s.UINT32 = l;
    })(Cg);
  })(ya)), ya.exports;
}
var ba = { exports: {} }, Pg = ba.exports, Cd;
function zg() {
  return Cd || (Cd = 1, (function(o) {
    (function(s) {
      var l = {
        16: d(Math.pow(16, 5)),
        10: d(Math.pow(10, 5)),
        2: d(Math.pow(2, 5))
      }, p = {
        16: d(16),
        10: d(10),
        2: d(2)
      };
      function d(f, c, E, k) {
        if (!(this instanceof d))
          return new d(f, c, E, k);
        if (this.remainder = null, typeof f == "string")
          return v.call(this, f, c);
        if (typeof c > "u")
          return h.call(this, f);
        w.apply(this, arguments);
      }
      function w(f, c, E, k) {
        return typeof E > "u" ? (this._a00 = f & 65535, this._a16 = f >>> 16, this._a32 = c & 65535, this._a48 = c >>> 16, this) : (this._a00 = f | 0, this._a16 = c | 0, this._a32 = E | 0, this._a48 = k | 0, this);
      }
      d.prototype.fromBits = w;
      function h(f) {
        return this._a00 = f & 65535, this._a16 = f >>> 16, this._a32 = 0, this._a48 = 0, this;
      }
      d.prototype.fromNumber = h;
      function v(f, c) {
        c = c || 10, this._a00 = 0, this._a16 = 0, this._a32 = 0, this._a48 = 0;
        for (var E = l[c] || new d(Math.pow(c, 5)), k = 0, g = f.length; k < g; k += 5) {
          var S = Math.min(5, g - k), I = parseInt(f.slice(k, k + S), c);
          this.multiply(
            S < 5 ? new d(Math.pow(c, S)) : E
          ).add(new d(I));
        }
        return this;
      }
      d.prototype.fromString = v, d.prototype.toNumber = function() {
        return this._a16 * 65536 + this._a00;
      }, d.prototype.toString = function(f) {
        f = f || 10;
        var c = p[f] || new d(f);
        if (!this.gt(c)) return this.toNumber().toString(f);
        for (var E = this.clone(), k = new Array(64), g = 63; g >= 0 && (E.div(c), k[g] = E.remainder.toNumber().toString(f), !!E.gt(c)); g--)
          ;
        return k[g - 1] = E.toNumber().toString(f), k.join("");
      }, d.prototype.add = function(f) {
        var c = this._a00 + f._a00, E = c >>> 16;
        E += this._a16 + f._a16;
        var k = E >>> 16;
        k += this._a32 + f._a32;
        var g = k >>> 16;
        return g += this._a48 + f._a48, this._a00 = c & 65535, this._a16 = E & 65535, this._a32 = k & 65535, this._a48 = g & 65535, this;
      }, d.prototype.subtract = function(f) {
        return this.add(f.clone().negate());
      }, d.prototype.multiply = function(f) {
        var c = this._a00, E = this._a16, k = this._a32, g = this._a48, S = f._a00, I = f._a16, b = f._a32, T = f._a48, G = c * S, X = G >>> 16;
        X += c * I;
        var ne = X >>> 16;
        X &= 65535, X += E * S, ne += X >>> 16, ne += c * b;
        var ee = ne >>> 16;
        return ne &= 65535, ne += E * I, ee += ne >>> 16, ne &= 65535, ne += k * S, ee += ne >>> 16, ee += c * T, ee &= 65535, ee += E * b, ee &= 65535, ee += k * I, ee &= 65535, ee += g * S, this._a00 = G & 65535, this._a16 = X & 65535, this._a32 = ne & 65535, this._a48 = ee & 65535, this;
      }, d.prototype.div = function(f) {
        if (f._a16 == 0 && f._a32 == 0 && f._a48 == 0) {
          if (f._a00 == 0) throw Error("division by zero");
          if (f._a00 == 1)
            return this.remainder = new d(0), this;
        }
        if (f.gt(this))
          return this.remainder = this.clone(), this._a00 = 0, this._a16 = 0, this._a32 = 0, this._a48 = 0, this;
        if (this.eq(f))
          return this.remainder = new d(0), this._a00 = 1, this._a16 = 0, this._a32 = 0, this._a48 = 0, this;
        for (var c = f.clone(), E = -1; !this.lt(c); )
          c.shiftLeft(1, !0), E++;
        for (this.remainder = this.clone(), this._a00 = 0, this._a16 = 0, this._a32 = 0, this._a48 = 0; E >= 0; E--)
          c.shiftRight(1), this.remainder.lt(c) || (this.remainder.subtract(c), E >= 48 ? this._a48 |= 1 << E - 48 : E >= 32 ? this._a32 |= 1 << E - 32 : E >= 16 ? this._a16 |= 1 << E - 16 : this._a00 |= 1 << E);
        return this;
      }, d.prototype.negate = function() {
        var f = (~this._a00 & 65535) + 1;
        return this._a00 = f & 65535, f = (~this._a16 & 65535) + (f >>> 16), this._a16 = f & 65535, f = (~this._a32 & 65535) + (f >>> 16), this._a32 = f & 65535, this._a48 = ~this._a48 + (f >>> 16) & 65535, this;
      }, d.prototype.equals = d.prototype.eq = function(f) {
        return this._a48 == f._a48 && this._a00 == f._a00 && this._a32 == f._a32 && this._a16 == f._a16;
      }, d.prototype.greaterThan = d.prototype.gt = function(f) {
        return this._a48 > f._a48 ? !0 : this._a48 < f._a48 ? !1 : this._a32 > f._a32 ? !0 : this._a32 < f._a32 ? !1 : this._a16 > f._a16 ? !0 : this._a16 < f._a16 ? !1 : this._a00 > f._a00;
      }, d.prototype.lessThan = d.prototype.lt = function(f) {
        return this._a48 < f._a48 ? !0 : this._a48 > f._a48 ? !1 : this._a32 < f._a32 ? !0 : this._a32 > f._a32 ? !1 : this._a16 < f._a16 ? !0 : this._a16 > f._a16 ? !1 : this._a00 < f._a00;
      }, d.prototype.or = function(f) {
        return this._a00 |= f._a00, this._a16 |= f._a16, this._a32 |= f._a32, this._a48 |= f._a48, this;
      }, d.prototype.and = function(f) {
        return this._a00 &= f._a00, this._a16 &= f._a16, this._a32 &= f._a32, this._a48 &= f._a48, this;
      }, d.prototype.xor = function(f) {
        return this._a00 ^= f._a00, this._a16 ^= f._a16, this._a32 ^= f._a32, this._a48 ^= f._a48, this;
      }, d.prototype.not = function() {
        return this._a00 = ~this._a00 & 65535, this._a16 = ~this._a16 & 65535, this._a32 = ~this._a32 & 65535, this._a48 = ~this._a48 & 65535, this;
      }, d.prototype.shiftRight = d.prototype.shiftr = function(f) {
        return f %= 64, f >= 48 ? (this._a00 = this._a48 >> f - 48, this._a16 = 0, this._a32 = 0, this._a48 = 0) : f >= 32 ? (f -= 32, this._a00 = (this._a32 >> f | this._a48 << 16 - f) & 65535, this._a16 = this._a48 >> f & 65535, this._a32 = 0, this._a48 = 0) : f >= 16 ? (f -= 16, this._a00 = (this._a16 >> f | this._a32 << 16 - f) & 65535, this._a16 = (this._a32 >> f | this._a48 << 16 - f) & 65535, this._a32 = this._a48 >> f & 65535, this._a48 = 0) : (this._a00 = (this._a00 >> f | this._a16 << 16 - f) & 65535, this._a16 = (this._a16 >> f | this._a32 << 16 - f) & 65535, this._a32 = (this._a32 >> f | this._a48 << 16 - f) & 65535, this._a48 = this._a48 >> f & 65535), this;
      }, d.prototype.shiftLeft = d.prototype.shiftl = function(f, c) {
        return f %= 64, f >= 48 ? (this._a48 = this._a00 << f - 48, this._a32 = 0, this._a16 = 0, this._a00 = 0) : f >= 32 ? (f -= 32, this._a48 = this._a16 << f | this._a00 >> 16 - f, this._a32 = this._a00 << f & 65535, this._a16 = 0, this._a00 = 0) : f >= 16 ? (f -= 16, this._a48 = this._a32 << f | this._a16 >> 16 - f, this._a32 = (this._a16 << f | this._a00 >> 16 - f) & 65535, this._a16 = this._a00 << f & 65535, this._a00 = 0) : (this._a48 = this._a48 << f | this._a32 >> 16 - f, this._a32 = (this._a32 << f | this._a16 >> 16 - f) & 65535, this._a16 = (this._a16 << f | this._a00 >> 16 - f) & 65535, this._a00 = this._a00 << f & 65535), c || (this._a48 &= 65535), this;
      }, d.prototype.rotateLeft = d.prototype.rotl = function(f) {
        if (f %= 64, f == 0) return this;
        if (f >= 32) {
          var c = this._a00;
          if (this._a00 = this._a32, this._a32 = c, c = this._a48, this._a48 = this._a16, this._a16 = c, f == 32) return this;
          f -= 32;
        }
        var E = this._a48 << 16 | this._a32, k = this._a16 << 16 | this._a00, g = E << f | k >>> 32 - f, S = k << f | E >>> 32 - f;
        return this._a00 = S & 65535, this._a16 = S >>> 16, this._a32 = g & 65535, this._a48 = g >>> 16, this;
      }, d.prototype.rotateRight = d.prototype.rotr = function(f) {
        if (f %= 64, f == 0) return this;
        if (f >= 32) {
          var c = this._a00;
          if (this._a00 = this._a32, this._a32 = c, c = this._a48, this._a48 = this._a16, this._a16 = c, f == 32) return this;
          f -= 32;
        }
        var E = this._a48 << 16 | this._a32, k = this._a16 << 16 | this._a00, g = E >>> f | k << 32 - f, S = k >>> f | E << 32 - f;
        return this._a00 = S & 65535, this._a16 = S >>> 16, this._a32 = g & 65535, this._a48 = g >>> 16, this;
      }, d.prototype.clone = function() {
        return new d(this._a00, this._a16, this._a32, this._a48);
      }, o.exports ? o.exports = d : s.UINT64 = d;
    })(Pg);
  })(ba)), ba.exports;
}
var Fd;
function kf() {
  return Fd || (Fd = 1, ma.UINT32 = Fg(), ma.UINT64 = zg()), ma;
}
var $l, Pd;
function $g() {
  if (Pd) return $l;
  Pd = 1;
  var o = kf().UINT32;
  o.prototype.xxh_update = function(c, E) {
    var k = l._low, g = l._high, S, I;
    I = c * k, S = I >>> 16, S += E * k, S &= 65535, S += c * g;
    var b = this._low + (I & 65535), T = b >>> 16;
    T += this._high + (S & 65535);
    var G = T << 16 | b & 65535;
    G = G << 13 | G >>> 19, b = G & 65535, T = G >>> 16, k = s._low, g = s._high, I = b * k, S = I >>> 16, S += T * k, S &= 65535, S += b * g, this._low = I & 65535, this._high = S & 65535;
  };
  var s = o("2654435761"), l = o("2246822519"), p = o("3266489917"), d = o("668265263"), w = o("374761393");
  function h(c) {
    for (var E = [], k = 0, g = c.length; k < g; k++) {
      var S = c.charCodeAt(k);
      S < 128 ? E.push(S) : S < 2048 ? E.push(
        192 | S >> 6,
        128 | S & 63
      ) : S < 55296 || S >= 57344 ? E.push(
        224 | S >> 12,
        128 | S >> 6 & 63,
        128 | S & 63
      ) : (k++, S = 65536 + ((S & 1023) << 10 | c.charCodeAt(k) & 1023), E.push(
        240 | S >> 18,
        128 | S >> 12 & 63,
        128 | S >> 6 & 63,
        128 | S & 63
      ));
    }
    return new Uint8Array(E);
  }
  function v() {
    if (arguments.length == 2)
      return new v(arguments[1]).update(arguments[0]).digest();
    if (!(this instanceof v))
      return new v(arguments[0]);
    f.call(this, arguments[0]);
  }
  function f(c) {
    return this.seed = c instanceof o ? c.clone() : o(c), this.v1 = this.seed.clone().add(s).add(l), this.v2 = this.seed.clone().add(l), this.v3 = this.seed.clone(), this.v4 = this.seed.clone().subtract(s), this.total_len = 0, this.memsize = 0, this.memory = null, this;
  }
  return v.prototype.init = f, v.prototype.update = function(c) {
    var E = typeof c == "string", k;
    E && (c = h(c), E = !1, k = !0), typeof ArrayBuffer < "u" && c instanceof ArrayBuffer && (k = !0, c = new Uint8Array(c));
    var g = 0, S = c.length, I = g + S;
    if (S == 0) return this;
    if (this.total_len += S, this.memsize == 0 && (E ? this.memory = "" : k ? this.memory = new Uint8Array(16) : this.memory = new Buffer(16)), this.memsize + S < 16)
      return E ? this.memory += c : k ? this.memory.set(c.subarray(0, S), this.memsize) : c.copy(this.memory, this.memsize, 0, S), this.memsize += S, this;
    if (this.memsize > 0) {
      E ? this.memory += c.slice(0, 16 - this.memsize) : k ? this.memory.set(c.subarray(0, 16 - this.memsize), this.memsize) : c.copy(this.memory, this.memsize, 0, 16 - this.memsize);
      var b = 0;
      E ? (this.v1.xxh_update(
        this.memory.charCodeAt(b + 1) << 8 | this.memory.charCodeAt(b),
        this.memory.charCodeAt(b + 3) << 8 | this.memory.charCodeAt(b + 2)
      ), b += 4, this.v2.xxh_update(
        this.memory.charCodeAt(b + 1) << 8 | this.memory.charCodeAt(b),
        this.memory.charCodeAt(b + 3) << 8 | this.memory.charCodeAt(b + 2)
      ), b += 4, this.v3.xxh_update(
        this.memory.charCodeAt(b + 1) << 8 | this.memory.charCodeAt(b),
        this.memory.charCodeAt(b + 3) << 8 | this.memory.charCodeAt(b + 2)
      ), b += 4, this.v4.xxh_update(
        this.memory.charCodeAt(b + 1) << 8 | this.memory.charCodeAt(b),
        this.memory.charCodeAt(b + 3) << 8 | this.memory.charCodeAt(b + 2)
      )) : (this.v1.xxh_update(
        this.memory[b + 1] << 8 | this.memory[b],
        this.memory[b + 3] << 8 | this.memory[b + 2]
      ), b += 4, this.v2.xxh_update(
        this.memory[b + 1] << 8 | this.memory[b],
        this.memory[b + 3] << 8 | this.memory[b + 2]
      ), b += 4, this.v3.xxh_update(
        this.memory[b + 1] << 8 | this.memory[b],
        this.memory[b + 3] << 8 | this.memory[b + 2]
      ), b += 4, this.v4.xxh_update(
        this.memory[b + 1] << 8 | this.memory[b],
        this.memory[b + 3] << 8 | this.memory[b + 2]
      )), g += 16 - this.memsize, this.memsize = 0, E && (this.memory = "");
    }
    if (g <= I - 16) {
      var T = I - 16;
      do
        E ? (this.v1.xxh_update(
          c.charCodeAt(g + 1) << 8 | c.charCodeAt(g),
          c.charCodeAt(g + 3) << 8 | c.charCodeAt(g + 2)
        ), g += 4, this.v2.xxh_update(
          c.charCodeAt(g + 1) << 8 | c.charCodeAt(g),
          c.charCodeAt(g + 3) << 8 | c.charCodeAt(g + 2)
        ), g += 4, this.v3.xxh_update(
          c.charCodeAt(g + 1) << 8 | c.charCodeAt(g),
          c.charCodeAt(g + 3) << 8 | c.charCodeAt(g + 2)
        ), g += 4, this.v4.xxh_update(
          c.charCodeAt(g + 1) << 8 | c.charCodeAt(g),
          c.charCodeAt(g + 3) << 8 | c.charCodeAt(g + 2)
        )) : (this.v1.xxh_update(
          c[g + 1] << 8 | c[g],
          c[g + 3] << 8 | c[g + 2]
        ), g += 4, this.v2.xxh_update(
          c[g + 1] << 8 | c[g],
          c[g + 3] << 8 | c[g + 2]
        ), g += 4, this.v3.xxh_update(
          c[g + 1] << 8 | c[g],
          c[g + 3] << 8 | c[g + 2]
        ), g += 4, this.v4.xxh_update(
          c[g + 1] << 8 | c[g],
          c[g + 3] << 8 | c[g + 2]
        )), g += 4;
      while (g <= T);
    }
    return g < I && (E ? this.memory += c.slice(g) : k ? this.memory.set(c.subarray(g, I), this.memsize) : c.copy(this.memory, this.memsize, g, I), this.memsize = I - g), this;
  }, v.prototype.digest = function() {
    var c = this.memory, E = typeof c == "string", k = 0, g = this.memsize, S, I, b = new o();
    for (this.total_len >= 16 ? S = this.v1.rotl(1).add(this.v2.rotl(7).add(this.v3.rotl(12).add(this.v4.rotl(18)))) : S = this.seed.clone().add(w), S.add(b.fromNumber(this.total_len)); k <= g - 4; )
      E ? b.fromBits(
        c.charCodeAt(k + 1) << 8 | c.charCodeAt(k),
        c.charCodeAt(k + 3) << 8 | c.charCodeAt(k + 2)
      ) : b.fromBits(
        c[k + 1] << 8 | c[k],
        c[k + 3] << 8 | c[k + 2]
      ), S.add(b.multiply(p)).rotl(17).multiply(d), k += 4;
    for (; k < g; )
      b.fromBits(E ? c.charCodeAt(k++) : c[k++], 0), S.add(b.multiply(w)).rotl(11).multiply(s);
    return I = S.clone().shiftRight(15), S.xor(I).multiply(l), I = S.clone().shiftRight(13), S.xor(I).multiply(p), I = S.clone().shiftRight(16), S.xor(I), this.init(this.seed), S;
  }, $l = v, $l;
}
var Tl, zd;
function Tg() {
  if (zd) return Tl;
  zd = 1;
  var o = kf().UINT64, s = o("11400714785074694791"), l = o("14029467366897019727"), p = o("1609587929392839161"), d = o("9650029242287828579"), w = o("2870177450012600261");
  function h(c) {
    for (var E = [], k = 0, g = c.length; k < g; k++) {
      var S = c.charCodeAt(k);
      S < 128 ? E.push(S) : S < 2048 ? E.push(
        192 | S >> 6,
        128 | S & 63
      ) : S < 55296 || S >= 57344 ? E.push(
        224 | S >> 12,
        128 | S >> 6 & 63,
        128 | S & 63
      ) : (k++, S = 65536 + ((S & 1023) << 10 | c.charCodeAt(k) & 1023), E.push(
        240 | S >> 18,
        128 | S >> 12 & 63,
        128 | S >> 6 & 63,
        128 | S & 63
      ));
    }
    return new Uint8Array(E);
  }
  function v() {
    if (arguments.length == 2)
      return new v(arguments[1]).update(arguments[0]).digest();
    if (!(this instanceof v))
      return new v(arguments[0]);
    f.call(this, arguments[0]);
  }
  function f(c) {
    return this.seed = c instanceof o ? c.clone() : o(c), this.v1 = this.seed.clone().add(s).add(l), this.v2 = this.seed.clone().add(l), this.v3 = this.seed.clone(), this.v4 = this.seed.clone().subtract(s), this.total_len = 0, this.memsize = 0, this.memory = null, this;
  }
  return v.prototype.init = f, v.prototype.update = function(c) {
    var E = typeof c == "string", k;
    E && (c = h(c), E = !1, k = !0), typeof ArrayBuffer < "u" && c instanceof ArrayBuffer && (k = !0, c = new Uint8Array(c));
    var g = 0, S = c.length, I = g + S;
    if (S == 0) return this;
    if (this.total_len += S, this.memsize == 0 && (E ? this.memory = "" : k ? this.memory = new Uint8Array(32) : this.memory = new Buffer(32)), this.memsize + S < 32)
      return E ? this.memory += c : k ? this.memory.set(c.subarray(0, S), this.memsize) : c.copy(this.memory, this.memsize, 0, S), this.memsize += S, this;
    if (this.memsize > 0) {
      E ? this.memory += c.slice(0, 32 - this.memsize) : k ? this.memory.set(c.subarray(0, 32 - this.memsize), this.memsize) : c.copy(this.memory, this.memsize, 0, 32 - this.memsize);
      var b = 0;
      if (E) {
        var T;
        T = o(
          this.memory.charCodeAt(b + 1) << 8 | this.memory.charCodeAt(b),
          this.memory.charCodeAt(b + 3) << 8 | this.memory.charCodeAt(b + 2),
          this.memory.charCodeAt(b + 5) << 8 | this.memory.charCodeAt(b + 4),
          this.memory.charCodeAt(b + 7) << 8 | this.memory.charCodeAt(b + 6)
        ), this.v1.add(T.multiply(l)).rotl(31).multiply(s), b += 8, T = o(
          this.memory.charCodeAt(b + 1) << 8 | this.memory.charCodeAt(b),
          this.memory.charCodeAt(b + 3) << 8 | this.memory.charCodeAt(b + 2),
          this.memory.charCodeAt(b + 5) << 8 | this.memory.charCodeAt(b + 4),
          this.memory.charCodeAt(b + 7) << 8 | this.memory.charCodeAt(b + 6)
        ), this.v2.add(T.multiply(l)).rotl(31).multiply(s), b += 8, T = o(
          this.memory.charCodeAt(b + 1) << 8 | this.memory.charCodeAt(b),
          this.memory.charCodeAt(b + 3) << 8 | this.memory.charCodeAt(b + 2),
          this.memory.charCodeAt(b + 5) << 8 | this.memory.charCodeAt(b + 4),
          this.memory.charCodeAt(b + 7) << 8 | this.memory.charCodeAt(b + 6)
        ), this.v3.add(T.multiply(l)).rotl(31).multiply(s), b += 8, T = o(
          this.memory.charCodeAt(b + 1) << 8 | this.memory.charCodeAt(b),
          this.memory.charCodeAt(b + 3) << 8 | this.memory.charCodeAt(b + 2),
          this.memory.charCodeAt(b + 5) << 8 | this.memory.charCodeAt(b + 4),
          this.memory.charCodeAt(b + 7) << 8 | this.memory.charCodeAt(b + 6)
        ), this.v4.add(T.multiply(l)).rotl(31).multiply(s);
      } else {
        var T;
        T = o(
          this.memory[b + 1] << 8 | this.memory[b],
          this.memory[b + 3] << 8 | this.memory[b + 2],
          this.memory[b + 5] << 8 | this.memory[b + 4],
          this.memory[b + 7] << 8 | this.memory[b + 6]
        ), this.v1.add(T.multiply(l)).rotl(31).multiply(s), b += 8, T = o(
          this.memory[b + 1] << 8 | this.memory[b],
          this.memory[b + 3] << 8 | this.memory[b + 2],
          this.memory[b + 5] << 8 | this.memory[b + 4],
          this.memory[b + 7] << 8 | this.memory[b + 6]
        ), this.v2.add(T.multiply(l)).rotl(31).multiply(s), b += 8, T = o(
          this.memory[b + 1] << 8 | this.memory[b],
          this.memory[b + 3] << 8 | this.memory[b + 2],
          this.memory[b + 5] << 8 | this.memory[b + 4],
          this.memory[b + 7] << 8 | this.memory[b + 6]
        ), this.v3.add(T.multiply(l)).rotl(31).multiply(s), b += 8, T = o(
          this.memory[b + 1] << 8 | this.memory[b],
          this.memory[b + 3] << 8 | this.memory[b + 2],
          this.memory[b + 5] << 8 | this.memory[b + 4],
          this.memory[b + 7] << 8 | this.memory[b + 6]
        ), this.v4.add(T.multiply(l)).rotl(31).multiply(s);
      }
      g += 32 - this.memsize, this.memsize = 0, E && (this.memory = "");
    }
    if (g <= I - 32) {
      var G = I - 32;
      do {
        if (E) {
          var T;
          T = o(
            c.charCodeAt(g + 1) << 8 | c.charCodeAt(g),
            c.charCodeAt(g + 3) << 8 | c.charCodeAt(g + 2),
            c.charCodeAt(g + 5) << 8 | c.charCodeAt(g + 4),
            c.charCodeAt(g + 7) << 8 | c.charCodeAt(g + 6)
          ), this.v1.add(T.multiply(l)).rotl(31).multiply(s), g += 8, T = o(
            c.charCodeAt(g + 1) << 8 | c.charCodeAt(g),
            c.charCodeAt(g + 3) << 8 | c.charCodeAt(g + 2),
            c.charCodeAt(g + 5) << 8 | c.charCodeAt(g + 4),
            c.charCodeAt(g + 7) << 8 | c.charCodeAt(g + 6)
          ), this.v2.add(T.multiply(l)).rotl(31).multiply(s), g += 8, T = o(
            c.charCodeAt(g + 1) << 8 | c.charCodeAt(g),
            c.charCodeAt(g + 3) << 8 | c.charCodeAt(g + 2),
            c.charCodeAt(g + 5) << 8 | c.charCodeAt(g + 4),
            c.charCodeAt(g + 7) << 8 | c.charCodeAt(g + 6)
          ), this.v3.add(T.multiply(l)).rotl(31).multiply(s), g += 8, T = o(
            c.charCodeAt(g + 1) << 8 | c.charCodeAt(g),
            c.charCodeAt(g + 3) << 8 | c.charCodeAt(g + 2),
            c.charCodeAt(g + 5) << 8 | c.charCodeAt(g + 4),
            c.charCodeAt(g + 7) << 8 | c.charCodeAt(g + 6)
          ), this.v4.add(T.multiply(l)).rotl(31).multiply(s);
        } else {
          var T;
          T = o(
            c[g + 1] << 8 | c[g],
            c[g + 3] << 8 | c[g + 2],
            c[g + 5] << 8 | c[g + 4],
            c[g + 7] << 8 | c[g + 6]
          ), this.v1.add(T.multiply(l)).rotl(31).multiply(s), g += 8, T = o(
            c[g + 1] << 8 | c[g],
            c[g + 3] << 8 | c[g + 2],
            c[g + 5] << 8 | c[g + 4],
            c[g + 7] << 8 | c[g + 6]
          ), this.v2.add(T.multiply(l)).rotl(31).multiply(s), g += 8, T = o(
            c[g + 1] << 8 | c[g],
            c[g + 3] << 8 | c[g + 2],
            c[g + 5] << 8 | c[g + 4],
            c[g + 7] << 8 | c[g + 6]
          ), this.v3.add(T.multiply(l)).rotl(31).multiply(s), g += 8, T = o(
            c[g + 1] << 8 | c[g],
            c[g + 3] << 8 | c[g + 2],
            c[g + 5] << 8 | c[g + 4],
            c[g + 7] << 8 | c[g + 6]
          ), this.v4.add(T.multiply(l)).rotl(31).multiply(s);
        }
        g += 8;
      } while (g <= G);
    }
    return g < I && (E ? this.memory += c.slice(g) : k ? this.memory.set(c.subarray(g, I), this.memsize) : c.copy(this.memory, this.memsize, g, I), this.memsize = I - g), this;
  }, v.prototype.digest = function() {
    var c = this.memory, E = typeof c == "string", k = 0, g = this.memsize, S, I, b = new o();
    for (this.total_len >= 32 ? (S = this.v1.clone().rotl(1), S.add(this.v2.clone().rotl(7)), S.add(this.v3.clone().rotl(12)), S.add(this.v4.clone().rotl(18)), S.xor(this.v1.multiply(l).rotl(31).multiply(s)), S.multiply(s).add(d), S.xor(this.v2.multiply(l).rotl(31).multiply(s)), S.multiply(s).add(d), S.xor(this.v3.multiply(l).rotl(31).multiply(s)), S.multiply(s).add(d), S.xor(this.v4.multiply(l).rotl(31).multiply(s)), S.multiply(s).add(d)) : S = this.seed.clone().add(w), S.add(b.fromNumber(this.total_len)); k <= g - 8; )
      E ? b.fromBits(
        c.charCodeAt(k + 1) << 8 | c.charCodeAt(k),
        c.charCodeAt(k + 3) << 8 | c.charCodeAt(k + 2),
        c.charCodeAt(k + 5) << 8 | c.charCodeAt(k + 4),
        c.charCodeAt(k + 7) << 8 | c.charCodeAt(k + 6)
      ) : b.fromBits(
        c[k + 1] << 8 | c[k],
        c[k + 3] << 8 | c[k + 2],
        c[k + 5] << 8 | c[k + 4],
        c[k + 7] << 8 | c[k + 6]
      ), b.multiply(l).rotl(31).multiply(s), S.xor(b).rotl(27).multiply(s).add(d), k += 8;
    for (k + 4 <= g && (E ? b.fromBits(
      c.charCodeAt(k + 1) << 8 | c.charCodeAt(k),
      c.charCodeAt(k + 3) << 8 | c.charCodeAt(k + 2),
      0,
      0
    ) : b.fromBits(
      c[k + 1] << 8 | c[k],
      c[k + 3] << 8 | c[k + 2],
      0,
      0
    ), S.xor(b.multiply(s)).rotl(23).multiply(l).add(p), k += 4); k < g; )
      b.fromBits(E ? c.charCodeAt(k++) : c[k++], 0, 0, 0), S.xor(b.multiply(w)).rotl(11).multiply(s);
    return I = S.clone().shiftRight(33), S.xor(I).multiply(l), I = S.clone().shiftRight(29), S.xor(I).multiply(p), I = S.clone().shiftRight(32), S.xor(I), this.init(this.seed), S;
  }, Tl = v, Tl;
}
var Al, $d;
function Ag() {
  return $d || ($d = 1, Al = {
    h32: $g(),
    h64: Tg()
  }), Al;
}
Ag();
var Ng = Object.create, Fa = Object.defineProperty, Lg = Object.getOwnPropertyDescriptor, ns = Object.getOwnPropertyNames, Mg = Object.getPrototypeOf, Rg = Object.prototype.hasOwnProperty, Ig = (o, s) => function() {
  return o && (s = (0, o[ns(o)[0]])(o = 0)), s;
}, Dg = (o, s) => function() {
  return s || (0, o[ns(o)[0]])((s = { exports: {} }).exports, s), s.exports;
}, Og = (o, s) => {
  for (var l in s)
    Fa(o, l, { get: s[l], enumerable: !0 });
}, _f = (o, s, l, p) => {
  if (s && typeof s == "object" || typeof s == "function")
    for (let d of ns(s))
      !Rg.call(o, d) && d !== l && Fa(o, d, { get: () => s[d], enumerable: !(p = Lg(s, d)) || p.enumerable });
  return o;
}, jg = (o, s, l) => (l = o != null ? Ng(Mg(o)) : {}, _f(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Fa(l, "default", { value: o, enumerable: !0 }),
  o
)), Ug = (o) => _f(Fa({}, "__esModule", { value: !0 }), o), Ef = {};
Og(Ef, {
  MODE_VALUES: () => Cf,
  THEME_VALUES: () => Sf
});
var Sf, Cf, Vg = Ig({
  "../@paloma-tokens/dist/assets/paloma-theme-mode-values.ts"() {
    Sf = [
      "ea-blue",
      "ea-sims",
      "fc-green",
      "ea-battlefield6",
      // eslint-disable-line perfectionist/sort-union-types
      "purple",
      "red",
      "ea-madden"
    ], Cf = ["dark", "light"];
  }
}), Bg = Dg({
  "../@paloma-tokens/dist/index.js"(o) {
    Object.defineProperty(o, "__esModule", { value: !0 }), o.THEME_VALUES = o.MODE_VALUES = void 0;
    var s = (Vg(), Ug(Ef));
    Object.defineProperty(o, "MODE_VALUES", { enumerable: !0, get: function() {
      return s.MODE_VALUES;
    } }), Object.defineProperty(o, "THEME_VALUES", { enumerable: !0, get: function() {
      return s.THEME_VALUES;
    } });
  }
}), Hg = (o) => {
  console.error(`Assertion failed: ${o}`);
}, Wg = (o, s) => {
  o || Hg(s);
};
function Yg(o) {
  return !1;
}
var Yl = (o) => {
  Yg() && console.warn(o);
}, Kg = "It seems like you're using the cn function with a single string input. The cn function is designed for handling conditional classes. If you're not dealing with conditional classes, consider using the class directly.", Xg = (o) => !o.startsWith("size"), Ff = {
  override: {
    classGroups: {
      "font-size": [{ "text-size": [pg.isAny] }],
      "font-variant": ["font-variant-none"],
      "text-color": [
        {
          text: [Xg]
        }
      ]
    }
  }
}, Qg = gf(Ff), Gg = /\s\s+/g, qg = (o) => o.replace(Gg, " "), Zg = (...o) => {
  if (typeof o[0] == "string" && o.length === 1)
    return Yl(Kg), Yl(`cn("${o[0]}")`), o[0];
  const s = Qg(es(...o));
  return qg(s);
}, Pr = (o, s) => Jn(o, { twMergeConfig: Ff, ...s }), Pf = jg(Bg());
Pf.MODE_VALUES;
Pf.THEME_VALUES;
function Jg({
  controlledValue: o,
  defaultValue: s,
  warnFn: l
}) {
  const [p, d] = re.useState(s);
  return o !== void 0 && s !== void 0 && (l ? l() : Yl(
    "A controlled value and a default value were both provided. An element must be either controlled or uncontrolled. Decide between using any and remove on of these props"
  )), [
    o ?? p,
    o !== void 0 ? void 0 : d
  ];
}
var Td = 0;
function e0(o = "") {
  return Td += 1, o + Td;
}
function t0(o, s) {
  const l = re.useRef(o ?? null);
  return Wg(
    s.length > 0,
    "useUniqueId(): The prefix provided is an empty string. If you want to remove the prefix, do not provide it. If you want to use the default prefix, do not provide a prefix."
  ), l.current === null && (l.current = e0(
    `${s}-`
  )), o && (l.current = o), l.current;
}
function r0(o, s, l) {
  try {
    const d = me.Children.only(o);
    if (d.type === s)
      return l ? l(d, d == null ? void 0 : d.props) : o;
  } catch {
  }
  return null;
}
function n0(o, s) {
  if (!s)
    return null;
  const l = me.Children.only(s);
  return me.cloneElement(l, { ...o });
}
var o0 = Pr({
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
}), a0 = "span", Nl = re.forwardRef(
  ({
    as: o,
    children: s,
    className: l,
    fontWeight: p = "normal",
    showTitle: d = !1,
    size: w,
    truncate: h = !1,
    underline: v = !1,
    variant: f,
    ...c
  }, E) => {
    const k = o ?? a0, [g, S] = re.useMemo(() => f === "heading" ? [w ?? "large", f] : [w ?? "medium", "body"], [w, f]);
    return /* @__PURE__ */ me.createElement(
      k,
      {
        className: o0({
          className: l,
          fontWeight: p,
          truncate: h,
          underline: v,
          [S]: g
        }),
        "data-font-weight": p,
        "data-size": g,
        "data-truncate": h,
        "data-underline": v,
        "data-variant": S,
        ref: E,
        title: d ? c.title ?? (h && typeof s == "string" ? s : void 0) : void 0,
        ...c
      },
      s
    );
  }
), Ll = (o, s = {}) => {
  if (typeof o == "string")
    return /* @__PURE__ */ me.createElement(Nl, { ...s }, o);
  if (r0(o, Nl)) {
    const l = {
      ...s ?? {},
      ...o.props
    };
    return /* @__PURE__ */ me.createElement(Nl, { ...l });
  }
  if (me.isValidElement(o) && typeof o.type == "string") {
    const l = {};
    o.type === "a" && (l.color = "#0000EE", l.textDecoration = "underline");
    const p = o.props, d = {
      ...l,
      ...s.style,
      ...p.style
    };
    return me.cloneElement(
      o,
      {
        style: d
      }
    );
  }
  return o;
}, i0 = [
  /* Uses a dummy class because FocusRing is a functional component that just adds
      the class to the content.
  
      The cn or other style functions on the FocusRing are always called, so we can't
      listen to them to test functionality */
  "@paloma-focus-ring",
  "outline",
  "outline-2",
  "outline-offset-2",
  "outline-interactive-highlight"
], l0 = ({
  children: o,
  disabled: s,
  focusRingClass: l,
  ...p
}) => s ? o : /* @__PURE__ */ me.createElement(jm, { focusRingClass: Zg(i0, l), ...p }, o), s0 = "text-content-neutral-subtle", u0 = Pr({
  base: "py-4 flex flex-col items-start border-t-0 border-l-0 border-r-0 border-b border-b-neutral-subtle border-solid",
  variants: {
    expanded: {
      true: "pb-8"
    }
  }
}), c0 = Pr({
  base: "flex items-center text-content-neutral-bold",
  variants: {
    expanded: {
      true: "text-content-highlight"
    }
  }
}), d0 = Pr({
  base: "text-content-neutral-bold",
  variants: {
    expanded: {
      true: "!text-content-highlight"
    }
  }
}), f0 = Pr({
  base: "flex items-center text-content-neutral-subtle",
  variants: {
    size: {
      large: "h-8",
      medium: "h-6"
    }
  }
}), p0 = Pr({
  base: "w-full grid overflow-hidden transition-all duration-300 ease-in-out motion-reduce:transition-none",
  variants: {
    expanded: {
      false: "grid-rows-[0fr] invisible",
      true: "grid-rows-[1fr] visible"
    }
  }
}), h0 = Pr({
  variants: {
    variant: {
      contained: "p-8 rounded-md bg-surface-level-01",
      "un-contained": ""
    }
  }
}), m0 = ({
  children: o,
  className: s,
  defaultExpanded: l,
  expanded: p,
  headingAs: d,
  id: w,
  label: h,
  leadingIcon: v,
  onToggle: f,
  size: c = "medium",
  subtitle: E,
  title: k,
  titleClassName: g,
  variant: S = "contained",
  ...I
}) => {
  const [b, T] = Jg({
    controlledValue: p,
    defaultValue: l
  }), G = (Ee) => {
    T == null || T(!b), f == null || f(Ee, !b);
  }, X = re.useRef(null), { buttonProps: ne } = Im(
    { onPress: G },
    X
  ), ee = t0(w, "accordion"), we = `${ee}-content`, _e = d ?? "h3", fe = !!b;
  return /* @__PURE__ */ me.createElement(
    "div",
    {
      className: u0({
        class: s,
        expanded: fe
      }),
      ...I
    },
    /* @__PURE__ */ me.createElement(
      _e,
      {
        className: "w-full m-0",
        "data-testid": "@paloma-accordion-heading-id"
      },
      /* @__PURE__ */ me.createElement(l0, { focusRingClass: "rounded-md" }, /* @__PURE__ */ me.createElement(
        "button",
        {
          ...ne,
          "aria-controls": we,
          "aria-expanded": fe,
          className: "w-full outline-none border-none bg-transparent cursor-pointer px-2 py-2 my-2 flex gap-2 justify-between hover:bg-content-neutral-bold/[0.08] active:bg-content-neutral-bold/[0.12] hover:active:bg-content-neutral-bold/[0.12]",
          id: ee,
          ref: X
        },
        /* @__PURE__ */ me.createElement("div", { className: "flex items-start gap-2 text-left" }, v && /* @__PURE__ */ me.createElement(
          "div",
          {
            "aria-hidden": !0,
            className: c0({ expanded: fe }),
            "data-testid": "@paloma-accordion-leading-icon-id"
          },
          n0({ size: c }, v)
        ), /* @__PURE__ */ me.createElement("div", { className: "title flex flex-col gap-1 items-start" }, Ll(k, {
          className: d0({
            class: g,
            expanded: fe
          }),
          fontWeight: "bold",
          size: c,
          variant: "body"
        }), Ll(E, {
          className: s0,
          size: c === "large" ? "small" : "x-small",
          variant: "body"
        }))),
        /* @__PURE__ */ me.createElement("div", { className: "flex items-start gap-2" }, Ll(h, {
          className: f0({ size: c }),
          size: c === "large" ? "small" : "x-small",
          variant: "body"
        }), b ? /* @__PURE__ */ me.createElement(
          bg,
          {
            className: "text-content-highlight",
            "data-testid": "@paloma-accordion-button-expanded-id",
            size: c
          }
        ) : /* @__PURE__ */ me.createElement(
          Eg,
          {
            className: "text-content-highlight",
            "data-testid": "@paloma-accordion-button-collapsed-id",
            size: c
          }
        ))
      ))
    ),
    /* @__PURE__ */ me.createElement(
      "section",
      {
        "aria-labelledby": ee,
        className: p0({ expanded: fe }),
        id: we
      },
      /* @__PURE__ */ me.createElement("div", { className: "overflow-hidden" }, /* @__PURE__ */ me.createElement("div", { className: h0({ variant: S }) }, o))
    )
  );
};
function g0(o) {
  const s = [...o];
  for (let l = s.length - 1; l > 0; l--) {
    const p = Math.floor(Math.random() * (l + 1));
    [s[l], s[p]] = [s[p], s[l]];
  }
  return s;
}
function Ad({ card: o, isBig: s }) {
  const [l, p] = re.useState(!0);
  return /* @__PURE__ */ Fe.jsxs(
    m0,
    {
      className: `block-announcements__card${s ? " --big" : ""}`,
      expanded: l,
      title: o.title,
      subtitle: o.subtitle,
      label: o.link ? "Open" : void 0,
      leadingIcon: o.image ? /* @__PURE__ */ Fe.jsx(
        "img",
        {
          className: "block-announcements__accordion-icon",
          src: o.image,
          alt: ""
        }
      ) : void 0,
      onToggle: (d, w) => p(w),
      children: [
        o.image && /* @__PURE__ */ Fe.jsx("div", { className: "block-announcements__media", children: /* @__PURE__ */ Fe.jsx(
          "img",
          {
            className: "block-announcements__image",
            src: o.image,
            alt: o.title,
            loading: "lazy"
          }
        ) }),
        o.link && /* @__PURE__ */ Fe.jsx("a", { className: "block-announcements__link", href: o.link, children: "Open announcement" })
      ]
    }
  );
}
function v0({
  cards: o = [],
  heading: s,
  shuffle: l = !1
}) {
  const p = l ? g0(o) : o, d = p.find((h) => h.size === "big") || p[0], w = p.filter((h) => h !== d);
  return p.length ? /* @__PURE__ */ Fe.jsxs("section", { children: [
    s && /* @__PURE__ */ Fe.jsx("h2", { className: "ea-section-heading", children: s }),
    /* @__PURE__ */ Fe.jsxs("div", { className: "block-announcements__grid", children: [
      /* @__PURE__ */ Fe.jsx("div", { className: "block-announcements__hero", children: /* @__PURE__ */ Fe.jsx(Ad, { card: d, isBig: !0 }) }),
      w.length > 0 && /* @__PURE__ */ Fe.jsx("div", { className: "block-announcements__small-grid", children: w.map((h) => /* @__PURE__ */ Fe.jsx(Ad, { card: h }, h.title)) })
    ] })
  ] }) : null;
}
if (typeof document < "u" && !document.querySelector("[data-ea-paloma-styles]")) {
  const o = document.createElement("style");
  o.dataset.eaPalomaStyles = "true", o.textContent = Ah, document.head.appendChild(o);
}
const Sa = /* @__PURE__ */ new WeakMap();
function w0(o, s, l = {}) {
  if (!o || !s)
    return;
  let p = Sa.get(o);
  p || (p = Th.createRoot(o), Sa.set(o, p)), p.render(me.createElement(s, l));
}
function b0(o) {
  const s = Sa.get(o);
  s && (s.unmount(), Sa.delete(o));
}
function x0(o, s = {}) {
  w0(o, v0, s);
}
export {
  w0 as mount,
  x0 as mountAnnouncements,
  b0 as unmount
};
