function R1(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var yu = { exports: {} }, Kl = {}, bu = { exports: {} }, Ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qp;
function L1() {
  if (qp) return Ee;
  qp = 1;
  var t = Symbol.for("react.element"), n = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), f = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), v = Symbol.iterator;
  function g(_) {
    return _ === null || typeof _ != "object" ? null : (_ = v && _[v] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var S = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, C = Object.assign, x = {};
  function F(_, V, de) {
    this.props = _, this.context = V, this.refs = x, this.updater = de || S;
  }
  F.prototype.isReactComponent = {}, F.prototype.setState = function(_, V) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, V, "setState");
  }, F.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function W() {
  }
  W.prototype = F.prototype;
  function L(_, V, de) {
    this.props = _, this.context = V, this.refs = x, this.updater = de || S;
  }
  var X = L.prototype = new W();
  X.constructor = L, C(X, F.prototype), X.isPureReactComponent = !0;
  var J = Array.isArray, fe = Object.prototype.hasOwnProperty, ce = { current: null }, ue = { key: !0, ref: !0, __self: !0, __source: !0 };
  function pe(_, V, de) {
    var ae, H = {}, ne = null, be = null;
    if (V != null) for (ae in V.ref !== void 0 && (be = V.ref), V.key !== void 0 && (ne = "" + V.key), V) fe.call(V, ae) && !ue.hasOwnProperty(ae) && (H[ae] = V[ae]);
    var $e = arguments.length - 2;
    if ($e === 1) H.children = de;
    else if (1 < $e) {
      for (var Ae = Array($e), ht = 0; ht < $e; ht++) Ae[ht] = arguments[ht + 2];
      H.children = Ae;
    }
    if (_ && _.defaultProps) for (ae in $e = _.defaultProps, $e) H[ae] === void 0 && (H[ae] = $e[ae]);
    return { $$typeof: t, type: _, key: ne, ref: be, props: H, _owner: ce.current };
  }
  function ge(_, V) {
    return { $$typeof: t, type: _.type, key: V, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function Ce(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === t;
  }
  function ye(_) {
    var V = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(de) {
      return V[de];
    });
  }
  var K = /\/+/g;
  function G(_, V) {
    return typeof _ == "object" && _ !== null && _.key != null ? ye("" + _.key) : V.toString(36);
  }
  function N(_, V, de, ae, H) {
    var ne = typeof _;
    (ne === "undefined" || ne === "boolean") && (_ = null);
    var be = !1;
    if (_ === null) be = !0;
    else switch (ne) {
      case "string":
      case "number":
        be = !0;
        break;
      case "object":
        switch (_.$$typeof) {
          case t:
          case n:
            be = !0;
        }
    }
    if (be) return be = _, H = H(be), _ = ae === "" ? "." + G(be, 0) : ae, J(H) ? (de = "", _ != null && (de = _.replace(K, "$&/") + "/"), N(H, V, de, "", function(ht) {
      return ht;
    })) : H != null && (Ce(H) && (H = ge(H, de + (!H.key || be && be.key === H.key ? "" : ("" + H.key).replace(K, "$&/") + "/") + _)), V.push(H)), 1;
    if (be = 0, ae = ae === "" ? "." : ae + ":", J(_)) for (var $e = 0; $e < _.length; $e++) {
      ne = _[$e];
      var Ae = ae + G(ne, $e);
      be += N(ne, V, de, Ae, H);
    }
    else if (Ae = g(_), typeof Ae == "function") for (_ = Ae.call(_), $e = 0; !(ne = _.next()).done; ) ne = ne.value, Ae = ae + G(ne, $e++), be += N(ne, V, de, Ae, H);
    else if (ne === "object") throw V = String(_), Error("Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead.");
    return be;
  }
  function U(_, V, de) {
    if (_ == null) return _;
    var ae = [], H = 0;
    return N(_, ae, "", "", function(ne) {
      return V.call(de, ne, H++);
    }), ae;
  }
  function M(_) {
    if (_._status === -1) {
      var V = _._result;
      V = V(), V.then(function(de) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = de);
      }, function(de) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = de);
      }), _._status === -1 && (_._status = 0, _._result = V);
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var z = { current: null }, R = { transition: null }, T = { ReactCurrentDispatcher: z, ReactCurrentBatchConfig: R, ReactCurrentOwner: ce };
  function B() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ee.Children = { map: U, forEach: function(_, V, de) {
    U(_, function() {
      V.apply(this, arguments);
    }, de);
  }, count: function(_) {
    var V = 0;
    return U(_, function() {
      V++;
    }), V;
  }, toArray: function(_) {
    return U(_, function(V) {
      return V;
    }) || [];
  }, only: function(_) {
    if (!Ce(_)) throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, Ee.Component = F, Ee.Fragment = l, Ee.Profiler = s, Ee.PureComponent = L, Ee.StrictMode = o, Ee.Suspense = p, Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T, Ee.act = B, Ee.cloneElement = function(_, V, de) {
    if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var ae = C({}, _.props), H = _.key, ne = _.ref, be = _._owner;
    if (V != null) {
      if (V.ref !== void 0 && (ne = V.ref, be = ce.current), V.key !== void 0 && (H = "" + V.key), _.type && _.type.defaultProps) var $e = _.type.defaultProps;
      for (Ae in V) fe.call(V, Ae) && !ue.hasOwnProperty(Ae) && (ae[Ae] = V[Ae] === void 0 && $e !== void 0 ? $e[Ae] : V[Ae]);
    }
    var Ae = arguments.length - 2;
    if (Ae === 1) ae.children = de;
    else if (1 < Ae) {
      $e = Array(Ae);
      for (var ht = 0; ht < Ae; ht++) $e[ht] = arguments[ht + 2];
      ae.children = $e;
    }
    return { $$typeof: t, type: _.type, key: H, ref: ne, props: ae, _owner: be };
  }, Ee.createContext = function(_) {
    return _ = { $$typeof: f, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: u, _context: _ }, _.Consumer = _;
  }, Ee.createElement = pe, Ee.createFactory = function(_) {
    var V = pe.bind(null, _);
    return V.type = _, V;
  }, Ee.createRef = function() {
    return { current: null };
  }, Ee.forwardRef = function(_) {
    return { $$typeof: d, render: _ };
  }, Ee.isValidElement = Ce, Ee.lazy = function(_) {
    return { $$typeof: y, _payload: { _status: -1, _result: _ }, _init: M };
  }, Ee.memo = function(_, V) {
    return { $$typeof: h, type: _, compare: V === void 0 ? null : V };
  }, Ee.startTransition = function(_) {
    var V = R.transition;
    R.transition = {};
    try {
      _();
    } finally {
      R.transition = V;
    }
  }, Ee.unstable_act = B, Ee.useCallback = function(_, V) {
    return z.current.useCallback(_, V);
  }, Ee.useContext = function(_) {
    return z.current.useContext(_);
  }, Ee.useDebugValue = function() {
  }, Ee.useDeferredValue = function(_) {
    return z.current.useDeferredValue(_);
  }, Ee.useEffect = function(_, V) {
    return z.current.useEffect(_, V);
  }, Ee.useId = function() {
    return z.current.useId();
  }, Ee.useImperativeHandle = function(_, V, de) {
    return z.current.useImperativeHandle(_, V, de);
  }, Ee.useInsertionEffect = function(_, V) {
    return z.current.useInsertionEffect(_, V);
  }, Ee.useLayoutEffect = function(_, V) {
    return z.current.useLayoutEffect(_, V);
  }, Ee.useMemo = function(_, V) {
    return z.current.useMemo(_, V);
  }, Ee.useReducer = function(_, V, de) {
    return z.current.useReducer(_, V, de);
  }, Ee.useRef = function(_) {
    return z.current.useRef(_);
  }, Ee.useState = function(_) {
    return z.current.useState(_);
  }, Ee.useSyncExternalStore = function(_, V, de) {
    return z.current.useSyncExternalStore(_, V, de);
  }, Ee.useTransition = function() {
    return z.current.useTransition();
  }, Ee.version = "18.3.1", Ee;
}
var Qp;
function la() {
  return Qp || (Qp = 1, bu.exports = L1()), bu.exports;
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
var Zp;
function I1() {
  if (Zp) return Kl;
  Zp = 1;
  var t = la(), n = Symbol.for("react.element"), l = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(d, p, h) {
    var y, v = {}, g = null, S = null;
    h !== void 0 && (g = "" + h), p.key !== void 0 && (g = "" + p.key), p.ref !== void 0 && (S = p.ref);
    for (y in p) o.call(p, y) && !u.hasOwnProperty(y) && (v[y] = p[y]);
    if (d && d.defaultProps) for (y in p = d.defaultProps, p) v[y] === void 0 && (v[y] = p[y]);
    return { $$typeof: n, type: d, key: g, ref: S, props: v, _owner: s.current };
  }
  return Kl.Fragment = l, Kl.jsx = f, Kl.jsxs = f, Kl;
}
var Xp;
function j1() {
  return Xp || (Xp = 1, yu.exports = I1()), yu.exports;
}
var w = j1(), ko = {}, xu = { exports: {} }, Ct = {}, wu = { exports: {} }, Su = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yp;
function M1() {
  return Yp || (Yp = 1, (function(t) {
    function n(R, T) {
      var B = R.length;
      R.push(T);
      e: for (; 0 < B; ) {
        var _ = B - 1 >>> 1, V = R[_];
        if (0 < s(V, T)) R[_] = T, R[B] = V, B = _;
        else break e;
      }
    }
    function l(R) {
      return R.length === 0 ? null : R[0];
    }
    function o(R) {
      if (R.length === 0) return null;
      var T = R[0], B = R.pop();
      if (B !== T) {
        R[0] = B;
        e: for (var _ = 0, V = R.length, de = V >>> 1; _ < de; ) {
          var ae = 2 * (_ + 1) - 1, H = R[ae], ne = ae + 1, be = R[ne];
          if (0 > s(H, B)) ne < V && 0 > s(be, H) ? (R[_] = be, R[ne] = B, _ = ne) : (R[_] = H, R[ae] = B, _ = ae);
          else if (ne < V && 0 > s(be, B)) R[_] = be, R[ne] = B, _ = ne;
          else break e;
        }
      }
      return T;
    }
    function s(R, T) {
      var B = R.sortIndex - T.sortIndex;
      return B !== 0 ? B : R.id - T.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var u = performance;
      t.unstable_now = function() {
        return u.now();
      };
    } else {
      var f = Date, d = f.now();
      t.unstable_now = function() {
        return f.now() - d;
      };
    }
    var p = [], h = [], y = 1, v = null, g = 3, S = !1, C = !1, x = !1, F = typeof setTimeout == "function" ? setTimeout : null, W = typeof clearTimeout == "function" ? clearTimeout : null, L = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function X(R) {
      for (var T = l(h); T !== null; ) {
        if (T.callback === null) o(h);
        else if (T.startTime <= R) o(h), T.sortIndex = T.expirationTime, n(p, T);
        else break;
        T = l(h);
      }
    }
    function J(R) {
      if (x = !1, X(R), !C) if (l(p) !== null) C = !0, M(fe);
      else {
        var T = l(h);
        T !== null && z(J, T.startTime - R);
      }
    }
    function fe(R, T) {
      C = !1, x && (x = !1, W(pe), pe = -1), S = !0;
      var B = g;
      try {
        for (X(T), v = l(p); v !== null && (!(v.expirationTime > T) || R && !ye()); ) {
          var _ = v.callback;
          if (typeof _ == "function") {
            v.callback = null, g = v.priorityLevel;
            var V = _(v.expirationTime <= T);
            T = t.unstable_now(), typeof V == "function" ? v.callback = V : v === l(p) && o(p), X(T);
          } else o(p);
          v = l(p);
        }
        if (v !== null) var de = !0;
        else {
          var ae = l(h);
          ae !== null && z(J, ae.startTime - T), de = !1;
        }
        return de;
      } finally {
        v = null, g = B, S = !1;
      }
    }
    var ce = !1, ue = null, pe = -1, ge = 5, Ce = -1;
    function ye() {
      return !(t.unstable_now() - Ce < ge);
    }
    function K() {
      if (ue !== null) {
        var R = t.unstable_now();
        Ce = R;
        var T = !0;
        try {
          T = ue(!0, R);
        } finally {
          T ? G() : (ce = !1, ue = null);
        }
      } else ce = !1;
    }
    var G;
    if (typeof L == "function") G = function() {
      L(K);
    };
    else if (typeof MessageChannel < "u") {
      var N = new MessageChannel(), U = N.port2;
      N.port1.onmessage = K, G = function() {
        U.postMessage(null);
      };
    } else G = function() {
      F(K, 0);
    };
    function M(R) {
      ue = R, ce || (ce = !0, G());
    }
    function z(R, T) {
      pe = F(function() {
        R(t.unstable_now());
      }, T);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(R) {
      R.callback = null;
    }, t.unstable_continueExecution = function() {
      C || S || (C = !0, M(fe));
    }, t.unstable_forceFrameRate = function(R) {
      0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ge = 0 < R ? Math.floor(1e3 / R) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return g;
    }, t.unstable_getFirstCallbackNode = function() {
      return l(p);
    }, t.unstable_next = function(R) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = g;
      }
      var B = g;
      g = T;
      try {
        return R();
      } finally {
        g = B;
      }
    }, t.unstable_pauseExecution = function() {
    }, t.unstable_requestPaint = function() {
    }, t.unstable_runWithPriority = function(R, T) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var B = g;
      g = R;
      try {
        return T();
      } finally {
        g = B;
      }
    }, t.unstable_scheduleCallback = function(R, T, B) {
      var _ = t.unstable_now();
      switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? _ + B : _) : B = _, R) {
        case 1:
          var V = -1;
          break;
        case 2:
          V = 250;
          break;
        case 5:
          V = 1073741823;
          break;
        case 4:
          V = 1e4;
          break;
        default:
          V = 5e3;
      }
      return V = B + V, R = { id: y++, callback: T, priorityLevel: R, startTime: B, expirationTime: V, sortIndex: -1 }, B > _ ? (R.sortIndex = B, n(h, R), l(p) === null && R === l(h) && (x ? (W(pe), pe = -1) : x = !0, z(J, B - _))) : (R.sortIndex = V, n(p, R), C || S || (C = !0, M(fe))), R;
    }, t.unstable_shouldYield = ye, t.unstable_wrapCallback = function(R) {
      var T = g;
      return function() {
        var B = g;
        g = T;
        try {
          return R.apply(this, arguments);
        } finally {
          g = B;
        }
      };
    };
  })(Su)), Su;
}
var Jp;
function K1() {
  return Jp || (Jp = 1, wu.exports = M1()), wu.exports;
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
var eh;
function D1() {
  if (eh) return Ct;
  eh = 1;
  var t = la(), n = K1();
  function l(e) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++) r += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + e + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var o = /* @__PURE__ */ new Set(), s = {};
  function u(e, r) {
    f(e, r), f(e + "Capture", r);
  }
  function f(e, r) {
    for (s[e] = r, e = 0; e < r.length; e++) o.add(r[e]);
  }
  var d = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), p = Object.prototype.hasOwnProperty, h = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, y = {}, v = {};
  function g(e) {
    return p.call(v, e) ? !0 : p.call(y, e) ? !1 : h.test(e) ? v[e] = !0 : (y[e] = !0, !1);
  }
  function S(e, r, i, a) {
    if (i !== null && i.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return a ? !1 : i !== null ? !i.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function C(e, r, i, a) {
    if (r === null || typeof r > "u" || S(e, r, i, a)) return !0;
    if (a) return !1;
    if (i !== null) switch (i.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function x(e, r, i, a, c, m, b) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = a, this.attributeNamespace = c, this.mustUseProperty = i, this.propertyName = e, this.type = r, this.sanitizeURL = m, this.removeEmptyString = b;
  }
  var F = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    F[e] = new x(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var r = e[0];
    F[r] = new x(r, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    F[e] = new x(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    F[e] = new x(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    F[e] = new x(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    F[e] = new x(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    F[e] = new x(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    F[e] = new x(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    F[e] = new x(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var W = /[\-:]([a-z])/g;
  function L(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var r = e.replace(
      W,
      L
    );
    F[r] = new x(r, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var r = e.replace(W, L);
    F[r] = new x(r, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var r = e.replace(W, L);
    F[r] = new x(r, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    F[e] = new x(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), F.xlinkHref = new x("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    F[e] = new x(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function X(e, r, i, a) {
    var c = F.hasOwnProperty(r) ? F[r] : null;
    (c !== null ? c.type !== 0 : a || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (C(r, i, c, a) && (i = null), a || c === null ? g(r) && (i === null ? e.removeAttribute(r) : e.setAttribute(r, "" + i)) : c.mustUseProperty ? e[c.propertyName] = i === null ? c.type === 3 ? !1 : "" : i : (r = c.attributeName, a = c.attributeNamespace, i === null ? e.removeAttribute(r) : (c = c.type, i = c === 3 || c === 4 && i === !0 ? "" : "" + i, a ? e.setAttributeNS(a, r, i) : e.setAttribute(r, i))));
  }
  var J = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, fe = Symbol.for("react.element"), ce = Symbol.for("react.portal"), ue = Symbol.for("react.fragment"), pe = Symbol.for("react.strict_mode"), ge = Symbol.for("react.profiler"), Ce = Symbol.for("react.provider"), ye = Symbol.for("react.context"), K = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), z = Symbol.for("react.offscreen"), R = Symbol.iterator;
  function T(e) {
    return e === null || typeof e != "object" ? null : (e = R && e[R] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var B = Object.assign, _;
  function V(e) {
    if (_ === void 0) try {
      throw Error();
    } catch (i) {
      var r = i.stack.trim().match(/\n( *(at )?)/);
      _ = r && r[1] || "";
    }
    return `
` + _ + e;
  }
  var de = !1;
  function ae(e, r) {
    if (!e || de) return "";
    de = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (D) {
          var a = D;
        }
        Reflect.construct(e, [], r);
      } else {
        try {
          r.call();
        } catch (D) {
          a = D;
        }
        e.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (D) {
          a = D;
        }
        e();
      }
    } catch (D) {
      if (D && a && typeof D.stack == "string") {
        for (var c = D.stack.split(`
`), m = a.stack.split(`
`), b = c.length - 1, k = m.length - 1; 1 <= b && 0 <= k && c[b] !== m[k]; ) k--;
        for (; 1 <= b && 0 <= k; b--, k--) if (c[b] !== m[k]) {
          if (b !== 1 || k !== 1)
            do
              if (b--, k--, 0 > k || c[b] !== m[k]) {
                var P = `
` + c[b].replace(" at new ", " at ");
                return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), P;
              }
            while (1 <= b && 0 <= k);
          break;
        }
      }
    } finally {
      de = !1, Error.prepareStackTrace = i;
    }
    return (e = e ? e.displayName || e.name : "") ? V(e) : "";
  }
  function H(e) {
    switch (e.tag) {
      case 5:
        return V(e.type);
      case 16:
        return V("Lazy");
      case 13:
        return V("Suspense");
      case 19:
        return V("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = ae(e.type, !1), e;
      case 11:
        return e = ae(e.type.render, !1), e;
      case 1:
        return e = ae(e.type, !0), e;
      default:
        return "";
    }
  }
  function ne(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ue:
        return "Fragment";
      case ce:
        return "Portal";
      case ge:
        return "Profiler";
      case pe:
        return "StrictMode";
      case G:
        return "Suspense";
      case N:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ye:
        return (e.displayName || "Context") + ".Consumer";
      case Ce:
        return (e._context.displayName || "Context") + ".Provider";
      case K:
        var r = e.render;
        return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case U:
        return r = e.displayName || null, r !== null ? r : ne(e.type) || "Memo";
      case M:
        r = e._payload, e = e._init;
        try {
          return ne(e(r));
        } catch {
        }
    }
    return null;
  }
  function be(e) {
    var r = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = r.render, e = e.displayName || e.name || "", r.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ne(r);
      case 8:
        return r === pe ? "StrictMode" : "Mode";
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
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function $e(e) {
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
    var r = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function ht(e) {
    var r = Ae(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(e.constructor.prototype, r), a = "" + e[r];
    if (!e.hasOwnProperty(r) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var c = i.get, m = i.set;
      return Object.defineProperty(e, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(b) {
        a = "" + b, m.call(this, b);
      } }), Object.defineProperty(e, r, { enumerable: i.enumerable }), { getValue: function() {
        return a;
      }, setValue: function(b) {
        a = "" + b;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[r];
      } };
    }
  }
  function ee(e) {
    e._valueTracker || (e._valueTracker = ht(e));
  }
  function te(e) {
    if (!e) return !1;
    var r = e._valueTracker;
    if (!r) return !0;
    var i = r.getValue(), a = "";
    return e && (a = Ae(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== i ? (r.setValue(e), !0) : !1;
  }
  function Ze(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ue(e, r) {
    var i = r.checked;
    return B({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: i ?? e._wrapperState.initialChecked });
  }
  function Jn(e, r) {
    var i = r.defaultValue == null ? "" : r.defaultValue, a = r.checked != null ? r.checked : r.defaultChecked;
    i = $e(r.value != null ? r.value : i), e._wrapperState = { initialChecked: a, initialValue: i, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function td(e, r) {
    r = r.checked, r != null && X(e, "checked", r, !1);
  }
  function ka(e, r) {
    td(e, r);
    var i = $e(r.value), a = r.type;
    if (i != null) a === "number" ? (i === 0 && e.value === "" || e.value != i) && (e.value = "" + i) : e.value !== "" + i && (e.value = "" + i);
    else if (a === "submit" || a === "reset") {
      e.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? _a(e, r.type, i) : r.hasOwnProperty("defaultValue") && _a(e, r.type, $e(r.defaultValue)), r.checked == null && r.defaultChecked != null && (e.defaultChecked = !!r.defaultChecked);
  }
  function rd(e, r, i) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var a = r.type;
      if (!(a !== "submit" && a !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + e._wrapperState.initialValue, i || r === e.value || (e.value = r), e.defaultValue = r;
    }
    i = e.name, i !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, i !== "" && (e.name = i);
  }
  function _a(e, r, i) {
    (r !== "number" || Ze(e.ownerDocument) !== e) && (i == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + i && (e.defaultValue = "" + i));
  }
  var el = Array.isArray;
  function fn(e, r, i, a) {
    if (e = e.options, r) {
      r = {};
      for (var c = 0; c < i.length; c++) r["$" + i[c]] = !0;
      for (i = 0; i < e.length; i++) c = r.hasOwnProperty("$" + e[i].value), e[i].selected !== c && (e[i].selected = c), c && a && (e[i].defaultSelected = !0);
    } else {
      for (i = "" + $e(i), r = null, c = 0; c < e.length; c++) {
        if (e[c].value === i) {
          e[c].selected = !0, a && (e[c].defaultSelected = !0);
          return;
        }
        r !== null || e[c].disabled || (r = e[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Fa(e, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(l(91));
    return B({}, r, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function nd(e, r) {
    var i = r.value;
    if (i == null) {
      if (i = r.children, r = r.defaultValue, i != null) {
        if (r != null) throw Error(l(92));
        if (el(i)) {
          if (1 < i.length) throw Error(l(93));
          i = i[0];
        }
        r = i;
      }
      r == null && (r = ""), i = r;
    }
    e._wrapperState = { initialValue: $e(i) };
  }
  function ld(e, r) {
    var i = $e(r.value), a = $e(r.defaultValue);
    i != null && (i = "" + i, i !== e.value && (e.value = i), r.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)), a != null && (e.defaultValue = "" + a);
  }
  function id(e) {
    var r = e.textContent;
    r === e._wrapperState.initialValue && r !== "" && r !== null && (e.value = r);
  }
  function od(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Pa(e, r) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? od(r) : e === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var vi, ad = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, i, a, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(r, i, a, c);
      });
    } : e;
  })(function(e, r) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = r;
    else {
      for (vi = vi || document.createElement("div"), vi.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = vi.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; r.firstChild; ) e.appendChild(r.firstChild);
    }
  });
  function tl(e, r) {
    if (r) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = r;
        return;
      }
    }
    e.textContent = r;
  }
  var rl = {
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
  }, Mv = ["Webkit", "ms", "Moz", "O"];
  Object.keys(rl).forEach(function(e) {
    Mv.forEach(function(r) {
      r = r + e.charAt(0).toUpperCase() + e.substring(1), rl[r] = rl[e];
    });
  });
  function sd(e, r, i) {
    return r == null || typeof r == "boolean" || r === "" ? "" : i || typeof r != "number" || r === 0 || rl.hasOwnProperty(e) && rl[e] ? ("" + r).trim() : r + "px";
  }
  function ud(e, r) {
    e = e.style;
    for (var i in r) if (r.hasOwnProperty(i)) {
      var a = i.indexOf("--") === 0, c = sd(i, r[i], a);
      i === "float" && (i = "cssFloat"), a ? e.setProperty(i, c) : e[i] = c;
    }
  }
  var Kv = B({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Na(e, r) {
    if (r) {
      if (Kv[e] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(l(137, e));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(l(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(l(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(l(62));
    }
  }
  function Ta(e, r) {
    if (e.indexOf("-") === -1) return typeof r.is == "string";
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
  var Aa = null;
  function za(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ra = null, pn = null, hn = null;
  function cd(e) {
    if (e = El(e)) {
      if (typeof Ra != "function") throw Error(l(280));
      var r = e.stateNode;
      r && (r = Di(r), Ra(e.stateNode, e.type, r));
    }
  }
  function dd(e) {
    pn ? hn ? hn.push(e) : hn = [e] : pn = e;
  }
  function fd() {
    if (pn) {
      var e = pn, r = hn;
      if (hn = pn = null, cd(e), r) for (e = 0; e < r.length; e++) cd(r[e]);
    }
  }
  function pd(e, r) {
    return e(r);
  }
  function hd() {
  }
  var La = !1;
  function md(e, r, i) {
    if (La) return e(r, i);
    La = !0;
    try {
      return pd(e, r, i);
    } finally {
      La = !1, (pn !== null || hn !== null) && (hd(), fd());
    }
  }
  function nl(e, r) {
    var i = e.stateNode;
    if (i === null) return null;
    var a = Di(i);
    if (a === null) return null;
    i = a[r];
    e: switch (r) {
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
    if (i && typeof i != "function") throw Error(l(231, r, typeof i));
    return i;
  }
  var Ia = !1;
  if (d) try {
    var ll = {};
    Object.defineProperty(ll, "passive", { get: function() {
      Ia = !0;
    } }), window.addEventListener("test", ll, ll), window.removeEventListener("test", ll, ll);
  } catch {
    Ia = !1;
  }
  function Dv(e, r, i, a, c, m, b, k, P) {
    var D = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(i, D);
    } catch (Q) {
      this.onError(Q);
    }
  }
  var il = !1, yi = null, bi = !1, ja = null, Ov = { onError: function(e) {
    il = !0, yi = e;
  } };
  function Vv(e, r, i, a, c, m, b, k, P) {
    il = !1, yi = null, Dv.apply(Ov, arguments);
  }
  function Bv(e, r, i, a, c, m, b, k, P) {
    if (Vv.apply(this, arguments), il) {
      if (il) {
        var D = yi;
        il = !1, yi = null;
      } else throw Error(l(198));
      bi || (bi = !0, ja = D);
    }
  }
  function Wr(e) {
    var r = e, i = e;
    if (e.alternate) for (; r.return; ) r = r.return;
    else {
      e = r;
      do
        r = e, (r.flags & 4098) !== 0 && (i = r.return), e = r.return;
      while (e);
    }
    return r.tag === 3 ? i : null;
  }
  function gd(e) {
    if (e.tag === 13) {
      var r = e.memoizedState;
      if (r === null && (e = e.alternate, e !== null && (r = e.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function vd(e) {
    if (Wr(e) !== e) throw Error(l(188));
  }
  function Hv(e) {
    var r = e.alternate;
    if (!r) {
      if (r = Wr(e), r === null) throw Error(l(188));
      return r !== e ? null : e;
    }
    for (var i = e, a = r; ; ) {
      var c = i.return;
      if (c === null) break;
      var m = c.alternate;
      if (m === null) {
        if (a = c.return, a !== null) {
          i = a;
          continue;
        }
        break;
      }
      if (c.child === m.child) {
        for (m = c.child; m; ) {
          if (m === i) return vd(c), e;
          if (m === a) return vd(c), r;
          m = m.sibling;
        }
        throw Error(l(188));
      }
      if (i.return !== a.return) i = c, a = m;
      else {
        for (var b = !1, k = c.child; k; ) {
          if (k === i) {
            b = !0, i = c, a = m;
            break;
          }
          if (k === a) {
            b = !0, a = c, i = m;
            break;
          }
          k = k.sibling;
        }
        if (!b) {
          for (k = m.child; k; ) {
            if (k === i) {
              b = !0, i = m, a = c;
              break;
            }
            if (k === a) {
              b = !0, a = m, i = c;
              break;
            }
            k = k.sibling;
          }
          if (!b) throw Error(l(189));
        }
      }
      if (i.alternate !== a) throw Error(l(190));
    }
    if (i.tag !== 3) throw Error(l(188));
    return i.stateNode.current === i ? e : r;
  }
  function yd(e) {
    return e = Hv(e), e !== null ? bd(e) : null;
  }
  function bd(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var r = bd(e);
      if (r !== null) return r;
      e = e.sibling;
    }
    return null;
  }
  var xd = n.unstable_scheduleCallback, wd = n.unstable_cancelCallback, Uv = n.unstable_shouldYield, Wv = n.unstable_requestPaint, Ge = n.unstable_now, Gv = n.unstable_getCurrentPriorityLevel, Ma = n.unstable_ImmediatePriority, Sd = n.unstable_UserBlockingPriority, xi = n.unstable_NormalPriority, qv = n.unstable_LowPriority, Cd = n.unstable_IdlePriority, wi = null, Xt = null;
  function Qv(e) {
    if (Xt && typeof Xt.onCommitFiberRoot == "function") try {
      Xt.onCommitFiberRoot(wi, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Dt = Math.clz32 ? Math.clz32 : Yv, Zv = Math.log, Xv = Math.LN2;
  function Yv(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Zv(e) / Xv | 0) | 0;
  }
  var Si = 64, Ci = 4194304;
  function ol(e) {
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
  function Ei(e, r) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var a = 0, c = e.suspendedLanes, m = e.pingedLanes, b = i & 268435455;
    if (b !== 0) {
      var k = b & ~c;
      k !== 0 ? a = ol(k) : (m &= b, m !== 0 && (a = ol(m)));
    } else b = i & ~c, b !== 0 ? a = ol(b) : m !== 0 && (a = ol(m));
    if (a === 0) return 0;
    if (r !== 0 && r !== a && (r & c) === 0 && (c = a & -a, m = r & -r, c >= m || c === 16 && (m & 4194240) !== 0)) return r;
    if ((a & 4) !== 0 && (a |= i & 16), r = e.entangledLanes, r !== 0) for (e = e.entanglements, r &= a; 0 < r; ) i = 31 - Dt(r), c = 1 << i, a |= e[i], r &= ~c;
    return a;
  }
  function Jv(e, r) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return r + 250;
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
        return r + 5e3;
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
  function ey(e, r) {
    for (var i = e.suspendedLanes, a = e.pingedLanes, c = e.expirationTimes, m = e.pendingLanes; 0 < m; ) {
      var b = 31 - Dt(m), k = 1 << b, P = c[b];
      P === -1 ? ((k & i) === 0 || (k & a) !== 0) && (c[b] = Jv(k, r)) : P <= r && (e.expiredLanes |= k), m &= ~k;
    }
  }
  function Ka(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Ed() {
    var e = Si;
    return Si <<= 1, (Si & 4194240) === 0 && (Si = 64), e;
  }
  function Da(e) {
    for (var r = [], i = 0; 31 > i; i++) r.push(e);
    return r;
  }
  function al(e, r, i) {
    e.pendingLanes |= r, r !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, r = 31 - Dt(r), e[r] = i;
  }
  function ty(e, r) {
    var i = e.pendingLanes & ~r;
    e.pendingLanes = r, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= r, e.mutableReadLanes &= r, e.entangledLanes &= r, r = e.entanglements;
    var a = e.eventTimes;
    for (e = e.expirationTimes; 0 < i; ) {
      var c = 31 - Dt(i), m = 1 << c;
      r[c] = 0, a[c] = -1, e[c] = -1, i &= ~m;
    }
  }
  function Oa(e, r) {
    var i = e.entangledLanes |= r;
    for (e = e.entanglements; i; ) {
      var a = 31 - Dt(i), c = 1 << a;
      c & r | e[a] & r && (e[a] |= r), i &= ~c;
    }
  }
  var Pe = 0;
  function $d(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var kd, Va, _d, Fd, Pd, Ba = !1, $i = [], br = null, xr = null, wr = null, sl = /* @__PURE__ */ new Map(), ul = /* @__PURE__ */ new Map(), Sr = [], ry = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Nd(e, r) {
    switch (e) {
      case "focusin":
      case "focusout":
        br = null;
        break;
      case "dragenter":
      case "dragleave":
        xr = null;
        break;
      case "mouseover":
      case "mouseout":
        wr = null;
        break;
      case "pointerover":
      case "pointerout":
        sl.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ul.delete(r.pointerId);
    }
  }
  function cl(e, r, i, a, c, m) {
    return e === null || e.nativeEvent !== m ? (e = { blockedOn: r, domEventName: i, eventSystemFlags: a, nativeEvent: m, targetContainers: [c] }, r !== null && (r = El(r), r !== null && Va(r)), e) : (e.eventSystemFlags |= a, r = e.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), e);
  }
  function ny(e, r, i, a, c) {
    switch (r) {
      case "focusin":
        return br = cl(br, e, r, i, a, c), !0;
      case "dragenter":
        return xr = cl(xr, e, r, i, a, c), !0;
      case "mouseover":
        return wr = cl(wr, e, r, i, a, c), !0;
      case "pointerover":
        var m = c.pointerId;
        return sl.set(m, cl(sl.get(m) || null, e, r, i, a, c)), !0;
      case "gotpointercapture":
        return m = c.pointerId, ul.set(m, cl(ul.get(m) || null, e, r, i, a, c)), !0;
    }
    return !1;
  }
  function Td(e) {
    var r = Gr(e.target);
    if (r !== null) {
      var i = Wr(r);
      if (i !== null) {
        if (r = i.tag, r === 13) {
          if (r = gd(i), r !== null) {
            e.blockedOn = r, Pd(e.priority, function() {
              _d(i);
            });
            return;
          }
        } else if (r === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ki(e) {
    if (e.blockedOn !== null) return !1;
    for (var r = e.targetContainers; 0 < r.length; ) {
      var i = Ua(e.domEventName, e.eventSystemFlags, r[0], e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var a = new i.constructor(i.type, i);
        Aa = a, i.target.dispatchEvent(a), Aa = null;
      } else return r = El(i), r !== null && Va(r), e.blockedOn = i, !1;
      r.shift();
    }
    return !0;
  }
  function Ad(e, r, i) {
    ki(e) && i.delete(r);
  }
  function ly() {
    Ba = !1, br !== null && ki(br) && (br = null), xr !== null && ki(xr) && (xr = null), wr !== null && ki(wr) && (wr = null), sl.forEach(Ad), ul.forEach(Ad);
  }
  function dl(e, r) {
    e.blockedOn === r && (e.blockedOn = null, Ba || (Ba = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, ly)));
  }
  function fl(e) {
    function r(c) {
      return dl(c, e);
    }
    if (0 < $i.length) {
      dl($i[0], e);
      for (var i = 1; i < $i.length; i++) {
        var a = $i[i];
        a.blockedOn === e && (a.blockedOn = null);
      }
    }
    for (br !== null && dl(br, e), xr !== null && dl(xr, e), wr !== null && dl(wr, e), sl.forEach(r), ul.forEach(r), i = 0; i < Sr.length; i++) a = Sr[i], a.blockedOn === e && (a.blockedOn = null);
    for (; 0 < Sr.length && (i = Sr[0], i.blockedOn === null); ) Td(i), i.blockedOn === null && Sr.shift();
  }
  var mn = J.ReactCurrentBatchConfig, _i = !0;
  function iy(e, r, i, a) {
    var c = Pe, m = mn.transition;
    mn.transition = null;
    try {
      Pe = 1, Ha(e, r, i, a);
    } finally {
      Pe = c, mn.transition = m;
    }
  }
  function oy(e, r, i, a) {
    var c = Pe, m = mn.transition;
    mn.transition = null;
    try {
      Pe = 4, Ha(e, r, i, a);
    } finally {
      Pe = c, mn.transition = m;
    }
  }
  function Ha(e, r, i, a) {
    if (_i) {
      var c = Ua(e, r, i, a);
      if (c === null) ss(e, r, a, Fi, i), Nd(e, a);
      else if (ny(c, e, r, i, a)) a.stopPropagation();
      else if (Nd(e, a), r & 4 && -1 < ry.indexOf(e)) {
        for (; c !== null; ) {
          var m = El(c);
          if (m !== null && kd(m), m = Ua(e, r, i, a), m === null && ss(e, r, a, Fi, i), m === c) break;
          c = m;
        }
        c !== null && a.stopPropagation();
      } else ss(e, r, a, null, i);
    }
  }
  var Fi = null;
  function Ua(e, r, i, a) {
    if (Fi = null, e = za(a), e = Gr(e), e !== null) if (r = Wr(e), r === null) e = null;
    else if (i = r.tag, i === 13) {
      if (e = gd(r), e !== null) return e;
      e = null;
    } else if (i === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      e = null;
    } else r !== e && (e = null);
    return Fi = e, null;
  }
  function zd(e) {
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
        switch (Gv()) {
          case Ma:
            return 1;
          case Sd:
            return 4;
          case xi:
          case qv:
            return 16;
          case Cd:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Cr = null, Wa = null, Pi = null;
  function Rd() {
    if (Pi) return Pi;
    var e, r = Wa, i = r.length, a, c = "value" in Cr ? Cr.value : Cr.textContent, m = c.length;
    for (e = 0; e < i && r[e] === c[e]; e++) ;
    var b = i - e;
    for (a = 1; a <= b && r[i - a] === c[m - a]; a++) ;
    return Pi = c.slice(e, 1 < a ? 1 - a : void 0);
  }
  function Ni(e) {
    var r = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && r === 13 && (e = 13)) : e = r, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ti() {
    return !0;
  }
  function Ld() {
    return !1;
  }
  function _t(e) {
    function r(i, a, c, m, b) {
      this._reactName = i, this._targetInst = c, this.type = a, this.nativeEvent = m, this.target = b, this.currentTarget = null;
      for (var k in e) e.hasOwnProperty(k) && (i = e[k], this[k] = i ? i(m) : m[k]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? Ti : Ld, this.isPropagationStopped = Ld, this;
    }
    return B(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var i = this.nativeEvent;
      i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = Ti);
    }, stopPropagation: function() {
      var i = this.nativeEvent;
      i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = Ti);
    }, persist: function() {
    }, isPersistent: Ti }), r;
  }
  var gn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ga = _t(gn), pl = B({}, gn, { view: 0, detail: 0 }), ay = _t(pl), qa, Qa, hl, Ai = B({}, pl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Xa, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== hl && (hl && e.type === "mousemove" ? (qa = e.screenX - hl.screenX, Qa = e.screenY - hl.screenY) : Qa = qa = 0, hl = e), qa);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Qa;
  } }), Id = _t(Ai), sy = B({}, Ai, { dataTransfer: 0 }), uy = _t(sy), cy = B({}, pl, { relatedTarget: 0 }), Za = _t(cy), dy = B({}, gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), fy = _t(dy), py = B({}, gn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), hy = _t(py), my = B({}, gn, { data: 0 }), jd = _t(my), gy = {
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
  }, vy = {
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
  }, yy = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function by(e) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(e) : (e = yy[e]) ? !!r[e] : !1;
  }
  function Xa() {
    return by;
  }
  var xy = B({}, pl, { key: function(e) {
    if (e.key) {
      var r = gy[e.key] || e.key;
      if (r !== "Unidentified") return r;
    }
    return e.type === "keypress" ? (e = Ni(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? vy[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Xa, charCode: function(e) {
    return e.type === "keypress" ? Ni(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ni(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), wy = _t(xy), Sy = B({}, Ai, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Md = _t(Sy), Cy = B({}, pl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Xa }), Ey = _t(Cy), $y = B({}, gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ky = _t($y), _y = B({}, Ai, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Fy = _t(_y), Py = [9, 13, 27, 32], Ya = d && "CompositionEvent" in window, ml = null;
  d && "documentMode" in document && (ml = document.documentMode);
  var Ny = d && "TextEvent" in window && !ml, Kd = d && (!Ya || ml && 8 < ml && 11 >= ml), Dd = " ", Od = !1;
  function Vd(e, r) {
    switch (e) {
      case "keyup":
        return Py.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Bd(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var vn = !1;
  function Ty(e, r) {
    switch (e) {
      case "compositionend":
        return Bd(r);
      case "keypress":
        return r.which !== 32 ? null : (Od = !0, Dd);
      case "textInput":
        return e = r.data, e === Dd && Od ? null : e;
      default:
        return null;
    }
  }
  function Ay(e, r) {
    if (vn) return e === "compositionend" || !Ya && Vd(e, r) ? (e = Rd(), Pi = Wa = Cr = null, vn = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Kd && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var zy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Hd(e) {
    var r = e && e.nodeName && e.nodeName.toLowerCase();
    return r === "input" ? !!zy[e.type] : r === "textarea";
  }
  function Ud(e, r, i, a) {
    dd(a), r = ji(r, "onChange"), 0 < r.length && (i = new Ga("onChange", "change", null, i, a), e.push({ event: i, listeners: r }));
  }
  var gl = null, vl = null;
  function Ry(e) {
    cf(e, 0);
  }
  function zi(e) {
    var r = Sn(e);
    if (te(r)) return e;
  }
  function Ly(e, r) {
    if (e === "change") return r;
  }
  var Wd = !1;
  if (d) {
    var Ja;
    if (d) {
      var es = "oninput" in document;
      if (!es) {
        var Gd = document.createElement("div");
        Gd.setAttribute("oninput", "return;"), es = typeof Gd.oninput == "function";
      }
      Ja = es;
    } else Ja = !1;
    Wd = Ja && (!document.documentMode || 9 < document.documentMode);
  }
  function qd() {
    gl && (gl.detachEvent("onpropertychange", Qd), vl = gl = null);
  }
  function Qd(e) {
    if (e.propertyName === "value" && zi(vl)) {
      var r = [];
      Ud(r, vl, e, za(e)), md(Ry, r);
    }
  }
  function Iy(e, r, i) {
    e === "focusin" ? (qd(), gl = r, vl = i, gl.attachEvent("onpropertychange", Qd)) : e === "focusout" && qd();
  }
  function jy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return zi(vl);
  }
  function My(e, r) {
    if (e === "click") return zi(r);
  }
  function Ky(e, r) {
    if (e === "input" || e === "change") return zi(r);
  }
  function Dy(e, r) {
    return e === r && (e !== 0 || 1 / e === 1 / r) || e !== e && r !== r;
  }
  var Ot = typeof Object.is == "function" ? Object.is : Dy;
  function yl(e, r) {
    if (Ot(e, r)) return !0;
    if (typeof e != "object" || e === null || typeof r != "object" || r === null) return !1;
    var i = Object.keys(e), a = Object.keys(r);
    if (i.length !== a.length) return !1;
    for (a = 0; a < i.length; a++) {
      var c = i[a];
      if (!p.call(r, c) || !Ot(e[c], r[c])) return !1;
    }
    return !0;
  }
  function Zd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Xd(e, r) {
    var i = Zd(e);
    e = 0;
    for (var a; i; ) {
      if (i.nodeType === 3) {
        if (a = e + i.textContent.length, e <= r && a >= r) return { node: i, offset: r - e };
        e = a;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = Zd(i);
    }
  }
  function Yd(e, r) {
    return e && r ? e === r ? !0 : e && e.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Yd(e, r.parentNode) : "contains" in e ? e.contains(r) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Jd() {
    for (var e = window, r = Ze(); r instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof r.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = r.contentWindow;
      else break;
      r = Ze(e.document);
    }
    return r;
  }
  function ts(e) {
    var r = e && e.nodeName && e.nodeName.toLowerCase();
    return r && (r === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || r === "textarea" || e.contentEditable === "true");
  }
  function Oy(e) {
    var r = Jd(), i = e.focusedElem, a = e.selectionRange;
    if (r !== i && i && i.ownerDocument && Yd(i.ownerDocument.documentElement, i)) {
      if (a !== null && ts(i)) {
        if (r = a.start, e = a.end, e === void 0 && (e = r), "selectionStart" in i) i.selectionStart = r, i.selectionEnd = Math.min(e, i.value.length);
        else if (e = (r = i.ownerDocument || document) && r.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var c = i.textContent.length, m = Math.min(a.start, c);
          a = a.end === void 0 ? m : Math.min(a.end, c), !e.extend && m > a && (c = a, a = m, m = c), c = Xd(i, m);
          var b = Xd(
            i,
            a
          );
          c && b && (e.rangeCount !== 1 || e.anchorNode !== c.node || e.anchorOffset !== c.offset || e.focusNode !== b.node || e.focusOffset !== b.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), e.removeAllRanges(), m > a ? (e.addRange(r), e.extend(b.node, b.offset)) : (r.setEnd(b.node, b.offset), e.addRange(r)));
        }
      }
      for (r = [], e = i; e = e.parentNode; ) e.nodeType === 1 && r.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof i.focus == "function" && i.focus(), i = 0; i < r.length; i++) e = r[i], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Vy = d && "documentMode" in document && 11 >= document.documentMode, yn = null, rs = null, bl = null, ns = !1;
  function ef(e, r, i) {
    var a = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    ns || yn == null || yn !== Ze(a) || (a = yn, "selectionStart" in a && ts(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), bl && yl(bl, a) || (bl = a, a = ji(rs, "onSelect"), 0 < a.length && (r = new Ga("onSelect", "select", null, r, i), e.push({ event: r, listeners: a }), r.target = yn)));
  }
  function Ri(e, r) {
    var i = {};
    return i[e.toLowerCase()] = r.toLowerCase(), i["Webkit" + e] = "webkit" + r, i["Moz" + e] = "moz" + r, i;
  }
  var bn = { animationend: Ri("Animation", "AnimationEnd"), animationiteration: Ri("Animation", "AnimationIteration"), animationstart: Ri("Animation", "AnimationStart"), transitionend: Ri("Transition", "TransitionEnd") }, ls = {}, tf = {};
  d && (tf = document.createElement("div").style, "AnimationEvent" in window || (delete bn.animationend.animation, delete bn.animationiteration.animation, delete bn.animationstart.animation), "TransitionEvent" in window || delete bn.transitionend.transition);
  function Li(e) {
    if (ls[e]) return ls[e];
    if (!bn[e]) return e;
    var r = bn[e], i;
    for (i in r) if (r.hasOwnProperty(i) && i in tf) return ls[e] = r[i];
    return e;
  }
  var rf = Li("animationend"), nf = Li("animationiteration"), lf = Li("animationstart"), of = Li("transitionend"), af = /* @__PURE__ */ new Map(), sf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Er(e, r) {
    af.set(e, r), u(r, [e]);
  }
  for (var is = 0; is < sf.length; is++) {
    var os = sf[is], By = os.toLowerCase(), Hy = os[0].toUpperCase() + os.slice(1);
    Er(By, "on" + Hy);
  }
  Er(rf, "onAnimationEnd"), Er(nf, "onAnimationIteration"), Er(lf, "onAnimationStart"), Er("dblclick", "onDoubleClick"), Er("focusin", "onFocus"), Er("focusout", "onBlur"), Er(of, "onTransitionEnd"), f("onMouseEnter", ["mouseout", "mouseover"]), f("onMouseLeave", ["mouseout", "mouseover"]), f("onPointerEnter", ["pointerout", "pointerover"]), f("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var xl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Uy = new Set("cancel close invalid load scroll toggle".split(" ").concat(xl));
  function uf(e, r, i) {
    var a = e.type || "unknown-event";
    e.currentTarget = i, Bv(a, r, void 0, e), e.currentTarget = null;
  }
  function cf(e, r) {
    r = (r & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var a = e[i], c = a.event;
      a = a.listeners;
      e: {
        var m = void 0;
        if (r) for (var b = a.length - 1; 0 <= b; b--) {
          var k = a[b], P = k.instance, D = k.currentTarget;
          if (k = k.listener, P !== m && c.isPropagationStopped()) break e;
          uf(c, k, D), m = P;
        }
        else for (b = 0; b < a.length; b++) {
          if (k = a[b], P = k.instance, D = k.currentTarget, k = k.listener, P !== m && c.isPropagationStopped()) break e;
          uf(c, k, D), m = P;
        }
      }
    }
    if (bi) throw e = ja, bi = !1, ja = null, e;
  }
  function Le(e, r) {
    var i = r[hs];
    i === void 0 && (i = r[hs] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    i.has(a) || (df(r, e, 2, !1), i.add(a));
  }
  function as(e, r, i) {
    var a = 0;
    r && (a |= 4), df(i, e, a, r);
  }
  var Ii = "_reactListening" + Math.random().toString(36).slice(2);
  function wl(e) {
    if (!e[Ii]) {
      e[Ii] = !0, o.forEach(function(i) {
        i !== "selectionchange" && (Uy.has(i) || as(i, !1, e), as(i, !0, e));
      });
      var r = e.nodeType === 9 ? e : e.ownerDocument;
      r === null || r[Ii] || (r[Ii] = !0, as("selectionchange", !1, r));
    }
  }
  function df(e, r, i, a) {
    switch (zd(r)) {
      case 1:
        var c = iy;
        break;
      case 4:
        c = oy;
        break;
      default:
        c = Ha;
    }
    i = c.bind(null, r, i, e), c = void 0, !Ia || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), a ? c !== void 0 ? e.addEventListener(r, i, { capture: !0, passive: c }) : e.addEventListener(r, i, !0) : c !== void 0 ? e.addEventListener(r, i, { passive: c }) : e.addEventListener(r, i, !1);
  }
  function ss(e, r, i, a, c) {
    var m = a;
    if ((r & 1) === 0 && (r & 2) === 0 && a !== null) e: for (; ; ) {
      if (a === null) return;
      var b = a.tag;
      if (b === 3 || b === 4) {
        var k = a.stateNode.containerInfo;
        if (k === c || k.nodeType === 8 && k.parentNode === c) break;
        if (b === 4) for (b = a.return; b !== null; ) {
          var P = b.tag;
          if ((P === 3 || P === 4) && (P = b.stateNode.containerInfo, P === c || P.nodeType === 8 && P.parentNode === c)) return;
          b = b.return;
        }
        for (; k !== null; ) {
          if (b = Gr(k), b === null) return;
          if (P = b.tag, P === 5 || P === 6) {
            a = m = b;
            continue e;
          }
          k = k.parentNode;
        }
      }
      a = a.return;
    }
    md(function() {
      var D = m, Q = za(i), Z = [];
      e: {
        var q = af.get(e);
        if (q !== void 0) {
          var re = Ga, ie = e;
          switch (e) {
            case "keypress":
              if (Ni(i) === 0) break e;
            case "keydown":
            case "keyup":
              re = wy;
              break;
            case "focusin":
              ie = "focus", re = Za;
              break;
            case "focusout":
              ie = "blur", re = Za;
              break;
            case "beforeblur":
            case "afterblur":
              re = Za;
              break;
            case "click":
              if (i.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              re = Id;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              re = uy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              re = Ey;
              break;
            case rf:
            case nf:
            case lf:
              re = fy;
              break;
            case of:
              re = ky;
              break;
            case "scroll":
              re = ay;
              break;
            case "wheel":
              re = Fy;
              break;
            case "copy":
            case "cut":
            case "paste":
              re = hy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              re = Md;
          }
          var oe = (r & 4) !== 0, qe = !oe && e === "scroll", I = oe ? q !== null ? q + "Capture" : null : q;
          oe = [];
          for (var A = D, j; A !== null; ) {
            j = A;
            var Y = j.stateNode;
            if (j.tag === 5 && Y !== null && (j = Y, I !== null && (Y = nl(A, I), Y != null && oe.push(Sl(A, Y, j)))), qe) break;
            A = A.return;
          }
          0 < oe.length && (q = new re(q, ie, null, i, Q), Z.push({ event: q, listeners: oe }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (q = e === "mouseover" || e === "pointerover", re = e === "mouseout" || e === "pointerout", q && i !== Aa && (ie = i.relatedTarget || i.fromElement) && (Gr(ie) || ie[nr])) break e;
          if ((re || q) && (q = Q.window === Q ? Q : (q = Q.ownerDocument) ? q.defaultView || q.parentWindow : window, re ? (ie = i.relatedTarget || i.toElement, re = D, ie = ie ? Gr(ie) : null, ie !== null && (qe = Wr(ie), ie !== qe || ie.tag !== 5 && ie.tag !== 6) && (ie = null)) : (re = null, ie = D), re !== ie)) {
            if (oe = Id, Y = "onMouseLeave", I = "onMouseEnter", A = "mouse", (e === "pointerout" || e === "pointerover") && (oe = Md, Y = "onPointerLeave", I = "onPointerEnter", A = "pointer"), qe = re == null ? q : Sn(re), j = ie == null ? q : Sn(ie), q = new oe(Y, A + "leave", re, i, Q), q.target = qe, q.relatedTarget = j, Y = null, Gr(Q) === D && (oe = new oe(I, A + "enter", ie, i, Q), oe.target = j, oe.relatedTarget = qe, Y = oe), qe = Y, re && ie) t: {
              for (oe = re, I = ie, A = 0, j = oe; j; j = xn(j)) A++;
              for (j = 0, Y = I; Y; Y = xn(Y)) j++;
              for (; 0 < A - j; ) oe = xn(oe), A--;
              for (; 0 < j - A; ) I = xn(I), j--;
              for (; A--; ) {
                if (oe === I || I !== null && oe === I.alternate) break t;
                oe = xn(oe), I = xn(I);
              }
              oe = null;
            }
            else oe = null;
            re !== null && ff(Z, q, re, oe, !1), ie !== null && qe !== null && ff(Z, qe, ie, oe, !0);
          }
        }
        e: {
          if (q = D ? Sn(D) : window, re = q.nodeName && q.nodeName.toLowerCase(), re === "select" || re === "input" && q.type === "file") var se = Ly;
          else if (Hd(q)) if (Wd) se = Ky;
          else {
            se = jy;
            var he = Iy;
          }
          else (re = q.nodeName) && re.toLowerCase() === "input" && (q.type === "checkbox" || q.type === "radio") && (se = My);
          if (se && (se = se(e, D))) {
            Ud(Z, se, i, Q);
            break e;
          }
          he && he(e, q, D), e === "focusout" && (he = q._wrapperState) && he.controlled && q.type === "number" && _a(q, "number", q.value);
        }
        switch (he = D ? Sn(D) : window, e) {
          case "focusin":
            (Hd(he) || he.contentEditable === "true") && (yn = he, rs = D, bl = null);
            break;
          case "focusout":
            bl = rs = yn = null;
            break;
          case "mousedown":
            ns = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ns = !1, ef(Z, i, Q);
            break;
          case "selectionchange":
            if (Vy) break;
          case "keydown":
          case "keyup":
            ef(Z, i, Q);
        }
        var me;
        if (Ya) e: {
          switch (e) {
            case "compositionstart":
              var ve = "onCompositionStart";
              break e;
            case "compositionend":
              ve = "onCompositionEnd";
              break e;
            case "compositionupdate":
              ve = "onCompositionUpdate";
              break e;
          }
          ve = void 0;
        }
        else vn ? Vd(e, i) && (ve = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (ve = "onCompositionStart");
        ve && (Kd && i.locale !== "ko" && (vn || ve !== "onCompositionStart" ? ve === "onCompositionEnd" && vn && (me = Rd()) : (Cr = Q, Wa = "value" in Cr ? Cr.value : Cr.textContent, vn = !0)), he = ji(D, ve), 0 < he.length && (ve = new jd(ve, e, null, i, Q), Z.push({ event: ve, listeners: he }), me ? ve.data = me : (me = Bd(i), me !== null && (ve.data = me)))), (me = Ny ? Ty(e, i) : Ay(e, i)) && (D = ji(D, "onBeforeInput"), 0 < D.length && (Q = new jd("onBeforeInput", "beforeinput", null, i, Q), Z.push({ event: Q, listeners: D }), Q.data = me));
      }
      cf(Z, r);
    });
  }
  function Sl(e, r, i) {
    return { instance: e, listener: r, currentTarget: i };
  }
  function ji(e, r) {
    for (var i = r + "Capture", a = []; e !== null; ) {
      var c = e, m = c.stateNode;
      c.tag === 5 && m !== null && (c = m, m = nl(e, i), m != null && a.unshift(Sl(e, m, c)), m = nl(e, r), m != null && a.push(Sl(e, m, c))), e = e.return;
    }
    return a;
  }
  function xn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ff(e, r, i, a, c) {
    for (var m = r._reactName, b = []; i !== null && i !== a; ) {
      var k = i, P = k.alternate, D = k.stateNode;
      if (P !== null && P === a) break;
      k.tag === 5 && D !== null && (k = D, c ? (P = nl(i, m), P != null && b.unshift(Sl(i, P, k))) : c || (P = nl(i, m), P != null && b.push(Sl(i, P, k)))), i = i.return;
    }
    b.length !== 0 && e.push({ event: r, listeners: b });
  }
  var Wy = /\r\n?/g, Gy = /\u0000|\uFFFD/g;
  function pf(e) {
    return (typeof e == "string" ? e : "" + e).replace(Wy, `
`).replace(Gy, "");
  }
  function Mi(e, r, i) {
    if (r = pf(r), pf(e) !== r && i) throw Error(l(425));
  }
  function Ki() {
  }
  var us = null, cs = null;
  function ds(e, r) {
    return e === "textarea" || e === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var fs = typeof setTimeout == "function" ? setTimeout : void 0, qy = typeof clearTimeout == "function" ? clearTimeout : void 0, hf = typeof Promise == "function" ? Promise : void 0, Qy = typeof queueMicrotask == "function" ? queueMicrotask : typeof hf < "u" ? function(e) {
    return hf.resolve(null).then(e).catch(Zy);
  } : fs;
  function Zy(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ps(e, r) {
    var i = r, a = 0;
    do {
      var c = i.nextSibling;
      if (e.removeChild(i), c && c.nodeType === 8) if (i = c.data, i === "/$") {
        if (a === 0) {
          e.removeChild(c), fl(r);
          return;
        }
        a--;
      } else i !== "$" && i !== "$?" && i !== "$!" || a++;
      i = c;
    } while (i);
    fl(r);
  }
  function $r(e) {
    for (; e != null; e = e.nextSibling) {
      var r = e.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = e.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return e;
  }
  function mf(e) {
    e = e.previousSibling;
    for (var r = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === "$" || i === "$!" || i === "$?") {
          if (r === 0) return e;
          r--;
        } else i === "/$" && r++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var wn = Math.random().toString(36).slice(2), Yt = "__reactFiber$" + wn, Cl = "__reactProps$" + wn, nr = "__reactContainer$" + wn, hs = "__reactEvents$" + wn, Xy = "__reactListeners$" + wn, Yy = "__reactHandles$" + wn;
  function Gr(e) {
    var r = e[Yt];
    if (r) return r;
    for (var i = e.parentNode; i; ) {
      if (r = i[nr] || i[Yt]) {
        if (i = r.alternate, r.child !== null || i !== null && i.child !== null) for (e = mf(e); e !== null; ) {
          if (i = e[Yt]) return i;
          e = mf(e);
        }
        return r;
      }
      e = i, i = e.parentNode;
    }
    return null;
  }
  function El(e) {
    return e = e[Yt] || e[nr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Sn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(l(33));
  }
  function Di(e) {
    return e[Cl] || null;
  }
  var ms = [], Cn = -1;
  function kr(e) {
    return { current: e };
  }
  function Ie(e) {
    0 > Cn || (e.current = ms[Cn], ms[Cn] = null, Cn--);
  }
  function Re(e, r) {
    Cn++, ms[Cn] = e.current, e.current = r;
  }
  var _r = {}, st = kr(_r), yt = kr(!1), qr = _r;
  function En(e, r) {
    var i = e.type.contextTypes;
    if (!i) return _r;
    var a = e.stateNode;
    if (a && a.__reactInternalMemoizedUnmaskedChildContext === r) return a.__reactInternalMemoizedMaskedChildContext;
    var c = {}, m;
    for (m in i) c[m] = r[m];
    return a && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = r, e.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function bt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Oi() {
    Ie(yt), Ie(st);
  }
  function gf(e, r, i) {
    if (st.current !== _r) throw Error(l(168));
    Re(st, r), Re(yt, i);
  }
  function vf(e, r, i) {
    var a = e.stateNode;
    if (r = r.childContextTypes, typeof a.getChildContext != "function") return i;
    a = a.getChildContext();
    for (var c in a) if (!(c in r)) throw Error(l(108, be(e) || "Unknown", c));
    return B({}, i, a);
  }
  function Vi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _r, qr = st.current, Re(st, e), Re(yt, yt.current), !0;
  }
  function yf(e, r, i) {
    var a = e.stateNode;
    if (!a) throw Error(l(169));
    i ? (e = vf(e, r, qr), a.__reactInternalMemoizedMergedChildContext = e, Ie(yt), Ie(st), Re(st, e)) : Ie(yt), Re(yt, i);
  }
  var lr = null, Bi = !1, gs = !1;
  function bf(e) {
    lr === null ? lr = [e] : lr.push(e);
  }
  function Jy(e) {
    Bi = !0, bf(e);
  }
  function Fr() {
    if (!gs && lr !== null) {
      gs = !0;
      var e = 0, r = Pe;
      try {
        var i = lr;
        for (Pe = 1; e < i.length; e++) {
          var a = i[e];
          do
            a = a(!0);
          while (a !== null);
        }
        lr = null, Bi = !1;
      } catch (c) {
        throw lr !== null && (lr = lr.slice(e + 1)), xd(Ma, Fr), c;
      } finally {
        Pe = r, gs = !1;
      }
    }
    return null;
  }
  var $n = [], kn = 0, Hi = null, Ui = 0, zt = [], Rt = 0, Qr = null, ir = 1, or = "";
  function Zr(e, r) {
    $n[kn++] = Ui, $n[kn++] = Hi, Hi = e, Ui = r;
  }
  function xf(e, r, i) {
    zt[Rt++] = ir, zt[Rt++] = or, zt[Rt++] = Qr, Qr = e;
    var a = ir;
    e = or;
    var c = 32 - Dt(a) - 1;
    a &= ~(1 << c), i += 1;
    var m = 32 - Dt(r) + c;
    if (30 < m) {
      var b = c - c % 5;
      m = (a & (1 << b) - 1).toString(32), a >>= b, c -= b, ir = 1 << 32 - Dt(r) + c | i << c | a, or = m + e;
    } else ir = 1 << m | i << c | a, or = e;
  }
  function vs(e) {
    e.return !== null && (Zr(e, 1), xf(e, 1, 0));
  }
  function ys(e) {
    for (; e === Hi; ) Hi = $n[--kn], $n[kn] = null, Ui = $n[--kn], $n[kn] = null;
    for (; e === Qr; ) Qr = zt[--Rt], zt[Rt] = null, or = zt[--Rt], zt[Rt] = null, ir = zt[--Rt], zt[Rt] = null;
  }
  var Ft = null, Pt = null, De = !1, Vt = null;
  function wf(e, r) {
    var i = Mt(5, null, null, 0);
    i.elementType = "DELETED", i.stateNode = r, i.return = e, r = e.deletions, r === null ? (e.deletions = [i], e.flags |= 16) : r.push(i);
  }
  function Sf(e, r) {
    switch (e.tag) {
      case 5:
        var i = e.type;
        return r = r.nodeType !== 1 || i.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (e.stateNode = r, Ft = e, Pt = $r(r.firstChild), !0) : !1;
      case 6:
        return r = e.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (e.stateNode = r, Ft = e, Pt = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (i = Qr !== null ? { id: ir, overflow: or } : null, e.memoizedState = { dehydrated: r, treeContext: i, retryLane: 1073741824 }, i = Mt(18, null, null, 0), i.stateNode = r, i.return = e, e.child = i, Ft = e, Pt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function bs(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function xs(e) {
    if (De) {
      var r = Pt;
      if (r) {
        var i = r;
        if (!Sf(e, r)) {
          if (bs(e)) throw Error(l(418));
          r = $r(i.nextSibling);
          var a = Ft;
          r && Sf(e, r) ? wf(a, i) : (e.flags = e.flags & -4097 | 2, De = !1, Ft = e);
        }
      } else {
        if (bs(e)) throw Error(l(418));
        e.flags = e.flags & -4097 | 2, De = !1, Ft = e;
      }
    }
  }
  function Cf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ft = e;
  }
  function Wi(e) {
    if (e !== Ft) return !1;
    if (!De) return Cf(e), De = !0, !1;
    var r;
    if ((r = e.tag !== 3) && !(r = e.tag !== 5) && (r = e.type, r = r !== "head" && r !== "body" && !ds(e.type, e.memoizedProps)), r && (r = Pt)) {
      if (bs(e)) throw Ef(), Error(l(418));
      for (; r; ) wf(e, r), r = $r(r.nextSibling);
    }
    if (Cf(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      e: {
        for (e = e.nextSibling, r = 0; e; ) {
          if (e.nodeType === 8) {
            var i = e.data;
            if (i === "/$") {
              if (r === 0) {
                Pt = $r(e.nextSibling);
                break e;
              }
              r--;
            } else i !== "$" && i !== "$!" && i !== "$?" || r++;
          }
          e = e.nextSibling;
        }
        Pt = null;
      }
    } else Pt = Ft ? $r(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ef() {
    for (var e = Pt; e; ) e = $r(e.nextSibling);
  }
  function _n() {
    Pt = Ft = null, De = !1;
  }
  function ws(e) {
    Vt === null ? Vt = [e] : Vt.push(e);
  }
  var e1 = J.ReactCurrentBatchConfig;
  function $l(e, r, i) {
    if (e = i.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (i._owner) {
        if (i = i._owner, i) {
          if (i.tag !== 1) throw Error(l(309));
          var a = i.stateNode;
        }
        if (!a) throw Error(l(147, e));
        var c = a, m = "" + e;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === m ? r.ref : (r = function(b) {
          var k = c.refs;
          b === null ? delete k[m] : k[m] = b;
        }, r._stringRef = m, r);
      }
      if (typeof e != "string") throw Error(l(284));
      if (!i._owner) throw Error(l(290, e));
    }
    return e;
  }
  function Gi(e, r) {
    throw e = Object.prototype.toString.call(r), Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : e));
  }
  function $f(e) {
    var r = e._init;
    return r(e._payload);
  }
  function kf(e) {
    function r(I, A) {
      if (e) {
        var j = I.deletions;
        j === null ? (I.deletions = [A], I.flags |= 16) : j.push(A);
      }
    }
    function i(I, A) {
      if (!e) return null;
      for (; A !== null; ) r(I, A), A = A.sibling;
      return null;
    }
    function a(I, A) {
      for (I = /* @__PURE__ */ new Map(); A !== null; ) A.key !== null ? I.set(A.key, A) : I.set(A.index, A), A = A.sibling;
      return I;
    }
    function c(I, A) {
      return I = Ir(I, A), I.index = 0, I.sibling = null, I;
    }
    function m(I, A, j) {
      return I.index = j, e ? (j = I.alternate, j !== null ? (j = j.index, j < A ? (I.flags |= 2, A) : j) : (I.flags |= 2, A)) : (I.flags |= 1048576, A);
    }
    function b(I) {
      return e && I.alternate === null && (I.flags |= 2), I;
    }
    function k(I, A, j, Y) {
      return A === null || A.tag !== 6 ? (A = fu(j, I.mode, Y), A.return = I, A) : (A = c(A, j), A.return = I, A);
    }
    function P(I, A, j, Y) {
      var se = j.type;
      return se === ue ? Q(I, A, j.props.children, Y, j.key) : A !== null && (A.elementType === se || typeof se == "object" && se !== null && se.$$typeof === M && $f(se) === A.type) ? (Y = c(A, j.props), Y.ref = $l(I, A, j), Y.return = I, Y) : (Y = yo(j.type, j.key, j.props, null, I.mode, Y), Y.ref = $l(I, A, j), Y.return = I, Y);
    }
    function D(I, A, j, Y) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== j.containerInfo || A.stateNode.implementation !== j.implementation ? (A = pu(j, I.mode, Y), A.return = I, A) : (A = c(A, j.children || []), A.return = I, A);
    }
    function Q(I, A, j, Y, se) {
      return A === null || A.tag !== 7 ? (A = ln(j, I.mode, Y, se), A.return = I, A) : (A = c(A, j), A.return = I, A);
    }
    function Z(I, A, j) {
      if (typeof A == "string" && A !== "" || typeof A == "number") return A = fu("" + A, I.mode, j), A.return = I, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case fe:
            return j = yo(A.type, A.key, A.props, null, I.mode, j), j.ref = $l(I, null, A), j.return = I, j;
          case ce:
            return A = pu(A, I.mode, j), A.return = I, A;
          case M:
            var Y = A._init;
            return Z(I, Y(A._payload), j);
        }
        if (el(A) || T(A)) return A = ln(A, I.mode, j, null), A.return = I, A;
        Gi(I, A);
      }
      return null;
    }
    function q(I, A, j, Y) {
      var se = A !== null ? A.key : null;
      if (typeof j == "string" && j !== "" || typeof j == "number") return se !== null ? null : k(I, A, "" + j, Y);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case fe:
            return j.key === se ? P(I, A, j, Y) : null;
          case ce:
            return j.key === se ? D(I, A, j, Y) : null;
          case M:
            return se = j._init, q(
              I,
              A,
              se(j._payload),
              Y
            );
        }
        if (el(j) || T(j)) return se !== null ? null : Q(I, A, j, Y, null);
        Gi(I, j);
      }
      return null;
    }
    function re(I, A, j, Y, se) {
      if (typeof Y == "string" && Y !== "" || typeof Y == "number") return I = I.get(j) || null, k(A, I, "" + Y, se);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case fe:
            return I = I.get(Y.key === null ? j : Y.key) || null, P(A, I, Y, se);
          case ce:
            return I = I.get(Y.key === null ? j : Y.key) || null, D(A, I, Y, se);
          case M:
            var he = Y._init;
            return re(I, A, j, he(Y._payload), se);
        }
        if (el(Y) || T(Y)) return I = I.get(j) || null, Q(A, I, Y, se, null);
        Gi(A, Y);
      }
      return null;
    }
    function ie(I, A, j, Y) {
      for (var se = null, he = null, me = A, ve = A = 0, tt = null; me !== null && ve < j.length; ve++) {
        me.index > ve ? (tt = me, me = null) : tt = me.sibling;
        var Fe = q(I, me, j[ve], Y);
        if (Fe === null) {
          me === null && (me = tt);
          break;
        }
        e && me && Fe.alternate === null && r(I, me), A = m(Fe, A, ve), he === null ? se = Fe : he.sibling = Fe, he = Fe, me = tt;
      }
      if (ve === j.length) return i(I, me), De && Zr(I, ve), se;
      if (me === null) {
        for (; ve < j.length; ve++) me = Z(I, j[ve], Y), me !== null && (A = m(me, A, ve), he === null ? se = me : he.sibling = me, he = me);
        return De && Zr(I, ve), se;
      }
      for (me = a(I, me); ve < j.length; ve++) tt = re(me, I, ve, j[ve], Y), tt !== null && (e && tt.alternate !== null && me.delete(tt.key === null ? ve : tt.key), A = m(tt, A, ve), he === null ? se = tt : he.sibling = tt, he = tt);
      return e && me.forEach(function(jr) {
        return r(I, jr);
      }), De && Zr(I, ve), se;
    }
    function oe(I, A, j, Y) {
      var se = T(j);
      if (typeof se != "function") throw Error(l(150));
      if (j = se.call(j), j == null) throw Error(l(151));
      for (var he = se = null, me = A, ve = A = 0, tt = null, Fe = j.next(); me !== null && !Fe.done; ve++, Fe = j.next()) {
        me.index > ve ? (tt = me, me = null) : tt = me.sibling;
        var jr = q(I, me, Fe.value, Y);
        if (jr === null) {
          me === null && (me = tt);
          break;
        }
        e && me && jr.alternate === null && r(I, me), A = m(jr, A, ve), he === null ? se = jr : he.sibling = jr, he = jr, me = tt;
      }
      if (Fe.done) return i(
        I,
        me
      ), De && Zr(I, ve), se;
      if (me === null) {
        for (; !Fe.done; ve++, Fe = j.next()) Fe = Z(I, Fe.value, Y), Fe !== null && (A = m(Fe, A, ve), he === null ? se = Fe : he.sibling = Fe, he = Fe);
        return De && Zr(I, ve), se;
      }
      for (me = a(I, me); !Fe.done; ve++, Fe = j.next()) Fe = re(me, I, ve, Fe.value, Y), Fe !== null && (e && Fe.alternate !== null && me.delete(Fe.key === null ? ve : Fe.key), A = m(Fe, A, ve), he === null ? se = Fe : he.sibling = Fe, he = Fe);
      return e && me.forEach(function(z1) {
        return r(I, z1);
      }), De && Zr(I, ve), se;
    }
    function qe(I, A, j, Y) {
      if (typeof j == "object" && j !== null && j.type === ue && j.key === null && (j = j.props.children), typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case fe:
            e: {
              for (var se = j.key, he = A; he !== null; ) {
                if (he.key === se) {
                  if (se = j.type, se === ue) {
                    if (he.tag === 7) {
                      i(I, he.sibling), A = c(he, j.props.children), A.return = I, I = A;
                      break e;
                    }
                  } else if (he.elementType === se || typeof se == "object" && se !== null && se.$$typeof === M && $f(se) === he.type) {
                    i(I, he.sibling), A = c(he, j.props), A.ref = $l(I, he, j), A.return = I, I = A;
                    break e;
                  }
                  i(I, he);
                  break;
                } else r(I, he);
                he = he.sibling;
              }
              j.type === ue ? (A = ln(j.props.children, I.mode, Y, j.key), A.return = I, I = A) : (Y = yo(j.type, j.key, j.props, null, I.mode, Y), Y.ref = $l(I, A, j), Y.return = I, I = Y);
            }
            return b(I);
          case ce:
            e: {
              for (he = j.key; A !== null; ) {
                if (A.key === he) if (A.tag === 4 && A.stateNode.containerInfo === j.containerInfo && A.stateNode.implementation === j.implementation) {
                  i(I, A.sibling), A = c(A, j.children || []), A.return = I, I = A;
                  break e;
                } else {
                  i(I, A);
                  break;
                }
                else r(I, A);
                A = A.sibling;
              }
              A = pu(j, I.mode, Y), A.return = I, I = A;
            }
            return b(I);
          case M:
            return he = j._init, qe(I, A, he(j._payload), Y);
        }
        if (el(j)) return ie(I, A, j, Y);
        if (T(j)) return oe(I, A, j, Y);
        Gi(I, j);
      }
      return typeof j == "string" && j !== "" || typeof j == "number" ? (j = "" + j, A !== null && A.tag === 6 ? (i(I, A.sibling), A = c(A, j), A.return = I, I = A) : (i(I, A), A = fu(j, I.mode, Y), A.return = I, I = A), b(I)) : i(I, A);
    }
    return qe;
  }
  var Fn = kf(!0), _f = kf(!1), qi = kr(null), Qi = null, Pn = null, Ss = null;
  function Cs() {
    Ss = Pn = Qi = null;
  }
  function Es(e) {
    var r = qi.current;
    Ie(qi), e._currentValue = r;
  }
  function $s(e, r, i) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & r) !== r ? (e.childLanes |= r, a !== null && (a.childLanes |= r)) : a !== null && (a.childLanes & r) !== r && (a.childLanes |= r), e === i) break;
      e = e.return;
    }
  }
  function Nn(e, r) {
    Qi = e, Ss = Pn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & r) !== 0 && (xt = !0), e.firstContext = null);
  }
  function Lt(e) {
    var r = e._currentValue;
    if (Ss !== e) if (e = { context: e, memoizedValue: r, next: null }, Pn === null) {
      if (Qi === null) throw Error(l(308));
      Pn = e, Qi.dependencies = { lanes: 0, firstContext: e };
    } else Pn = Pn.next = e;
    return r;
  }
  var Xr = null;
  function ks(e) {
    Xr === null ? Xr = [e] : Xr.push(e);
  }
  function Ff(e, r, i, a) {
    var c = r.interleaved;
    return c === null ? (i.next = i, ks(r)) : (i.next = c.next, c.next = i), r.interleaved = i, ar(e, a);
  }
  function ar(e, r) {
    e.lanes |= r;
    var i = e.alternate;
    for (i !== null && (i.lanes |= r), i = e, e = e.return; e !== null; ) e.childLanes |= r, i = e.alternate, i !== null && (i.childLanes |= r), i = e, e = e.return;
    return i.tag === 3 ? i.stateNode : null;
  }
  var Pr = !1;
  function _s(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Pf(e, r) {
    e = e.updateQueue, r.updateQueue === e && (r.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function sr(e, r) {
    return { eventTime: e, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Nr(e, r, i) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (ke & 2) !== 0) {
      var c = a.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), a.pending = r, ar(e, i);
    }
    return c = a.interleaved, c === null ? (r.next = r, ks(a)) : (r.next = c.next, c.next = r), a.interleaved = r, ar(e, i);
  }
  function Zi(e, r, i) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (i & 4194240) !== 0)) {
      var a = r.lanes;
      a &= e.pendingLanes, i |= a, r.lanes = i, Oa(e, i);
    }
  }
  function Nf(e, r) {
    var i = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, i === a)) {
      var c = null, m = null;
      if (i = i.firstBaseUpdate, i !== null) {
        do {
          var b = { eventTime: i.eventTime, lane: i.lane, tag: i.tag, payload: i.payload, callback: i.callback, next: null };
          m === null ? c = m = b : m = m.next = b, i = i.next;
        } while (i !== null);
        m === null ? c = m = r : m = m.next = r;
      } else c = m = r;
      i = { baseState: a.baseState, firstBaseUpdate: c, lastBaseUpdate: m, shared: a.shared, effects: a.effects }, e.updateQueue = i;
      return;
    }
    e = i.lastBaseUpdate, e === null ? i.firstBaseUpdate = r : e.next = r, i.lastBaseUpdate = r;
  }
  function Xi(e, r, i, a) {
    var c = e.updateQueue;
    Pr = !1;
    var m = c.firstBaseUpdate, b = c.lastBaseUpdate, k = c.shared.pending;
    if (k !== null) {
      c.shared.pending = null;
      var P = k, D = P.next;
      P.next = null, b === null ? m = D : b.next = D, b = P;
      var Q = e.alternate;
      Q !== null && (Q = Q.updateQueue, k = Q.lastBaseUpdate, k !== b && (k === null ? Q.firstBaseUpdate = D : k.next = D, Q.lastBaseUpdate = P));
    }
    if (m !== null) {
      var Z = c.baseState;
      b = 0, Q = D = P = null, k = m;
      do {
        var q = k.lane, re = k.eventTime;
        if ((a & q) === q) {
          Q !== null && (Q = Q.next = {
            eventTime: re,
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null
          });
          e: {
            var ie = e, oe = k;
            switch (q = r, re = i, oe.tag) {
              case 1:
                if (ie = oe.payload, typeof ie == "function") {
                  Z = ie.call(re, Z, q);
                  break e;
                }
                Z = ie;
                break e;
              case 3:
                ie.flags = ie.flags & -65537 | 128;
              case 0:
                if (ie = oe.payload, q = typeof ie == "function" ? ie.call(re, Z, q) : ie, q == null) break e;
                Z = B({}, Z, q);
                break e;
              case 2:
                Pr = !0;
            }
          }
          k.callback !== null && k.lane !== 0 && (e.flags |= 64, q = c.effects, q === null ? c.effects = [k] : q.push(k));
        } else re = { eventTime: re, lane: q, tag: k.tag, payload: k.payload, callback: k.callback, next: null }, Q === null ? (D = Q = re, P = Z) : Q = Q.next = re, b |= q;
        if (k = k.next, k === null) {
          if (k = c.shared.pending, k === null) break;
          q = k, k = q.next, q.next = null, c.lastBaseUpdate = q, c.shared.pending = null;
        }
      } while (!0);
      if (Q === null && (P = Z), c.baseState = P, c.firstBaseUpdate = D, c.lastBaseUpdate = Q, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          b |= c.lane, c = c.next;
        while (c !== r);
      } else m === null && (c.shared.lanes = 0);
      en |= b, e.lanes = b, e.memoizedState = Z;
    }
  }
  function Tf(e, r, i) {
    if (e = r.effects, r.effects = null, e !== null) for (r = 0; r < e.length; r++) {
      var a = e[r], c = a.callback;
      if (c !== null) {
        if (a.callback = null, a = i, typeof c != "function") throw Error(l(191, c));
        c.call(a);
      }
    }
  }
  var kl = {}, Jt = kr(kl), _l = kr(kl), Fl = kr(kl);
  function Yr(e) {
    if (e === kl) throw Error(l(174));
    return e;
  }
  function Fs(e, r) {
    switch (Re(Fl, r), Re(_l, e), Re(Jt, kl), e = r.nodeType, e) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Pa(null, "");
        break;
      default:
        e = e === 8 ? r.parentNode : r, r = e.namespaceURI || null, e = e.tagName, r = Pa(r, e);
    }
    Ie(Jt), Re(Jt, r);
  }
  function Tn() {
    Ie(Jt), Ie(_l), Ie(Fl);
  }
  function Af(e) {
    Yr(Fl.current);
    var r = Yr(Jt.current), i = Pa(r, e.type);
    r !== i && (Re(_l, e), Re(Jt, i));
  }
  function Ps(e) {
    _l.current === e && (Ie(Jt), Ie(_l));
  }
  var Ve = kr(0);
  function Yi(e) {
    for (var r = e; r !== null; ) {
      if (r.tag === 13) {
        var i = r.memoizedState;
        if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || i.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === e) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === e) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Ns = [];
  function Ts() {
    for (var e = 0; e < Ns.length; e++) Ns[e]._workInProgressVersionPrimary = null;
    Ns.length = 0;
  }
  var Ji = J.ReactCurrentDispatcher, As = J.ReactCurrentBatchConfig, Jr = 0, Be = null, Xe = null, Je = null, eo = !1, Pl = !1, Nl = 0, t1 = 0;
  function ut() {
    throw Error(l(321));
  }
  function zs(e, r) {
    if (r === null) return !1;
    for (var i = 0; i < r.length && i < e.length; i++) if (!Ot(e[i], r[i])) return !1;
    return !0;
  }
  function Rs(e, r, i, a, c, m) {
    if (Jr = m, Be = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Ji.current = e === null || e.memoizedState === null ? i1 : o1, e = i(a, c), Pl) {
      m = 0;
      do {
        if (Pl = !1, Nl = 0, 25 <= m) throw Error(l(301));
        m += 1, Je = Xe = null, r.updateQueue = null, Ji.current = a1, e = i(a, c);
      } while (Pl);
    }
    if (Ji.current = no, r = Xe !== null && Xe.next !== null, Jr = 0, Je = Xe = Be = null, eo = !1, r) throw Error(l(300));
    return e;
  }
  function Ls() {
    var e = Nl !== 0;
    return Nl = 0, e;
  }
  function er() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Je === null ? Be.memoizedState = Je = e : Je = Je.next = e, Je;
  }
  function It() {
    if (Xe === null) {
      var e = Be.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Xe.next;
    var r = Je === null ? Be.memoizedState : Je.next;
    if (r !== null) Je = r, Xe = e;
    else {
      if (e === null) throw Error(l(310));
      Xe = e, e = { memoizedState: Xe.memoizedState, baseState: Xe.baseState, baseQueue: Xe.baseQueue, queue: Xe.queue, next: null }, Je === null ? Be.memoizedState = Je = e : Je = Je.next = e;
    }
    return Je;
  }
  function Tl(e, r) {
    return typeof r == "function" ? r(e) : r;
  }
  function Is(e) {
    var r = It(), i = r.queue;
    if (i === null) throw Error(l(311));
    i.lastRenderedReducer = e;
    var a = Xe, c = a.baseQueue, m = i.pending;
    if (m !== null) {
      if (c !== null) {
        var b = c.next;
        c.next = m.next, m.next = b;
      }
      a.baseQueue = c = m, i.pending = null;
    }
    if (c !== null) {
      m = c.next, a = a.baseState;
      var k = b = null, P = null, D = m;
      do {
        var Q = D.lane;
        if ((Jr & Q) === Q) P !== null && (P = P.next = { lane: 0, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }), a = D.hasEagerState ? D.eagerState : e(a, D.action);
        else {
          var Z = {
            lane: Q,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null
          };
          P === null ? (k = P = Z, b = a) : P = P.next = Z, Be.lanes |= Q, en |= Q;
        }
        D = D.next;
      } while (D !== null && D !== m);
      P === null ? b = a : P.next = k, Ot(a, r.memoizedState) || (xt = !0), r.memoizedState = a, r.baseState = b, r.baseQueue = P, i.lastRenderedState = a;
    }
    if (e = i.interleaved, e !== null) {
      c = e;
      do
        m = c.lane, Be.lanes |= m, en |= m, c = c.next;
      while (c !== e);
    } else c === null && (i.lanes = 0);
    return [r.memoizedState, i.dispatch];
  }
  function js(e) {
    var r = It(), i = r.queue;
    if (i === null) throw Error(l(311));
    i.lastRenderedReducer = e;
    var a = i.dispatch, c = i.pending, m = r.memoizedState;
    if (c !== null) {
      i.pending = null;
      var b = c = c.next;
      do
        m = e(m, b.action), b = b.next;
      while (b !== c);
      Ot(m, r.memoizedState) || (xt = !0), r.memoizedState = m, r.baseQueue === null && (r.baseState = m), i.lastRenderedState = m;
    }
    return [m, a];
  }
  function zf() {
  }
  function Rf(e, r) {
    var i = Be, a = It(), c = r(), m = !Ot(a.memoizedState, c);
    if (m && (a.memoizedState = c, xt = !0), a = a.queue, Ms(jf.bind(null, i, a, e), [e]), a.getSnapshot !== r || m || Je !== null && Je.memoizedState.tag & 1) {
      if (i.flags |= 2048, Al(9, If.bind(null, i, a, c, r), void 0, null), et === null) throw Error(l(349));
      (Jr & 30) !== 0 || Lf(i, r, c);
    }
    return c;
  }
  function Lf(e, r, i) {
    e.flags |= 16384, e = { getSnapshot: r, value: i }, r = Be.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Be.updateQueue = r, r.stores = [e]) : (i = r.stores, i === null ? r.stores = [e] : i.push(e));
  }
  function If(e, r, i, a) {
    r.value = i, r.getSnapshot = a, Mf(r) && Kf(e);
  }
  function jf(e, r, i) {
    return i(function() {
      Mf(r) && Kf(e);
    });
  }
  function Mf(e) {
    var r = e.getSnapshot;
    e = e.value;
    try {
      var i = r();
      return !Ot(e, i);
    } catch {
      return !0;
    }
  }
  function Kf(e) {
    var r = ar(e, 1);
    r !== null && Wt(r, e, 1, -1);
  }
  function Df(e) {
    var r = er();
    return typeof e == "function" && (e = e()), r.memoizedState = r.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Tl, lastRenderedState: e }, r.queue = e, e = e.dispatch = l1.bind(null, Be, e), [r.memoizedState, e];
  }
  function Al(e, r, i, a) {
    return e = { tag: e, create: r, destroy: i, deps: a, next: null }, r = Be.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Be.updateQueue = r, r.lastEffect = e.next = e) : (i = r.lastEffect, i === null ? r.lastEffect = e.next = e : (a = i.next, i.next = e, e.next = a, r.lastEffect = e)), e;
  }
  function Of() {
    return It().memoizedState;
  }
  function to(e, r, i, a) {
    var c = er();
    Be.flags |= e, c.memoizedState = Al(1 | r, i, void 0, a === void 0 ? null : a);
  }
  function ro(e, r, i, a) {
    var c = It();
    a = a === void 0 ? null : a;
    var m = void 0;
    if (Xe !== null) {
      var b = Xe.memoizedState;
      if (m = b.destroy, a !== null && zs(a, b.deps)) {
        c.memoizedState = Al(r, i, m, a);
        return;
      }
    }
    Be.flags |= e, c.memoizedState = Al(1 | r, i, m, a);
  }
  function Vf(e, r) {
    return to(8390656, 8, e, r);
  }
  function Ms(e, r) {
    return ro(2048, 8, e, r);
  }
  function Bf(e, r) {
    return ro(4, 2, e, r);
  }
  function Hf(e, r) {
    return ro(4, 4, e, r);
  }
  function Uf(e, r) {
    if (typeof r == "function") return e = e(), r(e), function() {
      r(null);
    };
    if (r != null) return e = e(), r.current = e, function() {
      r.current = null;
    };
  }
  function Wf(e, r, i) {
    return i = i != null ? i.concat([e]) : null, ro(4, 4, Uf.bind(null, r, e), i);
  }
  function Ks() {
  }
  function Gf(e, r) {
    var i = It();
    r = r === void 0 ? null : r;
    var a = i.memoizedState;
    return a !== null && r !== null && zs(r, a[1]) ? a[0] : (i.memoizedState = [e, r], e);
  }
  function qf(e, r) {
    var i = It();
    r = r === void 0 ? null : r;
    var a = i.memoizedState;
    return a !== null && r !== null && zs(r, a[1]) ? a[0] : (e = e(), i.memoizedState = [e, r], e);
  }
  function Qf(e, r, i) {
    return (Jr & 21) === 0 ? (e.baseState && (e.baseState = !1, xt = !0), e.memoizedState = i) : (Ot(i, r) || (i = Ed(), Be.lanes |= i, en |= i, e.baseState = !0), r);
  }
  function r1(e, r) {
    var i = Pe;
    Pe = i !== 0 && 4 > i ? i : 4, e(!0);
    var a = As.transition;
    As.transition = {};
    try {
      e(!1), r();
    } finally {
      Pe = i, As.transition = a;
    }
  }
  function Zf() {
    return It().memoizedState;
  }
  function n1(e, r, i) {
    var a = Rr(e);
    if (i = { lane: a, action: i, hasEagerState: !1, eagerState: null, next: null }, Xf(e)) Yf(r, i);
    else if (i = Ff(e, r, i, a), i !== null) {
      var c = gt();
      Wt(i, e, a, c), Jf(i, r, a);
    }
  }
  function l1(e, r, i) {
    var a = Rr(e), c = { lane: a, action: i, hasEagerState: !1, eagerState: null, next: null };
    if (Xf(e)) Yf(r, c);
    else {
      var m = e.alternate;
      if (e.lanes === 0 && (m === null || m.lanes === 0) && (m = r.lastRenderedReducer, m !== null)) try {
        var b = r.lastRenderedState, k = m(b, i);
        if (c.hasEagerState = !0, c.eagerState = k, Ot(k, b)) {
          var P = r.interleaved;
          P === null ? (c.next = c, ks(r)) : (c.next = P.next, P.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      i = Ff(e, r, c, a), i !== null && (c = gt(), Wt(i, e, a, c), Jf(i, r, a));
    }
  }
  function Xf(e) {
    var r = e.alternate;
    return e === Be || r !== null && r === Be;
  }
  function Yf(e, r) {
    Pl = eo = !0;
    var i = e.pending;
    i === null ? r.next = r : (r.next = i.next, i.next = r), e.pending = r;
  }
  function Jf(e, r, i) {
    if ((i & 4194240) !== 0) {
      var a = r.lanes;
      a &= e.pendingLanes, i |= a, r.lanes = i, Oa(e, i);
    }
  }
  var no = { readContext: Lt, useCallback: ut, useContext: ut, useEffect: ut, useImperativeHandle: ut, useInsertionEffect: ut, useLayoutEffect: ut, useMemo: ut, useReducer: ut, useRef: ut, useState: ut, useDebugValue: ut, useDeferredValue: ut, useTransition: ut, useMutableSource: ut, useSyncExternalStore: ut, useId: ut, unstable_isNewReconciler: !1 }, i1 = { readContext: Lt, useCallback: function(e, r) {
    return er().memoizedState = [e, r === void 0 ? null : r], e;
  }, useContext: Lt, useEffect: Vf, useImperativeHandle: function(e, r, i) {
    return i = i != null ? i.concat([e]) : null, to(
      4194308,
      4,
      Uf.bind(null, r, e),
      i
    );
  }, useLayoutEffect: function(e, r) {
    return to(4194308, 4, e, r);
  }, useInsertionEffect: function(e, r) {
    return to(4, 2, e, r);
  }, useMemo: function(e, r) {
    var i = er();
    return r = r === void 0 ? null : r, e = e(), i.memoizedState = [e, r], e;
  }, useReducer: function(e, r, i) {
    var a = er();
    return r = i !== void 0 ? i(r) : r, a.memoizedState = a.baseState = r, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: r }, a.queue = e, e = e.dispatch = n1.bind(null, Be, e), [a.memoizedState, e];
  }, useRef: function(e) {
    var r = er();
    return e = { current: e }, r.memoizedState = e;
  }, useState: Df, useDebugValue: Ks, useDeferredValue: function(e) {
    return er().memoizedState = e;
  }, useTransition: function() {
    var e = Df(!1), r = e[0];
    return e = r1.bind(null, e[1]), er().memoizedState = e, [r, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, r, i) {
    var a = Be, c = er();
    if (De) {
      if (i === void 0) throw Error(l(407));
      i = i();
    } else {
      if (i = r(), et === null) throw Error(l(349));
      (Jr & 30) !== 0 || Lf(a, r, i);
    }
    c.memoizedState = i;
    var m = { value: i, getSnapshot: r };
    return c.queue = m, Vf(jf.bind(
      null,
      a,
      m,
      e
    ), [e]), a.flags |= 2048, Al(9, If.bind(null, a, m, i, r), void 0, null), i;
  }, useId: function() {
    var e = er(), r = et.identifierPrefix;
    if (De) {
      var i = or, a = ir;
      i = (a & ~(1 << 32 - Dt(a) - 1)).toString(32) + i, r = ":" + r + "R" + i, i = Nl++, 0 < i && (r += "H" + i.toString(32)), r += ":";
    } else i = t1++, r = ":" + r + "r" + i.toString(32) + ":";
    return e.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, o1 = {
    readContext: Lt,
    useCallback: Gf,
    useContext: Lt,
    useEffect: Ms,
    useImperativeHandle: Wf,
    useInsertionEffect: Bf,
    useLayoutEffect: Hf,
    useMemo: qf,
    useReducer: Is,
    useRef: Of,
    useState: function() {
      return Is(Tl);
    },
    useDebugValue: Ks,
    useDeferredValue: function(e) {
      var r = It();
      return Qf(r, Xe.memoizedState, e);
    },
    useTransition: function() {
      var e = Is(Tl)[0], r = It().memoizedState;
      return [e, r];
    },
    useMutableSource: zf,
    useSyncExternalStore: Rf,
    useId: Zf,
    unstable_isNewReconciler: !1
  }, a1 = { readContext: Lt, useCallback: Gf, useContext: Lt, useEffect: Ms, useImperativeHandle: Wf, useInsertionEffect: Bf, useLayoutEffect: Hf, useMemo: qf, useReducer: js, useRef: Of, useState: function() {
    return js(Tl);
  }, useDebugValue: Ks, useDeferredValue: function(e) {
    var r = It();
    return Xe === null ? r.memoizedState = e : Qf(r, Xe.memoizedState, e);
  }, useTransition: function() {
    var e = js(Tl)[0], r = It().memoizedState;
    return [e, r];
  }, useMutableSource: zf, useSyncExternalStore: Rf, useId: Zf, unstable_isNewReconciler: !1 };
  function Bt(e, r) {
    if (e && e.defaultProps) {
      r = B({}, r), e = e.defaultProps;
      for (var i in e) r[i] === void 0 && (r[i] = e[i]);
      return r;
    }
    return r;
  }
  function Ds(e, r, i, a) {
    r = e.memoizedState, i = i(a, r), i = i == null ? r : B({}, r, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var lo = { isMounted: function(e) {
    return (e = e._reactInternals) ? Wr(e) === e : !1;
  }, enqueueSetState: function(e, r, i) {
    e = e._reactInternals;
    var a = gt(), c = Rr(e), m = sr(a, c);
    m.payload = r, i != null && (m.callback = i), r = Nr(e, m, c), r !== null && (Wt(r, e, c, a), Zi(r, e, c));
  }, enqueueReplaceState: function(e, r, i) {
    e = e._reactInternals;
    var a = gt(), c = Rr(e), m = sr(a, c);
    m.tag = 1, m.payload = r, i != null && (m.callback = i), r = Nr(e, m, c), r !== null && (Wt(r, e, c, a), Zi(r, e, c));
  }, enqueueForceUpdate: function(e, r) {
    e = e._reactInternals;
    var i = gt(), a = Rr(e), c = sr(i, a);
    c.tag = 2, r != null && (c.callback = r), r = Nr(e, c, a), r !== null && (Wt(r, e, a, i), Zi(r, e, a));
  } };
  function ep(e, r, i, a, c, m, b) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, m, b) : r.prototype && r.prototype.isPureReactComponent ? !yl(i, a) || !yl(c, m) : !0;
  }
  function tp(e, r, i) {
    var a = !1, c = _r, m = r.contextType;
    return typeof m == "object" && m !== null ? m = Lt(m) : (c = bt(r) ? qr : st.current, a = r.contextTypes, m = (a = a != null) ? En(e, c) : _r), r = new r(i, m), e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = lo, e.stateNode = r, r._reactInternals = e, a && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = c, e.__reactInternalMemoizedMaskedChildContext = m), r;
  }
  function rp(e, r, i, a) {
    e = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(i, a), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(i, a), r.state !== e && lo.enqueueReplaceState(r, r.state, null);
  }
  function Os(e, r, i, a) {
    var c = e.stateNode;
    c.props = i, c.state = e.memoizedState, c.refs = {}, _s(e);
    var m = r.contextType;
    typeof m == "object" && m !== null ? c.context = Lt(m) : (m = bt(r) ? qr : st.current, c.context = En(e, m)), c.state = e.memoizedState, m = r.getDerivedStateFromProps, typeof m == "function" && (Ds(e, r, m, i), c.state = e.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && lo.enqueueReplaceState(c, c.state, null), Xi(e, i, c, a), c.state = e.memoizedState), typeof c.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function An(e, r) {
    try {
      var i = "", a = r;
      do
        i += H(a), a = a.return;
      while (a);
      var c = i;
    } catch (m) {
      c = `
Error generating stack: ` + m.message + `
` + m.stack;
    }
    return { value: e, source: r, stack: c, digest: null };
  }
  function Vs(e, r, i) {
    return { value: e, source: null, stack: i ?? null, digest: r ?? null };
  }
  function Bs(e, r) {
    try {
      console.error(r.value);
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  var s1 = typeof WeakMap == "function" ? WeakMap : Map;
  function np(e, r, i) {
    i = sr(-1, i), i.tag = 3, i.payload = { element: null };
    var a = r.value;
    return i.callback = function() {
      fo || (fo = !0, lu = a), Bs(e, r);
    }, i;
  }
  function lp(e, r, i) {
    i = sr(-1, i), i.tag = 3;
    var a = e.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var c = r.value;
      i.payload = function() {
        return a(c);
      }, i.callback = function() {
        Bs(e, r);
      };
    }
    var m = e.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (i.callback = function() {
      Bs(e, r), typeof a != "function" && (Ar === null ? Ar = /* @__PURE__ */ new Set([this]) : Ar.add(this));
      var b = r.stack;
      this.componentDidCatch(r.value, { componentStack: b !== null ? b : "" });
    }), i;
  }
  function ip(e, r, i) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new s1();
      var c = /* @__PURE__ */ new Set();
      a.set(r, c);
    } else c = a.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), a.set(r, c));
    c.has(i) || (c.add(i), e = S1.bind(null, e, r, i), r.then(e, e));
  }
  function op(e) {
    do {
      var r;
      if ((r = e.tag === 13) && (r = e.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function ap(e, r, i, a, c) {
    return (e.mode & 1) === 0 ? (e === r ? e.flags |= 65536 : (e.flags |= 128, i.flags |= 131072, i.flags &= -52805, i.tag === 1 && (i.alternate === null ? i.tag = 17 : (r = sr(-1, 1), r.tag = 2, Nr(i, r, 1))), i.lanes |= 1), e) : (e.flags |= 65536, e.lanes = c, e);
  }
  var u1 = J.ReactCurrentOwner, xt = !1;
  function mt(e, r, i, a) {
    r.child = e === null ? _f(r, null, i, a) : Fn(r, e.child, i, a);
  }
  function sp(e, r, i, a, c) {
    i = i.render;
    var m = r.ref;
    return Nn(r, c), a = Rs(e, r, i, a, m, c), i = Ls(), e !== null && !xt ? (r.updateQueue = e.updateQueue, r.flags &= -2053, e.lanes &= ~c, ur(e, r, c)) : (De && i && vs(r), r.flags |= 1, mt(e, r, a, c), r.child);
  }
  function up(e, r, i, a, c) {
    if (e === null) {
      var m = i.type;
      return typeof m == "function" && !du(m) && m.defaultProps === void 0 && i.compare === null && i.defaultProps === void 0 ? (r.tag = 15, r.type = m, cp(e, r, m, a, c)) : (e = yo(i.type, null, a, r, r.mode, c), e.ref = r.ref, e.return = r, r.child = e);
    }
    if (m = e.child, (e.lanes & c) === 0) {
      var b = m.memoizedProps;
      if (i = i.compare, i = i !== null ? i : yl, i(b, a) && e.ref === r.ref) return ur(e, r, c);
    }
    return r.flags |= 1, e = Ir(m, a), e.ref = r.ref, e.return = r, r.child = e;
  }
  function cp(e, r, i, a, c) {
    if (e !== null) {
      var m = e.memoizedProps;
      if (yl(m, a) && e.ref === r.ref) if (xt = !1, r.pendingProps = a = m, (e.lanes & c) !== 0) (e.flags & 131072) !== 0 && (xt = !0);
      else return r.lanes = e.lanes, ur(e, r, c);
    }
    return Hs(e, r, i, a, c);
  }
  function dp(e, r, i) {
    var a = r.pendingProps, c = a.children, m = e !== null ? e.memoizedState : null;
    if (a.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Re(Rn, Nt), Nt |= i;
    else {
      if ((i & 1073741824) === 0) return e = m !== null ? m.baseLanes | i : i, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, r.updateQueue = null, Re(Rn, Nt), Nt |= e, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, a = m !== null ? m.baseLanes : i, Re(Rn, Nt), Nt |= a;
    }
    else m !== null ? (a = m.baseLanes | i, r.memoizedState = null) : a = i, Re(Rn, Nt), Nt |= a;
    return mt(e, r, c, i), r.child;
  }
  function fp(e, r) {
    var i = r.ref;
    (e === null && i !== null || e !== null && e.ref !== i) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Hs(e, r, i, a, c) {
    var m = bt(i) ? qr : st.current;
    return m = En(r, m), Nn(r, c), i = Rs(e, r, i, a, m, c), a = Ls(), e !== null && !xt ? (r.updateQueue = e.updateQueue, r.flags &= -2053, e.lanes &= ~c, ur(e, r, c)) : (De && a && vs(r), r.flags |= 1, mt(e, r, i, c), r.child);
  }
  function pp(e, r, i, a, c) {
    if (bt(i)) {
      var m = !0;
      Vi(r);
    } else m = !1;
    if (Nn(r, c), r.stateNode === null) oo(e, r), tp(r, i, a), Os(r, i, a, c), a = !0;
    else if (e === null) {
      var b = r.stateNode, k = r.memoizedProps;
      b.props = k;
      var P = b.context, D = i.contextType;
      typeof D == "object" && D !== null ? D = Lt(D) : (D = bt(i) ? qr : st.current, D = En(r, D));
      var Q = i.getDerivedStateFromProps, Z = typeof Q == "function" || typeof b.getSnapshotBeforeUpdate == "function";
      Z || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (k !== a || P !== D) && rp(r, b, a, D), Pr = !1;
      var q = r.memoizedState;
      b.state = q, Xi(r, a, b, c), P = r.memoizedState, k !== a || q !== P || yt.current || Pr ? (typeof Q == "function" && (Ds(r, i, Q, a), P = r.memoizedState), (k = Pr || ep(r, i, k, a, q, P, D)) ? (Z || typeof b.UNSAFE_componentWillMount != "function" && typeof b.componentWillMount != "function" || (typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount()), typeof b.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof b.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = a, r.memoizedState = P), b.props = a, b.state = P, b.context = D, a = k) : (typeof b.componentDidMount == "function" && (r.flags |= 4194308), a = !1);
    } else {
      b = r.stateNode, Pf(e, r), k = r.memoizedProps, D = r.type === r.elementType ? k : Bt(r.type, k), b.props = D, Z = r.pendingProps, q = b.context, P = i.contextType, typeof P == "object" && P !== null ? P = Lt(P) : (P = bt(i) ? qr : st.current, P = En(r, P));
      var re = i.getDerivedStateFromProps;
      (Q = typeof re == "function" || typeof b.getSnapshotBeforeUpdate == "function") || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (k !== Z || q !== P) && rp(r, b, a, P), Pr = !1, q = r.memoizedState, b.state = q, Xi(r, a, b, c);
      var ie = r.memoizedState;
      k !== Z || q !== ie || yt.current || Pr ? (typeof re == "function" && (Ds(r, i, re, a), ie = r.memoizedState), (D = Pr || ep(r, i, D, a, q, ie, P) || !1) ? (Q || typeof b.UNSAFE_componentWillUpdate != "function" && typeof b.componentWillUpdate != "function" || (typeof b.componentWillUpdate == "function" && b.componentWillUpdate(a, ie, P), typeof b.UNSAFE_componentWillUpdate == "function" && b.UNSAFE_componentWillUpdate(a, ie, P)), typeof b.componentDidUpdate == "function" && (r.flags |= 4), typeof b.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof b.componentDidUpdate != "function" || k === e.memoizedProps && q === e.memoizedState || (r.flags |= 4), typeof b.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && q === e.memoizedState || (r.flags |= 1024), r.memoizedProps = a, r.memoizedState = ie), b.props = a, b.state = ie, b.context = P, a = D) : (typeof b.componentDidUpdate != "function" || k === e.memoizedProps && q === e.memoizedState || (r.flags |= 4), typeof b.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && q === e.memoizedState || (r.flags |= 1024), a = !1);
    }
    return Us(e, r, i, a, m, c);
  }
  function Us(e, r, i, a, c, m) {
    fp(e, r);
    var b = (r.flags & 128) !== 0;
    if (!a && !b) return c && yf(r, i, !1), ur(e, r, m);
    a = r.stateNode, u1.current = r;
    var k = b && typeof i.getDerivedStateFromError != "function" ? null : a.render();
    return r.flags |= 1, e !== null && b ? (r.child = Fn(r, e.child, null, m), r.child = Fn(r, null, k, m)) : mt(e, r, k, m), r.memoizedState = a.state, c && yf(r, i, !0), r.child;
  }
  function hp(e) {
    var r = e.stateNode;
    r.pendingContext ? gf(e, r.pendingContext, r.pendingContext !== r.context) : r.context && gf(e, r.context, !1), Fs(e, r.containerInfo);
  }
  function mp(e, r, i, a, c) {
    return _n(), ws(c), r.flags |= 256, mt(e, r, i, a), r.child;
  }
  var Ws = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Gs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function gp(e, r, i) {
    var a = r.pendingProps, c = Ve.current, m = !1, b = (r.flags & 128) !== 0, k;
    if ((k = b) || (k = e !== null && e.memoizedState === null ? !1 : (c & 2) !== 0), k ? (m = !0, r.flags &= -129) : (e === null || e.memoizedState !== null) && (c |= 1), Re(Ve, c & 1), e === null)
      return xs(r), e = r.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : e.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (b = a.children, e = a.fallback, m ? (a = r.mode, m = r.child, b = { mode: "hidden", children: b }, (a & 1) === 0 && m !== null ? (m.childLanes = 0, m.pendingProps = b) : m = bo(b, a, 0, null), e = ln(e, a, i, null), m.return = r, e.return = r, m.sibling = e, r.child = m, r.child.memoizedState = Gs(i), r.memoizedState = Ws, e) : qs(r, b));
    if (c = e.memoizedState, c !== null && (k = c.dehydrated, k !== null)) return c1(e, r, b, a, k, c, i);
    if (m) {
      m = a.fallback, b = r.mode, c = e.child, k = c.sibling;
      var P = { mode: "hidden", children: a.children };
      return (b & 1) === 0 && r.child !== c ? (a = r.child, a.childLanes = 0, a.pendingProps = P, r.deletions = null) : (a = Ir(c, P), a.subtreeFlags = c.subtreeFlags & 14680064), k !== null ? m = Ir(k, m) : (m = ln(m, b, i, null), m.flags |= 2), m.return = r, a.return = r, a.sibling = m, r.child = a, a = m, m = r.child, b = e.child.memoizedState, b = b === null ? Gs(i) : { baseLanes: b.baseLanes | i, cachePool: null, transitions: b.transitions }, m.memoizedState = b, m.childLanes = e.childLanes & ~i, r.memoizedState = Ws, a;
    }
    return m = e.child, e = m.sibling, a = Ir(m, { mode: "visible", children: a.children }), (r.mode & 1) === 0 && (a.lanes = i), a.return = r, a.sibling = null, e !== null && (i = r.deletions, i === null ? (r.deletions = [e], r.flags |= 16) : i.push(e)), r.child = a, r.memoizedState = null, a;
  }
  function qs(e, r) {
    return r = bo({ mode: "visible", children: r }, e.mode, 0, null), r.return = e, e.child = r;
  }
  function io(e, r, i, a) {
    return a !== null && ws(a), Fn(r, e.child, null, i), e = qs(r, r.pendingProps.children), e.flags |= 2, r.memoizedState = null, e;
  }
  function c1(e, r, i, a, c, m, b) {
    if (i)
      return r.flags & 256 ? (r.flags &= -257, a = Vs(Error(l(422))), io(e, r, b, a)) : r.memoizedState !== null ? (r.child = e.child, r.flags |= 128, null) : (m = a.fallback, c = r.mode, a = bo({ mode: "visible", children: a.children }, c, 0, null), m = ln(m, c, b, null), m.flags |= 2, a.return = r, m.return = r, a.sibling = m, r.child = a, (r.mode & 1) !== 0 && Fn(r, e.child, null, b), r.child.memoizedState = Gs(b), r.memoizedState = Ws, m);
    if ((r.mode & 1) === 0) return io(e, r, b, null);
    if (c.data === "$!") {
      if (a = c.nextSibling && c.nextSibling.dataset, a) var k = a.dgst;
      return a = k, m = Error(l(419)), a = Vs(m, a, void 0), io(e, r, b, a);
    }
    if (k = (b & e.childLanes) !== 0, xt || k) {
      if (a = et, a !== null) {
        switch (b & -b) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
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
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = (c & (a.suspendedLanes | b)) !== 0 ? 0 : c, c !== 0 && c !== m.retryLane && (m.retryLane = c, ar(e, c), Wt(a, e, c, -1));
      }
      return cu(), a = Vs(Error(l(421))), io(e, r, b, a);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = e.child, r = C1.bind(null, e), c._reactRetry = r, null) : (e = m.treeContext, Pt = $r(c.nextSibling), Ft = r, De = !0, Vt = null, e !== null && (zt[Rt++] = ir, zt[Rt++] = or, zt[Rt++] = Qr, ir = e.id, or = e.overflow, Qr = r), r = qs(r, a.children), r.flags |= 4096, r);
  }
  function vp(e, r, i) {
    e.lanes |= r;
    var a = e.alternate;
    a !== null && (a.lanes |= r), $s(e.return, r, i);
  }
  function Qs(e, r, i, a, c) {
    var m = e.memoizedState;
    m === null ? e.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: a, tail: i, tailMode: c } : (m.isBackwards = r, m.rendering = null, m.renderingStartTime = 0, m.last = a, m.tail = i, m.tailMode = c);
  }
  function yp(e, r, i) {
    var a = r.pendingProps, c = a.revealOrder, m = a.tail;
    if (mt(e, r, a.children, i), a = Ve.current, (a & 2) !== 0) a = a & 1 | 2, r.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = r.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && vp(e, i, r);
        else if (e.tag === 19) vp(e, i, r);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === r) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === r) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      a &= 1;
    }
    if (Re(Ve, a), (r.mode & 1) === 0) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (i = r.child, c = null; i !== null; ) e = i.alternate, e !== null && Yi(e) === null && (c = i), i = i.sibling;
        i = c, i === null ? (c = r.child, r.child = null) : (c = i.sibling, i.sibling = null), Qs(r, !1, c, i, m);
        break;
      case "backwards":
        for (i = null, c = r.child, r.child = null; c !== null; ) {
          if (e = c.alternate, e !== null && Yi(e) === null) {
            r.child = c;
            break;
          }
          e = c.sibling, c.sibling = i, i = c, c = e;
        }
        Qs(r, !0, i, null, m);
        break;
      case "together":
        Qs(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function oo(e, r) {
    (r.mode & 1) === 0 && e !== null && (e.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function ur(e, r, i) {
    if (e !== null && (r.dependencies = e.dependencies), en |= r.lanes, (i & r.childLanes) === 0) return null;
    if (e !== null && r.child !== e.child) throw Error(l(153));
    if (r.child !== null) {
      for (e = r.child, i = Ir(e, e.pendingProps), r.child = i, i.return = r; e.sibling !== null; ) e = e.sibling, i = i.sibling = Ir(e, e.pendingProps), i.return = r;
      i.sibling = null;
    }
    return r.child;
  }
  function d1(e, r, i) {
    switch (r.tag) {
      case 3:
        hp(r), _n();
        break;
      case 5:
        Af(r);
        break;
      case 1:
        bt(r.type) && Vi(r);
        break;
      case 4:
        Fs(r, r.stateNode.containerInfo);
        break;
      case 10:
        var a = r.type._context, c = r.memoizedProps.value;
        Re(qi, a._currentValue), a._currentValue = c;
        break;
      case 13:
        if (a = r.memoizedState, a !== null)
          return a.dehydrated !== null ? (Re(Ve, Ve.current & 1), r.flags |= 128, null) : (i & r.child.childLanes) !== 0 ? gp(e, r, i) : (Re(Ve, Ve.current & 1), e = ur(e, r, i), e !== null ? e.sibling : null);
        Re(Ve, Ve.current & 1);
        break;
      case 19:
        if (a = (i & r.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (a) return yp(e, r, i);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Re(Ve, Ve.current), a) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, dp(e, r, i);
    }
    return ur(e, r, i);
  }
  var bp, Zs, xp, wp;
  bp = function(e, r) {
    for (var i = r.child; i !== null; ) {
      if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
      else if (i.tag !== 4 && i.child !== null) {
        i.child.return = i, i = i.child;
        continue;
      }
      if (i === r) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === r) return;
        i = i.return;
      }
      i.sibling.return = i.return, i = i.sibling;
    }
  }, Zs = function() {
  }, xp = function(e, r, i, a) {
    var c = e.memoizedProps;
    if (c !== a) {
      e = r.stateNode, Yr(Jt.current);
      var m = null;
      switch (i) {
        case "input":
          c = Ue(e, c), a = Ue(e, a), m = [];
          break;
        case "select":
          c = B({}, c, { value: void 0 }), a = B({}, a, { value: void 0 }), m = [];
          break;
        case "textarea":
          c = Fa(e, c), a = Fa(e, a), m = [];
          break;
        default:
          typeof c.onClick != "function" && typeof a.onClick == "function" && (e.onclick = Ki);
      }
      Na(i, a);
      var b;
      i = null;
      for (D in c) if (!a.hasOwnProperty(D) && c.hasOwnProperty(D) && c[D] != null) if (D === "style") {
        var k = c[D];
        for (b in k) k.hasOwnProperty(b) && (i || (i = {}), i[b] = "");
      } else D !== "dangerouslySetInnerHTML" && D !== "children" && D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && D !== "autoFocus" && (s.hasOwnProperty(D) ? m || (m = []) : (m = m || []).push(D, null));
      for (D in a) {
        var P = a[D];
        if (k = c?.[D], a.hasOwnProperty(D) && P !== k && (P != null || k != null)) if (D === "style") if (k) {
          for (b in k) !k.hasOwnProperty(b) || P && P.hasOwnProperty(b) || (i || (i = {}), i[b] = "");
          for (b in P) P.hasOwnProperty(b) && k[b] !== P[b] && (i || (i = {}), i[b] = P[b]);
        } else i || (m || (m = []), m.push(
          D,
          i
        )), i = P;
        else D === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0, k = k ? k.__html : void 0, P != null && k !== P && (m = m || []).push(D, P)) : D === "children" ? typeof P != "string" && typeof P != "number" || (m = m || []).push(D, "" + P) : D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && (s.hasOwnProperty(D) ? (P != null && D === "onScroll" && Le("scroll", e), m || k === P || (m = [])) : (m = m || []).push(D, P));
      }
      i && (m = m || []).push("style", i);
      var D = m;
      (r.updateQueue = D) && (r.flags |= 4);
    }
  }, wp = function(e, r, i, a) {
    i !== a && (r.flags |= 4);
  };
  function zl(e, r) {
    if (!De) switch (e.tailMode) {
      case "hidden":
        r = e.tail;
        for (var i = null; r !== null; ) r.alternate !== null && (i = r), r = r.sibling;
        i === null ? e.tail = null : i.sibling = null;
        break;
      case "collapsed":
        i = e.tail;
        for (var a = null; i !== null; ) i.alternate !== null && (a = i), i = i.sibling;
        a === null ? r || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
    }
  }
  function ct(e) {
    var r = e.alternate !== null && e.alternate.child === e.child, i = 0, a = 0;
    if (r) for (var c = e.child; c !== null; ) i |= c.lanes | c.childLanes, a |= c.subtreeFlags & 14680064, a |= c.flags & 14680064, c.return = e, c = c.sibling;
    else for (c = e.child; c !== null; ) i |= c.lanes | c.childLanes, a |= c.subtreeFlags, a |= c.flags, c.return = e, c = c.sibling;
    return e.subtreeFlags |= a, e.childLanes = i, r;
  }
  function f1(e, r, i) {
    var a = r.pendingProps;
    switch (ys(r), r.tag) {
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
        return ct(r), null;
      case 1:
        return bt(r.type) && Oi(), ct(r), null;
      case 3:
        return a = r.stateNode, Tn(), Ie(yt), Ie(st), Ts(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Wi(r) ? r.flags |= 4 : e === null || e.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, Vt !== null && (au(Vt), Vt = null))), Zs(e, r), ct(r), null;
      case 5:
        Ps(r);
        var c = Yr(Fl.current);
        if (i = r.type, e !== null && r.stateNode != null) xp(e, r, i, a, c), e.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!a) {
            if (r.stateNode === null) throw Error(l(166));
            return ct(r), null;
          }
          if (e = Yr(Jt.current), Wi(r)) {
            a = r.stateNode, i = r.type;
            var m = r.memoizedProps;
            switch (a[Yt] = r, a[Cl] = m, e = (r.mode & 1) !== 0, i) {
              case "dialog":
                Le("cancel", a), Le("close", a);
                break;
              case "iframe":
              case "object":
              case "embed":
                Le("load", a);
                break;
              case "video":
              case "audio":
                for (c = 0; c < xl.length; c++) Le(xl[c], a);
                break;
              case "source":
                Le("error", a);
                break;
              case "img":
              case "image":
              case "link":
                Le(
                  "error",
                  a
                ), Le("load", a);
                break;
              case "details":
                Le("toggle", a);
                break;
              case "input":
                Jn(a, m), Le("invalid", a);
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!m.multiple }, Le("invalid", a);
                break;
              case "textarea":
                nd(a, m), Le("invalid", a);
            }
            Na(i, m), c = null;
            for (var b in m) if (m.hasOwnProperty(b)) {
              var k = m[b];
              b === "children" ? typeof k == "string" ? a.textContent !== k && (m.suppressHydrationWarning !== !0 && Mi(a.textContent, k, e), c = ["children", k]) : typeof k == "number" && a.textContent !== "" + k && (m.suppressHydrationWarning !== !0 && Mi(
                a.textContent,
                k,
                e
              ), c = ["children", "" + k]) : s.hasOwnProperty(b) && k != null && b === "onScroll" && Le("scroll", a);
            }
            switch (i) {
              case "input":
                ee(a), rd(a, m, !0);
                break;
              case "textarea":
                ee(a), id(a);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof m.onClick == "function" && (a.onclick = Ki);
            }
            a = c, r.updateQueue = a, a !== null && (r.flags |= 4);
          } else {
            b = c.nodeType === 9 ? c : c.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = od(i)), e === "http://www.w3.org/1999/xhtml" ? i === "script" ? (e = b.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof a.is == "string" ? e = b.createElement(i, { is: a.is }) : (e = b.createElement(i), i === "select" && (b = e, a.multiple ? b.multiple = !0 : a.size && (b.size = a.size))) : e = b.createElementNS(e, i), e[Yt] = r, e[Cl] = a, bp(e, r, !1, !1), r.stateNode = e;
            e: {
              switch (b = Ta(i, a), i) {
                case "dialog":
                  Le("cancel", e), Le("close", e), c = a;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Le("load", e), c = a;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < xl.length; c++) Le(xl[c], e);
                  c = a;
                  break;
                case "source":
                  Le("error", e), c = a;
                  break;
                case "img":
                case "image":
                case "link":
                  Le(
                    "error",
                    e
                  ), Le("load", e), c = a;
                  break;
                case "details":
                  Le("toggle", e), c = a;
                  break;
                case "input":
                  Jn(e, a), c = Ue(e, a), Le("invalid", e);
                  break;
                case "option":
                  c = a;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!a.multiple }, c = B({}, a, { value: void 0 }), Le("invalid", e);
                  break;
                case "textarea":
                  nd(e, a), c = Fa(e, a), Le("invalid", e);
                  break;
                default:
                  c = a;
              }
              Na(i, c), k = c;
              for (m in k) if (k.hasOwnProperty(m)) {
                var P = k[m];
                m === "style" ? ud(e, P) : m === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0, P != null && ad(e, P)) : m === "children" ? typeof P == "string" ? (i !== "textarea" || P !== "") && tl(e, P) : typeof P == "number" && tl(e, "" + P) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (s.hasOwnProperty(m) ? P != null && m === "onScroll" && Le("scroll", e) : P != null && X(e, m, P, b));
              }
              switch (i) {
                case "input":
                  ee(e), rd(e, a, !1);
                  break;
                case "textarea":
                  ee(e), id(e);
                  break;
                case "option":
                  a.value != null && e.setAttribute("value", "" + $e(a.value));
                  break;
                case "select":
                  e.multiple = !!a.multiple, m = a.value, m != null ? fn(e, !!a.multiple, m, !1) : a.defaultValue != null && fn(
                    e,
                    !!a.multiple,
                    a.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (e.onclick = Ki);
              }
              switch (i) {
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
            a && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return ct(r), null;
      case 6:
        if (e && r.stateNode != null) wp(e, r, e.memoizedProps, a);
        else {
          if (typeof a != "string" && r.stateNode === null) throw Error(l(166));
          if (i = Yr(Fl.current), Yr(Jt.current), Wi(r)) {
            if (a = r.stateNode, i = r.memoizedProps, a[Yt] = r, (m = a.nodeValue !== i) && (e = Ft, e !== null)) switch (e.tag) {
              case 3:
                Mi(a.nodeValue, i, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Mi(a.nodeValue, i, (e.mode & 1) !== 0);
            }
            m && (r.flags |= 4);
          } else a = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(a), a[Yt] = r, r.stateNode = a;
        }
        return ct(r), null;
      case 13:
        if (Ie(Ve), a = r.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (De && Pt !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) Ef(), _n(), r.flags |= 98560, m = !1;
          else if (m = Wi(r), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!m) throw Error(l(318));
              if (m = r.memoizedState, m = m !== null ? m.dehydrated : null, !m) throw Error(l(317));
              m[Yt] = r;
            } else _n(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            ct(r), m = !1;
          } else Vt !== null && (au(Vt), Vt = null), m = !0;
          if (!m) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = i, r) : (a = a !== null, a !== (e !== null && e.memoizedState !== null) && a && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (e === null || (Ve.current & 1) !== 0 ? Ye === 0 && (Ye = 3) : cu())), r.updateQueue !== null && (r.flags |= 4), ct(r), null);
      case 4:
        return Tn(), Zs(e, r), e === null && wl(r.stateNode.containerInfo), ct(r), null;
      case 10:
        return Es(r.type._context), ct(r), null;
      case 17:
        return bt(r.type) && Oi(), ct(r), null;
      case 19:
        if (Ie(Ve), m = r.memoizedState, m === null) return ct(r), null;
        if (a = (r.flags & 128) !== 0, b = m.rendering, b === null) if (a) zl(m, !1);
        else {
          if (Ye !== 0 || e !== null && (e.flags & 128) !== 0) for (e = r.child; e !== null; ) {
            if (b = Yi(e), b !== null) {
              for (r.flags |= 128, zl(m, !1), a = b.updateQueue, a !== null && (r.updateQueue = a, r.flags |= 4), r.subtreeFlags = 0, a = i, i = r.child; i !== null; ) m = i, e = a, m.flags &= 14680066, b = m.alternate, b === null ? (m.childLanes = 0, m.lanes = e, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = b.childLanes, m.lanes = b.lanes, m.child = b.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = b.memoizedProps, m.memoizedState = b.memoizedState, m.updateQueue = b.updateQueue, m.type = b.type, e = b.dependencies, m.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), i = i.sibling;
              return Re(Ve, Ve.current & 1 | 2), r.child;
            }
            e = e.sibling;
          }
          m.tail !== null && Ge() > Ln && (r.flags |= 128, a = !0, zl(m, !1), r.lanes = 4194304);
        }
        else {
          if (!a) if (e = Yi(b), e !== null) {
            if (r.flags |= 128, a = !0, i = e.updateQueue, i !== null && (r.updateQueue = i, r.flags |= 4), zl(m, !0), m.tail === null && m.tailMode === "hidden" && !b.alternate && !De) return ct(r), null;
          } else 2 * Ge() - m.renderingStartTime > Ln && i !== 1073741824 && (r.flags |= 128, a = !0, zl(m, !1), r.lanes = 4194304);
          m.isBackwards ? (b.sibling = r.child, r.child = b) : (i = m.last, i !== null ? i.sibling = b : r.child = b, m.last = b);
        }
        return m.tail !== null ? (r = m.tail, m.rendering = r, m.tail = r.sibling, m.renderingStartTime = Ge(), r.sibling = null, i = Ve.current, Re(Ve, a ? i & 1 | 2 : i & 1), r) : (ct(r), null);
      case 22:
      case 23:
        return uu(), a = r.memoizedState !== null, e !== null && e.memoizedState !== null !== a && (r.flags |= 8192), a && (r.mode & 1) !== 0 ? (Nt & 1073741824) !== 0 && (ct(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : ct(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, r.tag));
  }
  function p1(e, r) {
    switch (ys(r), r.tag) {
      case 1:
        return bt(r.type) && Oi(), e = r.flags, e & 65536 ? (r.flags = e & -65537 | 128, r) : null;
      case 3:
        return Tn(), Ie(yt), Ie(st), Ts(), e = r.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (r.flags = e & -65537 | 128, r) : null;
      case 5:
        return Ps(r), null;
      case 13:
        if (Ie(Ve), e = r.memoizedState, e !== null && e.dehydrated !== null) {
          if (r.alternate === null) throw Error(l(340));
          _n();
        }
        return e = r.flags, e & 65536 ? (r.flags = e & -65537 | 128, r) : null;
      case 19:
        return Ie(Ve), null;
      case 4:
        return Tn(), null;
      case 10:
        return Es(r.type._context), null;
      case 22:
      case 23:
        return uu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ao = !1, dt = !1, h1 = typeof WeakSet == "function" ? WeakSet : Set, le = null;
  function zn(e, r) {
    var i = e.ref;
    if (i !== null) if (typeof i == "function") try {
      i(null);
    } catch (a) {
      We(e, r, a);
    }
    else i.current = null;
  }
  function Xs(e, r, i) {
    try {
      i();
    } catch (a) {
      We(e, r, a);
    }
  }
  var Sp = !1;
  function m1(e, r) {
    if (us = _i, e = Jd(), ts(e)) {
      if ("selectionStart" in e) var i = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        i = (i = e.ownerDocument) && i.defaultView || window;
        var a = i.getSelection && i.getSelection();
        if (a && a.rangeCount !== 0) {
          i = a.anchorNode;
          var c = a.anchorOffset, m = a.focusNode;
          a = a.focusOffset;
          try {
            i.nodeType, m.nodeType;
          } catch {
            i = null;
            break e;
          }
          var b = 0, k = -1, P = -1, D = 0, Q = 0, Z = e, q = null;
          t: for (; ; ) {
            for (var re; Z !== i || c !== 0 && Z.nodeType !== 3 || (k = b + c), Z !== m || a !== 0 && Z.nodeType !== 3 || (P = b + a), Z.nodeType === 3 && (b += Z.nodeValue.length), (re = Z.firstChild) !== null; )
              q = Z, Z = re;
            for (; ; ) {
              if (Z === e) break t;
              if (q === i && ++D === c && (k = b), q === m && ++Q === a && (P = b), (re = Z.nextSibling) !== null) break;
              Z = q, q = Z.parentNode;
            }
            Z = re;
          }
          i = k === -1 || P === -1 ? null : { start: k, end: P };
        } else i = null;
      }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (cs = { focusedElem: e, selectionRange: i }, _i = !1, le = r; le !== null; ) if (r = le, e = r.child, (r.subtreeFlags & 1028) !== 0 && e !== null) e.return = r, le = e;
    else for (; le !== null; ) {
      r = le;
      try {
        var ie = r.alternate;
        if ((r.flags & 1024) !== 0) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ie !== null) {
              var oe = ie.memoizedProps, qe = ie.memoizedState, I = r.stateNode, A = I.getSnapshotBeforeUpdate(r.elementType === r.type ? oe : Bt(r.type, oe), qe);
              I.__reactInternalSnapshotBeforeUpdate = A;
            }
            break;
          case 3:
            var j = r.stateNode.containerInfo;
            j.nodeType === 1 ? j.textContent = "" : j.nodeType === 9 && j.documentElement && j.removeChild(j.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(l(163));
        }
      } catch (Y) {
        We(r, r.return, Y);
      }
      if (e = r.sibling, e !== null) {
        e.return = r.return, le = e;
        break;
      }
      le = r.return;
    }
    return ie = Sp, Sp = !1, ie;
  }
  function Rl(e, r, i) {
    var a = r.updateQueue;
    if (a = a !== null ? a.lastEffect : null, a !== null) {
      var c = a = a.next;
      do {
        if ((c.tag & e) === e) {
          var m = c.destroy;
          c.destroy = void 0, m !== void 0 && Xs(r, i, m);
        }
        c = c.next;
      } while (c !== a);
    }
  }
  function so(e, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var i = r = r.next;
      do {
        if ((i.tag & e) === e) {
          var a = i.create;
          i.destroy = a();
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function Ys(e) {
    var r = e.ref;
    if (r !== null) {
      var i = e.stateNode;
      switch (e.tag) {
        case 5:
          e = i;
          break;
        default:
          e = i;
      }
      typeof r == "function" ? r(e) : r.current = e;
    }
  }
  function Cp(e) {
    var r = e.alternate;
    r !== null && (e.alternate = null, Cp(r)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (r = e.stateNode, r !== null && (delete r[Yt], delete r[Cl], delete r[hs], delete r[Xy], delete r[Yy])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Ep(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function $p(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ep(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Js(e, r, i) {
    var a = e.tag;
    if (a === 5 || a === 6) e = e.stateNode, r ? i.nodeType === 8 ? i.parentNode.insertBefore(e, r) : i.insertBefore(e, r) : (i.nodeType === 8 ? (r = i.parentNode, r.insertBefore(e, i)) : (r = i, r.appendChild(e)), i = i._reactRootContainer, i != null || r.onclick !== null || (r.onclick = Ki));
    else if (a !== 4 && (e = e.child, e !== null)) for (Js(e, r, i), e = e.sibling; e !== null; ) Js(e, r, i), e = e.sibling;
  }
  function eu(e, r, i) {
    var a = e.tag;
    if (a === 5 || a === 6) e = e.stateNode, r ? i.insertBefore(e, r) : i.appendChild(e);
    else if (a !== 4 && (e = e.child, e !== null)) for (eu(e, r, i), e = e.sibling; e !== null; ) eu(e, r, i), e = e.sibling;
  }
  var it = null, Ht = !1;
  function Tr(e, r, i) {
    for (i = i.child; i !== null; ) kp(e, r, i), i = i.sibling;
  }
  function kp(e, r, i) {
    if (Xt && typeof Xt.onCommitFiberUnmount == "function") try {
      Xt.onCommitFiberUnmount(wi, i);
    } catch {
    }
    switch (i.tag) {
      case 5:
        dt || zn(i, r);
      case 6:
        var a = it, c = Ht;
        it = null, Tr(e, r, i), it = a, Ht = c, it !== null && (Ht ? (e = it, i = i.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i)) : it.removeChild(i.stateNode));
        break;
      case 18:
        it !== null && (Ht ? (e = it, i = i.stateNode, e.nodeType === 8 ? ps(e.parentNode, i) : e.nodeType === 1 && ps(e, i), fl(e)) : ps(it, i.stateNode));
        break;
      case 4:
        a = it, c = Ht, it = i.stateNode.containerInfo, Ht = !0, Tr(e, r, i), it = a, Ht = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!dt && (a = i.updateQueue, a !== null && (a = a.lastEffect, a !== null))) {
          c = a = a.next;
          do {
            var m = c, b = m.destroy;
            m = m.tag, b !== void 0 && ((m & 2) !== 0 || (m & 4) !== 0) && Xs(i, r, b), c = c.next;
          } while (c !== a);
        }
        Tr(e, r, i);
        break;
      case 1:
        if (!dt && (zn(i, r), a = i.stateNode, typeof a.componentWillUnmount == "function")) try {
          a.props = i.memoizedProps, a.state = i.memoizedState, a.componentWillUnmount();
        } catch (k) {
          We(i, r, k);
        }
        Tr(e, r, i);
        break;
      case 21:
        Tr(e, r, i);
        break;
      case 22:
        i.mode & 1 ? (dt = (a = dt) || i.memoizedState !== null, Tr(e, r, i), dt = a) : Tr(e, r, i);
        break;
      default:
        Tr(e, r, i);
    }
  }
  function _p(e) {
    var r = e.updateQueue;
    if (r !== null) {
      e.updateQueue = null;
      var i = e.stateNode;
      i === null && (i = e.stateNode = new h1()), r.forEach(function(a) {
        var c = E1.bind(null, e, a);
        i.has(a) || (i.add(a), a.then(c, c));
      });
    }
  }
  function Ut(e, r) {
    var i = r.deletions;
    if (i !== null) for (var a = 0; a < i.length; a++) {
      var c = i[a];
      try {
        var m = e, b = r, k = b;
        e: for (; k !== null; ) {
          switch (k.tag) {
            case 5:
              it = k.stateNode, Ht = !1;
              break e;
            case 3:
              it = k.stateNode.containerInfo, Ht = !0;
              break e;
            case 4:
              it = k.stateNode.containerInfo, Ht = !0;
              break e;
          }
          k = k.return;
        }
        if (it === null) throw Error(l(160));
        kp(m, b, c), it = null, Ht = !1;
        var P = c.alternate;
        P !== null && (P.return = null), c.return = null;
      } catch (D) {
        We(c, r, D);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Fp(r, e), r = r.sibling;
  }
  function Fp(e, r) {
    var i = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Ut(r, e), tr(e), a & 4) {
          try {
            Rl(3, e, e.return), so(3, e);
          } catch (oe) {
            We(e, e.return, oe);
          }
          try {
            Rl(5, e, e.return);
          } catch (oe) {
            We(e, e.return, oe);
          }
        }
        break;
      case 1:
        Ut(r, e), tr(e), a & 512 && i !== null && zn(i, i.return);
        break;
      case 5:
        if (Ut(r, e), tr(e), a & 512 && i !== null && zn(i, i.return), e.flags & 32) {
          var c = e.stateNode;
          try {
            tl(c, "");
          } catch (oe) {
            We(e, e.return, oe);
          }
        }
        if (a & 4 && (c = e.stateNode, c != null)) {
          var m = e.memoizedProps, b = i !== null ? i.memoizedProps : m, k = e.type, P = e.updateQueue;
          if (e.updateQueue = null, P !== null) try {
            k === "input" && m.type === "radio" && m.name != null && td(c, m), Ta(k, b);
            var D = Ta(k, m);
            for (b = 0; b < P.length; b += 2) {
              var Q = P[b], Z = P[b + 1];
              Q === "style" ? ud(c, Z) : Q === "dangerouslySetInnerHTML" ? ad(c, Z) : Q === "children" ? tl(c, Z) : X(c, Q, Z, D);
            }
            switch (k) {
              case "input":
                ka(c, m);
                break;
              case "textarea":
                ld(c, m);
                break;
              case "select":
                var q = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!m.multiple;
                var re = m.value;
                re != null ? fn(c, !!m.multiple, re, !1) : q !== !!m.multiple && (m.defaultValue != null ? fn(
                  c,
                  !!m.multiple,
                  m.defaultValue,
                  !0
                ) : fn(c, !!m.multiple, m.multiple ? [] : "", !1));
            }
            c[Cl] = m;
          } catch (oe) {
            We(e, e.return, oe);
          }
        }
        break;
      case 6:
        if (Ut(r, e), tr(e), a & 4) {
          if (e.stateNode === null) throw Error(l(162));
          c = e.stateNode, m = e.memoizedProps;
          try {
            c.nodeValue = m;
          } catch (oe) {
            We(e, e.return, oe);
          }
        }
        break;
      case 3:
        if (Ut(r, e), tr(e), a & 4 && i !== null && i.memoizedState.isDehydrated) try {
          fl(r.containerInfo);
        } catch (oe) {
          We(e, e.return, oe);
        }
        break;
      case 4:
        Ut(r, e), tr(e);
        break;
      case 13:
        Ut(r, e), tr(e), c = e.child, c.flags & 8192 && (m = c.memoizedState !== null, c.stateNode.isHidden = m, !m || c.alternate !== null && c.alternate.memoizedState !== null || (nu = Ge())), a & 4 && _p(e);
        break;
      case 22:
        if (Q = i !== null && i.memoizedState !== null, e.mode & 1 ? (dt = (D = dt) || Q, Ut(r, e), dt = D) : Ut(r, e), tr(e), a & 8192) {
          if (D = e.memoizedState !== null, (e.stateNode.isHidden = D) && !Q && (e.mode & 1) !== 0) for (le = e, Q = e.child; Q !== null; ) {
            for (Z = le = Q; le !== null; ) {
              switch (q = le, re = q.child, q.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Rl(4, q, q.return);
                  break;
                case 1:
                  zn(q, q.return);
                  var ie = q.stateNode;
                  if (typeof ie.componentWillUnmount == "function") {
                    a = q, i = q.return;
                    try {
                      r = a, ie.props = r.memoizedProps, ie.state = r.memoizedState, ie.componentWillUnmount();
                    } catch (oe) {
                      We(a, i, oe);
                    }
                  }
                  break;
                case 5:
                  zn(q, q.return);
                  break;
                case 22:
                  if (q.memoizedState !== null) {
                    Tp(Z);
                    continue;
                  }
              }
              re !== null ? (re.return = q, le = re) : Tp(Z);
            }
            Q = Q.sibling;
          }
          e: for (Q = null, Z = e; ; ) {
            if (Z.tag === 5) {
              if (Q === null) {
                Q = Z;
                try {
                  c = Z.stateNode, D ? (m = c.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (k = Z.stateNode, P = Z.memoizedProps.style, b = P != null && P.hasOwnProperty("display") ? P.display : null, k.style.display = sd("display", b));
                } catch (oe) {
                  We(e, e.return, oe);
                }
              }
            } else if (Z.tag === 6) {
              if (Q === null) try {
                Z.stateNode.nodeValue = D ? "" : Z.memoizedProps;
              } catch (oe) {
                We(e, e.return, oe);
              }
            } else if ((Z.tag !== 22 && Z.tag !== 23 || Z.memoizedState === null || Z === e) && Z.child !== null) {
              Z.child.return = Z, Z = Z.child;
              continue;
            }
            if (Z === e) break e;
            for (; Z.sibling === null; ) {
              if (Z.return === null || Z.return === e) break e;
              Q === Z && (Q = null), Z = Z.return;
            }
            Q === Z && (Q = null), Z.sibling.return = Z.return, Z = Z.sibling;
          }
        }
        break;
      case 19:
        Ut(r, e), tr(e), a & 4 && _p(e);
        break;
      case 21:
        break;
      default:
        Ut(
          r,
          e
        ), tr(e);
    }
  }
  function tr(e) {
    var r = e.flags;
    if (r & 2) {
      try {
        e: {
          for (var i = e.return; i !== null; ) {
            if (Ep(i)) {
              var a = i;
              break e;
            }
            i = i.return;
          }
          throw Error(l(160));
        }
        switch (a.tag) {
          case 5:
            var c = a.stateNode;
            a.flags & 32 && (tl(c, ""), a.flags &= -33);
            var m = $p(e);
            eu(e, m, c);
            break;
          case 3:
          case 4:
            var b = a.stateNode.containerInfo, k = $p(e);
            Js(e, k, b);
            break;
          default:
            throw Error(l(161));
        }
      } catch (P) {
        We(e, e.return, P);
      }
      e.flags &= -3;
    }
    r & 4096 && (e.flags &= -4097);
  }
  function g1(e, r, i) {
    le = e, Pp(e);
  }
  function Pp(e, r, i) {
    for (var a = (e.mode & 1) !== 0; le !== null; ) {
      var c = le, m = c.child;
      if (c.tag === 22 && a) {
        var b = c.memoizedState !== null || ao;
        if (!b) {
          var k = c.alternate, P = k !== null && k.memoizedState !== null || dt;
          k = ao;
          var D = dt;
          if (ao = b, (dt = P) && !D) for (le = c; le !== null; ) b = le, P = b.child, b.tag === 22 && b.memoizedState !== null ? Ap(c) : P !== null ? (P.return = b, le = P) : Ap(c);
          for (; m !== null; ) le = m, Pp(m), m = m.sibling;
          le = c, ao = k, dt = D;
        }
        Np(e);
      } else (c.subtreeFlags & 8772) !== 0 && m !== null ? (m.return = c, le = m) : Np(e);
    }
  }
  function Np(e) {
    for (; le !== null; ) {
      var r = le;
      if ((r.flags & 8772) !== 0) {
        var i = r.alternate;
        try {
          if ((r.flags & 8772) !== 0) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              dt || so(5, r);
              break;
            case 1:
              var a = r.stateNode;
              if (r.flags & 4 && !dt) if (i === null) a.componentDidMount();
              else {
                var c = r.elementType === r.type ? i.memoizedProps : Bt(r.type, i.memoizedProps);
                a.componentDidUpdate(c, i.memoizedState, a.__reactInternalSnapshotBeforeUpdate);
              }
              var m = r.updateQueue;
              m !== null && Tf(r, m, a);
              break;
            case 3:
              var b = r.updateQueue;
              if (b !== null) {
                if (i = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    i = r.child.stateNode;
                    break;
                  case 1:
                    i = r.child.stateNode;
                }
                Tf(r, b, i);
              }
              break;
            case 5:
              var k = r.stateNode;
              if (i === null && r.flags & 4) {
                i = k;
                var P = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    P.autoFocus && i.focus();
                    break;
                  case "img":
                    P.src && (i.src = P.src);
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
              if (r.memoizedState === null) {
                var D = r.alternate;
                if (D !== null) {
                  var Q = D.memoizedState;
                  if (Q !== null) {
                    var Z = Q.dehydrated;
                    Z !== null && fl(Z);
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
          dt || r.flags & 512 && Ys(r);
        } catch (q) {
          We(r, r.return, q);
        }
      }
      if (r === e) {
        le = null;
        break;
      }
      if (i = r.sibling, i !== null) {
        i.return = r.return, le = i;
        break;
      }
      le = r.return;
    }
  }
  function Tp(e) {
    for (; le !== null; ) {
      var r = le;
      if (r === e) {
        le = null;
        break;
      }
      var i = r.sibling;
      if (i !== null) {
        i.return = r.return, le = i;
        break;
      }
      le = r.return;
    }
  }
  function Ap(e) {
    for (; le !== null; ) {
      var r = le;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var i = r.return;
            try {
              so(4, r);
            } catch (P) {
              We(r, i, P);
            }
            break;
          case 1:
            var a = r.stateNode;
            if (typeof a.componentDidMount == "function") {
              var c = r.return;
              try {
                a.componentDidMount();
              } catch (P) {
                We(r, c, P);
              }
            }
            var m = r.return;
            try {
              Ys(r);
            } catch (P) {
              We(r, m, P);
            }
            break;
          case 5:
            var b = r.return;
            try {
              Ys(r);
            } catch (P) {
              We(r, b, P);
            }
        }
      } catch (P) {
        We(r, r.return, P);
      }
      if (r === e) {
        le = null;
        break;
      }
      var k = r.sibling;
      if (k !== null) {
        k.return = r.return, le = k;
        break;
      }
      le = r.return;
    }
  }
  var v1 = Math.ceil, uo = J.ReactCurrentDispatcher, tu = J.ReactCurrentOwner, jt = J.ReactCurrentBatchConfig, ke = 0, et = null, Qe = null, ot = 0, Nt = 0, Rn = kr(0), Ye = 0, Ll = null, en = 0, co = 0, ru = 0, Il = null, wt = null, nu = 0, Ln = 1 / 0, cr = null, fo = !1, lu = null, Ar = null, po = !1, zr = null, ho = 0, jl = 0, iu = null, mo = -1, go = 0;
  function gt() {
    return (ke & 6) !== 0 ? Ge() : mo !== -1 ? mo : mo = Ge();
  }
  function Rr(e) {
    return (e.mode & 1) === 0 ? 1 : (ke & 2) !== 0 && ot !== 0 ? ot & -ot : e1.transition !== null ? (go === 0 && (go = Ed()), go) : (e = Pe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : zd(e.type)), e);
  }
  function Wt(e, r, i, a) {
    if (50 < jl) throw jl = 0, iu = null, Error(l(185));
    al(e, i, a), ((ke & 2) === 0 || e !== et) && (e === et && ((ke & 2) === 0 && (co |= i), Ye === 4 && Lr(e, ot)), St(e, a), i === 1 && ke === 0 && (r.mode & 1) === 0 && (Ln = Ge() + 500, Bi && Fr()));
  }
  function St(e, r) {
    var i = e.callbackNode;
    ey(e, r);
    var a = Ei(e, e === et ? ot : 0);
    if (a === 0) i !== null && wd(i), e.callbackNode = null, e.callbackPriority = 0;
    else if (r = a & -a, e.callbackPriority !== r) {
      if (i != null && wd(i), r === 1) e.tag === 0 ? Jy(Rp.bind(null, e)) : bf(Rp.bind(null, e)), Qy(function() {
        (ke & 6) === 0 && Fr();
      }), i = null;
      else {
        switch ($d(a)) {
          case 1:
            i = Ma;
            break;
          case 4:
            i = Sd;
            break;
          case 16:
            i = xi;
            break;
          case 536870912:
            i = Cd;
            break;
          default:
            i = xi;
        }
        i = Vp(i, zp.bind(null, e));
      }
      e.callbackPriority = r, e.callbackNode = i;
    }
  }
  function zp(e, r) {
    if (mo = -1, go = 0, (ke & 6) !== 0) throw Error(l(327));
    var i = e.callbackNode;
    if (In() && e.callbackNode !== i) return null;
    var a = Ei(e, e === et ? ot : 0);
    if (a === 0) return null;
    if ((a & 30) !== 0 || (a & e.expiredLanes) !== 0 || r) r = vo(e, a);
    else {
      r = a;
      var c = ke;
      ke |= 2;
      var m = Ip();
      (et !== e || ot !== r) && (cr = null, Ln = Ge() + 500, rn(e, r));
      do
        try {
          x1();
          break;
        } catch (k) {
          Lp(e, k);
        }
      while (!0);
      Cs(), uo.current = m, ke = c, Qe !== null ? r = 0 : (et = null, ot = 0, r = Ye);
    }
    if (r !== 0) {
      if (r === 2 && (c = Ka(e), c !== 0 && (a = c, r = ou(e, c))), r === 1) throw i = Ll, rn(e, 0), Lr(e, a), St(e, Ge()), i;
      if (r === 6) Lr(e, a);
      else {
        if (c = e.current.alternate, (a & 30) === 0 && !y1(c) && (r = vo(e, a), r === 2 && (m = Ka(e), m !== 0 && (a = m, r = ou(e, m))), r === 1)) throw i = Ll, rn(e, 0), Lr(e, a), St(e, Ge()), i;
        switch (e.finishedWork = c, e.finishedLanes = a, r) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            nn(e, wt, cr);
            break;
          case 3:
            if (Lr(e, a), (a & 130023424) === a && (r = nu + 500 - Ge(), 10 < r)) {
              if (Ei(e, 0) !== 0) break;
              if (c = e.suspendedLanes, (c & a) !== a) {
                gt(), e.pingedLanes |= e.suspendedLanes & c;
                break;
              }
              e.timeoutHandle = fs(nn.bind(null, e, wt, cr), r);
              break;
            }
            nn(e, wt, cr);
            break;
          case 4:
            if (Lr(e, a), (a & 4194240) === a) break;
            for (r = e.eventTimes, c = -1; 0 < a; ) {
              var b = 31 - Dt(a);
              m = 1 << b, b = r[b], b > c && (c = b), a &= ~m;
            }
            if (a = c, a = Ge() - a, a = (120 > a ? 120 : 480 > a ? 480 : 1080 > a ? 1080 : 1920 > a ? 1920 : 3e3 > a ? 3e3 : 4320 > a ? 4320 : 1960 * v1(a / 1960)) - a, 10 < a) {
              e.timeoutHandle = fs(nn.bind(null, e, wt, cr), a);
              break;
            }
            nn(e, wt, cr);
            break;
          case 5:
            nn(e, wt, cr);
            break;
          default:
            throw Error(l(329));
        }
      }
    }
    return St(e, Ge()), e.callbackNode === i ? zp.bind(null, e) : null;
  }
  function ou(e, r) {
    var i = Il;
    return e.current.memoizedState.isDehydrated && (rn(e, r).flags |= 256), e = vo(e, r), e !== 2 && (r = wt, wt = i, r !== null && au(r)), e;
  }
  function au(e) {
    wt === null ? wt = e : wt.push.apply(wt, e);
  }
  function y1(e) {
    for (var r = e; ; ) {
      if (r.flags & 16384) {
        var i = r.updateQueue;
        if (i !== null && (i = i.stores, i !== null)) for (var a = 0; a < i.length; a++) {
          var c = i[a], m = c.getSnapshot;
          c = c.value;
          try {
            if (!Ot(m(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (i = r.child, r.subtreeFlags & 16384 && i !== null) i.return = r, r = i;
      else {
        if (r === e) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === e) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Lr(e, r) {
    for (r &= ~ru, r &= ~co, e.suspendedLanes |= r, e.pingedLanes &= ~r, e = e.expirationTimes; 0 < r; ) {
      var i = 31 - Dt(r), a = 1 << i;
      e[i] = -1, r &= ~a;
    }
  }
  function Rp(e) {
    if ((ke & 6) !== 0) throw Error(l(327));
    In();
    var r = Ei(e, 0);
    if ((r & 1) === 0) return St(e, Ge()), null;
    var i = vo(e, r);
    if (e.tag !== 0 && i === 2) {
      var a = Ka(e);
      a !== 0 && (r = a, i = ou(e, a));
    }
    if (i === 1) throw i = Ll, rn(e, 0), Lr(e, r), St(e, Ge()), i;
    if (i === 6) throw Error(l(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = r, nn(e, wt, cr), St(e, Ge()), null;
  }
  function su(e, r) {
    var i = ke;
    ke |= 1;
    try {
      return e(r);
    } finally {
      ke = i, ke === 0 && (Ln = Ge() + 500, Bi && Fr());
    }
  }
  function tn(e) {
    zr !== null && zr.tag === 0 && (ke & 6) === 0 && In();
    var r = ke;
    ke |= 1;
    var i = jt.transition, a = Pe;
    try {
      if (jt.transition = null, Pe = 1, e) return e();
    } finally {
      Pe = a, jt.transition = i, ke = r, (ke & 6) === 0 && Fr();
    }
  }
  function uu() {
    Nt = Rn.current, Ie(Rn);
  }
  function rn(e, r) {
    e.finishedWork = null, e.finishedLanes = 0;
    var i = e.timeoutHandle;
    if (i !== -1 && (e.timeoutHandle = -1, qy(i)), Qe !== null) for (i = Qe.return; i !== null; ) {
      var a = i;
      switch (ys(a), a.tag) {
        case 1:
          a = a.type.childContextTypes, a != null && Oi();
          break;
        case 3:
          Tn(), Ie(yt), Ie(st), Ts();
          break;
        case 5:
          Ps(a);
          break;
        case 4:
          Tn();
          break;
        case 13:
          Ie(Ve);
          break;
        case 19:
          Ie(Ve);
          break;
        case 10:
          Es(a.type._context);
          break;
        case 22:
        case 23:
          uu();
      }
      i = i.return;
    }
    if (et = e, Qe = e = Ir(e.current, null), ot = Nt = r, Ye = 0, Ll = null, ru = co = en = 0, wt = Il = null, Xr !== null) {
      for (r = 0; r < Xr.length; r++) if (i = Xr[r], a = i.interleaved, a !== null) {
        i.interleaved = null;
        var c = a.next, m = i.pending;
        if (m !== null) {
          var b = m.next;
          m.next = c, a.next = b;
        }
        i.pending = a;
      }
      Xr = null;
    }
    return e;
  }
  function Lp(e, r) {
    do {
      var i = Qe;
      try {
        if (Cs(), Ji.current = no, eo) {
          for (var a = Be.memoizedState; a !== null; ) {
            var c = a.queue;
            c !== null && (c.pending = null), a = a.next;
          }
          eo = !1;
        }
        if (Jr = 0, Je = Xe = Be = null, Pl = !1, Nl = 0, tu.current = null, i === null || i.return === null) {
          Ye = 1, Ll = r, Qe = null;
          break;
        }
        e: {
          var m = e, b = i.return, k = i, P = r;
          if (r = ot, k.flags |= 32768, P !== null && typeof P == "object" && typeof P.then == "function") {
            var D = P, Q = k, Z = Q.tag;
            if ((Q.mode & 1) === 0 && (Z === 0 || Z === 11 || Z === 15)) {
              var q = Q.alternate;
              q ? (Q.updateQueue = q.updateQueue, Q.memoizedState = q.memoizedState, Q.lanes = q.lanes) : (Q.updateQueue = null, Q.memoizedState = null);
            }
            var re = op(b);
            if (re !== null) {
              re.flags &= -257, ap(re, b, k, m, r), re.mode & 1 && ip(m, D, r), r = re, P = D;
              var ie = r.updateQueue;
              if (ie === null) {
                var oe = /* @__PURE__ */ new Set();
                oe.add(P), r.updateQueue = oe;
              } else ie.add(P);
              break e;
            } else {
              if ((r & 1) === 0) {
                ip(m, D, r), cu();
                break e;
              }
              P = Error(l(426));
            }
          } else if (De && k.mode & 1) {
            var qe = op(b);
            if (qe !== null) {
              (qe.flags & 65536) === 0 && (qe.flags |= 256), ap(qe, b, k, m, r), ws(An(P, k));
              break e;
            }
          }
          m = P = An(P, k), Ye !== 4 && (Ye = 2), Il === null ? Il = [m] : Il.push(m), m = b;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, r &= -r, m.lanes |= r;
                var I = np(m, P, r);
                Nf(m, I);
                break e;
              case 1:
                k = P;
                var A = m.type, j = m.stateNode;
                if ((m.flags & 128) === 0 && (typeof A.getDerivedStateFromError == "function" || j !== null && typeof j.componentDidCatch == "function" && (Ar === null || !Ar.has(j)))) {
                  m.flags |= 65536, r &= -r, m.lanes |= r;
                  var Y = lp(m, k, r);
                  Nf(m, Y);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        Mp(i);
      } catch (se) {
        r = se, Qe === i && i !== null && (Qe = i = i.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ip() {
    var e = uo.current;
    return uo.current = no, e === null ? no : e;
  }
  function cu() {
    (Ye === 0 || Ye === 3 || Ye === 2) && (Ye = 4), et === null || (en & 268435455) === 0 && (co & 268435455) === 0 || Lr(et, ot);
  }
  function vo(e, r) {
    var i = ke;
    ke |= 2;
    var a = Ip();
    (et !== e || ot !== r) && (cr = null, rn(e, r));
    do
      try {
        b1();
        break;
      } catch (c) {
        Lp(e, c);
      }
    while (!0);
    if (Cs(), ke = i, uo.current = a, Qe !== null) throw Error(l(261));
    return et = null, ot = 0, Ye;
  }
  function b1() {
    for (; Qe !== null; ) jp(Qe);
  }
  function x1() {
    for (; Qe !== null && !Uv(); ) jp(Qe);
  }
  function jp(e) {
    var r = Op(e.alternate, e, Nt);
    e.memoizedProps = e.pendingProps, r === null ? Mp(e) : Qe = r, tu.current = null;
  }
  function Mp(e) {
    var r = e;
    do {
      var i = r.alternate;
      if (e = r.return, (r.flags & 32768) === 0) {
        if (i = f1(i, r, Nt), i !== null) {
          Qe = i;
          return;
        }
      } else {
        if (i = p1(i, r), i !== null) {
          i.flags &= 32767, Qe = i;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Ye = 6, Qe = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        Qe = r;
        return;
      }
      Qe = r = e;
    } while (r !== null);
    Ye === 0 && (Ye = 5);
  }
  function nn(e, r, i) {
    var a = Pe, c = jt.transition;
    try {
      jt.transition = null, Pe = 1, w1(e, r, i, a);
    } finally {
      jt.transition = c, Pe = a;
    }
    return null;
  }
  function w1(e, r, i, a) {
    do
      In();
    while (zr !== null);
    if ((ke & 6) !== 0) throw Error(l(327));
    i = e.finishedWork;
    var c = e.finishedLanes;
    if (i === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, i === e.current) throw Error(l(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var m = i.lanes | i.childLanes;
    if (ty(e, m), e === et && (Qe = et = null, ot = 0), (i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0 || po || (po = !0, Vp(xi, function() {
      return In(), null;
    })), m = (i.flags & 15990) !== 0, (i.subtreeFlags & 15990) !== 0 || m) {
      m = jt.transition, jt.transition = null;
      var b = Pe;
      Pe = 1;
      var k = ke;
      ke |= 4, tu.current = null, m1(e, i), Fp(i, e), Oy(cs), _i = !!us, cs = us = null, e.current = i, g1(i), Wv(), ke = k, Pe = b, jt.transition = m;
    } else e.current = i;
    if (po && (po = !1, zr = e, ho = c), m = e.pendingLanes, m === 0 && (Ar = null), Qv(i.stateNode), St(e, Ge()), r !== null) for (a = e.onRecoverableError, i = 0; i < r.length; i++) c = r[i], a(c.value, { componentStack: c.stack, digest: c.digest });
    if (fo) throw fo = !1, e = lu, lu = null, e;
    return (ho & 1) !== 0 && e.tag !== 0 && In(), m = e.pendingLanes, (m & 1) !== 0 ? e === iu ? jl++ : (jl = 0, iu = e) : jl = 0, Fr(), null;
  }
  function In() {
    if (zr !== null) {
      var e = $d(ho), r = jt.transition, i = Pe;
      try {
        if (jt.transition = null, Pe = 16 > e ? 16 : e, zr === null) var a = !1;
        else {
          if (e = zr, zr = null, ho = 0, (ke & 6) !== 0) throw Error(l(331));
          var c = ke;
          for (ke |= 4, le = e.current; le !== null; ) {
            var m = le, b = m.child;
            if ((le.flags & 16) !== 0) {
              var k = m.deletions;
              if (k !== null) {
                for (var P = 0; P < k.length; P++) {
                  var D = k[P];
                  for (le = D; le !== null; ) {
                    var Q = le;
                    switch (Q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rl(8, Q, m);
                    }
                    var Z = Q.child;
                    if (Z !== null) Z.return = Q, le = Z;
                    else for (; le !== null; ) {
                      Q = le;
                      var q = Q.sibling, re = Q.return;
                      if (Cp(Q), Q === D) {
                        le = null;
                        break;
                      }
                      if (q !== null) {
                        q.return = re, le = q;
                        break;
                      }
                      le = re;
                    }
                  }
                }
                var ie = m.alternate;
                if (ie !== null) {
                  var oe = ie.child;
                  if (oe !== null) {
                    ie.child = null;
                    do {
                      var qe = oe.sibling;
                      oe.sibling = null, oe = qe;
                    } while (oe !== null);
                  }
                }
                le = m;
              }
            }
            if ((m.subtreeFlags & 2064) !== 0 && b !== null) b.return = m, le = b;
            else e: for (; le !== null; ) {
              if (m = le, (m.flags & 2048) !== 0) switch (m.tag) {
                case 0:
                case 11:
                case 15:
                  Rl(9, m, m.return);
              }
              var I = m.sibling;
              if (I !== null) {
                I.return = m.return, le = I;
                break e;
              }
              le = m.return;
            }
          }
          var A = e.current;
          for (le = A; le !== null; ) {
            b = le;
            var j = b.child;
            if ((b.subtreeFlags & 2064) !== 0 && j !== null) j.return = b, le = j;
            else e: for (b = A; le !== null; ) {
              if (k = le, (k.flags & 2048) !== 0) try {
                switch (k.tag) {
                  case 0:
                  case 11:
                  case 15:
                    so(9, k);
                }
              } catch (se) {
                We(k, k.return, se);
              }
              if (k === b) {
                le = null;
                break e;
              }
              var Y = k.sibling;
              if (Y !== null) {
                Y.return = k.return, le = Y;
                break e;
              }
              le = k.return;
            }
          }
          if (ke = c, Fr(), Xt && typeof Xt.onPostCommitFiberRoot == "function") try {
            Xt.onPostCommitFiberRoot(wi, e);
          } catch {
          }
          a = !0;
        }
        return a;
      } finally {
        Pe = i, jt.transition = r;
      }
    }
    return !1;
  }
  function Kp(e, r, i) {
    r = An(i, r), r = np(e, r, 1), e = Nr(e, r, 1), r = gt(), e !== null && (al(e, 1, r), St(e, r));
  }
  function We(e, r, i) {
    if (e.tag === 3) Kp(e, e, i);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Kp(r, e, i);
        break;
      } else if (r.tag === 1) {
        var a = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Ar === null || !Ar.has(a))) {
          e = An(i, e), e = lp(r, e, 1), r = Nr(r, e, 1), e = gt(), r !== null && (al(r, 1, e), St(r, e));
          break;
        }
      }
      r = r.return;
    }
  }
  function S1(e, r, i) {
    var a = e.pingCache;
    a !== null && a.delete(r), r = gt(), e.pingedLanes |= e.suspendedLanes & i, et === e && (ot & i) === i && (Ye === 4 || Ye === 3 && (ot & 130023424) === ot && 500 > Ge() - nu ? rn(e, 0) : ru |= i), St(e, r);
  }
  function Dp(e, r) {
    r === 0 && ((e.mode & 1) === 0 ? r = 1 : (r = Ci, Ci <<= 1, (Ci & 130023424) === 0 && (Ci = 4194304)));
    var i = gt();
    e = ar(e, r), e !== null && (al(e, r, i), St(e, i));
  }
  function C1(e) {
    var r = e.memoizedState, i = 0;
    r !== null && (i = r.retryLane), Dp(e, i);
  }
  function E1(e, r) {
    var i = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode, c = e.memoizedState;
        c !== null && (i = c.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      default:
        throw Error(l(314));
    }
    a !== null && a.delete(r), Dp(e, i);
  }
  var Op;
  Op = function(e, r, i) {
    if (e !== null) if (e.memoizedProps !== r.pendingProps || yt.current) xt = !0;
    else {
      if ((e.lanes & i) === 0 && (r.flags & 128) === 0) return xt = !1, d1(e, r, i);
      xt = (e.flags & 131072) !== 0;
    }
    else xt = !1, De && (r.flags & 1048576) !== 0 && xf(r, Ui, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var a = r.type;
        oo(e, r), e = r.pendingProps;
        var c = En(r, st.current);
        Nn(r, i), c = Rs(null, r, a, e, c, i);
        var m = Ls();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, bt(a) ? (m = !0, Vi(r)) : m = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, _s(r), c.updater = lo, r.stateNode = c, c._reactInternals = r, Os(r, a, e, i), r = Us(null, r, a, !0, m, i)) : (r.tag = 0, De && m && vs(r), mt(null, r, c, i), r = r.child), r;
      case 16:
        a = r.elementType;
        e: {
          switch (oo(e, r), e = r.pendingProps, c = a._init, a = c(a._payload), r.type = a, c = r.tag = k1(a), e = Bt(a, e), c) {
            case 0:
              r = Hs(null, r, a, e, i);
              break e;
            case 1:
              r = pp(null, r, a, e, i);
              break e;
            case 11:
              r = sp(null, r, a, e, i);
              break e;
            case 14:
              r = up(null, r, a, Bt(a.type, e), i);
              break e;
          }
          throw Error(l(
            306,
            a,
            ""
          ));
        }
        return r;
      case 0:
        return a = r.type, c = r.pendingProps, c = r.elementType === a ? c : Bt(a, c), Hs(e, r, a, c, i);
      case 1:
        return a = r.type, c = r.pendingProps, c = r.elementType === a ? c : Bt(a, c), pp(e, r, a, c, i);
      case 3:
        e: {
          if (hp(r), e === null) throw Error(l(387));
          a = r.pendingProps, m = r.memoizedState, c = m.element, Pf(e, r), Xi(r, a, null, i);
          var b = r.memoizedState;
          if (a = b.element, m.isDehydrated) if (m = { element: a, isDehydrated: !1, cache: b.cache, pendingSuspenseBoundaries: b.pendingSuspenseBoundaries, transitions: b.transitions }, r.updateQueue.baseState = m, r.memoizedState = m, r.flags & 256) {
            c = An(Error(l(423)), r), r = mp(e, r, a, i, c);
            break e;
          } else if (a !== c) {
            c = An(Error(l(424)), r), r = mp(e, r, a, i, c);
            break e;
          } else for (Pt = $r(r.stateNode.containerInfo.firstChild), Ft = r, De = !0, Vt = null, i = _f(r, null, a, i), r.child = i; i; ) i.flags = i.flags & -3 | 4096, i = i.sibling;
          else {
            if (_n(), a === c) {
              r = ur(e, r, i);
              break e;
            }
            mt(e, r, a, i);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Af(r), e === null && xs(r), a = r.type, c = r.pendingProps, m = e !== null ? e.memoizedProps : null, b = c.children, ds(a, c) ? b = null : m !== null && ds(a, m) && (r.flags |= 32), fp(e, r), mt(e, r, b, i), r.child;
      case 6:
        return e === null && xs(r), null;
      case 13:
        return gp(e, r, i);
      case 4:
        return Fs(r, r.stateNode.containerInfo), a = r.pendingProps, e === null ? r.child = Fn(r, null, a, i) : mt(e, r, a, i), r.child;
      case 11:
        return a = r.type, c = r.pendingProps, c = r.elementType === a ? c : Bt(a, c), sp(e, r, a, c, i);
      case 7:
        return mt(e, r, r.pendingProps, i), r.child;
      case 8:
        return mt(e, r, r.pendingProps.children, i), r.child;
      case 12:
        return mt(e, r, r.pendingProps.children, i), r.child;
      case 10:
        e: {
          if (a = r.type._context, c = r.pendingProps, m = r.memoizedProps, b = c.value, Re(qi, a._currentValue), a._currentValue = b, m !== null) if (Ot(m.value, b)) {
            if (m.children === c.children && !yt.current) {
              r = ur(e, r, i);
              break e;
            }
          } else for (m = r.child, m !== null && (m.return = r); m !== null; ) {
            var k = m.dependencies;
            if (k !== null) {
              b = m.child;
              for (var P = k.firstContext; P !== null; ) {
                if (P.context === a) {
                  if (m.tag === 1) {
                    P = sr(-1, i & -i), P.tag = 2;
                    var D = m.updateQueue;
                    if (D !== null) {
                      D = D.shared;
                      var Q = D.pending;
                      Q === null ? P.next = P : (P.next = Q.next, Q.next = P), D.pending = P;
                    }
                  }
                  m.lanes |= i, P = m.alternate, P !== null && (P.lanes |= i), $s(
                    m.return,
                    i,
                    r
                  ), k.lanes |= i;
                  break;
                }
                P = P.next;
              }
            } else if (m.tag === 10) b = m.type === r.type ? null : m.child;
            else if (m.tag === 18) {
              if (b = m.return, b === null) throw Error(l(341));
              b.lanes |= i, k = b.alternate, k !== null && (k.lanes |= i), $s(b, i, r), b = m.sibling;
            } else b = m.child;
            if (b !== null) b.return = m;
            else for (b = m; b !== null; ) {
              if (b === r) {
                b = null;
                break;
              }
              if (m = b.sibling, m !== null) {
                m.return = b.return, b = m;
                break;
              }
              b = b.return;
            }
            m = b;
          }
          mt(e, r, c.children, i), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, a = r.pendingProps.children, Nn(r, i), c = Lt(c), a = a(c), r.flags |= 1, mt(e, r, a, i), r.child;
      case 14:
        return a = r.type, c = Bt(a, r.pendingProps), c = Bt(a.type, c), up(e, r, a, c, i);
      case 15:
        return cp(e, r, r.type, r.pendingProps, i);
      case 17:
        return a = r.type, c = r.pendingProps, c = r.elementType === a ? c : Bt(a, c), oo(e, r), r.tag = 1, bt(a) ? (e = !0, Vi(r)) : e = !1, Nn(r, i), tp(r, a, c), Os(r, a, c, i), Us(null, r, a, !0, e, i);
      case 19:
        return yp(e, r, i);
      case 22:
        return dp(e, r, i);
    }
    throw Error(l(156, r.tag));
  };
  function Vp(e, r) {
    return xd(e, r);
  }
  function $1(e, r, i, a) {
    this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Mt(e, r, i, a) {
    return new $1(e, r, i, a);
  }
  function du(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function k1(e) {
    if (typeof e == "function") return du(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === K) return 11;
      if (e === U) return 14;
    }
    return 2;
  }
  function Ir(e, r) {
    var i = e.alternate;
    return i === null ? (i = Mt(e.tag, r, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = r, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 14680064, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, r = e.dependencies, i.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i;
  }
  function yo(e, r, i, a, c, m) {
    var b = 2;
    if (a = e, typeof e == "function") du(e) && (b = 1);
    else if (typeof e == "string") b = 5;
    else e: switch (e) {
      case ue:
        return ln(i.children, c, m, r);
      case pe:
        b = 8, c |= 8;
        break;
      case ge:
        return e = Mt(12, i, r, c | 2), e.elementType = ge, e.lanes = m, e;
      case G:
        return e = Mt(13, i, r, c), e.elementType = G, e.lanes = m, e;
      case N:
        return e = Mt(19, i, r, c), e.elementType = N, e.lanes = m, e;
      case z:
        return bo(i, c, m, r);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Ce:
            b = 10;
            break e;
          case ye:
            b = 9;
            break e;
          case K:
            b = 11;
            break e;
          case U:
            b = 14;
            break e;
          case M:
            b = 16, a = null;
            break e;
        }
        throw Error(l(130, e == null ? e : typeof e, ""));
    }
    return r = Mt(b, i, r, c), r.elementType = e, r.type = a, r.lanes = m, r;
  }
  function ln(e, r, i, a) {
    return e = Mt(7, e, a, r), e.lanes = i, e;
  }
  function bo(e, r, i, a) {
    return e = Mt(22, e, a, r), e.elementType = z, e.lanes = i, e.stateNode = { isHidden: !1 }, e;
  }
  function fu(e, r, i) {
    return e = Mt(6, e, null, r), e.lanes = i, e;
  }
  function pu(e, r, i) {
    return r = Mt(4, e.children !== null ? e.children : [], e.key, r), r.lanes = i, r.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, r;
  }
  function _1(e, r, i, a, c) {
    this.tag = r, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Da(0), this.expirationTimes = Da(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Da(0), this.identifierPrefix = a, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function hu(e, r, i, a, c, m, b, k, P) {
    return e = new _1(e, r, i, k, P), r === 1 ? (r = 1, m === !0 && (r |= 8)) : r = 0, m = Mt(3, null, null, r), e.current = m, m.stateNode = e, m.memoizedState = { element: a, isDehydrated: i, cache: null, transitions: null, pendingSuspenseBoundaries: null }, _s(m), e;
  }
  function F1(e, r, i) {
    var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ce, key: a == null ? null : "" + a, children: e, containerInfo: r, implementation: i };
  }
  function Bp(e) {
    if (!e) return _r;
    e = e._reactInternals;
    e: {
      if (Wr(e) !== e || e.tag !== 1) throw Error(l(170));
      var r = e;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (bt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(l(171));
    }
    if (e.tag === 1) {
      var i = e.type;
      if (bt(i)) return vf(e, i, r);
    }
    return r;
  }
  function Hp(e, r, i, a, c, m, b, k, P) {
    return e = hu(i, a, !0, e, c, m, b, k, P), e.context = Bp(null), i = e.current, a = gt(), c = Rr(i), m = sr(a, c), m.callback = r ?? null, Nr(i, m, c), e.current.lanes = c, al(e, c, a), St(e, a), e;
  }
  function xo(e, r, i, a) {
    var c = r.current, m = gt(), b = Rr(c);
    return i = Bp(i), r.context === null ? r.context = i : r.pendingContext = i, r = sr(m, b), r.payload = { element: e }, a = a === void 0 ? null : a, a !== null && (r.callback = a), e = Nr(c, r, b), e !== null && (Wt(e, c, b, m), Zi(e, c, b)), b;
  }
  function wo(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Up(e, r) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < r ? i : r;
    }
  }
  function mu(e, r) {
    Up(e, r), (e = e.alternate) && Up(e, r);
  }
  function P1() {
    return null;
  }
  var Wp = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function gu(e) {
    this._internalRoot = e;
  }
  So.prototype.render = gu.prototype.render = function(e) {
    var r = this._internalRoot;
    if (r === null) throw Error(l(409));
    xo(e, r, null, null);
  }, So.prototype.unmount = gu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var r = e.containerInfo;
      tn(function() {
        xo(null, e, null, null);
      }), r[nr] = null;
    }
  };
  function So(e) {
    this._internalRoot = e;
  }
  So.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var r = Fd();
      e = { blockedOn: null, target: e, priority: r };
      for (var i = 0; i < Sr.length && r !== 0 && r < Sr[i].priority; i++) ;
      Sr.splice(i, 0, e), i === 0 && Td(e);
    }
  };
  function vu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Co(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Gp() {
  }
  function N1(e, r, i, a, c) {
    if (c) {
      if (typeof a == "function") {
        var m = a;
        a = function() {
          var D = wo(b);
          m.call(D);
        };
      }
      var b = Hp(r, a, e, 0, null, !1, !1, "", Gp);
      return e._reactRootContainer = b, e[nr] = b.current, wl(e.nodeType === 8 ? e.parentNode : e), tn(), b;
    }
    for (; c = e.lastChild; ) e.removeChild(c);
    if (typeof a == "function") {
      var k = a;
      a = function() {
        var D = wo(P);
        k.call(D);
      };
    }
    var P = hu(e, 0, !1, null, null, !1, !1, "", Gp);
    return e._reactRootContainer = P, e[nr] = P.current, wl(e.nodeType === 8 ? e.parentNode : e), tn(function() {
      xo(r, P, i, a);
    }), P;
  }
  function Eo(e, r, i, a, c) {
    var m = i._reactRootContainer;
    if (m) {
      var b = m;
      if (typeof c == "function") {
        var k = c;
        c = function() {
          var P = wo(b);
          k.call(P);
        };
      }
      xo(r, b, e, c);
    } else b = N1(i, r, e, c, a);
    return wo(b);
  }
  kd = function(e) {
    switch (e.tag) {
      case 3:
        var r = e.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var i = ol(r.pendingLanes);
          i !== 0 && (Oa(r, i | 1), St(r, Ge()), (ke & 6) === 0 && (Ln = Ge() + 500, Fr()));
        }
        break;
      case 13:
        tn(function() {
          var a = ar(e, 1);
          if (a !== null) {
            var c = gt();
            Wt(a, e, 1, c);
          }
        }), mu(e, 1);
    }
  }, Va = function(e) {
    if (e.tag === 13) {
      var r = ar(e, 134217728);
      if (r !== null) {
        var i = gt();
        Wt(r, e, 134217728, i);
      }
      mu(e, 134217728);
    }
  }, _d = function(e) {
    if (e.tag === 13) {
      var r = Rr(e), i = ar(e, r);
      if (i !== null) {
        var a = gt();
        Wt(i, e, r, a);
      }
      mu(e, r);
    }
  }, Fd = function() {
    return Pe;
  }, Pd = function(e, r) {
    var i = Pe;
    try {
      return Pe = e, r();
    } finally {
      Pe = i;
    }
  }, Ra = function(e, r, i) {
    switch (r) {
      case "input":
        if (ka(e, i), r = i.name, i.type === "radio" && r != null) {
          for (i = e; i.parentNode; ) i = i.parentNode;
          for (i = i.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < i.length; r++) {
            var a = i[r];
            if (a !== e && a.form === e.form) {
              var c = Di(a);
              if (!c) throw Error(l(90));
              te(a), ka(a, c);
            }
          }
        }
        break;
      case "textarea":
        ld(e, i);
        break;
      case "select":
        r = i.value, r != null && fn(e, !!i.multiple, r, !1);
    }
  }, pd = su, hd = tn;
  var T1 = { usingClientEntryPoint: !1, Events: [El, Sn, Di, dd, fd, su] }, Ml = { findFiberByHostInstance: Gr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, A1 = { bundleType: Ml.bundleType, version: Ml.version, rendererPackageName: Ml.rendererPackageName, rendererConfig: Ml.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: J.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = yd(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Ml.findFiberByHostInstance || P1, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var $o = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$o.isDisabled && $o.supportsFiber) try {
      wi = $o.inject(A1), Xt = $o;
    } catch {
    }
  }
  return Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T1, Ct.createPortal = function(e, r) {
    var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!vu(r)) throw Error(l(200));
    return F1(e, r, null, i);
  }, Ct.createRoot = function(e, r) {
    if (!vu(e)) throw Error(l(299));
    var i = !1, a = "", c = Wp;
    return r != null && (r.unstable_strictMode === !0 && (i = !0), r.identifierPrefix !== void 0 && (a = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = hu(e, 1, !1, null, null, i, !1, a, c), e[nr] = r.current, wl(e.nodeType === 8 ? e.parentNode : e), new gu(r);
  }, Ct.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var r = e._reactInternals;
    if (r === void 0)
      throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
    return e = yd(r), e = e === null ? null : e.stateNode, e;
  }, Ct.flushSync = function(e) {
    return tn(e);
  }, Ct.hydrate = function(e, r, i) {
    if (!Co(r)) throw Error(l(200));
    return Eo(null, e, r, !0, i);
  }, Ct.hydrateRoot = function(e, r, i) {
    if (!vu(e)) throw Error(l(405));
    var a = i != null && i.hydratedSources || null, c = !1, m = "", b = Wp;
    if (i != null && (i.unstable_strictMode === !0 && (c = !0), i.identifierPrefix !== void 0 && (m = i.identifierPrefix), i.onRecoverableError !== void 0 && (b = i.onRecoverableError)), r = Hp(r, null, e, 1, i ?? null, c, !1, m, b), e[nr] = r.current, wl(e), a) for (e = 0; e < a.length; e++) i = a[e], c = i._getVersion, c = c(i._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [i, c] : r.mutableSourceEagerHydrationData.push(
      i,
      c
    );
    return new So(r);
  }, Ct.render = function(e, r, i) {
    if (!Co(r)) throw Error(l(200));
    return Eo(null, e, r, !1, i);
  }, Ct.unmountComponentAtNode = function(e) {
    if (!Co(e)) throw Error(l(40));
    return e._reactRootContainer ? (tn(function() {
      Eo(null, null, e, !1, function() {
        e._reactRootContainer = null, e[nr] = null;
      });
    }), !0) : !1;
  }, Ct.unstable_batchedUpdates = su, Ct.unstable_renderSubtreeIntoContainer = function(e, r, i, a) {
    if (!Co(i)) throw Error(l(200));
    if (e == null || e._reactInternals === void 0) throw Error(l(38));
    return Eo(e, r, i, !1, a);
  }, Ct.version = "18.3.1-next-f1338f8080-20240426", Ct;
}
var th;
function ym() {
  if (th) return xu.exports;
  th = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  return t(), xu.exports = D1(), xu.exports;
}
var rh;
function O1() {
  if (rh) return ko;
  rh = 1;
  var t = ym();
  return ko.createRoot = t.createRoot, ko.hydrateRoot = t.hydrateRoot, ko;
}
var V1 = O1();
function nh({ card: t, hero: n = !1 }) {
  const l = n ? "ea-r-announcement ea-r-announcement--hero" : "ea-r-announcement", o = /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsx("div", { className: "ea-r-announcement__media", children: t.image ? /* @__PURE__ */ w.jsx("img", { src: t.image, alt: "", loading: "lazy" }) : null }),
    /* @__PURE__ */ w.jsxs("div", { className: "ea-r-announcement__content", children: [
      t.subtitle ? /* @__PURE__ */ w.jsx("p", { className: "ea-r-announcement__eyebrow", children: t.subtitle }) : null,
      /* @__PURE__ */ w.jsx("h3", { className: "ea-r-announcement__title", children: t.title }),
      t.meta ? /* @__PURE__ */ w.jsx("p", { className: "ea-r-announcement__meta", children: t.meta }) : null
    ] })
  ] });
  return t.link ? /* @__PURE__ */ w.jsx("a", { className: l, href: t.link, children: o }) : /* @__PURE__ */ w.jsx("article", { className: l, children: o });
}
function B1({ cards: t = [] }) {
  if (!t.length)
    return null;
  const [n, ...l] = t;
  return /* @__PURE__ */ w.jsx("section", { className: "ea-r-section ea-r-announcements", "aria-label": "Announcements", children: /* @__PURE__ */ w.jsxs("div", { className: "ea-r-announcements__grid", children: [
    /* @__PURE__ */ w.jsx(nh, { card: n, hero: !0 }),
    /* @__PURE__ */ w.jsx("div", { className: "ea-r-announcements__list", children: l.slice(0, 4).map((o) => /* @__PURE__ */ w.jsx(nh, { card: o }, `${o.title}-${o.link}`)) })
  ] }) });
}
var E = la();
const $ = /* @__PURE__ */ R1(E);
class ci {
  constructor(n) {
    this.value = null, this.level = 0, this.hasChildNodes = !1, this.rendered = null, this.textValue = "", this["aria-label"] = void 0, this.index = 0, this.parentKey = null, this.prevKey = null, this.nextKey = null, this.firstChildKey = null, this.lastChildKey = null, this.props = {}, this.colSpan = null, this.colIndex = null, this.type = this.constructor.type, this.key = n;
  }
  get childNodes() {
    throw new Error("childNodes is not supported");
  }
  clone() {
    let n = new this.constructor(this.key);
    return n.value = this.value, n.level = this.level, n.hasChildNodes = this.hasChildNodes, n.rendered = this.rendered, n.textValue = this.textValue, n["aria-label"] = this["aria-label"], n.index = this.index, n.parentKey = this.parentKey, n.prevKey = this.prevKey, n.nextKey = this.nextKey, n.firstChildKey = this.firstChildKey, n.lastChildKey = this.lastChildKey, n.props = this.props, n.render = this.render, n.colSpan = this.colSpan, n.colIndex = this.colIndex, n;
  }
  filter(n, l, o) {
    let s = this.clone();
    return l.addDescendants(s, n), s;
  }
}
class bm extends ci {
  filter(n, l, o) {
    let [s, u] = xm(n, l, this.firstChildKey, o), f = this.clone();
    return f.firstChildKey = s, f.lastChildKey = u, f;
  }
}
class vS extends ci {
  static {
    this.type = "header";
  }
}
class yS extends ci {
  static {
    this.type = "loader";
  }
}
class bS extends bm {
  static {
    this.type = "item";
  }
  filter(n, l, o) {
    if (o(this.textValue, this)) {
      let s = this.clone();
      return l.addDescendants(s, n), s;
    }
    return null;
  }
}
class xS extends bm {
  static {
    this.type = "section";
  }
  filter(n, l, o) {
    let s = super.filter(n, l, o);
    if (s && s.lastChildKey !== null) {
      let u = n.getItem(s.lastChildKey);
      if (u && u.type !== "header") return s;
    }
    return null;
  }
}
class H1 {
  get size() {
    return this.itemCount;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  *[Symbol.iterator]() {
    let n = this.firstKey != null ? this.keyMap.get(this.firstKey) : void 0;
    for (; n; )
      yield n, n = n.nextKey != null ? this.keyMap.get(n.nextKey) : void 0;
  }
  getChildren(n) {
    let l = this.keyMap;
    return {
      *[Symbol.iterator]() {
        let o = l.get(n), s = o?.firstChildKey != null ? l.get(o.firstChildKey) : null;
        for (; s; )
          yield s, s = s.nextKey != null ? l.get(s.nextKey) : void 0;
      }
    };
  }
  getKeyBefore(n) {
    let l = this.keyMap.get(n);
    if (!l) return null;
    if (l.prevKey != null) {
      for (l = this.keyMap.get(l.prevKey); l && l.type !== "item" && l.lastChildKey != null; ) l = this.keyMap.get(l.lastChildKey);
      return l?.key ?? null;
    }
    return l.parentKey;
  }
  getKeyAfter(n) {
    let l = this.keyMap.get(n);
    if (!l) return null;
    if (l.type !== "item" && l.firstChildKey != null) return l.firstChildKey;
    for (; l; ) {
      if (l.nextKey != null) return l.nextKey;
      if (l.parentKey != null) l = this.keyMap.get(l.parentKey);
      else return null;
    }
    return null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    let n = this.lastKey != null ? this.keyMap.get(this.lastKey) : null;
    for (; n?.lastChildKey != null; ) n = this.keyMap.get(n.lastChildKey);
    return n?.key ?? null;
  }
  getItem(n) {
    return this.keyMap.get(n) ?? null;
  }
  at() {
    throw new Error("Not implemented");
  }
  clone() {
    let n = this.constructor, l = new n();
    return l.keyMap = new Map(this.keyMap), l.firstKey = this.firstKey, l.lastKey = this.lastKey, l.itemCount = this.itemCount, l;
  }
  addNode(n) {
    if (this.frozen) throw new Error("Cannot add a node to a frozen collection");
    n.type === "item" && this.keyMap.get(n.key) == null && this.itemCount++, this.keyMap.set(n.key, n);
  }
  // Deeply add a node and its children to the collection from another collection, primarily used when filtering a collection
  addDescendants(n, l) {
    this.addNode(n);
    let o = l.getChildren(n.key);
    for (let s of o) this.addDescendants(s, l);
  }
  removeNode(n) {
    if (this.frozen) throw new Error("Cannot remove a node to a frozen collection");
    let l = this.keyMap.get(n);
    l != null && l.type === "item" && this.itemCount--, this.keyMap.delete(n);
  }
  commit(n, l, o = !1) {
    if (this.frozen) throw new Error("Cannot commit a frozen collection");
    this.firstKey = n, this.lastKey = l, this.frozen = !o;
  }
  filter(n) {
    let l = new this.constructor(), [o, s] = xm(this, l, this.firstKey, n);
    return l?.commit(o, s), l;
  }
  constructor() {
    this.keyMap = /* @__PURE__ */ new Map(), this.firstKey = null, this.lastKey = null, this.frozen = !1, this.itemCount = 0;
  }
}
function xm(t, n, l, o) {
  if (l == null) return [
    null,
    null
  ];
  let s = null, u = null, f = t.getItem(l);
  for (; f != null; ) {
    let d = f.filter(t, n, o);
    d != null && (d.nextKey = null, u && (d.prevKey = u.key, u.nextKey = d.key), s == null && (s = d), n.addNode(d), u = d), f = f.nextKey != null ? t.getItem(f.nextKey) : null;
  }
  if (u && u.type === "separator") {
    let d = u.prevKey;
    n.removeNode(u.key), d != null ? (u = n.getItem(d), u.nextKey = null) : u = null;
  }
  return [
    s?.key ?? null,
    u?.key ?? null
  ];
}
class wm {
  constructor(n) {
    this._firstChild = null, this._lastChild = null, this._previousSibling = null, this._nextSibling = null, this._parentNode = null, this._minInvalidChildIndex = null, this.ownerDocument = n;
  }
  *[Symbol.iterator]() {
    let n = this.firstChild;
    for (; n; )
      yield n, n = n.nextSibling;
  }
  get firstChild() {
    return this._firstChild;
  }
  set firstChild(n) {
    this._firstChild = n, this.ownerDocument.markDirty(this);
  }
  get lastChild() {
    return this._lastChild;
  }
  set lastChild(n) {
    this._lastChild = n, this.ownerDocument.markDirty(this);
  }
  get previousSibling() {
    return this._previousSibling;
  }
  set previousSibling(n) {
    this._previousSibling = n, this.ownerDocument.markDirty(this);
  }
  get nextSibling() {
    return this._nextSibling;
  }
  set nextSibling(n) {
    this._nextSibling = n, this.ownerDocument.markDirty(this);
  }
  get parentNode() {
    return this._parentNode;
  }
  set parentNode(n) {
    this._parentNode = n, this.ownerDocument.markDirty(this);
  }
  get isConnected() {
    return this.parentNode?.isConnected || !1;
  }
  invalidateChildIndices(n) {
    (this._minInvalidChildIndex == null || !this._minInvalidChildIndex.isConnected || n.index < this._minInvalidChildIndex.index) && (this._minInvalidChildIndex = n, this.ownerDocument.markDirty(this));
  }
  updateChildIndices() {
    let n = this._minInvalidChildIndex;
    for (; n; )
      n.index = n.previousSibling ? n.previousSibling.index + 1 : 0, n = n.nextSibling;
    this._minInvalidChildIndex = null;
  }
  appendChild(n) {
    n.parentNode && n.parentNode.removeChild(n), this.firstChild == null && (this.firstChild = n), this.lastChild ? (this.lastChild.nextSibling = n, n.index = this.lastChild.index + 1, n.previousSibling = this.lastChild) : (n.previousSibling = null, n.index = 0), n.parentNode = this, n.nextSibling = null, this.lastChild = n, this.ownerDocument.markDirty(this), this.isConnected && this.ownerDocument.queueUpdate();
  }
  insertBefore(n, l) {
    if (l == null) return this.appendChild(n);
    n.parentNode && n.parentNode.removeChild(n), n.nextSibling = l, n.previousSibling = l.previousSibling, n.index = l.index - 1, this.firstChild === l ? this.firstChild = n : l.previousSibling && (l.previousSibling.nextSibling = n), l.previousSibling = n, n.parentNode = l.parentNode, this.invalidateChildIndices(n), this.isConnected && this.ownerDocument.queueUpdate();
  }
  removeChild(n) {
    n.parentNode === this && (this._minInvalidChildIndex === n && (this._minInvalidChildIndex = null), n.nextSibling && (this.invalidateChildIndices(n.nextSibling), n.nextSibling.previousSibling = n.previousSibling), n.previousSibling && (n.previousSibling.nextSibling = n.nextSibling), this.firstChild === n && (this.firstChild = n.nextSibling), this.lastChild === n && (this.lastChild = n.previousSibling), n.parentNode = null, n.nextSibling = null, n.previousSibling = null, n.index = 0, this.ownerDocument.markDirty(n), this.isConnected && this.ownerDocument.queueUpdate());
  }
  addEventListener() {
  }
  removeEventListener() {
  }
  get previousVisibleSibling() {
    let n = this.previousSibling;
    for (; n && n.isHidden; ) n = n.previousSibling;
    return n;
  }
  get nextVisibleSibling() {
    let n = this.nextSibling;
    for (; n && n.isHidden; ) n = n.nextSibling;
    return n;
  }
  get firstVisibleChild() {
    let n = this.firstChild;
    for (; n && n.isHidden; ) n = n.nextSibling;
    return n;
  }
  get lastVisibleChild() {
    let n = this.lastChild;
    for (; n && n.isHidden; ) n = n.previousSibling;
    return n;
  }
}
class Vn extends wm {
  constructor(n, l) {
    super(l), this.nodeType = 8, this.isMutated = !0, this._index = 0, this.isHidden = !1, this.node = null;
  }
  get index() {
    return this._index;
  }
  set index(n) {
    this._index = n, this.ownerDocument.markDirty(this);
  }
  get level() {
    return this.parentNode instanceof Vn ? this.parentNode.level + (this.parentNode.node?.type === "item" ? 1 : 0) : 0;
  }
  /**
  * Lazily gets a mutable instance of a Node. If the node has already
  * been cloned during this update cycle, it just returns the existing one.
  */
  getMutableNode() {
    return this.node == null ? null : (this.isMutated || (this.node = this.node.clone(), this.isMutated = !0), this.ownerDocument.markDirty(this), this.node);
  }
  updateNode() {
    let n = this.nextVisibleSibling, l = this.getMutableNode();
    if (l != null && (l.index = this.index, l.level = this.level, l.parentKey = this.parentNode instanceof Vn ? this.parentNode.node?.key ?? null : null, l.prevKey = this.previousVisibleSibling?.node?.key ?? null, l.nextKey = n?.node?.key ?? null, l.hasChildNodes = !!this.firstChild, l.firstChildKey = this.firstVisibleChild?.node?.key ?? null, l.lastChildKey = this.lastVisibleChild?.node?.key ?? null, (l.colSpan != null || l.colIndex != null) && n)) {
      let o = (l.colIndex ?? l.index) + (l.colSpan ?? 1);
      if (n.node != null && o !== n.node.colIndex) {
        let s = n.getMutableNode();
        s.colIndex = o;
      }
    }
  }
  setProps(n, l, o, s, u) {
    let f, { value: d, textValue: p, id: h, ...y } = n;
    if (this.node == null ? (f = new o(h ?? `react-aria-${++this.ownerDocument.nodeId}`), this.node = f) : f = this.getMutableNode(), y.ref = l, f.props = y, f.rendered = s, f.render = u, f.value = d, n["aria-label"] && (f["aria-label"] = n["aria-label"]), f.textValue = p || (typeof y.children == "string" ? y.children : "") || n["aria-label"] || "", h != null && h !== f.key) throw new Error("Cannot change the id of an item");
    y.colSpan != null && (f.colSpan = y.colSpan), this.isConnected && this.ownerDocument.queueUpdate();
  }
  get style() {
    let n = this;
    return {
      get display() {
        return n.isHidden ? "none" : "";
      },
      set display(l) {
        let o = l === "none";
        if (n.isHidden !== o) {
          (n.parentNode?.firstVisibleChild === n || n.parentNode?.lastVisibleChild === n) && n.ownerDocument.markDirty(n.parentNode);
          let s = n.previousVisibleSibling, u = n.nextVisibleSibling;
          s && n.ownerDocument.markDirty(s), u && n.ownerDocument.markDirty(u), n.isHidden = o, n.ownerDocument.markDirty(n);
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
class U1 extends wm {
  constructor(n) {
    super(null), this.nodeType = 11, this.ownerDocument = this, this.dirtyNodes = /* @__PURE__ */ new Set(), this.isSSR = !1, this.nodeId = 0, this.nodesByProps = /* @__PURE__ */ new WeakMap(), this.nextCollection = null, this.subscriptions = /* @__PURE__ */ new Set(), this.queuedRender = !1, this.inSubscription = !1, this.collection = n, this.nextCollection = n;
  }
  get isConnected() {
    return !0;
  }
  createElement(n) {
    return new Vn(n, this);
  }
  getMutableCollection() {
    return this.nextCollection || (this.nextCollection = this.collection.clone()), this.nextCollection;
  }
  markDirty(n) {
    this.dirtyNodes.add(n);
  }
  addNode(n) {
    if (n.isHidden || n.node == null) return;
    let l = this.getMutableCollection();
    if (!l.getItem(n.node.key)) for (let o of n) this.addNode(o);
    l.addNode(n.node);
  }
  removeNode(n) {
    for (let l of n) this.removeNode(l);
    n.node && this.getMutableCollection().removeNode(n.node.key);
  }
  /** Finalizes the collection update, updating all nodes and freezing the collection. */
  getCollection() {
    return this.inSubscription ? this.collection : (this.queuedRender = !1, this.updateCollection(), this.collection);
  }
  updateCollection() {
    for (let n of this.dirtyNodes) n instanceof Vn && (!n.isConnected || n.isHidden) ? this.removeNode(n) : n.updateChildIndices();
    for (let n of this.dirtyNodes) n instanceof Vn ? (n.isConnected && !n.isHidden && (n.updateNode(), this.addNode(n)), n.node && this.dirtyNodes.delete(n), n.isMutated = !1) : this.dirtyNodes.delete(n);
    this.nextCollection && (this.nextCollection.commit(this.firstVisibleChild?.node?.key ?? null, this.lastVisibleChild?.node?.key ?? null, this.isSSR), this.isSSR || (this.collection = this.nextCollection, this.nextCollection = null));
  }
  queueUpdate() {
    if (!(this.dirtyNodes.size === 0 || this.queuedRender)) {
      this.queuedRender = !0, this.inSubscription = !0, this.isSSR || (this.collection = this.collection.clone());
      for (let n of this.subscriptions) n();
      this.inSubscription = !1;
    }
  }
  subscribe(n) {
    return this.subscriptions.add(n), this.queuedRender && n(), () => this.subscriptions.delete(n);
  }
  resetAfterSSR() {
    this.isSSR && (this.isSSR = !1, this.firstChild = null, this.lastChild = null, this.nodeId = 0);
  }
}
function Sm(t) {
  let { children: n, items: l, idScope: o, addIdAndValue: s, dependencies: u = [] } = t, f = E.useMemo(() => {
  }, [
    n
  ]), d = E.useMemo(() => /* @__PURE__ */ new WeakMap(), [
    ...u,
    f
  ]);
  return E.useMemo(() => {
    if (l && typeof n == "function") {
      let p = [];
      for (let h of l) {
        let y = W1(h) ? h : null, v = y ? d.get(y) : null;
        if (!v) {
          v = n(h);
          let g = v.props.id ?? h?.key ?? h?.id;
          o != null && v.props.id == null && g != null && (g = o + ":" + g);
          let S = g ?? p.length;
          v = E.cloneElement(v, s ? {
            key: S,
            id: g,
            value: h
          } : {
            key: S
          }), y && d.set(y, v);
        }
        p.push(v);
      }
      return p;
    } else if (typeof n != "function") return n;
  }, [
    n,
    l,
    d,
    o,
    s
  ]);
}
function W1(t) {
  switch (typeof t) {
    case "object":
      return t != null;
    case "function":
    case "symbol":
      return !0;
    default:
      return !1;
  }
}
function gr(t) {
  if (G1()) t.focus({
    preventScroll: !0
  });
  else {
    let n = q1(t);
    t.focus(), Q1(n);
  }
}
let _o = null;
function G1() {
  if (_o == null) {
    _o = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return _o = !0, !0;
        }
      });
    } catch {
    }
  }
  return _o;
}
function q1(t) {
  let n = t.parentNode, l = [], o = document.scrollingElement || document.documentElement;
  for (; n instanceof HTMLElement && n !== o; )
    (n.offsetHeight < n.scrollHeight || n.offsetWidth < n.scrollWidth) && l.push({
      element: n,
      scrollTop: n.scrollTop,
      scrollLeft: n.scrollLeft
    }), n = n.parentNode;
  return o instanceof HTMLElement && l.push({
    element: o,
    scrollTop: o.scrollTop,
    scrollLeft: o.scrollLeft
  }), l;
}
function Q1(t) {
  for (let { element: n, scrollTop: l, scrollLeft: o } of t)
    n.scrollTop = l, n.scrollLeft = o;
}
const He = (t) => Z1(t) ? t.document : X1(t) ? t : t?.ownerDocument ?? (typeof document < "u" ? document : void 0), vt = (t) => He(t)?.defaultView ?? (typeof window < "u" ? window : void 0);
function Cm(t) {
  return t !== null && typeof t == "object" && "nodeType" in t && typeof t.nodeType == "number";
}
function Z1(t) {
  return typeof t == "object" && t != null && "window" in t && t.window === t;
}
function X1(t) {
  return Cm(t) && t.nodeType === 9;
}
function Em(t) {
  return Cm(t) && t.nodeType === 11 && "host" in t;
}
function Y1(t, n, l, o) {
  if (l == null || t == null) return () => {
  };
  let s = Array.isArray(t) ? t : [
    t
  ];
  for (let u of s) u.addEventListener(n, l, o);
  return () => {
    for (let u of s) u.removeEventListener(n, l, o);
  };
}
let J1 = !1;
function ia() {
  return J1;
}
function Ne(t, n) {
  if (!ia()) return n && t ? t.contains(n) : !1;
  if (!t || !n) return !1;
  let l = n;
  for (; l !== null; ) {
    if (l === t) return !0;
    typeof l.assignedElements != "function" && l.assignedSlot?.parentNode ? l = l.assignedSlot.parentNode : Em(l) ? l = l.host : l = l.parentNode;
  }
  return !1;
}
const At = (t = document) => {
  if (!ia()) return t.activeElement;
  let n = t.activeElement;
  for (; n && "shadowRoot" in n && n.shadowRoot?.activeElement; ) n = n.shadowRoot.activeElement;
  return n;
};
function Se(t) {
  if (ia() && t.target instanceof Element && t.target.shadowRoot) {
    if ("composedPath" in t) return t.composedPath()[0] ?? null;
    if ("composedPath" in t.nativeEvent) return t.nativeEvent.composedPath()[0] ?? null;
  }
  return t.target;
}
function lh(t) {
  if (!t) return !1;
  let n = t.getRootNode(), l = vt(t);
  if (!(n instanceof l.Document || n instanceof l.ShadowRoot)) return !1;
  let o = n.activeElement;
  return o != null && t.contains(o);
}
const e0 = typeof Element < "u" && "checkVisibility" in Element.prototype;
function t0(t) {
  const n = vt(t);
  if (!(t instanceof n.HTMLElement) && !(t instanceof n.SVGElement)) return !1;
  let { display: l, visibility: o } = t.style, s = l !== "none" && o !== "hidden" && o !== "collapse";
  if (s) {
    const { getComputedStyle: u } = vt(t);
    let { display: f, visibility: d } = u(t);
    s = f !== "none" && d !== "hidden" && d !== "collapse";
  }
  return s;
}
function r0(t, n) {
  return !t.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !t.hasAttribute("data-react-aria-prevent-focus") && (t.nodeName === "DETAILS" && n && n.nodeName !== "SUMMARY" ? t.hasAttribute("open") : !0);
}
function yc(t, n) {
  return e0 ? t.checkVisibility({
    visibilityProperty: !0
  }) && !t.closest("[data-react-aria-prevent-focus]") : t.nodeName !== "#comment" && t0(t) && r0(t, n) && (!t.parentElement || yc(t.parentElement, t));
}
const bc = [
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
], n0 = bc.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
bc.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const l0 = bc.join(':not([hidden]):not([tabindex="-1"]),');
function $m(t, n) {
  return t.matches(n0) && !km(t) && (n?.skipVisibilityCheck || yc(t));
}
function xc(t) {
  return t.matches(l0) && yc(t) && !km(t);
}
function km(t) {
  let n = t;
  for (; n != null; ) {
    if (n instanceof vt(n).HTMLElement && n.inert) return !0;
    n = n.parentElement;
  }
  return !1;
}
const Qt = typeof document < "u" ? $.useLayoutEffect : () => {
};
function wc(t) {
  let n = t;
  return n.nativeEvent = t, n.isDefaultPrevented = () => n.defaultPrevented, n.isPropagationStopped = () => n.cancelBubble, n.persist = () => {
  }, n;
}
function _m(t, n) {
  Object.defineProperty(t, "target", {
    value: n
  }), Object.defineProperty(t, "currentTarget", {
    value: n
  });
}
function Fm(t) {
  let n = E.useRef({
    isFocused: !1,
    observer: null
  });
  return Qt(() => {
    const l = n.current;
    return () => {
      l.observer && (l.observer.disconnect(), l.observer = null);
    };
  }, []), E.useCallback((l) => {
    let o = Se(l);
    if (o instanceof HTMLButtonElement || o instanceof HTMLInputElement || o instanceof HTMLTextAreaElement || o instanceof HTMLSelectElement) {
      n.current.isFocused = !0;
      let s = o, u = (f) => {
        if (n.current.isFocused = !1, s.disabled) {
          let d = wc(f);
          t?.(d);
        }
        n.current.observer && (n.current.observer.disconnect(), n.current.observer = null);
      };
      s.addEventListener("focusout", u, {
        once: !0
      }), n.current.observer = new MutationObserver(() => {
        if (n.current.isFocused && s.disabled) {
          n.current.observer?.disconnect();
          let f = s === At() ? null : At();
          s.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: f
          })), s.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: f
          }));
        }
      }), n.current.observer.observe(s, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    t
  ]);
}
let Wo = !1;
function i0(t) {
  for (; t && !$m(t, {
    skipVisibilityCheck: !0
  }); ) t = t.parentElement;
  let n = vt(t), l = At(n.document);
  if (!l || l === t) return;
  let o = t?.getRootNode(), s = o != null && Em(o) ? o : vt(t), u = (C) => C === t || C != null && Ne(t, C), f = (C) => C === l || l != null && C != null && Ne(l, C);
  Wo = !0;
  let d = !1, p = (C) => {
    (f(Se(C)) || d) && C.stopImmediatePropagation();
  }, h = (C) => {
    (f(Se(C)) || d) && (C.stopImmediatePropagation(), !t && !d && (d = !0, gr(l), g()));
  }, y = (C) => {
    (u(Se(C)) || d) && C.stopImmediatePropagation();
  }, v = (C) => {
    (u(Se(C)) || d) && (C.stopImmediatePropagation(), d || (d = !0, gr(l), g()));
  };
  s.addEventListener("blur", p, !0), s.addEventListener("focusout", h, !0), s.addEventListener("focusin", v, !0), s.addEventListener("focus", y, !0);
  let g = () => {
    cancelAnimationFrame(S), s.removeEventListener("blur", p, !0), s.removeEventListener("focusout", h, !0), s.removeEventListener("focusin", v, !0), s.removeEventListener("focus", y, !0), Wo = !1, d = !1;
  }, S = requestAnimationFrame(g);
  return g;
}
function oa(t) {
  if (typeof window > "u" || window.navigator == null) return !1;
  let n = window.navigator.userAgentData?.brands;
  return Array.isArray(n) && n.some((l) => t.test(l.brand)) || t.test(window.navigator.userAgent);
}
function Sc(t) {
  return typeof window < "u" && window.navigator != null ? t.test(window.navigator.userAgentData?.platform || window.navigator.platform) : !1;
}
function yr(t) {
  let n = null;
  return () => (n == null && (n = t()), n);
}
const Zt = yr(function() {
  return Sc(/^Mac/i);
}), o0 = yr(function() {
  return Sc(/^iPhone/i);
}), Pm = yr(function() {
  return Sc(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Zt() && navigator.maxTouchPoints > 1;
}), di = yr(function() {
  return o0() || Pm();
}), a0 = yr(function() {
  return Zt() || di();
}), Yl = yr(function() {
  return oa(/AppleWebKit/i) && (di() || !s0());
}), s0 = yr(function() {
  return oa(/Chrome|CriOS|CrMo/i);
}), Wu = yr(function() {
  return oa(/Android/i);
}), u0 = yr(function() {
  return oa(/(Firefox|FxiOS)/i);
});
function Nm(t) {
  return t.pointerType === "" && t.isTrusted ? !0 : Wu() && t.pointerType ? t.type === "click" && t.buttons === 1 : t.detail === 0 && !t.pointerType;
}
function c0(t) {
  return !Wu() && t.width === 0 && t.height === 0 || Wu() && t.width === 1 && t.height === 1 && t.pressure === 0 && t.detail === 0 && t.pointerType === "mouse";
}
const d0 = /* @__PURE__ */ E.createContext({
  isNative: !0,
  open: h0,
  useHref: (t) => t
});
function aa() {
  return E.useContext(d0);
}
function f0(t, n) {
  let l = t.getAttribute("target");
  return (!l || l === "_self") && t.origin === location.origin && !t.hasAttribute("download") && !n.metaKey && // open in new tab (mac)
  !n.ctrlKey && // open in new tab (windows)
  !n.altKey && // download
  !n.shiftKey;
}
function vr(t, n, l = !0) {
  let { metaKey: o, ctrlKey: s, altKey: u, shiftKey: f } = n;
  !Yl() && u0() && window.event?.type?.startsWith("key") && t.target === "_blank" && (Zt() ? o = !0 : s = !0);
  let d = Yl() && Zt() && !Pm() ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: o,
    ctrlKey: s,
    altKey: u,
    shiftKey: f
  }) : new MouseEvent("click", {
    metaKey: o,
    ctrlKey: s,
    altKey: u,
    shiftKey: f,
    detail: 1,
    bubbles: !0,
    cancelable: !0
  });
  vr.isOpening = l, gr(t), t.dispatchEvent(d), vr.isOpening = !1;
}
vr.isOpening = !1;
function p0(t, n) {
  if (t instanceof HTMLAnchorElement) n(t);
  else if (t.hasAttribute("data-href")) {
    let l = document.createElement("a");
    l.href = t.getAttribute("data-href"), t.hasAttribute("data-target") && (l.target = t.getAttribute("data-target")), t.hasAttribute("data-rel") && (l.rel = t.getAttribute("data-rel")), t.hasAttribute("data-download") && (l.download = t.getAttribute("data-download")), t.hasAttribute("data-ping") && (l.ping = t.getAttribute("data-ping")), t.hasAttribute("data-referrer-policy") && (l.referrerPolicy = t.getAttribute("data-referrer-policy")), t.appendChild(l), n(l), t.removeChild(l);
  }
}
function h0(t, n) {
  p0(t, (l) => vr(l, n));
}
function Tm(t) {
  const l = aa().useHref(t?.href ?? "");
  let o = {};
  if (t)
    for (let s of [
      "href",
      "target",
      "rel",
      "download",
      "ping",
      "referrerPolicy"
    ]) s in t && t[s] !== void 0 && (o[s] = s === "href" ? l : t[s]);
  return o;
}
function m0(t, n, l, o) {
  !n.isNative && t.currentTarget instanceof HTMLAnchorElement && t.currentTarget.href && // If props are applied to a router Link component, it may have already prevented default.
  !t.isDefaultPrevented() && f0(t.currentTarget, t) && l && (t.preventDefault(), n.open(t.currentTarget, t, l, o));
}
const Am = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, zm = /* @__PURE__ */ $.createContext(Am), g0 = /* @__PURE__ */ $.createContext(!1);
let Cu = /* @__PURE__ */ new WeakMap();
function v0(t = !1) {
  let n = E.useContext(zm), l = E.useRef(null);
  if (l.current === null && !t) {
    let o = (
      // @ts-ignore
      $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.ReactCurrentOwner?.current
    );
    if (o) {
      let s = Cu.get(o);
      s == null ? Cu.set(o, {
        id: n.current,
        state: o.memoizedState
      }) : o.memoizedState !== s.state && (n.current = s.id, Cu.delete(o));
    }
    l.current = ++n.current;
  }
  return l.current;
}
function y0(t) {
  let n = E.useContext(zm), l = v0(!!t), o = `react-aria${n.prefix}`;
  return t || `${o}-${l}`;
}
function b0(t) {
  let n = $.useId(), [l] = E.useState(sa()), o = l ? "react-aria" : `react-aria${Am.prefix}`;
  return t || `${o}-${n}`;
}
const x0 = typeof $.useId == "function" ? b0 : y0;
function w0() {
  return !1;
}
function S0() {
  return !0;
}
function C0(t) {
  return () => {
  };
}
function sa() {
  return typeof $.useSyncExternalStore == "function" ? $.useSyncExternalStore(C0, w0, S0) : E.useContext(g0);
}
let Zn = null;
const Gu = /* @__PURE__ */ new Set();
let ql = /* @__PURE__ */ new Map(), un = !1, Lo = !1;
const E0 = {
  Tab: !0,
  Escape: !0
};
function Cc(t, n) {
  for (let l of Gu) l(t, n);
}
function $0(t) {
  return !(t.metaKey || !Zt() && t.altKey || t.ctrlKey || t.key === "Control" || t.key === "Shift" || t.key === "Meta");
}
function Go(t) {
  un = !0, !vr.isOpening && $0(t) && (Zn = "keyboard", Cc("keyboard", t));
}
function Bn(t) {
  Zn = "pointer", "pointerType" in t && t.pointerType, (t.type === "mousedown" || t.type === "pointerdown") && (un = !0, Cc("pointer", t));
}
function Rm(t) {
  !vr.isOpening && Nm(t) && (un = !0, Zn = "virtual");
}
function Lm(t) {
  if (Wo) return;
  let n = Se(t), l = vt(n), o = He(n);
  if (n === l) {
    Lo = !0;
    return;
  }
  n === o || !t.isTrusted || (!un && !Lo && (Zn = "virtual", Cc("virtual", t)), un = !1, Lo = !1);
}
function Im() {
  Wo || (un = !1, Lo = !0);
}
function qu(t) {
  if (typeof window > "u" || typeof document > "u") return;
  const n = vt(t), l = He(t);
  if (ql.get(n)) return;
  let o = n.HTMLElement.prototype.focus;
  Reflect.defineProperty(n.HTMLElement.prototype, "focus", {
    configurable: !0,
    writable: !0,
    value: function() {
      un = !0, o.apply(this, arguments);
    }
  }), l.addEventListener("keydown", Go, !0), l.addEventListener("keyup", Go, !0), l.addEventListener("click", Rm, !0), n.addEventListener("focus", Lm, !0), n.addEventListener("blur", Im, !1), typeof PointerEvent < "u" && (l.addEventListener("pointerdown", Bn, !0), l.addEventListener("pointermove", Bn, !0), l.addEventListener("pointerup", Bn, !0)), n.addEventListener("beforeunload", () => {
    jm(t);
  }, {
    once: !0
  }), ql.set(n, {
    focus: o
  });
}
const jm = (t, n) => {
  const l = vt(t), o = He(t);
  n && o.removeEventListener("DOMContentLoaded", n), ql.has(l) && (Reflect.defineProperty(l.HTMLElement.prototype, "focus", {
    configurable: !0,
    writable: !0,
    value: ql.get(l).focus
  }), o.removeEventListener("keydown", Go, !0), o.removeEventListener("keyup", Go, !0), o.removeEventListener("click", Rm, !0), l.removeEventListener("focus", Lm, !0), l.removeEventListener("blur", Im, !1), typeof PointerEvent < "u" && (o.removeEventListener("pointerdown", Bn, !0), o.removeEventListener("pointermove", Bn, !0), o.removeEventListener("pointerup", Bn, !0)), ql.delete(l));
};
function k0(t) {
  const n = He(t);
  let l;
  return n.readyState !== "loading" ? qu(t) : (l = () => {
    qu(t);
  }, n.addEventListener("DOMContentLoaded", l)), () => jm(t, l);
}
typeof document < "u" && k0();
function Qu() {
  return Zn !== "pointer";
}
function Zu() {
  return Zn;
}
const _0 = /* @__PURE__ */ new Set([
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
function F0(t, n, l) {
  let o = l ? Se(l) : void 0, s = He(o), u = vt(o);
  const f = typeof u < "u" ? u.HTMLInputElement : HTMLInputElement, d = typeof u < "u" ? u.HTMLTextAreaElement : HTMLTextAreaElement, p = typeof u < "u" ? u.HTMLElement : HTMLElement, h = typeof u < "u" ? u.KeyboardEvent : KeyboardEvent;
  let y = At(s);
  return t = t || y instanceof f && !_0.has(y.type) || y instanceof d || y instanceof p && y.isContentEditable, !(t && n === "keyboard" && l instanceof h && !E0[l.key]);
}
function P0(t, n, l) {
  qu(), E.useEffect(() => {
    if (l?.enabled === !1) return;
    let o = (s, u) => {
      F0(!!l?.isTextInput, s, u) && t(Qu());
    };
    return Gu.add(o), () => {
      Gu.delete(o);
    };
  }, n);
}
let Dr = /* @__PURE__ */ new Map(), Xu = /* @__PURE__ */ new Set();
function ih() {
  if (typeof window > "u") return;
  function t(o) {
    return "propertyName" in o;
  }
  let n = (o) => {
    let s = Se(o);
    if (!t(o) || !s) return;
    let u = Dr.get(s);
    u || (u = /* @__PURE__ */ new Set(), Dr.set(s, u), s.addEventListener("transitioncancel", l, {
      once: !0
    })), u.add(o.propertyName);
  }, l = (o) => {
    let s = Se(o);
    if (!t(o) || !s) return;
    let u = Dr.get(s);
    if (u && (u.delete(o.propertyName), u.size === 0 && (s.removeEventListener("transitioncancel", l), Dr.delete(s)), Dr.size === 0)) {
      for (let f of Xu) f();
      Xu.clear();
    }
  };
  document.body.addEventListener("transitionrun", n), document.body.addEventListener("transitionend", l);
}
typeof document < "u" && (document.readyState !== "loading" ? ih() : document.addEventListener("DOMContentLoaded", ih));
function N0() {
  for (const [t] of Dr)
    "isConnected" in t && !t.isConnected && Dr.delete(t);
}
function Mm(t) {
  requestAnimationFrame(() => {
    N0(), Dr.size === 0 ? t() : Xu.add(t);
  });
}
function qo(t) {
  if (!t.isConnected) return;
  const n = He(t);
  if (Zu() === "virtual") {
    let l = At(n);
    Mm(() => {
      const o = At(n);
      (o === l || o === n.body) && t.isConnected && gr(t);
    });
  } else gr(t);
}
function Jl(...t) {
  return (...n) => {
    for (let l of t) typeof l == "function" && l(...n);
  };
}
let T0 = !!(typeof window < "u" && window.document && window.document.createElement), Hn = /* @__PURE__ */ new Map(), Mn;
typeof FinalizationRegistry < "u" && (Mn = new FinalizationRegistry((t) => {
  Hn.delete(t);
}));
let Eu = /* @__PURE__ */ new WeakMap();
function ua(t) {
  let [n, l] = E.useState(t), o = E.useRef(null), s = x0(n), u = E.useRef(null), f = Eu.get(u);
  if (Mn && f !== s && (f != null && Mn.unregister(u), Mn.register(u, s, u), Eu.set(u, s)), T0) {
    const d = Hn.get(s);
    d && !d.includes(o) ? d.push(o) : Hn.set(s, [
      o
    ]);
  }
  return Qt(() => {
    let d = s;
    return () => {
      Mn && (Mn.unregister(u), Eu.delete(u)), Hn.delete(d);
    };
  }, [
    s
  ]), E.useEffect(() => {
    let d = o.current;
    return d && l(d), () => {
      d && (o.current = null);
    };
  }), s;
}
function A0(t, n) {
  if (t === n) return t;
  let l = Hn.get(t);
  if (l)
    return l.forEach((s) => s.current = n), n;
  let o = Hn.get(n);
  return o ? (o.forEach((s) => s.current = t), t) : n;
}
function Hr(...t) {
  return t.length === 1 && t[0] ? t[0] : (n) => {
    let l = !1;
    const o = t.map((s) => {
      const u = oh(s, n);
      return l ||= typeof u == "function", u;
    });
    if (l) return () => {
      o.forEach((s, u) => {
        typeof s == "function" ? s() : oh(t[u], null);
      });
    };
  };
}
function oh(t, n) {
  if (typeof t == "function") return t(n);
  t != null && (t.current = n);
}
function Km(t) {
  var n, l, o = "";
  if (typeof t == "string" || typeof t == "number") o += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var s = t.length;
    for (n = 0; n < s; n++) t[n] && (l = Km(t[n])) && (o && (o += " "), o += l);
  } else for (l in t) t[l] && (o && (o += " "), o += l);
  return o;
}
function Ec() {
  for (var t, n, l = 0, o = "", s = arguments.length; l < s; l++) (t = arguments[l]) && (n = Km(t)) && (o && (o += " "), o += n);
  return o;
}
function Te(...t) {
  let n = {
    ...t[0]
  };
  for (let l = 1; l < t.length; l++) {
    let o = t[l];
    for (let s in o) {
      let u = n[s], f = o[s];
      typeof u == "function" && typeof f == "function" && // This is a lot faster than a regex.
      s[0] === "o" && s[1] === "n" && s.charCodeAt(2) >= /* 'A' */
      65 && s.charCodeAt(2) <= /* 'Z' */
      90 ? n[s] = Jl(u, f) : (s === "className" || s === "UNSAFE_className") && typeof u == "string" && typeof f == "string" ? n[s] = Ec(u, f) : s === "id" && u && f ? n.id = A0(u, f) : s === "ref" && u && f ? n.ref = Hr(u, f) : n[s] = f !== void 0 ? f : u;
    }
  }
  return n;
}
function Dm(t) {
  let { isDisabled: n, onFocus: l, onBlur: o, onFocusChange: s } = t;
  const u = E.useCallback((p) => {
    if (Se(p) === p.currentTarget)
      return o && o(p), s && s(!1), !0;
  }, [
    o,
    s
  ]), f = Fm(u), d = E.useCallback((p) => {
    let h = Se(p);
    const y = He(h), v = y ? At(y) : At();
    h === p.currentTarget && h === v && (l && l(p), s && s(!0), f(p));
  }, [
    s,
    l,
    f
  ]);
  return {
    focusProps: {
      onFocus: !n && (l || s || o) ? d : void 0,
      onBlur: !n && (o || s) ? u : void 0
    }
  };
}
function Fo(t) {
  if (t)
    return (n) => {
      let l = !0, o = {
        ...n,
        preventDefault() {
          n.preventDefault();
        },
        isDefaultPrevented() {
          return n.isDefaultPrevented();
        },
        stopPropagation() {
          l = !0;
        },
        continuePropagation() {
          l = !1, typeof n.continuePropagation == "function" && n.continuePropagation();
        },
        isPropagationStopped() {
          return l;
        }
      };
      t(o), l && !(typeof n.isPropagationStopped == "function" && n.isPropagationStopped()) && n.stopPropagation();
    };
}
const z0 = /* @__PURE__ */ new Set([
  "shift",
  "alt",
  "control",
  "meta",
  "mod"
  // OS dependent - Cmd on Mac, Control on Windows/Linux
]), R0 = [
  "Alt",
  "Control",
  "Meta",
  "Shift"
];
function L0(t) {
  let n = /* @__PURE__ */ new Set();
  return t.alt && n.add("Alt"), t.shift && n.add("Shift"), t.ctrl && n.add("Control"), t.meta && n.add("Meta"), t.mod && n.add(Zt() ? "Meta" : "Control"), n;
}
function I0(t) {
  let n = /* @__PURE__ */ new Set();
  return t.altKey && n.add("Alt"), t.ctrlKey && n.add("Control"), t.metaKey && n.add("Meta"), t.shiftKey && n.add("Shift"), n;
}
function Om(t) {
  return R0.filter((n) => t.has(n));
}
function j0(t) {
  let n = t.split("+").reduce((l, o) => {
    let s = o.toLowerCase();
    return z0.has(s) ? s === "shift" ? l.shift = !0 : s === "alt" ? l.alt = !0 : s === "control" ? l.ctrl = !0 : s === "meta" ? l.meta = !0 : s === "mod" && (l.mod = !0) : l.key = o, l;
  }, {
    shift: !1,
    alt: !1,
    ctrl: !1,
    meta: !1,
    mod: !1,
    key: ""
  });
  if (n.key === "") throw new Error(`Invalid keyboard shortcut: "${t}". Must include exactly one non-modifier key (e.g. "a", "Enter", "ArrowDown"). Combine any of Shift, Alt, Ctrl, Meta, and Mod.`);
  return n;
}
function Vm(t) {
  return t.toLowerCase();
}
const M0 = {
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
function K0(t) {
  let n = Vm(t), l = M0[n];
  return l ?? n;
}
function D0(t) {
  let n = Om(L0(t)), l = K0(t.key);
  return n.length > 0 ? `${n.join("+")}+${l}` : l;
}
function O0(t) {
  let n = Om(I0(t)), l = Vm(t.key);
  return (n.length > 0 ? `${n.join("+")}+` : "") + l;
}
function V0(t) {
  let n = /* @__PURE__ */ new Map();
  for (let [l, o] of Object.entries(t)) {
    let s = j0(l);
    n.set(D0(s), o);
  }
  return (l) => {
    let o = O0(l), s = n.get(o), u = s?.(l);
    u === void 0 && s !== void 0 ? u = {
      shouldContinuePropagation: !1,
      shouldPreventDefault: !0
    } : typeof u == "boolean" && (u = {
      shouldContinuePropagation: !u,
      shouldPreventDefault: u
    }), u?.shouldPreventDefault && l.preventDefault(), (!s || u?.shouldContinuePropagation) && l.continuePropagation();
  };
}
function Yu(t) {
  let { shortcuts: n, allowRepeats: l = !1, allowComposing: o = !1 } = t, s, u;
  if (n) {
    let f = V0(n), d = Fo((h) => {
      if (!Ne(h.currentTarget, Se(h))) {
        h.continuePropagation();
        return;
      }
      if (h.nativeEvent?.repeat && !l || h.nativeEvent?.isComposing && !o) {
        h.continuePropagation();
        return;
      }
      f(h);
    }), p = Fo((h) => {
      if (!Ne(h.currentTarget, Se(h))) {
        h.continuePropagation();
        return;
      }
      if (h.nativeEvent?.repeat && !l || h.nativeEvent?.isComposing && !o) {
        h.continuePropagation();
        return;
      }
      h.continuePropagation();
    });
    s = t.onKeyDown ? Jl(t.onKeyDown, d) : d, u = t.onKeyUp ? Jl(t.onKeyUp, p) : p;
  } else
    s = Fo(t.onKeyDown), u = Fo(t.onKeyUp);
  return {
    keyboardProps: t.isDisabled ? {} : {
      onKeyDown: s,
      onKeyUp: u
    }
  };
}
function ca(t) {
  const n = E.useRef(null), l = E.useRef(void 0), o = E.useCallback((s) => {
    if (typeof t == "function") {
      const u = t, f = u(s);
      return () => {
        typeof f == "function" ? f() : u(null);
      };
    } else if (t)
      return t.current = s, () => {
        t.current = null;
      };
  }, [
    t
  ]);
  return E.useMemo(
    () => ({
      get current() {
        return n.current;
      },
      set current(s) {
        n.current = s, l.current && (l.current(), l.current = void 0), s != null && (l.current = o(s));
      }
    }),
    // oxlint-disable-next-line react/react-compiler
    [
      o
    ]
  );
}
function Bm(t, n) {
  Qt(() => {
    if (t && t.ref && n)
      return t.ref.current = n.current, () => {
        t.ref && (t.ref.current = null);
      };
  });
}
let Ju = /* @__PURE__ */ $.createContext(null);
function B0(t) {
  let n = E.useContext(Ju) || {};
  Bm(n, t);
  let { ref: l, ...o } = n;
  return o;
}
function $c(t, n) {
  let { focusProps: l } = Dm(t), { keyboardProps: o } = Yu(t), s = Te(l, o), u = B0(n), f = t.isDisabled ? {} : u, d = E.useRef(t.autoFocus);
  E.useEffect(() => {
    d.current && n.current && qo(n.current), d.current = !1;
  }, [
    n
  ]);
  let p = t.excludeFromTabOrder ? -1 : 0;
  return t.isDisabled && (p = void 0), {
    focusableProps: Te({
      ...s,
      tabIndex: p
    }, f)
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
  value: function(t) {
    return this.content.appendChild(t);
  }
}), Object.defineProperty(HTMLTemplateElement.prototype, "removeChild", {
  configurable: !0,
  enumerable: !0,
  value: function(t) {
    return this.content.removeChild(t);
  }
}), Object.defineProperty(HTMLTemplateElement.prototype, "insertBefore", {
  configurable: !0,
  enumerable: !0,
  value: function(t, n) {
    return this.content.insertBefore(t, n);
  }
}));
const ec = /* @__PURE__ */ E.createContext(!1);
function H0(t) {
  if (E.useContext(ec))
    return /* @__PURE__ */ $.createElement($.Fragment, null, t.children);
  let l = /* @__PURE__ */ $.createElement(ec.Provider, {
    value: !0
  }, t.children);
  return /* @__PURE__ */ $.createElement("template", null, l);
}
function U0(t) {
  let n = (l, o) => E.useContext(ec) ? null : t(l, o);
  return n.displayName = t.displayName || t.name, E.forwardRef(n);
}
var da = ym(), $u = { exports: {} }, ku = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ah;
function W0() {
  if (ah) return ku;
  ah = 1;
  var t = la();
  function n(v, g) {
    return v === g && (v !== 0 || 1 / v === 1 / g) || v !== v && g !== g;
  }
  var l = typeof Object.is == "function" ? Object.is : n, o = t.useState, s = t.useEffect, u = t.useLayoutEffect, f = t.useDebugValue;
  function d(v, g) {
    var S = g(), C = o({ inst: { value: S, getSnapshot: g } }), x = C[0].inst, F = C[1];
    return u(
      function() {
        x.value = S, x.getSnapshot = g, p(x) && F({ inst: x });
      },
      [v, S, g]
    ), s(
      function() {
        return p(x) && F({ inst: x }), v(function() {
          p(x) && F({ inst: x });
        });
      },
      [v]
    ), f(S), S;
  }
  function p(v) {
    var g = v.getSnapshot;
    v = v.value;
    try {
      var S = g();
      return !l(v, S);
    } catch {
      return !0;
    }
  }
  function h(v, g) {
    return g();
  }
  var y = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : d;
  return ku.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : y, ku;
}
var sh;
function G0() {
  return sh || (sh = 1, $u.exports = W0()), $u.exports;
}
var q0 = G0();
const Hm = /* @__PURE__ */ E.createContext(!1), ei = /* @__PURE__ */ E.createContext(null);
function Q0(t) {
  if (E.useContext(ei))
    return t.content;
  let { collection: l, document: o } = J0(t.createCollection);
  return /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement(H0, null, /* @__PURE__ */ $.createElement(ei.Provider, {
    value: o
  }, t.content)), /* @__PURE__ */ $.createElement(Z0, {
    render: t.children,
    collection: l
  }));
}
function Z0({ collection: t, render: n }) {
  return n(t);
}
function X0(t, n, l) {
  let o = sa(), s = E.useRef(o);
  s.current = o;
  let u = E.useCallback(() => s.current ? l() : n(), [
    n,
    l
  ]);
  return q0.useSyncExternalStore(t, u);
}
const Y0 = typeof $.useSyncExternalStore == "function" ? $.useSyncExternalStore : X0;
function J0(t) {
  let [n] = E.useState(() => new U1(t?.() || new H1())), l = E.useCallback((f) => n.subscribe(f), [
    n
  ]), o = E.useCallback(() => {
    let f = n.getCollection();
    return n.isSSR && n.resetAfterSSR(), f;
  }, [
    n
  ]), s = E.useCallback(() => (n.isSSR = !0, n.getCollection()), [
    n
  ]);
  return {
    collection: Y0(l, o, s),
    document: n
  };
}
const tc = /* @__PURE__ */ E.createContext(null);
function eb(t) {
  return class extends ci {
    static {
      this.type = t;
    }
  };
}
function tb(t, n, l, o, s, u) {
  typeof t == "string" && (t = eb(t));
  let f = E.useCallback((p) => {
    p?.setProps(n, l, t, o, u);
  }, [
    n,
    l,
    o,
    u,
    t
  ]), d = E.useContext(tc);
  if (d) {
    let p = d.ownerDocument.nodesByProps.get(n);
    return p || (p = d.ownerDocument.createElement(t.type), p.setProps(n, l, t, o, u), d.appendChild(p), d.ownerDocument.updateCollection(), d.ownerDocument.nodesByProps.set(n, p)), s ? /* @__PURE__ */ $.createElement(tc.Provider, {
      value: p
    }, s) : null;
  }
  return /* @__PURE__ */ $.createElement(t.type, {
    ref: f
  }, s);
}
function rb(t, n) {
  let l = ({ node: s }) => n(s.props, s.props.ref, s), o = E.forwardRef((s, u) => {
    let f = E.useContext(Ju);
    if (!E.useContext(Hm)) {
      if (n.length >= 3) throw new Error(n.name + " cannot be rendered outside a collection.");
      return n(s, u);
    }
    return tb(t, s, u, "children" in s ? s.children : null, null, (p) => (
      // Forward FocusableContext to real DOM tree so tooltips work.
      /* @__PURE__ */ $.createElement(Ju.Provider, {
        value: f
      }, /* @__PURE__ */ $.createElement(l, {
        node: p
      }))
    ));
  });
  return o.displayName = n.name, o;
}
function nb(t) {
  return Sm({
    ...t,
    addIdAndValue: !0
  });
}
const uh = /* @__PURE__ */ E.createContext(null);
function lb(t) {
  let n = E.useContext(uh), l = (n?.dependencies || []).concat(t.dependencies), o = t.idScope ?? n?.idScope, s = nb({
    ...t,
    idScope: o,
    dependencies: l
  });
  return E.useContext(ei) && (s = /* @__PURE__ */ $.createElement(ib, null, s)), n = E.useMemo(
    () => ({
      dependencies: (
        // oxlint-disable-next-line react-hooks/exhaustive-deps
        l
      ),
      idScope: o
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // oxlint-disable-next-line react/react-compiler, react-hooks/exhaustive-deps
    [
      o,
      ...l
    ]
  ), /* @__PURE__ */ $.createElement(uh.Provider, {
    value: n
  }, s);
}
function ib({ children: t }) {
  let n = E.useContext(ei), l = E.useMemo(() => /* @__PURE__ */ $.createElement(ei.Provider, {
    value: null
  }, /* @__PURE__ */ $.createElement(Hm.Provider, {
    value: !0
  }, t)), [
    t
  ]);
  return sa() ? /* @__PURE__ */ $.createElement(tc.Provider, {
    value: n
  }, l) : /* @__PURE__ */ da.createPortal(l, n);
}
const ob = "react-aria-clear-focus", ab = "react-aria-focus";
function Um(t) {
  let n = ub(He(t));
  n !== t && (n && sb(n, t), t && Wm(t, n));
}
function sb(t, n) {
  t.dispatchEvent(new FocusEvent("blur", {
    relatedTarget: n
  })), t.dispatchEvent(new FocusEvent("focusout", {
    bubbles: !0,
    relatedTarget: n
  }));
}
function Wm(t, n) {
  t.dispatchEvent(new FocusEvent("focus", {
    relatedTarget: n
  })), t.dispatchEvent(new FocusEvent("focusin", {
    bubbles: !0,
    relatedTarget: n
  }));
}
function ub(t) {
  let n = At(t), l = n?.getAttribute("aria-activedescendant");
  return l && t.getElementById(l) || n;
}
function Hl(t) {
  return Zt() ? t.metaKey : t.ctrlKey;
}
const cb = $.useInsertionEffect ?? Qt;
function Io(t) {
  const n = E.useRef(null);
  return cb(() => {
    n.current = t;
  }, [
    t
  ]), E.useCallback((...l) => {
    const o = n.current;
    return o?.(...l);
  }, []);
}
function Po(t, n, l, o) {
  let s = Io(l), u = l == null;
  E.useEffect(() => {
    if (!(u || t.current == null))
      return Y1(t.current, n, s, o);
  }, [
    t,
    n,
    o,
    u
  ]);
}
function Gm(t, n) {
  let { id: l, "aria-label": o, "aria-labelledby": s } = t;
  return l = ua(l), s && o ? s = [
    .../* @__PURE__ */ new Set([
      l,
      ...s.trim().split(/\s+/)
    ])
  ].join(" ") : s && (s = s.trim().split(/\s+/).join(" ")), !o && !s && n && (o = n), {
    id: l,
    "aria-label": o,
    "aria-labelledby": s
  };
}
const db = /* @__PURE__ */ new Set([
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
]), fb = /* @__PURE__ */ new Set([
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
function pb(t) {
  if (Intl.Locale) {
    let l = new Intl.Locale(t).maximize(), o = (
      // @ts-ignore - this was implemented as a property by some browsers before it was standardized as a function.
      typeof l.getTextInfo == "function" ? l.getTextInfo() : l.textInfo
    );
    if (o) return o.direction === "rtl";
    if (l.script) return db.has(l.script);
  }
  let n = t.split("-")[0];
  return fb.has(n);
}
const qm = Symbol.for("react-aria.i18n.locale");
function Qm() {
  let t = typeof window < "u" && window[qm] || // @ts-ignore
  typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([
      t
    ]);
  } catch {
    t = "en-US";
  }
  return {
    locale: t,
    direction: pb(t) ? "rtl" : "ltr"
  };
}
let rc = Qm(), Ul = /* @__PURE__ */ new Set();
function ch() {
  rc = Qm();
  for (let t of Ul) t(rc);
}
function hb() {
  let t = sa(), [n, l] = E.useState(rc);
  return E.useEffect(() => (Ul.size === 0 && window.addEventListener("languagechange", ch), Ul.add(l), () => {
    Ul.delete(l), Ul.size === 0 && window.removeEventListener("languagechange", ch);
  }), []), t ? {
    locale: typeof window < "u" && window[qm] || "en-US",
    direction: "ltr"
  } : n;
}
const mb = /* @__PURE__ */ $.createContext(null);
function Zm() {
  let t = hb();
  return E.useContext(mb) || t;
}
const gb = /* @__PURE__ */ new Set([
  "id"
]), vb = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), yb = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), bb = /* @__PURE__ */ new Set([
  "dir",
  "lang",
  "hidden",
  "inert",
  "translate"
]), dh = /* @__PURE__ */ new Set([
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
]), xb = /^(data-.*)$/;
function dn(t, n = {}) {
  let { labelable: l, isLink: o, global: s, events: u = s, propNames: f } = n, d = {};
  for (const p in t) Object.prototype.hasOwnProperty.call(t, p) && (gb.has(p) || l && vb.has(p) || o && yb.has(p) || s && bb.has(p) || u && (dh.has(p) || p.endsWith("Capture") && dh.has(p.slice(0, -7))) || f?.has(p) || xb.test(p)) && (d[p] = t[p]);
  return d;
}
let On = "default", nc = "", jo = /* @__PURE__ */ new WeakMap();
function wb(t) {
  if (di() && Yl()) {
    if (On === "default") {
      const n = He(t);
      nc = n.documentElement.style.webkitUserSelect, n.documentElement.style.webkitUserSelect = "none";
    }
    On = "disabled";
  } else if (t instanceof HTMLElement || t instanceof SVGElement) {
    let n = "userSelect" in t.style ? "userSelect" : "webkitUserSelect";
    jo.set(t, t.style[n]), t.style[n] = "none";
  }
}
function fh(t) {
  if (di() && Yl()) {
    if (On !== "disabled") return;
    On = "restoring", setTimeout(() => {
      Mm(() => {
        if (On === "restoring") {
          const n = He(t);
          n.documentElement.style.webkitUserSelect === "none" && (n.documentElement.style.webkitUserSelect = nc || ""), nc = "", On = "default";
        }
      });
    }, 300);
  } else if ((t instanceof HTMLElement || t instanceof SVGElement) && t && jo.has(t)) {
    let n = jo.get(t), l = "userSelect" in t.style ? "userSelect" : "webkitUserSelect";
    t.style[l] === "none" && (t.style[l] = n), t.getAttribute("style") === "" && t.removeAttribute("style"), jo.delete(t);
  }
}
function Sb(t, n) {
  let l = vt(n), o = He(n);
  if (o == null || l == null) return;
  let s, u = `meta[name="${CSS.escape(t)}"], meta[property="${CSS.escape(t)}"]`, f = o.querySelector(u);
  return f && f instanceof l.HTMLMetaElement && (t === "csp-nonce" && f.nonce && (s ??= f.nonce || void 0), f.content && (s ??= f.content || void 0)), t === "csp-nonce" && (s ??= l.__webpack_nonce__ || globalThis.__webpack_nonce__ || void 0), s;
}
let ph = /* @__PURE__ */ new WeakMap();
function Cb(t) {
  let n = He(t), l = ph.get(n);
  return l ??= Sb("csp-nonce", n), l !== void 0 && ph.set(n, l), l;
}
const Xm = $.createContext({
  register: () => {
  }
});
Xm.displayName = "PressResponderContext";
function fa() {
  let t = E.useRef(/* @__PURE__ */ new Map()), n = E.useCallback((s, u, f, d) => {
    let p = d?.once ? (...h) => {
      t.current.delete(f), f(...h);
    } : f;
    t.current.set(f, {
      type: u,
      eventTarget: s,
      fn: p,
      options: d
    }), s.addEventListener(u, p, d);
  }, []), l = E.useCallback((s, u, f, d) => {
    let p = t.current.get(f)?.fn || f;
    s.removeEventListener(u, p, d), t.current.delete(f);
  }, []), o = E.useCallback(() => {
    t.current.forEach((s, u) => {
      l(s.eventTarget, s.type, u, s.options);
    });
  }, [
    l
  ]);
  return E.useEffect(() => o, [
    o
  ]), {
    addGlobalListener: n,
    removeGlobalListener: l,
    removeAllGlobalListeners: o
  };
}
function Eb(t) {
  let n = E.useContext(Xm);
  if (n) {
    let { register: l, ref: o, ...s } = n;
    t = Te(s, t), l();
  }
  return Bm(n, t.ref), t;
}
class No {
  #e;
  constructor(n, l, o, s) {
    this.#e = !0;
    const f = (s?.target ?? o.currentTarget)?.getBoundingClientRect();
    let d, p = 0, h, y = null;
    o.clientX != null && o.clientY != null && (h = o.clientX, y = o.clientY), f && (h != null && y != null ? (d = h - f.left, p = y - f.top) : (d = f.width / 2, p = f.height / 2)), this.type = n, this.pointerType = l, this.target = o.currentTarget, this.shiftKey = o.shiftKey, this.metaKey = o.metaKey, this.ctrlKey = o.ctrlKey, this.altKey = o.altKey, this.x = d, this.y = p, this.key = o.key;
  }
  continuePropagation() {
    this.#e = !1;
  }
  get shouldStopPropagation() {
    return this.#e;
  }
}
const hh = Symbol("linkClicked"), mh = "react-aria-pressable-style", gh = "data-react-aria-pressable";
function fi(t) {
  let { onPress: n, onPressChange: l, onPressStart: o, onPressEnd: s, onPressUp: u, onClick: f, isDisabled: d, isPressed: p, preventFocusOnPress: h, shouldCancelOnPointerExit: y, allowTextSelectionOnPress: v, ref: g, ...S } = Eb(t), [C, x] = E.useState(!1), F = E.useRef({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: W, removeAllGlobalListeners: L } = fa(), X = E.useCallback((N, U) => {
    let M = F.current;
    if (d || M.didFirePressStart) return !1;
    let z = !0;
    if (M.isTriggeringEvent = !0, o) {
      let R = new No("pressstart", U, N);
      o(R), z = R.shouldStopPropagation;
    }
    return l && l(!0), M.isTriggeringEvent = !1, M.didFirePressStart = !0, x(!0), z;
  }, [
    d,
    o,
    l
  ]), J = E.useCallback((N, U, M = !0) => {
    let z = F.current;
    if (!z.didFirePressStart) return !1;
    z.didFirePressStart = !1, z.isTriggeringEvent = !0;
    let R = !0;
    if (s) {
      let T = new No("pressend", U, N);
      s(T), R = T.shouldStopPropagation;
    }
    if (l && l(!1), x(!1), n && M && !d) {
      let T = new No("press", U, N);
      n(T), R &&= T.shouldStopPropagation;
    }
    return z.isTriggeringEvent = !1, R;
  }, [
    d,
    s,
    l,
    n
  ]), fe = Io(J), ce = E.useCallback((N, U) => {
    let M = F.current;
    if (d) return !1;
    if (u) {
      M.isTriggeringEvent = !0;
      let z = new No("pressup", U, N);
      return u(z), M.isTriggeringEvent = !1, z.shouldStopPropagation;
    }
    return !0;
  }, [
    d,
    u
  ]), ue = Io(ce), pe = E.useCallback((N) => {
    let U = F.current;
    if (U.isPressed && U.target) {
      U.didFirePressStart && U.pointerType != null && J(on(U.target, N), U.pointerType, !1), U.isPressed = !1, U.isOverTarget = !1, U.activePointerId = null, U.pointerType = null, L(), v || fh(U.target);
      for (let M of U.disposables) M();
      U.disposables = [];
    }
  }, [
    v,
    L,
    J
  ]), ge = Io(pe);
  E.useEffect(() => {
    d && F.current.isPressed && ge({
      currentTarget: F.current.target,
      shiftKey: !1,
      ctrlKey: !1,
      metaKey: !1,
      altKey: !1
    });
  }, [
    d
  ]);
  let Ce = E.useCallback((N) => {
    y && pe(N);
  }, [
    y,
    pe
  ]), ye = E.useCallback((N) => {
    d || f?.(N);
  }, [
    d,
    f
  ]), K = E.useCallback((N, U) => {
    if (!d && f) {
      let M = new MouseEvent("click", N);
      _m(M, U), f(wc(M));
    }
  }, [
    d,
    f
  ]), G = E.useMemo(() => {
    let N = F.current, U = {
      onKeyDown(z) {
        if (_u(z.nativeEvent, z.currentTarget) && Ne(z.currentTarget, Se(z))) {
          vh(Se(z), z.key) && z.preventDefault();
          let R = !0;
          !N.isPressed && !z.repeat && (N.target = z.currentTarget, N.isPressed = !0, N.pointerType = "keyboard", R = X(z, "keyboard"));
          let T = z.currentTarget, B = (_) => {
            _u(_, T) && !_.repeat && Ne(T, Se(_)) && N.target && ue(on(N.target, _), "keyboard");
          };
          W(He(z.currentTarget), "keyup", Jl(B, M), !0), R && z.stopPropagation(), z.metaKey && Zt() && N.metaKeyEvents?.set(z.key, z.nativeEvent);
        } else z.key === "Meta" && (N.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(z) {
        if (!(z && !Ne(z.currentTarget, Se(z))) && z && z.button === 0 && !N.isTriggeringEvent && !vr.isOpening) {
          let R = !0;
          if (d && z.preventDefault(), !N.ignoreEmulatedMouseEvents && !N.isPressed && (N.pointerType === "virtual" || Nm(z.nativeEvent))) {
            let T = X(z, "virtual"), B = ue(z, "virtual"), _ = fe(z, "virtual");
            ye(z), R = T && B && _;
          } else if (N.isPressed && N.pointerType !== "keyboard") {
            let T = N.pointerType || z.nativeEvent.pointerType || "virtual", B = ue(on(z.currentTarget, z), T), _ = fe(on(z.currentTarget, z), T, !0);
            R = B && _, N.isOverTarget = !1, ye(z), ge(z);
          }
          N.ignoreEmulatedMouseEvents = !1, R && z.stopPropagation();
        }
      }
    }, M = (z) => {
      if (N.isPressed && N.target && _u(z, N.target)) {
        vh(Se(z), z.key) && z.preventDefault();
        let R = Se(z), T = Ne(N.target, R);
        fe(on(N.target, z), "keyboard", T), T && K(z, N.target), L(), z.key !== "Enter" && kc(N.target) && Ne(N.target, R) && !z[hh] && (z[hh] = !0, vr(N.target, z, !1)), N.isPressed = !1, N.metaKeyEvents?.delete(z.key);
      } else if (z.key === "Meta" && N.metaKeyEvents?.size) {
        let R = N.metaKeyEvents;
        N.metaKeyEvents = void 0;
        for (let T of R.values()) N.target?.dispatchEvent(new KeyboardEvent("keyup", T));
      }
    };
    if (typeof PointerEvent < "u") {
      U.onPointerDown = (T) => {
        if (T.button !== 0 || !Ne(T.currentTarget, Se(T))) return;
        if (c0(T.nativeEvent)) {
          N.pointerType = "virtual";
          return;
        }
        N.pointerType = T.pointerType;
        let B = !0;
        if (!N.isPressed) {
          N.isPressed = !0, N.isOverTarget = !0, N.activePointerId = T.pointerId, N.target = T.currentTarget, v || wb(N.target), B = X(T, N.pointerType);
          let _ = Se(T);
          "releasePointerCapture" in _ && ("hasPointerCapture" in _ ? _.hasPointerCapture(T.pointerId) && _.releasePointerCapture(T.pointerId) : _.releasePointerCapture(T.pointerId)), W(He(T.currentTarget), "pointerup", z, !1), W(He(T.currentTarget), "pointercancel", R, !1);
        }
        B && T.stopPropagation();
      }, U.onMouseDown = (T) => {
        if (Ne(T.currentTarget, Se(T)) && T.button === 0) {
          if (h) {
            let B = i0(T.target);
            B && N.disposables.push(B);
          }
          T.stopPropagation();
        }
      }, U.onPointerUp = (T) => {
        !Ne(T.currentTarget, Se(T)) || N.pointerType === "virtual" || T.button === 0 && !N.isPressed && ue(T, N.pointerType || T.pointerType);
      }, U.onPointerEnter = (T) => {
        T.pointerId === N.activePointerId && N.target && !N.isOverTarget && N.pointerType != null && (N.isOverTarget = !0, X(on(N.target, T), N.pointerType));
      }, U.onPointerLeave = (T) => {
        T.pointerId === N.activePointerId && N.target && N.isOverTarget && N.pointerType != null && (N.isOverTarget = !1, fe(on(N.target, T), N.pointerType, !1), Ce(T));
      };
      let z = (T) => {
        if (T.pointerId === N.activePointerId && N.isPressed && T.button === 0 && N.target) {
          if (Ne(N.target, Se(T)) && N.pointerType != null) {
            let B = !1, _ = setTimeout(() => {
              N.isPressed && N.target instanceof HTMLElement && (B ? ge(T) : (gr(N.target), N.target.click()));
            }, 80);
            W(T.currentTarget, "click", () => B = !0, !0), N.disposables.push(() => clearTimeout(_));
          } else ge(T);
          N.isOverTarget = !1;
        }
      }, R = (T) => {
        ge(T);
      };
      U.onDragStart = (T) => {
        Ne(T.currentTarget, Se(T)) && ge(T);
      };
    }
    return U;
  }, [
    W,
    d,
    h,
    L,
    v,
    Ce,
    X,
    ye,
    K
  ]);
  return E.useEffect(() => {
    if (!g) return;
    const N = He(g.current);
    if (!N || !N.head || N.getElementById(mh)) return;
    const U = N.createElement("style");
    U.id = mh;
    let M = Cb(N);
    M && (U.nonce = M), U.textContent = `
@layer {
  [${gh}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), N.head.prepend(U);
  }, [
    g
  ]), E.useEffect(() => {
    let N = F.current;
    return () => {
      v || fh(N.target ?? void 0);
      for (let U of N.disposables) U();
      N.disposables = [];
    };
  }, [
    v
  ]), {
    isPressed: p || C,
    // oxlint-disable-next-line react/react-compiler
    pressProps: Te(S, G, {
      [gh]: !0
    })
  };
}
function kc(t) {
  return t.tagName === "A" && t.hasAttribute("href");
}
function _u(t, n) {
  const { key: l, code: o } = t, s = n, u = s.getAttribute("role");
  return (l === "Enter" || l === " " || l === "Spacebar" || o === "Space") && !(s instanceof vt(s).HTMLInputElement && !Ym(s, l) || s instanceof vt(s).HTMLTextAreaElement || s.isContentEditable) && // Links should only trigger with Enter key
  !((u === "link" || !u && kc(s)) && l !== "Enter");
}
function on(t, n) {
  let l = n.clientX, o = n.clientY;
  return {
    currentTarget: t,
    shiftKey: n.shiftKey,
    ctrlKey: n.ctrlKey,
    metaKey: n.metaKey,
    altKey: n.altKey,
    clientX: l,
    clientY: o,
    key: n.key
  };
}
function $b(t) {
  return t instanceof HTMLInputElement ? !1 : t instanceof HTMLButtonElement ? t.type !== "submit" && t.type !== "reset" : !kc(t);
}
function vh(t, n) {
  return Zt() && n === "Enter" ? !1 : t instanceof HTMLInputElement ? n === "Enter" && (t.type === "checkbox" || t.type === "radio") ? !1 : !Ym(t, n) : $b(t);
}
const kb = /* @__PURE__ */ new Set([
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
function Ym(t, n) {
  return t.type === "checkbox" || t.type === "radio" ? n === " " : kb.has(t.type);
}
function Jm(t, n) {
  let { elementType: l = "a", onPress: o, onPressStart: s, onPressEnd: u, onPressChange: f, onClick: d, isDisabled: p, ...h } = t, y = {};
  l !== "a" && (y = {
    role: "link",
    tabIndex: p ? void 0 : 0
  });
  let { focusableProps: v } = $c(t, n), { pressProps: g, isPressed: S } = fi({
    onPress: o,
    onPressStart: s,
    onPressEnd: u,
    onPressChange: f,
    onClick: d,
    isDisabled: p,
    ref: n
  }), C = dn(h, {
    labelable: !0
  }), x = Te(v, g), F = aa(), W = Tm(t);
  return {
    isPressed: S,
    linkProps: Te(C, W, {
      ...x,
      ...y,
      "aria-disabled": p || void 0,
      "aria-current": t["aria-current"],
      onClick: (L) => {
        g.onClick?.(L), m0(L, F, t.href, t.routerOptions);
      }
    })
  };
}
function pa(t, n) {
  let { elementType: l = "button", isDisabled: o, onPress: s, onPressStart: u, onPressEnd: f, onPressUp: d, onPressChange: p, preventFocusOnPress: h, allowFocusWhenDisabled: y, onClick: v, href: g, target: S, rel: C, type: x = "button" } = t, F;
  l === "button" ? F = {
    type: x,
    disabled: o,
    form: t.form,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formMethod: t.formMethod,
    formNoValidate: t.formNoValidate,
    formTarget: t.formTarget,
    name: t.name,
    value: t.value
  } : F = {
    role: "button",
    href: l === "a" && !o ? g : void 0,
    target: l === "a" ? S : void 0,
    type: l === "input" ? x : void 0,
    disabled: l === "input" ? o : void 0,
    "aria-disabled": !o || l === "input" ? void 0 : o,
    rel: l === "a" ? C : void 0
  };
  let { pressProps: W, isPressed: L } = fi({
    onPressStart: u,
    onPressEnd: f,
    onPressChange: p,
    onPress: s,
    onPressUp: d,
    onClick: v,
    isDisabled: o,
    preventFocusOnPress: h,
    ref: n
  }), { focusableProps: X } = $c(t, n);
  y && (X.tabIndex = o ? -1 : X.tabIndex);
  let J = Te(X, W, dn(t, {
    labelable: !0
  }));
  return {
    isPressed: L,
    buttonProps: Te(F, J, {
      "aria-haspopup": t["aria-haspopup"],
      "aria-expanded": t["aria-expanded"],
      "aria-controls": t["aria-controls"],
      "aria-pressed": t["aria-pressed"],
      "aria-current": t["aria-current"],
      "aria-disabled": t["aria-disabled"]
    })
  };
}
class _b {
  constructor(n, l, o, s) {
    this._walkerStack = [], this._currentSetFor = /* @__PURE__ */ new Set(), this._acceptNode = (f) => {
      if (f.nodeType === Node.ELEMENT_NODE) {
        const d = f.shadowRoot;
        if (d) {
          const p = this._doc.createTreeWalker(d, this.whatToShow, {
            acceptNode: this._acceptNode
          });
          return this._walkerStack.unshift(p), NodeFilter.FILTER_ACCEPT;
        } else {
          if (typeof this.filter == "function") return this.filter(f);
          if (this.filter?.acceptNode) return this.filter.acceptNode(f);
          if (this.filter === null) return NodeFilter.FILTER_ACCEPT;
        }
      }
      return NodeFilter.FILTER_SKIP;
    }, this._doc = n, this.root = l, this.filter = s ?? null, this.whatToShow = o ?? NodeFilter.SHOW_ALL, this._currentNode = l, this._walkerStack.unshift(n.createTreeWalker(l, o, this._acceptNode));
    const u = l.shadowRoot;
    if (u) {
      const f = this._doc.createTreeWalker(u, this.whatToShow, {
        acceptNode: this._acceptNode
      });
      this._walkerStack.unshift(f);
    }
  }
  get currentNode() {
    return this._currentNode;
  }
  set currentNode(n) {
    if (!Ne(this.root, n)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
    const l = [];
    let o = n, s = n;
    for (this._currentNode = n; o && o !== this.root; ) if (o.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      const f = o, d = this._doc.createTreeWalker(f, this.whatToShow, {
        acceptNode: this._acceptNode
      });
      l.push(d), d.currentNode = s, this._currentSetFor.add(d), o = s = f.host;
    } else o = o.parentNode;
    const u = this._doc.createTreeWalker(this.root, this.whatToShow, {
      acceptNode: this._acceptNode
    });
    l.push(u), u.currentNode = s, this._currentSetFor.add(u), this._walkerStack = l;
  }
  get doc() {
    return this._doc;
  }
  firstChild() {
    let n = this.currentNode, l = this.nextNode();
    return Ne(n, l) ? (l && (this.currentNode = l), l) : (this.currentNode = n, null);
  }
  lastChild() {
    let l = this._walkerStack[0].lastChild();
    return l && (this.currentNode = l), l;
  }
  nextNode() {
    const n = this._walkerStack[0].nextNode();
    if (n) {
      if (n.shadowRoot) {
        let o;
        if (typeof this.filter == "function" ? o = this.filter(n) : this.filter?.acceptNode && (o = this.filter.acceptNode(n)), o === NodeFilter.FILTER_ACCEPT)
          return this.currentNode = n, n;
        let s = this.nextNode();
        return s && (this.currentNode = s), s;
      }
      return n && (this.currentNode = n), n;
    } else if (this._walkerStack.length > 1) {
      this._walkerStack.shift();
      let l = this.nextNode();
      return l && (this.currentNode = l), l;
    } else return null;
  }
  previousNode() {
    const n = this._walkerStack[0];
    if (n.currentNode === n.root) {
      if (this._currentSetFor.has(n))
        if (this._currentSetFor.delete(n), this._walkerStack.length > 1) {
          this._walkerStack.shift();
          let o = this.previousNode();
          return o && (this.currentNode = o), o;
        } else return null;
      return null;
    }
    const l = n.previousNode();
    if (l) {
      if (l.shadowRoot) {
        let s;
        if (typeof this.filter == "function" ? s = this.filter(l) : this.filter?.acceptNode && (s = this.filter.acceptNode(l)), s === NodeFilter.FILTER_ACCEPT)
          return l && (this.currentNode = l), l;
        let u = this.lastChild();
        return u && (this.currentNode = u), u;
      }
      return l && (this.currentNode = l), l;
    } else if (this._walkerStack.length > 1) {
      this._walkerStack.shift();
      let o = this.previousNode();
      return o && (this.currentNode = o), o;
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
function Fb(t, n, l, o) {
  return ia() ? new _b(t, n, l, o) : t.createTreeWalker(n, l, o);
}
function Pb(t) {
  if (!t.form)
    return Array.from(He(t).querySelectorAll(`input[type="radio"][name="${CSS.escape(t.name)}"]`)).filter((o) => !o.form);
  const n = t.form.elements.namedItem(t.name);
  let l = vt(t);
  return n instanceof l.RadioNodeList ? Array.from(n).filter((o) => o instanceof l.HTMLInputElement) : n instanceof l.HTMLInputElement ? [
    n
  ] : [];
}
function Nb(t) {
  if (t.checked) return !0;
  const n = Pb(t);
  return n.length > 0 && !n.some((l) => l.checked);
}
function eg(t, n) {
  return !t || !n ? !1 : n.some((l) => Ne(l, t));
}
function tg(t, n, l) {
  let o = n?.tabbable ? xc : $m, s = t?.nodeType === Node.ELEMENT_NODE ? t : null, u = He(s), f = Fb(u, t || u, NodeFilter.SHOW_ELEMENT, {
    acceptNode(d) {
      return Ne(n?.from, d) || n?.tabbable && d.tagName === "INPUT" && d.getAttribute("type") === "radio" && (!Nb(d) || f.currentNode.tagName === "INPUT" && f.currentNode.type === "radio" && f.currentNode.name === d.name) ? NodeFilter.FILTER_REJECT : o(d) && (!l || eg(d, l)) && (!n?.accept || n.accept(d)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  return n?.from && (f.currentNode = n.from), f;
}
class _c {
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map(), this.root = new yh({
      scopeRef: null
    }), this.fastMap.set(null, this.root);
  }
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(n) {
    return this.fastMap.get(n);
  }
  addTreeNode(n, l, o) {
    let s = this.fastMap.get(l ?? null);
    if (!s) return;
    let u = new yh({
      scopeRef: n
    });
    s.addChild(u), u.parent = s, this.fastMap.set(n, u), o && (u.nodeToRestore = o);
  }
  addNode(n) {
    this.fastMap.set(n.scopeRef, n);
  }
  removeTreeNode(n) {
    if (n === null) return;
    let l = this.fastMap.get(n);
    if (!l) return;
    let o = l.parent;
    for (let u of this.traverse()) u !== l && l.nodeToRestore && u.nodeToRestore && l.scopeRef && l.scopeRef.current && eg(u.nodeToRestore, l.scopeRef.current) && (u.nodeToRestore = l.nodeToRestore);
    let s = l.children;
    o && (o.removeChild(l), s.size > 0 && s.forEach((u) => o && o.addChild(u))), this.fastMap.delete(l.scopeRef);
  }
  // Pre Order Depth First
  *traverse(n = this.root) {
    if (n.scopeRef != null && (yield n), n.children.size > 0) for (let l of n.children) yield* this.traverse(l);
  }
  clone() {
    let n = new _c();
    for (let l of this.traverse()) n.addTreeNode(l.scopeRef, l.parent?.scopeRef ?? null, l.nodeToRestore);
    return n;
  }
}
class yh {
  constructor(n) {
    this.children = /* @__PURE__ */ new Set(), this.contain = !1, this.scopeRef = n.scopeRef;
  }
  addChild(n) {
    this.children.add(n), n.parent = this;
  }
  removeChild(n) {
    this.children.delete(n), n.parent = void 0;
  }
}
new _c();
function Tb(t, n) {
  if (!t) return !1;
  let l = window.getComputedStyle(t), o = document.scrollingElement || document.documentElement, s = /(auto|scroll)/.test(l.overflow + l.overflowX + l.overflowY);
  return t === o && l.overflow !== "hidden" && (s = !0), s && n && (s = t.scrollHeight !== t.clientHeight || t.scrollWidth !== t.clientWidth), s;
}
function Fu(t, n) {
  let l = [], o = document.scrollingElement || document.documentElement;
  for (; t && (Tb(t, n) && l.push(t), t !== o); )
    t = t.parentElement;
  return l;
}
function Mo(t, n, l = {}) {
  if (t === n) return;
  let o = n.getBoundingClientRect();
  Ab(t, n, o, l);
}
function Ab(t, n, l, o = {}) {
  let { block: s = "nearest", inline: u = "nearest" } = o, f = t.scrollTop, d = t.scrollLeft, p = t.getBoundingClientRect(), h = window.getComputedStyle(n), y = window.getComputedStyle(t), v = document.scrollingElement || document.documentElement, g = t === v, S = t === v ? 0 : p.top, C = t === v ? t.clientHeight : p.bottom, x = t === v ? 0 : p.left, F = t === v ? t.clientWidth : p.right, W = parseFloat(h.scrollMarginTop) || 0, L = parseFloat(h.scrollMarginBottom) || 0, X = parseFloat(h.scrollMarginLeft) || 0, J = parseFloat(h.scrollMarginRight) || 0, fe = parseFloat(y.scrollPaddingTop) || 0, ce = parseFloat(y.scrollPaddingBottom) || 0, ue = parseFloat(y.scrollPaddingLeft) || 0, pe = parseFloat(y.scrollPaddingRight) || 0, ge = parseFloat(y.borderTopWidth) || 0, Ce = parseFloat(y.borderBottomWidth) || 0, ye = parseFloat(y.borderLeftWidth) || 0, K = parseFloat(y.borderRightWidth) || 0, G = l.top - W, N = l.bottom + L, U = l.left - X, M = l.right + J, z = t === v ? 0 : ye + K, R = t === v ? 0 : ge + Ce, T = t === v ? 0 : t.offsetWidth - t.clientWidth - z, B = t === v ? 0 : t.offsetHeight - t.clientHeight - R, _ = S + (g ? 0 : ge) + fe, V = C - (g ? 0 : Ce) - ce - B, de = x + (g ? 0 : ye) + ue, ae = F - (g ? 0 : K) - pe;
  di() && Yl() || y.direction === "ltr" ? ae -= T : y.direction === "rtl" && (de += T);
  let H = G < _ || N > V, ne = U < de || M > ae;
  if (H && s === "start") f += G - _;
  else if (H && s === "center") f += (G + N) / 2 - (_ + V) / 2;
  else if (H && s === "end") f += N - V;
  else if (H && s === "nearest") {
    let be = G - _, $e = N - V;
    f += Math.abs(be) <= Math.abs($e) ? be : $e;
  }
  if (ne && u === "start") d += U - de;
  else if (ne && u === "center") d += (U + M) / 2 - (de + ae) / 2;
  else if (ne && u === "end") d += M - ae;
  else if (ne && u === "nearest") {
    let be = U - de, $e = M - ae;
    d += Math.abs(be) <= Math.abs($e) ? be : $e;
  }
  t.scrollTo({
    left: d,
    top: f
  });
}
function bh(t, n = {}) {
  let { containingElement: l } = n;
  if (t && t.isConnected) {
    let o = document.scrollingElement || document.documentElement;
    if (window.getComputedStyle(o).overflow === "hidden") {
      let { left: u, top: f } = t.getBoundingClientRect(), d = Fu(t, !0);
      for (let y of d) Mo(y, t);
      let { left: p, top: h } = t.getBoundingClientRect();
      if (Math.abs(u - p) > 1 || Math.abs(f - h) > 1) {
        d = l ? Fu(l, !0) : [];
        for (let y of d) Mo(y, l, {
          block: "center",
          inline: "center"
        });
        for (let y of Fu(t, !0)) Mo(y, t);
      }
    } else {
      let { left: u, top: f } = t.getBoundingClientRect();
      t?.scrollIntoView?.({
        block: "nearest"
      });
      let { left: d, top: p } = t.getBoundingClientRect();
      (Math.abs(u - d) > 1 || Math.abs(f - p) > 1) && (l?.scrollIntoView?.({
        block: "center",
        inline: "center"
      }), t.scrollIntoView?.({
        block: "nearest"
      }));
    }
  }
}
let zb = 0;
const Pu = /* @__PURE__ */ new Map();
function Rb(t) {
  let [n, l] = E.useState();
  return Qt(() => {
    if (!t) return;
    let o = Pu.get(t);
    if (o)
      l(o.element.id);
    else {
      let s = `react-aria-description-${zb++}`;
      l(s);
      let u = document.createElement("div");
      u.id = s, u.style.display = "none", u.textContent = t, document.body.appendChild(u), o = {
        refCount: 0,
        element: u
      }, Pu.set(t, o);
    }
    return o.refCount++, () => {
      o && --o.refCount === 0 && (o.element.remove(), Pu.delete(t));
    };
  }, [
    t
  ]), {
    "aria-describedby": t ? n : void 0
  };
}
function Lb(t) {
  let { isDisabled: n, onBlurWithin: l, onFocusWithin: o, onFocusWithinChange: s } = t, u = E.useRef({
    isFocusWithin: !1
  }), { addGlobalListener: f, removeAllGlobalListeners: d } = fa(), p = E.useCallback((v) => {
    Ne(v.currentTarget, Se(v)) && u.current.isFocusWithin && !Ne(v.currentTarget, v.relatedTarget) && (u.current.isFocusWithin = !1, d(), l && l(v), s && s(!1));
  }, [
    l,
    s,
    u,
    d
  ]), h = Fm(p), y = E.useCallback((v) => {
    if (!Ne(v.currentTarget, Se(v))) return;
    let g = Se(v);
    const S = He(g), C = At(S);
    if (!u.current.isFocusWithin && C === g) {
      o && o(v), s && s(!0), u.current.isFocusWithin = !0, h(v);
      let x = v.currentTarget;
      f(S, "focus", (F) => {
        let W = Se(F);
        if (u.current.isFocusWithin && !Ne(x, W)) {
          let L = new S.defaultView.FocusEvent("blur", {
            relatedTarget: W
          });
          _m(L, x);
          let X = wc(L);
          p(X);
        }
      }, {
        capture: !0
      });
    }
  }, [
    o,
    s,
    h,
    f,
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
      onFocus: y,
      onBlur: p
    }
  };
}
const Ib = typeof document < "u" ? $.useInsertionEffect ?? $.useLayoutEffect : () => {
};
function rg(t, n, l) {
  let [o, s] = E.useState(t || n), u = E.useRef(o), f = E.useRef(t !== void 0), d = t !== void 0;
  E.useEffect(() => {
    f.current, f.current = d;
  }, [
    d
  ]);
  let p = d ? t : o;
  Ib(() => {
    u.current = p;
  });
  let [, h] = E.useReducer(() => ({}), {}), y = E.useCallback((v, ...g) => {
    let S = typeof v == "function" ? v(u.current) : v;
    Object.is(u.current, S) || (u.current = S, s(S), h(), l?.(S, ...g));
  }, [
    l
  ]);
  return [
    p,
    y
  ];
}
function lc(t) {
  return a0() ? t.altKey : t.ctrlKey;
}
function Nu(t, n) {
  let l = `[data-key="${CSS.escape(String(n))}"]`, o = t.current?.dataset.collection;
  return o && (l = `[data-collection="${CSS.escape(o)}"]${l}`), t.current?.querySelector(l);
}
const ng = /* @__PURE__ */ new WeakMap();
function jb(t) {
  let n = ua();
  return ng.set(t, n), n;
}
function Mb(t) {
  return ng.get(t);
}
const Kb = 500;
function Db(t) {
  let { isDisabled: n, pointerType: l, onLongPressStart: o, onLongPressEnd: s, onLongPress: u, threshold: f = Kb, accessibilityDescription: d } = t;
  const p = E.useRef(void 0);
  let { addGlobalListener: h, removeAllGlobalListeners: y } = fa(), v = (C) => l ? C.pointerType === l : C.pointerType === "mouse" || C.pointerType === "touch", { pressProps: g } = fi({
    isDisabled: n,
    onPressStart(C) {
      if (C.continuePropagation(), v(C)) {
        o && o({
          ...C,
          type: "longpressstart"
        }), p.current = setTimeout(() => {
          C.target.dispatchEvent(new PointerEvent("pointercancel", {
            bubbles: !0
          })), h(C.target, "click", (F) => F.preventDefault(), {
            once: !0
          }), He(C.target).activeElement !== C.target && gr(C.target), u && u({
            ...C,
            type: "longpress"
          }), p.current = void 0;
        }, f), C.pointerType === "touch" && h(C.target, "contextmenu", (F) => F.preventDefault(), {
          once: !0
        });
        let x = vt(C.target);
        h(x, "pointerup", () => {
          setTimeout(() => {
            y();
          }, 100);
        }, {
          once: !0
        });
      }
    },
    onPressEnd(C) {
      p.current && clearTimeout(p.current), s && v(C) && s({
        ...C,
        type: "longpressend"
      });
    }
  }), S = Rb(u && !n ? d : void 0);
  return {
    longPressProps: Te(g, S)
  };
}
const xh = 1e3;
function Ob(t) {
  let { keyboardDelegate: n, selectionManager: l, onTypeSelect: o } = t, s = E.useRef({
    search: "",
    timeout: void 0
  }), u = (d) => {
    if (s.current.search.length > 0 && d.key === " ") {
      if (d.preventDefault(), (!("continuePropagation" in d) || "continuePropagation" in d && !d.isPropagationStopped()) && d.stopPropagation(), s.current.search += " ", n.getKeyForSearch != null) {
        let p = n.getKeyForSearch(s.current.search, l.focusedKey);
        p == null && (p = n.getKeyForSearch(s.current.search)), p != null && (l.setFocusedKey(p), o && o(p));
      }
      clearTimeout(s.current.timeout), s.current.timeout = setTimeout(() => {
        s.current.search = "";
      }, xh);
    }
  }, f = (d) => {
    let p = Vb(d.key);
    if (!(!p || d.ctrlKey || d.metaKey || d.altKey || !Ne(d.currentTarget, Se(d)) || s.current.search.length === 0 && p === " ")) {
      if (s.current.search += p, n.getKeyForSearch != null) {
        let h = n.getKeyForSearch(s.current.search, l.focusedKey);
        if (h == null && (h = n.getKeyForSearch(s.current.search)), h != null)
          l.setFocusedKey(h), o && o(h), d.preventDefault(), "continuePropagation" in d || d.stopPropagation();
        else {
          s.current.search = "", clearTimeout(s.current.timeout), s.current.timeout = void 0;
          return;
        }
      }
      clearTimeout(s.current.timeout), s.current.timeout = setTimeout(() => {
        s.current.search = "";
      }, xh);
    }
  };
  return E.useEffect(() => {
    let d = s.current.timeout;
    return () => {
      clearTimeout(d);
    };
  }, [
    s
  ]), {
    typeSelectProps: {
      // Using a capturing listener to catch the keydown event before
      // other hooks in order to handle the Spacebar event.
      onKeyDownCapture: n.getKeyForSearch ? u : void 0,
      onKeyDown: n.getKeyForSearch ? f : void 0
    }
  };
}
function Vb(t) {
  return t.length === 1 || !/^[A-Z]/i.test(t) ? t : "";
}
function wh(t, n) {
  const l = E.useRef(!0), o = E.useRef(null);
  Qt(() => (l.current = !0, () => {
    l.current = !1;
  }), []), Qt(() => {
    l.current ? l.current = !1 : (!o.current || n.some((s, u) => !Object.is(s, o[u]))) && t(), o.current = n;
  }, n);
}
function Bb(t) {
  let { selectionManager: n, keyboardDelegate: l, ref: o, autoFocus: s = !1, shouldFocusWrap: u = !1, disallowEmptySelection: f = !1, disallowSelectAll: d = !1, escapeKeyBehavior: p = "clearSelection", selectOnFocus: h = n.selectionBehavior === "replace", disallowTypeAhead: y = !1, shouldUseVirtualFocus: v, allowsTabNavigation: g = !1, scrollRef: S = o, linkBehavior: C = "action", UNSTABLE_focusOnEntry: x } = t, { direction: F } = Zm(), W = aa();
  const L = (ee, te, Ze) => {
    if (te != null) {
      if (n.isLink(te) && C === "selection" && h && !lc(ee)) {
        da.flushSync(() => {
          n.setFocusedKey(te, Ze);
        });
        let Ue = Nu(o, te), Jn = n.getItemProps(te);
        if (Ue) {
          W.open(Ue, ee, Jn.href, Jn.routerOptions);
          return;
        }
        return !1;
      }
      if (n.setFocusedKey(te, Ze), n.isLink(te) && C === "override") return !1;
      if (ee.shiftKey && n.selectionMode === "multiple") {
        n.extendSelection(te);
        return;
      } else if (h && !lc(ee)) {
        n.replaceSelection(te);
        return;
      }
    }
    return !1;
  };
  let X = (ee) => {
    if (l.getKeyBelow) {
      let te = n.focusedKey != null ? l.getKeyBelow?.(n.focusedKey) : l.getFirstKey?.();
      if (te == null && u && (te = l.getFirstKey?.(n.focusedKey)), te != null) {
        L(ee, te);
        return;
      }
    }
    return !1;
  }, J = (ee) => {
    if (l.getKeyAbove) {
      let te = n.focusedKey != null ? l.getKeyAbove?.(n.focusedKey) : l.getLastKey?.();
      if (te == null && u && (te = l.getLastKey?.(n.focusedKey)), te != null) {
        L(ee, te);
        return;
      }
    }
    return !1;
  }, fe = (ee) => {
    if (l.getFirstKey) {
      if (n.focusedKey === null && ee.shiftKey) return !1;
      let te = l.getFirstKey(n.focusedKey, Hl(ee));
      if (n.setFocusedKey(te), te != null) {
        if (Hl(ee) && ee.shiftKey && n.selectionMode === "multiple") {
          n.extendSelection(te);
          return;
        } else if (h) {
          n.replaceSelection(te);
          return;
        }
      }
    }
    return !1;
  }, ce = (ee) => {
    if (l.getKeyLeftOf) {
      let te = n.focusedKey != null ? l.getKeyLeftOf?.(n.focusedKey) : l.getFirstKey?.();
      if (te == null && u && (te = F === "rtl" ? l.getFirstKey?.(n.focusedKey) : l.getLastKey?.(n.focusedKey)), te != null) {
        L(ee, te, F === "rtl" ? "first" : "last");
        return;
      }
    }
    return !1;
  }, ue = (ee) => {
    if (l.getKeyRightOf) {
      let te = n.focusedKey != null ? l.getKeyRightOf?.(n.focusedKey) : l.getFirstKey?.();
      if (te == null && u && (te = F === "rtl" ? l.getLastKey?.(n.focusedKey) : l.getFirstKey?.(n.focusedKey)), te != null) {
        L(ee, te, F === "rtl" ? "last" : "first");
        return;
      }
    }
    return !1;
  }, pe = (ee) => {
    if (l.getLastKey) {
      if (n.focusedKey === null && ee.shiftKey) return !1;
      let te = l.getLastKey(n.focusedKey, Hl(ee));
      if (n.setFocusedKey(te), te != null) {
        if (Hl(ee) && ee.shiftKey && n.selectionMode === "multiple") {
          n.extendSelection(te);
          return;
        } else if (h) {
          n.replaceSelection(te);
          return;
        }
      }
    }
    return !1;
  }, ge = (ee) => {
    if (l.getKeyPageBelow && n.focusedKey != null) {
      let te = l.getKeyPageBelow(n.focusedKey);
      if (te != null) return L(ee, te);
    }
    return !1;
  }, Ce = (ee) => {
    if (l.getKeyPageAbove && n.focusedKey != null) {
      let te = l.getKeyPageAbove(n.focusedKey);
      if (te != null) return L(ee, te);
    }
    return !1;
  }, ye = () => {
    if (n.selectionMode === "multiple" && d !== !0) {
      n.selectAll();
      return;
    }
    return !1;
  }, K = () => {
    if (p === "clearSelection" && !f && n.selectedKeys.size !== 0) {
      n.clearSelection();
      return;
    }
    return !1;
  }, G = () => {
    if (!g && o.current) {
      let ee = tg(o.current, {
        tabbable: !0
      }), te, Ze;
      do
        Ze = ee.lastChild(), Ze && (te = Ze);
      while (Ze);
      let Ue = At();
      te && (!lh(te) || Ue && !xc(Ue)) && gr(te);
    }
    return {
      shouldContinuePropagation: !0,
      shouldPreventDefault: !1
    };
  }, N = () => (!g && o.current && o.current.focus(), {
    shouldContinuePropagation: !0,
    shouldPreventDefault: !1
  }), U = (ee, te) => ({
    [Zt() ? ee + "+Shift+Alt" : ee + "+Shift+Control"]: te,
    [ee + "+Shift"]: te,
    [Zt() ? ee + "+Alt" : ee + "+Control"]: te,
    [ee]: te
  }), { keyboardProps: M } = Yu({
    shortcuts: {
      ...U("ArrowDown", X),
      ...U("ArrowUp", J),
      ...U("ArrowLeft", ce),
      ...U("ArrowRight", ue),
      ...U("PageDown", ge),
      ...U("PageUp", Ce)
    },
    allowRepeats: !0
  }), { keyboardProps: z } = Yu({
    shortcuts: {
      ...U("Home", fe),
      ...U("End", pe),
      "Mod+A": ye,
      Escape: K,
      Tab: G,
      "Tab+Shift": N
    }
  }), R = E.useRef({
    top: 0,
    left: 0
  });
  Po(S, "scroll", () => {
    R.current = {
      top: S.current?.scrollTop ?? 0,
      left: S.current?.scrollLeft ?? 0
    };
  });
  let T = (ee) => {
    if (n.isFocused) {
      Ne(ee.currentTarget, Se(ee)) || n.setFocused(!1);
      return;
    }
    if (!Ne(ee.currentTarget, Se(ee))) return;
    let te = Zu();
    n.setFocused(!0);
    let Ze = (Ue) => {
      Ue != null && (n.setFocusedKey(Ue), h && !n.isSelected(Ue) && n.replaceSelection(Ue));
    };
    if (x && (te === "keyboard" || te === "virtual"))
      Ze(x === "first" ? l.getFirstKey?.() : l.getLastKey?.());
    else if (n.focusedKey == null) {
      let Ue = ee.relatedTarget;
      Ue && ee.currentTarget.compareDocumentPosition(Ue) & Node.DOCUMENT_POSITION_FOLLOWING ? Ze(n.lastSelectedKey ?? l.getLastKey?.()) : Ze(n.firstSelectedKey ?? l.getFirstKey?.());
    } else S.current && (S.current.scrollTop = R.current.top, S.current.scrollLeft = R.current.left);
    if (n.focusedKey != null && S.current) {
      let Ue = Nu(o, n.focusedKey);
      Ue instanceof HTMLElement && (!lh(Ue) && !v && gr(Ue), (te === "keyboard" || x && te === "virtual") && bh(Ue, {
        containingElement: o.current
      }));
    }
  }, B = (ee) => {
    Ne(ee.currentTarget, ee.relatedTarget) || n.setFocused(!1);
  }, _ = E.useRef(!1);
  Po(o, ab, v ? (ee) => {
    let { detail: te } = ee;
    ee.stopPropagation(), n.setFocused(!0), te?.focusStrategy === "first" && (_.current = !0);
  } : void 0);
  let V = l.getFirstKey?.() ?? null;
  wh(() => {
    if (_.current)
      if (V == null) {
        let ee = At();
        Um(o.current), Wm(ee, null), n.collection.size > 0 && (_.current = !1);
      } else
        n.setFocusedKey(V), _.current = !1;
  }, [
    V,
    n.collection.size
  ]), wh(() => {
    n.collection.size > 0 && (_.current = !1);
  }, [
    n.focusedKey
  ]), Po(o, ob, v ? (ee) => {
    ee.stopPropagation(), n.setFocused(!1), ee.detail?.clearFocusKey && n.setFocusedKey(null);
  } : void 0);
  const de = E.useRef(s), ae = E.useRef(!1);
  E.useEffect(() => {
    if (de.current) {
      let ee = null;
      s === "first" && (ee = l.getFirstKey?.() ?? null), s === "last" && (ee = l.getLastKey?.() ?? null);
      let te = n.selectedKeys;
      if (te.size) {
        for (let Ze of te) if (n.canSelectItem(Ze)) {
          ee = Ze;
          break;
        }
      }
      n.setFocused(!0), n.setFocusedKey(ee), ee != null && h && !te.size && n.canSelectItem(ee) && n.replaceSelection(ee), ee == null && !v && o.current && qo(o.current), n.collection.size > 0 && (de.current = !1, ae.current = !0);
    }
  });
  let H = E.useRef(n.focusedKey), ne = E.useRef(null);
  E.useEffect(() => {
    if (n.isFocused && n.focusedKey != null && (n.focusedKey !== H.current || ae.current) && S.current && o.current) {
      let ee = Zu(), te = Nu(o, n.focusedKey);
      if (!(te instanceof HTMLElement))
        return;
      (ee === "keyboard" || ae.current) && (ne.current && cancelAnimationFrame(ne.current), ne.current = requestAnimationFrame(() => {
        S.current && (Mo(S.current, te), ee !== "virtual" && bh(te, {
          containingElement: o.current
        }));
      }));
    }
    !v && n.isFocused && n.focusedKey == null && H.current != null && o.current && qo(o.current), H.current = n.focusedKey, ae.current = !1;
  }), E.useEffect(() => () => {
    ne.current && cancelAnimationFrame(ne.current);
  }, []), Po(o, "react-aria-focus-scope-restore", (ee) => {
    ee.preventDefault(), n.setFocused(!0);
  });
  let be = {
    ...Te(z, M),
    onFocus: T,
    onBlur: B,
    onMouseDown(ee) {
      S.current === Se(ee) && ee.preventDefault();
    }
  }, { typeSelectProps: $e } = Ob({
    keyboardDelegate: l,
    selectionManager: n
  });
  y || (be = Te($e, be));
  let Ae;
  v || (Ae = n.focusedKey == null ? 0 : -1);
  let ht = jb(n.collection);
  return {
    // oxlint-disable-next-line react/react-compiler
    collectionProps: Te(be, {
      tabIndex: Ae,
      "data-collection": ht
    })
  };
}
function Hb(t, n) {
  return typeof n.getChildren == "function" ? n.getChildren(t.key) : t.childNodes;
}
function Ub(t) {
  return Wb(t);
}
function Wb(t, n) {
  for (let l of t)
    return l;
}
function Tu(t, n, l) {
  if (n.parentKey === l.parentKey) return n.index - l.index;
  let o = [
    ...Sh(t, n),
    n
  ], s = [
    ...Sh(t, l),
    l
  ], u = o.slice(0, s.length).findIndex((f, d) => f !== s[d]);
  return u !== -1 ? (n = o[u], l = s[u], n.index - l.index) : o.findIndex((f) => f === l) >= 0 ? 1 : (s.findIndex((f) => f === n) >= 0, -1);
}
function Sh(t, n) {
  let l = [], o = n;
  for (; o?.parentKey != null; )
    o = t.getItem(o.parentKey), o && l.unshift(o);
  return l;
}
function ha(t = {}) {
  let { autoFocus: n = !1, isTextInput: l, within: o } = t, s = E.useRef({
    isFocused: !1,
    isFocusVisible: n || Qu()
  }), [u, f] = E.useState(!1), [d, p] = E.useState(
    // oxlint-disable-next-line react/react-compiler
    () => s.current.isFocused && s.current.isFocusVisible
  ), h = E.useCallback(() => p(s.current.isFocused && s.current.isFocusVisible), []), y = E.useCallback((S) => {
    s.current.isFocused = S, s.current.isFocusVisible = Qu(), f(S), h();
  }, [
    h
  ]);
  P0((S) => {
    s.current.isFocusVisible = S, h();
  }, [
    l,
    u
  ], {
    enabled: u,
    isTextInput: l
  });
  let { focusProps: v } = Dm({
    isDisabled: o,
    onFocusChange: y
  }), { focusWithinProps: g } = Lb({
    isDisabled: !o,
    onFocusWithinChange: y
  });
  return {
    isFocused: u,
    isFocusVisible: d,
    focusProps: o ? g : v
  };
}
function lg(t) {
  let { children: n, focusClass: l, focusRingClass: o } = t, { isFocused: s, isFocusVisible: u, focusProps: f } = ha(t), d = $.Children.only(n);
  return /* @__PURE__ */ $.cloneElement(d, Te(d.props, {
    ...f,
    className: Ec({
      [l || ""]: s,
      [o || ""]: u
    })
  }));
}
let ic = !1, To = 0;
function Gb() {
  ic = !0, setTimeout(() => {
    ic = !1;
  }, 500);
}
function Ch(t) {
  t.pointerType === "touch" && Gb();
}
function qb() {
  let t = He(null);
  if (!(typeof t > "u"))
    return To === 0 && typeof PointerEvent < "u" && t.addEventListener("pointerup", Ch), To++, () => {
      To--, !(To > 0) && typeof PointerEvent < "u" && t.removeEventListener("pointerup", Ch);
    };
}
function Qb(t) {
  let { onHoverStart: n, onHoverChange: l, onHoverEnd: o, isDisabled: s } = t, [u, f] = E.useState(!1), d = E.useRef({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  E.useEffect(qb, []);
  let { addGlobalListener: p, removeAllGlobalListeners: h } = fa(), { hoverProps: y, triggerHoverEnd: v } = E.useMemo(() => {
    let g = (x, F) => {
      if (d.pointerType = F, s || F === "touch" || d.isHovered || !Ne(x.currentTarget, Se(x))) return;
      d.isHovered = !0;
      let W = x.currentTarget;
      d.target = W, p(He(Se(x)), "pointerover", (L) => {
        d.isHovered && d.target && !Ne(d.target, Se(L)) && S(L, L.pointerType);
      }, {
        capture: !0
      }), n && n({
        type: "hoverstart",
        target: W,
        pointerType: F
      }), l && l(!0), f(!0);
    }, S = (x, F) => {
      let W = d.target;
      d.pointerType = "", d.target = null, !(F === "touch" || !d.isHovered || !W) && (d.isHovered = !1, h(), o && o({
        type: "hoverend",
        target: W,
        pointerType: F
      }), l && l(!1), f(!1));
    }, C = {};
    return typeof PointerEvent < "u" && (C.onPointerEnter = (x) => {
      ic && x.pointerType === "mouse" || g(x, x.pointerType);
    }, C.onPointerLeave = (x) => {
      !s && Ne(x.currentTarget, Se(x)) && S(x, x.pointerType);
    }), {
      hoverProps: C,
      triggerHoverEnd: S
    };
  }, [
    n,
    l,
    o,
    s,
    d,
    p,
    h
  ]);
  return E.useEffect(() => {
    s && v({
      currentTarget: d.target
    }, d.pointerType);
  }, [
    s
  ]), {
    hoverProps: y,
    isHovered: u
  };
}
function Zb(t, n) {
  let l = n?.isDisabled, [o, s] = E.useState(!1);
  return Qt(() => {
    if (t?.current && !l) {
      let u = () => {
        if (t.current) {
          let d = tg(t.current, {
            tabbable: !0
          });
          s(!!d.nextNode());
        }
      };
      u();
      let f = new MutationObserver(u);
      return f.observe(t.current, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeFilter: [
          "tabIndex",
          "disabled"
        ]
      }), () => {
        f.disconnect();
      };
    }
  }), l ? !1 : o;
}
function Xb(t) {
  let { id: n, selectionManager: l, key: o, ref: s, shouldSelectOnPressUp: u, shouldUseVirtualFocus: f, focus: d, isDisabled: p, onAction: h, allowsDifferentPressOrigin: y, linkBehavior: v = "action" } = t, g = aa();
  n = ua(n);
  let S = (H) => {
    if (H.pointerType === "keyboard" && lc(H)) l.toggleSelection(o);
    else {
      if (l.selectionMode === "none") return;
      if (l.isLink(o)) {
        if (v === "selection" && s.current) {
          let ne = l.getItemProps(o);
          g.open(s.current, H, ne.href, ne.routerOptions), l.setSelectedKeys(l.selectedKeys);
          return;
        } else if (v === "override" || v === "none") return;
      }
      l.selectionMode === "single" ? l.isSelected(o) && !l.disallowEmptySelection ? l.toggleSelection(o) : l.replaceSelection(o) : H && H.shiftKey ? l.extendSelection(o) : l.selectionBehavior === "toggle" || H && (Hl(H) || H.pointerType === "touch" || H.pointerType === "virtual") ? l.toggleSelection(o) : l.replaceSelection(o);
    }
  };
  E.useEffect(() => {
    o === l.focusedKey && l.isFocused && (f ? Um(s.current) : d ? d() : At() !== s.current && s.current && qo(s.current));
  }, [
    s,
    o,
    l.focusedKey,
    l.childFocusStrategy,
    l.isFocused,
    f
  ]), p = p || l.isDisabled(o);
  let C = {};
  !f && !p ? C = {
    tabIndex: o === l.focusedKey ? 0 : -1,
    onFocus(H) {
      Se(H) === s.current && l.setFocusedKey(o);
    }
  } : p && (C.onMouseDown = (H) => {
    H.preventDefault();
  }), E.useEffect(() => {
    p && l.focusedKey === o && l.setFocusedKey(null);
  }, [
    l,
    p,
    o
  ]);
  let x = l.isLink(o) && v === "override", F = h && t.UNSTABLE_itemBehavior === "action", W = l.isLink(o) && v !== "selection" && v !== "none", L = !p && l.canSelectItem(o) && !x && !F, X = (h || W) && !p, J = X && (l.selectionBehavior === "replace" ? !L : !L || l.isEmpty), fe = X && L && l.selectionBehavior === "replace", ce = J || fe, ue = E.useRef(null), pe = ce && L, ge = E.useRef(!1), Ce = E.useRef(!1), ye = l.getItemProps(o), K = (H) => {
    h && (h(), s.current?.dispatchEvent(new CustomEvent("react-aria-item-action", {
      bubbles: !0
    }))), W && s.current && g.open(s.current, H, ye.href, ye.routerOptions);
  }, G = {
    ref: s
  };
  u ? (G.onPressStart = (H) => {
    ue.current = H.pointerType, ge.current = pe, H.pointerType === "keyboard" && (!ce || $h(H.key)) && S(H);
  }, y ? (G.onPressUp = J ? void 0 : (H) => {
    H.pointerType === "mouse" && L && S(H);
  }, G.onPress = J ? K : (H) => {
    H.pointerType !== "keyboard" && H.pointerType !== "mouse" && L && S(H);
  }) : G.onPress = (H) => {
    if (J || fe && H.pointerType !== "mouse") {
      if (H.pointerType === "keyboard" && !Eh(H.key)) return;
      K(H);
    } else H.pointerType !== "keyboard" && L && S(H);
  }) : (G.onPressStart = (H) => {
    ue.current = H.pointerType, ge.current = pe, Ce.current = J, L && (H.pointerType === "mouse" && !J || H.pointerType === "keyboard" && (!X || $h(H.key))) && S(H);
  }, G.onPress = (H) => {
    (H.pointerType === "touch" || H.pointerType === "pen" || H.pointerType === "virtual" || H.pointerType === "keyboard" && ce && Eh(H.key) || H.pointerType === "mouse" && Ce.current) && (ce ? K(H) : L && S(H));
  });
  let N = Mb(l.collection);
  if (C["data-collection"] = N, C["data-key"] = o, G.preventFocusOnPress = f, f && (G = Te(G, {
    onPressStart(H) {
      H.pointerType !== "touch" && (l.setFocused(!0), l.setFocusedKey(o));
    },
    onPress(H) {
      H.pointerType === "touch" && (l.setFocused(!0), l.setFocusedKey(o));
    }
  })), ye)
    for (let H of [
      "onPressStart",
      "onPressEnd",
      "onPressChange",
      "onPress",
      "onPressUp",
      "onClick"
    ]) ye[H] && (G[H] = Jl(G[H], ye[H]));
  let { pressProps: U, isPressed: M } = fi(G), z = fe ? (H) => {
    ue.current === "mouse" && (H.stopPropagation(), H.preventDefault(), K(H));
  } : void 0, { longPressProps: R } = Db({
    isDisabled: !pe,
    onLongPress(H) {
      H.pointerType === "touch" && (S(H), l.setSelectionBehavior("toggle"));
    }
  }), T = (H) => {
    ue.current === "touch" && ge.current && H.preventDefault();
  }, B = v !== "none" && l.isLink(o) ? (H) => {
    vr.isOpening || H.preventDefault();
  } : void 0, _ = Te(
    // oxlint-disable-next-line react/react-compiler
    C,
    L || J || f && !p ? U : {},
    pe ? R : {},
    // oxlint-disable-next-line react/react-compiler
    {
      onDoubleClick: z,
      onDragStartCapture: T,
      onClick: B,
      id: n
    },
    // Prevent DOM focus from moving on mouse down when using virtual focus
    f ? {
      onMouseDown: (H) => H.preventDefault()
    } : void 0
  ), V = (H) => {
    let ne = H;
    for (; ne && ne !== s.current; ) {
      let be = ne.getAttribute("data-collection");
      if (be != null) return be !== N;
      ne = ne.parentElement;
    }
    return xc(H);
  }, de = _.onPointerDown;
  _.onPointerDown = (H) => {
    let ne = Se(H);
    if (ne && ne !== s.current && V(ne)) {
      H.stopPropagation();
      return;
    }
    de?.(H);
  };
  let ae = _.onMouseDown;
  return _.onMouseDown = (H) => {
    let ne = Se(H);
    if (ne && ne !== s.current && V(ne)) {
      H.stopPropagation();
      return;
    }
    ae?.(H);
  }, {
    itemProps: _,
    isPressed: M,
    isSelected: l.isSelected(o),
    isFocused: l.isFocused && l.focusedKey === o,
    isDisabled: p,
    allowsSelection: L,
    hasAction: ce
  };
}
function Eh(t) {
  return t === "Enter";
}
function $h(t) {
  return t === " ";
}
const ig = /* @__PURE__ */ new WeakMap();
function Qo(t, n, l) {
  return t ? (typeof n == "string" && (n = n.replace(/\s+/g, "")), `${ig.get(t)}-${l}-${n}`) : "";
}
function Yb(t, n, l) {
  let { key: o, isDisabled: s, shouldSelectOnPressUp: u } = t, { selectionManager: f, selectedKey: d } = n, p = o === d, h = s || n.isDisabled || n.selectionManager.isDisabled(o), y = n.collection.getItem(o), { itemProps: v, isPressed: g } = Xb({
    selectionManager: f,
    key: o,
    ref: l,
    isDisabled: h,
    // Link tabs should behave like native anchors (navigate on press up)
    // This avoids reopening beforeunload dialogs when browsers replay
    // queued pointer enter/leave events after cancellation.
    shouldSelectOnPressUp: u ?? y?.props.href != null,
    linkBehavior: "selection"
  }), S = Qo(n, o, "tab"), C = Qo(n, o, "tabpanel"), { tabIndex: x } = v, F = dn(y?.props, {
    labelable: !0
  });
  delete F.id;
  let W = Tm(y?.props), { focusableProps: L } = $c({
    ...y?.props,
    isDisabled: h
  }, l);
  return {
    tabProps: Te(F, L, W, v, {
      id: S,
      "aria-selected": p,
      "aria-disabled": h || void 0,
      "aria-controls": p ? C : void 0,
      tabIndex: h ? void 0 : x,
      role: "tab"
    }),
    isSelected: p,
    isDisabled: h,
    isPressed: g
  };
}
class Jb {
  constructor(n, l, o, s = /* @__PURE__ */ new Set()) {
    this.collection = n, this.flipDirection = l === "rtl", this.disabledKeys = s, this.tabDirection = o === "horizontal";
  }
  getKeyLeftOf(n) {
    return this.flipDirection ? this.getNextKey(n) : this.getPreviousKey(n);
  }
  getKeyRightOf(n) {
    return this.flipDirection ? this.getPreviousKey(n) : this.getNextKey(n);
  }
  isDisabled(n) {
    return this.disabledKeys.has(n) || !!this.collection.getItem(n)?.props?.isDisabled;
  }
  getFirstKey() {
    let n = this.collection.getFirstKey();
    return n != null && this.isDisabled(n) && (n = this.getNextKey(n)), n;
  }
  getLastKey() {
    let n = this.collection.getLastKey();
    return n != null && this.isDisabled(n) && (n = this.getPreviousKey(n)), n;
  }
  getKeyAbove(n) {
    return this.tabDirection ? null : this.getPreviousKey(n);
  }
  getKeyBelow(n) {
    return this.tabDirection ? null : this.getNextKey(n);
  }
  getNextKey(n) {
    let l = n;
    do
      l = this.collection.getKeyAfter(l), l == null && (l = this.collection.getFirstKey());
    while (l != null && this.isDisabled(l) && l !== n);
    return l;
  }
  getPreviousKey(n) {
    let l = n;
    do
      l = this.collection.getKeyBefore(l), l == null && (l = this.collection.getLastKey());
    while (l != null && this.isDisabled(l) && l !== n);
    return l;
  }
}
function ex(t, n, l) {
  let { orientation: o = "horizontal", keyboardActivation: s = "automatic" } = t, { collection: u, selectionManager: f, disabledKeys: d } = n, { direction: p } = Zm(), h = E.useMemo(() => new Jb(u, p, o, d), [
    u,
    d,
    o,
    p
  ]), { collectionProps: y } = Bb({
    ref: l,
    selectionManager: f,
    keyboardDelegate: h,
    selectOnFocus: s === "automatic",
    disallowEmptySelection: !0,
    scrollRef: l,
    linkBehavior: "selection"
  }), v = ua();
  ig.set(n, v);
  let g = Gm({
    ...t,
    id: v
  });
  return {
    tabListProps: {
      ...Te(y, g),
      role: "tablist",
      "aria-orientation": o,
      tabIndex: void 0
    }
  };
}
function tx(t, n, l) {
  let o = Zb(l) ? void 0 : 0;
  const s = Qo(n, t.id ?? n?.selectedKey, "tabpanel"), u = Gm({
    ...t,
    id: s,
    "aria-labelledby": Qo(n, n?.selectedKey, "tab")
  });
  return {
    tabPanelProps: Te(u, {
      tabIndex: o,
      role: "tabpanel",
      "aria-describedby": t["aria-describedby"],
      "aria-details": t["aria-details"]
    })
  };
}
var kh = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, Et = (t) => !t || typeof t != "object" || Object.keys(t).length === 0, rx = (t, n) => JSON.stringify(t) === JSON.stringify(n);
function og(t, n) {
  t.forEach(function(l) {
    Array.isArray(l) ? og(l, n) : n.push(l);
  });
}
function ag(t) {
  let n = [];
  return og(t, n), n;
}
var sg = (...t) => ag(t).filter(Boolean), ug = (t, n) => {
  let l = {}, o = Object.keys(t), s = Object.keys(n);
  for (let u of o) if (s.includes(u)) {
    let f = t[u], d = n[u];
    typeof f == "object" && typeof d == "object" ? l[u] = ug(f, d) : Array.isArray(f) || Array.isArray(d) ? l[u] = sg(d, f) : l[u] = d + " " + f;
  } else l[u] = t[u];
  for (let u of s) o.includes(u) || (l[u] = n[u]);
  return l;
}, _h = (t) => !t || typeof t != "string" ? t : t.replace(/\s+/g, " ").trim();
const Fc = "-", nx = (t) => {
  const n = ix(t), {
    conflictingClassGroups: l,
    conflictingClassGroupModifiers: o
  } = t;
  return {
    getClassGroupId: (f) => {
      const d = f.split(Fc);
      return d[0] === "" && d.length !== 1 && d.shift(), cg(d, n) || lx(f);
    },
    getConflictingClassGroupIds: (f, d) => {
      const p = l[f] || [];
      return d && o[f] ? [...p, ...o[f]] : p;
    }
  };
}, cg = (t, n) => {
  if (t.length === 0)
    return n.classGroupId;
  const l = t[0], o = n.nextPart.get(l), s = o ? cg(t.slice(1), o) : void 0;
  if (s)
    return s;
  if (n.validators.length === 0)
    return;
  const u = t.join(Fc);
  return n.validators.find(({
    validator: f
  }) => f(u))?.classGroupId;
}, Fh = /^\[(.+)\]$/, lx = (t) => {
  if (Fh.test(t)) {
    const n = Fh.exec(t)[1], l = n?.substring(0, n.indexOf(":"));
    if (l)
      return "arbitrary.." + l;
  }
}, ix = (t) => {
  const {
    theme: n,
    prefix: l
  } = t, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return ax(Object.entries(t.classGroups), l).forEach(([u, f]) => {
    oc(f, o, u, n);
  }), o;
}, oc = (t, n, l, o) => {
  t.forEach((s) => {
    if (typeof s == "string") {
      const u = s === "" ? n : Ph(n, s);
      u.classGroupId = l;
      return;
    }
    if (typeof s == "function") {
      if (ox(s)) {
        oc(s(o), n, l, o);
        return;
      }
      n.validators.push({
        validator: s,
        classGroupId: l
      });
      return;
    }
    Object.entries(s).forEach(([u, f]) => {
      oc(f, Ph(n, u), l, o);
    });
  });
}, Ph = (t, n) => {
  let l = t;
  return n.split(Fc).forEach((o) => {
    l.nextPart.has(o) || l.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), l = l.nextPart.get(o);
  }), l;
}, ox = (t) => t.isThemeGetter, ax = (t, n) => n ? t.map(([l, o]) => {
  const s = o.map((u) => typeof u == "string" ? n + u : typeof u == "object" ? Object.fromEntries(Object.entries(u).map(([f, d]) => [n + f, d])) : u);
  return [l, s];
}) : t, sx = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, l = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const s = (u, f) => {
    l.set(u, f), n++, n > t && (n = 0, o = l, l = /* @__PURE__ */ new Map());
  };
  return {
    get(u) {
      let f = l.get(u);
      if (f !== void 0)
        return f;
      if ((f = o.get(u)) !== void 0)
        return s(u, f), f;
    },
    set(u, f) {
      l.has(u) ? l.set(u, f) : s(u, f);
    }
  };
}, dg = "!", ux = (t) => {
  const {
    separator: n,
    experimentalParseClassName: l
  } = t, o = n.length === 1, s = n[0], u = n.length, f = (d) => {
    const p = [];
    let h = 0, y = 0, v;
    for (let F = 0; F < d.length; F++) {
      let W = d[F];
      if (h === 0) {
        if (W === s && (o || d.slice(F, F + u) === n)) {
          p.push(d.slice(y, F)), y = F + u;
          continue;
        }
        if (W === "/") {
          v = F;
          continue;
        }
      }
      W === "[" ? h++ : W === "]" && h--;
    }
    const g = p.length === 0 ? d : d.substring(y), S = g.startsWith(dg), C = S ? g.substring(1) : g, x = v && v > y ? v - y : void 0;
    return {
      modifiers: p,
      hasImportantModifier: S,
      baseClassName: C,
      maybePostfixModifierPosition: x
    };
  };
  return l ? (d) => l({
    className: d,
    parseClassName: f
  }) : f;
}, cx = (t) => {
  if (t.length <= 1)
    return t;
  const n = [];
  let l = [];
  return t.forEach((o) => {
    o[0] === "[" ? (n.push(...l.sort(), o), l = []) : l.push(o);
  }), n.push(...l.sort()), n;
}, dx = (t) => ({
  cache: sx(t.cacheSize),
  parseClassName: ux(t),
  ...nx(t)
}), fx = /\s+/, px = (t, n) => {
  const {
    parseClassName: l,
    getClassGroupId: o,
    getConflictingClassGroupIds: s
  } = n, u = [], f = t.trim().split(fx);
  let d = "";
  for (let p = f.length - 1; p >= 0; p -= 1) {
    const h = f[p], {
      modifiers: y,
      hasImportantModifier: v,
      baseClassName: g,
      maybePostfixModifierPosition: S
    } = l(h);
    let C = !!S, x = o(C ? g.substring(0, S) : g);
    if (!x) {
      if (!C) {
        d = h + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (x = o(g), !x) {
        d = h + (d.length > 0 ? " " + d : d);
        continue;
      }
      C = !1;
    }
    const F = cx(y).join(":"), W = v ? F + dg : F, L = W + x;
    if (u.includes(L))
      continue;
    u.push(L);
    const X = s(x, C);
    for (let J = 0; J < X.length; ++J) {
      const fe = X[J];
      u.push(W + fe);
    }
    d = h + (d.length > 0 ? " " + d : d);
  }
  return d;
};
function hx() {
  let t = 0, n, l, o = "";
  for (; t < arguments.length; )
    (n = arguments[t++]) && (l = fg(n)) && (o && (o += " "), o += l);
  return o;
}
const fg = (t) => {
  if (typeof t == "string")
    return t;
  let n, l = "";
  for (let o = 0; o < t.length; o++)
    t[o] && (n = fg(t[o])) && (l && (l += " "), l += n);
  return l;
};
function ac(t, ...n) {
  let l, o, s, u = f;
  function f(p) {
    const h = n.reduce((y, v) => v(y), t());
    return l = dx(h), o = l.cache.get, s = l.cache.set, u = d, d(p);
  }
  function d(p) {
    const h = o(p);
    if (h)
      return h;
    const y = px(p, l);
    return s(p, y), y;
  }
  return function() {
    return u(hx.apply(null, arguments));
  };
}
const je = (t) => {
  const n = (l) => l[t] || [];
  return n.isThemeGetter = !0, n;
}, pg = /^\[(?:([a-z-]+):)?(.+)\]$/i, mx = /^\d+\/\d+$/, gx = /* @__PURE__ */ new Set(["px", "full", "screen"]), vx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, yx = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, bx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, xx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, wx = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, rr = (t) => sn(t) || gx.has(t) || mx.test(t), fr = (t) => Xn(t, "length", Ex), sn = (t) => !!t && !Number.isNaN(Number(t)), Ko = (t) => Xn(t, "number", sn), Kn = (t) => !!t && Number.isInteger(Number(t)), hg = (t) => t.endsWith("%") && sn(t.slice(0, -1)), xe = (t) => pg.test(t), pr = (t) => vx.test(t), Sx = /* @__PURE__ */ new Set(["length", "size", "percentage"]), mg = (t) => Xn(t, Sx, bg), gg = (t) => Xn(t, "position", bg), Cx = /* @__PURE__ */ new Set(["image", "url"]), vg = (t) => Xn(t, Cx, kx), yg = (t) => Xn(t, "", $x), Dn = () => !0, Xn = (t, n, l) => {
  const o = pg.exec(t);
  return o ? o[1] ? typeof n == "string" ? o[1] === n : n.has(o[1]) : l(o[2]) : !1;
}, Ex = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  yx.test(t) && !bx.test(t)
), bg = () => !1, $x = (t) => xx.test(t), kx = (t) => wx.test(t), _x = /* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isAny: Dn,
  isArbitraryImage: vg,
  isArbitraryLength: fr,
  isArbitraryNumber: Ko,
  isArbitraryPosition: gg,
  isArbitraryShadow: yg,
  isArbitrarySize: mg,
  isArbitraryValue: xe,
  isInteger: Kn,
  isLength: rr,
  isNumber: sn,
  isPercent: hg,
  isTshirtSize: pr
}, Symbol.toStringTag, {
  value: "Module"
}), sc = () => {
  const t = je("colors"), n = je("spacing"), l = je("blur"), o = je("brightness"), s = je("borderColor"), u = je("borderRadius"), f = je("borderSpacing"), d = je("borderWidth"), p = je("contrast"), h = je("grayscale"), y = je("hueRotate"), v = je("invert"), g = je("gap"), S = je("gradientColorStops"), C = je("gradientColorStopPositions"), x = je("inset"), F = je("margin"), W = je("opacity"), L = je("padding"), X = je("saturate"), J = je("scale"), fe = je("sepia"), ce = je("skew"), ue = je("space"), pe = je("translate"), ge = () => ["auto", "contain", "none"], Ce = () => ["auto", "hidden", "clip", "visible", "scroll"], ye = () => ["auto", xe, n], K = () => [xe, n], G = () => ["", rr, fr], N = () => ["auto", sn, xe], U = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], M = () => ["solid", "dashed", "dotted", "double", "none"], z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], R = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], T = () => ["", "0", xe], B = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], _ = () => [sn, xe];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Dn],
      spacing: [rr, fr],
      blur: ["none", "", pr, xe],
      brightness: _(),
      borderColor: [t],
      borderRadius: ["none", "", "full", pr, xe],
      borderSpacing: K(),
      borderWidth: G(),
      contrast: _(),
      grayscale: T(),
      hueRotate: _(),
      invert: T(),
      gap: K(),
      gradientColorStops: [t],
      gradientColorStopPositions: [hg, fr],
      inset: ye(),
      margin: ye(),
      opacity: _(),
      padding: K(),
      saturate: _(),
      scale: _(),
      sepia: T(),
      skew: _(),
      space: K(),
      translate: K()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", xe]
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
        columns: [pr]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": B()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": B()
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
        object: [...U(), xe]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Ce()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Ce()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Ce()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: ge()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": ge()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": ge()
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
        inset: [x]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [x]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [x]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [x]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [x]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [x]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [x]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [x]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [x]
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
        z: ["auto", Kn, xe]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: ye()
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
        flex: ["1", "auto", "initial", "none", xe]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: T()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: T()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Kn, xe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Dn]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Kn, xe]
        }, xe]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": N()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": N()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Dn]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Kn, xe]
        }, xe]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": N()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": N()
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
        "auto-cols": ["auto", "min", "max", "fr", xe]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", xe]
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
        justify: ["normal", ...R()]
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
        content: ["normal", ...R(), "baseline"]
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
        "place-content": [...R(), "baseline"]
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
        p: [L]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [L]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [L]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [L]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [L]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [L]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [L]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [L]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [L]
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
        "space-x": [ue]
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
        "space-y": [ue]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", xe, n]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [xe, n, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [xe, n, "none", "full", "min", "max", "fit", "prose", {
          screen: [pr]
        }, pr]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [xe, n, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [xe, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [xe, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [xe, n, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", pr, fr]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ko]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Dn]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", xe]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", sn, Ko]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", rr, xe]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", xe]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", xe]
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
        placeholder: [t]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [W]
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
        text: [t]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [W]
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
        decoration: [...M(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", rr, fr]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", rr, xe]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [t]
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
        indent: K()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", xe]
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
        content: ["none", xe]
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
        "bg-opacity": [W]
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
        bg: [...U(), gg]
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
        bg: ["auto", "cover", "contain", mg]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, vg]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [t]
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
        rounded: [u]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [u]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [u]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [u]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [u]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [u]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [u]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [u]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [u]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [u]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [u]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [u]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [u]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [u]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [u]
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
        "border-opacity": [W]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...M(), "hidden"]
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
        "divide-opacity": [W]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: M()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [s]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [s]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [s]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [s]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [s]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [s]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [s]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [s]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [s]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [s]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...M()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [rr, xe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [rr, fr]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [t]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: G()
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
        ring: [t]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [W]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [rr, fr]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [t]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", pr, yg]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Dn]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [W]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...z(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": z()
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
        brightness: [o]
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
        "drop-shadow": ["", "none", pr, xe]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [h]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [y]
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
        saturate: [X]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [fe]
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
        "backdrop-brightness": [o]
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
        "backdrop-grayscale": [h]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [y]
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
        "backdrop-opacity": [W]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [X]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [fe]
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
        "border-spacing": [f]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [f]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [f]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", xe]
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
        ease: ["linear", "in", "out", "in-out", xe]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", xe]
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
        scale: [J]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [J]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [J]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Kn, xe]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [pe]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [pe]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [ce]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [ce]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", xe]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", t]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", xe]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [t]
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
        "scroll-m": K()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": K()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": K()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": K()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": K()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": K()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": K()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": K()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": K()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": K()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": K()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": K()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": K()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": K()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": K()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": K()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": K()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": K()
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
        "will-change": ["auto", "scroll", "contents", "transform", xe]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [t, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [rr, fr, Ko]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [t, "none"]
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
}, Fx = (t, {
  cacheSize: n,
  prefix: l,
  separator: o,
  experimentalParseClassName: s,
  extend: u = {},
  override: f = {}
}) => {
  Wl(t, "cacheSize", n), Wl(t, "prefix", l), Wl(t, "separator", o), Wl(t, "experimentalParseClassName", s);
  for (const d in f)
    Px(t[d], f[d]);
  for (const d in u)
    Nx(t[d], u[d]);
  return t;
}, Wl = (t, n, l) => {
  l !== void 0 && (t[n] = l);
}, Px = (t, n) => {
  if (n)
    for (const l in n)
      Wl(t, l, n[l]);
}, Nx = (t, n) => {
  if (n)
    for (const l in n) {
      const o = n[l];
      o !== void 0 && (t[l] = (t[l] || []).concat(o));
    }
}, xg = (t, ...n) => typeof t == "function" ? ac(sc, t, ...n) : ac(() => Fx(sc(), t), ...n), Tx = /* @__PURE__ */ ac(sc);
var Ax = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, wg = (t) => t || void 0, ti = (...t) => wg(ag(t).filter(Boolean).join(" ")), Au = null, hr = {}, uc = !1, Dl = (...t) => (n) => n.twMerge ? ((!Au || uc) && (uc = !1, Au = Et(hr) ? Tx : xg({ ...hr, extend: { theme: hr.theme, classGroups: hr.classGroups, conflictingClassGroupModifiers: hr.conflictingClassGroupModifiers, conflictingClassGroups: hr.conflictingClassGroups, ...hr.extend } })), wg(Au(ti(t)))) : ti(t), Nh = (t, n) => {
  for (let l in n) t.hasOwnProperty(l) ? t[l] = ti(t[l], n[l]) : t[l] = n[l];
  return t;
}, pi = (t, n) => {
  let { extend: l = null, slots: o = {}, variants: s = {}, compoundVariants: u = [], compoundSlots: f = [], defaultVariants: d = {} } = t, p = { ...Ax, ...n }, h = l != null && l.base ? ti(l.base, t?.base) : t?.base, y = l != null && l.variants && !Et(l.variants) ? ug(s, l.variants) : s, v = l != null && l.defaultVariants && !Et(l.defaultVariants) ? { ...l.defaultVariants, ...d } : d;
  !Et(p.twMergeConfig) && !rx(p.twMergeConfig, hr) && (uc = !0, hr = p.twMergeConfig);
  let g = Et(l?.slots), S = Et(o) ? {} : { base: ti(t?.base, g && l?.base), ...o }, C = g ? S : Nh({ ...l?.slots }, Et(S) ? { base: t?.base } : S), x = Et(l?.compoundVariants) ? u : sg(l?.compoundVariants, u), F = (L) => {
    if (Et(y) && Et(o) && g) return Dl(h, L?.class, L?.className)(p);
    if (x && !Array.isArray(x)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof x}`);
    if (f && !Array.isArray(f)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof f}`);
    let X = (K, G, N = [], U) => {
      let M = N;
      if (typeof G == "string") M = M.concat(_h(G).split(" ").map((z) => `${K}:${z}`));
      else if (Array.isArray(G)) M = M.concat(G.reduce((z, R) => z.concat(`${K}:${R}`), []));
      else if (typeof G == "object" && typeof U == "string") {
        for (let z in G) if (G.hasOwnProperty(z) && z === U) {
          let R = G[z];
          if (R && typeof R == "string") {
            let T = _h(R);
            M[U] ? M[U] = M[U].concat(T.split(" ").map((B) => `${K}:${B}`)) : M[U] = T.split(" ").map((B) => `${K}:${B}`);
          } else Array.isArray(R) && R.length > 0 && (M[U] = R.reduce((T, B) => T.concat(`${K}:${B}`), []));
        }
      }
      return M;
    }, J = (K, G = y, N = null, U = null) => {
      var M;
      let z = G[K];
      if (!z || Et(z)) return null;
      let R = (M = U?.[K]) != null ? M : L?.[K];
      if (R === null) return null;
      let T = kh(R), B = Array.isArray(p.responsiveVariants) && p.responsiveVariants.length > 0 || p.responsiveVariants === !0, _ = v?.[K], V = [];
      if (typeof T == "object" && B) for (let [H, ne] of Object.entries(T)) {
        let be = z[ne];
        if (H === "initial") {
          _ = ne;
          continue;
        }
        Array.isArray(p.responsiveVariants) && !p.responsiveVariants.includes(H) || (V = X(H, be, V, N));
      }
      let de = T != null && typeof T != "object" ? T : kh(_), ae = z[de || "false"];
      return typeof V == "object" && typeof N == "string" && V[N] ? Nh(V, ae) : V.length > 0 ? (V.push(ae), V) : ae;
    }, fe = () => y ? Object.keys(y).map((K) => J(K, y)) : null, ce = (K, G) => {
      if (!y || typeof y != "object") return null;
      let N = new Array();
      for (let U in y) {
        let M = J(U, y, K, G), z = K === "base" && typeof M == "string" ? M : M && M[K];
        z && (N[N.length] = z);
      }
      return N;
    }, ue = {};
    for (let K in L) L[K] !== void 0 && (ue[K] = L[K]);
    let pe = (K, G) => {
      var N;
      let U = typeof L?.[K] == "object" ? { [K]: (N = L[K]) == null ? void 0 : N.initial } : {};
      return { ...v, ...ue, ...U, ...G };
    }, ge = (K = [], G) => {
      let N = [];
      for (let { class: U, className: M, ...z } of K) {
        let R = !0;
        for (let [T, B] of Object.entries(z)) {
          let _ = pe(T, G);
          if (Array.isArray(B)) {
            if (!B.includes(_[T])) {
              R = !1;
              break;
            }
          } else if (_[T] !== B) {
            R = !1;
            break;
          }
        }
        R && (U && N.push(U), M && N.push(M));
      }
      return N;
    }, Ce = (K) => {
      let G = ge(x, K);
      if (!Array.isArray(G)) return G;
      let N = {};
      for (let U of G) if (typeof U == "string" && (N.base = Dl(N.base, U)(p)), typeof U == "object") for (let [M, z] of Object.entries(U)) N[M] = Dl(N[M], z)(p);
      return N;
    }, ye = (K) => {
      if (f.length < 1) return null;
      let G = {};
      for (let { slots: N = [], class: U, className: M, ...z } of f) {
        if (!Et(z)) {
          let R = !0;
          for (let T of Object.keys(z)) {
            let B = pe(T, K)[T];
            if (B === void 0 || (Array.isArray(z[T]) ? !z[T].includes(B) : z[T] !== B)) {
              R = !1;
              break;
            }
          }
          if (!R) continue;
        }
        for (let R of N) G[R] = G[R] || [], G[R].push([U, M]);
      }
      return G;
    };
    if (!Et(o) || !g) {
      let K = {};
      if (typeof C == "object" && !Et(C)) for (let G of Object.keys(C)) K[G] = (N) => {
        var U, M;
        return Dl(C[G], ce(G, N), ((U = Ce(N)) != null ? U : [])[G], ((M = ye(N)) != null ? M : [])[G], N?.class, N?.className)(p);
      };
      return K;
    }
    return Dl(h, fe(), ge(x), L?.class, L?.className)(p);
  }, W = () => {
    if (!(!y || typeof y != "object")) return Object.keys(y);
  };
  return F.variantKeys = W(), F.extend = l, F.base = h, F.slots = C, F.variants = y, F.defaultVariants = v, F.compoundSlots = f, F.compoundVariants = x, F;
};
const Sg = {
  large: "w-8 h-8",
  medium: "w-6 h-6",
  small: "w-5 h-5",
  undefined: "",
  "x-small": "w-4 h-4",
  "xx-small": "w-3.5 h-3.5"
}, at = pi({
  base: "inline-flex items-center justify-center p-0 m-0",
  variants: {
    size: Sg
  }
}), nt = pi({
  variants: {
    size: Sg
  }
}), lt = pi({
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
}), zx = pi({
  base: "outline outline-offset-0 outline-interactive-highlight outline-2"
});
var Ao = {}, Do = { exports: {} }, Rx = Do.exports, Th;
function Lx() {
  return Th || (Th = 1, (function(t) {
    (function(n) {
      l(Math.pow(36, 5)), l(Math.pow(16, 7)), l(Math.pow(10, 9)), l(Math.pow(2, 30)), l(36), l(16), l(10), l(2);
      function l(f, d) {
        if (!(this instanceof l))
          return new l(f, d);
        if (this._low = 0, this._high = 0, this.remainder = null, typeof d > "u")
          return s.call(this, f);
        if (typeof f == "string")
          return u.call(this, f, d);
        o.call(this, f, d);
      }
      function o(f, d) {
        return this._low = f | 0, this._high = d | 0, this;
      }
      l.prototype.fromBits = o;
      function s(f) {
        return this._low = f & 65535, this._high = f >>> 16, this;
      }
      l.prototype.fromNumber = s;
      function u(f, d) {
        var p = parseInt(f, d || 10);
        return this._low = p & 65535, this._high = p >>> 16, this;
      }
      l.prototype.fromString = u, l.prototype.toNumber = function() {
        return this._high * 65536 + this._low;
      }, l.prototype.toString = function(f) {
        return this.toNumber().toString(f || 10);
      }, l.prototype.add = function(f) {
        var d = this._low + f._low, p = d >>> 16;
        return p += this._high + f._high, this._low = d & 65535, this._high = p & 65535, this;
      }, l.prototype.subtract = function(f) {
        return this.add(f.clone().negate());
      }, l.prototype.multiply = function(f) {
        var d = this._high, p = this._low, h = f._high, y = f._low, v, g;
        return g = p * y, v = g >>> 16, v += d * y, v &= 65535, v += p * h, this._low = g & 65535, this._high = v & 65535, this;
      }, l.prototype.div = function(f) {
        if (f._low == 0 && f._high == 0) throw Error("division by zero");
        if (f._high == 0 && f._low == 1)
          return this.remainder = new l(0), this;
        if (f.gt(this))
          return this.remainder = this.clone(), this._low = 0, this._high = 0, this;
        if (this.eq(f))
          return this.remainder = new l(0), this._low = 1, this._high = 0, this;
        for (var d = f.clone(), p = -1; !this.lt(d); )
          d.shiftLeft(1, !0), p++;
        for (this.remainder = this.clone(), this._low = 0, this._high = 0; p >= 0; p--)
          d.shiftRight(1), this.remainder.lt(d) || (this.remainder.subtract(d), p >= 16 ? this._high |= 1 << p - 16 : this._low |= 1 << p);
        return this;
      }, l.prototype.negate = function() {
        var f = (~this._low & 65535) + 1;
        return this._low = f & 65535, this._high = ~this._high + (f >>> 16) & 65535, this;
      }, l.prototype.equals = l.prototype.eq = function(f) {
        return this._low == f._low && this._high == f._high;
      }, l.prototype.greaterThan = l.prototype.gt = function(f) {
        return this._high > f._high ? !0 : this._high < f._high ? !1 : this._low > f._low;
      }, l.prototype.lessThan = l.prototype.lt = function(f) {
        return this._high < f._high ? !0 : this._high > f._high ? !1 : this._low < f._low;
      }, l.prototype.or = function(f) {
        return this._low |= f._low, this._high |= f._high, this;
      }, l.prototype.and = function(f) {
        return this._low &= f._low, this._high &= f._high, this;
      }, l.prototype.not = function() {
        return this._low = ~this._low & 65535, this._high = ~this._high & 65535, this;
      }, l.prototype.xor = function(f) {
        return this._low ^= f._low, this._high ^= f._high, this;
      }, l.prototype.shiftRight = l.prototype.shiftr = function(f) {
        return f > 16 ? (this._low = this._high >> f - 16, this._high = 0) : f == 16 ? (this._low = this._high, this._high = 0) : (this._low = this._low >> f | this._high << 16 - f & 65535, this._high >>= f), this;
      }, l.prototype.shiftLeft = l.prototype.shiftl = function(f, d) {
        return f > 16 ? (this._high = this._low << f - 16, this._low = 0, d || (this._high &= 65535)) : f == 16 ? (this._high = this._low, this._low = 0) : (this._high = this._high << f | this._low >> 16 - f, this._low = this._low << f & 65535, d || (this._high &= 65535)), this;
      }, l.prototype.rotateLeft = l.prototype.rotl = function(f) {
        var d = this._high << 16 | this._low;
        return d = d << f | d >>> 32 - f, this._low = d & 65535, this._high = d >>> 16, this;
      }, l.prototype.rotateRight = l.prototype.rotr = function(f) {
        var d = this._high << 16 | this._low;
        return d = d >>> f | d << 32 - f, this._low = d & 65535, this._high = d >>> 16, this;
      }, l.prototype.clone = function() {
        return new l(this._low, this._high);
      }, t.exports ? t.exports = l : n.UINT32 = l;
    })(Rx);
  })(Do)), Do.exports;
}
var Oo = { exports: {} }, Ix = Oo.exports, Ah;
function jx() {
  return Ah || (Ah = 1, (function(t) {
    (function(n) {
      var l = {
        16: s(Math.pow(16, 5)),
        10: s(Math.pow(10, 5)),
        2: s(Math.pow(2, 5))
      }, o = {
        16: s(16),
        10: s(10),
        2: s(2)
      };
      function s(p, h, y, v) {
        if (!(this instanceof s))
          return new s(p, h, y, v);
        if (this.remainder = null, typeof p == "string")
          return d.call(this, p, h);
        if (typeof h > "u")
          return f.call(this, p);
        u.apply(this, arguments);
      }
      function u(p, h, y, v) {
        return typeof y > "u" ? (this._a00 = p & 65535, this._a16 = p >>> 16, this._a32 = h & 65535, this._a48 = h >>> 16, this) : (this._a00 = p | 0, this._a16 = h | 0, this._a32 = y | 0, this._a48 = v | 0, this);
      }
      s.prototype.fromBits = u;
      function f(p) {
        return this._a00 = p & 65535, this._a16 = p >>> 16, this._a32 = 0, this._a48 = 0, this;
      }
      s.prototype.fromNumber = f;
      function d(p, h) {
        h = h || 10, this._a00 = 0, this._a16 = 0, this._a32 = 0, this._a48 = 0;
        for (var y = l[h] || new s(Math.pow(h, 5)), v = 0, g = p.length; v < g; v += 5) {
          var S = Math.min(5, g - v), C = parseInt(p.slice(v, v + S), h);
          this.multiply(
            S < 5 ? new s(Math.pow(h, S)) : y
          ).add(new s(C));
        }
        return this;
      }
      s.prototype.fromString = d, s.prototype.toNumber = function() {
        return this._a16 * 65536 + this._a00;
      }, s.prototype.toString = function(p) {
        p = p || 10;
        var h = o[p] || new s(p);
        if (!this.gt(h)) return this.toNumber().toString(p);
        for (var y = this.clone(), v = new Array(64), g = 63; g >= 0 && (y.div(h), v[g] = y.remainder.toNumber().toString(p), !!y.gt(h)); g--)
          ;
        return v[g - 1] = y.toNumber().toString(p), v.join("");
      }, s.prototype.add = function(p) {
        var h = this._a00 + p._a00, y = h >>> 16;
        y += this._a16 + p._a16;
        var v = y >>> 16;
        v += this._a32 + p._a32;
        var g = v >>> 16;
        return g += this._a48 + p._a48, this._a00 = h & 65535, this._a16 = y & 65535, this._a32 = v & 65535, this._a48 = g & 65535, this;
      }, s.prototype.subtract = function(p) {
        return this.add(p.clone().negate());
      }, s.prototype.multiply = function(p) {
        var h = this._a00, y = this._a16, v = this._a32, g = this._a48, S = p._a00, C = p._a16, x = p._a32, F = p._a48, W = h * S, L = W >>> 16;
        L += h * C;
        var X = L >>> 16;
        L &= 65535, L += y * S, X += L >>> 16, X += h * x;
        var J = X >>> 16;
        return X &= 65535, X += y * C, J += X >>> 16, X &= 65535, X += v * S, J += X >>> 16, J += h * F, J &= 65535, J += y * x, J &= 65535, J += v * C, J &= 65535, J += g * S, this._a00 = W & 65535, this._a16 = L & 65535, this._a32 = X & 65535, this._a48 = J & 65535, this;
      }, s.prototype.div = function(p) {
        if (p._a16 == 0 && p._a32 == 0 && p._a48 == 0) {
          if (p._a00 == 0) throw Error("division by zero");
          if (p._a00 == 1)
            return this.remainder = new s(0), this;
        }
        if (p.gt(this))
          return this.remainder = this.clone(), this._a00 = 0, this._a16 = 0, this._a32 = 0, this._a48 = 0, this;
        if (this.eq(p))
          return this.remainder = new s(0), this._a00 = 1, this._a16 = 0, this._a32 = 0, this._a48 = 0, this;
        for (var h = p.clone(), y = -1; !this.lt(h); )
          h.shiftLeft(1, !0), y++;
        for (this.remainder = this.clone(), this._a00 = 0, this._a16 = 0, this._a32 = 0, this._a48 = 0; y >= 0; y--)
          h.shiftRight(1), this.remainder.lt(h) || (this.remainder.subtract(h), y >= 48 ? this._a48 |= 1 << y - 48 : y >= 32 ? this._a32 |= 1 << y - 32 : y >= 16 ? this._a16 |= 1 << y - 16 : this._a00 |= 1 << y);
        return this;
      }, s.prototype.negate = function() {
        var p = (~this._a00 & 65535) + 1;
        return this._a00 = p & 65535, p = (~this._a16 & 65535) + (p >>> 16), this._a16 = p & 65535, p = (~this._a32 & 65535) + (p >>> 16), this._a32 = p & 65535, this._a48 = ~this._a48 + (p >>> 16) & 65535, this;
      }, s.prototype.equals = s.prototype.eq = function(p) {
        return this._a48 == p._a48 && this._a00 == p._a00 && this._a32 == p._a32 && this._a16 == p._a16;
      }, s.prototype.greaterThan = s.prototype.gt = function(p) {
        return this._a48 > p._a48 ? !0 : this._a48 < p._a48 ? !1 : this._a32 > p._a32 ? !0 : this._a32 < p._a32 ? !1 : this._a16 > p._a16 ? !0 : this._a16 < p._a16 ? !1 : this._a00 > p._a00;
      }, s.prototype.lessThan = s.prototype.lt = function(p) {
        return this._a48 < p._a48 ? !0 : this._a48 > p._a48 ? !1 : this._a32 < p._a32 ? !0 : this._a32 > p._a32 ? !1 : this._a16 < p._a16 ? !0 : this._a16 > p._a16 ? !1 : this._a00 < p._a00;
      }, s.prototype.or = function(p) {
        return this._a00 |= p._a00, this._a16 |= p._a16, this._a32 |= p._a32, this._a48 |= p._a48, this;
      }, s.prototype.and = function(p) {
        return this._a00 &= p._a00, this._a16 &= p._a16, this._a32 &= p._a32, this._a48 &= p._a48, this;
      }, s.prototype.xor = function(p) {
        return this._a00 ^= p._a00, this._a16 ^= p._a16, this._a32 ^= p._a32, this._a48 ^= p._a48, this;
      }, s.prototype.not = function() {
        return this._a00 = ~this._a00 & 65535, this._a16 = ~this._a16 & 65535, this._a32 = ~this._a32 & 65535, this._a48 = ~this._a48 & 65535, this;
      }, s.prototype.shiftRight = s.prototype.shiftr = function(p) {
        return p %= 64, p >= 48 ? (this._a00 = this._a48 >> p - 48, this._a16 = 0, this._a32 = 0, this._a48 = 0) : p >= 32 ? (p -= 32, this._a00 = (this._a32 >> p | this._a48 << 16 - p) & 65535, this._a16 = this._a48 >> p & 65535, this._a32 = 0, this._a48 = 0) : p >= 16 ? (p -= 16, this._a00 = (this._a16 >> p | this._a32 << 16 - p) & 65535, this._a16 = (this._a32 >> p | this._a48 << 16 - p) & 65535, this._a32 = this._a48 >> p & 65535, this._a48 = 0) : (this._a00 = (this._a00 >> p | this._a16 << 16 - p) & 65535, this._a16 = (this._a16 >> p | this._a32 << 16 - p) & 65535, this._a32 = (this._a32 >> p | this._a48 << 16 - p) & 65535, this._a48 = this._a48 >> p & 65535), this;
      }, s.prototype.shiftLeft = s.prototype.shiftl = function(p, h) {
        return p %= 64, p >= 48 ? (this._a48 = this._a00 << p - 48, this._a32 = 0, this._a16 = 0, this._a00 = 0) : p >= 32 ? (p -= 32, this._a48 = this._a16 << p | this._a00 >> 16 - p, this._a32 = this._a00 << p & 65535, this._a16 = 0, this._a00 = 0) : p >= 16 ? (p -= 16, this._a48 = this._a32 << p | this._a16 >> 16 - p, this._a32 = (this._a16 << p | this._a00 >> 16 - p) & 65535, this._a16 = this._a00 << p & 65535, this._a00 = 0) : (this._a48 = this._a48 << p | this._a32 >> 16 - p, this._a32 = (this._a32 << p | this._a16 >> 16 - p) & 65535, this._a16 = (this._a16 << p | this._a00 >> 16 - p) & 65535, this._a00 = this._a00 << p & 65535), h || (this._a48 &= 65535), this;
      }, s.prototype.rotateLeft = s.prototype.rotl = function(p) {
        if (p %= 64, p == 0) return this;
        if (p >= 32) {
          var h = this._a00;
          if (this._a00 = this._a32, this._a32 = h, h = this._a48, this._a48 = this._a16, this._a16 = h, p == 32) return this;
          p -= 32;
        }
        var y = this._a48 << 16 | this._a32, v = this._a16 << 16 | this._a00, g = y << p | v >>> 32 - p, S = v << p | y >>> 32 - p;
        return this._a00 = S & 65535, this._a16 = S >>> 16, this._a32 = g & 65535, this._a48 = g >>> 16, this;
      }, s.prototype.rotateRight = s.prototype.rotr = function(p) {
        if (p %= 64, p == 0) return this;
        if (p >= 32) {
          var h = this._a00;
          if (this._a00 = this._a32, this._a32 = h, h = this._a48, this._a48 = this._a16, this._a16 = h, p == 32) return this;
          p -= 32;
        }
        var y = this._a48 << 16 | this._a32, v = this._a16 << 16 | this._a00, g = y >>> p | v << 32 - p, S = v >>> p | y << 32 - p;
        return this._a00 = S & 65535, this._a16 = S >>> 16, this._a32 = g & 65535, this._a48 = g >>> 16, this;
      }, s.prototype.clone = function() {
        return new s(this._a00, this._a16, this._a32, this._a48);
      }, t.exports ? t.exports = s : n.UINT64 = s;
    })(Ix);
  })(Oo)), Oo.exports;
}
var zh;
function Cg() {
  return zh || (zh = 1, Ao.UINT32 = Lx(), Ao.UINT64 = jx()), Ao;
}
var zu, Rh;
function Mx() {
  if (Rh) return zu;
  Rh = 1;
  var t = Cg().UINT32;
  t.prototype.xxh_update = function(h, y) {
    var v = l._low, g = l._high, S, C;
    C = h * v, S = C >>> 16, S += y * v, S &= 65535, S += h * g;
    var x = this._low + (C & 65535), F = x >>> 16;
    F += this._high + (S & 65535);
    var W = F << 16 | x & 65535;
    W = W << 13 | W >>> 19, x = W & 65535, F = W >>> 16, v = n._low, g = n._high, C = x * v, S = C >>> 16, S += F * v, S &= 65535, S += x * g, this._low = C & 65535, this._high = S & 65535;
  };
  var n = t("2654435761"), l = t("2246822519"), o = t("3266489917"), s = t("668265263"), u = t("374761393");
  function f(h) {
    for (var y = [], v = 0, g = h.length; v < g; v++) {
      var S = h.charCodeAt(v);
      S < 128 ? y.push(S) : S < 2048 ? y.push(
        192 | S >> 6,
        128 | S & 63
      ) : S < 55296 || S >= 57344 ? y.push(
        224 | S >> 12,
        128 | S >> 6 & 63,
        128 | S & 63
      ) : (v++, S = 65536 + ((S & 1023) << 10 | h.charCodeAt(v) & 1023), y.push(
        240 | S >> 18,
        128 | S >> 12 & 63,
        128 | S >> 6 & 63,
        128 | S & 63
      ));
    }
    return new Uint8Array(y);
  }
  function d() {
    if (arguments.length == 2)
      return new d(arguments[1]).update(arguments[0]).digest();
    if (!(this instanceof d))
      return new d(arguments[0]);
    p.call(this, arguments[0]);
  }
  function p(h) {
    return this.seed = h instanceof t ? h.clone() : t(h), this.v1 = this.seed.clone().add(n).add(l), this.v2 = this.seed.clone().add(l), this.v3 = this.seed.clone(), this.v4 = this.seed.clone().subtract(n), this.total_len = 0, this.memsize = 0, this.memory = null, this;
  }
  return d.prototype.init = p, d.prototype.update = function(h) {
    var y = typeof h == "string", v;
    y && (h = f(h), y = !1, v = !0), typeof ArrayBuffer < "u" && h instanceof ArrayBuffer && (v = !0, h = new Uint8Array(h));
    var g = 0, S = h.length, C = g + S;
    if (S == 0) return this;
    if (this.total_len += S, this.memsize == 0 && (y ? this.memory = "" : v ? this.memory = new Uint8Array(16) : this.memory = new Buffer(16)), this.memsize + S < 16)
      return y ? this.memory += h : v ? this.memory.set(h.subarray(0, S), this.memsize) : h.copy(this.memory, this.memsize, 0, S), this.memsize += S, this;
    if (this.memsize > 0) {
      y ? this.memory += h.slice(0, 16 - this.memsize) : v ? this.memory.set(h.subarray(0, 16 - this.memsize), this.memsize) : h.copy(this.memory, this.memsize, 0, 16 - this.memsize);
      var x = 0;
      y ? (this.v1.xxh_update(
        this.memory.charCodeAt(x + 1) << 8 | this.memory.charCodeAt(x),
        this.memory.charCodeAt(x + 3) << 8 | this.memory.charCodeAt(x + 2)
      ), x += 4, this.v2.xxh_update(
        this.memory.charCodeAt(x + 1) << 8 | this.memory.charCodeAt(x),
        this.memory.charCodeAt(x + 3) << 8 | this.memory.charCodeAt(x + 2)
      ), x += 4, this.v3.xxh_update(
        this.memory.charCodeAt(x + 1) << 8 | this.memory.charCodeAt(x),
        this.memory.charCodeAt(x + 3) << 8 | this.memory.charCodeAt(x + 2)
      ), x += 4, this.v4.xxh_update(
        this.memory.charCodeAt(x + 1) << 8 | this.memory.charCodeAt(x),
        this.memory.charCodeAt(x + 3) << 8 | this.memory.charCodeAt(x + 2)
      )) : (this.v1.xxh_update(
        this.memory[x + 1] << 8 | this.memory[x],
        this.memory[x + 3] << 8 | this.memory[x + 2]
      ), x += 4, this.v2.xxh_update(
        this.memory[x + 1] << 8 | this.memory[x],
        this.memory[x + 3] << 8 | this.memory[x + 2]
      ), x += 4, this.v3.xxh_update(
        this.memory[x + 1] << 8 | this.memory[x],
        this.memory[x + 3] << 8 | this.memory[x + 2]
      ), x += 4, this.v4.xxh_update(
        this.memory[x + 1] << 8 | this.memory[x],
        this.memory[x + 3] << 8 | this.memory[x + 2]
      )), g += 16 - this.memsize, this.memsize = 0, y && (this.memory = "");
    }
    if (g <= C - 16) {
      var F = C - 16;
      do
        y ? (this.v1.xxh_update(
          h.charCodeAt(g + 1) << 8 | h.charCodeAt(g),
          h.charCodeAt(g + 3) << 8 | h.charCodeAt(g + 2)
        ), g += 4, this.v2.xxh_update(
          h.charCodeAt(g + 1) << 8 | h.charCodeAt(g),
          h.charCodeAt(g + 3) << 8 | h.charCodeAt(g + 2)
        ), g += 4, this.v3.xxh_update(
          h.charCodeAt(g + 1) << 8 | h.charCodeAt(g),
          h.charCodeAt(g + 3) << 8 | h.charCodeAt(g + 2)
        ), g += 4, this.v4.xxh_update(
          h.charCodeAt(g + 1) << 8 | h.charCodeAt(g),
          h.charCodeAt(g + 3) << 8 | h.charCodeAt(g + 2)
        )) : (this.v1.xxh_update(
          h[g + 1] << 8 | h[g],
          h[g + 3] << 8 | h[g + 2]
        ), g += 4, this.v2.xxh_update(
          h[g + 1] << 8 | h[g],
          h[g + 3] << 8 | h[g + 2]
        ), g += 4, this.v3.xxh_update(
          h[g + 1] << 8 | h[g],
          h[g + 3] << 8 | h[g + 2]
        ), g += 4, this.v4.xxh_update(
          h[g + 1] << 8 | h[g],
          h[g + 3] << 8 | h[g + 2]
        )), g += 4;
      while (g <= F);
    }
    return g < C && (y ? this.memory += h.slice(g) : v ? this.memory.set(h.subarray(g, C), this.memsize) : h.copy(this.memory, this.memsize, g, C), this.memsize = C - g), this;
  }, d.prototype.digest = function() {
    var h = this.memory, y = typeof h == "string", v = 0, g = this.memsize, S, C, x = new t();
    for (this.total_len >= 16 ? S = this.v1.rotl(1).add(this.v2.rotl(7).add(this.v3.rotl(12).add(this.v4.rotl(18)))) : S = this.seed.clone().add(u), S.add(x.fromNumber(this.total_len)); v <= g - 4; )
      y ? x.fromBits(
        h.charCodeAt(v + 1) << 8 | h.charCodeAt(v),
        h.charCodeAt(v + 3) << 8 | h.charCodeAt(v + 2)
      ) : x.fromBits(
        h[v + 1] << 8 | h[v],
        h[v + 3] << 8 | h[v + 2]
      ), S.add(x.multiply(o)).rotl(17).multiply(s), v += 4;
    for (; v < g; )
      x.fromBits(y ? h.charCodeAt(v++) : h[v++], 0), S.add(x.multiply(u)).rotl(11).multiply(n);
    return C = S.clone().shiftRight(15), S.xor(C).multiply(l), C = S.clone().shiftRight(13), S.xor(C).multiply(o), C = S.clone().shiftRight(16), S.xor(C), this.init(this.seed), S;
  }, zu = d, zu;
}
var Ru, Lh;
function Kx() {
  if (Lh) return Ru;
  Lh = 1;
  var t = Cg().UINT64, n = t("11400714785074694791"), l = t("14029467366897019727"), o = t("1609587929392839161"), s = t("9650029242287828579"), u = t("2870177450012600261");
  function f(h) {
    for (var y = [], v = 0, g = h.length; v < g; v++) {
      var S = h.charCodeAt(v);
      S < 128 ? y.push(S) : S < 2048 ? y.push(
        192 | S >> 6,
        128 | S & 63
      ) : S < 55296 || S >= 57344 ? y.push(
        224 | S >> 12,
        128 | S >> 6 & 63,
        128 | S & 63
      ) : (v++, S = 65536 + ((S & 1023) << 10 | h.charCodeAt(v) & 1023), y.push(
        240 | S >> 18,
        128 | S >> 12 & 63,
        128 | S >> 6 & 63,
        128 | S & 63
      ));
    }
    return new Uint8Array(y);
  }
  function d() {
    if (arguments.length == 2)
      return new d(arguments[1]).update(arguments[0]).digest();
    if (!(this instanceof d))
      return new d(arguments[0]);
    p.call(this, arguments[0]);
  }
  function p(h) {
    return this.seed = h instanceof t ? h.clone() : t(h), this.v1 = this.seed.clone().add(n).add(l), this.v2 = this.seed.clone().add(l), this.v3 = this.seed.clone(), this.v4 = this.seed.clone().subtract(n), this.total_len = 0, this.memsize = 0, this.memory = null, this;
  }
  return d.prototype.init = p, d.prototype.update = function(h) {
    var y = typeof h == "string", v;
    y && (h = f(h), y = !1, v = !0), typeof ArrayBuffer < "u" && h instanceof ArrayBuffer && (v = !0, h = new Uint8Array(h));
    var g = 0, S = h.length, C = g + S;
    if (S == 0) return this;
    if (this.total_len += S, this.memsize == 0 && (y ? this.memory = "" : v ? this.memory = new Uint8Array(32) : this.memory = new Buffer(32)), this.memsize + S < 32)
      return y ? this.memory += h : v ? this.memory.set(h.subarray(0, S), this.memsize) : h.copy(this.memory, this.memsize, 0, S), this.memsize += S, this;
    if (this.memsize > 0) {
      y ? this.memory += h.slice(0, 32 - this.memsize) : v ? this.memory.set(h.subarray(0, 32 - this.memsize), this.memsize) : h.copy(this.memory, this.memsize, 0, 32 - this.memsize);
      var x = 0;
      if (y) {
        var F;
        F = t(
          this.memory.charCodeAt(x + 1) << 8 | this.memory.charCodeAt(x),
          this.memory.charCodeAt(x + 3) << 8 | this.memory.charCodeAt(x + 2),
          this.memory.charCodeAt(x + 5) << 8 | this.memory.charCodeAt(x + 4),
          this.memory.charCodeAt(x + 7) << 8 | this.memory.charCodeAt(x + 6)
        ), this.v1.add(F.multiply(l)).rotl(31).multiply(n), x += 8, F = t(
          this.memory.charCodeAt(x + 1) << 8 | this.memory.charCodeAt(x),
          this.memory.charCodeAt(x + 3) << 8 | this.memory.charCodeAt(x + 2),
          this.memory.charCodeAt(x + 5) << 8 | this.memory.charCodeAt(x + 4),
          this.memory.charCodeAt(x + 7) << 8 | this.memory.charCodeAt(x + 6)
        ), this.v2.add(F.multiply(l)).rotl(31).multiply(n), x += 8, F = t(
          this.memory.charCodeAt(x + 1) << 8 | this.memory.charCodeAt(x),
          this.memory.charCodeAt(x + 3) << 8 | this.memory.charCodeAt(x + 2),
          this.memory.charCodeAt(x + 5) << 8 | this.memory.charCodeAt(x + 4),
          this.memory.charCodeAt(x + 7) << 8 | this.memory.charCodeAt(x + 6)
        ), this.v3.add(F.multiply(l)).rotl(31).multiply(n), x += 8, F = t(
          this.memory.charCodeAt(x + 1) << 8 | this.memory.charCodeAt(x),
          this.memory.charCodeAt(x + 3) << 8 | this.memory.charCodeAt(x + 2),
          this.memory.charCodeAt(x + 5) << 8 | this.memory.charCodeAt(x + 4),
          this.memory.charCodeAt(x + 7) << 8 | this.memory.charCodeAt(x + 6)
        ), this.v4.add(F.multiply(l)).rotl(31).multiply(n);
      } else {
        var F;
        F = t(
          this.memory[x + 1] << 8 | this.memory[x],
          this.memory[x + 3] << 8 | this.memory[x + 2],
          this.memory[x + 5] << 8 | this.memory[x + 4],
          this.memory[x + 7] << 8 | this.memory[x + 6]
        ), this.v1.add(F.multiply(l)).rotl(31).multiply(n), x += 8, F = t(
          this.memory[x + 1] << 8 | this.memory[x],
          this.memory[x + 3] << 8 | this.memory[x + 2],
          this.memory[x + 5] << 8 | this.memory[x + 4],
          this.memory[x + 7] << 8 | this.memory[x + 6]
        ), this.v2.add(F.multiply(l)).rotl(31).multiply(n), x += 8, F = t(
          this.memory[x + 1] << 8 | this.memory[x],
          this.memory[x + 3] << 8 | this.memory[x + 2],
          this.memory[x + 5] << 8 | this.memory[x + 4],
          this.memory[x + 7] << 8 | this.memory[x + 6]
        ), this.v3.add(F.multiply(l)).rotl(31).multiply(n), x += 8, F = t(
          this.memory[x + 1] << 8 | this.memory[x],
          this.memory[x + 3] << 8 | this.memory[x + 2],
          this.memory[x + 5] << 8 | this.memory[x + 4],
          this.memory[x + 7] << 8 | this.memory[x + 6]
        ), this.v4.add(F.multiply(l)).rotl(31).multiply(n);
      }
      g += 32 - this.memsize, this.memsize = 0, y && (this.memory = "");
    }
    if (g <= C - 32) {
      var W = C - 32;
      do {
        if (y) {
          var F;
          F = t(
            h.charCodeAt(g + 1) << 8 | h.charCodeAt(g),
            h.charCodeAt(g + 3) << 8 | h.charCodeAt(g + 2),
            h.charCodeAt(g + 5) << 8 | h.charCodeAt(g + 4),
            h.charCodeAt(g + 7) << 8 | h.charCodeAt(g + 6)
          ), this.v1.add(F.multiply(l)).rotl(31).multiply(n), g += 8, F = t(
            h.charCodeAt(g + 1) << 8 | h.charCodeAt(g),
            h.charCodeAt(g + 3) << 8 | h.charCodeAt(g + 2),
            h.charCodeAt(g + 5) << 8 | h.charCodeAt(g + 4),
            h.charCodeAt(g + 7) << 8 | h.charCodeAt(g + 6)
          ), this.v2.add(F.multiply(l)).rotl(31).multiply(n), g += 8, F = t(
            h.charCodeAt(g + 1) << 8 | h.charCodeAt(g),
            h.charCodeAt(g + 3) << 8 | h.charCodeAt(g + 2),
            h.charCodeAt(g + 5) << 8 | h.charCodeAt(g + 4),
            h.charCodeAt(g + 7) << 8 | h.charCodeAt(g + 6)
          ), this.v3.add(F.multiply(l)).rotl(31).multiply(n), g += 8, F = t(
            h.charCodeAt(g + 1) << 8 | h.charCodeAt(g),
            h.charCodeAt(g + 3) << 8 | h.charCodeAt(g + 2),
            h.charCodeAt(g + 5) << 8 | h.charCodeAt(g + 4),
            h.charCodeAt(g + 7) << 8 | h.charCodeAt(g + 6)
          ), this.v4.add(F.multiply(l)).rotl(31).multiply(n);
        } else {
          var F;
          F = t(
            h[g + 1] << 8 | h[g],
            h[g + 3] << 8 | h[g + 2],
            h[g + 5] << 8 | h[g + 4],
            h[g + 7] << 8 | h[g + 6]
          ), this.v1.add(F.multiply(l)).rotl(31).multiply(n), g += 8, F = t(
            h[g + 1] << 8 | h[g],
            h[g + 3] << 8 | h[g + 2],
            h[g + 5] << 8 | h[g + 4],
            h[g + 7] << 8 | h[g + 6]
          ), this.v2.add(F.multiply(l)).rotl(31).multiply(n), g += 8, F = t(
            h[g + 1] << 8 | h[g],
            h[g + 3] << 8 | h[g + 2],
            h[g + 5] << 8 | h[g + 4],
            h[g + 7] << 8 | h[g + 6]
          ), this.v3.add(F.multiply(l)).rotl(31).multiply(n), g += 8, F = t(
            h[g + 1] << 8 | h[g],
            h[g + 3] << 8 | h[g + 2],
            h[g + 5] << 8 | h[g + 4],
            h[g + 7] << 8 | h[g + 6]
          ), this.v4.add(F.multiply(l)).rotl(31).multiply(n);
        }
        g += 8;
      } while (g <= W);
    }
    return g < C && (y ? this.memory += h.slice(g) : v ? this.memory.set(h.subarray(g, C), this.memsize) : h.copy(this.memory, this.memsize, g, C), this.memsize = C - g), this;
  }, d.prototype.digest = function() {
    var h = this.memory, y = typeof h == "string", v = 0, g = this.memsize, S, C, x = new t();
    for (this.total_len >= 32 ? (S = this.v1.clone().rotl(1), S.add(this.v2.clone().rotl(7)), S.add(this.v3.clone().rotl(12)), S.add(this.v4.clone().rotl(18)), S.xor(this.v1.multiply(l).rotl(31).multiply(n)), S.multiply(n).add(s), S.xor(this.v2.multiply(l).rotl(31).multiply(n)), S.multiply(n).add(s), S.xor(this.v3.multiply(l).rotl(31).multiply(n)), S.multiply(n).add(s), S.xor(this.v4.multiply(l).rotl(31).multiply(n)), S.multiply(n).add(s)) : S = this.seed.clone().add(u), S.add(x.fromNumber(this.total_len)); v <= g - 8; )
      y ? x.fromBits(
        h.charCodeAt(v + 1) << 8 | h.charCodeAt(v),
        h.charCodeAt(v + 3) << 8 | h.charCodeAt(v + 2),
        h.charCodeAt(v + 5) << 8 | h.charCodeAt(v + 4),
        h.charCodeAt(v + 7) << 8 | h.charCodeAt(v + 6)
      ) : x.fromBits(
        h[v + 1] << 8 | h[v],
        h[v + 3] << 8 | h[v + 2],
        h[v + 5] << 8 | h[v + 4],
        h[v + 7] << 8 | h[v + 6]
      ), x.multiply(l).rotl(31).multiply(n), S.xor(x).rotl(27).multiply(n).add(s), v += 8;
    for (v + 4 <= g && (y ? x.fromBits(
      h.charCodeAt(v + 1) << 8 | h.charCodeAt(v),
      h.charCodeAt(v + 3) << 8 | h.charCodeAt(v + 2),
      0,
      0
    ) : x.fromBits(
      h[v + 1] << 8 | h[v],
      h[v + 3] << 8 | h[v + 2],
      0,
      0
    ), S.xor(x.multiply(n)).rotl(23).multiply(l).add(o), v += 4); v < g; )
      x.fromBits(y ? h.charCodeAt(v++) : h[v++], 0, 0, 0), S.xor(x.multiply(u)).rotl(11).multiply(n);
    return C = S.clone().shiftRight(33), S.xor(C).multiply(l), C = S.clone().shiftRight(29), S.xor(C).multiply(o), C = S.clone().shiftRight(32), S.xor(C), this.init(this.seed), S;
  }, Ru = d, Ru;
}
var Lu, Ih;
function Dx() {
  return Ih || (Ih = 1, Lu = {
    h32: Mx(),
    h64: Kx()
  }), Lu;
}
Dx();
var Ox = Object.create, ma = Object.defineProperty, Vx = Object.getOwnPropertyDescriptor, Pc = Object.getOwnPropertyNames, Bx = Object.getPrototypeOf, Hx = Object.prototype.hasOwnProperty, Ux = (t, n) => function() {
  return t && (n = (0, t[Pc(t)[0]])(t = 0)), n;
}, Wx = (t, n) => function() {
  return n || (0, t[Pc(t)[0]])((n = { exports: {} }).exports, n), n.exports;
}, Gx = (t, n) => {
  for (var l in n)
    ma(t, l, { get: n[l], enumerable: !0 });
}, Eg = (t, n, l, o) => {
  if (n && typeof n == "object" || typeof n == "function")
    for (let s of Pc(n))
      !Hx.call(t, s) && s !== l && ma(t, s, { get: () => n[s], enumerable: !(o = Vx(n, s)) || o.enumerable });
  return t;
}, qx = (t, n, l) => (l = t != null ? Ox(Bx(t)) : {}, Eg(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  ma(l, "default", { value: t, enumerable: !0 }),
  t
)), Qx = (t) => Eg(ma({}, "__esModule", { value: !0 }), t), $g = {};
Gx($g, {
  MODE_VALUES: () => _g,
  THEME_VALUES: () => kg
});
var kg, _g, Zx = Ux({
  "../@paloma-tokens/dist/assets/paloma-theme-mode-values.ts"() {
    kg = [
      "ea-blue",
      "ea-sims",
      "fc-green",
      "ea-battlefield6",
      // eslint-disable-line perfectionist/sort-union-types
      "purple",
      "red",
      "ea-madden"
    ], _g = ["dark", "light"];
  }
}), Xx = Wx({
  "../@paloma-tokens/dist/index.js"(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.THEME_VALUES = t.MODE_VALUES = void 0;
    var n = (Zx(), Qx($g));
    Object.defineProperty(t, "MODE_VALUES", { enumerable: !0, get: function() {
      return n.MODE_VALUES;
    } }), Object.defineProperty(t, "THEME_VALUES", { enumerable: !0, get: function() {
      return n.THEME_VALUES;
    } });
  }
}), cc = (t) => {
  console.error(`Assertion failed: ${t}`);
}, ft = (t, n) => {
  n || cc("The assert function requires a message."), t || cc(n);
}, Fg = (t, n) => {
  t == null && cc(n);
};
function Ke(t) {
  if (t === void 0)
    return !1;
}
var Un = (t) => {
  Ke() && console.warn(t);
}, Yx = "It seems like you're using the cn function with a single string input. The cn function is designed for handling conditional classes. If you're not dealing with conditional classes, consider using the class directly.", Jx = (t) => !t.startsWith("size"), Pg = {
  override: {
    classGroups: {
      "font-size": [{ "text-size": [_x.isAny] }],
      "font-variant": ["font-variant-none"],
      "text-color": [
        {
          text: [Jx]
        }
      ]
    }
  }
}, e2 = xg(Pg), t2 = /\s\s+/g, r2 = (t) => t.replace(t2, " "), rt = (...t) => {
  if (typeof t[0] == "string" && t.length === 1)
    return Un(Yx), Un(`cn("${t[0]}")`), t[0];
  const n = e2(Ec(...t));
  return r2(n);
}, O = (t, n) => pi(t, { twMergeConfig: Pg, ...n }), Ng = qx(Xx());
Ng.MODE_VALUES;
Ng.THEME_VALUES;
function jh(t) {
  const n = E.version.split(".");
  return parseInt(n[0], 10) >= 19 ? t : t ? "true" : void 0;
}
function n2(t, n = !0) {
  let [l, o] = E.useState(!0), s = l && n;
  return Qt(() => {
    if (s && t.current && "getAnimations" in t.current)
      for (let u of t.current.getAnimations()) u instanceof CSSTransition && u.cancel();
  }, [
    t,
    s
  ]), Tg(t, s, E.useCallback(() => o(!1), [])), s;
}
function l2(t, n) {
  let [l, o] = E.useState(n ? "open" : "closed");
  switch (l) {
    case "open":
      n || o("exiting");
      break;
    case "closed":
    case "exiting":
      n && o("open");
      break;
  }
  let s = l === "exiting";
  return Tg(t, s, E.useCallback(() => {
    o((u) => u === "exiting" ? "closed" : u);
  }, [])), s;
}
function Tg(t, n, l) {
  Qt(() => {
    if (n && t.current) {
      if (!("getAnimations" in t.current)) {
        l();
        return;
      }
      let o = t.current.getAnimations();
      if (o.length === 0) {
        l();
        return;
      }
      let s = !1;
      return Promise.allSettled(o.map((u) => u.finished)).then(() => {
        s || da.flushSync(() => {
          l();
        });
      }), () => {
        s = !0;
      };
    }
  }, [
    t,
    n,
    l
  ]);
}
const i2 = (t) => w.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...t, children: [w.jsx("path", { d: "M13.956 16.5927C14.576 16.7806 15 17.3521 15 18L9 18C9 17.3521 9.424 16.7806 10.044 16.5927L12 16L13.956 16.5927Z" }), w.jsx("path", { d: "M14 7H10L12 10L14 7Z" }), w.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5 3H19V5H18V7.0386C18 7.8723 17.7395 8.68515 17.2549 9.36356L15.3718 12L17.2549 14.6364C17.7395 15.3148 18 16.1277 18 16.9614V19H19V21H5V19H6V16.9614C6 16.1277 6.26049 15.3148 6.74507 14.6364L8.62824 12L6.74507 9.36356C6.26049 8.68515 6 7.8723 6 7.0386V5H5V3ZM8 16.9614V19H16V16.9614C16 16.5445 15.8698 16.1381 15.6275 15.7989L12.914 12L15.6275 8.20108C15.8698 7.86188 16 7.45545 16 7.0386V5H8V7.0386C8 7.45545 8.13025 7.86188 8.37253 8.20108L11.086 12L8.37253 15.7989C8.13025 16.1381 8 16.5445 8 16.9614Z" })] }), o2 = ({ children: t, containerClassName: n, emphasis: l, shape: o, size: s }) => {
  const u = typeof s == "number", f = u ? {
    height: s,
    padding: s / 2,
    width: s
  } : void 0, d = u ? void 0 : s;
  return w.jsx("div", { className: lt({
    class: n,
    emphasis: l,
    shape: o,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: f, children: t });
}, a2 = ({ "aria-label": t, className: n, color: l, contained: o, containerClassName: s, emphasis: u = "regular", shape: f = "circle", size: d = "medium", svgClassName: p, ...h }) => {
  const y = !t, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, S = v ? void 0 : d, C = o ? o2 : E.Fragment, x = o ? { containerClassName: s, emphasis: u, shape: f, size: d } : {};
  return w.jsx(C, { ...x, children: w.jsx("span", { ...h, className: at({ class: n, size: S }), "data-namespace": "@paloma/icons", "data-size": d, id: "hourglass-fill-id", style: { color: l, ...g }, children: w.jsx(i2, { "aria-hidden": y, "aria-label": t, className: nt({ class: p, size: S }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "hourglass-fill-svg-id", style: { fill: s2, ...g } }) }) });
}, s2 = "currentColor";
var u2 = E.createContext({}), c2 = (t, n) => {
  const l = t[n];
  return l || n;
};
function Ag(...t) {
  const n = E.useContext(u2);
  return E.useMemo(() => {
    const l = t.map(
      (o) => c2(n, o)
    );
    return l.length === 1 ? l[0] : l;
  }, [t, n]);
}
const d2 = (t) => w.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...t, children: [w.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.3531 9.11111C15.3531 10.8293 13.9602 12.2222 12.242 12.2222C10.5238 12.2222 9.13087 10.8293 9.13087 9.11111C9.13087 7.39289 10.5238 6 12.242 6C13.9602 6 15.3531 7.39289 15.3531 9.11111ZM13.3531 9.11111C13.3531 9.72476 12.8556 10.2222 12.242 10.2222C11.6283 10.2222 11.1309 9.72476 11.1309 9.11111C11.1309 8.49746 11.6283 8 12.242 8C12.8556 8 13.3531 8.49746 13.3531 9.11111Z" }), w.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.9608 18.2766C15.5973 19.3557 13.8739 20 12 20C10.3038 20 8.73083 19.4721 7.43653 18.5716L8.20631 15.9544C8.27585 15.7179 8.49284 15.5556 8.73929 15.5556H15.7448C15.9912 15.5556 16.2082 15.7179 16.2778 15.9544L16.9608 18.2766ZM18.5505 16.5937L18.1965 15.39C17.8766 14.3024 16.8784 13.5556 15.7448 13.5556H8.73929C7.60562 13.5556 6.60746 14.3024 6.28758 15.39L5.79821 17.0539C4.67412 15.6761 4 13.9168 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 13.7094 19.4638 15.2937 18.5505 16.5937Z" })] }), f2 = ({ children: t, containerClassName: n, emphasis: l, shape: o, size: s }) => {
  const u = typeof s == "number", f = u ? {
    height: s,
    padding: s / 2,
    width: s
  } : void 0, d = u ? void 0 : s;
  return w.jsx("div", { className: lt({
    class: n,
    emphasis: l,
    shape: o,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: f, children: t });
}, zg = ({ "aria-label": t, className: n, color: l, contained: o, containerClassName: s, emphasis: u = "regular", shape: f = "circle", size: d = "medium", svgClassName: p, ...h }) => {
  const y = !t, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, S = v ? void 0 : d, C = o ? f2 : E.Fragment, x = o ? { containerClassName: s, emphasis: u, shape: f, size: d } : {};
  return w.jsx(C, { ...x, children: w.jsx("span", { ...h, className: at({ class: n, size: S }), "data-namespace": "@paloma/icons", "data-size": d, id: "account-id", style: { color: l, ...g }, children: w.jsx(d2, { "aria-hidden": y, "aria-label": t, className: nt({ class: p, size: S }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "account-svg-id", style: { fill: p2, ...g } }) }) });
}, p2 = "currentColor", h2 = (t) => w.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...t, children: w.jsx("path", { d: "M11.7071 3.29291L3 12L11.7071 20.7071L13.1213 19.2929L6.82841 13L20 13V11L6.82844 11L13.1213 4.70712L11.7071 3.29291Z" }) }), m2 = ({ children: t, containerClassName: n, emphasis: l, shape: o, size: s }) => {
  const u = typeof s == "number", f = u ? {
    height: s,
    padding: s / 2,
    width: s
  } : void 0, d = u ? void 0 : s;
  return w.jsx("div", { className: lt({
    class: n,
    emphasis: l,
    shape: o,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: f, children: t });
}, Rg = ({ "aria-label": t, className: n, color: l, contained: o, containerClassName: s, emphasis: u = "regular", shape: f = "circle", size: d = "medium", svgClassName: p, ...h }) => {
  const y = !t, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, S = v ? void 0 : d, C = o ? m2 : E.Fragment, x = o ? { containerClassName: s, emphasis: u, shape: f, size: d } : {};
  return w.jsx(C, { ...x, children: w.jsx("span", { ...h, className: at({ class: n, size: S }), "data-namespace": "@paloma/icons", "data-size": d, id: "arrow-left-id", style: { color: l, ...g }, children: w.jsx(h2, { "aria-hidden": y, "aria-label": t, className: nt({ class: p, size: S }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "arrow-left-svg-id", style: { fill: g2, ...g } }) }) });
}, g2 = "currentColor", v2 = (t) => w.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...t, children: w.jsx("path", { d: "M12.2929 3.29291L21 12L12.2929 20.7071L10.8787 19.2929L17.1716 13H4V11H17.1716L10.8787 4.70712L12.2929 3.29291Z" }) }), y2 = ({ children: t, containerClassName: n, emphasis: l, shape: o, size: s }) => {
  const u = typeof s == "number", f = u ? {
    height: s,
    padding: s / 2,
    width: s
  } : void 0, d = u ? void 0 : s;
  return w.jsx("div", { className: lt({
    class: n,
    emphasis: l,
    shape: o,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: f, children: t });
}, Lg = ({ "aria-label": t, className: n, color: l, contained: o, containerClassName: s, emphasis: u = "regular", shape: f = "circle", size: d = "medium", svgClassName: p, ...h }) => {
  const y = !t, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, S = v ? void 0 : d, C = o ? y2 : E.Fragment, x = o ? { containerClassName: s, emphasis: u, shape: f, size: d } : {};
  return w.jsx(C, { ...x, children: w.jsx("span", { ...h, className: at({ class: n, size: S }), "data-namespace": "@paloma/icons", "data-size": d, id: "arrow-right-id", style: { color: l, ...g }, children: w.jsx(v2, { "aria-hidden": y, "aria-label": t, className: nt({ class: p, size: S }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "arrow-right-svg-id", style: { fill: b2, ...g } }) }) });
}, b2 = "currentColor", x2 = (t) => w.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...t, children: [w.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3 4V18L8.33333 14H17V4H3ZM5 6H15V12H7.66667L5 14V6Z" }), w.jsx("path", { d: "M21 9H19V17.5841L16.2361 16H10.0487L7.5 18H15.764L21 21V9Z" })] }), w2 = ({ children: t, containerClassName: n, emphasis: l, shape: o, size: s }) => {
  const u = typeof s == "number", f = u ? {
    height: s,
    padding: s / 2,
    width: s
  } : void 0, d = u ? void 0 : s;
  return w.jsx("div", { className: lt({
    class: n,
    emphasis: l,
    shape: o,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: f, children: t });
}, Ig = ({ "aria-label": t, className: n, color: l, contained: o, containerClassName: s, emphasis: u = "regular", shape: f = "circle", size: d = "medium", svgClassName: p, ...h }) => {
  const y = !t, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, S = v ? void 0 : d, C = o ? w2 : E.Fragment, x = o ? { containerClassName: s, emphasis: u, shape: f, size: d } : {};
  return w.jsx(C, { ...x, children: w.jsx("span", { ...h, className: at({ class: n, size: S }), "data-namespace": "@paloma/icons", "data-size": d, id: "chat-id", style: { color: l, ...g }, children: w.jsx(x2, { "aria-hidden": y, "aria-label": t, className: nt({ class: p, size: S }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "chat-svg-id", style: { fill: S2, ...g } }) }) });
}, S2 = "currentColor", C2 = (t) => w.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...t, children: w.jsx("path", { d: "M11.9988 10.5846L6.41421 5L5 6.41421L10.5846 11.9988L5 17.5834L6.41421 18.9977L11.9988 13.413L17.5834 18.9976L18.9976 17.5834L13.413 11.9988L18.9976 6.41427L17.5834 5.00006L11.9988 10.5846Z" }) }), E2 = E.forwardRef(({ "aria-label": t, as: n, className: l, color: o, contained: s = !1, disabled: u, emphasis: f = "regular", onBlur: d, onClick: p, onFocus: h, shape: y = "square", size: v = "medium", svgClassName: g, ...S }, C) => {
  const x = n ?? "button", F = E.useRef(null), { buttonProps: W } = pa({
    elementType: x,
    isDisabled: u,
    onBlur: d,
    onFocus: h,
    onPress: p
  }, F), L = !!(u || !t), X = typeof v == "number", J = X ? { height: v, width: v } : void 0, fe = X && s ? { padding: v / 2 } : void 0, ce = X ? void 0 : v, ue = Te(W, S);
  return w.jsx(k2, { disabled: u, children: w.jsx(x, { "aria-disabled": u, "aria-hidden": L, "aria-label": t, className: lt({
    button: !0,
    class: l,
    emphasis: s && f,
    shape: y,
    size: ce
  }), "data-namespace": "@paloma/icons", "data-size": v, id: "close-id", ref: Hr(F, C), style: { color: o, ...fe, ...J }, ...ue, children: w.jsx(C2, { className: nt({ class: g, size: ce }), "data-testid": "@paloma-icon-button-svg-id", focusable: "false", id: "close-svg-id", style: { fill: $2, ...J } }) }) });
}), $2 = "currentColor", k2 = ({ children: t, disabled: n, ...l }) => n ? t : w.jsx(lg, { focusRingClass: zx(), ...l, children: t }), _2 = (t) => w.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...t, children: [w.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 4H11V11H4V4ZM6 6H9V9H6V6Z" }), w.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13 4H20V11H13V4ZM15 6H18V9H15V6Z" }), w.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13 13V20H20V13H13ZM18 15H15V18H18V15Z" }), w.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 13H11V20H4V13ZM6 15H9V18H6V15Z" })] }), F2 = ({ children: t, containerClassName: n, emphasis: l, shape: o, size: s }) => {
  const u = typeof s == "number", f = u ? {
    height: s,
    padding: s / 2,
    width: s
  } : void 0, d = u ? void 0 : s;
  return w.jsx("div", { className: lt({
    class: n,
    emphasis: l,
    shape: o,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: f, children: t });
}, P2 = ({ "aria-label": t, className: n, color: l, contained: o, containerClassName: s, emphasis: u = "regular", shape: f = "circle", size: d = "medium", svgClassName: p, ...h }) => {
  const y = !t, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, S = v ? void 0 : d, C = o ? F2 : E.Fragment, x = o ? { containerClassName: s, emphasis: u, shape: f, size: d } : {};
  return w.jsx(C, { ...x, children: w.jsx("span", { ...h, className: at({ class: n, size: S }), "data-namespace": "@paloma/icons", "data-size": d, id: "dashboard-grid-id", style: { color: l, ...g }, children: w.jsx(_2, { "aria-hidden": y, "aria-label": t, className: nt({ class: p, size: S }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "dashboard-grid-svg-id", style: { fill: N2, ...g } }) }) });
}, N2 = "currentColor", T2 = (t) => w.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...t, children: w.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15 4.00001L20 9.00001L9 20L4 20V15L15 4.00001ZM13.5997 8.23289L15.7671 10.4003L17.1674 9.00001L15 6.83256L13.5997 8.23289ZM14.3509 11.8166L12.1834 9.64916L6.00292 15.8296V17.9971L8.17037 17.9971L14.3509 11.8166Z" }) }), A2 = ({ children: t, containerClassName: n, emphasis: l, shape: o, size: s }) => {
  const u = typeof s == "number", f = u ? {
    height: s,
    padding: s / 2,
    width: s
  } : void 0, d = u ? void 0 : s;
  return w.jsx("div", { className: lt({
    class: n,
    emphasis: l,
    shape: o,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: f, children: t });
}, z2 = ({ "aria-label": t, className: n, color: l, contained: o, containerClassName: s, emphasis: u = "regular", shape: f = "circle", size: d = "medium", svgClassName: p, ...h }) => {
  const y = !t, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, S = v ? void 0 : d, C = o ? A2 : E.Fragment, x = o ? { containerClassName: s, emphasis: u, shape: f, size: d } : {};
  return w.jsx(C, { ...x, children: w.jsx("span", { ...h, className: at({ class: n, size: S }), "data-namespace": "@paloma/icons", "data-size": d, id: "edit-id", style: { color: l, ...g }, children: w.jsx(T2, { "aria-hidden": y, "aria-label": t, className: nt({ class: p, size: S }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "edit-svg-id", style: { fill: R2, ...g } }) }) });
}, R2 = "currentColor", L2 = (t) => w.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...t, children: [w.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16 12C16 14.2091 14.2091 16 12 16C9.79087 16 8.00001 14.2091 8.00001 12C8.00001 9.79086 9.79087 8 12 8C14.2091 8 16 9.79086 16 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" }), w.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5C7.70852 5 4.03956 7.69143 2.10589 11.552L1.88159 11.9999L2.10588 12.4477C4.03952 16.3085 7.70854 19 12.0001 19C16.2915 19 19.9605 16.3086 21.8941 12.448L22.1184 12.0001L21.8941 11.5523C19.9605 7.69155 16.2915 5 12 5ZM12.0001 17C8.75575 17 5.83332 15.0562 4.13082 11.9999C5.83333 8.94372 8.75571 7 12 7C15.2443 7 18.1667 8.94381 19.8692 12.0001C18.1667 15.0563 15.2443 17 12.0001 17Z" })] }), I2 = ({ children: t, containerClassName: n, emphasis: l, shape: o, size: s }) => {
  const u = typeof s == "number", f = u ? {
    height: s,
    padding: s / 2,
    width: s
  } : void 0, d = u ? void 0 : s;
  return w.jsx("div", { className: lt({
    class: n,
    emphasis: l,
    shape: o,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: f, children: t });
}, jg = ({ "aria-label": t, className: n, color: l, contained: o, containerClassName: s, emphasis: u = "regular", shape: f = "circle", size: d = "medium", svgClassName: p, ...h }) => {
  const y = !t, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, S = v ? void 0 : d, C = o ? I2 : E.Fragment, x = o ? { containerClassName: s, emphasis: u, shape: f, size: d } : {};
  return w.jsx(C, { ...x, children: w.jsx("span", { ...h, className: at({ class: n, size: S }), "data-namespace": "@paloma/icons", "data-size": d, id: "eye-id", style: { color: l, ...g }, children: w.jsx(L2, { "aria-hidden": y, "aria-label": t, className: nt({ class: p, size: S }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "eye-svg-id", style: { fill: j2, ...g } }) }) });
}, j2 = "currentColor", M2 = (t) => w.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...t, children: [w.jsx("path", { d: "M16 8V4H18V5H21V7H18V8H16Z" }), w.jsx("path", { d: "M13 7L3 7V5L13 5V7Z" }), w.jsx("path", { d: "M6 13V14H8V10H6V11H3V13H6Z" }), w.jsx("path", { d: "M21 13L10 13V11L21 11V13Z" }), w.jsx("path", { d: "M21 19V17L15 17V19L21 19Z" }), w.jsx("path", { d: "M11 17V16H13V20H11V19H3V17H11Z" })] }), K2 = ({ children: t, containerClassName: n, emphasis: l, shape: o, size: s }) => {
  const u = typeof s == "number", f = u ? {
    height: s,
    padding: s / 2,
    width: s
  } : void 0, d = u ? void 0 : s;
  return w.jsx("div", { className: lt({
    class: n,
    emphasis: l,
    shape: o,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: f, children: t });
}, D2 = ({ "aria-label": t, className: n, color: l, contained: o, containerClassName: s, emphasis: u = "regular", shape: f = "circle", size: d = "medium", svgClassName: p, ...h }) => {
  const y = !t, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, S = v ? void 0 : d, C = o ? K2 : E.Fragment, x = o ? { containerClassName: s, emphasis: u, shape: f, size: d } : {};
  return w.jsx(C, { ...x, children: w.jsx("span", { ...h, className: at({ class: n, size: S }), "data-namespace": "@paloma/icons", "data-size": d, id: "filter-sliders-horizontal-id", style: { color: l, ...g }, children: w.jsx(M2, { "aria-hidden": y, "aria-label": t, className: nt({ class: p, size: S }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "filter-sliders-horizontal-svg-id", style: { fill: O2, ...g } }) }) });
}, O2 = "currentColor", V2 = (t) => w.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...t, children: w.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1295 4.69761C10.9271 3.53768 12.0025 3 12.0025 3C12.0025 3.90396 12.113 4.63258 12.3039 5.23184C12.834 6.89546 13.9843 7.56222 15.1128 8.21633C15.7159 8.56593 16.3128 8.91192 16.8055 9.40456C18.0347 10.6337 18.7949 12.3319 18.7949 14.2075C18.7949 17.9589 15.7538 21 12.0025 21C8.25111 21 5.21002 17.9589 5.21002 14.2075C5.21002 13.3993 5.35117 12.6241 5.61017 11.9052C5.64152 11.8181 5.6746 11.7319 5.70936 11.6466C6.05391 10.8008 6.56404 10.04 7.19949 9.40456C7.19949 9.40456 7.19949 10.8943 7.79283 11.9144C8.1017 12.4453 8.57135 12.8491 9.28549 12.8491V14.8491C8.42013 14.8491 7.74079 14.5897 7.21002 14.2091C7.21088 16.8552 9.35621 19 12.0025 19C14.6493 19 16.7949 16.8543 16.7949 14.2075C16.7949 12.8836 16.2607 11.6882 15.3913 10.8188C15.1535 10.581 14.8351 10.3697 14.3095 10.0627C14.251 10.0285 14.1887 9.9925 14.123 9.95459C13.667 9.6911 13.0538 9.33686 12.4972 8.89017C12.0708 8.5479 11.6547 8.13718 11.2883 7.62797C11.3138 8.55774 11.5047 8.8105 11.5722 8.89993C11.576 8.90484 11.5793 8.90927 11.5822 8.91328C11.5875 8.92049 11.6003 8.9349 11.6193 8.95626C11.8125 9.17327 12.644 10.1073 12.644 11.4906C12.644 12.1802 12.4658 12.8303 12.0958 13.3853C11.7341 13.9279 11.2662 14.2646 10.8592 14.4681C10.4599 14.6677 10.0849 14.7576 9.82656 14.8006C9.69265 14.8229 9.57668 14.8349 9.48636 14.8413C9.44086 14.8446 9.40092 14.8465 9.36738 14.8476C9.35058 14.8482 9.3353 14.8485 9.32164 14.8488L9.30235 14.849L9.29362 14.849L9.28948 14.8491L9.28747 14.8491C9.28648 14.8491 9.28549 14.8491 9.28549 12.8491C9.28549 12.8491 10.644 12.8491 10.644 11.4906C10.644 10.9472 10.4266 10.6755 10.1658 10.3494C9.77455 9.86038 9.28549 9.24906 9.28549 7.41509C9.28549 6.28146 9.65922 5.38141 10.1295 4.69761Z" }) }), B2 = ({ children: t, containerClassName: n, emphasis: l, shape: o, size: s }) => {
  const u = typeof s == "number", f = u ? {
    height: s,
    padding: s / 2,
    width: s
  } : void 0, d = u ? void 0 : s;
  return w.jsx("div", { className: lt({
    class: n,
    emphasis: l,
    shape: o,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: f, children: t });
}, H2 = ({ "aria-label": t, className: n, color: l, contained: o, containerClassName: s, emphasis: u = "regular", shape: f = "circle", size: d = "medium", svgClassName: p, ...h }) => {
  const y = !t, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, S = v ? void 0 : d, C = o ? B2 : E.Fragment, x = o ? { containerClassName: s, emphasis: u, shape: f, size: d } : {};
  return w.jsx(C, { ...x, children: w.jsx("span", { ...h, className: at({ class: n, size: S }), "data-namespace": "@paloma/icons", "data-size": d, id: "fire-id", style: { color: l, ...g }, children: w.jsx(V2, { "aria-hidden": y, "aria-label": t, className: nt({ class: p, size: S }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "fire-svg-id", style: { fill: U2, ...g } }) }) });
}, U2 = "currentColor", W2 = (t) => w.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...t, children: [w.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2C8.15914 2 5 5.06721 5 8.88C5 11.1787 6.13185 12.4679 7.02426 13.4843L7.04788 13.5113L7.04867 13.5122C7.33781 13.843 7.60874 14.1537 7.86623 14.4997C7.88365 14.5588 7.90541 14.6502 7.92658 14.7698C7.96944 15.012 8 15.3137 8 15.6V18H16V15.6C16 15.3155 16.0313 15.014 16.075 14.7708C16.0968 14.6494 16.1192 14.5565 16.1371 14.4965L16.1379 14.4941C16.3927 14.1455 16.665 13.8327 16.9593 13.4948L16.9875 13.4624C17.8734 12.4462 19 11.1538 19 8.88C19 5.06721 15.8409 2 12 2ZM7 8.88C7 6.20967 9.22543 4 12 4C14.7746 4 17 6.20967 17 8.88C17 10.3769 16.327 11.1762 15.4513 12.1811L15.4288 12.2068C15.129 12.5511 14.7857 12.9453 14.4596 13.4019L14.4574 13.405C14.3253 13.5915 14.2557 13.8074 14.2209 13.9239C14.176 14.074 14.1377 14.2433 14.1065 14.417C14.0442 14.764 14 15.1845 14 15.6V16H10V15.6C10 15.1863 9.95727 14.7677 9.89599 14.4213C9.86533 14.248 9.82755 14.0788 9.78287 13.9283C9.74821 13.8117 9.67843 13.594 9.54412 13.4057L9.53869 13.3981C9.20863 12.9444 8.86653 12.5529 8.56583 12.2089L8.55383 12.1951L8.55239 12.1935C7.67595 11.195 7 10.3985 7 8.88Z" }), w.jsx("path", { d: "M15 22V20H9V22H15Z" })] }), G2 = ({ children: t, containerClassName: n, emphasis: l, shape: o, size: s }) => {
  const u = typeof s == "number", f = u ? {
    height: s,
    padding: s / 2,
    width: s
  } : void 0, d = u ? void 0 : s;
  return w.jsx("div", { className: lt({
    class: n,
    emphasis: l,
    shape: o,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: f, children: t });
}, q2 = ({ "aria-label": t, className: n, color: l, contained: o, containerClassName: s, emphasis: u = "regular", shape: f = "circle", size: d = "medium", svgClassName: p, ...h }) => {
  const y = !t, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, S = v ? void 0 : d, C = o ? G2 : E.Fragment, x = o ? { containerClassName: s, emphasis: u, shape: f, size: d } : {};
  return w.jsx(C, { ...x, children: w.jsx("span", { ...h, className: at({ class: n, size: S }), "data-namespace": "@paloma/icons", "data-size": d, id: "lightbulb-id", style: { color: l, ...g }, children: w.jsx(W2, { "aria-hidden": y, "aria-label": t, className: nt({ class: p, size: S }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "lightbulb-svg-id", style: { fill: Q2, ...g } }) }) });
}, Q2 = "currentColor", Z2 = (t) => w.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...t, children: w.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.5696 3.15546C12.6772 2.26303 11.1914 2.41015 10.4913 3.46028L7.46479 8.00008H3V20.0001L17.1949 20C18.0901 20 18.895 19.4551 19.2275 18.6239L19.2849 18.4804C20.4179 15.6479 21 12.6252 21 9.57453C21 8.70496 20.2951 8.00004 19.4255 8.00004H15V5.82847C15 5.03282 14.6839 4.26976 14.1213 3.70715L13.5696 3.15546ZM7 18.0001V10.0001H5V18.0001H7ZM9 18H17.1949C17.2723 18 17.3418 17.953 17.3705 17.8812L17.4279 17.7376C18.4137 15.2731 18.9445 12.6516 18.9959 10H13V5.82847C13 5.56325 12.8946 5.3089 12.7071 5.12136L12.1554 4.56968L9 9.30281V18Z" }) }), X2 = ({ children: t, containerClassName: n, emphasis: l, shape: o, size: s }) => {
  const u = typeof s == "number", f = u ? {
    height: s,
    padding: s / 2,
    width: s
  } : void 0, d = u ? void 0 : s;
  return w.jsx("div", { className: lt({
    class: n,
    emphasis: l,
    shape: o,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: f, children: t });
}, Mg = ({ "aria-label": t, className: n, color: l, contained: o, containerClassName: s, emphasis: u = "regular", shape: f = "circle", size: d = "medium", svgClassName: p, ...h }) => {
  const y = !t, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, S = v ? void 0 : d, C = o ? X2 : E.Fragment, x = o ? { containerClassName: s, emphasis: u, shape: f, size: d } : {};
  return w.jsx(C, { ...x, children: w.jsx("span", { ...h, className: at({ class: n, size: S }), "data-namespace": "@paloma/icons", "data-size": d, id: "like-id", style: { color: l, ...g }, children: w.jsx(Z2, { "aria-hidden": y, "aria-label": t, className: nt({ class: p, size: S }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "like-svg-id", style: { fill: Y2, ...g } }) }) });
}, Y2 = "currentColor", J2 = (t) => w.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...t, children: [w.jsx("path", { d: "M4 8V6H6V8H4Z" }), w.jsx("path", { d: "M4 13V11H6V13H4Z" }), w.jsx("path", { d: "M4 18V16H6V18H4Z" }), w.jsx("path", { d: "M8 8V6H20V8H8Z" }), w.jsx("path", { d: "M8 13V11H20V13H8Z" }), w.jsx("path", { d: "M8 18V16H20V18H8Z" })] }), ew = ({ children: t, containerClassName: n, emphasis: l, shape: o, size: s }) => {
  const u = typeof s == "number", f = u ? {
    height: s,
    padding: s / 2,
    width: s
  } : void 0, d = u ? void 0 : s;
  return w.jsx("div", { className: lt({
    class: n,
    emphasis: l,
    shape: o,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: f, children: t });
}, tw = ({ "aria-label": t, className: n, color: l, contained: o, containerClassName: s, emphasis: u = "regular", shape: f = "circle", size: d = "medium", svgClassName: p, ...h }) => {
  const y = !t, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, S = v ? void 0 : d, C = o ? ew : E.Fragment, x = o ? { containerClassName: s, emphasis: u, shape: f, size: d } : {};
  return w.jsx(C, { ...x, children: w.jsx("span", { ...h, className: at({ class: n, size: S }), "data-namespace": "@paloma/icons", "data-size": d, id: "list-id", style: { color: l, ...g }, children: w.jsx(J2, { "aria-hidden": y, "aria-label": t, className: nt({ class: p, size: S }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "list-svg-id", style: { fill: rw, ...g } }) }) });
}, rw = "currentColor", nw = (t) => w.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...t, children: [w.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10Z" }), w.jsx("path", { d: "M16.3287 17.743C16.8458 17.3198 17.3198 16.8459 17.7429 16.3287L21.7069 20.2928L20.2927 21.707L16.3287 17.743Z" })] }), lw = ({ children: t, containerClassName: n, emphasis: l, shape: o, size: s }) => {
  const u = typeof s == "number", f = u ? {
    height: s,
    padding: s / 2,
    width: s
  } : void 0, d = u ? void 0 : s;
  return w.jsx("div", { className: lt({
    class: n,
    emphasis: l,
    shape: o,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: f, children: t });
}, Mh = ({ "aria-label": t, className: n, color: l, contained: o, containerClassName: s, emphasis: u = "regular", shape: f = "circle", size: d = "medium", svgClassName: p, ...h }) => {
  const y = !t, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, S = v ? void 0 : d, C = o ? lw : E.Fragment, x = o ? { containerClassName: s, emphasis: u, shape: f, size: d } : {};
  return w.jsx(C, { ...x, children: w.jsx("span", { ...h, className: at({ class: n, size: S }), "data-namespace": "@paloma/icons", "data-size": d, id: "search-id", style: { color: l, ...g }, children: w.jsx(nw, { "aria-hidden": y, "aria-label": t, className: nt({ class: p, size: S }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "search-svg-id", style: { fill: iw, ...g } }) }) });
}, iw = "currentColor", ow = (t) => w.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...t, children: w.jsx("path", { d: "M14 6V8H18.5858L13 13.5858L9.00001 9.58579L1.29291 17.2929L2.70712 18.7071L9.00001 12.4142L13 16.4142L20 9.41423V14H22V6H14Z" }) }), aw = ({ children: t, containerClassName: n, emphasis: l, shape: o, size: s }) => {
  const u = typeof s == "number", f = u ? {
    height: s,
    padding: s / 2,
    width: s
  } : void 0, d = u ? void 0 : s;
  return w.jsx("div", { className: lt({
    class: n,
    emphasis: l,
    shape: o,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: f, children: t });
}, sw = ({ "aria-label": t, className: n, color: l, contained: o, containerClassName: s, emphasis: u = "regular", shape: f = "circle", size: d = "medium", svgClassName: p, ...h }) => {
  const y = !t, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, S = v ? void 0 : d, C = o ? aw : E.Fragment, x = o ? { containerClassName: s, emphasis: u, shape: f, size: d } : {};
  return w.jsx(C, { ...x, children: w.jsx("span", { ...h, className: at({ class: n, size: S }), "data-namespace": "@paloma/icons", "data-size": d, id: "trend-up-id", style: { color: l, ...g }, children: w.jsx(ow, { "aria-hidden": y, "aria-label": t, className: nt({ class: p, size: S }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "trend-up-svg-id", style: { fill: uw, ...g } }) }) });
}, uw = "currentColor", cw = (t) => w.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...t, children: w.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 3H18V5H21V9.50989C21 10.8362 20.1291 12.0051 18.8583 12.3845L17.2778 12.8564C16.4141 14.4489 14.8507 15.6066 13 15.917V18H14V20H16V22H8V20H10V18H11V15.917C9.1317 15.6036 7.55618 14.4267 6.69776 12.8108L5.17584 12.376C3.88793 12.008 3 10.8308 3 9.4914V5H6V3ZM8 5H16V10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10V5ZM17.9741 10.5612L18.2861 10.4681C18.7097 10.3416 19 9.95199 19 9.50989V7H18V10C18 10.1893 17.9912 10.3765 17.9741 10.5612ZM6 10C6 10.1814 6.00805 10.3609 6.02381 10.5382L5.72528 10.4529C5.29598 10.3303 5 9.93788 5 9.4914V7H6V10Z" }) }), dw = ({ children: t, containerClassName: n, emphasis: l, shape: o, size: s }) => {
  const u = typeof s == "number", f = u ? {
    height: s,
    padding: s / 2,
    width: s
  } : void 0, d = u ? void 0 : s;
  return w.jsx("div", { className: lt({
    class: n,
    emphasis: l,
    shape: o,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: f, children: t });
}, fw = ({ "aria-label": t, className: n, color: l, contained: o, containerClassName: s, emphasis: u = "regular", shape: f = "circle", size: d = "medium", svgClassName: p, ...h }) => {
  const y = !t, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, S = v ? void 0 : d, C = o ? dw : E.Fragment, x = o ? { containerClassName: s, emphasis: u, shape: f, size: d } : {};
  return w.jsx(C, { ...x, children: w.jsx("span", { ...h, className: at({ class: n, size: S }), "data-namespace": "@paloma/icons", "data-size": d, id: "trophy-id", style: { color: l, ...g }, children: w.jsx(cw, { "aria-hidden": y, "aria-label": t, className: nt({ class: p, size: S }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "trophy-svg-id", style: { fill: pw, ...g } }) }) });
}, pw = "currentColor", hw = (t) => w.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...t, children: [w.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z" }), w.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.49653 13C6.16571 13 4.99395 13.8768 4.61844 15.1535L2.89888 21H21.1012L19.3817 15.1535C19.0062 13.8768 17.8344 13 16.5036 13H7.49653ZM6.53717 15.7178C6.66234 15.2923 7.05292 15 7.49653 15H16.5036C16.9472 15 17.3378 15.2923 17.4629 15.7178L18.4283 19H5.57182L6.53717 15.7178Z" })] }), mw = ({ children: t, containerClassName: n, emphasis: l, shape: o, size: s }) => {
  const u = typeof s == "number", f = u ? {
    height: s,
    padding: s / 2,
    width: s
  } : void 0, d = u ? void 0 : s;
  return w.jsx("div", { className: lt({
    class: n,
    emphasis: l,
    shape: o,
    size: d
  }), "data-testid": "@paloma-icons-contained-id", style: f, children: t });
}, gw = ({ "aria-label": t, className: n, color: l, contained: o, containerClassName: s, emphasis: u = "regular", shape: f = "circle", size: d = "medium", svgClassName: p, ...h }) => {
  const y = !t, v = typeof d == "number", g = v ? { height: d, width: d } : void 0, S = v ? void 0 : d, C = o ? mw : E.Fragment, x = o ? { containerClassName: s, emphasis: u, shape: f, size: d } : {};
  return w.jsx(C, { ...x, children: w.jsx("span", { ...h, className: at({ class: n, size: S }), "data-namespace": "@paloma/icons", "data-size": d, id: "user-id", style: { color: l, ...g }, children: w.jsx(hw, { "aria-hidden": y, "aria-label": t, className: nt({ class: p, size: S }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "user-svg-id", style: { fill: vw, ...g } }) }) });
}, vw = "currentColor", yw = Symbol("default");
function Kg({ values: t, children: n }) {
  for (let [l, o] of t)
    n = /* @__PURE__ */ $.createElement(l.Provider, {
      value: o
    }, n);
  return n;
}
function ga(t) {
  let { className: n, style: l, children: o, defaultClassName: s, defaultChildren: u, defaultStyle: f, values: d, render: p } = t;
  return E.useMemo(() => {
    let h, y, v;
    return typeof n == "function" ? h = n({
      ...d,
      defaultClassName: s
    }) : h = n, typeof l == "function" ? y = l({
      ...d,
      defaultStyle: f || {}
    }) : y = l, typeof o == "function" ? v = o({
      ...d,
      defaultChildren: u
    }) : o == null ? v = u : v = o, {
      className: h ?? s,
      style: y || f ? {
        ...f,
        ...y
      } : void 0,
      children: v ?? u,
      "data-rac": "",
      render: p ? (g) => p(g, d) : void 0
    };
  }, [
    n,
    l,
    o,
    s,
    u,
    f,
    d,
    p
  ]);
}
function Dg(t, n) {
  let l = E.useContext(t);
  if (n === null)
    return null;
  if (l && typeof l == "object" && "slots" in l && l.slots) {
    let o = n || yw;
    if (!l.slots[o]) {
      let s = new Intl.ListFormat().format(Object.keys(l.slots).map((f) => `"${f}"`)), u = n ? `Invalid slot "${n}".` : "A slot prop is required.";
      throw new Error(`${u} Valid slot names are ${s}.`);
    }
    return l.slots[o];
  }
  return l;
}
function bw(t, n, l) {
  let o = Dg(l, t.slot) || {}, { ref: s, ...u } = o, f = ca(E.useMemo(() => Hr(n, s), [
    n,
    s
  ])), d = Te(u, t);
  return "style" in u && u.style && "style" in t && t.style && (typeof u.style == "function" || typeof t.style == "function" ? d.style = (p) => {
    let h = typeof u.style == "function" ? u.style(p) : u.style, y = {
      ...p.defaultStyle,
      ...h
    }, v = typeof t.style == "function" ? t.style({
      ...p,
      defaultStyle: y
    }) : t.style;
    return {
      ...y,
      ...v
    };
  } : d.style = {
    ...u.style,
    ...t.style
  }), [
    d,
    f
  ];
}
function xw(t, n, l) {
  let { render: o, ...s } = n, u = E.useRef(null), f = E.useMemo(() => Hr(l, u), [
    l,
    u
  ]);
  Qt(() => {
  }, [
    t,
    o
  ]);
  let d = {
    ...s,
    ref: f
  };
  return o ? o(d, void 0) : /* @__PURE__ */ $.createElement(t, d);
}
const Kh = {}, ri = new Proxy({}, {
  get(t, n) {
    if (typeof n != "string") return;
    let l = Kh[n];
    return l || (l = /* @__PURE__ */ E.forwardRef(xw.bind(null, n)), Kh[n] = l), l;
  }
}), Og = {
  CollectionRoot({ collection: t, renderDropIndicator: n }) {
    return Dh(t, null, n);
  },
  CollectionBranch({ collection: t, parent: n, renderDropIndicator: l }) {
    return Dh(t, n, l);
  }
};
function Dh(t, n, l) {
  return Sm({
    items: n ? t.getChildren(n.key) : t,
    dependencies: [
      l
    ],
    children(o) {
      if (o.type === "content") return /* @__PURE__ */ $.createElement($.Fragment, null);
      let s = o.render(o);
      return !l || o.type !== "item" ? s : /* @__PURE__ */ $.createElement($.Fragment, null, l({
        type: "item",
        key: o.key,
        dropPosition: "before"
      }), s, ww(t, o, l));
    }
  });
}
function ww(t, n, l) {
  let o = n.key, s = t.getKeyAfter(o), u = s != null ? t.getItem(s) : null;
  for (; u != null && u.type !== "item"; )
    s = t.getKeyAfter(u.key), u = s != null ? t.getItem(s) : null;
  let f = n.nextKey != null ? t.getItem(n.nextKey) : null;
  for (; f != null && f.type !== "item"; ) f = f.nextKey != null ? t.getItem(f.nextKey) : null;
  let d = [];
  if (f == null) {
    let p = n;
    for (; p?.type === "item" && (!u || p.parentKey !== u.parentKey && u.level < p.level); ) {
      let h = l({
        type: "item",
        key: p.key,
        dropPosition: "after"
      });
      /* @__PURE__ */ E.isValidElement(h) && d.push(/* @__PURE__ */ E.cloneElement(h, {
        key: `${p.key}-after`
      })), p = p.parentKey != null ? t.getItem(p.parentKey) : null;
    }
  }
  return d;
}
const Vg = /* @__PURE__ */ E.createContext(Og);
function Sw(t) {
  return E.useMemo(() => t != null ? /* @__PURE__ */ new Set([
    t
  ]) : null, [
    t
  ]);
}
const Cw = /* @__PURE__ */ E.createContext(null);
function Ew(t) {
  let n = E.useRef({});
  return /* @__PURE__ */ $.createElement(Cw.Provider, {
    value: n
  }, t.children);
}
const $w = /* @__PURE__ */ E.createContext({
  isSelected: !1
});
class Oh {
  constructor(n) {
    this.keyMap = /* @__PURE__ */ new Map(), this.firstKey = null, this.lastKey = null, this.iterable = n;
    let l = (f) => {
      if (this.keyMap.set(f.key, f), f.childNodes && f.type === "section") for (let d of f.childNodes) l(d);
    };
    for (let f of n) l(f);
    let o = null, s = 0, u = 0;
    for (let [f, d] of this.keyMap)
      o ? (o.nextKey = f, d.prevKey = o.key) : (this.firstKey = f, d.prevKey = void 0), d.type === "item" && (d.index = s++), (d.type === "section" || d.type === "item") && u++, o = d, o.nextKey = void 0;
    this._size = u, this.lastKey = o?.key ?? null;
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
  getKeyBefore(n) {
    let l = this.keyMap.get(n);
    return l ? l.prevKey ?? null : null;
  }
  getKeyAfter(n) {
    let l = this.keyMap.get(n);
    return l ? l.nextKey ?? null : null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    return this.lastKey;
  }
  getItem(n) {
    return this.keyMap.get(n) ?? null;
  }
  at(n) {
    const l = [
      ...this.getKeys()
    ];
    return this.getItem(l[n]);
  }
  getChildren(n) {
    return this.keyMap.get(n)?.childNodes || [];
  }
}
class Gt extends Set {
  constructor(n, l, o) {
    super(n), n instanceof Gt ? (this.anchorKey = l ?? n.anchorKey, this.currentKey = o ?? n.currentKey) : (this.anchorKey = l ?? null, this.currentKey = o ?? null);
  }
}
function kw(t, n) {
  if (t.size !== n.size) return !1;
  for (let l of t)
    if (!n.has(l)) return !1;
  return !0;
}
function _w(t) {
  let { selectionMode: n = "none", disallowEmptySelection: l = !1, allowDuplicateSelectionEvents: o, selectionBehavior: s = "toggle", disabledBehavior: u = "all" } = t, f = E.useRef(!1), [, d] = E.useState(!1), p = E.useRef(null), h = E.useRef(null), [, y] = E.useState(null), v = E.useMemo(() => Vh(t.selectedKeys), [
    t.selectedKeys
  ]), g = E.useMemo(() => Vh(t.defaultSelectedKeys, new Gt()), [
    t.defaultSelectedKeys
  ]), [S, C] = rg(v, g, t.onSelectionChange), x = E.useMemo(() => t.disabledKeys ? new Set(t.disabledKeys) : /* @__PURE__ */ new Set(), [
    t.disabledKeys
  ]), [F, W] = E.useState(s);
  s === "replace" && F === "toggle" && typeof S == "object" && S.size === 0 && W("replace");
  let L = E.useRef(s);
  return E.useEffect(() => {
    s !== L.current && (W(s), L.current = s);
  }, [
    s
  ]), {
    selectionMode: n,
    disallowEmptySelection: l,
    selectionBehavior: F,
    setSelectionBehavior: W,
    get isFocused() {
      return f.current;
    },
    setFocused(X) {
      f.current = X, d(X);
    },
    get focusedKey() {
      return p.current;
    },
    get childFocusStrategy() {
      return h.current;
    },
    setFocusedKey(X, J = "first") {
      p.current = X, h.current = J, y(X);
    },
    selectedKeys: S,
    setSelectedKeys(X) {
      (o || !kw(X, S)) && C(X);
    },
    disabledKeys: x,
    disabledBehavior: u
  };
}
function Vh(t, n) {
  return t ? t === "all" ? "all" : new Gt(t) : n;
}
class Nc {
  constructor(n, l, o) {
    this.collection = n, this.state = l, this.allowsCellSelection = o?.allowsCellSelection ?? !1, this._isSelectAll = null, this.layoutDelegate = o?.layoutDelegate || null, this.fullCollection = o?.fullCollection || null;
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
  setSelectionBehavior(n) {
    this.state.setSelectionBehavior(n);
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
  setFocused(n) {
    this.state.setFocused(n);
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
  setFocusedKey(n, l) {
    (n == null || this.collection.getItem(n)) && this.state.setFocusedKey(n, l);
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
  isSelected(n) {
    if (this.state.selectionMode === "none") return !1;
    let l = this.getKey(n);
    return l == null ? !1 : this.state.selectedKeys === "all" ? this.canSelectItem(l) : this.state.selectedKeys.has(l);
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
    let n = this.getSelectAllKeys(), l = this.state.selectedKeys;
    return this._isSelectAll = n.every((o) => l.has(o)), this._isSelectAll;
  }
  get firstSelectedKey() {
    let n = null;
    for (let l of this.state.selectedKeys) {
      let o = this.collection.getItem(l);
      (!n || o && Tu(this.collection, o, n) < 0) && (n = o);
    }
    return n?.key ?? null;
  }
  get lastSelectedKey() {
    let n = null;
    for (let l of this.state.selectedKeys) {
      let o = this.collection.getItem(l);
      (!n || o && Tu(this.collection, o, n) > 0) && (n = o);
    }
    return n?.key ?? null;
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
  extendSelection(n) {
    if (this.selectionMode === "none") return;
    if (this.selectionMode === "single") {
      this.replaceSelection(n);
      return;
    }
    let l = this.getKey(n);
    if (l == null) return;
    let o;
    if (this.state.selectedKeys === "all") o = new Gt([
      l
    ], l, l);
    else {
      let s = this.state.selectedKeys, u = s.anchorKey ?? l;
      o = new Gt(s, u, l);
      for (let f of this.getKeyRange(u, s.currentKey ?? l)) o.delete(f);
      for (let f of this.getKeyRange(l, u)) this.canSelectItem(f) && o.add(f);
    }
    this.state.setSelectedKeys(o);
  }
  getKeyRange(n, l) {
    let o = this.collection.getItem(n), s = this.collection.getItem(l);
    return o && s ? Tu(this.collection, o, s) <= 0 ? this.getKeyRangeInternal(n, l) : this.getKeyRangeInternal(l, n) : [];
  }
  getKeyRangeInternal(n, l) {
    if (this.layoutDelegate?.getKeyRange) return this.layoutDelegate.getKeyRange(n, l);
    let o = [], s = n;
    for (; s != null; ) {
      let u = this.collection.getItem(s);
      if (u && (u.type === "item" || u.type === "cell" && this.allowsCellSelection) && o.push(s), s === l) return o;
      s = this.collection.getKeyAfter(s);
    }
    return [];
  }
  getKey(n) {
    let l = this.collection.getItem(n);
    if (!l || l.type === "cell" && this.allowsCellSelection) return n;
    for (; l && l.type !== "item" && l.parentKey != null; ) l = this.collection.getItem(l.parentKey);
    return !l || l.type !== "item" ? null : l.key;
  }
  /**
  * Toggles whether the given key is selected.
  */
  toggleSelection(n) {
    if (this.selectionMode === "none") return;
    if (this.selectionMode === "single" && !this.isSelected(n)) {
      this.replaceSelection(n);
      return;
    }
    let l = this.getKey(n);
    if (l == null) return;
    let o = new Gt(this.state.selectedKeys === "all" ? this.getSelectAllKeys() : this.state.selectedKeys);
    o.has(l) ? o.delete(l) : this.canSelectItem(l) && (o.add(l), o.anchorKey = l, o.currentKey = l), !(this.disallowEmptySelection && o.size === 0) && this.state.setSelectedKeys(o);
  }
  /**
  * Replaces the selection with only the given key.
  */
  replaceSelection(n) {
    if (this.selectionMode === "none") return;
    let l = this.getKey(n);
    if (l == null) return;
    let o = this.canSelectItem(l) ? new Gt([
      l
    ], l, l) : new Gt();
    this.state.setSelectedKeys(o);
  }
  /**
  * Replaces the selection with the given keys.
  */
  setSelectedKeys(n) {
    if (this.selectionMode === "none") return;
    let l = new Gt();
    for (let o of n) {
      let s = this.getKey(o);
      if (s != null && (l.add(s), this.selectionMode === "single"))
        break;
    }
    this.state.setSelectedKeys(l);
  }
  getSelectAllKeys() {
    let n = this.fullCollection ?? this.collection, l = [], o = (s) => {
      for (; s != null; ) {
        if (this.canSelectItemIn(s, n)) {
          let u = n.getItem(s);
          u?.type === "item" && l.push(s), u?.hasChildNodes && (this.allowsCellSelection || u.type !== "item") && o(Ub(Hb(u, n))?.key ?? null);
        }
        s = n.getKeyAfter(s);
      }
    };
    return o(n.getFirstKey()), l;
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
    !this.disallowEmptySelection && (this.state.selectedKeys === "all" || this.state.selectedKeys.size > 0) && this.state.setSelectedKeys(new Gt());
  }
  /**
  * Toggles between select all and an empty selection.
  */
  toggleSelectAll() {
    this.isSelectAll ? this.clearSelection() : this.selectAll();
  }
  select(n, l) {
    this.selectionMode !== "none" && (this.selectionMode === "single" ? this.isSelected(n) && !this.disallowEmptySelection ? this.toggleSelection(n) : this.replaceSelection(n) : this.selectionBehavior === "toggle" || l && (l.pointerType === "touch" || l.pointerType === "virtual") ? this.toggleSelection(n) : this.replaceSelection(n));
  }
  /**
  * Returns whether the current selection is equal to the given selection.
  */
  isSelectionEqual(n) {
    if (n === this.state.selectedKeys) return !0;
    let l = this.selectedKeys;
    if (n.size !== l.size) return !1;
    for (let o of n)
      if (!l.has(o)) return !1;
    for (let o of l)
      if (!n.has(o)) return !1;
    return !0;
  }
  canSelectItem(n) {
    return this.canSelectItemIn(n, this.collection);
  }
  canSelectItemIn(n, l) {
    if (this.state.selectionMode === "none" || this.state.disabledKeys.has(n)) return !1;
    let o = l.getItem(n);
    return !(!o || o?.props?.isDisabled || o.type === "cell" && !this.allowsCellSelection);
  }
  isDisabled(n) {
    let l = this.collection.getItem(n);
    return this.state.disabledBehavior === "all" && (this.state.disabledKeys.has(n) || !!l?.props?.isDisabled) && l?.props?.disabledBehavior !== "selection";
  }
  isLink(n) {
    return !!this.collection.getItem(n)?.props?.href;
  }
  getItemProps(n) {
    return this.collection.getItem(n)?.props;
  }
  withCollection(n) {
    return new Nc(n, this.state, {
      allowsCellSelection: this.allowsCellSelection,
      layoutDelegate: this.layoutDelegate || void 0,
      fullCollection: this.fullCollection ?? this.collection
    });
  }
}
class Fw {
  build(n, l) {
    return this.context = l, Bh(() => this.iterateCollection(n));
  }
  *iterateCollection(n) {
    let { children: l, items: o } = n;
    if ($.isValidElement(l) && l.type === $.Fragment) yield* this.iterateCollection({
      children: l.props.children,
      items: o
    });
    else if (typeof l == "function") {
      if (!o) throw new Error("props.children was a function but props.items is missing");
      let s = 0;
      for (let u of o)
        yield* this.getFullNode({
          value: u,
          index: s
        }, {
          renderer: l
        }), s++;
    } else {
      let s = [];
      $.Children.forEach(l, (f) => {
        f && s.push(f);
      });
      let u = 0;
      for (let f of s) {
        let d = this.getFullNode({
          element: f,
          index: u
        }, {});
        for (let p of d)
          u++, yield p;
      }
    }
  }
  getKey(n, l, o, s) {
    if (n.key != null) return n.key;
    if (l.type === "cell" && l.key != null) return `${s}${l.key}`;
    let u = l.value;
    if (u != null) {
      let f = u.key ?? u.id;
      if (f == null) throw new Error("No key found for item");
      return f;
    }
    return s ? `${s}.${l.index}` : `$.${l.index}`;
  }
  getChildState(n, l) {
    return {
      renderer: l.renderer || n.renderer
    };
  }
  *getFullNode(n, l, o, s) {
    if ($.isValidElement(n.element) && n.element.type === $.Fragment) {
      let p = [];
      $.Children.forEach(n.element.props.children, (y) => {
        p.push(y);
      });
      let h = n.index ?? 0;
      for (const y of p) yield* this.getFullNode({
        element: y,
        index: h++
      }, l, o, s);
      return;
    }
    let u = n.element;
    if (!u && n.value && l && l.renderer) {
      let p = this.cache.get(n.value);
      if (p && (!p.shouldInvalidate || !p.shouldInvalidate(this.context))) {
        p.index = n.index, p.parentKey = s ? s.key : null, yield p;
        return;
      }
      u = l.renderer(n.value);
    }
    if ($.isValidElement(u)) {
      let p = u.type;
      if (typeof p != "function" && typeof p.getCollectionNode != "function") {
        let g = u.type;
        throw new Error(`Unknown element <${g}> in collection.`);
      }
      let h = p.getCollectionNode(u.props, this.context), y = n.index ?? 0, v = h.next();
      for (; !v.done && v.value; ) {
        let g = v.value;
        n.index = y;
        let S = g.key ?? null;
        S == null && (S = g.element ? null : this.getKey(u, n, l, o));
        let x = [
          ...this.getFullNode({
            ...g,
            key: S,
            index: y,
            wrapper: Pw(n.wrapper, g.wrapper)
          }, this.getChildState(l, g), o ? `${o}${u.key}` : u.key, s)
        ];
        for (let F of x) {
          if (F.value = g.value ?? n.value ?? null, F.value && this.cache.set(F.value, F), n.type && F.type !== n.type) throw new Error(`Unsupported type <${Iu(F.type)}> in <${Iu(s?.type ?? "unknown parent type")}>. Only <${Iu(n.type)}> is supported.`);
          y++, yield F;
        }
        v = h.next(x);
      }
      return;
    }
    if (n.key == null || n.type == null) return;
    let f = this, d = {
      type: n.type,
      props: n.props,
      key: n.key,
      parentKey: s ? s.key : null,
      value: n.value ?? null,
      level: (s?.level ?? 0) + (s?.type === "item" ? 1 : 0),
      index: n.index,
      rendered: n.rendered,
      textValue: n.textValue ?? "",
      "aria-label": n["aria-label"],
      wrapper: n.wrapper,
      shouldInvalidate: n.shouldInvalidate,
      hasChildNodes: n.hasChildNodes || !1,
      childNodes: Bh(function* () {
        if (!n.hasChildNodes || !n.childNodes) return;
        let p = 0;
        for (let h of n.childNodes()) {
          h.key != null && (h.key = `${d.key}${h.key}`);
          let y = f.getFullNode({
            ...h,
            index: p
          }, f.getChildState(l, h), d.key, d);
          for (let v of y)
            p++, yield v;
        }
      })
    };
    yield d;
  }
  constructor() {
    this.cache = /* @__PURE__ */ new WeakMap();
  }
}
function Bh(t) {
  let n = [], l = null;
  return {
    *[Symbol.iterator]() {
      for (let o of n) yield o;
      l || (l = t());
      for (let o of l)
        n.push(o), yield o;
    }
  };
}
function Pw(t, n) {
  if (t && n) return (l) => t(n(l));
  if (t) return t;
  if (n) return n;
}
function Iu(t) {
  return t[0].toUpperCase() + t.slice(1);
}
function Nw(t, n, l) {
  let o = E.useMemo(() => new Fw(), []), { children: s, items: u, collection: f } = t;
  return E.useMemo(() => {
    if (f) return f;
    let p = o.build({
      children: s,
      items: u
    }, l);
    return n(p);
  }, [
    o,
    s,
    u,
    f,
    l,
    n
  ]);
}
function Tw(t) {
  let { filter: n, layoutDelegate: l } = t, o = _w(t), s = E.useMemo(() => t.disabledKeys ? new Set(t.disabledKeys) : /* @__PURE__ */ new Set(), [
    t.disabledKeys
  ]), u = E.useCallback((h) => n ? new Oh(n(h)) : new Oh(h), [
    n
  ]), f = E.useMemo(() => ({
    suppressTextValueWarning: t.suppressTextValueWarning
  }), [
    t.suppressTextValueWarning
  ]), d = Nw(t, u, f), p = E.useMemo(() => new Nc(d, o, {
    layoutDelegate: l
  }), [
    d,
    o,
    l
  ]);
  return Aw(d, p), {
    collection: d,
    disabledKeys: s,
    selectionManager: p
  };
}
function Aw(t, n) {
  const l = E.useRef(null);
  E.useEffect(() => {
    if (n.focusedKey != null && !t.getItem(n.focusedKey) && l.current) {
      let o = l.current.getKeyAfter(n.focusedKey), s = null;
      for (; o != null; ) {
        let u = t.getItem(o);
        if (u && u.type === "item" && !n.isDisabled(o)) {
          s = o;
          break;
        }
        o = l.current.getKeyAfter(o);
      }
      if (s == null)
        for (o = l.current.getKeyBefore(n.focusedKey); o != null; ) {
          let u = t.getItem(o);
          if (u && u.type === "item" && !n.isDisabled(o)) {
            s = o;
            break;
          }
          o = l.current.getKeyBefore(o);
        }
      n.setFocusedKey(s);
    }
    l.current = t;
  }, [
    t,
    n
  ]);
}
function zw(t) {
  let [n, l] = rg(t.selectedKey, t.defaultSelectedKey ?? null, t.onSelectionChange), o = E.useMemo(() => n != null ? [
    n
  ] : [], [
    n
  ]), { collection: s, disabledKeys: u, selectionManager: f } = Tw({
    ...t,
    selectionMode: "single",
    disallowEmptySelection: !0,
    allowDuplicateSelectionEvents: !0,
    selectedKeys: o,
    onSelectionChange: (p) => {
      if (p === "all") return;
      let h = p.values().next().value ?? null;
      h === n && t.onSelectionChange && t.onSelectionChange(h), l(h);
    }
  }), d = n != null ? s.getItem(n) : null;
  return {
    collection: s,
    disabledKeys: u,
    selectionManager: f,
    selectedKey: n,
    setSelectedKey: l,
    selectedItem: d
  };
}
function Rw(t) {
  let n = zw({
    ...t,
    onSelectionChange: t.onSelectionChange ? (f) => {
      f != null && t.onSelectionChange?.(f);
    } : void 0,
    suppressTextValueWarning: !0,
    defaultSelectedKey: t.defaultSelectedKey ?? Hh(t.collection, t.disabledKeys ? new Set(t.disabledKeys) : /* @__PURE__ */ new Set()) ?? void 0
  }), { selectionManager: l, collection: o, selectedKey: s } = n, u = E.useRef(s);
  return E.useEffect(() => {
    let f = s;
    t.selectedKey == null && (l.isEmpty || f == null || !o.getItem(f)) && (f = Hh(o, n.disabledKeys), f != null && l.setSelectedKeys([
      f
    ])), (f != null && l.focusedKey == null || !l.isFocused && f !== u.current) && l.setFocusedKey(f), u.current = f;
  }), {
    ...n,
    isDisabled: t.isDisabled || !1
  };
}
function Hh(t, n) {
  let l = null;
  if (t) {
    for (l = t.getFirstKey(); l != null && (n.has(l) || t.getItem(l)?.props?.isDisabled) && l !== t.getLastKey(); ) l = t.getKeyAfter(l);
    l != null && (n.has(l) || t.getItem(l)?.props?.isDisabled) && l === t.getLastKey() && (l = t.getFirstKey());
  }
  return l;
}
const va = /* @__PURE__ */ E.createContext(null), cn = /* @__PURE__ */ E.createContext(null), Lw = /* @__PURE__ */ E.forwardRef(function(n, l) {
  [n, l] = bw(n, l, va);
  let { children: o, orientation: s = "horizontal" } = n;
  return o = E.useMemo(() => typeof o == "function" ? o({
    orientation: s,
    defaultChildren: null
  }) : o, [
    o,
    s
  ]), /* @__PURE__ */ $.createElement(Q0, {
    content: o
  }, (u) => /* @__PURE__ */ $.createElement(Iw, {
    props: n,
    collection: u,
    tabsRef: l
  }));
});
function Iw({ props: t, tabsRef: n, collection: l }) {
  let { orientation: o = "horizontal" } = t, s = Rw({
    ...t,
    collection: l,
    children: void 0
  }), { focusProps: u, isFocused: f, isFocusVisible: d } = ha({
    within: !0
  }), p = E.useMemo(() => ({
    orientation: o,
    isFocusWithin: f,
    isFocusVisible: d
  }), [
    o,
    f,
    d
  ]), h = ga({
    ...t,
    defaultClassName: "react-aria-Tabs",
    values: p
  }), y = dn(t, {
    global: !0
  });
  return /* @__PURE__ */ $.createElement(ri.div, {
    ...Te(y, h, u),
    ref: n,
    slot: t.slot || void 0,
    "data-focused": f || void 0,
    "data-orientation": o,
    "data-focus-visible": d || void 0,
    "data-disabled": s.isDisabled || void 0
  }, /* @__PURE__ */ $.createElement(Kg, {
    values: [
      [
        va,
        t
      ],
      [
        cn,
        s
      ]
    ]
  }, h.children));
}
const jw = /* @__PURE__ */ E.forwardRef(function(n, l) {
  return E.useContext(cn) ? /* @__PURE__ */ $.createElement(Mw, {
    props: n,
    forwardedRef: l
  }) : /* @__PURE__ */ $.createElement(lb, n);
});
function Mw({ props: t, forwardedRef: n }) {
  let l = E.useContext(cn), { CollectionRoot: o } = E.useContext(Vg), { orientation: s = "horizontal", keyboardActivation: u = "automatic" } = Dg(va), f = ca(n), { tabListProps: d } = ex({
    ...t,
    orientation: s,
    keyboardActivation: u
  }, l, f), p = ga({
    ...t,
    children: null,
    defaultClassName: "react-aria-TabList",
    values: {
      orientation: s,
      state: l
    }
  }), h = dn(t, {
    global: !0
  });
  return delete h.id, /* @__PURE__ */ $.createElement(ri.div, {
    ...Te(h, p, d),
    ref: f,
    "data-orientation": s || void 0
  }, /* @__PURE__ */ $.createElement(Ew, null, /* @__PURE__ */ $.createElement(o, {
    collection: l.collection,
    persistedKeys: Sw(l.selectionManager.focusedKey)
  })));
}
class Kw extends ci {
  static {
    this.type = "item";
  }
}
const Dw = /* @__PURE__ */ rb(Kw, (t, n, l) => {
  let o = E.useContext(cn), s = ca(n), { tabProps: u, isSelected: f, isDisabled: d, isPressed: p } = Yb({
    key: l.key,
    ...t
  }, o, s), { focusProps: h, isFocused: y, isFocusVisible: v } = ha(), { hoverProps: g, isHovered: S } = Qb({
    isDisabled: d,
    onHoverStart: t.onHoverStart,
    onHoverEnd: t.onHoverEnd,
    onHoverChange: t.onHoverChange
  }), C = ga({
    ...t,
    id: void 0,
    children: l.rendered,
    defaultClassName: "react-aria-Tab",
    values: {
      isSelected: f,
      isDisabled: d,
      isFocused: y,
      isFocusVisible: v,
      isPressed: p,
      isHovered: S
    }
  }), x = l.props.href ? ri.a : ri.div, F = dn(t, {
    global: !0
  });
  return delete F.id, delete F.onClick, /* @__PURE__ */ $.createElement(x, {
    ...Te(F, C, u, h, g),
    ref: s,
    "data-selected": f || void 0,
    "data-disabled": d || void 0,
    "data-focused": y || void 0,
    "data-focus-visible": v || void 0,
    "data-pressed": p || void 0,
    "data-hovered": S || void 0
  }, /* @__PURE__ */ $.createElement($w.Provider, {
    value: {
      isSelected: f
    }
  }, C.children));
}), Ow = /* @__PURE__ */ U0(function(n, l) {
  const o = E.useContext(cn);
  let s = ca(l), u = o.selectedKey === n.id, [f, d] = E.useState(o.selectedKey != null ? u : null);
  f == null && o.selectedKey != null ? d(u) : !u && f && d(!1);
  let p = l2(s, u);
  return !u && !n.shouldForceMount && !p ? null : /* @__PURE__ */ $.createElement(Vw, {
    ...n,
    tabPanelRef: s,
    isInitiallySelected: f || !1,
    isExiting: p
  });
});
function Vw(t) {
  let n = E.useContext(cn), { id: l, tabPanelRef: o, isInitiallySelected: s, isExiting: u, ...f } = t, { tabPanelProps: d } = tx(t, n, o), { focusProps: p, isFocused: h, isFocusVisible: y } = ha(), v = n.selectedKey === t.id, g = n2(o) && !s, S = ga({
    ...t,
    defaultClassName: "react-aria-TabPanel",
    values: {
      isFocused: h,
      isFocusVisible: y,
      // @ts-ignore - compatibility with React < 19
      isInert: jh(!v),
      isEntering: g,
      isExiting: u,
      state: n
    }
  }), C = dn(f, {
    global: !0
  });
  delete C.id;
  let x = v ? Te(C, d, p, S) : Te(C, S);
  return /* @__PURE__ */ $.createElement(ri.div, {
    ...x,
    ref: o,
    "data-focused": h || void 0,
    "data-focus-visible": y || void 0,
    // @ts-ignore
    inert: jh(!v || t.inert),
    "data-inert": v ? void 0 : "true",
    "data-entering": g || void 0,
    "data-exiting": u || void 0
  }, /* @__PURE__ */ $.createElement(Kg, {
    values: [
      [
        va,
        null
      ],
      [
        cn,
        null
      ]
    ]
  }, /* @__PURE__ */ $.createElement(Vg.Provider, {
    value: Og
  }, S.children)));
}
var Tc = mi(), _e = (t) => hi(t, Tc), Ac = mi();
_e.write = (t) => hi(t, Ac);
var ya = mi();
_e.onStart = (t) => hi(t, ya);
var zc = mi();
_e.onFrame = (t) => hi(t, zc);
var Rc = mi();
_e.onFinish = (t) => hi(t, Rc);
var Wn = [];
_e.setTimeout = (t, n) => {
  const l = _e.now() + n, o = () => {
    const u = Wn.findIndex((f) => f.cancel == o);
    ~u && Wn.splice(u, 1), Vr -= ~u ? 1 : 0;
  }, s = { time: l, handler: t, cancel: o };
  return Wn.splice(Bg(l), 0, s), Vr += 1, Hg(), s;
};
var Bg = (t) => ~(~Wn.findIndex((n) => n.time > t) || ~Wn.length);
_e.cancel = (t) => {
  ya.delete(t), zc.delete(t), Rc.delete(t), Tc.delete(t), Ac.delete(t);
};
_e.sync = (t) => {
  dc = !0, _e.batchedUpdates(t), dc = !1;
};
_e.throttle = (t) => {
  let n;
  function l() {
    try {
      t(...n);
    } finally {
      n = null;
    }
  }
  function o(...s) {
    n = s, _e.onStart(l);
  }
  return o.handler = t, o.cancel = () => {
    ya.delete(l), n = null;
  }, o;
};
var Lc = typeof window < "u" ? window.requestAnimationFrame : (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  (() => {
  })
);
_e.use = (t) => Lc = t;
_e.now = typeof performance < "u" ? () => performance.now() : Date.now;
_e.batchedUpdates = (t) => t();
_e.catch = console.error;
_e.frameLoop = "always";
_e.advance = () => {
  _e.frameLoop !== "demand" ? console.warn(
    "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
  ) : Wg();
};
var Or = -1, Vr = 0, dc = !1;
function hi(t, n) {
  dc ? (n.delete(t), t(0)) : (n.add(t), Hg());
}
function Hg() {
  Or < 0 && (Or = 0, _e.frameLoop !== "demand" && Lc(Ug));
}
function Bw() {
  Or = -1;
}
function Ug() {
  ~Or && (Lc(Ug), _e.batchedUpdates(Wg));
}
function Wg() {
  const t = Or;
  Or = _e.now();
  const n = Bg(Or);
  if (n && (Gg(Wn.splice(0, n), (l) => l.handler()), Vr -= n), !Vr) {
    Bw();
    return;
  }
  ya.flush(), Tc.flush(t ? Math.min(64, Or - t) : 16.667), zc.flush(), Ac.flush(), Rc.flush();
}
function mi() {
  let t = /* @__PURE__ */ new Set(), n = t;
  return {
    add(l) {
      Vr += n == t && !t.has(l) ? 1 : 0, t.add(l);
    },
    delete(l) {
      return Vr -= n == t && t.has(l) ? 1 : 0, t.delete(l);
    },
    flush(l) {
      n.size && (t = /* @__PURE__ */ new Set(), Vr -= n.size, Gg(n, (o) => o(l) && t.add(o)), Vr += t.size, n = t);
    }
  };
}
function Gg(t, n) {
  t.forEach((l) => {
    try {
      n(l);
    } catch (o) {
      _e.catch(o);
    }
  });
}
var Hw = Object.defineProperty, Uw = (t, n) => {
  for (var l in n)
    Hw(t, l, { get: n[l], enumerable: !0 });
}, Gn = {};
Uw(Gn, {
  assign: () => Qw,
  colors: () => Br,
  createStringInterpolator: () => jc,
  skipAnimation: () => Qg,
  to: () => qg,
  willAdvance: () => Mc
});
function Ww() {
}
var Gw = (t, n, l) => Object.defineProperty(t, n, { value: l, writable: !0, configurable: !0 }), ze = {
  arr: Array.isArray,
  obj: (t) => !!t && t.constructor.name === "Object",
  fun: (t) => typeof t == "function",
  str: (t) => typeof t == "string",
  num: (t) => typeof t == "number",
  und: (t) => t === void 0
};
function qw(t, n) {
  if (ze.arr(t)) {
    if (!ze.arr(n) || t.length !== n.length)
      return !1;
    for (let l = 0; l < t.length; l++)
      if (t[l] !== n[l])
        return !1;
    return !0;
  }
  return t === n;
}
var kt = (t, n) => t.forEach(n);
function Zo(t, n, l) {
  if (ze.arr(t)) {
    for (let o = 0; o < t.length; o++)
      n.call(l, t[o], `${o}`);
    return;
  }
  for (const o in t)
    t.hasOwnProperty(o) && n.call(l, t[o], o);
}
var Gl = (t) => ze.und(t) ? [] : ze.arr(t) ? t : [t], Ic = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), jc, qg, Br = null, Qg = !1, Mc = Ww, Qw = (t) => {
  t.to && (qg = t.to), t.now && (_e.now = t.now), t.colors !== void 0 && (Br = t.colors), t.skipAnimation != null && (Qg = t.skipAnimation), t.createStringInterpolator && (jc = t.createStringInterpolator), t.requestAnimationFrame && _e.use(t.requestAnimationFrame), t.batchedUpdates && (_e.batchedUpdates = t.batchedUpdates), t.willAdvance && (Mc = t.willAdvance), t.frameLoop && (_e.frameLoop = t.frameLoop);
}, Ql = /* @__PURE__ */ new Set(), Kt = [], ju = [], Xo = 0, Kc = {
  get idle() {
    return !Ql.size && !Kt.length;
  },
  /** Advance the given animation on every frame until idle. */
  start(t) {
    Xo > t.priority ? (Ql.add(t), _e.onStart(Zw)) : (Zg(t), _e(fc));
  },
  /** Advance all animations by the given time. */
  advance: fc,
  /** Call this when an animation's priority changes. */
  sort(t) {
    if (Xo)
      _e.onFrame(() => Kc.sort(t));
    else {
      const n = Kt.indexOf(t);
      ~n && (Kt.splice(n, 1), Xg(t));
    }
  },
  /**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */
  clear() {
    Kt = [], Ql.clear();
  }
};
function Zw() {
  Ql.forEach(Zg), Ql.clear(), _e(fc);
}
function Zg(t) {
  Kt.includes(t) || Xg(t);
}
function Xg(t) {
  Kt.splice(
    Xw(Kt, (n) => n.priority > t.priority),
    0,
    t
  );
}
function fc(t) {
  const n = ju;
  for (let l = 0; l < Kt.length; l++) {
    const o = Kt[l];
    Xo = o.priority, o.idle || (Mc(o), o.advance(t), o.idle || n.push(o));
  }
  return Xo = 0, ju = Kt, ju.length = 0, Kt = n, Kt.length > 0;
}
function Xw(t, n) {
  const l = t.findIndex(n);
  return l < 0 ? t.length : l;
}
var Yw = {
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
}, qt = "[-+]?\\d*\\.?\\d+", Yo = qt + "%";
function ba(...t) {
  return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var Jw = new RegExp("rgb" + ba(qt, qt, qt)), e3 = new RegExp("rgba" + ba(qt, qt, qt, qt)), t3 = new RegExp("hsl" + ba(qt, Yo, Yo)), r3 = new RegExp(
  "hsla" + ba(qt, Yo, Yo, qt)
), n3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, l3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, i3 = /^#([0-9a-fA-F]{6})$/, o3 = /^#([0-9a-fA-F]{8})$/;
function a3(t) {
  let n;
  return typeof t == "number" ? t >>> 0 === t && t >= 0 && t <= 4294967295 ? t : null : (n = i3.exec(t)) ? parseInt(n[1] + "ff", 16) >>> 0 : Br && Br[t] !== void 0 ? Br[t] : (n = Jw.exec(t)) ? (jn(n[1]) << 24 | // r
  jn(n[2]) << 16 | // g
  jn(n[3]) << 8 | // b
  255) >>> // a
  0 : (n = e3.exec(t)) ? (jn(n[1]) << 24 | // r
  jn(n[2]) << 16 | // g
  jn(n[3]) << 8 | // b
  Gh(n[4])) >>> // a
  0 : (n = n3.exec(t)) ? parseInt(
    n[1] + n[1] + // r
    n[2] + n[2] + // g
    n[3] + n[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (n = o3.exec(t)) ? parseInt(n[1], 16) >>> 0 : (n = l3.exec(t)) ? parseInt(
    n[1] + n[1] + // r
    n[2] + n[2] + // g
    n[3] + n[3] + // b
    n[4] + n[4],
    // a
    16
  ) >>> 0 : (n = t3.exec(t)) ? (Uh(
    Wh(n[1]),
    // h
    zo(n[2]),
    // s
    zo(n[3])
    // l
  ) | 255) >>> // a
  0 : (n = r3.exec(t)) ? (Uh(
    Wh(n[1]),
    // h
    zo(n[2]),
    // s
    zo(n[3])
    // l
  ) | Gh(n[4])) >>> // a
  0 : null;
}
function Mu(t, n, l) {
  return l < 0 && (l += 1), l > 1 && (l -= 1), l < 1 / 6 ? t + (n - t) * 6 * l : l < 1 / 2 ? n : l < 2 / 3 ? t + (n - t) * (2 / 3 - l) * 6 : t;
}
function Uh(t, n, l) {
  const o = l < 0.5 ? l * (1 + n) : l + n - l * n, s = 2 * l - o, u = Mu(s, o, t + 1 / 3), f = Mu(s, o, t), d = Mu(s, o, t - 1 / 3);
  return Math.round(u * 255) << 24 | Math.round(f * 255) << 16 | Math.round(d * 255) << 8;
}
function jn(t) {
  const n = parseInt(t, 10);
  return n < 0 ? 0 : n > 255 ? 255 : n;
}
function Wh(t) {
  return (parseFloat(t) % 360 + 360) % 360 / 360;
}
function Gh(t) {
  const n = parseFloat(t);
  return n < 0 ? 0 : n > 1 ? 255 : Math.round(n * 255);
}
function zo(t) {
  const n = parseFloat(t);
  return n < 0 ? 0 : n > 100 ? 1 : n / 100;
}
function qh(t) {
  let n = a3(t);
  if (n === null)
    return t;
  n = n || 0;
  const l = (n & 4278190080) >>> 24, o = (n & 16711680) >>> 16, s = (n & 65280) >>> 8, u = (n & 255) / 255;
  return `rgba(${l}, ${o}, ${s}, ${u})`;
}
var ni = (t, n, l) => {
  if (ze.fun(t))
    return t;
  if (ze.arr(t))
    return ni({
      range: t,
      output: n,
      extrapolate: l
    });
  if (ze.str(t.output[0]))
    return jc(t);
  const o = t, s = o.output, u = o.range || [0, 1], f = o.extrapolateLeft || o.extrapolate || "extend", d = o.extrapolateRight || o.extrapolate || "extend", p = o.easing || ((h) => h);
  return (h) => {
    const y = u3(h, u);
    return s3(
      h,
      u[y],
      u[y + 1],
      s[y],
      s[y + 1],
      p,
      f,
      d,
      o.map
    );
  };
};
function s3(t, n, l, o, s, u, f, d, p) {
  let h = p ? p(t) : t;
  if (h < n) {
    if (f === "identity")
      return h;
    f === "clamp" && (h = n);
  }
  if (h > l) {
    if (d === "identity")
      return h;
    d === "clamp" && (h = l);
  }
  return o === s ? o : n === l ? t <= n ? o : s : (n === -1 / 0 ? h = -h : l === 1 / 0 ? h = h - n : h = (h - n) / (l - n), h = u(h), o === -1 / 0 ? h = -h : s === 1 / 0 ? h = h + o : h = h * (s - o) + o, h);
}
function u3(t, n) {
  for (var l = 1; l < n.length - 1 && !(n[l] >= t); ++l)
    ;
  return l - 1;
}
var li = Symbol.for("FluidValue.get"), ii = Symbol.for("FluidValue.observers"), qn = (t) => !!(t && t[li]), Qn = (t) => t && t[li] ? t[li]() : t;
function c3(t, n) {
  t.eventObserved ? t.eventObserved(n) : t(n);
}
function Jo(t, n) {
  const l = t[ii];
  l && l.forEach((o) => {
    c3(o, n);
  });
}
var Yg = class {
  constructor(t) {
    if (!t && !(t = this.get))
      throw Error("Unknown getter");
    d3(this, t);
  }
}, d3 = (t, n) => Jg(t, li, n);
function Dc(t, n) {
  if (t[li]) {
    let l = t[ii];
    l || Jg(t, ii, l = /* @__PURE__ */ new Set()), l.has(n) || (l.add(n), t.observerAdded && t.observerAdded(l.size, n));
  }
  return n;
}
function ea(t, n) {
  const l = t[ii];
  if (l && l.has(n)) {
    const o = l.size - 1;
    o ? l.delete(n) : t[ii] = null, t.observerRemoved && t.observerRemoved(o, n);
  }
}
var Jg = (t, n, l) => Object.defineProperty(t, n, {
  value: l,
  writable: !0,
  configurable: !0
}), Vo = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, f3 = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, Qh = new RegExp(`(${Vo.source})(%|[a-z]+)`, "i"), p3 = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, xa = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, ev = (t) => {
  const [n, l] = h3(t);
  if (!n || Ic())
    return t;
  const o = window.getComputedStyle(document.documentElement).getPropertyValue(n);
  if (o)
    return o.trim();
  if (l && l.startsWith("--")) {
    const s = window.getComputedStyle(document.documentElement).getPropertyValue(l);
    return s || t;
  } else {
    if (l && xa.test(l))
      return ev(l);
    if (l)
      return l;
  }
  return t;
}, h3 = (t) => {
  const n = xa.exec(t);
  if (!n)
    return [,];
  const [, l, o] = n;
  return [l, o];
}, Ku, m3 = (t, n, l, o, s) => `rgba(${Math.round(n)}, ${Math.round(l)}, ${Math.round(o)}, ${s})`, tv = (t) => {
  Ku || (Ku = Br ? (
    // match color names, ignore partial matches
    new RegExp(`(${Object.keys(Br).join("|")})(?!\\w)`, "g")
  ) : (
    // never match
    /^\b$/
  ));
  const n = t.output.map((u) => Qn(u).replace(xa, ev).replace(f3, qh).replace(Ku, qh)), l = n.map((u) => u.match(Vo).map(Number)), s = l[0].map(
    (u, f) => l.map((d) => {
      if (!(f in d))
        throw Error('The arity of each "output" value must be equal');
      return d[f];
    })
  ).map(
    (u) => ni({ ...t, output: u })
  );
  return (u) => {
    const f = !Qh.test(n[0]) && n.find((p) => Qh.test(p))?.replace(Vo, "");
    let d = 0;
    return n[0].replace(
      Vo,
      () => `${s[d++](u)}${f || ""}`
    ).replace(p3, m3);
  };
}, rv = "react-spring: ", nv = (t) => {
  const n = t;
  let l = !1;
  if (typeof n != "function")
    throw new TypeError(`${rv}once requires a function parameter`);
  return (...o) => {
    l || (n(...o), l = !0);
  };
}, g3 = nv(console.warn);
function v3() {
  g3(
    `${rv}The "interpolate" function is deprecated in v9 (use "to" instead)`
  );
}
nv(console.warn);
function lv(t) {
  return ze.str(t) && (t[0] == "#" || /\d/.test(t) || // Do not identify a CSS variable as an AnimatedString if its SSR
  !Ic() && xa.test(t) || t in (Br || {}));
}
var iv = Ic() ? E.useEffect : E.useLayoutEffect, y3 = () => {
  const t = E.useRef(!1);
  return iv(() => (t.current = !0, () => {
    t.current = !1;
  }), []), t;
};
function b3() {
  const t = E.useState()[1], n = y3();
  return () => {
    n.current && t(Math.random());
  };
}
function x3(t, n) {
  const [l] = E.useState(
    () => ({
      inputs: n,
      result: t()
    })
  ), o = E.useRef(), s = o.current;
  let u = s;
  return u ? n && u.inputs && w3(n, u.inputs) || (u = {
    inputs: n,
    result: t()
  }) : u = l, E.useEffect(() => {
    o.current = u, s == l && (l.inputs = l.result = void 0);
  }, [u]), u.result;
}
function w3(t, n) {
  if (t.length !== n.length)
    return !1;
  for (let l = 0; l < t.length; l++)
    if (t[l] !== n[l])
      return !1;
  return !0;
}
var S3 = (t) => E.useEffect(t, C3), C3 = [], oi = Symbol.for("Animated:node"), E3 = (t) => !!t && t[oi] === t, Oc = (t) => t && t[oi], ov = (t, n) => Gw(t, oi, n), Vc = (t) => t && t[oi] && t[oi].getPayload(), av = class {
  constructor() {
    ov(this, this);
  }
  /** Get every `AnimatedValue` used by this node. */
  getPayload() {
    return this.payload || [];
  }
}, wa = class extends av {
  constructor(t) {
    super(), this._value = t, this.done = !0, this.durationProgress = 0, ze.num(this._value) && (this.lastPosition = this._value);
  }
  /** @internal */
  static create(t) {
    return new wa(t);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(t, n) {
    return ze.num(t) && (this.lastPosition = t, n && (t = Math.round(t / n) * n, this.done && (this.lastPosition = t))), this._value === t ? !1 : (this._value = t, !0);
  }
  reset() {
    const { done: t } = this;
    this.done = !1, ze.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, t && (this.lastVelocity = null), this.v0 = null);
  }
}, Bc = class extends wa {
  constructor(t) {
    super(0), this._string = null, this._toString = ni({
      output: [t, t]
    });
  }
  /** @internal */
  static create(t) {
    return new Bc(t);
  }
  getValue() {
    const t = this._string;
    return t ?? (this._string = this._toString(this._value));
  }
  setValue(t) {
    if (ze.str(t)) {
      if (t == this._string)
        return !1;
      this._string = t, this._value = 1;
    } else if (super.setValue(t))
      this._string = null;
    else
      return !1;
    return !0;
  }
  reset(t) {
    t && (this._toString = ni({
      output: [this.getValue(), t]
    })), this._value = 0, super.reset();
  }
}, ta = { dependencies: null }, Sa = class extends av {
  constructor(t) {
    super(), this.source = t, this.setValue(t);
  }
  getValue(t) {
    const n = {};
    return Zo(this.source, (l, o) => {
      E3(l) ? n[o] = l.getValue(t) : qn(l) ? n[o] = Qn(l) : t || (n[o] = l);
    }), n;
  }
  /** Replace the raw object data */
  setValue(t) {
    this.source = t, this.payload = this._makePayload(t);
  }
  reset() {
    this.payload && kt(this.payload, (t) => t.reset());
  }
  /** Create a payload set. */
  _makePayload(t) {
    if (t) {
      const n = /* @__PURE__ */ new Set();
      return Zo(t, this._addToPayload, n), Array.from(n);
    }
  }
  /** Add to a payload set. */
  _addToPayload(t) {
    ta.dependencies && qn(t) && ta.dependencies.add(t);
    const n = Vc(t);
    n && kt(n, (l) => this.add(l));
  }
}, sv = class extends Sa {
  constructor(t) {
    super(t);
  }
  /** @internal */
  static create(t) {
    return new sv(t);
  }
  getValue() {
    return this.source.map((t) => t.getValue());
  }
  setValue(t) {
    const n = this.getPayload();
    return t.length == n.length ? n.map((l, o) => l.setValue(t[o])).some(Boolean) : (super.setValue(t.map($3)), !0);
  }
};
function $3(t) {
  return (lv(t) ? Bc : wa).create(t);
}
function k3(t) {
  const n = Oc(t);
  return n ? n.constructor : ze.arr(t) ? sv : lv(t) ? Bc : wa;
}
var Zh = (t, n) => {
  const l = (
    // Function components must use "forwardRef" to avoid being
    // re-rendered on every animation frame.
    !ze.fun(t) || t.prototype && t.prototype.isReactComponent
  );
  return E.forwardRef((o, s) => {
    const u = E.useRef(null), f = l && // eslint-disable-next-line react-hooks/rules-of-hooks
    E.useCallback(
      (C) => {
        u.current = P3(s, C);
      },
      [s]
    ), [d, p] = F3(o, n), h = b3(), y = () => {
      const C = u.current;
      if (l && !C)
        return;
      (C ? n.applyAnimatedValues(C, d.getValue(!0)) : !1) === !1 && h();
    }, v = new _3(y, p), g = E.useRef();
    iv(() => (g.current = v, kt(p, (C) => Dc(C, v)), () => {
      g.current && (kt(
        g.current.deps,
        (C) => ea(C, g.current)
      ), _e.cancel(g.current.update));
    })), E.useEffect(y, []), S3(() => () => {
      const C = g.current;
      kt(C.deps, (x) => ea(x, C));
    });
    const S = n.getComponentProps(d.getValue());
    return /* @__PURE__ */ E.createElement(t, { ...S, ref: f });
  });
}, _3 = class {
  constructor(t, n) {
    this.update = t, this.deps = n;
  }
  eventObserved(t) {
    t.type == "change" && _e.write(this.update);
  }
};
function F3(t, n) {
  const l = /* @__PURE__ */ new Set();
  return ta.dependencies = l, t.style && (t = {
    ...t,
    style: n.createAnimatedStyle(t.style)
  }), t = new Sa(t), ta.dependencies = null, [t, l];
}
function P3(t, n) {
  return t && (ze.fun(t) ? t(n) : t.current = n), n;
}
var Xh = Symbol.for("AnimatedComponent"), N3 = (t, {
  applyAnimatedValues: n = () => !1,
  createAnimatedStyle: l = (s) => new Sa(s),
  getComponentProps: o = (s) => s
} = {}) => {
  const s = {
    applyAnimatedValues: n,
    createAnimatedStyle: l,
    getComponentProps: o
  }, u = (f) => {
    const d = Yh(f) || "Anonymous";
    return ze.str(f) ? f = u[f] || (u[f] = Zh(f, s)) : f = f[Xh] || (f[Xh] = Zh(f, s)), f.displayName = `Animated(${d})`, f;
  };
  return Zo(t, (f, d) => {
    ze.arr(t) && (d = Yh(f)), u[d] = u(f);
  }), {
    animated: u
  };
}, Yh = (t) => ze.str(t) ? t : t && ze.str(t.displayName) ? t.displayName : ze.fun(t) && t.name || null, Jh = (t) => t instanceof uv, T3 = 1, uv = class extends Yg {
  constructor() {
    super(...arguments), this.id = T3++, this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(t) {
    this._priority != t && (this._priority = t, this._onPriorityChange(t));
  }
  /** Get the current value */
  get() {
    const t = Oc(this);
    return t && t.getValue();
  }
  /** Create a spring that maps our value to another value */
  to(...t) {
    return Gn.to(this, t);
  }
  /** @deprecated Use the `to` method instead. */
  interpolate(...t) {
    return v3(), Gn.to(this, t);
  }
  toJSON() {
    return this.get();
  }
  observerAdded(t) {
    t == 1 && this._attach();
  }
  observerRemoved(t) {
    t == 0 && this._detach();
  }
  /** Called when the first child is added. */
  _attach() {
  }
  /** Called when the last child is removed. */
  _detach() {
  }
  /** Tell our children about our new value */
  _onChange(t, n = !1) {
    Jo(this, {
      type: "change",
      parent: this,
      value: t,
      idle: n
    });
  }
  /** Tell our children about our new priority */
  _onPriorityChange(t) {
    this.idle || Kc.sort(this), Jo(this, {
      type: "priority",
      parent: this,
      priority: t
    });
  }
}, Hc = ({
  children: t,
  ...n
}) => {
  const l = E.useContext(ra), o = n.pause || !!l.pause, s = n.immediate || !!l.immediate;
  n = x3(() => ({ pause: o, immediate: s }), [o, s]);
  const { Provider: u } = ra;
  return /* @__PURE__ */ E.createElement(u, { value: n }, t);
}, ra = A3(Hc, {});
Hc.Provider = ra.Provider;
Hc.Consumer = ra.Consumer;
function A3(t, n) {
  return Object.assign(t, E.createContext(n)), t.Provider._context = t, t.Consumer._context = t, t;
}
var z3 = class extends uv {
  constructor(t, n) {
    super(), this.source = t, this.idle = !0, this._active = /* @__PURE__ */ new Set(), this.calc = ni(...n);
    const l = this._get(), o = k3(l);
    ov(this, o.create(l));
  }
  advance(t) {
    const n = this._get(), l = this.get();
    qw(n, l) || (Oc(this).setValue(n), this._onChange(n, this.idle)), !this.idle && em(this._active) && Du(this);
  }
  _get() {
    const t = ze.arr(this.source) ? this.source.map(Qn) : Gl(Qn(this.source));
    return this.calc(...t);
  }
  _start() {
    this.idle && !em(this._active) && (this.idle = !1, kt(Vc(this), (t) => {
      t.done = !1;
    }), Gn.skipAnimation ? (_e.batchedUpdates(() => this.advance()), Du(this)) : Kc.start(this));
  }
  // Observe our sources only when we're observed.
  _attach() {
    let t = 1;
    kt(Gl(this.source), (n) => {
      qn(n) && Dc(n, this), Jh(n) && (n.idle || this._active.add(n), t = Math.max(t, n.priority + 1));
    }), this.priority = t, this._start();
  }
  // Stop observing our sources once we have no observers.
  _detach() {
    kt(Gl(this.source), (t) => {
      qn(t) && ea(t, this);
    }), this._active.clear(), Du(this);
  }
  /** @internal */
  eventObserved(t) {
    t.type == "change" ? t.idle ? this.advance() : (this._active.add(t.parent), this._start()) : t.type == "idle" ? this._active.delete(t.parent) : t.type == "priority" && (this.priority = Gl(this.source).reduce(
      (n, l) => Math.max(n, (Jh(l) ? l.priority : 0) + 1),
      0
    ));
  }
};
function R3(t) {
  return t.idle !== !1;
}
function em(t) {
  return !t.size || Array.from(t).every(R3);
}
function Du(t) {
  t.idle || (t.idle = !0, kt(Vc(t), (n) => {
    n.done = !0;
  }), Jo(t, {
    type: "idle",
    parent: t
  }));
}
Gn.assign({
  createStringInterpolator: tv,
  to: (t, n) => new z3(t, n)
});
var cv = /^--/;
function L3(t, n) {
  return n == null || typeof n == "boolean" || n === "" ? "" : typeof n == "number" && n !== 0 && !cv.test(t) && !(Zl.hasOwnProperty(t) && Zl[t]) ? n + "px" : ("" + n).trim();
}
var tm = {};
function I3(t, n) {
  if (!t.nodeType || !t.setAttribute)
    return !1;
  const l = t.nodeName === "filter" || t.parentNode && t.parentNode.nodeName === "filter", { style: o, children: s, scrollTop: u, scrollLeft: f, viewBox: d, ...p } = n, h = Object.values(p), y = Object.keys(p).map(
    (v) => l || t.hasAttribute(v) ? v : tm[v] || (tm[v] = v.replace(
      /([A-Z])/g,
      // Attributes are written in dash case
      (g) => "-" + g.toLowerCase()
    ))
  );
  s !== void 0 && (t.textContent = s);
  for (const v in o)
    if (o.hasOwnProperty(v)) {
      const g = L3(v, o[v]);
      cv.test(v) ? t.style.setProperty(v, g) : t.style[v] = g;
    }
  y.forEach((v, g) => {
    t.setAttribute(v, h[g]);
  }), u !== void 0 && (t.scrollTop = u), f !== void 0 && (t.scrollLeft = f), d !== void 0 && t.setAttribute("viewBox", d);
}
var Zl = {
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
}, j3 = (t, n) => t + n.charAt(0).toUpperCase() + n.substring(1), M3 = ["Webkit", "Ms", "Moz", "O"];
Zl = Object.keys(Zl).reduce((t, n) => (M3.forEach((l) => t[j3(l, n)] = t[n]), t), Zl);
var K3 = /^(matrix|translate|scale|rotate|skew)/, D3 = /^(translate)/, O3 = /^(rotate|skew)/, Ou = (t, n) => ze.num(t) && t !== 0 ? t + n : t, Bo = (t, n) => ze.arr(t) ? t.every((l) => Bo(l, n)) : ze.num(t) ? t === n : parseFloat(t) === n, V3 = class extends Sa {
  constructor({ x: t, y: n, z: l, ...o }) {
    const s = [], u = [];
    (t || n || l) && (s.push([t || 0, n || 0, l || 0]), u.push((f) => [
      `translate3d(${f.map((d) => Ou(d, "px")).join(",")})`,
      // prettier-ignore
      Bo(f, 0)
    ])), Zo(o, (f, d) => {
      if (d === "transform")
        s.push([f || ""]), u.push((p) => [p, p === ""]);
      else if (K3.test(d)) {
        if (delete o[d], ze.und(f))
          return;
        const p = D3.test(d) ? "px" : O3.test(d) ? "deg" : "";
        s.push(Gl(f)), u.push(
          d === "rotate3d" ? ([h, y, v, g]) => [
            `rotate3d(${h},${y},${v},${Ou(g, p)})`,
            Bo(g, 0)
          ] : (h) => [
            `${d}(${h.map((y) => Ou(y, p)).join(",")})`,
            Bo(h, d.startsWith("scale") ? 1 : 0)
          ]
        );
      }
    }), s.length && (o.transform = new B3(s, u)), super(o);
  }
}, B3 = class extends Yg {
  constructor(t, n) {
    super(), this.inputs = t, this.transforms = n, this._value = null;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let t = "", n = !0;
    return kt(this.inputs, (l, o) => {
      const s = Qn(l[0]), [u, f] = this.transforms[o](
        ze.arr(s) ? s : l.map(Qn)
      );
      t += " " + u, n = n && f;
    }), n ? "none" : t;
  }
  // Start observing our inputs once we have an observer.
  observerAdded(t) {
    t == 1 && kt(
      this.inputs,
      (n) => kt(
        n,
        (l) => qn(l) && Dc(l, this)
      )
    );
  }
  // Stop observing our inputs once we have no observers.
  observerRemoved(t) {
    t == 0 && kt(
      this.inputs,
      (n) => kt(
        n,
        (l) => qn(l) && ea(l, this)
      )
    );
  }
  eventObserved(t) {
    t.type == "change" && (this._value = null), Jo(this, t);
  }
}, H3 = [
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
Gn.assign({
  batchedUpdates: da.unstable_batchedUpdates,
  createStringInterpolator: tv,
  colors: Yw
});
N3(H3, {
  applyAnimatedValues: I3,
  createAnimatedStyle: (t) => new V3(t),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getComponentProps: ({ scrollTop: t, scrollLeft: n, ...l }) => l
});
var U3 = [
  void 0,
  {
    isLandscape: void 0,
    isMobile: void 0,
    screenHeight: void 0,
    screenWidth: void 0
  }
];
function rm() {
  if (typeof window > "u")
    return U3;
  let t;
  window.innerWidth <= 767 ? t = "sm" : window.innerWidth <= 1279 ? t = "md" : t = "lg";
  const n = window.matchMedia?.("(orientation: landscape)")?.matches ?? !1, l = (window.matchMedia?.("(hover: none) and (pointer: coarse)")?.matches ?? !1) || window.innerWidth <= 767;
  return [
    t,
    {
      isLandscape: n,
      isMobile: l,
      screenHeight: window.innerHeight,
      screenWidth: window.innerWidth
    }
  ];
}
function W3(t = 100) {
  const [n, l] = E.useState(rm()), o = E.useRef();
  return E.useEffect(() => {
    const s = () => {
      clearTimeout(o.current), o.current = setTimeout(() => l(rm()), t);
    };
    return window.addEventListener("resize", s), window.addEventListener("orientationchange", s), () => {
      window.removeEventListener("resize", s), window.removeEventListener("orientationchange", s), clearTimeout(o.current);
    };
  }, [t, l]), n;
}
function G3({
  controlledValue: t,
  defaultValue: n,
  warnFn: l
}) {
  const [o, s] = E.useState(n);
  return t !== void 0 && n !== void 0 && (l ? l() : Un(
    "A controlled value and a default value were both provided. An element must be either controlled or uncontrolled. Decide between using any and remove on of these props"
  )), [
    t ?? o,
    t !== void 0 ? void 0 : s
  ];
}
E.createContext(!1);
var q3 = typeof window > "u" ? E.useEffect : E.useLayoutEffect;
function nm(t, n, l) {
  let o = null;
  const s = (u) => {
    E.Children.forEach(u, (f) => {
      if (E.isValidElement(f)) {
        if (f.type === E.Fragment) {
          s(
            f.props.children
          );
          return;
        }
        const d = f.type === n, p = l == null;
        if (d && p) {
          if (o)
            throw new Error(
              "Found multiple children of type " + n.toString()
            );
          o = f;
        }
      }
    });
  };
  return s(t), o;
}
function ai(t, n, l) {
  try {
    const s = $.Children.only(t);
    if (s.type === n)
      return l ? l(s, s?.props) : t;
  } catch {
  }
  return null;
}
var dv = (t) => t ? !!t.type.toString().match(Q3) : !1, Q3 = /"data-namespace":\s?"@paloma\/icons"/i;
function Tt(t, n) {
  if (!n)
    return null;
  const l = $.Children.only(n);
  return $.cloneElement(l, { ...t });
}
var Z3 = O({
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
}), X3 = "span", pt = E.forwardRef(
  ({
    as: t,
    children: n,
    className: l,
    fontWeight: o = "normal",
    showTitle: s = !1,
    size: u,
    truncate: f = !1,
    underline: d = !1,
    variant: p,
    ...h
  }, y) => {
    const v = t ?? X3, [g, S] = E.useMemo(() => p === "heading" ? [u ?? "large", p] : [u ?? "medium", "body"], [u, p]);
    return /* @__PURE__ */ $.createElement(
      v,
      {
        className: Z3({
          className: l,
          fontWeight: o,
          truncate: f,
          underline: d,
          [S]: g
        }),
        "data-font-weight": o,
        "data-size": g,
        "data-truncate": f,
        "data-underline": d,
        "data-variant": S,
        ref: y,
        title: s ? h.title ?? (f && typeof n == "string" ? n : void 0) : void 0,
        ...h
      },
      n
    );
  }
), fv = (t, n = {}) => {
  if (typeof t == "string")
    return /* @__PURE__ */ $.createElement(pt, { ...n }, t);
  if (ai(t, pt)) {
    const l = {
      ...n ?? {},
      ...t.props
    };
    return /* @__PURE__ */ $.createElement(pt, { ...l });
  }
  if ($.isValidElement(t) && typeof t.type == "string") {
    const l = {};
    t.type === "a" && (l.color = "#0000EE", l.textDecoration = "underline");
    const o = t.props, s = {
      ...l,
      ...n.style,
      ...o.style
    };
    return $.cloneElement(
      t,
      {
        style: s
      }
    );
  }
  return t;
};
function pv(t, n, l) {
  const o = (s, u) => {
    if ($.isValidElement(s) && s.type === n)
      return l(s, u);
  };
  return E.Children.map(t, (s, u) => $.isValidElement(s) && s.type === E.Fragment ? $.cloneElement(s, {
    children: pv(
      s.props.children,
      n,
      l
    )
  }) : o(s, u) ?? s);
}
function hv(t) {
  const n = t.match(Y3)?.[0];
  if (n)
    return Number.parseInt(n);
}
var Y3 = /\d+[.d+]?/g, J3 = [
  /* Uses a dummy class because FocusRing is a functional component that just adds
      the class to the content.
  
      The cn or other style functions on the FocusRing are always called, so we can't
      listen to them to test functionality */
  "@paloma-focus-ring",
  "outline",
  "outline-2",
  "outline-offset-2",
  "outline-interactive-highlight"
], Ur = ({
  children: t,
  disabled: n,
  focusRingClass: l,
  ...o
}) => n ? t : /* @__PURE__ */ $.createElement(lg, { focusRingClass: rt(J3, l), ...o }, t);
O({
  base: "py-4 flex flex-col items-start border-t-0 border-l-0 border-r-0 border-b border-b-neutral-subtle border-solid",
  variants: {
    expanded: {
      true: "pb-8"
    }
  }
});
O({
  base: "flex items-center text-content-neutral-bold",
  variants: {
    expanded: {
      true: "text-content-highlight"
    }
  }
});
O({
  base: "text-content-neutral-bold",
  variants: {
    expanded: {
      true: "!text-content-highlight"
    }
  }
});
O({
  base: "flex items-center text-content-neutral-subtle",
  variants: {
    size: {
      large: "h-8",
      medium: "h-6"
    }
  }
});
O({
  base: "w-full grid overflow-hidden transition-all duration-300 ease-in-out motion-reduce:transition-none",
  variants: {
    expanded: {
      false: "grid-rows-[0fr] invisible",
      true: "grid-rows-[1fr] visible"
    }
  }
});
O({
  variants: {
    variant: {
      contained: "p-8 rounded-md bg-surface-level-01",
      "un-contained": ""
    }
  }
});
var Uc = {
  "bottom-center": "",
  "bottom-left": "",
  "bottom-right": "",
  "top-center": "",
  "top-left": "",
  "top-right": ""
}, Wc = {
  circle: "",
  square: ""
}, Vu = {
  false: "",
  true: ""
}, mv = {
  avatar: "",
  dot: "",
  icon: "",
  product: "",
  text: ""
}, e4 = {
  negative: "",
  none: "",
  positive: "",
  warning: ""
}, t4 = {
  highlight: "",
  neutral: ""
}, r4 = {
  small: "",
  "x-small": ""
}, n4 = O({
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
    position: Uc,
    shape: Wc,
    standalone: {
      false: "@paloma-badge-rotation-relative absolute"
    }
  }
}), l4 = O({
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
    position: Uc,
    shape: Wc,
    standalone: {
      false: "@paloma-badge-position-relative absolute z-10"
    },
    variant: mv
  }
}), i4 = O({
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
    position: Uc,
    shape: Wc,
    standalone: {
      false: "max-w-[80px]",
      true: ""
    }
  }
}), o4 = O({
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
    appearance: t4,
    emphasis: {
      bold: "@paloma-badge-content-bold text-content-inverse-bold",
      subtle: "@paloma-badge-content-subtle text-content-neutral-bold"
    },
    hasIcon: Vu,
    hasProductLogo: Vu,
    isLabelSingleCharacter: Vu,
    size: r4,
    status: e4,
    variant: mv
  }
}), a4 = O({
  base: "@paloma-badge-container relative w-fit"
}), Ca = ({
  appearance: t = "neutral",
  "aria-label": n,
  avatar: l,
  children: o,
  className: s,
  containerClassName: u,
  cutoutBorder: f = !0,
  cutoutColor: d,
  emphasis: p = "subtle",
  icon: h,
  label: y,
  position: v,
  productLogo: g,
  shape: S = "square",
  size: C = "small",
  standalone: x = !1,
  status: F = "none",
  variant: W,
  ...L
}) => {
  W || (W = y ? "text" : h ?? l ?? g ? "icon" : "dot"), (W === "avatar" || W === "product") && (W = "icon");
  const X = () => {
    if (y)
      return /* @__PURE__ */ $.createElement(
        pt,
        {
          "data-testid": "@paloma-badge-label-id",
          size: C,
          truncate: !0,
          variant: "body"
        },
        y
      );
  }, J = () => {
    if (h)
      return Tt(
        {
          "data-testid": "@paloma-badge-icon-id",
          size: "small"
        },
        h
      );
  }, fe = () => {
    if (l)
      return $.cloneElement(l, {
        ...l.props,
        "aria-label": l.props["aria-label"] ?? n ?? y,
        badge: void 0,
        size: C === "small" ? "x-small" : "xx-small"
      });
  }, ce = () => {
    if (g)
      return $.cloneElement(
        g,
        {
          ...g.props,
          contained: !0,
          size: C === "small" ? "x-small" : "2x-small"
        }
      );
  }, ue = () => {
    if (W !== "dot")
      return /* @__PURE__ */ $.createElement($.Fragment, null, J(), X(), fe(), ce());
  }, pe = v?.split("-"), ge = !!(y && y.length === 1), Ce = ge && !h, ye = (K) => /* @__PURE__ */ $.createElement(
    "div",
    {
      className: n4({
        class: x ? u : "",
        position: v,
        shape: S,
        standalone: x
      }),
      "data-appearance": t,
      "data-content-single-element": Ce,
      "data-cutout-border": f,
      "data-emphasis": p,
      "data-shape": S,
      "data-size": C,
      "data-status": F,
      "data-testid": "@paloma-badge-rotation-id",
      "data-variant": W,
      ...x ? K : {}
    },
    /* @__PURE__ */ $.createElement(
      "div",
      {
        className: l4({
          position: v,
          shape: S,
          standalone: x,
          variant: W
        }),
        "data-position-x": pe?.[1],
        "data-position-y": pe?.[0],
        "data-shape": S,
        "data-testid": "@paloma-badge-position-id"
      },
      /* @__PURE__ */ $.createElement(
        "div",
        {
          className: i4({
            cutoutBorder: f,
            hasProductLogo: !!g,
            position: v,
            shape: S,
            standalone: x
          }),
          "data-testid": "@paloma-badge-border-id",
          style: d ? { borderColor: d } : void 0
        },
        /* @__PURE__ */ $.createElement(
          "div",
          {
            "aria-label": n,
            className: o4({
              appearance: t,
              class: s,
              emphasis: p,
              hasIcon: !!h,
              hasProductLogo: !!g,
              isLabelSingleCharacter: ge,
              size: C,
              status: F,
              variant: W
            }),
            "data-testid": "@paloma-badge-content-id",
            role: W !== "dot" ? "status" : void 0
          },
          ue()
        )
      )
    )
  );
  return x ? /* @__PURE__ */ $.createElement(ye, { ...L }) : /* @__PURE__ */ $.createElement(
    "div",
    {
      className: a4({ class: u }),
      "data-testid": "@paloma-badge-container-id",
      ...L
    },
    o,
    /* @__PURE__ */ $.createElement(ye, null)
  );
}, s4 = O({
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
}), lm = ({
  children: t,
  showTitle: n,
  size: l
}) => /* @__PURE__ */ $.createElement(
  pt,
  {
    fontWeight: "bold",
    showTitle: n,
    size: l,
    truncate: !0,
    variant: "body"
  },
  t
), Ea = E.forwardRef(
  ({
    "aria-label": t,
    as: n,
    children: l,
    className: o,
    disabled: s,
    hideButton: u,
    iconOnly: f,
    isLoading: d,
    leadingIcon: p,
    loadingIcon: h,
    loadingLabel: y = "Loading",
    onBlur: v,
    onClick: g,
    onFocus: S,
    onPress: C,
    showTitle: x,
    size: F = "medium",
    trailingIcon: W,
    type: L = "button",
    variant: X = "primary",
    ...J
  }, fe) => {
    const ce = n ?? "button", ue = n === "div" || n === "span", pe = n === "a", ge = E.useRef(null);
    ft(
      !(f && !t && !ue),
      "Button with iconOnly must have an aria-label for accessibility. If Button is purely decorative and does not convey any meaning or action, it should have aria-hidden='true' to be ignored by assistive technologies."
    );
    const { buttonProps: Ce } = pa(
      {
        elementType: ce,
        isDisabled: !!s,
        onBlur: v,
        onFocus: S,
        onPress: d ? void 0 : (G) => {
          C ? C(G) : g?.(G);
        }
      },
      ge
    ), ye = ue ? J : Te(Ce, J), K = /* @__PURE__ */ $.createElement($.Fragment, null, h ?? Tt(
      { className: "animate-loading-hourglass", size: F },
      /* @__PURE__ */ $.createElement(a2, null)
    ), !f && /* @__PURE__ */ $.createElement(lm, { size: F }, y));
    return /* @__PURE__ */ $.createElement(Ur, null, E.createElement(
      ce,
      {
        "aria-label": d ? y : t,
        className: s4({
          class: o,
          hideButton: u,
          iconOnly: f,
          isDecorative: ue,
          isLoading: d,
          size: F,
          variant: X
        }),
        /* Add this to test uses of Button on other components */
        "data-size": Ke(F),
        /* Add this to test uses of Button on other components */
        "data-variant": Ke(X),
        ref: Hr(ge, fe),
        ...ye,
        "aria-busy": d ? !0 : void 0,
        "aria-disabled": !!s || !!d || void 0,
        // react-aria adds role="button" for non-button elements; strip it for links
        ...pe && { role: void 0 },
        type: pe || ue ? void 0 : d && (L === "submit" || L === "reset") ? "button" : L
      },
      d ? K : /* @__PURE__ */ $.createElement($.Fragment, null, Tt(
        {
          size: p?.props.size ? p.props.size : F
        },
        p
      ), !f && /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement(lm, { showTitle: x, size: F }, l), Tt(
        {
          size: W?.props.size ? W.props.size : F
        },
        W
      )))
    ));
  }
), u4 = O({
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
}), c4 = O({
  base: "object-cover",
  extend: u4,
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
}), d4 = ({
  alt: t,
  as: n,
  className: l,
  loading: o,
  ratio: s,
  size: u,
  sizes: f,
  src: d,
  srcSet: p,
  style: h,
  ...y
}) => {
  const v = Ag("img"), g = n ?? v;
  ft(
    typeof t == "string",
    "@paloma/Image requires an alt prop to be passed. Use an empty string (alt='') for decorative images or provide descriptive text for informative images."
  ), ft(
    !(p && !f),
    "Image: srcSet was provided without sizes. This may lead to unexpected behavior."
  );
  const S = { height: u, width: u };
  return /* @__PURE__ */ $.createElement(
    g,
    {
      alt: t,
      className: c4({
        class: l,
        ratio: s,
        size: typeof u == "string" ? u : void 0
      }),
      loading: o,
      sizes: f,
      src: d,
      srcSet: p,
      style: { ...S, ...h },
      ...y
    }
  );
}, f4 = O({
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
}), p4 = "h-full w-full", im = E.forwardRef(
  ({
    alt: t,
    as: n,
    children: l,
    className: o,
    contained: s,
    size: u = "medium",
    src: f,
    style: d,
    ...p
  }, h) => {
    const y = n ?? "div", g = { ...{
      height: u,
      ...s ? { width: u } : {}
    }, ...d }, S = typeof u == "number" ? void 0 : u;
    return ft(
      !l || !f && !t,
      "ProductLogo with children should not receive src nor alt"
    ), ft(
      l !== void 0 || f !== void 0 && t !== void 0,
      "ProductLogo without children should have both src and alt"
    ), /* @__PURE__ */ $.createElement(Ur, null, /* @__PURE__ */ $.createElement(
      y,
      {
        className: f4({
          class: o,
          contained: s,
          size: S
        }),
        ref: h,
        style: g,
        ...p
      },
      l ? E.cloneElement(l, {
        className: rt(l.props.className, p4)
      }) : /* @__PURE__ */ $.createElement(
        d4,
        {
          alt: t,
          className: "h-full w-auto rounded-none",
          "data-testid": "img",
          src: f
        }
      )
    ));
  }
), om = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, $t = (t) => !t || typeof t != "object" || Object.keys(t).length === 0, h4 = (t, n) => JSON.stringify(t) === JSON.stringify(n);
function gv(t, n) {
  t.forEach(function(l) {
    Array.isArray(l) ? gv(l, n) : n.push(l);
  });
}
function vv(t) {
  let n = [];
  return gv(t, n), n;
}
var yv = (...t) => vv(t).filter(Boolean), bv = (t, n) => {
  let l = {}, o = Object.keys(t), s = Object.keys(n);
  for (let u of o)
    if (s.includes(u)) {
      let f = t[u], d = n[u];
      typeof f == "object" && typeof d == "object" ? l[u] = bv(f, d) : Array.isArray(f) || Array.isArray(d) ? l[u] = yv(d, f) : l[u] = d + " " + f;
    } else
      l[u] = t[u];
  for (let u of s)
    o.includes(u) || (l[u] = n[u]);
  return l;
}, am = (t) => !t || typeof t != "string" ? t : t.replace(/\s+/g, " ").trim(), Gc = "-";
function m4(t) {
  const n = v4(t), {
    conflictingClassGroups: l,
    conflictingClassGroupModifiers: o
  } = t;
  function s(f) {
    const d = f.split(Gc);
    return d[0] === "" && d.length !== 1 && d.shift(), xv(d, n) || g4(f);
  }
  function u(f, d) {
    const p = l[f] || [];
    return d && o[f] ? [...p, ...o[f]] : p;
  }
  return {
    getClassGroupId: s,
    getConflictingClassGroupIds: u
  };
}
function xv(t, n) {
  if (t.length === 0)
    return n.classGroupId;
  const l = t[0], o = n.nextPart.get(l), s = o ? xv(t.slice(1), o) : void 0;
  if (s)
    return s;
  if (n.validators.length === 0)
    return;
  const u = t.join(Gc);
  return n.validators.find(({
    validator: f
  }) => f(u))?.classGroupId;
}
var sm = /^\[(.+)\]$/;
function g4(t) {
  if (sm.test(t)) {
    const n = sm.exec(t)[1], l = n?.substring(0, n.indexOf(":"));
    if (l)
      return "arbitrary.." + l;
  }
}
function v4(t) {
  const {
    theme: n,
    prefix: l
  } = t, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return b4(Object.entries(t.classGroups), l).forEach(([u, f]) => {
    pc(f, o, u, n);
  }), o;
}
function pc(t, n, l, o) {
  t.forEach((s) => {
    if (typeof s == "string") {
      const u = s === "" ? n : um(n, s);
      u.classGroupId = l;
      return;
    }
    if (typeof s == "function") {
      if (y4(s)) {
        pc(s(o), n, l, o);
        return;
      }
      n.validators.push({
        validator: s,
        classGroupId: l
      });
      return;
    }
    Object.entries(s).forEach(([u, f]) => {
      pc(f, um(n, u), l, o);
    });
  });
}
function um(t, n) {
  let l = t;
  return n.split(Gc).forEach((o) => {
    l.nextPart.has(o) || l.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), l = l.nextPart.get(o);
  }), l;
}
function y4(t) {
  return t.isThemeGetter;
}
function b4(t, n) {
  return n ? t.map(([l, o]) => {
    const s = o.map((u) => typeof u == "string" ? n + u : typeof u == "object" ? Object.fromEntries(Object.entries(u).map(([f, d]) => [n + f, d])) : u);
    return [l, s];
  }) : t;
}
function x4(t) {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, l = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  function s(u, f) {
    l.set(u, f), n++, n > t && (n = 0, o = l, l = /* @__PURE__ */ new Map());
  }
  return {
    get(u) {
      let f = l.get(u);
      if (f !== void 0)
        return f;
      if ((f = o.get(u)) !== void 0)
        return s(u, f), f;
    },
    set(u, f) {
      l.has(u) ? l.set(u, f) : s(u, f);
    }
  };
}
var wv = "!";
function w4(t) {
  const n = t.separator, l = n.length === 1, o = n[0], s = n.length;
  return function(f) {
    const d = [];
    let p = 0, h = 0, y;
    for (let x = 0; x < f.length; x++) {
      let F = f[x];
      if (p === 0) {
        if (F === o && (l || f.slice(x, x + s) === n)) {
          d.push(f.slice(h, x)), h = x + s;
          continue;
        }
        if (F === "/") {
          y = x;
          continue;
        }
      }
      F === "[" ? p++ : F === "]" && p--;
    }
    const v = d.length === 0 ? f : f.substring(h), g = v.startsWith(wv), S = g ? v.substring(1) : v, C = y && y > h ? y - h : void 0;
    return {
      modifiers: d,
      hasImportantModifier: g,
      baseClassName: S,
      maybePostfixModifierPosition: C
    };
  };
}
function S4(t) {
  if (t.length <= 1)
    return t;
  const n = [];
  let l = [];
  return t.forEach((o) => {
    o[0] === "[" ? (n.push(...l.sort(), o), l = []) : l.push(o);
  }), n.push(...l.sort()), n;
}
function C4(t) {
  return {
    cache: x4(t.cacheSize),
    splitModifiers: w4(t),
    ...m4(t)
  };
}
var E4 = /\s+/;
function $4(t, n) {
  const {
    splitModifiers: l,
    getClassGroupId: o,
    getConflictingClassGroupIds: s
  } = n, u = /* @__PURE__ */ new Set();
  return t.trim().split(E4).map((f) => {
    const {
      modifiers: d,
      hasImportantModifier: p,
      baseClassName: h,
      maybePostfixModifierPosition: y
    } = l(f);
    let v = o(y ? h.substring(0, y) : h), g = !!y;
    if (!v) {
      if (!y)
        return {
          isTailwindClass: !1,
          originalClassName: f
        };
      if (v = o(h), !v)
        return {
          isTailwindClass: !1,
          originalClassName: f
        };
      g = !1;
    }
    const S = S4(d).join(":");
    return {
      isTailwindClass: !0,
      modifierId: p ? S + wv : S,
      classGroupId: v,
      originalClassName: f,
      hasPostfixModifier: g
    };
  }).reverse().filter((f) => {
    if (!f.isTailwindClass)
      return !0;
    const {
      modifierId: d,
      classGroupId: p,
      hasPostfixModifier: h
    } = f, y = d + p;
    return u.has(y) ? !1 : (u.add(y), s(p, h).forEach((v) => u.add(d + v)), !0);
  }).reverse().map((f) => f.originalClassName).join(" ");
}
function k4() {
  let t = 0, n, l, o = "";
  for (; t < arguments.length; )
    (n = arguments[t++]) && (l = Sv(n)) && (o && (o += " "), o += l);
  return o;
}
function Sv(t) {
  if (typeof t == "string")
    return t;
  let n, l = "";
  for (let o = 0; o < t.length; o++)
    t[o] && (n = Sv(t[o])) && (l && (l += " "), l += n);
  return l;
}
function hc(t, ...n) {
  let l, o, s, u = f;
  function f(p) {
    const h = n.reduce((y, v) => v(y), t());
    return l = C4(h), o = l.cache.get, s = l.cache.set, u = d, d(p);
  }
  function d(p) {
    const h = o(p);
    if (h)
      return h;
    const y = $4(p, l);
    return s(p, y), y;
  }
  return function() {
    return u(k4.apply(null, arguments));
  };
}
function Me(t) {
  const n = (l) => l[t] || [];
  return n.isThemeGetter = !0, n;
}
var Cv = /^\[(?:([a-z-]+):)?(.+)\]$/i, _4 = /^\d+\/\d+$/, F4 = /* @__PURE__ */ new Set(["px", "full", "screen"]), P4 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, N4 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, T4 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, A4 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, z4 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function dr(t) {
  return an(t) || F4.has(t) || _4.test(t);
}
function Mr(t) {
  return Yn(t, "length", O4);
}
function an(t) {
  return !!t && !Number.isNaN(Number(t));
}
function Ro(t) {
  return Yn(t, "number", an);
}
function Ol(t) {
  return !!t && Number.isInteger(Number(t));
}
function R4(t) {
  return t.endsWith("%") && an(t.slice(0, -1));
}
function we(t) {
  return Cv.test(t);
}
function Kr(t) {
  return P4.test(t);
}
var L4 = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function I4(t) {
  return Yn(t, L4, Ev);
}
function j4(t) {
  return Yn(t, "position", Ev);
}
var M4 = /* @__PURE__ */ new Set(["image", "url"]);
function K4(t) {
  return Yn(t, M4, B4);
}
function D4(t) {
  return Yn(t, "", V4);
}
function Vl() {
  return !0;
}
function Yn(t, n, l) {
  const o = Cv.exec(t);
  return o ? o[1] ? typeof n == "string" ? o[1] === n : n.has(o[1]) : l(o[2]) : !1;
}
function O4(t) {
  return N4.test(t) && !T4.test(t);
}
function Ev() {
  return !1;
}
function V4(t) {
  return A4.test(t);
}
function B4(t) {
  return z4.test(t);
}
function mc() {
  const t = Me("colors"), n = Me("spacing"), l = Me("blur"), o = Me("brightness"), s = Me("borderColor"), u = Me("borderRadius"), f = Me("borderSpacing"), d = Me("borderWidth"), p = Me("contrast"), h = Me("grayscale"), y = Me("hueRotate"), v = Me("invert"), g = Me("gap"), S = Me("gradientColorStops"), C = Me("gradientColorStopPositions"), x = Me("inset"), F = Me("margin"), W = Me("opacity"), L = Me("padding"), X = Me("saturate"), J = Me("scale"), fe = Me("sepia"), ce = Me("skew"), ue = Me("space"), pe = Me("translate"), ge = () => ["auto", "contain", "none"], Ce = () => ["auto", "hidden", "clip", "visible", "scroll"], ye = () => ["auto", we, n], K = () => [we, n], G = () => ["", dr, Mr], N = () => ["auto", an, we], U = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], M = () => ["solid", "dashed", "dotted", "double", "none"], z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], R = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], T = () => ["", "0", we], B = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], _ = () => [an, Ro], V = () => [an, we];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Vl],
      spacing: [dr, Mr],
      blur: ["none", "", Kr, we],
      brightness: _(),
      borderColor: [t],
      borderRadius: ["none", "", "full", Kr, we],
      borderSpacing: K(),
      borderWidth: G(),
      contrast: _(),
      grayscale: T(),
      hueRotate: V(),
      invert: T(),
      gap: K(),
      gradientColorStops: [t],
      gradientColorStopPositions: [R4, Mr],
      inset: ye(),
      margin: ye(),
      opacity: _(),
      padding: K(),
      saturate: _(),
      scale: _(),
      sepia: T(),
      skew: V(),
      space: K(),
      translate: K()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", we]
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
        columns: [Kr]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": B()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": B()
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
        object: [...U(), we]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Ce()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Ce()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Ce()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: ge()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": ge()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": ge()
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
        inset: [x]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [x]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [x]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [x]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [x]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [x]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [x]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [x]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [x]
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
        z: ["auto", Ol, we]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: ye()
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
        flex: ["1", "auto", "initial", "none", we]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: T()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: T()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Ol, we]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Vl]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ol, we]
        }, we]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": N()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": N()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Vl]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ol, we]
        }, we]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": N()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": N()
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
        "auto-cols": ["auto", "min", "max", "fr", we]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", we]
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
        justify: ["normal", ...R()]
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
        content: ["normal", ...R(), "baseline"]
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
        "place-content": [...R(), "baseline"]
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
        p: [L]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [L]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [L]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [L]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [L]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [L]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [L]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [L]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [L]
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
        "space-x": [ue]
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
        "space-y": [ue]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", we, n]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [we, n, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [we, n, "none", "full", "min", "max", "fit", "prose", {
          screen: [Kr]
        }, Kr]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [we, n, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [we, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [we, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [we, n, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Kr, Mr]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ro]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Vl]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", we]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", an, Ro]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", dr, we]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", we]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", we]
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
        placeholder: [t]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [W]
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
        text: [t]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [W]
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
        decoration: [...M(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", dr, Mr]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", dr, we]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [t]
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
        indent: K()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", we]
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
        content: ["none", we]
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
        "bg-opacity": [W]
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
        bg: [...U(), j4]
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
        bg: ["auto", "cover", "contain", I4]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, K4]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [t]
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
        rounded: [u]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [u]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [u]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [u]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [u]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [u]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [u]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [u]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [u]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [u]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [u]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [u]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [u]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [u]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [u]
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
        "border-opacity": [W]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...M(), "hidden"]
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
        "divide-opacity": [W]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: M()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [s]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [s]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [s]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [s]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [s]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [s]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [s]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [s]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...M()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [dr, we]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [dr, Mr]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [t]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: G()
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
        ring: [t]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [W]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [dr, Mr]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [t]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Kr, D4]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Vl]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [W]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...z(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": z()
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
        brightness: [o]
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
        "drop-shadow": ["", "none", Kr, we]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [h]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [y]
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
        saturate: [X]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [fe]
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
        "backdrop-brightness": [o]
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
        "backdrop-grayscale": [h]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [y]
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
        "backdrop-opacity": [W]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [X]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [fe]
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
        "border-spacing": [f]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [f]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [f]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", we]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: V()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", we]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: V()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", we]
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
        scale: [J]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [J]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [J]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Ol, we]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [pe]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [pe]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [ce]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [ce]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", we]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", t]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", we]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [t]
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
        "scroll-m": K()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": K()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": K()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": K()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": K()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": K()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": K()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": K()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": K()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": K()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": K()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": K()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": K()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": K()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": K()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": K()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": K()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": K()
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
        "will-change": ["auto", "scroll", "contents", "transform", we]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [t, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [dr, Mr, Ro]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [t, "none"]
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
function H4(t, {
  cacheSize: n,
  prefix: l,
  separator: o,
  extend: s = {},
  override: u = {}
}) {
  Ho(t, "cacheSize", n), Ho(t, "prefix", l), Ho(t, "separator", o);
  for (const f in u)
    U4(t[f], u[f]);
  for (const f in s)
    W4(t[f], s[f]);
  return t;
}
function Ho(t, n, l) {
  l !== void 0 && (t[n] = l);
}
function U4(t, n) {
  if (n)
    for (const l in n)
      Ho(t, l, n[l]);
}
function W4(t, n) {
  if (n)
    for (const l in n) {
      const o = n[l];
      o !== void 0 && (t[l] = (t[l] || []).concat(o));
    }
}
function G4(t, ...n) {
  return typeof t == "function" ? hc(mc, t, ...n) : hc(() => H4(mc(), t), ...n);
}
var q4 = /* @__PURE__ */ hc(mc), Q4 = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, $v = (t) => t || void 0, si = (...t) => $v(vv(t).filter(Boolean).join(" ")), Bu = null, mr = {}, gc = !1, Bl = (...t) => (n) => n.twMerge ? ((!Bu || gc) && (gc = !1, Bu = $t(mr) ? q4 : G4({ ...mr, extend: { theme: mr.theme, classGroups: mr.classGroups, conflictingClassGroupModifiers: mr.conflictingClassGroupModifiers, conflictingClassGroups: mr.conflictingClassGroups, ...mr.extend } })), $v(Bu(si(t)))) : si(t), cm = (t, n) => {
  for (let l in n)
    t.hasOwnProperty(l) ? t[l] = si(t[l], n[l]) : t[l] = n[l];
  return t;
}, Oe = (t, n) => {
  let { extend: l = null, slots: o = {}, variants: s = {}, compoundVariants: u = [], compoundSlots: f = [], defaultVariants: d = {} } = t, p = { ...Q4, ...n }, h = l != null && l.base ? si(l.base, t?.base) : t?.base, y = l != null && l.variants && !$t(l.variants) ? bv(s, l.variants) : s, v = l != null && l.defaultVariants && !$t(l.defaultVariants) ? { ...l.defaultVariants, ...d } : d;
  !$t(p.twMergeConfig) && !h4(p.twMergeConfig, mr) && (gc = !0, mr = p.twMergeConfig);
  let g = $t(l?.slots), S = $t(o) ? {} : { base: si(t?.base, g && l?.base), ...o }, C = g ? S : cm({ ...l?.slots }, $t(S) ? { base: t?.base } : S), x = $t(l?.compoundVariants) ? u : yv(l?.compoundVariants, u), F = (L) => {
    if ($t(y) && $t(o) && g)
      return Bl(h, L?.class, L?.className)(p);
    if (x && !Array.isArray(x))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof x}`);
    if (f && !Array.isArray(f))
      throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof f}`);
    let X = (K, G, N = [], U) => {
      let M = N;
      if (typeof G == "string")
        M = M.concat(am(G).split(" ").map((z) => `${K}:${z}`));
      else if (Array.isArray(G))
        M = M.concat(G.reduce((z, R) => z.concat(`${K}:${R}`), []));
      else if (typeof G == "object" && typeof U == "string") {
        for (let z in G)
          if (G.hasOwnProperty(z) && z === U) {
            let R = G[z];
            if (R && typeof R == "string") {
              let T = am(R);
              M[U] ? M[U] = M[U].concat(T.split(" ").map((B) => `${K}:${B}`)) : M[U] = T.split(" ").map((B) => `${K}:${B}`);
            } else
              Array.isArray(R) && R.length > 0 && (M[U] = R.reduce((T, B) => T.concat(`${K}:${B}`), []));
          }
      }
      return M;
    }, J = (K, G = y, N = null, U = null) => {
      var M;
      let z = G[K];
      if (!z || $t(z))
        return null;
      let R = (M = U?.[K]) != null ? M : L?.[K];
      if (R === null)
        return null;
      let T = om(R), B = Array.isArray(p.responsiveVariants) && p.responsiveVariants.length > 0 || p.responsiveVariants === !0, _ = v?.[K], V = [];
      if (typeof T == "object" && B)
        for (let [H, ne] of Object.entries(T)) {
          let be = z[ne];
          if (H === "initial") {
            _ = ne;
            continue;
          }
          Array.isArray(p.responsiveVariants) && !p.responsiveVariants.includes(H) || (V = X(H, be, V, N));
        }
      let de = T != null && typeof T != "object" ? T : om(_), ae = z[de || "false"];
      return typeof V == "object" && typeof N == "string" && V[N] ? cm(V, ae) : V.length > 0 ? (V.push(ae), V) : ae;
    }, fe = () => y ? Object.keys(y).map((K) => J(K, y)) : null, ce = (K, G) => {
      if (!y || typeof y != "object")
        return null;
      let N = new Array();
      for (let U in y) {
        let M = J(U, y, K, G), z = K === "base" && typeof M == "string" ? M : M && M[K];
        z && (N[N.length] = z);
      }
      return N;
    }, ue = {};
    for (let K in L)
      L[K] !== void 0 && (ue[K] = L[K]);
    let pe = (K, G) => {
      var N;
      let U = typeof L?.[K] == "object" ? { [K]: (N = L[K]) == null ? void 0 : N.initial } : {};
      return { ...v, ...ue, ...U, ...G };
    }, ge = (K = [], G) => {
      let N = [];
      for (let { class: U, className: M, ...z } of K) {
        let R = !0;
        for (let [T, B] of Object.entries(z)) {
          let _ = pe(T, G);
          if (Array.isArray(B)) {
            if (!B.includes(_[T])) {
              R = !1;
              break;
            }
          } else if (_[T] !== B) {
            R = !1;
            break;
          }
        }
        R && (U && N.push(U), M && N.push(M));
      }
      return N;
    }, Ce = (K) => {
      let G = ge(x, K);
      if (!Array.isArray(G))
        return G;
      let N = {};
      for (let U of G)
        if (typeof U == "string" && (N.base = Bl(N.base, U)(p)), typeof U == "object")
          for (let [M, z] of Object.entries(U))
            N[M] = Bl(N[M], z)(p);
      return N;
    }, ye = (K) => {
      if (f.length < 1)
        return null;
      let G = {};
      for (let { slots: N = [], class: U, className: M, ...z } of f) {
        if (!$t(z)) {
          let R = !0;
          for (let T of Object.keys(z)) {
            let B = pe(T, K)[T];
            if (B === void 0 || (Array.isArray(z[T]) ? !z[T].includes(B) : z[T] !== B)) {
              R = !1;
              break;
            }
          }
          if (!R)
            continue;
        }
        for (let R of N)
          G[R] = G[R] || [], G[R].push([U, M]);
      }
      return G;
    };
    if (!$t(o) || !g) {
      let K = {};
      if (typeof C == "object" && !$t(C))
        for (let G of Object.keys(C))
          K[G] = (N) => {
            var U, M;
            return Bl(C[G], ce(G, N), ((U = Ce(N)) != null ? U : [])[G], ((M = ye(N)) != null ? M : [])[G], N?.class, N?.className)(p);
          };
      return K;
    }
    return Bl(h, fe(), ge(x), L?.class, L?.className)(p);
  }, W = () => {
    if (!(!y || typeof y != "object"))
      return Object.keys(y);
  };
  return F.variantKeys = W(), F.extend = l, F.base = h, F.slots = C, F.variants = y, F.defaultVariants = v, F.compoundSlots = f, F.compoundVariants = x, F;
};
Oe({
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
Oe({
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
Oe({
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
Oe({
  base: "flex flex-row gap-4",
  variants: {
    orientation: {
      horizontal: "",
      vertical: "justify-between w-full max-md:justify-between max-md:w-full"
    }
  }
});
Oe({
  base: "flex align-start justify-start text-content-neutral-bold"
});
Oe({
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
Oe({
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
var Z4 = O({
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
}), X4 = O({
  base: "absolute h-full w-full overflow-hidden flex items-center justify-center",
  variants: {
    emphasis: {
      highlight: "bg-interactive-highlight",
      minimal: "bg-interactive-neutral-minimal",
      neutral: "bg-surface-level-01",
      regular: "bg-interactive-neutral-regular"
    }
  }
}), dm = O({
  variants: {
    appearance: {
      highlight: "text-content-highlight",
      neutral: "text-content-neutral-bold",
      "neutral-inverse": "text-content-inverse-bold"
    }
  }
}), Y4 = O({
  base: "object-cover h-full w-full",
  variants: {
    imageLoadFail: {
      true: "hidden"
    }
  }
}), $a = ({
  active: t = !1,
  appearance: n = "neutral",
  "aria-label": l,
  bgClassname: o,
  className: s,
  disabled: u,
  emphasis: f = "regular",
  icon: d,
  imageSrc: p,
  label: h,
  onClick: y,
  shape: v = "circle",
  size: g = "medium",
  ...S
}) => {
  const [C, x] = E.useState(!1);
  E.useEffect(() => {
    x(!1);
  }, [p]);
  const F = y ? "button" : "div";
  return /* @__PURE__ */ $.createElement(Ur, null, /* @__PURE__ */ $.createElement(
    F,
    {
      "aria-label": l,
      className: Z4({
        active: t,
        className: s,
        disabled: u,
        onClick: !!y,
        shape: v,
        size: g
      }),
      "data-size": g,
      disabled: u,
      onClick: y,
      ...S
    },
    /* @__PURE__ */ $.createElement(
      "div",
      {
        className: X4({ className: o, emphasis: f })
      },
      (!d && !p || C) && /* @__PURE__ */ $.createElement(
        pt,
        {
          className: dm({ appearance: n }),
          fontWeight: "bold",
          size: e8[g],
          variant: "body"
        },
        h
      ),
      p && /* @__PURE__ */ $.createElement(
        "img",
        {
          alt: l,
          className: Y4({ imageLoadFail: C }),
          onError: () => x(!0),
          src: p
        }
      ),
      Tt(
        {
          className: dm({ appearance: n }),
          size: J4[g]
        },
        d
      )
    )
  ));
}, J4 = {
  large: "large",
  medium: "medium",
  small: "small",
  "x-small": "x-small",
  "xx-small": "x-small"
}, e8 = {
  large: "large",
  medium: "medium",
  small: "small",
  "x-small": "x-small",
  "xx-small": "x-small"
}, vc = ({
  active: t = !1,
  authenticated: n = !0,
  badge: l = !1,
  badgeCutoutColor: o,
  className: s,
  disabled: u,
  emphasis: f = "regular",
  imageSrc: d,
  label: p,
  onClick: h,
  size: y = "medium",
  ...v
}) => {
  const g = () => {
    const S = {
      imageSrc: d
    }, C = {
      icon: /* @__PURE__ */ $.createElement(zg, { "data-testid": "@paloma-avatar-icon-unauthenticated-id" })
    };
    return /* @__PURE__ */ $.createElement(
      $a,
      {
        active: t,
        className: s,
        disabled: u,
        emphasis: f,
        label: p,
        onClick: h,
        shape: "circle",
        size: y,
        ...n ? S : C,
        ...v
      }
    );
  };
  return /* @__PURE__ */ $.createElement($.Fragment, null, l && /* @__PURE__ */ $.createElement(
    Ca,
    {
      appearance: "highlight",
      cutoutColor: o,
      "data-testid": "@paloma-avatar-badge-id",
      position: "bottom-right",
      shape: "circle",
      size: "x-small",
      variant: "dot"
    },
    g()
  ), !l && g());
};
O({
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
O({
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
O({
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
var t8 = O({
  base: "@paloma-link group inline-flex items-center gap-2 no-underline rounded-sm outline-none text-inherit text-content-highlight aria-disabled:pointer-events-none aria-disabled:opacity-30"
}), r8 = O({
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
}), n8 = E.forwardRef(
  ({
    "aria-current": t,
    "aria-expanded": n,
    "aria-label": l,
    as: o,
    bold: s,
    children: u,
    className: f,
    disabled: d,
    hoverUnderline: p = !0,
    href: h,
    leadingIcon: y,
    onBlur: v,
    onClick: g,
    onFocus: S,
    size: C = "medium",
    target: x,
    trailingIcon: F,
    underline: W = !1,
    ...L
  }, X) => {
    const J = Ag("a"), fe = o ?? J, ce = E.useRef(null), { linkProps: ue } = Jm(
      { isDisabled: d, onBlur: v, onFocus: S, onPress: g },
      ce
    ), pe = Te(ue, L);
    return /* @__PURE__ */ $.createElement(Ur, { disabled: d }, /* @__PURE__ */ $.createElement(
      fe,
      {
        ...pe,
        "aria-current": t,
        "aria-disabled": d,
        "aria-expanded": n,
        "aria-label": l,
        className: t8({
          class: f
        }),
        "data-bold": Ke(s),
        "data-hover-underline": Ke(p),
        "data-size": Ke(C),
        "data-underline": Ke(W),
        disabled: d,
        href: h,
        ref: Hr(X, ce),
        tabIndex: 0,
        target: x
      },
      Tt({ size: C }, y),
      /* @__PURE__ */ $.createElement(
        pt,
        {
          className: r8({ hoverUnderline: p, underline: W }),
          fontWeight: s ? "bold" : "normal",
          size: C,
          underline: W,
          variant: "body"
        },
        u
      ),
      Tt({ size: C }, F)
    ));
  }
);
O({
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
var fm = O({
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
}), l8 = ({
  children: t,
  className: n,
  current: l = !1,
  href: o,
  leadingIcon: s,
  ...u
}) => {
  if (!o)
    return /* @__PURE__ */ $.createElement(
      pt,
      {
        "aria-current": l ? "page" : void 0,
        className: fm({
          className: n,
          current: l,
          hasLeadingIcon: !!s
        }),
        size: "small",
        ...u
      },
      Tt({ size: "small" }, s),
      t
    );
  const f = l ? {
    "aria-current": "page",
    hoverUnderline: !0,
    underline: !1
  } : {};
  return /* @__PURE__ */ $.createElement(
    n8,
    {
      className: fm({ className: n, current: l }),
      href: o,
      leadingIcon: s,
      size: "small",
      ...f,
      ...u
    },
    t
  );
};
l8.displayName = "Breadcrumb.Item";
var i8 = O({
  base: "@paloma-divider data-[emphasis=bold]:border-neutral-bold data-[emphasis=minimal]:border-neutral-minimal data-[emphasis=regular]:border-neutral-regular data-[emphasis=subtle]:border-neutral-subtle",
  variants: {
    orientation: {
      horizontal: "border-x-0 border-b-0 border-t-[1px] mx-0 my-1 w-full min-h-[1px]",
      vertical: "border-y-0 border-r-0 border-l-[1px] mx-1 my-0 min-w-[1px]"
    }
  }
}), Uo = ({
  className: t,
  emphasis: n = "regular",
  orientation: l = "horizontal",
  role: o = "separator",
  ...s
}) => {
  const u = l === "horizontal", f = l === "vertical";
  return /* @__PURE__ */ $.createElement(
    "hr",
    {
      className: i8({
        className: t,
        orientation: l
      }),
      "data-emphasis": n,
      "data-is-orientation-horizontal": Ke(u),
      "data-is-orientation-vertical": Ke(f),
      role: o,
      ...s
    }
  );
}, qc = O({
  variants: {
    size: {
      large: "gap-5",
      medium: "gap-4",
      small: "gap-3",
      "x-small": "gap-3"
    }
  }
});
O({
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
  extend: qc,
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
O({
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
  extend: qc,
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
O({
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
O({
  variants: {
    truncate: {
      false: "",
      true: "truncate min-w-0"
    }
  }
});
O({
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
O({
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
O({
  base: "flex flex-shrink-0",
  defaultVariants: {
    longform: !1
  },
  extend: qc,
  variants: {
    longform: {
      false: "items-center",
      true: "items-start"
    }
  }
});
O({
  base: "text-content-neutral-bold",
  variants: {
    isExpanded: {
      true: "rotate-180"
    }
  }
});
O({
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
O({
  base: "text-content-neutral-bold h-[1lh]",
  variants: {
    size: {
      large: "leading-[--line-height-body-large]",
      medium: "leading-[--line-height-body-medium]",
      small: "leading-[--line-height-body-small]"
    }
  }
});
E.createContext({
  mode: "light",
  theme: "ea-blue",
  themeId: "",
  themeVariant: void 0,
  variant: "ea-blue"
});
var o8 = O({
  base: "relative overflow-hidden"
}), a8 = O({
  base: "rounded-lg [[tabindex='0']&:focus-visible]:outline [[tabindex='0']&:focus-visible]:outline-2 [[tabindex='0']&:focus-visible]:outline-offset-[-3px] [[tabindex='0']&:focus-visible]:outline-interactive-highlight",
  variants: {
    orientation: {
      horizontal: "overflow-x-auto overflow-y-hidden h-full w-full",
      vertical: "overflow-y-auto overflow-x-hidden w-full h-full"
    }
  }
}), s8 = O({
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
function Hu(t, n, l) {
  return !(n <= t || l + t >= n - 3);
}
function Uu(t, n) {
  return n === "horizontal" ? t.scrollLeft : t.scrollTop;
}
$.forwardRef(
  ({
    as: t,
    children: n,
    className: l,
    contentClassName: o,
    orientation: s = "vertical",
    scrollableTabIndex: u = 0,
    ...f
  }, d) => {
    const p = t ?? "div", [h, y] = $.useState(), v = $.useRef(null);
    return $.useEffect(() => {
      if (!v.current)
        return;
      const g = v.current, S = () => s === "horizontal" ? {
        containerSize: g.clientWidth,
        contentSize: g.scrollWidth
      } : {
        containerSize: g.clientHeight,
        contentSize: g.scrollHeight
      }, { containerSize: C } = S(), { contentSize: x } = S(), F = Uu(g, s);
      y(
        Hu(C, x, F)
      );
      const W = () => {
        y(
          Hu(
            C,
            x,
            Uu(g, s)
          )
        );
      };
      g.addEventListener("scroll", W, pm);
      let L;
      const X = () => {
        clearTimeout(L), L = setTimeout(() => {
          y(
            Hu(
              S().containerSize,
              S().contentSize,
              Uu(g, s)
            )
          );
        }, 100);
      };
      return window.addEventListener("resize", X, pm), () => {
        g.removeEventListener("scroll", W), window.removeEventListener("resize", W), clearTimeout(L);
      };
    }, [s]), /* @__PURE__ */ $.createElement(
      p,
      {
        className: o8({ className: l }),
        "data-testid": "scrollable-container-wrapper",
        ref: d,
        ...f
      },
      /* @__PURE__ */ $.createElement(
        "div",
        {
          className: a8({
            className: o,
            orientation: s
          }),
          "data-testid": "scrollable-container",
          ref: v,
          tabIndex: u
        },
        n
      ),
      /* @__PURE__ */ $.createElement(
        "div",
        {
          className: s8({ isFadeVisible: h, orientation: s }),
          "data-testid": "scrollable-fade-overlay"
        }
      )
    );
  }
);
var pm = { passive: !0 };
O({
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
O({
  base: "bg-surface-container border border-solid border-neutral-subtle rounded-xl outline-none flex flex-col max-h-screen group-data-[orientation=horizontal]/menu:w-[inherit] group-data-[variant=mega]/menu:w-auto group-data-[variant=mega]/menu:max-w-[1440px] group-data-[variant=mega]/menu:mx-2 lg:group-data-[variant=mega]/menu:mx-10 overflow-auto",
  variants: {
    isPopoverMatchTriggerWidth: {
      false: "group-data-[variant=standard]/menu:w-[250px]",
      true: "group-data-[variant=standard]/menu:w-[--trigger-width]"
    }
  }
});
O({
  base: "w-full box-border rounded-lg pl-4 pr-0 outline-none data-[focus-visible]:shadow-[inset_0_0_0_2px_var(--interactive-highlight-color)]"
});
O({
  base: "w-full rounded-lg"
});
O({
  base: "flex max-w-full flex-col items-start rounded-lg"
});
O({
  variants: {
    layout: {
      menu: "group-data-[variant=standard]/menu:p-2",
      panel: "flex flex-col items-start group-data-[variant=standard]/menu:p-2"
    }
  }
});
O({
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
O({
  base: "h-1 w-1 bg-content-neutral-bold/[0.15] rounded-full",
  variants: {
    isCurrent: {
      true: "w-12"
    }
  }
});
O({
  base: "flex flex-col gap-4 flex-grow w-full"
});
O({
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
var u8 = O({
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
}), c8 = O({
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
}), d8 = O({
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
}), f8 = O({
  base: "flex items-center justify-center box-border min-w-6 min-h-6 rounded-full border-1 border-solid border-neutral-subtle bg-surface-level-01",
  variants: {
    isBadgeAmountLong: {
      true: "px-1"
    },
    selected: {
      true: "border-none bg-surface-highlight-bold text-content-inverse-bold"
    }
  }
}), p8 = O({
  variants: {
    disabled: {
      false: "rounded-full mx-0.5 hover:bg-content-neutral-bold/[0.08] hover:active:bg-content-neutral-bold/[0.12]"
    }
  }
}), h8 = O({
  base: "content-neutral-regular"
}), ui = ({
  badge: t,
  chipContentClassname: n,
  className: l,
  disabled: o,
  dismissLabel: s,
  dismissible: u = !1,
  emphasis: f = "minimal",
  label: d,
  leadingContent: p,
  onClick: h,
  onDismiss: y,
  selected: v = !1,
  size: g = "small",
  truncate: S = !1
}) => {
  const { pressProps: C } = fi({
    isDisabled: o,
    onPress: h
  }), x = h ? "button" : "div", F = {};
  h && (Object.assign(F, C), F["aria-disabled"] = o, F.disabled = o, F.role = "button");
  const W = p !== void 0 && dv(p), L = typeof t == "number" && !Number.isNaN(t), X = u && !!y, J = !!h && !o, fe = L && t >= 100, ce = !L && !!X, { avatar: ue, icon: pe, product: ge } = c8({ size: g });
  return ft(
    p === void 0 || p.type === vc || W || p.type === im,
    "The Leading content must be an Avatar, ProductLogo or @paloma/icons component."
  ), /* @__PURE__ */ $.createElement(Ur, null, /* @__PURE__ */ $.createElement(
    x,
    {
      className: u8({
        className: l,
        disabled: o,
        emphasis: f,
        hasLeadingContent: !!p,
        hasOnlyBadge: L,
        isDismissible: X,
        isIconComponent: W,
        isInteractive: J,
        selected: v,
        size: g
      }),
      "data-testid": "@paloma-chip-id",
      ...F
    },
    p?.type === vc && // Paddings depending on size
    /* @__PURE__ */ $.createElement("div", { className: ue(), "data-testid": "@paloma-chip-avatar" }, $.cloneElement(p, {
      size: m8[g]
    })),
    p?.type === im && // Paddings depending on size
    /* @__PURE__ */ $.createElement("div", { className: ge(), "data-testid": "@paloma-chip-product-logo" }, $.cloneElement(p, {
      as: "div",
      contained: !0,
      shape: "square",
      size: g8[g]
    })),
    W && // Paddings according to size
    /* @__PURE__ */ $.createElement("div", { className: pe(), "data-testid": "@paloma-chip-icon" }, $.cloneElement(p, { size: g })),
    /* @__PURE__ */ $.createElement(
      "div",
      {
        className: d8({
          className: n,
          hasOnlyDismissButton: ce,
          truncate: S
        }),
        "data-testid": "@paloma-chip-content-id"
      },
      /* @__PURE__ */ $.createElement(
        pt,
        {
          className: h8(),
          fontWeight: v ? "bold" : "normal",
          size: g,
          truncate: S,
          variant: "body"
        },
        d
      ),
      (L || X) && /* @__PURE__ */ $.createElement(
        "div",
        {
          className: "flex items-center",
          "data-testid": "@paloma-chip-trailing-content-id"
        },
        L && /* @__PURE__ */ $.createElement(
          "div",
          {
            className: f8({ isBadgeAmountLong: fe, selected: v }),
            "data-testid": "@paloma-chip-badge-id"
          },
          /* @__PURE__ */ $.createElement(pt, { size: "x-small", variant: "body" }, t)
        ),
        X && !v && /* @__PURE__ */ $.createElement(
          "div",
          {
            className: p8({ disabled: o }),
            "data-testid": "@paloma-chip-dismiss-button-id"
          },
          /* @__PURE__ */ $.createElement(
            E2,
            {
              "aria-label": s,
              className: "text-content-neutral-bold",
              disabled: o,
              onClick: y,
              size: g
            }
          )
        )
      )
    )
  ));
}, m8 = {
  medium: "small",
  small: "x-small",
  "x-small": "xx-small"
}, g8 = {
  medium: "x-small",
  small: "2x-small",
  "x-small": "2x-small"
};
O({
  base: "flex py-5 border-solid border-[1px] backdrop-blur-surface",
  variants: {
    placement: {
      inline: "w-full bg-content-inverse-subtle rounded-lg border-neutral-subtle",
      top: "bg-surface-container justify-center sticky top-0 left-0 right-0 border-solid border-b-1 border-x-0 border-t-0 border-neutral-subtle max-[1440px]:px-5"
    }
  }
});
O({
  base: "flex gap-4 max-lg:flex-col lg:flex-row lg:justify-between w-full",
  variants: {
    placement: {
      inline: "flex-1 px-6",
      top: "max-w-[1440px]"
    }
  }
});
Oe({
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
Oe({
  base: "text-content-neutral-bold"
});
Oe({
  // Target the logos text to hide on mobile only
  base: "text-content-neutral-bold [&_span[data-logo-product-name=paloma-logo]]:max-lg:hidden"
});
Oe({
  variants: {
    isOpen: {
      false: "bg-transparent",
      true: ""
    }
  }
});
O({
  base: "w-10 h-10",
  variants: {
    size: {
      large: "lg:w-20 lg:h-20",
      // 60px
      medium: "lg:w-[3.75rem] lg:h-[3.75rem]"
    }
  }
});
O({
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
O({
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
O({
  base: "relative",
  variants: {
    size: {
      large: "h-11 lg:h-20",
      medium: "h-11"
    }
  }
});
O({
  base: "h-full"
});
O({
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
O({
  base: "lg:col-span-8",
  variants: {
    alignment: {
      centered: "!col-start-3",
      left: "",
      right: ""
    }
  }
});
O({
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
var v8 = O({
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
}), y8 = O({
  base: [
    "absolute top-0 left-0 right-0 bottom-0",
    "rounded-full border-none",
    "group-hover:bg-content-neutral-bold/[0.08]",
    "group-active:bg-content-neutral-bold/[0.12]",
    "group-hover:group-active:bg-content-neutral-bold/[0.12]"
  ]
});
E.forwardRef(
  ({
    as: t,
    className: n,
    disabled: l,
    href: o,
    icon: s,
    label: u,
    onBlur: f,
    onClick: d,
    onFocus: p,
    size: h = "medium",
    ...y
  }, v) => {
    const g = t ?? (o ? "a" : "button"), S = E.useRef(null), { buttonProps: C } = pa(
      { isDisabled: l, onBlur: f, onFocus: p, onPress: d },
      S
    ), { linkProps: x } = Jm(
      { href: o, isDisabled: l, onBlur: f, onFocus: p, onPress: d },
      S
    ), F = Te(
      y,
      g === "a" ? x : void 0,
      g === "button" ? C : void 0
    );
    return /* @__PURE__ */ $.createElement(Ur, null, E.createElement(
      g,
      {
        "aria-disabled": l,
        className: v8({
          className: n,
          disabled: l,
          size: h
        }),
        ref: Hr(S, v),
        ...F
      },
      /* @__PURE__ */ $.createElement("div", { className: "relative" }, /* @__PURE__ */ $.createElement(
        Ea,
        {
          "aria-hidden": "true",
          as: "div",
          iconOnly: !0,
          leadingIcon: s,
          size: h,
          variant: "secondary"
        }
      ), /* @__PURE__ */ $.createElement(
        "div",
        {
          "aria-hidden": "true",
          className: y8(),
          "data-vrt-overlay": !0
        }
      )),
      /* @__PURE__ */ $.createElement(pt, { size: h, variant: "body" }, u)
    ));
  }
);
O({
  base: "w-full"
});
O({
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
O({
  base: [
    // Grid classes
    "lg:col-span-4",
    // Flex classes (for all breakpoints)
    "flex flex-row gap-4",
    // Flex classes for desktop
    "lg:justify-end"
  ]
});
O({
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
Oe({
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
Oe({
  base: "blur-[4px]"
});
Oe({
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
Oe({
  base: "blur-[50px]"
});
Oe({
  base: "absolute  h-auto w-[175%] md:w-[100%] lg:w-[82%] -right-[50%] md:-right-[10%] lg:right-[5%] lg:-bottom-20",
  variants: {
    browserVariant: {
      chrome: "bottom-0 md:bottom-20",
      notChrome: "top-28 md:top-auto md:bottom-40"
    }
  }
});
Oe({
  base: "absolute  h-auto w-[200%] md:w-full lg:w-[90%] -left-[50%] md:left-0 lg:left-[5%] lg:-bottom-20",
  variants: {
    browserVariant: {
      chrome: "bottom-0 md:bottom-20",
      notChrome: "top-28 md:top-auto md:bottom-40"
    }
  }
});
O({
  base: [
    "flex flex-col",
    "bg-surface-container backdrop-blur-surface",
    "border border-solid border-neutral-subtle",
    "text-content-neutral-bold rounded-xl w-[256px] px-6 py-2"
  ]
});
O({
  base: "flex py-4 w-full items-center",
  variants: {
    size: {
      medium: "mb-2 text-content-highlight gap-4",
      small: "mb-1 gap-2"
    }
  }
});
O({
  base: "py-4"
});
Oe({
  base: "@paloma-logo flex flex-row gap-2 items-center"
});
O({
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
O({
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
O({
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
O({
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
O({
  base: "w-full",
  variants: {
    orientation: {
      horizontal: "rounded-lg",
      vertical: "rounded-xl"
    }
  }
});
O({
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
O({
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
O({
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
O({
  base: "w-full flex flex-col gap-2 items-center md:[&[data-trailing-bottom=true]]:items-end [&>button]:w-full md:[&>button]:w-auto"
});
Oe({
  base: "@paloma-mega-menu-content data-[orientation=vertical]:p-6 data-[orientation=horizontal]:py-12 data-[orientation=horizontal]:px-8 data-[orientation=horizontal]:w-[-webkit-fill-available]"
});
var kv = E.createContext(null);
kv.Provider;
var b8 = () => {
  const t = E.useContext(kv);
  return ft(
    t !== null,
    "useModalContext must be used within a ModalProvider."
  ), t;
}, x8 = O({
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
E.forwardRef(
  ({ children: t, className: n, hasFooter: l, ...o }, s) => {
    const { asBottomSheet: u } = b8();
    return /* @__PURE__ */ $.createElement(
      "div",
      {
        className: x8({ asBottomSheet: u, class: n, hasFooter: l }),
        ref: s,
        ...o
      },
      t
    );
  }
);
O({
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
O({
  base: "max-sm:max-w-full",
  variants: {
    asBottomSheet: {
      true: "max-w-full flex-grow-[1] basis-[0%]"
    }
  }
});
O({
  base: [
    // Positioning
    "absolute overflow-hidden pointer-events-none",
    // Sizing
    "w-full h-5 rounded-2xl"
  ]
});
O({
  base: "h-10",
  // Color and effect
  variants: {
    isScrollOverlayVisible: {
      true: "bg-surface-overlay blur-[18px]"
    }
  }
});
O({
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
O({
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
O({
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
O({
  base: "flex flex-col h-[100vh] h-[100dvh] h-[calc(var(--vh)*100)] min-h-[100vh] min-h-[100dvh] overscroll-none"
});
O({
  base: "flex-none h-[106px] pb-[env(safe-area-inset-bottom)]"
});
var _v = "motion-safe:animate-in motion-safe:fade-in motion-safe:duration-300 motion-safe:ease-out", Fv = "motion-safe:animate-out motion-safe:fade-out motion-safe:duration-300 motion-safe:ease-in";
O({
  variants: {
    isEntering: {
      true: _v
    },
    isExiting: {
      true: Fv
    }
  }
});
O({
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
      class: _v,
      classNameIsFunction: !1,
      isEntering: !0
    },
    {
      class: Fv,
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
O({
  base: "text-content-neutral-bold flex-1 m-0"
});
O({
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
O({
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
O({
  base: "bg-surface-highlight-bold h-full transition-all duration-300 ease-in-out rounded-full motion-reduce:transition-none"
});
O({
  base: "justify-self-end grid-in-[percent] text-content-neutral-bold"
});
O({
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
O({
  base: "stroke-[var(--border-neutral-subtle-color)]"
});
O({
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
O({
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
O({
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
O({
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
O({
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
var Xl = ({
  "aria-label": t,
  children: n,
  className: l,
  emphasis: o,
  equalWidth: s,
  leadingIcon: u,
  selected: f,
  size: d,
  trailingIcon: p,
  ...h
}) => {
  const y = $.useRef(null), v = o === "bold" || f ? "bold" : "normal", g = n === void 0;
  $.useEffect(() => {
    g && ((t === void 0 || t === "") && Un(
      "A SegmentedControlOption without text content should have an non-empty aria-label prop"
    ), u || Un(
      "A SegmentedControlOption needs to have text content or a `leadingIcon` with aria-label"
    ), p && Un(
      "A SegmentedControlOption without text content won't render a `trailingIcon`"
    ));
  }, [g, t, u, p]);
  const S = { size: d }, C = d === "x-small", x = d === "small", L = d === "medium" || d === "large", X = C || x, J = !h.disabled && !f;
  return /* @__PURE__ */ $.createElement(
    Dw,
    {
      "aria-label": t,
      className: rt(
        {
          /* TODO: Refactor this to use tailwind-variants once the conditional logic can be simplified. */
          // Static classes
          "@paloma-sc-option rounded-full z-10 p-2 cursor-pointer outline-none text-content-neutral-regular transition-colors duration-500 motion-reduce:transition-none focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-interactive-highlight focus-visible:outline-[3px]": !0,
          "focus-visible:outline-offset-[1px]": X,
          // Interaction states
          "hover:bg-content-neutral-regular/[0.08] active:bg-content-neutral-regular/[0.12] hover:active:bg-content-neutral-regular/[0.12]": J,
          "min-w-0": s
        },
        // Size
        g && {
          "@paloma-sc-option-empty": !0,
          "py-2 px-2": C,
          "py-3 px-3": x,
          "py-4 px-4": L
        },
        !g && {
          "@paloma-sc-option-not-empty": !0,
          "py-2 px-3": C,
          "py-3 px-4": x,
          "py-4 px-5": L
        },
        l
      ),
      "data-is-medium-or-large": L,
      "data-is-selectable": J,
      "data-is-x-small-or-small": X,
      isDisabled: h.disabled,
      ...h,
      ref: y
    },
    /* @__PURE__ */ $.createElement(
      "div",
      {
        className: rt({
          /* TODO: Refactor this to use tailwind-variants once the conditional logic can be simplified. */
          "@paloma-sc-option-content flex flex-row flex-nowrap items-center justify-center w-full data-[selected=true]:data-[emphasis=bold]:text-content-inverse-bold data-[selected=true]:data-[emphasis=regular]:text-content-neutral-bold": !0,
          // Size
          "focus-visible:outline-offset-[1px]": x,
          "gap-1": X,
          "gap-2": L,
          "min-w-0": s
        }),
        "data-emphasis": o,
        "data-selected": f,
        "data-testid": "@paloma-sc-option-content-id"
      },
      Tt(S, u),
      !g && /* @__PURE__ */ $.createElement("div", { className: "relative min-w-0 text-center" }, /* @__PURE__ */ $.createElement(
        pt,
        {
          "aria-hidden": "true",
          as: "div",
          "before-content": n,
          className: rt({
            /* TODO: Refactor this to use tailwind-variants once the conditional logic can be simplified. */
            "@paloma-sc-option-hidden-label break-keep whitespace-nowrap opacity-0 w-full": !0,
            "truncate ": s
          }),
          "data-testid": "@paloma-sc-option-hidden-label-id",
          fontWeight: "bold",
          size: d
        },
        n
      ), /* @__PURE__ */ $.createElement(
        pt,
        {
          as: "div",
          "before-content": n,
          className: rt(
            /* TODO: Refactor this to use tailwind-variants once the conditional logic can be simplified. */
            "@paloma-sc-option-label break-keep whitespace-nowrap absolute top-0 w-full transition-[color,font-weight] duration-150 motion-reduce:transition-none",
            {
              "truncate ": s
            }
          ),
          "data-testid": "@paloma-sc-option-label-id",
          fontWeight: v,
          size: d
        },
        n
      )),
      !g && Tt(S, p)
    )
  );
}, Pv = $.forwardRef(
  ({
    children: t,
    className: n,
    emphasis: l,
    equalWidth: o,
    isOverScrolled: s,
    selectedOptionId: u,
    size: f,
    ...d
  }, p) => {
    $.useEffect(() => {
      Fg(
        t,
        "SegmentedControlOptionList must have children"
      ), ft(
        $.Children.toArray(t).every(
          (x) => ai(x, Xl)
        ),
        "All of the children of `SegmentedControlOptionList` should be `SegmentedControlOption`"
      );
      const S = $.Children.map(
        t,
        (x) => x.props.selected
      );
      ft(
        S.length === 0,
        "Options inside a SegmentedControl should not have a `selected` prop. SegmentedControl will override them. Either use the `value` or `defaultValue` props of SegmentedControl."
      );
      const C = $.Children.map(
        t,
        (x) => x.props.id
      );
      ft(
        new Set(C).size === C.length,
        "All ids on the Options of a SegmentedControlOptionList must be unique"
      );
    }, [t]);
    const h = f === "small" || f === "x-small", y = f === "medium" || f === "large", v = $.Children.toArray(
      t
    )[0], g = u ?? v?.props.id;
    return /* @__PURE__ */ $.createElement(
      jw,
      {
        ...d,
        className: rt(
          {
            /* TODO: Refactor this to use tailwind-variants once the conditional logic can be simplified. */
            "@paloma-scol flex flex-row rounded-full max-w-full w-fit": !0,
            // Size
            "gap-1": h,
            "gap-2": y,
            // Equal Width
            "w-full justify-stretch": o
          },
          n
        ),
        "data-large-gap": Ke(y),
        "data-small-gap": Ke(h),
        ref: p
      },
      $.Children.map(
        t,
        (S) => ai(
          S,
          Xl,
          (C, x) => {
            const { className: F, id: W, ...L } = x;
            return $.cloneElement(C, {
              className: rt(
                { "w-full justify-start": o },
                F
              ),
              emphasis: l,
              equalWidth: o,
              id: W,
              selected: W === g,
              size: f,
              ...L
            });
          }
        )
      ),
      s && /* @__PURE__ */ $.createElement(
        Xl,
        {
          "aria-hidden": "true",
          className: "p-[1px]",
          "data-paloma-overflow-spacer": "",
          "data-testid": "@paloma-scol-hidden-option-id",
          disabled: !0,
          id: `id-${$.Children.toArray(t).length + 1}`
        },
        /* @__PURE__ */ $.createElement("div", null)
      )
    );
  }
), w8 = O({
  base: "rounded [[tabindex='0']&:focus-visible]:outline [[tabindex='0']&:focus-visible]:outline-2 [[tabindex='0']&:focus-visible]:outline-offset-2 [[tabindex='0']&:focus-visible]:outline-interactive-highlight"
}), S8 = $.forwardRef(
  ({ className: t, isActive: n, ...l }, o) => /* @__PURE__ */ $.createElement(
    Ow,
    {
      ...l,
      className: rt(
        /* TODO: Refactor this to use tailwind-variants once the conditional logic can be simplified. */
        "@paloma-segmented-control-panel",
        w8(),
        t
      ),
      ref: o,
      shouldForceMount: !0,
      style: { display: n ? "block" : "none" }
    }
  )
), C8 = O({
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
}), E8 = O({
  base: "[[tabindex='0']&:focus-visible]:outline [[tabindex='0']&:focus-visible]:outline-2 [[tabindex='0']&:focus-visible]:outline-offset-2 [[tabindex='0']&:focus-visible]:outline-interactive-highlight"
});
function Nv(t, n, l) {
  const o = n.getBoundingClientRect(), s = t.getBoundingClientRect(), u = Math.floor(o.left), f = Math.floor(s.left), d = Math.floor(o.right), p = Math.floor(s.right), h = u - f + l, y = p - d + l, v = Math.floor(o.width);
  return {
    left: h,
    right: y,
    visibility: "initial",
    width: v
  };
}
function $8({
  activeTab: t,
  listContainerEl: n,
  relativeContainerEl: l
}) {
  if (!t.isConnected || !n.isConnected || !l.isConnected || !l.scrollTo)
    return;
  const o = l.style.padding, s = hv(o) ?? 0, u = Nv(n, t, s), f = l.scrollLeft, p = Number(u.left) + Number(u.width) - l.clientWidth, h = Number(u.left ?? 0), y = p >= f, v = f >= h;
  if (!y && !v)
    return;
  const g = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";
  y && l.scrollTo({
    behavior: g,
    left: p + 8
  }), v && l.scrollTo({
    behavior: g,
    left: h - 8
  });
}
var k8 = (t) => Array.from(
  t.querySelectorAll("[role=tab]")
).filter((n) => n.parentElement === t && n.isConnected), _8 = ({
  children: t,
  className: n,
  containerClassName: l,
  defaultValue: o,
  disabled: s,
  emphasis: u = "regular",
  equalWidth: f,
  onChange: d,
  size: p = "medium",
  sticky: h,
  value: y,
  ...v
}) => {
  const g = p === "small" || p === "x-small", S = p === "medium" || p === "large", C = u === "bold", x = u === "regular", F = y !== void 0, [W, L] = $.useState({
    left: 0,
    right: 0,
    width: 0
  }), [X, J] = $.useState(!1), fe = E.useRef(null), ce = E.useRef(null), ue = (M, z) => M.length === z.length && M.every((R, T) => R === z[T]);
  $.useEffect(() => {
    const [M, ...z] = $.Children.toArray(t), T = $.Children.toArray(
      M?.props?.children
    ).map((_) => _.props.id);
    ft(
      !y || T.includes(y),
      `There's no Option with the id ${y}`
    ), ft(
      !o || T.includes(o),
      `There's no Option with the id ${o}`
    );
    const B = z.map((_) => _.props.id);
    ft(
      B.length === 0 || ue(B, T),
      "The ids on the SegmentedControlOptions and the ids on the SegmentedControlPanels do not match"
    );
  }, [y, t, o]);
  const [pe, ge] = G3({
    controlledValue: y,
    defaultValue: o
  }), Ce = $.useCallback(() => {
    const M = fe.current, z = ce.current;
    if (!M || !z || !M.isConnected || !z.isConnected)
      return J(!1), !1;
    const R = z.querySelector(
      "[data-paloma-overflow-spacer]"
    ), T = R instanceof HTMLElement ? R.offsetWidth : 0, B = z.scrollWidth - T > z.clientWidth;
    return J(B), B;
  }, []), ye = $.useCallback(() => {
    const M = fe.current, z = ce.current;
    if (!M || !z || !M.isConnected || !z.isConnected)
      return null;
    const R = k8(M).find(
      (T) => T.dataset.selected === "true"
    );
    return R ? {
      activeTab: R,
      listContainerEl: M,
      relativeContainerEl: z
    } : null;
  }, []), K = $.useCallback(
    (M) => {
      const z = M ?? ye();
      if (!z)
        return;
      const { activeTab: R, listContainerEl: T, relativeContainerEl: B } = z, _ = B.style.padding, V = hv(_) ?? 0, de = Nv(T, R, V);
      L((ae) => ({
        ...ae,
        ...de
      }));
    },
    [ye]
  ), G = $.useCallback(
    (M) => {
      const z = M ?? ye();
      if (!z)
        return;
      const { activeTab: R, listContainerEl: T, relativeContainerEl: B } = z;
      $8({ activeTab: R, listContainerEl: T, relativeContainerEl: B });
    },
    [ye]
  ), N = $.useCallback(() => {
    Ce();
    const M = ye();
    return M ? (K(M), G(M), !0) : !1;
  }, [
    ye,
    G,
    Ce,
    K
  ]);
  q3(() => {
    K(), G();
  }, [
    p,
    u,
    f,
    pe,
    K,
    G
  ]), $.useEffect(() => {
    let M = !1, z = null;
    const R = (T) => {
      z = requestAnimationFrame(() => {
        if (M)
          return;
        !N() && T > 1 && R(T - 1);
      });
    };
    return R(2), () => {
      M = !0, z !== null && cancelAnimationFrame(z);
    };
  }, [p, u, f, pe, N]), $.useEffect(() => {
    window.addEventListener("resize", N, F8);
    const M = new MutationObserver(N);
    return M.observe(document.documentElement, {
      attributeFilter: ["dir"],
      attributes: !0
    }), () => {
      window.removeEventListener("resize", N), M.disconnect();
    };
  }, [N]);
  const U = $.useCallback(
    (M) => {
      ge?.(M), d?.(M);
    },
    [d, ge]
  );
  return /* @__PURE__ */ $.createElement(
    Lw,
    {
      className: rt(
        /* TODO: Refactor this to use tailwind-variants once the conditional logic can be simplified. */
        "@paloma-segmented-control flex flex-col w-full",
        { "gap-8": !h },
        n
      ),
      "data-is-bold-emphasis": Ke(C),
      "data-is-controlled": Ke(F),
      "data-is-medium-or-large": Ke(S),
      "data-is-regular-emphasis": Ke(x),
      "data-is-x-small-or-small": Ke(g),
      defaultSelectedKey: F ? void 0 : pe,
      isDisabled: s,
      onSelectionChange: U,
      selectedKey: F ? pe : void 0,
      ...v
    },
    /* @__PURE__ */ $.createElement(
      "div",
      {
        className: rt(
          {
            /* TODO: Refactor this to use tailwind-variants once the conditional logic can be simplified. */
            "@paloma-sc-relative-container relative rounded-full max-w-full overflow-x-auto w-fit mx-auto box-border": !0,
            // Emphasis
            "bg-surface-level-02": x,
            "bg-surface-level-03": C,
            // Disabled
            "opacity-40": s,
            // Sticky styles
            "sticky top-[90vh] z-10 backdrop-blur-surface mx-auto": !!h
          },
          E8(),
          l
        ),
        "data-testid": Ke("@paloma-sc-relative-container-id"),
        ref: ce,
        style: {
          /* Added as styles instead of classes for the reposition function
            (and tests) to be able to read the padding and compensate */
          padding: g ? 4 : 8,
          scrollbarWidth: "none"
        },
        tabIndex: 0
      },
      $.Children.map(
        t,
        (M) => ai(
          M,
          Pv,
          (z) => $.cloneElement(z, {
            disabled: s,
            emphasis: u,
            equalWidth: f,
            isOverScrolled: X,
            ref: fe,
            selectedOptionId: pe,
            size: p,
            sticky: h
          })
        )
      ),
      /* @__PURE__ */ $.createElement(
        "div",
        {
          className: rt({
            /* TODO: Refactor this to use tailwind-variants once the conditional logic can be simplified. */
            "@paloma-sc-animated-bg absolute left-0 rounded-full transition-all motion-reduce:transition-none box-border invisible": !0,
            // Emphasis
            "bg-interactive-neutral-bold": C,
            "bg-interactive-neutral-minimal border-2 border-solid border-neutral-subtle": x,
            // Size
            "top-1 bottom-1": g,
            "top-2 bottom-2": S
          }),
          "data-testid": Ke("@paloma-sc-animated-bg-id"),
          style: W
        }
      )
    ),
    /* @__PURE__ */ $.createElement("div", { className: C8({ size: p, sticky: h }) }, $.Children.map(t, (M) => {
      if (!$.isValidElement(M))
        return null;
      if (ai(M, S8))
        return $.cloneElement(M, {
          ...M.props,
          isActive: M.props.id === pe
        });
    }))
  );
}, F8 = { passive: !0 }, Qc = "absolute rounded-full border-transparent border-[3px] border-solid pointer-events-none", Zc = "absolute opacity-40 pointer-events-none", Xc = {
  large: "w-[68px] h-[68px] lg:w-[132px] lg:h-[132px]",
  medium: "w-[62px] h-[62px]"
}, Yc = {
  large: "w-[72px] h-[72px] lg:w-52 lg:h-52 blur lg:blur-[30px] blur-[10px]",
  medium: "w-[70px] h-[70px] blur-[10px]"
}, Jc = "radial-gradient(circle at center, transparent 67.5%, black 68%)", P8 = "conic-gradient(from 30deg at 50% 50%, rgb(232, 0, 140) 10deg, rgba(241, 77, 86, 0) 60.159deg, rgba(110, 102, 177, 0) 313.812deg, rgba(159, 61, 162, 0) 318.778deg, rgba(222, 9, 143, 0.86) 351.822deg) border-box", N8 = "conic-gradient(from 0deg at 50% 50%, rgba(116, 196, 115, 0) 252.06deg, rgb(0, 194, 211) 296.449deg, rgba(110, 102, 177, 0) 313.812deg, rgba(159, 61, 162, 0) 318.778deg) border-box", T8 = "conic-gradient(from 0deg at 50% 50%, rgba(241, 77, 86, 0) 104.159deg, rgba(245, 113, 60, 0.09) 116.303deg, rgb(255, 199, 0) 188.979deg, rgba(177, 197, 64, 0.04) 242.188deg, rgba(116, 196, 115, 0) 252.06deg) border-box", A8 = "conic-gradient(from 0deg at 47.15% 49.87%, rgb(232, 0, 140) 31.2207deg, rgba(241, 77, 86, 0) 104.159deg, rgba(110, 102, 177, 0) 313.812deg, rgba(159, 61, 162, 0) 318.778deg, rgba(222, 9, 143, 0.86) 351.822deg)", z8 = "conic-gradient(from 0deg at 47.15% 49.87%, rgba(116, 196, 115, 0) 252.06deg, rgb(0, 194, 211) 296.449deg, rgba(110, 102, 177, 0) 313.812deg, rgba(159, 61, 162, 0) 318.778deg)", R8 = "conic-gradient(from 0deg at 47.15% 49.87%, rgba(241, 77, 86, 0) 104.159deg, rgba(245, 113, 60, 0.09) 116.303deg, rgb(255, 199, 0) 188.979deg, rgba(177, 197, 64, 0.04) 242.188deg, rgba(116, 196, 115, 0) 252.06deg)", L8 = ({ className: t, onTransitionEnd: n, size: l }) => /* @__PURE__ */ $.createElement(
  "div",
  {
    className: rt(Qc, t, Xc[l]),
    "data-testid": Ke("@paloma-snazatar-assets-pink-ring"),
    onTransitionEnd: n,
    style: {
      background: P8,
      mask: Jc
    }
  }
), I8 = ({ className: t, size: n }) => /* @__PURE__ */ $.createElement(
  "div",
  {
    className: rt(Qc, t, Xc[n]),
    "data-testid": Ke("@paloma-snazatar-assets-blue-ring"),
    style: {
      background: N8,
      mask: Jc
    }
  }
), j8 = ({ className: t, size: n }) => /* @__PURE__ */ $.createElement(
  "div",
  {
    className: rt(Qc, t, Xc[n]),
    "data-testid": Ke("@paloma-snazatar-assets-yellow-ring"),
    style: {
      background: T8,
      mask: Jc
    }
  }
), M8 = ({ className: t, size: n }) => /* @__PURE__ */ $.createElement(
  "div",
  {
    className: rt(Zc, t, Yc[n]),
    "data-testid": Ke("@paloma-snazatar-assets-pink-glow"),
    style: {
      background: A8,
      backgroundOrigin: "border-box"
    }
  }
), K8 = ({ className: t, size: n }) => /* @__PURE__ */ $.createElement(
  "div",
  {
    className: rt(Zc, t, Yc[n]),
    "data-testid": Ke("@paloma-snazatar-assets-blue-glow"),
    style: {
      background: z8,
      backgroundOrigin: "border-box"
    }
  }
), D8 = ({ className: t, size: n }) => /* @__PURE__ */ $.createElement(
  "div",
  {
    className: rt(Zc, t, Yc[n]),
    "data-testid": Ke("@paloma-snazatar-assets-yellow-glow"),
    style: {
      background: R8,
      backgroundOrigin: "border-box"
    }
  }
), Tv = "[transition-duration:2s] [transition-timing-function:cubic-bezier(0.8, 0, 0.24, 1)] delay-500", O8 = O({
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
      class: Tv,
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
}), V8 = O({
  base: "relative",
  variants: {
    size: {
      large: "lg:w-32 lg:h-32 w-16 h-16",
      medium: "w-[58px] h-[58px]"
    }
  }
}), B8 = O({
  base: [
    "w-full h-full flex justify-center items-center opacity-0",
    Tv,
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
}), H8 = O({
  variants: {
    size: {
      large: "lg:w-16 lg:h-16 lg:[&>svg]:w-16 lg:[&>svg]:h-16",
      medium: ""
    }
  }
});
$.forwardRef(
  ({
    "aria-label": t,
    className: n,
    editable: l,
    imageSrc: o,
    onEdit: s,
    size: u = "large",
    ...f
  }, d) => {
    const [p, h] = E.useState(!1), [y, v] = E.useState(0), [g, S] = E.useState(!0);
    E.useEffect(() => {
      h(!1), v(1);
    }, [o]);
    const C = () => {
      S(!1), v(y === 3 ? 1 : y + 1);
    }, x = !!o?.length && !p, {
      blueGlowStyles: F,
      blueRingStyles: W,
      pinkGlowStyles: L,
      pinkRingStyles: X,
      yellowGlowStyles: J,
      yellowRingStyles: fe
    } = O8({
      animationStep: y,
      fadeIn: g
    }), [ce] = W3(), ue = E.useRef(null);
    return E.useImperativeHandle(d, () => ue.current), /* @__PURE__ */ $.createElement("div", { className: V8({ class: n, size: u }), ...f }, x && /* @__PURE__ */ $.createElement("div", { className: B8({ animationStep: y }) }, /* @__PURE__ */ $.createElement(M8, { className: L(), size: u }), /* @__PURE__ */ $.createElement(K8, { className: F(), size: u }), /* @__PURE__ */ $.createElement(D8, { className: J(), size: u }), /* @__PURE__ */ $.createElement(
      L8,
      {
        className: X(),
        onTransitionEnd: C,
        size: u
      }
    ), /* @__PURE__ */ $.createElement(I8, { className: W(), size: u }), /* @__PURE__ */ $.createElement(j8, { className: fe(), size: u })), x ? /* @__PURE__ */ $.createElement(
      "img",
      {
        alt: t,
        "aria-label": t,
        className: "object-cover h-full w-full rounded-full absolute top-0 left-0",
        onError: () => h(!0),
        src: o
      }
    ) : /* @__PURE__ */ $.createElement(
      "div",
      {
        className: "bg-surface-level-03 w-full h-full rounded-full flex justify-center items-center",
        "data-testid": Ke("@paloma-snazatar-icon-id")
      },
      /* @__PURE__ */ $.createElement(
        zg,
        {
          "aria-label": "profile picture placeholder",
          className: H8({ size: u }),
          size: "large"
        }
      )
    ), l && u === "large" && /* @__PURE__ */ $.createElement(
      "div",
      {
        className: "absolute -bottom-[6px] w-[73px] lg:w-[138px] flex justify-end",
        ref: ue
      },
      /* @__PURE__ */ $.createElement(
        Ea,
        {
          "aria-label": "edit button",
          className: "bg-content-inverse-bold flex w-8 h-8 lg:w-11 lg:h-11",
          iconOnly: !0,
          leadingIcon: /* @__PURE__ */ $.createElement(z2, null),
          onClick: s,
          size: ce === "lg" ? "small" : "x-small",
          variant: "inverse"
        }
      )
    ));
  }
);
var Av = ({ children: t }) => t, hm = "text-content-neutral-bold backdrop-blur-surface", zv = O({
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
}), Rv = ({ children: t }) => t, U8 = zv({ shape: "circle" }), mm = {
  medium: 16,
  small: 12,
  "x-small": 8
}, gm = (t, n, l, o) => $.isValidElement(t) && dv(t) ? /* @__PURE__ */ $.createElement($.Fragment, null, Tt(
  {
    contained: !0,
    containerClassName: hm,
    ...o !== void 0 && { shape: o },
    size: l
  },
  t
), /* @__PURE__ */ $.createElement("div", { className: U8 })) : /* @__PURE__ */ $.createElement($.Fragment, null, $.cloneElement(t, {
  className: hm,
  size: l
}), /* @__PURE__ */ $.createElement("div", { className: n })), gi = ({
  children: t,
  className: n,
  maxCount: l = 3,
  size: o = "medium",
  trailingShape: s = "circle",
  trailingSlotLabel: u = "Count",
  ...f
}) => {
  E.useEffect(() => {
    ft(
      l >= 1 && l <= 3,
      "maxCount must be between 1 and 3 (inclusive)"
    );
  }, [l]);
  const d = E.Children.toArray(t), p = nm(
    d,
    Av
  )?.props.children, h = nm(
    d,
    Rv
  )?.props.children, y = E.Children.toArray(p), v = y.slice(0, l), g = E.Children.toArray(h)[0], S = y.length - l, C = y.length > l, x = zv({ shape: s, size: o });
  return /* @__PURE__ */ $.createElement("div", { className: n, ...f }, /* @__PURE__ */ $.createElement("div", { className: "flex" }, v.map((F, W) => /* @__PURE__ */ $.createElement(
    "div",
    {
      className: "relative",
      "data-testid": `@paloma-sg-element-container-id-${W}`,
      key: F.key,
      style: {
        marginInlineStart: W === 0 ? 0 : `-${mm[o]}px`
      }
    },
    gm(F, x, o)
  )), (!!g || C) && /* @__PURE__ */ $.createElement(
    "div",
    {
      className: "relative",
      "data-testid": "@paloma-sg-element-container-id-trailing",
      style: { marginInlineStart: `-${mm[o]}px` }
    },
    g ? gm(
      g,
      x,
      o,
      "circle"
    ) : /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement(
      $a,
      {
        appearance: "neutral",
        "aria-label": u,
        "data-testid": "@paloma-stacked-group-trailing-id",
        emphasis: "regular",
        label: `+${S}`,
        shape: s,
        size: o
      }
    ), /* @__PURE__ */ $.createElement("div", { className: x }))
  )));
};
gi.displayName = "StackedGroup";
gi.Content = Av;
gi.Content.displayName = "StackedContent.Content";
gi.Trailing = Rv;
gi.Trailing.displayName = "StackedContent.Trailing";
var W8 = O({
  base: "flex flex-row items-center gap-4",
  variants: {
    isVertical: {
      false: "flex-col text-center",
      true: "my-4"
    }
  }
}), G8 = O({
  base: "flex",
  variants: {
    isVertical: {
      false: "w-full",
      true: ""
    }
  }
}), q8 = O({
  base: "mr-4 mt-4",
  variants: {
    isFirstStep: {
      false: "opacity-100",
      true: "opacity-0"
    }
  }
}), Q8 = O({
  base: "ml-4 mt-4",
  variants: {
    isLastStep: {
      false: "opacity-100",
      true: "opacity-0"
    }
  }
}), Z8 = "text-content-neutral-subtle", X8 = O({
  base: "flex",
  variants: {
    isVertical: {
      false: "justify-center",
      true: ""
    }
  }
}), Y8 = O({
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
}), J8 = O({
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
}), Lv = ({
  active: t,
  children: n,
  dividerEmphasis: l,
  index: o = 0,
  isVertical: s,
  leadingIcon: u,
  preTitle: f,
  showAllHorizontalContent: d,
  stepLength: p = 0,
  title: h
}) => {
  const y = o + 1, v = !!t || !s && d;
  return /* @__PURE__ */ $.createElement("div", { className: "flex-grow" }, /* @__PURE__ */ $.createElement("div", { className: W8({ isVertical: s }) }, /* @__PURE__ */ $.createElement("div", { className: G8({ isVertical: s }) }, !s && /* @__PURE__ */ $.createElement(
    Uo,
    {
      className: q8({
        isFirstStep: o === 0
      }),
      "data-testid": "@paloma-stepper-step-left-divider-id",
      emphasis: l
    }
  ), /* @__PURE__ */ $.createElement(
    $a,
    {
      appearance: t ? "neutral-inverse" : "neutral",
      className: "flex-shrink-0",
      emphasis: t ? "highlight" : "neutral",
      icon: u,
      label: y.toString(),
      shape: "circle",
      size: "x-small"
    }
  ), !s && /* @__PURE__ */ $.createElement(
    Uo,
    {
      className: Q8({
        isLastStep: o === p - 1
      }),
      "data-testid": "@paloma-stepper-step-right-divider-id",
      emphasis: l
    }
  )), /* @__PURE__ */ $.createElement("div", { className: "flex flex-col" }, fv(f, {
    className: Z8,
    fontWeight: "bold",
    size: "x-small"
  }), /* @__PURE__ */ $.createElement(
    pt,
    {
      className: "text-content-neutral-bold",
      size: "large",
      variant: "body"
    },
    h
  ))), n && /* @__PURE__ */ $.createElement(
    "div",
    {
      className: X8({ isVertical: s }),
      "data-testid": "@paloma-stepper-step-content-id"
    },
    s && /* @__PURE__ */ $.createElement(
      Uo,
      {
        className: "ml-4",
        "data-testid": "@paloma-stepper-step-content-divider-id",
        emphasis: l,
        orientation: "vertical"
      }
    ),
    /* @__PURE__ */ $.createElement(
      "div",
      {
        className: Y8({
          isContentShown: v,
          isVertical: s
        })
      },
      /* @__PURE__ */ $.createElement("div", { className: "overflow-hidden" }, /* @__PURE__ */ $.createElement("div", { className: J8({ isVertical: s }) }, n))
    )
  ));
}, eS = O({
  base: "flex",
  variants: {
    orientation: {
      horizontal: "",
      vertical: "flex-col"
    }
  }
}), tS = O({
  base: "flex",
  variants: {
    orientation: {
      horizontal: "flex-row flex-grow basis-[0%]",
      vertical: "flex-col"
    }
  }
}), rS = O({
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
}), ed = ({
  children: t,
  className: n,
  currentStep: l = 0,
  orientation: o = "horizontal",
  showAllHorizontalContent: s
}) => {
  const u = E.Children.toArray(t).length, f = "minimal", d = Math.min(Math.max(l, 0), u - 1);
  return /* @__PURE__ */ $.createElement("div", { className: eS({ class: n, orientation: o }) }, pv(t, Lv, (p, h) => /* @__PURE__ */ $.createElement("div", { className: tS({ orientation: o }), key: h }, $.cloneElement(p, {
    active: h === d,
    dividerEmphasis: f,
    index: h,
    isVertical: o === "vertical",
    showAllHorizontalContent: s,
    stepLength: u
  }), /* @__PURE__ */ $.createElement(
    Uo,
    {
      className: rS({
        lastItem: h === u - 1,
        orientation: o
      }),
      emphasis: f,
      orientation: o
    }
  ))));
};
ed.displayName = "Stepper";
ed.Step = Lv;
ed.Step.displayName = "Stepper.Step";
var nS = O({
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
E.forwardRef(
  ({
    active: t = !1,
    "aria-label": n,
    as: l,
    children: o,
    className: s,
    disabled: u = !1,
    href: f,
    leadingIcon: d,
    orientation: p = "vertical",
    size: h = "medium",
    trailingIcon: y,
    ...v
  }, g) => {
    const S = o === void 0, C = l ?? "a", x = l === "button";
    E.useEffect(() => {
      S && (ft(
        n !== void 0 && n.length > 0,
        "A TabItem without text content should have an non-empty aria-label prop"
      ), Fg(d, "An empty TabItem needs a leadingIcon"), ft(!y, "An empty TabItem can't have a trailingIcon"));
    }, [S, n, d, y]);
    const F = p === "horizontal" && t ? "bold" : "normal";
    return /* @__PURE__ */ $.createElement(Ur, { disabled: u, focusRingClass: "rounded-sm" }, /* @__PURE__ */ $.createElement(
      C,
      {
        "aria-current": C === "a" && t ? "page" : void 0,
        "aria-disabled": u,
        "aria-label": n,
        className: nS({
          class: s,
          disabled: u,
          isButton: x,
          isEmpty: S,
          orientation: p,
          selected: t,
          size: h
        }),
        href: f,
        tabIndex: u ? -1 : void 0,
        ...v,
        ref: g
      },
      Tt(
        {
          className: "@paloma-tab-item-leading-icon text-content-neutral-bold",
          size: h
        },
        d
      ),
      fv(o, {
        fontWeight: F,
        size: h,
        variant: "body"
      }),
      Tt(
        {
          className: "@paloma-tab-item-trailing-icon text-content-neutral-bold flex-grow justify-end",
          size: h
        },
        y
      )
    ));
  }
);
O({
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
O({
  variants: {
    equalWidthTabs: {
      true: "w-full justify-center"
    }
  }
});
var lS = O({
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
}), iS = O({
  base: "flex flex-row justify-between items-center",
  variants: {
    size: {
      large: "mb-5",
      medium: "mb-3"
    }
  }
});
O({
  base: "pointer-events-none"
});
E.forwardRef(
  ({
    active: t = !1,
    ariaLabel: n,
    as: l,
    className: o,
    description: s,
    disabled: u = !1,
    icon: f,
    onBlur: d,
    onClick: p,
    onFocus: h,
    onHover: y,
    size: v = "medium",
    title: g,
    trailingIcon: S,
    trailingSlot: C,
    ...x
  }, F) => {
    const W = E.useRef(null), L = !!p, X = l ?? (L ? "button" : "div"), { buttonProps: J } = pa(
      {
        elementType: typeof X == "string" ? X : "button",
        isDisabled: u,
        onBlur: d,
        onFocus: h,
        onPress: p
      },
      W
    ), fe = Te(x, L ? J : void 0);
    return /* @__PURE__ */ $.createElement(Ur, null, /* @__PURE__ */ $.createElement(
      X,
      {
        "aria-disabled": u,
        "aria-label": L ? n : void 0,
        className: lS({
          active: t,
          className: o,
          disabled: u,
          hasOnClick: L,
          size: v
        }),
        disabled: u,
        onMouseEnter: y,
        ref: Hr(W, F),
        ...fe
      },
      (f || C) && /* @__PURE__ */ $.createElement("div", { className: iS({ size: v }) }, f && /* @__PURE__ */ $.createElement(
        $a,
        {
          "data-testid": "@paloma-tile-icon-id",
          icon: f,
          size: oS[v]
        }
      ), C && /* @__PURE__ */ $.createElement(
        "div",
        {
          className: "pointer-events-none",
          "data-testid": "tile-trailing-slot"
        },
        C
      )),
      /* @__PURE__ */ $.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ $.createElement("div", { className: "flex flex-col" }, /* @__PURE__ */ $.createElement(pt, { className: "pointer-events-none" }, g), s && /* @__PURE__ */ $.createElement(
        pt,
        {
          className: "pointer-events-none text-content-neutral-subtle mt-1",
          "data-testid": "@paloma-tile-description-id",
          size: "x-small"
        },
        s
      )), S && /* @__PURE__ */ $.createElement(
        "div",
        {
          className: "pointer-events-none self-end",
          "data-testid": "tile-trailing-icon"
        },
        S
      ))
    ));
  }
);
var oS = {
  large: "small",
  medium: "x-small"
}, aS = E.createContext(null);
aS.Provider;
Oe({
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
Oe({
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
Oe({
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
Oe({
  base: "flex size-8 shrink-0 items-center justify-center rounded-full border border-neutral-subtle bg-transparent text-content-neutral-bold cursor-pointer outline-none transition-colors [@media(hover:hover)]:hover:bg-content-neutral-bold/[0.08] [@media(hover:hover)]:hover:active:bg-content-neutral-bold/[0.12]",
  variants: {
    hasBody: {
      true: "self-start"
    }
  }
});
Oe({
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
O({
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
O({
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
O({
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
O({
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
O({
  base: "flex w-full",
  variants: {
    orientation: {
      horizontal: "flex-row gap-4",
      vertical: "flex-col gap-6 flex-1 h-full justify-between"
    }
  }
});
O({
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
O({
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
O({
  base: "bg-surface-inverse rounded px-[6px] py-1 flex items-center relative gap-1 outline-none",
  variants: {
    size: {
      large: "min-w-36",
      small: ""
    }
  }
});
function sS({ heading: t, games: n = [] }) {
  const l = E.useRef(null), [o, s] = E.useState(!0), [u, f] = E.useState(!1), d = E.useCallback(() => {
    const h = l.current;
    h && (s(h.scrollLeft <= 1), f(h.scrollLeft + h.clientWidth >= h.scrollWidth - 1));
  }, []);
  E.useEffect(() => (d(), window.addEventListener("resize", d), () => window.removeEventListener("resize", d)), [n.length, d]);
  const p = (h) => l.current?.scrollBy({ left: h * l.current.clientWidth * 0.82, behavior: "smooth" });
  return n.length ? /* @__PURE__ */ w.jsxs("section", { className: "ea-r-section ea-r-communities", children: [
    /* @__PURE__ */ w.jsxs("header", { className: "ea-r-section__head", children: [
      /* @__PURE__ */ w.jsxs("h2", { className: "ea-r-heading", children: [
        t,
        /* @__PURE__ */ w.jsx(gw, {})
      ] }),
      /* @__PURE__ */ w.jsxs("div", { className: "ea-r-communities__nav", children: [
        /* @__PURE__ */ w.jsx("button", { type: "button", "aria-label": "Previous games", disabled: o, onClick: () => p(-1), children: /* @__PURE__ */ w.jsx(Rg, {}) }),
        /* @__PURE__ */ w.jsx("button", { type: "button", "aria-label": "Next games", disabled: u, onClick: () => p(1), children: /* @__PURE__ */ w.jsx(Lg, {}) })
      ] })
    ] }),
    /* @__PURE__ */ w.jsx("div", { className: "ea-r-communities__viewport", ref: l, onScroll: d, children: /* @__PURE__ */ w.jsx("ul", { className: "ea-r-communities__list", children: n.map((h) => /* @__PURE__ */ w.jsx("li", { children: /* @__PURE__ */ w.jsxs("a", { className: "ea-r-game", href: h.link || "#", children: [
      /* @__PURE__ */ w.jsxs("span", { className: "ea-r-game__art", children: [
        h.image ? /* @__PURE__ */ w.jsx("img", { src: h.image, alt: "", loading: "lazy" }) : null,
        h.owned ? /* @__PURE__ */ w.jsx("span", { className: "ea-r-game__owned", children: /* @__PURE__ */ w.jsx(Ca, { standalone: !0, label: "Owned", size: "small", emphasis: "bold" }) }) : null
      ] }),
      /* @__PURE__ */ w.jsx("span", { className: "ea-r-game__title", children: h.title })
    ] }) }, `${h.title}-${h.link}`)) }) })
  ] }) : null;
}
function Iv({ likes: t, replies: n, views: l }) {
  const o = [
    { icon: /* @__PURE__ */ w.jsx(Mg, {}), value: t, label: "likes" },
    { icon: /* @__PURE__ */ w.jsx(Ig, {}), value: n, label: "replies" },
    { icon: /* @__PURE__ */ w.jsx(jg, {}), value: l, label: "views" }
  ].filter((s) => typeof s.value == "number");
  return o.length ? /* @__PURE__ */ w.jsx("div", { className: "ea-r-pills", children: o.map((s) => /* @__PURE__ */ w.jsx(ui, { size: "x-small", emphasis: "minimal", leadingContent: s.icon, label: `${s.value.toLocaleString()} ${s.label}` }, s.label)) }) : null;
}
function uS({ topic: t }) {
  return /* @__PURE__ */ w.jsxs("article", { className: "ea-r-recommendation", children: [
    /* @__PURE__ */ w.jsxs("a", { className: "ea-r-recommendation__link", href: t.url, children: [
      /* @__PURE__ */ w.jsx("div", { className: "ea-r-recommendation__media", children: t.image ? /* @__PURE__ */ w.jsx("img", { src: t.image, alt: "", loading: "lazy" }) : null }),
      /* @__PURE__ */ w.jsx("div", { className: "ea-r-recommendation__scrim" }),
      /* @__PURE__ */ w.jsxs("div", { className: "ea-r-recommendation__content", children: [
        t.categoryName ? /* @__PURE__ */ w.jsx("p", { className: "ea-r-recommendation__category", children: t.categoryName }) : null,
        /* @__PURE__ */ w.jsx("h3", { children: t.title }),
        t.author ? /* @__PURE__ */ w.jsx("p", { children: t.author }) : null
      ] })
    ] }),
    /* @__PURE__ */ w.jsx("div", { className: "ea-r-recommendation__stats", children: /* @__PURE__ */ w.jsx(Iv, { likes: t.likes, replies: t.replies, views: t.views }) })
  ] });
}
function cS({ heading: t, seeAllLabel: n, seeAllUrl: l, topics: o = [] }) {
  return /* @__PURE__ */ w.jsxs("section", { className: "ea-r-section ea-r-recommended", children: [
    /* @__PURE__ */ w.jsxs("header", { className: "ea-r-section__head", children: [
      /* @__PURE__ */ w.jsxs("h2", { className: "ea-r-heading", children: [
        t,
        /* @__PURE__ */ w.jsx(q2, {})
      ] }),
      l ? /* @__PURE__ */ w.jsx("a", { className: "ea-r-seeall", href: l, children: n }) : null
    ] }),
    o.length ? /* @__PURE__ */ w.jsx("div", { className: "ea-r-recommended__grid", children: o.slice(0, 5).map((s) => /* @__PURE__ */ w.jsx(uS, { topic: s }, s.id)) }) : /* @__PURE__ */ w.jsx("p", { className: "ea-r-status", children: "No recommendations yet." })
  ] });
}
function dS({ quests: t = [], labels: n }) {
  const [l, o] = E.useState(0);
  if (!t.length)
    return null;
  const s = Math.min(l, t.length - 1), u = t[s], f = () => o((p) => (p - 1 + t.length) % t.length), d = () => o((p) => (p + 1) % t.length);
  return /* @__PURE__ */ w.jsxs("section", { className: "ea-r-quests", children: [
    /* @__PURE__ */ w.jsxs("div", { className: "ea-r-widget-heading", children: [
      /* @__PURE__ */ w.jsx("h3", { children: n.questsHeading }),
      t.length > 1 ? /* @__PURE__ */ w.jsxs("div", { className: "ea-r-quest__nav", children: [
        /* @__PURE__ */ w.jsx("button", { type: "button", "aria-label": n.questsPrevious, onClick: f, children: /* @__PURE__ */ w.jsx(Rg, {}) }),
        /* @__PURE__ */ w.jsx("button", { type: "button", "aria-label": n.questsNext, onClick: d, children: /* @__PURE__ */ w.jsx(Lg, {}) })
      ] }) : null
    ] }),
    /* @__PURE__ */ w.jsxs("article", { className: "ea-r-quest", children: [
      u.image ? /* @__PURE__ */ w.jsx("img", { className: "ea-r-quest__art", src: u.image, alt: "", loading: "lazy" }) : null,
      /* @__PURE__ */ w.jsx("div", { className: "ea-r-quest__scrim" }),
      /* @__PURE__ */ w.jsxs("div", { className: "ea-r-quest__content", children: [
        /* @__PURE__ */ w.jsxs("div", { className: "ea-r-quest__body", children: [
          u.icon ? /* @__PURE__ */ w.jsx("img", { className: "ea-r-quest__icon", src: u.icon, alt: "" }) : null,
          /* @__PURE__ */ w.jsxs("div", { children: [
            /* @__PURE__ */ w.jsx("p", { className: "ea-r-quest__title", children: u.title }),
            u.reward ? /* @__PURE__ */ w.jsx("p", { className: "ea-r-quest__reward", children: u.reward }) : null
          ] })
        ] }),
        /* @__PURE__ */ w.jsx(Ea, { variant: "inverse", size: "large", onClick: () => u.link && (window.location.href = u.link), children: n.questsAccept })
      ] })
    ] }),
    t.length > 1 ? /* @__PURE__ */ w.jsx("div", { className: "ea-r-quest__dots", "aria-hidden": "true", children: t.map((p, h) => /* @__PURE__ */ w.jsx("span", { className: h === s ? "is-active" : "" }, h)) }) : null
  ] });
}
function fS({ heroes: t = [], labels: n }) {
  return t.length ? /* @__PURE__ */ w.jsxs("section", { className: "ea-r-heroes", children: [
    /* @__PURE__ */ w.jsxs("h3", { className: "ea-r-widget-heading", children: [
      /* @__PURE__ */ w.jsx(fw, {}),
      n.heroesHeading
    ] }),
    /* @__PURE__ */ w.jsx("ol", { className: "ea-r-heroes__list", children: t.map((l) => /* @__PURE__ */ w.jsx("li", { children: /* @__PURE__ */ w.jsxs("a", { className: "ea-r-hero", href: l.path, children: [
      /* @__PURE__ */ w.jsx(
        vc,
        {
          size: "medium",
          label: l.displayName,
          imageSrc: l.avatar
        }
      ),
      /* @__PURE__ */ w.jsxs("span", { className: "ea-r-hero__text", children: [
        /* @__PURE__ */ w.jsx("span", { className: "ea-r-hero__name", children: l.displayName }),
        /* @__PURE__ */ w.jsxs("span", { className: "ea-r-hero__count", children: [
          l.count.toLocaleString(),
          " ",
          n.heroesContributions
        ] })
      ] })
    ] }) }, l.id)) })
  ] }) : null;
}
function pS({
  heading: t,
  labels: n = {},
  filters: l = [],
  activeFilter: o,
  onFilterChange: s,
  topics: u = [],
  loading: f,
  error: d,
  quests: p = [],
  heroes: h = []
}) {
  const [y, v] = E.useState("card");
  return /* @__PURE__ */ w.jsxs("section", { className: "ea-r-section ea-r-trending", children: [
    /* @__PURE__ */ w.jsxs("h2", { className: "ea-r-heading", children: [
      t,
      /* @__PURE__ */ w.jsx(sw, {})
    ] }),
    /* @__PURE__ */ w.jsxs("div", { className: "ea-r-trending__layout", children: [
      /* @__PURE__ */ w.jsxs("div", { className: "ea-r-trending__controls", children: [
        /* @__PURE__ */ w.jsxs("div", { className: "ea-r-trending__filters", children: [
          /* @__PURE__ */ w.jsxs("span", { className: "ea-r-trending__filters-label", children: [
            /* @__PURE__ */ w.jsx(D2, {}),
            n.filters
          ] }),
          l.map((g) => /* @__PURE__ */ w.jsx(
            ui,
            {
              label: g.label,
              size: "medium",
              selected: g.id === o,
              leadingContent: g.id === "trending" ? /* @__PURE__ */ w.jsx(H2, {}) : void 0,
              onClick: () => s?.(g.id)
            },
            g.id
          ))
        ] }),
        /* @__PURE__ */ w.jsx(_8, { value: y, onChange: v, size: "medium", children: /* @__PURE__ */ w.jsxs(Pv, { "aria-label": n.viewLabel || "Layout", children: [
          /* @__PURE__ */ w.jsx(
            Xl,
            {
              id: "card",
              leadingIcon: /* @__PURE__ */ w.jsx(P2, {}),
              children: /* @__PURE__ */ w.jsx("span", { className: "ea-r-segmented-label", children: n.viewCard })
            }
          ),
          /* @__PURE__ */ w.jsx(Xl, { id: "compact", leadingIcon: /* @__PURE__ */ w.jsx(tw, {}), children: /* @__PURE__ */ w.jsx("span", { className: "ea-r-segmented-label", children: n.viewCompact }) })
        ] }) })
      ] }),
      /* @__PURE__ */ w.jsxs("div", { className: "ea-r-trending__threads", children: [
        f && /* @__PURE__ */ w.jsx("p", { className: "ea-r-status", children: n.loading }),
        d && !f && /* @__PURE__ */ w.jsx("p", { className: "ea-r-status ea-r-status--error", children: n.error }),
        !f && !d && !u.length && /* @__PURE__ */ w.jsx("p", { className: "ea-r-status", children: n.empty }),
        !f && !d && u.length > 0 && y === "card" && /* @__PURE__ */ w.jsx("ul", { className: "ea-r-trending__list", children: u.map((g, S) => /* @__PURE__ */ w.jsxs("li", { className: "ea-r-row", children: [
          /* @__PURE__ */ w.jsxs("p", { className: "ea-r-row__eyebrow", children: [
            g.categoryName && /* @__PURE__ */ w.jsx("span", { children: g.categoryName }),
            g.categoryName && /* @__PURE__ */ w.jsx("span", { "aria-hidden": "true", children: "•" }),
            /* @__PURE__ */ w.jsx("span", { children: g.age })
          ] }),
          /* @__PURE__ */ w.jsx("h3", { className: "ea-r-row__title", children: /* @__PURE__ */ w.jsx("a", { href: g.url, children: g.title }) }),
          (g.solved || g.tags?.length > 0) && /* @__PURE__ */ w.jsxs("div", { className: "ea-r-row__badges", children: [
            g.solved && /* @__PURE__ */ w.jsx(
              Ca,
              {
                standalone: !0,
                label: n.solved,
                status: "positive",
                emphasis: "bold",
                size: "small"
              }
            ),
            g.tags?.map((C) => /* @__PURE__ */ w.jsx(
              ui,
              {
                label: C,
                size: "x-small",
                emphasis: "subtle"
              },
              C
            ))
          ] }),
          S === 0 && g.image && /* @__PURE__ */ w.jsx("a", { className: "ea-r-row__media", href: g.url, tabIndex: -1, "aria-hidden": "true", children: /* @__PURE__ */ w.jsx("img", { src: g.image, alt: "", loading: "lazy" }) }),
          /* @__PURE__ */ w.jsx(
            Iv,
            {
              likes: g.likes,
              replies: g.replies,
              views: g.views
            }
          )
        ] }, g.id)) }),
        !f && !d && u.length > 0 && y === "compact" && /* @__PURE__ */ w.jsxs("table", { className: "ea-r-table", children: [
          /* @__PURE__ */ w.jsx("thead", { children: /* @__PURE__ */ w.jsxs("tr", { children: [
            /* @__PURE__ */ w.jsx("th", { scope: "col", children: n.colTopic }),
            /* @__PURE__ */ w.jsx("th", { scope: "col", children: n.colAuthor }),
            /* @__PURE__ */ w.jsx("th", { scope: "col", children: n.colReplies }),
            /* @__PURE__ */ w.jsx("th", { scope: "col", children: n.colViews }),
            /* @__PURE__ */ w.jsx("th", { scope: "col", children: n.colActivity })
          ] }) }),
          /* @__PURE__ */ w.jsx("tbody", { children: u.map((g) => /* @__PURE__ */ w.jsxs("tr", { children: [
            /* @__PURE__ */ w.jsxs("td", { children: [
              /* @__PURE__ */ w.jsx("a", { href: g.url, children: g.title }),
              g.categoryName && /* @__PURE__ */ w.jsx("span", { className: "ea-r-table__category", children: g.categoryName })
            ] }),
            /* @__PURE__ */ w.jsx("td", { children: g.author }),
            /* @__PURE__ */ w.jsx("td", { children: g.replies?.toLocaleString() }),
            /* @__PURE__ */ w.jsx("td", { children: g.views?.toLocaleString() }),
            /* @__PURE__ */ w.jsx("td", { children: g.age })
          ] }, g.id)) })
        ] })
      ] }),
      /* @__PURE__ */ w.jsxs("aside", { className: "ea-r-trending__widgets", children: [
        /* @__PURE__ */ w.jsx(dS, { quests: p, labels: n }),
        /* @__PURE__ */ w.jsx(fS, { heroes: h, labels: n })
      ] })
    ] })
  ] });
}
function vm({ value: t, label: n }) {
  return typeof t != "number" ? null : /* @__PURE__ */ w.jsxs("span", { children: [
    /* @__PURE__ */ w.jsx("strong", { children: t.toLocaleString() }),
    n
  ] });
}
function hS({ topic: t, labels: n }) {
  return /* @__PURE__ */ w.jsx("article", { className: "ea-apex-featured-card", children: /* @__PURE__ */ w.jsxs("a", { href: t.url, className: "ea-apex-featured-card__link", children: [
    /* @__PURE__ */ w.jsx("span", { className: "ea-apex-featured-card__media", children: t.image ? /* @__PURE__ */ w.jsx("img", { src: t.image, alt: "", loading: "lazy" }) : /* @__PURE__ */ w.jsx("span", { className: "ea-apex-featured-card__placeholder", "aria-hidden": "true", children: t.title?.slice(0, 1) }) }),
    /* @__PURE__ */ w.jsxs("span", { className: "ea-apex-featured-card__body", children: [
      /* @__PURE__ */ w.jsx(Ca, { standalone: !0, label: n.featured, size: "small", emphasis: "bold" }),
      /* @__PURE__ */ w.jsx("strong", { children: t.title }),
      t.author ? /* @__PURE__ */ w.jsx("small", { children: t.author }) : null,
      /* @__PURE__ */ w.jsxs("span", { className: "ea-apex-featured-card__stats", children: [
        /* @__PURE__ */ w.jsx(ui, { size: "x-small", emphasis: "minimal", leadingContent: /* @__PURE__ */ w.jsx(Ig, {}), label: `${t.replies || 0} ${n.replies}` }),
        /* @__PURE__ */ w.jsx(ui, { size: "x-small", emphasis: "minimal", leadingContent: /* @__PURE__ */ w.jsx(jg, {}), label: `${t.views || 0} ${n.views}` })
      ] })
    ] })
  ] }) });
}
function mS({ place: t }) {
  return /* @__PURE__ */ w.jsx("li", { children: /* @__PURE__ */ w.jsxs("a", { className: "ea-apex-place", href: t.url, children: [
    /* @__PURE__ */ w.jsx("span", { className: "ea-apex-place__icon", style: t.color ? { backgroundColor: t.color } : void 0, children: t.logo ? /* @__PURE__ */ w.jsx("img", { src: t.logo, alt: "" }) : t.name?.slice(0, 1) }),
    /* @__PURE__ */ w.jsxs("span", { className: "ea-apex-place__copy", children: [
      /* @__PURE__ */ w.jsx("strong", { children: t.name }),
      t.description ? /* @__PURE__ */ w.jsx("small", { children: t.description }) : null
    ] }),
    typeof t.topics == "number" ? /* @__PURE__ */ w.jsx("span", { className: "ea-apex-place__count", children: t.topics.toLocaleString() }) : null
  ] }) });
}
function gS({
  title: t,
  eyebrow: n,
  description: l,
  logo: o,
  heroImage: s,
  topicCount: u,
  postCount: f,
  places: d = [],
  featuredTopics: p = [],
  importantLinks: h = [],
  loading: y,
  error: v,
  onSearch: g,
  onCreateTopic: S,
  labels: C = {}
}) {
  const [x, F] = E.useState(""), W = (L) => {
    L.preventDefault(), x.trim() && g?.(x.trim());
  };
  return /* @__PURE__ */ w.jsxs("section", { className: "ea-apex-hub", children: [
    /* @__PURE__ */ w.jsxs(
      "header",
      {
        className: `ea-apex-hero${s ? " --has-image" : ""}`,
        style: s ? { backgroundImage: `url(${s})` } : void 0,
        children: [
          /* @__PURE__ */ w.jsx("div", { className: "ea-apex-hero__scrim" }),
          /* @__PURE__ */ w.jsxs("div", { className: "ea-apex-hero__content", children: [
            /* @__PURE__ */ w.jsxs("div", { className: "ea-apex-hero__identity", children: [
              o ? /* @__PURE__ */ w.jsx("img", { className: "ea-apex-hero__logo", src: o, alt: "" }) : null,
              /* @__PURE__ */ w.jsxs("div", { children: [
                /* @__PURE__ */ w.jsx("p", { className: "ea-apex-hero__eyebrow", children: n }),
                /* @__PURE__ */ w.jsx("h1", { children: t }),
                l ? /* @__PURE__ */ w.jsx("p", { className: "ea-apex-hero__description", children: l }) : null
              ] })
            ] }),
            /* @__PURE__ */ w.jsxs("div", { className: "ea-apex-hero__footer", children: [
              /* @__PURE__ */ w.jsxs("div", { className: "ea-apex-hero__counts", children: [
                /* @__PURE__ */ w.jsx(vm, { value: u, label: C.topics }),
                /* @__PURE__ */ w.jsx(vm, { value: f, label: C.posts })
              ] }),
              /* @__PURE__ */ w.jsx(Ea, { variant: "primary", size: "large", onClick: S, children: C.startDiscussion })
            ] }),
            /* @__PURE__ */ w.jsxs("form", { className: "ea-apex-search", onSubmit: W, children: [
              /* @__PURE__ */ w.jsx(Mh, {}),
              /* @__PURE__ */ w.jsx("label", { className: "sr-only", htmlFor: "ea-apex-search", children: C.searchLabel }),
              /* @__PURE__ */ w.jsx("input", { id: "ea-apex-search", type: "search", value: x, onChange: (L) => F(L.target.value), placeholder: C.searchPlaceholder }),
              /* @__PURE__ */ w.jsx("button", { type: "submit", "aria-label": C.searchLabel, children: /* @__PURE__ */ w.jsx(Mh, {}) })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ w.jsxs("div", { className: "ea-apex-hub__content", children: [
      /* @__PURE__ */ w.jsxs("section", { className: "ea-apex-section ea-apex-featured", children: [
        /* @__PURE__ */ w.jsxs("div", { className: "ea-apex-section__heading", children: [
          /* @__PURE__ */ w.jsxs("div", { children: [
            /* @__PURE__ */ w.jsx("p", { children: n }),
            /* @__PURE__ */ w.jsx("h2", { children: C.featured })
          ] }),
          /* @__PURE__ */ w.jsx(Mg, {})
        ] }),
        y ? /* @__PURE__ */ w.jsx("p", { className: "ea-apex-status", children: C.loading }) : null,
        v ? /* @__PURE__ */ w.jsx("p", { className: "ea-apex-status --error", children: C.error }) : null,
        !y && !v && !p.length ? /* @__PURE__ */ w.jsx("p", { className: "ea-apex-status", children: C.noFeatured }) : null,
        p.length ? /* @__PURE__ */ w.jsx("div", { className: "ea-apex-featured__grid", children: p.map((L) => /* @__PURE__ */ w.jsx(hS, { topic: L, labels: C }, L.id)) }) : null
      ] }),
      /* @__PURE__ */ w.jsxs("div", { className: "ea-apex-hub__columns", children: [
        /* @__PURE__ */ w.jsxs("section", { className: "ea-apex-section ea-apex-places", children: [
          /* @__PURE__ */ w.jsx("div", { className: "ea-apex-section__heading", children: /* @__PURE__ */ w.jsxs("div", { children: [
            /* @__PURE__ */ w.jsx("p", { children: n }),
            /* @__PURE__ */ w.jsx("h2", { children: C.places })
          ] }) }),
          /* @__PURE__ */ w.jsx("ul", { children: d.map((L) => /* @__PURE__ */ w.jsx(mS, { place: L }, L.id)) })
        ] }),
        h.length ? /* @__PURE__ */ w.jsxs("aside", { className: "ea-apex-section ea-apex-links", children: [
          /* @__PURE__ */ w.jsx("div", { className: "ea-apex-section__heading", children: /* @__PURE__ */ w.jsxs("div", { children: [
            /* @__PURE__ */ w.jsx("p", { children: n }),
            /* @__PURE__ */ w.jsx("h2", { children: C.importantLinks })
          ] }) }),
          /* @__PURE__ */ w.jsx("ul", { children: h.map((L) => /* @__PURE__ */ w.jsx("li", { children: /* @__PURE__ */ w.jsx("a", { href: L.url, children: L.text }) }, `${L.text}-${L.url}`)) })
        ] }) : null
      ] })
    ] })
  ] });
}
const jv = {
  announcements: B1,
  communities: sS,
  recommended: cS,
  trending: pS,
  "apex-category": gS
}, na = /* @__PURE__ */ new WeakMap();
function wS(t, n, l = {}) {
  const o = jv[n];
  if (!o)
    throw new Error(`[ea-react] unknown section "${n}"`);
  let s = na.get(t);
  return s || (s = V1.createRoot(t), na.set(t, s)), s.render(/* @__PURE__ */ w.jsx(o, { ...l })), s;
}
function SS(t) {
  const n = na.get(t);
  n && (n.unmount(), na.delete(t));
}
const CS = Object.keys(jv);
export {
  wS as mountSection,
  CS as sectionNames,
  SS as unmountSection
};
