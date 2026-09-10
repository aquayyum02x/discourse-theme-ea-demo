var Zc = (l) => {
  throw TypeError(l);
};
var Jc = (l, a, s) => a.has(l) || Zc("Cannot " + s);
var ef = (l, a, s) => (Jc(l, a, "read from private field"), s ? s.call(l) : a.get(l)), tf = (l, a, s) => a.has(l) ? Zc("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(l) : a.set(l, s), _s = (l, a, s, p) => (Jc(l, a, "write to private field"), p ? p.call(l, s) : a.set(l, s), s);
function Ch(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var Ss = { exports: {} }, se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nf;
function Fh() {
  if (nf) return se;
  nf = 1;
  var l = Symbol.for("react.element"), a = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), h = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), c = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), S = Symbol.iterator;
  function v(_) {
    return _ === null || typeof _ != "object" ? null : (_ = S && _[S] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var C = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, I = Object.assign, x = {};
  function z(_, N, oe) {
    this.props = _, this.context = N, this.refs = x, this.updater = oe || C;
  }
  z.prototype.isReactComponent = {}, z.prototype.setState = function(_, N) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, N, "setState");
  }, z.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function Y() {
  }
  Y.prototype = z.prototype;
  function G(_, N, oe) {
    this.props = _, this.context = N, this.refs = x, this.updater = oe || C;
  }
  var re = G.prototype = new Y();
  re.constructor = G, I(re, z.prototype), re.isPureReactComponent = !0;
  var ee = Array.isArray, ge = Object.prototype.hasOwnProperty, ke = { current: null }, de = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ee(_, N, oe) {
    var ie, ae = {}, ue = null, ye = null;
    if (N != null) for (ie in N.ref !== void 0 && (ye = N.ref), N.key !== void 0 && (ue = "" + N.key), N) ge.call(N, ie) && !de.hasOwnProperty(ie) && (ae[ie] = N[ie]);
    var pe = arguments.length - 2;
    if (pe === 1) ae.children = oe;
    else if (1 < pe) {
      for (var Ce = Array(pe), ot = 0; ot < pe; ot++) Ce[ot] = arguments[ot + 2];
      ae.children = Ce;
    }
    if (_ && _.defaultProps) for (ie in pe = _.defaultProps, pe) ae[ie] === void 0 && (ae[ie] = pe[ie]);
    return { $$typeof: l, type: _, key: ue, ref: ye, props: ae, _owner: ke.current };
  }
  function be(_, N) {
    return { $$typeof: l, type: _.type, key: N, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function Ie(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === l;
  }
  function Ve(_) {
    var N = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(oe) {
      return N[oe];
    });
  }
  var V = /\/+/g;
  function J(_, N) {
    return typeof _ == "object" && _ !== null && _.key != null ? Ve("" + _.key) : N.toString(36);
  }
  function $(_, N, oe, ie, ae) {
    var ue = typeof _;
    (ue === "undefined" || ue === "boolean") && (_ = null);
    var ye = !1;
    if (_ === null) ye = !0;
    else switch (ue) {
      case "string":
      case "number":
        ye = !0;
        break;
      case "object":
        switch (_.$$typeof) {
          case l:
          case a:
            ye = !0;
        }
    }
    if (ye) return ye = _, ae = ae(ye), _ = ie === "" ? "." + J(ye, 0) : ie, ee(ae) ? (oe = "", _ != null && (oe = _.replace(V, "$&/") + "/"), $(ae, N, oe, "", function(ot) {
      return ot;
    })) : ae != null && (Ie(ae) && (ae = be(ae, oe + (!ae.key || ye && ye.key === ae.key ? "" : ("" + ae.key).replace(V, "$&/") + "/") + _)), N.push(ae)), 1;
    if (ye = 0, ie = ie === "" ? "." : ie + ":", ee(_)) for (var pe = 0; pe < _.length; pe++) {
      ue = _[pe];
      var Ce = ie + J(ue, pe);
      ye += $(ue, N, oe, Ce, ae);
    }
    else if (Ce = v(_), typeof Ce == "function") for (_ = Ce.call(_), pe = 0; !(ue = _.next()).done; ) ue = ue.value, Ce = ie + J(ue, pe++), ye += $(ue, N, oe, Ce, ae);
    else if (ue === "object") throw N = String(_), Error("Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead.");
    return ye;
  }
  function U(_, N, oe) {
    if (_ == null) return _;
    var ie = [], ae = 0;
    return $(_, ie, "", "", function(ue) {
      return N.call(oe, ue, ae++);
    }), ie;
  }
  function B(_) {
    if (_._status === -1) {
      var N = _._result;
      N = N(), N.then(function(oe) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = oe);
      }, function(oe) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = oe);
      }), _._status === -1 && (_._status = 0, _._result = N);
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var L = { current: null }, A = { transition: null }, b = { ReactCurrentDispatcher: L, ReactCurrentBatchConfig: A, ReactCurrentOwner: ke };
  function M() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return se.Children = { map: U, forEach: function(_, N, oe) {
    U(_, function() {
      N.apply(this, arguments);
    }, oe);
  }, count: function(_) {
    var N = 0;
    return U(_, function() {
      N++;
    }), N;
  }, toArray: function(_) {
    return U(_, function(N) {
      return N;
    }) || [];
  }, only: function(_) {
    if (!Ie(_)) throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, se.Component = z, se.Fragment = s, se.Profiler = f, se.PureComponent = G, se.StrictMode = p, se.Suspense = d, se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = b, se.act = M, se.cloneElement = function(_, N, oe) {
    if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var ie = I({}, _.props), ae = _.key, ue = _.ref, ye = _._owner;
    if (N != null) {
      if (N.ref !== void 0 && (ue = N.ref, ye = ke.current), N.key !== void 0 && (ae = "" + N.key), _.type && _.type.defaultProps) var pe = _.type.defaultProps;
      for (Ce in N) ge.call(N, Ce) && !de.hasOwnProperty(Ce) && (ie[Ce] = N[Ce] === void 0 && pe !== void 0 ? pe[Ce] : N[Ce]);
    }
    var Ce = arguments.length - 2;
    if (Ce === 1) ie.children = oe;
    else if (1 < Ce) {
      pe = Array(Ce);
      for (var ot = 0; ot < Ce; ot++) pe[ot] = arguments[ot + 2];
      ie.children = pe;
    }
    return { $$typeof: l, type: _.type, key: ae, ref: ue, props: ie, _owner: ye };
  }, se.createContext = function(_) {
    return _ = { $$typeof: h, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: g, _context: _ }, _.Consumer = _;
  }, se.createElement = Ee, se.createFactory = function(_) {
    var N = Ee.bind(null, _);
    return N.type = _, N;
  }, se.createRef = function() {
    return { current: null };
  }, se.forwardRef = function(_) {
    return { $$typeof: y, render: _ };
  }, se.isValidElement = Ie, se.lazy = function(_) {
    return { $$typeof: E, _payload: { _status: -1, _result: _ }, _init: B };
  }, se.memo = function(_, N) {
    return { $$typeof: c, type: _, compare: N === void 0 ? null : N };
  }, se.startTransition = function(_) {
    var N = A.transition;
    A.transition = {};
    try {
      _();
    } finally {
      A.transition = N;
    }
  }, se.unstable_act = M, se.useCallback = function(_, N) {
    return L.current.useCallback(_, N);
  }, se.useContext = function(_) {
    return L.current.useContext(_);
  }, se.useDebugValue = function() {
  }, se.useDeferredValue = function(_) {
    return L.current.useDeferredValue(_);
  }, se.useEffect = function(_, N) {
    return L.current.useEffect(_, N);
  }, se.useId = function() {
    return L.current.useId();
  }, se.useImperativeHandle = function(_, N, oe) {
    return L.current.useImperativeHandle(_, N, oe);
  }, se.useInsertionEffect = function(_, N) {
    return L.current.useInsertionEffect(_, N);
  }, se.useLayoutEffect = function(_, N) {
    return L.current.useLayoutEffect(_, N);
  }, se.useMemo = function(_, N) {
    return L.current.useMemo(_, N);
  }, se.useReducer = function(_, N, oe) {
    return L.current.useReducer(_, N, oe);
  }, se.useRef = function(_) {
    return L.current.useRef(_);
  }, se.useState = function(_) {
    return L.current.useState(_);
  }, se.useSyncExternalStore = function(_, N, oe) {
    return L.current.useSyncExternalStore(_, N, oe);
  }, se.useTransition = function() {
    return L.current.useTransition();
  }, se.version = "18.3.1", se;
}
var rf;
function Qs() {
  return rf || (rf = 1, Ss.exports = Fh()), Ss.exports;
}
var ne = Qs();
const me = /* @__PURE__ */ Ch(ne);
var co = {}, ks = { exports: {} }, rt = {}, Es = { exports: {} }, Cs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lf;
function Ph() {
  return lf || (lf = 1, (function(l) {
    function a(A, b) {
      var M = A.length;
      A.push(b);
      e: for (; 0 < M; ) {
        var _ = M - 1 >>> 1, N = A[_];
        if (0 < f(N, b)) A[_] = b, A[M] = N, M = _;
        else break e;
      }
    }
    function s(A) {
      return A.length === 0 ? null : A[0];
    }
    function p(A) {
      if (A.length === 0) return null;
      var b = A[0], M = A.pop();
      if (M !== b) {
        A[0] = M;
        e: for (var _ = 0, N = A.length, oe = N >>> 1; _ < oe; ) {
          var ie = 2 * (_ + 1) - 1, ae = A[ie], ue = ie + 1, ye = A[ue];
          if (0 > f(ae, M)) ue < N && 0 > f(ye, ae) ? (A[_] = ye, A[ue] = M, _ = ue) : (A[_] = ae, A[ie] = M, _ = ie);
          else if (ue < N && 0 > f(ye, M)) A[_] = ye, A[ue] = M, _ = ue;
          else break e;
        }
      }
      return b;
    }
    function f(A, b) {
      var M = A.sortIndex - b.sortIndex;
      return M !== 0 ? M : A.id - b.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var g = performance;
      l.unstable_now = function() {
        return g.now();
      };
    } else {
      var h = Date, y = h.now();
      l.unstable_now = function() {
        return h.now() - y;
      };
    }
    var d = [], c = [], E = 1, S = null, v = 3, C = !1, I = !1, x = !1, z = typeof setTimeout == "function" ? setTimeout : null, Y = typeof clearTimeout == "function" ? clearTimeout : null, G = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function re(A) {
      for (var b = s(c); b !== null; ) {
        if (b.callback === null) p(c);
        else if (b.startTime <= A) p(c), b.sortIndex = b.expirationTime, a(d, b);
        else break;
        b = s(c);
      }
    }
    function ee(A) {
      if (x = !1, re(A), !I) if (s(d) !== null) I = !0, B(ge);
      else {
        var b = s(c);
        b !== null && L(ee, b.startTime - A);
      }
    }
    function ge(A, b) {
      I = !1, x && (x = !1, Y(Ee), Ee = -1), C = !0;
      var M = v;
      try {
        for (re(b), S = s(d); S !== null && (!(S.expirationTime > b) || A && !Ve()); ) {
          var _ = S.callback;
          if (typeof _ == "function") {
            S.callback = null, v = S.priorityLevel;
            var N = _(S.expirationTime <= b);
            b = l.unstable_now(), typeof N == "function" ? S.callback = N : S === s(d) && p(d), re(b);
          } else p(d);
          S = s(d);
        }
        if (S !== null) var oe = !0;
        else {
          var ie = s(c);
          ie !== null && L(ee, ie.startTime - b), oe = !1;
        }
        return oe;
      } finally {
        S = null, v = M, C = !1;
      }
    }
    var ke = !1, de = null, Ee = -1, be = 5, Ie = -1;
    function Ve() {
      return !(l.unstable_now() - Ie < be);
    }
    function V() {
      if (de !== null) {
        var A = l.unstable_now();
        Ie = A;
        var b = !0;
        try {
          b = de(!0, A);
        } finally {
          b ? J() : (ke = !1, de = null);
        }
      } else ke = !1;
    }
    var J;
    if (typeof G == "function") J = function() {
      G(V);
    };
    else if (typeof MessageChannel < "u") {
      var $ = new MessageChannel(), U = $.port2;
      $.port1.onmessage = V, J = function() {
        U.postMessage(null);
      };
    } else J = function() {
      z(V, 0);
    };
    function B(A) {
      de = A, ke || (ke = !0, J());
    }
    function L(A, b) {
      Ee = z(function() {
        A(l.unstable_now());
      }, b);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(A) {
      A.callback = null;
    }, l.unstable_continueExecution = function() {
      I || C || (I = !0, B(ge));
    }, l.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : be = 0 < A ? Math.floor(1e3 / A) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return v;
    }, l.unstable_getFirstCallbackNode = function() {
      return s(d);
    }, l.unstable_next = function(A) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = v;
      }
      var M = v;
      v = b;
      try {
        return A();
      } finally {
        v = M;
      }
    }, l.unstable_pauseExecution = function() {
    }, l.unstable_requestPaint = function() {
    }, l.unstable_runWithPriority = function(A, b) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var M = v;
      v = A;
      try {
        return b();
      } finally {
        v = M;
      }
    }, l.unstable_scheduleCallback = function(A, b, M) {
      var _ = l.unstable_now();
      switch (typeof M == "object" && M !== null ? (M = M.delay, M = typeof M == "number" && 0 < M ? _ + M : _) : M = _, A) {
        case 1:
          var N = -1;
          break;
        case 2:
          N = 250;
          break;
        case 5:
          N = 1073741823;
          break;
        case 4:
          N = 1e4;
          break;
        default:
          N = 5e3;
      }
      return N = M + N, A = { id: E++, callback: b, priorityLevel: A, startTime: M, expirationTime: N, sortIndex: -1 }, M > _ ? (A.sortIndex = M, a(c, A), s(d) === null && A === s(c) && (x ? (Y(Ee), Ee = -1) : x = !0, L(ee, M - _))) : (A.sortIndex = N, a(d, A), I || C || (I = !0, B(ge))), A;
    }, l.unstable_shouldYield = Ve, l.unstable_wrapCallback = function(A) {
      var b = v;
      return function() {
        var M = v;
        v = b;
        try {
          return A.apply(this, arguments);
        } finally {
          v = M;
        }
      };
    };
  })(Cs)), Cs;
}
var of;
function $h() {
  return of || (of = 1, Es.exports = Ph()), Es.exports;
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
var sf;
function Th() {
  if (sf) return rt;
  sf = 1;
  var l = Qs(), a = $h();
  function s(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var p = /* @__PURE__ */ new Set(), f = {};
  function g(e, t) {
    h(e, t), h(e + "Capture", t);
  }
  function h(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) p.add(t[e]);
  }
  var y = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), d = Object.prototype.hasOwnProperty, c = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, E = {}, S = {};
  function v(e) {
    return d.call(S, e) ? !0 : d.call(E, e) ? !1 : c.test(e) ? S[e] = !0 : (E[e] = !0, !1);
  }
  function C(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function I(e, t, n, r) {
    if (t === null || typeof t > "u" || C(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
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
  function x(e, t, n, r, o, i, u) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = u;
  }
  var z = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    z[e] = new x(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    z[t] = new x(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    z[e] = new x(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    z[e] = new x(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    z[e] = new x(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    z[e] = new x(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    z[e] = new x(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    z[e] = new x(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    z[e] = new x(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Y = /[\-:]([a-z])/g;
  function G(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      Y,
      G
    );
    z[t] = new x(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Y, G);
    z[t] = new x(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Y, G);
    z[t] = new x(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    z[e] = new x(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), z.xlinkHref = new x("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    z[e] = new x(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function re(e, t, n, r) {
    var o = z.hasOwnProperty(t) ? z[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (I(t, n, o, r) && (n = null), r || o === null ? v(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ee = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ge = Symbol.for("react.element"), ke = Symbol.for("react.portal"), de = Symbol.for("react.fragment"), Ee = Symbol.for("react.strict_mode"), be = Symbol.for("react.profiler"), Ie = Symbol.for("react.provider"), Ve = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), A = Symbol.iterator;
  function b(e) {
    return e === null || typeof e != "object" ? null : (e = A && e[A] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var M = Object.assign, _;
  function N(e) {
    if (_ === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      _ = t && t[1] || "";
    }
    return `
` + _ + e;
  }
  var oe = !1;
  function ie(e, t) {
    if (!e || oe) return "";
    oe = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (T) {
          var r = T;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (T) {
          r = T;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (T) {
          r = T;
        }
        e();
      }
    } catch (T) {
      if (T && r && typeof T.stack == "string") {
        for (var o = T.stack.split(`
`), i = r.stack.split(`
`), u = o.length - 1, m = i.length - 1; 1 <= u && 0 <= m && o[u] !== i[m]; ) m--;
        for (; 1 <= u && 0 <= m; u--, m--) if (o[u] !== i[m]) {
          if (u !== 1 || m !== 1)
            do
              if (u--, m--, 0 > m || o[u] !== i[m]) {
                var w = `
` + o[u].replace(" at new ", " at ");
                return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), w;
              }
            while (1 <= u && 0 <= m);
          break;
        }
      }
    } finally {
      oe = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? N(e) : "";
  }
  function ae(e) {
    switch (e.tag) {
      case 5:
        return N(e.type);
      case 16:
        return N("Lazy");
      case 13:
        return N("Suspense");
      case 19:
        return N("SuspenseList");
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
      case de:
        return "Fragment";
      case ke:
        return "Portal";
      case be:
        return "Profiler";
      case Ee:
        return "StrictMode";
      case J:
        return "Suspense";
      case $:
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
      case B:
        t = e._payload, e = e._init;
        try {
          return ue(e(t));
        } catch {
        }
    }
    return null;
  }
  function ye(e) {
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
  function Ce(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ot(e) {
    var t = Ce(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var o = n.get, i = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return o.call(this);
      }, set: function(u) {
        r = "" + u, i.call(this, u);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(u) {
        r = "" + u;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function el(e) {
    e._valueTracker || (e._valueTracker = ot(e));
  }
  function la(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = Ce(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function tl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function $o(e, t) {
    var n = t.checked;
    return M({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function oa(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = pe(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function ia(e, t) {
    t = t.checked, t != null && re(e, "checked", t, !1);
  }
  function To(e, t) {
    ia(e, t);
    var n = pe(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? bo(e, t.type, n) : t.hasOwnProperty("defaultValue") && bo(e, t.type, pe(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function sa(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function bo(e, t, n) {
    (t !== "number" || tl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var ur = Array.isArray;
  function bn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + pe(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          e[o].selected = !0, r && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function zo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return M({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function aa(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(s(92));
        if (ur(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: pe(n) };
  }
  function ua(e, t) {
    var n = pe(t.value), r = pe(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function ca(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function fa(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function No(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? fa(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var nl, da = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, o);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (nl = nl || document.createElement("div"), nl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = nl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function cr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var fr = {
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
  }, Td = ["Webkit", "ms", "Moz", "O"];
  Object.keys(fr).forEach(function(e) {
    Td.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), fr[t] = fr[e];
    });
  });
  function pa(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || fr.hasOwnProperty(e) && fr[e] ? ("" + t).trim() : t + "px";
  }
  function ha(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = pa(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
  }
  var bd = M({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ao(e, t) {
    if (t) {
      if (bd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(s(62));
    }
  }
  function Lo(e, t) {
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
  var Mo = null;
  function Ro(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Io = null, zn = null, Nn = null;
  function ma(e) {
    if (e = Ar(e)) {
      if (typeof Io != "function") throw Error(s(280));
      var t = e.stateNode;
      t && (t = Cl(t), Io(e.stateNode, e.type, t));
    }
  }
  function va(e) {
    zn ? Nn ? Nn.push(e) : Nn = [e] : zn = e;
  }
  function ya() {
    if (zn) {
      var e = zn, t = Nn;
      if (Nn = zn = null, ma(e), t) for (e = 0; e < t.length; e++) ma(t[e]);
    }
  }
  function ga(e, t) {
    return e(t);
  }
  function wa() {
  }
  var Oo = !1;
  function xa(e, t, n) {
    if (Oo) return e(t, n);
    Oo = !0;
    try {
      return ga(e, t, n);
    } finally {
      Oo = !1, (zn !== null || Nn !== null) && (wa(), ya());
    }
  }
  function dr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Cl(n);
    if (r === null) return null;
    n = r[t];
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
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(s(231, t, typeof n));
    return n;
  }
  var Do = !1;
  if (y) try {
    var pr = {};
    Object.defineProperty(pr, "passive", { get: function() {
      Do = !0;
    } }), window.addEventListener("test", pr, pr), window.removeEventListener("test", pr, pr);
  } catch {
    Do = !1;
  }
  function zd(e, t, n, r, o, i, u, m, w) {
    var T = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, T);
    } catch (O) {
      this.onError(O);
    }
  }
  var hr = !1, rl = null, ll = !1, jo = null, Nd = { onError: function(e) {
    hr = !0, rl = e;
  } };
  function Ad(e, t, n, r, o, i, u, m, w) {
    hr = !1, rl = null, zd.apply(Nd, arguments);
  }
  function Ld(e, t, n, r, o, i, u, m, w) {
    if (Ad.apply(this, arguments), hr) {
      if (hr) {
        var T = rl;
        hr = !1, rl = null;
      } else throw Error(s(198));
      ll || (ll = !0, jo = T);
    }
  }
  function cn(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function _a(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Sa(e) {
    if (cn(e) !== e) throw Error(s(188));
  }
  function Md(e) {
    var t = e.alternate;
    if (!t) {
      if (t = cn(e), t === null) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var i = o.alternate;
      if (i === null) {
        if (r = o.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (o.child === i.child) {
        for (i = o.child; i; ) {
          if (i === n) return Sa(o), e;
          if (i === r) return Sa(o), t;
          i = i.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== r.return) n = o, r = i;
      else {
        for (var u = !1, m = o.child; m; ) {
          if (m === n) {
            u = !0, n = o, r = i;
            break;
          }
          if (m === r) {
            u = !0, r = o, n = i;
            break;
          }
          m = m.sibling;
        }
        if (!u) {
          for (m = i.child; m; ) {
            if (m === n) {
              u = !0, n = i, r = o;
              break;
            }
            if (m === r) {
              u = !0, r = i, n = o;
              break;
            }
            m = m.sibling;
          }
          if (!u) throw Error(s(189));
        }
      }
      if (n.alternate !== r) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function ka(e) {
    return e = Md(e), e !== null ? Ea(e) : null;
  }
  function Ea(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Ea(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ca = a.unstable_scheduleCallback, Fa = a.unstable_cancelCallback, Rd = a.unstable_shouldYield, Id = a.unstable_requestPaint, Ne = a.unstable_now, Od = a.unstable_getCurrentPriorityLevel, Uo = a.unstable_ImmediatePriority, Pa = a.unstable_UserBlockingPriority, ol = a.unstable_NormalPriority, Dd = a.unstable_LowPriority, $a = a.unstable_IdlePriority, il = null, Et = null;
  function jd(e) {
    if (Et && typeof Et.onCommitFiberRoot == "function") try {
      Et.onCommitFiberRoot(il, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var yt = Math.clz32 ? Math.clz32 : Hd, Ud = Math.log, Vd = Math.LN2;
  function Hd(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ud(e) / Vd | 0) | 0;
  }
  var sl = 64, al = 4194304;
  function mr(e) {
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
  function ul(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, o = e.suspendedLanes, i = e.pingedLanes, u = n & 268435455;
    if (u !== 0) {
      var m = u & ~o;
      m !== 0 ? r = mr(m) : (i &= u, i !== 0 && (r = mr(i)));
    } else u = n & ~o, u !== 0 ? r = mr(u) : i !== 0 && (r = mr(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & o) === 0 && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - yt(t), o = 1 << n, r |= e[n], t &= ~o;
    return r;
  }
  function Bd(e, t) {
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
  function Wd(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
      var u = 31 - yt(i), m = 1 << u, w = o[u];
      w === -1 ? ((m & n) === 0 || (m & r) !== 0) && (o[u] = Bd(m, t)) : w <= t && (e.expiredLanes |= m), i &= ~m;
    }
  }
  function Vo(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Ta() {
    var e = sl;
    return sl <<= 1, (sl & 4194240) === 0 && (sl = 64), e;
  }
  function Ho(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function vr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - yt(t), e[t] = n;
  }
  function Kd(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var o = 31 - yt(n), i = 1 << o;
      t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
    }
  }
  function Bo(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - yt(n), o = 1 << r;
      o & t | e[r] & t && (e[r] |= t), n &= ~o;
    }
  }
  var he = 0;
  function ba(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var za, Wo, Na, Aa, La, Ko = !1, cl = [], Vt = null, Ht = null, Bt = null, yr = /* @__PURE__ */ new Map(), gr = /* @__PURE__ */ new Map(), Wt = [], Qd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ma(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Vt = null;
        break;
      case "dragenter":
      case "dragleave":
        Ht = null;
        break;
      case "mouseover":
      case "mouseout":
        Bt = null;
        break;
      case "pointerover":
      case "pointerout":
        yr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        gr.delete(t.pointerId);
    }
  }
  function wr(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Ar(t), t !== null && Wo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function Gd(e, t, n, r, o) {
    switch (t) {
      case "focusin":
        return Vt = wr(Vt, e, t, n, r, o), !0;
      case "dragenter":
        return Ht = wr(Ht, e, t, n, r, o), !0;
      case "mouseover":
        return Bt = wr(Bt, e, t, n, r, o), !0;
      case "pointerover":
        var i = o.pointerId;
        return yr.set(i, wr(yr.get(i) || null, e, t, n, r, o)), !0;
      case "gotpointercapture":
        return i = o.pointerId, gr.set(i, wr(gr.get(i) || null, e, t, n, r, o)), !0;
    }
    return !1;
  }
  function Ra(e) {
    var t = fn(e.target);
    if (t !== null) {
      var n = cn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = _a(n), t !== null) {
            e.blockedOn = t, La(e.priority, function() {
              Na(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function fl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Go(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Mo = r, n.target.dispatchEvent(r), Mo = null;
      } else return t = Ar(n), t !== null && Wo(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Ia(e, t, n) {
    fl(e) && n.delete(t);
  }
  function Xd() {
    Ko = !1, Vt !== null && fl(Vt) && (Vt = null), Ht !== null && fl(Ht) && (Ht = null), Bt !== null && fl(Bt) && (Bt = null), yr.forEach(Ia), gr.forEach(Ia);
  }
  function xr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ko || (Ko = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Xd)));
  }
  function _r(e) {
    function t(o) {
      return xr(o, e);
    }
    if (0 < cl.length) {
      xr(cl[0], e);
      for (var n = 1; n < cl.length; n++) {
        var r = cl[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Vt !== null && xr(Vt, e), Ht !== null && xr(Ht, e), Bt !== null && xr(Bt, e), yr.forEach(t), gr.forEach(t), n = 0; n < Wt.length; n++) r = Wt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Wt.length && (n = Wt[0], n.blockedOn === null); ) Ra(n), n.blockedOn === null && Wt.shift();
  }
  var An = ee.ReactCurrentBatchConfig, dl = !0;
  function Yd(e, t, n, r) {
    var o = he, i = An.transition;
    An.transition = null;
    try {
      he = 1, Qo(e, t, n, r);
    } finally {
      he = o, An.transition = i;
    }
  }
  function qd(e, t, n, r) {
    var o = he, i = An.transition;
    An.transition = null;
    try {
      he = 4, Qo(e, t, n, r);
    } finally {
      he = o, An.transition = i;
    }
  }
  function Qo(e, t, n, r) {
    if (dl) {
      var o = Go(e, t, n, r);
      if (o === null) fi(e, t, r, pl, n), Ma(e, r);
      else if (Gd(o, e, t, n, r)) r.stopPropagation();
      else if (Ma(e, r), t & 4 && -1 < Qd.indexOf(e)) {
        for (; o !== null; ) {
          var i = Ar(o);
          if (i !== null && za(i), i = Go(e, t, n, r), i === null && fi(e, t, r, pl, n), i === o) break;
          o = i;
        }
        o !== null && r.stopPropagation();
      } else fi(e, t, r, null, n);
    }
  }
  var pl = null;
  function Go(e, t, n, r) {
    if (pl = null, e = Ro(r), e = fn(e), e !== null) if (t = cn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = _a(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return pl = e, null;
  }
  function Oa(e) {
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
        switch (Od()) {
          case Uo:
            return 1;
          case Pa:
            return 4;
          case ol:
          case Dd:
            return 16;
          case $a:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Kt = null, Xo = null, hl = null;
  function Da() {
    if (hl) return hl;
    var e, t = Xo, n = t.length, r, o = "value" in Kt ? Kt.value : Kt.textContent, i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++) ;
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === o[i - r]; r++) ;
    return hl = o.slice(e, 1 < r ? 1 - r : void 0);
  }
  function ml(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function vl() {
    return !0;
  }
  function ja() {
    return !1;
  }
  function it(e) {
    function t(n, r, o, i, u) {
      this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = u, this.currentTarget = null;
      for (var m in e) e.hasOwnProperty(m) && (n = e[m], this[m] = n ? n(i) : i[m]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? vl : ja, this.isPropagationStopped = ja, this;
    }
    return M(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = vl);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = vl);
    }, persist: function() {
    }, isPersistent: vl }), t;
  }
  var Ln = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Yo = it(Ln), Sr = M({}, Ln, { view: 0, detail: 0 }), Zd = it(Sr), qo, Zo, kr, yl = M({}, Sr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ei, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== kr && (kr && e.type === "mousemove" ? (qo = e.screenX - kr.screenX, Zo = e.screenY - kr.screenY) : Zo = qo = 0, kr = e), qo);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Zo;
  } }), Ua = it(yl), Jd = M({}, yl, { dataTransfer: 0 }), ep = it(Jd), tp = M({}, Sr, { relatedTarget: 0 }), Jo = it(tp), np = M({}, Ln, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), rp = it(np), lp = M({}, Ln, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), op = it(lp), ip = M({}, Ln, { data: 0 }), Va = it(ip), sp = {
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
  }, ap = {
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
  var fp = M({}, Sr, { key: function(e) {
    if (e.key) {
      var t = sp[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = ml(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ap[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ei, charCode: function(e) {
    return e.type === "keypress" ? ml(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? ml(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), dp = it(fp), pp = M({}, yl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ha = it(pp), hp = M({}, Sr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ei }), mp = it(hp), vp = M({}, Ln, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), yp = it(vp), gp = M({}, yl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), wp = it(gp), xp = [9, 13, 27, 32], ti = y && "CompositionEvent" in window, Er = null;
  y && "documentMode" in document && (Er = document.documentMode);
  var _p = y && "TextEvent" in window && !Er, Ba = y && (!ti || Er && 8 < Er && 11 >= Er), Wa = " ", Ka = !1;
  function Qa(e, t) {
    switch (e) {
      case "keyup":
        return xp.indexOf(t.keyCode) !== -1;
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
  function Ga(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Mn = !1;
  function Sp(e, t) {
    switch (e) {
      case "compositionend":
        return Ga(t);
      case "keypress":
        return t.which !== 32 ? null : (Ka = !0, Wa);
      case "textInput":
        return e = t.data, e === Wa && Ka ? null : e;
      default:
        return null;
    }
  }
  function kp(e, t) {
    if (Mn) return e === "compositionend" || !ti && Qa(e, t) ? (e = Da(), hl = Xo = Kt = null, Mn = !1, e) : null;
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
        return Ba && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Ep = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Xa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Ep[e.type] : t === "textarea";
  }
  function Ya(e, t, n, r) {
    va(r), t = Sl(t, "onChange"), 0 < t.length && (n = new Yo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Cr = null, Fr = null;
  function Cp(e) {
    hu(e, 0);
  }
  function gl(e) {
    var t = jn(e);
    if (la(t)) return e;
  }
  function Fp(e, t) {
    if (e === "change") return t;
  }
  var qa = !1;
  if (y) {
    var ni;
    if (y) {
      var ri = "oninput" in document;
      if (!ri) {
        var Za = document.createElement("div");
        Za.setAttribute("oninput", "return;"), ri = typeof Za.oninput == "function";
      }
      ni = ri;
    } else ni = !1;
    qa = ni && (!document.documentMode || 9 < document.documentMode);
  }
  function Ja() {
    Cr && (Cr.detachEvent("onpropertychange", eu), Fr = Cr = null);
  }
  function eu(e) {
    if (e.propertyName === "value" && gl(Fr)) {
      var t = [];
      Ya(t, Fr, e, Ro(e)), xa(Cp, t);
    }
  }
  function Pp(e, t, n) {
    e === "focusin" ? (Ja(), Cr = t, Fr = n, Cr.attachEvent("onpropertychange", eu)) : e === "focusout" && Ja();
  }
  function $p(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return gl(Fr);
  }
  function Tp(e, t) {
    if (e === "click") return gl(t);
  }
  function bp(e, t) {
    if (e === "input" || e === "change") return gl(t);
  }
  function zp(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var gt = typeof Object.is == "function" ? Object.is : zp;
  function Pr(e, t) {
    if (gt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var o = n[r];
      if (!d.call(t, o) || !gt(e[o], t[o])) return !1;
    }
    return !0;
  }
  function tu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function nu(e, t) {
    var n = tu(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = tu(n);
    }
  }
  function ru(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ru(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function lu() {
    for (var e = window, t = tl(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = tl(e.document);
    }
    return t;
  }
  function li(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Np(e) {
    var t = lu(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && ru(n.ownerDocument.documentElement, n)) {
      if (r !== null && li(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var o = n.textContent.length, i = Math.min(r.start, o);
          r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = nu(n, i);
          var u = nu(
            n,
            r
          );
          o && u && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== u.node || e.focusOffset !== u.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(u.node, u.offset)) : (t.setEnd(u.node, u.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Ap = y && "documentMode" in document && 11 >= document.documentMode, Rn = null, oi = null, $r = null, ii = !1;
  function ou(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ii || Rn == null || Rn !== tl(r) || (r = Rn, "selectionStart" in r && li(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), $r && Pr($r, r) || ($r = r, r = Sl(oi, "onSelect"), 0 < r.length && (t = new Yo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Rn)));
  }
  function wl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var In = { animationend: wl("Animation", "AnimationEnd"), animationiteration: wl("Animation", "AnimationIteration"), animationstart: wl("Animation", "AnimationStart"), transitionend: wl("Transition", "TransitionEnd") }, si = {}, iu = {};
  y && (iu = document.createElement("div").style, "AnimationEvent" in window || (delete In.animationend.animation, delete In.animationiteration.animation, delete In.animationstart.animation), "TransitionEvent" in window || delete In.transitionend.transition);
  function xl(e) {
    if (si[e]) return si[e];
    if (!In[e]) return e;
    var t = In[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in iu) return si[e] = t[n];
    return e;
  }
  var su = xl("animationend"), au = xl("animationiteration"), uu = xl("animationstart"), cu = xl("transitionend"), fu = /* @__PURE__ */ new Map(), du = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Qt(e, t) {
    fu.set(e, t), g(t, [e]);
  }
  for (var ai = 0; ai < du.length; ai++) {
    var ui = du[ai], Lp = ui.toLowerCase(), Mp = ui[0].toUpperCase() + ui.slice(1);
    Qt(Lp, "on" + Mp);
  }
  Qt(su, "onAnimationEnd"), Qt(au, "onAnimationIteration"), Qt(uu, "onAnimationStart"), Qt("dblclick", "onDoubleClick"), Qt("focusin", "onFocus"), Qt("focusout", "onBlur"), Qt(cu, "onTransitionEnd"), h("onMouseEnter", ["mouseout", "mouseover"]), h("onMouseLeave", ["mouseout", "mouseover"]), h("onPointerEnter", ["pointerout", "pointerover"]), h("onPointerLeave", ["pointerout", "pointerover"]), g("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), g("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), g("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), g("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), g("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), g("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Tr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Rp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));
  function pu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Ld(r, t, void 0, e), e.currentTarget = null;
  }
  function hu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], o = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t) for (var u = r.length - 1; 0 <= u; u--) {
          var m = r[u], w = m.instance, T = m.currentTarget;
          if (m = m.listener, w !== i && o.isPropagationStopped()) break e;
          pu(o, m, T), i = w;
        }
        else for (u = 0; u < r.length; u++) {
          if (m = r[u], w = m.instance, T = m.currentTarget, m = m.listener, w !== i && o.isPropagationStopped()) break e;
          pu(o, m, T), i = w;
        }
      }
    }
    if (ll) throw e = jo, ll = !1, jo = null, e;
  }
  function xe(e, t) {
    var n = t[yi];
    n === void 0 && (n = t[yi] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (mu(t, e, 2, !1), n.add(r));
  }
  function ci(e, t, n) {
    var r = 0;
    t && (r |= 4), mu(n, e, r, t);
  }
  var _l = "_reactListening" + Math.random().toString(36).slice(2);
  function br(e) {
    if (!e[_l]) {
      e[_l] = !0, p.forEach(function(n) {
        n !== "selectionchange" && (Rp.has(n) || ci(n, !1, e), ci(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[_l] || (t[_l] = !0, ci("selectionchange", !1, t));
    }
  }
  function mu(e, t, n, r) {
    switch (Oa(t)) {
      case 1:
        var o = Yd;
        break;
      case 4:
        o = qd;
        break;
      default:
        o = Qo;
    }
    n = o.bind(null, t, n, e), o = void 0, !Do || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
  }
  function fi(e, t, n, r, o) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var u = r.tag;
      if (u === 3 || u === 4) {
        var m = r.stateNode.containerInfo;
        if (m === o || m.nodeType === 8 && m.parentNode === o) break;
        if (u === 4) for (u = r.return; u !== null; ) {
          var w = u.tag;
          if ((w === 3 || w === 4) && (w = u.stateNode.containerInfo, w === o || w.nodeType === 8 && w.parentNode === o)) return;
          u = u.return;
        }
        for (; m !== null; ) {
          if (u = fn(m), u === null) return;
          if (w = u.tag, w === 5 || w === 6) {
            r = i = u;
            continue e;
          }
          m = m.parentNode;
        }
      }
      r = r.return;
    }
    xa(function() {
      var T = i, O = Ro(n), D = [];
      e: {
        var R = fu.get(e);
        if (R !== void 0) {
          var H = Yo, K = e;
          switch (e) {
            case "keypress":
              if (ml(n) === 0) break e;
            case "keydown":
            case "keyup":
              H = dp;
              break;
            case "focusin":
              K = "focus", H = Jo;
              break;
            case "focusout":
              K = "blur", H = Jo;
              break;
            case "beforeblur":
            case "afterblur":
              H = Jo;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              H = Ua;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = ep;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = mp;
              break;
            case su:
            case au:
            case uu:
              H = rp;
              break;
            case cu:
              H = yp;
              break;
            case "scroll":
              H = Zd;
              break;
            case "wheel":
              H = wp;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = op;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = Ha;
          }
          var Q = (t & 4) !== 0, Ae = !Q && e === "scroll", F = Q ? R !== null ? R + "Capture" : null : R;
          Q = [];
          for (var k = T, P; k !== null; ) {
            P = k;
            var j = P.stateNode;
            if (P.tag === 5 && j !== null && (P = j, F !== null && (j = dr(k, F), j != null && Q.push(zr(k, j, P)))), Ae) break;
            k = k.return;
          }
          0 < Q.length && (R = new H(R, K, null, n, O), D.push({ event: R, listeners: Q }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (R = e === "mouseover" || e === "pointerover", H = e === "mouseout" || e === "pointerout", R && n !== Mo && (K = n.relatedTarget || n.fromElement) && (fn(K) || K[bt])) break e;
          if ((H || R) && (R = O.window === O ? O : (R = O.ownerDocument) ? R.defaultView || R.parentWindow : window, H ? (K = n.relatedTarget || n.toElement, H = T, K = K ? fn(K) : null, K !== null && (Ae = cn(K), K !== Ae || K.tag !== 5 && K.tag !== 6) && (K = null)) : (H = null, K = T), H !== K)) {
            if (Q = Ua, j = "onMouseLeave", F = "onMouseEnter", k = "mouse", (e === "pointerout" || e === "pointerover") && (Q = Ha, j = "onPointerLeave", F = "onPointerEnter", k = "pointer"), Ae = H == null ? R : jn(H), P = K == null ? R : jn(K), R = new Q(j, k + "leave", H, n, O), R.target = Ae, R.relatedTarget = P, j = null, fn(O) === T && (Q = new Q(F, k + "enter", K, n, O), Q.target = P, Q.relatedTarget = Ae, j = Q), Ae = j, H && K) t: {
              for (Q = H, F = K, k = 0, P = Q; P; P = On(P)) k++;
              for (P = 0, j = F; j; j = On(j)) P++;
              for (; 0 < k - P; ) Q = On(Q), k--;
              for (; 0 < P - k; ) F = On(F), P--;
              for (; k--; ) {
                if (Q === F || F !== null && Q === F.alternate) break t;
                Q = On(Q), F = On(F);
              }
              Q = null;
            }
            else Q = null;
            H !== null && vu(D, R, H, Q, !1), K !== null && Ae !== null && vu(D, Ae, K, Q, !0);
          }
        }
        e: {
          if (R = T ? jn(T) : window, H = R.nodeName && R.nodeName.toLowerCase(), H === "select" || H === "input" && R.type === "file") var X = Fp;
          else if (Xa(R)) if (qa) X = bp;
          else {
            X = $p;
            var q = Pp;
          }
          else (H = R.nodeName) && H.toLowerCase() === "input" && (R.type === "checkbox" || R.type === "radio") && (X = Tp);
          if (X && (X = X(e, T))) {
            Ya(D, X, n, O);
            break e;
          }
          q && q(e, R, T), e === "focusout" && (q = R._wrapperState) && q.controlled && R.type === "number" && bo(R, "number", R.value);
        }
        switch (q = T ? jn(T) : window, e) {
          case "focusin":
            (Xa(q) || q.contentEditable === "true") && (Rn = q, oi = T, $r = null);
            break;
          case "focusout":
            $r = oi = Rn = null;
            break;
          case "mousedown":
            ii = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ii = !1, ou(D, n, O);
            break;
          case "selectionchange":
            if (Ap) break;
          case "keydown":
          case "keyup":
            ou(D, n, O);
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
        else Mn ? Qa(e, n) && (te = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (te = "onCompositionStart");
        te && (Ba && n.locale !== "ko" && (Mn || te !== "onCompositionStart" ? te === "onCompositionEnd" && Mn && (Z = Da()) : (Kt = O, Xo = "value" in Kt ? Kt.value : Kt.textContent, Mn = !0)), q = Sl(T, te), 0 < q.length && (te = new Va(te, e, null, n, O), D.push({ event: te, listeners: q }), Z ? te.data = Z : (Z = Ga(n), Z !== null && (te.data = Z)))), (Z = _p ? Sp(e, n) : kp(e, n)) && (T = Sl(T, "onBeforeInput"), 0 < T.length && (O = new Va("onBeforeInput", "beforeinput", null, n, O), D.push({ event: O, listeners: T }), O.data = Z));
      }
      hu(D, t);
    });
  }
  function zr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Sl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var o = e, i = o.stateNode;
      o.tag === 5 && i !== null && (o = i, i = dr(e, n), i != null && r.unshift(zr(e, i, o)), i = dr(e, t), i != null && r.push(zr(e, i, o))), e = e.return;
    }
    return r;
  }
  function On(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function vu(e, t, n, r, o) {
    for (var i = t._reactName, u = []; n !== null && n !== r; ) {
      var m = n, w = m.alternate, T = m.stateNode;
      if (w !== null && w === r) break;
      m.tag === 5 && T !== null && (m = T, o ? (w = dr(n, i), w != null && u.unshift(zr(n, w, m))) : o || (w = dr(n, i), w != null && u.push(zr(n, w, m)))), n = n.return;
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var Ip = /\r\n?/g, Op = /\u0000|\uFFFD/g;
  function yu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Ip, `
`).replace(Op, "");
  }
  function kl(e, t, n) {
    if (t = yu(t), yu(e) !== t && n) throw Error(s(425));
  }
  function El() {
  }
  var di = null, pi = null;
  function hi(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var mi = typeof setTimeout == "function" ? setTimeout : void 0, Dp = typeof clearTimeout == "function" ? clearTimeout : void 0, gu = typeof Promise == "function" ? Promise : void 0, jp = typeof queueMicrotask == "function" ? queueMicrotask : typeof gu < "u" ? function(e) {
    return gu.resolve(null).then(e).catch(Up);
  } : mi;
  function Up(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function vi(e, t) {
    var n = t, r = 0;
    do {
      var o = n.nextSibling;
      if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), _r(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = o;
    } while (n);
    _r(t);
  }
  function Gt(e) {
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
  function wu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Dn = Math.random().toString(36).slice(2), Ct = "__reactFiber$" + Dn, Nr = "__reactProps$" + Dn, bt = "__reactContainer$" + Dn, yi = "__reactEvents$" + Dn, Vp = "__reactListeners$" + Dn, Hp = "__reactHandles$" + Dn;
  function fn(e) {
    var t = e[Ct];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[bt] || n[Ct]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = wu(e); e !== null; ) {
          if (n = e[Ct]) return n;
          e = wu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Ar(e) {
    return e = e[Ct] || e[bt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function jn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Cl(e) {
    return e[Nr] || null;
  }
  var gi = [], Un = -1;
  function Xt(e) {
    return { current: e };
  }
  function _e(e) {
    0 > Un || (e.current = gi[Un], gi[Un] = null, Un--);
  }
  function we(e, t) {
    Un++, gi[Un] = e.current, e.current = t;
  }
  var Yt = {}, Ke = Xt(Yt), Ze = Xt(!1), dn = Yt;
  function Vn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Yt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in n) o[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
  }
  function Je(e) {
    return e = e.childContextTypes, e != null;
  }
  function Fl() {
    _e(Ze), _e(Ke);
  }
  function xu(e, t, n) {
    if (Ke.current !== Yt) throw Error(s(168));
    we(Ke, t), we(Ze, n);
  }
  function _u(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(s(108, ye(e) || "Unknown", o));
    return M({}, n, r);
  }
  function Pl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Yt, dn = Ke.current, we(Ke, e), we(Ze, Ze.current), !0;
  }
  function Su(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    n ? (e = _u(e, t, dn), r.__reactInternalMemoizedMergedChildContext = e, _e(Ze), _e(Ke), we(Ke, e)) : _e(Ze), we(Ze, n);
  }
  var zt = null, $l = !1, wi = !1;
  function ku(e) {
    zt === null ? zt = [e] : zt.push(e);
  }
  function Bp(e) {
    $l = !0, ku(e);
  }
  function qt() {
    if (!wi && zt !== null) {
      wi = !0;
      var e = 0, t = he;
      try {
        var n = zt;
        for (he = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        zt = null, $l = !1;
      } catch (o) {
        throw zt !== null && (zt = zt.slice(e + 1)), Ca(Uo, qt), o;
      } finally {
        he = t, wi = !1;
      }
    }
    return null;
  }
  var Hn = [], Bn = 0, Tl = null, bl = 0, ct = [], ft = 0, pn = null, Nt = 1, At = "";
  function hn(e, t) {
    Hn[Bn++] = bl, Hn[Bn++] = Tl, Tl = e, bl = t;
  }
  function Eu(e, t, n) {
    ct[ft++] = Nt, ct[ft++] = At, ct[ft++] = pn, pn = e;
    var r = Nt;
    e = At;
    var o = 32 - yt(r) - 1;
    r &= ~(1 << o), n += 1;
    var i = 32 - yt(t) + o;
    if (30 < i) {
      var u = o - o % 5;
      i = (r & (1 << u) - 1).toString(32), r >>= u, o -= u, Nt = 1 << 32 - yt(t) + o | n << o | r, At = i + e;
    } else Nt = 1 << i | n << o | r, At = e;
  }
  function xi(e) {
    e.return !== null && (hn(e, 1), Eu(e, 1, 0));
  }
  function _i(e) {
    for (; e === Tl; ) Tl = Hn[--Bn], Hn[Bn] = null, bl = Hn[--Bn], Hn[Bn] = null;
    for (; e === pn; ) pn = ct[--ft], ct[ft] = null, At = ct[--ft], ct[ft] = null, Nt = ct[--ft], ct[ft] = null;
  }
  var st = null, at = null, Fe = !1, wt = null;
  function Cu(e, t) {
    var n = mt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Fu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, st = e, at = Gt(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, st = e, at = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = pn !== null ? { id: Nt, overflow: At } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = mt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, st = e, at = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Si(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ki(e) {
    if (Fe) {
      var t = at;
      if (t) {
        var n = t;
        if (!Fu(e, t)) {
          if (Si(e)) throw Error(s(418));
          t = Gt(n.nextSibling);
          var r = st;
          t && Fu(e, t) ? Cu(r, n) : (e.flags = e.flags & -4097 | 2, Fe = !1, st = e);
        }
      } else {
        if (Si(e)) throw Error(s(418));
        e.flags = e.flags & -4097 | 2, Fe = !1, st = e;
      }
    }
  }
  function Pu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    st = e;
  }
  function zl(e) {
    if (e !== st) return !1;
    if (!Fe) return Pu(e), Fe = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !hi(e.type, e.memoizedProps)), t && (t = at)) {
      if (Si(e)) throw $u(), Error(s(418));
      for (; t; ) Cu(e, t), t = Gt(t.nextSibling);
    }
    if (Pu(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                at = Gt(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        at = null;
      }
    } else at = st ? Gt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function $u() {
    for (var e = at; e; ) e = Gt(e.nextSibling);
  }
  function Wn() {
    at = st = null, Fe = !1;
  }
  function Ei(e) {
    wt === null ? wt = [e] : wt.push(e);
  }
  var Wp = ee.ReactCurrentBatchConfig;
  function Lr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(s(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(s(147, e));
        var o = r, i = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(u) {
          var m = o.refs;
          u === null ? delete m[i] : m[i] = u;
        }, t._stringRef = i, t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!n._owner) throw Error(s(290, e));
    }
    return e;
  }
  function Nl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Tu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function bu(e) {
    function t(F, k) {
      if (e) {
        var P = F.deletions;
        P === null ? (F.deletions = [k], F.flags |= 16) : P.push(k);
      }
    }
    function n(F, k) {
      if (!e) return null;
      for (; k !== null; ) t(F, k), k = k.sibling;
      return null;
    }
    function r(F, k) {
      for (F = /* @__PURE__ */ new Map(); k !== null; ) k.key !== null ? F.set(k.key, k) : F.set(k.index, k), k = k.sibling;
      return F;
    }
    function o(F, k) {
      return F = on(F, k), F.index = 0, F.sibling = null, F;
    }
    function i(F, k, P) {
      return F.index = P, e ? (P = F.alternate, P !== null ? (P = P.index, P < k ? (F.flags |= 2, k) : P) : (F.flags |= 2, k)) : (F.flags |= 1048576, k);
    }
    function u(F) {
      return e && F.alternate === null && (F.flags |= 2), F;
    }
    function m(F, k, P, j) {
      return k === null || k.tag !== 6 ? (k = ms(P, F.mode, j), k.return = F, k) : (k = o(k, P), k.return = F, k);
    }
    function w(F, k, P, j) {
      var X = P.type;
      return X === de ? O(F, k, P.props.children, j, P.key) : k !== null && (k.elementType === X || typeof X == "object" && X !== null && X.$$typeof === B && Tu(X) === k.type) ? (j = o(k, P.props), j.ref = Lr(F, k, P), j.return = F, j) : (j = no(P.type, P.key, P.props, null, F.mode, j), j.ref = Lr(F, k, P), j.return = F, j);
    }
    function T(F, k, P, j) {
      return k === null || k.tag !== 4 || k.stateNode.containerInfo !== P.containerInfo || k.stateNode.implementation !== P.implementation ? (k = vs(P, F.mode, j), k.return = F, k) : (k = o(k, P.children || []), k.return = F, k);
    }
    function O(F, k, P, j, X) {
      return k === null || k.tag !== 7 ? (k = Sn(P, F.mode, j, X), k.return = F, k) : (k = o(k, P), k.return = F, k);
    }
    function D(F, k, P) {
      if (typeof k == "string" && k !== "" || typeof k == "number") return k = ms("" + k, F.mode, P), k.return = F, k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case ge:
            return P = no(k.type, k.key, k.props, null, F.mode, P), P.ref = Lr(F, null, k), P.return = F, P;
          case ke:
            return k = vs(k, F.mode, P), k.return = F, k;
          case B:
            var j = k._init;
            return D(F, j(k._payload), P);
        }
        if (ur(k) || b(k)) return k = Sn(k, F.mode, P, null), k.return = F, k;
        Nl(F, k);
      }
      return null;
    }
    function R(F, k, P, j) {
      var X = k !== null ? k.key : null;
      if (typeof P == "string" && P !== "" || typeof P == "number") return X !== null ? null : m(F, k, "" + P, j);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case ge:
            return P.key === X ? w(F, k, P, j) : null;
          case ke:
            return P.key === X ? T(F, k, P, j) : null;
          case B:
            return X = P._init, R(
              F,
              k,
              X(P._payload),
              j
            );
        }
        if (ur(P) || b(P)) return X !== null ? null : O(F, k, P, j, null);
        Nl(F, P);
      }
      return null;
    }
    function H(F, k, P, j, X) {
      if (typeof j == "string" && j !== "" || typeof j == "number") return F = F.get(P) || null, m(k, F, "" + j, X);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case ge:
            return F = F.get(j.key === null ? P : j.key) || null, w(k, F, j, X);
          case ke:
            return F = F.get(j.key === null ? P : j.key) || null, T(k, F, j, X);
          case B:
            var q = j._init;
            return H(F, k, P, q(j._payload), X);
        }
        if (ur(j) || b(j)) return F = F.get(P) || null, O(k, F, j, X, null);
        Nl(k, j);
      }
      return null;
    }
    function K(F, k, P, j) {
      for (var X = null, q = null, Z = k, te = k = 0, je = null; Z !== null && te < P.length; te++) {
        Z.index > te ? (je = Z, Z = null) : je = Z.sibling;
        var fe = R(F, Z, P[te], j);
        if (fe === null) {
          Z === null && (Z = je);
          break;
        }
        e && Z && fe.alternate === null && t(F, Z), k = i(fe, k, te), q === null ? X = fe : q.sibling = fe, q = fe, Z = je;
      }
      if (te === P.length) return n(F, Z), Fe && hn(F, te), X;
      if (Z === null) {
        for (; te < P.length; te++) Z = D(F, P[te], j), Z !== null && (k = i(Z, k, te), q === null ? X = Z : q.sibling = Z, q = Z);
        return Fe && hn(F, te), X;
      }
      for (Z = r(F, Z); te < P.length; te++) je = H(Z, F, te, P[te], j), je !== null && (e && je.alternate !== null && Z.delete(je.key === null ? te : je.key), k = i(je, k, te), q === null ? X = je : q.sibling = je, q = je);
      return e && Z.forEach(function(sn) {
        return t(F, sn);
      }), Fe && hn(F, te), X;
    }
    function Q(F, k, P, j) {
      var X = b(P);
      if (typeof X != "function") throw Error(s(150));
      if (P = X.call(P), P == null) throw Error(s(151));
      for (var q = X = null, Z = k, te = k = 0, je = null, fe = P.next(); Z !== null && !fe.done; te++, fe = P.next()) {
        Z.index > te ? (je = Z, Z = null) : je = Z.sibling;
        var sn = R(F, Z, fe.value, j);
        if (sn === null) {
          Z === null && (Z = je);
          break;
        }
        e && Z && sn.alternate === null && t(F, Z), k = i(sn, k, te), q === null ? X = sn : q.sibling = sn, q = sn, Z = je;
      }
      if (fe.done) return n(
        F,
        Z
      ), Fe && hn(F, te), X;
      if (Z === null) {
        for (; !fe.done; te++, fe = P.next()) fe = D(F, fe.value, j), fe !== null && (k = i(fe, k, te), q === null ? X = fe : q.sibling = fe, q = fe);
        return Fe && hn(F, te), X;
      }
      for (Z = r(F, Z); !fe.done; te++, fe = P.next()) fe = H(Z, F, te, fe.value, j), fe !== null && (e && fe.alternate !== null && Z.delete(fe.key === null ? te : fe.key), k = i(fe, k, te), q === null ? X = fe : q.sibling = fe, q = fe);
      return e && Z.forEach(function(Eh) {
        return t(F, Eh);
      }), Fe && hn(F, te), X;
    }
    function Ae(F, k, P, j) {
      if (typeof P == "object" && P !== null && P.type === de && P.key === null && (P = P.props.children), typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case ge:
            e: {
              for (var X = P.key, q = k; q !== null; ) {
                if (q.key === X) {
                  if (X = P.type, X === de) {
                    if (q.tag === 7) {
                      n(F, q.sibling), k = o(q, P.props.children), k.return = F, F = k;
                      break e;
                    }
                  } else if (q.elementType === X || typeof X == "object" && X !== null && X.$$typeof === B && Tu(X) === q.type) {
                    n(F, q.sibling), k = o(q, P.props), k.ref = Lr(F, q, P), k.return = F, F = k;
                    break e;
                  }
                  n(F, q);
                  break;
                } else t(F, q);
                q = q.sibling;
              }
              P.type === de ? (k = Sn(P.props.children, F.mode, j, P.key), k.return = F, F = k) : (j = no(P.type, P.key, P.props, null, F.mode, j), j.ref = Lr(F, k, P), j.return = F, F = j);
            }
            return u(F);
          case ke:
            e: {
              for (q = P.key; k !== null; ) {
                if (k.key === q) if (k.tag === 4 && k.stateNode.containerInfo === P.containerInfo && k.stateNode.implementation === P.implementation) {
                  n(F, k.sibling), k = o(k, P.children || []), k.return = F, F = k;
                  break e;
                } else {
                  n(F, k);
                  break;
                }
                else t(F, k);
                k = k.sibling;
              }
              k = vs(P, F.mode, j), k.return = F, F = k;
            }
            return u(F);
          case B:
            return q = P._init, Ae(F, k, q(P._payload), j);
        }
        if (ur(P)) return K(F, k, P, j);
        if (b(P)) return Q(F, k, P, j);
        Nl(F, P);
      }
      return typeof P == "string" && P !== "" || typeof P == "number" ? (P = "" + P, k !== null && k.tag === 6 ? (n(F, k.sibling), k = o(k, P), k.return = F, F = k) : (n(F, k), k = ms(P, F.mode, j), k.return = F, F = k), u(F)) : n(F, k);
    }
    return Ae;
  }
  var Kn = bu(!0), zu = bu(!1), Al = Xt(null), Ll = null, Qn = null, Ci = null;
  function Fi() {
    Ci = Qn = Ll = null;
  }
  function Pi(e) {
    var t = Al.current;
    _e(Al), e._currentValue = t;
  }
  function $i(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Gn(e, t) {
    Ll = e, Ci = Qn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (et = !0), e.firstContext = null);
  }
  function dt(e) {
    var t = e._currentValue;
    if (Ci !== e) if (e = { context: e, memoizedValue: t, next: null }, Qn === null) {
      if (Ll === null) throw Error(s(308));
      Qn = e, Ll.dependencies = { lanes: 0, firstContext: e };
    } else Qn = Qn.next = e;
    return t;
  }
  var mn = null;
  function Ti(e) {
    mn === null ? mn = [e] : mn.push(e);
  }
  function Nu(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, Ti(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Lt(e, r);
  }
  function Lt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Zt = !1;
  function bi(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Au(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Mt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Jt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (ce & 2) !== 0) {
      var o = r.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Lt(e, n);
    }
    return o = r.interleaved, o === null ? (t.next = t, Ti(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Lt(e, n);
  }
  function Ml(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Bo(e, n);
    }
  }
  function Lu(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var o = null, i = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var u = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          i === null ? o = i = u : i = i.next = u, n = n.next;
        } while (n !== null);
        i === null ? o = i = t : i = i.next = t;
      } else o = i = t;
      n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Rl(e, t, n, r) {
    var o = e.updateQueue;
    Zt = !1;
    var i = o.firstBaseUpdate, u = o.lastBaseUpdate, m = o.shared.pending;
    if (m !== null) {
      o.shared.pending = null;
      var w = m, T = w.next;
      w.next = null, u === null ? i = T : u.next = T, u = w;
      var O = e.alternate;
      O !== null && (O = O.updateQueue, m = O.lastBaseUpdate, m !== u && (m === null ? O.firstBaseUpdate = T : m.next = T, O.lastBaseUpdate = w));
    }
    if (i !== null) {
      var D = o.baseState;
      u = 0, O = T = w = null, m = i;
      do {
        var R = m.lane, H = m.eventTime;
        if ((r & R) === R) {
          O !== null && (O = O.next = {
            eventTime: H,
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          });
          e: {
            var K = e, Q = m;
            switch (R = t, H = n, Q.tag) {
              case 1:
                if (K = Q.payload, typeof K == "function") {
                  D = K.call(H, D, R);
                  break e;
                }
                D = K;
                break e;
              case 3:
                K.flags = K.flags & -65537 | 128;
              case 0:
                if (K = Q.payload, R = typeof K == "function" ? K.call(H, D, R) : K, R == null) break e;
                D = M({}, D, R);
                break e;
              case 2:
                Zt = !0;
            }
          }
          m.callback !== null && m.lane !== 0 && (e.flags |= 64, R = o.effects, R === null ? o.effects = [m] : R.push(m));
        } else H = { eventTime: H, lane: R, tag: m.tag, payload: m.payload, callback: m.callback, next: null }, O === null ? (T = O = H, w = D) : O = O.next = H, u |= R;
        if (m = m.next, m === null) {
          if (m = o.shared.pending, m === null) break;
          R = m, m = R.next, R.next = null, o.lastBaseUpdate = R, o.shared.pending = null;
        }
      } while (!0);
      if (O === null && (w = D), o.baseState = w, o.firstBaseUpdate = T, o.lastBaseUpdate = O, t = o.shared.interleaved, t !== null) {
        o = t;
        do
          u |= o.lane, o = o.next;
        while (o !== t);
      } else i === null && (o.shared.lanes = 0);
      gn |= u, e.lanes = u, e.memoizedState = D;
    }
  }
  function Mu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function") throw Error(s(191, o));
        o.call(r);
      }
    }
  }
  var Mr = {}, Ft = Xt(Mr), Rr = Xt(Mr), Ir = Xt(Mr);
  function vn(e) {
    if (e === Mr) throw Error(s(174));
    return e;
  }
  function zi(e, t) {
    switch (we(Ir, t), we(Rr, e), we(Ft, Mr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : No(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = No(t, e);
    }
    _e(Ft), we(Ft, t);
  }
  function Xn() {
    _e(Ft), _e(Rr), _e(Ir);
  }
  function Ru(e) {
    vn(Ir.current);
    var t = vn(Ft.current), n = No(t, e.type);
    t !== n && (we(Rr, e), we(Ft, n));
  }
  function Ni(e) {
    Rr.current === e && (_e(Ft), _e(Rr));
  }
  var $e = Xt(0);
  function Il(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
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
  var Ai = [];
  function Li() {
    for (var e = 0; e < Ai.length; e++) Ai[e]._workInProgressVersionPrimary = null;
    Ai.length = 0;
  }
  var Ol = ee.ReactCurrentDispatcher, Mi = ee.ReactCurrentBatchConfig, yn = 0, Te = null, Me = null, Oe = null, Dl = !1, Or = !1, Dr = 0, Kp = 0;
  function Qe() {
    throw Error(s(321));
  }
  function Ri(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!gt(e[n], t[n])) return !1;
    return !0;
  }
  function Ii(e, t, n, r, o, i) {
    if (yn = i, Te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ol.current = e === null || e.memoizedState === null ? Yp : qp, e = n(r, o), Or) {
      i = 0;
      do {
        if (Or = !1, Dr = 0, 25 <= i) throw Error(s(301));
        i += 1, Oe = Me = null, t.updateQueue = null, Ol.current = Zp, e = n(r, o);
      } while (Or);
    }
    if (Ol.current = Vl, t = Me !== null && Me.next !== null, yn = 0, Oe = Me = Te = null, Dl = !1, t) throw Error(s(300));
    return e;
  }
  function Oi() {
    var e = Dr !== 0;
    return Dr = 0, e;
  }
  function Pt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Oe === null ? Te.memoizedState = Oe = e : Oe = Oe.next = e, Oe;
  }
  function pt() {
    if (Me === null) {
      var e = Te.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Me.next;
    var t = Oe === null ? Te.memoizedState : Oe.next;
    if (t !== null) Oe = t, Me = e;
    else {
      if (e === null) throw Error(s(310));
      Me = e, e = { memoizedState: Me.memoizedState, baseState: Me.baseState, baseQueue: Me.baseQueue, queue: Me.queue, next: null }, Oe === null ? Te.memoizedState = Oe = e : Oe = Oe.next = e;
    }
    return Oe;
  }
  function jr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Di(e) {
    var t = pt(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = Me, o = r.baseQueue, i = n.pending;
    if (i !== null) {
      if (o !== null) {
        var u = o.next;
        o.next = i.next, i.next = u;
      }
      r.baseQueue = o = i, n.pending = null;
    }
    if (o !== null) {
      i = o.next, r = r.baseState;
      var m = u = null, w = null, T = i;
      do {
        var O = T.lane;
        if ((yn & O) === O) w !== null && (w = w.next = { lane: 0, action: T.action, hasEagerState: T.hasEagerState, eagerState: T.eagerState, next: null }), r = T.hasEagerState ? T.eagerState : e(r, T.action);
        else {
          var D = {
            lane: O,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null
          };
          w === null ? (m = w = D, u = r) : w = w.next = D, Te.lanes |= O, gn |= O;
        }
        T = T.next;
      } while (T !== null && T !== i);
      w === null ? u = r : w.next = m, gt(r, t.memoizedState) || (et = !0), t.memoizedState = r, t.baseState = u, t.baseQueue = w, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      o = e;
      do
        i = o.lane, Te.lanes |= i, gn |= i, o = o.next;
      while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ji(e) {
    var t = pt(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, o = n.pending, i = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var u = o = o.next;
      do
        i = e(i, u.action), u = u.next;
      while (u !== o);
      gt(i, t.memoizedState) || (et = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, r];
  }
  function Iu() {
  }
  function Ou(e, t) {
    var n = Te, r = pt(), o = t(), i = !gt(r.memoizedState, o);
    if (i && (r.memoizedState = o, et = !0), r = r.queue, Ui(Uu.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Oe !== null && Oe.memoizedState.tag & 1) {
      if (n.flags |= 2048, Ur(9, ju.bind(null, n, r, o, t), void 0, null), De === null) throw Error(s(349));
      (yn & 30) !== 0 || Du(n, t, o);
    }
    return o;
  }
  function Du(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Te.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function ju(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Vu(t) && Hu(e);
  }
  function Uu(e, t, n) {
    return n(function() {
      Vu(t) && Hu(e);
    });
  }
  function Vu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !gt(e, n);
    } catch {
      return !0;
    }
  }
  function Hu(e) {
    var t = Lt(e, 1);
    t !== null && kt(t, e, 1, -1);
  }
  function Bu(e) {
    var t = Pt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: jr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Xp.bind(null, Te, e), [t.memoizedState, e];
  }
  function Ur(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Te.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Wu() {
    return pt().memoizedState;
  }
  function jl(e, t, n, r) {
    var o = Pt();
    Te.flags |= e, o.memoizedState = Ur(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Ul(e, t, n, r) {
    var o = pt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Me !== null) {
      var u = Me.memoizedState;
      if (i = u.destroy, r !== null && Ri(r, u.deps)) {
        o.memoizedState = Ur(t, n, i, r);
        return;
      }
    }
    Te.flags |= e, o.memoizedState = Ur(1 | t, n, i, r);
  }
  function Ku(e, t) {
    return jl(8390656, 8, e, t);
  }
  function Ui(e, t) {
    return Ul(2048, 8, e, t);
  }
  function Qu(e, t) {
    return Ul(4, 2, e, t);
  }
  function Gu(e, t) {
    return Ul(4, 4, e, t);
  }
  function Xu(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Yu(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ul(4, 4, Xu.bind(null, t, e), n);
  }
  function Vi() {
  }
  function qu(e, t) {
    var n = pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ri(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Zu(e, t) {
    var n = pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ri(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Ju(e, t, n) {
    return (yn & 21) === 0 ? (e.baseState && (e.baseState = !1, et = !0), e.memoizedState = n) : (gt(n, t) || (n = Ta(), Te.lanes |= n, gn |= n, e.baseState = !0), t);
  }
  function Qp(e, t) {
    var n = he;
    he = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Mi.transition;
    Mi.transition = {};
    try {
      e(!1), t();
    } finally {
      he = n, Mi.transition = r;
    }
  }
  function ec() {
    return pt().memoizedState;
  }
  function Gp(e, t, n) {
    var r = rn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, tc(e)) nc(t, n);
    else if (n = Nu(e, t, n, r), n !== null) {
      var o = qe();
      kt(n, e, r, o), rc(n, t, r);
    }
  }
  function Xp(e, t, n) {
    var r = rn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (tc(e)) nc(t, o);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
        var u = t.lastRenderedState, m = i(u, n);
        if (o.hasEagerState = !0, o.eagerState = m, gt(m, u)) {
          var w = t.interleaved;
          w === null ? (o.next = o, Ti(t)) : (o.next = w.next, w.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
      n = Nu(e, t, o, r), n !== null && (o = qe(), kt(n, e, r, o), rc(n, t, r));
    }
  }
  function tc(e) {
    var t = e.alternate;
    return e === Te || t !== null && t === Te;
  }
  function nc(e, t) {
    Or = Dl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function rc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Bo(e, n);
    }
  }
  var Vl = { readContext: dt, useCallback: Qe, useContext: Qe, useEffect: Qe, useImperativeHandle: Qe, useInsertionEffect: Qe, useLayoutEffect: Qe, useMemo: Qe, useReducer: Qe, useRef: Qe, useState: Qe, useDebugValue: Qe, useDeferredValue: Qe, useTransition: Qe, useMutableSource: Qe, useSyncExternalStore: Qe, useId: Qe, unstable_isNewReconciler: !1 }, Yp = { readContext: dt, useCallback: function(e, t) {
    return Pt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: dt, useEffect: Ku, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, jl(
      4194308,
      4,
      Xu.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return jl(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return jl(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Pt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Pt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Gp.bind(null, Te, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Pt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Bu, useDebugValue: Vi, useDeferredValue: function(e) {
    return Pt().memoizedState = e;
  }, useTransition: function() {
    var e = Bu(!1), t = e[0];
    return e = Qp.bind(null, e[1]), Pt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Te, o = Pt();
    if (Fe) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else {
      if (n = t(), De === null) throw Error(s(349));
      (yn & 30) !== 0 || Du(r, t, n);
    }
    o.memoizedState = n;
    var i = { value: n, getSnapshot: t };
    return o.queue = i, Ku(Uu.bind(
      null,
      r,
      i,
      e
    ), [e]), r.flags |= 2048, Ur(9, ju.bind(null, r, i, n, t), void 0, null), n;
  }, useId: function() {
    var e = Pt(), t = De.identifierPrefix;
    if (Fe) {
      var n = At, r = Nt;
      n = (r & ~(1 << 32 - yt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Dr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Kp++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, qp = {
    readContext: dt,
    useCallback: qu,
    useContext: dt,
    useEffect: Ui,
    useImperativeHandle: Yu,
    useInsertionEffect: Qu,
    useLayoutEffect: Gu,
    useMemo: Zu,
    useReducer: Di,
    useRef: Wu,
    useState: function() {
      return Di(jr);
    },
    useDebugValue: Vi,
    useDeferredValue: function(e) {
      var t = pt();
      return Ju(t, Me.memoizedState, e);
    },
    useTransition: function() {
      var e = Di(jr)[0], t = pt().memoizedState;
      return [e, t];
    },
    useMutableSource: Iu,
    useSyncExternalStore: Ou,
    useId: ec,
    unstable_isNewReconciler: !1
  }, Zp = { readContext: dt, useCallback: qu, useContext: dt, useEffect: Ui, useImperativeHandle: Yu, useInsertionEffect: Qu, useLayoutEffect: Gu, useMemo: Zu, useReducer: ji, useRef: Wu, useState: function() {
    return ji(jr);
  }, useDebugValue: Vi, useDeferredValue: function(e) {
    var t = pt();
    return Me === null ? t.memoizedState = e : Ju(t, Me.memoizedState, e);
  }, useTransition: function() {
    var e = ji(jr)[0], t = pt().memoizedState;
    return [e, t];
  }, useMutableSource: Iu, useSyncExternalStore: Ou, useId: ec, unstable_isNewReconciler: !1 };
  function xt(e, t) {
    if (e && e.defaultProps) {
      t = M({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Hi(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : M({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Hl = { isMounted: function(e) {
    return (e = e._reactInternals) ? cn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = qe(), o = rn(e), i = Mt(r, o);
    i.payload = t, n != null && (i.callback = n), t = Jt(e, i, o), t !== null && (kt(t, e, o, r), Ml(t, e, o));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = qe(), o = rn(e), i = Mt(r, o);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Jt(e, i, o), t !== null && (kt(t, e, o, r), Ml(t, e, o));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = qe(), r = rn(e), o = Mt(n, r);
    o.tag = 2, t != null && (o.callback = t), t = Jt(e, o, r), t !== null && (kt(t, e, r, n), Ml(t, e, r));
  } };
  function lc(e, t, n, r, o, i, u) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, u) : t.prototype && t.prototype.isPureReactComponent ? !Pr(n, r) || !Pr(o, i) : !0;
  }
  function oc(e, t, n) {
    var r = !1, o = Yt, i = t.contextType;
    return typeof i == "object" && i !== null ? i = dt(i) : (o = Je(t) ? dn : Ke.current, r = t.contextTypes, i = (r = r != null) ? Vn(e, o) : Yt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Hl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
  }
  function ic(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Hl.enqueueReplaceState(t, t.state, null);
  }
  function Bi(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, bi(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = dt(i) : (i = Je(t) ? dn : Ke.current, o.context = Vn(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Hi(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Hl.enqueueReplaceState(o, o.state, null), Rl(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Yn(e, t) {
    try {
      var n = "", r = t;
      do
        n += ae(r), r = r.return;
      while (r);
      var o = n;
    } catch (i) {
      o = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
  }
  function Wi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ki(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Jp = typeof WeakMap == "function" ? WeakMap : Map;
  function sc(e, t, n) {
    n = Mt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      Yl || (Yl = !0, ss = r), Ki(e, t);
    }, n;
  }
  function ac(e, t, n) {
    n = Mt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var o = t.value;
      n.payload = function() {
        return r(o);
      }, n.callback = function() {
        Ki(e, t);
      };
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
      Ki(e, t), typeof r != "function" && (tn === null ? tn = /* @__PURE__ */ new Set([this]) : tn.add(this));
      var u = t.stack;
      this.componentDidCatch(t.value, { componentStack: u !== null ? u : "" });
    }), n;
  }
  function uc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Jp();
      var o = /* @__PURE__ */ new Set();
      r.set(t, o);
    } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
    o.has(n) || (o.add(n), e = ph.bind(null, e, t, n), t.then(e, e));
  }
  function cc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function fc(e, t, n, r, o) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Mt(-1, 1), t.tag = 2, Jt(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e);
  }
  var eh = ee.ReactCurrentOwner, et = !1;
  function Ye(e, t, n, r) {
    t.child = e === null ? zu(t, null, n, r) : Kn(t, e.child, n, r);
  }
  function dc(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return Gn(t, o), r = Ii(e, t, n, r, i, o), n = Oi(), e !== null && !et ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Rt(e, t, o)) : (Fe && n && xi(t), t.flags |= 1, Ye(e, t, r, o), t.child);
  }
  function pc(e, t, n, r, o) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !hs(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, hc(e, t, i, r, o)) : (e = no(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, (e.lanes & o) === 0) {
      var u = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Pr, n(u, r) && e.ref === t.ref) return Rt(e, t, o);
    }
    return t.flags |= 1, e = on(i, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function hc(e, t, n, r, o) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Pr(i, r) && e.ref === t.ref) if (et = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) (e.flags & 131072) !== 0 && (et = !0);
      else return t.lanes = e.lanes, Rt(e, t, o);
    }
    return Qi(e, t, n, r, o);
  }
  function mc(e, t, n) {
    var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, we(Zn, ut), ut |= n;
    else {
      if ((n & 1073741824) === 0) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, we(Zn, ut), ut |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, we(Zn, ut), ut |= r;
    }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, we(Zn, ut), ut |= r;
    return Ye(e, t, o, n), t.child;
  }
  function vc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Qi(e, t, n, r, o) {
    var i = Je(n) ? dn : Ke.current;
    return i = Vn(t, i), Gn(t, o), n = Ii(e, t, n, r, i, o), r = Oi(), e !== null && !et ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Rt(e, t, o)) : (Fe && r && xi(t), t.flags |= 1, Ye(e, t, n, o), t.child);
  }
  function yc(e, t, n, r, o) {
    if (Je(n)) {
      var i = !0;
      Pl(t);
    } else i = !1;
    if (Gn(t, o), t.stateNode === null) Wl(e, t), oc(t, n, r), Bi(t, n, r, o), r = !0;
    else if (e === null) {
      var u = t.stateNode, m = t.memoizedProps;
      u.props = m;
      var w = u.context, T = n.contextType;
      typeof T == "object" && T !== null ? T = dt(T) : (T = Je(n) ? dn : Ke.current, T = Vn(t, T));
      var O = n.getDerivedStateFromProps, D = typeof O == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      D || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (m !== r || w !== T) && ic(t, u, r, T), Zt = !1;
      var R = t.memoizedState;
      u.state = R, Rl(t, r, u, o), w = t.memoizedState, m !== r || R !== w || Ze.current || Zt ? (typeof O == "function" && (Hi(t, n, O, r), w = t.memoizedState), (m = Zt || lc(t, n, m, r, R, w, T)) ? (D || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = w), u.props = r, u.state = w, u.context = T, r = m) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      u = t.stateNode, Au(e, t), m = t.memoizedProps, T = t.type === t.elementType ? m : xt(t.type, m), u.props = T, D = t.pendingProps, R = u.context, w = n.contextType, typeof w == "object" && w !== null ? w = dt(w) : (w = Je(n) ? dn : Ke.current, w = Vn(t, w));
      var H = n.getDerivedStateFromProps;
      (O = typeof H == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (m !== D || R !== w) && ic(t, u, r, w), Zt = !1, R = t.memoizedState, u.state = R, Rl(t, r, u, o);
      var K = t.memoizedState;
      m !== D || R !== K || Ze.current || Zt ? (typeof H == "function" && (Hi(t, n, H, r), K = t.memoizedState), (T = Zt || lc(t, n, T, r, R, K, w) || !1) ? (O || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, K, w), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, K, w)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || m === e.memoizedProps && R === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && R === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = K), u.props = r, u.state = K, u.context = w, r = T) : (typeof u.componentDidUpdate != "function" || m === e.memoizedProps && R === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && R === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Gi(e, t, n, r, i, o);
  }
  function Gi(e, t, n, r, o, i) {
    vc(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return o && Su(t, n, !1), Rt(e, t, i);
    r = t.stateNode, eh.current = t;
    var m = u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && u ? (t.child = Kn(t, e.child, null, i), t.child = Kn(t, null, m, i)) : Ye(e, t, m, i), t.memoizedState = r.state, o && Su(t, n, !0), t.child;
  }
  function gc(e) {
    var t = e.stateNode;
    t.pendingContext ? xu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && xu(e, t.context, !1), zi(e, t.containerInfo);
  }
  function wc(e, t, n, r, o) {
    return Wn(), Ei(o), t.flags |= 256, Ye(e, t, n, r), t.child;
  }
  var Xi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Yi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function xc(e, t, n) {
    var r = t.pendingProps, o = $e.current, i = !1, u = (t.flags & 128) !== 0, m;
    if ((m = u) || (m = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), m ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), we($e, o & 1), e === null)
      return ki(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (u = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, u = { mode: "hidden", children: u }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = u) : i = ro(u, r, 0, null), e = Sn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Yi(n), t.memoizedState = Xi, e) : qi(t, u));
    if (o = e.memoizedState, o !== null && (m = o.dehydrated, m !== null)) return th(e, t, u, r, m, o, n);
    if (i) {
      i = r.fallback, u = t.mode, o = e.child, m = o.sibling;
      var w = { mode: "hidden", children: r.children };
      return (u & 1) === 0 && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = w, t.deletions = null) : (r = on(o, w), r.subtreeFlags = o.subtreeFlags & 14680064), m !== null ? i = on(m, i) : (i = Sn(i, u, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, u = e.child.memoizedState, u = u === null ? Yi(n) : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }, i.memoizedState = u, i.childLanes = e.childLanes & ~n, t.memoizedState = Xi, r;
    }
    return i = e.child, e = i.sibling, r = on(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function qi(e, t) {
    return t = ro({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Bl(e, t, n, r) {
    return r !== null && Ei(r), Kn(t, e.child, null, n), e = qi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function th(e, t, n, r, o, i, u) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Wi(Error(s(422))), Bl(e, t, u, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = ro({ mode: "visible", children: r.children }, o, 0, null), i = Sn(i, o, u, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && Kn(t, e.child, null, u), t.child.memoizedState = Yi(u), t.memoizedState = Xi, i);
    if ((t.mode & 1) === 0) return Bl(e, t, u, null);
    if (o.data === "$!") {
      if (r = o.nextSibling && o.nextSibling.dataset, r) var m = r.dgst;
      return r = m, i = Error(s(419)), r = Wi(i, r, void 0), Bl(e, t, u, r);
    }
    if (m = (u & e.childLanes) !== 0, et || m) {
      if (r = De, r !== null) {
        switch (u & -u) {
          case 4:
            o = 2;
            break;
          case 16:
            o = 8;
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
            o = 32;
            break;
          case 536870912:
            o = 268435456;
            break;
          default:
            o = 0;
        }
        o = (o & (r.suspendedLanes | u)) !== 0 ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Lt(e, o), kt(r, e, o, -1));
      }
      return ps(), r = Wi(Error(s(421))), Bl(e, t, u, r);
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = hh.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, at = Gt(o.nextSibling), st = t, Fe = !0, wt = null, e !== null && (ct[ft++] = Nt, ct[ft++] = At, ct[ft++] = pn, Nt = e.id, At = e.overflow, pn = t), t = qi(t, r.children), t.flags |= 4096, t);
  }
  function _c(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), $i(e.return, t, n);
  }
  function Zi(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
  }
  function Sc(e, t, n) {
    var r = t.pendingProps, o = r.revealOrder, i = r.tail;
    if (Ye(e, t, r.children, n), r = $e.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && _c(e, n, t);
        else if (e.tag === 19) _c(e, n, t);
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
      r &= 1;
    }
    if (we($e, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Il(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Zi(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Il(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        Zi(t, !0, n, null, i);
        break;
      case "together":
        Zi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Wl(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Rt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), gn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = on(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = on(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function nh(e, t, n) {
    switch (t.tag) {
      case 3:
        gc(t), Wn();
        break;
      case 5:
        Ru(t);
        break;
      case 1:
        Je(t.type) && Pl(t);
        break;
      case 4:
        zi(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, o = t.memoizedProps.value;
        we(Al, r._currentValue), r._currentValue = o;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (we($e, $e.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? xc(e, t, n) : (we($e, $e.current & 1), e = Rt(e, t, n), e !== null ? e.sibling : null);
        we($e, $e.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Sc(e, t, n);
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), we($e, $e.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, mc(e, t, n);
    }
    return Rt(e, t, n);
  }
  var kc, Ji, Ec, Cc;
  kc = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, Ji = function() {
  }, Ec = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
      e = t.stateNode, vn(Ft.current);
      var i = null;
      switch (n) {
        case "input":
          o = $o(e, o), r = $o(e, r), i = [];
          break;
        case "select":
          o = M({}, o, { value: void 0 }), r = M({}, r, { value: void 0 }), i = [];
          break;
        case "textarea":
          o = zo(e, o), r = zo(e, r), i = [];
          break;
        default:
          typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = El);
      }
      Ao(n, r);
      var u;
      n = null;
      for (T in o) if (!r.hasOwnProperty(T) && o.hasOwnProperty(T) && o[T] != null) if (T === "style") {
        var m = o[T];
        for (u in m) m.hasOwnProperty(u) && (n || (n = {}), n[u] = "");
      } else T !== "dangerouslySetInnerHTML" && T !== "children" && T !== "suppressContentEditableWarning" && T !== "suppressHydrationWarning" && T !== "autoFocus" && (f.hasOwnProperty(T) ? i || (i = []) : (i = i || []).push(T, null));
      for (T in r) {
        var w = r[T];
        if (m = o != null ? o[T] : void 0, r.hasOwnProperty(T) && w !== m && (w != null || m != null)) if (T === "style") if (m) {
          for (u in m) !m.hasOwnProperty(u) || w && w.hasOwnProperty(u) || (n || (n = {}), n[u] = "");
          for (u in w) w.hasOwnProperty(u) && m[u] !== w[u] && (n || (n = {}), n[u] = w[u]);
        } else n || (i || (i = []), i.push(
          T,
          n
        )), n = w;
        else T === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, m = m ? m.__html : void 0, w != null && m !== w && (i = i || []).push(T, w)) : T === "children" ? typeof w != "string" && typeof w != "number" || (i = i || []).push(T, "" + w) : T !== "suppressContentEditableWarning" && T !== "suppressHydrationWarning" && (f.hasOwnProperty(T) ? (w != null && T === "onScroll" && xe("scroll", e), i || m === w || (i = [])) : (i = i || []).push(T, w));
      }
      n && (i = i || []).push("style", n);
      var T = i;
      (t.updateQueue = T) && (t.flags |= 4);
    }
  }, Cc = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Vr(e, t) {
    if (!Fe) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function Ge(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
    else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function rh(e, t, n) {
    var r = t.pendingProps;
    switch (_i(t), t.tag) {
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
        return Ge(t), null;
      case 1:
        return Je(t.type) && Fl(), Ge(t), null;
      case 3:
        return r = t.stateNode, Xn(), _e(Ze), _e(Ke), Li(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (zl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, wt !== null && (cs(wt), wt = null))), Ji(e, t), Ge(t), null;
      case 5:
        Ni(t);
        var o = vn(Ir.current);
        if (n = t.type, e !== null && t.stateNode != null) Ec(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return Ge(t), null;
          }
          if (e = vn(Ft.current), zl(t)) {
            r = t.stateNode, n = t.type;
            var i = t.memoizedProps;
            switch (r[Ct] = t, r[Nr] = i, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                xe("cancel", r), xe("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                xe("load", r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Tr.length; o++) xe(Tr[o], r);
                break;
              case "source":
                xe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                xe(
                  "error",
                  r
                ), xe("load", r);
                break;
              case "details":
                xe("toggle", r);
                break;
              case "input":
                oa(r, i), xe("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!i.multiple }, xe("invalid", r);
                break;
              case "textarea":
                aa(r, i), xe("invalid", r);
            }
            Ao(n, i), o = null;
            for (var u in i) if (i.hasOwnProperty(u)) {
              var m = i[u];
              u === "children" ? typeof m == "string" ? r.textContent !== m && (i.suppressHydrationWarning !== !0 && kl(r.textContent, m, e), o = ["children", m]) : typeof m == "number" && r.textContent !== "" + m && (i.suppressHydrationWarning !== !0 && kl(
                r.textContent,
                m,
                e
              ), o = ["children", "" + m]) : f.hasOwnProperty(u) && m != null && u === "onScroll" && xe("scroll", r);
            }
            switch (n) {
              case "input":
                el(r), sa(r, i, !0);
                break;
              case "textarea":
                el(r), ca(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = El);
            }
            r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            u = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = fa(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = u.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = u.createElement(n, { is: r.is }) : (e = u.createElement(n), n === "select" && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[Ct] = t, e[Nr] = r, kc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (u = Lo(n, r), n) {
                case "dialog":
                  xe("cancel", e), xe("close", e), o = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  xe("load", e), o = r;
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < Tr.length; o++) xe(Tr[o], e);
                  o = r;
                  break;
                case "source":
                  xe("error", e), o = r;
                  break;
                case "img":
                case "image":
                case "link":
                  xe(
                    "error",
                    e
                  ), xe("load", e), o = r;
                  break;
                case "details":
                  xe("toggle", e), o = r;
                  break;
                case "input":
                  oa(e, r), o = $o(e, r), xe("invalid", e);
                  break;
                case "option":
                  o = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, o = M({}, r, { value: void 0 }), xe("invalid", e);
                  break;
                case "textarea":
                  aa(e, r), o = zo(e, r), xe("invalid", e);
                  break;
                default:
                  o = r;
              }
              Ao(n, o), m = o;
              for (i in m) if (m.hasOwnProperty(i)) {
                var w = m[i];
                i === "style" ? ha(e, w) : i === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, w != null && da(e, w)) : i === "children" ? typeof w == "string" ? (n !== "textarea" || w !== "") && cr(e, w) : typeof w == "number" && cr(e, "" + w) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (f.hasOwnProperty(i) ? w != null && i === "onScroll" && xe("scroll", e) : w != null && re(e, i, w, u));
              }
              switch (n) {
                case "input":
                  el(e), sa(e, r, !1);
                  break;
                case "textarea":
                  el(e), ca(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + pe(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, i = r.value, i != null ? bn(e, !!r.multiple, i, !1) : r.defaultValue != null && bn(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof o.onClick == "function" && (e.onclick = El);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Ge(t), null;
      case 6:
        if (e && t.stateNode != null) Cc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(s(166));
          if (n = vn(Ir.current), vn(Ft.current), zl(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Ct] = t, (i = r.nodeValue !== n) && (e = st, e !== null)) switch (e.tag) {
              case 3:
                kl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && kl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            i && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ct] = t, t.stateNode = r;
        }
        return Ge(t), null;
      case 13:
        if (_e($e), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Fe && at !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) $u(), Wn(), t.flags |= 98560, i = !1;
          else if (i = zl(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(s(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(s(317));
              i[Ct] = t;
            } else Wn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ge(t), i = !1;
          } else wt !== null && (cs(wt), wt = null), i = !0;
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || ($e.current & 1) !== 0 ? Re === 0 && (Re = 3) : ps())), t.updateQueue !== null && (t.flags |= 4), Ge(t), null);
      case 4:
        return Xn(), Ji(e, t), e === null && br(t.stateNode.containerInfo), Ge(t), null;
      case 10:
        return Pi(t.type._context), Ge(t), null;
      case 17:
        return Je(t.type) && Fl(), Ge(t), null;
      case 19:
        if (_e($e), i = t.memoizedState, i === null) return Ge(t), null;
        if (r = (t.flags & 128) !== 0, u = i.rendering, u === null) if (r) Vr(i, !1);
        else {
          if (Re !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (u = Il(e), u !== null) {
              for (t.flags |= 128, Vr(i, !1), r = u.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, u = i.alternate, u === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = u.childLanes, i.lanes = u.lanes, i.child = u.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = u.memoizedProps, i.memoizedState = u.memoizedState, i.updateQueue = u.updateQueue, i.type = u.type, e = u.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return we($e, $e.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          i.tail !== null && Ne() > Jn && (t.flags |= 128, r = !0, Vr(i, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Il(u), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Vr(i, !0), i.tail === null && i.tailMode === "hidden" && !u.alternate && !Fe) return Ge(t), null;
          } else 2 * Ne() - i.renderingStartTime > Jn && n !== 1073741824 && (t.flags |= 128, r = !0, Vr(i, !1), t.lanes = 4194304);
          i.isBackwards ? (u.sibling = t.child, t.child = u) : (n = i.last, n !== null ? n.sibling = u : t.child = u, i.last = u);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ne(), t.sibling = null, n = $e.current, we($e, r ? n & 1 | 2 : n & 1), t) : (Ge(t), null);
      case 22:
      case 23:
        return ds(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (ut & 1073741824) !== 0 && (Ge(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ge(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function lh(e, t) {
    switch (_i(t), t.tag) {
      case 1:
        return Je(t.type) && Fl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Xn(), _e(Ze), _e(Ke), Li(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Ni(t), null;
      case 13:
        if (_e($e), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(s(340));
          Wn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return _e($e), null;
      case 4:
        return Xn(), null;
      case 10:
        return Pi(t.type._context), null;
      case 22:
      case 23:
        return ds(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Kl = !1, Xe = !1, oh = typeof WeakSet == "function" ? WeakSet : Set, W = null;
  function qn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      ze(e, t, r);
    }
    else n.current = null;
  }
  function es(e, t, n) {
    try {
      n();
    } catch (r) {
      ze(e, t, r);
    }
  }
  var Fc = !1;
  function ih(e, t) {
    if (di = dl, e = lu(), li(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset, i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var u = 0, m = -1, w = -1, T = 0, O = 0, D = e, R = null;
          t: for (; ; ) {
            for (var H; D !== n || o !== 0 && D.nodeType !== 3 || (m = u + o), D !== i || r !== 0 && D.nodeType !== 3 || (w = u + r), D.nodeType === 3 && (u += D.nodeValue.length), (H = D.firstChild) !== null; )
              R = D, D = H;
            for (; ; ) {
              if (D === e) break t;
              if (R === n && ++T === o && (m = u), R === i && ++O === r && (w = u), (H = D.nextSibling) !== null) break;
              D = R, R = D.parentNode;
            }
            D = H;
          }
          n = m === -1 || w === -1 ? null : { start: m, end: w };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (pi = { focusedElem: e, selectionRange: n }, dl = !1, W = t; W !== null; ) if (t = W, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, W = e;
    else for (; W !== null; ) {
      t = W;
      try {
        var K = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (K !== null) {
              var Q = K.memoizedProps, Ae = K.memoizedState, F = t.stateNode, k = F.getSnapshotBeforeUpdate(t.elementType === t.type ? Q : xt(t.type, Q), Ae);
              F.__reactInternalSnapshotBeforeUpdate = k;
            }
            break;
          case 3:
            var P = t.stateNode.containerInfo;
            P.nodeType === 1 ? P.textContent = "" : P.nodeType === 9 && P.documentElement && P.removeChild(P.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(s(163));
        }
      } catch (j) {
        ze(t, t.return, j);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, W = e;
        break;
      }
      W = t.return;
    }
    return K = Fc, Fc = !1, K;
  }
  function Hr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & e) === e) {
          var i = o.destroy;
          o.destroy = void 0, i !== void 0 && es(t, n, i);
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Ql(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function ts(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Pc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Pc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ct], delete t[Nr], delete t[yi], delete t[Vp], delete t[Hp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function $c(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Tc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || $c(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ns(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = El));
    else if (r !== 4 && (e = e.child, e !== null)) for (ns(e, t, n), e = e.sibling; e !== null; ) ns(e, t, n), e = e.sibling;
  }
  function rs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (rs(e, t, n), e = e.sibling; e !== null; ) rs(e, t, n), e = e.sibling;
  }
  var He = null, _t = !1;
  function en(e, t, n) {
    for (n = n.child; n !== null; ) bc(e, t, n), n = n.sibling;
  }
  function bc(e, t, n) {
    if (Et && typeof Et.onCommitFiberUnmount == "function") try {
      Et.onCommitFiberUnmount(il, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Xe || qn(n, t);
      case 6:
        var r = He, o = _t;
        He = null, en(e, t, n), He = r, _t = o, He !== null && (_t ? (e = He, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : He.removeChild(n.stateNode));
        break;
      case 18:
        He !== null && (_t ? (e = He, n = n.stateNode, e.nodeType === 8 ? vi(e.parentNode, n) : e.nodeType === 1 && vi(e, n), _r(e)) : vi(He, n.stateNode));
        break;
      case 4:
        r = He, o = _t, He = n.stateNode.containerInfo, _t = !0, en(e, t, n), He = r, _t = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Xe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          o = r = r.next;
          do {
            var i = o, u = i.destroy;
            i = i.tag, u !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && es(n, t, u), o = o.next;
          } while (o !== r);
        }
        en(e, t, n);
        break;
      case 1:
        if (!Xe && (qn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (m) {
          ze(n, t, m);
        }
        en(e, t, n);
        break;
      case 21:
        en(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Xe = (r = Xe) || n.memoizedState !== null, en(e, t, n), Xe = r) : en(e, t, n);
        break;
      default:
        en(e, t, n);
    }
  }
  function zc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new oh()), t.forEach(function(r) {
        var o = mh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
    }
  }
  function St(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e, u = t, m = u;
        e: for (; m !== null; ) {
          switch (m.tag) {
            case 5:
              He = m.stateNode, _t = !1;
              break e;
            case 3:
              He = m.stateNode.containerInfo, _t = !0;
              break e;
            case 4:
              He = m.stateNode.containerInfo, _t = !0;
              break e;
          }
          m = m.return;
        }
        if (He === null) throw Error(s(160));
        bc(i, u, o), He = null, _t = !1;
        var w = o.alternate;
        w !== null && (w.return = null), o.return = null;
      } catch (T) {
        ze(o, t, T);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Nc(t, e), t = t.sibling;
  }
  function Nc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (St(t, e), $t(e), r & 4) {
          try {
            Hr(3, e, e.return), Ql(3, e);
          } catch (Q) {
            ze(e, e.return, Q);
          }
          try {
            Hr(5, e, e.return);
          } catch (Q) {
            ze(e, e.return, Q);
          }
        }
        break;
      case 1:
        St(t, e), $t(e), r & 512 && n !== null && qn(n, n.return);
        break;
      case 5:
        if (St(t, e), $t(e), r & 512 && n !== null && qn(n, n.return), e.flags & 32) {
          var o = e.stateNode;
          try {
            cr(o, "");
          } catch (Q) {
            ze(e, e.return, Q);
          }
        }
        if (r & 4 && (o = e.stateNode, o != null)) {
          var i = e.memoizedProps, u = n !== null ? n.memoizedProps : i, m = e.type, w = e.updateQueue;
          if (e.updateQueue = null, w !== null) try {
            m === "input" && i.type === "radio" && i.name != null && ia(o, i), Lo(m, u);
            var T = Lo(m, i);
            for (u = 0; u < w.length; u += 2) {
              var O = w[u], D = w[u + 1];
              O === "style" ? ha(o, D) : O === "dangerouslySetInnerHTML" ? da(o, D) : O === "children" ? cr(o, D) : re(o, O, D, T);
            }
            switch (m) {
              case "input":
                To(o, i);
                break;
              case "textarea":
                ua(o, i);
                break;
              case "select":
                var R = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var H = i.value;
                H != null ? bn(o, !!i.multiple, H, !1) : R !== !!i.multiple && (i.defaultValue != null ? bn(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : bn(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Nr] = i;
          } catch (Q) {
            ze(e, e.return, Q);
          }
        }
        break;
      case 6:
        if (St(t, e), $t(e), r & 4) {
          if (e.stateNode === null) throw Error(s(162));
          o = e.stateNode, i = e.memoizedProps;
          try {
            o.nodeValue = i;
          } catch (Q) {
            ze(e, e.return, Q);
          }
        }
        break;
      case 3:
        if (St(t, e), $t(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          _r(t.containerInfo);
        } catch (Q) {
          ze(e, e.return, Q);
        }
        break;
      case 4:
        St(t, e), $t(e);
        break;
      case 13:
        St(t, e), $t(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (is = Ne())), r & 4 && zc(e);
        break;
      case 22:
        if (O = n !== null && n.memoizedState !== null, e.mode & 1 ? (Xe = (T = Xe) || O, St(t, e), Xe = T) : St(t, e), $t(e), r & 8192) {
          if (T = e.memoizedState !== null, (e.stateNode.isHidden = T) && !O && (e.mode & 1) !== 0) for (W = e, O = e.child; O !== null; ) {
            for (D = W = O; W !== null; ) {
              switch (R = W, H = R.child, R.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Hr(4, R, R.return);
                  break;
                case 1:
                  qn(R, R.return);
                  var K = R.stateNode;
                  if (typeof K.componentWillUnmount == "function") {
                    r = R, n = R.return;
                    try {
                      t = r, K.props = t.memoizedProps, K.state = t.memoizedState, K.componentWillUnmount();
                    } catch (Q) {
                      ze(r, n, Q);
                    }
                  }
                  break;
                case 5:
                  qn(R, R.return);
                  break;
                case 22:
                  if (R.memoizedState !== null) {
                    Mc(D);
                    continue;
                  }
              }
              H !== null ? (H.return = R, W = H) : Mc(D);
            }
            O = O.sibling;
          }
          e: for (O = null, D = e; ; ) {
            if (D.tag === 5) {
              if (O === null) {
                O = D;
                try {
                  o = D.stateNode, T ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (m = D.stateNode, w = D.memoizedProps.style, u = w != null && w.hasOwnProperty("display") ? w.display : null, m.style.display = pa("display", u));
                } catch (Q) {
                  ze(e, e.return, Q);
                }
              }
            } else if (D.tag === 6) {
              if (O === null) try {
                D.stateNode.nodeValue = T ? "" : D.memoizedProps;
              } catch (Q) {
                ze(e, e.return, Q);
              }
            } else if ((D.tag !== 22 && D.tag !== 23 || D.memoizedState === null || D === e) && D.child !== null) {
              D.child.return = D, D = D.child;
              continue;
            }
            if (D === e) break e;
            for (; D.sibling === null; ) {
              if (D.return === null || D.return === e) break e;
              O === D && (O = null), D = D.return;
            }
            O === D && (O = null), D.sibling.return = D.return, D = D.sibling;
          }
        }
        break;
      case 19:
        St(t, e), $t(e), r & 4 && zc(e);
        break;
      case 21:
        break;
      default:
        St(
          t,
          e
        ), $t(e);
    }
  }
  function $t(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if ($c(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(s(160));
        }
        switch (r.tag) {
          case 5:
            var o = r.stateNode;
            r.flags & 32 && (cr(o, ""), r.flags &= -33);
            var i = Tc(e);
            rs(e, i, o);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo, m = Tc(e);
            ns(e, m, u);
            break;
          default:
            throw Error(s(161));
        }
      } catch (w) {
        ze(e, e.return, w);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function sh(e, t, n) {
    W = e, Ac(e);
  }
  function Ac(e, t, n) {
    for (var r = (e.mode & 1) !== 0; W !== null; ) {
      var o = W, i = o.child;
      if (o.tag === 22 && r) {
        var u = o.memoizedState !== null || Kl;
        if (!u) {
          var m = o.alternate, w = m !== null && m.memoizedState !== null || Xe;
          m = Kl;
          var T = Xe;
          if (Kl = u, (Xe = w) && !T) for (W = o; W !== null; ) u = W, w = u.child, u.tag === 22 && u.memoizedState !== null ? Rc(o) : w !== null ? (w.return = u, W = w) : Rc(o);
          for (; i !== null; ) W = i, Ac(i), i = i.sibling;
          W = o, Kl = m, Xe = T;
        }
        Lc(e);
      } else (o.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = o, W = i) : Lc(e);
    }
  }
  function Lc(e) {
    for (; W !== null; ) {
      var t = W;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Xe || Ql(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Xe) if (n === null) r.componentDidMount();
              else {
                var o = t.elementType === t.type ? n.memoizedProps : xt(t.type, n.memoizedProps);
                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var i = t.updateQueue;
              i !== null && Mu(t, i, r);
              break;
            case 3:
              var u = t.updateQueue;
              if (u !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Mu(t, u, n);
              }
              break;
            case 5:
              var m = t.stateNode;
              if (n === null && t.flags & 4) {
                n = m;
                var w = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    w.autoFocus && n.focus();
                    break;
                  case "img":
                    w.src && (n.src = w.src);
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
                var T = t.alternate;
                if (T !== null) {
                  var O = T.memoizedState;
                  if (O !== null) {
                    var D = O.dehydrated;
                    D !== null && _r(D);
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
              throw Error(s(163));
          }
          Xe || t.flags & 512 && ts(t);
        } catch (R) {
          ze(t, t.return, R);
        }
      }
      if (t === e) {
        W = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, W = n;
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
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, W = n;
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
            var n = t.return;
            try {
              Ql(4, t);
            } catch (w) {
              ze(t, n, w);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var o = t.return;
              try {
                r.componentDidMount();
              } catch (w) {
                ze(t, o, w);
              }
            }
            var i = t.return;
            try {
              ts(t);
            } catch (w) {
              ze(t, i, w);
            }
            break;
          case 5:
            var u = t.return;
            try {
              ts(t);
            } catch (w) {
              ze(t, u, w);
            }
        }
      } catch (w) {
        ze(t, t.return, w);
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
  var ah = Math.ceil, Gl = ee.ReactCurrentDispatcher, ls = ee.ReactCurrentOwner, ht = ee.ReactCurrentBatchConfig, ce = 0, De = null, Le = null, Be = 0, ut = 0, Zn = Xt(0), Re = 0, Br = null, gn = 0, Xl = 0, os = 0, Wr = null, tt = null, is = 0, Jn = 1 / 0, It = null, Yl = !1, ss = null, tn = null, ql = !1, nn = null, Zl = 0, Kr = 0, as = null, Jl = -1, eo = 0;
  function qe() {
    return (ce & 6) !== 0 ? Ne() : Jl !== -1 ? Jl : Jl = Ne();
  }
  function rn(e) {
    return (e.mode & 1) === 0 ? 1 : (ce & 2) !== 0 && Be !== 0 ? Be & -Be : Wp.transition !== null ? (eo === 0 && (eo = Ta()), eo) : (e = he, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Oa(e.type)), e);
  }
  function kt(e, t, n, r) {
    if (50 < Kr) throw Kr = 0, as = null, Error(s(185));
    vr(e, n, r), ((ce & 2) === 0 || e !== De) && (e === De && ((ce & 2) === 0 && (Xl |= n), Re === 4 && ln(e, Be)), nt(e, r), n === 1 && ce === 0 && (t.mode & 1) === 0 && (Jn = Ne() + 500, $l && qt()));
  }
  function nt(e, t) {
    var n = e.callbackNode;
    Wd(e, t);
    var r = ul(e, e === De ? Be : 0);
    if (r === 0) n !== null && Fa(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Fa(n), t === 1) e.tag === 0 ? Bp(Oc.bind(null, e)) : ku(Oc.bind(null, e)), jp(function() {
        (ce & 6) === 0 && qt();
      }), n = null;
      else {
        switch (ba(r)) {
          case 1:
            n = Uo;
            break;
          case 4:
            n = Pa;
            break;
          case 16:
            n = ol;
            break;
          case 536870912:
            n = $a;
            break;
          default:
            n = ol;
        }
        n = Kc(n, Ic.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Ic(e, t) {
    if (Jl = -1, eo = 0, (ce & 6) !== 0) throw Error(s(327));
    var n = e.callbackNode;
    if (er() && e.callbackNode !== n) return null;
    var r = ul(e, e === De ? Be : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = to(e, r);
    else {
      t = r;
      var o = ce;
      ce |= 2;
      var i = jc();
      (De !== e || Be !== t) && (It = null, Jn = Ne() + 500, xn(e, t));
      do
        try {
          fh();
          break;
        } catch (m) {
          Dc(e, m);
        }
      while (!0);
      Fi(), Gl.current = i, ce = o, Le !== null ? t = 0 : (De = null, Be = 0, t = Re);
    }
    if (t !== 0) {
      if (t === 2 && (o = Vo(e), o !== 0 && (r = o, t = us(e, o))), t === 1) throw n = Br, xn(e, 0), ln(e, r), nt(e, Ne()), n;
      if (t === 6) ln(e, r);
      else {
        if (o = e.current.alternate, (r & 30) === 0 && !uh(o) && (t = to(e, r), t === 2 && (i = Vo(e), i !== 0 && (r = i, t = us(e, i))), t === 1)) throw n = Br, xn(e, 0), ln(e, r), nt(e, Ne()), n;
        switch (e.finishedWork = o, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            _n(e, tt, It);
            break;
          case 3:
            if (ln(e, r), (r & 130023424) === r && (t = is + 500 - Ne(), 10 < t)) {
              if (ul(e, 0) !== 0) break;
              if (o = e.suspendedLanes, (o & r) !== r) {
                qe(), e.pingedLanes |= e.suspendedLanes & o;
                break;
              }
              e.timeoutHandle = mi(_n.bind(null, e, tt, It), t);
              break;
            }
            _n(e, tt, It);
            break;
          case 4:
            if (ln(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, o = -1; 0 < r; ) {
              var u = 31 - yt(r);
              i = 1 << u, u = t[u], u > o && (o = u), r &= ~i;
            }
            if (r = o, r = Ne() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ah(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = mi(_n.bind(null, e, tt, It), r);
              break;
            }
            _n(e, tt, It);
            break;
          case 5:
            _n(e, tt, It);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return nt(e, Ne()), e.callbackNode === n ? Ic.bind(null, e) : null;
  }
  function us(e, t) {
    var n = Wr;
    return e.current.memoizedState.isDehydrated && (xn(e, t).flags |= 256), e = to(e, t), e !== 2 && (t = tt, tt = n, t !== null && cs(t)), e;
  }
  function cs(e) {
    tt === null ? tt = e : tt.push.apply(tt, e);
  }
  function uh(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var o = n[r], i = o.getSnapshot;
          o = o.value;
          try {
            if (!gt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
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
  function ln(e, t) {
    for (t &= ~os, t &= ~Xl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - yt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Oc(e) {
    if ((ce & 6) !== 0) throw Error(s(327));
    er();
    var t = ul(e, 0);
    if ((t & 1) === 0) return nt(e, Ne()), null;
    var n = to(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Vo(e);
      r !== 0 && (t = r, n = us(e, r));
    }
    if (n === 1) throw n = Br, xn(e, 0), ln(e, t), nt(e, Ne()), n;
    if (n === 6) throw Error(s(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, _n(e, tt, It), nt(e, Ne()), null;
  }
  function fs(e, t) {
    var n = ce;
    ce |= 1;
    try {
      return e(t);
    } finally {
      ce = n, ce === 0 && (Jn = Ne() + 500, $l && qt());
    }
  }
  function wn(e) {
    nn !== null && nn.tag === 0 && (ce & 6) === 0 && er();
    var t = ce;
    ce |= 1;
    var n = ht.transition, r = he;
    try {
      if (ht.transition = null, he = 1, e) return e();
    } finally {
      he = r, ht.transition = n, ce = t, (ce & 6) === 0 && qt();
    }
  }
  function ds() {
    ut = Zn.current, _e(Zn);
  }
  function xn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Dp(n)), Le !== null) for (n = Le.return; n !== null; ) {
      var r = n;
      switch (_i(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Fl();
          break;
        case 3:
          Xn(), _e(Ze), _e(Ke), Li();
          break;
        case 5:
          Ni(r);
          break;
        case 4:
          Xn();
          break;
        case 13:
          _e($e);
          break;
        case 19:
          _e($e);
          break;
        case 10:
          Pi(r.type._context);
          break;
        case 22:
        case 23:
          ds();
      }
      n = n.return;
    }
    if (De = e, Le = e = on(e.current, null), Be = ut = t, Re = 0, Br = null, os = Xl = gn = 0, tt = Wr = null, mn !== null) {
      for (t = 0; t < mn.length; t++) if (n = mn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, i = n.pending;
        if (i !== null) {
          var u = i.next;
          i.next = o, r.next = u;
        }
        n.pending = r;
      }
      mn = null;
    }
    return e;
  }
  function Dc(e, t) {
    do {
      var n = Le;
      try {
        if (Fi(), Ol.current = Vl, Dl) {
          for (var r = Te.memoizedState; r !== null; ) {
            var o = r.queue;
            o !== null && (o.pending = null), r = r.next;
          }
          Dl = !1;
        }
        if (yn = 0, Oe = Me = Te = null, Or = !1, Dr = 0, ls.current = null, n === null || n.return === null) {
          Re = 1, Br = t, Le = null;
          break;
        }
        e: {
          var i = e, u = n.return, m = n, w = t;
          if (t = Be, m.flags |= 32768, w !== null && typeof w == "object" && typeof w.then == "function") {
            var T = w, O = m, D = O.tag;
            if ((O.mode & 1) === 0 && (D === 0 || D === 11 || D === 15)) {
              var R = O.alternate;
              R ? (O.updateQueue = R.updateQueue, O.memoizedState = R.memoizedState, O.lanes = R.lanes) : (O.updateQueue = null, O.memoizedState = null);
            }
            var H = cc(u);
            if (H !== null) {
              H.flags &= -257, fc(H, u, m, i, t), H.mode & 1 && uc(i, T, t), t = H, w = T;
              var K = t.updateQueue;
              if (K === null) {
                var Q = /* @__PURE__ */ new Set();
                Q.add(w), t.updateQueue = Q;
              } else K.add(w);
              break e;
            } else {
              if ((t & 1) === 0) {
                uc(i, T, t), ps();
                break e;
              }
              w = Error(s(426));
            }
          } else if (Fe && m.mode & 1) {
            var Ae = cc(u);
            if (Ae !== null) {
              (Ae.flags & 65536) === 0 && (Ae.flags |= 256), fc(Ae, u, m, i, t), Ei(Yn(w, m));
              break e;
            }
          }
          i = w = Yn(w, m), Re !== 4 && (Re = 2), Wr === null ? Wr = [i] : Wr.push(i), i = u;
          do {
            switch (i.tag) {
              case 3:
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var F = sc(i, w, t);
                Lu(i, F);
                break e;
              case 1:
                m = w;
                var k = i.type, P = i.stateNode;
                if ((i.flags & 128) === 0 && (typeof k.getDerivedStateFromError == "function" || P !== null && typeof P.componentDidCatch == "function" && (tn === null || !tn.has(P)))) {
                  i.flags |= 65536, t &= -t, i.lanes |= t;
                  var j = ac(i, m, t);
                  Lu(i, j);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        Vc(n);
      } catch (X) {
        t = X, Le === n && n !== null && (Le = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function jc() {
    var e = Gl.current;
    return Gl.current = Vl, e === null ? Vl : e;
  }
  function ps() {
    (Re === 0 || Re === 3 || Re === 2) && (Re = 4), De === null || (gn & 268435455) === 0 && (Xl & 268435455) === 0 || ln(De, Be);
  }
  function to(e, t) {
    var n = ce;
    ce |= 2;
    var r = jc();
    (De !== e || Be !== t) && (It = null, xn(e, t));
    do
      try {
        ch();
        break;
      } catch (o) {
        Dc(e, o);
      }
    while (!0);
    if (Fi(), ce = n, Gl.current = r, Le !== null) throw Error(s(261));
    return De = null, Be = 0, Re;
  }
  function ch() {
    for (; Le !== null; ) Uc(Le);
  }
  function fh() {
    for (; Le !== null && !Rd(); ) Uc(Le);
  }
  function Uc(e) {
    var t = Wc(e.alternate, e, ut);
    e.memoizedProps = e.pendingProps, t === null ? Vc(e) : Le = t, ls.current = null;
  }
  function Vc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = rh(n, t, ut), n !== null) {
          Le = n;
          return;
        }
      } else {
        if (n = lh(n, t), n !== null) {
          n.flags &= 32767, Le = n;
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
  function _n(e, t, n) {
    var r = he, o = ht.transition;
    try {
      ht.transition = null, he = 1, dh(e, t, n, r);
    } finally {
      ht.transition = o, he = r;
    }
    return null;
  }
  function dh(e, t, n, r) {
    do
      er();
    while (nn !== null);
    if ((ce & 6) !== 0) throw Error(s(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(s(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Kd(e, i), e === De && (Le = De = null, Be = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || ql || (ql = !0, Kc(ol, function() {
      return er(), null;
    })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
      i = ht.transition, ht.transition = null;
      var u = he;
      he = 1;
      var m = ce;
      ce |= 4, ls.current = null, ih(e, n), Nc(n, e), Np(pi), dl = !!di, pi = di = null, e.current = n, sh(n), Id(), ce = m, he = u, ht.transition = i;
    } else e.current = n;
    if (ql && (ql = !1, nn = e, Zl = o), i = e.pendingLanes, i === 0 && (tn = null), jd(n.stateNode), nt(e, Ne()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
    if (Yl) throw Yl = !1, e = ss, ss = null, e;
    return (Zl & 1) !== 0 && e.tag !== 0 && er(), i = e.pendingLanes, (i & 1) !== 0 ? e === as ? Kr++ : (Kr = 0, as = e) : Kr = 0, qt(), null;
  }
  function er() {
    if (nn !== null) {
      var e = ba(Zl), t = ht.transition, n = he;
      try {
        if (ht.transition = null, he = 16 > e ? 16 : e, nn === null) var r = !1;
        else {
          if (e = nn, nn = null, Zl = 0, (ce & 6) !== 0) throw Error(s(331));
          var o = ce;
          for (ce |= 4, W = e.current; W !== null; ) {
            var i = W, u = i.child;
            if ((W.flags & 16) !== 0) {
              var m = i.deletions;
              if (m !== null) {
                for (var w = 0; w < m.length; w++) {
                  var T = m[w];
                  for (W = T; W !== null; ) {
                    var O = W;
                    switch (O.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Hr(8, O, i);
                    }
                    var D = O.child;
                    if (D !== null) D.return = O, W = D;
                    else for (; W !== null; ) {
                      O = W;
                      var R = O.sibling, H = O.return;
                      if (Pc(O), O === T) {
                        W = null;
                        break;
                      }
                      if (R !== null) {
                        R.return = H, W = R;
                        break;
                      }
                      W = H;
                    }
                  }
                }
                var K = i.alternate;
                if (K !== null) {
                  var Q = K.child;
                  if (Q !== null) {
                    K.child = null;
                    do {
                      var Ae = Q.sibling;
                      Q.sibling = null, Q = Ae;
                    } while (Q !== null);
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
                  Hr(9, i, i.return);
              }
              var F = i.sibling;
              if (F !== null) {
                F.return = i.return, W = F;
                break e;
              }
              W = i.return;
            }
          }
          var k = e.current;
          for (W = k; W !== null; ) {
            u = W;
            var P = u.child;
            if ((u.subtreeFlags & 2064) !== 0 && P !== null) P.return = u, W = P;
            else e: for (u = k; W !== null; ) {
              if (m = W, (m.flags & 2048) !== 0) try {
                switch (m.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ql(9, m);
                }
              } catch (X) {
                ze(m, m.return, X);
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
          if (ce = o, qt(), Et && typeof Et.onPostCommitFiberRoot == "function") try {
            Et.onPostCommitFiberRoot(il, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        he = n, ht.transition = t;
      }
    }
    return !1;
  }
  function Hc(e, t, n) {
    t = Yn(n, t), t = sc(e, t, 1), e = Jt(e, t, 1), t = qe(), e !== null && (vr(e, 1, t), nt(e, t));
  }
  function ze(e, t, n) {
    if (e.tag === 3) Hc(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Hc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (tn === null || !tn.has(r))) {
          e = Yn(n, e), e = ac(t, e, 1), t = Jt(t, e, 1), e = qe(), t !== null && (vr(t, 1, e), nt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function ph(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = qe(), e.pingedLanes |= e.suspendedLanes & n, De === e && (Be & n) === n && (Re === 4 || Re === 3 && (Be & 130023424) === Be && 500 > Ne() - is ? xn(e, 0) : os |= n), nt(e, t);
  }
  function Bc(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = al, al <<= 1, (al & 130023424) === 0 && (al = 4194304)));
    var n = qe();
    e = Lt(e, t), e !== null && (vr(e, t, n), nt(e, n));
  }
  function hh(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Bc(e, n);
  }
  function mh(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    r !== null && r.delete(t), Bc(e, n);
  }
  var Wc;
  Wc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ze.current) et = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return et = !1, nh(e, t, n);
      et = (e.flags & 131072) !== 0;
    }
    else et = !1, Fe && (t.flags & 1048576) !== 0 && Eu(t, bl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Wl(e, t), e = t.pendingProps;
        var o = Vn(t, Ke.current);
        Gn(t, n), o = Ii(null, t, r, e, o, n);
        var i = Oi();
        return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Je(r) ? (i = !0, Pl(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, bi(t), o.updater = Hl, t.stateNode = o, o._reactInternals = t, Bi(t, r, e, n), t = Gi(null, t, r, !0, i, n)) : (t.tag = 0, Fe && i && xi(t), Ye(null, t, o, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Wl(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = yh(r), e = xt(r, e), o) {
            case 0:
              t = Qi(null, t, r, e, n);
              break e;
            case 1:
              t = yc(null, t, r, e, n);
              break e;
            case 11:
              t = dc(null, t, r, e, n);
              break e;
            case 14:
              t = pc(null, t, r, xt(r.type, e), n);
              break e;
          }
          throw Error(s(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : xt(r, o), Qi(e, t, r, o, n);
      case 1:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : xt(r, o), yc(e, t, r, o, n);
      case 3:
        e: {
          if (gc(t), e === null) throw Error(s(387));
          r = t.pendingProps, i = t.memoizedState, o = i.element, Au(e, t), Rl(t, r, null, n);
          var u = t.memoizedState;
          if (r = u.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: u.cache, pendingSuspenseBoundaries: u.pendingSuspenseBoundaries, transitions: u.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = Yn(Error(s(423)), t), t = wc(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = Yn(Error(s(424)), t), t = wc(e, t, r, n, o);
            break e;
          } else for (at = Gt(t.stateNode.containerInfo.firstChild), st = t, Fe = !0, wt = null, n = zu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Wn(), r === o) {
              t = Rt(e, t, n);
              break e;
            }
            Ye(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Ru(t), e === null && ki(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, u = o.children, hi(r, o) ? u = null : i !== null && hi(r, i) && (t.flags |= 32), vc(e, t), Ye(e, t, u, n), t.child;
      case 6:
        return e === null && ki(t), null;
      case 13:
        return xc(e, t, n);
      case 4:
        return zi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Kn(t, null, r, n) : Ye(e, t, r, n), t.child;
      case 11:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : xt(r, o), dc(e, t, r, o, n);
      case 7:
        return Ye(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ye(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ye(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, u = o.value, we(Al, r._currentValue), r._currentValue = u, i !== null) if (gt(i.value, u)) {
            if (i.children === o.children && !Ze.current) {
              t = Rt(e, t, n);
              break e;
            }
          } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
            var m = i.dependencies;
            if (m !== null) {
              u = i.child;
              for (var w = m.firstContext; w !== null; ) {
                if (w.context === r) {
                  if (i.tag === 1) {
                    w = Mt(-1, n & -n), w.tag = 2;
                    var T = i.updateQueue;
                    if (T !== null) {
                      T = T.shared;
                      var O = T.pending;
                      O === null ? w.next = w : (w.next = O.next, O.next = w), T.pending = w;
                    }
                  }
                  i.lanes |= n, w = i.alternate, w !== null && (w.lanes |= n), $i(
                    i.return,
                    n,
                    t
                  ), m.lanes |= n;
                  break;
                }
                w = w.next;
              }
            } else if (i.tag === 10) u = i.type === t.type ? null : i.child;
            else if (i.tag === 18) {
              if (u = i.return, u === null) throw Error(s(341));
              u.lanes |= n, m = u.alternate, m !== null && (m.lanes |= n), $i(u, n, t), u = i.sibling;
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
          Ye(e, t, o.children, n), t = t.child;
        }
        return t;
      case 9:
        return o = t.type, r = t.pendingProps.children, Gn(t, n), o = dt(o), r = r(o), t.flags |= 1, Ye(e, t, r, n), t.child;
      case 14:
        return r = t.type, o = xt(r, t.pendingProps), o = xt(r.type, o), pc(e, t, r, o, n);
      case 15:
        return hc(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : xt(r, o), Wl(e, t), t.tag = 1, Je(r) ? (e = !0, Pl(t)) : e = !1, Gn(t, n), oc(t, r, o), Bi(t, r, o, n), Gi(null, t, r, !0, e, n);
      case 19:
        return Sc(e, t, n);
      case 22:
        return mc(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function Kc(e, t) {
    return Ca(e, t);
  }
  function vh(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function mt(e, t, n, r) {
    return new vh(e, t, n, r);
  }
  function hs(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function yh(e) {
    if (typeof e == "function") return hs(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === V) return 11;
      if (e === U) return 14;
    }
    return 2;
  }
  function on(e, t) {
    var n = e.alternate;
    return n === null ? (n = mt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function no(e, t, n, r, o, i) {
    var u = 2;
    if (r = e, typeof e == "function") hs(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else e: switch (e) {
      case de:
        return Sn(n.children, o, i, t);
      case Ee:
        u = 8, o |= 8;
        break;
      case be:
        return e = mt(12, n, t, o | 2), e.elementType = be, e.lanes = i, e;
      case J:
        return e = mt(13, n, t, o), e.elementType = J, e.lanes = i, e;
      case $:
        return e = mt(19, n, t, o), e.elementType = $, e.lanes = i, e;
      case L:
        return ro(n, o, i, t);
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
          case B:
            u = 16, r = null;
            break e;
        }
        throw Error(s(130, e == null ? e : typeof e, ""));
    }
    return t = mt(u, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
  }
  function Sn(e, t, n, r) {
    return e = mt(7, e, r, t), e.lanes = n, e;
  }
  function ro(e, t, n, r) {
    return e = mt(22, e, r, t), e.elementType = L, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function ms(e, t, n) {
    return e = mt(6, e, null, t), e.lanes = n, e;
  }
  function vs(e, t, n) {
    return t = mt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function gh(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ho(0), this.expirationTimes = Ho(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ho(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
  }
  function ys(e, t, n, r, o, i, u, m, w) {
    return e = new gh(e, t, n, m, w), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = mt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, bi(i), e;
  }
  function wh(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ke, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Qc(e) {
    if (!e) return Yt;
    e = e._reactInternals;
    e: {
      if (cn(e) !== e || e.tag !== 1) throw Error(s(170));
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
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Je(n)) return _u(e, n, t);
    }
    return t;
  }
  function Gc(e, t, n, r, o, i, u, m, w) {
    return e = ys(n, r, !0, e, o, i, u, m, w), e.context = Qc(null), n = e.current, r = qe(), o = rn(n), i = Mt(r, o), i.callback = t ?? null, Jt(n, i, o), e.current.lanes = o, vr(e, o, r), nt(e, r), e;
  }
  function lo(e, t, n, r) {
    var o = t.current, i = qe(), u = rn(o);
    return n = Qc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Mt(i, u), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Jt(o, t, u), e !== null && (kt(e, o, u, i), Ml(e, o, u)), u;
  }
  function oo(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Xc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function gs(e, t) {
    Xc(e, t), (e = e.alternate) && Xc(e, t);
  }
  function xh() {
    return null;
  }
  var Yc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function ws(e) {
    this._internalRoot = e;
  }
  io.prototype.render = ws.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    lo(e, t, null, null);
  }, io.prototype.unmount = ws.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      wn(function() {
        lo(null, e, null, null);
      }), t[bt] = null;
    }
  };
  function io(e) {
    this._internalRoot = e;
  }
  io.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Aa();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Wt.length && t !== 0 && t < Wt[n].priority; n++) ;
      Wt.splice(n, 0, e), n === 0 && Ra(e);
    }
  };
  function xs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function so(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function qc() {
  }
  function _h(e, t, n, r, o) {
    if (o) {
      if (typeof r == "function") {
        var i = r;
        r = function() {
          var T = oo(u);
          i.call(T);
        };
      }
      var u = Gc(t, r, e, 0, null, !1, !1, "", qc);
      return e._reactRootContainer = u, e[bt] = u.current, br(e.nodeType === 8 ? e.parentNode : e), wn(), u;
    }
    for (; o = e.lastChild; ) e.removeChild(o);
    if (typeof r == "function") {
      var m = r;
      r = function() {
        var T = oo(w);
        m.call(T);
      };
    }
    var w = ys(e, 0, !1, null, null, !1, !1, "", qc);
    return e._reactRootContainer = w, e[bt] = w.current, br(e.nodeType === 8 ? e.parentNode : e), wn(function() {
      lo(t, w, n, r);
    }), w;
  }
  function ao(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
      var u = i;
      if (typeof o == "function") {
        var m = o;
        o = function() {
          var w = oo(u);
          m.call(w);
        };
      }
      lo(t, u, e, o);
    } else u = _h(n, t, e, o, r);
    return oo(u);
  }
  za = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = mr(t.pendingLanes);
          n !== 0 && (Bo(t, n | 1), nt(t, Ne()), (ce & 6) === 0 && (Jn = Ne() + 500, qt()));
        }
        break;
      case 13:
        wn(function() {
          var r = Lt(e, 1);
          if (r !== null) {
            var o = qe();
            kt(r, e, 1, o);
          }
        }), gs(e, 1);
    }
  }, Wo = function(e) {
    if (e.tag === 13) {
      var t = Lt(e, 134217728);
      if (t !== null) {
        var n = qe();
        kt(t, e, 134217728, n);
      }
      gs(e, 134217728);
    }
  }, Na = function(e) {
    if (e.tag === 13) {
      var t = rn(e), n = Lt(e, t);
      if (n !== null) {
        var r = qe();
        kt(n, e, t, r);
      }
      gs(e, t);
    }
  }, Aa = function() {
    return he;
  }, La = function(e, t) {
    var n = he;
    try {
      return he = e, t();
    } finally {
      he = n;
    }
  }, Io = function(e, t, n) {
    switch (t) {
      case "input":
        if (To(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var o = Cl(r);
              if (!o) throw Error(s(90));
              la(r), To(r, o);
            }
          }
        }
        break;
      case "textarea":
        ua(e, n);
        break;
      case "select":
        t = n.value, t != null && bn(e, !!n.multiple, t, !1);
    }
  }, ga = fs, wa = wn;
  var Sh = { usingClientEntryPoint: !1, Events: [Ar, jn, Cl, va, ya, fs] }, Qr = { findFiberByHostInstance: fn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, kh = { bundleType: Qr.bundleType, version: Qr.version, rendererPackageName: Qr.rendererPackageName, rendererConfig: Qr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ee.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = ka(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Qr.findFiberByHostInstance || xh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var uo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!uo.isDisabled && uo.supportsFiber) try {
      il = uo.inject(kh), Et = uo;
    } catch {
    }
  }
  return rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sh, rt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!xs(t)) throw Error(s(200));
    return wh(e, t, null, n);
  }, rt.createRoot = function(e, t) {
    if (!xs(e)) throw Error(s(299));
    var n = !1, r = "", o = Yc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = ys(e, 1, !1, null, null, n, !1, r, o), e[bt] = t.current, br(e.nodeType === 8 ? e.parentNode : e), new ws(t);
  }, rt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = ka(t), e = e === null ? null : e.stateNode, e;
  }, rt.flushSync = function(e) {
    return wn(e);
  }, rt.hydrate = function(e, t, n) {
    if (!so(t)) throw Error(s(200));
    return ao(null, e, t, !0, n);
  }, rt.hydrateRoot = function(e, t, n) {
    if (!xs(e)) throw Error(s(405));
    var r = n != null && n.hydratedSources || null, o = !1, i = "", u = Yc;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (u = n.onRecoverableError)), t = Gc(t, null, e, 1, n ?? null, o, !1, i, u), e[bt] = t.current, br(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
      n,
      o
    );
    return new io(t);
  }, rt.render = function(e, t, n) {
    if (!so(t)) throw Error(s(200));
    return ao(null, e, t, !1, n);
  }, rt.unmountComponentAtNode = function(e) {
    if (!so(e)) throw Error(s(40));
    return e._reactRootContainer ? (wn(function() {
      ao(null, null, e, !1, function() {
        e._reactRootContainer = null, e[bt] = null;
      });
    }), !0) : !1;
  }, rt.unstable_batchedUpdates = fs, rt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!so(n)) throw Error(s(200));
    if (e == null || e._reactInternals === void 0) throw Error(s(38));
    return ao(e, t, n, !1, r);
  }, rt.version = "18.3.1-next-f1338f8080-20240426", rt;
}
var af;
function Lf() {
  if (af) return ks.exports;
  af = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (a) {
        console.error(a);
      }
  }
  return l(), ks.exports = Th(), ks.exports;
}
var uf;
function bh() {
  if (uf) return co;
  uf = 1;
  var l = Lf();
  return co.createRoot = l.createRoot, co.hydrateRoot = l.hydrateRoot, co;
}
var zh = bh(), Fs = { exports: {} }, Gr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cf;
function Nh() {
  if (cf) return Gr;
  cf = 1;
  var l = Qs(), a = Symbol.for("react.element"), s = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, f = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(y, d, c) {
    var E, S = {}, v = null, C = null;
    c !== void 0 && (v = "" + c), d.key !== void 0 && (v = "" + d.key), d.ref !== void 0 && (C = d.ref);
    for (E in d) p.call(d, E) && !g.hasOwnProperty(E) && (S[E] = d[E]);
    if (y && y.defaultProps) for (E in d = y.defaultProps, d) S[E] === void 0 && (S[E] = d[E]);
    return { $$typeof: a, type: y, key: v, ref: C, props: S, _owner: f.current };
  }
  return Gr.Fragment = s, Gr.jsx = h, Gr.jsxs = h, Gr;
}
var ff;
function Ah() {
  return ff || (ff = 1, Fs.exports = Nh()), Fs.exports;
}
var Pe = Ah();
function ir(l) {
  if (Lh()) l.focus({
    preventScroll: !0
  });
  else {
    let a = Mh(l);
    l.focus(), Rh(a);
  }
}
let fo = null;
function Lh() {
  if (fo == null) {
    fo = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return fo = !0, !0;
        }
      });
    } catch {
    }
  }
  return fo;
}
function Mh(l) {
  let a = l.parentNode, s = [], p = document.scrollingElement || document.documentElement;
  for (; a instanceof HTMLElement && a !== p; )
    (a.offsetHeight < a.scrollHeight || a.offsetWidth < a.scrollWidth) && s.push({
      element: a,
      scrollTop: a.scrollTop,
      scrollLeft: a.scrollLeft
    }), a = a.parentNode;
  return p instanceof HTMLElement && s.push({
    element: p,
    scrollTop: p.scrollTop,
    scrollLeft: p.scrollLeft
  }), s;
}
function Rh(l) {
  for (let { element: a, scrollTop: s, scrollLeft: p } of l)
    a.scrollTop = s, a.scrollLeft = p;
}
const We = (l) => Ih(l) ? l.document : Oh(l) ? l : (l == null ? void 0 : l.ownerDocument) ?? (typeof document < "u" ? document : void 0), vt = (l) => {
  let a = We(l);
  return (a == null ? void 0 : a.defaultView) ?? (typeof window < "u" ? window : void 0);
};
function Mf(l) {
  return l !== null && typeof l == "object" && "nodeType" in l && typeof l.nodeType == "number";
}
function Ih(l) {
  return typeof l == "object" && l != null && "window" in l && l.window === l;
}
function Oh(l) {
  return Mf(l) && l.nodeType === 9;
}
function Rf(l) {
  return Mf(l) && l.nodeType === 11 && "host" in l;
}
let Dh = !1;
function Gs() {
  return Dh;
}
function Ue(l, a) {
  var p;
  if (!Gs()) return a && l ? l.contains(a) : !1;
  if (!l || !a) return !1;
  let s = a;
  for (; s !== null; ) {
    if (s === l) return !0;
    typeof s.assignedElements != "function" && ((p = s.assignedSlot) != null && p.parentNode) ? s = s.assignedSlot.parentNode : Rf(s) ? s = s.host : s = s.parentNode;
  }
  return !1;
}
const Ut = (l = document) => {
  var s;
  if (!Gs()) return l.activeElement;
  let a = l.activeElement;
  for (; a && "shadowRoot" in a && ((s = a.shadowRoot) != null && s.activeElement); ) a = a.shadowRoot.activeElement;
  return a;
};
function ve(l) {
  if (Gs() && l.target instanceof Element && l.target.shadowRoot) {
    if ("composedPath" in l) return l.composedPath()[0] ?? null;
    if ("composedPath" in l.nativeEvent) return l.nativeEvent.composedPath()[0] ?? null;
  }
  return l.target;
}
const jh = typeof Element < "u" && "checkVisibility" in Element.prototype;
function Uh(l) {
  const a = vt(l);
  if (!(l instanceof a.HTMLElement) && !(l instanceof a.SVGElement)) return !1;
  let { display: s, visibility: p } = l.style, f = s !== "none" && p !== "hidden" && p !== "collapse";
  if (f) {
    const { getComputedStyle: g } = vt(l);
    let { display: h, visibility: y } = g(l);
    f = h !== "none" && y !== "hidden" && y !== "collapse";
  }
  return f;
}
function Vh(l, a) {
  return !l.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !l.hasAttribute("data-react-aria-prevent-focus") && (l.nodeName === "DETAILS" && a && a.nodeName !== "SUMMARY" ? l.hasAttribute("open") : !0);
}
function If(l, a) {
  return jh ? l.checkVisibility({
    visibilityProperty: !0
  }) && !l.closest("[data-react-aria-prevent-focus]") : l.nodeName !== "#comment" && Uh(l) && Vh(l, a) && (!l.parentElement || If(l.parentElement, l));
}
const Of = [
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
], Hh = Of.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
Of.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
function Bh(l, a) {
  return l.matches(Hh) && !Wh(l) && ((a == null ? void 0 : a.skipVisibilityCheck) || If(l));
}
function Wh(l) {
  let a = l;
  for (; a != null; ) {
    if (a instanceof vt(a).HTMLElement && a.inert) return !0;
    a = a.parentElement;
  }
  return !1;
}
const Xs = typeof document < "u" ? me.useLayoutEffect : () => {
};
function Ys(l) {
  let a = l;
  return a.nativeEvent = l, a.isDefaultPrevented = () => a.defaultPrevented, a.isPropagationStopped = () => a.cancelBubble, a.persist = () => {
  }, a;
}
function Df(l, a) {
  Object.defineProperty(l, "target", {
    value: a
  }), Object.defineProperty(l, "currentTarget", {
    value: a
  });
}
function jf(l) {
  let a = ne.useRef({
    isFocused: !1,
    observer: null
  });
  return Xs(() => {
    const s = a.current;
    return () => {
      s.observer && (s.observer.disconnect(), s.observer = null);
    };
  }, []), ne.useCallback((s) => {
    let p = ve(s);
    if (p instanceof HTMLButtonElement || p instanceof HTMLInputElement || p instanceof HTMLTextAreaElement || p instanceof HTMLSelectElement) {
      a.current.isFocused = !0;
      let f = p, g = (h) => {
        if (a.current.isFocused = !1, f.disabled) {
          let y = Ys(h);
          l == null || l(y);
        }
        a.current.observer && (a.current.observer.disconnect(), a.current.observer = null);
      };
      f.addEventListener("focusout", g, {
        once: !0
      }), a.current.observer = new MutationObserver(() => {
        var h;
        if (a.current.isFocused && f.disabled) {
          (h = a.current.observer) == null || h.disconnect();
          let y = f === Ut() ? null : Ut();
          f.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: y
          })), f.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: y
          }));
        }
      }), a.current.observer.observe(f, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    l
  ]);
}
let _o = !1;
function Kh(l) {
  for (; l && !Bh(l, {
    skipVisibilityCheck: !0
  }); ) l = l.parentElement;
  let a = vt(l), s = Ut(a.document);
  if (!s || s === l) return;
  let p = l == null ? void 0 : l.getRootNode(), f = p != null && Rf(p) ? p : vt(l), g = (I) => I === l || I != null && Ue(l, I), h = (I) => I === s || s != null && I != null && Ue(s, I);
  _o = !0;
  let y = !1, d = (I) => {
    (h(ve(I)) || y) && I.stopImmediatePropagation();
  }, c = (I) => {
    (h(ve(I)) || y) && (I.stopImmediatePropagation(), !l && !y && (y = !0, ir(s), v()));
  }, E = (I) => {
    (g(ve(I)) || y) && I.stopImmediatePropagation();
  }, S = (I) => {
    (g(ve(I)) || y) && (I.stopImmediatePropagation(), y || (y = !0, ir(s), v()));
  };
  f.addEventListener("blur", d, !0), f.addEventListener("focusout", c, !0), f.addEventListener("focusin", S, !0), f.addEventListener("focus", E, !0);
  let v = () => {
    cancelAnimationFrame(C), f.removeEventListener("blur", d, !0), f.removeEventListener("focusout", c, !0), f.removeEventListener("focusin", S, !0), f.removeEventListener("focus", E, !0), _o = !1, y = !1;
  }, C = requestAnimationFrame(v);
  return v;
}
function Fo(l) {
  var s;
  if (typeof window > "u" || window.navigator == null) return !1;
  let a = (s = window.navigator.userAgentData) == null ? void 0 : s.brands;
  return Array.isArray(a) && a.some((p) => l.test(p.brand)) || l.test(window.navigator.userAgent);
}
function qs(l) {
  var a;
  return typeof window < "u" && window.navigator != null ? l.test(((a = window.navigator.userAgentData) == null ? void 0 : a.platform) || window.navigator.platform) : !1;
}
function un(l) {
  let a = null;
  return () => (a == null && (a = l()), a);
}
const Cn = un(function() {
  return qs(/^Mac/i);
}), Qh = un(function() {
  return qs(/^iPhone/i);
}), Uf = un(function() {
  return qs(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Cn() && navigator.maxTouchPoints > 1;
}), Zs = un(function() {
  return Qh() || Uf();
}), So = un(function() {
  return Fo(/AppleWebKit/i) && (Zs() || !Gh());
}), Gh = un(function() {
  return Fo(/Chrome|CriOS|CrMo/i);
}), Ms = un(function() {
  return Fo(/Android/i);
}), Xh = un(function() {
  return Fo(/(Firefox|FxiOS)/i);
});
function Vf(l) {
  return l.pointerType === "" && l.isTrusted ? !0 : Ms() && l.pointerType ? l.type === "click" && l.buttons === 1 : l.detail === 0 && !l.pointerType;
}
function Yh(l) {
  return !Ms() && l.width === 0 && l.height === 0 || Ms() && l.width === 1 && l.height === 1 && l.pressure === 0 && l.detail === 0 && l.pointerType === "mouse";
}
function Fn(l, a, s = !0) {
  var d, c;
  let { metaKey: p, ctrlKey: f, altKey: g, shiftKey: h } = a;
  !So() && Xh() && ((c = (d = window.event) == null ? void 0 : d.type) != null && c.startsWith("key")) && l.target === "_blank" && (Cn() ? p = !0 : f = !0);
  let y = So() && Cn() && !Uf() ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: p,
    ctrlKey: f,
    altKey: g,
    shiftKey: h
  }) : new MouseEvent("click", {
    metaKey: p,
    ctrlKey: f,
    altKey: g,
    shiftKey: h,
    detail: 1,
    bubbles: !0,
    cancelable: !0
  });
  Fn.isOpening = s, ir(l), l.dispatchEvent(y), Fn.isOpening = !1;
}
Fn.isOpening = !1;
let sr = null;
const Rs = /* @__PURE__ */ new Set();
let qr = /* @__PURE__ */ new Map(), Pn = !1, vo = !1;
const qh = {
  Tab: !0,
  Escape: !0
};
function Js(l, a) {
  for (let s of Rs) s(l, a);
}
function Zh(l) {
  return !(l.metaKey || !Cn() && l.altKey || l.ctrlKey || l.key === "Control" || l.key === "Shift" || l.key === "Meta");
}
function ko(l) {
  Pn = !0, !Fn.isOpening && Zh(l) && (sr = "keyboard", Js("keyboard", l));
}
function lr(l) {
  sr = "pointer", "pointerType" in l && l.pointerType, (l.type === "mousedown" || l.type === "pointerdown") && (Pn = !0, Js("pointer", l));
}
function Hf(l) {
  !Fn.isOpening && Vf(l) && (Pn = !0, sr = "virtual");
}
function Bf(l) {
  if (_o) return;
  let a = ve(l), s = vt(a), p = We(a);
  if (a === s) {
    vo = !0;
    return;
  }
  a === p || !l.isTrusted || (!Pn && !vo && (sr = "virtual", Js("virtual", l)), Pn = !1, vo = !1);
}
function Wf() {
  _o || (Pn = !1, vo = !0);
}
function Is(l) {
  if (typeof window > "u" || typeof document > "u") return;
  const a = vt(l), s = We(l);
  if (qr.get(a)) return;
  let p = a.HTMLElement.prototype.focus;
  Reflect.defineProperty(a.HTMLElement.prototype, "focus", {
    configurable: !0,
    writable: !0,
    value: function() {
      Pn = !0, p.apply(this, arguments);
    }
  }), s.addEventListener("keydown", ko, !0), s.addEventListener("keyup", ko, !0), s.addEventListener("click", Hf, !0), a.addEventListener("focus", Bf, !0), a.addEventListener("blur", Wf, !1), typeof PointerEvent < "u" && (s.addEventListener("pointerdown", lr, !0), s.addEventListener("pointermove", lr, !0), s.addEventListener("pointerup", lr, !0)), a.addEventListener("beforeunload", () => {
    Kf(l);
  }, {
    once: !0
  }), qr.set(a, {
    focus: p
  });
}
const Kf = (l, a) => {
  const s = vt(l), p = We(l);
  a && p.removeEventListener("DOMContentLoaded", a), qr.has(s) && (Reflect.defineProperty(s.HTMLElement.prototype, "focus", {
    configurable: !0,
    writable: !0,
    value: qr.get(s).focus
  }), p.removeEventListener("keydown", ko, !0), p.removeEventListener("keyup", ko, !0), p.removeEventListener("click", Hf, !0), s.removeEventListener("focus", Bf, !0), s.removeEventListener("blur", Wf, !1), typeof PointerEvent < "u" && (p.removeEventListener("pointerdown", lr, !0), p.removeEventListener("pointermove", lr, !0), p.removeEventListener("pointerup", lr, !0)), qr.delete(s));
};
function Jh(l) {
  const a = We(l);
  let s;
  return a.readyState !== "loading" ? Is(l) : (s = () => {
    Is(l);
  }, a.addEventListener("DOMContentLoaded", s)), () => Kf(l, s);
}
typeof document < "u" && Jh();
function Os() {
  return sr !== "pointer";
}
function em() {
  return sr;
}
const tm = /* @__PURE__ */ new Set([
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
function nm(l, a, s) {
  let p = s ? ve(s) : void 0, f = We(p), g = vt(p);
  const h = typeof g < "u" ? g.HTMLInputElement : HTMLInputElement, y = typeof g < "u" ? g.HTMLTextAreaElement : HTMLTextAreaElement, d = typeof g < "u" ? g.HTMLElement : HTMLElement, c = typeof g < "u" ? g.KeyboardEvent : KeyboardEvent;
  let E = Ut(f);
  return l = l || E instanceof h && !tm.has(E.type) || E instanceof y || E instanceof d && E.isContentEditable, !(l && a === "keyboard" && s instanceof c && !qh[s.key]);
}
function rm(l, a, s) {
  Is(), ne.useEffect(() => {
    if ((s == null ? void 0 : s.enabled) === !1) return;
    let p = (f, g) => {
      nm(!!(s != null && s.isTextInput), f, g) && l(Os());
    };
    return Rs.add(p), () => {
      Rs.delete(p);
    };
  }, a);
}
let an = /* @__PURE__ */ new Map(), Ds = /* @__PURE__ */ new Set();
function df() {
  if (typeof window > "u") return;
  function l(p) {
    return "propertyName" in p;
  }
  let a = (p) => {
    let f = ve(p);
    if (!l(p) || !f) return;
    let g = an.get(f);
    g || (g = /* @__PURE__ */ new Set(), an.set(f, g), f.addEventListener("transitioncancel", s, {
      once: !0
    })), g.add(p.propertyName);
  }, s = (p) => {
    let f = ve(p);
    if (!l(p) || !f) return;
    let g = an.get(f);
    if (g && (g.delete(p.propertyName), g.size === 0 && (f.removeEventListener("transitioncancel", s), an.delete(f)), an.size === 0)) {
      for (let h of Ds) h();
      Ds.clear();
    }
  };
  document.body.addEventListener("transitionrun", a), document.body.addEventListener("transitionend", s);
}
typeof document < "u" && (document.readyState !== "loading" ? df() : document.addEventListener("DOMContentLoaded", df));
function lm() {
  for (const [l] of an)
    "isConnected" in l && !l.isConnected && an.delete(l);
}
function Qf(l) {
  requestAnimationFrame(() => {
    lm(), an.size === 0 ? l() : Ds.add(l);
  });
}
function om(l) {
  if (!l.isConnected) return;
  const a = We(l);
  if (em() === "virtual") {
    let s = Ut(a);
    Qf(() => {
      const p = Ut(a);
      (p === s || p === a.body) && l.isConnected && ir(l);
    });
  } else ir(l);
}
function Eo(...l) {
  return (...a) => {
    for (let s of l) typeof s == "function" && s(...a);
  };
}
let js = /* @__PURE__ */ new Map();
typeof FinalizationRegistry < "u" && new FinalizationRegistry((l) => {
  js.delete(l);
});
function im(l, a) {
  if (l === a) return l;
  let s = js.get(l);
  if (s)
    return s.forEach((f) => f.current = a), a;
  let p = js.get(a);
  return p ? (p.forEach((f) => f.current = l), l) : a;
}
function sm(...l) {
  return l.length === 1 && l[0] ? l[0] : (a) => {
    let s = !1;
    const p = l.map((f) => {
      const g = pf(f, a);
      return s || (s = typeof g == "function"), g;
    });
    if (s) return () => {
      p.forEach((f, g) => {
        typeof f == "function" ? f() : pf(l[g], null);
      });
    };
  };
}
function pf(l, a) {
  if (typeof l == "function") return l(a);
  l != null && (l.current = a);
}
function Gf(l) {
  var a, s, p = "";
  if (typeof l == "string" || typeof l == "number") p += l;
  else if (typeof l == "object") if (Array.isArray(l)) {
    var f = l.length;
    for (a = 0; a < f; a++) l[a] && (s = Gf(l[a])) && (p && (p += " "), p += s);
  } else for (s in l) l[s] && (p && (p += " "), p += s);
  return p;
}
function ea() {
  for (var l, a, s = 0, p = "", f = arguments.length; s < f; s++) (l = arguments[s]) && (a = Gf(l)) && (p && (p += " "), p += a);
  return p;
}
function $n(...l) {
  let a = {
    ...l[0]
  };
  for (let s = 1; s < l.length; s++) {
    let p = l[s];
    for (let f in p) {
      let g = a[f], h = p[f];
      typeof g == "function" && typeof h == "function" && // This is a lot faster than a regex.
      f[0] === "o" && f[1] === "n" && f.charCodeAt(2) >= /* 'A' */
      65 && f.charCodeAt(2) <= /* 'Z' */
      90 ? a[f] = Eo(g, h) : (f === "className" || f === "UNSAFE_className") && typeof g == "string" && typeof h == "string" ? a[f] = ea(g, h) : f === "id" && g && h ? a.id = im(g, h) : f === "ref" && g && h ? a.ref = sm(g, h) : a[f] = h !== void 0 ? h : g;
    }
  }
  return a;
}
function Xf(l) {
  let { isDisabled: a, onFocus: s, onBlur: p, onFocusChange: f } = l;
  const g = ne.useCallback((d) => {
    if (ve(d) === d.currentTarget)
      return p && p(d), f && f(!1), !0;
  }, [
    p,
    f
  ]), h = jf(g), y = ne.useCallback((d) => {
    let c = ve(d);
    const E = We(c), S = E ? Ut(E) : Ut();
    c === d.currentTarget && c === S && (s && s(d), f && f(!0), h(d));
  }, [
    f,
    s,
    h
  ]);
  return {
    focusProps: {
      onFocus: !a && (s || f || p) ? y : void 0,
      onBlur: !a && (p || f) ? g : void 0
    }
  };
}
function po(l) {
  if (l)
    return (a) => {
      let s = !0, p = {
        ...a,
        preventDefault() {
          a.preventDefault();
        },
        isDefaultPrevented() {
          return a.isDefaultPrevented();
        },
        stopPropagation() {
          s = !0;
        },
        continuePropagation() {
          s = !1, typeof a.continuePropagation == "function" && a.continuePropagation();
        },
        isPropagationStopped() {
          return s;
        }
      };
      l(p), s && !(typeof a.isPropagationStopped == "function" && a.isPropagationStopped()) && a.stopPropagation();
    };
}
const am = /* @__PURE__ */ new Set([
  "shift",
  "alt",
  "control",
  "meta",
  "mod"
  // OS dependent - Cmd on Mac, Control on Windows/Linux
]), um = [
  "Alt",
  "Control",
  "Meta",
  "Shift"
];
function cm(l) {
  let a = /* @__PURE__ */ new Set();
  return l.alt && a.add("Alt"), l.shift && a.add("Shift"), l.ctrl && a.add("Control"), l.meta && a.add("Meta"), l.mod && a.add(Cn() ? "Meta" : "Control"), a;
}
function fm(l) {
  let a = /* @__PURE__ */ new Set();
  return l.altKey && a.add("Alt"), l.ctrlKey && a.add("Control"), l.metaKey && a.add("Meta"), l.shiftKey && a.add("Shift"), a;
}
function Yf(l) {
  return um.filter((a) => l.has(a));
}
function dm(l) {
  let a = l.split("+").reduce((s, p) => {
    let f = p.toLowerCase();
    return am.has(f) ? f === "shift" ? s.shift = !0 : f === "alt" ? s.alt = !0 : f === "control" ? s.ctrl = !0 : f === "meta" ? s.meta = !0 : f === "mod" && (s.mod = !0) : s.key = p, s;
  }, {
    shift: !1,
    alt: !1,
    ctrl: !1,
    meta: !1,
    mod: !1,
    key: ""
  });
  if (a.key === "") throw new Error(`Invalid keyboard shortcut: "${l}". Must include exactly one non-modifier key (e.g. "a", "Enter", "ArrowDown"). Combine any of Shift, Alt, Ctrl, Meta, and Mod.`);
  return a;
}
function qf(l) {
  return l.toLowerCase();
}
const pm = {
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
function hm(l) {
  let a = qf(l), s = pm[a];
  return s ?? a;
}
function mm(l) {
  let a = Yf(cm(l)), s = hm(l.key);
  return a.length > 0 ? `${a.join("+")}+${s}` : s;
}
function vm(l) {
  let a = Yf(fm(l)), s = qf(l.key);
  return (a.length > 0 ? `${a.join("+")}+` : "") + s;
}
function ym(l) {
  let a = /* @__PURE__ */ new Map();
  for (let [s, p] of Object.entries(l)) {
    let f = dm(s);
    a.set(mm(f), p);
  }
  return (s) => {
    let p = vm(s), f = a.get(p), g = f == null ? void 0 : f(s);
    g === void 0 && f !== void 0 ? g = {
      shouldContinuePropagation: !1,
      shouldPreventDefault: !0
    } : typeof g == "boolean" && (g = {
      shouldContinuePropagation: !g,
      shouldPreventDefault: g
    }), g != null && g.shouldPreventDefault && s.preventDefault(), (!f || g != null && g.shouldContinuePropagation) && s.continuePropagation();
  };
}
function gm(l) {
  let { shortcuts: a, allowRepeats: s = !1, allowComposing: p = !1 } = l, f, g;
  if (a) {
    let h = ym(a), y = po((c) => {
      var E, S;
      if (!Ue(c.currentTarget, ve(c))) {
        c.continuePropagation();
        return;
      }
      if ((E = c.nativeEvent) != null && E.repeat && !s || (S = c.nativeEvent) != null && S.isComposing && !p) {
        c.continuePropagation();
        return;
      }
      h(c);
    }), d = po((c) => {
      var E, S;
      if (!Ue(c.currentTarget, ve(c))) {
        c.continuePropagation();
        return;
      }
      if ((E = c.nativeEvent) != null && E.repeat && !s || (S = c.nativeEvent) != null && S.isComposing && !p) {
        c.continuePropagation();
        return;
      }
      c.continuePropagation();
    });
    f = l.onKeyDown ? Eo(l.onKeyDown, y) : y, g = l.onKeyUp ? Eo(l.onKeyUp, d) : d;
  } else
    f = po(l.onKeyDown), g = po(l.onKeyUp);
  return {
    keyboardProps: l.isDisabled ? {} : {
      onKeyDown: f,
      onKeyUp: g
    }
  };
}
function Zf(l, a) {
  Xs(() => {
    if (l && l.ref && a)
      return l.ref.current = a.current, () => {
        l.ref && (l.ref.current = null);
      };
  });
}
let wm = /* @__PURE__ */ me.createContext(null);
function xm(l) {
  let a = ne.useContext(wm) || {};
  Zf(a, l);
  let { ref: s, ...p } = a;
  return p;
}
function _m(l, a) {
  let { focusProps: s } = Xf(l), { keyboardProps: p } = gm(l), f = $n(s, p), g = xm(a), h = l.isDisabled ? {} : g, y = ne.useRef(l.autoFocus);
  ne.useEffect(() => {
    y.current && a.current && om(a.current), y.current = !1;
  }, [
    a
  ]);
  let d = l.excludeFromTabOrder ? -1 : 0;
  return l.isDisabled && (d = void 0), {
    focusableProps: $n({
      ...f,
      tabIndex: d
    }, h)
  };
}
Lf();
const Sm = me.useInsertionEffect ?? Xs;
function Ps(l) {
  const a = ne.useRef(null);
  return Sm(() => {
    a.current = l;
  }, [
    l
  ]), ne.useCallback((...s) => {
    const p = a.current;
    return p == null ? void 0 : p(...s);
  }, []);
}
const km = /* @__PURE__ */ new Set([
  "id"
]), Em = /* @__PURE__ */ new Set([
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
]), hf = /* @__PURE__ */ new Set([
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
function $m(l, a = {}) {
  let { labelable: s, isLink: p, global: f, events: g = f, propNames: h } = a, y = {};
  for (const d in l) Object.prototype.hasOwnProperty.call(l, d) && (km.has(d) || s && Em.has(d) || p && Cm.has(d) || f && Fm.has(d) || g && (hf.has(d) || d.endsWith("Capture") && hf.has(d.slice(0, -7))) || h != null && h.has(d) || Pm.test(d)) && (y[d] = l[d]);
  return y;
}
let rr = "default", Us = "", yo = /* @__PURE__ */ new WeakMap();
function Tm(l) {
  if (Zs() && So()) {
    if (rr === "default") {
      const a = We(l);
      Us = a.documentElement.style.webkitUserSelect, a.documentElement.style.webkitUserSelect = "none";
    }
    rr = "disabled";
  } else if (l instanceof HTMLElement || l instanceof SVGElement) {
    let a = "userSelect" in l.style ? "userSelect" : "webkitUserSelect";
    yo.set(l, l.style[a]), l.style[a] = "none";
  }
}
function mf(l) {
  if (Zs() && So()) {
    if (rr !== "disabled") return;
    rr = "restoring", setTimeout(() => {
      Qf(() => {
        if (rr === "restoring") {
          const a = We(l);
          a.documentElement.style.webkitUserSelect === "none" && (a.documentElement.style.webkitUserSelect = Us || ""), Us = "", rr = "default";
        }
      });
    }, 300);
  } else if ((l instanceof HTMLElement || l instanceof SVGElement) && l && yo.has(l)) {
    let a = yo.get(l), s = "userSelect" in l.style ? "userSelect" : "webkitUserSelect";
    l.style[s] === "none" && (l.style[s] = a), l.getAttribute("style") === "" && l.removeAttribute("style"), yo.delete(l);
  }
}
function bm(l, a) {
  let s = vt(a), p = We(a);
  if (p == null || s == null) return;
  let f, g = `meta[name="${CSS.escape(l)}"], meta[property="${CSS.escape(l)}"]`, h = p.querySelector(g);
  return h && h instanceof s.HTMLMetaElement && (l === "csp-nonce" && h.nonce && (f ?? (f = h.nonce || void 0)), h.content && (f ?? (f = h.content || void 0))), l === "csp-nonce" && (f ?? (f = s.__webpack_nonce__ || globalThis.__webpack_nonce__ || void 0)), f;
}
let vf = /* @__PURE__ */ new WeakMap();
function zm(l) {
  let a = We(l), s = vf.get(a);
  return s ?? (s = bm("csp-nonce", a)), s !== void 0 && vf.set(a, s), s;
}
const Jf = me.createContext({
  register: () => {
  }
});
Jf.displayName = "PressResponderContext";
function ed() {
  let l = ne.useRef(/* @__PURE__ */ new Map()), a = ne.useCallback((f, g, h, y) => {
    let d = y != null && y.once ? (...c) => {
      l.current.delete(h), h(...c);
    } : h;
    l.current.set(h, {
      type: g,
      eventTarget: f,
      fn: d,
      options: y
    }), f.addEventListener(g, d, y);
  }, []), s = ne.useCallback((f, g, h, y) => {
    var c;
    let d = ((c = l.current.get(h)) == null ? void 0 : c.fn) || h;
    f.removeEventListener(g, d, y), l.current.delete(h);
  }, []), p = ne.useCallback(() => {
    l.current.forEach((f, g) => {
      s(f.eventTarget, f.type, g, f.options);
    });
  }, [
    s
  ]);
  return ne.useEffect(() => p, [
    p
  ]), {
    addGlobalListener: a,
    removeGlobalListener: s,
    removeAllGlobalListeners: p
  };
}
function Nm(l) {
  let a = ne.useContext(Jf);
  if (a) {
    let { register: s, ref: p, ...f } = a;
    l = $n(f, l), s();
  }
  return Zf(a, l.ref), l;
}
var or;
class ho {
  constructor(a, s, p, f) {
    tf(this, or);
    _s(this, or, !0);
    let g = (f == null ? void 0 : f.target) ?? p.currentTarget;
    const h = g == null ? void 0 : g.getBoundingClientRect();
    let y, d = 0, c, E = null;
    p.clientX != null && p.clientY != null && (c = p.clientX, E = p.clientY), h && (c != null && E != null ? (y = c - h.left, d = E - h.top) : (y = h.width / 2, d = h.height / 2)), this.type = a, this.pointerType = s, this.target = p.currentTarget, this.shiftKey = p.shiftKey, this.metaKey = p.metaKey, this.ctrlKey = p.ctrlKey, this.altKey = p.altKey, this.x = y, this.y = d, this.key = p.key;
  }
  continuePropagation() {
    _s(this, or, !1);
  }
  get shouldStopPropagation() {
    return ef(this, or);
  }
}
or = new WeakMap();
const yf = Symbol("linkClicked"), gf = "react-aria-pressable-style", wf = "data-react-aria-pressable";
function Am(l) {
  let { onPress: a, onPressChange: s, onPressStart: p, onPressEnd: f, onPressUp: g, onClick: h, isDisabled: y, isPressed: d, preventFocusOnPress: c, shouldCancelOnPointerExit: E, allowTextSelectionOnPress: S, ref: v, ...C } = Nm(l), [I, x] = ne.useState(!1), z = ne.useRef({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: Y, removeAllGlobalListeners: G } = ed(), re = ne.useCallback(($, U) => {
    let B = z.current;
    if (y || B.didFirePressStart) return !1;
    let L = !0;
    if (B.isTriggeringEvent = !0, p) {
      let A = new ho("pressstart", U, $);
      p(A), L = A.shouldStopPropagation;
    }
    return s && s(!0), B.isTriggeringEvent = !1, B.didFirePressStart = !0, x(!0), L;
  }, [
    y,
    p,
    s
  ]), ee = ne.useCallback(($, U, B = !0) => {
    let L = z.current;
    if (!L.didFirePressStart) return !1;
    L.didFirePressStart = !1, L.isTriggeringEvent = !0;
    let A = !0;
    if (f) {
      let b = new ho("pressend", U, $);
      f(b), A = b.shouldStopPropagation;
    }
    if (s && s(!1), x(!1), a && B && !y) {
      let b = new ho("press", U, $);
      a(b), A && (A = b.shouldStopPropagation);
    }
    return L.isTriggeringEvent = !1, A;
  }, [
    y,
    f,
    s,
    a
  ]), ge = Ps(ee), ke = ne.useCallback(($, U) => {
    let B = z.current;
    if (y) return !1;
    if (g) {
      B.isTriggeringEvent = !0;
      let L = new ho("pressup", U, $);
      return g(L), B.isTriggeringEvent = !1, L.shouldStopPropagation;
    }
    return !0;
  }, [
    y,
    g
  ]), de = Ps(ke), Ee = ne.useCallback(($) => {
    let U = z.current;
    if (U.isPressed && U.target) {
      U.didFirePressStart && U.pointerType != null && ee(kn(U.target, $), U.pointerType, !1), U.isPressed = !1, U.isOverTarget = !1, U.activePointerId = null, U.pointerType = null, G(), S || mf(U.target);
      for (let B of U.disposables) B();
      U.disposables = [];
    }
  }, [
    S,
    G,
    ee
  ]), be = Ps(Ee);
  ne.useEffect(() => {
    y && z.current.isPressed && be({
      currentTarget: z.current.target,
      shiftKey: !1,
      ctrlKey: !1,
      metaKey: !1,
      altKey: !1
    });
  }, [
    y
  ]);
  let Ie = ne.useCallback(($) => {
    E && Ee($);
  }, [
    E,
    Ee
  ]), Ve = ne.useCallback(($) => {
    y || h == null || h($);
  }, [
    y,
    h
  ]), V = ne.useCallback(($, U) => {
    if (!y && h) {
      let B = new MouseEvent("click", $);
      Df(B, U), h(Ys(B));
    }
  }, [
    y,
    h
  ]), J = ne.useMemo(() => {
    let $ = z.current, U = {
      onKeyDown(L) {
        var A;
        if ($s(L.nativeEvent, L.currentTarget) && Ue(L.currentTarget, ve(L))) {
          xf(ve(L), L.key) && L.preventDefault();
          let b = !0;
          !$.isPressed && !L.repeat && ($.target = L.currentTarget, $.isPressed = !0, $.pointerType = "keyboard", b = re(L, "keyboard"));
          let M = L.currentTarget, _ = (N) => {
            $s(N, M) && !N.repeat && Ue(M, ve(N)) && $.target && de(kn($.target, N), "keyboard");
          };
          Y(We(L.currentTarget), "keyup", Eo(_, B), !0), b && L.stopPropagation(), L.metaKey && Cn() && ((A = $.metaKeyEvents) == null || A.set(L.key, L.nativeEvent));
        } else L.key === "Meta" && ($.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(L) {
        if (!(L && !Ue(L.currentTarget, ve(L))) && L && L.button === 0 && !$.isTriggeringEvent && !Fn.isOpening) {
          let A = !0;
          if (y && L.preventDefault(), !$.ignoreEmulatedMouseEvents && !$.isPressed && ($.pointerType === "virtual" || Vf(L.nativeEvent))) {
            let b = re(L, "virtual"), M = de(L, "virtual"), _ = ge(L, "virtual");
            Ve(L), A = b && M && _;
          } else if ($.isPressed && $.pointerType !== "keyboard") {
            let b = $.pointerType || L.nativeEvent.pointerType || "virtual", M = de(kn(L.currentTarget, L), b), _ = ge(kn(L.currentTarget, L), b, !0);
            A = M && _, $.isOverTarget = !1, Ve(L), be(L);
          }
          $.ignoreEmulatedMouseEvents = !1, A && L.stopPropagation();
        }
      }
    }, B = (L) => {
      var A, b, M;
      if ($.isPressed && $.target && $s(L, $.target)) {
        xf(ve(L), L.key) && L.preventDefault();
        let _ = ve(L), N = Ue($.target, _);
        ge(kn($.target, L), "keyboard", N), N && V(L, $.target), G(), L.key !== "Enter" && ta($.target) && Ue($.target, _) && !L[yf] && (L[yf] = !0, Fn($.target, L, !1)), $.isPressed = !1, (A = $.metaKeyEvents) == null || A.delete(L.key);
      } else if (L.key === "Meta" && ((b = $.metaKeyEvents) != null && b.size)) {
        let _ = $.metaKeyEvents;
        $.metaKeyEvents = void 0;
        for (let N of _.values()) (M = $.target) == null || M.dispatchEvent(new KeyboardEvent("keyup", N));
      }
    };
    if (typeof PointerEvent < "u") {
      U.onPointerDown = (b) => {
        if (b.button !== 0 || !Ue(b.currentTarget, ve(b))) return;
        if (Yh(b.nativeEvent)) {
          $.pointerType = "virtual";
          return;
        }
        $.pointerType = b.pointerType;
        let M = !0;
        if (!$.isPressed) {
          $.isPressed = !0, $.isOverTarget = !0, $.activePointerId = b.pointerId, $.target = b.currentTarget, S || Tm($.target), M = re(b, $.pointerType);
          let _ = ve(b);
          "releasePointerCapture" in _ && ("hasPointerCapture" in _ ? _.hasPointerCapture(b.pointerId) && _.releasePointerCapture(b.pointerId) : _.releasePointerCapture(b.pointerId)), Y(We(b.currentTarget), "pointerup", L, !1), Y(We(b.currentTarget), "pointercancel", A, !1);
        }
        M && b.stopPropagation();
      }, U.onMouseDown = (b) => {
        if (Ue(b.currentTarget, ve(b)) && b.button === 0) {
          if (c) {
            let M = Kh(b.target);
            M && $.disposables.push(M);
          }
          b.stopPropagation();
        }
      }, U.onPointerUp = (b) => {
        !Ue(b.currentTarget, ve(b)) || $.pointerType === "virtual" || b.button === 0 && !$.isPressed && de(b, $.pointerType || b.pointerType);
      }, U.onPointerEnter = (b) => {
        b.pointerId === $.activePointerId && $.target && !$.isOverTarget && $.pointerType != null && ($.isOverTarget = !0, re(kn($.target, b), $.pointerType));
      }, U.onPointerLeave = (b) => {
        b.pointerId === $.activePointerId && $.target && $.isOverTarget && $.pointerType != null && ($.isOverTarget = !1, ge(kn($.target, b), $.pointerType, !1), Ie(b));
      };
      let L = (b) => {
        if (b.pointerId === $.activePointerId && $.isPressed && b.button === 0 && $.target) {
          if (Ue($.target, ve(b)) && $.pointerType != null) {
            let M = !1, _ = setTimeout(() => {
              $.isPressed && $.target instanceof HTMLElement && (M ? be(b) : (ir($.target), $.target.click()));
            }, 80);
            Y(b.currentTarget, "click", () => M = !0, !0), $.disposables.push(() => clearTimeout(_));
          } else be(b);
          $.isOverTarget = !1;
        }
      }, A = (b) => {
        be(b);
      };
      U.onDragStart = (b) => {
        Ue(b.currentTarget, ve(b)) && be(b);
      };
    }
    return U;
  }, [
    Y,
    y,
    c,
    G,
    S,
    Ie,
    re,
    Ve,
    V
  ]);
  return ne.useEffect(() => {
    if (!v) return;
    const $ = We(v.current);
    if (!$ || !$.head || $.getElementById(gf)) return;
    const U = $.createElement("style");
    U.id = gf;
    let B = zm($);
    B && (U.nonce = B), U.textContent = `
@layer {
  [${wf}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), $.head.prepend(U);
  }, [
    v
  ]), ne.useEffect(() => {
    let $ = z.current;
    return () => {
      S || mf($.target ?? void 0);
      for (let U of $.disposables) U();
      $.disposables = [];
    };
  }, [
    S
  ]), {
    isPressed: d || I,
    // oxlint-disable-next-line react/react-compiler
    pressProps: $n(C, J, {
      [wf]: !0
    })
  };
}
function ta(l) {
  return l.tagName === "A" && l.hasAttribute("href");
}
function $s(l, a) {
  const { key: s, code: p } = l, f = a, g = f.getAttribute("role");
  return (s === "Enter" || s === " " || s === "Spacebar" || p === "Space") && !(f instanceof vt(f).HTMLInputElement && !td(f, s) || f instanceof vt(f).HTMLTextAreaElement || f.isContentEditable) && // Links should only trigger with Enter key
  !((g === "link" || !g && ta(f)) && s !== "Enter");
}
function kn(l, a) {
  let s = a.clientX, p = a.clientY;
  return {
    currentTarget: l,
    shiftKey: a.shiftKey,
    ctrlKey: a.ctrlKey,
    metaKey: a.metaKey,
    altKey: a.altKey,
    clientX: s,
    clientY: p,
    key: a.key
  };
}
function Lm(l) {
  return l instanceof HTMLInputElement ? !1 : l instanceof HTMLButtonElement ? l.type !== "submit" && l.type !== "reset" : !ta(l);
}
function xf(l, a) {
  return Cn() && a === "Enter" ? !1 : l instanceof HTMLInputElement ? a === "Enter" && (l.type === "checkbox" || l.type === "radio") ? !1 : !td(l, a) : Lm(l);
}
const Mm = /* @__PURE__ */ new Set([
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
function td(l, a) {
  return l.type === "checkbox" || l.type === "radio" ? a === " " : Mm.has(l.type);
}
function Rm(l, a) {
  let { elementType: s = "button", isDisabled: p, onPress: f, onPressStart: g, onPressEnd: h, onPressUp: y, onPressChange: d, preventFocusOnPress: c, allowFocusWhenDisabled: E, onClick: S, href: v, target: C, rel: I, type: x = "button" } = l, z;
  s === "button" ? z = {
    type: x,
    disabled: p,
    form: l.form,
    formAction: l.formAction,
    formEncType: l.formEncType,
    formMethod: l.formMethod,
    formNoValidate: l.formNoValidate,
    formTarget: l.formTarget,
    name: l.name,
    value: l.value
  } : z = {
    role: "button",
    href: s === "a" && !p ? v : void 0,
    target: s === "a" ? C : void 0,
    type: s === "input" ? x : void 0,
    disabled: s === "input" ? p : void 0,
    "aria-disabled": !p || s === "input" ? void 0 : p,
    rel: s === "a" ? I : void 0
  };
  let { pressProps: Y, isPressed: G } = Am({
    onPressStart: g,
    onPressEnd: h,
    onPressChange: d,
    onPress: f,
    onPressUp: y,
    onClick: S,
    isDisabled: p,
    preventFocusOnPress: c,
    ref: a
  }), { focusableProps: re } = _m(l, a);
  E && (re.tabIndex = p ? -1 : re.tabIndex);
  let ee = $n(re, Y, $m(l, {
    labelable: !0
  }));
  return {
    isPressed: G,
    buttonProps: $n(z, ee, {
      "aria-haspopup": l["aria-haspopup"],
      "aria-expanded": l["aria-expanded"],
      "aria-controls": l["aria-controls"],
      "aria-pressed": l["aria-pressed"],
      "aria-current": l["aria-current"],
      "aria-disabled": l["aria-disabled"]
    })
  };
}
function Im(l) {
  let { isDisabled: a, onBlurWithin: s, onFocusWithin: p, onFocusWithinChange: f } = l, g = ne.useRef({
    isFocusWithin: !1
  }), { addGlobalListener: h, removeAllGlobalListeners: y } = ed(), d = ne.useCallback((S) => {
    Ue(S.currentTarget, ve(S)) && g.current.isFocusWithin && !Ue(S.currentTarget, S.relatedTarget) && (g.current.isFocusWithin = !1, y(), s && s(S), f && f(!1));
  }, [
    s,
    f,
    g,
    y
  ]), c = jf(d), E = ne.useCallback((S) => {
    if (!Ue(S.currentTarget, ve(S))) return;
    let v = ve(S);
    const C = We(v), I = Ut(C);
    if (!g.current.isFocusWithin && I === v) {
      p && p(S), f && f(!0), g.current.isFocusWithin = !0, c(S);
      let x = S.currentTarget;
      h(C, "focus", (z) => {
        let Y = ve(z);
        if (g.current.isFocusWithin && !Ue(x, Y)) {
          let G = new C.defaultView.FocusEvent("blur", {
            relatedTarget: Y
          });
          Df(G, x);
          let re = Ys(G);
          d(re);
        }
      }, {
        capture: !0
      });
    }
  }, [
    p,
    f,
    c,
    h,
    d
  ]);
  return a ? {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: E,
      onBlur: d
    }
  };
}
function Om(l = {}) {
  let { autoFocus: a = !1, isTextInput: s, within: p } = l, f = ne.useRef({
    isFocused: !1,
    isFocusVisible: a || Os()
  }), [g, h] = ne.useState(!1), [y, d] = ne.useState(
    // oxlint-disable-next-line react/react-compiler
    () => f.current.isFocused && f.current.isFocusVisible
  ), c = ne.useCallback(() => d(f.current.isFocused && f.current.isFocusVisible), []), E = ne.useCallback((C) => {
    f.current.isFocused = C, f.current.isFocusVisible = Os(), h(C), c();
  }, [
    c
  ]);
  rm((C) => {
    f.current.isFocusVisible = C, c();
  }, [
    s,
    g
  ], {
    enabled: g,
    isTextInput: s
  });
  let { focusProps: S } = Xf({
    isDisabled: p,
    onFocusChange: E
  }), { focusWithinProps: v } = Im({
    isDisabled: !p,
    onFocusWithinChange: E
  });
  return {
    isFocused: g,
    isFocusVisible: y,
    focusProps: p ? v : S
  };
}
function Dm(l) {
  let { children: a, focusClass: s, focusRingClass: p } = l, { isFocused: f, isFocusVisible: g, focusProps: h } = Om(l), y = me.Children.only(a);
  return /* @__PURE__ */ me.cloneElement(y, $n(y.props, {
    ...h,
    className: ea({
      [s || ""]: f,
      [p || ""]: g
    })
  }));
}
const jm = (l) => Pe.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...l, children: Pe.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 11H20V13H4V11Z" }) });
var _f = (l) => typeof l == "boolean" ? `${l}` : l === 0 ? "0" : l, lt = (l) => !l || typeof l != "object" || Object.keys(l).length === 0, Um = (l, a) => JSON.stringify(l) === JSON.stringify(a);
function nd(l, a) {
  l.forEach(function(s) {
    Array.isArray(s) ? nd(s, a) : a.push(s);
  });
}
function rd(l) {
  let a = [];
  return nd(l, a), a;
}
var ld = (...l) => rd(l).filter(Boolean), od = (l, a) => {
  let s = {}, p = Object.keys(l), f = Object.keys(a);
  for (let g of p) if (f.includes(g)) {
    let h = l[g], y = a[g];
    typeof h == "object" && typeof y == "object" ? s[g] = od(h, y) : Array.isArray(h) || Array.isArray(y) ? s[g] = ld(y, h) : s[g] = y + " " + h;
  } else s[g] = l[g];
  for (let g of f) p.includes(g) || (s[g] = a[g]);
  return s;
}, Sf = (l) => !l || typeof l != "string" ? l : l.replace(/\s+/g, " ").trim();
const na = "-", Vm = (l) => {
  const a = Bm(l), {
    conflictingClassGroups: s,
    conflictingClassGroupModifiers: p
  } = l;
  return {
    getClassGroupId: (h) => {
      const y = h.split(na);
      return y[0] === "" && y.length !== 1 && y.shift(), id(y, a) || Hm(h);
    },
    getConflictingClassGroupIds: (h, y) => {
      const d = s[h] || [];
      return y && p[h] ? [...d, ...p[h]] : d;
    }
  };
}, id = (l, a) => {
  var h;
  if (l.length === 0)
    return a.classGroupId;
  const s = l[0], p = a.nextPart.get(s), f = p ? id(l.slice(1), p) : void 0;
  if (f)
    return f;
  if (a.validators.length === 0)
    return;
  const g = l.join(na);
  return (h = a.validators.find(({
    validator: y
  }) => y(g))) == null ? void 0 : h.classGroupId;
}, kf = /^\[(.+)\]$/, Hm = (l) => {
  if (kf.test(l)) {
    const a = kf.exec(l)[1], s = a == null ? void 0 : a.substring(0, a.indexOf(":"));
    if (s)
      return "arbitrary.." + s;
  }
}, Bm = (l) => {
  const {
    theme: a,
    prefix: s
  } = l, p = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Km(Object.entries(l.classGroups), s).forEach(([g, h]) => {
    Vs(h, p, g, a);
  }), p;
}, Vs = (l, a, s, p) => {
  l.forEach((f) => {
    if (typeof f == "string") {
      const g = f === "" ? a : Ef(a, f);
      g.classGroupId = s;
      return;
    }
    if (typeof f == "function") {
      if (Wm(f)) {
        Vs(f(p), a, s, p);
        return;
      }
      a.validators.push({
        validator: f,
        classGroupId: s
      });
      return;
    }
    Object.entries(f).forEach(([g, h]) => {
      Vs(h, Ef(a, g), s, p);
    });
  });
}, Ef = (l, a) => {
  let s = l;
  return a.split(na).forEach((p) => {
    s.nextPart.has(p) || s.nextPart.set(p, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), s = s.nextPart.get(p);
  }), s;
}, Wm = (l) => l.isThemeGetter, Km = (l, a) => a ? l.map(([s, p]) => {
  const f = p.map((g) => typeof g == "string" ? a + g : typeof g == "object" ? Object.fromEntries(Object.entries(g).map(([h, y]) => [a + h, y])) : g);
  return [s, f];
}) : l, Qm = (l) => {
  if (l < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let a = 0, s = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map();
  const f = (g, h) => {
    s.set(g, h), a++, a > l && (a = 0, p = s, s = /* @__PURE__ */ new Map());
  };
  return {
    get(g) {
      let h = s.get(g);
      if (h !== void 0)
        return h;
      if ((h = p.get(g)) !== void 0)
        return f(g, h), h;
    },
    set(g, h) {
      s.has(g) ? s.set(g, h) : f(g, h);
    }
  };
}, sd = "!", Gm = (l) => {
  const {
    separator: a,
    experimentalParseClassName: s
  } = l, p = a.length === 1, f = a[0], g = a.length, h = (y) => {
    const d = [];
    let c = 0, E = 0, S;
    for (let z = 0; z < y.length; z++) {
      let Y = y[z];
      if (c === 0) {
        if (Y === f && (p || y.slice(z, z + g) === a)) {
          d.push(y.slice(E, z)), E = z + g;
          continue;
        }
        if (Y === "/") {
          S = z;
          continue;
        }
      }
      Y === "[" ? c++ : Y === "]" && c--;
    }
    const v = d.length === 0 ? y : y.substring(E), C = v.startsWith(sd), I = C ? v.substring(1) : v, x = S && S > E ? S - E : void 0;
    return {
      modifiers: d,
      hasImportantModifier: C,
      baseClassName: I,
      maybePostfixModifierPosition: x
    };
  };
  return s ? (y) => s({
    className: y,
    parseClassName: h
  }) : h;
}, Xm = (l) => {
  if (l.length <= 1)
    return l;
  const a = [];
  let s = [];
  return l.forEach((p) => {
    p[0] === "[" ? (a.push(...s.sort(), p), s = []) : s.push(p);
  }), a.push(...s.sort()), a;
}, Ym = (l) => ({
  cache: Qm(l.cacheSize),
  parseClassName: Gm(l),
  ...Vm(l)
}), qm = /\s+/, Zm = (l, a) => {
  const {
    parseClassName: s,
    getClassGroupId: p,
    getConflictingClassGroupIds: f
  } = a, g = [], h = l.trim().split(qm);
  let y = "";
  for (let d = h.length - 1; d >= 0; d -= 1) {
    const c = h[d], {
      modifiers: E,
      hasImportantModifier: S,
      baseClassName: v,
      maybePostfixModifierPosition: C
    } = s(c);
    let I = !!C, x = p(I ? v.substring(0, C) : v);
    if (!x) {
      if (!I) {
        y = c + (y.length > 0 ? " " + y : y);
        continue;
      }
      if (x = p(v), !x) {
        y = c + (y.length > 0 ? " " + y : y);
        continue;
      }
      I = !1;
    }
    const z = Xm(E).join(":"), Y = S ? z + sd : z, G = Y + x;
    if (g.includes(G))
      continue;
    g.push(G);
    const re = f(x, I);
    for (let ee = 0; ee < re.length; ++ee) {
      const ge = re[ee];
      g.push(Y + ge);
    }
    y = c + (y.length > 0 ? " " + y : y);
  }
  return y;
};
function Jm() {
  let l = 0, a, s, p = "";
  for (; l < arguments.length; )
    (a = arguments[l++]) && (s = ad(a)) && (p && (p += " "), p += s);
  return p;
}
const ad = (l) => {
  if (typeof l == "string")
    return l;
  let a, s = "";
  for (let p = 0; p < l.length; p++)
    l[p] && (a = ad(l[p])) && (s && (s += " "), s += a);
  return s;
};
function Hs(l, ...a) {
  let s, p, f, g = h;
  function h(d) {
    const c = a.reduce((E, S) => S(E), l());
    return s = Ym(c), p = s.cache.get, f = s.cache.set, g = y, y(d);
  }
  function y(d) {
    const c = p(d);
    if (c)
      return c;
    const E = Zm(d, s);
    return f(d, E), E;
  }
  return function() {
    return g(Jm.apply(null, arguments));
  };
}
const Se = (l) => {
  const a = (s) => s[l] || [];
  return a.isThemeGetter = !0, a;
}, ud = /^\[(?:([a-z-]+):)?(.+)\]$/i, ev = /^\d+\/\d+$/, tv = /* @__PURE__ */ new Set(["px", "full", "screen"]), nv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, rv = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, lv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ov = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, iv = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Tt = (l) => En(l) || tv.has(l) || ev.test(l), Ot = (l) => ar(l, "length", uv), En = (l) => !!l && !Number.isNaN(Number(l)), go = (l) => ar(l, "number", En), tr = (l) => !!l && Number.isInteger(Number(l)), cd = (l) => l.endsWith("%") && En(l.slice(0, -1)), le = (l) => ud.test(l), Dt = (l) => nv.test(l), sv = /* @__PURE__ */ new Set(["length", "size", "percentage"]), fd = (l) => ar(l, sv, md), dd = (l) => ar(l, "position", md), av = /* @__PURE__ */ new Set(["image", "url"]), pd = (l) => ar(l, av, fv), hd = (l) => ar(l, "", cv), nr = () => !0, ar = (l, a, s) => {
  const p = ud.exec(l);
  return p ? p[1] ? typeof a == "string" ? p[1] === a : a.has(p[1]) : s(p[2]) : !1;
}, uv = (l) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  rv.test(l) && !lv.test(l)
), md = () => !1, cv = (l) => ov.test(l), fv = (l) => iv.test(l), dv = /* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isAny: nr,
  isArbitraryImage: pd,
  isArbitraryLength: Ot,
  isArbitraryNumber: go,
  isArbitraryPosition: dd,
  isArbitraryShadow: hd,
  isArbitrarySize: fd,
  isArbitraryValue: le,
  isInteger: tr,
  isLength: Tt,
  isNumber: En,
  isPercent: cd,
  isTshirtSize: Dt
}, Symbol.toStringTag, {
  value: "Module"
}), Bs = () => {
  const l = Se("colors"), a = Se("spacing"), s = Se("blur"), p = Se("brightness"), f = Se("borderColor"), g = Se("borderRadius"), h = Se("borderSpacing"), y = Se("borderWidth"), d = Se("contrast"), c = Se("grayscale"), E = Se("hueRotate"), S = Se("invert"), v = Se("gap"), C = Se("gradientColorStops"), I = Se("gradientColorStopPositions"), x = Se("inset"), z = Se("margin"), Y = Se("opacity"), G = Se("padding"), re = Se("saturate"), ee = Se("scale"), ge = Se("sepia"), ke = Se("skew"), de = Se("space"), Ee = Se("translate"), be = () => ["auto", "contain", "none"], Ie = () => ["auto", "hidden", "clip", "visible", "scroll"], Ve = () => ["auto", le, a], V = () => [le, a], J = () => ["", Tt, Ot], $ = () => ["auto", En, le], U = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], B = () => ["solid", "dashed", "dotted", "double", "none"], L = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], A = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], b = () => ["", "0", le], M = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], _ = () => [En, le];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [nr],
      spacing: [Tt, Ot],
      blur: ["none", "", Dt, le],
      brightness: _(),
      borderColor: [l],
      borderRadius: ["none", "", "full", Dt, le],
      borderSpacing: V(),
      borderWidth: J(),
      contrast: _(),
      grayscale: b(),
      hueRotate: _(),
      invert: b(),
      gap: V(),
      gradientColorStops: [l],
      gradientColorStopPositions: [cd, Ot],
      inset: Ve(),
      margin: Ve(),
      opacity: _(),
      padding: V(),
      saturate: _(),
      scale: _(),
      sepia: b(),
      skew: _(),
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
        aspect: ["auto", "square", "video", le]
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
        columns: [Dt]
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
        object: [...U(), le]
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
        overscroll: be()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": be()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": be()
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
        z: ["auto", tr, le]
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
        flex: ["1", "auto", "initial", "none", le]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: b()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: b()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", tr, le]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [nr]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", tr, le]
        }, le]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": $()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": $()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [nr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [tr, le]
        }, le]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": $()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": $()
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
        "auto-cols": ["auto", "min", "max", "fr", le]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", le]
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
        justify: ["normal", ...A()]
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
        content: ["normal", ...A(), "baseline"]
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
        "place-content": [...A(), "baseline"]
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
        p: [G]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [G]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [G]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [G]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [G]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [G]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [G]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [G]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [G]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [z]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [z]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [z]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [z]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [z]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [z]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [z]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [z]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [z]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [de]
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
        "space-y": [de]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", le, a]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [le, a, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [le, a, "none", "full", "min", "max", "fit", "prose", {
          screen: [Dt]
        }, Dt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [le, a, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [le, a, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [le, a, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [le, a, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Dt, Ot]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", go]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [nr]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", le]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", En, go]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Tt, le]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", le]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", le]
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
        placeholder: [l]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [Y]
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
        text: [l]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [Y]
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
        decoration: [...B(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Tt, Ot]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Tt, le]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [l]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", le]
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
        content: ["none", le]
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
        "bg-opacity": [Y]
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
        bg: [...U(), dd]
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
        bg: ["auto", "cover", "contain", fd]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, pd]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [l]
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
        from: [C]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [C]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [C]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [g]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [g]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [g]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [g]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [g]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [g]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [g]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [g]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [g]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [g]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [g]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [g]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [g]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [g]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [g]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [y]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [y]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [y]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [y]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [y]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [y]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [y]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [y]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [y]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [Y]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...B(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [y]
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
        "divide-y": [y]
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
        "divide-opacity": [Y]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: B()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [f]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [f]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [f]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [f]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [f]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [f]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [f]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [f]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [f]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [f]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...B()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Tt, le]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Tt, Ot]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [l]
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
        ring: [l]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [Y]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Tt, Ot]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [l]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Dt, hd]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [nr]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Y]
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
        blur: [s]
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
        contrast: [d]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Dt, le]
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
        invert: [S]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [re]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [ge]
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
        "backdrop-blur": [s]
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
        "backdrop-contrast": [d]
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
        "backdrop-invert": [S]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [re]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [ge]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", le]
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
        ease: ["linear", "in", "out", "in-out", le]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", le]
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
        rotate: [tr, le]
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
        "skew-x": [ke]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [ke]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", le]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", l]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", le]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [l]
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
        "will-change": ["auto", "scroll", "contents", "transform", le]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [l, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Tt, Ot, go]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [l, "none"]
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
}, pv = (l, {
  cacheSize: a,
  prefix: s,
  separator: p,
  experimentalParseClassName: f,
  extend: g = {},
  override: h = {}
}) => {
  Yr(l, "cacheSize", a), Yr(l, "prefix", s), Yr(l, "separator", p), Yr(l, "experimentalParseClassName", f);
  for (const y in h)
    hv(l[y], h[y]);
  for (const y in g)
    mv(l[y], g[y]);
  return l;
}, Yr = (l, a, s) => {
  s !== void 0 && (l[a] = s);
}, hv = (l, a) => {
  if (a)
    for (const s in a)
      Yr(l, s, a[s]);
}, mv = (l, a) => {
  if (a)
    for (const s in a) {
      const p = a[s];
      p !== void 0 && (l[s] = (l[s] || []).concat(p));
    }
}, vd = (l, ...a) => typeof l == "function" ? Hs(Bs, l, ...a) : Hs(() => pv(Bs(), l), ...a), vv = /* @__PURE__ */ Hs(Bs);
var yv = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, yd = (l) => l || void 0, Zr = (...l) => yd(rd(l).filter(Boolean).join(" ")), Ts = null, jt = {}, Ws = !1, Xr = (...l) => (a) => a.twMerge ? ((!Ts || Ws) && (Ws = !1, Ts = lt(jt) ? vv : vd({ ...jt, extend: { theme: jt.theme, classGroups: jt.classGroups, conflictingClassGroupModifiers: jt.conflictingClassGroupModifiers, conflictingClassGroups: jt.conflictingClassGroups, ...jt.extend } })), yd(Ts(Zr(l)))) : Zr(l), Cf = (l, a) => {
  for (let s in a) l.hasOwnProperty(s) ? l[s] = Zr(l[s], a[s]) : l[s] = a[s];
  return l;
}, Jr = (l, a) => {
  let { extend: s = null, slots: p = {}, variants: f = {}, compoundVariants: g = [], compoundSlots: h = [], defaultVariants: y = {} } = l, d = { ...yv, ...a }, c = s != null && s.base ? Zr(s.base, l == null ? void 0 : l.base) : l == null ? void 0 : l.base, E = s != null && s.variants && !lt(s.variants) ? od(f, s.variants) : f, S = s != null && s.defaultVariants && !lt(s.defaultVariants) ? { ...s.defaultVariants, ...y } : y;
  !lt(d.twMergeConfig) && !Um(d.twMergeConfig, jt) && (Ws = !0, jt = d.twMergeConfig);
  let v = lt(s == null ? void 0 : s.slots), C = lt(p) ? {} : { base: Zr(l == null ? void 0 : l.base, v && (s == null ? void 0 : s.base)), ...p }, I = v ? C : Cf({ ...s == null ? void 0 : s.slots }, lt(C) ? { base: l == null ? void 0 : l.base } : C), x = lt(s == null ? void 0 : s.compoundVariants) ? g : ld(s == null ? void 0 : s.compoundVariants, g), z = (G) => {
    if (lt(E) && lt(p) && v) return Xr(c, G == null ? void 0 : G.class, G == null ? void 0 : G.className)(d);
    if (x && !Array.isArray(x)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof x}`);
    if (h && !Array.isArray(h)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof h}`);
    let re = (V, J, $ = [], U) => {
      let B = $;
      if (typeof J == "string") B = B.concat(Sf(J).split(" ").map((L) => `${V}:${L}`));
      else if (Array.isArray(J)) B = B.concat(J.reduce((L, A) => L.concat(`${V}:${A}`), []));
      else if (typeof J == "object" && typeof U == "string") {
        for (let L in J) if (J.hasOwnProperty(L) && L === U) {
          let A = J[L];
          if (A && typeof A == "string") {
            let b = Sf(A);
            B[U] ? B[U] = B[U].concat(b.split(" ").map((M) => `${V}:${M}`)) : B[U] = b.split(" ").map((M) => `${V}:${M}`);
          } else Array.isArray(A) && A.length > 0 && (B[U] = A.reduce((b, M) => b.concat(`${V}:${M}`), []));
        }
      }
      return B;
    }, ee = (V, J = E, $ = null, U = null) => {
      var B;
      let L = J[V];
      if (!L || lt(L)) return null;
      let A = (B = U == null ? void 0 : U[V]) != null ? B : G == null ? void 0 : G[V];
      if (A === null) return null;
      let b = _f(A), M = Array.isArray(d.responsiveVariants) && d.responsiveVariants.length > 0 || d.responsiveVariants === !0, _ = S == null ? void 0 : S[V], N = [];
      if (typeof b == "object" && M) for (let [ae, ue] of Object.entries(b)) {
        let ye = L[ue];
        if (ae === "initial") {
          _ = ue;
          continue;
        }
        Array.isArray(d.responsiveVariants) && !d.responsiveVariants.includes(ae) || (N = re(ae, ye, N, $));
      }
      let oe = b != null && typeof b != "object" ? b : _f(_), ie = L[oe || "false"];
      return typeof N == "object" && typeof $ == "string" && N[$] ? Cf(N, ie) : N.length > 0 ? (N.push(ie), N) : ie;
    }, ge = () => E ? Object.keys(E).map((V) => ee(V, E)) : null, ke = (V, J) => {
      if (!E || typeof E != "object") return null;
      let $ = new Array();
      for (let U in E) {
        let B = ee(U, E, V, J), L = V === "base" && typeof B == "string" ? B : B && B[V];
        L && ($[$.length] = L);
      }
      return $;
    }, de = {};
    for (let V in G) G[V] !== void 0 && (de[V] = G[V]);
    let Ee = (V, J) => {
      var $;
      let U = typeof (G == null ? void 0 : G[V]) == "object" ? { [V]: ($ = G[V]) == null ? void 0 : $.initial } : {};
      return { ...S, ...de, ...U, ...J };
    }, be = (V = [], J) => {
      let $ = [];
      for (let { class: U, className: B, ...L } of V) {
        let A = !0;
        for (let [b, M] of Object.entries(L)) {
          let _ = Ee(b, J);
          if (Array.isArray(M)) {
            if (!M.includes(_[b])) {
              A = !1;
              break;
            }
          } else if (_[b] !== M) {
            A = !1;
            break;
          }
        }
        A && (U && $.push(U), B && $.push(B));
      }
      return $;
    }, Ie = (V) => {
      let J = be(x, V);
      if (!Array.isArray(J)) return J;
      let $ = {};
      for (let U of J) if (typeof U == "string" && ($.base = Xr($.base, U)(d)), typeof U == "object") for (let [B, L] of Object.entries(U)) $[B] = Xr($[B], L)(d);
      return $;
    }, Ve = (V) => {
      if (h.length < 1) return null;
      let J = {};
      for (let { slots: $ = [], class: U, className: B, ...L } of h) {
        if (!lt(L)) {
          let A = !0;
          for (let b of Object.keys(L)) {
            let M = Ee(b, V)[b];
            if (M === void 0 || (Array.isArray(L[b]) ? !L[b].includes(M) : L[b] !== M)) {
              A = !1;
              break;
            }
          }
          if (!A) continue;
        }
        for (let A of $) J[A] = J[A] || [], J[A].push([U, B]);
      }
      return J;
    };
    if (!lt(p) || !v) {
      let V = {};
      if (typeof I == "object" && !lt(I)) for (let J of Object.keys(I)) V[J] = ($) => {
        var U, B;
        return Xr(I[J], ke(J, $), ((U = Ie($)) != null ? U : [])[J], ((B = Ve($)) != null ? B : [])[J], $ == null ? void 0 : $.class, $ == null ? void 0 : $.className)(d);
      };
      return V;
    }
    return Xr(c, ge(), be(x), G == null ? void 0 : G.class, G == null ? void 0 : G.className)(d);
  }, Y = () => {
    if (!(!E || typeof E != "object")) return Object.keys(E);
  };
  return z.variantKeys = Y(), z.extend = s, z.base = c, z.slots = I, z.variants = E, z.defaultVariants = S, z.compoundSlots = h, z.compoundVariants = x, z;
};
const gd = {
  large: "w-8 h-8",
  medium: "w-6 h-6",
  small: "w-5 h-5",
  undefined: "",
  "x-small": "w-4 h-4",
  "xx-small": "w-3.5 h-3.5"
}, wd = Jr({
  base: "inline-flex items-center justify-center p-0 m-0",
  variants: {
    size: gd
  }
}), xd = Jr({
  variants: {
    size: gd
  }
}), _d = Jr({
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
Jr({
  base: "outline outline-offset-0 outline-interactive-highlight outline-2"
});
const gv = ({ children: l, containerClassName: a, emphasis: s, shape: p, size: f }) => {
  const g = typeof f == "number", h = g ? {
    height: f,
    padding: f / 2,
    width: f
  } : void 0, y = g ? void 0 : f;
  return Pe.jsx("div", { className: _d({
    class: a,
    emphasis: s,
    shape: p,
    size: y
  }), "data-testid": "@paloma-icons-contained-id", style: h, children: l });
}, wv = ({ "aria-label": l, className: a, color: s, contained: p, containerClassName: f, emphasis: g = "regular", shape: h = "circle", size: y = "medium", svgClassName: d, ...c }) => {
  const E = !l, S = typeof y == "number", v = S ? { height: y, width: y } : void 0, C = S ? void 0 : y, I = p ? gv : ne.Fragment, x = p ? { containerClassName: f, emphasis: g, shape: h, size: y } : {};
  return Pe.jsx(I, { ...x, children: Pe.jsx("span", { ...c, className: wd({ class: a, size: C }), "data-namespace": "@paloma/icons", "data-size": y, id: "minus-id", style: { color: s, ...v }, children: Pe.jsx(jm, { "aria-hidden": E, "aria-label": l, className: xd({ class: d, size: C }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "minus-svg-id", style: { fill: xv, ...v } }) }) });
}, xv = "currentColor", _v = (l) => Pe.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...l, children: Pe.jsx("path", { d: "M11 13V20H13V13H20V11H13V4H11V11H4V13H11Z" }) }), Sv = ({ children: l, containerClassName: a, emphasis: s, shape: p, size: f }) => {
  const g = typeof f == "number", h = g ? {
    height: f,
    padding: f / 2,
    width: f
  } : void 0, y = g ? void 0 : f;
  return Pe.jsx("div", { className: _d({
    class: a,
    emphasis: s,
    shape: p,
    size: y
  }), "data-testid": "@paloma-icons-contained-id", style: h, children: l });
}, kv = ({ "aria-label": l, className: a, color: s, contained: p, containerClassName: f, emphasis: g = "regular", shape: h = "circle", size: y = "medium", svgClassName: d, ...c }) => {
  const E = !l, S = typeof y == "number", v = S ? { height: y, width: y } : void 0, C = S ? void 0 : y, I = p ? Sv : ne.Fragment, x = p ? { containerClassName: f, emphasis: g, shape: h, size: y } : {};
  return Pe.jsx(I, { ...x, children: Pe.jsx("span", { ...c, className: wd({ class: a, size: C }), "data-namespace": "@paloma/icons", "data-size": y, id: "plus-id", style: { color: s, ...v }, children: Pe.jsx(_v, { "aria-hidden": E, "aria-label": l, className: xd({ class: d, size: C }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "plus-svg-id", style: { fill: Ev, ...v } }) }) });
}, Ev = "currentColor";
var mo = {}, wo = { exports: {} }, Cv = wo.exports, Ff;
function Fv() {
  return Ff || (Ff = 1, (function(l) {
    (function(a) {
      s(Math.pow(36, 5)), s(Math.pow(16, 7)), s(Math.pow(10, 9)), s(Math.pow(2, 30)), s(36), s(16), s(10), s(2);
      function s(h, y) {
        if (!(this instanceof s))
          return new s(h, y);
        if (this._low = 0, this._high = 0, this.remainder = null, typeof y > "u")
          return f.call(this, h);
        if (typeof h == "string")
          return g.call(this, h, y);
        p.call(this, h, y);
      }
      function p(h, y) {
        return this._low = h | 0, this._high = y | 0, this;
      }
      s.prototype.fromBits = p;
      function f(h) {
        return this._low = h & 65535, this._high = h >>> 16, this;
      }
      s.prototype.fromNumber = f;
      function g(h, y) {
        var d = parseInt(h, y || 10);
        return this._low = d & 65535, this._high = d >>> 16, this;
      }
      s.prototype.fromString = g, s.prototype.toNumber = function() {
        return this._high * 65536 + this._low;
      }, s.prototype.toString = function(h) {
        return this.toNumber().toString(h || 10);
      }, s.prototype.add = function(h) {
        var y = this._low + h._low, d = y >>> 16;
        return d += this._high + h._high, this._low = y & 65535, this._high = d & 65535, this;
      }, s.prototype.subtract = function(h) {
        return this.add(h.clone().negate());
      }, s.prototype.multiply = function(h) {
        var y = this._high, d = this._low, c = h._high, E = h._low, S, v;
        return v = d * E, S = v >>> 16, S += y * E, S &= 65535, S += d * c, this._low = v & 65535, this._high = S & 65535, this;
      }, s.prototype.div = function(h) {
        if (h._low == 0 && h._high == 0) throw Error("division by zero");
        if (h._high == 0 && h._low == 1)
          return this.remainder = new s(0), this;
        if (h.gt(this))
          return this.remainder = this.clone(), this._low = 0, this._high = 0, this;
        if (this.eq(h))
          return this.remainder = new s(0), this._low = 1, this._high = 0, this;
        for (var y = h.clone(), d = -1; !this.lt(y); )
          y.shiftLeft(1, !0), d++;
        for (this.remainder = this.clone(), this._low = 0, this._high = 0; d >= 0; d--)
          y.shiftRight(1), this.remainder.lt(y) || (this.remainder.subtract(y), d >= 16 ? this._high |= 1 << d - 16 : this._low |= 1 << d);
        return this;
      }, s.prototype.negate = function() {
        var h = (~this._low & 65535) + 1;
        return this._low = h & 65535, this._high = ~this._high + (h >>> 16) & 65535, this;
      }, s.prototype.equals = s.prototype.eq = function(h) {
        return this._low == h._low && this._high == h._high;
      }, s.prototype.greaterThan = s.prototype.gt = function(h) {
        return this._high > h._high ? !0 : this._high < h._high ? !1 : this._low > h._low;
      }, s.prototype.lessThan = s.prototype.lt = function(h) {
        return this._high < h._high ? !0 : this._high > h._high ? !1 : this._low < h._low;
      }, s.prototype.or = function(h) {
        return this._low |= h._low, this._high |= h._high, this;
      }, s.prototype.and = function(h) {
        return this._low &= h._low, this._high &= h._high, this;
      }, s.prototype.not = function() {
        return this._low = ~this._low & 65535, this._high = ~this._high & 65535, this;
      }, s.prototype.xor = function(h) {
        return this._low ^= h._low, this._high ^= h._high, this;
      }, s.prototype.shiftRight = s.prototype.shiftr = function(h) {
        return h > 16 ? (this._low = this._high >> h - 16, this._high = 0) : h == 16 ? (this._low = this._high, this._high = 0) : (this._low = this._low >> h | this._high << 16 - h & 65535, this._high >>= h), this;
      }, s.prototype.shiftLeft = s.prototype.shiftl = function(h, y) {
        return h > 16 ? (this._high = this._low << h - 16, this._low = 0, y || (this._high &= 65535)) : h == 16 ? (this._high = this._low, this._low = 0) : (this._high = this._high << h | this._low >> 16 - h, this._low = this._low << h & 65535, y || (this._high &= 65535)), this;
      }, s.prototype.rotateLeft = s.prototype.rotl = function(h) {
        var y = this._high << 16 | this._low;
        return y = y << h | y >>> 32 - h, this._low = y & 65535, this._high = y >>> 16, this;
      }, s.prototype.rotateRight = s.prototype.rotr = function(h) {
        var y = this._high << 16 | this._low;
        return y = y >>> h | y << 32 - h, this._low = y & 65535, this._high = y >>> 16, this;
      }, s.prototype.clone = function() {
        return new s(this._low, this._high);
      }, l.exports ? l.exports = s : a.UINT32 = s;
    })(Cv);
  })(wo)), wo.exports;
}
var xo = { exports: {} }, Pv = xo.exports, Pf;
function $v() {
  return Pf || (Pf = 1, (function(l) {
    (function(a) {
      var s = {
        16: f(Math.pow(16, 5)),
        10: f(Math.pow(10, 5)),
        2: f(Math.pow(2, 5))
      }, p = {
        16: f(16),
        10: f(10),
        2: f(2)
      };
      function f(d, c, E, S) {
        if (!(this instanceof f))
          return new f(d, c, E, S);
        if (this.remainder = null, typeof d == "string")
          return y.call(this, d, c);
        if (typeof c > "u")
          return h.call(this, d);
        g.apply(this, arguments);
      }
      function g(d, c, E, S) {
        return typeof E > "u" ? (this._a00 = d & 65535, this._a16 = d >>> 16, this._a32 = c & 65535, this._a48 = c >>> 16, this) : (this._a00 = d | 0, this._a16 = c | 0, this._a32 = E | 0, this._a48 = S | 0, this);
      }
      f.prototype.fromBits = g;
      function h(d) {
        return this._a00 = d & 65535, this._a16 = d >>> 16, this._a32 = 0, this._a48 = 0, this;
      }
      f.prototype.fromNumber = h;
      function y(d, c) {
        c = c || 10, this._a00 = 0, this._a16 = 0, this._a32 = 0, this._a48 = 0;
        for (var E = s[c] || new f(Math.pow(c, 5)), S = 0, v = d.length; S < v; S += 5) {
          var C = Math.min(5, v - S), I = parseInt(d.slice(S, S + C), c);
          this.multiply(
            C < 5 ? new f(Math.pow(c, C)) : E
          ).add(new f(I));
        }
        return this;
      }
      f.prototype.fromString = y, f.prototype.toNumber = function() {
        return this._a16 * 65536 + this._a00;
      }, f.prototype.toString = function(d) {
        d = d || 10;
        var c = p[d] || new f(d);
        if (!this.gt(c)) return this.toNumber().toString(d);
        for (var E = this.clone(), S = new Array(64), v = 63; v >= 0 && (E.div(c), S[v] = E.remainder.toNumber().toString(d), !!E.gt(c)); v--)
          ;
        return S[v - 1] = E.toNumber().toString(d), S.join("");
      }, f.prototype.add = function(d) {
        var c = this._a00 + d._a00, E = c >>> 16;
        E += this._a16 + d._a16;
        var S = E >>> 16;
        S += this._a32 + d._a32;
        var v = S >>> 16;
        return v += this._a48 + d._a48, this._a00 = c & 65535, this._a16 = E & 65535, this._a32 = S & 65535, this._a48 = v & 65535, this;
      }, f.prototype.subtract = function(d) {
        return this.add(d.clone().negate());
      }, f.prototype.multiply = function(d) {
        var c = this._a00, E = this._a16, S = this._a32, v = this._a48, C = d._a00, I = d._a16, x = d._a32, z = d._a48, Y = c * C, G = Y >>> 16;
        G += c * I;
        var re = G >>> 16;
        G &= 65535, G += E * C, re += G >>> 16, re += c * x;
        var ee = re >>> 16;
        return re &= 65535, re += E * I, ee += re >>> 16, re &= 65535, re += S * C, ee += re >>> 16, ee += c * z, ee &= 65535, ee += E * x, ee &= 65535, ee += S * I, ee &= 65535, ee += v * C, this._a00 = Y & 65535, this._a16 = G & 65535, this._a32 = re & 65535, this._a48 = ee & 65535, this;
      }, f.prototype.div = function(d) {
        if (d._a16 == 0 && d._a32 == 0 && d._a48 == 0) {
          if (d._a00 == 0) throw Error("division by zero");
          if (d._a00 == 1)
            return this.remainder = new f(0), this;
        }
        if (d.gt(this))
          return this.remainder = this.clone(), this._a00 = 0, this._a16 = 0, this._a32 = 0, this._a48 = 0, this;
        if (this.eq(d))
          return this.remainder = new f(0), this._a00 = 1, this._a16 = 0, this._a32 = 0, this._a48 = 0, this;
        for (var c = d.clone(), E = -1; !this.lt(c); )
          c.shiftLeft(1, !0), E++;
        for (this.remainder = this.clone(), this._a00 = 0, this._a16 = 0, this._a32 = 0, this._a48 = 0; E >= 0; E--)
          c.shiftRight(1), this.remainder.lt(c) || (this.remainder.subtract(c), E >= 48 ? this._a48 |= 1 << E - 48 : E >= 32 ? this._a32 |= 1 << E - 32 : E >= 16 ? this._a16 |= 1 << E - 16 : this._a00 |= 1 << E);
        return this;
      }, f.prototype.negate = function() {
        var d = (~this._a00 & 65535) + 1;
        return this._a00 = d & 65535, d = (~this._a16 & 65535) + (d >>> 16), this._a16 = d & 65535, d = (~this._a32 & 65535) + (d >>> 16), this._a32 = d & 65535, this._a48 = ~this._a48 + (d >>> 16) & 65535, this;
      }, f.prototype.equals = f.prototype.eq = function(d) {
        return this._a48 == d._a48 && this._a00 == d._a00 && this._a32 == d._a32 && this._a16 == d._a16;
      }, f.prototype.greaterThan = f.prototype.gt = function(d) {
        return this._a48 > d._a48 ? !0 : this._a48 < d._a48 ? !1 : this._a32 > d._a32 ? !0 : this._a32 < d._a32 ? !1 : this._a16 > d._a16 ? !0 : this._a16 < d._a16 ? !1 : this._a00 > d._a00;
      }, f.prototype.lessThan = f.prototype.lt = function(d) {
        return this._a48 < d._a48 ? !0 : this._a48 > d._a48 ? !1 : this._a32 < d._a32 ? !0 : this._a32 > d._a32 ? !1 : this._a16 < d._a16 ? !0 : this._a16 > d._a16 ? !1 : this._a00 < d._a00;
      }, f.prototype.or = function(d) {
        return this._a00 |= d._a00, this._a16 |= d._a16, this._a32 |= d._a32, this._a48 |= d._a48, this;
      }, f.prototype.and = function(d) {
        return this._a00 &= d._a00, this._a16 &= d._a16, this._a32 &= d._a32, this._a48 &= d._a48, this;
      }, f.prototype.xor = function(d) {
        return this._a00 ^= d._a00, this._a16 ^= d._a16, this._a32 ^= d._a32, this._a48 ^= d._a48, this;
      }, f.prototype.not = function() {
        return this._a00 = ~this._a00 & 65535, this._a16 = ~this._a16 & 65535, this._a32 = ~this._a32 & 65535, this._a48 = ~this._a48 & 65535, this;
      }, f.prototype.shiftRight = f.prototype.shiftr = function(d) {
        return d %= 64, d >= 48 ? (this._a00 = this._a48 >> d - 48, this._a16 = 0, this._a32 = 0, this._a48 = 0) : d >= 32 ? (d -= 32, this._a00 = (this._a32 >> d | this._a48 << 16 - d) & 65535, this._a16 = this._a48 >> d & 65535, this._a32 = 0, this._a48 = 0) : d >= 16 ? (d -= 16, this._a00 = (this._a16 >> d | this._a32 << 16 - d) & 65535, this._a16 = (this._a32 >> d | this._a48 << 16 - d) & 65535, this._a32 = this._a48 >> d & 65535, this._a48 = 0) : (this._a00 = (this._a00 >> d | this._a16 << 16 - d) & 65535, this._a16 = (this._a16 >> d | this._a32 << 16 - d) & 65535, this._a32 = (this._a32 >> d | this._a48 << 16 - d) & 65535, this._a48 = this._a48 >> d & 65535), this;
      }, f.prototype.shiftLeft = f.prototype.shiftl = function(d, c) {
        return d %= 64, d >= 48 ? (this._a48 = this._a00 << d - 48, this._a32 = 0, this._a16 = 0, this._a00 = 0) : d >= 32 ? (d -= 32, this._a48 = this._a16 << d | this._a00 >> 16 - d, this._a32 = this._a00 << d & 65535, this._a16 = 0, this._a00 = 0) : d >= 16 ? (d -= 16, this._a48 = this._a32 << d | this._a16 >> 16 - d, this._a32 = (this._a16 << d | this._a00 >> 16 - d) & 65535, this._a16 = this._a00 << d & 65535, this._a00 = 0) : (this._a48 = this._a48 << d | this._a32 >> 16 - d, this._a32 = (this._a32 << d | this._a16 >> 16 - d) & 65535, this._a16 = (this._a16 << d | this._a00 >> 16 - d) & 65535, this._a00 = this._a00 << d & 65535), c || (this._a48 &= 65535), this;
      }, f.prototype.rotateLeft = f.prototype.rotl = function(d) {
        if (d %= 64, d == 0) return this;
        if (d >= 32) {
          var c = this._a00;
          if (this._a00 = this._a32, this._a32 = c, c = this._a48, this._a48 = this._a16, this._a16 = c, d == 32) return this;
          d -= 32;
        }
        var E = this._a48 << 16 | this._a32, S = this._a16 << 16 | this._a00, v = E << d | S >>> 32 - d, C = S << d | E >>> 32 - d;
        return this._a00 = C & 65535, this._a16 = C >>> 16, this._a32 = v & 65535, this._a48 = v >>> 16, this;
      }, f.prototype.rotateRight = f.prototype.rotr = function(d) {
        if (d %= 64, d == 0) return this;
        if (d >= 32) {
          var c = this._a00;
          if (this._a00 = this._a32, this._a32 = c, c = this._a48, this._a48 = this._a16, this._a16 = c, d == 32) return this;
          d -= 32;
        }
        var E = this._a48 << 16 | this._a32, S = this._a16 << 16 | this._a00, v = E >>> d | S << 32 - d, C = S >>> d | E << 32 - d;
        return this._a00 = C & 65535, this._a16 = C >>> 16, this._a32 = v & 65535, this._a48 = v >>> 16, this;
      }, f.prototype.clone = function() {
        return new f(this._a00, this._a16, this._a32, this._a48);
      }, l.exports ? l.exports = f : a.UINT64 = f;
    })(Pv);
  })(xo)), xo.exports;
}
var $f;
function Sd() {
  return $f || ($f = 1, mo.UINT32 = Fv(), mo.UINT64 = $v()), mo;
}
var bs, Tf;
function Tv() {
  if (Tf) return bs;
  Tf = 1;
  var l = Sd().UINT32;
  l.prototype.xxh_update = function(c, E) {
    var S = s._low, v = s._high, C, I;
    I = c * S, C = I >>> 16, C += E * S, C &= 65535, C += c * v;
    var x = this._low + (I & 65535), z = x >>> 16;
    z += this._high + (C & 65535);
    var Y = z << 16 | x & 65535;
    Y = Y << 13 | Y >>> 19, x = Y & 65535, z = Y >>> 16, S = a._low, v = a._high, I = x * S, C = I >>> 16, C += z * S, C &= 65535, C += x * v, this._low = I & 65535, this._high = C & 65535;
  };
  var a = l("2654435761"), s = l("2246822519"), p = l("3266489917"), f = l("668265263"), g = l("374761393");
  function h(c) {
    for (var E = [], S = 0, v = c.length; S < v; S++) {
      var C = c.charCodeAt(S);
      C < 128 ? E.push(C) : C < 2048 ? E.push(
        192 | C >> 6,
        128 | C & 63
      ) : C < 55296 || C >= 57344 ? E.push(
        224 | C >> 12,
        128 | C >> 6 & 63,
        128 | C & 63
      ) : (S++, C = 65536 + ((C & 1023) << 10 | c.charCodeAt(S) & 1023), E.push(
        240 | C >> 18,
        128 | C >> 12 & 63,
        128 | C >> 6 & 63,
        128 | C & 63
      ));
    }
    return new Uint8Array(E);
  }
  function y() {
    if (arguments.length == 2)
      return new y(arguments[1]).update(arguments[0]).digest();
    if (!(this instanceof y))
      return new y(arguments[0]);
    d.call(this, arguments[0]);
  }
  function d(c) {
    return this.seed = c instanceof l ? c.clone() : l(c), this.v1 = this.seed.clone().add(a).add(s), this.v2 = this.seed.clone().add(s), this.v3 = this.seed.clone(), this.v4 = this.seed.clone().subtract(a), this.total_len = 0, this.memsize = 0, this.memory = null, this;
  }
  return y.prototype.init = d, y.prototype.update = function(c) {
    var E = typeof c == "string", S;
    E && (c = h(c), E = !1, S = !0), typeof ArrayBuffer < "u" && c instanceof ArrayBuffer && (S = !0, c = new Uint8Array(c));
    var v = 0, C = c.length, I = v + C;
    if (C == 0) return this;
    if (this.total_len += C, this.memsize == 0 && (E ? this.memory = "" : S ? this.memory = new Uint8Array(16) : this.memory = new Buffer(16)), this.memsize + C < 16)
      return E ? this.memory += c : S ? this.memory.set(c.subarray(0, C), this.memsize) : c.copy(this.memory, this.memsize, 0, C), this.memsize += C, this;
    if (this.memsize > 0) {
      E ? this.memory += c.slice(0, 16 - this.memsize) : S ? this.memory.set(c.subarray(0, 16 - this.memsize), this.memsize) : c.copy(this.memory, this.memsize, 0, 16 - this.memsize);
      var x = 0;
      E ? (this.v1.xxh_update(
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
      )), v += 16 - this.memsize, this.memsize = 0, E && (this.memory = "");
    }
    if (v <= I - 16) {
      var z = I - 16;
      do
        E ? (this.v1.xxh_update(
          c.charCodeAt(v + 1) << 8 | c.charCodeAt(v),
          c.charCodeAt(v + 3) << 8 | c.charCodeAt(v + 2)
        ), v += 4, this.v2.xxh_update(
          c.charCodeAt(v + 1) << 8 | c.charCodeAt(v),
          c.charCodeAt(v + 3) << 8 | c.charCodeAt(v + 2)
        ), v += 4, this.v3.xxh_update(
          c.charCodeAt(v + 1) << 8 | c.charCodeAt(v),
          c.charCodeAt(v + 3) << 8 | c.charCodeAt(v + 2)
        ), v += 4, this.v4.xxh_update(
          c.charCodeAt(v + 1) << 8 | c.charCodeAt(v),
          c.charCodeAt(v + 3) << 8 | c.charCodeAt(v + 2)
        )) : (this.v1.xxh_update(
          c[v + 1] << 8 | c[v],
          c[v + 3] << 8 | c[v + 2]
        ), v += 4, this.v2.xxh_update(
          c[v + 1] << 8 | c[v],
          c[v + 3] << 8 | c[v + 2]
        ), v += 4, this.v3.xxh_update(
          c[v + 1] << 8 | c[v],
          c[v + 3] << 8 | c[v + 2]
        ), v += 4, this.v4.xxh_update(
          c[v + 1] << 8 | c[v],
          c[v + 3] << 8 | c[v + 2]
        )), v += 4;
      while (v <= z);
    }
    return v < I && (E ? this.memory += c.slice(v) : S ? this.memory.set(c.subarray(v, I), this.memsize) : c.copy(this.memory, this.memsize, v, I), this.memsize = I - v), this;
  }, y.prototype.digest = function() {
    var c = this.memory, E = typeof c == "string", S = 0, v = this.memsize, C, I, x = new l();
    for (this.total_len >= 16 ? C = this.v1.rotl(1).add(this.v2.rotl(7).add(this.v3.rotl(12).add(this.v4.rotl(18)))) : C = this.seed.clone().add(g), C.add(x.fromNumber(this.total_len)); S <= v - 4; )
      E ? x.fromBits(
        c.charCodeAt(S + 1) << 8 | c.charCodeAt(S),
        c.charCodeAt(S + 3) << 8 | c.charCodeAt(S + 2)
      ) : x.fromBits(
        c[S + 1] << 8 | c[S],
        c[S + 3] << 8 | c[S + 2]
      ), C.add(x.multiply(p)).rotl(17).multiply(f), S += 4;
    for (; S < v; )
      x.fromBits(E ? c.charCodeAt(S++) : c[S++], 0), C.add(x.multiply(g)).rotl(11).multiply(a);
    return I = C.clone().shiftRight(15), C.xor(I).multiply(s), I = C.clone().shiftRight(13), C.xor(I).multiply(p), I = C.clone().shiftRight(16), C.xor(I), this.init(this.seed), C;
  }, bs = y, bs;
}
var zs, bf;
function bv() {
  if (bf) return zs;
  bf = 1;
  var l = Sd().UINT64, a = l("11400714785074694791"), s = l("14029467366897019727"), p = l("1609587929392839161"), f = l("9650029242287828579"), g = l("2870177450012600261");
  function h(c) {
    for (var E = [], S = 0, v = c.length; S < v; S++) {
      var C = c.charCodeAt(S);
      C < 128 ? E.push(C) : C < 2048 ? E.push(
        192 | C >> 6,
        128 | C & 63
      ) : C < 55296 || C >= 57344 ? E.push(
        224 | C >> 12,
        128 | C >> 6 & 63,
        128 | C & 63
      ) : (S++, C = 65536 + ((C & 1023) << 10 | c.charCodeAt(S) & 1023), E.push(
        240 | C >> 18,
        128 | C >> 12 & 63,
        128 | C >> 6 & 63,
        128 | C & 63
      ));
    }
    return new Uint8Array(E);
  }
  function y() {
    if (arguments.length == 2)
      return new y(arguments[1]).update(arguments[0]).digest();
    if (!(this instanceof y))
      return new y(arguments[0]);
    d.call(this, arguments[0]);
  }
  function d(c) {
    return this.seed = c instanceof l ? c.clone() : l(c), this.v1 = this.seed.clone().add(a).add(s), this.v2 = this.seed.clone().add(s), this.v3 = this.seed.clone(), this.v4 = this.seed.clone().subtract(a), this.total_len = 0, this.memsize = 0, this.memory = null, this;
  }
  return y.prototype.init = d, y.prototype.update = function(c) {
    var E = typeof c == "string", S;
    E && (c = h(c), E = !1, S = !0), typeof ArrayBuffer < "u" && c instanceof ArrayBuffer && (S = !0, c = new Uint8Array(c));
    var v = 0, C = c.length, I = v + C;
    if (C == 0) return this;
    if (this.total_len += C, this.memsize == 0 && (E ? this.memory = "" : S ? this.memory = new Uint8Array(32) : this.memory = new Buffer(32)), this.memsize + C < 32)
      return E ? this.memory += c : S ? this.memory.set(c.subarray(0, C), this.memsize) : c.copy(this.memory, this.memsize, 0, C), this.memsize += C, this;
    if (this.memsize > 0) {
      E ? this.memory += c.slice(0, 32 - this.memsize) : S ? this.memory.set(c.subarray(0, 32 - this.memsize), this.memsize) : c.copy(this.memory, this.memsize, 0, 32 - this.memsize);
      var x = 0;
      if (E) {
        var z;
        z = l(
          this.memory.charCodeAt(x + 1) << 8 | this.memory.charCodeAt(x),
          this.memory.charCodeAt(x + 3) << 8 | this.memory.charCodeAt(x + 2),
          this.memory.charCodeAt(x + 5) << 8 | this.memory.charCodeAt(x + 4),
          this.memory.charCodeAt(x + 7) << 8 | this.memory.charCodeAt(x + 6)
        ), this.v1.add(z.multiply(s)).rotl(31).multiply(a), x += 8, z = l(
          this.memory.charCodeAt(x + 1) << 8 | this.memory.charCodeAt(x),
          this.memory.charCodeAt(x + 3) << 8 | this.memory.charCodeAt(x + 2),
          this.memory.charCodeAt(x + 5) << 8 | this.memory.charCodeAt(x + 4),
          this.memory.charCodeAt(x + 7) << 8 | this.memory.charCodeAt(x + 6)
        ), this.v2.add(z.multiply(s)).rotl(31).multiply(a), x += 8, z = l(
          this.memory.charCodeAt(x + 1) << 8 | this.memory.charCodeAt(x),
          this.memory.charCodeAt(x + 3) << 8 | this.memory.charCodeAt(x + 2),
          this.memory.charCodeAt(x + 5) << 8 | this.memory.charCodeAt(x + 4),
          this.memory.charCodeAt(x + 7) << 8 | this.memory.charCodeAt(x + 6)
        ), this.v3.add(z.multiply(s)).rotl(31).multiply(a), x += 8, z = l(
          this.memory.charCodeAt(x + 1) << 8 | this.memory.charCodeAt(x),
          this.memory.charCodeAt(x + 3) << 8 | this.memory.charCodeAt(x + 2),
          this.memory.charCodeAt(x + 5) << 8 | this.memory.charCodeAt(x + 4),
          this.memory.charCodeAt(x + 7) << 8 | this.memory.charCodeAt(x + 6)
        ), this.v4.add(z.multiply(s)).rotl(31).multiply(a);
      } else {
        var z;
        z = l(
          this.memory[x + 1] << 8 | this.memory[x],
          this.memory[x + 3] << 8 | this.memory[x + 2],
          this.memory[x + 5] << 8 | this.memory[x + 4],
          this.memory[x + 7] << 8 | this.memory[x + 6]
        ), this.v1.add(z.multiply(s)).rotl(31).multiply(a), x += 8, z = l(
          this.memory[x + 1] << 8 | this.memory[x],
          this.memory[x + 3] << 8 | this.memory[x + 2],
          this.memory[x + 5] << 8 | this.memory[x + 4],
          this.memory[x + 7] << 8 | this.memory[x + 6]
        ), this.v2.add(z.multiply(s)).rotl(31).multiply(a), x += 8, z = l(
          this.memory[x + 1] << 8 | this.memory[x],
          this.memory[x + 3] << 8 | this.memory[x + 2],
          this.memory[x + 5] << 8 | this.memory[x + 4],
          this.memory[x + 7] << 8 | this.memory[x + 6]
        ), this.v3.add(z.multiply(s)).rotl(31).multiply(a), x += 8, z = l(
          this.memory[x + 1] << 8 | this.memory[x],
          this.memory[x + 3] << 8 | this.memory[x + 2],
          this.memory[x + 5] << 8 | this.memory[x + 4],
          this.memory[x + 7] << 8 | this.memory[x + 6]
        ), this.v4.add(z.multiply(s)).rotl(31).multiply(a);
      }
      v += 32 - this.memsize, this.memsize = 0, E && (this.memory = "");
    }
    if (v <= I - 32) {
      var Y = I - 32;
      do {
        if (E) {
          var z;
          z = l(
            c.charCodeAt(v + 1) << 8 | c.charCodeAt(v),
            c.charCodeAt(v + 3) << 8 | c.charCodeAt(v + 2),
            c.charCodeAt(v + 5) << 8 | c.charCodeAt(v + 4),
            c.charCodeAt(v + 7) << 8 | c.charCodeAt(v + 6)
          ), this.v1.add(z.multiply(s)).rotl(31).multiply(a), v += 8, z = l(
            c.charCodeAt(v + 1) << 8 | c.charCodeAt(v),
            c.charCodeAt(v + 3) << 8 | c.charCodeAt(v + 2),
            c.charCodeAt(v + 5) << 8 | c.charCodeAt(v + 4),
            c.charCodeAt(v + 7) << 8 | c.charCodeAt(v + 6)
          ), this.v2.add(z.multiply(s)).rotl(31).multiply(a), v += 8, z = l(
            c.charCodeAt(v + 1) << 8 | c.charCodeAt(v),
            c.charCodeAt(v + 3) << 8 | c.charCodeAt(v + 2),
            c.charCodeAt(v + 5) << 8 | c.charCodeAt(v + 4),
            c.charCodeAt(v + 7) << 8 | c.charCodeAt(v + 6)
          ), this.v3.add(z.multiply(s)).rotl(31).multiply(a), v += 8, z = l(
            c.charCodeAt(v + 1) << 8 | c.charCodeAt(v),
            c.charCodeAt(v + 3) << 8 | c.charCodeAt(v + 2),
            c.charCodeAt(v + 5) << 8 | c.charCodeAt(v + 4),
            c.charCodeAt(v + 7) << 8 | c.charCodeAt(v + 6)
          ), this.v4.add(z.multiply(s)).rotl(31).multiply(a);
        } else {
          var z;
          z = l(
            c[v + 1] << 8 | c[v],
            c[v + 3] << 8 | c[v + 2],
            c[v + 5] << 8 | c[v + 4],
            c[v + 7] << 8 | c[v + 6]
          ), this.v1.add(z.multiply(s)).rotl(31).multiply(a), v += 8, z = l(
            c[v + 1] << 8 | c[v],
            c[v + 3] << 8 | c[v + 2],
            c[v + 5] << 8 | c[v + 4],
            c[v + 7] << 8 | c[v + 6]
          ), this.v2.add(z.multiply(s)).rotl(31).multiply(a), v += 8, z = l(
            c[v + 1] << 8 | c[v],
            c[v + 3] << 8 | c[v + 2],
            c[v + 5] << 8 | c[v + 4],
            c[v + 7] << 8 | c[v + 6]
          ), this.v3.add(z.multiply(s)).rotl(31).multiply(a), v += 8, z = l(
            c[v + 1] << 8 | c[v],
            c[v + 3] << 8 | c[v + 2],
            c[v + 5] << 8 | c[v + 4],
            c[v + 7] << 8 | c[v + 6]
          ), this.v4.add(z.multiply(s)).rotl(31).multiply(a);
        }
        v += 8;
      } while (v <= Y);
    }
    return v < I && (E ? this.memory += c.slice(v) : S ? this.memory.set(c.subarray(v, I), this.memsize) : c.copy(this.memory, this.memsize, v, I), this.memsize = I - v), this;
  }, y.prototype.digest = function() {
    var c = this.memory, E = typeof c == "string", S = 0, v = this.memsize, C, I, x = new l();
    for (this.total_len >= 32 ? (C = this.v1.clone().rotl(1), C.add(this.v2.clone().rotl(7)), C.add(this.v3.clone().rotl(12)), C.add(this.v4.clone().rotl(18)), C.xor(this.v1.multiply(s).rotl(31).multiply(a)), C.multiply(a).add(f), C.xor(this.v2.multiply(s).rotl(31).multiply(a)), C.multiply(a).add(f), C.xor(this.v3.multiply(s).rotl(31).multiply(a)), C.multiply(a).add(f), C.xor(this.v4.multiply(s).rotl(31).multiply(a)), C.multiply(a).add(f)) : C = this.seed.clone().add(g), C.add(x.fromNumber(this.total_len)); S <= v - 8; )
      E ? x.fromBits(
        c.charCodeAt(S + 1) << 8 | c.charCodeAt(S),
        c.charCodeAt(S + 3) << 8 | c.charCodeAt(S + 2),
        c.charCodeAt(S + 5) << 8 | c.charCodeAt(S + 4),
        c.charCodeAt(S + 7) << 8 | c.charCodeAt(S + 6)
      ) : x.fromBits(
        c[S + 1] << 8 | c[S],
        c[S + 3] << 8 | c[S + 2],
        c[S + 5] << 8 | c[S + 4],
        c[S + 7] << 8 | c[S + 6]
      ), x.multiply(s).rotl(31).multiply(a), C.xor(x).rotl(27).multiply(a).add(f), S += 8;
    for (S + 4 <= v && (E ? x.fromBits(
      c.charCodeAt(S + 1) << 8 | c.charCodeAt(S),
      c.charCodeAt(S + 3) << 8 | c.charCodeAt(S + 2),
      0,
      0
    ) : x.fromBits(
      c[S + 1] << 8 | c[S],
      c[S + 3] << 8 | c[S + 2],
      0,
      0
    ), C.xor(x.multiply(a)).rotl(23).multiply(s).add(p), S += 4); S < v; )
      x.fromBits(E ? c.charCodeAt(S++) : c[S++], 0, 0, 0), C.xor(x.multiply(g)).rotl(11).multiply(a);
    return I = C.clone().shiftRight(33), C.xor(I).multiply(s), I = C.clone().shiftRight(29), C.xor(I).multiply(p), I = C.clone().shiftRight(32), C.xor(I), this.init(this.seed), C;
  }, zs = y, zs;
}
var Ns, zf;
function zv() {
  return zf || (zf = 1, Ns = {
    h32: Tv(),
    h64: bv()
  }), Ns;
}
zv();
var Nv = Object.create, Po = Object.defineProperty, Av = Object.getOwnPropertyDescriptor, ra = Object.getOwnPropertyNames, Lv = Object.getPrototypeOf, Mv = Object.prototype.hasOwnProperty, Rv = (l, a) => function() {
  return l && (a = (0, l[ra(l)[0]])(l = 0)), a;
}, Iv = (l, a) => function() {
  return a || (0, l[ra(l)[0]])((a = { exports: {} }).exports, a), a.exports;
}, Ov = (l, a) => {
  for (var s in a)
    Po(l, s, { get: a[s], enumerable: !0 });
}, kd = (l, a, s, p) => {
  if (a && typeof a == "object" || typeof a == "function")
    for (let f of ra(a))
      !Mv.call(l, f) && f !== s && Po(l, f, { get: () => a[f], enumerable: !(p = Av(a, f)) || p.enumerable });
  return l;
}, Dv = (l, a, s) => (s = l != null ? Nv(Lv(l)) : {}, kd(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Po(s, "default", { value: l, enumerable: !0 }),
  l
)), jv = (l) => kd(Po({}, "__esModule", { value: !0 }), l), Ed = {};
Ov(Ed, {
  MODE_VALUES: () => Fd,
  THEME_VALUES: () => Cd
});
var Cd, Fd, Uv = Rv({
  "../@paloma-tokens/dist/assets/paloma-theme-mode-values.ts"() {
    Cd = [
      "ea-blue",
      "ea-sims",
      "fc-green",
      "ea-battlefield6",
      // eslint-disable-line perfectionist/sort-union-types
      "purple",
      "red",
      "ea-madden"
    ], Fd = ["dark", "light"];
  }
}), Vv = Iv({
  "../@paloma-tokens/dist/index.js"(l) {
    Object.defineProperty(l, "__esModule", { value: !0 }), l.THEME_VALUES = l.MODE_VALUES = void 0;
    var a = (Uv(), jv(Ed));
    Object.defineProperty(l, "MODE_VALUES", { enumerable: !0, get: function() {
      return a.MODE_VALUES;
    } }), Object.defineProperty(l, "THEME_VALUES", { enumerable: !0, get: function() {
      return a.THEME_VALUES;
    } });
  }
}), Hv = (l) => {
  console.error(`Assertion failed: ${l}`);
}, Bv = (l, a) => {
  l || Hv(a);
};
function Wv(l) {
  return !1;
}
var Ks = (l) => {
  Wv() && console.warn(l);
}, Kv = "It seems like you're using the cn function with a single string input. The cn function is designed for handling conditional classes. If you're not dealing with conditional classes, consider using the class directly.", Qv = (l) => !l.startsWith("size"), Pd = {
  override: {
    classGroups: {
      "font-size": [{ "text-size": [dv.isAny] }],
      "font-variant": ["font-variant-none"],
      "text-color": [
        {
          text: [Qv]
        }
      ]
    }
  }
}, Gv = vd(Pd), Xv = /\s\s+/g, Yv = (l) => l.replace(Xv, " "), qv = (...l) => {
  if (typeof l[0] == "string" && l.length === 1)
    return Ks(Kv), Ks(`cn("${l[0]}")`), l[0];
  const a = Gv(ea(...l));
  return Yv(a);
}, Tn = (l, a) => Jr(l, { twMergeConfig: Pd, ...a }), $d = Dv(Vv());
$d.MODE_VALUES;
$d.THEME_VALUES;
function Zv({
  controlledValue: l,
  defaultValue: a,
  warnFn: s
}) {
  const [p, f] = ne.useState(a);
  return l !== void 0 && a !== void 0 && (s ? s() : Ks(
    "A controlled value and a default value were both provided. An element must be either controlled or uncontrolled. Decide between using any and remove on of these props"
  )), [
    l ?? p,
    l !== void 0 ? void 0 : f
  ];
}
var Nf = 0;
function Jv(l = "") {
  return Nf += 1, l + Nf;
}
function ey(l, a) {
  const s = ne.useRef(l ?? null);
  return Bv(
    a.length > 0,
    "useUniqueId(): The prefix provided is an empty string. If you want to remove the prefix, do not provide it. If you want to use the default prefix, do not provide a prefix."
  ), s.current === null && (s.current = Jv(
    `${a}-`
  )), l && (s.current = l), s.current;
}
function ty(l, a, s) {
  try {
    const f = me.Children.only(l);
    if (f.type === a)
      return s ? s(f, f == null ? void 0 : f.props) : l;
  } catch {
  }
  return null;
}
function ny(l, a) {
  if (!a)
    return null;
  const s = me.Children.only(a);
  return me.cloneElement(s, { ...l });
}
var ry = Tn({
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
}), ly = "span", As = ne.forwardRef(
  ({
    as: l,
    children: a,
    className: s,
    fontWeight: p = "normal",
    showTitle: f = !1,
    size: g,
    truncate: h = !1,
    underline: y = !1,
    variant: d,
    ...c
  }, E) => {
    const S = l ?? ly, [v, C] = ne.useMemo(() => d === "heading" ? [g ?? "large", d] : [g ?? "medium", "body"], [g, d]);
    return /* @__PURE__ */ me.createElement(
      S,
      {
        className: ry({
          className: s,
          fontWeight: p,
          truncate: h,
          underline: y,
          [C]: v
        }),
        "data-font-weight": p,
        "data-size": v,
        "data-truncate": h,
        "data-underline": y,
        "data-variant": C,
        ref: E,
        title: f ? c.title ?? (h && typeof a == "string" ? a : void 0) : void 0,
        ...c
      },
      a
    );
  }
), Ls = (l, a = {}) => {
  if (typeof l == "string")
    return /* @__PURE__ */ me.createElement(As, { ...a }, l);
  if (ty(l, As)) {
    const s = {
      ...a ?? {},
      ...l.props
    };
    return /* @__PURE__ */ me.createElement(As, { ...s });
  }
  if (me.isValidElement(l) && typeof l.type == "string") {
    const s = {};
    l.type === "a" && (s.color = "#0000EE", s.textDecoration = "underline");
    const p = l.props, f = {
      ...s,
      ...a.style,
      ...p.style
    };
    return me.cloneElement(
      l,
      {
        style: f
      }
    );
  }
  return l;
}, oy = [
  /* Uses a dummy class because FocusRing is a functional component that just adds
      the class to the content.
  
      The cn or other style functions on the FocusRing are always called, so we can't
      listen to them to test functionality */
  "@paloma-focus-ring",
  "outline",
  "outline-2",
  "outline-offset-2",
  "outline-interactive-highlight"
], iy = ({
  children: l,
  disabled: a,
  focusRingClass: s,
  ...p
}) => a ? l : /* @__PURE__ */ me.createElement(Dm, { focusRingClass: qv(oy, s), ...p }, l), sy = "text-content-neutral-subtle", ay = Tn({
  base: "py-4 flex flex-col items-start border-t-0 border-l-0 border-r-0 border-b border-b-neutral-subtle border-solid",
  variants: {
    expanded: {
      true: "pb-8"
    }
  }
}), uy = Tn({
  base: "flex items-center text-content-neutral-bold",
  variants: {
    expanded: {
      true: "text-content-highlight"
    }
  }
}), cy = Tn({
  base: "text-content-neutral-bold",
  variants: {
    expanded: {
      true: "!text-content-highlight"
    }
  }
}), fy = Tn({
  base: "flex items-center text-content-neutral-subtle",
  variants: {
    size: {
      large: "h-8",
      medium: "h-6"
    }
  }
}), dy = Tn({
  base: "w-full grid overflow-hidden transition-all duration-300 ease-in-out motion-reduce:transition-none",
  variants: {
    expanded: {
      false: "grid-rows-[0fr] invisible",
      true: "grid-rows-[1fr] visible"
    }
  }
}), py = Tn({
  variants: {
    variant: {
      contained: "p-8 rounded-md bg-surface-level-01",
      "un-contained": ""
    }
  }
}), hy = ({
  children: l,
  className: a,
  defaultExpanded: s,
  expanded: p,
  headingAs: f,
  id: g,
  label: h,
  leadingIcon: y,
  onToggle: d,
  size: c = "medium",
  subtitle: E,
  title: S,
  titleClassName: v,
  variant: C = "contained",
  ...I
}) => {
  const [x, z] = Zv({
    controlledValue: p,
    defaultValue: s
  }), Y = (Ee) => {
    z == null || z(!x), d == null || d(Ee, !x);
  }, G = ne.useRef(null), { buttonProps: re } = Rm(
    { onPress: Y },
    G
  ), ee = ey(g, "accordion"), ge = `${ee}-content`, ke = f ?? "h3", de = !!x;
  return /* @__PURE__ */ me.createElement(
    "div",
    {
      className: ay({
        class: a,
        expanded: de
      }),
      ...I
    },
    /* @__PURE__ */ me.createElement(
      ke,
      {
        className: "w-full m-0",
        "data-testid": "@paloma-accordion-heading-id"
      },
      /* @__PURE__ */ me.createElement(iy, { focusRingClass: "rounded-md" }, /* @__PURE__ */ me.createElement(
        "button",
        {
          ...re,
          "aria-controls": ge,
          "aria-expanded": de,
          className: "w-full outline-none border-none bg-transparent cursor-pointer px-2 py-2 my-2 flex gap-2 justify-between hover:bg-content-neutral-bold/[0.08] active:bg-content-neutral-bold/[0.12] hover:active:bg-content-neutral-bold/[0.12]",
          id: ee,
          ref: G
        },
        /* @__PURE__ */ me.createElement("div", { className: "flex items-start gap-2 text-left" }, y && /* @__PURE__ */ me.createElement(
          "div",
          {
            "aria-hidden": !0,
            className: uy({ expanded: de }),
            "data-testid": "@paloma-accordion-leading-icon-id"
          },
          ny({ size: c }, y)
        ), /* @__PURE__ */ me.createElement("div", { className: "title flex flex-col gap-1 items-start" }, Ls(S, {
          className: cy({
            class: v,
            expanded: de
          }),
          fontWeight: "bold",
          size: c,
          variant: "body"
        }), Ls(E, {
          className: sy,
          size: c === "large" ? "small" : "x-small",
          variant: "body"
        }))),
        /* @__PURE__ */ me.createElement("div", { className: "flex items-start gap-2" }, Ls(h, {
          className: fy({ size: c }),
          size: c === "large" ? "small" : "x-small",
          variant: "body"
        }), x ? /* @__PURE__ */ me.createElement(
          wv,
          {
            className: "text-content-highlight",
            "data-testid": "@paloma-accordion-button-expanded-id",
            size: c
          }
        ) : /* @__PURE__ */ me.createElement(
          kv,
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
        className: dy({ expanded: de }),
        id: ge
      },
      /* @__PURE__ */ me.createElement("div", { className: "overflow-hidden" }, /* @__PURE__ */ me.createElement("div", { className: py({ variant: C }) }, l))
    )
  );
};
function my(l) {
  const a = [...l];
  for (let s = a.length - 1; s > 0; s--) {
    const p = Math.floor(Math.random() * (s + 1));
    [a[s], a[p]] = [a[p], a[s]];
  }
  return a;
}
function Af({ card: l, isBig: a }) {
  const [s, p] = ne.useState(!0);
  return /* @__PURE__ */ Pe.jsxs(
    hy,
    {
      className: `block-announcements__card${a ? " --big" : ""}`,
      expanded: s,
      title: l.title,
      subtitle: l.subtitle,
      label: l.link ? "Open" : void 0,
      leadingIcon: l.image ? /* @__PURE__ */ Pe.jsx(
        "img",
        {
          className: "block-announcements__accordion-icon",
          src: l.image,
          alt: ""
        }
      ) : void 0,
      onToggle: (f, g) => p(g),
      children: [
        l.image && /* @__PURE__ */ Pe.jsx("div", { className: "block-announcements__media", children: /* @__PURE__ */ Pe.jsx(
          "img",
          {
            className: "block-announcements__image",
            src: l.image,
            alt: l.title,
            loading: "lazy"
          }
        ) }),
        l.link && /* @__PURE__ */ Pe.jsx("a", { className: "block-announcements__link", href: l.link, children: "Open announcement" })
      ]
    }
  );
}
function vy({
  cards: l = [],
  heading: a,
  shuffle: s = !1
}) {
  const p = s ? my(l) : l, f = p.find((h) => h.size === "big") || p[0], g = p.filter((h) => h !== f);
  return p.length ? /* @__PURE__ */ Pe.jsxs("section", { children: [
    a && /* @__PURE__ */ Pe.jsx("h2", { className: "ea-section-heading", children: a }),
    /* @__PURE__ */ Pe.jsxs("div", { className: "block-announcements__grid", children: [
      /* @__PURE__ */ Pe.jsx("div", { className: "block-announcements__hero", children: /* @__PURE__ */ Pe.jsx(Af, { card: f, isBig: !0 }) }),
      g.length > 0 && /* @__PURE__ */ Pe.jsx("div", { className: "block-announcements__small-grid", children: g.map((h) => /* @__PURE__ */ Pe.jsx(Af, { card: h }, h.title)) })
    ] })
  ] }) : null;
}
const Co = /* @__PURE__ */ new WeakMap();
function yy(l, a, s = {}) {
  if (!l || !a)
    return;
  let p = Co.get(l);
  p || (p = zh.createRoot(l), Co.set(l, p)), p.render(me.createElement(a, s));
}
function wy(l) {
  const a = Co.get(l);
  a && (a.unmount(), Co.delete(l));
}
function xy(l, a = {}) {
  yy(l, vy, a);
}
export {
  yy as mount,
  xy as mountAnnouncements,
  wy as unmount
};
