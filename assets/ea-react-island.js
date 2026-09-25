function Od(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Pc = { exports: {} }, _i = {}, Fc = { exports: {} }, _e = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Th;
function Qx() {
  if (Th) return _e;
  Th = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.iterator;
  function h(N) {
    return N === null || typeof N != "object" ? null : (N = g && N[g] || N["@@iterator"], typeof N == "function" ? N : null);
  }
  var b = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, $ = Object.assign, w = {};
  function k(N, G, me) {
    this.props = N, this.context = G, this.refs = w, this.updater = me || b;
  }
  k.prototype.isReactComponent = {}, k.prototype.setState = function(N, G) {
    if (typeof N != "object" && typeof N != "function" && N != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, N, G, "setState");
  }, k.prototype.forceUpdate = function(N) {
    this.updater.enqueueForceUpdate(this, N, "forceUpdate");
  };
  function T() {
  }
  T.prototype = k.prototype;
  function F(N, G, me) {
    this.props = N, this.context = G, this.refs = w, this.updater = me || b;
  }
  var H = F.prototype = new T();
  H.constructor = F, $(H, k.prototype), H.isPureReactComponent = !0;
  var K = Array.isArray, Y = Object.prototype.hasOwnProperty, re = { current: null }, Q = { key: !0, ref: !0, __self: !0, __source: !0 };
  function X(N, G, me) {
    var ue, q = {}, ce = null, ve = null;
    if (G != null) for (ue in G.ref !== void 0 && (ve = G.ref), G.key !== void 0 && (ce = "" + G.key), G) Y.call(G, ue) && !Q.hasOwnProperty(ue) && (q[ue] = G[ue]);
    var Se = arguments.length - 2;
    if (Se === 1) q.children = me;
    else if (1 < Se) {
      for (var Ae = Array(Se), ut = 0; ut < Se; ut++) Ae[ut] = arguments[ut + 2];
      q.children = Ae;
    }
    if (N && N.defaultProps) for (ue in Se = N.defaultProps, Se) q[ue] === void 0 && (q[ue] = Se[ue]);
    return { $$typeof: e, type: N, key: ce, ref: ve, props: q, _owner: re.current };
  }
  function ie(N, G) {
    return { $$typeof: e, type: N.type, key: G, ref: N.ref, props: N.props, _owner: N._owner };
  }
  function ae(N) {
    return typeof N == "object" && N !== null && N.$$typeof === e;
  }
  function ne(N) {
    var G = { "=": "=0", ":": "=2" };
    return "$" + N.replace(/[=:]/g, function(me) {
      return G[me];
    });
  }
  var A = /\/+/g;
  function B(N, G) {
    return typeof N == "object" && N !== null && N.key != null ? ne("" + N.key) : G.toString(36);
  }
  function _(N, G, me, ue, q) {
    var ce = typeof N;
    (ce === "undefined" || ce === "boolean") && (N = null);
    var ve = !1;
    if (N === null) ve = !0;
    else switch (ce) {
      case "string":
      case "number":
        ve = !0;
        break;
      case "object":
        switch (N.$$typeof) {
          case e:
          case t:
            ve = !0;
        }
    }
    if (ve) return ve = N, q = q(ve), N = ue === "" ? "." + B(ve, 0) : ue, K(q) ? (me = "", N != null && (me = N.replace(A, "$&/") + "/"), _(q, G, me, "", function(ut) {
      return ut;
    })) : q != null && (ae(q) && (q = ie(q, me + (!q.key || ve && ve.key === q.key ? "" : ("" + q.key).replace(A, "$&/") + "/") + N)), G.push(q)), 1;
    if (ve = 0, ue = ue === "" ? "." : ue + ":", K(N)) for (var Se = 0; Se < N.length; Se++) {
      ce = N[Se];
      var Ae = ue + B(ce, Se);
      ve += _(ce, G, me, Ae, q);
    }
    else if (Ae = h(N), typeof Ae == "function") for (N = Ae.call(N), Se = 0; !(ce = N.next()).done; ) ce = ce.value, Ae = ue + B(ce, Se++), ve += _(ce, G, me, Ae, q);
    else if (ce === "object") throw G = String(N), Error("Objects are not valid as a React child (found: " + (G === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : G) + "). If you meant to render a collection of children, use an array instead.");
    return ve;
  }
  function D(N, G, me) {
    if (N == null) return N;
    var ue = [], q = 0;
    return _(N, ue, "", "", function(ce) {
      return G.call(me, ce, q++);
    }), ue;
  }
  function I(N) {
    if (N._status === -1) {
      var G = N._result;
      G = G(), G.then(function(me) {
        (N._status === 0 || N._status === -1) && (N._status = 1, N._result = me);
      }, function(me) {
        (N._status === 0 || N._status === -1) && (N._status = 2, N._result = me);
      }), N._status === -1 && (N._status = 0, N._result = G);
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var M = { current: null }, z = { transition: null }, L = { ReactCurrentDispatcher: M, ReactCurrentBatchConfig: z, ReactCurrentOwner: re };
  function W() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return _e.Children = { map: D, forEach: function(N, G, me) {
    D(N, function() {
      G.apply(this, arguments);
    }, me);
  }, count: function(N) {
    var G = 0;
    return D(N, function() {
      G++;
    }), G;
  }, toArray: function(N) {
    return D(N, function(G) {
      return G;
    }) || [];
  }, only: function(N) {
    if (!ae(N)) throw Error("React.Children.only expected to receive a single React element child.");
    return N;
  } }, _e.Component = k, _e.Fragment = r, _e.Profiler = i, _e.PureComponent = F, _e.StrictMode = a, _e.Suspense = p, _e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L, _e.act = W, _e.cloneElement = function(N, G, me) {
    if (N == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + N + ".");
    var ue = $({}, N.props), q = N.key, ce = N.ref, ve = N._owner;
    if (G != null) {
      if (G.ref !== void 0 && (ce = G.ref, ve = re.current), G.key !== void 0 && (q = "" + G.key), N.type && N.type.defaultProps) var Se = N.type.defaultProps;
      for (Ae in G) Y.call(G, Ae) && !Q.hasOwnProperty(Ae) && (ue[Ae] = G[Ae] === void 0 && Se !== void 0 ? Se[Ae] : G[Ae]);
    }
    var Ae = arguments.length - 2;
    if (Ae === 1) ue.children = me;
    else if (1 < Ae) {
      Se = Array(Ae);
      for (var ut = 0; ut < Ae; ut++) Se[ut] = arguments[ut + 2];
      ue.children = Se;
    }
    return { $$typeof: e, type: N.type, key: q, ref: ce, props: ue, _owner: ve };
  }, _e.createContext = function(N) {
    return N = { $$typeof: c, _currentValue: N, _currentValue2: N, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, N.Provider = { $$typeof: s, _context: N }, N.Consumer = N;
  }, _e.createElement = X, _e.createFactory = function(N) {
    var G = X.bind(null, N);
    return G.type = N, G;
  }, _e.createRef = function() {
    return { current: null };
  }, _e.forwardRef = function(N) {
    return { $$typeof: u, render: N };
  }, _e.isValidElement = ae, _e.lazy = function(N) {
    return { $$typeof: v, _payload: { _status: -1, _result: N }, _init: I };
  }, _e.memo = function(N, G) {
    return { $$typeof: f, type: N, compare: G === void 0 ? null : G };
  }, _e.startTransition = function(N) {
    var G = z.transition;
    z.transition = {};
    try {
      N();
    } finally {
      z.transition = G;
    }
  }, _e.unstable_act = W, _e.useCallback = function(N, G) {
    return M.current.useCallback(N, G);
  }, _e.useContext = function(N) {
    return M.current.useContext(N);
  }, _e.useDebugValue = function() {
  }, _e.useDeferredValue = function(N) {
    return M.current.useDeferredValue(N);
  }, _e.useEffect = function(N, G) {
    return M.current.useEffect(N, G);
  }, _e.useId = function() {
    return M.current.useId();
  }, _e.useImperativeHandle = function(N, G, me) {
    return M.current.useImperativeHandle(N, G, me);
  }, _e.useInsertionEffect = function(N, G) {
    return M.current.useInsertionEffect(N, G);
  }, _e.useLayoutEffect = function(N, G) {
    return M.current.useLayoutEffect(N, G);
  }, _e.useMemo = function(N, G) {
    return M.current.useMemo(N, G);
  }, _e.useReducer = function(N, G, me) {
    return M.current.useReducer(N, G, me);
  }, _e.useRef = function(N) {
    return M.current.useRef(N);
  }, _e.useState = function(N) {
    return M.current.useState(N);
  }, _e.useSyncExternalStore = function(N, G, me) {
    return M.current.useSyncExternalStore(N, G, me);
  }, _e.useTransition = function() {
    return M.current.useTransition();
  }, _e.version = "18.3.1", _e;
}
var Rh;
function ms() {
  return Rh || (Rh = 1, Fc.exports = Qx()), Fc.exports;
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
var Lh;
function Xx() {
  if (Lh) return _i;
  Lh = 1;
  var e = ms(), t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(u, p, f) {
    var v, g = {}, h = null, b = null;
    f !== void 0 && (h = "" + f), p.key !== void 0 && (h = "" + p.key), p.ref !== void 0 && (b = p.ref);
    for (v in p) a.call(p, v) && !s.hasOwnProperty(v) && (g[v] = p[v]);
    if (u && u.defaultProps) for (v in p = u.defaultProps, p) g[v] === void 0 && (g[v] = p[v]);
    return { $$typeof: t, type: u, key: h, ref: b, props: g, _owner: i.current };
  }
  return _i.Fragment = r, _i.jsx = c, _i.jsxs = c, _i;
}
var Ih;
function Yx() {
  return Ih || (Ih = 1, Pc.exports = Xx()), Pc.exports;
}
var x = Yx(), Eo = {}, Tc = { exports: {} }, Tt = {}, Rc = { exports: {} }, Lc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mh;
function Jx() {
  return Mh || (Mh = 1, (function(e) {
    function t(z, L) {
      var W = z.length;
      z.push(L);
      e: for (; 0 < W; ) {
        var N = W - 1 >>> 1, G = z[N];
        if (0 < i(G, L)) z[N] = L, z[W] = G, W = N;
        else break e;
      }
    }
    function r(z) {
      return z.length === 0 ? null : z[0];
    }
    function a(z) {
      if (z.length === 0) return null;
      var L = z[0], W = z.pop();
      if (W !== L) {
        z[0] = W;
        e: for (var N = 0, G = z.length, me = G >>> 1; N < me; ) {
          var ue = 2 * (N + 1) - 1, q = z[ue], ce = ue + 1, ve = z[ce];
          if (0 > i(q, W)) ce < G && 0 > i(ve, q) ? (z[N] = ve, z[ce] = W, N = ce) : (z[N] = q, z[ue] = W, N = ue);
          else if (ce < G && 0 > i(ve, W)) z[N] = ve, z[ce] = W, N = ce;
          else break e;
        }
      }
      return L;
    }
    function i(z, L) {
      var W = z.sortIndex - L.sortIndex;
      return W !== 0 ? W : z.id - L.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var s = performance;
      e.unstable_now = function() {
        return s.now();
      };
    } else {
      var c = Date, u = c.now();
      e.unstable_now = function() {
        return c.now() - u;
      };
    }
    var p = [], f = [], v = 1, g = null, h = 3, b = !1, $ = !1, w = !1, k = typeof setTimeout == "function" ? setTimeout : null, T = typeof clearTimeout == "function" ? clearTimeout : null, F = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function H(z) {
      for (var L = r(f); L !== null; ) {
        if (L.callback === null) a(f);
        else if (L.startTime <= z) a(f), L.sortIndex = L.expirationTime, t(p, L);
        else break;
        L = r(f);
      }
    }
    function K(z) {
      if (w = !1, H(z), !$) if (r(p) !== null) $ = !0, I(Y);
      else {
        var L = r(f);
        L !== null && M(K, L.startTime - z);
      }
    }
    function Y(z, L) {
      $ = !1, w && (w = !1, T(X), X = -1), b = !0;
      var W = h;
      try {
        for (H(L), g = r(p); g !== null && (!(g.expirationTime > L) || z && !ne()); ) {
          var N = g.callback;
          if (typeof N == "function") {
            g.callback = null, h = g.priorityLevel;
            var G = N(g.expirationTime <= L);
            L = e.unstable_now(), typeof G == "function" ? g.callback = G : g === r(p) && a(p), H(L);
          } else a(p);
          g = r(p);
        }
        if (g !== null) var me = !0;
        else {
          var ue = r(f);
          ue !== null && M(K, ue.startTime - L), me = !1;
        }
        return me;
      } finally {
        g = null, h = W, b = !1;
      }
    }
    var re = !1, Q = null, X = -1, ie = 5, ae = -1;
    function ne() {
      return !(e.unstable_now() - ae < ie);
    }
    function A() {
      if (Q !== null) {
        var z = e.unstable_now();
        ae = z;
        var L = !0;
        try {
          L = Q(!0, z);
        } finally {
          L ? B() : (re = !1, Q = null);
        }
      } else re = !1;
    }
    var B;
    if (typeof F == "function") B = function() {
      F(A);
    };
    else if (typeof MessageChannel < "u") {
      var _ = new MessageChannel(), D = _.port2;
      _.port1.onmessage = A, B = function() {
        D.postMessage(null);
      };
    } else B = function() {
      k(A, 0);
    };
    function I(z) {
      Q = z, re || (re = !0, B());
    }
    function M(z, L) {
      X = k(function() {
        z(e.unstable_now());
      }, L);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, e.unstable_continueExecution = function() {
      $ || b || ($ = !0, I(Y));
    }, e.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ie = 0 < z ? Math.floor(1e3 / z) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return h;
    }, e.unstable_getFirstCallbackNode = function() {
      return r(p);
    }, e.unstable_next = function(z) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = h;
      }
      var W = h;
      h = L;
      try {
        return z();
      } finally {
        h = W;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(z, L) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var W = h;
      h = z;
      try {
        return L();
      } finally {
        h = W;
      }
    }, e.unstable_scheduleCallback = function(z, L, W) {
      var N = e.unstable_now();
      switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? N + W : N) : W = N, z) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return G = W + G, z = { id: v++, callback: L, priorityLevel: z, startTime: W, expirationTime: G, sortIndex: -1 }, W > N ? (z.sortIndex = W, t(f, z), r(p) === null && z === r(f) && (w ? (T(X), X = -1) : w = !0, M(K, W - N))) : (z.sortIndex = G, t(p, z), $ || b || ($ = !0, I(Y))), z;
    }, e.unstable_shouldYield = ne, e.unstable_wrapCallback = function(z) {
      var L = h;
      return function() {
        var W = h;
        h = L;
        try {
          return z.apply(this, arguments);
        } finally {
          h = W;
        }
      };
    };
  })(Lc)), Lc;
}
var Ah;
function e2() {
  return Ah || (Ah = 1, Rc.exports = Jx()), Rc.exports;
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
var jh;
function t2() {
  if (jh) return Tt;
  jh = 1;
  var e = ms(), t = e2();
  function r(n) {
    for (var l = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) l += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var a = /* @__PURE__ */ new Set(), i = {};
  function s(n, l) {
    c(n, l), c(n + "Capture", l);
  }
  function c(n, l) {
    for (i[n] = l, n = 0; n < l.length; n++) a.add(l[n]);
  }
  var u = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), p = Object.prototype.hasOwnProperty, f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, g = {};
  function h(n) {
    return p.call(g, n) ? !0 : p.call(v, n) ? !1 : f.test(n) ? g[n] = !0 : (v[n] = !0, !1);
  }
  function b(n, l, o, d) {
    if (o !== null && o.type === 0) return !1;
    switch (typeof l) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return d ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function $(n, l, o, d) {
    if (l === null || typeof l > "u" || b(n, l, o, d)) return !0;
    if (d) return !1;
    if (o !== null) switch (o.type) {
      case 3:
        return !l;
      case 4:
        return l === !1;
      case 5:
        return isNaN(l);
      case 6:
        return isNaN(l) || 1 > l;
    }
    return !1;
  }
  function w(n, l, o, d, m, y, E) {
    this.acceptsBooleans = l === 2 || l === 3 || l === 4, this.attributeName = d, this.attributeNamespace = m, this.mustUseProperty = o, this.propertyName = n, this.type = l, this.sanitizeURL = y, this.removeEmptyString = E;
  }
  var k = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    k[n] = new w(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var l = n[0];
    k[l] = new w(l, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    k[n] = new w(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    k[n] = new w(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    k[n] = new w(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    k[n] = new w(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    k[n] = new w(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    k[n] = new w(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    k[n] = new w(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var T = /[\-:]([a-z])/g;
  function F(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var l = n.replace(
      T,
      F
    );
    k[l] = new w(l, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var l = n.replace(T, F);
    k[l] = new w(l, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var l = n.replace(T, F);
    k[l] = new w(l, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    k[n] = new w(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), k.xlinkHref = new w("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    k[n] = new w(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function H(n, l, o, d) {
    var m = k.hasOwnProperty(l) ? k[l] : null;
    (m !== null ? m.type !== 0 : d || !(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && ($(l, o, m, d) && (o = null), d || m === null ? h(l) && (o === null ? n.removeAttribute(l) : n.setAttribute(l, "" + o)) : m.mustUseProperty ? n[m.propertyName] = o === null ? m.type === 3 ? !1 : "" : o : (l = m.attributeName, d = m.attributeNamespace, o === null ? n.removeAttribute(l) : (m = m.type, o = m === 3 || m === 4 && o === !0 ? "" : "" + o, d ? n.setAttributeNS(d, l, o) : n.setAttribute(l, o))));
  }
  var K = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Y = Symbol.for("react.element"), re = Symbol.for("react.portal"), Q = Symbol.for("react.fragment"), X = Symbol.for("react.strict_mode"), ie = Symbol.for("react.profiler"), ae = Symbol.for("react.provider"), ne = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), z = Symbol.iterator;
  function L(n) {
    return n === null || typeof n != "object" ? null : (n = z && n[z] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var W = Object.assign, N;
  function G(n) {
    if (N === void 0) try {
      throw Error();
    } catch (o) {
      var l = o.stack.trim().match(/\n( *(at )?)/);
      N = l && l[1] || "";
    }
    return `
` + N + n;
  }
  var me = !1;
  function ue(n, l) {
    if (!n || me) return "";
    me = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (l) if (l = function() {
        throw Error();
      }, Object.defineProperty(l.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(l, []);
        } catch (U) {
          var d = U;
        }
        Reflect.construct(n, [], l);
      } else {
        try {
          l.call();
        } catch (U) {
          d = U;
        }
        n.call(l.prototype);
      }
      else {
        try {
          throw Error();
        } catch (U) {
          d = U;
        }
        n();
      }
    } catch (U) {
      if (U && d && typeof U.stack == "string") {
        for (var m = U.stack.split(`
`), y = d.stack.split(`
`), E = m.length - 1, P = y.length - 1; 1 <= E && 0 <= P && m[E] !== y[P]; ) P--;
        for (; 1 <= E && 0 <= P; E--, P--) if (m[E] !== y[P]) {
          if (E !== 1 || P !== 1)
            do
              if (E--, P--, 0 > P || m[E] !== y[P]) {
                var R = `
` + m[E].replace(" at new ", " at ");
                return n.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", n.displayName)), R;
              }
            while (1 <= E && 0 <= P);
          break;
        }
      }
    } finally {
      me = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? G(n) : "";
  }
  function q(n) {
    switch (n.tag) {
      case 5:
        return G(n.type);
      case 16:
        return G("Lazy");
      case 13:
        return G("Suspense");
      case 19:
        return G("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = ue(n.type, !1), n;
      case 11:
        return n = ue(n.type.render, !1), n;
      case 1:
        return n = ue(n.type, !0), n;
      default:
        return "";
    }
  }
  function ce(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Q:
        return "Fragment";
      case re:
        return "Portal";
      case ie:
        return "Profiler";
      case X:
        return "StrictMode";
      case B:
        return "Suspense";
      case _:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case ne:
        return (n.displayName || "Context") + ".Consumer";
      case ae:
        return (n._context.displayName || "Context") + ".Provider";
      case A:
        var l = n.render;
        return n = n.displayName, n || (n = l.displayName || l.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case D:
        return l = n.displayName || null, l !== null ? l : ce(n.type) || "Memo";
      case I:
        l = n._payload, n = n._init;
        try {
          return ce(n(l));
        } catch {
        }
    }
    return null;
  }
  function ve(n) {
    var l = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (l.displayName || "Context") + ".Consumer";
      case 10:
        return (l._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = l.render, n = n.displayName || n.name || "", l.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return l;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ce(l);
      case 8:
        return l === X ? "StrictMode" : "Mode";
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
        if (typeof l == "function") return l.displayName || l.name || null;
        if (typeof l == "string") return l;
    }
    return null;
  }
  function Se(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Ae(n) {
    var l = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function ut(n) {
    var l = Ae(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, l), d = "" + n[l];
    if (!n.hasOwnProperty(l) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var m = o.get, y = o.set;
      return Object.defineProperty(n, l, { configurable: !0, get: function() {
        return m.call(this);
      }, set: function(E) {
        d = "" + E, y.call(this, E);
      } }), Object.defineProperty(n, l, { enumerable: o.enumerable }), { getValue: function() {
        return d;
      }, setValue: function(E) {
        d = "" + E;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[l];
      } };
    }
  }
  function oe(n) {
    n._valueTracker || (n._valueTracker = ut(n));
  }
  function se(n) {
    if (!n) return !1;
    var l = n._valueTracker;
    if (!l) return !0;
    var o = l.getValue(), d = "";
    return n && (d = Ae(n) ? n.checked ? "true" : "false" : n.value), n = d, n !== o ? (l.setValue(n), !0) : !1;
  }
  function Ye(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function De(n, l) {
    var o = l.checked;
    return W({}, l, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function Kt(n, l) {
    var o = l.defaultValue == null ? "" : l.defaultValue, d = l.checked != null ? l.checked : l.defaultChecked;
    o = Se(l.value != null ? l.value : o), n._wrapperState = { initialChecked: d, initialValue: o, controlled: l.type === "checkbox" || l.type === "radio" ? l.checked != null : l.value != null };
  }
  function ze(n, l) {
    l = l.checked, l != null && H(n, "checked", l, !1);
  }
  function Bt(n, l) {
    ze(n, l);
    var o = Se(l.value), d = l.type;
    if (o != null) d === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (d === "submit" || d === "reset") {
      n.removeAttribute("value");
      return;
    }
    l.hasOwnProperty("value") ? Yr(n, l.type, o) : l.hasOwnProperty("defaultValue") && Yr(n, l.type, Se(l.defaultValue)), l.checked == null && l.defaultChecked != null && (n.defaultChecked = !!l.defaultChecked);
  }
  function ha(n, l, o) {
    if (l.hasOwnProperty("value") || l.hasOwnProperty("defaultValue")) {
      var d = l.type;
      if (!(d !== "submit" && d !== "reset" || l.value !== void 0 && l.value !== null)) return;
      l = "" + n._wrapperState.initialValue, o || l === n.value || (n.value = l), n.defaultValue = l;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function Yr(n, l, o) {
    (l !== "number" || Ye(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var Sr = Array.isArray;
  function tt(n, l, o, d) {
    if (n = n.options, l) {
      l = {};
      for (var m = 0; m < o.length; m++) l["$" + o[m]] = !0;
      for (o = 0; o < n.length; o++) m = l.hasOwnProperty("$" + n[o].value), n[o].selected !== m && (n[o].selected = m), m && d && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + Se(o), l = null, m = 0; m < n.length; m++) {
        if (n[m].value === o) {
          n[m].selected = !0, d && (n[m].defaultSelected = !0);
          return;
        }
        l !== null || n[m].disabled || (l = n[m]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function Cr(n, l) {
    if (l.dangerouslySetInnerHTML != null) throw Error(r(91));
    return W({}, l, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Jr(n, l) {
    var o = l.value;
    if (o == null) {
      if (o = l.children, l = l.defaultValue, o != null) {
        if (l != null) throw Error(r(92));
        if (Sr(o)) {
          if (1 < o.length) throw Error(r(93));
          o = o[0];
        }
        l = o;
      }
      l == null && (l = ""), o = l;
    }
    n._wrapperState = { initialValue: Se(o) };
  }
  function Vf(n, l) {
    var o = Se(l.value), d = Se(l.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), l.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), d != null && (n.defaultValue = "" + d);
  }
  function Hf(n) {
    var l = n.textContent;
    l === n._wrapperState.initialValue && l !== "" && l !== null && (n.value = l);
  }
  function Bf(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ds(n, l) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Bf(l) : n === "http://www.w3.org/2000/svg" && l === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var ga, Uf = (function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(l, o, d, m) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(l, o, d, m);
      });
    } : n;
  })(function(n, l) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = l;
    else {
      for (ga = ga || document.createElement("div"), ga.innerHTML = "<svg>" + l.valueOf().toString() + "</svg>", l = ga.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; l.firstChild; ) n.appendChild(l.firstChild);
    }
  });
  function Hl(n, l) {
    if (l) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = l;
        return;
      }
    }
    n.textContent = l;
  }
  var Bl = {
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
  }, eb = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Bl).forEach(function(n) {
    eb.forEach(function(l) {
      l = l + n.charAt(0).toUpperCase() + n.substring(1), Bl[l] = Bl[n];
    });
  });
  function Wf(n, l, o) {
    return l == null || typeof l == "boolean" || l === "" ? "" : o || typeof l != "number" || l === 0 || Bl.hasOwnProperty(n) && Bl[n] ? ("" + l).trim() : l + "px";
  }
  function Gf(n, l) {
    n = n.style;
    for (var o in l) if (l.hasOwnProperty(o)) {
      var d = o.indexOf("--") === 0, m = Wf(o, l[o], d);
      o === "float" && (o = "cssFloat"), d ? n.setProperty(o, m) : n[o] = m;
    }
  }
  var tb = W({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Os(n, l) {
    if (l) {
      if (tb[n] && (l.children != null || l.dangerouslySetInnerHTML != null)) throw Error(r(137, n));
      if (l.dangerouslySetInnerHTML != null) {
        if (l.children != null) throw Error(r(60));
        if (typeof l.dangerouslySetInnerHTML != "object" || !("__html" in l.dangerouslySetInnerHTML)) throw Error(r(61));
      }
      if (l.style != null && typeof l.style != "object") throw Error(r(62));
    }
  }
  function Vs(n, l) {
    if (n.indexOf("-") === -1) return typeof l.is == "string";
    switch (n) {
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
  var Hs = null;
  function Bs(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Us = null, el = null, tl = null;
  function qf(n) {
    if (n = fi(n)) {
      if (typeof Us != "function") throw Error(r(280));
      var l = n.stateNode;
      l && (l = Ka(l), Us(n.stateNode, n.type, l));
    }
  }
  function Zf(n) {
    el ? tl ? tl.push(n) : tl = [n] : el = n;
  }
  function Qf() {
    if (el) {
      var n = el, l = tl;
      if (tl = el = null, qf(n), l) for (n = 0; n < l.length; n++) qf(l[n]);
    }
  }
  function Xf(n, l) {
    return n(l);
  }
  function Yf() {
  }
  var Ws = !1;
  function Jf(n, l, o) {
    if (Ws) return n(l, o);
    Ws = !0;
    try {
      return Xf(n, l, o);
    } finally {
      Ws = !1, (el !== null || tl !== null) && (Yf(), Qf());
    }
  }
  function Ul(n, l) {
    var o = n.stateNode;
    if (o === null) return null;
    var d = Ka(o);
    if (d === null) return null;
    o = d[l];
    e: switch (l) {
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
        (d = !d.disabled) || (n = n.type, d = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !d;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (o && typeof o != "function") throw Error(r(231, l, typeof o));
    return o;
  }
  var Gs = !1;
  if (u) try {
    var Wl = {};
    Object.defineProperty(Wl, "passive", { get: function() {
      Gs = !0;
    } }), window.addEventListener("test", Wl, Wl), window.removeEventListener("test", Wl, Wl);
  } catch {
    Gs = !1;
  }
  function nb(n, l, o, d, m, y, E, P, R) {
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      l.apply(o, U);
    } catch (ee) {
      this.onError(ee);
    }
  }
  var Gl = !1, va = null, ya = !1, qs = null, rb = { onError: function(n) {
    Gl = !0, va = n;
  } };
  function lb(n, l, o, d, m, y, E, P, R) {
    Gl = !1, va = null, nb.apply(rb, arguments);
  }
  function ib(n, l, o, d, m, y, E, P, R) {
    if (lb.apply(this, arguments), Gl) {
      if (Gl) {
        var U = va;
        Gl = !1, va = null;
      } else throw Error(r(198));
      ya || (ya = !0, qs = U);
    }
  }
  function $r(n) {
    var l = n, o = n;
    if (n.alternate) for (; l.return; ) l = l.return;
    else {
      n = l;
      do
        l = n, (l.flags & 4098) !== 0 && (o = l.return), n = l.return;
      while (n);
    }
    return l.tag === 3 ? o : null;
  }
  function ep(n) {
    if (n.tag === 13) {
      var l = n.memoizedState;
      if (l === null && (n = n.alternate, n !== null && (l = n.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function tp(n) {
    if ($r(n) !== n) throw Error(r(188));
  }
  function ab(n) {
    var l = n.alternate;
    if (!l) {
      if (l = $r(n), l === null) throw Error(r(188));
      return l !== n ? null : n;
    }
    for (var o = n, d = l; ; ) {
      var m = o.return;
      if (m === null) break;
      var y = m.alternate;
      if (y === null) {
        if (d = m.return, d !== null) {
          o = d;
          continue;
        }
        break;
      }
      if (m.child === y.child) {
        for (y = m.child; y; ) {
          if (y === o) return tp(m), n;
          if (y === d) return tp(m), l;
          y = y.sibling;
        }
        throw Error(r(188));
      }
      if (o.return !== d.return) o = m, d = y;
      else {
        for (var E = !1, P = m.child; P; ) {
          if (P === o) {
            E = !0, o = m, d = y;
            break;
          }
          if (P === d) {
            E = !0, d = m, o = y;
            break;
          }
          P = P.sibling;
        }
        if (!E) {
          for (P = y.child; P; ) {
            if (P === o) {
              E = !0, o = y, d = m;
              break;
            }
            if (P === d) {
              E = !0, d = y, o = m;
              break;
            }
            P = P.sibling;
          }
          if (!E) throw Error(r(189));
        }
      }
      if (o.alternate !== d) throw Error(r(190));
    }
    if (o.tag !== 3) throw Error(r(188));
    return o.stateNode.current === o ? n : l;
  }
  function np(n) {
    return n = ab(n), n !== null ? rp(n) : null;
  }
  function rp(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var l = rp(n);
      if (l !== null) return l;
      n = n.sibling;
    }
    return null;
  }
  var lp = t.unstable_scheduleCallback, ip = t.unstable_cancelCallback, ob = t.unstable_shouldYield, sb = t.unstable_requestPaint, rt = t.unstable_now, ub = t.unstable_getCurrentPriorityLevel, Zs = t.unstable_ImmediatePriority, ap = t.unstable_UserBlockingPriority, ba = t.unstable_NormalPriority, cb = t.unstable_LowPriority, op = t.unstable_IdlePriority, xa = null, mn = null;
  function db(n) {
    if (mn && typeof mn.onCommitFiberRoot == "function") try {
      mn.onCommitFiberRoot(xa, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var nn = Math.clz32 ? Math.clz32 : mb, fb = Math.log, pb = Math.LN2;
  function mb(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (fb(n) / pb | 0) | 0;
  }
  var wa = 64, Sa = 4194304;
  function ql(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Ca(n, l) {
    var o = n.pendingLanes;
    if (o === 0) return 0;
    var d = 0, m = n.suspendedLanes, y = n.pingedLanes, E = o & 268435455;
    if (E !== 0) {
      var P = E & ~m;
      P !== 0 ? d = ql(P) : (y &= E, y !== 0 && (d = ql(y)));
    } else E = o & ~m, E !== 0 ? d = ql(E) : y !== 0 && (d = ql(y));
    if (d === 0) return 0;
    if (l !== 0 && l !== d && (l & m) === 0 && (m = d & -d, y = l & -l, m >= y || m === 16 && (y & 4194240) !== 0)) return l;
    if ((d & 4) !== 0 && (d |= o & 16), l = n.entangledLanes, l !== 0) for (n = n.entanglements, l &= d; 0 < l; ) o = 31 - nn(l), m = 1 << o, d |= n[o], l &= ~m;
    return d;
  }
  function hb(n, l) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return l + 250;
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
        return l + 5e3;
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
  function gb(n, l) {
    for (var o = n.suspendedLanes, d = n.pingedLanes, m = n.expirationTimes, y = n.pendingLanes; 0 < y; ) {
      var E = 31 - nn(y), P = 1 << E, R = m[E];
      R === -1 ? ((P & o) === 0 || (P & d) !== 0) && (m[E] = hb(P, l)) : R <= l && (n.expiredLanes |= P), y &= ~P;
    }
  }
  function Qs(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function sp() {
    var n = wa;
    return wa <<= 1, (wa & 4194240) === 0 && (wa = 64), n;
  }
  function Xs(n) {
    for (var l = [], o = 0; 31 > o; o++) l.push(n);
    return l;
  }
  function Zl(n, l, o) {
    n.pendingLanes |= l, l !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, l = 31 - nn(l), n[l] = o;
  }
  function vb(n, l) {
    var o = n.pendingLanes & ~l;
    n.pendingLanes = l, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= l, n.mutableReadLanes &= l, n.entangledLanes &= l, l = n.entanglements;
    var d = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var m = 31 - nn(o), y = 1 << m;
      l[m] = 0, d[m] = -1, n[m] = -1, o &= ~y;
    }
  }
  function Ys(n, l) {
    var o = n.entangledLanes |= l;
    for (n = n.entanglements; o; ) {
      var d = 31 - nn(o), m = 1 << d;
      m & l | n[d] & l && (n[d] |= l), o &= ~m;
    }
  }
  var Ke = 0;
  function up(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var cp, Js, dp, fp, pp, eu = !1, $a = [], Bn = null, Un = null, Wn = null, Ql = /* @__PURE__ */ new Map(), Xl = /* @__PURE__ */ new Map(), Gn = [], yb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function mp(n, l) {
    switch (n) {
      case "focusin":
      case "focusout":
        Bn = null;
        break;
      case "dragenter":
      case "dragleave":
        Un = null;
        break;
      case "mouseover":
      case "mouseout":
        Wn = null;
        break;
      case "pointerover":
      case "pointerout":
        Ql.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Xl.delete(l.pointerId);
    }
  }
  function Yl(n, l, o, d, m, y) {
    return n === null || n.nativeEvent !== y ? (n = { blockedOn: l, domEventName: o, eventSystemFlags: d, nativeEvent: y, targetContainers: [m] }, l !== null && (l = fi(l), l !== null && Js(l)), n) : (n.eventSystemFlags |= d, l = n.targetContainers, m !== null && l.indexOf(m) === -1 && l.push(m), n);
  }
  function bb(n, l, o, d, m) {
    switch (l) {
      case "focusin":
        return Bn = Yl(Bn, n, l, o, d, m), !0;
      case "dragenter":
        return Un = Yl(Un, n, l, o, d, m), !0;
      case "mouseover":
        return Wn = Yl(Wn, n, l, o, d, m), !0;
      case "pointerover":
        var y = m.pointerId;
        return Ql.set(y, Yl(Ql.get(y) || null, n, l, o, d, m)), !0;
      case "gotpointercapture":
        return y = m.pointerId, Xl.set(y, Yl(Xl.get(y) || null, n, l, o, d, m)), !0;
    }
    return !1;
  }
  function hp(n) {
    var l = Er(n.target);
    if (l !== null) {
      var o = $r(l);
      if (o !== null) {
        if (l = o.tag, l === 13) {
          if (l = ep(o), l !== null) {
            n.blockedOn = l, pp(n.priority, function() {
              dp(o);
            });
            return;
          }
        } else if (l === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Ea(n) {
    if (n.blockedOn !== null) return !1;
    for (var l = n.targetContainers; 0 < l.length; ) {
      var o = nu(n.domEventName, n.eventSystemFlags, l[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var d = new o.constructor(o.type, o);
        Hs = d, o.target.dispatchEvent(d), Hs = null;
      } else return l = fi(o), l !== null && Js(l), n.blockedOn = o, !1;
      l.shift();
    }
    return !0;
  }
  function gp(n, l, o) {
    Ea(n) && o.delete(l);
  }
  function xb() {
    eu = !1, Bn !== null && Ea(Bn) && (Bn = null), Un !== null && Ea(Un) && (Un = null), Wn !== null && Ea(Wn) && (Wn = null), Ql.forEach(gp), Xl.forEach(gp);
  }
  function Jl(n, l) {
    n.blockedOn === l && (n.blockedOn = null, eu || (eu = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, xb)));
  }
  function ei(n) {
    function l(m) {
      return Jl(m, n);
    }
    if (0 < $a.length) {
      Jl($a[0], n);
      for (var o = 1; o < $a.length; o++) {
        var d = $a[o];
        d.blockedOn === n && (d.blockedOn = null);
      }
    }
    for (Bn !== null && Jl(Bn, n), Un !== null && Jl(Un, n), Wn !== null && Jl(Wn, n), Ql.forEach(l), Xl.forEach(l), o = 0; o < Gn.length; o++) d = Gn[o], d.blockedOn === n && (d.blockedOn = null);
    for (; 0 < Gn.length && (o = Gn[0], o.blockedOn === null); ) hp(o), o.blockedOn === null && Gn.shift();
  }
  var nl = K.ReactCurrentBatchConfig, ka = !0;
  function wb(n, l, o, d) {
    var m = Ke, y = nl.transition;
    nl.transition = null;
    try {
      Ke = 1, tu(n, l, o, d);
    } finally {
      Ke = m, nl.transition = y;
    }
  }
  function Sb(n, l, o, d) {
    var m = Ke, y = nl.transition;
    nl.transition = null;
    try {
      Ke = 4, tu(n, l, o, d);
    } finally {
      Ke = m, nl.transition = y;
    }
  }
  function tu(n, l, o, d) {
    if (ka) {
      var m = nu(n, l, o, d);
      if (m === null) bu(n, l, d, _a, o), mp(n, d);
      else if (bb(m, n, l, o, d)) d.stopPropagation();
      else if (mp(n, d), l & 4 && -1 < yb.indexOf(n)) {
        for (; m !== null; ) {
          var y = fi(m);
          if (y !== null && cp(y), y = nu(n, l, o, d), y === null && bu(n, l, d, _a, o), y === m) break;
          m = y;
        }
        m !== null && d.stopPropagation();
      } else bu(n, l, d, null, o);
    }
  }
  var _a = null;
  function nu(n, l, o, d) {
    if (_a = null, n = Bs(d), n = Er(n), n !== null) if (l = $r(n), l === null) n = null;
    else if (o = l.tag, o === 13) {
      if (n = ep(l), n !== null) return n;
      n = null;
    } else if (o === 3) {
      if (l.stateNode.current.memoizedState.isDehydrated) return l.tag === 3 ? l.stateNode.containerInfo : null;
      n = null;
    } else l !== n && (n = null);
    return _a = n, null;
  }
  function vp(n) {
    switch (n) {
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
        switch (ub()) {
          case Zs:
            return 1;
          case ap:
            return 4;
          case ba:
          case cb:
            return 16;
          case op:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var qn = null, ru = null, Na = null;
  function yp() {
    if (Na) return Na;
    var n, l = ru, o = l.length, d, m = "value" in qn ? qn.value : qn.textContent, y = m.length;
    for (n = 0; n < o && l[n] === m[n]; n++) ;
    var E = o - n;
    for (d = 1; d <= E && l[o - d] === m[y - d]; d++) ;
    return Na = m.slice(n, 1 < d ? 1 - d : void 0);
  }
  function Pa(n) {
    var l = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && l === 13 && (n = 13)) : n = l, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Fa() {
    return !0;
  }
  function bp() {
    return !1;
  }
  function Dt(n) {
    function l(o, d, m, y, E) {
      this._reactName = o, this._targetInst = m, this.type = d, this.nativeEvent = y, this.target = E, this.currentTarget = null;
      for (var P in n) n.hasOwnProperty(P) && (o = n[P], this[P] = o ? o(y) : y[P]);
      return this.isDefaultPrevented = (y.defaultPrevented != null ? y.defaultPrevented : y.returnValue === !1) ? Fa : bp, this.isPropagationStopped = bp, this;
    }
    return W(l.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = Fa);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = Fa);
    }, persist: function() {
    }, isPersistent: Fa }), l;
  }
  var rl = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, lu = Dt(rl), ti = W({}, rl, { view: 0, detail: 0 }), Cb = Dt(ti), iu, au, ni, Ta = W({}, ti, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: su, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== ni && (ni && n.type === "mousemove" ? (iu = n.screenX - ni.screenX, au = n.screenY - ni.screenY) : au = iu = 0, ni = n), iu);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : au;
  } }), xp = Dt(Ta), $b = W({}, Ta, { dataTransfer: 0 }), Eb = Dt($b), kb = W({}, ti, { relatedTarget: 0 }), ou = Dt(kb), _b = W({}, rl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Nb = Dt(_b), Pb = W({}, rl, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Fb = Dt(Pb), Tb = W({}, rl, { data: 0 }), wp = Dt(Tb), Rb = {
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
  }, Lb = {
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
  }, Ib = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Mb(n) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(n) : (n = Ib[n]) ? !!l[n] : !1;
  }
  function su() {
    return Mb;
  }
  var Ab = W({}, ti, { key: function(n) {
    if (n.key) {
      var l = Rb[n.key] || n.key;
      if (l !== "Unidentified") return l;
    }
    return n.type === "keypress" ? (n = Pa(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Lb[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: su, charCode: function(n) {
    return n.type === "keypress" ? Pa(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Pa(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), jb = Dt(Ab), zb = W({}, Ta, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Sp = Dt(zb), Kb = W({}, ti, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: su }), Db = Dt(Kb), Ob = W({}, rl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Vb = Dt(Ob), Hb = W({}, Ta, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Bb = Dt(Hb), Ub = [9, 13, 27, 32], uu = u && "CompositionEvent" in window, ri = null;
  u && "documentMode" in document && (ri = document.documentMode);
  var Wb = u && "TextEvent" in window && !ri, Cp = u && (!uu || ri && 8 < ri && 11 >= ri), $p = " ", Ep = !1;
  function kp(n, l) {
    switch (n) {
      case "keyup":
        return Ub.indexOf(l.keyCode) !== -1;
      case "keydown":
        return l.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function _p(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var ll = !1;
  function Gb(n, l) {
    switch (n) {
      case "compositionend":
        return _p(l);
      case "keypress":
        return l.which !== 32 ? null : (Ep = !0, $p);
      case "textInput":
        return n = l.data, n === $p && Ep ? null : n;
      default:
        return null;
    }
  }
  function qb(n, l) {
    if (ll) return n === "compositionend" || !uu && kp(n, l) ? (n = yp(), Na = ru = qn = null, ll = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(l.ctrlKey || l.altKey || l.metaKey) || l.ctrlKey && l.altKey) {
          if (l.char && 1 < l.char.length) return l.char;
          if (l.which) return String.fromCharCode(l.which);
        }
        return null;
      case "compositionend":
        return Cp && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var Zb = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Np(n) {
    var l = n && n.nodeName && n.nodeName.toLowerCase();
    return l === "input" ? !!Zb[n.type] : l === "textarea";
  }
  function Pp(n, l, o, d) {
    Zf(d), l = Aa(l, "onChange"), 0 < l.length && (o = new lu("onChange", "change", null, o, d), n.push({ event: o, listeners: l }));
  }
  var li = null, ii = null;
  function Qb(n) {
    Gp(n, 0);
  }
  function Ra(n) {
    var l = ul(n);
    if (se(l)) return n;
  }
  function Xb(n, l) {
    if (n === "change") return l;
  }
  var Fp = !1;
  if (u) {
    var cu;
    if (u) {
      var du = "oninput" in document;
      if (!du) {
        var Tp = document.createElement("div");
        Tp.setAttribute("oninput", "return;"), du = typeof Tp.oninput == "function";
      }
      cu = du;
    } else cu = !1;
    Fp = cu && (!document.documentMode || 9 < document.documentMode);
  }
  function Rp() {
    li && (li.detachEvent("onpropertychange", Lp), ii = li = null);
  }
  function Lp(n) {
    if (n.propertyName === "value" && Ra(ii)) {
      var l = [];
      Pp(l, ii, n, Bs(n)), Jf(Qb, l);
    }
  }
  function Yb(n, l, o) {
    n === "focusin" ? (Rp(), li = l, ii = o, li.attachEvent("onpropertychange", Lp)) : n === "focusout" && Rp();
  }
  function Jb(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Ra(ii);
  }
  function ex(n, l) {
    if (n === "click") return Ra(l);
  }
  function tx(n, l) {
    if (n === "input" || n === "change") return Ra(l);
  }
  function nx(n, l) {
    return n === l && (n !== 0 || 1 / n === 1 / l) || n !== n && l !== l;
  }
  var rn = typeof Object.is == "function" ? Object.is : nx;
  function ai(n, l) {
    if (rn(n, l)) return !0;
    if (typeof n != "object" || n === null || typeof l != "object" || l === null) return !1;
    var o = Object.keys(n), d = Object.keys(l);
    if (o.length !== d.length) return !1;
    for (d = 0; d < o.length; d++) {
      var m = o[d];
      if (!p.call(l, m) || !rn(n[m], l[m])) return !1;
    }
    return !0;
  }
  function Ip(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Mp(n, l) {
    var o = Ip(n);
    n = 0;
    for (var d; o; ) {
      if (o.nodeType === 3) {
        if (d = n + o.textContent.length, n <= l && d >= l) return { node: o, offset: l - n };
        n = d;
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
      o = Ip(o);
    }
  }
  function Ap(n, l) {
    return n && l ? n === l ? !0 : n && n.nodeType === 3 ? !1 : l && l.nodeType === 3 ? Ap(n, l.parentNode) : "contains" in n ? n.contains(l) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(l) & 16) : !1 : !1;
  }
  function jp() {
    for (var n = window, l = Ye(); l instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof l.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o) n = l.contentWindow;
      else break;
      l = Ye(n.document);
    }
    return l;
  }
  function fu(n) {
    var l = n && n.nodeName && n.nodeName.toLowerCase();
    return l && (l === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || l === "textarea" || n.contentEditable === "true");
  }
  function rx(n) {
    var l = jp(), o = n.focusedElem, d = n.selectionRange;
    if (l !== o && o && o.ownerDocument && Ap(o.ownerDocument.documentElement, o)) {
      if (d !== null && fu(o)) {
        if (l = d.start, n = d.end, n === void 0 && (n = l), "selectionStart" in o) o.selectionStart = l, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (l = o.ownerDocument || document) && l.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var m = o.textContent.length, y = Math.min(d.start, m);
          d = d.end === void 0 ? y : Math.min(d.end, m), !n.extend && y > d && (m = d, d = y, y = m), m = Mp(o, y);
          var E = Mp(
            o,
            d
          );
          m && E && (n.rangeCount !== 1 || n.anchorNode !== m.node || n.anchorOffset !== m.offset || n.focusNode !== E.node || n.focusOffset !== E.offset) && (l = l.createRange(), l.setStart(m.node, m.offset), n.removeAllRanges(), y > d ? (n.addRange(l), n.extend(E.node, E.offset)) : (l.setEnd(E.node, E.offset), n.addRange(l)));
        }
      }
      for (l = [], n = o; n = n.parentNode; ) n.nodeType === 1 && l.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < l.length; o++) n = l[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var lx = u && "documentMode" in document && 11 >= document.documentMode, il = null, pu = null, oi = null, mu = !1;
  function zp(n, l, o) {
    var d = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    mu || il == null || il !== Ye(d) || (d = il, "selectionStart" in d && fu(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), oi && ai(oi, d) || (oi = d, d = Aa(pu, "onSelect"), 0 < d.length && (l = new lu("onSelect", "select", null, l, o), n.push({ event: l, listeners: d }), l.target = il)));
  }
  function La(n, l) {
    var o = {};
    return o[n.toLowerCase()] = l.toLowerCase(), o["Webkit" + n] = "webkit" + l, o["Moz" + n] = "moz" + l, o;
  }
  var al = { animationend: La("Animation", "AnimationEnd"), animationiteration: La("Animation", "AnimationIteration"), animationstart: La("Animation", "AnimationStart"), transitionend: La("Transition", "TransitionEnd") }, hu = {}, Kp = {};
  u && (Kp = document.createElement("div").style, "AnimationEvent" in window || (delete al.animationend.animation, delete al.animationiteration.animation, delete al.animationstart.animation), "TransitionEvent" in window || delete al.transitionend.transition);
  function Ia(n) {
    if (hu[n]) return hu[n];
    if (!al[n]) return n;
    var l = al[n], o;
    for (o in l) if (l.hasOwnProperty(o) && o in Kp) return hu[n] = l[o];
    return n;
  }
  var Dp = Ia("animationend"), Op = Ia("animationiteration"), Vp = Ia("animationstart"), Hp = Ia("transitionend"), Bp = /* @__PURE__ */ new Map(), Up = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Zn(n, l) {
    Bp.set(n, l), s(l, [n]);
  }
  for (var gu = 0; gu < Up.length; gu++) {
    var vu = Up[gu], ix = vu.toLowerCase(), ax = vu[0].toUpperCase() + vu.slice(1);
    Zn(ix, "on" + ax);
  }
  Zn(Dp, "onAnimationEnd"), Zn(Op, "onAnimationIteration"), Zn(Vp, "onAnimationStart"), Zn("dblclick", "onDoubleClick"), Zn("focusin", "onFocus"), Zn("focusout", "onBlur"), Zn(Hp, "onTransitionEnd"), c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), s("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), s("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), s("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), s("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), s("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), s("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var si = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ox = new Set("cancel close invalid load scroll toggle".split(" ").concat(si));
  function Wp(n, l, o) {
    var d = n.type || "unknown-event";
    n.currentTarget = o, ib(d, l, void 0, n), n.currentTarget = null;
  }
  function Gp(n, l) {
    l = (l & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var d = n[o], m = d.event;
      d = d.listeners;
      e: {
        var y = void 0;
        if (l) for (var E = d.length - 1; 0 <= E; E--) {
          var P = d[E], R = P.instance, U = P.currentTarget;
          if (P = P.listener, R !== y && m.isPropagationStopped()) break e;
          Wp(m, P, U), y = R;
        }
        else for (E = 0; E < d.length; E++) {
          if (P = d[E], R = P.instance, U = P.currentTarget, P = P.listener, R !== y && m.isPropagationStopped()) break e;
          Wp(m, P, U), y = R;
        }
      }
    }
    if (ya) throw n = qs, ya = !1, qs = null, n;
  }
  function We(n, l) {
    var o = l[Eu];
    o === void 0 && (o = l[Eu] = /* @__PURE__ */ new Set());
    var d = n + "__bubble";
    o.has(d) || (qp(l, n, 2, !1), o.add(d));
  }
  function yu(n, l, o) {
    var d = 0;
    l && (d |= 4), qp(o, n, d, l);
  }
  var Ma = "_reactListening" + Math.random().toString(36).slice(2);
  function ui(n) {
    if (!n[Ma]) {
      n[Ma] = !0, a.forEach(function(o) {
        o !== "selectionchange" && (ox.has(o) || yu(o, !1, n), yu(o, !0, n));
      });
      var l = n.nodeType === 9 ? n : n.ownerDocument;
      l === null || l[Ma] || (l[Ma] = !0, yu("selectionchange", !1, l));
    }
  }
  function qp(n, l, o, d) {
    switch (vp(l)) {
      case 1:
        var m = wb;
        break;
      case 4:
        m = Sb;
        break;
      default:
        m = tu;
    }
    o = m.bind(null, l, o, n), m = void 0, !Gs || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (m = !0), d ? m !== void 0 ? n.addEventListener(l, o, { capture: !0, passive: m }) : n.addEventListener(l, o, !0) : m !== void 0 ? n.addEventListener(l, o, { passive: m }) : n.addEventListener(l, o, !1);
  }
  function bu(n, l, o, d, m) {
    var y = d;
    if ((l & 1) === 0 && (l & 2) === 0 && d !== null) e: for (; ; ) {
      if (d === null) return;
      var E = d.tag;
      if (E === 3 || E === 4) {
        var P = d.stateNode.containerInfo;
        if (P === m || P.nodeType === 8 && P.parentNode === m) break;
        if (E === 4) for (E = d.return; E !== null; ) {
          var R = E.tag;
          if ((R === 3 || R === 4) && (R = E.stateNode.containerInfo, R === m || R.nodeType === 8 && R.parentNode === m)) return;
          E = E.return;
        }
        for (; P !== null; ) {
          if (E = Er(P), E === null) return;
          if (R = E.tag, R === 5 || R === 6) {
            d = y = E;
            continue e;
          }
          P = P.parentNode;
        }
      }
      d = d.return;
    }
    Jf(function() {
      var U = y, ee = Bs(o), te = [];
      e: {
        var J = Bp.get(n);
        if (J !== void 0) {
          var de = lu, pe = n;
          switch (n) {
            case "keypress":
              if (Pa(o) === 0) break e;
            case "keydown":
            case "keyup":
              de = jb;
              break;
            case "focusin":
              pe = "focus", de = ou;
              break;
            case "focusout":
              pe = "blur", de = ou;
              break;
            case "beforeblur":
            case "afterblur":
              de = ou;
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
              de = xp;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              de = Eb;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              de = Db;
              break;
            case Dp:
            case Op:
            case Vp:
              de = Nb;
              break;
            case Hp:
              de = Vb;
              break;
            case "scroll":
              de = Cb;
              break;
            case "wheel":
              de = Bb;
              break;
            case "copy":
            case "cut":
            case "paste":
              de = Fb;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              de = Sp;
          }
          var he = (l & 4) !== 0, lt = !he && n === "scroll", O = he ? J !== null ? J + "Capture" : null : J;
          he = [];
          for (var j = U, V; j !== null; ) {
            V = j;
            var le = V.stateNode;
            if (V.tag === 5 && le !== null && (V = le, O !== null && (le = Ul(j, O), le != null && he.push(ci(j, le, V)))), lt) break;
            j = j.return;
          }
          0 < he.length && (J = new de(J, pe, null, o, ee), te.push({ event: J, listeners: he }));
        }
      }
      if ((l & 7) === 0) {
        e: {
          if (J = n === "mouseover" || n === "pointerover", de = n === "mouseout" || n === "pointerout", J && o !== Hs && (pe = o.relatedTarget || o.fromElement) && (Er(pe) || pe[En])) break e;
          if ((de || J) && (J = ee.window === ee ? ee : (J = ee.ownerDocument) ? J.defaultView || J.parentWindow : window, de ? (pe = o.relatedTarget || o.toElement, de = U, pe = pe ? Er(pe) : null, pe !== null && (lt = $r(pe), pe !== lt || pe.tag !== 5 && pe.tag !== 6) && (pe = null)) : (de = null, pe = U), de !== pe)) {
            if (he = xp, le = "onMouseLeave", O = "onMouseEnter", j = "mouse", (n === "pointerout" || n === "pointerover") && (he = Sp, le = "onPointerLeave", O = "onPointerEnter", j = "pointer"), lt = de == null ? J : ul(de), V = pe == null ? J : ul(pe), J = new he(le, j + "leave", de, o, ee), J.target = lt, J.relatedTarget = V, le = null, Er(ee) === U && (he = new he(O, j + "enter", pe, o, ee), he.target = V, he.relatedTarget = lt, le = he), lt = le, de && pe) t: {
              for (he = de, O = pe, j = 0, V = he; V; V = ol(V)) j++;
              for (V = 0, le = O; le; le = ol(le)) V++;
              for (; 0 < j - V; ) he = ol(he), j--;
              for (; 0 < V - j; ) O = ol(O), V--;
              for (; j--; ) {
                if (he === O || O !== null && he === O.alternate) break t;
                he = ol(he), O = ol(O);
              }
              he = null;
            }
            else he = null;
            de !== null && Zp(te, J, de, he, !1), pe !== null && lt !== null && Zp(te, lt, pe, he, !0);
          }
        }
        e: {
          if (J = U ? ul(U) : window, de = J.nodeName && J.nodeName.toLowerCase(), de === "select" || de === "input" && J.type === "file") var ge = Xb;
          else if (Np(J)) if (Fp) ge = tx;
          else {
            ge = Jb;
            var be = Yb;
          }
          else (de = J.nodeName) && de.toLowerCase() === "input" && (J.type === "checkbox" || J.type === "radio") && (ge = ex);
          if (ge && (ge = ge(n, U))) {
            Pp(te, ge, o, ee);
            break e;
          }
          be && be(n, J, U), n === "focusout" && (be = J._wrapperState) && be.controlled && J.type === "number" && Yr(J, "number", J.value);
        }
        switch (be = U ? ul(U) : window, n) {
          case "focusin":
            (Np(be) || be.contentEditable === "true") && (il = be, pu = U, oi = null);
            break;
          case "focusout":
            oi = pu = il = null;
            break;
          case "mousedown":
            mu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            mu = !1, zp(te, o, ee);
            break;
          case "selectionchange":
            if (lx) break;
          case "keydown":
          case "keyup":
            zp(te, o, ee);
        }
        var xe;
        if (uu) e: {
          switch (n) {
            case "compositionstart":
              var we = "onCompositionStart";
              break e;
            case "compositionend":
              we = "onCompositionEnd";
              break e;
            case "compositionupdate":
              we = "onCompositionUpdate";
              break e;
          }
          we = void 0;
        }
        else ll ? kp(n, o) && (we = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (we = "onCompositionStart");
        we && (Cp && o.locale !== "ko" && (ll || we !== "onCompositionStart" ? we === "onCompositionEnd" && ll && (xe = yp()) : (qn = ee, ru = "value" in qn ? qn.value : qn.textContent, ll = !0)), be = Aa(U, we), 0 < be.length && (we = new wp(we, n, null, o, ee), te.push({ event: we, listeners: be }), xe ? we.data = xe : (xe = _p(o), xe !== null && (we.data = xe)))), (xe = Wb ? Gb(n, o) : qb(n, o)) && (U = Aa(U, "onBeforeInput"), 0 < U.length && (ee = new wp("onBeforeInput", "beforeinput", null, o, ee), te.push({ event: ee, listeners: U }), ee.data = xe));
      }
      Gp(te, l);
    });
  }
  function ci(n, l, o) {
    return { instance: n, listener: l, currentTarget: o };
  }
  function Aa(n, l) {
    for (var o = l + "Capture", d = []; n !== null; ) {
      var m = n, y = m.stateNode;
      m.tag === 5 && y !== null && (m = y, y = Ul(n, o), y != null && d.unshift(ci(n, y, m)), y = Ul(n, l), y != null && d.push(ci(n, y, m))), n = n.return;
    }
    return d;
  }
  function ol(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Zp(n, l, o, d, m) {
    for (var y = l._reactName, E = []; o !== null && o !== d; ) {
      var P = o, R = P.alternate, U = P.stateNode;
      if (R !== null && R === d) break;
      P.tag === 5 && U !== null && (P = U, m ? (R = Ul(o, y), R != null && E.unshift(ci(o, R, P))) : m || (R = Ul(o, y), R != null && E.push(ci(o, R, P)))), o = o.return;
    }
    E.length !== 0 && n.push({ event: l, listeners: E });
  }
  var sx = /\r\n?/g, ux = /\u0000|\uFFFD/g;
  function Qp(n) {
    return (typeof n == "string" ? n : "" + n).replace(sx, `
`).replace(ux, "");
  }
  function ja(n, l, o) {
    if (l = Qp(l), Qp(n) !== l && o) throw Error(r(425));
  }
  function za() {
  }
  var xu = null, wu = null;
  function Su(n, l) {
    return n === "textarea" || n === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var Cu = typeof setTimeout == "function" ? setTimeout : void 0, cx = typeof clearTimeout == "function" ? clearTimeout : void 0, Xp = typeof Promise == "function" ? Promise : void 0, dx = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xp < "u" ? function(n) {
    return Xp.resolve(null).then(n).catch(fx);
  } : Cu;
  function fx(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function $u(n, l) {
    var o = l, d = 0;
    do {
      var m = o.nextSibling;
      if (n.removeChild(o), m && m.nodeType === 8) if (o = m.data, o === "/$") {
        if (d === 0) {
          n.removeChild(m), ei(l);
          return;
        }
        d--;
      } else o !== "$" && o !== "$?" && o !== "$!" || d++;
      o = m;
    } while (o);
    ei(l);
  }
  function Qn(n) {
    for (; n != null; n = n.nextSibling) {
      var l = n.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (l = n.data, l === "$" || l === "$!" || l === "$?") break;
        if (l === "/$") return null;
      }
    }
    return n;
  }
  function Yp(n) {
    n = n.previousSibling;
    for (var l = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (l === 0) return n;
          l--;
        } else o === "/$" && l++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var sl = Math.random().toString(36).slice(2), hn = "__reactFiber$" + sl, di = "__reactProps$" + sl, En = "__reactContainer$" + sl, Eu = "__reactEvents$" + sl, px = "__reactListeners$" + sl, mx = "__reactHandles$" + sl;
  function Er(n) {
    var l = n[hn];
    if (l) return l;
    for (var o = n.parentNode; o; ) {
      if (l = o[En] || o[hn]) {
        if (o = l.alternate, l.child !== null || o !== null && o.child !== null) for (n = Yp(n); n !== null; ) {
          if (o = n[hn]) return o;
          n = Yp(n);
        }
        return l;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function fi(n) {
    return n = n[hn] || n[En], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ul(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(r(33));
  }
  function Ka(n) {
    return n[di] || null;
  }
  var ku = [], cl = -1;
  function Xn(n) {
    return { current: n };
  }
  function Ge(n) {
    0 > cl || (n.current = ku[cl], ku[cl] = null, cl--);
  }
  function He(n, l) {
    cl++, ku[cl] = n.current, n.current = l;
  }
  var Yn = {}, xt = Xn(Yn), kt = Xn(!1), kr = Yn;
  function dl(n, l) {
    var o = n.type.contextTypes;
    if (!o) return Yn;
    var d = n.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === l) return d.__reactInternalMemoizedMaskedChildContext;
    var m = {}, y;
    for (y in o) m[y] = l[y];
    return d && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = l, n.__reactInternalMemoizedMaskedChildContext = m), m;
  }
  function _t(n) {
    return n = n.childContextTypes, n != null;
  }
  function Da() {
    Ge(kt), Ge(xt);
  }
  function Jp(n, l, o) {
    if (xt.current !== Yn) throw Error(r(168));
    He(xt, l), He(kt, o);
  }
  function em(n, l, o) {
    var d = n.stateNode;
    if (l = l.childContextTypes, typeof d.getChildContext != "function") return o;
    d = d.getChildContext();
    for (var m in d) if (!(m in l)) throw Error(r(108, ve(n) || "Unknown", m));
    return W({}, o, d);
  }
  function Oa(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Yn, kr = xt.current, He(xt, n), He(kt, kt.current), !0;
  }
  function tm(n, l, o) {
    var d = n.stateNode;
    if (!d) throw Error(r(169));
    o ? (n = em(n, l, kr), d.__reactInternalMemoizedMergedChildContext = n, Ge(kt), Ge(xt), He(xt, n)) : Ge(kt), He(kt, o);
  }
  var kn = null, Va = !1, _u = !1;
  function nm(n) {
    kn === null ? kn = [n] : kn.push(n);
  }
  function hx(n) {
    Va = !0, nm(n);
  }
  function Jn() {
    if (!_u && kn !== null) {
      _u = !0;
      var n = 0, l = Ke;
      try {
        var o = kn;
        for (Ke = 1; n < o.length; n++) {
          var d = o[n];
          do
            d = d(!0);
          while (d !== null);
        }
        kn = null, Va = !1;
      } catch (m) {
        throw kn !== null && (kn = kn.slice(n + 1)), lp(Zs, Jn), m;
      } finally {
        Ke = l, _u = !1;
      }
    }
    return null;
  }
  var fl = [], pl = 0, Ha = null, Ba = 0, Ut = [], Wt = 0, _r = null, _n = 1, Nn = "";
  function Nr(n, l) {
    fl[pl++] = Ba, fl[pl++] = Ha, Ha = n, Ba = l;
  }
  function rm(n, l, o) {
    Ut[Wt++] = _n, Ut[Wt++] = Nn, Ut[Wt++] = _r, _r = n;
    var d = _n;
    n = Nn;
    var m = 32 - nn(d) - 1;
    d &= ~(1 << m), o += 1;
    var y = 32 - nn(l) + m;
    if (30 < y) {
      var E = m - m % 5;
      y = (d & (1 << E) - 1).toString(32), d >>= E, m -= E, _n = 1 << 32 - nn(l) + m | o << m | d, Nn = y + n;
    } else _n = 1 << y | o << m | d, Nn = n;
  }
  function Nu(n) {
    n.return !== null && (Nr(n, 1), rm(n, 1, 0));
  }
  function Pu(n) {
    for (; n === Ha; ) Ha = fl[--pl], fl[pl] = null, Ba = fl[--pl], fl[pl] = null;
    for (; n === _r; ) _r = Ut[--Wt], Ut[Wt] = null, Nn = Ut[--Wt], Ut[Wt] = null, _n = Ut[--Wt], Ut[Wt] = null;
  }
  var Ot = null, Vt = null, Qe = !1, ln = null;
  function lm(n, l) {
    var o = Qt(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = l, o.return = n, l = n.deletions, l === null ? (n.deletions = [o], n.flags |= 16) : l.push(o);
  }
  function im(n, l) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return l = l.nodeType !== 1 || o.toLowerCase() !== l.nodeName.toLowerCase() ? null : l, l !== null ? (n.stateNode = l, Ot = n, Vt = Qn(l.firstChild), !0) : !1;
      case 6:
        return l = n.pendingProps === "" || l.nodeType !== 3 ? null : l, l !== null ? (n.stateNode = l, Ot = n, Vt = null, !0) : !1;
      case 13:
        return l = l.nodeType !== 8 ? null : l, l !== null ? (o = _r !== null ? { id: _n, overflow: Nn } : null, n.memoizedState = { dehydrated: l, treeContext: o, retryLane: 1073741824 }, o = Qt(18, null, null, 0), o.stateNode = l, o.return = n, n.child = o, Ot = n, Vt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Fu(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Tu(n) {
    if (Qe) {
      var l = Vt;
      if (l) {
        var o = l;
        if (!im(n, l)) {
          if (Fu(n)) throw Error(r(418));
          l = Qn(o.nextSibling);
          var d = Ot;
          l && im(n, l) ? lm(d, o) : (n.flags = n.flags & -4097 | 2, Qe = !1, Ot = n);
        }
      } else {
        if (Fu(n)) throw Error(r(418));
        n.flags = n.flags & -4097 | 2, Qe = !1, Ot = n;
      }
    }
  }
  function am(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Ot = n;
  }
  function Ua(n) {
    if (n !== Ot) return !1;
    if (!Qe) return am(n), Qe = !0, !1;
    var l;
    if ((l = n.tag !== 3) && !(l = n.tag !== 5) && (l = n.type, l = l !== "head" && l !== "body" && !Su(n.type, n.memoizedProps)), l && (l = Vt)) {
      if (Fu(n)) throw om(), Error(r(418));
      for (; l; ) lm(n, l), l = Qn(l.nextSibling);
    }
    if (am(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(r(317));
      e: {
        for (n = n.nextSibling, l = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (l === 0) {
                Vt = Qn(n.nextSibling);
                break e;
              }
              l--;
            } else o !== "$" && o !== "$!" && o !== "$?" || l++;
          }
          n = n.nextSibling;
        }
        Vt = null;
      }
    } else Vt = Ot ? Qn(n.stateNode.nextSibling) : null;
    return !0;
  }
  function om() {
    for (var n = Vt; n; ) n = Qn(n.nextSibling);
  }
  function ml() {
    Vt = Ot = null, Qe = !1;
  }
  function Ru(n) {
    ln === null ? ln = [n] : ln.push(n);
  }
  var gx = K.ReactCurrentBatchConfig;
  function pi(n, l, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1) throw Error(r(309));
          var d = o.stateNode;
        }
        if (!d) throw Error(r(147, n));
        var m = d, y = "" + n;
        return l !== null && l.ref !== null && typeof l.ref == "function" && l.ref._stringRef === y ? l.ref : (l = function(E) {
          var P = m.refs;
          E === null ? delete P[y] : P[y] = E;
        }, l._stringRef = y, l);
      }
      if (typeof n != "string") throw Error(r(284));
      if (!o._owner) throw Error(r(290, n));
    }
    return n;
  }
  function Wa(n, l) {
    throw n = Object.prototype.toString.call(l), Error(r(31, n === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : n));
  }
  function sm(n) {
    var l = n._init;
    return l(n._payload);
  }
  function um(n) {
    function l(O, j) {
      if (n) {
        var V = O.deletions;
        V === null ? (O.deletions = [j], O.flags |= 16) : V.push(j);
      }
    }
    function o(O, j) {
      if (!n) return null;
      for (; j !== null; ) l(O, j), j = j.sibling;
      return null;
    }
    function d(O, j) {
      for (O = /* @__PURE__ */ new Map(); j !== null; ) j.key !== null ? O.set(j.key, j) : O.set(j.index, j), j = j.sibling;
      return O;
    }
    function m(O, j) {
      return O = or(O, j), O.index = 0, O.sibling = null, O;
    }
    function y(O, j, V) {
      return O.index = V, n ? (V = O.alternate, V !== null ? (V = V.index, V < j ? (O.flags |= 2, j) : V) : (O.flags |= 2, j)) : (O.flags |= 1048576, j);
    }
    function E(O) {
      return n && O.alternate === null && (O.flags |= 2), O;
    }
    function P(O, j, V, le) {
      return j === null || j.tag !== 6 ? (j = Cc(V, O.mode, le), j.return = O, j) : (j = m(j, V), j.return = O, j);
    }
    function R(O, j, V, le) {
      var ge = V.type;
      return ge === Q ? ee(O, j, V.props.children, le, V.key) : j !== null && (j.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === I && sm(ge) === j.type) ? (le = m(j, V.props), le.ref = pi(O, j, V), le.return = O, le) : (le = vo(V.type, V.key, V.props, null, O.mode, le), le.ref = pi(O, j, V), le.return = O, le);
    }
    function U(O, j, V, le) {
      return j === null || j.tag !== 4 || j.stateNode.containerInfo !== V.containerInfo || j.stateNode.implementation !== V.implementation ? (j = $c(V, O.mode, le), j.return = O, j) : (j = m(j, V.children || []), j.return = O, j);
    }
    function ee(O, j, V, le, ge) {
      return j === null || j.tag !== 7 ? (j = Ar(V, O.mode, le, ge), j.return = O, j) : (j = m(j, V), j.return = O, j);
    }
    function te(O, j, V) {
      if (typeof j == "string" && j !== "" || typeof j == "number") return j = Cc("" + j, O.mode, V), j.return = O, j;
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case Y:
            return V = vo(j.type, j.key, j.props, null, O.mode, V), V.ref = pi(O, null, j), V.return = O, V;
          case re:
            return j = $c(j, O.mode, V), j.return = O, j;
          case I:
            var le = j._init;
            return te(O, le(j._payload), V);
        }
        if (Sr(j) || L(j)) return j = Ar(j, O.mode, V, null), j.return = O, j;
        Wa(O, j);
      }
      return null;
    }
    function J(O, j, V, le) {
      var ge = j !== null ? j.key : null;
      if (typeof V == "string" && V !== "" || typeof V == "number") return ge !== null ? null : P(O, j, "" + V, le);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case Y:
            return V.key === ge ? R(O, j, V, le) : null;
          case re:
            return V.key === ge ? U(O, j, V, le) : null;
          case I:
            return ge = V._init, J(
              O,
              j,
              ge(V._payload),
              le
            );
        }
        if (Sr(V) || L(V)) return ge !== null ? null : ee(O, j, V, le, null);
        Wa(O, V);
      }
      return null;
    }
    function de(O, j, V, le, ge) {
      if (typeof le == "string" && le !== "" || typeof le == "number") return O = O.get(V) || null, P(j, O, "" + le, ge);
      if (typeof le == "object" && le !== null) {
        switch (le.$$typeof) {
          case Y:
            return O = O.get(le.key === null ? V : le.key) || null, R(j, O, le, ge);
          case re:
            return O = O.get(le.key === null ? V : le.key) || null, U(j, O, le, ge);
          case I:
            var be = le._init;
            return de(O, j, V, be(le._payload), ge);
        }
        if (Sr(le) || L(le)) return O = O.get(V) || null, ee(j, O, le, ge, null);
        Wa(j, le);
      }
      return null;
    }
    function pe(O, j, V, le) {
      for (var ge = null, be = null, xe = j, we = j = 0, mt = null; xe !== null && we < V.length; we++) {
        xe.index > we ? (mt = xe, xe = null) : mt = xe.sibling;
        var Re = J(O, xe, V[we], le);
        if (Re === null) {
          xe === null && (xe = mt);
          break;
        }
        n && xe && Re.alternate === null && l(O, xe), j = y(Re, j, we), be === null ? ge = Re : be.sibling = Re, be = Re, xe = mt;
      }
      if (we === V.length) return o(O, xe), Qe && Nr(O, we), ge;
      if (xe === null) {
        for (; we < V.length; we++) xe = te(O, V[we], le), xe !== null && (j = y(xe, j, we), be === null ? ge = xe : be.sibling = xe, be = xe);
        return Qe && Nr(O, we), ge;
      }
      for (xe = d(O, xe); we < V.length; we++) mt = de(xe, O, we, V[we], le), mt !== null && (n && mt.alternate !== null && xe.delete(mt.key === null ? we : mt.key), j = y(mt, j, we), be === null ? ge = mt : be.sibling = mt, be = mt);
      return n && xe.forEach(function(sr) {
        return l(O, sr);
      }), Qe && Nr(O, we), ge;
    }
    function he(O, j, V, le) {
      var ge = L(V);
      if (typeof ge != "function") throw Error(r(150));
      if (V = ge.call(V), V == null) throw Error(r(151));
      for (var be = ge = null, xe = j, we = j = 0, mt = null, Re = V.next(); xe !== null && !Re.done; we++, Re = V.next()) {
        xe.index > we ? (mt = xe, xe = null) : mt = xe.sibling;
        var sr = J(O, xe, Re.value, le);
        if (sr === null) {
          xe === null && (xe = mt);
          break;
        }
        n && xe && sr.alternate === null && l(O, xe), j = y(sr, j, we), be === null ? ge = sr : be.sibling = sr, be = sr, xe = mt;
      }
      if (Re.done) return o(
        O,
        xe
      ), Qe && Nr(O, we), ge;
      if (xe === null) {
        for (; !Re.done; we++, Re = V.next()) Re = te(O, Re.value, le), Re !== null && (j = y(Re, j, we), be === null ? ge = Re : be.sibling = Re, be = Re);
        return Qe && Nr(O, we), ge;
      }
      for (xe = d(O, xe); !Re.done; we++, Re = V.next()) Re = de(xe, O, we, Re.value, le), Re !== null && (n && Re.alternate !== null && xe.delete(Re.key === null ? we : Re.key), j = y(Re, j, we), be === null ? ge = Re : be.sibling = Re, be = Re);
      return n && xe.forEach(function(Zx) {
        return l(O, Zx);
      }), Qe && Nr(O, we), ge;
    }
    function lt(O, j, V, le) {
      if (typeof V == "object" && V !== null && V.type === Q && V.key === null && (V = V.props.children), typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case Y:
            e: {
              for (var ge = V.key, be = j; be !== null; ) {
                if (be.key === ge) {
                  if (ge = V.type, ge === Q) {
                    if (be.tag === 7) {
                      o(O, be.sibling), j = m(be, V.props.children), j.return = O, O = j;
                      break e;
                    }
                  } else if (be.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === I && sm(ge) === be.type) {
                    o(O, be.sibling), j = m(be, V.props), j.ref = pi(O, be, V), j.return = O, O = j;
                    break e;
                  }
                  o(O, be);
                  break;
                } else l(O, be);
                be = be.sibling;
              }
              V.type === Q ? (j = Ar(V.props.children, O.mode, le, V.key), j.return = O, O = j) : (le = vo(V.type, V.key, V.props, null, O.mode, le), le.ref = pi(O, j, V), le.return = O, O = le);
            }
            return E(O);
          case re:
            e: {
              for (be = V.key; j !== null; ) {
                if (j.key === be) if (j.tag === 4 && j.stateNode.containerInfo === V.containerInfo && j.stateNode.implementation === V.implementation) {
                  o(O, j.sibling), j = m(j, V.children || []), j.return = O, O = j;
                  break e;
                } else {
                  o(O, j);
                  break;
                }
                else l(O, j);
                j = j.sibling;
              }
              j = $c(V, O.mode, le), j.return = O, O = j;
            }
            return E(O);
          case I:
            return be = V._init, lt(O, j, be(V._payload), le);
        }
        if (Sr(V)) return pe(O, j, V, le);
        if (L(V)) return he(O, j, V, le);
        Wa(O, V);
      }
      return typeof V == "string" && V !== "" || typeof V == "number" ? (V = "" + V, j !== null && j.tag === 6 ? (o(O, j.sibling), j = m(j, V), j.return = O, O = j) : (o(O, j), j = Cc(V, O.mode, le), j.return = O, O = j), E(O)) : o(O, j);
    }
    return lt;
  }
  var hl = um(!0), cm = um(!1), Ga = Xn(null), qa = null, gl = null, Lu = null;
  function Iu() {
    Lu = gl = qa = null;
  }
  function Mu(n) {
    var l = Ga.current;
    Ge(Ga), n._currentValue = l;
  }
  function Au(n, l, o) {
    for (; n !== null; ) {
      var d = n.alternate;
      if ((n.childLanes & l) !== l ? (n.childLanes |= l, d !== null && (d.childLanes |= l)) : d !== null && (d.childLanes & l) !== l && (d.childLanes |= l), n === o) break;
      n = n.return;
    }
  }
  function vl(n, l) {
    qa = n, Lu = gl = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & l) !== 0 && (Nt = !0), n.firstContext = null);
  }
  function Gt(n) {
    var l = n._currentValue;
    if (Lu !== n) if (n = { context: n, memoizedValue: l, next: null }, gl === null) {
      if (qa === null) throw Error(r(308));
      gl = n, qa.dependencies = { lanes: 0, firstContext: n };
    } else gl = gl.next = n;
    return l;
  }
  var Pr = null;
  function ju(n) {
    Pr === null ? Pr = [n] : Pr.push(n);
  }
  function dm(n, l, o, d) {
    var m = l.interleaved;
    return m === null ? (o.next = o, ju(l)) : (o.next = m.next, m.next = o), l.interleaved = o, Pn(n, d);
  }
  function Pn(n, l) {
    n.lanes |= l;
    var o = n.alternate;
    for (o !== null && (o.lanes |= l), o = n, n = n.return; n !== null; ) n.childLanes |= l, o = n.alternate, o !== null && (o.childLanes |= l), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var er = !1;
  function zu(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function fm(n, l) {
    n = n.updateQueue, l.updateQueue === n && (l.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Fn(n, l) {
    return { eventTime: n, lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function tr(n, l, o) {
    var d = n.updateQueue;
    if (d === null) return null;
    if (d = d.shared, (Fe & 2) !== 0) {
      var m = d.pending;
      return m === null ? l.next = l : (l.next = m.next, m.next = l), d.pending = l, Pn(n, o);
    }
    return m = d.interleaved, m === null ? (l.next = l, ju(d)) : (l.next = m.next, m.next = l), d.interleaved = l, Pn(n, o);
  }
  function Za(n, l, o) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (o & 4194240) !== 0)) {
      var d = l.lanes;
      d &= n.pendingLanes, o |= d, l.lanes = o, Ys(n, o);
    }
  }
  function pm(n, l) {
    var o = n.updateQueue, d = n.alternate;
    if (d !== null && (d = d.updateQueue, o === d)) {
      var m = null, y = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var E = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          y === null ? m = y = E : y = y.next = E, o = o.next;
        } while (o !== null);
        y === null ? m = y = l : y = y.next = l;
      } else m = y = l;
      o = { baseState: d.baseState, firstBaseUpdate: m, lastBaseUpdate: y, shared: d.shared, effects: d.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = l : n.next = l, o.lastBaseUpdate = l;
  }
  function Qa(n, l, o, d) {
    var m = n.updateQueue;
    er = !1;
    var y = m.firstBaseUpdate, E = m.lastBaseUpdate, P = m.shared.pending;
    if (P !== null) {
      m.shared.pending = null;
      var R = P, U = R.next;
      R.next = null, E === null ? y = U : E.next = U, E = R;
      var ee = n.alternate;
      ee !== null && (ee = ee.updateQueue, P = ee.lastBaseUpdate, P !== E && (P === null ? ee.firstBaseUpdate = U : P.next = U, ee.lastBaseUpdate = R));
    }
    if (y !== null) {
      var te = m.baseState;
      E = 0, ee = U = R = null, P = y;
      do {
        var J = P.lane, de = P.eventTime;
        if ((d & J) === J) {
          ee !== null && (ee = ee.next = {
            eventTime: de,
            lane: 0,
            tag: P.tag,
            payload: P.payload,
            callback: P.callback,
            next: null
          });
          e: {
            var pe = n, he = P;
            switch (J = l, de = o, he.tag) {
              case 1:
                if (pe = he.payload, typeof pe == "function") {
                  te = pe.call(de, te, J);
                  break e;
                }
                te = pe;
                break e;
              case 3:
                pe.flags = pe.flags & -65537 | 128;
              case 0:
                if (pe = he.payload, J = typeof pe == "function" ? pe.call(de, te, J) : pe, J == null) break e;
                te = W({}, te, J);
                break e;
              case 2:
                er = !0;
            }
          }
          P.callback !== null && P.lane !== 0 && (n.flags |= 64, J = m.effects, J === null ? m.effects = [P] : J.push(P));
        } else de = { eventTime: de, lane: J, tag: P.tag, payload: P.payload, callback: P.callback, next: null }, ee === null ? (U = ee = de, R = te) : ee = ee.next = de, E |= J;
        if (P = P.next, P === null) {
          if (P = m.shared.pending, P === null) break;
          J = P, P = J.next, J.next = null, m.lastBaseUpdate = J, m.shared.pending = null;
        }
      } while (!0);
      if (ee === null && (R = te), m.baseState = R, m.firstBaseUpdate = U, m.lastBaseUpdate = ee, l = m.shared.interleaved, l !== null) {
        m = l;
        do
          E |= m.lane, m = m.next;
        while (m !== l);
      } else y === null && (m.shared.lanes = 0);
      Rr |= E, n.lanes = E, n.memoizedState = te;
    }
  }
  function mm(n, l, o) {
    if (n = l.effects, l.effects = null, n !== null) for (l = 0; l < n.length; l++) {
      var d = n[l], m = d.callback;
      if (m !== null) {
        if (d.callback = null, d = o, typeof m != "function") throw Error(r(191, m));
        m.call(d);
      }
    }
  }
  var mi = {}, gn = Xn(mi), hi = Xn(mi), gi = Xn(mi);
  function Fr(n) {
    if (n === mi) throw Error(r(174));
    return n;
  }
  function Ku(n, l) {
    switch (He(gi, l), He(hi, n), He(gn, mi), n = l.nodeType, n) {
      case 9:
      case 11:
        l = (l = l.documentElement) ? l.namespaceURI : Ds(null, "");
        break;
      default:
        n = n === 8 ? l.parentNode : l, l = n.namespaceURI || null, n = n.tagName, l = Ds(l, n);
    }
    Ge(gn), He(gn, l);
  }
  function yl() {
    Ge(gn), Ge(hi), Ge(gi);
  }
  function hm(n) {
    Fr(gi.current);
    var l = Fr(gn.current), o = Ds(l, n.type);
    l !== o && (He(hi, n), He(gn, o));
  }
  function Du(n) {
    hi.current === n && (Ge(gn), Ge(hi));
  }
  var Je = Xn(0);
  function Xa(n) {
    for (var l = n; l !== null; ) {
      if (l.tag === 13) {
        var o = l.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!")) return l;
      } else if (l.tag === 19 && l.memoizedProps.revealOrder !== void 0) {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === n) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === n) return null;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    return null;
  }
  var Ou = [];
  function Vu() {
    for (var n = 0; n < Ou.length; n++) Ou[n]._workInProgressVersionPrimary = null;
    Ou.length = 0;
  }
  var Ya = K.ReactCurrentDispatcher, Hu = K.ReactCurrentBatchConfig, Tr = 0, et = null, ct = null, ft = null, Ja = !1, vi = !1, yi = 0, vx = 0;
  function wt() {
    throw Error(r(321));
  }
  function Bu(n, l) {
    if (l === null) return !1;
    for (var o = 0; o < l.length && o < n.length; o++) if (!rn(n[o], l[o])) return !1;
    return !0;
  }
  function Uu(n, l, o, d, m, y) {
    if (Tr = y, et = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, Ya.current = n === null || n.memoizedState === null ? wx : Sx, n = o(d, m), vi) {
      y = 0;
      do {
        if (vi = !1, yi = 0, 25 <= y) throw Error(r(301));
        y += 1, ft = ct = null, l.updateQueue = null, Ya.current = Cx, n = o(d, m);
      } while (vi);
    }
    if (Ya.current = no, l = ct !== null && ct.next !== null, Tr = 0, ft = ct = et = null, Ja = !1, l) throw Error(r(300));
    return n;
  }
  function Wu() {
    var n = yi !== 0;
    return yi = 0, n;
  }
  function vn() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ft === null ? et.memoizedState = ft = n : ft = ft.next = n, ft;
  }
  function qt() {
    if (ct === null) {
      var n = et.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = ct.next;
    var l = ft === null ? et.memoizedState : ft.next;
    if (l !== null) ft = l, ct = n;
    else {
      if (n === null) throw Error(r(310));
      ct = n, n = { memoizedState: ct.memoizedState, baseState: ct.baseState, baseQueue: ct.baseQueue, queue: ct.queue, next: null }, ft === null ? et.memoizedState = ft = n : ft = ft.next = n;
    }
    return ft;
  }
  function bi(n, l) {
    return typeof l == "function" ? l(n) : l;
  }
  function Gu(n) {
    var l = qt(), o = l.queue;
    if (o === null) throw Error(r(311));
    o.lastRenderedReducer = n;
    var d = ct, m = d.baseQueue, y = o.pending;
    if (y !== null) {
      if (m !== null) {
        var E = m.next;
        m.next = y.next, y.next = E;
      }
      d.baseQueue = m = y, o.pending = null;
    }
    if (m !== null) {
      y = m.next, d = d.baseState;
      var P = E = null, R = null, U = y;
      do {
        var ee = U.lane;
        if ((Tr & ee) === ee) R !== null && (R = R.next = { lane: 0, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), d = U.hasEagerState ? U.eagerState : n(d, U.action);
        else {
          var te = {
            lane: ee,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          };
          R === null ? (P = R = te, E = d) : R = R.next = te, et.lanes |= ee, Rr |= ee;
        }
        U = U.next;
      } while (U !== null && U !== y);
      R === null ? E = d : R.next = P, rn(d, l.memoizedState) || (Nt = !0), l.memoizedState = d, l.baseState = E, l.baseQueue = R, o.lastRenderedState = d;
    }
    if (n = o.interleaved, n !== null) {
      m = n;
      do
        y = m.lane, et.lanes |= y, Rr |= y, m = m.next;
      while (m !== n);
    } else m === null && (o.lanes = 0);
    return [l.memoizedState, o.dispatch];
  }
  function qu(n) {
    var l = qt(), o = l.queue;
    if (o === null) throw Error(r(311));
    o.lastRenderedReducer = n;
    var d = o.dispatch, m = o.pending, y = l.memoizedState;
    if (m !== null) {
      o.pending = null;
      var E = m = m.next;
      do
        y = n(y, E.action), E = E.next;
      while (E !== m);
      rn(y, l.memoizedState) || (Nt = !0), l.memoizedState = y, l.baseQueue === null && (l.baseState = y), o.lastRenderedState = y;
    }
    return [y, d];
  }
  function gm() {
  }
  function vm(n, l) {
    var o = et, d = qt(), m = l(), y = !rn(d.memoizedState, m);
    if (y && (d.memoizedState = m, Nt = !0), d = d.queue, Zu(xm.bind(null, o, d, n), [n]), d.getSnapshot !== l || y || ft !== null && ft.memoizedState.tag & 1) {
      if (o.flags |= 2048, xi(9, bm.bind(null, o, d, m, l), void 0, null), pt === null) throw Error(r(349));
      (Tr & 30) !== 0 || ym(o, l, m);
    }
    return m;
  }
  function ym(n, l, o) {
    n.flags |= 16384, n = { getSnapshot: l, value: o }, l = et.updateQueue, l === null ? (l = { lastEffect: null, stores: null }, et.updateQueue = l, l.stores = [n]) : (o = l.stores, o === null ? l.stores = [n] : o.push(n));
  }
  function bm(n, l, o, d) {
    l.value = o, l.getSnapshot = d, wm(l) && Sm(n);
  }
  function xm(n, l, o) {
    return o(function() {
      wm(l) && Sm(n);
    });
  }
  function wm(n) {
    var l = n.getSnapshot;
    n = n.value;
    try {
      var o = l();
      return !rn(n, o);
    } catch {
      return !0;
    }
  }
  function Sm(n) {
    var l = Pn(n, 1);
    l !== null && un(l, n, 1, -1);
  }
  function Cm(n) {
    var l = vn();
    return typeof n == "function" && (n = n()), l.memoizedState = l.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: bi, lastRenderedState: n }, l.queue = n, n = n.dispatch = xx.bind(null, et, n), [l.memoizedState, n];
  }
  function xi(n, l, o, d) {
    return n = { tag: n, create: l, destroy: o, deps: d, next: null }, l = et.updateQueue, l === null ? (l = { lastEffect: null, stores: null }, et.updateQueue = l, l.lastEffect = n.next = n) : (o = l.lastEffect, o === null ? l.lastEffect = n.next = n : (d = o.next, o.next = n, n.next = d, l.lastEffect = n)), n;
  }
  function $m() {
    return qt().memoizedState;
  }
  function eo(n, l, o, d) {
    var m = vn();
    et.flags |= n, m.memoizedState = xi(1 | l, o, void 0, d === void 0 ? null : d);
  }
  function to(n, l, o, d) {
    var m = qt();
    d = d === void 0 ? null : d;
    var y = void 0;
    if (ct !== null) {
      var E = ct.memoizedState;
      if (y = E.destroy, d !== null && Bu(d, E.deps)) {
        m.memoizedState = xi(l, o, y, d);
        return;
      }
    }
    et.flags |= n, m.memoizedState = xi(1 | l, o, y, d);
  }
  function Em(n, l) {
    return eo(8390656, 8, n, l);
  }
  function Zu(n, l) {
    return to(2048, 8, n, l);
  }
  function km(n, l) {
    return to(4, 2, n, l);
  }
  function _m(n, l) {
    return to(4, 4, n, l);
  }
  function Nm(n, l) {
    if (typeof l == "function") return n = n(), l(n), function() {
      l(null);
    };
    if (l != null) return n = n(), l.current = n, function() {
      l.current = null;
    };
  }
  function Pm(n, l, o) {
    return o = o != null ? o.concat([n]) : null, to(4, 4, Nm.bind(null, l, n), o);
  }
  function Qu() {
  }
  function Fm(n, l) {
    var o = qt();
    l = l === void 0 ? null : l;
    var d = o.memoizedState;
    return d !== null && l !== null && Bu(l, d[1]) ? d[0] : (o.memoizedState = [n, l], n);
  }
  function Tm(n, l) {
    var o = qt();
    l = l === void 0 ? null : l;
    var d = o.memoizedState;
    return d !== null && l !== null && Bu(l, d[1]) ? d[0] : (n = n(), o.memoizedState = [n, l], n);
  }
  function Rm(n, l, o) {
    return (Tr & 21) === 0 ? (n.baseState && (n.baseState = !1, Nt = !0), n.memoizedState = o) : (rn(o, l) || (o = sp(), et.lanes |= o, Rr |= o, n.baseState = !0), l);
  }
  function yx(n, l) {
    var o = Ke;
    Ke = o !== 0 && 4 > o ? o : 4, n(!0);
    var d = Hu.transition;
    Hu.transition = {};
    try {
      n(!1), l();
    } finally {
      Ke = o, Hu.transition = d;
    }
  }
  function Lm() {
    return qt().memoizedState;
  }
  function bx(n, l, o) {
    var d = ir(n);
    if (o = { lane: d, action: o, hasEagerState: !1, eagerState: null, next: null }, Im(n)) Mm(l, o);
    else if (o = dm(n, l, o, d), o !== null) {
      var m = Et();
      un(o, n, d, m), Am(o, l, d);
    }
  }
  function xx(n, l, o) {
    var d = ir(n), m = { lane: d, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (Im(n)) Mm(l, m);
    else {
      var y = n.alternate;
      if (n.lanes === 0 && (y === null || y.lanes === 0) && (y = l.lastRenderedReducer, y !== null)) try {
        var E = l.lastRenderedState, P = y(E, o);
        if (m.hasEagerState = !0, m.eagerState = P, rn(P, E)) {
          var R = l.interleaved;
          R === null ? (m.next = m, ju(l)) : (m.next = R.next, R.next = m), l.interleaved = m;
          return;
        }
      } catch {
      } finally {
      }
      o = dm(n, l, m, d), o !== null && (m = Et(), un(o, n, d, m), Am(o, l, d));
    }
  }
  function Im(n) {
    var l = n.alternate;
    return n === et || l !== null && l === et;
  }
  function Mm(n, l) {
    vi = Ja = !0;
    var o = n.pending;
    o === null ? l.next = l : (l.next = o.next, o.next = l), n.pending = l;
  }
  function Am(n, l, o) {
    if ((o & 4194240) !== 0) {
      var d = l.lanes;
      d &= n.pendingLanes, o |= d, l.lanes = o, Ys(n, o);
    }
  }
  var no = { readContext: Gt, useCallback: wt, useContext: wt, useEffect: wt, useImperativeHandle: wt, useInsertionEffect: wt, useLayoutEffect: wt, useMemo: wt, useReducer: wt, useRef: wt, useState: wt, useDebugValue: wt, useDeferredValue: wt, useTransition: wt, useMutableSource: wt, useSyncExternalStore: wt, useId: wt, unstable_isNewReconciler: !1 }, wx = { readContext: Gt, useCallback: function(n, l) {
    return vn().memoizedState = [n, l === void 0 ? null : l], n;
  }, useContext: Gt, useEffect: Em, useImperativeHandle: function(n, l, o) {
    return o = o != null ? o.concat([n]) : null, eo(
      4194308,
      4,
      Nm.bind(null, l, n),
      o
    );
  }, useLayoutEffect: function(n, l) {
    return eo(4194308, 4, n, l);
  }, useInsertionEffect: function(n, l) {
    return eo(4, 2, n, l);
  }, useMemo: function(n, l) {
    var o = vn();
    return l = l === void 0 ? null : l, n = n(), o.memoizedState = [n, l], n;
  }, useReducer: function(n, l, o) {
    var d = vn();
    return l = o !== void 0 ? o(l) : l, d.memoizedState = d.baseState = l, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: l }, d.queue = n, n = n.dispatch = bx.bind(null, et, n), [d.memoizedState, n];
  }, useRef: function(n) {
    var l = vn();
    return n = { current: n }, l.memoizedState = n;
  }, useState: Cm, useDebugValue: Qu, useDeferredValue: function(n) {
    return vn().memoizedState = n;
  }, useTransition: function() {
    var n = Cm(!1), l = n[0];
    return n = yx.bind(null, n[1]), vn().memoizedState = n, [l, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, l, o) {
    var d = et, m = vn();
    if (Qe) {
      if (o === void 0) throw Error(r(407));
      o = o();
    } else {
      if (o = l(), pt === null) throw Error(r(349));
      (Tr & 30) !== 0 || ym(d, l, o);
    }
    m.memoizedState = o;
    var y = { value: o, getSnapshot: l };
    return m.queue = y, Em(xm.bind(
      null,
      d,
      y,
      n
    ), [n]), d.flags |= 2048, xi(9, bm.bind(null, d, y, o, l), void 0, null), o;
  }, useId: function() {
    var n = vn(), l = pt.identifierPrefix;
    if (Qe) {
      var o = Nn, d = _n;
      o = (d & ~(1 << 32 - nn(d) - 1)).toString(32) + o, l = ":" + l + "R" + o, o = yi++, 0 < o && (l += "H" + o.toString(32)), l += ":";
    } else o = vx++, l = ":" + l + "r" + o.toString(32) + ":";
    return n.memoizedState = l;
  }, unstable_isNewReconciler: !1 }, Sx = {
    readContext: Gt,
    useCallback: Fm,
    useContext: Gt,
    useEffect: Zu,
    useImperativeHandle: Pm,
    useInsertionEffect: km,
    useLayoutEffect: _m,
    useMemo: Tm,
    useReducer: Gu,
    useRef: $m,
    useState: function() {
      return Gu(bi);
    },
    useDebugValue: Qu,
    useDeferredValue: function(n) {
      var l = qt();
      return Rm(l, ct.memoizedState, n);
    },
    useTransition: function() {
      var n = Gu(bi)[0], l = qt().memoizedState;
      return [n, l];
    },
    useMutableSource: gm,
    useSyncExternalStore: vm,
    useId: Lm,
    unstable_isNewReconciler: !1
  }, Cx = { readContext: Gt, useCallback: Fm, useContext: Gt, useEffect: Zu, useImperativeHandle: Pm, useInsertionEffect: km, useLayoutEffect: _m, useMemo: Tm, useReducer: qu, useRef: $m, useState: function() {
    return qu(bi);
  }, useDebugValue: Qu, useDeferredValue: function(n) {
    var l = qt();
    return ct === null ? l.memoizedState = n : Rm(l, ct.memoizedState, n);
  }, useTransition: function() {
    var n = qu(bi)[0], l = qt().memoizedState;
    return [n, l];
  }, useMutableSource: gm, useSyncExternalStore: vm, useId: Lm, unstable_isNewReconciler: !1 };
  function an(n, l) {
    if (n && n.defaultProps) {
      l = W({}, l), n = n.defaultProps;
      for (var o in n) l[o] === void 0 && (l[o] = n[o]);
      return l;
    }
    return l;
  }
  function Xu(n, l, o, d) {
    l = n.memoizedState, o = o(d, l), o = o == null ? l : W({}, l, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var ro = { isMounted: function(n) {
    return (n = n._reactInternals) ? $r(n) === n : !1;
  }, enqueueSetState: function(n, l, o) {
    n = n._reactInternals;
    var d = Et(), m = ir(n), y = Fn(d, m);
    y.payload = l, o != null && (y.callback = o), l = tr(n, y, m), l !== null && (un(l, n, m, d), Za(l, n, m));
  }, enqueueReplaceState: function(n, l, o) {
    n = n._reactInternals;
    var d = Et(), m = ir(n), y = Fn(d, m);
    y.tag = 1, y.payload = l, o != null && (y.callback = o), l = tr(n, y, m), l !== null && (un(l, n, m, d), Za(l, n, m));
  }, enqueueForceUpdate: function(n, l) {
    n = n._reactInternals;
    var o = Et(), d = ir(n), m = Fn(o, d);
    m.tag = 2, l != null && (m.callback = l), l = tr(n, m, d), l !== null && (un(l, n, d, o), Za(l, n, d));
  } };
  function jm(n, l, o, d, m, y, E) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(d, y, E) : l.prototype && l.prototype.isPureReactComponent ? !ai(o, d) || !ai(m, y) : !0;
  }
  function zm(n, l, o) {
    var d = !1, m = Yn, y = l.contextType;
    return typeof y == "object" && y !== null ? y = Gt(y) : (m = _t(l) ? kr : xt.current, d = l.contextTypes, y = (d = d != null) ? dl(n, m) : Yn), l = new l(o, y), n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, l.updater = ro, n.stateNode = l, l._reactInternals = n, d && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = m, n.__reactInternalMemoizedMaskedChildContext = y), l;
  }
  function Km(n, l, o, d) {
    n = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(o, d), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(o, d), l.state !== n && ro.enqueueReplaceState(l, l.state, null);
  }
  function Yu(n, l, o, d) {
    var m = n.stateNode;
    m.props = o, m.state = n.memoizedState, m.refs = {}, zu(n);
    var y = l.contextType;
    typeof y == "object" && y !== null ? m.context = Gt(y) : (y = _t(l) ? kr : xt.current, m.context = dl(n, y)), m.state = n.memoizedState, y = l.getDerivedStateFromProps, typeof y == "function" && (Xu(n, l, y, o), m.state = n.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof m.getSnapshotBeforeUpdate == "function" || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (l = m.state, typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount(), l !== m.state && ro.enqueueReplaceState(m, m.state, null), Qa(n, o, m, d), m.state = n.memoizedState), typeof m.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function bl(n, l) {
    try {
      var o = "", d = l;
      do
        o += q(d), d = d.return;
      while (d);
      var m = o;
    } catch (y) {
      m = `
Error generating stack: ` + y.message + `
` + y.stack;
    }
    return { value: n, source: l, stack: m, digest: null };
  }
  function Ju(n, l, o) {
    return { value: n, source: null, stack: o ?? null, digest: l ?? null };
  }
  function ec(n, l) {
    try {
      console.error(l.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var $x = typeof WeakMap == "function" ? WeakMap : Map;
  function Dm(n, l, o) {
    o = Fn(-1, o), o.tag = 3, o.payload = { element: null };
    var d = l.value;
    return o.callback = function() {
      co || (co = !0, hc = d), ec(n, l);
    }, o;
  }
  function Om(n, l, o) {
    o = Fn(-1, o), o.tag = 3;
    var d = n.type.getDerivedStateFromError;
    if (typeof d == "function") {
      var m = l.value;
      o.payload = function() {
        return d(m);
      }, o.callback = function() {
        ec(n, l);
      };
    }
    var y = n.stateNode;
    return y !== null && typeof y.componentDidCatch == "function" && (o.callback = function() {
      ec(n, l), typeof d != "function" && (rr === null ? rr = /* @__PURE__ */ new Set([this]) : rr.add(this));
      var E = l.stack;
      this.componentDidCatch(l.value, { componentStack: E !== null ? E : "" });
    }), o;
  }
  function Vm(n, l, o) {
    var d = n.pingCache;
    if (d === null) {
      d = n.pingCache = new $x();
      var m = /* @__PURE__ */ new Set();
      d.set(l, m);
    } else m = d.get(l), m === void 0 && (m = /* @__PURE__ */ new Set(), d.set(l, m));
    m.has(o) || (m.add(o), n = zx.bind(null, n, l, o), l.then(n, n));
  }
  function Hm(n) {
    do {
      var l;
      if ((l = n.tag === 13) && (l = n.memoizedState, l = l !== null ? l.dehydrated !== null : !0), l) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Bm(n, l, o, d, m) {
    return (n.mode & 1) === 0 ? (n === l ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (l = Fn(-1, 1), l.tag = 2, tr(o, l, 1))), o.lanes |= 1), n) : (n.flags |= 65536, n.lanes = m, n);
  }
  var Ex = K.ReactCurrentOwner, Nt = !1;
  function $t(n, l, o, d) {
    l.child = n === null ? cm(l, null, o, d) : hl(l, n.child, o, d);
  }
  function Um(n, l, o, d, m) {
    o = o.render;
    var y = l.ref;
    return vl(l, m), d = Uu(n, l, o, d, y, m), o = Wu(), n !== null && !Nt ? (l.updateQueue = n.updateQueue, l.flags &= -2053, n.lanes &= ~m, Tn(n, l, m)) : (Qe && o && Nu(l), l.flags |= 1, $t(n, l, d, m), l.child);
  }
  function Wm(n, l, o, d, m) {
    if (n === null) {
      var y = o.type;
      return typeof y == "function" && !Sc(y) && y.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (l.tag = 15, l.type = y, Gm(n, l, y, d, m)) : (n = vo(o.type, null, d, l, l.mode, m), n.ref = l.ref, n.return = l, l.child = n);
    }
    if (y = n.child, (n.lanes & m) === 0) {
      var E = y.memoizedProps;
      if (o = o.compare, o = o !== null ? o : ai, o(E, d) && n.ref === l.ref) return Tn(n, l, m);
    }
    return l.flags |= 1, n = or(y, d), n.ref = l.ref, n.return = l, l.child = n;
  }
  function Gm(n, l, o, d, m) {
    if (n !== null) {
      var y = n.memoizedProps;
      if (ai(y, d) && n.ref === l.ref) if (Nt = !1, l.pendingProps = d = y, (n.lanes & m) !== 0) (n.flags & 131072) !== 0 && (Nt = !0);
      else return l.lanes = n.lanes, Tn(n, l, m);
    }
    return tc(n, l, o, d, m);
  }
  function qm(n, l, o) {
    var d = l.pendingProps, m = d.children, y = n !== null ? n.memoizedState : null;
    if (d.mode === "hidden") if ((l.mode & 1) === 0) l.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, He(wl, Ht), Ht |= o;
    else {
      if ((o & 1073741824) === 0) return n = y !== null ? y.baseLanes | o : o, l.lanes = l.childLanes = 1073741824, l.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, l.updateQueue = null, He(wl, Ht), Ht |= n, null;
      l.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, d = y !== null ? y.baseLanes : o, He(wl, Ht), Ht |= d;
    }
    else y !== null ? (d = y.baseLanes | o, l.memoizedState = null) : d = o, He(wl, Ht), Ht |= d;
    return $t(n, l, m, o), l.child;
  }
  function Zm(n, l) {
    var o = l.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (l.flags |= 512, l.flags |= 2097152);
  }
  function tc(n, l, o, d, m) {
    var y = _t(o) ? kr : xt.current;
    return y = dl(l, y), vl(l, m), o = Uu(n, l, o, d, y, m), d = Wu(), n !== null && !Nt ? (l.updateQueue = n.updateQueue, l.flags &= -2053, n.lanes &= ~m, Tn(n, l, m)) : (Qe && d && Nu(l), l.flags |= 1, $t(n, l, o, m), l.child);
  }
  function Qm(n, l, o, d, m) {
    if (_t(o)) {
      var y = !0;
      Oa(l);
    } else y = !1;
    if (vl(l, m), l.stateNode === null) io(n, l), zm(l, o, d), Yu(l, o, d, m), d = !0;
    else if (n === null) {
      var E = l.stateNode, P = l.memoizedProps;
      E.props = P;
      var R = E.context, U = o.contextType;
      typeof U == "object" && U !== null ? U = Gt(U) : (U = _t(o) ? kr : xt.current, U = dl(l, U));
      var ee = o.getDerivedStateFromProps, te = typeof ee == "function" || typeof E.getSnapshotBeforeUpdate == "function";
      te || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (P !== d || R !== U) && Km(l, E, d, U), er = !1;
      var J = l.memoizedState;
      E.state = J, Qa(l, d, E, m), R = l.memoizedState, P !== d || J !== R || kt.current || er ? (typeof ee == "function" && (Xu(l, o, ee, d), R = l.memoizedState), (P = er || jm(l, o, P, d, J, R, U)) ? (te || typeof E.UNSAFE_componentWillMount != "function" && typeof E.componentWillMount != "function" || (typeof E.componentWillMount == "function" && E.componentWillMount(), typeof E.UNSAFE_componentWillMount == "function" && E.UNSAFE_componentWillMount()), typeof E.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof E.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = d, l.memoizedState = R), E.props = d, E.state = R, E.context = U, d = P) : (typeof E.componentDidMount == "function" && (l.flags |= 4194308), d = !1);
    } else {
      E = l.stateNode, fm(n, l), P = l.memoizedProps, U = l.type === l.elementType ? P : an(l.type, P), E.props = U, te = l.pendingProps, J = E.context, R = o.contextType, typeof R == "object" && R !== null ? R = Gt(R) : (R = _t(o) ? kr : xt.current, R = dl(l, R));
      var de = o.getDerivedStateFromProps;
      (ee = typeof de == "function" || typeof E.getSnapshotBeforeUpdate == "function") || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (P !== te || J !== R) && Km(l, E, d, R), er = !1, J = l.memoizedState, E.state = J, Qa(l, d, E, m);
      var pe = l.memoizedState;
      P !== te || J !== pe || kt.current || er ? (typeof de == "function" && (Xu(l, o, de, d), pe = l.memoizedState), (U = er || jm(l, o, U, d, J, pe, R) || !1) ? (ee || typeof E.UNSAFE_componentWillUpdate != "function" && typeof E.componentWillUpdate != "function" || (typeof E.componentWillUpdate == "function" && E.componentWillUpdate(d, pe, R), typeof E.UNSAFE_componentWillUpdate == "function" && E.UNSAFE_componentWillUpdate(d, pe, R)), typeof E.componentDidUpdate == "function" && (l.flags |= 4), typeof E.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof E.componentDidUpdate != "function" || P === n.memoizedProps && J === n.memoizedState || (l.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || P === n.memoizedProps && J === n.memoizedState || (l.flags |= 1024), l.memoizedProps = d, l.memoizedState = pe), E.props = d, E.state = pe, E.context = R, d = U) : (typeof E.componentDidUpdate != "function" || P === n.memoizedProps && J === n.memoizedState || (l.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || P === n.memoizedProps && J === n.memoizedState || (l.flags |= 1024), d = !1);
    }
    return nc(n, l, o, d, y, m);
  }
  function nc(n, l, o, d, m, y) {
    Zm(n, l);
    var E = (l.flags & 128) !== 0;
    if (!d && !E) return m && tm(l, o, !1), Tn(n, l, y);
    d = l.stateNode, Ex.current = l;
    var P = E && typeof o.getDerivedStateFromError != "function" ? null : d.render();
    return l.flags |= 1, n !== null && E ? (l.child = hl(l, n.child, null, y), l.child = hl(l, null, P, y)) : $t(n, l, P, y), l.memoizedState = d.state, m && tm(l, o, !0), l.child;
  }
  function Xm(n) {
    var l = n.stateNode;
    l.pendingContext ? Jp(n, l.pendingContext, l.pendingContext !== l.context) : l.context && Jp(n, l.context, !1), Ku(n, l.containerInfo);
  }
  function Ym(n, l, o, d, m) {
    return ml(), Ru(m), l.flags |= 256, $t(n, l, o, d), l.child;
  }
  var rc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function lc(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Jm(n, l, o) {
    var d = l.pendingProps, m = Je.current, y = !1, E = (l.flags & 128) !== 0, P;
    if ((P = E) || (P = n !== null && n.memoizedState === null ? !1 : (m & 2) !== 0), P ? (y = !0, l.flags &= -129) : (n === null || n.memoizedState !== null) && (m |= 1), He(Je, m & 1), n === null)
      return Tu(l), n = l.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((l.mode & 1) === 0 ? l.lanes = 1 : n.data === "$!" ? l.lanes = 8 : l.lanes = 1073741824, null) : (E = d.children, n = d.fallback, y ? (d = l.mode, y = l.child, E = { mode: "hidden", children: E }, (d & 1) === 0 && y !== null ? (y.childLanes = 0, y.pendingProps = E) : y = yo(E, d, 0, null), n = Ar(n, d, o, null), y.return = l, n.return = l, y.sibling = n, l.child = y, l.child.memoizedState = lc(o), l.memoizedState = rc, n) : ic(l, E));
    if (m = n.memoizedState, m !== null && (P = m.dehydrated, P !== null)) return kx(n, l, E, d, P, m, o);
    if (y) {
      y = d.fallback, E = l.mode, m = n.child, P = m.sibling;
      var R = { mode: "hidden", children: d.children };
      return (E & 1) === 0 && l.child !== m ? (d = l.child, d.childLanes = 0, d.pendingProps = R, l.deletions = null) : (d = or(m, R), d.subtreeFlags = m.subtreeFlags & 14680064), P !== null ? y = or(P, y) : (y = Ar(y, E, o, null), y.flags |= 2), y.return = l, d.return = l, d.sibling = y, l.child = d, d = y, y = l.child, E = n.child.memoizedState, E = E === null ? lc(o) : { baseLanes: E.baseLanes | o, cachePool: null, transitions: E.transitions }, y.memoizedState = E, y.childLanes = n.childLanes & ~o, l.memoizedState = rc, d;
    }
    return y = n.child, n = y.sibling, d = or(y, { mode: "visible", children: d.children }), (l.mode & 1) === 0 && (d.lanes = o), d.return = l, d.sibling = null, n !== null && (o = l.deletions, o === null ? (l.deletions = [n], l.flags |= 16) : o.push(n)), l.child = d, l.memoizedState = null, d;
  }
  function ic(n, l) {
    return l = yo({ mode: "visible", children: l }, n.mode, 0, null), l.return = n, n.child = l;
  }
  function lo(n, l, o, d) {
    return d !== null && Ru(d), hl(l, n.child, null, o), n = ic(l, l.pendingProps.children), n.flags |= 2, l.memoizedState = null, n;
  }
  function kx(n, l, o, d, m, y, E) {
    if (o)
      return l.flags & 256 ? (l.flags &= -257, d = Ju(Error(r(422))), lo(n, l, E, d)) : l.memoizedState !== null ? (l.child = n.child, l.flags |= 128, null) : (y = d.fallback, m = l.mode, d = yo({ mode: "visible", children: d.children }, m, 0, null), y = Ar(y, m, E, null), y.flags |= 2, d.return = l, y.return = l, d.sibling = y, l.child = d, (l.mode & 1) !== 0 && hl(l, n.child, null, E), l.child.memoizedState = lc(E), l.memoizedState = rc, y);
    if ((l.mode & 1) === 0) return lo(n, l, E, null);
    if (m.data === "$!") {
      if (d = m.nextSibling && m.nextSibling.dataset, d) var P = d.dgst;
      return d = P, y = Error(r(419)), d = Ju(y, d, void 0), lo(n, l, E, d);
    }
    if (P = (E & n.childLanes) !== 0, Nt || P) {
      if (d = pt, d !== null) {
        switch (E & -E) {
          case 4:
            m = 2;
            break;
          case 16:
            m = 8;
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
            m = 32;
            break;
          case 536870912:
            m = 268435456;
            break;
          default:
            m = 0;
        }
        m = (m & (d.suspendedLanes | E)) !== 0 ? 0 : m, m !== 0 && m !== y.retryLane && (y.retryLane = m, Pn(n, m), un(d, n, m, -1));
      }
      return wc(), d = Ju(Error(r(421))), lo(n, l, E, d);
    }
    return m.data === "$?" ? (l.flags |= 128, l.child = n.child, l = Kx.bind(null, n), m._reactRetry = l, null) : (n = y.treeContext, Vt = Qn(m.nextSibling), Ot = l, Qe = !0, ln = null, n !== null && (Ut[Wt++] = _n, Ut[Wt++] = Nn, Ut[Wt++] = _r, _n = n.id, Nn = n.overflow, _r = l), l = ic(l, d.children), l.flags |= 4096, l);
  }
  function eh(n, l, o) {
    n.lanes |= l;
    var d = n.alternate;
    d !== null && (d.lanes |= l), Au(n.return, l, o);
  }
  function ac(n, l, o, d, m) {
    var y = n.memoizedState;
    y === null ? n.memoizedState = { isBackwards: l, rendering: null, renderingStartTime: 0, last: d, tail: o, tailMode: m } : (y.isBackwards = l, y.rendering = null, y.renderingStartTime = 0, y.last = d, y.tail = o, y.tailMode = m);
  }
  function th(n, l, o) {
    var d = l.pendingProps, m = d.revealOrder, y = d.tail;
    if ($t(n, l, d.children, o), d = Je.current, (d & 2) !== 0) d = d & 1 | 2, l.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0) e: for (n = l.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && eh(n, o, l);
        else if (n.tag === 19) eh(n, o, l);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === l) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      d &= 1;
    }
    if (He(Je, d), (l.mode & 1) === 0) l.memoizedState = null;
    else switch (m) {
      case "forwards":
        for (o = l.child, m = null; o !== null; ) n = o.alternate, n !== null && Xa(n) === null && (m = o), o = o.sibling;
        o = m, o === null ? (m = l.child, l.child = null) : (m = o.sibling, o.sibling = null), ac(l, !1, m, o, y);
        break;
      case "backwards":
        for (o = null, m = l.child, l.child = null; m !== null; ) {
          if (n = m.alternate, n !== null && Xa(n) === null) {
            l.child = m;
            break;
          }
          n = m.sibling, m.sibling = o, o = m, m = n;
        }
        ac(l, !0, o, null, y);
        break;
      case "together":
        ac(l, !1, null, null, void 0);
        break;
      default:
        l.memoizedState = null;
    }
    return l.child;
  }
  function io(n, l) {
    (l.mode & 1) === 0 && n !== null && (n.alternate = null, l.alternate = null, l.flags |= 2);
  }
  function Tn(n, l, o) {
    if (n !== null && (l.dependencies = n.dependencies), Rr |= l.lanes, (o & l.childLanes) === 0) return null;
    if (n !== null && l.child !== n.child) throw Error(r(153));
    if (l.child !== null) {
      for (n = l.child, o = or(n, n.pendingProps), l.child = o, o.return = l; n.sibling !== null; ) n = n.sibling, o = o.sibling = or(n, n.pendingProps), o.return = l;
      o.sibling = null;
    }
    return l.child;
  }
  function _x(n, l, o) {
    switch (l.tag) {
      case 3:
        Xm(l), ml();
        break;
      case 5:
        hm(l);
        break;
      case 1:
        _t(l.type) && Oa(l);
        break;
      case 4:
        Ku(l, l.stateNode.containerInfo);
        break;
      case 10:
        var d = l.type._context, m = l.memoizedProps.value;
        He(Ga, d._currentValue), d._currentValue = m;
        break;
      case 13:
        if (d = l.memoizedState, d !== null)
          return d.dehydrated !== null ? (He(Je, Je.current & 1), l.flags |= 128, null) : (o & l.child.childLanes) !== 0 ? Jm(n, l, o) : (He(Je, Je.current & 1), n = Tn(n, l, o), n !== null ? n.sibling : null);
        He(Je, Je.current & 1);
        break;
      case 19:
        if (d = (o & l.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (d) return th(n, l, o);
          l.flags |= 128;
        }
        if (m = l.memoizedState, m !== null && (m.rendering = null, m.tail = null, m.lastEffect = null), He(Je, Je.current), d) break;
        return null;
      case 22:
      case 23:
        return l.lanes = 0, qm(n, l, o);
    }
    return Tn(n, l, o);
  }
  var nh, oc, rh, lh;
  nh = function(n, l) {
    for (var o = l.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6) n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === l) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === l) return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, oc = function() {
  }, rh = function(n, l, o, d) {
    var m = n.memoizedProps;
    if (m !== d) {
      n = l.stateNode, Fr(gn.current);
      var y = null;
      switch (o) {
        case "input":
          m = De(n, m), d = De(n, d), y = [];
          break;
        case "select":
          m = W({}, m, { value: void 0 }), d = W({}, d, { value: void 0 }), y = [];
          break;
        case "textarea":
          m = Cr(n, m), d = Cr(n, d), y = [];
          break;
        default:
          typeof m.onClick != "function" && typeof d.onClick == "function" && (n.onclick = za);
      }
      Os(o, d);
      var E;
      o = null;
      for (U in m) if (!d.hasOwnProperty(U) && m.hasOwnProperty(U) && m[U] != null) if (U === "style") {
        var P = m[U];
        for (E in P) P.hasOwnProperty(E) && (o || (o = {}), o[E] = "");
      } else U !== "dangerouslySetInnerHTML" && U !== "children" && U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && U !== "autoFocus" && (i.hasOwnProperty(U) ? y || (y = []) : (y = y || []).push(U, null));
      for (U in d) {
        var R = d[U];
        if (P = m?.[U], d.hasOwnProperty(U) && R !== P && (R != null || P != null)) if (U === "style") if (P) {
          for (E in P) !P.hasOwnProperty(E) || R && R.hasOwnProperty(E) || (o || (o = {}), o[E] = "");
          for (E in R) R.hasOwnProperty(E) && P[E] !== R[E] && (o || (o = {}), o[E] = R[E]);
        } else o || (y || (y = []), y.push(
          U,
          o
        )), o = R;
        else U === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0, P = P ? P.__html : void 0, R != null && P !== R && (y = y || []).push(U, R)) : U === "children" ? typeof R != "string" && typeof R != "number" || (y = y || []).push(U, "" + R) : U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && (i.hasOwnProperty(U) ? (R != null && U === "onScroll" && We("scroll", n), y || P === R || (y = [])) : (y = y || []).push(U, R));
      }
      o && (y = y || []).push("style", o);
      var U = y;
      (l.updateQueue = U) && (l.flags |= 4);
    }
  }, lh = function(n, l, o, d) {
    o !== d && (l.flags |= 4);
  };
  function wi(n, l) {
    if (!Qe) switch (n.tailMode) {
      case "hidden":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? n.tail = null : o.sibling = null;
        break;
      case "collapsed":
        o = n.tail;
        for (var d = null; o !== null; ) o.alternate !== null && (d = o), o = o.sibling;
        d === null ? l || n.tail === null ? n.tail = null : n.tail.sibling = null : d.sibling = null;
    }
  }
  function St(n) {
    var l = n.alternate !== null && n.alternate.child === n.child, o = 0, d = 0;
    if (l) for (var m = n.child; m !== null; ) o |= m.lanes | m.childLanes, d |= m.subtreeFlags & 14680064, d |= m.flags & 14680064, m.return = n, m = m.sibling;
    else for (m = n.child; m !== null; ) o |= m.lanes | m.childLanes, d |= m.subtreeFlags, d |= m.flags, m.return = n, m = m.sibling;
    return n.subtreeFlags |= d, n.childLanes = o, l;
  }
  function Nx(n, l, o) {
    var d = l.pendingProps;
    switch (Pu(l), l.tag) {
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
        return St(l), null;
      case 1:
        return _t(l.type) && Da(), St(l), null;
      case 3:
        return d = l.stateNode, yl(), Ge(kt), Ge(xt), Vu(), d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null), (n === null || n.child === null) && (Ua(l) ? l.flags |= 4 : n === null || n.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, ln !== null && (yc(ln), ln = null))), oc(n, l), St(l), null;
      case 5:
        Du(l);
        var m = Fr(gi.current);
        if (o = l.type, n !== null && l.stateNode != null) rh(n, l, o, d, m), n.ref !== l.ref && (l.flags |= 512, l.flags |= 2097152);
        else {
          if (!d) {
            if (l.stateNode === null) throw Error(r(166));
            return St(l), null;
          }
          if (n = Fr(gn.current), Ua(l)) {
            d = l.stateNode, o = l.type;
            var y = l.memoizedProps;
            switch (d[hn] = l, d[di] = y, n = (l.mode & 1) !== 0, o) {
              case "dialog":
                We("cancel", d), We("close", d);
                break;
              case "iframe":
              case "object":
              case "embed":
                We("load", d);
                break;
              case "video":
              case "audio":
                for (m = 0; m < si.length; m++) We(si[m], d);
                break;
              case "source":
                We("error", d);
                break;
              case "img":
              case "image":
              case "link":
                We(
                  "error",
                  d
                ), We("load", d);
                break;
              case "details":
                We("toggle", d);
                break;
              case "input":
                Kt(d, y), We("invalid", d);
                break;
              case "select":
                d._wrapperState = { wasMultiple: !!y.multiple }, We("invalid", d);
                break;
              case "textarea":
                Jr(d, y), We("invalid", d);
            }
            Os(o, y), m = null;
            for (var E in y) if (y.hasOwnProperty(E)) {
              var P = y[E];
              E === "children" ? typeof P == "string" ? d.textContent !== P && (y.suppressHydrationWarning !== !0 && ja(d.textContent, P, n), m = ["children", P]) : typeof P == "number" && d.textContent !== "" + P && (y.suppressHydrationWarning !== !0 && ja(
                d.textContent,
                P,
                n
              ), m = ["children", "" + P]) : i.hasOwnProperty(E) && P != null && E === "onScroll" && We("scroll", d);
            }
            switch (o) {
              case "input":
                oe(d), ha(d, y, !0);
                break;
              case "textarea":
                oe(d), Hf(d);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof y.onClick == "function" && (d.onclick = za);
            }
            d = m, l.updateQueue = d, d !== null && (l.flags |= 4);
          } else {
            E = m.nodeType === 9 ? m : m.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Bf(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = E.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof d.is == "string" ? n = E.createElement(o, { is: d.is }) : (n = E.createElement(o), o === "select" && (E = n, d.multiple ? E.multiple = !0 : d.size && (E.size = d.size))) : n = E.createElementNS(n, o), n[hn] = l, n[di] = d, nh(n, l, !1, !1), l.stateNode = n;
            e: {
              switch (E = Vs(o, d), o) {
                case "dialog":
                  We("cancel", n), We("close", n), m = d;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  We("load", n), m = d;
                  break;
                case "video":
                case "audio":
                  for (m = 0; m < si.length; m++) We(si[m], n);
                  m = d;
                  break;
                case "source":
                  We("error", n), m = d;
                  break;
                case "img":
                case "image":
                case "link":
                  We(
                    "error",
                    n
                  ), We("load", n), m = d;
                  break;
                case "details":
                  We("toggle", n), m = d;
                  break;
                case "input":
                  Kt(n, d), m = De(n, d), We("invalid", n);
                  break;
                case "option":
                  m = d;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!d.multiple }, m = W({}, d, { value: void 0 }), We("invalid", n);
                  break;
                case "textarea":
                  Jr(n, d), m = Cr(n, d), We("invalid", n);
                  break;
                default:
                  m = d;
              }
              Os(o, m), P = m;
              for (y in P) if (P.hasOwnProperty(y)) {
                var R = P[y];
                y === "style" ? Gf(n, R) : y === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0, R != null && Uf(n, R)) : y === "children" ? typeof R == "string" ? (o !== "textarea" || R !== "") && Hl(n, R) : typeof R == "number" && Hl(n, "" + R) : y !== "suppressContentEditableWarning" && y !== "suppressHydrationWarning" && y !== "autoFocus" && (i.hasOwnProperty(y) ? R != null && y === "onScroll" && We("scroll", n) : R != null && H(n, y, R, E));
              }
              switch (o) {
                case "input":
                  oe(n), ha(n, d, !1);
                  break;
                case "textarea":
                  oe(n), Hf(n);
                  break;
                case "option":
                  d.value != null && n.setAttribute("value", "" + Se(d.value));
                  break;
                case "select":
                  n.multiple = !!d.multiple, y = d.value, y != null ? tt(n, !!d.multiple, y, !1) : d.defaultValue != null && tt(
                    n,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof m.onClick == "function" && (n.onclick = za);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  d = !!d.autoFocus;
                  break e;
                case "img":
                  d = !0;
                  break e;
                default:
                  d = !1;
              }
            }
            d && (l.flags |= 4);
          }
          l.ref !== null && (l.flags |= 512, l.flags |= 2097152);
        }
        return St(l), null;
      case 6:
        if (n && l.stateNode != null) lh(n, l, n.memoizedProps, d);
        else {
          if (typeof d != "string" && l.stateNode === null) throw Error(r(166));
          if (o = Fr(gi.current), Fr(gn.current), Ua(l)) {
            if (d = l.stateNode, o = l.memoizedProps, d[hn] = l, (y = d.nodeValue !== o) && (n = Ot, n !== null)) switch (n.tag) {
              case 3:
                ja(d.nodeValue, o, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && ja(d.nodeValue, o, (n.mode & 1) !== 0);
            }
            y && (l.flags |= 4);
          } else d = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(d), d[hn] = l, l.stateNode = d;
        }
        return St(l), null;
      case 13:
        if (Ge(Je), d = l.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Qe && Vt !== null && (l.mode & 1) !== 0 && (l.flags & 128) === 0) om(), ml(), l.flags |= 98560, y = !1;
          else if (y = Ua(l), d !== null && d.dehydrated !== null) {
            if (n === null) {
              if (!y) throw Error(r(318));
              if (y = l.memoizedState, y = y !== null ? y.dehydrated : null, !y) throw Error(r(317));
              y[hn] = l;
            } else ml(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            St(l), y = !1;
          } else ln !== null && (yc(ln), ln = null), y = !0;
          if (!y) return l.flags & 65536 ? l : null;
        }
        return (l.flags & 128) !== 0 ? (l.lanes = o, l) : (d = d !== null, d !== (n !== null && n.memoizedState !== null) && d && (l.child.flags |= 8192, (l.mode & 1) !== 0 && (n === null || (Je.current & 1) !== 0 ? dt === 0 && (dt = 3) : wc())), l.updateQueue !== null && (l.flags |= 4), St(l), null);
      case 4:
        return yl(), oc(n, l), n === null && ui(l.stateNode.containerInfo), St(l), null;
      case 10:
        return Mu(l.type._context), St(l), null;
      case 17:
        return _t(l.type) && Da(), St(l), null;
      case 19:
        if (Ge(Je), y = l.memoizedState, y === null) return St(l), null;
        if (d = (l.flags & 128) !== 0, E = y.rendering, E === null) if (d) wi(y, !1);
        else {
          if (dt !== 0 || n !== null && (n.flags & 128) !== 0) for (n = l.child; n !== null; ) {
            if (E = Xa(n), E !== null) {
              for (l.flags |= 128, wi(y, !1), d = E.updateQueue, d !== null && (l.updateQueue = d, l.flags |= 4), l.subtreeFlags = 0, d = o, o = l.child; o !== null; ) y = o, n = d, y.flags &= 14680066, E = y.alternate, E === null ? (y.childLanes = 0, y.lanes = n, y.child = null, y.subtreeFlags = 0, y.memoizedProps = null, y.memoizedState = null, y.updateQueue = null, y.dependencies = null, y.stateNode = null) : (y.childLanes = E.childLanes, y.lanes = E.lanes, y.child = E.child, y.subtreeFlags = 0, y.deletions = null, y.memoizedProps = E.memoizedProps, y.memoizedState = E.memoizedState, y.updateQueue = E.updateQueue, y.type = E.type, n = E.dependencies, y.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
              return He(Je, Je.current & 1 | 2), l.child;
            }
            n = n.sibling;
          }
          y.tail !== null && rt() > Sl && (l.flags |= 128, d = !0, wi(y, !1), l.lanes = 4194304);
        }
        else {
          if (!d) if (n = Xa(E), n !== null) {
            if (l.flags |= 128, d = !0, o = n.updateQueue, o !== null && (l.updateQueue = o, l.flags |= 4), wi(y, !0), y.tail === null && y.tailMode === "hidden" && !E.alternate && !Qe) return St(l), null;
          } else 2 * rt() - y.renderingStartTime > Sl && o !== 1073741824 && (l.flags |= 128, d = !0, wi(y, !1), l.lanes = 4194304);
          y.isBackwards ? (E.sibling = l.child, l.child = E) : (o = y.last, o !== null ? o.sibling = E : l.child = E, y.last = E);
        }
        return y.tail !== null ? (l = y.tail, y.rendering = l, y.tail = l.sibling, y.renderingStartTime = rt(), l.sibling = null, o = Je.current, He(Je, d ? o & 1 | 2 : o & 1), l) : (St(l), null);
      case 22:
      case 23:
        return xc(), d = l.memoizedState !== null, n !== null && n.memoizedState !== null !== d && (l.flags |= 8192), d && (l.mode & 1) !== 0 ? (Ht & 1073741824) !== 0 && (St(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : St(l), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(r(156, l.tag));
  }
  function Px(n, l) {
    switch (Pu(l), l.tag) {
      case 1:
        return _t(l.type) && Da(), n = l.flags, n & 65536 ? (l.flags = n & -65537 | 128, l) : null;
      case 3:
        return yl(), Ge(kt), Ge(xt), Vu(), n = l.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (l.flags = n & -65537 | 128, l) : null;
      case 5:
        return Du(l), null;
      case 13:
        if (Ge(Je), n = l.memoizedState, n !== null && n.dehydrated !== null) {
          if (l.alternate === null) throw Error(r(340));
          ml();
        }
        return n = l.flags, n & 65536 ? (l.flags = n & -65537 | 128, l) : null;
      case 19:
        return Ge(Je), null;
      case 4:
        return yl(), null;
      case 10:
        return Mu(l.type._context), null;
      case 22:
      case 23:
        return xc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ao = !1, Ct = !1, Fx = typeof WeakSet == "function" ? WeakSet : Set, fe = null;
  function xl(n, l) {
    var o = n.ref;
    if (o !== null) if (typeof o == "function") try {
      o(null);
    } catch (d) {
      nt(n, l, d);
    }
    else o.current = null;
  }
  function sc(n, l, o) {
    try {
      o();
    } catch (d) {
      nt(n, l, d);
    }
  }
  var ih = !1;
  function Tx(n, l) {
    if (xu = ka, n = jp(), fu(n)) {
      if ("selectionStart" in n) var o = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        o = (o = n.ownerDocument) && o.defaultView || window;
        var d = o.getSelection && o.getSelection();
        if (d && d.rangeCount !== 0) {
          o = d.anchorNode;
          var m = d.anchorOffset, y = d.focusNode;
          d = d.focusOffset;
          try {
            o.nodeType, y.nodeType;
          } catch {
            o = null;
            break e;
          }
          var E = 0, P = -1, R = -1, U = 0, ee = 0, te = n, J = null;
          t: for (; ; ) {
            for (var de; te !== o || m !== 0 && te.nodeType !== 3 || (P = E + m), te !== y || d !== 0 && te.nodeType !== 3 || (R = E + d), te.nodeType === 3 && (E += te.nodeValue.length), (de = te.firstChild) !== null; )
              J = te, te = de;
            for (; ; ) {
              if (te === n) break t;
              if (J === o && ++U === m && (P = E), J === y && ++ee === d && (R = E), (de = te.nextSibling) !== null) break;
              te = J, J = te.parentNode;
            }
            te = de;
          }
          o = P === -1 || R === -1 ? null : { start: P, end: R };
        } else o = null;
      }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (wu = { focusedElem: n, selectionRange: o }, ka = !1, fe = l; fe !== null; ) if (l = fe, n = l.child, (l.subtreeFlags & 1028) !== 0 && n !== null) n.return = l, fe = n;
    else for (; fe !== null; ) {
      l = fe;
      try {
        var pe = l.alternate;
        if ((l.flags & 1024) !== 0) switch (l.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (pe !== null) {
              var he = pe.memoizedProps, lt = pe.memoizedState, O = l.stateNode, j = O.getSnapshotBeforeUpdate(l.elementType === l.type ? he : an(l.type, he), lt);
              O.__reactInternalSnapshotBeforeUpdate = j;
            }
            break;
          case 3:
            var V = l.stateNode.containerInfo;
            V.nodeType === 1 ? V.textContent = "" : V.nodeType === 9 && V.documentElement && V.removeChild(V.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(r(163));
        }
      } catch (le) {
        nt(l, l.return, le);
      }
      if (n = l.sibling, n !== null) {
        n.return = l.return, fe = n;
        break;
      }
      fe = l.return;
    }
    return pe = ih, ih = !1, pe;
  }
  function Si(n, l, o) {
    var d = l.updateQueue;
    if (d = d !== null ? d.lastEffect : null, d !== null) {
      var m = d = d.next;
      do {
        if ((m.tag & n) === n) {
          var y = m.destroy;
          m.destroy = void 0, y !== void 0 && sc(l, o, y);
        }
        m = m.next;
      } while (m !== d);
    }
  }
  function oo(n, l) {
    if (l = l.updateQueue, l = l !== null ? l.lastEffect : null, l !== null) {
      var o = l = l.next;
      do {
        if ((o.tag & n) === n) {
          var d = o.create;
          o.destroy = d();
        }
        o = o.next;
      } while (o !== l);
    }
  }
  function uc(n) {
    var l = n.ref;
    if (l !== null) {
      var o = n.stateNode;
      switch (n.tag) {
        case 5:
          n = o;
          break;
        default:
          n = o;
      }
      typeof l == "function" ? l(n) : l.current = n;
    }
  }
  function ah(n) {
    var l = n.alternate;
    l !== null && (n.alternate = null, ah(l)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (l = n.stateNode, l !== null && (delete l[hn], delete l[di], delete l[Eu], delete l[px], delete l[mx])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function oh(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function sh(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || oh(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function cc(n, l, o) {
    var d = n.tag;
    if (d === 5 || d === 6) n = n.stateNode, l ? o.nodeType === 8 ? o.parentNode.insertBefore(n, l) : o.insertBefore(n, l) : (o.nodeType === 8 ? (l = o.parentNode, l.insertBefore(n, o)) : (l = o, l.appendChild(n)), o = o._reactRootContainer, o != null || l.onclick !== null || (l.onclick = za));
    else if (d !== 4 && (n = n.child, n !== null)) for (cc(n, l, o), n = n.sibling; n !== null; ) cc(n, l, o), n = n.sibling;
  }
  function dc(n, l, o) {
    var d = n.tag;
    if (d === 5 || d === 6) n = n.stateNode, l ? o.insertBefore(n, l) : o.appendChild(n);
    else if (d !== 4 && (n = n.child, n !== null)) for (dc(n, l, o), n = n.sibling; n !== null; ) dc(n, l, o), n = n.sibling;
  }
  var vt = null, on = !1;
  function nr(n, l, o) {
    for (o = o.child; o !== null; ) uh(n, l, o), o = o.sibling;
  }
  function uh(n, l, o) {
    if (mn && typeof mn.onCommitFiberUnmount == "function") try {
      mn.onCommitFiberUnmount(xa, o);
    } catch {
    }
    switch (o.tag) {
      case 5:
        Ct || xl(o, l);
      case 6:
        var d = vt, m = on;
        vt = null, nr(n, l, o), vt = d, on = m, vt !== null && (on ? (n = vt, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : vt.removeChild(o.stateNode));
        break;
      case 18:
        vt !== null && (on ? (n = vt, o = o.stateNode, n.nodeType === 8 ? $u(n.parentNode, o) : n.nodeType === 1 && $u(n, o), ei(n)) : $u(vt, o.stateNode));
        break;
      case 4:
        d = vt, m = on, vt = o.stateNode.containerInfo, on = !0, nr(n, l, o), vt = d, on = m;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ct && (d = o.updateQueue, d !== null && (d = d.lastEffect, d !== null))) {
          m = d = d.next;
          do {
            var y = m, E = y.destroy;
            y = y.tag, E !== void 0 && ((y & 2) !== 0 || (y & 4) !== 0) && sc(o, l, E), m = m.next;
          } while (m !== d);
        }
        nr(n, l, o);
        break;
      case 1:
        if (!Ct && (xl(o, l), d = o.stateNode, typeof d.componentWillUnmount == "function")) try {
          d.props = o.memoizedProps, d.state = o.memoizedState, d.componentWillUnmount();
        } catch (P) {
          nt(o, l, P);
        }
        nr(n, l, o);
        break;
      case 21:
        nr(n, l, o);
        break;
      case 22:
        o.mode & 1 ? (Ct = (d = Ct) || o.memoizedState !== null, nr(n, l, o), Ct = d) : nr(n, l, o);
        break;
      default:
        nr(n, l, o);
    }
  }
  function ch(n) {
    var l = n.updateQueue;
    if (l !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new Fx()), l.forEach(function(d) {
        var m = Dx.bind(null, n, d);
        o.has(d) || (o.add(d), d.then(m, m));
      });
    }
  }
  function sn(n, l) {
    var o = l.deletions;
    if (o !== null) for (var d = 0; d < o.length; d++) {
      var m = o[d];
      try {
        var y = n, E = l, P = E;
        e: for (; P !== null; ) {
          switch (P.tag) {
            case 5:
              vt = P.stateNode, on = !1;
              break e;
            case 3:
              vt = P.stateNode.containerInfo, on = !0;
              break e;
            case 4:
              vt = P.stateNode.containerInfo, on = !0;
              break e;
          }
          P = P.return;
        }
        if (vt === null) throw Error(r(160));
        uh(y, E, m), vt = null, on = !1;
        var R = m.alternate;
        R !== null && (R.return = null), m.return = null;
      } catch (U) {
        nt(m, l, U);
      }
    }
    if (l.subtreeFlags & 12854) for (l = l.child; l !== null; ) dh(l, n), l = l.sibling;
  }
  function dh(n, l) {
    var o = n.alternate, d = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (sn(l, n), yn(n), d & 4) {
          try {
            Si(3, n, n.return), oo(3, n);
          } catch (he) {
            nt(n, n.return, he);
          }
          try {
            Si(5, n, n.return);
          } catch (he) {
            nt(n, n.return, he);
          }
        }
        break;
      case 1:
        sn(l, n), yn(n), d & 512 && o !== null && xl(o, o.return);
        break;
      case 5:
        if (sn(l, n), yn(n), d & 512 && o !== null && xl(o, o.return), n.flags & 32) {
          var m = n.stateNode;
          try {
            Hl(m, "");
          } catch (he) {
            nt(n, n.return, he);
          }
        }
        if (d & 4 && (m = n.stateNode, m != null)) {
          var y = n.memoizedProps, E = o !== null ? o.memoizedProps : y, P = n.type, R = n.updateQueue;
          if (n.updateQueue = null, R !== null) try {
            P === "input" && y.type === "radio" && y.name != null && ze(m, y), Vs(P, E);
            var U = Vs(P, y);
            for (E = 0; E < R.length; E += 2) {
              var ee = R[E], te = R[E + 1];
              ee === "style" ? Gf(m, te) : ee === "dangerouslySetInnerHTML" ? Uf(m, te) : ee === "children" ? Hl(m, te) : H(m, ee, te, U);
            }
            switch (P) {
              case "input":
                Bt(m, y);
                break;
              case "textarea":
                Vf(m, y);
                break;
              case "select":
                var J = m._wrapperState.wasMultiple;
                m._wrapperState.wasMultiple = !!y.multiple;
                var de = y.value;
                de != null ? tt(m, !!y.multiple, de, !1) : J !== !!y.multiple && (y.defaultValue != null ? tt(
                  m,
                  !!y.multiple,
                  y.defaultValue,
                  !0
                ) : tt(m, !!y.multiple, y.multiple ? [] : "", !1));
            }
            m[di] = y;
          } catch (he) {
            nt(n, n.return, he);
          }
        }
        break;
      case 6:
        if (sn(l, n), yn(n), d & 4) {
          if (n.stateNode === null) throw Error(r(162));
          m = n.stateNode, y = n.memoizedProps;
          try {
            m.nodeValue = y;
          } catch (he) {
            nt(n, n.return, he);
          }
        }
        break;
      case 3:
        if (sn(l, n), yn(n), d & 4 && o !== null && o.memoizedState.isDehydrated) try {
          ei(l.containerInfo);
        } catch (he) {
          nt(n, n.return, he);
        }
        break;
      case 4:
        sn(l, n), yn(n);
        break;
      case 13:
        sn(l, n), yn(n), m = n.child, m.flags & 8192 && (y = m.memoizedState !== null, m.stateNode.isHidden = y, !y || m.alternate !== null && m.alternate.memoizedState !== null || (mc = rt())), d & 4 && ch(n);
        break;
      case 22:
        if (ee = o !== null && o.memoizedState !== null, n.mode & 1 ? (Ct = (U = Ct) || ee, sn(l, n), Ct = U) : sn(l, n), yn(n), d & 8192) {
          if (U = n.memoizedState !== null, (n.stateNode.isHidden = U) && !ee && (n.mode & 1) !== 0) for (fe = n, ee = n.child; ee !== null; ) {
            for (te = fe = ee; fe !== null; ) {
              switch (J = fe, de = J.child, J.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Si(4, J, J.return);
                  break;
                case 1:
                  xl(J, J.return);
                  var pe = J.stateNode;
                  if (typeof pe.componentWillUnmount == "function") {
                    d = J, o = J.return;
                    try {
                      l = d, pe.props = l.memoizedProps, pe.state = l.memoizedState, pe.componentWillUnmount();
                    } catch (he) {
                      nt(d, o, he);
                    }
                  }
                  break;
                case 5:
                  xl(J, J.return);
                  break;
                case 22:
                  if (J.memoizedState !== null) {
                    mh(te);
                    continue;
                  }
              }
              de !== null ? (de.return = J, fe = de) : mh(te);
            }
            ee = ee.sibling;
          }
          e: for (ee = null, te = n; ; ) {
            if (te.tag === 5) {
              if (ee === null) {
                ee = te;
                try {
                  m = te.stateNode, U ? (y = m.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none") : (P = te.stateNode, R = te.memoizedProps.style, E = R != null && R.hasOwnProperty("display") ? R.display : null, P.style.display = Wf("display", E));
                } catch (he) {
                  nt(n, n.return, he);
                }
              }
            } else if (te.tag === 6) {
              if (ee === null) try {
                te.stateNode.nodeValue = U ? "" : te.memoizedProps;
              } catch (he) {
                nt(n, n.return, he);
              }
            } else if ((te.tag !== 22 && te.tag !== 23 || te.memoizedState === null || te === n) && te.child !== null) {
              te.child.return = te, te = te.child;
              continue;
            }
            if (te === n) break e;
            for (; te.sibling === null; ) {
              if (te.return === null || te.return === n) break e;
              ee === te && (ee = null), te = te.return;
            }
            ee === te && (ee = null), te.sibling.return = te.return, te = te.sibling;
          }
        }
        break;
      case 19:
        sn(l, n), yn(n), d & 4 && ch(n);
        break;
      case 21:
        break;
      default:
        sn(
          l,
          n
        ), yn(n);
    }
  }
  function yn(n) {
    var l = n.flags;
    if (l & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (oh(o)) {
              var d = o;
              break e;
            }
            o = o.return;
          }
          throw Error(r(160));
        }
        switch (d.tag) {
          case 5:
            var m = d.stateNode;
            d.flags & 32 && (Hl(m, ""), d.flags &= -33);
            var y = sh(n);
            dc(n, y, m);
            break;
          case 3:
          case 4:
            var E = d.stateNode.containerInfo, P = sh(n);
            cc(n, P, E);
            break;
          default:
            throw Error(r(161));
        }
      } catch (R) {
        nt(n, n.return, R);
      }
      n.flags &= -3;
    }
    l & 4096 && (n.flags &= -4097);
  }
  function Rx(n, l, o) {
    fe = n, fh(n);
  }
  function fh(n, l, o) {
    for (var d = (n.mode & 1) !== 0; fe !== null; ) {
      var m = fe, y = m.child;
      if (m.tag === 22 && d) {
        var E = m.memoizedState !== null || ao;
        if (!E) {
          var P = m.alternate, R = P !== null && P.memoizedState !== null || Ct;
          P = ao;
          var U = Ct;
          if (ao = E, (Ct = R) && !U) for (fe = m; fe !== null; ) E = fe, R = E.child, E.tag === 22 && E.memoizedState !== null ? hh(m) : R !== null ? (R.return = E, fe = R) : hh(m);
          for (; y !== null; ) fe = y, fh(y), y = y.sibling;
          fe = m, ao = P, Ct = U;
        }
        ph(n);
      } else (m.subtreeFlags & 8772) !== 0 && y !== null ? (y.return = m, fe = y) : ph(n);
    }
  }
  function ph(n) {
    for (; fe !== null; ) {
      var l = fe;
      if ((l.flags & 8772) !== 0) {
        var o = l.alternate;
        try {
          if ((l.flags & 8772) !== 0) switch (l.tag) {
            case 0:
            case 11:
            case 15:
              Ct || oo(5, l);
              break;
            case 1:
              var d = l.stateNode;
              if (l.flags & 4 && !Ct) if (o === null) d.componentDidMount();
              else {
                var m = l.elementType === l.type ? o.memoizedProps : an(l.type, o.memoizedProps);
                d.componentDidUpdate(m, o.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
              }
              var y = l.updateQueue;
              y !== null && mm(l, y, d);
              break;
            case 3:
              var E = l.updateQueue;
              if (E !== null) {
                if (o = null, l.child !== null) switch (l.child.tag) {
                  case 5:
                    o = l.child.stateNode;
                    break;
                  case 1:
                    o = l.child.stateNode;
                }
                mm(l, E, o);
              }
              break;
            case 5:
              var P = l.stateNode;
              if (o === null && l.flags & 4) {
                o = P;
                var R = l.memoizedProps;
                switch (l.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    R.autoFocus && o.focus();
                    break;
                  case "img":
                    R.src && (o.src = R.src);
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
              if (l.memoizedState === null) {
                var U = l.alternate;
                if (U !== null) {
                  var ee = U.memoizedState;
                  if (ee !== null) {
                    var te = ee.dehydrated;
                    te !== null && ei(te);
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
              throw Error(r(163));
          }
          Ct || l.flags & 512 && uc(l);
        } catch (J) {
          nt(l, l.return, J);
        }
      }
      if (l === n) {
        fe = null;
        break;
      }
      if (o = l.sibling, o !== null) {
        o.return = l.return, fe = o;
        break;
      }
      fe = l.return;
    }
  }
  function mh(n) {
    for (; fe !== null; ) {
      var l = fe;
      if (l === n) {
        fe = null;
        break;
      }
      var o = l.sibling;
      if (o !== null) {
        o.return = l.return, fe = o;
        break;
      }
      fe = l.return;
    }
  }
  function hh(n) {
    for (; fe !== null; ) {
      var l = fe;
      try {
        switch (l.tag) {
          case 0:
          case 11:
          case 15:
            var o = l.return;
            try {
              oo(4, l);
            } catch (R) {
              nt(l, o, R);
            }
            break;
          case 1:
            var d = l.stateNode;
            if (typeof d.componentDidMount == "function") {
              var m = l.return;
              try {
                d.componentDidMount();
              } catch (R) {
                nt(l, m, R);
              }
            }
            var y = l.return;
            try {
              uc(l);
            } catch (R) {
              nt(l, y, R);
            }
            break;
          case 5:
            var E = l.return;
            try {
              uc(l);
            } catch (R) {
              nt(l, E, R);
            }
        }
      } catch (R) {
        nt(l, l.return, R);
      }
      if (l === n) {
        fe = null;
        break;
      }
      var P = l.sibling;
      if (P !== null) {
        P.return = l.return, fe = P;
        break;
      }
      fe = l.return;
    }
  }
  var Lx = Math.ceil, so = K.ReactCurrentDispatcher, fc = K.ReactCurrentOwner, Zt = K.ReactCurrentBatchConfig, Fe = 0, pt = null, ot = null, yt = 0, Ht = 0, wl = Xn(0), dt = 0, Ci = null, Rr = 0, uo = 0, pc = 0, $i = null, Pt = null, mc = 0, Sl = 1 / 0, Rn = null, co = !1, hc = null, rr = null, fo = !1, lr = null, po = 0, Ei = 0, gc = null, mo = -1, ho = 0;
  function Et() {
    return (Fe & 6) !== 0 ? rt() : mo !== -1 ? mo : mo = rt();
  }
  function ir(n) {
    return (n.mode & 1) === 0 ? 1 : (Fe & 2) !== 0 && yt !== 0 ? yt & -yt : gx.transition !== null ? (ho === 0 && (ho = sp()), ho) : (n = Ke, n !== 0 || (n = window.event, n = n === void 0 ? 16 : vp(n.type)), n);
  }
  function un(n, l, o, d) {
    if (50 < Ei) throw Ei = 0, gc = null, Error(r(185));
    Zl(n, o, d), ((Fe & 2) === 0 || n !== pt) && (n === pt && ((Fe & 2) === 0 && (uo |= o), dt === 4 && ar(n, yt)), Ft(n, d), o === 1 && Fe === 0 && (l.mode & 1) === 0 && (Sl = rt() + 500, Va && Jn()));
  }
  function Ft(n, l) {
    var o = n.callbackNode;
    gb(n, l);
    var d = Ca(n, n === pt ? yt : 0);
    if (d === 0) o !== null && ip(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (l = d & -d, n.callbackPriority !== l) {
      if (o != null && ip(o), l === 1) n.tag === 0 ? hx(vh.bind(null, n)) : nm(vh.bind(null, n)), dx(function() {
        (Fe & 6) === 0 && Jn();
      }), o = null;
      else {
        switch (up(d)) {
          case 1:
            o = Zs;
            break;
          case 4:
            o = ap;
            break;
          case 16:
            o = ba;
            break;
          case 536870912:
            o = op;
            break;
          default:
            o = ba;
        }
        o = Eh(o, gh.bind(null, n));
      }
      n.callbackPriority = l, n.callbackNode = o;
    }
  }
  function gh(n, l) {
    if (mo = -1, ho = 0, (Fe & 6) !== 0) throw Error(r(327));
    var o = n.callbackNode;
    if (Cl() && n.callbackNode !== o) return null;
    var d = Ca(n, n === pt ? yt : 0);
    if (d === 0) return null;
    if ((d & 30) !== 0 || (d & n.expiredLanes) !== 0 || l) l = go(n, d);
    else {
      l = d;
      var m = Fe;
      Fe |= 2;
      var y = bh();
      (pt !== n || yt !== l) && (Rn = null, Sl = rt() + 500, Ir(n, l));
      do
        try {
          Ax();
          break;
        } catch (P) {
          yh(n, P);
        }
      while (!0);
      Iu(), so.current = y, Fe = m, ot !== null ? l = 0 : (pt = null, yt = 0, l = dt);
    }
    if (l !== 0) {
      if (l === 2 && (m = Qs(n), m !== 0 && (d = m, l = vc(n, m))), l === 1) throw o = Ci, Ir(n, 0), ar(n, d), Ft(n, rt()), o;
      if (l === 6) ar(n, d);
      else {
        if (m = n.current.alternate, (d & 30) === 0 && !Ix(m) && (l = go(n, d), l === 2 && (y = Qs(n), y !== 0 && (d = y, l = vc(n, y))), l === 1)) throw o = Ci, Ir(n, 0), ar(n, d), Ft(n, rt()), o;
        switch (n.finishedWork = m, n.finishedLanes = d, l) {
          case 0:
          case 1:
            throw Error(r(345));
          case 2:
            Mr(n, Pt, Rn);
            break;
          case 3:
            if (ar(n, d), (d & 130023424) === d && (l = mc + 500 - rt(), 10 < l)) {
              if (Ca(n, 0) !== 0) break;
              if (m = n.suspendedLanes, (m & d) !== d) {
                Et(), n.pingedLanes |= n.suspendedLanes & m;
                break;
              }
              n.timeoutHandle = Cu(Mr.bind(null, n, Pt, Rn), l);
              break;
            }
            Mr(n, Pt, Rn);
            break;
          case 4:
            if (ar(n, d), (d & 4194240) === d) break;
            for (l = n.eventTimes, m = -1; 0 < d; ) {
              var E = 31 - nn(d);
              y = 1 << E, E = l[E], E > m && (m = E), d &= ~y;
            }
            if (d = m, d = rt() - d, d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * Lx(d / 1960)) - d, 10 < d) {
              n.timeoutHandle = Cu(Mr.bind(null, n, Pt, Rn), d);
              break;
            }
            Mr(n, Pt, Rn);
            break;
          case 5:
            Mr(n, Pt, Rn);
            break;
          default:
            throw Error(r(329));
        }
      }
    }
    return Ft(n, rt()), n.callbackNode === o ? gh.bind(null, n) : null;
  }
  function vc(n, l) {
    var o = $i;
    return n.current.memoizedState.isDehydrated && (Ir(n, l).flags |= 256), n = go(n, l), n !== 2 && (l = Pt, Pt = o, l !== null && yc(l)), n;
  }
  function yc(n) {
    Pt === null ? Pt = n : Pt.push.apply(Pt, n);
  }
  function Ix(n) {
    for (var l = n; ; ) {
      if (l.flags & 16384) {
        var o = l.updateQueue;
        if (o !== null && (o = o.stores, o !== null)) for (var d = 0; d < o.length; d++) {
          var m = o[d], y = m.getSnapshot;
          m = m.value;
          try {
            if (!rn(y(), m)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (o = l.child, l.subtreeFlags & 16384 && o !== null) o.return = l, l = o;
      else {
        if (l === n) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === n) return !0;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    return !0;
  }
  function ar(n, l) {
    for (l &= ~pc, l &= ~uo, n.suspendedLanes |= l, n.pingedLanes &= ~l, n = n.expirationTimes; 0 < l; ) {
      var o = 31 - nn(l), d = 1 << o;
      n[o] = -1, l &= ~d;
    }
  }
  function vh(n) {
    if ((Fe & 6) !== 0) throw Error(r(327));
    Cl();
    var l = Ca(n, 0);
    if ((l & 1) === 0) return Ft(n, rt()), null;
    var o = go(n, l);
    if (n.tag !== 0 && o === 2) {
      var d = Qs(n);
      d !== 0 && (l = d, o = vc(n, d));
    }
    if (o === 1) throw o = Ci, Ir(n, 0), ar(n, l), Ft(n, rt()), o;
    if (o === 6) throw Error(r(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = l, Mr(n, Pt, Rn), Ft(n, rt()), null;
  }
  function bc(n, l) {
    var o = Fe;
    Fe |= 1;
    try {
      return n(l);
    } finally {
      Fe = o, Fe === 0 && (Sl = rt() + 500, Va && Jn());
    }
  }
  function Lr(n) {
    lr !== null && lr.tag === 0 && (Fe & 6) === 0 && Cl();
    var l = Fe;
    Fe |= 1;
    var o = Zt.transition, d = Ke;
    try {
      if (Zt.transition = null, Ke = 1, n) return n();
    } finally {
      Ke = d, Zt.transition = o, Fe = l, (Fe & 6) === 0 && Jn();
    }
  }
  function xc() {
    Ht = wl.current, Ge(wl);
  }
  function Ir(n, l) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, cx(o)), ot !== null) for (o = ot.return; o !== null; ) {
      var d = o;
      switch (Pu(d), d.tag) {
        case 1:
          d = d.type.childContextTypes, d != null && Da();
          break;
        case 3:
          yl(), Ge(kt), Ge(xt), Vu();
          break;
        case 5:
          Du(d);
          break;
        case 4:
          yl();
          break;
        case 13:
          Ge(Je);
          break;
        case 19:
          Ge(Je);
          break;
        case 10:
          Mu(d.type._context);
          break;
        case 22:
        case 23:
          xc();
      }
      o = o.return;
    }
    if (pt = n, ot = n = or(n.current, null), yt = Ht = l, dt = 0, Ci = null, pc = uo = Rr = 0, Pt = $i = null, Pr !== null) {
      for (l = 0; l < Pr.length; l++) if (o = Pr[l], d = o.interleaved, d !== null) {
        o.interleaved = null;
        var m = d.next, y = o.pending;
        if (y !== null) {
          var E = y.next;
          y.next = m, d.next = E;
        }
        o.pending = d;
      }
      Pr = null;
    }
    return n;
  }
  function yh(n, l) {
    do {
      var o = ot;
      try {
        if (Iu(), Ya.current = no, Ja) {
          for (var d = et.memoizedState; d !== null; ) {
            var m = d.queue;
            m !== null && (m.pending = null), d = d.next;
          }
          Ja = !1;
        }
        if (Tr = 0, ft = ct = et = null, vi = !1, yi = 0, fc.current = null, o === null || o.return === null) {
          dt = 1, Ci = l, ot = null;
          break;
        }
        e: {
          var y = n, E = o.return, P = o, R = l;
          if (l = yt, P.flags |= 32768, R !== null && typeof R == "object" && typeof R.then == "function") {
            var U = R, ee = P, te = ee.tag;
            if ((ee.mode & 1) === 0 && (te === 0 || te === 11 || te === 15)) {
              var J = ee.alternate;
              J ? (ee.updateQueue = J.updateQueue, ee.memoizedState = J.memoizedState, ee.lanes = J.lanes) : (ee.updateQueue = null, ee.memoizedState = null);
            }
            var de = Hm(E);
            if (de !== null) {
              de.flags &= -257, Bm(de, E, P, y, l), de.mode & 1 && Vm(y, U, l), l = de, R = U;
              var pe = l.updateQueue;
              if (pe === null) {
                var he = /* @__PURE__ */ new Set();
                he.add(R), l.updateQueue = he;
              } else pe.add(R);
              break e;
            } else {
              if ((l & 1) === 0) {
                Vm(y, U, l), wc();
                break e;
              }
              R = Error(r(426));
            }
          } else if (Qe && P.mode & 1) {
            var lt = Hm(E);
            if (lt !== null) {
              (lt.flags & 65536) === 0 && (lt.flags |= 256), Bm(lt, E, P, y, l), Ru(bl(R, P));
              break e;
            }
          }
          y = R = bl(R, P), dt !== 4 && (dt = 2), $i === null ? $i = [y] : $i.push(y), y = E;
          do {
            switch (y.tag) {
              case 3:
                y.flags |= 65536, l &= -l, y.lanes |= l;
                var O = Dm(y, R, l);
                pm(y, O);
                break e;
              case 1:
                P = R;
                var j = y.type, V = y.stateNode;
                if ((y.flags & 128) === 0 && (typeof j.getDerivedStateFromError == "function" || V !== null && typeof V.componentDidCatch == "function" && (rr === null || !rr.has(V)))) {
                  y.flags |= 65536, l &= -l, y.lanes |= l;
                  var le = Om(y, P, l);
                  pm(y, le);
                  break e;
                }
            }
            y = y.return;
          } while (y !== null);
        }
        wh(o);
      } catch (ge) {
        l = ge, ot === o && o !== null && (ot = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function bh() {
    var n = so.current;
    return so.current = no, n === null ? no : n;
  }
  function wc() {
    (dt === 0 || dt === 3 || dt === 2) && (dt = 4), pt === null || (Rr & 268435455) === 0 && (uo & 268435455) === 0 || ar(pt, yt);
  }
  function go(n, l) {
    var o = Fe;
    Fe |= 2;
    var d = bh();
    (pt !== n || yt !== l) && (Rn = null, Ir(n, l));
    do
      try {
        Mx();
        break;
      } catch (m) {
        yh(n, m);
      }
    while (!0);
    if (Iu(), Fe = o, so.current = d, ot !== null) throw Error(r(261));
    return pt = null, yt = 0, dt;
  }
  function Mx() {
    for (; ot !== null; ) xh(ot);
  }
  function Ax() {
    for (; ot !== null && !ob(); ) xh(ot);
  }
  function xh(n) {
    var l = $h(n.alternate, n, Ht);
    n.memoizedProps = n.pendingProps, l === null ? wh(n) : ot = l, fc.current = null;
  }
  function wh(n) {
    var l = n;
    do {
      var o = l.alternate;
      if (n = l.return, (l.flags & 32768) === 0) {
        if (o = Nx(o, l, Ht), o !== null) {
          ot = o;
          return;
        }
      } else {
        if (o = Px(o, l), o !== null) {
          o.flags &= 32767, ot = o;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          dt = 6, ot = null;
          return;
        }
      }
      if (l = l.sibling, l !== null) {
        ot = l;
        return;
      }
      ot = l = n;
    } while (l !== null);
    dt === 0 && (dt = 5);
  }
  function Mr(n, l, o) {
    var d = Ke, m = Zt.transition;
    try {
      Zt.transition = null, Ke = 1, jx(n, l, o, d);
    } finally {
      Zt.transition = m, Ke = d;
    }
    return null;
  }
  function jx(n, l, o, d) {
    do
      Cl();
    while (lr !== null);
    if ((Fe & 6) !== 0) throw Error(r(327));
    o = n.finishedWork;
    var m = n.finishedLanes;
    if (o === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(r(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var y = o.lanes | o.childLanes;
    if (vb(n, y), n === pt && (ot = pt = null, yt = 0), (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || fo || (fo = !0, Eh(ba, function() {
      return Cl(), null;
    })), y = (o.flags & 15990) !== 0, (o.subtreeFlags & 15990) !== 0 || y) {
      y = Zt.transition, Zt.transition = null;
      var E = Ke;
      Ke = 1;
      var P = Fe;
      Fe |= 4, fc.current = null, Tx(n, o), dh(o, n), rx(wu), ka = !!xu, wu = xu = null, n.current = o, Rx(o), sb(), Fe = P, Ke = E, Zt.transition = y;
    } else n.current = o;
    if (fo && (fo = !1, lr = n, po = m), y = n.pendingLanes, y === 0 && (rr = null), db(o.stateNode), Ft(n, rt()), l !== null) for (d = n.onRecoverableError, o = 0; o < l.length; o++) m = l[o], d(m.value, { componentStack: m.stack, digest: m.digest });
    if (co) throw co = !1, n = hc, hc = null, n;
    return (po & 1) !== 0 && n.tag !== 0 && Cl(), y = n.pendingLanes, (y & 1) !== 0 ? n === gc ? Ei++ : (Ei = 0, gc = n) : Ei = 0, Jn(), null;
  }
  function Cl() {
    if (lr !== null) {
      var n = up(po), l = Zt.transition, o = Ke;
      try {
        if (Zt.transition = null, Ke = 16 > n ? 16 : n, lr === null) var d = !1;
        else {
          if (n = lr, lr = null, po = 0, (Fe & 6) !== 0) throw Error(r(331));
          var m = Fe;
          for (Fe |= 4, fe = n.current; fe !== null; ) {
            var y = fe, E = y.child;
            if ((fe.flags & 16) !== 0) {
              var P = y.deletions;
              if (P !== null) {
                for (var R = 0; R < P.length; R++) {
                  var U = P[R];
                  for (fe = U; fe !== null; ) {
                    var ee = fe;
                    switch (ee.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Si(8, ee, y);
                    }
                    var te = ee.child;
                    if (te !== null) te.return = ee, fe = te;
                    else for (; fe !== null; ) {
                      ee = fe;
                      var J = ee.sibling, de = ee.return;
                      if (ah(ee), ee === U) {
                        fe = null;
                        break;
                      }
                      if (J !== null) {
                        J.return = de, fe = J;
                        break;
                      }
                      fe = de;
                    }
                  }
                }
                var pe = y.alternate;
                if (pe !== null) {
                  var he = pe.child;
                  if (he !== null) {
                    pe.child = null;
                    do {
                      var lt = he.sibling;
                      he.sibling = null, he = lt;
                    } while (he !== null);
                  }
                }
                fe = y;
              }
            }
            if ((y.subtreeFlags & 2064) !== 0 && E !== null) E.return = y, fe = E;
            else e: for (; fe !== null; ) {
              if (y = fe, (y.flags & 2048) !== 0) switch (y.tag) {
                case 0:
                case 11:
                case 15:
                  Si(9, y, y.return);
              }
              var O = y.sibling;
              if (O !== null) {
                O.return = y.return, fe = O;
                break e;
              }
              fe = y.return;
            }
          }
          var j = n.current;
          for (fe = j; fe !== null; ) {
            E = fe;
            var V = E.child;
            if ((E.subtreeFlags & 2064) !== 0 && V !== null) V.return = E, fe = V;
            else e: for (E = j; fe !== null; ) {
              if (P = fe, (P.flags & 2048) !== 0) try {
                switch (P.tag) {
                  case 0:
                  case 11:
                  case 15:
                    oo(9, P);
                }
              } catch (ge) {
                nt(P, P.return, ge);
              }
              if (P === E) {
                fe = null;
                break e;
              }
              var le = P.sibling;
              if (le !== null) {
                le.return = P.return, fe = le;
                break e;
              }
              fe = P.return;
            }
          }
          if (Fe = m, Jn(), mn && typeof mn.onPostCommitFiberRoot == "function") try {
            mn.onPostCommitFiberRoot(xa, n);
          } catch {
          }
          d = !0;
        }
        return d;
      } finally {
        Ke = o, Zt.transition = l;
      }
    }
    return !1;
  }
  function Sh(n, l, o) {
    l = bl(o, l), l = Dm(n, l, 1), n = tr(n, l, 1), l = Et(), n !== null && (Zl(n, 1, l), Ft(n, l));
  }
  function nt(n, l, o) {
    if (n.tag === 3) Sh(n, n, o);
    else for (; l !== null; ) {
      if (l.tag === 3) {
        Sh(l, n, o);
        break;
      } else if (l.tag === 1) {
        var d = l.stateNode;
        if (typeof l.type.getDerivedStateFromError == "function" || typeof d.componentDidCatch == "function" && (rr === null || !rr.has(d))) {
          n = bl(o, n), n = Om(l, n, 1), l = tr(l, n, 1), n = Et(), l !== null && (Zl(l, 1, n), Ft(l, n));
          break;
        }
      }
      l = l.return;
    }
  }
  function zx(n, l, o) {
    var d = n.pingCache;
    d !== null && d.delete(l), l = Et(), n.pingedLanes |= n.suspendedLanes & o, pt === n && (yt & o) === o && (dt === 4 || dt === 3 && (yt & 130023424) === yt && 500 > rt() - mc ? Ir(n, 0) : pc |= o), Ft(n, l);
  }
  function Ch(n, l) {
    l === 0 && ((n.mode & 1) === 0 ? l = 1 : (l = Sa, Sa <<= 1, (Sa & 130023424) === 0 && (Sa = 4194304)));
    var o = Et();
    n = Pn(n, l), n !== null && (Zl(n, l, o), Ft(n, o));
  }
  function Kx(n) {
    var l = n.memoizedState, o = 0;
    l !== null && (o = l.retryLane), Ch(n, o);
  }
  function Dx(n, l) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var d = n.stateNode, m = n.memoizedState;
        m !== null && (o = m.retryLane);
        break;
      case 19:
        d = n.stateNode;
        break;
      default:
        throw Error(r(314));
    }
    d !== null && d.delete(l), Ch(n, o);
  }
  var $h;
  $h = function(n, l, o) {
    if (n !== null) if (n.memoizedProps !== l.pendingProps || kt.current) Nt = !0;
    else {
      if ((n.lanes & o) === 0 && (l.flags & 128) === 0) return Nt = !1, _x(n, l, o);
      Nt = (n.flags & 131072) !== 0;
    }
    else Nt = !1, Qe && (l.flags & 1048576) !== 0 && rm(l, Ba, l.index);
    switch (l.lanes = 0, l.tag) {
      case 2:
        var d = l.type;
        io(n, l), n = l.pendingProps;
        var m = dl(l, xt.current);
        vl(l, o), m = Uu(null, l, d, n, m, o);
        var y = Wu();
        return l.flags |= 1, typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0 ? (l.tag = 1, l.memoizedState = null, l.updateQueue = null, _t(d) ? (y = !0, Oa(l)) : y = !1, l.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, zu(l), m.updater = ro, l.stateNode = m, m._reactInternals = l, Yu(l, d, n, o), l = nc(null, l, d, !0, y, o)) : (l.tag = 0, Qe && y && Nu(l), $t(null, l, m, o), l = l.child), l;
      case 16:
        d = l.elementType;
        e: {
          switch (io(n, l), n = l.pendingProps, m = d._init, d = m(d._payload), l.type = d, m = l.tag = Vx(d), n = an(d, n), m) {
            case 0:
              l = tc(null, l, d, n, o);
              break e;
            case 1:
              l = Qm(null, l, d, n, o);
              break e;
            case 11:
              l = Um(null, l, d, n, o);
              break e;
            case 14:
              l = Wm(null, l, d, an(d.type, n), o);
              break e;
          }
          throw Error(r(
            306,
            d,
            ""
          ));
        }
        return l;
      case 0:
        return d = l.type, m = l.pendingProps, m = l.elementType === d ? m : an(d, m), tc(n, l, d, m, o);
      case 1:
        return d = l.type, m = l.pendingProps, m = l.elementType === d ? m : an(d, m), Qm(n, l, d, m, o);
      case 3:
        e: {
          if (Xm(l), n === null) throw Error(r(387));
          d = l.pendingProps, y = l.memoizedState, m = y.element, fm(n, l), Qa(l, d, null, o);
          var E = l.memoizedState;
          if (d = E.element, y.isDehydrated) if (y = { element: d, isDehydrated: !1, cache: E.cache, pendingSuspenseBoundaries: E.pendingSuspenseBoundaries, transitions: E.transitions }, l.updateQueue.baseState = y, l.memoizedState = y, l.flags & 256) {
            m = bl(Error(r(423)), l), l = Ym(n, l, d, o, m);
            break e;
          } else if (d !== m) {
            m = bl(Error(r(424)), l), l = Ym(n, l, d, o, m);
            break e;
          } else for (Vt = Qn(l.stateNode.containerInfo.firstChild), Ot = l, Qe = !0, ln = null, o = cm(l, null, d, o), l.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (ml(), d === m) {
              l = Tn(n, l, o);
              break e;
            }
            $t(n, l, d, o);
          }
          l = l.child;
        }
        return l;
      case 5:
        return hm(l), n === null && Tu(l), d = l.type, m = l.pendingProps, y = n !== null ? n.memoizedProps : null, E = m.children, Su(d, m) ? E = null : y !== null && Su(d, y) && (l.flags |= 32), Zm(n, l), $t(n, l, E, o), l.child;
      case 6:
        return n === null && Tu(l), null;
      case 13:
        return Jm(n, l, o);
      case 4:
        return Ku(l, l.stateNode.containerInfo), d = l.pendingProps, n === null ? l.child = hl(l, null, d, o) : $t(n, l, d, o), l.child;
      case 11:
        return d = l.type, m = l.pendingProps, m = l.elementType === d ? m : an(d, m), Um(n, l, d, m, o);
      case 7:
        return $t(n, l, l.pendingProps, o), l.child;
      case 8:
        return $t(n, l, l.pendingProps.children, o), l.child;
      case 12:
        return $t(n, l, l.pendingProps.children, o), l.child;
      case 10:
        e: {
          if (d = l.type._context, m = l.pendingProps, y = l.memoizedProps, E = m.value, He(Ga, d._currentValue), d._currentValue = E, y !== null) if (rn(y.value, E)) {
            if (y.children === m.children && !kt.current) {
              l = Tn(n, l, o);
              break e;
            }
          } else for (y = l.child, y !== null && (y.return = l); y !== null; ) {
            var P = y.dependencies;
            if (P !== null) {
              E = y.child;
              for (var R = P.firstContext; R !== null; ) {
                if (R.context === d) {
                  if (y.tag === 1) {
                    R = Fn(-1, o & -o), R.tag = 2;
                    var U = y.updateQueue;
                    if (U !== null) {
                      U = U.shared;
                      var ee = U.pending;
                      ee === null ? R.next = R : (R.next = ee.next, ee.next = R), U.pending = R;
                    }
                  }
                  y.lanes |= o, R = y.alternate, R !== null && (R.lanes |= o), Au(
                    y.return,
                    o,
                    l
                  ), P.lanes |= o;
                  break;
                }
                R = R.next;
              }
            } else if (y.tag === 10) E = y.type === l.type ? null : y.child;
            else if (y.tag === 18) {
              if (E = y.return, E === null) throw Error(r(341));
              E.lanes |= o, P = E.alternate, P !== null && (P.lanes |= o), Au(E, o, l), E = y.sibling;
            } else E = y.child;
            if (E !== null) E.return = y;
            else for (E = y; E !== null; ) {
              if (E === l) {
                E = null;
                break;
              }
              if (y = E.sibling, y !== null) {
                y.return = E.return, E = y;
                break;
              }
              E = E.return;
            }
            y = E;
          }
          $t(n, l, m.children, o), l = l.child;
        }
        return l;
      case 9:
        return m = l.type, d = l.pendingProps.children, vl(l, o), m = Gt(m), d = d(m), l.flags |= 1, $t(n, l, d, o), l.child;
      case 14:
        return d = l.type, m = an(d, l.pendingProps), m = an(d.type, m), Wm(n, l, d, m, o);
      case 15:
        return Gm(n, l, l.type, l.pendingProps, o);
      case 17:
        return d = l.type, m = l.pendingProps, m = l.elementType === d ? m : an(d, m), io(n, l), l.tag = 1, _t(d) ? (n = !0, Oa(l)) : n = !1, vl(l, o), zm(l, d, m), Yu(l, d, m, o), nc(null, l, d, !0, n, o);
      case 19:
        return th(n, l, o);
      case 22:
        return qm(n, l, o);
    }
    throw Error(r(156, l.tag));
  };
  function Eh(n, l) {
    return lp(n, l);
  }
  function Ox(n, l, o, d) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = d, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Qt(n, l, o, d) {
    return new Ox(n, l, o, d);
  }
  function Sc(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Vx(n) {
    if (typeof n == "function") return Sc(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === A) return 11;
      if (n === D) return 14;
    }
    return 2;
  }
  function or(n, l) {
    var o = n.alternate;
    return o === null ? (o = Qt(n.tag, l, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = l, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, l = n.dependencies, o.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function vo(n, l, o, d, m, y) {
    var E = 2;
    if (d = n, typeof n == "function") Sc(n) && (E = 1);
    else if (typeof n == "string") E = 5;
    else e: switch (n) {
      case Q:
        return Ar(o.children, m, y, l);
      case X:
        E = 8, m |= 8;
        break;
      case ie:
        return n = Qt(12, o, l, m | 2), n.elementType = ie, n.lanes = y, n;
      case B:
        return n = Qt(13, o, l, m), n.elementType = B, n.lanes = y, n;
      case _:
        return n = Qt(19, o, l, m), n.elementType = _, n.lanes = y, n;
      case M:
        return yo(o, m, y, l);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case ae:
            E = 10;
            break e;
          case ne:
            E = 9;
            break e;
          case A:
            E = 11;
            break e;
          case D:
            E = 14;
            break e;
          case I:
            E = 16, d = null;
            break e;
        }
        throw Error(r(130, n == null ? n : typeof n, ""));
    }
    return l = Qt(E, o, l, m), l.elementType = n, l.type = d, l.lanes = y, l;
  }
  function Ar(n, l, o, d) {
    return n = Qt(7, n, d, l), n.lanes = o, n;
  }
  function yo(n, l, o, d) {
    return n = Qt(22, n, d, l), n.elementType = M, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function Cc(n, l, o) {
    return n = Qt(6, n, null, l), n.lanes = o, n;
  }
  function $c(n, l, o) {
    return l = Qt(4, n.children !== null ? n.children : [], n.key, l), l.lanes = o, l.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, l;
  }
  function Hx(n, l, o, d, m) {
    this.tag = l, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Xs(0), this.expirationTimes = Xs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xs(0), this.identifierPrefix = d, this.onRecoverableError = m, this.mutableSourceEagerHydrationData = null;
  }
  function Ec(n, l, o, d, m, y, E, P, R) {
    return n = new Hx(n, l, o, P, R), l === 1 ? (l = 1, y === !0 && (l |= 8)) : l = 0, y = Qt(3, null, null, l), n.current = y, y.stateNode = n, y.memoizedState = { element: d, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, zu(y), n;
  }
  function Bx(n, l, o) {
    var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: re, key: d == null ? null : "" + d, children: n, containerInfo: l, implementation: o };
  }
  function kh(n) {
    if (!n) return Yn;
    n = n._reactInternals;
    e: {
      if ($r(n) !== n || n.tag !== 1) throw Error(r(170));
      var l = n;
      do {
        switch (l.tag) {
          case 3:
            l = l.stateNode.context;
            break e;
          case 1:
            if (_t(l.type)) {
              l = l.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        l = l.return;
      } while (l !== null);
      throw Error(r(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (_t(o)) return em(n, o, l);
    }
    return l;
  }
  function _h(n, l, o, d, m, y, E, P, R) {
    return n = Ec(o, d, !0, n, m, y, E, P, R), n.context = kh(null), o = n.current, d = Et(), m = ir(o), y = Fn(d, m), y.callback = l ?? null, tr(o, y, m), n.current.lanes = m, Zl(n, m, d), Ft(n, d), n;
  }
  function bo(n, l, o, d) {
    var m = l.current, y = Et(), E = ir(m);
    return o = kh(o), l.context === null ? l.context = o : l.pendingContext = o, l = Fn(y, E), l.payload = { element: n }, d = d === void 0 ? null : d, d !== null && (l.callback = d), n = tr(m, l, E), n !== null && (un(n, m, E, y), Za(n, m, E)), E;
  }
  function xo(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Nh(n, l) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < l ? o : l;
    }
  }
  function kc(n, l) {
    Nh(n, l), (n = n.alternate) && Nh(n, l);
  }
  function Ux() {
    return null;
  }
  var Ph = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function _c(n) {
    this._internalRoot = n;
  }
  wo.prototype.render = _c.prototype.render = function(n) {
    var l = this._internalRoot;
    if (l === null) throw Error(r(409));
    bo(n, l, null, null);
  }, wo.prototype.unmount = _c.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var l = n.containerInfo;
      Lr(function() {
        bo(null, n, null, null);
      }), l[En] = null;
    }
  };
  function wo(n) {
    this._internalRoot = n;
  }
  wo.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var l = fp();
      n = { blockedOn: null, target: n, priority: l };
      for (var o = 0; o < Gn.length && l !== 0 && l < Gn[o].priority; o++) ;
      Gn.splice(o, 0, n), o === 0 && hp(n);
    }
  };
  function Nc(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function So(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Fh() {
  }
  function Wx(n, l, o, d, m) {
    if (m) {
      if (typeof d == "function") {
        var y = d;
        d = function() {
          var U = xo(E);
          y.call(U);
        };
      }
      var E = _h(l, d, n, 0, null, !1, !1, "", Fh);
      return n._reactRootContainer = E, n[En] = E.current, ui(n.nodeType === 8 ? n.parentNode : n), Lr(), E;
    }
    for (; m = n.lastChild; ) n.removeChild(m);
    if (typeof d == "function") {
      var P = d;
      d = function() {
        var U = xo(R);
        P.call(U);
      };
    }
    var R = Ec(n, 0, !1, null, null, !1, !1, "", Fh);
    return n._reactRootContainer = R, n[En] = R.current, ui(n.nodeType === 8 ? n.parentNode : n), Lr(function() {
      bo(l, R, o, d);
    }), R;
  }
  function Co(n, l, o, d, m) {
    var y = o._reactRootContainer;
    if (y) {
      var E = y;
      if (typeof m == "function") {
        var P = m;
        m = function() {
          var R = xo(E);
          P.call(R);
        };
      }
      bo(l, E, n, m);
    } else E = Wx(o, l, n, m, d);
    return xo(E);
  }
  cp = function(n) {
    switch (n.tag) {
      case 3:
        var l = n.stateNode;
        if (l.current.memoizedState.isDehydrated) {
          var o = ql(l.pendingLanes);
          o !== 0 && (Ys(l, o | 1), Ft(l, rt()), (Fe & 6) === 0 && (Sl = rt() + 500, Jn()));
        }
        break;
      case 13:
        Lr(function() {
          var d = Pn(n, 1);
          if (d !== null) {
            var m = Et();
            un(d, n, 1, m);
          }
        }), kc(n, 1);
    }
  }, Js = function(n) {
    if (n.tag === 13) {
      var l = Pn(n, 134217728);
      if (l !== null) {
        var o = Et();
        un(l, n, 134217728, o);
      }
      kc(n, 134217728);
    }
  }, dp = function(n) {
    if (n.tag === 13) {
      var l = ir(n), o = Pn(n, l);
      if (o !== null) {
        var d = Et();
        un(o, n, l, d);
      }
      kc(n, l);
    }
  }, fp = function() {
    return Ke;
  }, pp = function(n, l) {
    var o = Ke;
    try {
      return Ke = n, l();
    } finally {
      Ke = o;
    }
  }, Us = function(n, l, o) {
    switch (l) {
      case "input":
        if (Bt(n, o), l = o.name, o.type === "radio" && l != null) {
          for (o = n; o.parentNode; ) o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + l) + '][type="radio"]'), l = 0; l < o.length; l++) {
            var d = o[l];
            if (d !== n && d.form === n.form) {
              var m = Ka(d);
              if (!m) throw Error(r(90));
              se(d), Bt(d, m);
            }
          }
        }
        break;
      case "textarea":
        Vf(n, o);
        break;
      case "select":
        l = o.value, l != null && tt(n, !!o.multiple, l, !1);
    }
  }, Xf = bc, Yf = Lr;
  var Gx = { usingClientEntryPoint: !1, Events: [fi, ul, Ka, Zf, Qf, bc] }, ki = { findFiberByHostInstance: Er, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, qx = { bundleType: ki.bundleType, version: ki.version, rendererPackageName: ki.rendererPackageName, rendererConfig: ki.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: K.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = np(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: ki.findFiberByHostInstance || Ux, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var $o = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$o.isDisabled && $o.supportsFiber) try {
      xa = $o.inject(qx), mn = $o;
    } catch {
    }
  }
  return Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gx, Tt.createPortal = function(n, l) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Nc(l)) throw Error(r(200));
    return Bx(n, l, null, o);
  }, Tt.createRoot = function(n, l) {
    if (!Nc(n)) throw Error(r(299));
    var o = !1, d = "", m = Ph;
    return l != null && (l.unstable_strictMode === !0 && (o = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), l = Ec(n, 1, !1, null, null, o, !1, d, m), n[En] = l.current, ui(n.nodeType === 8 ? n.parentNode : n), new _c(l);
  }, Tt.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var l = n._reactInternals;
    if (l === void 0)
      throw typeof n.render == "function" ? Error(r(188)) : (n = Object.keys(n).join(","), Error(r(268, n)));
    return n = np(l), n = n === null ? null : n.stateNode, n;
  }, Tt.flushSync = function(n) {
    return Lr(n);
  }, Tt.hydrate = function(n, l, o) {
    if (!So(l)) throw Error(r(200));
    return Co(null, n, l, !0, o);
  }, Tt.hydrateRoot = function(n, l, o) {
    if (!Nc(n)) throw Error(r(405));
    var d = o != null && o.hydratedSources || null, m = !1, y = "", E = Ph;
    if (o != null && (o.unstable_strictMode === !0 && (m = !0), o.identifierPrefix !== void 0 && (y = o.identifierPrefix), o.onRecoverableError !== void 0 && (E = o.onRecoverableError)), l = _h(l, null, n, 1, o ?? null, m, !1, y, E), n[En] = l.current, ui(n), d) for (n = 0; n < d.length; n++) o = d[n], m = o._getVersion, m = m(o._source), l.mutableSourceEagerHydrationData == null ? l.mutableSourceEagerHydrationData = [o, m] : l.mutableSourceEagerHydrationData.push(
      o,
      m
    );
    return new wo(l);
  }, Tt.render = function(n, l, o) {
    if (!So(l)) throw Error(r(200));
    return Co(null, n, l, !1, o);
  }, Tt.unmountComponentAtNode = function(n) {
    if (!So(n)) throw Error(r(40));
    return n._reactRootContainer ? (Lr(function() {
      Co(null, null, n, !1, function() {
        n._reactRootContainer = null, n[En] = null;
      });
    }), !0) : !1;
  }, Tt.unstable_batchedUpdates = bc, Tt.unstable_renderSubtreeIntoContainer = function(n, l, o, d) {
    if (!So(o)) throw Error(r(200));
    if (n == null || n._reactInternals === void 0) throw Error(r(38));
    return Co(n, l, o, !1, d);
  }, Tt.version = "18.3.1-next-f1338f8080-20240426", Tt;
}
var zh;
function L1() {
  if (zh) return Tc.exports;
  zh = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return e(), Tc.exports = t2(), Tc.exports;
}
var Kh;
function n2() {
  if (Kh) return Eo;
  Kh = 1;
  var e = L1();
  return Eo.createRoot = e.createRoot, Eo.hydrateRoot = e.hydrateRoot, Eo;
}
var r2 = n2(), S = ms();
const C = /* @__PURE__ */ Od(S);
class Gr {
  constructor(t) {
    this.value = null, this.level = 0, this.hasChildNodes = !1, this.rendered = null, this.textValue = "", this["aria-label"] = void 0, this.index = 0, this.parentKey = null, this.prevKey = null, this.nextKey = null, this.firstChildKey = null, this.lastChildKey = null, this.props = {}, this.colSpan = null, this.colIndex = null, this.type = this.constructor.type, this.key = t;
  }
  get childNodes() {
    throw new Error("childNodes is not supported");
  }
  clone() {
    let t = new this.constructor(this.key);
    return t.value = this.value, t.level = this.level, t.hasChildNodes = this.hasChildNodes, t.rendered = this.rendered, t.textValue = this.textValue, t["aria-label"] = this["aria-label"], t.index = this.index, t.parentKey = this.parentKey, t.prevKey = this.prevKey, t.nextKey = this.nextKey, t.firstChildKey = this.firstChildKey, t.lastChildKey = this.lastChildKey, t.props = this.props, t.render = this.render, t.colSpan = this.colSpan, t.colIndex = this.colIndex, t;
  }
  filter(t, r, a) {
    let i = this.clone();
    return r.addDescendants(i, t), i;
  }
}
class I1 extends Gr {
  filter(t, r, a) {
    let [i, s] = M1(t, r, this.firstChildKey, a), c = this.clone();
    return c.firstChildKey = i, c.lastChildKey = s, c;
  }
}
class I$ extends Gr {
  static {
    this.type = "header";
  }
}
class l2 extends Gr {
  static {
    this.type = "loader";
  }
}
class i2 extends I1 {
  static {
    this.type = "item";
  }
  filter(t, r, a) {
    if (a(this.textValue, this)) {
      let i = this.clone();
      return r.addDescendants(i, t), i;
    }
    return null;
  }
}
class M$ extends I1 {
  static {
    this.type = "section";
  }
  filter(t, r, a) {
    let i = super.filter(t, r, a);
    if (i && i.lastChildKey !== null) {
      let s = t.getItem(i.lastChildKey);
      if (s && s.type !== "header") return i;
    }
    return null;
  }
}
class a2 {
  get size() {
    return this.itemCount;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  *[Symbol.iterator]() {
    let t = this.firstKey != null ? this.keyMap.get(this.firstKey) : void 0;
    for (; t; )
      yield t, t = t.nextKey != null ? this.keyMap.get(t.nextKey) : void 0;
  }
  getChildren(t) {
    let r = this.keyMap;
    return {
      *[Symbol.iterator]() {
        let a = r.get(t), i = a?.firstChildKey != null ? r.get(a.firstChildKey) : null;
        for (; i; )
          yield i, i = i.nextKey != null ? r.get(i.nextKey) : void 0;
      }
    };
  }
  getKeyBefore(t) {
    let r = this.keyMap.get(t);
    if (!r) return null;
    if (r.prevKey != null) {
      for (r = this.keyMap.get(r.prevKey); r && r.type !== "item" && r.lastChildKey != null; ) r = this.keyMap.get(r.lastChildKey);
      return r?.key ?? null;
    }
    return r.parentKey;
  }
  getKeyAfter(t) {
    let r = this.keyMap.get(t);
    if (!r) return null;
    if (r.type !== "item" && r.firstChildKey != null) return r.firstChildKey;
    for (; r; ) {
      if (r.nextKey != null) return r.nextKey;
      if (r.parentKey != null) r = this.keyMap.get(r.parentKey);
      else return null;
    }
    return null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    let t = this.lastKey != null ? this.keyMap.get(this.lastKey) : null;
    for (; t?.lastChildKey != null; ) t = this.keyMap.get(t.lastChildKey);
    return t?.key ?? null;
  }
  getItem(t) {
    return this.keyMap.get(t) ?? null;
  }
  at() {
    throw new Error("Not implemented");
  }
  clone() {
    let t = this.constructor, r = new t();
    return r.keyMap = new Map(this.keyMap), r.firstKey = this.firstKey, r.lastKey = this.lastKey, r.itemCount = this.itemCount, r;
  }
  addNode(t) {
    if (this.frozen) throw new Error("Cannot add a node to a frozen collection");
    t.type === "item" && this.keyMap.get(t.key) == null && this.itemCount++, this.keyMap.set(t.key, t);
  }
  // Deeply add a node and its children to the collection from another collection, primarily used when filtering a collection
  addDescendants(t, r) {
    this.addNode(t);
    let a = r.getChildren(t.key);
    for (let i of a) this.addDescendants(i, r);
  }
  removeNode(t) {
    if (this.frozen) throw new Error("Cannot remove a node to a frozen collection");
    let r = this.keyMap.get(t);
    r != null && r.type === "item" && this.itemCount--, this.keyMap.delete(t);
  }
  commit(t, r, a = !1) {
    if (this.frozen) throw new Error("Cannot commit a frozen collection");
    this.firstKey = t, this.lastKey = r, this.frozen = !a;
  }
  filter(t) {
    let r = new this.constructor(), [a, i] = M1(this, r, this.firstKey, t);
    return r?.commit(a, i), r;
  }
  constructor() {
    this.keyMap = /* @__PURE__ */ new Map(), this.firstKey = null, this.lastKey = null, this.frozen = !1, this.itemCount = 0;
  }
}
function M1(e, t, r, a) {
  if (r == null) return [
    null,
    null
  ];
  let i = null, s = null, c = e.getItem(r);
  for (; c != null; ) {
    let u = c.filter(e, t, a);
    u != null && (u.nextKey = null, s && (u.prevKey = s.key, s.nextKey = u.key), i == null && (i = u), t.addNode(u), s = u), c = c.nextKey != null ? e.getItem(c.nextKey) : null;
  }
  if (s && s.type === "separator") {
    let u = s.prevKey;
    t.removeNode(s.key), u != null ? (s = t.getItem(u), s.nextKey = null) : s = null;
  }
  return [
    i?.key ?? null,
    s?.key ?? null
  ];
}
class A1 {
  constructor(t) {
    this._firstChild = null, this._lastChild = null, this._previousSibling = null, this._nextSibling = null, this._parentNode = null, this._minInvalidChildIndex = null, this.ownerDocument = t;
  }
  *[Symbol.iterator]() {
    let t = this.firstChild;
    for (; t; )
      yield t, t = t.nextSibling;
  }
  get firstChild() {
    return this._firstChild;
  }
  set firstChild(t) {
    this._firstChild = t, this.ownerDocument.markDirty(this);
  }
  get lastChild() {
    return this._lastChild;
  }
  set lastChild(t) {
    this._lastChild = t, this.ownerDocument.markDirty(this);
  }
  get previousSibling() {
    return this._previousSibling;
  }
  set previousSibling(t) {
    this._previousSibling = t, this.ownerDocument.markDirty(this);
  }
  get nextSibling() {
    return this._nextSibling;
  }
  set nextSibling(t) {
    this._nextSibling = t, this.ownerDocument.markDirty(this);
  }
  get parentNode() {
    return this._parentNode;
  }
  set parentNode(t) {
    this._parentNode = t, this.ownerDocument.markDirty(this);
  }
  get isConnected() {
    return this.parentNode?.isConnected || !1;
  }
  invalidateChildIndices(t) {
    (this._minInvalidChildIndex == null || !this._minInvalidChildIndex.isConnected || t.index < this._minInvalidChildIndex.index) && (this._minInvalidChildIndex = t, this.ownerDocument.markDirty(this));
  }
  updateChildIndices() {
    let t = this._minInvalidChildIndex;
    for (; t; )
      t.index = t.previousSibling ? t.previousSibling.index + 1 : 0, t = t.nextSibling;
    this._minInvalidChildIndex = null;
  }
  appendChild(t) {
    t.parentNode && t.parentNode.removeChild(t), this.firstChild == null && (this.firstChild = t), this.lastChild ? (this.lastChild.nextSibling = t, t.index = this.lastChild.index + 1, t.previousSibling = this.lastChild) : (t.previousSibling = null, t.index = 0), t.parentNode = this, t.nextSibling = null, this.lastChild = t, this.ownerDocument.markDirty(this), this.isConnected && this.ownerDocument.queueUpdate();
  }
  insertBefore(t, r) {
    if (r == null) return this.appendChild(t);
    t.parentNode && t.parentNode.removeChild(t), t.nextSibling = r, t.previousSibling = r.previousSibling, t.index = r.index - 1, this.firstChild === r ? this.firstChild = t : r.previousSibling && (r.previousSibling.nextSibling = t), r.previousSibling = t, t.parentNode = r.parentNode, this.invalidateChildIndices(t), this.isConnected && this.ownerDocument.queueUpdate();
  }
  removeChild(t) {
    t.parentNode === this && (this._minInvalidChildIndex === t && (this._minInvalidChildIndex = null), t.nextSibling && (this.invalidateChildIndices(t.nextSibling), t.nextSibling.previousSibling = t.previousSibling), t.previousSibling && (t.previousSibling.nextSibling = t.nextSibling), this.firstChild === t && (this.firstChild = t.nextSibling), this.lastChild === t && (this.lastChild = t.previousSibling), t.parentNode = null, t.nextSibling = null, t.previousSibling = null, t.index = 0, this.ownerDocument.markDirty(t), this.isConnected && this.ownerDocument.queueUpdate());
  }
  addEventListener() {
  }
  removeEventListener() {
  }
  get previousVisibleSibling() {
    let t = this.previousSibling;
    for (; t && t.isHidden; ) t = t.previousSibling;
    return t;
  }
  get nextVisibleSibling() {
    let t = this.nextSibling;
    for (; t && t.isHidden; ) t = t.nextSibling;
    return t;
  }
  get firstVisibleChild() {
    let t = this.firstChild;
    for (; t && t.isHidden; ) t = t.nextSibling;
    return t;
  }
  get lastVisibleChild() {
    let t = this.lastChild;
    for (; t && t.isHidden; ) t = t.previousSibling;
    return t;
  }
}
class Pl extends A1 {
  constructor(t, r) {
    super(r), this.nodeType = 8, this.isMutated = !0, this._index = 0, this.isHidden = !1, this.node = null;
  }
  get index() {
    return this._index;
  }
  set index(t) {
    this._index = t, this.ownerDocument.markDirty(this);
  }
  get level() {
    return this.parentNode instanceof Pl ? this.parentNode.level + (this.parentNode.node?.type === "item" ? 1 : 0) : 0;
  }
  /**
  * Lazily gets a mutable instance of a Node. If the node has already
  * been cloned during this update cycle, it just returns the existing one.
  */
  getMutableNode() {
    return this.node == null ? null : (this.isMutated || (this.node = this.node.clone(), this.isMutated = !0), this.ownerDocument.markDirty(this), this.node);
  }
  updateNode() {
    let t = this.nextVisibleSibling, r = this.getMutableNode();
    if (r != null && (r.index = this.index, r.level = this.level, r.parentKey = this.parentNode instanceof Pl ? this.parentNode.node?.key ?? null : null, r.prevKey = this.previousVisibleSibling?.node?.key ?? null, r.nextKey = t?.node?.key ?? null, r.hasChildNodes = !!this.firstChild, r.firstChildKey = this.firstVisibleChild?.node?.key ?? null, r.lastChildKey = this.lastVisibleChild?.node?.key ?? null, (r.colSpan != null || r.colIndex != null) && t)) {
      let a = (r.colIndex ?? r.index) + (r.colSpan ?? 1);
      if (t.node != null && a !== t.node.colIndex) {
        let i = t.getMutableNode();
        i.colIndex = a;
      }
    }
  }
  setProps(t, r, a, i, s) {
    let c, { value: u, textValue: p, id: f, ...v } = t;
    if (this.node == null ? (c = new a(f ?? `react-aria-${++this.ownerDocument.nodeId}`), this.node = c) : c = this.getMutableNode(), v.ref = r, c.props = v, c.rendered = i, c.render = s, c.value = u, t["aria-label"] && (c["aria-label"] = t["aria-label"]), c.textValue = p || (typeof v.children == "string" ? v.children : "") || t["aria-label"] || "", f != null && f !== c.key) throw new Error("Cannot change the id of an item");
    v.colSpan != null && (c.colSpan = v.colSpan), this.isConnected && this.ownerDocument.queueUpdate();
  }
  get style() {
    let t = this;
    return {
      get display() {
        return t.isHidden ? "none" : "";
      },
      set display(r) {
        let a = r === "none";
        if (t.isHidden !== a) {
          (t.parentNode?.firstVisibleChild === t || t.parentNode?.lastVisibleChild === t) && t.ownerDocument.markDirty(t.parentNode);
          let i = t.previousVisibleSibling, s = t.nextVisibleSibling;
          i && t.ownerDocument.markDirty(i), s && t.ownerDocument.markDirty(s), t.isHidden = a, t.ownerDocument.markDirty(t);
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
class o2 extends A1 {
  constructor(t) {
    super(null), this.nodeType = 11, this.ownerDocument = this, this.dirtyNodes = /* @__PURE__ */ new Set(), this.isSSR = !1, this.nodeId = 0, this.nodesByProps = /* @__PURE__ */ new WeakMap(), this.nextCollection = null, this.subscriptions = /* @__PURE__ */ new Set(), this.queuedRender = !1, this.inSubscription = !1, this.collection = t, this.nextCollection = t;
  }
  get isConnected() {
    return !0;
  }
  createElement(t) {
    return new Pl(t, this);
  }
  getMutableCollection() {
    return this.nextCollection || (this.nextCollection = this.collection.clone()), this.nextCollection;
  }
  markDirty(t) {
    this.dirtyNodes.add(t);
  }
  addNode(t) {
    if (t.isHidden || t.node == null) return;
    let r = this.getMutableCollection();
    if (!r.getItem(t.node.key)) for (let a of t) this.addNode(a);
    r.addNode(t.node);
  }
  removeNode(t) {
    for (let r of t) this.removeNode(r);
    t.node && this.getMutableCollection().removeNode(t.node.key);
  }
  /** Finalizes the collection update, updating all nodes and freezing the collection. */
  getCollection() {
    return this.inSubscription ? this.collection : (this.queuedRender = !1, this.updateCollection(), this.collection);
  }
  updateCollection() {
    for (let t of this.dirtyNodes) t instanceof Pl && (!t.isConnected || t.isHidden) ? this.removeNode(t) : t.updateChildIndices();
    for (let t of this.dirtyNodes) t instanceof Pl ? (t.isConnected && !t.isHidden && (t.updateNode(), this.addNode(t)), t.node && this.dirtyNodes.delete(t), t.isMutated = !1) : this.dirtyNodes.delete(t);
    this.nextCollection && (this.nextCollection.commit(this.firstVisibleChild?.node?.key ?? null, this.lastVisibleChild?.node?.key ?? null, this.isSSR), this.isSSR || (this.collection = this.nextCollection, this.nextCollection = null));
  }
  queueUpdate() {
    if (!(this.dirtyNodes.size === 0 || this.queuedRender)) {
      this.queuedRender = !0, this.inSubscription = !0, this.isSSR || (this.collection = this.collection.clone());
      for (let t of this.subscriptions) t();
      this.inSubscription = !1;
    }
  }
  subscribe(t) {
    return this.subscriptions.add(t), this.queuedRender && t(), () => this.subscriptions.delete(t);
  }
  resetAfterSSR() {
    this.isSSR && (this.isSSR = !1, this.firstChild = null, this.lastChild = null, this.nodeId = 0);
  }
}
function j1(e) {
  let { children: t, items: r, idScope: a, addIdAndValue: i, dependencies: s = [] } = e, c = S.useMemo(() => {
  }, [
    t
  ]), u = S.useMemo(() => /* @__PURE__ */ new WeakMap(), [
    ...s,
    c
  ]);
  return S.useMemo(() => {
    if (r && typeof t == "function") {
      let p = [];
      for (let f of r) {
        let v = s2(f) ? f : null, g = v ? u.get(v) : null;
        if (!g) {
          g = t(f);
          let h = g.props.id ?? f?.key ?? f?.id;
          a != null && g.props.id == null && h != null && (h = a + ":" + h);
          let b = h ?? p.length;
          g = S.cloneElement(g, i ? {
            key: b,
            id: h,
            value: f
          } : {
            key: b
          }), v && u.set(v, g);
        }
        p.push(g);
      }
      return p;
    } else if (typeof t != "function") return t;
  }, [
    t,
    r,
    u,
    a,
    i
  ]);
}
function s2(e) {
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
function Kn(e) {
  if (u2()) e.focus({
    preventScroll: !0
  });
  else {
    let t = c2(e);
    e.focus(), d2(t);
  }
}
let ko = null;
function u2() {
  if (ko == null) {
    ko = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return ko = !0, !0;
        }
      });
    } catch {
    }
  }
  return ko;
}
function c2(e) {
  let t = e.parentNode, r = [], a = document.scrollingElement || document.documentElement;
  for (; t instanceof HTMLElement && t !== a; )
    (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && r.push({
      element: t,
      scrollTop: t.scrollTop,
      scrollLeft: t.scrollLeft
    }), t = t.parentNode;
  return a instanceof HTMLElement && r.push({
    element: a,
    scrollTop: a.scrollTop,
    scrollLeft: a.scrollLeft
  }), r;
}
function d2(e) {
  for (let { element: t, scrollTop: r, scrollLeft: a } of e)
    t.scrollTop = r, t.scrollLeft = a;
}
const Pe = (e) => f2(e) ? e.document : p2(e) ? e : e?.ownerDocument ?? (typeof document < "u" ? document : void 0), ht = (e) => Pe(e)?.defaultView ?? (typeof window < "u" ? window : void 0);
function z1(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function f2(e) {
  return typeof e == "object" && e != null && "window" in e && e.window === e;
}
function p2(e) {
  return z1(e) && e.nodeType === 9;
}
function hs(e) {
  return z1(e) && e.nodeType === 11 && "host" in e;
}
function Fl(e, t, r, a) {
  if (r == null || e == null) return () => {
  };
  let i = Array.isArray(e) ? e : [
    e
  ];
  for (let s of i) s.addEventListener(t, r, a);
  return () => {
    for (let s of i) s.removeEventListener(t, r, a);
  };
}
function jo(e, t, r, a) {
  if (e == null) return () => {
  };
  let i = new Array(), s = Array.isArray(e) ? e : [
    e
  ];
  for (let c of s) {
    let u = c.style.getPropertyValue(t), p = c.style.getPropertyPriority(t);
    c.style.setProperty(t, r, a), i.unshift(() => {
      u ? c.style.setProperty(t, u, p) : c.style.removeProperty(t);
    });
  }
  return () => {
    for (let c of i) c();
  };
}
let m2 = !1;
function wn() {
  return m2;
}
function Ne(e, t) {
  if (!wn()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let r = t;
  for (; r !== null; ) {
    if (r === e) return !0;
    typeof r.assignedElements != "function" && r.assignedSlot?.parentNode ? r = r.assignedSlot.parentNode : hs(r) ? r = r.host : r = r.parentNode;
  }
  return !1;
}
const Oe = (e = document) => {
  if (!wn()) return e.activeElement;
  let t = e.activeElement;
  for (; t && "shadowRoot" in t && t.shadowRoot?.activeElement; ) t = t.shadowRoot.activeElement;
  return t;
};
function ye(e) {
  if (wn() && e.target instanceof Element && e.target.shadowRoot) {
    if ("composedPath" in e) return e.composedPath()[0] ?? null;
    if ("composedPath" in e.nativeEvent) return e.nativeEvent.composedPath()[0] ?? null;
  }
  return e.target;
}
function K1(e, t) {
  if (t === null) return [];
  t = t ?? ht(e);
  let r = [
    t
  ];
  if (!wn() || !e || e === t) return r;
  let a = "getRootNode" in t ? t.getRootNode() : null, i = e.getRootNode() ?? null;
  for (; hs(i) && i !== a; )
    r.push(i), i = i.host.getRootNode();
  return r;
}
function Wi(e) {
  if (!e) return !1;
  let t = e.getRootNode(), r = ht(e);
  if (!(t instanceof r.Document || t instanceof r.ShadowRoot)) return !1;
  let a = t.activeElement;
  return a != null && e.contains(a);
}
const h2 = typeof Element < "u" && "checkVisibility" in Element.prototype;
function g2(e) {
  const t = ht(e);
  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
  let { display: r, visibility: a } = e.style, i = r !== "none" && a !== "hidden" && a !== "collapse";
  if (i) {
    const { getComputedStyle: s } = ht(e);
    let { display: c, visibility: u } = s(e);
    i = c !== "none" && u !== "hidden" && u !== "collapse";
  }
  return i;
}
function v2(e, t) {
  return !e.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !e.hasAttribute("data-react-aria-prevent-focus") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function Vd(e, t) {
  return h2 ? e.checkVisibility({
    visibilityProperty: !0
  }) && !e.closest("[data-react-aria-prevent-focus]") : e.nodeName !== "#comment" && g2(e) && v2(e, t) && (!e.parentElement || Vd(e.parentElement, e));
}
const Hd = [
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
], y2 = Hd.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
Hd.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const b2 = Hd.join(':not([hidden]):not([tabindex="-1"]),');
function D1(e, t) {
  return e.matches(y2) && !O1(e) && (t?.skipVisibilityCheck || Vd(e));
}
function Bd(e) {
  return e.matches(b2) && Vd(e) && !O1(e);
}
function O1(e) {
  let t = e;
  for (; t != null; ) {
    if (t instanceof ht(t).HTMLElement && t.inert) return !0;
    t = t.parentElement;
  }
  return !1;
}
const Le = typeof document < "u" ? C.useLayoutEffect : () => {
};
function Ud(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function V1(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function H1(e) {
  let t = S.useRef({
    isFocused: !1,
    observer: null
  });
  return Le(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []), S.useCallback((r) => {
    let a = ye(r);
    if (a instanceof HTMLButtonElement || a instanceof HTMLInputElement || a instanceof HTMLTextAreaElement || a instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let i = a, s = (c) => {
        if (t.current.isFocused = !1, i.disabled) {
          let u = Ud(c);
          e?.(u);
        }
        t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      i.addEventListener("focusout", s, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && i.disabled) {
          t.current.observer?.disconnect();
          let c = i === Oe() ? null : Oe();
          i.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: c
          })), i.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: c
          }));
        }
      }), t.current.observer.observe(i, {
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
let Qo = !1;
function x2(e) {
  for (; e && !D1(e, {
    skipVisibilityCheck: !0
  }); ) e = e.parentElement;
  let t = ht(e), r = Oe(t.document);
  if (!r || r === e) return;
  let a = e?.getRootNode(), i = a != null && hs(a) ? a : ht(e), s = ($) => $ === e || $ != null && Ne(e, $), c = ($) => $ === r || r != null && $ != null && Ne(r, $);
  Qo = !0;
  let u = !1, p = ($) => {
    (c(ye($)) || u) && $.stopImmediatePropagation();
  }, f = ($) => {
    (c(ye($)) || u) && ($.stopImmediatePropagation(), !e && !u && (u = !0, Kn(r), h()));
  }, v = ($) => {
    (s(ye($)) || u) && $.stopImmediatePropagation();
  }, g = ($) => {
    (s(ye($)) || u) && ($.stopImmediatePropagation(), u || (u = !0, Kn(r), h()));
  };
  i.addEventListener("blur", p, !0), i.addEventListener("focusout", f, !0), i.addEventListener("focusin", g, !0), i.addEventListener("focus", v, !0);
  let h = () => {
    cancelAnimationFrame(b), i.removeEventListener("blur", p, !0), i.removeEventListener("focusout", f, !0), i.removeEventListener("focusin", g, !0), i.removeEventListener("focus", v, !0), Qo = !1, u = !1;
  }, b = requestAnimationFrame(h);
  return h;
}
function gs(e) {
  if (typeof window > "u" || window.navigator == null) return !1;
  let t = window.navigator.userAgentData?.brands;
  return Array.isArray(t) && t.some((r) => e.test(r.brand)) || e.test(window.navigator.userAgent);
}
function Wd(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.userAgentData?.platform || window.navigator.platform) : !1;
}
function Vn(e) {
  let t = null;
  return () => (t == null && (t = e()), t);
}
const pn = Vn(function() {
  return Wd(/^Mac/i);
}), w2 = Vn(function() {
  return Wd(/^iPhone/i);
}), B1 = Vn(function() {
  return Wd(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  pn() && navigator.maxTouchPoints > 1;
}), vr = Vn(function() {
  return w2() || B1();
}), S2 = Vn(function() {
  return pn() || vr();
}), Dn = Vn(function() {
  return gs(/AppleWebKit/i) && (vr() || !U1());
}), U1 = Vn(function() {
  return gs(/Chrome|CriOS|CrMo/i);
}), Xo = Vn(function() {
  return gs(/Android/i);
}), C2 = Vn(function() {
  return gs(/(Firefox|FxiOS)/i);
});
function W1(e) {
  return e.pointerType === "" && e.isTrusted ? !0 : Xo() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function $2(e) {
  return !Xo() && e.width === 0 && e.height === 0 || Xo() && e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
const E2 = /* @__PURE__ */ S.createContext({
  isNative: !0,
  open: N2,
  useHref: (e) => e
});
function oa() {
  return S.useContext(E2);
}
function k2(e, t) {
  let r = e.getAttribute("target");
  return (!r || r === "_self") && e.origin === location.origin && !e.hasAttribute("download") && !t.metaKey && // open in new tab (mac)
  !t.ctrlKey && // open in new tab (windows)
  !t.altKey && // download
  !t.shiftKey;
}
function On(e, t, r = !0) {
  let { metaKey: a, ctrlKey: i, altKey: s, shiftKey: c } = t;
  !Dn() && C2() && window.event?.type?.startsWith("key") && e.target === "_blank" && (pn() ? a = !0 : i = !0);
  let u = Dn() && pn() && !B1() ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: a,
    ctrlKey: i,
    altKey: s,
    shiftKey: c
  }) : new MouseEvent("click", {
    metaKey: a,
    ctrlKey: i,
    altKey: s,
    shiftKey: c,
    detail: 1,
    bubbles: !0,
    cancelable: !0
  });
  On.isOpening = r, Kn(e), e.dispatchEvent(u), On.isOpening = !1;
}
On.isOpening = !1;
function _2(e, t) {
  if (e instanceof HTMLAnchorElement) t(e);
  else if (e.hasAttribute("data-href")) {
    let r = document.createElement("a");
    r.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (r.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (r.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (r.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (r.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (r.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(r), t(r), e.removeChild(r);
  }
}
function N2(e, t) {
  _2(e, (r) => On(r, t));
}
function Gd(e) {
  const r = oa().useHref(e?.href ?? "");
  let a = {};
  if (e)
    for (let i of [
      "href",
      "target",
      "rel",
      "download",
      "ping",
      "referrerPolicy"
    ]) i in e && e[i] !== void 0 && (a[i] = i === "href" ? r : e[i]);
  return a;
}
function G1(e, t, r, a) {
  !t.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && // If props are applied to a router Link component, it may have already prevented default.
  !e.isDefaultPrevented() && k2(e.currentTarget, e) && r && (e.preventDefault(), t.open(e.currentTarget, e, r, a));
}
const q1 = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, Z1 = /* @__PURE__ */ C.createContext(q1), P2 = /* @__PURE__ */ C.createContext(!1);
let Ic = /* @__PURE__ */ new WeakMap();
function F2(e = !1) {
  let t = S.useContext(Z1), r = S.useRef(null);
  if (r.current === null && !e) {
    let a = (
      // @ts-ignore
      C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.ReactCurrentOwner?.current
    );
    if (a) {
      let i = Ic.get(a);
      i == null ? Ic.set(a, {
        id: t.current,
        state: a.memoizedState
      }) : a.memoizedState !== i.state && (t.current = i.id, Ic.delete(a));
    }
    r.current = ++t.current;
  }
  return r.current;
}
function T2(e) {
  let t = S.useContext(Z1), r = F2(!!e), a = `react-aria${t.prefix}`;
  return e || `${a}-${r}`;
}
function R2(e) {
  let t = C.useId(), [r] = S.useState(qr()), a = r ? "react-aria" : `react-aria${q1.prefix}`;
  return e || `${a}-${t}`;
}
const L2 = typeof C.useId == "function" ? R2 : T2;
function I2() {
  return !1;
}
function M2() {
  return !0;
}
function A2(e) {
  return () => {
  };
}
function qr() {
  return typeof C.useSyncExternalStore == "function" ? C.useSyncExternalStore(A2, I2, M2) : S.useContext(P2);
}
let Zr = null;
const ud = /* @__PURE__ */ new Set();
let zi = /* @__PURE__ */ new Map(), Hr = !1, zo = !1;
const j2 = {
  Tab: !0,
  Escape: !0
};
function vs(e, t) {
  for (let r of ud) r(e, t);
}
function z2(e) {
  return !(e.metaKey || !pn() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Yo(e) {
  Hr = !0, !On.isOpening && z2(e) && (Zr = "keyboard", vs("keyboard", e));
}
function Tl(e) {
  Zr = "pointer", "pointerType" in e && e.pointerType, (e.type === "mousedown" || e.type === "pointerdown") && (Hr = !0, vs("pointer", e));
}
function Q1(e) {
  !On.isOpening && W1(e) && (Hr = !0, Zr = "virtual");
}
function X1(e) {
  if (Qo) return;
  let t = ye(e), r = ht(t), a = Pe(t);
  if (t === r) {
    zo = !0;
    return;
  }
  t === a || !e.isTrusted || (!Hr && !zo && (Zr = "virtual", vs("virtual", e)), Hr = !1, zo = !1);
}
function Y1() {
  Qo || (Hr = !1, zo = !0);
}
function cd(e) {
  if (typeof window > "u" || typeof document > "u") return;
  const t = ht(e), r = Pe(e);
  if (zi.get(t)) return;
  let a = t.HTMLElement.prototype.focus;
  Reflect.defineProperty(t.HTMLElement.prototype, "focus", {
    configurable: !0,
    writable: !0,
    value: function() {
      Hr = !0, a.apply(this, arguments);
    }
  }), r.addEventListener("keydown", Yo, !0), r.addEventListener("keyup", Yo, !0), r.addEventListener("click", Q1, !0), t.addEventListener("focus", X1, !0), t.addEventListener("blur", Y1, !1), typeof PointerEvent < "u" && (r.addEventListener("pointerdown", Tl, !0), r.addEventListener("pointermove", Tl, !0), r.addEventListener("pointerup", Tl, !0)), t.addEventListener("beforeunload", () => {
    J1(e);
  }, {
    once: !0
  }), zi.set(t, {
    focus: a
  });
}
const J1 = (e, t) => {
  const r = ht(e), a = Pe(e);
  t && a.removeEventListener("DOMContentLoaded", t), zi.has(r) && (Reflect.defineProperty(r.HTMLElement.prototype, "focus", {
    configurable: !0,
    writable: !0,
    value: zi.get(r).focus
  }), a.removeEventListener("keydown", Yo, !0), a.removeEventListener("keyup", Yo, !0), a.removeEventListener("click", Q1, !0), r.removeEventListener("focus", X1, !0), r.removeEventListener("blur", Y1, !1), typeof PointerEvent < "u" && (a.removeEventListener("pointerdown", Tl, !0), a.removeEventListener("pointermove", Tl, !0), a.removeEventListener("pointerup", Tl, !0)), zi.delete(r));
};
function K2(e) {
  const t = Pe(e);
  let r;
  return t.readyState !== "loading" ? cd(e) : (r = () => {
    cd(e);
  }, t.addEventListener("DOMContentLoaded", r)), () => J1(e, r);
}
typeof document < "u" && K2();
function Gi() {
  return Zr !== "pointer";
}
function qi() {
  return Zr;
}
function Ko(e) {
  Zr = e, vs(e, null);
}
const D2 = /* @__PURE__ */ new Set([
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
function O2(e, t, r) {
  let a = r ? ye(r) : void 0, i = Pe(a), s = ht(a);
  const c = typeof s < "u" ? s.HTMLInputElement : HTMLInputElement, u = typeof s < "u" ? s.HTMLTextAreaElement : HTMLTextAreaElement, p = typeof s < "u" ? s.HTMLElement : HTMLElement, f = typeof s < "u" ? s.KeyboardEvent : KeyboardEvent;
  let v = Oe(i);
  return e = e || v instanceof c && !D2.has(v.type) || v instanceof u || v instanceof p && v.isContentEditable, !(e && t === "keyboard" && r instanceof f && !j2[r.key]);
}
function V2(e, t, r) {
  cd(), S.useEffect(() => {
    if (r?.enabled === !1) return;
    let a = (i, s) => {
      O2(!!r?.isTextInput, i, s) && e(Gi());
    };
    return ud.add(a), () => {
      ud.delete(a);
    };
  }, t);
}
let dr = /* @__PURE__ */ new Map(), dd = /* @__PURE__ */ new Set();
function Dh() {
  if (typeof window > "u") return;
  function e(a) {
    return "propertyName" in a;
  }
  let t = (a) => {
    let i = ye(a);
    if (!e(a) || !i) return;
    let s = dr.get(i);
    s || (s = /* @__PURE__ */ new Set(), dr.set(i, s), i.addEventListener("transitioncancel", r, {
      once: !0
    })), s.add(a.propertyName);
  }, r = (a) => {
    let i = ye(a);
    if (!e(a) || !i) return;
    let s = dr.get(i);
    if (s && (s.delete(a.propertyName), s.size === 0 && (i.removeEventListener("transitioncancel", r), dr.delete(i)), dr.size === 0)) {
      for (let c of dd) c();
      dd.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", r);
}
typeof document < "u" && (document.readyState !== "loading" ? Dh() : document.addEventListener("DOMContentLoaded", Dh));
function H2() {
  for (const [e] of dr)
    "isConnected" in e && !e.isConnected && dr.delete(e);
}
function ev(e) {
  requestAnimationFrame(() => {
    H2(), dr.size === 0 ? e() : dd.add(e);
  });
}
function yr(e) {
  if (!e.isConnected) return;
  const t = Pe(e);
  if (qi() === "virtual") {
    let r = Oe(t);
    ev(() => {
      const a = Oe(t);
      (a === r || a === t.body) && e.isConnected && Kn(e);
    });
  } else Kn(e);
}
function Br(...e) {
  return (...t) => {
    for (let r of e) typeof r == "function" && r(...t);
  };
}
function B2(e) {
  let [t, r] = S.useState(e), a = S.useRef(t), i = S.useRef(null), s = S.useRef(() => {
    if (!i.current) return;
    let u = i.current.next();
    if (u.done) {
      i.current = null;
      return;
    }
    a.current === u.value ? s.current() : r(u.value);
  });
  Le(() => {
    a.current = t, i.current && s.current();
  });
  let c = S.useCallback((u) => {
    i.current = u(a.current), s.current();
  }, [
    s
  ]);
  return [
    t,
    c
  ];
}
let U2 = !!(typeof window < "u" && window.document && window.document.createElement), Rl = /* @__PURE__ */ new Map(), El;
typeof FinalizationRegistry < "u" && (El = new FinalizationRegistry((e) => {
  Rl.delete(e);
}));
let Mc = /* @__PURE__ */ new WeakMap();
function br(e) {
  let [t, r] = S.useState(e), a = S.useRef(null), i = L2(t), s = S.useRef(null), c = Mc.get(s);
  if (El && c !== i && (c != null && El.unregister(s), El.register(s, i, s), Mc.set(s, i)), U2) {
    const u = Rl.get(i);
    u && !u.includes(a) ? u.push(a) : Rl.set(i, [
      a
    ]);
  }
  return Le(() => {
    let u = i;
    return () => {
      El && (El.unregister(s), Mc.delete(s)), Rl.delete(u);
    };
  }, [
    i
  ]), S.useEffect(() => {
    let u = a.current;
    return u && r(u), () => {
      u && (a.current = null);
    };
  }), i;
}
function W2(e, t) {
  if (e === t) return e;
  let r = Rl.get(e);
  if (r)
    return r.forEach((i) => i.current = t), t;
  let a = Rl.get(t);
  return a ? (a.forEach((i) => i.current = e), e) : t;
}
function Ki(e = []) {
  let t = br(), [r, a] = B2(t), i = S.useCallback(() => {
    a(function* () {
      yield t, yield document.getElementById(t) ? t : void 0;
    });
  }, [
    t,
    a
  ]);
  return Le(i, [
    t,
    i,
    ...e
  ]), r;
}
function Hn(...e) {
  return e.length === 1 && e[0] ? e[0] : (t) => {
    let r = !1;
    const a = e.map((i) => {
      const s = Oh(i, t);
      return r ||= typeof s == "function", s;
    });
    if (r) return () => {
      a.forEach((i, s) => {
        typeof i == "function" ? i() : Oh(e[s], null);
      });
    };
  };
}
function Oh(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function tv(e) {
  var t, r, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = tv(e[t])) && (a && (a += " "), a += r);
  } else for (r in e) e[r] && (a && (a += " "), a += r);
  return a;
}
function qd() {
  for (var e, t, r = 0, a = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = tv(e)) && (a && (a += " "), a += t);
  return a;
}
function $e(...e) {
  let t = {
    ...e[0]
  };
  for (let r = 1; r < e.length; r++) {
    let a = e[r];
    for (let i in a) {
      let s = t[i], c = a[i];
      typeof s == "function" && typeof c == "function" && // This is a lot faster than a regex.
      i[0] === "o" && i[1] === "n" && i.charCodeAt(2) >= /* 'A' */
      65 && i.charCodeAt(2) <= /* 'Z' */
      90 ? t[i] = Br(s, c) : (i === "className" || i === "UNSAFE_className") && typeof s == "string" && typeof c == "string" ? t[i] = qd(s, c) : i === "id" && s && c ? t.id = W2(s, c) : i === "ref" && s && c ? t.ref = Hn(s, c) : t[i] = c !== void 0 ? c : s;
    }
  }
  return t;
}
function nv(e) {
  let { isDisabled: t, onFocus: r, onBlur: a, onFocusChange: i } = e;
  const s = S.useCallback((p) => {
    if (ye(p) === p.currentTarget)
      return a && a(p), i && i(!1), !0;
  }, [
    a,
    i
  ]), c = H1(s), u = S.useCallback((p) => {
    let f = ye(p);
    const v = Pe(f), g = v ? Oe(v) : Oe();
    f === p.currentTarget && f === g && (r && r(p), i && i(!0), c(p));
  }, [
    i,
    r,
    c
  ]);
  return {
    focusProps: {
      onFocus: !t && (r || i || a) ? u : void 0,
      onBlur: !t && (a || i) ? s : void 0
    }
  };
}
function _o(e) {
  if (e)
    return (t) => {
      let r = !0, a = {
        ...t,
        preventDefault() {
          t.preventDefault();
        },
        isDefaultPrevented() {
          return t.isDefaultPrevented();
        },
        stopPropagation() {
          r = !0;
        },
        continuePropagation() {
          r = !1, typeof t.continuePropagation == "function" && t.continuePropagation();
        },
        isPropagationStopped() {
          return r;
        }
      };
      e(a), r && !(typeof t.isPropagationStopped == "function" && t.isPropagationStopped()) && t.stopPropagation();
    };
}
const G2 = /* @__PURE__ */ new Set([
  "shift",
  "alt",
  "control",
  "meta",
  "mod"
  // OS dependent - Cmd on Mac, Control on Windows/Linux
]), q2 = [
  "Alt",
  "Control",
  "Meta",
  "Shift"
];
function Z2(e) {
  let t = /* @__PURE__ */ new Set();
  return e.alt && t.add("Alt"), e.shift && t.add("Shift"), e.ctrl && t.add("Control"), e.meta && t.add("Meta"), e.mod && t.add(pn() ? "Meta" : "Control"), t;
}
function Q2(e) {
  let t = /* @__PURE__ */ new Set();
  return e.altKey && t.add("Alt"), e.ctrlKey && t.add("Control"), e.metaKey && t.add("Meta"), e.shiftKey && t.add("Shift"), t;
}
function rv(e) {
  return q2.filter((t) => e.has(t));
}
function X2(e) {
  let t = e.split("+").reduce((r, a) => {
    let i = a.toLowerCase();
    return G2.has(i) ? i === "shift" ? r.shift = !0 : i === "alt" ? r.alt = !0 : i === "control" ? r.ctrl = !0 : i === "meta" ? r.meta = !0 : i === "mod" && (r.mod = !0) : r.key = a, r;
  }, {
    shift: !1,
    alt: !1,
    ctrl: !1,
    meta: !1,
    mod: !1,
    key: ""
  });
  if (t.key === "") throw new Error(`Invalid keyboard shortcut: "${e}". Must include exactly one non-modifier key (e.g. "a", "Enter", "ArrowDown"). Combine any of Shift, Alt, Ctrl, Meta, and Mod.`);
  return t;
}
function lv(e) {
  return e.toLowerCase();
}
const Y2 = {
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
function J2(e) {
  let t = lv(e), r = Y2[t];
  return r ?? t;
}
function ew(e) {
  let t = rv(Z2(e)), r = J2(e.key);
  return t.length > 0 ? `${t.join("+")}+${r}` : r;
}
function tw(e) {
  let t = rv(Q2(e)), r = lv(e.key);
  return (t.length > 0 ? `${t.join("+")}+` : "") + r;
}
function nw(e) {
  let t = /* @__PURE__ */ new Map();
  for (let [r, a] of Object.entries(e)) {
    let i = X2(r);
    t.set(ew(i), a);
  }
  return (r) => {
    let a = tw(r), i = t.get(a), s = i?.(r);
    s === void 0 && i !== void 0 ? s = {
      shouldContinuePropagation: !1,
      shouldPreventDefault: !0
    } : typeof s == "boolean" && (s = {
      shouldContinuePropagation: !s,
      shouldPreventDefault: s
    }), s?.shouldPreventDefault && r.preventDefault(), (!i || s?.shouldContinuePropagation) && r.continuePropagation();
  };
}
function Il(e) {
  let { shortcuts: t, allowRepeats: r = !1, allowComposing: a = !1 } = e, i, s;
  if (t) {
    let c = nw(t), u = _o((f) => {
      if (!Ne(f.currentTarget, ye(f))) {
        f.continuePropagation();
        return;
      }
      if (f.nativeEvent?.repeat && !r || f.nativeEvent?.isComposing && !a) {
        f.continuePropagation();
        return;
      }
      c(f);
    }), p = _o((f) => {
      if (!Ne(f.currentTarget, ye(f))) {
        f.continuePropagation();
        return;
      }
      if (f.nativeEvent?.repeat && !r || f.nativeEvent?.isComposing && !a) {
        f.continuePropagation();
        return;
      }
      f.continuePropagation();
    });
    i = e.onKeyDown ? Br(e.onKeyDown, u) : u, s = e.onKeyUp ? Br(e.onKeyUp, p) : p;
  } else
    i = _o(e.onKeyDown), s = _o(e.onKeyUp);
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: i,
      onKeyUp: s
    }
  };
}
function xr(e) {
  const t = S.useRef(null), r = S.useRef(void 0), a = S.useCallback((i) => {
    if (typeof e == "function") {
      const s = e, c = s(i);
      return () => {
        typeof c == "function" ? c() : s(null);
      };
    } else if (e)
      return e.current = i, () => {
        e.current = null;
      };
  }, [
    e
  ]);
  return S.useMemo(
    () => ({
      get current() {
        return t.current;
      },
      set current(i) {
        t.current = i, r.current && (r.current(), r.current = void 0), i != null && (r.current = a(i));
      }
    }),
    // oxlint-disable-next-line react/react-compiler
    [
      a
    ]
  );
}
function Zd(e, t) {
  Le(() => {
    if (e && e.ref && t)
      return e.ref.current = t.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
let Jo = /* @__PURE__ */ C.createContext(null);
function rw(e) {
  let t = S.useContext(Jo) || {};
  Zd(t, e);
  let { ref: r, ...a } = t;
  return a;
}
function ys(e, t) {
  let { focusProps: r } = nv(e), { keyboardProps: a } = Il(e), i = $e(r, a), s = rw(t), c = e.isDisabled ? {} : s, u = S.useRef(e.autoFocus);
  S.useEffect(() => {
    u.current && t.current && yr(t.current), u.current = !1;
  }, [
    t
  ]);
  let p = e.excludeFromTabOrder ? -1 : 0;
  return e.isDisabled && (p = void 0), {
    focusableProps: $e({
      ...i,
      tabIndex: p
    }, c)
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
  value: function(e, t) {
    return this.content.insertBefore(e, t);
  }
}));
const es = /* @__PURE__ */ S.createContext(!1);
function lw(e) {
  if (S.useContext(es))
    return /* @__PURE__ */ C.createElement(C.Fragment, null, e.children);
  let r = /* @__PURE__ */ C.createElement(es.Provider, {
    value: !0
  }, e.children);
  return /* @__PURE__ */ C.createElement("template", null, r);
}
function iw(e) {
  let t = (r, a) => S.useContext(es) ? null : e(r, a);
  return t.displayName = e.displayName || e.name, S.forwardRef(t);
}
function iv() {
  return S.useContext(es);
}
var sa = L1();
const aw = /* @__PURE__ */ Od(sa);
var Ac = { exports: {} }, jc = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vh;
function ow() {
  if (Vh) return jc;
  Vh = 1;
  var e = ms();
  function t(g, h) {
    return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
  }
  var r = typeof Object.is == "function" ? Object.is : t, a = e.useState, i = e.useEffect, s = e.useLayoutEffect, c = e.useDebugValue;
  function u(g, h) {
    var b = h(), $ = a({ inst: { value: b, getSnapshot: h } }), w = $[0].inst, k = $[1];
    return s(
      function() {
        w.value = b, w.getSnapshot = h, p(w) && k({ inst: w });
      },
      [g, b, h]
    ), i(
      function() {
        return p(w) && k({ inst: w }), g(function() {
          p(w) && k({ inst: w });
        });
      },
      [g]
    ), c(b), b;
  }
  function p(g) {
    var h = g.getSnapshot;
    g = g.value;
    try {
      var b = h();
      return !r(g, b);
    } catch {
      return !0;
    }
  }
  function f(g, h) {
    return h();
  }
  var v = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? f : u;
  return jc.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : v, jc;
}
var Hh;
function sw() {
  return Hh || (Hh = 1, Ac.exports = ow()), Ac.exports;
}
var uw = sw();
const av = /* @__PURE__ */ S.createContext(!1), Zi = /* @__PURE__ */ S.createContext(null);
function ov(e) {
  if (S.useContext(Zi))
    return e.content;
  let { collection: r, document: a } = pw(e.createCollection);
  return /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(lw, null, /* @__PURE__ */ C.createElement(Zi.Provider, {
    value: a
  }, e.content)), /* @__PURE__ */ C.createElement(cw, {
    render: e.children,
    collection: r
  }));
}
function cw({ collection: e, render: t }) {
  return t(e);
}
function dw(e, t, r) {
  let a = qr(), i = S.useRef(a);
  i.current = a;
  let s = S.useCallback(() => i.current ? r() : t(), [
    t,
    r
  ]);
  return uw.useSyncExternalStore(e, s);
}
const fw = typeof C.useSyncExternalStore == "function" ? C.useSyncExternalStore : dw;
function pw(e) {
  let [t] = S.useState(() => new o2(e?.() || new a2())), r = S.useCallback((c) => t.subscribe(c), [
    t
  ]), a = S.useCallback(() => {
    let c = t.getCollection();
    return t.isSSR && t.resetAfterSSR(), c;
  }, [
    t
  ]), i = S.useCallback(() => (t.isSSR = !0, t.getCollection()), [
    t
  ]);
  return {
    collection: fw(r, a, i),
    document: t
  };
}
const fd = /* @__PURE__ */ S.createContext(null);
function mw(e) {
  return class extends Gr {
    static {
      this.type = e;
    }
  };
}
function hw(e, t, r, a, i, s) {
  typeof e == "string" && (e = mw(e));
  let c = S.useCallback((p) => {
    p?.setProps(t, r, e, a, s);
  }, [
    t,
    r,
    a,
    s,
    e
  ]), u = S.useContext(fd);
  if (u) {
    let p = u.ownerDocument.nodesByProps.get(t);
    return p || (p = u.ownerDocument.createElement(e.type), p.setProps(t, r, e, a, s), u.appendChild(p), u.ownerDocument.updateCollection(), u.ownerDocument.nodesByProps.set(t, p)), i ? /* @__PURE__ */ C.createElement(fd.Provider, {
      value: p
    }, i) : null;
  }
  return /* @__PURE__ */ C.createElement(e.type, {
    ref: c
  }, i);
}
function Qd(e, t) {
  let r = ({ node: i }) => t(i.props, i.props.ref, i), a = S.forwardRef((i, s) => {
    let c = S.useContext(Jo);
    if (!S.useContext(av)) {
      if (t.length >= 3) throw new Error(t.name + " cannot be rendered outside a collection.");
      return t(i, s);
    }
    return hw(e, i, s, "children" in i ? i.children : null, null, (p) => (
      // Forward FocusableContext to real DOM tree so tooltips work.
      /* @__PURE__ */ C.createElement(Jo.Provider, {
        value: c
      }, /* @__PURE__ */ C.createElement(r, {
        node: p
      }))
    ));
  });
  return a.displayName = t.name, a;
}
function gw(e) {
  return j1({
    ...e,
    addIdAndValue: !0
  });
}
const Bh = /* @__PURE__ */ S.createContext(null);
function sv(e) {
  let t = S.useContext(Bh), r = (t?.dependencies || []).concat(e.dependencies), a = e.idScope ?? t?.idScope, i = gw({
    ...e,
    idScope: a,
    dependencies: r
  });
  return S.useContext(Zi) && (i = /* @__PURE__ */ C.createElement(vw, null, i)), t = S.useMemo(
    () => ({
      dependencies: (
        // oxlint-disable-next-line react-hooks/exhaustive-deps
        r
      ),
      idScope: a
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // oxlint-disable-next-line react/react-compiler, react-hooks/exhaustive-deps
    [
      a,
      ...r
    ]
  ), /* @__PURE__ */ C.createElement(Bh.Provider, {
    value: t
  }, i);
}
function vw({ children: e }) {
  let t = S.useContext(Zi), r = S.useMemo(() => /* @__PURE__ */ C.createElement(Zi.Provider, {
    value: null
  }, /* @__PURE__ */ C.createElement(av.Provider, {
    value: !0
  }, e)), [
    e
  ]);
  return qr() ? /* @__PURE__ */ C.createElement(fd.Provider, {
    value: t
  }, r) : /* @__PURE__ */ sa.createPortal(r, t);
}
const yw = "react-aria-clear-focus", bw = "react-aria-focus";
function uv(e) {
  let t = ww(Pe(e));
  t !== e && (t && xw(t, e), e && cv(e, t));
}
function xw(e, t) {
  e.dispatchEvent(new FocusEvent("blur", {
    relatedTarget: t
  })), e.dispatchEvent(new FocusEvent("focusout", {
    bubbles: !0,
    relatedTarget: t
  }));
}
function cv(e, t) {
  e.dispatchEvent(new FocusEvent("focus", {
    relatedTarget: t
  })), e.dispatchEvent(new FocusEvent("focusin", {
    bubbles: !0,
    relatedTarget: t
  }));
}
function ww(e) {
  let t = Oe(e), r = t?.getAttribute("aria-activedescendant");
  return r && e.getElementById(r) || t;
}
function Li(e) {
  return pn() ? e.metaKey : e.ctrlKey;
}
const Sw = /* @__PURE__ */ new Set([
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
function Di(e) {
  return e instanceof HTMLInputElement && !Sw.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
const Cw = C.useInsertionEffect ?? Le;
function hr(e) {
  const t = S.useRef(null);
  return Cw(() => {
    t.current = e;
  }, [
    e
  ]), S.useCallback((...r) => {
    const a = t.current;
    return a?.(...r);
  }, []);
}
function No(e, t, r, a) {
  let i = hr(r), s = r == null;
  S.useEffect(() => {
    if (!(s || e.current == null))
      return Fl(e.current, t, i, a);
  }, [
    e,
    t,
    a,
    s
  ]);
}
function Xd(e, t) {
  let { id: r, "aria-label": a, "aria-labelledby": i } = e;
  return r = br(r), i && a ? i = [
    .../* @__PURE__ */ new Set([
      r,
      ...i.trim().split(/\s+/)
    ])
  ].join(" ") : i && (i = i.trim().split(/\s+/).join(" ")), !a && !i && t && (a = t), {
    id: r,
    "aria-label": a,
    "aria-labelledby": i
  };
}
const $w = /* @__PURE__ */ new Set([
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
]), Ew = /* @__PURE__ */ new Set([
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
function kw(e) {
  if (Intl.Locale) {
    let r = new Intl.Locale(e).maximize(), a = (
      // @ts-ignore - this was implemented as a property by some browsers before it was standardized as a function.
      typeof r.getTextInfo == "function" ? r.getTextInfo() : r.textInfo
    );
    if (a) return a.direction === "rtl";
    if (r.script) return $w.has(r.script);
  }
  let t = e.split("-")[0];
  return Ew.has(t);
}
const dv = Symbol.for("react-aria.i18n.locale");
function fv() {
  let e = typeof window < "u" && window[dv] || // @ts-ignore
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
    direction: kw(e) ? "rtl" : "ltr"
  };
}
let pd = fv(), Ii = /* @__PURE__ */ new Set();
function Uh() {
  pd = fv();
  for (let e of Ii) e(pd);
}
function _w() {
  let e = qr(), [t, r] = S.useState(pd);
  return S.useEffect(() => (Ii.size === 0 && window.addEventListener("languagechange", Uh), Ii.add(r), () => {
    Ii.delete(r), Ii.size === 0 && window.removeEventListener("languagechange", Uh);
  }), []), e ? {
    locale: typeof window < "u" && window[dv] || "en-US",
    direction: "ltr"
  } : t;
}
const Nw = /* @__PURE__ */ C.createContext(null);
function Kl() {
  let e = _w();
  return S.useContext(Nw) || e;
}
const Pw = Symbol.for("react-aria.i18n.locale"), Fw = Symbol.for("react-aria.i18n.strings");
let Po;
class bs {
  constructor(t, r = "en-US") {
    this.strings = Object.fromEntries(Object.entries(t).filter(([, a]) => a)), this.defaultLocale = r;
  }
  /** Returns a localized string for the given key and locale. */
  getStringForLocale(t, r) {
    let i = this.getStringsForLocale(r)[t];
    if (!i) throw new Error(`Could not find intl message ${t} in ${r} locale`);
    return i;
  }
  /** Returns all localized strings for the given locale. */
  getStringsForLocale(t) {
    let r = this.strings[t];
    return r || (r = Tw(t, this.strings, this.defaultLocale), this.strings[t] = r), r;
  }
  static getGlobalDictionaryForPackage(t) {
    if (typeof window > "u") return null;
    let r = window[Pw];
    if (Po === void 0) {
      let i = window[Fw];
      if (!i) return null;
      Po = {};
      for (let s in i) Po[s] = new bs({
        [r]: i[s]
      }, r);
    }
    let a = Po?.[t];
    if (!a) throw new Error(`Strings for package "${t}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
    return a;
  }
}
function Tw(e, t, r = "en-US") {
  if (t[e]) return t[e];
  let a = Rw(e), i = Lw(e);
  if (i && t[`${a}-${i}`]) return t[`${a}-${i}`];
  if (t[a]) return t[a];
  for (let s in t)
    if (s.startsWith(a + "-")) return t[s];
  return t[r];
}
function Rw(e) {
  return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0];
}
function Lw(e) {
  if (Intl.Locale)
    return new Intl.Locale(e).script;
}
const Wh = /* @__PURE__ */ new Map(), Gh = /* @__PURE__ */ new Map();
class Iw {
  constructor(t, r) {
    this.locale = t, this.strings = r;
  }
  /** Formats a localized string for the given key with the provided variables. */
  format(t, r) {
    let a = this.strings.getStringForLocale(t, this.locale);
    return typeof a == "function" ? a(r, this) : a;
  }
  plural(t, r, a = "cardinal") {
    let i = r["=" + t];
    if (i) return typeof i == "function" ? i() : i;
    let s = this.locale + ":" + a, c = Wh.get(s);
    c || (c = new Intl.PluralRules(this.locale, {
      type: a
    }), Wh.set(s, c));
    let u = c.select(t);
    return i = r[u] || r.other, typeof i == "function" ? i() : i;
  }
  number(t) {
    let r = Gh.get(this.locale);
    return r || (r = new Intl.NumberFormat(this.locale), Gh.set(this.locale, r)), r.format(t);
  }
  select(t, r) {
    let a = t[r] || t.other;
    return typeof a == "function" ? a() : a;
  }
}
const qh = /* @__PURE__ */ new WeakMap();
function Mw(e) {
  let t = qh.get(e);
  return t || (t = new bs(e), qh.set(e, t)), t;
}
function Aw(e, t) {
  return t && bs.getGlobalDictionaryForPackage(t) || Mw(e);
}
function jw(e, t) {
  let { locale: r } = Kl(), a = Aw(e, t);
  return S.useMemo(() => new Iw(r, a), [
    r,
    a
  ]);
}
const zw = /* @__PURE__ */ new Set([
  "id"
]), Kw = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), Dw = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), Ow = /* @__PURE__ */ new Set([
  "dir",
  "lang",
  "hidden",
  "inert",
  "translate"
]), Zh = /* @__PURE__ */ new Set([
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
]), Vw = /^(data-.*)$/;
function gt(e, t = {}) {
  let { labelable: r, isLink: a, global: i, events: s = i, propNames: c } = t, u = {};
  for (const p in e) Object.prototype.hasOwnProperty.call(e, p) && (zw.has(p) || r && Kw.has(p) || a && Dw.has(p) || i && Ow.has(p) || s && (Zh.has(p) || p.endsWith("Capture") && Zh.has(p.slice(0, -7))) || c?.has(p) || Vw.test(p)) && (u[p] = e[p]);
  return u;
}
let Nl = "default", md = "", Do = /* @__PURE__ */ new WeakMap();
function Hw(e) {
  if (vr() && Dn()) {
    if (Nl === "default") {
      const t = Pe(e);
      md = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
    }
    Nl = "disabled";
  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    Do.set(e, e.style[t]), e.style[t] = "none";
  }
}
function Qh(e) {
  if (vr() && Dn()) {
    if (Nl !== "disabled") return;
    Nl = "restoring", setTimeout(() => {
      ev(() => {
        if (Nl === "restoring") {
          const t = Pe(e);
          t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = md || ""), md = "", Nl = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Do.has(e)) {
    let t = Do.get(e), r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    e.style[r] === "none" && (e.style[r] = t), e.getAttribute("style") === "" && e.removeAttribute("style"), Do.delete(e);
  }
}
function Bw(e, t) {
  let r = ht(t), a = Pe(t);
  if (a == null || r == null) return;
  let i, s = `meta[name="${CSS.escape(e)}"], meta[property="${CSS.escape(e)}"]`, c = a.querySelector(s);
  return c && c instanceof r.HTMLMetaElement && (e === "csp-nonce" && c.nonce && (i ??= c.nonce || void 0), c.content && (i ??= c.content || void 0)), e === "csp-nonce" && (i ??= r.__webpack_nonce__ || globalThis.__webpack_nonce__ || void 0), i;
}
let Xh = /* @__PURE__ */ new WeakMap();
function pv(e) {
  let t = Pe(e), r = Xh.get(t);
  return r ??= Bw("csp-nonce", t), r !== void 0 && Xh.set(t, r), r;
}
const Qi = C.createContext({
  register: () => {
  }
});
Qi.displayName = "PressResponderContext";
function xs() {
  let e = S.useRef(/* @__PURE__ */ new Map()), t = S.useCallback((i, s, c, u) => {
    let p = u?.once ? (...f) => {
      e.current.delete(c), c(...f);
    } : c;
    e.current.set(c, {
      type: s,
      eventTarget: i,
      fn: p,
      options: u
    }), i.addEventListener(s, p, u);
  }, []), r = S.useCallback((i, s, c, u) => {
    let p = e.current.get(c)?.fn || c;
    i.removeEventListener(s, p, u), e.current.delete(c);
  }, []), a = S.useCallback(() => {
    e.current.forEach((i, s) => {
      r(i.eventTarget, i.type, s, i.options);
    });
  }, [
    r
  ]);
  return S.useEffect(() => a, [
    a
  ]), {
    addGlobalListener: t,
    removeGlobalListener: r,
    removeAllGlobalListeners: a
  };
}
function Uw(e) {
  let t = S.useContext(Qi);
  if (t) {
    let { register: r, ref: a, ...i } = t;
    e = $e(i, e), r();
  }
  return Zd(t, e.ref), e;
}
class Fo {
  #e;
  constructor(t, r, a, i) {
    this.#e = !0;
    const c = (i?.target ?? a.currentTarget)?.getBoundingClientRect();
    let u, p = 0, f, v = null;
    a.clientX != null && a.clientY != null && (f = a.clientX, v = a.clientY), c && (f != null && v != null ? (u = f - c.left, p = v - c.top) : (u = c.width / 2, p = c.height / 2)), this.type = t, this.pointerType = r, this.target = a.currentTarget, this.shiftKey = a.shiftKey, this.metaKey = a.metaKey, this.ctrlKey = a.ctrlKey, this.altKey = a.altKey, this.x = u, this.y = p, this.key = a.key;
  }
  continuePropagation() {
    this.#e = !1;
  }
  get shouldStopPropagation() {
    return this.#e;
  }
}
const Yh = Symbol("linkClicked"), Jh = "react-aria-pressable-style", eg = "data-react-aria-pressable";
function Qr(e) {
  let { onPress: t, onPressChange: r, onPressStart: a, onPressEnd: i, onPressUp: s, onClick: c, isDisabled: u, isPressed: p, preventFocusOnPress: f, shouldCancelOnPointerExit: v, allowTextSelectionOnPress: g, ref: h, ...b } = Uw(e), [$, w] = S.useState(!1), k = S.useRef({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: T, removeAllGlobalListeners: F } = xs(), H = S.useCallback((_, D) => {
    let I = k.current;
    if (u || I.didFirePressStart) return !1;
    let M = !0;
    if (I.isTriggeringEvent = !0, a) {
      let z = new Fo("pressstart", D, _);
      a(z), M = z.shouldStopPropagation;
    }
    return r && r(!0), I.isTriggeringEvent = !1, I.didFirePressStart = !0, w(!0), M;
  }, [
    u,
    a,
    r
  ]), K = S.useCallback((_, D, I = !0) => {
    let M = k.current;
    if (!M.didFirePressStart) return !1;
    M.didFirePressStart = !1, M.isTriggeringEvent = !0;
    let z = !0;
    if (i) {
      let L = new Fo("pressend", D, _);
      i(L), z = L.shouldStopPropagation;
    }
    if (r && r(!1), w(!1), t && I && !u) {
      let L = new Fo("press", D, _);
      t(L), z &&= L.shouldStopPropagation;
    }
    return M.isTriggeringEvent = !1, z;
  }, [
    u,
    i,
    r,
    t
  ]), Y = hr(K), re = S.useCallback((_, D) => {
    let I = k.current;
    if (u) return !1;
    if (s) {
      I.isTriggeringEvent = !0;
      let M = new Fo("pressup", D, _);
      return s(M), I.isTriggeringEvent = !1, M.shouldStopPropagation;
    }
    return !0;
  }, [
    u,
    s
  ]), Q = hr(re), X = S.useCallback((_) => {
    let D = k.current;
    if (D.isPressed && D.target) {
      D.didFirePressStart && D.pointerType != null && K(jr(D.target, _), D.pointerType, !1), D.isPressed = !1, D.isOverTarget = !1, D.activePointerId = null, D.pointerType = null, F(), g || Qh(D.target);
      for (let I of D.disposables) I();
      D.disposables = [];
    }
  }, [
    g,
    F,
    K
  ]), ie = hr(X);
  S.useEffect(() => {
    u && k.current.isPressed && ie({
      currentTarget: k.current.target,
      shiftKey: !1,
      ctrlKey: !1,
      metaKey: !1,
      altKey: !1
    });
  }, [
    u
  ]);
  let ae = S.useCallback((_) => {
    v && X(_);
  }, [
    v,
    X
  ]), ne = S.useCallback((_) => {
    u || c?.(_);
  }, [
    u,
    c
  ]), A = S.useCallback((_, D) => {
    if (!u && c) {
      let I = new MouseEvent("click", _);
      V1(I, D), c(Ud(I));
    }
  }, [
    u,
    c
  ]), B = S.useMemo(() => {
    let _ = k.current, D = {
      onKeyDown(M) {
        if (zc(M.nativeEvent, M.currentTarget) && Ne(M.currentTarget, ye(M))) {
          tg(ye(M), M.key) && M.preventDefault();
          let z = !0;
          !_.isPressed && !M.repeat && (_.target = M.currentTarget, _.isPressed = !0, _.pointerType = "keyboard", z = H(M, "keyboard"));
          let L = M.currentTarget, W = (N) => {
            zc(N, L) && !N.repeat && Ne(L, ye(N)) && _.target && Q(jr(_.target, N), "keyboard");
          };
          T(Pe(M.currentTarget), "keyup", Br(W, I), !0), z && M.stopPropagation(), M.metaKey && pn() && _.metaKeyEvents?.set(M.key, M.nativeEvent);
        } else M.key === "Meta" && (_.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(M) {
        if (!(M && !Ne(M.currentTarget, ye(M))) && M && M.button === 0 && !_.isTriggeringEvent && !On.isOpening) {
          let z = !0;
          if (u && M.preventDefault(), !_.ignoreEmulatedMouseEvents && !_.isPressed && (_.pointerType === "virtual" || W1(M.nativeEvent))) {
            let L = H(M, "virtual"), W = Q(M, "virtual"), N = Y(M, "virtual");
            ne(M), z = L && W && N;
          } else if (_.isPressed && _.pointerType !== "keyboard") {
            let L = _.pointerType || M.nativeEvent.pointerType || "virtual", W = Q(jr(M.currentTarget, M), L), N = Y(jr(M.currentTarget, M), L, !0);
            z = W && N, _.isOverTarget = !1, ne(M), ie(M);
          }
          _.ignoreEmulatedMouseEvents = !1, z && M.stopPropagation();
        }
      }
    }, I = (M) => {
      if (_.isPressed && _.target && zc(M, _.target)) {
        tg(ye(M), M.key) && M.preventDefault();
        let z = ye(M), L = Ne(_.target, z);
        Y(jr(_.target, M), "keyboard", L), L && A(M, _.target), F(), M.key !== "Enter" && Yd(_.target) && Ne(_.target, z) && !M[Yh] && (M[Yh] = !0, On(_.target, M, !1)), _.isPressed = !1, _.metaKeyEvents?.delete(M.key);
      } else if (M.key === "Meta" && _.metaKeyEvents?.size) {
        let z = _.metaKeyEvents;
        _.metaKeyEvents = void 0;
        for (let L of z.values()) _.target?.dispatchEvent(new KeyboardEvent("keyup", L));
      }
    };
    if (typeof PointerEvent < "u") {
      D.onPointerDown = (L) => {
        if (L.button !== 0 || !Ne(L.currentTarget, ye(L))) return;
        if ($2(L.nativeEvent)) {
          _.pointerType = "virtual";
          return;
        }
        _.pointerType = L.pointerType;
        let W = !0;
        if (!_.isPressed) {
          _.isPressed = !0, _.isOverTarget = !0, _.activePointerId = L.pointerId, _.target = L.currentTarget, g || Hw(_.target), W = H(L, _.pointerType);
          let N = ye(L);
          "releasePointerCapture" in N && ("hasPointerCapture" in N ? N.hasPointerCapture(L.pointerId) && N.releasePointerCapture(L.pointerId) : N.releasePointerCapture(L.pointerId)), T(Pe(L.currentTarget), "pointerup", M, !1), T(Pe(L.currentTarget), "pointercancel", z, !1);
        }
        W && L.stopPropagation();
      }, D.onMouseDown = (L) => {
        if (Ne(L.currentTarget, ye(L)) && L.button === 0) {
          if (f) {
            let W = x2(L.target);
            W && _.disposables.push(W);
          }
          L.stopPropagation();
        }
      }, D.onPointerUp = (L) => {
        !Ne(L.currentTarget, ye(L)) || _.pointerType === "virtual" || L.button === 0 && !_.isPressed && Q(L, _.pointerType || L.pointerType);
      }, D.onPointerEnter = (L) => {
        L.pointerId === _.activePointerId && _.target && !_.isOverTarget && _.pointerType != null && (_.isOverTarget = !0, H(jr(_.target, L), _.pointerType));
      }, D.onPointerLeave = (L) => {
        L.pointerId === _.activePointerId && _.target && _.isOverTarget && _.pointerType != null && (_.isOverTarget = !1, Y(jr(_.target, L), _.pointerType, !1), ae(L));
      };
      let M = (L) => {
        if (L.pointerId === _.activePointerId && _.isPressed && L.button === 0 && _.target) {
          if (Ne(_.target, ye(L)) && _.pointerType != null) {
            let W = !1, N = setTimeout(() => {
              _.isPressed && _.target instanceof HTMLElement && (W ? ie(L) : (Kn(_.target), _.target.click()));
            }, 80);
            T(L.currentTarget, "click", () => W = !0, !0), _.disposables.push(() => clearTimeout(N));
          } else ie(L);
          _.isOverTarget = !1;
        }
      }, z = (L) => {
        ie(L);
      };
      D.onDragStart = (L) => {
        Ne(L.currentTarget, ye(L)) && ie(L);
      };
    }
    return D;
  }, [
    T,
    u,
    f,
    F,
    g,
    ae,
    H,
    ne,
    A
  ]);
  return S.useEffect(() => {
    if (!h) return;
    const _ = Pe(h.current);
    if (!_ || !_.head || _.getElementById(Jh)) return;
    const D = _.createElement("style");
    D.id = Jh;
    let I = pv(_);
    I && (D.nonce = I), D.textContent = `
@layer {
  [${eg}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), _.head.prepend(D);
  }, [
    h
  ]), S.useEffect(() => {
    let _ = k.current;
    return () => {
      g || Qh(_.target ?? void 0);
      for (let D of _.disposables) D();
      _.disposables = [];
    };
  }, [
    g
  ]), {
    isPressed: p || $,
    // oxlint-disable-next-line react/react-compiler
    pressProps: $e(b, B, {
      [eg]: !0
    })
  };
}
function Yd(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function zc(e, t) {
  const { key: r, code: a } = e, i = t, s = i.getAttribute("role");
  return (r === "Enter" || r === " " || r === "Spacebar" || a === "Space") && !(i instanceof ht(i).HTMLInputElement && !mv(i, r) || i instanceof ht(i).HTMLTextAreaElement || i.isContentEditable) && // Links should only trigger with Enter key
  !((s === "link" || !s && Yd(i)) && r !== "Enter");
}
function jr(e, t) {
  let r = t.clientX, a = t.clientY;
  return {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey,
    clientX: r,
    clientY: a,
    key: t.key
  };
}
function Ww(e) {
  return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !Yd(e);
}
function tg(e, t) {
  return pn() && t === "Enter" ? !1 : e instanceof HTMLInputElement ? t === "Enter" && (e.type === "checkbox" || e.type === "radio") ? !1 : !mv(e, t) : Ww(e);
}
const Gw = /* @__PURE__ */ new Set([
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
function mv(e, t) {
  return e.type === "checkbox" || e.type === "radio" ? t === " " : Gw.has(e.type);
}
function hv(e, t) {
  let { elementType: r = "a", onPress: a, onPressStart: i, onPressEnd: s, onPressChange: c, onClick: u, isDisabled: p, ...f } = e, v = {};
  r !== "a" && (v = {
    role: "link",
    tabIndex: p ? void 0 : 0
  });
  let { focusableProps: g } = ys(e, t), { pressProps: h, isPressed: b } = Qr({
    onPress: a,
    onPressStart: i,
    onPressEnd: s,
    onPressChange: c,
    onClick: u,
    isDisabled: p,
    ref: t
  }), $ = gt(f, {
    labelable: !0
  }), w = $e(g, h), k = oa(), T = Gd(e);
  return {
    isPressed: b,
    linkProps: $e($, T, {
      ...w,
      ...v,
      "aria-disabled": p || void 0,
      "aria-current": e["aria-current"],
      onClick: (F) => {
        h.onClick?.(F), G1(F, k, e.href, e.routerOptions);
      }
    })
  };
}
function ws(e, t) {
  let { elementType: r = "button", isDisabled: a, onPress: i, onPressStart: s, onPressEnd: c, onPressUp: u, onPressChange: p, preventFocusOnPress: f, allowFocusWhenDisabled: v, onClick: g, href: h, target: b, rel: $, type: w = "button" } = e, k;
  r === "button" ? k = {
    type: w,
    disabled: a,
    form: e.form,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formMethod: e.formMethod,
    formNoValidate: e.formNoValidate,
    formTarget: e.formTarget,
    name: e.name,
    value: e.value
  } : k = {
    role: "button",
    href: r === "a" && !a ? h : void 0,
    target: r === "a" ? b : void 0,
    type: r === "input" ? w : void 0,
    disabled: r === "input" ? a : void 0,
    "aria-disabled": !a || r === "input" ? void 0 : a,
    rel: r === "a" ? $ : void 0
  };
  let { pressProps: T, isPressed: F } = Qr({
    onPressStart: s,
    onPressEnd: c,
    onPressChange: p,
    onPress: i,
    onPressUp: u,
    onClick: g,
    isDisabled: a,
    preventFocusOnPress: f,
    ref: t
  }), { focusableProps: H } = ys(e, t);
  v && (H.tabIndex = a ? -1 : H.tabIndex);
  let K = $e(H, T, gt(e, {
    labelable: !0
  }));
  return {
    isPressed: F,
    buttonProps: $e(k, K, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      "aria-current": e["aria-current"],
      "aria-disabled": e["aria-disabled"]
    })
  };
}
class qw {
  constructor(t, r, a, i) {
    this._walkerStack = [], this._currentSetFor = /* @__PURE__ */ new Set(), this._acceptNode = (c) => {
      if (c.nodeType === Node.ELEMENT_NODE) {
        const u = c.shadowRoot;
        if (u) {
          const p = this._doc.createTreeWalker(u, this.whatToShow, {
            acceptNode: this._acceptNode
          });
          return this._walkerStack.unshift(p), NodeFilter.FILTER_ACCEPT;
        } else {
          if (typeof this.filter == "function") return this.filter(c);
          if (this.filter?.acceptNode) return this.filter.acceptNode(c);
          if (this.filter === null) return NodeFilter.FILTER_ACCEPT;
        }
      }
      return NodeFilter.FILTER_SKIP;
    }, this._doc = t, this.root = r, this.filter = i ?? null, this.whatToShow = a ?? NodeFilter.SHOW_ALL, this._currentNode = r, this._walkerStack.unshift(t.createTreeWalker(r, a, this._acceptNode));
    const s = r.shadowRoot;
    if (s) {
      const c = this._doc.createTreeWalker(s, this.whatToShow, {
        acceptNode: this._acceptNode
      });
      this._walkerStack.unshift(c);
    }
  }
  get currentNode() {
    return this._currentNode;
  }
  set currentNode(t) {
    if (!Ne(this.root, t)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
    const r = [];
    let a = t, i = t;
    for (this._currentNode = t; a && a !== this.root; ) if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      const c = a, u = this._doc.createTreeWalker(c, this.whatToShow, {
        acceptNode: this._acceptNode
      });
      r.push(u), u.currentNode = i, this._currentSetFor.add(u), a = i = c.host;
    } else a = a.parentNode;
    const s = this._doc.createTreeWalker(this.root, this.whatToShow, {
      acceptNode: this._acceptNode
    });
    r.push(s), s.currentNode = i, this._currentSetFor.add(s), this._walkerStack = r;
  }
  get doc() {
    return this._doc;
  }
  firstChild() {
    let t = this.currentNode, r = this.nextNode();
    return Ne(t, r) ? (r && (this.currentNode = r), r) : (this.currentNode = t, null);
  }
  lastChild() {
    let r = this._walkerStack[0].lastChild();
    return r && (this.currentNode = r), r;
  }
  nextNode() {
    const t = this._walkerStack[0].nextNode();
    if (t) {
      if (t.shadowRoot) {
        let a;
        if (typeof this.filter == "function" ? a = this.filter(t) : this.filter?.acceptNode && (a = this.filter.acceptNode(t)), a === NodeFilter.FILTER_ACCEPT)
          return this.currentNode = t, t;
        let i = this.nextNode();
        return i && (this.currentNode = i), i;
      }
      return t && (this.currentNode = t), t;
    } else if (this._walkerStack.length > 1) {
      this._walkerStack.shift();
      let r = this.nextNode();
      return r && (this.currentNode = r), r;
    } else return null;
  }
  previousNode() {
    const t = this._walkerStack[0];
    if (t.currentNode === t.root) {
      if (this._currentSetFor.has(t))
        if (this._currentSetFor.delete(t), this._walkerStack.length > 1) {
          this._walkerStack.shift();
          let a = this.previousNode();
          return a && (this.currentNode = a), a;
        } else return null;
      return null;
    }
    const r = t.previousNode();
    if (r) {
      if (r.shadowRoot) {
        let i;
        if (typeof this.filter == "function" ? i = this.filter(r) : this.filter?.acceptNode && (i = this.filter.acceptNode(r)), i === NodeFilter.FILTER_ACCEPT)
          return r && (this.currentNode = r), r;
        let s = this.lastChild();
        return s && (this.currentNode = s), s;
      }
      return r && (this.currentNode = r), r;
    } else if (this._walkerStack.length > 1) {
      this._walkerStack.shift();
      let a = this.previousNode();
      return a && (this.currentNode = a), a;
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
function gv(e, t, r, a) {
  return wn() ? new qw(e, t, r, a) : e.createTreeWalker(t, r, a);
}
const ng = /* @__PURE__ */ C.createContext(null), hd = "react-aria-focus-scope-restore";
let Be = null;
function Jd(e) {
  let { children: t, contain: r, restoreFocus: a, autoFocus: i } = e, s = S.useRef(null), c = S.useRef(null), u = S.useRef([]), { parentNode: p } = S.useContext(ng) || {}, f = S.useMemo(() => new vd({
    scopeRef: u
  }), [
    u
  ]);
  Le(() => {
    let h = p || st.root;
    if (st.getTreeNode(h.scopeRef) && Be && !ts(Be, h.scopeRef)) {
      let b = st.getTreeNode(Be);
      b && (h = b);
    }
    h.addChild(f), st.addNode(f);
  }, [
    f,
    p
  ]), Le(() => {
    let h = st.getTreeNode(u);
    h && (h.contain = !!r);
  }, [
    r
  ]), Le(() => {
    let h = s.current?.nextSibling, b = [], $ = (w) => w.stopPropagation();
    for (; h && h !== c.current; )
      b.push(h), h.addEventListener(hd, $), h = h.nextSibling;
    return u.current = b, () => {
      for (let w of b) w.removeEventListener(hd, $);
    };
  }, [
    t
  ]), t4(u, a, r), Yw(u, r), n4(u, a, r), e4(u, i), S.useEffect(() => {
    const h = Oe(Pe(u.current ? u.current[0] : void 0));
    let b = null;
    if (en(h, u.current)) {
      for (let $ of st.traverse()) $.scopeRef && en(h, $.scopeRef.current) && (b = $);
      b === st.getTreeNode(u) && (Be = b.scopeRef);
    }
  }, [
    u
  ]), Le(() => () => {
    let h = st.getTreeNode(u)?.parent?.scopeRef ?? null;
    (u === Be || ts(u, Be)) && (!h || st.getTreeNode(h)) && (Be = h), st.removeTreeNode(u);
  }, [
    u
  ]);
  let v = S.useMemo(() => Zw(u), []), g = S.useMemo(() => ({
    focusManager: v,
    parentNode: f
  }), [
    f,
    v
  ]);
  return /* @__PURE__ */ C.createElement(ng.Provider, {
    value: g
  }, /* @__PURE__ */ C.createElement("span", {
    "data-focus-scope-start": !0,
    hidden: !0,
    ref: s
  }), t, /* @__PURE__ */ C.createElement("span", {
    "data-focus-scope-end": !0,
    hidden: !0,
    ref: c
  }));
}
function Zw(e) {
  return {
    focusNext(t = {}) {
      let r = e.current, { from: a, tabbable: i, wrap: s, accept: c } = t, u = a || Oe(Pe(r[0] ?? void 0)), p = r[0].previousElementSibling, f = Kr(r), v = Sn(f, {
        tabbable: i,
        accept: c
      }, r);
      v.currentNode = en(u, r) ? u : p;
      let g = v.nextNode();
      return !g && s && (v.currentNode = p, g = v.nextNode()), g && dn(g, !0), g;
    },
    focusPrevious(t = {}) {
      let r = e.current, { from: a, tabbable: i, wrap: s, accept: c } = t, u = a || Oe(Pe(r[0] ?? void 0)), p = r[r.length - 1].nextElementSibling, f = Kr(r), v = Sn(f, {
        tabbable: i,
        accept: c
      }, r);
      v.currentNode = en(u, r) ? u : p;
      let g = v.previousNode();
      return !g && s && (v.currentNode = p, g = v.previousNode()), g && dn(g, !0), g;
    },
    focusFirst(t = {}) {
      let r = e.current, { tabbable: a, accept: i } = t, s = Kr(r), c = Sn(s, {
        tabbable: a,
        accept: i
      }, r);
      c.currentNode = r[0].previousElementSibling;
      let u = c.nextNode();
      return u && dn(u, !0), u;
    },
    focusLast(t = {}) {
      let r = e.current, { tabbable: a, accept: i } = t, s = Kr(r), c = Sn(s, {
        tabbable: a,
        accept: i
      }, r);
      c.currentNode = r[r.length - 1].nextElementSibling;
      let u = c.previousNode();
      return u && dn(u, !0), u;
    }
  };
}
function Kr(e) {
  return e[0].parentElement;
}
function Mi(e) {
  let t = st.getTreeNode(Be);
  for (; t && t.scopeRef !== e; ) {
    if (t.contain) return !1;
    t = t.parent;
  }
  return !0;
}
function Qw(e) {
  if (!e.form)
    return Array.from(Pe(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)).filter((a) => !a.form);
  const t = e.form.elements.namedItem(e.name);
  let r = ht(e);
  return t instanceof r.RadioNodeList ? Array.from(t).filter((a) => a instanceof r.HTMLInputElement) : t instanceof r.HTMLInputElement ? [
    t
  ] : [];
}
function Xw(e) {
  if (e.checked) return !0;
  const t = Qw(e);
  return t.length > 0 && !t.some((r) => r.checked);
}
function Yw(e, t) {
  let r = S.useRef(void 0), a = S.useRef(void 0);
  Le(() => {
    let i = e.current;
    if (!t) {
      a.current && (cancelAnimationFrame(a.current), a.current = void 0);
      return;
    }
    const s = Pe(i ? i[0] : void 0);
    let c = (f) => {
      if (f.key !== "Tab" || f.altKey || f.ctrlKey || f.metaKey || !Mi(e) || f.isComposing) return;
      let v = Oe(s), g = e.current;
      if (!g || !en(v, g)) return;
      let h = Kr(g), b = Sn(h, {
        tabbable: !0
      }, g);
      if (!v) return;
      b.currentNode = v;
      let $ = f.shiftKey ? b.previousNode() : b.nextNode();
      $ || (b.currentNode = f.shiftKey ? g[g.length - 1].nextElementSibling : g[0].previousElementSibling, $ = f.shiftKey ? b.previousNode() : b.nextNode()), f.preventDefault(), $ && (dn($, !0), $ instanceof ht($).HTMLInputElement && $.select());
    }, u = (f) => {
      (!Be || ts(Be, e)) && en(ye(f), e.current) ? (Be = e, r.current = ye(f)) : Mi(e) && !fr(ye(f), e) ? r.current ? dn(r.current) : Be && Be.current && gd(Be.current) : Mi(e) && (r.current = ye(f));
    }, p = (f) => {
      a.current && cancelAnimationFrame(a.current), a.current = requestAnimationFrame(() => {
        let v = qi(), g = (v === "virtual" || v === null) && Xo() && U1(), h = Oe(s);
        if (!g && h && Mi(e) && !fr(h, e)) {
          Be = e;
          let b = ye(f);
          b && b.isConnected ? (r.current = b, dn(r.current)) : Be.current && gd(Be.current);
        }
      });
    };
    return s.addEventListener("keydown", c, !1), s.addEventListener("focusin", u, !1), i?.forEach((f) => f.addEventListener("focusin", u, !1)), i?.forEach((f) => f.addEventListener("focusout", p, !1)), () => {
      s.removeEventListener("keydown", c, !1), s.removeEventListener("focusin", u, !1), i?.forEach((f) => f.removeEventListener("focusin", u, !1)), i?.forEach((f) => f.removeEventListener("focusout", p, !1));
    };
  }, [
    e,
    t
  ]), Le(() => () => {
    a.current && cancelAnimationFrame(a.current);
  }, [
    a
  ]);
}
function vv(e) {
  return fr(e);
}
function en(e, t) {
  return !e || !t ? !1 : t.some((r) => Ne(r, e));
}
function fr(e, t = null) {
  if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
  for (let { scopeRef: r } of st.traverse(st.getTreeNode(t)))
    if (r && en(e, r.current)) return !0;
  return !1;
}
function Jw(e) {
  return fr(e, Be);
}
function ts(e, t) {
  let r = st.getTreeNode(t)?.parent;
  for (; r; ) {
    if (r.scopeRef === e) return !0;
    r = r.parent;
  }
  return !1;
}
function dn(e, t = !1) {
  if (e != null && !t) try {
    yr(e);
  } catch {
  }
  else if (e != null) try {
    e.focus();
  } catch {
  }
}
function yv(e, t = !0) {
  let r = e[0].previousElementSibling, a = Kr(e), i = Sn(a, {
    tabbable: t
  }, e);
  i.currentNode = r;
  let s = i.nextNode();
  return t && !s && (a = Kr(e), i = Sn(a, {
    tabbable: !1
  }, e), i.currentNode = r, s = i.nextNode()), s;
}
function gd(e, t = !0) {
  dn(yv(e, t));
}
function e4(e, t) {
  const r = C.useRef(t);
  S.useEffect(() => {
    if (r.current) {
      Be = e;
      const a = Pe(e.current ? e.current[0] : void 0);
      !en(Oe(a), Be.current) && e.current && gd(e.current);
    }
    r.current = !1;
  }, [
    e
  ]);
}
function t4(e, t, r) {
  Le(() => {
    if (t || r) return;
    let a = e.current;
    const i = Pe(a ? a[0] : void 0);
    let s = (c) => {
      let u = ye(c);
      en(u, e.current) ? Be = e : vv(u) || (Be = null);
    };
    return i.addEventListener("focusin", s, !1), a?.forEach((c) => c.addEventListener("focusin", s, !1)), () => {
      i.removeEventListener("focusin", s, !1), a?.forEach((c) => c.removeEventListener("focusin", s, !1));
    };
  }, [
    e,
    t,
    r
  ]);
}
function rg(e) {
  let t = st.getTreeNode(Be);
  for (; t && t.scopeRef !== e; ) {
    if (t.nodeToRestore) return !1;
    t = t.parent;
  }
  return t?.scopeRef === e;
}
function n4(e, t, r) {
  const a = S.useRef(typeof document < "u" ? Oe(
    // oxlint-disable-next-line react/react-compiler
    Pe(e.current ? e.current[0] : void 0)
  ) : null);
  Le(() => {
    let i = e.current;
    const s = Pe(i ? i[0] : void 0);
    if (!t || r) return;
    let c = () => {
      (!Be || ts(Be, e)) && en(Oe(s), e.current) && (Be = e);
    };
    return s.addEventListener("focusin", c, !1), i?.forEach((u) => u.addEventListener("focusin", c, !1)), () => {
      s.removeEventListener("focusin", c, !1), i?.forEach((u) => u.removeEventListener("focusin", c, !1));
    };
  }, [
    e,
    r
  ]), Le(() => {
    const i = Pe(e.current ? e.current[0] : void 0);
    if (!t) return;
    let s = (c) => {
      if (c.key !== "Tab" || c.altKey || c.ctrlKey || c.metaKey || !Mi(e) || c.isComposing) return;
      let u = i.activeElement;
      if (!fr(u, e) || !rg(e)) return;
      let p = st.getTreeNode(e);
      if (!p) return;
      let f = p.nodeToRestore, v = Sn(i.body, {
        tabbable: !0
      });
      v.currentNode = u;
      let g = c.shiftKey ? v.previousNode() : v.nextNode();
      if ((!f || !f.isConnected || f === i.body) && (f = void 0, p.nodeToRestore = void 0), (!g || !fr(g, e)) && f) {
        v.currentNode = f;
        do
          g = c.shiftKey ? v.previousNode() : v.nextNode();
        while (fr(g, e));
        c.preventDefault(), c.stopPropagation(), g ? dn(g, !0) : vv(f) ? dn(f, !0) : u.blur();
      }
    };
    return r || i.addEventListener("keydown", s, !0), () => {
      r || i.removeEventListener("keydown", s, !0);
    };
  }, [
    e,
    t,
    r
  ]), Le(() => {
    const i = Pe(e.current ? e.current[0] : void 0);
    if (!t) return;
    let s = st.getTreeNode(e);
    if (s)
      return s.nodeToRestore = a.current ?? void 0, () => {
        let c = st.getTreeNode(e);
        if (!c) return;
        let u = c.nodeToRestore, p = Oe(i);
        if (t && u && (p && fr(p, e) || p === i.body && rg(e))) {
          let f = st.clone();
          requestAnimationFrame(() => {
            if (i.activeElement === i.body) {
              let v = f.getTreeNode(e);
              for (; v; ) {
                if (v.nodeToRestore && v.nodeToRestore.isConnected) {
                  lg(v.nodeToRestore);
                  return;
                }
                v = v.parent;
              }
              for (v = f.getTreeNode(e); v; ) {
                if (v.scopeRef && // TODO: this is probably a false positive based on naming, it's not a real ref, rename.
                // oxlint-disable-next-line react-hooks/exhaustive-deps
                v.scopeRef.current && st.getTreeNode(v.scopeRef)) {
                  let g = yv(v.scopeRef.current, !0);
                  if (g) {
                    lg(g);
                    return;
                  }
                }
                v = v.parent;
              }
            }
          });
        }
      };
  }, [
    e,
    t
  ]);
}
function lg(e) {
  e.dispatchEvent(new CustomEvent(hd, {
    bubbles: !0,
    cancelable: !0
  })) && dn(e);
}
function Sn(e, t, r) {
  let a = t?.tabbable ? Bd : D1, i = e?.nodeType === Node.ELEMENT_NODE ? e : null, s = Pe(i), c = gv(s, e || s, NodeFilter.SHOW_ELEMENT, {
    acceptNode(u) {
      return Ne(t?.from, u) || t?.tabbable && u.tagName === "INPUT" && u.getAttribute("type") === "radio" && (!Xw(u) || c.currentNode.tagName === "INPUT" && c.currentNode.type === "radio" && c.currentNode.name === u.name) ? NodeFilter.FILTER_REJECT : a(u) && (!r || en(u, r)) && (!t?.accept || t.accept(u)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  return t?.from && (c.currentNode = t.from), c;
}
class ef {
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map(), this.root = new vd({
      scopeRef: null
    }), this.fastMap.set(null, this.root);
  }
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(t) {
    return this.fastMap.get(t);
  }
  addTreeNode(t, r, a) {
    let i = this.fastMap.get(r ?? null);
    if (!i) return;
    let s = new vd({
      scopeRef: t
    });
    i.addChild(s), s.parent = i, this.fastMap.set(t, s), a && (s.nodeToRestore = a);
  }
  addNode(t) {
    this.fastMap.set(t.scopeRef, t);
  }
  removeTreeNode(t) {
    if (t === null) return;
    let r = this.fastMap.get(t);
    if (!r) return;
    let a = r.parent;
    for (let s of this.traverse()) s !== r && r.nodeToRestore && s.nodeToRestore && r.scopeRef && r.scopeRef.current && en(s.nodeToRestore, r.scopeRef.current) && (s.nodeToRestore = r.nodeToRestore);
    let i = r.children;
    a && (a.removeChild(r), i.size > 0 && i.forEach((s) => a && a.addChild(s))), this.fastMap.delete(r.scopeRef);
  }
  // Pre Order Depth First
  *traverse(t = this.root) {
    if (t.scopeRef != null && (yield t), t.children.size > 0) for (let r of t.children) yield* this.traverse(r);
  }
  clone() {
    let t = new ef();
    for (let r of this.traverse()) t.addTreeNode(r.scopeRef, r.parent?.scopeRef ?? null, r.nodeToRestore);
    return t;
  }
}
class vd {
  constructor(t) {
    this.children = /* @__PURE__ */ new Set(), this.contain = !1, this.scopeRef = t.scopeRef;
  }
  addChild(t) {
    this.children.add(t), t.parent = this;
  }
  removeChild(t) {
    this.children.delete(t), t.parent = void 0;
  }
}
let st = new ef();
function Ur(e, t) {
  if (!e) return !1;
  let r = window.getComputedStyle(e), a = document.scrollingElement || document.documentElement, i = /(auto|scroll)/.test(r.overflow + r.overflowX + r.overflowY);
  return e === a && r.overflow !== "hidden" && (i = !0), i && t && (i = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), i;
}
function tf(e, t) {
  let r = e;
  for (Ur(r, t) && (r = r.parentElement); r && !Ur(r, t); ) r = r.parentElement;
  return r || document.scrollingElement || document.documentElement;
}
function Kc(e, t) {
  let r = [], a = document.scrollingElement || document.documentElement;
  for (; e && (Ur(e, t) && r.push(e), e !== a); )
    e = e.parentElement;
  return r;
}
function Oo(e, t, r = {}) {
  if (e === t) return;
  let a = t.getBoundingClientRect();
  r4(e, t, a, r);
}
function r4(e, t, r, a = {}) {
  let { block: i = "nearest", inline: s = "nearest" } = a, c = e.scrollTop, u = e.scrollLeft, p = e.getBoundingClientRect(), f = window.getComputedStyle(t), v = window.getComputedStyle(e), g = document.scrollingElement || document.documentElement, h = e === g, b = e === g ? 0 : p.top, $ = e === g ? e.clientHeight : p.bottom, w = e === g ? 0 : p.left, k = e === g ? e.clientWidth : p.right, T = parseFloat(f.scrollMarginTop) || 0, F = parseFloat(f.scrollMarginBottom) || 0, H = parseFloat(f.scrollMarginLeft) || 0, K = parseFloat(f.scrollMarginRight) || 0, Y = parseFloat(v.scrollPaddingTop) || 0, re = parseFloat(v.scrollPaddingBottom) || 0, Q = parseFloat(v.scrollPaddingLeft) || 0, X = parseFloat(v.scrollPaddingRight) || 0, ie = parseFloat(v.borderTopWidth) || 0, ae = parseFloat(v.borderBottomWidth) || 0, ne = parseFloat(v.borderLeftWidth) || 0, A = parseFloat(v.borderRightWidth) || 0, B = r.top - T, _ = r.bottom + F, D = r.left - H, I = r.right + K, M = e === g ? 0 : ne + A, z = e === g ? 0 : ie + ae, L = e === g ? 0 : e.offsetWidth - e.clientWidth - M, W = e === g ? 0 : e.offsetHeight - e.clientHeight - z, N = b + (h ? 0 : ie) + Y, G = $ - (h ? 0 : ae) - re - W, me = w + (h ? 0 : ne) + Q, ue = k - (h ? 0 : A) - X;
  vr() && Dn() || v.direction === "ltr" ? ue -= L : v.direction === "rtl" && (me += L);
  let q = B < N || _ > G, ce = D < me || I > ue;
  if (q && i === "start") c += B - N;
  else if (q && i === "center") c += (B + _) / 2 - (N + G) / 2;
  else if (q && i === "end") c += _ - G;
  else if (q && i === "nearest") {
    let ve = B - N, Se = _ - G;
    c += Math.abs(ve) <= Math.abs(Se) ? ve : Se;
  }
  if (ce && s === "start") u += D - me;
  else if (ce && s === "center") u += (D + I) / 2 - (me + ue) / 2;
  else if (ce && s === "end") u += I - ue;
  else if (ce && s === "nearest") {
    let ve = D - me, Se = I - ue;
    u += Math.abs(ve) <= Math.abs(Se) ? ve : Se;
  }
  e.scrollTo({
    left: u,
    top: c
  });
}
function ig(e, t = {}) {
  let { containingElement: r } = t;
  if (e && e.isConnected) {
    let a = document.scrollingElement || document.documentElement;
    if (window.getComputedStyle(a).overflow === "hidden") {
      let { left: s, top: c } = e.getBoundingClientRect(), u = Kc(e, !0);
      for (let v of u) Oo(v, e);
      let { left: p, top: f } = e.getBoundingClientRect();
      if (Math.abs(s - p) > 1 || Math.abs(c - f) > 1) {
        u = r ? Kc(r, !0) : [];
        for (let v of u) Oo(v, r, {
          block: "center",
          inline: "center"
        });
        for (let v of Kc(e, !0)) Oo(v, e);
      }
    } else {
      let { left: s, top: c } = e.getBoundingClientRect();
      e?.scrollIntoView?.({
        block: "nearest"
      });
      let { left: u, top: p } = e.getBoundingClientRect();
      (Math.abs(s - u) > 1 || Math.abs(c - p) > 1) && (r?.scrollIntoView?.({
        block: "center",
        inline: "center"
      }), e.scrollIntoView?.({
        block: "nearest"
      }));
    }
  }
}
let l4 = 0;
const Dc = /* @__PURE__ */ new Map();
function i4(e) {
  let [t, r] = S.useState();
  return Le(() => {
    if (!e) return;
    let a = Dc.get(e);
    if (a)
      r(a.element.id);
    else {
      let i = `react-aria-description-${l4++}`;
      r(i);
      let s = document.createElement("div");
      s.id = i, s.style.display = "none", s.textContent = e, document.body.appendChild(s), a = {
        refCount: 0,
        element: s
      }, Dc.set(e, a);
    }
    return a.refCount++, () => {
      a && --a.refCount === 0 && (a.element.remove(), Dc.delete(e));
    };
  }, [
    e
  ]), {
    "aria-describedby": e ? t : void 0
  };
}
function Ss(e) {
  let { isDisabled: t, onBlurWithin: r, onFocusWithin: a, onFocusWithinChange: i } = e, s = S.useRef({
    isFocusWithin: !1
  }), { addGlobalListener: c, removeAllGlobalListeners: u } = xs(), p = S.useCallback((g) => {
    Ne(g.currentTarget, ye(g)) && s.current.isFocusWithin && !Ne(g.currentTarget, g.relatedTarget) && (s.current.isFocusWithin = !1, u(), r && r(g), i && i(!1));
  }, [
    r,
    i,
    s,
    u
  ]), f = H1(p), v = S.useCallback((g) => {
    if (!Ne(g.currentTarget, ye(g))) return;
    let h = ye(g);
    const b = Pe(h), $ = Oe(b);
    if (!s.current.isFocusWithin && $ === h) {
      a && a(g), i && i(!0), s.current.isFocusWithin = !0, f(g);
      let w = g.currentTarget;
      c(b, "focus", (k) => {
        let T = ye(k);
        if (s.current.isFocusWithin && !Ne(w, T)) {
          let F = new b.defaultView.FocusEvent("blur", {
            relatedTarget: T
          });
          V1(F, w);
          let H = Ud(F);
          p(H);
        }
      }, {
        capture: !0
      });
    }
  }, [
    a,
    i,
    f,
    c,
    p
  ]);
  return t ? {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: v,
      onBlur: p
    }
  };
}
const a4 = typeof document < "u" ? C.useInsertionEffect ?? C.useLayoutEffect : () => {
};
function Cs(e, t, r) {
  let [a, i] = S.useState(e || t), s = S.useRef(a), c = S.useRef(e !== void 0), u = e !== void 0;
  S.useEffect(() => {
    c.current, c.current = u;
  }, [
    u
  ]);
  let p = u ? e : a;
  a4(() => {
    s.current = p;
  });
  let [, f] = S.useReducer(() => ({}), {}), v = S.useCallback((g, ...h) => {
    let b = typeof g == "function" ? g(s.current) : g;
    Object.is(s.current, b) || (s.current = b, i(b), f(), r?.(b, ...h));
  }, [
    r
  ]);
  return [
    p,
    v
  ];
}
function yd(e, t = -1 / 0, r = 1 / 0) {
  return Math.min(Math.max(e, t), r);
}
const ag = {
  border: 0,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: "1px",
  whiteSpace: "nowrap"
};
function o4(e = {}) {
  let { style: t, isFocusable: r } = e, [a, i] = S.useState(!1), { focusWithinProps: s } = Ss({
    isDisabled: !r,
    onFocusWithinChange: (u) => i(u)
  }), c = S.useMemo(() => a ? t : t ? {
    ...ag,
    ...t
  } : ag, [
    a
  ]);
  return {
    visuallyHiddenProps: {
      ...s,
      style: c
    }
  };
}
function s4(e) {
  let { children: t, elementType: r = "div", isFocusable: a, style: i, ...s } = e, { visuallyHiddenProps: c } = o4(e);
  return /* @__PURE__ */ C.createElement(r, $e(s, c), t);
}
const u4 = typeof HTMLElement < "u" && "inert" in HTMLElement.prototype;
function og(e) {
  return e.dataset.liveAnnouncer === "true" || e.dataset.reactAriaTopLayer !== void 0;
}
let Ni = /* @__PURE__ */ new WeakMap(), It = [];
function bv(e, t) {
  let r = ht(e?.[0]), a = t instanceof r.Element ? {
    root: t
  } : t, i = a?.root ?? document.body, s = a?.shouldUseInert && u4, c = new Set(e), u = /* @__PURE__ */ new Set(), p = (k) => s && k instanceof r.HTMLElement ? k.inert : k.getAttribute("aria-hidden") === "true", f = (k, T) => {
    s && k instanceof r.HTMLElement ? k.inert = T : T ? k.setAttribute("aria-hidden", "true") : (k.removeAttribute("aria-hidden"), k instanceof r.HTMLElement && (k.inert = !1));
  }, v = /* @__PURE__ */ new Set();
  if (wn()) {
    let k = i.getRootNode();
    for (let T of e) {
      let F = T.getRootNode();
      for (; hs(F) && F !== k; )
        v.add(F), F = F.host.getRootNode();
    }
  }
  let g = (k) => {
    for (let K of k.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]")) c.add(K);
    let T = (K) => {
      if (u.has(K) || c.has(K) || K.parentElement && u.has(K.parentElement) && K.parentElement.getAttribute("role") !== "row") return NodeFilter.FILTER_REJECT;
      for (let Y of c)
        if (Ne(K, Y)) return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    }, F = gv(Pe(k), k, NodeFilter.SHOW_ELEMENT, {
      acceptNode: T
    }), H = T(k);
    if (H === NodeFilter.FILTER_ACCEPT && h(k), H !== NodeFilter.FILTER_REJECT) {
      let K = F.nextNode();
      for (; K != null; )
        h(K), K = F.nextNode();
    }
  }, h = (k) => {
    let T = Ni.get(k) ?? 0;
    p(k) && T === 0 || (T === 0 && f(k, !0), u.add(k), Ni.set(k, T + 1));
  };
  It.length && It[It.length - 1].disconnect(), g(i);
  let b = new MutationObserver((k) => {
    for (let T of k)
      if (T.type === "childList") {
        if (T.target.isConnected && ![
          ...c,
          ...u
        ].some((F) => Ne(F, T.target))) for (let F of T.addedNodes)
          (F instanceof HTMLElement || F instanceof SVGElement) && og(F) ? c.add(F) : F instanceof Element && g(F);
        if (wn()) {
          for (let F of v) if (!F.isConnected) {
            b.disconnect();
            break;
          }
        }
      }
  });
  b.observe(i, {
    childList: !0,
    subtree: !0
  });
  let $ = /* @__PURE__ */ new Set();
  if (wn()) for (let k of v) {
    let T = new MutationObserver((F) => {
      for (let H of F)
        if (H.type === "childList") {
          if (H.target.isConnected && ![
            ...c,
            ...u
          ].some((K) => Ne(K, H.target))) for (let K of H.addedNodes)
            (K instanceof HTMLElement || K instanceof SVGElement) && og(K) ? c.add(K) : K instanceof Element && g(K);
          if (wn()) {
            for (let K of v) if (!K.isConnected) {
              b.disconnect();
              break;
            }
          }
        }
    });
    T.observe(k, {
      childList: !0,
      subtree: !0
    }), $.add(T);
  }
  let w = {
    visibleNodes: c,
    hiddenNodes: u,
    observe() {
      b.observe(i, {
        childList: !0,
        subtree: !0
      });
    },
    disconnect() {
      b.disconnect();
    }
  };
  return It.push(w), () => {
    if (b.disconnect(), wn()) for (let k of $) k.disconnect();
    for (let k of u) {
      let T = Ni.get(k);
      T != null && (T === 1 ? (f(k, !1), Ni.delete(k)) : Ni.set(k, T - 1));
    }
    w === It[It.length - 1] ? (It.pop(), It.length && It[It.length - 1].observe()) : It.splice(It.indexOf(w), 1);
  };
}
function c4(e) {
  let t = It[It.length - 1];
  if (t && !t.visibleNodes.has(e))
    return t.visibleNodes.add(e), () => {
      t.visibleNodes.delete(e);
    };
}
function bd(e) {
  return S2() ? e.altKey : e.ctrlKey;
}
function Or(e, t) {
  let r = `[data-key="${CSS.escape(String(t))}"]`, a = e.current?.dataset.collection;
  return a && (r = `[data-collection="${CSS.escape(a)}"]${r}`), e.current?.querySelector(r);
}
const xv = /* @__PURE__ */ new WeakMap();
function d4(e) {
  let t = br();
  return xv.set(e, t), t;
}
function f4(e) {
  return xv.get(e);
}
class sg {
  constructor(t) {
    this.ref = t;
  }
  getItemRect(t) {
    let r = this.ref.current;
    if (!r) return null;
    let a = t != null ? Or(this.ref, t) : null;
    if (!a) return null;
    let i = r.getBoundingClientRect(), s = a.getBoundingClientRect();
    return {
      x: s.left - i.left - r.clientLeft + r.scrollLeft,
      y: s.top - i.top - r.clientTop + r.scrollTop,
      width: s.width,
      height: s.height
    };
  }
  getContentSize() {
    let t = this.ref.current;
    return {
      width: t?.scrollWidth ?? 0,
      height: t?.scrollHeight ?? 0
    };
  }
  getVisibleRect() {
    let t = this.ref.current;
    return {
      x: t?.scrollLeft ?? 0,
      y: t?.scrollTop ?? 0,
      width: t?.clientWidth ?? 0,
      height: t?.clientHeight ?? 0
    };
  }
}
class p4 {
  constructor(...t) {
    if (t.length === 1) {
      let r = t[0];
      this.collection = r.collection, this.ref = r.ref, this.collator = r.collator, this.disabledKeys = r.disabledKeys || /* @__PURE__ */ new Set(), this.disabledBehavior = r.disabledBehavior || "all", this.orientation = r.orientation || "vertical", this.direction = r.direction, this.layout = r.layout || "stack", this.layoutDelegate = r.layoutDelegate || new sg(r.ref);
    } else
      this.collection = t[0], this.disabledKeys = t[1], this.ref = t[2], this.collator = t[3], this.layout = "stack", this.orientation = "vertical", this.disabledBehavior = "all", this.layoutDelegate = new sg(this.ref);
    this.layout === "stack" && this.orientation === "vertical" && (this.getKeyLeftOf = void 0, this.getKeyRightOf = void 0);
  }
  isDisabled(t) {
    return this.disabledBehavior === "all" && (t.props?.isDisabled || this.disabledKeys.has(t.key)) && t.props?.disabledBehavior !== "selection";
  }
  findNextNonDisabled(t, r, a = !1) {
    let i = t;
    for (; i != null; ) {
      let s = this.collection.getItem(i);
      if (s?.type === "item" && (a || !this.isDisabled(s))) return i;
      i = r(i);
    }
    return null;
  }
  getNextKey(t, r) {
    let a = t;
    return a = this.collection.getKeyAfter(a), this.findNextNonDisabled(a, (i) => this.collection.getKeyAfter(i), r?.includeDisabled);
  }
  getPreviousKey(t, r) {
    let a = t;
    return a = this.collection.getKeyBefore(a), this.findNextNonDisabled(a, (i) => this.collection.getKeyBefore(i), r?.includeDisabled);
  }
  findKey(t, r, a) {
    let i = t, s = this.layoutDelegate.getItemRect(i);
    if (!s || i == null) return null;
    let c = s;
    do {
      if (i = r(i), i == null) break;
      s = this.layoutDelegate.getItemRect(i);
    } while (s && a(c, s) && i != null);
    return i;
  }
  isSameRow(t, r) {
    return t.y === r.y || t.x !== r.x;
  }
  isSameColumn(t, r) {
    return t.x === r.x || t.y !== r.y;
  }
  // checks to see if the next/prev key is spatially above/below the current key. If not, that means we are in
  // a reversed column layout and need to adjust appropriately
  // TODO: still need to see how this works with virtualizer once there is handling for the reverse layout
  // this felt like a simpler approach then changing getKeyAbove/Below to be purely spatial calculations
  isReversed(t) {
    let r = this.getNextKey(t), a = Or(this.ref, t);
    if (r != null) {
      let s = Or(this.ref, r);
      return !a || !s ? !1 : a.getBoundingClientRect().top > s.getBoundingClientRect().top;
    }
    let i = this.getPreviousKey(t);
    if (i != null) {
      let s = Or(this.ref, i);
      return !a || !s ? !1 : s.getBoundingClientRect().top > a.getBoundingClientRect().top;
    }
    return !1;
  }
  getKeyBelow(t, r) {
    return this.layout === "grid" && this.orientation === "vertical" ? this.findKey(t, (a) => this.getNextKey(a, r), this.isSameRow) : this.orientation === "vertical" ? this.isReversed(t) ? this.getPreviousKey(t, r) : this.getNextKey(t, r) : this.getNextKey(t, r);
  }
  getKeyAbove(t, r) {
    return this.layout === "grid" && this.orientation === "vertical" ? this.findKey(t, (a) => this.getPreviousKey(a, r), this.isSameRow) : this.orientation === "vertical" ? this.isReversed(t) ? this.getNextKey(t, r) : this.getPreviousKey(t, r) : this.getPreviousKey(t, r);
  }
  getNextColumn(t, r, a) {
    return r ? this.getPreviousKey(t, a) : this.getNextKey(t, a);
  }
  getKeyRightOf(t, r) {
    let a = this.direction === "ltr" ? "getKeyRightOf" : "getKeyLeftOf";
    return this.layoutDelegate[a] ? (t = this.layoutDelegate[a](t), this.findNextNonDisabled(t, (i) => this.layoutDelegate[a](i), r?.includeDisabled)) : this.layout === "grid" ? this.orientation === "vertical" ? this.getNextColumn(t, this.direction === "rtl", r) : this.findKey(t, (i) => this.getNextColumn(i, this.direction === "rtl", r), this.isSameColumn) : this.orientation === "horizontal" ? this.getNextColumn(t, this.direction === "rtl", r) : null;
  }
  getKeyLeftOf(t, r) {
    let a = this.direction === "ltr" ? "getKeyLeftOf" : "getKeyRightOf";
    return this.layoutDelegate[a] ? (t = this.layoutDelegate[a](t), this.findNextNonDisabled(t, (i) => this.layoutDelegate[a](i), r?.includeDisabled)) : this.layout === "grid" ? this.orientation === "vertical" ? this.getNextColumn(t, this.direction === "ltr", r) : this.findKey(t, (i) => this.getNextColumn(i, this.direction === "ltr", r), this.isSameColumn) : this.orientation === "horizontal" ? this.getNextColumn(t, this.direction === "ltr", r) : null;
  }
  getFirstKey() {
    let t = this.collection.getFirstKey();
    return this.findNextNonDisabled(t, (r) => this.collection.getKeyAfter(r));
  }
  getLastKey() {
    let t = this.collection.getLastKey();
    return this.findNextNonDisabled(t, (r) => this.collection.getKeyBefore(r));
  }
  getKeyPageAbove(t) {
    let r = this.ref.current, a = this.layoutDelegate.getItemRect(t);
    if (!a) return null;
    let i = this.isReversed(t);
    if (r && !Ur(r)) return this.getFirstKey();
    let s = t;
    if (this.orientation === "horizontal") {
      let c = Math.max(0, a.x + a.width - this.layoutDelegate.getVisibleRect().width);
      for (; a && a.x > c && s != null; )
        s = this.getKeyAbove(s), a = s == null ? null : this.layoutDelegate.getItemRect(s);
    } else {
      let c = this.layoutDelegate.getVisibleRect(), u = i ? a.y - c.height : Math.max(0, a.y + a.height - c.height);
      for (; a && a.y > u && s != null; )
        s = this.getKeyAbove(s), a = s == null ? null : this.layoutDelegate.getItemRect(s);
    }
    return s ?? (i ? this.getLastKey() : this.getFirstKey());
  }
  getKeyPageBelow(t) {
    let r = this.ref.current, a = this.layoutDelegate.getItemRect(t);
    if (!a) return null;
    let i = this.isReversed(t);
    if (r && !Ur(r)) return this.getLastKey();
    let s = t;
    if (this.orientation === "horizontal") {
      let c = Math.min(this.layoutDelegate.getContentSize().width, a.x - a.width + this.layoutDelegate.getVisibleRect().width);
      for (; a && a.x < c && s != null; )
        s = this.getKeyBelow(s), a = s == null ? null : this.layoutDelegate.getItemRect(s);
    } else {
      let c = Math.min(this.layoutDelegate.getContentSize().height, a.y - a.height + this.layoutDelegate.getVisibleRect().height);
      for (; a && a.y < c && s != null; )
        s = this.getKeyBelow(s), a = s == null ? null : this.layoutDelegate.getItemRect(s);
    }
    return s ?? (i ? this.getFirstKey() : this.getLastKey());
  }
  getKeyForSearch(t, r) {
    if (!this.collator) return null;
    let a = this.collection, i = r || this.getFirstKey();
    for (; i != null; ) {
      let s = a.getItem(i);
      if (!s) return null;
      let c = s.textValue.slice(0, t.length);
      if (s.textValue && this.collator.compare(c, t) === 0) return i;
      i = this.getNextKey(i);
    }
    return null;
  }
}
const m4 = 500;
function h4(e) {
  let { isDisabled: t, pointerType: r, onLongPressStart: a, onLongPressEnd: i, onLongPress: s, threshold: c = m4, accessibilityDescription: u } = e;
  const p = S.useRef(void 0);
  let { addGlobalListener: f, removeAllGlobalListeners: v } = xs(), g = ($) => r ? $.pointerType === r : $.pointerType === "mouse" || $.pointerType === "touch", { pressProps: h } = Qr({
    isDisabled: t,
    onPressStart($) {
      if ($.continuePropagation(), g($)) {
        a && a({
          ...$,
          type: "longpressstart"
        }), p.current = setTimeout(() => {
          $.target.dispatchEvent(new PointerEvent("pointercancel", {
            bubbles: !0
          })), f($.target, "click", (k) => k.preventDefault(), {
            once: !0
          }), Pe($.target).activeElement !== $.target && Kn($.target), s && s({
            ...$,
            type: "longpress"
          }), p.current = void 0;
        }, c), $.pointerType === "touch" && f($.target, "contextmenu", (k) => k.preventDefault(), {
          once: !0
        });
        let w = ht($.target);
        f(w, "pointerup", () => {
          setTimeout(() => {
            v();
          }, 100);
        }, {
          once: !0
        });
      }
    },
    onPressEnd($) {
      p.current && clearTimeout(p.current), i && g($) && i({
        ...$,
        type: "longpressend"
      });
    }
  }), b = i4(s && !t ? u : void 0);
  return {
    longPressProps: $e(h, b)
  };
}
const wv = /* @__PURE__ */ new WeakMap();
function g4(e) {
  let { triggerRef: t, isOpen: r, onClose: a } = e;
  S.useEffect(() => {
    if (!r || a === null) return;
    let i = (s) => {
      let c = ye(s);
      if (!t.current || c instanceof Node && !Ne(c, t.current) || c instanceof HTMLInputElement || c instanceof HTMLTextAreaElement) return;
      let u = a || wv.get(t.current);
      u && u();
    };
    return Fl(K1(t.current), "scroll", i, !0);
  }, [
    r,
    a,
    t
  ]);
}
function v4(e, t, r) {
  let { type: a } = e, { isOpen: i } = t;
  S.useEffect(() => {
    r && r.current && wv.set(r.current, t.close);
  });
  let s;
  a === "menu" ? s = !0 : a === "listbox" && (s = "listbox");
  let c = br();
  return {
    triggerProps: {
      "aria-haspopup": s,
      "aria-expanded": i,
      "aria-controls": i ? c : void 0,
      onPress: t.toggle
    },
    overlayProps: {
      id: c
    }
  };
}
const ug = 1e3;
function y4(e) {
  let { keyboardDelegate: t, selectionManager: r, onTypeSelect: a } = e, i = S.useRef({
    search: "",
    timeout: void 0
  }), s = (u) => {
    if (i.current.search.length > 0 && u.key === " ") {
      if (u.preventDefault(), (!("continuePropagation" in u) || "continuePropagation" in u && !u.isPropagationStopped()) && u.stopPropagation(), i.current.search += " ", t.getKeyForSearch != null) {
        let p = t.getKeyForSearch(i.current.search, r.focusedKey);
        p == null && (p = t.getKeyForSearch(i.current.search)), p != null && (r.setFocusedKey(p), a && a(p));
      }
      clearTimeout(i.current.timeout), i.current.timeout = setTimeout(() => {
        i.current.search = "";
      }, ug);
    }
  }, c = (u) => {
    let p = b4(u.key);
    if (!(!p || u.ctrlKey || u.metaKey || u.altKey || !Ne(u.currentTarget, ye(u)) || i.current.search.length === 0 && p === " ")) {
      if (i.current.search += p, t.getKeyForSearch != null) {
        let f = t.getKeyForSearch(i.current.search, r.focusedKey);
        if (f == null && (f = t.getKeyForSearch(i.current.search)), f != null)
          r.setFocusedKey(f), a && a(f), u.preventDefault(), "continuePropagation" in u || u.stopPropagation();
        else {
          i.current.search = "", clearTimeout(i.current.timeout), i.current.timeout = void 0;
          return;
        }
      }
      clearTimeout(i.current.timeout), i.current.timeout = setTimeout(() => {
        i.current.search = "";
      }, ug);
    }
  };
  return S.useEffect(() => {
    let u = i.current.timeout;
    return () => {
      clearTimeout(u);
    };
  }, [
    i
  ]), {
    typeSelectProps: {
      // Using a capturing listener to catch the keydown event before
      // other hooks in order to handle the Spacebar event.
      onKeyDownCapture: t.getKeyForSearch ? s : void 0,
      onKeyDown: t.getKeyForSearch ? c : void 0
    }
  };
}
function b4(e) {
  return e.length === 1 || !/^[A-Z]/i.test(e) ? e : "";
}
function cg(e, t) {
  const r = S.useRef(!0), a = S.useRef(null);
  Le(() => (r.current = !0, () => {
    r.current = !1;
  }), []), Le(() => {
    r.current ? r.current = !1 : (!a.current || t.some((i, s) => !Object.is(i, a[s]))) && e(), a.current = t;
  }, t);
}
function Sv(e) {
  let { selectionManager: t, keyboardDelegate: r, ref: a, autoFocus: i = !1, shouldFocusWrap: s = !1, disallowEmptySelection: c = !1, disallowSelectAll: u = !1, escapeKeyBehavior: p = "clearSelection", selectOnFocus: f = t.selectionBehavior === "replace", disallowTypeAhead: v = !1, shouldUseVirtualFocus: g, allowsTabNavigation: h = !1, scrollRef: b = a, linkBehavior: $ = "action", UNSTABLE_focusOnEntry: w } = e, { direction: k } = Kl(), T = oa();
  const F = (oe, se, Ye) => {
    if (se != null) {
      if (t.isLink(se) && $ === "selection" && f && !bd(oe)) {
        sa.flushSync(() => {
          t.setFocusedKey(se, Ye);
        });
        let De = Or(a, se), Kt = t.getItemProps(se);
        if (De) {
          T.open(De, oe, Kt.href, Kt.routerOptions);
          return;
        }
        return !1;
      }
      if (t.setFocusedKey(se, Ye), t.isLink(se) && $ === "override") return !1;
      if (oe.shiftKey && t.selectionMode === "multiple") {
        t.extendSelection(se);
        return;
      } else if (f && !bd(oe)) {
        t.replaceSelection(se);
        return;
      }
    }
    return !1;
  };
  let H = (oe) => {
    if (r.getKeyBelow) {
      let se = t.focusedKey != null ? r.getKeyBelow?.(t.focusedKey) : r.getFirstKey?.();
      if (se == null && s && (se = r.getFirstKey?.(t.focusedKey)), se != null) {
        F(oe, se);
        return;
      }
    }
    return !1;
  }, K = (oe) => {
    if (r.getKeyAbove) {
      let se = t.focusedKey != null ? r.getKeyAbove?.(t.focusedKey) : r.getLastKey?.();
      if (se == null && s && (se = r.getLastKey?.(t.focusedKey)), se != null) {
        F(oe, se);
        return;
      }
    }
    return !1;
  }, Y = (oe) => {
    if (r.getFirstKey) {
      if (t.focusedKey === null && oe.shiftKey) return !1;
      let se = r.getFirstKey(t.focusedKey, Li(oe));
      if (t.setFocusedKey(se), se != null) {
        if (Li(oe) && oe.shiftKey && t.selectionMode === "multiple") {
          t.extendSelection(se);
          return;
        } else if (f) {
          t.replaceSelection(se);
          return;
        }
      }
    }
    return !1;
  }, re = (oe) => {
    if (r.getKeyLeftOf) {
      let se = t.focusedKey != null ? r.getKeyLeftOf?.(t.focusedKey) : r.getFirstKey?.();
      if (se == null && s && (se = k === "rtl" ? r.getFirstKey?.(t.focusedKey) : r.getLastKey?.(t.focusedKey)), se != null) {
        F(oe, se, k === "rtl" ? "first" : "last");
        return;
      }
    }
    return !1;
  }, Q = (oe) => {
    if (r.getKeyRightOf) {
      let se = t.focusedKey != null ? r.getKeyRightOf?.(t.focusedKey) : r.getFirstKey?.();
      if (se == null && s && (se = k === "rtl" ? r.getLastKey?.(t.focusedKey) : r.getFirstKey?.(t.focusedKey)), se != null) {
        F(oe, se, k === "rtl" ? "last" : "first");
        return;
      }
    }
    return !1;
  }, X = (oe) => {
    if (r.getLastKey) {
      if (t.focusedKey === null && oe.shiftKey) return !1;
      let se = r.getLastKey(t.focusedKey, Li(oe));
      if (t.setFocusedKey(se), se != null) {
        if (Li(oe) && oe.shiftKey && t.selectionMode === "multiple") {
          t.extendSelection(se);
          return;
        } else if (f) {
          t.replaceSelection(se);
          return;
        }
      }
    }
    return !1;
  }, ie = (oe) => {
    if (r.getKeyPageBelow && t.focusedKey != null) {
      let se = r.getKeyPageBelow(t.focusedKey);
      if (se != null) return F(oe, se);
    }
    return !1;
  }, ae = (oe) => {
    if (r.getKeyPageAbove && t.focusedKey != null) {
      let se = r.getKeyPageAbove(t.focusedKey);
      if (se != null) return F(oe, se);
    }
    return !1;
  }, ne = () => {
    if (t.selectionMode === "multiple" && u !== !0) {
      t.selectAll();
      return;
    }
    return !1;
  }, A = () => {
    if (p === "clearSelection" && !c && t.selectedKeys.size !== 0) {
      t.clearSelection();
      return;
    }
    return !1;
  }, B = () => {
    if (!h && a.current) {
      let oe = Sn(a.current, {
        tabbable: !0
      }), se, Ye;
      do
        Ye = oe.lastChild(), Ye && (se = Ye);
      while (Ye);
      let De = Oe();
      se && (!Wi(se) || De && !Bd(De)) && Kn(se);
    }
    return {
      shouldContinuePropagation: !0,
      shouldPreventDefault: !1
    };
  }, _ = () => (!h && a.current && a.current.focus(), {
    shouldContinuePropagation: !0,
    shouldPreventDefault: !1
  }), D = (oe, se) => ({
    [pn() ? oe + "+Shift+Alt" : oe + "+Shift+Control"]: se,
    [oe + "+Shift"]: se,
    [pn() ? oe + "+Alt" : oe + "+Control"]: se,
    [oe]: se
  }), { keyboardProps: I } = Il({
    shortcuts: {
      ...D("ArrowDown", H),
      ...D("ArrowUp", K),
      ...D("ArrowLeft", re),
      ...D("ArrowRight", Q),
      ...D("PageDown", ie),
      ...D("PageUp", ae)
    },
    allowRepeats: !0
  }), { keyboardProps: M } = Il({
    shortcuts: {
      ...D("Home", Y),
      ...D("End", X),
      "Mod+A": ne,
      Escape: A,
      Tab: B,
      "Tab+Shift": _
    }
  }), z = S.useRef({
    top: 0,
    left: 0
  });
  No(b, "scroll", () => {
    z.current = {
      top: b.current?.scrollTop ?? 0,
      left: b.current?.scrollLeft ?? 0
    };
  });
  let L = (oe) => {
    if (t.isFocused) {
      Ne(oe.currentTarget, ye(oe)) || t.setFocused(!1);
      return;
    }
    if (!Ne(oe.currentTarget, ye(oe))) return;
    let se = qi();
    t.setFocused(!0);
    let Ye = (De) => {
      De != null && (t.setFocusedKey(De), f && !t.isSelected(De) && t.replaceSelection(De));
    };
    if (w && (se === "keyboard" || se === "virtual"))
      Ye(w === "first" ? r.getFirstKey?.() : r.getLastKey?.());
    else if (t.focusedKey == null) {
      let De = oe.relatedTarget;
      De && oe.currentTarget.compareDocumentPosition(De) & Node.DOCUMENT_POSITION_FOLLOWING ? Ye(t.lastSelectedKey ?? r.getLastKey?.()) : Ye(t.firstSelectedKey ?? r.getFirstKey?.());
    } else b.current && (b.current.scrollTop = z.current.top, b.current.scrollLeft = z.current.left);
    if (t.focusedKey != null && b.current) {
      let De = Or(a, t.focusedKey);
      De instanceof HTMLElement && (!Wi(De) && !g && Kn(De), (se === "keyboard" || w && se === "virtual") && ig(De, {
        containingElement: a.current
      }));
    }
  }, W = (oe) => {
    Ne(oe.currentTarget, oe.relatedTarget) || t.setFocused(!1);
  }, N = S.useRef(!1);
  No(a, bw, g ? (oe) => {
    let { detail: se } = oe;
    oe.stopPropagation(), t.setFocused(!0), se?.focusStrategy === "first" && (N.current = !0);
  } : void 0);
  let G = r.getFirstKey?.() ?? null;
  cg(() => {
    if (N.current)
      if (G == null) {
        let oe = Oe();
        uv(a.current), cv(oe, null), t.collection.size > 0 && (N.current = !1);
      } else
        t.setFocusedKey(G), N.current = !1;
  }, [
    G,
    t.collection.size
  ]), cg(() => {
    t.collection.size > 0 && (N.current = !1);
  }, [
    t.focusedKey
  ]), No(a, yw, g ? (oe) => {
    oe.stopPropagation(), t.setFocused(!1), oe.detail?.clearFocusKey && t.setFocusedKey(null);
  } : void 0);
  const me = S.useRef(i), ue = S.useRef(!1);
  S.useEffect(() => {
    if (me.current) {
      let oe = null;
      i === "first" && (oe = r.getFirstKey?.() ?? null), i === "last" && (oe = r.getLastKey?.() ?? null);
      let se = t.selectedKeys;
      if (se.size) {
        for (let Ye of se) if (t.canSelectItem(Ye)) {
          oe = Ye;
          break;
        }
      }
      t.setFocused(!0), t.setFocusedKey(oe), oe != null && f && !se.size && t.canSelectItem(oe) && t.replaceSelection(oe), oe == null && !g && a.current && yr(a.current), t.collection.size > 0 && (me.current = !1, ue.current = !0);
    }
  });
  let q = S.useRef(t.focusedKey), ce = S.useRef(null);
  S.useEffect(() => {
    if (t.isFocused && t.focusedKey != null && (t.focusedKey !== q.current || ue.current) && b.current && a.current) {
      let oe = qi(), se = Or(a, t.focusedKey);
      if (!(se instanceof HTMLElement))
        return;
      (oe === "keyboard" || ue.current) && (ce.current && cancelAnimationFrame(ce.current), ce.current = requestAnimationFrame(() => {
        b.current && (Oo(b.current, se), oe !== "virtual" && ig(se, {
          containingElement: a.current
        }));
      }));
    }
    !g && t.isFocused && t.focusedKey == null && q.current != null && a.current && yr(a.current), q.current = t.focusedKey, ue.current = !1;
  }), S.useEffect(() => () => {
    ce.current && cancelAnimationFrame(ce.current);
  }, []), No(a, "react-aria-focus-scope-restore", (oe) => {
    oe.preventDefault(), t.setFocused(!0);
  });
  let ve = {
    ...$e(M, I),
    onFocus: L,
    onBlur: W,
    onMouseDown(oe) {
      b.current === ye(oe) && oe.preventDefault();
    }
  }, { typeSelectProps: Se } = y4({
    keyboardDelegate: r,
    selectionManager: t
  });
  v || (ve = $e(Se, ve));
  let Ae;
  g || (Ae = t.focusedKey == null ? 0 : -1);
  let ut = d4(t.collection);
  return {
    // oxlint-disable-next-line react/react-compiler
    collectionProps: $e(ve, {
      tabIndex: Ae,
      "data-collection": ut
    })
  };
}
function Cv(e, t) {
  return typeof t.getChildren == "function" ? t.getChildren(e.key) : e.childNodes;
}
function x4(e) {
  return w4(e);
}
function w4(e, t) {
  for (let r of e)
    return r;
}
function Oc(e, t, r) {
  if (t.parentKey === r.parentKey) return t.index - r.index;
  let a = [
    ...dg(e, t),
    t
  ], i = [
    ...dg(e, r),
    r
  ], s = a.slice(0, i.length).findIndex((c, u) => c !== i[u]);
  return s !== -1 ? (t = a[s], r = i[s], t.index - r.index) : a.findIndex((c) => c === r) >= 0 ? 1 : (i.findIndex((c) => c === t) >= 0, -1);
}
function dg(e, t) {
  let r = [], a = t;
  for (; a?.parentKey != null; )
    a = e.getItem(a.parentKey), a && r.unshift(a);
  return r;
}
const fg = /* @__PURE__ */ new WeakMap();
function S4(e) {
  let t = fg.get(e);
  if (t != null) return t;
  let r = 0, a = (i) => {
    for (let s of i)
      s.type === "section" ? a(Cv(s, e)) : s.type === "item" && r++;
  };
  return a(e), fg.set(e, r), r;
}
let Vc = /* @__PURE__ */ new Map();
function C4(e) {
  let { locale: t } = Kl(), r = t + (e ? Object.entries(e).sort((i, s) => i[0] < s[0] ? -1 : 1).join() : "");
  if (Vc.has(r)) return Vc.get(r);
  let a = new Intl.Collator(t, e);
  return Vc.set(r, a), a;
}
const $4 = /* @__PURE__ */ C.forwardRef(({ children: e, ...t }, r) => {
  let a = S.useRef(!1), i = S.useContext(Qi), s = $e(i || {}, {
    ...t,
    register() {
      a.current = !0, i && i.register();
    }
  });
  return s.ref = xr(r || i?.ref), Zd(i, s.ref), S.useEffect(() => {
    a.current || (a.current = !0);
  }, []), /* @__PURE__ */ C.createElement(Qi.Provider, {
    value: s
  }, e);
});
function E4({ children: e }) {
  let t = S.useMemo(() => ({
    register: () => {
    }
  }), []);
  return /* @__PURE__ */ C.createElement(Qi.Provider, {
    value: t
  }, e);
}
const k4 = /* @__PURE__ */ S.createContext({});
function _4() {
  return S.useContext(k4) ?? {};
}
const $v = /* @__PURE__ */ C.createContext(null);
function xd(e) {
  let t = qr(), { portalContainer: r = t ? null : document.body, isExiting: a } = e, [i, s] = S.useState(!1), c = S.useMemo(() => ({
    contain: i,
    setContain: s
  }), [
    i,
    s
  ]), { getContainer: u } = _4();
  if (!e.portalContainer && u && (r = u()), !r) return null;
  let p = e.children;
  return e.disableFocusManagement || (p = /* @__PURE__ */ C.createElement(Jd, {
    restoreFocus: !0,
    contain: (e.shouldContainFocus || i) && !a
  }, p)), p = /* @__PURE__ */ C.createElement($v.Provider, {
    value: c
  }, /* @__PURE__ */ C.createElement(E4, null, /* @__PURE__ */ C.createElement(Jo.Provider, {
    value: null
  }, p))), /* @__PURE__ */ aw.createPortal(p, r);
}
function Ev() {
  let t = S.useContext($v)?.setContain;
  Le(() => {
    t?.(!0);
  }, [
    t
  ]);
}
function N4(e, t) {
  let { role: r = "dialog" } = e, a = Ki();
  a = e["aria-label"] ? void 0 : a;
  let i = Ki();
  i = r === "alertdialog" && !e["aria-describedby"] ? i : void 0;
  let s = S.useRef(!1);
  S.useEffect(() => {
    if (t.current && !Wi(t.current)) {
      yr(t.current);
      let u = setTimeout(() => {
        (Oe() === t.current || Oe() === document.body) && (s.current = !0, t.current && (t.current.blur(), yr(t.current)), s.current = !1);
      }, 500);
      return () => {
        clearTimeout(u);
      };
    }
  }, [
    t
  ]), Ev(), S.useRef(!1), S.useEffect(() => {
  });
  let c = e["aria-describedby"] ?? i;
  return {
    dialogProps: {
      ...gt(e, {
        labelable: !0
      }),
      role: r,
      tabIndex: -1,
      "aria-labelledby": e["aria-labelledby"] ?? a,
      "aria-describedby": c,
      // Prevent blur events from reaching useOverlay, which may cause
      // popovers to close. Since focus is contained within the dialog,
      // we don't want this to occur due to the above useEffect.
      onBlur: (u) => {
        s.current && u.stopPropagation();
      }
    },
    titleProps: {
      id: a
    },
    contentProps: {
      id: i
    }
  };
}
function $s(e = {}) {
  let { autoFocus: t = !1, isTextInput: r, within: a } = e, i = S.useRef({
    isFocused: !1,
    isFocusVisible: t || Gi()
  }), [s, c] = S.useState(!1), [u, p] = S.useState(
    // oxlint-disable-next-line react/react-compiler
    () => i.current.isFocused && i.current.isFocusVisible
  ), f = S.useCallback(() => p(i.current.isFocused && i.current.isFocusVisible), []), v = S.useCallback((b) => {
    i.current.isFocused = b, i.current.isFocusVisible = Gi(), c(b), f();
  }, [
    f
  ]);
  V2((b) => {
    i.current.isFocusVisible = b, f();
  }, [
    r,
    s
  ], {
    enabled: s,
    isTextInput: r
  });
  let { focusProps: g } = nv({
    isDisabled: a,
    onFocusChange: v
  }), { focusWithinProps: h } = Ss({
    isDisabled: !a,
    onFocusWithinChange: v
  });
  return {
    isFocused: s,
    isFocusVisible: u,
    focusProps: a ? h : g
  };
}
function kv(e) {
  let { children: t, focusClass: r, focusRingClass: a } = e, { isFocused: i, isFocusVisible: s, focusProps: c } = $s(e), u = C.Children.only(t);
  return /* @__PURE__ */ C.cloneElement(u, $e(u.props, {
    ...c,
    className: qd({
      [r || ""]: i,
      [a || ""]: s
    })
  }));
}
let wd = !1, To = 0;
function P4() {
  wd = !0, setTimeout(() => {
    wd = !1;
  }, 500);
}
function pg(e) {
  e.pointerType === "touch" && P4();
}
function F4() {
  let e = Pe(null);
  if (!(typeof e > "u"))
    return To === 0 && typeof PointerEvent < "u" && e.addEventListener("pointerup", pg), To++, () => {
      To--, !(To > 0) && typeof PointerEvent < "u" && e.removeEventListener("pointerup", pg);
    };
}
function nf(e) {
  let { onHoverStart: t, onHoverChange: r, onHoverEnd: a, isDisabled: i } = e, [s, c] = S.useState(!1), u = S.useRef({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  S.useEffect(F4, []);
  let { addGlobalListener: p, removeAllGlobalListeners: f } = xs(), { hoverProps: v, triggerHoverEnd: g } = S.useMemo(() => {
    let h = (w, k) => {
      if (u.pointerType = k, i || k === "touch" || u.isHovered || !Ne(w.currentTarget, ye(w))) return;
      u.isHovered = !0;
      let T = w.currentTarget;
      u.target = T, p(Pe(ye(w)), "pointerover", (F) => {
        u.isHovered && u.target && !Ne(u.target, ye(F)) && b(F, F.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: T,
        pointerType: k
      }), r && r(!0), c(!0);
    }, b = (w, k) => {
      let T = u.target;
      u.pointerType = "", u.target = null, !(k === "touch" || !u.isHovered || !T) && (u.isHovered = !1, f(), a && a({
        type: "hoverend",
        target: T,
        pointerType: k
      }), r && r(!1), c(!1));
    }, $ = {};
    return typeof PointerEvent < "u" && ($.onPointerEnter = (w) => {
      wd && w.pointerType === "mouse" || h(w, w.pointerType);
    }, $.onPointerLeave = (w) => {
      !i && Ne(w.currentTarget, ye(w)) && b(w, w.pointerType);
    }), {
      hoverProps: $,
      triggerHoverEnd: b
    };
  }, [
    t,
    r,
    a,
    i,
    u,
    p,
    f
  ]);
  return S.useEffect(() => {
    i && g({
      currentTarget: u.target
    }, u.pointerType);
  }, [
    i
  ]), {
    hoverProps: v,
    isHovered: s
  };
}
function T4(e) {
  let { ref: t, onInteractOutside: r, isDisabled: a, onInteractOutsideStart: i } = e, s = S.useRef({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }), c = hr((p) => {
    r && mg(p, t) && (i && i(p), s.current.isPointerDown = !0);
  }), u = hr((p) => {
    r && r(p);
  });
  S.useEffect(() => {
    let p = s.current;
    if (a) return;
    const f = t.current, v = Pe(f);
    if (typeof PointerEvent < "u") {
      let g = (h) => {
        p.isPointerDown && mg(h, t) && u(h), p.isPointerDown = !1;
      };
      return v.addEventListener("pointerdown", c, !0), v.addEventListener("click", g, !0), () => {
        v.removeEventListener("pointerdown", c, !0), v.removeEventListener("click", g, !0);
      };
    }
  }, [
    t,
    a
  ]);
}
function mg(e, t) {
  if (e.button > 0) return !1;
  let r = ye(e);
  if (r) {
    const a = r.ownerDocument;
    if (!a || !Ne(a.documentElement, r) || r.closest("[data-react-aria-top-layer]")) return !1;
  }
  return t.current ? !e.composedPath().includes(t.current) : !1;
}
function R4(e, t) {
  let r = t?.isDisabled, [a, i] = S.useState(!1);
  return Le(() => {
    if (e?.current && !r) {
      let s = () => {
        if (e.current) {
          let u = Sn(e.current, {
            tabbable: !0
          });
          i(!!u.nextNode());
        }
      };
      s();
      let c = new MutationObserver(s);
      return c.observe(e.current, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeFilter: [
          "tabIndex",
          "disabled"
        ]
      }), () => {
        c.disconnect();
      };
    }
  }), r ? !1 : a;
}
function L4(e) {
  let { selectionManager: t, collection: r, disabledKeys: a, ref: i, keyboardDelegate: s, layoutDelegate: c, orientation: u } = e, p = C4({
    usage: "search",
    sensitivity: "base"
  }), f = t.disabledBehavior, v = S.useMemo(() => s || new p4({
    collection: r,
    disabledKeys: a,
    disabledBehavior: f,
    ref: i,
    collator: p,
    layoutDelegate: c,
    orientation: u
  }), [
    s,
    c,
    r,
    a,
    i,
    p,
    f,
    u
  ]), { collectionProps: g } = Sv({
    ...e,
    ref: i,
    selectionManager: t,
    keyboardDelegate: v
  });
  return {
    listProps: g
  };
}
function _v(e) {
  let { id: t, selectionManager: r, key: a, ref: i, shouldSelectOnPressUp: s, shouldUseVirtualFocus: c, focus: u, isDisabled: p, onAction: f, allowsDifferentPressOrigin: v, linkBehavior: g = "action" } = e, h = oa();
  t = br(t);
  let b = (q) => {
    if (q.pointerType === "keyboard" && bd(q)) r.toggleSelection(a);
    else {
      if (r.selectionMode === "none") return;
      if (r.isLink(a)) {
        if (g === "selection" && i.current) {
          let ce = r.getItemProps(a);
          h.open(i.current, q, ce.href, ce.routerOptions), r.setSelectedKeys(r.selectedKeys);
          return;
        } else if (g === "override" || g === "none") return;
      }
      r.selectionMode === "single" ? r.isSelected(a) && !r.disallowEmptySelection ? r.toggleSelection(a) : r.replaceSelection(a) : q && q.shiftKey ? r.extendSelection(a) : r.selectionBehavior === "toggle" || q && (Li(q) || q.pointerType === "touch" || q.pointerType === "virtual") ? r.toggleSelection(a) : r.replaceSelection(a);
    }
  };
  S.useEffect(() => {
    a === r.focusedKey && r.isFocused && (c ? uv(i.current) : u ? u() : Oe() !== i.current && i.current && yr(i.current));
  }, [
    i,
    a,
    r.focusedKey,
    r.childFocusStrategy,
    r.isFocused,
    c
  ]), p = p || r.isDisabled(a);
  let $ = {};
  !c && !p ? $ = {
    tabIndex: a === r.focusedKey ? 0 : -1,
    onFocus(q) {
      ye(q) === i.current && r.setFocusedKey(a);
    }
  } : p && ($.onMouseDown = (q) => {
    q.preventDefault();
  }), S.useEffect(() => {
    p && r.focusedKey === a && r.setFocusedKey(null);
  }, [
    r,
    p,
    a
  ]);
  let w = r.isLink(a) && g === "override", k = f && e.UNSTABLE_itemBehavior === "action", T = r.isLink(a) && g !== "selection" && g !== "none", F = !p && r.canSelectItem(a) && !w && !k, H = (f || T) && !p, K = H && (r.selectionBehavior === "replace" ? !F : !F || r.isEmpty), Y = H && F && r.selectionBehavior === "replace", re = K || Y, Q = S.useRef(null), X = re && F, ie = S.useRef(!1), ae = S.useRef(!1), ne = r.getItemProps(a), A = (q) => {
    f && (f(), i.current?.dispatchEvent(new CustomEvent("react-aria-item-action", {
      bubbles: !0
    }))), T && i.current && h.open(i.current, q, ne.href, ne.routerOptions);
  }, B = {
    ref: i
  };
  s ? (B.onPressStart = (q) => {
    Q.current = q.pointerType, ie.current = X, q.pointerType === "keyboard" && (!re || gg(q.key)) && b(q);
  }, v ? (B.onPressUp = K ? void 0 : (q) => {
    q.pointerType === "mouse" && F && b(q);
  }, B.onPress = K ? A : (q) => {
    q.pointerType !== "keyboard" && q.pointerType !== "mouse" && F && b(q);
  }) : B.onPress = (q) => {
    if (K || Y && q.pointerType !== "mouse") {
      if (q.pointerType === "keyboard" && !hg(q.key)) return;
      A(q);
    } else q.pointerType !== "keyboard" && F && b(q);
  }) : (B.onPressStart = (q) => {
    Q.current = q.pointerType, ie.current = X, ae.current = K, F && (q.pointerType === "mouse" && !K || q.pointerType === "keyboard" && (!H || gg(q.key))) && b(q);
  }, B.onPress = (q) => {
    (q.pointerType === "touch" || q.pointerType === "pen" || q.pointerType === "virtual" || q.pointerType === "keyboard" && re && hg(q.key) || q.pointerType === "mouse" && ae.current) && (re ? A(q) : F && b(q));
  });
  let _ = f4(r.collection);
  if ($["data-collection"] = _, $["data-key"] = a, B.preventFocusOnPress = c, c && (B = $e(B, {
    onPressStart(q) {
      q.pointerType !== "touch" && (r.setFocused(!0), r.setFocusedKey(a));
    },
    onPress(q) {
      q.pointerType === "touch" && (r.setFocused(!0), r.setFocusedKey(a));
    }
  })), ne)
    for (let q of [
      "onPressStart",
      "onPressEnd",
      "onPressChange",
      "onPress",
      "onPressUp",
      "onClick"
    ]) ne[q] && (B[q] = Br(B[q], ne[q]));
  let { pressProps: D, isPressed: I } = Qr(B), M = Y ? (q) => {
    Q.current === "mouse" && (q.stopPropagation(), q.preventDefault(), A(q));
  } : void 0, { longPressProps: z } = h4({
    isDisabled: !X,
    onLongPress(q) {
      q.pointerType === "touch" && (b(q), r.setSelectionBehavior("toggle"));
    }
  }), L = (q) => {
    Q.current === "touch" && ie.current && q.preventDefault();
  }, W = g !== "none" && r.isLink(a) ? (q) => {
    On.isOpening || q.preventDefault();
  } : void 0, N = $e(
    // oxlint-disable-next-line react/react-compiler
    $,
    F || K || c && !p ? D : {},
    X ? z : {},
    // oxlint-disable-next-line react/react-compiler
    {
      onDoubleClick: M,
      onDragStartCapture: L,
      onClick: W,
      id: t
    },
    // Prevent DOM focus from moving on mouse down when using virtual focus
    c ? {
      onMouseDown: (q) => q.preventDefault()
    } : void 0
  ), G = (q) => {
    let ce = q;
    for (; ce && ce !== i.current; ) {
      let ve = ce.getAttribute("data-collection");
      if (ve != null) return ve !== _;
      ce = ce.parentElement;
    }
    return Bd(q);
  }, me = N.onPointerDown;
  N.onPointerDown = (q) => {
    let ce = ye(q);
    if (ce && ce !== i.current && G(ce)) {
      q.stopPropagation();
      return;
    }
    me?.(q);
  };
  let ue = N.onMouseDown;
  return N.onMouseDown = (q) => {
    let ce = ye(q);
    if (ce && ce !== i.current && G(ce)) {
      q.stopPropagation();
      return;
    }
    ue?.(q);
  }, {
    itemProps: N,
    isPressed: I,
    isSelected: r.isSelected(a),
    isFocused: r.isFocused && r.focusedKey === a,
    isDisabled: p,
    allowsSelection: F,
    hasAction: re
  };
}
function hg(e) {
  return e === "Enter";
}
function gg(e) {
  return e === " ";
}
const Nv = /* @__PURE__ */ new WeakMap();
function I4(e, t, r) {
  let { shouldFocusWrap: a = !0, onKeyDown: i, onKeyUp: s, ...c } = e;
  !e["aria-label"] && e["aria-labelledby"];
  let u = gt(e, {
    labelable: !0
  }), { listProps: p } = L4({
    ...c,
    ref: r,
    selectionManager: t.selectionManager,
    collection: t.collection,
    disabledKeys: t.disabledKeys,
    shouldFocusWrap: a,
    linkBehavior: "override"
  });
  return Nv.set(t, {
    onClose: e.onClose,
    onAction: e.onAction,
    shouldUseVirtualFocus: e.shouldUseVirtualFocus
  }), {
    menuProps: $e(u, {
      onKeyDown: i,
      onKeyUp: s
    }, {
      role: "menu",
      ...p,
      onKeyDown: (f) => {
        (f.key !== "Escape" || e.shouldUseVirtualFocus) && p.onKeyDown?.(f);
      }
    })
  };
}
function M4(e, t, r) {
  let { id: a, key: i, closeOnSelect: s, shouldCloseOnSelect: c, isVirtualized: u, "aria-haspopup": p, onPressStart: f, onPressUp: v, onPress: g, onPressChange: h, onPressEnd: b, onClick: $, onHoverStart: w, onHoverChange: k, onHoverEnd: T, onKeyDown: F, onKeyUp: H, onFocus: K, onFocusChange: Y, onBlur: re, selectionManager: Q = t.selectionManager } = e, X = !!p, ie = X && e["aria-expanded"] === "true", ae = e.isDisabled ?? Q.isDisabled(i), ne = e.isSelected ?? Q.isSelected(i), A = Nv.get(t), B = t.collection.getItem(i), _ = e.onClose || A.onClose, D = oa(), I = () => {
    if (!X && (B?.props?.onAction ? B.props.onAction() : e.onAction && e.onAction(i), A.onAction)) {
      let ze = A.onAction;
      ze(i, B?.value);
    }
  }, M = "menuitem";
  X || (Q.selectionMode === "single" ? M = "menuitemradio" : Q.selectionMode === "multiple" && (M = "menuitemcheckbox"));
  let z = Ki(), L = Ki(), W = Ki(), N = {
    id: a,
    "aria-disabled": ae || void 0,
    role: M,
    "aria-label": e["aria-label"],
    "aria-labelledby": z,
    "aria-describedby": [
      e["aria-describedby"],
      L,
      W
    ].filter(Boolean).join(" ") || void 0,
    "aria-controls": e["aria-controls"],
    "aria-haspopup": p,
    "aria-expanded": e["aria-expanded"]
  };
  if (Q.selectionMode !== "none" && !X && (N["aria-checked"] = ne), u) {
    let ze = Number(B?.index);
    N["aria-posinset"] = Number.isNaN(ze) ? void 0 : ze + 1, N["aria-setsize"] = S4(t.collection);
  }
  let G = S.useRef(!1), me = (ze) => {
    h?.(ze), G.current = ze;
  }, ue = S.useRef(null), q = (ze) => {
    ze.pointerType !== "keyboard" && (ue.current = {
      pointerType: ze.pointerType
    }), ze.pointerType === "mouse" && (G.current || ze.target.click()), v?.(ze);
  }, ce = (ze) => {
    $?.(ze), I(), G1(ze, D, B.props.href, B?.props.routerOptions);
    let Bt = ue.current?.pointerType === "keyboard" ? ue.current?.key === "Enter" || Q.selectionMode === "none" || Q.isLink(i) : Q.selectionMode !== "multiple" || Q.isLink(i);
    Bt = c ?? s ?? Bt, _ && !X && Bt && _(), ue.current = null;
  }, { itemProps: ve, isFocused: Se } = _v({
    id: a,
    selectionManager: Q,
    key: i,
    ref: r,
    shouldSelectOnPressUp: !0,
    allowsDifferentPressOrigin: !0,
    // Disable all handling of links in useSelectable item
    // because we handle it ourselves. The behavior of menus
    // is slightly different from other collections because
    // actions are performed on key down rather than key up.
    linkBehavior: "none",
    shouldUseVirtualFocus: A.shouldUseVirtualFocus
  }), { pressProps: Ae, isPressed: ut } = Qr({
    onPressStart: f,
    onPress: g,
    onPressUp: q,
    onPressChange: me,
    onPressEnd: b,
    isDisabled: ae
  }), { hoverProps: oe } = nf({
    isDisabled: ae,
    onHoverStart(ze) {
      !Gi() && !(ie && p) && (Q.setFocused(!0), Q.setFocusedKey(i)), w?.(ze);
    },
    onHoverChange: k,
    onHoverEnd: T
  }), { keyboardProps: se } = Il({
    shortcuts: {
      " ": (ze) => {
        ue.current = {
          pointerType: "keyboard",
          key: " "
        }, ye(ze).click(), Ko("keyboard");
      },
      Enter: (ze) => {
        ue.current = {
          pointerType: "keyboard",
          key: "Enter"
        };
        let Bt = ye(ze);
        if (Bt.tagName !== "A") {
          Bt.click(), Ko("keyboard");
          return;
        }
        return Ko("keyboard"), {
          shouldPreventDefault: !1,
          shouldContinuePropagation: !1
        };
      }
    },
    onKeyDown: F,
    onKeyUp: H
  }), { focusableProps: Ye } = ys({
    onBlur: re,
    onFocus: K,
    onFocusChange: Y
  }, r), De = gt(B?.props);
  delete De.id;
  let Kt = Gd(B?.props);
  return {
    menuItemProps: {
      ...N,
      ...$e(
        De,
        Kt,
        X ? {
          onFocus: ve.onFocus,
          "data-collection": ve["data-collection"],
          "data-key": ve["data-key"]
        } : ve,
        Ae,
        oe,
        se,
        Ye,
        // Prevent DOM focus from moving on mouse down when using virtual focus or this is a submenu/subdialog trigger.
        A.shouldUseVirtualFocus || X ? {
          onMouseDown: (ze) => ze.preventDefault()
        } : void 0,
        // oxlint-disable-next-line react/react-compiler
        ae ? void 0 : {
          onClick: ce
        }
      ),
      // If a submenu is expanded, set the tabIndex to -1 so that shift tabbing goes out of the menu instead of the parent menu item.
      tabIndex: ve.tabIndex != null && ie && !A.shouldUseVirtualFocus ? -1 : ve.tabIndex
    },
    labelProps: {
      id: z
    },
    descriptionProps: {
      id: L
    },
    keyboardShortcutProps: {
      id: W
    },
    isFocused: Se,
    isFocusVisible: Se && Q.isFocused && Gi() && !ie,
    isSelected: ne,
    isPressed: ut,
    isDisabled: ae
  };
}
function A4(e) {
  let { heading: t, "aria-label": r } = e, a = br();
  return {
    itemProps: {
      role: "presentation"
    },
    headingProps: t ? {
      // Techincally, menus cannot contain headings according to ARIA.
      // We hide the heading from assistive technology, using role="presentation",
      // and only use it as a label for the nested group.
      id: a,
      role: "presentation"
    } : {},
    groupProps: {
      role: "group",
      "aria-label": r,
      "aria-labelledby": t ? a : void 0
    }
  };
}
function j4() {
  return typeof window.ResizeObserver < "u";
}
function Sd(e) {
  const { ref: t, box: r, onResize: a } = e;
  let i = hr(a);
  S.useEffect(() => {
    let s = t?.current;
    if (s)
      if (j4()) {
        const c = new window.ResizeObserver((u) => {
          u.length && i();
        });
        return c.observe(s, {
          box: r
        }), () => {
          s && c.unobserve(s);
        };
      } else
        return window.addEventListener("resize", i, !1), () => {
          window.removeEventListener("resize", i, !1);
        };
  }, [
    t,
    r
  ]);
}
var Pv = {};
Pv = {
  dismiss: "تجاهل"
};
var Fv = {};
Fv = {
  dismiss: "Отхвърляне"
};
var Tv = {};
Tv = {
  dismiss: "Odstranit"
};
var Rv = {};
Rv = {
  dismiss: "Luk"
};
var Lv = {};
Lv = {
  dismiss: "Schließen"
};
var Iv = {};
Iv = {
  dismiss: "Απόρριψη"
};
var Mv = {};
Mv = {
  dismiss: "Dismiss"
};
var Av = {};
Av = {
  dismiss: "Descartar"
};
var jv = {};
jv = {
  dismiss: "Lõpeta"
};
var zv = {};
zv = {
  dismiss: "Hylkää"
};
var Kv = {};
Kv = {
  dismiss: "Rejeter"
};
var Dv = {};
Dv = {
  dismiss: "התעלם"
};
var Ov = {};
Ov = {
  dismiss: "Odbaci"
};
var Vv = {};
Vv = {
  dismiss: "Elutasítás"
};
var Hv = {};
Hv = {
  dismiss: "Ignora"
};
var Bv = {};
Bv = {
  dismiss: "閉じる"
};
var Uv = {};
Uv = {
  dismiss: "무시"
};
var Wv = {};
Wv = {
  dismiss: "Atmesti"
};
var Gv = {};
Gv = {
  dismiss: "Nerādīt"
};
var qv = {};
qv = {
  dismiss: "Lukk"
};
var Zv = {};
Zv = {
  dismiss: "Negeren"
};
var Qv = {};
Qv = {
  dismiss: "Zignoruj"
};
var Xv = {};
Xv = {
  dismiss: "Descartar"
};
var Yv = {};
Yv = {
  dismiss: "Dispensar"
};
var Jv = {};
Jv = {
  dismiss: "Revocare"
};
var ey = {};
ey = {
  dismiss: "Пропустить"
};
var ty = {};
ty = {
  dismiss: "Zrušiť"
};
var ny = {};
ny = {
  dismiss: "Opusti"
};
var ry = {};
ry = {
  dismiss: "Odbaci"
};
var ly = {};
ly = {
  dismiss: "Avvisa"
};
var iy = {};
iy = {
  dismiss: "Kapat"
};
var ay = {};
ay = {
  dismiss: "Скасувати"
};
var oy = {};
oy = {
  dismiss: "取消"
};
var sy = {};
sy = {
  dismiss: "關閉"
};
var uy = {};
uy = {
  "ar-AE": Pv,
  "bg-BG": Fv,
  "cs-CZ": Tv,
  "da-DK": Rv,
  "de-DE": Lv,
  "el-GR": Iv,
  "en-US": Mv,
  "es-ES": Av,
  "et-EE": jv,
  "fi-FI": zv,
  "fr-FR": Kv,
  "he-IL": Dv,
  "hr-HR": Ov,
  "hu-HU": Vv,
  "it-IT": Hv,
  "ja-JP": Bv,
  "ko-KR": Uv,
  "lt-LT": Wv,
  "lv-LV": Gv,
  "nb-NO": qv,
  "nl-NL": Zv,
  "pl-PL": Qv,
  "pt-BR": Xv,
  "pt-PT": Yv,
  "ro-RO": Jv,
  "ru-RU": ey,
  "sk-SK": ty,
  "sl-SI": ny,
  "sr-SP": ry,
  "sv-SE": ly,
  "tr-TR": iy,
  "uk-UA": ay,
  "zh-CN": oy,
  "zh-TW": sy
};
function z4(e) {
  return e && e.__esModule ? e.default : e;
}
function Cd(e) {
  let { onDismiss: t, ...r } = e, a = jw(z4(uy), "@react-aria/overlays"), i = Xd(r, a.format("dismiss")), s = () => {
    t && t();
  };
  return /* @__PURE__ */ C.createElement(s4, null, /* @__PURE__ */ C.createElement("button", {
    ...i,
    tabIndex: -1,
    onClick: s,
    style: {
      width: 1,
      height: 1
    }
  }));
}
const bn = [];
function cy(e, t) {
  let { onClose: r, shouldCloseOnBlur: a, isOpen: i, isDismissable: s = !1, isKeyboardDismissDisabled: c = !1, shouldCloseOnInteractOutside: u } = e, p = S.useRef(void 0);
  S.useEffect(() => {
    if (i && !bn.includes(t))
      return bn.push(t), () => {
        let $ = bn.indexOf(t);
        $ >= 0 && bn.splice($, 1);
      };
  }, [
    i,
    t
  ]);
  let f = () => {
    bn[bn.length - 1] === t && r && r();
  }, v = ($) => {
    const w = bn[bn.length - 1];
    p.current = w, (!u || u(ye($))) && w === t && $.stopPropagation();
  }, g = ($) => {
    (!u || u(ye($))) && (bn[bn.length - 1] === t && $.stopPropagation(), p.current === t && f()), p.current = void 0;
  }, { keyboardProps: h } = Il({
    shortcuts: {
      Escape: () => {
        if (!c) {
          f();
          return;
        }
        return !1;
      }
    }
  });
  T4({
    ref: t,
    onInteractOutside: s && i ? g : void 0,
    onInteractOutsideStart: v
  });
  let { focusWithinProps: b } = Ss({
    isDisabled: !a,
    onBlurWithin: ($) => {
      !$.relatedTarget || Jw($.relatedTarget) || (!u || u($.relatedTarget)) && r?.();
    }
  });
  return {
    overlayProps: {
      ...h,
      ...b
    },
    underlayProps: {}
  };
}
const Oi = typeof document < "u" && window.visualViewport;
let Ro = 0, Hc;
function dy(e = {}) {
  let { isDisabled: t } = e;
  Le(() => {
    if (!t)
      return Ro++, Ro === 1 && (vr() && Dn() ? Hc = D4() : Hc = K4()), () => {
        Ro--, Ro === 0 && Hc();
      };
  }, [
    t
  ]);
}
function K4() {
  let e = window.innerWidth - document.documentElement.clientWidth;
  return Br(e > 0 && // Use scrollbar-gutter when supported because it also works for fixed positioned elements.
  ("scrollbarGutter" in document.documentElement.style ? jo(document.documentElement, "scrollbar-gutter", "stable") : jo(document.documentElement, "padding-right", `${e}px`)), jo(document.documentElement, "overflow", "hidden"));
}
function D4() {
  let e = jo(document.documentElement, "overflow", "hidden"), t, r = !1, a = (v) => {
    let g = ye(v);
    t = Ur(g) ? g : tf(g, !0), r = !1;
    let h = g.ownerDocument.defaultView.getSelection();
    h && !h.isCollapsed && h.containsNode(g, !0) && (r = !0), v.composedPath().some((b) => b instanceof HTMLInputElement && b.type === "range") && (r = !0), "selectionStart" in g && "selectionEnd" in g && g.selectionStart < g.selectionEnd && g.ownerDocument.activeElement === g && (r = !0);
  }, i = document.createElement("style"), s = pv();
  s && (i.nonce = s), i.textContent = `
@layer {
  * {
    overscroll-behavior: contain;
  }
}`.trim(), document.head.prepend(i);
  let c = (v) => {
    if (!(v.touches.length === 2 || r)) {
      if (!t || t === document.documentElement || t === document.body) {
        v.preventDefault();
        return;
      }
      t.scrollHeight === t.clientHeight && t.scrollWidth === t.clientWidth && v.preventDefault();
    }
  }, u = (v) => {
    let g = ye(v), h = v.relatedTarget;
    h && Di(h) ? (h.focus({
      preventScroll: !0
    }), vg(h, Di(g))) : h || g.parentElement?.closest("[tabindex]")?.focus({
      preventScroll: !0
    });
  }, p = HTMLElement.prototype.focus;
  Reflect.defineProperty(HTMLElement.prototype, "focus", {
    configurable: !0,
    writable: !0,
    value: function(v) {
      let g = Oe(), h = g != null && Di(g);
      p.call(this, {
        ...v,
        preventScroll: !0
      }), (!v || !v.preventScroll) && vg(this, h);
    }
  });
  let f = Br(Fl(document, "touchstart", a, {
    passive: !1,
    capture: !0
  }), Fl(document, "touchmove", c, {
    passive: !1,
    capture: !0
  }), Fl(document, "blur", u, !0));
  return () => {
    e(), f(), i.remove(), Reflect.defineProperty(HTMLElement.prototype, "focus", {
      configurable: !0,
      writable: !0,
      value: p
    });
  };
}
function vg(e, t) {
  t || !Oi ? yg(e) : Oi.addEventListener("resize", () => yg(e), {
    once: !0
  });
}
function yg(e) {
  let t = document.scrollingElement || document.documentElement, r = e;
  for (; r && r !== t; ) {
    let a = tf(r);
    if (a !== document.documentElement && a !== document.body && a !== r) {
      let i = a.getBoundingClientRect(), s = r.getBoundingClientRect();
      if (s.top < i.top || s.bottom > i.top + r.clientHeight) {
        let c = i.bottom;
        Oi && (c = Math.min(c, Oi.offsetTop + Oi.height));
        let u = s.top - i.top - ((c - i.top) / 2 - s.height / 2);
        a.scrollTo({
          // Clamp to the valid range to prevent over-scrolling.
          top: Math.max(0, Math.min(a.scrollHeight - a.clientHeight, a.scrollTop + u)),
          behavior: "smooth"
        });
      }
    }
    r = a.parentElement;
  }
}
function O4(e, t, r) {
  let { overlayProps: a, underlayProps: i } = cy({
    ...e,
    isOpen: t.isOpen,
    onClose: t.close
  }, r);
  return dy({
    isDisabled: !t.isOpen
  }), Ev(), S.useEffect(() => {
    if (t.isOpen && r.current) return bv([
      r.current
    ], {
      shouldUseInert: !0
    });
  }, [
    t.isOpen,
    r
  ]), {
    modalProps: $e(a),
    underlayProps: i
  };
}
const Xt = {
  top: "top",
  bottom: "top",
  left: "left",
  right: "left"
}, ns = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, V4 = {
  top: "left",
  left: "top"
}, $d = {
  top: "height",
  left: "width"
}, fy = {
  width: "totalWidth",
  height: "totalHeight"
}, Lo = {};
let H4 = () => typeof document < "u" ? window.visualViewport : null;
function bg(e, t) {
  let r = 0, a = 0, i = 0, s = 0, c = 0, u = 0, p = {}, f = (t?.scale ?? 1) > 1;
  if (e.tagName === "BODY" || e.tagName === "HTML") {
    let v = document.documentElement;
    i = v.clientWidth, s = v.clientHeight, r = t?.width ?? i, a = t?.height ?? s, p.top = v.scrollTop || e.scrollTop, p.left = v.scrollLeft || e.scrollLeft, t && (c = Math.max(0, t.pageTop - (p.top ?? 0)), u = Math.max(0, t.pageLeft - (p.left ?? 0)));
  } else
    ({ width: r, height: a, top: c, left: u } = Xi(e, !1)), p.top = e.scrollTop, p.left = e.scrollLeft, i = r, s = a;
  return Dn() && (e.tagName === "BODY" || e.tagName === "HTML") && f && (p.top = 0, p.left = 0, c = t?.pageTop ?? 0, u = t?.pageLeft ?? 0), {
    width: r,
    height: a,
    totalWidth: i,
    totalHeight: s,
    scroll: p,
    top: c,
    left: u
  };
}
function B4(e) {
  return {
    top: e.scrollTop,
    left: e.scrollLeft,
    width: e.scrollWidth,
    height: e.scrollHeight
  };
}
function xg(e, t, r, a, i, s, c) {
  let u = i.scroll[e] ?? 0, p = a[$d[e]], f = c[e] + a.scroll[Xt[e]] + s, v = c[e] + a.scroll[Xt[e]] + p - s, g = t - u + a.scroll[Xt[e]] + c[e] - a[Xt[e]], h = t - u + r + a.scroll[Xt[e]] + c[e] - a[Xt[e]];
  return g < f ? f - g : h > v ? Math.max(v - h, f - g) : 0;
}
function U4(e) {
  let t = window.getComputedStyle(e);
  return {
    top: parseInt(t.marginTop, 10) || 0,
    bottom: parseInt(t.marginBottom, 10) || 0,
    left: parseInt(t.marginLeft, 10) || 0,
    right: parseInt(t.marginRight, 10) || 0
  };
}
function wg(e) {
  if (Lo[e]) return Lo[e];
  let [t, r] = e.split(" "), a = Xt[t] || "right", i = V4[a];
  Xt[r] || (r = "center");
  let s = $d[a], c = $d[i];
  return Lo[e] = {
    placement: t,
    crossPlacement: r,
    axis: a,
    crossAxis: i,
    size: s,
    crossSize: c
  }, Lo[e];
}
function Bc(e, t, r, a, i, s, c, u, p, f, v) {
  let { placement: g, crossPlacement: h, axis: b, crossAxis: $, size: w, crossSize: k } = a, T = {};
  T[$] = e[$] ?? 0, h === "center" ? T[$] += ((e[k] ?? 0) - (r[k] ?? 0)) / 2 : h !== $ && (T[$] += (e[k] ?? 0) - (r[k] ?? 0)), T[$] += s;
  const F = e[$] - r[k] + p + f, H = e[$] + e[k] - p - f;
  if (T[$] = yd(T[$], F, H), g === b) {
    let K = u ? v[w] : v[fy[w]];
    T[ns[b]] = Math.floor(K - e[b] + i);
  } else T[b] = Math.floor(e[b] + e[w] + i);
  return T;
}
function W4(e, t, r, a, i, s, c, u, p, f, v) {
  let g = (e.top != null ? e.top : p[fy.height] - (e.bottom ?? 0) - c) - (p.scroll.top ?? 0), h = f ? r.top : 0, b = {
    // This should be boundary top in container coord system vs viewport top in container coord system
    // For the viewport top, there are several cases
    // 1. pinchzoom case where we want the viewports offset top as top here
    // 2. case where container is offset from the boundary and is contained by the boundary. In this case the top we want here is NOT 0, we want to take boundary's top even though is is a negative number OR the visual viewport, whichever is more restrictive
    top: Math.max(t.top + h, (v?.offsetTop ?? t.top) + h),
    bottom: Math.min(t.top + t.height + h, (v?.offsetTop ?? 0) + (v?.height ?? 0))
  };
  return u !== "top" ? Math.max(0, b.bottom - // this is the bottom of the boundary
  g - // this is the top of the overlay
  ((i.top ?? 0) + (i.bottom ?? 0) + s)) : Math.max(0, g + c - // this is the bottom of the overlay
  b.top - // this is the top of the boundary
  ((i.top ?? 0) + (i.bottom ?? 0) + s));
}
function Sg(e, t, r, a, i, s, c, u) {
  let { placement: p, axis: f, size: v } = s;
  return p === f ? Math.max(0, r[f] - // trigger start
  (c.scroll[f] ?? 0) - // transform trigger position to be with respect to viewport 0,0
  (e[f] + (u ? t[f] : 0)) - // boundary start
  (a[f] ?? 0) - // margins usually for arrows or other decorations
  a[ns[f]] - i) : Math.max(0, e[v] + e[f] + (u ? t[f] : 0) - r[f] - r[v] + (c.scroll[f] ?? 0) - (a[f] ?? 0) - a[ns[f]] - i);
}
function G4(e, t, r, a, i, s, c, u, p, f, v, g, h, b, $, w, k, T) {
  let F = wg(e), { size: H, crossAxis: K, crossSize: Y, placement: re, crossPlacement: Q } = F, X = Bc(t, u, r, F, v, g, f, h, $, w, p), ie = v, ae = Sg(u, f, t, i, s + v, F, p, k);
  if (c && r[H] > ae) {
    let q = wg(`${ns[re]} ${Q}`), ce = Bc(t, u, r, q, v, g, f, h, $, w, p);
    Sg(u, f, t, i, s + v, q, p, k) > ae && (F = q, X = ce, ie = v);
  }
  let ne = "bottom";
  F.axis === "top" ? F.placement === "top" ? ne = "top" : F.placement === "bottom" && (ne = "bottom") : F.crossAxis === "top" && (F.crossPlacement === "top" ? ne = "bottom" : F.crossPlacement === "bottom" && (ne = "top"));
  let A = xg(K, X[K], r[Y], u, p, s, f);
  X[K] += A;
  let B = W4(X, u, f, h, i, s, r.height, ne, p, k, T);
  b && b < B && (B = b), r.height = Math.min(r.height, B), X = Bc(t, u, r, F, ie, g, f, h, $, w, p), A = xg(K, X[K], r[Y], u, p, s, f), X[K] += A;
  let _ = {}, D = t[K] - X[K] - i[Xt[K]], I = D + 0.5 * t[Y];
  const M = $ / 2 + w, z = Xt[K] === "left" ? (i.left ?? 0) + (i.right ?? 0) : (i.top ?? 0) + (i.bottom ?? 0), L = r[Y] - z - $ / 2 - w, W = t[K] + $ / 2 - (X[K] + i[Xt[K]]), N = t[K] + t[Y] - $ / 2 - (X[K] + i[Xt[K]]), G = yd(I, W, N);
  _[K] = yd(G, M, L), { placement: re, crossPlacement: Q } = F, $ ? D = _[K] : Q === "right" ? D += t[Y] : Q === "center" && (D += t[Y] / 2);
  let me = re === "left" || re === "top" ? r[H] : 0, ue = {
    x: re === "top" || re === "bottom" ? D : me,
    y: re === "left" || re === "right" ? D : me
  };
  return {
    position: X,
    maxHeight: B,
    arrowOffsetLeft: _.left,
    arrowOffsetTop: _.top,
    placement: re,
    triggerAnchorPoint: ue
  };
}
function q4(e) {
  let { placement: t, targetNode: r, overlayNode: a, scrollNode: i, padding: s, shouldFlip: c, boundaryElement: u, offset: p, crossOffset: f, maxHeight: v, arrowSize: g = 0, arrowBoundaryOffset: h = 0, targetRect: b } = e, $ = H4(), w = a instanceof HTMLElement ? Z4(a) : document.documentElement, k = w === document.documentElement;
  const T = window.getComputedStyle(w).position;
  let F = !!T && T !== "static", H = k ? Xi(r, !1, b) : Cg(r, w, !1, b);
  if (!k) {
    let { marginTop: ne, marginLeft: A } = window.getComputedStyle(r);
    H.top += parseInt(ne, 10) || 0, H.left += parseInt(A, 10) || 0;
  }
  let K = Xi(a, !0), Y = U4(a);
  K.width += (Y.left ?? 0) + (Y.right ?? 0), K.height += (Y.top ?? 0) + (Y.bottom ?? 0);
  let re = B4(i), Q = bg(u, $), X = bg(w, $), ie;
  if ((u.tagName === "BODY" || u.tagName === "HTML") && !k) {
    let ne = Es(w, !1);
    ie = {
      top: -(ne.top - Q.top),
      left: -(ne.left - Q.left),
      width: 0,
      height: 0
    };
  } else (u.tagName === "BODY" || u.tagName === "HTML") && k ? ie = {
    top: 0,
    left: 0,
    width: 0,
    height: 0
  } : ie = Cg(u, w, !1);
  let ae = Ne(u, w);
  return G4(t, H, K, re, Y, s, c, Q, X, ie, p, f, F, v, g, h, ae, $);
}
function Es(e, t) {
  let { top: r, left: a, width: i, height: s } = e.getBoundingClientRect();
  return t && e instanceof e.ownerDocument.defaultView.HTMLElement && (i = e.offsetWidth, s = e.offsetHeight), {
    top: r,
    left: a,
    width: i,
    height: s
  };
}
function Xi(e, t, r) {
  let { top: a, left: i, width: s, height: c } = r || Es(e, t), { scrollTop: u, scrollLeft: p, clientTop: f, clientLeft: v } = document.documentElement;
  return {
    top: a + u - f,
    left: i + p - v,
    width: s,
    height: c
  };
}
function Cg(e, t, r, a) {
  let i = window.getComputedStyle(e), s;
  if (i.position === "fixed") s = a || Es(e, r);
  else {
    s = Xi(e, r, a);
    let c = Xi(t, r), u = window.getComputedStyle(t);
    c.top += (parseInt(u.borderTopWidth, 10) || 0) - t.scrollTop, c.left += (parseInt(u.borderLeftWidth, 10) || 0) - t.scrollLeft, s.top -= c.top, s.left -= c.left;
  }
  return s.top -= parseInt(i.marginTop, 10) || 0, s.left -= parseInt(i.marginLeft, 10) || 0, s;
}
function Z4(e) {
  let t = e.offsetParent;
  if (t && t === document.body && window.getComputedStyle(t).position === "static" && !$g(t) && (t = document.documentElement), t == null)
    for (t = e.parentElement; t && !$g(t); ) t = t.parentElement;
  return t || document.documentElement;
}
function $g(e) {
  let t = window.getComputedStyle(e);
  return t.transform !== "none" || /transform|perspective/.test(t.willChange) || t.filter !== "none" || t.contain === "paint" || "backdropFilter" in t && t.backdropFilter !== "none" || "WebkitBackdropFilter" in t && t.WebkitBackdropFilter !== "none";
}
let zr = typeof document < "u" ? window.visualViewport : null;
function Q4(e) {
  let { direction: t } = Kl(), { arrowSize: r, targetRef: a, overlayRef: i, arrowRef: s, scrollRef: c = i, placement: u = "bottom", containerPadding: p = 12, shouldFlip: f = !0, boundaryElement: v = typeof document < "u" ? document.body : null, offset: g = 0, crossOffset: h = 0, shouldUpdatePosition: b = !0, isOpen: $ = !0, onClose: w, maxHeight: k, arrowBoundaryOffset: T = 0, getTargetRect: F } = e, [H, K] = S.useState(null), Y = [
    b,
    u,
    // oxlint-disable-next-line react/react-compiler
    i.current,
    // oxlint-disable-next-line react/react-compiler
    a.current,
    // oxlint-disable-next-line react/react-compiler
    s?.current,
    // oxlint-disable-next-line react/react-compiler
    c.current,
    p,
    f,
    v,
    g,
    h,
    $,
    t,
    k,
    T,
    r
  ], re = S.useRef(zr?.scale);
  S.useEffect(() => {
    $ && (re.current = zr?.scale);
  }, [
    $
  ]);
  let Q = S.useCallback(() => {
    if (b === !1 || !$ || !i.current || !a.current || !v || zr?.scale !== re.current) return;
    let ae = null;
    if (c.current && Wi(c.current)) {
      let _ = Oe()?.getBoundingClientRect(), D = c.current.getBoundingClientRect();
      ae = {
        type: "top",
        offset: (_?.top ?? 0) - D.top
      }, ae.offset > D.height / 2 && (ae.type = "bottom", ae.offset = (_?.bottom ?? 0) - D.bottom);
    }
    let ne = i.current;
    !k && i.current && (ne.style.top = "0px", ne.style.bottom = "", ne.style.maxHeight = (window.visualViewport?.height ?? window.innerHeight) + "px");
    let A = q4({
      placement: Y4(u, t),
      overlayNode: i.current,
      targetNode: a.current,
      scrollNode: c.current || i.current,
      padding: p,
      shouldFlip: f,
      boundaryElement: v,
      offset: g,
      crossOffset: h,
      maxHeight: k,
      arrowSize: r ?? (s?.current ? Es(s.current, !0).width : 0),
      arrowBoundaryOffset: T,
      targetRect: F?.(a.current)
    });
    if (!A.position) return;
    ne.style.top = "", ne.style.bottom = "", ne.style.left = "", ne.style.right = "", Object.keys(A.position).forEach((_) => ne.style[_] = A.position[_] + "px"), ne.style.maxHeight = A.maxHeight != null ? A.maxHeight + "px" : "";
    let B = Oe();
    if (ae && B && c.current) {
      let _ = B.getBoundingClientRect(), D = c.current.getBoundingClientRect(), I = _[ae.type] - D[ae.type];
      c.current.scrollTop += I - ae.offset;
    }
    K(A);
  }, Y);
  Le(Q, Y), X4(Q), Sd({
    ref: i,
    onResize: Q
  }), Sd({
    ref: a,
    onResize: Q
  });
  let X = S.useRef(!1);
  Le(() => {
    let ae, ne = () => {
      X.current = !0, clearTimeout(ae), ae = setTimeout(() => {
        X.current = !1;
      }, 500), Q();
    }, A = () => {
      X.current && ne();
    };
    zr?.addEventListener("resize", ne), zr?.addEventListener("scroll", A);
    let B = Fl(
      // @ts-expect-error
      K1(window),
      "scroll",
      A
    );
    return () => {
      zr?.removeEventListener("resize", ne), zr?.removeEventListener("scroll", A), B();
    };
  }, [
    Q
  ]);
  let ie = S.useCallback(() => {
    X.current || w?.();
  }, [
    w,
    X
  ]);
  return g4({
    triggerRef: a,
    isOpen: $,
    onClose: w && ie
  }), {
    overlayProps: {
      style: {
        position: H ? "absolute" : "fixed",
        top: H ? void 0 : 0,
        left: H ? void 0 : 0,
        zIndex: 1e5,
        ...H?.position,
        maxHeight: H?.maxHeight ?? "100vh"
      }
    },
    placement: H?.placement ?? null,
    triggerAnchorPoint: H?.triggerAnchorPoint ?? null,
    arrowProps: {
      "aria-hidden": "true",
      role: "presentation",
      style: {
        left: H?.arrowOffsetLeft,
        top: H?.arrowOffsetTop
      }
    },
    updatePosition: Q
  };
}
function X4(e) {
  Le(() => (window.addEventListener("resize", e, !1), () => {
    window.removeEventListener("resize", e, !1);
  }), [
    e
  ]);
}
function Y4(e, t) {
  return t === "rtl" ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right");
}
function J4(e, t) {
  let { triggerRef: r, popoverRef: a, groupRef: i, isNonModal: s, isKeyboardDismissDisabled: c, shouldCloseOnInteractOutside: u, ...p } = e, f = p.trigger === "SubmenuTrigger", { overlayProps: v, underlayProps: g } = cy({
    isOpen: t.isOpen,
    onClose: t.close,
    shouldCloseOnBlur: !0,
    isDismissable: !s || f,
    isKeyboardDismissDisabled: c,
    shouldCloseOnInteractOutside: u
  }, i ?? a), { overlayProps: h, arrowProps: b, placement: $, triggerAnchorPoint: w } = Q4({
    ...p,
    targetRef: r,
    overlayRef: a,
    isOpen: t.isOpen,
    onClose: s && !f ? t.close : null,
    getTargetRect: p.getTargetRect ?? (t.point ? () => new DOMRect(t.point.x, t.point.y, 0, 0) : void 0)
  });
  dy({
    isDisabled: s || !t.isOpen
  }), S.useEffect(() => {
    if (t.isOpen && a.current)
      return s ? c4(i?.current ?? a.current) : bv([
        i?.current ?? a.current
      ], {
        shouldUseInert: !0
      });
  }, [
    s,
    t.isOpen,
    a,
    i
  ]);
  let { focusWithinProps: k } = Ss(e);
  return {
    popoverProps: $e(v, h, k),
    arrowProps: b,
    underlayProps: g,
    placement: $,
    triggerAnchorPoint: w
  };
}
const py = /* @__PURE__ */ new WeakMap();
function rs(e, t, r) {
  return e ? (typeof t == "string" && (t = t.replace(/\s+/g, "")), `${py.get(e)}-${r}-${t}`) : "";
}
function e3(e, t, r) {
  let { key: a, isDisabled: i, shouldSelectOnPressUp: s } = e, { selectionManager: c, selectedKey: u } = t, p = a === u, f = i || t.isDisabled || t.selectionManager.isDisabled(a), v = t.collection.getItem(a), { itemProps: g, isPressed: h } = _v({
    selectionManager: c,
    key: a,
    ref: r,
    isDisabled: f,
    // Link tabs should behave like native anchors (navigate on press up)
    // This avoids reopening beforeunload dialogs when browsers replay
    // queued pointer enter/leave events after cancellation.
    shouldSelectOnPressUp: s ?? v?.props.href != null,
    linkBehavior: "selection"
  }), b = rs(t, a, "tab"), $ = rs(t, a, "tabpanel"), { tabIndex: w } = g, k = gt(v?.props, {
    labelable: !0
  });
  delete k.id;
  let T = Gd(v?.props), { focusableProps: F } = ys({
    ...v?.props,
    isDisabled: f
  }, r);
  return {
    tabProps: $e(k, F, T, g, {
      id: b,
      "aria-selected": p,
      "aria-disabled": f || void 0,
      "aria-controls": p ? $ : void 0,
      tabIndex: f ? void 0 : w,
      role: "tab"
    }),
    isSelected: p,
    isDisabled: f,
    isPressed: h
  };
}
class t3 {
  constructor(t, r, a, i = /* @__PURE__ */ new Set()) {
    this.collection = t, this.flipDirection = r === "rtl", this.disabledKeys = i, this.tabDirection = a === "horizontal";
  }
  getKeyLeftOf(t) {
    return this.flipDirection ? this.getNextKey(t) : this.getPreviousKey(t);
  }
  getKeyRightOf(t) {
    return this.flipDirection ? this.getPreviousKey(t) : this.getNextKey(t);
  }
  isDisabled(t) {
    return this.disabledKeys.has(t) || !!this.collection.getItem(t)?.props?.isDisabled;
  }
  getFirstKey() {
    let t = this.collection.getFirstKey();
    return t != null && this.isDisabled(t) && (t = this.getNextKey(t)), t;
  }
  getLastKey() {
    let t = this.collection.getLastKey();
    return t != null && this.isDisabled(t) && (t = this.getPreviousKey(t)), t;
  }
  getKeyAbove(t) {
    return this.tabDirection ? null : this.getPreviousKey(t);
  }
  getKeyBelow(t) {
    return this.tabDirection ? null : this.getNextKey(t);
  }
  getNextKey(t) {
    let r = t;
    do
      r = this.collection.getKeyAfter(r), r == null && (r = this.collection.getFirstKey());
    while (r != null && this.isDisabled(r) && r !== t);
    return r;
  }
  getPreviousKey(t) {
    let r = t;
    do
      r = this.collection.getKeyBefore(r), r == null && (r = this.collection.getLastKey());
    while (r != null && this.isDisabled(r) && r !== t);
    return r;
  }
}
function n3(e, t, r) {
  let { orientation: a = "horizontal", keyboardActivation: i = "automatic" } = e, { collection: s, selectionManager: c, disabledKeys: u } = t, { direction: p } = Kl(), f = S.useMemo(() => new t3(s, p, a, u), [
    s,
    u,
    a,
    p
  ]), { collectionProps: v } = Sv({
    ref: r,
    selectionManager: c,
    keyboardDelegate: f,
    selectOnFocus: i === "automatic",
    disallowEmptySelection: !0,
    scrollRef: r,
    linkBehavior: "selection"
  }), g = br();
  py.set(t, g);
  let h = Xd({
    ...e,
    id: g
  });
  return {
    tabListProps: {
      ...$e(v, h),
      role: "tablist",
      "aria-orientation": a,
      tabIndex: void 0
    }
  };
}
function r3(e, t, r) {
  let a = R4(r) ? void 0 : 0;
  const i = rs(t, e.id ?? t?.selectedKey, "tabpanel"), s = Xd({
    ...e,
    id: i,
    "aria-labelledby": rs(t, t?.selectedKey, "tab")
  });
  return {
    tabPanelProps: $e(s, {
      tabIndex: a,
      role: "tabpanel",
      "aria-describedby": e["aria-describedby"],
      "aria-details": e["aria-details"]
    })
  };
}
var Eg = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Rt = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, l3 = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function my(e, t) {
  e.forEach(function(r) {
    Array.isArray(r) ? my(r, t) : t.push(r);
  });
}
function hy(e) {
  let t = [];
  return my(e, t), t;
}
var gy = (...e) => hy(e).filter(Boolean), vy = (e, t) => {
  let r = {}, a = Object.keys(e), i = Object.keys(t);
  for (let s of a) if (i.includes(s)) {
    let c = e[s], u = t[s];
    typeof c == "object" && typeof u == "object" ? r[s] = vy(c, u) : Array.isArray(c) || Array.isArray(u) ? r[s] = gy(u, c) : r[s] = u + " " + c;
  } else r[s] = e[s];
  for (let s of i) a.includes(s) || (r[s] = t[s]);
  return r;
}, kg = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
const rf = "-", i3 = (e) => {
  const t = o3(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: a
  } = e;
  return {
    getClassGroupId: (c) => {
      const u = c.split(rf);
      return u[0] === "" && u.length !== 1 && u.shift(), yy(u, t) || a3(c);
    },
    getConflictingClassGroupIds: (c, u) => {
      const p = r[c] || [];
      return u && a[c] ? [...p, ...a[c]] : p;
    }
  };
}, yy = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], a = t.nextPart.get(r), i = a ? yy(e.slice(1), a) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const s = e.join(rf);
  return t.validators.find(({
    validator: c
  }) => c(s))?.classGroupId;
}, _g = /^\[(.+)\]$/, a3 = (e) => {
  if (_g.test(e)) {
    const t = _g.exec(e)[1], r = t?.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, o3 = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return u3(Object.entries(e.classGroups), r).forEach(([s, c]) => {
    Ed(c, a, s, t);
  }), a;
}, Ed = (e, t, r, a) => {
  e.forEach((i) => {
    if (typeof i == "string") {
      const s = i === "" ? t : Ng(t, i);
      s.classGroupId = r;
      return;
    }
    if (typeof i == "function") {
      if (s3(i)) {
        Ed(i(a), t, r, a);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: r
      });
      return;
    }
    Object.entries(i).forEach(([s, c]) => {
      Ed(c, Ng(t, s), r, a);
    });
  });
}, Ng = (e, t) => {
  let r = e;
  return t.split(rf).forEach((a) => {
    r.nextPart.has(a) || r.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(a);
  }), r;
}, s3 = (e) => e.isThemeGetter, u3 = (e, t) => t ? e.map(([r, a]) => {
  const i = a.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([c, u]) => [t + c, u])) : s);
  return [r, i];
}) : e, c3 = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  const i = (s, c) => {
    r.set(s, c), t++, t > e && (t = 0, a = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let c = r.get(s);
      if (c !== void 0)
        return c;
      if ((c = a.get(s)) !== void 0)
        return i(s, c), c;
    },
    set(s, c) {
      r.has(s) ? r.set(s, c) : i(s, c);
    }
  };
}, by = "!", d3 = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, a = t.length === 1, i = t[0], s = t.length, c = (u) => {
    const p = [];
    let f = 0, v = 0, g;
    for (let k = 0; k < u.length; k++) {
      let T = u[k];
      if (f === 0) {
        if (T === i && (a || u.slice(k, k + s) === t)) {
          p.push(u.slice(v, k)), v = k + s;
          continue;
        }
        if (T === "/") {
          g = k;
          continue;
        }
      }
      T === "[" ? f++ : T === "]" && f--;
    }
    const h = p.length === 0 ? u : u.substring(v), b = h.startsWith(by), $ = b ? h.substring(1) : h, w = g && g > v ? g - v : void 0;
    return {
      modifiers: p,
      hasImportantModifier: b,
      baseClassName: $,
      maybePostfixModifierPosition: w
    };
  };
  return r ? (u) => r({
    className: u,
    parseClassName: c
  }) : c;
}, f3 = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((a) => {
    a[0] === "[" ? (t.push(...r.sort(), a), r = []) : r.push(a);
  }), t.push(...r.sort()), t;
}, p3 = (e) => ({
  cache: c3(e.cacheSize),
  parseClassName: d3(e),
  ...i3(e)
}), m3 = /\s+/, h3 = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: a,
    getConflictingClassGroupIds: i
  } = t, s = [], c = e.trim().split(m3);
  let u = "";
  for (let p = c.length - 1; p >= 0; p -= 1) {
    const f = c[p], {
      modifiers: v,
      hasImportantModifier: g,
      baseClassName: h,
      maybePostfixModifierPosition: b
    } = r(f);
    let $ = !!b, w = a($ ? h.substring(0, b) : h);
    if (!w) {
      if (!$) {
        u = f + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (w = a(h), !w) {
        u = f + (u.length > 0 ? " " + u : u);
        continue;
      }
      $ = !1;
    }
    const k = f3(v).join(":"), T = g ? k + by : k, F = T + w;
    if (s.includes(F))
      continue;
    s.push(F);
    const H = i(w, $);
    for (let K = 0; K < H.length; ++K) {
      const Y = H[K];
      s.push(T + Y);
    }
    u = f + (u.length > 0 ? " " + u : u);
  }
  return u;
};
function g3() {
  let e = 0, t, r, a = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = xy(t)) && (a && (a += " "), a += r);
  return a;
}
const xy = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let a = 0; a < e.length; a++)
    e[a] && (t = xy(e[a])) && (r && (r += " "), r += t);
  return r;
};
function kd(e, ...t) {
  let r, a, i, s = c;
  function c(p) {
    const f = t.reduce((v, g) => g(v), e());
    return r = p3(f), a = r.cache.get, i = r.cache.set, s = u, u(p);
  }
  function u(p) {
    const f = a(p);
    if (f)
      return f;
    const v = h3(p, r);
    return i(p, v), v;
  }
  return function() {
    return s(g3.apply(null, arguments));
  };
}
const qe = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, wy = /^\[(?:([a-z-]+):)?(.+)\]$/i, v3 = /^\d+\/\d+$/, y3 = /* @__PURE__ */ new Set(["px", "full", "screen"]), b3 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, x3 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, w3 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, S3 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, C3 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, xn = (e) => Vr(e) || y3.has(e) || v3.test(e), In = (e) => Dl(e, "length", k3), Vr = (e) => !!e && !Number.isNaN(Number(e)), Vo = (e) => Dl(e, "number", Vr), kl = (e) => !!e && Number.isInteger(Number(e)), Sy = (e) => e.endsWith("%") && Vr(e.slice(0, -1)), Ee = (e) => wy.test(e), Mn = (e) => b3.test(e), $3 = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Cy = (e) => Dl(e, $3, _y), $y = (e) => Dl(e, "position", _y), E3 = /* @__PURE__ */ new Set(["image", "url"]), Ey = (e) => Dl(e, E3, N3), ky = (e) => Dl(e, "", _3), _l = () => !0, Dl = (e, t, r) => {
  const a = wy.exec(e);
  return a ? a[1] ? typeof t == "string" ? a[1] === t : t.has(a[1]) : r(a[2]) : !1;
}, k3 = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  x3.test(e) && !w3.test(e)
), _y = () => !1, _3 = (e) => S3.test(e), N3 = (e) => C3.test(e), P3 = /* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isAny: _l,
  isArbitraryImage: Ey,
  isArbitraryLength: In,
  isArbitraryNumber: Vo,
  isArbitraryPosition: $y,
  isArbitraryShadow: ky,
  isArbitrarySize: Cy,
  isArbitraryValue: Ee,
  isInteger: kl,
  isLength: xn,
  isNumber: Vr,
  isPercent: Sy,
  isTshirtSize: Mn
}, Symbol.toStringTag, {
  value: "Module"
}), _d = () => {
  const e = qe("colors"), t = qe("spacing"), r = qe("blur"), a = qe("brightness"), i = qe("borderColor"), s = qe("borderRadius"), c = qe("borderSpacing"), u = qe("borderWidth"), p = qe("contrast"), f = qe("grayscale"), v = qe("hueRotate"), g = qe("invert"), h = qe("gap"), b = qe("gradientColorStops"), $ = qe("gradientColorStopPositions"), w = qe("inset"), k = qe("margin"), T = qe("opacity"), F = qe("padding"), H = qe("saturate"), K = qe("scale"), Y = qe("sepia"), re = qe("skew"), Q = qe("space"), X = qe("translate"), ie = () => ["auto", "contain", "none"], ae = () => ["auto", "hidden", "clip", "visible", "scroll"], ne = () => ["auto", Ee, t], A = () => [Ee, t], B = () => ["", xn, In], _ = () => ["auto", Vr, Ee], D = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], I = () => ["solid", "dashed", "dotted", "double", "none"], M = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], z = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], L = () => ["", "0", Ee], W = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], N = () => [Vr, Ee];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [_l],
      spacing: [xn, In],
      blur: ["none", "", Mn, Ee],
      brightness: N(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Mn, Ee],
      borderSpacing: A(),
      borderWidth: B(),
      contrast: N(),
      grayscale: L(),
      hueRotate: N(),
      invert: L(),
      gap: A(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Sy, In],
      inset: ne(),
      margin: ne(),
      opacity: N(),
      padding: A(),
      saturate: N(),
      scale: N(),
      sepia: L(),
      skew: N(),
      space: A(),
      translate: A()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", Ee]
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
        columns: [Mn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": W()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": W()
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
        object: [...D(), Ee]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ae()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ae()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ae()
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
        inset: [w]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [w]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [w]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [w]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [w]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [w]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [w]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [w]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [w]
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
        z: ["auto", kl, Ee]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: ne()
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
        flex: ["1", "auto", "initial", "none", Ee]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: L()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: L()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", kl, Ee]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [_l]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", kl, Ee]
        }, Ee]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": _()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": _()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [_l]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [kl, Ee]
        }, Ee]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": _()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": _()
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
        "auto-cols": ["auto", "min", "max", "fr", Ee]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Ee]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [h]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [h]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [h]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...z()]
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
        content: ["normal", ...z(), "baseline"]
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
        "place-content": [...z(), "baseline"]
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
        m: [k]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [k]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [k]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [k]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [k]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [k]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [k]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [k]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [k]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [Q]
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
        "space-y": [Q]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Ee, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Ee, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Ee, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Mn]
        }, Mn]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Ee, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Ee, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Ee, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Ee, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Mn, In]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Vo]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [_l]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Ee]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Vr, Vo]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", xn, Ee]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Ee]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Ee]
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
        "placeholder-opacity": [T]
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
        "text-opacity": [T]
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
        decoration: [...I(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", xn, In]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", xn, Ee]
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
        indent: A()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Ee]
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
        content: ["none", Ee]
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
        "bg-opacity": [T]
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
        bg: [...D(), $y]
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
        bg: ["auto", "cover", "contain", Cy]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Ey]
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
        from: [$]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [$]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [$]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [b]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [b]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [b]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [u]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [u]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [u]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [u]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [u]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [u]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [u]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [u]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [u]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [T]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...I(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [u]
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
        "divide-y": [u]
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
        "divide-opacity": [T]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: I()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [i]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [i]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [i]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [i]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [i]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [i]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [i]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [i]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [i]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [i]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...I()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [xn, Ee]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [xn, In]
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
        ring: B()
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
        "ring-opacity": [T]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [xn, In]
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
        shadow: ["", "inner", "none", Mn, ky]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [_l]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [T]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...M(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": M()
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
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [a]
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
        "drop-shadow": ["", "none", Mn, Ee]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [f]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [v]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [g]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [H]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [Y]
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
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [a]
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
        "backdrop-grayscale": [f]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [v]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [g]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [T]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [H]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [Y]
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
        "border-spacing": [c]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [c]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [c]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Ee]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: N()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Ee]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: N()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Ee]
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
        scale: [K]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [K]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [K]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [kl, Ee]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [X]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [X]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [re]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [re]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Ee]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Ee]
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
        "scroll-m": A()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": A()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": A()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": A()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": A()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": A()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": A()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": A()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": A()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": A()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": A()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": A()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": A()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": A()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": A()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": A()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": A()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": A()
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
        "will-change": ["auto", "scroll", "contents", "transform", Ee]
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
        stroke: [xn, In, Vo]
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
}, F3 = (e, {
  cacheSize: t,
  prefix: r,
  separator: a,
  experimentalParseClassName: i,
  extend: s = {},
  override: c = {}
}) => {
  Ai(e, "cacheSize", t), Ai(e, "prefix", r), Ai(e, "separator", a), Ai(e, "experimentalParseClassName", i);
  for (const u in c)
    T3(e[u], c[u]);
  for (const u in s)
    R3(e[u], s[u]);
  return e;
}, Ai = (e, t, r) => {
  r !== void 0 && (e[t] = r);
}, T3 = (e, t) => {
  if (t)
    for (const r in t)
      Ai(e, r, t[r]);
}, R3 = (e, t) => {
  if (t)
    for (const r in t) {
      const a = t[r];
      a !== void 0 && (e[r] = (e[r] || []).concat(a));
    }
}, Ny = (e, ...t) => typeof e == "function" ? kd(_d, e, ...t) : kd(() => F3(_d(), e), ...t), L3 = /* @__PURE__ */ kd(_d);
var I3 = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, Py = (e) => e || void 0, Yi = (...e) => Py(hy(e).filter(Boolean).join(" ")), Uc = null, An = {}, Nd = !1, Pi = (...e) => (t) => t.twMerge ? ((!Uc || Nd) && (Nd = !1, Uc = Rt(An) ? L3 : Ny({ ...An, extend: { theme: An.theme, classGroups: An.classGroups, conflictingClassGroupModifiers: An.conflictingClassGroupModifiers, conflictingClassGroups: An.conflictingClassGroups, ...An.extend } })), Py(Uc(Yi(e)))) : Yi(e), Pg = (e, t) => {
  for (let r in t) e.hasOwnProperty(r) ? e[r] = Yi(e[r], t[r]) : e[r] = t[r];
  return e;
}, ua = (e, t) => {
  let { extend: r = null, slots: a = {}, variants: i = {}, compoundVariants: s = [], compoundSlots: c = [], defaultVariants: u = {} } = e, p = { ...I3, ...t }, f = r != null && r.base ? Yi(r.base, e?.base) : e?.base, v = r != null && r.variants && !Rt(r.variants) ? vy(i, r.variants) : i, g = r != null && r.defaultVariants && !Rt(r.defaultVariants) ? { ...r.defaultVariants, ...u } : u;
  !Rt(p.twMergeConfig) && !l3(p.twMergeConfig, An) && (Nd = !0, An = p.twMergeConfig);
  let h = Rt(r?.slots), b = Rt(a) ? {} : { base: Yi(e?.base, h && r?.base), ...a }, $ = h ? b : Pg({ ...r?.slots }, Rt(b) ? { base: e?.base } : b), w = Rt(r?.compoundVariants) ? s : gy(r?.compoundVariants, s), k = (F) => {
    if (Rt(v) && Rt(a) && h) return Pi(f, F?.class, F?.className)(p);
    if (w && !Array.isArray(w)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof w}`);
    if (c && !Array.isArray(c)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof c}`);
    let H = (A, B, _ = [], D) => {
      let I = _;
      if (typeof B == "string") I = I.concat(kg(B).split(" ").map((M) => `${A}:${M}`));
      else if (Array.isArray(B)) I = I.concat(B.reduce((M, z) => M.concat(`${A}:${z}`), []));
      else if (typeof B == "object" && typeof D == "string") {
        for (let M in B) if (B.hasOwnProperty(M) && M === D) {
          let z = B[M];
          if (z && typeof z == "string") {
            let L = kg(z);
            I[D] ? I[D] = I[D].concat(L.split(" ").map((W) => `${A}:${W}`)) : I[D] = L.split(" ").map((W) => `${A}:${W}`);
          } else Array.isArray(z) && z.length > 0 && (I[D] = z.reduce((L, W) => L.concat(`${A}:${W}`), []));
        }
      }
      return I;
    }, K = (A, B = v, _ = null, D = null) => {
      var I;
      let M = B[A];
      if (!M || Rt(M)) return null;
      let z = (I = D?.[A]) != null ? I : F?.[A];
      if (z === null) return null;
      let L = Eg(z), W = Array.isArray(p.responsiveVariants) && p.responsiveVariants.length > 0 || p.responsiveVariants === !0, N = g?.[A], G = [];
      if (typeof L == "object" && W) for (let [q, ce] of Object.entries(L)) {
        let ve = M[ce];
        if (q === "initial") {
          N = ce;
          continue;
        }
        Array.isArray(p.responsiveVariants) && !p.responsiveVariants.includes(q) || (G = H(q, ve, G, _));
      }
      let me = L != null && typeof L != "object" ? L : Eg(N), ue = M[me || "false"];
      return typeof G == "object" && typeof _ == "string" && G[_] ? Pg(G, ue) : G.length > 0 ? (G.push(ue), G) : ue;
    }, Y = () => v ? Object.keys(v).map((A) => K(A, v)) : null, re = (A, B) => {
      if (!v || typeof v != "object") return null;
      let _ = new Array();
      for (let D in v) {
        let I = K(D, v, A, B), M = A === "base" && typeof I == "string" ? I : I && I[A];
        M && (_[_.length] = M);
      }
      return _;
    }, Q = {};
    for (let A in F) F[A] !== void 0 && (Q[A] = F[A]);
    let X = (A, B) => {
      var _;
      let D = typeof F?.[A] == "object" ? { [A]: (_ = F[A]) == null ? void 0 : _.initial } : {};
      return { ...g, ...Q, ...D, ...B };
    }, ie = (A = [], B) => {
      let _ = [];
      for (let { class: D, className: I, ...M } of A) {
        let z = !0;
        for (let [L, W] of Object.entries(M)) {
          let N = X(L, B);
          if (Array.isArray(W)) {
            if (!W.includes(N[L])) {
              z = !1;
              break;
            }
          } else if (N[L] !== W) {
            z = !1;
            break;
          }
        }
        z && (D && _.push(D), I && _.push(I));
      }
      return _;
    }, ae = (A) => {
      let B = ie(w, A);
      if (!Array.isArray(B)) return B;
      let _ = {};
      for (let D of B) if (typeof D == "string" && (_.base = Pi(_.base, D)(p)), typeof D == "object") for (let [I, M] of Object.entries(D)) _[I] = Pi(_[I], M)(p);
      return _;
    }, ne = (A) => {
      if (c.length < 1) return null;
      let B = {};
      for (let { slots: _ = [], class: D, className: I, ...M } of c) {
        if (!Rt(M)) {
          let z = !0;
          for (let L of Object.keys(M)) {
            let W = X(L, A)[L];
            if (W === void 0 || (Array.isArray(M[L]) ? !M[L].includes(W) : M[L] !== W)) {
              z = !1;
              break;
            }
          }
          if (!z) continue;
        }
        for (let z of _) B[z] = B[z] || [], B[z].push([D, I]);
      }
      return B;
    };
    if (!Rt(a) || !h) {
      let A = {};
      if (typeof $ == "object" && !Rt($)) for (let B of Object.keys($)) A[B] = (_) => {
        var D, I;
        return Pi($[B], re(B, _), ((D = ae(_)) != null ? D : [])[B], ((I = ne(_)) != null ? I : [])[B], _?.class, _?.className)(p);
      };
      return A;
    }
    return Pi(f, Y(), ie(w), F?.class, F?.className)(p);
  }, T = () => {
    if (!(!v || typeof v != "object")) return Object.keys(v);
  };
  return k.variantKeys = T(), k.extend = r, k.base = f, k.slots = $, k.variants = v, k.defaultVariants = g, k.compoundSlots = c, k.compoundVariants = w, k;
};
const Fy = {
  large: "w-8 h-8",
  medium: "w-6 h-6",
  small: "w-5 h-5",
  undefined: "",
  "x-small": "w-4 h-4",
  "xx-small": "w-3.5 h-3.5"
}, je = ua({
  base: "inline-flex items-center justify-center p-0 m-0",
  variants: {
    size: Fy
  }
}), Ie = ua({
  variants: {
    size: Fy
  }
}), Me = ua({
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
}), M3 = ua({
  base: "outline outline-offset-0 outline-interactive-highlight outline-2"
});
var Io = {}, Ho = { exports: {} }, A3 = Ho.exports, Fg;
function j3() {
  return Fg || (Fg = 1, (function(e) {
    (function(t) {
      r(Math.pow(36, 5)), r(Math.pow(16, 7)), r(Math.pow(10, 9)), r(Math.pow(2, 30)), r(36), r(16), r(10), r(2);
      function r(c, u) {
        if (!(this instanceof r))
          return new r(c, u);
        if (this._low = 0, this._high = 0, this.remainder = null, typeof u > "u")
          return i.call(this, c);
        if (typeof c == "string")
          return s.call(this, c, u);
        a.call(this, c, u);
      }
      function a(c, u) {
        return this._low = c | 0, this._high = u | 0, this;
      }
      r.prototype.fromBits = a;
      function i(c) {
        return this._low = c & 65535, this._high = c >>> 16, this;
      }
      r.prototype.fromNumber = i;
      function s(c, u) {
        var p = parseInt(c, u || 10);
        return this._low = p & 65535, this._high = p >>> 16, this;
      }
      r.prototype.fromString = s, r.prototype.toNumber = function() {
        return this._high * 65536 + this._low;
      }, r.prototype.toString = function(c) {
        return this.toNumber().toString(c || 10);
      }, r.prototype.add = function(c) {
        var u = this._low + c._low, p = u >>> 16;
        return p += this._high + c._high, this._low = u & 65535, this._high = p & 65535, this;
      }, r.prototype.subtract = function(c) {
        return this.add(c.clone().negate());
      }, r.prototype.multiply = function(c) {
        var u = this._high, p = this._low, f = c._high, v = c._low, g, h;
        return h = p * v, g = h >>> 16, g += u * v, g &= 65535, g += p * f, this._low = h & 65535, this._high = g & 65535, this;
      }, r.prototype.div = function(c) {
        if (c._low == 0 && c._high == 0) throw Error("division by zero");
        if (c._high == 0 && c._low == 1)
          return this.remainder = new r(0), this;
        if (c.gt(this))
          return this.remainder = this.clone(), this._low = 0, this._high = 0, this;
        if (this.eq(c))
          return this.remainder = new r(0), this._low = 1, this._high = 0, this;
        for (var u = c.clone(), p = -1; !this.lt(u); )
          u.shiftLeft(1, !0), p++;
        for (this.remainder = this.clone(), this._low = 0, this._high = 0; p >= 0; p--)
          u.shiftRight(1), this.remainder.lt(u) || (this.remainder.subtract(u), p >= 16 ? this._high |= 1 << p - 16 : this._low |= 1 << p);
        return this;
      }, r.prototype.negate = function() {
        var c = (~this._low & 65535) + 1;
        return this._low = c & 65535, this._high = ~this._high + (c >>> 16) & 65535, this;
      }, r.prototype.equals = r.prototype.eq = function(c) {
        return this._low == c._low && this._high == c._high;
      }, r.prototype.greaterThan = r.prototype.gt = function(c) {
        return this._high > c._high ? !0 : this._high < c._high ? !1 : this._low > c._low;
      }, r.prototype.lessThan = r.prototype.lt = function(c) {
        return this._high < c._high ? !0 : this._high > c._high ? !1 : this._low < c._low;
      }, r.prototype.or = function(c) {
        return this._low |= c._low, this._high |= c._high, this;
      }, r.prototype.and = function(c) {
        return this._low &= c._low, this._high &= c._high, this;
      }, r.prototype.not = function() {
        return this._low = ~this._low & 65535, this._high = ~this._high & 65535, this;
      }, r.prototype.xor = function(c) {
        return this._low ^= c._low, this._high ^= c._high, this;
      }, r.prototype.shiftRight = r.prototype.shiftr = function(c) {
        return c > 16 ? (this._low = this._high >> c - 16, this._high = 0) : c == 16 ? (this._low = this._high, this._high = 0) : (this._low = this._low >> c | this._high << 16 - c & 65535, this._high >>= c), this;
      }, r.prototype.shiftLeft = r.prototype.shiftl = function(c, u) {
        return c > 16 ? (this._high = this._low << c - 16, this._low = 0, u || (this._high &= 65535)) : c == 16 ? (this._high = this._low, this._low = 0) : (this._high = this._high << c | this._low >> 16 - c, this._low = this._low << c & 65535, u || (this._high &= 65535)), this;
      }, r.prototype.rotateLeft = r.prototype.rotl = function(c) {
        var u = this._high << 16 | this._low;
        return u = u << c | u >>> 32 - c, this._low = u & 65535, this._high = u >>> 16, this;
      }, r.prototype.rotateRight = r.prototype.rotr = function(c) {
        var u = this._high << 16 | this._low;
        return u = u >>> c | u << 32 - c, this._low = u & 65535, this._high = u >>> 16, this;
      }, r.prototype.clone = function() {
        return new r(this._low, this._high);
      }, e.exports ? e.exports = r : t.UINT32 = r;
    })(A3);
  })(Ho)), Ho.exports;
}
var Bo = { exports: {} }, z3 = Bo.exports, Tg;
function K3() {
  return Tg || (Tg = 1, (function(e) {
    (function(t) {
      var r = {
        16: i(Math.pow(16, 5)),
        10: i(Math.pow(10, 5)),
        2: i(Math.pow(2, 5))
      }, a = {
        16: i(16),
        10: i(10),
        2: i(2)
      };
      function i(p, f, v, g) {
        if (!(this instanceof i))
          return new i(p, f, v, g);
        if (this.remainder = null, typeof p == "string")
          return u.call(this, p, f);
        if (typeof f > "u")
          return c.call(this, p);
        s.apply(this, arguments);
      }
      function s(p, f, v, g) {
        return typeof v > "u" ? (this._a00 = p & 65535, this._a16 = p >>> 16, this._a32 = f & 65535, this._a48 = f >>> 16, this) : (this._a00 = p | 0, this._a16 = f | 0, this._a32 = v | 0, this._a48 = g | 0, this);
      }
      i.prototype.fromBits = s;
      function c(p) {
        return this._a00 = p & 65535, this._a16 = p >>> 16, this._a32 = 0, this._a48 = 0, this;
      }
      i.prototype.fromNumber = c;
      function u(p, f) {
        f = f || 10, this._a00 = 0, this._a16 = 0, this._a32 = 0, this._a48 = 0;
        for (var v = r[f] || new i(Math.pow(f, 5)), g = 0, h = p.length; g < h; g += 5) {
          var b = Math.min(5, h - g), $ = parseInt(p.slice(g, g + b), f);
          this.multiply(
            b < 5 ? new i(Math.pow(f, b)) : v
          ).add(new i($));
        }
        return this;
      }
      i.prototype.fromString = u, i.prototype.toNumber = function() {
        return this._a16 * 65536 + this._a00;
      }, i.prototype.toString = function(p) {
        p = p || 10;
        var f = a[p] || new i(p);
        if (!this.gt(f)) return this.toNumber().toString(p);
        for (var v = this.clone(), g = new Array(64), h = 63; h >= 0 && (v.div(f), g[h] = v.remainder.toNumber().toString(p), !!v.gt(f)); h--)
          ;
        return g[h - 1] = v.toNumber().toString(p), g.join("");
      }, i.prototype.add = function(p) {
        var f = this._a00 + p._a00, v = f >>> 16;
        v += this._a16 + p._a16;
        var g = v >>> 16;
        g += this._a32 + p._a32;
        var h = g >>> 16;
        return h += this._a48 + p._a48, this._a00 = f & 65535, this._a16 = v & 65535, this._a32 = g & 65535, this._a48 = h & 65535, this;
      }, i.prototype.subtract = function(p) {
        return this.add(p.clone().negate());
      }, i.prototype.multiply = function(p) {
        var f = this._a00, v = this._a16, g = this._a32, h = this._a48, b = p._a00, $ = p._a16, w = p._a32, k = p._a48, T = f * b, F = T >>> 16;
        F += f * $;
        var H = F >>> 16;
        F &= 65535, F += v * b, H += F >>> 16, H += f * w;
        var K = H >>> 16;
        return H &= 65535, H += v * $, K += H >>> 16, H &= 65535, H += g * b, K += H >>> 16, K += f * k, K &= 65535, K += v * w, K &= 65535, K += g * $, K &= 65535, K += h * b, this._a00 = T & 65535, this._a16 = F & 65535, this._a32 = H & 65535, this._a48 = K & 65535, this;
      }, i.prototype.div = function(p) {
        if (p._a16 == 0 && p._a32 == 0 && p._a48 == 0) {
          if (p._a00 == 0) throw Error("division by zero");
          if (p._a00 == 1)
            return this.remainder = new i(0), this;
        }
        if (p.gt(this))
          return this.remainder = this.clone(), this._a00 = 0, this._a16 = 0, this._a32 = 0, this._a48 = 0, this;
        if (this.eq(p))
          return this.remainder = new i(0), this._a00 = 1, this._a16 = 0, this._a32 = 0, this._a48 = 0, this;
        for (var f = p.clone(), v = -1; !this.lt(f); )
          f.shiftLeft(1, !0), v++;
        for (this.remainder = this.clone(), this._a00 = 0, this._a16 = 0, this._a32 = 0, this._a48 = 0; v >= 0; v--)
          f.shiftRight(1), this.remainder.lt(f) || (this.remainder.subtract(f), v >= 48 ? this._a48 |= 1 << v - 48 : v >= 32 ? this._a32 |= 1 << v - 32 : v >= 16 ? this._a16 |= 1 << v - 16 : this._a00 |= 1 << v);
        return this;
      }, i.prototype.negate = function() {
        var p = (~this._a00 & 65535) + 1;
        return this._a00 = p & 65535, p = (~this._a16 & 65535) + (p >>> 16), this._a16 = p & 65535, p = (~this._a32 & 65535) + (p >>> 16), this._a32 = p & 65535, this._a48 = ~this._a48 + (p >>> 16) & 65535, this;
      }, i.prototype.equals = i.prototype.eq = function(p) {
        return this._a48 == p._a48 && this._a00 == p._a00 && this._a32 == p._a32 && this._a16 == p._a16;
      }, i.prototype.greaterThan = i.prototype.gt = function(p) {
        return this._a48 > p._a48 ? !0 : this._a48 < p._a48 ? !1 : this._a32 > p._a32 ? !0 : this._a32 < p._a32 ? !1 : this._a16 > p._a16 ? !0 : this._a16 < p._a16 ? !1 : this._a00 > p._a00;
      }, i.prototype.lessThan = i.prototype.lt = function(p) {
        return this._a48 < p._a48 ? !0 : this._a48 > p._a48 ? !1 : this._a32 < p._a32 ? !0 : this._a32 > p._a32 ? !1 : this._a16 < p._a16 ? !0 : this._a16 > p._a16 ? !1 : this._a00 < p._a00;
      }, i.prototype.or = function(p) {
        return this._a00 |= p._a00, this._a16 |= p._a16, this._a32 |= p._a32, this._a48 |= p._a48, this;
      }, i.prototype.and = function(p) {
        return this._a00 &= p._a00, this._a16 &= p._a16, this._a32 &= p._a32, this._a48 &= p._a48, this;
      }, i.prototype.xor = function(p) {
        return this._a00 ^= p._a00, this._a16 ^= p._a16, this._a32 ^= p._a32, this._a48 ^= p._a48, this;
      }, i.prototype.not = function() {
        return this._a00 = ~this._a00 & 65535, this._a16 = ~this._a16 & 65535, this._a32 = ~this._a32 & 65535, this._a48 = ~this._a48 & 65535, this;
      }, i.prototype.shiftRight = i.prototype.shiftr = function(p) {
        return p %= 64, p >= 48 ? (this._a00 = this._a48 >> p - 48, this._a16 = 0, this._a32 = 0, this._a48 = 0) : p >= 32 ? (p -= 32, this._a00 = (this._a32 >> p | this._a48 << 16 - p) & 65535, this._a16 = this._a48 >> p & 65535, this._a32 = 0, this._a48 = 0) : p >= 16 ? (p -= 16, this._a00 = (this._a16 >> p | this._a32 << 16 - p) & 65535, this._a16 = (this._a32 >> p | this._a48 << 16 - p) & 65535, this._a32 = this._a48 >> p & 65535, this._a48 = 0) : (this._a00 = (this._a00 >> p | this._a16 << 16 - p) & 65535, this._a16 = (this._a16 >> p | this._a32 << 16 - p) & 65535, this._a32 = (this._a32 >> p | this._a48 << 16 - p) & 65535, this._a48 = this._a48 >> p & 65535), this;
      }, i.prototype.shiftLeft = i.prototype.shiftl = function(p, f) {
        return p %= 64, p >= 48 ? (this._a48 = this._a00 << p - 48, this._a32 = 0, this._a16 = 0, this._a00 = 0) : p >= 32 ? (p -= 32, this._a48 = this._a16 << p | this._a00 >> 16 - p, this._a32 = this._a00 << p & 65535, this._a16 = 0, this._a00 = 0) : p >= 16 ? (p -= 16, this._a48 = this._a32 << p | this._a16 >> 16 - p, this._a32 = (this._a16 << p | this._a00 >> 16 - p) & 65535, this._a16 = this._a00 << p & 65535, this._a00 = 0) : (this._a48 = this._a48 << p | this._a32 >> 16 - p, this._a32 = (this._a32 << p | this._a16 >> 16 - p) & 65535, this._a16 = (this._a16 << p | this._a00 >> 16 - p) & 65535, this._a00 = this._a00 << p & 65535), f || (this._a48 &= 65535), this;
      }, i.prototype.rotateLeft = i.prototype.rotl = function(p) {
        if (p %= 64, p == 0) return this;
        if (p >= 32) {
          var f = this._a00;
          if (this._a00 = this._a32, this._a32 = f, f = this._a48, this._a48 = this._a16, this._a16 = f, p == 32) return this;
          p -= 32;
        }
        var v = this._a48 << 16 | this._a32, g = this._a16 << 16 | this._a00, h = v << p | g >>> 32 - p, b = g << p | v >>> 32 - p;
        return this._a00 = b & 65535, this._a16 = b >>> 16, this._a32 = h & 65535, this._a48 = h >>> 16, this;
      }, i.prototype.rotateRight = i.prototype.rotr = function(p) {
        if (p %= 64, p == 0) return this;
        if (p >= 32) {
          var f = this._a00;
          if (this._a00 = this._a32, this._a32 = f, f = this._a48, this._a48 = this._a16, this._a16 = f, p == 32) return this;
          p -= 32;
        }
        var v = this._a48 << 16 | this._a32, g = this._a16 << 16 | this._a00, h = v >>> p | g << 32 - p, b = g >>> p | v << 32 - p;
        return this._a00 = b & 65535, this._a16 = b >>> 16, this._a32 = h & 65535, this._a48 = h >>> 16, this;
      }, i.prototype.clone = function() {
        return new i(this._a00, this._a16, this._a32, this._a48);
      }, e.exports ? e.exports = i : t.UINT64 = i;
    })(z3);
  })(Bo)), Bo.exports;
}
var Rg;
function Ty() {
  return Rg || (Rg = 1, Io.UINT32 = j3(), Io.UINT64 = K3()), Io;
}
var Wc, Lg;
function D3() {
  if (Lg) return Wc;
  Lg = 1;
  var e = Ty().UINT32;
  e.prototype.xxh_update = function(f, v) {
    var g = r._low, h = r._high, b, $;
    $ = f * g, b = $ >>> 16, b += v * g, b &= 65535, b += f * h;
    var w = this._low + ($ & 65535), k = w >>> 16;
    k += this._high + (b & 65535);
    var T = k << 16 | w & 65535;
    T = T << 13 | T >>> 19, w = T & 65535, k = T >>> 16, g = t._low, h = t._high, $ = w * g, b = $ >>> 16, b += k * g, b &= 65535, b += w * h, this._low = $ & 65535, this._high = b & 65535;
  };
  var t = e("2654435761"), r = e("2246822519"), a = e("3266489917"), i = e("668265263"), s = e("374761393");
  function c(f) {
    for (var v = [], g = 0, h = f.length; g < h; g++) {
      var b = f.charCodeAt(g);
      b < 128 ? v.push(b) : b < 2048 ? v.push(
        192 | b >> 6,
        128 | b & 63
      ) : b < 55296 || b >= 57344 ? v.push(
        224 | b >> 12,
        128 | b >> 6 & 63,
        128 | b & 63
      ) : (g++, b = 65536 + ((b & 1023) << 10 | f.charCodeAt(g) & 1023), v.push(
        240 | b >> 18,
        128 | b >> 12 & 63,
        128 | b >> 6 & 63,
        128 | b & 63
      ));
    }
    return new Uint8Array(v);
  }
  function u() {
    if (arguments.length == 2)
      return new u(arguments[1]).update(arguments[0]).digest();
    if (!(this instanceof u))
      return new u(arguments[0]);
    p.call(this, arguments[0]);
  }
  function p(f) {
    return this.seed = f instanceof e ? f.clone() : e(f), this.v1 = this.seed.clone().add(t).add(r), this.v2 = this.seed.clone().add(r), this.v3 = this.seed.clone(), this.v4 = this.seed.clone().subtract(t), this.total_len = 0, this.memsize = 0, this.memory = null, this;
  }
  return u.prototype.init = p, u.prototype.update = function(f) {
    var v = typeof f == "string", g;
    v && (f = c(f), v = !1, g = !0), typeof ArrayBuffer < "u" && f instanceof ArrayBuffer && (g = !0, f = new Uint8Array(f));
    var h = 0, b = f.length, $ = h + b;
    if (b == 0) return this;
    if (this.total_len += b, this.memsize == 0 && (v ? this.memory = "" : g ? this.memory = new Uint8Array(16) : this.memory = new Buffer(16)), this.memsize + b < 16)
      return v ? this.memory += f : g ? this.memory.set(f.subarray(0, b), this.memsize) : f.copy(this.memory, this.memsize, 0, b), this.memsize += b, this;
    if (this.memsize > 0) {
      v ? this.memory += f.slice(0, 16 - this.memsize) : g ? this.memory.set(f.subarray(0, 16 - this.memsize), this.memsize) : f.copy(this.memory, this.memsize, 0, 16 - this.memsize);
      var w = 0;
      v ? (this.v1.xxh_update(
        this.memory.charCodeAt(w + 1) << 8 | this.memory.charCodeAt(w),
        this.memory.charCodeAt(w + 3) << 8 | this.memory.charCodeAt(w + 2)
      ), w += 4, this.v2.xxh_update(
        this.memory.charCodeAt(w + 1) << 8 | this.memory.charCodeAt(w),
        this.memory.charCodeAt(w + 3) << 8 | this.memory.charCodeAt(w + 2)
      ), w += 4, this.v3.xxh_update(
        this.memory.charCodeAt(w + 1) << 8 | this.memory.charCodeAt(w),
        this.memory.charCodeAt(w + 3) << 8 | this.memory.charCodeAt(w + 2)
      ), w += 4, this.v4.xxh_update(
        this.memory.charCodeAt(w + 1) << 8 | this.memory.charCodeAt(w),
        this.memory.charCodeAt(w + 3) << 8 | this.memory.charCodeAt(w + 2)
      )) : (this.v1.xxh_update(
        this.memory[w + 1] << 8 | this.memory[w],
        this.memory[w + 3] << 8 | this.memory[w + 2]
      ), w += 4, this.v2.xxh_update(
        this.memory[w + 1] << 8 | this.memory[w],
        this.memory[w + 3] << 8 | this.memory[w + 2]
      ), w += 4, this.v3.xxh_update(
        this.memory[w + 1] << 8 | this.memory[w],
        this.memory[w + 3] << 8 | this.memory[w + 2]
      ), w += 4, this.v4.xxh_update(
        this.memory[w + 1] << 8 | this.memory[w],
        this.memory[w + 3] << 8 | this.memory[w + 2]
      )), h += 16 - this.memsize, this.memsize = 0, v && (this.memory = "");
    }
    if (h <= $ - 16) {
      var k = $ - 16;
      do
        v ? (this.v1.xxh_update(
          f.charCodeAt(h + 1) << 8 | f.charCodeAt(h),
          f.charCodeAt(h + 3) << 8 | f.charCodeAt(h + 2)
        ), h += 4, this.v2.xxh_update(
          f.charCodeAt(h + 1) << 8 | f.charCodeAt(h),
          f.charCodeAt(h + 3) << 8 | f.charCodeAt(h + 2)
        ), h += 4, this.v3.xxh_update(
          f.charCodeAt(h + 1) << 8 | f.charCodeAt(h),
          f.charCodeAt(h + 3) << 8 | f.charCodeAt(h + 2)
        ), h += 4, this.v4.xxh_update(
          f.charCodeAt(h + 1) << 8 | f.charCodeAt(h),
          f.charCodeAt(h + 3) << 8 | f.charCodeAt(h + 2)
        )) : (this.v1.xxh_update(
          f[h + 1] << 8 | f[h],
          f[h + 3] << 8 | f[h + 2]
        ), h += 4, this.v2.xxh_update(
          f[h + 1] << 8 | f[h],
          f[h + 3] << 8 | f[h + 2]
        ), h += 4, this.v3.xxh_update(
          f[h + 1] << 8 | f[h],
          f[h + 3] << 8 | f[h + 2]
        ), h += 4, this.v4.xxh_update(
          f[h + 1] << 8 | f[h],
          f[h + 3] << 8 | f[h + 2]
        )), h += 4;
      while (h <= k);
    }
    return h < $ && (v ? this.memory += f.slice(h) : g ? this.memory.set(f.subarray(h, $), this.memsize) : f.copy(this.memory, this.memsize, h, $), this.memsize = $ - h), this;
  }, u.prototype.digest = function() {
    var f = this.memory, v = typeof f == "string", g = 0, h = this.memsize, b, $, w = new e();
    for (this.total_len >= 16 ? b = this.v1.rotl(1).add(this.v2.rotl(7).add(this.v3.rotl(12).add(this.v4.rotl(18)))) : b = this.seed.clone().add(s), b.add(w.fromNumber(this.total_len)); g <= h - 4; )
      v ? w.fromBits(
        f.charCodeAt(g + 1) << 8 | f.charCodeAt(g),
        f.charCodeAt(g + 3) << 8 | f.charCodeAt(g + 2)
      ) : w.fromBits(
        f[g + 1] << 8 | f[g],
        f[g + 3] << 8 | f[g + 2]
      ), b.add(w.multiply(a)).rotl(17).multiply(i), g += 4;
    for (; g < h; )
      w.fromBits(v ? f.charCodeAt(g++) : f[g++], 0), b.add(w.multiply(s)).rotl(11).multiply(t);
    return $ = b.clone().shiftRight(15), b.xor($).multiply(r), $ = b.clone().shiftRight(13), b.xor($).multiply(a), $ = b.clone().shiftRight(16), b.xor($), this.init(this.seed), b;
  }, Wc = u, Wc;
}
var Gc, Ig;
function O3() {
  if (Ig) return Gc;
  Ig = 1;
  var e = Ty().UINT64, t = e("11400714785074694791"), r = e("14029467366897019727"), a = e("1609587929392839161"), i = e("9650029242287828579"), s = e("2870177450012600261");
  function c(f) {
    for (var v = [], g = 0, h = f.length; g < h; g++) {
      var b = f.charCodeAt(g);
      b < 128 ? v.push(b) : b < 2048 ? v.push(
        192 | b >> 6,
        128 | b & 63
      ) : b < 55296 || b >= 57344 ? v.push(
        224 | b >> 12,
        128 | b >> 6 & 63,
        128 | b & 63
      ) : (g++, b = 65536 + ((b & 1023) << 10 | f.charCodeAt(g) & 1023), v.push(
        240 | b >> 18,
        128 | b >> 12 & 63,
        128 | b >> 6 & 63,
        128 | b & 63
      ));
    }
    return new Uint8Array(v);
  }
  function u() {
    if (arguments.length == 2)
      return new u(arguments[1]).update(arguments[0]).digest();
    if (!(this instanceof u))
      return new u(arguments[0]);
    p.call(this, arguments[0]);
  }
  function p(f) {
    return this.seed = f instanceof e ? f.clone() : e(f), this.v1 = this.seed.clone().add(t).add(r), this.v2 = this.seed.clone().add(r), this.v3 = this.seed.clone(), this.v4 = this.seed.clone().subtract(t), this.total_len = 0, this.memsize = 0, this.memory = null, this;
  }
  return u.prototype.init = p, u.prototype.update = function(f) {
    var v = typeof f == "string", g;
    v && (f = c(f), v = !1, g = !0), typeof ArrayBuffer < "u" && f instanceof ArrayBuffer && (g = !0, f = new Uint8Array(f));
    var h = 0, b = f.length, $ = h + b;
    if (b == 0) return this;
    if (this.total_len += b, this.memsize == 0 && (v ? this.memory = "" : g ? this.memory = new Uint8Array(32) : this.memory = new Buffer(32)), this.memsize + b < 32)
      return v ? this.memory += f : g ? this.memory.set(f.subarray(0, b), this.memsize) : f.copy(this.memory, this.memsize, 0, b), this.memsize += b, this;
    if (this.memsize > 0) {
      v ? this.memory += f.slice(0, 32 - this.memsize) : g ? this.memory.set(f.subarray(0, 32 - this.memsize), this.memsize) : f.copy(this.memory, this.memsize, 0, 32 - this.memsize);
      var w = 0;
      if (v) {
        var k;
        k = e(
          this.memory.charCodeAt(w + 1) << 8 | this.memory.charCodeAt(w),
          this.memory.charCodeAt(w + 3) << 8 | this.memory.charCodeAt(w + 2),
          this.memory.charCodeAt(w + 5) << 8 | this.memory.charCodeAt(w + 4),
          this.memory.charCodeAt(w + 7) << 8 | this.memory.charCodeAt(w + 6)
        ), this.v1.add(k.multiply(r)).rotl(31).multiply(t), w += 8, k = e(
          this.memory.charCodeAt(w + 1) << 8 | this.memory.charCodeAt(w),
          this.memory.charCodeAt(w + 3) << 8 | this.memory.charCodeAt(w + 2),
          this.memory.charCodeAt(w + 5) << 8 | this.memory.charCodeAt(w + 4),
          this.memory.charCodeAt(w + 7) << 8 | this.memory.charCodeAt(w + 6)
        ), this.v2.add(k.multiply(r)).rotl(31).multiply(t), w += 8, k = e(
          this.memory.charCodeAt(w + 1) << 8 | this.memory.charCodeAt(w),
          this.memory.charCodeAt(w + 3) << 8 | this.memory.charCodeAt(w + 2),
          this.memory.charCodeAt(w + 5) << 8 | this.memory.charCodeAt(w + 4),
          this.memory.charCodeAt(w + 7) << 8 | this.memory.charCodeAt(w + 6)
        ), this.v3.add(k.multiply(r)).rotl(31).multiply(t), w += 8, k = e(
          this.memory.charCodeAt(w + 1) << 8 | this.memory.charCodeAt(w),
          this.memory.charCodeAt(w + 3) << 8 | this.memory.charCodeAt(w + 2),
          this.memory.charCodeAt(w + 5) << 8 | this.memory.charCodeAt(w + 4),
          this.memory.charCodeAt(w + 7) << 8 | this.memory.charCodeAt(w + 6)
        ), this.v4.add(k.multiply(r)).rotl(31).multiply(t);
      } else {
        var k;
        k = e(
          this.memory[w + 1] << 8 | this.memory[w],
          this.memory[w + 3] << 8 | this.memory[w + 2],
          this.memory[w + 5] << 8 | this.memory[w + 4],
          this.memory[w + 7] << 8 | this.memory[w + 6]
        ), this.v1.add(k.multiply(r)).rotl(31).multiply(t), w += 8, k = e(
          this.memory[w + 1] << 8 | this.memory[w],
          this.memory[w + 3] << 8 | this.memory[w + 2],
          this.memory[w + 5] << 8 | this.memory[w + 4],
          this.memory[w + 7] << 8 | this.memory[w + 6]
        ), this.v2.add(k.multiply(r)).rotl(31).multiply(t), w += 8, k = e(
          this.memory[w + 1] << 8 | this.memory[w],
          this.memory[w + 3] << 8 | this.memory[w + 2],
          this.memory[w + 5] << 8 | this.memory[w + 4],
          this.memory[w + 7] << 8 | this.memory[w + 6]
        ), this.v3.add(k.multiply(r)).rotl(31).multiply(t), w += 8, k = e(
          this.memory[w + 1] << 8 | this.memory[w],
          this.memory[w + 3] << 8 | this.memory[w + 2],
          this.memory[w + 5] << 8 | this.memory[w + 4],
          this.memory[w + 7] << 8 | this.memory[w + 6]
        ), this.v4.add(k.multiply(r)).rotl(31).multiply(t);
      }
      h += 32 - this.memsize, this.memsize = 0, v && (this.memory = "");
    }
    if (h <= $ - 32) {
      var T = $ - 32;
      do {
        if (v) {
          var k;
          k = e(
            f.charCodeAt(h + 1) << 8 | f.charCodeAt(h),
            f.charCodeAt(h + 3) << 8 | f.charCodeAt(h + 2),
            f.charCodeAt(h + 5) << 8 | f.charCodeAt(h + 4),
            f.charCodeAt(h + 7) << 8 | f.charCodeAt(h + 6)
          ), this.v1.add(k.multiply(r)).rotl(31).multiply(t), h += 8, k = e(
            f.charCodeAt(h + 1) << 8 | f.charCodeAt(h),
            f.charCodeAt(h + 3) << 8 | f.charCodeAt(h + 2),
            f.charCodeAt(h + 5) << 8 | f.charCodeAt(h + 4),
            f.charCodeAt(h + 7) << 8 | f.charCodeAt(h + 6)
          ), this.v2.add(k.multiply(r)).rotl(31).multiply(t), h += 8, k = e(
            f.charCodeAt(h + 1) << 8 | f.charCodeAt(h),
            f.charCodeAt(h + 3) << 8 | f.charCodeAt(h + 2),
            f.charCodeAt(h + 5) << 8 | f.charCodeAt(h + 4),
            f.charCodeAt(h + 7) << 8 | f.charCodeAt(h + 6)
          ), this.v3.add(k.multiply(r)).rotl(31).multiply(t), h += 8, k = e(
            f.charCodeAt(h + 1) << 8 | f.charCodeAt(h),
            f.charCodeAt(h + 3) << 8 | f.charCodeAt(h + 2),
            f.charCodeAt(h + 5) << 8 | f.charCodeAt(h + 4),
            f.charCodeAt(h + 7) << 8 | f.charCodeAt(h + 6)
          ), this.v4.add(k.multiply(r)).rotl(31).multiply(t);
        } else {
          var k;
          k = e(
            f[h + 1] << 8 | f[h],
            f[h + 3] << 8 | f[h + 2],
            f[h + 5] << 8 | f[h + 4],
            f[h + 7] << 8 | f[h + 6]
          ), this.v1.add(k.multiply(r)).rotl(31).multiply(t), h += 8, k = e(
            f[h + 1] << 8 | f[h],
            f[h + 3] << 8 | f[h + 2],
            f[h + 5] << 8 | f[h + 4],
            f[h + 7] << 8 | f[h + 6]
          ), this.v2.add(k.multiply(r)).rotl(31).multiply(t), h += 8, k = e(
            f[h + 1] << 8 | f[h],
            f[h + 3] << 8 | f[h + 2],
            f[h + 5] << 8 | f[h + 4],
            f[h + 7] << 8 | f[h + 6]
          ), this.v3.add(k.multiply(r)).rotl(31).multiply(t), h += 8, k = e(
            f[h + 1] << 8 | f[h],
            f[h + 3] << 8 | f[h + 2],
            f[h + 5] << 8 | f[h + 4],
            f[h + 7] << 8 | f[h + 6]
          ), this.v4.add(k.multiply(r)).rotl(31).multiply(t);
        }
        h += 8;
      } while (h <= T);
    }
    return h < $ && (v ? this.memory += f.slice(h) : g ? this.memory.set(f.subarray(h, $), this.memsize) : f.copy(this.memory, this.memsize, h, $), this.memsize = $ - h), this;
  }, u.prototype.digest = function() {
    var f = this.memory, v = typeof f == "string", g = 0, h = this.memsize, b, $, w = new e();
    for (this.total_len >= 32 ? (b = this.v1.clone().rotl(1), b.add(this.v2.clone().rotl(7)), b.add(this.v3.clone().rotl(12)), b.add(this.v4.clone().rotl(18)), b.xor(this.v1.multiply(r).rotl(31).multiply(t)), b.multiply(t).add(i), b.xor(this.v2.multiply(r).rotl(31).multiply(t)), b.multiply(t).add(i), b.xor(this.v3.multiply(r).rotl(31).multiply(t)), b.multiply(t).add(i), b.xor(this.v4.multiply(r).rotl(31).multiply(t)), b.multiply(t).add(i)) : b = this.seed.clone().add(s), b.add(w.fromNumber(this.total_len)); g <= h - 8; )
      v ? w.fromBits(
        f.charCodeAt(g + 1) << 8 | f.charCodeAt(g),
        f.charCodeAt(g + 3) << 8 | f.charCodeAt(g + 2),
        f.charCodeAt(g + 5) << 8 | f.charCodeAt(g + 4),
        f.charCodeAt(g + 7) << 8 | f.charCodeAt(g + 6)
      ) : w.fromBits(
        f[g + 1] << 8 | f[g],
        f[g + 3] << 8 | f[g + 2],
        f[g + 5] << 8 | f[g + 4],
        f[g + 7] << 8 | f[g + 6]
      ), w.multiply(r).rotl(31).multiply(t), b.xor(w).rotl(27).multiply(t).add(i), g += 8;
    for (g + 4 <= h && (v ? w.fromBits(
      f.charCodeAt(g + 1) << 8 | f.charCodeAt(g),
      f.charCodeAt(g + 3) << 8 | f.charCodeAt(g + 2),
      0,
      0
    ) : w.fromBits(
      f[g + 1] << 8 | f[g],
      f[g + 3] << 8 | f[g + 2],
      0,
      0
    ), b.xor(w.multiply(t)).rotl(23).multiply(r).add(a), g += 4); g < h; )
      w.fromBits(v ? f.charCodeAt(g++) : f[g++], 0, 0, 0), b.xor(w.multiply(s)).rotl(11).multiply(t);
    return $ = b.clone().shiftRight(33), b.xor($).multiply(r), $ = b.clone().shiftRight(29), b.xor($).multiply(a), $ = b.clone().shiftRight(32), b.xor($), this.init(this.seed), b;
  }, Gc = u, Gc;
}
var qc, Mg;
function V3() {
  return Mg || (Mg = 1, qc = {
    h32: D3(),
    h64: O3()
  }), qc;
}
var H3 = V3();
const B3 = /* @__PURE__ */ Od(H3);
var U3 = Object.create, ks = Object.defineProperty, W3 = Object.getOwnPropertyDescriptor, lf = Object.getOwnPropertyNames, G3 = Object.getPrototypeOf, q3 = Object.prototype.hasOwnProperty, Z3 = (e, t) => function() {
  return e && (t = (0, e[lf(e)[0]])(e = 0)), t;
}, Q3 = (e, t) => function() {
  return t || (0, e[lf(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, X3 = (e, t) => {
  for (var r in t)
    ks(e, r, { get: t[r], enumerable: !0 });
}, Ry = (e, t, r, a) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of lf(t))
      !q3.call(e, i) && i !== r && ks(e, i, { get: () => t[i], enumerable: !(a = W3(t, i)) || a.enumerable });
  return e;
}, Y3 = (e, t, r) => (r = e != null ? U3(G3(e)) : {}, Ry(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  ks(r, "default", { value: e, enumerable: !0 }),
  e
)), J3 = (e) => Ry(ks({}, "__esModule", { value: !0 }), e), Ly = {};
X3(Ly, {
  MODE_VALUES: () => My,
  THEME_VALUES: () => Iy
});
var Iy, My, e8 = Z3({
  "../@paloma-tokens/dist/assets/paloma-theme-mode-values.ts"() {
    Iy = [
      "ea-blue",
      "ea-sims",
      "fc-green",
      "ea-battlefield6",
      // eslint-disable-line perfectionist/sort-union-types
      "purple",
      "red",
      "ea-madden"
    ], My = ["dark", "light"];
  }
}), t8 = Q3({
  "../@paloma-tokens/dist/index.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.THEME_VALUES = e.MODE_VALUES = void 0;
    var t = (e8(), J3(Ly));
    Object.defineProperty(e, "MODE_VALUES", { enumerable: !0, get: function() {
      return t.MODE_VALUES;
    } }), Object.defineProperty(e, "THEME_VALUES", { enumerable: !0, get: function() {
      return t.THEME_VALUES;
    } });
  }
}), Pd = (e) => {
  console.error(`Assertion failed: ${e}`);
}, at = (e, t) => {
  t || Pd("The assert function requires a message."), e || Pd(t);
}, af = (e, t) => {
  e == null && Pd(t);
};
function Ce(e) {
  if (e === void 0)
    return !1;
}
var zn = (e) => {
  Ce() && console.warn(e);
}, n8 = "It seems like you're using the cn function with a single string input. The cn function is designed for handling conditional classes. If you're not dealing with conditional classes, consider using the class directly.", r8 = (e) => !e.startsWith("size"), Ay = {
  override: {
    classGroups: {
      "font-size": [{ "text-size": [P3.isAny] }],
      "font-variant": ["font-variant-none"],
      "text-color": [
        {
          text: [r8]
        }
      ]
    }
  }
}, l8 = Ny(Ay), i8 = /\s\s+/g, a8 = (e) => e.replace(i8, " "), it = (...e) => {
  if (typeof e[0] == "string" && e.length === 1)
    return zn(n8), zn(`cn("${e[0]}")`), e[0];
  const t = l8(qd(...e));
  return a8(t);
};
function o8(e) {
  const t = JSON.stringify(e);
  return B3.h32(t, 84251515).toString();
}
var Z = (e, t) => ua(e, { twMergeConfig: Ay, ...t }), jy = Y3(t8());
jy.MODE_VALUES;
jy.THEME_VALUES;
let Mt = typeof document < "u" && window.visualViewport;
function s8() {
  let e = qr(), [t, r] = S.useState(() => e ? {
    width: 0,
    height: 0
  } : Zc());
  return S.useEffect(() => {
    let a = (u) => {
      r((p) => u.width === p.width && u.height === p.height ? p : u);
    }, i = () => {
      Mt && Mt.scale > 1 || a(Zc());
    }, s, c = (u) => {
      Mt && Mt.scale > 1 || Di(ye(u)) && (s = requestAnimationFrame(() => {
        let p = Oe();
        (!p || !Di(p)) && a({
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight
        });
      }));
    };
    return a(Zc()), vr() && Dn() && window.addEventListener("blur", c, !0), Mt ? Mt.addEventListener("resize", i) : window.addEventListener("resize", i), () => {
      cancelAnimationFrame(s), vr() && Dn() && window.removeEventListener("blur", c, !0), Mt ? Mt.removeEventListener("resize", i) : window.removeEventListener("resize", i);
    };
  }, []), t;
}
function Zc() {
  return {
    // Multiply by the visualViewport scale to get the "natural" size, unaffected by pinch zooming.
    width: Mt ? (
      // the visual viewport and the document element to ensure that the scrollbar width is always excluded.
      // See: https://github.com/w3c/csswg-drafts/issues/8099
      Math.min(Mt.width * Mt.scale, document.documentElement.clientWidth)
    ) : document.documentElement.clientWidth,
    height: Mt ? Mt.height * Mt.scale : document.documentElement.clientHeight
  };
}
function u8(e, t) {
  let { collection: r, onLoadMore: a, scrollOffset: i = 1, direction: s = "end" } = e, c = S.useRef(null), u = hr((p) => {
    for (let f of p)
      f.isIntersecting && a && a();
  });
  Le(() => {
    if (t.current) {
      const p = 100 * i, f = s === "start" ? `${p}% 0px 0px 0px` : `0px ${p}% ${p}% ${p}%`;
      c.current = new IntersectionObserver(u, {
        root: tf(t?.current),
        rootMargin: f
      }), c.current.observe(t.current);
    }
    return () => {
      c.current && c.current.disconnect();
    };
  }, [
    r,
    t,
    i,
    s
  ]);
}
function Fd(e) {
  const t = S.version.split(".");
  return parseInt(t[0], 10) >= 19 ? e : e ? "true" : void 0;
}
function _s(e, t = !0) {
  let [r, a] = S.useState(!0), i = r && t;
  return Le(() => {
    if (i && e.current && "getAnimations" in e.current)
      for (let s of e.current.getAnimations()) s instanceof CSSTransition && s.cancel();
  }, [
    e,
    i
  ]), zy(e, i, S.useCallback(() => a(!1), [])), i;
}
function ls(e, t) {
  let [r, a] = S.useState(t ? "open" : "closed");
  switch (r) {
    case "open":
      t || a("exiting");
      break;
    case "closed":
    case "exiting":
      t && a("open");
      break;
  }
  let i = r === "exiting";
  return zy(e, i, S.useCallback(() => {
    a((s) => s === "exiting" ? "closed" : s);
  }, [])), i;
}
function zy(e, t, r) {
  Le(() => {
    if (t && e.current) {
      if (!("getAnimations" in e.current)) {
        r();
        return;
      }
      let a = e.current.getAnimations();
      if (a.length === 0) {
        r();
        return;
      }
      let i = !1;
      return Promise.allSettled(a.map((s) => s.finished)).then(() => {
        i || sa.flushSync(() => {
          r();
        });
      }), () => {
        i = !0;
      };
    }
  }, [
    e,
    t,
    r
  ]);
}
const c8 = (e) => x.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: [x.jsx("path", { d: "M13.956 16.5927C14.576 16.7806 15 17.3521 15 18L9 18C9 17.3521 9.424 16.7806 10.044 16.5927L12 16L13.956 16.5927Z" }), x.jsx("path", { d: "M14 7H10L12 10L14 7Z" }), x.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5 3H19V5H18V7.0386C18 7.8723 17.7395 8.68515 17.2549 9.36356L15.3718 12L17.2549 14.6364C17.7395 15.3148 18 16.1277 18 16.9614V19H19V21H5V19H6V16.9614C6 16.1277 6.26049 15.3148 6.74507 14.6364L8.62824 12L6.74507 9.36356C6.26049 8.68515 6 7.8723 6 7.0386V5H5V3ZM8 16.9614V19H16V16.9614C16 16.5445 15.8698 16.1381 15.6275 15.7989L12.914 12L15.6275 8.20108C15.8698 7.86188 16 7.45545 16 7.0386V5H8V7.0386C8 7.45545 8.13025 7.86188 8.37253 8.20108L11.086 12L8.37253 15.7989C8.13025 16.1381 8 16.5445 8 16.9614Z" })] }), d8 = ({ children: e, containerClassName: t, emphasis: r, shape: a, size: i }) => {
  const s = typeof i == "number", c = s ? {
    height: i,
    padding: i / 2,
    width: i
  } : void 0, u = s ? void 0 : i;
  return x.jsx("div", { className: Me({
    class: t,
    emphasis: r,
    shape: a,
    size: u
  }), "data-testid": "@paloma-icons-contained-id", style: c, children: e });
}, f8 = ({ "aria-label": e, className: t, color: r, contained: a, containerClassName: i, emphasis: s = "regular", shape: c = "circle", size: u = "medium", svgClassName: p, ...f }) => {
  const v = !e, g = typeof u == "number", h = g ? { height: u, width: u } : void 0, b = g ? void 0 : u, $ = a ? d8 : S.Fragment, w = a ? { containerClassName: i, emphasis: s, shape: c, size: u } : {};
  return x.jsx($, { ...w, children: x.jsx("span", { ...f, className: je({ class: t, size: b }), "data-namespace": "@paloma/icons", "data-size": u, id: "hourglass-fill-id", style: { color: r, ...h }, children: x.jsx(c8, { "aria-hidden": v, "aria-label": e, className: Ie({ class: p, size: b }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "hourglass-fill-svg-id", style: { fill: p8, ...h } }) }) });
}, p8 = "currentColor";
var m8 = S.createContext({}), h8 = (e, t) => {
  const r = e[t];
  return r || t;
};
function Ky(...e) {
  const t = S.useContext(m8);
  return S.useMemo(() => {
    const r = e.map(
      (a) => h8(t, a)
    );
    return r.length === 1 ? r[0] : r;
  }, [e, t]);
}
const g8 = (e) => x.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: [x.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.3531 9.11111C15.3531 10.8293 13.9602 12.2222 12.242 12.2222C10.5238 12.2222 9.13087 10.8293 9.13087 9.11111C9.13087 7.39289 10.5238 6 12.242 6C13.9602 6 15.3531 7.39289 15.3531 9.11111ZM13.3531 9.11111C13.3531 9.72476 12.8556 10.2222 12.242 10.2222C11.6283 10.2222 11.1309 9.72476 11.1309 9.11111C11.1309 8.49746 11.6283 8 12.242 8C12.8556 8 13.3531 8.49746 13.3531 9.11111Z" }), x.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.9608 18.2766C15.5973 19.3557 13.8739 20 12 20C10.3038 20 8.73083 19.4721 7.43653 18.5716L8.20631 15.9544C8.27585 15.7179 8.49284 15.5556 8.73929 15.5556H15.7448C15.9912 15.5556 16.2082 15.7179 16.2778 15.9544L16.9608 18.2766ZM18.5505 16.5937L18.1965 15.39C17.8766 14.3024 16.8784 13.5556 15.7448 13.5556H8.73929C7.60562 13.5556 6.60746 14.3024 6.28758 15.39L5.79821 17.0539C4.67412 15.6761 4 13.9168 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 13.7094 19.4638 15.2937 18.5505 16.5937Z" })] }), v8 = ({ children: e, containerClassName: t, emphasis: r, shape: a, size: i }) => {
  const s = typeof i == "number", c = s ? {
    height: i,
    padding: i / 2,
    width: i
  } : void 0, u = s ? void 0 : i;
  return x.jsx("div", { className: Me({
    class: t,
    emphasis: r,
    shape: a,
    size: u
  }), "data-testid": "@paloma-icons-contained-id", style: c, children: e });
}, of = ({ "aria-label": e, className: t, color: r, contained: a, containerClassName: i, emphasis: s = "regular", shape: c = "circle", size: u = "medium", svgClassName: p, ...f }) => {
  const v = !e, g = typeof u == "number", h = g ? { height: u, width: u } : void 0, b = g ? void 0 : u, $ = a ? v8 : S.Fragment, w = a ? { containerClassName: i, emphasis: s, shape: c, size: u } : {};
  return x.jsx($, { ...w, children: x.jsx("span", { ...f, className: je({ class: t, size: b }), "data-namespace": "@paloma/icons", "data-size": u, id: "account-id", style: { color: r, ...h }, children: x.jsx(g8, { "aria-hidden": v, "aria-label": e, className: Ie({ class: p, size: b }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "account-svg-id", style: { fill: y8, ...h } }) }) });
}, y8 = "currentColor", b8 = (e) => x.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: x.jsx("path", { d: "M11.7071 3.29291L3 12L11.7071 20.7071L13.1213 19.2929L6.82841 13L20 13V11L6.82844 11L13.1213 4.70712L11.7071 3.29291Z" }) }), x8 = ({ children: e, containerClassName: t, emphasis: r, shape: a, size: i }) => {
  const s = typeof i == "number", c = s ? {
    height: i,
    padding: i / 2,
    width: i
  } : void 0, u = s ? void 0 : i;
  return x.jsx("div", { className: Me({
    class: t,
    emphasis: r,
    shape: a,
    size: u
  }), "data-testid": "@paloma-icons-contained-id", style: c, children: e });
}, sf = ({ "aria-label": e, className: t, color: r, contained: a, containerClassName: i, emphasis: s = "regular", shape: c = "circle", size: u = "medium", svgClassName: p, ...f }) => {
  const v = !e, g = typeof u == "number", h = g ? { height: u, width: u } : void 0, b = g ? void 0 : u, $ = a ? x8 : S.Fragment, w = a ? { containerClassName: i, emphasis: s, shape: c, size: u } : {};
  return x.jsx($, { ...w, children: x.jsx("span", { ...f, className: je({ class: t, size: b }), "data-namespace": "@paloma/icons", "data-size": u, id: "arrow-left-id", style: { color: r, ...h }, children: x.jsx(b8, { "aria-hidden": v, "aria-label": e, className: Ie({ class: p, size: b }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "arrow-left-svg-id", style: { fill: w8, ...h } }) }) });
}, w8 = "currentColor", S8 = (e) => x.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: x.jsx("path", { d: "M12.2929 3.29291L21 12L12.2929 20.7071L10.8787 19.2929L17.1716 13H4V11H17.1716L10.8787 4.70712L12.2929 3.29291Z" }) }), C8 = ({ children: e, containerClassName: t, emphasis: r, shape: a, size: i }) => {
  const s = typeof i == "number", c = s ? {
    height: i,
    padding: i / 2,
    width: i
  } : void 0, u = s ? void 0 : i;
  return x.jsx("div", { className: Me({
    class: t,
    emphasis: r,
    shape: a,
    size: u
  }), "data-testid": "@paloma-icons-contained-id", style: c, children: e });
}, Dy = ({ "aria-label": e, className: t, color: r, contained: a, containerClassName: i, emphasis: s = "regular", shape: c = "circle", size: u = "medium", svgClassName: p, ...f }) => {
  const v = !e, g = typeof u == "number", h = g ? { height: u, width: u } : void 0, b = g ? void 0 : u, $ = a ? C8 : S.Fragment, w = a ? { containerClassName: i, emphasis: s, shape: c, size: u } : {};
  return x.jsx($, { ...w, children: x.jsx("span", { ...f, className: je({ class: t, size: b }), "data-namespace": "@paloma/icons", "data-size": u, id: "arrow-right-id", style: { color: r, ...h }, children: x.jsx(S8, { "aria-hidden": v, "aria-label": e, className: Ie({ class: p, size: b }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "arrow-right-svg-id", style: { fill: $8, ...h } }) }) });
}, $8 = "currentColor", E8 = (e) => x.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: x.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 15.9322L17 19.7654L19 21.2986V18.7785V5V3H17H7H5V5V18.7785V21.2986L7 19.7654L12 15.9322ZM7 17.2453L10.7832 14.345L12 13.4121L13.2168 14.345L17 17.2453V5H7V17.2453Z" }) }), k8 = ({ children: e, containerClassName: t, emphasis: r, shape: a, size: i }) => {
  const s = typeof i == "number", c = s ? {
    height: i,
    padding: i / 2,
    width: i
  } : void 0, u = s ? void 0 : i;
  return x.jsx("div", { className: Me({
    class: t,
    emphasis: r,
    shape: a,
    size: u
  }), "data-testid": "@paloma-icons-contained-id", style: c, children: e });
}, _8 = ({ "aria-label": e, className: t, color: r, contained: a, containerClassName: i, emphasis: s = "regular", shape: c = "circle", size: u = "medium", svgClassName: p, ...f }) => {
  const v = !e, g = typeof u == "number", h = g ? { height: u, width: u } : void 0, b = g ? void 0 : u, $ = a ? k8 : S.Fragment, w = a ? { containerClassName: i, emphasis: s, shape: c, size: u } : {};
  return x.jsx($, { ...w, children: x.jsx("span", { ...f, className: je({ class: t, size: b }), "data-namespace": "@paloma/icons", "data-size": u, id: "bookmark-id", style: { color: r, ...h }, children: x.jsx(E8, { "aria-hidden": v, "aria-label": e, className: Ie({ class: p, size: b }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "bookmark-svg-id", style: { fill: N8, ...h } }) }) });
}, N8 = "currentColor", P8 = (e) => x.jsx("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: x.jsx("circle", { cx: 10, cy: 10, r: 5 }) }), F8 = ({ children: e, containerClassName: t, emphasis: r, shape: a, size: i }) => {
  const s = typeof i == "number", c = s ? {
    height: i,
    padding: i / 2,
    width: i
  } : void 0, u = s ? void 0 : i;
  return x.jsx("div", { className: Me({
    class: t,
    emphasis: r,
    shape: a,
    size: u
  }), "data-testid": "@paloma-icons-contained-id", style: c, children: e });
}, T8 = ({ "aria-label": e, className: t, color: r, contained: a, containerClassName: i, emphasis: s = "regular", shape: c = "circle", size: u = "medium", svgClassName: p, ...f }) => {
  const v = !e, g = typeof u == "number", h = g ? { height: u, width: u } : void 0, b = g ? void 0 : u, $ = a ? F8 : S.Fragment, w = a ? { containerClassName: i, emphasis: s, shape: c, size: u } : {};
  return x.jsx($, { ...w, children: x.jsx("span", { ...f, className: je({ class: t, size: b }), "data-namespace": "@paloma/icons", "data-size": u, id: "bullet-id", style: { color: r, ...h }, children: x.jsx(P8, { "aria-hidden": v, "aria-label": e, className: Ie({ class: p, size: b }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "bullet-svg-id", style: { fill: R8, ...h } }) }) });
}, R8 = "currentColor", L8 = (e) => x.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: x.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 13.5857L17.2928 8.29285L18.7071 9.70706L12.7071 15.7071L12 16.4142L11.2928 15.7071L5.29285 9.70706L6.70706 8.29285L12 13.5857Z" }) }), I8 = ({ children: e, containerClassName: t, emphasis: r, shape: a, size: i }) => {
  const s = typeof i == "number", c = s ? {
    height: i,
    padding: i / 2,
    width: i
  } : void 0, u = s ? void 0 : i;
  return x.jsx("div", { className: Me({
    class: t,
    emphasis: r,
    shape: a,
    size: u
  }), "data-testid": "@paloma-icons-contained-id", style: c, children: e });
}, M8 = ({ "aria-label": e, className: t, color: r, contained: a, containerClassName: i, emphasis: s = "regular", shape: c = "circle", size: u = "medium", svgClassName: p, ...f }) => {
  const v = !e, g = typeof u == "number", h = g ? { height: u, width: u } : void 0, b = g ? void 0 : u, $ = a ? I8 : S.Fragment, w = a ? { containerClassName: i, emphasis: s, shape: c, size: u } : {};
  return x.jsx($, { ...w, children: x.jsx("span", { ...f, className: je({ class: t, size: b }), "data-namespace": "@paloma/icons", "data-size": u, id: "carat-down-small-id", style: { color: r, ...h }, children: x.jsx(L8, { "aria-hidden": v, "aria-label": e, className: Ie({ class: p, size: b }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "carat-down-small-svg-id", style: { fill: A8, ...h } }) }) });
}, A8 = "currentColor", j8 = (e) => x.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: [x.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3 4V18L8.33333 14H17V4H3ZM5 6H15V12H7.66667L5 14V6Z" }), x.jsx("path", { d: "M21 9H19V17.5841L16.2361 16H10.0487L7.5 18H15.764L21 21V9Z" })] }), z8 = ({ children: e, containerClassName: t, emphasis: r, shape: a, size: i }) => {
  const s = typeof i == "number", c = s ? {
    height: i,
    padding: i / 2,
    width: i
  } : void 0, u = s ? void 0 : i;
  return x.jsx("div", { className: Me({
    class: t,
    emphasis: r,
    shape: a,
    size: u
  }), "data-testid": "@paloma-icons-contained-id", style: c, children: e });
}, uf = ({ "aria-label": e, className: t, color: r, contained: a, containerClassName: i, emphasis: s = "regular", shape: c = "circle", size: u = "medium", svgClassName: p, ...f }) => {
  const v = !e, g = typeof u == "number", h = g ? { height: u, width: u } : void 0, b = g ? void 0 : u, $ = a ? z8 : S.Fragment, w = a ? { containerClassName: i, emphasis: s, shape: c, size: u } : {};
  return x.jsx($, { ...w, children: x.jsx("span", { ...f, className: je({ class: t, size: b }), "data-namespace": "@paloma/icons", "data-size": u, id: "chat-id", style: { color: r, ...h }, children: x.jsx(j8, { "aria-hidden": v, "aria-label": e, className: Ie({ class: p, size: b }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "chat-svg-id", style: { fill: K8, ...h } }) }) });
}, K8 = "currentColor", D8 = (e) => x.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: [x.jsx("path", { d: "M10.9998 5.99902V12.999H16.9998V10.999H12.9998V5.99902H10.9998Z" }), x.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M21.9998 11.999C21.9998 17.5219 17.5226 21.999 11.9998 21.999C6.47691 21.999 1.99976 17.5219 1.99976 11.999C1.99976 6.47618 6.47691 1.99902 11.9998 1.99902C17.5226 1.99902 21.9998 6.47618 21.9998 11.999ZM19.9998 11.999C19.9998 16.4173 16.418 19.999 11.9998 19.999C7.58148 19.999 3.99976 16.4173 3.99976 11.999C3.99976 7.58075 7.58148 3.99902 11.9998 3.99902C16.418 3.99902 19.9998 7.58075 19.9998 11.999Z" })] }), O8 = ({ children: e, containerClassName: t, emphasis: r, shape: a, size: i }) => {
  const s = typeof i == "number", c = s ? {
    height: i,
    padding: i / 2,
    width: i
  } : void 0, u = s ? void 0 : i;
  return x.jsx("div", { className: Me({
    class: t,
    emphasis: r,
    shape: a,
    size: u
  }), "data-testid": "@paloma-icons-contained-id", style: c, children: e });
}, V8 = ({ "aria-label": e, className: t, color: r, contained: a, containerClassName: i, emphasis: s = "regular", shape: c = "circle", size: u = "medium", svgClassName: p, ...f }) => {
  const v = !e, g = typeof u == "number", h = g ? { height: u, width: u } : void 0, b = g ? void 0 : u, $ = a ? O8 : S.Fragment, w = a ? { containerClassName: i, emphasis: s, shape: c, size: u } : {};
  return x.jsx($, { ...w, children: x.jsx("span", { ...f, className: je({ class: t, size: b }), "data-namespace": "@paloma/icons", "data-size": u, id: "clock-id", style: { color: r, ...h }, children: x.jsx(D8, { "aria-hidden": v, "aria-label": e, className: Ie({ class: p, size: b }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "clock-svg-id", style: { fill: H8, ...h } }) }) });
}, H8 = "currentColor", Oy = (e) => x.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: x.jsx("path", { d: "M11.9988 10.5846L6.41421 5L5 6.41421L10.5846 11.9988L5 17.5834L6.41421 18.9977L11.9988 13.413L17.5834 18.9976L18.9976 17.5834L13.413 11.9988L18.9976 6.41427L17.5834 5.00006L11.9988 10.5846Z" }) }), B8 = ({ children: e, containerClassName: t, emphasis: r, shape: a, size: i }) => {
  const s = typeof i == "number", c = s ? {
    height: i,
    padding: i / 2,
    width: i
  } : void 0, u = s ? void 0 : i;
  return x.jsx("div", { className: Me({
    class: t,
    emphasis: r,
    shape: a,
    size: u
  }), "data-testid": "@paloma-icons-contained-id", style: c, children: e });
}, U8 = ({ "aria-label": e, className: t, color: r, contained: a, containerClassName: i, emphasis: s = "regular", shape: c = "circle", size: u = "medium", svgClassName: p, ...f }) => {
  const v = !e, g = typeof u == "number", h = g ? { height: u, width: u } : void 0, b = g ? void 0 : u, $ = a ? B8 : S.Fragment, w = a ? { containerClassName: i, emphasis: s, shape: c, size: u } : {};
  return x.jsx($, { ...w, children: x.jsx("span", { ...f, className: je({ class: t, size: b }), "data-namespace": "@paloma/icons", "data-size": u, id: "close-id", style: { color: r, ...h }, children: x.jsx(Oy, { "aria-hidden": v, "aria-label": e, className: Ie({ class: p, size: b }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "close-svg-id", style: { fill: W8, ...h } }) }) });
}, W8 = "currentColor", G8 = S.forwardRef(({ "aria-label": e, as: t, className: r, color: a, contained: i = !1, disabled: s, emphasis: c = "regular", onBlur: u, onClick: p, onFocus: f, shape: v = "square", size: g = "medium", svgClassName: h, ...b }, $) => {
  const w = t ?? "button", k = S.useRef(null), { buttonProps: T } = ws({
    elementType: w,
    isDisabled: s,
    onBlur: u,
    onFocus: f,
    onPress: p
  }, k), F = !!(s || !e), H = typeof g == "number", K = H ? { height: g, width: g } : void 0, Y = H && i ? { padding: g / 2 } : void 0, re = H ? void 0 : g, Q = $e(T, b);
  return x.jsx(Z8, { disabled: s, children: x.jsx(w, { "aria-disabled": s, "aria-hidden": F, "aria-label": e, className: Me({
    button: !0,
    class: r,
    emphasis: i && c,
    shape: v,
    size: re
  }), "data-namespace": "@paloma/icons", "data-size": g, id: "close-id", ref: Hn(k, $), style: { color: a, ...Y, ...K }, ...Q, children: x.jsx(Oy, { className: Ie({ class: h, size: re }), "data-testid": "@paloma-icon-button-svg-id", focusable: "false", id: "close-svg-id", style: { fill: q8, ...K } }) }) });
}), q8 = "currentColor", Z8 = ({ children: e, disabled: t, ...r }) => t ? e : x.jsx(kv, { focusRingClass: M3(), ...r, children: e }), Q8 = (e) => x.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: [x.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 4H11V11H4V4ZM6 6H9V9H6V6Z" }), x.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13 4H20V11H13V4ZM15 6H18V9H15V6Z" }), x.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13 13V20H20V13H13ZM18 15H15V18H18V15Z" }), x.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 13H11V20H4V13ZM6 15H9V18H6V15Z" })] }), X8 = ({ children: e, containerClassName: t, emphasis: r, shape: a, size: i }) => {
  const s = typeof i == "number", c = s ? {
    height: i,
    padding: i / 2,
    width: i
  } : void 0, u = s ? void 0 : i;
  return x.jsx("div", { className: Me({
    class: t,
    emphasis: r,
    shape: a,
    size: u
  }), "data-testid": "@paloma-icons-contained-id", style: c, children: e });
}, Y8 = ({ "aria-label": e, className: t, color: r, contained: a, containerClassName: i, emphasis: s = "regular", shape: c = "circle", size: u = "medium", svgClassName: p, ...f }) => {
  const v = !e, g = typeof u == "number", h = g ? { height: u, width: u } : void 0, b = g ? void 0 : u, $ = a ? X8 : S.Fragment, w = a ? { containerClassName: i, emphasis: s, shape: c, size: u } : {};
  return x.jsx($, { ...w, children: x.jsx("span", { ...f, className: je({ class: t, size: b }), "data-namespace": "@paloma/icons", "data-size": u, id: "dashboard-grid-id", style: { color: r, ...h }, children: x.jsx(Q8, { "aria-hidden": v, "aria-label": e, className: Ie({ class: p, size: b }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "dashboard-grid-svg-id", style: { fill: J8, ...h } }) }) });
}, J8 = "currentColor", e5 = (e) => x.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: x.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15 4.00001L20 9.00001L9 20L4 20V15L15 4.00001ZM13.5997 8.23289L15.7671 10.4003L17.1674 9.00001L15 6.83256L13.5997 8.23289ZM14.3509 11.8166L12.1834 9.64916L6.00292 15.8296V17.9971L8.17037 17.9971L14.3509 11.8166Z" }) }), t5 = ({ children: e, containerClassName: t, emphasis: r, shape: a, size: i }) => {
  const s = typeof i == "number", c = s ? {
    height: i,
    padding: i / 2,
    width: i
  } : void 0, u = s ? void 0 : i;
  return x.jsx("div", { className: Me({
    class: t,
    emphasis: r,
    shape: a,
    size: u
  }), "data-testid": "@paloma-icons-contained-id", style: c, children: e });
}, n5 = ({ "aria-label": e, className: t, color: r, contained: a, containerClassName: i, emphasis: s = "regular", shape: c = "circle", size: u = "medium", svgClassName: p, ...f }) => {
  const v = !e, g = typeof u == "number", h = g ? { height: u, width: u } : void 0, b = g ? void 0 : u, $ = a ? t5 : S.Fragment, w = a ? { containerClassName: i, emphasis: s, shape: c, size: u } : {};
  return x.jsx($, { ...w, children: x.jsx("span", { ...f, className: je({ class: t, size: b }), "data-namespace": "@paloma/icons", "data-size": u, id: "edit-id", style: { color: r, ...h }, children: x.jsx(e5, { "aria-hidden": v, "aria-label": e, className: Ie({ class: p, size: b }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "edit-svg-id", style: { fill: r5, ...h } }) }) });
}, r5 = "currentColor", l5 = (e) => x.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: [x.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16 12C16 14.2091 14.2091 16 12 16C9.79087 16 8.00001 14.2091 8.00001 12C8.00001 9.79086 9.79087 8 12 8C14.2091 8 16 9.79086 16 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" }), x.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5C7.70852 5 4.03956 7.69143 2.10589 11.552L1.88159 11.9999L2.10588 12.4477C4.03952 16.3085 7.70854 19 12.0001 19C16.2915 19 19.9605 16.3086 21.8941 12.448L22.1184 12.0001L21.8941 11.5523C19.9605 7.69155 16.2915 5 12 5ZM12.0001 17C8.75575 17 5.83332 15.0562 4.13082 11.9999C5.83333 8.94372 8.75571 7 12 7C15.2443 7 18.1667 8.94381 19.8692 12.0001C18.1667 15.0563 15.2443 17 12.0001 17Z" })] }), i5 = ({ children: e, containerClassName: t, emphasis: r, shape: a, size: i }) => {
  const s = typeof i == "number", c = s ? {
    height: i,
    padding: i / 2,
    width: i
  } : void 0, u = s ? void 0 : i;
  return x.jsx("div", { className: Me({
    class: t,
    emphasis: r,
    shape: a,
    size: u
  }), "data-testid": "@paloma-icons-contained-id", style: c, children: e });
}, Vy = ({ "aria-label": e, className: t, color: r, contained: a, containerClassName: i, emphasis: s = "regular", shape: c = "circle", size: u = "medium", svgClassName: p, ...f }) => {
  const v = !e, g = typeof u == "number", h = g ? { height: u, width: u } : void 0, b = g ? void 0 : u, $ = a ? i5 : S.Fragment, w = a ? { containerClassName: i, emphasis: s, shape: c, size: u } : {};
  return x.jsx($, { ...w, children: x.jsx("span", { ...f, className: je({ class: t, size: b }), "data-namespace": "@paloma/icons", "data-size": u, id: "eye-id", style: { color: r, ...h }, children: x.jsx(l5, { "aria-hidden": v, "aria-label": e, className: Ie({ class: p, size: b }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "eye-svg-id", style: { fill: a5, ...h } }) }) });
}, a5 = "currentColor", o5 = (e) => x.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: x.jsx("path", { d: "M13.3 13.35H15.55L16.45 9.75H13.3V7.95C13.3 7.023 13.3 6.15 15.1 6.15H16.45V3.126C16.1566 3.0873 15.0487 3 13.8787 3C11.4352 3 9.7 4.4913 9.7 7.23V9.75H7V13.35H9.7V21H13.3V13.35Z" }) }), s5 = ({ children: e, containerClassName: t, emphasis: r, shape: a, size: i }) => {
  const s = typeof i == "number", c = s ? {
    height: i,
    padding: i / 2,
    width: i
  } : void 0, u = s ? void 0 : i;
  return x.jsx("div", { className: Me({
    class: t,
    emphasis: r,
    shape: a,
    size: u
  }), "data-testid": "@paloma-icons-contained-id", style: c, children: e });
}, u5 = ({ "aria-label": e, className: t, color: r, contained: a, containerClassName: i, emphasis: s = "regular", shape: c = "circle", size: u = "medium", svgClassName: p, ...f }) => {
  const v = !e, g = typeof u == "number", h = g ? { height: u, width: u } : void 0, b = g ? void 0 : u, $ = a ? s5 : S.Fragment, w = a ? { containerClassName: i, emphasis: s, shape: c, size: u } : {};
  return x.jsx($, { ...w, children: x.jsx("span", { ...f, className: je({ class: t, size: b }), "data-namespace": "@paloma/icons", "data-size": u, id: "facebook-id", style: { color: r, ...h }, children: x.jsx(o5, { "aria-hidden": v, "aria-label": e, className: Ie({ class: p, size: b }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "facebook-svg-id", style: { fill: c5, ...h } }) }) });
}, c5 = "currentColor", d5 = (e) => x.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: [x.jsx("path", { d: "M16 8V4H18V5H21V7H18V8H16Z" }), x.jsx("path", { d: "M13 7L3 7V5L13 5V7Z" }), x.jsx("path", { d: "M6 13V14H8V10H6V11H3V13H6Z" }), x.jsx("path", { d: "M21 13L10 13V11L21 11V13Z" }), x.jsx("path", { d: "M21 19V17L15 17V19L21 19Z" }), x.jsx("path", { d: "M11 17V16H13V20H11V19H3V17H11Z" })] }), f5 = ({ children: e, containerClassName: t, emphasis: r, shape: a, size: i }) => {
  const s = typeof i == "number", c = s ? {
    height: i,
    padding: i / 2,
    width: i
  } : void 0, u = s ? void 0 : i;
  return x.jsx("div", { className: Me({
    class: t,
    emphasis: r,
    shape: a,
    size: u
  }), "data-testid": "@paloma-icons-contained-id", style: c, children: e });
}, p5 = ({ "aria-label": e, className: t, color: r, contained: a, containerClassName: i, emphasis: s = "regular", shape: c = "circle", size: u = "medium", svgClassName: p, ...f }) => {
  const v = !e, g = typeof u == "number", h = g ? { height: u, width: u } : void 0, b = g ? void 0 : u, $ = a ? f5 : S.Fragment, w = a ? { containerClassName: i, emphasis: s, shape: c, size: u } : {};
  return x.jsx($, { ...w, children: x.jsx("span", { ...f, className: je({ class: t, size: b }), "data-namespace": "@paloma/icons", "data-size": u, id: "filter-sliders-horizontal-id", style: { color: r, ...h }, children: x.jsx(d5, { "aria-hidden": v, "aria-label": e, className: Ie({ class: p, size: b }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "filter-sliders-horizontal-svg-id", style: { fill: m5, ...h } }) }) });
}, m5 = "currentColor", h5 = (e) => x.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: x.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1295 4.69761C10.9271 3.53768 12.0025 3 12.0025 3C12.0025 3.90396 12.113 4.63258 12.3039 5.23184C12.834 6.89546 13.9843 7.56222 15.1128 8.21633C15.7159 8.56593 16.3128 8.91192 16.8055 9.40456C18.0347 10.6337 18.7949 12.3319 18.7949 14.2075C18.7949 17.9589 15.7538 21 12.0025 21C8.25111 21 5.21002 17.9589 5.21002 14.2075C5.21002 13.3993 5.35117 12.6241 5.61017 11.9052C5.64152 11.8181 5.6746 11.7319 5.70936 11.6466C6.05391 10.8008 6.56404 10.04 7.19949 9.40456C7.19949 9.40456 7.19949 10.8943 7.79283 11.9144C8.1017 12.4453 8.57135 12.8491 9.28549 12.8491V14.8491C8.42013 14.8491 7.74079 14.5897 7.21002 14.2091C7.21088 16.8552 9.35621 19 12.0025 19C14.6493 19 16.7949 16.8543 16.7949 14.2075C16.7949 12.8836 16.2607 11.6882 15.3913 10.8188C15.1535 10.581 14.8351 10.3697 14.3095 10.0627C14.251 10.0285 14.1887 9.9925 14.123 9.95459C13.667 9.6911 13.0538 9.33686 12.4972 8.89017C12.0708 8.5479 11.6547 8.13718 11.2883 7.62797C11.3138 8.55774 11.5047 8.8105 11.5722 8.89993C11.576 8.90484 11.5793 8.90927 11.5822 8.91328C11.5875 8.92049 11.6003 8.9349 11.6193 8.95626C11.8125 9.17327 12.644 10.1073 12.644 11.4906C12.644 12.1802 12.4658 12.8303 12.0958 13.3853C11.7341 13.9279 11.2662 14.2646 10.8592 14.4681C10.4599 14.6677 10.0849 14.7576 9.82656 14.8006C9.69265 14.8229 9.57668 14.8349 9.48636 14.8413C9.44086 14.8446 9.40092 14.8465 9.36738 14.8476C9.35058 14.8482 9.3353 14.8485 9.32164 14.8488L9.30235 14.849L9.29362 14.849L9.28948 14.8491L9.28747 14.8491C9.28648 14.8491 9.28549 14.8491 9.28549 12.8491C9.28549 12.8491 10.644 12.8491 10.644 11.4906C10.644 10.9472 10.4266 10.6755 10.1658 10.3494C9.77455 9.86038 9.28549 9.24906 9.28549 7.41509C9.28549 6.28146 9.65922 5.38141 10.1295 4.69761Z" }) }), g5 = ({ children: e, containerClassName: t, emphasis: r, shape: a, size: i }) => {
  const s = typeof i == "number", c = s ? {
    height: i,
    padding: i / 2,
    width: i
  } : void 0, u = s ? void 0 : i;
  return x.jsx("div", { className: Me({
    class: t,
    emphasis: r,
    shape: a,
    size: u
  }), "data-testid": "@paloma-icons-contained-id", style: c, children: e });
}, v5 = ({ "aria-label": e, className: t, color: r, contained: a, containerClassName: i, emphasis: s = "regular", shape: c = "circle", size: u = "medium", svgClassName: p, ...f }) => {
  const v = !e, g = typeof u == "number", h = g ? { height: u, width: u } : void 0, b = g ? void 0 : u, $ = a ? g5 : S.Fragment, w = a ? { containerClassName: i, emphasis: s, shape: c, size: u } : {};
  return x.jsx($, { ...w, children: x.jsx("span", { ...f, className: je({ class: t, size: b }), "data-namespace": "@paloma/icons", "data-size": u, id: "fire-id", style: { color: r, ...h }, children: x.jsx(h5, { "aria-hidden": v, "aria-label": e, className: Ie({ class: p, size: b }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "fire-svg-id", style: { fill: y5, ...h } }) }) });
}, y5 = "currentColor", b5 = (e) => x.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: [x.jsx("path", { d: "M8.39037 12.8261H10.0904V11.1992H11.7172V9.49919H10.0904V7.87232H8.39037V9.49919H6.76349V11.1992H8.39037V12.8261Z" }), x.jsx("path", { d: "M15.5 9.5C15.5 8.94772 15.0523 8.5 14.5 8.5C13.9477 8.5 13.5 8.94772 13.5 9.5C13.5 10.0523 13.9477 10.5 14.5 10.5C15.0523 10.5 15.5 10.0523 15.5 9.5Z" }), x.jsx("path", { d: "M16.5018 10.5C17.0541 10.5 17.5018 10.9477 17.5018 11.5C17.5018 12.0523 17.0541 12.5 16.5018 12.5C15.9495 12.5 15.5018 12.0523 15.5018 11.5C15.5018 10.9477 15.9495 10.5 16.5018 10.5Z" }), x.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.4485 4.60107H7.76677C5.70899 4.60107 3.95898 6.10244 3.64608 8.13629L2.42808 16.0533C2.08514 18.2824 4.79754 19.6455 6.38162 18.0402L8.39586 15.9989H15.4742L17.9466 18.226C19.571 19.6893 22.1337 18.3056 21.8013 16.1447L20.5692 8.13629C20.2563 6.10244 18.5063 4.60107 16.4485 4.60107ZM5.62282 8.44041L4.40482 16.3574C4.35684 16.6693 4.73636 16.8601 4.95801 16.6354L7.2411 14.3217C7.4449 14.1152 7.72295 13.9989 8.01311 13.9989H15.8257C16.0938 13.9989 16.3524 14.0982 16.5516 14.2777L19.2852 16.7401C19.5125 16.9448 19.871 16.7512 19.8245 16.4488L18.5925 8.44041C18.4297 7.38222 17.5192 6.60107 16.4485 6.60107H7.76677C6.69613 6.60107 5.78562 7.38222 5.62282 8.44041Z" })] }), x5 = ({ children: e, containerClassName: t, emphasis: r, shape: a, size: i }) => {
  const s = typeof i == "number", c = s ? {
    height: i,
    padding: i / 2,
    width: i
  } : void 0, u = s ? void 0 : i;
  return x.jsx("div", { className: Me({
    class: t,
    emphasis: r,
    shape: a,
    size: u
  }), "data-testid": "@paloma-icons-contained-id", style: c, children: e });
}, w5 = ({ "aria-label": e, className: t, color: r, contained: a, containerClassName: i, emphasis: s = "regular", shape: c = "circle", size: u = "medium", svgClassName: p, ...f }) => {
  const v = !e, g = typeof u == "number", h = g ? { height: u, width: u } : void 0, b = g ? void 0 : u, $ = a ? x5 : S.Fragment, w = a ? { containerClassName: i, emphasis: s, shape: c, size: u } : {};
  return x.jsx($, { ...w, children: x.jsx("span", { ...f, className: je({ class: t, size: b }), "data-namespace": "@paloma/icons", "data-size": u, id: "game-id", style: { color: r, ...h }, children: x.jsx(b5, { "aria-hidden": v, "aria-label": e, className: Ie({ class: p, size: b }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "game-svg-id", style: { fill: S5, ...h } }) }) });
}, S5 = "currentColor", C5 = (e) => x.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: [x.jsx("path", { d: "M10 14V16H14V14H10Z" }), x.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3 10.024L12 3L21 10.024V21H3V10.024ZM12 5.50098L19 10.976V19H5V10.976L12 5.50098Z" })] }), $5 = ({ children: e, containerClassName: t, emphasis: r, shape: a, size: i }) => {
  const s = typeof i == "number", c = s ? {
    height: i,
    padding: i / 2,
    width: i
  } : void 0, u = s ? void 0 : i;
  return x.jsx("div", { className: Me({
    class: t,
    emphasis: r,
    shape: a,
    size: u
  }), "data-testid": "@paloma-icons-contained-id", style: c, children: e });
}, Hy = ({ "aria-label": e, className: t, color: r, contained: a, containerClassName: i, emphasis: s = "regular", shape: c = "circle", size: u = "medium", svgClassName: p, ...f }) => {
  const v = !e, g = typeof u == "number", h = g ? { height: u, width: u } : void 0, b = g ? void 0 : u, $ = a ? $5 : S.Fragment, w = a ? { containerClassName: i, emphasis: s, shape: c, size: u } : {};
  return x.jsx($, { ...w, children: x.jsx("span", { ...f, className: je({ class: t, size: b }), "data-namespace": "@paloma/icons", "data-size": u, id: "home-id", style: { color: r, ...h }, children: x.jsx(C5, { "aria-hidden": v, "aria-label": e, className: Ie({ class: p, size: b }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "home-svg-id", style: { fill: E5, ...h } }) }) });
}, E5 = "currentColor", k5 = (e) => x.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: x.jsx("path", { d: "M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" }) }), _5 = ({ children: e, containerClassName: t, emphasis: r, shape: a, size: i }) => {
  const s = typeof i == "number", c = s ? {
    height: i,
    padding: i / 2,
    width: i
  } : void 0, u = s ? void 0 : i;
  return x.jsx("div", { className: Me({
    class: t,
    emphasis: r,
    shape: a,
    size: u
  }), "data-testid": "@paloma-icons-contained-id", style: c, children: e });
}, N5 = ({ "aria-label": e, className: t, color: r, contained: a, containerClassName: i, emphasis: s = "regular", shape: c = "circle", size: u = "medium", svgClassName: p, ...f }) => {
  const v = !e, g = typeof u == "number", h = g ? { height: u, width: u } : void 0, b = g ? void 0 : u, $ = a ? _5 : S.Fragment, w = a ? { containerClassName: i, emphasis: s, shape: c, size: u } : {};
  return x.jsx($, { ...w, children: x.jsx("span", { ...f, className: je({ class: t, size: b }), "data-namespace": "@paloma/icons", "data-size": u, id: "instagram-id", style: { color: r, ...h }, children: x.jsx(k5, { "aria-hidden": v, "aria-label": e, className: Ie({ class: p, size: b }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "instagram-svg-id", style: { fill: P5, ...h } }) }) });
}, P5 = "currentColor", F5 = (e) => x.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: [x.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2C8.15914 2 5 5.06721 5 8.88C5 11.1787 6.13185 12.4679 7.02426 13.4843L7.04788 13.5113L7.04867 13.5122C7.33781 13.843 7.60874 14.1537 7.86623 14.4997C7.88365 14.5588 7.90541 14.6502 7.92658 14.7698C7.96944 15.012 8 15.3137 8 15.6V18H16V15.6C16 15.3155 16.0313 15.014 16.075 14.7708C16.0968 14.6494 16.1192 14.5565 16.1371 14.4965L16.1379 14.4941C16.3927 14.1455 16.665 13.8327 16.9593 13.4948L16.9875 13.4624C17.8734 12.4462 19 11.1538 19 8.88C19 5.06721 15.8409 2 12 2ZM7 8.88C7 6.20967 9.22543 4 12 4C14.7746 4 17 6.20967 17 8.88C17 10.3769 16.327 11.1762 15.4513 12.1811L15.4288 12.2068C15.129 12.5511 14.7857 12.9453 14.4596 13.4019L14.4574 13.405C14.3253 13.5915 14.2557 13.8074 14.2209 13.9239C14.176 14.074 14.1377 14.2433 14.1065 14.417C14.0442 14.764 14 15.1845 14 15.6V16H10V15.6C10 15.1863 9.95727 14.7677 9.89599 14.4213C9.86533 14.248 9.82755 14.0788 9.78287 13.9283C9.74821 13.8117 9.67843 13.594 9.54412 13.4057L9.53869 13.3981C9.20863 12.9444 8.86653 12.5529 8.56583 12.2089L8.55383 12.1951L8.55239 12.1935C7.67595 11.195 7 10.3985 7 8.88Z" }), x.jsx("path", { d: "M15 22V20H9V22H15Z" })] }), T5 = ({ children: e, containerClassName: t, emphasis: r, shape: a, size: i }) => {
  const s = typeof i == "number", c = s ? {
    height: i,
    padding: i / 2,
    width: i
  } : void 0, u = s ? void 0 : i;
  return x.jsx("div", { className: Me({
    class: t,
    emphasis: r,
    shape: a,
    size: u
  }), "data-testid": "@paloma-icons-contained-id", style: c, children: e });
}, R5 = ({ "aria-label": e, className: t, color: r, contained: a, containerClassName: i, emphasis: s = "regular", shape: c = "circle", size: u = "medium", svgClassName: p, ...f }) => {
  const v = !e, g = typeof u == "number", h = g ? { height: u, width: u } : void 0, b = g ? void 0 : u, $ = a ? T5 : S.Fragment, w = a ? { containerClassName: i, emphasis: s, shape: c, size: u } : {};
  return x.jsx($, { ...w, children: x.jsx("span", { ...f, className: je({ class: t, size: b }), "data-namespace": "@paloma/icons", "data-size": u, id: "lightbulb-id", style: { color: r, ...h }, children: x.jsx(F5, { "aria-hidden": v, "aria-label": e, className: Ie({ class: p, size: b }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "lightbulb-svg-id", style: { fill: L5, ...h } }) }) });
}, L5 = "currentColor", I5 = (e) => x.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: x.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.5696 3.15546C12.6772 2.26303 11.1914 2.41015 10.4913 3.46028L7.46479 8.00008H3V20.0001L17.1949 20C18.0901 20 18.895 19.4551 19.2275 18.6239L19.2849 18.4804C20.4179 15.6479 21 12.6252 21 9.57453C21 8.70496 20.2951 8.00004 19.4255 8.00004H15V5.82847C15 5.03282 14.6839 4.26976 14.1213 3.70715L13.5696 3.15546ZM7 18.0001V10.0001H5V18.0001H7ZM9 18H17.1949C17.2723 18 17.3418 17.953 17.3705 17.8812L17.4279 17.7376C18.4137 15.2731 18.9445 12.6516 18.9959 10H13V5.82847C13 5.56325 12.8946 5.3089 12.7071 5.12136L12.1554 4.56968L9 9.30281V18Z" }) }), M5 = ({ children: e, containerClassName: t, emphasis: r, shape: a, size: i }) => {
  const s = typeof i == "number", c = s ? {
    height: i,
    padding: i / 2,
    width: i
  } : void 0, u = s ? void 0 : i;
  return x.jsx("div", { className: Me({
    class: t,
    emphasis: r,
    shape: a,
    size: u
  }), "data-testid": "@paloma-icons-contained-id", style: c, children: e });
}, By = ({ "aria-label": e, className: t, color: r, contained: a, containerClassName: i, emphasis: s = "regular", shape: c = "circle", size: u = "medium", svgClassName: p, ...f }) => {
  const v = !e, g = typeof u == "number", h = g ? { height: u, width: u } : void 0, b = g ? void 0 : u, $ = a ? M5 : S.Fragment, w = a ? { containerClassName: i, emphasis: s, shape: c, size: u } : {};
  return x.jsx($, { ...w, children: x.jsx("span", { ...f, className: je({ class: t, size: b }), "data-namespace": "@paloma/icons", "data-size": u, id: "like-id", style: { color: r, ...h }, children: x.jsx(I5, { "aria-hidden": v, "aria-label": e, className: Ie({ class: p, size: b }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "like-svg-id", style: { fill: A5, ...h } }) }) });
}, A5 = "currentColor", j5 = (e) => x.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: [x.jsx("path", { d: "M4 8V6H6V8H4Z" }), x.jsx("path", { d: "M4 13V11H6V13H4Z" }), x.jsx("path", { d: "M4 18V16H6V18H4Z" }), x.jsx("path", { d: "M8 8V6H20V8H8Z" }), x.jsx("path", { d: "M8 13V11H20V13H8Z" }), x.jsx("path", { d: "M8 18V16H20V18H8Z" })] }), z5 = ({ children: e, containerClassName: t, emphasis: r, shape: a, size: i }) => {
  const s = typeof i == "number", c = s ? {
    height: i,
    padding: i / 2,
    width: i
  } : void 0, u = s ? void 0 : i;
  return x.jsx("div", { className: Me({
    class: t,
    emphasis: r,
    shape: a,
    size: u
  }), "data-testid": "@paloma-icons-contained-id", style: c, children: e });
}, K5 = ({ "aria-label": e, className: t, color: r, contained: a, containerClassName: i, emphasis: s = "regular", shape: c = "circle", size: u = "medium", svgClassName: p, ...f }) => {
  const v = !e, g = typeof u == "number", h = g ? { height: u, width: u } : void 0, b = g ? void 0 : u, $ = a ? z5 : S.Fragment, w = a ? { containerClassName: i, emphasis: s, shape: c, size: u } : {};
  return x.jsx($, { ...w, children: x.jsx("span", { ...f, className: je({ class: t, size: b }), "data-namespace": "@paloma/icons", "data-size": u, id: "list-id", style: { color: r, ...h }, children: x.jsx(j5, { "aria-hidden": v, "aria-label": e, className: Ie({ class: p, size: b }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "list-svg-id", style: { fill: D5, ...h } }) }) });
}, D5 = "currentColor", O5 = (e) => x.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: [x.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10Z" }), x.jsx("path", { d: "M16.3287 17.743C16.8458 17.3198 17.3198 16.8459 17.7429 16.3287L21.7069 20.2928L20.2927 21.707L16.3287 17.743Z" })] }), V5 = ({ children: e, containerClassName: t, emphasis: r, shape: a, size: i }) => {
  const s = typeof i == "number", c = s ? {
    height: i,
    padding: i / 2,
    width: i
  } : void 0, u = s ? void 0 : i;
  return x.jsx("div", { className: Me({
    class: t,
    emphasis: r,
    shape: a,
    size: u
  }), "data-testid": "@paloma-icons-contained-id", style: c, children: e });
}, Ml = ({ "aria-label": e, className: t, color: r, contained: a, containerClassName: i, emphasis: s = "regular", shape: c = "circle", size: u = "medium", svgClassName: p, ...f }) => {
  const v = !e, g = typeof u == "number", h = g ? { height: u, width: u } : void 0, b = g ? void 0 : u, $ = a ? V5 : S.Fragment, w = a ? { containerClassName: i, emphasis: s, shape: c, size: u } : {};
  return x.jsx($, { ...w, children: x.jsx("span", { ...f, className: je({ class: t, size: b }), "data-namespace": "@paloma/icons", "data-size": u, id: "search-id", style: { color: r, ...h }, children: x.jsx(O5, { "aria-hidden": v, "aria-label": e, className: Ie({ class: p, size: b }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "search-svg-id", style: { fill: H5, ...h } }) }) });
}, H5 = "currentColor", B5 = (e) => x.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: x.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.00098 8.65685L8.65783 8.65685V6.65685L5.35201 6.65685C6.45327 5.34411 8.10548 4.51074 9.95108 4.51074C13.2648 4.51074 15.9511 7.19703 15.9511 10.5107C15.9511 13.8245 13.2648 16.5107 9.95108 16.5107C6.97154 16.5107 4.49756 14.3379 4.03051 11.4904L2.05688 11.8141C2.67991 15.6127 5.97609 18.5107 9.95108 18.5107C14.3694 18.5107 17.9511 14.929 17.9511 10.5107C17.9511 6.09246 14.3694 2.51074 9.95108 2.51074C7.58771 2.51074 5.46483 3.5355 4.00098 5.16336L4.00098 2H2.00098V7.65685V8.65685H3.00098ZM16.2798 18.2536C16.7969 17.8304 17.2709 17.3565 17.694 16.8394L21.658 20.8034L20.2438 22.2176L16.2798 18.2536Z" }) }), U5 = ({ children: e, containerClassName: t, emphasis: r, shape: a, size: i }) => {
  const s = typeof i == "number", c = s ? {
    height: i,
    padding: i / 2,
    width: i
  } : void 0, u = s ? void 0 : i;
  return x.jsx("div", { className: Me({
    class: t,
    emphasis: r,
    shape: a,
    size: u
  }), "data-testid": "@paloma-icons-contained-id", style: c, children: e });
}, W5 = ({ "aria-label": e, className: t, color: r, contained: a, containerClassName: i, emphasis: s = "regular", shape: c = "circle", size: u = "medium", svgClassName: p, ...f }) => {
  const v = !e, g = typeof u == "number", h = g ? { height: u, width: u } : void 0, b = g ? void 0 : u, $ = a ? U5 : S.Fragment, w = a ? { containerClassName: i, emphasis: s, shape: c, size: u } : {};
  return x.jsx($, { ...w, children: x.jsx("span", { ...f, className: je({ class: t, size: b }), "data-namespace": "@paloma/icons", "data-size": u, id: "search-recent-id", style: { color: r, ...h }, children: x.jsx(B5, { "aria-hidden": v, "aria-label": e, className: Ie({ class: p, size: b }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "search-recent-svg-id", style: { fill: G5, ...h } }) }) });
}, G5 = "currentColor", q5 = (e) => x.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: x.jsx("path", { d: "M14 6V8H18.5858L13 13.5858L9.00001 9.58579L1.29291 17.2929L2.70712 18.7071L9.00001 12.4142L13 16.4142L20 9.41423V14H22V6H14Z" }) }), Z5 = ({ children: e, containerClassName: t, emphasis: r, shape: a, size: i }) => {
  const s = typeof i == "number", c = s ? {
    height: i,
    padding: i / 2,
    width: i
  } : void 0, u = s ? void 0 : i;
  return x.jsx("div", { className: Me({
    class: t,
    emphasis: r,
    shape: a,
    size: u
  }), "data-testid": "@paloma-icons-contained-id", style: c, children: e });
}, Uy = ({ "aria-label": e, className: t, color: r, contained: a, containerClassName: i, emphasis: s = "regular", shape: c = "circle", size: u = "medium", svgClassName: p, ...f }) => {
  const v = !e, g = typeof u == "number", h = g ? { height: u, width: u } : void 0, b = g ? void 0 : u, $ = a ? Z5 : S.Fragment, w = a ? { containerClassName: i, emphasis: s, shape: c, size: u } : {};
  return x.jsx($, { ...w, children: x.jsx("span", { ...f, className: je({ class: t, size: b }), "data-namespace": "@paloma/icons", "data-size": u, id: "trend-up-id", style: { color: r, ...h }, children: x.jsx(q5, { "aria-hidden": v, "aria-label": e, className: Ie({ class: p, size: b }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "trend-up-svg-id", style: { fill: Q5, ...h } }) }) });
}, Q5 = "currentColor", X5 = (e) => x.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: x.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 3H18V5H21V9.50989C21 10.8362 20.1291 12.0051 18.8583 12.3845L17.2778 12.8564C16.4141 14.4489 14.8507 15.6066 13 15.917V18H14V20H16V22H8V20H10V18H11V15.917C9.1317 15.6036 7.55618 14.4267 6.69776 12.8108L5.17584 12.376C3.88793 12.008 3 10.8308 3 9.4914V5H6V3ZM8 5H16V10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10V5ZM17.9741 10.5612L18.2861 10.4681C18.7097 10.3416 19 9.95199 19 9.50989V7H18V10C18 10.1893 17.9912 10.3765 17.9741 10.5612ZM6 10C6 10.1814 6.00805 10.3609 6.02381 10.5382L5.72528 10.4529C5.29598 10.3303 5 9.93788 5 9.4914V7H6V10Z" }) }), Y5 = ({ children: e, containerClassName: t, emphasis: r, shape: a, size: i }) => {
  const s = typeof i == "number", c = s ? {
    height: i,
    padding: i / 2,
    width: i
  } : void 0, u = s ? void 0 : i;
  return x.jsx("div", { className: Me({
    class: t,
    emphasis: r,
    shape: a,
    size: u
  }), "data-testid": "@paloma-icons-contained-id", style: c, children: e });
}, J5 = ({ "aria-label": e, className: t, color: r, contained: a, containerClassName: i, emphasis: s = "regular", shape: c = "circle", size: u = "medium", svgClassName: p, ...f }) => {
  const v = !e, g = typeof u == "number", h = g ? { height: u, width: u } : void 0, b = g ? void 0 : u, $ = a ? Y5 : S.Fragment, w = a ? { containerClassName: i, emphasis: s, shape: c, size: u } : {};
  return x.jsx($, { ...w, children: x.jsx("span", { ...f, className: je({ class: t, size: b }), "data-namespace": "@paloma/icons", "data-size": u, id: "trophy-id", style: { color: r, ...h }, children: x.jsx(X5, { "aria-hidden": v, "aria-label": e, className: Ie({ class: p, size: b }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "trophy-svg-id", style: { fill: e6, ...h } }) }) });
}, e6 = "currentColor", t6 = (e) => x.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: x.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.60314 3L3.39377 6.08953V18.7163H7.69239V21H10.1103L12.394 18.7163H15.8866L20.588 14.0149V3H4.60314ZM18.9761 13.2094L16.2891 15.8953H11.9907L9.70699 18.1791V15.8953H6.08027V4.61156H18.9756V13.2094H18.9761ZM16.2891 7.70138V12.4028H14.6775V7.70138H16.2891ZM11.9905 7.70138V12.4028H10.3789V7.70138H11.9905Z" }) }), n6 = ({ children: e, containerClassName: t, emphasis: r, shape: a, size: i }) => {
  const s = typeof i == "number", c = s ? {
    height: i,
    padding: i / 2,
    width: i
  } : void 0, u = s ? void 0 : i;
  return x.jsx("div", { className: Me({
    class: t,
    emphasis: r,
    shape: a,
    size: u
  }), "data-testid": "@paloma-icons-contained-id", style: c, children: e });
}, r6 = ({ "aria-label": e, className: t, color: r, contained: a, containerClassName: i, emphasis: s = "regular", shape: c = "circle", size: u = "medium", svgClassName: p, ...f }) => {
  const v = !e, g = typeof u == "number", h = g ? { height: u, width: u } : void 0, b = g ? void 0 : u, $ = a ? n6 : S.Fragment, w = a ? { containerClassName: i, emphasis: s, shape: c, size: u } : {};
  return x.jsx($, { ...w, children: x.jsx("span", { ...f, className: je({ class: t, size: b }), "data-namespace": "@paloma/icons", "data-size": u, id: "twitch-id", style: { color: r, ...h }, children: x.jsx(t6, { "aria-hidden": v, "aria-label": e, className: Ie({ class: p, size: b }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "twitch-svg-id", style: { fill: l6, ...h } }) }) });
}, l6 = "currentColor", i6 = (e) => x.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: [x.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z" }), x.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.49653 13C6.16571 13 4.99395 13.8768 4.61844 15.1535L2.89888 21H21.1012L19.3817 15.1535C19.0062 13.8768 17.8344 13 16.5036 13H7.49653ZM6.53717 15.7178C6.66234 15.2923 7.05292 15 7.49653 15H16.5036C16.9472 15 17.3378 15.2923 17.4629 15.7178L18.4283 19H5.57182L6.53717 15.7178Z" })] }), a6 = ({ children: e, containerClassName: t, emphasis: r, shape: a, size: i }) => {
  const s = typeof i == "number", c = s ? {
    height: i,
    padding: i / 2,
    width: i
  } : void 0, u = s ? void 0 : i;
  return x.jsx("div", { className: Me({
    class: t,
    emphasis: r,
    shape: a,
    size: u
  }), "data-testid": "@paloma-icons-contained-id", style: c, children: e });
}, o6 = ({ "aria-label": e, className: t, color: r, contained: a, containerClassName: i, emphasis: s = "regular", shape: c = "circle", size: u = "medium", svgClassName: p, ...f }) => {
  const v = !e, g = typeof u == "number", h = g ? { height: u, width: u } : void 0, b = g ? void 0 : u, $ = a ? a6 : S.Fragment, w = a ? { containerClassName: i, emphasis: s, shape: c, size: u } : {};
  return x.jsx($, { ...w, children: x.jsx("span", { ...f, className: je({ class: t, size: b }), "data-namespace": "@paloma/icons", "data-size": u, id: "user-id", style: { color: r, ...h }, children: x.jsx(i6, { "aria-hidden": v, "aria-label": e, className: Ie({ class: p, size: b }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "user-svg-id", style: { fill: s6, ...h } }) }) });
}, s6 = "currentColor", u6 = (e) => x.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: x.jsx("path", { d: "M4.03893 4L10.2163 12.2734L4 19H5.39916L10.8417 13.1106L15.2389 19H20L13.4749 10.2614L19.2611 4H17.8619L12.8498 9.42386L8.8 4H4.03893ZM6.09646 5.03222H8.28367L17.9422 17.9678H15.755L6.09646 5.03222Z" }) }), c6 = ({ children: e, containerClassName: t, emphasis: r, shape: a, size: i }) => {
  const s = typeof i == "number", c = s ? {
    height: i,
    padding: i / 2,
    width: i
  } : void 0, u = s ? void 0 : i;
  return x.jsx("div", { className: Me({
    class: t,
    emphasis: r,
    shape: a,
    size: u
  }), "data-testid": "@paloma-icons-contained-id", style: c, children: e });
}, d6 = ({ "aria-label": e, className: t, color: r, contained: a, containerClassName: i, emphasis: s = "regular", shape: c = "circle", size: u = "medium", svgClassName: p, ...f }) => {
  const v = !e, g = typeof u == "number", h = g ? { height: u, width: u } : void 0, b = g ? void 0 : u, $ = a ? c6 : S.Fragment, w = a ? { containerClassName: i, emphasis: s, shape: c, size: u } : {};
  return x.jsx($, { ...w, children: x.jsx("span", { ...f, className: je({ class: t, size: b }), "data-namespace": "@paloma/icons", "data-size": u, id: "x-id", style: { color: r, ...h }, children: x.jsx(u6, { "aria-hidden": v, "aria-label": e, className: Ie({ class: p, size: b }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "x-svg-id", style: { fill: f6, ...h } }) }) });
}, f6 = "currentColor", p6 = (e) => x.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: [x.jsx("path", { d: "M10 15L15.19 12L10 9V15Z" }), x.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 4H11.9811L10.3911 4.06C9.27923 4.06035 8.07887 4.09084 6.77041 4.16122C5.46466 4.22067 4.49708 4.31198 3.90341 4.47619L3.90236 4.47648C2.66441 4.82035 1.82035 5.66441 1.47648 6.90236L1.47502 6.90768C1.15983 8.06714 1 9.78292 1 12V12.0357L1.06003 12.8761C1.06121 13.4988 1.09285 14.2045 1.16327 15.011C1.22505 15.8319 1.32089 16.5351 1.47619 17.0966L1.47648 17.0976C1.82035 18.3356 2.66441 19.1796 3.90236 19.5235L3.90768 19.525C4.5334 19.6951 5.53673 19.8083 6.84262 19.8834C8.17379 19.9599 9.89456 20 12 20H12.0189L13.6089 19.94C14.7208 19.9397 15.9212 19.9092 17.2296 19.8388C18.5354 19.7793 19.5029 19.688 20.0966 19.5238L20.0976 19.5235C21.3356 19.1796 22.1796 18.3356 22.5235 17.0976L22.525 17.0923C22.8402 15.9329 23 14.2171 23 12V11.9643L22.94 11.1238C22.9388 10.5012 22.9072 9.79557 22.8367 8.98912C22.775 8.16815 22.6791 7.4649 22.5238 6.90341L22.5235 6.90236C22.1796 5.66441 21.3356 4.82035 20.0976 4.47648L20.0923 4.47502C19.4666 4.30492 18.4633 4.1917 17.1574 4.11665C15.8262 4.04014 14.1054 4 12 4ZM12.0188 6C14.0947 6.00024 15.7676 6.04008 17.0426 6.11335C18.3439 6.18814 19.1599 6.29462 19.5651 6.40427C20.1252 6.56058 20.4403 6.87618 20.5963 7.43682C20.7005 7.81394 20.7846 8.36854 20.8428 9.14479L20.8438 9.15717C20.9116 9.93243 20.94 10.5931 20.94 11.16V11.1957L21 12.0355C20.9982 14.1771 20.8388 15.6689 20.5958 16.5648C20.4395 17.1252 20.1238 17.4404 19.5628 17.5963C19.2169 17.6919 18.466 17.7805 17.1346 17.841L17.1262 17.8414C15.8437 17.9105 14.6717 17.94 13.59 17.94H13.5711L11.9812 18C9.90532 17.9998 8.23236 17.9599 6.95738 17.8866C5.6561 17.8119 4.84015 17.7054 4.43497 17.5957C3.87477 17.4394 3.55961 17.1237 3.40368 16.5629C3.29943 16.1858 3.21541 15.6313 3.1572 14.8552L3.15619 14.8428C3.08836 14.0676 3.06 13.4069 3.06 12.84V12.8043L3.00001 11.9645C3.00175 9.82285 3.16118 8.33103 3.40422 7.43512C3.56054 6.87483 3.87622 6.55962 4.43708 6.40367C4.783 6.30811 5.53391 6.21949 6.86541 6.15897L6.87377 6.15855C8.15625 6.0895 9.32832 6.06 10.41 6.06H10.4289L12.0188 6Z" })] }), m6 = ({ children: e, containerClassName: t, emphasis: r, shape: a, size: i }) => {
  const s = typeof i == "number", c = s ? {
    height: i,
    padding: i / 2,
    width: i
  } : void 0, u = s ? void 0 : i;
  return x.jsx("div", { className: Me({
    class: t,
    emphasis: r,
    shape: a,
    size: u
  }), "data-testid": "@paloma-icons-contained-id", style: c, children: e });
}, h6 = ({ "aria-label": e, className: t, color: r, contained: a, containerClassName: i, emphasis: s = "regular", shape: c = "circle", size: u = "medium", svgClassName: p, ...f }) => {
  const v = !e, g = typeof u == "number", h = g ? { height: u, width: u } : void 0, b = g ? void 0 : u, $ = a ? m6 : S.Fragment, w = a ? { containerClassName: i, emphasis: s, shape: c, size: u } : {};
  return x.jsx($, { ...w, children: x.jsx("span", { ...f, className: je({ class: t, size: b }), "data-namespace": "@paloma/icons", "data-size": u, id: "you-tube-id", style: { color: r, ...h }, children: x.jsx(p6, { "aria-hidden": v, "aria-label": e, className: Ie({ class: p, size: b }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "you-tube-svg-id", style: { fill: g6, ...h } }) }) });
}, g6 = "currentColor", Vi = Symbol("default");
function wr({ values: e, children: t }) {
  for (let [r, a] of e)
    t = /* @__PURE__ */ C.createElement(r.Provider, {
      value: a
    }, t);
  return t;
}
function tn(e) {
  let { className: t, style: r, children: a, defaultClassName: i, defaultChildren: s, defaultStyle: c, values: u, render: p } = e;
  return S.useMemo(() => {
    let f, v, g;
    return typeof t == "function" ? f = t({
      ...u,
      defaultClassName: i
    }) : f = t, typeof r == "function" ? v = r({
      ...u,
      defaultStyle: c || {}
    }) : v = r, typeof a == "function" ? g = a({
      ...u,
      defaultChildren: s
    }) : a == null ? g = s : g = a, {
      className: f ?? i,
      style: v || c ? {
        ...c,
        ...v
      } : void 0,
      children: g ?? s,
      "data-rac": "",
      render: p ? (h) => p(h, u) : void 0
    };
  }, [
    t,
    r,
    a,
    i,
    s,
    c,
    u,
    p
  ]);
}
function Ns(e, t) {
  let r = S.useContext(e);
  if (t === null)
    return null;
  if (r && typeof r == "object" && "slots" in r && r.slots) {
    let a = t || Vi;
    if (!r.slots[a]) {
      let i = new Intl.ListFormat().format(Object.keys(r.slots).map((c) => `"${c}"`)), s = t ? `Invalid slot "${t}".` : "A slot prop is required.";
      throw new Error(`${s} Valid slot names are ${i}.`);
    }
    return r.slots[a];
  }
  return r;
}
function Xr(e, t, r) {
  let a = Ns(r, e.slot) || {}, { ref: i, ...s } = a, c = xr(S.useMemo(() => Hn(t, i), [
    t,
    i
  ])), u = $e(s, e);
  return "style" in s && s.style && "style" in e && e.style && (typeof s.style == "function" || typeof e.style == "function" ? u.style = (p) => {
    let f = typeof s.style == "function" ? s.style(p) : s.style, v = {
      ...p.defaultStyle,
      ...f
    }, g = typeof e.style == "function" ? e.style({
      ...p,
      defaultStyle: v
    }) : e.style;
    return {
      ...v,
      ...g
    };
  } : u.style = {
    ...s.style,
    ...e.style
  }), [
    u,
    c
  ];
}
function v6(e = !0) {
  let [t, r] = S.useState(e), a = S.useRef(!1), i = S.useCallback((s) => {
    a.current = !0, r(!!s);
  }, []);
  return Le(() => {
    a.current || r(!1);
  }, []), [
    i,
    t
  ];
}
function y6(e, t, r) {
  let { render: a, ...i } = t, s = S.useRef(null), c = S.useMemo(() => Hn(r, s), [
    r,
    s
  ]);
  Le(() => {
  }, [
    e,
    a
  ]);
  let u = {
    ...i,
    ref: c
  };
  return a ? a(u, void 0) : /* @__PURE__ */ C.createElement(e, u);
}
const Ag = {}, jt = new Proxy({}, {
  get(e, t) {
    if (typeof t != "string") return;
    let r = Ag[t];
    return r || (r = /* @__PURE__ */ S.forwardRef(y6.bind(null, t)), Ag[t] = r), r;
  }
}), jg = /* @__PURE__ */ S.createContext(null), b6 = /* @__PURE__ */ S.createContext(null), x6 = /* @__PURE__ */ S.createContext(null), Wy = {
  CollectionRoot({ collection: e, renderDropIndicator: t }) {
    return zg(e, null, t);
  },
  CollectionBranch({ collection: e, parent: t, renderDropIndicator: r }) {
    return zg(e, t, r);
  }
};
function zg(e, t, r) {
  return j1({
    items: t ? e.getChildren(t.key) : e,
    dependencies: [
      r
    ],
    children(a) {
      if (a.type === "content") return /* @__PURE__ */ C.createElement(C.Fragment, null);
      let i = a.render(a);
      return !r || a.type !== "item" ? i : /* @__PURE__ */ C.createElement(C.Fragment, null, r({
        type: "item",
        key: a.key,
        dropPosition: "before"
      }), i, w6(e, a, r));
    }
  });
}
function w6(e, t, r) {
  let a = t.key, i = e.getKeyAfter(a), s = i != null ? e.getItem(i) : null;
  for (; s != null && s.type !== "item"; )
    i = e.getKeyAfter(s.key), s = i != null ? e.getItem(i) : null;
  let c = t.nextKey != null ? e.getItem(t.nextKey) : null;
  for (; c != null && c.type !== "item"; ) c = c.nextKey != null ? e.getItem(c.nextKey) : null;
  let u = [];
  if (c == null) {
    let p = t;
    for (; p?.type === "item" && (!s || p.parentKey !== s.parentKey && s.level < p.level); ) {
      let f = r({
        type: "item",
        key: p.key,
        dropPosition: "after"
      });
      /* @__PURE__ */ S.isValidElement(f) && u.push(/* @__PURE__ */ S.cloneElement(f, {
        key: `${p.key}-after`
      })), p = p.parentKey != null ? e.getItem(p.parentKey) : null;
    }
  }
  return u;
}
const ca = /* @__PURE__ */ S.createContext(Wy);
function Gy(e) {
  return S.useMemo(() => e != null ? /* @__PURE__ */ new Set([
    e
  ]) : null, [
    e
  ]);
}
const S6 = /* @__PURE__ */ S.createContext({}), C6 = /* @__PURE__ */ S.createContext({}), qy = /* @__PURE__ */ S.createContext({}), $6 = /* @__PURE__ */ S.createContext({}), E6 = /* @__PURE__ */ S.createContext(null);
function Zy(e) {
  let t = S.useRef({});
  return /* @__PURE__ */ C.createElement(E6.Provider, {
    value: t
  }, e.children);
}
const Qy = /* @__PURE__ */ S.createContext({
  isSelected: !1
}), k6 = /* @__PURE__ */ S.createContext({});
class A$ extends Gr {
  static {
    this.type = "separator";
  }
  filter(t, r) {
    let a = r.getItem(this.prevKey);
    if (a && a.type !== "separator") {
      let i = this.clone();
      return r.addDescendants(i, t), i;
    }
    return null;
  }
}
class Kg {
  constructor(t) {
    this.keyMap = /* @__PURE__ */ new Map(), this.firstKey = null, this.lastKey = null, this.iterable = t;
    let r = (c) => {
      if (this.keyMap.set(c.key, c), c.childNodes && c.type === "section") for (let u of c.childNodes) r(u);
    };
    for (let c of t) r(c);
    let a = null, i = 0, s = 0;
    for (let [c, u] of this.keyMap)
      a ? (a.nextKey = c, u.prevKey = a.key) : (this.firstKey = c, u.prevKey = void 0), u.type === "item" && (u.index = i++), (u.type === "section" || u.type === "item") && s++, a = u, a.nextKey = void 0;
    this._size = s, this.lastKey = a?.key ?? null;
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
  getKeyBefore(t) {
    let r = this.keyMap.get(t);
    return r ? r.prevKey ?? null : null;
  }
  getKeyAfter(t) {
    let r = this.keyMap.get(t);
    return r ? r.nextKey ?? null : null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    return this.lastKey;
  }
  getItem(t) {
    return this.keyMap.get(t) ?? null;
  }
  at(t) {
    const r = [
      ...this.getKeys()
    ];
    return this.getItem(r[t]);
  }
  getChildren(t) {
    return this.keyMap.get(t)?.childNodes || [];
  }
}
class cn extends Set {
  constructor(t, r, a) {
    super(t), t instanceof cn ? (this.anchorKey = r ?? t.anchorKey, this.currentKey = a ?? t.currentKey) : (this.anchorKey = r ?? null, this.currentKey = a ?? null);
  }
}
function _6(e, t) {
  if (e.size !== t.size) return !1;
  for (let r of e)
    if (!t.has(r)) return !1;
  return !0;
}
function cf(e) {
  let { selectionMode: t = "none", disallowEmptySelection: r = !1, allowDuplicateSelectionEvents: a, selectionBehavior: i = "toggle", disabledBehavior: s = "all" } = e, c = S.useRef(!1), [, u] = S.useState(!1), p = S.useRef(null), f = S.useRef(null), [, v] = S.useState(null), g = S.useMemo(() => Dg(e.selectedKeys), [
    e.selectedKeys
  ]), h = S.useMemo(() => Dg(e.defaultSelectedKeys, new cn()), [
    e.defaultSelectedKeys
  ]), [b, $] = Cs(g, h, e.onSelectionChange), w = S.useMemo(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [
    e.disabledKeys
  ]), [k, T] = S.useState(i);
  i === "replace" && k === "toggle" && typeof b == "object" && b.size === 0 && T("replace");
  let F = S.useRef(i);
  return S.useEffect(() => {
    i !== F.current && (T(i), F.current = i);
  }, [
    i
  ]), {
    selectionMode: t,
    disallowEmptySelection: r,
    selectionBehavior: k,
    setSelectionBehavior: T,
    get isFocused() {
      return c.current;
    },
    setFocused(H) {
      c.current = H, u(H);
    },
    get focusedKey() {
      return p.current;
    },
    get childFocusStrategy() {
      return f.current;
    },
    setFocusedKey(H, K = "first") {
      p.current = H, f.current = K, v(H);
    },
    selectedKeys: b,
    setSelectedKeys(H) {
      (a || !_6(H, b)) && $(H);
    },
    disabledKeys: w,
    disabledBehavior: s
  };
}
function Dg(e, t) {
  return e ? e === "all" ? "all" : new cn(e) : t;
}
class da {
  constructor(t, r, a) {
    this.collection = t, this.state = r, this.allowsCellSelection = a?.allowsCellSelection ?? !1, this._isSelectAll = null, this.layoutDelegate = a?.layoutDelegate || null, this.fullCollection = a?.fullCollection || null;
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
  setSelectionBehavior(t) {
    this.state.setSelectionBehavior(t);
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
  setFocused(t) {
    this.state.setFocused(t);
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
  setFocusedKey(t, r) {
    (t == null || this.collection.getItem(t)) && this.state.setFocusedKey(t, r);
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
  isSelected(t) {
    if (this.state.selectionMode === "none") return !1;
    let r = this.getKey(t);
    return r == null ? !1 : this.state.selectedKeys === "all" ? this.canSelectItem(r) : this.state.selectedKeys.has(r);
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
    let t = this.getSelectAllKeys(), r = this.state.selectedKeys;
    return this._isSelectAll = t.every((a) => r.has(a)), this._isSelectAll;
  }
  get firstSelectedKey() {
    let t = null;
    for (let r of this.state.selectedKeys) {
      let a = this.collection.getItem(r);
      (!t || a && Oc(this.collection, a, t) < 0) && (t = a);
    }
    return t?.key ?? null;
  }
  get lastSelectedKey() {
    let t = null;
    for (let r of this.state.selectedKeys) {
      let a = this.collection.getItem(r);
      (!t || a && Oc(this.collection, a, t) > 0) && (t = a);
    }
    return t?.key ?? null;
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
  extendSelection(t) {
    if (this.selectionMode === "none") return;
    if (this.selectionMode === "single") {
      this.replaceSelection(t);
      return;
    }
    let r = this.getKey(t);
    if (r == null) return;
    let a;
    if (this.state.selectedKeys === "all") a = new cn([
      r
    ], r, r);
    else {
      let i = this.state.selectedKeys, s = i.anchorKey ?? r;
      a = new cn(i, s, r);
      for (let c of this.getKeyRange(s, i.currentKey ?? r)) a.delete(c);
      for (let c of this.getKeyRange(r, s)) this.canSelectItem(c) && a.add(c);
    }
    this.state.setSelectedKeys(a);
  }
  getKeyRange(t, r) {
    let a = this.collection.getItem(t), i = this.collection.getItem(r);
    return a && i ? Oc(this.collection, a, i) <= 0 ? this.getKeyRangeInternal(t, r) : this.getKeyRangeInternal(r, t) : [];
  }
  getKeyRangeInternal(t, r) {
    if (this.layoutDelegate?.getKeyRange) return this.layoutDelegate.getKeyRange(t, r);
    let a = [], i = t;
    for (; i != null; ) {
      let s = this.collection.getItem(i);
      if (s && (s.type === "item" || s.type === "cell" && this.allowsCellSelection) && a.push(i), i === r) return a;
      i = this.collection.getKeyAfter(i);
    }
    return [];
  }
  getKey(t) {
    let r = this.collection.getItem(t);
    if (!r || r.type === "cell" && this.allowsCellSelection) return t;
    for (; r && r.type !== "item" && r.parentKey != null; ) r = this.collection.getItem(r.parentKey);
    return !r || r.type !== "item" ? null : r.key;
  }
  /**
  * Toggles whether the given key is selected.
  */
  toggleSelection(t) {
    if (this.selectionMode === "none") return;
    if (this.selectionMode === "single" && !this.isSelected(t)) {
      this.replaceSelection(t);
      return;
    }
    let r = this.getKey(t);
    if (r == null) return;
    let a = new cn(this.state.selectedKeys === "all" ? this.getSelectAllKeys() : this.state.selectedKeys);
    a.has(r) ? a.delete(r) : this.canSelectItem(r) && (a.add(r), a.anchorKey = r, a.currentKey = r), !(this.disallowEmptySelection && a.size === 0) && this.state.setSelectedKeys(a);
  }
  /**
  * Replaces the selection with only the given key.
  */
  replaceSelection(t) {
    if (this.selectionMode === "none") return;
    let r = this.getKey(t);
    if (r == null) return;
    let a = this.canSelectItem(r) ? new cn([
      r
    ], r, r) : new cn();
    this.state.setSelectedKeys(a);
  }
  /**
  * Replaces the selection with the given keys.
  */
  setSelectedKeys(t) {
    if (this.selectionMode === "none") return;
    let r = new cn();
    for (let a of t) {
      let i = this.getKey(a);
      if (i != null && (r.add(i), this.selectionMode === "single"))
        break;
    }
    this.state.setSelectedKeys(r);
  }
  getSelectAllKeys() {
    let t = this.fullCollection ?? this.collection, r = [], a = (i) => {
      for (; i != null; ) {
        if (this.canSelectItemIn(i, t)) {
          let s = t.getItem(i);
          s?.type === "item" && r.push(i), s?.hasChildNodes && (this.allowsCellSelection || s.type !== "item") && a(x4(Cv(s, t))?.key ?? null);
        }
        i = t.getKeyAfter(i);
      }
    };
    return a(t.getFirstKey()), r;
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
    !this.disallowEmptySelection && (this.state.selectedKeys === "all" || this.state.selectedKeys.size > 0) && this.state.setSelectedKeys(new cn());
  }
  /**
  * Toggles between select all and an empty selection.
  */
  toggleSelectAll() {
    this.isSelectAll ? this.clearSelection() : this.selectAll();
  }
  select(t, r) {
    this.selectionMode !== "none" && (this.selectionMode === "single" ? this.isSelected(t) && !this.disallowEmptySelection ? this.toggleSelection(t) : this.replaceSelection(t) : this.selectionBehavior === "toggle" || r && (r.pointerType === "touch" || r.pointerType === "virtual") ? this.toggleSelection(t) : this.replaceSelection(t));
  }
  /**
  * Returns whether the current selection is equal to the given selection.
  */
  isSelectionEqual(t) {
    if (t === this.state.selectedKeys) return !0;
    let r = this.selectedKeys;
    if (t.size !== r.size) return !1;
    for (let a of t)
      if (!r.has(a)) return !1;
    for (let a of r)
      if (!t.has(a)) return !1;
    return !0;
  }
  canSelectItem(t) {
    return this.canSelectItemIn(t, this.collection);
  }
  canSelectItemIn(t, r) {
    if (this.state.selectionMode === "none" || this.state.disabledKeys.has(t)) return !1;
    let a = r.getItem(t);
    return !(!a || a?.props?.isDisabled || a.type === "cell" && !this.allowsCellSelection);
  }
  isDisabled(t) {
    let r = this.collection.getItem(t);
    return this.state.disabledBehavior === "all" && (this.state.disabledKeys.has(t) || !!r?.props?.isDisabled) && r?.props?.disabledBehavior !== "selection";
  }
  isLink(t) {
    return !!this.collection.getItem(t)?.props?.href;
  }
  getItemProps(t) {
    return this.collection.getItem(t)?.props;
  }
  withCollection(t) {
    return new da(t, this.state, {
      allowsCellSelection: this.allowsCellSelection,
      layoutDelegate: this.layoutDelegate || void 0,
      fullCollection: this.fullCollection ?? this.collection
    });
  }
}
class N6 {
  build(t, r) {
    return this.context = r, Og(() => this.iterateCollection(t));
  }
  *iterateCollection(t) {
    let { children: r, items: a } = t;
    if (C.isValidElement(r) && r.type === C.Fragment) yield* this.iterateCollection({
      children: r.props.children,
      items: a
    });
    else if (typeof r == "function") {
      if (!a) throw new Error("props.children was a function but props.items is missing");
      let i = 0;
      for (let s of a)
        yield* this.getFullNode({
          value: s,
          index: i
        }, {
          renderer: r
        }), i++;
    } else {
      let i = [];
      C.Children.forEach(r, (c) => {
        c && i.push(c);
      });
      let s = 0;
      for (let c of i) {
        let u = this.getFullNode({
          element: c,
          index: s
        }, {});
        for (let p of u)
          s++, yield p;
      }
    }
  }
  getKey(t, r, a, i) {
    if (t.key != null) return t.key;
    if (r.type === "cell" && r.key != null) return `${i}${r.key}`;
    let s = r.value;
    if (s != null) {
      let c = s.key ?? s.id;
      if (c == null) throw new Error("No key found for item");
      return c;
    }
    return i ? `${i}.${r.index}` : `$.${r.index}`;
  }
  getChildState(t, r) {
    return {
      renderer: r.renderer || t.renderer
    };
  }
  *getFullNode(t, r, a, i) {
    if (C.isValidElement(t.element) && t.element.type === C.Fragment) {
      let p = [];
      C.Children.forEach(t.element.props.children, (v) => {
        p.push(v);
      });
      let f = t.index ?? 0;
      for (const v of p) yield* this.getFullNode({
        element: v,
        index: f++
      }, r, a, i);
      return;
    }
    let s = t.element;
    if (!s && t.value && r && r.renderer) {
      let p = this.cache.get(t.value);
      if (p && (!p.shouldInvalidate || !p.shouldInvalidate(this.context))) {
        p.index = t.index, p.parentKey = i ? i.key : null, yield p;
        return;
      }
      s = r.renderer(t.value);
    }
    if (C.isValidElement(s)) {
      let p = s.type;
      if (typeof p != "function" && typeof p.getCollectionNode != "function") {
        let h = s.type;
        throw new Error(`Unknown element <${h}> in collection.`);
      }
      let f = p.getCollectionNode(s.props, this.context), v = t.index ?? 0, g = f.next();
      for (; !g.done && g.value; ) {
        let h = g.value;
        t.index = v;
        let b = h.key ?? null;
        b == null && (b = h.element ? null : this.getKey(s, t, r, a));
        let w = [
          ...this.getFullNode({
            ...h,
            key: b,
            index: v,
            wrapper: P6(t.wrapper, h.wrapper)
          }, this.getChildState(r, h), a ? `${a}${s.key}` : s.key, i)
        ];
        for (let k of w) {
          if (k.value = h.value ?? t.value ?? null, k.value && this.cache.set(k.value, k), t.type && k.type !== t.type) throw new Error(`Unsupported type <${Qc(k.type)}> in <${Qc(i?.type ?? "unknown parent type")}>. Only <${Qc(t.type)}> is supported.`);
          v++, yield k;
        }
        g = f.next(w);
      }
      return;
    }
    if (t.key == null || t.type == null) return;
    let c = this, u = {
      type: t.type,
      props: t.props,
      key: t.key,
      parentKey: i ? i.key : null,
      value: t.value ?? null,
      level: (i?.level ?? 0) + (i?.type === "item" ? 1 : 0),
      index: t.index,
      rendered: t.rendered,
      textValue: t.textValue ?? "",
      "aria-label": t["aria-label"],
      wrapper: t.wrapper,
      shouldInvalidate: t.shouldInvalidate,
      hasChildNodes: t.hasChildNodes || !1,
      childNodes: Og(function* () {
        if (!t.hasChildNodes || !t.childNodes) return;
        let p = 0;
        for (let f of t.childNodes()) {
          f.key != null && (f.key = `${u.key}${f.key}`);
          let v = c.getFullNode({
            ...f,
            index: p
          }, c.getChildState(r, f), u.key, u);
          for (let g of v)
            p++, yield g;
        }
      })
    };
    yield u;
  }
  constructor() {
    this.cache = /* @__PURE__ */ new WeakMap();
  }
}
function Og(e) {
  let t = [], r = null;
  return {
    *[Symbol.iterator]() {
      for (let a of t) yield a;
      r || (r = e());
      for (let a of r)
        t.push(a), yield a;
    }
  };
}
function P6(e, t) {
  if (e && t) return (r) => e(t(r));
  if (e) return e;
  if (t) return t;
}
function Qc(e) {
  return e[0].toUpperCase() + e.slice(1);
}
function Xy(e, t, r) {
  let a = S.useMemo(() => new N6(), []), { children: i, items: s, collection: c } = e;
  return S.useMemo(() => {
    if (c) return c;
    let p = a.build({
      children: i,
      items: s
    }, r);
    return t(p);
  }, [
    a,
    i,
    s,
    c,
    r,
    t
  ]);
}
function F6(e) {
  let { filter: t, layoutDelegate: r } = e, a = cf(e), i = S.useMemo(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [
    e.disabledKeys
  ]), s = S.useCallback((f) => t ? new Kg(t(f)) : new Kg(f), [
    t
  ]), c = S.useMemo(() => ({
    suppressTextValueWarning: e.suppressTextValueWarning
  }), [
    e.suppressTextValueWarning
  ]), u = Xy(e, s, c), p = S.useMemo(() => new da(u, a, {
    layoutDelegate: r
  }), [
    u,
    a,
    r
  ]);
  return T6(u, p), {
    collection: u,
    disabledKeys: i,
    selectionManager: p
  };
}
function T6(e, t) {
  const r = S.useRef(null);
  S.useEffect(() => {
    if (t.focusedKey != null && !e.getItem(t.focusedKey) && r.current) {
      let a = r.current.getKeyAfter(t.focusedKey), i = null;
      for (; a != null; ) {
        let s = e.getItem(a);
        if (s && s.type === "item" && !t.isDisabled(a)) {
          i = a;
          break;
        }
        a = r.current.getKeyAfter(a);
      }
      if (i == null)
        for (a = r.current.getKeyBefore(t.focusedKey); a != null; ) {
          let s = e.getItem(a);
          if (s && s.type === "item" && !t.isDisabled(a)) {
            i = a;
            break;
          }
          a = r.current.getKeyBefore(a);
        }
      t.setFocusedKey(i);
    }
    r.current = e;
  }, [
    e,
    t
  ]);
}
const R6 = /* @__PURE__ */ S.createContext({
  placement: "bottom"
});
function df(e) {
  let [t, r] = Cs(e.isOpen, e.defaultOpen || !1, e.onOpenChange), [a, i] = S.useState(null);
  const s = S.useCallback(() => {
    r(!0);
  }, [
    r
  ]), c = S.useCallback(() => {
    r(!1);
  }, [
    r
  ]), u = S.useCallback(() => {
    r(!t);
  }, [
    r,
    t
  ]);
  return {
    isOpen: t,
    setOpen: r,
    open: s,
    close: c,
    toggle: u,
    point: a,
    setPoint: i
  };
}
const ff = /* @__PURE__ */ S.createContext(null), Vg = /* @__PURE__ */ S.createContext(null), L6 = /* @__PURE__ */ S.forwardRef(function(t, r) {
  [t, r] = Xr(t, r, ff);
  let a = S.useContext(Ol), i = df(t), s = t.isOpen != null || t.defaultOpen != null || !a ? i : a, c = ls(r, s.isOpen), u = t.isExiting || !t.shouldSkipAnimation && c || !1, p = iv(), { direction: f } = Kl();
  if (p) {
    let v = t.children;
    return typeof v == "function" && (v = v({
      trigger: t.trigger || null,
      placement: "bottom",
      isEntering: !1,
      isExiting: !1,
      defaultChildren: null
    })), /* @__PURE__ */ C.createElement(C.Fragment, null, v);
  }
  return s && !s.isOpen && !u ? null : /* @__PURE__ */ C.createElement(I6, {
    ...t,
    triggerRef: t.triggerRef,
    state: s,
    popoverRef: r,
    isExiting: u,
    dir: f
  });
});
function I6({ state: e, isExiting: t, UNSTABLE_portalContainer: r, clearContexts: a, ...i }) {
  let s = S.useRef(null), c = S.useRef(null), u = S.useContext(Vg), p = u && i.trigger === "SubmenuTrigger", { popoverProps: f, underlayProps: v, arrowProps: g, placement: h, triggerAnchorPoint: b } = J4({
    ...i,
    offset: i.offset ?? 8,
    arrowRef: s,
    // If this is a submenu/subdialog, use the root popover's container
    // to detect outside interaction and add aria-hidden.
    groupRef: p ? u : c
  }, e), $ = i.popoverRef, w = _s($, !!h), k = i.isEntering || !i.shouldSkipAnimation && w || !1, T = tn({
    // oxlint-disable-next-line react/react-compiler
    ...i,
    defaultClassName: "react-aria-Popover",
    // oxlint-disable-next-line react/react-compiler
    values: {
      // oxlint-disable-next-line react/react-compiler
      trigger: i.trigger || null,
      placement: h,
      isEntering: (
        // oxlint-disable-next-line react/react-compiler
        k
      ),
      isExiting: t
    }
  }), F = (
    // oxlint-disable-next-line react/react-compiler
    !i.isNonModal || i.trigger === "SubmenuTrigger" || i.trigger === "PreviewTrigger"
  ), [H, K] = S.useState(i.trigger === "PreviewTrigger");
  Le(() => {
    $.current && K(F && !$.current.querySelector("[role=dialog]"));
  }, [
    $,
    F
  ]), S.useEffect(() => {
    H && i.trigger !== "PreviewTrigger" && (i.trigger !== "SubmenuTrigger" || qi() !== "pointer") && $.current && !Wi($.current) && yr($.current);
  }, [
    H,
    $,
    i.trigger
  ]);
  let Y = S.useMemo(() => {
    let ne = T.children;
    if (a) for (let A of a) ne = /* @__PURE__ */ C.createElement(A.Provider, {
      value: null
    }, ne);
    return ne;
  }, [
    T.children,
    a
  ]), [re, Q] = S.useState(null), X = S.useCallback(() => {
    i.triggerRef.current && Q(i.triggerRef.current.getBoundingClientRect().width + "px");
  }, [
    i.triggerRef
  ]);
  Le(X, [
    X
  ]), Sd({
    // oxlint-disable-next-line react/react-compiler
    ref: T.style?.["--trigger-width"] ? void 0 : i.triggerRef,
    onResize: X
  });
  let ie = {
    ...f.style,
    "--trigger-anchor-point": b ? `${b.x}px ${b.y}px` : void 0,
    ...T.style,
    "--trigger-width": T.style?.["--trigger-width"] || re
  }, ae = /* @__PURE__ */ C.createElement(jt.div, {
    ...$e(gt(i, {
      global: !0
    }), f),
    ...T,
    id: H ? i.id : void 0,
    role: H ? "dialog" : void 0,
    tabIndex: H ? -1 : void 0,
    "aria-label": i["aria-label"],
    "aria-labelledby": i["aria-labelledby"],
    ref: $,
    slot: i.slot || void 0,
    style: ie,
    dir: i.dir,
    "data-trigger": i.trigger,
    "data-placement": h,
    "data-entering": k || void 0,
    "data-exiting": t || void 0
  }, !i.isNonModal && /* @__PURE__ */ C.createElement(Cd, {
    onDismiss: e.close
  }), /* @__PURE__ */ C.createElement(R6.Provider, {
    value: {
      ...g,
      placement: h,
      ref: s
    }
  }, Y), /* @__PURE__ */ C.createElement(Cd, {
    onDismiss: e.close
  }));
  return p ? /* @__PURE__ */ C.createElement(xd, {
    ...i,
    shouldContainFocus: H && i.trigger !== "PreviewTrigger",
    isExiting: t,
    portalContainer: r ?? u?.current ?? void 0
  }, ae) : /* @__PURE__ */ C.createElement(xd, {
    ...i,
    shouldContainFocus: H && i.trigger !== "PreviewTrigger",
    isExiting: t,
    portalContainer: r
  }, !i.isNonModal && e.isOpen && /* @__PURE__ */ C.createElement("div", {
    "data-testid": "underlay",
    ...v,
    style: {
      position: "fixed",
      inset: 0
    }
  }), /* @__PURE__ */ C.createElement("div", {
    ref: c,
    style: {
      display: "contents"
    }
  }, /* @__PURE__ */ C.createElement(Vg.Provider, {
    value: c
  }, ae)));
}
const M6 = /* @__PURE__ */ S.createContext({});
function Yy(e) {
  let t = df(e), [r, a] = S.useState(null), [i, s] = S.useState([]), c = () => {
    s([]), t.close();
  };
  return {
    focusStrategy: r,
    ...t,
    open(f = null) {
      a(f), t.open();
    },
    toggle(f = null) {
      a(f), t.toggle();
    },
    close() {
      c();
    },
    expandedKeysStack: i,
    openSubmenu: (f, v) => {
      s((g) => v > g.length ? g : [
        ...g.slice(0, v),
        f
      ]);
    },
    closeSubmenu: (f, v) => {
      s((g) => g[v] === f ? g.slice(0, v) : g);
    }
  };
}
class A6 {
  constructor(t, { expandedKeys: r } = {}) {
    this.keyMap = /* @__PURE__ */ new Map(), this.firstKey = null, this.lastKey = null, this.iterable = t, r = r || /* @__PURE__ */ new Set();
    let a = (c) => {
      if (this.keyMap.set(c.key, c), c.childNodes && (c.type === "section" || r.has(c.key))) for (let u of c.childNodes) a(u);
    };
    for (let c of t) a(c);
    let i = null, s = 0;
    for (let [c, u] of this.keyMap)
      i ? (i.nextKey = c, u.prevKey = i.key) : (this.firstKey = c, u.prevKey = void 0), u.type === "item" && (u.index = s++), i = u, i.nextKey = void 0;
    this.lastKey = i?.key ?? null;
  }
  *[Symbol.iterator]() {
    yield* this.iterable;
  }
  get size() {
    return this.keyMap.size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(t) {
    let r = this.keyMap.get(t);
    return r ? r.prevKey ?? null : null;
  }
  getKeyAfter(t) {
    let r = this.keyMap.get(t);
    return r ? r.nextKey ?? null : null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    return this.lastKey;
  }
  getItem(t) {
    return this.keyMap.get(t) ?? null;
  }
  at(t) {
    const r = [
      ...this.getKeys()
    ];
    return this.getItem(r[t]);
  }
}
function j6(e) {
  let { onExpandedChange: t } = e, [r, a] = Cs(e.expandedKeys ? new Set(e.expandedKeys) : void 0, e.defaultExpandedKeys ? new Set(e.defaultExpandedKeys) : /* @__PURE__ */ new Set(), t), i = cf(e), s = S.useMemo(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [
    e.disabledKeys
  ]), c = Xy(e, S.useCallback((p) => new A6(p, {
    expandedKeys: r
  }), [
    r
  ]), null);
  return S.useEffect(() => {
    i.focusedKey != null && !c.getItem(i.focusedKey) && i.setFocusedKey(null);
  }, [
    c,
    i.focusedKey
  ]), {
    collection: c,
    expandedKeys: r,
    disabledKeys: s,
    toggleKey: (p) => {
      a(z6(r, p));
    },
    setExpandedKeys: a,
    selectionManager: new da(c, i)
  };
}
function z6(e, t) {
  let r = new Set(e);
  return r.has(t) ? r.delete(t) : r.add(t), r;
}
const K6 = /* @__PURE__ */ S.createContext(null), Ps = /* @__PURE__ */ S.createContext(null), Td = /* @__PURE__ */ S.createContext(null), is = /* @__PURE__ */ S.createContext(null), D6 = /* @__PURE__ */ S.createContext(null);
class j$ extends Gr {
  static {
    this.type = "submenutrigger";
  }
  filter(t, r, a) {
    let i = t.getItem(this.firstChildKey);
    if (i && a(i.textValue, this)) {
      let s = this.clone();
      return r.addDescendants(s, t), s;
    }
    return null;
  }
}
const Hg = /* @__PURE__ */ S.forwardRef(function(t, r) {
  return [t, r] = Xr(t, r, K6), /* @__PURE__ */ C.createElement(ov, {
    content: /* @__PURE__ */ C.createElement(sv, t)
  }, (a) => /* @__PURE__ */ C.createElement(O6, {
    props: t,
    collection: a,
    menuRef: r
  }));
});
function O6({ props: e, collection: t, menuRef: r }) {
  [e, r] = Xr(e, r, jg);
  let { filter: a, ...i } = e, s = S.useMemo(() => a ? t.filter(a) : t, [
    t,
    a
  ]), c = j6({
    ...e,
    collection: s,
    children: void 0
  }), u = S.useContext(Td), { isVirtualized: p, CollectionRoot: f } = S.useContext(ca), { menuProps: v } = I4({
    ...e,
    isVirtualized: p,
    onClose: e.onClose || u?.close
  }, c, r), g = tn({
    ...e,
    children: void 0,
    defaultClassName: "react-aria-Menu",
    values: {
      isEmpty: c.collection.size === 0
    }
  }), h = null;
  c.collection.size === 0 && e.renderEmptyState && (h = /* @__PURE__ */ C.createElement("div", {
    role: "menuitem",
    style: {
      display: "contents"
    }
  }, e.renderEmptyState()));
  let b = gt(e, {
    global: !0
  });
  return /* @__PURE__ */ C.createElement(Jd, null, /* @__PURE__ */ C.createElement(jt.div, {
    ...$e(b, g, v),
    ref: r,
    slot: e.slot || void 0,
    "data-empty": c.collection.size === 0 || void 0,
    onScroll: e.onScroll
  }, /* @__PURE__ */ C.createElement(wr, {
    values: [
      [
        Ps,
        c
      ],
      [
        k6,
        {
          elementType: "div"
        }
      ],
      [
        x6,
        {
          name: "MenuSection",
          render: H6
        }
      ],
      [
        D6,
        {
          parentMenuRef: r,
          shouldUseVirtualFocus: i?.shouldUseVirtualFocus
        }
      ],
      [
        Ji,
        {
          shouldCloseOnSelect: e.shouldCloseOnSelect
        }
      ],
      [
        jg,
        null
      ],
      [
        b6,
        null
      ],
      [
        is,
        c.selectionManager
      ],
      /* Ensure root MenuTriggerState is defined, in case Menu is rendered outside a MenuTrigger. */
      /* We assume the context can never change between defined and undefined. */
      // oxlint-disable-next-line react/react-compiler, react-hooks/rules-of-hooks
      [
        Td,
        u ?? Yy({})
      ]
    ]
  }, /* @__PURE__ */ C.createElement(Zy, null, /* @__PURE__ */ C.createElement(f, {
    collection: c.collection,
    persistedKeys: Gy(c.selectionManager.focusedKey),
    scrollRef: r
  }))), h));
}
class V6 extends da {
  constructor(t, r) {
    super(t.collection, r), this.parent = t;
  }
  get focusedKey() {
    return this.parent.focusedKey;
  }
  get isFocused() {
    return this.parent.isFocused;
  }
  setFocusedKey(t, r) {
    return this.parent.setFocusedKey(t, r);
  }
  setFocused(t) {
    this.parent.setFocused(t);
  }
  get childFocusStrategy() {
    return this.parent.childFocusStrategy;
  }
}
function H6(e, t, r, a = "react-aria-MenuSection") {
  let i = S.useContext(Ps), { CollectionBranch: s } = S.useContext(ca), [c, u] = v6(), { headingProps: p, groupProps: f } = A4({
    heading: u,
    "aria-label": r.props["aria-label"] ?? void 0
  }), v = tn({
    ...e,
    id: void 0,
    children: void 0,
    defaultClassName: a,
    className: r.props?.className,
    style: r.props?.style,
    values: void 0
  }), g = S.useContext(is), h = cf(e), b = e.selectionMode != null ? new V6(g, h) : g, $ = Ns(Ji)?.shouldCloseOnSelect, w = gt(e, {
    global: !0
  });
  return delete w.id, /* @__PURE__ */ C.createElement(jt.section, {
    ...$e(w, v, f),
    ref: t
  }, /* @__PURE__ */ C.createElement(wr, {
    values: [
      [
        $6,
        {
          ...p,
          ref: c
        }
      ],
      [
        is,
        b
      ],
      [
        Ji,
        {
          shouldCloseOnSelect: e.shouldCloseOnSelect ?? $
        }
      ]
    ]
  }, /* @__PURE__ */ C.createElement(s, {
    collection: i.collection,
    parent: r
  })));
}
const Ji = /* @__PURE__ */ S.createContext(null), B6 = /* @__PURE__ */ Qd(i2, function(t, r, a) {
  [t, r] = Xr(t, r, Ji);
  let i = Ns(Ji)?.id, s = S.useContext(Ps), c = xr(r), u = S.useContext(is), { isVirtualized: p } = S.useContext(ca), { menuItemProps: f, labelProps: v, descriptionProps: g, keyboardShortcutProps: h, ...b } = M4({
    ...t,
    id: i,
    key: a.key,
    selectionManager: u,
    isVirtualized: p
  }, s, c), { hoverProps: $, isHovered: w } = nf({
    isDisabled: b.isDisabled
  }), k = tn({
    ...t,
    id: void 0,
    children: a.rendered,
    defaultClassName: "react-aria-MenuItem",
    values: {
      ...b,
      isHovered: w,
      isFocusVisible: b.isFocusVisible,
      selectionMode: u.selectionMode,
      selectionBehavior: u.selectionBehavior,
      hasSubmenu: !!t["aria-haspopup"],
      isOpen: t["aria-expanded"] === "true"
    }
  }), T = t.href ? jt.a : jt.div, F = gt(t, {
    global: !0
  });
  return delete F.id, delete F.onClick, /* @__PURE__ */ C.createElement(T, {
    ...$e(F, k, f, $),
    ref: c,
    "data-disabled": b.isDisabled || void 0,
    "data-hovered": w || void 0,
    "data-focused": b.isFocused || void 0,
    "data-focus-visible": b.isFocusVisible || void 0,
    "data-pressed": b.isPressed || void 0,
    "data-selected": b.isSelected || void 0,
    "data-selection-mode": u.selectionMode === "none" ? void 0 : u.selectionMode,
    "data-has-submenu": !!t["aria-haspopup"] || void 0,
    "data-open": t["aria-expanded"] === "true" || void 0
  }, /* @__PURE__ */ C.createElement(wr, {
    values: [
      [
        qy,
        {
          slots: {
            [Vi]: v,
            label: v,
            description: g
          }
        }
      ],
      [
        M6,
        h
      ],
      [
        Qy,
        {
          isSelected: b.isSelected
        }
      ]
    ]
  }, k.children));
});
Qd(l2, function(t, r, a) {
  let i = S.useContext(Ps), { isLoading: s, onLoadMore: c, scrollOffset: u, ...p } = t, f = S.useRef(null), v = S.useMemo(() => ({
    onLoadMore: c,
    collection: i?.collection,
    sentinelRef: f,
    scrollOffset: u
  }), [
    c,
    u,
    i?.collection
  ]);
  u8(v, f);
  let g = tn({
    ...p,
    id: void 0,
    children: a.rendered,
    defaultClassName: "react-aria-MenuLoadingIndicator",
    values: void 0
  }), h = {
    // For Android talkback
    tabIndex: -1
  };
  return /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement("div", {
    style: {
      position: "relative",
      width: 0,
      height: 0
    },
    inert: Fd(!0)
  }, /* @__PURE__ */ C.createElement("div", {
    "data-testid": "loadMoreSentinel",
    ref: f,
    style: {
      position: "absolute",
      height: 1,
      width: 1
    }
  })), s && g.children && /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(jt.div, {
    ...$e(gt(t, {
      global: !0
    }), h),
    ...g,
    role: "menuitem",
    ref: r
  }, g.children)));
});
const Jy = /* @__PURE__ */ S.createContext(null), Ol = /* @__PURE__ */ S.createContext(null);
function U6(e) {
  let t = Yy(e), r = S.useRef(null), { triggerProps: a, overlayProps: i } = v4({
    type: "dialog"
  }, t, r);
  return a.id = br(), i["aria-labelledby"] = a.id, iv() ? null : /* @__PURE__ */ C.createElement(wr, {
    values: [
      [
        Ol,
        t
      ],
      [
        Td,
        t
      ],
      [
        Jy,
        i
      ],
      [
        ff,
        {
          trigger: "DialogTrigger",
          triggerRef: r,
          id: i.id,
          "aria-labelledby": i["aria-labelledby"]
        }
      ]
    ]
  }, /* @__PURE__ */ C.createElement($4, {
    ...a,
    ref: r,
    isPressed: t.isOpen
  }, e.children));
}
const Bg = /* @__PURE__ */ S.forwardRef(function(t, r) {
  let a = t["aria-labelledby"];
  [t, r] = Xr(t, r, Jy);
  let { dialogProps: i, titleProps: s, contentProps: c } = N4({
    ...t,
    // Only pass aria-labelledby from props, not context.
    // Context is used as a fallback below.
    "aria-labelledby": a
  }, r), u = S.useContext(Ol);
  !i["aria-label"] && !i["aria-labelledby"] && t["aria-labelledby"] && (i["aria-labelledby"] = t["aria-labelledby"]);
  let p = tn({
    defaultClassName: "react-aria-Dialog",
    className: t.className,
    style: t.style,
    children: t.children,
    values: {
      close: u?.close || (() => {
      })
    }
  }), f = gt(t, {
    global: !0
  });
  return /* @__PURE__ */ C.createElement(jt.section, {
    ...$e(f, p, i),
    render: t.render,
    ref: r,
    slot: t.slot || void 0
  }, /* @__PURE__ */ C.createElement(wr, {
    values: [
      [
        C6,
        {
          slots: {
            [Vi]: {},
            title: {
              ...s,
              level: 2
            }
          }
        }
      ],
      [
        qy,
        {
          slots: {
            [Vi]: {},
            description: c
          }
        }
      ],
      [
        S6,
        {
          slots: {
            [Vi]: {},
            close: {
              onPress: () => u?.close()
            }
          }
        }
      ]
    ]
  }, p.children));
}), W6 = /* @__PURE__ */ S.createContext(null), pf = /* @__PURE__ */ S.createContext(null), G6 = /* @__PURE__ */ S.forwardRef(function(t, r) {
  if (S.useContext(pf))
    return /* @__PURE__ */ C.createElement(Ug, {
      ...t,
      modalRef: r
    }, t.children);
  let { isDismissable: i, isKeyboardDismissDisabled: s, isOpen: c, defaultOpen: u, onOpenChange: p, children: f, isEntering: v, isExiting: g, UNSTABLE_portalContainer: h, shouldCloseOnInteractOutside: b, ...$ } = t;
  return /* @__PURE__ */ C.createElement(Z6, {
    isDismissable: i,
    isKeyboardDismissDisabled: s,
    isOpen: c,
    defaultOpen: u,
    onOpenChange: p,
    isEntering: v,
    isExiting: g,
    UNSTABLE_portalContainer: h,
    shouldCloseOnInteractOutside: b
  }, /* @__PURE__ */ C.createElement(Ug, {
    ...$,
    modalRef: r
  }, f));
});
function q6(e, t) {
  [e, t] = Xr(e, t, W6);
  let r = S.useContext(Ol), a = df(e), i = e.isOpen != null || e.defaultOpen != null || !r ? a : r, s = xr(t), c = S.useRef(null), u = ls(s, i.isOpen), p = ls(c, i.isOpen), f = u || p || e.isExiting || !1, v = qr();
  return !i.isOpen && !f || v ? null : /* @__PURE__ */ C.createElement(Q6, {
    ...e,
    state: i,
    isExiting: f,
    overlayRef: s,
    modalRef: c
  });
}
const Z6 = /* @__PURE__ */ S.forwardRef(q6);
function Q6({ UNSTABLE_portalContainer: e, ...t }) {
  let r = t.modalRef, { state: a } = t, { modalProps: i, underlayProps: s } = O4(t, a, r), c = _s(t.overlayRef) || t.isEntering || !1, u = tn({
    ...t,
    defaultClassName: "react-aria-ModalOverlay",
    values: {
      isEntering: c,
      isExiting: t.isExiting,
      state: a
    }
  }), p = s8(), f, v;
  if (typeof document < "u") {
    let h = Ur(document.body) ? document.body : document.scrollingElement || document.documentElement, b = h.getBoundingClientRect().width % 1, $ = h.getBoundingClientRect().height % 1;
    f = h.scrollWidth - b, v = h.scrollHeight - $;
  }
  let g = {
    ...u.style,
    "--visual-viewport-width": p.width + "px",
    "--visual-viewport-height": p.height + "px",
    "--page-width": f !== void 0 ? f + "px" : void 0,
    "--page-height": v !== void 0 ? v + "px" : void 0
  };
  return /* @__PURE__ */ C.createElement(xd, {
    isExiting: t.isExiting,
    portalContainer: e
  }, /* @__PURE__ */ C.createElement(jt.div, {
    ...$e(gt(t, {
      global: !0
    }), s),
    ...u,
    style: g,
    ref: t.overlayRef,
    "data-entering": c || void 0,
    "data-exiting": t.isExiting || void 0
  }, /* @__PURE__ */ C.createElement(wr, {
    values: [
      [
        pf,
        {
          modalProps: i,
          modalRef: r,
          isExiting: t.isExiting,
          isDismissable: t.isDismissable
        }
      ],
      [
        Ol,
        a
      ]
    ]
  }, u.children)));
}
function Ug(e) {
  let { modalProps: t, modalRef: r, isExiting: a, isDismissable: i } = S.useContext(pf), s = S.useContext(Ol), c = S.useMemo(() => Hn(e.modalRef, r), [
    e.modalRef,
    r
  ]), u = xr(c), p = _s(u), f = tn({
    ...e,
    defaultClassName: "react-aria-Modal",
    values: {
      isEntering: p,
      isExiting: a,
      state: s
    }
  });
  return /* @__PURE__ */ C.createElement(jt.div, {
    ...$e(gt(e, {
      global: !0
    }), t),
    ...f,
    ref: u,
    "data-entering": p || void 0,
    "data-exiting": a || void 0
  }, i && /* @__PURE__ */ C.createElement(Cd, {
    onDismiss: s.close
  }), f.children);
}
function X6(e) {
  let [t, r] = Cs(e.selectedKey, e.defaultSelectedKey ?? null, e.onSelectionChange), a = S.useMemo(() => t != null ? [
    t
  ] : [], [
    t
  ]), { collection: i, disabledKeys: s, selectionManager: c } = F6({
    ...e,
    selectionMode: "single",
    disallowEmptySelection: !0,
    allowDuplicateSelectionEvents: !0,
    selectedKeys: a,
    onSelectionChange: (p) => {
      if (p === "all") return;
      let f = p.values().next().value ?? null;
      f === t && e.onSelectionChange && e.onSelectionChange(f), r(f);
    }
  }), u = t != null ? i.getItem(t) : null;
  return {
    collection: i,
    disabledKeys: s,
    selectionManager: c,
    selectedKey: t,
    setSelectedKey: r,
    selectedItem: u
  };
}
function Y6(e) {
  let t = X6({
    ...e,
    onSelectionChange: e.onSelectionChange ? (c) => {
      c != null && e.onSelectionChange?.(c);
    } : void 0,
    suppressTextValueWarning: !0,
    defaultSelectedKey: e.defaultSelectedKey ?? Wg(e.collection, e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set()) ?? void 0
  }), { selectionManager: r, collection: a, selectedKey: i } = t, s = S.useRef(i);
  return S.useEffect(() => {
    let c = i;
    e.selectedKey == null && (r.isEmpty || c == null || !a.getItem(c)) && (c = Wg(a, t.disabledKeys), c != null && r.setSelectedKeys([
      c
    ])), (c != null && r.focusedKey == null || !r.isFocused && c !== s.current) && r.setFocusedKey(c), s.current = c;
  }), {
    ...t,
    isDisabled: e.isDisabled || !1
  };
}
function Wg(e, t) {
  let r = null;
  if (e) {
    for (r = e.getFirstKey(); r != null && (t.has(r) || e.getItem(r)?.props?.isDisabled) && r !== e.getLastKey(); ) r = e.getKeyAfter(r);
    r != null && (t.has(r) || e.getItem(r)?.props?.isDisabled) && r === e.getLastKey() && (r = e.getFirstKey());
  }
  return r;
}
const Fs = /* @__PURE__ */ S.createContext(null), Wr = /* @__PURE__ */ S.createContext(null), J6 = /* @__PURE__ */ S.forwardRef(function(t, r) {
  [t, r] = Xr(t, r, Fs);
  let { children: a, orientation: i = "horizontal" } = t;
  return a = S.useMemo(() => typeof a == "function" ? a({
    orientation: i,
    defaultChildren: null
  }) : a, [
    a,
    i
  ]), /* @__PURE__ */ C.createElement(ov, {
    content: a
  }, (s) => /* @__PURE__ */ C.createElement(e9, {
    props: t,
    collection: s,
    tabsRef: r
  }));
});
function e9({ props: e, tabsRef: t, collection: r }) {
  let { orientation: a = "horizontal" } = e, i = Y6({
    ...e,
    collection: r,
    children: void 0
  }), { focusProps: s, isFocused: c, isFocusVisible: u } = $s({
    within: !0
  }), p = S.useMemo(() => ({
    orientation: a,
    isFocusWithin: c,
    isFocusVisible: u
  }), [
    a,
    c,
    u
  ]), f = tn({
    ...e,
    defaultClassName: "react-aria-Tabs",
    values: p
  }), v = gt(e, {
    global: !0
  });
  return /* @__PURE__ */ C.createElement(jt.div, {
    ...$e(v, f, s),
    ref: t,
    slot: e.slot || void 0,
    "data-focused": c || void 0,
    "data-orientation": a,
    "data-focus-visible": u || void 0,
    "data-disabled": i.isDisabled || void 0
  }, /* @__PURE__ */ C.createElement(wr, {
    values: [
      [
        Fs,
        e
      ],
      [
        Wr,
        i
      ]
    ]
  }, f.children));
}
const t9 = /* @__PURE__ */ S.forwardRef(function(t, r) {
  return S.useContext(Wr) ? /* @__PURE__ */ C.createElement(n9, {
    props: t,
    forwardedRef: r
  }) : /* @__PURE__ */ C.createElement(sv, t);
});
function n9({ props: e, forwardedRef: t }) {
  let r = S.useContext(Wr), { CollectionRoot: a } = S.useContext(ca), { orientation: i = "horizontal", keyboardActivation: s = "automatic" } = Ns(Fs), c = xr(t), { tabListProps: u } = n3({
    ...e,
    orientation: i,
    keyboardActivation: s
  }, r, c), p = tn({
    ...e,
    children: null,
    defaultClassName: "react-aria-TabList",
    values: {
      orientation: i,
      state: r
    }
  }), f = gt(e, {
    global: !0
  });
  return delete f.id, /* @__PURE__ */ C.createElement(jt.div, {
    ...$e(f, p, u),
    ref: c,
    "data-orientation": i || void 0
  }, /* @__PURE__ */ C.createElement(Zy, null, /* @__PURE__ */ C.createElement(a, {
    collection: r.collection,
    persistedKeys: Gy(r.selectionManager.focusedKey)
  })));
}
class r9 extends Gr {
  static {
    this.type = "item";
  }
}
const l9 = /* @__PURE__ */ Qd(r9, (e, t, r) => {
  let a = S.useContext(Wr), i = xr(t), { tabProps: s, isSelected: c, isDisabled: u, isPressed: p } = e3({
    key: r.key,
    ...e
  }, a, i), { focusProps: f, isFocused: v, isFocusVisible: g } = $s(), { hoverProps: h, isHovered: b } = nf({
    isDisabled: u,
    onHoverStart: e.onHoverStart,
    onHoverEnd: e.onHoverEnd,
    onHoverChange: e.onHoverChange
  }), $ = tn({
    ...e,
    id: void 0,
    children: r.rendered,
    defaultClassName: "react-aria-Tab",
    values: {
      isSelected: c,
      isDisabled: u,
      isFocused: v,
      isFocusVisible: g,
      isPressed: p,
      isHovered: b
    }
  }), w = r.props.href ? jt.a : jt.div, k = gt(e, {
    global: !0
  });
  return delete k.id, delete k.onClick, /* @__PURE__ */ C.createElement(w, {
    ...$e(k, $, s, f, h),
    ref: i,
    "data-selected": c || void 0,
    "data-disabled": u || void 0,
    "data-focused": v || void 0,
    "data-focus-visible": g || void 0,
    "data-pressed": p || void 0,
    "data-hovered": b || void 0
  }, /* @__PURE__ */ C.createElement(Qy.Provider, {
    value: {
      isSelected: c
    }
  }, $.children));
}), i9 = /* @__PURE__ */ iw(function(t, r) {
  const a = S.useContext(Wr);
  let i = xr(r), s = a.selectedKey === t.id, [c, u] = S.useState(a.selectedKey != null ? s : null);
  c == null && a.selectedKey != null ? u(s) : !s && c && u(!1);
  let p = ls(i, s);
  return !s && !t.shouldForceMount && !p ? null : /* @__PURE__ */ C.createElement(a9, {
    ...t,
    tabPanelRef: i,
    isInitiallySelected: c || !1,
    isExiting: p
  });
});
function a9(e) {
  let t = S.useContext(Wr), { id: r, tabPanelRef: a, isInitiallySelected: i, isExiting: s, ...c } = e, { tabPanelProps: u } = r3(e, t, a), { focusProps: p, isFocused: f, isFocusVisible: v } = $s(), g = t.selectedKey === e.id, h = _s(a) && !i, b = tn({
    ...e,
    defaultClassName: "react-aria-TabPanel",
    values: {
      isFocused: f,
      isFocusVisible: v,
      // @ts-ignore - compatibility with React < 19
      isInert: Fd(!g),
      isEntering: h,
      isExiting: s,
      state: t
    }
  }), $ = gt(c, {
    global: !0
  });
  delete $.id;
  let w = g ? $e($, u, p, b) : $e($, b);
  return /* @__PURE__ */ C.createElement(jt.div, {
    ...w,
    ref: a,
    "data-focused": f || void 0,
    "data-focus-visible": v || void 0,
    // @ts-ignore
    inert: Fd(!g || e.inert),
    "data-inert": g ? void 0 : "true",
    "data-entering": h || void 0,
    "data-exiting": s || void 0
  }, /* @__PURE__ */ C.createElement(wr, {
    values: [
      [
        Fs,
        null
      ],
      [
        Wr,
        null
      ]
    ]
  }, /* @__PURE__ */ C.createElement(ca.Provider, {
    value: Wy
  }, b.children)));
}
var mf = pa(), Te = (e) => fa(e, mf), hf = pa();
Te.write = (e) => fa(e, hf);
var Ts = pa();
Te.onStart = (e) => fa(e, Ts);
var gf = pa();
Te.onFrame = (e) => fa(e, gf);
var vf = pa();
Te.onFinish = (e) => fa(e, vf);
var Ll = [];
Te.setTimeout = (e, t) => {
  const r = Te.now() + t, a = () => {
    const s = Ll.findIndex((c) => c.cancel == a);
    ~s && Ll.splice(s, 1), mr -= ~s ? 1 : 0;
  }, i = { time: r, handler: e, cancel: a };
  return Ll.splice(e0(r), 0, i), mr += 1, t0(), i;
};
var e0 = (e) => ~(~Ll.findIndex((t) => t.time > e) || ~Ll.length);
Te.cancel = (e) => {
  Ts.delete(e), gf.delete(e), vf.delete(e), mf.delete(e), hf.delete(e);
};
Te.sync = (e) => {
  Rd = !0, Te.batchedUpdates(e), Rd = !1;
};
Te.throttle = (e) => {
  let t;
  function r() {
    try {
      e(...t);
    } finally {
      t = null;
    }
  }
  function a(...i) {
    t = i, Te.onStart(r);
  }
  return a.handler = e, a.cancel = () => {
    Ts.delete(r), t = null;
  }, a;
};
var yf = typeof window < "u" ? window.requestAnimationFrame : (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  (() => {
  })
);
Te.use = (e) => yf = e;
Te.now = typeof performance < "u" ? () => performance.now() : Date.now;
Te.batchedUpdates = (e) => e();
Te.catch = console.error;
Te.frameLoop = "always";
Te.advance = () => {
  Te.frameLoop !== "demand" ? console.warn(
    "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
  ) : r0();
};
var pr = -1, mr = 0, Rd = !1;
function fa(e, t) {
  Rd ? (t.delete(e), e(0)) : (t.add(e), t0());
}
function t0() {
  pr < 0 && (pr = 0, Te.frameLoop !== "demand" && yf(n0));
}
function o9() {
  pr = -1;
}
function n0() {
  ~pr && (yf(n0), Te.batchedUpdates(r0));
}
function r0() {
  const e = pr;
  pr = Te.now();
  const t = e0(pr);
  if (t && (l0(Ll.splice(0, t), (r) => r.handler()), mr -= t), !mr) {
    o9();
    return;
  }
  Ts.flush(), mf.flush(e ? Math.min(64, pr - e) : 16.667), gf.flush(), hf.flush(), vf.flush();
}
function pa() {
  let e = /* @__PURE__ */ new Set(), t = e;
  return {
    add(r) {
      mr += t == e && !e.has(r) ? 1 : 0, e.add(r);
    },
    delete(r) {
      return mr -= t == e && e.has(r) ? 1 : 0, e.delete(r);
    },
    flush(r) {
      t.size && (e = /* @__PURE__ */ new Set(), mr -= t.size, l0(t, (a) => a(r) && e.add(a)), mr += e.size, t = e);
    }
  };
}
function l0(e, t) {
  e.forEach((r) => {
    try {
      t(r);
    } catch (a) {
      Te.catch(a);
    }
  });
}
var s9 = Object.defineProperty, u9 = (e, t) => {
  for (var r in t)
    s9(e, r, { get: t[r], enumerable: !0 });
}, Al = {};
u9(Al, {
  assign: () => p9,
  colors: () => gr,
  createStringInterpolator: () => xf,
  skipAnimation: () => a0,
  to: () => i0,
  willAdvance: () => wf
});
function c9() {
}
var d9 = (e, t, r) => Object.defineProperty(e, t, { value: r, writable: !0, configurable: !0 }), Ve = {
  arr: Array.isArray,
  obj: (e) => !!e && e.constructor.name === "Object",
  fun: (e) => typeof e == "function",
  str: (e) => typeof e == "string",
  num: (e) => typeof e == "number",
  und: (e) => e === void 0
};
function f9(e, t) {
  if (Ve.arr(e)) {
    if (!Ve.arr(t) || e.length !== t.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (e[r] !== t[r])
        return !1;
    return !0;
  }
  return e === t;
}
var At = (e, t) => e.forEach(t);
function as(e, t, r) {
  if (Ve.arr(e)) {
    for (let a = 0; a < e.length; a++)
      t.call(r, e[a], `${a}`);
    return;
  }
  for (const a in e)
    e.hasOwnProperty(a) && t.call(r, e[a], a);
}
var ji = (e) => Ve.und(e) ? [] : Ve.arr(e) ? e : [e], bf = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), xf, i0, gr = null, a0 = !1, wf = c9, p9 = (e) => {
  e.to && (i0 = e.to), e.now && (Te.now = e.now), e.colors !== void 0 && (gr = e.colors), e.skipAnimation != null && (a0 = e.skipAnimation), e.createStringInterpolator && (xf = e.createStringInterpolator), e.requestAnimationFrame && Te.use(e.requestAnimationFrame), e.batchedUpdates && (Te.batchedUpdates = e.batchedUpdates), e.willAdvance && (wf = e.willAdvance), e.frameLoop && (Te.frameLoop = e.frameLoop);
}, Hi = /* @__PURE__ */ new Set(), Yt = [], Xc = [], os = 0, Sf = {
  get idle() {
    return !Hi.size && !Yt.length;
  },
  /** Advance the given animation on every frame until idle. */
  start(e) {
    os > e.priority ? (Hi.add(e), Te.onStart(m9)) : (o0(e), Te(Ld));
  },
  /** Advance all animations by the given time. */
  advance: Ld,
  /** Call this when an animation's priority changes. */
  sort(e) {
    if (os)
      Te.onFrame(() => Sf.sort(e));
    else {
      const t = Yt.indexOf(e);
      ~t && (Yt.splice(t, 1), s0(e));
    }
  },
  /**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */
  clear() {
    Yt = [], Hi.clear();
  }
};
function m9() {
  Hi.forEach(o0), Hi.clear(), Te(Ld);
}
function o0(e) {
  Yt.includes(e) || s0(e);
}
function s0(e) {
  Yt.splice(
    h9(Yt, (t) => t.priority > e.priority),
    0,
    e
  );
}
function Ld(e) {
  const t = Xc;
  for (let r = 0; r < Yt.length; r++) {
    const a = Yt[r];
    os = a.priority, a.idle || (wf(a), a.advance(e), a.idle || t.push(a));
  }
  return os = 0, Xc = Yt, Xc.length = 0, Yt = t, Yt.length > 0;
}
function h9(e, t) {
  const r = e.findIndex(t);
  return r < 0 ? e.length : r;
}
var g9 = {
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
}, fn = "[-+]?\\d*\\.?\\d+", ss = fn + "%";
function Rs(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var v9 = new RegExp("rgb" + Rs(fn, fn, fn)), y9 = new RegExp("rgba" + Rs(fn, fn, fn, fn)), b9 = new RegExp("hsl" + Rs(fn, ss, ss)), x9 = new RegExp(
  "hsla" + Rs(fn, ss, ss, fn)
), w9 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, S9 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, C9 = /^#([0-9a-fA-F]{6})$/, $9 = /^#([0-9a-fA-F]{8})$/;
function E9(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = C9.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : gr && gr[e] !== void 0 ? gr[e] : (t = v9.exec(e)) ? ($l(t[1]) << 24 | // r
  $l(t[2]) << 16 | // g
  $l(t[3]) << 8 | // b
  255) >>> // a
  0 : (t = y9.exec(e)) ? ($l(t[1]) << 24 | // r
  $l(t[2]) << 16 | // g
  $l(t[3]) << 8 | // b
  Zg(t[4])) >>> // a
  0 : (t = w9.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (t = $9.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = S9.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    t[4] + t[4],
    // a
    16
  ) >>> 0 : (t = b9.exec(e)) ? (Gg(
    qg(t[1]),
    // h
    Mo(t[2]),
    // s
    Mo(t[3])
    // l
  ) | 255) >>> // a
  0 : (t = x9.exec(e)) ? (Gg(
    qg(t[1]),
    // h
    Mo(t[2]),
    // s
    Mo(t[3])
    // l
  ) | Zg(t[4])) >>> // a
  0 : null;
}
function Yc(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function Gg(e, t, r) {
  const a = r < 0.5 ? r * (1 + t) : r + t - r * t, i = 2 * r - a, s = Yc(i, a, e + 1 / 3), c = Yc(i, a, e), u = Yc(i, a, e - 1 / 3);
  return Math.round(s * 255) << 24 | Math.round(c * 255) << 16 | Math.round(u * 255) << 8;
}
function $l(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function qg(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function Zg(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function Mo(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Qg(e) {
  let t = E9(e);
  if (t === null)
    return e;
  t = t || 0;
  const r = (t & 4278190080) >>> 24, a = (t & 16711680) >>> 16, i = (t & 65280) >>> 8, s = (t & 255) / 255;
  return `rgba(${r}, ${a}, ${i}, ${s})`;
}
var ea = (e, t, r) => {
  if (Ve.fun(e))
    return e;
  if (Ve.arr(e))
    return ea({
      range: e,
      output: t,
      extrapolate: r
    });
  if (Ve.str(e.output[0]))
    return xf(e);
  const a = e, i = a.output, s = a.range || [0, 1], c = a.extrapolateLeft || a.extrapolate || "extend", u = a.extrapolateRight || a.extrapolate || "extend", p = a.easing || ((f) => f);
  return (f) => {
    const v = _9(f, s);
    return k9(
      f,
      s[v],
      s[v + 1],
      i[v],
      i[v + 1],
      p,
      c,
      u,
      a.map
    );
  };
};
function k9(e, t, r, a, i, s, c, u, p) {
  let f = p ? p(e) : e;
  if (f < t) {
    if (c === "identity")
      return f;
    c === "clamp" && (f = t);
  }
  if (f > r) {
    if (u === "identity")
      return f;
    u === "clamp" && (f = r);
  }
  return a === i ? a : t === r ? e <= t ? a : i : (t === -1 / 0 ? f = -f : r === 1 / 0 ? f = f - t : f = (f - t) / (r - t), f = s(f), a === -1 / 0 ? f = -f : i === 1 / 0 ? f = f + a : f = f * (i - a) + a, f);
}
function _9(e, t) {
  for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r)
    ;
  return r - 1;
}
var ta = Symbol.for("FluidValue.get"), na = Symbol.for("FluidValue.observers"), jl = (e) => !!(e && e[ta]), zl = (e) => e && e[ta] ? e[ta]() : e;
function N9(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function us(e, t) {
  const r = e[na];
  r && r.forEach((a) => {
    N9(a, t);
  });
}
var u0 = class {
  constructor(e) {
    if (!e && !(e = this.get))
      throw Error("Unknown getter");
    P9(this, e);
  }
}, P9 = (e, t) => c0(e, ta, t);
function Cf(e, t) {
  if (e[ta]) {
    let r = e[na];
    r || c0(e, na, r = /* @__PURE__ */ new Set()), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t));
  }
  return t;
}
function cs(e, t) {
  const r = e[na];
  if (r && r.has(t)) {
    const a = r.size - 1;
    a ? r.delete(t) : e[na] = null, e.observerRemoved && e.observerRemoved(a, t);
  }
}
var c0 = (e, t, r) => Object.defineProperty(e, t, {
  value: r,
  writable: !0,
  configurable: !0
}), Uo = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, F9 = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, Xg = new RegExp(`(${Uo.source})(%|[a-z]+)`, "i"), T9 = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, Ls = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, d0 = (e) => {
  const [t, r] = R9(e);
  if (!t || bf())
    return e;
  const a = window.getComputedStyle(document.documentElement).getPropertyValue(t);
  if (a)
    return a.trim();
  if (r && r.startsWith("--")) {
    const i = window.getComputedStyle(document.documentElement).getPropertyValue(r);
    return i || e;
  } else {
    if (r && Ls.test(r))
      return d0(r);
    if (r)
      return r;
  }
  return e;
}, R9 = (e) => {
  const t = Ls.exec(e);
  if (!t)
    return [,];
  const [, r, a] = t;
  return [r, a];
}, Jc, L9 = (e, t, r, a, i) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(a)}, ${i})`, f0 = (e) => {
  Jc || (Jc = gr ? (
    // match color names, ignore partial matches
    new RegExp(`(${Object.keys(gr).join("|")})(?!\\w)`, "g")
  ) : (
    // never match
    /^\b$/
  ));
  const t = e.output.map((s) => zl(s).replace(Ls, d0).replace(F9, Qg).replace(Jc, Qg)), r = t.map((s) => s.match(Uo).map(Number)), i = r[0].map(
    (s, c) => r.map((u) => {
      if (!(c in u))
        throw Error('The arity of each "output" value must be equal');
      return u[c];
    })
  ).map(
    (s) => ea({ ...e, output: s })
  );
  return (s) => {
    const c = !Xg.test(t[0]) && t.find((p) => Xg.test(p))?.replace(Uo, "");
    let u = 0;
    return t[0].replace(
      Uo,
      () => `${i[u++](s)}${c || ""}`
    ).replace(T9, L9);
  };
}, p0 = "react-spring: ", m0 = (e) => {
  const t = e;
  let r = !1;
  if (typeof t != "function")
    throw new TypeError(`${p0}once requires a function parameter`);
  return (...a) => {
    r || (t(...a), r = !0);
  };
}, I9 = m0(console.warn);
function M9() {
  I9(
    `${p0}The "interpolate" function is deprecated in v9 (use "to" instead)`
  );
}
m0(console.warn);
function h0(e) {
  return Ve.str(e) && (e[0] == "#" || /\d/.test(e) || // Do not identify a CSS variable as an AnimatedString if its SSR
  !bf() && Ls.test(e) || e in (gr || {}));
}
var g0 = bf() ? S.useEffect : S.useLayoutEffect, A9 = () => {
  const e = S.useRef(!1);
  return g0(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function j9() {
  const e = S.useState()[1], t = A9();
  return () => {
    t.current && e(Math.random());
  };
}
function z9(e, t) {
  const [r] = S.useState(
    () => ({
      inputs: t,
      result: e()
    })
  ), a = S.useRef(), i = a.current;
  let s = i;
  return s ? t && s.inputs && K9(t, s.inputs) || (s = {
    inputs: t,
    result: e()
  }) : s = r, S.useEffect(() => {
    a.current = s, i == r && (r.inputs = r.result = void 0);
  }, [s]), s.result;
}
function K9(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var D9 = (e) => S.useEffect(e, O9), O9 = [], ra = Symbol.for("Animated:node"), V9 = (e) => !!e && e[ra] === e, $f = (e) => e && e[ra], v0 = (e, t) => d9(e, ra, t), Ef = (e) => e && e[ra] && e[ra].getPayload(), y0 = class {
  constructor() {
    v0(this, this);
  }
  /** Get every `AnimatedValue` used by this node. */
  getPayload() {
    return this.payload || [];
  }
}, Is = class extends y0 {
  constructor(e) {
    super(), this._value = e, this.done = !0, this.durationProgress = 0, Ve.num(this._value) && (this.lastPosition = this._value);
  }
  /** @internal */
  static create(e) {
    return new Is(e);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(e, t) {
    return Ve.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value === e ? !1 : (this._value = e, !0);
  }
  reset() {
    const { done: e } = this;
    this.done = !1, Ve.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null);
  }
}, kf = class extends Is {
  constructor(e) {
    super(0), this._string = null, this._toString = ea({
      output: [e, e]
    });
  }
  /** @internal */
  static create(e) {
    return new kf(e);
  }
  getValue() {
    const e = this._string;
    return e ?? (this._string = this._toString(this._value));
  }
  setValue(e) {
    if (Ve.str(e)) {
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
    e && (this._toString = ea({
      output: [this.getValue(), e]
    })), this._value = 0, super.reset();
  }
}, ds = { dependencies: null }, Ms = class extends y0 {
  constructor(e) {
    super(), this.source = e, this.setValue(e);
  }
  getValue(e) {
    const t = {};
    return as(this.source, (r, a) => {
      V9(r) ? t[a] = r.getValue(e) : jl(r) ? t[a] = zl(r) : e || (t[a] = r);
    }), t;
  }
  /** Replace the raw object data */
  setValue(e) {
    this.source = e, this.payload = this._makePayload(e);
  }
  reset() {
    this.payload && At(this.payload, (e) => e.reset());
  }
  /** Create a payload set. */
  _makePayload(e) {
    if (e) {
      const t = /* @__PURE__ */ new Set();
      return as(e, this._addToPayload, t), Array.from(t);
    }
  }
  /** Add to a payload set. */
  _addToPayload(e) {
    ds.dependencies && jl(e) && ds.dependencies.add(e);
    const t = Ef(e);
    t && At(t, (r) => this.add(r));
  }
}, b0 = class extends Ms {
  constructor(e) {
    super(e);
  }
  /** @internal */
  static create(e) {
    return new b0(e);
  }
  getValue() {
    return this.source.map((e) => e.getValue());
  }
  setValue(e) {
    const t = this.getPayload();
    return e.length == t.length ? t.map((r, a) => r.setValue(e[a])).some(Boolean) : (super.setValue(e.map(H9)), !0);
  }
};
function H9(e) {
  return (h0(e) ? kf : Is).create(e);
}
function B9(e) {
  const t = $f(e);
  return t ? t.constructor : Ve.arr(e) ? b0 : h0(e) ? kf : Is;
}
var Yg = (e, t) => {
  const r = (
    // Function components must use "forwardRef" to avoid being
    // re-rendered on every animation frame.
    !Ve.fun(e) || e.prototype && e.prototype.isReactComponent
  );
  return S.forwardRef((a, i) => {
    const s = S.useRef(null), c = r && // eslint-disable-next-line react-hooks/rules-of-hooks
    S.useCallback(
      ($) => {
        s.current = G9(i, $);
      },
      [i]
    ), [u, p] = W9(a, t), f = j9(), v = () => {
      const $ = s.current;
      if (r && !$)
        return;
      ($ ? t.applyAnimatedValues($, u.getValue(!0)) : !1) === !1 && f();
    }, g = new U9(v, p), h = S.useRef();
    g0(() => (h.current = g, At(p, ($) => Cf($, g)), () => {
      h.current && (At(
        h.current.deps,
        ($) => cs($, h.current)
      ), Te.cancel(h.current.update));
    })), S.useEffect(v, []), D9(() => () => {
      const $ = h.current;
      At($.deps, (w) => cs(w, $));
    });
    const b = t.getComponentProps(u.getValue());
    return /* @__PURE__ */ S.createElement(e, { ...b, ref: c });
  });
}, U9 = class {
  constructor(e, t) {
    this.update = e, this.deps = t;
  }
  eventObserved(e) {
    e.type == "change" && Te.write(this.update);
  }
};
function W9(e, t) {
  const r = /* @__PURE__ */ new Set();
  return ds.dependencies = r, e.style && (e = {
    ...e,
    style: t.createAnimatedStyle(e.style)
  }), e = new Ms(e), ds.dependencies = null, [e, r];
}
function G9(e, t) {
  return e && (Ve.fun(e) ? e(t) : e.current = t), t;
}
var Jg = Symbol.for("AnimatedComponent"), q9 = (e, {
  applyAnimatedValues: t = () => !1,
  createAnimatedStyle: r = (i) => new Ms(i),
  getComponentProps: a = (i) => i
} = {}) => {
  const i = {
    applyAnimatedValues: t,
    createAnimatedStyle: r,
    getComponentProps: a
  }, s = (c) => {
    const u = e1(c) || "Anonymous";
    return Ve.str(c) ? c = s[c] || (s[c] = Yg(c, i)) : c = c[Jg] || (c[Jg] = Yg(c, i)), c.displayName = `Animated(${u})`, c;
  };
  return as(e, (c, u) => {
    Ve.arr(e) && (u = e1(c)), s[u] = s(c);
  }), {
    animated: s
  };
}, e1 = (e) => Ve.str(e) ? e : e && Ve.str(e.displayName) ? e.displayName : Ve.fun(e) && e.name || null, t1 = (e) => e instanceof x0, Z9 = 1, x0 = class extends u0 {
  constructor() {
    super(...arguments), this.id = Z9++, this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(e) {
    this._priority != e && (this._priority = e, this._onPriorityChange(e));
  }
  /** Get the current value */
  get() {
    const e = $f(this);
    return e && e.getValue();
  }
  /** Create a spring that maps our value to another value */
  to(...e) {
    return Al.to(this, e);
  }
  /** @deprecated Use the `to` method instead. */
  interpolate(...e) {
    return M9(), Al.to(this, e);
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
  _onChange(e, t = !1) {
    us(this, {
      type: "change",
      parent: this,
      value: e,
      idle: t
    });
  }
  /** Tell our children about our new priority */
  _onPriorityChange(e) {
    this.idle || Sf.sort(this), us(this, {
      type: "priority",
      parent: this,
      priority: e
    });
  }
}, _f = ({
  children: e,
  ...t
}) => {
  const r = S.useContext(fs), a = t.pause || !!r.pause, i = t.immediate || !!r.immediate;
  t = z9(() => ({ pause: a, immediate: i }), [a, i]);
  const { Provider: s } = fs;
  return /* @__PURE__ */ S.createElement(s, { value: t }, e);
}, fs = Q9(_f, {});
_f.Provider = fs.Provider;
_f.Consumer = fs.Consumer;
function Q9(e, t) {
  return Object.assign(e, S.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e;
}
var X9 = class extends x0 {
  constructor(e, t) {
    super(), this.source = e, this.idle = !0, this._active = /* @__PURE__ */ new Set(), this.calc = ea(...t);
    const r = this._get(), a = B9(r);
    v0(this, a.create(r));
  }
  advance(e) {
    const t = this._get(), r = this.get();
    f9(t, r) || ($f(this).setValue(t), this._onChange(t, this.idle)), !this.idle && n1(this._active) && ed(this);
  }
  _get() {
    const e = Ve.arr(this.source) ? this.source.map(zl) : ji(zl(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle && !n1(this._active) && (this.idle = !1, At(Ef(this), (e) => {
      e.done = !1;
    }), Al.skipAnimation ? (Te.batchedUpdates(() => this.advance()), ed(this)) : Sf.start(this));
  }
  // Observe our sources only when we're observed.
  _attach() {
    let e = 1;
    At(ji(this.source), (t) => {
      jl(t) && Cf(t, this), t1(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1));
    }), this.priority = e, this._start();
  }
  // Stop observing our sources once we have no observers.
  _detach() {
    At(ji(this.source), (e) => {
      jl(e) && cs(e, this);
    }), this._active.clear(), ed(this);
  }
  /** @internal */
  eventObserved(e) {
    e.type == "change" ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : e.type == "idle" ? this._active.delete(e.parent) : e.type == "priority" && (this.priority = ji(this.source).reduce(
      (t, r) => Math.max(t, (t1(r) ? r.priority : 0) + 1),
      0
    ));
  }
};
function Y9(e) {
  return e.idle !== !1;
}
function n1(e) {
  return !e.size || Array.from(e).every(Y9);
}
function ed(e) {
  e.idle || (e.idle = !0, At(Ef(e), (t) => {
    t.done = !0;
  }), us(e, {
    type: "idle",
    parent: e
  }));
}
Al.assign({
  createStringInterpolator: f0,
  to: (e, t) => new X9(e, t)
});
var w0 = /^--/;
function J9(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !w0.test(e) && !(Bi.hasOwnProperty(e) && Bi[e]) ? t + "px" : ("" + t).trim();
}
var r1 = {};
function e7(e, t) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  const r = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", { style: a, children: i, scrollTop: s, scrollLeft: c, viewBox: u, ...p } = t, f = Object.values(p), v = Object.keys(p).map(
    (g) => r || e.hasAttribute(g) ? g : r1[g] || (r1[g] = g.replace(
      /([A-Z])/g,
      // Attributes are written in dash case
      (h) => "-" + h.toLowerCase()
    ))
  );
  i !== void 0 && (e.textContent = i);
  for (const g in a)
    if (a.hasOwnProperty(g)) {
      const h = J9(g, a[g]);
      w0.test(g) ? e.style.setProperty(g, h) : e.style[g] = h;
    }
  v.forEach((g, h) => {
    e.setAttribute(g, f[h]);
  }), s !== void 0 && (e.scrollTop = s), c !== void 0 && (e.scrollLeft = c), u !== void 0 && e.setAttribute("viewBox", u);
}
var Bi = {
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
}, t7 = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), n7 = ["Webkit", "Ms", "Moz", "O"];
Bi = Object.keys(Bi).reduce((e, t) => (n7.forEach((r) => e[t7(r, t)] = e[t]), e), Bi);
var r7 = /^(matrix|translate|scale|rotate|skew)/, l7 = /^(translate)/, i7 = /^(rotate|skew)/, td = (e, t) => Ve.num(e) && e !== 0 ? e + t : e, Wo = (e, t) => Ve.arr(e) ? e.every((r) => Wo(r, t)) : Ve.num(e) ? e === t : parseFloat(e) === t, a7 = class extends Ms {
  constructor({ x: e, y: t, z: r, ...a }) {
    const i = [], s = [];
    (e || t || r) && (i.push([e || 0, t || 0, r || 0]), s.push((c) => [
      `translate3d(${c.map((u) => td(u, "px")).join(",")})`,
      // prettier-ignore
      Wo(c, 0)
    ])), as(a, (c, u) => {
      if (u === "transform")
        i.push([c || ""]), s.push((p) => [p, p === ""]);
      else if (r7.test(u)) {
        if (delete a[u], Ve.und(c))
          return;
        const p = l7.test(u) ? "px" : i7.test(u) ? "deg" : "";
        i.push(ji(c)), s.push(
          u === "rotate3d" ? ([f, v, g, h]) => [
            `rotate3d(${f},${v},${g},${td(h, p)})`,
            Wo(h, 0)
          ] : (f) => [
            `${u}(${f.map((v) => td(v, p)).join(",")})`,
            Wo(f, u.startsWith("scale") ? 1 : 0)
          ]
        );
      }
    }), i.length && (a.transform = new o7(i, s)), super(a);
  }
}, o7 = class extends u0 {
  constructor(e, t) {
    super(), this.inputs = e, this.transforms = t, this._value = null;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let e = "", t = !0;
    return At(this.inputs, (r, a) => {
      const i = zl(r[0]), [s, c] = this.transforms[a](
        Ve.arr(i) ? i : r.map(zl)
      );
      e += " " + s, t = t && c;
    }), t ? "none" : e;
  }
  // Start observing our inputs once we have an observer.
  observerAdded(e) {
    e == 1 && At(
      this.inputs,
      (t) => At(
        t,
        (r) => jl(r) && Cf(r, this)
      )
    );
  }
  // Stop observing our inputs once we have no observers.
  observerRemoved(e) {
    e == 0 && At(
      this.inputs,
      (t) => At(
        t,
        (r) => jl(r) && cs(r, this)
      )
    );
  }
  eventObserved(e) {
    e.type == "change" && (this._value = null), us(this, e);
  }
}, s7 = [
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
Al.assign({
  batchedUpdates: sa.unstable_batchedUpdates,
  createStringInterpolator: f0,
  colors: g9
});
q9(s7, {
  applyAnimatedValues: e7,
  createAnimatedStyle: (e) => new a7(e),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getComponentProps: ({ scrollTop: e, scrollLeft: t, ...r }) => r
});
var u7 = [
  "bottom end",
  "bottom right",
  "top right",
  "top end",
  "start bottom",
  "end bottom",
  "right bottom",
  "left bottom",
  "top right"
], c7 = (e) => u7.indexOf(e) === -1, d7 = [
  void 0,
  {
    isLandscape: void 0,
    isMobile: void 0,
    screenHeight: void 0,
    screenWidth: void 0
  }
];
function l1() {
  if (typeof window > "u")
    return d7;
  let e;
  window.innerWidth <= 767 ? e = "sm" : window.innerWidth <= 1279 ? e = "md" : e = "lg";
  const t = window.matchMedia?.("(orientation: landscape)")?.matches ?? !1, r = (window.matchMedia?.("(hover: none) and (pointer: coarse)")?.matches ?? !1) || window.innerWidth <= 767;
  return [
    e,
    {
      isLandscape: t,
      isMobile: r,
      screenHeight: window.innerHeight,
      screenWidth: window.innerWidth
    }
  ];
}
function S0(e = 100) {
  const [t, r] = S.useState(l1()), a = S.useRef();
  return S.useEffect(() => {
    const i = () => {
      clearTimeout(a.current), a.current = setTimeout(() => r(l1()), e);
    };
    return window.addEventListener("resize", i), window.addEventListener("orientationchange", i), () => {
      window.removeEventListener("resize", i), window.removeEventListener("orientationchange", i), clearTimeout(a.current);
    };
  }, [e, r]), t;
}
function f7({
  controlledValue: e,
  defaultValue: t,
  warnFn: r
}) {
  const [a, i] = S.useState(t);
  return e !== void 0 && t !== void 0 && (r ? r() : zn(
    "A controlled value and a default value were both provided. An element must be either controlled or uncontrolled. Decide between using any and remove on of these props"
  )), [
    e ?? a,
    e !== void 0 ? void 0 : i
  ];
}
var p7 = S.createContext(!1), C0 = /* @__PURE__ */ new Set(), i1 = {
  "becoming private": " for public use and will become private",
  "behavior change": " and legacy behavior will be removed",
  "package move": " and will move packages",
  "prop replacement": " and will be removed",
  rename: " and will be removed",
  "token replacement": " and will be removed"
}, m7 = (e) => C0.has(e), h7 = (e) => {
  C0.add(e);
}, g7 = () => S.useContext(p7), v7 = (e, t) => Object.hasOwn(i1, e) ? `${i1[e]}${t ? ` in ${t}` : ""}` : t ? ` and will change in ${t}` : "", y7 = ({
  change: e,
  packageName: t,
  removalVersion: r,
  replacement: a,
  subject: i
}) => {
  const s = a ? ` Prefer ${a}.` : "", c = v7(e, r);
  return `${t} ${i} is deprecated${c}.${s}`;
}, b7 = ({
  change: e,
  message: t,
  packageName: r,
  removalVersion: a,
  replacement: i,
  subject: s
}) => t || (!e || !r || !s ? "" : y7({
  change: e,
  packageName: r,
  removalVersion: a,
  replacement: i,
  subject: s
})), a1 = ({
  change: e,
  message: t,
  packageName: r,
  removalVersion: a,
  replacement: i,
  shouldWarn: s = !0,
  subject: c,
  warningKey: u = t
}) => {
  const p = g7(), f = b7({
    change: e,
    message: t,
    packageName: r,
    removalVersion: a,
    replacement: i,
    subject: c
  });
  S.useEffect(() => {
    p || !s || !f || m7(u ?? f) || (h7(u ?? f), zn(f));
  }, [p, f, s, u]);
}, Nf = typeof window > "u" ? S.useEffect : S.useLayoutEffect, $0 = (e, t) => {
  const r = S.useRef(t);
  return at(
    e === void 0 || typeof e == "object",
    "Locales should be an object or undefined"
  ), at(
    // using a useMemo to ensure the defaultValues are only validated once, and not on every render as this is a heavy operation
    S.useMemo(() => typeof r.current == "object" && Object.values(r.current).every(
      (i) => typeof i == "string" && i.length > 0
    ), []),
    "Default values should be an object, with each key being a string and each value being a non-empty string"
  ), S.useMemo(
    () => (
      // Using a Proxy object rather than fully-recreating the object each time, this allows us to lazy load the values
      new Proxy(r.current, {
        get: (i, s) => {
          const c = e?.[s] ?? r.current[s];
          return (u = {}) => c.replace(/{{(.*?)}}/g, (p, f) => {
            const v = u[f];
            return af(
              v,
              `Missing parameter "${f}" in locales`
            ), v.toString();
          });
        }
      })
    ),
    [e]
  );
}, o1 = 0;
function x7(e = "") {
  return o1 += 1, e + o1;
}
function w7(e, t) {
  const r = S.useRef(null);
  return at(
    !0,
    "useUniqueId(): The prefix provided is an empty string. If you want to remove the prefix, do not provide it. If you want to use the default prefix, do not provide a prefix."
  ), r.current === null && (r.current = x7(
    `${S7}-`
  )), r.current;
}
var S7 = "@paloma";
function s1(e, t, r) {
  let a = null;
  const i = (s) => {
    S.Children.forEach(s, (c) => {
      if (S.isValidElement(c)) {
        if (c.type === S.Fragment) {
          i(
            c.props.children
          );
          return;
        }
        const u = c.type === t, p = r == null;
        if (u && p) {
          if (a)
            throw new Error(
              "Found multiple children of type " + t.toString()
            );
          a = c;
        }
      }
    });
  };
  return i(e), a;
}
function zt(e, t, r) {
  try {
    const i = C.Children.only(e);
    if (i.type === t)
      return r ? r(i, i?.props) : e;
  } catch {
  }
  return null;
}
var Pf = (e) => e ? !!e.type.toString().match(C7) : !1, C7 = /"data-namespace":\s?"@paloma\/icons"/i;
function bt(e, t) {
  if (!t)
    return null;
  const r = C.Children.only(t);
  return C.cloneElement(r, { ...e });
}
var $7 = Z({
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
}), E7 = "span", Ue = S.forwardRef(
  ({
    as: e,
    children: t,
    className: r,
    fontWeight: a = "normal",
    showTitle: i = !1,
    size: s,
    truncate: c = !1,
    underline: u = !1,
    variant: p,
    ...f
  }, v) => {
    const g = e ?? E7, [h, b] = S.useMemo(() => p === "heading" ? [s ?? "large", p] : [s ?? "medium", "body"], [s, p]);
    return /* @__PURE__ */ C.createElement(
      g,
      {
        className: $7({
          className: r,
          fontWeight: a,
          truncate: c,
          underline: u,
          [b]: h
        }),
        "data-font-weight": a,
        "data-size": h,
        "data-truncate": c,
        "data-underline": u,
        "data-variant": b,
        ref: v,
        title: i ? f.title ?? (c && typeof t == "string" ? t : void 0) : void 0,
        ...f
      },
      t
    );
  }
), Ff = (e, t = {}) => {
  if (typeof e == "string")
    return /* @__PURE__ */ C.createElement(Ue, { ...t }, e);
  if (zt(e, Ue)) {
    const r = {
      ...t ?? {},
      ...e.props
    };
    return /* @__PURE__ */ C.createElement(Ue, { ...r });
  }
  if (C.isValidElement(e) && typeof e.type == "string") {
    const r = {};
    e.type === "a" && (r.color = "#0000EE", r.textDecoration = "underline");
    const a = e.props, i = {
      ...r,
      ...t.style,
      ...a.style
    };
    return C.cloneElement(
      e,
      {
        style: i
      }
    );
  }
  return e;
};
function E0(e, t, r) {
  const a = (i, s) => {
    if (C.isValidElement(i) && i.type === t)
      return r(i, s);
  };
  return S.Children.map(e, (i, s) => C.isValidElement(i) && i.type === S.Fragment ? C.cloneElement(i, {
    children: E0(
      i.props.children,
      t,
      r
    )
  }) : a(i, s) ?? i);
}
function k0(e) {
  const t = e.match(k7)?.[0];
  if (t)
    return Number.parseInt(t);
}
var k7 = /\d+[.d+]?/g, _7 = [
  /* Uses a dummy class because FocusRing is a functional component that just adds
      the class to the content.
  
      The cn or other style functions on the FocusRing are always called, so we can't
      listen to them to test functionality */
  "@paloma-focus-ring",
  "outline",
  "outline-2",
  "outline-offset-2",
  "outline-interactive-highlight"
], $n = ({
  children: e,
  disabled: t,
  focusRingClass: r,
  ...a
}) => t ? e : /* @__PURE__ */ C.createElement(kv, { focusRingClass: it(_7, r), ...a }, e);
Z({
  base: "py-4 flex flex-col items-start border-t-0 border-l-0 border-r-0 border-b border-b-neutral-subtle border-solid",
  variants: {
    expanded: {
      true: "pb-8"
    }
  }
});
Z({
  base: "flex items-center text-content-neutral-bold",
  variants: {
    expanded: {
      true: "text-content-highlight"
    }
  }
});
Z({
  base: "text-content-neutral-bold",
  variants: {
    expanded: {
      true: "!text-content-highlight"
    }
  }
});
Z({
  base: "flex items-center text-content-neutral-subtle",
  variants: {
    size: {
      large: "h-8",
      medium: "h-6"
    }
  }
});
Z({
  base: "w-full grid overflow-hidden transition-all duration-300 ease-in-out motion-reduce:transition-none",
  variants: {
    expanded: {
      false: "grid-rows-[0fr] invisible",
      true: "grid-rows-[1fr] visible"
    }
  }
});
Z({
  variants: {
    variant: {
      contained: "p-8 rounded-md bg-surface-level-01",
      "un-contained": ""
    }
  }
});
var Tf = {
  "bottom-center": "",
  "bottom-left": "",
  "bottom-right": "",
  "top-center": "",
  "top-left": "",
  "top-right": ""
}, Rf = {
  circle: "",
  square: ""
}, nd = {
  false: "",
  true: ""
}, _0 = {
  avatar: "",
  dot: "",
  icon: "",
  product: "",
  text: ""
}, N7 = {
  negative: "",
  none: "",
  positive: "",
  warning: ""
}, P7 = {
  highlight: "",
  neutral: ""
}, F7 = {
  small: "",
  "x-small": ""
}, T7 = Z({
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
    position: Tf,
    shape: Rf,
    standalone: {
      false: "@paloma-badge-rotation-relative absolute"
    }
  }
}), R7 = Z({
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
    position: Tf,
    shape: Rf,
    standalone: {
      false: "@paloma-badge-position-relative absolute z-10"
    },
    variant: _0
  }
}), L7 = Z({
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
    position: Tf,
    shape: Rf,
    standalone: {
      false: "max-w-[80px]",
      true: ""
    }
  }
}), I7 = Z({
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
    appearance: P7,
    emphasis: {
      bold: "@paloma-badge-content-bold text-content-inverse-bold",
      subtle: "@paloma-badge-content-subtle text-content-neutral-bold"
    },
    hasIcon: nd,
    hasProductLogo: nd,
    isLabelSingleCharacter: nd,
    size: F7,
    status: N7,
    variant: _0
  }
}), M7 = Z({
  base: "@paloma-badge-container relative w-fit"
}), As = ({
  appearance: e = "neutral",
  "aria-label": t,
  avatar: r,
  children: a,
  className: i,
  containerClassName: s,
  cutoutBorder: c = !0,
  cutoutColor: u,
  emphasis: p = "subtle",
  icon: f,
  label: v,
  position: g,
  productLogo: h,
  shape: b = "square",
  size: $ = "small",
  standalone: w = !1,
  status: k = "none",
  variant: T,
  ...F
}) => {
  T || (T = v ? "text" : f ?? r ?? h ? "icon" : "dot"), (T === "avatar" || T === "product") && (T = "icon");
  const H = () => {
    if (v)
      return /* @__PURE__ */ C.createElement(
        Ue,
        {
          "data-testid": "@paloma-badge-label-id",
          size: $,
          truncate: !0,
          variant: "body"
        },
        v
      );
  }, K = () => {
    if (f)
      return bt(
        {
          "data-testid": "@paloma-badge-icon-id",
          size: "small"
        },
        f
      );
  }, Y = () => {
    if (r)
      return C.cloneElement(r, {
        ...r.props,
        "aria-label": r.props["aria-label"] ?? t ?? v,
        badge: void 0,
        size: $ === "small" ? "x-small" : "xx-small"
      });
  }, re = () => {
    if (h)
      return C.cloneElement(
        h,
        {
          ...h.props,
          contained: !0,
          size: $ === "small" ? "x-small" : "2x-small"
        }
      );
  }, Q = () => {
    if (T !== "dot")
      return /* @__PURE__ */ C.createElement(C.Fragment, null, K(), H(), Y(), re());
  }, X = g?.split("-"), ie = !!(v && v.length === 1), ae = ie && !f, ne = (A) => /* @__PURE__ */ C.createElement(
    "div",
    {
      className: T7({
        class: w ? s : "",
        position: g,
        shape: b,
        standalone: w
      }),
      "data-appearance": e,
      "data-content-single-element": ae,
      "data-cutout-border": c,
      "data-emphasis": p,
      "data-shape": b,
      "data-size": $,
      "data-status": k,
      "data-testid": "@paloma-badge-rotation-id",
      "data-variant": T,
      ...w ? A : {}
    },
    /* @__PURE__ */ C.createElement(
      "div",
      {
        className: R7({
          position: g,
          shape: b,
          standalone: w,
          variant: T
        }),
        "data-position-x": X?.[1],
        "data-position-y": X?.[0],
        "data-shape": b,
        "data-testid": "@paloma-badge-position-id"
      },
      /* @__PURE__ */ C.createElement(
        "div",
        {
          className: L7({
            cutoutBorder: c,
            hasProductLogo: !!h,
            position: g,
            shape: b,
            standalone: w
          }),
          "data-testid": "@paloma-badge-border-id",
          style: u ? { borderColor: u } : void 0
        },
        /* @__PURE__ */ C.createElement(
          "div",
          {
            "aria-label": t,
            className: I7({
              appearance: e,
              class: i,
              emphasis: p,
              hasIcon: !!f,
              hasProductLogo: !!h,
              isLabelSingleCharacter: ie,
              size: $,
              status: k,
              variant: T
            }),
            "data-testid": "@paloma-badge-content-id",
            role: T !== "dot" ? "status" : void 0
          },
          Q()
        )
      )
    )
  );
  return w ? /* @__PURE__ */ C.createElement(ne, { ...F }) : /* @__PURE__ */ C.createElement(
    "div",
    {
      className: M7({ class: s }),
      "data-testid": "@paloma-badge-container-id",
      ...F
    },
    a,
    /* @__PURE__ */ C.createElement(ne, null)
  );
}, A7 = Z({
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
}), u1 = ({
  children: e,
  showTitle: t,
  size: r
}) => /* @__PURE__ */ C.createElement(
  Ue,
  {
    fontWeight: "bold",
    showTitle: t,
    size: r,
    truncate: !0,
    variant: "body"
  },
  e
), js = S.forwardRef(
  ({
    "aria-label": e,
    as: t,
    children: r,
    className: a,
    disabled: i,
    hideButton: s,
    iconOnly: c,
    isLoading: u,
    leadingIcon: p,
    loadingIcon: f,
    loadingLabel: v = "Loading",
    onBlur: g,
    onClick: h,
    onFocus: b,
    onPress: $,
    showTitle: w,
    size: k = "medium",
    trailingIcon: T,
    type: F = "button",
    variant: H = "primary",
    ...K
  }, Y) => {
    const re = t ?? "button", Q = t === "div" || t === "span", X = t === "a", ie = S.useRef(null);
    at(
      !(c && !e && !Q),
      "Button with iconOnly must have an aria-label for accessibility. If Button is purely decorative and does not convey any meaning or action, it should have aria-hidden='true' to be ignored by assistive technologies."
    );
    const { buttonProps: ae } = ws(
      {
        elementType: re,
        isDisabled: !!i,
        onBlur: g,
        onFocus: b,
        onPress: u ? void 0 : (B) => {
          $ ? $(B) : h?.(B);
        }
      },
      ie
    ), ne = Q ? K : $e(ae, K), A = /* @__PURE__ */ C.createElement(C.Fragment, null, f ?? bt(
      { className: "animate-loading-hourglass", size: k },
      /* @__PURE__ */ C.createElement(f8, null)
    ), !c && /* @__PURE__ */ C.createElement(u1, { size: k }, v));
    return /* @__PURE__ */ C.createElement($n, null, S.createElement(
      re,
      {
        "aria-label": u ? v : e,
        className: A7({
          class: a,
          hideButton: s,
          iconOnly: c,
          isDecorative: Q,
          isLoading: u,
          size: k,
          variant: H
        }),
        /* Add this to test uses of Button on other components */
        "data-size": Ce(k),
        /* Add this to test uses of Button on other components */
        "data-variant": Ce(H),
        ref: Hn(ie, Y),
        ...ne,
        "aria-busy": u ? !0 : void 0,
        "aria-disabled": !!i || !!u || void 0,
        // react-aria adds role="button" for non-button elements; strip it for links
        ...X && { role: void 0 },
        type: X || Q ? void 0 : u && (F === "submit" || F === "reset") ? "button" : F
      },
      u ? A : /* @__PURE__ */ C.createElement(C.Fragment, null, bt(
        {
          size: p?.props.size ? p.props.size : k
        },
        p
      ), !c && /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(u1, { showTitle: w, size: k }, r), bt(
        {
          size: T?.props.size ? T.props.size : k
        },
        T
      )))
    ));
  }
), j7 = Z({
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
}), z7 = Z({
  base: "object-cover",
  extend: j7,
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
}), K7 = ({
  alt: e,
  as: t,
  className: r,
  loading: a,
  ratio: i,
  size: s,
  sizes: c,
  src: u,
  srcSet: p,
  style: f,
  ...v
}) => {
  const g = Ky("img"), h = t ?? g;
  at(
    typeof e == "string",
    "@paloma/Image requires an alt prop to be passed. Use an empty string (alt='') for decorative images or provide descriptive text for informative images."
  ), at(
    !(p && !c),
    "Image: srcSet was provided without sizes. This may lead to unexpected behavior."
  );
  const b = { height: s, width: s };
  return /* @__PURE__ */ C.createElement(
    h,
    {
      alt: e,
      className: z7({
        class: r,
        ratio: i,
        size: typeof s == "string" ? s : void 0
      }),
      loading: a,
      sizes: c,
      src: u,
      srcSet: p,
      style: { ...b, ...f },
      ...v
    }
  );
}, D7 = Z({
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
}), O7 = "h-full w-full", c1 = S.forwardRef(
  ({
    alt: e,
    as: t,
    children: r,
    className: a,
    contained: i,
    size: s = "medium",
    src: c,
    style: u,
    ...p
  }, f) => {
    const v = t ?? "div", h = { ...{
      height: s,
      ...i ? { width: s } : {}
    }, ...u }, b = typeof s == "number" ? void 0 : s;
    return at(
      !r || !c && !e,
      "ProductLogo with children should not receive src nor alt"
    ), at(
      r !== void 0 || c !== void 0 && e !== void 0,
      "ProductLogo without children should have both src and alt"
    ), /* @__PURE__ */ C.createElement($n, null, /* @__PURE__ */ C.createElement(
      v,
      {
        className: D7({
          class: a,
          contained: i,
          size: b
        }),
        ref: f,
        style: h,
        ...p
      },
      r ? S.cloneElement(r, {
        className: it(r.props.className, O7)
      }) : /* @__PURE__ */ C.createElement(
        K7,
        {
          alt: e,
          className: "h-full w-auto rounded-none",
          "data-testid": "img",
          src: c
        }
      )
    ));
  }
), d1 = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Lt = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, V7 = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function N0(e, t) {
  e.forEach(function(r) {
    Array.isArray(r) ? N0(r, t) : t.push(r);
  });
}
function P0(e) {
  let t = [];
  return N0(e, t), t;
}
var F0 = (...e) => P0(e).filter(Boolean), T0 = (e, t) => {
  let r = {}, a = Object.keys(e), i = Object.keys(t);
  for (let s of a)
    if (i.includes(s)) {
      let c = e[s], u = t[s];
      typeof c == "object" && typeof u == "object" ? r[s] = T0(c, u) : Array.isArray(c) || Array.isArray(u) ? r[s] = F0(u, c) : r[s] = u + " " + c;
    } else
      r[s] = e[s];
  for (let s of i)
    a.includes(s) || (r[s] = t[s]);
  return r;
}, f1 = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim(), Lf = "-";
function H7(e) {
  const t = U7(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: a
  } = e;
  function i(c) {
    const u = c.split(Lf);
    return u[0] === "" && u.length !== 1 && u.shift(), R0(u, t) || B7(c);
  }
  function s(c, u) {
    const p = r[c] || [];
    return u && a[c] ? [...p, ...a[c]] : p;
  }
  return {
    getClassGroupId: i,
    getConflictingClassGroupIds: s
  };
}
function R0(e, t) {
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], a = t.nextPart.get(r), i = a ? R0(e.slice(1), a) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const s = e.join(Lf);
  return t.validators.find(({
    validator: c
  }) => c(s))?.classGroupId;
}
var p1 = /^\[(.+)\]$/;
function B7(e) {
  if (p1.test(e)) {
    const t = p1.exec(e)[1], r = t?.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function U7(e) {
  const {
    theme: t,
    prefix: r
  } = e, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return G7(Object.entries(e.classGroups), r).forEach(([s, c]) => {
    Id(c, a, s, t);
  }), a;
}
function Id(e, t, r, a) {
  e.forEach((i) => {
    if (typeof i == "string") {
      const s = i === "" ? t : m1(t, i);
      s.classGroupId = r;
      return;
    }
    if (typeof i == "function") {
      if (W7(i)) {
        Id(i(a), t, r, a);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: r
      });
      return;
    }
    Object.entries(i).forEach(([s, c]) => {
      Id(c, m1(t, s), r, a);
    });
  });
}
function m1(e, t) {
  let r = e;
  return t.split(Lf).forEach((a) => {
    r.nextPart.has(a) || r.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(a);
  }), r;
}
function W7(e) {
  return e.isThemeGetter;
}
function G7(e, t) {
  return t ? e.map(([r, a]) => {
    const i = a.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([c, u]) => [t + c, u])) : s);
    return [r, i];
  }) : e;
}
function q7(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  function i(s, c) {
    r.set(s, c), t++, t > e && (t = 0, a = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get(s) {
      let c = r.get(s);
      if (c !== void 0)
        return c;
      if ((c = a.get(s)) !== void 0)
        return i(s, c), c;
    },
    set(s, c) {
      r.has(s) ? r.set(s, c) : i(s, c);
    }
  };
}
var L0 = "!";
function Z7(e) {
  const t = e.separator, r = t.length === 1, a = t[0], i = t.length;
  return function(c) {
    const u = [];
    let p = 0, f = 0, v;
    for (let w = 0; w < c.length; w++) {
      let k = c[w];
      if (p === 0) {
        if (k === a && (r || c.slice(w, w + i) === t)) {
          u.push(c.slice(f, w)), f = w + i;
          continue;
        }
        if (k === "/") {
          v = w;
          continue;
        }
      }
      k === "[" ? p++ : k === "]" && p--;
    }
    const g = u.length === 0 ? c : c.substring(f), h = g.startsWith(L0), b = h ? g.substring(1) : g, $ = v && v > f ? v - f : void 0;
    return {
      modifiers: u,
      hasImportantModifier: h,
      baseClassName: b,
      maybePostfixModifierPosition: $
    };
  };
}
function Q7(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((a) => {
    a[0] === "[" ? (t.push(...r.sort(), a), r = []) : r.push(a);
  }), t.push(...r.sort()), t;
}
function X7(e) {
  return {
    cache: q7(e.cacheSize),
    splitModifiers: Z7(e),
    ...H7(e)
  };
}
var Y7 = /\s+/;
function J7(e, t) {
  const {
    splitModifiers: r,
    getClassGroupId: a,
    getConflictingClassGroupIds: i
  } = t, s = /* @__PURE__ */ new Set();
  return e.trim().split(Y7).map((c) => {
    const {
      modifiers: u,
      hasImportantModifier: p,
      baseClassName: f,
      maybePostfixModifierPosition: v
    } = r(c);
    let g = a(v ? f.substring(0, v) : f), h = !!v;
    if (!g) {
      if (!v)
        return {
          isTailwindClass: !1,
          originalClassName: c
        };
      if (g = a(f), !g)
        return {
          isTailwindClass: !1,
          originalClassName: c
        };
      h = !1;
    }
    const b = Q7(u).join(":");
    return {
      isTailwindClass: !0,
      modifierId: p ? b + L0 : b,
      classGroupId: g,
      originalClassName: c,
      hasPostfixModifier: h
    };
  }).reverse().filter((c) => {
    if (!c.isTailwindClass)
      return !0;
    const {
      modifierId: u,
      classGroupId: p,
      hasPostfixModifier: f
    } = c, v = u + p;
    return s.has(v) ? !1 : (s.add(v), i(p, f).forEach((g) => s.add(u + g)), !0);
  }).reverse().map((c) => c.originalClassName).join(" ");
}
function eS() {
  let e = 0, t, r, a = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = I0(t)) && (a && (a += " "), a += r);
  return a;
}
function I0(e) {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let a = 0; a < e.length; a++)
    e[a] && (t = I0(e[a])) && (r && (r += " "), r += t);
  return r;
}
function Md(e, ...t) {
  let r, a, i, s = c;
  function c(p) {
    const f = t.reduce((v, g) => g(v), e());
    return r = X7(f), a = r.cache.get, i = r.cache.set, s = u, u(p);
  }
  function u(p) {
    const f = a(p);
    if (f)
      return f;
    const v = J7(p, r);
    return i(p, v), v;
  }
  return function() {
    return s(eS.apply(null, arguments));
  };
}
function Ze(e) {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}
var M0 = /^\[(?:([a-z-]+):)?(.+)\]$/i, tS = /^\d+\/\d+$/, nS = /* @__PURE__ */ new Set(["px", "full", "screen"]), rS = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, lS = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, iS = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, aS = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, oS = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Ln(e) {
  return Dr(e) || nS.has(e) || tS.test(e);
}
function ur(e) {
  return Vl(e, "length", hS);
}
function Dr(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Ao(e) {
  return Vl(e, "number", Dr);
}
function Fi(e) {
  return !!e && Number.isInteger(Number(e));
}
function sS(e) {
  return e.endsWith("%") && Dr(e.slice(0, -1));
}
function ke(e) {
  return M0.test(e);
}
function cr(e) {
  return rS.test(e);
}
var uS = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function cS(e) {
  return Vl(e, uS, A0);
}
function dS(e) {
  return Vl(e, "position", A0);
}
var fS = /* @__PURE__ */ new Set(["image", "url"]);
function pS(e) {
  return Vl(e, fS, vS);
}
function mS(e) {
  return Vl(e, "", gS);
}
function Ti() {
  return !0;
}
function Vl(e, t, r) {
  const a = M0.exec(e);
  return a ? a[1] ? typeof t == "string" ? a[1] === t : t.has(a[1]) : r(a[2]) : !1;
}
function hS(e) {
  return lS.test(e) && !iS.test(e);
}
function A0() {
  return !1;
}
function gS(e) {
  return aS.test(e);
}
function vS(e) {
  return oS.test(e);
}
function Ad() {
  const e = Ze("colors"), t = Ze("spacing"), r = Ze("blur"), a = Ze("brightness"), i = Ze("borderColor"), s = Ze("borderRadius"), c = Ze("borderSpacing"), u = Ze("borderWidth"), p = Ze("contrast"), f = Ze("grayscale"), v = Ze("hueRotate"), g = Ze("invert"), h = Ze("gap"), b = Ze("gradientColorStops"), $ = Ze("gradientColorStopPositions"), w = Ze("inset"), k = Ze("margin"), T = Ze("opacity"), F = Ze("padding"), H = Ze("saturate"), K = Ze("scale"), Y = Ze("sepia"), re = Ze("skew"), Q = Ze("space"), X = Ze("translate"), ie = () => ["auto", "contain", "none"], ae = () => ["auto", "hidden", "clip", "visible", "scroll"], ne = () => ["auto", ke, t], A = () => [ke, t], B = () => ["", Ln, ur], _ = () => ["auto", Dr, ke], D = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], I = () => ["solid", "dashed", "dotted", "double", "none"], M = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], z = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], L = () => ["", "0", ke], W = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], N = () => [Dr, Ao], G = () => [Dr, ke];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Ti],
      spacing: [Ln, ur],
      blur: ["none", "", cr, ke],
      brightness: N(),
      borderColor: [e],
      borderRadius: ["none", "", "full", cr, ke],
      borderSpacing: A(),
      borderWidth: B(),
      contrast: N(),
      grayscale: L(),
      hueRotate: G(),
      invert: L(),
      gap: A(),
      gradientColorStops: [e],
      gradientColorStopPositions: [sS, ur],
      inset: ne(),
      margin: ne(),
      opacity: N(),
      padding: A(),
      saturate: N(),
      scale: N(),
      sepia: L(),
      skew: G(),
      space: A(),
      translate: A()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", ke]
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
        columns: [cr]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": W()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": W()
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
        object: [...D(), ke]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ae()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ae()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ae()
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
        inset: [w]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [w]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [w]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [w]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [w]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [w]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [w]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [w]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [w]
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
        z: ["auto", Fi, ke]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: ne()
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
        flex: ["1", "auto", "initial", "none", ke]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: L()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: L()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Fi, ke]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Ti]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Fi, ke]
        }, ke]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": _()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": _()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Ti]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Fi, ke]
        }, ke]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": _()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": _()
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
        "auto-cols": ["auto", "min", "max", "fr", ke]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ke]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [h]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [h]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [h]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...z()]
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
        content: ["normal", ...z(), "baseline"]
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
        "place-content": [...z(), "baseline"]
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
        m: [k]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [k]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [k]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [k]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [k]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [k]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [k]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [k]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [k]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [Q]
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
        "space-y": [Q]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ke, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ke, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ke, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [cr]
        }, cr]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ke, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ke, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ke, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ke, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", cr, ur]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ao]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ti]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ke]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Dr, Ao]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ln, ke]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ke]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ke]
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
        "placeholder-opacity": [T]
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
        "text-opacity": [T]
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
        decoration: [...I(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Ln, ur]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ln, ke]
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
        indent: A()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ke]
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
        content: ["none", ke]
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
        "bg-opacity": [T]
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
        bg: [...D(), dS]
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
        bg: ["auto", "cover", "contain", cS]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, pS]
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
        from: [$]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [$]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [$]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [b]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [b]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [b]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [u]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [u]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [u]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [u]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [u]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [u]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [u]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [u]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [u]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [T]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...I(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [u]
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
        "divide-y": [u]
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
        "divide-opacity": [T]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: I()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [i]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [i]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [i]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [i]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [i]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [i]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [i]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [i]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...I()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ln, ke]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ln, ur]
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
        ring: B()
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
        "ring-opacity": [T]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Ln, ur]
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
        shadow: ["", "inner", "none", cr, mS]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Ti]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [T]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...M(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": M()
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
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [a]
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
        "drop-shadow": ["", "none", cr, ke]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [f]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [v]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [g]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [H]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [Y]
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
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [a]
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
        "backdrop-grayscale": [f]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [v]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [g]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [T]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [H]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [Y]
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
        "border-spacing": [c]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [c]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [c]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ke]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: G()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ke]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: G()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ke]
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
        scale: [K]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [K]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [K]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Fi, ke]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [X]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [X]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [re]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [re]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ke]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ke]
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
        "scroll-m": A()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": A()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": A()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": A()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": A()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": A()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": A()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": A()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": A()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": A()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": A()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": A()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": A()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": A()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": A()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": A()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": A()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": A()
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
        "will-change": ["auto", "scroll", "contents", "transform", ke]
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
        stroke: [Ln, ur, Ao]
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
function yS(e, {
  cacheSize: t,
  prefix: r,
  separator: a,
  extend: i = {},
  override: s = {}
}) {
  Go(e, "cacheSize", t), Go(e, "prefix", r), Go(e, "separator", a);
  for (const c in s)
    bS(e[c], s[c]);
  for (const c in i)
    xS(e[c], i[c]);
  return e;
}
function Go(e, t, r) {
  r !== void 0 && (e[t] = r);
}
function bS(e, t) {
  if (t)
    for (const r in t)
      Go(e, r, t[r]);
}
function xS(e, t) {
  if (t)
    for (const r in t) {
      const a = t[r];
      a !== void 0 && (e[r] = (e[r] || []).concat(a));
    }
}
function wS(e, ...t) {
  return typeof e == "function" ? Md(Ad, e, ...t) : Md(() => yS(Ad(), e), ...t);
}
var SS = /* @__PURE__ */ Md(Ad), CS = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, j0 = (e) => e || void 0, la = (...e) => j0(P0(e).filter(Boolean).join(" ")), rd = null, jn = {}, jd = !1, Ri = (...e) => (t) => t.twMerge ? ((!rd || jd) && (jd = !1, rd = Lt(jn) ? SS : wS({ ...jn, extend: { theme: jn.theme, classGroups: jn.classGroups, conflictingClassGroupModifiers: jn.conflictingClassGroupModifiers, conflictingClassGroups: jn.conflictingClassGroups, ...jn.extend } })), j0(rd(la(e)))) : la(e), h1 = (e, t) => {
  for (let r in t)
    e.hasOwnProperty(r) ? e[r] = la(e[r], t[r]) : e[r] = t[r];
  return e;
}, Xe = (e, t) => {
  let { extend: r = null, slots: a = {}, variants: i = {}, compoundVariants: s = [], compoundSlots: c = [], defaultVariants: u = {} } = e, p = { ...CS, ...t }, f = r != null && r.base ? la(r.base, e?.base) : e?.base, v = r != null && r.variants && !Lt(r.variants) ? T0(i, r.variants) : i, g = r != null && r.defaultVariants && !Lt(r.defaultVariants) ? { ...r.defaultVariants, ...u } : u;
  !Lt(p.twMergeConfig) && !V7(p.twMergeConfig, jn) && (jd = !0, jn = p.twMergeConfig);
  let h = Lt(r?.slots), b = Lt(a) ? {} : { base: la(e?.base, h && r?.base), ...a }, $ = h ? b : h1({ ...r?.slots }, Lt(b) ? { base: e?.base } : b), w = Lt(r?.compoundVariants) ? s : F0(r?.compoundVariants, s), k = (F) => {
    if (Lt(v) && Lt(a) && h)
      return Ri(f, F?.class, F?.className)(p);
    if (w && !Array.isArray(w))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof w}`);
    if (c && !Array.isArray(c))
      throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof c}`);
    let H = (A, B, _ = [], D) => {
      let I = _;
      if (typeof B == "string")
        I = I.concat(f1(B).split(" ").map((M) => `${A}:${M}`));
      else if (Array.isArray(B))
        I = I.concat(B.reduce((M, z) => M.concat(`${A}:${z}`), []));
      else if (typeof B == "object" && typeof D == "string") {
        for (let M in B)
          if (B.hasOwnProperty(M) && M === D) {
            let z = B[M];
            if (z && typeof z == "string") {
              let L = f1(z);
              I[D] ? I[D] = I[D].concat(L.split(" ").map((W) => `${A}:${W}`)) : I[D] = L.split(" ").map((W) => `${A}:${W}`);
            } else
              Array.isArray(z) && z.length > 0 && (I[D] = z.reduce((L, W) => L.concat(`${A}:${W}`), []));
          }
      }
      return I;
    }, K = (A, B = v, _ = null, D = null) => {
      var I;
      let M = B[A];
      if (!M || Lt(M))
        return null;
      let z = (I = D?.[A]) != null ? I : F?.[A];
      if (z === null)
        return null;
      let L = d1(z), W = Array.isArray(p.responsiveVariants) && p.responsiveVariants.length > 0 || p.responsiveVariants === !0, N = g?.[A], G = [];
      if (typeof L == "object" && W)
        for (let [q, ce] of Object.entries(L)) {
          let ve = M[ce];
          if (q === "initial") {
            N = ce;
            continue;
          }
          Array.isArray(p.responsiveVariants) && !p.responsiveVariants.includes(q) || (G = H(q, ve, G, _));
        }
      let me = L != null && typeof L != "object" ? L : d1(N), ue = M[me || "false"];
      return typeof G == "object" && typeof _ == "string" && G[_] ? h1(G, ue) : G.length > 0 ? (G.push(ue), G) : ue;
    }, Y = () => v ? Object.keys(v).map((A) => K(A, v)) : null, re = (A, B) => {
      if (!v || typeof v != "object")
        return null;
      let _ = new Array();
      for (let D in v) {
        let I = K(D, v, A, B), M = A === "base" && typeof I == "string" ? I : I && I[A];
        M && (_[_.length] = M);
      }
      return _;
    }, Q = {};
    for (let A in F)
      F[A] !== void 0 && (Q[A] = F[A]);
    let X = (A, B) => {
      var _;
      let D = typeof F?.[A] == "object" ? { [A]: (_ = F[A]) == null ? void 0 : _.initial } : {};
      return { ...g, ...Q, ...D, ...B };
    }, ie = (A = [], B) => {
      let _ = [];
      for (let { class: D, className: I, ...M } of A) {
        let z = !0;
        for (let [L, W] of Object.entries(M)) {
          let N = X(L, B);
          if (Array.isArray(W)) {
            if (!W.includes(N[L])) {
              z = !1;
              break;
            }
          } else if (N[L] !== W) {
            z = !1;
            break;
          }
        }
        z && (D && _.push(D), I && _.push(I));
      }
      return _;
    }, ae = (A) => {
      let B = ie(w, A);
      if (!Array.isArray(B))
        return B;
      let _ = {};
      for (let D of B)
        if (typeof D == "string" && (_.base = Ri(_.base, D)(p)), typeof D == "object")
          for (let [I, M] of Object.entries(D))
            _[I] = Ri(_[I], M)(p);
      return _;
    }, ne = (A) => {
      if (c.length < 1)
        return null;
      let B = {};
      for (let { slots: _ = [], class: D, className: I, ...M } of c) {
        if (!Lt(M)) {
          let z = !0;
          for (let L of Object.keys(M)) {
            let W = X(L, A)[L];
            if (W === void 0 || (Array.isArray(M[L]) ? !M[L].includes(W) : M[L] !== W)) {
              z = !1;
              break;
            }
          }
          if (!z)
            continue;
        }
        for (let z of _)
          B[z] = B[z] || [], B[z].push([D, I]);
      }
      return B;
    };
    if (!Lt(a) || !h) {
      let A = {};
      if (typeof $ == "object" && !Lt($))
        for (let B of Object.keys($))
          A[B] = (_) => {
            var D, I;
            return Ri($[B], re(B, _), ((D = ae(_)) != null ? D : [])[B], ((I = ne(_)) != null ? I : [])[B], _?.class, _?.className)(p);
          };
      return A;
    }
    return Ri(f, Y(), ie(w), F?.class, F?.className)(p);
  }, T = () => {
    if (!(!v || typeof v != "object"))
      return Object.keys(v);
  };
  return k.variantKeys = T(), k.extend = r, k.base = f, k.slots = $, k.variants = v, k.defaultVariants = g, k.compoundSlots = c, k.compoundVariants = w, k;
};
Xe({
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
Xe({
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
Xe({
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
Xe({
  base: "flex flex-row gap-4",
  variants: {
    orientation: {
      horizontal: "",
      vertical: "justify-between w-full max-md:justify-between max-md:w-full"
    }
  }
});
Xe({
  base: "flex align-start justify-start text-content-neutral-bold"
});
Xe({
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
Xe({
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
var $S = Z({
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
}), ES = Z({
  base: "absolute h-full w-full overflow-hidden flex items-center justify-center",
  variants: {
    emphasis: {
      highlight: "bg-interactive-highlight",
      minimal: "bg-interactive-neutral-minimal",
      neutral: "bg-surface-level-01",
      regular: "bg-interactive-neutral-regular"
    }
  }
}), g1 = Z({
  variants: {
    appearance: {
      highlight: "text-content-highlight",
      neutral: "text-content-neutral-bold",
      "neutral-inverse": "text-content-inverse-bold"
    }
  }
}), kS = Z({
  base: "object-cover h-full w-full",
  variants: {
    imageLoadFail: {
      true: "hidden"
    }
  }
}), zs = ({
  active: e = !1,
  appearance: t = "neutral",
  "aria-label": r,
  bgClassname: a,
  className: i,
  disabled: s,
  emphasis: c = "regular",
  icon: u,
  imageSrc: p,
  label: f,
  onClick: v,
  shape: g = "circle",
  size: h = "medium",
  ...b
}) => {
  const [$, w] = S.useState(!1);
  S.useEffect(() => {
    w(!1);
  }, [p]);
  const k = v ? "button" : "div";
  return /* @__PURE__ */ C.createElement($n, null, /* @__PURE__ */ C.createElement(
    k,
    {
      "aria-label": r,
      className: $S({
        active: e,
        className: i,
        disabled: s,
        onClick: !!v,
        shape: g,
        size: h
      }),
      "data-size": h,
      disabled: s,
      onClick: v,
      ...b
    },
    /* @__PURE__ */ C.createElement(
      "div",
      {
        className: ES({ className: a, emphasis: c })
      },
      (!u && !p || $) && /* @__PURE__ */ C.createElement(
        Ue,
        {
          className: g1({ appearance: t }),
          fontWeight: "bold",
          size: NS[h],
          variant: "body"
        },
        f
      ),
      p && /* @__PURE__ */ C.createElement(
        "img",
        {
          alt: r,
          className: kS({ imageLoadFail: $ }),
          onError: () => w(!0),
          src: p
        }
      ),
      bt(
        {
          className: g1({ appearance: t }),
          size: _S[h]
        },
        u
      )
    )
  ));
}, _S = {
  large: "large",
  medium: "medium",
  small: "small",
  "x-small": "x-small",
  "xx-small": "x-small"
}, NS = {
  large: "large",
  medium: "medium",
  small: "small",
  "x-small": "x-small",
  "xx-small": "x-small"
}, zd = ({
  active: e = !1,
  authenticated: t = !0,
  badge: r = !1,
  badgeCutoutColor: a,
  className: i,
  disabled: s,
  emphasis: c = "regular",
  imageSrc: u,
  label: p,
  onClick: f,
  size: v = "medium",
  ...g
}) => {
  const h = () => {
    const b = {
      imageSrc: u
    }, $ = {
      icon: /* @__PURE__ */ C.createElement(of, { "data-testid": "@paloma-avatar-icon-unauthenticated-id" })
    };
    return /* @__PURE__ */ C.createElement(
      zs,
      {
        active: e,
        className: i,
        disabled: s,
        emphasis: c,
        label: p,
        onClick: f,
        shape: "circle",
        size: v,
        ...t ? b : $,
        ...g
      }
    );
  };
  return /* @__PURE__ */ C.createElement(C.Fragment, null, r && /* @__PURE__ */ C.createElement(
    As,
    {
      appearance: "highlight",
      cutoutColor: a,
      "data-testid": "@paloma-avatar-badge-id",
      position: "bottom-right",
      shape: "circle",
      size: "x-small",
      variant: "dot"
    },
    h()
  ), !r && h());
};
Z({
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
Z({
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
Z({
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
var PS = Z({
  base: "@paloma-link group inline-flex items-center gap-2 no-underline rounded-sm outline-none text-inherit text-content-highlight aria-disabled:pointer-events-none aria-disabled:opacity-30"
}), FS = Z({
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
}), Cn = S.forwardRef(
  ({
    "aria-current": e,
    "aria-expanded": t,
    "aria-label": r,
    as: a,
    bold: i,
    children: s,
    className: c,
    disabled: u,
    hoverUnderline: p = !0,
    href: f,
    leadingIcon: v,
    onBlur: g,
    onClick: h,
    onFocus: b,
    size: $ = "medium",
    target: w,
    trailingIcon: k,
    underline: T = !1,
    ...F
  }, H) => {
    const K = Ky("a"), Y = a ?? K, re = S.useRef(null), { linkProps: Q } = hv(
      { isDisabled: u, onBlur: g, onFocus: b, onPress: h },
      re
    ), X = $e(Q, F);
    return /* @__PURE__ */ C.createElement($n, { disabled: u }, /* @__PURE__ */ C.createElement(
      Y,
      {
        ...X,
        "aria-current": e,
        "aria-disabled": u,
        "aria-expanded": t,
        "aria-label": r,
        className: PS({
          class: c
        }),
        "data-bold": Ce(i),
        "data-hover-underline": Ce(p),
        "data-size": Ce($),
        "data-underline": Ce(T),
        disabled: u,
        href: f,
        ref: Hn(H, re),
        tabIndex: 0,
        target: w
      },
      bt({ size: $ }, v),
      /* @__PURE__ */ C.createElement(
        Ue,
        {
          className: FS({ hoverUnderline: p, underline: T }),
          fontWeight: i ? "bold" : "normal",
          size: $,
          underline: T,
          variant: "body"
        },
        s
      ),
      bt({ size: $ }, k)
    ));
  }
), ld = Z({
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
}), v1 = Z({
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
}), If = ({
  children: e,
  className: t,
  current: r = !1,
  href: a,
  leadingIcon: i,
  ...s
}) => {
  if (!a)
    return /* @__PURE__ */ C.createElement(
      Ue,
      {
        "aria-current": r ? "page" : void 0,
        className: v1({
          className: t,
          current: r,
          hasLeadingIcon: !!i
        }),
        size: "small",
        ...s
      },
      bt({ size: "small" }, i),
      e
    );
  const c = r ? {
    "aria-current": "page",
    hoverUnderline: !0,
    underline: !1
  } : {};
  return /* @__PURE__ */ C.createElement(
    Cn,
    {
      className: v1({ className: t, current: r }),
      href: a,
      leadingIcon: i,
      size: "small",
      ...c,
      ...s
    },
    e
  );
};
If.displayName = "Breadcrumb.Item";
var TS = Z({
  base: "@paloma-divider data-[emphasis=bold]:border-neutral-bold data-[emphasis=minimal]:border-neutral-minimal data-[emphasis=regular]:border-neutral-regular data-[emphasis=subtle]:border-neutral-subtle",
  variants: {
    orientation: {
      horizontal: "border-x-0 border-b-0 border-t-[1px] mx-0 my-1 w-full min-h-[1px]",
      vertical: "border-y-0 border-r-0 border-l-[1px] mx-1 my-0 min-w-[1px]"
    }
  }
}), Jt = ({
  className: e,
  emphasis: t = "regular",
  orientation: r = "horizontal",
  role: a = "separator",
  ...i
}) => {
  const s = r === "horizontal", c = r === "vertical";
  return /* @__PURE__ */ C.createElement(
    "hr",
    {
      className: TS({
        className: e,
        orientation: r
      }),
      "data-emphasis": t,
      "data-is-orientation-horizontal": Ce(s),
      "data-is-orientation-vertical": Ce(c),
      role: a,
      ...i
    }
  );
}, Mf = Z({
  variants: {
    size: {
      large: "gap-5",
      medium: "gap-4",
      small: "gap-3",
      "x-small": "gap-3"
    }
  }
}), RS = Z({
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
  extend: Mf,
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
}), LS = Z({
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
  extend: Mf,
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
}), IS = Z({
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
}), MS = Z({
  variants: {
    truncate: {
      false: "",
      true: "truncate min-w-0"
    }
  }
}), AS = Z({
  base: "flex flex-col",
  variants: {
    size: {
      large: "gap-3",
      medium: "gap-2",
      small: "gap-2",
      "x-small": "gap-1"
    }
  }
}), jS = Z({
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
}), zS = Z({
  base: "flex flex-shrink-0",
  defaultVariants: {
    longform: !1
  },
  extend: Mf,
  variants: {
    longform: {
      false: "items-center",
      true: "items-start"
    }
  }
}), KS = {
  collapse: "Collapse",
  expand: "Expand"
}, DS = {
  large: {
    fontWeight: "bold",
    size: "x-small",
    variant: "heading"
  },
  medium: {
    fontWeight: "bold",
    size: "large"
  },
  small: {
    fontWeight: "bold",
    size: "medium"
  }
}, y1 = (e) => e.reduce((t, r) => t + r.offsetHeight, 0), OS = ({
  isExpanded: e,
  listLength: t,
  listRef: r,
  maxCollapsedItems: a
}) => {
  const [i, s] = S.useState(!0), [c, u] = S.useState("auto"), [p, f] = S.useState(0), [, { screenHeight: v, screenWidth: g }] = S0(250), h = S.useCallback(() => {
    const b = r.current?.children;
    if (b) {
      const $ = [...b], w = $.slice(0, a), k = $.slice(a), T = y1(w), F = y1(k);
      e || s(!1), u(T), f(T + F);
    }
  }, [r, a, e]);
  return Nf(() => {
    h();
  }, [t, a, e, h]), S.useEffect(() => {
    h();
  }, [
    g,
    v,
    t,
    a,
    e,
    h
  ]), S.useEffect(() => {
    if (!r.current || typeof ResizeObserver > "u")
      return;
    const b = r.current;
    let $ = null;
    const w = new ResizeObserver(() => {
      $ !== null && cancelAnimationFrame($), $ = requestAnimationFrame(() => {
        h();
      });
    });
    return w.observe(b), () => {
      $ !== null && cancelAnimationFrame($), w.disconnect();
    };
  }, [r, h]), {
    defaultHeight: c,
    expandedHeight: p,
    setShowExpandedItems: s,
    showExpandedItems: i
  };
}, VS = Z({
  base: "text-content-neutral-bold",
  variants: {
    isExpanded: {
      true: "rotate-180"
    }
  }
}), b1 = Z({
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
}), HS = Z({
  base: "text-content-neutral-bold h-[1lh]",
  variants: {
    size: {
      large: "leading-[--line-height-body-large]",
      medium: "leading-[--line-height-body-medium]",
      small: "leading-[--line-height-body-small]"
    }
  }
}), BS = ({
  children: e,
  className: t,
  expandable: r = !0,
  heading: a,
  isNested: i = !1,
  locales: s,
  maxCollapsedItems: c = 7,
  showHeading: u = !0,
  size: p = "small",
  type: f,
  ...v
}) => {
  const g = $0(s, KS), h = w7(), b = g.expand(), $ = g.collapse(), w = s?.expandAriaLabel ?? b, k = s?.collapseAriaLabel ?? $, [T, F] = S.useState(!1), H = S.useRef(null), K = S.useMemo(() => {
    const _ = C.Children.count(e) > 1 ? e : [e], D = /* @__PURE__ */ C.createElement(
      T8,
      {
        className: HS({ size: p }),
        "data-testid": "@paloma-list-bullet-icon-id",
        size: "x-small"
      }
    );
    return _.map((I, M) => {
      const z = (M + 1).toString(), L = /* @__PURE__ */ C.createElement("div", { className: "w-8 h-8 rounded-full bg-interactive-neutral-subtle backdrop-blur-surface flex justify-center items-center" }, /* @__PURE__ */ C.createElement(
        Ue,
        {
          className: "text-content-neutral-bold",
          "data-testid": "@paloma-list-number-id",
          fontWeight: "bold",
          size: p === "large" ? "small" : "x-small",
          variant: "body"
        },
        z
      )), W = I.props, N = !!W.onClick;
      return C.cloneElement(I, {
        as: "li",
        className: W.className,
        isNested: i,
        key: `listItem-${M}`,
        leadingSlot: f === "ordered" && L || f === "unordered" && D || void 0,
        size: p,
        tabIndex: N ? 0 : -1,
        type: f
      });
    });
  }, [e, i, p, f]), Y = r && K.length > c, re = f === "ordered" ? "ol" : "ul", Q = S.useMemo(
    () => Y ? [...K].splice(0, c) : K,
    [Y, K, c]
  ), X = [...K].splice(c), {
    defaultHeight: ie,
    expandedHeight: ae,
    setShowExpandedItems: ne,
    showExpandedItems: A
  } = OS({
    isExpanded: T,
    listLength: K.length,
    listRef: H,
    maxCollapsedItems: c
  }), B = () => {
    T || ne(!0), F(!T);
  };
  return i ? /* @__PURE__ */ C.createElement(
    re,
    {
      className: it(
        b1({
          isExpandable: Y,
          isNested: i,
          noExpandedHeight: ae === 0,
          size: p
        }),
        t
      ),
      "data-paloma-list": !0,
      "data-testid": "@paloma-list-element-id",
      ref: H,
      ...v
    },
    Q,
    A && X
  ) : /* @__PURE__ */ C.createElement("div", { className: "flex flex-col" }, a && u && /* @__PURE__ */ C.createElement(
    Ue,
    {
      className: "text-content-neutral-bold",
      ...DS[p]
    },
    a
  ), /* @__PURE__ */ C.createElement(
    re,
    {
      className: it(
        b1({
          isExpandable: Y,
          noExpandedHeight: ae === 0,
          size: p
        }),
        t
      ),
      "data-paloma-list": !0,
      "data-testid": "@paloma-list-element-id",
      id: h,
      onTransitionEnd: () => {
        T || ne(!1);
      },
      ref: H,
      style: Y ? { height: T ? ae : ie } : void 0,
      ...v
    },
    Q,
    A && X
  ), Y && /* @__PURE__ */ C.createElement($n, null, /* @__PURE__ */ C.createElement(
    "button",
    {
      "aria-controls": h,
      "aria-expanded": T,
      "aria-label": T ? k : w,
      className: "bg-transparent border-none p-0 cursor-pointer flex gap-2 items-center rounded-sm",
      onClick: B
    },
    /* @__PURE__ */ C.createElement(M8, { className: VS({ isExpanded: T }) }),
    /* @__PURE__ */ C.createElement(
      Ue,
      {
        className: "text-content-highlight align-middle",
        fontWeight: "bold",
        size: "large"
      },
      T ? $ : b
    )
  )));
}, z0 = (e) => {
  if (S.isValidElement(e)) {
    if (e.type === BS)
      return !0;
    const t = e.props;
    if (t.children)
      return S.Children.toArray(t.children).some(z0);
  }
  return !1;
}, US = {
  large: "medium",
  medium: "small",
  small: "x-small",
  "x-small": "x-small"
}, Ks = ({
  as: e,
  bodySlot: t,
  bodyText: r,
  className: a,
  contained: i,
  disabled: s,
  emphasis: c = "none",
  fontWeight: u = "normal",
  isNested: p = !1,
  label: f,
  leadingIcon: v,
  leadingIconSwap: g = !1,
  leadingSlot: h,
  longform: b,
  onClick: $,
  onKeyDown: w,
  pretitle: k,
  secondaryLabel: T,
  size: F = "small",
  title: H,
  trailingIcon: K,
  trailingSlot: Y,
  type: re,
  ...Q
}) => {
  const X = S.useMemo(() => t ? C.Children.toArray(t).some(z0) : !1, [t]);
  i || (c = "none");
  const ie = !b, ae = $ && !s, { pressProps: ne } = Qr({
    isDisabled: s,
    onPress: $
  }), { keyboardProps: A } = Il({
    onKeyDown: w
  }), B = e ?? ($ ? "button" : "div"), _ = Object.hasOwn(Q, "role"), D = S.useMemo(() => {
    let I = "listitem";
    e === "a" || e === "li" || e === Cn ? I = void 0 : $ && (I = "button");
    const M = _ ? Q.role : I;
    return {
      ...$ ? ne : {},
      ...w ? A : {},
      "aria-disabled": s,
      "aria-label": M ? H : void 0,
      disabled: s,
      role: M
    };
  }, [
    e,
    $,
    w,
    s,
    _,
    Q.role,
    H,
    ne,
    A
  ]);
  return /* @__PURE__ */ C.createElement($n, { focusRingClass: "rounded-[8px]" }, /* @__PURE__ */ C.createElement(
    B,
    {
      className: RS({
        class: a,
        contained: i,
        disabled: s,
        emphasis: c,
        isButton: B === "button",
        isInteractive: ae,
        isNested: p,
        longform: b,
        size: F,
        type: re
      }),
      ...D,
      ...Q
    },
    (v ?? h) && /* @__PURE__ */ C.createElement(
      "div",
      {
        className: LS({
          hasNestedList: X,
          longform: b,
          size: F,
          type: re
        })
      },
      g ? /* @__PURE__ */ C.createElement(C.Fragment, null, h && /* @__PURE__ */ C.createElement(
        "div",
        {
          className: "flex items-center",
          "data-testid": Ce(
            "@paloma-list-item-leading-slot-id"
          )
        },
        h
      ), v && /* @__PURE__ */ C.createElement(
        "div",
        {
          className: "flex items-center",
          "data-testid": Ce(
            "@paloma-list-item-leading-icon-id"
          )
        },
        bt({ size: F }, v)
      )) : /* @__PURE__ */ C.createElement(C.Fragment, null, v && /* @__PURE__ */ C.createElement(
        "div",
        {
          className: "flex items-center",
          "data-testid": Ce(
            "@paloma-list-item-leading-icon-id"
          )
        },
        bt({ size: F }, v)
      ), h && /* @__PURE__ */ C.createElement(
        "div",
        {
          className: "flex items-center",
          "data-testid": Ce(
            "@paloma-list-item-leading-slot-id"
          )
        },
        h
      ))
    ),
    /* @__PURE__ */ C.createElement(
      "div",
      {
        className: IS({
          hasNestedList: X,
          size: F,
          truncate: ie,
          type: re
        })
      },
      k != null && typeof k != "boolean" && (C.isValidElement(k) ? /* @__PURE__ */ C.createElement(
        "span",
        {
          className: MS({ truncate: ie }),
          "data-testid": Ce("@paloma-list-item-pretitle-id")
        },
        k
      ) : /* @__PURE__ */ C.createElement(
        Ue,
        {
          "data-testid": Ce("@paloma-list-item-pretitle-id"),
          size: "x-small",
          truncate: ie,
          variant: "body"
        },
        k
      )),
      /* @__PURE__ */ C.createElement("div", { className: "flex justify-between items-center gap-2" }, /* @__PURE__ */ C.createElement(
        Ue,
        {
          className: "text-content-neutral-bold",
          fontWeight: u,
          size: F,
          truncate: ie,
          variant: "body"
        },
        H
      ), f && /* @__PURE__ */ C.createElement(
        Ue,
        {
          className: "text-content-neutral-subtle",
          "data-testid": Ce("@paloma-list-item-label-id"),
          size: "x-small",
          truncate: ie,
          variant: "body"
        },
        f
      )),
      (r ?? T) && /* @__PURE__ */ C.createElement("div", { className: AS({ size: F }) }, r && /* @__PURE__ */ C.createElement(
        "div",
        {
          className: "flex justify-between items-center",
          "data-testid": Ce("@paloma-list-item-body-text-id")
        },
        /* @__PURE__ */ C.createElement(
          Ue,
          {
            className: "text-content-neutral-regular font-variant-none",
            size: US[F],
            truncate: ie,
            variant: "body"
          },
          r
        )
      ), T && /* @__PURE__ */ C.createElement(
        "div",
        {
          className: "flex flex-row w-full items-start",
          "data-testid": Ce(
            "@paloma-list-item-secondary-label-id"
          )
        },
        /* @__PURE__ */ C.createElement(
          Ue,
          {
            className: "text-content-neutral-subtle justify-self-end",
            size: "x-small",
            truncate: ie,
            variant: "body"
          },
          T
        )
      )),
      t && // Important: For nested lists, do not wrap in additional div
      (X ? t : /* @__PURE__ */ C.createElement(
        "div",
        {
          className: jS({
            leadingSlot: !!h,
            size: F
          }),
          "data-testid": Ce("@paloma-list-item-body-slot-id")
        },
        t
      ))
    ),
    (K ?? Y) && /* @__PURE__ */ C.createElement(
      "div",
      {
        className: zS({
          longform: b,
          size: F
        })
      },
      Y && /* @__PURE__ */ C.createElement(
        "div",
        {
          "aria-hidden": !0,
          className: "flex items-center",
          "data-testid": Ce(
            "@paloma-list-item-trailing-slot-id"
          )
        },
        Y
      ),
      K && /* @__PURE__ */ C.createElement(
        "div",
        {
          "aria-hidden": !0,
          className: "flex items-center",
          "data-testid": Ce(
            "@paloma-list-item-trailing-icon-id"
          )
        },
        bt({ size: F }, K)
      )
    )
  ));
}, x1 = "";
function w1(e) {
  return Object.entries(e).map(([t, r]) => `${t}: ${r};`).join(`
`);
}
function WS(e, t) {
  return S.useMemo(() => {
    if (!t)
      return [e, void 0];
    const r = e ?? (t && `theme-${o8(t)}`);
    return [
      r,
      `${t.light !== void 0 ? `[data-paloma-mode=light] #${r}:not([data-paloma-theme]), #${r}[data-paloma-mode=light] {
              ${w1(t.light)}
            }` : x1}
      ${t.dark !== void 0 ? `[data-paloma-mode=dark] #${r}:not([data-paloma-theme]), #${r}[data-paloma-mode=dark] {
              ${w1(t.dark)}
            }` : x1}`
    ];
  }, [t, e]);
}
var K0 = S.createContext({
  mode: "light",
  theme: "ea-blue",
  themeId: "",
  themeVariant: void 0,
  variant: "ea-blue"
}), D0 = (e) => S.useContext(K0), GS = Z({
  base: "relative overflow-hidden"
}), qS = Z({
  base: "rounded-lg [[tabindex='0']&:focus-visible]:outline [[tabindex='0']&:focus-visible]:outline-2 [[tabindex='0']&:focus-visible]:outline-offset-[-3px] [[tabindex='0']&:focus-visible]:outline-interactive-highlight",
  variants: {
    orientation: {
      horizontal: "overflow-x-auto overflow-y-hidden h-full w-full",
      vertical: "overflow-y-auto overflow-x-hidden w-full h-full"
    }
  }
}), ZS = Z({
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
function id(e, t, r) {
  return !(t <= e || r + e >= t - 3);
}
function ad(e, t) {
  return t === "horizontal" ? e.scrollLeft : e.scrollTop;
}
var qo = C.forwardRef(
  ({
    as: e,
    children: t,
    className: r,
    contentClassName: a,
    orientation: i = "vertical",
    scrollableTabIndex: s = 0,
    ...c
  }, u) => {
    const p = e ?? "div", [f, v] = C.useState(), g = C.useRef(null);
    return C.useEffect(() => {
      if (!g.current)
        return;
      const h = g.current, b = () => i === "horizontal" ? {
        containerSize: h.clientWidth,
        contentSize: h.scrollWidth
      } : {
        containerSize: h.clientHeight,
        contentSize: h.scrollHeight
      }, { containerSize: $ } = b(), { contentSize: w } = b(), k = ad(h, i);
      v(
        id($, w, k)
      );
      const T = () => {
        v(
          id(
            $,
            w,
            ad(h, i)
          )
        );
      };
      h.addEventListener("scroll", T, S1);
      let F;
      const H = () => {
        clearTimeout(F), F = setTimeout(() => {
          v(
            id(
              b().containerSize,
              b().contentSize,
              ad(h, i)
            )
          );
        }, 100);
      };
      return window.addEventListener("resize", H, S1), () => {
        h.removeEventListener("scroll", T), window.removeEventListener("resize", T), clearTimeout(F);
      };
    }, [i]), /* @__PURE__ */ C.createElement(
      p,
      {
        className: GS({ className: r }),
        "data-testid": "scrollable-container-wrapper",
        ref: u,
        ...c
      },
      /* @__PURE__ */ C.createElement(
        "div",
        {
          className: qS({
            className: a,
            orientation: i
          }),
          "data-testid": "scrollable-container",
          ref: g,
          tabIndex: s
        },
        t
      ),
      /* @__PURE__ */ C.createElement(
        "div",
        {
          className: ZS({ isFadeVisible: f, orientation: i }),
          "data-testid": "scrollable-fade-overlay"
        }
      )
    );
  }
), S1 = { passive: !0 }, C1 = Z({
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
}), od = Z({
  base: "bg-surface-container border border-solid border-neutral-subtle rounded-xl outline-none flex flex-col max-h-screen group-data-[orientation=horizontal]/menu:w-[inherit] group-data-[variant=mega]/menu:w-auto group-data-[variant=mega]/menu:max-w-[1440px] group-data-[variant=mega]/menu:mx-2 lg:group-data-[variant=mega]/menu:mx-10 overflow-auto",
  variants: {
    isPopoverMatchTriggerWidth: {
      false: "group-data-[variant=standard]/menu:w-[250px]",
      true: "group-data-[variant=standard]/menu:w-[--trigger-width]"
    }
  }
}), QS = Z({
  base: "w-full box-border rounded-lg pl-4 pr-0 outline-none data-[focus-visible]:shadow-[inset_0_0_0_2px_var(--interactive-highlight-color)]"
}), XS = Z({
  base: "w-full rounded-lg"
}), Kd = Z({
  base: "flex max-w-full flex-col items-start rounded-lg"
}), Zo = Z({
  variants: {
    layout: {
      menu: "group-data-[variant=standard]/menu:p-2",
      panel: "flex flex-col items-start group-data-[variant=standard]/menu:p-2"
    }
  }
}), YS = Z({
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
}), ia = (e) => /* @__PURE__ */ C.createElement(Ks, { ...e, role: "menuitem" }), JS = "[data-paloma-menu-arrow-target='true']", eC = (e) => Array.from(
  e.querySelectorAll(JS)
).filter(
  (t) => !t.hasAttribute("disabled") && t.getAttribute("aria-disabled") !== "true"
), $1 = (e) => C.Children.toArray(e).map((t, r) => {
  const a = C.isValidElement(t) ? t.key : r, i = zt(
    t,
    Jt,
    (c, u) => /* @__PURE__ */ C.createElement(Jt, { key: a, ...u })
  );
  return i || (zt(
    t,
    ia,
    (c, u) => /* @__PURE__ */ C.createElement(
      Ks,
      {
        ...u,
        as: "button",
        className: it(u.className, XS()),
        "data-paloma-menu-arrow-target": "true",
        disabled: !!u.disabled,
        id: `menu-item-${r}`,
        key: a,
        role: "menuitem",
        type: "button"
      }
    )
  ) ?? t);
}), tC = (e, t) => {
  if (!t.current)
    return;
  const r = t.current, a = e.target;
  if (!r.contains(a) || !["ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp"].includes(e.key))
    return;
  const i = eC(r);
  if (i.length === 0)
    return;
  const s = i.indexOf(a), c = e.key === "ArrowDown" || e.key === "ArrowRight";
  if (a === r) {
    e.preventDefault(), (c ? i[0] : i.at(-1))?.focus();
    return;
  }
  if (s === -1)
    return;
  e.preventDefault(), (c ? i[(s + 1) % i.length] : i[(s - 1 + i.length) % i.length])?.focus();
}, nC = () => "true", E1 = ({
  children: e,
  dialogRef: t,
  footer: r,
  menuAriaLabel: a,
  menuContentStyle: i,
  scrollFadeHeight: s,
  variant: c
}) => /* @__PURE__ */ C.createElement(
  "div",
  {
    "data-paloma-menu-dialog-focus": !0,
    onKeyDownCapture: (u) => {
      tC(u, t);
    },
    ref: t,
    tabIndex: -1
  },
  /* @__PURE__ */ C.createElement(Jd, { contain: !0, restoreFocus: !0 }, /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(
    qo,
    {
      className: Zo({
        layout: c === "standard" ? "menu" : "panel"
      }),
      role: c === "standard" ? void 0 : "menu",
      scrollableTabIndex: -1,
      style: s && c === "standard" ? { boxSizing: "border-box", height: s } : void 0
    },
    c === "standard" ? /* @__PURE__ */ C.createElement(
      "div",
      {
        "aria-label": a,
        className: Kd(),
        role: "menu",
        style: i
      },
      $1(e)
    ) : $1(e)
  ), r))
), rC = (e) => typeof e != "object" || e === null ? !1 : "aria-label" in e, O0 = (e) => {
  const t = e;
  return typeof e == "string" ? !0 : typeof e == "function" ? !!("prototype" in t && t.prototype?.isReactComponent) : typeof e != "object" || e === null ? !1 : t.$$typeof === Symbol.for("react.forward_ref") ? !0 : t.$$typeof === Symbol.for("react.memo") && t.type ? O0(t.type) : !1;
}, k1 = (e) => O0(e.type), lC = (e) => `@paloma/core-ui ${e} plain function-component triggers without forwarded refs are deprecated and will be removed in v2.0.0. Prefer a trigger that renders a DOM element directly or forwards its ref.`, iC = (e) => `@paloma/core-ui ${e} keyboardNavigation="legacy-tab" is deprecated and legacy behavior will be removed in v2.0.0. Prefer keyboardNavigation="menu". Omitting keyboardNavigation still uses the deprecated legacy mode in v1.x.`, aC = (e) => C.Children.toArray(e).every((t) => t == null || typeof t == "boolean" ? !0 : !!(zt(t, Jt) ?? zt(t, ia))), oC = ({
  hasSecondaryAction: e,
  orientation: t,
  variant: r
}) => r === "standard" ? e ? "standard-dual" : "standard-single" : t === "vertical" ? "mega-vertical" : e ? "mega-horizontal-dual" : "mega-horizontal-single", sC = (e) => ({
  altKey: !1,
  continuePropagation: () => {
  },
  ctrlKey: !1,
  metaKey: !1,
  pointerType: "virtual",
  shiftKey: !1,
  target: e,
  type: "press",
  x: 0,
  y: 0
}), uC = ({
  children: e,
  dialogRef: t,
  menuItemRefs: r
}) => C.Children.toArray(e).map((a, i) => {
  const s = C.isValidElement(a) ? a.key : i, c = zt(
    a,
    Jt,
    (p, f) => /* @__PURE__ */ C.createElement(Jt, { key: s, ...f })
  );
  return c || (zt(
    a,
    ia,
    (p, f) => /* @__PURE__ */ C.createElement(
      B6,
      {
        className: QS(),
        id: `menu-item-${i}`,
        isDisabled: !!f.disabled,
        key: s,
        onAction: () => {
          const v = r.current[String(s)] ?? t.current;
          v && f.onClick?.(sC(v));
        },
        ref: (v) => {
          r.current[String(s)] = v;
        },
        textValue: typeof f.title == "string" ? f.title : void 0
      },
      /* @__PURE__ */ C.createElement(
        Ks,
        {
          ...f,
          as: "div",
          onClick: void 0,
          role: void 0
        }
      )
    )
  ) ?? a);
}), cC = ({
  className: e,
  containerPadding: t,
  crossOffset: r,
  isPopoverFullWidth: a,
  isPopoverMatchTriggerWidth: i,
  menuDialog: s,
  modeOverride: c,
  offset: u,
  orientation: p,
  overlayProps: f,
  panelMenuContent: v,
  placement: g,
  popoverRef: h,
  shouldZoom: b,
  style: $,
  theme: w,
  triggerRef: k,
  useModal: T,
  variant: F
}) => {
  const K = C.useContext(ff)?.triggerRef, Y = K ?? k, re = f, Q = f, [X, ie] = S.useState(null);
  S.useEffect(() => {
    const A = k.current ?? K?.current ?? null;
    !a || !h.current || !A || (h.current.style.top = A.offsetHeight + A.offsetTop + u + "px");
  }, [K, a, u, h, k]), Nf(() => {
    const A = k.current ?? K?.current ?? null;
    if (!i || !A) {
      ie(null);
      return;
    }
    const B = () => {
      ie(A.clientWidth);
    };
    if (B(), typeof ResizeObserver > "u")
      return;
    const _ = new ResizeObserver(B);
    return _.observe(A), () => {
      _.disconnect();
    };
  }, [K, i, k]);
  const ae = {
    ...$,
    "--trigger-width": i && X ? `${X}px` : void 0,
    width: !T && F === "standard" ? i && X ? `${X}px` : a ? void 0 : "max-content" : void 0
  }, ne = {
    "--trigger-width": i && X ? `${X}px` : void 0
  };
  return T ? /* @__PURE__ */ C.createElement(
    G6,
    {
      className: C1({
        className: e,
        isPopoverFullWidth: a,
        shouldZoom: b
      }),
      "data-orientation": p,
      "data-paloma-mode": c,
      "data-paloma-theme": w,
      "data-variant": F,
      ref: h,
      style: ae,
      ...Q
    },
    /* @__PURE__ */ C.createElement(
      Bg,
      {
        className: od({ isPopoverMatchTriggerWidth: i }),
        "data-paloma-mode": c,
        "data-paloma-theme": w,
        "data-testid": "@paloma-menu-dialog",
        style: ne
      },
      v
    )
  ) : /* @__PURE__ */ C.createElement(
    L6,
    {
      className: C1({
        className: e,
        isPopoverFullWidth: a,
        shouldZoom: b
      }),
      containerPadding: t,
      crossOffset: r,
      "data-orientation": p,
      "data-paloma-mode": c,
      "data-paloma-theme": w,
      "data-variant": F,
      offset: u,
      placement: g,
      ref: h,
      style: ae,
      triggerRef: Y,
      ...re
    },
    F === "standard" ? /* @__PURE__ */ C.createElement(
      "div",
      {
        className: od({ isPopoverMatchTriggerWidth: i }),
        "data-paloma-mode": c,
        "data-paloma-theme": w,
        "data-testid": "@paloma-menu-dialog",
        style: ne
      },
      s
    ) : /* @__PURE__ */ C.createElement(
      Bg,
      {
        className: od({ isPopoverMatchTriggerWidth: i }),
        "data-paloma-mode": c,
        "data-paloma-theme": w,
        "data-testid": "@paloma-menu-dialog",
        style: ne
      },
      v
    )
  );
}, dC = ({
  children: e,
  className: t,
  containerPadding: r,
  crossOffset: a,
  dropdownInheritsMode: i = !1,
  isOpen: s = void 0,
  keyboardNavigation: c = "legacy-tab",
  // TODO(v2.0.0): change default to "menu" (or remove default if the prop is dropped)
  offset: u = 8,
  onOpenChange: p,
  orientation: f,
  placement: v = "bottom start",
  primaryAction: g,
  scrollFadeHeight: h,
  secondaryAction: b,
  style: $,
  trigger: w,
  useModal: k = !1,
  variant: T = "standard",
  ...F
}) => {
  const H = v === "bottom full", K = v === "bottom match", Y = H ? "bottom" : K ? "bottom start" : v, re = S.useRef(null), Q = S.useRef(null), X = S.useRef({}), ie = S.useRef(null), ae = S.useRef(!1), [ne, A] = S.useState(!1), B = s !== void 0, _ = B ? s : ne, D = T === "mega", I = c === "legacy-tab", M = D && I && s === void 0, z = (tt) => {
    tt && M && Ko("keyboard"), p?.(tt);
  }, L = S.useCallback(
    (tt) => {
      B || A(tt), z(tt);
    },
    // handleOpenChange reads onOpenChange and shouldForceKeyboardModalityOnOpen
    // from the render closure; re-memoize when those change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [B, p, M]
  ), W = {
    bold: !0,
    className: "@paloma-menu-link text-content-neutral-bold",
    size: "small",
    underline: !1
  }, N = (tt) => C.cloneElement(
    tt,
    {
      ...W,
      // TODO(v2.0.0): remove this ternary — always pass undefined (or drop the prop entirely)
      "data-paloma-menu-arrow-target": I ? nC() : void 0
    }
  );
  S.useEffect(() => {
    (g !== void 0 && g.type !== Cn || b !== void 0 && b.type !== Cn) && zn("The primary and secondary actions must be a Link component."), !D && f !== void 0 && zn("Only Mega Menus can have an orientation");
  }), S.useEffect(() => {
    if (!_ || k)
      return;
    const tt = (Cr) => {
      const Jr = Cr.target;
      Jr instanceof Node && (ie.current?.contains(Jr) || re.current?.contains(Jr) || (ae.current = !0, L(!1)));
    };
    return document.addEventListener("pointerdown", tt), () => {
      document.removeEventListener("pointerdown", tt);
    };
  }, [_, L, k]);
  const G = c7(Y), me = c === "menu" && aC(e), ue = D ? "MegaMenu" : "Menu", q = rC(w.props) ? w.props["aria-label"] : void 0, ce = typeof w.type != "string" && !k1(w), ve = typeof q == "string" ? q : "Menu", Se = h ? { boxSizing: "border-box", height: h } : void 0, ut = oC({
    hasSecondaryAction: !!b,
    orientation: f,
    variant: T
  }), { mode: oe, theme: se } = D0(), Ye = i ? oe : "light";
  a1({
    message: iC(ue),
    shouldWarn: I,
    warningKey: `deprecated:${ue}:keyboard-navigation:legacy-tab`
  }), a1({
    message: lC(ue),
    shouldWarn: ce,
    warningKey: `deprecated:${ue}:plain-function-trigger`
  });
  const De = uC({
    children: e,
    dialogRef: Q,
    menuItemRefs: X
  }), Kt = g && zt(g, Cn) ? /* @__PURE__ */ C.createElement(
    "div",
    {
      className: YS({ layout: ut }),
      "data-testid": Ce("menu-footer")
    },
    N(g),
    b && zt(b, Cn) && N(b)
  ) : null, ze = I ? /* @__PURE__ */ C.createElement(
    E1,
    {
      dialogRef: Q,
      footer: Kt,
      menuAriaLabel: ve,
      menuContentStyle: Se,
      scrollFadeHeight: h,
      variant: "standard"
    },
    e
  ) : /* @__PURE__ */ C.createElement("div", { ref: Q }, /* @__PURE__ */ C.createElement(
    qo,
    {
      className: Zo({ layout: "menu" }),
      scrollableTabIndex: 0
    },
    /* @__PURE__ */ C.createElement(
      Hg,
      {
        "aria-label": ve,
        className: Kd(),
        style: Se
      },
      De
    )
  ), Kt), Bt = I ? /* @__PURE__ */ C.createElement(
    E1,
    {
      dialogRef: Q,
      footer: Kt,
      menuAriaLabel: ve,
      menuContentStyle: Se,
      scrollFadeHeight: h,
      variant: T
    },
    e
  ) : me ? /* @__PURE__ */ C.createElement("div", { ref: Q }, /* @__PURE__ */ C.createElement(
    qo,
    {
      className: Zo({ layout: "panel" }),
      scrollableTabIndex: 0
    },
    /* @__PURE__ */ C.createElement(
      Hg,
      {
        "aria-label": ve,
        className: Kd(),
        style: T === "standard" ? Se : void 0
      },
      De
    )
  ), Kt) : /* @__PURE__ */ C.createElement("div", { ref: Q }, /* @__PURE__ */ C.createElement(
    qo,
    {
      className: Zo({ layout: "panel" }),
      role: "menu",
      scrollableTabIndex: 0,
      style: {
        ...h && T === "standard" ? { boxSizing: "border-box", height: h } : {}
      }
    },
    e
  ), Kt), ha = w.props, Yr = (tt) => {
    if (ha.onClickCapture?.(tt), tt.defaultPrevented)
      return;
    const Cr = !_;
    ae.current = !0, L(Cr);
  }, Sr = k1(w) ? C.cloneElement(w, {
    onClickCapture: Yr,
    ref: ie
  }) : C.cloneElement(w, {
    onClickCapture: Yr
  });
  return /* @__PURE__ */ C.createElement(
    U6,
    {
      isOpen: _,
      onOpenChange: (tt) => {
        if (ae.current) {
          ae.current = !1;
          return;
        }
        L(tt);
      }
    },
    Sr,
    /* @__PURE__ */ C.createElement(
      cC,
      {
        className: t,
        containerPadding: r,
        crossOffset: a,
        isPopoverFullWidth: H,
        isPopoverMatchTriggerWidth: K,
        menuDialog: ze,
        modeOverride: Ye,
        offset: u,
        orientation: f,
        overlayProps: F,
        panelMenuContent: Bt,
        placement: Y,
        popoverRef: re,
        shouldZoom: G,
        style: $,
        theme: se,
        triggerRef: ie,
        useModal: k,
        variant: T
      }
    )
  );
}, fC = ({
  children: e,
  isOpen: t,
  locales: r
}) => {
  const a = C.Children.toArray(
    e
  ), i = $0(r, {
    ariaLabel: "more breadcrumbs",
    label: "..."
  });
  return /* @__PURE__ */ C.createElement(
    dC,
    {
      isOpen: t,
      trigger: /* @__PURE__ */ C.createElement(
        Cn,
        {
          "aria-label": i.ariaLabel(),
          as: "button",
          className: "bg-transparent border-none rounded-sm",
          href: "",
          size: "small"
        },
        i.label()
      )
    },
    a.map(
      (s, c) => (s.props.current ?? !1) || !s.props.href ? /* @__PURE__ */ C.createElement(
        ia,
        {
          "data-testid": Ce(`@breadcrumb-collapsed-item-${c}`),
          key: `@breadcrumb-collapsed-item-${c}`,
          title: s.props.children
        }
      ) : /* @__PURE__ */ C.createElement(
        ia,
        {
          as: "a",
          "data-testid": Ce(`@breadcrumb-collapsed-item-${c}`),
          href: s.props.href,
          key: `@breadcrumb-collapsed-item-${c}`,
          title: s.props.children
        }
      )
    )
  );
};
function sd({
  children: e,
  index: t,
  separator: r
}) {
  return /* @__PURE__ */ C.createElement("li", { className: "list-none flex flex-row gap-1 items-center" }, t > 0 && (S.isValidElement(r) && Pf(r) ? bt(
    {
      className: "@paloma-breadcrumb-separator text-content-neutral-subtle rtl:scale-x-[-1]"
    },
    r
  ) : Ff(r, {
    /* 6px of horizontal padding */
    className: "@paloma-breadcrumb-separator text-content-neutral-subtle px-[0.375rem]",
    size: "large"
  })), e);
}
var Dd = ({
  children: e,
  className: t,
  collapsed: r,
  locales: a,
  maxVisibleTablet: i = 3,
  separator: s = "•",
  ...c
}) => {
  const u = C.Children.toArray(
    e
  );
  S.useEffect(() => {
    at(
      u.every((v) => zt(v, If)),
      "All children of a Breadcrumb should be Breadcrumb.Item"
    ), at(
      u.slice(0, -1).every((v) => !!v.props.href),
      "Non-last Breadcrumb.Item components should have an `href`. Omitting `href` on a non-last item renders it as a non-interactive span, which breaks mobile back-navigation."
    );
  }, [u]);
  const p = u.length > 3 ? [
    u[0],
    /* @__PURE__ */ C.createElement(fC, { children: u.slice(1, -1), locales: a }),
    u[u.length - 1]
  ] : u, f = !!r || u.length > i;
  return /* @__PURE__ */ C.createElement("nav", { "aria-label": "Breadcrumb", className: "overflow-hidden whitespace-nowrap" }, /* @__PURE__ */ C.createElement(
    "ol",
    {
      className: ld({ className: t, desktop: !0 }),
      "data-testid": Ce("@paloma-breadcrumb-desktop-id"),
      ...c
    },
    (f ? p : u).map(
      (v, g) => /* @__PURE__ */ C.createElement(
        sd,
        {
          index: g,
          key: `@breadcrumb-item-${g}`,
          separator: s
        },
        v
      )
    )
  ), /* @__PURE__ */ C.createElement(
    "ol",
    {
      className: ld({
        className: t,
        tablet: !0,
        truncateLastItem: !f
      }),
      "data-testid": Ce("@paloma-breadcrumb-tablet-id"),
      ...c
    },
    (f ? p : u).map(
      (v, g) => /* @__PURE__ */ C.createElement(
        sd,
        {
          index: g,
          key: `@breadcrumb-item-${g}`,
          separator: s
        },
        v
      )
    )
  ), /* @__PURE__ */ C.createElement(
    "ol",
    {
      className: ld({ className: t, mobile: !0 }),
      "data-testid": Ce("@paloma-breadcrumb-mobile-id"),
      ...c
    },
    u.map((v, g) => /* @__PURE__ */ C.createElement(
      sd,
      {
        index: g,
        key: `@breadcrumb-item-${g}`,
        separator: /* @__PURE__ */ C.createElement(sf, { size: "x-small" })
      },
      v
    ))
  ));
};
Dd.Item = If;
Z({
  base: "h-1 w-1 bg-content-neutral-bold/[0.15] rounded-full",
  variants: {
    isCurrent: {
      true: "w-12"
    }
  }
});
Z({
  base: "flex flex-col gap-4 flex-grow w-full"
});
Z({
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
});
var pC = Z({
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
}), mC = Z({
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
}), hC = Z({
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
}), gC = Z({
  base: "flex items-center justify-center box-border min-w-6 min-h-6 rounded-full border-1 border-solid border-neutral-subtle bg-surface-level-01",
  variants: {
    isBadgeAmountLong: {
      true: "px-1"
    },
    selected: {
      true: "border-none bg-surface-highlight-bold text-content-inverse-bold"
    }
  }
}), vC = Z({
  variants: {
    disabled: {
      false: "rounded-full mx-0.5 hover:bg-content-neutral-bold/[0.08] hover:active:bg-content-neutral-bold/[0.12]"
    }
  }
}), yC = Z({
  base: "content-neutral-regular"
}), aa = ({
  badge: e,
  chipContentClassname: t,
  className: r,
  disabled: a,
  dismissLabel: i,
  dismissible: s = !1,
  emphasis: c = "minimal",
  label: u,
  leadingContent: p,
  onClick: f,
  onDismiss: v,
  selected: g = !1,
  size: h = "small",
  truncate: b = !1
}) => {
  const { pressProps: $ } = Qr({
    isDisabled: a,
    onPress: f
  }), w = f ? "button" : "div", k = {};
  f && (Object.assign(k, $), k["aria-disabled"] = a, k.disabled = a, k.role = "button");
  const T = p !== void 0 && Pf(p), F = typeof e == "number" && !Number.isNaN(e), H = s && !!v, K = !!f && !a, Y = F && e >= 100, re = !F && !!H, { avatar: Q, icon: X, product: ie } = mC({ size: h });
  return at(
    p === void 0 || p.type === zd || T || p.type === c1,
    "The Leading content must be an Avatar, ProductLogo or @paloma/icons component."
  ), /* @__PURE__ */ C.createElement($n, null, /* @__PURE__ */ C.createElement(
    w,
    {
      className: pC({
        className: r,
        disabled: a,
        emphasis: c,
        hasLeadingContent: !!p,
        hasOnlyBadge: F,
        isDismissible: H,
        isIconComponent: T,
        isInteractive: K,
        selected: g,
        size: h
      }),
      "data-testid": "@paloma-chip-id",
      ...k
    },
    p?.type === zd && // Paddings depending on size
    /* @__PURE__ */ C.createElement("div", { className: Q(), "data-testid": "@paloma-chip-avatar" }, C.cloneElement(p, {
      size: bC[h]
    })),
    p?.type === c1 && // Paddings depending on size
    /* @__PURE__ */ C.createElement("div", { className: ie(), "data-testid": "@paloma-chip-product-logo" }, C.cloneElement(p, {
      as: "div",
      contained: !0,
      shape: "square",
      size: xC[h]
    })),
    T && // Paddings according to size
    /* @__PURE__ */ C.createElement("div", { className: X(), "data-testid": "@paloma-chip-icon" }, C.cloneElement(p, { size: h })),
    /* @__PURE__ */ C.createElement(
      "div",
      {
        className: hC({
          className: t,
          hasOnlyDismissButton: re,
          truncate: b
        }),
        "data-testid": "@paloma-chip-content-id"
      },
      /* @__PURE__ */ C.createElement(
        Ue,
        {
          className: yC(),
          fontWeight: g ? "bold" : "normal",
          size: h,
          truncate: b,
          variant: "body"
        },
        u
      ),
      (F || H) && /* @__PURE__ */ C.createElement(
        "div",
        {
          className: "flex items-center",
          "data-testid": "@paloma-chip-trailing-content-id"
        },
        F && /* @__PURE__ */ C.createElement(
          "div",
          {
            className: gC({ isBadgeAmountLong: Y, selected: g }),
            "data-testid": "@paloma-chip-badge-id"
          },
          /* @__PURE__ */ C.createElement(Ue, { size: "x-small", variant: "body" }, e)
        ),
        H && !g && /* @__PURE__ */ C.createElement(
          "div",
          {
            className: vC({ disabled: a }),
            "data-testid": "@paloma-chip-dismiss-button-id"
          },
          /* @__PURE__ */ C.createElement(
            G8,
            {
              "aria-label": i,
              className: "text-content-neutral-bold",
              disabled: a,
              onClick: v,
              size: h
            }
          )
        )
      )
    )
  ));
}, bC = {
  medium: "small",
  small: "x-small",
  "x-small": "xx-small"
}, xC = {
  medium: "x-small",
  small: "2x-small",
  "x-small": "2x-small"
};
Z({
  base: "flex py-5 border-solid border-[1px] backdrop-blur-surface",
  variants: {
    placement: {
      inline: "w-full bg-content-inverse-subtle rounded-lg border-neutral-subtle",
      top: "bg-surface-container justify-center sticky top-0 left-0 right-0 border-solid border-b-1 border-x-0 border-t-0 border-neutral-subtle max-[1440px]:px-5"
    }
  }
});
Z({
  base: "flex gap-4 max-lg:flex-col lg:flex-row lg:justify-between w-full",
  variants: {
    placement: {
      inline: "flex-1 px-6",
      top: "max-w-[1440px]"
    }
  }
});
Xe({
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
Xe({
  base: "text-content-neutral-bold"
});
Xe({
  // Target the logos text to hide on mobile only
  base: "text-content-neutral-bold [&_span[data-logo-product-name=paloma-logo]]:max-lg:hidden"
});
Xe({
  variants: {
    isOpen: {
      false: "bg-transparent",
      true: ""
    }
  }
});
Z({
  base: "w-10 h-10",
  variants: {
    size: {
      large: "lg:w-20 lg:h-20",
      // 60px
      medium: "lg:w-[3.75rem] lg:h-[3.75rem]"
    }
  }
});
Z({
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
Z({
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
Z({
  base: "relative",
  variants: {
    size: {
      large: "h-11 lg:h-20",
      medium: "h-11"
    }
  }
});
Z({
  base: "h-full"
});
Z({
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
Z({
  base: "lg:col-span-8",
  variants: {
    alignment: {
      centered: "!col-start-3",
      left: "",
      right: ""
    }
  }
});
Z({
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
var wC = Z({
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
}), SC = Z({
  base: [
    "absolute top-0 left-0 right-0 bottom-0",
    "rounded-full border-none",
    "group-hover:bg-content-neutral-bold/[0.08]",
    "group-active:bg-content-neutral-bold/[0.12]",
    "group-hover:group-active:bg-content-neutral-bold/[0.12]"
  ]
});
S.forwardRef(
  ({
    as: e,
    className: t,
    disabled: r,
    href: a,
    icon: i,
    label: s,
    onBlur: c,
    onClick: u,
    onFocus: p,
    size: f = "medium",
    ...v
  }, g) => {
    const h = e ?? (a ? "a" : "button"), b = S.useRef(null), { buttonProps: $ } = ws(
      { isDisabled: r, onBlur: c, onFocus: p, onPress: u },
      b
    ), { linkProps: w } = hv(
      { href: a, isDisabled: r, onBlur: c, onFocus: p, onPress: u },
      b
    ), k = $e(
      v,
      h === "a" ? w : void 0,
      h === "button" ? $ : void 0
    );
    return /* @__PURE__ */ C.createElement($n, null, S.createElement(
      h,
      {
        "aria-disabled": r,
        className: wC({
          className: t,
          disabled: r,
          size: f
        }),
        ref: Hn(b, g),
        ...k
      },
      /* @__PURE__ */ C.createElement("div", { className: "relative" }, /* @__PURE__ */ C.createElement(
        js,
        {
          "aria-hidden": "true",
          as: "div",
          iconOnly: !0,
          leadingIcon: i,
          size: f,
          variant: "secondary"
        }
      ), /* @__PURE__ */ C.createElement(
        "div",
        {
          "aria-hidden": "true",
          className: SC(),
          "data-vrt-overlay": !0
        }
      )),
      /* @__PURE__ */ C.createElement(Ue, { size: f, variant: "body" }, s)
    ));
  }
);
Z({
  base: "w-full"
});
Z({
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
Z({
  base: [
    // Grid classes
    "lg:col-span-4",
    // Flex classes (for all breakpoints)
    "flex flex-row gap-4",
    // Flex classes for desktop
    "lg:justify-end"
  ]
});
Z({
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
Xe({
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
Xe({
  base: "blur-[4px]"
});
Xe({
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
Xe({
  base: "blur-[50px]"
});
Xe({
  base: "absolute  h-auto w-[175%] md:w-[100%] lg:w-[82%] -right-[50%] md:-right-[10%] lg:right-[5%] lg:-bottom-20",
  variants: {
    browserVariant: {
      chrome: "bottom-0 md:bottom-20",
      notChrome: "top-28 md:top-auto md:bottom-40"
    }
  }
});
Xe({
  base: "absolute  h-auto w-[200%] md:w-full lg:w-[90%] -left-[50%] md:left-0 lg:left-[5%] lg:-bottom-20",
  variants: {
    browserVariant: {
      chrome: "bottom-0 md:bottom-20",
      notChrome: "top-28 md:top-auto md:bottom-40"
    }
  }
});
Z({
  base: [
    "flex flex-col",
    "bg-surface-container backdrop-blur-surface",
    "border border-solid border-neutral-subtle",
    "text-content-neutral-bold rounded-xl w-[256px] px-6 py-2"
  ]
});
Z({
  base: "flex py-4 w-full items-center",
  variants: {
    size: {
      medium: "mb-2 text-content-highlight gap-4",
      small: "mb-1 gap-2"
    }
  }
});
Z({
  base: "py-4"
});
Xe({
  base: "@paloma-logo flex flex-row gap-2 items-center"
});
Z({
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
});
Z({
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
});
Z({
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
});
Z({
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
});
Z({
  base: "w-full",
  variants: {
    orientation: {
      horizontal: "rounded-lg",
      vertical: "rounded-xl"
    }
  }
});
Z({
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
});
Z({
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
});
Z({
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
});
Z({
  base: "w-full flex flex-col gap-2 items-center md:[&[data-trailing-bottom=true]]:items-end [&>button]:w-full md:[&>button]:w-auto"
});
Xe({
  base: "@paloma-mega-menu-content data-[orientation=vertical]:p-6 data-[orientation=horizontal]:py-12 data-[orientation=horizontal]:px-8 data-[orientation=horizontal]:w-[-webkit-fill-available]"
});
var CC = ({
  children: e,
  config: t,
  id: r,
  mode: a,
  theme: i,
  themeId: s,
  themeVariant: c,
  ...u
}) => {
  const [p, f] = WS(r, t), v = D0(), g = S.useMemo(() => ({
    ...v,
    mode: a ?? v.mode,
    theme: i ?? v.theme,
    themeId: s ?? v.themeId,
    themeVariant: c ?? v.themeVariant,
    variant: i ?? v.theme
  }), [v, a, i, s, c]);
  return /* @__PURE__ */ C.createElement(K0.Provider, { value: g }, f && /* @__PURE__ */ C.createElement("style", { "data-testid": "@paloma-theme-provider-style-id" }, f), /* @__PURE__ */ C.createElement(
    "div",
    {
      ...u,
      "data-paloma-mode": g.mode,
      "data-paloma-theme": g.theme,
      "data-paloma-variant": g.themeVariant,
      "data-testid": g.themeId,
      id: p
    },
    e
  ));
}, V0 = S.createContext(null);
V0.Provider;
var $C = () => {
  const e = S.useContext(V0);
  return at(
    e !== null,
    "useModalContext must be used within a ModalProvider."
  ), e;
}, EC = Z({
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
S.forwardRef(
  ({ children: e, className: t, hasFooter: r, ...a }, i) => {
    const { asBottomSheet: s } = $C();
    return /* @__PURE__ */ C.createElement(
      "div",
      {
        className: EC({ asBottomSheet: s, class: t, hasFooter: r }),
        ref: i,
        ...a
      },
      e
    );
  }
);
Z({
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
Z({
  base: "max-sm:max-w-full",
  variants: {
    asBottomSheet: {
      true: "max-w-full flex-grow-[1] basis-[0%]"
    }
  }
});
Z({
  base: [
    // Positioning
    "absolute overflow-hidden pointer-events-none",
    // Sizing
    "w-full h-5 rounded-2xl"
  ]
});
Z({
  base: "h-10",
  // Color and effect
  variants: {
    isScrollOverlayVisible: {
      true: "bg-surface-overlay blur-[18px]"
    }
  }
});
Z({
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
Z({
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
Z({
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
Z({
  base: "flex flex-col h-[100vh] h-[100dvh] h-[calc(var(--vh)*100)] min-h-[100vh] min-h-[100dvh] overscroll-none"
});
Z({
  base: "flex-none h-[106px] pb-[env(safe-area-inset-bottom)]"
});
var H0 = "motion-safe:animate-in motion-safe:fade-in motion-safe:duration-300 motion-safe:ease-out", B0 = "motion-safe:animate-out motion-safe:fade-out motion-safe:duration-300 motion-safe:ease-in";
Z({
  variants: {
    isEntering: {
      true: H0
    },
    isExiting: {
      true: B0
    }
  }
});
Z({
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
      class: H0,
      classNameIsFunction: !1,
      isEntering: !0
    },
    {
      class: B0,
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
Z({
  base: "text-content-neutral-bold flex-1 m-0"
});
Z({
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
Z({
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
Z({
  base: "bg-surface-highlight-bold h-full transition-all duration-300 ease-in-out rounded-full motion-reduce:transition-none"
});
Z({
  base: "justify-self-end grid-in-[percent] text-content-neutral-bold"
});
Z({
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
Z({
  base: "stroke-[var(--border-neutral-subtle-color)]"
});
Z({
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
Z({
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
Z({
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
Z({
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
Z({
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
var Ui = ({
  "aria-label": e,
  children: t,
  className: r,
  emphasis: a,
  equalWidth: i,
  leadingIcon: s,
  selected: c,
  size: u,
  trailingIcon: p,
  ...f
}) => {
  const v = C.useRef(null), g = a === "bold" || c ? "bold" : "normal", h = t === void 0;
  C.useEffect(() => {
    h && ((e === void 0 || e === "") && zn(
      "A SegmentedControlOption without text content should have an non-empty aria-label prop"
    ), s || zn(
      "A SegmentedControlOption needs to have text content or a `leadingIcon` with aria-label"
    ), p && zn(
      "A SegmentedControlOption without text content won't render a `trailingIcon`"
    ));
  }, [h, e, s, p]);
  const b = { size: u }, $ = u === "x-small", w = u === "small", F = u === "medium" || u === "large", H = $ || w, K = !f.disabled && !c;
  return /* @__PURE__ */ C.createElement(
    l9,
    {
      "aria-label": e,
      className: it(
        {
          /* TODO: Refactor this to use tailwind-variants once the conditional logic can be simplified. */
          // Static classes
          "@paloma-sc-option rounded-full z-10 p-2 cursor-pointer outline-none text-content-neutral-regular transition-colors duration-500 motion-reduce:transition-none focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-interactive-highlight focus-visible:outline-[3px]": !0,
          "focus-visible:outline-offset-[1px]": H,
          // Interaction states
          "hover:bg-content-neutral-regular/[0.08] active:bg-content-neutral-regular/[0.12] hover:active:bg-content-neutral-regular/[0.12]": K,
          "min-w-0": i
        },
        // Size
        h && {
          "@paloma-sc-option-empty": !0,
          "py-2 px-2": $,
          "py-3 px-3": w,
          "py-4 px-4": F
        },
        !h && {
          "@paloma-sc-option-not-empty": !0,
          "py-2 px-3": $,
          "py-3 px-4": w,
          "py-4 px-5": F
        },
        r
      ),
      "data-is-medium-or-large": F,
      "data-is-selectable": K,
      "data-is-x-small-or-small": H,
      isDisabled: f.disabled,
      ...f,
      ref: v
    },
    /* @__PURE__ */ C.createElement(
      "div",
      {
        className: it({
          /* TODO: Refactor this to use tailwind-variants once the conditional logic can be simplified. */
          "@paloma-sc-option-content flex flex-row flex-nowrap items-center justify-center w-full data-[selected=true]:data-[emphasis=bold]:text-content-inverse-bold data-[selected=true]:data-[emphasis=regular]:text-content-neutral-bold": !0,
          // Size
          "focus-visible:outline-offset-[1px]": w,
          "gap-1": H,
          "gap-2": F,
          "min-w-0": i
        }),
        "data-emphasis": a,
        "data-selected": c,
        "data-testid": "@paloma-sc-option-content-id"
      },
      bt(b, s),
      !h && /* @__PURE__ */ C.createElement("div", { className: "relative min-w-0 text-center" }, /* @__PURE__ */ C.createElement(
        Ue,
        {
          "aria-hidden": "true",
          as: "div",
          "before-content": t,
          className: it({
            /* TODO: Refactor this to use tailwind-variants once the conditional logic can be simplified. */
            "@paloma-sc-option-hidden-label break-keep whitespace-nowrap opacity-0 w-full": !0,
            "truncate ": i
          }),
          "data-testid": "@paloma-sc-option-hidden-label-id",
          fontWeight: "bold",
          size: u
        },
        t
      ), /* @__PURE__ */ C.createElement(
        Ue,
        {
          as: "div",
          "before-content": t,
          className: it(
            /* TODO: Refactor this to use tailwind-variants once the conditional logic can be simplified. */
            "@paloma-sc-option-label break-keep whitespace-nowrap absolute top-0 w-full transition-[color,font-weight] duration-150 motion-reduce:transition-none",
            {
              "truncate ": i
            }
          ),
          "data-testid": "@paloma-sc-option-label-id",
          fontWeight: g,
          size: u
        },
        t
      )),
      !h && bt(b, p)
    )
  );
}, U0 = C.forwardRef(
  ({
    children: e,
    className: t,
    emphasis: r,
    equalWidth: a,
    isOverScrolled: i,
    selectedOptionId: s,
    size: c,
    ...u
  }, p) => {
    C.useEffect(() => {
      af(
        e,
        "SegmentedControlOptionList must have children"
      ), at(
        C.Children.toArray(e).every(
          (w) => zt(w, Ui)
        ),
        "All of the children of `SegmentedControlOptionList` should be `SegmentedControlOption`"
      );
      const b = C.Children.map(
        e,
        (w) => w.props.selected
      );
      at(
        b.length === 0,
        "Options inside a SegmentedControl should not have a `selected` prop. SegmentedControl will override them. Either use the `value` or `defaultValue` props of SegmentedControl."
      );
      const $ = C.Children.map(
        e,
        (w) => w.props.id
      );
      at(
        new Set($).size === $.length,
        "All ids on the Options of a SegmentedControlOptionList must be unique"
      );
    }, [e]);
    const f = c === "small" || c === "x-small", v = c === "medium" || c === "large", g = C.Children.toArray(
      e
    )[0], h = s ?? g?.props.id;
    return /* @__PURE__ */ C.createElement(
      t9,
      {
        ...u,
        className: it(
          {
            /* TODO: Refactor this to use tailwind-variants once the conditional logic can be simplified. */
            "@paloma-scol flex flex-row rounded-full max-w-full w-fit": !0,
            // Size
            "gap-1": f,
            "gap-2": v,
            // Equal Width
            "w-full justify-stretch": a
          },
          t
        ),
        "data-large-gap": Ce(v),
        "data-small-gap": Ce(f),
        ref: p
      },
      C.Children.map(
        e,
        (b) => zt(
          b,
          Ui,
          ($, w) => {
            const { className: k, id: T, ...F } = w;
            return C.cloneElement($, {
              className: it(
                { "w-full justify-start": a },
                k
              ),
              emphasis: r,
              equalWidth: a,
              id: T,
              selected: T === h,
              size: c,
              ...F
            });
          }
        )
      ),
      i && /* @__PURE__ */ C.createElement(
        Ui,
        {
          "aria-hidden": "true",
          className: "p-[1px]",
          "data-paloma-overflow-spacer": "",
          "data-testid": "@paloma-scol-hidden-option-id",
          disabled: !0,
          id: `id-${C.Children.toArray(e).length + 1}`
        },
        /* @__PURE__ */ C.createElement("div", null)
      )
    );
  }
), kC = Z({
  base: "rounded [[tabindex='0']&:focus-visible]:outline [[tabindex='0']&:focus-visible]:outline-2 [[tabindex='0']&:focus-visible]:outline-offset-2 [[tabindex='0']&:focus-visible]:outline-interactive-highlight"
}), _C = C.forwardRef(
  ({ className: e, isActive: t, ...r }, a) => /* @__PURE__ */ C.createElement(
    i9,
    {
      ...r,
      className: it(
        /* TODO: Refactor this to use tailwind-variants once the conditional logic can be simplified. */
        "@paloma-segmented-control-panel",
        kC(),
        e
      ),
      ref: a,
      shouldForceMount: !0,
      style: { display: t ? "block" : "none" }
    }
  )
), NC = Z({
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
}), PC = Z({
  base: "[[tabindex='0']&:focus-visible]:outline [[tabindex='0']&:focus-visible]:outline-2 [[tabindex='0']&:focus-visible]:outline-offset-2 [[tabindex='0']&:focus-visible]:outline-interactive-highlight"
});
function W0(e, t, r) {
  const a = t.getBoundingClientRect(), i = e.getBoundingClientRect(), s = Math.floor(a.left), c = Math.floor(i.left), u = Math.floor(a.right), p = Math.floor(i.right), f = s - c + r, v = p - u + r, g = Math.floor(a.width);
  return {
    left: f,
    right: v,
    visibility: "initial",
    width: g
  };
}
function FC({
  activeTab: e,
  listContainerEl: t,
  relativeContainerEl: r
}) {
  if (!e.isConnected || !t.isConnected || !r.isConnected || !r.scrollTo)
    return;
  const a = r.style.padding, i = k0(a) ?? 0, s = W0(t, e, i), c = r.scrollLeft, p = Number(s.left) + Number(s.width) - r.clientWidth, f = Number(s.left ?? 0), v = p >= c, g = c >= f;
  if (!v && !g)
    return;
  const h = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";
  v && r.scrollTo({
    behavior: h,
    left: p + 8
  }), g && r.scrollTo({
    behavior: h,
    left: f - 8
  });
}
var TC = (e) => Array.from(
  e.querySelectorAll("[role=tab]")
).filter((t) => t.parentElement === e && t.isConnected), RC = ({
  children: e,
  className: t,
  containerClassName: r,
  defaultValue: a,
  disabled: i,
  emphasis: s = "regular",
  equalWidth: c,
  onChange: u,
  size: p = "medium",
  sticky: f,
  value: v,
  ...g
}) => {
  const h = p === "small" || p === "x-small", b = p === "medium" || p === "large", $ = s === "bold", w = s === "regular", k = v !== void 0, [T, F] = C.useState({
    left: 0,
    right: 0,
    width: 0
  }), [H, K] = C.useState(!1), Y = S.useRef(null), re = S.useRef(null), Q = (I, M) => I.length === M.length && I.every((z, L) => z === M[L]);
  C.useEffect(() => {
    const [I, ...M] = C.Children.toArray(e), L = C.Children.toArray(
      I?.props?.children
    ).map((N) => N.props.id);
    at(
      !v || L.includes(v),
      `There's no Option with the id ${v}`
    ), at(
      !a || L.includes(a),
      `There's no Option with the id ${a}`
    );
    const W = M.map((N) => N.props.id);
    at(
      W.length === 0 || Q(W, L),
      "The ids on the SegmentedControlOptions and the ids on the SegmentedControlPanels do not match"
    );
  }, [v, e, a]);
  const [X, ie] = f7({
    controlledValue: v,
    defaultValue: a
  }), ae = C.useCallback(() => {
    const I = Y.current, M = re.current;
    if (!I || !M || !I.isConnected || !M.isConnected)
      return K(!1), !1;
    const z = M.querySelector(
      "[data-paloma-overflow-spacer]"
    ), L = z instanceof HTMLElement ? z.offsetWidth : 0, W = M.scrollWidth - L > M.clientWidth;
    return K(W), W;
  }, []), ne = C.useCallback(() => {
    const I = Y.current, M = re.current;
    if (!I || !M || !I.isConnected || !M.isConnected)
      return null;
    const z = TC(I).find(
      (L) => L.dataset.selected === "true"
    );
    return z ? {
      activeTab: z,
      listContainerEl: I,
      relativeContainerEl: M
    } : null;
  }, []), A = C.useCallback(
    (I) => {
      const M = I ?? ne();
      if (!M)
        return;
      const { activeTab: z, listContainerEl: L, relativeContainerEl: W } = M, N = W.style.padding, G = k0(N) ?? 0, me = W0(L, z, G);
      F((ue) => ({
        ...ue,
        ...me
      }));
    },
    [ne]
  ), B = C.useCallback(
    (I) => {
      const M = I ?? ne();
      if (!M)
        return;
      const { activeTab: z, listContainerEl: L, relativeContainerEl: W } = M;
      FC({ activeTab: z, listContainerEl: L, relativeContainerEl: W });
    },
    [ne]
  ), _ = C.useCallback(() => {
    ae();
    const I = ne();
    return I ? (A(I), B(I), !0) : !1;
  }, [
    ne,
    B,
    ae,
    A
  ]);
  Nf(() => {
    A(), B();
  }, [
    p,
    s,
    c,
    X,
    A,
    B
  ]), C.useEffect(() => {
    let I = !1, M = null;
    const z = (L) => {
      M = requestAnimationFrame(() => {
        if (I)
          return;
        !_() && L > 1 && z(L - 1);
      });
    };
    return z(2), () => {
      I = !0, M !== null && cancelAnimationFrame(M);
    };
  }, [p, s, c, X, _]), C.useEffect(() => {
    window.addEventListener("resize", _, LC);
    const I = new MutationObserver(_);
    return I.observe(document.documentElement, {
      attributeFilter: ["dir"],
      attributes: !0
    }), () => {
      window.removeEventListener("resize", _), I.disconnect();
    };
  }, [_]);
  const D = C.useCallback(
    (I) => {
      ie?.(I), u?.(I);
    },
    [u, ie]
  );
  return /* @__PURE__ */ C.createElement(
    J6,
    {
      className: it(
        /* TODO: Refactor this to use tailwind-variants once the conditional logic can be simplified. */
        "@paloma-segmented-control flex flex-col w-full",
        { "gap-8": !f },
        t
      ),
      "data-is-bold-emphasis": Ce($),
      "data-is-controlled": Ce(k),
      "data-is-medium-or-large": Ce(b),
      "data-is-regular-emphasis": Ce(w),
      "data-is-x-small-or-small": Ce(h),
      defaultSelectedKey: k ? void 0 : X,
      isDisabled: i,
      onSelectionChange: D,
      selectedKey: k ? X : void 0,
      ...g
    },
    /* @__PURE__ */ C.createElement(
      "div",
      {
        className: it(
          {
            /* TODO: Refactor this to use tailwind-variants once the conditional logic can be simplified. */
            "@paloma-sc-relative-container relative rounded-full max-w-full overflow-x-auto w-fit mx-auto box-border": !0,
            // Emphasis
            "bg-surface-level-02": w,
            "bg-surface-level-03": $,
            // Disabled
            "opacity-40": i,
            // Sticky styles
            "sticky top-[90vh] z-10 backdrop-blur-surface mx-auto": !!f
          },
          PC(),
          r
        ),
        "data-testid": Ce("@paloma-sc-relative-container-id"),
        ref: re,
        style: {
          /* Added as styles instead of classes for the reposition function
            (and tests) to be able to read the padding and compensate */
          padding: h ? 4 : 8,
          scrollbarWidth: "none"
        },
        tabIndex: 0
      },
      C.Children.map(
        e,
        (I) => zt(
          I,
          U0,
          (M) => C.cloneElement(M, {
            disabled: i,
            emphasis: s,
            equalWidth: c,
            isOverScrolled: H,
            ref: Y,
            selectedOptionId: X,
            size: p,
            sticky: f
          })
        )
      ),
      /* @__PURE__ */ C.createElement(
        "div",
        {
          className: it({
            /* TODO: Refactor this to use tailwind-variants once the conditional logic can be simplified. */
            "@paloma-sc-animated-bg absolute left-0 rounded-full transition-all motion-reduce:transition-none box-border invisible": !0,
            // Emphasis
            "bg-interactive-neutral-bold": $,
            "bg-interactive-neutral-minimal border-2 border-solid border-neutral-subtle": w,
            // Size
            "top-1 bottom-1": h,
            "top-2 bottom-2": b
          }),
          "data-testid": Ce("@paloma-sc-animated-bg-id"),
          style: T
        }
      )
    ),
    /* @__PURE__ */ C.createElement("div", { className: NC({ size: p, sticky: f }) }, C.Children.map(e, (I) => {
      if (!C.isValidElement(I))
        return null;
      if (zt(I, _C))
        return C.cloneElement(I, {
          ...I.props,
          isActive: I.props.id === X
        });
    }))
  );
}, LC = { passive: !0 }, Af = "absolute rounded-full border-transparent border-[3px] border-solid pointer-events-none", jf = "absolute opacity-40 pointer-events-none", zf = {
  large: "w-[68px] h-[68px] lg:w-[132px] lg:h-[132px]",
  medium: "w-[62px] h-[62px]"
}, Kf = {
  large: "w-[72px] h-[72px] lg:w-52 lg:h-52 blur lg:blur-[30px] blur-[10px]",
  medium: "w-[70px] h-[70px] blur-[10px]"
}, Df = "radial-gradient(circle at center, transparent 67.5%, black 68%)", IC = "conic-gradient(from 30deg at 50% 50%, rgb(232, 0, 140) 10deg, rgba(241, 77, 86, 0) 60.159deg, rgba(110, 102, 177, 0) 313.812deg, rgba(159, 61, 162, 0) 318.778deg, rgba(222, 9, 143, 0.86) 351.822deg) border-box", MC = "conic-gradient(from 0deg at 50% 50%, rgba(116, 196, 115, 0) 252.06deg, rgb(0, 194, 211) 296.449deg, rgba(110, 102, 177, 0) 313.812deg, rgba(159, 61, 162, 0) 318.778deg) border-box", AC = "conic-gradient(from 0deg at 50% 50%, rgba(241, 77, 86, 0) 104.159deg, rgba(245, 113, 60, 0.09) 116.303deg, rgb(255, 199, 0) 188.979deg, rgba(177, 197, 64, 0.04) 242.188deg, rgba(116, 196, 115, 0) 252.06deg) border-box", jC = "conic-gradient(from 0deg at 47.15% 49.87%, rgb(232, 0, 140) 31.2207deg, rgba(241, 77, 86, 0) 104.159deg, rgba(110, 102, 177, 0) 313.812deg, rgba(159, 61, 162, 0) 318.778deg, rgba(222, 9, 143, 0.86) 351.822deg)", zC = "conic-gradient(from 0deg at 47.15% 49.87%, rgba(116, 196, 115, 0) 252.06deg, rgb(0, 194, 211) 296.449deg, rgba(110, 102, 177, 0) 313.812deg, rgba(159, 61, 162, 0) 318.778deg)", KC = "conic-gradient(from 0deg at 47.15% 49.87%, rgba(241, 77, 86, 0) 104.159deg, rgba(245, 113, 60, 0.09) 116.303deg, rgb(255, 199, 0) 188.979deg, rgba(177, 197, 64, 0.04) 242.188deg, rgba(116, 196, 115, 0) 252.06deg)", DC = ({ className: e, onTransitionEnd: t, size: r }) => /* @__PURE__ */ C.createElement(
  "div",
  {
    className: it(Af, e, zf[r]),
    "data-testid": Ce("@paloma-snazatar-assets-pink-ring"),
    onTransitionEnd: t,
    style: {
      background: IC,
      mask: Df
    }
  }
), OC = ({ className: e, size: t }) => /* @__PURE__ */ C.createElement(
  "div",
  {
    className: it(Af, e, zf[t]),
    "data-testid": Ce("@paloma-snazatar-assets-blue-ring"),
    style: {
      background: MC,
      mask: Df
    }
  }
), VC = ({ className: e, size: t }) => /* @__PURE__ */ C.createElement(
  "div",
  {
    className: it(Af, e, zf[t]),
    "data-testid": Ce("@paloma-snazatar-assets-yellow-ring"),
    style: {
      background: AC,
      mask: Df
    }
  }
), HC = ({ className: e, size: t }) => /* @__PURE__ */ C.createElement(
  "div",
  {
    className: it(jf, e, Kf[t]),
    "data-testid": Ce("@paloma-snazatar-assets-pink-glow"),
    style: {
      background: jC,
      backgroundOrigin: "border-box"
    }
  }
), BC = ({ className: e, size: t }) => /* @__PURE__ */ C.createElement(
  "div",
  {
    className: it(jf, e, Kf[t]),
    "data-testid": Ce("@paloma-snazatar-assets-blue-glow"),
    style: {
      background: zC,
      backgroundOrigin: "border-box"
    }
  }
), UC = ({ className: e, size: t }) => /* @__PURE__ */ C.createElement(
  "div",
  {
    className: it(jf, e, Kf[t]),
    "data-testid": Ce("@paloma-snazatar-assets-yellow-glow"),
    style: {
      background: KC,
      backgroundOrigin: "border-box"
    }
  }
), G0 = "[transition-duration:2s] [transition-timing-function:cubic-bezier(0.8, 0, 0.24, 1)] delay-500", WC = Z({
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
      class: G0,
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
}), GC = Z({
  base: "relative",
  variants: {
    size: {
      large: "lg:w-32 lg:h-32 w-16 h-16",
      medium: "w-[58px] h-[58px]"
    }
  }
}), qC = Z({
  base: [
    "w-full h-full flex justify-center items-center opacity-0",
    G0,
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
}), ZC = Z({
  variants: {
    size: {
      large: "lg:w-16 lg:h-16 lg:[&>svg]:w-16 lg:[&>svg]:h-16",
      medium: ""
    }
  }
});
C.forwardRef(
  ({
    "aria-label": e,
    className: t,
    editable: r,
    imageSrc: a,
    onEdit: i,
    size: s = "large",
    ...c
  }, u) => {
    const [p, f] = S.useState(!1), [v, g] = S.useState(0), [h, b] = S.useState(!0);
    S.useEffect(() => {
      f(!1), g(1);
    }, [a]);
    const $ = () => {
      b(!1), g(v === 3 ? 1 : v + 1);
    }, w = !!a?.length && !p, {
      blueGlowStyles: k,
      blueRingStyles: T,
      pinkGlowStyles: F,
      pinkRingStyles: H,
      yellowGlowStyles: K,
      yellowRingStyles: Y
    } = WC({
      animationStep: v,
      fadeIn: h
    }), [re] = S0(), Q = S.useRef(null);
    return S.useImperativeHandle(u, () => Q.current), /* @__PURE__ */ C.createElement("div", { className: GC({ class: t, size: s }), ...c }, w && /* @__PURE__ */ C.createElement("div", { className: qC({ animationStep: v }) }, /* @__PURE__ */ C.createElement(HC, { className: F(), size: s }), /* @__PURE__ */ C.createElement(BC, { className: k(), size: s }), /* @__PURE__ */ C.createElement(UC, { className: K(), size: s }), /* @__PURE__ */ C.createElement(
      DC,
      {
        className: H(),
        onTransitionEnd: $,
        size: s
      }
    ), /* @__PURE__ */ C.createElement(OC, { className: T(), size: s }), /* @__PURE__ */ C.createElement(VC, { className: Y(), size: s })), w ? /* @__PURE__ */ C.createElement(
      "img",
      {
        alt: e,
        "aria-label": e,
        className: "object-cover h-full w-full rounded-full absolute top-0 left-0",
        onError: () => f(!0),
        src: a
      }
    ) : /* @__PURE__ */ C.createElement(
      "div",
      {
        className: "bg-surface-level-03 w-full h-full rounded-full flex justify-center items-center",
        "data-testid": Ce("@paloma-snazatar-icon-id")
      },
      /* @__PURE__ */ C.createElement(
        of,
        {
          "aria-label": "profile picture placeholder",
          className: ZC({ size: s }),
          size: "large"
        }
      )
    ), r && s === "large" && /* @__PURE__ */ C.createElement(
      "div",
      {
        className: "absolute -bottom-[6px] w-[73px] lg:w-[138px] flex justify-end",
        ref: Q
      },
      /* @__PURE__ */ C.createElement(
        js,
        {
          "aria-label": "edit button",
          className: "bg-content-inverse-bold flex w-8 h-8 lg:w-11 lg:h-11",
          iconOnly: !0,
          leadingIcon: /* @__PURE__ */ C.createElement(n5, null),
          onClick: i,
          size: re === "lg" ? "small" : "x-small",
          variant: "inverse"
        }
      )
    ));
  }
);
var q0 = ({ children: e }) => e, _1 = "text-content-neutral-bold backdrop-blur-surface", Z0 = Z({
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
}), Q0 = ({ children: e }) => e, QC = Z0({ shape: "circle" }), N1 = {
  medium: 16,
  small: 12,
  "x-small": 8
}, P1 = (e, t, r, a) => C.isValidElement(e) && Pf(e) ? /* @__PURE__ */ C.createElement(C.Fragment, null, bt(
  {
    contained: !0,
    containerClassName: _1,
    ...a !== void 0 && { shape: a },
    size: r
  },
  e
), /* @__PURE__ */ C.createElement("div", { className: QC })) : /* @__PURE__ */ C.createElement(C.Fragment, null, C.cloneElement(e, {
  className: _1,
  size: r
}), /* @__PURE__ */ C.createElement("div", { className: t })), ma = ({
  children: e,
  className: t,
  maxCount: r = 3,
  size: a = "medium",
  trailingShape: i = "circle",
  trailingSlotLabel: s = "Count",
  ...c
}) => {
  S.useEffect(() => {
    at(
      r >= 1 && r <= 3,
      "maxCount must be between 1 and 3 (inclusive)"
    );
  }, [r]);
  const u = S.Children.toArray(e), p = s1(
    u,
    q0
  )?.props.children, f = s1(
    u,
    Q0
  )?.props.children, v = S.Children.toArray(p), g = v.slice(0, r), h = S.Children.toArray(f)[0], b = v.length - r, $ = v.length > r, w = Z0({ shape: i, size: a });
  return /* @__PURE__ */ C.createElement("div", { className: t, ...c }, /* @__PURE__ */ C.createElement("div", { className: "flex" }, g.map((k, T) => /* @__PURE__ */ C.createElement(
    "div",
    {
      className: "relative",
      "data-testid": `@paloma-sg-element-container-id-${T}`,
      key: k.key,
      style: {
        marginInlineStart: T === 0 ? 0 : `-${N1[a]}px`
      }
    },
    P1(k, w, a)
  )), (!!h || $) && /* @__PURE__ */ C.createElement(
    "div",
    {
      className: "relative",
      "data-testid": "@paloma-sg-element-container-id-trailing",
      style: { marginInlineStart: `-${N1[a]}px` }
    },
    h ? P1(
      h,
      w,
      a,
      "circle"
    ) : /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(
      zs,
      {
        appearance: "neutral",
        "aria-label": s,
        "data-testid": "@paloma-stacked-group-trailing-id",
        emphasis: "regular",
        label: `+${b}`,
        shape: i,
        size: a
      }
    ), /* @__PURE__ */ C.createElement("div", { className: w }))
  )));
};
ma.displayName = "StackedGroup";
ma.Content = q0;
ma.Content.displayName = "StackedContent.Content";
ma.Trailing = Q0;
ma.Trailing.displayName = "StackedContent.Trailing";
var XC = Z({
  base: "flex flex-row items-center gap-4",
  variants: {
    isVertical: {
      false: "flex-col text-center",
      true: "my-4"
    }
  }
}), YC = Z({
  base: "flex",
  variants: {
    isVertical: {
      false: "w-full",
      true: ""
    }
  }
}), JC = Z({
  base: "mr-4 mt-4",
  variants: {
    isFirstStep: {
      false: "opacity-100",
      true: "opacity-0"
    }
  }
}), e$ = Z({
  base: "ml-4 mt-4",
  variants: {
    isLastStep: {
      false: "opacity-100",
      true: "opacity-0"
    }
  }
}), t$ = "text-content-neutral-subtle", n$ = Z({
  base: "flex",
  variants: {
    isVertical: {
      false: "justify-center",
      true: ""
    }
  }
}), r$ = Z({
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
}), l$ = Z({
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
}), X0 = ({
  active: e,
  children: t,
  dividerEmphasis: r,
  index: a = 0,
  isVertical: i,
  leadingIcon: s,
  preTitle: c,
  showAllHorizontalContent: u,
  stepLength: p = 0,
  title: f
}) => {
  const v = a + 1, g = !!e || !i && u;
  return /* @__PURE__ */ C.createElement("div", { className: "flex-grow" }, /* @__PURE__ */ C.createElement("div", { className: XC({ isVertical: i }) }, /* @__PURE__ */ C.createElement("div", { className: YC({ isVertical: i }) }, !i && /* @__PURE__ */ C.createElement(
    Jt,
    {
      className: JC({
        isFirstStep: a === 0
      }),
      "data-testid": "@paloma-stepper-step-left-divider-id",
      emphasis: r
    }
  ), /* @__PURE__ */ C.createElement(
    zs,
    {
      appearance: e ? "neutral-inverse" : "neutral",
      className: "flex-shrink-0",
      emphasis: e ? "highlight" : "neutral",
      icon: s,
      label: v.toString(),
      shape: "circle",
      size: "x-small"
    }
  ), !i && /* @__PURE__ */ C.createElement(
    Jt,
    {
      className: e$({
        isLastStep: a === p - 1
      }),
      "data-testid": "@paloma-stepper-step-right-divider-id",
      emphasis: r
    }
  )), /* @__PURE__ */ C.createElement("div", { className: "flex flex-col" }, Ff(c, {
    className: t$,
    fontWeight: "bold",
    size: "x-small"
  }), /* @__PURE__ */ C.createElement(
    Ue,
    {
      className: "text-content-neutral-bold",
      size: "large",
      variant: "body"
    },
    f
  ))), t && /* @__PURE__ */ C.createElement(
    "div",
    {
      className: n$({ isVertical: i }),
      "data-testid": "@paloma-stepper-step-content-id"
    },
    i && /* @__PURE__ */ C.createElement(
      Jt,
      {
        className: "ml-4",
        "data-testid": "@paloma-stepper-step-content-divider-id",
        emphasis: r,
        orientation: "vertical"
      }
    ),
    /* @__PURE__ */ C.createElement(
      "div",
      {
        className: r$({
          isContentShown: g,
          isVertical: i
        })
      },
      /* @__PURE__ */ C.createElement("div", { className: "overflow-hidden" }, /* @__PURE__ */ C.createElement("div", { className: l$({ isVertical: i }) }, t))
    )
  ));
}, i$ = Z({
  base: "flex",
  variants: {
    orientation: {
      horizontal: "",
      vertical: "flex-col"
    }
  }
}), a$ = Z({
  base: "flex",
  variants: {
    orientation: {
      horizontal: "flex-row flex-grow basis-[0%]",
      vertical: "flex-col"
    }
  }
}), o$ = Z({
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
}), Of = ({
  children: e,
  className: t,
  currentStep: r = 0,
  orientation: a = "horizontal",
  showAllHorizontalContent: i
}) => {
  const s = S.Children.toArray(e).length, c = "minimal", u = Math.min(Math.max(r, 0), s - 1);
  return /* @__PURE__ */ C.createElement("div", { className: i$({ class: t, orientation: a }) }, E0(e, X0, (p, f) => /* @__PURE__ */ C.createElement("div", { className: a$({ orientation: a }), key: f }, C.cloneElement(p, {
    active: f === u,
    dividerEmphasis: c,
    index: f,
    isVertical: a === "vertical",
    showAllHorizontalContent: i,
    stepLength: s
  }), /* @__PURE__ */ C.createElement(
    Jt,
    {
      className: o$({
        lastItem: f === s - 1,
        orientation: a
      }),
      emphasis: c,
      orientation: a
    }
  ))));
};
Of.displayName = "Stepper";
Of.Step = X0;
Of.Step.displayName = "Stepper.Step";
var s$ = Z({
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
S.forwardRef(
  ({
    active: e = !1,
    "aria-label": t,
    as: r,
    children: a,
    className: i,
    disabled: s = !1,
    href: c,
    leadingIcon: u,
    orientation: p = "vertical",
    size: f = "medium",
    trailingIcon: v,
    ...g
  }, h) => {
    const b = a === void 0, $ = r ?? "a", w = r === "button";
    S.useEffect(() => {
      b && (at(
        t !== void 0 && t.length > 0,
        "A TabItem without text content should have an non-empty aria-label prop"
      ), af(u, "An empty TabItem needs a leadingIcon"), at(!v, "An empty TabItem can't have a trailingIcon"));
    }, [b, t, u, v]);
    const k = p === "horizontal" && e ? "bold" : "normal";
    return /* @__PURE__ */ C.createElement($n, { disabled: s, focusRingClass: "rounded-sm" }, /* @__PURE__ */ C.createElement(
      $,
      {
        "aria-current": $ === "a" && e ? "page" : void 0,
        "aria-disabled": s,
        "aria-label": t,
        className: s$({
          class: i,
          disabled: s,
          isButton: w,
          isEmpty: b,
          orientation: p,
          selected: e,
          size: f
        }),
        href: c,
        tabIndex: s ? -1 : void 0,
        ...g,
        ref: h
      },
      bt(
        {
          className: "@paloma-tab-item-leading-icon text-content-neutral-bold",
          size: f
        },
        u
      ),
      Ff(a, {
        fontWeight: k,
        size: f,
        variant: "body"
      }),
      bt(
        {
          className: "@paloma-tab-item-trailing-icon text-content-neutral-bold flex-grow justify-end",
          size: f
        },
        v
      )
    ));
  }
);
Z({
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
Z({
  variants: {
    equalWidthTabs: {
      true: "w-full justify-center"
    }
  }
});
var u$ = Z({
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
}), c$ = Z({
  base: "flex flex-row justify-between items-center",
  variants: {
    size: {
      large: "mb-5",
      medium: "mb-3"
    }
  }
});
Z({
  base: "pointer-events-none"
});
S.forwardRef(
  ({
    active: e = !1,
    ariaLabel: t,
    as: r,
    className: a,
    description: i,
    disabled: s = !1,
    icon: c,
    onBlur: u,
    onClick: p,
    onFocus: f,
    onHover: v,
    size: g = "medium",
    title: h,
    trailingIcon: b,
    trailingSlot: $,
    ...w
  }, k) => {
    const T = S.useRef(null), F = !!p, H = r ?? (F ? "button" : "div"), { buttonProps: K } = ws(
      {
        elementType: typeof H == "string" ? H : "button",
        isDisabled: s,
        onBlur: u,
        onFocus: f,
        onPress: p
      },
      T
    ), Y = $e(w, F ? K : void 0);
    return /* @__PURE__ */ C.createElement($n, null, /* @__PURE__ */ C.createElement(
      H,
      {
        "aria-disabled": s,
        "aria-label": F ? t : void 0,
        className: u$({
          active: e,
          className: a,
          disabled: s,
          hasOnClick: F,
          size: g
        }),
        disabled: s,
        onMouseEnter: v,
        ref: Hn(T, k),
        ...Y
      },
      (c || $) && /* @__PURE__ */ C.createElement("div", { className: c$({ size: g }) }, c && /* @__PURE__ */ C.createElement(
        zs,
        {
          "data-testid": "@paloma-tile-icon-id",
          icon: c,
          size: d$[g]
        }
      ), $ && /* @__PURE__ */ C.createElement(
        "div",
        {
          className: "pointer-events-none",
          "data-testid": "tile-trailing-slot"
        },
        $
      )),
      /* @__PURE__ */ C.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ C.createElement("div", { className: "flex flex-col" }, /* @__PURE__ */ C.createElement(Ue, { className: "pointer-events-none" }, h), i && /* @__PURE__ */ C.createElement(
        Ue,
        {
          className: "pointer-events-none text-content-neutral-subtle mt-1",
          "data-testid": "@paloma-tile-description-id",
          size: "x-small"
        },
        i
      )), b && /* @__PURE__ */ C.createElement(
        "div",
        {
          className: "pointer-events-none self-end",
          "data-testid": "tile-trailing-icon"
        },
        b
      ))
    ));
  }
);
var d$ = {
  large: "small",
  medium: "x-small"
}, f$ = S.createContext(null);
f$.Provider;
Xe({
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
Xe({
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
Xe({
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
Xe({
  base: "flex size-8 shrink-0 items-center justify-center rounded-full border border-neutral-subtle bg-transparent text-content-neutral-bold cursor-pointer outline-none transition-colors [@media(hover:hover)]:hover:bg-content-neutral-bold/[0.08] [@media(hover:hover)]:hover:active:bg-content-neutral-bold/[0.12]",
  variants: {
    hasBody: {
      true: "self-start"
    }
  }
});
Xe({
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
Z({
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
Z({
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
Z({
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
Z({
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
Z({
  base: "flex w-full",
  variants: {
    orientation: {
      horizontal: "flex-row gap-4",
      vertical: "flex-col gap-6 flex-1 h-full justify-between"
    }
  }
});
Z({
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
Z({
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
Z({
  base: "bg-surface-inverse rounded px-[6px] py-1 flex items-center relative gap-1 outline-none",
  variants: {
    size: {
      large: "min-w-36",
      small: ""
    }
  }
});
function F1({ card: e, hero: t = !1 }) {
  const r = t ? "ea-r-announcement ea-r-announcement--hero" : "ea-r-announcement", a = /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsx("div", { className: "ea-r-announcement__media", children: e.image ? /* @__PURE__ */ x.jsx("img", { src: e.image, alt: "", loading: "lazy" }) : null }),
    /* @__PURE__ */ x.jsxs("div", { className: "ea-r-announcement__content", children: [
      e.subtitle ? /* @__PURE__ */ x.jsx("p", { className: "ea-r-announcement__eyebrow", children: e.subtitle }) : null,
      /* @__PURE__ */ x.jsx("h3", { className: "ea-r-announcement__title", children: e.title }),
      e.meta ? /* @__PURE__ */ x.jsx("p", { className: "ea-r-announcement__meta", children: e.meta }) : null
    ] })
  ] });
  return e.link ? /* @__PURE__ */ x.jsx("a", { className: r, href: e.link, children: a }) : /* @__PURE__ */ x.jsx("article", { className: r, children: a });
}
function p$({ cards: e = [] }) {
  if (!e.length)
    return null;
  const [t, ...r] = e;
  return /* @__PURE__ */ x.jsx("section", { className: "ea-r-section ea-r-announcements", "aria-label": "Announcements", children: /* @__PURE__ */ x.jsxs("div", { className: "ea-r-announcements__grid", children: [
    /* @__PURE__ */ x.jsx(F1, { card: t, hero: !0 }),
    /* @__PURE__ */ x.jsx("div", { className: "ea-r-announcements__list", children: r.slice(0, 4).map((a) => /* @__PURE__ */ x.jsx(F1, { card: a }, `${a.title}-${a.link}`)) })
  ] }) });
}
function m$({ crumbs: e = [], label: t = "Breadcrumb", moreLabel: r }) {
  return e.length ? /* @__PURE__ */ x.jsx("nav", { className: "ea-breadcrumbs", "aria-label": t, children: /* @__PURE__ */ x.jsx(
    Dd,
    {
      separator: ">",
      locales: r ? { label: r, ariaLabel: r } : void 0,
      children: e.map((a) => /* @__PURE__ */ x.jsx(
        Dd.Item,
        {
          href: a.isActive ? void 0 : a.url,
          current: a.isActive || void 0,
          children: a.label
        },
        `${a.label}-${a.url || "current"}`
      ))
    }
  ) }) : null;
}
const h$ = {
  "fab-facebook": u5,
  "fab-instagram": N5,
  "fab-twitch": r6,
  "fab-x-twitter": d6,
  "fab-youtube": h6
};
function g$({
  columns: e = [],
  social: t = [],
  localeLabel: r = "",
  localeHref: a = null,
  copyright: i = "",
  socialLabel: s = ""
}) {
  return /* @__PURE__ */ x.jsx("footer", { className: "ea-footer", children: /* @__PURE__ */ x.jsxs("div", { className: "ea-footer__inner", children: [
    /* @__PURE__ */ x.jsxs("div", { className: "ea-footer__top", children: [
      e.map((c) => /* @__PURE__ */ x.jsxs(
        "nav",
        {
          className: "ea-footer__column",
          "aria-label": c.title,
          children: [
            /* @__PURE__ */ x.jsx(Ue, { as: "h2", className: "ea-footer__column-title", children: c.title }),
            /* @__PURE__ */ x.jsx("ul", { className: "ea-footer__links", children: c.links.map((u) => /* @__PURE__ */ x.jsx("li", { children: /* @__PURE__ */ x.jsx(Cn, { className: "ea-footer__link", href: u.url, children: u.text }) }, `${u.url}-${u.text}`)) })
          ]
        },
        c.title
      )),
      r ? /* @__PURE__ */ x.jsx("div", { className: "ea-footer__locale", children: a ? /* @__PURE__ */ x.jsx(Cn, { className: "ea-footer__locale-button", href: a, children: r }) : /* @__PURE__ */ x.jsx("span", { className: "ea-footer__locale-button", children: r }) }) : null
    ] }),
    /* @__PURE__ */ x.jsx(Jt, { orientation: "horizontal", emphasis: "subtle" }),
    /* @__PURE__ */ x.jsxs("div", { className: "ea-footer__bottom", children: [
      t.length ? /* @__PURE__ */ x.jsx("ul", { className: "ea-footer__social", "aria-label": s, children: t.map((c) => {
        const u = h$[c.icon];
        return /* @__PURE__ */ x.jsx("li", { children: /* @__PURE__ */ x.jsx(
          Cn,
          {
            className: "ea-footer__social-link",
            href: c.url,
            "aria-label": c.label,
            rel: "noopener noreferrer",
            target: "_blank",
            children: u ? /* @__PURE__ */ x.jsx(u, {}) : c.label
          }
        ) }, c.url);
      }) }) : null,
      i ? /* @__PURE__ */ x.jsx(Ue, { as: "p", className: "ea-footer__copyright", children: i }) : null
    ] })
  ] }) });
}
const v$ = "ea-header-search-input", T1 = "ea-header-search-listbox", y$ = "ea-header-search-row-", b$ = {
  recent: W5,
  trending: Uy,
  search: Ml
};
function x$({ name: e }) {
  const t = b$[e] || Ml;
  return /* @__PURE__ */ x.jsx(t, {});
}
function w$({ row: e }) {
  return e.badgeUrl ? /* @__PURE__ */ x.jsx("img", { className: "ea-header-search__badge", src: e.badgeUrl, alt: "" }) : /* @__PURE__ */ x.jsx(
    "span",
    {
      className: "ea-header-search__badge ea-header-search__badge--letter",
      style: e.badgeColor ? { backgroundColor: `#${e.badgeColor}` } : void 0,
      "aria-hidden": "true",
      children: e.badgeInitial
    }
  );
}
function S$({
  placeholder: e = "",
  labels: t = {},
  sections: r = [],
  loading: a = !1,
  isQuerying: i = !1,
  onOpen: s,
  onQueryChange: c,
  onNavigate: u,
  onSubmitQuery: p
}) {
  const [f, v] = S.useState(!1), [g, h] = S.useState(-1), [b, $] = S.useState(""), w = S.useRef(null), k = S.useRef(null), T = S.useMemo(() => {
    const _ = [];
    for (const D of r)
      for (const I of D.rows)
        _.push({ ...I, index: _.length, domId: `${y$}${_.length}` });
    return _;
  }, [r]), F = S.useMemo(() => {
    let _ = 0;
    return r.map((D) => {
      const I = T.slice(_, _ + D.rows.length);
      return _ += D.rows.length, { ...D, rows: I };
    });
  }, [r, T]), H = f && (a || i || T.length > 0), K = S.useCallback(() => {
    v((_) => (_ || s?.(), !0));
  }, [s]), Y = S.useCallback(() => {
    v(!1), h(-1);
  }, []), re = S.useCallback(() => {
    K(), requestAnimationFrame(() => k.current?.focus());
  }, [K]);
  S.useEffect(() => {
    const _ = w.current;
    if (_)
      return _.dataset.eaSearchHost = "true", () => delete _.dataset.eaSearchHost;
  }, []);
  const Q = S.useCallback(
    (_) => {
      Y(), _.kind === "query" ? p?.(_.query) : u?.(_.href);
    },
    [Y, u, p]
  ), X = S.useCallback(
    (_) => {
      if (_.metaKey || _.ctrlKey || _.shiftKey || _.button === 1)
        return;
      const D = _.target.closest("[data-row-index]");
      if (!D)
        return;
      _.preventDefault();
      const I = T[Number(D.dataset.rowIndex)];
      I && Q(I);
    },
    [T, Q]
  ), ie = S.useCallback(
    (_) => {
      $(_), h(-1), c?.(_);
    },
    [c]
  ), ae = S.useCallback(
    (_) => {
      if (_.key === "Escape") {
        _.preventDefault(), f ? Y() : ie("");
        return;
      }
      if (_.key !== "ArrowDown" && _.key !== "ArrowUp" || !T.length)
        return;
      _.preventDefault(), K();
      const D = _.key === "ArrowDown" ? 1 : -1, I = T.length + 1;
      h((M) => {
        const z = (M + 1 + D + I) % I - 1;
        return z >= 0 && document.getElementById(T[z].domId)?.scrollIntoView({ block: "nearest" }), z;
      });
    },
    [f, T, Y, K, ie]
  ), ne = S.useCallback(
    (_) => {
      _.preventDefault();
      const D = T[g];
      if (D) {
        Q(D);
        return;
      }
      Y(), p?.(b);
    },
    [T, g, Q, Y, p, b]
  ), A = S.useCallback(
    (_) => {
      _.currentTarget.contains(_.relatedTarget) || Y();
    },
    [Y]
  ), B = T[g]?.domId;
  return /* @__PURE__ */ x.jsxs(
    "div",
    {
      ref: w,
      className: `ea-header-search${f ? " is-open" : ""}`,
      onBlur: A,
      onKeyDown: ae,
      children: [
        /* @__PURE__ */ x.jsx(
          "button",
          {
            type: "button",
            className: "ea-header-search__trigger",
            "aria-label": t.open,
            "aria-expanded": H,
            onClick: re,
            children: /* @__PURE__ */ x.jsx(Ml, {})
          }
        ),
        /* @__PURE__ */ x.jsxs("form", { className: "ea-header-search__form", onSubmit: ne, children: [
          /* @__PURE__ */ x.jsxs("div", { className: "ea-header-search__field", children: [
            /* @__PURE__ */ x.jsx("span", { className: "ea-header-search__field-icon", "aria-hidden": "true", children: /* @__PURE__ */ x.jsx(Ml, {}) }),
            /* @__PURE__ */ x.jsx(
              "input",
              {
                id: v$,
                ref: k,
                className: "ea-header-search__input",
                type: "search",
                autoComplete: "off",
                role: "combobox",
                "aria-expanded": H,
                "aria-controls": T1,
                "aria-autocomplete": "list",
                "aria-activedescendant": B,
                "aria-label": e,
                placeholder: e,
                value: b,
                onFocus: K,
                onChange: (_) => ie(_.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ x.jsx(
            "button",
            {
              type: "button",
              className: "ea-header-search__close",
              "aria-label": t.close,
              onClick: Y,
              children: /* @__PURE__ */ x.jsx(U8, {})
            }
          )
        ] }),
        H ? /* @__PURE__ */ x.jsxs(
          "div",
          {
            id: T1,
            className: "ea-header-search__panel",
            role: "listbox",
            "aria-label": t.suggestions,
            children: [
              F.map((_, D) => /* @__PURE__ */ x.jsxs("div", { children: [
                D > 0 ? /* @__PURE__ */ x.jsx(Jt, { orientation: "horizontal", emphasis: "subtle" }) : null,
                /* @__PURE__ */ x.jsxs(
                  "section",
                  {
                    className: "ea-header-search__section",
                    role: "group",
                    "aria-label": _.heading,
                    children: [
                      /* @__PURE__ */ x.jsx("p", { className: "ea-header-search__heading", "aria-hidden": "true", children: _.heading }),
                      /* @__PURE__ */ x.jsx(
                        "div",
                        {
                          className: "ea-header-search__list",
                          role: "presentation",
                          onClick: X,
                          children: _.rows.map((I) => /* @__PURE__ */ x.jsx(
                            Ks,
                            {
                              as: "a",
                              href: I.href,
                              id: I.domId,
                              "data-row-index": I.index,
                              className: `ea-header-search__row${I.index === g ? " is-active" : ""}`,
                              role: "option",
                              "aria-selected": I.index === g,
                              size: "x-small",
                              contained: !0,
                              fontWeight: "bold",
                              title: I.title,
                              bodyText: I.subtitle,
                              leadingIcon: I.icon ? /* @__PURE__ */ x.jsx(x$, { name: I.icon }) : void 0,
                              leadingSlot: I.badgeUrl || I.badgeInitial ? /* @__PURE__ */ x.jsx(w$, { row: I }) : void 0,
                              onMouseEnter: () => h(I.index)
                            },
                            I.domId
                          ))
                        }
                      )
                    ]
                  }
                )
              ] }, _.id)),
              a ? /* @__PURE__ */ x.jsx("p", { className: "ea-header-search__status", role: "status", children: t.loading }) : null
            ]
          }
        ) : null
      ]
    }
  );
}
function C$({ heading: e, games: t = [] }) {
  const r = S.useRef(null), [a, i] = S.useState(!0), [s, c] = S.useState(!1), u = S.useCallback(() => {
    const f = r.current;
    f && (i(f.scrollLeft <= 1), c(f.scrollLeft + f.clientWidth >= f.scrollWidth - 1));
  }, []);
  S.useEffect(() => (u(), window.addEventListener("resize", u), () => window.removeEventListener("resize", u)), [t.length, u]);
  const p = (f) => r.current?.scrollBy({ left: f * r.current.clientWidth * 0.82, behavior: "smooth" });
  return t.length ? /* @__PURE__ */ x.jsxs("section", { className: "ea-r-section ea-r-communities", children: [
    /* @__PURE__ */ x.jsxs("header", { className: "ea-r-section__head", children: [
      /* @__PURE__ */ x.jsxs("h2", { className: "ea-r-heading", children: [
        e,
        /* @__PURE__ */ x.jsx(o6, {})
      ] }),
      /* @__PURE__ */ x.jsxs("div", { className: "ea-r-communities__nav", children: [
        /* @__PURE__ */ x.jsx("button", { type: "button", "aria-label": "Previous games", disabled: a, onClick: () => p(-1), children: /* @__PURE__ */ x.jsx(sf, {}) }),
        /* @__PURE__ */ x.jsx("button", { type: "button", "aria-label": "Next games", disabled: s, onClick: () => p(1), children: /* @__PURE__ */ x.jsx(Dy, {}) })
      ] })
    ] }),
    /* @__PURE__ */ x.jsx("div", { className: "ea-r-communities__viewport", ref: r, onScroll: u, children: /* @__PURE__ */ x.jsx("ul", { className: "ea-r-communities__list", children: t.map((f) => /* @__PURE__ */ x.jsx("li", { children: /* @__PURE__ */ x.jsxs("a", { className: "ea-r-game", href: f.link || "#", children: [
      /* @__PURE__ */ x.jsxs("span", { className: "ea-r-game__art", children: [
        f.image ? /* @__PURE__ */ x.jsx("img", { src: f.image, alt: "", loading: "lazy" }) : null,
        f.owned ? /* @__PURE__ */ x.jsx("span", { className: "ea-r-game__owned", children: /* @__PURE__ */ x.jsx(As, { standalone: !0, label: "Owned", size: "small", emphasis: "bold" }) }) : null
      ] }),
      /* @__PURE__ */ x.jsx("span", { className: "ea-r-game__title", children: f.title })
    ] }) }, `${f.title}-${f.link}`)) }) })
  ] }) : null;
}
function Y0({ likes: e, replies: t, views: r }) {
  const a = [
    { icon: /* @__PURE__ */ x.jsx(By, {}), value: e, label: "likes" },
    { icon: /* @__PURE__ */ x.jsx(uf, {}), value: t, label: "replies" },
    { icon: /* @__PURE__ */ x.jsx(Vy, {}), value: r, label: "views" }
  ].filter((i) => typeof i.value == "number");
  return a.length ? /* @__PURE__ */ x.jsx("div", { className: "ea-r-pills", children: a.map((i) => /* @__PURE__ */ x.jsx(aa, { size: "x-small", emphasis: "minimal", leadingContent: i.icon, label: `${i.value.toLocaleString()} ${i.label}` }, i.label)) }) : null;
}
function $$({ topic: e }) {
  return /* @__PURE__ */ x.jsxs("article", { className: "ea-r-recommendation", children: [
    /* @__PURE__ */ x.jsxs("a", { className: "ea-r-recommendation__link", href: e.url, children: [
      /* @__PURE__ */ x.jsx("div", { className: "ea-r-recommendation__media", children: e.image ? /* @__PURE__ */ x.jsx("img", { src: e.image, alt: "", loading: "lazy" }) : null }),
      /* @__PURE__ */ x.jsx("div", { className: "ea-r-recommendation__scrim" }),
      /* @__PURE__ */ x.jsxs("div", { className: "ea-r-recommendation__content", children: [
        e.categoryName ? /* @__PURE__ */ x.jsx("p", { className: "ea-r-recommendation__category", children: e.categoryName }) : null,
        /* @__PURE__ */ x.jsx("h3", { children: e.title }),
        e.author ? /* @__PURE__ */ x.jsx("p", { children: e.author }) : null
      ] })
    ] }),
    /* @__PURE__ */ x.jsx("div", { className: "ea-r-recommendation__stats", children: /* @__PURE__ */ x.jsx(Y0, { likes: e.likes, replies: e.replies, views: e.views }) })
  ] });
}
function E$({ heading: e, seeAllLabel: t, seeAllUrl: r, topics: a = [] }) {
  return /* @__PURE__ */ x.jsxs("section", { className: "ea-r-section ea-r-recommended", children: [
    /* @__PURE__ */ x.jsxs("header", { className: "ea-r-section__head", children: [
      /* @__PURE__ */ x.jsxs("h2", { className: "ea-r-heading", children: [
        e,
        /* @__PURE__ */ x.jsx(R5, {})
      ] }),
      r ? /* @__PURE__ */ x.jsx("a", { className: "ea-r-seeall", href: r, children: t }) : null
    ] }),
    a.length ? /* @__PURE__ */ x.jsx("div", { className: "ea-r-recommended__grid", children: a.slice(0, 5).map((i) => /* @__PURE__ */ x.jsx($$, { topic: i }, i.id)) }) : /* @__PURE__ */ x.jsx("p", { className: "ea-r-status", children: "No recommendations yet." })
  ] });
}
const k$ = {
  home: Hy,
  latest: V8,
  bookmarks: _8,
  profile: of,
  messages: uf
};
function _$({
  quickLinks: e = [],
  games: t = [],
  headings: r = {},
  activePath: a = "",
  onNavigate: i
}) {
  const s = (c) => (u) => {
    u.ctrlKey || u.metaKey || u.shiftKey || u.button === 1 || (u.preventDefault(), i?.(c));
  };
  return /* @__PURE__ */ x.jsxs("nav", { className: "ea-side-nav", "aria-label": r.quickLinks, children: [
    e.length ? /* @__PURE__ */ x.jsx("ul", { className: "ea-side-nav__group", children: e.map((c) => {
      const u = k$[c.key] || Hy, p = a === c.href;
      return /* @__PURE__ */ x.jsx("li", { children: /* @__PURE__ */ x.jsx(
        "a",
        {
          className: `ea-side-nav__item${p ? " is-active" : ""}`,
          href: c.href,
          title: c.label,
          "aria-label": c.label,
          "aria-current": p ? "page" : void 0,
          onClick: s(c.href),
          children: /* @__PURE__ */ x.jsx(u, {})
        }
      ) }, c.key);
    }) }) : null,
    e.length && t.length ? /* @__PURE__ */ x.jsx(Jt, { orientation: "horizontal", emphasis: "subtle" }) : null,
    t.length ? /* @__PURE__ */ x.jsx("ul", { className: "ea-side-nav__group", "aria-label": r.games, children: t.map((c) => {
      const u = a === c.href;
      return /* @__PURE__ */ x.jsx("li", { children: /* @__PURE__ */ x.jsx(
        "a",
        {
          className: `ea-side-nav__game${u ? " is-active" : ""}`,
          href: c.href,
          title: c.title,
          "aria-label": c.title,
          "aria-current": u ? "page" : void 0,
          onClick: s(c.href),
          children: c.image ? /* @__PURE__ */ x.jsx("img", { className: "ea-side-nav__art", src: c.image, alt: "" }) : /* @__PURE__ */ x.jsx("span", { className: "ea-side-nav__art ea-side-nav__art--fallback", children: /* @__PURE__ */ x.jsx(w5, {}) })
        }
      ) }, `${c.title}-${c.href}`);
    }) }) : null
  ] });
}
function N$({ quests: e = [], labels: t }) {
  const [r, a] = S.useState(0);
  if (!e.length)
    return null;
  const i = Math.min(r, e.length - 1), s = e[i], c = () => a((p) => (p - 1 + e.length) % e.length), u = () => a((p) => (p + 1) % e.length);
  return /* @__PURE__ */ x.jsxs("section", { className: "ea-r-quests", children: [
    /* @__PURE__ */ x.jsxs("div", { className: "ea-r-widget-heading", children: [
      /* @__PURE__ */ x.jsx("h3", { children: t.questsHeading }),
      e.length > 1 ? /* @__PURE__ */ x.jsxs("div", { className: "ea-r-quest__nav", children: [
        /* @__PURE__ */ x.jsx("button", { type: "button", "aria-label": t.questsPrevious, onClick: c, children: /* @__PURE__ */ x.jsx(sf, {}) }),
        /* @__PURE__ */ x.jsx("button", { type: "button", "aria-label": t.questsNext, onClick: u, children: /* @__PURE__ */ x.jsx(Dy, {}) })
      ] }) : null
    ] }),
    /* @__PURE__ */ x.jsxs("article", { className: "ea-r-quest", children: [
      s.image ? /* @__PURE__ */ x.jsx("img", { className: "ea-r-quest__art", src: s.image, alt: "", loading: "lazy" }) : null,
      /* @__PURE__ */ x.jsx("div", { className: "ea-r-quest__scrim" }),
      /* @__PURE__ */ x.jsxs("div", { className: "ea-r-quest__content", children: [
        /* @__PURE__ */ x.jsxs("div", { className: "ea-r-quest__body", children: [
          s.icon ? /* @__PURE__ */ x.jsx("img", { className: "ea-r-quest__icon", src: s.icon, alt: "" }) : null,
          /* @__PURE__ */ x.jsxs("div", { children: [
            /* @__PURE__ */ x.jsx("p", { className: "ea-r-quest__title", children: s.title }),
            s.reward ? /* @__PURE__ */ x.jsx("p", { className: "ea-r-quest__reward", children: s.reward }) : null
          ] })
        ] }),
        /* @__PURE__ */ x.jsx(js, { variant: "inverse", size: "large", onClick: () => s.link && (window.location.href = s.link), children: t.questsAccept })
      ] })
    ] }),
    e.length > 1 ? /* @__PURE__ */ x.jsx("div", { className: "ea-r-quest__dots", "aria-hidden": "true", children: e.map((p, f) => /* @__PURE__ */ x.jsx("span", { className: f === i ? "is-active" : "" }, f)) }) : null
  ] });
}
function P$({ heroes: e = [], labels: t }) {
  return e.length ? /* @__PURE__ */ x.jsxs("section", { className: "ea-r-heroes", children: [
    /* @__PURE__ */ x.jsxs("h3", { className: "ea-r-widget-heading", children: [
      /* @__PURE__ */ x.jsx(J5, {}),
      t.heroesHeading
    ] }),
    /* @__PURE__ */ x.jsx("ol", { className: "ea-r-heroes__list", children: e.map((r) => /* @__PURE__ */ x.jsx("li", { children: /* @__PURE__ */ x.jsxs("a", { className: "ea-r-hero", href: r.path, children: [
      /* @__PURE__ */ x.jsx(
        zd,
        {
          size: "medium",
          label: r.displayName,
          imageSrc: r.avatar
        }
      ),
      /* @__PURE__ */ x.jsxs("span", { className: "ea-r-hero__text", children: [
        /* @__PURE__ */ x.jsx("span", { className: "ea-r-hero__name", children: r.displayName }),
        /* @__PURE__ */ x.jsxs("span", { className: "ea-r-hero__count", children: [
          r.count.toLocaleString(),
          " ",
          t.heroesContributions
        ] })
      ] })
    ] }) }, r.id)) })
  ] }) : null;
}
function F$({
  heading: e,
  labels: t = {},
  filters: r = [],
  activeFilter: a,
  onFilterChange: i,
  topics: s = [],
  loading: c,
  error: u,
  quests: p = [],
  heroes: f = []
}) {
  const [v, g] = S.useState("card");
  return /* @__PURE__ */ x.jsxs("section", { className: "ea-r-section ea-r-trending", children: [
    /* @__PURE__ */ x.jsxs("h2", { className: "ea-r-heading", children: [
      e,
      /* @__PURE__ */ x.jsx(Uy, {})
    ] }),
    /* @__PURE__ */ x.jsxs("div", { className: "ea-r-trending__layout", children: [
      /* @__PURE__ */ x.jsxs("div", { className: "ea-r-trending__controls", children: [
        /* @__PURE__ */ x.jsxs("div", { className: "ea-r-trending__filters", children: [
          /* @__PURE__ */ x.jsxs("span", { className: "ea-r-trending__filters-label", children: [
            /* @__PURE__ */ x.jsx(p5, {}),
            t.filters
          ] }),
          r.map((h) => /* @__PURE__ */ x.jsx(
            aa,
            {
              label: h.label,
              size: "medium",
              selected: h.id === a,
              leadingContent: h.id === "trending" ? /* @__PURE__ */ x.jsx(v5, {}) : void 0,
              onClick: () => i?.(h.id)
            },
            h.id
          ))
        ] }),
        /* @__PURE__ */ x.jsx(RC, { value: v, onChange: g, size: "medium", children: /* @__PURE__ */ x.jsxs(U0, { "aria-label": t.viewLabel || "Layout", children: [
          /* @__PURE__ */ x.jsx(
            Ui,
            {
              id: "card",
              leadingIcon: /* @__PURE__ */ x.jsx(Y8, {}),
              children: /* @__PURE__ */ x.jsx("span", { className: "ea-r-segmented-label", children: t.viewCard })
            }
          ),
          /* @__PURE__ */ x.jsx(Ui, { id: "compact", leadingIcon: /* @__PURE__ */ x.jsx(K5, {}), children: /* @__PURE__ */ x.jsx("span", { className: "ea-r-segmented-label", children: t.viewCompact }) })
        ] }) })
      ] }),
      /* @__PURE__ */ x.jsxs("div", { className: "ea-r-trending__threads", children: [
        c && /* @__PURE__ */ x.jsx("p", { className: "ea-r-status", children: t.loading }),
        u && !c && /* @__PURE__ */ x.jsx("p", { className: "ea-r-status ea-r-status--error", children: t.error }),
        !c && !u && !s.length && /* @__PURE__ */ x.jsx("p", { className: "ea-r-status", children: t.empty }),
        !c && !u && s.length > 0 && v === "card" && /* @__PURE__ */ x.jsx("ul", { className: "ea-r-trending__list", children: s.map((h, b) => /* @__PURE__ */ x.jsxs("li", { className: "ea-r-row", children: [
          /* @__PURE__ */ x.jsxs("p", { className: "ea-r-row__eyebrow", children: [
            h.categoryName && /* @__PURE__ */ x.jsx("span", { children: h.categoryName }),
            h.categoryName && /* @__PURE__ */ x.jsx("span", { "aria-hidden": "true", children: "•" }),
            /* @__PURE__ */ x.jsx("span", { children: h.age })
          ] }),
          /* @__PURE__ */ x.jsx("h3", { className: "ea-r-row__title", children: /* @__PURE__ */ x.jsx("a", { href: h.url, children: h.title }) }),
          (h.solved || h.tags?.length > 0) && /* @__PURE__ */ x.jsxs("div", { className: "ea-r-row__badges", children: [
            h.solved && /* @__PURE__ */ x.jsx(
              As,
              {
                standalone: !0,
                label: t.solved,
                status: "positive",
                emphasis: "bold",
                size: "small"
              }
            ),
            h.tags?.map(($) => /* @__PURE__ */ x.jsx(
              aa,
              {
                label: $,
                size: "x-small",
                emphasis: "subtle"
              },
              $
            ))
          ] }),
          b === 0 && h.image && /* @__PURE__ */ x.jsx("a", { className: "ea-r-row__media", href: h.url, tabIndex: -1, "aria-hidden": "true", children: /* @__PURE__ */ x.jsx("img", { src: h.image, alt: "", loading: "lazy" }) }),
          /* @__PURE__ */ x.jsx(
            Y0,
            {
              likes: h.likes,
              replies: h.replies,
              views: h.views
            }
          )
        ] }, h.id)) }),
        !c && !u && s.length > 0 && v === "compact" && /* @__PURE__ */ x.jsxs("table", { className: "ea-r-table", children: [
          /* @__PURE__ */ x.jsx("thead", { children: /* @__PURE__ */ x.jsxs("tr", { children: [
            /* @__PURE__ */ x.jsx("th", { scope: "col", children: t.colTopic }),
            /* @__PURE__ */ x.jsx("th", { scope: "col", children: t.colAuthor }),
            /* @__PURE__ */ x.jsx("th", { scope: "col", children: t.colReplies }),
            /* @__PURE__ */ x.jsx("th", { scope: "col", children: t.colViews }),
            /* @__PURE__ */ x.jsx("th", { scope: "col", children: t.colActivity })
          ] }) }),
          /* @__PURE__ */ x.jsx("tbody", { children: s.map((h) => /* @__PURE__ */ x.jsxs("tr", { children: [
            /* @__PURE__ */ x.jsxs("td", { children: [
              /* @__PURE__ */ x.jsx("a", { href: h.url, children: h.title }),
              h.categoryName && /* @__PURE__ */ x.jsx("span", { className: "ea-r-table__category", children: h.categoryName })
            ] }),
            /* @__PURE__ */ x.jsx("td", { children: h.author }),
            /* @__PURE__ */ x.jsx("td", { children: h.replies?.toLocaleString() }),
            /* @__PURE__ */ x.jsx("td", { children: h.views?.toLocaleString() }),
            /* @__PURE__ */ x.jsx("td", { children: h.age })
          ] }, h.id)) })
        ] })
      ] }),
      /* @__PURE__ */ x.jsxs("aside", { className: "ea-r-trending__widgets", children: [
        /* @__PURE__ */ x.jsx(N$, { quests: p, labels: t }),
        /* @__PURE__ */ x.jsx(P$, { heroes: f, labels: t })
      ] })
    ] })
  ] });
}
function R1({ value: e, label: t }) {
  return typeof e != "number" ? null : /* @__PURE__ */ x.jsxs("span", { children: [
    /* @__PURE__ */ x.jsx("strong", { children: e.toLocaleString() }),
    t
  ] });
}
function T$({ topic: e, labels: t }) {
  return /* @__PURE__ */ x.jsx("article", { className: "ea-apex-featured-card", children: /* @__PURE__ */ x.jsxs("a", { href: e.url, className: "ea-apex-featured-card__link", children: [
    /* @__PURE__ */ x.jsx("span", { className: "ea-apex-featured-card__media", children: e.image ? /* @__PURE__ */ x.jsx("img", { src: e.image, alt: "", loading: "lazy" }) : /* @__PURE__ */ x.jsx("span", { className: "ea-apex-featured-card__placeholder", "aria-hidden": "true", children: e.title?.slice(0, 1) }) }),
    /* @__PURE__ */ x.jsxs("span", { className: "ea-apex-featured-card__body", children: [
      /* @__PURE__ */ x.jsx(As, { standalone: !0, label: t.featured, size: "small", emphasis: "bold" }),
      /* @__PURE__ */ x.jsx("strong", { children: e.title }),
      e.author ? /* @__PURE__ */ x.jsx("small", { children: e.author }) : null,
      /* @__PURE__ */ x.jsxs("span", { className: "ea-apex-featured-card__stats", children: [
        /* @__PURE__ */ x.jsx(aa, { size: "x-small", emphasis: "minimal", leadingContent: /* @__PURE__ */ x.jsx(uf, {}), label: `${e.replies || 0} ${t.replies}` }),
        /* @__PURE__ */ x.jsx(aa, { size: "x-small", emphasis: "minimal", leadingContent: /* @__PURE__ */ x.jsx(Vy, {}), label: `${e.views || 0} ${t.views}` })
      ] })
    ] })
  ] }) });
}
function R$({ place: e }) {
  return /* @__PURE__ */ x.jsx("li", { children: /* @__PURE__ */ x.jsxs("a", { className: "ea-apex-place", href: e.url, children: [
    /* @__PURE__ */ x.jsx("span", { className: "ea-apex-place__icon", style: e.color ? { backgroundColor: e.color } : void 0, children: e.logo ? /* @__PURE__ */ x.jsx("img", { src: e.logo, alt: "" }) : e.name?.slice(0, 1) }),
    /* @__PURE__ */ x.jsxs("span", { className: "ea-apex-place__copy", children: [
      /* @__PURE__ */ x.jsx("strong", { children: e.name }),
      e.description ? /* @__PURE__ */ x.jsx("small", { children: e.description }) : null
    ] }),
    typeof e.topics == "number" ? /* @__PURE__ */ x.jsx("span", { className: "ea-apex-place__count", children: e.topics.toLocaleString() }) : null
  ] }) });
}
function L$({
  title: e,
  eyebrow: t,
  description: r,
  logo: a,
  heroImage: i,
  topicCount: s,
  postCount: c,
  places: u = [],
  featuredTopics: p = [],
  importantLinks: f = [],
  loading: v,
  error: g,
  onSearch: h,
  onCreateTopic: b,
  labels: $ = {}
}) {
  const [w, k] = S.useState(""), T = (F) => {
    F.preventDefault(), w.trim() && h?.(w.trim());
  };
  return /* @__PURE__ */ x.jsxs("section", { className: "ea-apex-hub", children: [
    /* @__PURE__ */ x.jsxs(
      "header",
      {
        className: `ea-apex-hero${i ? " --has-image" : ""}`,
        style: i ? { backgroundImage: `url(${i})` } : void 0,
        children: [
          /* @__PURE__ */ x.jsx("div", { className: "ea-apex-hero__scrim" }),
          /* @__PURE__ */ x.jsxs("div", { className: "ea-apex-hero__content", children: [
            /* @__PURE__ */ x.jsxs("div", { className: "ea-apex-hero__identity", children: [
              a ? /* @__PURE__ */ x.jsx("img", { className: "ea-apex-hero__logo", src: a, alt: "" }) : null,
              /* @__PURE__ */ x.jsxs("div", { children: [
                /* @__PURE__ */ x.jsx("p", { className: "ea-apex-hero__eyebrow", children: t }),
                /* @__PURE__ */ x.jsx("h1", { children: e }),
                r ? /* @__PURE__ */ x.jsx("p", { className: "ea-apex-hero__description", children: r }) : null
              ] })
            ] }),
            /* @__PURE__ */ x.jsxs("div", { className: "ea-apex-hero__footer", children: [
              /* @__PURE__ */ x.jsxs("div", { className: "ea-apex-hero__counts", children: [
                /* @__PURE__ */ x.jsx(R1, { value: s, label: $.topics }),
                /* @__PURE__ */ x.jsx(R1, { value: c, label: $.posts })
              ] }),
              /* @__PURE__ */ x.jsx(js, { variant: "primary", size: "large", onClick: b, children: $.startDiscussion })
            ] }),
            /* @__PURE__ */ x.jsxs("form", { className: "ea-apex-search", onSubmit: T, children: [
              /* @__PURE__ */ x.jsx(Ml, {}),
              /* @__PURE__ */ x.jsx("label", { className: "sr-only", htmlFor: "ea-apex-search", children: $.searchLabel }),
              /* @__PURE__ */ x.jsx("input", { id: "ea-apex-search", type: "search", value: w, onChange: (F) => k(F.target.value), placeholder: $.searchPlaceholder }),
              /* @__PURE__ */ x.jsx("button", { type: "submit", "aria-label": $.searchLabel, children: /* @__PURE__ */ x.jsx(Ml, {}) })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ x.jsxs("div", { className: "ea-apex-hub__content", children: [
      /* @__PURE__ */ x.jsxs("section", { className: "ea-apex-section ea-apex-featured", children: [
        /* @__PURE__ */ x.jsxs("div", { className: "ea-apex-section__heading", children: [
          /* @__PURE__ */ x.jsxs("div", { children: [
            /* @__PURE__ */ x.jsx("p", { children: t }),
            /* @__PURE__ */ x.jsx("h2", { children: $.featured })
          ] }),
          /* @__PURE__ */ x.jsx(By, {})
        ] }),
        v ? /* @__PURE__ */ x.jsx("p", { className: "ea-apex-status", children: $.loading }) : null,
        g ? /* @__PURE__ */ x.jsx("p", { className: "ea-apex-status --error", children: $.error }) : null,
        !v && !g && !p.length ? /* @__PURE__ */ x.jsx("p", { className: "ea-apex-status", children: $.noFeatured }) : null,
        p.length ? /* @__PURE__ */ x.jsx("div", { className: "ea-apex-featured__grid", children: p.map((F) => /* @__PURE__ */ x.jsx(T$, { topic: F, labels: $ }, F.id)) }) : null
      ] }),
      /* @__PURE__ */ x.jsxs("div", { className: "ea-apex-hub__columns", children: [
        /* @__PURE__ */ x.jsxs("section", { className: "ea-apex-section ea-apex-places", children: [
          /* @__PURE__ */ x.jsx("div", { className: "ea-apex-section__heading", children: /* @__PURE__ */ x.jsxs("div", { children: [
            /* @__PURE__ */ x.jsx("p", { children: t }),
            /* @__PURE__ */ x.jsx("h2", { children: $.places })
          ] }) }),
          /* @__PURE__ */ x.jsx("ul", { children: u.map((F) => /* @__PURE__ */ x.jsx(R$, { place: F }, F.id)) })
        ] }),
        f.length ? /* @__PURE__ */ x.jsxs("aside", { className: "ea-apex-section ea-apex-links", children: [
          /* @__PURE__ */ x.jsx("div", { className: "ea-apex-section__heading", children: /* @__PURE__ */ x.jsxs("div", { children: [
            /* @__PURE__ */ x.jsx("p", { children: t }),
            /* @__PURE__ */ x.jsx("h2", { children: $.importantLinks })
          ] }) }),
          /* @__PURE__ */ x.jsx("ul", { children: f.map((F) => /* @__PURE__ */ x.jsx("li", { children: /* @__PURE__ */ x.jsx("a", { href: F.url, children: F.text }) }, `${F.text}-${F.url}`)) })
        ] }) : null
      ] })
    ] })
  ] });
}
const J0 = {
  announcements: p$,
  communities: C$,
  recommended: E$,
  trending: F$,
  "apex-category": L$,
  "header-search": S$,
  breadcrumbs: m$,
  footer: g$,
  "side-nav": _$
}, ps = /* @__PURE__ */ new WeakMap();
function z$(e, t, r = {}) {
  const a = J0[t];
  if (!a)
    throw new Error(`[ea-react] unknown section "${t}"`);
  let i = ps.get(e);
  return i || (i = r2.createRoot(e), ps.set(e, i)), i.render(
    /* @__PURE__ */ x.jsx(CC, { mode: "dark", children: /* @__PURE__ */ x.jsx(a, { ...r }) })
  ), i;
}
function K$(e) {
  const t = ps.get(e);
  t && (t.unmount(), ps.delete(e));
}
const D$ = Object.keys(J0);
export {
  z$ as mountSection,
  D$ as sectionNames,
  K$ as unmountSection
};
