function my(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Zc = { exports: {} }, co = {}, Jc = { exports: {} }, Pe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bh;
function gy() {
  if (Bh) return Pe;
  Bh = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), u = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), v = Symbol.iterator;
  function g(P) {
    return P === null || typeof P != "object" ? null : (P = v && P[v] || P["@@iterator"], typeof P == "function" ? P : null);
  }
  var w = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, k = Object.assign, y = {};
  function C(P, B, me) {
    this.props = P, this.context = B, this.refs = y, this.updater = me || w;
  }
  C.prototype.isReactComponent = {}, C.prototype.setState = function(P, B) {
    if (typeof P != "object" && typeof P != "function" && P != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, P, B, "setState");
  }, C.prototype.forceUpdate = function(P) {
    this.updater.enqueueForceUpdate(this, P, "forceUpdate");
  };
  function I() {
  }
  I.prototype = C.prototype;
  function F(P, B, me) {
    this.props = P, this.context = B, this.refs = y, this.updater = me || w;
  }
  var D = F.prototype = new I();
  D.constructor = F, k(D, C.prototype), D.isPureReactComponent = !0;
  var W = Array.isArray, re = Object.prototype.hasOwnProperty, ee = { current: null }, ne = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ue(P, B, me) {
    var pe, G = {}, ce = null, ke = null;
    if (B != null) for (pe in B.ref !== void 0 && (ke = B.ref), B.key !== void 0 && (ce = "" + B.key), B) re.call(B, pe) && !ne.hasOwnProperty(pe) && (G[pe] = B[pe]);
    var $e = arguments.length - 2;
    if ($e === 1) G.children = me;
    else if (1 < $e) {
      for (var Ie = Array($e), ot = 0; ot < $e; ot++) Ie[ot] = arguments[ot + 2];
      G.children = Ie;
    }
    if (P && P.defaultProps) for (pe in $e = P.defaultProps, $e) G[pe] === void 0 && (G[pe] = $e[pe]);
    return { $$typeof: e, type: P, key: ce, ref: ke, props: G, _owner: ee.current };
  }
  function ie(P, B) {
    return { $$typeof: e, type: P.type, key: B, ref: P.ref, props: P.props, _owner: P._owner };
  }
  function ve(P) {
    return typeof P == "object" && P !== null && P.$$typeof === e;
  }
  function se(P) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + P.replace(/[=:]/g, function(me) {
      return B[me];
    });
  }
  var j = /\/+/g;
  function q(P, B) {
    return typeof P == "object" && P !== null && P.key != null ? se("" + P.key) : B.toString(36);
  }
  function z(P, B, me, pe, G) {
    var ce = typeof P;
    (ce === "undefined" || ce === "boolean") && (P = null);
    var ke = !1;
    if (P === null) ke = !0;
    else switch (ce) {
      case "string":
      case "number":
        ke = !0;
        break;
      case "object":
        switch (P.$$typeof) {
          case e:
          case r:
            ke = !0;
        }
    }
    if (ke) return ke = P, G = G(ke), P = pe === "" ? "." + q(ke, 0) : pe, W(G) ? (me = "", P != null && (me = P.replace(j, "$&/") + "/"), z(G, B, me, "", function(ot) {
      return ot;
    })) : G != null && (ve(G) && (G = ie(G, me + (!G.key || ke && ke.key === G.key ? "" : ("" + G.key).replace(j, "$&/") + "/") + P)), B.push(G)), 1;
    if (ke = 0, pe = pe === "" ? "." : pe + ":", W(P)) for (var $e = 0; $e < P.length; $e++) {
      ce = P[$e];
      var Ie = pe + q(ce, $e);
      ke += z(ce, B, me, Ie, G);
    }
    else if (Ie = g(P), typeof Ie == "function") for (P = Ie.call(P), $e = 0; !(ce = P.next()).done; ) ce = ce.value, Ie = pe + q(ce, $e++), ke += z(ce, B, me, Ie, G);
    else if (ce === "object") throw B = String(P), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(P).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.");
    return ke;
  }
  function Y(P, B, me) {
    if (P == null) return P;
    var pe = [], G = 0;
    return z(P, pe, "", "", function(ce) {
      return B.call(me, ce, G++);
    }), pe;
  }
  function K(P) {
    if (P._status === -1) {
      var B = P._result;
      B = B(), B.then(function(me) {
        (P._status === 0 || P._status === -1) && (P._status = 1, P._result = me);
      }, function(me) {
        (P._status === 0 || P._status === -1) && (P._status = 2, P._result = me);
      }), P._status === -1 && (P._status = 0, P._result = B);
    }
    if (P._status === 1) return P._result.default;
    throw P._result;
  }
  var R = { current: null }, L = { transition: null }, N = { ReactCurrentDispatcher: R, ReactCurrentBatchConfig: L, ReactCurrentOwner: ee };
  function U() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Pe.Children = { map: Y, forEach: function(P, B, me) {
    Y(P, function() {
      B.apply(this, arguments);
    }, me);
  }, count: function(P) {
    var B = 0;
    return Y(P, function() {
      B++;
    }), B;
  }, toArray: function(P) {
    return Y(P, function(B) {
      return B;
    }) || [];
  }, only: function(P) {
    if (!ve(P)) throw Error("React.Children.only expected to receive a single React element child.");
    return P;
  } }, Pe.Component = C, Pe.Fragment = n, Pe.Profiler = l, Pe.PureComponent = F, Pe.StrictMode = i, Pe.Suspense = h, Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N, Pe.act = U, Pe.cloneElement = function(P, B, me) {
    if (P == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + P + ".");
    var pe = k({}, P.props), G = P.key, ce = P.ref, ke = P._owner;
    if (B != null) {
      if (B.ref !== void 0 && (ce = B.ref, ke = ee.current), B.key !== void 0 && (G = "" + B.key), P.type && P.type.defaultProps) var $e = P.type.defaultProps;
      for (Ie in B) re.call(B, Ie) && !ne.hasOwnProperty(Ie) && (pe[Ie] = B[Ie] === void 0 && $e !== void 0 ? $e[Ie] : B[Ie]);
    }
    var Ie = arguments.length - 2;
    if (Ie === 1) pe.children = me;
    else if (1 < Ie) {
      $e = Array(Ie);
      for (var ot = 0; ot < Ie; ot++) $e[ot] = arguments[ot + 2];
      pe.children = $e;
    }
    return { $$typeof: e, type: P.type, key: G, ref: ce, props: pe, _owner: ke };
  }, Pe.createContext = function(P) {
    return P = { $$typeof: u, _currentValue: P, _currentValue2: P, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, P.Provider = { $$typeof: c, _context: P }, P.Consumer = P;
  }, Pe.createElement = ue, Pe.createFactory = function(P) {
    var B = ue.bind(null, P);
    return B.type = P, B;
  }, Pe.createRef = function() {
    return { current: null };
  }, Pe.forwardRef = function(P) {
    return { $$typeof: d, render: P };
  }, Pe.isValidElement = ve, Pe.lazy = function(P) {
    return { $$typeof: b, _payload: { _status: -1, _result: P }, _init: K };
  }, Pe.memo = function(P, B) {
    return { $$typeof: p, type: P, compare: B === void 0 ? null : B };
  }, Pe.startTransition = function(P) {
    var B = L.transition;
    L.transition = {};
    try {
      P();
    } finally {
      L.transition = B;
    }
  }, Pe.unstable_act = U, Pe.useCallback = function(P, B) {
    return R.current.useCallback(P, B);
  }, Pe.useContext = function(P) {
    return R.current.useContext(P);
  }, Pe.useDebugValue = function() {
  }, Pe.useDeferredValue = function(P) {
    return R.current.useDeferredValue(P);
  }, Pe.useEffect = function(P, B) {
    return R.current.useEffect(P, B);
  }, Pe.useId = function() {
    return R.current.useId();
  }, Pe.useImperativeHandle = function(P, B, me) {
    return R.current.useImperativeHandle(P, B, me);
  }, Pe.useInsertionEffect = function(P, B) {
    return R.current.useInsertionEffect(P, B);
  }, Pe.useLayoutEffect = function(P, B) {
    return R.current.useLayoutEffect(P, B);
  }, Pe.useMemo = function(P, B) {
    return R.current.useMemo(P, B);
  }, Pe.useReducer = function(P, B, me) {
    return R.current.useReducer(P, B, me);
  }, Pe.useRef = function(P) {
    return R.current.useRef(P);
  }, Pe.useState = function(P) {
    return R.current.useState(P);
  }, Pe.useSyncExternalStore = function(P, B, me) {
    return R.current.useSyncExternalStore(P, B, me);
  }, Pe.useTransition = function() {
    return R.current.useTransition();
  }, Pe.version = "18.3.1", Pe;
}
var Hh;
function Ml() {
  return Hh || (Hh = 1, Jc.exports = gy()), Jc.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uh;
function vy() {
  if (Uh) return co;
  Uh = 1;
  var e = Ml(), r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, l = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(d, h, p) {
    var b, v = {}, g = null, w = null;
    p !== void 0 && (g = "" + p), h.key !== void 0 && (g = "" + h.key), h.ref !== void 0 && (w = h.ref);
    for (b in h) i.call(h, b) && !c.hasOwnProperty(b) && (v[b] = h[b]);
    if (d && d.defaultProps) for (b in h = d.defaultProps, h) v[b] === void 0 && (v[b] = h[b]);
    return { $$typeof: r, type: d, key: g, ref: w, props: v, _owner: l.current };
  }
  return co.Fragment = n, co.jsx = u, co.jsxs = u, co;
}
var Wh;
function by() {
  return Wh || (Wh = 1, Zc.exports = vy()), Zc.exports;
}
var $ = by(), il = {}, eu = { exports: {} }, Ft = {}, tu = { exports: {} }, ru = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gh;
function yy() {
  return Gh || (Gh = 1, (function(e) {
    function r(L, N) {
      var U = L.length;
      L.push(N);
      e: for (; 0 < U; ) {
        var P = U - 1 >>> 1, B = L[P];
        if (0 < l(B, N)) L[P] = N, L[U] = B, U = P;
        else break e;
      }
    }
    function n(L) {
      return L.length === 0 ? null : L[0];
    }
    function i(L) {
      if (L.length === 0) return null;
      var N = L[0], U = L.pop();
      if (U !== N) {
        L[0] = U;
        e: for (var P = 0, B = L.length, me = B >>> 1; P < me; ) {
          var pe = 2 * (P + 1) - 1, G = L[pe], ce = pe + 1, ke = L[ce];
          if (0 > l(G, U)) ce < B && 0 > l(ke, G) ? (L[P] = ke, L[ce] = U, P = ce) : (L[P] = G, L[pe] = U, P = pe);
          else if (ce < B && 0 > l(ke, U)) L[P] = ke, L[ce] = U, P = ce;
          else break e;
        }
      }
      return N;
    }
    function l(L, N) {
      var U = L.sortIndex - N.sortIndex;
      return U !== 0 ? U : L.id - N.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      e.unstable_now = function() {
        return c.now();
      };
    } else {
      var u = Date, d = u.now();
      e.unstable_now = function() {
        return u.now() - d;
      };
    }
    var h = [], p = [], b = 1, v = null, g = 3, w = !1, k = !1, y = !1, C = typeof setTimeout == "function" ? setTimeout : null, I = typeof clearTimeout == "function" ? clearTimeout : null, F = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function D(L) {
      for (var N = n(p); N !== null; ) {
        if (N.callback === null) i(p);
        else if (N.startTime <= L) i(p), N.sortIndex = N.expirationTime, r(h, N);
        else break;
        N = n(p);
      }
    }
    function W(L) {
      if (y = !1, D(L), !k) if (n(h) !== null) k = !0, K(re);
      else {
        var N = n(p);
        N !== null && R(W, N.startTime - L);
      }
    }
    function re(L, N) {
      k = !1, y && (y = !1, I(ue), ue = -1), w = !0;
      var U = g;
      try {
        for (D(N), v = n(h); v !== null && (!(v.expirationTime > N) || L && !se()); ) {
          var P = v.callback;
          if (typeof P == "function") {
            v.callback = null, g = v.priorityLevel;
            var B = P(v.expirationTime <= N);
            N = e.unstable_now(), typeof B == "function" ? v.callback = B : v === n(h) && i(h), D(N);
          } else i(h);
          v = n(h);
        }
        if (v !== null) var me = !0;
        else {
          var pe = n(p);
          pe !== null && R(W, pe.startTime - N), me = !1;
        }
        return me;
      } finally {
        v = null, g = U, w = !1;
      }
    }
    var ee = !1, ne = null, ue = -1, ie = 5, ve = -1;
    function se() {
      return !(e.unstable_now() - ve < ie);
    }
    function j() {
      if (ne !== null) {
        var L = e.unstable_now();
        ve = L;
        var N = !0;
        try {
          N = ne(!0, L);
        } finally {
          N ? q() : (ee = !1, ne = null);
        }
      } else ee = !1;
    }
    var q;
    if (typeof F == "function") q = function() {
      F(j);
    };
    else if (typeof MessageChannel < "u") {
      var z = new MessageChannel(), Y = z.port2;
      z.port1.onmessage = j, q = function() {
        Y.postMessage(null);
      };
    } else q = function() {
      C(j, 0);
    };
    function K(L) {
      ne = L, ee || (ee = !0, q());
    }
    function R(L, N) {
      ue = C(function() {
        L(e.unstable_now());
      }, N);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(L) {
      L.callback = null;
    }, e.unstable_continueExecution = function() {
      k || w || (k = !0, K(re));
    }, e.unstable_forceFrameRate = function(L) {
      0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ie = 0 < L ? Math.floor(1e3 / L) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return g;
    }, e.unstable_getFirstCallbackNode = function() {
      return n(h);
    }, e.unstable_next = function(L) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = g;
      }
      var U = g;
      g = N;
      try {
        return L();
      } finally {
        g = U;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(L, N) {
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
      var U = g;
      g = L;
      try {
        return N();
      } finally {
        g = U;
      }
    }, e.unstable_scheduleCallback = function(L, N, U) {
      var P = e.unstable_now();
      switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? P + U : P) : U = P, L) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return B = U + B, L = { id: b++, callback: N, priorityLevel: L, startTime: U, expirationTime: B, sortIndex: -1 }, U > P ? (L.sortIndex = U, r(p, L), n(h) === null && L === n(p) && (y ? (I(ue), ue = -1) : y = !0, R(W, U - P))) : (L.sortIndex = B, r(h, L), k || w || (k = !0, K(re))), L;
    }, e.unstable_shouldYield = se, e.unstable_wrapCallback = function(L) {
      var N = g;
      return function() {
        var U = g;
        g = N;
        try {
          return L.apply(this, arguments);
        } finally {
          g = U;
        }
      };
    };
  })(ru)), ru;
}
var Yh;
function wy() {
  return Yh || (Yh = 1, tu.exports = yy()), tu.exports;
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
var qh;
function xy() {
  if (qh) return Ft;
  qh = 1;
  var e = Ml(), r = wy();
  function n(t) {
    for (var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, o = 1; o < arguments.length; o++) a += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + t + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var i = /* @__PURE__ */ new Set(), l = {};
  function c(t, a) {
    u(t, a), u(t + "Capture", a);
  }
  function u(t, a) {
    for (l[t] = a, t = 0; t < a.length; t++) i.add(a[t]);
  }
  var d = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), h = Object.prototype.hasOwnProperty, p = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, b = {}, v = {};
  function g(t) {
    return h.call(v, t) ? !0 : h.call(b, t) ? !1 : p.test(t) ? v[t] = !0 : (b[t] = !0, !1);
  }
  function w(t, a, o, s) {
    if (o !== null && o.type === 0) return !1;
    switch (typeof a) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s ? !1 : o !== null ? !o.acceptsBooleans : (t = t.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-");
      default:
        return !1;
    }
  }
  function k(t, a, o, s) {
    if (a === null || typeof a > "u" || w(t, a, o, s)) return !0;
    if (s) return !1;
    if (o !== null) switch (o.type) {
      case 3:
        return !a;
      case 4:
        return a === !1;
      case 5:
        return isNaN(a);
      case 6:
        return isNaN(a) || 1 > a;
    }
    return !1;
  }
  function y(t, a, o, s, f, m, x) {
    this.acceptsBooleans = a === 2 || a === 3 || a === 4, this.attributeName = s, this.attributeNamespace = f, this.mustUseProperty = o, this.propertyName = t, this.type = a, this.sanitizeURL = m, this.removeEmptyString = x;
  }
  var C = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    C[t] = new y(t, 0, !1, t, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var a = t[0];
    C[a] = new y(a, 1, !1, t[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    C[t] = new y(t, 2, !1, t.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    C[t] = new y(t, 2, !1, t, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    C[t] = new y(t, 3, !1, t.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(t) {
    C[t] = new y(t, 3, !0, t, null, !1, !1);
  }), ["capture", "download"].forEach(function(t) {
    C[t] = new y(t, 4, !1, t, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(t) {
    C[t] = new y(t, 6, !1, t, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(t) {
    C[t] = new y(t, 5, !1, t.toLowerCase(), null, !1, !1);
  });
  var I = /[\-:]([a-z])/g;
  function F(t) {
    return t[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var a = t.replace(
      I,
      F
    );
    C[a] = new y(a, 1, !1, t, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var a = t.replace(I, F);
    C[a] = new y(a, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var a = t.replace(I, F);
    C[a] = new y(a, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(t) {
    C[t] = new y(t, 1, !1, t.toLowerCase(), null, !1, !1);
  }), C.xlinkHref = new y("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(t) {
    C[t] = new y(t, 1, !1, t.toLowerCase(), null, !0, !0);
  });
  function D(t, a, o, s) {
    var f = C.hasOwnProperty(a) ? C[a] : null;
    (f !== null ? f.type !== 0 : s || !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (k(a, o, f, s) && (o = null), s || f === null ? g(a) && (o === null ? t.removeAttribute(a) : t.setAttribute(a, "" + o)) : f.mustUseProperty ? t[f.propertyName] = o === null ? f.type === 3 ? !1 : "" : o : (a = f.attributeName, s = f.attributeNamespace, o === null ? t.removeAttribute(a) : (f = f.type, o = f === 3 || f === 4 && o === !0 ? "" : "" + o, s ? t.setAttributeNS(s, a, o) : t.setAttribute(a, o))));
  }
  var W = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, re = Symbol.for("react.element"), ee = Symbol.for("react.portal"), ne = Symbol.for("react.fragment"), ue = Symbol.for("react.strict_mode"), ie = Symbol.for("react.profiler"), ve = Symbol.for("react.provider"), se = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), z = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), L = Symbol.iterator;
  function N(t) {
    return t === null || typeof t != "object" ? null : (t = L && t[L] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var U = Object.assign, P;
  function B(t) {
    if (P === void 0) try {
      throw Error();
    } catch (o) {
      var a = o.stack.trim().match(/\n( *(at )?)/);
      P = a && a[1] || "";
    }
    return `
` + P + t;
  }
  var me = !1;
  function pe(t, a) {
    if (!t || me) return "";
    me = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (a) if (a = function() {
        throw Error();
      }, Object.defineProperty(a.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(a, []);
        } catch (V) {
          var s = V;
        }
        Reflect.construct(t, [], a);
      } else {
        try {
          a.call();
        } catch (V) {
          s = V;
        }
        t.call(a.prototype);
      }
      else {
        try {
          throw Error();
        } catch (V) {
          s = V;
        }
        t();
      }
    } catch (V) {
      if (V && s && typeof V.stack == "string") {
        for (var f = V.stack.split(`
`), m = s.stack.split(`
`), x = f.length - 1, E = m.length - 1; 1 <= x && 0 <= E && f[x] !== m[E]; ) E--;
        for (; 1 <= x && 0 <= E; x--, E--) if (f[x] !== m[E]) {
          if (x !== 1 || E !== 1)
            do
              if (x--, E--, 0 > E || f[x] !== m[E]) {
                var T = `
` + f[x].replace(" at new ", " at ");
                return t.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", t.displayName)), T;
              }
            while (1 <= x && 0 <= E);
          break;
        }
      }
    } finally {
      me = !1, Error.prepareStackTrace = o;
    }
    return (t = t ? t.displayName || t.name : "") ? B(t) : "";
  }
  function G(t) {
    switch (t.tag) {
      case 5:
        return B(t.type);
      case 16:
        return B("Lazy");
      case 13:
        return B("Suspense");
      case 19:
        return B("SuspenseList");
      case 0:
      case 2:
      case 15:
        return t = pe(t.type, !1), t;
      case 11:
        return t = pe(t.type.render, !1), t;
      case 1:
        return t = pe(t.type, !0), t;
      default:
        return "";
    }
  }
  function ce(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case ne:
        return "Fragment";
      case ee:
        return "Portal";
      case ie:
        return "Profiler";
      case ue:
        return "StrictMode";
      case q:
        return "Suspense";
      case z:
        return "SuspenseList";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case se:
        return (t.displayName || "Context") + ".Consumer";
      case ve:
        return (t._context.displayName || "Context") + ".Provider";
      case j:
        var a = t.render;
        return t = t.displayName, t || (t = a.displayName || a.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case Y:
        return a = t.displayName || null, a !== null ? a : ce(t.type) || "Memo";
      case K:
        a = t._payload, t = t._init;
        try {
          return ce(t(a));
        } catch {
        }
    }
    return null;
  }
  function ke(t) {
    var a = t.type;
    switch (t.tag) {
      case 24:
        return "Cache";
      case 9:
        return (a.displayName || "Context") + ".Consumer";
      case 10:
        return (a._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return t = a.render, t = t.displayName || t.name || "", a.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return a;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ce(a);
      case 8:
        return a === ue ? "StrictMode" : "Mode";
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
        if (typeof a == "function") return a.displayName || a.name || null;
        if (typeof a == "string") return a;
    }
    return null;
  }
  function $e(t) {
    switch (typeof t) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Ie(t) {
    var a = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (a === "checkbox" || a === "radio");
  }
  function ot(t) {
    var a = Ie(t) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(t.constructor.prototype, a), s = "" + t[a];
    if (!t.hasOwnProperty(a) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var f = o.get, m = o.set;
      return Object.defineProperty(t, a, { configurable: !0, get: function() {
        return f.call(this);
      }, set: function(x) {
        s = "" + x, m.call(this, x);
      } }), Object.defineProperty(t, a, { enumerable: o.enumerable }), { getValue: function() {
        return s;
      }, setValue: function(x) {
        s = "" + x;
      }, stopTracking: function() {
        t._valueTracker = null, delete t[a];
      } };
    }
  }
  function ae(t) {
    t._valueTracker || (t._valueTracker = ot(t));
  }
  function oe(t) {
    if (!t) return !1;
    var a = t._valueTracker;
    if (!a) return !0;
    var o = a.getValue(), s = "";
    return t && (s = Ie(t) ? t.checked ? "true" : "false" : t.value), t = s, t !== o ? (a.setValue(t), !0) : !1;
  }
  function Xe(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function De(t, a) {
    var o = a.checked;
    return U({}, a, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? t._wrapperState.initialChecked });
  }
  function be(t, a) {
    var o = a.defaultValue == null ? "" : a.defaultValue, s = a.checked != null ? a.checked : a.defaultChecked;
    o = $e(a.value != null ? a.value : o), t._wrapperState = { initialChecked: s, initialValue: o, controlled: a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null };
  }
  function ze(t, a) {
    a = a.checked, a != null && D(t, "checked", a, !1);
  }
  function sr(t, a) {
    ze(t, a);
    var o = $e(a.value), s = a.type;
    if (o != null) s === "number" ? (o === 0 && t.value === "" || t.value != o) && (t.value = "" + o) : t.value !== "" + o && (t.value = "" + o);
    else if (s === "submit" || s === "reset") {
      t.removeAttribute("value");
      return;
    }
    a.hasOwnProperty("value") ? un(t, a.type, o) : a.hasOwnProperty("defaultValue") && un(t, a.type, $e(a.defaultValue)), a.checked == null && a.defaultChecked != null && (t.defaultChecked = !!a.defaultChecked);
  }
  function cn(t, a, o) {
    if (a.hasOwnProperty("value") || a.hasOwnProperty("defaultValue")) {
      var s = a.type;
      if (!(s !== "submit" && s !== "reset" || a.value !== void 0 && a.value !== null)) return;
      a = "" + t._wrapperState.initialValue, o || a === t.value || (t.value = a), t.defaultValue = a;
    }
    o = t.name, o !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, o !== "" && (t.name = o);
  }
  function un(t, a, o) {
    (a !== "number" || Xe(t.ownerDocument) !== t) && (o == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + o && (t.defaultValue = "" + o));
  }
  var Ca = Array.isArray;
  function Nn(t, a, o, s) {
    if (t = t.options, a) {
      a = {};
      for (var f = 0; f < o.length; f++) a["$" + o[f]] = !0;
      for (o = 0; o < t.length; o++) f = a.hasOwnProperty("$" + t[o].value), t[o].selected !== f && (t[o].selected = f), f && s && (t[o].defaultSelected = !0);
    } else {
      for (o = "" + $e(o), a = null, f = 0; f < t.length; f++) {
        if (t[f].value === o) {
          t[f].selected = !0, s && (t[f].defaultSelected = !0);
          return;
        }
        a !== null || t[f].disabled || (a = t[f]);
      }
      a !== null && (a.selected = !0);
    }
  }
  function ss(t, a) {
    if (a.dangerouslySetInnerHTML != null) throw Error(n(91));
    return U({}, a, { value: void 0, defaultValue: void 0, children: "" + t._wrapperState.initialValue });
  }
  function Zd(t, a) {
    var o = a.value;
    if (o == null) {
      if (o = a.children, a = a.defaultValue, o != null) {
        if (a != null) throw Error(n(92));
        if (Ca(o)) {
          if (1 < o.length) throw Error(n(93));
          o = o[0];
        }
        a = o;
      }
      a == null && (a = ""), o = a;
    }
    t._wrapperState = { initialValue: $e(o) };
  }
  function Jd(t, a) {
    var o = $e(a.value), s = $e(a.defaultValue);
    o != null && (o = "" + o, o !== t.value && (t.value = o), a.defaultValue == null && t.defaultValue !== o && (t.defaultValue = o)), s != null && (t.defaultValue = "" + s);
  }
  function ef(t) {
    var a = t.textContent;
    a === t._wrapperState.initialValue && a !== "" && a !== null && (t.value = a);
  }
  function tf(t) {
    switch (t) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function cs(t, a) {
    return t == null || t === "http://www.w3.org/1999/xhtml" ? tf(a) : t === "http://www.w3.org/2000/svg" && a === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t;
  }
  var Zo, rf = (function(t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(a, o, s, f) {
      MSApp.execUnsafeLocalFunction(function() {
        return t(a, o, s, f);
      });
    } : t;
  })(function(t, a) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t) t.innerHTML = a;
    else {
      for (Zo = Zo || document.createElement("div"), Zo.innerHTML = "<svg>" + a.valueOf().toString() + "</svg>", a = Zo.firstChild; t.firstChild; ) t.removeChild(t.firstChild);
      for (; a.firstChild; ) t.appendChild(a.firstChild);
    }
  });
  function _a(t, a) {
    if (a) {
      var o = t.firstChild;
      if (o && o === t.lastChild && o.nodeType === 3) {
        o.nodeValue = a;
        return;
      }
    }
    t.textContent = a;
  }
  var Ea = {
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
  }, yb = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ea).forEach(function(t) {
    yb.forEach(function(a) {
      a = a + t.charAt(0).toUpperCase() + t.substring(1), Ea[a] = Ea[t];
    });
  });
  function nf(t, a, o) {
    return a == null || typeof a == "boolean" || a === "" ? "" : o || typeof a != "number" || a === 0 || Ea.hasOwnProperty(t) && Ea[t] ? ("" + a).trim() : a + "px";
  }
  function af(t, a) {
    t = t.style;
    for (var o in a) if (a.hasOwnProperty(o)) {
      var s = o.indexOf("--") === 0, f = nf(o, a[o], s);
      o === "float" && (o = "cssFloat"), s ? t.setProperty(o, f) : t[o] = f;
    }
  }
  var wb = U({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function us(t, a) {
    if (a) {
      if (wb[t] && (a.children != null || a.dangerouslySetInnerHTML != null)) throw Error(n(137, t));
      if (a.dangerouslySetInnerHTML != null) {
        if (a.children != null) throw Error(n(60));
        if (typeof a.dangerouslySetInnerHTML != "object" || !("__html" in a.dangerouslySetInnerHTML)) throw Error(n(61));
      }
      if (a.style != null && typeof a.style != "object") throw Error(n(62));
    }
  }
  function ds(t, a) {
    if (t.indexOf("-") === -1) return typeof a.is == "string";
    switch (t) {
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
  var fs = null;
  function ps(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var hs = null, An = null, In = null;
  function of(t) {
    if (t = Ya(t)) {
      if (typeof hs != "function") throw Error(n(280));
      var a = t.stateNode;
      a && (a = xi(a), hs(t.stateNode, t.type, a));
    }
  }
  function lf(t) {
    An ? In ? In.push(t) : In = [t] : An = t;
  }
  function sf() {
    if (An) {
      var t = An, a = In;
      if (In = An = null, of(t), a) for (t = 0; t < a.length; t++) of(a[t]);
    }
  }
  function cf(t, a) {
    return t(a);
  }
  function uf() {
  }
  var ms = !1;
  function df(t, a, o) {
    if (ms) return t(a, o);
    ms = !0;
    try {
      return cf(t, a, o);
    } finally {
      ms = !1, (An !== null || In !== null) && (uf(), sf());
    }
  }
  function $a(t, a) {
    var o = t.stateNode;
    if (o === null) return null;
    var s = xi(o);
    if (s === null) return null;
    o = s[a];
    e: switch (a) {
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
        (s = !s.disabled) || (t = t.type, s = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !s;
        break e;
      default:
        t = !1;
    }
    if (t) return null;
    if (o && typeof o != "function") throw Error(n(231, a, typeof o));
    return o;
  }
  var gs = !1;
  if (d) try {
    var Pa = {};
    Object.defineProperty(Pa, "passive", { get: function() {
      gs = !0;
    } }), window.addEventListener("test", Pa, Pa), window.removeEventListener("test", Pa, Pa);
  } catch {
    gs = !1;
  }
  function xb(t, a, o, s, f, m, x, E, T) {
    var V = Array.prototype.slice.call(arguments, 3);
    try {
      a.apply(o, V);
    } catch (X) {
      this.onError(X);
    }
  }
  var Fa = !1, Jo = null, ei = !1, vs = null, kb = { onError: function(t) {
    Fa = !0, Jo = t;
  } };
  function Sb(t, a, o, s, f, m, x, E, T) {
    Fa = !1, Jo = null, xb.apply(kb, arguments);
  }
  function Cb(t, a, o, s, f, m, x, E, T) {
    if (Sb.apply(this, arguments), Fa) {
      if (Fa) {
        var V = Jo;
        Fa = !1, Jo = null;
      } else throw Error(n(198));
      ei || (ei = !0, vs = V);
    }
  }
  function dn(t) {
    var a = t, o = t;
    if (t.alternate) for (; a.return; ) a = a.return;
    else {
      t = a;
      do
        a = t, (a.flags & 4098) !== 0 && (o = a.return), t = a.return;
      while (t);
    }
    return a.tag === 3 ? o : null;
  }
  function ff(t) {
    if (t.tag === 13) {
      var a = t.memoizedState;
      if (a === null && (t = t.alternate, t !== null && (a = t.memoizedState)), a !== null) return a.dehydrated;
    }
    return null;
  }
  function pf(t) {
    if (dn(t) !== t) throw Error(n(188));
  }
  function _b(t) {
    var a = t.alternate;
    if (!a) {
      if (a = dn(t), a === null) throw Error(n(188));
      return a !== t ? null : t;
    }
    for (var o = t, s = a; ; ) {
      var f = o.return;
      if (f === null) break;
      var m = f.alternate;
      if (m === null) {
        if (s = f.return, s !== null) {
          o = s;
          continue;
        }
        break;
      }
      if (f.child === m.child) {
        for (m = f.child; m; ) {
          if (m === o) return pf(f), t;
          if (m === s) return pf(f), a;
          m = m.sibling;
        }
        throw Error(n(188));
      }
      if (o.return !== s.return) o = f, s = m;
      else {
        for (var x = !1, E = f.child; E; ) {
          if (E === o) {
            x = !0, o = f, s = m;
            break;
          }
          if (E === s) {
            x = !0, s = f, o = m;
            break;
          }
          E = E.sibling;
        }
        if (!x) {
          for (E = m.child; E; ) {
            if (E === o) {
              x = !0, o = m, s = f;
              break;
            }
            if (E === s) {
              x = !0, s = m, o = f;
              break;
            }
            E = E.sibling;
          }
          if (!x) throw Error(n(189));
        }
      }
      if (o.alternate !== s) throw Error(n(190));
    }
    if (o.tag !== 3) throw Error(n(188));
    return o.stateNode.current === o ? t : a;
  }
  function hf(t) {
    return t = _b(t), t !== null ? mf(t) : null;
  }
  function mf(t) {
    if (t.tag === 5 || t.tag === 6) return t;
    for (t = t.child; t !== null; ) {
      var a = mf(t);
      if (a !== null) return a;
      t = t.sibling;
    }
    return null;
  }
  var gf = r.unstable_scheduleCallback, vf = r.unstable_cancelCallback, Eb = r.unstable_shouldYield, $b = r.unstable_requestPaint, Ze = r.unstable_now, Pb = r.unstable_getCurrentPriorityLevel, bs = r.unstable_ImmediatePriority, bf = r.unstable_UserBlockingPriority, ti = r.unstable_NormalPriority, Fb = r.unstable_LowPriority, yf = r.unstable_IdlePriority, ri = null, cr = null;
  function zb(t) {
    if (cr && typeof cr.onCommitFiberRoot == "function") try {
      cr.onCommitFiberRoot(ri, t, void 0, (t.current.flags & 128) === 128);
    } catch {
    }
  }
  var qt = Math.clz32 ? Math.clz32 : Ab, Tb = Math.log, Nb = Math.LN2;
  function Ab(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Tb(t) / Nb | 0) | 0;
  }
  var ni = 64, ai = 4194304;
  function za(t) {
    switch (t & -t) {
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
        return t & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return t & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return t;
    }
  }
  function oi(t, a) {
    var o = t.pendingLanes;
    if (o === 0) return 0;
    var s = 0, f = t.suspendedLanes, m = t.pingedLanes, x = o & 268435455;
    if (x !== 0) {
      var E = x & ~f;
      E !== 0 ? s = za(E) : (m &= x, m !== 0 && (s = za(m)));
    } else x = o & ~f, x !== 0 ? s = za(x) : m !== 0 && (s = za(m));
    if (s === 0) return 0;
    if (a !== 0 && a !== s && (a & f) === 0 && (f = s & -s, m = a & -a, f >= m || f === 16 && (m & 4194240) !== 0)) return a;
    if ((s & 4) !== 0 && (s |= o & 16), a = t.entangledLanes, a !== 0) for (t = t.entanglements, a &= s; 0 < a; ) o = 31 - qt(a), f = 1 << o, s |= t[o], a &= ~f;
    return s;
  }
  function Ib(t, a) {
    switch (t) {
      case 1:
      case 2:
      case 4:
        return a + 250;
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
        return a + 5e3;
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
  function Rb(t, a) {
    for (var o = t.suspendedLanes, s = t.pingedLanes, f = t.expirationTimes, m = t.pendingLanes; 0 < m; ) {
      var x = 31 - qt(m), E = 1 << x, T = f[x];
      T === -1 ? ((E & o) === 0 || (E & s) !== 0) && (f[x] = Ib(E, a)) : T <= a && (t.expiredLanes |= E), m &= ~E;
    }
  }
  function ys(t) {
    return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
  }
  function wf() {
    var t = ni;
    return ni <<= 1, (ni & 4194240) === 0 && (ni = 64), t;
  }
  function ws(t) {
    for (var a = [], o = 0; 31 > o; o++) a.push(t);
    return a;
  }
  function Ta(t, a, o) {
    t.pendingLanes |= a, a !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, a = 31 - qt(a), t[a] = o;
  }
  function Lb(t, a) {
    var o = t.pendingLanes & ~a;
    t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= a, t.mutableReadLanes &= a, t.entangledLanes &= a, a = t.entanglements;
    var s = t.eventTimes;
    for (t = t.expirationTimes; 0 < o; ) {
      var f = 31 - qt(o), m = 1 << f;
      a[f] = 0, s[f] = -1, t[f] = -1, o &= ~m;
    }
  }
  function xs(t, a) {
    var o = t.entangledLanes |= a;
    for (t = t.entanglements; o; ) {
      var s = 31 - qt(o), f = 1 << s;
      f & a | t[s] & a && (t[s] |= a), o &= ~f;
    }
  }
  var Le = 0;
  function xf(t) {
    return t &= -t, 1 < t ? 4 < t ? (t & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var kf, ks, Sf, Cf, _f, Ss = !1, ii = [], Lr = null, Mr = null, jr = null, Na = /* @__PURE__ */ new Map(), Aa = /* @__PURE__ */ new Map(), Dr = [], Mb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ef(t, a) {
    switch (t) {
      case "focusin":
      case "focusout":
        Lr = null;
        break;
      case "dragenter":
      case "dragleave":
        Mr = null;
        break;
      case "mouseover":
      case "mouseout":
        jr = null;
        break;
      case "pointerover":
      case "pointerout":
        Na.delete(a.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Aa.delete(a.pointerId);
    }
  }
  function Ia(t, a, o, s, f, m) {
    return t === null || t.nativeEvent !== m ? (t = { blockedOn: a, domEventName: o, eventSystemFlags: s, nativeEvent: m, targetContainers: [f] }, a !== null && (a = Ya(a), a !== null && ks(a)), t) : (t.eventSystemFlags |= s, a = t.targetContainers, f !== null && a.indexOf(f) === -1 && a.push(f), t);
  }
  function jb(t, a, o, s, f) {
    switch (a) {
      case "focusin":
        return Lr = Ia(Lr, t, a, o, s, f), !0;
      case "dragenter":
        return Mr = Ia(Mr, t, a, o, s, f), !0;
      case "mouseover":
        return jr = Ia(jr, t, a, o, s, f), !0;
      case "pointerover":
        var m = f.pointerId;
        return Na.set(m, Ia(Na.get(m) || null, t, a, o, s, f)), !0;
      case "gotpointercapture":
        return m = f.pointerId, Aa.set(m, Ia(Aa.get(m) || null, t, a, o, s, f)), !0;
    }
    return !1;
  }
  function $f(t) {
    var a = fn(t.target);
    if (a !== null) {
      var o = dn(a);
      if (o !== null) {
        if (a = o.tag, a === 13) {
          if (a = ff(o), a !== null) {
            t.blockedOn = a, _f(t.priority, function() {
              Sf(o);
            });
            return;
          }
        } else if (a === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function li(t) {
    if (t.blockedOn !== null) return !1;
    for (var a = t.targetContainers; 0 < a.length; ) {
      var o = _s(t.domEventName, t.eventSystemFlags, a[0], t.nativeEvent);
      if (o === null) {
        o = t.nativeEvent;
        var s = new o.constructor(o.type, o);
        fs = s, o.target.dispatchEvent(s), fs = null;
      } else return a = Ya(o), a !== null && ks(a), t.blockedOn = o, !1;
      a.shift();
    }
    return !0;
  }
  function Pf(t, a, o) {
    li(t) && o.delete(a);
  }
  function Db() {
    Ss = !1, Lr !== null && li(Lr) && (Lr = null), Mr !== null && li(Mr) && (Mr = null), jr !== null && li(jr) && (jr = null), Na.forEach(Pf), Aa.forEach(Pf);
  }
  function Ra(t, a) {
    t.blockedOn === a && (t.blockedOn = null, Ss || (Ss = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, Db)));
  }
  function La(t) {
    function a(f) {
      return Ra(f, t);
    }
    if (0 < ii.length) {
      Ra(ii[0], t);
      for (var o = 1; o < ii.length; o++) {
        var s = ii[o];
        s.blockedOn === t && (s.blockedOn = null);
      }
    }
    for (Lr !== null && Ra(Lr, t), Mr !== null && Ra(Mr, t), jr !== null && Ra(jr, t), Na.forEach(a), Aa.forEach(a), o = 0; o < Dr.length; o++) s = Dr[o], s.blockedOn === t && (s.blockedOn = null);
    for (; 0 < Dr.length && (o = Dr[0], o.blockedOn === null); ) $f(o), o.blockedOn === null && Dr.shift();
  }
  var Rn = W.ReactCurrentBatchConfig, si = !0;
  function Kb(t, a, o, s) {
    var f = Le, m = Rn.transition;
    Rn.transition = null;
    try {
      Le = 1, Cs(t, a, o, s);
    } finally {
      Le = f, Rn.transition = m;
    }
  }
  function Ob(t, a, o, s) {
    var f = Le, m = Rn.transition;
    Rn.transition = null;
    try {
      Le = 4, Cs(t, a, o, s);
    } finally {
      Le = f, Rn.transition = m;
    }
  }
  function Cs(t, a, o, s) {
    if (si) {
      var f = _s(t, a, o, s);
      if (f === null) Vs(t, a, s, ci, o), Ef(t, s);
      else if (jb(f, t, a, o, s)) s.stopPropagation();
      else if (Ef(t, s), a & 4 && -1 < Mb.indexOf(t)) {
        for (; f !== null; ) {
          var m = Ya(f);
          if (m !== null && kf(m), m = _s(t, a, o, s), m === null && Vs(t, a, s, ci, o), m === f) break;
          f = m;
        }
        f !== null && s.stopPropagation();
      } else Vs(t, a, s, null, o);
    }
  }
  var ci = null;
  function _s(t, a, o, s) {
    if (ci = null, t = ps(s), t = fn(t), t !== null) if (a = dn(t), a === null) t = null;
    else if (o = a.tag, o === 13) {
      if (t = ff(a), t !== null) return t;
      t = null;
    } else if (o === 3) {
      if (a.stateNode.current.memoizedState.isDehydrated) return a.tag === 3 ? a.stateNode.containerInfo : null;
      t = null;
    } else a !== t && (t = null);
    return ci = t, null;
  }
  function Ff(t) {
    switch (t) {
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
        switch (Pb()) {
          case bs:
            return 1;
          case bf:
            return 4;
          case ti:
          case Fb:
            return 16;
          case yf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Kr = null, Es = null, ui = null;
  function zf() {
    if (ui) return ui;
    var t, a = Es, o = a.length, s, f = "value" in Kr ? Kr.value : Kr.textContent, m = f.length;
    for (t = 0; t < o && a[t] === f[t]; t++) ;
    var x = o - t;
    for (s = 1; s <= x && a[o - s] === f[m - s]; s++) ;
    return ui = f.slice(t, 1 < s ? 1 - s : void 0);
  }
  function di(t) {
    var a = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function fi() {
    return !0;
  }
  function Tf() {
    return !1;
  }
  function It(t) {
    function a(o, s, f, m, x) {
      this._reactName = o, this._targetInst = f, this.type = s, this.nativeEvent = m, this.target = x, this.currentTarget = null;
      for (var E in t) t.hasOwnProperty(E) && (o = t[E], this[E] = o ? o(m) : m[E]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? fi : Tf, this.isPropagationStopped = Tf, this;
    }
    return U(a.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = fi);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = fi);
    }, persist: function() {
    }, isPersistent: fi }), a;
  }
  var Ln = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
    return t.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, $s = It(Ln), Ma = U({}, Ln, { view: 0, detail: 0 }), Vb = It(Ma), Ps, Fs, ja, pi = U({}, Ma, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ts, button: 0, buttons: 0, relatedTarget: function(t) {
    return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
  }, movementX: function(t) {
    return "movementX" in t ? t.movementX : (t !== ja && (ja && t.type === "mousemove" ? (Ps = t.screenX - ja.screenX, Fs = t.screenY - ja.screenY) : Fs = Ps = 0, ja = t), Ps);
  }, movementY: function(t) {
    return "movementY" in t ? t.movementY : Fs;
  } }), Nf = It(pi), Bb = U({}, pi, { dataTransfer: 0 }), Hb = It(Bb), Ub = U({}, Ma, { relatedTarget: 0 }), zs = It(Ub), Wb = U({}, Ln, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Gb = It(Wb), Yb = U({}, Ln, { clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  } }), qb = It(Yb), Qb = U({}, Ln, { data: 0 }), Af = It(Qb), Xb = {
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
  }, Zb = {
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
  }, Jb = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function e1(t) {
    var a = this.nativeEvent;
    return a.getModifierState ? a.getModifierState(t) : (t = Jb[t]) ? !!a[t] : !1;
  }
  function Ts() {
    return e1;
  }
  var t1 = U({}, Ma, { key: function(t) {
    if (t.key) {
      var a = Xb[t.key] || t.key;
      if (a !== "Unidentified") return a;
    }
    return t.type === "keypress" ? (t = di(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Zb[t.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ts, charCode: function(t) {
    return t.type === "keypress" ? di(t) : 0;
  }, keyCode: function(t) {
    return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  }, which: function(t) {
    return t.type === "keypress" ? di(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  } }), r1 = It(t1), n1 = U({}, pi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), If = It(n1), a1 = U({}, Ma, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ts }), o1 = It(a1), i1 = U({}, Ln, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), l1 = It(i1), s1 = U({}, pi, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), c1 = It(s1), u1 = [9, 13, 27, 32], Ns = d && "CompositionEvent" in window, Da = null;
  d && "documentMode" in document && (Da = document.documentMode);
  var d1 = d && "TextEvent" in window && !Da, Rf = d && (!Ns || Da && 8 < Da && 11 >= Da), Lf = " ", Mf = !1;
  function jf(t, a) {
    switch (t) {
      case "keyup":
        return u1.indexOf(a.keyCode) !== -1;
      case "keydown":
        return a.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Df(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Mn = !1;
  function f1(t, a) {
    switch (t) {
      case "compositionend":
        return Df(a);
      case "keypress":
        return a.which !== 32 ? null : (Mf = !0, Lf);
      case "textInput":
        return t = a.data, t === Lf && Mf ? null : t;
      default:
        return null;
    }
  }
  function p1(t, a) {
    if (Mn) return t === "compositionend" || !Ns && jf(t, a) ? (t = zf(), ui = Es = Kr = null, Mn = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(a.ctrlKey || a.altKey || a.metaKey) || a.ctrlKey && a.altKey) {
          if (a.char && 1 < a.char.length) return a.char;
          if (a.which) return String.fromCharCode(a.which);
        }
        return null;
      case "compositionend":
        return Rf && a.locale !== "ko" ? null : a.data;
      default:
        return null;
    }
  }
  var h1 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Kf(t) {
    var a = t && t.nodeName && t.nodeName.toLowerCase();
    return a === "input" ? !!h1[t.type] : a === "textarea";
  }
  function Of(t, a, o, s) {
    lf(s), a = bi(a, "onChange"), 0 < a.length && (o = new $s("onChange", "change", null, o, s), t.push({ event: o, listeners: a }));
  }
  var Ka = null, Oa = null;
  function m1(t) {
    op(t, 0);
  }
  function hi(t) {
    var a = Vn(t);
    if (oe(a)) return t;
  }
  function g1(t, a) {
    if (t === "change") return a;
  }
  var Vf = !1;
  if (d) {
    var As;
    if (d) {
      var Is = "oninput" in document;
      if (!Is) {
        var Bf = document.createElement("div");
        Bf.setAttribute("oninput", "return;"), Is = typeof Bf.oninput == "function";
      }
      As = Is;
    } else As = !1;
    Vf = As && (!document.documentMode || 9 < document.documentMode);
  }
  function Hf() {
    Ka && (Ka.detachEvent("onpropertychange", Uf), Oa = Ka = null);
  }
  function Uf(t) {
    if (t.propertyName === "value" && hi(Oa)) {
      var a = [];
      Of(a, Oa, t, ps(t)), df(m1, a);
    }
  }
  function v1(t, a, o) {
    t === "focusin" ? (Hf(), Ka = a, Oa = o, Ka.attachEvent("onpropertychange", Uf)) : t === "focusout" && Hf();
  }
  function b1(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return hi(Oa);
  }
  function y1(t, a) {
    if (t === "click") return hi(a);
  }
  function w1(t, a) {
    if (t === "input" || t === "change") return hi(a);
  }
  function x1(t, a) {
    return t === a && (t !== 0 || 1 / t === 1 / a) || t !== t && a !== a;
  }
  var Qt = typeof Object.is == "function" ? Object.is : x1;
  function Va(t, a) {
    if (Qt(t, a)) return !0;
    if (typeof t != "object" || t === null || typeof a != "object" || a === null) return !1;
    var o = Object.keys(t), s = Object.keys(a);
    if (o.length !== s.length) return !1;
    for (s = 0; s < o.length; s++) {
      var f = o[s];
      if (!h.call(a, f) || !Qt(t[f], a[f])) return !1;
    }
    return !0;
  }
  function Wf(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Gf(t, a) {
    var o = Wf(t);
    t = 0;
    for (var s; o; ) {
      if (o.nodeType === 3) {
        if (s = t + o.textContent.length, t <= a && s >= a) return { node: o, offset: a - t };
        t = s;
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
      o = Wf(o);
    }
  }
  function Yf(t, a) {
    return t && a ? t === a ? !0 : t && t.nodeType === 3 ? !1 : a && a.nodeType === 3 ? Yf(t, a.parentNode) : "contains" in t ? t.contains(a) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(a) & 16) : !1 : !1;
  }
  function qf() {
    for (var t = window, a = Xe(); a instanceof t.HTMLIFrameElement; ) {
      try {
        var o = typeof a.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o) t = a.contentWindow;
      else break;
      a = Xe(t.document);
    }
    return a;
  }
  function Rs(t) {
    var a = t && t.nodeName && t.nodeName.toLowerCase();
    return a && (a === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || a === "textarea" || t.contentEditable === "true");
  }
  function k1(t) {
    var a = qf(), o = t.focusedElem, s = t.selectionRange;
    if (a !== o && o && o.ownerDocument && Yf(o.ownerDocument.documentElement, o)) {
      if (s !== null && Rs(o)) {
        if (a = s.start, t = s.end, t === void 0 && (t = a), "selectionStart" in o) o.selectionStart = a, o.selectionEnd = Math.min(t, o.value.length);
        else if (t = (a = o.ownerDocument || document) && a.defaultView || window, t.getSelection) {
          t = t.getSelection();
          var f = o.textContent.length, m = Math.min(s.start, f);
          s = s.end === void 0 ? m : Math.min(s.end, f), !t.extend && m > s && (f = s, s = m, m = f), f = Gf(o, m);
          var x = Gf(
            o,
            s
          );
          f && x && (t.rangeCount !== 1 || t.anchorNode !== f.node || t.anchorOffset !== f.offset || t.focusNode !== x.node || t.focusOffset !== x.offset) && (a = a.createRange(), a.setStart(f.node, f.offset), t.removeAllRanges(), m > s ? (t.addRange(a), t.extend(x.node, x.offset)) : (a.setEnd(x.node, x.offset), t.addRange(a)));
        }
      }
      for (a = [], t = o; t = t.parentNode; ) t.nodeType === 1 && a.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < a.length; o++) t = a[o], t.element.scrollLeft = t.left, t.element.scrollTop = t.top;
    }
  }
  var S1 = d && "documentMode" in document && 11 >= document.documentMode, jn = null, Ls = null, Ba = null, Ms = !1;
  function Qf(t, a, o) {
    var s = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Ms || jn == null || jn !== Xe(s) || (s = jn, "selectionStart" in s && Rs(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), Ba && Va(Ba, s) || (Ba = s, s = bi(Ls, "onSelect"), 0 < s.length && (a = new $s("onSelect", "select", null, a, o), t.push({ event: a, listeners: s }), a.target = jn)));
  }
  function mi(t, a) {
    var o = {};
    return o[t.toLowerCase()] = a.toLowerCase(), o["Webkit" + t] = "webkit" + a, o["Moz" + t] = "moz" + a, o;
  }
  var Dn = { animationend: mi("Animation", "AnimationEnd"), animationiteration: mi("Animation", "AnimationIteration"), animationstart: mi("Animation", "AnimationStart"), transitionend: mi("Transition", "TransitionEnd") }, js = {}, Xf = {};
  d && (Xf = document.createElement("div").style, "AnimationEvent" in window || (delete Dn.animationend.animation, delete Dn.animationiteration.animation, delete Dn.animationstart.animation), "TransitionEvent" in window || delete Dn.transitionend.transition);
  function gi(t) {
    if (js[t]) return js[t];
    if (!Dn[t]) return t;
    var a = Dn[t], o;
    for (o in a) if (a.hasOwnProperty(o) && o in Xf) return js[t] = a[o];
    return t;
  }
  var Zf = gi("animationend"), Jf = gi("animationiteration"), ep = gi("animationstart"), tp = gi("transitionend"), rp = /* @__PURE__ */ new Map(), np = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Or(t, a) {
    rp.set(t, a), c(a, [t]);
  }
  for (var Ds = 0; Ds < np.length; Ds++) {
    var Ks = np[Ds], C1 = Ks.toLowerCase(), _1 = Ks[0].toUpperCase() + Ks.slice(1);
    Or(C1, "on" + _1);
  }
  Or(Zf, "onAnimationEnd"), Or(Jf, "onAnimationIteration"), Or(ep, "onAnimationStart"), Or("dblclick", "onDoubleClick"), Or("focusin", "onFocus"), Or("focusout", "onBlur"), Or(tp, "onTransitionEnd"), u("onMouseEnter", ["mouseout", "mouseover"]), u("onMouseLeave", ["mouseout", "mouseover"]), u("onPointerEnter", ["pointerout", "pointerover"]), u("onPointerLeave", ["pointerout", "pointerover"]), c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ha = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), E1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ha));
  function ap(t, a, o) {
    var s = t.type || "unknown-event";
    t.currentTarget = o, Cb(s, a, void 0, t), t.currentTarget = null;
  }
  function op(t, a) {
    a = (a & 4) !== 0;
    for (var o = 0; o < t.length; o++) {
      var s = t[o], f = s.event;
      s = s.listeners;
      e: {
        var m = void 0;
        if (a) for (var x = s.length - 1; 0 <= x; x--) {
          var E = s[x], T = E.instance, V = E.currentTarget;
          if (E = E.listener, T !== m && f.isPropagationStopped()) break e;
          ap(f, E, V), m = T;
        }
        else for (x = 0; x < s.length; x++) {
          if (E = s[x], T = E.instance, V = E.currentTarget, E = E.listener, T !== m && f.isPropagationStopped()) break e;
          ap(f, E, V), m = T;
        }
      }
    }
    if (ei) throw t = vs, ei = !1, vs = null, t;
  }
  function Ke(t, a) {
    var o = a[Ys];
    o === void 0 && (o = a[Ys] = /* @__PURE__ */ new Set());
    var s = t + "__bubble";
    o.has(s) || (ip(a, t, 2, !1), o.add(s));
  }
  function Os(t, a, o) {
    var s = 0;
    a && (s |= 4), ip(o, t, s, a);
  }
  var vi = "_reactListening" + Math.random().toString(36).slice(2);
  function Ua(t) {
    if (!t[vi]) {
      t[vi] = !0, i.forEach(function(o) {
        o !== "selectionchange" && (E1.has(o) || Os(o, !1, t), Os(o, !0, t));
      });
      var a = t.nodeType === 9 ? t : t.ownerDocument;
      a === null || a[vi] || (a[vi] = !0, Os("selectionchange", !1, a));
    }
  }
  function ip(t, a, o, s) {
    switch (Ff(a)) {
      case 1:
        var f = Kb;
        break;
      case 4:
        f = Ob;
        break;
      default:
        f = Cs;
    }
    o = f.bind(null, a, o, t), f = void 0, !gs || a !== "touchstart" && a !== "touchmove" && a !== "wheel" || (f = !0), s ? f !== void 0 ? t.addEventListener(a, o, { capture: !0, passive: f }) : t.addEventListener(a, o, !0) : f !== void 0 ? t.addEventListener(a, o, { passive: f }) : t.addEventListener(a, o, !1);
  }
  function Vs(t, a, o, s, f) {
    var m = s;
    if ((a & 1) === 0 && (a & 2) === 0 && s !== null) e: for (; ; ) {
      if (s === null) return;
      var x = s.tag;
      if (x === 3 || x === 4) {
        var E = s.stateNode.containerInfo;
        if (E === f || E.nodeType === 8 && E.parentNode === f) break;
        if (x === 4) for (x = s.return; x !== null; ) {
          var T = x.tag;
          if ((T === 3 || T === 4) && (T = x.stateNode.containerInfo, T === f || T.nodeType === 8 && T.parentNode === f)) return;
          x = x.return;
        }
        for (; E !== null; ) {
          if (x = fn(E), x === null) return;
          if (T = x.tag, T === 5 || T === 6) {
            s = m = x;
            continue e;
          }
          E = E.parentNode;
        }
      }
      s = s.return;
    }
    df(function() {
      var V = m, X = ps(o), Z = [];
      e: {
        var Q = rp.get(t);
        if (Q !== void 0) {
          var le = $s, fe = t;
          switch (t) {
            case "keypress":
              if (di(o) === 0) break e;
            case "keydown":
            case "keyup":
              le = r1;
              break;
            case "focusin":
              fe = "focus", le = zs;
              break;
            case "focusout":
              fe = "blur", le = zs;
              break;
            case "beforeblur":
            case "afterblur":
              le = zs;
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
              le = Nf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              le = Hb;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              le = o1;
              break;
            case Zf:
            case Jf:
            case ep:
              le = Gb;
              break;
            case tp:
              le = l1;
              break;
            case "scroll":
              le = Vb;
              break;
            case "wheel":
              le = c1;
              break;
            case "copy":
            case "cut":
            case "paste":
              le = qb;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              le = If;
          }
          var he = (a & 4) !== 0, Je = !he && t === "scroll", M = he ? Q !== null ? Q + "Capture" : null : Q;
          he = [];
          for (var A = V, O; A !== null; ) {
            O = A;
            var J = O.stateNode;
            if (O.tag === 5 && J !== null && (O = J, M !== null && (J = $a(A, M), J != null && he.push(Wa(A, J, O)))), Je) break;
            A = A.return;
          }
          0 < he.length && (Q = new le(Q, fe, null, o, X), Z.push({ event: Q, listeners: he }));
        }
      }
      if ((a & 7) === 0) {
        e: {
          if (Q = t === "mouseover" || t === "pointerover", le = t === "mouseout" || t === "pointerout", Q && o !== fs && (fe = o.relatedTarget || o.fromElement) && (fn(fe) || fe[br])) break e;
          if ((le || Q) && (Q = X.window === X ? X : (Q = X.ownerDocument) ? Q.defaultView || Q.parentWindow : window, le ? (fe = o.relatedTarget || o.toElement, le = V, fe = fe ? fn(fe) : null, fe !== null && (Je = dn(fe), fe !== Je || fe.tag !== 5 && fe.tag !== 6) && (fe = null)) : (le = null, fe = V), le !== fe)) {
            if (he = Nf, J = "onMouseLeave", M = "onMouseEnter", A = "mouse", (t === "pointerout" || t === "pointerover") && (he = If, J = "onPointerLeave", M = "onPointerEnter", A = "pointer"), Je = le == null ? Q : Vn(le), O = fe == null ? Q : Vn(fe), Q = new he(J, A + "leave", le, o, X), Q.target = Je, Q.relatedTarget = O, J = null, fn(X) === V && (he = new he(M, A + "enter", fe, o, X), he.target = O, he.relatedTarget = Je, J = he), Je = J, le && fe) t: {
              for (he = le, M = fe, A = 0, O = he; O; O = Kn(O)) A++;
              for (O = 0, J = M; J; J = Kn(J)) O++;
              for (; 0 < A - O; ) he = Kn(he), A--;
              for (; 0 < O - A; ) M = Kn(M), O--;
              for (; A--; ) {
                if (he === M || M !== null && he === M.alternate) break t;
                he = Kn(he), M = Kn(M);
              }
              he = null;
            }
            else he = null;
            le !== null && lp(Z, Q, le, he, !1), fe !== null && Je !== null && lp(Z, Je, fe, he, !0);
          }
        }
        e: {
          if (Q = V ? Vn(V) : window, le = Q.nodeName && Q.nodeName.toLowerCase(), le === "select" || le === "input" && Q.type === "file") var ge = g1;
          else if (Kf(Q)) if (Vf) ge = w1;
          else {
            ge = b1;
            var ye = v1;
          }
          else (le = Q.nodeName) && le.toLowerCase() === "input" && (Q.type === "checkbox" || Q.type === "radio") && (ge = y1);
          if (ge && (ge = ge(t, V))) {
            Of(Z, ge, o, X);
            break e;
          }
          ye && ye(t, Q, V), t === "focusout" && (ye = Q._wrapperState) && ye.controlled && Q.type === "number" && un(Q, "number", Q.value);
        }
        switch (ye = V ? Vn(V) : window, t) {
          case "focusin":
            (Kf(ye) || ye.contentEditable === "true") && (jn = ye, Ls = V, Ba = null);
            break;
          case "focusout":
            Ba = Ls = jn = null;
            break;
          case "mousedown":
            Ms = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ms = !1, Qf(Z, o, X);
            break;
          case "selectionchange":
            if (S1) break;
          case "keydown":
          case "keyup":
            Qf(Z, o, X);
        }
        var we;
        if (Ns) e: {
          switch (t) {
            case "compositionstart":
              var xe = "onCompositionStart";
              break e;
            case "compositionend":
              xe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              xe = "onCompositionUpdate";
              break e;
          }
          xe = void 0;
        }
        else Mn ? jf(t, o) && (xe = "onCompositionEnd") : t === "keydown" && o.keyCode === 229 && (xe = "onCompositionStart");
        xe && (Rf && o.locale !== "ko" && (Mn || xe !== "onCompositionStart" ? xe === "onCompositionEnd" && Mn && (we = zf()) : (Kr = X, Es = "value" in Kr ? Kr.value : Kr.textContent, Mn = !0)), ye = bi(V, xe), 0 < ye.length && (xe = new Af(xe, t, null, o, X), Z.push({ event: xe, listeners: ye }), we ? xe.data = we : (we = Df(o), we !== null && (xe.data = we)))), (we = d1 ? f1(t, o) : p1(t, o)) && (V = bi(V, "onBeforeInput"), 0 < V.length && (X = new Af("onBeforeInput", "beforeinput", null, o, X), Z.push({ event: X, listeners: V }), X.data = we));
      }
      op(Z, a);
    });
  }
  function Wa(t, a, o) {
    return { instance: t, listener: a, currentTarget: o };
  }
  function bi(t, a) {
    for (var o = a + "Capture", s = []; t !== null; ) {
      var f = t, m = f.stateNode;
      f.tag === 5 && m !== null && (f = m, m = $a(t, o), m != null && s.unshift(Wa(t, m, f)), m = $a(t, a), m != null && s.push(Wa(t, m, f))), t = t.return;
    }
    return s;
  }
  function Kn(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5);
    return t || null;
  }
  function lp(t, a, o, s, f) {
    for (var m = a._reactName, x = []; o !== null && o !== s; ) {
      var E = o, T = E.alternate, V = E.stateNode;
      if (T !== null && T === s) break;
      E.tag === 5 && V !== null && (E = V, f ? (T = $a(o, m), T != null && x.unshift(Wa(o, T, E))) : f || (T = $a(o, m), T != null && x.push(Wa(o, T, E)))), o = o.return;
    }
    x.length !== 0 && t.push({ event: a, listeners: x });
  }
  var $1 = /\r\n?/g, P1 = /\u0000|\uFFFD/g;
  function sp(t) {
    return (typeof t == "string" ? t : "" + t).replace($1, `
`).replace(P1, "");
  }
  function yi(t, a, o) {
    if (a = sp(a), sp(t) !== a && o) throw Error(n(425));
  }
  function wi() {
  }
  var Bs = null, Hs = null;
  function Us(t, a) {
    return t === "textarea" || t === "noscript" || typeof a.children == "string" || typeof a.children == "number" || typeof a.dangerouslySetInnerHTML == "object" && a.dangerouslySetInnerHTML !== null && a.dangerouslySetInnerHTML.__html != null;
  }
  var Ws = typeof setTimeout == "function" ? setTimeout : void 0, F1 = typeof clearTimeout == "function" ? clearTimeout : void 0, cp = typeof Promise == "function" ? Promise : void 0, z1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof cp < "u" ? function(t) {
    return cp.resolve(null).then(t).catch(T1);
  } : Ws;
  function T1(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Gs(t, a) {
    var o = a, s = 0;
    do {
      var f = o.nextSibling;
      if (t.removeChild(o), f && f.nodeType === 8) if (o = f.data, o === "/$") {
        if (s === 0) {
          t.removeChild(f), La(a);
          return;
        }
        s--;
      } else o !== "$" && o !== "$?" && o !== "$!" || s++;
      o = f;
    } while (o);
    La(a);
  }
  function Vr(t) {
    for (; t != null; t = t.nextSibling) {
      var a = t.nodeType;
      if (a === 1 || a === 3) break;
      if (a === 8) {
        if (a = t.data, a === "$" || a === "$!" || a === "$?") break;
        if (a === "/$") return null;
      }
    }
    return t;
  }
  function up(t) {
    t = t.previousSibling;
    for (var a = 0; t; ) {
      if (t.nodeType === 8) {
        var o = t.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (a === 0) return t;
          a--;
        } else o === "/$" && a++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  var On = Math.random().toString(36).slice(2), ur = "__reactFiber$" + On, Ga = "__reactProps$" + On, br = "__reactContainer$" + On, Ys = "__reactEvents$" + On, N1 = "__reactListeners$" + On, A1 = "__reactHandles$" + On;
  function fn(t) {
    var a = t[ur];
    if (a) return a;
    for (var o = t.parentNode; o; ) {
      if (a = o[br] || o[ur]) {
        if (o = a.alternate, a.child !== null || o !== null && o.child !== null) for (t = up(t); t !== null; ) {
          if (o = t[ur]) return o;
          t = up(t);
        }
        return a;
      }
      t = o, o = t.parentNode;
    }
    return null;
  }
  function Ya(t) {
    return t = t[ur] || t[br], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t;
  }
  function Vn(t) {
    if (t.tag === 5 || t.tag === 6) return t.stateNode;
    throw Error(n(33));
  }
  function xi(t) {
    return t[Ga] || null;
  }
  var qs = [], Bn = -1;
  function Br(t) {
    return { current: t };
  }
  function Oe(t) {
    0 > Bn || (t.current = qs[Bn], qs[Bn] = null, Bn--);
  }
  function je(t, a) {
    Bn++, qs[Bn] = t.current, t.current = a;
  }
  var Hr = {}, ht = Br(Hr), Ct = Br(!1), pn = Hr;
  function Hn(t, a) {
    var o = t.type.contextTypes;
    if (!o) return Hr;
    var s = t.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === a) return s.__reactInternalMemoizedMaskedChildContext;
    var f = {}, m;
    for (m in o) f[m] = a[m];
    return s && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = a, t.__reactInternalMemoizedMaskedChildContext = f), f;
  }
  function _t(t) {
    return t = t.childContextTypes, t != null;
  }
  function ki() {
    Oe(Ct), Oe(ht);
  }
  function dp(t, a, o) {
    if (ht.current !== Hr) throw Error(n(168));
    je(ht, a), je(Ct, o);
  }
  function fp(t, a, o) {
    var s = t.stateNode;
    if (a = a.childContextTypes, typeof s.getChildContext != "function") return o;
    s = s.getChildContext();
    for (var f in s) if (!(f in a)) throw Error(n(108, ke(t) || "Unknown", f));
    return U({}, o, s);
  }
  function Si(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || Hr, pn = ht.current, je(ht, t), je(Ct, Ct.current), !0;
  }
  function pp(t, a, o) {
    var s = t.stateNode;
    if (!s) throw Error(n(169));
    o ? (t = fp(t, a, pn), s.__reactInternalMemoizedMergedChildContext = t, Oe(Ct), Oe(ht), je(ht, t)) : Oe(Ct), je(Ct, o);
  }
  var yr = null, Ci = !1, Qs = !1;
  function hp(t) {
    yr === null ? yr = [t] : yr.push(t);
  }
  function I1(t) {
    Ci = !0, hp(t);
  }
  function Ur() {
    if (!Qs && yr !== null) {
      Qs = !0;
      var t = 0, a = Le;
      try {
        var o = yr;
        for (Le = 1; t < o.length; t++) {
          var s = o[t];
          do
            s = s(!0);
          while (s !== null);
        }
        yr = null, Ci = !1;
      } catch (f) {
        throw yr !== null && (yr = yr.slice(t + 1)), gf(bs, Ur), f;
      } finally {
        Le = a, Qs = !1;
      }
    }
    return null;
  }
  var Un = [], Wn = 0, _i = null, Ei = 0, Kt = [], Ot = 0, hn = null, wr = 1, xr = "";
  function mn(t, a) {
    Un[Wn++] = Ei, Un[Wn++] = _i, _i = t, Ei = a;
  }
  function mp(t, a, o) {
    Kt[Ot++] = wr, Kt[Ot++] = xr, Kt[Ot++] = hn, hn = t;
    var s = wr;
    t = xr;
    var f = 32 - qt(s) - 1;
    s &= ~(1 << f), o += 1;
    var m = 32 - qt(a) + f;
    if (30 < m) {
      var x = f - f % 5;
      m = (s & (1 << x) - 1).toString(32), s >>= x, f -= x, wr = 1 << 32 - qt(a) + f | o << f | s, xr = m + t;
    } else wr = 1 << m | o << f | s, xr = t;
  }
  function Xs(t) {
    t.return !== null && (mn(t, 1), mp(t, 1, 0));
  }
  function Zs(t) {
    for (; t === _i; ) _i = Un[--Wn], Un[Wn] = null, Ei = Un[--Wn], Un[Wn] = null;
    for (; t === hn; ) hn = Kt[--Ot], Kt[Ot] = null, xr = Kt[--Ot], Kt[Ot] = null, wr = Kt[--Ot], Kt[Ot] = null;
  }
  var Rt = null, Lt = null, He = !1, Xt = null;
  function gp(t, a) {
    var o = Ut(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = a, o.return = t, a = t.deletions, a === null ? (t.deletions = [o], t.flags |= 16) : a.push(o);
  }
  function vp(t, a) {
    switch (t.tag) {
      case 5:
        var o = t.type;
        return a = a.nodeType !== 1 || o.toLowerCase() !== a.nodeName.toLowerCase() ? null : a, a !== null ? (t.stateNode = a, Rt = t, Lt = Vr(a.firstChild), !0) : !1;
      case 6:
        return a = t.pendingProps === "" || a.nodeType !== 3 ? null : a, a !== null ? (t.stateNode = a, Rt = t, Lt = null, !0) : !1;
      case 13:
        return a = a.nodeType !== 8 ? null : a, a !== null ? (o = hn !== null ? { id: wr, overflow: xr } : null, t.memoizedState = { dehydrated: a, treeContext: o, retryLane: 1073741824 }, o = Ut(18, null, null, 0), o.stateNode = a, o.return = t, t.child = o, Rt = t, Lt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Js(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
  }
  function ec(t) {
    if (He) {
      var a = Lt;
      if (a) {
        var o = a;
        if (!vp(t, a)) {
          if (Js(t)) throw Error(n(418));
          a = Vr(o.nextSibling);
          var s = Rt;
          a && vp(t, a) ? gp(s, o) : (t.flags = t.flags & -4097 | 2, He = !1, Rt = t);
        }
      } else {
        if (Js(t)) throw Error(n(418));
        t.flags = t.flags & -4097 | 2, He = !1, Rt = t;
      }
    }
  }
  function bp(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; ) t = t.return;
    Rt = t;
  }
  function $i(t) {
    if (t !== Rt) return !1;
    if (!He) return bp(t), He = !0, !1;
    var a;
    if ((a = t.tag !== 3) && !(a = t.tag !== 5) && (a = t.type, a = a !== "head" && a !== "body" && !Us(t.type, t.memoizedProps)), a && (a = Lt)) {
      if (Js(t)) throw yp(), Error(n(418));
      for (; a; ) gp(t, a), a = Vr(a.nextSibling);
    }
    if (bp(t), t.tag === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(n(317));
      e: {
        for (t = t.nextSibling, a = 0; t; ) {
          if (t.nodeType === 8) {
            var o = t.data;
            if (o === "/$") {
              if (a === 0) {
                Lt = Vr(t.nextSibling);
                break e;
              }
              a--;
            } else o !== "$" && o !== "$!" && o !== "$?" || a++;
          }
          t = t.nextSibling;
        }
        Lt = null;
      }
    } else Lt = Rt ? Vr(t.stateNode.nextSibling) : null;
    return !0;
  }
  function yp() {
    for (var t = Lt; t; ) t = Vr(t.nextSibling);
  }
  function Gn() {
    Lt = Rt = null, He = !1;
  }
  function tc(t) {
    Xt === null ? Xt = [t] : Xt.push(t);
  }
  var R1 = W.ReactCurrentBatchConfig;
  function qa(t, a, o) {
    if (t = o.ref, t !== null && typeof t != "function" && typeof t != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1) throw Error(n(309));
          var s = o.stateNode;
        }
        if (!s) throw Error(n(147, t));
        var f = s, m = "" + t;
        return a !== null && a.ref !== null && typeof a.ref == "function" && a.ref._stringRef === m ? a.ref : (a = function(x) {
          var E = f.refs;
          x === null ? delete E[m] : E[m] = x;
        }, a._stringRef = m, a);
      }
      if (typeof t != "string") throw Error(n(284));
      if (!o._owner) throw Error(n(290, t));
    }
    return t;
  }
  function Pi(t, a) {
    throw t = Object.prototype.toString.call(a), Error(n(31, t === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : t));
  }
  function wp(t) {
    var a = t._init;
    return a(t._payload);
  }
  function xp(t) {
    function a(M, A) {
      if (t) {
        var O = M.deletions;
        O === null ? (M.deletions = [A], M.flags |= 16) : O.push(A);
      }
    }
    function o(M, A) {
      if (!t) return null;
      for (; A !== null; ) a(M, A), A = A.sibling;
      return null;
    }
    function s(M, A) {
      for (M = /* @__PURE__ */ new Map(); A !== null; ) A.key !== null ? M.set(A.key, A) : M.set(A.index, A), A = A.sibling;
      return M;
    }
    function f(M, A) {
      return M = Jr(M, A), M.index = 0, M.sibling = null, M;
    }
    function m(M, A, O) {
      return M.index = O, t ? (O = M.alternate, O !== null ? (O = O.index, O < A ? (M.flags |= 2, A) : O) : (M.flags |= 2, A)) : (M.flags |= 1048576, A);
    }
    function x(M) {
      return t && M.alternate === null && (M.flags |= 2), M;
    }
    function E(M, A, O, J) {
      return A === null || A.tag !== 6 ? (A = Wc(O, M.mode, J), A.return = M, A) : (A = f(A, O), A.return = M, A);
    }
    function T(M, A, O, J) {
      var ge = O.type;
      return ge === ne ? X(M, A, O.props.children, J, O.key) : A !== null && (A.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === K && wp(ge) === A.type) ? (J = f(A, O.props), J.ref = qa(M, A, O), J.return = M, J) : (J = Zi(O.type, O.key, O.props, null, M.mode, J), J.ref = qa(M, A, O), J.return = M, J);
    }
    function V(M, A, O, J) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== O.containerInfo || A.stateNode.implementation !== O.implementation ? (A = Gc(O, M.mode, J), A.return = M, A) : (A = f(A, O.children || []), A.return = M, A);
    }
    function X(M, A, O, J, ge) {
      return A === null || A.tag !== 7 ? (A = Sn(O, M.mode, J, ge), A.return = M, A) : (A = f(A, O), A.return = M, A);
    }
    function Z(M, A, O) {
      if (typeof A == "string" && A !== "" || typeof A == "number") return A = Wc("" + A, M.mode, O), A.return = M, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case re:
            return O = Zi(A.type, A.key, A.props, null, M.mode, O), O.ref = qa(M, null, A), O.return = M, O;
          case ee:
            return A = Gc(A, M.mode, O), A.return = M, A;
          case K:
            var J = A._init;
            return Z(M, J(A._payload), O);
        }
        if (Ca(A) || N(A)) return A = Sn(A, M.mode, O, null), A.return = M, A;
        Pi(M, A);
      }
      return null;
    }
    function Q(M, A, O, J) {
      var ge = A !== null ? A.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number") return ge !== null ? null : E(M, A, "" + O, J);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case re:
            return O.key === ge ? T(M, A, O, J) : null;
          case ee:
            return O.key === ge ? V(M, A, O, J) : null;
          case K:
            return ge = O._init, Q(
              M,
              A,
              ge(O._payload),
              J
            );
        }
        if (Ca(O) || N(O)) return ge !== null ? null : X(M, A, O, J, null);
        Pi(M, O);
      }
      return null;
    }
    function le(M, A, O, J, ge) {
      if (typeof J == "string" && J !== "" || typeof J == "number") return M = M.get(O) || null, E(A, M, "" + J, ge);
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case re:
            return M = M.get(J.key === null ? O : J.key) || null, T(A, M, J, ge);
          case ee:
            return M = M.get(J.key === null ? O : J.key) || null, V(A, M, J, ge);
          case K:
            var ye = J._init;
            return le(M, A, O, ye(J._payload), ge);
        }
        if (Ca(J) || N(J)) return M = M.get(O) || null, X(A, M, J, ge, null);
        Pi(A, J);
      }
      return null;
    }
    function fe(M, A, O, J) {
      for (var ge = null, ye = null, we = A, xe = A = 0, st = null; we !== null && xe < O.length; xe++) {
        we.index > xe ? (st = we, we = null) : st = we.sibling;
        var Ae = Q(M, we, O[xe], J);
        if (Ae === null) {
          we === null && (we = st);
          break;
        }
        t && we && Ae.alternate === null && a(M, we), A = m(Ae, A, xe), ye === null ? ge = Ae : ye.sibling = Ae, ye = Ae, we = st;
      }
      if (xe === O.length) return o(M, we), He && mn(M, xe), ge;
      if (we === null) {
        for (; xe < O.length; xe++) we = Z(M, O[xe], J), we !== null && (A = m(we, A, xe), ye === null ? ge = we : ye.sibling = we, ye = we);
        return He && mn(M, xe), ge;
      }
      for (we = s(M, we); xe < O.length; xe++) st = le(we, M, xe, O[xe], J), st !== null && (t && st.alternate !== null && we.delete(st.key === null ? xe : st.key), A = m(st, A, xe), ye === null ? ge = st : ye.sibling = st, ye = st);
      return t && we.forEach(function(en) {
        return a(M, en);
      }), He && mn(M, xe), ge;
    }
    function he(M, A, O, J) {
      var ge = N(O);
      if (typeof ge != "function") throw Error(n(150));
      if (O = ge.call(O), O == null) throw Error(n(151));
      for (var ye = ge = null, we = A, xe = A = 0, st = null, Ae = O.next(); we !== null && !Ae.done; xe++, Ae = O.next()) {
        we.index > xe ? (st = we, we = null) : st = we.sibling;
        var en = Q(M, we, Ae.value, J);
        if (en === null) {
          we === null && (we = st);
          break;
        }
        t && we && en.alternate === null && a(M, we), A = m(en, A, xe), ye === null ? ge = en : ye.sibling = en, ye = en, we = st;
      }
      if (Ae.done) return o(
        M,
        we
      ), He && mn(M, xe), ge;
      if (we === null) {
        for (; !Ae.done; xe++, Ae = O.next()) Ae = Z(M, Ae.value, J), Ae !== null && (A = m(Ae, A, xe), ye === null ? ge = Ae : ye.sibling = Ae, ye = Ae);
        return He && mn(M, xe), ge;
      }
      for (we = s(M, we); !Ae.done; xe++, Ae = O.next()) Ae = le(we, M, xe, Ae.value, J), Ae !== null && (t && Ae.alternate !== null && we.delete(Ae.key === null ? xe : Ae.key), A = m(Ae, A, xe), ye === null ? ge = Ae : ye.sibling = Ae, ye = Ae);
      return t && we.forEach(function(hy) {
        return a(M, hy);
      }), He && mn(M, xe), ge;
    }
    function Je(M, A, O, J) {
      if (typeof O == "object" && O !== null && O.type === ne && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case re:
            e: {
              for (var ge = O.key, ye = A; ye !== null; ) {
                if (ye.key === ge) {
                  if (ge = O.type, ge === ne) {
                    if (ye.tag === 7) {
                      o(M, ye.sibling), A = f(ye, O.props.children), A.return = M, M = A;
                      break e;
                    }
                  } else if (ye.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === K && wp(ge) === ye.type) {
                    o(M, ye.sibling), A = f(ye, O.props), A.ref = qa(M, ye, O), A.return = M, M = A;
                    break e;
                  }
                  o(M, ye);
                  break;
                } else a(M, ye);
                ye = ye.sibling;
              }
              O.type === ne ? (A = Sn(O.props.children, M.mode, J, O.key), A.return = M, M = A) : (J = Zi(O.type, O.key, O.props, null, M.mode, J), J.ref = qa(M, A, O), J.return = M, M = J);
            }
            return x(M);
          case ee:
            e: {
              for (ye = O.key; A !== null; ) {
                if (A.key === ye) if (A.tag === 4 && A.stateNode.containerInfo === O.containerInfo && A.stateNode.implementation === O.implementation) {
                  o(M, A.sibling), A = f(A, O.children || []), A.return = M, M = A;
                  break e;
                } else {
                  o(M, A);
                  break;
                }
                else a(M, A);
                A = A.sibling;
              }
              A = Gc(O, M.mode, J), A.return = M, M = A;
            }
            return x(M);
          case K:
            return ye = O._init, Je(M, A, ye(O._payload), J);
        }
        if (Ca(O)) return fe(M, A, O, J);
        if (N(O)) return he(M, A, O, J);
        Pi(M, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" ? (O = "" + O, A !== null && A.tag === 6 ? (o(M, A.sibling), A = f(A, O), A.return = M, M = A) : (o(M, A), A = Wc(O, M.mode, J), A.return = M, M = A), x(M)) : o(M, A);
    }
    return Je;
  }
  var Yn = xp(!0), kp = xp(!1), Fi = Br(null), zi = null, qn = null, rc = null;
  function nc() {
    rc = qn = zi = null;
  }
  function ac(t) {
    var a = Fi.current;
    Oe(Fi), t._currentValue = a;
  }
  function oc(t, a, o) {
    for (; t !== null; ) {
      var s = t.alternate;
      if ((t.childLanes & a) !== a ? (t.childLanes |= a, s !== null && (s.childLanes |= a)) : s !== null && (s.childLanes & a) !== a && (s.childLanes |= a), t === o) break;
      t = t.return;
    }
  }
  function Qn(t, a) {
    zi = t, rc = qn = null, t = t.dependencies, t !== null && t.firstContext !== null && ((t.lanes & a) !== 0 && (Et = !0), t.firstContext = null);
  }
  function Vt(t) {
    var a = t._currentValue;
    if (rc !== t) if (t = { context: t, memoizedValue: a, next: null }, qn === null) {
      if (zi === null) throw Error(n(308));
      qn = t, zi.dependencies = { lanes: 0, firstContext: t };
    } else qn = qn.next = t;
    return a;
  }
  var gn = null;
  function ic(t) {
    gn === null ? gn = [t] : gn.push(t);
  }
  function Sp(t, a, o, s) {
    var f = a.interleaved;
    return f === null ? (o.next = o, ic(a)) : (o.next = f.next, f.next = o), a.interleaved = o, kr(t, s);
  }
  function kr(t, a) {
    t.lanes |= a;
    var o = t.alternate;
    for (o !== null && (o.lanes |= a), o = t, t = t.return; t !== null; ) t.childLanes |= a, o = t.alternate, o !== null && (o.childLanes |= a), o = t, t = t.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var Wr = !1;
  function lc(t) {
    t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Cp(t, a) {
    t = t.updateQueue, a.updateQueue === t && (a.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, effects: t.effects });
  }
  function Sr(t, a) {
    return { eventTime: t, lane: a, tag: 0, payload: null, callback: null, next: null };
  }
  function Gr(t, a, o) {
    var s = t.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (Te & 2) !== 0) {
      var f = s.pending;
      return f === null ? a.next = a : (a.next = f.next, f.next = a), s.pending = a, kr(t, o);
    }
    return f = s.interleaved, f === null ? (a.next = a, ic(s)) : (a.next = f.next, f.next = a), s.interleaved = a, kr(t, o);
  }
  function Ti(t, a, o) {
    if (a = a.updateQueue, a !== null && (a = a.shared, (o & 4194240) !== 0)) {
      var s = a.lanes;
      s &= t.pendingLanes, o |= s, a.lanes = o, xs(t, o);
    }
  }
  function _p(t, a) {
    var o = t.updateQueue, s = t.alternate;
    if (s !== null && (s = s.updateQueue, o === s)) {
      var f = null, m = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var x = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          m === null ? f = m = x : m = m.next = x, o = o.next;
        } while (o !== null);
        m === null ? f = m = a : m = m.next = a;
      } else f = m = a;
      o = { baseState: s.baseState, firstBaseUpdate: f, lastBaseUpdate: m, shared: s.shared, effects: s.effects }, t.updateQueue = o;
      return;
    }
    t = o.lastBaseUpdate, t === null ? o.firstBaseUpdate = a : t.next = a, o.lastBaseUpdate = a;
  }
  function Ni(t, a, o, s) {
    var f = t.updateQueue;
    Wr = !1;
    var m = f.firstBaseUpdate, x = f.lastBaseUpdate, E = f.shared.pending;
    if (E !== null) {
      f.shared.pending = null;
      var T = E, V = T.next;
      T.next = null, x === null ? m = V : x.next = V, x = T;
      var X = t.alternate;
      X !== null && (X = X.updateQueue, E = X.lastBaseUpdate, E !== x && (E === null ? X.firstBaseUpdate = V : E.next = V, X.lastBaseUpdate = T));
    }
    if (m !== null) {
      var Z = f.baseState;
      x = 0, X = V = T = null, E = m;
      do {
        var Q = E.lane, le = E.eventTime;
        if ((s & Q) === Q) {
          X !== null && (X = X.next = {
            eventTime: le,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var fe = t, he = E;
            switch (Q = a, le = o, he.tag) {
              case 1:
                if (fe = he.payload, typeof fe == "function") {
                  Z = fe.call(le, Z, Q);
                  break e;
                }
                Z = fe;
                break e;
              case 3:
                fe.flags = fe.flags & -65537 | 128;
              case 0:
                if (fe = he.payload, Q = typeof fe == "function" ? fe.call(le, Z, Q) : fe, Q == null) break e;
                Z = U({}, Z, Q);
                break e;
              case 2:
                Wr = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (t.flags |= 64, Q = f.effects, Q === null ? f.effects = [E] : Q.push(E));
        } else le = { eventTime: le, lane: Q, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, X === null ? (V = X = le, T = Z) : X = X.next = le, x |= Q;
        if (E = E.next, E === null) {
          if (E = f.shared.pending, E === null) break;
          Q = E, E = Q.next, Q.next = null, f.lastBaseUpdate = Q, f.shared.pending = null;
        }
      } while (!0);
      if (X === null && (T = Z), f.baseState = T, f.firstBaseUpdate = V, f.lastBaseUpdate = X, a = f.shared.interleaved, a !== null) {
        f = a;
        do
          x |= f.lane, f = f.next;
        while (f !== a);
      } else m === null && (f.shared.lanes = 0);
      yn |= x, t.lanes = x, t.memoizedState = Z;
    }
  }
  function Ep(t, a, o) {
    if (t = a.effects, a.effects = null, t !== null) for (a = 0; a < t.length; a++) {
      var s = t[a], f = s.callback;
      if (f !== null) {
        if (s.callback = null, s = o, typeof f != "function") throw Error(n(191, f));
        f.call(s);
      }
    }
  }
  var Qa = {}, dr = Br(Qa), Xa = Br(Qa), Za = Br(Qa);
  function vn(t) {
    if (t === Qa) throw Error(n(174));
    return t;
  }
  function sc(t, a) {
    switch (je(Za, a), je(Xa, t), je(dr, Qa), t = a.nodeType, t) {
      case 9:
      case 11:
        a = (a = a.documentElement) ? a.namespaceURI : cs(null, "");
        break;
      default:
        t = t === 8 ? a.parentNode : a, a = t.namespaceURI || null, t = t.tagName, a = cs(a, t);
    }
    Oe(dr), je(dr, a);
  }
  function Xn() {
    Oe(dr), Oe(Xa), Oe(Za);
  }
  function $p(t) {
    vn(Za.current);
    var a = vn(dr.current), o = cs(a, t.type);
    a !== o && (je(Xa, t), je(dr, o));
  }
  function cc(t) {
    Xa.current === t && (Oe(dr), Oe(Xa));
  }
  var We = Br(0);
  function Ai(t) {
    for (var a = t; a !== null; ) {
      if (a.tag === 13) {
        var o = a.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!")) return a;
      } else if (a.tag === 19 && a.memoizedProps.revealOrder !== void 0) {
        if ((a.flags & 128) !== 0) return a;
      } else if (a.child !== null) {
        a.child.return = a, a = a.child;
        continue;
      }
      if (a === t) break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === t) return null;
        a = a.return;
      }
      a.sibling.return = a.return, a = a.sibling;
    }
    return null;
  }
  var uc = [];
  function dc() {
    for (var t = 0; t < uc.length; t++) uc[t]._workInProgressVersionPrimary = null;
    uc.length = 0;
  }
  var Ii = W.ReactCurrentDispatcher, fc = W.ReactCurrentBatchConfig, bn = 0, Ge = null, tt = null, it = null, Ri = !1, Ja = !1, eo = 0, L1 = 0;
  function mt() {
    throw Error(n(321));
  }
  function pc(t, a) {
    if (a === null) return !1;
    for (var o = 0; o < a.length && o < t.length; o++) if (!Qt(t[o], a[o])) return !1;
    return !0;
  }
  function hc(t, a, o, s, f, m) {
    if (bn = m, Ge = a, a.memoizedState = null, a.updateQueue = null, a.lanes = 0, Ii.current = t === null || t.memoizedState === null ? K1 : O1, t = o(s, f), Ja) {
      m = 0;
      do {
        if (Ja = !1, eo = 0, 25 <= m) throw Error(n(301));
        m += 1, it = tt = null, a.updateQueue = null, Ii.current = V1, t = o(s, f);
      } while (Ja);
    }
    if (Ii.current = ji, a = tt !== null && tt.next !== null, bn = 0, it = tt = Ge = null, Ri = !1, a) throw Error(n(300));
    return t;
  }
  function mc() {
    var t = eo !== 0;
    return eo = 0, t;
  }
  function fr() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return it === null ? Ge.memoizedState = it = t : it = it.next = t, it;
  }
  function Bt() {
    if (tt === null) {
      var t = Ge.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = tt.next;
    var a = it === null ? Ge.memoizedState : it.next;
    if (a !== null) it = a, tt = t;
    else {
      if (t === null) throw Error(n(310));
      tt = t, t = { memoizedState: tt.memoizedState, baseState: tt.baseState, baseQueue: tt.baseQueue, queue: tt.queue, next: null }, it === null ? Ge.memoizedState = it = t : it = it.next = t;
    }
    return it;
  }
  function to(t, a) {
    return typeof a == "function" ? a(t) : a;
  }
  function gc(t) {
    var a = Bt(), o = a.queue;
    if (o === null) throw Error(n(311));
    o.lastRenderedReducer = t;
    var s = tt, f = s.baseQueue, m = o.pending;
    if (m !== null) {
      if (f !== null) {
        var x = f.next;
        f.next = m.next, m.next = x;
      }
      s.baseQueue = f = m, o.pending = null;
    }
    if (f !== null) {
      m = f.next, s = s.baseState;
      var E = x = null, T = null, V = m;
      do {
        var X = V.lane;
        if ((bn & X) === X) T !== null && (T = T.next = { lane: 0, action: V.action, hasEagerState: V.hasEagerState, eagerState: V.eagerState, next: null }), s = V.hasEagerState ? V.eagerState : t(s, V.action);
        else {
          var Z = {
            lane: X,
            action: V.action,
            hasEagerState: V.hasEagerState,
            eagerState: V.eagerState,
            next: null
          };
          T === null ? (E = T = Z, x = s) : T = T.next = Z, Ge.lanes |= X, yn |= X;
        }
        V = V.next;
      } while (V !== null && V !== m);
      T === null ? x = s : T.next = E, Qt(s, a.memoizedState) || (Et = !0), a.memoizedState = s, a.baseState = x, a.baseQueue = T, o.lastRenderedState = s;
    }
    if (t = o.interleaved, t !== null) {
      f = t;
      do
        m = f.lane, Ge.lanes |= m, yn |= m, f = f.next;
      while (f !== t);
    } else f === null && (o.lanes = 0);
    return [a.memoizedState, o.dispatch];
  }
  function vc(t) {
    var a = Bt(), o = a.queue;
    if (o === null) throw Error(n(311));
    o.lastRenderedReducer = t;
    var s = o.dispatch, f = o.pending, m = a.memoizedState;
    if (f !== null) {
      o.pending = null;
      var x = f = f.next;
      do
        m = t(m, x.action), x = x.next;
      while (x !== f);
      Qt(m, a.memoizedState) || (Et = !0), a.memoizedState = m, a.baseQueue === null && (a.baseState = m), o.lastRenderedState = m;
    }
    return [m, s];
  }
  function Pp() {
  }
  function Fp(t, a) {
    var o = Ge, s = Bt(), f = a(), m = !Qt(s.memoizedState, f);
    if (m && (s.memoizedState = f, Et = !0), s = s.queue, bc(Np.bind(null, o, s, t), [t]), s.getSnapshot !== a || m || it !== null && it.memoizedState.tag & 1) {
      if (o.flags |= 2048, ro(9, Tp.bind(null, o, s, f, a), void 0, null), lt === null) throw Error(n(349));
      (bn & 30) !== 0 || zp(o, a, f);
    }
    return f;
  }
  function zp(t, a, o) {
    t.flags |= 16384, t = { getSnapshot: a, value: o }, a = Ge.updateQueue, a === null ? (a = { lastEffect: null, stores: null }, Ge.updateQueue = a, a.stores = [t]) : (o = a.stores, o === null ? a.stores = [t] : o.push(t));
  }
  function Tp(t, a, o, s) {
    a.value = o, a.getSnapshot = s, Ap(a) && Ip(t);
  }
  function Np(t, a, o) {
    return o(function() {
      Ap(a) && Ip(t);
    });
  }
  function Ap(t) {
    var a = t.getSnapshot;
    t = t.value;
    try {
      var o = a();
      return !Qt(t, o);
    } catch {
      return !0;
    }
  }
  function Ip(t) {
    var a = kr(t, 1);
    a !== null && tr(a, t, 1, -1);
  }
  function Rp(t) {
    var a = fr();
    return typeof t == "function" && (t = t()), a.memoizedState = a.baseState = t, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: to, lastRenderedState: t }, a.queue = t, t = t.dispatch = D1.bind(null, Ge, t), [a.memoizedState, t];
  }
  function ro(t, a, o, s) {
    return t = { tag: t, create: a, destroy: o, deps: s, next: null }, a = Ge.updateQueue, a === null ? (a = { lastEffect: null, stores: null }, Ge.updateQueue = a, a.lastEffect = t.next = t) : (o = a.lastEffect, o === null ? a.lastEffect = t.next = t : (s = o.next, o.next = t, t.next = s, a.lastEffect = t)), t;
  }
  function Lp() {
    return Bt().memoizedState;
  }
  function Li(t, a, o, s) {
    var f = fr();
    Ge.flags |= t, f.memoizedState = ro(1 | a, o, void 0, s === void 0 ? null : s);
  }
  function Mi(t, a, o, s) {
    var f = Bt();
    s = s === void 0 ? null : s;
    var m = void 0;
    if (tt !== null) {
      var x = tt.memoizedState;
      if (m = x.destroy, s !== null && pc(s, x.deps)) {
        f.memoizedState = ro(a, o, m, s);
        return;
      }
    }
    Ge.flags |= t, f.memoizedState = ro(1 | a, o, m, s);
  }
  function Mp(t, a) {
    return Li(8390656, 8, t, a);
  }
  function bc(t, a) {
    return Mi(2048, 8, t, a);
  }
  function jp(t, a) {
    return Mi(4, 2, t, a);
  }
  function Dp(t, a) {
    return Mi(4, 4, t, a);
  }
  function Kp(t, a) {
    if (typeof a == "function") return t = t(), a(t), function() {
      a(null);
    };
    if (a != null) return t = t(), a.current = t, function() {
      a.current = null;
    };
  }
  function Op(t, a, o) {
    return o = o != null ? o.concat([t]) : null, Mi(4, 4, Kp.bind(null, a, t), o);
  }
  function yc() {
  }
  function Vp(t, a) {
    var o = Bt();
    a = a === void 0 ? null : a;
    var s = o.memoizedState;
    return s !== null && a !== null && pc(a, s[1]) ? s[0] : (o.memoizedState = [t, a], t);
  }
  function Bp(t, a) {
    var o = Bt();
    a = a === void 0 ? null : a;
    var s = o.memoizedState;
    return s !== null && a !== null && pc(a, s[1]) ? s[0] : (t = t(), o.memoizedState = [t, a], t);
  }
  function Hp(t, a, o) {
    return (bn & 21) === 0 ? (t.baseState && (t.baseState = !1, Et = !0), t.memoizedState = o) : (Qt(o, a) || (o = wf(), Ge.lanes |= o, yn |= o, t.baseState = !0), a);
  }
  function M1(t, a) {
    var o = Le;
    Le = o !== 0 && 4 > o ? o : 4, t(!0);
    var s = fc.transition;
    fc.transition = {};
    try {
      t(!1), a();
    } finally {
      Le = o, fc.transition = s;
    }
  }
  function Up() {
    return Bt().memoizedState;
  }
  function j1(t, a, o) {
    var s = Xr(t);
    if (o = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null }, Wp(t)) Gp(a, o);
    else if (o = Sp(t, a, o, s), o !== null) {
      var f = xt();
      tr(o, t, s, f), Yp(o, a, s);
    }
  }
  function D1(t, a, o) {
    var s = Xr(t), f = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (Wp(t)) Gp(a, f);
    else {
      var m = t.alternate;
      if (t.lanes === 0 && (m === null || m.lanes === 0) && (m = a.lastRenderedReducer, m !== null)) try {
        var x = a.lastRenderedState, E = m(x, o);
        if (f.hasEagerState = !0, f.eagerState = E, Qt(E, x)) {
          var T = a.interleaved;
          T === null ? (f.next = f, ic(a)) : (f.next = T.next, T.next = f), a.interleaved = f;
          return;
        }
      } catch {
      } finally {
      }
      o = Sp(t, a, f, s), o !== null && (f = xt(), tr(o, t, s, f), Yp(o, a, s));
    }
  }
  function Wp(t) {
    var a = t.alternate;
    return t === Ge || a !== null && a === Ge;
  }
  function Gp(t, a) {
    Ja = Ri = !0;
    var o = t.pending;
    o === null ? a.next = a : (a.next = o.next, o.next = a), t.pending = a;
  }
  function Yp(t, a, o) {
    if ((o & 4194240) !== 0) {
      var s = a.lanes;
      s &= t.pendingLanes, o |= s, a.lanes = o, xs(t, o);
    }
  }
  var ji = { readContext: Vt, useCallback: mt, useContext: mt, useEffect: mt, useImperativeHandle: mt, useInsertionEffect: mt, useLayoutEffect: mt, useMemo: mt, useReducer: mt, useRef: mt, useState: mt, useDebugValue: mt, useDeferredValue: mt, useTransition: mt, useMutableSource: mt, useSyncExternalStore: mt, useId: mt, unstable_isNewReconciler: !1 }, K1 = { readContext: Vt, useCallback: function(t, a) {
    return fr().memoizedState = [t, a === void 0 ? null : a], t;
  }, useContext: Vt, useEffect: Mp, useImperativeHandle: function(t, a, o) {
    return o = o != null ? o.concat([t]) : null, Li(
      4194308,
      4,
      Kp.bind(null, a, t),
      o
    );
  }, useLayoutEffect: function(t, a) {
    return Li(4194308, 4, t, a);
  }, useInsertionEffect: function(t, a) {
    return Li(4, 2, t, a);
  }, useMemo: function(t, a) {
    var o = fr();
    return a = a === void 0 ? null : a, t = t(), o.memoizedState = [t, a], t;
  }, useReducer: function(t, a, o) {
    var s = fr();
    return a = o !== void 0 ? o(a) : a, s.memoizedState = s.baseState = a, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: a }, s.queue = t, t = t.dispatch = j1.bind(null, Ge, t), [s.memoizedState, t];
  }, useRef: function(t) {
    var a = fr();
    return t = { current: t }, a.memoizedState = t;
  }, useState: Rp, useDebugValue: yc, useDeferredValue: function(t) {
    return fr().memoizedState = t;
  }, useTransition: function() {
    var t = Rp(!1), a = t[0];
    return t = M1.bind(null, t[1]), fr().memoizedState = t, [a, t];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(t, a, o) {
    var s = Ge, f = fr();
    if (He) {
      if (o === void 0) throw Error(n(407));
      o = o();
    } else {
      if (o = a(), lt === null) throw Error(n(349));
      (bn & 30) !== 0 || zp(s, a, o);
    }
    f.memoizedState = o;
    var m = { value: o, getSnapshot: a };
    return f.queue = m, Mp(Np.bind(
      null,
      s,
      m,
      t
    ), [t]), s.flags |= 2048, ro(9, Tp.bind(null, s, m, o, a), void 0, null), o;
  }, useId: function() {
    var t = fr(), a = lt.identifierPrefix;
    if (He) {
      var o = xr, s = wr;
      o = (s & ~(1 << 32 - qt(s) - 1)).toString(32) + o, a = ":" + a + "R" + o, o = eo++, 0 < o && (a += "H" + o.toString(32)), a += ":";
    } else o = L1++, a = ":" + a + "r" + o.toString(32) + ":";
    return t.memoizedState = a;
  }, unstable_isNewReconciler: !1 }, O1 = {
    readContext: Vt,
    useCallback: Vp,
    useContext: Vt,
    useEffect: bc,
    useImperativeHandle: Op,
    useInsertionEffect: jp,
    useLayoutEffect: Dp,
    useMemo: Bp,
    useReducer: gc,
    useRef: Lp,
    useState: function() {
      return gc(to);
    },
    useDebugValue: yc,
    useDeferredValue: function(t) {
      var a = Bt();
      return Hp(a, tt.memoizedState, t);
    },
    useTransition: function() {
      var t = gc(to)[0], a = Bt().memoizedState;
      return [t, a];
    },
    useMutableSource: Pp,
    useSyncExternalStore: Fp,
    useId: Up,
    unstable_isNewReconciler: !1
  }, V1 = { readContext: Vt, useCallback: Vp, useContext: Vt, useEffect: bc, useImperativeHandle: Op, useInsertionEffect: jp, useLayoutEffect: Dp, useMemo: Bp, useReducer: vc, useRef: Lp, useState: function() {
    return vc(to);
  }, useDebugValue: yc, useDeferredValue: function(t) {
    var a = Bt();
    return tt === null ? a.memoizedState = t : Hp(a, tt.memoizedState, t);
  }, useTransition: function() {
    var t = vc(to)[0], a = Bt().memoizedState;
    return [t, a];
  }, useMutableSource: Pp, useSyncExternalStore: Fp, useId: Up, unstable_isNewReconciler: !1 };
  function Zt(t, a) {
    if (t && t.defaultProps) {
      a = U({}, a), t = t.defaultProps;
      for (var o in t) a[o] === void 0 && (a[o] = t[o]);
      return a;
    }
    return a;
  }
  function wc(t, a, o, s) {
    a = t.memoizedState, o = o(s, a), o = o == null ? a : U({}, a, o), t.memoizedState = o, t.lanes === 0 && (t.updateQueue.baseState = o);
  }
  var Di = { isMounted: function(t) {
    return (t = t._reactInternals) ? dn(t) === t : !1;
  }, enqueueSetState: function(t, a, o) {
    t = t._reactInternals;
    var s = xt(), f = Xr(t), m = Sr(s, f);
    m.payload = a, o != null && (m.callback = o), a = Gr(t, m, f), a !== null && (tr(a, t, f, s), Ti(a, t, f));
  }, enqueueReplaceState: function(t, a, o) {
    t = t._reactInternals;
    var s = xt(), f = Xr(t), m = Sr(s, f);
    m.tag = 1, m.payload = a, o != null && (m.callback = o), a = Gr(t, m, f), a !== null && (tr(a, t, f, s), Ti(a, t, f));
  }, enqueueForceUpdate: function(t, a) {
    t = t._reactInternals;
    var o = xt(), s = Xr(t), f = Sr(o, s);
    f.tag = 2, a != null && (f.callback = a), a = Gr(t, f, s), a !== null && (tr(a, t, s, o), Ti(a, t, s));
  } };
  function qp(t, a, o, s, f, m, x) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(s, m, x) : a.prototype && a.prototype.isPureReactComponent ? !Va(o, s) || !Va(f, m) : !0;
  }
  function Qp(t, a, o) {
    var s = !1, f = Hr, m = a.contextType;
    return typeof m == "object" && m !== null ? m = Vt(m) : (f = _t(a) ? pn : ht.current, s = a.contextTypes, m = (s = s != null) ? Hn(t, f) : Hr), a = new a(o, m), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = Di, t.stateNode = a, a._reactInternals = t, s && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = f, t.__reactInternalMemoizedMaskedChildContext = m), a;
  }
  function Xp(t, a, o, s) {
    t = a.state, typeof a.componentWillReceiveProps == "function" && a.componentWillReceiveProps(o, s), typeof a.UNSAFE_componentWillReceiveProps == "function" && a.UNSAFE_componentWillReceiveProps(o, s), a.state !== t && Di.enqueueReplaceState(a, a.state, null);
  }
  function xc(t, a, o, s) {
    var f = t.stateNode;
    f.props = o, f.state = t.memoizedState, f.refs = {}, lc(t);
    var m = a.contextType;
    typeof m == "object" && m !== null ? f.context = Vt(m) : (m = _t(a) ? pn : ht.current, f.context = Hn(t, m)), f.state = t.memoizedState, m = a.getDerivedStateFromProps, typeof m == "function" && (wc(t, a, m, o), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (a = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), a !== f.state && Di.enqueueReplaceState(f, f.state, null), Ni(t, o, f, s), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308);
  }
  function Zn(t, a) {
    try {
      var o = "", s = a;
      do
        o += G(s), s = s.return;
      while (s);
      var f = o;
    } catch (m) {
      f = `
Error generating stack: ` + m.message + `
` + m.stack;
    }
    return { value: t, source: a, stack: f, digest: null };
  }
  function kc(t, a, o) {
    return { value: t, source: null, stack: o ?? null, digest: a ?? null };
  }
  function Sc(t, a) {
    try {
      console.error(a.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var B1 = typeof WeakMap == "function" ? WeakMap : Map;
  function Zp(t, a, o) {
    o = Sr(-1, o), o.tag = 3, o.payload = { element: null };
    var s = a.value;
    return o.callback = function() {
      Wi || (Wi = !0, jc = s), Sc(t, a);
    }, o;
  }
  function Jp(t, a, o) {
    o = Sr(-1, o), o.tag = 3;
    var s = t.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var f = a.value;
      o.payload = function() {
        return s(f);
      }, o.callback = function() {
        Sc(t, a);
      };
    }
    var m = t.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (o.callback = function() {
      Sc(t, a), typeof s != "function" && (qr === null ? qr = /* @__PURE__ */ new Set([this]) : qr.add(this));
      var x = a.stack;
      this.componentDidCatch(a.value, { componentStack: x !== null ? x : "" });
    }), o;
  }
  function eh(t, a, o) {
    var s = t.pingCache;
    if (s === null) {
      s = t.pingCache = new B1();
      var f = /* @__PURE__ */ new Set();
      s.set(a, f);
    } else f = s.get(a), f === void 0 && (f = /* @__PURE__ */ new Set(), s.set(a, f));
    f.has(o) || (f.add(o), t = ny.bind(null, t, a, o), a.then(t, t));
  }
  function th(t) {
    do {
      var a;
      if ((a = t.tag === 13) && (a = t.memoizedState, a = a !== null ? a.dehydrated !== null : !0), a) return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function rh(t, a, o, s, f) {
    return (t.mode & 1) === 0 ? (t === a ? t.flags |= 65536 : (t.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (a = Sr(-1, 1), a.tag = 2, Gr(o, a, 1))), o.lanes |= 1), t) : (t.flags |= 65536, t.lanes = f, t);
  }
  var H1 = W.ReactCurrentOwner, Et = !1;
  function wt(t, a, o, s) {
    a.child = t === null ? kp(a, null, o, s) : Yn(a, t.child, o, s);
  }
  function nh(t, a, o, s, f) {
    o = o.render;
    var m = a.ref;
    return Qn(a, f), s = hc(t, a, o, s, m, f), o = mc(), t !== null && !Et ? (a.updateQueue = t.updateQueue, a.flags &= -2053, t.lanes &= ~f, Cr(t, a, f)) : (He && o && Xs(a), a.flags |= 1, wt(t, a, s, f), a.child);
  }
  function ah(t, a, o, s, f) {
    if (t === null) {
      var m = o.type;
      return typeof m == "function" && !Uc(m) && m.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (a.tag = 15, a.type = m, oh(t, a, m, s, f)) : (t = Zi(o.type, null, s, a, a.mode, f), t.ref = a.ref, t.return = a, a.child = t);
    }
    if (m = t.child, (t.lanes & f) === 0) {
      var x = m.memoizedProps;
      if (o = o.compare, o = o !== null ? o : Va, o(x, s) && t.ref === a.ref) return Cr(t, a, f);
    }
    return a.flags |= 1, t = Jr(m, s), t.ref = a.ref, t.return = a, a.child = t;
  }
  function oh(t, a, o, s, f) {
    if (t !== null) {
      var m = t.memoizedProps;
      if (Va(m, s) && t.ref === a.ref) if (Et = !1, a.pendingProps = s = m, (t.lanes & f) !== 0) (t.flags & 131072) !== 0 && (Et = !0);
      else return a.lanes = t.lanes, Cr(t, a, f);
    }
    return Cc(t, a, o, s, f);
  }
  function ih(t, a, o) {
    var s = a.pendingProps, f = s.children, m = t !== null ? t.memoizedState : null;
    if (s.mode === "hidden") if ((a.mode & 1) === 0) a.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, je(ea, Mt), Mt |= o;
    else {
      if ((o & 1073741824) === 0) return t = m !== null ? m.baseLanes | o : o, a.lanes = a.childLanes = 1073741824, a.memoizedState = { baseLanes: t, cachePool: null, transitions: null }, a.updateQueue = null, je(ea, Mt), Mt |= t, null;
      a.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = m !== null ? m.baseLanes : o, je(ea, Mt), Mt |= s;
    }
    else m !== null ? (s = m.baseLanes | o, a.memoizedState = null) : s = o, je(ea, Mt), Mt |= s;
    return wt(t, a, f, o), a.child;
  }
  function lh(t, a) {
    var o = a.ref;
    (t === null && o !== null || t !== null && t.ref !== o) && (a.flags |= 512, a.flags |= 2097152);
  }
  function Cc(t, a, o, s, f) {
    var m = _t(o) ? pn : ht.current;
    return m = Hn(a, m), Qn(a, f), o = hc(t, a, o, s, m, f), s = mc(), t !== null && !Et ? (a.updateQueue = t.updateQueue, a.flags &= -2053, t.lanes &= ~f, Cr(t, a, f)) : (He && s && Xs(a), a.flags |= 1, wt(t, a, o, f), a.child);
  }
  function sh(t, a, o, s, f) {
    if (_t(o)) {
      var m = !0;
      Si(a);
    } else m = !1;
    if (Qn(a, f), a.stateNode === null) Oi(t, a), Qp(a, o, s), xc(a, o, s, f), s = !0;
    else if (t === null) {
      var x = a.stateNode, E = a.memoizedProps;
      x.props = E;
      var T = x.context, V = o.contextType;
      typeof V == "object" && V !== null ? V = Vt(V) : (V = _t(o) ? pn : ht.current, V = Hn(a, V));
      var X = o.getDerivedStateFromProps, Z = typeof X == "function" || typeof x.getSnapshotBeforeUpdate == "function";
      Z || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (E !== s || T !== V) && Xp(a, x, s, V), Wr = !1;
      var Q = a.memoizedState;
      x.state = Q, Ni(a, s, x, f), T = a.memoizedState, E !== s || Q !== T || Ct.current || Wr ? (typeof X == "function" && (wc(a, o, X, s), T = a.memoizedState), (E = Wr || qp(a, o, E, s, Q, T, V)) ? (Z || typeof x.UNSAFE_componentWillMount != "function" && typeof x.componentWillMount != "function" || (typeof x.componentWillMount == "function" && x.componentWillMount(), typeof x.UNSAFE_componentWillMount == "function" && x.UNSAFE_componentWillMount()), typeof x.componentDidMount == "function" && (a.flags |= 4194308)) : (typeof x.componentDidMount == "function" && (a.flags |= 4194308), a.memoizedProps = s, a.memoizedState = T), x.props = s, x.state = T, x.context = V, s = E) : (typeof x.componentDidMount == "function" && (a.flags |= 4194308), s = !1);
    } else {
      x = a.stateNode, Cp(t, a), E = a.memoizedProps, V = a.type === a.elementType ? E : Zt(a.type, E), x.props = V, Z = a.pendingProps, Q = x.context, T = o.contextType, typeof T == "object" && T !== null ? T = Vt(T) : (T = _t(o) ? pn : ht.current, T = Hn(a, T));
      var le = o.getDerivedStateFromProps;
      (X = typeof le == "function" || typeof x.getSnapshotBeforeUpdate == "function") || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (E !== Z || Q !== T) && Xp(a, x, s, T), Wr = !1, Q = a.memoizedState, x.state = Q, Ni(a, s, x, f);
      var fe = a.memoizedState;
      E !== Z || Q !== fe || Ct.current || Wr ? (typeof le == "function" && (wc(a, o, le, s), fe = a.memoizedState), (V = Wr || qp(a, o, V, s, Q, fe, T) || !1) ? (X || typeof x.UNSAFE_componentWillUpdate != "function" && typeof x.componentWillUpdate != "function" || (typeof x.componentWillUpdate == "function" && x.componentWillUpdate(s, fe, T), typeof x.UNSAFE_componentWillUpdate == "function" && x.UNSAFE_componentWillUpdate(s, fe, T)), typeof x.componentDidUpdate == "function" && (a.flags |= 4), typeof x.getSnapshotBeforeUpdate == "function" && (a.flags |= 1024)) : (typeof x.componentDidUpdate != "function" || E === t.memoizedProps && Q === t.memoizedState || (a.flags |= 4), typeof x.getSnapshotBeforeUpdate != "function" || E === t.memoizedProps && Q === t.memoizedState || (a.flags |= 1024), a.memoizedProps = s, a.memoizedState = fe), x.props = s, x.state = fe, x.context = T, s = V) : (typeof x.componentDidUpdate != "function" || E === t.memoizedProps && Q === t.memoizedState || (a.flags |= 4), typeof x.getSnapshotBeforeUpdate != "function" || E === t.memoizedProps && Q === t.memoizedState || (a.flags |= 1024), s = !1);
    }
    return _c(t, a, o, s, m, f);
  }
  function _c(t, a, o, s, f, m) {
    lh(t, a);
    var x = (a.flags & 128) !== 0;
    if (!s && !x) return f && pp(a, o, !1), Cr(t, a, m);
    s = a.stateNode, H1.current = a;
    var E = x && typeof o.getDerivedStateFromError != "function" ? null : s.render();
    return a.flags |= 1, t !== null && x ? (a.child = Yn(a, t.child, null, m), a.child = Yn(a, null, E, m)) : wt(t, a, E, m), a.memoizedState = s.state, f && pp(a, o, !0), a.child;
  }
  function ch(t) {
    var a = t.stateNode;
    a.pendingContext ? dp(t, a.pendingContext, a.pendingContext !== a.context) : a.context && dp(t, a.context, !1), sc(t, a.containerInfo);
  }
  function uh(t, a, o, s, f) {
    return Gn(), tc(f), a.flags |= 256, wt(t, a, o, s), a.child;
  }
  var Ec = { dehydrated: null, treeContext: null, retryLane: 0 };
  function $c(t) {
    return { baseLanes: t, cachePool: null, transitions: null };
  }
  function dh(t, a, o) {
    var s = a.pendingProps, f = We.current, m = !1, x = (a.flags & 128) !== 0, E;
    if ((E = x) || (E = t !== null && t.memoizedState === null ? !1 : (f & 2) !== 0), E ? (m = !0, a.flags &= -129) : (t === null || t.memoizedState !== null) && (f |= 1), je(We, f & 1), t === null)
      return ec(a), t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? ((a.mode & 1) === 0 ? a.lanes = 1 : t.data === "$!" ? a.lanes = 8 : a.lanes = 1073741824, null) : (x = s.children, t = s.fallback, m ? (s = a.mode, m = a.child, x = { mode: "hidden", children: x }, (s & 1) === 0 && m !== null ? (m.childLanes = 0, m.pendingProps = x) : m = Ji(x, s, 0, null), t = Sn(t, s, o, null), m.return = a, t.return = a, m.sibling = t, a.child = m, a.child.memoizedState = $c(o), a.memoizedState = Ec, t) : Pc(a, x));
    if (f = t.memoizedState, f !== null && (E = f.dehydrated, E !== null)) return U1(t, a, x, s, E, f, o);
    if (m) {
      m = s.fallback, x = a.mode, f = t.child, E = f.sibling;
      var T = { mode: "hidden", children: s.children };
      return (x & 1) === 0 && a.child !== f ? (s = a.child, s.childLanes = 0, s.pendingProps = T, a.deletions = null) : (s = Jr(f, T), s.subtreeFlags = f.subtreeFlags & 14680064), E !== null ? m = Jr(E, m) : (m = Sn(m, x, o, null), m.flags |= 2), m.return = a, s.return = a, s.sibling = m, a.child = s, s = m, m = a.child, x = t.child.memoizedState, x = x === null ? $c(o) : { baseLanes: x.baseLanes | o, cachePool: null, transitions: x.transitions }, m.memoizedState = x, m.childLanes = t.childLanes & ~o, a.memoizedState = Ec, s;
    }
    return m = t.child, t = m.sibling, s = Jr(m, { mode: "visible", children: s.children }), (a.mode & 1) === 0 && (s.lanes = o), s.return = a, s.sibling = null, t !== null && (o = a.deletions, o === null ? (a.deletions = [t], a.flags |= 16) : o.push(t)), a.child = s, a.memoizedState = null, s;
  }
  function Pc(t, a) {
    return a = Ji({ mode: "visible", children: a }, t.mode, 0, null), a.return = t, t.child = a;
  }
  function Ki(t, a, o, s) {
    return s !== null && tc(s), Yn(a, t.child, null, o), t = Pc(a, a.pendingProps.children), t.flags |= 2, a.memoizedState = null, t;
  }
  function U1(t, a, o, s, f, m, x) {
    if (o)
      return a.flags & 256 ? (a.flags &= -257, s = kc(Error(n(422))), Ki(t, a, x, s)) : a.memoizedState !== null ? (a.child = t.child, a.flags |= 128, null) : (m = s.fallback, f = a.mode, s = Ji({ mode: "visible", children: s.children }, f, 0, null), m = Sn(m, f, x, null), m.flags |= 2, s.return = a, m.return = a, s.sibling = m, a.child = s, (a.mode & 1) !== 0 && Yn(a, t.child, null, x), a.child.memoizedState = $c(x), a.memoizedState = Ec, m);
    if ((a.mode & 1) === 0) return Ki(t, a, x, null);
    if (f.data === "$!") {
      if (s = f.nextSibling && f.nextSibling.dataset, s) var E = s.dgst;
      return s = E, m = Error(n(419)), s = kc(m, s, void 0), Ki(t, a, x, s);
    }
    if (E = (x & t.childLanes) !== 0, Et || E) {
      if (s = lt, s !== null) {
        switch (x & -x) {
          case 4:
            f = 2;
            break;
          case 16:
            f = 8;
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
            f = 32;
            break;
          case 536870912:
            f = 268435456;
            break;
          default:
            f = 0;
        }
        f = (f & (s.suspendedLanes | x)) !== 0 ? 0 : f, f !== 0 && f !== m.retryLane && (m.retryLane = f, kr(t, f), tr(s, t, f, -1));
      }
      return Hc(), s = kc(Error(n(421))), Ki(t, a, x, s);
    }
    return f.data === "$?" ? (a.flags |= 128, a.child = t.child, a = ay.bind(null, t), f._reactRetry = a, null) : (t = m.treeContext, Lt = Vr(f.nextSibling), Rt = a, He = !0, Xt = null, t !== null && (Kt[Ot++] = wr, Kt[Ot++] = xr, Kt[Ot++] = hn, wr = t.id, xr = t.overflow, hn = a), a = Pc(a, s.children), a.flags |= 4096, a);
  }
  function fh(t, a, o) {
    t.lanes |= a;
    var s = t.alternate;
    s !== null && (s.lanes |= a), oc(t.return, a, o);
  }
  function Fc(t, a, o, s, f) {
    var m = t.memoizedState;
    m === null ? t.memoizedState = { isBackwards: a, rendering: null, renderingStartTime: 0, last: s, tail: o, tailMode: f } : (m.isBackwards = a, m.rendering = null, m.renderingStartTime = 0, m.last = s, m.tail = o, m.tailMode = f);
  }
  function ph(t, a, o) {
    var s = a.pendingProps, f = s.revealOrder, m = s.tail;
    if (wt(t, a, s.children, o), s = We.current, (s & 2) !== 0) s = s & 1 | 2, a.flags |= 128;
    else {
      if (t !== null && (t.flags & 128) !== 0) e: for (t = a.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && fh(t, o, a);
        else if (t.tag === 19) fh(t, o, a);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === a) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === a) break e;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      s &= 1;
    }
    if (je(We, s), (a.mode & 1) === 0) a.memoizedState = null;
    else switch (f) {
      case "forwards":
        for (o = a.child, f = null; o !== null; ) t = o.alternate, t !== null && Ai(t) === null && (f = o), o = o.sibling;
        o = f, o === null ? (f = a.child, a.child = null) : (f = o.sibling, o.sibling = null), Fc(a, !1, f, o, m);
        break;
      case "backwards":
        for (o = null, f = a.child, a.child = null; f !== null; ) {
          if (t = f.alternate, t !== null && Ai(t) === null) {
            a.child = f;
            break;
          }
          t = f.sibling, f.sibling = o, o = f, f = t;
        }
        Fc(a, !0, o, null, m);
        break;
      case "together":
        Fc(a, !1, null, null, void 0);
        break;
      default:
        a.memoizedState = null;
    }
    return a.child;
  }
  function Oi(t, a) {
    (a.mode & 1) === 0 && t !== null && (t.alternate = null, a.alternate = null, a.flags |= 2);
  }
  function Cr(t, a, o) {
    if (t !== null && (a.dependencies = t.dependencies), yn |= a.lanes, (o & a.childLanes) === 0) return null;
    if (t !== null && a.child !== t.child) throw Error(n(153));
    if (a.child !== null) {
      for (t = a.child, o = Jr(t, t.pendingProps), a.child = o, o.return = a; t.sibling !== null; ) t = t.sibling, o = o.sibling = Jr(t, t.pendingProps), o.return = a;
      o.sibling = null;
    }
    return a.child;
  }
  function W1(t, a, o) {
    switch (a.tag) {
      case 3:
        ch(a), Gn();
        break;
      case 5:
        $p(a);
        break;
      case 1:
        _t(a.type) && Si(a);
        break;
      case 4:
        sc(a, a.stateNode.containerInfo);
        break;
      case 10:
        var s = a.type._context, f = a.memoizedProps.value;
        je(Fi, s._currentValue), s._currentValue = f;
        break;
      case 13:
        if (s = a.memoizedState, s !== null)
          return s.dehydrated !== null ? (je(We, We.current & 1), a.flags |= 128, null) : (o & a.child.childLanes) !== 0 ? dh(t, a, o) : (je(We, We.current & 1), t = Cr(t, a, o), t !== null ? t.sibling : null);
        je(We, We.current & 1);
        break;
      case 19:
        if (s = (o & a.childLanes) !== 0, (t.flags & 128) !== 0) {
          if (s) return ph(t, a, o);
          a.flags |= 128;
        }
        if (f = a.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), je(We, We.current), s) break;
        return null;
      case 22:
      case 23:
        return a.lanes = 0, ih(t, a, o);
    }
    return Cr(t, a, o);
  }
  var hh, zc, mh, gh;
  hh = function(t, a) {
    for (var o = a.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6) t.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === a) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === a) return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, zc = function() {
  }, mh = function(t, a, o, s) {
    var f = t.memoizedProps;
    if (f !== s) {
      t = a.stateNode, vn(dr.current);
      var m = null;
      switch (o) {
        case "input":
          f = De(t, f), s = De(t, s), m = [];
          break;
        case "select":
          f = U({}, f, { value: void 0 }), s = U({}, s, { value: void 0 }), m = [];
          break;
        case "textarea":
          f = ss(t, f), s = ss(t, s), m = [];
          break;
        default:
          typeof f.onClick != "function" && typeof s.onClick == "function" && (t.onclick = wi);
      }
      us(o, s);
      var x;
      o = null;
      for (V in f) if (!s.hasOwnProperty(V) && f.hasOwnProperty(V) && f[V] != null) if (V === "style") {
        var E = f[V];
        for (x in E) E.hasOwnProperty(x) && (o || (o = {}), o[x] = "");
      } else V !== "dangerouslySetInnerHTML" && V !== "children" && V !== "suppressContentEditableWarning" && V !== "suppressHydrationWarning" && V !== "autoFocus" && (l.hasOwnProperty(V) ? m || (m = []) : (m = m || []).push(V, null));
      for (V in s) {
        var T = s[V];
        if (E = f?.[V], s.hasOwnProperty(V) && T !== E && (T != null || E != null)) if (V === "style") if (E) {
          for (x in E) !E.hasOwnProperty(x) || T && T.hasOwnProperty(x) || (o || (o = {}), o[x] = "");
          for (x in T) T.hasOwnProperty(x) && E[x] !== T[x] && (o || (o = {}), o[x] = T[x]);
        } else o || (m || (m = []), m.push(
          V,
          o
        )), o = T;
        else V === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (m = m || []).push(V, T)) : V === "children" ? typeof T != "string" && typeof T != "number" || (m = m || []).push(V, "" + T) : V !== "suppressContentEditableWarning" && V !== "suppressHydrationWarning" && (l.hasOwnProperty(V) ? (T != null && V === "onScroll" && Ke("scroll", t), m || E === T || (m = [])) : (m = m || []).push(V, T));
      }
      o && (m = m || []).push("style", o);
      var V = m;
      (a.updateQueue = V) && (a.flags |= 4);
    }
  }, gh = function(t, a, o, s) {
    o !== s && (a.flags |= 4);
  };
  function no(t, a) {
    if (!He) switch (t.tailMode) {
      case "hidden":
        a = t.tail;
        for (var o = null; a !== null; ) a.alternate !== null && (o = a), a = a.sibling;
        o === null ? t.tail = null : o.sibling = null;
        break;
      case "collapsed":
        o = t.tail;
        for (var s = null; o !== null; ) o.alternate !== null && (s = o), o = o.sibling;
        s === null ? a || t.tail === null ? t.tail = null : t.tail.sibling = null : s.sibling = null;
    }
  }
  function gt(t) {
    var a = t.alternate !== null && t.alternate.child === t.child, o = 0, s = 0;
    if (a) for (var f = t.child; f !== null; ) o |= f.lanes | f.childLanes, s |= f.subtreeFlags & 14680064, s |= f.flags & 14680064, f.return = t, f = f.sibling;
    else for (f = t.child; f !== null; ) o |= f.lanes | f.childLanes, s |= f.subtreeFlags, s |= f.flags, f.return = t, f = f.sibling;
    return t.subtreeFlags |= s, t.childLanes = o, a;
  }
  function G1(t, a, o) {
    var s = a.pendingProps;
    switch (Zs(a), a.tag) {
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
        return gt(a), null;
      case 1:
        return _t(a.type) && ki(), gt(a), null;
      case 3:
        return s = a.stateNode, Xn(), Oe(Ct), Oe(ht), dc(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (t === null || t.child === null) && ($i(a) ? a.flags |= 4 : t === null || t.memoizedState.isDehydrated && (a.flags & 256) === 0 || (a.flags |= 1024, Xt !== null && (Oc(Xt), Xt = null))), zc(t, a), gt(a), null;
      case 5:
        cc(a);
        var f = vn(Za.current);
        if (o = a.type, t !== null && a.stateNode != null) mh(t, a, o, s, f), t.ref !== a.ref && (a.flags |= 512, a.flags |= 2097152);
        else {
          if (!s) {
            if (a.stateNode === null) throw Error(n(166));
            return gt(a), null;
          }
          if (t = vn(dr.current), $i(a)) {
            s = a.stateNode, o = a.type;
            var m = a.memoizedProps;
            switch (s[ur] = a, s[Ga] = m, t = (a.mode & 1) !== 0, o) {
              case "dialog":
                Ke("cancel", s), Ke("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ke("load", s);
                break;
              case "video":
              case "audio":
                for (f = 0; f < Ha.length; f++) Ke(Ha[f], s);
                break;
              case "source":
                Ke("error", s);
                break;
              case "img":
              case "image":
              case "link":
                Ke(
                  "error",
                  s
                ), Ke("load", s);
                break;
              case "details":
                Ke("toggle", s);
                break;
              case "input":
                be(s, m), Ke("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!m.multiple }, Ke("invalid", s);
                break;
              case "textarea":
                Zd(s, m), Ke("invalid", s);
            }
            us(o, m), f = null;
            for (var x in m) if (m.hasOwnProperty(x)) {
              var E = m[x];
              x === "children" ? typeof E == "string" ? s.textContent !== E && (m.suppressHydrationWarning !== !0 && yi(s.textContent, E, t), f = ["children", E]) : typeof E == "number" && s.textContent !== "" + E && (m.suppressHydrationWarning !== !0 && yi(
                s.textContent,
                E,
                t
              ), f = ["children", "" + E]) : l.hasOwnProperty(x) && E != null && x === "onScroll" && Ke("scroll", s);
            }
            switch (o) {
              case "input":
                ae(s), cn(s, m, !0);
                break;
              case "textarea":
                ae(s), ef(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof m.onClick == "function" && (s.onclick = wi);
            }
            s = f, a.updateQueue = s, s !== null && (a.flags |= 4);
          } else {
            x = f.nodeType === 9 ? f : f.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = tf(o)), t === "http://www.w3.org/1999/xhtml" ? o === "script" ? (t = x.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof s.is == "string" ? t = x.createElement(o, { is: s.is }) : (t = x.createElement(o), o === "select" && (x = t, s.multiple ? x.multiple = !0 : s.size && (x.size = s.size))) : t = x.createElementNS(t, o), t[ur] = a, t[Ga] = s, hh(t, a, !1, !1), a.stateNode = t;
            e: {
              switch (x = ds(o, s), o) {
                case "dialog":
                  Ke("cancel", t), Ke("close", t), f = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ke("load", t), f = s;
                  break;
                case "video":
                case "audio":
                  for (f = 0; f < Ha.length; f++) Ke(Ha[f], t);
                  f = s;
                  break;
                case "source":
                  Ke("error", t), f = s;
                  break;
                case "img":
                case "image":
                case "link":
                  Ke(
                    "error",
                    t
                  ), Ke("load", t), f = s;
                  break;
                case "details":
                  Ke("toggle", t), f = s;
                  break;
                case "input":
                  be(t, s), f = De(t, s), Ke("invalid", t);
                  break;
                case "option":
                  f = s;
                  break;
                case "select":
                  t._wrapperState = { wasMultiple: !!s.multiple }, f = U({}, s, { value: void 0 }), Ke("invalid", t);
                  break;
                case "textarea":
                  Zd(t, s), f = ss(t, s), Ke("invalid", t);
                  break;
                default:
                  f = s;
              }
              us(o, f), E = f;
              for (m in E) if (E.hasOwnProperty(m)) {
                var T = E[m];
                m === "style" ? af(t, T) : m === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && rf(t, T)) : m === "children" ? typeof T == "string" ? (o !== "textarea" || T !== "") && _a(t, T) : typeof T == "number" && _a(t, "" + T) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (l.hasOwnProperty(m) ? T != null && m === "onScroll" && Ke("scroll", t) : T != null && D(t, m, T, x));
              }
              switch (o) {
                case "input":
                  ae(t), cn(t, s, !1);
                  break;
                case "textarea":
                  ae(t), ef(t);
                  break;
                case "option":
                  s.value != null && t.setAttribute("value", "" + $e(s.value));
                  break;
                case "select":
                  t.multiple = !!s.multiple, m = s.value, m != null ? Nn(t, !!s.multiple, m, !1) : s.defaultValue != null && Nn(
                    t,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof f.onClick == "function" && (t.onclick = wi);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break e;
                case "img":
                  s = !0;
                  break e;
                default:
                  s = !1;
              }
            }
            s && (a.flags |= 4);
          }
          a.ref !== null && (a.flags |= 512, a.flags |= 2097152);
        }
        return gt(a), null;
      case 6:
        if (t && a.stateNode != null) gh(t, a, t.memoizedProps, s);
        else {
          if (typeof s != "string" && a.stateNode === null) throw Error(n(166));
          if (o = vn(Za.current), vn(dr.current), $i(a)) {
            if (s = a.stateNode, o = a.memoizedProps, s[ur] = a, (m = s.nodeValue !== o) && (t = Rt, t !== null)) switch (t.tag) {
              case 3:
                yi(s.nodeValue, o, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 && yi(s.nodeValue, o, (t.mode & 1) !== 0);
            }
            m && (a.flags |= 4);
          } else s = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(s), s[ur] = a, a.stateNode = s;
        }
        return gt(a), null;
      case 13:
        if (Oe(We), s = a.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (He && Lt !== null && (a.mode & 1) !== 0 && (a.flags & 128) === 0) yp(), Gn(), a.flags |= 98560, m = !1;
          else if (m = $i(a), s !== null && s.dehydrated !== null) {
            if (t === null) {
              if (!m) throw Error(n(318));
              if (m = a.memoizedState, m = m !== null ? m.dehydrated : null, !m) throw Error(n(317));
              m[ur] = a;
            } else Gn(), (a.flags & 128) === 0 && (a.memoizedState = null), a.flags |= 4;
            gt(a), m = !1;
          } else Xt !== null && (Oc(Xt), Xt = null), m = !0;
          if (!m) return a.flags & 65536 ? a : null;
        }
        return (a.flags & 128) !== 0 ? (a.lanes = o, a) : (s = s !== null, s !== (t !== null && t.memoizedState !== null) && s && (a.child.flags |= 8192, (a.mode & 1) !== 0 && (t === null || (We.current & 1) !== 0 ? rt === 0 && (rt = 3) : Hc())), a.updateQueue !== null && (a.flags |= 4), gt(a), null);
      case 4:
        return Xn(), zc(t, a), t === null && Ua(a.stateNode.containerInfo), gt(a), null;
      case 10:
        return ac(a.type._context), gt(a), null;
      case 17:
        return _t(a.type) && ki(), gt(a), null;
      case 19:
        if (Oe(We), m = a.memoizedState, m === null) return gt(a), null;
        if (s = (a.flags & 128) !== 0, x = m.rendering, x === null) if (s) no(m, !1);
        else {
          if (rt !== 0 || t !== null && (t.flags & 128) !== 0) for (t = a.child; t !== null; ) {
            if (x = Ai(t), x !== null) {
              for (a.flags |= 128, no(m, !1), s = x.updateQueue, s !== null && (a.updateQueue = s, a.flags |= 4), a.subtreeFlags = 0, s = o, o = a.child; o !== null; ) m = o, t = s, m.flags &= 14680066, x = m.alternate, x === null ? (m.childLanes = 0, m.lanes = t, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = x.childLanes, m.lanes = x.lanes, m.child = x.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = x.memoizedProps, m.memoizedState = x.memoizedState, m.updateQueue = x.updateQueue, m.type = x.type, t = x.dependencies, m.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), o = o.sibling;
              return je(We, We.current & 1 | 2), a.child;
            }
            t = t.sibling;
          }
          m.tail !== null && Ze() > ta && (a.flags |= 128, s = !0, no(m, !1), a.lanes = 4194304);
        }
        else {
          if (!s) if (t = Ai(x), t !== null) {
            if (a.flags |= 128, s = !0, o = t.updateQueue, o !== null && (a.updateQueue = o, a.flags |= 4), no(m, !0), m.tail === null && m.tailMode === "hidden" && !x.alternate && !He) return gt(a), null;
          } else 2 * Ze() - m.renderingStartTime > ta && o !== 1073741824 && (a.flags |= 128, s = !0, no(m, !1), a.lanes = 4194304);
          m.isBackwards ? (x.sibling = a.child, a.child = x) : (o = m.last, o !== null ? o.sibling = x : a.child = x, m.last = x);
        }
        return m.tail !== null ? (a = m.tail, m.rendering = a, m.tail = a.sibling, m.renderingStartTime = Ze(), a.sibling = null, o = We.current, je(We, s ? o & 1 | 2 : o & 1), a) : (gt(a), null);
      case 22:
      case 23:
        return Bc(), s = a.memoizedState !== null, t !== null && t.memoizedState !== null !== s && (a.flags |= 8192), s && (a.mode & 1) !== 0 ? (Mt & 1073741824) !== 0 && (gt(a), a.subtreeFlags & 6 && (a.flags |= 8192)) : gt(a), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(n(156, a.tag));
  }
  function Y1(t, a) {
    switch (Zs(a), a.tag) {
      case 1:
        return _t(a.type) && ki(), t = a.flags, t & 65536 ? (a.flags = t & -65537 | 128, a) : null;
      case 3:
        return Xn(), Oe(Ct), Oe(ht), dc(), t = a.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (a.flags = t & -65537 | 128, a) : null;
      case 5:
        return cc(a), null;
      case 13:
        if (Oe(We), t = a.memoizedState, t !== null && t.dehydrated !== null) {
          if (a.alternate === null) throw Error(n(340));
          Gn();
        }
        return t = a.flags, t & 65536 ? (a.flags = t & -65537 | 128, a) : null;
      case 19:
        return Oe(We), null;
      case 4:
        return Xn(), null;
      case 10:
        return ac(a.type._context), null;
      case 22:
      case 23:
        return Bc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Vi = !1, vt = !1, q1 = typeof WeakSet == "function" ? WeakSet : Set, de = null;
  function Jn(t, a) {
    var o = t.ref;
    if (o !== null) if (typeof o == "function") try {
      o(null);
    } catch (s) {
      Qe(t, a, s);
    }
    else o.current = null;
  }
  function Tc(t, a, o) {
    try {
      o();
    } catch (s) {
      Qe(t, a, s);
    }
  }
  var vh = !1;
  function Q1(t, a) {
    if (Bs = si, t = qf(), Rs(t)) {
      if ("selectionStart" in t) var o = { start: t.selectionStart, end: t.selectionEnd };
      else e: {
        o = (o = t.ownerDocument) && o.defaultView || window;
        var s = o.getSelection && o.getSelection();
        if (s && s.rangeCount !== 0) {
          o = s.anchorNode;
          var f = s.anchorOffset, m = s.focusNode;
          s = s.focusOffset;
          try {
            o.nodeType, m.nodeType;
          } catch {
            o = null;
            break e;
          }
          var x = 0, E = -1, T = -1, V = 0, X = 0, Z = t, Q = null;
          t: for (; ; ) {
            for (var le; Z !== o || f !== 0 && Z.nodeType !== 3 || (E = x + f), Z !== m || s !== 0 && Z.nodeType !== 3 || (T = x + s), Z.nodeType === 3 && (x += Z.nodeValue.length), (le = Z.firstChild) !== null; )
              Q = Z, Z = le;
            for (; ; ) {
              if (Z === t) break t;
              if (Q === o && ++V === f && (E = x), Q === m && ++X === s && (T = x), (le = Z.nextSibling) !== null) break;
              Z = Q, Q = Z.parentNode;
            }
            Z = le;
          }
          o = E === -1 || T === -1 ? null : { start: E, end: T };
        } else o = null;
      }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (Hs = { focusedElem: t, selectionRange: o }, si = !1, de = a; de !== null; ) if (a = de, t = a.child, (a.subtreeFlags & 1028) !== 0 && t !== null) t.return = a, de = t;
    else for (; de !== null; ) {
      a = de;
      try {
        var fe = a.alternate;
        if ((a.flags & 1024) !== 0) switch (a.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (fe !== null) {
              var he = fe.memoizedProps, Je = fe.memoizedState, M = a.stateNode, A = M.getSnapshotBeforeUpdate(a.elementType === a.type ? he : Zt(a.type, he), Je);
              M.__reactInternalSnapshotBeforeUpdate = A;
            }
            break;
          case 3:
            var O = a.stateNode.containerInfo;
            O.nodeType === 1 ? O.textContent = "" : O.nodeType === 9 && O.documentElement && O.removeChild(O.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(n(163));
        }
      } catch (J) {
        Qe(a, a.return, J);
      }
      if (t = a.sibling, t !== null) {
        t.return = a.return, de = t;
        break;
      }
      de = a.return;
    }
    return fe = vh, vh = !1, fe;
  }
  function ao(t, a, o) {
    var s = a.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var f = s = s.next;
      do {
        if ((f.tag & t) === t) {
          var m = f.destroy;
          f.destroy = void 0, m !== void 0 && Tc(a, o, m);
        }
        f = f.next;
      } while (f !== s);
    }
  }
  function Bi(t, a) {
    if (a = a.updateQueue, a = a !== null ? a.lastEffect : null, a !== null) {
      var o = a = a.next;
      do {
        if ((o.tag & t) === t) {
          var s = o.create;
          o.destroy = s();
        }
        o = o.next;
      } while (o !== a);
    }
  }
  function Nc(t) {
    var a = t.ref;
    if (a !== null) {
      var o = t.stateNode;
      switch (t.tag) {
        case 5:
          t = o;
          break;
        default:
          t = o;
      }
      typeof a == "function" ? a(t) : a.current = t;
    }
  }
  function bh(t) {
    var a = t.alternate;
    a !== null && (t.alternate = null, bh(a)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (a = t.stateNode, a !== null && (delete a[ur], delete a[Ga], delete a[Ys], delete a[N1], delete a[A1])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  function yh(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4;
  }
  function wh(t) {
    e: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || yh(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Ac(t, a, o) {
    var s = t.tag;
    if (s === 5 || s === 6) t = t.stateNode, a ? o.nodeType === 8 ? o.parentNode.insertBefore(t, a) : o.insertBefore(t, a) : (o.nodeType === 8 ? (a = o.parentNode, a.insertBefore(t, o)) : (a = o, a.appendChild(t)), o = o._reactRootContainer, o != null || a.onclick !== null || (a.onclick = wi));
    else if (s !== 4 && (t = t.child, t !== null)) for (Ac(t, a, o), t = t.sibling; t !== null; ) Ac(t, a, o), t = t.sibling;
  }
  function Ic(t, a, o) {
    var s = t.tag;
    if (s === 5 || s === 6) t = t.stateNode, a ? o.insertBefore(t, a) : o.appendChild(t);
    else if (s !== 4 && (t = t.child, t !== null)) for (Ic(t, a, o), t = t.sibling; t !== null; ) Ic(t, a, o), t = t.sibling;
  }
  var dt = null, Jt = !1;
  function Yr(t, a, o) {
    for (o = o.child; o !== null; ) xh(t, a, o), o = o.sibling;
  }
  function xh(t, a, o) {
    if (cr && typeof cr.onCommitFiberUnmount == "function") try {
      cr.onCommitFiberUnmount(ri, o);
    } catch {
    }
    switch (o.tag) {
      case 5:
        vt || Jn(o, a);
      case 6:
        var s = dt, f = Jt;
        dt = null, Yr(t, a, o), dt = s, Jt = f, dt !== null && (Jt ? (t = dt, o = o.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(o) : t.removeChild(o)) : dt.removeChild(o.stateNode));
        break;
      case 18:
        dt !== null && (Jt ? (t = dt, o = o.stateNode, t.nodeType === 8 ? Gs(t.parentNode, o) : t.nodeType === 1 && Gs(t, o), La(t)) : Gs(dt, o.stateNode));
        break;
      case 4:
        s = dt, f = Jt, dt = o.stateNode.containerInfo, Jt = !0, Yr(t, a, o), dt = s, Jt = f;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!vt && (s = o.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          f = s = s.next;
          do {
            var m = f, x = m.destroy;
            m = m.tag, x !== void 0 && ((m & 2) !== 0 || (m & 4) !== 0) && Tc(o, a, x), f = f.next;
          } while (f !== s);
        }
        Yr(t, a, o);
        break;
      case 1:
        if (!vt && (Jn(o, a), s = o.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = o.memoizedProps, s.state = o.memoizedState, s.componentWillUnmount();
        } catch (E) {
          Qe(o, a, E);
        }
        Yr(t, a, o);
        break;
      case 21:
        Yr(t, a, o);
        break;
      case 22:
        o.mode & 1 ? (vt = (s = vt) || o.memoizedState !== null, Yr(t, a, o), vt = s) : Yr(t, a, o);
        break;
      default:
        Yr(t, a, o);
    }
  }
  function kh(t) {
    var a = t.updateQueue;
    if (a !== null) {
      t.updateQueue = null;
      var o = t.stateNode;
      o === null && (o = t.stateNode = new q1()), a.forEach(function(s) {
        var f = oy.bind(null, t, s);
        o.has(s) || (o.add(s), s.then(f, f));
      });
    }
  }
  function er(t, a) {
    var o = a.deletions;
    if (o !== null) for (var s = 0; s < o.length; s++) {
      var f = o[s];
      try {
        var m = t, x = a, E = x;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              dt = E.stateNode, Jt = !1;
              break e;
            case 3:
              dt = E.stateNode.containerInfo, Jt = !0;
              break e;
            case 4:
              dt = E.stateNode.containerInfo, Jt = !0;
              break e;
          }
          E = E.return;
        }
        if (dt === null) throw Error(n(160));
        xh(m, x, f), dt = null, Jt = !1;
        var T = f.alternate;
        T !== null && (T.return = null), f.return = null;
      } catch (V) {
        Qe(f, a, V);
      }
    }
    if (a.subtreeFlags & 12854) for (a = a.child; a !== null; ) Sh(a, t), a = a.sibling;
  }
  function Sh(t, a) {
    var o = t.alternate, s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (er(a, t), pr(t), s & 4) {
          try {
            ao(3, t, t.return), Bi(3, t);
          } catch (he) {
            Qe(t, t.return, he);
          }
          try {
            ao(5, t, t.return);
          } catch (he) {
            Qe(t, t.return, he);
          }
        }
        break;
      case 1:
        er(a, t), pr(t), s & 512 && o !== null && Jn(o, o.return);
        break;
      case 5:
        if (er(a, t), pr(t), s & 512 && o !== null && Jn(o, o.return), t.flags & 32) {
          var f = t.stateNode;
          try {
            _a(f, "");
          } catch (he) {
            Qe(t, t.return, he);
          }
        }
        if (s & 4 && (f = t.stateNode, f != null)) {
          var m = t.memoizedProps, x = o !== null ? o.memoizedProps : m, E = t.type, T = t.updateQueue;
          if (t.updateQueue = null, T !== null) try {
            E === "input" && m.type === "radio" && m.name != null && ze(f, m), ds(E, x);
            var V = ds(E, m);
            for (x = 0; x < T.length; x += 2) {
              var X = T[x], Z = T[x + 1];
              X === "style" ? af(f, Z) : X === "dangerouslySetInnerHTML" ? rf(f, Z) : X === "children" ? _a(f, Z) : D(f, X, Z, V);
            }
            switch (E) {
              case "input":
                sr(f, m);
                break;
              case "textarea":
                Jd(f, m);
                break;
              case "select":
                var Q = f._wrapperState.wasMultiple;
                f._wrapperState.wasMultiple = !!m.multiple;
                var le = m.value;
                le != null ? Nn(f, !!m.multiple, le, !1) : Q !== !!m.multiple && (m.defaultValue != null ? Nn(
                  f,
                  !!m.multiple,
                  m.defaultValue,
                  !0
                ) : Nn(f, !!m.multiple, m.multiple ? [] : "", !1));
            }
            f[Ga] = m;
          } catch (he) {
            Qe(t, t.return, he);
          }
        }
        break;
      case 6:
        if (er(a, t), pr(t), s & 4) {
          if (t.stateNode === null) throw Error(n(162));
          f = t.stateNode, m = t.memoizedProps;
          try {
            f.nodeValue = m;
          } catch (he) {
            Qe(t, t.return, he);
          }
        }
        break;
      case 3:
        if (er(a, t), pr(t), s & 4 && o !== null && o.memoizedState.isDehydrated) try {
          La(a.containerInfo);
        } catch (he) {
          Qe(t, t.return, he);
        }
        break;
      case 4:
        er(a, t), pr(t);
        break;
      case 13:
        er(a, t), pr(t), f = t.child, f.flags & 8192 && (m = f.memoizedState !== null, f.stateNode.isHidden = m, !m || f.alternate !== null && f.alternate.memoizedState !== null || (Mc = Ze())), s & 4 && kh(t);
        break;
      case 22:
        if (X = o !== null && o.memoizedState !== null, t.mode & 1 ? (vt = (V = vt) || X, er(a, t), vt = V) : er(a, t), pr(t), s & 8192) {
          if (V = t.memoizedState !== null, (t.stateNode.isHidden = V) && !X && (t.mode & 1) !== 0) for (de = t, X = t.child; X !== null; ) {
            for (Z = de = X; de !== null; ) {
              switch (Q = de, le = Q.child, Q.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ao(4, Q, Q.return);
                  break;
                case 1:
                  Jn(Q, Q.return);
                  var fe = Q.stateNode;
                  if (typeof fe.componentWillUnmount == "function") {
                    s = Q, o = Q.return;
                    try {
                      a = s, fe.props = a.memoizedProps, fe.state = a.memoizedState, fe.componentWillUnmount();
                    } catch (he) {
                      Qe(s, o, he);
                    }
                  }
                  break;
                case 5:
                  Jn(Q, Q.return);
                  break;
                case 22:
                  if (Q.memoizedState !== null) {
                    Eh(Z);
                    continue;
                  }
              }
              le !== null ? (le.return = Q, de = le) : Eh(Z);
            }
            X = X.sibling;
          }
          e: for (X = null, Z = t; ; ) {
            if (Z.tag === 5) {
              if (X === null) {
                X = Z;
                try {
                  f = Z.stateNode, V ? (m = f.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (E = Z.stateNode, T = Z.memoizedProps.style, x = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = nf("display", x));
                } catch (he) {
                  Qe(t, t.return, he);
                }
              }
            } else if (Z.tag === 6) {
              if (X === null) try {
                Z.stateNode.nodeValue = V ? "" : Z.memoizedProps;
              } catch (he) {
                Qe(t, t.return, he);
              }
            } else if ((Z.tag !== 22 && Z.tag !== 23 || Z.memoizedState === null || Z === t) && Z.child !== null) {
              Z.child.return = Z, Z = Z.child;
              continue;
            }
            if (Z === t) break e;
            for (; Z.sibling === null; ) {
              if (Z.return === null || Z.return === t) break e;
              X === Z && (X = null), Z = Z.return;
            }
            X === Z && (X = null), Z.sibling.return = Z.return, Z = Z.sibling;
          }
        }
        break;
      case 19:
        er(a, t), pr(t), s & 4 && kh(t);
        break;
      case 21:
        break;
      default:
        er(
          a,
          t
        ), pr(t);
    }
  }
  function pr(t) {
    var a = t.flags;
    if (a & 2) {
      try {
        e: {
          for (var o = t.return; o !== null; ) {
            if (yh(o)) {
              var s = o;
              break e;
            }
            o = o.return;
          }
          throw Error(n(160));
        }
        switch (s.tag) {
          case 5:
            var f = s.stateNode;
            s.flags & 32 && (_a(f, ""), s.flags &= -33);
            var m = wh(t);
            Ic(t, m, f);
            break;
          case 3:
          case 4:
            var x = s.stateNode.containerInfo, E = wh(t);
            Ac(t, E, x);
            break;
          default:
            throw Error(n(161));
        }
      } catch (T) {
        Qe(t, t.return, T);
      }
      t.flags &= -3;
    }
    a & 4096 && (t.flags &= -4097);
  }
  function X1(t, a, o) {
    de = t, Ch(t);
  }
  function Ch(t, a, o) {
    for (var s = (t.mode & 1) !== 0; de !== null; ) {
      var f = de, m = f.child;
      if (f.tag === 22 && s) {
        var x = f.memoizedState !== null || Vi;
        if (!x) {
          var E = f.alternate, T = E !== null && E.memoizedState !== null || vt;
          E = Vi;
          var V = vt;
          if (Vi = x, (vt = T) && !V) for (de = f; de !== null; ) x = de, T = x.child, x.tag === 22 && x.memoizedState !== null ? $h(f) : T !== null ? (T.return = x, de = T) : $h(f);
          for (; m !== null; ) de = m, Ch(m), m = m.sibling;
          de = f, Vi = E, vt = V;
        }
        _h(t);
      } else (f.subtreeFlags & 8772) !== 0 && m !== null ? (m.return = f, de = m) : _h(t);
    }
  }
  function _h(t) {
    for (; de !== null; ) {
      var a = de;
      if ((a.flags & 8772) !== 0) {
        var o = a.alternate;
        try {
          if ((a.flags & 8772) !== 0) switch (a.tag) {
            case 0:
            case 11:
            case 15:
              vt || Bi(5, a);
              break;
            case 1:
              var s = a.stateNode;
              if (a.flags & 4 && !vt) if (o === null) s.componentDidMount();
              else {
                var f = a.elementType === a.type ? o.memoizedProps : Zt(a.type, o.memoizedProps);
                s.componentDidUpdate(f, o.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var m = a.updateQueue;
              m !== null && Ep(a, m, s);
              break;
            case 3:
              var x = a.updateQueue;
              if (x !== null) {
                if (o = null, a.child !== null) switch (a.child.tag) {
                  case 5:
                    o = a.child.stateNode;
                    break;
                  case 1:
                    o = a.child.stateNode;
                }
                Ep(a, x, o);
              }
              break;
            case 5:
              var E = a.stateNode;
              if (o === null && a.flags & 4) {
                o = E;
                var T = a.memoizedProps;
                switch (a.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && o.focus();
                    break;
                  case "img":
                    T.src && (o.src = T.src);
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
              if (a.memoizedState === null) {
                var V = a.alternate;
                if (V !== null) {
                  var X = V.memoizedState;
                  if (X !== null) {
                    var Z = X.dehydrated;
                    Z !== null && La(Z);
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
              throw Error(n(163));
          }
          vt || a.flags & 512 && Nc(a);
        } catch (Q) {
          Qe(a, a.return, Q);
        }
      }
      if (a === t) {
        de = null;
        break;
      }
      if (o = a.sibling, o !== null) {
        o.return = a.return, de = o;
        break;
      }
      de = a.return;
    }
  }
  function Eh(t) {
    for (; de !== null; ) {
      var a = de;
      if (a === t) {
        de = null;
        break;
      }
      var o = a.sibling;
      if (o !== null) {
        o.return = a.return, de = o;
        break;
      }
      de = a.return;
    }
  }
  function $h(t) {
    for (; de !== null; ) {
      var a = de;
      try {
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            var o = a.return;
            try {
              Bi(4, a);
            } catch (T) {
              Qe(a, o, T);
            }
            break;
          case 1:
            var s = a.stateNode;
            if (typeof s.componentDidMount == "function") {
              var f = a.return;
              try {
                s.componentDidMount();
              } catch (T) {
                Qe(a, f, T);
              }
            }
            var m = a.return;
            try {
              Nc(a);
            } catch (T) {
              Qe(a, m, T);
            }
            break;
          case 5:
            var x = a.return;
            try {
              Nc(a);
            } catch (T) {
              Qe(a, x, T);
            }
        }
      } catch (T) {
        Qe(a, a.return, T);
      }
      if (a === t) {
        de = null;
        break;
      }
      var E = a.sibling;
      if (E !== null) {
        E.return = a.return, de = E;
        break;
      }
      de = a.return;
    }
  }
  var Z1 = Math.ceil, Hi = W.ReactCurrentDispatcher, Rc = W.ReactCurrentOwner, Ht = W.ReactCurrentBatchConfig, Te = 0, lt = null, et = null, ft = 0, Mt = 0, ea = Br(0), rt = 0, oo = null, yn = 0, Ui = 0, Lc = 0, io = null, $t = null, Mc = 0, ta = 1 / 0, _r = null, Wi = !1, jc = null, qr = null, Gi = !1, Qr = null, Yi = 0, lo = 0, Dc = null, qi = -1, Qi = 0;
  function xt() {
    return (Te & 6) !== 0 ? Ze() : qi !== -1 ? qi : qi = Ze();
  }
  function Xr(t) {
    return (t.mode & 1) === 0 ? 1 : (Te & 2) !== 0 && ft !== 0 ? ft & -ft : R1.transition !== null ? (Qi === 0 && (Qi = wf()), Qi) : (t = Le, t !== 0 || (t = window.event, t = t === void 0 ? 16 : Ff(t.type)), t);
  }
  function tr(t, a, o, s) {
    if (50 < lo) throw lo = 0, Dc = null, Error(n(185));
    Ta(t, o, s), ((Te & 2) === 0 || t !== lt) && (t === lt && ((Te & 2) === 0 && (Ui |= o), rt === 4 && Zr(t, ft)), Pt(t, s), o === 1 && Te === 0 && (a.mode & 1) === 0 && (ta = Ze() + 500, Ci && Ur()));
  }
  function Pt(t, a) {
    var o = t.callbackNode;
    Rb(t, a);
    var s = oi(t, t === lt ? ft : 0);
    if (s === 0) o !== null && vf(o), t.callbackNode = null, t.callbackPriority = 0;
    else if (a = s & -s, t.callbackPriority !== a) {
      if (o != null && vf(o), a === 1) t.tag === 0 ? I1(Fh.bind(null, t)) : hp(Fh.bind(null, t)), z1(function() {
        (Te & 6) === 0 && Ur();
      }), o = null;
      else {
        switch (xf(s)) {
          case 1:
            o = bs;
            break;
          case 4:
            o = bf;
            break;
          case 16:
            o = ti;
            break;
          case 536870912:
            o = yf;
            break;
          default:
            o = ti;
        }
        o = Mh(o, Ph.bind(null, t));
      }
      t.callbackPriority = a, t.callbackNode = o;
    }
  }
  function Ph(t, a) {
    if (qi = -1, Qi = 0, (Te & 6) !== 0) throw Error(n(327));
    var o = t.callbackNode;
    if (ra() && t.callbackNode !== o) return null;
    var s = oi(t, t === lt ? ft : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & t.expiredLanes) !== 0 || a) a = Xi(t, s);
    else {
      a = s;
      var f = Te;
      Te |= 2;
      var m = Th();
      (lt !== t || ft !== a) && (_r = null, ta = Ze() + 500, xn(t, a));
      do
        try {
          ty();
          break;
        } catch (E) {
          zh(t, E);
        }
      while (!0);
      nc(), Hi.current = m, Te = f, et !== null ? a = 0 : (lt = null, ft = 0, a = rt);
    }
    if (a !== 0) {
      if (a === 2 && (f = ys(t), f !== 0 && (s = f, a = Kc(t, f))), a === 1) throw o = oo, xn(t, 0), Zr(t, s), Pt(t, Ze()), o;
      if (a === 6) Zr(t, s);
      else {
        if (f = t.current.alternate, (s & 30) === 0 && !J1(f) && (a = Xi(t, s), a === 2 && (m = ys(t), m !== 0 && (s = m, a = Kc(t, m))), a === 1)) throw o = oo, xn(t, 0), Zr(t, s), Pt(t, Ze()), o;
        switch (t.finishedWork = f, t.finishedLanes = s, a) {
          case 0:
          case 1:
            throw Error(n(345));
          case 2:
            kn(t, $t, _r);
            break;
          case 3:
            if (Zr(t, s), (s & 130023424) === s && (a = Mc + 500 - Ze(), 10 < a)) {
              if (oi(t, 0) !== 0) break;
              if (f = t.suspendedLanes, (f & s) !== s) {
                xt(), t.pingedLanes |= t.suspendedLanes & f;
                break;
              }
              t.timeoutHandle = Ws(kn.bind(null, t, $t, _r), a);
              break;
            }
            kn(t, $t, _r);
            break;
          case 4:
            if (Zr(t, s), (s & 4194240) === s) break;
            for (a = t.eventTimes, f = -1; 0 < s; ) {
              var x = 31 - qt(s);
              m = 1 << x, x = a[x], x > f && (f = x), s &= ~m;
            }
            if (s = f, s = Ze() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * Z1(s / 1960)) - s, 10 < s) {
              t.timeoutHandle = Ws(kn.bind(null, t, $t, _r), s);
              break;
            }
            kn(t, $t, _r);
            break;
          case 5:
            kn(t, $t, _r);
            break;
          default:
            throw Error(n(329));
        }
      }
    }
    return Pt(t, Ze()), t.callbackNode === o ? Ph.bind(null, t) : null;
  }
  function Kc(t, a) {
    var o = io;
    return t.current.memoizedState.isDehydrated && (xn(t, a).flags |= 256), t = Xi(t, a), t !== 2 && (a = $t, $t = o, a !== null && Oc(a)), t;
  }
  function Oc(t) {
    $t === null ? $t = t : $t.push.apply($t, t);
  }
  function J1(t) {
    for (var a = t; ; ) {
      if (a.flags & 16384) {
        var o = a.updateQueue;
        if (o !== null && (o = o.stores, o !== null)) for (var s = 0; s < o.length; s++) {
          var f = o[s], m = f.getSnapshot;
          f = f.value;
          try {
            if (!Qt(m(), f)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (o = a.child, a.subtreeFlags & 16384 && o !== null) o.return = a, a = o;
      else {
        if (a === t) break;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === t) return !0;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    }
    return !0;
  }
  function Zr(t, a) {
    for (a &= ~Lc, a &= ~Ui, t.suspendedLanes |= a, t.pingedLanes &= ~a, t = t.expirationTimes; 0 < a; ) {
      var o = 31 - qt(a), s = 1 << o;
      t[o] = -1, a &= ~s;
    }
  }
  function Fh(t) {
    if ((Te & 6) !== 0) throw Error(n(327));
    ra();
    var a = oi(t, 0);
    if ((a & 1) === 0) return Pt(t, Ze()), null;
    var o = Xi(t, a);
    if (t.tag !== 0 && o === 2) {
      var s = ys(t);
      s !== 0 && (a = s, o = Kc(t, s));
    }
    if (o === 1) throw o = oo, xn(t, 0), Zr(t, a), Pt(t, Ze()), o;
    if (o === 6) throw Error(n(345));
    return t.finishedWork = t.current.alternate, t.finishedLanes = a, kn(t, $t, _r), Pt(t, Ze()), null;
  }
  function Vc(t, a) {
    var o = Te;
    Te |= 1;
    try {
      return t(a);
    } finally {
      Te = o, Te === 0 && (ta = Ze() + 500, Ci && Ur());
    }
  }
  function wn(t) {
    Qr !== null && Qr.tag === 0 && (Te & 6) === 0 && ra();
    var a = Te;
    Te |= 1;
    var o = Ht.transition, s = Le;
    try {
      if (Ht.transition = null, Le = 1, t) return t();
    } finally {
      Le = s, Ht.transition = o, Te = a, (Te & 6) === 0 && Ur();
    }
  }
  function Bc() {
    Mt = ea.current, Oe(ea);
  }
  function xn(t, a) {
    t.finishedWork = null, t.finishedLanes = 0;
    var o = t.timeoutHandle;
    if (o !== -1 && (t.timeoutHandle = -1, F1(o)), et !== null) for (o = et.return; o !== null; ) {
      var s = o;
      switch (Zs(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && ki();
          break;
        case 3:
          Xn(), Oe(Ct), Oe(ht), dc();
          break;
        case 5:
          cc(s);
          break;
        case 4:
          Xn();
          break;
        case 13:
          Oe(We);
          break;
        case 19:
          Oe(We);
          break;
        case 10:
          ac(s.type._context);
          break;
        case 22:
        case 23:
          Bc();
      }
      o = o.return;
    }
    if (lt = t, et = t = Jr(t.current, null), ft = Mt = a, rt = 0, oo = null, Lc = Ui = yn = 0, $t = io = null, gn !== null) {
      for (a = 0; a < gn.length; a++) if (o = gn[a], s = o.interleaved, s !== null) {
        o.interleaved = null;
        var f = s.next, m = o.pending;
        if (m !== null) {
          var x = m.next;
          m.next = f, s.next = x;
        }
        o.pending = s;
      }
      gn = null;
    }
    return t;
  }
  function zh(t, a) {
    do {
      var o = et;
      try {
        if (nc(), Ii.current = ji, Ri) {
          for (var s = Ge.memoizedState; s !== null; ) {
            var f = s.queue;
            f !== null && (f.pending = null), s = s.next;
          }
          Ri = !1;
        }
        if (bn = 0, it = tt = Ge = null, Ja = !1, eo = 0, Rc.current = null, o === null || o.return === null) {
          rt = 1, oo = a, et = null;
          break;
        }
        e: {
          var m = t, x = o.return, E = o, T = a;
          if (a = ft, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var V = T, X = E, Z = X.tag;
            if ((X.mode & 1) === 0 && (Z === 0 || Z === 11 || Z === 15)) {
              var Q = X.alternate;
              Q ? (X.updateQueue = Q.updateQueue, X.memoizedState = Q.memoizedState, X.lanes = Q.lanes) : (X.updateQueue = null, X.memoizedState = null);
            }
            var le = th(x);
            if (le !== null) {
              le.flags &= -257, rh(le, x, E, m, a), le.mode & 1 && eh(m, V, a), a = le, T = V;
              var fe = a.updateQueue;
              if (fe === null) {
                var he = /* @__PURE__ */ new Set();
                he.add(T), a.updateQueue = he;
              } else fe.add(T);
              break e;
            } else {
              if ((a & 1) === 0) {
                eh(m, V, a), Hc();
                break e;
              }
              T = Error(n(426));
            }
          } else if (He && E.mode & 1) {
            var Je = th(x);
            if (Je !== null) {
              (Je.flags & 65536) === 0 && (Je.flags |= 256), rh(Je, x, E, m, a), tc(Zn(T, E));
              break e;
            }
          }
          m = T = Zn(T, E), rt !== 4 && (rt = 2), io === null ? io = [m] : io.push(m), m = x;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, a &= -a, m.lanes |= a;
                var M = Zp(m, T, a);
                _p(m, M);
                break e;
              case 1:
                E = T;
                var A = m.type, O = m.stateNode;
                if ((m.flags & 128) === 0 && (typeof A.getDerivedStateFromError == "function" || O !== null && typeof O.componentDidCatch == "function" && (qr === null || !qr.has(O)))) {
                  m.flags |= 65536, a &= -a, m.lanes |= a;
                  var J = Jp(m, E, a);
                  _p(m, J);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        Ah(o);
      } catch (ge) {
        a = ge, et === o && o !== null && (et = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Th() {
    var t = Hi.current;
    return Hi.current = ji, t === null ? ji : t;
  }
  function Hc() {
    (rt === 0 || rt === 3 || rt === 2) && (rt = 4), lt === null || (yn & 268435455) === 0 && (Ui & 268435455) === 0 || Zr(lt, ft);
  }
  function Xi(t, a) {
    var o = Te;
    Te |= 2;
    var s = Th();
    (lt !== t || ft !== a) && (_r = null, xn(t, a));
    do
      try {
        ey();
        break;
      } catch (f) {
        zh(t, f);
      }
    while (!0);
    if (nc(), Te = o, Hi.current = s, et !== null) throw Error(n(261));
    return lt = null, ft = 0, rt;
  }
  function ey() {
    for (; et !== null; ) Nh(et);
  }
  function ty() {
    for (; et !== null && !Eb(); ) Nh(et);
  }
  function Nh(t) {
    var a = Lh(t.alternate, t, Mt);
    t.memoizedProps = t.pendingProps, a === null ? Ah(t) : et = a, Rc.current = null;
  }
  function Ah(t) {
    var a = t;
    do {
      var o = a.alternate;
      if (t = a.return, (a.flags & 32768) === 0) {
        if (o = G1(o, a, Mt), o !== null) {
          et = o;
          return;
        }
      } else {
        if (o = Y1(o, a), o !== null) {
          o.flags &= 32767, et = o;
          return;
        }
        if (t !== null) t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
        else {
          rt = 6, et = null;
          return;
        }
      }
      if (a = a.sibling, a !== null) {
        et = a;
        return;
      }
      et = a = t;
    } while (a !== null);
    rt === 0 && (rt = 5);
  }
  function kn(t, a, o) {
    var s = Le, f = Ht.transition;
    try {
      Ht.transition = null, Le = 1, ry(t, a, o, s);
    } finally {
      Ht.transition = f, Le = s;
    }
    return null;
  }
  function ry(t, a, o, s) {
    do
      ra();
    while (Qr !== null);
    if ((Te & 6) !== 0) throw Error(n(327));
    o = t.finishedWork;
    var f = t.finishedLanes;
    if (o === null) return null;
    if (t.finishedWork = null, t.finishedLanes = 0, o === t.current) throw Error(n(177));
    t.callbackNode = null, t.callbackPriority = 0;
    var m = o.lanes | o.childLanes;
    if (Lb(t, m), t === lt && (et = lt = null, ft = 0), (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || Gi || (Gi = !0, Mh(ti, function() {
      return ra(), null;
    })), m = (o.flags & 15990) !== 0, (o.subtreeFlags & 15990) !== 0 || m) {
      m = Ht.transition, Ht.transition = null;
      var x = Le;
      Le = 1;
      var E = Te;
      Te |= 4, Rc.current = null, Q1(t, o), Sh(o, t), k1(Hs), si = !!Bs, Hs = Bs = null, t.current = o, X1(o), $b(), Te = E, Le = x, Ht.transition = m;
    } else t.current = o;
    if (Gi && (Gi = !1, Qr = t, Yi = f), m = t.pendingLanes, m === 0 && (qr = null), zb(o.stateNode), Pt(t, Ze()), a !== null) for (s = t.onRecoverableError, o = 0; o < a.length; o++) f = a[o], s(f.value, { componentStack: f.stack, digest: f.digest });
    if (Wi) throw Wi = !1, t = jc, jc = null, t;
    return (Yi & 1) !== 0 && t.tag !== 0 && ra(), m = t.pendingLanes, (m & 1) !== 0 ? t === Dc ? lo++ : (lo = 0, Dc = t) : lo = 0, Ur(), null;
  }
  function ra() {
    if (Qr !== null) {
      var t = xf(Yi), a = Ht.transition, o = Le;
      try {
        if (Ht.transition = null, Le = 16 > t ? 16 : t, Qr === null) var s = !1;
        else {
          if (t = Qr, Qr = null, Yi = 0, (Te & 6) !== 0) throw Error(n(331));
          var f = Te;
          for (Te |= 4, de = t.current; de !== null; ) {
            var m = de, x = m.child;
            if ((de.flags & 16) !== 0) {
              var E = m.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var V = E[T];
                  for (de = V; de !== null; ) {
                    var X = de;
                    switch (X.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ao(8, X, m);
                    }
                    var Z = X.child;
                    if (Z !== null) Z.return = X, de = Z;
                    else for (; de !== null; ) {
                      X = de;
                      var Q = X.sibling, le = X.return;
                      if (bh(X), X === V) {
                        de = null;
                        break;
                      }
                      if (Q !== null) {
                        Q.return = le, de = Q;
                        break;
                      }
                      de = le;
                    }
                  }
                }
                var fe = m.alternate;
                if (fe !== null) {
                  var he = fe.child;
                  if (he !== null) {
                    fe.child = null;
                    do {
                      var Je = he.sibling;
                      he.sibling = null, he = Je;
                    } while (he !== null);
                  }
                }
                de = m;
              }
            }
            if ((m.subtreeFlags & 2064) !== 0 && x !== null) x.return = m, de = x;
            else e: for (; de !== null; ) {
              if (m = de, (m.flags & 2048) !== 0) switch (m.tag) {
                case 0:
                case 11:
                case 15:
                  ao(9, m, m.return);
              }
              var M = m.sibling;
              if (M !== null) {
                M.return = m.return, de = M;
                break e;
              }
              de = m.return;
            }
          }
          var A = t.current;
          for (de = A; de !== null; ) {
            x = de;
            var O = x.child;
            if ((x.subtreeFlags & 2064) !== 0 && O !== null) O.return = x, de = O;
            else e: for (x = A; de !== null; ) {
              if (E = de, (E.flags & 2048) !== 0) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Bi(9, E);
                }
              } catch (ge) {
                Qe(E, E.return, ge);
              }
              if (E === x) {
                de = null;
                break e;
              }
              var J = E.sibling;
              if (J !== null) {
                J.return = E.return, de = J;
                break e;
              }
              de = E.return;
            }
          }
          if (Te = f, Ur(), cr && typeof cr.onPostCommitFiberRoot == "function") try {
            cr.onPostCommitFiberRoot(ri, t);
          } catch {
          }
          s = !0;
        }
        return s;
      } finally {
        Le = o, Ht.transition = a;
      }
    }
    return !1;
  }
  function Ih(t, a, o) {
    a = Zn(o, a), a = Zp(t, a, 1), t = Gr(t, a, 1), a = xt(), t !== null && (Ta(t, 1, a), Pt(t, a));
  }
  function Qe(t, a, o) {
    if (t.tag === 3) Ih(t, t, o);
    else for (; a !== null; ) {
      if (a.tag === 3) {
        Ih(a, t, o);
        break;
      } else if (a.tag === 1) {
        var s = a.stateNode;
        if (typeof a.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (qr === null || !qr.has(s))) {
          t = Zn(o, t), t = Jp(a, t, 1), a = Gr(a, t, 1), t = xt(), a !== null && (Ta(a, 1, t), Pt(a, t));
          break;
        }
      }
      a = a.return;
    }
  }
  function ny(t, a, o) {
    var s = t.pingCache;
    s !== null && s.delete(a), a = xt(), t.pingedLanes |= t.suspendedLanes & o, lt === t && (ft & o) === o && (rt === 4 || rt === 3 && (ft & 130023424) === ft && 500 > Ze() - Mc ? xn(t, 0) : Lc |= o), Pt(t, a);
  }
  function Rh(t, a) {
    a === 0 && ((t.mode & 1) === 0 ? a = 1 : (a = ai, ai <<= 1, (ai & 130023424) === 0 && (ai = 4194304)));
    var o = xt();
    t = kr(t, a), t !== null && (Ta(t, a, o), Pt(t, o));
  }
  function ay(t) {
    var a = t.memoizedState, o = 0;
    a !== null && (o = a.retryLane), Rh(t, o);
  }
  function oy(t, a) {
    var o = 0;
    switch (t.tag) {
      case 13:
        var s = t.stateNode, f = t.memoizedState;
        f !== null && (o = f.retryLane);
        break;
      case 19:
        s = t.stateNode;
        break;
      default:
        throw Error(n(314));
    }
    s !== null && s.delete(a), Rh(t, o);
  }
  var Lh;
  Lh = function(t, a, o) {
    if (t !== null) if (t.memoizedProps !== a.pendingProps || Ct.current) Et = !0;
    else {
      if ((t.lanes & o) === 0 && (a.flags & 128) === 0) return Et = !1, W1(t, a, o);
      Et = (t.flags & 131072) !== 0;
    }
    else Et = !1, He && (a.flags & 1048576) !== 0 && mp(a, Ei, a.index);
    switch (a.lanes = 0, a.tag) {
      case 2:
        var s = a.type;
        Oi(t, a), t = a.pendingProps;
        var f = Hn(a, ht.current);
        Qn(a, o), f = hc(null, a, s, t, f, o);
        var m = mc();
        return a.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (a.tag = 1, a.memoizedState = null, a.updateQueue = null, _t(s) ? (m = !0, Si(a)) : m = !1, a.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, lc(a), f.updater = Di, a.stateNode = f, f._reactInternals = a, xc(a, s, t, o), a = _c(null, a, s, !0, m, o)) : (a.tag = 0, He && m && Xs(a), wt(null, a, f, o), a = a.child), a;
      case 16:
        s = a.elementType;
        e: {
          switch (Oi(t, a), t = a.pendingProps, f = s._init, s = f(s._payload), a.type = s, f = a.tag = ly(s), t = Zt(s, t), f) {
            case 0:
              a = Cc(null, a, s, t, o);
              break e;
            case 1:
              a = sh(null, a, s, t, o);
              break e;
            case 11:
              a = nh(null, a, s, t, o);
              break e;
            case 14:
              a = ah(null, a, s, Zt(s.type, t), o);
              break e;
          }
          throw Error(n(
            306,
            s,
            ""
          ));
        }
        return a;
      case 0:
        return s = a.type, f = a.pendingProps, f = a.elementType === s ? f : Zt(s, f), Cc(t, a, s, f, o);
      case 1:
        return s = a.type, f = a.pendingProps, f = a.elementType === s ? f : Zt(s, f), sh(t, a, s, f, o);
      case 3:
        e: {
          if (ch(a), t === null) throw Error(n(387));
          s = a.pendingProps, m = a.memoizedState, f = m.element, Cp(t, a), Ni(a, s, null, o);
          var x = a.memoizedState;
          if (s = x.element, m.isDehydrated) if (m = { element: s, isDehydrated: !1, cache: x.cache, pendingSuspenseBoundaries: x.pendingSuspenseBoundaries, transitions: x.transitions }, a.updateQueue.baseState = m, a.memoizedState = m, a.flags & 256) {
            f = Zn(Error(n(423)), a), a = uh(t, a, s, o, f);
            break e;
          } else if (s !== f) {
            f = Zn(Error(n(424)), a), a = uh(t, a, s, o, f);
            break e;
          } else for (Lt = Vr(a.stateNode.containerInfo.firstChild), Rt = a, He = !0, Xt = null, o = kp(a, null, s, o), a.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (Gn(), s === f) {
              a = Cr(t, a, o);
              break e;
            }
            wt(t, a, s, o);
          }
          a = a.child;
        }
        return a;
      case 5:
        return $p(a), t === null && ec(a), s = a.type, f = a.pendingProps, m = t !== null ? t.memoizedProps : null, x = f.children, Us(s, f) ? x = null : m !== null && Us(s, m) && (a.flags |= 32), lh(t, a), wt(t, a, x, o), a.child;
      case 6:
        return t === null && ec(a), null;
      case 13:
        return dh(t, a, o);
      case 4:
        return sc(a, a.stateNode.containerInfo), s = a.pendingProps, t === null ? a.child = Yn(a, null, s, o) : wt(t, a, s, o), a.child;
      case 11:
        return s = a.type, f = a.pendingProps, f = a.elementType === s ? f : Zt(s, f), nh(t, a, s, f, o);
      case 7:
        return wt(t, a, a.pendingProps, o), a.child;
      case 8:
        return wt(t, a, a.pendingProps.children, o), a.child;
      case 12:
        return wt(t, a, a.pendingProps.children, o), a.child;
      case 10:
        e: {
          if (s = a.type._context, f = a.pendingProps, m = a.memoizedProps, x = f.value, je(Fi, s._currentValue), s._currentValue = x, m !== null) if (Qt(m.value, x)) {
            if (m.children === f.children && !Ct.current) {
              a = Cr(t, a, o);
              break e;
            }
          } else for (m = a.child, m !== null && (m.return = a); m !== null; ) {
            var E = m.dependencies;
            if (E !== null) {
              x = m.child;
              for (var T = E.firstContext; T !== null; ) {
                if (T.context === s) {
                  if (m.tag === 1) {
                    T = Sr(-1, o & -o), T.tag = 2;
                    var V = m.updateQueue;
                    if (V !== null) {
                      V = V.shared;
                      var X = V.pending;
                      X === null ? T.next = T : (T.next = X.next, X.next = T), V.pending = T;
                    }
                  }
                  m.lanes |= o, T = m.alternate, T !== null && (T.lanes |= o), oc(
                    m.return,
                    o,
                    a
                  ), E.lanes |= o;
                  break;
                }
                T = T.next;
              }
            } else if (m.tag === 10) x = m.type === a.type ? null : m.child;
            else if (m.tag === 18) {
              if (x = m.return, x === null) throw Error(n(341));
              x.lanes |= o, E = x.alternate, E !== null && (E.lanes |= o), oc(x, o, a), x = m.sibling;
            } else x = m.child;
            if (x !== null) x.return = m;
            else for (x = m; x !== null; ) {
              if (x === a) {
                x = null;
                break;
              }
              if (m = x.sibling, m !== null) {
                m.return = x.return, x = m;
                break;
              }
              x = x.return;
            }
            m = x;
          }
          wt(t, a, f.children, o), a = a.child;
        }
        return a;
      case 9:
        return f = a.type, s = a.pendingProps.children, Qn(a, o), f = Vt(f), s = s(f), a.flags |= 1, wt(t, a, s, o), a.child;
      case 14:
        return s = a.type, f = Zt(s, a.pendingProps), f = Zt(s.type, f), ah(t, a, s, f, o);
      case 15:
        return oh(t, a, a.type, a.pendingProps, o);
      case 17:
        return s = a.type, f = a.pendingProps, f = a.elementType === s ? f : Zt(s, f), Oi(t, a), a.tag = 1, _t(s) ? (t = !0, Si(a)) : t = !1, Qn(a, o), Qp(a, s, f), xc(a, s, f, o), _c(null, a, s, !0, t, o);
      case 19:
        return ph(t, a, o);
      case 22:
        return ih(t, a, o);
    }
    throw Error(n(156, a.tag));
  };
  function Mh(t, a) {
    return gf(t, a);
  }
  function iy(t, a, o, s) {
    this.tag = t, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = a, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ut(t, a, o, s) {
    return new iy(t, a, o, s);
  }
  function Uc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function ly(t) {
    if (typeof t == "function") return Uc(t) ? 1 : 0;
    if (t != null) {
      if (t = t.$$typeof, t === j) return 11;
      if (t === Y) return 14;
    }
    return 2;
  }
  function Jr(t, a) {
    var o = t.alternate;
    return o === null ? (o = Ut(t.tag, a, t.key, t.mode), o.elementType = t.elementType, o.type = t.type, o.stateNode = t.stateNode, o.alternate = t, t.alternate = o) : (o.pendingProps = a, o.type = t.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = t.flags & 14680064, o.childLanes = t.childLanes, o.lanes = t.lanes, o.child = t.child, o.memoizedProps = t.memoizedProps, o.memoizedState = t.memoizedState, o.updateQueue = t.updateQueue, a = t.dependencies, o.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }, o.sibling = t.sibling, o.index = t.index, o.ref = t.ref, o;
  }
  function Zi(t, a, o, s, f, m) {
    var x = 2;
    if (s = t, typeof t == "function") Uc(t) && (x = 1);
    else if (typeof t == "string") x = 5;
    else e: switch (t) {
      case ne:
        return Sn(o.children, f, m, a);
      case ue:
        x = 8, f |= 8;
        break;
      case ie:
        return t = Ut(12, o, a, f | 2), t.elementType = ie, t.lanes = m, t;
      case q:
        return t = Ut(13, o, a, f), t.elementType = q, t.lanes = m, t;
      case z:
        return t = Ut(19, o, a, f), t.elementType = z, t.lanes = m, t;
      case R:
        return Ji(o, f, m, a);
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case ve:
            x = 10;
            break e;
          case se:
            x = 9;
            break e;
          case j:
            x = 11;
            break e;
          case Y:
            x = 14;
            break e;
          case K:
            x = 16, s = null;
            break e;
        }
        throw Error(n(130, t == null ? t : typeof t, ""));
    }
    return a = Ut(x, o, a, f), a.elementType = t, a.type = s, a.lanes = m, a;
  }
  function Sn(t, a, o, s) {
    return t = Ut(7, t, s, a), t.lanes = o, t;
  }
  function Ji(t, a, o, s) {
    return t = Ut(22, t, s, a), t.elementType = R, t.lanes = o, t.stateNode = { isHidden: !1 }, t;
  }
  function Wc(t, a, o) {
    return t = Ut(6, t, null, a), t.lanes = o, t;
  }
  function Gc(t, a, o) {
    return a = Ut(4, t.children !== null ? t.children : [], t.key, a), a.lanes = o, a.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, a;
  }
  function sy(t, a, o, s, f) {
    this.tag = a, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ws(0), this.expirationTimes = ws(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ws(0), this.identifierPrefix = s, this.onRecoverableError = f, this.mutableSourceEagerHydrationData = null;
  }
  function Yc(t, a, o, s, f, m, x, E, T) {
    return t = new sy(t, a, o, E, T), a === 1 ? (a = 1, m === !0 && (a |= 8)) : a = 0, m = Ut(3, null, null, a), t.current = m, m.stateNode = t, m.memoizedState = { element: s, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, lc(m), t;
  }
  function cy(t, a, o) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ee, key: s == null ? null : "" + s, children: t, containerInfo: a, implementation: o };
  }
  function jh(t) {
    if (!t) return Hr;
    t = t._reactInternals;
    e: {
      if (dn(t) !== t || t.tag !== 1) throw Error(n(170));
      var a = t;
      do {
        switch (a.tag) {
          case 3:
            a = a.stateNode.context;
            break e;
          case 1:
            if (_t(a.type)) {
              a = a.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        a = a.return;
      } while (a !== null);
      throw Error(n(171));
    }
    if (t.tag === 1) {
      var o = t.type;
      if (_t(o)) return fp(t, o, a);
    }
    return a;
  }
  function Dh(t, a, o, s, f, m, x, E, T) {
    return t = Yc(o, s, !0, t, f, m, x, E, T), t.context = jh(null), o = t.current, s = xt(), f = Xr(o), m = Sr(s, f), m.callback = a ?? null, Gr(o, m, f), t.current.lanes = f, Ta(t, f, s), Pt(t, s), t;
  }
  function el(t, a, o, s) {
    var f = a.current, m = xt(), x = Xr(f);
    return o = jh(o), a.context === null ? a.context = o : a.pendingContext = o, a = Sr(m, x), a.payload = { element: t }, s = s === void 0 ? null : s, s !== null && (a.callback = s), t = Gr(f, a, x), t !== null && (tr(t, f, x, m), Ti(t, f, x)), x;
  }
  function tl(t) {
    if (t = t.current, !t.child) return null;
    switch (t.child.tag) {
      case 5:
        return t.child.stateNode;
      default:
        return t.child.stateNode;
    }
  }
  function Kh(t, a) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var o = t.retryLane;
      t.retryLane = o !== 0 && o < a ? o : a;
    }
  }
  function qc(t, a) {
    Kh(t, a), (t = t.alternate) && Kh(t, a);
  }
  function uy() {
    return null;
  }
  var Oh = typeof reportError == "function" ? reportError : function(t) {
    console.error(t);
  };
  function Qc(t) {
    this._internalRoot = t;
  }
  rl.prototype.render = Qc.prototype.render = function(t) {
    var a = this._internalRoot;
    if (a === null) throw Error(n(409));
    el(t, a, null, null);
  }, rl.prototype.unmount = Qc.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var a = t.containerInfo;
      wn(function() {
        el(null, t, null, null);
      }), a[br] = null;
    }
  };
  function rl(t) {
    this._internalRoot = t;
  }
  rl.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var a = Cf();
      t = { blockedOn: null, target: t, priority: a };
      for (var o = 0; o < Dr.length && a !== 0 && a < Dr[o].priority; o++) ;
      Dr.splice(o, 0, t), o === 0 && $f(t);
    }
  };
  function Xc(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function nl(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "));
  }
  function Vh() {
  }
  function dy(t, a, o, s, f) {
    if (f) {
      if (typeof s == "function") {
        var m = s;
        s = function() {
          var V = tl(x);
          m.call(V);
        };
      }
      var x = Dh(a, s, t, 0, null, !1, !1, "", Vh);
      return t._reactRootContainer = x, t[br] = x.current, Ua(t.nodeType === 8 ? t.parentNode : t), wn(), x;
    }
    for (; f = t.lastChild; ) t.removeChild(f);
    if (typeof s == "function") {
      var E = s;
      s = function() {
        var V = tl(T);
        E.call(V);
      };
    }
    var T = Yc(t, 0, !1, null, null, !1, !1, "", Vh);
    return t._reactRootContainer = T, t[br] = T.current, Ua(t.nodeType === 8 ? t.parentNode : t), wn(function() {
      el(a, T, o, s);
    }), T;
  }
  function al(t, a, o, s, f) {
    var m = o._reactRootContainer;
    if (m) {
      var x = m;
      if (typeof f == "function") {
        var E = f;
        f = function() {
          var T = tl(x);
          E.call(T);
        };
      }
      el(a, x, t, f);
    } else x = dy(o, a, t, f, s);
    return tl(x);
  }
  kf = function(t) {
    switch (t.tag) {
      case 3:
        var a = t.stateNode;
        if (a.current.memoizedState.isDehydrated) {
          var o = za(a.pendingLanes);
          o !== 0 && (xs(a, o | 1), Pt(a, Ze()), (Te & 6) === 0 && (ta = Ze() + 500, Ur()));
        }
        break;
      case 13:
        wn(function() {
          var s = kr(t, 1);
          if (s !== null) {
            var f = xt();
            tr(s, t, 1, f);
          }
        }), qc(t, 1);
    }
  }, ks = function(t) {
    if (t.tag === 13) {
      var a = kr(t, 134217728);
      if (a !== null) {
        var o = xt();
        tr(a, t, 134217728, o);
      }
      qc(t, 134217728);
    }
  }, Sf = function(t) {
    if (t.tag === 13) {
      var a = Xr(t), o = kr(t, a);
      if (o !== null) {
        var s = xt();
        tr(o, t, a, s);
      }
      qc(t, a);
    }
  }, Cf = function() {
    return Le;
  }, _f = function(t, a) {
    var o = Le;
    try {
      return Le = t, a();
    } finally {
      Le = o;
    }
  }, hs = function(t, a, o) {
    switch (a) {
      case "input":
        if (sr(t, o), a = o.name, o.type === "radio" && a != null) {
          for (o = t; o.parentNode; ) o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), a = 0; a < o.length; a++) {
            var s = o[a];
            if (s !== t && s.form === t.form) {
              var f = xi(s);
              if (!f) throw Error(n(90));
              oe(s), sr(s, f);
            }
          }
        }
        break;
      case "textarea":
        Jd(t, o);
        break;
      case "select":
        a = o.value, a != null && Nn(t, !!o.multiple, a, !1);
    }
  }, cf = Vc, uf = wn;
  var fy = { usingClientEntryPoint: !1, Events: [Ya, Vn, xi, lf, sf, Vc] }, so = { findFiberByHostInstance: fn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, py = { bundleType: so.bundleType, version: so.version, rendererPackageName: so.rendererPackageName, rendererConfig: so.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: W.ReactCurrentDispatcher, findHostInstanceByFiber: function(t) {
    return t = hf(t), t === null ? null : t.stateNode;
  }, findFiberByHostInstance: so.findFiberByHostInstance || uy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ol = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ol.isDisabled && ol.supportsFiber) try {
      ri = ol.inject(py), cr = ol;
    } catch {
    }
  }
  return Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fy, Ft.createPortal = function(t, a) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Xc(a)) throw Error(n(200));
    return cy(t, a, null, o);
  }, Ft.createRoot = function(t, a) {
    if (!Xc(t)) throw Error(n(299));
    var o = !1, s = "", f = Oh;
    return a != null && (a.unstable_strictMode === !0 && (o = !0), a.identifierPrefix !== void 0 && (s = a.identifierPrefix), a.onRecoverableError !== void 0 && (f = a.onRecoverableError)), a = Yc(t, 1, !1, null, null, o, !1, s, f), t[br] = a.current, Ua(t.nodeType === 8 ? t.parentNode : t), new Qc(a);
  }, Ft.findDOMNode = function(t) {
    if (t == null) return null;
    if (t.nodeType === 1) return t;
    var a = t._reactInternals;
    if (a === void 0)
      throw typeof t.render == "function" ? Error(n(188)) : (t = Object.keys(t).join(","), Error(n(268, t)));
    return t = hf(a), t = t === null ? null : t.stateNode, t;
  }, Ft.flushSync = function(t) {
    return wn(t);
  }, Ft.hydrate = function(t, a, o) {
    if (!nl(a)) throw Error(n(200));
    return al(null, t, a, !0, o);
  }, Ft.hydrateRoot = function(t, a, o) {
    if (!Xc(t)) throw Error(n(405));
    var s = o != null && o.hydratedSources || null, f = !1, m = "", x = Oh;
    if (o != null && (o.unstable_strictMode === !0 && (f = !0), o.identifierPrefix !== void 0 && (m = o.identifierPrefix), o.onRecoverableError !== void 0 && (x = o.onRecoverableError)), a = Dh(a, null, t, 1, o ?? null, f, !1, m, x), t[br] = a.current, Ua(t), s) for (t = 0; t < s.length; t++) o = s[t], f = o._getVersion, f = f(o._source), a.mutableSourceEagerHydrationData == null ? a.mutableSourceEagerHydrationData = [o, f] : a.mutableSourceEagerHydrationData.push(
      o,
      f
    );
    return new rl(a);
  }, Ft.render = function(t, a, o) {
    if (!nl(a)) throw Error(n(200));
    return al(null, t, a, !1, o);
  }, Ft.unmountComponentAtNode = function(t) {
    if (!nl(t)) throw Error(n(40));
    return t._reactRootContainer ? (wn(function() {
      al(null, null, t, !1, function() {
        t._reactRootContainer = null, t[br] = null;
      });
    }), !0) : !1;
  }, Ft.unstable_batchedUpdates = Vc, Ft.unstable_renderSubtreeIntoContainer = function(t, a, o, s) {
    if (!nl(o)) throw Error(n(200));
    if (t == null || t._reactInternals === void 0) throw Error(n(38));
    return al(t, a, o, !1, s);
  }, Ft.version = "18.3.1-next-f1338f8080-20240426", Ft;
}
var Qh;
function Lg() {
  if (Qh) return eu.exports;
  Qh = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (r) {
        console.error(r);
      }
  }
  return e(), eu.exports = xy(), eu.exports;
}
var Xh;
function ky() {
  if (Xh) return il;
  Xh = 1;
  var e = Lg();
  return il.createRoot = e.createRoot, il.hydrateRoot = e.hydrateRoot, il;
}
var Sy = ky();
const Cy = `:root{--border-highlight-color: rgb(7, 45, 162);--border-neutral-bold-color: rgba(0, 0, 0, .8);--border-neutral-regular-color: rgba(0, 0, 0, .3);--border-neutral-subtle-color: rgba(0, 0, 0, .1);--border-neutral-minimal-color: rgba(0, 0, 0, .05);--border-positive-color: rgb(43, 92, 25);--border-warning-color: rgb(195, 92, 0);--border-negative-color: rgb(203, 31, 31);--surface-highlight-subtle-color: rgb(211, 221, 253);--surface-highlight-bold-color: rgb(7, 45, 162);--surface-container-color: rgb(255, 255, 255);--surface-level-01-color: rgba(250, 250, 250, .98);--surface-level-02-color: rgba(242, 242, 242, .95);--surface-level-03-color: rgba(235, 235, 235, .92);--surface-inverse-color: rgba(0, 0, 0, .97);--surface-positive-subtle-color: rgb(222, 242, 214);--surface-positive-bold-color: rgb(43, 92, 25);--surface-warning-subtle-color: rgb(255, 228, 204);--surface-warning-bold-color: rgb(137, 64, 0);--surface-negative-subtle-color: rgb(245, 210, 210);--surface-negative-bold-color: rgb(203, 31, 31);--surface-overlay-color: rgba(255, 255, 255, .97);--content-highlight-color: rgb(7, 45, 162);--content-neutral-bold-color: rgba(15, 15, 15, .95);--content-neutral-regular-color: rgba(15, 15, 15, .75);--content-neutral-subtle-color: rgba(15, 15, 15, .6);--content-inverse-bold-color: rgb(255, 255, 255);--content-inverse-regular-color: rgba(255, 255, 255, .7);--content-inverse-subtle-color: rgba(255, 255, 255, .6);--content-positive-color: rgb(28, 60, 17);--content-warning-color: rgb(92, 43, 0);--content-negative-color: rgb(155, 24, 24);--interactive-highlight-color: rgb(7, 45, 162);--interactive-neutral-bold-color: rgb(0, 0, 0);--interactive-neutral-regular-color: rgba(235, 235, 235, .92);--interactive-neutral-subtle-color: rgba(242, 242, 242, .95);--interactive-neutral-minimal-color: rgb(255, 255, 255);--interactive-inverse-color: rgb(255, 255, 255);--interactive-negative-bold-color: rgb(155, 24, 24);--interactive-negative-subtle-color: rgb(245, 210, 210);--background-base-color: rgb(235, 240, 254);--background-accent-color: rgb(123, 154, 250);--background-glow-color: rgb(186, 132, 241);--background-backdrop-color: rgba(255, 255, 255, .8);--paloma-font-family-body: Electronic Arts Text;--paloma-font-family-heading: Electronic Arts Display;--font-size-body-medium: 1rem;--line-height-body-medium: 1.5rem;--font-size-body-large: 1.125rem;--line-height-body-large: 2rem;--font-size-body-x-small: .75rem;--line-height-body-x-small: 1rem;--font-size-body-small: .875rem;--line-height-body-small: 1.25rem;--font-size-heading-x-small: 1.25rem;--line-height-heading-x-small: 1.75rem;--font-size-lg-heading-large: 3.25rem;--line-height-lg-heading-large: 4rem;--font-size-xs-heading-large: 2rem;--line-height-xs-heading-large: 2.5rem;--font-size-heading-small: 1.75rem;--line-height-heading-small: 2.25rem;--font-size-xs-heading-medium: 2rem;--line-height-xs-heading-medium: 2.5rem;--font-size-lg-heading-x-large: 4.5rem;--line-height-lg-heading-x-large: 5rem;--font-size-lg-heading-medium: 2.25rem;--line-height-lg-heading-medium: 2.75rem;--font-size-xs-heading-x-large: 2.25rem;--line-height-xs-heading-x-large: 2.625rem }[data-paloma-mode=dark]{--border-highlight-color: rgb(123, 154, 250);--border-neutral-bold-color: rgba(255, 255, 255, .8);--border-neutral-regular-color: rgba(255, 255, 255, .3);--border-neutral-subtle-color: rgba(255, 255, 255, .1);--border-neutral-minimal-color: rgba(255, 255, 255, .05);--border-positive-color: rgb(88, 188, 52);--border-warning-color: rgb(255, 120, 0);--border-negative-color: rgb(221, 108, 108);--surface-highlight-subtle-color: rgba(211, 221, 253, .1);--surface-highlight-bold-color: rgb(211, 221, 253);--surface-container-color: rgba(15, 15, 15, .06);--surface-level-01-color: rgba(31, 31, 31, .12);--surface-level-02-color: rgba(61, 61, 61, .16);--surface-level-03-color: rgba(122, 122, 122, .2);--surface-inverse-color: rgba(255, 255, 255, .97);--surface-positive-subtle-color: rgba(27, 58, 16, .4);--surface-positive-bold-color: rgb(88, 188, 52);--surface-warning-subtle-color: rgba(79, 37, 0, .5);--surface-warning-bold-color: rgb(255, 120, 0);--surface-negative-subtle-color: rgba(63, 10, 10, .5);--surface-negative-bold-color: rgb(221, 108, 108);--surface-overlay-color: rgba(0, 0, 0, .97);--content-highlight-color: rgb(123, 154, 250);--content-neutral-bold-color: rgba(255, 255, 255, .97);--content-neutral-regular-color: rgba(255, 255, 255, .75);--content-neutral-subtle-color: rgba(255, 255, 255, .5);--content-inverse-bold-color: rgb(15, 15, 15);--content-inverse-regular-color: rgba(0, 0, 0, .75);--content-inverse-subtle-color: rgba(0, 0, 0, .6);--content-positive-color: rgb(188, 228, 174);--content-warning-color: rgb(255, 120, 0);--content-negative-color: rgb(229, 144, 144);--interactive-highlight-color: rgb(123, 154, 250);--interactive-neutral-bold-color: rgb(255, 255, 255);--interactive-neutral-regular-color: rgba(122, 122, 122, .2);--interactive-neutral-subtle-color: rgba(61, 61, 61, .16);--interactive-neutral-minimal-color: rgba(61, 61, 61, .16);--interactive-inverse-color: rgb(15, 15, 15);--interactive-negative-bold-color: rgb(245, 210, 210);--interactive-negative-subtle-color: rgb(229, 144, 144);--background-base-color: rgb(1, 8, 29);--background-accent-color: rgb(109, 23, 196);--background-glow-color: rgb(9, 61, 216);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-mode=light]{--border-highlight-color: rgb(7, 45, 162);--border-neutral-bold-color: rgba(0, 0, 0, .8);--border-neutral-regular-color: rgba(0, 0, 0, .3);--border-neutral-subtle-color: rgba(0, 0, 0, .1);--border-neutral-minimal-color: rgba(0, 0, 0, .05);--border-positive-color: rgb(43, 92, 25);--border-warning-color: rgb(195, 92, 0);--border-negative-color: rgb(203, 31, 31);--surface-highlight-subtle-color: rgb(211, 221, 253);--surface-highlight-bold-color: rgb(7, 45, 162);--surface-container-color: rgb(255, 255, 255);--surface-level-01-color: rgba(250, 250, 250, .98);--surface-level-02-color: rgba(242, 242, 242, .95);--surface-level-03-color: rgba(235, 235, 235, .92);--surface-inverse-color: rgba(0, 0, 0, .97);--surface-positive-subtle-color: rgb(222, 242, 214);--surface-positive-bold-color: rgb(43, 92, 25);--surface-warning-subtle-color: rgb(255, 228, 204);--surface-warning-bold-color: rgb(137, 64, 0);--surface-negative-subtle-color: rgb(245, 210, 210);--surface-negative-bold-color: rgb(203, 31, 31);--surface-overlay-color: rgba(255, 255, 255, .97);--content-highlight-color: rgb(7, 45, 162);--content-neutral-bold-color: rgba(15, 15, 15, .95);--content-neutral-regular-color: rgba(15, 15, 15, .75);--content-neutral-subtle-color: rgba(15, 15, 15, .6);--content-inverse-bold-color: rgb(255, 255, 255);--content-inverse-regular-color: rgba(255, 255, 255, .7);--content-inverse-subtle-color: rgba(255, 255, 255, .6);--content-positive-color: rgb(28, 60, 17);--content-warning-color: rgb(92, 43, 0);--content-negative-color: rgb(155, 24, 24);--interactive-highlight-color: rgb(7, 45, 162);--interactive-neutral-bold-color: rgb(0, 0, 0);--interactive-neutral-regular-color: rgba(235, 235, 235, .92);--interactive-neutral-subtle-color: rgba(242, 242, 242, .95);--interactive-neutral-minimal-color: rgb(255, 255, 255);--interactive-inverse-color: rgb(255, 255, 255);--interactive-negative-bold-color: rgb(155, 24, 24);--interactive-negative-subtle-color: rgb(245, 210, 210);--background-base-color: rgb(235, 240, 254);--background-accent-color: rgb(123, 154, 250);--background-glow-color: rgb(186, 132, 241);--background-backdrop-color: rgba(255, 255, 255, .8);--paloma-font-family-body: Electronic Arts Text;--paloma-font-family-heading: Electronic Arts Display }[data-paloma-theme=ea-blue][data-paloma-mode=light]{--border-highlight-color: rgb(7, 45, 162);--surface-highlight-subtle-color: rgb(211, 221, 253);--surface-highlight-bold-color: rgb(7, 45, 162);--content-highlight-color: rgb(7, 45, 162);--interactive-highlight-color: rgb(7, 45, 162);--background-base-color: rgb(235, 240, 254);--background-accent-color: rgb(123, 154, 250);--background-glow-color: rgb(186, 132, 241);--background-backdrop-color: rgba(255, 255, 255, .8) }[data-paloma-theme=ea-blue][data-paloma-mode=dark]{--border-highlight-color: rgb(123, 154, 250);--surface-highlight-subtle-color: rgba(211, 221, 253, .1);--surface-highlight-bold-color: rgb(211, 221, 253);--content-highlight-color: rgb(123, 154, 250);--interactive-highlight-color: rgb(123, 154, 250);--background-base-color: rgb(1, 8, 29);--background-accent-color: rgb(109, 23, 196);--background-glow-color: rgb(9, 61, 216);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-theme=ea-sims][data-paloma-mode=light]{--border-highlight-color: rgb(30, 134, 179);--surface-highlight-subtle-color: rgba(124, 203, 236, .1);--surface-highlight-bold-color: rgb(22, 101, 134);--content-highlight-color: rgb(22, 101, 134);--interactive-highlight-color: rgb(31, 52, 98);--background-base-color: rgb(235, 238, 246);--background-accent-color: rgb(168, 220, 243);--background-glow-color: rgb(173, 187, 219);--background-backdrop-color: rgba(255, 255, 255, .8) }[data-paloma-theme=ea-sims][data-paloma-mode=dark]{--border-highlight-color: rgb(30, 134, 179);--surface-highlight-subtle-color: rgba(81, 185, 230, .1);--surface-highlight-bold-color: rgb(168, 220, 243);--content-highlight-color: rgb(168, 220, 243);--interactive-highlight-color: rgb(37, 168, 224);--background-base-color: rgb(20, 34, 66);--background-accent-color: rgb(37, 168, 224);--background-glow-color: rgb(51, 86, 164);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-theme=fc-green][data-paloma-mode=light]{--border-highlight-color: rgb(4, 146, 62);--surface-highlight-subtle-color: rgba(57, 246, 134, .1);--surface-highlight-bold-color: rgb(4, 146, 62);--content-highlight-color: rgb(3, 98, 42);--interactive-highlight-color: rgb(3, 98, 42);--background-base-color: rgb(227, 251, 233);--background-accent-color: rgb(106, 248, 164);--background-glow-color: rgb(7, 244, 104);--background-backdrop-color: rgba(255, 255, 255, .8) }[data-paloma-theme=fc-green][data-paloma-mode=dark]{--border-highlight-color: rgb(4, 146, 62);--surface-highlight-subtle-color: rgba(106, 248, 164, .1);--surface-highlight-bold-color: rgb(57, 246, 134);--content-highlight-color: rgb(7, 244, 104);--interactive-highlight-color: rgb(6, 195, 83);--background-base-color: rgb(2, 11, 7);--background-accent-color: rgb(3, 98, 42);--background-glow-color: rgb(7, 244, 104);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-theme=ea-madden][data-paloma-mode=dark]{--border-highlight-color: rgb(255, 41, 0);--surface-highlight-subtle-color: rgba(255, 88, 56, .1);--surface-highlight-bold-color: rgb(255, 88, 56);--content-highlight-color: rgb(255, 88, 56);--interactive-highlight-color: rgb(255, 88, 56);--background-base-color: rgb(0, 0, 0);--background-accent-color: rgb(255, 127, 102);--background-glow-color: rgb(255, 41, 0);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-theme=ea-madden][data-paloma-mode=light]{--border-highlight-color: rgb(255, 88, 56);--surface-highlight-subtle-color: rgba(255, 41, 0, .1);--surface-highlight-bold-color: rgb(255, 41, 0);--content-highlight-color: rgb(204, 33, 0);--interactive-highlight-color: rgb(204, 33, 0);--background-base-color: rgb(255, 238, 235);--background-accent-color: rgb(255, 222, 215);--background-glow-color: rgb(255, 212, 204);--background-backdrop-color: rgba(255, 255, 255, .8) }[data-paloma-theme=ea-battlefield6][data-paloma-mode=light]{--border-highlight-color: rgb(255, 60, 0);--surface-highlight-subtle-color: rgba(229, 54, 0, .1);--surface-highlight-bold-color: rgb(229, 54, 0);--content-highlight-color: rgb(204, 48, 0);--interactive-highlight-color: rgb(204, 48, 0);--background-base-color: rgb(191, 202, 209);--background-accent-color: rgb(255, 216, 204);--background-glow-color: rgb(255, 177, 153);--background-backdrop-color: rgba(255, 255, 255, .8) }[data-paloma-theme=ea-battlefield6][data-paloma-mode=dark]{--border-highlight-color: rgb(229, 54, 0);--surface-highlight-subtle-color: rgba(255, 60, 0, .1);--surface-highlight-bold-color: rgb(255, 60, 0);--content-highlight-color: rgb(255, 60, 0);--interactive-highlight-color: rgb(255, 60, 0);--background-base-color: rgb(0, 0, 0);--background-accent-color: rgb(255, 99, 51);--background-glow-color: rgb(229, 54, 0);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-theme=purple][data-paloma-mode=light]{--border-highlight-color: rgb(217, 115, 186);--surface-highlight-subtle-color: rgb(243, 212, 234);--surface-highlight-bold-color: rgb(151, 32, 115);--content-highlight-color: rgb(151, 32, 115);--interactive-highlight-color: rgb(151, 32, 115);--background-base-color: rgb(252, 245, 250);--background-accent-color: rgb(217, 115, 186);--background-glow-color: rgb(186, 132, 241);--background-backdrop-color: rgba(255, 255, 255, .8) }[data-paloma-theme=purple][data-paloma-mode=dark]{--border-highlight-color: rgb(151, 32, 115);--surface-highlight-subtle-color: rgba(243, 212, 234, .1);--surface-highlight-bold-color: rgb(243, 212, 234);--content-highlight-color: rgb(217, 115, 186);--interactive-highlight-color: rgb(217, 115, 186);--background-base-color: rgb(22, 5, 17);--background-accent-color: rgb(151, 32, 115);--background-glow-color: rgb(135, 42, 230);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-theme=red][data-paloma-mode=light]{--border-highlight-color: rgb(229, 144, 144);--surface-highlight-subtle-color: rgb(245, 210, 210);--surface-highlight-bold-color: rgb(109, 17, 17);--content-highlight-color: rgb(109, 17, 17);--interactive-highlight-color: rgb(109, 17, 17);--background-base-color: rgb(255, 235, 235);--background-accent-color: rgb(229, 144, 144);--background-glow-color: rgb(229, 144, 144);--background-backdrop-color: rgba(255, 255, 255, .8) }[data-paloma-theme=red][data-paloma-mode=dark]{--border-highlight-color: rgb(109, 17, 17);--surface-highlight-subtle-color: rgba(245, 210, 210, .1);--surface-highlight-bold-color: rgb(245, 210, 210);--content-highlight-color: rgb(229, 144, 144);--interactive-highlight-color: rgb(229, 144, 144);--background-base-color: rgb(22, 3, 3);--background-accent-color: rgb(155, 24, 24);--background-glow-color: rgb(224, 0, 0);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-theme=ea-madden][data-paloma-variant=loyalty][data-paloma-mode=dark]{--background-glow-color: rgba(234, 205, 111, .3);--content-highlight-color: rgb(234, 205, 111) }[type=search]::-webkit-search-decoration{display:none}[type=search]::-webkit-search-cancel-button{display:none}[type=search]::-webkit-search-results-button{display:none}[type=search]::-webkit-search-results-decoration{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.container{width:100%;margin-right:auto;margin-left:auto;padding-right:24px;padding-left:24px}@media(min-width:1440px){.container{max-width:1440px;padding-right:40px;padding-left:40px}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.visible{visibility:visible}.invisible{visibility:hidden}.collapse{visibility:collapse}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.\\!relative{position:relative!important}.relative{position:relative}.\\!sticky{position:sticky!important}.sticky{position:sticky}.inset-0{inset:0}.inset-x-0{left:0;right:0}.-bottom-0{bottom:-0px}.-bottom-0\\.5{bottom:-.125rem}.-bottom-1{bottom:-.25rem}.-bottom-1\\.5{bottom:-.375rem}.-bottom-2{bottom:-.5rem}.-bottom-3{bottom:-.75rem}.-bottom-3\\.5{bottom:-.875rem}.-bottom-8{bottom:-2rem}.-bottom-\\[6px\\]{bottom:-6px}.-left-0{left:-0px}.-left-0\\.5{left:-.125rem}.-left-2{left:-.5rem}.-left-8{left:-2rem}.-left-\\[125\\%\\]{left:-125%}.-left-\\[20px\\]{left:-20px}.-left-\\[50\\%\\]{left:-50%}.-right-0{right:-0px}.-right-0\\.5{right:-.125rem}.-right-2{right:-.5rem}.-right-\\[40\\%\\]{right:-40%}.-right-\\[50\\%\\]{right:-50%}.-top-0{top:-0px}.-top-0\\.5{top:-.125rem}.-top-1{top:-.25rem}.-top-1\\.5{top:-.375rem}.-top-10{top:-2.5rem}.-top-2{top:-.5rem}.-top-3{top:-.75rem}.-top-3\\.5{top:-.875rem}.bottom-0{bottom:0}.bottom-1{bottom:.25rem}.bottom-2{bottom:.5rem}.bottom-\\[10\\%\\]{bottom:10%}.end-0{inset-inline-end:0px}.left-0{left:0}.left-1\\/2{left:50%}.left-4{left:1rem}.left-\\[-350px\\]{left:-350px}.left-\\[12\\.5\\%\\]{left:12.5%}.right-0{right:0}.right-3{right:.75rem}.right-\\[15\\%\\]{right:15%}.top-0{top:0}.top-1{top:.25rem}.top-12{top:3rem}.top-14{top:3.5rem}.top-2{top:.5rem}.top-28{top:7rem}.top-3{top:.75rem}.top-4{top:1rem}.top-\\[10\\%\\]{top:10%}.top-\\[20\\%\\]{top:20%}.top-\\[7\\.25rem\\]{top:7.25rem}.top-\\[90vh\\]{top:90vh}.-z-\\[1\\]{z-index:-1}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.z-\\[10\\]{z-index:10}.z-\\[15\\]{z-index:15}.z-\\[2147483646\\]{z-index:2147483646}.z-\\[2147483647\\]{z-index:2147483647}.z-\\[90\\]{z-index:90}.col-span-4{grid-column:span 4 / span 4}.col-span-full{grid-column:1 / -1}.\\!col-start-3{grid-column-start:3!important}.m-0{margin:0}.m-auto{margin:auto}.mx-0{margin-left:0;margin-right:0}.mx-0\\.5{margin-left:.125rem;margin-right:.125rem}.mx-1{margin-left:.25rem;margin-right:.25rem}.mx-10{margin-left:2.5rem;margin-right:2.5rem}.mx-auto{margin-left:auto;margin-right:auto}.my-0{margin-top:0;margin-bottom:0}.my-1{margin-top:.25rem;margin-bottom:.25rem}.my-2{margin-top:.5rem;margin-bottom:.5rem}.my-3{margin-top:.75rem;margin-bottom:.75rem}.my-4{margin-top:1rem;margin-bottom:1rem}.my-auto{margin-top:auto;margin-bottom:auto}.-mb-2{margin-bottom:-.5rem}.-ms-10{margin-inline-start:-2.5rem}.-mt-10{margin-top:-2.5rem}.-mt-20{margin-top:-5rem}.-mt-6{margin-top:-1.5rem}.-mt-\\[52px\\]{margin-top:-52px}.-mt-\\[72px\\]{margin-top:-72px}.mb-1{margin-bottom:.25rem}.mb-10{margin-bottom:2.5rem}.mb-2{margin-bottom:.5rem}.mb-20{margin-bottom:5rem}.mb-3{margin-bottom:.75rem}.mb-5{margin-bottom:1.25rem}.mb-6{margin-bottom:1.5rem}.mb-\\[52px\\]{margin-bottom:52px}.mb-\\[72px\\]{margin-bottom:72px}.ml-0{margin-left:0}.ml-4{margin-left:1rem}.ml-5{margin-left:1.25rem}.ml-6{margin-left:1.5rem}.ml-8{margin-left:2rem}.mr-1{margin-right:.25rem}.mr-4{margin-right:1rem}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-20{margin-top:5rem}.mt-3{margin-top:.75rem}.mt-32{margin-top:8rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.mt-96{margin-top:24rem}.mt-auto{margin-top:auto}.box-border{box-sizing:border-box}.box-content{box-sizing:content-box}.line-clamp-1{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.line-clamp-2{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.line-clamp-3{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3}.line-clamp-4{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4}.line-clamp-5{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:5}.line-clamp-6{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:6}.line-clamp-none{overflow:visible;display:block;-webkit-box-orient:horizontal;-webkit-line-clamp:none}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.contents{display:contents}.hidden{display:none}.aspect-\\[16\\/9\\]{aspect-ratio:16/9}.aspect-\\[2\\/3\\]{aspect-ratio:2/3}.aspect-\\[3\\/2\\]{aspect-ratio:3/2}.aspect-\\[9\\/16\\]{aspect-ratio:9/16}.aspect-square{aspect-ratio:1 / 1}.size-8{width:2rem;height:2rem}.h-1{height:.25rem}.h-10{height:2.5rem}.h-11{height:2.75rem}.h-14{height:3.5rem}.h-16{height:4rem}.h-2{height:.5rem}.h-2\\.5{height:.625rem}.h-20{height:5rem}.h-24{height:6rem}.h-3{height:.75rem}.h-40{height:10rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-\\[100dvh\\]{height:100dvh}.h-\\[100px\\]{height:100px}.h-\\[100vh\\]{height:100vh}.h-\\[106px\\]{height:106px}.h-\\[110px\\]{height:110px}.h-\\[120vh\\]{height:120vh}.h-\\[140px\\]{height:140px}.h-\\[160px\\]{height:160px}.h-\\[1lh\\]{height:1lh}.h-\\[200px\\]{height:200px}.h-\\[300px\\]{height:300px}.h-\\[32px\\]{height:32px}.h-\\[340px\\]{height:340px}.h-\\[400px\\]{height:400px}.h-\\[58px\\]{height:58px}.h-\\[62px\\]{height:62px}.h-\\[64px\\]{height:64px}.h-\\[68px\\]{height:68px}.h-\\[700px\\]{height:700px}.h-\\[70px\\]{height:70px}.h-\\[72px\\]{height:72px}.h-\\[900px\\]{height:900px}.h-\\[90vh\\]{height:90vh}.h-\\[calc\\(100vh_-_2em\\)\\]{height:calc(100vh - 2em)}.h-\\[calc\\(var\\(--vh\\)\\*100\\)\\]{height:calc(var(--vh) * 100)}.h-auto{height:auto}.h-fit{height:-moz-fit-content;height:fit-content}.h-full{height:100%}.h-screen{height:100vh}.max-h-\\[900px\\]{max-height:900px}.max-h-\\[calc\\(100dvh_-_0\\.625rem\\)\\]{max-height:calc(100dvh - .625rem)}.max-h-\\[calc\\(100vh_-_0\\.625rem\\)\\]{max-height:calc(100vh - .625rem)}.max-h-\\[calc\\(var\\(--vh\\)\\*100_-_0\\.625rem\\)\\]{max-height:calc(var(--vh) * 100 - .625rem)}.max-h-full{max-height:100%}.max-h-screen{max-height:100vh}.min-h-24{min-height:6rem}.min-h-6{min-height:1.5rem}.min-h-\\[100dvh\\]{min-height:100dvh}.min-h-\\[100vh\\]{min-height:100vh}.min-h-\\[1px\\]{min-height:1px}.min-h-\\[320px\\]{min-height:320px}.min-h-\\[900px\\]{min-height:900px}.min-h-screen{min-height:100vh}.w-0{width:0px}.w-1{width:.25rem}.w-10{width:2.5rem}.w-11{width:2.75rem}.w-12{width:3rem}.w-14{width:3.5rem}.w-16{width:4rem}.w-2{width:.5rem}.w-2\\.5{width:.625rem}.w-20{width:5rem}.w-24{width:6rem}.w-3{width:.75rem}.w-3\\/4{width:75%}.w-40{width:10rem}.w-48{width:12rem}.w-6{width:1.5rem}.w-8{width:2rem}.w-\\[100px\\]{width:100px}.w-\\[100vw\\]{width:100vw}.w-\\[110px\\]{width:110px}.w-\\[1280px\\]{width:1280px}.w-\\[136px\\]{width:136px}.w-\\[140px\\]{width:140px}.w-\\[148px\\]{width:148px}.w-\\[175\\%\\]{width:175%}.w-\\[200\\%\\]{width:200%}.w-\\[200px\\]{width:200px}.w-\\[250\\%\\]{width:250%}.w-\\[250px\\]{width:250px}.w-\\[256px\\]{width:256px}.w-\\[300px\\]{width:300px}.w-\\[30vw\\]{width:30vw}.w-\\[312px\\]{width:312px}.w-\\[32px\\]{width:32px}.w-\\[393px\\]{width:393px}.w-\\[400px\\]{width:400px}.w-\\[500px\\]{width:500px}.w-\\[58px\\]{width:58px}.w-\\[6\\.25rem\\]{width:6.25rem}.w-\\[600px\\]{width:600px}.w-\\[62px\\]{width:62px}.w-\\[64px\\]{width:64px}.w-\\[68px\\]{width:68px}.w-\\[700px\\]{width:700px}.w-\\[70px\\]{width:70px}.w-\\[72px\\]{width:72px}.w-\\[73px\\]{width:73px}.w-\\[800px\\]{width:800px}.w-\\[80vw\\]{width:80vw}.w-\\[9\\.375rem\\]{width:9.375rem}.w-\\[90vw\\]{width:90vw}.w-\\[95vw\\]{width:95vw}.w-auto{width:auto}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.w-min{width:-moz-min-content;width:min-content}.w-screen{width:100vw}.min-w-0{min-width:0px}.min-w-36{min-width:9rem}.min-w-6{min-width:1.5rem}.min-w-\\[0\\]{min-width:0}.min-w-\\[100px\\]{min-width:100px}.min-w-\\[140px\\]{min-width:140px}.min-w-\\[1px\\]{min-width:1px}.min-w-\\[280px\\]{min-width:280px}.min-w-\\[clamp\\(52\\.75rem\\,_100vw\\,_120rem\\)\\]{min-width:clamp(52.75rem,100vw,120rem)}.min-w-\\[min\\(32\\.188rem\\,_50\\.688rem\\)\\]{min-width:min(32.188rem,50.688rem)}.min-w-fit{min-width:-moz-fit-content;min-width:fit-content}.max-w-\\[100vw\\]{max-width:100vw}.max-w-\\[1440px\\]{max-width:1440px}.max-w-\\[1920px\\]{max-width:1920px}.max-w-\\[600px\\]{max-width:600px}.max-w-\\[80\\%\\]{max-width:80%}.max-w-\\[80px\\]{max-width:80px}.max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.flex-auto{flex:1 1 auto}.flex-none{flex:none}.flex-shrink-0{flex-shrink:0}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.flex-grow,.flex-grow-\\[1\\]{flex-grow:1}.flex-grow-\\[3\\]{flex-grow:3}.basis-\\[0\\%\\]{flex-basis:0%}.origin-center{transform-origin:center}.origin-left{transform-origin:left}.origin-top-left{transform-origin:top left}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-1\\/4{--tw-translate-x: -25%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-\\[45\\%\\]{--tw-translate-y: -45%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-full{--tw-translate-y: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-1\\/2{--tw-translate-x: 50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[10\\%\\]{--tw-translate-x: 10%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[15\\%\\]{--tw-translate-x: 15%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[20\\%\\]{--tw-translate-x: 20%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-full{--tw-translate-x: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-0{--tw-translate-y: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-1\\/2{--tw-translate-y: 50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-\\[40\\%\\]{--tw-translate-y: 40%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-\\[calc\\(100\\%-5rem\\)\\]{--tw-translate-y: calc(100% - 5rem) ;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-rotate-180{--tw-rotate: -180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-rotate-45{--tw-rotate: -45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-0{--tw-rotate: 0deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-45{--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[-100deg\\]{--tw-rotate: -100deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[-200deg\\]{--tw-rotate: -200deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[-260deg\\]{--tw-rotate: -260deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[-90deg\\]{--tw-rotate: -90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[200deg\\]{--tw-rotate: 200deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[80deg\\]{--tw-rotate: 80deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-100{--tw-scale-x: 1;--tw-scale-y: 1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-75{--tw-scale-x: .75;--tw-scale-y: .75;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes loading-hourglass{0%{transform:rotate(0)}23%{transform:rotate(180deg)}to{transform:rotate(180deg)}}.animate-loading-hourglass{animation:loading-hourglass 1.3s ease-in-out infinite}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.cursor-wait{cursor:wait}.touch-pan-y{--tw-pan-y: pan-y;touch-action:var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.resize{resize:both}.list-none{list-style-type:none}.auto-cols-\\[min-content_1fr\\]{grid-auto-columns:min-content 1fr}.grid-flow-col{grid-auto-flow:column}.auto-rows-max{grid-auto-rows:max-content}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-\\[1fr_auto\\]{grid-template-columns:1fr auto}.grid-cols-\\[auto_1fr_auto\\]{grid-template-columns:auto 1fr auto}.grid-cols-\\[minmax\\(24\\.563rem\\,_100vw\\)\\]{grid-template-columns:minmax(24.563rem,100vw)}.grid-cols-\\[minmax\\(24\\.563rem\\,_50\\.688rem\\)\\]{grid-template-columns:minmax(24.563rem,50.688rem)}.grid-rows-4{grid-template-rows:repeat(4,minmax(0,1fr))}.grid-rows-\\[0fr\\]{grid-template-rows:0fr}.grid-rows-\\[1fr\\]{grid-template-rows:1fr}.grid-rows-\\[37\\.5rem\\]{grid-template-rows:37.5rem}.grid-rows-\\[minmax\\(14\\.375rem\\,_22\\.625rem\\)\\]{grid-template-rows:minmax(14.375rem,22.625rem)}.flex-row{flex-direction:row}.flex-row-reverse{flex-direction:row-reverse}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-wrap{flex-wrap:wrap}.flex-nowrap{flex-wrap:nowrap}.place-content-start{place-content:start}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.items-baseline{align-items:baseline}.items-stretch{align-items:stretch}.justify-normal{justify-content:normal}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-stretch{justify-content:stretch}.gap-0{gap:0px}.gap-0\\.5{gap:.125rem}.gap-1{gap:.25rem}.gap-10{gap:2.5rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-5{gap:1.25rem}.gap-6{gap:1.5rem}.gap-8{gap:2rem}.gap-x-12{-moz-column-gap:3rem;column-gap:3rem}.gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.gap-x-5{-moz-column-gap:1.25rem;column-gap:1.25rem}.gap-x-6{-moz-column-gap:1.5rem;column-gap:1.5rem}.gap-y-0{row-gap:0px}.gap-y-1{row-gap:.25rem}.gap-y-10{row-gap:2.5rem}.gap-y-3{row-gap:.75rem}.space-y-0>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(0px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0px * var(--tw-space-y-reverse))}.space-y-0\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.125rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.125rem * var(--tw-space-y-reverse))}.self-start{align-self:flex-start}.self-end{align-self:flex-end}.self-center{align-self:center}.justify-self-end{justify-self:end}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-visible{overflow:visible}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.overflow-y-hidden{overflow-y:hidden}.overscroll-contain{overscroll-behavior:contain}.overscroll-none{overscroll-behavior:none}.\\!truncate{overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-nowrap{white-space:nowrap}.whitespace-pre-wrap{white-space:pre-wrap}.text-wrap{text-wrap:wrap}.break-all{word-break:break-all}.break-keep{word-break:keep-all}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:1rem}.rounded-\\[0\\.25rem\\]{border-radius:.25rem}.rounded-\\[8px\\]{border-radius:8px}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-none{border-radius:0}.rounded-sm{border-radius:.125rem}.rounded-xl{border-radius:.75rem}.rounded-b-none{border-bottom-right-radius:0;border-bottom-left-radius:0}.rounded-b-xl{border-bottom-right-radius:.75rem;border-bottom-left-radius:.75rem}.rounded-r-none{border-top-right-radius:0;border-bottom-right-radius:0}.rounded-t-none{border-top-left-radius:0;border-top-right-radius:0}.rounded-t-xl{border-top-left-radius:.75rem;border-top-right-radius:.75rem}.border{border-width:1px}.border-2{border-width:2px}.border-\\[1px\\]{border-width:1px}.border-\\[3px\\]{border-width:3px}.border-x{border-left-width:1px;border-right-width:1px}.border-x-0{border-left-width:0px;border-right-width:0px}.border-y-0{border-top-width:0px;border-bottom-width:0px}.border-b{border-bottom-width:1px}.border-b-0{border-bottom-width:0px}.border-b-2{border-bottom-width:2px}.border-b-\\[1px\\]{border-bottom-width:1px}.border-e-0{border-inline-end-width:0px}.border-l{border-left-width:1px}.border-l-0{border-left-width:0px}.border-l-2{border-left-width:2px}.border-l-\\[1px\\]{border-left-width:1px}.border-r-0{border-right-width:0px}.border-s-0{border-inline-start-width:0px}.border-s-\\[1px\\]{border-inline-start-width:1px}.border-t{border-top-width:1px}.border-t-0{border-top-width:0px}.border-t-\\[1px\\]{border-top-width:1px}.border-solid{border-style:solid}.border-none{border-style:none}.border-base{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--background-base-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-highlight{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-highlight-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-negative{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-negative-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-neutral-minimal{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-minimal-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-neutral-regular{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-regular-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-neutral-subtle{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-positive{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-positive-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-transparent{border-color:transparent}.border-warning{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-warning-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-b-neutral-bold{--tw-border-opacity: 1;border-bottom-color:color-mix(in srgb,var(--border-neutral-bold-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-b-neutral-minimal{--tw-border-opacity: 1;border-bottom-color:color-mix(in srgb,var(--border-neutral-minimal-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-b-neutral-subtle{--tw-border-opacity: 1;border-bottom-color:color-mix(in srgb,var(--border-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-s-neutral-bold{--tw-border-opacity: 1;border-inline-start-color:color-mix(in srgb,var(--border-neutral-bold-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-t-neutral-minimal{--tw-border-opacity: 1;border-top-color:color-mix(in srgb,var(--border-neutral-minimal-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.\\!bg-base{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--background-base-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.bg-\\[\\#BFCAD1\\]{--tw-bg-opacity: 1;background-color:rgb(191 202 209 / var(--tw-bg-opacity))}.bg-\\[\\#E3FBE9\\]{--tw-bg-opacity: 1;background-color:rgb(227 251 233 / var(--tw-bg-opacity))}.bg-\\[\\#EBEEF6\\]{--tw-bg-opacity: 1;background-color:rgb(235 238 246 / var(--tw-bg-opacity))}.bg-\\[\\#EBF0FE\\]{--tw-bg-opacity: 1;background-color:rgb(235 240 254 / var(--tw-bg-opacity))}.bg-\\[\\#FCF5FA\\]{--tw-bg-opacity: 1;background-color:rgb(252 245 250 / var(--tw-bg-opacity))}.bg-\\[\\#FDF4F4\\]{--tw-bg-opacity: 1;background-color:rgb(253 244 244 / var(--tw-bg-opacity))}.bg-\\[\\#FFEEEB\\]{--tw-bg-opacity: 1;background-color:rgb(255 238 235 / var(--tw-bg-opacity))}.bg-\\[blue\\]{--tw-bg-opacity: 1;background-color:rgb(0 0 255 / var(--tw-bg-opacity))}.bg-\\[red\\]{--tw-bg-opacity: 1;background-color:rgb(255 0 0 / var(--tw-bg-opacity))}.bg-\\[var\\(--base-color-light\\)\\]{background-color:var(--base-color-light)}.bg-base{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--background-base-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-base\\/60{background-color:color-mix(in srgb,var(--background-base-color),transparent 40%)}.bg-black\\/5{background-color:#0000000d}.bg-content-inverse-bold{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--content-inverse-bold-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-content-inverse-subtle{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--content-inverse-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-content-neutral-bold\\/\\[0\\.08\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.bg-content-neutral-bold\\/\\[0\\.12\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.bg-content-neutral-bold\\/\\[0\\.15\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 85%)}.bg-green-500{--tw-bg-opacity: 1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))}.bg-interactive-highlight{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-highlight-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-interactive-inverse{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-inverse-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-interactive-neutral-bold{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-bold-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-interactive-neutral-minimal{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-minimal-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-interactive-neutral-regular{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-interactive-neutral-subtle{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-interactive-neutral-subtle\\/\\[0\\.95\\]{background-color:color-mix(in srgb,var(--interactive-neutral-subtle-color),transparent 5%)}.bg-lime-400{--tw-bg-opacity: 1;background-color:rgb(163 230 53 / var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.bg-surface-container{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-container-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-highlight-bold{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-highlight-bold-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-highlight-subtle{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-highlight-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-inverse{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-inverse-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-level-01{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-level-01-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-level-02{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-level-02-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-level-03{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-level-03-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-negative-bold{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-negative-bold-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-negative-subtle{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-negative-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-overlay{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-overlay-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-overlay\\/40{background-color:color-mix(in srgb,var(--surface-overlay-color),transparent 60%)}.bg-surface-positive-bold{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-positive-bold-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-positive-subtle{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-positive-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-warning-bold{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-warning-bold-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-warning-subtle{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-warning-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-transparent{background-color:transparent}.bg-violet-300{--tw-bg-opacity: 1;background-color:rgb(196 181 253 / var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-\\[linear-gradient\\(185deg\\,transparent_20\\%\\,var\\(--base-color\\)_35\\%\\)\\]{background-image:linear-gradient(185deg,transparent 20%,var(--base-color) 35%)}.bg-\\[linear-gradient\\(to_top\\,var\\(--surface-overlay-color\\)_20\\%\\,transparent\\)\\]{background-image:linear-gradient(to top,var(--surface-overlay-color) 20%,transparent)}.fill-\\[var\\(--accent-color\\)\\]{fill:var(--accent-color)}.fill-\\[var\\(--base-color\\)\\]{fill:var(--base-color)}.fill-\\[var\\(--glow-color\\)\\]{fill:var(--glow-color)}.stroke-\\[var\\(--border-negative-color\\)\\]{stroke:var(--border-negative-color)}.stroke-\\[var\\(--border-neutral-subtle-color\\)\\]{stroke:var(--border-neutral-subtle-color)}.stroke-\\[var\\(--border-positive-color\\)\\]{stroke:var(--border-positive-color)}.stroke-\\[var\\(--border-warning-color\\)\\]{stroke:var(--border-warning-color)}.stroke-\\[var\\(--surface-highlight-bold-color\\)\\]{stroke:var(--surface-highlight-bold-color)}.object-cover{-o-object-fit:cover;object-fit:cover}.p-0{padding:0}.p-1{padding:.25rem}.p-1\\.5{padding:.375rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-5{padding:1.25rem}.p-6{padding:1.5rem}.p-8{padding:2rem}.p-\\[1px\\]{padding:1px}.px-0{padding-left:0;padding-right:0}.px-1{padding-left:.25rem;padding-right:.25rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-8{padding-left:2rem;padding-right:2rem}.px-\\[0\\.375rem\\]{padding-left:.375rem;padding-right:.375rem}.px-\\[6px\\]{padding-left:6px;padding-right:6px}.py-0{padding-top:0;padding-bottom:0}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.py-8{padding-top:2rem;padding-bottom:2rem}.pb-0{padding-bottom:0}.pb-10{padding-bottom:2.5rem}.pb-20{padding-bottom:5rem}.pb-4{padding-bottom:1rem}.pb-8{padding-bottom:2rem}.pb-\\[env\\(safe-area-inset-bottom\\)\\]{padding-bottom:env(safe-area-inset-bottom)}.pe-0{padding-inline-end:0px}.pe-0\\.5{padding-inline-end:.125rem}.pe-1{padding-inline-end:.25rem}.pe-2{padding-inline-end:.5rem}.pe-2\\.5{padding-inline-end:.625rem}.pe-3{padding-inline-end:.75rem}.pe-4{padding-inline-end:1rem}.pl-0{padding-left:0}.pl-3{padding-left:.75rem}.pl-4{padding-left:1rem}.pr-0{padding-right:0}.pr-1{padding-right:.25rem}.pr-2{padding-right:.5rem}.pr-48{padding-right:12rem}.pr-8{padding-right:2rem}.ps-0{padding-inline-start:0px}.ps-2{padding-inline-start:.5rem}.ps-3{padding-inline-start:.75rem}.ps-4{padding-inline-start:1rem}.pt-0{padding-top:0}.pt-0\\.5{padding-top:.125rem}.pt-10{padding-top:2.5rem}.pt-14{padding-top:3.5rem}.pt-16{padding-top:4rem}.pt-2{padding-top:.5rem}.pt-20{padding-top:5rem}.pt-4{padding-top:1rem}.pt-6{padding-top:1.5rem}.pt-\\[\\.375rem\\]{padding-top:.375rem}.pt-\\[0\\.625rem\\]{padding-top:.625rem}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.text-start{text-align:start}.align-top{vertical-align:top}.align-middle{vertical-align:middle}.font-body{font-family:var(--paloma-font-family-body),sans-serif}.font-heading{font-family:var(--paloma-font-family-heading),sans-serif}.\\!text-\\[0\\.67em\\]{font-size:.67em!important}.\\!text-\\[0\\.83em\\]{font-size:.83em!important}.\\!text-\\[1\\.17em\\]{font-size:1.17em!important}.\\!text-\\[1\\.5em\\]{font-size:1.5em!important}.\\!text-\\[1em\\]{font-size:1em!important}.text-size-body-large{font-size:var(--font-size-body-large);line-height:var(--line-height-body-large)}.text-size-body-medium{font-size:var(--font-size-body-medium);line-height:var(--line-height-body-medium)}.text-size-body-small{font-size:var(--font-size-body-small);line-height:var(--line-height-body-small)}.text-size-body-x-small{font-size:var(--font-size-body-x-small);line-height:var(--line-height-body-x-small)}.text-size-heading-small{font-size:var(--font-size-heading-small);line-height:var(--line-height-heading-small)}.text-size-heading-x-small{font-size:var(--font-size-heading-x-small);line-height:var(--line-height-heading-x-small)}.text-size-lg-heading-large{font-size:var(--font-size-lg-heading-large);line-height:var(--line-height-lg-heading-large)}.text-size-lg-heading-medium{font-size:var(--font-size-lg-heading-medium);line-height:var(--line-height-lg-heading-medium)}.text-size-xs-heading-large{font-size:var(--font-size-xs-heading-large);line-height:var(--line-height-xs-heading-large)}.text-size-xs-heading-medium{font-size:var(--font-size-xs-heading-medium);line-height:var(--line-height-xs-heading-medium)}.text-size-xs-heading-x-large{font-size:var(--font-size-xs-heading-x-large);line-height:var(--line-height-xs-heading-x-large)}.font-bold{font-weight:700}.font-normal{font-weight:400}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.leading-\\[--line-height-body-large\\]{line-height:var(--line-height-body-large)}.leading-\\[--line-height-body-medium\\]{line-height:var(--line-height-body-medium)}.leading-\\[--line-height-body-small\\]{line-height:var(--line-height-body-small)}.leading-\\[150\\%\\]{line-height:150%}.leading-\\[28px\\]{line-height:28px}.leading-\\[40px\\]{line-height:40px}.leading-\\[42px\\]{line-height:42px}.leading-none{line-height:1}.tracking-wide{letter-spacing:.025em}.\\!text-content-highlight{--tw-text-opacity: 1 !important;color:color-mix(in srgb,var(--content-highlight-color),transparent calc(100% - 100% * var(--tw-text-opacity)))!important}.text-content-highlight{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-highlight-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-content-inverse-bold{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-inverse-bold-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-content-negative{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-negative-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-content-neutral-bold{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-neutral-bold-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-content-neutral-regular{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-neutral-regular-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-content-neutral-subtle{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-content-positive{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-positive-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-content-warning{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-warning-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-inherit{color:inherit}.text-red-600{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.underline{text-decoration-line:underline}.no-underline{text-decoration-line:none}.underline-offset-4{text-underline-offset:4px}.opacity-0{opacity:0}.opacity-100{opacity:1}.opacity-30{opacity:.3}.opacity-40{opacity:.4}.opacity-50{opacity:.5}.opacity-70{opacity:.7}.opacity-\\[30\\%\\]{opacity:30%}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-\\[inset_0_0_0_2px_var\\(--interactive-highlight-color\\)\\]{--tw-shadow: inset 0 0 0 2px var(--interactive-highlight-color);--tw-shadow-colored: inset 0 0 0 2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.outline-2{outline-width:2px}.outline-offset-0{outline-offset:0px}.outline-offset-2{outline-offset:2px}.outline-interactive-highlight{outline-color:var(--interactive-highlight-color)}.ring{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.blur{--tw-blur: blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur-\\[10px\\]{--tw-blur: blur(10px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur-\\[18px\\]{--tw-blur: blur(18px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur-\\[4px\\]{--tw-blur: blur(4px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur-\\[50px\\]{--tw-blur: blur(50px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-surface{--tw-backdrop-blur: blur(48px);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[color\\,font-weight\\]{transition-property:color,font-weight;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[padding\\]{transition-property:padding;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[stroke-dashoffset\\]{transition-property:stroke-dashoffset;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.delay-500{transition-delay:.5s}.duration-150{transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.duration-500{transition-duration:.5s}.ease-in{transition-timing-function:cubic-bezier(.4,0,1,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.will-change-transform{will-change:transform}@keyframes enter{0%{opacity:var(--tw-enter-opacity, 1);transform:translate3d(var(--tw-enter-translate-x, 0),var(--tw-enter-translate-y, 0),0) scale3d(var(--tw-enter-scale, 1),var(--tw-enter-scale, 1),var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity, 1);transform:translate3d(var(--tw-exit-translate-x, 0),var(--tw-exit-translate-y, 0),0) scale3d(var(--tw-exit-scale, 1),var(--tw-exit-scale, 1),var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))}}.fade-out{--tw-exit-opacity: 0 }.zoom-in-95{--tw-enter-scale: .95 }.duration-150{animation-duration:.15s}.duration-200{animation-duration:.2s}.duration-300{animation-duration:.3s}.duration-500{animation-duration:.5s}.delay-500{animation-delay:.5s}.ease-in{animation-timing-function:cubic-bezier(.4,0,1,1)}.ease-in-out{animation-timing-function:cubic-bezier(.4,0,.2,1)}.paused{animation-play-state:paused}.fill-mode-forwards{animation-fill-mode:forwards}.\\!grid-in-\\[2\\/2\\/2\\/2\\]{grid-area:2/2/2/2!important}.grid-areas-\\[bar\\]{grid-template-areas:"bar"}.grid-areas-\\[label_bar_percent\\]{grid-template-areas:"label bar percent"}.grid-areas-\\[label_percent\\,_bar_bar\\]{grid-template-areas:"label percent" "bar bar"}.grid-in-\\[1\\/1\\/2\\/1\\]{grid-area:1/1/2/1}.grid-in-\\[1\\/2\\/1\\/2\\]{grid-area:1/2/1/2}.grid-in-\\[2\\/1\\/2\\/1\\]{grid-area:2/1/2/1}.grid-in-\\[bar\\]{grid-area:bar}.grid-in-\\[label\\]{grid-area:label}.grid-in-\\[percent\\]{grid-area:percent}.font-variant-none{font-variant:none}.\\[--accent-color\\:\\#6AF8A4\\]{--accent-color: #6AF8A4 }.\\[--accent-color\\:\\#7B9AFA\\]{--accent-color: #7B9AFA }.\\[--accent-color\\:\\#A8DCF3\\]{--accent-color: #A8DCF3 }.\\[--accent-color\\:\\#D973BA\\]{--accent-color: #D973BA }.\\[--accent-color\\:\\#E59090\\]{--accent-color: #E59090 }.\\[--accent-color\\:\\#FFD8CC\\]{--accent-color: #FFD8CC }.\\[--accent-color\\:\\#FFDED7\\]{--accent-color: #FFDED7 }.\\[--accent-color\\:var\\(--accent-color-light\\)\\]{--accent-color: var(--accent-color-light) }.\\[--base-color\\:\\#BFCAD1\\]{--base-color: #BFCAD1 }.\\[--base-color\\:\\#E3FBE9\\]{--base-color: #E3FBE9 }.\\[--base-color\\:\\#EBEEF6\\]{--base-color: #EBEEF6 }.\\[--base-color\\:\\#EBF0FE\\]{--base-color: #EBF0FE }.\\[--base-color\\:\\#FCF5FA\\]{--base-color: #FCF5FA }.\\[--base-color\\:\\#FFEBEB\\]{--base-color: #FFEBEB }.\\[--base-color\\:\\#FFEEEB\\]{--base-color: #FFEEEB }.\\[--base-color\\:var\\(--base-color-light\\)\\]{--base-color: var(--base-color-light) }.\\[--glow-color\\:\\#07F468\\]{--glow-color: #07F468 }.\\[--glow-color\\:\\#ADBBDB\\]{--glow-color: #ADBBDB }.\\[--glow-color\\:\\#BA84F1\\]{--glow-color: #BA84F1 }.\\[--glow-color\\:\\#E59090\\]{--glow-color: #E59090 }.\\[--glow-color\\:\\#FFB199\\]{--glow-color: #FFB199 }.\\[--glow-color\\:\\#FFD4CC\\]{--glow-color: #FFD4CC }.\\[--glow-color\\:var\\(--glow-color-light\\)\\]{--glow-color: var(--glow-color-light) }.\\[-webkit-mask-image\\:linear-gradient\\(to_top\\,transparent_0\\%\\,rgba\\(0\\,0\\,0\\,0\\.7\\)_50\\%\\)\\]{-webkit-mask-image:linear-gradient(to top,transparent 0%,rgba(0,0,0,.7) 50%)}.\\[mask-image\\:linear-gradient\\(to_top\\,transparent_0\\%\\,rgba\\(0\\,0\\,0\\,0\\.7\\)_50\\%\\)\\]{-webkit-mask-image:linear-gradient(to top,transparent 0%,rgba(0,0,0,.7) 50%);mask-image:linear-gradient(to top,transparent 0%,rgba(0,0,0,.7) 50%)}.\\[mask-type\\:alpha\\]{mask-type:alpha}.\\[place-content\\:start_center\\]{place-content:start center}.\\[place-self\\:start_center\\]{place-self:start center}.\\[transition-duration\\:2s\\]{transition-duration:2s}.\\[transition-duration\\:6s\\]{transition-duration:6s}.\\[transition-property\\:transform\\]{transition-property:transform}@media(min-width:768px){.md\\:container{width:100%;margin-right:auto;margin-left:auto;padding-right:24px;padding-left:24px}@media(min-width:1440px){.md\\:container{max-width:1440px;padding-right:40px;padding-left:40px}}}.last\\:pb-0:last-child{padding-bottom:0}.active\\:\\!bg-surface-level-03:active{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--surface-level-03-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.active\\:bg-content-neutral-bold\\/\\[0\\.12\\]:active{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.active\\:bg-content-neutral-regular:active{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.active\\:bg-content-neutral-regular\\/\\[0\\.12\\]:active{background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent 88%)}.active\\:bg-interactive-neutral-regular:active{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.active\\:bg-interactive-neutral-subtle:active{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.enabled\\:cursor-pointer:enabled{cursor:pointer}.group:active .group-active\\:bg-content-neutral-bold\\/\\[0\\.12\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.aria-disabled\\:pointer-events-none[aria-disabled=true]{pointer-events:none}.aria-disabled\\:opacity-30[aria-disabled=true]{opacity:.3}.data-\\[position-y\\=bottom\\]\\:-bottom-1\\.5[data-position-y=bottom]{bottom:-.375rem}.data-\\[position-y\\=bottom\\]\\:-bottom-3\\.5[data-position-y=bottom]{bottom:-.875rem}.data-\\[position-y\\=top\\]\\:-top-1\\.5[data-position-y=top]{top:-.375rem}.data-\\[position-y\\=top\\]\\:-top-3\\.5[data-position-y=top]{top:-.875rem}.data-\\[position-x\\=center\\]\\:flex[data-position-x=center],.data-\\[shape\\=circle\\]\\:flex[data-shape=circle]{display:flex}.data-\\[size\\=large\\]\\:h-8[data-size=large]{height:2rem}.data-\\[size\\=medium\\]\\:h-6[data-size=medium]{height:1.5rem}.data-\\[size\\=small\\]\\:h-5[data-size=small]{height:1.25rem}.data-\\[size\\=x-small\\]\\:h-4[data-size=x-small]{height:1rem}.data-\\[orientation\\=horizontal\\]\\:w-\\[-webkit-fill-available\\][data-orientation=horizontal]{width:-webkit-fill-available}.data-\\[position-x\\=center\\]\\:w-full[data-position-x=center],.data-\\[shape\\=circle\\]\\:w-full[data-shape=circle]{width:100%}.data-\\[size\\=large\\]\\:w-8[data-size=large]{width:2rem}.data-\\[size\\=medium\\]\\:w-6[data-size=medium]{width:1.5rem}.data-\\[size\\=small\\]\\:w-5[data-size=small]{width:1.25rem}.data-\\[size\\=x-small\\]\\:w-4[data-size=x-small]{width:1rem}.data-\\[position-x\\=center\\]\\:justify-center[data-position-x=center],.data-\\[shape\\=circle\\]\\:justify-center[data-shape=circle]{justify-content:center}.data-\\[emphasis\\=bold\\]\\:border-neutral-bold[data-emphasis=bold]{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-bold-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.data-\\[emphasis\\=minimal\\]\\:border-neutral-minimal[data-emphasis=minimal]{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-minimal-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.data-\\[emphasis\\=regular\\]\\:border-neutral-regular[data-emphasis=regular]{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-regular-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.data-\\[emphasis\\=subtle\\]\\:border-neutral-subtle[data-emphasis=subtle]{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.data-\\[orientation\\=vertical\\]\\:p-6[data-orientation=vertical]{padding:1.5rem}.data-\\[orientation\\=horizontal\\]\\:px-8[data-orientation=horizontal]{padding-left:2rem;padding-right:2rem}.data-\\[orientation\\=horizontal\\]\\:py-12[data-orientation=horizontal]{padding-top:3rem;padding-bottom:3rem}.data-\\[selected\\=true\\]\\:data-\\[emphasis\\=bold\\]\\:text-content-inverse-bold[data-emphasis=bold][data-selected=true]{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-inverse-bold-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.data-\\[selected\\=true\\]\\:data-\\[emphasis\\=regular\\]\\:text-content-neutral-bold[data-emphasis=regular][data-selected=true]{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-neutral-bold-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.data-\\[focus-visible\\]\\:shadow-\\[inset_0_0_0_2px_var\\(--interactive-highlight-color\\)\\][data-focus-visible]{--tw-shadow: inset 0 0 0 2px var(--interactive-highlight-color);--tw-shadow-colored: inset 0 0 0 2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.group\\/menu[data-variant=mega] .group-data-\\[variant\\=mega\\]\\/menu\\:mx-2{margin-left:.5rem;margin-right:.5rem}.group[data-variant=dot] .group-data-\\[variant\\=dot\\]\\:h-1\\.5{height:.375rem}.group[data-variant=dot] .group-data-\\[variant\\=dot\\]\\:h-2{height:.5rem}.group[data-variant=icon] .group-data-\\[variant\\=icon\\]\\:h-\\[22px\\]{height:22px}.group[data-variant=icon] .group-data-\\[variant\\=icon\\]\\:h-\\[32px\\]{height:32px}.group[data-variant=text] .group-data-\\[variant\\=text\\]\\:h-\\[22px\\]{height:22px}.group[data-variant=text] .group-data-\\[variant\\=text\\]\\:h-\\[30px\\]{height:30px}.group\\/menu[data-orientation=horizontal] .group-data-\\[orientation\\=horizontal\\]\\/menu\\:w-\\[inherit\\]{width:inherit}.group[data-variant=dot] .group-data-\\[variant\\=dot\\]\\:w-1\\.5{width:.375rem}.group[data-variant=dot] .group-data-\\[variant\\=dot\\]\\:w-2{width:.5rem}.group[data-variant=icon] .group-data-\\[variant\\=icon\\]\\:w-\\[22px\\]{width:22px}.group[data-variant=icon] .group-data-\\[variant\\=icon\\]\\:w-\\[32px\\]{width:32px}.group\\/menu[data-variant=mega] .group-data-\\[variant\\=mega\\]\\/menu\\:w-auto{width:auto}.group\\/menu[data-variant=standard] .group-data-\\[variant\\=standard\\]\\/menu\\:w-\\[--trigger-width\\]{width:var(--trigger-width)}.group\\/menu[data-variant=standard] .group-data-\\[variant\\=standard\\]\\/menu\\:w-\\[250px\\]{width:250px}.group\\/menu[data-variant=standard] .group-data-\\[variant\\=standard\\]\\/menu\\:w-fit{width:-moz-fit-content;width:fit-content}.group[data-variant=text][data-content-single-element=true] .group-data-\\[variant\\=text\\]\\:group-data-\\[content-single-element\\=true\\]\\:w-\\[22px\\]{width:22px}.group[data-variant=text][data-content-single-element=true] .group-data-\\[variant\\=text\\]\\:group-data-\\[content-single-element\\=true\\]\\:w-\\[30px\\]{width:30px}.group\\/menu[data-variant=mega] .group-data-\\[variant\\=mega\\]\\/menu\\:max-w-\\[1440px\\]{max-width:1440px}.group\\/menu[data-variant=standard] .group-data-\\[variant\\=standard\\]\\/menu\\:p-2{padding:.5rem}.group\\/menu[data-variant=mega] .group-data-\\[variant\\=mega\\]\\/menu\\:px-8{padding-left:2rem;padding-right:2rem}.group\\/menu[data-variant=standard] .group-data-\\[variant\\=standard\\]\\/menu\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.group[data-variant=text][data-content-single-element=false] .group-data-\\[variant\\=text\\]\\:group-data-\\[content-single-element\\=false\\]\\:px-\\[11px\\]{padding-left:11px;padding-right:11px}.group[data-variant=text][data-content-single-element=false] .group-data-\\[variant\\=text\\]\\:group-data-\\[content-single-element\\=false\\]\\:px-\\[7px\\]{padding-left:7px;padding-right:7px}.entering\\:zoom-in-95[data-entering]{--tw-enter-scale: .95 }.hover\\:cursor-pointer:where([data-rac])[data-hovered]{cursor:pointer}.hover\\:bg-content-neutral-bold\\/\\[0\\.08\\]:where([data-rac])[data-hovered]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.hover\\:bg-content-neutral-regular:where([data-rac])[data-hovered]{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:bg-content-neutral-regular\\/\\[0\\.08\\]:where([data-rac])[data-hovered]{background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent 92%)}.hover\\:bg-interactive-neutral-regular:where([data-rac])[data-hovered]{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:bg-interactive-neutral-subtle:where([data-rac])[data-hovered]{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:bg-surface-level-02:where([data-rac])[data-hovered]{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-level-02-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:active\\:bg-content-neutral-bold\\/\\[0\\.12\\]:active:where([data-rac])[data-hovered]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.hover\\:active\\:bg-content-neutral-regular\\/\\[0\\.12\\]:active:where([data-rac])[data-hovered]{background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent 88%)}.hover\\:cursor-pointer:where(:not([data-rac])):hover{cursor:pointer}.hover\\:bg-content-neutral-bold\\/\\[0\\.08\\]:where(:not([data-rac])):hover{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.hover\\:bg-content-neutral-regular:where(:not([data-rac])):hover{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:bg-content-neutral-regular\\/\\[0\\.08\\]:where(:not([data-rac])):hover{background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent 92%)}.hover\\:bg-interactive-neutral-regular:where(:not([data-rac])):hover{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:bg-interactive-neutral-subtle:where(:not([data-rac])):hover{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:bg-surface-level-02:where(:not([data-rac])):hover{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-level-02-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:active\\:bg-content-neutral-bold\\/\\[0\\.12\\]:active:where(:not([data-rac])):hover{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.hover\\:active\\:bg-content-neutral-regular\\/\\[0\\.12\\]:active:where(:not([data-rac])):hover{background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent 88%)}.group:where([data-rac])[data-hovered] .group-hover\\:bg-content-neutral-bold\\/\\[0\\.08\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.group:where(:not([data-rac])):hover .group-hover\\:bg-content-neutral-bold\\/\\[0\\.08\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.group:where([data-rac])[data-hovered]:active .group-hover\\:group-active\\:bg-content-neutral-bold\\/\\[0\\.12\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.group:where(:not([data-rac])):hover:active .group-hover\\:group-active\\:bg-content-neutral-bold\\/\\[0\\.12\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.focus\\:shadow-\\[inset_0_0_0_2px_var\\(--interactive-highlight-color\\)\\]:where([data-rac])[data-focused]{--tw-shadow: inset 0 0 0 2px var(--interactive-highlight-color);--tw-shadow-colored: inset 0 0 0 2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.focus\\:outline-none:where([data-rac])[data-focused]{outline:2px solid transparent;outline-offset:2px}.focus\\:shadow-\\[inset_0_0_0_2px_var\\(--interactive-highlight-color\\)\\]:where(:not([data-rac])):focus{--tw-shadow: inset 0 0 0 2px var(--interactive-highlight-color);--tw-shadow-colored: inset 0 0 0 2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.focus\\:outline-none:where(:not([data-rac])):focus{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:outline:where([data-rac])[data-focus-visible]{outline-style:solid}.focus-visible\\:outline-\\[3px\\]:where([data-rac])[data-focus-visible]{outline-width:3px}.focus-visible\\:outline-offset-2:where([data-rac])[data-focus-visible]{outline-offset:2px}.focus-visible\\:outline-offset-\\[1px\\]:where([data-rac])[data-focus-visible]{outline-offset:1px}.focus-visible\\:outline-interactive-highlight:where([data-rac])[data-focus-visible]{outline-color:var(--interactive-highlight-color)}.focus-visible\\:outline:where(:not([data-rac])):focus-visible{outline-style:solid}.focus-visible\\:outline-\\[3px\\]:where(:not([data-rac])):focus-visible{outline-width:3px}.focus-visible\\:outline-offset-2:where(:not([data-rac])):focus-visible{outline-offset:2px}.focus-visible\\:outline-offset-\\[1px\\]:where(:not([data-rac])):focus-visible{outline-offset:1px}.focus-visible\\:outline-interactive-highlight:where(:not([data-rac])):focus-visible{outline-color:var(--interactive-highlight-color)}.disabled\\:pointer-events-none:where([data-rac])[data-disabled]{pointer-events:none}.disabled\\:opacity-30:where([data-rac])[data-disabled]{opacity:.3}.disabled\\:pointer-events-none:where(:not([data-rac])):disabled{pointer-events:none}.disabled\\:opacity-30:where(:not([data-rac])):disabled{opacity:.3}@media(prefers-reduced-motion:no-preference){.motion-safe\\:duration-300{transition-duration:.3s}.motion-safe\\:ease-in{transition-timing-function:cubic-bezier(.4,0,1,1)}.motion-safe\\:ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.motion-safe\\:animate-in{animation-name:enter;animation-duration:.15s;--tw-enter-opacity: initial;--tw-enter-scale: initial;--tw-enter-rotate: initial;--tw-enter-translate-x: initial;--tw-enter-translate-y: initial }.motion-safe\\:animate-out{animation-name:exit;animation-duration:.15s;--tw-exit-opacity: initial;--tw-exit-scale: initial;--tw-exit-rotate: initial;--tw-exit-translate-x: initial;--tw-exit-translate-y: initial }.motion-safe\\:fade-in{--tw-enter-opacity: 0 }.motion-safe\\:fade-out{--tw-exit-opacity: 0 }.motion-safe\\:slide-in-from-bottom{--tw-enter-translate-y: 100% }.motion-safe\\:slide-out-to-bottom{--tw-exit-translate-y: 100% }.motion-safe\\:duration-300{animation-duration:.3s}.motion-safe\\:ease-in{animation-timing-function:cubic-bezier(.4,0,1,1)}.motion-safe\\:ease-out{animation-timing-function:cubic-bezier(0,0,.2,1)}.motion-safe\\:entering\\:animate-in[data-entering]{animation-name:enter;animation-duration:.15s;--tw-enter-opacity: initial;--tw-enter-scale: initial;--tw-enter-rotate: initial;--tw-enter-translate-x: initial;--tw-enter-translate-y: initial }.motion-safe\\:entering\\:fade-in[data-entering]{--tw-enter-opacity: 0 }.motion-safe\\:entering\\:zoom-in-95[data-entering]{--tw-enter-scale: .95 }.motion-safe\\:exiting\\:animate-out[data-exiting]{animation-name:exit;animation-duration:.15s;--tw-exit-opacity: initial;--tw-exit-scale: initial;--tw-exit-rotate: initial;--tw-exit-translate-x: initial;--tw-exit-translate-y: initial }.motion-safe\\:exiting\\:fade-out[data-exiting]{--tw-exit-opacity: 0 }.motion-safe\\:exiting\\:zoom-out-95[data-exiting]{--tw-exit-scale: .95 }}@media(prefers-reduced-motion:reduce){.motion-reduce\\:transition-none{transition-property:none}}.dark\\:bg-\\[\\#000000\\]:is([data-paloma-mode=dark] *){--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.dark\\:bg-\\[\\#01081D\\]:is([data-paloma-mode=dark] *){--tw-bg-opacity: 1;background-color:rgb(1 8 29 / var(--tw-bg-opacity))}.dark\\:bg-\\[\\#020B07\\]:is([data-paloma-mode=dark] *){--tw-bg-opacity: 1;background-color:rgb(2 11 7 / var(--tw-bg-opacity))}.dark\\:bg-\\[\\#142242\\]:is([data-paloma-mode=dark] *){--tw-bg-opacity: 1;background-color:rgb(20 34 66 / var(--tw-bg-opacity))}.dark\\:bg-\\[\\#160303\\]:is([data-paloma-mode=dark] *){--tw-bg-opacity: 1;background-color:rgb(22 3 3 / var(--tw-bg-opacity))}.dark\\:bg-\\[\\#160511\\]:is([data-paloma-mode=dark] *){--tw-bg-opacity: 1;background-color:rgb(22 5 17 / var(--tw-bg-opacity))}.dark\\:bg-\\[var\\(--base-color-dark\\)\\]:is([data-paloma-mode=dark] *){background-color:var(--base-color-dark)}.dark\\:\\[--accent-color\\:\\#03622A\\]:is([data-paloma-mode=dark] *){--accent-color: #03622A }.dark\\:\\[--accent-color\\:\\#25A8E0\\]:is([data-paloma-mode=dark] *){--accent-color: #25A8E0 }.dark\\:\\[--accent-color\\:\\#6D1111\\]:is([data-paloma-mode=dark] *){--accent-color: #6D1111 }.dark\\:\\[--accent-color\\:\\#6D17C4\\]:is([data-paloma-mode=dark] *){--accent-color: #6D17C4 }.dark\\:\\[--accent-color\\:\\#972073\\]:is([data-paloma-mode=dark] *){--accent-color: #972073 }.dark\\:\\[--accent-color\\:\\#FF6333\\]:is([data-paloma-mode=dark] *){--accent-color: #FF6333 }.dark\\:\\[--accent-color\\:\\#FF7F66\\]:is([data-paloma-mode=dark] *){--accent-color: #FF7F66 }.dark\\:\\[--accent-color\\:var\\(--accent-color-dark\\)\\]:is([data-paloma-mode=dark] *){--accent-color: var(--accent-color-dark) }.dark\\:\\[--base-color\\:\\#000000\\]:is([data-paloma-mode=dark] *){--base-color: #000000 }.dark\\:\\[--base-color\\:\\#01081D\\]:is([data-paloma-mode=dark] *){--base-color: #01081D }.dark\\:\\[--base-color\\:\\#020B07\\]:is([data-paloma-mode=dark] *){--base-color: #020B07 }.dark\\:\\[--base-color\\:\\#142242\\]:is([data-paloma-mode=dark] *){--base-color: #142242 }.dark\\:\\[--base-color\\:\\#160303\\]:is([data-paloma-mode=dark] *){--base-color: #160303 }.dark\\:\\[--base-color\\:\\#160511\\]:is([data-paloma-mode=dark] *){--base-color: #160511 }.dark\\:\\[--base-color\\:var\\(--base-color-dark\\)\\]:is([data-paloma-mode=dark] *){--base-color: var(--base-color-dark) }.dark\\:\\[--glow-color\\:\\#07F468\\]:is([data-paloma-mode=dark] *){--glow-color: #07F468 }.dark\\:\\[--glow-color\\:\\#093DD8\\]:is([data-paloma-mode=dark] *){--glow-color: #093DD8 }.dark\\:\\[--glow-color\\:\\#3356A4\\]:is([data-paloma-mode=dark] *){--glow-color: #3356A4 }.dark\\:\\[--glow-color\\:\\#872AE6\\]:is([data-paloma-mode=dark] *){--glow-color: #872AE6 }.dark\\:\\[--glow-color\\:\\#E00000\\]:is([data-paloma-mode=dark] *){--glow-color: #E00000 }.dark\\:\\[--glow-color\\:\\#E53600\\]:is([data-paloma-mode=dark] *){--glow-color: #E53600 }.dark\\:\\[--glow-color\\:\\#FF2900\\]:is([data-paloma-mode=dark] *){--glow-color: #FF2900 }.dark\\:\\[--glow-color\\:var\\(--glow-color-dark\\)\\]:is([data-paloma-mode=dark] *){--glow-color: var(--glow-color-dark) }@media(max-width:1440px){.max-\\[1440px\\]\\:px-5{padding-left:1.25rem;padding-right:1.25rem}}@media not all and (min-width:1280px){.max-lg\\:flex{display:flex}.max-lg\\:hidden{display:none}.max-lg\\:-translate-y-full{--tw-translate-y: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.max-lg\\:flex-col{flex-direction:column}.max-lg\\:justify-between{justify-content:space-between}.max-lg\\:gap-2{gap:.5rem}.max-lg\\:gap-4{gap:1rem}.max-lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}@media not all and (min-width:768px){.max-md\\:flex{display:flex}.max-md\\:hidden{display:none}.max-md\\:w-auto{width:auto}.max-md\\:w-full{width:100%}.max-md\\:max-w-\\[250px\\]{max-width:250px}.max-md\\:max-w-\\[767px\\]{max-width:767px}.max-md\\:max-w-\\[815px\\]{max-width:815px}.max-md\\:flex-col{flex-direction:column}.max-md\\:justify-normal{justify-content:normal}.max-md\\:justify-between{justify-content:space-between}.max-md\\:px-4{padding-left:1rem;padding-right:1rem}.max-md\\:py-2{padding-top:.5rem;padding-bottom:.5rem}.max-md\\:py-3{padding-top:.75rem;padding-bottom:.75rem}.max-md\\:text-center{text-align:center}.max-md\\:text-size-heading-x-small{font-size:var(--font-size-heading-x-small);line-height:var(--line-height-heading-x-small)}.max-md\\:\\!grid-in-\\[2\\/2\\/2\\/2\\]{grid-area:2/2/2/2!important}.max-md\\:grid-in-\\[1\\/1\\/2\\/1\\]{grid-area:1/1/2/1}.max-md\\:grid-in-\\[1\\/2\\/1\\/2\\]{grid-area:1/2/1/2}.max-md\\:grid-in-\\[2\\/1\\/2\\/1\\]{grid-area:2/1/2/1}@media(prefers-reduced-motion:no-preference){.max-md\\:motion-safe\\:slide-in-from-bottom{--tw-enter-translate-y: 100% }.max-md\\:motion-safe\\:slide-out-to-bottom{--tw-exit-translate-y: 100% }}}@media not all and (min-width:640px){.max-sm\\:w-full{width:100%}.max-sm\\:max-w-full{max-width:100%}}@media(min-width:640px){.sm\\:w-\\[345px\\]{width:345px}.sm\\:place-content-center{place-content:center}.sm\\:place-items-center{place-items:center}.sm\\:\\[place-self\\:stretch\\]{place-self:stretch}}@media(min-width:768px){.md\\:-left-\\[12\\.5\\%\\]{left:-12.5%}.md\\:-right-\\[10\\%\\]{right:-10%}.md\\:-right-\\[20\\%\\]{right:-20%}.md\\:bottom-0{bottom:0}.md\\:bottom-20{bottom:5rem}.md\\:bottom-40{bottom:10rem}.md\\:left-0{left:0}.md\\:left-\\[40\\%\\]{left:40%}.md\\:top-20{top:5rem}.md\\:top-28{top:7rem}.md\\:top-\\[7\\.5rem\\]{top:7.5rem}.md\\:top-auto{top:auto}.md\\:mt-36{margin-top:9rem}.md\\:block{display:block}.md\\:flex{display:flex}.md\\:grid{display:grid}.md\\:hidden{display:none}.md\\:max-h-\\[calc\\(100dvh_-_\\(4rem_\\*_2\\)\\)\\]{max-height:calc(100dvh - 8rem)}.md\\:max-h-\\[calc\\(100vh_-_\\(4rem_\\*_2\\)\\)\\]{max-height:calc(100vh - 8rem)}.md\\:min-h-\\[100dvh\\]{min-height:100dvh}.md\\:min-h-screen{min-height:100vh}.md\\:w-1\\/2{width:50%}.md\\:w-\\[100\\%\\]{width:100%}.md\\:w-\\[150\\%\\]{width:150%}.md\\:w-\\[80\\%\\]{width:80%}.md\\:w-auto{width:auto}.md\\:w-full{width:100%}.md\\:max-w-\\[1279px\\]{max-width:1279px}.md\\:max-w-\\[1327px\\]{max-width:1327px}.md\\:max-w-\\[420px\\]{max-width:420px}.md\\:max-w-\\[486px\\]{max-width:486px}.md\\:translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.md\\:\\!grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))!important}.md\\:grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.md\\:flex-row{flex-direction:row}.md\\:flex-row-reverse{flex-direction:row-reverse}.md\\:flex-col{flex-direction:column}.md\\:place-items-center{place-items:center}.md\\:items-center{align-items:center}.md\\:justify-between{justify-content:space-between}.md\\:gap-0{gap:0px}.md\\:gap-2{gap:.5rem}.md\\:gap-4{gap:1rem}.md\\:gap-6{gap:1.5rem}.md\\:gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.md\\:place-self-center{place-self:center}.md\\:self-start{align-self:flex-start}.md\\:self-center{align-self:center}.md\\:bg-\\[linear-gradient\\(185deg\\,transparent_30\\%\\,var\\(--base-color\\)_50\\%\\)\\]{background-image:linear-gradient(185deg,transparent 30%,var(--base-color) 50%)}.md\\:p-10{padding:2.5rem}.md\\:p-5{padding:1.25rem}.md\\:p-8{padding:2rem}.md\\:py-16{padding-top:4rem;padding-bottom:4rem}.md\\:pb-10{padding-bottom:2.5rem}.md\\:pb-8{padding-bottom:2rem}.md\\:pt-28{padding-top:7rem}.md\\:text-left{text-align:left}.md\\:grid-in-\\[1\\/1\\/1\\/1\\]{grid-area:1/1/1/1}@media(prefers-reduced-motion:no-preference){.md\\:motion-safe\\:zoom-in-95{--tw-enter-scale: .95 }.md\\:motion-safe\\:zoom-out-95{--tw-exit-scale: .95 }}@media not all and (min-width:1280px){.md\\:max-lg\\:col-span-4{grid-column:span 4 / span 4}.md\\:max-lg\\:col-span-6{grid-column:span 6 / span 6}.md\\:max-lg\\:col-start-2{grid-column-start:2}.md\\:max-lg\\:col-start-3{grid-column-start:3}.md\\:max-lg\\:flex{display:flex}.md\\:max-lg\\:grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}}}@media(min-width:1280px){.lg\\:-bottom-20{bottom:-5rem}.lg\\:left-0{left:0}.lg\\:left-\\[5\\%\\]{left:5%}.lg\\:right-\\[5\\%\\]{right:5%}.lg\\:top-10{top:2.5rem}.lg\\:top-24{top:6rem}.lg\\:top-6{top:1.5rem}.lg\\:col-span-10{grid-column:span 10 / span 10}.lg\\:col-span-4{grid-column:span 4 / span 4}.lg\\:col-span-6{grid-column:span 6 / span 6}.lg\\:col-span-8{grid-column:span 8 / span 8}.lg\\:col-start-2{grid-column-start:2}.lg\\:col-start-4{grid-column-start:4}.lg\\:col-start-5{grid-column-start:5}.lg\\:-mt-12{margin-top:-3rem}.lg\\:flex{display:flex}.lg\\:grid{display:grid}.lg\\:hidden{display:none}.lg\\:h-11{height:2.75rem}.lg\\:h-16{height:4rem}.lg\\:h-20{height:5rem}.lg\\:h-32{height:8rem}.lg\\:h-52{height:13rem}.lg\\:h-\\[132px\\]{height:132px}.lg\\:h-\\[3\\.75rem\\]{height:3.75rem}.lg\\:w-11{width:2.75rem}.lg\\:w-16{width:4rem}.lg\\:w-20{width:5rem}.lg\\:w-32{width:8rem}.lg\\:w-52{width:13rem}.lg\\:w-\\[132px\\]{width:132px}.lg\\:w-\\[138px\\]{width:138px}.lg\\:w-\\[3\\.75rem\\]{width:3.75rem}.lg\\:w-\\[82\\%\\]{width:82%}.lg\\:w-\\[90\\%\\]{width:90%}.lg\\:w-full{width:100%}.lg\\:max-w-\\[120rem\\]{max-width:120rem}.lg\\:max-w-\\[1440px\\]{max-width:1440px}.lg\\:max-w-\\[1520px\\]{max-width:1520px}.lg\\:max-w-\\[59\\.625rem\\]{max-width:59.625rem}.lg\\:max-w-none{max-width:none}.lg\\:-translate-y-full{--tw-translate-y: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.lg\\:\\!grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))!important}.lg\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.lg\\:grid-cols-subgrid{grid-template-columns:subgrid}.lg\\:flex-row{flex-direction:row}.lg\\:justify-end{justify-content:flex-end}.lg\\:justify-between{justify-content:space-between}.lg\\:gap-3{gap:.75rem}.lg\\:gap-5{gap:1.25rem}.lg\\:gap-8{gap:2rem}.lg\\:border-x-0{border-left-width:0px;border-right-width:0px}.lg\\:border-b{border-bottom-width:1px}.lg\\:border-t-0{border-top-width:0px}.lg\\:border-solid{border-style:solid}.lg\\:border-neutral-subtle{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.lg\\:\\!bg-base{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--background-base-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.lg\\:bg-transparent{background-color:transparent}.lg\\:bg-\\[linear-gradient\\(185deg\\,transparent_30\\%\\,var\\(--base-color\\)_60\\%\\)\\]{background-image:linear-gradient(185deg,transparent 30%,var(--base-color) 60%)}.lg\\:\\!p-6{padding:1.5rem!important}.lg\\:px-10{padding-left:2.5rem;padding-right:2.5rem}.lg\\:pb-10{padding-bottom:2.5rem}.lg\\:pb-14{padding-bottom:3.5rem}.lg\\:pt-0{padding-top:0}.lg\\:pt-16{padding-top:4rem}.lg\\:pt-36{padding-top:9rem}.lg\\:text-size-lg-heading-large{font-size:var(--font-size-lg-heading-large);line-height:var(--line-height-lg-heading-large)}.lg\\:text-size-lg-heading-medium{font-size:var(--font-size-lg-heading-medium);line-height:var(--line-height-lg-heading-medium)}.lg\\:text-size-lg-heading-x-large{font-size:var(--font-size-lg-heading-x-large);line-height:var(--line-height-lg-heading-x-large)}.lg\\:blur-\\[30px\\]{--tw-blur: blur(30px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.group\\/menu[data-variant=mega] .lg\\:group-data-\\[variant\\=mega\\]\\/menu\\:mx-10{margin-left:2.5rem;margin-right:2.5rem}}.ltr\\:ml-6:where([dir=ltr],[dir=ltr] *){margin-left:1.5rem}.ltr\\:rounded-bl-xl:where([dir=ltr],[dir=ltr] *){border-bottom-left-radius:.75rem}.ltr\\:rounded-br-xl:where([dir=ltr],[dir=ltr] *){border-bottom-right-radius:.75rem}.ltr\\:rounded-tl-xl:where([dir=ltr],[dir=ltr] *){border-top-left-radius:.75rem}.ltr\\:rounded-tr-xl:where([dir=ltr],[dir=ltr] *){border-top-right-radius:.75rem}.ltr\\:border-l-0:where([dir=ltr],[dir=ltr] *){border-left-width:0px}.ltr\\:text-left:where([dir=ltr],[dir=ltr] *){text-align:left}.rtl\\:-left-0:where([dir=rtl],[dir=rtl] *){left:-0px}.rtl\\:-left-0\\.5:where([dir=rtl],[dir=rtl] *){left:-.125rem}.rtl\\:-left-2:where([dir=rtl],[dir=rtl] *){left:-.5rem}.rtl\\:-right-0:where([dir=rtl],[dir=rtl] *){right:-0px}.rtl\\:-right-0\\.5:where([dir=rtl],[dir=rtl] *){right:-.125rem}.rtl\\:-right-2:where([dir=rtl],[dir=rtl] *){right:-.5rem}.rtl\\:mr-6:where([dir=rtl],[dir=rtl] *){margin-right:1.5rem}.rtl\\:-rotate-45:where([dir=rtl],[dir=rtl] *){--tw-rotate: -45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rtl\\:rotate-180:where([dir=rtl],[dir=rtl] *){--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rtl\\:rotate-45:where([dir=rtl],[dir=rtl] *){--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rtl\\:scale-x-\\[-1\\]:where([dir=rtl],[dir=rtl] *){--tw-scale-x: -1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rtl\\:rounded-bl-xl:where([dir=rtl],[dir=rtl] *){border-bottom-left-radius:.75rem}.rtl\\:rounded-br-xl:where([dir=rtl],[dir=rtl] *){border-bottom-right-radius:.75rem}.rtl\\:rounded-tl-xl:where([dir=rtl],[dir=rtl] *){border-top-left-radius:.75rem}.rtl\\:rounded-tr-xl:where([dir=rtl],[dir=rtl] *){border-top-right-radius:.75rem}.rtl\\:border-r-0:where([dir=rtl],[dir=rtl] *){border-right-width:0px}.rtl\\:pl-2:where([dir=rtl],[dir=rtl] *){padding-left:.5rem}.rtl\\:pr-1:where([dir=rtl],[dir=rtl] *){padding-right:.25rem}.rtl\\:pr-1\\.5:where([dir=rtl],[dir=rtl] *){padding-right:.375rem}.rtl\\:pr-3:where([dir=rtl],[dir=rtl] *){padding-right:.75rem}.rtl\\:pr-4:where([dir=rtl],[dir=rtl] *){padding-right:1rem}.rtl\\:text-right:where([dir=rtl],[dir=rtl] *){text-align:right}.rtl\\:\\[transform\\:scaleX\\(-1\\)\\]:where([dir=rtl],[dir=rtl] *){transform:scaleX(-1)}.\\[\\&\\>\\*\\:nth-child\\(n\\+8\\)\\]\\:absolute>*:nth-child(n+8){position:absolute}.\\[\\&\\>\\*\\:nth-child\\(n\\+8\\)\\]\\:opacity-0>*:nth-child(n+8){opacity:0}.\\[\\&\\>button\\]\\:w-full>button{width:100%}@media(min-width:768px){.md\\:\\[\\&\\>button\\]\\:w-auto>button{width:auto}}.\\[\\&\\>div\\]\\:-rotate-90>div{--tw-rotate: -90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.\\[\\&\\>div\\]\\:rotate-180>div{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.\\[\\&\\>div\\]\\:rotate-90>div{--tw-rotate: 90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@media(min-width:768px){@media not all and (min-width:1280px){.md\\:max-lg\\:\\[\\&\\>li\\:last-child\\>\\:last-child\\]\\:truncate>li:last-child>:last-child{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.md\\:max-lg\\:\\[\\&\\>li\\:last-child\\]\\:overflow-hidden>li:last-child{overflow:hidden}}}.\\[\\&\\>li\\:nth-last-child\\(2\\)\\]\\:flex>li:nth-last-child(2){display:flex}.\\[\\&\\>li\\]\\:hidden>li{display:none}.\\[\\&\\>li\\]\\:flex-1>li{flex:1 1 0%}@media not all and (min-width:768px){.max-md\\:\\[\\&\\>span\\]\\:text-size-body-small>span{font-size:var(--font-size-body-small);line-height:var(--line-height-body-small)}}@media(min-width:1280px){.lg\\:\\[\\&\\>svg\\]\\:h-16>svg{height:4rem}.lg\\:\\[\\&\\>svg\\]\\:w-16>svg{width:4rem}}@media(min-width:768px){.md\\:\\[\\&\\[data-trailing-bottom\\=true\\]\\]\\:items-end[data-trailing-bottom=true]{align-items:flex-end}}.\\[\\&\\[data-trailing-slot-bottom\\=true\\]\\]\\:items-end[data-trailing-slot-bottom=true]{align-items:flex-end}.\\[\\&_\\.paloma-toast\\]\\:outline .paloma-toast{outline-style:solid}.\\[\\&_\\.paloma-toast\\]\\:outline-2 .paloma-toast{outline-width:2px}.\\[\\&_\\.paloma-toast\\]\\:outline-offset-2 .paloma-toast{outline-offset:2px}.\\[\\&_\\.paloma-toast\\]\\:outline-interactive-highlight .paloma-toast{outline-color:var(--interactive-highlight-color)}.\\[\\&_\\[data-variant\\=danger\\]\\]\\:\\!bg-interactive-neutral-regular [data-variant=danger]{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--interactive-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.\\[\\&_\\[data-variant\\=inverse\\]\\]\\:\\!bg-interactive-neutral-subtle [data-variant=inverse]{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--interactive-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.\\[\\&_\\[data-variant\\=primary\\]\\]\\:\\!bg-content-neutral-regular [data-variant=primary]{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.\\[\\&_\\[data-variant\\=secondary\\]\\]\\:\\!bg-interactive-neutral-regular [data-variant=secondary]{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--interactive-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.\\[\\&_\\[data-vrt-overlay\\]\\]\\:\\!bg-content-neutral-bold\\/\\[0\\.08\\] [data-vrt-overlay]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)!important}.\\[\\&_\\[data-vrt-overlay\\]\\]\\:\\!bg-content-neutral-bold\\/\\[0\\.12\\] [data-vrt-overlay]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)!important}.\\[\\&_\\[role\\=tab\\]\\]\\:bg-content-neutral-regular\\/\\[0\\.08\\] [role=tab]{background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent 92%)}.\\[\\&_\\[role\\=tab\\]\\]\\:outline [role=tab]{outline-style:solid}.\\[\\&_\\[role\\=tab\\]\\]\\:outline-\\[3px\\] [role=tab]{outline-width:3px}.\\[\\&_\\[role\\=tab\\]\\]\\:outline-offset-2 [role=tab]{outline-offset:2px}.\\[\\&_\\[role\\=tab\\]\\]\\:outline-interactive-highlight [role=tab]{outline-color:var(--interactive-highlight-color)}.\\[\\&_a\\]\\:rounded-sm a{border-radius:.125rem}.\\[\\&_a\\]\\:bg-content-neutral-bold\\/\\[0\\.08\\] a{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.\\[\\&_a\\]\\:outline a{outline-style:solid}.\\[\\&_a\\]\\:outline-2 a{outline-width:2px}.\\[\\&_a\\]\\:outline-offset-2 a{outline-offset:2px}.\\[\\&_a\\]\\:outline-interactive-highlight a{outline-color:var(--interactive-highlight-color)}.\\[\\&_button\\]\\:rounded-md button{border-radius:.375rem}.\\[\\&_button\\]\\:\\!bg-surface-level-02 button{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--surface-level-02-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.\\[\\&_button\\]\\:bg-content-neutral-bold\\/\\[0\\.08\\] button{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.\\[\\&_button\\]\\:bg-content-neutral-bold\\/\\[0\\.12\\] button{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.\\[\\&_button\\]\\:outline button{outline-style:solid}.\\[\\&_button\\]\\:outline-2 button{outline-width:2px}.\\[\\&_button\\]\\:outline-offset-2 button{outline-offset:2px}.\\[\\&_button\\]\\:outline-interactive-highlight button{outline-color:var(--interactive-highlight-color)}@media not all and (min-width:1280px){.\\[\\&_span\\[data-logo-product-name\\=paloma-logo\\]\\]\\:max-lg\\:hidden span[data-logo-product-name=paloma-logo]{display:none}}@media(hover:hover){.\\[\\@media\\(hover\\:hover\\)\\]\\:hover\\:bg-content-neutral-bold\\/\\[0\\.08\\]:where([data-rac])[data-hovered]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.\\[\\@media\\(hover\\:hover\\)\\]\\:hover\\:bg-surface-level-02:where([data-rac])[data-hovered]{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-level-02-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.\\[\\@media\\(hover\\:hover\\)\\]\\:hover\\:active\\:bg-content-neutral-bold\\/\\[0\\.12\\]:active:where([data-rac])[data-hovered]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.\\[\\@media\\(hover\\:hover\\)\\]\\:hover\\:bg-content-neutral-bold\\/\\[0\\.08\\]:where(:not([data-rac])):hover{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.\\[\\@media\\(hover\\:hover\\)\\]\\:hover\\:bg-surface-level-02:where(:not([data-rac])):hover{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-level-02-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.\\[\\@media\\(hover\\:hover\\)\\]\\:hover\\:active\\:bg-content-neutral-bold\\/\\[0\\.12\\]:active:where(:not([data-rac])):hover{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.group:where([data-rac])[data-hovered] .\\[\\@media\\(hover\\:hover\\)\\]\\:group-hover\\:underline{text-decoration-line:underline}.group:where([data-rac])[data-hovered] .\\[\\@media\\(hover\\:hover\\)\\]\\:group-hover\\:no-underline{text-decoration-line:none}.group:where(:not([data-rac])):hover .\\[\\@media\\(hover\\:hover\\)\\]\\:group-hover\\:underline{text-decoration-line:underline}.group:where(:not([data-rac])):hover .\\[\\@media\\(hover\\:hover\\)\\]\\:group-hover\\:no-underline{text-decoration-line:none}}[tabindex="0"].\\[\\[tabindex\\=\\'0\\'\\]\\&\\:focus-visible\\]\\:outline:focus-visible{outline-style:solid}[tabindex="0"].\\[\\[tabindex\\=\\'0\\'\\]\\&\\:focus-visible\\]\\:outline-2:focus-visible{outline-width:2px}[tabindex="0"].\\[\\[tabindex\\=\\'0\\'\\]\\&\\:focus-visible\\]\\:outline-offset-2:focus-visible{outline-offset:2px}[tabindex="0"].\\[\\[tabindex\\=\\'0\\'\\]\\&\\:focus-visible\\]\\:outline-offset-\\[-3px\\]:focus-visible{outline-offset:-3px}[tabindex="0"].\\[\\[tabindex\\=\\'0\\'\\]\\&\\:focus-visible\\]\\:outline-interactive-highlight:focus-visible{outline-color:var(--interactive-highlight-color)}`;
var _ = Ml();
const S = /* @__PURE__ */ my(_);
class Bo {
  constructor(r) {
    this.value = null, this.level = 0, this.hasChildNodes = !1, this.rendered = null, this.textValue = "", this["aria-label"] = void 0, this.index = 0, this.parentKey = null, this.prevKey = null, this.nextKey = null, this.firstChildKey = null, this.lastChildKey = null, this.props = {}, this.colSpan = null, this.colIndex = null, this.type = this.constructor.type, this.key = r;
  }
  get childNodes() {
    throw new Error("childNodes is not supported");
  }
  clone() {
    let r = new this.constructor(this.key);
    return r.value = this.value, r.level = this.level, r.hasChildNodes = this.hasChildNodes, r.rendered = this.rendered, r.textValue = this.textValue, r["aria-label"] = this["aria-label"], r.index = this.index, r.parentKey = this.parentKey, r.prevKey = this.prevKey, r.nextKey = this.nextKey, r.firstChildKey = this.firstChildKey, r.lastChildKey = this.lastChildKey, r.props = this.props, r.render = this.render, r.colSpan = this.colSpan, r.colIndex = this.colIndex, r;
  }
  filter(r, n, i) {
    let l = this.clone();
    return n.addDescendants(l, r), l;
  }
}
class Mg extends Bo {
  filter(r, n, i) {
    let [l, c] = jg(r, n, this.firstChildKey, i), u = this.clone();
    return u.firstChildKey = l, u.lastChildKey = c, u;
  }
}
class kS extends Bo {
  static {
    this.type = "header";
  }
}
class SS extends Bo {
  static {
    this.type = "loader";
  }
}
class CS extends Mg {
  static {
    this.type = "item";
  }
  filter(r, n, i) {
    if (i(this.textValue, this)) {
      let l = this.clone();
      return n.addDescendants(l, r), l;
    }
    return null;
  }
}
class _S extends Mg {
  static {
    this.type = "section";
  }
  filter(r, n, i) {
    let l = super.filter(r, n, i);
    if (l && l.lastChildKey !== null) {
      let c = r.getItem(l.lastChildKey);
      if (c && c.type !== "header") return l;
    }
    return null;
  }
}
class _y {
  get size() {
    return this.itemCount;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  *[Symbol.iterator]() {
    let r = this.firstKey != null ? this.keyMap.get(this.firstKey) : void 0;
    for (; r; )
      yield r, r = r.nextKey != null ? this.keyMap.get(r.nextKey) : void 0;
  }
  getChildren(r) {
    let n = this.keyMap;
    return {
      *[Symbol.iterator]() {
        let i = n.get(r), l = i?.firstChildKey != null ? n.get(i.firstChildKey) : null;
        for (; l; )
          yield l, l = l.nextKey != null ? n.get(l.nextKey) : void 0;
      }
    };
  }
  getKeyBefore(r) {
    let n = this.keyMap.get(r);
    if (!n) return null;
    if (n.prevKey != null) {
      for (n = this.keyMap.get(n.prevKey); n && n.type !== "item" && n.lastChildKey != null; ) n = this.keyMap.get(n.lastChildKey);
      return n?.key ?? null;
    }
    return n.parentKey;
  }
  getKeyAfter(r) {
    let n = this.keyMap.get(r);
    if (!n) return null;
    if (n.type !== "item" && n.firstChildKey != null) return n.firstChildKey;
    for (; n; ) {
      if (n.nextKey != null) return n.nextKey;
      if (n.parentKey != null) n = this.keyMap.get(n.parentKey);
      else return null;
    }
    return null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    let r = this.lastKey != null ? this.keyMap.get(this.lastKey) : null;
    for (; r?.lastChildKey != null; ) r = this.keyMap.get(r.lastChildKey);
    return r?.key ?? null;
  }
  getItem(r) {
    return this.keyMap.get(r) ?? null;
  }
  at() {
    throw new Error("Not implemented");
  }
  clone() {
    let r = this.constructor, n = new r();
    return n.keyMap = new Map(this.keyMap), n.firstKey = this.firstKey, n.lastKey = this.lastKey, n.itemCount = this.itemCount, n;
  }
  addNode(r) {
    if (this.frozen) throw new Error("Cannot add a node to a frozen collection");
    r.type === "item" && this.keyMap.get(r.key) == null && this.itemCount++, this.keyMap.set(r.key, r);
  }
  // Deeply add a node and its children to the collection from another collection, primarily used when filtering a collection
  addDescendants(r, n) {
    this.addNode(r);
    let i = n.getChildren(r.key);
    for (let l of i) this.addDescendants(l, n);
  }
  removeNode(r) {
    if (this.frozen) throw new Error("Cannot remove a node to a frozen collection");
    let n = this.keyMap.get(r);
    n != null && n.type === "item" && this.itemCount--, this.keyMap.delete(r);
  }
  commit(r, n, i = !1) {
    if (this.frozen) throw new Error("Cannot commit a frozen collection");
    this.firstKey = r, this.lastKey = n, this.frozen = !i;
  }
  filter(r) {
    let n = new this.constructor(), [i, l] = jg(this, n, this.firstKey, r);
    return n?.commit(i, l), n;
  }
  constructor() {
    this.keyMap = /* @__PURE__ */ new Map(), this.firstKey = null, this.lastKey = null, this.frozen = !1, this.itemCount = 0;
  }
}
function jg(e, r, n, i) {
  if (n == null) return [
    null,
    null
  ];
  let l = null, c = null, u = e.getItem(n);
  for (; u != null; ) {
    let d = u.filter(e, r, i);
    d != null && (d.nextKey = null, c && (d.prevKey = c.key, c.nextKey = d.key), l == null && (l = d), r.addNode(d), c = d), u = u.nextKey != null ? e.getItem(u.nextKey) : null;
  }
  if (c && c.type === "separator") {
    let d = c.prevKey;
    r.removeNode(c.key), d != null ? (c = r.getItem(d), c.nextKey = null) : c = null;
  }
  return [
    l?.key ?? null,
    c?.key ?? null
  ];
}
class Dg {
  constructor(r) {
    this._firstChild = null, this._lastChild = null, this._previousSibling = null, this._nextSibling = null, this._parentNode = null, this._minInvalidChildIndex = null, this.ownerDocument = r;
  }
  *[Symbol.iterator]() {
    let r = this.firstChild;
    for (; r; )
      yield r, r = r.nextSibling;
  }
  get firstChild() {
    return this._firstChild;
  }
  set firstChild(r) {
    this._firstChild = r, this.ownerDocument.markDirty(this);
  }
  get lastChild() {
    return this._lastChild;
  }
  set lastChild(r) {
    this._lastChild = r, this.ownerDocument.markDirty(this);
  }
  get previousSibling() {
    return this._previousSibling;
  }
  set previousSibling(r) {
    this._previousSibling = r, this.ownerDocument.markDirty(this);
  }
  get nextSibling() {
    return this._nextSibling;
  }
  set nextSibling(r) {
    this._nextSibling = r, this.ownerDocument.markDirty(this);
  }
  get parentNode() {
    return this._parentNode;
  }
  set parentNode(r) {
    this._parentNode = r, this.ownerDocument.markDirty(this);
  }
  get isConnected() {
    return this.parentNode?.isConnected || !1;
  }
  invalidateChildIndices(r) {
    (this._minInvalidChildIndex == null || !this._minInvalidChildIndex.isConnected || r.index < this._minInvalidChildIndex.index) && (this._minInvalidChildIndex = r, this.ownerDocument.markDirty(this));
  }
  updateChildIndices() {
    let r = this._minInvalidChildIndex;
    for (; r; )
      r.index = r.previousSibling ? r.previousSibling.index + 1 : 0, r = r.nextSibling;
    this._minInvalidChildIndex = null;
  }
  appendChild(r) {
    r.parentNode && r.parentNode.removeChild(r), this.firstChild == null && (this.firstChild = r), this.lastChild ? (this.lastChild.nextSibling = r, r.index = this.lastChild.index + 1, r.previousSibling = this.lastChild) : (r.previousSibling = null, r.index = 0), r.parentNode = this, r.nextSibling = null, this.lastChild = r, this.ownerDocument.markDirty(this), this.isConnected && this.ownerDocument.queueUpdate();
  }
  insertBefore(r, n) {
    if (n == null) return this.appendChild(r);
    r.parentNode && r.parentNode.removeChild(r), r.nextSibling = n, r.previousSibling = n.previousSibling, r.index = n.index - 1, this.firstChild === n ? this.firstChild = r : n.previousSibling && (n.previousSibling.nextSibling = r), n.previousSibling = r, r.parentNode = n.parentNode, this.invalidateChildIndices(r), this.isConnected && this.ownerDocument.queueUpdate();
  }
  removeChild(r) {
    r.parentNode === this && (this._minInvalidChildIndex === r && (this._minInvalidChildIndex = null), r.nextSibling && (this.invalidateChildIndices(r.nextSibling), r.nextSibling.previousSibling = r.previousSibling), r.previousSibling && (r.previousSibling.nextSibling = r.nextSibling), this.firstChild === r && (this.firstChild = r.nextSibling), this.lastChild === r && (this.lastChild = r.previousSibling), r.parentNode = null, r.nextSibling = null, r.previousSibling = null, r.index = 0, this.ownerDocument.markDirty(r), this.isConnected && this.ownerDocument.queueUpdate());
  }
  addEventListener() {
  }
  removeEventListener() {
  }
  get previousVisibleSibling() {
    let r = this.previousSibling;
    for (; r && r.isHidden; ) r = r.previousSibling;
    return r;
  }
  get nextVisibleSibling() {
    let r = this.nextSibling;
    for (; r && r.isHidden; ) r = r.nextSibling;
    return r;
  }
  get firstVisibleChild() {
    let r = this.firstChild;
    for (; r && r.isHidden; ) r = r.nextSibling;
    return r;
  }
  get lastVisibleChild() {
    let r = this.lastChild;
    for (; r && r.isHidden; ) r = r.previousSibling;
    return r;
  }
}
class ca extends Dg {
  constructor(r, n) {
    super(n), this.nodeType = 8, this.isMutated = !0, this._index = 0, this.isHidden = !1, this.node = null;
  }
  get index() {
    return this._index;
  }
  set index(r) {
    this._index = r, this.ownerDocument.markDirty(this);
  }
  get level() {
    return this.parentNode instanceof ca ? this.parentNode.level + (this.parentNode.node?.type === "item" ? 1 : 0) : 0;
  }
  /**
  * Lazily gets a mutable instance of a Node. If the node has already
  * been cloned during this update cycle, it just returns the existing one.
  */
  getMutableNode() {
    return this.node == null ? null : (this.isMutated || (this.node = this.node.clone(), this.isMutated = !0), this.ownerDocument.markDirty(this), this.node);
  }
  updateNode() {
    let r = this.nextVisibleSibling, n = this.getMutableNode();
    if (n != null && (n.index = this.index, n.level = this.level, n.parentKey = this.parentNode instanceof ca ? this.parentNode.node?.key ?? null : null, n.prevKey = this.previousVisibleSibling?.node?.key ?? null, n.nextKey = r?.node?.key ?? null, n.hasChildNodes = !!this.firstChild, n.firstChildKey = this.firstVisibleChild?.node?.key ?? null, n.lastChildKey = this.lastVisibleChild?.node?.key ?? null, (n.colSpan != null || n.colIndex != null) && r)) {
      let i = (n.colIndex ?? n.index) + (n.colSpan ?? 1);
      if (r.node != null && i !== r.node.colIndex) {
        let l = r.getMutableNode();
        l.colIndex = i;
      }
    }
  }
  setProps(r, n, i, l, c) {
    let u, { value: d, textValue: h, id: p, ...b } = r;
    if (this.node == null ? (u = new i(p ?? `react-aria-${++this.ownerDocument.nodeId}`), this.node = u) : u = this.getMutableNode(), b.ref = n, u.props = b, u.rendered = l, u.render = c, u.value = d, r["aria-label"] && (u["aria-label"] = r["aria-label"]), u.textValue = h || (typeof b.children == "string" ? b.children : "") || r["aria-label"] || "", p != null && p !== u.key) throw new Error("Cannot change the id of an item");
    b.colSpan != null && (u.colSpan = b.colSpan), this.isConnected && this.ownerDocument.queueUpdate();
  }
  get style() {
    let r = this;
    return {
      get display() {
        return r.isHidden ? "none" : "";
      },
      set display(n) {
        let i = n === "none";
        if (r.isHidden !== i) {
          (r.parentNode?.firstVisibleChild === r || r.parentNode?.lastVisibleChild === r) && r.ownerDocument.markDirty(r.parentNode);
          let l = r.previousVisibleSibling, c = r.nextVisibleSibling;
          l && r.ownerDocument.markDirty(l), c && r.ownerDocument.markDirty(c), r.isHidden = i, r.ownerDocument.markDirty(r);
        }
      }
    };
  }
  hasAttribute() {
  }
  setAttribute() {
  }
  setAttributeNS() {
  }
  removeAttribute() {
  }
}
class Ey extends Dg {
  constructor(r) {
    super(null), this.nodeType = 11, this.ownerDocument = this, this.dirtyNodes = /* @__PURE__ */ new Set(), this.isSSR = !1, this.nodeId = 0, this.nodesByProps = /* @__PURE__ */ new WeakMap(), this.nextCollection = null, this.subscriptions = /* @__PURE__ */ new Set(), this.queuedRender = !1, this.inSubscription = !1, this.collection = r, this.nextCollection = r;
  }
  get isConnected() {
    return !0;
  }
  createElement(r) {
    return new ca(r, this);
  }
  getMutableCollection() {
    return this.nextCollection || (this.nextCollection = this.collection.clone()), this.nextCollection;
  }
  markDirty(r) {
    this.dirtyNodes.add(r);
  }
  addNode(r) {
    if (r.isHidden || r.node == null) return;
    let n = this.getMutableCollection();
    if (!n.getItem(r.node.key)) for (let i of r) this.addNode(i);
    n.addNode(r.node);
  }
  removeNode(r) {
    for (let n of r) this.removeNode(n);
    r.node && this.getMutableCollection().removeNode(r.node.key);
  }
  /** Finalizes the collection update, updating all nodes and freezing the collection. */
  getCollection() {
    return this.inSubscription ? this.collection : (this.queuedRender = !1, this.updateCollection(), this.collection);
  }
  updateCollection() {
    for (let r of this.dirtyNodes) r instanceof ca && (!r.isConnected || r.isHidden) ? this.removeNode(r) : r.updateChildIndices();
    for (let r of this.dirtyNodes) r instanceof ca ? (r.isConnected && !r.isHidden && (r.updateNode(), this.addNode(r)), r.node && this.dirtyNodes.delete(r), r.isMutated = !1) : this.dirtyNodes.delete(r);
    this.nextCollection && (this.nextCollection.commit(this.firstVisibleChild?.node?.key ?? null, this.lastVisibleChild?.node?.key ?? null, this.isSSR), this.isSSR || (this.collection = this.nextCollection, this.nextCollection = null));
  }
  queueUpdate() {
    if (!(this.dirtyNodes.size === 0 || this.queuedRender)) {
      this.queuedRender = !0, this.inSubscription = !0, this.isSSR || (this.collection = this.collection.clone());
      for (let r of this.subscriptions) r();
      this.inSubscription = !1;
    }
  }
  subscribe(r) {
    return this.subscriptions.add(r), this.queuedRender && r(), () => this.subscriptions.delete(r);
  }
  resetAfterSSR() {
    this.isSSR && (this.isSSR = !1, this.firstChild = null, this.lastChild = null, this.nodeId = 0);
  }
}
function Kg(e) {
  let { children: r, items: n, idScope: i, addIdAndValue: l, dependencies: c = [] } = e, u = _.useMemo(() => {
  }, [
    r
  ]), d = _.useMemo(() => /* @__PURE__ */ new WeakMap(), [
    ...c,
    u
  ]);
  return _.useMemo(() => {
    if (n && typeof r == "function") {
      let h = [];
      for (let p of n) {
        let b = $y(p) ? p : null, v = b ? d.get(b) : null;
        if (!v) {
          v = r(p);
          let g = v.props.id ?? p?.key ?? p?.id;
          i != null && v.props.id == null && g != null && (g = i + ":" + g);
          let w = g ?? h.length;
          v = _.cloneElement(v, l ? {
            key: w,
            id: g,
            value: p
          } : {
            key: w
          }), b && d.set(b, v);
        }
        h.push(v);
      }
      return h;
    } else if (typeof r != "function") return r;
  }, [
    r,
    n,
    d,
    i,
    l
  ]);
}
function $y(e) {
  switch (typeof e) {
    case "object":
      return e != null;
    case "function":
    case "symbol":
      return !0;
    default:
      return !1;
  }
}
function Nr(e) {
  if (Py()) e.focus({
    preventScroll: !0
  });
  else {
    let r = Fy(e);
    e.focus(), zy(r);
  }
}
let ll = null;
function Py() {
  if (ll == null) {
    ll = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return ll = !0, !0;
        }
      });
    } catch {
    }
  }
  return ll;
}
function Fy(e) {
  let r = e.parentNode, n = [], i = document.scrollingElement || document.documentElement;
  for (; r instanceof HTMLElement && r !== i; )
    (r.offsetHeight < r.scrollHeight || r.offsetWidth < r.scrollWidth) && n.push({
      element: r,
      scrollTop: r.scrollTop,
      scrollLeft: r.scrollLeft
    }), r = r.parentNode;
  return i instanceof HTMLElement && n.push({
    element: i,
    scrollTop: i.scrollTop,
    scrollLeft: i.scrollLeft
  }), n;
}
function zy(e) {
  for (let { element: r, scrollTop: n, scrollLeft: i } of e)
    r.scrollTop = n, r.scrollLeft = i;
}
const Ye = (e) => Ty(e) ? e.document : Ny(e) ? e : e?.ownerDocument ?? (typeof document < "u" ? document : void 0), St = (e) => Ye(e)?.defaultView ?? (typeof window < "u" ? window : void 0);
function Og(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function Ty(e) {
  return typeof e == "object" && e != null && "window" in e && e.window === e;
}
function Ny(e) {
  return Og(e) && e.nodeType === 9;
}
function Vg(e) {
  return Og(e) && e.nodeType === 11 && "host" in e;
}
function Ay(e, r, n, i) {
  if (n == null || e == null) return () => {
  };
  let l = Array.isArray(e) ? e : [
    e
  ];
  for (let c of l) c.addEventListener(r, n, i);
  return () => {
    for (let c of l) c.removeEventListener(r, n, i);
  };
}
let Iy = !1;
function jl() {
  return Iy;
}
function Me(e, r) {
  if (!jl()) return r && e ? e.contains(r) : !1;
  if (!e || !r) return !1;
  let n = r;
  for (; n !== null; ) {
    if (n === e) return !0;
    typeof n.assignedElements != "function" && n.assignedSlot?.parentNode ? n = n.assignedSlot.parentNode : Vg(n) ? n = n.host : n = n.parentNode;
  }
  return !1;
}
const Dt = (e = document) => {
  if (!jl()) return e.activeElement;
  let r = e.activeElement;
  for (; r && "shadowRoot" in r && r.shadowRoot?.activeElement; ) r = r.shadowRoot.activeElement;
  return r;
};
function Ee(e) {
  if (jl() && e.target instanceof Element && e.target.shadowRoot) {
    if ("composedPath" in e) return e.composedPath()[0] ?? null;
    if ("composedPath" in e.nativeEvent) return e.nativeEvent.composedPath()[0] ?? null;
  }
  return e.target;
}
function Zh(e) {
  if (!e) return !1;
  let r = e.getRootNode(), n = St(e);
  if (!(r instanceof n.Document || r instanceof n.ShadowRoot)) return !1;
  let i = r.activeElement;
  return i != null && e.contains(i);
}
const Ry = typeof Element < "u" && "checkVisibility" in Element.prototype;
function Ly(e) {
  const r = St(e);
  if (!(e instanceof r.HTMLElement) && !(e instanceof r.SVGElement)) return !1;
  let { display: n, visibility: i } = e.style, l = n !== "none" && i !== "hidden" && i !== "collapse";
  if (l) {
    const { getComputedStyle: c } = St(e);
    let { display: u, visibility: d } = c(e);
    l = u !== "none" && d !== "hidden" && d !== "collapse";
  }
  return l;
}
function My(e, r) {
  return !e.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !e.hasAttribute("data-react-aria-prevent-focus") && (e.nodeName === "DETAILS" && r && r.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function fd(e, r) {
  return Ry ? e.checkVisibility({
    visibilityProperty: !0
  }) && !e.closest("[data-react-aria-prevent-focus]") : e.nodeName !== "#comment" && Ly(e) && My(e, r) && (!e.parentElement || fd(e.parentElement, e));
}
const pd = [
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
], jy = pd.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
pd.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const Dy = pd.join(':not([hidden]):not([tabindex="-1"]),');
function Bg(e, r) {
  return e.matches(jy) && !Hg(e) && (r?.skipVisibilityCheck || fd(e));
}
function hd(e) {
  return e.matches(Dy) && fd(e) && !Hg(e);
}
function Hg(e) {
  let r = e;
  for (; r != null; ) {
    if (r instanceof St(r).HTMLElement && r.inert) return !0;
    r = r.parentElement;
  }
  return !1;
}
const or = typeof document < "u" ? S.useLayoutEffect : () => {
};
function md(e) {
  let r = e;
  return r.nativeEvent = e, r.isDefaultPrevented = () => r.defaultPrevented, r.isPropagationStopped = () => r.cancelBubble, r.persist = () => {
  }, r;
}
function Ug(e, r) {
  Object.defineProperty(e, "target", {
    value: r
  }), Object.defineProperty(e, "currentTarget", {
    value: r
  });
}
function Wg(e) {
  let r = _.useRef({
    isFocused: !1,
    observer: null
  });
  return or(() => {
    const n = r.current;
    return () => {
      n.observer && (n.observer.disconnect(), n.observer = null);
    };
  }, []), _.useCallback((n) => {
    let i = Ee(n);
    if (i instanceof HTMLButtonElement || i instanceof HTMLInputElement || i instanceof HTMLTextAreaElement || i instanceof HTMLSelectElement) {
      r.current.isFocused = !0;
      let l = i, c = (u) => {
        if (r.current.isFocused = !1, l.disabled) {
          let d = md(u);
          e?.(d);
        }
        r.current.observer && (r.current.observer.disconnect(), r.current.observer = null);
      };
      l.addEventListener("focusout", c, {
        once: !0
      }), r.current.observer = new MutationObserver(() => {
        if (r.current.isFocused && l.disabled) {
          r.current.observer?.disconnect();
          let u = l === Dt() ? null : Dt();
          l.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: u
          })), l.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: u
          }));
        }
      }), r.current.observer.observe(l, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    e
  ]);
}
let $l = !1;
function Ky(e) {
  for (; e && !Bg(e, {
    skipVisibilityCheck: !0
  }); ) e = e.parentElement;
  let r = St(e), n = Dt(r.document);
  if (!n || n === e) return;
  let i = e?.getRootNode(), l = i != null && Vg(i) ? i : St(e), c = (k) => k === e || k != null && Me(e, k), u = (k) => k === n || n != null && k != null && Me(n, k);
  $l = !0;
  let d = !1, h = (k) => {
    (u(Ee(k)) || d) && k.stopImmediatePropagation();
  }, p = (k) => {
    (u(Ee(k)) || d) && (k.stopImmediatePropagation(), !e && !d && (d = !0, Nr(n), g()));
  }, b = (k) => {
    (c(Ee(k)) || d) && k.stopImmediatePropagation();
  }, v = (k) => {
    (c(Ee(k)) || d) && (k.stopImmediatePropagation(), d || (d = !0, Nr(n), g()));
  };
  l.addEventListener("blur", h, !0), l.addEventListener("focusout", p, !0), l.addEventListener("focusin", v, !0), l.addEventListener("focus", b, !0);
  let g = () => {
    cancelAnimationFrame(w), l.removeEventListener("blur", h, !0), l.removeEventListener("focusout", p, !0), l.removeEventListener("focusin", v, !0), l.removeEventListener("focus", b, !0), $l = !1, d = !1;
  }, w = requestAnimationFrame(g);
  return g;
}
function Dl(e) {
  if (typeof window > "u" || window.navigator == null) return !1;
  let r = window.navigator.userAgentData?.brands;
  return Array.isArray(r) && r.some((n) => e.test(n.brand)) || e.test(window.navigator.userAgent);
}
function gd(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.userAgentData?.platform || window.navigator.platform) : !1;
}
function Ir(e) {
  let r = null;
  return () => (r == null && (r = e()), r);
}
const ir = Ir(function() {
  return gd(/^Mac/i);
}), Oy = Ir(function() {
  return gd(/^iPhone/i);
}), Gg = Ir(function() {
  return gd(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  ir() && navigator.maxTouchPoints > 1;
}), Ho = Ir(function() {
  return Oy() || Gg();
}), Vy = Ir(function() {
  return ir() || Ho();
}), Po = Ir(function() {
  return Dl(/AppleWebKit/i) && (Ho() || !By());
}), By = Ir(function() {
  return Dl(/Chrome|CriOS|CrMo/i);
}), Fu = Ir(function() {
  return Dl(/Android/i);
}), Hy = Ir(function() {
  return Dl(/(Firefox|FxiOS)/i);
});
function Yg(e) {
  return e.pointerType === "" && e.isTrusted ? !0 : Fu() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function Uy(e) {
  return !Fu() && e.width === 0 && e.height === 0 || Fu() && e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
const Wy = /* @__PURE__ */ _.createContext({
  isNative: !0,
  open: qy,
  useHref: (e) => e
});
function Kl() {
  return _.useContext(Wy);
}
function Gy(e, r) {
  let n = e.getAttribute("target");
  return (!n || n === "_self") && e.origin === location.origin && !e.hasAttribute("download") && !r.metaKey && // open in new tab (mac)
  !r.ctrlKey && // open in new tab (windows)
  !r.altKey && // download
  !r.shiftKey;
}
function Ar(e, r, n = !0) {
  let { metaKey: i, ctrlKey: l, altKey: c, shiftKey: u } = r;
  !Po() && Hy() && window.event?.type?.startsWith("key") && e.target === "_blank" && (ir() ? i = !0 : l = !0);
  let d = Po() && ir() && !Gg() ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: i,
    ctrlKey: l,
    altKey: c,
    shiftKey: u
  }) : new MouseEvent("click", {
    metaKey: i,
    ctrlKey: l,
    altKey: c,
    shiftKey: u,
    detail: 1,
    bubbles: !0,
    cancelable: !0
  });
  Ar.isOpening = n, Nr(e), e.dispatchEvent(d), Ar.isOpening = !1;
}
Ar.isOpening = !1;
function Yy(e, r) {
  if (e instanceof HTMLAnchorElement) r(e);
  else if (e.hasAttribute("data-href")) {
    let n = document.createElement("a");
    n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), r(n), e.removeChild(n);
  }
}
function qy(e, r) {
  Yy(e, (n) => Ar(n, r));
}
function qg(e) {
  const n = Kl().useHref(e?.href ?? "");
  let i = {};
  if (e)
    for (let l of [
      "href",
      "target",
      "rel",
      "download",
      "ping",
      "referrerPolicy"
    ]) l in e && e[l] !== void 0 && (i[l] = l === "href" ? n : e[l]);
  return i;
}
function Qy(e, r, n, i) {
  !r.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && // If props are applied to a router Link component, it may have already prevented default.
  !e.isDefaultPrevented() && Gy(e.currentTarget, e) && n && (e.preventDefault(), r.open(e.currentTarget, e, n, i));
}
const Qg = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, Xg = /* @__PURE__ */ S.createContext(Qg), Xy = /* @__PURE__ */ S.createContext(!1);
let nu = /* @__PURE__ */ new WeakMap();
function Zy(e = !1) {
  let r = _.useContext(Xg), n = _.useRef(null);
  if (n.current === null && !e) {
    let i = (
      // @ts-ignore
      S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.ReactCurrentOwner?.current
    );
    if (i) {
      let l = nu.get(i);
      l == null ? nu.set(i, {
        id: r.current,
        state: i.memoizedState
      }) : i.memoizedState !== l.state && (r.current = l.id, nu.delete(i));
    }
    n.current = ++r.current;
  }
  return n.current;
}
function Jy(e) {
  let r = _.useContext(Xg), n = Zy(!!e), i = `react-aria${r.prefix}`;
  return e || `${i}-${n}`;
}
function ew(e) {
  let r = S.useId(), [n] = _.useState(Ol()), i = n ? "react-aria" : `react-aria${Qg.prefix}`;
  return e || `${i}-${r}`;
}
const tw = typeof S.useId == "function" ? ew : Jy;
function rw() {
  return !1;
}
function nw() {
  return !0;
}
function aw(e) {
  return () => {
  };
}
function Ol() {
  return typeof S.useSyncExternalStore == "function" ? S.useSyncExternalStore(aw, rw, nw) : _.useContext(Xy);
}
let ba = null;
const zu = /* @__PURE__ */ new Set();
let ko = /* @__PURE__ */ new Map(), Pn = !1, ml = !1;
const ow = {
  Tab: !0,
  Escape: !0
};
function vd(e, r) {
  for (let n of zu) n(e, r);
}
function iw(e) {
  return !(e.metaKey || !ir() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Pl(e) {
  Pn = !0, !Ar.isOpening && iw(e) && (ba = "keyboard", vd("keyboard", e));
}
function ua(e) {
  ba = "pointer", "pointerType" in e && e.pointerType, (e.type === "mousedown" || e.type === "pointerdown") && (Pn = !0, vd("pointer", e));
}
function Zg(e) {
  !Ar.isOpening && Yg(e) && (Pn = !0, ba = "virtual");
}
function Jg(e) {
  if ($l) return;
  let r = Ee(e), n = St(r), i = Ye(r);
  if (r === n) {
    ml = !0;
    return;
  }
  r === i || !e.isTrusted || (!Pn && !ml && (ba = "virtual", vd("virtual", e)), Pn = !1, ml = !1);
}
function ev() {
  $l || (Pn = !1, ml = !0);
}
function Tu(e) {
  if (typeof window > "u" || typeof document > "u") return;
  const r = St(e), n = Ye(e);
  if (ko.get(r)) return;
  let i = r.HTMLElement.prototype.focus;
  Reflect.defineProperty(r.HTMLElement.prototype, "focus", {
    configurable: !0,
    writable: !0,
    value: function() {
      Pn = !0, i.apply(this, arguments);
    }
  }), n.addEventListener("keydown", Pl, !0), n.addEventListener("keyup", Pl, !0), n.addEventListener("click", Zg, !0), r.addEventListener("focus", Jg, !0), r.addEventListener("blur", ev, !1), typeof PointerEvent < "u" && (n.addEventListener("pointerdown", ua, !0), n.addEventListener("pointermove", ua, !0), n.addEventListener("pointerup", ua, !0)), r.addEventListener("beforeunload", () => {
    tv(e);
  }, {
    once: !0
  }), ko.set(r, {
    focus: i
  });
}
const tv = (e, r) => {
  const n = St(e), i = Ye(e);
  r && i.removeEventListener("DOMContentLoaded", r), ko.has(n) && (Reflect.defineProperty(n.HTMLElement.prototype, "focus", {
    configurable: !0,
    writable: !0,
    value: ko.get(n).focus
  }), i.removeEventListener("keydown", Pl, !0), i.removeEventListener("keyup", Pl, !0), i.removeEventListener("click", Zg, !0), n.removeEventListener("focus", Jg, !0), n.removeEventListener("blur", ev, !1), typeof PointerEvent < "u" && (i.removeEventListener("pointerdown", ua, !0), i.removeEventListener("pointermove", ua, !0), i.removeEventListener("pointerup", ua, !0)), ko.delete(n));
};
function lw(e) {
  const r = Ye(e);
  let n;
  return r.readyState !== "loading" ? Tu(e) : (n = () => {
    Tu(e);
  }, r.addEventListener("DOMContentLoaded", n)), () => tv(e, n);
}
typeof document < "u" && lw();
function Nu() {
  return ba !== "pointer";
}
function Au() {
  return ba;
}
const sw = /* @__PURE__ */ new Set([
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
function cw(e, r, n) {
  let i = n ? Ee(n) : void 0, l = Ye(i), c = St(i);
  const u = typeof c < "u" ? c.HTMLInputElement : HTMLInputElement, d = typeof c < "u" ? c.HTMLTextAreaElement : HTMLTextAreaElement, h = typeof c < "u" ? c.HTMLElement : HTMLElement, p = typeof c < "u" ? c.KeyboardEvent : KeyboardEvent;
  let b = Dt(l);
  return e = e || b instanceof u && !sw.has(b.type) || b instanceof d || b instanceof h && b.isContentEditable, !(e && r === "keyboard" && n instanceof p && !ow[n.key]);
}
function uw(e, r, n) {
  Tu(), _.useEffect(() => {
    if (n?.enabled === !1) return;
    let i = (l, c) => {
      cw(!!n?.isTextInput, l, c) && e(Nu());
    };
    return zu.add(i), () => {
      zu.delete(i);
    };
  }, r);
}
let an = /* @__PURE__ */ new Map(), Iu = /* @__PURE__ */ new Set();
function Jh() {
  if (typeof window > "u") return;
  function e(i) {
    return "propertyName" in i;
  }
  let r = (i) => {
    let l = Ee(i);
    if (!e(i) || !l) return;
    let c = an.get(l);
    c || (c = /* @__PURE__ */ new Set(), an.set(l, c), l.addEventListener("transitioncancel", n, {
      once: !0
    })), c.add(i.propertyName);
  }, n = (i) => {
    let l = Ee(i);
    if (!e(i) || !l) return;
    let c = an.get(l);
    if (c && (c.delete(i.propertyName), c.size === 0 && (l.removeEventListener("transitioncancel", n), an.delete(l)), an.size === 0)) {
      for (let u of Iu) u();
      Iu.clear();
    }
  };
  document.body.addEventListener("transitionrun", r), document.body.addEventListener("transitionend", n);
}
typeof document < "u" && (document.readyState !== "loading" ? Jh() : document.addEventListener("DOMContentLoaded", Jh));
function dw() {
  for (const [e] of an)
    "isConnected" in e && !e.isConnected && an.delete(e);
}
function rv(e) {
  requestAnimationFrame(() => {
    dw(), an.size === 0 ? e() : Iu.add(e);
  });
}
function Fl(e) {
  if (!e.isConnected) return;
  const r = Ye(e);
  if (Au() === "virtual") {
    let n = Dt(r);
    rv(() => {
      const i = Dt(r);
      (i === n || i === r.body) && e.isConnected && Nr(e);
    });
  } else Nr(e);
}
function Fo(...e) {
  return (...r) => {
    for (let n of e) typeof n == "function" && n(...r);
  };
}
let fw = !!(typeof window < "u" && window.document && window.document.createElement), da = /* @__PURE__ */ new Map(), oa;
typeof FinalizationRegistry < "u" && (oa = new FinalizationRegistry((e) => {
  da.delete(e);
}));
let au = /* @__PURE__ */ new WeakMap();
function Vl(e) {
  let [r, n] = _.useState(e), i = _.useRef(null), l = tw(r), c = _.useRef(null), u = au.get(c);
  if (oa && u !== l && (u != null && oa.unregister(c), oa.register(c, l, c), au.set(c, l)), fw) {
    const d = da.get(l);
    d && !d.includes(i) ? d.push(i) : da.set(l, [
      i
    ]);
  }
  return or(() => {
    let d = l;
    return () => {
      oa && (oa.unregister(c), au.delete(c)), da.delete(d);
    };
  }, [
    l
  ]), _.useEffect(() => {
    let d = i.current;
    return d && n(d), () => {
      d && (i.current = null);
    };
  }), l;
}
function pw(e, r) {
  if (e === r) return e;
  let n = da.get(e);
  if (n)
    return n.forEach((l) => l.current = r), r;
  let i = da.get(r);
  return i ? (i.forEach((l) => l.current = e), e) : r;
}
function vr(...e) {
  return e.length === 1 && e[0] ? e[0] : (r) => {
    let n = !1;
    const i = e.map((l) => {
      const c = em(l, r);
      return n ||= typeof c == "function", c;
    });
    if (n) return () => {
      i.forEach((l, c) => {
        typeof l == "function" ? l() : em(e[c], null);
      });
    };
  };
}
function em(e, r) {
  if (typeof e == "function") return e(r);
  e != null && (e.current = r);
}
function nv(e) {
  var r, n, i = "";
  if (typeof e == "string" || typeof e == "number") i += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var l = e.length;
    for (r = 0; r < l; r++) e[r] && (n = nv(e[r])) && (i && (i += " "), i += n);
  } else for (n in e) e[n] && (i && (i += " "), i += n);
  return i;
}
function bd() {
  for (var e, r, n = 0, i = "", l = arguments.length; n < l; n++) (e = arguments[n]) && (r = nv(e)) && (i && (i += " "), i += r);
  return i;
}
function Ne(...e) {
  let r = {
    ...e[0]
  };
  for (let n = 1; n < e.length; n++) {
    let i = e[n];
    for (let l in i) {
      let c = r[l], u = i[l];
      typeof c == "function" && typeof u == "function" && // This is a lot faster than a regex.
      l[0] === "o" && l[1] === "n" && l.charCodeAt(2) >= /* 'A' */
      65 && l.charCodeAt(2) <= /* 'Z' */
      90 ? r[l] = Fo(c, u) : (l === "className" || l === "UNSAFE_className") && typeof c == "string" && typeof u == "string" ? r[l] = bd(c, u) : l === "id" && c && u ? r.id = pw(c, u) : l === "ref" && c && u ? r.ref = vr(c, u) : r[l] = u !== void 0 ? u : c;
    }
  }
  return r;
}
function av(e) {
  let { isDisabled: r, onFocus: n, onBlur: i, onFocusChange: l } = e;
  const c = _.useCallback((h) => {
    if (Ee(h) === h.currentTarget)
      return i && i(h), l && l(!1), !0;
  }, [
    i,
    l
  ]), u = Wg(c), d = _.useCallback((h) => {
    let p = Ee(h);
    const b = Ye(p), v = b ? Dt(b) : Dt();
    p === h.currentTarget && p === v && (n && n(h), l && l(!0), u(h));
  }, [
    l,
    n,
    u
  ]);
  return {
    focusProps: {
      onFocus: !r && (n || l || i) ? d : void 0,
      onBlur: !r && (i || l) ? c : void 0
    }
  };
}
function sl(e) {
  if (e)
    return (r) => {
      let n = !0, i = {
        ...r,
        preventDefault() {
          r.preventDefault();
        },
        isDefaultPrevented() {
          return r.isDefaultPrevented();
        },
        stopPropagation() {
          n = !0;
        },
        continuePropagation() {
          n = !1, typeof r.continuePropagation == "function" && r.continuePropagation();
        },
        isPropagationStopped() {
          return n;
        }
      };
      e(i), n && !(typeof r.isPropagationStopped == "function" && r.isPropagationStopped()) && r.stopPropagation();
    };
}
const hw = /* @__PURE__ */ new Set([
  "shift",
  "alt",
  "control",
  "meta",
  "mod"
  // OS dependent - Cmd on Mac, Control on Windows/Linux
]), mw = [
  "Alt",
  "Control",
  "Meta",
  "Shift"
];
function gw(e) {
  let r = /* @__PURE__ */ new Set();
  return e.alt && r.add("Alt"), e.shift && r.add("Shift"), e.ctrl && r.add("Control"), e.meta && r.add("Meta"), e.mod && r.add(ir() ? "Meta" : "Control"), r;
}
function vw(e) {
  let r = /* @__PURE__ */ new Set();
  return e.altKey && r.add("Alt"), e.ctrlKey && r.add("Control"), e.metaKey && r.add("Meta"), e.shiftKey && r.add("Shift"), r;
}
function ov(e) {
  return mw.filter((r) => e.has(r));
}
function bw(e) {
  let r = e.split("+").reduce((n, i) => {
    let l = i.toLowerCase();
    return hw.has(l) ? l === "shift" ? n.shift = !0 : l === "alt" ? n.alt = !0 : l === "control" ? n.ctrl = !0 : l === "meta" ? n.meta = !0 : l === "mod" && (n.mod = !0) : n.key = i, n;
  }, {
    shift: !1,
    alt: !1,
    ctrl: !1,
    meta: !1,
    mod: !1,
    key: ""
  });
  if (r.key === "") throw new Error(`Invalid keyboard shortcut: "${e}". Must include exactly one non-modifier key (e.g. "a", "Enter", "ArrowDown"). Combine any of Shift, Alt, Ctrl, Meta, and Mod.`);
  return r;
}
function iv(e) {
  return e.toLowerCase();
}
const yw = {
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
function ww(e) {
  let r = iv(e), n = yw[r];
  return n ?? r;
}
function xw(e) {
  let r = ov(gw(e)), n = ww(e.key);
  return r.length > 0 ? `${r.join("+")}+${n}` : n;
}
function kw(e) {
  let r = ov(vw(e)), n = iv(e.key);
  return (r.length > 0 ? `${r.join("+")}+` : "") + n;
}
function Sw(e) {
  let r = /* @__PURE__ */ new Map();
  for (let [n, i] of Object.entries(e)) {
    let l = bw(n);
    r.set(xw(l), i);
  }
  return (n) => {
    let i = kw(n), l = r.get(i), c = l?.(n);
    c === void 0 && l !== void 0 ? c = {
      shouldContinuePropagation: !1,
      shouldPreventDefault: !0
    } : typeof c == "boolean" && (c = {
      shouldContinuePropagation: !c,
      shouldPreventDefault: c
    }), c?.shouldPreventDefault && n.preventDefault(), (!l || c?.shouldContinuePropagation) && n.continuePropagation();
  };
}
function Ru(e) {
  let { shortcuts: r, allowRepeats: n = !1, allowComposing: i = !1 } = e, l, c;
  if (r) {
    let u = Sw(r), d = sl((p) => {
      if (!Me(p.currentTarget, Ee(p))) {
        p.continuePropagation();
        return;
      }
      if (p.nativeEvent?.repeat && !n || p.nativeEvent?.isComposing && !i) {
        p.continuePropagation();
        return;
      }
      u(p);
    }), h = sl((p) => {
      if (!Me(p.currentTarget, Ee(p))) {
        p.continuePropagation();
        return;
      }
      if (p.nativeEvent?.repeat && !n || p.nativeEvent?.isComposing && !i) {
        p.continuePropagation();
        return;
      }
      p.continuePropagation();
    });
    l = e.onKeyDown ? Fo(e.onKeyDown, d) : d, c = e.onKeyUp ? Fo(e.onKeyUp, h) : h;
  } else
    l = sl(e.onKeyDown), c = sl(e.onKeyUp);
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: l,
      onKeyUp: c
    }
  };
}
function Bl(e) {
  const r = _.useRef(null), n = _.useRef(void 0), i = _.useCallback((l) => {
    if (typeof e == "function") {
      const c = e, u = c(l);
      return () => {
        typeof u == "function" ? u() : c(null);
      };
    } else if (e)
      return e.current = l, () => {
        e.current = null;
      };
  }, [
    e
  ]);
  return _.useMemo(
    () => ({
      get current() {
        return r.current;
      },
      set current(l) {
        r.current = l, n.current && (n.current(), n.current = void 0), l != null && (n.current = i(l));
      }
    }),
    // oxlint-disable-next-line react/react-compiler
    [
      i
    ]
  );
}
function lv(e, r) {
  or(() => {
    if (e && e.ref && r)
      return e.ref.current = r.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
let Lu = /* @__PURE__ */ S.createContext(null);
function Cw(e) {
  let r = _.useContext(Lu) || {};
  lv(r, e);
  let { ref: n, ...i } = r;
  return i;
}
function yd(e, r) {
  let { focusProps: n } = av(e), { keyboardProps: i } = Ru(e), l = Ne(n, i), c = Cw(r), u = e.isDisabled ? {} : c, d = _.useRef(e.autoFocus);
  _.useEffect(() => {
    d.current && r.current && Fl(r.current), d.current = !1;
  }, [
    r
  ]);
  let h = e.excludeFromTabOrder ? -1 : 0;
  return e.isDisabled && (h = void 0), {
    focusableProps: Ne({
      ...l,
      tabIndex: h
    }, u)
  };
}
typeof HTMLTemplateElement < "u" && (Object.defineProperty(HTMLTemplateElement.prototype, "firstChild", {
  configurable: !0,
  enumerable: !0,
  get: function() {
    return this.content.firstChild;
  }
}), Object.defineProperty(HTMLTemplateElement.prototype, "appendChild", {
  configurable: !0,
  enumerable: !0,
  value: function(e) {
    return this.content.appendChild(e);
  }
}), Object.defineProperty(HTMLTemplateElement.prototype, "removeChild", {
  configurable: !0,
  enumerable: !0,
  value: function(e) {
    return this.content.removeChild(e);
  }
}), Object.defineProperty(HTMLTemplateElement.prototype, "insertBefore", {
  configurable: !0,
  enumerable: !0,
  value: function(e, r) {
    return this.content.insertBefore(e, r);
  }
}));
const Mu = /* @__PURE__ */ _.createContext(!1);
function _w(e) {
  if (_.useContext(Mu))
    return /* @__PURE__ */ S.createElement(S.Fragment, null, e.children);
  let n = /* @__PURE__ */ S.createElement(Mu.Provider, {
    value: !0
  }, e.children);
  return /* @__PURE__ */ S.createElement("template", null, n);
}
function Ew(e) {
  let r = (n, i) => _.useContext(Mu) ? null : e(n, i);
  return r.displayName = e.displayName || e.name, _.forwardRef(r);
}
var Hl = Lg(), ou = { exports: {} }, iu = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tm;
function $w() {
  if (tm) return iu;
  tm = 1;
  var e = Ml();
  function r(v, g) {
    return v === g && (v !== 0 || 1 / v === 1 / g) || v !== v && g !== g;
  }
  var n = typeof Object.is == "function" ? Object.is : r, i = e.useState, l = e.useEffect, c = e.useLayoutEffect, u = e.useDebugValue;
  function d(v, g) {
    var w = g(), k = i({ inst: { value: w, getSnapshot: g } }), y = k[0].inst, C = k[1];
    return c(
      function() {
        y.value = w, y.getSnapshot = g, h(y) && C({ inst: y });
      },
      [v, w, g]
    ), l(
      function() {
        return h(y) && C({ inst: y }), v(function() {
          h(y) && C({ inst: y });
        });
      },
      [v]
    ), u(w), w;
  }
  function h(v) {
    var g = v.getSnapshot;
    v = v.value;
    try {
      var w = g();
      return !n(v, w);
    } catch {
      return !0;
    }
  }
  function p(v, g) {
    return g();
  }
  var b = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? p : d;
  return iu.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : b, iu;
}
var rm;
function Pw() {
  return rm || (rm = 1, ou.exports = $w()), ou.exports;
}
var Fw = Pw();
const sv = /* @__PURE__ */ _.createContext(!1), zo = /* @__PURE__ */ _.createContext(null);
function zw(e) {
  if (_.useContext(zo))
    return e.content;
  let { collection: n, document: i } = Iw(e.createCollection);
  return /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(_w, null, /* @__PURE__ */ S.createElement(zo.Provider, {
    value: i
  }, e.content)), /* @__PURE__ */ S.createElement(Tw, {
    render: e.children,
    collection: n
  }));
}
function Tw({ collection: e, render: r }) {
  return r(e);
}
function Nw(e, r, n) {
  let i = Ol(), l = _.useRef(i);
  l.current = i;
  let c = _.useCallback(() => l.current ? n() : r(), [
    r,
    n
  ]);
  return Fw.useSyncExternalStore(e, c);
}
const Aw = typeof S.useSyncExternalStore == "function" ? S.useSyncExternalStore : Nw;
function Iw(e) {
  let [r] = _.useState(() => new Ey(e?.() || new _y())), n = _.useCallback((u) => r.subscribe(u), [
    r
  ]), i = _.useCallback(() => {
    let u = r.getCollection();
    return r.isSSR && r.resetAfterSSR(), u;
  }, [
    r
  ]), l = _.useCallback(() => (r.isSSR = !0, r.getCollection()), [
    r
  ]);
  return {
    collection: Aw(n, i, l),
    document: r
  };
}
const ju = /* @__PURE__ */ _.createContext(null);
function Rw(e) {
  return class extends Bo {
    static {
      this.type = e;
    }
  };
}
function Lw(e, r, n, i, l, c) {
  typeof e == "string" && (e = Rw(e));
  let u = _.useCallback((h) => {
    h?.setProps(r, n, e, i, c);
  }, [
    r,
    n,
    i,
    c,
    e
  ]), d = _.useContext(ju);
  if (d) {
    let h = d.ownerDocument.nodesByProps.get(r);
    return h || (h = d.ownerDocument.createElement(e.type), h.setProps(r, n, e, i, c), d.appendChild(h), d.ownerDocument.updateCollection(), d.ownerDocument.nodesByProps.set(r, h)), l ? /* @__PURE__ */ S.createElement(ju.Provider, {
      value: h
    }, l) : null;
  }
  return /* @__PURE__ */ S.createElement(e.type, {
    ref: u
  }, l);
}
function Mw(e, r) {
  let n = ({ node: l }) => r(l.props, l.props.ref, l), i = _.forwardRef((l, c) => {
    let u = _.useContext(Lu);
    if (!_.useContext(sv)) {
      if (r.length >= 3) throw new Error(r.name + " cannot be rendered outside a collection.");
      return r(l, c);
    }
    return Lw(e, l, c, "children" in l ? l.children : null, null, (h) => (
      // Forward FocusableContext to real DOM tree so tooltips work.
      /* @__PURE__ */ S.createElement(Lu.Provider, {
        value: u
      }, /* @__PURE__ */ S.createElement(n, {
        node: h
      }))
    ));
  });
  return i.displayName = r.name, i;
}
function jw(e) {
  return Kg({
    ...e,
    addIdAndValue: !0
  });
}
const nm = /* @__PURE__ */ _.createContext(null);
function Dw(e) {
  let r = _.useContext(nm), n = (r?.dependencies || []).concat(e.dependencies), i = e.idScope ?? r?.idScope, l = jw({
    ...e,
    idScope: i,
    dependencies: n
  });
  return _.useContext(zo) && (l = /* @__PURE__ */ S.createElement(Kw, null, l)), r = _.useMemo(
    () => ({
      dependencies: (
        // oxlint-disable-next-line react-hooks/exhaustive-deps
        n
      ),
      idScope: i
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // oxlint-disable-next-line react/react-compiler, react-hooks/exhaustive-deps
    [
      i,
      ...n
    ]
  ), /* @__PURE__ */ S.createElement(nm.Provider, {
    value: r
  }, l);
}
function Kw({ children: e }) {
  let r = _.useContext(zo), n = _.useMemo(() => /* @__PURE__ */ S.createElement(zo.Provider, {
    value: null
  }, /* @__PURE__ */ S.createElement(sv.Provider, {
    value: !0
  }, e)), [
    e
  ]);
  return Ol() ? /* @__PURE__ */ S.createElement(ju.Provider, {
    value: r
  }, n) : /* @__PURE__ */ Hl.createPortal(n, r);
}
const Ow = "react-aria-clear-focus", Vw = "react-aria-focus";
function cv(e) {
  let r = Hw(Ye(e));
  r !== e && (r && Bw(r, e), e && uv(e, r));
}
function Bw(e, r) {
  e.dispatchEvent(new FocusEvent("blur", {
    relatedTarget: r
  })), e.dispatchEvent(new FocusEvent("focusout", {
    bubbles: !0,
    relatedTarget: r
  }));
}
function uv(e, r) {
  e.dispatchEvent(new FocusEvent("focus", {
    relatedTarget: r
  })), e.dispatchEvent(new FocusEvent("focusin", {
    bubbles: !0,
    relatedTarget: r
  }));
}
function Hw(e) {
  let r = Dt(e), n = r?.getAttribute("aria-activedescendant");
  return n && e.getElementById(n) || r;
}
function bo(e) {
  return ir() ? e.metaKey : e.ctrlKey;
}
const Uw = S.useInsertionEffect ?? or;
function gl(e) {
  const r = _.useRef(null);
  return Uw(() => {
    r.current = e;
  }, [
    e
  ]), _.useCallback((...n) => {
    const i = r.current;
    return i?.(...n);
  }, []);
}
function cl(e, r, n, i) {
  let l = gl(n), c = n == null;
  _.useEffect(() => {
    if (!(c || e.current == null))
      return Ay(e.current, r, l, i);
  }, [
    e,
    r,
    i,
    c
  ]);
}
function dv(e, r) {
  let { id: n, "aria-label": i, "aria-labelledby": l } = e;
  return n = Vl(n), l && i ? l = [
    .../* @__PURE__ */ new Set([
      n,
      ...l.trim().split(/\s+/)
    ])
  ].join(" ") : l && (l = l.trim().split(/\s+/).join(" ")), !i && !l && r && (i = r), {
    id: n,
    "aria-label": i,
    "aria-labelledby": l
  };
}
const Ww = /* @__PURE__ */ new Set([
  "Arab",
  "Syrc",
  "Samr",
  "Mand",
  "Thaa",
  "Mend",
  "Nkoo",
  "Adlm",
  "Rohg",
  "Hebr"
]), Gw = /* @__PURE__ */ new Set([
  "ae",
  "ar",
  "arc",
  "bcc",
  "bqi",
  "ckb",
  "dv",
  "fa",
  "glk",
  "he",
  "ku",
  "mzn",
  "nqo",
  "pnb",
  "ps",
  "sd",
  "ug",
  "ur",
  "yi"
]);
function Yw(e) {
  if (Intl.Locale) {
    let n = new Intl.Locale(e).maximize(), i = (
      // @ts-ignore - this was implemented as a property by some browsers before it was standardized as a function.
      typeof n.getTextInfo == "function" ? n.getTextInfo() : n.textInfo
    );
    if (i) return i.direction === "rtl";
    if (n.script) return Ww.has(n.script);
  }
  let r = e.split("-")[0];
  return Gw.has(r);
}
const fv = Symbol.for("react-aria.i18n.locale");
function pv() {
  let e = typeof window < "u" && window[fv] || // @ts-ignore
  typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([
      e
    ]);
  } catch {
    e = "en-US";
  }
  return {
    locale: e,
    direction: Yw(e) ? "rtl" : "ltr"
  };
}
let Du = pv(), yo = /* @__PURE__ */ new Set();
function am() {
  Du = pv();
  for (let e of yo) e(Du);
}
function qw() {
  let e = Ol(), [r, n] = _.useState(Du);
  return _.useEffect(() => (yo.size === 0 && window.addEventListener("languagechange", am), yo.add(n), () => {
    yo.delete(n), yo.size === 0 && window.removeEventListener("languagechange", am);
  }), []), e ? {
    locale: typeof window < "u" && window[fv] || "en-US",
    direction: "ltr"
  } : r;
}
const Qw = /* @__PURE__ */ S.createContext(null);
function hv() {
  let e = qw();
  return _.useContext(Qw) || e;
}
const Xw = /* @__PURE__ */ new Set([
  "id"
]), Zw = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), Jw = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), ex = /* @__PURE__ */ new Set([
  "dir",
  "lang",
  "hidden",
  "inert",
  "translate"
]), om = /* @__PURE__ */ new Set([
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
]), tx = /^(data-.*)$/;
function Tn(e, r = {}) {
  let { labelable: n, isLink: i, global: l, events: c = l, propNames: u } = r, d = {};
  for (const h in e) Object.prototype.hasOwnProperty.call(e, h) && (Xw.has(h) || n && Zw.has(h) || i && Jw.has(h) || l && ex.has(h) || c && (om.has(h) || h.endsWith("Capture") && om.has(h.slice(0, -7))) || u?.has(h) || tx.test(h)) && (d[h] = e[h]);
  return d;
}
let sa = "default", Ku = "", vl = /* @__PURE__ */ new WeakMap();
function rx(e) {
  if (Ho() && Po()) {
    if (sa === "default") {
      const r = Ye(e);
      Ku = r.documentElement.style.webkitUserSelect, r.documentElement.style.webkitUserSelect = "none";
    }
    sa = "disabled";
  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
    let r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    vl.set(e, e.style[r]), e.style[r] = "none";
  }
}
function im(e) {
  if (Ho() && Po()) {
    if (sa !== "disabled") return;
    sa = "restoring", setTimeout(() => {
      rv(() => {
        if (sa === "restoring") {
          const r = Ye(e);
          r.documentElement.style.webkitUserSelect === "none" && (r.documentElement.style.webkitUserSelect = Ku || ""), Ku = "", sa = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && vl.has(e)) {
    let r = vl.get(e), n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    e.style[n] === "none" && (e.style[n] = r), e.getAttribute("style") === "" && e.removeAttribute("style"), vl.delete(e);
  }
}
function nx(e, r) {
  let n = St(r), i = Ye(r);
  if (i == null || n == null) return;
  let l, c = `meta[name="${CSS.escape(e)}"], meta[property="${CSS.escape(e)}"]`, u = i.querySelector(c);
  return u && u instanceof n.HTMLMetaElement && (e === "csp-nonce" && u.nonce && (l ??= u.nonce || void 0), u.content && (l ??= u.content || void 0)), e === "csp-nonce" && (l ??= n.__webpack_nonce__ || globalThis.__webpack_nonce__ || void 0), l;
}
let lm = /* @__PURE__ */ new WeakMap();
function ax(e) {
  let r = Ye(e), n = lm.get(r);
  return n ??= nx("csp-nonce", r), n !== void 0 && lm.set(r, n), n;
}
const mv = S.createContext({
  register: () => {
  }
});
mv.displayName = "PressResponderContext";
function Ul() {
  let e = _.useRef(/* @__PURE__ */ new Map()), r = _.useCallback((l, c, u, d) => {
    let h = d?.once ? (...p) => {
      e.current.delete(u), u(...p);
    } : u;
    e.current.set(u, {
      type: c,
      eventTarget: l,
      fn: h,
      options: d
    }), l.addEventListener(c, h, d);
  }, []), n = _.useCallback((l, c, u, d) => {
    let h = e.current.get(u)?.fn || u;
    l.removeEventListener(c, h, d), e.current.delete(u);
  }, []), i = _.useCallback(() => {
    e.current.forEach((l, c) => {
      n(l.eventTarget, l.type, c, l.options);
    });
  }, [
    n
  ]);
  return _.useEffect(() => i, [
    i
  ]), {
    addGlobalListener: r,
    removeGlobalListener: n,
    removeAllGlobalListeners: i
  };
}
function ox(e) {
  let r = _.useContext(mv);
  if (r) {
    let { register: n, ref: i, ...l } = r;
    e = Ne(l, e), n();
  }
  return lv(r, e.ref), e;
}
class ul {
  #e;
  constructor(r, n, i, l) {
    this.#e = !0;
    const u = (l?.target ?? i.currentTarget)?.getBoundingClientRect();
    let d, h = 0, p, b = null;
    i.clientX != null && i.clientY != null && (p = i.clientX, b = i.clientY), u && (p != null && b != null ? (d = p - u.left, h = b - u.top) : (d = u.width / 2, h = u.height / 2)), this.type = r, this.pointerType = n, this.target = i.currentTarget, this.shiftKey = i.shiftKey, this.metaKey = i.metaKey, this.ctrlKey = i.ctrlKey, this.altKey = i.altKey, this.x = d, this.y = h, this.key = i.key;
  }
  continuePropagation() {
    this.#e = !1;
  }
  get shouldStopPropagation() {
    return this.#e;
  }
}
const sm = Symbol("linkClicked"), cm = "react-aria-pressable-style", um = "data-react-aria-pressable";
function ya(e) {
  let { onPress: r, onPressChange: n, onPressStart: i, onPressEnd: l, onPressUp: c, onClick: u, isDisabled: d, isPressed: h, preventFocusOnPress: p, shouldCancelOnPointerExit: b, allowTextSelectionOnPress: v, ref: g, ...w } = ox(e), [k, y] = _.useState(!1), C = _.useRef({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: I, removeAllGlobalListeners: F } = Ul(), D = _.useCallback((z, Y) => {
    let K = C.current;
    if (d || K.didFirePressStart) return !1;
    let R = !0;
    if (K.isTriggeringEvent = !0, i) {
      let L = new ul("pressstart", Y, z);
      i(L), R = L.shouldStopPropagation;
    }
    return n && n(!0), K.isTriggeringEvent = !1, K.didFirePressStart = !0, y(!0), R;
  }, [
    d,
    i,
    n
  ]), W = _.useCallback((z, Y, K = !0) => {
    let R = C.current;
    if (!R.didFirePressStart) return !1;
    R.didFirePressStart = !1, R.isTriggeringEvent = !0;
    let L = !0;
    if (l) {
      let N = new ul("pressend", Y, z);
      l(N), L = N.shouldStopPropagation;
    }
    if (n && n(!1), y(!1), r && K && !d) {
      let N = new ul("press", Y, z);
      r(N), L &&= N.shouldStopPropagation;
    }
    return R.isTriggeringEvent = !1, L;
  }, [
    d,
    l,
    n,
    r
  ]), re = gl(W), ee = _.useCallback((z, Y) => {
    let K = C.current;
    if (d) return !1;
    if (c) {
      K.isTriggeringEvent = !0;
      let R = new ul("pressup", Y, z);
      return c(R), K.isTriggeringEvent = !1, R.shouldStopPropagation;
    }
    return !0;
  }, [
    d,
    c
  ]), ne = gl(ee), ue = _.useCallback((z) => {
    let Y = C.current;
    if (Y.isPressed && Y.target) {
      Y.didFirePressStart && Y.pointerType != null && W(Cn(Y.target, z), Y.pointerType, !1), Y.isPressed = !1, Y.isOverTarget = !1, Y.activePointerId = null, Y.pointerType = null, F(), v || im(Y.target);
      for (let K of Y.disposables) K();
      Y.disposables = [];
    }
  }, [
    v,
    F,
    W
  ]), ie = gl(ue);
  _.useEffect(() => {
    d && C.current.isPressed && ie({
      currentTarget: C.current.target,
      shiftKey: !1,
      ctrlKey: !1,
      metaKey: !1,
      altKey: !1
    });
  }, [
    d
  ]);
  let ve = _.useCallback((z) => {
    b && ue(z);
  }, [
    b,
    ue
  ]), se = _.useCallback((z) => {
    d || u?.(z);
  }, [
    d,
    u
  ]), j = _.useCallback((z, Y) => {
    if (!d && u) {
      let K = new MouseEvent("click", z);
      Ug(K, Y), u(md(K));
    }
  }, [
    d,
    u
  ]), q = _.useMemo(() => {
    let z = C.current, Y = {
      onKeyDown(R) {
        if (lu(R.nativeEvent, R.currentTarget) && Me(R.currentTarget, Ee(R))) {
          dm(Ee(R), R.key) && R.preventDefault();
          let L = !0;
          !z.isPressed && !R.repeat && (z.target = R.currentTarget, z.isPressed = !0, z.pointerType = "keyboard", L = D(R, "keyboard"));
          let N = R.currentTarget, U = (P) => {
            lu(P, N) && !P.repeat && Me(N, Ee(P)) && z.target && ne(Cn(z.target, P), "keyboard");
          };
          I(Ye(R.currentTarget), "keyup", Fo(U, K), !0), L && R.stopPropagation(), R.metaKey && ir() && z.metaKeyEvents?.set(R.key, R.nativeEvent);
        } else R.key === "Meta" && (z.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(R) {
        if (!(R && !Me(R.currentTarget, Ee(R))) && R && R.button === 0 && !z.isTriggeringEvent && !Ar.isOpening) {
          let L = !0;
          if (d && R.preventDefault(), !z.ignoreEmulatedMouseEvents && !z.isPressed && (z.pointerType === "virtual" || Yg(R.nativeEvent))) {
            let N = D(R, "virtual"), U = ne(R, "virtual"), P = re(R, "virtual");
            se(R), L = N && U && P;
          } else if (z.isPressed && z.pointerType !== "keyboard") {
            let N = z.pointerType || R.nativeEvent.pointerType || "virtual", U = ne(Cn(R.currentTarget, R), N), P = re(Cn(R.currentTarget, R), N, !0);
            L = U && P, z.isOverTarget = !1, se(R), ie(R);
          }
          z.ignoreEmulatedMouseEvents = !1, L && R.stopPropagation();
        }
      }
    }, K = (R) => {
      if (z.isPressed && z.target && lu(R, z.target)) {
        dm(Ee(R), R.key) && R.preventDefault();
        let L = Ee(R), N = Me(z.target, L);
        re(Cn(z.target, R), "keyboard", N), N && j(R, z.target), F(), R.key !== "Enter" && wd(z.target) && Me(z.target, L) && !R[sm] && (R[sm] = !0, Ar(z.target, R, !1)), z.isPressed = !1, z.metaKeyEvents?.delete(R.key);
      } else if (R.key === "Meta" && z.metaKeyEvents?.size) {
        let L = z.metaKeyEvents;
        z.metaKeyEvents = void 0;
        for (let N of L.values()) z.target?.dispatchEvent(new KeyboardEvent("keyup", N));
      }
    };
    if (typeof PointerEvent < "u") {
      Y.onPointerDown = (N) => {
        if (N.button !== 0 || !Me(N.currentTarget, Ee(N))) return;
        if (Uy(N.nativeEvent)) {
          z.pointerType = "virtual";
          return;
        }
        z.pointerType = N.pointerType;
        let U = !0;
        if (!z.isPressed) {
          z.isPressed = !0, z.isOverTarget = !0, z.activePointerId = N.pointerId, z.target = N.currentTarget, v || rx(z.target), U = D(N, z.pointerType);
          let P = Ee(N);
          "releasePointerCapture" in P && ("hasPointerCapture" in P ? P.hasPointerCapture(N.pointerId) && P.releasePointerCapture(N.pointerId) : P.releasePointerCapture(N.pointerId)), I(Ye(N.currentTarget), "pointerup", R, !1), I(Ye(N.currentTarget), "pointercancel", L, !1);
        }
        U && N.stopPropagation();
      }, Y.onMouseDown = (N) => {
        if (Me(N.currentTarget, Ee(N)) && N.button === 0) {
          if (p) {
            let U = Ky(N.target);
            U && z.disposables.push(U);
          }
          N.stopPropagation();
        }
      }, Y.onPointerUp = (N) => {
        !Me(N.currentTarget, Ee(N)) || z.pointerType === "virtual" || N.button === 0 && !z.isPressed && ne(N, z.pointerType || N.pointerType);
      }, Y.onPointerEnter = (N) => {
        N.pointerId === z.activePointerId && z.target && !z.isOverTarget && z.pointerType != null && (z.isOverTarget = !0, D(Cn(z.target, N), z.pointerType));
      }, Y.onPointerLeave = (N) => {
        N.pointerId === z.activePointerId && z.target && z.isOverTarget && z.pointerType != null && (z.isOverTarget = !1, re(Cn(z.target, N), z.pointerType, !1), ve(N));
      };
      let R = (N) => {
        if (N.pointerId === z.activePointerId && z.isPressed && N.button === 0 && z.target) {
          if (Me(z.target, Ee(N)) && z.pointerType != null) {
            let U = !1, P = setTimeout(() => {
              z.isPressed && z.target instanceof HTMLElement && (U ? ie(N) : (Nr(z.target), z.target.click()));
            }, 80);
            I(N.currentTarget, "click", () => U = !0, !0), z.disposables.push(() => clearTimeout(P));
          } else ie(N);
          z.isOverTarget = !1;
        }
      }, L = (N) => {
        ie(N);
      };
      Y.onDragStart = (N) => {
        Me(N.currentTarget, Ee(N)) && ie(N);
      };
    }
    return Y;
  }, [
    I,
    d,
    p,
    F,
    v,
    ve,
    D,
    se,
    j
  ]);
  return _.useEffect(() => {
    if (!g) return;
    const z = Ye(g.current);
    if (!z || !z.head || z.getElementById(cm)) return;
    const Y = z.createElement("style");
    Y.id = cm;
    let K = ax(z);
    K && (Y.nonce = K), Y.textContent = `
@layer {
  [${um}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), z.head.prepend(Y);
  }, [
    g
  ]), _.useEffect(() => {
    let z = C.current;
    return () => {
      v || im(z.target ?? void 0);
      for (let Y of z.disposables) Y();
      z.disposables = [];
    };
  }, [
    v
  ]), {
    isPressed: h || k,
    // oxlint-disable-next-line react/react-compiler
    pressProps: Ne(w, q, {
      [um]: !0
    })
  };
}
function wd(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function lu(e, r) {
  const { key: n, code: i } = e, l = r, c = l.getAttribute("role");
  return (n === "Enter" || n === " " || n === "Spacebar" || i === "Space") && !(l instanceof St(l).HTMLInputElement && !gv(l, n) || l instanceof St(l).HTMLTextAreaElement || l.isContentEditable) && // Links should only trigger with Enter key
  !((c === "link" || !c && wd(l)) && n !== "Enter");
}
function Cn(e, r) {
  let n = r.clientX, i = r.clientY;
  return {
    currentTarget: e,
    shiftKey: r.shiftKey,
    ctrlKey: r.ctrlKey,
    metaKey: r.metaKey,
    altKey: r.altKey,
    clientX: n,
    clientY: i,
    key: r.key
  };
}
function ix(e) {
  return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !wd(e);
}
function dm(e, r) {
  return ir() && r === "Enter" ? !1 : e instanceof HTMLInputElement ? r === "Enter" && (e.type === "checkbox" || e.type === "radio") ? !1 : !gv(e, r) : ix(e);
}
const lx = /* @__PURE__ */ new Set([
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
function gv(e, r) {
  return e.type === "checkbox" || e.type === "radio" ? r === " " : lx.has(e.type);
}
function vv(e, r) {
  let { elementType: n = "a", onPress: i, onPressStart: l, onPressEnd: c, onPressChange: u, onClick: d, isDisabled: h, ...p } = e, b = {};
  n !== "a" && (b = {
    role: "link",
    tabIndex: h ? void 0 : 0
  });
  let { focusableProps: v } = yd(e, r), { pressProps: g, isPressed: w } = ya({
    onPress: i,
    onPressStart: l,
    onPressEnd: c,
    onPressChange: u,
    onClick: d,
    isDisabled: h,
    ref: r
  }), k = Tn(p, {
    labelable: !0
  }), y = Ne(v, g), C = Kl(), I = qg(e);
  return {
    isPressed: w,
    linkProps: Ne(k, I, {
      ...y,
      ...b,
      "aria-disabled": h || void 0,
      "aria-current": e["aria-current"],
      onClick: (F) => {
        g.onClick?.(F), Qy(F, C, e.href, e.routerOptions);
      }
    })
  };
}
function wa(e, r) {
  let { elementType: n = "button", isDisabled: i, onPress: l, onPressStart: c, onPressEnd: u, onPressUp: d, onPressChange: h, preventFocusOnPress: p, allowFocusWhenDisabled: b, onClick: v, href: g, target: w, rel: k, type: y = "button" } = e, C;
  n === "button" ? C = {
    type: y,
    disabled: i,
    form: e.form,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formMethod: e.formMethod,
    formNoValidate: e.formNoValidate,
    formTarget: e.formTarget,
    name: e.name,
    value: e.value
  } : C = {
    role: "button",
    href: n === "a" && !i ? g : void 0,
    target: n === "a" ? w : void 0,
    type: n === "input" ? y : void 0,
    disabled: n === "input" ? i : void 0,
    "aria-disabled": !i || n === "input" ? void 0 : i,
    rel: n === "a" ? k : void 0
  };
  let { pressProps: I, isPressed: F } = ya({
    onPressStart: c,
    onPressEnd: u,
    onPressChange: h,
    onPress: l,
    onPressUp: d,
    onClick: v,
    isDisabled: i,
    preventFocusOnPress: p,
    ref: r
  }), { focusableProps: D } = yd(e, r);
  b && (D.tabIndex = i ? -1 : D.tabIndex);
  let W = Ne(D, I, Tn(e, {
    labelable: !0
  }));
  return {
    isPressed: F,
    buttonProps: Ne(C, W, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      "aria-current": e["aria-current"],
      "aria-disabled": e["aria-disabled"]
    })
  };
}
class sx {
  constructor(r, n, i, l) {
    this._walkerStack = [], this._currentSetFor = /* @__PURE__ */ new Set(), this._acceptNode = (u) => {
      if (u.nodeType === Node.ELEMENT_NODE) {
        const d = u.shadowRoot;
        if (d) {
          const h = this._doc.createTreeWalker(d, this.whatToShow, {
            acceptNode: this._acceptNode
          });
          return this._walkerStack.unshift(h), NodeFilter.FILTER_ACCEPT;
        } else {
          if (typeof this.filter == "function") return this.filter(u);
          if (this.filter?.acceptNode) return this.filter.acceptNode(u);
          if (this.filter === null) return NodeFilter.FILTER_ACCEPT;
        }
      }
      return NodeFilter.FILTER_SKIP;
    }, this._doc = r, this.root = n, this.filter = l ?? null, this.whatToShow = i ?? NodeFilter.SHOW_ALL, this._currentNode = n, this._walkerStack.unshift(r.createTreeWalker(n, i, this._acceptNode));
    const c = n.shadowRoot;
    if (c) {
      const u = this._doc.createTreeWalker(c, this.whatToShow, {
        acceptNode: this._acceptNode
      });
      this._walkerStack.unshift(u);
    }
  }
  get currentNode() {
    return this._currentNode;
  }
  set currentNode(r) {
    if (!Me(this.root, r)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
    const n = [];
    let i = r, l = r;
    for (this._currentNode = r; i && i !== this.root; ) if (i.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      const u = i, d = this._doc.createTreeWalker(u, this.whatToShow, {
        acceptNode: this._acceptNode
      });
      n.push(d), d.currentNode = l, this._currentSetFor.add(d), i = l = u.host;
    } else i = i.parentNode;
    const c = this._doc.createTreeWalker(this.root, this.whatToShow, {
      acceptNode: this._acceptNode
    });
    n.push(c), c.currentNode = l, this._currentSetFor.add(c), this._walkerStack = n;
  }
  get doc() {
    return this._doc;
  }
  firstChild() {
    let r = this.currentNode, n = this.nextNode();
    return Me(r, n) ? (n && (this.currentNode = n), n) : (this.currentNode = r, null);
  }
  lastChild() {
    let n = this._walkerStack[0].lastChild();
    return n && (this.currentNode = n), n;
  }
  nextNode() {
    const r = this._walkerStack[0].nextNode();
    if (r) {
      if (r.shadowRoot) {
        let i;
        if (typeof this.filter == "function" ? i = this.filter(r) : this.filter?.acceptNode && (i = this.filter.acceptNode(r)), i === NodeFilter.FILTER_ACCEPT)
          return this.currentNode = r, r;
        let l = this.nextNode();
        return l && (this.currentNode = l), l;
      }
      return r && (this.currentNode = r), r;
    } else if (this._walkerStack.length > 1) {
      this._walkerStack.shift();
      let n = this.nextNode();
      return n && (this.currentNode = n), n;
    } else return null;
  }
  previousNode() {
    const r = this._walkerStack[0];
    if (r.currentNode === r.root) {
      if (this._currentSetFor.has(r))
        if (this._currentSetFor.delete(r), this._walkerStack.length > 1) {
          this._walkerStack.shift();
          let i = this.previousNode();
          return i && (this.currentNode = i), i;
        } else return null;
      return null;
    }
    const n = r.previousNode();
    if (n) {
      if (n.shadowRoot) {
        let l;
        if (typeof this.filter == "function" ? l = this.filter(n) : this.filter?.acceptNode && (l = this.filter.acceptNode(n)), l === NodeFilter.FILTER_ACCEPT)
          return n && (this.currentNode = n), n;
        let c = this.lastChild();
        return c && (this.currentNode = c), c;
      }
      return n && (this.currentNode = n), n;
    } else if (this._walkerStack.length > 1) {
      this._walkerStack.shift();
      let i = this.previousNode();
      return i && (this.currentNode = i), i;
    } else return null;
  }
  /**
  * @deprecated
  */
  nextSibling() {
    return null;
  }
  /**
  * @deprecated
  */
  previousSibling() {
    return null;
  }
  /**
  * @deprecated
  */
  parentNode() {
    return null;
  }
}
function cx(e, r, n, i) {
  return jl() ? new sx(e, r, n, i) : e.createTreeWalker(r, n, i);
}
function ux(e) {
  if (!e.form)
    return Array.from(Ye(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)).filter((i) => !i.form);
  const r = e.form.elements.namedItem(e.name);
  let n = St(e);
  return r instanceof n.RadioNodeList ? Array.from(r).filter((i) => i instanceof n.HTMLInputElement) : r instanceof n.HTMLInputElement ? [
    r
  ] : [];
}
function dx(e) {
  if (e.checked) return !0;
  const r = ux(e);
  return r.length > 0 && !r.some((n) => n.checked);
}
function bv(e, r) {
  return !e || !r ? !1 : r.some((n) => Me(n, e));
}
function yv(e, r, n) {
  let i = r?.tabbable ? hd : Bg, l = e?.nodeType === Node.ELEMENT_NODE ? e : null, c = Ye(l), u = cx(c, e || c, NodeFilter.SHOW_ELEMENT, {
    acceptNode(d) {
      return Me(r?.from, d) || r?.tabbable && d.tagName === "INPUT" && d.getAttribute("type") === "radio" && (!dx(d) || u.currentNode.tagName === "INPUT" && u.currentNode.type === "radio" && u.currentNode.name === d.name) ? NodeFilter.FILTER_REJECT : i(d) && (!n || bv(d, n)) && (!r?.accept || r.accept(d)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  return r?.from && (u.currentNode = r.from), u;
}
class xd {
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map(), this.root = new fm({
      scopeRef: null
    }), this.fastMap.set(null, this.root);
  }
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(r) {
    return this.fastMap.get(r);
  }
  addTreeNode(r, n, i) {
    let l = this.fastMap.get(n ?? null);
    if (!l) return;
    let c = new fm({
      scopeRef: r
    });
    l.addChild(c), c.parent = l, this.fastMap.set(r, c), i && (c.nodeToRestore = i);
  }
  addNode(r) {
    this.fastMap.set(r.scopeRef, r);
  }
  removeTreeNode(r) {
    if (r === null) return;
    let n = this.fastMap.get(r);
    if (!n) return;
    let i = n.parent;
    for (let c of this.traverse()) c !== n && n.nodeToRestore && c.nodeToRestore && n.scopeRef && n.scopeRef.current && bv(c.nodeToRestore, n.scopeRef.current) && (c.nodeToRestore = n.nodeToRestore);
    let l = n.children;
    i && (i.removeChild(n), l.size > 0 && l.forEach((c) => i && i.addChild(c))), this.fastMap.delete(n.scopeRef);
  }
  // Pre Order Depth First
  *traverse(r = this.root) {
    if (r.scopeRef != null && (yield r), r.children.size > 0) for (let n of r.children) yield* this.traverse(n);
  }
  clone() {
    let r = new xd();
    for (let n of this.traverse()) r.addTreeNode(n.scopeRef, n.parent?.scopeRef ?? null, n.nodeToRestore);
    return r;
  }
}
class fm {
  constructor(r) {
    this.children = /* @__PURE__ */ new Set(), this.contain = !1, this.scopeRef = r.scopeRef;
  }
  addChild(r) {
    this.children.add(r), r.parent = this;
  }
  removeChild(r) {
    this.children.delete(r), r.parent = void 0;
  }
}
new xd();
function fx(e, r) {
  if (!e) return !1;
  let n = window.getComputedStyle(e), i = document.scrollingElement || document.documentElement, l = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
  return e === i && n.overflow !== "hidden" && (l = !0), l && r && (l = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), l;
}
function su(e, r) {
  let n = [], i = document.scrollingElement || document.documentElement;
  for (; e && (fx(e, r) && n.push(e), e !== i); )
    e = e.parentElement;
  return n;
}
function bl(e, r, n = {}) {
  if (e === r) return;
  let i = r.getBoundingClientRect();
  px(e, r, i, n);
}
function px(e, r, n, i = {}) {
  let { block: l = "nearest", inline: c = "nearest" } = i, u = e.scrollTop, d = e.scrollLeft, h = e.getBoundingClientRect(), p = window.getComputedStyle(r), b = window.getComputedStyle(e), v = document.scrollingElement || document.documentElement, g = e === v, w = e === v ? 0 : h.top, k = e === v ? e.clientHeight : h.bottom, y = e === v ? 0 : h.left, C = e === v ? e.clientWidth : h.right, I = parseFloat(p.scrollMarginTop) || 0, F = parseFloat(p.scrollMarginBottom) || 0, D = parseFloat(p.scrollMarginLeft) || 0, W = parseFloat(p.scrollMarginRight) || 0, re = parseFloat(b.scrollPaddingTop) || 0, ee = parseFloat(b.scrollPaddingBottom) || 0, ne = parseFloat(b.scrollPaddingLeft) || 0, ue = parseFloat(b.scrollPaddingRight) || 0, ie = parseFloat(b.borderTopWidth) || 0, ve = parseFloat(b.borderBottomWidth) || 0, se = parseFloat(b.borderLeftWidth) || 0, j = parseFloat(b.borderRightWidth) || 0, q = n.top - I, z = n.bottom + F, Y = n.left - D, K = n.right + W, R = e === v ? 0 : se + j, L = e === v ? 0 : ie + ve, N = e === v ? 0 : e.offsetWidth - e.clientWidth - R, U = e === v ? 0 : e.offsetHeight - e.clientHeight - L, P = w + (g ? 0 : ie) + re, B = k - (g ? 0 : ve) - ee - U, me = y + (g ? 0 : se) + ne, pe = C - (g ? 0 : j) - ue;
  Ho() && Po() || b.direction === "ltr" ? pe -= N : b.direction === "rtl" && (me += N);
  let G = q < P || z > B, ce = Y < me || K > pe;
  if (G && l === "start") u += q - P;
  else if (G && l === "center") u += (q + z) / 2 - (P + B) / 2;
  else if (G && l === "end") u += z - B;
  else if (G && l === "nearest") {
    let ke = q - P, $e = z - B;
    u += Math.abs(ke) <= Math.abs($e) ? ke : $e;
  }
  if (ce && c === "start") d += Y - me;
  else if (ce && c === "center") d += (Y + K) / 2 - (me + pe) / 2;
  else if (ce && c === "end") d += K - pe;
  else if (ce && c === "nearest") {
    let ke = Y - me, $e = K - pe;
    d += Math.abs(ke) <= Math.abs($e) ? ke : $e;
  }
  e.scrollTo({
    left: d,
    top: u
  });
}
function pm(e, r = {}) {
  let { containingElement: n } = r;
  if (e && e.isConnected) {
    let i = document.scrollingElement || document.documentElement;
    if (window.getComputedStyle(i).overflow === "hidden") {
      let { left: c, top: u } = e.getBoundingClientRect(), d = su(e, !0);
      for (let b of d) bl(b, e);
      let { left: h, top: p } = e.getBoundingClientRect();
      if (Math.abs(c - h) > 1 || Math.abs(u - p) > 1) {
        d = n ? su(n, !0) : [];
        for (let b of d) bl(b, n, {
          block: "center",
          inline: "center"
        });
        for (let b of su(e, !0)) bl(b, e);
      }
    } else {
      let { left: c, top: u } = e.getBoundingClientRect();
      e?.scrollIntoView?.({
        block: "nearest"
      });
      let { left: d, top: h } = e.getBoundingClientRect();
      (Math.abs(c - d) > 1 || Math.abs(u - h) > 1) && (n?.scrollIntoView?.({
        block: "center",
        inline: "center"
      }), e.scrollIntoView?.({
        block: "nearest"
      }));
    }
  }
}
let hx = 0;
const cu = /* @__PURE__ */ new Map();
function mx(e) {
  let [r, n] = _.useState();
  return or(() => {
    if (!e) return;
    let i = cu.get(e);
    if (i)
      n(i.element.id);
    else {
      let l = `react-aria-description-${hx++}`;
      n(l);
      let c = document.createElement("div");
      c.id = l, c.style.display = "none", c.textContent = e, document.body.appendChild(c), i = {
        refCount: 0,
        element: c
      }, cu.set(e, i);
    }
    return i.refCount++, () => {
      i && --i.refCount === 0 && (i.element.remove(), cu.delete(e));
    };
  }, [
    e
  ]), {
    "aria-describedby": e ? r : void 0
  };
}
function gx(e) {
  let { isDisabled: r, onBlurWithin: n, onFocusWithin: i, onFocusWithinChange: l } = e, c = _.useRef({
    isFocusWithin: !1
  }), { addGlobalListener: u, removeAllGlobalListeners: d } = Ul(), h = _.useCallback((v) => {
    Me(v.currentTarget, Ee(v)) && c.current.isFocusWithin && !Me(v.currentTarget, v.relatedTarget) && (c.current.isFocusWithin = !1, d(), n && n(v), l && l(!1));
  }, [
    n,
    l,
    c,
    d
  ]), p = Wg(h), b = _.useCallback((v) => {
    if (!Me(v.currentTarget, Ee(v))) return;
    let g = Ee(v);
    const w = Ye(g), k = Dt(w);
    if (!c.current.isFocusWithin && k === g) {
      i && i(v), l && l(!0), c.current.isFocusWithin = !0, p(v);
      let y = v.currentTarget;
      u(w, "focus", (C) => {
        let I = Ee(C);
        if (c.current.isFocusWithin && !Me(y, I)) {
          let F = new w.defaultView.FocusEvent("blur", {
            relatedTarget: I
          });
          Ug(F, y);
          let D = md(F);
          h(D);
        }
      }, {
        capture: !0
      });
    }
  }, [
    i,
    l,
    p,
    u,
    h
  ]);
  return r ? {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: b,
      onBlur: h
    }
  };
}
const vx = typeof document < "u" ? S.useInsertionEffect ?? S.useLayoutEffect : () => {
};
function wv(e, r, n) {
  let [i, l] = _.useState(e || r), c = _.useRef(i), u = _.useRef(e !== void 0), d = e !== void 0;
  _.useEffect(() => {
    u.current, u.current = d;
  }, [
    d
  ]);
  let h = d ? e : i;
  vx(() => {
    c.current = h;
  });
  let [, p] = _.useReducer(() => ({}), {}), b = _.useCallback((v, ...g) => {
    let w = typeof v == "function" ? v(c.current) : v;
    Object.is(c.current, w) || (c.current = w, l(w), p(), n?.(w, ...g));
  }, [
    n
  ]);
  return [
    h,
    b
  ];
}
function Ou(e) {
  return Vy() ? e.altKey : e.ctrlKey;
}
function uu(e, r) {
  let n = `[data-key="${CSS.escape(String(r))}"]`, i = e.current?.dataset.collection;
  return i && (n = `[data-collection="${CSS.escape(i)}"]${n}`), e.current?.querySelector(n);
}
const xv = /* @__PURE__ */ new WeakMap();
function bx(e) {
  let r = Vl();
  return xv.set(e, r), r;
}
function yx(e) {
  return xv.get(e);
}
const wx = 500;
function xx(e) {
  let { isDisabled: r, pointerType: n, onLongPressStart: i, onLongPressEnd: l, onLongPress: c, threshold: u = wx, accessibilityDescription: d } = e;
  const h = _.useRef(void 0);
  let { addGlobalListener: p, removeAllGlobalListeners: b } = Ul(), v = (k) => n ? k.pointerType === n : k.pointerType === "mouse" || k.pointerType === "touch", { pressProps: g } = ya({
    isDisabled: r,
    onPressStart(k) {
      if (k.continuePropagation(), v(k)) {
        i && i({
          ...k,
          type: "longpressstart"
        }), h.current = setTimeout(() => {
          k.target.dispatchEvent(new PointerEvent("pointercancel", {
            bubbles: !0
          })), p(k.target, "click", (C) => C.preventDefault(), {
            once: !0
          }), Ye(k.target).activeElement !== k.target && Nr(k.target), c && c({
            ...k,
            type: "longpress"
          }), h.current = void 0;
        }, u), k.pointerType === "touch" && p(k.target, "contextmenu", (C) => C.preventDefault(), {
          once: !0
        });
        let y = St(k.target);
        p(y, "pointerup", () => {
          setTimeout(() => {
            b();
          }, 100);
        }, {
          once: !0
        });
      }
    },
    onPressEnd(k) {
      h.current && clearTimeout(h.current), l && v(k) && l({
        ...k,
        type: "longpressend"
      });
    }
  }), w = mx(c && !r ? d : void 0);
  return {
    longPressProps: Ne(g, w)
  };
}
const hm = 1e3;
function kx(e) {
  let { keyboardDelegate: r, selectionManager: n, onTypeSelect: i } = e, l = _.useRef({
    search: "",
    timeout: void 0
  }), c = (d) => {
    if (l.current.search.length > 0 && d.key === " ") {
      if (d.preventDefault(), (!("continuePropagation" in d) || "continuePropagation" in d && !d.isPropagationStopped()) && d.stopPropagation(), l.current.search += " ", r.getKeyForSearch != null) {
        let h = r.getKeyForSearch(l.current.search, n.focusedKey);
        h == null && (h = r.getKeyForSearch(l.current.search)), h != null && (n.setFocusedKey(h), i && i(h));
      }
      clearTimeout(l.current.timeout), l.current.timeout = setTimeout(() => {
        l.current.search = "";
      }, hm);
    }
  }, u = (d) => {
    let h = Sx(d.key);
    if (!(!h || d.ctrlKey || d.metaKey || d.altKey || !Me(d.currentTarget, Ee(d)) || l.current.search.length === 0 && h === " ")) {
      if (l.current.search += h, r.getKeyForSearch != null) {
        let p = r.getKeyForSearch(l.current.search, n.focusedKey);
        if (p == null && (p = r.getKeyForSearch(l.current.search)), p != null)
          n.setFocusedKey(p), i && i(p), d.preventDefault(), "continuePropagation" in d || d.stopPropagation();
        else {
          l.current.search = "", clearTimeout(l.current.timeout), l.current.timeout = void 0;
          return;
        }
      }
      clearTimeout(l.current.timeout), l.current.timeout = setTimeout(() => {
        l.current.search = "";
      }, hm);
    }
  };
  return _.useEffect(() => {
    let d = l.current.timeout;
    return () => {
      clearTimeout(d);
    };
  }, [
    l
  ]), {
    typeSelectProps: {
      // Using a capturing listener to catch the keydown event before
      // other hooks in order to handle the Spacebar event.
      onKeyDownCapture: r.getKeyForSearch ? c : void 0,
      onKeyDown: r.getKeyForSearch ? u : void 0
    }
  };
}
function Sx(e) {
  return e.length === 1 || !/^[A-Z]/i.test(e) ? e : "";
}
function mm(e, r) {
  const n = _.useRef(!0), i = _.useRef(null);
  or(() => (n.current = !0, () => {
    n.current = !1;
  }), []), or(() => {
    n.current ? n.current = !1 : (!i.current || r.some((l, c) => !Object.is(l, i[c]))) && e(), i.current = r;
  }, r);
}
function Cx(e) {
  let { selectionManager: r, keyboardDelegate: n, ref: i, autoFocus: l = !1, shouldFocusWrap: c = !1, disallowEmptySelection: u = !1, disallowSelectAll: d = !1, escapeKeyBehavior: h = "clearSelection", selectOnFocus: p = r.selectionBehavior === "replace", disallowTypeAhead: b = !1, shouldUseVirtualFocus: v, allowsTabNavigation: g = !1, scrollRef: w = i, linkBehavior: k = "action", UNSTABLE_focusOnEntry: y } = e, { direction: C } = hv(), I = Kl();
  const F = (ae, oe, Xe) => {
    if (oe != null) {
      if (r.isLink(oe) && k === "selection" && p && !Ou(ae)) {
        Hl.flushSync(() => {
          r.setFocusedKey(oe, Xe);
        });
        let De = uu(i, oe), be = r.getItemProps(oe);
        if (De) {
          I.open(De, ae, be.href, be.routerOptions);
          return;
        }
        return !1;
      }
      if (r.setFocusedKey(oe, Xe), r.isLink(oe) && k === "override") return !1;
      if (ae.shiftKey && r.selectionMode === "multiple") {
        r.extendSelection(oe);
        return;
      } else if (p && !Ou(ae)) {
        r.replaceSelection(oe);
        return;
      }
    }
    return !1;
  };
  let D = (ae) => {
    if (n.getKeyBelow) {
      let oe = r.focusedKey != null ? n.getKeyBelow?.(r.focusedKey) : n.getFirstKey?.();
      if (oe == null && c && (oe = n.getFirstKey?.(r.focusedKey)), oe != null) {
        F(ae, oe);
        return;
      }
    }
    return !1;
  }, W = (ae) => {
    if (n.getKeyAbove) {
      let oe = r.focusedKey != null ? n.getKeyAbove?.(r.focusedKey) : n.getLastKey?.();
      if (oe == null && c && (oe = n.getLastKey?.(r.focusedKey)), oe != null) {
        F(ae, oe);
        return;
      }
    }
    return !1;
  }, re = (ae) => {
    if (n.getFirstKey) {
      if (r.focusedKey === null && ae.shiftKey) return !1;
      let oe = n.getFirstKey(r.focusedKey, bo(ae));
      if (r.setFocusedKey(oe), oe != null) {
        if (bo(ae) && ae.shiftKey && r.selectionMode === "multiple") {
          r.extendSelection(oe);
          return;
        } else if (p) {
          r.replaceSelection(oe);
          return;
        }
      }
    }
    return !1;
  }, ee = (ae) => {
    if (n.getKeyLeftOf) {
      let oe = r.focusedKey != null ? n.getKeyLeftOf?.(r.focusedKey) : n.getFirstKey?.();
      if (oe == null && c && (oe = C === "rtl" ? n.getFirstKey?.(r.focusedKey) : n.getLastKey?.(r.focusedKey)), oe != null) {
        F(ae, oe, C === "rtl" ? "first" : "last");
        return;
      }
    }
    return !1;
  }, ne = (ae) => {
    if (n.getKeyRightOf) {
      let oe = r.focusedKey != null ? n.getKeyRightOf?.(r.focusedKey) : n.getFirstKey?.();
      if (oe == null && c && (oe = C === "rtl" ? n.getLastKey?.(r.focusedKey) : n.getFirstKey?.(r.focusedKey)), oe != null) {
        F(ae, oe, C === "rtl" ? "last" : "first");
        return;
      }
    }
    return !1;
  }, ue = (ae) => {
    if (n.getLastKey) {
      if (r.focusedKey === null && ae.shiftKey) return !1;
      let oe = n.getLastKey(r.focusedKey, bo(ae));
      if (r.setFocusedKey(oe), oe != null) {
        if (bo(ae) && ae.shiftKey && r.selectionMode === "multiple") {
          r.extendSelection(oe);
          return;
        } else if (p) {
          r.replaceSelection(oe);
          return;
        }
      }
    }
    return !1;
  }, ie = (ae) => {
    if (n.getKeyPageBelow && r.focusedKey != null) {
      let oe = n.getKeyPageBelow(r.focusedKey);
      if (oe != null) return F(ae, oe);
    }
    return !1;
  }, ve = (ae) => {
    if (n.getKeyPageAbove && r.focusedKey != null) {
      let oe = n.getKeyPageAbove(r.focusedKey);
      if (oe != null) return F(ae, oe);
    }
    return !1;
  }, se = () => {
    if (r.selectionMode === "multiple" && d !== !0) {
      r.selectAll();
      return;
    }
    return !1;
  }, j = () => {
    if (h === "clearSelection" && !u && r.selectedKeys.size !== 0) {
      r.clearSelection();
      return;
    }
    return !1;
  }, q = () => {
    if (!g && i.current) {
      let ae = yv(i.current, {
        tabbable: !0
      }), oe, Xe;
      do
        Xe = ae.lastChild(), Xe && (oe = Xe);
      while (Xe);
      let De = Dt();
      oe && (!Zh(oe) || De && !hd(De)) && Nr(oe);
    }
    return {
      shouldContinuePropagation: !0,
      shouldPreventDefault: !1
    };
  }, z = () => (!g && i.current && i.current.focus(), {
    shouldContinuePropagation: !0,
    shouldPreventDefault: !1
  }), Y = (ae, oe) => ({
    [ir() ? ae + "+Shift+Alt" : ae + "+Shift+Control"]: oe,
    [ae + "+Shift"]: oe,
    [ir() ? ae + "+Alt" : ae + "+Control"]: oe,
    [ae]: oe
  }), { keyboardProps: K } = Ru({
    shortcuts: {
      ...Y("ArrowDown", D),
      ...Y("ArrowUp", W),
      ...Y("ArrowLeft", ee),
      ...Y("ArrowRight", ne),
      ...Y("PageDown", ie),
      ...Y("PageUp", ve)
    },
    allowRepeats: !0
  }), { keyboardProps: R } = Ru({
    shortcuts: {
      ...Y("Home", re),
      ...Y("End", ue),
      "Mod+A": se,
      Escape: j,
      Tab: q,
      "Tab+Shift": z
    }
  }), L = _.useRef({
    top: 0,
    left: 0
  });
  cl(w, "scroll", () => {
    L.current = {
      top: w.current?.scrollTop ?? 0,
      left: w.current?.scrollLeft ?? 0
    };
  });
  let N = (ae) => {
    if (r.isFocused) {
      Me(ae.currentTarget, Ee(ae)) || r.setFocused(!1);
      return;
    }
    if (!Me(ae.currentTarget, Ee(ae))) return;
    let oe = Au();
    r.setFocused(!0);
    let Xe = (De) => {
      De != null && (r.setFocusedKey(De), p && !r.isSelected(De) && r.replaceSelection(De));
    };
    if (y && (oe === "keyboard" || oe === "virtual"))
      Xe(y === "first" ? n.getFirstKey?.() : n.getLastKey?.());
    else if (r.focusedKey == null) {
      let De = ae.relatedTarget;
      De && ae.currentTarget.compareDocumentPosition(De) & Node.DOCUMENT_POSITION_FOLLOWING ? Xe(r.lastSelectedKey ?? n.getLastKey?.()) : Xe(r.firstSelectedKey ?? n.getFirstKey?.());
    } else w.current && (w.current.scrollTop = L.current.top, w.current.scrollLeft = L.current.left);
    if (r.focusedKey != null && w.current) {
      let De = uu(i, r.focusedKey);
      De instanceof HTMLElement && (!Zh(De) && !v && Nr(De), (oe === "keyboard" || y && oe === "virtual") && pm(De, {
        containingElement: i.current
      }));
    }
  }, U = (ae) => {
    Me(ae.currentTarget, ae.relatedTarget) || r.setFocused(!1);
  }, P = _.useRef(!1);
  cl(i, Vw, v ? (ae) => {
    let { detail: oe } = ae;
    ae.stopPropagation(), r.setFocused(!0), oe?.focusStrategy === "first" && (P.current = !0);
  } : void 0);
  let B = n.getFirstKey?.() ?? null;
  mm(() => {
    if (P.current)
      if (B == null) {
        let ae = Dt();
        cv(i.current), uv(ae, null), r.collection.size > 0 && (P.current = !1);
      } else
        r.setFocusedKey(B), P.current = !1;
  }, [
    B,
    r.collection.size
  ]), mm(() => {
    r.collection.size > 0 && (P.current = !1);
  }, [
    r.focusedKey
  ]), cl(i, Ow, v ? (ae) => {
    ae.stopPropagation(), r.setFocused(!1), ae.detail?.clearFocusKey && r.setFocusedKey(null);
  } : void 0);
  const me = _.useRef(l), pe = _.useRef(!1);
  _.useEffect(() => {
    if (me.current) {
      let ae = null;
      l === "first" && (ae = n.getFirstKey?.() ?? null), l === "last" && (ae = n.getLastKey?.() ?? null);
      let oe = r.selectedKeys;
      if (oe.size) {
        for (let Xe of oe) if (r.canSelectItem(Xe)) {
          ae = Xe;
          break;
        }
      }
      r.setFocused(!0), r.setFocusedKey(ae), ae != null && p && !oe.size && r.canSelectItem(ae) && r.replaceSelection(ae), ae == null && !v && i.current && Fl(i.current), r.collection.size > 0 && (me.current = !1, pe.current = !0);
    }
  });
  let G = _.useRef(r.focusedKey), ce = _.useRef(null);
  _.useEffect(() => {
    if (r.isFocused && r.focusedKey != null && (r.focusedKey !== G.current || pe.current) && w.current && i.current) {
      let ae = Au(), oe = uu(i, r.focusedKey);
      if (!(oe instanceof HTMLElement))
        return;
      (ae === "keyboard" || pe.current) && (ce.current && cancelAnimationFrame(ce.current), ce.current = requestAnimationFrame(() => {
        w.current && (bl(w.current, oe), ae !== "virtual" && pm(oe, {
          containingElement: i.current
        }));
      }));
    }
    !v && r.isFocused && r.focusedKey == null && G.current != null && i.current && Fl(i.current), G.current = r.focusedKey, pe.current = !1;
  }), _.useEffect(() => () => {
    ce.current && cancelAnimationFrame(ce.current);
  }, []), cl(i, "react-aria-focus-scope-restore", (ae) => {
    ae.preventDefault(), r.setFocused(!0);
  });
  let ke = {
    ...Ne(R, K),
    onFocus: N,
    onBlur: U,
    onMouseDown(ae) {
      w.current === Ee(ae) && ae.preventDefault();
    }
  }, { typeSelectProps: $e } = kx({
    keyboardDelegate: n,
    selectionManager: r
  });
  b || (ke = Ne($e, ke));
  let Ie;
  v || (Ie = r.focusedKey == null ? 0 : -1);
  let ot = bx(r.collection);
  return {
    // oxlint-disable-next-line react/react-compiler
    collectionProps: Ne(ke, {
      tabIndex: Ie,
      "data-collection": ot
    })
  };
}
function _x(e, r) {
  return typeof r.getChildren == "function" ? r.getChildren(e.key) : e.childNodes;
}
function Ex(e) {
  return $x(e);
}
function $x(e, r) {
  for (let n of e)
    return n;
}
function du(e, r, n) {
  if (r.parentKey === n.parentKey) return r.index - n.index;
  let i = [
    ...gm(e, r),
    r
  ], l = [
    ...gm(e, n),
    n
  ], c = i.slice(0, l.length).findIndex((u, d) => u !== l[d]);
  return c !== -1 ? (r = i[c], n = l[c], r.index - n.index) : i.findIndex((u) => u === n) >= 0 ? 1 : (l.findIndex((u) => u === r) >= 0, -1);
}
function gm(e, r) {
  let n = [], i = r;
  for (; i?.parentKey != null; )
    i = e.getItem(i.parentKey), i && n.unshift(i);
  return n;
}
function Wl(e = {}) {
  let { autoFocus: r = !1, isTextInput: n, within: i } = e, l = _.useRef({
    isFocused: !1,
    isFocusVisible: r || Nu()
  }), [c, u] = _.useState(!1), [d, h] = _.useState(
    // oxlint-disable-next-line react/react-compiler
    () => l.current.isFocused && l.current.isFocusVisible
  ), p = _.useCallback(() => h(l.current.isFocused && l.current.isFocusVisible), []), b = _.useCallback((w) => {
    l.current.isFocused = w, l.current.isFocusVisible = Nu(), u(w), p();
  }, [
    p
  ]);
  uw((w) => {
    l.current.isFocusVisible = w, p();
  }, [
    n,
    c
  ], {
    enabled: c,
    isTextInput: n
  });
  let { focusProps: v } = av({
    isDisabled: i,
    onFocusChange: b
  }), { focusWithinProps: g } = gx({
    isDisabled: !i,
    onFocusWithinChange: b
  });
  return {
    isFocused: c,
    isFocusVisible: d,
    focusProps: i ? g : v
  };
}
function Gl(e) {
  let { children: r, focusClass: n, focusRingClass: i } = e, { isFocused: l, isFocusVisible: c, focusProps: u } = Wl(e), d = S.Children.only(r);
  return /* @__PURE__ */ S.cloneElement(d, Ne(d.props, {
    ...u,
    className: bd({
      [n || ""]: l,
      [i || ""]: c
    })
  }));
}
let Vu = !1, dl = 0;
function Px() {
  Vu = !0, setTimeout(() => {
    Vu = !1;
  }, 500);
}
function vm(e) {
  e.pointerType === "touch" && Px();
}
function Fx() {
  let e = Ye(null);
  if (!(typeof e > "u"))
    return dl === 0 && typeof PointerEvent < "u" && e.addEventListener("pointerup", vm), dl++, () => {
      dl--, !(dl > 0) && typeof PointerEvent < "u" && e.removeEventListener("pointerup", vm);
    };
}
function zx(e) {
  let { onHoverStart: r, onHoverChange: n, onHoverEnd: i, isDisabled: l } = e, [c, u] = _.useState(!1), d = _.useRef({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  _.useEffect(Fx, []);
  let { addGlobalListener: h, removeAllGlobalListeners: p } = Ul(), { hoverProps: b, triggerHoverEnd: v } = _.useMemo(() => {
    let g = (y, C) => {
      if (d.pointerType = C, l || C === "touch" || d.isHovered || !Me(y.currentTarget, Ee(y))) return;
      d.isHovered = !0;
      let I = y.currentTarget;
      d.target = I, h(Ye(Ee(y)), "pointerover", (F) => {
        d.isHovered && d.target && !Me(d.target, Ee(F)) && w(F, F.pointerType);
      }, {
        capture: !0
      }), r && r({
        type: "hoverstart",
        target: I,
        pointerType: C
      }), n && n(!0), u(!0);
    }, w = (y, C) => {
      let I = d.target;
      d.pointerType = "", d.target = null, !(C === "touch" || !d.isHovered || !I) && (d.isHovered = !1, p(), i && i({
        type: "hoverend",
        target: I,
        pointerType: C
      }), n && n(!1), u(!1));
    }, k = {};
    return typeof PointerEvent < "u" && (k.onPointerEnter = (y) => {
      Vu && y.pointerType === "mouse" || g(y, y.pointerType);
    }, k.onPointerLeave = (y) => {
      !l && Me(y.currentTarget, Ee(y)) && w(y, y.pointerType);
    }), {
      hoverProps: k,
      triggerHoverEnd: w
    };
  }, [
    r,
    n,
    i,
    l,
    d,
    h,
    p
  ]);
  return _.useEffect(() => {
    l && v({
      currentTarget: d.target
    }, d.pointerType);
  }, [
    l
  ]), {
    hoverProps: b,
    isHovered: c
  };
}
function Tx(e, r) {
  let n = r?.isDisabled, [i, l] = _.useState(!1);
  return or(() => {
    if (e?.current && !n) {
      let c = () => {
        if (e.current) {
          let d = yv(e.current, {
            tabbable: !0
          });
          l(!!d.nextNode());
        }
      };
      c();
      let u = new MutationObserver(c);
      return u.observe(e.current, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeFilter: [
          "tabIndex",
          "disabled"
        ]
      }), () => {
        u.disconnect();
      };
    }
  }), n ? !1 : i;
}
function Nx(e) {
  let { id: r, selectionManager: n, key: i, ref: l, shouldSelectOnPressUp: c, shouldUseVirtualFocus: u, focus: d, isDisabled: h, onAction: p, allowsDifferentPressOrigin: b, linkBehavior: v = "action" } = e, g = Kl();
  r = Vl(r);
  let w = (G) => {
    if (G.pointerType === "keyboard" && Ou(G)) n.toggleSelection(i);
    else {
      if (n.selectionMode === "none") return;
      if (n.isLink(i)) {
        if (v === "selection" && l.current) {
          let ce = n.getItemProps(i);
          g.open(l.current, G, ce.href, ce.routerOptions), n.setSelectedKeys(n.selectedKeys);
          return;
        } else if (v === "override" || v === "none") return;
      }
      n.selectionMode === "single" ? n.isSelected(i) && !n.disallowEmptySelection ? n.toggleSelection(i) : n.replaceSelection(i) : G && G.shiftKey ? n.extendSelection(i) : n.selectionBehavior === "toggle" || G && (bo(G) || G.pointerType === "touch" || G.pointerType === "virtual") ? n.toggleSelection(i) : n.replaceSelection(i);
    }
  };
  _.useEffect(() => {
    i === n.focusedKey && n.isFocused && (u ? cv(l.current) : d ? d() : Dt() !== l.current && l.current && Fl(l.current));
  }, [
    l,
    i,
    n.focusedKey,
    n.childFocusStrategy,
    n.isFocused,
    u
  ]), h = h || n.isDisabled(i);
  let k = {};
  !u && !h ? k = {
    tabIndex: i === n.focusedKey ? 0 : -1,
    onFocus(G) {
      Ee(G) === l.current && n.setFocusedKey(i);
    }
  } : h && (k.onMouseDown = (G) => {
    G.preventDefault();
  }), _.useEffect(() => {
    h && n.focusedKey === i && n.setFocusedKey(null);
  }, [
    n,
    h,
    i
  ]);
  let y = n.isLink(i) && v === "override", C = p && e.UNSTABLE_itemBehavior === "action", I = n.isLink(i) && v !== "selection" && v !== "none", F = !h && n.canSelectItem(i) && !y && !C, D = (p || I) && !h, W = D && (n.selectionBehavior === "replace" ? !F : !F || n.isEmpty), re = D && F && n.selectionBehavior === "replace", ee = W || re, ne = _.useRef(null), ue = ee && F, ie = _.useRef(!1), ve = _.useRef(!1), se = n.getItemProps(i), j = (G) => {
    p && (p(), l.current?.dispatchEvent(new CustomEvent("react-aria-item-action", {
      bubbles: !0
    }))), I && l.current && g.open(l.current, G, se.href, se.routerOptions);
  }, q = {
    ref: l
  };
  c ? (q.onPressStart = (G) => {
    ne.current = G.pointerType, ie.current = ue, G.pointerType === "keyboard" && (!ee || ym(G.key)) && w(G);
  }, b ? (q.onPressUp = W ? void 0 : (G) => {
    G.pointerType === "mouse" && F && w(G);
  }, q.onPress = W ? j : (G) => {
    G.pointerType !== "keyboard" && G.pointerType !== "mouse" && F && w(G);
  }) : q.onPress = (G) => {
    if (W || re && G.pointerType !== "mouse") {
      if (G.pointerType === "keyboard" && !bm(G.key)) return;
      j(G);
    } else G.pointerType !== "keyboard" && F && w(G);
  }) : (q.onPressStart = (G) => {
    ne.current = G.pointerType, ie.current = ue, ve.current = W, F && (G.pointerType === "mouse" && !W || G.pointerType === "keyboard" && (!D || ym(G.key))) && w(G);
  }, q.onPress = (G) => {
    (G.pointerType === "touch" || G.pointerType === "pen" || G.pointerType === "virtual" || G.pointerType === "keyboard" && ee && bm(G.key) || G.pointerType === "mouse" && ve.current) && (ee ? j(G) : F && w(G));
  });
  let z = yx(n.collection);
  if (k["data-collection"] = z, k["data-key"] = i, q.preventFocusOnPress = u, u && (q = Ne(q, {
    onPressStart(G) {
      G.pointerType !== "touch" && (n.setFocused(!0), n.setFocusedKey(i));
    },
    onPress(G) {
      G.pointerType === "touch" && (n.setFocused(!0), n.setFocusedKey(i));
    }
  })), se)
    for (let G of [
      "onPressStart",
      "onPressEnd",
      "onPressChange",
      "onPress",
      "onPressUp",
      "onClick"
    ]) se[G] && (q[G] = Fo(q[G], se[G]));
  let { pressProps: Y, isPressed: K } = ya(q), R = re ? (G) => {
    ne.current === "mouse" && (G.stopPropagation(), G.preventDefault(), j(G));
  } : void 0, { longPressProps: L } = xx({
    isDisabled: !ue,
    onLongPress(G) {
      G.pointerType === "touch" && (w(G), n.setSelectionBehavior("toggle"));
    }
  }), N = (G) => {
    ne.current === "touch" && ie.current && G.preventDefault();
  }, U = v !== "none" && n.isLink(i) ? (G) => {
    Ar.isOpening || G.preventDefault();
  } : void 0, P = Ne(
    // oxlint-disable-next-line react/react-compiler
    k,
    F || W || u && !h ? Y : {},
    ue ? L : {},
    // oxlint-disable-next-line react/react-compiler
    {
      onDoubleClick: R,
      onDragStartCapture: N,
      onClick: U,
      id: r
    },
    // Prevent DOM focus from moving on mouse down when using virtual focus
    u ? {
      onMouseDown: (G) => G.preventDefault()
    } : void 0
  ), B = (G) => {
    let ce = G;
    for (; ce && ce !== l.current; ) {
      let ke = ce.getAttribute("data-collection");
      if (ke != null) return ke !== z;
      ce = ce.parentElement;
    }
    return hd(G);
  }, me = P.onPointerDown;
  P.onPointerDown = (G) => {
    let ce = Ee(G);
    if (ce && ce !== l.current && B(ce)) {
      G.stopPropagation();
      return;
    }
    me?.(G);
  };
  let pe = P.onMouseDown;
  return P.onMouseDown = (G) => {
    let ce = Ee(G);
    if (ce && ce !== l.current && B(ce)) {
      G.stopPropagation();
      return;
    }
    pe?.(G);
  }, {
    itemProps: P,
    isPressed: K,
    isSelected: n.isSelected(i),
    isFocused: n.isFocused && n.focusedKey === i,
    isDisabled: h,
    allowsSelection: F,
    hasAction: ee
  };
}
function bm(e) {
  return e === "Enter";
}
function ym(e) {
  return e === " ";
}
const kv = /* @__PURE__ */ new WeakMap();
function zl(e, r, n) {
  return e ? (typeof r == "string" && (r = r.replace(/\s+/g, "")), `${kv.get(e)}-${n}-${r}`) : "";
}
function Ax(e, r, n) {
  let { key: i, isDisabled: l, shouldSelectOnPressUp: c } = e, { selectionManager: u, selectedKey: d } = r, h = i === d, p = l || r.isDisabled || r.selectionManager.isDisabled(i), b = r.collection.getItem(i), { itemProps: v, isPressed: g } = Nx({
    selectionManager: u,
    key: i,
    ref: n,
    isDisabled: p,
    // Link tabs should behave like native anchors (navigate on press up)
    // This avoids reopening beforeunload dialogs when browsers replay
    // queued pointer enter/leave events after cancellation.
    shouldSelectOnPressUp: c ?? b?.props.href != null,
    linkBehavior: "selection"
  }), w = zl(r, i, "tab"), k = zl(r, i, "tabpanel"), { tabIndex: y } = v, C = Tn(b?.props, {
    labelable: !0
  });
  delete C.id;
  let I = qg(b?.props), { focusableProps: F } = yd({
    ...b?.props,
    isDisabled: p
  }, n);
  return {
    tabProps: Ne(C, F, I, v, {
      id: w,
      "aria-selected": h,
      "aria-disabled": p || void 0,
      "aria-controls": h ? k : void 0,
      tabIndex: p ? void 0 : y,
      role: "tab"
    }),
    isSelected: h,
    isDisabled: p,
    isPressed: g
  };
}
class Ix {
  constructor(r, n, i, l = /* @__PURE__ */ new Set()) {
    this.collection = r, this.flipDirection = n === "rtl", this.disabledKeys = l, this.tabDirection = i === "horizontal";
  }
  getKeyLeftOf(r) {
    return this.flipDirection ? this.getNextKey(r) : this.getPreviousKey(r);
  }
  getKeyRightOf(r) {
    return this.flipDirection ? this.getPreviousKey(r) : this.getNextKey(r);
  }
  isDisabled(r) {
    return this.disabledKeys.has(r) || !!this.collection.getItem(r)?.props?.isDisabled;
  }
  getFirstKey() {
    let r = this.collection.getFirstKey();
    return r != null && this.isDisabled(r) && (r = this.getNextKey(r)), r;
  }
  getLastKey() {
    let r = this.collection.getLastKey();
    return r != null && this.isDisabled(r) && (r = this.getPreviousKey(r)), r;
  }
  getKeyAbove(r) {
    return this.tabDirection ? null : this.getPreviousKey(r);
  }
  getKeyBelow(r) {
    return this.tabDirection ? null : this.getNextKey(r);
  }
  getNextKey(r) {
    let n = r;
    do
      n = this.collection.getKeyAfter(n), n == null && (n = this.collection.getFirstKey());
    while (n != null && this.isDisabled(n) && n !== r);
    return n;
  }
  getPreviousKey(r) {
    let n = r;
    do
      n = this.collection.getKeyBefore(n), n == null && (n = this.collection.getLastKey());
    while (n != null && this.isDisabled(n) && n !== r);
    return n;
  }
}
function Rx(e, r, n) {
  let { orientation: i = "horizontal", keyboardActivation: l = "automatic" } = e, { collection: c, selectionManager: u, disabledKeys: d } = r, { direction: h } = hv(), p = _.useMemo(() => new Ix(c, h, i, d), [
    c,
    d,
    i,
    h
  ]), { collectionProps: b } = Cx({
    ref: n,
    selectionManager: u,
    keyboardDelegate: p,
    selectOnFocus: l === "automatic",
    disallowEmptySelection: !0,
    scrollRef: n,
    linkBehavior: "selection"
  }), v = Vl();
  kv.set(r, v);
  let g = dv({
    ...e,
    id: v
  });
  return {
    tabListProps: {
      ...Ne(b, g),
      role: "tablist",
      "aria-orientation": i,
      tabIndex: void 0
    }
  };
}
function Lx(e, r, n) {
  let i = Tx(n) ? void 0 : 0;
  const l = zl(r, e.id ?? r?.selectedKey, "tabpanel"), c = dv({
    ...e,
    id: l,
    "aria-labelledby": zl(r, r?.selectedKey, "tab")
  });
  return {
    tabPanelProps: Ne(c, {
      tabIndex: i,
      role: "tabpanel",
      "aria-describedby": e["aria-describedby"],
      "aria-details": e["aria-details"]
    })
  };
}
var wm = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, zt = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, Mx = (e, r) => JSON.stringify(e) === JSON.stringify(r);
function Sv(e, r) {
  e.forEach(function(n) {
    Array.isArray(n) ? Sv(n, r) : r.push(n);
  });
}
function Cv(e) {
  let r = [];
  return Sv(e, r), r;
}
var _v = (...e) => Cv(e).filter(Boolean), Ev = (e, r) => {
  let n = {}, i = Object.keys(e), l = Object.keys(r);
  for (let c of i) if (l.includes(c)) {
    let u = e[c], d = r[c];
    typeof u == "object" && typeof d == "object" ? n[c] = Ev(u, d) : Array.isArray(u) || Array.isArray(d) ? n[c] = _v(d, u) : n[c] = d + " " + u;
  } else n[c] = e[c];
  for (let c of l) i.includes(c) || (n[c] = r[c]);
  return n;
}, xm = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
const kd = "-", jx = (e) => {
  const r = Kx(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: i
  } = e;
  return {
    getClassGroupId: (u) => {
      const d = u.split(kd);
      return d[0] === "" && d.length !== 1 && d.shift(), $v(d, r) || Dx(u);
    },
    getConflictingClassGroupIds: (u, d) => {
      const h = n[u] || [];
      return d && i[u] ? [...h, ...i[u]] : h;
    }
  };
}, $v = (e, r) => {
  if (e.length === 0)
    return r.classGroupId;
  const n = e[0], i = r.nextPart.get(n), l = i ? $v(e.slice(1), i) : void 0;
  if (l)
    return l;
  if (r.validators.length === 0)
    return;
  const c = e.join(kd);
  return r.validators.find(({
    validator: u
  }) => u(c))?.classGroupId;
}, km = /^\[(.+)\]$/, Dx = (e) => {
  if (km.test(e)) {
    const r = km.exec(e)[1], n = r?.substring(0, r.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Kx = (e) => {
  const {
    theme: r,
    prefix: n
  } = e, i = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Vx(Object.entries(e.classGroups), n).forEach(([c, u]) => {
    Bu(u, i, c, r);
  }), i;
}, Bu = (e, r, n, i) => {
  e.forEach((l) => {
    if (typeof l == "string") {
      const c = l === "" ? r : Sm(r, l);
      c.classGroupId = n;
      return;
    }
    if (typeof l == "function") {
      if (Ox(l)) {
        Bu(l(i), r, n, i);
        return;
      }
      r.validators.push({
        validator: l,
        classGroupId: n
      });
      return;
    }
    Object.entries(l).forEach(([c, u]) => {
      Bu(u, Sm(r, c), n, i);
    });
  });
}, Sm = (e, r) => {
  let n = e;
  return r.split(kd).forEach((i) => {
    n.nextPart.has(i) || n.nextPart.set(i, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(i);
  }), n;
}, Ox = (e) => e.isThemeGetter, Vx = (e, r) => r ? e.map(([n, i]) => {
  const l = i.map((c) => typeof c == "string" ? r + c : typeof c == "object" ? Object.fromEntries(Object.entries(c).map(([u, d]) => [r + u, d])) : c);
  return [n, l];
}) : e, Bx = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  const l = (c, u) => {
    n.set(c, u), r++, r > e && (r = 0, i = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(c) {
      let u = n.get(c);
      if (u !== void 0)
        return u;
      if ((u = i.get(c)) !== void 0)
        return l(c, u), u;
    },
    set(c, u) {
      n.has(c) ? n.set(c, u) : l(c, u);
    }
  };
}, Pv = "!", Hx = (e) => {
  const {
    separator: r,
    experimentalParseClassName: n
  } = e, i = r.length === 1, l = r[0], c = r.length, u = (d) => {
    const h = [];
    let p = 0, b = 0, v;
    for (let C = 0; C < d.length; C++) {
      let I = d[C];
      if (p === 0) {
        if (I === l && (i || d.slice(C, C + c) === r)) {
          h.push(d.slice(b, C)), b = C + c;
          continue;
        }
        if (I === "/") {
          v = C;
          continue;
        }
      }
      I === "[" ? p++ : I === "]" && p--;
    }
    const g = h.length === 0 ? d : d.substring(b), w = g.startsWith(Pv), k = w ? g.substring(1) : g, y = v && v > b ? v - b : void 0;
    return {
      modifiers: h,
      hasImportantModifier: w,
      baseClassName: k,
      maybePostfixModifierPosition: y
    };
  };
  return n ? (d) => n({
    className: d,
    parseClassName: u
  }) : u;
}, Ux = (e) => {
  if (e.length <= 1)
    return e;
  const r = [];
  let n = [];
  return e.forEach((i) => {
    i[0] === "[" ? (r.push(...n.sort(), i), n = []) : n.push(i);
  }), r.push(...n.sort()), r;
}, Wx = (e) => ({
  cache: Bx(e.cacheSize),
  parseClassName: Hx(e),
  ...jx(e)
}), Gx = /\s+/, Yx = (e, r) => {
  const {
    parseClassName: n,
    getClassGroupId: i,
    getConflictingClassGroupIds: l
  } = r, c = [], u = e.trim().split(Gx);
  let d = "";
  for (let h = u.length - 1; h >= 0; h -= 1) {
    const p = u[h], {
      modifiers: b,
      hasImportantModifier: v,
      baseClassName: g,
      maybePostfixModifierPosition: w
    } = n(p);
    let k = !!w, y = i(k ? g.substring(0, w) : g);
    if (!y) {
      if (!k) {
        d = p + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (y = i(g), !y) {
        d = p + (d.length > 0 ? " " + d : d);
        continue;
      }
      k = !1;
    }
    const C = Ux(b).join(":"), I = v ? C + Pv : C, F = I + y;
    if (c.includes(F))
      continue;
    c.push(F);
    const D = l(y, k);
    for (let W = 0; W < D.length; ++W) {
      const re = D[W];
      c.push(I + re);
    }
    d = p + (d.length > 0 ? " " + d : d);
  }
  return d;
};
function qx() {
  let e = 0, r, n, i = "";
  for (; e < arguments.length; )
    (r = arguments[e++]) && (n = Fv(r)) && (i && (i += " "), i += n);
  return i;
}
const Fv = (e) => {
  if (typeof e == "string")
    return e;
  let r, n = "";
  for (let i = 0; i < e.length; i++)
    e[i] && (r = Fv(e[i])) && (n && (n += " "), n += r);
  return n;
};
function Hu(e, ...r) {
  let n, i, l, c = u;
  function u(h) {
    const p = r.reduce((b, v) => v(b), e());
    return n = Wx(p), i = n.cache.get, l = n.cache.set, c = d, d(h);
  }
  function d(h) {
    const p = i(h);
    if (p)
      return p;
    const b = Yx(h, n);
    return l(h, b), b;
  }
  return function() {
    return c(qx.apply(null, arguments));
  };
}
const Ve = (e) => {
  const r = (n) => n[e] || [];
  return r.isThemeGetter = !0, r;
}, zv = /^\[(?:([a-z-]+):)?(.+)\]$/i, Qx = /^\d+\/\d+$/, Xx = /* @__PURE__ */ new Set(["px", "full", "screen"]), Zx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Jx = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, e2 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, t2 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, r2 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, hr = (e) => $n(e) || Xx.has(e) || Qx.test(e), $r = (e) => xa(e, "length", o2), $n = (e) => !!e && !Number.isNaN(Number(e)), yl = (e) => xa(e, "number", $n), ia = (e) => !!e && Number.isInteger(Number(e)), Tv = (e) => e.endsWith("%") && $n(e.slice(0, -1)), Ce = (e) => zv.test(e), Pr = (e) => Zx.test(e), n2 = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Nv = (e) => xa(e, n2, Lv), Av = (e) => xa(e, "position", Lv), a2 = /* @__PURE__ */ new Set(["image", "url"]), Iv = (e) => xa(e, a2, l2), Rv = (e) => xa(e, "", i2), la = () => !0, xa = (e, r, n) => {
  const i = zv.exec(e);
  return i ? i[1] ? typeof r == "string" ? i[1] === r : r.has(i[1]) : n(i[2]) : !1;
}, o2 = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Jx.test(e) && !e2.test(e)
), Lv = () => !1, i2 = (e) => t2.test(e), l2 = (e) => r2.test(e), s2 = /* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isAny: la,
  isArbitraryImage: Iv,
  isArbitraryLength: $r,
  isArbitraryNumber: yl,
  isArbitraryPosition: Av,
  isArbitraryShadow: Rv,
  isArbitrarySize: Nv,
  isArbitraryValue: Ce,
  isInteger: ia,
  isLength: hr,
  isNumber: $n,
  isPercent: Tv,
  isTshirtSize: Pr
}, Symbol.toStringTag, {
  value: "Module"
}), Uu = () => {
  const e = Ve("colors"), r = Ve("spacing"), n = Ve("blur"), i = Ve("brightness"), l = Ve("borderColor"), c = Ve("borderRadius"), u = Ve("borderSpacing"), d = Ve("borderWidth"), h = Ve("contrast"), p = Ve("grayscale"), b = Ve("hueRotate"), v = Ve("invert"), g = Ve("gap"), w = Ve("gradientColorStops"), k = Ve("gradientColorStopPositions"), y = Ve("inset"), C = Ve("margin"), I = Ve("opacity"), F = Ve("padding"), D = Ve("saturate"), W = Ve("scale"), re = Ve("sepia"), ee = Ve("skew"), ne = Ve("space"), ue = Ve("translate"), ie = () => ["auto", "contain", "none"], ve = () => ["auto", "hidden", "clip", "visible", "scroll"], se = () => ["auto", Ce, r], j = () => [Ce, r], q = () => ["", hr, $r], z = () => ["auto", $n, Ce], Y = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], K = () => ["solid", "dashed", "dotted", "double", "none"], R = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], L = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], N = () => ["", "0", Ce], U = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], P = () => [$n, Ce];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [la],
      spacing: [hr, $r],
      blur: ["none", "", Pr, Ce],
      brightness: P(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Pr, Ce],
      borderSpacing: j(),
      borderWidth: q(),
      contrast: P(),
      grayscale: N(),
      hueRotate: P(),
      invert: N(),
      gap: j(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Tv, $r],
      inset: se(),
      margin: se(),
      opacity: P(),
      padding: j(),
      saturate: P(),
      scale: P(),
      sepia: N(),
      skew: P(),
      space: j(),
      translate: j()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", Ce]
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
        columns: [Pr]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": U()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": U()
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
        object: [...Y(), Ce]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ve()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ve()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ve()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: ie()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": ie()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": ie()
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
        z: ["auto", ia, Ce]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: se()
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
        flex: ["1", "auto", "initial", "none", Ce]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: N()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: N()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ia, Ce]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [la]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ia, Ce]
        }, Ce]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": z()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [la]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ia, Ce]
        }, Ce]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": z()
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
        "auto-cols": ["auto", "min", "max", "fr", Ce]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Ce]
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
        p: [F]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [F]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [F]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [F]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [F]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [F]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [F]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [F]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [F]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [C]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [C]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [C]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [C]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [C]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [C]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [C]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [C]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [C]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [ne]
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
        "space-y": [ne]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Ce, r]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Ce, r, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Ce, r, "none", "full", "min", "max", "fit", "prose", {
          screen: [Pr]
        }, Pr]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Ce, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Ce, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Ce, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Ce, r, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Pr, $r]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", yl]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [la]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Ce]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", $n, yl]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", hr, Ce]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Ce]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Ce]
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
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [I]
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
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [I]
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
        decoration: [...K(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", hr, $r]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", hr, Ce]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
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
        indent: j()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Ce]
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
        content: ["none", Ce]
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
        "bg-opacity": [I]
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
        bg: [...Y(), Av]
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
        bg: ["auto", "cover", "contain", Nv]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Iv]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [k]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [k]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [k]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [w]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [w]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [w]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [c]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [c]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [c]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [c]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [c]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [c]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [c]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [c]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [c]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [c]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [c]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [c]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [c]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [c]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [c]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [d]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [d]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [d]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [d]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [d]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [d]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [d]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [d]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [d]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [I]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...K(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [d]
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
        "divide-y": [d]
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
        "divide-opacity": [I]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: K()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [l]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [l]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [l]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [l]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [l]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [l]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [l]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [l]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [l]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [l]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...K()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [hr, Ce]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [hr, $r]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: q()
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
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [I]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [hr, $r]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Pr, Rv]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [la]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [I]
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
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [i]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [h]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Pr, Ce]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [p]
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
        invert: [v]
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
        sepia: [re]
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
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [i]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [h]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [p]
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
        "backdrop-invert": [v]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [I]
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
        "backdrop-sepia": [re]
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
        "border-spacing": [u]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [u]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [u]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Ce]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: P()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Ce]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: P()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Ce]
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
        scale: [W]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [W]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [W]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ia, Ce]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [ue]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [ue]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [ee]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [ee]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Ce]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Ce]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
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
        "scroll-m": j()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": j()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": j()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": j()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": j()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": j()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": j()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": j()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": j()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": j()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": j()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": j()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": j()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": j()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": j()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": j()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": j()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": j()
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
        "will-change": ["auto", "scroll", "contents", "transform", Ce]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [hr, $r, yl]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
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
}, c2 = (e, {
  cacheSize: r,
  prefix: n,
  separator: i,
  experimentalParseClassName: l,
  extend: c = {},
  override: u = {}
}) => {
  wo(e, "cacheSize", r), wo(e, "prefix", n), wo(e, "separator", i), wo(e, "experimentalParseClassName", l);
  for (const d in u)
    u2(e[d], u[d]);
  for (const d in c)
    d2(e[d], c[d]);
  return e;
}, wo = (e, r, n) => {
  n !== void 0 && (e[r] = n);
}, u2 = (e, r) => {
  if (r)
    for (const n in r)
      wo(e, n, r[n]);
}, d2 = (e, r) => {
  if (r)
    for (const n in r) {
      const i = r[n];
      i !== void 0 && (e[n] = (e[n] || []).concat(i));
    }
}, Mv = (e, ...r) => typeof e == "function" ? Hu(Uu, e, ...r) : Hu(() => c2(Uu(), e), ...r), f2 = /* @__PURE__ */ Hu(Uu);
var p2 = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, jv = (e) => e || void 0, To = (...e) => jv(Cv(e).filter(Boolean).join(" ")), fu = null, Fr = {}, Wu = !1, uo = (...e) => (r) => r.twMerge ? ((!fu || Wu) && (Wu = !1, fu = zt(Fr) ? f2 : Mv({ ...Fr, extend: { theme: Fr.theme, classGroups: Fr.classGroups, conflictingClassGroupModifiers: Fr.conflictingClassGroupModifiers, conflictingClassGroups: Fr.conflictingClassGroups, ...Fr.extend } })), jv(fu(To(e)))) : To(e), Cm = (e, r) => {
  for (let n in r) e.hasOwnProperty(n) ? e[n] = To(e[n], r[n]) : e[n] = r[n];
  return e;
}, Uo = (e, r) => {
  let { extend: n = null, slots: i = {}, variants: l = {}, compoundVariants: c = [], compoundSlots: u = [], defaultVariants: d = {} } = e, h = { ...p2, ...r }, p = n != null && n.base ? To(n.base, e?.base) : e?.base, b = n != null && n.variants && !zt(n.variants) ? Ev(l, n.variants) : l, v = n != null && n.defaultVariants && !zt(n.defaultVariants) ? { ...n.defaultVariants, ...d } : d;
  !zt(h.twMergeConfig) && !Mx(h.twMergeConfig, Fr) && (Wu = !0, Fr = h.twMergeConfig);
  let g = zt(n?.slots), w = zt(i) ? {} : { base: To(e?.base, g && n?.base), ...i }, k = g ? w : Cm({ ...n?.slots }, zt(w) ? { base: e?.base } : w), y = zt(n?.compoundVariants) ? c : _v(n?.compoundVariants, c), C = (F) => {
    if (zt(b) && zt(i) && g) return uo(p, F?.class, F?.className)(h);
    if (y && !Array.isArray(y)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof y}`);
    if (u && !Array.isArray(u)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof u}`);
    let D = (j, q, z = [], Y) => {
      let K = z;
      if (typeof q == "string") K = K.concat(xm(q).split(" ").map((R) => `${j}:${R}`));
      else if (Array.isArray(q)) K = K.concat(q.reduce((R, L) => R.concat(`${j}:${L}`), []));
      else if (typeof q == "object" && typeof Y == "string") {
        for (let R in q) if (q.hasOwnProperty(R) && R === Y) {
          let L = q[R];
          if (L && typeof L == "string") {
            let N = xm(L);
            K[Y] ? K[Y] = K[Y].concat(N.split(" ").map((U) => `${j}:${U}`)) : K[Y] = N.split(" ").map((U) => `${j}:${U}`);
          } else Array.isArray(L) && L.length > 0 && (K[Y] = L.reduce((N, U) => N.concat(`${j}:${U}`), []));
        }
      }
      return K;
    }, W = (j, q = b, z = null, Y = null) => {
      var K;
      let R = q[j];
      if (!R || zt(R)) return null;
      let L = (K = Y?.[j]) != null ? K : F?.[j];
      if (L === null) return null;
      let N = wm(L), U = Array.isArray(h.responsiveVariants) && h.responsiveVariants.length > 0 || h.responsiveVariants === !0, P = v?.[j], B = [];
      if (typeof N == "object" && U) for (let [G, ce] of Object.entries(N)) {
        let ke = R[ce];
        if (G === "initial") {
          P = ce;
          continue;
        }
        Array.isArray(h.responsiveVariants) && !h.responsiveVariants.includes(G) || (B = D(G, ke, B, z));
      }
      let me = N != null && typeof N != "object" ? N : wm(P), pe = R[me || "false"];
      return typeof B == "object" && typeof z == "string" && B[z] ? Cm(B, pe) : B.length > 0 ? (B.push(pe), B) : pe;
    }, re = () => b ? Object.keys(b).map((j) => W(j, b)) : null, ee = (j, q) => {
      if (!b || typeof b != "object") return null;
      let z = new Array();
      for (let Y in b) {
        let K = W(Y, b, j, q), R = j === "base" && typeof K == "string" ? K : K && K[j];
        R && (z[z.length] = R);
      }
      return z;
    }, ne = {};
    for (let j in F) F[j] !== void 0 && (ne[j] = F[j]);
    let ue = (j, q) => {
      var z;
      let Y = typeof F?.[j] == "object" ? { [j]: (z = F[j]) == null ? void 0 : z.initial } : {};
      return { ...v, ...ne, ...Y, ...q };
    }, ie = (j = [], q) => {
      let z = [];
      for (let { class: Y, className: K, ...R } of j) {
        let L = !0;
        for (let [N, U] of Object.entries(R)) {
          let P = ue(N, q);
          if (Array.isArray(U)) {
            if (!U.includes(P[N])) {
              L = !1;
              break;
            }
          } else if (P[N] !== U) {
            L = !1;
            break;
          }
        }
        L && (Y && z.push(Y), K && z.push(K));
      }
      return z;
    }, ve = (j) => {
      let q = ie(y, j);
      if (!Array.isArray(q)) return q;
      let z = {};
      for (let Y of q) if (typeof Y == "string" && (z.base = uo(z.base, Y)(h)), typeof Y == "object") for (let [K, R] of Object.entries(Y)) z[K] = uo(z[K], R)(h);
      return z;
    }, se = (j) => {
      if (u.length < 1) return null;
      let q = {};
      for (let { slots: z = [], class: Y, className: K, ...R } of u) {
        if (!zt(R)) {
          let L = !0;
          for (let N of Object.keys(R)) {
            let U = ue(N, j)[N];
            if (U === void 0 || (Array.isArray(R[N]) ? !R[N].includes(U) : R[N] !== U)) {
              L = !1;
              break;
            }
          }
          if (!L) continue;
        }
        for (let L of z) q[L] = q[L] || [], q[L].push([Y, K]);
      }
      return q;
    };
    if (!zt(i) || !g) {
      let j = {};
      if (typeof k == "object" && !zt(k)) for (let q of Object.keys(k)) j[q] = (z) => {
        var Y, K;
        return uo(k[q], ee(q, z), ((Y = ve(z)) != null ? Y : [])[q], ((K = se(z)) != null ? K : [])[q], z?.class, z?.className)(h);
      };
      return j;
    }
    return uo(p, re(), ie(y), F?.class, F?.className)(h);
  }, I = () => {
    if (!(!b || typeof b != "object")) return Object.keys(b);
  };
  return C.variantKeys = I(), C.extend = n, C.base = p, C.slots = k, C.variants = b, C.defaultVariants = v, C.compoundSlots = u, C.compoundVariants = y, C;
};
const Dv = {
  large: "w-8 h-8",
  medium: "w-6 h-6",
  small: "w-5 h-5",
  undefined: "",
  "x-small": "w-4 h-4",
  "xx-small": "w-3.5 h-3.5"
}, yt = Uo({
  base: "inline-flex items-center justify-center p-0 m-0",
  variants: {
    size: Dv
  }
}), nt = Uo({
  variants: {
    size: Dv
  }
}), at = Uo({
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
}), Sd = Uo({
  base: "outline outline-offset-0 outline-interactive-highlight outline-2"
});
var fl = {}, wl = { exports: {} }, h2 = wl.exports, _m;
function m2() {
  return _m || (_m = 1, (function(e) {
    (function(r) {
      n(Math.pow(36, 5)), n(Math.pow(16, 7)), n(Math.pow(10, 9)), n(Math.pow(2, 30)), n(36), n(16), n(10), n(2);
      function n(u, d) {
        if (!(this instanceof n))
          return new n(u, d);
        if (this._low = 0, this._high = 0, this.remainder = null, typeof d > "u")
          return l.call(this, u);
        if (typeof u == "string")
          return c.call(this, u, d);
        i.call(this, u, d);
      }
      function i(u, d) {
        return this._low = u | 0, this._high = d | 0, this;
      }
      n.prototype.fromBits = i;
      function l(u) {
        return this._low = u & 65535, this._high = u >>> 16, this;
      }
      n.prototype.fromNumber = l;
      function c(u, d) {
        var h = parseInt(u, d || 10);
        return this._low = h & 65535, this._high = h >>> 16, this;
      }
      n.prototype.fromString = c, n.prototype.toNumber = function() {
        return this._high * 65536 + this._low;
      }, n.prototype.toString = function(u) {
        return this.toNumber().toString(u || 10);
      }, n.prototype.add = function(u) {
        var d = this._low + u._low, h = d >>> 16;
        return h += this._high + u._high, this._low = d & 65535, this._high = h & 65535, this;
      }, n.prototype.subtract = function(u) {
        return this.add(u.clone().negate());
      }, n.prototype.multiply = function(u) {
        var d = this._high, h = this._low, p = u._high, b = u._low, v, g;
        return g = h * b, v = g >>> 16, v += d * b, v &= 65535, v += h * p, this._low = g & 65535, this._high = v & 65535, this;
      }, n.prototype.div = function(u) {
        if (u._low == 0 && u._high == 0) throw Error("division by zero");
        if (u._high == 0 && u._low == 1)
          return this.remainder = new n(0), this;
        if (u.gt(this))
          return this.remainder = this.clone(), this._low = 0, this._high = 0, this;
        if (this.eq(u))
          return this.remainder = new n(0), this._low = 1, this._high = 0, this;
        for (var d = u.clone(), h = -1; !this.lt(d); )
          d.shiftLeft(1, !0), h++;
        for (this.remainder = this.clone(), this._low = 0, this._high = 0; h >= 0; h--)
          d.shiftRight(1), this.remainder.lt(d) || (this.remainder.subtract(d), h >= 16 ? this._high |= 1 << h - 16 : this._low |= 1 << h);
        return this;
      }, n.prototype.negate = function() {
        var u = (~this._low & 65535) + 1;
        return this._low = u & 65535, this._high = ~this._high + (u >>> 16) & 65535, this;
      }, n.prototype.equals = n.prototype.eq = function(u) {
        return this._low == u._low && this._high == u._high;
      }, n.prototype.greaterThan = n.prototype.gt = function(u) {
        return this._high > u._high ? !0 : this._high < u._high ? !1 : this._low > u._low;
      }, n.prototype.lessThan = n.prototype.lt = function(u) {
        return this._high < u._high ? !0 : this._high > u._high ? !1 : this._low < u._low;
      }, n.prototype.or = function(u) {
        return this._low |= u._low, this._high |= u._high, this;
      }, n.prototype.and = function(u) {
        return this._low &= u._low, this._high &= u._high, this;
      }, n.prototype.not = function() {
        return this._low = ~this._low & 65535, this._high = ~this._high & 65535, this;
      }, n.prototype.xor = function(u) {
        return this._low ^= u._low, this._high ^= u._high, this;
      }, n.prototype.shiftRight = n.prototype.shiftr = function(u) {
        return u > 16 ? (this._low = this._high >> u - 16, this._high = 0) : u == 16 ? (this._low = this._high, this._high = 0) : (this._low = this._low >> u | this._high << 16 - u & 65535, this._high >>= u), this;
      }, n.prototype.shiftLeft = n.prototype.shiftl = function(u, d) {
        return u > 16 ? (this._high = this._low << u - 16, this._low = 0, d || (this._high &= 65535)) : u == 16 ? (this._high = this._low, this._low = 0) : (this._high = this._high << u | this._low >> 16 - u, this._low = this._low << u & 65535, d || (this._high &= 65535)), this;
      }, n.prototype.rotateLeft = n.prototype.rotl = function(u) {
        var d = this._high << 16 | this._low;
        return d = d << u | d >>> 32 - u, this._low = d & 65535, this._high = d >>> 16, this;
      }, n.prototype.rotateRight = n.prototype.rotr = function(u) {
        var d = this._high << 16 | this._low;
        return d = d >>> u | d << 32 - u, this._low = d & 65535, this._high = d >>> 16, this;
      }, n.prototype.clone = function() {
        return new n(this._low, this._high);
      }, e.exports ? e.exports = n : r.UINT32 = n;
    })(h2);
  })(wl)), wl.exports;
}
var xl = { exports: {} }, g2 = xl.exports, Em;
function v2() {
  return Em || (Em = 1, (function(e) {
    (function(r) {
      var n = {
        16: l(Math.pow(16, 5)),
        10: l(Math.pow(10, 5)),
        2: l(Math.pow(2, 5))
      }, i = {
        16: l(16),
        10: l(10),
        2: l(2)
      };
      function l(h, p, b, v) {
        if (!(this instanceof l))
          return new l(h, p, b, v);
        if (this.remainder = null, typeof h == "string")
          return d.call(this, h, p);
        if (typeof p > "u")
          return u.call(this, h);
        c.apply(this, arguments);
      }
      function c(h, p, b, v) {
        return typeof b > "u" ? (this._a00 = h & 65535, this._a16 = h >>> 16, this._a32 = p & 65535, this._a48 = p >>> 16, this) : (this._a00 = h | 0, this._a16 = p | 0, this._a32 = b | 0, this._a48 = v | 0, this);
      }
      l.prototype.fromBits = c;
      function u(h) {
        return this._a00 = h & 65535, this._a16 = h >>> 16, this._a32 = 0, this._a48 = 0, this;
      }
      l.prototype.fromNumber = u;
      function d(h, p) {
        p = p || 10, this._a00 = 0, this._a16 = 0, this._a32 = 0, this._a48 = 0;
        for (var b = n[p] || new l(Math.pow(p, 5)), v = 0, g = h.length; v < g; v += 5) {
          var w = Math.min(5, g - v), k = parseInt(h.slice(v, v + w), p);
          this.multiply(
            w < 5 ? new l(Math.pow(p, w)) : b
          ).add(new l(k));
        }
        return this;
      }
      l.prototype.fromString = d, l.prototype.toNumber = function() {
        return this._a16 * 65536 + this._a00;
      }, l.prototype.toString = function(h) {
        h = h || 10;
        var p = i[h] || new l(h);
        if (!this.gt(p)) return this.toNumber().toString(h);
        for (var b = this.clone(), v = new Array(64), g = 63; g >= 0 && (b.div(p), v[g] = b.remainder.toNumber().toString(h), !!b.gt(p)); g--)
          ;
        return v[g - 1] = b.toNumber().toString(h), v.join("");
      }, l.prototype.add = function(h) {
        var p = this._a00 + h._a00, b = p >>> 16;
        b += this._a16 + h._a16;
        var v = b >>> 16;
        v += this._a32 + h._a32;
        var g = v >>> 16;
        return g += this._a48 + h._a48, this._a00 = p & 65535, this._a16 = b & 65535, this._a32 = v & 65535, this._a48 = g & 65535, this;
      }, l.prototype.subtract = function(h) {
        return this.add(h.clone().negate());
      }, l.prototype.multiply = function(h) {
        var p = this._a00, b = this._a16, v = this._a32, g = this._a48, w = h._a00, k = h._a16, y = h._a32, C = h._a48, I = p * w, F = I >>> 16;
        F += p * k;
        var D = F >>> 16;
        F &= 65535, F += b * w, D += F >>> 16, D += p * y;
        var W = D >>> 16;
        return D &= 65535, D += b * k, W += D >>> 16, D &= 65535, D += v * w, W += D >>> 16, W += p * C, W &= 65535, W += b * y, W &= 65535, W += v * k, W &= 65535, W += g * w, this._a00 = I & 65535, this._a16 = F & 65535, this._a32 = D & 65535, this._a48 = W & 65535, this;
      }, l.prototype.div = function(h) {
        if (h._a16 == 0 && h._a32 == 0 && h._a48 == 0) {
          if (h._a00 == 0) throw Error("division by zero");
          if (h._a00 == 1)
            return this.remainder = new l(0), this;
        }
        if (h.gt(this))
          return this.remainder = this.clone(), this._a00 = 0, this._a16 = 0, this._a32 = 0, this._a48 = 0, this;
        if (this.eq(h))
          return this.remainder = new l(0), this._a00 = 1, this._a16 = 0, this._a32 = 0, this._a48 = 0, this;
        for (var p = h.clone(), b = -1; !this.lt(p); )
          p.shiftLeft(1, !0), b++;
        for (this.remainder = this.clone(), this._a00 = 0, this._a16 = 0, this._a32 = 0, this._a48 = 0; b >= 0; b--)
          p.shiftRight(1), this.remainder.lt(p) || (this.remainder.subtract(p), b >= 48 ? this._a48 |= 1 << b - 48 : b >= 32 ? this._a32 |= 1 << b - 32 : b >= 16 ? this._a16 |= 1 << b - 16 : this._a00 |= 1 << b);
        return this;
      }, l.prototype.negate = function() {
        var h = (~this._a00 & 65535) + 1;
        return this._a00 = h & 65535, h = (~this._a16 & 65535) + (h >>> 16), this._a16 = h & 65535, h = (~this._a32 & 65535) + (h >>> 16), this._a32 = h & 65535, this._a48 = ~this._a48 + (h >>> 16) & 65535, this;
      }, l.prototype.equals = l.prototype.eq = function(h) {
        return this._a48 == h._a48 && this._a00 == h._a00 && this._a32 == h._a32 && this._a16 == h._a16;
      }, l.prototype.greaterThan = l.prototype.gt = function(h) {
        return this._a48 > h._a48 ? !0 : this._a48 < h._a48 ? !1 : this._a32 > h._a32 ? !0 : this._a32 < h._a32 ? !1 : this._a16 > h._a16 ? !0 : this._a16 < h._a16 ? !1 : this._a00 > h._a00;
      }, l.prototype.lessThan = l.prototype.lt = function(h) {
        return this._a48 < h._a48 ? !0 : this._a48 > h._a48 ? !1 : this._a32 < h._a32 ? !0 : this._a32 > h._a32 ? !1 : this._a16 < h._a16 ? !0 : this._a16 > h._a16 ? !1 : this._a00 < h._a00;
      }, l.prototype.or = function(h) {
        return this._a00 |= h._a00, this._a16 |= h._a16, this._a32 |= h._a32, this._a48 |= h._a48, this;
      }, l.prototype.and = function(h) {
        return this._a00 &= h._a00, this._a16 &= h._a16, this._a32 &= h._a32, this._a48 &= h._a48, this;
      }, l.prototype.xor = function(h) {
        return this._a00 ^= h._a00, this._a16 ^= h._a16, this._a32 ^= h._a32, this._a48 ^= h._a48, this;
      }, l.prototype.not = function() {
        return this._a00 = ~this._a00 & 65535, this._a16 = ~this._a16 & 65535, this._a32 = ~this._a32 & 65535, this._a48 = ~this._a48 & 65535, this;
      }, l.prototype.shiftRight = l.prototype.shiftr = function(h) {
        return h %= 64, h >= 48 ? (this._a00 = this._a48 >> h - 48, this._a16 = 0, this._a32 = 0, this._a48 = 0) : h >= 32 ? (h -= 32, this._a00 = (this._a32 >> h | this._a48 << 16 - h) & 65535, this._a16 = this._a48 >> h & 65535, this._a32 = 0, this._a48 = 0) : h >= 16 ? (h -= 16, this._a00 = (this._a16 >> h | this._a32 << 16 - h) & 65535, this._a16 = (this._a32 >> h | this._a48 << 16 - h) & 65535, this._a32 = this._a48 >> h & 65535, this._a48 = 0) : (this._a00 = (this._a00 >> h | this._a16 << 16 - h) & 65535, this._a16 = (this._a16 >> h | this._a32 << 16 - h) & 65535, this._a32 = (this._a32 >> h | this._a48 << 16 - h) & 65535, this._a48 = this._a48 >> h & 65535), this;
      }, l.prototype.shiftLeft = l.prototype.shiftl = function(h, p) {
        return h %= 64, h >= 48 ? (this._a48 = this._a00 << h - 48, this._a32 = 0, this._a16 = 0, this._a00 = 0) : h >= 32 ? (h -= 32, this._a48 = this._a16 << h | this._a00 >> 16 - h, this._a32 = this._a00 << h & 65535, this._a16 = 0, this._a00 = 0) : h >= 16 ? (h -= 16, this._a48 = this._a32 << h | this._a16 >> 16 - h, this._a32 = (this._a16 << h | this._a00 >> 16 - h) & 65535, this._a16 = this._a00 << h & 65535, this._a00 = 0) : (this._a48 = this._a48 << h | this._a32 >> 16 - h, this._a32 = (this._a32 << h | this._a16 >> 16 - h) & 65535, this._a16 = (this._a16 << h | this._a00 >> 16 - h) & 65535, this._a00 = this._a00 << h & 65535), p || (this._a48 &= 65535), this;
      }, l.prototype.rotateLeft = l.prototype.rotl = function(h) {
        if (h %= 64, h == 0) return this;
        if (h >= 32) {
          var p = this._a00;
          if (this._a00 = this._a32, this._a32 = p, p = this._a48, this._a48 = this._a16, this._a16 = p, h == 32) return this;
          h -= 32;
        }
        var b = this._a48 << 16 | this._a32, v = this._a16 << 16 | this._a00, g = b << h | v >>> 32 - h, w = v << h | b >>> 32 - h;
        return this._a00 = w & 65535, this._a16 = w >>> 16, this._a32 = g & 65535, this._a48 = g >>> 16, this;
      }, l.prototype.rotateRight = l.prototype.rotr = function(h) {
        if (h %= 64, h == 0) return this;
        if (h >= 32) {
          var p = this._a00;
          if (this._a00 = this._a32, this._a32 = p, p = this._a48, this._a48 = this._a16, this._a16 = p, h == 32) return this;
          h -= 32;
        }
        var b = this._a48 << 16 | this._a32, v = this._a16 << 16 | this._a00, g = b >>> h | v << 32 - h, w = v >>> h | b << 32 - h;
        return this._a00 = w & 65535, this._a16 = w >>> 16, this._a32 = g & 65535, this._a48 = g >>> 16, this;
      }, l.prototype.clone = function() {
        return new l(this._a00, this._a16, this._a32, this._a48);
      }, e.exports ? e.exports = l : r.UINT64 = l;
    })(g2);
  })(xl)), xl.exports;
}
var $m;
function Kv() {
  return $m || ($m = 1, fl.UINT32 = m2(), fl.UINT64 = v2()), fl;
}
var pu, Pm;
function b2() {
  if (Pm) return pu;
  Pm = 1;
  var e = Kv().UINT32;
  e.prototype.xxh_update = function(p, b) {
    var v = n._low, g = n._high, w, k;
    k = p * v, w = k >>> 16, w += b * v, w &= 65535, w += p * g;
    var y = this._low + (k & 65535), C = y >>> 16;
    C += this._high + (w & 65535);
    var I = C << 16 | y & 65535;
    I = I << 13 | I >>> 19, y = I & 65535, C = I >>> 16, v = r._low, g = r._high, k = y * v, w = k >>> 16, w += C * v, w &= 65535, w += y * g, this._low = k & 65535, this._high = w & 65535;
  };
  var r = e("2654435761"), n = e("2246822519"), i = e("3266489917"), l = e("668265263"), c = e("374761393");
  function u(p) {
    for (var b = [], v = 0, g = p.length; v < g; v++) {
      var w = p.charCodeAt(v);
      w < 128 ? b.push(w) : w < 2048 ? b.push(
        192 | w >> 6,
        128 | w & 63
      ) : w < 55296 || w >= 57344 ? b.push(
        224 | w >> 12,
        128 | w >> 6 & 63,
        128 | w & 63
      ) : (v++, w = 65536 + ((w & 1023) << 10 | p.charCodeAt(v) & 1023), b.push(
        240 | w >> 18,
        128 | w >> 12 & 63,
        128 | w >> 6 & 63,
        128 | w & 63
      ));
    }
    return new Uint8Array(b);
  }
  function d() {
    if (arguments.length == 2)
      return new d(arguments[1]).update(arguments[0]).digest();
    if (!(this instanceof d))
      return new d(arguments[0]);
    h.call(this, arguments[0]);
  }
  function h(p) {
    return this.seed = p instanceof e ? p.clone() : e(p), this.v1 = this.seed.clone().add(r).add(n), this.v2 = this.seed.clone().add(n), this.v3 = this.seed.clone(), this.v4 = this.seed.clone().subtract(r), this.total_len = 0, this.memsize = 0, this.memory = null, this;
  }
  return d.prototype.init = h, d.prototype.update = function(p) {
    var b = typeof p == "string", v;
    b && (p = u(p), b = !1, v = !0), typeof ArrayBuffer < "u" && p instanceof ArrayBuffer && (v = !0, p = new Uint8Array(p));
    var g = 0, w = p.length, k = g + w;
    if (w == 0) return this;
    if (this.total_len += w, this.memsize == 0 && (b ? this.memory = "" : v ? this.memory = new Uint8Array(16) : this.memory = new Buffer(16)), this.memsize + w < 16)
      return b ? this.memory += p : v ? this.memory.set(p.subarray(0, w), this.memsize) : p.copy(this.memory, this.memsize, 0, w), this.memsize += w, this;
    if (this.memsize > 0) {
      b ? this.memory += p.slice(0, 16 - this.memsize) : v ? this.memory.set(p.subarray(0, 16 - this.memsize), this.memsize) : p.copy(this.memory, this.memsize, 0, 16 - this.memsize);
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
      )), g += 16 - this.memsize, this.memsize = 0, b && (this.memory = "");
    }
    if (g <= k - 16) {
      var C = k - 16;
      do
        b ? (this.v1.xxh_update(
          p.charCodeAt(g + 1) << 8 | p.charCodeAt(g),
          p.charCodeAt(g + 3) << 8 | p.charCodeAt(g + 2)
        ), g += 4, this.v2.xxh_update(
          p.charCodeAt(g + 1) << 8 | p.charCodeAt(g),
          p.charCodeAt(g + 3) << 8 | p.charCodeAt(g + 2)
        ), g += 4, this.v3.xxh_update(
          p.charCodeAt(g + 1) << 8 | p.charCodeAt(g),
          p.charCodeAt(g + 3) << 8 | p.charCodeAt(g + 2)
        ), g += 4, this.v4.xxh_update(
          p.charCodeAt(g + 1) << 8 | p.charCodeAt(g),
          p.charCodeAt(g + 3) << 8 | p.charCodeAt(g + 2)
        )) : (this.v1.xxh_update(
          p[g + 1] << 8 | p[g],
          p[g + 3] << 8 | p[g + 2]
        ), g += 4, this.v2.xxh_update(
          p[g + 1] << 8 | p[g],
          p[g + 3] << 8 | p[g + 2]
        ), g += 4, this.v3.xxh_update(
          p[g + 1] << 8 | p[g],
          p[g + 3] << 8 | p[g + 2]
        ), g += 4, this.v4.xxh_update(
          p[g + 1] << 8 | p[g],
          p[g + 3] << 8 | p[g + 2]
        )), g += 4;
      while (g <= C);
    }
    return g < k && (b ? this.memory += p.slice(g) : v ? this.memory.set(p.subarray(g, k), this.memsize) : p.copy(this.memory, this.memsize, g, k), this.memsize = k - g), this;
  }, d.prototype.digest = function() {
    var p = this.memory, b = typeof p == "string", v = 0, g = this.memsize, w, k, y = new e();
    for (this.total_len >= 16 ? w = this.v1.rotl(1).add(this.v2.rotl(7).add(this.v3.rotl(12).add(this.v4.rotl(18)))) : w = this.seed.clone().add(c), w.add(y.fromNumber(this.total_len)); v <= g - 4; )
      b ? y.fromBits(
        p.charCodeAt(v + 1) << 8 | p.charCodeAt(v),
        p.charCodeAt(v + 3) << 8 | p.charCodeAt(v + 2)
      ) : y.fromBits(
        p[v + 1] << 8 | p[v],
        p[v + 3] << 8 | p[v + 2]
      ), w.add(y.multiply(i)).rotl(17).multiply(l), v += 4;
    for (; v < g; )
      y.fromBits(b ? p.charCodeAt(v++) : p[v++], 0), w.add(y.multiply(c)).rotl(11).multiply(r);
    return k = w.clone().shiftRight(15), w.xor(k).multiply(n), k = w.clone().shiftRight(13), w.xor(k).multiply(i), k = w.clone().shiftRight(16), w.xor(k), this.init(this.seed), w;
  }, pu = d, pu;
}
var hu, Fm;
function y2() {
  if (Fm) return hu;
  Fm = 1;
  var e = Kv().UINT64, r = e("11400714785074694791"), n = e("14029467366897019727"), i = e("1609587929392839161"), l = e("9650029242287828579"), c = e("2870177450012600261");
  function u(p) {
    for (var b = [], v = 0, g = p.length; v < g; v++) {
      var w = p.charCodeAt(v);
      w < 128 ? b.push(w) : w < 2048 ? b.push(
        192 | w >> 6,
        128 | w & 63
      ) : w < 55296 || w >= 57344 ? b.push(
        224 | w >> 12,
        128 | w >> 6 & 63,
        128 | w & 63
      ) : (v++, w = 65536 + ((w & 1023) << 10 | p.charCodeAt(v) & 1023), b.push(
        240 | w >> 18,
        128 | w >> 12 & 63,
        128 | w >> 6 & 63,
        128 | w & 63
      ));
    }
    return new Uint8Array(b);
  }
  function d() {
    if (arguments.length == 2)
      return new d(arguments[1]).update(arguments[0]).digest();
    if (!(this instanceof d))
      return new d(arguments[0]);
    h.call(this, arguments[0]);
  }
  function h(p) {
    return this.seed = p instanceof e ? p.clone() : e(p), this.v1 = this.seed.clone().add(r).add(n), this.v2 = this.seed.clone().add(n), this.v3 = this.seed.clone(), this.v4 = this.seed.clone().subtract(r), this.total_len = 0, this.memsize = 0, this.memory = null, this;
  }
  return d.prototype.init = h, d.prototype.update = function(p) {
    var b = typeof p == "string", v;
    b && (p = u(p), b = !1, v = !0), typeof ArrayBuffer < "u" && p instanceof ArrayBuffer && (v = !0, p = new Uint8Array(p));
    var g = 0, w = p.length, k = g + w;
    if (w == 0) return this;
    if (this.total_len += w, this.memsize == 0 && (b ? this.memory = "" : v ? this.memory = new Uint8Array(32) : this.memory = new Buffer(32)), this.memsize + w < 32)
      return b ? this.memory += p : v ? this.memory.set(p.subarray(0, w), this.memsize) : p.copy(this.memory, this.memsize, 0, w), this.memsize += w, this;
    if (this.memsize > 0) {
      b ? this.memory += p.slice(0, 32 - this.memsize) : v ? this.memory.set(p.subarray(0, 32 - this.memsize), this.memsize) : p.copy(this.memory, this.memsize, 0, 32 - this.memsize);
      var y = 0;
      if (b) {
        var C;
        C = e(
          this.memory.charCodeAt(y + 1) << 8 | this.memory.charCodeAt(y),
          this.memory.charCodeAt(y + 3) << 8 | this.memory.charCodeAt(y + 2),
          this.memory.charCodeAt(y + 5) << 8 | this.memory.charCodeAt(y + 4),
          this.memory.charCodeAt(y + 7) << 8 | this.memory.charCodeAt(y + 6)
        ), this.v1.add(C.multiply(n)).rotl(31).multiply(r), y += 8, C = e(
          this.memory.charCodeAt(y + 1) << 8 | this.memory.charCodeAt(y),
          this.memory.charCodeAt(y + 3) << 8 | this.memory.charCodeAt(y + 2),
          this.memory.charCodeAt(y + 5) << 8 | this.memory.charCodeAt(y + 4),
          this.memory.charCodeAt(y + 7) << 8 | this.memory.charCodeAt(y + 6)
        ), this.v2.add(C.multiply(n)).rotl(31).multiply(r), y += 8, C = e(
          this.memory.charCodeAt(y + 1) << 8 | this.memory.charCodeAt(y),
          this.memory.charCodeAt(y + 3) << 8 | this.memory.charCodeAt(y + 2),
          this.memory.charCodeAt(y + 5) << 8 | this.memory.charCodeAt(y + 4),
          this.memory.charCodeAt(y + 7) << 8 | this.memory.charCodeAt(y + 6)
        ), this.v3.add(C.multiply(n)).rotl(31).multiply(r), y += 8, C = e(
          this.memory.charCodeAt(y + 1) << 8 | this.memory.charCodeAt(y),
          this.memory.charCodeAt(y + 3) << 8 | this.memory.charCodeAt(y + 2),
          this.memory.charCodeAt(y + 5) << 8 | this.memory.charCodeAt(y + 4),
          this.memory.charCodeAt(y + 7) << 8 | this.memory.charCodeAt(y + 6)
        ), this.v4.add(C.multiply(n)).rotl(31).multiply(r);
      } else {
        var C;
        C = e(
          this.memory[y + 1] << 8 | this.memory[y],
          this.memory[y + 3] << 8 | this.memory[y + 2],
          this.memory[y + 5] << 8 | this.memory[y + 4],
          this.memory[y + 7] << 8 | this.memory[y + 6]
        ), this.v1.add(C.multiply(n)).rotl(31).multiply(r), y += 8, C = e(
          this.memory[y + 1] << 8 | this.memory[y],
          this.memory[y + 3] << 8 | this.memory[y + 2],
          this.memory[y + 5] << 8 | this.memory[y + 4],
          this.memory[y + 7] << 8 | this.memory[y + 6]
        ), this.v2.add(C.multiply(n)).rotl(31).multiply(r), y += 8, C = e(
          this.memory[y + 1] << 8 | this.memory[y],
          this.memory[y + 3] << 8 | this.memory[y + 2],
          this.memory[y + 5] << 8 | this.memory[y + 4],
          this.memory[y + 7] << 8 | this.memory[y + 6]
        ), this.v3.add(C.multiply(n)).rotl(31).multiply(r), y += 8, C = e(
          this.memory[y + 1] << 8 | this.memory[y],
          this.memory[y + 3] << 8 | this.memory[y + 2],
          this.memory[y + 5] << 8 | this.memory[y + 4],
          this.memory[y + 7] << 8 | this.memory[y + 6]
        ), this.v4.add(C.multiply(n)).rotl(31).multiply(r);
      }
      g += 32 - this.memsize, this.memsize = 0, b && (this.memory = "");
    }
    if (g <= k - 32) {
      var I = k - 32;
      do {
        if (b) {
          var C;
          C = e(
            p.charCodeAt(g + 1) << 8 | p.charCodeAt(g),
            p.charCodeAt(g + 3) << 8 | p.charCodeAt(g + 2),
            p.charCodeAt(g + 5) << 8 | p.charCodeAt(g + 4),
            p.charCodeAt(g + 7) << 8 | p.charCodeAt(g + 6)
          ), this.v1.add(C.multiply(n)).rotl(31).multiply(r), g += 8, C = e(
            p.charCodeAt(g + 1) << 8 | p.charCodeAt(g),
            p.charCodeAt(g + 3) << 8 | p.charCodeAt(g + 2),
            p.charCodeAt(g + 5) << 8 | p.charCodeAt(g + 4),
            p.charCodeAt(g + 7) << 8 | p.charCodeAt(g + 6)
          ), this.v2.add(C.multiply(n)).rotl(31).multiply(r), g += 8, C = e(
            p.charCodeAt(g + 1) << 8 | p.charCodeAt(g),
            p.charCodeAt(g + 3) << 8 | p.charCodeAt(g + 2),
            p.charCodeAt(g + 5) << 8 | p.charCodeAt(g + 4),
            p.charCodeAt(g + 7) << 8 | p.charCodeAt(g + 6)
          ), this.v3.add(C.multiply(n)).rotl(31).multiply(r), g += 8, C = e(
            p.charCodeAt(g + 1) << 8 | p.charCodeAt(g),
            p.charCodeAt(g + 3) << 8 | p.charCodeAt(g + 2),
            p.charCodeAt(g + 5) << 8 | p.charCodeAt(g + 4),
            p.charCodeAt(g + 7) << 8 | p.charCodeAt(g + 6)
          ), this.v4.add(C.multiply(n)).rotl(31).multiply(r);
        } else {
          var C;
          C = e(
            p[g + 1] << 8 | p[g],
            p[g + 3] << 8 | p[g + 2],
            p[g + 5] << 8 | p[g + 4],
            p[g + 7] << 8 | p[g + 6]
          ), this.v1.add(C.multiply(n)).rotl(31).multiply(r), g += 8, C = e(
            p[g + 1] << 8 | p[g],
            p[g + 3] << 8 | p[g + 2],
            p[g + 5] << 8 | p[g + 4],
            p[g + 7] << 8 | p[g + 6]
          ), this.v2.add(C.multiply(n)).rotl(31).multiply(r), g += 8, C = e(
            p[g + 1] << 8 | p[g],
            p[g + 3] << 8 | p[g + 2],
            p[g + 5] << 8 | p[g + 4],
            p[g + 7] << 8 | p[g + 6]
          ), this.v3.add(C.multiply(n)).rotl(31).multiply(r), g += 8, C = e(
            p[g + 1] << 8 | p[g],
            p[g + 3] << 8 | p[g + 2],
            p[g + 5] << 8 | p[g + 4],
            p[g + 7] << 8 | p[g + 6]
          ), this.v4.add(C.multiply(n)).rotl(31).multiply(r);
        }
        g += 8;
      } while (g <= I);
    }
    return g < k && (b ? this.memory += p.slice(g) : v ? this.memory.set(p.subarray(g, k), this.memsize) : p.copy(this.memory, this.memsize, g, k), this.memsize = k - g), this;
  }, d.prototype.digest = function() {
    var p = this.memory, b = typeof p == "string", v = 0, g = this.memsize, w, k, y = new e();
    for (this.total_len >= 32 ? (w = this.v1.clone().rotl(1), w.add(this.v2.clone().rotl(7)), w.add(this.v3.clone().rotl(12)), w.add(this.v4.clone().rotl(18)), w.xor(this.v1.multiply(n).rotl(31).multiply(r)), w.multiply(r).add(l), w.xor(this.v2.multiply(n).rotl(31).multiply(r)), w.multiply(r).add(l), w.xor(this.v3.multiply(n).rotl(31).multiply(r)), w.multiply(r).add(l), w.xor(this.v4.multiply(n).rotl(31).multiply(r)), w.multiply(r).add(l)) : w = this.seed.clone().add(c), w.add(y.fromNumber(this.total_len)); v <= g - 8; )
      b ? y.fromBits(
        p.charCodeAt(v + 1) << 8 | p.charCodeAt(v),
        p.charCodeAt(v + 3) << 8 | p.charCodeAt(v + 2),
        p.charCodeAt(v + 5) << 8 | p.charCodeAt(v + 4),
        p.charCodeAt(v + 7) << 8 | p.charCodeAt(v + 6)
      ) : y.fromBits(
        p[v + 1] << 8 | p[v],
        p[v + 3] << 8 | p[v + 2],
        p[v + 5] << 8 | p[v + 4],
        p[v + 7] << 8 | p[v + 6]
      ), y.multiply(n).rotl(31).multiply(r), w.xor(y).rotl(27).multiply(r).add(l), v += 8;
    for (v + 4 <= g && (b ? y.fromBits(
      p.charCodeAt(v + 1) << 8 | p.charCodeAt(v),
      p.charCodeAt(v + 3) << 8 | p.charCodeAt(v + 2),
      0,
      0
    ) : y.fromBits(
      p[v + 1] << 8 | p[v],
      p[v + 3] << 8 | p[v + 2],
      0,
      0
    ), w.xor(y.multiply(r)).rotl(23).multiply(n).add(i), v += 4); v < g; )
      y.fromBits(b ? p.charCodeAt(v++) : p[v++], 0, 0, 0), w.xor(y.multiply(c)).rotl(11).multiply(r);
    return k = w.clone().shiftRight(33), w.xor(k).multiply(n), k = w.clone().shiftRight(29), w.xor(k).multiply(i), k = w.clone().shiftRight(32), w.xor(k), this.init(this.seed), w;
  }, hu = d, hu;
}
var mu, zm;
function w2() {
  return zm || (zm = 1, mu = {
    h32: b2(),
    h64: y2()
  }), mu;
}
w2();
var x2 = Object.create, Yl = Object.defineProperty, k2 = Object.getOwnPropertyDescriptor, Cd = Object.getOwnPropertyNames, S2 = Object.getPrototypeOf, C2 = Object.prototype.hasOwnProperty, _2 = (e, r) => function() {
  return e && (r = (0, e[Cd(e)[0]])(e = 0)), r;
}, E2 = (e, r) => function() {
  return r || (0, e[Cd(e)[0]])((r = { exports: {} }).exports, r), r.exports;
}, $2 = (e, r) => {
  for (var n in r)
    Yl(e, n, { get: r[n], enumerable: !0 });
}, Ov = (e, r, n, i) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let l of Cd(r))
      !C2.call(e, l) && l !== n && Yl(e, l, { get: () => r[l], enumerable: !(i = k2(r, l)) || i.enumerable });
  return e;
}, P2 = (e, r, n) => (n = e != null ? x2(S2(e)) : {}, Ov(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Yl(n, "default", { value: e, enumerable: !0 }),
  e
)), F2 = (e) => Ov(Yl({}, "__esModule", { value: !0 }), e), Vv = {};
$2(Vv, {
  MODE_VALUES: () => Hv,
  THEME_VALUES: () => Bv
});
var Bv, Hv, z2 = _2({
  "../@paloma-tokens/dist/assets/paloma-theme-mode-values.ts"() {
    Bv = [
      "ea-blue",
      "ea-sims",
      "fc-green",
      "ea-battlefield6",
      // eslint-disable-line perfectionist/sort-union-types
      "purple",
      "red",
      "ea-madden"
    ], Hv = ["dark", "light"];
  }
}), T2 = E2({
  "../@paloma-tokens/dist/index.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.THEME_VALUES = e.MODE_VALUES = void 0;
    var r = (z2(), F2(Vv));
    Object.defineProperty(e, "MODE_VALUES", { enumerable: !0, get: function() {
      return r.MODE_VALUES;
    } }), Object.defineProperty(e, "THEME_VALUES", { enumerable: !0, get: function() {
      return r.THEME_VALUES;
    } });
  }
}), Gu = (e) => {
  console.error(`Assertion failed: ${e}`);
}, pt = (e, r) => {
  r || Gu("The assert function requires a message."), e || Gu(r);
}, Uv = (e, r) => {
  e == null && Gu(r);
};
function Re(e) {
  if (e === void 0)
    return !1;
}
var fa = (e) => {
  Re() && console.warn(e);
}, N2 = "It seems like you're using the cn function with a single string input. The cn function is designed for handling conditional classes. If you're not dealing with conditional classes, consider using the class directly.", A2 = (e) => !e.startsWith("size"), Wv = {
  override: {
    classGroups: {
      "font-size": [{ "text-size": [s2.isAny] }],
      "font-variant": ["font-variant-none"],
      "text-color": [
        {
          text: [A2]
        }
      ]
    }
  }
}, I2 = Mv(Wv), R2 = /\s\s+/g, L2 = (e) => e.replace(R2, " "), ct = (...e) => {
  if (typeof e[0] == "string" && e.length === 1)
    return fa(N2), fa(`cn("${e[0]}")`), e[0];
  const r = I2(bd(...e));
  return L2(r);
}, H = (e, r) => Uo(e, { twMergeConfig: Wv, ...r }), Gv = P2(T2());
Gv.MODE_VALUES;
Gv.THEME_VALUES;
function Tm(e) {
  const r = _.version.split(".");
  return parseInt(r[0], 10) >= 19 ? e : e ? "true" : void 0;
}
function M2(e, r = !0) {
  let [n, i] = _.useState(!0), l = n && r;
  return or(() => {
    if (l && e.current && "getAnimations" in e.current)
      for (let c of e.current.getAnimations()) c instanceof CSSTransition && c.cancel();
  }, [
    e,
    l
  ]), Yv(e, l, _.useCallback(() => i(!1), [])), l;
}
function j2(e, r) {
  let [n, i] = _.useState(r ? "open" : "closed");
  switch (n) {
    case "open":
      r || i("exiting");
      break;
    case "closed":
    case "exiting":
      r && i("open");
      break;
  }
  let l = n === "exiting";
  return Yv(e, l, _.useCallback(() => {
    i((c) => c === "exiting" ? "closed" : c);
  }, [])), l;
}
function Yv(e, r, n) {
  or(() => {
    if (r && e.current) {
      if (!("getAnimations" in e.current)) {
        n();
        return;
      }
      let i = e.current.getAnimations();
      if (i.length === 0) {
        n();
        return;
      }
      let l = !1;
      return Promise.allSettled(i.map((c) => c.finished)).then(() => {
        l || Hl.flushSync(() => {
          n();
        });
      }), () => {
        l = !0;
      };
    }
  }, [
    e,
    r,
    n
  ]);
}
const D2 = (e) => $.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: [$.jsx("path", { d: "M13.956 16.5927C14.576 16.7806 15 17.3521 15 18L9 18C9 17.3521 9.424 16.7806 10.044 16.5927L12 16L13.956 16.5927Z" }), $.jsx("path", { d: "M14 7H10L12 10L14 7Z" }), $.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5 3H19V5H18V7.0386C18 7.8723 17.7395 8.68515 17.2549 9.36356L15.3718 12L17.2549 14.6364C17.7395 15.3148 18 16.1277 18 16.9614V19H19V21H5V19H6V16.9614C6 16.1277 6.26049 15.3148 6.74507 14.6364L8.62824 12L6.74507 9.36356C6.26049 8.68515 6 7.8723 6 7.0386V5H5V3ZM8 16.9614V19H16V16.9614C16 16.5445 15.8698 16.1381 15.6275 15.7989L12.914 12L15.6275 8.20108C15.8698 7.86188 16 7.45545 16 7.0386V5H8V7.0386C8 7.45545 8.13025 7.86188 8.37253 8.20108L11.086 12L8.37253 15.7989C8.13025 16.1381 8 16.5445 8 16.9614Z" })] }), K2 = ({ children: e, containerClassName: r, emphasis: n, shape: i, size: l }) => {
  const c = typeof l == "number", u = c ? {
    height: l,
    padding: l / 2,
    width: l
  } : void 0, d = c ? void 0 : l;
  return $.jsx("div", { className: at({
    class: r,
    emphasis: n,
    shape: i,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: u, children: e });
}, O2 = ({ "aria-label": e, className: r, color: n, contained: i, containerClassName: l, emphasis: c = "regular", shape: u = "circle", size: d = "medium", svgClassName: h, ...p }) => {
  const b = !e, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, w = v ? void 0 : d, k = i ? K2 : _.Fragment, y = i ? { containerClassName: l, emphasis: c, shape: u, size: d } : {};
  return $.jsx(k, { ...y, children: $.jsx("span", { ...p, className: yt({ class: r, size: w }), "data-namespace": "@paloma/icons", "data-size": d, id: "hourglass-fill-id", style: { color: n, ...g }, children: $.jsx(D2, { "aria-hidden": b, "aria-label": e, className: nt({ class: h, size: w }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "hourglass-fill-svg-id", style: { fill: V2, ...g } }) }) });
}, V2 = "currentColor";
var B2 = _.createContext({}), H2 = (e, r) => {
  const n = e[r];
  return n || r;
};
function qv(...e) {
  const r = _.useContext(B2);
  return _.useMemo(() => {
    const n = e.map(
      (i) => H2(r, i)
    );
    return n.length === 1 ? n[0] : n;
  }, [e, r]);
}
const U2 = (e) => $.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: [$.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.3531 9.11111C15.3531 10.8293 13.9602 12.2222 12.242 12.2222C10.5238 12.2222 9.13087 10.8293 9.13087 9.11111C9.13087 7.39289 10.5238 6 12.242 6C13.9602 6 15.3531 7.39289 15.3531 9.11111ZM13.3531 9.11111C13.3531 9.72476 12.8556 10.2222 12.242 10.2222C11.6283 10.2222 11.1309 9.72476 11.1309 9.11111C11.1309 8.49746 11.6283 8 12.242 8C12.8556 8 13.3531 8.49746 13.3531 9.11111Z" }), $.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.9608 18.2766C15.5973 19.3557 13.8739 20 12 20C10.3038 20 8.73083 19.4721 7.43653 18.5716L8.20631 15.9544C8.27585 15.7179 8.49284 15.5556 8.73929 15.5556H15.7448C15.9912 15.5556 16.2082 15.7179 16.2778 15.9544L16.9608 18.2766ZM18.5505 16.5937L18.1965 15.39C17.8766 14.3024 16.8784 13.5556 15.7448 13.5556H8.73929C7.60562 13.5556 6.60746 14.3024 6.28758 15.39L5.79821 17.0539C4.67412 15.6761 4 13.9168 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 13.7094 19.4638 15.2937 18.5505 16.5937Z" })] }), W2 = ({ children: e, containerClassName: r, emphasis: n, shape: i, size: l }) => {
  const c = typeof l == "number", u = c ? {
    height: l,
    padding: l / 2,
    width: l
  } : void 0, d = c ? void 0 : l;
  return $.jsx("div", { className: at({
    class: r,
    emphasis: n,
    shape: i,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: u, children: e });
}, Qv = ({ "aria-label": e, className: r, color: n, contained: i, containerClassName: l, emphasis: c = "regular", shape: u = "circle", size: d = "medium", svgClassName: h, ...p }) => {
  const b = !e, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, w = v ? void 0 : d, k = i ? W2 : _.Fragment, y = i ? { containerClassName: l, emphasis: c, shape: u, size: d } : {};
  return $.jsx(k, { ...y, children: $.jsx("span", { ...p, className: yt({ class: r, size: w }), "data-namespace": "@paloma/icons", "data-size": d, id: "account-id", style: { color: n, ...g }, children: $.jsx(U2, { "aria-hidden": b, "aria-label": e, className: nt({ class: h, size: w }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "account-svg-id", style: { fill: G2, ...g } }) }) });
}, G2 = "currentColor", Xv = (e) => $.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: $.jsx("path", { d: "M11.7071 3.29291L3 12L11.7071 20.7071L13.1213 19.2929L6.82841 13L20 13V11L6.82844 11L13.1213 4.70712L11.7071 3.29291Z" }) }), Y2 = ({ children: e, containerClassName: r, emphasis: n, shape: i, size: l }) => {
  const c = typeof l == "number", u = c ? {
    height: l,
    padding: l / 2,
    width: l
  } : void 0, d = c ? void 0 : l;
  return $.jsx("div", { className: at({
    class: r,
    emphasis: n,
    shape: i,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: u, children: e });
}, q2 = ({ "aria-label": e, className: r, color: n, contained: i, containerClassName: l, emphasis: c = "regular", shape: u = "circle", size: d = "medium", svgClassName: h, ...p }) => {
  const b = !e, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, w = v ? void 0 : d, k = i ? Y2 : _.Fragment, y = i ? { containerClassName: l, emphasis: c, shape: u, size: d } : {};
  return $.jsx(k, { ...y, children: $.jsx("span", { ...p, className: yt({ class: r, size: w }), "data-namespace": "@paloma/icons", "data-size": d, id: "arrow-left-id", style: { color: n, ...g }, children: $.jsx(Xv, { "aria-hidden": b, "aria-label": e, className: nt({ class: h, size: w }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "arrow-left-svg-id", style: { fill: Q2, ...g } }) }) });
}, Q2 = "currentColor", X2 = _.forwardRef(({ "aria-label": e, as: r, className: n, color: i, contained: l = !1, disabled: c, emphasis: u = "regular", onBlur: d, onClick: h, onFocus: p, shape: b = "square", size: v = "medium", svgClassName: g, ...w }, k) => {
  const y = r ?? "button", C = _.useRef(null), { buttonProps: I } = wa({
    elementType: y,
    isDisabled: c,
    onBlur: d,
    onFocus: p,
    onPress: h
  }, C), F = !!(c || !e), D = typeof v == "number", W = D ? { height: v, width: v } : void 0, re = D && l ? { padding: v / 2 } : void 0, ee = D ? void 0 : v, ne = Ne(I, w);
  return $.jsx(J2, { disabled: c, children: $.jsx(y, { "aria-disabled": c, "aria-hidden": F, "aria-label": e, className: at({
    button: !0,
    class: n,
    emphasis: l && u,
    shape: b,
    size: ee
  }), "data-namespace": "@paloma/icons", "data-size": v, id: "arrow-left-id", ref: vr(C, k), style: { color: i, ...re, ...W }, ...ne, children: $.jsx(Xv, { className: nt({ class: g, size: ee }), "data-testid": "@paloma-icon-button-svg-id", focusable: "false", id: "arrow-left-svg-id", style: { fill: Z2, ...W } }) }) });
}), Z2 = "currentColor", J2 = ({ children: e, disabled: r, ...n }) => r ? e : $.jsx(Gl, { focusRingClass: Sd(), ...n, children: e }), Zv = (e) => $.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: $.jsx("path", { d: "M12.2929 3.29291L21 12L12.2929 20.7071L10.8787 19.2929L17.1716 13H4V11H17.1716L10.8787 4.70712L12.2929 3.29291Z" }) }), e5 = ({ children: e, containerClassName: r, emphasis: n, shape: i, size: l }) => {
  const c = typeof l == "number", u = c ? {
    height: l,
    padding: l / 2,
    width: l
  } : void 0, d = c ? void 0 : l;
  return $.jsx("div", { className: at({
    class: r,
    emphasis: n,
    shape: i,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: u, children: e });
}, Jv = ({ "aria-label": e, className: r, color: n, contained: i, containerClassName: l, emphasis: c = "regular", shape: u = "circle", size: d = "medium", svgClassName: h, ...p }) => {
  const b = !e, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, w = v ? void 0 : d, k = i ? e5 : _.Fragment, y = i ? { containerClassName: l, emphasis: c, shape: u, size: d } : {};
  return $.jsx(k, { ...y, children: $.jsx("span", { ...p, className: yt({ class: r, size: w }), "data-namespace": "@paloma/icons", "data-size": d, id: "arrow-right-id", style: { color: n, ...g }, children: $.jsx(Zv, { "aria-hidden": b, "aria-label": e, className: nt({ class: h, size: w }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "arrow-right-svg-id", style: { fill: t5, ...g } }) }) });
}, t5 = "currentColor", r5 = _.forwardRef(({ "aria-label": e, as: r, className: n, color: i, contained: l = !1, disabled: c, emphasis: u = "regular", onBlur: d, onClick: h, onFocus: p, shape: b = "square", size: v = "medium", svgClassName: g, ...w }, k) => {
  const y = r ?? "button", C = _.useRef(null), { buttonProps: I } = wa({
    elementType: y,
    isDisabled: c,
    onBlur: d,
    onFocus: p,
    onPress: h
  }, C), F = !!(c || !e), D = typeof v == "number", W = D ? { height: v, width: v } : void 0, re = D && l ? { padding: v / 2 } : void 0, ee = D ? void 0 : v, ne = Ne(I, w);
  return $.jsx(a5, { disabled: c, children: $.jsx(y, { "aria-disabled": c, "aria-hidden": F, "aria-label": e, className: at({
    button: !0,
    class: n,
    emphasis: l && u,
    shape: b,
    size: ee
  }), "data-namespace": "@paloma/icons", "data-size": v, id: "arrow-right-id", ref: vr(C, k), style: { color: i, ...re, ...W }, ...ne, children: $.jsx(Zv, { className: nt({ class: g, size: ee }), "data-testid": "@paloma-icon-button-svg-id", focusable: "false", id: "arrow-right-svg-id", style: { fill: n5, ...W } }) }) });
}), n5 = "currentColor", a5 = ({ children: e, disabled: r, ...n }) => r ? e : $.jsx(Gl, { focusRingClass: Sd(), ...n, children: e }), o5 = (e) => $.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: [$.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3 4V18L8.33333 14H17V4H3ZM5 6H15V12H7.66667L5 14V6Z" }), $.jsx("path", { d: "M21 9H19V17.5841L16.2361 16H10.0487L7.5 18H15.764L21 21V9Z" })] }), i5 = ({ children: e, containerClassName: r, emphasis: n, shape: i, size: l }) => {
  const c = typeof l == "number", u = c ? {
    height: l,
    padding: l / 2,
    width: l
  } : void 0, d = c ? void 0 : l;
  return $.jsx("div", { className: at({
    class: r,
    emphasis: n,
    shape: i,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: u, children: e });
}, l5 = ({ "aria-label": e, className: r, color: n, contained: i, containerClassName: l, emphasis: c = "regular", shape: u = "circle", size: d = "medium", svgClassName: h, ...p }) => {
  const b = !e, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, w = v ? void 0 : d, k = i ? i5 : _.Fragment, y = i ? { containerClassName: l, emphasis: c, shape: u, size: d } : {};
  return $.jsx(k, { ...y, children: $.jsx("span", { ...p, className: yt({ class: r, size: w }), "data-namespace": "@paloma/icons", "data-size": d, id: "chat-id", style: { color: n, ...g }, children: $.jsx(o5, { "aria-hidden": b, "aria-label": e, className: nt({ class: h, size: w }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "chat-svg-id", style: { fill: s5, ...g } }) }) });
}, s5 = "currentColor", c5 = (e) => $.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: $.jsx("path", { d: "M11.9988 10.5846L6.41421 5L5 6.41421L10.5846 11.9988L5 17.5834L6.41421 18.9977L11.9988 13.413L17.5834 18.9976L18.9976 17.5834L13.413 11.9988L18.9976 6.41427L17.5834 5.00006L11.9988 10.5846Z" }) }), u5 = _.forwardRef(({ "aria-label": e, as: r, className: n, color: i, contained: l = !1, disabled: c, emphasis: u = "regular", onBlur: d, onClick: h, onFocus: p, shape: b = "square", size: v = "medium", svgClassName: g, ...w }, k) => {
  const y = r ?? "button", C = _.useRef(null), { buttonProps: I } = wa({
    elementType: y,
    isDisabled: c,
    onBlur: d,
    onFocus: p,
    onPress: h
  }, C), F = !!(c || !e), D = typeof v == "number", W = D ? { height: v, width: v } : void 0, re = D && l ? { padding: v / 2 } : void 0, ee = D ? void 0 : v, ne = Ne(I, w);
  return $.jsx(f5, { disabled: c, children: $.jsx(y, { "aria-disabled": c, "aria-hidden": F, "aria-label": e, className: at({
    button: !0,
    class: n,
    emphasis: l && u,
    shape: b,
    size: ee
  }), "data-namespace": "@paloma/icons", "data-size": v, id: "close-id", ref: vr(C, k), style: { color: i, ...re, ...W }, ...ne, children: $.jsx(c5, { className: nt({ class: g, size: ee }), "data-testid": "@paloma-icon-button-svg-id", focusable: "false", id: "close-svg-id", style: { fill: d5, ...W } }) }) });
}), d5 = "currentColor", f5 = ({ children: e, disabled: r, ...n }) => r ? e : $.jsx(Gl, { focusRingClass: Sd(), ...n, children: e }), p5 = (e) => $.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: [$.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 4H11V11H4V4ZM6 6H9V9H6V6Z" }), $.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13 4H20V11H13V4ZM15 6H18V9H15V6Z" }), $.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13 13V20H20V13H13ZM18 15H15V18H18V15Z" }), $.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 13H11V20H4V13ZM6 15H9V18H6V15Z" })] }), h5 = ({ children: e, containerClassName: r, emphasis: n, shape: i, size: l }) => {
  const c = typeof l == "number", u = c ? {
    height: l,
    padding: l / 2,
    width: l
  } : void 0, d = c ? void 0 : l;
  return $.jsx("div", { className: at({
    class: r,
    emphasis: n,
    shape: i,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: u, children: e });
}, m5 = ({ "aria-label": e, className: r, color: n, contained: i, containerClassName: l, emphasis: c = "regular", shape: u = "circle", size: d = "medium", svgClassName: h, ...p }) => {
  const b = !e, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, w = v ? void 0 : d, k = i ? h5 : _.Fragment, y = i ? { containerClassName: l, emphasis: c, shape: u, size: d } : {};
  return $.jsx(k, { ...y, children: $.jsx("span", { ...p, className: yt({ class: r, size: w }), "data-namespace": "@paloma/icons", "data-size": d, id: "dashboard-grid-id", style: { color: n, ...g }, children: $.jsx(p5, { "aria-hidden": b, "aria-label": e, className: nt({ class: h, size: w }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "dashboard-grid-svg-id", style: { fill: g5, ...g } }) }) });
}, g5 = "currentColor", v5 = (e) => $.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: $.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15 4.00001L20 9.00001L9 20L4 20V15L15 4.00001ZM13.5997 8.23289L15.7671 10.4003L17.1674 9.00001L15 6.83256L13.5997 8.23289ZM14.3509 11.8166L12.1834 9.64916L6.00292 15.8296V17.9971L8.17037 17.9971L14.3509 11.8166Z" }) }), b5 = ({ children: e, containerClassName: r, emphasis: n, shape: i, size: l }) => {
  const c = typeof l == "number", u = c ? {
    height: l,
    padding: l / 2,
    width: l
  } : void 0, d = c ? void 0 : l;
  return $.jsx("div", { className: at({
    class: r,
    emphasis: n,
    shape: i,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: u, children: e });
}, y5 = ({ "aria-label": e, className: r, color: n, contained: i, containerClassName: l, emphasis: c = "regular", shape: u = "circle", size: d = "medium", svgClassName: h, ...p }) => {
  const b = !e, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, w = v ? void 0 : d, k = i ? b5 : _.Fragment, y = i ? { containerClassName: l, emphasis: c, shape: u, size: d } : {};
  return $.jsx(k, { ...y, children: $.jsx("span", { ...p, className: yt({ class: r, size: w }), "data-namespace": "@paloma/icons", "data-size": d, id: "edit-id", style: { color: n, ...g }, children: $.jsx(v5, { "aria-hidden": b, "aria-label": e, className: nt({ class: h, size: w }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "edit-svg-id", style: { fill: w5, ...g } }) }) });
}, w5 = "currentColor", x5 = (e) => $.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: [$.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16 12C16 14.2091 14.2091 16 12 16C9.79087 16 8.00001 14.2091 8.00001 12C8.00001 9.79086 9.79087 8 12 8C14.2091 8 16 9.79086 16 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" }), $.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5C7.70852 5 4.03956 7.69143 2.10589 11.552L1.88159 11.9999L2.10588 12.4477C4.03952 16.3085 7.70854 19 12.0001 19C16.2915 19 19.9605 16.3086 21.8941 12.448L22.1184 12.0001L21.8941 11.5523C19.9605 7.69155 16.2915 5 12 5ZM12.0001 17C8.75575 17 5.83332 15.0562 4.13082 11.9999C5.83333 8.94372 8.75571 7 12 7C15.2443 7 18.1667 8.94381 19.8692 12.0001C18.1667 15.0563 15.2443 17 12.0001 17Z" })] }), k5 = ({ children: e, containerClassName: r, emphasis: n, shape: i, size: l }) => {
  const c = typeof l == "number", u = c ? {
    height: l,
    padding: l / 2,
    width: l
  } : void 0, d = c ? void 0 : l;
  return $.jsx("div", { className: at({
    class: r,
    emphasis: n,
    shape: i,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: u, children: e });
}, S5 = ({ "aria-label": e, className: r, color: n, contained: i, containerClassName: l, emphasis: c = "regular", shape: u = "circle", size: d = "medium", svgClassName: h, ...p }) => {
  const b = !e, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, w = v ? void 0 : d, k = i ? k5 : _.Fragment, y = i ? { containerClassName: l, emphasis: c, shape: u, size: d } : {};
  return $.jsx(k, { ...y, children: $.jsx("span", { ...p, className: yt({ class: r, size: w }), "data-namespace": "@paloma/icons", "data-size": d, id: "eye-id", style: { color: n, ...g }, children: $.jsx(x5, { "aria-hidden": b, "aria-label": e, className: nt({ class: h, size: w }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "eye-svg-id", style: { fill: C5, ...g } }) }) });
}, C5 = "currentColor", _5 = (e) => $.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: [$.jsx("path", { d: "M16 8V4H18V5H21V7H18V8H16Z" }), $.jsx("path", { d: "M13 7L3 7V5L13 5V7Z" }), $.jsx("path", { d: "M6 13V14H8V10H6V11H3V13H6Z" }), $.jsx("path", { d: "M21 13L10 13V11L21 11V13Z" }), $.jsx("path", { d: "M21 19V17L15 17V19L21 19Z" }), $.jsx("path", { d: "M11 17V16H13V20H11V19H3V17H11Z" })] }), E5 = ({ children: e, containerClassName: r, emphasis: n, shape: i, size: l }) => {
  const c = typeof l == "number", u = c ? {
    height: l,
    padding: l / 2,
    width: l
  } : void 0, d = c ? void 0 : l;
  return $.jsx("div", { className: at({
    class: r,
    emphasis: n,
    shape: i,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: u, children: e });
}, $5 = ({ "aria-label": e, className: r, color: n, contained: i, containerClassName: l, emphasis: c = "regular", shape: u = "circle", size: d = "medium", svgClassName: h, ...p }) => {
  const b = !e, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, w = v ? void 0 : d, k = i ? E5 : _.Fragment, y = i ? { containerClassName: l, emphasis: c, shape: u, size: d } : {};
  return $.jsx(k, { ...y, children: $.jsx("span", { ...p, className: yt({ class: r, size: w }), "data-namespace": "@paloma/icons", "data-size": d, id: "filter-sliders-horizontal-id", style: { color: n, ...g }, children: $.jsx(_5, { "aria-hidden": b, "aria-label": e, className: nt({ class: h, size: w }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "filter-sliders-horizontal-svg-id", style: { fill: P5, ...g } }) }) });
}, P5 = "currentColor", F5 = (e) => $.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: $.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1295 4.69761C10.9271 3.53768 12.0025 3 12.0025 3C12.0025 3.90396 12.113 4.63258 12.3039 5.23184C12.834 6.89546 13.9843 7.56222 15.1128 8.21633C15.7159 8.56593 16.3128 8.91192 16.8055 9.40456C18.0347 10.6337 18.7949 12.3319 18.7949 14.2075C18.7949 17.9589 15.7538 21 12.0025 21C8.25111 21 5.21002 17.9589 5.21002 14.2075C5.21002 13.3993 5.35117 12.6241 5.61017 11.9052C5.64152 11.8181 5.6746 11.7319 5.70936 11.6466C6.05391 10.8008 6.56404 10.04 7.19949 9.40456C7.19949 9.40456 7.19949 10.8943 7.79283 11.9144C8.1017 12.4453 8.57135 12.8491 9.28549 12.8491V14.8491C8.42013 14.8491 7.74079 14.5897 7.21002 14.2091C7.21088 16.8552 9.35621 19 12.0025 19C14.6493 19 16.7949 16.8543 16.7949 14.2075C16.7949 12.8836 16.2607 11.6882 15.3913 10.8188C15.1535 10.581 14.8351 10.3697 14.3095 10.0627C14.251 10.0285 14.1887 9.9925 14.123 9.95459C13.667 9.6911 13.0538 9.33686 12.4972 8.89017C12.0708 8.5479 11.6547 8.13718 11.2883 7.62797C11.3138 8.55774 11.5047 8.8105 11.5722 8.89993C11.576 8.90484 11.5793 8.90927 11.5822 8.91328C11.5875 8.92049 11.6003 8.9349 11.6193 8.95626C11.8125 9.17327 12.644 10.1073 12.644 11.4906C12.644 12.1802 12.4658 12.8303 12.0958 13.3853C11.7341 13.9279 11.2662 14.2646 10.8592 14.4681C10.4599 14.6677 10.0849 14.7576 9.82656 14.8006C9.69265 14.8229 9.57668 14.8349 9.48636 14.8413C9.44086 14.8446 9.40092 14.8465 9.36738 14.8476C9.35058 14.8482 9.3353 14.8485 9.32164 14.8488L9.30235 14.849L9.29362 14.849L9.28948 14.8491L9.28747 14.8491C9.28648 14.8491 9.28549 14.8491 9.28549 12.8491C9.28549 12.8491 10.644 12.8491 10.644 11.4906C10.644 10.9472 10.4266 10.6755 10.1658 10.3494C9.77455 9.86038 9.28549 9.24906 9.28549 7.41509C9.28549 6.28146 9.65922 5.38141 10.1295 4.69761Z" }) }), z5 = ({ children: e, containerClassName: r, emphasis: n, shape: i, size: l }) => {
  const c = typeof l == "number", u = c ? {
    height: l,
    padding: l / 2,
    width: l
  } : void 0, d = c ? void 0 : l;
  return $.jsx("div", { className: at({
    class: r,
    emphasis: n,
    shape: i,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: u, children: e });
}, T5 = ({ "aria-label": e, className: r, color: n, contained: i, containerClassName: l, emphasis: c = "regular", shape: u = "circle", size: d = "medium", svgClassName: h, ...p }) => {
  const b = !e, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, w = v ? void 0 : d, k = i ? z5 : _.Fragment, y = i ? { containerClassName: l, emphasis: c, shape: u, size: d } : {};
  return $.jsx(k, { ...y, children: $.jsx("span", { ...p, className: yt({ class: r, size: w }), "data-namespace": "@paloma/icons", "data-size": d, id: "fire-id", style: { color: n, ...g }, children: $.jsx(F5, { "aria-hidden": b, "aria-label": e, className: nt({ class: h, size: w }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "fire-svg-id", style: { fill: N5, ...g } }) }) });
}, N5 = "currentColor", A5 = (e) => $.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: [$.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2C8.15914 2 5 5.06721 5 8.88C5 11.1787 6.13185 12.4679 7.02426 13.4843L7.04788 13.5113L7.04867 13.5122C7.33781 13.843 7.60874 14.1537 7.86623 14.4997C7.88365 14.5588 7.90541 14.6502 7.92658 14.7698C7.96944 15.012 8 15.3137 8 15.6V18H16V15.6C16 15.3155 16.0313 15.014 16.075 14.7708C16.0968 14.6494 16.1192 14.5565 16.1371 14.4965L16.1379 14.4941C16.3927 14.1455 16.665 13.8327 16.9593 13.4948L16.9875 13.4624C17.8734 12.4462 19 11.1538 19 8.88C19 5.06721 15.8409 2 12 2ZM7 8.88C7 6.20967 9.22543 4 12 4C14.7746 4 17 6.20967 17 8.88C17 10.3769 16.327 11.1762 15.4513 12.1811L15.4288 12.2068C15.129 12.5511 14.7857 12.9453 14.4596 13.4019L14.4574 13.405C14.3253 13.5915 14.2557 13.8074 14.2209 13.9239C14.176 14.074 14.1377 14.2433 14.1065 14.417C14.0442 14.764 14 15.1845 14 15.6V16H10V15.6C10 15.1863 9.95727 14.7677 9.89599 14.4213C9.86533 14.248 9.82755 14.0788 9.78287 13.9283C9.74821 13.8117 9.67843 13.594 9.54412 13.4057L9.53869 13.3981C9.20863 12.9444 8.86653 12.5529 8.56583 12.2089L8.55383 12.1951L8.55239 12.1935C7.67595 11.195 7 10.3985 7 8.88Z" }), $.jsx("path", { d: "M15 22V20H9V22H15Z" })] }), I5 = ({ children: e, containerClassName: r, emphasis: n, shape: i, size: l }) => {
  const c = typeof l == "number", u = c ? {
    height: l,
    padding: l / 2,
    width: l
  } : void 0, d = c ? void 0 : l;
  return $.jsx("div", { className: at({
    class: r,
    emphasis: n,
    shape: i,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: u, children: e });
}, R5 = ({ "aria-label": e, className: r, color: n, contained: i, containerClassName: l, emphasis: c = "regular", shape: u = "circle", size: d = "medium", svgClassName: h, ...p }) => {
  const b = !e, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, w = v ? void 0 : d, k = i ? I5 : _.Fragment, y = i ? { containerClassName: l, emphasis: c, shape: u, size: d } : {};
  return $.jsx(k, { ...y, children: $.jsx("span", { ...p, className: yt({ class: r, size: w }), "data-namespace": "@paloma/icons", "data-size": d, id: "lightbulb-id", style: { color: n, ...g }, children: $.jsx(A5, { "aria-hidden": b, "aria-label": e, className: nt({ class: h, size: w }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "lightbulb-svg-id", style: { fill: L5, ...g } }) }) });
}, L5 = "currentColor", M5 = (e) => $.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: $.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.5696 3.15546C12.6772 2.26303 11.1914 2.41015 10.4913 3.46028L7.46479 8.00008H3V20.0001L17.1949 20C18.0901 20 18.895 19.4551 19.2275 18.6239L19.2849 18.4804C20.4179 15.6479 21 12.6252 21 9.57453C21 8.70496 20.2951 8.00004 19.4255 8.00004H15V5.82847C15 5.03282 14.6839 4.26976 14.1213 3.70715L13.5696 3.15546ZM7 18.0001V10.0001H5V18.0001H7ZM9 18H17.1949C17.2723 18 17.3418 17.953 17.3705 17.8812L17.4279 17.7376C18.4137 15.2731 18.9445 12.6516 18.9959 10H13V5.82847C13 5.56325 12.8946 5.3089 12.7071 5.12136L12.1554 4.56968L9 9.30281V18Z" }) }), j5 = ({ children: e, containerClassName: r, emphasis: n, shape: i, size: l }) => {
  const c = typeof l == "number", u = c ? {
    height: l,
    padding: l / 2,
    width: l
  } : void 0, d = c ? void 0 : l;
  return $.jsx("div", { className: at({
    class: r,
    emphasis: n,
    shape: i,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: u, children: e });
}, D5 = ({ "aria-label": e, className: r, color: n, contained: i, containerClassName: l, emphasis: c = "regular", shape: u = "circle", size: d = "medium", svgClassName: h, ...p }) => {
  const b = !e, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, w = v ? void 0 : d, k = i ? j5 : _.Fragment, y = i ? { containerClassName: l, emphasis: c, shape: u, size: d } : {};
  return $.jsx(k, { ...y, children: $.jsx("span", { ...p, className: yt({ class: r, size: w }), "data-namespace": "@paloma/icons", "data-size": d, id: "like-id", style: { color: n, ...g }, children: $.jsx(M5, { "aria-hidden": b, "aria-label": e, className: nt({ class: h, size: w }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "like-svg-id", style: { fill: K5, ...g } }) }) });
}, K5 = "currentColor", O5 = (e) => $.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: [$.jsx("path", { d: "M4 8V6H6V8H4Z" }), $.jsx("path", { d: "M4 13V11H6V13H4Z" }), $.jsx("path", { d: "M4 18V16H6V18H4Z" }), $.jsx("path", { d: "M8 8V6H20V8H8Z" }), $.jsx("path", { d: "M8 13V11H20V13H8Z" }), $.jsx("path", { d: "M8 18V16H20V18H8Z" })] }), V5 = ({ children: e, containerClassName: r, emphasis: n, shape: i, size: l }) => {
  const c = typeof l == "number", u = c ? {
    height: l,
    padding: l / 2,
    width: l
  } : void 0, d = c ? void 0 : l;
  return $.jsx("div", { className: at({
    class: r,
    emphasis: n,
    shape: i,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: u, children: e });
}, B5 = ({ "aria-label": e, className: r, color: n, contained: i, containerClassName: l, emphasis: c = "regular", shape: u = "circle", size: d = "medium", svgClassName: h, ...p }) => {
  const b = !e, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, w = v ? void 0 : d, k = i ? V5 : _.Fragment, y = i ? { containerClassName: l, emphasis: c, shape: u, size: d } : {};
  return $.jsx(k, { ...y, children: $.jsx("span", { ...p, className: yt({ class: r, size: w }), "data-namespace": "@paloma/icons", "data-size": d, id: "list-id", style: { color: n, ...g }, children: $.jsx(O5, { "aria-hidden": b, "aria-label": e, className: nt({ class: h, size: w }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "list-svg-id", style: { fill: H5, ...g } }) }) });
}, H5 = "currentColor", U5 = (e) => $.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: $.jsx("path", { d: "M14 6V8H18.5858L13 13.5858L9.00001 9.58579L1.29291 17.2929L2.70712 18.7071L9.00001 12.4142L13 16.4142L20 9.41423V14H22V6H14Z" }) }), W5 = ({ children: e, containerClassName: r, emphasis: n, shape: i, size: l }) => {
  const c = typeof l == "number", u = c ? {
    height: l,
    padding: l / 2,
    width: l
  } : void 0, d = c ? void 0 : l;
  return $.jsx("div", { className: at({
    class: r,
    emphasis: n,
    shape: i,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: u, children: e });
}, G5 = ({ "aria-label": e, className: r, color: n, contained: i, containerClassName: l, emphasis: c = "regular", shape: u = "circle", size: d = "medium", svgClassName: h, ...p }) => {
  const b = !e, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, w = v ? void 0 : d, k = i ? W5 : _.Fragment, y = i ? { containerClassName: l, emphasis: c, shape: u, size: d } : {};
  return $.jsx(k, { ...y, children: $.jsx("span", { ...p, className: yt({ class: r, size: w }), "data-namespace": "@paloma/icons", "data-size": d, id: "trend-up-id", style: { color: n, ...g }, children: $.jsx(U5, { "aria-hidden": b, "aria-label": e, className: nt({ class: h, size: w }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "trend-up-svg-id", style: { fill: Y5, ...g } }) }) });
}, Y5 = "currentColor", q5 = (e) => $.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: $.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 3H18V5H21V9.50989C21 10.8362 20.1291 12.0051 18.8583 12.3845L17.2778 12.8564C16.4141 14.4489 14.8507 15.6066 13 15.917V18H14V20H16V22H8V20H10V18H11V15.917C9.1317 15.6036 7.55618 14.4267 6.69776 12.8108L5.17584 12.376C3.88793 12.008 3 10.8308 3 9.4914V5H6V3ZM8 5H16V10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10V5ZM17.9741 10.5612L18.2861 10.4681C18.7097 10.3416 19 9.95199 19 9.50989V7H18V10C18 10.1893 17.9912 10.3765 17.9741 10.5612ZM6 10C6 10.1814 6.00805 10.3609 6.02381 10.5382L5.72528 10.4529C5.29598 10.3303 5 9.93788 5 9.4914V7H6V10Z" }) }), Q5 = ({ children: e, containerClassName: r, emphasis: n, shape: i, size: l }) => {
  const c = typeof l == "number", u = c ? {
    height: l,
    padding: l / 2,
    width: l
  } : void 0, d = c ? void 0 : l;
  return $.jsx("div", { className: at({
    class: r,
    emphasis: n,
    shape: i,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: u, children: e });
}, X5 = ({ "aria-label": e, className: r, color: n, contained: i, containerClassName: l, emphasis: c = "regular", shape: u = "circle", size: d = "medium", svgClassName: h, ...p }) => {
  const b = !e, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, w = v ? void 0 : d, k = i ? Q5 : _.Fragment, y = i ? { containerClassName: l, emphasis: c, shape: u, size: d } : {};
  return $.jsx(k, { ...y, children: $.jsx("span", { ...p, className: yt({ class: r, size: w }), "data-namespace": "@paloma/icons", "data-size": d, id: "trophy-id", style: { color: n, ...g }, children: $.jsx(q5, { "aria-hidden": b, "aria-label": e, className: nt({ class: h, size: w }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "trophy-svg-id", style: { fill: Z5, ...g } }) }) });
}, Z5 = "currentColor", J5 = (e) => $.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: [$.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z" }), $.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.49653 13C6.16571 13 4.99395 13.8768 4.61844 15.1535L2.89888 21H21.1012L19.3817 15.1535C19.0062 13.8768 17.8344 13 16.5036 13H7.49653ZM6.53717 15.7178C6.66234 15.2923 7.05292 15 7.49653 15H16.5036C16.9472 15 17.3378 15.2923 17.4629 15.7178L18.4283 19H5.57182L6.53717 15.7178Z" })] }), e3 = ({ children: e, containerClassName: r, emphasis: n, shape: i, size: l }) => {
  const c = typeof l == "number", u = c ? {
    height: l,
    padding: l / 2,
    width: l
  } : void 0, d = c ? void 0 : l;
  return $.jsx("div", { className: at({
    class: r,
    emphasis: n,
    shape: i,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: u, children: e });
}, t3 = ({ "aria-label": e, className: r, color: n, contained: i, containerClassName: l, emphasis: c = "regular", shape: u = "circle", size: d = "medium", svgClassName: h, ...p }) => {
  const b = !e, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, w = v ? void 0 : d, k = i ? e3 : _.Fragment, y = i ? { containerClassName: l, emphasis: c, shape: u, size: d } : {};
  return $.jsx(k, { ...y, children: $.jsx("span", { ...p, className: yt({ class: r, size: w }), "data-namespace": "@paloma/icons", "data-size": d, id: "user-id", style: { color: n, ...g }, children: $.jsx(J5, { "aria-hidden": b, "aria-label": e, className: nt({ class: h, size: w }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "user-svg-id", style: { fill: r3, ...g } }) }) });
}, r3 = "currentColor", n3 = Symbol("default");
function e0({ values: e, children: r }) {
  for (let [n, i] of e)
    r = /* @__PURE__ */ S.createElement(n.Provider, {
      value: i
    }, r);
  return r;
}
function ql(e) {
  let { className: r, style: n, children: i, defaultClassName: l, defaultChildren: c, defaultStyle: u, values: d, render: h } = e;
  return _.useMemo(() => {
    let p, b, v;
    return typeof r == "function" ? p = r({
      ...d,
      defaultClassName: l
    }) : p = r, typeof n == "function" ? b = n({
      ...d,
      defaultStyle: u || {}
    }) : b = n, typeof i == "function" ? v = i({
      ...d,
      defaultChildren: c
    }) : i == null ? v = c : v = i, {
      className: p ?? l,
      style: b || u ? {
        ...u,
        ...b
      } : void 0,
      children: v ?? c,
      "data-rac": "",
      render: h ? (g) => h(g, d) : void 0
    };
  }, [
    r,
    n,
    i,
    l,
    c,
    u,
    d,
    h
  ]);
}
function t0(e, r) {
  let n = _.useContext(e);
  if (r === null)
    return null;
  if (n && typeof n == "object" && "slots" in n && n.slots) {
    let i = r || n3;
    if (!n.slots[i]) {
      let l = new Intl.ListFormat().format(Object.keys(n.slots).map((u) => `"${u}"`)), c = r ? `Invalid slot "${r}".` : "A slot prop is required.";
      throw new Error(`${c} Valid slot names are ${l}.`);
    }
    return n.slots[i];
  }
  return n;
}
function a3(e, r, n) {
  let i = t0(n, e.slot) || {}, { ref: l, ...c } = i, u = Bl(_.useMemo(() => vr(r, l), [
    r,
    l
  ])), d = Ne(c, e);
  return "style" in c && c.style && "style" in e && e.style && (typeof c.style == "function" || typeof e.style == "function" ? d.style = (h) => {
    let p = typeof c.style == "function" ? c.style(h) : c.style, b = {
      ...h.defaultStyle,
      ...p
    }, v = typeof e.style == "function" ? e.style({
      ...h,
      defaultStyle: b
    }) : e.style;
    return {
      ...b,
      ...v
    };
  } : d.style = {
    ...c.style,
    ...e.style
  }), [
    d,
    u
  ];
}
function o3(e, r, n) {
  let { render: i, ...l } = r, c = _.useRef(null), u = _.useMemo(() => vr(n, c), [
    n,
    c
  ]);
  or(() => {
  }, [
    e,
    i
  ]);
  let d = {
    ...l,
    ref: u
  };
  return i ? i(d, void 0) : /* @__PURE__ */ S.createElement(e, d);
}
const Nm = {}, No = new Proxy({}, {
  get(e, r) {
    if (typeof r != "string") return;
    let n = Nm[r];
    return n || (n = /* @__PURE__ */ _.forwardRef(o3.bind(null, r)), Nm[r] = n), n;
  }
}), r0 = {
  CollectionRoot({ collection: e, renderDropIndicator: r }) {
    return Am(e, null, r);
  },
  CollectionBranch({ collection: e, parent: r, renderDropIndicator: n }) {
    return Am(e, r, n);
  }
};
function Am(e, r, n) {
  return Kg({
    items: r ? e.getChildren(r.key) : e,
    dependencies: [
      n
    ],
    children(i) {
      if (i.type === "content") return /* @__PURE__ */ S.createElement(S.Fragment, null);
      let l = i.render(i);
      return !n || i.type !== "item" ? l : /* @__PURE__ */ S.createElement(S.Fragment, null, n({
        type: "item",
        key: i.key,
        dropPosition: "before"
      }), l, i3(e, i, n));
    }
  });
}
function i3(e, r, n) {
  let i = r.key, l = e.getKeyAfter(i), c = l != null ? e.getItem(l) : null;
  for (; c != null && c.type !== "item"; )
    l = e.getKeyAfter(c.key), c = l != null ? e.getItem(l) : null;
  let u = r.nextKey != null ? e.getItem(r.nextKey) : null;
  for (; u != null && u.type !== "item"; ) u = u.nextKey != null ? e.getItem(u.nextKey) : null;
  let d = [];
  if (u == null) {
    let h = r;
    for (; h?.type === "item" && (!c || h.parentKey !== c.parentKey && c.level < h.level); ) {
      let p = n({
        type: "item",
        key: h.key,
        dropPosition: "after"
      });
      /* @__PURE__ */ _.isValidElement(p) && d.push(/* @__PURE__ */ _.cloneElement(p, {
        key: `${h.key}-after`
      })), h = h.parentKey != null ? e.getItem(h.parentKey) : null;
    }
  }
  return d;
}
const n0 = /* @__PURE__ */ _.createContext(r0);
function l3(e) {
  return _.useMemo(() => e != null ? /* @__PURE__ */ new Set([
    e
  ]) : null, [
    e
  ]);
}
const s3 = /* @__PURE__ */ _.createContext(null);
function c3(e) {
  let r = _.useRef({});
  return /* @__PURE__ */ S.createElement(s3.Provider, {
    value: r
  }, e.children);
}
const u3 = /* @__PURE__ */ _.createContext({
  isSelected: !1
});
class Im {
  constructor(r) {
    this.keyMap = /* @__PURE__ */ new Map(), this.firstKey = null, this.lastKey = null, this.iterable = r;
    let n = (u) => {
      if (this.keyMap.set(u.key, u), u.childNodes && u.type === "section") for (let d of u.childNodes) n(d);
    };
    for (let u of r) n(u);
    let i = null, l = 0, c = 0;
    for (let [u, d] of this.keyMap)
      i ? (i.nextKey = u, d.prevKey = i.key) : (this.firstKey = u, d.prevKey = void 0), d.type === "item" && (d.index = l++), (d.type === "section" || d.type === "item") && c++, i = d, i.nextKey = void 0;
    this._size = c, this.lastKey = i?.key ?? null;
  }
  *[Symbol.iterator]() {
    yield* this.iterable;
  }
  get size() {
    return this._size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(r) {
    let n = this.keyMap.get(r);
    return n ? n.prevKey ?? null : null;
  }
  getKeyAfter(r) {
    let n = this.keyMap.get(r);
    return n ? n.nextKey ?? null : null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    return this.lastKey;
  }
  getItem(r) {
    return this.keyMap.get(r) ?? null;
  }
  at(r) {
    const n = [
      ...this.getKeys()
    ];
    return this.getItem(n[r]);
  }
  getChildren(r) {
    return this.keyMap.get(r)?.childNodes || [];
  }
}
class rr extends Set {
  constructor(r, n, i) {
    super(r), r instanceof rr ? (this.anchorKey = n ?? r.anchorKey, this.currentKey = i ?? r.currentKey) : (this.anchorKey = n ?? null, this.currentKey = i ?? null);
  }
}
function d3(e, r) {
  if (e.size !== r.size) return !1;
  for (let n of e)
    if (!r.has(n)) return !1;
  return !0;
}
function f3(e) {
  let { selectionMode: r = "none", disallowEmptySelection: n = !1, allowDuplicateSelectionEvents: i, selectionBehavior: l = "toggle", disabledBehavior: c = "all" } = e, u = _.useRef(!1), [, d] = _.useState(!1), h = _.useRef(null), p = _.useRef(null), [, b] = _.useState(null), v = _.useMemo(() => Rm(e.selectedKeys), [
    e.selectedKeys
  ]), g = _.useMemo(() => Rm(e.defaultSelectedKeys, new rr()), [
    e.defaultSelectedKeys
  ]), [w, k] = wv(v, g, e.onSelectionChange), y = _.useMemo(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [
    e.disabledKeys
  ]), [C, I] = _.useState(l);
  l === "replace" && C === "toggle" && typeof w == "object" && w.size === 0 && I("replace");
  let F = _.useRef(l);
  return _.useEffect(() => {
    l !== F.current && (I(l), F.current = l);
  }, [
    l
  ]), {
    selectionMode: r,
    disallowEmptySelection: n,
    selectionBehavior: C,
    setSelectionBehavior: I,
    get isFocused() {
      return u.current;
    },
    setFocused(D) {
      u.current = D, d(D);
    },
    get focusedKey() {
      return h.current;
    },
    get childFocusStrategy() {
      return p.current;
    },
    setFocusedKey(D, W = "first") {
      h.current = D, p.current = W, b(D);
    },
    selectedKeys: w,
    setSelectedKeys(D) {
      (i || !d3(D, w)) && k(D);
    },
    disabledKeys: y,
    disabledBehavior: c
  };
}
function Rm(e, r) {
  return e ? e === "all" ? "all" : new rr(e) : r;
}
class _d {
  constructor(r, n, i) {
    this.collection = r, this.state = n, this.allowsCellSelection = i?.allowsCellSelection ?? !1, this._isSelectAll = null, this.layoutDelegate = i?.layoutDelegate || null, this.fullCollection = i?.fullCollection || null;
  }
  /**
  * The type of selection that is allowed in the collection.
  */
  get selectionMode() {
    return this.state.selectionMode;
  }
  /**
  * Whether the collection allows empty selection.
  */
  get disallowEmptySelection() {
    return this.state.disallowEmptySelection;
  }
  /**
  * The selection behavior for the collection.
  */
  get selectionBehavior() {
    return this.state.selectionBehavior;
  }
  /**
  * Sets the selection behavior for the collection.
  */
  setSelectionBehavior(r) {
    this.state.setSelectionBehavior(r);
  }
  /**
  * Whether the collection is currently focused.
  */
  get isFocused() {
    return this.state.isFocused;
  }
  /**
  * Sets whether the collection is focused.
  */
  setFocused(r) {
    this.state.setFocused(r);
  }
  /**
  * The current focused key in the collection.
  */
  get focusedKey() {
    return this.state.focusedKey;
  }
  /** Whether the first or last child of the focused key should receive focus. */
  get childFocusStrategy() {
    return this.state.childFocusStrategy;
  }
  /**
  * Sets the focused key.
  */
  setFocusedKey(r, n) {
    (r == null || this.collection.getItem(r)) && this.state.setFocusedKey(r, n);
  }
  /**
  * The currently selected keys in the collection.
  */
  get selectedKeys() {
    return this.state.selectedKeys === "all" ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys;
  }
  /**
  * The raw selection value for the collection.
  * Either 'all' for select all, or a set of keys.
  */
  get rawSelection() {
    return this.state.selectedKeys;
  }
  /**
  * Returns whether a key is selected.
  */
  isSelected(r) {
    if (this.state.selectionMode === "none") return !1;
    let n = this.getKey(r);
    return n == null ? !1 : this.state.selectedKeys === "all" ? this.canSelectItem(n) : this.state.selectedKeys.has(n);
  }
  /**
  * Whether the selection is empty.
  */
  get isEmpty() {
    return this.state.selectedKeys !== "all" && this.state.selectedKeys.size === 0;
  }
  /**
  * Whether all items in the collection are selected.
  */
  get isSelectAll() {
    if (this.isEmpty) return !1;
    if (this.state.selectedKeys === "all") return !0;
    if (this._isSelectAll != null) return this._isSelectAll;
    let r = this.getSelectAllKeys(), n = this.state.selectedKeys;
    return this._isSelectAll = r.every((i) => n.has(i)), this._isSelectAll;
  }
  get firstSelectedKey() {
    let r = null;
    for (let n of this.state.selectedKeys) {
      let i = this.collection.getItem(n);
      (!r || i && du(this.collection, i, r) < 0) && (r = i);
    }
    return r?.key ?? null;
  }
  get lastSelectedKey() {
    let r = null;
    for (let n of this.state.selectedKeys) {
      let i = this.collection.getItem(n);
      (!r || i && du(this.collection, i, r) > 0) && (r = i);
    }
    return r?.key ?? null;
  }
  get disabledKeys() {
    return this.state.disabledKeys;
  }
  get disabledBehavior() {
    return this.state.disabledBehavior;
  }
  /**
  * Extends the selection to the given key.
  */
  extendSelection(r) {
    if (this.selectionMode === "none") return;
    if (this.selectionMode === "single") {
      this.replaceSelection(r);
      return;
    }
    let n = this.getKey(r);
    if (n == null) return;
    let i;
    if (this.state.selectedKeys === "all") i = new rr([
      n
    ], n, n);
    else {
      let l = this.state.selectedKeys, c = l.anchorKey ?? n;
      i = new rr(l, c, n);
      for (let u of this.getKeyRange(c, l.currentKey ?? n)) i.delete(u);
      for (let u of this.getKeyRange(n, c)) this.canSelectItem(u) && i.add(u);
    }
    this.state.setSelectedKeys(i);
  }
  getKeyRange(r, n) {
    let i = this.collection.getItem(r), l = this.collection.getItem(n);
    return i && l ? du(this.collection, i, l) <= 0 ? this.getKeyRangeInternal(r, n) : this.getKeyRangeInternal(n, r) : [];
  }
  getKeyRangeInternal(r, n) {
    if (this.layoutDelegate?.getKeyRange) return this.layoutDelegate.getKeyRange(r, n);
    let i = [], l = r;
    for (; l != null; ) {
      let c = this.collection.getItem(l);
      if (c && (c.type === "item" || c.type === "cell" && this.allowsCellSelection) && i.push(l), l === n) return i;
      l = this.collection.getKeyAfter(l);
    }
    return [];
  }
  getKey(r) {
    let n = this.collection.getItem(r);
    if (!n || n.type === "cell" && this.allowsCellSelection) return r;
    for (; n && n.type !== "item" && n.parentKey != null; ) n = this.collection.getItem(n.parentKey);
    return !n || n.type !== "item" ? null : n.key;
  }
  /**
  * Toggles whether the given key is selected.
  */
  toggleSelection(r) {
    if (this.selectionMode === "none") return;
    if (this.selectionMode === "single" && !this.isSelected(r)) {
      this.replaceSelection(r);
      return;
    }
    let n = this.getKey(r);
    if (n == null) return;
    let i = new rr(this.state.selectedKeys === "all" ? this.getSelectAllKeys() : this.state.selectedKeys);
    i.has(n) ? i.delete(n) : this.canSelectItem(n) && (i.add(n), i.anchorKey = n, i.currentKey = n), !(this.disallowEmptySelection && i.size === 0) && this.state.setSelectedKeys(i);
  }
  /**
  * Replaces the selection with only the given key.
  */
  replaceSelection(r) {
    if (this.selectionMode === "none") return;
    let n = this.getKey(r);
    if (n == null) return;
    let i = this.canSelectItem(n) ? new rr([
      n
    ], n, n) : new rr();
    this.state.setSelectedKeys(i);
  }
  /**
  * Replaces the selection with the given keys.
  */
  setSelectedKeys(r) {
    if (this.selectionMode === "none") return;
    let n = new rr();
    for (let i of r) {
      let l = this.getKey(i);
      if (l != null && (n.add(l), this.selectionMode === "single"))
        break;
    }
    this.state.setSelectedKeys(n);
  }
  getSelectAllKeys() {
    let r = this.fullCollection ?? this.collection, n = [], i = (l) => {
      for (; l != null; ) {
        if (this.canSelectItemIn(l, r)) {
          let c = r.getItem(l);
          c?.type === "item" && n.push(l), c?.hasChildNodes && (this.allowsCellSelection || c.type !== "item") && i(Ex(_x(c, r))?.key ?? null);
        }
        l = r.getKeyAfter(l);
      }
    };
    return i(r.getFirstKey()), n;
  }
  /**
  * Selects all items in the collection.
  */
  selectAll() {
    !this.isSelectAll && this.selectionMode === "multiple" && this.state.setSelectedKeys("all");
  }
  /**
  * Removes all keys from the selection.
  */
  clearSelection() {
    !this.disallowEmptySelection && (this.state.selectedKeys === "all" || this.state.selectedKeys.size > 0) && this.state.setSelectedKeys(new rr());
  }
  /**
  * Toggles between select all and an empty selection.
  */
  toggleSelectAll() {
    this.isSelectAll ? this.clearSelection() : this.selectAll();
  }
  select(r, n) {
    this.selectionMode !== "none" && (this.selectionMode === "single" ? this.isSelected(r) && !this.disallowEmptySelection ? this.toggleSelection(r) : this.replaceSelection(r) : this.selectionBehavior === "toggle" || n && (n.pointerType === "touch" || n.pointerType === "virtual") ? this.toggleSelection(r) : this.replaceSelection(r));
  }
  /**
  * Returns whether the current selection is equal to the given selection.
  */
  isSelectionEqual(r) {
    if (r === this.state.selectedKeys) return !0;
    let n = this.selectedKeys;
    if (r.size !== n.size) return !1;
    for (let i of r)
      if (!n.has(i)) return !1;
    for (let i of n)
      if (!r.has(i)) return !1;
    return !0;
  }
  canSelectItem(r) {
    return this.canSelectItemIn(r, this.collection);
  }
  canSelectItemIn(r, n) {
    if (this.state.selectionMode === "none" || this.state.disabledKeys.has(r)) return !1;
    let i = n.getItem(r);
    return !(!i || i?.props?.isDisabled || i.type === "cell" && !this.allowsCellSelection);
  }
  isDisabled(r) {
    let n = this.collection.getItem(r);
    return this.state.disabledBehavior === "all" && (this.state.disabledKeys.has(r) || !!n?.props?.isDisabled) && n?.props?.disabledBehavior !== "selection";
  }
  isLink(r) {
    return !!this.collection.getItem(r)?.props?.href;
  }
  getItemProps(r) {
    return this.collection.getItem(r)?.props;
  }
  withCollection(r) {
    return new _d(r, this.state, {
      allowsCellSelection: this.allowsCellSelection,
      layoutDelegate: this.layoutDelegate || void 0,
      fullCollection: this.fullCollection ?? this.collection
    });
  }
}
class p3 {
  build(r, n) {
    return this.context = n, Lm(() => this.iterateCollection(r));
  }
  *iterateCollection(r) {
    let { children: n, items: i } = r;
    if (S.isValidElement(n) && n.type === S.Fragment) yield* this.iterateCollection({
      children: n.props.children,
      items: i
    });
    else if (typeof n == "function") {
      if (!i) throw new Error("props.children was a function but props.items is missing");
      let l = 0;
      for (let c of i)
        yield* this.getFullNode({
          value: c,
          index: l
        }, {
          renderer: n
        }), l++;
    } else {
      let l = [];
      S.Children.forEach(n, (u) => {
        u && l.push(u);
      });
      let c = 0;
      for (let u of l) {
        let d = this.getFullNode({
          element: u,
          index: c
        }, {});
        for (let h of d)
          c++, yield h;
      }
    }
  }
  getKey(r, n, i, l) {
    if (r.key != null) return r.key;
    if (n.type === "cell" && n.key != null) return `${l}${n.key}`;
    let c = n.value;
    if (c != null) {
      let u = c.key ?? c.id;
      if (u == null) throw new Error("No key found for item");
      return u;
    }
    return l ? `${l}.${n.index}` : `$.${n.index}`;
  }
  getChildState(r, n) {
    return {
      renderer: n.renderer || r.renderer
    };
  }
  *getFullNode(r, n, i, l) {
    if (S.isValidElement(r.element) && r.element.type === S.Fragment) {
      let h = [];
      S.Children.forEach(r.element.props.children, (b) => {
        h.push(b);
      });
      let p = r.index ?? 0;
      for (const b of h) yield* this.getFullNode({
        element: b,
        index: p++
      }, n, i, l);
      return;
    }
    let c = r.element;
    if (!c && r.value && n && n.renderer) {
      let h = this.cache.get(r.value);
      if (h && (!h.shouldInvalidate || !h.shouldInvalidate(this.context))) {
        h.index = r.index, h.parentKey = l ? l.key : null, yield h;
        return;
      }
      c = n.renderer(r.value);
    }
    if (S.isValidElement(c)) {
      let h = c.type;
      if (typeof h != "function" && typeof h.getCollectionNode != "function") {
        let g = c.type;
        throw new Error(`Unknown element <${g}> in collection.`);
      }
      let p = h.getCollectionNode(c.props, this.context), b = r.index ?? 0, v = p.next();
      for (; !v.done && v.value; ) {
        let g = v.value;
        r.index = b;
        let w = g.key ?? null;
        w == null && (w = g.element ? null : this.getKey(c, r, n, i));
        let y = [
          ...this.getFullNode({
            ...g,
            key: w,
            index: b,
            wrapper: h3(r.wrapper, g.wrapper)
          }, this.getChildState(n, g), i ? `${i}${c.key}` : c.key, l)
        ];
        for (let C of y) {
          if (C.value = g.value ?? r.value ?? null, C.value && this.cache.set(C.value, C), r.type && C.type !== r.type) throw new Error(`Unsupported type <${gu(C.type)}> in <${gu(l?.type ?? "unknown parent type")}>. Only <${gu(r.type)}> is supported.`);
          b++, yield C;
        }
        v = p.next(y);
      }
      return;
    }
    if (r.key == null || r.type == null) return;
    let u = this, d = {
      type: r.type,
      props: r.props,
      key: r.key,
      parentKey: l ? l.key : null,
      value: r.value ?? null,
      level: (l?.level ?? 0) + (l?.type === "item" ? 1 : 0),
      index: r.index,
      rendered: r.rendered,
      textValue: r.textValue ?? "",
      "aria-label": r["aria-label"],
      wrapper: r.wrapper,
      shouldInvalidate: r.shouldInvalidate,
      hasChildNodes: r.hasChildNodes || !1,
      childNodes: Lm(function* () {
        if (!r.hasChildNodes || !r.childNodes) return;
        let h = 0;
        for (let p of r.childNodes()) {
          p.key != null && (p.key = `${d.key}${p.key}`);
          let b = u.getFullNode({
            ...p,
            index: h
          }, u.getChildState(n, p), d.key, d);
          for (let v of b)
            h++, yield v;
        }
      })
    };
    yield d;
  }
  constructor() {
    this.cache = /* @__PURE__ */ new WeakMap();
  }
}
function Lm(e) {
  let r = [], n = null;
  return {
    *[Symbol.iterator]() {
      for (let i of r) yield i;
      n || (n = e());
      for (let i of n)
        r.push(i), yield i;
    }
  };
}
function h3(e, r) {
  if (e && r) return (n) => e(r(n));
  if (e) return e;
  if (r) return r;
}
function gu(e) {
  return e[0].toUpperCase() + e.slice(1);
}
function m3(e, r, n) {
  let i = _.useMemo(() => new p3(), []), { children: l, items: c, collection: u } = e;
  return _.useMemo(() => {
    if (u) return u;
    let h = i.build({
      children: l,
      items: c
    }, n);
    return r(h);
  }, [
    i,
    l,
    c,
    u,
    n,
    r
  ]);
}
function g3(e) {
  let { filter: r, layoutDelegate: n } = e, i = f3(e), l = _.useMemo(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [
    e.disabledKeys
  ]), c = _.useCallback((p) => r ? new Im(r(p)) : new Im(p), [
    r
  ]), u = _.useMemo(() => ({
    suppressTextValueWarning: e.suppressTextValueWarning
  }), [
    e.suppressTextValueWarning
  ]), d = m3(e, c, u), h = _.useMemo(() => new _d(d, i, {
    layoutDelegate: n
  }), [
    d,
    i,
    n
  ]);
  return v3(d, h), {
    collection: d,
    disabledKeys: l,
    selectionManager: h
  };
}
function v3(e, r) {
  const n = _.useRef(null);
  _.useEffect(() => {
    if (r.focusedKey != null && !e.getItem(r.focusedKey) && n.current) {
      let i = n.current.getKeyAfter(r.focusedKey), l = null;
      for (; i != null; ) {
        let c = e.getItem(i);
        if (c && c.type === "item" && !r.isDisabled(i)) {
          l = i;
          break;
        }
        i = n.current.getKeyAfter(i);
      }
      if (l == null)
        for (i = n.current.getKeyBefore(r.focusedKey); i != null; ) {
          let c = e.getItem(i);
          if (c && c.type === "item" && !r.isDisabled(i)) {
            l = i;
            break;
          }
          i = n.current.getKeyBefore(i);
        }
      r.setFocusedKey(l);
    }
    n.current = e;
  }, [
    e,
    r
  ]);
}
function b3(e) {
  let [r, n] = wv(e.selectedKey, e.defaultSelectedKey ?? null, e.onSelectionChange), i = _.useMemo(() => r != null ? [
    r
  ] : [], [
    r
  ]), { collection: l, disabledKeys: c, selectionManager: u } = g3({
    ...e,
    selectionMode: "single",
    disallowEmptySelection: !0,
    allowDuplicateSelectionEvents: !0,
    selectedKeys: i,
    onSelectionChange: (h) => {
      if (h === "all") return;
      let p = h.values().next().value ?? null;
      p === r && e.onSelectionChange && e.onSelectionChange(p), n(p);
    }
  }), d = r != null ? l.getItem(r) : null;
  return {
    collection: l,
    disabledKeys: c,
    selectionManager: u,
    selectedKey: r,
    setSelectedKey: n,
    selectedItem: d
  };
}
function y3(e) {
  let r = b3({
    ...e,
    onSelectionChange: e.onSelectionChange ? (u) => {
      u != null && e.onSelectionChange?.(u);
    } : void 0,
    suppressTextValueWarning: !0,
    defaultSelectedKey: e.defaultSelectedKey ?? Mm(e.collection, e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set()) ?? void 0
  }), { selectionManager: n, collection: i, selectedKey: l } = r, c = _.useRef(l);
  return _.useEffect(() => {
    let u = l;
    e.selectedKey == null && (n.isEmpty || u == null || !i.getItem(u)) && (u = Mm(i, r.disabledKeys), u != null && n.setSelectedKeys([
      u
    ])), (u != null && n.focusedKey == null || !n.isFocused && u !== c.current) && n.setFocusedKey(u), c.current = u;
  }), {
    ...r,
    isDisabled: e.isDisabled || !1
  };
}
function Mm(e, r) {
  let n = null;
  if (e) {
    for (n = e.getFirstKey(); n != null && (r.has(n) || e.getItem(n)?.props?.isDisabled) && n !== e.getLastKey(); ) n = e.getKeyAfter(n);
    n != null && (r.has(n) || e.getItem(n)?.props?.isDisabled) && n === e.getLastKey() && (n = e.getFirstKey());
  }
  return n;
}
const Ql = /* @__PURE__ */ _.createContext(null), Fn = /* @__PURE__ */ _.createContext(null), w3 = /* @__PURE__ */ _.forwardRef(function(r, n) {
  [r, n] = a3(r, n, Ql);
  let { children: i, orientation: l = "horizontal" } = r;
  return i = _.useMemo(() => typeof i == "function" ? i({
    orientation: l,
    defaultChildren: null
  }) : i, [
    i,
    l
  ]), /* @__PURE__ */ S.createElement(zw, {
    content: i
  }, (c) => /* @__PURE__ */ S.createElement(x3, {
    props: r,
    collection: c,
    tabsRef: n
  }));
});
function x3({ props: e, tabsRef: r, collection: n }) {
  let { orientation: i = "horizontal" } = e, l = y3({
    ...e,
    collection: n,
    children: void 0
  }), { focusProps: c, isFocused: u, isFocusVisible: d } = Wl({
    within: !0
  }), h = _.useMemo(() => ({
    orientation: i,
    isFocusWithin: u,
    isFocusVisible: d
  }), [
    i,
    u,
    d
  ]), p = ql({
    ...e,
    defaultClassName: "react-aria-Tabs",
    values: h
  }), b = Tn(e, {
    global: !0
  });
  return /* @__PURE__ */ S.createElement(No.div, {
    ...Ne(b, p, c),
    ref: r,
    slot: e.slot || void 0,
    "data-focused": u || void 0,
    "data-orientation": i,
    "data-focus-visible": d || void 0,
    "data-disabled": l.isDisabled || void 0
  }, /* @__PURE__ */ S.createElement(e0, {
    values: [
      [
        Ql,
        e
      ],
      [
        Fn,
        l
      ]
    ]
  }, p.children));
}
const k3 = /* @__PURE__ */ _.forwardRef(function(r, n) {
  return _.useContext(Fn) ? /* @__PURE__ */ S.createElement(S3, {
    props: r,
    forwardedRef: n
  }) : /* @__PURE__ */ S.createElement(Dw, r);
});
function S3({ props: e, forwardedRef: r }) {
  let n = _.useContext(Fn), { CollectionRoot: i } = _.useContext(n0), { orientation: l = "horizontal", keyboardActivation: c = "automatic" } = t0(Ql), u = Bl(r), { tabListProps: d } = Rx({
    ...e,
    orientation: l,
    keyboardActivation: c
  }, n, u), h = ql({
    ...e,
    children: null,
    defaultClassName: "react-aria-TabList",
    values: {
      orientation: l,
      state: n
    }
  }), p = Tn(e, {
    global: !0
  });
  return delete p.id, /* @__PURE__ */ S.createElement(No.div, {
    ...Ne(p, h, d),
    ref: u,
    "data-orientation": l || void 0
  }, /* @__PURE__ */ S.createElement(c3, null, /* @__PURE__ */ S.createElement(i, {
    collection: n.collection,
    persistedKeys: l3(n.selectionManager.focusedKey)
  })));
}
class C3 extends Bo {
  static {
    this.type = "item";
  }
}
const _3 = /* @__PURE__ */ Mw(C3, (e, r, n) => {
  let i = _.useContext(Fn), l = Bl(r), { tabProps: c, isSelected: u, isDisabled: d, isPressed: h } = Ax({
    key: n.key,
    ...e
  }, i, l), { focusProps: p, isFocused: b, isFocusVisible: v } = Wl(), { hoverProps: g, isHovered: w } = zx({
    isDisabled: d,
    onHoverStart: e.onHoverStart,
    onHoverEnd: e.onHoverEnd,
    onHoverChange: e.onHoverChange
  }), k = ql({
    ...e,
    id: void 0,
    children: n.rendered,
    defaultClassName: "react-aria-Tab",
    values: {
      isSelected: u,
      isDisabled: d,
      isFocused: b,
      isFocusVisible: v,
      isPressed: h,
      isHovered: w
    }
  }), y = n.props.href ? No.a : No.div, C = Tn(e, {
    global: !0
  });
  return delete C.id, delete C.onClick, /* @__PURE__ */ S.createElement(y, {
    ...Ne(C, k, c, p, g),
    ref: l,
    "data-selected": u || void 0,
    "data-disabled": d || void 0,
    "data-focused": b || void 0,
    "data-focus-visible": v || void 0,
    "data-pressed": h || void 0,
    "data-hovered": w || void 0
  }, /* @__PURE__ */ S.createElement(u3.Provider, {
    value: {
      isSelected: u
    }
  }, k.children));
}), E3 = /* @__PURE__ */ Ew(function(r, n) {
  const i = _.useContext(Fn);
  let l = Bl(n), c = i.selectedKey === r.id, [u, d] = _.useState(i.selectedKey != null ? c : null);
  u == null && i.selectedKey != null ? d(c) : !c && u && d(!1);
  let h = j2(l, c);
  return !c && !r.shouldForceMount && !h ? null : /* @__PURE__ */ S.createElement($3, {
    ...r,
    tabPanelRef: l,
    isInitiallySelected: u || !1,
    isExiting: h
  });
});
function $3(e) {
  let r = _.useContext(Fn), { id: n, tabPanelRef: i, isInitiallySelected: l, isExiting: c, ...u } = e, { tabPanelProps: d } = Lx(e, r, i), { focusProps: h, isFocused: p, isFocusVisible: b } = Wl(), v = r.selectedKey === e.id, g = M2(i) && !l, w = ql({
    ...e,
    defaultClassName: "react-aria-TabPanel",
    values: {
      isFocused: p,
      isFocusVisible: b,
      // @ts-ignore - compatibility with React < 19
      isInert: Tm(!v),
      isEntering: g,
      isExiting: c,
      state: r
    }
  }), k = Tn(u, {
    global: !0
  });
  delete k.id;
  let y = v ? Ne(k, d, h, w) : Ne(k, w);
  return /* @__PURE__ */ S.createElement(No.div, {
    ...y,
    ref: i,
    "data-focused": p || void 0,
    "data-focus-visible": b || void 0,
    // @ts-ignore
    inert: Tm(!v || e.inert),
    "data-inert": v ? void 0 : "true",
    "data-entering": g || void 0,
    "data-exiting": c || void 0
  }, /* @__PURE__ */ S.createElement(e0, {
    values: [
      [
        Ql,
        null
      ],
      [
        Fn,
        null
      ]
    ]
  }, /* @__PURE__ */ S.createElement(n0.Provider, {
    value: r0
  }, w.children)));
}
var Ed = Go(), Se = (e) => Wo(e, Ed), $d = Go();
Se.write = (e) => Wo(e, $d);
var Xl = Go();
Se.onStart = (e) => Wo(e, Xl);
var Pd = Go();
Se.onFrame = (e) => Wo(e, Pd);
var Fd = Go();
Se.onFinish = (e) => Wo(e, Fd);
var pa = [];
Se.setTimeout = (e, r) => {
  const n = Se.now() + r, i = () => {
    const c = pa.findIndex((u) => u.cancel == i);
    ~c && pa.splice(c, 1), ln -= ~c ? 1 : 0;
  }, l = { time: n, handler: e, cancel: i };
  return pa.splice(a0(n), 0, l), ln += 1, o0(), l;
};
var a0 = (e) => ~(~pa.findIndex((r) => r.time > e) || ~pa.length);
Se.cancel = (e) => {
  Xl.delete(e), Pd.delete(e), Fd.delete(e), Ed.delete(e), $d.delete(e);
};
Se.sync = (e) => {
  Yu = !0, Se.batchedUpdates(e), Yu = !1;
};
Se.throttle = (e) => {
  let r;
  function n() {
    try {
      e(...r);
    } finally {
      r = null;
    }
  }
  function i(...l) {
    r = l, Se.onStart(n);
  }
  return i.handler = e, i.cancel = () => {
    Xl.delete(n), r = null;
  }, i;
};
var zd = typeof window < "u" ? window.requestAnimationFrame : (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  (() => {
  })
);
Se.use = (e) => zd = e;
Se.now = typeof performance < "u" ? () => performance.now() : Date.now;
Se.batchedUpdates = (e) => e();
Se.catch = console.error;
Se.frameLoop = "always";
Se.advance = () => {
  Se.frameLoop !== "demand" ? console.warn(
    "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
  ) : l0();
};
var on = -1, ln = 0, Yu = !1;
function Wo(e, r) {
  Yu ? (r.delete(e), e(0)) : (r.add(e), o0());
}
function o0() {
  on < 0 && (on = 0, Se.frameLoop !== "demand" && zd(i0));
}
function P3() {
  on = -1;
}
function i0() {
  ~on && (zd(i0), Se.batchedUpdates(l0));
}
function l0() {
  const e = on;
  on = Se.now();
  const r = a0(on);
  if (r && (s0(pa.splice(0, r), (n) => n.handler()), ln -= r), !ln) {
    P3();
    return;
  }
  Xl.flush(), Ed.flush(e ? Math.min(64, on - e) : 16.667), Pd.flush(), $d.flush(), Fd.flush();
}
function Go() {
  let e = /* @__PURE__ */ new Set(), r = e;
  return {
    add(n) {
      ln += r == e && !e.has(n) ? 1 : 0, e.add(n);
    },
    delete(n) {
      return ln -= r == e && e.has(n) ? 1 : 0, e.delete(n);
    },
    flush(n) {
      r.size && (e = /* @__PURE__ */ new Set(), ln -= r.size, s0(r, (i) => i(n) && e.add(i)), ln += e.size, r = e);
    }
  };
}
function s0(e, r) {
  e.forEach((n) => {
    try {
      r(n);
    } catch (i) {
      Se.catch(i);
    }
  });
}
var F3 = Object.defineProperty, z3 = (e, r) => {
  for (var n in r)
    F3(e, n, { get: r[n], enumerable: !0 });
}, lr = {};
z3(lr, {
  assign: () => N3,
  colors: () => sn,
  createStringInterpolator: () => Nd,
  skipAnimation: () => u0,
  to: () => c0,
  willAdvance: () => Ad
});
function qu() {
}
var T3 = (e, r, n) => Object.defineProperty(e, r, { value: n, writable: !0, configurable: !0 }), te = {
  arr: Array.isArray,
  obj: (e) => !!e && e.constructor.name === "Object",
  fun: (e) => typeof e == "function",
  str: (e) => typeof e == "string",
  num: (e) => typeof e == "number",
  und: (e) => e === void 0
};
function zr(e, r) {
  if (te.arr(e)) {
    if (!te.arr(r) || e.length !== r.length)
      return !1;
    for (let n = 0; n < e.length; n++)
      if (e[n] !== r[n])
        return !1;
    return !0;
  }
  return e === r;
}
var Fe = (e, r) => e.forEach(r);
function gr(e, r, n) {
  if (te.arr(e)) {
    for (let i = 0; i < e.length; i++)
      r.call(n, e[i], `${i}`);
    return;
  }
  for (const i in e)
    e.hasOwnProperty(i) && r.call(n, e[i], i);
}
var jt = (e) => te.und(e) ? [] : te.arr(e) ? e : [e];
function So(e, r) {
  if (e.size) {
    const n = Array.from(e);
    e.clear(), Fe(n, r);
  }
}
var xo = (e, ...r) => So(e, (n) => n(...r)), Td = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), Nd, c0, sn = null, u0 = !1, Ad = qu, N3 = (e) => {
  e.to && (c0 = e.to), e.now && (Se.now = e.now), e.colors !== void 0 && (sn = e.colors), e.skipAnimation != null && (u0 = e.skipAnimation), e.createStringInterpolator && (Nd = e.createStringInterpolator), e.requestAnimationFrame && Se.use(e.requestAnimationFrame), e.batchedUpdates && (Se.batchedUpdates = e.batchedUpdates), e.willAdvance && (Ad = e.willAdvance), e.frameLoop && (Se.frameLoop = e.frameLoop);
}, Co = /* @__PURE__ */ new Set(), Yt = [], vu = [], Tl = 0, Zl = {
  get idle() {
    return !Co.size && !Yt.length;
  },
  /** Advance the given animation on every frame until idle. */
  start(e) {
    Tl > e.priority ? (Co.add(e), Se.onStart(A3)) : (d0(e), Se(Qu));
  },
  /** Advance all animations by the given time. */
  advance: Qu,
  /** Call this when an animation's priority changes. */
  sort(e) {
    if (Tl)
      Se.onFrame(() => Zl.sort(e));
    else {
      const r = Yt.indexOf(e);
      ~r && (Yt.splice(r, 1), f0(e));
    }
  },
  /**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */
  clear() {
    Yt = [], Co.clear();
  }
};
function A3() {
  Co.forEach(d0), Co.clear(), Se(Qu);
}
function d0(e) {
  Yt.includes(e) || f0(e);
}
function f0(e) {
  Yt.splice(
    I3(Yt, (r) => r.priority > e.priority),
    0,
    e
  );
}
function Qu(e) {
  const r = vu;
  for (let n = 0; n < Yt.length; n++) {
    const i = Yt[n];
    Tl = i.priority, i.idle || (Ad(i), i.advance(e), i.idle || r.push(i));
  }
  return Tl = 0, vu = Yt, vu.length = 0, Yt = r, Yt.length > 0;
}
function I3(e, r) {
  const n = e.findIndex(r);
  return n < 0 ? e.length : n;
}
var R3 = {
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
}, ar = "[-+]?\\d*\\.?\\d+", Nl = ar + "%";
function Jl(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var L3 = new RegExp("rgb" + Jl(ar, ar, ar)), M3 = new RegExp("rgba" + Jl(ar, ar, ar, ar)), j3 = new RegExp("hsl" + Jl(ar, Nl, Nl)), D3 = new RegExp(
  "hsla" + Jl(ar, Nl, Nl, ar)
), K3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, O3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, V3 = /^#([0-9a-fA-F]{6})$/, B3 = /^#([0-9a-fA-F]{8})$/;
function H3(e) {
  let r;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (r = V3.exec(e)) ? parseInt(r[1] + "ff", 16) >>> 0 : sn && sn[e] !== void 0 ? sn[e] : (r = L3.exec(e)) ? (na(r[1]) << 24 | // r
  na(r[2]) << 16 | // g
  na(r[3]) << 8 | // b
  255) >>> // a
  0 : (r = M3.exec(e)) ? (na(r[1]) << 24 | // r
  na(r[2]) << 16 | // g
  na(r[3]) << 8 | // b
  Km(r[4])) >>> // a
  0 : (r = K3.exec(e)) ? parseInt(
    r[1] + r[1] + // r
    r[2] + r[2] + // g
    r[3] + r[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (r = B3.exec(e)) ? parseInt(r[1], 16) >>> 0 : (r = O3.exec(e)) ? parseInt(
    r[1] + r[1] + // r
    r[2] + r[2] + // g
    r[3] + r[3] + // b
    r[4] + r[4],
    // a
    16
  ) >>> 0 : (r = j3.exec(e)) ? (jm(
    Dm(r[1]),
    // h
    pl(r[2]),
    // s
    pl(r[3])
    // l
  ) | 255) >>> // a
  0 : (r = D3.exec(e)) ? (jm(
    Dm(r[1]),
    // h
    pl(r[2]),
    // s
    pl(r[3])
    // l
  ) | Km(r[4])) >>> // a
  0 : null;
}
function bu(e, r, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (r - e) * 6 * n : n < 1 / 2 ? r : n < 2 / 3 ? e + (r - e) * (2 / 3 - n) * 6 : e;
}
function jm(e, r, n) {
  const i = n < 0.5 ? n * (1 + r) : n + r - n * r, l = 2 * n - i, c = bu(l, i, e + 1 / 3), u = bu(l, i, e), d = bu(l, i, e - 1 / 3);
  return Math.round(c * 255) << 24 | Math.round(u * 255) << 16 | Math.round(d * 255) << 8;
}
function na(e) {
  const r = parseInt(e, 10);
  return r < 0 ? 0 : r > 255 ? 255 : r;
}
function Dm(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function Km(e) {
  const r = parseFloat(e);
  return r < 0 ? 0 : r > 1 ? 255 : Math.round(r * 255);
}
function pl(e) {
  const r = parseFloat(e);
  return r < 0 ? 0 : r > 100 ? 1 : r / 100;
}
function Om(e) {
  let r = H3(e);
  if (r === null)
    return e;
  r = r || 0;
  const n = (r & 4278190080) >>> 24, i = (r & 16711680) >>> 16, l = (r & 65280) >>> 8, c = (r & 255) / 255;
  return `rgba(${n}, ${i}, ${l}, ${c})`;
}
var Ao = (e, r, n) => {
  if (te.fun(e))
    return e;
  if (te.arr(e))
    return Ao({
      range: e,
      output: r,
      extrapolate: n
    });
  if (te.str(e.output[0]))
    return Nd(e);
  const i = e, l = i.output, c = i.range || [0, 1], u = i.extrapolateLeft || i.extrapolate || "extend", d = i.extrapolateRight || i.extrapolate || "extend", h = i.easing || ((p) => p);
  return (p) => {
    const b = W3(p, c);
    return U3(
      p,
      c[b],
      c[b + 1],
      l[b],
      l[b + 1],
      h,
      u,
      d,
      i.map
    );
  };
};
function U3(e, r, n, i, l, c, u, d, h) {
  let p = h ? h(e) : e;
  if (p < r) {
    if (u === "identity")
      return p;
    u === "clamp" && (p = r);
  }
  if (p > n) {
    if (d === "identity")
      return p;
    d === "clamp" && (p = n);
  }
  return i === l ? i : r === n ? e <= r ? i : l : (r === -1 / 0 ? p = -p : n === 1 / 0 ? p = p - r : p = (p - r) / (n - r), p = c(p), i === -1 / 0 ? p = -p : l === 1 / 0 ? p = p + i : p = p * (l - i) + i, p);
}
function W3(e, r) {
  for (var n = 1; n < r.length - 1 && !(r[n] >= e); ++n)
    ;
  return n - 1;
}
var p0 = {
  linear: (e) => e,
  easeInOutCubic: (e) => e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2
}, Io = Symbol.for("FluidValue.get"), ga = Symbol.for("FluidValue.observers"), Wt = (e) => !!(e && e[Io]), At = (e) => e && e[Io] ? e[Io]() : e, Vm = (e) => e[ga] || null;
function G3(e, r) {
  e.eventObserved ? e.eventObserved(r) : e(r);
}
function Ro(e, r) {
  const n = e[ga];
  n && n.forEach((i) => {
    G3(i, r);
  });
}
var h0 = class {
  constructor(e) {
    if (!e && !(e = this.get))
      throw Error("Unknown getter");
    Y3(this, e);
  }
}, Y3 = (e, r) => m0(e, Io, r);
function ka(e, r) {
  if (e[Io]) {
    let n = e[ga];
    n || m0(e, ga, n = /* @__PURE__ */ new Set()), n.has(r) || (n.add(r), e.observerAdded && e.observerAdded(n.size, r));
  }
  return r;
}
function Lo(e, r) {
  const n = e[ga];
  if (n && n.has(r)) {
    const i = n.size - 1;
    i ? n.delete(r) : e[ga] = null, e.observerRemoved && e.observerRemoved(i, r);
  }
}
var m0 = (e, r, n) => Object.defineProperty(e, r, {
  value: n,
  writable: !0,
  configurable: !0
}), kl = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, q3 = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, Bm = new RegExp(`(${kl.source})(%|[a-z]+)`, "i"), Q3 = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, es = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, g0 = (e) => {
  const [r, n] = X3(e);
  if (!r || Td())
    return e;
  const i = window.getComputedStyle(document.documentElement).getPropertyValue(r);
  if (i)
    return i.trim();
  if (n && n.startsWith("--")) {
    const l = window.getComputedStyle(document.documentElement).getPropertyValue(n);
    return l || e;
  } else {
    if (n && es.test(n))
      return g0(n);
    if (n)
      return n;
  }
  return e;
}, X3 = (e) => {
  const r = es.exec(e);
  if (!r)
    return [,];
  const [, n, i] = r;
  return [n, i];
}, yu, Z3 = (e, r, n, i, l) => `rgba(${Math.round(r)}, ${Math.round(n)}, ${Math.round(i)}, ${l})`, v0 = (e) => {
  yu || (yu = sn ? (
    // match color names, ignore partial matches
    new RegExp(`(${Object.keys(sn).join("|")})(?!\\w)`, "g")
  ) : (
    // never match
    /^\b$/
  ));
  const r = e.output.map((c) => At(c).replace(es, g0).replace(q3, Om).replace(yu, Om)), n = r.map((c) => c.match(kl).map(Number)), l = n[0].map(
    (c, u) => n.map((d) => {
      if (!(u in d))
        throw Error('The arity of each "output" value must be equal');
      return d[u];
    })
  ).map(
    (c) => Ao({ ...e, output: c })
  );
  return (c) => {
    const u = !Bm.test(r[0]) && r.find((h) => Bm.test(h))?.replace(kl, "");
    let d = 0;
    return r[0].replace(
      kl,
      () => `${l[d++](c)}${u || ""}`
    ).replace(Q3, Z3);
  };
}, Id = "react-spring: ", b0 = (e) => {
  const r = e;
  let n = !1;
  if (typeof r != "function")
    throw new TypeError(`${Id}once requires a function parameter`);
  return (...i) => {
    n || (r(...i), n = !0);
  };
}, J3 = b0(console.warn);
function e4() {
  J3(
    `${Id}The "interpolate" function is deprecated in v9 (use "to" instead)`
  );
}
var t4 = b0(console.warn);
function r4() {
  t4(
    `${Id}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function ts(e) {
  return te.str(e) && (e[0] == "#" || /\d/.test(e) || // Do not identify a CSS variable as an AnimatedString if its SSR
  !Td() && es.test(e) || e in (sn || {}));
}
var Rd = Td() ? _.useEffect : _.useLayoutEffect, n4 = () => {
  const e = _.useRef(!1);
  return Rd(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function y0() {
  const e = _.useState()[1], r = n4();
  return () => {
    r.current && e(Math.random());
  };
}
function a4(e, r) {
  const [n] = _.useState(
    () => ({
      inputs: r,
      result: e()
    })
  ), i = _.useRef(), l = i.current;
  let c = l;
  return c ? r && c.inputs && o4(r, c.inputs) || (c = {
    inputs: r,
    result: e()
  }) : c = n, _.useEffect(() => {
    i.current = c, l == n && (n.inputs = n.result = void 0);
  }, [c]), c.result;
}
function o4(e, r) {
  if (e.length !== r.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== r[n])
      return !1;
  return !0;
}
var w0 = (e) => _.useEffect(e, i4), i4 = [];
function Hm(e) {
  const r = _.useRef();
  return _.useEffect(() => {
    r.current = e;
  }), r.current;
}
var Mo = Symbol.for("Animated:node"), l4 = (e) => !!e && e[Mo] === e, mr = (e) => e && e[Mo], Ld = (e, r) => T3(e, Mo, r), rs = (e) => e && e[Mo] && e[Mo].getPayload(), x0 = class {
  constructor() {
    Ld(this, this);
  }
  /** Get every `AnimatedValue` used by this node. */
  getPayload() {
    return this.payload || [];
  }
}, Yo = class extends x0 {
  constructor(e) {
    super(), this._value = e, this.done = !0, this.durationProgress = 0, te.num(this._value) && (this.lastPosition = this._value);
  }
  /** @internal */
  static create(e) {
    return new Yo(e);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(e, r) {
    return te.num(e) && (this.lastPosition = e, r && (e = Math.round(e / r) * r, this.done && (this.lastPosition = e))), this._value === e ? !1 : (this._value = e, !0);
  }
  reset() {
    const { done: e } = this;
    this.done = !1, te.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null);
  }
}, jo = class extends Yo {
  constructor(e) {
    super(0), this._string = null, this._toString = Ao({
      output: [e, e]
    });
  }
  /** @internal */
  static create(e) {
    return new jo(e);
  }
  getValue() {
    const e = this._string;
    return e ?? (this._string = this._toString(this._value));
  }
  setValue(e) {
    if (te.str(e)) {
      if (e == this._string)
        return !1;
      this._string = e, this._value = 1;
    } else if (super.setValue(e))
      this._string = null;
    else
      return !1;
    return !0;
  }
  reset(e) {
    e && (this._toString = Ao({
      output: [this.getValue(), e]
    })), this._value = 0, super.reset();
  }
}, Al = { dependencies: null }, ns = class extends x0 {
  constructor(e) {
    super(), this.source = e, this.setValue(e);
  }
  getValue(e) {
    const r = {};
    return gr(this.source, (n, i) => {
      l4(n) ? r[i] = n.getValue(e) : Wt(n) ? r[i] = At(n) : e || (r[i] = n);
    }), r;
  }
  /** Replace the raw object data */
  setValue(e) {
    this.source = e, this.payload = this._makePayload(e);
  }
  reset() {
    this.payload && Fe(this.payload, (e) => e.reset());
  }
  /** Create a payload set. */
  _makePayload(e) {
    if (e) {
      const r = /* @__PURE__ */ new Set();
      return gr(e, this._addToPayload, r), Array.from(r);
    }
  }
  /** Add to a payload set. */
  _addToPayload(e) {
    Al.dependencies && Wt(e) && Al.dependencies.add(e);
    const r = rs(e);
    r && Fe(r, (n) => this.add(n));
  }
}, k0 = class extends ns {
  constructor(e) {
    super(e);
  }
  /** @internal */
  static create(e) {
    return new k0(e);
  }
  getValue() {
    return this.source.map((e) => e.getValue());
  }
  setValue(e) {
    const r = this.getPayload();
    return e.length == r.length ? r.map((n, i) => n.setValue(e[i])).some(Boolean) : (super.setValue(e.map(s4)), !0);
  }
};
function s4(e) {
  return (ts(e) ? jo : Yo).create(e);
}
function Xu(e) {
  const r = mr(e);
  return r ? r.constructor : te.arr(e) ? k0 : ts(e) ? jo : Yo;
}
var Um = (e, r) => {
  const n = (
    // Function components must use "forwardRef" to avoid being
    // re-rendered on every animation frame.
    !te.fun(e) || e.prototype && e.prototype.isReactComponent
  );
  return _.forwardRef((i, l) => {
    const c = _.useRef(null), u = n && // eslint-disable-next-line react-hooks/rules-of-hooks
    _.useCallback(
      (k) => {
        c.current = d4(l, k);
      },
      [l]
    ), [d, h] = u4(i, r), p = y0(), b = () => {
      const k = c.current;
      if (n && !k)
        return;
      (k ? r.applyAnimatedValues(k, d.getValue(!0)) : !1) === !1 && p();
    }, v = new c4(b, h), g = _.useRef();
    Rd(() => (g.current = v, Fe(h, (k) => ka(k, v)), () => {
      g.current && (Fe(
        g.current.deps,
        (k) => Lo(k, g.current)
      ), Se.cancel(g.current.update));
    })), _.useEffect(b, []), w0(() => () => {
      const k = g.current;
      Fe(k.deps, (y) => Lo(y, k));
    });
    const w = r.getComponentProps(d.getValue());
    return /* @__PURE__ */ _.createElement(e, { ...w, ref: u });
  });
}, c4 = class {
  constructor(e, r) {
    this.update = e, this.deps = r;
  }
  eventObserved(e) {
    e.type == "change" && Se.write(this.update);
  }
};
function u4(e, r) {
  const n = /* @__PURE__ */ new Set();
  return Al.dependencies = n, e.style && (e = {
    ...e,
    style: r.createAnimatedStyle(e.style)
  }), e = new ns(e), Al.dependencies = null, [e, n];
}
function d4(e, r) {
  return e && (te.fun(e) ? e(r) : e.current = r), r;
}
var Wm = Symbol.for("AnimatedComponent"), f4 = (e, {
  applyAnimatedValues: r = () => !1,
  createAnimatedStyle: n = (l) => new ns(l),
  getComponentProps: i = (l) => l
} = {}) => {
  const l = {
    applyAnimatedValues: r,
    createAnimatedStyle: n,
    getComponentProps: i
  }, c = (u) => {
    const d = Gm(u) || "Anonymous";
    return te.str(u) ? u = c[u] || (c[u] = Um(u, l)) : u = u[Wm] || (u[Wm] = Um(u, l)), u.displayName = `Animated(${d})`, u;
  };
  return gr(e, (u, d) => {
    te.arr(e) && (d = Gm(u)), c[d] = c(u);
  }), {
    animated: c
  };
}, Gm = (e) => te.str(e) ? e : e && te.str(e.displayName) ? e.displayName : te.fun(e) && e.name || null;
function _n(e, ...r) {
  return te.fun(e) ? e(...r) : e;
}
var _o = (e, r) => e === !0 || !!(r && e && (te.fun(e) ? e(r) : jt(e).includes(r))), S0 = (e, r) => te.obj(e) ? r && e[r] : e, C0 = (e, r) => e.default === !0 ? e[r] : e.default ? e.default[r] : void 0, p4 = (e) => e, Md = (e, r = p4) => {
  let n = h4;
  e.default && e.default !== !0 && (e = e.default, n = Object.keys(e));
  const i = {};
  for (const l of n) {
    const c = r(e[l], l);
    te.und(c) || (i[l] = c);
  }
  return i;
}, h4 = [
  "config",
  "onProps",
  "onStart",
  "onChange",
  "onPause",
  "onResume",
  "onRest"
], m4 = {
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
function g4(e) {
  const r = {};
  let n = 0;
  if (gr(e, (i, l) => {
    m4[l] || (r[l] = i, n++);
  }), n)
    return r;
}
function _0(e) {
  const r = g4(e);
  if (r) {
    const n = { to: r };
    return gr(e, (i, l) => l in r || (n[l] = i)), n;
  }
  return { ...e };
}
function Do(e) {
  return e = At(e), te.arr(e) ? e.map(Do) : ts(e) ? lr.createStringInterpolator({
    range: [0, 1],
    output: [e, e]
  })(1) : e;
}
function v4(e) {
  for (const r in e)
    return !0;
  return !1;
}
function Zu(e) {
  return te.fun(e) || te.arr(e) && te.obj(e[0]);
}
function b4(e, r) {
  e.ref?.delete(e), r?.delete(e);
}
function y4(e, r) {
  r && e.ref !== r && (e.ref?.delete(e), r.add(e), e.ref = r);
}
var w4 = {
  default: { tension: 170, friction: 26 }
}, Ju = {
  ...w4.default,
  mass: 1,
  damping: 1,
  easing: p0.linear,
  clamp: !1
}, x4 = class {
  constructor() {
    this.velocity = 0, Object.assign(this, Ju);
  }
};
function k4(e, r, n) {
  n && (n = { ...n }, Ym(n, r), r = { ...n, ...r }), Ym(e, r), Object.assign(e, r);
  for (const u in Ju)
    e[u] == null && (e[u] = Ju[u]);
  let { frequency: i, damping: l } = e;
  const { mass: c } = e;
  return te.und(i) || (i < 0.01 && (i = 0.01), l < 0 && (l = 0), e.tension = Math.pow(2 * Math.PI / i, 2) * c, e.friction = 4 * Math.PI * l * c / i), e;
}
function Ym(e, r) {
  if (!te.und(r.decay))
    e.duration = void 0;
  else {
    const n = !te.und(r.tension) || !te.und(r.friction);
    (n || !te.und(r.frequency) || !te.und(r.damping) || !te.und(r.mass)) && (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0);
  }
}
var qm = [], S4 = class {
  constructor() {
    this.changed = !1, this.values = qm, this.toValues = null, this.fromValues = qm, this.config = new x4(), this.immediate = !1;
  }
};
function E0(e, { key: r, props: n, defaultProps: i, state: l, actions: c }) {
  return new Promise((u, d) => {
    let h, p, b = _o(n.cancel ?? i?.cancel, r);
    if (b)
      w();
    else {
      te.und(n.pause) || (l.paused = _o(n.pause, r));
      let k = i?.pause;
      k !== !0 && (k = l.paused || _o(k, r)), h = _n(n.delay || 0, r), k ? (l.resumeQueue.add(g), c.pause()) : (c.resume(), g());
    }
    function v() {
      l.resumeQueue.add(g), l.timeouts.delete(p), p.cancel(), h = p.time - Se.now();
    }
    function g() {
      h > 0 && !lr.skipAnimation ? (l.delayed = !0, p = Se.setTimeout(w, h), l.pauseQueue.add(v), l.timeouts.add(p)) : w();
    }
    function w() {
      l.delayed && (l.delayed = !1), l.pauseQueue.delete(v), l.timeouts.delete(p), e <= (l.cancelId || 0) && (b = !0);
      try {
        c.start({ ...n, callId: e, cancel: b }, u);
      } catch (k) {
        d(k);
      }
    }
  });
}
var jd = (e, r) => r.length == 1 ? r[0] : r.some((n) => n.cancelled) ? ha(e.get()) : r.every((n) => n.noop) ? $0(e.get()) : nr(
  e.get(),
  r.every((n) => n.finished)
), $0 = (e) => ({
  value: e,
  noop: !0,
  finished: !0,
  cancelled: !1
}), nr = (e, r, n = !1) => ({
  value: e,
  finished: r,
  cancelled: n
}), ha = (e) => ({
  value: e,
  cancelled: !0,
  finished: !1
});
function P0(e, r, n, i) {
  const { callId: l, parentId: c, onRest: u } = r, { asyncTo: d, promise: h } = n;
  return !c && e === d && !r.reset ? h : n.promise = (async () => {
    n.asyncId = l, n.asyncTo = e;
    const p = Md(
      r,
      (C, I) => (
        // The `onRest` prop is only called when the `runAsync` promise is resolved.
        I === "onRest" ? void 0 : C
      )
    );
    let b, v;
    const g = new Promise(
      (C, I) => (b = C, v = I)
    ), w = (C) => {
      const I = (
        // The `cancel` prop or `stop` method was used.
        l <= (n.cancelId || 0) && ha(i) || // The async `to` prop was replaced.
        l !== n.asyncId && nr(i, !1)
      );
      if (I)
        throw C.result = I, v(C), C;
    }, k = (C, I) => {
      const F = new Qm(), D = new Xm();
      return (async () => {
        if (lr.skipAnimation)
          throw Ko(n), D.result = nr(i, !1), v(D), D;
        w(F);
        const W = te.obj(C) ? { ...C } : { ...I, to: C };
        W.parentId = l, gr(p, (ee, ne) => {
          te.und(W[ne]) && (W[ne] = ee);
        });
        const re = await i.start(W);
        return w(F), n.paused && await new Promise((ee) => {
          n.resumeQueue.add(ee);
        }), re;
      })();
    };
    let y;
    if (lr.skipAnimation)
      return Ko(n), nr(i, !1);
    try {
      let C;
      te.arr(e) ? C = (async (I) => {
        for (const F of I)
          await k(F);
      })(e) : C = Promise.resolve(e(k, i.stop.bind(i))), await Promise.all([C.then(b), g]), y = nr(i.get(), !0, !1);
    } catch (C) {
      if (C instanceof Qm)
        y = C.result;
      else if (C instanceof Xm)
        y = C.result;
      else
        throw C;
    } finally {
      l == n.asyncId && (n.asyncId = c, n.asyncTo = c ? d : void 0, n.promise = c ? h : void 0);
    }
    return te.fun(u) && Se.batchedUpdates(() => {
      u(y, i, i.item);
    }), y;
  })();
}
function Ko(e, r) {
  So(e.timeouts, (n) => n.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, r && (e.cancelId = r);
}
var Qm = class extends Error {
  constructor() {
    super(
      "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
    );
  }
}, Xm = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
  }
}, ed = (e) => e instanceof Dd, C4 = 1, Dd = class extends h0 {
  constructor() {
    super(...arguments), this.id = C4++, this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(e) {
    this._priority != e && (this._priority = e, this._onPriorityChange(e));
  }
  /** Get the current value */
  get() {
    const e = mr(this);
    return e && e.getValue();
  }
  /** Create a spring that maps our value to another value */
  to(...e) {
    return lr.to(this, e);
  }
  /** @deprecated Use the `to` method instead. */
  interpolate(...e) {
    return e4(), lr.to(this, e);
  }
  toJSON() {
    return this.get();
  }
  observerAdded(e) {
    e == 1 && this._attach();
  }
  observerRemoved(e) {
    e == 0 && this._detach();
  }
  /** Called when the first child is added. */
  _attach() {
  }
  /** Called when the last child is removed. */
  _detach() {
  }
  /** Tell our children about our new value */
  _onChange(e, r = !1) {
    Ro(this, {
      type: "change",
      parent: this,
      value: e,
      idle: r
    });
  }
  /** Tell our children about our new priority */
  _onPriorityChange(e) {
    this.idle || Zl.sort(this), Ro(this, {
      type: "priority",
      parent: this,
      priority: e
    });
  }
}, zn = Symbol.for("SpringPhase"), F0 = 1, td = 2, rd = 4, wu = (e) => (e[zn] & F0) > 0, tn = (e) => (e[zn] & td) > 0, fo = (e) => (e[zn] & rd) > 0, Zm = (e, r) => r ? e[zn] |= td | F0 : e[zn] &= ~td, Jm = (e, r) => r ? e[zn] |= rd : e[zn] &= ~rd, _4 = class extends Dd {
  constructor(e, r) {
    if (super(), this.animation = new S4(), this.defaultProps = {}, this._state = {
      paused: !1,
      delayed: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._pendingCalls = /* @__PURE__ */ new Set(), this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !te.und(e) || !te.und(r)) {
      const n = te.obj(e) ? { ...e } : { ...r, from: e };
      te.und(n.default) && (n.default = !0), this.start(n);
    }
  }
  /** Equals true when not advancing on each frame. */
  get idle() {
    return !(tn(this) || this._state.asyncTo) || fo(this);
  }
  get goal() {
    return At(this.animation.to);
  }
  get velocity() {
    const e = mr(this);
    return e instanceof Yo ? e.lastVelocity || 0 : e.getPayload().map((r) => r.lastVelocity || 0);
  }
  /**
   * When true, this value has been animated at least once.
   */
  get hasAnimated() {
    return wu(this);
  }
  /**
   * When true, this value has an unfinished animation,
   * which is either active or paused.
   */
  get isAnimating() {
    return tn(this);
  }
  /**
   * When true, all current and future animations are paused.
   */
  get isPaused() {
    return fo(this);
  }
  /**
   *
   *
   */
  get isDelayed() {
    return this._state.delayed;
  }
  /** Advance the current animation by a number of milliseconds */
  advance(e) {
    let r = !0, n = !1;
    const i = this.animation;
    let { toValues: l } = i;
    const { config: c } = i, u = rs(i.to);
    !u && Wt(i.to) && (l = jt(At(i.to))), i.values.forEach((p, b) => {
      if (p.done)
        return;
      const v = (
        // Animated strings always go from 0 to 1.
        p.constructor == jo ? 1 : u ? u[b].lastPosition : l[b]
      );
      let g = i.immediate, w = v;
      if (!g) {
        if (w = p.lastPosition, c.tension <= 0) {
          p.done = !0;
          return;
        }
        let k = p.elapsedTime += e;
        const y = i.fromValues[b], C = p.v0 != null ? p.v0 : p.v0 = te.arr(c.velocity) ? c.velocity[b] : c.velocity;
        let I;
        const F = c.precision || (y == v ? 5e-3 : Math.min(1, Math.abs(v - y) * 1e-3));
        if (te.und(c.duration))
          if (c.decay) {
            const D = c.decay === !0 ? 0.998 : c.decay, W = Math.exp(-(1 - D) * k);
            w = y + C / (1 - D) * (1 - W), g = Math.abs(p.lastPosition - w) <= F, I = C * W;
          } else {
            I = p.lastVelocity == null ? C : p.lastVelocity;
            const D = c.restVelocity || F / 10, W = c.clamp ? 0 : c.bounce, re = !te.und(W), ee = y == v ? p.v0 > 0 : y < v;
            let ne, ue = !1;
            const ie = 1, ve = Math.ceil(e / ie);
            for (let se = 0; se < ve && (ne = Math.abs(I) > D, !(!ne && (g = Math.abs(v - w) <= F, g))); ++se) {
              re && (ue = w == v || w > v == ee, ue && (I = -I * W, w = v));
              const j = -c.tension * 1e-6 * (w - v), q = -c.friction * 1e-3 * I, z = (j + q) / c.mass;
              I = I + z * ie, w = w + I * ie;
            }
          }
        else {
          let D = 1;
          c.duration > 0 && (this._memoizedDuration !== c.duration && (this._memoizedDuration = c.duration, p.durationProgress > 0 && (p.elapsedTime = c.duration * p.durationProgress, k = p.elapsedTime += e)), D = (c.progress || 0) + k / this._memoizedDuration, D = D > 1 ? 1 : D < 0 ? 0 : D, p.durationProgress = D), w = y + c.easing(D) * (v - y), I = (w - p.lastPosition) / e, g = D == 1;
        }
        p.lastVelocity = I, Number.isNaN(w) && (console.warn("Got NaN while animating:", this), g = !0);
      }
      u && !u[b].done && (g = !1), g ? p.done = !0 : r = !1, p.setValue(w, c.round) && (n = !0);
    });
    const d = mr(this), h = d.getValue();
    if (r) {
      const p = At(i.to);
      (h !== p || n) && !c.decay ? (d.setValue(p), this._onChange(p)) : n && c.decay && this._onChange(h), this._stop();
    } else n && this._onChange(h);
  }
  /** Set the current value, while stopping the current animation */
  set(e) {
    return Se.batchedUpdates(() => {
      this._stop(), this._focus(e), this._set(e);
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
    if (tn(this)) {
      const { to: e, config: r } = this.animation;
      Se.batchedUpdates(() => {
        this._onStart(), r.decay || this._set(e, !1), this._stop();
      });
    }
    return this;
  }
  /** Push props into the pending queue. */
  update(e) {
    return (this.queue || (this.queue = [])).push(e), this;
  }
  start(e, r) {
    let n;
    return te.und(e) ? (n = this.queue || [], this.queue = []) : n = [te.obj(e) ? e : { ...r, to: e }], Promise.all(
      n.map((i) => this._update(i))
    ).then((i) => jd(this, i));
  }
  /**
   * Stop the current animation, and cancel any delayed updates.
   *
   * Pass `true` to call `onRest` with `cancelled: true`.
   */
  stop(e) {
    const { to: r } = this.animation;
    return this._focus(this.get()), Ko(this._state, e && this._lastCallId), Se.batchedUpdates(() => this._stop(r, e)), this;
  }
  /** Restart the animation. */
  reset() {
    this._update({ reset: !0 });
  }
  /** @internal */
  eventObserved(e) {
    e.type == "change" ? this._start() : e.type == "priority" && (this.priority = e.priority + 1);
  }
  /**
   * Parse the `to` and `from` range from the given `props` object.
   *
   * This also ensures the initial value is available to animated components
   * during the render phase.
   */
  _prepareNode(e) {
    const r = this.key || "";
    let { to: n, from: i } = e;
    n = te.obj(n) ? n[r] : n, (n == null || Zu(n)) && (n = void 0), i = te.obj(i) ? i[r] : i, i == null && (i = void 0);
    const l = { to: n, from: i };
    return wu(this) || (e.reverse && ([n, i] = [i, n]), i = At(i), te.und(i) ? mr(this) || this._set(n) : this._set(i)), l;
  }
  /** Every update is processed by this method before merging. */
  _update({ ...e }, r) {
    const { key: n, defaultProps: i } = this;
    e.default && Object.assign(
      i,
      Md(
        e,
        (u, d) => /^on/.test(d) ? S0(u, n) : u
      )
    ), tg(this, e, "onProps"), ho(this, "onProps", e, this);
    const l = this._prepareNode(e);
    if (Object.isFrozen(this))
      throw Error(
        "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
      );
    const c = this._state;
    return E0(++this._lastCallId, {
      key: n,
      props: e,
      defaultProps: i,
      state: c,
      actions: {
        pause: () => {
          fo(this) || (Jm(this, !0), xo(c.pauseQueue), ho(
            this,
            "onPause",
            nr(this, po(this, this.animation.to)),
            this
          ));
        },
        resume: () => {
          fo(this) && (Jm(this, !1), tn(this) && this._resume(), xo(c.resumeQueue), ho(
            this,
            "onResume",
            nr(this, po(this, this.animation.to)),
            this
          ));
        },
        start: this._merge.bind(this, l)
      }
    }).then((u) => {
      if (e.loop && u.finished && !(r && u.noop)) {
        const d = z0(e);
        if (d)
          return this._update(d, !0);
      }
      return u;
    });
  }
  /** Merge props into the current animation */
  _merge(e, r, n) {
    if (r.cancel)
      return this.stop(!0), n(ha(this));
    const i = !te.und(e.to), l = !te.und(e.from);
    if (i || l)
      if (r.callId > this._lastToId)
        this._lastToId = r.callId;
      else
        return n(ha(this));
    const { key: c, defaultProps: u, animation: d } = this, { to: h, from: p } = d;
    let { to: b = h, from: v = p } = e;
    l && !i && (!r.default || te.und(b)) && (b = v), r.reverse && ([b, v] = [v, b]);
    const g = !zr(v, p);
    g && (d.from = v), v = At(v);
    const w = !zr(b, h);
    w && this._focus(b);
    const k = Zu(r.to), { config: y } = d, { decay: C, velocity: I } = y;
    (i || l) && (y.velocity = 0), r.config && !k && k4(
      y,
      _n(r.config, c),
      // Avoid calling the same "config" prop twice.
      r.config !== u.config ? _n(u.config, c) : void 0
    );
    let F = mr(this);
    if (!F || te.und(b))
      return n(nr(this, !0));
    const D = (
      // When `reset` is undefined, the `from` prop implies `reset: true`,
      // except for declarative updates. When `reset` is defined, there
      // must exist a value to animate from.
      te.und(r.reset) ? l && !r.default : !te.und(v) && _o(r.reset, c)
    ), W = D ? v : this.get(), re = Do(b), ee = te.num(re) || te.arr(re) || ts(re), ne = !k && (!ee || _o(u.immediate || r.immediate, c));
    if (w) {
      const se = Xu(b);
      if (se !== F.constructor)
        if (ne)
          F = this._set(re);
        else
          throw Error(
            `Cannot animate between ${F.constructor.name} and ${se.name}, as the "to" prop suggests`
          );
    }
    const ue = F.constructor;
    let ie = Wt(b), ve = !1;
    if (!ie) {
      const se = D || !wu(this) && g;
      (w || se) && (ve = zr(Do(W), re), ie = !ve), (!zr(d.immediate, ne) && !ne || !zr(y.decay, C) || !zr(y.velocity, I)) && (ie = !0);
    }
    if (ve && tn(this) && (d.changed && !D ? ie = !0 : ie || this._stop(h)), !k && ((ie || Wt(h)) && (d.values = F.getPayload(), d.toValues = Wt(b) ? null : ue == jo ? [1] : jt(re)), d.immediate != ne && (d.immediate = ne, !ne && !D && this._set(h)), ie)) {
      const { onRest: se } = d;
      Fe($4, (q) => tg(this, r, q));
      const j = nr(this, po(this, h));
      xo(this._pendingCalls, j), this._pendingCalls.add(n), d.changed && Se.batchedUpdates(() => {
        d.changed = !D, se?.(j, this), D ? _n(u.onRest, j) : d.onStart?.(j, this);
      });
    }
    D && this._set(W), k ? n(P0(r.to, r, this._state, this)) : ie ? this._start() : tn(this) && !w ? this._pendingCalls.add(n) : n($0(W));
  }
  /** Update the `animation.to` value, which might be a `FluidValue` */
  _focus(e) {
    const r = this.animation;
    e !== r.to && (Vm(this) && this._detach(), r.to = e, Vm(this) && this._attach());
  }
  _attach() {
    let e = 0;
    const { to: r } = this.animation;
    Wt(r) && (ka(r, this), ed(r) && (e = r.priority + 1)), this.priority = e;
  }
  _detach() {
    const { to: e } = this.animation;
    Wt(e) && Lo(e, this);
  }
  /**
   * Update the current value from outside the frameloop,
   * and return the `Animated` node.
   */
  _set(e, r = !0) {
    const n = At(e);
    if (!te.und(n)) {
      const i = mr(this);
      if (!i || !zr(n, i.getValue())) {
        const l = Xu(n);
        !i || i.constructor != l ? Ld(this, l.create(n)) : i.setValue(n), i && Se.batchedUpdates(() => {
          this._onChange(n, r);
        });
      }
    }
    return mr(this);
  }
  _onStart() {
    const e = this.animation;
    e.changed || (e.changed = !0, ho(
      this,
      "onStart",
      nr(this, po(this, e.to)),
      this
    ));
  }
  _onChange(e, r) {
    r || (this._onStart(), _n(this.animation.onChange, e, this)), _n(this.defaultProps.onChange, e, this), super._onChange(e, r);
  }
  // This method resets the animation state (even if already animating) to
  // ensure the latest from/to range is used, and it also ensures this spring
  // is added to the frameloop.
  _start() {
    const e = this.animation;
    mr(this).reset(At(e.to)), e.immediate || (e.fromValues = e.values.map((r) => r.lastPosition)), tn(this) || (Zm(this, !0), fo(this) || this._resume());
  }
  _resume() {
    lr.skipAnimation ? this.finish() : Zl.start(this);
  }
  /**
   * Exit the frameloop and notify `onRest` listeners.
   *
   * Always wrap `_stop` calls with `batchedUpdates`.
   */
  _stop(e, r) {
    if (tn(this)) {
      Zm(this, !1);
      const n = this.animation;
      Fe(n.values, (l) => {
        l.done = !0;
      }), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), Ro(this, {
        type: "idle",
        parent: this
      });
      const i = r ? ha(this.get()) : nr(this.get(), po(this, e ?? n.to));
      xo(this._pendingCalls, i), n.changed && (n.changed = !1, ho(this, "onRest", i, this));
    }
  }
};
function po(e, r) {
  const n = Do(r), i = Do(e.get());
  return zr(i, n);
}
function z0(e, r = e.loop, n = e.to) {
  const i = _n(r);
  if (i) {
    const l = i !== !0 && _0(i), c = (l || e).reverse, u = !l || l.reset;
    return Oo({
      ...e,
      loop: r,
      // Avoid updating default props when looping.
      default: !1,
      // Never loop the `pause` prop.
      pause: void 0,
      // For the "reverse" prop to loop as expected, the "to" prop
      // must be undefined. The "reverse" prop is ignored when the
      // "to" prop is an array or function.
      to: !c || Zu(n) ? n : void 0,
      // Ignore the "from" prop except on reset.
      from: u ? e.from : void 0,
      reset: u,
      // The "loop" prop can return a "useSpring" props object to
      // override any of the original props.
      ...l
    });
  }
}
function Oo(e) {
  const { to: r, from: n } = e = _0(e), i = /* @__PURE__ */ new Set();
  return te.obj(r) && eg(r, i), te.obj(n) && eg(n, i), e.keys = i.size ? Array.from(i) : null, e;
}
function E4(e) {
  const r = Oo(e);
  return te.und(r.default) && (r.default = Md(r)), r;
}
function eg(e, r) {
  gr(e, (n, i) => n != null && r.add(i));
}
var $4 = [
  "onStart",
  "onRest",
  "onChange",
  "onPause",
  "onResume"
];
function tg(e, r, n) {
  e.animation[n] = r[n] !== C0(r, n) ? S0(r[n], e.key) : void 0;
}
function ho(e, r, ...n) {
  e.animation[r]?.(...n), e.defaultProps[r]?.(...n);
}
var P4 = ["onStart", "onChange", "onRest"], F4 = 1, z4 = class {
  constructor(r, n) {
    this.id = F4++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = !1, this._state = {
      paused: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._events = {
      onStart: /* @__PURE__ */ new Map(),
      onChange: /* @__PURE__ */ new Map(),
      onRest: /* @__PURE__ */ new Map()
    }, this._onFrame = this._onFrame.bind(this), n && (this._flush = n), r && this.start({ default: !0, ...r });
  }
  /**
   * Equals `true` when no spring values are in the frameloop, and
   * no async animation is currently active.
   */
  get idle() {
    return !this._state.asyncTo && Object.values(this.springs).every((r) => r.idle && !r.isDelayed && !r.isPaused);
  }
  get item() {
    return this._item;
  }
  set item(r) {
    this._item = r;
  }
  /** Get the current values of our springs */
  get() {
    const r = {};
    return this.each((n, i) => r[i] = n.get()), r;
  }
  /** Set the current values without animating. */
  set(r) {
    for (const n in r) {
      const i = r[n];
      te.und(i) || this.springs[n].set(i);
    }
  }
  /** Push an update onto the queue of each value. */
  update(r) {
    return r && this.queue.push(Oo(r)), this;
  }
  /**
   * Start the queued animations for every spring, and resolve the returned
   * promise once all queued animations have finished or been cancelled.
   *
   * When you pass a queue (instead of nothing), that queue is used instead of
   * the queued animations added with the `update` method, which are left alone.
   */
  start(r) {
    let { queue: n } = this;
    return r ? n = jt(r).map(Oo) : this.queue = [], this._flush ? this._flush(this, n) : (R0(this, n), nd(this, n));
  }
  /** @internal */
  stop(r, n) {
    if (r !== !!r && (n = r), n) {
      const i = this.springs;
      Fe(jt(n), (l) => i[l].stop(!!r));
    } else
      Ko(this._state, this._lastAsyncId), this.each((i) => i.stop(!!r));
    return this;
  }
  /** Freeze the active animation in time */
  pause(r) {
    if (te.und(r))
      this.start({ pause: !0 });
    else {
      const n = this.springs;
      Fe(jt(r), (i) => n[i].pause());
    }
    return this;
  }
  /** Resume the animation if paused. */
  resume(r) {
    if (te.und(r))
      this.start({ pause: !1 });
    else {
      const n = this.springs;
      Fe(jt(r), (i) => n[i].resume());
    }
    return this;
  }
  /** Call a function once per spring value */
  each(r) {
    gr(this.springs, r);
  }
  /** @internal Called at the end of every animation frame */
  _onFrame() {
    const { onStart: r, onChange: n, onRest: i } = this._events, l = this._active.size > 0, c = this._changed.size > 0;
    (l && !this._started || c && !this._started) && (this._started = !0, So(r, ([h, p]) => {
      p.value = this.get(), h(p, this, this._item);
    }));
    const u = !l && this._started, d = c || u && i.size ? this.get() : null;
    c && n.size && So(n, ([h, p]) => {
      p.value = d, h(p, this, this._item);
    }), u && (this._started = !1, So(i, ([h, p]) => {
      p.value = d, h(p, this, this._item);
    }));
  }
  /** @internal */
  eventObserved(r) {
    if (r.type == "change")
      this._changed.add(r.parent), r.idle || this._active.add(r.parent);
    else if (r.type == "idle")
      this._active.delete(r.parent);
    else
      return;
    Se.onFrame(this._onFrame);
  }
};
function nd(e, r) {
  return Promise.all(r.map((n) => T0(e, n))).then(
    (n) => jd(e, n)
  );
}
async function T0(e, r, n) {
  const { keys: i, to: l, from: c, loop: u, onRest: d, onResolve: h } = r, p = te.obj(r.default) && r.default;
  u && (r.loop = !1), l === !1 && (r.to = null), c === !1 && (r.from = null);
  const b = te.arr(l) || te.fun(l) ? l : void 0;
  b ? (r.to = void 0, r.onRest = void 0, p && (p.onRest = void 0)) : Fe(P4, (y) => {
    const C = r[y];
    if (te.fun(C)) {
      const I = e._events[y];
      r[y] = ({ finished: F, cancelled: D }) => {
        const W = I.get(C);
        W ? (F || (W.finished = !1), D && (W.cancelled = !0)) : I.set(C, {
          value: null,
          finished: F || !1,
          cancelled: D || !1
        });
      }, p && (p[y] = r[y]);
    }
  });
  const v = e._state;
  r.pause === !v.paused ? (v.paused = r.pause, xo(r.pause ? v.pauseQueue : v.resumeQueue)) : v.paused && (r.pause = !0);
  const g = (i || Object.keys(e.springs)).map(
    (y) => e.springs[y].start(r)
  ), w = r.cancel === !0 || C0(r, "cancel") === !0;
  (b || w && v.asyncId) && g.push(
    E0(++e._lastAsyncId, {
      props: r,
      state: v,
      actions: {
        pause: qu,
        resume: qu,
        start(y, C) {
          w ? (Ko(v, e._lastAsyncId), C(ha(e))) : (y.onRest = d, C(
            P0(
              b,
              y,
              v,
              e
            )
          ));
        }
      }
    })
  ), v.paused && await new Promise((y) => {
    v.resumeQueue.add(y);
  });
  const k = jd(e, await Promise.all(g));
  if (u && k.finished && !(n && k.noop)) {
    const y = z0(r, u, l);
    if (y)
      return R0(e, [y]), T0(e, y, !0);
  }
  return h && Se.batchedUpdates(() => h(k, e, e.item)), k;
}
function rg(e, r) {
  const n = { ...e.springs };
  return r && Fe(jt(r), (i) => {
    te.und(i.keys) && (i = Oo(i)), te.obj(i.to) || (i = { ...i, to: void 0 }), I0(n, i, (l) => A0(l));
  }), N0(e, n), n;
}
function N0(e, r) {
  gr(r, (n, i) => {
    e.springs[i] || (e.springs[i] = n, ka(n, e));
  });
}
function A0(e, r) {
  const n = new _4();
  return n.key = e, r && ka(n, r), n;
}
function I0(e, r, n) {
  r.keys && Fe(r.keys, (i) => {
    (e[i] || (e[i] = n(i)))._prepareNode(r);
  });
}
function R0(e, r) {
  Fe(r, (n) => {
    I0(e.springs, n, (i) => A0(i, e));
  });
}
var as = ({
  children: e,
  ...r
}) => {
  const n = _.useContext(Il), i = r.pause || !!n.pause, l = r.immediate || !!n.immediate;
  r = a4(() => ({ pause: i, immediate: l }), [i, l]);
  const { Provider: c } = Il;
  return /* @__PURE__ */ _.createElement(c, { value: r }, e);
}, Il = T4(as, {});
as.Provider = Il.Provider;
as.Consumer = Il.Consumer;
function T4(e, r) {
  return Object.assign(e, _.createContext(r)), e.Provider._context = e, e.Consumer._context = e, e;
}
var N4 = () => {
  const e = [], r = function(i) {
    r4();
    const l = [];
    return Fe(e, (c, u) => {
      if (te.und(i))
        l.push(c.start());
      else {
        const d = n(i, c, u);
        d && l.push(c.start(d));
      }
    }), l;
  };
  r.current = e, r.add = function(i) {
    e.includes(i) || e.push(i);
  }, r.delete = function(i) {
    const l = e.indexOf(i);
    ~l && e.splice(l, 1);
  }, r.pause = function() {
    return Fe(e, (i) => i.pause(...arguments)), this;
  }, r.resume = function() {
    return Fe(e, (i) => i.resume(...arguments)), this;
  }, r.set = function(i) {
    Fe(e, (l, c) => {
      const u = te.fun(i) ? i(c, l) : i;
      u && l.set(u);
    });
  }, r.start = function(i) {
    const l = [];
    return Fe(e, (c, u) => {
      if (te.und(i))
        l.push(c.start());
      else {
        const d = this._getProps(i, c, u);
        d && l.push(c.start(d));
      }
    }), l;
  }, r.stop = function() {
    return Fe(e, (i) => i.stop(...arguments)), this;
  }, r.update = function(i) {
    return Fe(e, (l, c) => l.update(this._getProps(i, l, c))), this;
  };
  const n = function(i, l, c) {
    return te.fun(i) ? i(c, l) : i;
  };
  return r._getProps = n, r;
};
function A4(e, r, n) {
  const i = te.fun(r) && r;
  i && !n && (n = []);
  const l = _.useMemo(
    () => i || arguments.length == 3 ? N4() : void 0,
    []
  ), c = _.useRef(0), u = y0(), d = _.useMemo(
    () => ({
      ctrls: [],
      queue: [],
      flush(I, F) {
        const D = rg(I, F);
        return c.current > 0 && !d.queue.length && !Object.keys(D).some((re) => !I.springs[re]) ? nd(I, F) : new Promise((re) => {
          N0(I, D), d.queue.push(() => {
            re(nd(I, F));
          }), u();
        });
      }
    }),
    []
  ), h = _.useRef([...d.ctrls]), p = [], b = Hm(e) || 0;
  _.useMemo(() => {
    Fe(h.current.slice(e, b), (I) => {
      b4(I, l), I.stop(!0);
    }), h.current.length = e, v(b, e);
  }, [e]), _.useMemo(() => {
    v(0, Math.min(b, e));
  }, n);
  function v(I, F) {
    for (let D = I; D < F; D++) {
      const W = h.current[D] || (h.current[D] = new z4(null, d.flush)), re = i ? i(D, W) : r[D];
      re && (p[D] = E4(re));
    }
  }
  const g = h.current.map((I, F) => rg(I, p[F])), w = _.useContext(as), k = Hm(w), y = w !== k && v4(w);
  Rd(() => {
    c.current++, d.ctrls = h.current;
    const { queue: I } = d;
    I.length && (d.queue = [], Fe(I, (F) => F())), Fe(h.current, (F, D) => {
      l?.add(F), y && F.start({ default: w });
      const W = p[D];
      W && (y4(F, W.ref), F.ref ? F.queue.push(W) : F.start(W));
    });
  }), w0(() => () => {
    Fe(d.ctrls, (I) => I.stop(!0));
  });
  const C = g.map((I) => ({ ...I }));
  return l ? [C, l] : C;
}
function ng(e, r) {
  const n = te.fun(e), [[i], l] = A4(
    1,
    n ? e : [e],
    n ? [] : r
  );
  return n || arguments.length == 2 ? [i, l] : i;
}
var I4 = class extends Dd {
  constructor(e, r) {
    super(), this.source = e, this.idle = !0, this._active = /* @__PURE__ */ new Set(), this.calc = Ao(...r);
    const n = this._get(), i = Xu(n);
    Ld(this, i.create(n));
  }
  advance(e) {
    const r = this._get(), n = this.get();
    zr(r, n) || (mr(this).setValue(r), this._onChange(r, this.idle)), !this.idle && ag(this._active) && xu(this);
  }
  _get() {
    const e = te.arr(this.source) ? this.source.map(At) : jt(At(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle && !ag(this._active) && (this.idle = !1, Fe(rs(this), (e) => {
      e.done = !1;
    }), lr.skipAnimation ? (Se.batchedUpdates(() => this.advance()), xu(this)) : Zl.start(this));
  }
  // Observe our sources only when we're observed.
  _attach() {
    let e = 1;
    Fe(jt(this.source), (r) => {
      Wt(r) && ka(r, this), ed(r) && (r.idle || this._active.add(r), e = Math.max(e, r.priority + 1));
    }), this.priority = e, this._start();
  }
  // Stop observing our sources once we have no observers.
  _detach() {
    Fe(jt(this.source), (e) => {
      Wt(e) && Lo(e, this);
    }), this._active.clear(), xu(this);
  }
  /** @internal */
  eventObserved(e) {
    e.type == "change" ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : e.type == "idle" ? this._active.delete(e.parent) : e.type == "priority" && (this.priority = jt(this.source).reduce(
      (r, n) => Math.max(r, (ed(n) ? n.priority : 0) + 1),
      0
    ));
  }
};
function R4(e) {
  return e.idle !== !1;
}
function ag(e) {
  return !e.size || Array.from(e).every(R4);
}
function xu(e) {
  e.idle || (e.idle = !0, Fe(rs(e), (r) => {
    r.done = !0;
  }), Ro(e, {
    type: "idle",
    parent: e
  }));
}
lr.assign({
  createStringInterpolator: v0,
  to: (e, r) => new I4(e, r)
});
var L0 = /^--/;
function L4(e, r) {
  return r == null || typeof r == "boolean" || r === "" ? "" : typeof r == "number" && r !== 0 && !L0.test(e) && !(Eo.hasOwnProperty(e) && Eo[e]) ? r + "px" : ("" + r).trim();
}
var og = {};
function M4(e, r) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  const n = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", { style: i, children: l, scrollTop: c, scrollLeft: u, viewBox: d, ...h } = r, p = Object.values(h), b = Object.keys(h).map(
    (v) => n || e.hasAttribute(v) ? v : og[v] || (og[v] = v.replace(
      /([A-Z])/g,
      // Attributes are written in dash case
      (g) => "-" + g.toLowerCase()
    ))
  );
  l !== void 0 && (e.textContent = l);
  for (const v in i)
    if (i.hasOwnProperty(v)) {
      const g = L4(v, i[v]);
      L0.test(v) ? e.style.setProperty(v, g) : e.style[v] = g;
    }
  b.forEach((v, g) => {
    e.setAttribute(v, p[g]);
  }), c !== void 0 && (e.scrollTop = c), u !== void 0 && (e.scrollLeft = u), d !== void 0 && e.setAttribute("viewBox", d);
}
var Eo = {
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
}, j4 = (e, r) => e + r.charAt(0).toUpperCase() + r.substring(1), D4 = ["Webkit", "Ms", "Moz", "O"];
Eo = Object.keys(Eo).reduce((e, r) => (D4.forEach((n) => e[j4(n, r)] = e[r]), e), Eo);
var K4 = /^(matrix|translate|scale|rotate|skew)/, O4 = /^(translate)/, V4 = /^(rotate|skew)/, ku = (e, r) => te.num(e) && e !== 0 ? e + r : e, Sl = (e, r) => te.arr(e) ? e.every((n) => Sl(n, r)) : te.num(e) ? e === r : parseFloat(e) === r, B4 = class extends ns {
  constructor({ x: e, y: r, z: n, ...i }) {
    const l = [], c = [];
    (e || r || n) && (l.push([e || 0, r || 0, n || 0]), c.push((u) => [
      `translate3d(${u.map((d) => ku(d, "px")).join(",")})`,
      // prettier-ignore
      Sl(u, 0)
    ])), gr(i, (u, d) => {
      if (d === "transform")
        l.push([u || ""]), c.push((h) => [h, h === ""]);
      else if (K4.test(d)) {
        if (delete i[d], te.und(u))
          return;
        const h = O4.test(d) ? "px" : V4.test(d) ? "deg" : "";
        l.push(jt(u)), c.push(
          d === "rotate3d" ? ([p, b, v, g]) => [
            `rotate3d(${p},${b},${v},${ku(g, h)})`,
            Sl(g, 0)
          ] : (p) => [
            `${d}(${p.map((b) => ku(b, h)).join(",")})`,
            Sl(p, d.startsWith("scale") ? 1 : 0)
          ]
        );
      }
    }), l.length && (i.transform = new H4(l, c)), super(i);
  }
}, H4 = class extends h0 {
  constructor(e, r) {
    super(), this.inputs = e, this.transforms = r, this._value = null;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let e = "", r = !0;
    return Fe(this.inputs, (n, i) => {
      const l = At(n[0]), [c, u] = this.transforms[i](
        te.arr(l) ? l : n.map(At)
      );
      e += " " + c, r = r && u;
    }), r ? "none" : e;
  }
  // Start observing our inputs once we have an observer.
  observerAdded(e) {
    e == 1 && Fe(
      this.inputs,
      (r) => Fe(
        r,
        (n) => Wt(n) && ka(n, this)
      )
    );
  }
  // Stop observing our inputs once we have no observers.
  observerRemoved(e) {
    e == 0 && Fe(
      this.inputs,
      (r) => Fe(
        r,
        (n) => Wt(n) && Lo(n, this)
      )
    );
  }
  eventObserved(e) {
    e.type == "change" && (this._value = null), Ro(this, e);
  }
}, U4 = [
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
lr.assign({
  batchedUpdates: Hl.unstable_batchedUpdates,
  createStringInterpolator: v0,
  colors: R3
});
var W4 = f4(U4, {
  applyAnimatedValues: M4,
  createAnimatedStyle: (e) => new B4(e),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getComponentProps: ({ scrollTop: e, scrollLeft: r, ...n }) => n
}), M0 = W4.animated;
function G4(e, r, n) {
  return Math.max(r, Math.min(e, n));
}
const bt = {
  toVector(e, r) {
    return e === void 0 && (e = r), Array.isArray(e) ? e : [e, e];
  },
  add(e, r) {
    return [e[0] + r[0], e[1] + r[1]];
  },
  sub(e, r) {
    return [e[0] - r[0], e[1] - r[1]];
  },
  addTo(e, r) {
    e[0] += r[0], e[1] += r[1];
  },
  subTo(e, r) {
    e[0] -= r[0], e[1] -= r[1];
  }
};
function ig(e, r, n) {
  return r === 0 || Math.abs(r) === 1 / 0 ? Math.pow(e, n * 5) : e * r * n / (r + n * e);
}
function lg(e, r, n, i = 0.15) {
  return i === 0 ? G4(e, r, n) : e < r ? -ig(r - e, n - r, i) + r : e > n ? +ig(e - n, n - r, i) + n : e;
}
function Y4(e, [r, n], [i, l]) {
  const [[c, u], [d, h]] = e;
  return [lg(r, c, u, i), lg(n, d, h, l)];
}
function q4(e, r) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, r);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function Q4(e) {
  var r = q4(e, "string");
  return typeof r == "symbol" ? r : String(r);
}
function Nt(e, r, n) {
  return r = Q4(r), r in e ? Object.defineProperty(e, r, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = n, e;
}
function sg(e, r) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    r && (i = i.filter(function(l) {
      return Object.getOwnPropertyDescriptor(e, l).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function qe(e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? sg(Object(n), !0).forEach(function(i) {
      Nt(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sg(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
const j0 = {
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
function cg(e) {
  return e ? e[0].toUpperCase() + e.slice(1) : "";
}
const X4 = ["enter", "leave"];
function Z4(e = !1, r) {
  return e && !X4.includes(r);
}
function J4(e, r = "", n = !1) {
  const i = j0[e], l = i && i[r] || r;
  return "on" + cg(e) + cg(l) + (Z4(n, l) ? "Capture" : "");
}
const e8 = ["gotpointercapture", "lostpointercapture"];
function t8(e) {
  let r = e.substring(2).toLowerCase();
  const n = !!~r.indexOf("passive");
  n && (r = r.replace("passive", ""));
  const i = e8.includes(r) ? "capturecapture" : "capture", l = !!~r.indexOf(i);
  return l && (r = r.replace("capture", "")), {
    device: r,
    capture: l,
    passive: n
  };
}
function r8(e, r = "") {
  const n = j0[e], i = n && n[r] || r;
  return e + i;
}
function os(e) {
  return "touches" in e;
}
function D0(e) {
  return os(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse";
}
function n8(e) {
  return Array.from(e.touches).filter((r) => {
    var n, i;
    return r.target === e.currentTarget || ((n = e.currentTarget) === null || n === void 0 || (i = n.contains) === null || i === void 0 ? void 0 : i.call(n, r.target));
  });
}
function a8(e) {
  return e.type === "touchend" || e.type === "touchcancel" ? e.changedTouches : e.targetTouches;
}
function K0(e) {
  return os(e) ? a8(e)[0] : e;
}
function o8(e) {
  return n8(e).map((r) => r.identifier);
}
function Su(e) {
  const r = K0(e);
  return os(e) ? r.identifier : r.pointerId;
}
function ug(e) {
  const r = K0(e);
  return [r.clientX, r.clientY];
}
function i8(e) {
  const r = {};
  if ("buttons" in e && (r.buttons = e.buttons), "shiftKey" in e) {
    const {
      shiftKey: n,
      altKey: i,
      metaKey: l,
      ctrlKey: c
    } = e;
    Object.assign(r, {
      shiftKey: n,
      altKey: i,
      metaKey: l,
      ctrlKey: c
    });
  }
  return r;
}
function Rl(e, ...r) {
  return typeof e == "function" ? e(...r) : e;
}
function l8() {
}
function s8(...e) {
  return e.length === 0 ? l8 : e.length === 1 ? e[0] : function() {
    let r;
    for (const n of e)
      r = n.apply(this, arguments) || r;
    return r;
  };
}
function dg(e, r) {
  return Object.assign({}, r, e || {});
}
const c8 = 32;
class u8 {
  constructor(r, n, i) {
    this.ctrl = r, this.args = n, this.key = i, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset());
  }
  get state() {
    return this.ctrl.state[this.key];
  }
  set state(r) {
    this.ctrl.state[this.key] = r;
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
      state: r,
      shared: n,
      ingKey: i,
      args: l
    } = this;
    n[i] = r._active = r.active = r._blocked = r._force = !1, r._step = [!1, !1], r.intentional = !1, r._movement = [0, 0], r._distance = [0, 0], r._direction = [0, 0], r._delta = [0, 0], r._bounds = [[-1 / 0, 1 / 0], [-1 / 0, 1 / 0]], r.args = l, r.axis = void 0, r.memo = void 0, r.elapsedTime = r.timeDelta = 0, r.direction = [0, 0], r.distance = [0, 0], r.overflow = [0, 0], r._movementBound = [!1, !1], r.velocity = [0, 0], r.movement = [0, 0], r.delta = [0, 0], r.timeStamp = 0;
  }
  start(r) {
    const n = this.state, i = this.config;
    n._active || (this.reset(), this.computeInitial(), n._active = !0, n.target = r.target, n.currentTarget = r.currentTarget, n.lastOffset = i.from ? Rl(i.from, n) : n.offset, n.offset = n.lastOffset, n.startTime = n.timeStamp = r.timeStamp);
  }
  computeValues(r) {
    const n = this.state;
    n._values = r, n.values = this.config.transform(r);
  }
  computeInitial() {
    const r = this.state;
    r._initial = r._values, r.initial = r.values;
  }
  compute(r) {
    const {
      state: n,
      config: i,
      shared: l
    } = this;
    n.args = this.args;
    let c = 0;
    if (r && (n.event = r, i.preventDefault && r.cancelable && n.event.preventDefault(), n.type = r.type, l.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, l.locked = !!document.pointerLockElement, Object.assign(l, i8(r)), l.down = l.pressed = l.buttons % 2 === 1 || l.touches > 0, c = r.timeStamp - n.timeStamp, n.timeStamp = r.timeStamp, n.elapsedTime = n.timeStamp - n.startTime), n._active) {
      const ee = n._delta.map(Math.abs);
      bt.addTo(n._distance, ee);
    }
    this.axisIntent && this.axisIntent(r);
    const [u, d] = n._movement, [h, p] = i.threshold, {
      _step: b,
      values: v
    } = n;
    if (i.hasCustomTransform ? (b[0] === !1 && (b[0] = Math.abs(u) >= h && v[0]), b[1] === !1 && (b[1] = Math.abs(d) >= p && v[1])) : (b[0] === !1 && (b[0] = Math.abs(u) >= h && Math.sign(u) * h), b[1] === !1 && (b[1] = Math.abs(d) >= p && Math.sign(d) * p)), n.intentional = b[0] !== !1 || b[1] !== !1, !n.intentional) return;
    const g = [0, 0];
    if (i.hasCustomTransform) {
      const [ee, ne] = v;
      g[0] = b[0] !== !1 ? ee - b[0] : 0, g[1] = b[1] !== !1 ? ne - b[1] : 0;
    } else
      g[0] = b[0] !== !1 ? u - b[0] : 0, g[1] = b[1] !== !1 ? d - b[1] : 0;
    this.restrictToAxis && !n._blocked && this.restrictToAxis(g);
    const w = n.offset, k = n._active && !n._blocked || n.active;
    k && (n.first = n._active && !n.active, n.last = !n._active && n.active, n.active = l[this.ingKey] = n._active, r && (n.first && ("bounds" in i && (n._bounds = Rl(i.bounds, n)), this.setup && this.setup()), n.movement = g, this.computeOffset()));
    const [y, C] = n.offset, [[I, F], [D, W]] = n._bounds;
    n.overflow = [y < I ? -1 : y > F ? 1 : 0, C < D ? -1 : C > W ? 1 : 0], n._movementBound[0] = n.overflow[0] ? n._movementBound[0] === !1 ? n._movement[0] : n._movementBound[0] : !1, n._movementBound[1] = n.overflow[1] ? n._movementBound[1] === !1 ? n._movement[1] : n._movementBound[1] : !1;
    const re = n._active ? i.rubberband || [0, 0] : [0, 0];
    if (n.offset = Y4(n._bounds, n.offset, re), n.delta = bt.sub(n.offset, w), this.computeMovement(), k && (!n.last || c > c8)) {
      n.delta = bt.sub(n.offset, w);
      const ee = n.delta.map(Math.abs);
      bt.addTo(n.distance, ee), n.direction = n.delta.map(Math.sign), n._direction = n._delta.map(Math.sign), !n.first && c > 0 && (n.velocity = [ee[0] / c, ee[1] / c], n.timeDelta = c);
    }
  }
  emit() {
    const r = this.state, n = this.shared, i = this.config;
    if (r._active || this.clean(), (r._blocked || !r.intentional) && !r._force && !i.triggerAllEvents) return;
    const l = this.handler(qe(qe(qe({}, n), r), {}, {
      [this.aliasKey]: r.values
    }));
    l !== void 0 && (r.memo = l);
  }
  clean() {
    this.eventStore.clean(), this.timeoutStore.clean();
  }
}
function d8([e, r], n) {
  const i = Math.abs(e), l = Math.abs(r);
  if (i > l && i > n)
    return "x";
  if (l > i && l > n)
    return "y";
}
class f8 extends u8 {
  constructor(...r) {
    super(...r), Nt(this, "aliasKey", "xy");
  }
  reset() {
    super.reset(), this.state.axis = void 0;
  }
  init() {
    this.state.offset = [0, 0], this.state.lastOffset = [0, 0];
  }
  computeOffset() {
    this.state.offset = bt.add(this.state.lastOffset, this.state.movement);
  }
  computeMovement() {
    this.state.movement = bt.sub(this.state.offset, this.state.lastOffset);
  }
  axisIntent(r) {
    const n = this.state, i = this.config;
    if (!n.axis && r) {
      const l = typeof i.axisThreshold == "object" ? i.axisThreshold[D0(r)] : i.axisThreshold;
      n.axis = d8(n._movement, l);
    }
    n._blocked = (i.lockDirection || !!i.axis) && !n.axis || !!i.axis && i.axis !== n.axis;
  }
  restrictToAxis(r) {
    if (this.config.axis || this.config.lockDirection)
      switch (this.state.axis) {
        case "x":
          r[1] = 0;
          break;
        case "y":
          r[0] = 0;
          break;
      }
  }
}
const p8 = (e) => e, fg = 0.15, O0 = {
  enabled(e = !0) {
    return e;
  },
  eventOptions(e, r, n) {
    return qe(qe({}, n.shared.eventOptions), e);
  },
  preventDefault(e = !1) {
    return e;
  },
  triggerAllEvents(e = !1) {
    return e;
  },
  rubberband(e = 0) {
    switch (e) {
      case !0:
        return [fg, fg];
      case !1:
        return [0, 0];
      default:
        return bt.toVector(e);
    }
  },
  from(e) {
    if (typeof e == "function") return e;
    if (e != null) return bt.toVector(e);
  },
  transform(e, r, n) {
    const i = e || n.shared.transform;
    return this.hasCustomTransform = !!i, i || p8;
  },
  threshold(e) {
    return bt.toVector(e, 0);
  }
}, h8 = 0, qo = qe(qe({}, O0), {}, {
  axis(e, r, {
    axis: n
  }) {
    if (this.lockDirection = n === "lock", !this.lockDirection) return n;
  },
  axisThreshold(e = h8) {
    return e;
  },
  bounds(e = {}) {
    if (typeof e == "function")
      return (c) => qo.bounds(e(c));
    if ("current" in e)
      return () => e.current;
    if (typeof HTMLElement == "function" && e instanceof HTMLElement)
      return e;
    const {
      left: r = -1 / 0,
      right: n = 1 / 0,
      top: i = -1 / 0,
      bottom: l = 1 / 0
    } = e;
    return [[r, n], [i, l]];
  }
}), pg = {
  ArrowRight: (e, r = 1) => [e * r, 0],
  ArrowLeft: (e, r = 1) => [-1 * e * r, 0],
  ArrowUp: (e, r = 1) => [0, -1 * e * r],
  ArrowDown: (e, r = 1) => [0, e * r]
};
class m8 extends f8 {
  constructor(...r) {
    super(...r), Nt(this, "ingKey", "dragging");
  }
  reset() {
    super.reset();
    const r = this.state;
    r._pointerId = void 0, r._pointerActive = !1, r._keyboardActive = !1, r._preventScroll = !1, r._delayed = !1, r.swipe = [0, 0], r.tap = !1, r.canceled = !1, r.cancel = this.cancel.bind(this);
  }
  setup() {
    const r = this.state;
    if (r._bounds instanceof HTMLElement) {
      const n = r._bounds.getBoundingClientRect(), i = r.currentTarget.getBoundingClientRect(), l = {
        left: n.left - i.left + r.offset[0],
        right: n.right - i.right + r.offset[0],
        top: n.top - i.top + r.offset[1],
        bottom: n.bottom - i.bottom + r.offset[1]
      };
      r._bounds = qo.bounds(l);
    }
  }
  cancel() {
    const r = this.state;
    r.canceled || (r.canceled = !0, r._active = !1, setTimeout(() => {
      this.compute(), this.emit();
    }, 0));
  }
  setActive() {
    this.state._active = this.state._pointerActive || this.state._keyboardActive;
  }
  clean() {
    this.pointerClean(), this.state._pointerActive = !1, this.state._keyboardActive = !1, super.clean();
  }
  pointerDown(r) {
    const n = this.config, i = this.state;
    if (r.buttons != null && (Array.isArray(n.pointerButtons) ? !n.pointerButtons.includes(r.buttons) : n.pointerButtons !== -1 && n.pointerButtons !== r.buttons)) return;
    const l = this.ctrl.setEventIds(r);
    n.pointerCapture && r.target.setPointerCapture(r.pointerId), !(l && l.size > 1 && i._pointerActive) && (this.start(r), this.setupPointer(r), i._pointerId = Su(r), i._pointerActive = !0, this.computeValues(ug(r)), this.computeInitial(), n.preventScrollAxis && D0(r) !== "mouse" ? (i._active = !1, this.setupScrollPrevention(r)) : n.delay > 0 ? (this.setupDelayTrigger(r), n.triggerAllEvents && (this.compute(r), this.emit())) : this.startPointerDrag(r));
  }
  startPointerDrag(r) {
    const n = this.state;
    n._active = !0, n._preventScroll = !0, n._delayed = !1, this.compute(r), this.emit();
  }
  pointerMove(r) {
    const n = this.state, i = this.config;
    if (!n._pointerActive) return;
    const l = Su(r);
    if (n._pointerId !== void 0 && l !== n._pointerId) return;
    const c = ug(r);
    if (document.pointerLockElement === r.target ? n._delta = [r.movementX, r.movementY] : (n._delta = bt.sub(c, n._values), this.computeValues(c)), bt.addTo(n._movement, n._delta), this.compute(r), n._delayed && n.intentional) {
      this.timeoutStore.remove("dragDelay"), n.active = !1, this.startPointerDrag(r);
      return;
    }
    if (i.preventScrollAxis && !n._preventScroll)
      if (n.axis)
        if (n.axis === i.preventScrollAxis || i.preventScrollAxis === "xy") {
          n._active = !1, this.clean();
          return;
        } else {
          this.timeoutStore.remove("startPointerDrag"), this.startPointerDrag(r);
          return;
        }
      else
        return;
    this.emit();
  }
  pointerUp(r) {
    this.ctrl.setEventIds(r);
    try {
      this.config.pointerCapture && r.target.hasPointerCapture(r.pointerId) && r.target.releasePointerCapture(r.pointerId);
    } catch {
    }
    const n = this.state, i = this.config;
    if (!n._active || !n._pointerActive) return;
    const l = Su(r);
    if (n._pointerId !== void 0 && l !== n._pointerId) return;
    this.state._pointerActive = !1, this.setActive(), this.compute(r);
    const [c, u] = n._distance;
    if (n.tap = c <= i.tapsThreshold && u <= i.tapsThreshold, n.tap && i.filterTaps)
      n._force = !0;
    else {
      const [d, h] = n._delta, [p, b] = n._movement, [v, g] = i.swipe.velocity, [w, k] = i.swipe.distance, y = i.swipe.duration;
      if (n.elapsedTime < y) {
        const C = Math.abs(d / n.timeDelta), I = Math.abs(h / n.timeDelta);
        C > v && Math.abs(p) > w && (n.swipe[0] = Math.sign(d)), I > g && Math.abs(b) > k && (n.swipe[1] = Math.sign(h));
      }
    }
    this.emit();
  }
  pointerClick(r) {
    !this.state.tap && r.detail > 0 && (r.preventDefault(), r.stopPropagation());
  }
  setupPointer(r) {
    const n = this.config, i = n.device;
    n.pointerLock && r.currentTarget.requestPointerLock(), n.pointerCapture || (this.eventStore.add(this.sharedConfig.window, i, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, i, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, i, "cancel", this.pointerUp.bind(this)));
  }
  pointerClean() {
    this.config.pointerLock && document.pointerLockElement === this.state.currentTarget && document.exitPointerLock();
  }
  preventScroll(r) {
    this.state._preventScroll && r.cancelable && r.preventDefault();
  }
  setupScrollPrevention(r) {
    this.state._preventScroll = !1, g8(r);
    const n = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
      passive: !1
    });
    this.eventStore.add(this.sharedConfig.window, "touch", "end", n), this.eventStore.add(this.sharedConfig.window, "touch", "cancel", n), this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, r);
  }
  setupDelayTrigger(r) {
    this.state._delayed = !0, this.timeoutStore.add("dragDelay", () => {
      this.state._step = [0, 0], this.startPointerDrag(r);
    }, this.config.delay);
  }
  keyDown(r) {
    const n = pg[r.key];
    if (n) {
      const i = this.state, l = r.shiftKey ? 10 : r.altKey ? 0.1 : 1;
      this.start(r), i._delta = n(this.config.keyboardDisplacement, l), i._keyboardActive = !0, bt.addTo(i._movement, i._delta), this.compute(r), this.emit();
    }
  }
  keyUp(r) {
    r.key in pg && (this.state._keyboardActive = !1, this.setActive(), this.compute(r), this.emit());
  }
  bind(r) {
    const n = this.config.device;
    r(n, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (r(n, "change", this.pointerMove.bind(this)), r(n, "end", this.pointerUp.bind(this)), r(n, "cancel", this.pointerUp.bind(this)), r("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (r("key", "down", this.keyDown.bind(this)), r("key", "up", this.keyUp.bind(this))), this.config.filterTaps && r("click", "", this.pointerClick.bind(this), {
      capture: !0,
      passive: !1
    });
  }
}
function g8(e) {
  "persist" in e && typeof e.persist == "function" && e.persist();
}
const Qo = typeof window < "u" && window.document && window.document.createElement;
function V0() {
  return Qo && "ontouchstart" in window;
}
function v8() {
  return V0() || Qo && window.navigator.maxTouchPoints > 1;
}
function b8() {
  return Qo && "onpointerdown" in window;
}
function y8() {
  return Qo && "exitPointerLock" in window.document;
}
function w8() {
  try {
    return "constructor" in GestureEvent;
  } catch {
    return !1;
  }
}
const Gt = {
  isBrowser: Qo,
  gesture: w8(),
  touch: V0(),
  touchscreen: v8(),
  pointer: b8(),
  pointerLock: y8()
}, x8 = 250, k8 = 180, S8 = 0.5, C8 = 50, _8 = 250, E8 = 10, hg = {
  mouse: 0,
  touch: 0,
  pen: 8
}, $8 = qe(qe({}, qo), {}, {
  device(e, r, {
    pointer: {
      touch: n = !1,
      lock: i = !1,
      mouse: l = !1
    } = {}
  }) {
    return this.pointerLock = i && Gt.pointerLock, Gt.touch && n ? "touch" : this.pointerLock ? "mouse" : Gt.pointer && !l ? "pointer" : Gt.touch ? "touch" : "mouse";
  },
  preventScrollAxis(e, r, {
    preventScroll: n
  }) {
    if (this.preventScrollDelay = typeof n == "number" ? n : n || n === void 0 && e ? x8 : void 0, !(!Gt.touchscreen || n === !1))
      return e || (n !== void 0 ? "y" : void 0);
  },
  pointerCapture(e, r, {
    pointer: {
      capture: n = !0,
      buttons: i = 1,
      keys: l = !0
    } = {}
  }) {
    return this.pointerButtons = i, this.keys = l, !this.pointerLock && this.device === "pointer" && n;
  },
  threshold(e, r, {
    filterTaps: n = !1,
    tapsThreshold: i = 3,
    axis: l = void 0
  }) {
    const c = bt.toVector(e, n ? i : l ? 1 : 0);
    return this.filterTaps = n, this.tapsThreshold = i, c;
  },
  swipe({
    velocity: e = S8,
    distance: r = C8,
    duration: n = _8
  } = {}) {
    return {
      velocity: this.transform(bt.toVector(e)),
      distance: this.transform(bt.toVector(r)),
      duration: n
    };
  },
  delay(e = 0) {
    switch (e) {
      case !0:
        return k8;
      case !1:
        return 0;
      default:
        return e;
    }
  },
  axisThreshold(e) {
    return e ? qe(qe({}, hg), e) : hg;
  },
  keyboardDisplacement(e = E8) {
    return e;
  }
});
qe(qe({}, O0), {}, {
  device(e, r, {
    shared: n,
    pointer: {
      touch: i = !1
    } = {}
  }) {
    if (n.target && !Gt.touch && Gt.gesture) return "gesture";
    if (Gt.touch && i) return "touch";
    if (Gt.touchscreen) {
      if (Gt.pointer) return "pointer";
      if (Gt.touch) return "touch";
    }
  },
  bounds(e, r, {
    scaleBounds: n = {},
    angleBounds: i = {}
  }) {
    const l = (u) => {
      const d = dg(Rl(n, u), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [d.min, d.max];
    }, c = (u) => {
      const d = dg(Rl(i, u), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [d.min, d.max];
    };
    return typeof n != "function" && typeof i != "function" ? [l(), c()] : (u) => [l(u), c(u)];
  },
  threshold(e, r, n) {
    return this.lockDirection = n.axis === "lock", bt.toVector(e, this.lockDirection ? [0.1, 3] : 0);
  },
  modifierKey(e) {
    return e === void 0 ? "ctrlKey" : e;
  },
  pinchOnWheel(e = !0) {
    return e;
  }
});
qe(qe({}, qo), {}, {
  mouseOnly: (e = !0) => e
});
qe(qe({}, qo), {}, {
  mouseOnly: (e = !0) => e
});
const B0 = /* @__PURE__ */ new Map(), ad = /* @__PURE__ */ new Map();
function P8(e) {
  B0.set(e.key, e.engine), ad.set(e.key, e.resolver);
}
const F8 = {
  key: "drag",
  engine: m8,
  resolver: $8
};
function z8(e, r) {
  if (e == null) return {};
  var n = {}, i = Object.keys(e), l, c;
  for (c = 0; c < i.length; c++)
    l = i[c], !(r.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function T8(e, r) {
  if (e == null) return {};
  var n = z8(e, r), i, l;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(e);
    for (l = 0; l < c.length; l++)
      i = c[l], !(r.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (n[i] = e[i]);
  }
  return n;
}
const N8 = {
  target(e) {
    if (e)
      return () => "current" in e ? e.current : e;
  },
  enabled(e = !0) {
    return e;
  },
  window(e = Gt.isBrowser ? window : void 0) {
    return e;
  },
  eventOptions({
    passive: e = !0,
    capture: r = !1
  } = {}) {
    return {
      passive: e,
      capture: r
    };
  },
  transform(e) {
    return e;
  }
}, A8 = ["target", "eventOptions", "window", "enabled", "transform"];
function Cl(e = {}, r) {
  const n = {};
  for (const [i, l] of Object.entries(r))
    switch (typeof l) {
      case "function":
        n[i] = l.call(n, e[i], i, e);
        break;
      case "object":
        n[i] = Cl(e[i], l);
        break;
      case "boolean":
        l && (n[i] = e[i]);
        break;
    }
  return n;
}
function I8(e, r, n = {}) {
  const i = e, {
    target: l,
    eventOptions: c,
    window: u,
    enabled: d,
    transform: h
  } = i, p = T8(i, A8);
  if (n.shared = Cl({
    target: l,
    eventOptions: c,
    window: u,
    enabled: d,
    transform: h
  }, N8), r) {
    const b = ad.get(r);
    n[r] = Cl(qe({
      shared: n.shared
    }, p), b);
  } else
    for (const b in p) {
      const v = ad.get(b);
      v && (n[b] = Cl(qe({
        shared: n.shared
      }, p[b]), v));
    }
  return n;
}
class H0 {
  constructor(r, n) {
    Nt(this, "_listeners", /* @__PURE__ */ new Set()), this._ctrl = r, this._gestureKey = n;
  }
  add(r, n, i, l, c) {
    const u = this._listeners, d = r8(n, i), h = this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}, p = qe(qe({}, h), c);
    r.addEventListener(d, l, p);
    const b = () => {
      r.removeEventListener(d, l, p), u.delete(b);
    };
    return u.add(b), b;
  }
  clean() {
    this._listeners.forEach((r) => r()), this._listeners.clear();
  }
}
class R8 {
  constructor() {
    Nt(this, "_timeouts", /* @__PURE__ */ new Map());
  }
  add(r, n, i = 140, ...l) {
    this.remove(r), this._timeouts.set(r, window.setTimeout(n, i, ...l));
  }
  remove(r) {
    const n = this._timeouts.get(r);
    n && window.clearTimeout(n);
  }
  clean() {
    this._timeouts.forEach((r) => void window.clearTimeout(r)), this._timeouts.clear();
  }
}
class L8 {
  constructor(r) {
    Nt(this, "gestures", /* @__PURE__ */ new Set()), Nt(this, "_targetEventStore", new H0(this)), Nt(this, "gestureEventStores", {}), Nt(this, "gestureTimeoutStores", {}), Nt(this, "handlers", {}), Nt(this, "config", {}), Nt(this, "pointerIds", /* @__PURE__ */ new Set()), Nt(this, "touchIds", /* @__PURE__ */ new Set()), Nt(this, "state", {
      shared: {
        shiftKey: !1,
        metaKey: !1,
        ctrlKey: !1,
        altKey: !1
      }
    }), M8(this, r);
  }
  setEventIds(r) {
    if (os(r))
      return this.touchIds = new Set(o8(r)), this.touchIds;
    if ("pointerId" in r)
      return r.type === "pointerup" || r.type === "pointercancel" ? this.pointerIds.delete(r.pointerId) : r.type === "pointerdown" && this.pointerIds.add(r.pointerId), this.pointerIds;
  }
  applyHandlers(r, n) {
    this.handlers = r, this.nativeHandlers = n;
  }
  applyConfig(r, n) {
    this.config = I8(r, n, this.config);
  }
  clean() {
    this._targetEventStore.clean();
    for (const r of this.gestures)
      this.gestureEventStores[r].clean(), this.gestureTimeoutStores[r].clean();
  }
  effect() {
    return this.config.shared.target && this.bind(), () => this._targetEventStore.clean();
  }
  bind(...r) {
    const n = this.config.shared, i = {};
    let l;
    if (!(n.target && (l = n.target(), !l))) {
      if (n.enabled) {
        for (const u of this.gestures) {
          const d = this.config[u], h = mg(i, d.eventOptions, !!l);
          if (d.enabled) {
            const p = B0.get(u);
            new p(this, r, u).bind(h);
          }
        }
        const c = mg(i, n.eventOptions, !!l);
        for (const u in this.nativeHandlers)
          c(u, "", (d) => this.nativeHandlers[u](qe(qe({}, this.state.shared), {}, {
            event: d,
            args: r
          })), void 0, !0);
      }
      for (const c in i)
        i[c] = s8(...i[c]);
      if (!l) return i;
      for (const c in i) {
        const {
          device: u,
          capture: d,
          passive: h
        } = t8(c);
        this._targetEventStore.add(l, u, "", i[c], {
          capture: d,
          passive: h
        });
      }
    }
  }
}
function aa(e, r) {
  e.gestures.add(r), e.gestureEventStores[r] = new H0(e, r), e.gestureTimeoutStores[r] = new R8();
}
function M8(e, r) {
  r.drag && aa(e, "drag"), r.wheel && aa(e, "wheel"), r.scroll && aa(e, "scroll"), r.move && aa(e, "move"), r.pinch && aa(e, "pinch"), r.hover && aa(e, "hover");
}
const mg = (e, r, n) => (i, l, c, u = {}, d = !1) => {
  var h, p;
  const b = (h = u.capture) !== null && h !== void 0 ? h : r.capture, v = (p = u.passive) !== null && p !== void 0 ? p : r.passive;
  let g = d ? i : J4(i, l, b);
  n && v && (g += "Passive"), e[g] = e[g] || [], e[g].push(c);
};
function j8(e, r = {}, n, i) {
  const l = S.useMemo(() => new L8(e), []);
  if (l.applyHandlers(e, i), l.applyConfig(r, n), S.useEffect(l.effect.bind(l)), S.useEffect(() => l.clean.bind(l), []), r.target === void 0)
    return l.bind.bind(l);
}
function D8(e, r) {
  return P8(F8), j8({
    drag: e
  }, r || {}, "drag");
}
var K8 = [
  void 0,
  {
    isLandscape: void 0,
    isMobile: void 0,
    screenHeight: void 0,
    screenWidth: void 0
  }
];
function gg() {
  if (typeof window > "u")
    return K8;
  let e;
  window.innerWidth <= 767 ? e = "sm" : window.innerWidth <= 1279 ? e = "md" : e = "lg";
  const r = window.matchMedia?.("(orientation: landscape)")?.matches ?? !1, n = (window.matchMedia?.("(hover: none) and (pointer: coarse)")?.matches ?? !1) || window.innerWidth <= 767;
  return [
    e,
    {
      isLandscape: r,
      isMobile: n,
      screenHeight: window.innerHeight,
      screenWidth: window.innerWidth
    }
  ];
}
function O8(e = 100) {
  const [r, n] = _.useState(gg()), i = _.useRef();
  return _.useEffect(() => {
    const l = () => {
      clearTimeout(i.current), i.current = setTimeout(() => n(gg()), e);
    };
    return window.addEventListener("resize", l), window.addEventListener("orientationchange", l), () => {
      window.removeEventListener("resize", l), window.removeEventListener("orientationchange", l), clearTimeout(i.current);
    };
  }, [e, n]), r;
}
function V8({
  controlledValue: e,
  defaultValue: r,
  warnFn: n
}) {
  const [i, l] = _.useState(r);
  return e !== void 0 && r !== void 0 && (n ? n() : fa(
    "A controlled value and a default value were both provided. An element must be either controlled or uncontrolled. Decide between using any and remove on of these props"
  )), [
    e ?? i,
    e !== void 0 ? void 0 : l
  ];
}
_.createContext(!1);
var U0 = typeof window > "u" ? _.useEffect : _.useLayoutEffect;
function vg(e, r, n) {
  let i = null;
  const l = (c) => {
    _.Children.forEach(c, (u) => {
      if (_.isValidElement(u)) {
        if (u.type === _.Fragment) {
          l(
            u.props.children
          );
          return;
        }
        const d = u.type === r, h = n == null;
        if (d && h) {
          if (i)
            throw new Error(
              "Found multiple children of type " + r.toString()
            );
          i = u;
        }
      }
    });
  };
  return l(e), i;
}
function va(e, r, n) {
  try {
    const l = S.Children.only(e);
    if (l.type === r)
      return n ? n(l, l?.props) : e;
  } catch {
  }
  return null;
}
var Kd = (e) => e ? !!e.type.toString().match(B8) : !1, B8 = /"data-namespace":\s?"@paloma\/icons"/i;
function kt(e, r) {
  if (!r)
    return null;
  const n = S.Children.only(r);
  return S.cloneElement(n, { ...e });
}
var H8 = H({
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
}), U8 = "span", ut = _.forwardRef(
  ({
    as: e,
    children: r,
    className: n,
    fontWeight: i = "normal",
    showTitle: l = !1,
    size: c,
    truncate: u = !1,
    underline: d = !1,
    variant: h,
    ...p
  }, b) => {
    const v = e ?? U8, [g, w] = _.useMemo(() => h === "heading" ? [c ?? "large", h] : [c ?? "medium", "body"], [c, h]);
    return /* @__PURE__ */ S.createElement(
      v,
      {
        className: H8({
          className: n,
          fontWeight: i,
          truncate: u,
          underline: d,
          [w]: g
        }),
        "data-font-weight": i,
        "data-size": g,
        "data-truncate": u,
        "data-underline": d,
        "data-variant": w,
        ref: b,
        title: l ? p.title ?? (u && typeof r == "string" ? r : void 0) : void 0,
        ...p
      },
      r
    );
  }
), ma = (e, r = {}) => {
  if (typeof e == "string")
    return /* @__PURE__ */ S.createElement(ut, { ...r }, e);
  if (va(e, ut)) {
    const n = {
      ...r ?? {},
      ...e.props
    };
    return /* @__PURE__ */ S.createElement(ut, { ...n });
  }
  if (S.isValidElement(e) && typeof e.type == "string") {
    const n = {};
    e.type === "a" && (n.color = "#0000EE", n.textDecoration = "underline");
    const i = e.props, l = {
      ...n,
      ...r.style,
      ...i.style
    };
    return S.cloneElement(
      e,
      {
        style: l
      }
    );
  }
  return e;
};
function W0(e, r, n) {
  const i = (l, c) => {
    if (S.isValidElement(l) && l.type === r)
      return n(l, c);
  };
  return _.Children.map(e, (l, c) => S.isValidElement(l) && l.type === _.Fragment ? S.cloneElement(l, {
    children: W0(
      l.props.children,
      r,
      n
    )
  }) : i(l, c) ?? l);
}
function G0(e) {
  const r = e.match(W8)?.[0];
  if (r)
    return Number.parseInt(r);
}
var W8 = /\d+[.d+]?/g, G8 = [
  /* Uses a dummy class because FocusRing is a functional component that just adds
      the class to the content.
  
      The cn or other style functions on the FocusRing are always called, so we can't
      listen to them to test functionality */
  "@paloma-focus-ring",
  "outline",
  "outline-2",
  "outline-offset-2",
  "outline-interactive-highlight"
], Rr = ({
  children: e,
  disabled: r,
  focusRingClass: n,
  ...i
}) => r ? e : /* @__PURE__ */ S.createElement(Gl, { focusRingClass: ct(G8, n), ...i }, e);
H({
  base: "py-4 flex flex-col items-start border-t-0 border-l-0 border-r-0 border-b border-b-neutral-subtle border-solid",
  variants: {
    expanded: {
      true: "pb-8"
    }
  }
});
H({
  base: "flex items-center text-content-neutral-bold",
  variants: {
    expanded: {
      true: "text-content-highlight"
    }
  }
});
H({
  base: "text-content-neutral-bold",
  variants: {
    expanded: {
      true: "!text-content-highlight"
    }
  }
});
H({
  base: "flex items-center text-content-neutral-subtle",
  variants: {
    size: {
      large: "h-8",
      medium: "h-6"
    }
  }
});
H({
  base: "w-full grid overflow-hidden transition-all duration-300 ease-in-out motion-reduce:transition-none",
  variants: {
    expanded: {
      false: "grid-rows-[0fr] invisible",
      true: "grid-rows-[1fr] visible"
    }
  }
});
H({
  variants: {
    variant: {
      contained: "p-8 rounded-md bg-surface-level-01",
      "un-contained": ""
    }
  }
});
var Od = {
  "bottom-center": "",
  "bottom-left": "",
  "bottom-right": "",
  "top-center": "",
  "top-left": "",
  "top-right": ""
}, Vd = {
  circle: "",
  square: ""
}, Cu = {
  false: "",
  true: ""
}, Y0 = {
  avatar: "",
  dot: "",
  icon: "",
  product: "",
  text: ""
}, Y8 = {
  negative: "",
  none: "",
  positive: "",
  warning: ""
}, q8 = {
  highlight: "",
  neutral: ""
}, Q8 = {
  small: "",
  "x-small": ""
}, X8 = H({
  base: "@paloma-badge-rotation group inset-0 pointer-events-none",
  compoundVariants: [
    {
      class: "@paloma-badge-rotation-relative-diagonal-1 -rotate-45 rtl:rotate-45",
      position: ["bottom-right", "top-left"],
      shape: "circle",
      standalone: !1
    },
    {
      class: "@paloma-badge-rotation-relative-diagonal-2 rotate-45 rtl:-rotate-45",
      position: ["bottom-left", "top-right"],
      shape: "circle",
      standalone: !1
    }
  ],
  variants: {
    position: Od,
    shape: Vd,
    standalone: {
      false: "@paloma-badge-rotation-relative absolute"
    }
  }
}), Z8 = H({
  base: [
    "@paloma-badge-position cursor-default pointer-events-auto",
    "data-[position-x=center]:flex data-[position-x=center]:justify-center data-[position-x=center]:w-full",
    "data-[shape=circle]:flex data-[shape=circle]:justify-center data-[shape=circle]:w-full"
  ],
  compoundVariants: [
    // variant: not "dot", standalone: false, shape: "square"
    {
      class: "@paloma-badge-position-relative-square-not-dot-bottom-center -bottom-3.5",
      position: "bottom-center",
      shape: "square",
      standalone: !1,
      variant: ["avatar", "text", "icon", "product"]
    },
    {
      class: "@paloma-badge-position-relative-square-not-dot-bottom-left -bottom-2 -left-2 rtl:-right-2",
      position: "bottom-left",
      shape: "square",
      standalone: !1,
      variant: ["avatar", "text", "icon", "product"]
    },
    {
      class: "@paloma-badge-position-relative-square-not-dot-bottom-right -bottom-2 -right-2 rtl:-left-2",
      position: "bottom-right",
      shape: "square",
      standalone: !1,
      variant: ["avatar", "text", "icon", "product"]
    },
    {
      class: "@paloma-badge-position-relative-square-not-dot-top-center -top-3.5",
      position: "top-center",
      shape: "square",
      standalone: !1,
      variant: ["avatar", "text", "icon", "product"]
    },
    {
      class: "@paloma-badge-position-relative-square-not-dot-top-left -top-2 -left-2 rtl:-right-2",
      position: "top-left",
      shape: "square",
      standalone: !1,
      variant: ["avatar", "text", "icon", "product"]
    },
    {
      class: "@paloma-badge-position-relative-square-not-dot-top-right -top-2  -right-2 rtl:-left-2",
      position: "top-right",
      shape: "square",
      standalone: !1,
      variant: ["avatar", "text", "icon", "product"]
    },
    // variant: "dot", standalone: false, shape: "square"
    {
      class: "@paloma-badge-position-relative-square-dot-bottom-center -bottom-1.5",
      position: "bottom-center",
      shape: "square",
      standalone: !1,
      variant: "dot"
    },
    {
      class: "@paloma-badge-position-relative-square-dot-bottom-left -bottom-0.5 -left-0.5 rtl:-right-0.5",
      position: "bottom-left",
      shape: "square",
      standalone: !1,
      variant: "dot"
    },
    {
      class: "@paloma-badge-position-relative-square-dot-bottom-right -bottom-0.5 -right-0.5 rtl:-left-0.5",
      position: "bottom-right",
      shape: "square",
      standalone: !1,
      variant: "dot"
    },
    {
      class: "@paloma-badge-position-relative-square-dot-top-center -top-1.5",
      position: "top-center",
      shape: "square",
      standalone: !1,
      variant: "dot"
    },
    {
      class: "@paloma-badge-position-relative-square-dot-top-left -top-0.5 -left-0.5 rtl:-right-0.5",
      position: "top-left",
      shape: "square",
      standalone: !1,
      variant: "dot"
    },
    {
      class: "@paloma-badge-position-relative-square-dot-top-right -top-0.5 -right-0.5 rtl:-left-0.5",
      position: "top-right",
      shape: "square",
      standalone: !1,
      variant: "dot"
    },
    // standalone: false, shape: "circle"
    {
      class: "@paloma-badge-position-relative-circle-not-dot data-[position-y=bottom]:-bottom-3.5 data-[position-y=top]:-top-3.5",
      shape: "circle",
      standalone: !1,
      variant: ["avatar", "text", "icon", "product"]
    },
    {
      class: "@paloma-badge-position-relative-circle-dot data-[position-y=bottom]:-bottom-1.5 data-[position-y=top]:-top-1.5",
      shape: "circle",
      standalone: !1,
      variant: "dot"
    }
  ],
  variants: {
    position: Od,
    shape: Vd,
    standalone: {
      false: "@paloma-badge-position-relative absolute z-10"
    },
    variant: Y0
  }
}), J8 = H({
  base: "@paloma-badge-border rounded-full bg-base badge-container",
  compoundVariants: [
    {
      class: "@paloma-badge-border-relative-circle-diagonal-1 -rotate-45 rtl:rotate-45",
      position: ["top-right", "bottom-left"],
      shape: "circle",
      standalone: !1
    },
    {
      class: "@paloma-badge-border-relative-circle-diagonal-2 rotate-45 rtl:-rotate-45",
      position: ["top-left", "bottom-right"],
      shape: "circle",
      standalone: !1
    }
  ],
  variants: {
    cutoutBorder: {
      true: "@paloma-badge-cutout-border border-2 border-solid border-base"
    },
    hasProductLogo: {
      true: "rounded-md"
    },
    position: Od,
    shape: Vd,
    standalone: {
      false: "max-w-[80px]",
      true: ""
    }
  }
}), ek = H({
  base: "@paloma-badge-content flex rounded-full justify-center items-center badge-content",
  compoundVariants: [
    {
      class: "@paloma-badge-content-text-icon gap-1",
      hasIcon: !0,
      variant: "text"
    },
    {
      class: "@paloma-badge-content-text-small h-8",
      size: "small",
      variant: "text"
    },
    {
      class: "@paloma-badge-content-text-x-small h-6",
      size: "x-small",
      variant: "text"
    },
    {
      class: "@paloma-badge-content-text-small-multiple-chars px-3",
      hasIcon: !0,
      size: "small",
      variant: "text"
    },
    {
      class: "@paloma-badge-content-text-small-multiple-chars px-3",
      isLabelSingleCharacter: !1,
      size: "small",
      variant: "text"
    },
    {
      class: "@paloma-badge-content-text-small-single-char w-8",
      hasIcon: !1,
      isLabelSingleCharacter: !0,
      size: "small",
      variant: "text"
    },
    {
      class: "@paloma-badge-content-text-x-small-multiple-chars px-2",
      hasIcon: !0,
      size: "x-small",
      variant: "text"
    },
    {
      class: "@paloma-badge-content-text-x-small-multiple-chars px-2",
      isLabelSingleCharacter: !1,
      size: "x-small",
      variant: "text"
    },
    {
      class: "@paloma-badge-content-text-x-small-single-char w-6",
      hasIcon: !1,
      isLabelSingleCharacter: !0,
      size: "x-small",
      variant: "text"
    },
    {
      class: "@paloma-badge-content-icon-small w-8 h-8",
      size: "small",
      variant: "icon"
    },
    {
      class: "@paloma-badge-content-icon-x-small w-6 h-6",
      size: "x-small",
      variant: "icon"
    },
    {
      class: "@paloma-badge-content-dot-small w-2.5 h-2.5",
      size: "small",
      variant: "dot"
    },
    {
      class: "@paloma-badge-content-dot-x-small w-2 h-2",
      size: "x-small",
      variant: "dot"
    },
    {
      appearance: "highlight",
      class: "@paloma-badge-content-subtle-highlight bg-surface-highlight-subtle",
      emphasis: "subtle",
      status: "none"
    },
    {
      appearance: "neutral",
      class: "@paloma-badge-content-subtle-neutral bg-surface-level-01",
      emphasis: "subtle",
      hasProductLogo: !1,
      status: "none"
    },
    {
      class: "@paloma-badge-content-subtle-negative bg-surface-negative-subtle",
      emphasis: "subtle",
      status: "negative"
    },
    {
      class: "@paloma-badge-content-subtle-positive bg-surface-positive-subtle",
      emphasis: "subtle",
      status: "positive"
    },
    {
      class: "@paloma-badge-content-subtle-warning bg-surface-warning-subtle",
      emphasis: "subtle",
      status: "warning"
    },
    {
      appearance: "highlight",
      class: "@paloma-badge-content-bold-highlight bg-surface-highlight-bold",
      emphasis: "bold",
      status: "none"
    },
    {
      appearance: "neutral",
      class: "@paloma-badge-content-bold-neutral bg-surface-inverse",
      emphasis: "bold",
      status: "none"
    },
    {
      class: "@paloma-badge-content-bold-negative bg-surface-negative-bold",
      emphasis: "bold",
      status: "negative"
    },
    {
      class: "@paloma-badge-content-bold-positive bg-surface-positive-bold",
      emphasis: "bold",
      status: "positive"
    },
    {
      class: "@paloma-badge-content-bold-warning bg-surface-warning-bold",
      emphasis: "bold",
      status: "warning"
    },
    {
      appearance: "neutral",
      class: "@paloma-badge-content-subtle-neutral-small group-data-[variant=text]:h-[30px] group-data-[variant=text]:group-data-[content-single-element=false]:px-[11px] group-data-[variant=text]:group-data-[content-single-element=true]:w-[30px] group-data-[variant=icon]:w-[32px] group-data-[variant=icon]:h-[32px] group-data-[variant=dot]:w-2 group-data-[variant=dot]:h-2",
      emphasis: "subtle",
      size: "small"
    },
    {
      appearance: "neutral",
      class: "@paloma-badge-content-subtle-neutral-x-small group-data-[variant=text]:h-[22px] group-data-[variant=text]:group-data-[content-single-element=false]:px-[7px] group-data-[variant=text]:group-data-[content-single-element=true]:w-[22px] group-data-[variant=icon]:w-[22px] group-data-[variant=icon]:h-[22px] group-data-[variant=dot]:w-1.5 group-data-[variant=dot]:h-1.5",
      emphasis: "subtle",
      size: "x-small"
    }
  ],
  variants: {
    appearance: q8,
    emphasis: {
      bold: "@paloma-badge-content-bold text-content-inverse-bold",
      subtle: "@paloma-badge-content-subtle text-content-neutral-bold"
    },
    hasIcon: Cu,
    hasProductLogo: Cu,
    isLabelSingleCharacter: Cu,
    size: Q8,
    status: Y8,
    variant: Y0
  }
}), tk = H({
  base: "@paloma-badge-container relative w-fit"
}), is = ({
  appearance: e = "neutral",
  "aria-label": r,
  avatar: n,
  children: i,
  className: l,
  containerClassName: c,
  cutoutBorder: u = !0,
  cutoutColor: d,
  emphasis: h = "subtle",
  icon: p,
  label: b,
  position: v,
  productLogo: g,
  shape: w = "square",
  size: k = "small",
  standalone: y = !1,
  status: C = "none",
  variant: I,
  ...F
}) => {
  I || (I = b ? "text" : p ?? n ?? g ? "icon" : "dot"), (I === "avatar" || I === "product") && (I = "icon");
  const D = () => {
    if (b)
      return /* @__PURE__ */ S.createElement(
        ut,
        {
          "data-testid": "@paloma-badge-label-id",
          size: k,
          truncate: !0,
          variant: "body"
        },
        b
      );
  }, W = () => {
    if (p)
      return kt(
        {
          "data-testid": "@paloma-badge-icon-id",
          size: "small"
        },
        p
      );
  }, re = () => {
    if (n)
      return S.cloneElement(n, {
        ...n.props,
        "aria-label": n.props["aria-label"] ?? r ?? b,
        badge: void 0,
        size: k === "small" ? "x-small" : "xx-small"
      });
  }, ee = () => {
    if (g)
      return S.cloneElement(
        g,
        {
          ...g.props,
          contained: !0,
          size: k === "small" ? "x-small" : "2x-small"
        }
      );
  }, ne = () => {
    if (I !== "dot")
      return /* @__PURE__ */ S.createElement(S.Fragment, null, W(), D(), re(), ee());
  }, ue = v?.split("-"), ie = !!(b && b.length === 1), ve = ie && !p, se = (j) => /* @__PURE__ */ S.createElement(
    "div",
    {
      className: X8({
        class: y ? c : "",
        position: v,
        shape: w,
        standalone: y
      }),
      "data-appearance": e,
      "data-content-single-element": ve,
      "data-cutout-border": u,
      "data-emphasis": h,
      "data-shape": w,
      "data-size": k,
      "data-status": C,
      "data-testid": "@paloma-badge-rotation-id",
      "data-variant": I,
      ...y ? j : {}
    },
    /* @__PURE__ */ S.createElement(
      "div",
      {
        className: Z8({
          position: v,
          shape: w,
          standalone: y,
          variant: I
        }),
        "data-position-x": ue?.[1],
        "data-position-y": ue?.[0],
        "data-shape": w,
        "data-testid": "@paloma-badge-position-id"
      },
      /* @__PURE__ */ S.createElement(
        "div",
        {
          className: J8({
            cutoutBorder: u,
            hasProductLogo: !!g,
            position: v,
            shape: w,
            standalone: y
          }),
          "data-testid": "@paloma-badge-border-id",
          style: d ? { borderColor: d } : void 0
        },
        /* @__PURE__ */ S.createElement(
          "div",
          {
            "aria-label": r,
            className: ek({
              appearance: e,
              class: l,
              emphasis: h,
              hasIcon: !!p,
              hasProductLogo: !!g,
              isLabelSingleCharacter: ie,
              size: k,
              status: C,
              variant: I
            }),
            "data-testid": "@paloma-badge-content-id",
            role: I !== "dot" ? "status" : void 0
          },
          ne()
        )
      )
    )
  );
  return y ? /* @__PURE__ */ S.createElement(se, { ...F }) : /* @__PURE__ */ S.createElement(
    "div",
    {
      className: tk({ class: c }),
      "data-testid": "@paloma-badge-container-id",
      ...F
    },
    i,
    /* @__PURE__ */ S.createElement(se, null)
  );
}, rk = H({
  base: "inline-flex items-center justify-center rounded-full outline-none no-underline border-none max-w-[600px] disabled:pointer-events-none disabled:opacity-30",
  compoundVariants: [
    {
      class: "gap-2",
      size: ["medium", "large"]
    },
    {
      class: "gap-1",
      size: ["small", "x-small"]
    },
    {
      class: "p-2",
      iconOnly: !0,
      size: "x-small"
    },
    {
      class: "p-3",
      iconOnly: !0,
      size: "small"
    },
    {
      class: "p-4",
      iconOnly: !0,
      size: "medium"
    },
    {
      class: "p-4",
      iconOnly: !0,
      size: "large"
    },
    {
      class: "px-3 py-2",
      iconOnly: !1,
      size: "x-small"
    },
    {
      class: "px-4 py-3",
      iconOnly: !1,
      size: "small"
    },
    {
      class: "px-5 py-4",
      iconOnly: !1,
      size: "medium"
    },
    {
      class: "px-5 py-4",
      iconOnly: !1,
      size: "large"
    },
    {
      class: "hover:bg-interactive-neutral-regular active:bg-interactive-neutral-regular",
      isLoading: !1,
      variant: "danger"
    },
    {
      class: "hover:bg-interactive-neutral-subtle active:bg-interactive-neutral-subtle",
      isLoading: !1,
      variant: "inverse"
    },
    {
      class: "hover:bg-content-neutral-regular active:bg-content-neutral-regular",
      isLoading: !1,
      variant: "primary"
    },
    {
      class: "hover:bg-interactive-neutral-regular active:bg-interactive-neutral-regular",
      isLoading: !1,
      variant: "secondary"
    }
  ],
  defaultVariants: {
    iconOnly: !1,
    isLoading: !1
  },
  variants: {
    hideButton: {
      false: "",
      true: "invisible pointer-events-none"
    },
    iconOnly: {
      false: "",
      true: ""
    },
    isDecorative: {
      false: "",
      true: "pointer-events-none"
    },
    isLoading: {
      false: "enabled:cursor-pointer",
      true: "cursor-wait opacity-50"
    },
    /* These are necessary because the size variant and its values wouldn't
           exist otherwise.
    
           There are no classes to add that solely depend on size */
    size: {
      large: "",
      medium: "",
      small: "",
      "x-small": ""
    },
    variant: {
      danger: "bg-interactive-inverse text-content-negative",
      inverse: "bg-interactive-inverse text-content-neutral-bold",
      primary: "bg-interactive-neutral-bold text-content-inverse-bold",
      secondary: [
        "bg-interactive-neutral-subtle/[0.95] text-content-neutral-bold",
        "border border-solid border-neutral-subtle"
      ]
    }
  }
}), bg = ({
  children: e,
  showTitle: r,
  size: n
}) => /* @__PURE__ */ S.createElement(
  ut,
  {
    fontWeight: "bold",
    showTitle: r,
    size: n,
    truncate: !0,
    variant: "body"
  },
  e
), Bd = _.forwardRef(
  ({
    "aria-label": e,
    as: r,
    children: n,
    className: i,
    disabled: l,
    hideButton: c,
    iconOnly: u,
    isLoading: d,
    leadingIcon: h,
    loadingIcon: p,
    loadingLabel: b = "Loading",
    onBlur: v,
    onClick: g,
    onFocus: w,
    onPress: k,
    showTitle: y,
    size: C = "medium",
    trailingIcon: I,
    type: F = "button",
    variant: D = "primary",
    ...W
  }, re) => {
    const ee = r ?? "button", ne = r === "div" || r === "span", ue = r === "a", ie = _.useRef(null);
    pt(
      !(u && !e && !ne),
      "Button with iconOnly must have an aria-label for accessibility. If Button is purely decorative and does not convey any meaning or action, it should have aria-hidden='true' to be ignored by assistive technologies."
    );
    const { buttonProps: ve } = wa(
      {
        elementType: ee,
        isDisabled: !!l,
        onBlur: v,
        onFocus: w,
        onPress: d ? void 0 : (q) => {
          k ? k(q) : g?.(q);
        }
      },
      ie
    ), se = ne ? W : Ne(ve, W), j = /* @__PURE__ */ S.createElement(S.Fragment, null, p ?? kt(
      { className: "animate-loading-hourglass", size: C },
      /* @__PURE__ */ S.createElement(O2, null)
    ), !u && /* @__PURE__ */ S.createElement(bg, { size: C }, b));
    return /* @__PURE__ */ S.createElement(Rr, null, _.createElement(
      ee,
      {
        "aria-label": d ? b : e,
        className: rk({
          class: i,
          hideButton: c,
          iconOnly: u,
          isDecorative: ne,
          isLoading: d,
          size: C,
          variant: D
        }),
        /* Add this to test uses of Button on other components */
        "data-size": Re(C),
        /* Add this to test uses of Button on other components */
        "data-variant": Re(D),
        ref: vr(ie, re),
        ...se,
        "aria-busy": d ? !0 : void 0,
        "aria-disabled": !!l || !!d || void 0,
        // react-aria adds role="button" for non-button elements; strip it for links
        ...ue && { role: void 0 },
        type: ue || ne ? void 0 : d && (F === "submit" || F === "reset") ? "button" : F
      },
      d ? j : /* @__PURE__ */ S.createElement(S.Fragment, null, kt(
        {
          size: h?.props.size ? h.props.size : C
        },
        h
      ), !u && /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(bg, { showTitle: y, size: C }, n), kt(
        {
          size: I?.props.size ? I.props.size : C
        },
        I
      )))
    ));
  }
), nk = H({
  /* For custom sizes */
  base: "rounded-xl",
  variants: {
    size: {
      large: "rounded-lg",
      medium: "rounded-lg",
      small: "rounded-[0.25rem]",
      // 4px
      "x-large": "rounded-lg",
      "x-small": "rounded-[0.25rem]"
      // 4px
    }
  }
}), ak = H({
  base: "object-cover",
  extend: nk,
  variants: {
    ratio: {
      "1:1": "aspect-square",
      "2:3": "aspect-[2/3]",
      "3:2": "aspect-[3/2]",
      "9:16": " aspect-[9/16]",
      "16:9": "aspect-[16/9]"
    },
    size: {
      large: "w-16",
      medium: "w-14",
      small: "w-11",
      "x-large": "w-20",
      "x-small": "w-8"
    }
  }
}), q0 = ({
  alt: e,
  as: r,
  className: n,
  loading: i,
  ratio: l,
  size: c,
  sizes: u,
  src: d,
  srcSet: h,
  style: p,
  ...b
}) => {
  const v = qv("img"), g = r ?? v;
  pt(
    typeof e == "string",
    "@paloma/Image requires an alt prop to be passed. Use an empty string (alt='') for decorative images or provide descriptive text for informative images."
  ), pt(
    !(h && !u),
    "Image: srcSet was provided without sizes. This may lead to unexpected behavior."
  );
  const w = { height: c, width: c };
  return /* @__PURE__ */ S.createElement(
    g,
    {
      alt: e,
      className: ak({
        class: n,
        ratio: l,
        size: typeof c == "string" ? c : void 0
      }),
      loading: i,
      sizes: u,
      src: d,
      srcSet: h,
      style: { ...w, ...p },
      ...b
    }
  );
}, ok = H({
  base: "flex border-none bg-transparent p-0 h-fit w-fit outline-none text-content-neutral-bold",
  compoundVariants: [
    {
      class: "w-6 rounded-[0.25rem]",
      contained: !0,
      size: "2x-small"
    },
    {
      class: "w-8 rounded-[0.25rem]",
      contained: !0,
      size: "x-small"
    },
    {
      class: "w-11 rounded-lg",
      contained: !0,
      size: "small"
    },
    {
      class: "w-14 rounded-lg",
      contained: !0,
      size: "medium"
    },
    {
      class: "w-20 rounded-lg",
      contained: !0,
      size: "large"
    }
  ],
  variants: {
    contained: {
      true: "overflow-hidden"
    },
    size: {
      "2x-small": "h-6",
      large: "h-20",
      medium: "h-14",
      small: "h-11",
      undefined: "",
      "x-small": "h-8"
    }
  }
}), ik = "h-full w-full", yg = _.forwardRef(
  ({
    alt: e,
    as: r,
    children: n,
    className: i,
    contained: l,
    size: c = "medium",
    src: u,
    style: d,
    ...h
  }, p) => {
    const b = r ?? "div", g = { ...{
      height: c,
      ...l ? { width: c } : {}
    }, ...d }, w = typeof c == "number" ? void 0 : c;
    return pt(
      !n || !u && !e,
      "ProductLogo with children should not receive src nor alt"
    ), pt(
      n !== void 0 || u !== void 0 && e !== void 0,
      "ProductLogo without children should have both src and alt"
    ), /* @__PURE__ */ S.createElement(Rr, null, /* @__PURE__ */ S.createElement(
      b,
      {
        className: ok({
          class: i,
          contained: l,
          size: w
        }),
        ref: p,
        style: g,
        ...h
      },
      n ? _.cloneElement(n, {
        className: ct(n.props.className, ik)
      }) : /* @__PURE__ */ S.createElement(
        q0,
        {
          alt: e,
          className: "h-full w-auto rounded-none",
          "data-testid": "img",
          src: u
        }
      )
    ));
  }
), wg = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Tt = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, lk = (e, r) => JSON.stringify(e) === JSON.stringify(r);
function Q0(e, r) {
  e.forEach(function(n) {
    Array.isArray(n) ? Q0(n, r) : r.push(n);
  });
}
function X0(e) {
  let r = [];
  return Q0(e, r), r;
}
var Z0 = (...e) => X0(e).filter(Boolean), J0 = (e, r) => {
  let n = {}, i = Object.keys(e), l = Object.keys(r);
  for (let c of i)
    if (l.includes(c)) {
      let u = e[c], d = r[c];
      typeof u == "object" && typeof d == "object" ? n[c] = J0(u, d) : Array.isArray(u) || Array.isArray(d) ? n[c] = Z0(d, u) : n[c] = d + " " + u;
    } else
      n[c] = e[c];
  for (let c of l)
    i.includes(c) || (n[c] = r[c]);
  return n;
}, xg = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim(), Hd = "-";
function sk(e) {
  const r = uk(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: i
  } = e;
  function l(u) {
    const d = u.split(Hd);
    return d[0] === "" && d.length !== 1 && d.shift(), eb(d, r) || ck(u);
  }
  function c(u, d) {
    const h = n[u] || [];
    return d && i[u] ? [...h, ...i[u]] : h;
  }
  return {
    getClassGroupId: l,
    getConflictingClassGroupIds: c
  };
}
function eb(e, r) {
  if (e.length === 0)
    return r.classGroupId;
  const n = e[0], i = r.nextPart.get(n), l = i ? eb(e.slice(1), i) : void 0;
  if (l)
    return l;
  if (r.validators.length === 0)
    return;
  const c = e.join(Hd);
  return r.validators.find(({
    validator: u
  }) => u(c))?.classGroupId;
}
var kg = /^\[(.+)\]$/;
function ck(e) {
  if (kg.test(e)) {
    const r = kg.exec(e)[1], n = r?.substring(0, r.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function uk(e) {
  const {
    theme: r,
    prefix: n
  } = e, i = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return fk(Object.entries(e.classGroups), n).forEach(([c, u]) => {
    od(u, i, c, r);
  }), i;
}
function od(e, r, n, i) {
  e.forEach((l) => {
    if (typeof l == "string") {
      const c = l === "" ? r : Sg(r, l);
      c.classGroupId = n;
      return;
    }
    if (typeof l == "function") {
      if (dk(l)) {
        od(l(i), r, n, i);
        return;
      }
      r.validators.push({
        validator: l,
        classGroupId: n
      });
      return;
    }
    Object.entries(l).forEach(([c, u]) => {
      od(u, Sg(r, c), n, i);
    });
  });
}
function Sg(e, r) {
  let n = e;
  return r.split(Hd).forEach((i) => {
    n.nextPart.has(i) || n.nextPart.set(i, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(i);
  }), n;
}
function dk(e) {
  return e.isThemeGetter;
}
function fk(e, r) {
  return r ? e.map(([n, i]) => {
    const l = i.map((c) => typeof c == "string" ? r + c : typeof c == "object" ? Object.fromEntries(Object.entries(c).map(([u, d]) => [r + u, d])) : c);
    return [n, l];
  }) : e;
}
function pk(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  function l(c, u) {
    n.set(c, u), r++, r > e && (r = 0, i = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get(c) {
      let u = n.get(c);
      if (u !== void 0)
        return u;
      if ((u = i.get(c)) !== void 0)
        return l(c, u), u;
    },
    set(c, u) {
      n.has(c) ? n.set(c, u) : l(c, u);
    }
  };
}
var tb = "!";
function hk(e) {
  const r = e.separator, n = r.length === 1, i = r[0], l = r.length;
  return function(u) {
    const d = [];
    let h = 0, p = 0, b;
    for (let y = 0; y < u.length; y++) {
      let C = u[y];
      if (h === 0) {
        if (C === i && (n || u.slice(y, y + l) === r)) {
          d.push(u.slice(p, y)), p = y + l;
          continue;
        }
        if (C === "/") {
          b = y;
          continue;
        }
      }
      C === "[" ? h++ : C === "]" && h--;
    }
    const v = d.length === 0 ? u : u.substring(p), g = v.startsWith(tb), w = g ? v.substring(1) : v, k = b && b > p ? b - p : void 0;
    return {
      modifiers: d,
      hasImportantModifier: g,
      baseClassName: w,
      maybePostfixModifierPosition: k
    };
  };
}
function mk(e) {
  if (e.length <= 1)
    return e;
  const r = [];
  let n = [];
  return e.forEach((i) => {
    i[0] === "[" ? (r.push(...n.sort(), i), n = []) : n.push(i);
  }), r.push(...n.sort()), r;
}
function gk(e) {
  return {
    cache: pk(e.cacheSize),
    splitModifiers: hk(e),
    ...sk(e)
  };
}
var vk = /\s+/;
function bk(e, r) {
  const {
    splitModifiers: n,
    getClassGroupId: i,
    getConflictingClassGroupIds: l
  } = r, c = /* @__PURE__ */ new Set();
  return e.trim().split(vk).map((u) => {
    const {
      modifiers: d,
      hasImportantModifier: h,
      baseClassName: p,
      maybePostfixModifierPosition: b
    } = n(u);
    let v = i(b ? p.substring(0, b) : p), g = !!b;
    if (!v) {
      if (!b)
        return {
          isTailwindClass: !1,
          originalClassName: u
        };
      if (v = i(p), !v)
        return {
          isTailwindClass: !1,
          originalClassName: u
        };
      g = !1;
    }
    const w = mk(d).join(":");
    return {
      isTailwindClass: !0,
      modifierId: h ? w + tb : w,
      classGroupId: v,
      originalClassName: u,
      hasPostfixModifier: g
    };
  }).reverse().filter((u) => {
    if (!u.isTailwindClass)
      return !0;
    const {
      modifierId: d,
      classGroupId: h,
      hasPostfixModifier: p
    } = u, b = d + h;
    return c.has(b) ? !1 : (c.add(b), l(h, p).forEach((v) => c.add(d + v)), !0);
  }).reverse().map((u) => u.originalClassName).join(" ");
}
function yk() {
  let e = 0, r, n, i = "";
  for (; e < arguments.length; )
    (r = arguments[e++]) && (n = rb(r)) && (i && (i += " "), i += n);
  return i;
}
function rb(e) {
  if (typeof e == "string")
    return e;
  let r, n = "";
  for (let i = 0; i < e.length; i++)
    e[i] && (r = rb(e[i])) && (n && (n += " "), n += r);
  return n;
}
function id(e, ...r) {
  let n, i, l, c = u;
  function u(h) {
    const p = r.reduce((b, v) => v(b), e());
    return n = gk(p), i = n.cache.get, l = n.cache.set, c = d, d(h);
  }
  function d(h) {
    const p = i(h);
    if (p)
      return p;
    const b = bk(h, n);
    return l(h, b), b;
  }
  return function() {
    return c(yk.apply(null, arguments));
  };
}
function Be(e) {
  const r = (n) => n[e] || [];
  return r.isThemeGetter = !0, r;
}
var nb = /^\[(?:([a-z-]+):)?(.+)\]$/i, wk = /^\d+\/\d+$/, xk = /* @__PURE__ */ new Set(["px", "full", "screen"]), kk = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Sk = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ck = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, _k = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ek = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Er(e) {
  return En(e) || xk.has(e) || wk.test(e);
}
function rn(e) {
  return Sa(e, "length", Ik);
}
function En(e) {
  return !!e && !Number.isNaN(Number(e));
}
function hl(e) {
  return Sa(e, "number", En);
}
function mo(e) {
  return !!e && Number.isInteger(Number(e));
}
function $k(e) {
  return e.endsWith("%") && En(e.slice(0, -1));
}
function _e(e) {
  return nb.test(e);
}
function nn(e) {
  return kk.test(e);
}
var Pk = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function Fk(e) {
  return Sa(e, Pk, ab);
}
function zk(e) {
  return Sa(e, "position", ab);
}
var Tk = /* @__PURE__ */ new Set(["image", "url"]);
function Nk(e) {
  return Sa(e, Tk, Lk);
}
function Ak(e) {
  return Sa(e, "", Rk);
}
function go() {
  return !0;
}
function Sa(e, r, n) {
  const i = nb.exec(e);
  return i ? i[1] ? typeof r == "string" ? i[1] === r : r.has(i[1]) : n(i[2]) : !1;
}
function Ik(e) {
  return Sk.test(e) && !Ck.test(e);
}
function ab() {
  return !1;
}
function Rk(e) {
  return _k.test(e);
}
function Lk(e) {
  return Ek.test(e);
}
function ld() {
  const e = Be("colors"), r = Be("spacing"), n = Be("blur"), i = Be("brightness"), l = Be("borderColor"), c = Be("borderRadius"), u = Be("borderSpacing"), d = Be("borderWidth"), h = Be("contrast"), p = Be("grayscale"), b = Be("hueRotate"), v = Be("invert"), g = Be("gap"), w = Be("gradientColorStops"), k = Be("gradientColorStopPositions"), y = Be("inset"), C = Be("margin"), I = Be("opacity"), F = Be("padding"), D = Be("saturate"), W = Be("scale"), re = Be("sepia"), ee = Be("skew"), ne = Be("space"), ue = Be("translate"), ie = () => ["auto", "contain", "none"], ve = () => ["auto", "hidden", "clip", "visible", "scroll"], se = () => ["auto", _e, r], j = () => [_e, r], q = () => ["", Er, rn], z = () => ["auto", En, _e], Y = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], K = () => ["solid", "dashed", "dotted", "double", "none"], R = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], L = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], N = () => ["", "0", _e], U = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], P = () => [En, hl], B = () => [En, _e];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [go],
      spacing: [Er, rn],
      blur: ["none", "", nn, _e],
      brightness: P(),
      borderColor: [e],
      borderRadius: ["none", "", "full", nn, _e],
      borderSpacing: j(),
      borderWidth: q(),
      contrast: P(),
      grayscale: N(),
      hueRotate: B(),
      invert: N(),
      gap: j(),
      gradientColorStops: [e],
      gradientColorStopPositions: [$k, rn],
      inset: se(),
      margin: se(),
      opacity: P(),
      padding: j(),
      saturate: P(),
      scale: P(),
      sepia: N(),
      skew: B(),
      space: j(),
      translate: j()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", _e]
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
        columns: [nn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": U()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": U()
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
        object: [...Y(), _e]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ve()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ve()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ve()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: ie()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": ie()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": ie()
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
        z: ["auto", mo, _e]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: se()
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
        flex: ["1", "auto", "initial", "none", _e]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: N()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: N()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", mo, _e]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [go]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", mo, _e]
        }, _e]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": z()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [go]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [mo, _e]
        }, _e]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": z()
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
        "auto-cols": ["auto", "min", "max", "fr", _e]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", _e]
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
        p: [F]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [F]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [F]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [F]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [F]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [F]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [F]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [F]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [F]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [C]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [C]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [C]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [C]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [C]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [C]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [C]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [C]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [C]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [ne]
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
        "space-y": [ne]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", _e, r]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [_e, r, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [_e, r, "none", "full", "min", "max", "fit", "prose", {
          screen: [nn]
        }, nn]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [_e, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [_e, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [_e, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [_e, r, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", nn, rn]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", hl]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [go]
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
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", _e]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", En, hl]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Er, _e]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", _e]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", _e]
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
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [I]
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
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [I]
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
        decoration: [...K(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Er, rn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Er, _e]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
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
        indent: j()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", _e]
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
        content: ["none", _e]
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
        "bg-opacity": [I]
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
        bg: [...Y(), zk]
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
        bg: ["auto", "cover", "contain", Fk]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Nk]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [k]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [k]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [k]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [w]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [w]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [w]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [c]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [c]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [c]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [c]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [c]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [c]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [c]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [c]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [c]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [c]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [c]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [c]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [c]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [c]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [c]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [d]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [d]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [d]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [d]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [d]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [d]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [d]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [d]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [d]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [I]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...K(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [d]
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
        "divide-y": [d]
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
        "divide-opacity": [I]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: K()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [l]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [l]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [l]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [l]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [l]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [l]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [l]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [l]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...K()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Er, _e]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Er, rn]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: q()
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
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [I]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Er, rn]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", nn, Ak]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [go]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [I]
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
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [i]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [h]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", nn, _e]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [p]
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
        invert: [v]
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
        sepia: [re]
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
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [i]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [h]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [p]
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
        "backdrop-invert": [v]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [I]
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
        "backdrop-sepia": [re]
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
        "border-spacing": [u]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [u]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [u]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", _e]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: B()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", _e]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: B()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", _e]
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
        scale: [W]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [W]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [W]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [mo, _e]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [ue]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [ue]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [ee]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [ee]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", _e]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", _e]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
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
        "scroll-m": j()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": j()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": j()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": j()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": j()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": j()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": j()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": j()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": j()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": j()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": j()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": j()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": j()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": j()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": j()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": j()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": j()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": j()
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
        "will-change": ["auto", "scroll", "contents", "transform", _e]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Er, rn, hl]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
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
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
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
}
function Mk(e, {
  cacheSize: r,
  prefix: n,
  separator: i,
  extend: l = {},
  override: c = {}
}) {
  _l(e, "cacheSize", r), _l(e, "prefix", n), _l(e, "separator", i);
  for (const u in c)
    jk(e[u], c[u]);
  for (const u in l)
    Dk(e[u], l[u]);
  return e;
}
function _l(e, r, n) {
  n !== void 0 && (e[r] = n);
}
function jk(e, r) {
  if (r)
    for (const n in r)
      _l(e, n, r[n]);
}
function Dk(e, r) {
  if (r)
    for (const n in r) {
      const i = r[n];
      i !== void 0 && (e[n] = (e[n] || []).concat(i));
    }
}
function Kk(e, ...r) {
  return typeof e == "function" ? id(ld, e, ...r) : id(() => Mk(ld(), e), ...r);
}
var Ok = /* @__PURE__ */ id(ld), Vk = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, ob = (e) => e || void 0, Vo = (...e) => ob(X0(e).filter(Boolean).join(" ")), _u = null, Tr = {}, sd = !1, vo = (...e) => (r) => r.twMerge ? ((!_u || sd) && (sd = !1, _u = Tt(Tr) ? Ok : Kk({ ...Tr, extend: { theme: Tr.theme, classGroups: Tr.classGroups, conflictingClassGroupModifiers: Tr.conflictingClassGroupModifiers, conflictingClassGroups: Tr.conflictingClassGroups, ...Tr.extend } })), ob(_u(Vo(e)))) : Vo(e), Cg = (e, r) => {
  for (let n in r)
    e.hasOwnProperty(n) ? e[n] = Vo(e[n], r[n]) : e[n] = r[n];
  return e;
}, Ue = (e, r) => {
  let { extend: n = null, slots: i = {}, variants: l = {}, compoundVariants: c = [], compoundSlots: u = [], defaultVariants: d = {} } = e, h = { ...Vk, ...r }, p = n != null && n.base ? Vo(n.base, e?.base) : e?.base, b = n != null && n.variants && !Tt(n.variants) ? J0(l, n.variants) : l, v = n != null && n.defaultVariants && !Tt(n.defaultVariants) ? { ...n.defaultVariants, ...d } : d;
  !Tt(h.twMergeConfig) && !lk(h.twMergeConfig, Tr) && (sd = !0, Tr = h.twMergeConfig);
  let g = Tt(n?.slots), w = Tt(i) ? {} : { base: Vo(e?.base, g && n?.base), ...i }, k = g ? w : Cg({ ...n?.slots }, Tt(w) ? { base: e?.base } : w), y = Tt(n?.compoundVariants) ? c : Z0(n?.compoundVariants, c), C = (F) => {
    if (Tt(b) && Tt(i) && g)
      return vo(p, F?.class, F?.className)(h);
    if (y && !Array.isArray(y))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof y}`);
    if (u && !Array.isArray(u))
      throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof u}`);
    let D = (j, q, z = [], Y) => {
      let K = z;
      if (typeof q == "string")
        K = K.concat(xg(q).split(" ").map((R) => `${j}:${R}`));
      else if (Array.isArray(q))
        K = K.concat(q.reduce((R, L) => R.concat(`${j}:${L}`), []));
      else if (typeof q == "object" && typeof Y == "string") {
        for (let R in q)
          if (q.hasOwnProperty(R) && R === Y) {
            let L = q[R];
            if (L && typeof L == "string") {
              let N = xg(L);
              K[Y] ? K[Y] = K[Y].concat(N.split(" ").map((U) => `${j}:${U}`)) : K[Y] = N.split(" ").map((U) => `${j}:${U}`);
            } else
              Array.isArray(L) && L.length > 0 && (K[Y] = L.reduce((N, U) => N.concat(`${j}:${U}`), []));
          }
      }
      return K;
    }, W = (j, q = b, z = null, Y = null) => {
      var K;
      let R = q[j];
      if (!R || Tt(R))
        return null;
      let L = (K = Y?.[j]) != null ? K : F?.[j];
      if (L === null)
        return null;
      let N = wg(L), U = Array.isArray(h.responsiveVariants) && h.responsiveVariants.length > 0 || h.responsiveVariants === !0, P = v?.[j], B = [];
      if (typeof N == "object" && U)
        for (let [G, ce] of Object.entries(N)) {
          let ke = R[ce];
          if (G === "initial") {
            P = ce;
            continue;
          }
          Array.isArray(h.responsiveVariants) && !h.responsiveVariants.includes(G) || (B = D(G, ke, B, z));
        }
      let me = N != null && typeof N != "object" ? N : wg(P), pe = R[me || "false"];
      return typeof B == "object" && typeof z == "string" && B[z] ? Cg(B, pe) : B.length > 0 ? (B.push(pe), B) : pe;
    }, re = () => b ? Object.keys(b).map((j) => W(j, b)) : null, ee = (j, q) => {
      if (!b || typeof b != "object")
        return null;
      let z = new Array();
      for (let Y in b) {
        let K = W(Y, b, j, q), R = j === "base" && typeof K == "string" ? K : K && K[j];
        R && (z[z.length] = R);
      }
      return z;
    }, ne = {};
    for (let j in F)
      F[j] !== void 0 && (ne[j] = F[j]);
    let ue = (j, q) => {
      var z;
      let Y = typeof F?.[j] == "object" ? { [j]: (z = F[j]) == null ? void 0 : z.initial } : {};
      return { ...v, ...ne, ...Y, ...q };
    }, ie = (j = [], q) => {
      let z = [];
      for (let { class: Y, className: K, ...R } of j) {
        let L = !0;
        for (let [N, U] of Object.entries(R)) {
          let P = ue(N, q);
          if (Array.isArray(U)) {
            if (!U.includes(P[N])) {
              L = !1;
              break;
            }
          } else if (P[N] !== U) {
            L = !1;
            break;
          }
        }
        L && (Y && z.push(Y), K && z.push(K));
      }
      return z;
    }, ve = (j) => {
      let q = ie(y, j);
      if (!Array.isArray(q))
        return q;
      let z = {};
      for (let Y of q)
        if (typeof Y == "string" && (z.base = vo(z.base, Y)(h)), typeof Y == "object")
          for (let [K, R] of Object.entries(Y))
            z[K] = vo(z[K], R)(h);
      return z;
    }, se = (j) => {
      if (u.length < 1)
        return null;
      let q = {};
      for (let { slots: z = [], class: Y, className: K, ...R } of u) {
        if (!Tt(R)) {
          let L = !0;
          for (let N of Object.keys(R)) {
            let U = ue(N, j)[N];
            if (U === void 0 || (Array.isArray(R[N]) ? !R[N].includes(U) : R[N] !== U)) {
              L = !1;
              break;
            }
          }
          if (!L)
            continue;
        }
        for (let L of z)
          q[L] = q[L] || [], q[L].push([Y, K]);
      }
      return q;
    };
    if (!Tt(i) || !g) {
      let j = {};
      if (typeof k == "object" && !Tt(k))
        for (let q of Object.keys(k))
          j[q] = (z) => {
            var Y, K;
            return vo(k[q], ee(q, z), ((Y = ve(z)) != null ? Y : [])[q], ((K = se(z)) != null ? K : [])[q], z?.class, z?.className)(h);
          };
      return j;
    }
    return vo(p, re(), ie(y), F?.class, F?.className)(h);
  }, I = () => {
    if (!(!b || typeof b != "object"))
      return Object.keys(b);
  };
  return C.variantKeys = I(), C.extend = n, C.base = p, C.slots = k, C.variants = b, C.defaultVariants = v, C.compoundSlots = u, C.compoundVariants = y, C;
};
Ue({
  base: [
    // Mobile forces vertical orientation
    "group/alert box-border border border-solid rounded-2xl gap-4 p-4 md:p-5 lg:!p-6 backdrop-blur-surface",
    "grid gap-x-4 gap-y-3 items-start grid-flow-col"
  ],
  compoundVariants: [
    // Bold & Regular emphasis borders
    {
      class: "border-highlight",
      emphasis: ["bold", "regular"],
      status: "none"
    },
    {
      class: "border-positive",
      emphasis: ["bold", "regular"],
      status: "positive"
    },
    {
      class: "border-warning",
      emphasis: ["bold", "regular"],
      status: "warning"
    },
    {
      class: "border-negative",
      emphasis: ["bold", "regular"],
      status: "negative"
    },
    // Bold Emphasis backgrounds
    { class: "bg-surface-highlight-subtle", emphasis: "bold", status: "none" },
    { class: "bg-surface-warning-subtle", emphasis: "bold", status: "warning" },
    {
      class: "bg-surface-negative-subtle",
      emphasis: "bold",
      status: "negative"
    },
    {
      class: "bg-surface-positive-subtle",
      emphasis: "bold",
      status: "positive"
    }
  ],
  variants: {
    emphasis: {
      bold: "",
      regular: "bg-surface-level-01",
      subtle: "bg-surface-level-01 border-neutral-subtle"
    },
    leadingContent: {
      false: "",
      true: "auto-cols-[min-content_1fr]"
    },
    orientation: {
      horizontal: "w-full",
      vertical: "max-md:w-full md:max-w-[486px]"
    },
    status: {
      bold: "",
      negative: "",
      none: "",
      positive: "",
      warning: ""
    }
  }
});
Ue({
  base: "flex w-min",
  variants: {
    orientation: {
      horizontal: "md:grid-in-[1/1/1/1]",
      vertical: "grid-in-[1/1/2/1] max-md:grid-in-[1/1/2/1]"
    },
    status: {
      negative: "text-content-negative",
      none: "text-content-neutral-bold",
      positive: "text-content-positive",
      warning: "text-content-warning"
    }
  }
});
Ue({
  base: "flex flex-col max-lg:gap-2 lg:gap-3",
  compoundVariants: [
    {
      class: "grid-in-[1/2/1/2] max-md:grid-in-[1/2/1/2]",
      leadingContent: !0,
      orientation: "vertical"
    }
  ],
  variants: {
    leadingContent: {
      false: "",
      true: ""
    },
    orientation: {
      horizontal: "",
      vertical: ""
    }
  }
});
Ue({
  base: "flex flex-row gap-4",
  variants: {
    orientation: {
      horizontal: "",
      vertical: "justify-between w-full max-md:justify-between max-md:w-full"
    }
  }
});
Ue({
  base: "flex align-start justify-start text-content-neutral-bold"
});
Ue({
  base: "text-content-neutral-subtle",
  variants: {
    status: {
      bold: "",
      negative: "text-content-neutral-regular",
      none: "",
      positive: "",
      warning: ""
    }
  }
});
Ue({
  base: "flex gap-2",
  compoundVariants: [
    {
      class: "!grid-in-[2/2/2/2] max-md:!grid-in-[2/2/2/2]",
      leadingContent: !0,
      orientation: "vertical"
    }
  ],
  variants: {
    leadingContent: {
      false: "",
      true: ""
    },
    orientation: {
      horizontal: "justify-self-end md:flex-row-reverse",
      vertical: "grid-in-[2/1/2/1] max-md:grid-in-[2/1/2/1] py-2 max-md:py-2"
    }
  }
});
var Bk = H({
  base: [
    "relative box-border flex items-center justify-center",
    "overflow-hidden backdrop-blur-surface border-2"
  ],
  compoundVariants: [
    {
      class: "rounded-lg",
      shape: "square",
      size: ["large", "medium", "small"]
    },
    {
      class: "rounded",
      shape: "square",
      size: ["x-small", "xx-small"]
    }
  ],
  variants: {
    active: {
      false: "border-transparent",
      true: "border-highlight"
    },
    disabled: {
      true: "pointer-events-none opacity-30"
    },
    onClick: {
      true: "cursor-pointer p-0"
    },
    shape: {
      circle: "rounded-full",
      square: ""
    },
    size: {
      large: "w-16 h-16",
      medium: "w-14 h-14",
      small: "w-11 h-11",
      "x-small": "w-8 h-8",
      "xx-small": "w-6 h-6"
    }
  }
}), Hk = H({
  base: "absolute h-full w-full overflow-hidden flex items-center justify-center",
  variants: {
    emphasis: {
      highlight: "bg-interactive-highlight",
      minimal: "bg-interactive-neutral-minimal",
      neutral: "bg-surface-level-01",
      regular: "bg-interactive-neutral-regular"
    }
  }
}), _g = H({
  variants: {
    appearance: {
      highlight: "text-content-highlight",
      neutral: "text-content-neutral-bold",
      "neutral-inverse": "text-content-inverse-bold"
    }
  }
}), Uk = H({
  base: "object-cover h-full w-full",
  variants: {
    imageLoadFail: {
      true: "hidden"
    }
  }
}), ls = ({
  active: e = !1,
  appearance: r = "neutral",
  "aria-label": n,
  bgClassname: i,
  className: l,
  disabled: c,
  emphasis: u = "regular",
  icon: d,
  imageSrc: h,
  label: p,
  onClick: b,
  shape: v = "circle",
  size: g = "medium",
  ...w
}) => {
  const [k, y] = _.useState(!1);
  _.useEffect(() => {
    y(!1);
  }, [h]);
  const C = b ? "button" : "div";
  return /* @__PURE__ */ S.createElement(Rr, null, /* @__PURE__ */ S.createElement(
    C,
    {
      "aria-label": n,
      className: Bk({
        active: e,
        className: l,
        disabled: c,
        onClick: !!b,
        shape: v,
        size: g
      }),
      "data-size": g,
      disabled: c,
      onClick: b,
      ...w
    },
    /* @__PURE__ */ S.createElement(
      "div",
      {
        className: Hk({ className: i, emphasis: u })
      },
      (!d && !h || k) && /* @__PURE__ */ S.createElement(
        ut,
        {
          className: _g({ appearance: r }),
          fontWeight: "bold",
          size: Gk[g],
          variant: "body"
        },
        p
      ),
      h && /* @__PURE__ */ S.createElement(
        "img",
        {
          alt: n,
          className: Uk({ imageLoadFail: k }),
          onError: () => y(!0),
          src: h
        }
      ),
      kt(
        {
          className: _g({ appearance: r }),
          size: Wk[g]
        },
        d
      )
    )
  ));
}, Wk = {
  large: "large",
  medium: "medium",
  small: "small",
  "x-small": "x-small",
  "xx-small": "x-small"
}, Gk = {
  large: "large",
  medium: "medium",
  small: "small",
  "x-small": "x-small",
  "xx-small": "x-small"
}, cd = ({
  active: e = !1,
  authenticated: r = !0,
  badge: n = !1,
  badgeCutoutColor: i,
  className: l,
  disabled: c,
  emphasis: u = "regular",
  imageSrc: d,
  label: h,
  onClick: p,
  size: b = "medium",
  ...v
}) => {
  const g = () => {
    const w = {
      imageSrc: d
    }, k = {
      icon: /* @__PURE__ */ S.createElement(Qv, { "data-testid": "@paloma-avatar-icon-unauthenticated-id" })
    };
    return /* @__PURE__ */ S.createElement(
      ls,
      {
        active: e,
        className: l,
        disabled: c,
        emphasis: u,
        label: h,
        onClick: p,
        shape: "circle",
        size: b,
        ...r ? w : k,
        ...v
      }
    );
  };
  return /* @__PURE__ */ S.createElement(S.Fragment, null, n && /* @__PURE__ */ S.createElement(
    is,
    {
      appearance: "highlight",
      cutoutColor: i,
      "data-testid": "@paloma-avatar-badge-id",
      position: "bottom-right",
      shape: "circle",
      size: "x-small",
      variant: "dot"
    },
    g()
  ), !n && g());
};
H({
  base: [
    "text-content-neutral-bold bg-surface-level-01 bg-base/60 rounded-2xl flex gap-6 items-center box-border",
    /* Vertical responsive */
    "max-md:w-auto max-md:flex-col max-md:text-center max-md:justify-normal"
  ],
  variants: {
    orientation: {
      horizontal: "md:w-full md:flex-row md:text-left md:justify-between",
      vertical: "w-auto flex-col text-center justify-normal"
    },
    size: {
      medium: "p-6 md:p-10",
      small: "p-6"
    }
  }
});
H({
  base: "flex gap-2",
  compoundVariants: [
    {
      class: "max-md:w-full",
      hasPrimaryAction: !0,
      hasSecondaryAction: !1
    },
    {
      class: "max-md:w-full",
      hasPrimaryAction: !1,
      hasSecondaryAction: !0
    }
  ],
  variants: {
    hasPrimaryAction: {
      true: ""
    },
    hasSecondaryAction: {
      true: ""
    }
  }
});
H({
  base: "min-w-[140px] max-md:px-4 max-md:py-3 max-md:[&>span]:text-size-body-small",
  compoundVariants: [
    {
      class: "max-md:w-full",
      hasPrimaryAction: !0,
      hasSecondaryAction: !1
    },
    {
      class: "max-md:w-full",
      hasPrimaryAction: !1,
      hasSecondaryAction: !0
    }
  ],
  variants: {
    hasPrimaryAction: {
      true: ""
    },
    hasSecondaryAction: {
      true: ""
    }
  }
});
var Yk = H({
  base: "@paloma-link group inline-flex items-center gap-2 no-underline rounded-sm outline-none text-inherit text-content-highlight aria-disabled:pointer-events-none aria-disabled:opacity-30"
}), qk = H({
  base: "",
  compoundVariants: [
    {
      className: "[@media(hover:hover)]:group-hover:no-underline",
      hoverUnderline: !1,
      underline: !0
    }
  ],
  variants: {
    hoverUnderline: {
      false: "",
      true: "@paloma-link-text-hover-underline underline-offset-3 [@media(hover:hover)]:group-hover:underline"
    },
    underline: {
      false: "",
      true: "underline-offset-3"
    }
  }
}), Qk = _.forwardRef(
  ({
    "aria-current": e,
    "aria-expanded": r,
    "aria-label": n,
    as: i,
    bold: l,
    children: c,
    className: u,
    disabled: d,
    hoverUnderline: h = !0,
    href: p,
    leadingIcon: b,
    onBlur: v,
    onClick: g,
    onFocus: w,
    size: k = "medium",
    target: y,
    trailingIcon: C,
    underline: I = !1,
    ...F
  }, D) => {
    const W = qv("a"), re = i ?? W, ee = _.useRef(null), { linkProps: ne } = vv(
      { isDisabled: d, onBlur: v, onFocus: w, onPress: g },
      ee
    ), ue = Ne(ne, F);
    return /* @__PURE__ */ S.createElement(Rr, { disabled: d }, /* @__PURE__ */ S.createElement(
      re,
      {
        ...ue,
        "aria-current": e,
        "aria-disabled": d,
        "aria-expanded": r,
        "aria-label": n,
        className: Yk({
          class: u
        }),
        "data-bold": Re(l),
        "data-hover-underline": Re(h),
        "data-size": Re(k),
        "data-underline": Re(I),
        disabled: d,
        href: p,
        ref: vr(D, ee),
        tabIndex: 0,
        target: y
      },
      kt({ size: k }, b),
      /* @__PURE__ */ S.createElement(
        ut,
        {
          className: qk({ hoverUnderline: h, underline: I }),
          fontWeight: l ? "bold" : "normal",
          size: k,
          underline: I,
          variant: "body"
        },
        c
      ),
      kt({ size: k }, C)
    ));
  }
);
H({
  base: "@paloma-breadcrumb flex-row flex-nowrap gap-1 items-center p-0",
  variants: {
    desktop: {
      false: "",
      true: "@paloma-breadcrumb-desktop max-lg:hidden lg:flex"
    },
    mobile: {
      false: "",
      true: "@paloma-breadcrumb-mobile max-md:flex md:hidden [&>li]:hidden [&>li:nth-last-child(2)]:flex"
    },
    tablet: {
      false: "",
      true: "@paloma-breadcrumb-tablet max-md:hidden md:max-lg:flex lg:hidden"
    },
    truncateLastItem: {
      false: "",
      true: "md:max-lg:[&>li:last-child]:overflow-hidden md:max-lg:[&>li:last-child>:last-child]:truncate"
    }
  }
});
var Eg = H({
  base: "",
  variants: {
    current: {
      false: "",
      true: "text-content-neutral-subtle"
    },
    hasLeadingIcon: {
      false: "",
      true: "inline-flex items-center gap-2"
    }
  }
}), Xk = ({
  children: e,
  className: r,
  current: n = !1,
  href: i,
  leadingIcon: l,
  ...c
}) => {
  if (!i)
    return /* @__PURE__ */ S.createElement(
      ut,
      {
        "aria-current": n ? "page" : void 0,
        className: Eg({
          className: r,
          current: n,
          hasLeadingIcon: !!l
        }),
        size: "small",
        ...c
      },
      kt({ size: "small" }, l),
      e
    );
  const u = n ? {
    "aria-current": "page",
    hoverUnderline: !0,
    underline: !1
  } : {};
  return /* @__PURE__ */ S.createElement(
    Qk,
    {
      className: Eg({ className: r, current: n }),
      href: i,
      leadingIcon: l,
      size: "small",
      ...u,
      ...c
    },
    e
  );
};
Xk.displayName = "Breadcrumb.Item";
var Zk = H({
  base: "@paloma-divider data-[emphasis=bold]:border-neutral-bold data-[emphasis=minimal]:border-neutral-minimal data-[emphasis=regular]:border-neutral-regular data-[emphasis=subtle]:border-neutral-subtle",
  variants: {
    orientation: {
      horizontal: "border-x-0 border-b-0 border-t-[1px] mx-0 my-1 w-full min-h-[1px]",
      vertical: "border-y-0 border-r-0 border-l-[1px] mx-1 my-0 min-w-[1px]"
    }
  }
}), El = ({
  className: e,
  emphasis: r = "regular",
  orientation: n = "horizontal",
  role: i = "separator",
  ...l
}) => {
  const c = n === "horizontal", u = n === "vertical";
  return /* @__PURE__ */ S.createElement(
    "hr",
    {
      className: Zk({
        className: e,
        orientation: n
      }),
      "data-emphasis": r,
      "data-is-orientation-horizontal": Re(c),
      "data-is-orientation-vertical": Re(u),
      role: i,
      ...l
    }
  );
}, Ud = H({
  variants: {
    size: {
      large: "gap-5",
      medium: "gap-4",
      small: "gap-3",
      "x-small": "gap-3"
    }
  }
});
H({
  base: [
    "flex justify-between w-full pl-0 pr-0 box-border bg-transparent",
    /* Border styles */
    "border border-transparent rounded-lg",
    /* Text styles */
    "text-content-neutral-regular outline-none no-underline",
    /* !longform */
    "items-center"
  ],
  compoundVariants: [
    {
      class: "px-5",
      contained: !0,
      size: "large"
    },
    {
      class: "px-4",
      contained: !0,
      size: "medium"
    },
    {
      class: "px-3",
      contained: !0,
      size: ["small", "x-small"]
    },
    {
      class: "py-3",
      size: ["large", "medium"],
      type: "ordered"
    },
    {
      class: "py-2.5",
      size: "small",
      type: "ordered"
    },
    {
      class: "py-2",
      size: ["large", "medium"],
      type: "unordered"
    },
    {
      class: "py-1.5",
      size: "small",
      type: "unordered"
    },
    {
      class: "py-2 last:pb-0",
      // reduced vertical padding for nested items
      isNested: !0,
      size: ["large", "medium"],
      type: "ordered"
    },
    {
      class: "py-1.5 last:pb-0",
      // reduced vertical padding for nested items
      isNested: !0,
      size: "small",
      type: "ordered"
    },
    {
      class: "py-0.5 last:pb-0",
      // reduced vertical padding for nested items
      isNested: !0,
      size: ["large", "medium", "small"],
      type: "unordered"
    }
  ],
  extend: Ud,
  variants: {
    contained: {
      true: ""
    },
    disabled: {
      true: "opacity-[30%]"
    },
    emphasis: {
      minimal: [
        "bg-surface-level-01 border-neutral-minimal",
        /* emphasis !== none */
        "border border-solid"
      ],
      none: "",
      regular: [
        "bg-surface-level-03 border-neutral-regular",
        /* emphasis !== none */
        "border border-solid"
      ],
      subtle: [
        "bg-surface-level-02 border-neutral-subtle",
        /* emphasis !== none */
        "border border-solid"
      ]
    },
    isButton: {
      false: "",
      true: "pl-4 focus:outline-none focus:shadow-[inset_0_0_0_2px_var(--interactive-highlight-color)]"
    },
    isInteractive: {
      true: "cursor-pointer active:bg-content-neutral-bold/[0.12] [@media(hover:hover)]:hover:bg-content-neutral-bold/[0.08] [@media(hover:hover)]:hover:active:bg-content-neutral-bold/[0.12]"
    },
    isNested: {
      false: "",
      true: ""
    },
    longform: {
      false: "",
      true: "items-start text-wrap"
    },
    size: {
      large: "py-4",
      medium: "py-4",
      small: "py-3",
      "x-small": "py-2"
    },
    type: {
      ordered: "",
      unordered: ""
    }
  }
});
H({
  base: "flex text-left items-center",
  compoundVariants: [
    {
      class: "self-start",
      // Bullet position, one-to-many lines
      size: ["small", "medium", "large"],
      type: "unordered"
    },
    {
      class: "self-start pt-0.5",
      // Number position, one-to-many lines
      size: ["small", "medium", "large"],
      type: "ordered"
    }
  ],
  extend: Ud,
  variants: {
    hasNestedList: {
      false: "",
      // Default behavior
      true: ""
      // Align with title only
    },
    longform: {
      true: "items-start"
    },
    size: {
      large: "",
      medium: "",
      small: ""
    },
    type: {
      ordered: "",
      unordered: ""
    }
  }
});
H({
  base: "flex flex-col flex-grow text-left gap-1",
  compoundVariants: [
    {
      class: "pt-2",
      size: "small",
      type: "ordered"
    },
    {
      class: "pt-[.375rem]",
      size: "medium",
      type: "ordered"
    },
    {
      class: "pt-0",
      hasNestedList: !1,
      truncate: !0,
      type: "ordered"
    }
  ],
  variants: {
    hasNestedList: {
      false: "",
      true: ""
    },
    size: {
      large: "",
      medium: "",
      small: "",
      "x-small": "gap-0.5"
    },
    truncate: {
      false: "w-full",
      true: "truncate"
    },
    type: {
      ordered: "",
      unordered: ""
    }
  }
});
H({
  variants: {
    truncate: {
      false: "",
      true: "truncate min-w-0"
    }
  }
});
H({
  base: "flex flex-col",
  variants: {
    size: {
      large: "gap-3",
      medium: "gap-2",
      small: "gap-2",
      "x-small": "gap-1"
    }
  }
});
H({
  base: "mt-2",
  compoundVariants: [
    {
      class: "mt-3 ml-8",
      leadingSlot: !0,
      size: "large"
    },
    {
      class: "ml-6",
      leadingSlot: !0,
      size: "medium"
    },
    {
      class: "ml-5",
      leadingSlot: !0,
      size: "small"
    },
    {
      class: "mt-1 ml-4",
      leadingSlot: !0,
      size: "x-small"
    }
  ],
  variants: {
    leadingSlot: {
      false: "ml-0",
      true: ""
    },
    size: {
      large: "mt-2",
      medium: "mt-2",
      small: "mt-2",
      "x-small": "mt-2"
    }
  }
});
H({
  base: "flex flex-shrink-0",
  defaultVariants: {
    longform: !1
  },
  extend: Ud,
  variants: {
    longform: {
      false: "items-center",
      true: "items-start"
    }
  }
});
H({
  base: "text-content-neutral-bold",
  variants: {
    isExpanded: {
      true: "rotate-180"
    }
  }
});
H({
  base: "flex flex-col list-none p-0 m-0",
  compoundVariants: [
    { class: "m-0", isNested: !0, size: ["small", "medium", "large"] }
  ],
  variants: {
    isExpandable: {
      true: "transition-all overflow-hidden motion-reduce:transition-none"
    },
    isNested: {
      false: "",
      true: ""
    },
    noExpandedHeight: {
      true: "[&>*:nth-child(n+8)]:opacity-0 [&>*:nth-child(n+8)]:absolute"
    },
    size: {
      large: "my-4",
      medium: "my-2",
      small: "my-1"
    }
  }
});
H({
  base: "text-content-neutral-bold h-[1lh]",
  variants: {
    size: {
      large: "leading-[--line-height-body-large]",
      medium: "leading-[--line-height-body-medium]",
      small: "leading-[--line-height-body-small]"
    }
  }
});
_.createContext({
  mode: "light",
  theme: "ea-blue",
  themeId: "",
  themeVariant: void 0,
  variant: "ea-blue"
});
var Jk = H({
  base: "relative overflow-hidden"
}), e6 = H({
  base: "rounded-lg [[tabindex='0']&:focus-visible]:outline [[tabindex='0']&:focus-visible]:outline-2 [[tabindex='0']&:focus-visible]:outline-offset-[-3px] [[tabindex='0']&:focus-visible]:outline-interactive-highlight",
  variants: {
    orientation: {
      horizontal: "overflow-x-auto overflow-y-hidden h-full w-full",
      vertical: "overflow-y-auto overflow-x-hidden w-full h-full"
    }
  }
}), t6 = H({
  base: "absolute pointer-events-none",
  compoundVariants: [
    {
      class: "bg-[linear-gradient(to_top,var(--surface-overlay-color)_20%,transparent)]",
      isFadeVisible: !0,
      orientation: "horizontal"
    },
    {
      class: "bg-[linear-gradient(to_top,var(--surface-overlay-color)_20%,transparent)]",
      isFadeVisible: !0,
      orientation: "vertical"
    }
  ],
  variants: {
    isFadeVisible: {
      true: ""
    },
    orientation: {
      horizontal: "h-full -ms-10 w-10 top-0 end-0",
      vertical: "w-full -mt-10 h-10 bottom-0"
    }
  }
});
function Eu(e, r, n) {
  return !(r <= e || n + e >= r - 3);
}
function $u(e, r) {
  return r === "horizontal" ? e.scrollLeft : e.scrollTop;
}
S.forwardRef(
  ({
    as: e,
    children: r,
    className: n,
    contentClassName: i,
    orientation: l = "vertical",
    scrollableTabIndex: c = 0,
    ...u
  }, d) => {
    const h = e ?? "div", [p, b] = S.useState(), v = S.useRef(null);
    return S.useEffect(() => {
      if (!v.current)
        return;
      const g = v.current, w = () => l === "horizontal" ? {
        containerSize: g.clientWidth,
        contentSize: g.scrollWidth
      } : {
        containerSize: g.clientHeight,
        contentSize: g.scrollHeight
      }, { containerSize: k } = w(), { contentSize: y } = w(), C = $u(g, l);
      b(
        Eu(k, y, C)
      );
      const I = () => {
        b(
          Eu(
            k,
            y,
            $u(g, l)
          )
        );
      };
      g.addEventListener("scroll", I, $g);
      let F;
      const D = () => {
        clearTimeout(F), F = setTimeout(() => {
          b(
            Eu(
              w().containerSize,
              w().contentSize,
              $u(g, l)
            )
          );
        }, 100);
      };
      return window.addEventListener("resize", D, $g), () => {
        g.removeEventListener("scroll", I), window.removeEventListener("resize", I), clearTimeout(F);
      };
    }, [l]), /* @__PURE__ */ S.createElement(
      h,
      {
        className: Jk({ className: n }),
        "data-testid": "scrollable-container-wrapper",
        ref: d,
        ...u
      },
      /* @__PURE__ */ S.createElement(
        "div",
        {
          className: e6({
            className: i,
            orientation: l
          }),
          "data-testid": "scrollable-container",
          ref: v,
          tabIndex: c
        },
        r
      ),
      /* @__PURE__ */ S.createElement(
        "div",
        {
          className: t6({ isFadeVisible: p, orientation: l }),
          "data-testid": "scrollable-fade-overlay"
        }
      )
    );
  }
);
var $g = { passive: !0 };
H({
  base: "@paloma-menu group/menu will-change-transform flex flex-col items-start group-data-[variant=standard]/menu:w-fit motion-safe:entering:animate-in motion-safe:entering:fade-in motion-safe:exiting:animate-out motion-safe:exiting:fade-out motion-safe:exiting:zoom-out-95 fill-mode-forwards origin-top-left",
  variants: {
    isPopoverFullWidth: {
      false: "",
      true: "flex w-full items-center"
    },
    shouldZoom: {
      false: "",
      true: "motion-safe:entering:zoom-in-95"
    }
  }
});
H({
  base: "bg-surface-container border border-solid border-neutral-subtle rounded-xl outline-none flex flex-col max-h-screen group-data-[orientation=horizontal]/menu:w-[inherit] group-data-[variant=mega]/menu:w-auto group-data-[variant=mega]/menu:max-w-[1440px] group-data-[variant=mega]/menu:mx-2 lg:group-data-[variant=mega]/menu:mx-10 overflow-auto",
  variants: {
    isPopoverMatchTriggerWidth: {
      false: "group-data-[variant=standard]/menu:w-[250px]",
      true: "group-data-[variant=standard]/menu:w-[--trigger-width]"
    }
  }
});
H({
  base: "w-full box-border rounded-lg pl-4 pr-0 outline-none data-[focus-visible]:shadow-[inset_0_0_0_2px_var(--interactive-highlight-color)]"
});
H({
  base: "w-full rounded-lg"
});
H({
  base: "flex max-w-full flex-col items-start rounded-lg"
});
H({
  variants: {
    layout: {
      menu: "group-data-[variant=standard]/menu:p-2",
      panel: "flex flex-col items-start group-data-[variant=standard]/menu:p-2"
    }
  }
});
H({
  base: "@paloma-menu-footer py-5 bg-surface-level-02 backdrop-blur-surface border-t border-t-solid border-t-neutral-minimal text-content-neutral-bold group-data-[variant=standard]/menu:px-6 group-data-[variant=mega]/menu:px-8",
  variants: {
    layout: {
      "mega-horizontal-dual": "@paloma-menu-mega-horizontal-dual-action w-auto grid gap-10 grid-cols-4",
      "mega-horizontal-single": "@paloma-menu-standard-single-action-or-mega-horizontal-single-action flex items-start",
      "mega-vertical": "@paloma-menu-standard-dual-action-or-mega-vertical flex justify-between gap-3",
      "standard-dual": "@paloma-menu-standard-dual-action-or-mega-vertical flex justify-between gap-3",
      "standard-single": "@paloma-menu-standard-single-action-or-mega-horizontal-single-action flex items-start"
    }
  }
});
var r6 = H({
  base: "h-1 w-1 bg-content-neutral-bold/[0.15] rounded-full",
  variants: {
    isCurrent: {
      true: "w-12"
    }
  }
}), n6 = H({
  base: "flex flex-col gap-4 flex-grow w-full"
}), a6 = H({
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
}), ib = (e, r, n) => ({
  dotWidthGrow: () => e.to([0, 1], [4, 48]).to((k) => `${k}px`),
  dotWidthShrink: () => e.to([0, 1], [48, 4]).to((k) => `${k}px`),
  fadeIn: () => e.to([0, 1], [0, 1]).to((k) => k),
  fadeOut: () => e.to([0, 1], [1, 0]).to((k) => k),
  scaleCard: (k, y) => {
    if (n)
      return e.to([0, 1], [k, y]).to((C) => C);
  },
  slideBack: () => {
    if (n)
      return e.to([0, 1], [0, n]).to((k) => k);
  },
  slideForward: () => {
    if (n)
      return e.to([0, 1], [0, -n]).to((k) => k);
  },
  slideIn: () => {
    if (r)
      return e.to([0, 1], [0, r]).to((k) => k);
  },
  slideOut: (k = 0, y = "left") => {
    if (!r)
      return;
    const C = y === "left" ? -1 : 1;
    return e.to([0, 1], [k, r]).to((I) => C * I);
  }
}), o6 = ({
  currentSlide: e = 1,
  isAnimatingBackward: r,
  isAnimatingForward: n,
  items: i,
  motion: l
}) => {
  const { dotWidthGrow: c, dotWidthShrink: u } = ib(l), d = (h) => {
    if (n) {
      if (h === e)
        return c();
      if (h === (e || i.length) - 1)
        return u();
    } else if (r) {
      if (h === e)
        return c();
      if (h === e + 1 || h === 0 && e + 1 === i.length)
        return u();
    }
  };
  return /* @__PURE__ */ S.createElement(
    "div",
    {
      className: "flex gap-2 self-center",
      "data-testid": Re("@paloma-carousel-dots-id")
    },
    i.map((h, p) => /* @__PURE__ */ S.createElement(
      M0.div,
      {
        className: r6({ isCurrent: p === e }),
        "data-testid": Re(`@paloma-carousel-dot-${p}-id`),
        key: p,
        style: { width: d(p) }
      }
    ))
  );
}, i6 = ({
  arrows: e = !0,
  backArrowLabel: r = "Back",
  forwardArrowLabel: n = "Forward",
  handleBackPress: i,
  handleForwardPress: l,
  title: c,
  titleTag: u = "div"
}) => /* @__PURE__ */ S.createElement(S.Fragment, null, ma(c, {
  as: u,
  className: "m-0 text-content-neutral-bold",
  fontWeight: "bold",
  size: "x-small",
  variant: "heading"
}), e && /* @__PURE__ */ S.createElement("div", { className: "flex gap-8 self-start" }, /* @__PURE__ */ S.createElement(
  X2,
  {
    "aria-label": r,
    className: "rtl:rotate-180 text-content-neutral-bold",
    onClick: i,
    size: "small"
  }
), /* @__PURE__ */ S.createElement(
  r5,
  {
    "aria-label": n,
    className: "rtl:rotate-180 text-content-neutral-bold",
    onClick: l,
    size: "small"
  }
))), Pu = 2, Pg = 5, Fg = 3, l6 = ({
  carouselItemWrapperClassname: e,
  children: r,
  className: n,
  dots: i = !0,
  onSlideChange: l,
  overlap: c = 12,
  scale: u = 0.9,
  titleTag: d = "div",
  withBackdropBlur: h = !1,
  ...p
}) => {
  const [b, v] = _.useState(!1);
  _.useEffect(() => {
    const be = window.matchMedia("(prefers-reduced-motion: reduce)");
    v(be.matches);
    const ze = (sr) => v(sr.matches);
    return be.addEventListener("change", ze), () => be.removeEventListener("change", ze);
  }, []);
  const g = _.useRef(!1), w = _.useRef(null), [k, y] = _.useState(0), [C, I] = _.useState(() => {
    const be = S.Children.toArray(r);
    return [
      be[k === 0 ? be.length - 1 : k - 1],
      ...be.slice(k),
      ...be.slice(0, k)
    ];
  }), F = r.length ?? 0, D = F >= Fg ? Fg : Pu;
  pt(
    F >= Pu && F <= Pg,
    `A carousel must contain between ${Pu} - ${Pg} items.`
  );
  const [W, re] = _.useState(!1), [ee, ne] = _.useState(!1), [ue, ie] = _.useState(!1), ve = W || ee, [se, j] = _.useState({ height: 0, width: 0 }), q = _.useMemo(() => {
    const be = D - 1;
    return se.width + c * be;
  }, [D, se.width, c]);
  _.useEffect(() => {
    g.current ? l?.(k) : g.current = !0;
  }, [l, k]), _.useEffect(() => {
    if (!ve) {
      const be = S.Children.toArray(r), ze = [
        be[k === 0 ? be.length - 1 : k - 1],
        ...be.slice(k),
        ...be.slice(0, k)
      ];
      I(ze);
    }
  }, [r, k, ve]);
  const z = () => {
    w.current && j({
      height: w.current.offsetHeight,
      width: w.current.offsetWidth
    });
  };
  U0(() => {
    z();
    const be = () => {
      z();
    };
    window.addEventListener("resize", be);
    let ze = null;
    return w.current && window.ResizeObserver && (ze = new ResizeObserver(() => {
      z();
    }), ze.observe(w.current)), () => {
      window.removeEventListener("resize", be), ze && ze.disconnect();
    };
  }, []);
  const Y = () => {
    if (!ve)
      return y(k === 0 ? F - 1 : k - 1), ne(!0), ot();
  }, K = () => {
    if (!ve)
      return y(k === F - 1 ? 0 : k + 1), re(!0), ot();
  }, [R, L] = ng(() => ({
    config: {
      duration: 600,
      easing: p0.easeInOutCubic
    },
    motion: 0
  })), [{ x: N }, U] = ng(() => ({ x: 0 })), P = se.width / 4, B = D8(
    ({ active: be, args: [ze], cancel: sr, down: cn, movement: [un] }) => {
      if (ze === 1) {
        if (ie(!0), U.start({
          immediate: b || be,
          x: cn ? un : 0
        }), un < -P)
          return sr(), K();
        if (un > P)
          return sr(), Y();
        !cn && !be && ie(!1);
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
    fadeIn: me,
    fadeOut: pe,
    scaleCard: G,
    slideBack: ce,
    slideForward: ke,
    slideIn: $e,
    slideOut: Ie
  } = ib(R.motion, se.width, c), ot = () => {
    if (b) {
      re(!1), ne(!1), ie(!1);
      return;
    }
    return L.start({
      motion: 1,
      onRest: () => (re(!1), ne(!1), ie(!1), L.start({ immediate: !0, motion: 0 }))
    });
  }, ae = (be) => {
    if (!ve && ue && be === 1)
      return N;
    if (W) {
      if (be === 1)
        return Ie(ue ? P : 0);
      if (be !== 1 && be !== 0)
        return ke();
    }
    if (ee) {
      if (be === 0)
        return $e();
      if (be === 1 && ue)
        return Ie(P, "right");
      if (be !== D)
        return ce();
    }
  }, oe = (be) => {
    if (W && be === 1)
      return pe();
    if (ee) {
      if (be === 0)
        return me();
      if (be === 1 && ue)
        return pe();
    }
  }, Xe = (be) => {
    const ze = Math.pow(u, be - 1);
    if (!ve) {
      if (be === 0 || be === 1)
        return;
      if (be !== 1)
        return [1, ze];
    }
    if (W)
      return be === 1 || be === 0 ? void 0 : [1, G(ze, Math.pow(u, be - 2))];
    if (ee) {
      if (be === 0)
        return;
      if (be === D)
        return [1, ze];
      if (be !== 0)
        return [1, G(ze, Math.pow(u, be))];
    }
  }, De = (be) => be === 0 ? -se.width : be === 1 ? 0 : (be - 1) * c;
  return /* @__PURE__ */ S.createElement(
    "div",
    {
      className: n6({ class: n }),
      "data-testid": Re("@paloma-carousel-id"),
      style: { maxWidth: q }
    },
    /* @__PURE__ */ S.createElement("div", { className: "flex flex-grow justify-between items-center gap-4" }, /* @__PURE__ */ S.createElement(
      i6,
      {
        handleBackPress: Y,
        handleForwardPress: K,
        titleTag: d,
        ...p
      }
    )),
    /* @__PURE__ */ S.createElement("div", { className: "flex flex-col items-start gap-6" }, /* @__PURE__ */ S.createElement(
      "div",
      {
        className: "flex relative z-0 select-none",
        "data-carousel-card-container": !0,
        "data-testid": Re("@paloma-carousel-card-container-id"),
        style: { height: se.height, width: se.width }
      },
      C.map((be, ze) => {
        if (ze > D)
          return;
        const sr = {
          index: ze,
          left: De(ze),
          opacity: oe(ze),
          scale: Xe(ze),
          translateX: ae(ze),
          zIndex: ze === 0 ? 2 : ze === 1 ? 1 : -(F * ze)
        };
        return /* @__PURE__ */ S.createElement(
          M0.div,
          {
            ...B(ze),
            className: a6({
              class: e,
              isFirst: ze === 0,
              withBackdropBlur: h
            }),
            key: ze,
            onDragStart: (cn) => cn.preventDefault(),
            style: sr
          },
          be
        );
      }),
      /* @__PURE__ */ S.createElement(
        "div",
        {
          className: "absolute",
          "data-testid": Re("@paloma-carousel-last-id"),
          ref: w,
          style: {
            left: De(D),
            scale: `1 ${Math.pow(u, D - 1)}`,
            zIndex: F * -(F + 1)
          }
        },
        C[F - 1]
      )
    ), i && /* @__PURE__ */ S.createElement(
      o6,
      {
        currentSlide: k,
        isAnimatingBackward: ee,
        isAnimatingForward: W,
        items: r,
        motion: R.motion
      }
    ))
  );
}, s6 = H({
  base: "group/paloma-chip rounded-full flex items-center border-solid border text-content-neutral-bold backdrop-blur-surface",
  compoundVariants: [
    /* hasLeadingContent with {X} size */
    {
      className: "ps-3",
      hasLeadingContent: !1,
      size: ["small", "x-small"]
    },
    {
      className: "ps-4",
      hasLeadingContent: !1,
      size: "medium"
    },
    /* Dismissible with {X} size */
    {
      className: "pe-0.5",
      isDismissible: !0,
      size: "x-small"
    },
    {
      className: "pe-1",
      isDismissible: !0,
      size: "small"
    },
    {
      className: "pe-2.5",
      isDismissible: !0,
      size: "medium"
    },
    /* hasOnlyBadge with {X} size */
    {
      className: "pe-1",
      hasOnlyBadge: !0,
      size: "x-small"
    },
    {
      className: "pe-2.5",
      hasOnlyBadge: !0,
      size: "small"
    },
    {
      className: "pe-4",
      hasOnlyBadge: !0,
      size: "medium"
    },
    /* isIconComponent with {X} size */
    {
      className: "ps-0",
      isIconComponent: !0,
      size: "x-small"
    },
    {
      className: "ps-2",
      isIconComponent: !0,
      size: ["small", "medium"]
    },
    {
      className: "pe-3",
      hasLeadingContent: !1,
      hasOnlyBadge: !1,
      isDismissible: !1,
      size: "x-small"
    }
  ],
  variants: {
    disabled: {
      false: "",
      true: "opacity-30"
    },
    emphasis: {
      minimal: "bg-interactive-neutral-minimal border-neutral-minimal",
      regular: "bg-interactive-neutral-regular border-neutral-regular",
      subtle: "bg-interactive-neutral-subtle border-neutral-subtle"
    },
    hasLeadingContent: {
      false: "",
      true: "ps-0"
    },
    hasOnlyBadge: {
      false: "",
      true: ""
    },
    isDismissible: {
      false: "",
      true: ""
    },
    isIconComponent: {
      false: "",
      true: ""
    },
    isInteractive: {
      false: "",
      true: "cursor-pointer outline-none hover:bg-content-neutral-regular/[0.08] hover:active:bg-content-neutral-regular/[0.12]"
    },
    selected: {
      false: "",
      true: "border-2 border-highlight bg-surface-highlight-subtle"
    },
    size: {
      medium: "pe-4 h-14",
      small: "h-11 pe-3",
      "x-small": "h-8 he-3"
    }
  }
}), c6 = H({
  slots: {
    avatar: "",
    icon: "flex",
    product: ""
  },
  variants: {
    size: {
      medium: {
        avatar: "p-1.5 pr-2 rtl:pr-1.5 rtl:pl-2",
        icon: "p-2",
        product: "py-3 pl-4 pr-2 rtl:pr-4 rtl:pl-2"
      },
      small: {
        avatar: "p-1.5",
        icon: "p-2",
        product: "py-2.5 pl-3 pr-2 rtl:pr-3 rtl:pl-2"
      },
      "x-small": {
        avatar: "p-1",
        icon: "p-2",
        product: "py-1 px-2"
      }
    }
  }
}), u6 = H({
  base: "flex items-center gap-2",
  variants: {
    hasOnlyDismissButton: {
      false: "",
      true: "gap-1"
    },
    truncate: {
      false: "",
      true: "min-w-0"
    }
  }
}), d6 = H({
  base: "flex items-center justify-center box-border min-w-6 min-h-6 rounded-full border-1 border-solid border-neutral-subtle bg-surface-level-01",
  variants: {
    isBadgeAmountLong: {
      true: "px-1"
    },
    selected: {
      true: "border-none bg-surface-highlight-bold text-content-inverse-bold"
    }
  }
}), f6 = H({
  variants: {
    disabled: {
      false: "rounded-full mx-0.5 hover:bg-content-neutral-bold/[0.08] hover:active:bg-content-neutral-bold/[0.12]"
    }
  }
}), p6 = H({
  base: "content-neutral-regular"
}), ud = ({
  badge: e,
  chipContentClassname: r,
  className: n,
  disabled: i,
  dismissLabel: l,
  dismissible: c = !1,
  emphasis: u = "minimal",
  label: d,
  leadingContent: h,
  onClick: p,
  onDismiss: b,
  selected: v = !1,
  size: g = "small",
  truncate: w = !1
}) => {
  const { pressProps: k } = ya({
    isDisabled: i,
    onPress: p
  }), y = p ? "button" : "div", C = {};
  p && (Object.assign(C, k), C["aria-disabled"] = i, C.disabled = i, C.role = "button");
  const I = h !== void 0 && Kd(h), F = typeof e == "number" && !Number.isNaN(e), D = c && !!b, W = !!p && !i, re = F && e >= 100, ee = !F && !!D, { avatar: ne, icon: ue, product: ie } = c6({ size: g });
  return pt(
    h === void 0 || h.type === cd || I || h.type === yg,
    "The Leading content must be an Avatar, ProductLogo or @paloma/icons component."
  ), /* @__PURE__ */ S.createElement(Rr, null, /* @__PURE__ */ S.createElement(
    y,
    {
      className: s6({
        className: n,
        disabled: i,
        emphasis: u,
        hasLeadingContent: !!h,
        hasOnlyBadge: F,
        isDismissible: D,
        isIconComponent: I,
        isInteractive: W,
        selected: v,
        size: g
      }),
      "data-testid": "@paloma-chip-id",
      ...C
    },
    h?.type === cd && // Paddings depending on size
    /* @__PURE__ */ S.createElement("div", { className: ne(), "data-testid": "@paloma-chip-avatar" }, S.cloneElement(h, {
      size: h6[g]
    })),
    h?.type === yg && // Paddings depending on size
    /* @__PURE__ */ S.createElement("div", { className: ie(), "data-testid": "@paloma-chip-product-logo" }, S.cloneElement(h, {
      as: "div",
      contained: !0,
      shape: "square",
      size: m6[g]
    })),
    I && // Paddings according to size
    /* @__PURE__ */ S.createElement("div", { className: ue(), "data-testid": "@paloma-chip-icon" }, S.cloneElement(h, { size: g })),
    /* @__PURE__ */ S.createElement(
      "div",
      {
        className: u6({
          className: r,
          hasOnlyDismissButton: ee,
          truncate: w
        }),
        "data-testid": "@paloma-chip-content-id"
      },
      /* @__PURE__ */ S.createElement(
        ut,
        {
          className: p6(),
          fontWeight: v ? "bold" : "normal",
          size: g,
          truncate: w,
          variant: "body"
        },
        d
      ),
      (F || D) && /* @__PURE__ */ S.createElement(
        "div",
        {
          className: "flex items-center",
          "data-testid": "@paloma-chip-trailing-content-id"
        },
        F && /* @__PURE__ */ S.createElement(
          "div",
          {
            className: d6({ isBadgeAmountLong: re, selected: v }),
            "data-testid": "@paloma-chip-badge-id"
          },
          /* @__PURE__ */ S.createElement(ut, { size: "x-small", variant: "body" }, e)
        ),
        D && !v && /* @__PURE__ */ S.createElement(
          "div",
          {
            className: f6({ disabled: i }),
            "data-testid": "@paloma-chip-dismiss-button-id"
          },
          /* @__PURE__ */ S.createElement(
            u5,
            {
              "aria-label": l,
              className: "text-content-neutral-bold",
              disabled: i,
              onClick: b,
              size: g
            }
          )
        )
      )
    )
  ));
}, h6 = {
  medium: "small",
  small: "x-small",
  "x-small": "xx-small"
}, m6 = {
  medium: "x-small",
  small: "2x-small",
  "x-small": "2x-small"
};
H({
  base: "flex py-5 border-solid border-[1px] backdrop-blur-surface",
  variants: {
    placement: {
      inline: "w-full bg-content-inverse-subtle rounded-lg border-neutral-subtle",
      top: "bg-surface-container justify-center sticky top-0 left-0 right-0 border-solid border-b-1 border-x-0 border-t-0 border-neutral-subtle max-[1440px]:px-5"
    }
  }
});
H({
  base: "flex gap-4 max-lg:flex-col lg:flex-row lg:justify-between w-full",
  variants: {
    placement: {
      inline: "flex-1 px-6",
      top: "max-w-[1440px]"
    }
  }
});
Ue({
  base: [
    "flex justify-center py-4 z-[90] sticky",
    "lg:border-solid lg:border-x-0 lg:border-t-0 lg:border-b lg:border-neutral-subtle",
    "lg:bg-transparent transition ease-in top-0 bg-transparent duration-200"
  ],
  variants: {
    hasBgDesktop: {
      false: "",
      true: "lg:!bg-base"
    },
    hasBgMobile: {
      false: "",
      true: "!bg-base"
    },
    scrolledHeaderVisible: {
      false: "-translate-y-full",
      true: "translate-y-0"
    },
    shouldHideDesktop: {
      false: "",
      true: "lg:-translate-y-full"
    },
    shouldHideMobile: {
      false: "",
      true: "max-lg:-translate-y-full"
    }
  }
});
Ue({
  base: "text-content-neutral-bold"
});
Ue({
  // Target the logos text to hide on mobile only
  base: "text-content-neutral-bold [&_span[data-logo-product-name=paloma-logo]]:max-lg:hidden"
});
Ue({
  variants: {
    isOpen: {
      false: "bg-transparent",
      true: ""
    }
  }
});
H({
  base: "w-10 h-10",
  variants: {
    size: {
      large: "lg:w-20 lg:h-20",
      // 60px
      medium: "lg:w-[3.75rem] lg:h-[3.75rem]"
    }
  }
});
H({
  base: "text-content-neutral-bold col-span-full max-lg:flex gap-6 max-lg:flex-col lg:grid lg:grid-cols-subgrid",
  variants: {
    expanded: {
      true: "mt-20 md:mt-36"
    },
    size: {
      large: "pt-16 md:pt-28 lg:pt-36 pb-8 md:pb-10 lg:pb-14",
      medium: "pt-10 pb-10 lg:pt-16 lg:pb-10"
    }
  }
});
H({
  base: "flex flex-col col-span-full",
  variants: {
    alignment: {
      centered: "items-center text-center",
      left: "",
      /*
       * Intentionally empty: "right" is a page-level placement variant, not a content-alignment directive.
       * Content inside the Hero stays left-aligned (flex default: items-start).
       * This contract was established in branch PDS-1011/hero — adding items-end or text-right here
       * is a breaking change for consumers who shipped with alignment="right" and requires a major version bump.
       */
      right: ""
    },
    size: {
      large: "max-lg:gap-4 lg:gap-8",
      medium: "max-lg:gap-4 lg:gap-5"
    }
  }
});
H({
  base: "relative",
  variants: {
    size: {
      large: "h-11 lg:h-20",
      medium: "h-11"
    }
  }
});
H({
  base: "h-full"
});
H({
  base: "max-lg:flex justify-between gap-5 w-full lg:grid lg:grid-cols-12",
  compoundVariants: [
    {
      alignment: "centered",
      class: "items-center",
      hasActions: !0
    },
    {
      alignment: "centered",
      class: "items-center lg:flex lg:max-w-[59.625rem]",
      hasActions: !1,
      hasQuickActions: !1
    },
    {
      alignment: "left",
      class: "items-end",
      hasQuickActions: !0
    }
  ],
  variants: {
    alignment: {
      centered: "",
      left: "",
      right: ""
    },
    hasActions: {
      false: "",
      true: ""
    },
    hasQuickActions: {
      false: "",
      true: ""
    }
  }
});
H({
  base: "lg:col-span-8",
  variants: {
    alignment: {
      centered: "!col-start-3",
      left: "",
      right: ""
    }
  }
});
H({
  compoundVariants: [
    {
      class: {
        label: "text-content-negative"
      },
      emphasis: "bold",
      status: "negative"
    },
    {
      class: {
        label: "text-content-positive"
      },
      emphasis: "bold",
      status: "positive"
    },
    {
      class: {
        label: "text-content-warning"
      },
      emphasis: "bold",
      status: "warning"
    }
  ],
  slots: {
    border: "border-solid border-l-2 border-y-0 border-r-0",
    container: "flex",
    label: "flex flex-col",
    leadingIcon: ""
  },
  variants: {
    emphasis: {
      bold: {
        label: "text-content-neutral-bold"
      },
      regular: {
        label: "text-content-neutral-regular"
      }
    },
    size: {
      large: {
        border: "pr-2",
        container: "gap-2",
        label: "gap-8"
      },
      medium: {
        border: "pr-2",
        container: "gap-2",
        label: "gap-6"
      },
      small: {
        border: "pr-1",
        container: "gap-1",
        label: "gap-5"
      },
      "x-small": {
        border: "pr-1",
        container: "gap-1",
        label: "gap-4"
      }
    },
    status: {
      negative: {
        border: "border-negative",
        label: "flex flex-row items-center gap-1 text-content-negative",
        leadingIcon: "text-content-negative"
      },
      none: {
        border: "border-neutral-regular",
        leadingIcon: "text-content-bold"
      },
      positive: {
        border: "border-positive",
        leadingIcon: "text-content-positive"
      },
      warning: {
        border: "border-warning",
        leadingIcon: "text-content-warning"
      }
    }
  }
});
var g6 = H({
  base: [
    "group",
    // Flex classes
    "flex flex-col items-center",
    // Colors
    "bg-transparent border-none text-content-neutral-regular",
    // Text styles
    "no-underline text-center",
    "rounded-lg outline-none"
  ],
  variants: {
    disabled: {
      false: "hover:cursor-pointer",
      true: "pointer-events-none opacity-30"
    },
    size: {
      // 150px
      medium: "w-[9.375rem] gap-4",
      // 100px
      small: "w-[6.25rem] gap-2"
    }
  }
}), v6 = H({
  base: [
    "absolute top-0 left-0 right-0 bottom-0",
    "rounded-full border-none",
    "group-hover:bg-content-neutral-bold/[0.08]",
    "group-active:bg-content-neutral-bold/[0.12]",
    "group-hover:group-active:bg-content-neutral-bold/[0.12]"
  ]
});
_.forwardRef(
  ({
    as: e,
    className: r,
    disabled: n,
    href: i,
    icon: l,
    label: c,
    onBlur: u,
    onClick: d,
    onFocus: h,
    size: p = "medium",
    ...b
  }, v) => {
    const g = e ?? (i ? "a" : "button"), w = _.useRef(null), { buttonProps: k } = wa(
      { isDisabled: n, onBlur: u, onFocus: h, onPress: d },
      w
    ), { linkProps: y } = vv(
      { href: i, isDisabled: n, onBlur: u, onFocus: h, onPress: d },
      w
    ), C = Ne(
      b,
      g === "a" ? y : void 0,
      g === "button" ? k : void 0
    );
    return /* @__PURE__ */ S.createElement(Rr, null, _.createElement(
      g,
      {
        "aria-disabled": n,
        className: g6({
          className: r,
          disabled: n,
          size: p
        }),
        ref: vr(w, v),
        ...C
      },
      /* @__PURE__ */ S.createElement("div", { className: "relative" }, /* @__PURE__ */ S.createElement(
        Bd,
        {
          "aria-hidden": "true",
          as: "div",
          iconOnly: !0,
          leadingIcon: l,
          size: p,
          variant: "secondary"
        }
      ), /* @__PURE__ */ S.createElement(
        "div",
        {
          "aria-hidden": "true",
          className: v6(),
          "data-vrt-overlay": !0
        }
      )),
      /* @__PURE__ */ S.createElement(ut, { size: p, variant: "body" }, c)
    ));
  }
);
H({
  base: "w-full"
});
H({
  base: "flex flex-col gap-2 md:gap-4",
  variants: {
    alignment: {
      centered: "items-center",
      left: "",
      /*
       * Intentionally empty: "right" positions the Hero block within the page grid; text and headings
       * inside remain left-aligned (flex default). This contract was established in branch PDS-1011/hero —
       * adding items-end here breaks consumers who shipped with alignment="right" and requires a major version bump.
       */
      right: ""
    }
  }
});
H({
  base: [
    // Grid classes
    "lg:col-span-4",
    // Flex classes (for all breakpoints)
    "flex flex-row gap-4",
    // Flex classes for desktop
    "lg:justify-end"
  ]
});
H({
  base: "col-span-4 justify-around gap-4",
  defaultVariants: {
    display: "normal"
  },
  variants: {
    display: {
      /** Without max-md media queries, classNames will not be overridden */
      desktop: "max-md:hidden md:flex",
      mobile: "max-md:flex md:hidden",
      normal: "flex"
    }
  }
});
Ue({
  variants: {
    colorVariant: {
      // eslint-disable-line perfectionist/sort-objects
      "ea-battlefield6": "[--base-color:#BFCAD1] [--accent-color:#FFD8CC] [--glow-color:#FFB199] dark:[--base-color:#000000] dark:[--accent-color:#FF6333] dark:[--glow-color:#E53600]",
      "ea-blue": "[--base-color:#EBF0FE] [--accent-color:#7B9AFA] [--glow-color:#BA84F1] dark:[--base-color:#01081D] dark:[--accent-color:#6D17C4] dark:[--glow-color:#093DD8]",
      "ea-madden": "[--base-color:#FFEEEB] [--accent-color:#FFDED7] [--glow-color:#FFD4CC] dark:[--base-color:#000000] dark:[--accent-color:#FF7F66] dark:[--glow-color:#FF2900]",
      "ea-sims": "[--base-color:#EBEEF6] [--accent-color:#A8DCF3] [--glow-color:#ADBBDB] dark:[--base-color:#142242] dark:[--accent-color:#25A8E0] dark:[--glow-color:#3356A4]",
      "fc-green": "[--base-color:#E3FBE9] [--accent-color:#6AF8A4] [--glow-color:#07F468] dark:[--base-color:#020B07] dark:[--accent-color:#03622A] dark:[--glow-color:#07F468]",
      purple: "[--base-color:#FCF5FA] [--accent-color:#D973BA] [--glow-color:#BA84F1] dark:[--base-color:#160511] dark:[--accent-color:#972073] dark:[--glow-color:#872AE6]",
      red: "[--base-color:#FFEBEB] [--accent-color:#E59090] [--glow-color:#E59090] dark:[--base-color:#160303] dark:[--accent-color:#6D1111] dark:[--glow-color:#E00000]"
    }
  }
});
Ue({
  base: "blur-[4px]"
});
Ue({
  base: "z-0 min-h-[900px] w-screen relative bg-base",
  variants: {
    colorVariant: {
      "ea-battlefield6": "bg-[#BFCAD1] dark:bg-[#000000]",
      // eslint-disable-line perfectionist/sort-objects
      "ea-blue": "bg-[#EBF0FE] dark:bg-[#01081D]",
      "ea-madden": "bg-[#FFEEEB] dark:bg-[#000000]",
      "ea-sims": "bg-[#EBEEF6] dark:bg-[#142242]",
      "fc-green": "bg-[#E3FBE9] dark:bg-[#020B07]",
      purple: "bg-[#FCF5FA] dark:bg-[#160511]",
      red: "bg-[#FDF4F4] dark:bg-[#160303]"
    },
    hasCustomColor: {
      true: "bg-[var(--base-color-light)] dark:bg-[var(--base-color-dark)]"
    }
  }
});
Ue({
  base: "blur-[50px]"
});
Ue({
  base: "absolute  h-auto w-[175%] md:w-[100%] lg:w-[82%] -right-[50%] md:-right-[10%] lg:right-[5%] lg:-bottom-20",
  variants: {
    browserVariant: {
      chrome: "bottom-0 md:bottom-20",
      notChrome: "top-28 md:top-auto md:bottom-40"
    }
  }
});
Ue({
  base: "absolute  h-auto w-[200%] md:w-full lg:w-[90%] -left-[50%] md:left-0 lg:left-[5%] lg:-bottom-20",
  variants: {
    browserVariant: {
      chrome: "bottom-0 md:bottom-20",
      notChrome: "top-28 md:top-auto md:bottom-40"
    }
  }
});
H({
  base: [
    "flex flex-col",
    "bg-surface-container backdrop-blur-surface",
    "border border-solid border-neutral-subtle",
    "text-content-neutral-bold rounded-xl w-[256px] px-6 py-2"
  ]
});
H({
  base: "flex py-4 w-full items-center",
  variants: {
    size: {
      medium: "mb-2 text-content-highlight gap-4",
      small: "mb-1 gap-2"
    }
  }
});
H({
  base: "py-4"
});
Ue({
  base: "@paloma-logo flex flex-row gap-2 items-center"
});
var b6 = H({
  base: [
    "box-border flex rounded-2xl gap-4 text-content-neutral-regular w-[312px]",
    "border-none outline-none bg-transparent ltr:text-left"
  ],
  compoundVariants: [
    { class: "p-2", contained: !0, isVertical: !0 },
    { class: "p-4", contained: !0, isVertical: !1 },
    { class: "flex-col", isVertical: !0, withTrailingSlot: !0 },
    // When trailingSlotBottom is true, ensure column layout and proper spacing
    {
      class: "flex-col md:items-center",
      trailingSlotBottom: !0
    }
  ],
  defaultVariants: {
    trailingSlotBottom: !1
  },
  variants: {
    contained: {
      false: "p-0",
      true: "border border-solid border-neutral-subtle bg-surface-container backdrop-blur-surface"
    },
    isButton: {
      true: "cursor-pointer active:bg-content-neutral-bold/[0.12] hover:active:bg-content-neutral-bold/[0.12]"
    },
    isVertical: {
      false: "flex-col md:flex-row w-full items-start",
      true: "flex-col items-stretch"
    },
    trailingSlotBottom: {
      false: "",
      true: ""
    },
    withTrailingSlot: {
      true: "flex-row"
    }
  }
}), zg = H({
  base: "flex flex-col flex-grow",
  compoundVariants: [
    { class: "md:flex-col md:gap-0", isVertical: !0, withTrailingSlot: !0 }
  ],
  defaultVariants: {
    trailingSlotBottom: !1
  },
  variants: {
    isCondensed: {
      true: "md:flex-row"
    },
    isVertical: {
      false: "md:flex-row w-full items-start",
      true: "items-stretch"
    },
    trailingSlotBottom: {
      false: "",
      true: "items-center"
    },
    withTrailingSlot: {
      true: "md:flex-row md:gap-4"
    }
  }
}), y6 = H({
  base: "m-0",
  defaultVariants: {
    headingSize: "div",
    truncateTitle: "undefined"
  },
  variants: {
    headingSize: {
      div: "",
      h2: "!text-[1.5em]",
      h3: "!text-[1.17em]",
      h4: "!text-[1em]",
      h5: "!text-[0.83em]",
      h6: "!text-[0.67em]",
      span: ""
    },
    truncateTitle: {
      1: "line-clamp-1",
      2: "line-clamp-2",
      3: "line-clamp-3",
      4: "line-clamp-4",
      5: "line-clamp-5",
      6: "line-clamp-6",
      none: "line-clamp-none",
      undefined: "truncate"
    }
  }
}), w6 = H({
  base: "flex flex-shrink-0 relative",
  compoundVariants: [
    { class: "w-[64px] h-[64px]", isCondensed: !0, isVertical: !1 }
  ],
  variants: {
    isCondensed: {
      true: "w-[64px] h-[64px]"
    },
    isVertical: {
      false: "w-[148px] h-[100px]"
    },
    trailingSlotBottom: {
      false: "",
      true: "mr-4"
    }
  }
}), x6 = H({
  base: "w-full",
  variants: {
    orientation: {
      horizontal: "rounded-lg",
      vertical: "rounded-xl"
    }
  }
}), k6 = H({
  base: "flex gap-2 flex-col flex-grow",
  compoundVariants: [
    { class: "pb-0 pr-0", contained: !0, isVertical: !1 }
  ],
  variants: {
    contained: {
      true: "px-4 pb-4"
    },
    isCondensed: {
      true: "gap-0"
    },
    isVertical: {
      false: "pl-0 w-full md:w-auto"
    }
  }
}), S6 = H({
  defaultVariants: {
    truncateBody: "undefined"
  },
  variants: {
    truncateBody: {
      1: "line-clamp-1",
      2: "line-clamp-2",
      3: "line-clamp-3",
      4: "line-clamp-4",
      5: "line-clamp-5",
      6: "line-clamp-6",
      none: "line-clamp-none",
      undefined: ""
    }
  }
}), C6 = H({
  base: "flex justify-center items-center md:self-center",
  defaultVariants: {
    trailingSlotBottom: !1
  },
  variants: {
    isVertical: {
      true: "self-start md:self-start px-4"
    },
    trailingSlotBottom: {
      false: "",
      true: "flex flex-col gap-2 [&[data-trailing-slot-bottom=true]]:items-end"
    }
  }
}), _6 = H({
  base: "w-full flex flex-col gap-2 items-center md:[&[data-trailing-bottom=true]]:items-end [&>button]:w-full md:[&>button]:w-auto"
}), dd = ({
  action: e,
  actionIcon: r,
  badgeAriaLabel: n,
  badgeLabel: i,
  body: l,
  className: c,
  contained: u,
  contentSlot: d,
  disabled: h = !1,
  emphasis: p = "bold",
  eyebrow: b,
  media: v,
  meta: g,
  metaSlot: w,
  onClick: k,
  orientation: y = "vertical",
  size: C = "large",
  title: I,
  titleTag: F = "div",
  trailingSlot: D,
  trailingSlotBottom: W = !1,
  truncateBody: re = "none",
  truncateTitle: ee,
  variant: ne = "base",
  ...ue
}) => {
  const ie = y === "vertical", ve = ne === "condensed", se = !!D, j = !!I || !!g || !!l || !!e, q = j || se, { pressProps: z } = ya({
    isDisabled: h,
    onPress: k
  }), Y = k ? "button" : "div", K = k ? Ne(z, {
    "aria-disabled": h,
    disabled: h
  }) : {}, R = S.cloneElement(v, {
    className: x6({
      class: v.props.className,
      orientation: y
    })
  }), L = () => i ? typeof i == "string" ? /* @__PURE__ */ S.createElement(
    "div",
    {
      className: "absolute bottom-2 left-1/2 -translate-x-1/2",
      "data-testid": "@paloma-media-card-badge-id"
    },
    /* @__PURE__ */ S.createElement(
      is,
      {
        appearance: "neutral",
        "aria-label": n,
        emphasis: "bold",
        label: i,
        size: "small",
        standalone: !0
      }
    )
  ) : i : null, N = () => /* @__PURE__ */ S.createElement(
    "div",
    {
      className: w6({
        isCondensed: ve,
        isVertical: ie,
        trailingSlotBottom: !!W
      })
    },
    L(),
    va(R, q0) ? S.cloneElement(R, {
      ratio: ve ? "1:1" : "16:9"
    }) : R
  ), U = () => e ? /* @__PURE__ */ S.createElement(
    "div",
    {
      className: "flex flex-row justify-between items-center pt-2 mt-auto",
      "data-testid": "@paloma-media-card-action-id"
    },
    /* @__PURE__ */ S.createElement(
      ut,
      {
        className: "text-content-highlight",
        fontWeight: "bold",
        size: "small",
        variant: "body"
      },
      e
    ),
    r ? kt(
      {
        contained: !0,
        containerClassName: "leading-none",
        size: "x-small"
      },
      r
    ) : /* @__PURE__ */ S.createElement(Jv, { contained: !0, size: "x-small" })
  ) : null, P = () => g ? /* @__PURE__ */ S.createElement(
    "div",
    {
      className: "flex flex-row gap-1 items-center",
      "data-testid": "@paloma-media-card-meta-id"
    },
    w && (Kd(w) ? kt({ size: "x-small" }, w) : w),
    /* @__PURE__ */ S.createElement(
      ut,
      {
        className: "text-content-neutral-subtle",
        fontWeight: "bold",
        size: "x-small",
        variant: "body"
      },
      g
    )
  ) : null, B = () => j ? /* @__PURE__ */ S.createElement(
    "div",
    {
      className: k6({
        contained: u,
        isCondensed: ve,
        isVertical: ie
      }),
      "data-testid": "@paloma-media-card-content-id"
    },
    b && ma(b, {
      size: "x-small",
      variant: "body"
    }),
    I && ma(I, {
      as: F,
      className: y6({
        headingSize: F,
        truncateTitle: ee
      }),
      fontWeight: p === "regular" ? "normal" : p,
      ...F === "div" && { size: C },
      variant: "body"
    }),
    P(),
    l && ma(l, {
      className: S6({
        truncateBody: re
      }),
      size: "small",
      variant: "body"
    }),
    d,
    U()
  ) : null, me = () => D ? W ? /* @__PURE__ */ S.createElement(
    "div",
    {
      className: _6(),
      "data-trailing-bottom": !!W
    },
    D
  ) : /* @__PURE__ */ S.createElement(
    "div",
    {
      className: C6({ isVertical: ie }),
      "data-trailing-slot-bottom": !1
    },
    D
  ) : null;
  return /* @__PURE__ */ S.createElement(Rr, { focusRingClass: "rounded-xl" }, /* @__PURE__ */ S.createElement(
    Y,
    {
      className: b6({
        class: c,
        contained: u,
        isButton: !!k && !h,
        isVertical: ie,
        trailingSlotBottom: !!W,
        withTrailingSlot: se
      }),
      "data-trailing-bottom": !!W,
      ...Ne(K, ue)
    },
    W ? /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement("div", { className: "flex w-full" }, N(), q && /* @__PURE__ */ S.createElement(
      "div",
      {
        className: zg({
          isCondensed: ve,
          isVertical: ie,
          trailingSlotBottom: !1,
          withTrailingSlot: !1
        })
      },
      B()
    )), me()) : /* @__PURE__ */ S.createElement(S.Fragment, null, N(), q && /* @__PURE__ */ S.createElement(
      "div",
      {
        className: zg({
          isCondensed: ve,
          isVertical: ie,
          trailingSlotBottom: !!W,
          withTrailingSlot: se
        })
      },
      B(),
      me()
    ))
  ));
};
Ue({
  base: "@paloma-mega-menu-content data-[orientation=vertical]:p-6 data-[orientation=horizontal]:py-12 data-[orientation=horizontal]:px-8 data-[orientation=horizontal]:w-[-webkit-fill-available]"
});
var lb = _.createContext(null);
lb.Provider;
var E6 = () => {
  const e = _.useContext(lb);
  return pt(
    e !== null,
    "useModalContext must be used within a ModalProvider."
  ), e;
}, $6 = H({
  base: [
    // Position and sizing
    "flex-auto",
    // Bottom Sheet styles
    "p-4",
    // Ensure proper overflow handling - contain scroll within modal
    "overflow-auto overscroll-contain",
    // Prevent content from going outside modal bounds
    "max-h-full",
    // Prevent touch scroll events from bubbling to body
    "touch-action-pan-y"
  ],
  compoundVariants: [
    {
      asBottomSheet: !1,
      class: "md:pb-8",
      hasFooter: !1
    }
  ],
  variants: {
    asBottomSheet: {
      false: "md:p-8"
    },
    hasFooter: {
      false: "pb-4"
    }
  }
});
_.forwardRef(
  ({ children: e, className: r, hasFooter: n, ...i }, l) => {
    const { asBottomSheet: c } = E6();
    return /* @__PURE__ */ S.createElement(
      "div",
      {
        className: $6({ asBottomSheet: c, class: r, hasFooter: n }),
        ref: l,
        ...i
      },
      e
    );
  }
);
H({
  /* Bottom sheet */
  base: "flex flex-row-reverse gap-4 p-6",
  compoundVariants: [
    {
      actionsOrientation: "vertical",
      asBottomSheet: !0,
      class: "flex-col"
    }
  ],
  variants: {
    actionsOrientation: {
      horizontal: "",
      vertical: ""
    },
    asBottomSheet: {
      // For Modal
      false: "md:p-8",
      true: "justify-center"
    }
  }
});
H({
  base: "max-sm:max-w-full",
  variants: {
    asBottomSheet: {
      true: "max-w-full flex-grow-[1] basis-[0%]"
    }
  }
});
H({
  base: [
    // Positioning
    "absolute overflow-hidden pointer-events-none",
    // Sizing
    "w-full h-5 rounded-2xl"
  ]
});
H({
  base: "h-10",
  // Color and effect
  variants: {
    isScrollOverlayVisible: {
      true: "bg-surface-overlay blur-[18px]"
    }
  }
});
H({
  base: [
    // Spacing & Sizing classes - Use consistent viewport units with positioning
    "fixed inset-0 w-[100vw] h-[100vh] h-[100dvh] min-h-[100vh] min-h-[100dvh] box-border",
    // Flex classes (for bottom sheet)
    "flex flex-col justify-end",
    // Paddings (for bottom sheet),
    "pt-[0.625rem]",
    // Ensure no gaps during zoom
    "overscroll-none"
  ],
  variants: {
    asBottomSheet: {
      false: [
        // Use auto height for modal
        "h-auto",
        // Ensure container fills the screen height (for desktop)
        "md:min-h-screen md:min-h-[100dvh]",
        // Grid classes (for desktop)
        "md:grid md:container md:gap-x-4 md:max-lg:grid-cols-8 lg:grid-cols-12",
        // Centering items in the grid container
        "md:place-items-center",
        // Paddings (via breakpoint)
        "md:py-16"
      ],
      true: [
        // Apply dynamic height to bottom sheet with fallback and extra coverage
        "h-[100vh] h-[100dvh] h-[calc(var(--vh)*100)] min-h-[100vh] min-h-[100dvh]",
        // Flex classes (for bottom sheet)
        "flex flex-col justify-end",
        // Paddings (for bottom sheet),
        "pt-[0.625rem]",
        // Prevent scroll bounce that might show background
        "overscroll-none"
      ]
    }
  }
});
H({
  base: [
    "h-fit w-full relative z-10",
    // Border styles
    "rounded-2xl border border-solid border-neutral-subtle",
    // Color styles
    "bg-surface-overlay backdrop-blur-surface",
    // Max height (for bottom sheet) with multiple fallbacks
    "max-h-[calc(100vh_-_0.625rem)] max-h-[calc(100dvh_-_0.625rem)]",
    // Ensure modal content doesn't overflow during zoom and contains scroll
    "overflow-hidden overscroll-contain",
    // Prevent background scroll propagation
    "touch-action-manipulation"
  ],
  compoundVariants: [
    {
      asBottomSheet: !1,
      class: "md:max-lg:col-span-4 md:max-lg:col-start-3 lg:col-span-4 lg:col-start-5",
      size: "small"
    },
    {
      asBottomSheet: !1,
      class: "md:max-lg:col-span-4 md:max-lg:col-start-3 lg:col-span-6 lg:col-start-4",
      size: "medium"
    },
    {
      asBottomSheet: !1,
      class: "md:max-lg:col-span-6 md:max-lg:col-start-2 lg:col-span-10 lg:col-start-2",
      size: "large"
    },
    {
      asBottomSheet: !0,
      class: "motion-safe:slide-in-from-bottom",
      isEntering: !0
    },
    {
      asBottomSheet: !0,
      class: "motion-safe:slide-out-to-bottom",
      isExiting: !0
    },
    {
      asBottomSheet: !1,
      class: [
        // Mobile bottom sheet
        "max-md:motion-safe:slide-in-from-bottom",
        // Tablet/Desktop Modal
        "md:motion-safe:zoom-in-95"
      ],
      isEntering: !0
    },
    {
      asBottomSheet: !1,
      class: [
        // Mobile bottom sheet
        "max-md:motion-safe:slide-out-to-bottom",
        // Tablet/Desktop Modal
        "md:motion-safe:zoom-out-95"
      ],
      isExiting: !0
    }
  ],
  variants: {
    asBottomSheet: {
      false: [
        "md:max-h-[calc(100vh_-_(4rem_*_2))] md:max-h-[calc(100dvh_-_(4rem_*_2))]",
        "md:place-self-center"
      ],
      true: [
        "max-h-[calc(100vh_-_0.625rem)] max-h-[calc(100dvh_-_0.625rem)] max-h-[calc(var(--vh)*100_-_0.625rem)]"
      ]
    },
    isEntering: {
      true: "motion-safe:animate-in motion-safe:ease-in motion-safe:duration-300"
    },
    isExiting: {
      true: "motion-safe:animate-out motion-safe:ease-out motion-safe:duration-300"
    },
    size: {
      large: "",
      medium: "",
      small: ""
    }
  }
});
H({
  base: ["relative flex flex-col outline-none text-start overflow-hidden"],
  variants: {
    asBottomSheet: {
      // max height and centering for desktop modal
      false: [
        "md:max-h-[calc(100vh_-_(4rem_*_2))] md:max-h-[calc(100dvh_-_(4rem_*_2))]"
      ],
      true: [
        // Dynamic max height for bottom sheet with fallbacks
        "max-h-[calc(100vh_-_0.625rem)] max-h-[calc(100dvh_-_0.625rem)]",
        // Ensure proper flex layout for bottom sheet
        "h-full"
      ]
    }
  }
});
H({
  base: "flex flex-col h-[100vh] h-[100dvh] h-[calc(var(--vh)*100)] min-h-[100vh] min-h-[100dvh] overscroll-none"
});
H({
  base: "flex-none h-[106px] pb-[env(safe-area-inset-bottom)]"
});
var sb = "motion-safe:animate-in motion-safe:fade-in motion-safe:duration-300 motion-safe:ease-out", cb = "motion-safe:animate-out motion-safe:fade-out motion-safe:duration-300 motion-safe:ease-in";
H({
  variants: {
    isEntering: {
      true: sb
    },
    isExiting: {
      true: cb
    }
  }
});
H({
  base: [
    // Position classes with improved coverage - use viewport units with extra coverage
    "fixed inset-0 w-[100vw] h-[100vh] min-h-[100vh] min-h-[100dvh]",
    // Backdrop and color - increased opacity to prevent transparency
    "bg-surface-overlay/40 z-[15]",
    // Prevent any scroll bounce or overscroll that might show background
    "overscroll-none overflow-hidden"
  ],
  compoundVariants: [
    {
      class: sb,
      classNameIsFunction: !1,
      isEntering: !0
    },
    {
      class: cb,
      classNameIsFunction: !1,
      isExiting: !0
    }
  ],
  variants: {
    classNameIsFunction: {
      false: ""
    },
    isEntering: {
      true: ""
    },
    isExiting: {
      true: ""
    }
  }
});
H({
  base: "text-content-neutral-bold flex-1 m-0"
});
H({
  base: [
    // Flex styles
    "flex flex-col items-stretch",
    // Border styles
    "border-solid border-t-0 border-x-0 border-b-neutral-minimal border-b-[1px]",
    /* Bottom Sheet */
    "gap-0 p-4"
  ],
  variants: {
    asBottomSheet: {
      /* Desktop Modal */
      false: "md:gap-2 md:p-8"
    }
  }
});
H({
  base: "grid gap-2 items-center text-content-neutral-bold",
  compoundVariants: [
    {
      className: "grid-areas-[label_bar_percent] grid-cols-[auto_1fr_auto]",
      labelHidden: !1,
      orientation: "horizontal"
    },
    {
      className: "grid-areas-[bar]",
      labelHidden: !0,
      orientation: "horizontal"
    },
    {
      className: "grid-areas-[label_percent,_bar_bar] items-baseline",
      labelHidden: !1,
      orientation: "vertical"
    },
    {
      className: "grid-areas-[bar]",
      labelHidden: !0,
      orientation: "vertical"
    }
  ],
  variants: {
    labelHidden: {
      false: "",
      true: ""
    },
    orientation: {
      horizontal: "",
      vertical: ""
    }
  }
});
H({
  base: "bg-surface-highlight-bold h-full transition-all duration-300 ease-in-out rounded-full motion-reduce:transition-none"
});
H({
  base: "justify-self-end grid-in-[percent] text-content-neutral-bold"
});
H({
  base: "justify-self-end grid-in-[percent] text-content-neutral-subtle",
  variants: {
    size: {
      large: "text-size-lg-heading-medium",
      medium: "text-size-lg-heading-medium",
      small: "text-size-body-large",
      "x-small": "text-size-body-medium"
    }
  }
});
H({
  base: "stroke-[var(--border-neutral-subtle-color)]"
});
H({
  base: "rotate-[-90deg] origin-center transition-[stroke-dashoffset] duration-500 ease-in-out motion-reduce:transition-none",
  variants: {
    // TODO: update variable names once PDS-938 is resolved and revisit when we have chart-specific tokens
    level: {
      good: "stroke-[var(--border-positive-color)]",
      great: "stroke-[var(--surface-highlight-bold-color)]",
      okay: "stroke-[var(--border-warning-color)]",
      poor: "stroke-[var(--border-negative-color)]"
    }
  }
});
H({
  base: "w-full absolute text-center flex flex-col items-center justify-center",
  variants: {
    size: {
      large: "",
      medium: "",
      small: "",
      "x-small": ""
    }
  }
});
H({
  base: "text-content-neutral-bold font-bold font-heading",
  compoundVariants: [
    {
      class: "text-size-lg-heading-medium",
      showPercentage: !0,
      size: "large"
    }
  ],
  variants: {
    showPercentage: {
      false: "",
      true: ""
    },
    size: {
      large: "text-size-lg-heading-large leading-[40px]",
      medium: "text-size-xs-heading-large leading-[28px]",
      small: "text-size-body-medium",
      "x-small": "text-size-body-medium"
    }
  }
});
H({
  base: "relative text-content-neutral-bold font-body",
  variants: {
    size: {
      large: "text-size-body-x-small",
      medium: "text-size-body-x-small",
      small: "hidden",
      "x-small": "hidden"
    }
  }
});
H({
  base: "text-content-neutral-subtle",
  variants: {
    size: {
      large: "text-size-lg-heading-medium",
      medium: "text-size-lg-heading-medium",
      small: "text-size-body-large",
      "x-small": "text-size-body-medium"
    }
  }
});
var $o = ({
  "aria-label": e,
  children: r,
  className: n,
  emphasis: i,
  equalWidth: l,
  leadingIcon: c,
  selected: u,
  size: d,
  trailingIcon: h,
  ...p
}) => {
  const b = S.useRef(null), v = i === "bold" || u ? "bold" : "normal", g = r === void 0;
  S.useEffect(() => {
    g && ((e === void 0 || e === "") && fa(
      "A SegmentedControlOption without text content should have an non-empty aria-label prop"
    ), c || fa(
      "A SegmentedControlOption needs to have text content or a `leadingIcon` with aria-label"
    ), h && fa(
      "A SegmentedControlOption without text content won't render a `trailingIcon`"
    ));
  }, [g, e, c, h]);
  const w = { size: d }, k = d === "x-small", y = d === "small", F = d === "medium" || d === "large", D = k || y, W = !p.disabled && !u;
  return /* @__PURE__ */ S.createElement(
    _3,
    {
      "aria-label": e,
      className: ct(
        {
          /* TODO: Refactor this to use tailwind-variants once the conditional logic can be simplified. */
          // Static classes
          "@paloma-sc-option rounded-full z-10 p-2 cursor-pointer outline-none text-content-neutral-regular transition-colors duration-500 motion-reduce:transition-none focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-interactive-highlight focus-visible:outline-[3px]": !0,
          "focus-visible:outline-offset-[1px]": D,
          // Interaction states
          "hover:bg-content-neutral-regular/[0.08] active:bg-content-neutral-regular/[0.12] hover:active:bg-content-neutral-regular/[0.12]": W,
          "min-w-0": l
        },
        // Size
        g && {
          "@paloma-sc-option-empty": !0,
          "py-2 px-2": k,
          "py-3 px-3": y,
          "py-4 px-4": F
        },
        !g && {
          "@paloma-sc-option-not-empty": !0,
          "py-2 px-3": k,
          "py-3 px-4": y,
          "py-4 px-5": F
        },
        n
      ),
      "data-is-medium-or-large": F,
      "data-is-selectable": W,
      "data-is-x-small-or-small": D,
      isDisabled: p.disabled,
      ...p,
      ref: b
    },
    /* @__PURE__ */ S.createElement(
      "div",
      {
        className: ct({
          /* TODO: Refactor this to use tailwind-variants once the conditional logic can be simplified. */
          "@paloma-sc-option-content flex flex-row flex-nowrap items-center justify-center w-full data-[selected=true]:data-[emphasis=bold]:text-content-inverse-bold data-[selected=true]:data-[emphasis=regular]:text-content-neutral-bold": !0,
          // Size
          "focus-visible:outline-offset-[1px]": y,
          "gap-1": D,
          "gap-2": F,
          "min-w-0": l
        }),
        "data-emphasis": i,
        "data-selected": u,
        "data-testid": "@paloma-sc-option-content-id"
      },
      kt(w, c),
      !g && /* @__PURE__ */ S.createElement("div", { className: "relative min-w-0 text-center" }, /* @__PURE__ */ S.createElement(
        ut,
        {
          "aria-hidden": "true",
          as: "div",
          "before-content": r,
          className: ct({
            /* TODO: Refactor this to use tailwind-variants once the conditional logic can be simplified. */
            "@paloma-sc-option-hidden-label break-keep whitespace-nowrap opacity-0 w-full": !0,
            "truncate ": l
          }),
          "data-testid": "@paloma-sc-option-hidden-label-id",
          fontWeight: "bold",
          size: d
        },
        r
      ), /* @__PURE__ */ S.createElement(
        ut,
        {
          as: "div",
          "before-content": r,
          className: ct(
            /* TODO: Refactor this to use tailwind-variants once the conditional logic can be simplified. */
            "@paloma-sc-option-label break-keep whitespace-nowrap absolute top-0 w-full transition-[color,font-weight] duration-150 motion-reduce:transition-none",
            {
              "truncate ": l
            }
          ),
          "data-testid": "@paloma-sc-option-label-id",
          fontWeight: v,
          size: d
        },
        r
      )),
      !g && kt(w, h)
    )
  );
}, ub = S.forwardRef(
  ({
    children: e,
    className: r,
    emphasis: n,
    equalWidth: i,
    isOverScrolled: l,
    selectedOptionId: c,
    size: u,
    ...d
  }, h) => {
    S.useEffect(() => {
      Uv(
        e,
        "SegmentedControlOptionList must have children"
      ), pt(
        S.Children.toArray(e).every(
          (y) => va(y, $o)
        ),
        "All of the children of `SegmentedControlOptionList` should be `SegmentedControlOption`"
      );
      const w = S.Children.map(
        e,
        (y) => y.props.selected
      );
      pt(
        w.length === 0,
        "Options inside a SegmentedControl should not have a `selected` prop. SegmentedControl will override them. Either use the `value` or `defaultValue` props of SegmentedControl."
      );
      const k = S.Children.map(
        e,
        (y) => y.props.id
      );
      pt(
        new Set(k).size === k.length,
        "All ids on the Options of a SegmentedControlOptionList must be unique"
      );
    }, [e]);
    const p = u === "small" || u === "x-small", b = u === "medium" || u === "large", v = S.Children.toArray(
      e
    )[0], g = c ?? v?.props.id;
    return /* @__PURE__ */ S.createElement(
      k3,
      {
        ...d,
        className: ct(
          {
            /* TODO: Refactor this to use tailwind-variants once the conditional logic can be simplified. */
            "@paloma-scol flex flex-row rounded-full max-w-full w-fit": !0,
            // Size
            "gap-1": p,
            "gap-2": b,
            // Equal Width
            "w-full justify-stretch": i
          },
          r
        ),
        "data-large-gap": Re(b),
        "data-small-gap": Re(p),
        ref: h
      },
      S.Children.map(
        e,
        (w) => va(
          w,
          $o,
          (k, y) => {
            const { className: C, id: I, ...F } = y;
            return S.cloneElement(k, {
              className: ct(
                { "w-full justify-start": i },
                C
              ),
              emphasis: n,
              equalWidth: i,
              id: I,
              selected: I === g,
              size: u,
              ...F
            });
          }
        )
      ),
      l && /* @__PURE__ */ S.createElement(
        $o,
        {
          "aria-hidden": "true",
          className: "p-[1px]",
          "data-paloma-overflow-spacer": "",
          "data-testid": "@paloma-scol-hidden-option-id",
          disabled: !0,
          id: `id-${S.Children.toArray(e).length + 1}`
        },
        /* @__PURE__ */ S.createElement("div", null)
      )
    );
  }
), P6 = H({
  base: "rounded [[tabindex='0']&:focus-visible]:outline [[tabindex='0']&:focus-visible]:outline-2 [[tabindex='0']&:focus-visible]:outline-offset-2 [[tabindex='0']&:focus-visible]:outline-interactive-highlight"
}), F6 = S.forwardRef(
  ({ className: e, isActive: r, ...n }, i) => /* @__PURE__ */ S.createElement(
    E3,
    {
      ...n,
      className: ct(
        /* TODO: Refactor this to use tailwind-variants once the conditional logic can be simplified. */
        "@paloma-segmented-control-panel",
        P6(),
        e
      ),
      ref: i,
      shouldForceMount: !0,
      style: { display: r ? "block" : "none" }
    }
  )
), z6 = H({
  compoundVariants: [
    {
      class: "mb-[52px] -mt-[52px]",
      size: "small",
      sticky: !0
    },
    {
      class: "mb-[72px] -mt-[72px]",
      size: "medium",
      sticky: !0
    },
    {
      class: "mb-10 -mt-10",
      size: "x-small",
      sticky: !0
    },
    {
      class: "mb-20 -mt-20",
      size: "large",
      sticky: !0
    }
  ],
  variants: {
    size: {
      large: "",
      medium: "",
      small: "",
      "x-small": ""
    },
    sticky: { true: "pb-4" }
  }
}), T6 = H({
  base: "[[tabindex='0']&:focus-visible]:outline [[tabindex='0']&:focus-visible]:outline-2 [[tabindex='0']&:focus-visible]:outline-offset-2 [[tabindex='0']&:focus-visible]:outline-interactive-highlight"
});
function db(e, r, n) {
  const i = r.getBoundingClientRect(), l = e.getBoundingClientRect(), c = Math.floor(i.left), u = Math.floor(l.left), d = Math.floor(i.right), h = Math.floor(l.right), p = c - u + n, b = h - d + n, v = Math.floor(i.width);
  return {
    left: p,
    right: b,
    visibility: "initial",
    width: v
  };
}
function N6({
  activeTab: e,
  listContainerEl: r,
  relativeContainerEl: n
}) {
  if (!e.isConnected || !r.isConnected || !n.isConnected || !n.scrollTo)
    return;
  const i = n.style.padding, l = G0(i) ?? 0, c = db(r, e, l), u = n.scrollLeft, h = Number(c.left) + Number(c.width) - n.clientWidth, p = Number(c.left ?? 0), b = h >= u, v = u >= p;
  if (!b && !v)
    return;
  const g = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";
  b && n.scrollTo({
    behavior: g,
    left: h + 8
  }), v && n.scrollTo({
    behavior: g,
    left: p - 8
  });
}
var A6 = (e) => Array.from(
  e.querySelectorAll("[role=tab]")
).filter((r) => r.parentElement === e && r.isConnected), I6 = ({
  children: e,
  className: r,
  containerClassName: n,
  defaultValue: i,
  disabled: l,
  emphasis: c = "regular",
  equalWidth: u,
  onChange: d,
  size: h = "medium",
  sticky: p,
  value: b,
  ...v
}) => {
  const g = h === "small" || h === "x-small", w = h === "medium" || h === "large", k = c === "bold", y = c === "regular", C = b !== void 0, [I, F] = S.useState({
    left: 0,
    right: 0,
    width: 0
  }), [D, W] = S.useState(!1), re = _.useRef(null), ee = _.useRef(null), ne = (K, R) => K.length === R.length && K.every((L, N) => L === R[N]);
  S.useEffect(() => {
    const [K, ...R] = S.Children.toArray(e), N = S.Children.toArray(
      K?.props?.children
    ).map((P) => P.props.id);
    pt(
      !b || N.includes(b),
      `There's no Option with the id ${b}`
    ), pt(
      !i || N.includes(i),
      `There's no Option with the id ${i}`
    );
    const U = R.map((P) => P.props.id);
    pt(
      U.length === 0 || ne(U, N),
      "The ids on the SegmentedControlOptions and the ids on the SegmentedControlPanels do not match"
    );
  }, [b, e, i]);
  const [ue, ie] = V8({
    controlledValue: b,
    defaultValue: i
  }), ve = S.useCallback(() => {
    const K = re.current, R = ee.current;
    if (!K || !R || !K.isConnected || !R.isConnected)
      return W(!1), !1;
    const L = R.querySelector(
      "[data-paloma-overflow-spacer]"
    ), N = L instanceof HTMLElement ? L.offsetWidth : 0, U = R.scrollWidth - N > R.clientWidth;
    return W(U), U;
  }, []), se = S.useCallback(() => {
    const K = re.current, R = ee.current;
    if (!K || !R || !K.isConnected || !R.isConnected)
      return null;
    const L = A6(K).find(
      (N) => N.dataset.selected === "true"
    );
    return L ? {
      activeTab: L,
      listContainerEl: K,
      relativeContainerEl: R
    } : null;
  }, []), j = S.useCallback(
    (K) => {
      const R = K ?? se();
      if (!R)
        return;
      const { activeTab: L, listContainerEl: N, relativeContainerEl: U } = R, P = U.style.padding, B = G0(P) ?? 0, me = db(N, L, B);
      F((pe) => ({
        ...pe,
        ...me
      }));
    },
    [se]
  ), q = S.useCallback(
    (K) => {
      const R = K ?? se();
      if (!R)
        return;
      const { activeTab: L, listContainerEl: N, relativeContainerEl: U } = R;
      N6({ activeTab: L, listContainerEl: N, relativeContainerEl: U });
    },
    [se]
  ), z = S.useCallback(() => {
    ve();
    const K = se();
    return K ? (j(K), q(K), !0) : !1;
  }, [
    se,
    q,
    ve,
    j
  ]);
  U0(() => {
    j(), q();
  }, [
    h,
    c,
    u,
    ue,
    j,
    q
  ]), S.useEffect(() => {
    let K = !1, R = null;
    const L = (N) => {
      R = requestAnimationFrame(() => {
        if (K)
          return;
        !z() && N > 1 && L(N - 1);
      });
    };
    return L(2), () => {
      K = !0, R !== null && cancelAnimationFrame(R);
    };
  }, [h, c, u, ue, z]), S.useEffect(() => {
    window.addEventListener("resize", z, R6);
    const K = new MutationObserver(z);
    return K.observe(document.documentElement, {
      attributeFilter: ["dir"],
      attributes: !0
    }), () => {
      window.removeEventListener("resize", z), K.disconnect();
    };
  }, [z]);
  const Y = S.useCallback(
    (K) => {
      ie?.(K), d?.(K);
    },
    [d, ie]
  );
  return /* @__PURE__ */ S.createElement(
    w3,
    {
      className: ct(
        /* TODO: Refactor this to use tailwind-variants once the conditional logic can be simplified. */
        "@paloma-segmented-control flex flex-col w-full",
        { "gap-8": !p },
        r
      ),
      "data-is-bold-emphasis": Re(k),
      "data-is-controlled": Re(C),
      "data-is-medium-or-large": Re(w),
      "data-is-regular-emphasis": Re(y),
      "data-is-x-small-or-small": Re(g),
      defaultSelectedKey: C ? void 0 : ue,
      isDisabled: l,
      onSelectionChange: Y,
      selectedKey: C ? ue : void 0,
      ...v
    },
    /* @__PURE__ */ S.createElement(
      "div",
      {
        className: ct(
          {
            /* TODO: Refactor this to use tailwind-variants once the conditional logic can be simplified. */
            "@paloma-sc-relative-container relative rounded-full max-w-full overflow-x-auto w-fit mx-auto box-border": !0,
            // Emphasis
            "bg-surface-level-02": y,
            "bg-surface-level-03": k,
            // Disabled
            "opacity-40": l,
            // Sticky styles
            "sticky top-[90vh] z-10 backdrop-blur-surface mx-auto": !!p
          },
          T6(),
          n
        ),
        "data-testid": Re("@paloma-sc-relative-container-id"),
        ref: ee,
        style: {
          /* Added as styles instead of classes for the reposition function
            (and tests) to be able to read the padding and compensate */
          padding: g ? 4 : 8,
          scrollbarWidth: "none"
        },
        tabIndex: 0
      },
      S.Children.map(
        e,
        (K) => va(
          K,
          ub,
          (R) => S.cloneElement(R, {
            disabled: l,
            emphasis: c,
            equalWidth: u,
            isOverScrolled: D,
            ref: re,
            selectedOptionId: ue,
            size: h,
            sticky: p
          })
        )
      ),
      /* @__PURE__ */ S.createElement(
        "div",
        {
          className: ct({
            /* TODO: Refactor this to use tailwind-variants once the conditional logic can be simplified. */
            "@paloma-sc-animated-bg absolute left-0 rounded-full transition-all motion-reduce:transition-none box-border invisible": !0,
            // Emphasis
            "bg-interactive-neutral-bold": k,
            "bg-interactive-neutral-minimal border-2 border-solid border-neutral-subtle": y,
            // Size
            "top-1 bottom-1": g,
            "top-2 bottom-2": w
          }),
          "data-testid": Re("@paloma-sc-animated-bg-id"),
          style: I
        }
      )
    ),
    /* @__PURE__ */ S.createElement("div", { className: z6({ size: h, sticky: p }) }, S.Children.map(e, (K) => {
      if (!S.isValidElement(K))
        return null;
      if (va(K, F6))
        return S.cloneElement(K, {
          ...K.props,
          isActive: K.props.id === ue
        });
    }))
  );
}, R6 = { passive: !0 }, Wd = "absolute rounded-full border-transparent border-[3px] border-solid pointer-events-none", Gd = "absolute opacity-40 pointer-events-none", Yd = {
  large: "w-[68px] h-[68px] lg:w-[132px] lg:h-[132px]",
  medium: "w-[62px] h-[62px]"
}, qd = {
  large: "w-[72px] h-[72px] lg:w-52 lg:h-52 blur lg:blur-[30px] blur-[10px]",
  medium: "w-[70px] h-[70px] blur-[10px]"
}, Qd = "radial-gradient(circle at center, transparent 67.5%, black 68%)", L6 = "conic-gradient(from 30deg at 50% 50%, rgb(232, 0, 140) 10deg, rgba(241, 77, 86, 0) 60.159deg, rgba(110, 102, 177, 0) 313.812deg, rgba(159, 61, 162, 0) 318.778deg, rgba(222, 9, 143, 0.86) 351.822deg) border-box", M6 = "conic-gradient(from 0deg at 50% 50%, rgba(116, 196, 115, 0) 252.06deg, rgb(0, 194, 211) 296.449deg, rgba(110, 102, 177, 0) 313.812deg, rgba(159, 61, 162, 0) 318.778deg) border-box", j6 = "conic-gradient(from 0deg at 50% 50%, rgba(241, 77, 86, 0) 104.159deg, rgba(245, 113, 60, 0.09) 116.303deg, rgb(255, 199, 0) 188.979deg, rgba(177, 197, 64, 0.04) 242.188deg, rgba(116, 196, 115, 0) 252.06deg) border-box", D6 = "conic-gradient(from 0deg at 47.15% 49.87%, rgb(232, 0, 140) 31.2207deg, rgba(241, 77, 86, 0) 104.159deg, rgba(110, 102, 177, 0) 313.812deg, rgba(159, 61, 162, 0) 318.778deg, rgba(222, 9, 143, 0.86) 351.822deg)", K6 = "conic-gradient(from 0deg at 47.15% 49.87%, rgba(116, 196, 115, 0) 252.06deg, rgb(0, 194, 211) 296.449deg, rgba(110, 102, 177, 0) 313.812deg, rgba(159, 61, 162, 0) 318.778deg)", O6 = "conic-gradient(from 0deg at 47.15% 49.87%, rgba(241, 77, 86, 0) 104.159deg, rgba(245, 113, 60, 0.09) 116.303deg, rgb(255, 199, 0) 188.979deg, rgba(177, 197, 64, 0.04) 242.188deg, rgba(116, 196, 115, 0) 252.06deg)", V6 = ({ className: e, onTransitionEnd: r, size: n }) => /* @__PURE__ */ S.createElement(
  "div",
  {
    className: ct(Wd, e, Yd[n]),
    "data-testid": Re("@paloma-snazatar-assets-pink-ring"),
    onTransitionEnd: r,
    style: {
      background: L6,
      mask: Qd
    }
  }
), B6 = ({ className: e, size: r }) => /* @__PURE__ */ S.createElement(
  "div",
  {
    className: ct(Wd, e, Yd[r]),
    "data-testid": Re("@paloma-snazatar-assets-blue-ring"),
    style: {
      background: M6,
      mask: Qd
    }
  }
), H6 = ({ className: e, size: r }) => /* @__PURE__ */ S.createElement(
  "div",
  {
    className: ct(Wd, e, Yd[r]),
    "data-testid": Re("@paloma-snazatar-assets-yellow-ring"),
    style: {
      background: j6,
      mask: Qd
    }
  }
), U6 = ({ className: e, size: r }) => /* @__PURE__ */ S.createElement(
  "div",
  {
    className: ct(Gd, e, qd[r]),
    "data-testid": Re("@paloma-snazatar-assets-pink-glow"),
    style: {
      background: D6,
      backgroundOrigin: "border-box"
    }
  }
), W6 = ({ className: e, size: r }) => /* @__PURE__ */ S.createElement(
  "div",
  {
    className: ct(Gd, e, qd[r]),
    "data-testid": Re("@paloma-snazatar-assets-blue-glow"),
    style: {
      background: K6,
      backgroundOrigin: "border-box"
    }
  }
), G6 = ({ className: e, size: r }) => /* @__PURE__ */ S.createElement(
  "div",
  {
    className: ct(Gd, e, qd[r]),
    "data-testid": Re("@paloma-snazatar-assets-yellow-glow"),
    style: {
      background: O6,
      backgroundOrigin: "border-box"
    }
  }
), fb = "[transition-duration:2s] [transition-timing-function:cubic-bezier(0.8, 0, 0.24, 1)] delay-500", Y6 = H({
  compoundSlots: [
    {
      class: "[transition-property:transform] motion-reduce:transition-none",
      slots: [
        "pinkGlowStyles",
        "pinkRingStyles",
        "blueGlowStyles",
        "blueRingStyles",
        "yellowGlowStyles",
        "yellowRingStyles"
      ]
    },
    {
      class: fb,
      fadeIn: !0,
      slots: [
        "pinkGlowStyles",
        "pinkRingStyles",
        "blueGlowStyles",
        "blueRingStyles",
        "yellowGlowStyles",
        "yellowRingStyles"
      ]
    },
    {
      class: "[transition-duration:6s] [transition-timing-function:cubic-bezier(0.5, 0, 0, 1)]",
      fadeIn: !1,
      slots: [
        "pinkGlowStyles",
        "pinkRingStyles",
        "blueGlowStyles",
        "blueRingStyles",
        "yellowGlowStyles",
        "yellowRingStyles"
      ]
    }
  ],
  slots: {
    blueGlowStyles: "",
    blueRingStyles: "",
    pinkGlowStyles: "",
    pinkRingStyles: "",
    yellowGlowStyles: "",
    yellowRingStyles: ""
  },
  variants: {
    animationStep: {
      0: {
        blueGlowStyles: "scale-75",
        blueRingStyles: "rotate-180",
        pinkGlowStyles: "scale-75",
        pinkRingStyles: "-rotate-180",
        yellowGlowStyles: "scale-75",
        yellowRingStyles: "rotate-[200deg]"
      },
      1: {
        blueGlowStyles: "scale-100 translate-x-0 translate-y-0",
        blueRingStyles: "rotate-0",
        pinkGlowStyles: "scale-100 translate-x-0 translate-y-0",
        pinkRingStyles: "rotate-0",
        yellowGlowStyles: "scale-100 translate-x-0 translate-y-0",
        yellowRingStyles: "rotate-0"
      },
      2: {
        blueGlowStyles: "translate-x-1/2 translate-y-1/2",
        blueRingStyles: "rotate-[-260deg]",
        pinkGlowStyles: "-translate-x-1/4 translate-y-1/2",
        pinkRingStyles: "rotate-[80deg]",
        yellowGlowStyles: "translate-x-[20%] -translate-y-1/2",
        yellowRingStyles: "rotate-45"
      },
      3: {
        blueGlowStyles: "translate-x-[10%] translate-y-[40%]",
        blueRingStyles: "rotate-[-200deg]",
        pinkGlowStyles: "translate-x-[10%] translate-y-1/2",
        pinkRingStyles: "rotate-[-100deg]",
        yellowGlowStyles: "translate-x-[15%] -translate-y-[45%]",
        yellowRingStyles: "rotate-[80deg]"
      }
    },
    fadeIn: {
      true: {
        blueGlowStyles: "",
        blueRingStyles: "",
        pinkGlowStyles: "",
        pinkRingStyles: "",
        yellowGlowStyles: "",
        yellowRingStyles: ""
      }
    }
  }
}), q6 = H({
  base: "relative",
  variants: {
    size: {
      large: "lg:w-32 lg:h-32 w-16 h-16",
      medium: "w-[58px] h-[58px]"
    }
  }
}), Q6 = H({
  base: [
    "w-full h-full flex justify-center items-center opacity-0",
    fb,
    "motion-reduce:transition-none"
  ],
  variants: {
    animationStep: {
      0: "",
      1: "opacity-100",
      2: "opacity-100",
      3: "opacity-100"
    }
  }
}), X6 = H({
  variants: {
    size: {
      large: "lg:w-16 lg:h-16 lg:[&>svg]:w-16 lg:[&>svg]:h-16",
      medium: ""
    }
  }
});
S.forwardRef(
  ({
    "aria-label": e,
    className: r,
    editable: n,
    imageSrc: i,
    onEdit: l,
    size: c = "large",
    ...u
  }, d) => {
    const [h, p] = _.useState(!1), [b, v] = _.useState(0), [g, w] = _.useState(!0);
    _.useEffect(() => {
      p(!1), v(1);
    }, [i]);
    const k = () => {
      w(!1), v(b === 3 ? 1 : b + 1);
    }, y = !!i?.length && !h, {
      blueGlowStyles: C,
      blueRingStyles: I,
      pinkGlowStyles: F,
      pinkRingStyles: D,
      yellowGlowStyles: W,
      yellowRingStyles: re
    } = Y6({
      animationStep: b,
      fadeIn: g
    }), [ee] = O8(), ne = _.useRef(null);
    return _.useImperativeHandle(d, () => ne.current), /* @__PURE__ */ S.createElement("div", { className: q6({ class: r, size: c }), ...u }, y && /* @__PURE__ */ S.createElement("div", { className: Q6({ animationStep: b }) }, /* @__PURE__ */ S.createElement(U6, { className: F(), size: c }), /* @__PURE__ */ S.createElement(W6, { className: C(), size: c }), /* @__PURE__ */ S.createElement(G6, { className: W(), size: c }), /* @__PURE__ */ S.createElement(
      V6,
      {
        className: D(),
        onTransitionEnd: k,
        size: c
      }
    ), /* @__PURE__ */ S.createElement(B6, { className: I(), size: c }), /* @__PURE__ */ S.createElement(H6, { className: re(), size: c })), y ? /* @__PURE__ */ S.createElement(
      "img",
      {
        alt: e,
        "aria-label": e,
        className: "object-cover h-full w-full rounded-full absolute top-0 left-0",
        onError: () => p(!0),
        src: i
      }
    ) : /* @__PURE__ */ S.createElement(
      "div",
      {
        className: "bg-surface-level-03 w-full h-full rounded-full flex justify-center items-center",
        "data-testid": Re("@paloma-snazatar-icon-id")
      },
      /* @__PURE__ */ S.createElement(
        Qv,
        {
          "aria-label": "profile picture placeholder",
          className: X6({ size: c }),
          size: "large"
        }
      )
    ), n && c === "large" && /* @__PURE__ */ S.createElement(
      "div",
      {
        className: "absolute -bottom-[6px] w-[73px] lg:w-[138px] flex justify-end",
        ref: ne
      },
      /* @__PURE__ */ S.createElement(
        Bd,
        {
          "aria-label": "edit button",
          className: "bg-content-inverse-bold flex w-8 h-8 lg:w-11 lg:h-11",
          iconOnly: !0,
          leadingIcon: /* @__PURE__ */ S.createElement(y5, null),
          onClick: l,
          size: ee === "lg" ? "small" : "x-small",
          variant: "inverse"
        }
      )
    ));
  }
);
var pb = ({ children: e }) => e, Tg = "text-content-neutral-bold backdrop-blur-surface", hb = H({
  base: "absolute inset-0 border-solid border-2 border-base pointer-events-none",
  compoundVariants: [
    { class: "rounded-lg", shape: "square", size: ["medium", "small"] },
    { class: "rounded", shape: "square", size: "x-small" }
  ],
  variants: {
    shape: {
      circle: "rounded-full",
      square: ""
    },
    size: {
      medium: "",
      small: "",
      "x-small": ""
    }
  }
}), mb = ({ children: e }) => e, Z6 = hb({ shape: "circle" }), Ng = {
  medium: 16,
  small: 12,
  "x-small": 8
}, Ag = (e, r, n, i) => S.isValidElement(e) && Kd(e) ? /* @__PURE__ */ S.createElement(S.Fragment, null, kt(
  {
    contained: !0,
    containerClassName: Tg,
    ...i !== void 0 && { shape: i },
    size: n
  },
  e
), /* @__PURE__ */ S.createElement("div", { className: Z6 })) : /* @__PURE__ */ S.createElement(S.Fragment, null, S.cloneElement(e, {
  className: Tg,
  size: n
}), /* @__PURE__ */ S.createElement("div", { className: r })), Xo = ({
  children: e,
  className: r,
  maxCount: n = 3,
  size: i = "medium",
  trailingShape: l = "circle",
  trailingSlotLabel: c = "Count",
  ...u
}) => {
  _.useEffect(() => {
    pt(
      n >= 1 && n <= 3,
      "maxCount must be between 1 and 3 (inclusive)"
    );
  }, [n]);
  const d = _.Children.toArray(e), h = vg(
    d,
    pb
  )?.props.children, p = vg(
    d,
    mb
  )?.props.children, b = _.Children.toArray(h), v = b.slice(0, n), g = _.Children.toArray(p)[0], w = b.length - n, k = b.length > n, y = hb({ shape: l, size: i });
  return /* @__PURE__ */ S.createElement("div", { className: r, ...u }, /* @__PURE__ */ S.createElement("div", { className: "flex" }, v.map((C, I) => /* @__PURE__ */ S.createElement(
    "div",
    {
      className: "relative",
      "data-testid": `@paloma-sg-element-container-id-${I}`,
      key: C.key,
      style: {
        marginInlineStart: I === 0 ? 0 : `-${Ng[i]}px`
      }
    },
    Ag(C, y, i)
  )), (!!g || k) && /* @__PURE__ */ S.createElement(
    "div",
    {
      className: "relative",
      "data-testid": "@paloma-sg-element-container-id-trailing",
      style: { marginInlineStart: `-${Ng[i]}px` }
    },
    g ? Ag(
      g,
      y,
      i,
      "circle"
    ) : /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(
      ls,
      {
        appearance: "neutral",
        "aria-label": c,
        "data-testid": "@paloma-stacked-group-trailing-id",
        emphasis: "regular",
        label: `+${w}`,
        shape: l,
        size: i
      }
    ), /* @__PURE__ */ S.createElement("div", { className: y }))
  )));
};
Xo.displayName = "StackedGroup";
Xo.Content = pb;
Xo.Content.displayName = "StackedContent.Content";
Xo.Trailing = mb;
Xo.Trailing.displayName = "StackedContent.Trailing";
var J6 = H({
  base: "flex flex-row items-center gap-4",
  variants: {
    isVertical: {
      false: "flex-col text-center",
      true: "my-4"
    }
  }
}), eS = H({
  base: "flex",
  variants: {
    isVertical: {
      false: "w-full",
      true: ""
    }
  }
}), tS = H({
  base: "mr-4 mt-4",
  variants: {
    isFirstStep: {
      false: "opacity-100",
      true: "opacity-0"
    }
  }
}), rS = H({
  base: "ml-4 mt-4",
  variants: {
    isLastStep: {
      false: "opacity-100",
      true: "opacity-0"
    }
  }
}), nS = "text-content-neutral-subtle", aS = H({
  base: "flex",
  variants: {
    isVertical: {
      false: "justify-center",
      true: ""
    }
  }
}), oS = H({
  base: "grid overflow-hidden transition-all duration-450 motion-reduce:transition-none",
  variants: {
    isContentShown: {
      false: "grid-rows-[0fr] opacity-0",
      true: "grid-rows-[1fr] opacity-100"
    },
    isVertical: {
      false: "",
      true: "ml-4"
    }
  }
}), iS = H({
  // Small padding to ensure content isn't cut off, such
  // as focus highlighting since the wrapper is overflow
  // hidden.
  base: "p-1 pt-4 flex flex-col",
  variants: {
    isVertical: {
      false: "justify-center text-center",
      true: ""
    }
  }
}), gb = ({
  active: e,
  children: r,
  dividerEmphasis: n,
  index: i = 0,
  isVertical: l,
  leadingIcon: c,
  preTitle: u,
  showAllHorizontalContent: d,
  stepLength: h = 0,
  title: p
}) => {
  const b = i + 1, v = !!e || !l && d;
  return /* @__PURE__ */ S.createElement("div", { className: "flex-grow" }, /* @__PURE__ */ S.createElement("div", { className: J6({ isVertical: l }) }, /* @__PURE__ */ S.createElement("div", { className: eS({ isVertical: l }) }, !l && /* @__PURE__ */ S.createElement(
    El,
    {
      className: tS({
        isFirstStep: i === 0
      }),
      "data-testid": "@paloma-stepper-step-left-divider-id",
      emphasis: n
    }
  ), /* @__PURE__ */ S.createElement(
    ls,
    {
      appearance: e ? "neutral-inverse" : "neutral",
      className: "flex-shrink-0",
      emphasis: e ? "highlight" : "neutral",
      icon: c,
      label: b.toString(),
      shape: "circle",
      size: "x-small"
    }
  ), !l && /* @__PURE__ */ S.createElement(
    El,
    {
      className: rS({
        isLastStep: i === h - 1
      }),
      "data-testid": "@paloma-stepper-step-right-divider-id",
      emphasis: n
    }
  )), /* @__PURE__ */ S.createElement("div", { className: "flex flex-col" }, ma(u, {
    className: nS,
    fontWeight: "bold",
    size: "x-small"
  }), /* @__PURE__ */ S.createElement(
    ut,
    {
      className: "text-content-neutral-bold",
      size: "large",
      variant: "body"
    },
    p
  ))), r && /* @__PURE__ */ S.createElement(
    "div",
    {
      className: aS({ isVertical: l }),
      "data-testid": "@paloma-stepper-step-content-id"
    },
    l && /* @__PURE__ */ S.createElement(
      El,
      {
        className: "ml-4",
        "data-testid": "@paloma-stepper-step-content-divider-id",
        emphasis: n,
        orientation: "vertical"
      }
    ),
    /* @__PURE__ */ S.createElement(
      "div",
      {
        className: oS({
          isContentShown: v,
          isVertical: l
        })
      },
      /* @__PURE__ */ S.createElement("div", { className: "overflow-hidden" }, /* @__PURE__ */ S.createElement("div", { className: iS({ isVertical: l }) }, r))
    )
  ));
}, lS = H({
  base: "flex",
  variants: {
    orientation: {
      horizontal: "",
      vertical: "flex-col"
    }
  }
}), sS = H({
  base: "flex",
  variants: {
    orientation: {
      horizontal: "flex-row flex-grow basis-[0%]",
      vertical: "flex-col"
    }
  }
}), cS = H({
  base: "h-10 px-4",
  variants: {
    lastItem: {
      false: "",
      true: "opacity-0"
    },
    orientation: {
      horizontal: "mt-4 basis-[0%]",
      vertical: "ml-4"
    }
  }
}), Xd = ({
  children: e,
  className: r,
  currentStep: n = 0,
  orientation: i = "horizontal",
  showAllHorizontalContent: l
}) => {
  const c = _.Children.toArray(e).length, u = "minimal", d = Math.min(Math.max(n, 0), c - 1);
  return /* @__PURE__ */ S.createElement("div", { className: lS({ class: r, orientation: i }) }, W0(e, gb, (h, p) => /* @__PURE__ */ S.createElement("div", { className: sS({ orientation: i }), key: p }, S.cloneElement(h, {
    active: p === d,
    dividerEmphasis: u,
    index: p,
    isVertical: i === "vertical",
    showAllHorizontalContent: l,
    stepLength: c
  }), /* @__PURE__ */ S.createElement(
    El,
    {
      className: cS({
        lastItem: p === c - 1,
        orientation: i
      }),
      emphasis: u,
      orientation: i
    }
  ))));
};
Xd.displayName = "Stepper";
Xd.Step = gb;
Xd.Step.displayName = "Stepper.Step";
var uS = H({
  base: [
    /* Text styles */
    "text-content-neutral-regular no-underline",
    /* Border styles */
    "border-solid box-border",
    "border-b-0 border-s-0 border-e-0 border-t-0",
    "flex flex-row items-center py-4"
  ],
  compoundVariants: [
    /* Orientation + isEmpty */
    {
      class: "w-fit",
      isEmpty: !0,
      orientation: "vertical"
    },
    {
      class: "w-full",
      isEmpty: !1,
      orientation: "vertical"
    },
    /* Orientation + selected */
    {
      class: "border-b-[1px] border-b-neutral-subtle",
      orientation: "vertical",
      selected: !1
    },
    {
      class: "border-s-[1px] border-s-neutral-bold bg-surface-level-03 text-content-neutral-bold",
      orientation: "vertical",
      selected: !0
    },
    {
      class: "border-b-2 border-b-neutral-bold text-content-neutral-bold",
      orientation: "horizontal",
      selected: !0
    },
    // Sizing + Orientation
    {
      class: "px-4",
      orientation: "vertical",
      size: "small"
    },
    {
      class: "px-5",
      orientation: "vertical",
      size: ["medium", "large"]
    }
  ],
  variants: {
    disabled: {
      false: [
        "hover:bg-content-neutral-bold/[0.08]",
        "active:bg-content-neutral-bold/[0.12]",
        "hover:active:bg-content-neutral-bold/[0.12]"
      ],
      true: "pointer-events-none opacity-30"
    },
    isButton: {
      true: "bg-transparent"
    },
    isEmpty: {
      true: ""
    },
    orientation: {
      horizontal: "w-fit",
      vertical: "min-w-fit"
    },
    selected: {
      true: ""
    },
    size: {
      large: "py-4 gap-2",
      medium: "py-4 gap-2",
      small: "py-3 gap-1"
    }
  }
});
_.forwardRef(
  ({
    active: e = !1,
    "aria-label": r,
    as: n,
    children: i,
    className: l,
    disabled: c = !1,
    href: u,
    leadingIcon: d,
    orientation: h = "vertical",
    size: p = "medium",
    trailingIcon: b,
    ...v
  }, g) => {
    const w = i === void 0, k = n ?? "a", y = n === "button";
    _.useEffect(() => {
      w && (pt(
        r !== void 0 && r.length > 0,
        "A TabItem without text content should have an non-empty aria-label prop"
      ), Uv(d, "An empty TabItem needs a leadingIcon"), pt(!b, "An empty TabItem can't have a trailingIcon"));
    }, [w, r, d, b]);
    const C = h === "horizontal" && e ? "bold" : "normal";
    return /* @__PURE__ */ S.createElement(Rr, { disabled: c, focusRingClass: "rounded-sm" }, /* @__PURE__ */ S.createElement(
      k,
      {
        "aria-current": k === "a" && e ? "page" : void 0,
        "aria-disabled": c,
        "aria-label": r,
        className: uS({
          class: l,
          disabled: c,
          isButton: y,
          isEmpty: w,
          orientation: h,
          selected: e,
          size: p
        }),
        href: u,
        tabIndex: c ? -1 : void 0,
        ...v,
        ref: g
      },
      kt(
        {
          className: "@paloma-tab-item-leading-icon text-content-neutral-bold",
          size: p
        },
        d
      ),
      ma(i, {
        fontWeight: C,
        size: p,
        variant: "body"
      }),
      kt(
        {
          className: "@paloma-tab-item-trailing-icon text-content-neutral-bold flex-grow justify-end",
          size: p
        },
        b
      )
    ));
  }
);
H({
  base: "flex list-none m-0 p-0",
  compoundVariants: [
    {
      class: "gap-4",
      orientation: "horizontal",
      size: "small"
    },
    {
      class: "gap-5",
      orientation: "horizontal",
      size: "medium"
    },
    {
      class: "gap-6",
      orientation: "horizontal",
      size: "large"
    }
  ],
  variants: {
    equalWidthTabs: {
      true: "w-full justify-stretch [&>li]:flex-1"
    },
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col"
    },
    size: {
      large: "",
      medium: "",
      small: ""
    }
  }
});
H({
  variants: {
    equalWidthTabs: {
      true: "w-full justify-center"
    }
  }
});
var dS = H({
  base: [
    "rounded-2xl bg-surface-level-01 backdrop-blur-surface",
    "border border-neutral-subtle border-solid",
    "flex flex-col box-content",
    "text-start text-content-neutral-bold",
    "backdrop-blur-surface"
  ],
  variants: {
    active: {
      true: "bg-surface-level-03"
    },
    disabled: {
      true: "opacity-30 pointer-events-none"
    },
    hasOnClick: {
      true: "hover:bg-surface-level-02 active:!bg-surface-level-03 cursor-pointer outline-none"
    },
    size: {
      large: "p-5 w-40",
      medium: "p-3 w-[136px]"
    }
  }
}), fS = H({
  base: "flex flex-row justify-between items-center",
  variants: {
    size: {
      large: "mb-5",
      medium: "mb-3"
    }
  }
});
H({
  base: "pointer-events-none"
});
_.forwardRef(
  ({
    active: e = !1,
    ariaLabel: r,
    as: n,
    className: i,
    description: l,
    disabled: c = !1,
    icon: u,
    onBlur: d,
    onClick: h,
    onFocus: p,
    onHover: b,
    size: v = "medium",
    title: g,
    trailingIcon: w,
    trailingSlot: k,
    ...y
  }, C) => {
    const I = _.useRef(null), F = !!h, D = n ?? (F ? "button" : "div"), { buttonProps: W } = wa(
      {
        elementType: typeof D == "string" ? D : "button",
        isDisabled: c,
        onBlur: d,
        onFocus: p,
        onPress: h
      },
      I
    ), re = Ne(y, F ? W : void 0);
    return /* @__PURE__ */ S.createElement(Rr, null, /* @__PURE__ */ S.createElement(
      D,
      {
        "aria-disabled": c,
        "aria-label": F ? r : void 0,
        className: dS({
          active: e,
          className: i,
          disabled: c,
          hasOnClick: F,
          size: v
        }),
        disabled: c,
        onMouseEnter: b,
        ref: vr(I, C),
        ...re
      },
      (u || k) && /* @__PURE__ */ S.createElement("div", { className: fS({ size: v }) }, u && /* @__PURE__ */ S.createElement(
        ls,
        {
          "data-testid": "@paloma-tile-icon-id",
          icon: u,
          size: pS[v]
        }
      ), k && /* @__PURE__ */ S.createElement(
        "div",
        {
          className: "pointer-events-none",
          "data-testid": "tile-trailing-slot"
        },
        k
      )),
      /* @__PURE__ */ S.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ S.createElement("div", { className: "flex flex-col" }, /* @__PURE__ */ S.createElement(ut, { className: "pointer-events-none" }, g), l && /* @__PURE__ */ S.createElement(
        ut,
        {
          className: "pointer-events-none text-content-neutral-subtle mt-1",
          "data-testid": "@paloma-tile-description-id",
          size: "x-small"
        },
        l
      )), w && /* @__PURE__ */ S.createElement(
        "div",
        {
          className: "pointer-events-none self-end",
          "data-testid": "tile-trailing-icon"
        },
        w
      ))
    ));
  }
);
var pS = {
  large: "small",
  medium: "x-small"
}, hS = _.createContext(null);
hS.Provider;
Ue({
  base: "pointer-events-none fixed z-[10] flex w-full max-w-[calc(100vw-2rem)] gap-3 p-4 md:max-w-[420px]",
  variants: {
    placement: {
      "bottom-end": "bottom-0 right-0 flex-col-reverse items-end",
      "bottom-start": "bottom-0 left-0 flex-col-reverse items-start",
      "top-end": "top-0 right-0 flex-col items-end",
      "top-start": "top-0 left-0 flex-col items-start"
    }
  }
});
Ue({
  base: [
    "paloma-toast group/toast pointer-events-auto relative box-border grid w-full min-w-[280px] outline-none",
    "grid-cols-[auto_1fr_auto] gap-3 overflow-hidden rounded-2xl border p-4 shadow-lg backdrop-blur-surface items-center"
  ],
  variants: {
    iconPresence: {
      absent: "grid-cols-[1fr_auto]",
      present: ""
    },
    variant: {
      negative: "border-negative bg-surface-negative-subtle",
      neutral: "border-highlight bg-surface-level-03",
      positive: "border-positive bg-surface-positive-subtle",
      warning: "border-warning bg-surface-warning-subtle"
    }
  }
});
Ue({
  base: "flex",
  variants: {
    hasBody: {
      true: "self-start pt-0.5"
    },
    variant: {
      negative: "text-content-negative",
      neutral: "text-content-neutral-bold",
      positive: "text-content-positive",
      warning: "text-content-warning"
    }
  }
});
Ue({
  base: "flex size-8 shrink-0 items-center justify-center rounded-full border border-neutral-subtle bg-transparent text-content-neutral-bold cursor-pointer outline-none transition-colors [@media(hover:hover)]:hover:bg-content-neutral-bold/[0.08] [@media(hover:hover)]:hover:active:bg-content-neutral-bold/[0.12]",
  variants: {
    hasBody: {
      true: "self-start"
    }
  }
});
Ue({
  base: "h-full origin-left",
  variants: {
    variant: {
      negative: "bg-surface-negative-bold",
      neutral: "bg-surface-highlight-bold",
      positive: "bg-surface-positive-bold",
      warning: "bg-surface-warning-bold"
    }
  }
});
H({
  base: "flex gap-4 ",
  compoundVariants: [
    {
      class: "flex-row items-center ltr:ml-6 rtl:mr-6",
      contentAlignRight: !0
    }
  ],
  variants: {
    contentAlignRight: {
      false: "flex-col mt-4",
      true: ""
    },
    fullWidth: {
      false: "",
      true: ""
    }
  }
});
H({
  base: [
    // Remove base button styles
    "bg-transparent border-none outline-none cursor-pointer text-left rtl:text-right",
    // Hover styles
    "hover:bg-content-neutral-bold/[0.08] active:bg-content-neutral-bold/[0.12] hover:active:bg-content-neutral-bold/[0.12]",
    "flex flex-col gap-4 w-full"
  ],
  variants: {
    list: {
      false: "",
      true: ""
    }
  }
});
H({
  base: "flex",
  compoundVariants: [
    { class: "w-full", contentAlignRight: !0, hasButtons: !0 },
    { class: "w-full", contentAlignRight: !0, hasChip: !0 },
    {
      class: "max-sm:w-full sm:w-[345px]",
      contentAlignRight: !1,
      fullWidth: !1,
      listAlignRight: !1
    }
  ],
  variants: {
    contentAlignRight: {
      false: "",
      true: ""
    },
    fullWidth: {
      false: "",
      true: "w-full"
    },
    hasButtons: {
      false: "",
      true: ""
    },
    hasChip: {
      false: "",
      true: ""
    },
    listAlignRight: {
      false: "flex-col",
      true: "flex-row w-full"
    }
  }
});
H({
  base: "flex flex-col",
  compoundVariants: [
    { class: "px-6 py-8", isContained: !0, orientation: "vertical" },
    { class: "p-6", isContained: !0, orientation: "horizontal" },
    {
      class: "rounded-b-none rounded-t-xl",
      isContained: !0,
      list: !0,
      listAlignRight: !1
    },
    {
      class: "rounded-r-none ltr:rounded-bl-xl ltr:rounded-tl-xl rtl:rounded-tr-xl rtl:rounded-br-xl rtl:!rounded-tl-0",
      isContained: !0,
      list: !0,
      listAlignRight: !0
    },
    { class: "rounded-b-xl rounded-t-xl", isContained: !0, list: !1 },
    { class: "flex-row", contentAlignRight: !0 },
    {
      class: "flex-row",
      fullWidth: !0,
      hasButtons: !0
    },
    {
      class: "flex-row",
      fullWidth: !0,
      hasChip: !0
    }
  ],
  variants: {
    contentAlignRight: {
      false: "",
      true: "items-center"
    },
    fullWidth: {
      false: "",
      true: ""
    },
    hasButtons: {
      false: "",
      true: ""
    },
    hasChip: {
      false: "",
      true: ""
    },
    isContained: {
      false: "",
      true: [
        "border border-solid border-neutral-subtle bg-surface-level-02 backdrop-blur-surface",
        "flex-1"
      ]
    },
    list: {
      false: "",
      true: ""
    },
    listAlignRight: {
      false: "",
      true: "flex-1"
    },
    orientation: {
      horizontal: "",
      vertical: ""
    }
  }
});
H({
  base: "flex w-full",
  variants: {
    orientation: {
      horizontal: "flex-row gap-4",
      vertical: "flex-col gap-6 flex-1 h-full justify-between"
    }
  }
});
H({
  base: "text-content-neutral-bold pt-6 grid grid-cols-1 gap-2 gap-x-5 auto-rows-max",
  compoundVariants: [
    {
      class: "ltr:border-l-0 ltr:rounded-tr-xl ltr:rounded-br-xl rtl:border-r-0 rtl:rounded-tl-xl rtl:rounded-bl-xl",
      isContained: !0,
      listAlignRight: !0
    },
    {
      class: "border-b border-x border-t-0 rounded-t-none rounded-b-xl",
      isContained: !0,
      listAlignRight: !1
    }
  ],
  variants: {
    isContained: {
      false: "",
      true: "border-solid border-neutral-subtle bg-surface-container p-6"
    },
    listAlignRight: {
      false: "",
      true: "flex-1"
    },
    listHasColumns: {
      false: "",
      true: "md:!grid-cols-2"
    }
  }
});
H({
  variants: {
    placement: {
      bottom: "[&>div]:rotate-180",
      center: "",
      left: "[&>div]:-rotate-90",
      right: "[&>div]:rotate-90",
      top: ""
    }
  }
});
H({
  base: "bg-surface-inverse rounded px-[6px] py-1 flex items-center relative gap-1 outline-none",
  variants: {
    size: {
      large: "min-w-36",
      small: ""
    }
  }
});
const Ig = ({ src: e }) => /* @__PURE__ */ $.jsx("img", { src: e, alt: "", loading: "lazy", className: "ea-r-media" });
function mS({ heading: e, cards: r = [] }) {
  if (!r.length)
    return null;
  const [n, ...i] = r;
  return /* @__PURE__ */ $.jsxs("section", { className: "ea-r-section ea-r-announcements", children: [
    e && /* @__PURE__ */ $.jsx("h2", { className: "ea-r-heading", children: e }),
    /* @__PURE__ */ $.jsxs("div", { className: "ea-r-announcements__grid", children: [
      /* @__PURE__ */ $.jsx(
        dd,
        {
          size: "large",
          titleTag: "h3",
          eyebrow: n.subtitle,
          title: n.title,
          meta: n.meta,
          media: /* @__PURE__ */ $.jsx(Ig, { src: n.image }),
          onClick: n.link ? () => window.location.href = n.link : void 0
        }
      ),
      /* @__PURE__ */ $.jsx("div", { className: "ea-r-announcements__list", children: i.map((l, c) => /* @__PURE__ */ $.jsx(
        dd,
        {
          size: "medium",
          titleTag: "h3",
          eyebrow: l.subtitle,
          title: l.title,
          meta: l.meta,
          media: /* @__PURE__ */ $.jsx(Ig, { src: l.image }),
          onClick: l.link ? () => window.location.href = l.link : void 0
        },
        c
      )) })
    ] })
  ] });
}
function gS({ heading: e, games: r = [] }) {
  const n = _.useRef(null), [i, l] = _.useState(!0), [c, u] = _.useState(!1), d = _.useCallback(() => {
    const p = n.current;
    p && (l(p.scrollLeft <= 1), u(p.scrollLeft + p.clientWidth >= p.scrollWidth - 1));
  }, []), h = (p) => {
    n.current?.scrollBy({
      left: p * n.current.clientWidth * 0.85,
      behavior: "smooth"
    });
  };
  return r.length ? /* @__PURE__ */ $.jsxs("section", { className: "ea-r-section ea-r-communities", children: [
    /* @__PURE__ */ $.jsxs("header", { className: "ea-r-section__head", children: [
      /* @__PURE__ */ $.jsxs("h2", { className: "ea-r-heading", children: [
        e,
        /* @__PURE__ */ $.jsx(t3, {})
      ] }),
      /* @__PURE__ */ $.jsxs("div", { className: "ea-r-communities__nav", children: [
        /* @__PURE__ */ $.jsx(
          "button",
          {
            type: "button",
            "aria-label": "Previous games",
            disabled: i,
            onClick: () => h(-1),
            children: /* @__PURE__ */ $.jsx(q2, {})
          }
        ),
        /* @__PURE__ */ $.jsx(
          "button",
          {
            type: "button",
            "aria-label": "Next games",
            disabled: c,
            onClick: () => h(1),
            children: /* @__PURE__ */ $.jsx(Jv, {})
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ $.jsx(
      "div",
      {
        className: "ea-r-communities__viewport",
        ref: (p) => {
          n.current = p, d();
        },
        onScroll: d,
        children: /* @__PURE__ */ $.jsx("ul", { className: "ea-r-communities__list", children: r.map((p, b) => /* @__PURE__ */ $.jsx("li", { children: /* @__PURE__ */ $.jsxs("a", { className: "ea-r-game", href: p.link || "#", children: [
          /* @__PURE__ */ $.jsxs("span", { className: "ea-r-game__art", children: [
            /* @__PURE__ */ $.jsx("img", { src: p.image, alt: "", loading: "lazy" }),
            p.owned && /* @__PURE__ */ $.jsx("span", { className: "ea-r-game__owned", children: /* @__PURE__ */ $.jsx(
              is,
              {
                standalone: !0,
                label: "Owned",
                size: "small",
                emphasis: "bold"
              }
            ) })
          ] }),
          /* @__PURE__ */ $.jsx("span", { className: "ea-r-game__title", children: p.title })
        ] }) }, b)) })
      }
    )
  ] }) : null;
}
function vb({ likes: e, replies: r, views: n }) {
  const i = [
    { icon: /* @__PURE__ */ $.jsx(D5, {}), value: e, label: "likes" },
    { icon: /* @__PURE__ */ $.jsx(l5, {}), value: r, label: "replies" },
    { icon: /* @__PURE__ */ $.jsx(S5, {}), value: n, label: "views" }
  ].filter((l) => typeof l.value == "number");
  return i.length ? /* @__PURE__ */ $.jsx("div", { className: "ea-r-pills", children: i.map((l) => /* @__PURE__ */ $.jsx(
    ud,
    {
      size: "x-small",
      emphasis: "minimal",
      leadingContent: l.icon,
      label: `${l.value.toLocaleString()} ${l.label}`
    },
    l.label
  )) }) : null;
}
function vS({ heading: e, seeAllLabel: r, seeAllUrl: n, topics: i = [] }) {
  return /* @__PURE__ */ $.jsxs("section", { className: "ea-r-section ea-r-recommended", children: [
    /* @__PURE__ */ $.jsxs("header", { className: "ea-r-section__head", children: [
      /* @__PURE__ */ $.jsxs("h2", { className: "ea-r-heading", children: [
        e,
        /* @__PURE__ */ $.jsx(R5, {})
      ] }),
      n && /* @__PURE__ */ $.jsx("a", { className: "ea-r-seeall", href: n, children: r })
    ] }),
    i.length ? /* @__PURE__ */ $.jsx("div", { className: "ea-r-recommended__grid", children: i.map((l) => /* @__PURE__ */ $.jsx(
      dd,
      {
        contained: !0,
        size: "medium",
        titleTag: "h3",
        title: l.title,
        eyebrow: l.categoryName,
        body: l.author,
        badgeLabel: l.solved ? "Solved" : void 0,
        badgeAriaLabel: l.solved ? "Solved topic" : void 0,
        media: /* @__PURE__ */ $.jsx(
          "img",
          {
            src: l.image,
            alt: "",
            loading: "lazy",
            className: "ea-r-media"
          }
        ),
        trailingSlot: /* @__PURE__ */ $.jsx(
          vb,
          {
            likes: l.likes,
            replies: l.replies,
            views: l.views
          }
        ),
        trailingSlotBottom: !0,
        onClick: () => window.location.href = l.url
      },
      l.id
    )) }) : /* @__PURE__ */ $.jsx("p", { className: "ea-r-status", children: "No recommendations yet." })
  ] });
}
function bS({ quests: e = [], labels: r }) {
  if (!e.length)
    return null;
  const n = e.length >= 2 && e.length <= 5, i = e.map((l, c) => /* @__PURE__ */ $.jsxs("article", { className: "ea-r-quest", children: [
    l.image && /* @__PURE__ */ $.jsx(
      "img",
      {
        className: "ea-r-quest__art",
        src: l.image,
        alt: "",
        loading: "lazy"
      }
    ),
    /* @__PURE__ */ $.jsxs("div", { className: "ea-r-quest__body", children: [
      l.icon && /* @__PURE__ */ $.jsx("img", { className: "ea-r-quest__icon", src: l.icon, alt: "" }),
      /* @__PURE__ */ $.jsxs("div", { children: [
        /* @__PURE__ */ $.jsx("p", { className: "ea-r-quest__title", children: l.title }),
        l.reward && /* @__PURE__ */ $.jsx("p", { className: "ea-r-quest__reward", children: l.reward })
      ] })
    ] }),
    /* @__PURE__ */ $.jsx(
      Bd,
      {
        variant: "inverse",
        size: "large",
        onClick: () => l.link && (window.location.href = l.link),
        children: r.questsAccept
      }
    )
  ] }, c));
  return /* @__PURE__ */ $.jsxs("section", { className: "ea-r-quests", children: [
    /* @__PURE__ */ $.jsx("h3", { className: "ea-r-widget-heading", children: r.questsHeading }),
    n ? /* @__PURE__ */ $.jsx(
      l6,
      {
        arrows: !0,
        dots: !0,
        backArrowLabel: r.questsPrevious,
        forwardArrowLabel: r.questsNext,
        children: i
      }
    ) : i
  ] });
}
function yS({ heroes: e = [], labels: r }) {
  return e.length ? /* @__PURE__ */ $.jsxs("section", { className: "ea-r-heroes", children: [
    /* @__PURE__ */ $.jsxs("h3", { className: "ea-r-widget-heading", children: [
      /* @__PURE__ */ $.jsx(X5, {}),
      r.heroesHeading
    ] }),
    /* @__PURE__ */ $.jsx("ol", { className: "ea-r-heroes__list", children: e.map((n) => /* @__PURE__ */ $.jsx("li", { children: /* @__PURE__ */ $.jsxs("a", { className: "ea-r-hero", href: n.path, children: [
      /* @__PURE__ */ $.jsx(
        cd,
        {
          size: "medium",
          label: n.displayName,
          imageSrc: n.avatar
        }
      ),
      /* @__PURE__ */ $.jsxs("span", { className: "ea-r-hero__text", children: [
        /* @__PURE__ */ $.jsx("span", { className: "ea-r-hero__name", children: n.displayName }),
        /* @__PURE__ */ $.jsxs("span", { className: "ea-r-hero__count", children: [
          n.count.toLocaleString(),
          " ",
          r.heroesContributions
        ] })
      ] })
    ] }) }, n.id)) })
  ] }) : null;
}
function wS({
  heading: e,
  labels: r = {},
  filters: n = [],
  activeFilter: i,
  onFilterChange: l,
  topics: c = [],
  loading: u,
  error: d,
  quests: h = [],
  heroes: p = []
}) {
  const [b, v] = _.useState("card");
  return /* @__PURE__ */ $.jsxs("section", { className: "ea-r-section ea-r-trending", children: [
    /* @__PURE__ */ $.jsxs("h2", { className: "ea-r-heading", children: [
      e,
      /* @__PURE__ */ $.jsx(G5, {})
    ] }),
    /* @__PURE__ */ $.jsxs("div", { className: "ea-r-trending__controls", children: [
      /* @__PURE__ */ $.jsxs("div", { className: "ea-r-trending__filters", children: [
        /* @__PURE__ */ $.jsxs("span", { className: "ea-r-trending__filters-label", children: [
          /* @__PURE__ */ $.jsx($5, {}),
          r.filters
        ] }),
        n.map((g) => /* @__PURE__ */ $.jsx(
          ud,
          {
            label: g.label,
            size: "medium",
            selected: g.id === i,
            leadingContent: g.id === "trending" ? /* @__PURE__ */ $.jsx(T5, {}) : void 0,
            onClick: () => l?.(g.id)
          },
          g.id
        ))
      ] }),
      /* @__PURE__ */ $.jsx(I6, { value: b, onChange: v, size: "medium", children: /* @__PURE__ */ $.jsxs(ub, { "aria-label": r.viewLabel || "Layout", children: [
        /* @__PURE__ */ $.jsx(
          $o,
          {
            id: "card",
            leadingIcon: /* @__PURE__ */ $.jsx(m5, {}),
            children: r.viewCard
          }
        ),
        /* @__PURE__ */ $.jsx($o, { id: "compact", leadingIcon: /* @__PURE__ */ $.jsx(B5, {}), children: r.viewCompact })
      ] }) })
    ] }),
    /* @__PURE__ */ $.jsxs("div", { className: "ea-r-trending__body", children: [
      /* @__PURE__ */ $.jsxs("div", { className: "ea-r-trending__threads", children: [
        u && /* @__PURE__ */ $.jsx("p", { className: "ea-r-status", children: r.loading }),
        d && !u && /* @__PURE__ */ $.jsx("p", { className: "ea-r-status ea-r-status--error", children: r.error }),
        !u && !d && !c.length && /* @__PURE__ */ $.jsx("p", { className: "ea-r-status", children: r.empty }),
        !u && !d && c.length > 0 && b === "card" && /* @__PURE__ */ $.jsx("ul", { className: "ea-r-trending__list", children: c.map((g, w) => /* @__PURE__ */ $.jsxs("li", { className: "ea-r-row", children: [
          /* @__PURE__ */ $.jsxs("p", { className: "ea-r-row__eyebrow", children: [
            g.categoryName && /* @__PURE__ */ $.jsx("span", { children: g.categoryName }),
            g.categoryName && /* @__PURE__ */ $.jsx("span", { "aria-hidden": "true", children: "•" }),
            /* @__PURE__ */ $.jsx("span", { children: g.age })
          ] }),
          /* @__PURE__ */ $.jsx("h3", { className: "ea-r-row__title", children: /* @__PURE__ */ $.jsx("a", { href: g.url, children: g.title }) }),
          (g.solved || g.tags?.length > 0) && /* @__PURE__ */ $.jsxs("div", { className: "ea-r-row__badges", children: [
            g.solved && /* @__PURE__ */ $.jsx(
              is,
              {
                standalone: !0,
                label: r.solved,
                status: "positive",
                emphasis: "bold",
                size: "small"
              }
            ),
            g.tags?.map((k) => /* @__PURE__ */ $.jsx(
              ud,
              {
                label: k,
                size: "x-small",
                emphasis: "subtle"
              },
              k
            ))
          ] }),
          w === 0 && g.image && /* @__PURE__ */ $.jsx("a", { className: "ea-r-row__media", href: g.url, tabIndex: -1, "aria-hidden": "true", children: /* @__PURE__ */ $.jsx("img", { src: g.image, alt: "", loading: "lazy" }) }),
          /* @__PURE__ */ $.jsx(
            vb,
            {
              likes: g.likes,
              replies: g.replies,
              views: g.views
            }
          )
        ] }, g.id)) }),
        !u && !d && c.length > 0 && b === "compact" && /* @__PURE__ */ $.jsxs("table", { className: "ea-r-table", children: [
          /* @__PURE__ */ $.jsx("thead", { children: /* @__PURE__ */ $.jsxs("tr", { children: [
            /* @__PURE__ */ $.jsx("th", { scope: "col", children: r.colTopic }),
            /* @__PURE__ */ $.jsx("th", { scope: "col", children: r.colAuthor }),
            /* @__PURE__ */ $.jsx("th", { scope: "col", children: r.colReplies }),
            /* @__PURE__ */ $.jsx("th", { scope: "col", children: r.colViews }),
            /* @__PURE__ */ $.jsx("th", { scope: "col", children: r.colActivity })
          ] }) }),
          /* @__PURE__ */ $.jsx("tbody", { children: c.map((g) => /* @__PURE__ */ $.jsxs("tr", { children: [
            /* @__PURE__ */ $.jsxs("td", { children: [
              /* @__PURE__ */ $.jsx("a", { href: g.url, children: g.title }),
              g.categoryName && /* @__PURE__ */ $.jsx("span", { className: "ea-r-table__category", children: g.categoryName })
            ] }),
            /* @__PURE__ */ $.jsx("td", { children: g.author }),
            /* @__PURE__ */ $.jsx("td", { children: g.replies?.toLocaleString() }),
            /* @__PURE__ */ $.jsx("td", { children: g.views?.toLocaleString() }),
            /* @__PURE__ */ $.jsx("td", { children: g.age })
          ] }, g.id)) })
        ] })
      ] }),
      /* @__PURE__ */ $.jsxs("aside", { className: "ea-r-trending__widgets", children: [
        /* @__PURE__ */ $.jsx(bS, { quests: h, labels: r }),
        /* @__PURE__ */ $.jsx(yS, { heroes: p, labels: r })
      ] })
    ] })
  ] });
}
const Rg = "ea-paloma-styles";
function xS() {
  if (document.getElementById(Rg))
    return;
  const e = document.createElement("style");
  e.id = Rg, e.textContent = Cy, document.head.appendChild(e);
}
const bb = {
  announcements: mS,
  communities: gS,
  recommended: vS,
  trending: wS
}, Ll = /* @__PURE__ */ new WeakMap();
function $S(e, r, n = {}) {
  const i = bb[r];
  if (!i)
    throw new Error(`[ea-react] unknown section "${r}"`);
  xS();
  let l = Ll.get(e);
  return l || (l = Sy.createRoot(e), Ll.set(e, l)), l.render(/* @__PURE__ */ $.jsx(i, { ...n })), l;
}
function PS(e) {
  const r = Ll.get(e);
  r && (r.unmount(), Ll.delete(e));
}
const FS = Object.keys(bb);
export {
  $S as mountSection,
  FS as sectionNames,
  PS as unmountSection
};
