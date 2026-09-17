var Gm = (e) => {
  throw TypeError(e);
};
var Km = (e, n, a) => n.has(e) || Gm("Cannot " + a);
var Ym = (e, n, a) => (Km(e, n, "read from private field"), a ? a.call(e) : n.get(e)), Qm = (e, n, a) => n.has(e) ? Gm("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(e) : n.set(e, a), Jc = (e, n, a, i) => (Km(e, n, "write to private field"), i ? i.call(e, a) : n.set(e, a), a);
function Oh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var eu = { exports: {} }, Ce = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xm;
function gw() {
  if (Xm) return Ce;
  Xm = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), u = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), b = Symbol.iterator;
  function h($) {
    return $ === null || typeof $ != "object" ? null : ($ = b && $[b] || $["@@iterator"], typeof $ == "function" ? $ : null);
  }
  var w = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, k = Object.assign, y = {};
  function _($, D, me) {
    this.props = $, this.context = D, this.refs = y, this.updater = me || w;
  }
  _.prototype.isReactComponent = {}, _.prototype.setState = function($, D) {
    if (typeof $ != "object" && typeof $ != "function" && $ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, $, D, "setState");
  }, _.prototype.forceUpdate = function($) {
    this.updater.enqueueForceUpdate(this, $, "forceUpdate");
  };
  function A() {
  }
  A.prototype = _.prototype;
  function z($, D, me) {
    this.props = $, this.context = D, this.refs = y, this.updater = me || w;
  }
  var U = z.prototype = new A();
  U.constructor = z, k(U, _.prototype), U.isPureReactComponent = !0;
  var W = Array.isArray, Q = Object.prototype.hasOwnProperty, Y = { current: null }, K = { key: !0, ref: !0, __self: !0, __source: !0 };
  function X($, D, me) {
    var fe, ve = {}, ye = null, ze = null;
    if (D != null) for (fe in D.ref !== void 0 && (ze = D.ref), D.key !== void 0 && (ye = "" + D.key), D) Q.call(D, fe) && !K.hasOwnProperty(fe) && (ve[fe] = D[fe]);
    var Te = arguments.length - 2;
    if (Te === 1) ve.children = me;
    else if (1 < Te) {
      for (var Me = Array(Te), st = 0; st < Te; st++) Me[st] = arguments[st + 2];
      ve.children = Me;
    }
    if ($ && $.defaultProps) for (fe in Te = $.defaultProps, Te) ve[fe] === void 0 && (ve[fe] = Te[fe]);
    return { $$typeof: e, type: $, key: ye, ref: ze, props: ve, _owner: Y.current };
  }
  function ee($, D) {
    return { $$typeof: e, type: $.type, key: D, ref: $.ref, props: $.props, _owner: $._owner };
  }
  function ie($) {
    return typeof $ == "object" && $ !== null && $.$$typeof === e;
  }
  function ae($) {
    var D = { "=": "=0", ":": "=2" };
    return "$" + $.replace(/[=:]/g, function(me) {
      return D[me];
    });
  }
  var S = /\/+/g;
  function R($, D) {
    return typeof $ == "object" && $ !== null && $.key != null ? ae("" + $.key) : D.toString(36);
  }
  function C($, D, me, fe, ve) {
    var ye = typeof $;
    (ye === "undefined" || ye === "boolean") && ($ = null);
    var ze = !1;
    if ($ === null) ze = !0;
    else switch (ye) {
      case "string":
      case "number":
        ze = !0;
        break;
      case "object":
        switch ($.$$typeof) {
          case e:
          case n:
            ze = !0;
        }
    }
    if (ze) return ze = $, ve = ve(ze), $ = fe === "" ? "." + R(ze, 0) : fe, W(ve) ? (me = "", $ != null && (me = $.replace(S, "$&/") + "/"), C(ve, D, me, "", function(st) {
      return st;
    })) : ve != null && (ie(ve) && (ve = ee(ve, me + (!ve.key || ze && ze.key === ve.key ? "" : ("" + ve.key).replace(S, "$&/") + "/") + $)), D.push(ve)), 1;
    if (ze = 0, fe = fe === "" ? "." : fe + ":", W($)) for (var Te = 0; Te < $.length; Te++) {
      ye = $[Te];
      var Me = fe + R(ye, Te);
      ze += C(ye, D, me, Me, ve);
    }
    else if (Me = h($), typeof Me == "function") for ($ = Me.call($), Te = 0; !(ye = $.next()).done; ) ye = ye.value, Me = fe + R(ye, Te++), ze += C(ye, D, me, Me, ve);
    else if (ye === "object") throw D = String($), Error("Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys($).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead.");
    return ze;
  }
  function j($, D, me) {
    if ($ == null) return $;
    var fe = [], ve = 0;
    return C($, fe, "", "", function(ye) {
      return D.call(me, ye, ve++);
    }), fe;
  }
  function L($) {
    if ($._status === -1) {
      var D = $._result;
      D = D(), D.then(function(me) {
        ($._status === 0 || $._status === -1) && ($._status = 1, $._result = me);
      }, function(me) {
        ($._status === 0 || $._status === -1) && ($._status = 2, $._result = me);
      }), $._status === -1 && ($._status = 0, $._result = D);
    }
    if ($._status === 1) return $._result.default;
    throw $._result;
  }
  var T = { current: null }, I = { transition: null }, F = { ReactCurrentDispatcher: T, ReactCurrentBatchConfig: I, ReactCurrentOwner: Y };
  function V() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ce.Children = { map: j, forEach: function($, D, me) {
    j($, function() {
      D.apply(this, arguments);
    }, me);
  }, count: function($) {
    var D = 0;
    return j($, function() {
      D++;
    }), D;
  }, toArray: function($) {
    return j($, function(D) {
      return D;
    }) || [];
  }, only: function($) {
    if (!ie($)) throw Error("React.Children.only expected to receive a single React element child.");
    return $;
  } }, Ce.Component = _, Ce.Fragment = a, Ce.Profiler = s, Ce.PureComponent = z, Ce.StrictMode = i, Ce.Suspense = m, Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F, Ce.act = V, Ce.cloneElement = function($, D, me) {
    if ($ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + $ + ".");
    var fe = k({}, $.props), ve = $.key, ye = $.ref, ze = $._owner;
    if (D != null) {
      if (D.ref !== void 0 && (ye = D.ref, ze = Y.current), D.key !== void 0 && (ve = "" + D.key), $.type && $.type.defaultProps) var Te = $.type.defaultProps;
      for (Me in D) Q.call(D, Me) && !K.hasOwnProperty(Me) && (fe[Me] = D[Me] === void 0 && Te !== void 0 ? Te[Me] : D[Me]);
    }
    var Me = arguments.length - 2;
    if (Me === 1) fe.children = me;
    else if (1 < Me) {
      Te = Array(Me);
      for (var st = 0; st < Me; st++) Te[st] = arguments[st + 2];
      fe.children = Te;
    }
    return { $$typeof: e, type: $.type, key: ve, ref: ye, props: fe, _owner: ze };
  }, Ce.createContext = function($) {
    return $ = { $$typeof: u, _currentValue: $, _currentValue2: $, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, $.Provider = { $$typeof: c, _context: $ }, $.Consumer = $;
  }, Ce.createElement = X, Ce.createFactory = function($) {
    var D = X.bind(null, $);
    return D.type = $, D;
  }, Ce.createRef = function() {
    return { current: null };
  }, Ce.forwardRef = function($) {
    return { $$typeof: f, render: $ };
  }, Ce.isValidElement = ie, Ce.lazy = function($) {
    return { $$typeof: v, _payload: { _status: -1, _result: $ }, _init: L };
  }, Ce.memo = function($, D) {
    return { $$typeof: p, type: $, compare: D === void 0 ? null : D };
  }, Ce.startTransition = function($) {
    var D = I.transition;
    I.transition = {};
    try {
      $();
    } finally {
      I.transition = D;
    }
  }, Ce.unstable_act = V, Ce.useCallback = function($, D) {
    return T.current.useCallback($, D);
  }, Ce.useContext = function($) {
    return T.current.useContext($);
  }, Ce.useDebugValue = function() {
  }, Ce.useDeferredValue = function($) {
    return T.current.useDeferredValue($);
  }, Ce.useEffect = function($, D) {
    return T.current.useEffect($, D);
  }, Ce.useId = function() {
    return T.current.useId();
  }, Ce.useImperativeHandle = function($, D, me) {
    return T.current.useImperativeHandle($, D, me);
  }, Ce.useInsertionEffect = function($, D) {
    return T.current.useInsertionEffect($, D);
  }, Ce.useLayoutEffect = function($, D) {
    return T.current.useLayoutEffect($, D);
  }, Ce.useMemo = function($, D) {
    return T.current.useMemo($, D);
  }, Ce.useReducer = function($, D, me) {
    return T.current.useReducer($, D, me);
  }, Ce.useRef = function($) {
    return T.current.useRef($);
  }, Ce.useState = function($) {
    return T.current.useState($);
  }, Ce.useSyncExternalStore = function($, D, me) {
    return T.current.useSyncExternalStore($, D, me);
  }, Ce.useTransition = function() {
    return T.current.useTransition();
  }, Ce.version = "18.3.1", Ce;
}
var Zm;
function gd() {
  return Zm || (Zm = 1, eu.exports = gw()), eu.exports;
}
var O = gd();
const E = /* @__PURE__ */ Oh(O);
var vl = {}, tu = { exports: {} }, xt = {}, ru = { exports: {} }, nu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jm;
function hw() {
  return Jm || (Jm = 1, (function(e) {
    function n(I, F) {
      var V = I.length;
      I.push(F);
      e: for (; 0 < V; ) {
        var $ = V - 1 >>> 1, D = I[$];
        if (0 < s(D, F)) I[$] = F, I[V] = D, V = $;
        else break e;
      }
    }
    function a(I) {
      return I.length === 0 ? null : I[0];
    }
    function i(I) {
      if (I.length === 0) return null;
      var F = I[0], V = I.pop();
      if (V !== F) {
        I[0] = V;
        e: for (var $ = 0, D = I.length, me = D >>> 1; $ < me; ) {
          var fe = 2 * ($ + 1) - 1, ve = I[fe], ye = fe + 1, ze = I[ye];
          if (0 > s(ve, V)) ye < D && 0 > s(ze, ve) ? (I[$] = ze, I[ye] = V, $ = ye) : (I[$] = ve, I[fe] = V, $ = fe);
          else if (ye < D && 0 > s(ze, V)) I[$] = ze, I[ye] = V, $ = ye;
          else break e;
        }
      }
      return F;
    }
    function s(I, F) {
      var V = I.sortIndex - F.sortIndex;
      return V !== 0 ? V : I.id - F.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      e.unstable_now = function() {
        return c.now();
      };
    } else {
      var u = Date, f = u.now();
      e.unstable_now = function() {
        return u.now() - f;
      };
    }
    var m = [], p = [], v = 1, b = null, h = 3, w = !1, k = !1, y = !1, _ = typeof setTimeout == "function" ? setTimeout : null, A = typeof clearTimeout == "function" ? clearTimeout : null, z = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function U(I) {
      for (var F = a(p); F !== null; ) {
        if (F.callback === null) i(p);
        else if (F.startTime <= I) i(p), F.sortIndex = F.expirationTime, n(m, F);
        else break;
        F = a(p);
      }
    }
    function W(I) {
      if (y = !1, U(I), !k) if (a(m) !== null) k = !0, L(Q);
      else {
        var F = a(p);
        F !== null && T(W, F.startTime - I);
      }
    }
    function Q(I, F) {
      k = !1, y && (y = !1, A(X), X = -1), w = !0;
      var V = h;
      try {
        for (U(F), b = a(m); b !== null && (!(b.expirationTime > F) || I && !ae()); ) {
          var $ = b.callback;
          if (typeof $ == "function") {
            b.callback = null, h = b.priorityLevel;
            var D = $(b.expirationTime <= F);
            F = e.unstable_now(), typeof D == "function" ? b.callback = D : b === a(m) && i(m), U(F);
          } else i(m);
          b = a(m);
        }
        if (b !== null) var me = !0;
        else {
          var fe = a(p);
          fe !== null && T(W, fe.startTime - F), me = !1;
        }
        return me;
      } finally {
        b = null, h = V, w = !1;
      }
    }
    var Y = !1, K = null, X = -1, ee = 5, ie = -1;
    function ae() {
      return !(e.unstable_now() - ie < ee);
    }
    function S() {
      if (K !== null) {
        var I = e.unstable_now();
        ie = I;
        var F = !0;
        try {
          F = K(!0, I);
        } finally {
          F ? R() : (Y = !1, K = null);
        }
      } else Y = !1;
    }
    var R;
    if (typeof z == "function") R = function() {
      z(S);
    };
    else if (typeof MessageChannel < "u") {
      var C = new MessageChannel(), j = C.port2;
      C.port1.onmessage = S, R = function() {
        j.postMessage(null);
      };
    } else R = function() {
      _(S, 0);
    };
    function L(I) {
      K = I, Y || (Y = !0, R());
    }
    function T(I, F) {
      X = _(function() {
        I(e.unstable_now());
      }, F);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(I) {
      I.callback = null;
    }, e.unstable_continueExecution = function() {
      k || w || (k = !0, L(Q));
    }, e.unstable_forceFrameRate = function(I) {
      0 > I || 125 < I ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ee = 0 < I ? Math.floor(1e3 / I) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return h;
    }, e.unstable_getFirstCallbackNode = function() {
      return a(m);
    }, e.unstable_next = function(I) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = h;
      }
      var V = h;
      h = F;
      try {
        return I();
      } finally {
        h = V;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(I, F) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var V = h;
      h = I;
      try {
        return F();
      } finally {
        h = V;
      }
    }, e.unstable_scheduleCallback = function(I, F, V) {
      var $ = e.unstable_now();
      switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? $ + V : $) : V = $, I) {
        case 1:
          var D = -1;
          break;
        case 2:
          D = 250;
          break;
        case 5:
          D = 1073741823;
          break;
        case 4:
          D = 1e4;
          break;
        default:
          D = 5e3;
      }
      return D = V + D, I = { id: v++, callback: F, priorityLevel: I, startTime: V, expirationTime: D, sortIndex: -1 }, V > $ ? (I.sortIndex = V, n(p, I), a(m) === null && I === a(p) && (y ? (A(X), X = -1) : y = !0, T(W, V - $))) : (I.sortIndex = D, n(m, I), k || w || (k = !0, L(Q))), I;
    }, e.unstable_shouldYield = ae, e.unstable_wrapCallback = function(I) {
      var F = h;
      return function() {
        var V = h;
        h = F;
        try {
          return I.apply(this, arguments);
        } finally {
          h = V;
        }
      };
    };
  })(nu)), nu;
}
var eg;
function vw() {
  return eg || (eg = 1, ru.exports = hw()), ru.exports;
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
var tg;
function bw() {
  if (tg) return xt;
  tg = 1;
  var e = gd(), n = vw();
  function a(t) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + t + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var i = /* @__PURE__ */ new Set(), s = {};
  function c(t, r) {
    u(t, r), u(t + "Capture", r);
  }
  function u(t, r) {
    for (s[t] = r, t = 0; t < r.length; t++) i.add(r[t]);
  }
  var f = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), m = Object.prototype.hasOwnProperty, p = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, b = {};
  function h(t) {
    return m.call(b, t) ? !0 : m.call(v, t) ? !1 : p.test(t) ? b[t] = !0 : (v[t] = !0, !1);
  }
  function w(t, r, o, l) {
    if (o !== null && o.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return l ? !1 : o !== null ? !o.acceptsBooleans : (t = t.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-");
      default:
        return !1;
    }
  }
  function k(t, r, o, l) {
    if (r === null || typeof r > "u" || w(t, r, o, l)) return !0;
    if (l) return !1;
    if (o !== null) switch (o.type) {
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
  function y(t, r, o, l, d, g, x) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = l, this.attributeNamespace = d, this.mustUseProperty = o, this.propertyName = t, this.type = r, this.sanitizeURL = g, this.removeEmptyString = x;
  }
  var _ = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    _[t] = new y(t, 0, !1, t, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var r = t[0];
    _[r] = new y(r, 1, !1, t[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    _[t] = new y(t, 2, !1, t.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    _[t] = new y(t, 2, !1, t, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    _[t] = new y(t, 3, !1, t.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(t) {
    _[t] = new y(t, 3, !0, t, null, !1, !1);
  }), ["capture", "download"].forEach(function(t) {
    _[t] = new y(t, 4, !1, t, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(t) {
    _[t] = new y(t, 6, !1, t, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(t) {
    _[t] = new y(t, 5, !1, t.toLowerCase(), null, !1, !1);
  });
  var A = /[\-:]([a-z])/g;
  function z(t) {
    return t[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var r = t.replace(
      A,
      z
    );
    _[r] = new y(r, 1, !1, t, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var r = t.replace(A, z);
    _[r] = new y(r, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var r = t.replace(A, z);
    _[r] = new y(r, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(t) {
    _[t] = new y(t, 1, !1, t.toLowerCase(), null, !1, !1);
  }), _.xlinkHref = new y("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(t) {
    _[t] = new y(t, 1, !1, t.toLowerCase(), null, !0, !0);
  });
  function U(t, r, o, l) {
    var d = _.hasOwnProperty(r) ? _[r] : null;
    (d !== null ? d.type !== 0 : l || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (k(r, o, d, l) && (o = null), l || d === null ? h(r) && (o === null ? t.removeAttribute(r) : t.setAttribute(r, "" + o)) : d.mustUseProperty ? t[d.propertyName] = o === null ? d.type === 3 ? !1 : "" : o : (r = d.attributeName, l = d.attributeNamespace, o === null ? t.removeAttribute(r) : (d = d.type, o = d === 3 || d === 4 && o === !0 ? "" : "" + o, l ? t.setAttributeNS(l, r, o) : t.setAttribute(r, o))));
  }
  var W = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Q = Symbol.for("react.element"), Y = Symbol.for("react.portal"), K = Symbol.for("react.fragment"), X = Symbol.for("react.strict_mode"), ee = Symbol.for("react.profiler"), ie = Symbol.for("react.provider"), ae = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), I = Symbol.iterator;
  function F(t) {
    return t === null || typeof t != "object" ? null : (t = I && t[I] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var V = Object.assign, $;
  function D(t) {
    if ($ === void 0) try {
      throw Error();
    } catch (o) {
      var r = o.stack.trim().match(/\n( *(at )?)/);
      $ = r && r[1] || "";
    }
    return `
` + $ + t;
  }
  var me = !1;
  function fe(t, r) {
    if (!t || me) return "";
    me = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (q) {
          var l = q;
        }
        Reflect.construct(t, [], r);
      } else {
        try {
          r.call();
        } catch (q) {
          l = q;
        }
        t.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (q) {
          l = q;
        }
        t();
      }
    } catch (q) {
      if (q && l && typeof q.stack == "string") {
        for (var d = q.stack.split(`
`), g = l.stack.split(`
`), x = d.length - 1, P = g.length - 1; 1 <= x && 0 <= P && d[x] !== g[P]; ) P--;
        for (; 1 <= x && 0 <= P; x--, P--) if (d[x] !== g[P]) {
          if (x !== 1 || P !== 1)
            do
              if (x--, P--, 0 > P || d[x] !== g[P]) {
                var N = `
` + d[x].replace(" at new ", " at ");
                return t.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", t.displayName)), N;
              }
            while (1 <= x && 0 <= P);
          break;
        }
      }
    } finally {
      me = !1, Error.prepareStackTrace = o;
    }
    return (t = t ? t.displayName || t.name : "") ? D(t) : "";
  }
  function ve(t) {
    switch (t.tag) {
      case 5:
        return D(t.type);
      case 16:
        return D("Lazy");
      case 13:
        return D("Suspense");
      case 19:
        return D("SuspenseList");
      case 0:
      case 2:
      case 15:
        return t = fe(t.type, !1), t;
      case 11:
        return t = fe(t.type.render, !1), t;
      case 1:
        return t = fe(t.type, !0), t;
      default:
        return "";
    }
  }
  function ye(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case K:
        return "Fragment";
      case Y:
        return "Portal";
      case ee:
        return "Profiler";
      case X:
        return "StrictMode";
      case R:
        return "Suspense";
      case C:
        return "SuspenseList";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case ae:
        return (t.displayName || "Context") + ".Consumer";
      case ie:
        return (t._context.displayName || "Context") + ".Provider";
      case S:
        var r = t.render;
        return t = t.displayName, t || (t = r.displayName || r.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case j:
        return r = t.displayName || null, r !== null ? r : ye(t.type) || "Memo";
      case L:
        r = t._payload, t = t._init;
        try {
          return ye(t(r));
        } catch {
        }
    }
    return null;
  }
  function ze(t) {
    var r = t.type;
    switch (t.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return t = r.render, t = t.displayName || t.name || "", r.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
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
        return ye(r);
      case 8:
        return r === X ? "StrictMode" : "Mode";
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
  function Te(t) {
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
  function Me(t) {
    var r = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function st(t) {
    var r = Me(t) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(t.constructor.prototype, r), l = "" + t[r];
    if (!t.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var d = o.get, g = o.set;
      return Object.defineProperty(t, r, { configurable: !0, get: function() {
        return d.call(this);
      }, set: function(x) {
        l = "" + x, g.call(this, x);
      } }), Object.defineProperty(t, r, { enumerable: o.enumerable }), { getValue: function() {
        return l;
      }, setValue: function(x) {
        l = "" + x;
      }, stopTracking: function() {
        t._valueTracker = null, delete t[r];
      } };
    }
  }
  function jn(t) {
    t._valueTracker || (t._valueTracker = st(t));
  }
  function si(t) {
    if (!t) return !1;
    var r = t._valueTracker;
    if (!r) return !0;
    var o = r.getValue(), l = "";
    return t && (l = Me(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== o ? (r.setValue(t), !0) : !1;
  }
  function On(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function Vn(t, r) {
    var o = r.checked;
    return V({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? t._wrapperState.initialChecked });
  }
  function pe(t, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, l = r.checked != null ? r.checked : r.defaultChecked;
    o = Te(r.value != null ? r.value : o), t._wrapperState = { initialChecked: l, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Pe(t, r) {
    r = r.checked, r != null && U(t, "checked", r, !1);
  }
  function rr(t, r) {
    Pe(t, r);
    var o = Te(r.value), l = r.type;
    if (o != null) l === "number" ? (o === 0 && t.value === "" || t.value != o) && (t.value = "" + o) : t.value !== "" + o && (t.value = "" + o);
    else if (l === "submit" || l === "reset") {
      t.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? mn(t, r.type, o) : r.hasOwnProperty("defaultValue") && mn(t, r.type, Te(r.defaultValue)), r.checked == null && r.defaultChecked != null && (t.defaultChecked = !!r.defaultChecked);
  }
  function pn(t, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var l = r.type;
      if (!(l !== "submit" && l !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + t._wrapperState.initialValue, o || r === t.value || (t.value = r), t.defaultValue = r;
    }
    o = t.name, o !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, o !== "" && (t.name = o);
  }
  function mn(t, r, o) {
    (r !== "number" || On(t.ownerDocument) !== t) && (o == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + o && (t.defaultValue = "" + o));
  }
  var Fa = Array.isArray;
  function Dn(t, r, o, l) {
    if (t = t.options, r) {
      r = {};
      for (var d = 0; d < o.length; d++) r["$" + o[d]] = !0;
      for (o = 0; o < t.length; o++) d = r.hasOwnProperty("$" + t[o].value), t[o].selected !== d && (t[o].selected = d), d && l && (t[o].defaultSelected = !0);
    } else {
      for (o = "" + Te(o), r = null, d = 0; d < t.length; d++) {
        if (t[d].value === o) {
          t[d].selected = !0, l && (t[d].defaultSelected = !0);
          return;
        }
        r !== null || t[d].disabled || (r = t[d]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function cs(t, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(a(91));
    return V({}, r, { value: void 0, defaultValue: void 0, children: "" + t._wrapperState.initialValue });
  }
  function rf(t, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null) throw Error(a(92));
        if (Fa(o)) {
          if (1 < o.length) throw Error(a(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    t._wrapperState = { initialValue: Te(o) };
  }
  function nf(t, r) {
    var o = Te(r.value), l = Te(r.defaultValue);
    o != null && (o = "" + o, o !== t.value && (t.value = o), r.defaultValue == null && t.defaultValue !== o && (t.defaultValue = o)), l != null && (t.defaultValue = "" + l);
  }
  function af(t) {
    var r = t.textContent;
    r === t._wrapperState.initialValue && r !== "" && r !== null && (t.value = r);
  }
  function of(t) {
    switch (t) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function us(t, r) {
    return t == null || t === "http://www.w3.org/1999/xhtml" ? of(r) : t === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t;
  }
  var ci, lf = (function(t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, l, d) {
      MSApp.execUnsafeLocalFunction(function() {
        return t(r, o, l, d);
      });
    } : t;
  })(function(t, r) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t) t.innerHTML = r;
    else {
      for (ci = ci || document.createElement("div"), ci.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = ci.firstChild; t.firstChild; ) t.removeChild(t.firstChild);
      for (; r.firstChild; ) t.appendChild(r.firstChild);
    }
  });
  function Ta(t, r) {
    if (r) {
      var o = t.firstChild;
      if (o && o === t.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    t.textContent = r;
  }
  var Na = {
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
  }, y0 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Na).forEach(function(t) {
    y0.forEach(function(r) {
      r = r + t.charAt(0).toUpperCase() + t.substring(1), Na[r] = Na[t];
    });
  });
  function sf(t, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || Na.hasOwnProperty(t) && Na[t] ? ("" + r).trim() : r + "px";
  }
  function cf(t, r) {
    t = t.style;
    for (var o in r) if (r.hasOwnProperty(o)) {
      var l = o.indexOf("--") === 0, d = sf(o, r[o], l);
      o === "float" && (o = "cssFloat"), l ? t.setProperty(o, d) : t[o] = d;
    }
  }
  var w0 = V({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function ds(t, r) {
    if (r) {
      if (w0[t] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(a(137, t));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(a(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(a(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(a(62));
    }
  }
  function fs(t, r) {
    if (t.indexOf("-") === -1) return typeof r.is == "string";
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
  var ps = null;
  function ms(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var gs = null, Bn = null, Un = null;
  function uf(t) {
    if (t = to(t)) {
      if (typeof gs != "function") throw Error(a(280));
      var r = t.stateNode;
      r && (r = Ti(r), gs(t.stateNode, t.type, r));
    }
  }
  function df(t) {
    Bn ? Un ? Un.push(t) : Un = [t] : Bn = t;
  }
  function ff() {
    if (Bn) {
      var t = Bn, r = Un;
      if (Un = Bn = null, uf(t), r) for (t = 0; t < r.length; t++) uf(r[t]);
    }
  }
  function pf(t, r) {
    return t(r);
  }
  function mf() {
  }
  var hs = !1;
  function gf(t, r, o) {
    if (hs) return t(r, o);
    hs = !0;
    try {
      return pf(t, r, o);
    } finally {
      hs = !1, (Bn !== null || Un !== null) && (mf(), ff());
    }
  }
  function Ia(t, r) {
    var o = t.stateNode;
    if (o === null) return null;
    var l = Ti(o);
    if (l === null) return null;
    o = l[r];
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
        (l = !l.disabled) || (t = t.type, l = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !l;
        break e;
      default:
        t = !1;
    }
    if (t) return null;
    if (o && typeof o != "function") throw Error(a(231, r, typeof o));
    return o;
  }
  var vs = !1;
  if (f) try {
    var Ma = {};
    Object.defineProperty(Ma, "passive", { get: function() {
      vs = !0;
    } }), window.addEventListener("test", Ma, Ma), window.removeEventListener("test", Ma, Ma);
  } catch {
    vs = !1;
  }
  function x0(t, r, o, l, d, g, x, P, N) {
    var q = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, q);
    } catch (J) {
      this.onError(J);
    }
  }
  var La = !1, ui = null, di = !1, bs = null, k0 = { onError: function(t) {
    La = !0, ui = t;
  } };
  function _0(t, r, o, l, d, g, x, P, N) {
    La = !1, ui = null, x0.apply(k0, arguments);
  }
  function E0(t, r, o, l, d, g, x, P, N) {
    if (_0.apply(this, arguments), La) {
      if (La) {
        var q = ui;
        La = !1, ui = null;
      } else throw Error(a(198));
      di || (di = !0, bs = q);
    }
  }
  function gn(t) {
    var r = t, o = t;
    if (t.alternate) for (; r.return; ) r = r.return;
    else {
      t = r;
      do
        r = t, (r.flags & 4098) !== 0 && (o = r.return), t = r.return;
      while (t);
    }
    return r.tag === 3 ? o : null;
  }
  function hf(t) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (r === null && (t = t.alternate, t !== null && (r = t.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function vf(t) {
    if (gn(t) !== t) throw Error(a(188));
  }
  function S0(t) {
    var r = t.alternate;
    if (!r) {
      if (r = gn(t), r === null) throw Error(a(188));
      return r !== t ? null : t;
    }
    for (var o = t, l = r; ; ) {
      var d = o.return;
      if (d === null) break;
      var g = d.alternate;
      if (g === null) {
        if (l = d.return, l !== null) {
          o = l;
          continue;
        }
        break;
      }
      if (d.child === g.child) {
        for (g = d.child; g; ) {
          if (g === o) return vf(d), t;
          if (g === l) return vf(d), r;
          g = g.sibling;
        }
        throw Error(a(188));
      }
      if (o.return !== l.return) o = d, l = g;
      else {
        for (var x = !1, P = d.child; P; ) {
          if (P === o) {
            x = !0, o = d, l = g;
            break;
          }
          if (P === l) {
            x = !0, l = d, o = g;
            break;
          }
          P = P.sibling;
        }
        if (!x) {
          for (P = g.child; P; ) {
            if (P === o) {
              x = !0, o = g, l = d;
              break;
            }
            if (P === l) {
              x = !0, l = g, o = d;
              break;
            }
            P = P.sibling;
          }
          if (!x) throw Error(a(189));
        }
      }
      if (o.alternate !== l) throw Error(a(190));
    }
    if (o.tag !== 3) throw Error(a(188));
    return o.stateNode.current === o ? t : r;
  }
  function bf(t) {
    return t = S0(t), t !== null ? yf(t) : null;
  }
  function yf(t) {
    if (t.tag === 5 || t.tag === 6) return t;
    for (t = t.child; t !== null; ) {
      var r = yf(t);
      if (r !== null) return r;
      t = t.sibling;
    }
    return null;
  }
  var wf = n.unstable_scheduleCallback, xf = n.unstable_cancelCallback, C0 = n.unstable_shouldYield, z0 = n.unstable_requestPaint, Ke = n.unstable_now, $0 = n.unstable_getCurrentPriorityLevel, ys = n.unstable_ImmediatePriority, kf = n.unstable_UserBlockingPriority, fi = n.unstable_NormalPriority, P0 = n.unstable_LowPriority, _f = n.unstable_IdlePriority, pi = null, nr = null;
  function A0(t) {
    if (nr && typeof nr.onCommitFiberRoot == "function") try {
      nr.onCommitFiberRoot(pi, t, void 0, (t.current.flags & 128) === 128);
    } catch {
    }
  }
  var Ht = Math.clz32 ? Math.clz32 : N0, F0 = Math.log, T0 = Math.LN2;
  function N0(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (F0(t) / T0 | 0) | 0;
  }
  var mi = 64, gi = 4194304;
  function Ra(t) {
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
  function hi(t, r) {
    var o = t.pendingLanes;
    if (o === 0) return 0;
    var l = 0, d = t.suspendedLanes, g = t.pingedLanes, x = o & 268435455;
    if (x !== 0) {
      var P = x & ~d;
      P !== 0 ? l = Ra(P) : (g &= x, g !== 0 && (l = Ra(g)));
    } else x = o & ~d, x !== 0 ? l = Ra(x) : g !== 0 && (l = Ra(g));
    if (l === 0) return 0;
    if (r !== 0 && r !== l && (r & d) === 0 && (d = l & -l, g = r & -r, d >= g || d === 16 && (g & 4194240) !== 0)) return r;
    if ((l & 4) !== 0 && (l |= o & 16), r = t.entangledLanes, r !== 0) for (t = t.entanglements, r &= l; 0 < r; ) o = 31 - Ht(r), d = 1 << o, l |= t[o], r &= ~d;
    return l;
  }
  function I0(t, r) {
    switch (t) {
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
  function M0(t, r) {
    for (var o = t.suspendedLanes, l = t.pingedLanes, d = t.expirationTimes, g = t.pendingLanes; 0 < g; ) {
      var x = 31 - Ht(g), P = 1 << x, N = d[x];
      N === -1 ? ((P & o) === 0 || (P & l) !== 0) && (d[x] = I0(P, r)) : N <= r && (t.expiredLanes |= P), g &= ~P;
    }
  }
  function ws(t) {
    return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
  }
  function Ef() {
    var t = mi;
    return mi <<= 1, (mi & 4194240) === 0 && (mi = 64), t;
  }
  function xs(t) {
    for (var r = [], o = 0; 31 > o; o++) r.push(t);
    return r;
  }
  function ja(t, r, o) {
    t.pendingLanes |= r, r !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, r = 31 - Ht(r), t[r] = o;
  }
  function L0(t, r) {
    var o = t.pendingLanes & ~r;
    t.pendingLanes = r, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= r, t.mutableReadLanes &= r, t.entangledLanes &= r, r = t.entanglements;
    var l = t.eventTimes;
    for (t = t.expirationTimes; 0 < o; ) {
      var d = 31 - Ht(o), g = 1 << d;
      r[d] = 0, l[d] = -1, t[d] = -1, o &= ~g;
    }
  }
  function ks(t, r) {
    var o = t.entangledLanes |= r;
    for (t = t.entanglements; o; ) {
      var l = 31 - Ht(o), d = 1 << l;
      d & r | t[l] & r && (t[l] |= r), o &= ~d;
    }
  }
  var Ne = 0;
  function Sf(t) {
    return t &= -t, 1 < t ? 4 < t ? (t & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Cf, _s, zf, $f, Pf, Es = !1, vi = [], Ir = null, Mr = null, Lr = null, Oa = /* @__PURE__ */ new Map(), Va = /* @__PURE__ */ new Map(), Rr = [], R0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Af(t, r) {
    switch (t) {
      case "focusin":
      case "focusout":
        Ir = null;
        break;
      case "dragenter":
      case "dragleave":
        Mr = null;
        break;
      case "mouseover":
      case "mouseout":
        Lr = null;
        break;
      case "pointerover":
      case "pointerout":
        Oa.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Va.delete(r.pointerId);
    }
  }
  function Da(t, r, o, l, d, g) {
    return t === null || t.nativeEvent !== g ? (t = { blockedOn: r, domEventName: o, eventSystemFlags: l, nativeEvent: g, targetContainers: [d] }, r !== null && (r = to(r), r !== null && _s(r)), t) : (t.eventSystemFlags |= l, r = t.targetContainers, d !== null && r.indexOf(d) === -1 && r.push(d), t);
  }
  function j0(t, r, o, l, d) {
    switch (r) {
      case "focusin":
        return Ir = Da(Ir, t, r, o, l, d), !0;
      case "dragenter":
        return Mr = Da(Mr, t, r, o, l, d), !0;
      case "mouseover":
        return Lr = Da(Lr, t, r, o, l, d), !0;
      case "pointerover":
        var g = d.pointerId;
        return Oa.set(g, Da(Oa.get(g) || null, t, r, o, l, d)), !0;
      case "gotpointercapture":
        return g = d.pointerId, Va.set(g, Da(Va.get(g) || null, t, r, o, l, d)), !0;
    }
    return !1;
  }
  function Ff(t) {
    var r = hn(t.target);
    if (r !== null) {
      var o = gn(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = hf(o), r !== null) {
            t.blockedOn = r, Pf(t.priority, function() {
              zf(o);
            });
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function bi(t) {
    if (t.blockedOn !== null) return !1;
    for (var r = t.targetContainers; 0 < r.length; ) {
      var o = Cs(t.domEventName, t.eventSystemFlags, r[0], t.nativeEvent);
      if (o === null) {
        o = t.nativeEvent;
        var l = new o.constructor(o.type, o);
        ps = l, o.target.dispatchEvent(l), ps = null;
      } else return r = to(o), r !== null && _s(r), t.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function Tf(t, r, o) {
    bi(t) && o.delete(r);
  }
  function O0() {
    Es = !1, Ir !== null && bi(Ir) && (Ir = null), Mr !== null && bi(Mr) && (Mr = null), Lr !== null && bi(Lr) && (Lr = null), Oa.forEach(Tf), Va.forEach(Tf);
  }
  function Ba(t, r) {
    t.blockedOn === r && (t.blockedOn = null, Es || (Es = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, O0)));
  }
  function Ua(t) {
    function r(d) {
      return Ba(d, t);
    }
    if (0 < vi.length) {
      Ba(vi[0], t);
      for (var o = 1; o < vi.length; o++) {
        var l = vi[o];
        l.blockedOn === t && (l.blockedOn = null);
      }
    }
    for (Ir !== null && Ba(Ir, t), Mr !== null && Ba(Mr, t), Lr !== null && Ba(Lr, t), Oa.forEach(r), Va.forEach(r), o = 0; o < Rr.length; o++) l = Rr[o], l.blockedOn === t && (l.blockedOn = null);
    for (; 0 < Rr.length && (o = Rr[0], o.blockedOn === null); ) Ff(o), o.blockedOn === null && Rr.shift();
  }
  var Hn = W.ReactCurrentBatchConfig, yi = !0;
  function V0(t, r, o, l) {
    var d = Ne, g = Hn.transition;
    Hn.transition = null;
    try {
      Ne = 1, Ss(t, r, o, l);
    } finally {
      Ne = d, Hn.transition = g;
    }
  }
  function D0(t, r, o, l) {
    var d = Ne, g = Hn.transition;
    Hn.transition = null;
    try {
      Ne = 4, Ss(t, r, o, l);
    } finally {
      Ne = d, Hn.transition = g;
    }
  }
  function Ss(t, r, o, l) {
    if (yi) {
      var d = Cs(t, r, o, l);
      if (d === null) Us(t, r, l, wi, o), Af(t, l);
      else if (j0(d, t, r, o, l)) l.stopPropagation();
      else if (Af(t, l), r & 4 && -1 < R0.indexOf(t)) {
        for (; d !== null; ) {
          var g = to(d);
          if (g !== null && Cf(g), g = Cs(t, r, o, l), g === null && Us(t, r, l, wi, o), g === d) break;
          d = g;
        }
        d !== null && l.stopPropagation();
      } else Us(t, r, l, null, o);
    }
  }
  var wi = null;
  function Cs(t, r, o, l) {
    if (wi = null, t = ms(l), t = hn(t), t !== null) if (r = gn(t), r === null) t = null;
    else if (o = r.tag, o === 13) {
      if (t = hf(r), t !== null) return t;
      t = null;
    } else if (o === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      t = null;
    } else r !== t && (t = null);
    return wi = t, null;
  }
  function Nf(t) {
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
        switch ($0()) {
          case ys:
            return 1;
          case kf:
            return 4;
          case fi:
          case P0:
            return 16;
          case _f:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var jr = null, zs = null, xi = null;
  function If() {
    if (xi) return xi;
    var t, r = zs, o = r.length, l, d = "value" in jr ? jr.value : jr.textContent, g = d.length;
    for (t = 0; t < o && r[t] === d[t]; t++) ;
    var x = o - t;
    for (l = 1; l <= x && r[o - l] === d[g - l]; l++) ;
    return xi = d.slice(t, 1 < l ? 1 - l : void 0);
  }
  function ki(t) {
    var r = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && r === 13 && (t = 13)) : t = r, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function _i() {
    return !0;
  }
  function Mf() {
    return !1;
  }
  function $t(t) {
    function r(o, l, d, g, x) {
      this._reactName = o, this._targetInst = d, this.type = l, this.nativeEvent = g, this.target = x, this.currentTarget = null;
      for (var P in t) t.hasOwnProperty(P) && (o = t[P], this[P] = o ? o(g) : g[P]);
      return this.isDefaultPrevented = (g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1) ? _i : Mf, this.isPropagationStopped = Mf, this;
    }
    return V(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = _i);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = _i);
    }, persist: function() {
    }, isPersistent: _i }), r;
  }
  var Wn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
    return t.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, $s = $t(Wn), Ha = V({}, Wn, { view: 0, detail: 0 }), B0 = $t(Ha), Ps, As, Wa, Ei = V({}, Ha, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ts, button: 0, buttons: 0, relatedTarget: function(t) {
    return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
  }, movementX: function(t) {
    return "movementX" in t ? t.movementX : (t !== Wa && (Wa && t.type === "mousemove" ? (Ps = t.screenX - Wa.screenX, As = t.screenY - Wa.screenY) : As = Ps = 0, Wa = t), Ps);
  }, movementY: function(t) {
    return "movementY" in t ? t.movementY : As;
  } }), Lf = $t(Ei), U0 = V({}, Ei, { dataTransfer: 0 }), H0 = $t(U0), W0 = V({}, Ha, { relatedTarget: 0 }), Fs = $t(W0), q0 = V({}, Wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), G0 = $t(q0), K0 = V({}, Wn, { clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  } }), Y0 = $t(K0), Q0 = V({}, Wn, { data: 0 }), Rf = $t(Q0), X0 = {
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
  }, Z0 = {
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
  }, J0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function ey(t) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(t) : (t = J0[t]) ? !!r[t] : !1;
  }
  function Ts() {
    return ey;
  }
  var ty = V({}, Ha, { key: function(t) {
    if (t.key) {
      var r = X0[t.key] || t.key;
      if (r !== "Unidentified") return r;
    }
    return t.type === "keypress" ? (t = ki(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Z0[t.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ts, charCode: function(t) {
    return t.type === "keypress" ? ki(t) : 0;
  }, keyCode: function(t) {
    return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  }, which: function(t) {
    return t.type === "keypress" ? ki(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  } }), ry = $t(ty), ny = V({}, Ei, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), jf = $t(ny), ay = V({}, Ha, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ts }), oy = $t(ay), iy = V({}, Wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ly = $t(iy), sy = V({}, Ei, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), cy = $t(sy), uy = [9, 13, 27, 32], Ns = f && "CompositionEvent" in window, qa = null;
  f && "documentMode" in document && (qa = document.documentMode);
  var dy = f && "TextEvent" in window && !qa, Of = f && (!Ns || qa && 8 < qa && 11 >= qa), Vf = " ", Df = !1;
  function Bf(t, r) {
    switch (t) {
      case "keyup":
        return uy.indexOf(r.keyCode) !== -1;
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
  function Uf(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var qn = !1;
  function fy(t, r) {
    switch (t) {
      case "compositionend":
        return Uf(r);
      case "keypress":
        return r.which !== 32 ? null : (Df = !0, Vf);
      case "textInput":
        return t = r.data, t === Vf && Df ? null : t;
      default:
        return null;
    }
  }
  function py(t, r) {
    if (qn) return t === "compositionend" || !Ns && Bf(t, r) ? (t = If(), xi = zs = jr = null, qn = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Of && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var my = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Hf(t) {
    var r = t && t.nodeName && t.nodeName.toLowerCase();
    return r === "input" ? !!my[t.type] : r === "textarea";
  }
  function Wf(t, r, o, l) {
    df(l), r = Pi(r, "onChange"), 0 < r.length && (o = new $s("onChange", "change", null, o, l), t.push({ event: o, listeners: r }));
  }
  var Ga = null, Ka = null;
  function gy(t) {
    cp(t, 0);
  }
  function Si(t) {
    var r = Xn(t);
    if (si(r)) return t;
  }
  function hy(t, r) {
    if (t === "change") return r;
  }
  var qf = !1;
  if (f) {
    var Is;
    if (f) {
      var Ms = "oninput" in document;
      if (!Ms) {
        var Gf = document.createElement("div");
        Gf.setAttribute("oninput", "return;"), Ms = typeof Gf.oninput == "function";
      }
      Is = Ms;
    } else Is = !1;
    qf = Is && (!document.documentMode || 9 < document.documentMode);
  }
  function Kf() {
    Ga && (Ga.detachEvent("onpropertychange", Yf), Ka = Ga = null);
  }
  function Yf(t) {
    if (t.propertyName === "value" && Si(Ka)) {
      var r = [];
      Wf(r, Ka, t, ms(t)), gf(gy, r);
    }
  }
  function vy(t, r, o) {
    t === "focusin" ? (Kf(), Ga = r, Ka = o, Ga.attachEvent("onpropertychange", Yf)) : t === "focusout" && Kf();
  }
  function by(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return Si(Ka);
  }
  function yy(t, r) {
    if (t === "click") return Si(r);
  }
  function wy(t, r) {
    if (t === "input" || t === "change") return Si(r);
  }
  function xy(t, r) {
    return t === r && (t !== 0 || 1 / t === 1 / r) || t !== t && r !== r;
  }
  var Wt = typeof Object.is == "function" ? Object.is : xy;
  function Ya(t, r) {
    if (Wt(t, r)) return !0;
    if (typeof t != "object" || t === null || typeof r != "object" || r === null) return !1;
    var o = Object.keys(t), l = Object.keys(r);
    if (o.length !== l.length) return !1;
    for (l = 0; l < o.length; l++) {
      var d = o[l];
      if (!m.call(r, d) || !Wt(t[d], r[d])) return !1;
    }
    return !0;
  }
  function Qf(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Xf(t, r) {
    var o = Qf(t);
    t = 0;
    for (var l; o; ) {
      if (o.nodeType === 3) {
        if (l = t + o.textContent.length, t <= r && l >= r) return { node: o, offset: r - t };
        t = l;
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
      o = Qf(o);
    }
  }
  function Zf(t, r) {
    return t && r ? t === r ? !0 : t && t.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Zf(t, r.parentNode) : "contains" in t ? t.contains(r) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Jf() {
    for (var t = window, r = On(); r instanceof t.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o) t = r.contentWindow;
      else break;
      r = On(t.document);
    }
    return r;
  }
  function Ls(t) {
    var r = t && t.nodeName && t.nodeName.toLowerCase();
    return r && (r === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || r === "textarea" || t.contentEditable === "true");
  }
  function ky(t) {
    var r = Jf(), o = t.focusedElem, l = t.selectionRange;
    if (r !== o && o && o.ownerDocument && Zf(o.ownerDocument.documentElement, o)) {
      if (l !== null && Ls(o)) {
        if (r = l.start, t = l.end, t === void 0 && (t = r), "selectionStart" in o) o.selectionStart = r, o.selectionEnd = Math.min(t, o.value.length);
        else if (t = (r = o.ownerDocument || document) && r.defaultView || window, t.getSelection) {
          t = t.getSelection();
          var d = o.textContent.length, g = Math.min(l.start, d);
          l = l.end === void 0 ? g : Math.min(l.end, d), !t.extend && g > l && (d = l, l = g, g = d), d = Xf(o, g);
          var x = Xf(
            o,
            l
          );
          d && x && (t.rangeCount !== 1 || t.anchorNode !== d.node || t.anchorOffset !== d.offset || t.focusNode !== x.node || t.focusOffset !== x.offset) && (r = r.createRange(), r.setStart(d.node, d.offset), t.removeAllRanges(), g > l ? (t.addRange(r), t.extend(x.node, x.offset)) : (r.setEnd(x.node, x.offset), t.addRange(r)));
        }
      }
      for (r = [], t = o; t = t.parentNode; ) t.nodeType === 1 && r.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++) t = r[o], t.element.scrollLeft = t.left, t.element.scrollTop = t.top;
    }
  }
  var _y = f && "documentMode" in document && 11 >= document.documentMode, Gn = null, Rs = null, Qa = null, js = !1;
  function ep(t, r, o) {
    var l = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    js || Gn == null || Gn !== On(l) || (l = Gn, "selectionStart" in l && Ls(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), Qa && Ya(Qa, l) || (Qa = l, l = Pi(Rs, "onSelect"), 0 < l.length && (r = new $s("onSelect", "select", null, r, o), t.push({ event: r, listeners: l }), r.target = Gn)));
  }
  function Ci(t, r) {
    var o = {};
    return o[t.toLowerCase()] = r.toLowerCase(), o["Webkit" + t] = "webkit" + r, o["Moz" + t] = "moz" + r, o;
  }
  var Kn = { animationend: Ci("Animation", "AnimationEnd"), animationiteration: Ci("Animation", "AnimationIteration"), animationstart: Ci("Animation", "AnimationStart"), transitionend: Ci("Transition", "TransitionEnd") }, Os = {}, tp = {};
  f && (tp = document.createElement("div").style, "AnimationEvent" in window || (delete Kn.animationend.animation, delete Kn.animationiteration.animation, delete Kn.animationstart.animation), "TransitionEvent" in window || delete Kn.transitionend.transition);
  function zi(t) {
    if (Os[t]) return Os[t];
    if (!Kn[t]) return t;
    var r = Kn[t], o;
    for (o in r) if (r.hasOwnProperty(o) && o in tp) return Os[t] = r[o];
    return t;
  }
  var rp = zi("animationend"), np = zi("animationiteration"), ap = zi("animationstart"), op = zi("transitionend"), ip = /* @__PURE__ */ new Map(), lp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Or(t, r) {
    ip.set(t, r), c(r, [t]);
  }
  for (var Vs = 0; Vs < lp.length; Vs++) {
    var Ds = lp[Vs], Ey = Ds.toLowerCase(), Sy = Ds[0].toUpperCase() + Ds.slice(1);
    Or(Ey, "on" + Sy);
  }
  Or(rp, "onAnimationEnd"), Or(np, "onAnimationIteration"), Or(ap, "onAnimationStart"), Or("dblclick", "onDoubleClick"), Or("focusin", "onFocus"), Or("focusout", "onBlur"), Or(op, "onTransitionEnd"), u("onMouseEnter", ["mouseout", "mouseover"]), u("onMouseLeave", ["mouseout", "mouseover"]), u("onPointerEnter", ["pointerout", "pointerover"]), u("onPointerLeave", ["pointerout", "pointerover"]), c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Xa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Cy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xa));
  function sp(t, r, o) {
    var l = t.type || "unknown-event";
    t.currentTarget = o, E0(l, r, void 0, t), t.currentTarget = null;
  }
  function cp(t, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < t.length; o++) {
      var l = t[o], d = l.event;
      l = l.listeners;
      e: {
        var g = void 0;
        if (r) for (var x = l.length - 1; 0 <= x; x--) {
          var P = l[x], N = P.instance, q = P.currentTarget;
          if (P = P.listener, N !== g && d.isPropagationStopped()) break e;
          sp(d, P, q), g = N;
        }
        else for (x = 0; x < l.length; x++) {
          if (P = l[x], N = P.instance, q = P.currentTarget, P = P.listener, N !== g && d.isPropagationStopped()) break e;
          sp(d, P, q), g = N;
        }
      }
    }
    if (di) throw t = bs, di = !1, bs = null, t;
  }
  function Re(t, r) {
    var o = r[Ys];
    o === void 0 && (o = r[Ys] = /* @__PURE__ */ new Set());
    var l = t + "__bubble";
    o.has(l) || (up(r, t, 2, !1), o.add(l));
  }
  function Bs(t, r, o) {
    var l = 0;
    r && (l |= 4), up(o, t, l, r);
  }
  var $i = "_reactListening" + Math.random().toString(36).slice(2);
  function Za(t) {
    if (!t[$i]) {
      t[$i] = !0, i.forEach(function(o) {
        o !== "selectionchange" && (Cy.has(o) || Bs(o, !1, t), Bs(o, !0, t));
      });
      var r = t.nodeType === 9 ? t : t.ownerDocument;
      r === null || r[$i] || (r[$i] = !0, Bs("selectionchange", !1, r));
    }
  }
  function up(t, r, o, l) {
    switch (Nf(r)) {
      case 1:
        var d = V0;
        break;
      case 4:
        d = D0;
        break;
      default:
        d = Ss;
    }
    o = d.bind(null, r, o, t), d = void 0, !vs || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (d = !0), l ? d !== void 0 ? t.addEventListener(r, o, { capture: !0, passive: d }) : t.addEventListener(r, o, !0) : d !== void 0 ? t.addEventListener(r, o, { passive: d }) : t.addEventListener(r, o, !1);
  }
  function Us(t, r, o, l, d) {
    var g = l;
    if ((r & 1) === 0 && (r & 2) === 0 && l !== null) e: for (; ; ) {
      if (l === null) return;
      var x = l.tag;
      if (x === 3 || x === 4) {
        var P = l.stateNode.containerInfo;
        if (P === d || P.nodeType === 8 && P.parentNode === d) break;
        if (x === 4) for (x = l.return; x !== null; ) {
          var N = x.tag;
          if ((N === 3 || N === 4) && (N = x.stateNode.containerInfo, N === d || N.nodeType === 8 && N.parentNode === d)) return;
          x = x.return;
        }
        for (; P !== null; ) {
          if (x = hn(P), x === null) return;
          if (N = x.tag, N === 5 || N === 6) {
            l = g = x;
            continue e;
          }
          P = P.parentNode;
        }
      }
      l = l.return;
    }
    gf(function() {
      var q = g, J = ms(o), te = [];
      e: {
        var Z = ip.get(t);
        if (Z !== void 0) {
          var le = $s, ce = t;
          switch (t) {
            case "keypress":
              if (ki(o) === 0) break e;
            case "keydown":
            case "keyup":
              le = ry;
              break;
            case "focusin":
              ce = "focus", le = Fs;
              break;
            case "focusout":
              ce = "blur", le = Fs;
              break;
            case "beforeblur":
            case "afterblur":
              le = Fs;
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
              le = Lf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              le = H0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              le = oy;
              break;
            case rp:
            case np:
            case ap:
              le = G0;
              break;
            case op:
              le = ly;
              break;
            case "scroll":
              le = B0;
              break;
            case "wheel":
              le = cy;
              break;
            case "copy":
            case "cut":
            case "paste":
              le = Y0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              le = jf;
          }
          var ue = (r & 4) !== 0, Ye = !ue && t === "scroll", B = ue ? Z !== null ? Z + "Capture" : null : Z;
          ue = [];
          for (var M = q, H; M !== null; ) {
            H = M;
            var re = H.stateNode;
            if (H.tag === 5 && re !== null && (H = re, B !== null && (re = Ia(M, B), re != null && ue.push(Ja(M, re, H)))), Ye) break;
            M = M.return;
          }
          0 < ue.length && (Z = new le(Z, ce, null, o, J), te.push({ event: Z, listeners: ue }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (Z = t === "mouseover" || t === "pointerover", le = t === "mouseout" || t === "pointerout", Z && o !== ps && (ce = o.relatedTarget || o.fromElement) && (hn(ce) || ce[fr])) break e;
          if ((le || Z) && (Z = J.window === J ? J : (Z = J.ownerDocument) ? Z.defaultView || Z.parentWindow : window, le ? (ce = o.relatedTarget || o.toElement, le = q, ce = ce ? hn(ce) : null, ce !== null && (Ye = gn(ce), ce !== Ye || ce.tag !== 5 && ce.tag !== 6) && (ce = null)) : (le = null, ce = q), le !== ce)) {
            if (ue = Lf, re = "onMouseLeave", B = "onMouseEnter", M = "mouse", (t === "pointerout" || t === "pointerover") && (ue = jf, re = "onPointerLeave", B = "onPointerEnter", M = "pointer"), Ye = le == null ? Z : Xn(le), H = ce == null ? Z : Xn(ce), Z = new ue(re, M + "leave", le, o, J), Z.target = Ye, Z.relatedTarget = H, re = null, hn(J) === q && (ue = new ue(B, M + "enter", ce, o, J), ue.target = H, ue.relatedTarget = Ye, re = ue), Ye = re, le && ce) t: {
              for (ue = le, B = ce, M = 0, H = ue; H; H = Yn(H)) M++;
              for (H = 0, re = B; re; re = Yn(re)) H++;
              for (; 0 < M - H; ) ue = Yn(ue), M--;
              for (; 0 < H - M; ) B = Yn(B), H--;
              for (; M--; ) {
                if (ue === B || B !== null && ue === B.alternate) break t;
                ue = Yn(ue), B = Yn(B);
              }
              ue = null;
            }
            else ue = null;
            le !== null && dp(te, Z, le, ue, !1), ce !== null && Ye !== null && dp(te, Ye, ce, ue, !0);
          }
        }
        e: {
          if (Z = q ? Xn(q) : window, le = Z.nodeName && Z.nodeName.toLowerCase(), le === "select" || le === "input" && Z.type === "file") var de = hy;
          else if (Hf(Z)) if (qf) de = wy;
          else {
            de = by;
            var ge = vy;
          }
          else (le = Z.nodeName) && le.toLowerCase() === "input" && (Z.type === "checkbox" || Z.type === "radio") && (de = yy);
          if (de && (de = de(t, q))) {
            Wf(te, de, o, J);
            break e;
          }
          ge && ge(t, Z, q), t === "focusout" && (ge = Z._wrapperState) && ge.controlled && Z.type === "number" && mn(Z, "number", Z.value);
        }
        switch (ge = q ? Xn(q) : window, t) {
          case "focusin":
            (Hf(ge) || ge.contentEditable === "true") && (Gn = ge, Rs = q, Qa = null);
            break;
          case "focusout":
            Qa = Rs = Gn = null;
            break;
          case "mousedown":
            js = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            js = !1, ep(te, o, J);
            break;
          case "selectionchange":
            if (_y) break;
          case "keydown":
          case "keyup":
            ep(te, o, J);
        }
        var he;
        if (Ns) e: {
          switch (t) {
            case "compositionstart":
              var be = "onCompositionStart";
              break e;
            case "compositionend":
              be = "onCompositionEnd";
              break e;
            case "compositionupdate":
              be = "onCompositionUpdate";
              break e;
          }
          be = void 0;
        }
        else qn ? Bf(t, o) && (be = "onCompositionEnd") : t === "keydown" && o.keyCode === 229 && (be = "onCompositionStart");
        be && (Of && o.locale !== "ko" && (qn || be !== "onCompositionStart" ? be === "onCompositionEnd" && qn && (he = If()) : (jr = J, zs = "value" in jr ? jr.value : jr.textContent, qn = !0)), ge = Pi(q, be), 0 < ge.length && (be = new Rf(be, t, null, o, J), te.push({ event: be, listeners: ge }), he ? be.data = he : (he = Uf(o), he !== null && (be.data = he)))), (he = dy ? fy(t, o) : py(t, o)) && (q = Pi(q, "onBeforeInput"), 0 < q.length && (J = new Rf("onBeforeInput", "beforeinput", null, o, J), te.push({ event: J, listeners: q }), J.data = he));
      }
      cp(te, r);
    });
  }
  function Ja(t, r, o) {
    return { instance: t, listener: r, currentTarget: o };
  }
  function Pi(t, r) {
    for (var o = r + "Capture", l = []; t !== null; ) {
      var d = t, g = d.stateNode;
      d.tag === 5 && g !== null && (d = g, g = Ia(t, o), g != null && l.unshift(Ja(t, g, d)), g = Ia(t, r), g != null && l.push(Ja(t, g, d))), t = t.return;
    }
    return l;
  }
  function Yn(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5);
    return t || null;
  }
  function dp(t, r, o, l, d) {
    for (var g = r._reactName, x = []; o !== null && o !== l; ) {
      var P = o, N = P.alternate, q = P.stateNode;
      if (N !== null && N === l) break;
      P.tag === 5 && q !== null && (P = q, d ? (N = Ia(o, g), N != null && x.unshift(Ja(o, N, P))) : d || (N = Ia(o, g), N != null && x.push(Ja(o, N, P)))), o = o.return;
    }
    x.length !== 0 && t.push({ event: r, listeners: x });
  }
  var zy = /\r\n?/g, $y = /\u0000|\uFFFD/g;
  function fp(t) {
    return (typeof t == "string" ? t : "" + t).replace(zy, `
`).replace($y, "");
  }
  function Ai(t, r, o) {
    if (r = fp(r), fp(t) !== r && o) throw Error(a(425));
  }
  function Fi() {
  }
  var Hs = null, Ws = null;
  function qs(t, r) {
    return t === "textarea" || t === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Gs = typeof setTimeout == "function" ? setTimeout : void 0, Py = typeof clearTimeout == "function" ? clearTimeout : void 0, pp = typeof Promise == "function" ? Promise : void 0, Ay = typeof queueMicrotask == "function" ? queueMicrotask : typeof pp < "u" ? function(t) {
    return pp.resolve(null).then(t).catch(Fy);
  } : Gs;
  function Fy(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Ks(t, r) {
    var o = r, l = 0;
    do {
      var d = o.nextSibling;
      if (t.removeChild(o), d && d.nodeType === 8) if (o = d.data, o === "/$") {
        if (l === 0) {
          t.removeChild(d), Ua(r);
          return;
        }
        l--;
      } else o !== "$" && o !== "$?" && o !== "$!" || l++;
      o = d;
    } while (o);
    Ua(r);
  }
  function Vr(t) {
    for (; t != null; t = t.nextSibling) {
      var r = t.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = t.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return t;
  }
  function mp(t) {
    t = t.previousSibling;
    for (var r = 0; t; ) {
      if (t.nodeType === 8) {
        var o = t.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0) return t;
          r--;
        } else o === "/$" && r++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  var Qn = Math.random().toString(36).slice(2), ar = "__reactFiber$" + Qn, eo = "__reactProps$" + Qn, fr = "__reactContainer$" + Qn, Ys = "__reactEvents$" + Qn, Ty = "__reactListeners$" + Qn, Ny = "__reactHandles$" + Qn;
  function hn(t) {
    var r = t[ar];
    if (r) return r;
    for (var o = t.parentNode; o; ) {
      if (r = o[fr] || o[ar]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null) for (t = mp(t); t !== null; ) {
          if (o = t[ar]) return o;
          t = mp(t);
        }
        return r;
      }
      t = o, o = t.parentNode;
    }
    return null;
  }
  function to(t) {
    return t = t[ar] || t[fr], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t;
  }
  function Xn(t) {
    if (t.tag === 5 || t.tag === 6) return t.stateNode;
    throw Error(a(33));
  }
  function Ti(t) {
    return t[eo] || null;
  }
  var Qs = [], Zn = -1;
  function Dr(t) {
    return { current: t };
  }
  function je(t) {
    0 > Zn || (t.current = Qs[Zn], Qs[Zn] = null, Zn--);
  }
  function Le(t, r) {
    Zn++, Qs[Zn] = t.current, t.current = r;
  }
  var Br = {}, ct = Dr(Br), ht = Dr(!1), vn = Br;
  function Jn(t, r) {
    var o = t.type.contextTypes;
    if (!o) return Br;
    var l = t.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === r) return l.__reactInternalMemoizedMaskedChildContext;
    var d = {}, g;
    for (g in o) d[g] = r[g];
    return l && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = r, t.__reactInternalMemoizedMaskedChildContext = d), d;
  }
  function vt(t) {
    return t = t.childContextTypes, t != null;
  }
  function Ni() {
    je(ht), je(ct);
  }
  function gp(t, r, o) {
    if (ct.current !== Br) throw Error(a(168));
    Le(ct, r), Le(ht, o);
  }
  function hp(t, r, o) {
    var l = t.stateNode;
    if (r = r.childContextTypes, typeof l.getChildContext != "function") return o;
    l = l.getChildContext();
    for (var d in l) if (!(d in r)) throw Error(a(108, ze(t) || "Unknown", d));
    return V({}, o, l);
  }
  function Ii(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || Br, vn = ct.current, Le(ct, t), Le(ht, ht.current), !0;
  }
  function vp(t, r, o) {
    var l = t.stateNode;
    if (!l) throw Error(a(169));
    o ? (t = hp(t, r, vn), l.__reactInternalMemoizedMergedChildContext = t, je(ht), je(ct), Le(ct, t)) : je(ht), Le(ht, o);
  }
  var pr = null, Mi = !1, Xs = !1;
  function bp(t) {
    pr === null ? pr = [t] : pr.push(t);
  }
  function Iy(t) {
    Mi = !0, bp(t);
  }
  function Ur() {
    if (!Xs && pr !== null) {
      Xs = !0;
      var t = 0, r = Ne;
      try {
        var o = pr;
        for (Ne = 1; t < o.length; t++) {
          var l = o[t];
          do
            l = l(!0);
          while (l !== null);
        }
        pr = null, Mi = !1;
      } catch (d) {
        throw pr !== null && (pr = pr.slice(t + 1)), wf(ys, Ur), d;
      } finally {
        Ne = r, Xs = !1;
      }
    }
    return null;
  }
  var ea = [], ta = 0, Li = null, Ri = 0, Nt = [], It = 0, bn = null, mr = 1, gr = "";
  function yn(t, r) {
    ea[ta++] = Ri, ea[ta++] = Li, Li = t, Ri = r;
  }
  function yp(t, r, o) {
    Nt[It++] = mr, Nt[It++] = gr, Nt[It++] = bn, bn = t;
    var l = mr;
    t = gr;
    var d = 32 - Ht(l) - 1;
    l &= ~(1 << d), o += 1;
    var g = 32 - Ht(r) + d;
    if (30 < g) {
      var x = d - d % 5;
      g = (l & (1 << x) - 1).toString(32), l >>= x, d -= x, mr = 1 << 32 - Ht(r) + d | o << d | l, gr = g + t;
    } else mr = 1 << g | o << d | l, gr = t;
  }
  function Zs(t) {
    t.return !== null && (yn(t, 1), yp(t, 1, 0));
  }
  function Js(t) {
    for (; t === Li; ) Li = ea[--ta], ea[ta] = null, Ri = ea[--ta], ea[ta] = null;
    for (; t === bn; ) bn = Nt[--It], Nt[It] = null, gr = Nt[--It], Nt[It] = null, mr = Nt[--It], Nt[It] = null;
  }
  var Pt = null, At = null, Ue = !1, qt = null;
  function wp(t, r) {
    var o = jt(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = t, r = t.deletions, r === null ? (t.deletions = [o], t.flags |= 16) : r.push(o);
  }
  function xp(t, r) {
    switch (t.tag) {
      case 5:
        var o = t.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (t.stateNode = r, Pt = t, At = Vr(r.firstChild), !0) : !1;
      case 6:
        return r = t.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (t.stateNode = r, Pt = t, At = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = bn !== null ? { id: mr, overflow: gr } : null, t.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = jt(18, null, null, 0), o.stateNode = r, o.return = t, t.child = o, Pt = t, At = null, !0) : !1;
      default:
        return !1;
    }
  }
  function ec(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
  }
  function tc(t) {
    if (Ue) {
      var r = At;
      if (r) {
        var o = r;
        if (!xp(t, r)) {
          if (ec(t)) throw Error(a(418));
          r = Vr(o.nextSibling);
          var l = Pt;
          r && xp(t, r) ? wp(l, o) : (t.flags = t.flags & -4097 | 2, Ue = !1, Pt = t);
        }
      } else {
        if (ec(t)) throw Error(a(418));
        t.flags = t.flags & -4097 | 2, Ue = !1, Pt = t;
      }
    }
  }
  function kp(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; ) t = t.return;
    Pt = t;
  }
  function ji(t) {
    if (t !== Pt) return !1;
    if (!Ue) return kp(t), Ue = !0, !1;
    var r;
    if ((r = t.tag !== 3) && !(r = t.tag !== 5) && (r = t.type, r = r !== "head" && r !== "body" && !qs(t.type, t.memoizedProps)), r && (r = At)) {
      if (ec(t)) throw _p(), Error(a(418));
      for (; r; ) wp(t, r), r = Vr(r.nextSibling);
    }
    if (kp(t), t.tag === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(a(317));
      e: {
        for (t = t.nextSibling, r = 0; t; ) {
          if (t.nodeType === 8) {
            var o = t.data;
            if (o === "/$") {
              if (r === 0) {
                At = Vr(t.nextSibling);
                break e;
              }
              r--;
            } else o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          t = t.nextSibling;
        }
        At = null;
      }
    } else At = Pt ? Vr(t.stateNode.nextSibling) : null;
    return !0;
  }
  function _p() {
    for (var t = At; t; ) t = Vr(t.nextSibling);
  }
  function ra() {
    At = Pt = null, Ue = !1;
  }
  function rc(t) {
    qt === null ? qt = [t] : qt.push(t);
  }
  var My = W.ReactCurrentBatchConfig;
  function ro(t, r, o) {
    if (t = o.ref, t !== null && typeof t != "function" && typeof t != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1) throw Error(a(309));
          var l = o.stateNode;
        }
        if (!l) throw Error(a(147, t));
        var d = l, g = "" + t;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === g ? r.ref : (r = function(x) {
          var P = d.refs;
          x === null ? delete P[g] : P[g] = x;
        }, r._stringRef = g, r);
      }
      if (typeof t != "string") throw Error(a(284));
      if (!o._owner) throw Error(a(290, t));
    }
    return t;
  }
  function Oi(t, r) {
    throw t = Object.prototype.toString.call(r), Error(a(31, t === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : t));
  }
  function Ep(t) {
    var r = t._init;
    return r(t._payload);
  }
  function Sp(t) {
    function r(B, M) {
      if (t) {
        var H = B.deletions;
        H === null ? (B.deletions = [M], B.flags |= 16) : H.push(M);
      }
    }
    function o(B, M) {
      if (!t) return null;
      for (; M !== null; ) r(B, M), M = M.sibling;
      return null;
    }
    function l(B, M) {
      for (B = /* @__PURE__ */ new Map(); M !== null; ) M.key !== null ? B.set(M.key, M) : B.set(M.index, M), M = M.sibling;
      return B;
    }
    function d(B, M) {
      return B = Xr(B, M), B.index = 0, B.sibling = null, B;
    }
    function g(B, M, H) {
      return B.index = H, t ? (H = B.alternate, H !== null ? (H = H.index, H < M ? (B.flags |= 2, M) : H) : (B.flags |= 2, M)) : (B.flags |= 1048576, M);
    }
    function x(B) {
      return t && B.alternate === null && (B.flags |= 2), B;
    }
    function P(B, M, H, re) {
      return M === null || M.tag !== 6 ? (M = Gc(H, B.mode, re), M.return = B, M) : (M = d(M, H), M.return = B, M);
    }
    function N(B, M, H, re) {
      var de = H.type;
      return de === K ? J(B, M, H.props.children, re, H.key) : M !== null && (M.elementType === de || typeof de == "object" && de !== null && de.$$typeof === L && Ep(de) === M.type) ? (re = d(M, H.props), re.ref = ro(B, M, H), re.return = B, re) : (re = cl(H.type, H.key, H.props, null, B.mode, re), re.ref = ro(B, M, H), re.return = B, re);
    }
    function q(B, M, H, re) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== H.containerInfo || M.stateNode.implementation !== H.implementation ? (M = Kc(H, B.mode, re), M.return = B, M) : (M = d(M, H.children || []), M.return = B, M);
    }
    function J(B, M, H, re, de) {
      return M === null || M.tag !== 7 ? (M = zn(H, B.mode, re, de), M.return = B, M) : (M = d(M, H), M.return = B, M);
    }
    function te(B, M, H) {
      if (typeof M == "string" && M !== "" || typeof M == "number") return M = Gc("" + M, B.mode, H), M.return = B, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case Q:
            return H = cl(M.type, M.key, M.props, null, B.mode, H), H.ref = ro(B, null, M), H.return = B, H;
          case Y:
            return M = Kc(M, B.mode, H), M.return = B, M;
          case L:
            var re = M._init;
            return te(B, re(M._payload), H);
        }
        if (Fa(M) || F(M)) return M = zn(M, B.mode, H, null), M.return = B, M;
        Oi(B, M);
      }
      return null;
    }
    function Z(B, M, H, re) {
      var de = M !== null ? M.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number") return de !== null ? null : P(B, M, "" + H, re);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case Q:
            return H.key === de ? N(B, M, H, re) : null;
          case Y:
            return H.key === de ? q(B, M, H, re) : null;
          case L:
            return de = H._init, Z(
              B,
              M,
              de(H._payload),
              re
            );
        }
        if (Fa(H) || F(H)) return de !== null ? null : J(B, M, H, re, null);
        Oi(B, H);
      }
      return null;
    }
    function le(B, M, H, re, de) {
      if (typeof re == "string" && re !== "" || typeof re == "number") return B = B.get(H) || null, P(M, B, "" + re, de);
      if (typeof re == "object" && re !== null) {
        switch (re.$$typeof) {
          case Q:
            return B = B.get(re.key === null ? H : re.key) || null, N(M, B, re, de);
          case Y:
            return B = B.get(re.key === null ? H : re.key) || null, q(M, B, re, de);
          case L:
            var ge = re._init;
            return le(B, M, H, ge(re._payload), de);
        }
        if (Fa(re) || F(re)) return B = B.get(H) || null, J(M, B, re, de, null);
        Oi(M, re);
      }
      return null;
    }
    function ce(B, M, H, re) {
      for (var de = null, ge = null, he = M, be = M = 0, rt = null; he !== null && be < H.length; be++) {
        he.index > be ? (rt = he, he = null) : rt = he.sibling;
        var Fe = Z(B, he, H[be], re);
        if (Fe === null) {
          he === null && (he = rt);
          break;
        }
        t && he && Fe.alternate === null && r(B, he), M = g(Fe, M, be), ge === null ? de = Fe : ge.sibling = Fe, ge = Fe, he = rt;
      }
      if (be === H.length) return o(B, he), Ue && yn(B, be), de;
      if (he === null) {
        for (; be < H.length; be++) he = te(B, H[be], re), he !== null && (M = g(he, M, be), ge === null ? de = he : ge.sibling = he, ge = he);
        return Ue && yn(B, be), de;
      }
      for (he = l(B, he); be < H.length; be++) rt = le(he, B, be, H[be], re), rt !== null && (t && rt.alternate !== null && he.delete(rt.key === null ? be : rt.key), M = g(rt, M, be), ge === null ? de = rt : ge.sibling = rt, ge = rt);
      return t && he.forEach(function(Zr) {
        return r(B, Zr);
      }), Ue && yn(B, be), de;
    }
    function ue(B, M, H, re) {
      var de = F(H);
      if (typeof de != "function") throw Error(a(150));
      if (H = de.call(H), H == null) throw Error(a(151));
      for (var ge = de = null, he = M, be = M = 0, rt = null, Fe = H.next(); he !== null && !Fe.done; be++, Fe = H.next()) {
        he.index > be ? (rt = he, he = null) : rt = he.sibling;
        var Zr = Z(B, he, Fe.value, re);
        if (Zr === null) {
          he === null && (he = rt);
          break;
        }
        t && he && Zr.alternate === null && r(B, he), M = g(Zr, M, be), ge === null ? de = Zr : ge.sibling = Zr, ge = Zr, he = rt;
      }
      if (Fe.done) return o(
        B,
        he
      ), Ue && yn(B, be), de;
      if (he === null) {
        for (; !Fe.done; be++, Fe = H.next()) Fe = te(B, Fe.value, re), Fe !== null && (M = g(Fe, M, be), ge === null ? de = Fe : ge.sibling = Fe, ge = Fe);
        return Ue && yn(B, be), de;
      }
      for (he = l(B, he); !Fe.done; be++, Fe = H.next()) Fe = le(he, B, be, Fe.value, re), Fe !== null && (t && Fe.alternate !== null && he.delete(Fe.key === null ? be : Fe.key), M = g(Fe, M, be), ge === null ? de = Fe : ge.sibling = Fe, ge = Fe);
      return t && he.forEach(function(mw) {
        return r(B, mw);
      }), Ue && yn(B, be), de;
    }
    function Ye(B, M, H, re) {
      if (typeof H == "object" && H !== null && H.type === K && H.key === null && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case Q:
            e: {
              for (var de = H.key, ge = M; ge !== null; ) {
                if (ge.key === de) {
                  if (de = H.type, de === K) {
                    if (ge.tag === 7) {
                      o(B, ge.sibling), M = d(ge, H.props.children), M.return = B, B = M;
                      break e;
                    }
                  } else if (ge.elementType === de || typeof de == "object" && de !== null && de.$$typeof === L && Ep(de) === ge.type) {
                    o(B, ge.sibling), M = d(ge, H.props), M.ref = ro(B, ge, H), M.return = B, B = M;
                    break e;
                  }
                  o(B, ge);
                  break;
                } else r(B, ge);
                ge = ge.sibling;
              }
              H.type === K ? (M = zn(H.props.children, B.mode, re, H.key), M.return = B, B = M) : (re = cl(H.type, H.key, H.props, null, B.mode, re), re.ref = ro(B, M, H), re.return = B, B = re);
            }
            return x(B);
          case Y:
            e: {
              for (ge = H.key; M !== null; ) {
                if (M.key === ge) if (M.tag === 4 && M.stateNode.containerInfo === H.containerInfo && M.stateNode.implementation === H.implementation) {
                  o(B, M.sibling), M = d(M, H.children || []), M.return = B, B = M;
                  break e;
                } else {
                  o(B, M);
                  break;
                }
                else r(B, M);
                M = M.sibling;
              }
              M = Kc(H, B.mode, re), M.return = B, B = M;
            }
            return x(B);
          case L:
            return ge = H._init, Ye(B, M, ge(H._payload), re);
        }
        if (Fa(H)) return ce(B, M, H, re);
        if (F(H)) return ue(B, M, H, re);
        Oi(B, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" ? (H = "" + H, M !== null && M.tag === 6 ? (o(B, M.sibling), M = d(M, H), M.return = B, B = M) : (o(B, M), M = Gc(H, B.mode, re), M.return = B, B = M), x(B)) : o(B, M);
    }
    return Ye;
  }
  var na = Sp(!0), Cp = Sp(!1), Vi = Dr(null), Di = null, aa = null, nc = null;
  function ac() {
    nc = aa = Di = null;
  }
  function oc(t) {
    var r = Vi.current;
    je(Vi), t._currentValue = r;
  }
  function ic(t, r, o) {
    for (; t !== null; ) {
      var l = t.alternate;
      if ((t.childLanes & r) !== r ? (t.childLanes |= r, l !== null && (l.childLanes |= r)) : l !== null && (l.childLanes & r) !== r && (l.childLanes |= r), t === o) break;
      t = t.return;
    }
  }
  function oa(t, r) {
    Di = t, nc = aa = null, t = t.dependencies, t !== null && t.firstContext !== null && ((t.lanes & r) !== 0 && (bt = !0), t.firstContext = null);
  }
  function Mt(t) {
    var r = t._currentValue;
    if (nc !== t) if (t = { context: t, memoizedValue: r, next: null }, aa === null) {
      if (Di === null) throw Error(a(308));
      aa = t, Di.dependencies = { lanes: 0, firstContext: t };
    } else aa = aa.next = t;
    return r;
  }
  var wn = null;
  function lc(t) {
    wn === null ? wn = [t] : wn.push(t);
  }
  function zp(t, r, o, l) {
    var d = r.interleaved;
    return d === null ? (o.next = o, lc(r)) : (o.next = d.next, d.next = o), r.interleaved = o, hr(t, l);
  }
  function hr(t, r) {
    t.lanes |= r;
    var o = t.alternate;
    for (o !== null && (o.lanes |= r), o = t, t = t.return; t !== null; ) t.childLanes |= r, o = t.alternate, o !== null && (o.childLanes |= r), o = t, t = t.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var Hr = !1;
  function sc(t) {
    t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function $p(t, r) {
    t = t.updateQueue, r.updateQueue === t && (r.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, effects: t.effects });
  }
  function vr(t, r) {
    return { eventTime: t, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Wr(t, r, o) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Ae & 2) !== 0) {
      var d = l.pending;
      return d === null ? r.next = r : (r.next = d.next, d.next = r), l.pending = r, hr(t, o);
    }
    return d = l.interleaved, d === null ? (r.next = r, lc(l)) : (r.next = d.next, d.next = r), l.interleaved = r, hr(t, o);
  }
  function Bi(t, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var l = r.lanes;
      l &= t.pendingLanes, o |= l, r.lanes = o, ks(t, o);
    }
  }
  function Pp(t, r) {
    var o = t.updateQueue, l = t.alternate;
    if (l !== null && (l = l.updateQueue, o === l)) {
      var d = null, g = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var x = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          g === null ? d = g = x : g = g.next = x, o = o.next;
        } while (o !== null);
        g === null ? d = g = r : g = g.next = r;
      } else d = g = r;
      o = { baseState: l.baseState, firstBaseUpdate: d, lastBaseUpdate: g, shared: l.shared, effects: l.effects }, t.updateQueue = o;
      return;
    }
    t = o.lastBaseUpdate, t === null ? o.firstBaseUpdate = r : t.next = r, o.lastBaseUpdate = r;
  }
  function Ui(t, r, o, l) {
    var d = t.updateQueue;
    Hr = !1;
    var g = d.firstBaseUpdate, x = d.lastBaseUpdate, P = d.shared.pending;
    if (P !== null) {
      d.shared.pending = null;
      var N = P, q = N.next;
      N.next = null, x === null ? g = q : x.next = q, x = N;
      var J = t.alternate;
      J !== null && (J = J.updateQueue, P = J.lastBaseUpdate, P !== x && (P === null ? J.firstBaseUpdate = q : P.next = q, J.lastBaseUpdate = N));
    }
    if (g !== null) {
      var te = d.baseState;
      x = 0, J = q = N = null, P = g;
      do {
        var Z = P.lane, le = P.eventTime;
        if ((l & Z) === Z) {
          J !== null && (J = J.next = {
            eventTime: le,
            lane: 0,
            tag: P.tag,
            payload: P.payload,
            callback: P.callback,
            next: null
          });
          e: {
            var ce = t, ue = P;
            switch (Z = r, le = o, ue.tag) {
              case 1:
                if (ce = ue.payload, typeof ce == "function") {
                  te = ce.call(le, te, Z);
                  break e;
                }
                te = ce;
                break e;
              case 3:
                ce.flags = ce.flags & -65537 | 128;
              case 0:
                if (ce = ue.payload, Z = typeof ce == "function" ? ce.call(le, te, Z) : ce, Z == null) break e;
                te = V({}, te, Z);
                break e;
              case 2:
                Hr = !0;
            }
          }
          P.callback !== null && P.lane !== 0 && (t.flags |= 64, Z = d.effects, Z === null ? d.effects = [P] : Z.push(P));
        } else le = { eventTime: le, lane: Z, tag: P.tag, payload: P.payload, callback: P.callback, next: null }, J === null ? (q = J = le, N = te) : J = J.next = le, x |= Z;
        if (P = P.next, P === null) {
          if (P = d.shared.pending, P === null) break;
          Z = P, P = Z.next, Z.next = null, d.lastBaseUpdate = Z, d.shared.pending = null;
        }
      } while (!0);
      if (J === null && (N = te), d.baseState = N, d.firstBaseUpdate = q, d.lastBaseUpdate = J, r = d.shared.interleaved, r !== null) {
        d = r;
        do
          x |= d.lane, d = d.next;
        while (d !== r);
      } else g === null && (d.shared.lanes = 0);
      _n |= x, t.lanes = x, t.memoizedState = te;
    }
  }
  function Ap(t, r, o) {
    if (t = r.effects, r.effects = null, t !== null) for (r = 0; r < t.length; r++) {
      var l = t[r], d = l.callback;
      if (d !== null) {
        if (l.callback = null, l = o, typeof d != "function") throw Error(a(191, d));
        d.call(l);
      }
    }
  }
  var no = {}, or = Dr(no), ao = Dr(no), oo = Dr(no);
  function xn(t) {
    if (t === no) throw Error(a(174));
    return t;
  }
  function cc(t, r) {
    switch (Le(oo, r), Le(ao, t), Le(or, no), t = r.nodeType, t) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : us(null, "");
        break;
      default:
        t = t === 8 ? r.parentNode : r, r = t.namespaceURI || null, t = t.tagName, r = us(r, t);
    }
    je(or), Le(or, r);
  }
  function ia() {
    je(or), je(ao), je(oo);
  }
  function Fp(t) {
    xn(oo.current);
    var r = xn(or.current), o = us(r, t.type);
    r !== o && (Le(ao, t), Le(or, o));
  }
  function uc(t) {
    ao.current === t && (je(or), je(ao));
  }
  var He = Dr(0);
  function Hi(t) {
    for (var r = t; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var dc = [];
  function fc() {
    for (var t = 0; t < dc.length; t++) dc[t]._workInProgressVersionPrimary = null;
    dc.length = 0;
  }
  var Wi = W.ReactCurrentDispatcher, pc = W.ReactCurrentBatchConfig, kn = 0, We = null, Xe = null, et = null, qi = !1, io = !1, lo = 0, Ly = 0;
  function ut() {
    throw Error(a(321));
  }
  function mc(t, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < t.length; o++) if (!Wt(t[o], r[o])) return !1;
    return !0;
  }
  function gc(t, r, o, l, d, g) {
    if (kn = g, We = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Wi.current = t === null || t.memoizedState === null ? Vy : Dy, t = o(l, d), io) {
      g = 0;
      do {
        if (io = !1, lo = 0, 25 <= g) throw Error(a(301));
        g += 1, et = Xe = null, r.updateQueue = null, Wi.current = By, t = o(l, d);
      } while (io);
    }
    if (Wi.current = Yi, r = Xe !== null && Xe.next !== null, kn = 0, et = Xe = We = null, qi = !1, r) throw Error(a(300));
    return t;
  }
  function hc() {
    var t = lo !== 0;
    return lo = 0, t;
  }
  function ir() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return et === null ? We.memoizedState = et = t : et = et.next = t, et;
  }
  function Lt() {
    if (Xe === null) {
      var t = We.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Xe.next;
    var r = et === null ? We.memoizedState : et.next;
    if (r !== null) et = r, Xe = t;
    else {
      if (t === null) throw Error(a(310));
      Xe = t, t = { memoizedState: Xe.memoizedState, baseState: Xe.baseState, baseQueue: Xe.baseQueue, queue: Xe.queue, next: null }, et === null ? We.memoizedState = et = t : et = et.next = t;
    }
    return et;
  }
  function so(t, r) {
    return typeof r == "function" ? r(t) : r;
  }
  function vc(t) {
    var r = Lt(), o = r.queue;
    if (o === null) throw Error(a(311));
    o.lastRenderedReducer = t;
    var l = Xe, d = l.baseQueue, g = o.pending;
    if (g !== null) {
      if (d !== null) {
        var x = d.next;
        d.next = g.next, g.next = x;
      }
      l.baseQueue = d = g, o.pending = null;
    }
    if (d !== null) {
      g = d.next, l = l.baseState;
      var P = x = null, N = null, q = g;
      do {
        var J = q.lane;
        if ((kn & J) === J) N !== null && (N = N.next = { lane: 0, action: q.action, hasEagerState: q.hasEagerState, eagerState: q.eagerState, next: null }), l = q.hasEagerState ? q.eagerState : t(l, q.action);
        else {
          var te = {
            lane: J,
            action: q.action,
            hasEagerState: q.hasEagerState,
            eagerState: q.eagerState,
            next: null
          };
          N === null ? (P = N = te, x = l) : N = N.next = te, We.lanes |= J, _n |= J;
        }
        q = q.next;
      } while (q !== null && q !== g);
      N === null ? x = l : N.next = P, Wt(l, r.memoizedState) || (bt = !0), r.memoizedState = l, r.baseState = x, r.baseQueue = N, o.lastRenderedState = l;
    }
    if (t = o.interleaved, t !== null) {
      d = t;
      do
        g = d.lane, We.lanes |= g, _n |= g, d = d.next;
      while (d !== t);
    } else d === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function bc(t) {
    var r = Lt(), o = r.queue;
    if (o === null) throw Error(a(311));
    o.lastRenderedReducer = t;
    var l = o.dispatch, d = o.pending, g = r.memoizedState;
    if (d !== null) {
      o.pending = null;
      var x = d = d.next;
      do
        g = t(g, x.action), x = x.next;
      while (x !== d);
      Wt(g, r.memoizedState) || (bt = !0), r.memoizedState = g, r.baseQueue === null && (r.baseState = g), o.lastRenderedState = g;
    }
    return [g, l];
  }
  function Tp() {
  }
  function Np(t, r) {
    var o = We, l = Lt(), d = r(), g = !Wt(l.memoizedState, d);
    if (g && (l.memoizedState = d, bt = !0), l = l.queue, yc(Lp.bind(null, o, l, t), [t]), l.getSnapshot !== r || g || et !== null && et.memoizedState.tag & 1) {
      if (o.flags |= 2048, co(9, Mp.bind(null, o, l, d, r), void 0, null), tt === null) throw Error(a(349));
      (kn & 30) !== 0 || Ip(o, r, d);
    }
    return d;
  }
  function Ip(t, r, o) {
    t.flags |= 16384, t = { getSnapshot: r, value: o }, r = We.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, We.updateQueue = r, r.stores = [t]) : (o = r.stores, o === null ? r.stores = [t] : o.push(t));
  }
  function Mp(t, r, o, l) {
    r.value = o, r.getSnapshot = l, Rp(r) && jp(t);
  }
  function Lp(t, r, o) {
    return o(function() {
      Rp(r) && jp(t);
    });
  }
  function Rp(t) {
    var r = t.getSnapshot;
    t = t.value;
    try {
      var o = r();
      return !Wt(t, o);
    } catch {
      return !0;
    }
  }
  function jp(t) {
    var r = hr(t, 1);
    r !== null && Qt(r, t, 1, -1);
  }
  function Op(t) {
    var r = ir();
    return typeof t == "function" && (t = t()), r.memoizedState = r.baseState = t, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: so, lastRenderedState: t }, r.queue = t, t = t.dispatch = Oy.bind(null, We, t), [r.memoizedState, t];
  }
  function co(t, r, o, l) {
    return t = { tag: t, create: r, destroy: o, deps: l, next: null }, r = We.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, We.updateQueue = r, r.lastEffect = t.next = t) : (o = r.lastEffect, o === null ? r.lastEffect = t.next = t : (l = o.next, o.next = t, t.next = l, r.lastEffect = t)), t;
  }
  function Vp() {
    return Lt().memoizedState;
  }
  function Gi(t, r, o, l) {
    var d = ir();
    We.flags |= t, d.memoizedState = co(1 | r, o, void 0, l === void 0 ? null : l);
  }
  function Ki(t, r, o, l) {
    var d = Lt();
    l = l === void 0 ? null : l;
    var g = void 0;
    if (Xe !== null) {
      var x = Xe.memoizedState;
      if (g = x.destroy, l !== null && mc(l, x.deps)) {
        d.memoizedState = co(r, o, g, l);
        return;
      }
    }
    We.flags |= t, d.memoizedState = co(1 | r, o, g, l);
  }
  function Dp(t, r) {
    return Gi(8390656, 8, t, r);
  }
  function yc(t, r) {
    return Ki(2048, 8, t, r);
  }
  function Bp(t, r) {
    return Ki(4, 2, t, r);
  }
  function Up(t, r) {
    return Ki(4, 4, t, r);
  }
  function Hp(t, r) {
    if (typeof r == "function") return t = t(), r(t), function() {
      r(null);
    };
    if (r != null) return t = t(), r.current = t, function() {
      r.current = null;
    };
  }
  function Wp(t, r, o) {
    return o = o != null ? o.concat([t]) : null, Ki(4, 4, Hp.bind(null, r, t), o);
  }
  function wc() {
  }
  function qp(t, r) {
    var o = Lt();
    r = r === void 0 ? null : r;
    var l = o.memoizedState;
    return l !== null && r !== null && mc(r, l[1]) ? l[0] : (o.memoizedState = [t, r], t);
  }
  function Gp(t, r) {
    var o = Lt();
    r = r === void 0 ? null : r;
    var l = o.memoizedState;
    return l !== null && r !== null && mc(r, l[1]) ? l[0] : (t = t(), o.memoizedState = [t, r], t);
  }
  function Kp(t, r, o) {
    return (kn & 21) === 0 ? (t.baseState && (t.baseState = !1, bt = !0), t.memoizedState = o) : (Wt(o, r) || (o = Ef(), We.lanes |= o, _n |= o, t.baseState = !0), r);
  }
  function Ry(t, r) {
    var o = Ne;
    Ne = o !== 0 && 4 > o ? o : 4, t(!0);
    var l = pc.transition;
    pc.transition = {};
    try {
      t(!1), r();
    } finally {
      Ne = o, pc.transition = l;
    }
  }
  function Yp() {
    return Lt().memoizedState;
  }
  function jy(t, r, o) {
    var l = Yr(t);
    if (o = { lane: l, action: o, hasEagerState: !1, eagerState: null, next: null }, Qp(t)) Xp(r, o);
    else if (o = zp(t, r, o, l), o !== null) {
      var d = gt();
      Qt(o, t, l, d), Zp(o, r, l);
    }
  }
  function Oy(t, r, o) {
    var l = Yr(t), d = { lane: l, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (Qp(t)) Xp(r, d);
    else {
      var g = t.alternate;
      if (t.lanes === 0 && (g === null || g.lanes === 0) && (g = r.lastRenderedReducer, g !== null)) try {
        var x = r.lastRenderedState, P = g(x, o);
        if (d.hasEagerState = !0, d.eagerState = P, Wt(P, x)) {
          var N = r.interleaved;
          N === null ? (d.next = d, lc(r)) : (d.next = N.next, N.next = d), r.interleaved = d;
          return;
        }
      } catch {
      } finally {
      }
      o = zp(t, r, d, l), o !== null && (d = gt(), Qt(o, t, l, d), Zp(o, r, l));
    }
  }
  function Qp(t) {
    var r = t.alternate;
    return t === We || r !== null && r === We;
  }
  function Xp(t, r) {
    io = qi = !0;
    var o = t.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), t.pending = r;
  }
  function Zp(t, r, o) {
    if ((o & 4194240) !== 0) {
      var l = r.lanes;
      l &= t.pendingLanes, o |= l, r.lanes = o, ks(t, o);
    }
  }
  var Yi = { readContext: Mt, useCallback: ut, useContext: ut, useEffect: ut, useImperativeHandle: ut, useInsertionEffect: ut, useLayoutEffect: ut, useMemo: ut, useReducer: ut, useRef: ut, useState: ut, useDebugValue: ut, useDeferredValue: ut, useTransition: ut, useMutableSource: ut, useSyncExternalStore: ut, useId: ut, unstable_isNewReconciler: !1 }, Vy = { readContext: Mt, useCallback: function(t, r) {
    return ir().memoizedState = [t, r === void 0 ? null : r], t;
  }, useContext: Mt, useEffect: Dp, useImperativeHandle: function(t, r, o) {
    return o = o != null ? o.concat([t]) : null, Gi(
      4194308,
      4,
      Hp.bind(null, r, t),
      o
    );
  }, useLayoutEffect: function(t, r) {
    return Gi(4194308, 4, t, r);
  }, useInsertionEffect: function(t, r) {
    return Gi(4, 2, t, r);
  }, useMemo: function(t, r) {
    var o = ir();
    return r = r === void 0 ? null : r, t = t(), o.memoizedState = [t, r], t;
  }, useReducer: function(t, r, o) {
    var l = ir();
    return r = o !== void 0 ? o(r) : r, l.memoizedState = l.baseState = r, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: r }, l.queue = t, t = t.dispatch = jy.bind(null, We, t), [l.memoizedState, t];
  }, useRef: function(t) {
    var r = ir();
    return t = { current: t }, r.memoizedState = t;
  }, useState: Op, useDebugValue: wc, useDeferredValue: function(t) {
    return ir().memoizedState = t;
  }, useTransition: function() {
    var t = Op(!1), r = t[0];
    return t = Ry.bind(null, t[1]), ir().memoizedState = t, [r, t];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(t, r, o) {
    var l = We, d = ir();
    if (Ue) {
      if (o === void 0) throw Error(a(407));
      o = o();
    } else {
      if (o = r(), tt === null) throw Error(a(349));
      (kn & 30) !== 0 || Ip(l, r, o);
    }
    d.memoizedState = o;
    var g = { value: o, getSnapshot: r };
    return d.queue = g, Dp(Lp.bind(
      null,
      l,
      g,
      t
    ), [t]), l.flags |= 2048, co(9, Mp.bind(null, l, g, o, r), void 0, null), o;
  }, useId: function() {
    var t = ir(), r = tt.identifierPrefix;
    if (Ue) {
      var o = gr, l = mr;
      o = (l & ~(1 << 32 - Ht(l) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = lo++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else o = Ly++, r = ":" + r + "r" + o.toString(32) + ":";
    return t.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Dy = {
    readContext: Mt,
    useCallback: qp,
    useContext: Mt,
    useEffect: yc,
    useImperativeHandle: Wp,
    useInsertionEffect: Bp,
    useLayoutEffect: Up,
    useMemo: Gp,
    useReducer: vc,
    useRef: Vp,
    useState: function() {
      return vc(so);
    },
    useDebugValue: wc,
    useDeferredValue: function(t) {
      var r = Lt();
      return Kp(r, Xe.memoizedState, t);
    },
    useTransition: function() {
      var t = vc(so)[0], r = Lt().memoizedState;
      return [t, r];
    },
    useMutableSource: Tp,
    useSyncExternalStore: Np,
    useId: Yp,
    unstable_isNewReconciler: !1
  }, By = { readContext: Mt, useCallback: qp, useContext: Mt, useEffect: yc, useImperativeHandle: Wp, useInsertionEffect: Bp, useLayoutEffect: Up, useMemo: Gp, useReducer: bc, useRef: Vp, useState: function() {
    return bc(so);
  }, useDebugValue: wc, useDeferredValue: function(t) {
    var r = Lt();
    return Xe === null ? r.memoizedState = t : Kp(r, Xe.memoizedState, t);
  }, useTransition: function() {
    var t = bc(so)[0], r = Lt().memoizedState;
    return [t, r];
  }, useMutableSource: Tp, useSyncExternalStore: Np, useId: Yp, unstable_isNewReconciler: !1 };
  function Gt(t, r) {
    if (t && t.defaultProps) {
      r = V({}, r), t = t.defaultProps;
      for (var o in t) r[o] === void 0 && (r[o] = t[o]);
      return r;
    }
    return r;
  }
  function xc(t, r, o, l) {
    r = t.memoizedState, o = o(l, r), o = o == null ? r : V({}, r, o), t.memoizedState = o, t.lanes === 0 && (t.updateQueue.baseState = o);
  }
  var Qi = { isMounted: function(t) {
    return (t = t._reactInternals) ? gn(t) === t : !1;
  }, enqueueSetState: function(t, r, o) {
    t = t._reactInternals;
    var l = gt(), d = Yr(t), g = vr(l, d);
    g.payload = r, o != null && (g.callback = o), r = Wr(t, g, d), r !== null && (Qt(r, t, d, l), Bi(r, t, d));
  }, enqueueReplaceState: function(t, r, o) {
    t = t._reactInternals;
    var l = gt(), d = Yr(t), g = vr(l, d);
    g.tag = 1, g.payload = r, o != null && (g.callback = o), r = Wr(t, g, d), r !== null && (Qt(r, t, d, l), Bi(r, t, d));
  }, enqueueForceUpdate: function(t, r) {
    t = t._reactInternals;
    var o = gt(), l = Yr(t), d = vr(o, l);
    d.tag = 2, r != null && (d.callback = r), r = Wr(t, d, l), r !== null && (Qt(r, t, l, o), Bi(r, t, l));
  } };
  function Jp(t, r, o, l, d, g, x) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, g, x) : r.prototype && r.prototype.isPureReactComponent ? !Ya(o, l) || !Ya(d, g) : !0;
  }
  function em(t, r, o) {
    var l = !1, d = Br, g = r.contextType;
    return typeof g == "object" && g !== null ? g = Mt(g) : (d = vt(r) ? vn : ct.current, l = r.contextTypes, g = (l = l != null) ? Jn(t, d) : Br), r = new r(o, g), t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Qi, t.stateNode = r, r._reactInternals = t, l && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = d, t.__reactInternalMemoizedMaskedChildContext = g), r;
  }
  function tm(t, r, o, l) {
    t = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, l), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, l), r.state !== t && Qi.enqueueReplaceState(r, r.state, null);
  }
  function kc(t, r, o, l) {
    var d = t.stateNode;
    d.props = o, d.state = t.memoizedState, d.refs = {}, sc(t);
    var g = r.contextType;
    typeof g == "object" && g !== null ? d.context = Mt(g) : (g = vt(r) ? vn : ct.current, d.context = Jn(t, g)), d.state = t.memoizedState, g = r.getDerivedStateFromProps, typeof g == "function" && (xc(t, r, g, o), d.state = t.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (r = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), r !== d.state && Qi.enqueueReplaceState(d, d.state, null), Ui(t, o, d, l), d.state = t.memoizedState), typeof d.componentDidMount == "function" && (t.flags |= 4194308);
  }
  function la(t, r) {
    try {
      var o = "", l = r;
      do
        o += ve(l), l = l.return;
      while (l);
      var d = o;
    } catch (g) {
      d = `
Error generating stack: ` + g.message + `
` + g.stack;
    }
    return { value: t, source: r, stack: d, digest: null };
  }
  function _c(t, r, o) {
    return { value: t, source: null, stack: o ?? null, digest: r ?? null };
  }
  function Ec(t, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var Uy = typeof WeakMap == "function" ? WeakMap : Map;
  function rm(t, r, o) {
    o = vr(-1, o), o.tag = 3, o.payload = { element: null };
    var l = r.value;
    return o.callback = function() {
      nl || (nl = !0, Oc = l), Ec(t, r);
    }, o;
  }
  function nm(t, r, o) {
    o = vr(-1, o), o.tag = 3;
    var l = t.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var d = r.value;
      o.payload = function() {
        return l(d);
      }, o.callback = function() {
        Ec(t, r);
      };
    }
    var g = t.stateNode;
    return g !== null && typeof g.componentDidCatch == "function" && (o.callback = function() {
      Ec(t, r), typeof l != "function" && (Gr === null ? Gr = /* @__PURE__ */ new Set([this]) : Gr.add(this));
      var x = r.stack;
      this.componentDidCatch(r.value, { componentStack: x !== null ? x : "" });
    }), o;
  }
  function am(t, r, o) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new Uy();
      var d = /* @__PURE__ */ new Set();
      l.set(r, d);
    } else d = l.get(r), d === void 0 && (d = /* @__PURE__ */ new Set(), l.set(r, d));
    d.has(o) || (d.add(o), t = nw.bind(null, t, r, o), r.then(t, t));
  }
  function om(t) {
    do {
      var r;
      if ((r = t.tag === 13) && (r = t.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function im(t, r, o, l, d) {
    return (t.mode & 1) === 0 ? (t === r ? t.flags |= 65536 : (t.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = vr(-1, 1), r.tag = 2, Wr(o, r, 1))), o.lanes |= 1), t) : (t.flags |= 65536, t.lanes = d, t);
  }
  var Hy = W.ReactCurrentOwner, bt = !1;
  function mt(t, r, o, l) {
    r.child = t === null ? Cp(r, null, o, l) : na(r, t.child, o, l);
  }
  function lm(t, r, o, l, d) {
    o = o.render;
    var g = r.ref;
    return oa(r, d), l = gc(t, r, o, l, g, d), o = hc(), t !== null && !bt ? (r.updateQueue = t.updateQueue, r.flags &= -2053, t.lanes &= ~d, br(t, r, d)) : (Ue && o && Zs(r), r.flags |= 1, mt(t, r, l, d), r.child);
  }
  function sm(t, r, o, l, d) {
    if (t === null) {
      var g = o.type;
      return typeof g == "function" && !qc(g) && g.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = g, cm(t, r, g, l, d)) : (t = cl(o.type, null, l, r, r.mode, d), t.ref = r.ref, t.return = r, r.child = t);
    }
    if (g = t.child, (t.lanes & d) === 0) {
      var x = g.memoizedProps;
      if (o = o.compare, o = o !== null ? o : Ya, o(x, l) && t.ref === r.ref) return br(t, r, d);
    }
    return r.flags |= 1, t = Xr(g, l), t.ref = r.ref, t.return = r, r.child = t;
  }
  function cm(t, r, o, l, d) {
    if (t !== null) {
      var g = t.memoizedProps;
      if (Ya(g, l) && t.ref === r.ref) if (bt = !1, r.pendingProps = l = g, (t.lanes & d) !== 0) (t.flags & 131072) !== 0 && (bt = !0);
      else return r.lanes = t.lanes, br(t, r, d);
    }
    return Sc(t, r, o, l, d);
  }
  function um(t, r, o) {
    var l = r.pendingProps, d = l.children, g = t !== null ? t.memoizedState : null;
    if (l.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Le(ca, Ft), Ft |= o;
    else {
      if ((o & 1073741824) === 0) return t = g !== null ? g.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: t, cachePool: null, transitions: null }, r.updateQueue = null, Le(ca, Ft), Ft |= t, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, l = g !== null ? g.baseLanes : o, Le(ca, Ft), Ft |= l;
    }
    else g !== null ? (l = g.baseLanes | o, r.memoizedState = null) : l = o, Le(ca, Ft), Ft |= l;
    return mt(t, r, d, o), r.child;
  }
  function dm(t, r) {
    var o = r.ref;
    (t === null && o !== null || t !== null && t.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Sc(t, r, o, l, d) {
    var g = vt(o) ? vn : ct.current;
    return g = Jn(r, g), oa(r, d), o = gc(t, r, o, l, g, d), l = hc(), t !== null && !bt ? (r.updateQueue = t.updateQueue, r.flags &= -2053, t.lanes &= ~d, br(t, r, d)) : (Ue && l && Zs(r), r.flags |= 1, mt(t, r, o, d), r.child);
  }
  function fm(t, r, o, l, d) {
    if (vt(o)) {
      var g = !0;
      Ii(r);
    } else g = !1;
    if (oa(r, d), r.stateNode === null) Zi(t, r), em(r, o, l), kc(r, o, l, d), l = !0;
    else if (t === null) {
      var x = r.stateNode, P = r.memoizedProps;
      x.props = P;
      var N = x.context, q = o.contextType;
      typeof q == "object" && q !== null ? q = Mt(q) : (q = vt(o) ? vn : ct.current, q = Jn(r, q));
      var J = o.getDerivedStateFromProps, te = typeof J == "function" || typeof x.getSnapshotBeforeUpdate == "function";
      te || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (P !== l || N !== q) && tm(r, x, l, q), Hr = !1;
      var Z = r.memoizedState;
      x.state = Z, Ui(r, l, x, d), N = r.memoizedState, P !== l || Z !== N || ht.current || Hr ? (typeof J == "function" && (xc(r, o, J, l), N = r.memoizedState), (P = Hr || Jp(r, o, P, l, Z, N, q)) ? (te || typeof x.UNSAFE_componentWillMount != "function" && typeof x.componentWillMount != "function" || (typeof x.componentWillMount == "function" && x.componentWillMount(), typeof x.UNSAFE_componentWillMount == "function" && x.UNSAFE_componentWillMount()), typeof x.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof x.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = l, r.memoizedState = N), x.props = l, x.state = N, x.context = q, l = P) : (typeof x.componentDidMount == "function" && (r.flags |= 4194308), l = !1);
    } else {
      x = r.stateNode, $p(t, r), P = r.memoizedProps, q = r.type === r.elementType ? P : Gt(r.type, P), x.props = q, te = r.pendingProps, Z = x.context, N = o.contextType, typeof N == "object" && N !== null ? N = Mt(N) : (N = vt(o) ? vn : ct.current, N = Jn(r, N));
      var le = o.getDerivedStateFromProps;
      (J = typeof le == "function" || typeof x.getSnapshotBeforeUpdate == "function") || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (P !== te || Z !== N) && tm(r, x, l, N), Hr = !1, Z = r.memoizedState, x.state = Z, Ui(r, l, x, d);
      var ce = r.memoizedState;
      P !== te || Z !== ce || ht.current || Hr ? (typeof le == "function" && (xc(r, o, le, l), ce = r.memoizedState), (q = Hr || Jp(r, o, q, l, Z, ce, N) || !1) ? (J || typeof x.UNSAFE_componentWillUpdate != "function" && typeof x.componentWillUpdate != "function" || (typeof x.componentWillUpdate == "function" && x.componentWillUpdate(l, ce, N), typeof x.UNSAFE_componentWillUpdate == "function" && x.UNSAFE_componentWillUpdate(l, ce, N)), typeof x.componentDidUpdate == "function" && (r.flags |= 4), typeof x.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof x.componentDidUpdate != "function" || P === t.memoizedProps && Z === t.memoizedState || (r.flags |= 4), typeof x.getSnapshotBeforeUpdate != "function" || P === t.memoizedProps && Z === t.memoizedState || (r.flags |= 1024), r.memoizedProps = l, r.memoizedState = ce), x.props = l, x.state = ce, x.context = N, l = q) : (typeof x.componentDidUpdate != "function" || P === t.memoizedProps && Z === t.memoizedState || (r.flags |= 4), typeof x.getSnapshotBeforeUpdate != "function" || P === t.memoizedProps && Z === t.memoizedState || (r.flags |= 1024), l = !1);
    }
    return Cc(t, r, o, l, g, d);
  }
  function Cc(t, r, o, l, d, g) {
    dm(t, r);
    var x = (r.flags & 128) !== 0;
    if (!l && !x) return d && vp(r, o, !1), br(t, r, g);
    l = r.stateNode, Hy.current = r;
    var P = x && typeof o.getDerivedStateFromError != "function" ? null : l.render();
    return r.flags |= 1, t !== null && x ? (r.child = na(r, t.child, null, g), r.child = na(r, null, P, g)) : mt(t, r, P, g), r.memoizedState = l.state, d && vp(r, o, !0), r.child;
  }
  function pm(t) {
    var r = t.stateNode;
    r.pendingContext ? gp(t, r.pendingContext, r.pendingContext !== r.context) : r.context && gp(t, r.context, !1), cc(t, r.containerInfo);
  }
  function mm(t, r, o, l, d) {
    return ra(), rc(d), r.flags |= 256, mt(t, r, o, l), r.child;
  }
  var zc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function $c(t) {
    return { baseLanes: t, cachePool: null, transitions: null };
  }
  function gm(t, r, o) {
    var l = r.pendingProps, d = He.current, g = !1, x = (r.flags & 128) !== 0, P;
    if ((P = x) || (P = t !== null && t.memoizedState === null ? !1 : (d & 2) !== 0), P ? (g = !0, r.flags &= -129) : (t === null || t.memoizedState !== null) && (d |= 1), Le(He, d & 1), t === null)
      return tc(r), t = r.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : t.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (x = l.children, t = l.fallback, g ? (l = r.mode, g = r.child, x = { mode: "hidden", children: x }, (l & 1) === 0 && g !== null ? (g.childLanes = 0, g.pendingProps = x) : g = ul(x, l, 0, null), t = zn(t, l, o, null), g.return = r, t.return = r, g.sibling = t, r.child = g, r.child.memoizedState = $c(o), r.memoizedState = zc, t) : Pc(r, x));
    if (d = t.memoizedState, d !== null && (P = d.dehydrated, P !== null)) return Wy(t, r, x, l, P, d, o);
    if (g) {
      g = l.fallback, x = r.mode, d = t.child, P = d.sibling;
      var N = { mode: "hidden", children: l.children };
      return (x & 1) === 0 && r.child !== d ? (l = r.child, l.childLanes = 0, l.pendingProps = N, r.deletions = null) : (l = Xr(d, N), l.subtreeFlags = d.subtreeFlags & 14680064), P !== null ? g = Xr(P, g) : (g = zn(g, x, o, null), g.flags |= 2), g.return = r, l.return = r, l.sibling = g, r.child = l, l = g, g = r.child, x = t.child.memoizedState, x = x === null ? $c(o) : { baseLanes: x.baseLanes | o, cachePool: null, transitions: x.transitions }, g.memoizedState = x, g.childLanes = t.childLanes & ~o, r.memoizedState = zc, l;
    }
    return g = t.child, t = g.sibling, l = Xr(g, { mode: "visible", children: l.children }), (r.mode & 1) === 0 && (l.lanes = o), l.return = r, l.sibling = null, t !== null && (o = r.deletions, o === null ? (r.deletions = [t], r.flags |= 16) : o.push(t)), r.child = l, r.memoizedState = null, l;
  }
  function Pc(t, r) {
    return r = ul({ mode: "visible", children: r }, t.mode, 0, null), r.return = t, t.child = r;
  }
  function Xi(t, r, o, l) {
    return l !== null && rc(l), na(r, t.child, null, o), t = Pc(r, r.pendingProps.children), t.flags |= 2, r.memoizedState = null, t;
  }
  function Wy(t, r, o, l, d, g, x) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, l = _c(Error(a(422))), Xi(t, r, x, l)) : r.memoizedState !== null ? (r.child = t.child, r.flags |= 128, null) : (g = l.fallback, d = r.mode, l = ul({ mode: "visible", children: l.children }, d, 0, null), g = zn(g, d, x, null), g.flags |= 2, l.return = r, g.return = r, l.sibling = g, r.child = l, (r.mode & 1) !== 0 && na(r, t.child, null, x), r.child.memoizedState = $c(x), r.memoizedState = zc, g);
    if ((r.mode & 1) === 0) return Xi(t, r, x, null);
    if (d.data === "$!") {
      if (l = d.nextSibling && d.nextSibling.dataset, l) var P = l.dgst;
      return l = P, g = Error(a(419)), l = _c(g, l, void 0), Xi(t, r, x, l);
    }
    if (P = (x & t.childLanes) !== 0, bt || P) {
      if (l = tt, l !== null) {
        switch (x & -x) {
          case 4:
            d = 2;
            break;
          case 16:
            d = 8;
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
            d = 32;
            break;
          case 536870912:
            d = 268435456;
            break;
          default:
            d = 0;
        }
        d = (d & (l.suspendedLanes | x)) !== 0 ? 0 : d, d !== 0 && d !== g.retryLane && (g.retryLane = d, hr(t, d), Qt(l, t, d, -1));
      }
      return Wc(), l = _c(Error(a(421))), Xi(t, r, x, l);
    }
    return d.data === "$?" ? (r.flags |= 128, r.child = t.child, r = aw.bind(null, t), d._reactRetry = r, null) : (t = g.treeContext, At = Vr(d.nextSibling), Pt = r, Ue = !0, qt = null, t !== null && (Nt[It++] = mr, Nt[It++] = gr, Nt[It++] = bn, mr = t.id, gr = t.overflow, bn = r), r = Pc(r, l.children), r.flags |= 4096, r);
  }
  function hm(t, r, o) {
    t.lanes |= r;
    var l = t.alternate;
    l !== null && (l.lanes |= r), ic(t.return, r, o);
  }
  function Ac(t, r, o, l, d) {
    var g = t.memoizedState;
    g === null ? t.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: l, tail: o, tailMode: d } : (g.isBackwards = r, g.rendering = null, g.renderingStartTime = 0, g.last = l, g.tail = o, g.tailMode = d);
  }
  function vm(t, r, o) {
    var l = r.pendingProps, d = l.revealOrder, g = l.tail;
    if (mt(t, r, l.children, o), l = He.current, (l & 2) !== 0) l = l & 1 | 2, r.flags |= 128;
    else {
      if (t !== null && (t.flags & 128) !== 0) e: for (t = r.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && hm(t, o, r);
        else if (t.tag === 19) hm(t, o, r);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === r) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === r) break e;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      l &= 1;
    }
    if (Le(He, l), (r.mode & 1) === 0) r.memoizedState = null;
    else switch (d) {
      case "forwards":
        for (o = r.child, d = null; o !== null; ) t = o.alternate, t !== null && Hi(t) === null && (d = o), o = o.sibling;
        o = d, o === null ? (d = r.child, r.child = null) : (d = o.sibling, o.sibling = null), Ac(r, !1, d, o, g);
        break;
      case "backwards":
        for (o = null, d = r.child, r.child = null; d !== null; ) {
          if (t = d.alternate, t !== null && Hi(t) === null) {
            r.child = d;
            break;
          }
          t = d.sibling, d.sibling = o, o = d, d = t;
        }
        Ac(r, !0, o, null, g);
        break;
      case "together":
        Ac(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Zi(t, r) {
    (r.mode & 1) === 0 && t !== null && (t.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function br(t, r, o) {
    if (t !== null && (r.dependencies = t.dependencies), _n |= r.lanes, (o & r.childLanes) === 0) return null;
    if (t !== null && r.child !== t.child) throw Error(a(153));
    if (r.child !== null) {
      for (t = r.child, o = Xr(t, t.pendingProps), r.child = o, o.return = r; t.sibling !== null; ) t = t.sibling, o = o.sibling = Xr(t, t.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function qy(t, r, o) {
    switch (r.tag) {
      case 3:
        pm(r), ra();
        break;
      case 5:
        Fp(r);
        break;
      case 1:
        vt(r.type) && Ii(r);
        break;
      case 4:
        cc(r, r.stateNode.containerInfo);
        break;
      case 10:
        var l = r.type._context, d = r.memoizedProps.value;
        Le(Vi, l._currentValue), l._currentValue = d;
        break;
      case 13:
        if (l = r.memoizedState, l !== null)
          return l.dehydrated !== null ? (Le(He, He.current & 1), r.flags |= 128, null) : (o & r.child.childLanes) !== 0 ? gm(t, r, o) : (Le(He, He.current & 1), t = br(t, r, o), t !== null ? t.sibling : null);
        Le(He, He.current & 1);
        break;
      case 19:
        if (l = (o & r.childLanes) !== 0, (t.flags & 128) !== 0) {
          if (l) return vm(t, r, o);
          r.flags |= 128;
        }
        if (d = r.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), Le(He, He.current), l) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, um(t, r, o);
    }
    return br(t, r, o);
  }
  var bm, Fc, ym, wm;
  bm = function(t, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6) t.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === r) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r) return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, Fc = function() {
  }, ym = function(t, r, o, l) {
    var d = t.memoizedProps;
    if (d !== l) {
      t = r.stateNode, xn(or.current);
      var g = null;
      switch (o) {
        case "input":
          d = Vn(t, d), l = Vn(t, l), g = [];
          break;
        case "select":
          d = V({}, d, { value: void 0 }), l = V({}, l, { value: void 0 }), g = [];
          break;
        case "textarea":
          d = cs(t, d), l = cs(t, l), g = [];
          break;
        default:
          typeof d.onClick != "function" && typeof l.onClick == "function" && (t.onclick = Fi);
      }
      ds(o, l);
      var x;
      o = null;
      for (q in d) if (!l.hasOwnProperty(q) && d.hasOwnProperty(q) && d[q] != null) if (q === "style") {
        var P = d[q];
        for (x in P) P.hasOwnProperty(x) && (o || (o = {}), o[x] = "");
      } else q !== "dangerouslySetInnerHTML" && q !== "children" && q !== "suppressContentEditableWarning" && q !== "suppressHydrationWarning" && q !== "autoFocus" && (s.hasOwnProperty(q) ? g || (g = []) : (g = g || []).push(q, null));
      for (q in l) {
        var N = l[q];
        if (P = d != null ? d[q] : void 0, l.hasOwnProperty(q) && N !== P && (N != null || P != null)) if (q === "style") if (P) {
          for (x in P) !P.hasOwnProperty(x) || N && N.hasOwnProperty(x) || (o || (o = {}), o[x] = "");
          for (x in N) N.hasOwnProperty(x) && P[x] !== N[x] && (o || (o = {}), o[x] = N[x]);
        } else o || (g || (g = []), g.push(
          q,
          o
        )), o = N;
        else q === "dangerouslySetInnerHTML" ? (N = N ? N.__html : void 0, P = P ? P.__html : void 0, N != null && P !== N && (g = g || []).push(q, N)) : q === "children" ? typeof N != "string" && typeof N != "number" || (g = g || []).push(q, "" + N) : q !== "suppressContentEditableWarning" && q !== "suppressHydrationWarning" && (s.hasOwnProperty(q) ? (N != null && q === "onScroll" && Re("scroll", t), g || P === N || (g = [])) : (g = g || []).push(q, N));
      }
      o && (g = g || []).push("style", o);
      var q = g;
      (r.updateQueue = q) && (r.flags |= 4);
    }
  }, wm = function(t, r, o, l) {
    o !== l && (r.flags |= 4);
  };
  function uo(t, r) {
    if (!Ue) switch (t.tailMode) {
      case "hidden":
        r = t.tail;
        for (var o = null; r !== null; ) r.alternate !== null && (o = r), r = r.sibling;
        o === null ? t.tail = null : o.sibling = null;
        break;
      case "collapsed":
        o = t.tail;
        for (var l = null; o !== null; ) o.alternate !== null && (l = o), o = o.sibling;
        l === null ? r || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null;
    }
  }
  function dt(t) {
    var r = t.alternate !== null && t.alternate.child === t.child, o = 0, l = 0;
    if (r) for (var d = t.child; d !== null; ) o |= d.lanes | d.childLanes, l |= d.subtreeFlags & 14680064, l |= d.flags & 14680064, d.return = t, d = d.sibling;
    else for (d = t.child; d !== null; ) o |= d.lanes | d.childLanes, l |= d.subtreeFlags, l |= d.flags, d.return = t, d = d.sibling;
    return t.subtreeFlags |= l, t.childLanes = o, r;
  }
  function Gy(t, r, o) {
    var l = r.pendingProps;
    switch (Js(r), r.tag) {
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
        return dt(r), null;
      case 1:
        return vt(r.type) && Ni(), dt(r), null;
      case 3:
        return l = r.stateNode, ia(), je(ht), je(ct), fc(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (ji(r) ? r.flags |= 4 : t === null || t.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, qt !== null && (Bc(qt), qt = null))), Fc(t, r), dt(r), null;
      case 5:
        uc(r);
        var d = xn(oo.current);
        if (o = r.type, t !== null && r.stateNode != null) ym(t, r, o, l, d), t.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!l) {
            if (r.stateNode === null) throw Error(a(166));
            return dt(r), null;
          }
          if (t = xn(or.current), ji(r)) {
            l = r.stateNode, o = r.type;
            var g = r.memoizedProps;
            switch (l[ar] = r, l[eo] = g, t = (r.mode & 1) !== 0, o) {
              case "dialog":
                Re("cancel", l), Re("close", l);
                break;
              case "iframe":
              case "object":
              case "embed":
                Re("load", l);
                break;
              case "video":
              case "audio":
                for (d = 0; d < Xa.length; d++) Re(Xa[d], l);
                break;
              case "source":
                Re("error", l);
                break;
              case "img":
              case "image":
              case "link":
                Re(
                  "error",
                  l
                ), Re("load", l);
                break;
              case "details":
                Re("toggle", l);
                break;
              case "input":
                pe(l, g), Re("invalid", l);
                break;
              case "select":
                l._wrapperState = { wasMultiple: !!g.multiple }, Re("invalid", l);
                break;
              case "textarea":
                rf(l, g), Re("invalid", l);
            }
            ds(o, g), d = null;
            for (var x in g) if (g.hasOwnProperty(x)) {
              var P = g[x];
              x === "children" ? typeof P == "string" ? l.textContent !== P && (g.suppressHydrationWarning !== !0 && Ai(l.textContent, P, t), d = ["children", P]) : typeof P == "number" && l.textContent !== "" + P && (g.suppressHydrationWarning !== !0 && Ai(
                l.textContent,
                P,
                t
              ), d = ["children", "" + P]) : s.hasOwnProperty(x) && P != null && x === "onScroll" && Re("scroll", l);
            }
            switch (o) {
              case "input":
                jn(l), pn(l, g, !0);
                break;
              case "textarea":
                jn(l), af(l);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof g.onClick == "function" && (l.onclick = Fi);
            }
            l = d, r.updateQueue = l, l !== null && (r.flags |= 4);
          } else {
            x = d.nodeType === 9 ? d : d.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = of(o)), t === "http://www.w3.org/1999/xhtml" ? o === "script" ? (t = x.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof l.is == "string" ? t = x.createElement(o, { is: l.is }) : (t = x.createElement(o), o === "select" && (x = t, l.multiple ? x.multiple = !0 : l.size && (x.size = l.size))) : t = x.createElementNS(t, o), t[ar] = r, t[eo] = l, bm(t, r, !1, !1), r.stateNode = t;
            e: {
              switch (x = fs(o, l), o) {
                case "dialog":
                  Re("cancel", t), Re("close", t), d = l;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Re("load", t), d = l;
                  break;
                case "video":
                case "audio":
                  for (d = 0; d < Xa.length; d++) Re(Xa[d], t);
                  d = l;
                  break;
                case "source":
                  Re("error", t), d = l;
                  break;
                case "img":
                case "image":
                case "link":
                  Re(
                    "error",
                    t
                  ), Re("load", t), d = l;
                  break;
                case "details":
                  Re("toggle", t), d = l;
                  break;
                case "input":
                  pe(t, l), d = Vn(t, l), Re("invalid", t);
                  break;
                case "option":
                  d = l;
                  break;
                case "select":
                  t._wrapperState = { wasMultiple: !!l.multiple }, d = V({}, l, { value: void 0 }), Re("invalid", t);
                  break;
                case "textarea":
                  rf(t, l), d = cs(t, l), Re("invalid", t);
                  break;
                default:
                  d = l;
              }
              ds(o, d), P = d;
              for (g in P) if (P.hasOwnProperty(g)) {
                var N = P[g];
                g === "style" ? cf(t, N) : g === "dangerouslySetInnerHTML" ? (N = N ? N.__html : void 0, N != null && lf(t, N)) : g === "children" ? typeof N == "string" ? (o !== "textarea" || N !== "") && Ta(t, N) : typeof N == "number" && Ta(t, "" + N) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (s.hasOwnProperty(g) ? N != null && g === "onScroll" && Re("scroll", t) : N != null && U(t, g, N, x));
              }
              switch (o) {
                case "input":
                  jn(t), pn(t, l, !1);
                  break;
                case "textarea":
                  jn(t), af(t);
                  break;
                case "option":
                  l.value != null && t.setAttribute("value", "" + Te(l.value));
                  break;
                case "select":
                  t.multiple = !!l.multiple, g = l.value, g != null ? Dn(t, !!l.multiple, g, !1) : l.defaultValue != null && Dn(
                    t,
                    !!l.multiple,
                    l.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof d.onClick == "function" && (t.onclick = Fi);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break e;
                case "img":
                  l = !0;
                  break e;
                default:
                  l = !1;
              }
            }
            l && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return dt(r), null;
      case 6:
        if (t && r.stateNode != null) wm(t, r, t.memoizedProps, l);
        else {
          if (typeof l != "string" && r.stateNode === null) throw Error(a(166));
          if (o = xn(oo.current), xn(or.current), ji(r)) {
            if (l = r.stateNode, o = r.memoizedProps, l[ar] = r, (g = l.nodeValue !== o) && (t = Pt, t !== null)) switch (t.tag) {
              case 3:
                Ai(l.nodeValue, o, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 && Ai(l.nodeValue, o, (t.mode & 1) !== 0);
            }
            g && (r.flags |= 4);
          } else l = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(l), l[ar] = r, r.stateNode = l;
        }
        return dt(r), null;
      case 13:
        if (je(He), l = r.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (Ue && At !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) _p(), ra(), r.flags |= 98560, g = !1;
          else if (g = ji(r), l !== null && l.dehydrated !== null) {
            if (t === null) {
              if (!g) throw Error(a(318));
              if (g = r.memoizedState, g = g !== null ? g.dehydrated : null, !g) throw Error(a(317));
              g[ar] = r;
            } else ra(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            dt(r), g = !1;
          } else qt !== null && (Bc(qt), qt = null), g = !0;
          if (!g) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = o, r) : (l = l !== null, l !== (t !== null && t.memoizedState !== null) && l && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (t === null || (He.current & 1) !== 0 ? Ze === 0 && (Ze = 3) : Wc())), r.updateQueue !== null && (r.flags |= 4), dt(r), null);
      case 4:
        return ia(), Fc(t, r), t === null && Za(r.stateNode.containerInfo), dt(r), null;
      case 10:
        return oc(r.type._context), dt(r), null;
      case 17:
        return vt(r.type) && Ni(), dt(r), null;
      case 19:
        if (je(He), g = r.memoizedState, g === null) return dt(r), null;
        if (l = (r.flags & 128) !== 0, x = g.rendering, x === null) if (l) uo(g, !1);
        else {
          if (Ze !== 0 || t !== null && (t.flags & 128) !== 0) for (t = r.child; t !== null; ) {
            if (x = Hi(t), x !== null) {
              for (r.flags |= 128, uo(g, !1), l = x.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), r.subtreeFlags = 0, l = o, o = r.child; o !== null; ) g = o, t = l, g.flags &= 14680066, x = g.alternate, x === null ? (g.childLanes = 0, g.lanes = t, g.child = null, g.subtreeFlags = 0, g.memoizedProps = null, g.memoizedState = null, g.updateQueue = null, g.dependencies = null, g.stateNode = null) : (g.childLanes = x.childLanes, g.lanes = x.lanes, g.child = x.child, g.subtreeFlags = 0, g.deletions = null, g.memoizedProps = x.memoizedProps, g.memoizedState = x.memoizedState, g.updateQueue = x.updateQueue, g.type = x.type, t = x.dependencies, g.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), o = o.sibling;
              return Le(He, He.current & 1 | 2), r.child;
            }
            t = t.sibling;
          }
          g.tail !== null && Ke() > ua && (r.flags |= 128, l = !0, uo(g, !1), r.lanes = 4194304);
        }
        else {
          if (!l) if (t = Hi(x), t !== null) {
            if (r.flags |= 128, l = !0, o = t.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), uo(g, !0), g.tail === null && g.tailMode === "hidden" && !x.alternate && !Ue) return dt(r), null;
          } else 2 * Ke() - g.renderingStartTime > ua && o !== 1073741824 && (r.flags |= 128, l = !0, uo(g, !1), r.lanes = 4194304);
          g.isBackwards ? (x.sibling = r.child, r.child = x) : (o = g.last, o !== null ? o.sibling = x : r.child = x, g.last = x);
        }
        return g.tail !== null ? (r = g.tail, g.rendering = r, g.tail = r.sibling, g.renderingStartTime = Ke(), r.sibling = null, o = He.current, Le(He, l ? o & 1 | 2 : o & 1), r) : (dt(r), null);
      case 22:
      case 23:
        return Hc(), l = r.memoizedState !== null, t !== null && t.memoizedState !== null !== l && (r.flags |= 8192), l && (r.mode & 1) !== 0 ? (Ft & 1073741824) !== 0 && (dt(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : dt(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, r.tag));
  }
  function Ky(t, r) {
    switch (Js(r), r.tag) {
      case 1:
        return vt(r.type) && Ni(), t = r.flags, t & 65536 ? (r.flags = t & -65537 | 128, r) : null;
      case 3:
        return ia(), je(ht), je(ct), fc(), t = r.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (r.flags = t & -65537 | 128, r) : null;
      case 5:
        return uc(r), null;
      case 13:
        if (je(He), t = r.memoizedState, t !== null && t.dehydrated !== null) {
          if (r.alternate === null) throw Error(a(340));
          ra();
        }
        return t = r.flags, t & 65536 ? (r.flags = t & -65537 | 128, r) : null;
      case 19:
        return je(He), null;
      case 4:
        return ia(), null;
      case 10:
        return oc(r.type._context), null;
      case 22:
      case 23:
        return Hc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ji = !1, ft = !1, Yy = typeof WeakSet == "function" ? WeakSet : Set, se = null;
  function sa(t, r) {
    var o = t.ref;
    if (o !== null) if (typeof o == "function") try {
      o(null);
    } catch (l) {
      Ge(t, r, l);
    }
    else o.current = null;
  }
  function Tc(t, r, o) {
    try {
      o();
    } catch (l) {
      Ge(t, r, l);
    }
  }
  var xm = !1;
  function Qy(t, r) {
    if (Hs = yi, t = Jf(), Ls(t)) {
      if ("selectionStart" in t) var o = { start: t.selectionStart, end: t.selectionEnd };
      else e: {
        o = (o = t.ownerDocument) && o.defaultView || window;
        var l = o.getSelection && o.getSelection();
        if (l && l.rangeCount !== 0) {
          o = l.anchorNode;
          var d = l.anchorOffset, g = l.focusNode;
          l = l.focusOffset;
          try {
            o.nodeType, g.nodeType;
          } catch {
            o = null;
            break e;
          }
          var x = 0, P = -1, N = -1, q = 0, J = 0, te = t, Z = null;
          t: for (; ; ) {
            for (var le; te !== o || d !== 0 && te.nodeType !== 3 || (P = x + d), te !== g || l !== 0 && te.nodeType !== 3 || (N = x + l), te.nodeType === 3 && (x += te.nodeValue.length), (le = te.firstChild) !== null; )
              Z = te, te = le;
            for (; ; ) {
              if (te === t) break t;
              if (Z === o && ++q === d && (P = x), Z === g && ++J === l && (N = x), (le = te.nextSibling) !== null) break;
              te = Z, Z = te.parentNode;
            }
            te = le;
          }
          o = P === -1 || N === -1 ? null : { start: P, end: N };
        } else o = null;
      }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (Ws = { focusedElem: t, selectionRange: o }, yi = !1, se = r; se !== null; ) if (r = se, t = r.child, (r.subtreeFlags & 1028) !== 0 && t !== null) t.return = r, se = t;
    else for (; se !== null; ) {
      r = se;
      try {
        var ce = r.alternate;
        if ((r.flags & 1024) !== 0) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ce !== null) {
              var ue = ce.memoizedProps, Ye = ce.memoizedState, B = r.stateNode, M = B.getSnapshotBeforeUpdate(r.elementType === r.type ? ue : Gt(r.type, ue), Ye);
              B.__reactInternalSnapshotBeforeUpdate = M;
            }
            break;
          case 3:
            var H = r.stateNode.containerInfo;
            H.nodeType === 1 ? H.textContent = "" : H.nodeType === 9 && H.documentElement && H.removeChild(H.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(a(163));
        }
      } catch (re) {
        Ge(r, r.return, re);
      }
      if (t = r.sibling, t !== null) {
        t.return = r.return, se = t;
        break;
      }
      se = r.return;
    }
    return ce = xm, xm = !1, ce;
  }
  function fo(t, r, o) {
    var l = r.updateQueue;
    if (l = l !== null ? l.lastEffect : null, l !== null) {
      var d = l = l.next;
      do {
        if ((d.tag & t) === t) {
          var g = d.destroy;
          d.destroy = void 0, g !== void 0 && Tc(r, o, g);
        }
        d = d.next;
      } while (d !== l);
    }
  }
  function el(t, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & t) === t) {
          var l = o.create;
          o.destroy = l();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Nc(t) {
    var r = t.ref;
    if (r !== null) {
      var o = t.stateNode;
      switch (t.tag) {
        case 5:
          t = o;
          break;
        default:
          t = o;
      }
      typeof r == "function" ? r(t) : r.current = t;
    }
  }
  function km(t) {
    var r = t.alternate;
    r !== null && (t.alternate = null, km(r)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (r = t.stateNode, r !== null && (delete r[ar], delete r[eo], delete r[Ys], delete r[Ty], delete r[Ny])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  function _m(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4;
  }
  function Em(t) {
    e: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || _m(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Ic(t, r, o) {
    var l = t.tag;
    if (l === 5 || l === 6) t = t.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(t, r) : o.insertBefore(t, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(t, o)) : (r = o, r.appendChild(t)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = Fi));
    else if (l !== 4 && (t = t.child, t !== null)) for (Ic(t, r, o), t = t.sibling; t !== null; ) Ic(t, r, o), t = t.sibling;
  }
  function Mc(t, r, o) {
    var l = t.tag;
    if (l === 5 || l === 6) t = t.stateNode, r ? o.insertBefore(t, r) : o.appendChild(t);
    else if (l !== 4 && (t = t.child, t !== null)) for (Mc(t, r, o), t = t.sibling; t !== null; ) Mc(t, r, o), t = t.sibling;
  }
  var at = null, Kt = !1;
  function qr(t, r, o) {
    for (o = o.child; o !== null; ) Sm(t, r, o), o = o.sibling;
  }
  function Sm(t, r, o) {
    if (nr && typeof nr.onCommitFiberUnmount == "function") try {
      nr.onCommitFiberUnmount(pi, o);
    } catch {
    }
    switch (o.tag) {
      case 5:
        ft || sa(o, r);
      case 6:
        var l = at, d = Kt;
        at = null, qr(t, r, o), at = l, Kt = d, at !== null && (Kt ? (t = at, o = o.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(o) : t.removeChild(o)) : at.removeChild(o.stateNode));
        break;
      case 18:
        at !== null && (Kt ? (t = at, o = o.stateNode, t.nodeType === 8 ? Ks(t.parentNode, o) : t.nodeType === 1 && Ks(t, o), Ua(t)) : Ks(at, o.stateNode));
        break;
      case 4:
        l = at, d = Kt, at = o.stateNode.containerInfo, Kt = !0, qr(t, r, o), at = l, Kt = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!ft && (l = o.updateQueue, l !== null && (l = l.lastEffect, l !== null))) {
          d = l = l.next;
          do {
            var g = d, x = g.destroy;
            g = g.tag, x !== void 0 && ((g & 2) !== 0 || (g & 4) !== 0) && Tc(o, r, x), d = d.next;
          } while (d !== l);
        }
        qr(t, r, o);
        break;
      case 1:
        if (!ft && (sa(o, r), l = o.stateNode, typeof l.componentWillUnmount == "function")) try {
          l.props = o.memoizedProps, l.state = o.memoizedState, l.componentWillUnmount();
        } catch (P) {
          Ge(o, r, P);
        }
        qr(t, r, o);
        break;
      case 21:
        qr(t, r, o);
        break;
      case 22:
        o.mode & 1 ? (ft = (l = ft) || o.memoizedState !== null, qr(t, r, o), ft = l) : qr(t, r, o);
        break;
      default:
        qr(t, r, o);
    }
  }
  function Cm(t) {
    var r = t.updateQueue;
    if (r !== null) {
      t.updateQueue = null;
      var o = t.stateNode;
      o === null && (o = t.stateNode = new Yy()), r.forEach(function(l) {
        var d = ow.bind(null, t, l);
        o.has(l) || (o.add(l), l.then(d, d));
      });
    }
  }
  function Yt(t, r) {
    var o = r.deletions;
    if (o !== null) for (var l = 0; l < o.length; l++) {
      var d = o[l];
      try {
        var g = t, x = r, P = x;
        e: for (; P !== null; ) {
          switch (P.tag) {
            case 5:
              at = P.stateNode, Kt = !1;
              break e;
            case 3:
              at = P.stateNode.containerInfo, Kt = !0;
              break e;
            case 4:
              at = P.stateNode.containerInfo, Kt = !0;
              break e;
          }
          P = P.return;
        }
        if (at === null) throw Error(a(160));
        Sm(g, x, d), at = null, Kt = !1;
        var N = d.alternate;
        N !== null && (N.return = null), d.return = null;
      } catch (q) {
        Ge(d, r, q);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) zm(r, t), r = r.sibling;
  }
  function zm(t, r) {
    var o = t.alternate, l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Yt(r, t), lr(t), l & 4) {
          try {
            fo(3, t, t.return), el(3, t);
          } catch (ue) {
            Ge(t, t.return, ue);
          }
          try {
            fo(5, t, t.return);
          } catch (ue) {
            Ge(t, t.return, ue);
          }
        }
        break;
      case 1:
        Yt(r, t), lr(t), l & 512 && o !== null && sa(o, o.return);
        break;
      case 5:
        if (Yt(r, t), lr(t), l & 512 && o !== null && sa(o, o.return), t.flags & 32) {
          var d = t.stateNode;
          try {
            Ta(d, "");
          } catch (ue) {
            Ge(t, t.return, ue);
          }
        }
        if (l & 4 && (d = t.stateNode, d != null)) {
          var g = t.memoizedProps, x = o !== null ? o.memoizedProps : g, P = t.type, N = t.updateQueue;
          if (t.updateQueue = null, N !== null) try {
            P === "input" && g.type === "radio" && g.name != null && Pe(d, g), fs(P, x);
            var q = fs(P, g);
            for (x = 0; x < N.length; x += 2) {
              var J = N[x], te = N[x + 1];
              J === "style" ? cf(d, te) : J === "dangerouslySetInnerHTML" ? lf(d, te) : J === "children" ? Ta(d, te) : U(d, J, te, q);
            }
            switch (P) {
              case "input":
                rr(d, g);
                break;
              case "textarea":
                nf(d, g);
                break;
              case "select":
                var Z = d._wrapperState.wasMultiple;
                d._wrapperState.wasMultiple = !!g.multiple;
                var le = g.value;
                le != null ? Dn(d, !!g.multiple, le, !1) : Z !== !!g.multiple && (g.defaultValue != null ? Dn(
                  d,
                  !!g.multiple,
                  g.defaultValue,
                  !0
                ) : Dn(d, !!g.multiple, g.multiple ? [] : "", !1));
            }
            d[eo] = g;
          } catch (ue) {
            Ge(t, t.return, ue);
          }
        }
        break;
      case 6:
        if (Yt(r, t), lr(t), l & 4) {
          if (t.stateNode === null) throw Error(a(162));
          d = t.stateNode, g = t.memoizedProps;
          try {
            d.nodeValue = g;
          } catch (ue) {
            Ge(t, t.return, ue);
          }
        }
        break;
      case 3:
        if (Yt(r, t), lr(t), l & 4 && o !== null && o.memoizedState.isDehydrated) try {
          Ua(r.containerInfo);
        } catch (ue) {
          Ge(t, t.return, ue);
        }
        break;
      case 4:
        Yt(r, t), lr(t);
        break;
      case 13:
        Yt(r, t), lr(t), d = t.child, d.flags & 8192 && (g = d.memoizedState !== null, d.stateNode.isHidden = g, !g || d.alternate !== null && d.alternate.memoizedState !== null || (jc = Ke())), l & 4 && Cm(t);
        break;
      case 22:
        if (J = o !== null && o.memoizedState !== null, t.mode & 1 ? (ft = (q = ft) || J, Yt(r, t), ft = q) : Yt(r, t), lr(t), l & 8192) {
          if (q = t.memoizedState !== null, (t.stateNode.isHidden = q) && !J && (t.mode & 1) !== 0) for (se = t, J = t.child; J !== null; ) {
            for (te = se = J; se !== null; ) {
              switch (Z = se, le = Z.child, Z.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  fo(4, Z, Z.return);
                  break;
                case 1:
                  sa(Z, Z.return);
                  var ce = Z.stateNode;
                  if (typeof ce.componentWillUnmount == "function") {
                    l = Z, o = Z.return;
                    try {
                      r = l, ce.props = r.memoizedProps, ce.state = r.memoizedState, ce.componentWillUnmount();
                    } catch (ue) {
                      Ge(l, o, ue);
                    }
                  }
                  break;
                case 5:
                  sa(Z, Z.return);
                  break;
                case 22:
                  if (Z.memoizedState !== null) {
                    Am(te);
                    continue;
                  }
              }
              le !== null ? (le.return = Z, se = le) : Am(te);
            }
            J = J.sibling;
          }
          e: for (J = null, te = t; ; ) {
            if (te.tag === 5) {
              if (J === null) {
                J = te;
                try {
                  d = te.stateNode, q ? (g = d.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none") : (P = te.stateNode, N = te.memoizedProps.style, x = N != null && N.hasOwnProperty("display") ? N.display : null, P.style.display = sf("display", x));
                } catch (ue) {
                  Ge(t, t.return, ue);
                }
              }
            } else if (te.tag === 6) {
              if (J === null) try {
                te.stateNode.nodeValue = q ? "" : te.memoizedProps;
              } catch (ue) {
                Ge(t, t.return, ue);
              }
            } else if ((te.tag !== 22 && te.tag !== 23 || te.memoizedState === null || te === t) && te.child !== null) {
              te.child.return = te, te = te.child;
              continue;
            }
            if (te === t) break e;
            for (; te.sibling === null; ) {
              if (te.return === null || te.return === t) break e;
              J === te && (J = null), te = te.return;
            }
            J === te && (J = null), te.sibling.return = te.return, te = te.sibling;
          }
        }
        break;
      case 19:
        Yt(r, t), lr(t), l & 4 && Cm(t);
        break;
      case 21:
        break;
      default:
        Yt(
          r,
          t
        ), lr(t);
    }
  }
  function lr(t) {
    var r = t.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = t.return; o !== null; ) {
            if (_m(o)) {
              var l = o;
              break e;
            }
            o = o.return;
          }
          throw Error(a(160));
        }
        switch (l.tag) {
          case 5:
            var d = l.stateNode;
            l.flags & 32 && (Ta(d, ""), l.flags &= -33);
            var g = Em(t);
            Mc(t, g, d);
            break;
          case 3:
          case 4:
            var x = l.stateNode.containerInfo, P = Em(t);
            Ic(t, P, x);
            break;
          default:
            throw Error(a(161));
        }
      } catch (N) {
        Ge(t, t.return, N);
      }
      t.flags &= -3;
    }
    r & 4096 && (t.flags &= -4097);
  }
  function Xy(t, r, o) {
    se = t, $m(t);
  }
  function $m(t, r, o) {
    for (var l = (t.mode & 1) !== 0; se !== null; ) {
      var d = se, g = d.child;
      if (d.tag === 22 && l) {
        var x = d.memoizedState !== null || Ji;
        if (!x) {
          var P = d.alternate, N = P !== null && P.memoizedState !== null || ft;
          P = Ji;
          var q = ft;
          if (Ji = x, (ft = N) && !q) for (se = d; se !== null; ) x = se, N = x.child, x.tag === 22 && x.memoizedState !== null ? Fm(d) : N !== null ? (N.return = x, se = N) : Fm(d);
          for (; g !== null; ) se = g, $m(g), g = g.sibling;
          se = d, Ji = P, ft = q;
        }
        Pm(t);
      } else (d.subtreeFlags & 8772) !== 0 && g !== null ? (g.return = d, se = g) : Pm(t);
    }
  }
  function Pm(t) {
    for (; se !== null; ) {
      var r = se;
      if ((r.flags & 8772) !== 0) {
        var o = r.alternate;
        try {
          if ((r.flags & 8772) !== 0) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              ft || el(5, r);
              break;
            case 1:
              var l = r.stateNode;
              if (r.flags & 4 && !ft) if (o === null) l.componentDidMount();
              else {
                var d = r.elementType === r.type ? o.memoizedProps : Gt(r.type, o.memoizedProps);
                l.componentDidUpdate(d, o.memoizedState, l.__reactInternalSnapshotBeforeUpdate);
              }
              var g = r.updateQueue;
              g !== null && Ap(r, g, l);
              break;
            case 3:
              var x = r.updateQueue;
              if (x !== null) {
                if (o = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    o = r.child.stateNode;
                    break;
                  case 1:
                    o = r.child.stateNode;
                }
                Ap(r, x, o);
              }
              break;
            case 5:
              var P = r.stateNode;
              if (o === null && r.flags & 4) {
                o = P;
                var N = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    N.autoFocus && o.focus();
                    break;
                  case "img":
                    N.src && (o.src = N.src);
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
                var q = r.alternate;
                if (q !== null) {
                  var J = q.memoizedState;
                  if (J !== null) {
                    var te = J.dehydrated;
                    te !== null && Ua(te);
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
              throw Error(a(163));
          }
          ft || r.flags & 512 && Nc(r);
        } catch (Z) {
          Ge(r, r.return, Z);
        }
      }
      if (r === t) {
        se = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, se = o;
        break;
      }
      se = r.return;
    }
  }
  function Am(t) {
    for (; se !== null; ) {
      var r = se;
      if (r === t) {
        se = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, se = o;
        break;
      }
      se = r.return;
    }
  }
  function Fm(t) {
    for (; se !== null; ) {
      var r = se;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              el(4, r);
            } catch (N) {
              Ge(r, o, N);
            }
            break;
          case 1:
            var l = r.stateNode;
            if (typeof l.componentDidMount == "function") {
              var d = r.return;
              try {
                l.componentDidMount();
              } catch (N) {
                Ge(r, d, N);
              }
            }
            var g = r.return;
            try {
              Nc(r);
            } catch (N) {
              Ge(r, g, N);
            }
            break;
          case 5:
            var x = r.return;
            try {
              Nc(r);
            } catch (N) {
              Ge(r, x, N);
            }
        }
      } catch (N) {
        Ge(r, r.return, N);
      }
      if (r === t) {
        se = null;
        break;
      }
      var P = r.sibling;
      if (P !== null) {
        P.return = r.return, se = P;
        break;
      }
      se = r.return;
    }
  }
  var Zy = Math.ceil, tl = W.ReactCurrentDispatcher, Lc = W.ReactCurrentOwner, Rt = W.ReactCurrentBatchConfig, Ae = 0, tt = null, Qe = null, ot = 0, Ft = 0, ca = Dr(0), Ze = 0, po = null, _n = 0, rl = 0, Rc = 0, mo = null, yt = null, jc = 0, ua = 1 / 0, yr = null, nl = !1, Oc = null, Gr = null, al = !1, Kr = null, ol = 0, go = 0, Vc = null, il = -1, ll = 0;
  function gt() {
    return (Ae & 6) !== 0 ? Ke() : il !== -1 ? il : il = Ke();
  }
  function Yr(t) {
    return (t.mode & 1) === 0 ? 1 : (Ae & 2) !== 0 && ot !== 0 ? ot & -ot : My.transition !== null ? (ll === 0 && (ll = Ef()), ll) : (t = Ne, t !== 0 || (t = window.event, t = t === void 0 ? 16 : Nf(t.type)), t);
  }
  function Qt(t, r, o, l) {
    if (50 < go) throw go = 0, Vc = null, Error(a(185));
    ja(t, o, l), ((Ae & 2) === 0 || t !== tt) && (t === tt && ((Ae & 2) === 0 && (rl |= o), Ze === 4 && Qr(t, ot)), wt(t, l), o === 1 && Ae === 0 && (r.mode & 1) === 0 && (ua = Ke() + 500, Mi && Ur()));
  }
  function wt(t, r) {
    var o = t.callbackNode;
    M0(t, r);
    var l = hi(t, t === tt ? ot : 0);
    if (l === 0) o !== null && xf(o), t.callbackNode = null, t.callbackPriority = 0;
    else if (r = l & -l, t.callbackPriority !== r) {
      if (o != null && xf(o), r === 1) t.tag === 0 ? Iy(Nm.bind(null, t)) : bp(Nm.bind(null, t)), Ay(function() {
        (Ae & 6) === 0 && Ur();
      }), o = null;
      else {
        switch (Sf(l)) {
          case 1:
            o = ys;
            break;
          case 4:
            o = kf;
            break;
          case 16:
            o = fi;
            break;
          case 536870912:
            o = _f;
            break;
          default:
            o = fi;
        }
        o = Dm(o, Tm.bind(null, t));
      }
      t.callbackPriority = r, t.callbackNode = o;
    }
  }
  function Tm(t, r) {
    if (il = -1, ll = 0, (Ae & 6) !== 0) throw Error(a(327));
    var o = t.callbackNode;
    if (da() && t.callbackNode !== o) return null;
    var l = hi(t, t === tt ? ot : 0);
    if (l === 0) return null;
    if ((l & 30) !== 0 || (l & t.expiredLanes) !== 0 || r) r = sl(t, l);
    else {
      r = l;
      var d = Ae;
      Ae |= 2;
      var g = Mm();
      (tt !== t || ot !== r) && (yr = null, ua = Ke() + 500, Sn(t, r));
      do
        try {
          tw();
          break;
        } catch (P) {
          Im(t, P);
        }
      while (!0);
      ac(), tl.current = g, Ae = d, Qe !== null ? r = 0 : (tt = null, ot = 0, r = Ze);
    }
    if (r !== 0) {
      if (r === 2 && (d = ws(t), d !== 0 && (l = d, r = Dc(t, d))), r === 1) throw o = po, Sn(t, 0), Qr(t, l), wt(t, Ke()), o;
      if (r === 6) Qr(t, l);
      else {
        if (d = t.current.alternate, (l & 30) === 0 && !Jy(d) && (r = sl(t, l), r === 2 && (g = ws(t), g !== 0 && (l = g, r = Dc(t, g))), r === 1)) throw o = po, Sn(t, 0), Qr(t, l), wt(t, Ke()), o;
        switch (t.finishedWork = d, t.finishedLanes = l, r) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            Cn(t, yt, yr);
            break;
          case 3:
            if (Qr(t, l), (l & 130023424) === l && (r = jc + 500 - Ke(), 10 < r)) {
              if (hi(t, 0) !== 0) break;
              if (d = t.suspendedLanes, (d & l) !== l) {
                gt(), t.pingedLanes |= t.suspendedLanes & d;
                break;
              }
              t.timeoutHandle = Gs(Cn.bind(null, t, yt, yr), r);
              break;
            }
            Cn(t, yt, yr);
            break;
          case 4:
            if (Qr(t, l), (l & 4194240) === l) break;
            for (r = t.eventTimes, d = -1; 0 < l; ) {
              var x = 31 - Ht(l);
              g = 1 << x, x = r[x], x > d && (d = x), l &= ~g;
            }
            if (l = d, l = Ke() - l, l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * Zy(l / 1960)) - l, 10 < l) {
              t.timeoutHandle = Gs(Cn.bind(null, t, yt, yr), l);
              break;
            }
            Cn(t, yt, yr);
            break;
          case 5:
            Cn(t, yt, yr);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return wt(t, Ke()), t.callbackNode === o ? Tm.bind(null, t) : null;
  }
  function Dc(t, r) {
    var o = mo;
    return t.current.memoizedState.isDehydrated && (Sn(t, r).flags |= 256), t = sl(t, r), t !== 2 && (r = yt, yt = o, r !== null && Bc(r)), t;
  }
  function Bc(t) {
    yt === null ? yt = t : yt.push.apply(yt, t);
  }
  function Jy(t) {
    for (var r = t; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null)) for (var l = 0; l < o.length; l++) {
          var d = o[l], g = d.getSnapshot;
          d = d.value;
          try {
            if (!Wt(g(), d)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (o = r.child, r.subtreeFlags & 16384 && o !== null) o.return = r, r = o;
      else {
        if (r === t) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === t) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Qr(t, r) {
    for (r &= ~Rc, r &= ~rl, t.suspendedLanes |= r, t.pingedLanes &= ~r, t = t.expirationTimes; 0 < r; ) {
      var o = 31 - Ht(r), l = 1 << o;
      t[o] = -1, r &= ~l;
    }
  }
  function Nm(t) {
    if ((Ae & 6) !== 0) throw Error(a(327));
    da();
    var r = hi(t, 0);
    if ((r & 1) === 0) return wt(t, Ke()), null;
    var o = sl(t, r);
    if (t.tag !== 0 && o === 2) {
      var l = ws(t);
      l !== 0 && (r = l, o = Dc(t, l));
    }
    if (o === 1) throw o = po, Sn(t, 0), Qr(t, r), wt(t, Ke()), o;
    if (o === 6) throw Error(a(345));
    return t.finishedWork = t.current.alternate, t.finishedLanes = r, Cn(t, yt, yr), wt(t, Ke()), null;
  }
  function Uc(t, r) {
    var o = Ae;
    Ae |= 1;
    try {
      return t(r);
    } finally {
      Ae = o, Ae === 0 && (ua = Ke() + 500, Mi && Ur());
    }
  }
  function En(t) {
    Kr !== null && Kr.tag === 0 && (Ae & 6) === 0 && da();
    var r = Ae;
    Ae |= 1;
    var o = Rt.transition, l = Ne;
    try {
      if (Rt.transition = null, Ne = 1, t) return t();
    } finally {
      Ne = l, Rt.transition = o, Ae = r, (Ae & 6) === 0 && Ur();
    }
  }
  function Hc() {
    Ft = ca.current, je(ca);
  }
  function Sn(t, r) {
    t.finishedWork = null, t.finishedLanes = 0;
    var o = t.timeoutHandle;
    if (o !== -1 && (t.timeoutHandle = -1, Py(o)), Qe !== null) for (o = Qe.return; o !== null; ) {
      var l = o;
      switch (Js(l), l.tag) {
        case 1:
          l = l.type.childContextTypes, l != null && Ni();
          break;
        case 3:
          ia(), je(ht), je(ct), fc();
          break;
        case 5:
          uc(l);
          break;
        case 4:
          ia();
          break;
        case 13:
          je(He);
          break;
        case 19:
          je(He);
          break;
        case 10:
          oc(l.type._context);
          break;
        case 22:
        case 23:
          Hc();
      }
      o = o.return;
    }
    if (tt = t, Qe = t = Xr(t.current, null), ot = Ft = r, Ze = 0, po = null, Rc = rl = _n = 0, yt = mo = null, wn !== null) {
      for (r = 0; r < wn.length; r++) if (o = wn[r], l = o.interleaved, l !== null) {
        o.interleaved = null;
        var d = l.next, g = o.pending;
        if (g !== null) {
          var x = g.next;
          g.next = d, l.next = x;
        }
        o.pending = l;
      }
      wn = null;
    }
    return t;
  }
  function Im(t, r) {
    do {
      var o = Qe;
      try {
        if (ac(), Wi.current = Yi, qi) {
          for (var l = We.memoizedState; l !== null; ) {
            var d = l.queue;
            d !== null && (d.pending = null), l = l.next;
          }
          qi = !1;
        }
        if (kn = 0, et = Xe = We = null, io = !1, lo = 0, Lc.current = null, o === null || o.return === null) {
          Ze = 1, po = r, Qe = null;
          break;
        }
        e: {
          var g = t, x = o.return, P = o, N = r;
          if (r = ot, P.flags |= 32768, N !== null && typeof N == "object" && typeof N.then == "function") {
            var q = N, J = P, te = J.tag;
            if ((J.mode & 1) === 0 && (te === 0 || te === 11 || te === 15)) {
              var Z = J.alternate;
              Z ? (J.updateQueue = Z.updateQueue, J.memoizedState = Z.memoizedState, J.lanes = Z.lanes) : (J.updateQueue = null, J.memoizedState = null);
            }
            var le = om(x);
            if (le !== null) {
              le.flags &= -257, im(le, x, P, g, r), le.mode & 1 && am(g, q, r), r = le, N = q;
              var ce = r.updateQueue;
              if (ce === null) {
                var ue = /* @__PURE__ */ new Set();
                ue.add(N), r.updateQueue = ue;
              } else ce.add(N);
              break e;
            } else {
              if ((r & 1) === 0) {
                am(g, q, r), Wc();
                break e;
              }
              N = Error(a(426));
            }
          } else if (Ue && P.mode & 1) {
            var Ye = om(x);
            if (Ye !== null) {
              (Ye.flags & 65536) === 0 && (Ye.flags |= 256), im(Ye, x, P, g, r), rc(la(N, P));
              break e;
            }
          }
          g = N = la(N, P), Ze !== 4 && (Ze = 2), mo === null ? mo = [g] : mo.push(g), g = x;
          do {
            switch (g.tag) {
              case 3:
                g.flags |= 65536, r &= -r, g.lanes |= r;
                var B = rm(g, N, r);
                Pp(g, B);
                break e;
              case 1:
                P = N;
                var M = g.type, H = g.stateNode;
                if ((g.flags & 128) === 0 && (typeof M.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && (Gr === null || !Gr.has(H)))) {
                  g.flags |= 65536, r &= -r, g.lanes |= r;
                  var re = nm(g, P, r);
                  Pp(g, re);
                  break e;
                }
            }
            g = g.return;
          } while (g !== null);
        }
        Rm(o);
      } catch (de) {
        r = de, Qe === o && o !== null && (Qe = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Mm() {
    var t = tl.current;
    return tl.current = Yi, t === null ? Yi : t;
  }
  function Wc() {
    (Ze === 0 || Ze === 3 || Ze === 2) && (Ze = 4), tt === null || (_n & 268435455) === 0 && (rl & 268435455) === 0 || Qr(tt, ot);
  }
  function sl(t, r) {
    var o = Ae;
    Ae |= 2;
    var l = Mm();
    (tt !== t || ot !== r) && (yr = null, Sn(t, r));
    do
      try {
        ew();
        break;
      } catch (d) {
        Im(t, d);
      }
    while (!0);
    if (ac(), Ae = o, tl.current = l, Qe !== null) throw Error(a(261));
    return tt = null, ot = 0, Ze;
  }
  function ew() {
    for (; Qe !== null; ) Lm(Qe);
  }
  function tw() {
    for (; Qe !== null && !C0(); ) Lm(Qe);
  }
  function Lm(t) {
    var r = Vm(t.alternate, t, Ft);
    t.memoizedProps = t.pendingProps, r === null ? Rm(t) : Qe = r, Lc.current = null;
  }
  function Rm(t) {
    var r = t;
    do {
      var o = r.alternate;
      if (t = r.return, (r.flags & 32768) === 0) {
        if (o = Gy(o, r, Ft), o !== null) {
          Qe = o;
          return;
        }
      } else {
        if (o = Ky(o, r), o !== null) {
          o.flags &= 32767, Qe = o;
          return;
        }
        if (t !== null) t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
        else {
          Ze = 6, Qe = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        Qe = r;
        return;
      }
      Qe = r = t;
    } while (r !== null);
    Ze === 0 && (Ze = 5);
  }
  function Cn(t, r, o) {
    var l = Ne, d = Rt.transition;
    try {
      Rt.transition = null, Ne = 1, rw(t, r, o, l);
    } finally {
      Rt.transition = d, Ne = l;
    }
    return null;
  }
  function rw(t, r, o, l) {
    do
      da();
    while (Kr !== null);
    if ((Ae & 6) !== 0) throw Error(a(327));
    o = t.finishedWork;
    var d = t.finishedLanes;
    if (o === null) return null;
    if (t.finishedWork = null, t.finishedLanes = 0, o === t.current) throw Error(a(177));
    t.callbackNode = null, t.callbackPriority = 0;
    var g = o.lanes | o.childLanes;
    if (L0(t, g), t === tt && (Qe = tt = null, ot = 0), (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || al || (al = !0, Dm(fi, function() {
      return da(), null;
    })), g = (o.flags & 15990) !== 0, (o.subtreeFlags & 15990) !== 0 || g) {
      g = Rt.transition, Rt.transition = null;
      var x = Ne;
      Ne = 1;
      var P = Ae;
      Ae |= 4, Lc.current = null, Qy(t, o), zm(o, t), ky(Ws), yi = !!Hs, Ws = Hs = null, t.current = o, Xy(o), z0(), Ae = P, Ne = x, Rt.transition = g;
    } else t.current = o;
    if (al && (al = !1, Kr = t, ol = d), g = t.pendingLanes, g === 0 && (Gr = null), A0(o.stateNode), wt(t, Ke()), r !== null) for (l = t.onRecoverableError, o = 0; o < r.length; o++) d = r[o], l(d.value, { componentStack: d.stack, digest: d.digest });
    if (nl) throw nl = !1, t = Oc, Oc = null, t;
    return (ol & 1) !== 0 && t.tag !== 0 && da(), g = t.pendingLanes, (g & 1) !== 0 ? t === Vc ? go++ : (go = 0, Vc = t) : go = 0, Ur(), null;
  }
  function da() {
    if (Kr !== null) {
      var t = Sf(ol), r = Rt.transition, o = Ne;
      try {
        if (Rt.transition = null, Ne = 16 > t ? 16 : t, Kr === null) var l = !1;
        else {
          if (t = Kr, Kr = null, ol = 0, (Ae & 6) !== 0) throw Error(a(331));
          var d = Ae;
          for (Ae |= 4, se = t.current; se !== null; ) {
            var g = se, x = g.child;
            if ((se.flags & 16) !== 0) {
              var P = g.deletions;
              if (P !== null) {
                for (var N = 0; N < P.length; N++) {
                  var q = P[N];
                  for (se = q; se !== null; ) {
                    var J = se;
                    switch (J.tag) {
                      case 0:
                      case 11:
                      case 15:
                        fo(8, J, g);
                    }
                    var te = J.child;
                    if (te !== null) te.return = J, se = te;
                    else for (; se !== null; ) {
                      J = se;
                      var Z = J.sibling, le = J.return;
                      if (km(J), J === q) {
                        se = null;
                        break;
                      }
                      if (Z !== null) {
                        Z.return = le, se = Z;
                        break;
                      }
                      se = le;
                    }
                  }
                }
                var ce = g.alternate;
                if (ce !== null) {
                  var ue = ce.child;
                  if (ue !== null) {
                    ce.child = null;
                    do {
                      var Ye = ue.sibling;
                      ue.sibling = null, ue = Ye;
                    } while (ue !== null);
                  }
                }
                se = g;
              }
            }
            if ((g.subtreeFlags & 2064) !== 0 && x !== null) x.return = g, se = x;
            else e: for (; se !== null; ) {
              if (g = se, (g.flags & 2048) !== 0) switch (g.tag) {
                case 0:
                case 11:
                case 15:
                  fo(9, g, g.return);
              }
              var B = g.sibling;
              if (B !== null) {
                B.return = g.return, se = B;
                break e;
              }
              se = g.return;
            }
          }
          var M = t.current;
          for (se = M; se !== null; ) {
            x = se;
            var H = x.child;
            if ((x.subtreeFlags & 2064) !== 0 && H !== null) H.return = x, se = H;
            else e: for (x = M; se !== null; ) {
              if (P = se, (P.flags & 2048) !== 0) try {
                switch (P.tag) {
                  case 0:
                  case 11:
                  case 15:
                    el(9, P);
                }
              } catch (de) {
                Ge(P, P.return, de);
              }
              if (P === x) {
                se = null;
                break e;
              }
              var re = P.sibling;
              if (re !== null) {
                re.return = P.return, se = re;
                break e;
              }
              se = P.return;
            }
          }
          if (Ae = d, Ur(), nr && typeof nr.onPostCommitFiberRoot == "function") try {
            nr.onPostCommitFiberRoot(pi, t);
          } catch {
          }
          l = !0;
        }
        return l;
      } finally {
        Ne = o, Rt.transition = r;
      }
    }
    return !1;
  }
  function jm(t, r, o) {
    r = la(o, r), r = rm(t, r, 1), t = Wr(t, r, 1), r = gt(), t !== null && (ja(t, 1, r), wt(t, r));
  }
  function Ge(t, r, o) {
    if (t.tag === 3) jm(t, t, o);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        jm(r, t, o);
        break;
      } else if (r.tag === 1) {
        var l = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Gr === null || !Gr.has(l))) {
          t = la(o, t), t = nm(r, t, 1), r = Wr(r, t, 1), t = gt(), r !== null && (ja(r, 1, t), wt(r, t));
          break;
        }
      }
      r = r.return;
    }
  }
  function nw(t, r, o) {
    var l = t.pingCache;
    l !== null && l.delete(r), r = gt(), t.pingedLanes |= t.suspendedLanes & o, tt === t && (ot & o) === o && (Ze === 4 || Ze === 3 && (ot & 130023424) === ot && 500 > Ke() - jc ? Sn(t, 0) : Rc |= o), wt(t, r);
  }
  function Om(t, r) {
    r === 0 && ((t.mode & 1) === 0 ? r = 1 : (r = gi, gi <<= 1, (gi & 130023424) === 0 && (gi = 4194304)));
    var o = gt();
    t = hr(t, r), t !== null && (ja(t, r, o), wt(t, o));
  }
  function aw(t) {
    var r = t.memoizedState, o = 0;
    r !== null && (o = r.retryLane), Om(t, o);
  }
  function ow(t, r) {
    var o = 0;
    switch (t.tag) {
      case 13:
        var l = t.stateNode, d = t.memoizedState;
        d !== null && (o = d.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      default:
        throw Error(a(314));
    }
    l !== null && l.delete(r), Om(t, o);
  }
  var Vm;
  Vm = function(t, r, o) {
    if (t !== null) if (t.memoizedProps !== r.pendingProps || ht.current) bt = !0;
    else {
      if ((t.lanes & o) === 0 && (r.flags & 128) === 0) return bt = !1, qy(t, r, o);
      bt = (t.flags & 131072) !== 0;
    }
    else bt = !1, Ue && (r.flags & 1048576) !== 0 && yp(r, Ri, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var l = r.type;
        Zi(t, r), t = r.pendingProps;
        var d = Jn(r, ct.current);
        oa(r, o), d = gc(null, r, l, t, d, o);
        var g = hc();
        return r.flags |= 1, typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, vt(l) ? (g = !0, Ii(r)) : g = !1, r.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, sc(r), d.updater = Qi, r.stateNode = d, d._reactInternals = r, kc(r, l, t, o), r = Cc(null, r, l, !0, g, o)) : (r.tag = 0, Ue && g && Zs(r), mt(null, r, d, o), r = r.child), r;
      case 16:
        l = r.elementType;
        e: {
          switch (Zi(t, r), t = r.pendingProps, d = l._init, l = d(l._payload), r.type = l, d = r.tag = lw(l), t = Gt(l, t), d) {
            case 0:
              r = Sc(null, r, l, t, o);
              break e;
            case 1:
              r = fm(null, r, l, t, o);
              break e;
            case 11:
              r = lm(null, r, l, t, o);
              break e;
            case 14:
              r = sm(null, r, l, Gt(l.type, t), o);
              break e;
          }
          throw Error(a(
            306,
            l,
            ""
          ));
        }
        return r;
      case 0:
        return l = r.type, d = r.pendingProps, d = r.elementType === l ? d : Gt(l, d), Sc(t, r, l, d, o);
      case 1:
        return l = r.type, d = r.pendingProps, d = r.elementType === l ? d : Gt(l, d), fm(t, r, l, d, o);
      case 3:
        e: {
          if (pm(r), t === null) throw Error(a(387));
          l = r.pendingProps, g = r.memoizedState, d = g.element, $p(t, r), Ui(r, l, null, o);
          var x = r.memoizedState;
          if (l = x.element, g.isDehydrated) if (g = { element: l, isDehydrated: !1, cache: x.cache, pendingSuspenseBoundaries: x.pendingSuspenseBoundaries, transitions: x.transitions }, r.updateQueue.baseState = g, r.memoizedState = g, r.flags & 256) {
            d = la(Error(a(423)), r), r = mm(t, r, l, o, d);
            break e;
          } else if (l !== d) {
            d = la(Error(a(424)), r), r = mm(t, r, l, o, d);
            break e;
          } else for (At = Vr(r.stateNode.containerInfo.firstChild), Pt = r, Ue = !0, qt = null, o = Cp(r, null, l, o), r.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (ra(), l === d) {
              r = br(t, r, o);
              break e;
            }
            mt(t, r, l, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Fp(r), t === null && tc(r), l = r.type, d = r.pendingProps, g = t !== null ? t.memoizedProps : null, x = d.children, qs(l, d) ? x = null : g !== null && qs(l, g) && (r.flags |= 32), dm(t, r), mt(t, r, x, o), r.child;
      case 6:
        return t === null && tc(r), null;
      case 13:
        return gm(t, r, o);
      case 4:
        return cc(r, r.stateNode.containerInfo), l = r.pendingProps, t === null ? r.child = na(r, null, l, o) : mt(t, r, l, o), r.child;
      case 11:
        return l = r.type, d = r.pendingProps, d = r.elementType === l ? d : Gt(l, d), lm(t, r, l, d, o);
      case 7:
        return mt(t, r, r.pendingProps, o), r.child;
      case 8:
        return mt(t, r, r.pendingProps.children, o), r.child;
      case 12:
        return mt(t, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (l = r.type._context, d = r.pendingProps, g = r.memoizedProps, x = d.value, Le(Vi, l._currentValue), l._currentValue = x, g !== null) if (Wt(g.value, x)) {
            if (g.children === d.children && !ht.current) {
              r = br(t, r, o);
              break e;
            }
          } else for (g = r.child, g !== null && (g.return = r); g !== null; ) {
            var P = g.dependencies;
            if (P !== null) {
              x = g.child;
              for (var N = P.firstContext; N !== null; ) {
                if (N.context === l) {
                  if (g.tag === 1) {
                    N = vr(-1, o & -o), N.tag = 2;
                    var q = g.updateQueue;
                    if (q !== null) {
                      q = q.shared;
                      var J = q.pending;
                      J === null ? N.next = N : (N.next = J.next, J.next = N), q.pending = N;
                    }
                  }
                  g.lanes |= o, N = g.alternate, N !== null && (N.lanes |= o), ic(
                    g.return,
                    o,
                    r
                  ), P.lanes |= o;
                  break;
                }
                N = N.next;
              }
            } else if (g.tag === 10) x = g.type === r.type ? null : g.child;
            else if (g.tag === 18) {
              if (x = g.return, x === null) throw Error(a(341));
              x.lanes |= o, P = x.alternate, P !== null && (P.lanes |= o), ic(x, o, r), x = g.sibling;
            } else x = g.child;
            if (x !== null) x.return = g;
            else for (x = g; x !== null; ) {
              if (x === r) {
                x = null;
                break;
              }
              if (g = x.sibling, g !== null) {
                g.return = x.return, x = g;
                break;
              }
              x = x.return;
            }
            g = x;
          }
          mt(t, r, d.children, o), r = r.child;
        }
        return r;
      case 9:
        return d = r.type, l = r.pendingProps.children, oa(r, o), d = Mt(d), l = l(d), r.flags |= 1, mt(t, r, l, o), r.child;
      case 14:
        return l = r.type, d = Gt(l, r.pendingProps), d = Gt(l.type, d), sm(t, r, l, d, o);
      case 15:
        return cm(t, r, r.type, r.pendingProps, o);
      case 17:
        return l = r.type, d = r.pendingProps, d = r.elementType === l ? d : Gt(l, d), Zi(t, r), r.tag = 1, vt(l) ? (t = !0, Ii(r)) : t = !1, oa(r, o), em(r, l, d), kc(r, l, d, o), Cc(null, r, l, !0, t, o);
      case 19:
        return vm(t, r, o);
      case 22:
        return um(t, r, o);
    }
    throw Error(a(156, r.tag));
  };
  function Dm(t, r) {
    return wf(t, r);
  }
  function iw(t, r, o, l) {
    this.tag = t, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function jt(t, r, o, l) {
    return new iw(t, r, o, l);
  }
  function qc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function lw(t) {
    if (typeof t == "function") return qc(t) ? 1 : 0;
    if (t != null) {
      if (t = t.$$typeof, t === S) return 11;
      if (t === j) return 14;
    }
    return 2;
  }
  function Xr(t, r) {
    var o = t.alternate;
    return o === null ? (o = jt(t.tag, r, t.key, t.mode), o.elementType = t.elementType, o.type = t.type, o.stateNode = t.stateNode, o.alternate = t, t.alternate = o) : (o.pendingProps = r, o.type = t.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = t.flags & 14680064, o.childLanes = t.childLanes, o.lanes = t.lanes, o.child = t.child, o.memoizedProps = t.memoizedProps, o.memoizedState = t.memoizedState, o.updateQueue = t.updateQueue, r = t.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = t.sibling, o.index = t.index, o.ref = t.ref, o;
  }
  function cl(t, r, o, l, d, g) {
    var x = 2;
    if (l = t, typeof t == "function") qc(t) && (x = 1);
    else if (typeof t == "string") x = 5;
    else e: switch (t) {
      case K:
        return zn(o.children, d, g, r);
      case X:
        x = 8, d |= 8;
        break;
      case ee:
        return t = jt(12, o, r, d | 2), t.elementType = ee, t.lanes = g, t;
      case R:
        return t = jt(13, o, r, d), t.elementType = R, t.lanes = g, t;
      case C:
        return t = jt(19, o, r, d), t.elementType = C, t.lanes = g, t;
      case T:
        return ul(o, d, g, r);
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case ie:
            x = 10;
            break e;
          case ae:
            x = 9;
            break e;
          case S:
            x = 11;
            break e;
          case j:
            x = 14;
            break e;
          case L:
            x = 16, l = null;
            break e;
        }
        throw Error(a(130, t == null ? t : typeof t, ""));
    }
    return r = jt(x, o, r, d), r.elementType = t, r.type = l, r.lanes = g, r;
  }
  function zn(t, r, o, l) {
    return t = jt(7, t, l, r), t.lanes = o, t;
  }
  function ul(t, r, o, l) {
    return t = jt(22, t, l, r), t.elementType = T, t.lanes = o, t.stateNode = { isHidden: !1 }, t;
  }
  function Gc(t, r, o) {
    return t = jt(6, t, null, r), t.lanes = o, t;
  }
  function Kc(t, r, o) {
    return r = jt(4, t.children !== null ? t.children : [], t.key, r), r.lanes = o, r.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, r;
  }
  function sw(t, r, o, l, d) {
    this.tag = r, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = xs(0), this.expirationTimes = xs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xs(0), this.identifierPrefix = l, this.onRecoverableError = d, this.mutableSourceEagerHydrationData = null;
  }
  function Yc(t, r, o, l, d, g, x, P, N) {
    return t = new sw(t, r, o, P, N), r === 1 ? (r = 1, g === !0 && (r |= 8)) : r = 0, g = jt(3, null, null, r), t.current = g, g.stateNode = t, g.memoizedState = { element: l, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, sc(g), t;
  }
  function cw(t, r, o) {
    var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Y, key: l == null ? null : "" + l, children: t, containerInfo: r, implementation: o };
  }
  function Bm(t) {
    if (!t) return Br;
    t = t._reactInternals;
    e: {
      if (gn(t) !== t || t.tag !== 1) throw Error(a(170));
      var r = t;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (vt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(a(171));
    }
    if (t.tag === 1) {
      var o = t.type;
      if (vt(o)) return hp(t, o, r);
    }
    return r;
  }
  function Um(t, r, o, l, d, g, x, P, N) {
    return t = Yc(o, l, !0, t, d, g, x, P, N), t.context = Bm(null), o = t.current, l = gt(), d = Yr(o), g = vr(l, d), g.callback = r ?? null, Wr(o, g, d), t.current.lanes = d, ja(t, d, l), wt(t, l), t;
  }
  function dl(t, r, o, l) {
    var d = r.current, g = gt(), x = Yr(d);
    return o = Bm(o), r.context === null ? r.context = o : r.pendingContext = o, r = vr(g, x), r.payload = { element: t }, l = l === void 0 ? null : l, l !== null && (r.callback = l), t = Wr(d, r, x), t !== null && (Qt(t, d, x, g), Bi(t, d, x)), x;
  }
  function fl(t) {
    if (t = t.current, !t.child) return null;
    switch (t.child.tag) {
      case 5:
        return t.child.stateNode;
      default:
        return t.child.stateNode;
    }
  }
  function Hm(t, r) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var o = t.retryLane;
      t.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function Qc(t, r) {
    Hm(t, r), (t = t.alternate) && Hm(t, r);
  }
  function uw() {
    return null;
  }
  var Wm = typeof reportError == "function" ? reportError : function(t) {
    console.error(t);
  };
  function Xc(t) {
    this._internalRoot = t;
  }
  pl.prototype.render = Xc.prototype.render = function(t) {
    var r = this._internalRoot;
    if (r === null) throw Error(a(409));
    dl(t, r, null, null);
  }, pl.prototype.unmount = Xc.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var r = t.containerInfo;
      En(function() {
        dl(null, t, null, null);
      }), r[fr] = null;
    }
  };
  function pl(t) {
    this._internalRoot = t;
  }
  pl.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var r = $f();
      t = { blockedOn: null, target: t, priority: r };
      for (var o = 0; o < Rr.length && r !== 0 && r < Rr[o].priority; o++) ;
      Rr.splice(o, 0, t), o === 0 && Ff(t);
    }
  };
  function Zc(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function ml(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "));
  }
  function qm() {
  }
  function dw(t, r, o, l, d) {
    if (d) {
      if (typeof l == "function") {
        var g = l;
        l = function() {
          var q = fl(x);
          g.call(q);
        };
      }
      var x = Um(r, l, t, 0, null, !1, !1, "", qm);
      return t._reactRootContainer = x, t[fr] = x.current, Za(t.nodeType === 8 ? t.parentNode : t), En(), x;
    }
    for (; d = t.lastChild; ) t.removeChild(d);
    if (typeof l == "function") {
      var P = l;
      l = function() {
        var q = fl(N);
        P.call(q);
      };
    }
    var N = Yc(t, 0, !1, null, null, !1, !1, "", qm);
    return t._reactRootContainer = N, t[fr] = N.current, Za(t.nodeType === 8 ? t.parentNode : t), En(function() {
      dl(r, N, o, l);
    }), N;
  }
  function gl(t, r, o, l, d) {
    var g = o._reactRootContainer;
    if (g) {
      var x = g;
      if (typeof d == "function") {
        var P = d;
        d = function() {
          var N = fl(x);
          P.call(N);
        };
      }
      dl(r, x, t, d);
    } else x = dw(o, r, t, d, l);
    return fl(x);
  }
  Cf = function(t) {
    switch (t.tag) {
      case 3:
        var r = t.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = Ra(r.pendingLanes);
          o !== 0 && (ks(r, o | 1), wt(r, Ke()), (Ae & 6) === 0 && (ua = Ke() + 500, Ur()));
        }
        break;
      case 13:
        En(function() {
          var l = hr(t, 1);
          if (l !== null) {
            var d = gt();
            Qt(l, t, 1, d);
          }
        }), Qc(t, 1);
    }
  }, _s = function(t) {
    if (t.tag === 13) {
      var r = hr(t, 134217728);
      if (r !== null) {
        var o = gt();
        Qt(r, t, 134217728, o);
      }
      Qc(t, 134217728);
    }
  }, zf = function(t) {
    if (t.tag === 13) {
      var r = Yr(t), o = hr(t, r);
      if (o !== null) {
        var l = gt();
        Qt(o, t, r, l);
      }
      Qc(t, r);
    }
  }, $f = function() {
    return Ne;
  }, Pf = function(t, r) {
    var o = Ne;
    try {
      return Ne = t, r();
    } finally {
      Ne = o;
    }
  }, gs = function(t, r, o) {
    switch (r) {
      case "input":
        if (rr(t, o), r = o.name, o.type === "radio" && r != null) {
          for (o = t; o.parentNode; ) o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var l = o[r];
            if (l !== t && l.form === t.form) {
              var d = Ti(l);
              if (!d) throw Error(a(90));
              si(l), rr(l, d);
            }
          }
        }
        break;
      case "textarea":
        nf(t, o);
        break;
      case "select":
        r = o.value, r != null && Dn(t, !!o.multiple, r, !1);
    }
  }, pf = Uc, mf = En;
  var fw = { usingClientEntryPoint: !1, Events: [to, Xn, Ti, df, ff, Uc] }, ho = { findFiberByHostInstance: hn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, pw = { bundleType: ho.bundleType, version: ho.version, rendererPackageName: ho.rendererPackageName, rendererConfig: ho.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: W.ReactCurrentDispatcher, findHostInstanceByFiber: function(t) {
    return t = bf(t), t === null ? null : t.stateNode;
  }, findFiberByHostInstance: ho.findFiberByHostInstance || uw, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var hl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!hl.isDisabled && hl.supportsFiber) try {
      pi = hl.inject(pw), nr = hl;
    } catch {
    }
  }
  return xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fw, xt.createPortal = function(t, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Zc(r)) throw Error(a(200));
    return cw(t, r, null, o);
  }, xt.createRoot = function(t, r) {
    if (!Zc(t)) throw Error(a(299));
    var o = !1, l = "", d = Wm;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (l = r.identifierPrefix), r.onRecoverableError !== void 0 && (d = r.onRecoverableError)), r = Yc(t, 1, !1, null, null, o, !1, l, d), t[fr] = r.current, Za(t.nodeType === 8 ? t.parentNode : t), new Xc(r);
  }, xt.findDOMNode = function(t) {
    if (t == null) return null;
    if (t.nodeType === 1) return t;
    var r = t._reactInternals;
    if (r === void 0)
      throw typeof t.render == "function" ? Error(a(188)) : (t = Object.keys(t).join(","), Error(a(268, t)));
    return t = bf(r), t = t === null ? null : t.stateNode, t;
  }, xt.flushSync = function(t) {
    return En(t);
  }, xt.hydrate = function(t, r, o) {
    if (!ml(r)) throw Error(a(200));
    return gl(null, t, r, !0, o);
  }, xt.hydrateRoot = function(t, r, o) {
    if (!Zc(t)) throw Error(a(405));
    var l = o != null && o.hydratedSources || null, d = !1, g = "", x = Wm;
    if (o != null && (o.unstable_strictMode === !0 && (d = !0), o.identifierPrefix !== void 0 && (g = o.identifierPrefix), o.onRecoverableError !== void 0 && (x = o.onRecoverableError)), r = Um(r, null, t, 1, o ?? null, d, !1, g, x), t[fr] = r.current, Za(t), l) for (t = 0; t < l.length; t++) o = l[t], d = o._getVersion, d = d(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, d] : r.mutableSourceEagerHydrationData.push(
      o,
      d
    );
    return new pl(r);
  }, xt.render = function(t, r, o) {
    if (!ml(r)) throw Error(a(200));
    return gl(null, t, r, !1, o);
  }, xt.unmountComponentAtNode = function(t) {
    if (!ml(t)) throw Error(a(40));
    return t._reactRootContainer ? (En(function() {
      gl(null, null, t, !1, function() {
        t._reactRootContainer = null, t[fr] = null;
      });
    }), !0) : !1;
  }, xt.unstable_batchedUpdates = Uc, xt.unstable_renderSubtreeIntoContainer = function(t, r, o, l) {
    if (!ml(o)) throw Error(a(200));
    if (t == null || t._reactInternals === void 0) throw Error(a(38));
    return gl(t, r, o, !1, l);
  }, xt.version = "18.3.1-next-f1338f8080-20240426", xt;
}
var rg;
function Vh() {
  if (rg) return tu.exports;
  rg = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (n) {
        console.error(n);
      }
  }
  return e(), tu.exports = bw(), tu.exports;
}
var ng;
function yw() {
  if (ng) return vl;
  ng = 1;
  var e = Vh();
  return vl.createRoot = e.createRoot, vl.hydrateRoot = e.hydrateRoot, vl;
}
var ww = yw();
const xw = `:root{--border-highlight-color: rgb(7, 45, 162);--border-neutral-bold-color: rgba(0, 0, 0, .8);--border-neutral-regular-color: rgba(0, 0, 0, .3);--border-neutral-subtle-color: rgba(0, 0, 0, .1);--border-neutral-minimal-color: rgba(0, 0, 0, .05);--border-positive-color: rgb(43, 92, 25);--border-warning-color: rgb(195, 92, 0);--border-negative-color: rgb(203, 31, 31);--surface-highlight-subtle-color: rgb(211, 221, 253);--surface-highlight-bold-color: rgb(7, 45, 162);--surface-container-color: rgb(255, 255, 255);--surface-level-01-color: rgba(250, 250, 250, .98);--surface-level-02-color: rgba(242, 242, 242, .95);--surface-level-03-color: rgba(235, 235, 235, .92);--surface-inverse-color: rgba(0, 0, 0, .97);--surface-positive-subtle-color: rgb(222, 242, 214);--surface-positive-bold-color: rgb(43, 92, 25);--surface-warning-subtle-color: rgb(255, 228, 204);--surface-warning-bold-color: rgb(137, 64, 0);--surface-negative-subtle-color: rgb(245, 210, 210);--surface-negative-bold-color: rgb(203, 31, 31);--surface-overlay-color: rgba(255, 255, 255, .97);--content-highlight-color: rgb(7, 45, 162);--content-neutral-bold-color: rgba(15, 15, 15, .95);--content-neutral-regular-color: rgba(15, 15, 15, .75);--content-neutral-subtle-color: rgba(15, 15, 15, .6);--content-inverse-bold-color: rgb(255, 255, 255);--content-inverse-regular-color: rgba(255, 255, 255, .7);--content-inverse-subtle-color: rgba(255, 255, 255, .6);--content-positive-color: rgb(28, 60, 17);--content-warning-color: rgb(92, 43, 0);--content-negative-color: rgb(155, 24, 24);--interactive-highlight-color: rgb(7, 45, 162);--interactive-neutral-bold-color: rgb(0, 0, 0);--interactive-neutral-regular-color: rgba(235, 235, 235, .92);--interactive-neutral-subtle-color: rgba(242, 242, 242, .95);--interactive-neutral-minimal-color: rgb(255, 255, 255);--interactive-inverse-color: rgb(255, 255, 255);--interactive-negative-bold-color: rgb(155, 24, 24);--interactive-negative-subtle-color: rgb(245, 210, 210);--background-base-color: rgb(235, 240, 254);--background-accent-color: rgb(123, 154, 250);--background-glow-color: rgb(186, 132, 241);--background-backdrop-color: rgba(255, 255, 255, .8);--paloma-font-family-body: Electronic Arts Text;--paloma-font-family-heading: Electronic Arts Display;--font-size-body-medium: 1rem;--line-height-body-medium: 1.5rem;--font-size-body-large: 1.125rem;--line-height-body-large: 2rem;--font-size-body-x-small: .75rem;--line-height-body-x-small: 1rem;--font-size-body-small: .875rem;--line-height-body-small: 1.25rem;--font-size-heading-x-small: 1.25rem;--line-height-heading-x-small: 1.75rem;--font-size-lg-heading-large: 3.25rem;--line-height-lg-heading-large: 4rem;--font-size-xs-heading-large: 2rem;--line-height-xs-heading-large: 2.5rem;--font-size-heading-small: 1.75rem;--line-height-heading-small: 2.25rem;--font-size-xs-heading-medium: 2rem;--line-height-xs-heading-medium: 2.5rem;--font-size-lg-heading-x-large: 4.5rem;--line-height-lg-heading-x-large: 5rem;--font-size-lg-heading-medium: 2.25rem;--line-height-lg-heading-medium: 2.75rem;--font-size-xs-heading-x-large: 2.25rem;--line-height-xs-heading-x-large: 2.625rem }[data-paloma-mode=dark]{--border-highlight-color: rgb(123, 154, 250);--border-neutral-bold-color: rgba(255, 255, 255, .8);--border-neutral-regular-color: rgba(255, 255, 255, .3);--border-neutral-subtle-color: rgba(255, 255, 255, .1);--border-neutral-minimal-color: rgba(255, 255, 255, .05);--border-positive-color: rgb(88, 188, 52);--border-warning-color: rgb(255, 120, 0);--border-negative-color: rgb(221, 108, 108);--surface-highlight-subtle-color: rgba(211, 221, 253, .1);--surface-highlight-bold-color: rgb(211, 221, 253);--surface-container-color: rgba(15, 15, 15, .06);--surface-level-01-color: rgba(31, 31, 31, .12);--surface-level-02-color: rgba(61, 61, 61, .16);--surface-level-03-color: rgba(122, 122, 122, .2);--surface-inverse-color: rgba(255, 255, 255, .97);--surface-positive-subtle-color: rgba(27, 58, 16, .4);--surface-positive-bold-color: rgb(88, 188, 52);--surface-warning-subtle-color: rgba(79, 37, 0, .5);--surface-warning-bold-color: rgb(255, 120, 0);--surface-negative-subtle-color: rgba(63, 10, 10, .5);--surface-negative-bold-color: rgb(221, 108, 108);--surface-overlay-color: rgba(0, 0, 0, .97);--content-highlight-color: rgb(123, 154, 250);--content-neutral-bold-color: rgba(255, 255, 255, .97);--content-neutral-regular-color: rgba(255, 255, 255, .75);--content-neutral-subtle-color: rgba(255, 255, 255, .5);--content-inverse-bold-color: rgb(15, 15, 15);--content-inverse-regular-color: rgba(0, 0, 0, .75);--content-inverse-subtle-color: rgba(0, 0, 0, .6);--content-positive-color: rgb(188, 228, 174);--content-warning-color: rgb(255, 120, 0);--content-negative-color: rgb(229, 144, 144);--interactive-highlight-color: rgb(123, 154, 250);--interactive-neutral-bold-color: rgb(255, 255, 255);--interactive-neutral-regular-color: rgba(122, 122, 122, .2);--interactive-neutral-subtle-color: rgba(61, 61, 61, .16);--interactive-neutral-minimal-color: rgba(61, 61, 61, .16);--interactive-inverse-color: rgb(15, 15, 15);--interactive-negative-bold-color: rgb(245, 210, 210);--interactive-negative-subtle-color: rgb(229, 144, 144);--background-base-color: rgb(1, 8, 29);--background-accent-color: rgb(109, 23, 196);--background-glow-color: rgb(9, 61, 216);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-mode=light]{--border-highlight-color: rgb(7, 45, 162);--border-neutral-bold-color: rgba(0, 0, 0, .8);--border-neutral-regular-color: rgba(0, 0, 0, .3);--border-neutral-subtle-color: rgba(0, 0, 0, .1);--border-neutral-minimal-color: rgba(0, 0, 0, .05);--border-positive-color: rgb(43, 92, 25);--border-warning-color: rgb(195, 92, 0);--border-negative-color: rgb(203, 31, 31);--surface-highlight-subtle-color: rgb(211, 221, 253);--surface-highlight-bold-color: rgb(7, 45, 162);--surface-container-color: rgb(255, 255, 255);--surface-level-01-color: rgba(250, 250, 250, .98);--surface-level-02-color: rgba(242, 242, 242, .95);--surface-level-03-color: rgba(235, 235, 235, .92);--surface-inverse-color: rgba(0, 0, 0, .97);--surface-positive-subtle-color: rgb(222, 242, 214);--surface-positive-bold-color: rgb(43, 92, 25);--surface-warning-subtle-color: rgb(255, 228, 204);--surface-warning-bold-color: rgb(137, 64, 0);--surface-negative-subtle-color: rgb(245, 210, 210);--surface-negative-bold-color: rgb(203, 31, 31);--surface-overlay-color: rgba(255, 255, 255, .97);--content-highlight-color: rgb(7, 45, 162);--content-neutral-bold-color: rgba(15, 15, 15, .95);--content-neutral-regular-color: rgba(15, 15, 15, .75);--content-neutral-subtle-color: rgba(15, 15, 15, .6);--content-inverse-bold-color: rgb(255, 255, 255);--content-inverse-regular-color: rgba(255, 255, 255, .7);--content-inverse-subtle-color: rgba(255, 255, 255, .6);--content-positive-color: rgb(28, 60, 17);--content-warning-color: rgb(92, 43, 0);--content-negative-color: rgb(155, 24, 24);--interactive-highlight-color: rgb(7, 45, 162);--interactive-neutral-bold-color: rgb(0, 0, 0);--interactive-neutral-regular-color: rgba(235, 235, 235, .92);--interactive-neutral-subtle-color: rgba(242, 242, 242, .95);--interactive-neutral-minimal-color: rgb(255, 255, 255);--interactive-inverse-color: rgb(255, 255, 255);--interactive-negative-bold-color: rgb(155, 24, 24);--interactive-negative-subtle-color: rgb(245, 210, 210);--background-base-color: rgb(235, 240, 254);--background-accent-color: rgb(123, 154, 250);--background-glow-color: rgb(186, 132, 241);--background-backdrop-color: rgba(255, 255, 255, .8);--paloma-font-family-body: Electronic Arts Text;--paloma-font-family-heading: Electronic Arts Display }[data-paloma-theme=ea-blue][data-paloma-mode=light]{--border-highlight-color: rgb(7, 45, 162);--surface-highlight-subtle-color: rgb(211, 221, 253);--surface-highlight-bold-color: rgb(7, 45, 162);--content-highlight-color: rgb(7, 45, 162);--interactive-highlight-color: rgb(7, 45, 162);--background-base-color: rgb(235, 240, 254);--background-accent-color: rgb(123, 154, 250);--background-glow-color: rgb(186, 132, 241);--background-backdrop-color: rgba(255, 255, 255, .8) }[data-paloma-theme=ea-blue][data-paloma-mode=dark]{--border-highlight-color: rgb(123, 154, 250);--surface-highlight-subtle-color: rgba(211, 221, 253, .1);--surface-highlight-bold-color: rgb(211, 221, 253);--content-highlight-color: rgb(123, 154, 250);--interactive-highlight-color: rgb(123, 154, 250);--background-base-color: rgb(1, 8, 29);--background-accent-color: rgb(109, 23, 196);--background-glow-color: rgb(9, 61, 216);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-theme=ea-sims][data-paloma-mode=light]{--border-highlight-color: rgb(30, 134, 179);--surface-highlight-subtle-color: rgba(124, 203, 236, .1);--surface-highlight-bold-color: rgb(22, 101, 134);--content-highlight-color: rgb(22, 101, 134);--interactive-highlight-color: rgb(31, 52, 98);--background-base-color: rgb(235, 238, 246);--background-accent-color: rgb(168, 220, 243);--background-glow-color: rgb(173, 187, 219);--background-backdrop-color: rgba(255, 255, 255, .8) }[data-paloma-theme=ea-sims][data-paloma-mode=dark]{--border-highlight-color: rgb(30, 134, 179);--surface-highlight-subtle-color: rgba(81, 185, 230, .1);--surface-highlight-bold-color: rgb(168, 220, 243);--content-highlight-color: rgb(168, 220, 243);--interactive-highlight-color: rgb(37, 168, 224);--background-base-color: rgb(20, 34, 66);--background-accent-color: rgb(37, 168, 224);--background-glow-color: rgb(51, 86, 164);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-theme=fc-green][data-paloma-mode=light]{--border-highlight-color: rgb(4, 146, 62);--surface-highlight-subtle-color: rgba(57, 246, 134, .1);--surface-highlight-bold-color: rgb(4, 146, 62);--content-highlight-color: rgb(3, 98, 42);--interactive-highlight-color: rgb(3, 98, 42);--background-base-color: rgb(227, 251, 233);--background-accent-color: rgb(106, 248, 164);--background-glow-color: rgb(7, 244, 104);--background-backdrop-color: rgba(255, 255, 255, .8) }[data-paloma-theme=fc-green][data-paloma-mode=dark]{--border-highlight-color: rgb(4, 146, 62);--surface-highlight-subtle-color: rgba(106, 248, 164, .1);--surface-highlight-bold-color: rgb(57, 246, 134);--content-highlight-color: rgb(7, 244, 104);--interactive-highlight-color: rgb(6, 195, 83);--background-base-color: rgb(2, 11, 7);--background-accent-color: rgb(3, 98, 42);--background-glow-color: rgb(7, 244, 104);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-theme=ea-madden][data-paloma-mode=dark]{--border-highlight-color: rgb(255, 41, 0);--surface-highlight-subtle-color: rgba(255, 88, 56, .1);--surface-highlight-bold-color: rgb(255, 88, 56);--content-highlight-color: rgb(255, 88, 56);--interactive-highlight-color: rgb(255, 88, 56);--background-base-color: rgb(0, 0, 0);--background-accent-color: rgb(255, 127, 102);--background-glow-color: rgb(255, 41, 0);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-theme=ea-madden][data-paloma-mode=light]{--border-highlight-color: rgb(255, 88, 56);--surface-highlight-subtle-color: rgba(255, 41, 0, .1);--surface-highlight-bold-color: rgb(255, 41, 0);--content-highlight-color: rgb(204, 33, 0);--interactive-highlight-color: rgb(204, 33, 0);--background-base-color: rgb(255, 238, 235);--background-accent-color: rgb(255, 222, 215);--background-glow-color: rgb(255, 212, 204);--background-backdrop-color: rgba(255, 255, 255, .8) }[data-paloma-theme=ea-battlefield6][data-paloma-mode=light]{--border-highlight-color: rgb(255, 60, 0);--surface-highlight-subtle-color: rgba(229, 54, 0, .1);--surface-highlight-bold-color: rgb(229, 54, 0);--content-highlight-color: rgb(204, 48, 0);--interactive-highlight-color: rgb(204, 48, 0);--background-base-color: rgb(191, 202, 209);--background-accent-color: rgb(255, 216, 204);--background-glow-color: rgb(255, 177, 153);--background-backdrop-color: rgba(255, 255, 255, .8) }[data-paloma-theme=ea-battlefield6][data-paloma-mode=dark]{--border-highlight-color: rgb(229, 54, 0);--surface-highlight-subtle-color: rgba(255, 60, 0, .1);--surface-highlight-bold-color: rgb(255, 60, 0);--content-highlight-color: rgb(255, 60, 0);--interactive-highlight-color: rgb(255, 60, 0);--background-base-color: rgb(0, 0, 0);--background-accent-color: rgb(255, 99, 51);--background-glow-color: rgb(229, 54, 0);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-theme=purple][data-paloma-mode=light]{--border-highlight-color: rgb(217, 115, 186);--surface-highlight-subtle-color: rgb(243, 212, 234);--surface-highlight-bold-color: rgb(151, 32, 115);--content-highlight-color: rgb(151, 32, 115);--interactive-highlight-color: rgb(151, 32, 115);--background-base-color: rgb(252, 245, 250);--background-accent-color: rgb(217, 115, 186);--background-glow-color: rgb(186, 132, 241);--background-backdrop-color: rgba(255, 255, 255, .8) }[data-paloma-theme=purple][data-paloma-mode=dark]{--border-highlight-color: rgb(151, 32, 115);--surface-highlight-subtle-color: rgba(243, 212, 234, .1);--surface-highlight-bold-color: rgb(243, 212, 234);--content-highlight-color: rgb(217, 115, 186);--interactive-highlight-color: rgb(217, 115, 186);--background-base-color: rgb(22, 5, 17);--background-accent-color: rgb(151, 32, 115);--background-glow-color: rgb(135, 42, 230);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-theme=red][data-paloma-mode=light]{--border-highlight-color: rgb(229, 144, 144);--surface-highlight-subtle-color: rgb(245, 210, 210);--surface-highlight-bold-color: rgb(109, 17, 17);--content-highlight-color: rgb(109, 17, 17);--interactive-highlight-color: rgb(109, 17, 17);--background-base-color: rgb(255, 235, 235);--background-accent-color: rgb(229, 144, 144);--background-glow-color: rgb(229, 144, 144);--background-backdrop-color: rgba(255, 255, 255, .8) }[data-paloma-theme=red][data-paloma-mode=dark]{--border-highlight-color: rgb(109, 17, 17);--surface-highlight-subtle-color: rgba(245, 210, 210, .1);--surface-highlight-bold-color: rgb(245, 210, 210);--content-highlight-color: rgb(229, 144, 144);--interactive-highlight-color: rgb(229, 144, 144);--background-base-color: rgb(22, 3, 3);--background-accent-color: rgb(155, 24, 24);--background-glow-color: rgb(224, 0, 0);--background-backdrop-color: rgba(15, 15, 15, .9) }[data-paloma-theme=ea-madden][data-paloma-variant=loyalty][data-paloma-mode=dark]{--background-glow-color: rgba(234, 205, 111, .3);--content-highlight-color: rgb(234, 205, 111) }[type=search]::-webkit-search-decoration{display:none}[type=search]::-webkit-search-cancel-button{display:none}[type=search]::-webkit-search-results-button{display:none}[type=search]::-webkit-search-results-decoration{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.container{width:100%;margin-right:auto;margin-left:auto;padding-right:24px;padding-left:24px}@media(min-width:1440px){.container{max-width:1440px;padding-right:40px;padding-left:40px}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.visible{visibility:visible}.invisible{visibility:hidden}.collapse{visibility:collapse}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.\\!relative{position:relative!important}.relative{position:relative}.\\!sticky{position:sticky!important}.sticky{position:sticky}.inset-0{top:0;right:0;bottom:0;left:0}.inset-x-0{left:0;right:0}.-bottom-0{bottom:-0px}.-bottom-0\\.5{bottom:-.125rem}.-bottom-1{bottom:-.25rem}.-bottom-1\\.5{bottom:-.375rem}.-bottom-2{bottom:-.5rem}.-bottom-3{bottom:-.75rem}.-bottom-3\\.5{bottom:-.875rem}.-bottom-8{bottom:-2rem}.-bottom-\\[6px\\]{bottom:-6px}.-left-0{left:-0px}.-left-0\\.5{left:-.125rem}.-left-2{left:-.5rem}.-left-8{left:-2rem}.-left-\\[125\\%\\]{left:-125%}.-left-\\[20px\\]{left:-20px}.-left-\\[50\\%\\]{left:-50%}.-right-0{right:-0px}.-right-0\\.5{right:-.125rem}.-right-2{right:-.5rem}.-right-\\[40\\%\\]{right:-40%}.-right-\\[50\\%\\]{right:-50%}.-top-0{top:-0px}.-top-0\\.5{top:-.125rem}.-top-1{top:-.25rem}.-top-1\\.5{top:-.375rem}.-top-10{top:-2.5rem}.-top-2{top:-.5rem}.-top-3{top:-.75rem}.-top-3\\.5{top:-.875rem}.bottom-0{bottom:0}.bottom-1{bottom:.25rem}.bottom-2{bottom:.5rem}.bottom-\\[10\\%\\]{bottom:10%}.end-0{inset-inline-end:0px}.left-0{left:0}.left-1\\/2{left:50%}.left-4{left:1rem}.left-\\[-350px\\]{left:-350px}.left-\\[12\\.5\\%\\]{left:12.5%}.right-0{right:0}.right-3{right:.75rem}.right-\\[15\\%\\]{right:15%}.top-0{top:0}.top-1{top:.25rem}.top-12{top:3rem}.top-14{top:3.5rem}.top-2{top:.5rem}.top-28{top:7rem}.top-3{top:.75rem}.top-4{top:1rem}.top-\\[10\\%\\]{top:10%}.top-\\[20\\%\\]{top:20%}.top-\\[7\\.25rem\\]{top:7.25rem}.top-\\[90vh\\]{top:90vh}.-z-\\[1\\]{z-index:-1}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.z-\\[10\\]{z-index:10}.z-\\[15\\]{z-index:15}.z-\\[2147483646\\]{z-index:2147483646}.z-\\[2147483647\\]{z-index:2147483647}.z-\\[90\\]{z-index:90}.col-span-4{grid-column:span 4 / span 4}.col-span-full{grid-column:1 / -1}.\\!col-start-3{grid-column-start:3!important}.m-0{margin:0}.m-auto{margin:auto}.mx-0{margin-left:0;margin-right:0}.mx-0\\.5{margin-left:.125rem;margin-right:.125rem}.mx-1{margin-left:.25rem;margin-right:.25rem}.mx-10{margin-left:2.5rem;margin-right:2.5rem}.mx-auto{margin-left:auto;margin-right:auto}.my-0{margin-top:0;margin-bottom:0}.my-1{margin-top:.25rem;margin-bottom:.25rem}.my-2{margin-top:.5rem;margin-bottom:.5rem}.my-3{margin-top:.75rem;margin-bottom:.75rem}.my-4{margin-top:1rem;margin-bottom:1rem}.my-auto{margin-top:auto;margin-bottom:auto}.-mb-2{margin-bottom:-.5rem}.-ms-10{margin-inline-start:-2.5rem}.-mt-10{margin-top:-2.5rem}.-mt-20{margin-top:-5rem}.-mt-6{margin-top:-1.5rem}.-mt-\\[52px\\]{margin-top:-52px}.-mt-\\[72px\\]{margin-top:-72px}.mb-1{margin-bottom:.25rem}.mb-10{margin-bottom:2.5rem}.mb-2{margin-bottom:.5rem}.mb-20{margin-bottom:5rem}.mb-3{margin-bottom:.75rem}.mb-5{margin-bottom:1.25rem}.mb-6{margin-bottom:1.5rem}.mb-\\[52px\\]{margin-bottom:52px}.mb-\\[72px\\]{margin-bottom:72px}.ml-0{margin-left:0}.ml-4{margin-left:1rem}.ml-5{margin-left:1.25rem}.ml-6{margin-left:1.5rem}.ml-8{margin-left:2rem}.mr-1{margin-right:.25rem}.mr-4{margin-right:1rem}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-20{margin-top:5rem}.mt-3{margin-top:.75rem}.mt-32{margin-top:8rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.mt-96{margin-top:24rem}.mt-auto{margin-top:auto}.box-border{box-sizing:border-box}.box-content{box-sizing:content-box}.line-clamp-1{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.line-clamp-2{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.line-clamp-3{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3}.line-clamp-4{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4}.line-clamp-5{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:5}.line-clamp-6{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:6}.line-clamp-none{overflow:visible;display:block;-webkit-box-orient:horizontal;-webkit-line-clamp:none}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.contents{display:contents}.hidden{display:none}.aspect-\\[16\\/9\\]{aspect-ratio:16/9}.aspect-\\[2\\/3\\]{aspect-ratio:2/3}.aspect-\\[3\\/2\\]{aspect-ratio:3/2}.aspect-\\[9\\/16\\]{aspect-ratio:9/16}.aspect-square{aspect-ratio:1 / 1}.size-8{width:2rem;height:2rem}.h-1{height:.25rem}.h-10{height:2.5rem}.h-11{height:2.75rem}.h-14{height:3.5rem}.h-16{height:4rem}.h-2{height:.5rem}.h-2\\.5{height:.625rem}.h-20{height:5rem}.h-24{height:6rem}.h-3{height:.75rem}.h-40{height:10rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-\\[100dvh\\]{height:100dvh}.h-\\[100px\\]{height:100px}.h-\\[100vh\\]{height:100vh}.h-\\[106px\\]{height:106px}.h-\\[110px\\]{height:110px}.h-\\[120vh\\]{height:120vh}.h-\\[140px\\]{height:140px}.h-\\[160px\\]{height:160px}.h-\\[1lh\\]{height:1lh}.h-\\[200px\\]{height:200px}.h-\\[300px\\]{height:300px}.h-\\[32px\\]{height:32px}.h-\\[340px\\]{height:340px}.h-\\[400px\\]{height:400px}.h-\\[58px\\]{height:58px}.h-\\[62px\\]{height:62px}.h-\\[64px\\]{height:64px}.h-\\[68px\\]{height:68px}.h-\\[700px\\]{height:700px}.h-\\[70px\\]{height:70px}.h-\\[72px\\]{height:72px}.h-\\[900px\\]{height:900px}.h-\\[90vh\\]{height:90vh}.h-\\[calc\\(100vh_-_2em\\)\\]{height:calc(100vh - 2em)}.h-\\[calc\\(var\\(--vh\\)\\*100\\)\\]{height:calc(var(--vh) * 100)}.h-auto{height:auto}.h-fit{height:-moz-fit-content;height:fit-content}.h-full{height:100%}.h-screen{height:100vh}.max-h-\\[900px\\]{max-height:900px}.max-h-\\[calc\\(100dvh_-_0\\.625rem\\)\\]{max-height:calc(100dvh - .625rem)}.max-h-\\[calc\\(100vh_-_0\\.625rem\\)\\]{max-height:calc(100vh - .625rem)}.max-h-\\[calc\\(var\\(--vh\\)\\*100_-_0\\.625rem\\)\\]{max-height:calc(var(--vh) * 100 - .625rem)}.max-h-full{max-height:100%}.max-h-screen{max-height:100vh}.min-h-24{min-height:6rem}.min-h-6{min-height:1.5rem}.min-h-\\[100dvh\\]{min-height:100dvh}.min-h-\\[100vh\\]{min-height:100vh}.min-h-\\[1px\\]{min-height:1px}.min-h-\\[320px\\]{min-height:320px}.min-h-\\[900px\\]{min-height:900px}.min-h-screen{min-height:100vh}.w-0{width:0px}.w-1{width:.25rem}.w-10{width:2.5rem}.w-11{width:2.75rem}.w-12{width:3rem}.w-14{width:3.5rem}.w-16{width:4rem}.w-2{width:.5rem}.w-2\\.5{width:.625rem}.w-20{width:5rem}.w-24{width:6rem}.w-3{width:.75rem}.w-3\\/4{width:75%}.w-40{width:10rem}.w-48{width:12rem}.w-6{width:1.5rem}.w-8{width:2rem}.w-\\[100px\\]{width:100px}.w-\\[100vw\\]{width:100vw}.w-\\[110px\\]{width:110px}.w-\\[1280px\\]{width:1280px}.w-\\[136px\\]{width:136px}.w-\\[140px\\]{width:140px}.w-\\[148px\\]{width:148px}.w-\\[175\\%\\]{width:175%}.w-\\[200\\%\\]{width:200%}.w-\\[200px\\]{width:200px}.w-\\[250\\%\\]{width:250%}.w-\\[250px\\]{width:250px}.w-\\[256px\\]{width:256px}.w-\\[300px\\]{width:300px}.w-\\[30vw\\]{width:30vw}.w-\\[312px\\]{width:312px}.w-\\[32px\\]{width:32px}.w-\\[393px\\]{width:393px}.w-\\[400px\\]{width:400px}.w-\\[500px\\]{width:500px}.w-\\[58px\\]{width:58px}.w-\\[6\\.25rem\\]{width:6.25rem}.w-\\[600px\\]{width:600px}.w-\\[62px\\]{width:62px}.w-\\[64px\\]{width:64px}.w-\\[68px\\]{width:68px}.w-\\[700px\\]{width:700px}.w-\\[70px\\]{width:70px}.w-\\[72px\\]{width:72px}.w-\\[73px\\]{width:73px}.w-\\[800px\\]{width:800px}.w-\\[80vw\\]{width:80vw}.w-\\[9\\.375rem\\]{width:9.375rem}.w-\\[90vw\\]{width:90vw}.w-\\[95vw\\]{width:95vw}.w-auto{width:auto}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.w-min{width:-moz-min-content;width:min-content}.w-screen{width:100vw}.min-w-0{min-width:0px}.min-w-36{min-width:9rem}.min-w-6{min-width:1.5rem}.min-w-\\[0\\]{min-width:0}.min-w-\\[100px\\]{min-width:100px}.min-w-\\[140px\\]{min-width:140px}.min-w-\\[1px\\]{min-width:1px}.min-w-\\[280px\\]{min-width:280px}.min-w-\\[clamp\\(52\\.75rem\\,_100vw\\,_120rem\\)\\]{min-width:clamp(52.75rem,100vw,120rem)}.min-w-\\[min\\(32\\.188rem\\,_50\\.688rem\\)\\]{min-width:min(32.188rem,50.688rem)}.min-w-fit{min-width:-moz-fit-content;min-width:fit-content}.max-w-\\[100vw\\]{max-width:100vw}.max-w-\\[1440px\\]{max-width:1440px}.max-w-\\[1920px\\]{max-width:1920px}.max-w-\\[600px\\]{max-width:600px}.max-w-\\[80\\%\\]{max-width:80%}.max-w-\\[80px\\]{max-width:80px}.max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.flex-auto{flex:1 1 auto}.flex-none{flex:none}.flex-shrink-0{flex-shrink:0}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.flex-grow,.flex-grow-\\[1\\]{flex-grow:1}.flex-grow-\\[3\\]{flex-grow:3}.basis-\\[0\\%\\]{flex-basis:0%}.origin-center{transform-origin:center}.origin-left{transform-origin:left}.origin-top-left{transform-origin:top left}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-1\\/4{--tw-translate-x: -25%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-\\[45\\%\\]{--tw-translate-y: -45%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-full{--tw-translate-y: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-1\\/2{--tw-translate-x: 50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[10\\%\\]{--tw-translate-x: 10%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[15\\%\\]{--tw-translate-x: 15%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[20\\%\\]{--tw-translate-x: 20%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-full{--tw-translate-x: 100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-0{--tw-translate-y: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-1\\/2{--tw-translate-y: 50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-\\[40\\%\\]{--tw-translate-y: 40%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-\\[calc\\(100\\%-5rem\\)\\]{--tw-translate-y: calc(100% - 5rem) ;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-rotate-180{--tw-rotate: -180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-rotate-45{--tw-rotate: -45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-0{--tw-rotate: 0deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-45{--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[-100deg\\]{--tw-rotate: -100deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[-200deg\\]{--tw-rotate: -200deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[-260deg\\]{--tw-rotate: -260deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[-90deg\\]{--tw-rotate: -90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[200deg\\]{--tw-rotate: 200deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[80deg\\]{--tw-rotate: 80deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-100{--tw-scale-x: 1;--tw-scale-y: 1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-75{--tw-scale-x: .75;--tw-scale-y: .75;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes loading-hourglass{0%{transform:rotate(0)}23%{transform:rotate(180deg)}to{transform:rotate(180deg)}}.animate-loading-hourglass{animation:loading-hourglass 1.3s ease-in-out infinite}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.cursor-wait{cursor:wait}.touch-pan-y{--tw-pan-y: pan-y;touch-action:var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.resize{resize:both}.list-none{list-style-type:none}.auto-cols-\\[min-content_1fr\\]{grid-auto-columns:min-content 1fr}.grid-flow-col{grid-auto-flow:column}.auto-rows-max{grid-auto-rows:max-content}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-\\[1fr_auto\\]{grid-template-columns:1fr auto}.grid-cols-\\[auto_1fr_auto\\]{grid-template-columns:auto 1fr auto}.grid-cols-\\[minmax\\(24\\.563rem\\,_100vw\\)\\]{grid-template-columns:minmax(24.563rem,100vw)}.grid-cols-\\[minmax\\(24\\.563rem\\,_50\\.688rem\\)\\]{grid-template-columns:minmax(24.563rem,50.688rem)}.grid-rows-4{grid-template-rows:repeat(4,minmax(0,1fr))}.grid-rows-\\[0fr\\]{grid-template-rows:0fr}.grid-rows-\\[1fr\\]{grid-template-rows:1fr}.grid-rows-\\[37\\.5rem\\]{grid-template-rows:37.5rem}.grid-rows-\\[minmax\\(14\\.375rem\\,_22\\.625rem\\)\\]{grid-template-rows:minmax(14.375rem,22.625rem)}.flex-row{flex-direction:row}.flex-row-reverse{flex-direction:row-reverse}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-wrap{flex-wrap:wrap}.flex-nowrap{flex-wrap:nowrap}.place-content-start{place-content:start}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.items-baseline{align-items:baseline}.items-stretch{align-items:stretch}.justify-normal{justify-content:normal}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-stretch{justify-content:stretch}.gap-0{gap:0px}.gap-0\\.5{gap:.125rem}.gap-1{gap:.25rem}.gap-10{gap:2.5rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-5{gap:1.25rem}.gap-6{gap:1.5rem}.gap-8{gap:2rem}.gap-x-12{-moz-column-gap:3rem;column-gap:3rem}.gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.gap-x-5{-moz-column-gap:1.25rem;column-gap:1.25rem}.gap-x-6{-moz-column-gap:1.5rem;column-gap:1.5rem}.gap-y-0{row-gap:0px}.gap-y-1{row-gap:.25rem}.gap-y-10{row-gap:2.5rem}.gap-y-3{row-gap:.75rem}.space-y-0>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(0px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0px * var(--tw-space-y-reverse))}.space-y-0\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.125rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.125rem * var(--tw-space-y-reverse))}.self-start{align-self:flex-start}.self-end{align-self:flex-end}.self-center{align-self:center}.justify-self-end{justify-self:end}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-visible{overflow:visible}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.overflow-y-hidden{overflow-y:hidden}.overscroll-contain{overscroll-behavior:contain}.overscroll-none{overscroll-behavior:none}.\\!truncate{overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-nowrap{white-space:nowrap}.whitespace-pre-wrap{white-space:pre-wrap}.text-wrap{text-wrap:wrap}.break-all{word-break:break-all}.break-keep{word-break:keep-all}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:1rem}.rounded-\\[0\\.25rem\\]{border-radius:.25rem}.rounded-\\[8px\\]{border-radius:8px}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-none{border-radius:0}.rounded-sm{border-radius:.125rem}.rounded-xl{border-radius:.75rem}.rounded-b-none{border-bottom-right-radius:0;border-bottom-left-radius:0}.rounded-b-xl{border-bottom-right-radius:.75rem;border-bottom-left-radius:.75rem}.rounded-r-none{border-top-right-radius:0;border-bottom-right-radius:0}.rounded-t-none{border-top-left-radius:0;border-top-right-radius:0}.rounded-t-xl{border-top-left-radius:.75rem;border-top-right-radius:.75rem}.border{border-width:1px}.border-2{border-width:2px}.border-\\[1px\\]{border-width:1px}.border-\\[3px\\]{border-width:3px}.border-x{border-left-width:1px;border-right-width:1px}.border-x-0{border-left-width:0px;border-right-width:0px}.border-y-0{border-top-width:0px;border-bottom-width:0px}.border-b{border-bottom-width:1px}.border-b-0{border-bottom-width:0px}.border-b-2{border-bottom-width:2px}.border-b-\\[1px\\]{border-bottom-width:1px}.border-e-0{border-inline-end-width:0px}.border-l{border-left-width:1px}.border-l-0{border-left-width:0px}.border-l-2{border-left-width:2px}.border-l-\\[1px\\]{border-left-width:1px}.border-r-0{border-right-width:0px}.border-s-0{border-inline-start-width:0px}.border-s-\\[1px\\]{border-inline-start-width:1px}.border-t{border-top-width:1px}.border-t-0{border-top-width:0px}.border-t-\\[1px\\]{border-top-width:1px}.border-solid{border-style:solid}.border-none{border-style:none}.border-base{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--background-base-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-highlight{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-highlight-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-negative{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-negative-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-neutral-minimal{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-minimal-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-neutral-regular{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-regular-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-neutral-subtle{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-positive{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-positive-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-transparent{border-color:transparent}.border-warning{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-warning-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-b-neutral-bold{--tw-border-opacity: 1;border-bottom-color:color-mix(in srgb,var(--border-neutral-bold-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-b-neutral-minimal{--tw-border-opacity: 1;border-bottom-color:color-mix(in srgb,var(--border-neutral-minimal-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-b-neutral-subtle{--tw-border-opacity: 1;border-bottom-color:color-mix(in srgb,var(--border-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-s-neutral-bold{--tw-border-opacity: 1;border-inline-start-color:color-mix(in srgb,var(--border-neutral-bold-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.border-t-neutral-minimal{--tw-border-opacity: 1;border-top-color:color-mix(in srgb,var(--border-neutral-minimal-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.\\!bg-base{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--background-base-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.bg-\\[\\#BFCAD1\\]{--tw-bg-opacity: 1;background-color:rgb(191 202 209 / var(--tw-bg-opacity))}.bg-\\[\\#E3FBE9\\]{--tw-bg-opacity: 1;background-color:rgb(227 251 233 / var(--tw-bg-opacity))}.bg-\\[\\#EBEEF6\\]{--tw-bg-opacity: 1;background-color:rgb(235 238 246 / var(--tw-bg-opacity))}.bg-\\[\\#EBF0FE\\]{--tw-bg-opacity: 1;background-color:rgb(235 240 254 / var(--tw-bg-opacity))}.bg-\\[\\#FCF5FA\\]{--tw-bg-opacity: 1;background-color:rgb(252 245 250 / var(--tw-bg-opacity))}.bg-\\[\\#FDF4F4\\]{--tw-bg-opacity: 1;background-color:rgb(253 244 244 / var(--tw-bg-opacity))}.bg-\\[\\#FFEEEB\\]{--tw-bg-opacity: 1;background-color:rgb(255 238 235 / var(--tw-bg-opacity))}.bg-\\[blue\\]{--tw-bg-opacity: 1;background-color:rgb(0 0 255 / var(--tw-bg-opacity))}.bg-\\[red\\]{--tw-bg-opacity: 1;background-color:rgb(255 0 0 / var(--tw-bg-opacity))}.bg-\\[var\\(--base-color-light\\)\\]{background-color:var(--base-color-light)}.bg-base{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--background-base-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-base\\/60{background-color:color-mix(in srgb,var(--background-base-color),transparent 40%)}.bg-black\\/5{background-color:#0000000d}.bg-content-inverse-bold{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--content-inverse-bold-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-content-inverse-subtle{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--content-inverse-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-content-neutral-bold\\/\\[0\\.08\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.bg-content-neutral-bold\\/\\[0\\.12\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.bg-content-neutral-bold\\/\\[0\\.15\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 85%)}.bg-green-500{--tw-bg-opacity: 1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))}.bg-interactive-highlight{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-highlight-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-interactive-inverse{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-inverse-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-interactive-neutral-bold{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-bold-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-interactive-neutral-minimal{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-minimal-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-interactive-neutral-regular{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-interactive-neutral-subtle{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-interactive-neutral-subtle\\/\\[0\\.95\\]{background-color:color-mix(in srgb,var(--interactive-neutral-subtle-color),transparent 5%)}.bg-lime-400{--tw-bg-opacity: 1;background-color:rgb(163 230 53 / var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.bg-surface-container{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-container-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-highlight-bold{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-highlight-bold-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-highlight-subtle{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-highlight-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-inverse{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-inverse-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-level-01{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-level-01-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-level-02{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-level-02-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-level-03{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-level-03-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-negative-bold{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-negative-bold-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-negative-subtle{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-negative-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-overlay{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-overlay-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-overlay\\/40{background-color:color-mix(in srgb,var(--surface-overlay-color),transparent 60%)}.bg-surface-positive-bold{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-positive-bold-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-positive-subtle{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-positive-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-warning-bold{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-warning-bold-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-surface-warning-subtle{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-warning-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.bg-transparent{background-color:transparent}.bg-violet-300{--tw-bg-opacity: 1;background-color:rgb(196 181 253 / var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-\\[linear-gradient\\(185deg\\,transparent_20\\%\\,var\\(--base-color\\)_35\\%\\)\\]{background-image:linear-gradient(185deg,transparent 20%,var(--base-color) 35%)}.bg-\\[linear-gradient\\(to_top\\,var\\(--surface-overlay-color\\)_20\\%\\,transparent\\)\\]{background-image:linear-gradient(to top,var(--surface-overlay-color) 20%,transparent)}.fill-\\[var\\(--accent-color\\)\\]{fill:var(--accent-color)}.fill-\\[var\\(--base-color\\)\\]{fill:var(--base-color)}.fill-\\[var\\(--glow-color\\)\\]{fill:var(--glow-color)}.stroke-\\[var\\(--border-negative-color\\)\\]{stroke:var(--border-negative-color)}.stroke-\\[var\\(--border-neutral-subtle-color\\)\\]{stroke:var(--border-neutral-subtle-color)}.stroke-\\[var\\(--border-positive-color\\)\\]{stroke:var(--border-positive-color)}.stroke-\\[var\\(--border-warning-color\\)\\]{stroke:var(--border-warning-color)}.stroke-\\[var\\(--surface-highlight-bold-color\\)\\]{stroke:var(--surface-highlight-bold-color)}.object-cover{-o-object-fit:cover;object-fit:cover}.p-0{padding:0}.p-1{padding:.25rem}.p-1\\.5{padding:.375rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-5{padding:1.25rem}.p-6{padding:1.5rem}.p-8{padding:2rem}.p-\\[1px\\]{padding:1px}.px-0{padding-left:0;padding-right:0}.px-1{padding-left:.25rem;padding-right:.25rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-8{padding-left:2rem;padding-right:2rem}.px-\\[0\\.375rem\\]{padding-left:.375rem;padding-right:.375rem}.px-\\[6px\\]{padding-left:6px;padding-right:6px}.py-0{padding-top:0;padding-bottom:0}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.py-8{padding-top:2rem;padding-bottom:2rem}.pb-0{padding-bottom:0}.pb-10{padding-bottom:2.5rem}.pb-20{padding-bottom:5rem}.pb-4{padding-bottom:1rem}.pb-8{padding-bottom:2rem}.pb-\\[env\\(safe-area-inset-bottom\\)\\]{padding-bottom:env(safe-area-inset-bottom)}.pe-0{padding-inline-end:0px}.pe-0\\.5{padding-inline-end:.125rem}.pe-1{padding-inline-end:.25rem}.pe-2{padding-inline-end:.5rem}.pe-2\\.5{padding-inline-end:.625rem}.pe-3{padding-inline-end:.75rem}.pe-4{padding-inline-end:1rem}.pl-0{padding-left:0}.pl-3{padding-left:.75rem}.pl-4{padding-left:1rem}.pr-0{padding-right:0}.pr-1{padding-right:.25rem}.pr-2{padding-right:.5rem}.pr-48{padding-right:12rem}.pr-8{padding-right:2rem}.ps-0{padding-inline-start:0px}.ps-2{padding-inline-start:.5rem}.ps-3{padding-inline-start:.75rem}.ps-4{padding-inline-start:1rem}.pt-0{padding-top:0}.pt-0\\.5{padding-top:.125rem}.pt-10{padding-top:2.5rem}.pt-14{padding-top:3.5rem}.pt-16{padding-top:4rem}.pt-2{padding-top:.5rem}.pt-20{padding-top:5rem}.pt-4{padding-top:1rem}.pt-6{padding-top:1.5rem}.pt-\\[\\.375rem\\]{padding-top:.375rem}.pt-\\[0\\.625rem\\]{padding-top:.625rem}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.text-start{text-align:start}.align-top{vertical-align:top}.align-middle{vertical-align:middle}.font-body{font-family:var(--paloma-font-family-body),sans-serif}.font-heading{font-family:var(--paloma-font-family-heading),sans-serif}.\\!text-\\[0\\.67em\\]{font-size:.67em!important}.\\!text-\\[0\\.83em\\]{font-size:.83em!important}.\\!text-\\[1\\.17em\\]{font-size:1.17em!important}.\\!text-\\[1\\.5em\\]{font-size:1.5em!important}.\\!text-\\[1em\\]{font-size:1em!important}.text-size-body-large{font-size:var(--font-size-body-large);line-height:var(--line-height-body-large)}.text-size-body-medium{font-size:var(--font-size-body-medium);line-height:var(--line-height-body-medium)}.text-size-body-small{font-size:var(--font-size-body-small);line-height:var(--line-height-body-small)}.text-size-body-x-small{font-size:var(--font-size-body-x-small);line-height:var(--line-height-body-x-small)}.text-size-heading-small{font-size:var(--font-size-heading-small);line-height:var(--line-height-heading-small)}.text-size-heading-x-small{font-size:var(--font-size-heading-x-small);line-height:var(--line-height-heading-x-small)}.text-size-lg-heading-large{font-size:var(--font-size-lg-heading-large);line-height:var(--line-height-lg-heading-large)}.text-size-lg-heading-medium{font-size:var(--font-size-lg-heading-medium);line-height:var(--line-height-lg-heading-medium)}.text-size-xs-heading-large{font-size:var(--font-size-xs-heading-large);line-height:var(--line-height-xs-heading-large)}.text-size-xs-heading-medium{font-size:var(--font-size-xs-heading-medium);line-height:var(--line-height-xs-heading-medium)}.text-size-xs-heading-x-large{font-size:var(--font-size-xs-heading-x-large);line-height:var(--line-height-xs-heading-x-large)}.font-bold{font-weight:700}.font-normal{font-weight:400}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.leading-\\[--line-height-body-large\\]{line-height:var(--line-height-body-large)}.leading-\\[--line-height-body-medium\\]{line-height:var(--line-height-body-medium)}.leading-\\[--line-height-body-small\\]{line-height:var(--line-height-body-small)}.leading-\\[150\\%\\]{line-height:150%}.leading-\\[28px\\]{line-height:28px}.leading-\\[40px\\]{line-height:40px}.leading-\\[42px\\]{line-height:42px}.leading-none{line-height:1}.tracking-wide{letter-spacing:.025em}.\\!text-content-highlight{--tw-text-opacity: 1 !important;color:color-mix(in srgb,var(--content-highlight-color),transparent calc(100% - 100% * var(--tw-text-opacity)))!important}.text-content-highlight{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-highlight-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-content-inverse-bold{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-inverse-bold-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-content-negative{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-negative-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-content-neutral-bold{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-neutral-bold-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-content-neutral-regular{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-neutral-regular-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-content-neutral-subtle{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-content-positive{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-positive-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-content-warning{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-warning-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.text-inherit{color:inherit}.text-red-600{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.underline{text-decoration-line:underline}.no-underline{text-decoration-line:none}.underline-offset-4{text-underline-offset:4px}.opacity-0{opacity:0}.opacity-100{opacity:1}.opacity-30{opacity:.3}.opacity-40{opacity:.4}.opacity-50{opacity:.5}.opacity-70{opacity:.7}.opacity-\\[30\\%\\]{opacity:30%}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-\\[inset_0_0_0_2px_var\\(--interactive-highlight-color\\)\\]{--tw-shadow: inset 0 0 0 2px var(--interactive-highlight-color);--tw-shadow-colored: inset 0 0 0 2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.outline-2{outline-width:2px}.outline-offset-0{outline-offset:0px}.outline-offset-2{outline-offset:2px}.outline-interactive-highlight{outline-color:var(--interactive-highlight-color)}.ring{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.blur{--tw-blur: blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur-\\[10px\\]{--tw-blur: blur(10px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur-\\[18px\\]{--tw-blur: blur(18px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur-\\[4px\\]{--tw-blur: blur(4px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur-\\[50px\\]{--tw-blur: blur(50px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-surface{--tw-backdrop-blur: blur(48px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[color\\,font-weight\\]{transition-property:color,font-weight;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[padding\\]{transition-property:padding;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[stroke-dashoffset\\]{transition-property:stroke-dashoffset;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.delay-500{transition-delay:.5s}.duration-150{transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.duration-500{transition-duration:.5s}.ease-in{transition-timing-function:cubic-bezier(.4,0,1,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.will-change-transform{will-change:transform}@keyframes enter{0%{opacity:var(--tw-enter-opacity, 1);transform:translate3d(var(--tw-enter-translate-x, 0),var(--tw-enter-translate-y, 0),0) scale3d(var(--tw-enter-scale, 1),var(--tw-enter-scale, 1),var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity, 1);transform:translate3d(var(--tw-exit-translate-x, 0),var(--tw-exit-translate-y, 0),0) scale3d(var(--tw-exit-scale, 1),var(--tw-exit-scale, 1),var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))}}.fade-out{--tw-exit-opacity: 0 }.zoom-in-95{--tw-enter-scale: .95 }.duration-150{animation-duration:.15s}.duration-200{animation-duration:.2s}.duration-300{animation-duration:.3s}.duration-500{animation-duration:.5s}.delay-500{animation-delay:.5s}.ease-in{animation-timing-function:cubic-bezier(.4,0,1,1)}.ease-in-out{animation-timing-function:cubic-bezier(.4,0,.2,1)}.paused{animation-play-state:paused}.fill-mode-forwards{animation-fill-mode:forwards}.\\!grid-in-\\[2\\/2\\/2\\/2\\]{grid-area:2/2/2/2!important}.grid-areas-\\[bar\\]{grid-template-areas:"bar"}.grid-areas-\\[label_bar_percent\\]{grid-template-areas:"label bar percent"}.grid-areas-\\[label_percent\\,_bar_bar\\]{grid-template-areas:"label percent" "bar bar"}.grid-in-\\[1\\/1\\/2\\/1\\]{grid-area:1/1/2/1}.grid-in-\\[1\\/2\\/1\\/2\\]{grid-area:1/2/1/2}.grid-in-\\[2\\/1\\/2\\/1\\]{grid-area:2/1/2/1}.grid-in-\\[bar\\]{grid-area:bar}.grid-in-\\[label\\]{grid-area:label}.grid-in-\\[percent\\]{grid-area:percent}.font-variant-none{font-variant:none}.\\[--accent-color\\:\\#6AF8A4\\]{--accent-color: #6AF8A4 }.\\[--accent-color\\:\\#7B9AFA\\]{--accent-color: #7B9AFA }.\\[--accent-color\\:\\#A8DCF3\\]{--accent-color: #A8DCF3 }.\\[--accent-color\\:\\#D973BA\\]{--accent-color: #D973BA }.\\[--accent-color\\:\\#E59090\\]{--accent-color: #E59090 }.\\[--accent-color\\:\\#FFD8CC\\]{--accent-color: #FFD8CC }.\\[--accent-color\\:\\#FFDED7\\]{--accent-color: #FFDED7 }.\\[--accent-color\\:var\\(--accent-color-light\\)\\]{--accent-color: var(--accent-color-light) }.\\[--base-color\\:\\#BFCAD1\\]{--base-color: #BFCAD1 }.\\[--base-color\\:\\#E3FBE9\\]{--base-color: #E3FBE9 }.\\[--base-color\\:\\#EBEEF6\\]{--base-color: #EBEEF6 }.\\[--base-color\\:\\#EBF0FE\\]{--base-color: #EBF0FE }.\\[--base-color\\:\\#FCF5FA\\]{--base-color: #FCF5FA }.\\[--base-color\\:\\#FFEBEB\\]{--base-color: #FFEBEB }.\\[--base-color\\:\\#FFEEEB\\]{--base-color: #FFEEEB }.\\[--base-color\\:var\\(--base-color-light\\)\\]{--base-color: var(--base-color-light) }.\\[--glow-color\\:\\#07F468\\]{--glow-color: #07F468 }.\\[--glow-color\\:\\#ADBBDB\\]{--glow-color: #ADBBDB }.\\[--glow-color\\:\\#BA84F1\\]{--glow-color: #BA84F1 }.\\[--glow-color\\:\\#E59090\\]{--glow-color: #E59090 }.\\[--glow-color\\:\\#FFB199\\]{--glow-color: #FFB199 }.\\[--glow-color\\:\\#FFD4CC\\]{--glow-color: #FFD4CC }.\\[--glow-color\\:var\\(--glow-color-light\\)\\]{--glow-color: var(--glow-color-light) }.\\[-webkit-mask-image\\:linear-gradient\\(to_top\\,transparent_0\\%\\,rgba\\(0\\,0\\,0\\,0\\.7\\)_50\\%\\)\\]{-webkit-mask-image:linear-gradient(to top,transparent 0%,rgba(0,0,0,.7) 50%)}.\\[mask-image\\:linear-gradient\\(to_top\\,transparent_0\\%\\,rgba\\(0\\,0\\,0\\,0\\.7\\)_50\\%\\)\\]{-webkit-mask-image:linear-gradient(to top,transparent 0%,rgba(0,0,0,.7) 50%);mask-image:linear-gradient(to top,transparent 0%,rgba(0,0,0,.7) 50%)}.\\[mask-type\\:alpha\\]{mask-type:alpha}.\\[place-content\\:start_center\\]{place-content:start center}.\\[place-self\\:start_center\\]{place-self:start center}.\\[transition-duration\\:2s\\]{transition-duration:2s}.\\[transition-duration\\:6s\\]{transition-duration:6s}.\\[transition-property\\:transform\\]{transition-property:transform}@media(min-width:768px){.md\\:container{width:100%;margin-right:auto;margin-left:auto;padding-right:24px;padding-left:24px}@media(min-width:1440px){.md\\:container{max-width:1440px;padding-right:40px;padding-left:40px}}}.last\\:pb-0:last-child{padding-bottom:0}.active\\:\\!bg-surface-level-03:active{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--surface-level-03-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.active\\:bg-content-neutral-bold\\/\\[0\\.12\\]:active{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.active\\:bg-content-neutral-regular:active{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.active\\:bg-content-neutral-regular\\/\\[0\\.12\\]:active{background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent 88%)}.active\\:bg-interactive-neutral-regular:active{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.active\\:bg-interactive-neutral-subtle:active{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.enabled\\:cursor-pointer:enabled{cursor:pointer}.group:active .group-active\\:bg-content-neutral-bold\\/\\[0\\.12\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.aria-disabled\\:pointer-events-none[aria-disabled=true]{pointer-events:none}.aria-disabled\\:opacity-30[aria-disabled=true]{opacity:.3}.data-\\[position-y\\=bottom\\]\\:-bottom-1\\.5[data-position-y=bottom]{bottom:-.375rem}.data-\\[position-y\\=bottom\\]\\:-bottom-3\\.5[data-position-y=bottom]{bottom:-.875rem}.data-\\[position-y\\=top\\]\\:-top-1\\.5[data-position-y=top]{top:-.375rem}.data-\\[position-y\\=top\\]\\:-top-3\\.5[data-position-y=top]{top:-.875rem}.data-\\[position-x\\=center\\]\\:flex[data-position-x=center],.data-\\[shape\\=circle\\]\\:flex[data-shape=circle]{display:flex}.data-\\[size\\=large\\]\\:h-8[data-size=large]{height:2rem}.data-\\[size\\=medium\\]\\:h-6[data-size=medium]{height:1.5rem}.data-\\[size\\=small\\]\\:h-5[data-size=small]{height:1.25rem}.data-\\[size\\=x-small\\]\\:h-4[data-size=x-small]{height:1rem}.data-\\[orientation\\=horizontal\\]\\:w-\\[-webkit-fill-available\\][data-orientation=horizontal]{width:-webkit-fill-available}.data-\\[position-x\\=center\\]\\:w-full[data-position-x=center],.data-\\[shape\\=circle\\]\\:w-full[data-shape=circle]{width:100%}.data-\\[size\\=large\\]\\:w-8[data-size=large]{width:2rem}.data-\\[size\\=medium\\]\\:w-6[data-size=medium]{width:1.5rem}.data-\\[size\\=small\\]\\:w-5[data-size=small]{width:1.25rem}.data-\\[size\\=x-small\\]\\:w-4[data-size=x-small]{width:1rem}.data-\\[position-x\\=center\\]\\:justify-center[data-position-x=center],.data-\\[shape\\=circle\\]\\:justify-center[data-shape=circle]{justify-content:center}.data-\\[emphasis\\=bold\\]\\:border-neutral-bold[data-emphasis=bold]{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-bold-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.data-\\[emphasis\\=minimal\\]\\:border-neutral-minimal[data-emphasis=minimal]{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-minimal-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.data-\\[emphasis\\=regular\\]\\:border-neutral-regular[data-emphasis=regular]{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-regular-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.data-\\[emphasis\\=subtle\\]\\:border-neutral-subtle[data-emphasis=subtle]{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.data-\\[orientation\\=vertical\\]\\:p-6[data-orientation=vertical]{padding:1.5rem}.data-\\[orientation\\=horizontal\\]\\:px-8[data-orientation=horizontal]{padding-left:2rem;padding-right:2rem}.data-\\[orientation\\=horizontal\\]\\:py-12[data-orientation=horizontal]{padding-top:3rem;padding-bottom:3rem}.data-\\[selected\\=true\\]\\:data-\\[emphasis\\=bold\\]\\:text-content-inverse-bold[data-emphasis=bold][data-selected=true]{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-inverse-bold-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.data-\\[selected\\=true\\]\\:data-\\[emphasis\\=regular\\]\\:text-content-neutral-bold[data-emphasis=regular][data-selected=true]{--tw-text-opacity: 1;color:color-mix(in srgb,var(--content-neutral-bold-color),transparent calc(100% - 100% * var(--tw-text-opacity)))}.data-\\[focus-visible\\]\\:shadow-\\[inset_0_0_0_2px_var\\(--interactive-highlight-color\\)\\][data-focus-visible]{--tw-shadow: inset 0 0 0 2px var(--interactive-highlight-color);--tw-shadow-colored: inset 0 0 0 2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.group\\/menu[data-variant=mega] .group-data-\\[variant\\=mega\\]\\/menu\\:mx-2{margin-left:.5rem;margin-right:.5rem}.group[data-variant=dot] .group-data-\\[variant\\=dot\\]\\:h-1\\.5{height:.375rem}.group[data-variant=dot] .group-data-\\[variant\\=dot\\]\\:h-2{height:.5rem}.group[data-variant=icon] .group-data-\\[variant\\=icon\\]\\:h-\\[22px\\]{height:22px}.group[data-variant=icon] .group-data-\\[variant\\=icon\\]\\:h-\\[32px\\]{height:32px}.group[data-variant=text] .group-data-\\[variant\\=text\\]\\:h-\\[22px\\]{height:22px}.group[data-variant=text] .group-data-\\[variant\\=text\\]\\:h-\\[30px\\]{height:30px}.group\\/menu[data-orientation=horizontal] .group-data-\\[orientation\\=horizontal\\]\\/menu\\:w-\\[inherit\\]{width:inherit}.group[data-variant=dot] .group-data-\\[variant\\=dot\\]\\:w-1\\.5{width:.375rem}.group[data-variant=dot] .group-data-\\[variant\\=dot\\]\\:w-2{width:.5rem}.group[data-variant=icon] .group-data-\\[variant\\=icon\\]\\:w-\\[22px\\]{width:22px}.group[data-variant=icon] .group-data-\\[variant\\=icon\\]\\:w-\\[32px\\]{width:32px}.group\\/menu[data-variant=mega] .group-data-\\[variant\\=mega\\]\\/menu\\:w-auto{width:auto}.group\\/menu[data-variant=standard] .group-data-\\[variant\\=standard\\]\\/menu\\:w-\\[--trigger-width\\]{width:var(--trigger-width)}.group\\/menu[data-variant=standard] .group-data-\\[variant\\=standard\\]\\/menu\\:w-\\[250px\\]{width:250px}.group\\/menu[data-variant=standard] .group-data-\\[variant\\=standard\\]\\/menu\\:w-fit{width:-moz-fit-content;width:fit-content}.group[data-variant=text][data-content-single-element=true] .group-data-\\[variant\\=text\\]\\:group-data-\\[content-single-element\\=true\\]\\:w-\\[22px\\]{width:22px}.group[data-variant=text][data-content-single-element=true] .group-data-\\[variant\\=text\\]\\:group-data-\\[content-single-element\\=true\\]\\:w-\\[30px\\]{width:30px}.group\\/menu[data-variant=mega] .group-data-\\[variant\\=mega\\]\\/menu\\:max-w-\\[1440px\\]{max-width:1440px}.group\\/menu[data-variant=standard] .group-data-\\[variant\\=standard\\]\\/menu\\:p-2{padding:.5rem}.group\\/menu[data-variant=mega] .group-data-\\[variant\\=mega\\]\\/menu\\:px-8{padding-left:2rem;padding-right:2rem}.group\\/menu[data-variant=standard] .group-data-\\[variant\\=standard\\]\\/menu\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.group[data-variant=text][data-content-single-element=false] .group-data-\\[variant\\=text\\]\\:group-data-\\[content-single-element\\=false\\]\\:px-\\[11px\\]{padding-left:11px;padding-right:11px}.group[data-variant=text][data-content-single-element=false] .group-data-\\[variant\\=text\\]\\:group-data-\\[content-single-element\\=false\\]\\:px-\\[7px\\]{padding-left:7px;padding-right:7px}.entering\\:zoom-in-95[data-entering]{--tw-enter-scale: .95 }.hover\\:cursor-pointer:where([data-rac])[data-hovered]{cursor:pointer}.hover\\:bg-content-neutral-bold\\/\\[0\\.08\\]:where([data-rac])[data-hovered]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.hover\\:bg-content-neutral-regular:where([data-rac])[data-hovered]{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:bg-content-neutral-regular\\/\\[0\\.08\\]:where([data-rac])[data-hovered]{background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent 92%)}.hover\\:bg-interactive-neutral-regular:where([data-rac])[data-hovered]{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:bg-interactive-neutral-subtle:where([data-rac])[data-hovered]{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:bg-surface-level-02:where([data-rac])[data-hovered]{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-level-02-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:active\\:bg-content-neutral-bold\\/\\[0\\.12\\]:active:where([data-rac])[data-hovered]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.hover\\:active\\:bg-content-neutral-regular\\/\\[0\\.12\\]:active:where([data-rac])[data-hovered]{background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent 88%)}.hover\\:cursor-pointer:where(:not([data-rac])):hover{cursor:pointer}.hover\\:bg-content-neutral-bold\\/\\[0\\.08\\]:where(:not([data-rac])):hover{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.hover\\:bg-content-neutral-regular:where(:not([data-rac])):hover{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:bg-content-neutral-regular\\/\\[0\\.08\\]:where(:not([data-rac])):hover{background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent 92%)}.hover\\:bg-interactive-neutral-regular:where(:not([data-rac])):hover{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:bg-interactive-neutral-subtle:where(:not([data-rac])):hover{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--interactive-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:bg-surface-level-02:where(:not([data-rac])):hover{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-level-02-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.hover\\:active\\:bg-content-neutral-bold\\/\\[0\\.12\\]:active:where(:not([data-rac])):hover{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.hover\\:active\\:bg-content-neutral-regular\\/\\[0\\.12\\]:active:where(:not([data-rac])):hover{background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent 88%)}.group:where([data-rac])[data-hovered] .group-hover\\:bg-content-neutral-bold\\/\\[0\\.08\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.group:where(:not([data-rac])):hover .group-hover\\:bg-content-neutral-bold\\/\\[0\\.08\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.group:where([data-rac])[data-hovered]:active .group-hover\\:group-active\\:bg-content-neutral-bold\\/\\[0\\.12\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.group:where(:not([data-rac])):hover:active .group-hover\\:group-active\\:bg-content-neutral-bold\\/\\[0\\.12\\]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.focus\\:shadow-\\[inset_0_0_0_2px_var\\(--interactive-highlight-color\\)\\]:where([data-rac])[data-focused]{--tw-shadow: inset 0 0 0 2px var(--interactive-highlight-color);--tw-shadow-colored: inset 0 0 0 2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.focus\\:outline-none:where([data-rac])[data-focused]{outline:2px solid transparent;outline-offset:2px}.focus\\:shadow-\\[inset_0_0_0_2px_var\\(--interactive-highlight-color\\)\\]:where(:not([data-rac])):focus{--tw-shadow: inset 0 0 0 2px var(--interactive-highlight-color);--tw-shadow-colored: inset 0 0 0 2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.focus\\:outline-none:where(:not([data-rac])):focus{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:outline:where([data-rac])[data-focus-visible]{outline-style:solid}.focus-visible\\:outline-\\[3px\\]:where([data-rac])[data-focus-visible]{outline-width:3px}.focus-visible\\:outline-offset-2:where([data-rac])[data-focus-visible]{outline-offset:2px}.focus-visible\\:outline-offset-\\[1px\\]:where([data-rac])[data-focus-visible]{outline-offset:1px}.focus-visible\\:outline-interactive-highlight:where([data-rac])[data-focus-visible]{outline-color:var(--interactive-highlight-color)}.focus-visible\\:outline:where(:not([data-rac])):focus-visible{outline-style:solid}.focus-visible\\:outline-\\[3px\\]:where(:not([data-rac])):focus-visible{outline-width:3px}.focus-visible\\:outline-offset-2:where(:not([data-rac])):focus-visible{outline-offset:2px}.focus-visible\\:outline-offset-\\[1px\\]:where(:not([data-rac])):focus-visible{outline-offset:1px}.focus-visible\\:outline-interactive-highlight:where(:not([data-rac])):focus-visible{outline-color:var(--interactive-highlight-color)}.disabled\\:pointer-events-none:where([data-rac])[data-disabled]{pointer-events:none}.disabled\\:opacity-30:where([data-rac])[data-disabled]{opacity:.3}.disabled\\:pointer-events-none:where(:not([data-rac])):disabled{pointer-events:none}.disabled\\:opacity-30:where(:not([data-rac])):disabled{opacity:.3}@media(prefers-reduced-motion:no-preference){.motion-safe\\:duration-300{transition-duration:.3s}.motion-safe\\:ease-in{transition-timing-function:cubic-bezier(.4,0,1,1)}.motion-safe\\:ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.motion-safe\\:animate-in{animation-name:enter;animation-duration:.15s;--tw-enter-opacity: initial;--tw-enter-scale: initial;--tw-enter-rotate: initial;--tw-enter-translate-x: initial;--tw-enter-translate-y: initial }.motion-safe\\:animate-out{animation-name:exit;animation-duration:.15s;--tw-exit-opacity: initial;--tw-exit-scale: initial;--tw-exit-rotate: initial;--tw-exit-translate-x: initial;--tw-exit-translate-y: initial }.motion-safe\\:fade-in{--tw-enter-opacity: 0 }.motion-safe\\:fade-out{--tw-exit-opacity: 0 }.motion-safe\\:slide-in-from-bottom{--tw-enter-translate-y: 100% }.motion-safe\\:slide-out-to-bottom{--tw-exit-translate-y: 100% }.motion-safe\\:duration-300{animation-duration:.3s}.motion-safe\\:ease-in{animation-timing-function:cubic-bezier(.4,0,1,1)}.motion-safe\\:ease-out{animation-timing-function:cubic-bezier(0,0,.2,1)}.motion-safe\\:entering\\:animate-in[data-entering]{animation-name:enter;animation-duration:.15s;--tw-enter-opacity: initial;--tw-enter-scale: initial;--tw-enter-rotate: initial;--tw-enter-translate-x: initial;--tw-enter-translate-y: initial }.motion-safe\\:entering\\:fade-in[data-entering]{--tw-enter-opacity: 0 }.motion-safe\\:entering\\:zoom-in-95[data-entering]{--tw-enter-scale: .95 }.motion-safe\\:exiting\\:animate-out[data-exiting]{animation-name:exit;animation-duration:.15s;--tw-exit-opacity: initial;--tw-exit-scale: initial;--tw-exit-rotate: initial;--tw-exit-translate-x: initial;--tw-exit-translate-y: initial }.motion-safe\\:exiting\\:fade-out[data-exiting]{--tw-exit-opacity: 0 }.motion-safe\\:exiting\\:zoom-out-95[data-exiting]{--tw-exit-scale: .95 }}@media(prefers-reduced-motion:reduce){.motion-reduce\\:transition-none{transition-property:none}}.dark\\:bg-\\[\\#000000\\]:is([data-paloma-mode=dark] *){--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.dark\\:bg-\\[\\#01081D\\]:is([data-paloma-mode=dark] *){--tw-bg-opacity: 1;background-color:rgb(1 8 29 / var(--tw-bg-opacity))}.dark\\:bg-\\[\\#020B07\\]:is([data-paloma-mode=dark] *){--tw-bg-opacity: 1;background-color:rgb(2 11 7 / var(--tw-bg-opacity))}.dark\\:bg-\\[\\#142242\\]:is([data-paloma-mode=dark] *){--tw-bg-opacity: 1;background-color:rgb(20 34 66 / var(--tw-bg-opacity))}.dark\\:bg-\\[\\#160303\\]:is([data-paloma-mode=dark] *){--tw-bg-opacity: 1;background-color:rgb(22 3 3 / var(--tw-bg-opacity))}.dark\\:bg-\\[\\#160511\\]:is([data-paloma-mode=dark] *){--tw-bg-opacity: 1;background-color:rgb(22 5 17 / var(--tw-bg-opacity))}.dark\\:bg-\\[var\\(--base-color-dark\\)\\]:is([data-paloma-mode=dark] *){background-color:var(--base-color-dark)}.dark\\:\\[--accent-color\\:\\#03622A\\]:is([data-paloma-mode=dark] *){--accent-color: #03622A }.dark\\:\\[--accent-color\\:\\#25A8E0\\]:is([data-paloma-mode=dark] *){--accent-color: #25A8E0 }.dark\\:\\[--accent-color\\:\\#6D1111\\]:is([data-paloma-mode=dark] *){--accent-color: #6D1111 }.dark\\:\\[--accent-color\\:\\#6D17C4\\]:is([data-paloma-mode=dark] *){--accent-color: #6D17C4 }.dark\\:\\[--accent-color\\:\\#972073\\]:is([data-paloma-mode=dark] *){--accent-color: #972073 }.dark\\:\\[--accent-color\\:\\#FF6333\\]:is([data-paloma-mode=dark] *){--accent-color: #FF6333 }.dark\\:\\[--accent-color\\:\\#FF7F66\\]:is([data-paloma-mode=dark] *){--accent-color: #FF7F66 }.dark\\:\\[--accent-color\\:var\\(--accent-color-dark\\)\\]:is([data-paloma-mode=dark] *){--accent-color: var(--accent-color-dark) }.dark\\:\\[--base-color\\:\\#000000\\]:is([data-paloma-mode=dark] *){--base-color: #000000 }.dark\\:\\[--base-color\\:\\#01081D\\]:is([data-paloma-mode=dark] *){--base-color: #01081D }.dark\\:\\[--base-color\\:\\#020B07\\]:is([data-paloma-mode=dark] *){--base-color: #020B07 }.dark\\:\\[--base-color\\:\\#142242\\]:is([data-paloma-mode=dark] *){--base-color: #142242 }.dark\\:\\[--base-color\\:\\#160303\\]:is([data-paloma-mode=dark] *){--base-color: #160303 }.dark\\:\\[--base-color\\:\\#160511\\]:is([data-paloma-mode=dark] *){--base-color: #160511 }.dark\\:\\[--base-color\\:var\\(--base-color-dark\\)\\]:is([data-paloma-mode=dark] *){--base-color: var(--base-color-dark) }.dark\\:\\[--glow-color\\:\\#07F468\\]:is([data-paloma-mode=dark] *){--glow-color: #07F468 }.dark\\:\\[--glow-color\\:\\#093DD8\\]:is([data-paloma-mode=dark] *){--glow-color: #093DD8 }.dark\\:\\[--glow-color\\:\\#3356A4\\]:is([data-paloma-mode=dark] *){--glow-color: #3356A4 }.dark\\:\\[--glow-color\\:\\#872AE6\\]:is([data-paloma-mode=dark] *){--glow-color: #872AE6 }.dark\\:\\[--glow-color\\:\\#E00000\\]:is([data-paloma-mode=dark] *){--glow-color: #E00000 }.dark\\:\\[--glow-color\\:\\#E53600\\]:is([data-paloma-mode=dark] *){--glow-color: #E53600 }.dark\\:\\[--glow-color\\:\\#FF2900\\]:is([data-paloma-mode=dark] *){--glow-color: #FF2900 }.dark\\:\\[--glow-color\\:var\\(--glow-color-dark\\)\\]:is([data-paloma-mode=dark] *){--glow-color: var(--glow-color-dark) }@media(max-width:1440px){.max-\\[1440px\\]\\:px-5{padding-left:1.25rem;padding-right:1.25rem}}@media not all and (min-width:1280px){.max-lg\\:flex{display:flex}.max-lg\\:hidden{display:none}.max-lg\\:-translate-y-full{--tw-translate-y: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.max-lg\\:flex-col{flex-direction:column}.max-lg\\:justify-between{justify-content:space-between}.max-lg\\:gap-2{gap:.5rem}.max-lg\\:gap-4{gap:1rem}.max-lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}@media not all and (min-width:768px){.max-md\\:flex{display:flex}.max-md\\:hidden{display:none}.max-md\\:w-auto{width:auto}.max-md\\:w-full{width:100%}.max-md\\:max-w-\\[250px\\]{max-width:250px}.max-md\\:max-w-\\[767px\\]{max-width:767px}.max-md\\:max-w-\\[815px\\]{max-width:815px}.max-md\\:flex-col{flex-direction:column}.max-md\\:justify-normal{justify-content:normal}.max-md\\:justify-between{justify-content:space-between}.max-md\\:px-4{padding-left:1rem;padding-right:1rem}.max-md\\:py-2{padding-top:.5rem;padding-bottom:.5rem}.max-md\\:py-3{padding-top:.75rem;padding-bottom:.75rem}.max-md\\:text-center{text-align:center}.max-md\\:text-size-heading-x-small{font-size:var(--font-size-heading-x-small);line-height:var(--line-height-heading-x-small)}.max-md\\:\\!grid-in-\\[2\\/2\\/2\\/2\\]{grid-area:2/2/2/2!important}.max-md\\:grid-in-\\[1\\/1\\/2\\/1\\]{grid-area:1/1/2/1}.max-md\\:grid-in-\\[1\\/2\\/1\\/2\\]{grid-area:1/2/1/2}.max-md\\:grid-in-\\[2\\/1\\/2\\/1\\]{grid-area:2/1/2/1}@media(prefers-reduced-motion:no-preference){.max-md\\:motion-safe\\:slide-in-from-bottom{--tw-enter-translate-y: 100% }.max-md\\:motion-safe\\:slide-out-to-bottom{--tw-exit-translate-y: 100% }}}@media not all and (min-width:640px){.max-sm\\:w-full{width:100%}.max-sm\\:max-w-full{max-width:100%}}@media(min-width:640px){.sm\\:w-\\[345px\\]{width:345px}.sm\\:place-content-center{place-content:center}.sm\\:place-items-center{place-items:center}.sm\\:\\[place-self\\:stretch\\]{place-self:stretch}}@media(min-width:768px){.md\\:-left-\\[12\\.5\\%\\]{left:-12.5%}.md\\:-right-\\[10\\%\\]{right:-10%}.md\\:-right-\\[20\\%\\]{right:-20%}.md\\:bottom-0{bottom:0}.md\\:bottom-20{bottom:5rem}.md\\:bottom-40{bottom:10rem}.md\\:left-0{left:0}.md\\:left-\\[40\\%\\]{left:40%}.md\\:top-20{top:5rem}.md\\:top-28{top:7rem}.md\\:top-\\[7\\.5rem\\]{top:7.5rem}.md\\:top-auto{top:auto}.md\\:mt-36{margin-top:9rem}.md\\:block{display:block}.md\\:flex{display:flex}.md\\:grid{display:grid}.md\\:hidden{display:none}.md\\:max-h-\\[calc\\(100dvh_-_\\(4rem_\\*_2\\)\\)\\]{max-height:calc(100dvh - 8rem)}.md\\:max-h-\\[calc\\(100vh_-_\\(4rem_\\*_2\\)\\)\\]{max-height:calc(100vh - 8rem)}.md\\:min-h-\\[100dvh\\]{min-height:100dvh}.md\\:min-h-screen{min-height:100vh}.md\\:w-1\\/2{width:50%}.md\\:w-\\[100\\%\\]{width:100%}.md\\:w-\\[150\\%\\]{width:150%}.md\\:w-\\[80\\%\\]{width:80%}.md\\:w-auto{width:auto}.md\\:w-full{width:100%}.md\\:max-w-\\[1279px\\]{max-width:1279px}.md\\:max-w-\\[1327px\\]{max-width:1327px}.md\\:max-w-\\[420px\\]{max-width:420px}.md\\:max-w-\\[486px\\]{max-width:486px}.md\\:translate-x-0{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.md\\:\\!grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))!important}.md\\:grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.md\\:flex-row{flex-direction:row}.md\\:flex-row-reverse{flex-direction:row-reverse}.md\\:flex-col{flex-direction:column}.md\\:place-items-center{place-items:center}.md\\:items-center{align-items:center}.md\\:justify-between{justify-content:space-between}.md\\:gap-0{gap:0px}.md\\:gap-2{gap:.5rem}.md\\:gap-4{gap:1rem}.md\\:gap-6{gap:1.5rem}.md\\:gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.md\\:place-self-center{place-self:center}.md\\:self-start{align-self:flex-start}.md\\:self-center{align-self:center}.md\\:bg-\\[linear-gradient\\(185deg\\,transparent_30\\%\\,var\\(--base-color\\)_50\\%\\)\\]{background-image:linear-gradient(185deg,transparent 30%,var(--base-color) 50%)}.md\\:p-10{padding:2.5rem}.md\\:p-5{padding:1.25rem}.md\\:p-8{padding:2rem}.md\\:py-16{padding-top:4rem;padding-bottom:4rem}.md\\:pb-10{padding-bottom:2.5rem}.md\\:pb-8{padding-bottom:2rem}.md\\:pt-28{padding-top:7rem}.md\\:text-left{text-align:left}.md\\:grid-in-\\[1\\/1\\/1\\/1\\]{grid-area:1/1/1/1}@media(prefers-reduced-motion:no-preference){.md\\:motion-safe\\:zoom-in-95{--tw-enter-scale: .95 }.md\\:motion-safe\\:zoom-out-95{--tw-exit-scale: .95 }}@media not all and (min-width:1280px){.md\\:max-lg\\:col-span-4{grid-column:span 4 / span 4}.md\\:max-lg\\:col-span-6{grid-column:span 6 / span 6}.md\\:max-lg\\:col-start-2{grid-column-start:2}.md\\:max-lg\\:col-start-3{grid-column-start:3}.md\\:max-lg\\:flex{display:flex}.md\\:max-lg\\:grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}}}@media(min-width:1280px){.lg\\:-bottom-20{bottom:-5rem}.lg\\:left-0{left:0}.lg\\:left-\\[5\\%\\]{left:5%}.lg\\:right-\\[5\\%\\]{right:5%}.lg\\:top-10{top:2.5rem}.lg\\:top-24{top:6rem}.lg\\:top-6{top:1.5rem}.lg\\:col-span-10{grid-column:span 10 / span 10}.lg\\:col-span-4{grid-column:span 4 / span 4}.lg\\:col-span-6{grid-column:span 6 / span 6}.lg\\:col-span-8{grid-column:span 8 / span 8}.lg\\:col-start-2{grid-column-start:2}.lg\\:col-start-4{grid-column-start:4}.lg\\:col-start-5{grid-column-start:5}.lg\\:-mt-12{margin-top:-3rem}.lg\\:flex{display:flex}.lg\\:grid{display:grid}.lg\\:hidden{display:none}.lg\\:h-11{height:2.75rem}.lg\\:h-16{height:4rem}.lg\\:h-20{height:5rem}.lg\\:h-32{height:8rem}.lg\\:h-52{height:13rem}.lg\\:h-\\[132px\\]{height:132px}.lg\\:h-\\[3\\.75rem\\]{height:3.75rem}.lg\\:w-11{width:2.75rem}.lg\\:w-16{width:4rem}.lg\\:w-20{width:5rem}.lg\\:w-32{width:8rem}.lg\\:w-52{width:13rem}.lg\\:w-\\[132px\\]{width:132px}.lg\\:w-\\[138px\\]{width:138px}.lg\\:w-\\[3\\.75rem\\]{width:3.75rem}.lg\\:w-\\[82\\%\\]{width:82%}.lg\\:w-\\[90\\%\\]{width:90%}.lg\\:w-full{width:100%}.lg\\:max-w-\\[120rem\\]{max-width:120rem}.lg\\:max-w-\\[1440px\\]{max-width:1440px}.lg\\:max-w-\\[1520px\\]{max-width:1520px}.lg\\:max-w-\\[59\\.625rem\\]{max-width:59.625rem}.lg\\:max-w-none{max-width:none}.lg\\:-translate-y-full{--tw-translate-y: -100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.lg\\:\\!grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))!important}.lg\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.lg\\:grid-cols-subgrid{grid-template-columns:subgrid}.lg\\:flex-row{flex-direction:row}.lg\\:justify-end{justify-content:flex-end}.lg\\:justify-between{justify-content:space-between}.lg\\:gap-3{gap:.75rem}.lg\\:gap-5{gap:1.25rem}.lg\\:gap-8{gap:2rem}.lg\\:border-x-0{border-left-width:0px;border-right-width:0px}.lg\\:border-b{border-bottom-width:1px}.lg\\:border-t-0{border-top-width:0px}.lg\\:border-solid{border-style:solid}.lg\\:border-neutral-subtle{--tw-border-opacity: 1;border-color:color-mix(in srgb,var(--border-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-border-opacity)))}.lg\\:\\!bg-base{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--background-base-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.lg\\:bg-transparent{background-color:transparent}.lg\\:bg-\\[linear-gradient\\(185deg\\,transparent_30\\%\\,var\\(--base-color\\)_60\\%\\)\\]{background-image:linear-gradient(185deg,transparent 30%,var(--base-color) 60%)}.lg\\:\\!p-6{padding:1.5rem!important}.lg\\:px-10{padding-left:2.5rem;padding-right:2.5rem}.lg\\:pb-10{padding-bottom:2.5rem}.lg\\:pb-14{padding-bottom:3.5rem}.lg\\:pt-0{padding-top:0}.lg\\:pt-16{padding-top:4rem}.lg\\:pt-36{padding-top:9rem}.lg\\:text-size-lg-heading-large{font-size:var(--font-size-lg-heading-large);line-height:var(--line-height-lg-heading-large)}.lg\\:text-size-lg-heading-medium{font-size:var(--font-size-lg-heading-medium);line-height:var(--line-height-lg-heading-medium)}.lg\\:text-size-lg-heading-x-large{font-size:var(--font-size-lg-heading-x-large);line-height:var(--line-height-lg-heading-x-large)}.lg\\:blur-\\[30px\\]{--tw-blur: blur(30px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.group\\/menu[data-variant=mega] .lg\\:group-data-\\[variant\\=mega\\]\\/menu\\:mx-10{margin-left:2.5rem;margin-right:2.5rem}}.ltr\\:ml-6:where([dir=ltr],[dir=ltr] *){margin-left:1.5rem}.ltr\\:rounded-bl-xl:where([dir=ltr],[dir=ltr] *){border-bottom-left-radius:.75rem}.ltr\\:rounded-br-xl:where([dir=ltr],[dir=ltr] *){border-bottom-right-radius:.75rem}.ltr\\:rounded-tl-xl:where([dir=ltr],[dir=ltr] *){border-top-left-radius:.75rem}.ltr\\:rounded-tr-xl:where([dir=ltr],[dir=ltr] *){border-top-right-radius:.75rem}.ltr\\:border-l-0:where([dir=ltr],[dir=ltr] *){border-left-width:0px}.ltr\\:text-left:where([dir=ltr],[dir=ltr] *){text-align:left}.rtl\\:-left-0:where([dir=rtl],[dir=rtl] *){left:-0px}.rtl\\:-left-0\\.5:where([dir=rtl],[dir=rtl] *){left:-.125rem}.rtl\\:-left-2:where([dir=rtl],[dir=rtl] *){left:-.5rem}.rtl\\:-right-0:where([dir=rtl],[dir=rtl] *){right:-0px}.rtl\\:-right-0\\.5:where([dir=rtl],[dir=rtl] *){right:-.125rem}.rtl\\:-right-2:where([dir=rtl],[dir=rtl] *){right:-.5rem}.rtl\\:mr-6:where([dir=rtl],[dir=rtl] *){margin-right:1.5rem}.rtl\\:-rotate-45:where([dir=rtl],[dir=rtl] *){--tw-rotate: -45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rtl\\:rotate-180:where([dir=rtl],[dir=rtl] *){--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rtl\\:rotate-45:where([dir=rtl],[dir=rtl] *){--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rtl\\:scale-x-\\[-1\\]:where([dir=rtl],[dir=rtl] *){--tw-scale-x: -1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rtl\\:rounded-bl-xl:where([dir=rtl],[dir=rtl] *){border-bottom-left-radius:.75rem}.rtl\\:rounded-br-xl:where([dir=rtl],[dir=rtl] *){border-bottom-right-radius:.75rem}.rtl\\:rounded-tl-xl:where([dir=rtl],[dir=rtl] *){border-top-left-radius:.75rem}.rtl\\:rounded-tr-xl:where([dir=rtl],[dir=rtl] *){border-top-right-radius:.75rem}.rtl\\:border-r-0:where([dir=rtl],[dir=rtl] *){border-right-width:0px}.rtl\\:pl-2:where([dir=rtl],[dir=rtl] *){padding-left:.5rem}.rtl\\:pr-1:where([dir=rtl],[dir=rtl] *){padding-right:.25rem}.rtl\\:pr-1\\.5:where([dir=rtl],[dir=rtl] *){padding-right:.375rem}.rtl\\:pr-3:where([dir=rtl],[dir=rtl] *){padding-right:.75rem}.rtl\\:pr-4:where([dir=rtl],[dir=rtl] *){padding-right:1rem}.rtl\\:text-right:where([dir=rtl],[dir=rtl] *){text-align:right}.rtl\\:\\[transform\\:scaleX\\(-1\\)\\]:where([dir=rtl],[dir=rtl] *){transform:scaleX(-1)}.\\[\\&\\>\\*\\:nth-child\\(n\\+8\\)\\]\\:absolute>*:nth-child(n+8){position:absolute}.\\[\\&\\>\\*\\:nth-child\\(n\\+8\\)\\]\\:opacity-0>*:nth-child(n+8){opacity:0}.\\[\\&\\>button\\]\\:w-full>button{width:100%}@media(min-width:768px){.md\\:\\[\\&\\>button\\]\\:w-auto>button{width:auto}}.\\[\\&\\>div\\]\\:-rotate-90>div{--tw-rotate: -90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.\\[\\&\\>div\\]\\:rotate-180>div{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.\\[\\&\\>div\\]\\:rotate-90>div{--tw-rotate: 90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@media(min-width:768px){@media not all and (min-width:1280px){.md\\:max-lg\\:\\[\\&\\>li\\:last-child\\>\\:last-child\\]\\:truncate>li:last-child>:last-child{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.md\\:max-lg\\:\\[\\&\\>li\\:last-child\\]\\:overflow-hidden>li:last-child{overflow:hidden}}}.\\[\\&\\>li\\:nth-last-child\\(2\\)\\]\\:flex>li:nth-last-child(2){display:flex}.\\[\\&\\>li\\]\\:hidden>li{display:none}.\\[\\&\\>li\\]\\:flex-1>li{flex:1 1 0%}@media not all and (min-width:768px){.max-md\\:\\[\\&\\>span\\]\\:text-size-body-small>span{font-size:var(--font-size-body-small);line-height:var(--line-height-body-small)}}@media(min-width:1280px){.lg\\:\\[\\&\\>svg\\]\\:h-16>svg{height:4rem}.lg\\:\\[\\&\\>svg\\]\\:w-16>svg{width:4rem}}@media(min-width:768px){.md\\:\\[\\&\\[data-trailing-bottom\\=true\\]\\]\\:items-end[data-trailing-bottom=true]{align-items:flex-end}}.\\[\\&\\[data-trailing-slot-bottom\\=true\\]\\]\\:items-end[data-trailing-slot-bottom=true]{align-items:flex-end}.\\[\\&_\\.paloma-toast\\]\\:outline .paloma-toast{outline-style:solid}.\\[\\&_\\.paloma-toast\\]\\:outline-2 .paloma-toast{outline-width:2px}.\\[\\&_\\.paloma-toast\\]\\:outline-offset-2 .paloma-toast{outline-offset:2px}.\\[\\&_\\.paloma-toast\\]\\:outline-interactive-highlight .paloma-toast{outline-color:var(--interactive-highlight-color)}.\\[\\&_\\[data-variant\\=danger\\]\\]\\:\\!bg-interactive-neutral-regular [data-variant=danger]{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--interactive-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.\\[\\&_\\[data-variant\\=inverse\\]\\]\\:\\!bg-interactive-neutral-subtle [data-variant=inverse]{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--interactive-neutral-subtle-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.\\[\\&_\\[data-variant\\=primary\\]\\]\\:\\!bg-content-neutral-regular [data-variant=primary]{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.\\[\\&_\\[data-variant\\=secondary\\]\\]\\:\\!bg-interactive-neutral-regular [data-variant=secondary]{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--interactive-neutral-regular-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.\\[\\&_\\[data-vrt-overlay\\]\\]\\:\\!bg-content-neutral-bold\\/\\[0\\.08\\] [data-vrt-overlay]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)!important}.\\[\\&_\\[data-vrt-overlay\\]\\]\\:\\!bg-content-neutral-bold\\/\\[0\\.12\\] [data-vrt-overlay]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)!important}.\\[\\&_\\[role\\=tab\\]\\]\\:bg-content-neutral-regular\\/\\[0\\.08\\] [role=tab]{background-color:color-mix(in srgb,var(--content-neutral-regular-color),transparent 92%)}.\\[\\&_\\[role\\=tab\\]\\]\\:outline [role=tab]{outline-style:solid}.\\[\\&_\\[role\\=tab\\]\\]\\:outline-\\[3px\\] [role=tab]{outline-width:3px}.\\[\\&_\\[role\\=tab\\]\\]\\:outline-offset-2 [role=tab]{outline-offset:2px}.\\[\\&_\\[role\\=tab\\]\\]\\:outline-interactive-highlight [role=tab]{outline-color:var(--interactive-highlight-color)}.\\[\\&_a\\]\\:rounded-sm a{border-radius:.125rem}.\\[\\&_a\\]\\:bg-content-neutral-bold\\/\\[0\\.08\\] a{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.\\[\\&_a\\]\\:outline a{outline-style:solid}.\\[\\&_a\\]\\:outline-2 a{outline-width:2px}.\\[\\&_a\\]\\:outline-offset-2 a{outline-offset:2px}.\\[\\&_a\\]\\:outline-interactive-highlight a{outline-color:var(--interactive-highlight-color)}.\\[\\&_button\\]\\:rounded-md button{border-radius:.375rem}.\\[\\&_button\\]\\:\\!bg-surface-level-02 button{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--surface-level-02-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))!important}.\\[\\&_button\\]\\:bg-content-neutral-bold\\/\\[0\\.08\\] button{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.\\[\\&_button\\]\\:bg-content-neutral-bold\\/\\[0\\.12\\] button{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.\\[\\&_button\\]\\:outline button{outline-style:solid}.\\[\\&_button\\]\\:outline-2 button{outline-width:2px}.\\[\\&_button\\]\\:outline-offset-2 button{outline-offset:2px}.\\[\\&_button\\]\\:outline-interactive-highlight button{outline-color:var(--interactive-highlight-color)}@media not all and (min-width:1280px){.\\[\\&_span\\[data-logo-product-name\\=paloma-logo\\]\\]\\:max-lg\\:hidden span[data-logo-product-name=paloma-logo]{display:none}}@media(hover:hover){.\\[\\@media\\(hover\\:hover\\)\\]\\:hover\\:bg-content-neutral-bold\\/\\[0\\.08\\]:where([data-rac])[data-hovered]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.\\[\\@media\\(hover\\:hover\\)\\]\\:hover\\:bg-surface-level-02:where([data-rac])[data-hovered]{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-level-02-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.\\[\\@media\\(hover\\:hover\\)\\]\\:hover\\:active\\:bg-content-neutral-bold\\/\\[0\\.12\\]:active:where([data-rac])[data-hovered]{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.\\[\\@media\\(hover\\:hover\\)\\]\\:hover\\:bg-content-neutral-bold\\/\\[0\\.08\\]:where(:not([data-rac])):hover{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 92%)}.\\[\\@media\\(hover\\:hover\\)\\]\\:hover\\:bg-surface-level-02:where(:not([data-rac])):hover{--tw-bg-opacity: 1;background-color:color-mix(in srgb,var(--surface-level-02-color),transparent calc(100% - 100% * var(--tw-bg-opacity)))}.\\[\\@media\\(hover\\:hover\\)\\]\\:hover\\:active\\:bg-content-neutral-bold\\/\\[0\\.12\\]:active:where(:not([data-rac])):hover{background-color:color-mix(in srgb,var(--content-neutral-bold-color),transparent 88%)}.group:where([data-rac])[data-hovered] .\\[\\@media\\(hover\\:hover\\)\\]\\:group-hover\\:underline{text-decoration-line:underline}.group:where([data-rac])[data-hovered] .\\[\\@media\\(hover\\:hover\\)\\]\\:group-hover\\:no-underline{text-decoration-line:none}.group:where(:not([data-rac])):hover .\\[\\@media\\(hover\\:hover\\)\\]\\:group-hover\\:underline{text-decoration-line:underline}.group:where(:not([data-rac])):hover .\\[\\@media\\(hover\\:hover\\)\\]\\:group-hover\\:no-underline{text-decoration-line:none}}[tabindex="0"].\\[\\[tabindex\\=\\'0\\'\\]\\&\\:focus-visible\\]\\:outline:focus-visible{outline-style:solid}[tabindex="0"].\\[\\[tabindex\\=\\'0\\'\\]\\&\\:focus-visible\\]\\:outline-2:focus-visible{outline-width:2px}[tabindex="0"].\\[\\[tabindex\\=\\'0\\'\\]\\&\\:focus-visible\\]\\:outline-offset-2:focus-visible{outline-offset:2px}[tabindex="0"].\\[\\[tabindex\\=\\'0\\'\\]\\&\\:focus-visible\\]\\:outline-offset-\\[-3px\\]:focus-visible{outline-offset:-3px}[tabindex="0"].\\[\\[tabindex\\=\\'0\\'\\]\\&\\:focus-visible\\]\\:outline-interactive-highlight:focus-visible{outline-color:var(--interactive-highlight-color)}`;
var au = { exports: {} }, vo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ag;
function kw() {
  if (ag) return vo;
  ag = 1;
  var e = gd(), n = Symbol.for("react.element"), a = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(f, m, p) {
    var v, b = {}, h = null, w = null;
    p !== void 0 && (h = "" + p), m.key !== void 0 && (h = "" + m.key), m.ref !== void 0 && (w = m.ref);
    for (v in m) i.call(m, v) && !c.hasOwnProperty(v) && (b[v] = m[v]);
    if (f && f.defaultProps) for (v in m = f.defaultProps, m) b[v] === void 0 && (b[v] = m[v]);
    return { $$typeof: n, type: f, key: h, ref: w, props: b, _owner: s.current };
  }
  return vo.Fragment = a, vo.jsx = u, vo.jsxs = u, vo;
}
var og;
function _w() {
  return og || (og = 1, au.exports = kw()), au.exports;
}
var G = _w();
function Dh(e) {
  var n, a, i = "";
  if (typeof e == "string" || typeof e == "number") i += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (n = 0; n < s; n++) e[n] && (a = Dh(e[n])) && (i && (i += " "), i += a);
  } else for (a in e) e[a] && (i && (i += " "), i += a);
  return i;
}
function hd() {
  for (var e, n, a = 0, i = "", s = arguments.length; a < s; a++) (e = arguments[a]) && (n = Dh(e)) && (i && (i += " "), i += n);
  return i;
}
const vd = "-", Ew = (e) => {
  const n = Cw(e), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: i
  } = e;
  return {
    getClassGroupId: (u) => {
      const f = u.split(vd);
      return f[0] === "" && f.length !== 1 && f.shift(), Bh(f, n) || Sw(u);
    },
    getConflictingClassGroupIds: (u, f) => {
      const m = a[u] || [];
      return f && i[u] ? [...m, ...i[u]] : m;
    }
  };
}, Bh = (e, n) => {
  var u;
  if (e.length === 0)
    return n.classGroupId;
  const a = e[0], i = n.nextPart.get(a), s = i ? Bh(e.slice(1), i) : void 0;
  if (s)
    return s;
  if (n.validators.length === 0)
    return;
  const c = e.join(vd);
  return (u = n.validators.find(({
    validator: f
  }) => f(c))) == null ? void 0 : u.classGroupId;
}, ig = /^\[(.+)\]$/, Sw = (e) => {
  if (ig.test(e)) {
    const n = ig.exec(e)[1], a = n == null ? void 0 : n.substring(0, n.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, Cw = (e) => {
  const {
    theme: n,
    prefix: a
  } = e, i = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return $w(Object.entries(e.classGroups), a).forEach(([c, u]) => {
    Tu(u, i, c, n);
  }), i;
}, Tu = (e, n, a, i) => {
  e.forEach((s) => {
    if (typeof s == "string") {
      const c = s === "" ? n : lg(n, s);
      c.classGroupId = a;
      return;
    }
    if (typeof s == "function") {
      if (zw(s)) {
        Tu(s(i), n, a, i);
        return;
      }
      n.validators.push({
        validator: s,
        classGroupId: a
      });
      return;
    }
    Object.entries(s).forEach(([c, u]) => {
      Tu(u, lg(n, c), a, i);
    });
  });
}, lg = (e, n) => {
  let a = e;
  return n.split(vd).forEach((i) => {
    a.nextPart.has(i) || a.nextPart.set(i, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(i);
  }), a;
}, zw = (e) => e.isThemeGetter, $w = (e, n) => n ? e.map(([a, i]) => {
  const s = i.map((c) => typeof c == "string" ? n + c : typeof c == "object" ? Object.fromEntries(Object.entries(c).map(([u, f]) => [n + u, f])) : c);
  return [a, s];
}) : e, Pw = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, a = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  const s = (c, u) => {
    a.set(c, u), n++, n > e && (n = 0, i = a, a = /* @__PURE__ */ new Map());
  };
  return {
    get(c) {
      let u = a.get(c);
      if (u !== void 0)
        return u;
      if ((u = i.get(c)) !== void 0)
        return s(c, u), u;
    },
    set(c, u) {
      a.has(c) ? a.set(c, u) : s(c, u);
    }
  };
}, Uh = "!", Aw = (e) => {
  const {
    separator: n,
    experimentalParseClassName: a
  } = e, i = n.length === 1, s = n[0], c = n.length, u = (f) => {
    const m = [];
    let p = 0, v = 0, b;
    for (let _ = 0; _ < f.length; _++) {
      let A = f[_];
      if (p === 0) {
        if (A === s && (i || f.slice(_, _ + c) === n)) {
          m.push(f.slice(v, _)), v = _ + c;
          continue;
        }
        if (A === "/") {
          b = _;
          continue;
        }
      }
      A === "[" ? p++ : A === "]" && p--;
    }
    const h = m.length === 0 ? f : f.substring(v), w = h.startsWith(Uh), k = w ? h.substring(1) : h, y = b && b > v ? b - v : void 0;
    return {
      modifiers: m,
      hasImportantModifier: w,
      baseClassName: k,
      maybePostfixModifierPosition: y
    };
  };
  return a ? (f) => a({
    className: f,
    parseClassName: u
  }) : u;
}, Fw = (e) => {
  if (e.length <= 1)
    return e;
  const n = [];
  let a = [];
  return e.forEach((i) => {
    i[0] === "[" ? (n.push(...a.sort(), i), a = []) : a.push(i);
  }), n.push(...a.sort()), n;
}, Tw = (e) => ({
  cache: Pw(e.cacheSize),
  parseClassName: Aw(e),
  ...Ew(e)
}), Nw = /\s+/, Iw = (e, n) => {
  const {
    parseClassName: a,
    getClassGroupId: i,
    getConflictingClassGroupIds: s
  } = n, c = [], u = e.trim().split(Nw);
  let f = "";
  for (let m = u.length - 1; m >= 0; m -= 1) {
    const p = u[m], {
      modifiers: v,
      hasImportantModifier: b,
      baseClassName: h,
      maybePostfixModifierPosition: w
    } = a(p);
    let k = !!w, y = i(k ? h.substring(0, w) : h);
    if (!y) {
      if (!k) {
        f = p + (f.length > 0 ? " " + f : f);
        continue;
      }
      if (y = i(h), !y) {
        f = p + (f.length > 0 ? " " + f : f);
        continue;
      }
      k = !1;
    }
    const _ = Fw(v).join(":"), A = b ? _ + Uh : _, z = A + y;
    if (c.includes(z))
      continue;
    c.push(z);
    const U = s(y, k);
    for (let W = 0; W < U.length; ++W) {
      const Q = U[W];
      c.push(A + Q);
    }
    f = p + (f.length > 0 ? " " + f : f);
  }
  return f;
};
function Mw() {
  let e = 0, n, a, i = "";
  for (; e < arguments.length; )
    (n = arguments[e++]) && (a = Hh(n)) && (i && (i += " "), i += a);
  return i;
}
const Hh = (e) => {
  if (typeof e == "string")
    return e;
  let n, a = "";
  for (let i = 0; i < e.length; i++)
    e[i] && (n = Hh(e[i])) && (a && (a += " "), a += n);
  return a;
};
function Nu(e, ...n) {
  let a, i, s, c = u;
  function u(m) {
    const p = n.reduce((v, b) => b(v), e());
    return a = Tw(p), i = a.cache.get, s = a.cache.set, c = f, f(m);
  }
  function f(m) {
    const p = i(m);
    if (p)
      return p;
    const v = Iw(m, a);
    return s(m, v), v;
  }
  return function() {
    return c(Mw.apply(null, arguments));
  };
}
const Oe = (e) => {
  const n = (a) => a[e] || [];
  return n.isThemeGetter = !0, n;
}, Wh = /^\[(?:([a-z-]+):)?(.+)\]$/i, Lw = /^\d+\/\d+$/, Rw = /* @__PURE__ */ new Set(["px", "full", "screen"]), jw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ow = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Vw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Dw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Bw = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, sr = (e) => Nn(e) || Rw.has(e) || Lw.test(e), _r = (e) => Ea(e, "length", Ww), Nn = (e) => !!e && !Number.isNaN(Number(e)), zl = (e) => Ea(e, "number", Nn), ma = (e) => !!e && Number.isInteger(Number(e)), qh = (e) => e.endsWith("%") && Nn(e.slice(0, -1)), xe = (e) => Wh.test(e), Er = (e) => jw.test(e), Uw = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Gh = (e) => Ea(e, Uw, Xh), Kh = (e) => Ea(e, "position", Xh), Hw = /* @__PURE__ */ new Set(["image", "url"]), Yh = (e) => Ea(e, Hw, Gw), Qh = (e) => Ea(e, "", qw), ga = () => !0, Ea = (e, n, a) => {
  const i = Wh.exec(e);
  return i ? i[1] ? typeof n == "string" ? i[1] === n : n.has(i[1]) : a(i[2]) : !1;
}, Ww = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ow.test(e) && !Vw.test(e)
), Xh = () => !1, qw = (e) => Dw.test(e), Gw = (e) => Bw.test(e), Kw = /* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isAny: ga,
  isArbitraryImage: Yh,
  isArbitraryLength: _r,
  isArbitraryNumber: zl,
  isArbitraryPosition: Kh,
  isArbitraryShadow: Qh,
  isArbitrarySize: Gh,
  isArbitraryValue: xe,
  isInteger: ma,
  isLength: sr,
  isNumber: Nn,
  isPercent: qh,
  isTshirtSize: Er
}, Symbol.toStringTag, {
  value: "Module"
}), Iu = () => {
  const e = Oe("colors"), n = Oe("spacing"), a = Oe("blur"), i = Oe("brightness"), s = Oe("borderColor"), c = Oe("borderRadius"), u = Oe("borderSpacing"), f = Oe("borderWidth"), m = Oe("contrast"), p = Oe("grayscale"), v = Oe("hueRotate"), b = Oe("invert"), h = Oe("gap"), w = Oe("gradientColorStops"), k = Oe("gradientColorStopPositions"), y = Oe("inset"), _ = Oe("margin"), A = Oe("opacity"), z = Oe("padding"), U = Oe("saturate"), W = Oe("scale"), Q = Oe("sepia"), Y = Oe("skew"), K = Oe("space"), X = Oe("translate"), ee = () => ["auto", "contain", "none"], ie = () => ["auto", "hidden", "clip", "visible", "scroll"], ae = () => ["auto", xe, n], S = () => [xe, n], R = () => ["", sr, _r], C = () => ["auto", Nn, xe], j = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], L = () => ["solid", "dashed", "dotted", "double", "none"], T = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], I = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], F = () => ["", "0", xe], V = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], $ = () => [Nn, xe];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ga],
      spacing: [sr, _r],
      blur: ["none", "", Er, xe],
      brightness: $(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Er, xe],
      borderSpacing: S(),
      borderWidth: R(),
      contrast: $(),
      grayscale: F(),
      hueRotate: $(),
      invert: F(),
      gap: S(),
      gradientColorStops: [e],
      gradientColorStopPositions: [qh, _r],
      inset: ae(),
      margin: ae(),
      opacity: $(),
      padding: S(),
      saturate: $(),
      scale: $(),
      sepia: F(),
      skew: $(),
      space: S(),
      translate: S()
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
        columns: [Er]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": V()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": V()
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
        object: [...j(), xe]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ie()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ie()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ie()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: ee()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": ee()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": ee()
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
        z: ["auto", ma, xe]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: ae()
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
        grow: F()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: F()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ma, xe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ga]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ma, xe]
        }, xe]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": C()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": C()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ga]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ma, xe]
        }, xe]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": C()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": C()
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
        justify: ["normal", ...I()]
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
        content: ["normal", ...I(), "baseline"]
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
        "place-content": [...I(), "baseline"]
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
        p: [z]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [z]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [z]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [z]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [z]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [z]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [z]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [z]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [z]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [_]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [_]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [_]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [_]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [_]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [_]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [_]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [_]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [_]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [K]
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
        "space-y": [K]
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
          screen: [Er]
        }, Er]
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
        text: ["base", Er, _r]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", zl]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ga]
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
        "line-clamp": ["none", Nn, zl]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", sr, xe]
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
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [A]
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
        "text-opacity": [A]
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
        decoration: [...L(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", sr, _r]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", sr, xe]
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
        indent: S()
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
        "bg-opacity": [A]
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
        bg: [...j(), Kh]
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
        bg: ["auto", "cover", "contain", Gh]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Yh]
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
        border: [f]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [f]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [f]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [f]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [f]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [f]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [f]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [f]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [f]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [A]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...L(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [f]
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
        "divide-y": [f]
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
        "divide-opacity": [A]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: L()
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
        outline: ["", ...L()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [sr, xe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [sr, _r]
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
        ring: R()
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
        "ring-opacity": [A]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [sr, _r]
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
        shadow: ["", "inner", "none", Er, Qh]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ga]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [A]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...T(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": T()
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
        blur: [a]
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
        contrast: [m]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Er, xe]
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
        "hue-rotate": [v]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [b]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [U]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [Q]
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
        "backdrop-blur": [a]
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
        "backdrop-contrast": [m]
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
        "backdrop-hue-rotate": [v]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [b]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [A]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [U]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [Q]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", xe]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: $()
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
        delay: $()
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
        rotate: [ma, xe]
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
        "skew-x": [Y]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [Y]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", xe]
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
        "scroll-m": S()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": S()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": S()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": S()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": S()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": S()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": S()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": S()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": S()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": S()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": S()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": S()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": S()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": S()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": S()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": S()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": S()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": S()
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
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [sr, _r, zl]
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
}, Yw = (e, {
  cacheSize: n,
  prefix: a,
  separator: i,
  experimentalParseClassName: s,
  extend: c = {},
  override: u = {}
}) => {
  Fo(e, "cacheSize", n), Fo(e, "prefix", a), Fo(e, "separator", i), Fo(e, "experimentalParseClassName", s);
  for (const f in u)
    Qw(e[f], u[f]);
  for (const f in c)
    Xw(e[f], c[f]);
  return e;
}, Fo = (e, n, a) => {
  a !== void 0 && (e[n] = a);
}, Qw = (e, n) => {
  if (n)
    for (const a in n)
      Fo(e, a, n[a]);
}, Xw = (e, n) => {
  if (n)
    for (const a in n) {
      const i = n[a];
      i !== void 0 && (e[a] = (e[a] || []).concat(i));
    }
}, Zh = (e, ...n) => typeof e == "function" ? Nu(Iu, e, ...n) : Nu(() => Yw(Iu(), e), ...n), Zw = /* @__PURE__ */ Nu(Iu);
var bl = {}, $l = { exports: {} }, Jw = $l.exports, sg;
function e1() {
  return sg || (sg = 1, (function(e) {
    (function(n) {
      a(Math.pow(36, 5)), a(Math.pow(16, 7)), a(Math.pow(10, 9)), a(Math.pow(2, 30)), a(36), a(16), a(10), a(2);
      function a(u, f) {
        if (!(this instanceof a))
          return new a(u, f);
        if (this._low = 0, this._high = 0, this.remainder = null, typeof f > "u")
          return s.call(this, u);
        if (typeof u == "string")
          return c.call(this, u, f);
        i.call(this, u, f);
      }
      function i(u, f) {
        return this._low = u | 0, this._high = f | 0, this;
      }
      a.prototype.fromBits = i;
      function s(u) {
        return this._low = u & 65535, this._high = u >>> 16, this;
      }
      a.prototype.fromNumber = s;
      function c(u, f) {
        var m = parseInt(u, f || 10);
        return this._low = m & 65535, this._high = m >>> 16, this;
      }
      a.prototype.fromString = c, a.prototype.toNumber = function() {
        return this._high * 65536 + this._low;
      }, a.prototype.toString = function(u) {
        return this.toNumber().toString(u || 10);
      }, a.prototype.add = function(u) {
        var f = this._low + u._low, m = f >>> 16;
        return m += this._high + u._high, this._low = f & 65535, this._high = m & 65535, this;
      }, a.prototype.subtract = function(u) {
        return this.add(u.clone().negate());
      }, a.prototype.multiply = function(u) {
        var f = this._high, m = this._low, p = u._high, v = u._low, b, h;
        return h = m * v, b = h >>> 16, b += f * v, b &= 65535, b += m * p, this._low = h & 65535, this._high = b & 65535, this;
      }, a.prototype.div = function(u) {
        if (u._low == 0 && u._high == 0) throw Error("division by zero");
        if (u._high == 0 && u._low == 1)
          return this.remainder = new a(0), this;
        if (u.gt(this))
          return this.remainder = this.clone(), this._low = 0, this._high = 0, this;
        if (this.eq(u))
          return this.remainder = new a(0), this._low = 1, this._high = 0, this;
        for (var f = u.clone(), m = -1; !this.lt(f); )
          f.shiftLeft(1, !0), m++;
        for (this.remainder = this.clone(), this._low = 0, this._high = 0; m >= 0; m--)
          f.shiftRight(1), this.remainder.lt(f) || (this.remainder.subtract(f), m >= 16 ? this._high |= 1 << m - 16 : this._low |= 1 << m);
        return this;
      }, a.prototype.negate = function() {
        var u = (~this._low & 65535) + 1;
        return this._low = u & 65535, this._high = ~this._high + (u >>> 16) & 65535, this;
      }, a.prototype.equals = a.prototype.eq = function(u) {
        return this._low == u._low && this._high == u._high;
      }, a.prototype.greaterThan = a.prototype.gt = function(u) {
        return this._high > u._high ? !0 : this._high < u._high ? !1 : this._low > u._low;
      }, a.prototype.lessThan = a.prototype.lt = function(u) {
        return this._high < u._high ? !0 : this._high > u._high ? !1 : this._low < u._low;
      }, a.prototype.or = function(u) {
        return this._low |= u._low, this._high |= u._high, this;
      }, a.prototype.and = function(u) {
        return this._low &= u._low, this._high &= u._high, this;
      }, a.prototype.not = function() {
        return this._low = ~this._low & 65535, this._high = ~this._high & 65535, this;
      }, a.prototype.xor = function(u) {
        return this._low ^= u._low, this._high ^= u._high, this;
      }, a.prototype.shiftRight = a.prototype.shiftr = function(u) {
        return u > 16 ? (this._low = this._high >> u - 16, this._high = 0) : u == 16 ? (this._low = this._high, this._high = 0) : (this._low = this._low >> u | this._high << 16 - u & 65535, this._high >>= u), this;
      }, a.prototype.shiftLeft = a.prototype.shiftl = function(u, f) {
        return u > 16 ? (this._high = this._low << u - 16, this._low = 0, f || (this._high &= 65535)) : u == 16 ? (this._high = this._low, this._low = 0) : (this._high = this._high << u | this._low >> 16 - u, this._low = this._low << u & 65535, f || (this._high &= 65535)), this;
      }, a.prototype.rotateLeft = a.prototype.rotl = function(u) {
        var f = this._high << 16 | this._low;
        return f = f << u | f >>> 32 - u, this._low = f & 65535, this._high = f >>> 16, this;
      }, a.prototype.rotateRight = a.prototype.rotr = function(u) {
        var f = this._high << 16 | this._low;
        return f = f >>> u | f << 32 - u, this._low = f & 65535, this._high = f >>> 16, this;
      }, a.prototype.clone = function() {
        return new a(this._low, this._high);
      }, e.exports ? e.exports = a : n.UINT32 = a;
    })(Jw);
  })($l)), $l.exports;
}
var Pl = { exports: {} }, t1 = Pl.exports, cg;
function r1() {
  return cg || (cg = 1, (function(e) {
    (function(n) {
      var a = {
        16: s(Math.pow(16, 5)),
        10: s(Math.pow(10, 5)),
        2: s(Math.pow(2, 5))
      }, i = {
        16: s(16),
        10: s(10),
        2: s(2)
      };
      function s(m, p, v, b) {
        if (!(this instanceof s))
          return new s(m, p, v, b);
        if (this.remainder = null, typeof m == "string")
          return f.call(this, m, p);
        if (typeof p > "u")
          return u.call(this, m);
        c.apply(this, arguments);
      }
      function c(m, p, v, b) {
        return typeof v > "u" ? (this._a00 = m & 65535, this._a16 = m >>> 16, this._a32 = p & 65535, this._a48 = p >>> 16, this) : (this._a00 = m | 0, this._a16 = p | 0, this._a32 = v | 0, this._a48 = b | 0, this);
      }
      s.prototype.fromBits = c;
      function u(m) {
        return this._a00 = m & 65535, this._a16 = m >>> 16, this._a32 = 0, this._a48 = 0, this;
      }
      s.prototype.fromNumber = u;
      function f(m, p) {
        p = p || 10, this._a00 = 0, this._a16 = 0, this._a32 = 0, this._a48 = 0;
        for (var v = a[p] || new s(Math.pow(p, 5)), b = 0, h = m.length; b < h; b += 5) {
          var w = Math.min(5, h - b), k = parseInt(m.slice(b, b + w), p);
          this.multiply(
            w < 5 ? new s(Math.pow(p, w)) : v
          ).add(new s(k));
        }
        return this;
      }
      s.prototype.fromString = f, s.prototype.toNumber = function() {
        return this._a16 * 65536 + this._a00;
      }, s.prototype.toString = function(m) {
        m = m || 10;
        var p = i[m] || new s(m);
        if (!this.gt(p)) return this.toNumber().toString(m);
        for (var v = this.clone(), b = new Array(64), h = 63; h >= 0 && (v.div(p), b[h] = v.remainder.toNumber().toString(m), !!v.gt(p)); h--)
          ;
        return b[h - 1] = v.toNumber().toString(m), b.join("");
      }, s.prototype.add = function(m) {
        var p = this._a00 + m._a00, v = p >>> 16;
        v += this._a16 + m._a16;
        var b = v >>> 16;
        b += this._a32 + m._a32;
        var h = b >>> 16;
        return h += this._a48 + m._a48, this._a00 = p & 65535, this._a16 = v & 65535, this._a32 = b & 65535, this._a48 = h & 65535, this;
      }, s.prototype.subtract = function(m) {
        return this.add(m.clone().negate());
      }, s.prototype.multiply = function(m) {
        var p = this._a00, v = this._a16, b = this._a32, h = this._a48, w = m._a00, k = m._a16, y = m._a32, _ = m._a48, A = p * w, z = A >>> 16;
        z += p * k;
        var U = z >>> 16;
        z &= 65535, z += v * w, U += z >>> 16, U += p * y;
        var W = U >>> 16;
        return U &= 65535, U += v * k, W += U >>> 16, U &= 65535, U += b * w, W += U >>> 16, W += p * _, W &= 65535, W += v * y, W &= 65535, W += b * k, W &= 65535, W += h * w, this._a00 = A & 65535, this._a16 = z & 65535, this._a32 = U & 65535, this._a48 = W & 65535, this;
      }, s.prototype.div = function(m) {
        if (m._a16 == 0 && m._a32 == 0 && m._a48 == 0) {
          if (m._a00 == 0) throw Error("division by zero");
          if (m._a00 == 1)
            return this.remainder = new s(0), this;
        }
        if (m.gt(this))
          return this.remainder = this.clone(), this._a00 = 0, this._a16 = 0, this._a32 = 0, this._a48 = 0, this;
        if (this.eq(m))
          return this.remainder = new s(0), this._a00 = 1, this._a16 = 0, this._a32 = 0, this._a48 = 0, this;
        for (var p = m.clone(), v = -1; !this.lt(p); )
          p.shiftLeft(1, !0), v++;
        for (this.remainder = this.clone(), this._a00 = 0, this._a16 = 0, this._a32 = 0, this._a48 = 0; v >= 0; v--)
          p.shiftRight(1), this.remainder.lt(p) || (this.remainder.subtract(p), v >= 48 ? this._a48 |= 1 << v - 48 : v >= 32 ? this._a32 |= 1 << v - 32 : v >= 16 ? this._a16 |= 1 << v - 16 : this._a00 |= 1 << v);
        return this;
      }, s.prototype.negate = function() {
        var m = (~this._a00 & 65535) + 1;
        return this._a00 = m & 65535, m = (~this._a16 & 65535) + (m >>> 16), this._a16 = m & 65535, m = (~this._a32 & 65535) + (m >>> 16), this._a32 = m & 65535, this._a48 = ~this._a48 + (m >>> 16) & 65535, this;
      }, s.prototype.equals = s.prototype.eq = function(m) {
        return this._a48 == m._a48 && this._a00 == m._a00 && this._a32 == m._a32 && this._a16 == m._a16;
      }, s.prototype.greaterThan = s.prototype.gt = function(m) {
        return this._a48 > m._a48 ? !0 : this._a48 < m._a48 ? !1 : this._a32 > m._a32 ? !0 : this._a32 < m._a32 ? !1 : this._a16 > m._a16 ? !0 : this._a16 < m._a16 ? !1 : this._a00 > m._a00;
      }, s.prototype.lessThan = s.prototype.lt = function(m) {
        return this._a48 < m._a48 ? !0 : this._a48 > m._a48 ? !1 : this._a32 < m._a32 ? !0 : this._a32 > m._a32 ? !1 : this._a16 < m._a16 ? !0 : this._a16 > m._a16 ? !1 : this._a00 < m._a00;
      }, s.prototype.or = function(m) {
        return this._a00 |= m._a00, this._a16 |= m._a16, this._a32 |= m._a32, this._a48 |= m._a48, this;
      }, s.prototype.and = function(m) {
        return this._a00 &= m._a00, this._a16 &= m._a16, this._a32 &= m._a32, this._a48 &= m._a48, this;
      }, s.prototype.xor = function(m) {
        return this._a00 ^= m._a00, this._a16 ^= m._a16, this._a32 ^= m._a32, this._a48 ^= m._a48, this;
      }, s.prototype.not = function() {
        return this._a00 = ~this._a00 & 65535, this._a16 = ~this._a16 & 65535, this._a32 = ~this._a32 & 65535, this._a48 = ~this._a48 & 65535, this;
      }, s.prototype.shiftRight = s.prototype.shiftr = function(m) {
        return m %= 64, m >= 48 ? (this._a00 = this._a48 >> m - 48, this._a16 = 0, this._a32 = 0, this._a48 = 0) : m >= 32 ? (m -= 32, this._a00 = (this._a32 >> m | this._a48 << 16 - m) & 65535, this._a16 = this._a48 >> m & 65535, this._a32 = 0, this._a48 = 0) : m >= 16 ? (m -= 16, this._a00 = (this._a16 >> m | this._a32 << 16 - m) & 65535, this._a16 = (this._a32 >> m | this._a48 << 16 - m) & 65535, this._a32 = this._a48 >> m & 65535, this._a48 = 0) : (this._a00 = (this._a00 >> m | this._a16 << 16 - m) & 65535, this._a16 = (this._a16 >> m | this._a32 << 16 - m) & 65535, this._a32 = (this._a32 >> m | this._a48 << 16 - m) & 65535, this._a48 = this._a48 >> m & 65535), this;
      }, s.prototype.shiftLeft = s.prototype.shiftl = function(m, p) {
        return m %= 64, m >= 48 ? (this._a48 = this._a00 << m - 48, this._a32 = 0, this._a16 = 0, this._a00 = 0) : m >= 32 ? (m -= 32, this._a48 = this._a16 << m | this._a00 >> 16 - m, this._a32 = this._a00 << m & 65535, this._a16 = 0, this._a00 = 0) : m >= 16 ? (m -= 16, this._a48 = this._a32 << m | this._a16 >> 16 - m, this._a32 = (this._a16 << m | this._a00 >> 16 - m) & 65535, this._a16 = this._a00 << m & 65535, this._a00 = 0) : (this._a48 = this._a48 << m | this._a32 >> 16 - m, this._a32 = (this._a32 << m | this._a16 >> 16 - m) & 65535, this._a16 = (this._a16 << m | this._a00 >> 16 - m) & 65535, this._a00 = this._a00 << m & 65535), p || (this._a48 &= 65535), this;
      }, s.prototype.rotateLeft = s.prototype.rotl = function(m) {
        if (m %= 64, m == 0) return this;
        if (m >= 32) {
          var p = this._a00;
          if (this._a00 = this._a32, this._a32 = p, p = this._a48, this._a48 = this._a16, this._a16 = p, m == 32) return this;
          m -= 32;
        }
        var v = this._a48 << 16 | this._a32, b = this._a16 << 16 | this._a00, h = v << m | b >>> 32 - m, w = b << m | v >>> 32 - m;
        return this._a00 = w & 65535, this._a16 = w >>> 16, this._a32 = h & 65535, this._a48 = h >>> 16, this;
      }, s.prototype.rotateRight = s.prototype.rotr = function(m) {
        if (m %= 64, m == 0) return this;
        if (m >= 32) {
          var p = this._a00;
          if (this._a00 = this._a32, this._a32 = p, p = this._a48, this._a48 = this._a16, this._a16 = p, m == 32) return this;
          m -= 32;
        }
        var v = this._a48 << 16 | this._a32, b = this._a16 << 16 | this._a00, h = v >>> m | b << 32 - m, w = b >>> m | v << 32 - m;
        return this._a00 = w & 65535, this._a16 = w >>> 16, this._a32 = h & 65535, this._a48 = h >>> 16, this;
      }, s.prototype.clone = function() {
        return new s(this._a00, this._a16, this._a32, this._a48);
      }, e.exports ? e.exports = s : n.UINT64 = s;
    })(t1);
  })(Pl)), Pl.exports;
}
var ug;
function Jh() {
  return ug || (ug = 1, bl.UINT32 = e1(), bl.UINT64 = r1()), bl;
}
var ou, dg;
function n1() {
  if (dg) return ou;
  dg = 1;
  var e = Jh().UINT32;
  e.prototype.xxh_update = function(p, v) {
    var b = a._low, h = a._high, w, k;
    k = p * b, w = k >>> 16, w += v * b, w &= 65535, w += p * h;
    var y = this._low + (k & 65535), _ = y >>> 16;
    _ += this._high + (w & 65535);
    var A = _ << 16 | y & 65535;
    A = A << 13 | A >>> 19, y = A & 65535, _ = A >>> 16, b = n._low, h = n._high, k = y * b, w = k >>> 16, w += _ * b, w &= 65535, w += y * h, this._low = k & 65535, this._high = w & 65535;
  };
  var n = e("2654435761"), a = e("2246822519"), i = e("3266489917"), s = e("668265263"), c = e("374761393");
  function u(p) {
    for (var v = [], b = 0, h = p.length; b < h; b++) {
      var w = p.charCodeAt(b);
      w < 128 ? v.push(w) : w < 2048 ? v.push(
        192 | w >> 6,
        128 | w & 63
      ) : w < 55296 || w >= 57344 ? v.push(
        224 | w >> 12,
        128 | w >> 6 & 63,
        128 | w & 63
      ) : (b++, w = 65536 + ((w & 1023) << 10 | p.charCodeAt(b) & 1023), v.push(
        240 | w >> 18,
        128 | w >> 12 & 63,
        128 | w >> 6 & 63,
        128 | w & 63
      ));
    }
    return new Uint8Array(v);
  }
  function f() {
    if (arguments.length == 2)
      return new f(arguments[1]).update(arguments[0]).digest();
    if (!(this instanceof f))
      return new f(arguments[0]);
    m.call(this, arguments[0]);
  }
  function m(p) {
    return this.seed = p instanceof e ? p.clone() : e(p), this.v1 = this.seed.clone().add(n).add(a), this.v2 = this.seed.clone().add(a), this.v3 = this.seed.clone(), this.v4 = this.seed.clone().subtract(n), this.total_len = 0, this.memsize = 0, this.memory = null, this;
  }
  return f.prototype.init = m, f.prototype.update = function(p) {
    var v = typeof p == "string", b;
    v && (p = u(p), v = !1, b = !0), typeof ArrayBuffer < "u" && p instanceof ArrayBuffer && (b = !0, p = new Uint8Array(p));
    var h = 0, w = p.length, k = h + w;
    if (w == 0) return this;
    if (this.total_len += w, this.memsize == 0 && (v ? this.memory = "" : b ? this.memory = new Uint8Array(16) : this.memory = new Buffer(16)), this.memsize + w < 16)
      return v ? this.memory += p : b ? this.memory.set(p.subarray(0, w), this.memsize) : p.copy(this.memory, this.memsize, 0, w), this.memsize += w, this;
    if (this.memsize > 0) {
      v ? this.memory += p.slice(0, 16 - this.memsize) : b ? this.memory.set(p.subarray(0, 16 - this.memsize), this.memsize) : p.copy(this.memory, this.memsize, 0, 16 - this.memsize);
      var y = 0;
      v ? (this.v1.xxh_update(
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
      )), h += 16 - this.memsize, this.memsize = 0, v && (this.memory = "");
    }
    if (h <= k - 16) {
      var _ = k - 16;
      do
        v ? (this.v1.xxh_update(
          p.charCodeAt(h + 1) << 8 | p.charCodeAt(h),
          p.charCodeAt(h + 3) << 8 | p.charCodeAt(h + 2)
        ), h += 4, this.v2.xxh_update(
          p.charCodeAt(h + 1) << 8 | p.charCodeAt(h),
          p.charCodeAt(h + 3) << 8 | p.charCodeAt(h + 2)
        ), h += 4, this.v3.xxh_update(
          p.charCodeAt(h + 1) << 8 | p.charCodeAt(h),
          p.charCodeAt(h + 3) << 8 | p.charCodeAt(h + 2)
        ), h += 4, this.v4.xxh_update(
          p.charCodeAt(h + 1) << 8 | p.charCodeAt(h),
          p.charCodeAt(h + 3) << 8 | p.charCodeAt(h + 2)
        )) : (this.v1.xxh_update(
          p[h + 1] << 8 | p[h],
          p[h + 3] << 8 | p[h + 2]
        ), h += 4, this.v2.xxh_update(
          p[h + 1] << 8 | p[h],
          p[h + 3] << 8 | p[h + 2]
        ), h += 4, this.v3.xxh_update(
          p[h + 1] << 8 | p[h],
          p[h + 3] << 8 | p[h + 2]
        ), h += 4, this.v4.xxh_update(
          p[h + 1] << 8 | p[h],
          p[h + 3] << 8 | p[h + 2]
        )), h += 4;
      while (h <= _);
    }
    return h < k && (v ? this.memory += p.slice(h) : b ? this.memory.set(p.subarray(h, k), this.memsize) : p.copy(this.memory, this.memsize, h, k), this.memsize = k - h), this;
  }, f.prototype.digest = function() {
    var p = this.memory, v = typeof p == "string", b = 0, h = this.memsize, w, k, y = new e();
    for (this.total_len >= 16 ? w = this.v1.rotl(1).add(this.v2.rotl(7).add(this.v3.rotl(12).add(this.v4.rotl(18)))) : w = this.seed.clone().add(c), w.add(y.fromNumber(this.total_len)); b <= h - 4; )
      v ? y.fromBits(
        p.charCodeAt(b + 1) << 8 | p.charCodeAt(b),
        p.charCodeAt(b + 3) << 8 | p.charCodeAt(b + 2)
      ) : y.fromBits(
        p[b + 1] << 8 | p[b],
        p[b + 3] << 8 | p[b + 2]
      ), w.add(y.multiply(i)).rotl(17).multiply(s), b += 4;
    for (; b < h; )
      y.fromBits(v ? p.charCodeAt(b++) : p[b++], 0), w.add(y.multiply(c)).rotl(11).multiply(n);
    return k = w.clone().shiftRight(15), w.xor(k).multiply(a), k = w.clone().shiftRight(13), w.xor(k).multiply(i), k = w.clone().shiftRight(16), w.xor(k), this.init(this.seed), w;
  }, ou = f, ou;
}
var iu, fg;
function a1() {
  if (fg) return iu;
  fg = 1;
  var e = Jh().UINT64, n = e("11400714785074694791"), a = e("14029467366897019727"), i = e("1609587929392839161"), s = e("9650029242287828579"), c = e("2870177450012600261");
  function u(p) {
    for (var v = [], b = 0, h = p.length; b < h; b++) {
      var w = p.charCodeAt(b);
      w < 128 ? v.push(w) : w < 2048 ? v.push(
        192 | w >> 6,
        128 | w & 63
      ) : w < 55296 || w >= 57344 ? v.push(
        224 | w >> 12,
        128 | w >> 6 & 63,
        128 | w & 63
      ) : (b++, w = 65536 + ((w & 1023) << 10 | p.charCodeAt(b) & 1023), v.push(
        240 | w >> 18,
        128 | w >> 12 & 63,
        128 | w >> 6 & 63,
        128 | w & 63
      ));
    }
    return new Uint8Array(v);
  }
  function f() {
    if (arguments.length == 2)
      return new f(arguments[1]).update(arguments[0]).digest();
    if (!(this instanceof f))
      return new f(arguments[0]);
    m.call(this, arguments[0]);
  }
  function m(p) {
    return this.seed = p instanceof e ? p.clone() : e(p), this.v1 = this.seed.clone().add(n).add(a), this.v2 = this.seed.clone().add(a), this.v3 = this.seed.clone(), this.v4 = this.seed.clone().subtract(n), this.total_len = 0, this.memsize = 0, this.memory = null, this;
  }
  return f.prototype.init = m, f.prototype.update = function(p) {
    var v = typeof p == "string", b;
    v && (p = u(p), v = !1, b = !0), typeof ArrayBuffer < "u" && p instanceof ArrayBuffer && (b = !0, p = new Uint8Array(p));
    var h = 0, w = p.length, k = h + w;
    if (w == 0) return this;
    if (this.total_len += w, this.memsize == 0 && (v ? this.memory = "" : b ? this.memory = new Uint8Array(32) : this.memory = new Buffer(32)), this.memsize + w < 32)
      return v ? this.memory += p : b ? this.memory.set(p.subarray(0, w), this.memsize) : p.copy(this.memory, this.memsize, 0, w), this.memsize += w, this;
    if (this.memsize > 0) {
      v ? this.memory += p.slice(0, 32 - this.memsize) : b ? this.memory.set(p.subarray(0, 32 - this.memsize), this.memsize) : p.copy(this.memory, this.memsize, 0, 32 - this.memsize);
      var y = 0;
      if (v) {
        var _;
        _ = e(
          this.memory.charCodeAt(y + 1) << 8 | this.memory.charCodeAt(y),
          this.memory.charCodeAt(y + 3) << 8 | this.memory.charCodeAt(y + 2),
          this.memory.charCodeAt(y + 5) << 8 | this.memory.charCodeAt(y + 4),
          this.memory.charCodeAt(y + 7) << 8 | this.memory.charCodeAt(y + 6)
        ), this.v1.add(_.multiply(a)).rotl(31).multiply(n), y += 8, _ = e(
          this.memory.charCodeAt(y + 1) << 8 | this.memory.charCodeAt(y),
          this.memory.charCodeAt(y + 3) << 8 | this.memory.charCodeAt(y + 2),
          this.memory.charCodeAt(y + 5) << 8 | this.memory.charCodeAt(y + 4),
          this.memory.charCodeAt(y + 7) << 8 | this.memory.charCodeAt(y + 6)
        ), this.v2.add(_.multiply(a)).rotl(31).multiply(n), y += 8, _ = e(
          this.memory.charCodeAt(y + 1) << 8 | this.memory.charCodeAt(y),
          this.memory.charCodeAt(y + 3) << 8 | this.memory.charCodeAt(y + 2),
          this.memory.charCodeAt(y + 5) << 8 | this.memory.charCodeAt(y + 4),
          this.memory.charCodeAt(y + 7) << 8 | this.memory.charCodeAt(y + 6)
        ), this.v3.add(_.multiply(a)).rotl(31).multiply(n), y += 8, _ = e(
          this.memory.charCodeAt(y + 1) << 8 | this.memory.charCodeAt(y),
          this.memory.charCodeAt(y + 3) << 8 | this.memory.charCodeAt(y + 2),
          this.memory.charCodeAt(y + 5) << 8 | this.memory.charCodeAt(y + 4),
          this.memory.charCodeAt(y + 7) << 8 | this.memory.charCodeAt(y + 6)
        ), this.v4.add(_.multiply(a)).rotl(31).multiply(n);
      } else {
        var _;
        _ = e(
          this.memory[y + 1] << 8 | this.memory[y],
          this.memory[y + 3] << 8 | this.memory[y + 2],
          this.memory[y + 5] << 8 | this.memory[y + 4],
          this.memory[y + 7] << 8 | this.memory[y + 6]
        ), this.v1.add(_.multiply(a)).rotl(31).multiply(n), y += 8, _ = e(
          this.memory[y + 1] << 8 | this.memory[y],
          this.memory[y + 3] << 8 | this.memory[y + 2],
          this.memory[y + 5] << 8 | this.memory[y + 4],
          this.memory[y + 7] << 8 | this.memory[y + 6]
        ), this.v2.add(_.multiply(a)).rotl(31).multiply(n), y += 8, _ = e(
          this.memory[y + 1] << 8 | this.memory[y],
          this.memory[y + 3] << 8 | this.memory[y + 2],
          this.memory[y + 5] << 8 | this.memory[y + 4],
          this.memory[y + 7] << 8 | this.memory[y + 6]
        ), this.v3.add(_.multiply(a)).rotl(31).multiply(n), y += 8, _ = e(
          this.memory[y + 1] << 8 | this.memory[y],
          this.memory[y + 3] << 8 | this.memory[y + 2],
          this.memory[y + 5] << 8 | this.memory[y + 4],
          this.memory[y + 7] << 8 | this.memory[y + 6]
        ), this.v4.add(_.multiply(a)).rotl(31).multiply(n);
      }
      h += 32 - this.memsize, this.memsize = 0, v && (this.memory = "");
    }
    if (h <= k - 32) {
      var A = k - 32;
      do {
        if (v) {
          var _;
          _ = e(
            p.charCodeAt(h + 1) << 8 | p.charCodeAt(h),
            p.charCodeAt(h + 3) << 8 | p.charCodeAt(h + 2),
            p.charCodeAt(h + 5) << 8 | p.charCodeAt(h + 4),
            p.charCodeAt(h + 7) << 8 | p.charCodeAt(h + 6)
          ), this.v1.add(_.multiply(a)).rotl(31).multiply(n), h += 8, _ = e(
            p.charCodeAt(h + 1) << 8 | p.charCodeAt(h),
            p.charCodeAt(h + 3) << 8 | p.charCodeAt(h + 2),
            p.charCodeAt(h + 5) << 8 | p.charCodeAt(h + 4),
            p.charCodeAt(h + 7) << 8 | p.charCodeAt(h + 6)
          ), this.v2.add(_.multiply(a)).rotl(31).multiply(n), h += 8, _ = e(
            p.charCodeAt(h + 1) << 8 | p.charCodeAt(h),
            p.charCodeAt(h + 3) << 8 | p.charCodeAt(h + 2),
            p.charCodeAt(h + 5) << 8 | p.charCodeAt(h + 4),
            p.charCodeAt(h + 7) << 8 | p.charCodeAt(h + 6)
          ), this.v3.add(_.multiply(a)).rotl(31).multiply(n), h += 8, _ = e(
            p.charCodeAt(h + 1) << 8 | p.charCodeAt(h),
            p.charCodeAt(h + 3) << 8 | p.charCodeAt(h + 2),
            p.charCodeAt(h + 5) << 8 | p.charCodeAt(h + 4),
            p.charCodeAt(h + 7) << 8 | p.charCodeAt(h + 6)
          ), this.v4.add(_.multiply(a)).rotl(31).multiply(n);
        } else {
          var _;
          _ = e(
            p[h + 1] << 8 | p[h],
            p[h + 3] << 8 | p[h + 2],
            p[h + 5] << 8 | p[h + 4],
            p[h + 7] << 8 | p[h + 6]
          ), this.v1.add(_.multiply(a)).rotl(31).multiply(n), h += 8, _ = e(
            p[h + 1] << 8 | p[h],
            p[h + 3] << 8 | p[h + 2],
            p[h + 5] << 8 | p[h + 4],
            p[h + 7] << 8 | p[h + 6]
          ), this.v2.add(_.multiply(a)).rotl(31).multiply(n), h += 8, _ = e(
            p[h + 1] << 8 | p[h],
            p[h + 3] << 8 | p[h + 2],
            p[h + 5] << 8 | p[h + 4],
            p[h + 7] << 8 | p[h + 6]
          ), this.v3.add(_.multiply(a)).rotl(31).multiply(n), h += 8, _ = e(
            p[h + 1] << 8 | p[h],
            p[h + 3] << 8 | p[h + 2],
            p[h + 5] << 8 | p[h + 4],
            p[h + 7] << 8 | p[h + 6]
          ), this.v4.add(_.multiply(a)).rotl(31).multiply(n);
        }
        h += 8;
      } while (h <= A);
    }
    return h < k && (v ? this.memory += p.slice(h) : b ? this.memory.set(p.subarray(h, k), this.memsize) : p.copy(this.memory, this.memsize, h, k), this.memsize = k - h), this;
  }, f.prototype.digest = function() {
    var p = this.memory, v = typeof p == "string", b = 0, h = this.memsize, w, k, y = new e();
    for (this.total_len >= 32 ? (w = this.v1.clone().rotl(1), w.add(this.v2.clone().rotl(7)), w.add(this.v3.clone().rotl(12)), w.add(this.v4.clone().rotl(18)), w.xor(this.v1.multiply(a).rotl(31).multiply(n)), w.multiply(n).add(s), w.xor(this.v2.multiply(a).rotl(31).multiply(n)), w.multiply(n).add(s), w.xor(this.v3.multiply(a).rotl(31).multiply(n)), w.multiply(n).add(s), w.xor(this.v4.multiply(a).rotl(31).multiply(n)), w.multiply(n).add(s)) : w = this.seed.clone().add(c), w.add(y.fromNumber(this.total_len)); b <= h - 8; )
      v ? y.fromBits(
        p.charCodeAt(b + 1) << 8 | p.charCodeAt(b),
        p.charCodeAt(b + 3) << 8 | p.charCodeAt(b + 2),
        p.charCodeAt(b + 5) << 8 | p.charCodeAt(b + 4),
        p.charCodeAt(b + 7) << 8 | p.charCodeAt(b + 6)
      ) : y.fromBits(
        p[b + 1] << 8 | p[b],
        p[b + 3] << 8 | p[b + 2],
        p[b + 5] << 8 | p[b + 4],
        p[b + 7] << 8 | p[b + 6]
      ), y.multiply(a).rotl(31).multiply(n), w.xor(y).rotl(27).multiply(n).add(s), b += 8;
    for (b + 4 <= h && (v ? y.fromBits(
      p.charCodeAt(b + 1) << 8 | p.charCodeAt(b),
      p.charCodeAt(b + 3) << 8 | p.charCodeAt(b + 2),
      0,
      0
    ) : y.fromBits(
      p[b + 1] << 8 | p[b],
      p[b + 3] << 8 | p[b + 2],
      0,
      0
    ), w.xor(y.multiply(n)).rotl(23).multiply(a).add(i), b += 4); b < h; )
      y.fromBits(v ? p.charCodeAt(b++) : p[b++], 0, 0, 0), w.xor(y.multiply(c)).rotl(11).multiply(n);
    return k = w.clone().shiftRight(33), w.xor(k).multiply(a), k = w.clone().shiftRight(29), w.xor(k).multiply(i), k = w.clone().shiftRight(32), w.xor(k), this.init(this.seed), w;
  }, iu = f, iu;
}
var lu, pg;
function o1() {
  return pg || (pg = 1, lu = {
    h32: n1(),
    h64: a1()
  }), lu;
}
var i1 = o1();
const l1 = /* @__PURE__ */ Oh(i1);
var mg = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, kt = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, s1 = (e, n) => JSON.stringify(e) === JSON.stringify(n);
function ev(e, n) {
  e.forEach(function(a) {
    Array.isArray(a) ? ev(a, n) : n.push(a);
  });
}
function tv(e) {
  let n = [];
  return ev(e, n), n;
}
var rv = (...e) => tv(e).filter(Boolean), nv = (e, n) => {
  let a = {}, i = Object.keys(e), s = Object.keys(n);
  for (let c of i) if (s.includes(c)) {
    let u = e[c], f = n[c];
    typeof u == "object" && typeof f == "object" ? a[c] = nv(u, f) : Array.isArray(u) || Array.isArray(f) ? a[c] = rv(f, u) : a[c] = f + " " + u;
  } else a[c] = e[c];
  for (let c of s) i.includes(c) || (a[c] = n[c]);
  return a;
}, gg = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim(), c1 = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, av = (e) => e || void 0, Bo = (...e) => av(tv(e).filter(Boolean).join(" ")), su = null, Sr = {}, Mu = !1, bo = (...e) => (n) => n.twMerge ? ((!su || Mu) && (Mu = !1, su = kt(Sr) ? Zw : Zh({ ...Sr, extend: { theme: Sr.theme, classGroups: Sr.classGroups, conflictingClassGroupModifiers: Sr.conflictingClassGroupModifiers, conflictingClassGroups: Sr.conflictingClassGroups, ...Sr.extend } })), av(su(Bo(e)))) : Bo(e), hg = (e, n) => {
  for (let a in n) e.hasOwnProperty(a) ? e[a] = Bo(e[a], n[a]) : e[a] = n[a];
  return e;
}, ti = (e, n) => {
  let { extend: a = null, slots: i = {}, variants: s = {}, compoundVariants: c = [], compoundSlots: u = [], defaultVariants: f = {} } = e, m = { ...c1, ...n }, p = a != null && a.base ? Bo(a.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, v = a != null && a.variants && !kt(a.variants) ? nv(s, a.variants) : s, b = a != null && a.defaultVariants && !kt(a.defaultVariants) ? { ...a.defaultVariants, ...f } : f;
  !kt(m.twMergeConfig) && !s1(m.twMergeConfig, Sr) && (Mu = !0, Sr = m.twMergeConfig);
  let h = kt(a == null ? void 0 : a.slots), w = kt(i) ? {} : { base: Bo(e == null ? void 0 : e.base, h && (a == null ? void 0 : a.base)), ...i }, k = h ? w : hg({ ...a == null ? void 0 : a.slots }, kt(w) ? { base: e == null ? void 0 : e.base } : w), y = kt(a == null ? void 0 : a.compoundVariants) ? c : rv(a == null ? void 0 : a.compoundVariants, c), _ = (z) => {
    if (kt(v) && kt(i) && h) return bo(p, z == null ? void 0 : z.class, z == null ? void 0 : z.className)(m);
    if (y && !Array.isArray(y)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof y}`);
    if (u && !Array.isArray(u)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof u}`);
    let U = (S, R, C = [], j) => {
      let L = C;
      if (typeof R == "string") L = L.concat(gg(R).split(" ").map((T) => `${S}:${T}`));
      else if (Array.isArray(R)) L = L.concat(R.reduce((T, I) => T.concat(`${S}:${I}`), []));
      else if (typeof R == "object" && typeof j == "string") {
        for (let T in R) if (R.hasOwnProperty(T) && T === j) {
          let I = R[T];
          if (I && typeof I == "string") {
            let F = gg(I);
            L[j] ? L[j] = L[j].concat(F.split(" ").map((V) => `${S}:${V}`)) : L[j] = F.split(" ").map((V) => `${S}:${V}`);
          } else Array.isArray(I) && I.length > 0 && (L[j] = I.reduce((F, V) => F.concat(`${S}:${V}`), []));
        }
      }
      return L;
    }, W = (S, R = v, C = null, j = null) => {
      var L;
      let T = R[S];
      if (!T || kt(T)) return null;
      let I = (L = j == null ? void 0 : j[S]) != null ? L : z == null ? void 0 : z[S];
      if (I === null) return null;
      let F = mg(I), V = Array.isArray(m.responsiveVariants) && m.responsiveVariants.length > 0 || m.responsiveVariants === !0, $ = b == null ? void 0 : b[S], D = [];
      if (typeof F == "object" && V) for (let [ve, ye] of Object.entries(F)) {
        let ze = T[ye];
        if (ve === "initial") {
          $ = ye;
          continue;
        }
        Array.isArray(m.responsiveVariants) && !m.responsiveVariants.includes(ve) || (D = U(ve, ze, D, C));
      }
      let me = F != null && typeof F != "object" ? F : mg($), fe = T[me || "false"];
      return typeof D == "object" && typeof C == "string" && D[C] ? hg(D, fe) : D.length > 0 ? (D.push(fe), D) : fe;
    }, Q = () => v ? Object.keys(v).map((S) => W(S, v)) : null, Y = (S, R) => {
      if (!v || typeof v != "object") return null;
      let C = new Array();
      for (let j in v) {
        let L = W(j, v, S, R), T = S === "base" && typeof L == "string" ? L : L && L[S];
        T && (C[C.length] = T);
      }
      return C;
    }, K = {};
    for (let S in z) z[S] !== void 0 && (K[S] = z[S]);
    let X = (S, R) => {
      var C;
      let j = typeof (z == null ? void 0 : z[S]) == "object" ? { [S]: (C = z[S]) == null ? void 0 : C.initial } : {};
      return { ...b, ...K, ...j, ...R };
    }, ee = (S = [], R) => {
      let C = [];
      for (let { class: j, className: L, ...T } of S) {
        let I = !0;
        for (let [F, V] of Object.entries(T)) {
          let $ = X(F, R);
          if (Array.isArray(V)) {
            if (!V.includes($[F])) {
              I = !1;
              break;
            }
          } else if ($[F] !== V) {
            I = !1;
            break;
          }
        }
        I && (j && C.push(j), L && C.push(L));
      }
      return C;
    }, ie = (S) => {
      let R = ee(y, S);
      if (!Array.isArray(R)) return R;
      let C = {};
      for (let j of R) if (typeof j == "string" && (C.base = bo(C.base, j)(m)), typeof j == "object") for (let [L, T] of Object.entries(j)) C[L] = bo(C[L], T)(m);
      return C;
    }, ae = (S) => {
      if (u.length < 1) return null;
      let R = {};
      for (let { slots: C = [], class: j, className: L, ...T } of u) {
        if (!kt(T)) {
          let I = !0;
          for (let F of Object.keys(T)) {
            let V = X(F, S)[F];
            if (V === void 0 || (Array.isArray(T[F]) ? !T[F].includes(V) : T[F] !== V)) {
              I = !1;
              break;
            }
          }
          if (!I) continue;
        }
        for (let I of C) R[I] = R[I] || [], R[I].push([j, L]);
      }
      return R;
    };
    if (!kt(i) || !h) {
      let S = {};
      if (typeof k == "object" && !kt(k)) for (let R of Object.keys(k)) S[R] = (C) => {
        var j, L;
        return bo(k[R], Y(R, C), ((j = ie(C)) != null ? j : [])[R], ((L = ae(C)) != null ? L : [])[R], C == null ? void 0 : C.class, C == null ? void 0 : C.className)(m);
      };
      return S;
    }
    return bo(p, Q(), ee(y), z == null ? void 0 : z.class, z == null ? void 0 : z.className)(m);
  }, A = () => {
    if (!(!v || typeof v != "object")) return Object.keys(v);
  };
  return _.variantKeys = A(), _.extend = a, _.base = p, _.slots = k, _.variants = v, _.defaultVariants = b, _.compoundSlots = u, _.compoundVariants = y, _;
}, u1 = Object.create, Ql = Object.defineProperty, d1 = Object.getOwnPropertyDescriptor, bd = Object.getOwnPropertyNames, f1 = Object.getPrototypeOf, p1 = Object.prototype.hasOwnProperty, m1 = (e, n) => function() {
  return e && (n = (0, e[bd(e)[0]])(e = 0)), n;
}, g1 = (e, n) => function() {
  return n || (0, e[bd(e)[0]])((n = { exports: {} }).exports, n), n.exports;
}, h1 = (e, n) => {
  for (var a in n)
    Ql(e, a, { get: n[a], enumerable: !0 });
}, ov = (e, n, a, i) => {
  if (n && typeof n == "object" || typeof n == "function")
    for (let s of bd(n))
      !p1.call(e, s) && s !== a && Ql(e, s, { get: () => n[s], enumerable: !(i = d1(n, s)) || i.enumerable });
  return e;
}, v1 = (e, n, a) => (a = e != null ? u1(f1(e)) : {}, ov(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Ql(a, "default", { value: e, enumerable: !0 }),
  e
)), b1 = (e) => ov(Ql({}, "__esModule", { value: !0 }), e), iv = {};
h1(iv, {
  MODE_VALUES: () => sv,
  THEME_VALUES: () => lv
});
var lv, sv, y1 = m1({
  "../@paloma-tokens/dist/assets/paloma-theme-mode-values.ts"() {
    lv = [
      "ea-blue",
      "ea-sims",
      "fc-green",
      "ea-battlefield6",
      // eslint-disable-line perfectionist/sort-union-types
      "purple",
      "red",
      "ea-madden"
    ], sv = ["dark", "light"];
  }
}), w1 = g1({
  "../@paloma-tokens/dist/index.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.THEME_VALUES = e.MODE_VALUES = void 0;
    var n = (y1(), b1(iv));
    Object.defineProperty(e, "MODE_VALUES", { enumerable: !0, get: function() {
      return n.MODE_VALUES;
    } }), Object.defineProperty(e, "THEME_VALUES", { enumerable: !0, get: function() {
      return n.THEME_VALUES;
    } });
  }
}), Lu = (e) => {
  console.error(`Assertion failed: ${e}`);
}, lt = (e, n) => {
  n || Lu("The assert function requires a message."), e || Lu(n);
}, x1 = (e, n) => {
  e == null && Lu(n);
};
function Se(e) {
  if (e === void 0)
    return !1;
}
var Ru = (e) => {
  Se() && console.warn(e);
}, k1 = "It seems like you're using the cn function with a single string input. The cn function is designed for handling conditional classes. If you're not dealing with conditional classes, consider using the class directly.", _1 = (e) => !e.startsWith("size"), cv = {
  override: {
    classGroups: {
      "font-size": [{ "text-size": [Kw.isAny] }],
      "font-variant": ["font-variant-none"],
      "text-color": [
        {
          text: [_1]
        }
      ]
    }
  }
}, E1 = Zh(cv), S1 = /\s\s+/g, C1 = (e) => e.replace(S1, " "), Bt = (...e) => {
  if (typeof e[0] == "string" && e.length === 1)
    return Ru(k1), Ru(`cn("${e[0]}")`), e[0];
  const n = E1(hd(...e));
  return C1(n);
};
function z1(e) {
  const n = JSON.stringify(e);
  return l1.h32(n, 84251515).toString();
}
var oe = (e, n) => ti(e, { twMergeConfig: cv, ...n }), uv = v1(w1());
uv.MODE_VALUES;
uv.THEME_VALUES;
function ka(e) {
  if ($1()) e.focus({
    preventScroll: !0
  });
  else {
    let n = P1(e);
    e.focus(), A1(n);
  }
}
let yl = null;
function $1() {
  if (yl == null) {
    yl = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return yl = !0, !0;
        }
      });
    } catch {
    }
  }
  return yl;
}
function P1(e) {
  let n = e.parentNode, a = [], i = document.scrollingElement || document.documentElement;
  for (; n instanceof HTMLElement && n !== i; )
    (n.offsetHeight < n.scrollHeight || n.offsetWidth < n.scrollWidth) && a.push({
      element: n,
      scrollTop: n.scrollTop,
      scrollLeft: n.scrollLeft
    }), n = n.parentNode;
  return i instanceof HTMLElement && a.push({
    element: i,
    scrollTop: i.scrollTop,
    scrollLeft: i.scrollLeft
  }), a;
}
function A1(e) {
  for (let { element: n, scrollTop: a, scrollLeft: i } of e)
    n.scrollTop = a, n.scrollLeft = i;
}
const it = (e) => F1(e) ? e.document : T1(e) ? e : (e == null ? void 0 : e.ownerDocument) ?? (typeof document < "u" ? document : void 0), Ut = (e) => {
  let n = it(e);
  return (n == null ? void 0 : n.defaultView) ?? (typeof window < "u" ? window : void 0);
};
function dv(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function F1(e) {
  return typeof e == "object" && e != null && "window" in e && e.window === e;
}
function T1(e) {
  return dv(e) && e.nodeType === 9;
}
function fv(e) {
  return dv(e) && e.nodeType === 11 && "host" in e;
}
let N1 = !1;
function yd() {
  return N1;
}
function nt(e, n) {
  var i;
  if (!yd()) return n && e ? e.contains(n) : !1;
  if (!e || !n) return !1;
  let a = n;
  for (; a !== null; ) {
    if (a === e) return !0;
    typeof a.assignedElements != "function" && ((i = a.assignedSlot) != null && i.parentNode) ? a = a.assignedSlot.parentNode : fv(a) ? a = a.host : a = a.parentNode;
  }
  return !1;
}
const Fr = (e = document) => {
  var a;
  if (!yd()) return e.activeElement;
  let n = e.activeElement;
  for (; n && "shadowRoot" in n && ((a = n.shadowRoot) != null && a.activeElement); ) n = n.shadowRoot.activeElement;
  return n;
};
function Ie(e) {
  if (yd() && e.target instanceof Element && e.target.shadowRoot) {
    if ("composedPath" in e) return e.composedPath()[0] ?? null;
    if ("composedPath" in e.nativeEvent) return e.nativeEvent.composedPath()[0] ?? null;
  }
  return e.target;
}
const I1 = typeof Element < "u" && "checkVisibility" in Element.prototype;
function M1(e) {
  const n = Ut(e);
  if (!(e instanceof n.HTMLElement) && !(e instanceof n.SVGElement)) return !1;
  let { display: a, visibility: i } = e.style, s = a !== "none" && i !== "hidden" && i !== "collapse";
  if (s) {
    const { getComputedStyle: c } = Ut(e);
    let { display: u, visibility: f } = c(e);
    s = u !== "none" && f !== "hidden" && f !== "collapse";
  }
  return s;
}
function L1(e, n) {
  return !e.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !e.hasAttribute("data-react-aria-prevent-focus") && (e.nodeName === "DETAILS" && n && n.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function pv(e, n) {
  return I1 ? e.checkVisibility({
    visibilityProperty: !0
  }) && !e.closest("[data-react-aria-prevent-focus]") : e.nodeName !== "#comment" && M1(e) && L1(e, n) && (!e.parentElement || pv(e.parentElement, e));
}
const mv = [
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
], R1 = mv.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
mv.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
function j1(e, n) {
  return e.matches(R1) && !O1(e) && ((n == null ? void 0 : n.skipVisibilityCheck) || pv(e));
}
function O1(e) {
  let n = e;
  for (; n != null; ) {
    if (n instanceof Ut(n).HTMLElement && n.inert) return !0;
    n = n.parentElement;
  }
  return !1;
}
const wd = typeof document < "u" ? E.useLayoutEffect : () => {
};
function xd(e) {
  let n = e;
  return n.nativeEvent = e, n.isDefaultPrevented = () => n.defaultPrevented, n.isPropagationStopped = () => n.cancelBubble, n.persist = () => {
  }, n;
}
function gv(e, n) {
  Object.defineProperty(e, "target", {
    value: n
  }), Object.defineProperty(e, "currentTarget", {
    value: n
  });
}
function hv(e) {
  let n = O.useRef({
    isFocused: !1,
    observer: null
  });
  return wd(() => {
    const a = n.current;
    return () => {
      a.observer && (a.observer.disconnect(), a.observer = null);
    };
  }, []), O.useCallback((a) => {
    let i = Ie(a);
    if (i instanceof HTMLButtonElement || i instanceof HTMLInputElement || i instanceof HTMLTextAreaElement || i instanceof HTMLSelectElement) {
      n.current.isFocused = !0;
      let s = i, c = (u) => {
        if (n.current.isFocused = !1, s.disabled) {
          let f = xd(u);
          e == null || e(f);
        }
        n.current.observer && (n.current.observer.disconnect(), n.current.observer = null);
      };
      s.addEventListener("focusout", c, {
        once: !0
      }), n.current.observer = new MutationObserver(() => {
        var u;
        if (n.current.isFocused && s.disabled) {
          (u = n.current.observer) == null || u.disconnect();
          let f = s === Fr() ? null : Fr();
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
    e
  ]);
}
let Vl = !1;
function V1(e) {
  for (; e && !j1(e, {
    skipVisibilityCheck: !0
  }); ) e = e.parentElement;
  let n = Ut(e), a = Fr(n.document);
  if (!a || a === e) return;
  let i = e == null ? void 0 : e.getRootNode(), s = i != null && fv(i) ? i : Ut(e), c = (k) => k === e || k != null && nt(e, k), u = (k) => k === a || a != null && k != null && nt(a, k);
  Vl = !0;
  let f = !1, m = (k) => {
    (u(Ie(k)) || f) && k.stopImmediatePropagation();
  }, p = (k) => {
    (u(Ie(k)) || f) && (k.stopImmediatePropagation(), !e && !f && (f = !0, ka(a), h()));
  }, v = (k) => {
    (c(Ie(k)) || f) && k.stopImmediatePropagation();
  }, b = (k) => {
    (c(Ie(k)) || f) && (k.stopImmediatePropagation(), f || (f = !0, ka(a), h()));
  };
  s.addEventListener("blur", m, !0), s.addEventListener("focusout", p, !0), s.addEventListener("focusin", b, !0), s.addEventListener("focus", v, !0);
  let h = () => {
    cancelAnimationFrame(w), s.removeEventListener("blur", m, !0), s.removeEventListener("focusout", p, !0), s.removeEventListener("focusin", b, !0), s.removeEventListener("focus", v, !0), Vl = !1, f = !1;
  }, w = requestAnimationFrame(h);
  return h;
}
function Xl(e) {
  var a;
  if (typeof window > "u" || window.navigator == null) return !1;
  let n = (a = window.navigator.userAgentData) == null ? void 0 : a.brands;
  return Array.isArray(n) && n.some((i) => e.test(i.brand)) || e.test(window.navigator.userAgent);
}
function kd(e) {
  var n;
  return typeof window < "u" && window.navigator != null ? e.test(((n = window.navigator.userAgentData) == null ? void 0 : n.platform) || window.navigator.platform) : !1;
}
function fn(e) {
  let n = null;
  return () => (n == null && (n = e()), n);
}
const In = fn(function() {
  return kd(/^Mac/i);
}), D1 = fn(function() {
  return kd(/^iPhone/i);
}), vv = fn(function() {
  return kd(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  In() && navigator.maxTouchPoints > 1;
}), _d = fn(function() {
  return D1() || vv();
}), Dl = fn(function() {
  return Xl(/AppleWebKit/i) && (_d() || !B1());
}), B1 = fn(function() {
  return Xl(/Chrome|CriOS|CrMo/i);
}), ju = fn(function() {
  return Xl(/Android/i);
}), U1 = fn(function() {
  return Xl(/(Firefox|FxiOS)/i);
});
function bv(e) {
  return e.pointerType === "" && e.isTrusted ? !0 : ju() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function H1(e) {
  return !ju() && e.width === 0 && e.height === 0 || ju() && e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
const W1 = /* @__PURE__ */ O.createContext({
  isNative: !0,
  open: K1,
  useHref: (e) => e
});
function yv() {
  return O.useContext(W1);
}
function q1(e, n) {
  let a = e.getAttribute("target");
  return (!a || a === "_self") && e.origin === location.origin && !e.hasAttribute("download") && !n.metaKey && // open in new tab (mac)
  !n.ctrlKey && // open in new tab (windows)
  !n.altKey && // download
  !n.shiftKey;
}
function dn(e, n, a = !0) {
  var m, p;
  let { metaKey: i, ctrlKey: s, altKey: c, shiftKey: u } = n;
  !Dl() && U1() && ((p = (m = window.event) == null ? void 0 : m.type) != null && p.startsWith("key")) && e.target === "_blank" && (In() ? i = !0 : s = !0);
  let f = Dl() && In() && !vv() ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: i,
    ctrlKey: s,
    altKey: c,
    shiftKey: u
  }) : new MouseEvent("click", {
    metaKey: i,
    ctrlKey: s,
    altKey: c,
    shiftKey: u,
    detail: 1,
    bubbles: !0,
    cancelable: !0
  });
  dn.isOpening = a, ka(e), e.dispatchEvent(f), dn.isOpening = !1;
}
dn.isOpening = !1;
function G1(e, n) {
  if (e instanceof HTMLAnchorElement) n(e);
  else if (e.hasAttribute("data-href")) {
    let a = document.createElement("a");
    a.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (a.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (a.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (a.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (a.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (a.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(a), n(a), e.removeChild(a);
  }
}
function K1(e, n) {
  G1(e, (a) => dn(a, n));
}
function Y1(e) {
  const a = yv().useHref((e == null ? void 0 : e.href) ?? "");
  let i = {};
  if (e)
    for (let s of [
      "href",
      "target",
      "rel",
      "download",
      "ping",
      "referrerPolicy"
    ]) s in e && e[s] !== void 0 && (i[s] = s === "href" ? a : e[s]);
  return i;
}
function Q1(e, n, a, i) {
  !n.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && // If props are applied to a router Link component, it may have already prevented default.
  !e.isDefaultPrevented() && q1(e.currentTarget, e) && a && (e.preventDefault(), n.open(e.currentTarget, e, a, i));
}
let Sa = null;
const Ou = /* @__PURE__ */ new Set();
let No = /* @__PURE__ */ new Map(), Mn = !1, Al = !1;
const X1 = {
  Tab: !0,
  Escape: !0
};
function Ed(e, n) {
  for (let a of Ou) a(e, n);
}
function Z1(e) {
  return !(e.metaKey || !In() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Bl(e) {
  Mn = !0, !dn.isOpening && Z1(e) && (Sa = "keyboard", Ed("keyboard", e));
}
function va(e) {
  Sa = "pointer", "pointerType" in e && e.pointerType, (e.type === "mousedown" || e.type === "pointerdown") && (Mn = !0, Ed("pointer", e));
}
function wv(e) {
  !dn.isOpening && bv(e) && (Mn = !0, Sa = "virtual");
}
function xv(e) {
  if (Vl) return;
  let n = Ie(e), a = Ut(n), i = it(n);
  if (n === a) {
    Al = !0;
    return;
  }
  n === i || !e.isTrusted || (!Mn && !Al && (Sa = "virtual", Ed("virtual", e)), Mn = !1, Al = !1);
}
function kv() {
  Vl || (Mn = !1, Al = !0);
}
function Vu(e) {
  if (typeof window > "u" || typeof document > "u") return;
  const n = Ut(e), a = it(e);
  if (No.get(n)) return;
  let i = n.HTMLElement.prototype.focus;
  Reflect.defineProperty(n.HTMLElement.prototype, "focus", {
    configurable: !0,
    writable: !0,
    value: function() {
      Mn = !0, i.apply(this, arguments);
    }
  }), a.addEventListener("keydown", Bl, !0), a.addEventListener("keyup", Bl, !0), a.addEventListener("click", wv, !0), n.addEventListener("focus", xv, !0), n.addEventListener("blur", kv, !1), typeof PointerEvent < "u" && (a.addEventListener("pointerdown", va, !0), a.addEventListener("pointermove", va, !0), a.addEventListener("pointerup", va, !0)), n.addEventListener("beforeunload", () => {
    _v(e);
  }, {
    once: !0
  }), No.set(n, {
    focus: i
  });
}
const _v = (e, n) => {
  const a = Ut(e), i = it(e);
  n && i.removeEventListener("DOMContentLoaded", n), No.has(a) && (Reflect.defineProperty(a.HTMLElement.prototype, "focus", {
    configurable: !0,
    writable: !0,
    value: No.get(a).focus
  }), i.removeEventListener("keydown", Bl, !0), i.removeEventListener("keyup", Bl, !0), i.removeEventListener("click", wv, !0), a.removeEventListener("focus", xv, !0), a.removeEventListener("blur", kv, !1), typeof PointerEvent < "u" && (i.removeEventListener("pointerdown", va, !0), i.removeEventListener("pointermove", va, !0), i.removeEventListener("pointerup", va, !0)), No.delete(a));
};
function J1(e) {
  const n = it(e);
  let a;
  return n.readyState !== "loading" ? Vu(e) : (a = () => {
    Vu(e);
  }, n.addEventListener("DOMContentLoaded", a)), () => _v(e, a);
}
typeof document < "u" && J1();
function Du() {
  return Sa !== "pointer";
}
function ex() {
  return Sa;
}
const tx = /* @__PURE__ */ new Set([
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
function rx(e, n, a) {
  let i = a ? Ie(a) : void 0, s = it(i), c = Ut(i);
  const u = typeof c < "u" ? c.HTMLInputElement : HTMLInputElement, f = typeof c < "u" ? c.HTMLTextAreaElement : HTMLTextAreaElement, m = typeof c < "u" ? c.HTMLElement : HTMLElement, p = typeof c < "u" ? c.KeyboardEvent : KeyboardEvent;
  let v = Fr(s);
  return e = e || v instanceof u && !tx.has(v.type) || v instanceof f || v instanceof m && v.isContentEditable, !(e && n === "keyboard" && a instanceof p && !X1[a.key]);
}
function nx(e, n, a) {
  Vu(), O.useEffect(() => {
    if ((a == null ? void 0 : a.enabled) === !1) return;
    let i = (s, c) => {
      rx(!!(a != null && a.isTextInput), s, c) && e(Du());
    };
    return Ou.add(i), () => {
      Ou.delete(i);
    };
  }, n);
}
let ln = /* @__PURE__ */ new Map(), Bu = /* @__PURE__ */ new Set();
function vg() {
  if (typeof window > "u") return;
  function e(i) {
    return "propertyName" in i;
  }
  let n = (i) => {
    let s = Ie(i);
    if (!e(i) || !s) return;
    let c = ln.get(s);
    c || (c = /* @__PURE__ */ new Set(), ln.set(s, c), s.addEventListener("transitioncancel", a, {
      once: !0
    })), c.add(i.propertyName);
  }, a = (i) => {
    let s = Ie(i);
    if (!e(i) || !s) return;
    let c = ln.get(s);
    if (c && (c.delete(i.propertyName), c.size === 0 && (s.removeEventListener("transitioncancel", a), ln.delete(s)), ln.size === 0)) {
      for (let u of Bu) u();
      Bu.clear();
    }
  };
  document.body.addEventListener("transitionrun", n), document.body.addEventListener("transitionend", a);
}
typeof document < "u" && (document.readyState !== "loading" ? vg() : document.addEventListener("DOMContentLoaded", vg));
function ax() {
  for (const [e] of ln)
    "isConnected" in e && !e.isConnected && ln.delete(e);
}
function Ev(e) {
  requestAnimationFrame(() => {
    ax(), ln.size === 0 ? e() : Bu.add(e);
  });
}
function ox(e) {
  if (!e.isConnected) return;
  const n = it(e);
  if (ex() === "virtual") {
    let a = Fr(n);
    Ev(() => {
      const i = Fr(n);
      (i === a || i === n.body) && e.isConnected && ka(e);
    });
  } else ka(e);
}
function Ul(...e) {
  return (...n) => {
    for (let a of e) typeof a == "function" && a(...n);
  };
}
let Uu = /* @__PURE__ */ new Map();
typeof FinalizationRegistry < "u" && new FinalizationRegistry((e) => {
  Uu.delete(e);
});
function ix(e, n) {
  if (e === n) return e;
  let a = Uu.get(e);
  if (a)
    return a.forEach((s) => s.current = n), n;
  let i = Uu.get(n);
  return i ? (i.forEach((s) => s.current = e), e) : n;
}
function Tr(...e) {
  return e.length === 1 && e[0] ? e[0] : (n) => {
    let a = !1;
    const i = e.map((s) => {
      const c = bg(s, n);
      return a || (a = typeof c == "function"), c;
    });
    if (a) return () => {
      i.forEach((s, c) => {
        typeof s == "function" ? s() : bg(e[c], null);
      });
    };
  };
}
function bg(e, n) {
  if (typeof e == "function") return e(n);
  e != null && (e.current = n);
}
function Je(...e) {
  let n = {
    ...e[0]
  };
  for (let a = 1; a < e.length; a++) {
    let i = e[a];
    for (let s in i) {
      let c = n[s], u = i[s];
      typeof c == "function" && typeof u == "function" && // This is a lot faster than a regex.
      s[0] === "o" && s[1] === "n" && s.charCodeAt(2) >= /* 'A' */
      65 && s.charCodeAt(2) <= /* 'Z' */
      90 ? n[s] = Ul(c, u) : (s === "className" || s === "UNSAFE_className") && typeof c == "string" && typeof u == "string" ? n[s] = hd(c, u) : s === "id" && c && u ? n.id = ix(c, u) : s === "ref" && c && u ? n.ref = Tr(c, u) : n[s] = u !== void 0 ? u : c;
    }
  }
  return n;
}
function Sv(e) {
  let { isDisabled: n, onFocus: a, onBlur: i, onFocusChange: s } = e;
  const c = O.useCallback((m) => {
    if (Ie(m) === m.currentTarget)
      return i && i(m), s && s(!1), !0;
  }, [
    i,
    s
  ]), u = hv(c), f = O.useCallback((m) => {
    let p = Ie(m);
    const v = it(p), b = v ? Fr(v) : Fr();
    p === m.currentTarget && p === b && (a && a(m), s && s(!0), u(m));
  }, [
    s,
    a,
    u
  ]);
  return {
    focusProps: {
      onFocus: !n && (a || s || i) ? f : void 0,
      onBlur: !n && (i || s) ? c : void 0
    }
  };
}
function wl(e) {
  if (e)
    return (n) => {
      let a = !0, i = {
        ...n,
        preventDefault() {
          n.preventDefault();
        },
        isDefaultPrevented() {
          return n.isDefaultPrevented();
        },
        stopPropagation() {
          a = !0;
        },
        continuePropagation() {
          a = !1, typeof n.continuePropagation == "function" && n.continuePropagation();
        },
        isPropagationStopped() {
          return a;
        }
      };
      e(i), a && !(typeof n.isPropagationStopped == "function" && n.isPropagationStopped()) && n.stopPropagation();
    };
}
const lx = /* @__PURE__ */ new Set([
  "shift",
  "alt",
  "control",
  "meta",
  "mod"
  // OS dependent - Cmd on Mac, Control on Windows/Linux
]), sx = [
  "Alt",
  "Control",
  "Meta",
  "Shift"
];
function cx(e) {
  let n = /* @__PURE__ */ new Set();
  return e.alt && n.add("Alt"), e.shift && n.add("Shift"), e.ctrl && n.add("Control"), e.meta && n.add("Meta"), e.mod && n.add(In() ? "Meta" : "Control"), n;
}
function ux(e) {
  let n = /* @__PURE__ */ new Set();
  return e.altKey && n.add("Alt"), e.ctrlKey && n.add("Control"), e.metaKey && n.add("Meta"), e.shiftKey && n.add("Shift"), n;
}
function Cv(e) {
  return sx.filter((n) => e.has(n));
}
function dx(e) {
  let n = e.split("+").reduce((a, i) => {
    let s = i.toLowerCase();
    return lx.has(s) ? s === "shift" ? a.shift = !0 : s === "alt" ? a.alt = !0 : s === "control" ? a.ctrl = !0 : s === "meta" ? a.meta = !0 : s === "mod" && (a.mod = !0) : a.key = i, a;
  }, {
    shift: !1,
    alt: !1,
    ctrl: !1,
    meta: !1,
    mod: !1,
    key: ""
  });
  if (n.key === "") throw new Error(`Invalid keyboard shortcut: "${e}". Must include exactly one non-modifier key (e.g. "a", "Enter", "ArrowDown"). Combine any of Shift, Alt, Ctrl, Meta, and Mod.`);
  return n;
}
function zv(e) {
  return e.toLowerCase();
}
const fx = {
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
function px(e) {
  let n = zv(e), a = fx[n];
  return a ?? n;
}
function mx(e) {
  let n = Cv(cx(e)), a = px(e.key);
  return n.length > 0 ? `${n.join("+")}+${a}` : a;
}
function gx(e) {
  let n = Cv(ux(e)), a = zv(e.key);
  return (n.length > 0 ? `${n.join("+")}+` : "") + a;
}
function hx(e) {
  let n = /* @__PURE__ */ new Map();
  for (let [a, i] of Object.entries(e)) {
    let s = dx(a);
    n.set(mx(s), i);
  }
  return (a) => {
    let i = gx(a), s = n.get(i), c = s == null ? void 0 : s(a);
    c === void 0 && s !== void 0 ? c = {
      shouldContinuePropagation: !1,
      shouldPreventDefault: !0
    } : typeof c == "boolean" && (c = {
      shouldContinuePropagation: !c,
      shouldPreventDefault: c
    }), c != null && c.shouldPreventDefault && a.preventDefault(), (!s || c != null && c.shouldContinuePropagation) && a.continuePropagation();
  };
}
function $v(e) {
  let { shortcuts: n, allowRepeats: a = !1, allowComposing: i = !1 } = e, s, c;
  if (n) {
    let u = hx(n), f = wl((p) => {
      var v, b;
      if (!nt(p.currentTarget, Ie(p))) {
        p.continuePropagation();
        return;
      }
      if ((v = p.nativeEvent) != null && v.repeat && !a || (b = p.nativeEvent) != null && b.isComposing && !i) {
        p.continuePropagation();
        return;
      }
      u(p);
    }), m = wl((p) => {
      var v, b;
      if (!nt(p.currentTarget, Ie(p))) {
        p.continuePropagation();
        return;
      }
      if ((v = p.nativeEvent) != null && v.repeat && !a || (b = p.nativeEvent) != null && b.isComposing && !i) {
        p.continuePropagation();
        return;
      }
      p.continuePropagation();
    });
    s = e.onKeyDown ? Ul(e.onKeyDown, f) : f, c = e.onKeyUp ? Ul(e.onKeyUp, m) : m;
  } else
    s = wl(e.onKeyDown), c = wl(e.onKeyUp);
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: s,
      onKeyUp: c
    }
  };
}
function Pv(e, n) {
  wd(() => {
    if (e && e.ref && n)
      return e.ref.current = n.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
let vx = /* @__PURE__ */ E.createContext(null);
function bx(e) {
  let n = O.useContext(vx) || {};
  Pv(n, e);
  let { ref: a, ...i } = n;
  return i;
}
function Av(e, n) {
  let { focusProps: a } = Sv(e), { keyboardProps: i } = $v(e), s = Je(a, i), c = bx(n), u = e.isDisabled ? {} : c, f = O.useRef(e.autoFocus);
  O.useEffect(() => {
    f.current && n.current && ox(n.current), f.current = !1;
  }, [
    n
  ]);
  let m = e.excludeFromTabOrder ? -1 : 0;
  return e.isDisabled && (m = void 0), {
    focusableProps: Je({
      ...s,
      tabIndex: m
    }, u)
  };
}
var yx = Vh();
const wx = E.useInsertionEffect ?? wd;
function cu(e) {
  const n = O.useRef(null);
  return wx(() => {
    n.current = e;
  }, [
    e
  ]), O.useCallback((...a) => {
    const i = n.current;
    return i == null ? void 0 : i(...a);
  }, []);
}
const xx = /* @__PURE__ */ new Set([
  "id"
]), kx = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), _x = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), Ex = /* @__PURE__ */ new Set([
  "dir",
  "lang",
  "hidden",
  "inert",
  "translate"
]), yg = /* @__PURE__ */ new Set([
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
]), Sx = /^(data-.*)$/;
function Fv(e, n = {}) {
  let { labelable: a, isLink: i, global: s, events: c = s, propNames: u } = n, f = {};
  for (const m in e) Object.prototype.hasOwnProperty.call(e, m) && (xx.has(m) || a && kx.has(m) || i && _x.has(m) || s && Ex.has(m) || c && (yg.has(m) || m.endsWith("Capture") && yg.has(m.slice(0, -7))) || u != null && u.has(m) || Sx.test(m)) && (f[m] = e[m]);
  return f;
}
let ha = "default", Hu = "", Fl = /* @__PURE__ */ new WeakMap();
function Cx(e) {
  if (_d() && Dl()) {
    if (ha === "default") {
      const n = it(e);
      Hu = n.documentElement.style.webkitUserSelect, n.documentElement.style.webkitUserSelect = "none";
    }
    ha = "disabled";
  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
    let n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    Fl.set(e, e.style[n]), e.style[n] = "none";
  }
}
function wg(e) {
  if (_d() && Dl()) {
    if (ha !== "disabled") return;
    ha = "restoring", setTimeout(() => {
      Ev(() => {
        if (ha === "restoring") {
          const n = it(e);
          n.documentElement.style.webkitUserSelect === "none" && (n.documentElement.style.webkitUserSelect = Hu || ""), Hu = "", ha = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Fl.has(e)) {
    let n = Fl.get(e), a = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    e.style[a] === "none" && (e.style[a] = n), e.getAttribute("style") === "" && e.removeAttribute("style"), Fl.delete(e);
  }
}
function zx(e, n) {
  let a = Ut(n), i = it(n);
  if (i == null || a == null) return;
  let s, c = `meta[name="${CSS.escape(e)}"], meta[property="${CSS.escape(e)}"]`, u = i.querySelector(c);
  return u && u instanceof a.HTMLMetaElement && (e === "csp-nonce" && u.nonce && (s ?? (s = u.nonce || void 0)), u.content && (s ?? (s = u.content || void 0))), e === "csp-nonce" && (s ?? (s = a.__webpack_nonce__ || globalThis.__webpack_nonce__ || void 0)), s;
}
let xg = /* @__PURE__ */ new WeakMap();
function $x(e) {
  let n = it(e), a = xg.get(n);
  return a ?? (a = zx("csp-nonce", n)), a !== void 0 && xg.set(n, a), a;
}
const Tv = E.createContext({
  register: () => {
  }
});
Tv.displayName = "PressResponderContext";
function Nv() {
  let e = O.useRef(/* @__PURE__ */ new Map()), n = O.useCallback((s, c, u, f) => {
    let m = f != null && f.once ? (...p) => {
      e.current.delete(u), u(...p);
    } : u;
    e.current.set(u, {
      type: c,
      eventTarget: s,
      fn: m,
      options: f
    }), s.addEventListener(c, m, f);
  }, []), a = O.useCallback((s, c, u, f) => {
    var p;
    let m = ((p = e.current.get(u)) == null ? void 0 : p.fn) || u;
    s.removeEventListener(c, m, f), e.current.delete(u);
  }, []), i = O.useCallback(() => {
    e.current.forEach((s, c) => {
      a(s.eventTarget, s.type, c, s.options);
    });
  }, [
    a
  ]);
  return O.useEffect(() => i, [
    i
  ]), {
    addGlobalListener: n,
    removeGlobalListener: a,
    removeAllGlobalListeners: i
  };
}
function Px(e) {
  let n = O.useContext(Tv);
  if (n) {
    let { register: a, ref: i, ...s } = n;
    e = Je(s, e), a();
  }
  return Pv(n, e.ref), e;
}
var xa;
class xl {
  constructor(n, a, i, s) {
    Qm(this, xa);
    Jc(this, xa, !0);
    let c = (s == null ? void 0 : s.target) ?? i.currentTarget;
    const u = c == null ? void 0 : c.getBoundingClientRect();
    let f, m = 0, p, v = null;
    i.clientX != null && i.clientY != null && (p = i.clientX, v = i.clientY), u && (p != null && v != null ? (f = p - u.left, m = v - u.top) : (f = u.width / 2, m = u.height / 2)), this.type = n, this.pointerType = a, this.target = i.currentTarget, this.shiftKey = i.shiftKey, this.metaKey = i.metaKey, this.ctrlKey = i.ctrlKey, this.altKey = i.altKey, this.x = f, this.y = m, this.key = i.key;
  }
  continuePropagation() {
    Jc(this, xa, !1);
  }
  get shouldStopPropagation() {
    return Ym(this, xa);
  }
}
xa = new WeakMap();
const kg = Symbol("linkClicked"), _g = "react-aria-pressable-style", Eg = "data-react-aria-pressable";
function Zl(e) {
  let { onPress: n, onPressChange: a, onPressStart: i, onPressEnd: s, onPressUp: c, onClick: u, isDisabled: f, isPressed: m, preventFocusOnPress: p, shouldCancelOnPointerExit: v, allowTextSelectionOnPress: b, ref: h, ...w } = Px(e), [k, y] = O.useState(!1), _ = O.useRef({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: A, removeAllGlobalListeners: z } = Nv(), U = O.useCallback((C, j) => {
    let L = _.current;
    if (f || L.didFirePressStart) return !1;
    let T = !0;
    if (L.isTriggeringEvent = !0, i) {
      let I = new xl("pressstart", j, C);
      i(I), T = I.shouldStopPropagation;
    }
    return a && a(!0), L.isTriggeringEvent = !1, L.didFirePressStart = !0, y(!0), T;
  }, [
    f,
    i,
    a
  ]), W = O.useCallback((C, j, L = !0) => {
    let T = _.current;
    if (!T.didFirePressStart) return !1;
    T.didFirePressStart = !1, T.isTriggeringEvent = !0;
    let I = !0;
    if (s) {
      let F = new xl("pressend", j, C);
      s(F), I = F.shouldStopPropagation;
    }
    if (a && a(!1), y(!1), n && L && !f) {
      let F = new xl("press", j, C);
      n(F), I && (I = F.shouldStopPropagation);
    }
    return T.isTriggeringEvent = !1, I;
  }, [
    f,
    s,
    a,
    n
  ]), Q = cu(W), Y = O.useCallback((C, j) => {
    let L = _.current;
    if (f) return !1;
    if (c) {
      L.isTriggeringEvent = !0;
      let T = new xl("pressup", j, C);
      return c(T), L.isTriggeringEvent = !1, T.shouldStopPropagation;
    }
    return !0;
  }, [
    f,
    c
  ]), K = cu(Y), X = O.useCallback((C) => {
    let j = _.current;
    if (j.isPressed && j.target) {
      j.didFirePressStart && j.pointerType != null && W($n(j.target, C), j.pointerType, !1), j.isPressed = !1, j.isOverTarget = !1, j.activePointerId = null, j.pointerType = null, z(), b || wg(j.target);
      for (let L of j.disposables) L();
      j.disposables = [];
    }
  }, [
    b,
    z,
    W
  ]), ee = cu(X);
  O.useEffect(() => {
    f && _.current.isPressed && ee({
      currentTarget: _.current.target,
      shiftKey: !1,
      ctrlKey: !1,
      metaKey: !1,
      altKey: !1
    });
  }, [
    f
  ]);
  let ie = O.useCallback((C) => {
    v && X(C);
  }, [
    v,
    X
  ]), ae = O.useCallback((C) => {
    f || u == null || u(C);
  }, [
    f,
    u
  ]), S = O.useCallback((C, j) => {
    if (!f && u) {
      let L = new MouseEvent("click", C);
      gv(L, j), u(xd(L));
    }
  }, [
    f,
    u
  ]), R = O.useMemo(() => {
    let C = _.current, j = {
      onKeyDown(T) {
        var I;
        if (uu(T.nativeEvent, T.currentTarget) && nt(T.currentTarget, Ie(T))) {
          Sg(Ie(T), T.key) && T.preventDefault();
          let F = !0;
          !C.isPressed && !T.repeat && (C.target = T.currentTarget, C.isPressed = !0, C.pointerType = "keyboard", F = U(T, "keyboard"));
          let V = T.currentTarget, $ = (D) => {
            uu(D, V) && !D.repeat && nt(V, Ie(D)) && C.target && K($n(C.target, D), "keyboard");
          };
          A(it(T.currentTarget), "keyup", Ul($, L), !0), F && T.stopPropagation(), T.metaKey && In() && ((I = C.metaKeyEvents) == null || I.set(T.key, T.nativeEvent));
        } else T.key === "Meta" && (C.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(T) {
        if (!(T && !nt(T.currentTarget, Ie(T))) && T && T.button === 0 && !C.isTriggeringEvent && !dn.isOpening) {
          let I = !0;
          if (f && T.preventDefault(), !C.ignoreEmulatedMouseEvents && !C.isPressed && (C.pointerType === "virtual" || bv(T.nativeEvent))) {
            let F = U(T, "virtual"), V = K(T, "virtual"), $ = Q(T, "virtual");
            ae(T), I = F && V && $;
          } else if (C.isPressed && C.pointerType !== "keyboard") {
            let F = C.pointerType || T.nativeEvent.pointerType || "virtual", V = K($n(T.currentTarget, T), F), $ = Q($n(T.currentTarget, T), F, !0);
            I = V && $, C.isOverTarget = !1, ae(T), ee(T);
          }
          C.ignoreEmulatedMouseEvents = !1, I && T.stopPropagation();
        }
      }
    }, L = (T) => {
      var I, F, V;
      if (C.isPressed && C.target && uu(T, C.target)) {
        Sg(Ie(T), T.key) && T.preventDefault();
        let $ = Ie(T), D = nt(C.target, $);
        Q($n(C.target, T), "keyboard", D), D && S(T, C.target), z(), T.key !== "Enter" && Sd(C.target) && nt(C.target, $) && !T[kg] && (T[kg] = !0, dn(C.target, T, !1)), C.isPressed = !1, (I = C.metaKeyEvents) == null || I.delete(T.key);
      } else if (T.key === "Meta" && ((F = C.metaKeyEvents) != null && F.size)) {
        let $ = C.metaKeyEvents;
        C.metaKeyEvents = void 0;
        for (let D of $.values()) (V = C.target) == null || V.dispatchEvent(new KeyboardEvent("keyup", D));
      }
    };
    if (typeof PointerEvent < "u") {
      j.onPointerDown = (F) => {
        if (F.button !== 0 || !nt(F.currentTarget, Ie(F))) return;
        if (H1(F.nativeEvent)) {
          C.pointerType = "virtual";
          return;
        }
        C.pointerType = F.pointerType;
        let V = !0;
        if (!C.isPressed) {
          C.isPressed = !0, C.isOverTarget = !0, C.activePointerId = F.pointerId, C.target = F.currentTarget, b || Cx(C.target), V = U(F, C.pointerType);
          let $ = Ie(F);
          "releasePointerCapture" in $ && ("hasPointerCapture" in $ ? $.hasPointerCapture(F.pointerId) && $.releasePointerCapture(F.pointerId) : $.releasePointerCapture(F.pointerId)), A(it(F.currentTarget), "pointerup", T, !1), A(it(F.currentTarget), "pointercancel", I, !1);
        }
        V && F.stopPropagation();
      }, j.onMouseDown = (F) => {
        if (nt(F.currentTarget, Ie(F)) && F.button === 0) {
          if (p) {
            let V = V1(F.target);
            V && C.disposables.push(V);
          }
          F.stopPropagation();
        }
      }, j.onPointerUp = (F) => {
        !nt(F.currentTarget, Ie(F)) || C.pointerType === "virtual" || F.button === 0 && !C.isPressed && K(F, C.pointerType || F.pointerType);
      }, j.onPointerEnter = (F) => {
        F.pointerId === C.activePointerId && C.target && !C.isOverTarget && C.pointerType != null && (C.isOverTarget = !0, U($n(C.target, F), C.pointerType));
      }, j.onPointerLeave = (F) => {
        F.pointerId === C.activePointerId && C.target && C.isOverTarget && C.pointerType != null && (C.isOverTarget = !1, Q($n(C.target, F), C.pointerType, !1), ie(F));
      };
      let T = (F) => {
        if (F.pointerId === C.activePointerId && C.isPressed && F.button === 0 && C.target) {
          if (nt(C.target, Ie(F)) && C.pointerType != null) {
            let V = !1, $ = setTimeout(() => {
              C.isPressed && C.target instanceof HTMLElement && (V ? ee(F) : (ka(C.target), C.target.click()));
            }, 80);
            A(F.currentTarget, "click", () => V = !0, !0), C.disposables.push(() => clearTimeout($));
          } else ee(F);
          C.isOverTarget = !1;
        }
      }, I = (F) => {
        ee(F);
      };
      j.onDragStart = (F) => {
        nt(F.currentTarget, Ie(F)) && ee(F);
      };
    }
    return j;
  }, [
    A,
    f,
    p,
    z,
    b,
    ie,
    U,
    ae,
    S
  ]);
  return O.useEffect(() => {
    if (!h) return;
    const C = it(h.current);
    if (!C || !C.head || C.getElementById(_g)) return;
    const j = C.createElement("style");
    j.id = _g;
    let L = $x(C);
    L && (j.nonce = L), j.textContent = `
@layer {
  [${Eg}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), C.head.prepend(j);
  }, [
    h
  ]), O.useEffect(() => {
    let C = _.current;
    return () => {
      b || wg(C.target ?? void 0);
      for (let j of C.disposables) j();
      C.disposables = [];
    };
  }, [
    b
  ]), {
    isPressed: m || k,
    // oxlint-disable-next-line react/react-compiler
    pressProps: Je(w, R, {
      [Eg]: !0
    })
  };
}
function Sd(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function uu(e, n) {
  const { key: a, code: i } = e, s = n, c = s.getAttribute("role");
  return (a === "Enter" || a === " " || a === "Spacebar" || i === "Space") && !(s instanceof Ut(s).HTMLInputElement && !Iv(s, a) || s instanceof Ut(s).HTMLTextAreaElement || s.isContentEditable) && // Links should only trigger with Enter key
  !((c === "link" || !c && Sd(s)) && a !== "Enter");
}
function $n(e, n) {
  let a = n.clientX, i = n.clientY;
  return {
    currentTarget: e,
    shiftKey: n.shiftKey,
    ctrlKey: n.ctrlKey,
    metaKey: n.metaKey,
    altKey: n.altKey,
    clientX: a,
    clientY: i,
    key: n.key
  };
}
function Ax(e) {
  return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !Sd(e);
}
function Sg(e, n) {
  return In() && n === "Enter" ? !1 : e instanceof HTMLInputElement ? n === "Enter" && (e.type === "checkbox" || e.type === "radio") ? !1 : !Iv(e, n) : Ax(e);
}
const Fx = /* @__PURE__ */ new Set([
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
function Iv(e, n) {
  return e.type === "checkbox" || e.type === "radio" ? n === " " : Fx.has(e.type);
}
function Cd(e, n) {
  let { elementType: a = "a", onPress: i, onPressStart: s, onPressEnd: c, onPressChange: u, onClick: f, isDisabled: m, ...p } = e, v = {};
  a !== "a" && (v = {
    role: "link",
    tabIndex: m ? void 0 : 0
  });
  let { focusableProps: b } = Av(e, n), { pressProps: h, isPressed: w } = Zl({
    onPress: i,
    onPressStart: s,
    onPressEnd: c,
    onPressChange: u,
    onClick: f,
    isDisabled: m,
    ref: n
  }), k = Fv(p, {
    labelable: !0
  }), y = Je(b, h), _ = yv(), A = Y1(e);
  return {
    isPressed: w,
    linkProps: Je(k, A, {
      ...y,
      ...v,
      "aria-disabled": m || void 0,
      "aria-current": e["aria-current"],
      onClick: (z) => {
        var U;
        (U = h.onClick) == null || U.call(h, z), Q1(z, _, e.href, e.routerOptions);
      }
    })
  };
}
function Ca(e, n) {
  let { elementType: a = "button", isDisabled: i, onPress: s, onPressStart: c, onPressEnd: u, onPressUp: f, onPressChange: m, preventFocusOnPress: p, allowFocusWhenDisabled: v, onClick: b, href: h, target: w, rel: k, type: y = "button" } = e, _;
  a === "button" ? _ = {
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
  } : _ = {
    role: "button",
    href: a === "a" && !i ? h : void 0,
    target: a === "a" ? w : void 0,
    type: a === "input" ? y : void 0,
    disabled: a === "input" ? i : void 0,
    "aria-disabled": !i || a === "input" ? void 0 : i,
    rel: a === "a" ? k : void 0
  };
  let { pressProps: A, isPressed: z } = Zl({
    onPressStart: c,
    onPressEnd: u,
    onPressChange: m,
    onPress: s,
    onPressUp: f,
    onClick: b,
    isDisabled: i,
    preventFocusOnPress: p,
    ref: n
  }), { focusableProps: U } = Av(e, n);
  v && (U.tabIndex = i ? -1 : U.tabIndex);
  let W = Je(U, A, Fv(e, {
    labelable: !0
  }));
  return {
    isPressed: z,
    buttonProps: Je(_, W, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      "aria-current": e["aria-current"],
      "aria-disabled": e["aria-disabled"]
    })
  };
}
function Tx(e) {
  let { isDisabled: n, onBlurWithin: a, onFocusWithin: i, onFocusWithinChange: s } = e, c = O.useRef({
    isFocusWithin: !1
  }), { addGlobalListener: u, removeAllGlobalListeners: f } = Nv(), m = O.useCallback((b) => {
    nt(b.currentTarget, Ie(b)) && c.current.isFocusWithin && !nt(b.currentTarget, b.relatedTarget) && (c.current.isFocusWithin = !1, f(), a && a(b), s && s(!1));
  }, [
    a,
    s,
    c,
    f
  ]), p = hv(m), v = O.useCallback((b) => {
    if (!nt(b.currentTarget, Ie(b))) return;
    let h = Ie(b);
    const w = it(h), k = Fr(w);
    if (!c.current.isFocusWithin && k === h) {
      i && i(b), s && s(!0), c.current.isFocusWithin = !0, p(b);
      let y = b.currentTarget;
      u(w, "focus", (_) => {
        let A = Ie(_);
        if (c.current.isFocusWithin && !nt(y, A)) {
          let z = new w.defaultView.FocusEvent("blur", {
            relatedTarget: A
          });
          gv(z, y);
          let U = xd(z);
          m(U);
        }
      }, {
        capture: !0
      });
    }
  }, [
    i,
    s,
    p,
    u,
    m
  ]);
  return n ? {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: v,
      onBlur: m
    }
  };
}
function Nx(e = {}) {
  let { autoFocus: n = !1, isTextInput: a, within: i } = e, s = O.useRef({
    isFocused: !1,
    isFocusVisible: n || Du()
  }), [c, u] = O.useState(!1), [f, m] = O.useState(
    // oxlint-disable-next-line react/react-compiler
    () => s.current.isFocused && s.current.isFocusVisible
  ), p = O.useCallback(() => m(s.current.isFocused && s.current.isFocusVisible), []), v = O.useCallback((w) => {
    s.current.isFocused = w, s.current.isFocusVisible = Du(), u(w), p();
  }, [
    p
  ]);
  nx((w) => {
    s.current.isFocusVisible = w, p();
  }, [
    a,
    c
  ], {
    enabled: c,
    isTextInput: a
  });
  let { focusProps: b } = Sv({
    isDisabled: i,
    onFocusChange: v
  }), { focusWithinProps: h } = Tx({
    isDisabled: !i,
    onFocusWithinChange: v
  });
  return {
    isFocused: c,
    isFocusVisible: f,
    focusProps: i ? h : b
  };
}
function dr(e) {
  let { children: n, focusClass: a, focusRingClass: i } = e, { isFocused: s, isFocusVisible: c, focusProps: u } = Nx(e), f = E.Children.only(n);
  return /* @__PURE__ */ E.cloneElement(f, Je(f.props, {
    ...u,
    className: hd({
      [a || ""]: s,
      [i || ""]: c
    })
  }));
}
const Ix = (e) => G.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: [G.jsx("path", { d: "M13.956 16.5927C14.576 16.7806 15 17.3521 15 18L9 18C9 17.3521 9.424 16.7806 10.044 16.5927L12 16L13.956 16.5927Z" }), G.jsx("path", { d: "M14 7H10L12 10L14 7Z" }), G.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5 3H19V5H18V7.0386C18 7.8723 17.7395 8.68515 17.2549 9.36356L15.3718 12L17.2549 14.6364C17.7395 15.3148 18 16.1277 18 16.9614V19H19V21H5V19H6V16.9614C6 16.1277 6.26049 15.3148 6.74507 14.6364L8.62824 12L6.74507 9.36356C6.26049 8.68515 6 7.8723 6 7.0386V5H5V3ZM8 16.9614V19H16V16.9614C16 16.5445 15.8698 16.1381 15.6275 15.7989L12.914 12L15.6275 8.20108C15.8698 7.86188 16 7.45545 16 7.0386V5H8V7.0386C8 7.45545 8.13025 7.86188 8.37253 8.20108L11.086 12L8.37253 15.7989C8.13025 16.1381 8 16.5445 8 16.9614Z" })] }), Mv = {
  large: "w-8 h-8",
  medium: "w-6 h-6",
  small: "w-5 h-5",
  undefined: "",
  "x-small": "w-4 h-4",
  "xx-small": "w-3.5 h-3.5"
}, Nr = ti({
  base: "inline-flex items-center justify-center p-0 m-0",
  variants: {
    size: Mv
  }
}), er = ti({
  variants: {
    size: Mv
  }
}), tr = ti({
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
}), Lv = ti({
  base: "outline outline-offset-0 outline-interactive-highlight outline-2"
}), Mx = ({ children: e, containerClassName: n, emphasis: a, shape: i, size: s }) => {
  const c = typeof s == "number", u = c ? {
    height: s,
    padding: s / 2,
    width: s
  } : void 0, f = c ? void 0 : s;
  return G.jsx("div", { className: tr({
    class: n,
    emphasis: a,
    shape: i,
    size: f
  }), "data-testid": "@paloma-icons-contained-id", style: u, children: e });
}, zd = ({ "aria-label": e, className: n, color: a, contained: i, containerClassName: s, emphasis: c = "regular", shape: u = "circle", size: f = "medium", svgClassName: m, ...p }) => {
  const v = !e, b = typeof f == "number", h = b ? { height: f, width: f } : void 0, w = b ? void 0 : f, k = i ? Mx : O.Fragment, y = i ? { containerClassName: s, emphasis: c, shape: u, size: f } : {};
  return G.jsx(k, { ...y, children: G.jsx("span", { ...p, className: Nr({ class: n, size: w }), "data-namespace": "@paloma/icons", "data-size": f, id: "hourglass-fill-id", style: { color: a, ...h }, children: G.jsx(Ix, { "aria-hidden": v, "aria-label": e, className: er({ class: m, size: w }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "hourglass-fill-svg-id", style: { fill: Lx, ...h } }) }) });
}, Lx = "currentColor";
var Rx = O.createContext({}), jx = (e, n) => {
  const a = e[n];
  return a || n;
};
function ri(...e) {
  const n = O.useContext(Rx);
  return O.useMemo(() => {
    const a = e.map(
      (i) => jx(n, i)
    );
    return a.length === 1 ? a[0] : a;
  }, [e, n]);
}
function Tl(e, n, a) {
  try {
    const s = E.Children.only(e);
    if (s.type === n)
      return a ? a(s, s == null ? void 0 : s.props) : e;
  } catch {
  }
  return null;
}
var Cg = (e) => e ? !!e.type.toString().match(Ox) : !1, Ox = /"data-namespace":\s?"@paloma\/icons"/i;
function Io(e, n) {
  if (!n)
    return null;
  const a = E.Children.only(n);
  return E.cloneElement(a, { ...e });
}
var Vx = oe({
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
}), Dx = "span", Mo = O.forwardRef(
  ({
    as: e,
    children: n,
    className: a,
    fontWeight: i = "normal",
    showTitle: s = !1,
    size: c,
    truncate: u = !1,
    underline: f = !1,
    variant: m,
    ...p
  }, v) => {
    const b = e ?? Dx, [h, w] = O.useMemo(() => m === "heading" ? [c ?? "large", m] : [c ?? "medium", "body"], [c, m]);
    return /* @__PURE__ */ E.createElement(
      b,
      {
        className: Vx({
          className: a,
          fontWeight: i,
          truncate: u,
          underline: f,
          [w]: h
        }),
        "data-font-weight": i,
        "data-size": h,
        "data-truncate": u,
        "data-underline": f,
        "data-variant": w,
        ref: v,
        title: s ? p.title ?? (u && typeof n == "string" ? n : void 0) : void 0,
        ...p
      },
      n
    );
  }
), du = (e, n = {}) => {
  if (typeof e == "string")
    return /* @__PURE__ */ E.createElement(Mo, { ...n }, e);
  if (Tl(e, Mo)) {
    const a = {
      ...n ?? {},
      ...e.props
    };
    return /* @__PURE__ */ E.createElement(Mo, { ...a });
  }
  if (E.isValidElement(e) && typeof e.type == "string") {
    const a = {};
    e.type === "a" && (a.color = "#0000EE", a.textDecoration = "underline");
    const i = e.props, s = {
      ...a,
      ...n.style,
      ...i.style
    };
    return E.cloneElement(
      e,
      {
        style: s
      }
    );
  }
  return e;
}, $d = {
  "bottom-center": "",
  "bottom-left": "",
  "bottom-right": "",
  "top-center": "",
  "top-left": "",
  "top-right": ""
}, Pd = {
  circle: "",
  square: ""
}, fu = {
  false: "",
  true: ""
}, Rv = {
  avatar: "",
  dot: "",
  icon: "",
  product: "",
  text: ""
}, Bx = {
  negative: "",
  none: "",
  positive: "",
  warning: ""
}, Ux = {
  highlight: "",
  neutral: ""
}, Hx = {
  small: "",
  "x-small": ""
}, Wx = oe({
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
    position: $d,
    shape: Pd,
    standalone: {
      false: "@paloma-badge-rotation-relative absolute"
    }
  }
}), qx = oe({
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
    position: $d,
    shape: Pd,
    standalone: {
      false: "@paloma-badge-position-relative absolute z-10"
    },
    variant: Rv
  }
}), Gx = oe({
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
    position: $d,
    shape: Pd,
    standalone: {
      false: "max-w-[80px]",
      true: ""
    }
  }
}), Kx = oe({
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
    appearance: Ux,
    emphasis: {
      bold: "@paloma-badge-content-bold text-content-inverse-bold",
      subtle: "@paloma-badge-content-subtle text-content-neutral-bold"
    },
    hasIcon: fu,
    hasProductLogo: fu,
    isLabelSingleCharacter: fu,
    size: Hx,
    status: Bx,
    variant: Rv
  }
}), Yx = oe({
  base: "@paloma-badge-container relative w-fit"
}), Qx = ({
  appearance: e = "neutral",
  "aria-label": n,
  avatar: a,
  children: i,
  className: s,
  containerClassName: c,
  cutoutBorder: u = !0,
  cutoutColor: f,
  emphasis: m = "subtle",
  icon: p,
  label: v,
  position: b,
  productLogo: h,
  shape: w = "square",
  size: k = "small",
  standalone: y = !1,
  status: _ = "none",
  variant: A,
  ...z
}) => {
  A || (A = v ? "text" : p ?? a ?? h ? "icon" : "dot"), (A === "avatar" || A === "product") && (A = "icon");
  const U = () => {
    if (v)
      return /* @__PURE__ */ E.createElement(
        Mo,
        {
          "data-testid": "@paloma-badge-label-id",
          size: k,
          truncate: !0,
          variant: "body"
        },
        v
      );
  }, W = () => {
    if (p)
      return Io(
        {
          "data-testid": "@paloma-badge-icon-id",
          size: "small"
        },
        p
      );
  }, Q = () => {
    if (a)
      return E.cloneElement(a, {
        ...a.props,
        "aria-label": a.props["aria-label"] ?? n ?? v,
        badge: void 0,
        size: k === "small" ? "x-small" : "xx-small"
      });
  }, Y = () => {
    if (h)
      return E.cloneElement(
        h,
        {
          ...h.props,
          contained: !0,
          size: k === "small" ? "x-small" : "2x-small"
        }
      );
  }, K = () => {
    if (A !== "dot")
      return /* @__PURE__ */ E.createElement(E.Fragment, null, W(), U(), Q(), Y());
  }, X = b == null ? void 0 : b.split("-"), ee = !!(v && v.length === 1), ie = ee && !p, ae = (S) => /* @__PURE__ */ E.createElement(
    "div",
    {
      className: Wx({
        class: y ? c : "",
        position: b,
        shape: w,
        standalone: y
      }),
      "data-appearance": e,
      "data-content-single-element": ie,
      "data-cutout-border": u,
      "data-emphasis": m,
      "data-shape": w,
      "data-size": k,
      "data-status": _,
      "data-testid": "@paloma-badge-rotation-id",
      "data-variant": A,
      ...y ? S : {}
    },
    /* @__PURE__ */ E.createElement(
      "div",
      {
        className: qx({
          position: b,
          shape: w,
          standalone: y,
          variant: A
        }),
        "data-position-x": X == null ? void 0 : X[1],
        "data-position-y": X == null ? void 0 : X[0],
        "data-shape": w,
        "data-testid": "@paloma-badge-position-id"
      },
      /* @__PURE__ */ E.createElement(
        "div",
        {
          className: Gx({
            cutoutBorder: u,
            hasProductLogo: !!h,
            position: b,
            shape: w,
            standalone: y
          }),
          "data-testid": "@paloma-badge-border-id",
          style: f ? { borderColor: f } : void 0
        },
        /* @__PURE__ */ E.createElement(
          "div",
          {
            "aria-label": n,
            className: Kx({
              appearance: e,
              class: s,
              emphasis: m,
              hasIcon: !!p,
              hasProductLogo: !!h,
              isLabelSingleCharacter: ee,
              size: k,
              status: _,
              variant: A
            }),
            "data-testid": "@paloma-badge-content-id",
            role: A !== "dot" ? "status" : void 0
          },
          K()
        )
      )
    )
  );
  return y ? /* @__PURE__ */ E.createElement(ae, { ...z }) : /* @__PURE__ */ E.createElement(
    "div",
    {
      className: Yx({ class: c }),
      "data-testid": "@paloma-badge-container-id",
      ...z
    },
    i,
    /* @__PURE__ */ E.createElement(ae, null)
  );
}, Xx = [
  /* Uses a dummy class because FocusRing is a functional component that just adds
      the class to the content.
  
      The cn or other style functions on the FocusRing are always called, so we can't
      listen to them to test functionality */
  "@paloma-focus-ring",
  "outline",
  "outline-2",
  "outline-offset-2",
  "outline-interactive-highlight"
], jv = ({
  children: e,
  disabled: n,
  focusRingClass: a,
  ...i
}) => n ? e : /* @__PURE__ */ E.createElement(dr, { focusRingClass: Bt(Xx, a), ...i }, e), Zx = oe({
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
}), zg = ({
  children: e,
  showTitle: n,
  size: a
}) => /* @__PURE__ */ E.createElement(
  Mo,
  {
    fontWeight: "bold",
    showTitle: n,
    size: a,
    truncate: !0,
    variant: "body"
  },
  e
), kl = O.forwardRef(
  ({
    "aria-label": e,
    as: n,
    children: a,
    className: i,
    disabled: s,
    hideButton: c,
    iconOnly: u,
    isLoading: f,
    leadingIcon: m,
    loadingIcon: p,
    loadingLabel: v = "Loading",
    onBlur: b,
    onClick: h,
    onFocus: w,
    onPress: k,
    showTitle: y,
    size: _ = "medium",
    trailingIcon: A,
    type: z = "button",
    variant: U = "primary",
    ...W
  }, Q) => {
    const Y = n ?? "button", K = n === "div" || n === "span", X = n === "a", ee = O.useRef(null);
    lt(
      !(u && !e && !K),
      "Button with iconOnly must have an aria-label for accessibility. If Button is purely decorative and does not convey any meaning or action, it should have aria-hidden='true' to be ignored by assistive technologies."
    );
    const { buttonProps: ie } = Ca(
      {
        elementType: Y,
        isDisabled: !!s,
        onBlur: b,
        onFocus: w,
        onPress: f ? void 0 : (R) => {
          k ? k(R) : h == null || h(R);
        }
      },
      ee
    ), ae = K ? W : Je(ie, W), S = /* @__PURE__ */ E.createElement(E.Fragment, null, p ?? Io(
      { className: "animate-loading-hourglass", size: _ },
      /* @__PURE__ */ E.createElement(zd, null)
    ), !u && /* @__PURE__ */ E.createElement(zg, { size: _ }, v));
    return /* @__PURE__ */ E.createElement(jv, null, O.createElement(
      Y,
      {
        "aria-label": f ? v : e,
        className: Zx({
          class: i,
          hideButton: c,
          iconOnly: u,
          isDecorative: K,
          isLoading: f,
          size: _,
          variant: U
        }),
        /* Add this to test uses of Button on other components */
        "data-size": Se(_),
        /* Add this to test uses of Button on other components */
        "data-variant": Se(U),
        ref: Tr(ee, Q),
        ...ae,
        "aria-busy": f ? !0 : void 0,
        "aria-disabled": !!s || !!f || void 0,
        // react-aria adds role="button" for non-button elements; strip it for links
        ...X && { role: void 0 },
        type: X || K ? void 0 : f && (z === "submit" || z === "reset") ? "button" : z
      },
      f ? S : /* @__PURE__ */ E.createElement(E.Fragment, null, Io(
        {
          size: m != null && m.props.size ? m.props.size : _
        },
        m
      ), !u && /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(zg, { showTitle: y, size: _ }, a), Io(
        {
          size: A != null && A.props.size ? A.props.size : _
        },
        A
      )))
    ));
  }
), Jx = oe({
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
}), e2 = oe({
  base: "object-cover",
  extend: Jx,
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
}), t2 = ({
  alt: e,
  as: n,
  className: a,
  loading: i,
  ratio: s,
  size: c,
  sizes: u,
  src: f,
  srcSet: m,
  style: p,
  ...v
}) => {
  const b = ri("img"), h = n ?? b;
  lt(
    typeof e == "string",
    "@paloma/Image requires an alt prop to be passed. Use an empty string (alt='') for decorative images or provide descriptive text for informative images."
  ), lt(
    !(m && !u),
    "Image: srcSet was provided without sizes. This may lead to unexpected behavior."
  );
  const w = { height: c, width: c };
  return /* @__PURE__ */ E.createElement(
    h,
    {
      alt: e,
      className: e2({
        class: a,
        ratio: s,
        size: typeof c == "string" ? c : void 0
      }),
      loading: i,
      sizes: u,
      src: f,
      srcSet: m,
      style: { ...w, ...p },
      ...v
    }
  );
}, r2 = oe({
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
}), n2 = "h-full w-full", $g = O.forwardRef(
  ({
    alt: e,
    as: n,
    children: a,
    className: i,
    contained: s,
    size: c = "medium",
    src: u,
    style: f,
    ...m
  }, p) => {
    const v = n ?? "div", h = { ...{
      height: c,
      ...s ? { width: c } : {}
    }, ...f }, w = typeof c == "number" ? void 0 : c;
    return lt(
      !a || !u && !e,
      "ProductLogo with children should not receive src nor alt"
    ), lt(
      a !== void 0 || u !== void 0 && e !== void 0,
      "ProductLogo without children should have both src and alt"
    ), /* @__PURE__ */ E.createElement(jv, null, /* @__PURE__ */ E.createElement(
      v,
      {
        className: r2({
          class: i,
          contained: s,
          size: w
        }),
        ref: p,
        style: h,
        ...m
      },
      a ? O.cloneElement(a, {
        className: Bt(a.props.className, n2)
      }) : /* @__PURE__ */ E.createElement(
        t2,
        {
          alt: e,
          className: "h-full w-auto rounded-none",
          "data-testid": "img",
          src: u
        }
      )
    ));
  }
), Pg = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, _t = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, a2 = (e, n) => JSON.stringify(e) === JSON.stringify(n);
function Ov(e, n) {
  e.forEach(function(a) {
    Array.isArray(a) ? Ov(a, n) : n.push(a);
  });
}
function Vv(e) {
  let n = [];
  return Ov(e, n), n;
}
var Dv = (...e) => Vv(e).filter(Boolean), Bv = (e, n) => {
  let a = {}, i = Object.keys(e), s = Object.keys(n);
  for (let c of i)
    if (s.includes(c)) {
      let u = e[c], f = n[c];
      typeof u == "object" && typeof f == "object" ? a[c] = Bv(u, f) : Array.isArray(u) || Array.isArray(f) ? a[c] = Dv(f, u) : a[c] = f + " " + u;
    } else
      a[c] = e[c];
  for (let c of s)
    i.includes(c) || (a[c] = n[c]);
  return a;
}, Ag = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim(), Ad = "-";
function o2(e) {
  const n = l2(e), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: i
  } = e;
  function s(u) {
    const f = u.split(Ad);
    return f[0] === "" && f.length !== 1 && f.shift(), Uv(f, n) || i2(u);
  }
  function c(u, f) {
    const m = a[u] || [];
    return f && i[u] ? [...m, ...i[u]] : m;
  }
  return {
    getClassGroupId: s,
    getConflictingClassGroupIds: c
  };
}
function Uv(e, n) {
  var u;
  if (e.length === 0)
    return n.classGroupId;
  const a = e[0], i = n.nextPart.get(a), s = i ? Uv(e.slice(1), i) : void 0;
  if (s)
    return s;
  if (n.validators.length === 0)
    return;
  const c = e.join(Ad);
  return (u = n.validators.find(({
    validator: f
  }) => f(c))) == null ? void 0 : u.classGroupId;
}
var Fg = /^\[(.+)\]$/;
function i2(e) {
  if (Fg.test(e)) {
    const n = Fg.exec(e)[1], a = n == null ? void 0 : n.substring(0, n.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}
function l2(e) {
  const {
    theme: n,
    prefix: a
  } = e, i = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return c2(Object.entries(e.classGroups), a).forEach(([c, u]) => {
    Wu(u, i, c, n);
  }), i;
}
function Wu(e, n, a, i) {
  e.forEach((s) => {
    if (typeof s == "string") {
      const c = s === "" ? n : Tg(n, s);
      c.classGroupId = a;
      return;
    }
    if (typeof s == "function") {
      if (s2(s)) {
        Wu(s(i), n, a, i);
        return;
      }
      n.validators.push({
        validator: s,
        classGroupId: a
      });
      return;
    }
    Object.entries(s).forEach(([c, u]) => {
      Wu(u, Tg(n, c), a, i);
    });
  });
}
function Tg(e, n) {
  let a = e;
  return n.split(Ad).forEach((i) => {
    a.nextPart.has(i) || a.nextPart.set(i, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(i);
  }), a;
}
function s2(e) {
  return e.isThemeGetter;
}
function c2(e, n) {
  return n ? e.map(([a, i]) => {
    const s = i.map((c) => typeof c == "string" ? n + c : typeof c == "object" ? Object.fromEntries(Object.entries(c).map(([u, f]) => [n + u, f])) : c);
    return [a, s];
  }) : e;
}
function u2(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, a = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  function s(c, u) {
    a.set(c, u), n++, n > e && (n = 0, i = a, a = /* @__PURE__ */ new Map());
  }
  return {
    get(c) {
      let u = a.get(c);
      if (u !== void 0)
        return u;
      if ((u = i.get(c)) !== void 0)
        return s(c, u), u;
    },
    set(c, u) {
      a.has(c) ? a.set(c, u) : s(c, u);
    }
  };
}
var Hv = "!";
function d2(e) {
  const n = e.separator, a = n.length === 1, i = n[0], s = n.length;
  return function(u) {
    const f = [];
    let m = 0, p = 0, v;
    for (let y = 0; y < u.length; y++) {
      let _ = u[y];
      if (m === 0) {
        if (_ === i && (a || u.slice(y, y + s) === n)) {
          f.push(u.slice(p, y)), p = y + s;
          continue;
        }
        if (_ === "/") {
          v = y;
          continue;
        }
      }
      _ === "[" ? m++ : _ === "]" && m--;
    }
    const b = f.length === 0 ? u : u.substring(p), h = b.startsWith(Hv), w = h ? b.substring(1) : b, k = v && v > p ? v - p : void 0;
    return {
      modifiers: f,
      hasImportantModifier: h,
      baseClassName: w,
      maybePostfixModifierPosition: k
    };
  };
}
function f2(e) {
  if (e.length <= 1)
    return e;
  const n = [];
  let a = [];
  return e.forEach((i) => {
    i[0] === "[" ? (n.push(...a.sort(), i), a = []) : a.push(i);
  }), n.push(...a.sort()), n;
}
function p2(e) {
  return {
    cache: u2(e.cacheSize),
    splitModifiers: d2(e),
    ...o2(e)
  };
}
var m2 = /\s+/;
function g2(e, n) {
  const {
    splitModifiers: a,
    getClassGroupId: i,
    getConflictingClassGroupIds: s
  } = n, c = /* @__PURE__ */ new Set();
  return e.trim().split(m2).map((u) => {
    const {
      modifiers: f,
      hasImportantModifier: m,
      baseClassName: p,
      maybePostfixModifierPosition: v
    } = a(u);
    let b = i(v ? p.substring(0, v) : p), h = !!v;
    if (!b) {
      if (!v)
        return {
          isTailwindClass: !1,
          originalClassName: u
        };
      if (b = i(p), !b)
        return {
          isTailwindClass: !1,
          originalClassName: u
        };
      h = !1;
    }
    const w = f2(f).join(":");
    return {
      isTailwindClass: !0,
      modifierId: m ? w + Hv : w,
      classGroupId: b,
      originalClassName: u,
      hasPostfixModifier: h
    };
  }).reverse().filter((u) => {
    if (!u.isTailwindClass)
      return !0;
    const {
      modifierId: f,
      classGroupId: m,
      hasPostfixModifier: p
    } = u, v = f + m;
    return c.has(v) ? !1 : (c.add(v), s(m, p).forEach((b) => c.add(f + b)), !0);
  }).reverse().map((u) => u.originalClassName).join(" ");
}
function h2() {
  let e = 0, n, a, i = "";
  for (; e < arguments.length; )
    (n = arguments[e++]) && (a = Wv(n)) && (i && (i += " "), i += a);
  return i;
}
function Wv(e) {
  if (typeof e == "string")
    return e;
  let n, a = "";
  for (let i = 0; i < e.length; i++)
    e[i] && (n = Wv(e[i])) && (a && (a += " "), a += n);
  return a;
}
function qu(e, ...n) {
  let a, i, s, c = u;
  function u(m) {
    const p = n.reduce((v, b) => b(v), e());
    return a = p2(p), i = a.cache.get, s = a.cache.set, c = f, f(m);
  }
  function f(m) {
    const p = i(m);
    if (p)
      return p;
    const v = g2(m, a);
    return s(m, v), v;
  }
  return function() {
    return c(h2.apply(null, arguments));
  };
}
function Ve(e) {
  const n = (a) => a[e] || [];
  return n.isThemeGetter = !0, n;
}
var qv = /^\[(?:([a-z-]+):)?(.+)\]$/i, v2 = /^\d+\/\d+$/, b2 = /* @__PURE__ */ new Set(["px", "full", "screen"]), y2 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, w2 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, x2 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, k2 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, _2 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function wr(e) {
  return An(e) || b2.has(e) || v2.test(e);
}
function Jr(e) {
  return za(e, "length", F2);
}
function An(e) {
  return !!e && !Number.isNaN(Number(e));
}
function _l(e) {
  return za(e, "number", An);
}
function yo(e) {
  return !!e && Number.isInteger(Number(e));
}
function E2(e) {
  return e.endsWith("%") && An(e.slice(0, -1));
}
function ke(e) {
  return qv.test(e);
}
function en(e) {
  return y2.test(e);
}
var S2 = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function C2(e) {
  return za(e, S2, Gv);
}
function z2(e) {
  return za(e, "position", Gv);
}
var $2 = /* @__PURE__ */ new Set(["image", "url"]);
function P2(e) {
  return za(e, $2, N2);
}
function A2(e) {
  return za(e, "", T2);
}
function wo() {
  return !0;
}
function za(e, n, a) {
  const i = qv.exec(e);
  return i ? i[1] ? typeof n == "string" ? i[1] === n : n.has(i[1]) : a(i[2]) : !1;
}
function F2(e) {
  return w2.test(e) && !x2.test(e);
}
function Gv() {
  return !1;
}
function T2(e) {
  return k2.test(e);
}
function N2(e) {
  return _2.test(e);
}
function Gu() {
  const e = Ve("colors"), n = Ve("spacing"), a = Ve("blur"), i = Ve("brightness"), s = Ve("borderColor"), c = Ve("borderRadius"), u = Ve("borderSpacing"), f = Ve("borderWidth"), m = Ve("contrast"), p = Ve("grayscale"), v = Ve("hueRotate"), b = Ve("invert"), h = Ve("gap"), w = Ve("gradientColorStops"), k = Ve("gradientColorStopPositions"), y = Ve("inset"), _ = Ve("margin"), A = Ve("opacity"), z = Ve("padding"), U = Ve("saturate"), W = Ve("scale"), Q = Ve("sepia"), Y = Ve("skew"), K = Ve("space"), X = Ve("translate"), ee = () => ["auto", "contain", "none"], ie = () => ["auto", "hidden", "clip", "visible", "scroll"], ae = () => ["auto", ke, n], S = () => [ke, n], R = () => ["", wr, Jr], C = () => ["auto", An, ke], j = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], L = () => ["solid", "dashed", "dotted", "double", "none"], T = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], I = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], F = () => ["", "0", ke], V = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], $ = () => [An, _l], D = () => [An, ke];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [wo],
      spacing: [wr, Jr],
      blur: ["none", "", en, ke],
      brightness: $(),
      borderColor: [e],
      borderRadius: ["none", "", "full", en, ke],
      borderSpacing: S(),
      borderWidth: R(),
      contrast: $(),
      grayscale: F(),
      hueRotate: D(),
      invert: F(),
      gap: S(),
      gradientColorStops: [e],
      gradientColorStopPositions: [E2, Jr],
      inset: ae(),
      margin: ae(),
      opacity: $(),
      padding: S(),
      saturate: $(),
      scale: $(),
      sepia: F(),
      skew: D(),
      space: S(),
      translate: S()
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
        columns: [en]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": V()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": V()
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
        object: [...j(), ke]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ie()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ie()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ie()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: ee()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": ee()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": ee()
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
        z: ["auto", yo, ke]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: ae()
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
        grow: F()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: F()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", yo, ke]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [wo]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", yo, ke]
        }, ke]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": C()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": C()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [wo]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [yo, ke]
        }, ke]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": C()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": C()
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
        justify: ["normal", ...I()]
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
        content: ["normal", ...I(), "baseline"]
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
        "place-content": [...I(), "baseline"]
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
        p: [z]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [z]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [z]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [z]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [z]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [z]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [z]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [z]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [z]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [_]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [_]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [_]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [_]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [_]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [_]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [_]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [_]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [_]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [K]
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
        "space-y": [K]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ke, n]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ke, n, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ke, n, "none", "full", "min", "max", "fit", "prose", {
          screen: [en]
        }, en]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ke, n, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ke, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ke, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ke, n, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", en, Jr]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", _l]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [wo]
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
        "line-clamp": ["none", An, _l]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", wr, ke]
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
        "placeholder-opacity": [A]
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
        "text-opacity": [A]
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
        decoration: [...L(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", wr, Jr]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", wr, ke]
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
        indent: S()
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
        "bg-opacity": [A]
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
        bg: [...j(), z2]
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
        bg: ["auto", "cover", "contain", C2]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, P2]
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
        border: [f]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [f]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [f]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [f]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [f]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [f]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [f]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [f]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [f]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [A]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...L(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [f]
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
        "divide-y": [f]
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
        "divide-opacity": [A]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: L()
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
        outline: ["", ...L()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [wr, ke]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [wr, Jr]
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
        ring: R()
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
        "ring-opacity": [A]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [wr, Jr]
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
        shadow: ["", "inner", "none", en, A2]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [wo]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [A]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...T(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": T()
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
        blur: [a]
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
        contrast: [m]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", en, ke]
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
        "hue-rotate": [v]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [b]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [U]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [Q]
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
        "backdrop-blur": [a]
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
        "backdrop-contrast": [m]
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
        "backdrop-hue-rotate": [v]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [b]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [A]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [U]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [Q]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ke]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: D()
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
        delay: D()
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
        rotate: [yo, ke]
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
        "skew-x": [Y]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [Y]
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
        "scroll-m": S()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": S()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": S()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": S()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": S()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": S()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": S()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": S()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": S()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": S()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": S()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": S()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": S()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": S()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": S()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": S()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": S()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": S()
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
        stroke: [wr, Jr, _l]
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
function I2(e, {
  cacheSize: n,
  prefix: a,
  separator: i,
  extend: s = {},
  override: c = {}
}) {
  Nl(e, "cacheSize", n), Nl(e, "prefix", a), Nl(e, "separator", i);
  for (const u in c)
    M2(e[u], c[u]);
  for (const u in s)
    L2(e[u], s[u]);
  return e;
}
function Nl(e, n, a) {
  a !== void 0 && (e[n] = a);
}
function M2(e, n) {
  if (n)
    for (const a in n)
      Nl(e, a, n[a]);
}
function L2(e, n) {
  if (n)
    for (const a in n) {
      const i = n[a];
      i !== void 0 && (e[a] = (e[a] || []).concat(i));
    }
}
function R2(e, ...n) {
  return typeof e == "function" ? qu(Gu, e, ...n) : qu(() => I2(Gu(), e), ...n);
}
var j2 = /* @__PURE__ */ qu(Gu), O2 = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, Kv = (e) => e || void 0, Uo = (...e) => Kv(Vv(e).filter(Boolean).join(" ")), pu = null, Cr = {}, Ku = !1, xo = (...e) => (n) => n.twMerge ? ((!pu || Ku) && (Ku = !1, pu = _t(Cr) ? j2 : R2({ ...Cr, extend: { theme: Cr.theme, classGroups: Cr.classGroups, conflictingClassGroupModifiers: Cr.conflictingClassGroupModifiers, conflictingClassGroups: Cr.conflictingClassGroups, ...Cr.extend } })), Kv(pu(Uo(e)))) : Uo(e), Ng = (e, n) => {
  for (let a in n)
    e.hasOwnProperty(a) ? e[a] = Uo(e[a], n[a]) : e[a] = n[a];
  return e;
}, Rn = (e, n) => {
  let { extend: a = null, slots: i = {}, variants: s = {}, compoundVariants: c = [], compoundSlots: u = [], defaultVariants: f = {} } = e, m = { ...O2, ...n }, p = a != null && a.base ? Uo(a.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, v = a != null && a.variants && !_t(a.variants) ? Bv(s, a.variants) : s, b = a != null && a.defaultVariants && !_t(a.defaultVariants) ? { ...a.defaultVariants, ...f } : f;
  !_t(m.twMergeConfig) && !a2(m.twMergeConfig, Cr) && (Ku = !0, Cr = m.twMergeConfig);
  let h = _t(a == null ? void 0 : a.slots), w = _t(i) ? {} : { base: Uo(e == null ? void 0 : e.base, h && (a == null ? void 0 : a.base)), ...i }, k = h ? w : Ng({ ...a == null ? void 0 : a.slots }, _t(w) ? { base: e == null ? void 0 : e.base } : w), y = _t(a == null ? void 0 : a.compoundVariants) ? c : Dv(a == null ? void 0 : a.compoundVariants, c), _ = (z) => {
    if (_t(v) && _t(i) && h)
      return xo(p, z == null ? void 0 : z.class, z == null ? void 0 : z.className)(m);
    if (y && !Array.isArray(y))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof y}`);
    if (u && !Array.isArray(u))
      throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof u}`);
    let U = (S, R, C = [], j) => {
      let L = C;
      if (typeof R == "string")
        L = L.concat(Ag(R).split(" ").map((T) => `${S}:${T}`));
      else if (Array.isArray(R))
        L = L.concat(R.reduce((T, I) => T.concat(`${S}:${I}`), []));
      else if (typeof R == "object" && typeof j == "string") {
        for (let T in R)
          if (R.hasOwnProperty(T) && T === j) {
            let I = R[T];
            if (I && typeof I == "string") {
              let F = Ag(I);
              L[j] ? L[j] = L[j].concat(F.split(" ").map((V) => `${S}:${V}`)) : L[j] = F.split(" ").map((V) => `${S}:${V}`);
            } else
              Array.isArray(I) && I.length > 0 && (L[j] = I.reduce((F, V) => F.concat(`${S}:${V}`), []));
          }
      }
      return L;
    }, W = (S, R = v, C = null, j = null) => {
      var L;
      let T = R[S];
      if (!T || _t(T))
        return null;
      let I = (L = j == null ? void 0 : j[S]) != null ? L : z == null ? void 0 : z[S];
      if (I === null)
        return null;
      let F = Pg(I), V = Array.isArray(m.responsiveVariants) && m.responsiveVariants.length > 0 || m.responsiveVariants === !0, $ = b == null ? void 0 : b[S], D = [];
      if (typeof F == "object" && V)
        for (let [ve, ye] of Object.entries(F)) {
          let ze = T[ye];
          if (ve === "initial") {
            $ = ye;
            continue;
          }
          Array.isArray(m.responsiveVariants) && !m.responsiveVariants.includes(ve) || (D = U(ve, ze, D, C));
        }
      let me = F != null && typeof F != "object" ? F : Pg($), fe = T[me || "false"];
      return typeof D == "object" && typeof C == "string" && D[C] ? Ng(D, fe) : D.length > 0 ? (D.push(fe), D) : fe;
    }, Q = () => v ? Object.keys(v).map((S) => W(S, v)) : null, Y = (S, R) => {
      if (!v || typeof v != "object")
        return null;
      let C = new Array();
      for (let j in v) {
        let L = W(j, v, S, R), T = S === "base" && typeof L == "string" ? L : L && L[S];
        T && (C[C.length] = T);
      }
      return C;
    }, K = {};
    for (let S in z)
      z[S] !== void 0 && (K[S] = z[S]);
    let X = (S, R) => {
      var C;
      let j = typeof (z == null ? void 0 : z[S]) == "object" ? { [S]: (C = z[S]) == null ? void 0 : C.initial } : {};
      return { ...b, ...K, ...j, ...R };
    }, ee = (S = [], R) => {
      let C = [];
      for (let { class: j, className: L, ...T } of S) {
        let I = !0;
        for (let [F, V] of Object.entries(T)) {
          let $ = X(F, R);
          if (Array.isArray(V)) {
            if (!V.includes($[F])) {
              I = !1;
              break;
            }
          } else if ($[F] !== V) {
            I = !1;
            break;
          }
        }
        I && (j && C.push(j), L && C.push(L));
      }
      return C;
    }, ie = (S) => {
      let R = ee(y, S);
      if (!Array.isArray(R))
        return R;
      let C = {};
      for (let j of R)
        if (typeof j == "string" && (C.base = xo(C.base, j)(m)), typeof j == "object")
          for (let [L, T] of Object.entries(j))
            C[L] = xo(C[L], T)(m);
      return C;
    }, ae = (S) => {
      if (u.length < 1)
        return null;
      let R = {};
      for (let { slots: C = [], class: j, className: L, ...T } of u) {
        if (!_t(T)) {
          let I = !0;
          for (let F of Object.keys(T)) {
            let V = X(F, S)[F];
            if (V === void 0 || (Array.isArray(T[F]) ? !T[F].includes(V) : T[F] !== V)) {
              I = !1;
              break;
            }
          }
          if (!I)
            continue;
        }
        for (let I of C)
          R[I] = R[I] || [], R[I].push([j, L]);
      }
      return R;
    };
    if (!_t(i) || !h) {
      let S = {};
      if (typeof k == "object" && !_t(k))
        for (let R of Object.keys(k))
          S[R] = (C) => {
            var j, L;
            return xo(k[R], Y(R, C), ((j = ie(C)) != null ? j : [])[R], ((L = ae(C)) != null ? L : [])[R], C == null ? void 0 : C.class, C == null ? void 0 : C.className)(m);
          };
      return S;
    }
    return xo(p, Q(), ee(y), z == null ? void 0 : z.class, z == null ? void 0 : z.className)(m);
  }, A = () => {
    if (!(!v || typeof v != "object"))
      return Object.keys(v);
  };
  return _.variantKeys = A(), _.extend = a, _.base = p, _.slots = k, _.variants = v, _.defaultVariants = b, _.compoundSlots = u, _.compoundVariants = y, _;
}, V2 = Rn({
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
}), D2 = Rn({
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
}), B2 = Rn({
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
}), U2 = Rn({
  base: "flex flex-row gap-4",
  variants: {
    orientation: {
      horizontal: "",
      vertical: "justify-between w-full max-md:justify-between max-md:w-full"
    }
  }
}), H2 = Rn({
  base: "flex align-start justify-start text-content-neutral-bold"
}), W2 = Rn({
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
}), q2 = Rn({
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
}), G2 = ({
  badge: e,
  body: n,
  className: a,
  emphasis: i = "regular",
  leadingContent: s,
  meta: c,
  orientation: u = "horizontal",
  primaryAction: f,
  secondaryAction: m,
  status: p = "none",
  title: v,
  ...b
}) => (O.useEffect(() => {
  lt(
    !s || s.type == $g || Cg(s),
    "The leading content must be a ProductLogo or @paloma/icons component."
  ), lt(
    !e || v !== void 0,
    "The badge will not display without a title."
  ), lt(
    (!f || f.type === kl) && (!m || m.type === kl),
    "The primary and secondary actions must be Buttons."
  );
}, [e, s, f, m, v]), /* @__PURE__ */ E.createElement(
  "div",
  {
    className: V2({
      className: a,
      emphasis: i,
      leadingContent: !!s,
      orientation: u,
      status: p
    }),
    "data-emphasis": i,
    "data-orientation": u,
    "data-status": p,
    ...b
  },
  s && /* @__PURE__ */ E.createElement(
    "div",
    {
      className: D2({ orientation: u, status: p }),
      "data-testid": "@paloma-alert-leading-content-id"
    },
    Tl(
      s,
      $g,
      (h, w) => E.cloneElement(h, {
        ...w,
        as: "div",
        contained: !0,
        size: "x-small"
      })
    ) ?? (Cg(s) && Io(
      { className: v ? "my-1" : "", size: "medium" },
      s
    ))
  ),
  /* @__PURE__ */ E.createElement(
    "div",
    {
      className: B2({
        leadingContent: !!s,
        orientation: u
      }),
      "data-testid": "@paloma-alert-content-id"
    },
    (v ?? e) && /* @__PURE__ */ E.createElement("div", { className: U2({ orientation: u }) }, v && /* @__PURE__ */ E.createElement(
      "div",
      {
        className: H2(),
        "data-testid": "@paloma-alert-title-id"
      },
      du(v, {
        className: "flex-1",
        fontWeight: "bold",
        size: "large",
        variant: "body"
      })
    ), e && /* @__PURE__ */ E.createElement(
      Qx,
      {
        appearance: "highlight",
        cutoutBorder: !1,
        "data-testid": "@paloma-alert-badge-id",
        emphasis: i === "bold" ? "bold" : "subtle",
        label: e,
        size: "small",
        standalone: !0,
        status: p
      }
    )),
    n && /* @__PURE__ */ E.createElement("div", { className: "text-content-neutral-regular" }, du(n, {})),
    c && /* @__PURE__ */ E.createElement(
      "div",
      {
        className: W2({ status: p }),
        "data-testid": "@paloma-alert-meta-id"
      },
      du(c, {
        size: "x-small"
      })
    )
  ),
  (f ?? m) && /* @__PURE__ */ E.createElement(
    "div",
    {
      className: q2({
        leadingContent: !!s,
        orientation: u
      }),
      "data-testid": "@paloma-alert-actions-id"
    },
    Tl(
      f,
      kl,
      (h, w) => E.cloneElement(h, {
        ...Ig,
        ...w,
        variant: "primary"
      })
    ),
    Tl(
      m,
      kl,
      (h, w) => E.cloneElement(h, {
        ...Ig,
        ...w,
        variant: "secondary"
      })
    )
  )
)), Ig = {
  className: "min-w-0",
  size: "small"
};
function K2(e, n) {
  if (!n)
    return null;
  const a = E.Children.only(n);
  return E.cloneElement(a, { ...e });
}
var Y2 = oe({
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
}), Q2 = "span", X2 = O.forwardRef(
  ({
    as: e,
    children: n,
    className: a,
    fontWeight: i = "normal",
    showTitle: s = !1,
    size: c,
    truncate: u = !1,
    underline: f = !1,
    variant: m,
    ...p
  }, v) => {
    const b = e ?? Q2, [h, w] = O.useMemo(() => m === "heading" ? [c ?? "large", m] : [c ?? "medium", "body"], [c, m]);
    return /* @__PURE__ */ E.createElement(
      b,
      {
        className: Y2({
          className: a,
          fontWeight: i,
          truncate: u,
          underline: f,
          [w]: h
        }),
        "data-font-weight": i,
        "data-size": h,
        "data-truncate": u,
        "data-underline": f,
        "data-variant": w,
        ref: v,
        title: s ? p.title ?? (u && typeof n == "string" ? n : void 0) : void 0,
        ...p
      },
      n
    );
  }
), Fd = {
  "bottom-center": "",
  "bottom-left": "",
  "bottom-right": "",
  "top-center": "",
  "top-left": "",
  "top-right": ""
}, Td = {
  circle: "",
  square: ""
}, mu = {
  false: "",
  true: ""
}, Yv = {
  avatar: "",
  dot: "",
  icon: "",
  product: "",
  text: ""
}, Z2 = {
  negative: "",
  none: "",
  positive: "",
  warning: ""
}, J2 = {
  highlight: "",
  neutral: ""
}, e5 = {
  small: "",
  "x-small": ""
}, t5 = oe({
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
    position: Fd,
    shape: Td,
    standalone: {
      false: "@paloma-badge-rotation-relative absolute"
    }
  }
}), r5 = oe({
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
    position: Fd,
    shape: Td,
    standalone: {
      false: "@paloma-badge-position-relative absolute z-10"
    },
    variant: Yv
  }
}), n5 = oe({
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
    position: Fd,
    shape: Td,
    standalone: {
      false: "max-w-[80px]",
      true: ""
    }
  }
}), a5 = oe({
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
    appearance: J2,
    emphasis: {
      bold: "@paloma-badge-content-bold text-content-inverse-bold",
      subtle: "@paloma-badge-content-subtle text-content-neutral-bold"
    },
    hasIcon: mu,
    hasProductLogo: mu,
    isLabelSingleCharacter: mu,
    size: e5,
    status: Z2,
    variant: Yv
  }
}), o5 = oe({
  base: "@paloma-badge-container relative w-fit"
}), i5 = ({
  appearance: e = "neutral",
  "aria-label": n,
  avatar: a,
  children: i,
  className: s,
  containerClassName: c,
  cutoutBorder: u = !0,
  cutoutColor: f,
  emphasis: m = "subtle",
  icon: p,
  label: v,
  position: b,
  productLogo: h,
  shape: w = "square",
  size: k = "small",
  standalone: y = !1,
  status: _ = "none",
  variant: A,
  ...z
}) => {
  A || (A = v ? "text" : p ?? a ?? h ? "icon" : "dot"), (A === "avatar" || A === "product") && (A = "icon");
  const U = () => {
    if (v)
      return /* @__PURE__ */ E.createElement(
        X2,
        {
          "data-testid": "@paloma-badge-label-id",
          size: k,
          truncate: !0,
          variant: "body"
        },
        v
      );
  }, W = () => {
    if (p)
      return K2(
        {
          "data-testid": "@paloma-badge-icon-id",
          size: "small"
        },
        p
      );
  }, Q = () => {
    if (a)
      return E.cloneElement(a, {
        ...a.props,
        "aria-label": a.props["aria-label"] ?? n ?? v,
        badge: void 0,
        size: k === "small" ? "x-small" : "xx-small"
      });
  }, Y = () => {
    if (h)
      return E.cloneElement(
        h,
        {
          ...h.props,
          contained: !0,
          size: k === "small" ? "x-small" : "2x-small"
        }
      );
  }, K = () => {
    if (A !== "dot")
      return /* @__PURE__ */ E.createElement(E.Fragment, null, W(), U(), Q(), Y());
  }, X = b == null ? void 0 : b.split("-"), ee = !!(v && v.length === 1), ie = ee && !p, ae = (S) => /* @__PURE__ */ E.createElement(
    "div",
    {
      className: t5({
        class: y ? c : "",
        position: b,
        shape: w,
        standalone: y
      }),
      "data-appearance": e,
      "data-content-single-element": ie,
      "data-cutout-border": u,
      "data-emphasis": m,
      "data-shape": w,
      "data-size": k,
      "data-status": _,
      "data-testid": "@paloma-badge-rotation-id",
      "data-variant": A,
      ...y ? S : {}
    },
    /* @__PURE__ */ E.createElement(
      "div",
      {
        className: r5({
          position: b,
          shape: w,
          standalone: y,
          variant: A
        }),
        "data-position-x": X == null ? void 0 : X[1],
        "data-position-y": X == null ? void 0 : X[0],
        "data-shape": w,
        "data-testid": "@paloma-badge-position-id"
      },
      /* @__PURE__ */ E.createElement(
        "div",
        {
          className: n5({
            cutoutBorder: u,
            hasProductLogo: !!h,
            position: b,
            shape: w,
            standalone: y
          }),
          "data-testid": "@paloma-badge-border-id",
          style: f ? { borderColor: f } : void 0
        },
        /* @__PURE__ */ E.createElement(
          "div",
          {
            "aria-label": n,
            className: a5({
              appearance: e,
              class: s,
              emphasis: m,
              hasIcon: !!p,
              hasProductLogo: !!h,
              isLabelSingleCharacter: ee,
              size: k,
              status: _,
              variant: A
            }),
            "data-testid": "@paloma-badge-content-id",
            role: A !== "dot" ? "status" : void 0
          },
          K()
        )
      )
    )
  );
  return y ? /* @__PURE__ */ E.createElement(ae, { ...z }) : /* @__PURE__ */ E.createElement(
    "div",
    {
      className: o5({ class: c }),
      "data-testid": "@paloma-badge-container-id",
      ...z
    },
    i,
    /* @__PURE__ */ E.createElement(ae, null)
  );
};
function gu(e, n) {
  if (!n)
    return null;
  const a = E.Children.only(n);
  return E.cloneElement(a, { ...e });
}
var l5 = oe({
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
}), s5 = "span", c5 = O.forwardRef(
  ({
    as: e,
    children: n,
    className: a,
    fontWeight: i = "normal",
    showTitle: s = !1,
    size: c,
    truncate: u = !1,
    underline: f = !1,
    variant: m,
    ...p
  }, v) => {
    const b = e ?? s5, [h, w] = O.useMemo(() => m === "heading" ? [c ?? "large", m] : [c ?? "medium", "body"], [c, m]);
    return /* @__PURE__ */ E.createElement(
      b,
      {
        className: l5({
          className: a,
          fontWeight: i,
          truncate: u,
          underline: f,
          [w]: h
        }),
        "data-font-weight": i,
        "data-size": h,
        "data-truncate": u,
        "data-underline": f,
        "data-variant": w,
        ref: v,
        title: s ? p.title ?? (u && typeof n == "string" ? n : void 0) : void 0,
        ...p
      },
      n
    );
  }
), u5 = [
  /* Uses a dummy class because FocusRing is a functional component that just adds
      the class to the content.
  
      The cn or other style functions on the FocusRing are always called, so we can't
      listen to them to test functionality */
  "@paloma-focus-ring",
  "outline",
  "outline-2",
  "outline-offset-2",
  "outline-interactive-highlight"
], d5 = ({
  children: e,
  disabled: n,
  focusRingClass: a,
  ...i
}) => n ? e : /* @__PURE__ */ E.createElement(dr, { focusRingClass: Bt(u5, a), ...i }, e), f5 = oe({
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
}), Mg = ({
  children: e,
  showTitle: n,
  size: a
}) => /* @__PURE__ */ E.createElement(
  c5,
  {
    fontWeight: "bold",
    showTitle: n,
    size: a,
    truncate: !0,
    variant: "body"
  },
  e
), Nd = O.forwardRef(
  ({
    "aria-label": e,
    as: n,
    children: a,
    className: i,
    disabled: s,
    hideButton: c,
    iconOnly: u,
    isLoading: f,
    leadingIcon: m,
    loadingIcon: p,
    loadingLabel: v = "Loading",
    onBlur: b,
    onClick: h,
    onFocus: w,
    onPress: k,
    showTitle: y,
    size: _ = "medium",
    trailingIcon: A,
    type: z = "button",
    variant: U = "primary",
    ...W
  }, Q) => {
    const Y = n ?? "button", K = n === "div" || n === "span", X = n === "a", ee = O.useRef(null);
    lt(
      !(u && !e && !K),
      "Button with iconOnly must have an aria-label for accessibility. If Button is purely decorative and does not convey any meaning or action, it should have aria-hidden='true' to be ignored by assistive technologies."
    );
    const { buttonProps: ie } = Ca(
      {
        elementType: Y,
        isDisabled: !!s,
        onBlur: b,
        onFocus: w,
        onPress: f ? void 0 : (R) => {
          k ? k(R) : h == null || h(R);
        }
      },
      ee
    ), ae = K ? W : Je(ie, W), S = /* @__PURE__ */ E.createElement(E.Fragment, null, p ?? gu(
      { className: "animate-loading-hourglass", size: _ },
      /* @__PURE__ */ E.createElement(zd, null)
    ), !u && /* @__PURE__ */ E.createElement(Mg, { size: _ }, v));
    return /* @__PURE__ */ E.createElement(d5, null, O.createElement(
      Y,
      {
        "aria-label": f ? v : e,
        className: f5({
          class: i,
          hideButton: c,
          iconOnly: u,
          isDecorative: K,
          isLoading: f,
          size: _,
          variant: U
        }),
        /* Add this to test uses of Button on other components */
        "data-size": Se(_),
        /* Add this to test uses of Button on other components */
        "data-variant": Se(U),
        ref: Tr(ee, Q),
        ...ae,
        "aria-busy": f ? !0 : void 0,
        "aria-disabled": !!s || !!f || void 0,
        // react-aria adds role="button" for non-button elements; strip it for links
        ...X && { role: void 0 },
        type: X || K ? void 0 : f && (z === "submit" || z === "reset") ? "button" : z
      },
      f ? S : /* @__PURE__ */ E.createElement(E.Fragment, null, gu(
        {
          size: m != null && m.props.size ? m.props.size : _
        },
        m
      ), !u && /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(Mg, { showTitle: y, size: _ }, a), gu(
        {
          size: A != null && A.props.size ? A.props.size : _
        },
        A
      )))
    ));
  }
), p5 = oe({
  base: "@paloma-divider data-[emphasis=bold]:border-neutral-bold data-[emphasis=minimal]:border-neutral-minimal data-[emphasis=regular]:border-neutral-regular data-[emphasis=subtle]:border-neutral-subtle",
  variants: {
    orientation: {
      horizontal: "border-x-0 border-b-0 border-t-[1px] mx-0 my-1 w-full min-h-[1px]",
      vertical: "border-y-0 border-r-0 border-l-[1px] mx-1 my-0 min-w-[1px]"
    }
  }
}), m5 = ({
  className: e,
  emphasis: n = "regular",
  orientation: a = "horizontal",
  role: i = "separator",
  ...s
}) => {
  const c = a === "horizontal", u = a === "vertical";
  return /* @__PURE__ */ E.createElement(
    "hr",
    {
      className: p5({
        className: e,
        orientation: a
      }),
      "data-emphasis": n,
      "data-is-orientation-horizontal": Se(c),
      "data-is-orientation-vertical": Se(u),
      role: i,
      ...s
    }
  );
};
function Lg(e, n) {
  if (!n)
    return null;
  const a = E.Children.only(n);
  return E.cloneElement(a, { ...e });
}
var g5 = oe({
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
}), h5 = "span", v5 = O.forwardRef(
  ({
    as: e,
    children: n,
    className: a,
    fontWeight: i = "normal",
    showTitle: s = !1,
    size: c,
    truncate: u = !1,
    underline: f = !1,
    variant: m,
    ...p
  }, v) => {
    const b = e ?? h5, [h, w] = O.useMemo(() => m === "heading" ? [c ?? "large", m] : [c ?? "medium", "body"], [c, m]);
    return /* @__PURE__ */ E.createElement(
      b,
      {
        className: g5({
          className: a,
          fontWeight: i,
          truncate: u,
          underline: f,
          [w]: h
        }),
        "data-font-weight": i,
        "data-size": h,
        "data-truncate": u,
        "data-underline": f,
        "data-variant": w,
        ref: v,
        title: s ? p.title ?? (u && typeof n == "string" ? n : void 0) : void 0,
        ...p
      },
      n
    );
  }
), b5 = [
  /* Uses a dummy class because FocusRing is a functional component that just adds
      the class to the content.
  
      The cn or other style functions on the FocusRing are always called, so we can't
      listen to them to test functionality */
  "@paloma-focus-ring",
  "outline",
  "outline-2",
  "outline-offset-2",
  "outline-interactive-highlight"
], y5 = ({
  children: e,
  disabled: n,
  focusRingClass: a,
  ...i
}) => n ? e : /* @__PURE__ */ E.createElement(dr, { focusRingClass: Bt(b5, a), ...i }, e), w5 = oe({
  base: "@paloma-link group inline-flex items-center gap-2 no-underline rounded-sm outline-none text-inherit text-content-highlight aria-disabled:pointer-events-none aria-disabled:opacity-30"
}), x5 = oe({
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
}), Il = O.forwardRef(
  ({
    "aria-current": e,
    "aria-expanded": n,
    "aria-label": a,
    as: i,
    bold: s,
    children: c,
    className: u,
    disabled: f,
    hoverUnderline: m = !0,
    href: p,
    leadingIcon: v,
    onBlur: b,
    onClick: h,
    onFocus: w,
    size: k = "medium",
    target: y,
    trailingIcon: _,
    underline: A = !1,
    ...z
  }, U) => {
    const W = ri("a"), Q = i ?? W, Y = O.useRef(null), { linkProps: K } = Cd(
      { isDisabled: f, onBlur: b, onFocus: w, onPress: h },
      Y
    ), X = Je(K, z);
    return /* @__PURE__ */ E.createElement(y5, { disabled: f }, /* @__PURE__ */ E.createElement(
      Q,
      {
        ...X,
        "aria-current": e,
        "aria-disabled": f,
        "aria-expanded": n,
        "aria-label": a,
        className: w5({
          class: u
        }),
        "data-bold": Se(s),
        "data-hover-underline": Se(m),
        "data-size": Se(k),
        "data-underline": Se(A),
        disabled: f,
        href: p,
        ref: Tr(U, Y),
        tabIndex: 0,
        target: y
      },
      Lg({ size: k }, v),
      /* @__PURE__ */ E.createElement(
        v5,
        {
          className: x5({ hoverUnderline: m, underline: A }),
          fontWeight: s ? "bold" : "normal",
          size: k,
          underline: A,
          variant: "body"
        },
        c
      ),
      Lg({ size: k }, _)
    ));
  }
), k5 = oe({
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
}), _5 = "span", E5 = O.forwardRef(
  ({
    as: e,
    children: n,
    className: a,
    fontWeight: i = "normal",
    showTitle: s = !1,
    size: c,
    truncate: u = !1,
    underline: f = !1,
    variant: m,
    ...p
  }, v) => {
    const b = e ?? _5, [h, w] = O.useMemo(() => m === "heading" ? [c ?? "large", m] : [c ?? "medium", "body"], [c, m]);
    return /* @__PURE__ */ E.createElement(
      b,
      {
        className: k5({
          className: a,
          fontWeight: i,
          truncate: u,
          underline: f,
          [w]: h
        }),
        "data-font-weight": i,
        "data-size": h,
        "data-truncate": u,
        "data-underline": f,
        "data-variant": w,
        ref: v,
        title: s ? p.title ?? (u && typeof n == "string" ? n : void 0) : void 0,
        ...p
      },
      n
    );
  }
);
const S5 = (e) => G.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: G.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 11H20V13H4V11Z" }) }), C5 = ({ children: e, containerClassName: n, emphasis: a, shape: i, size: s }) => {
  const c = typeof s == "number", u = c ? {
    height: s,
    padding: s / 2,
    width: s
  } : void 0, f = c ? void 0 : s;
  return G.jsx("div", { className: tr({
    class: n,
    emphasis: a,
    shape: i,
    size: f
  }), "data-testid": "@paloma-icons-contained-id", style: u, children: e });
}, z5 = ({ "aria-label": e, className: n, color: a, contained: i, containerClassName: s, emphasis: c = "regular", shape: u = "circle", size: f = "medium", svgClassName: m, ...p }) => {
  const v = !e, b = typeof f == "number", h = b ? { height: f, width: f } : void 0, w = b ? void 0 : f, k = i ? C5 : O.Fragment, y = i ? { containerClassName: s, emphasis: c, shape: u, size: f } : {};
  return G.jsx(k, { ...y, children: G.jsx("span", { ...p, className: Nr({ class: n, size: w }), "data-namespace": "@paloma/icons", "data-size": f, id: "minus-id", style: { color: a, ...h }, children: G.jsx(S5, { "aria-hidden": v, "aria-label": e, className: er({ class: m, size: w }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "minus-svg-id", style: { fill: $5, ...h } }) }) });
}, $5 = "currentColor", P5 = (e) => G.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: G.jsx("path", { d: "M11 13V20H13V13H20V11H13V4H11V11H4V13H11Z" }) }), A5 = ({ children: e, containerClassName: n, emphasis: a, shape: i, size: s }) => {
  const c = typeof s == "number", u = c ? {
    height: s,
    padding: s / 2,
    width: s
  } : void 0, f = c ? void 0 : s;
  return G.jsx("div", { className: tr({
    class: n,
    emphasis: a,
    shape: i,
    size: f
  }), "data-testid": "@paloma-icons-contained-id", style: u, children: e });
}, F5 = ({ "aria-label": e, className: n, color: a, contained: i, containerClassName: s, emphasis: c = "regular", shape: u = "circle", size: f = "medium", svgClassName: m, ...p }) => {
  const v = !e, b = typeof f == "number", h = b ? { height: f, width: f } : void 0, w = b ? void 0 : f, k = i ? A5 : O.Fragment, y = i ? { containerClassName: s, emphasis: c, shape: u, size: f } : {};
  return G.jsx(k, { ...y, children: G.jsx("span", { ...p, className: Nr({ class: n, size: w }), "data-namespace": "@paloma/icons", "data-size": f, id: "plus-id", style: { color: a, ...h }, children: G.jsx(P5, { "aria-hidden": v, "aria-label": e, className: er({ class: m, size: w }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "plus-svg-id", style: { fill: T5, ...h } }) }) });
}, T5 = "currentColor";
function N5({
  controlledValue: e,
  defaultValue: n,
  warnFn: a
}) {
  const [i, s] = O.useState(n);
  return e !== void 0 && n !== void 0 && (a ? a() : Ru(
    "A controlled value and a default value were both provided. An element must be either controlled or uncontrolled. Decide between using any and remove on of these props"
  )), [
    e ?? i,
    e !== void 0 ? void 0 : s
  ];
}
var Rg = 0;
function I5(e = "") {
  return Rg += 1, e + Rg;
}
function M5(e, n) {
  const a = O.useRef(e ?? null);
  return lt(
    n.length > 0,
    "useUniqueId(): The prefix provided is an empty string. If you want to remove the prefix, do not provide it. If you want to use the default prefix, do not provide a prefix."
  ), a.current === null && (a.current = I5(
    `${n}-`
  )), e && (a.current = e), a.current;
}
function L5(e, n, a) {
  try {
    const s = E.Children.only(e);
    if (s.type === n)
      return a ? a(s, s == null ? void 0 : s.props) : e;
  } catch {
  }
  return null;
}
function R5(e, n) {
  if (!n)
    return null;
  const a = E.Children.only(n);
  return E.cloneElement(a, { ...e });
}
var j5 = oe({
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
}), O5 = "span", hu = O.forwardRef(
  ({
    as: e,
    children: n,
    className: a,
    fontWeight: i = "normal",
    showTitle: s = !1,
    size: c,
    truncate: u = !1,
    underline: f = !1,
    variant: m,
    ...p
  }, v) => {
    const b = e ?? O5, [h, w] = O.useMemo(() => m === "heading" ? [c ?? "large", m] : [c ?? "medium", "body"], [c, m]);
    return /* @__PURE__ */ E.createElement(
      b,
      {
        className: j5({
          className: a,
          fontWeight: i,
          truncate: u,
          underline: f,
          [w]: h
        }),
        "data-font-weight": i,
        "data-size": h,
        "data-truncate": u,
        "data-underline": f,
        "data-variant": w,
        ref: v,
        title: s ? p.title ?? (u && typeof n == "string" ? n : void 0) : void 0,
        ...p
      },
      n
    );
  }
), vu = (e, n = {}) => {
  if (typeof e == "string")
    return /* @__PURE__ */ E.createElement(hu, { ...n }, e);
  if (L5(e, hu)) {
    const a = {
      ...n ?? {},
      ...e.props
    };
    return /* @__PURE__ */ E.createElement(hu, { ...a });
  }
  if (E.isValidElement(e) && typeof e.type == "string") {
    const a = {};
    e.type === "a" && (a.color = "#0000EE", a.textDecoration = "underline");
    const i = e.props, s = {
      ...a,
      ...n.style,
      ...i.style
    };
    return E.cloneElement(
      e,
      {
        style: s
      }
    );
  }
  return e;
}, V5 = [
  /* Uses a dummy class because FocusRing is a functional component that just adds
      the class to the content.
  
      The cn or other style functions on the FocusRing are always called, so we can't
      listen to them to test functionality */
  "@paloma-focus-ring",
  "outline",
  "outline-2",
  "outline-offset-2",
  "outline-interactive-highlight"
], D5 = ({
  children: e,
  disabled: n,
  focusRingClass: a,
  ...i
}) => n ? e : /* @__PURE__ */ E.createElement(dr, { focusRingClass: Bt(V5, a), ...i }, e), B5 = "text-content-neutral-subtle", U5 = oe({
  base: "py-4 flex flex-col items-start border-t-0 border-l-0 border-r-0 border-b border-b-neutral-subtle border-solid",
  variants: {
    expanded: {
      true: "pb-8"
    }
  }
}), H5 = oe({
  base: "flex items-center text-content-neutral-bold",
  variants: {
    expanded: {
      true: "text-content-highlight"
    }
  }
}), W5 = oe({
  base: "text-content-neutral-bold",
  variants: {
    expanded: {
      true: "!text-content-highlight"
    }
  }
}), q5 = oe({
  base: "flex items-center text-content-neutral-subtle",
  variants: {
    size: {
      large: "h-8",
      medium: "h-6"
    }
  }
}), G5 = oe({
  base: "w-full grid overflow-hidden transition-all duration-300 ease-in-out motion-reduce:transition-none",
  variants: {
    expanded: {
      false: "grid-rows-[0fr] invisible",
      true: "grid-rows-[1fr] visible"
    }
  }
}), K5 = oe({
  variants: {
    variant: {
      contained: "p-8 rounded-md bg-surface-level-01",
      "un-contained": ""
    }
  }
}), Y5 = ({
  children: e,
  className: n,
  defaultExpanded: a,
  expanded: i,
  headingAs: s,
  id: c,
  label: u,
  leadingIcon: f,
  onToggle: m,
  size: p = "medium",
  subtitle: v,
  title: b,
  titleClassName: h,
  variant: w = "contained",
  ...k
}) => {
  const [y, _] = N5({
    controlledValue: i,
    defaultValue: a
  }), A = (X) => {
    _ == null || _(!y), m == null || m(X, !y);
  }, z = O.useRef(null), { buttonProps: U } = Ca(
    { onPress: A },
    z
  ), W = M5(c, "accordion"), Q = `${W}-content`, Y = s ?? "h3", K = !!y;
  return /* @__PURE__ */ E.createElement(
    "div",
    {
      className: U5({
        class: n,
        expanded: K
      }),
      ...k
    },
    /* @__PURE__ */ E.createElement(
      Y,
      {
        className: "w-full m-0",
        "data-testid": "@paloma-accordion-heading-id"
      },
      /* @__PURE__ */ E.createElement(D5, { focusRingClass: "rounded-md" }, /* @__PURE__ */ E.createElement(
        "button",
        {
          ...U,
          "aria-controls": Q,
          "aria-expanded": K,
          className: "w-full outline-none border-none bg-transparent cursor-pointer px-2 py-2 my-2 flex gap-2 justify-between hover:bg-content-neutral-bold/[0.08] active:bg-content-neutral-bold/[0.12] hover:active:bg-content-neutral-bold/[0.12]",
          id: W,
          ref: z
        },
        /* @__PURE__ */ E.createElement("div", { className: "flex items-start gap-2 text-left" }, f && /* @__PURE__ */ E.createElement(
          "div",
          {
            "aria-hidden": !0,
            className: H5({ expanded: K }),
            "data-testid": "@paloma-accordion-leading-icon-id"
          },
          R5({ size: p }, f)
        ), /* @__PURE__ */ E.createElement("div", { className: "title flex flex-col gap-1 items-start" }, vu(b, {
          className: W5({
            class: h,
            expanded: K
          }),
          fontWeight: "bold",
          size: p,
          variant: "body"
        }), vu(v, {
          className: B5,
          size: p === "large" ? "small" : "x-small",
          variant: "body"
        }))),
        /* @__PURE__ */ E.createElement("div", { className: "flex items-start gap-2" }, vu(u, {
          className: q5({ size: p }),
          size: p === "large" ? "small" : "x-small",
          variant: "body"
        }), y ? /* @__PURE__ */ E.createElement(
          z5,
          {
            className: "text-content-highlight",
            "data-testid": "@paloma-accordion-button-expanded-id",
            size: p
          }
        ) : /* @__PURE__ */ E.createElement(
          F5,
          {
            className: "text-content-highlight",
            "data-testid": "@paloma-accordion-button-collapsed-id",
            size: p
          }
        ))
      ))
    ),
    /* @__PURE__ */ E.createElement(
      "section",
      {
        "aria-labelledby": W,
        className: G5({ expanded: K }),
        id: Q
      },
      /* @__PURE__ */ E.createElement("div", { className: "overflow-hidden" }, /* @__PURE__ */ E.createElement("div", { className: K5({ variant: w }) }, e))
    )
  );
};
const Q5 = [
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
function X5() {
  return /* @__PURE__ */ G.jsxs("section", { className: "announcement-grid", children: [
    /* @__PURE__ */ G.jsx("h2", { className: "announcement-grid__title", children: "Announcements" }),
    /* @__PURE__ */ G.jsx("div", { className: "announcement-grid__list", children: Q5.map((e) => /* @__PURE__ */ G.jsx(
      Y5,
      {
        className: "announcement-grid__item",
        title: e.title,
        subtitle: e.subtitle,
        label: e.label,
        leadingIcon: /* @__PURE__ */ G.jsx("span", { "aria-hidden": "true", children: "EA" }),
        children: /* @__PURE__ */ G.jsx("p", { children: e.content })
      },
      e.title
    )) })
  ] });
}
const Z5 = (e) => G.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: [G.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.3531 9.11111C15.3531 10.8293 13.9602 12.2222 12.242 12.2222C10.5238 12.2222 9.13087 10.8293 9.13087 9.11111C9.13087 7.39289 10.5238 6 12.242 6C13.9602 6 15.3531 7.39289 15.3531 9.11111ZM13.3531 9.11111C13.3531 9.72476 12.8556 10.2222 12.242 10.2222C11.6283 10.2222 11.1309 9.72476 11.1309 9.11111C11.1309 8.49746 11.6283 8 12.242 8C12.8556 8 13.3531 8.49746 13.3531 9.11111Z" }), G.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.9608 18.2766C15.5973 19.3557 13.8739 20 12 20C10.3038 20 8.73083 19.4721 7.43653 18.5716L8.20631 15.9544C8.27585 15.7179 8.49284 15.5556 8.73929 15.5556H15.7448C15.9912 15.5556 16.2082 15.7179 16.2778 15.9544L16.9608 18.2766ZM18.5505 16.5937L18.1965 15.39C17.8766 14.3024 16.8784 13.5556 15.7448 13.5556H8.73929C7.60562 13.5556 6.60746 14.3024 6.28758 15.39L5.79821 17.0539C4.67412 15.6761 4 13.9168 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 13.7094 19.4638 15.2937 18.5505 16.5937Z" })] }), J5 = ({ children: e, containerClassName: n, emphasis: a, shape: i, size: s }) => {
  const c = typeof s == "number", u = c ? {
    height: s,
    padding: s / 2,
    width: s
  } : void 0, f = c ? void 0 : s;
  return G.jsx("div", { className: tr({
    class: n,
    emphasis: a,
    shape: i,
    size: f
  }), "data-testid": "@paloma-icons-contained-id", style: u, children: e });
}, ek = ({ "aria-label": e, className: n, color: a, contained: i, containerClassName: s, emphasis: c = "regular", shape: u = "circle", size: f = "medium", svgClassName: m, ...p }) => {
  const v = !e, b = typeof f == "number", h = b ? { height: f, width: f } : void 0, w = b ? void 0 : f, k = i ? J5 : O.Fragment, y = i ? { containerClassName: s, emphasis: c, shape: u, size: f } : {};
  return G.jsx(k, { ...y, children: G.jsx("span", { ...p, className: Nr({ class: n, size: w }), "data-namespace": "@paloma/icons", "data-size": f, id: "account-id", style: { color: a, ...h }, children: G.jsx(Z5, { "aria-hidden": v, "aria-label": e, className: er({ class: m, size: w }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "account-svg-id", style: { fill: tk, ...h } }) }) });
}, tk = "currentColor";
function Qv(e, n) {
  if (!n)
    return null;
  const a = E.Children.only(n);
  return E.cloneElement(a, { ...e });
}
var rk = oe({
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
}), nk = "span", Xv = O.forwardRef(
  ({
    as: e,
    children: n,
    className: a,
    fontWeight: i = "normal",
    showTitle: s = !1,
    size: c,
    truncate: u = !1,
    underline: f = !1,
    variant: m,
    ...p
  }, v) => {
    const b = e ?? nk, [h, w] = O.useMemo(() => m === "heading" ? [c ?? "large", m] : [c ?? "medium", "body"], [c, m]);
    return /* @__PURE__ */ E.createElement(
      b,
      {
        className: rk({
          className: a,
          fontWeight: i,
          truncate: u,
          underline: f,
          [w]: h
        }),
        "data-font-weight": i,
        "data-size": h,
        "data-truncate": u,
        "data-underline": f,
        "data-variant": w,
        ref: v,
        title: s ? p.title ?? (u && typeof n == "string" ? n : void 0) : void 0,
        ...p
      },
      n
    );
  }
), Id = {
  "bottom-center": "",
  "bottom-left": "",
  "bottom-right": "",
  "top-center": "",
  "top-left": "",
  "top-right": ""
}, Md = {
  circle: "",
  square: ""
}, bu = {
  false: "",
  true: ""
}, Zv = {
  avatar: "",
  dot: "",
  icon: "",
  product: "",
  text: ""
}, ak = {
  negative: "",
  none: "",
  positive: "",
  warning: ""
}, ok = {
  highlight: "",
  neutral: ""
}, ik = {
  small: "",
  "x-small": ""
}, lk = oe({
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
    position: Id,
    shape: Md,
    standalone: {
      false: "@paloma-badge-rotation-relative absolute"
    }
  }
}), sk = oe({
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
    position: Id,
    shape: Md,
    standalone: {
      false: "@paloma-badge-position-relative absolute z-10"
    },
    variant: Zv
  }
}), ck = oe({
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
    position: Id,
    shape: Md,
    standalone: {
      false: "max-w-[80px]",
      true: ""
    }
  }
}), uk = oe({
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
    appearance: ok,
    emphasis: {
      bold: "@paloma-badge-content-bold text-content-inverse-bold",
      subtle: "@paloma-badge-content-subtle text-content-neutral-bold"
    },
    hasIcon: bu,
    hasProductLogo: bu,
    isLabelSingleCharacter: bu,
    size: ik,
    status: ak,
    variant: Zv
  }
}), dk = oe({
  base: "@paloma-badge-container relative w-fit"
}), fk = ({
  appearance: e = "neutral",
  "aria-label": n,
  avatar: a,
  children: i,
  className: s,
  containerClassName: c,
  cutoutBorder: u = !0,
  cutoutColor: f,
  emphasis: m = "subtle",
  icon: p,
  label: v,
  position: b,
  productLogo: h,
  shape: w = "square",
  size: k = "small",
  standalone: y = !1,
  status: _ = "none",
  variant: A,
  ...z
}) => {
  A || (A = v ? "text" : p ?? a ?? h ? "icon" : "dot"), (A === "avatar" || A === "product") && (A = "icon");
  const U = () => {
    if (v)
      return /* @__PURE__ */ E.createElement(
        Xv,
        {
          "data-testid": "@paloma-badge-label-id",
          size: k,
          truncate: !0,
          variant: "body"
        },
        v
      );
  }, W = () => {
    if (p)
      return Qv(
        {
          "data-testid": "@paloma-badge-icon-id",
          size: "small"
        },
        p
      );
  }, Q = () => {
    if (a)
      return E.cloneElement(a, {
        ...a.props,
        "aria-label": a.props["aria-label"] ?? n ?? v,
        badge: void 0,
        size: k === "small" ? "x-small" : "xx-small"
      });
  }, Y = () => {
    if (h)
      return E.cloneElement(
        h,
        {
          ...h.props,
          contained: !0,
          size: k === "small" ? "x-small" : "2x-small"
        }
      );
  }, K = () => {
    if (A !== "dot")
      return /* @__PURE__ */ E.createElement(E.Fragment, null, W(), U(), Q(), Y());
  }, X = b == null ? void 0 : b.split("-"), ee = !!(v && v.length === 1), ie = ee && !p, ae = (S) => /* @__PURE__ */ E.createElement(
    "div",
    {
      className: lk({
        class: y ? c : "",
        position: b,
        shape: w,
        standalone: y
      }),
      "data-appearance": e,
      "data-content-single-element": ie,
      "data-cutout-border": u,
      "data-emphasis": m,
      "data-shape": w,
      "data-size": k,
      "data-status": _,
      "data-testid": "@paloma-badge-rotation-id",
      "data-variant": A,
      ...y ? S : {}
    },
    /* @__PURE__ */ E.createElement(
      "div",
      {
        className: sk({
          position: b,
          shape: w,
          standalone: y,
          variant: A
        }),
        "data-position-x": X == null ? void 0 : X[1],
        "data-position-y": X == null ? void 0 : X[0],
        "data-shape": w,
        "data-testid": "@paloma-badge-position-id"
      },
      /* @__PURE__ */ E.createElement(
        "div",
        {
          className: ck({
            cutoutBorder: u,
            hasProductLogo: !!h,
            position: b,
            shape: w,
            standalone: y
          }),
          "data-testid": "@paloma-badge-border-id",
          style: f ? { borderColor: f } : void 0
        },
        /* @__PURE__ */ E.createElement(
          "div",
          {
            "aria-label": n,
            className: uk({
              appearance: e,
              class: s,
              emphasis: m,
              hasIcon: !!p,
              hasProductLogo: !!h,
              isLabelSingleCharacter: ee,
              size: k,
              status: _,
              variant: A
            }),
            "data-testid": "@paloma-badge-content-id",
            role: A !== "dot" ? "status" : void 0
          },
          K()
        )
      )
    )
  );
  return y ? /* @__PURE__ */ E.createElement(ae, { ...z }) : /* @__PURE__ */ E.createElement(
    "div",
    {
      className: dk({ class: c }),
      "data-testid": "@paloma-badge-container-id",
      ...z
    },
    i,
    /* @__PURE__ */ E.createElement(ae, null)
  );
}, pk = [
  /* Uses a dummy class because FocusRing is a functional component that just adds
      the class to the content.
  
      The cn or other style functions on the FocusRing are always called, so we can't
      listen to them to test functionality */
  "@paloma-focus-ring",
  "outline",
  "outline-2",
  "outline-offset-2",
  "outline-interactive-highlight"
], mk = ({
  children: e,
  disabled: n,
  focusRingClass: a,
  ...i
}) => n ? e : /* @__PURE__ */ E.createElement(dr, { focusRingClass: Bt(pk, a), ...i }, e), gk = oe({
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
}), hk = oe({
  base: "absolute h-full w-full overflow-hidden flex items-center justify-center",
  variants: {
    emphasis: {
      highlight: "bg-interactive-highlight",
      minimal: "bg-interactive-neutral-minimal",
      neutral: "bg-surface-level-01",
      regular: "bg-interactive-neutral-regular"
    }
  }
}), jg = oe({
  variants: {
    appearance: {
      highlight: "text-content-highlight",
      neutral: "text-content-neutral-bold",
      "neutral-inverse": "text-content-inverse-bold"
    }
  }
}), vk = oe({
  base: "object-cover h-full w-full",
  variants: {
    imageLoadFail: {
      true: "hidden"
    }
  }
}), bk = ({
  active: e = !1,
  appearance: n = "neutral",
  "aria-label": a,
  bgClassname: i,
  className: s,
  disabled: c,
  emphasis: u = "regular",
  icon: f,
  imageSrc: m,
  label: p,
  onClick: v,
  shape: b = "circle",
  size: h = "medium",
  ...w
}) => {
  const [k, y] = O.useState(!1);
  O.useEffect(() => {
    y(!1);
  }, [m]);
  const _ = v ? "button" : "div";
  return /* @__PURE__ */ E.createElement(mk, null, /* @__PURE__ */ E.createElement(
    _,
    {
      "aria-label": a,
      className: gk({
        active: e,
        className: s,
        disabled: c,
        onClick: !!v,
        shape: b,
        size: h
      }),
      "data-size": h,
      disabled: c,
      onClick: v,
      ...w
    },
    /* @__PURE__ */ E.createElement(
      "div",
      {
        className: hk({ className: i, emphasis: u })
      },
      (!f && !m || k) && /* @__PURE__ */ E.createElement(
        Xv,
        {
          className: jg({ appearance: n }),
          fontWeight: "bold",
          size: wk[h],
          variant: "body"
        },
        p
      ),
      m && /* @__PURE__ */ E.createElement(
        "img",
        {
          alt: a,
          className: vk({ imageLoadFail: k }),
          onError: () => y(!0),
          src: m
        }
      ),
      Qv(
        {
          className: jg({ appearance: n }),
          size: yk[h]
        },
        f
      )
    )
  ));
}, yk = {
  large: "large",
  medium: "medium",
  small: "small",
  "x-small": "x-small",
  "xx-small": "x-small"
}, wk = {
  large: "large",
  medium: "medium",
  small: "small",
  "x-small": "x-small",
  "xx-small": "x-small"
}, xk = ({
  active: e = !1,
  authenticated: n = !0,
  badge: a = !1,
  badgeCutoutColor: i,
  className: s,
  disabled: c,
  emphasis: u = "regular",
  imageSrc: f,
  label: m,
  onClick: p,
  size: v = "medium",
  ...b
}) => {
  const h = () => {
    const w = {
      imageSrc: f
    }, k = {
      icon: /* @__PURE__ */ E.createElement(ek, { "data-testid": "@paloma-avatar-icon-unauthenticated-id" })
    };
    return /* @__PURE__ */ E.createElement(
      bk,
      {
        active: e,
        className: s,
        disabled: c,
        emphasis: u,
        label: m,
        onClick: p,
        shape: "circle",
        size: v,
        ...n ? w : k,
        ...b
      }
    );
  };
  return /* @__PURE__ */ E.createElement(E.Fragment, null, a && /* @__PURE__ */ E.createElement(
    fk,
    {
      appearance: "highlight",
      cutoutColor: i,
      "data-testid": "@paloma-avatar-badge-id",
      position: "bottom-right",
      shape: "circle",
      size: "x-small",
      variant: "dot"
    },
    h()
  ), !a && h());
};
const kk = (e) => G.jsx("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: G.jsx("circle", { cx: 10, cy: 10, r: 5 }) }), _k = ({ children: e, containerClassName: n, emphasis: a, shape: i, size: s }) => {
  const c = typeof s == "number", u = c ? {
    height: s,
    padding: s / 2,
    width: s
  } : void 0, f = c ? void 0 : s;
  return G.jsx("div", { className: tr({
    class: n,
    emphasis: a,
    shape: i,
    size: f
  }), "data-testid": "@paloma-icons-contained-id", style: u, children: e });
}, Ek = ({ "aria-label": e, className: n, color: a, contained: i, containerClassName: s, emphasis: c = "regular", shape: u = "circle", size: f = "medium", svgClassName: m, ...p }) => {
  const v = !e, b = typeof f == "number", h = b ? { height: f, width: f } : void 0, w = b ? void 0 : f, k = i ? _k : O.Fragment, y = i ? { containerClassName: s, emphasis: c, shape: u, size: f } : {};
  return G.jsx(k, { ...y, children: G.jsx("span", { ...p, className: Nr({ class: n, size: w }), "data-namespace": "@paloma/icons", "data-size": f, id: "bullet-id", style: { color: a, ...h }, children: G.jsx(kk, { "aria-hidden": v, "aria-label": e, className: er({ class: m, size: w }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "bullet-svg-id", style: { fill: Sk, ...h } }) }) });
}, Sk = "currentColor", Ck = (e) => G.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: G.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 13.5857L17.2928 8.29285L18.7071 9.70706L12.7071 15.7071L12 16.4142L11.2928 15.7071L5.29285 9.70706L6.70706 8.29285L12 13.5857Z" }) }), zk = ({ children: e, containerClassName: n, emphasis: a, shape: i, size: s }) => {
  const c = typeof s == "number", u = c ? {
    height: s,
    padding: s / 2,
    width: s
  } : void 0, f = c ? void 0 : s;
  return G.jsx("div", { className: tr({
    class: n,
    emphasis: a,
    shape: i,
    size: f
  }), "data-testid": "@paloma-icons-contained-id", style: u, children: e });
}, Jv = ({ "aria-label": e, className: n, color: a, contained: i, containerClassName: s, emphasis: c = "regular", shape: u = "circle", size: f = "medium", svgClassName: m, ...p }) => {
  const v = !e, b = typeof f == "number", h = b ? { height: f, width: f } : void 0, w = b ? void 0 : f, k = i ? zk : O.Fragment, y = i ? { containerClassName: s, emphasis: c, shape: u, size: f } : {};
  return G.jsx(k, { ...y, children: G.jsx("span", { ...p, className: Nr({ class: n, size: w }), "data-namespace": "@paloma/icons", "data-size": f, id: "carat-down-small-id", style: { color: a, ...h }, children: G.jsx(Ck, { "aria-hidden": v, "aria-label": e, className: er({ class: m, size: w }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "carat-down-small-svg-id", style: { fill: $k, ...h } }) }) });
}, $k = "currentColor";
function Lo(e, n) {
  if (!n)
    return null;
  const a = E.Children.only(n);
  return E.cloneElement(a, { ...e });
}
var Pk = oe({
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
}), Ak = "span", Ar = O.forwardRef(
  ({
    as: e,
    children: n,
    className: a,
    fontWeight: i = "normal",
    showTitle: s = !1,
    size: c,
    truncate: u = !1,
    underline: f = !1,
    variant: m,
    ...p
  }, v) => {
    const b = e ?? Ak, [h, w] = O.useMemo(() => m === "heading" ? [c ?? "large", m] : [c ?? "medium", "body"], [c, m]);
    return /* @__PURE__ */ E.createElement(
      b,
      {
        className: Pk({
          className: a,
          fontWeight: i,
          truncate: u,
          underline: f,
          [w]: h
        }),
        "data-font-weight": i,
        "data-size": h,
        "data-truncate": u,
        "data-underline": f,
        "data-variant": w,
        ref: v,
        title: s ? p.title ?? (u && typeof n == "string" ? n : void 0) : void 0,
        ...p
      },
      n
    );
  }
), Fk = [
  /* Uses a dummy class because FocusRing is a functional component that just adds
      the class to the content.
  
      The cn or other style functions on the FocusRing are always called, so we can't
      listen to them to test functionality */
  "@paloma-focus-ring",
  "outline",
  "outline-2",
  "outline-offset-2",
  "outline-interactive-highlight"
], Ld = ({
  children: e,
  disabled: n,
  focusRingClass: a,
  ...i
}) => n ? e : /* @__PURE__ */ E.createElement(dr, { focusRingClass: Bt(Fk, a), ...i }, e), Tk = oe({
  base: "@paloma-link group inline-flex items-center gap-2 no-underline rounded-sm outline-none text-inherit text-content-highlight aria-disabled:pointer-events-none aria-disabled:opacity-30"
}), Nk = oe({
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
}), Ik = O.forwardRef(
  ({
    "aria-current": e,
    "aria-expanded": n,
    "aria-label": a,
    as: i,
    bold: s,
    children: c,
    className: u,
    disabled: f,
    hoverUnderline: m = !0,
    href: p,
    leadingIcon: v,
    onBlur: b,
    onClick: h,
    onFocus: w,
    size: k = "medium",
    target: y,
    trailingIcon: _,
    underline: A = !1,
    ...z
  }, U) => {
    const W = ri("a"), Q = i ?? W, Y = O.useRef(null), { linkProps: K } = Cd(
      { isDisabled: f, onBlur: b, onFocus: w, onPress: h },
      Y
    ), X = Je(K, z);
    return /* @__PURE__ */ E.createElement(Ld, { disabled: f }, /* @__PURE__ */ E.createElement(
      Q,
      {
        ...X,
        "aria-current": e,
        "aria-disabled": f,
        "aria-expanded": n,
        "aria-label": a,
        className: Tk({
          class: u
        }),
        "data-bold": Se(s),
        "data-hover-underline": Se(m),
        "data-size": Se(k),
        "data-underline": Se(A),
        disabled: f,
        href: p,
        ref: Tr(U, Y),
        tabIndex: 0,
        target: y
      },
      Lo({ size: k }, v),
      /* @__PURE__ */ E.createElement(
        Ar,
        {
          className: Nk({ hoverUnderline: m, underline: A }),
          fontWeight: s ? "bold" : "normal",
          size: k,
          underline: A,
          variant: "body"
        },
        c
      ),
      Lo({ size: k }, _)
    ));
  }
), Rd = oe({
  variants: {
    size: {
      large: "gap-5",
      medium: "gap-4",
      small: "gap-3",
      "x-small": "gap-3"
    }
  }
}), Mk = oe({
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
  extend: Rd,
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
}), Lk = oe({
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
  extend: Rd,
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
}), Rk = oe({
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
}), jk = oe({
  variants: {
    truncate: {
      false: "",
      true: "truncate min-w-0"
    }
  }
}), Ok = oe({
  base: "flex flex-col",
  variants: {
    size: {
      large: "gap-3",
      medium: "gap-2",
      small: "gap-2",
      "x-small": "gap-1"
    }
  }
}), Vk = oe({
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
}), Dk = oe({
  base: "flex flex-shrink-0",
  defaultVariants: {
    longform: !1
  },
  extend: Rd,
  variants: {
    longform: {
      false: "items-center",
      true: "items-start"
    }
  }
}), Bk = [
  void 0,
  {
    isLandscape: void 0,
    isMobile: void 0,
    screenHeight: void 0,
    screenWidth: void 0
  }
];
function Og() {
  var i, s, c, u;
  if (typeof window > "u")
    return Bk;
  let e;
  window.innerWidth <= 767 ? e = "sm" : window.innerWidth <= 1279 ? e = "md" : e = "lg";
  const n = ((s = (i = window.matchMedia) == null ? void 0 : i.call(window, "(orientation: landscape)")) == null ? void 0 : s.matches) ?? !1, a = (((u = (c = window.matchMedia) == null ? void 0 : c.call(window, "(hover: none) and (pointer: coarse)")) == null ? void 0 : u.matches) ?? !1) || window.innerWidth <= 767;
  return [
    e,
    {
      isLandscape: n,
      isMobile: a,
      screenHeight: window.innerHeight,
      screenWidth: window.innerWidth
    }
  ];
}
function Uk(e = 100) {
  const [n, a] = O.useState(Og()), i = O.useRef();
  return O.useEffect(() => {
    const s = () => {
      clearTimeout(i.current), i.current = setTimeout(() => a(Og()), e);
    };
    return window.addEventListener("resize", s), window.addEventListener("orientationchange", s), () => {
      window.removeEventListener("resize", s), window.removeEventListener("orientationchange", s), clearTimeout(i.current);
    };
  }, [e, a]), n;
}
var Hk = typeof window > "u" ? O.useEffect : O.useLayoutEffect, Wk = (e, n) => {
  const a = O.useRef(n);
  return lt(
    e === void 0 || typeof e == "object",
    "Locales should be an object or undefined"
  ), lt(
    // using a useMemo to ensure the defaultValues are only validated once, and not on every render as this is a heavy operation
    O.useMemo(() => typeof a.current == "object" && Object.values(a.current).every(
      (s) => typeof s == "string" && s.length > 0
    ), []),
    "Default values should be an object, with each key being a string and each value being a non-empty string"
  ), O.useMemo(
    () => (
      // Using a Proxy object rather than fully-recreating the object each time, this allows us to lazy load the values
      new Proxy(a.current, {
        get: (s, c) => {
          const u = (e == null ? void 0 : e[c]) ?? a.current[c];
          return (f = {}) => u.replace(/{{(.*?)}}/g, (m, p) => {
            const v = f[p];
            return x1(
              v,
              `Missing parameter "${p}" in locales`
            ), v.toString();
          });
        }
      })
    ),
    [e]
  );
}, Vg = 0;
function qk(e = "") {
  return Vg += 1, e + Vg;
}
function Gk(e, n) {
  const a = O.useRef(null);
  return lt(
    !0,
    "useUniqueId(): The prefix provided is an empty string. If you want to remove the prefix, do not provide it. If you want to use the default prefix, do not provide a prefix."
  ), a.current === null && (a.current = qk(
    `${Kk}-`
  )), a.current;
}
var Kk = "@paloma", Yk = {
  collapse: "Collapse",
  expand: "Expand"
}, Qk = {
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
}, Dg = (e) => e.reduce((n, a) => n + a.offsetHeight, 0), Xk = ({
  isExpanded: e,
  listLength: n,
  listRef: a,
  maxCollapsedItems: i
}) => {
  const [s, c] = O.useState(!0), [u, f] = O.useState("auto"), [m, p] = O.useState(0), [, { screenHeight: v, screenWidth: b }] = Uk(250), h = O.useCallback(() => {
    var k;
    const w = (k = a.current) == null ? void 0 : k.children;
    if (w) {
      const y = [...w], _ = y.slice(0, i), A = y.slice(i), z = Dg(_), U = Dg(A);
      e || c(!1), f(z), p(z + U);
    }
  }, [a, i, e]);
  return Hk(() => {
    h();
  }, [n, i, e, h]), O.useEffect(() => {
    h();
  }, [
    b,
    v,
    n,
    i,
    e,
    h
  ]), O.useEffect(() => {
    if (!a.current || typeof ResizeObserver > "u")
      return;
    const w = a.current;
    let k = null;
    const y = new ResizeObserver(() => {
      k !== null && cancelAnimationFrame(k), k = requestAnimationFrame(() => {
        h();
      });
    });
    return y.observe(w), () => {
      k !== null && cancelAnimationFrame(k), y.disconnect();
    };
  }, [a, h]), {
    defaultHeight: u,
    expandedHeight: m,
    setShowExpandedItems: c,
    showExpandedItems: s
  };
}, Zk = oe({
  base: "text-content-neutral-bold",
  variants: {
    isExpanded: {
      true: "rotate-180"
    }
  }
}), Bg = oe({
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
}), Jk = oe({
  base: "text-content-neutral-bold h-[1lh]",
  variants: {
    size: {
      large: "leading-[--line-height-body-large]",
      medium: "leading-[--line-height-body-medium]",
      small: "leading-[--line-height-body-small]"
    }
  }
}), e3 = ({
  children: e,
  className: n,
  expandable: a = !0,
  heading: i,
  isNested: s = !1,
  locales: c,
  maxCollapsedItems: u = 7,
  showHeading: f = !0,
  size: m = "small",
  type: p,
  ...v
}) => {
  const b = Wk(c, Yk), h = Gk(), w = b.expand(), k = b.collapse(), y = (c == null ? void 0 : c.expandAriaLabel) ?? w, _ = (c == null ? void 0 : c.collapseAriaLabel) ?? k, [A, z] = O.useState(!1), U = O.useRef(null), W = O.useMemo(() => {
    const C = E.Children.count(e) > 1 ? e : [e], j = /* @__PURE__ */ E.createElement(
      Ek,
      {
        className: Jk({ size: m }),
        "data-testid": "@paloma-list-bullet-icon-id",
        size: "x-small"
      }
    );
    return C.map((L, T) => {
      const I = (T + 1).toString(), F = /* @__PURE__ */ E.createElement("div", { className: "w-8 h-8 rounded-full bg-interactive-neutral-subtle backdrop-blur-surface flex justify-center items-center" }, /* @__PURE__ */ E.createElement(
        Ar,
        {
          className: "text-content-neutral-bold",
          "data-testid": "@paloma-list-number-id",
          fontWeight: "bold",
          size: m === "large" ? "small" : "x-small",
          variant: "body"
        },
        I
      )), V = L.props, $ = !!V.onClick;
      return E.cloneElement(L, {
        as: "li",
        className: V.className,
        isNested: s,
        key: `listItem-${T}`,
        leadingSlot: p === "ordered" && F || p === "unordered" && j || void 0,
        size: m,
        tabIndex: $ ? 0 : -1,
        type: p
      });
    });
  }, [e, s, m, p]), Q = a && W.length > u, Y = p === "ordered" ? "ol" : "ul", K = O.useMemo(
    () => Q ? [...W].splice(0, u) : W,
    [Q, W, u]
  ), X = [...W].splice(u), {
    defaultHeight: ee,
    expandedHeight: ie,
    setShowExpandedItems: ae,
    showExpandedItems: S
  } = Xk({
    isExpanded: A,
    listLength: W.length,
    listRef: U,
    maxCollapsedItems: u
  }), R = () => {
    A || ae(!0), z(!A);
  };
  return s ? /* @__PURE__ */ E.createElement(
    Y,
    {
      className: Bt(
        Bg({
          isExpandable: Q,
          isNested: s,
          noExpandedHeight: ie === 0,
          size: m
        }),
        n
      ),
      "data-paloma-list": !0,
      "data-testid": "@paloma-list-element-id",
      ref: U,
      ...v
    },
    K,
    S && X
  ) : /* @__PURE__ */ E.createElement("div", { className: "flex flex-col" }, i && f && /* @__PURE__ */ E.createElement(
    Ar,
    {
      className: "text-content-neutral-bold",
      ...Qk[m]
    },
    i
  ), /* @__PURE__ */ E.createElement(
    Y,
    {
      className: Bt(
        Bg({
          isExpandable: Q,
          noExpandedHeight: ie === 0,
          size: m
        }),
        n
      ),
      "data-paloma-list": !0,
      "data-testid": "@paloma-list-element-id",
      id: h,
      onTransitionEnd: () => {
        A || ae(!1);
      },
      ref: U,
      style: Q ? { height: A ? ie : ee } : void 0,
      ...v
    },
    K,
    S && X
  ), Q && /* @__PURE__ */ E.createElement(Ld, null, /* @__PURE__ */ E.createElement(
    "button",
    {
      "aria-controls": h,
      "aria-expanded": A,
      "aria-label": A ? _ : y,
      className: "bg-transparent border-none p-0 cursor-pointer flex gap-2 items-center rounded-sm",
      onClick: R
    },
    /* @__PURE__ */ E.createElement(Jv, { className: Zk({ isExpanded: A }) }),
    /* @__PURE__ */ E.createElement(
      Ar,
      {
        className: "text-content-highlight align-middle",
        fontWeight: "bold",
        size: "large"
      },
      A ? k : w
    )
  )));
}, eb = (e) => {
  if (O.isValidElement(e)) {
    if (e.type === e3)
      return !0;
    const n = e.props;
    if (n.children)
      return O.Children.toArray(n.children).some(eb);
  }
  return !1;
}, t3 = {
  large: "medium",
  medium: "small",
  small: "x-small",
  "x-small": "x-small"
}, r3 = ({
  as: e,
  bodySlot: n,
  bodyText: a,
  className: i,
  contained: s,
  disabled: c,
  emphasis: u = "none",
  fontWeight: f = "normal",
  isNested: m = !1,
  label: p,
  leadingIcon: v,
  leadingIconSwap: b = !1,
  leadingSlot: h,
  longform: w,
  onClick: k,
  onKeyDown: y,
  pretitle: _,
  secondaryLabel: A,
  size: z = "small",
  title: U,
  trailingIcon: W,
  trailingSlot: Q,
  type: Y,
  ...K
}) => {
  const X = O.useMemo(() => n ? E.Children.toArray(n).some(eb) : !1, [n]);
  s || (u = "none");
  const ee = !w, ie = k && !c, { pressProps: ae } = Zl({
    isDisabled: c,
    onPress: k
  }), { keyboardProps: S } = $v({
    onKeyDown: y
  }), R = e ?? (k ? "button" : "div"), C = Object.hasOwn(K, "role"), j = O.useMemo(() => {
    let L = "listitem";
    e === "a" || e === "li" || e === Ik ? L = void 0 : k && (L = "button");
    const T = C ? K.role : L;
    return {
      ...k ? ae : {},
      ...y ? S : {},
      "aria-disabled": c,
      "aria-label": T ? U : void 0,
      disabled: c,
      role: T
    };
  }, [
    e,
    k,
    y,
    c,
    C,
    K.role,
    U,
    ae,
    S
  ]);
  return /* @__PURE__ */ E.createElement(Ld, { focusRingClass: "rounded-[8px]" }, /* @__PURE__ */ E.createElement(
    R,
    {
      className: Mk({
        class: i,
        contained: s,
        disabled: c,
        emphasis: u,
        isButton: R === "button",
        isInteractive: ie,
        isNested: m,
        longform: w,
        size: z,
        type: Y
      }),
      ...j,
      ...K
    },
    (v ?? h) && /* @__PURE__ */ E.createElement(
      "div",
      {
        className: Lk({
          hasNestedList: X,
          longform: w,
          size: z,
          type: Y
        })
      },
      b ? /* @__PURE__ */ E.createElement(E.Fragment, null, h && /* @__PURE__ */ E.createElement(
        "div",
        {
          className: "flex items-center",
          "data-testid": Se(
            "@paloma-list-item-leading-slot-id"
          )
        },
        h
      ), v && /* @__PURE__ */ E.createElement(
        "div",
        {
          className: "flex items-center",
          "data-testid": Se(
            "@paloma-list-item-leading-icon-id"
          )
        },
        Lo({ size: z }, v)
      )) : /* @__PURE__ */ E.createElement(E.Fragment, null, v && /* @__PURE__ */ E.createElement(
        "div",
        {
          className: "flex items-center",
          "data-testid": Se(
            "@paloma-list-item-leading-icon-id"
          )
        },
        Lo({ size: z }, v)
      ), h && /* @__PURE__ */ E.createElement(
        "div",
        {
          className: "flex items-center",
          "data-testid": Se(
            "@paloma-list-item-leading-slot-id"
          )
        },
        h
      ))
    ),
    /* @__PURE__ */ E.createElement(
      "div",
      {
        className: Rk({
          hasNestedList: X,
          size: z,
          truncate: ee,
          type: Y
        })
      },
      _ != null && typeof _ != "boolean" && (E.isValidElement(_) ? /* @__PURE__ */ E.createElement(
        "span",
        {
          className: jk({ truncate: ee }),
          "data-testid": Se("@paloma-list-item-pretitle-id")
        },
        _
      ) : /* @__PURE__ */ E.createElement(
        Ar,
        {
          "data-testid": Se("@paloma-list-item-pretitle-id"),
          size: "x-small",
          truncate: ee,
          variant: "body"
        },
        _
      )),
      /* @__PURE__ */ E.createElement("div", { className: "flex justify-between items-center gap-2" }, /* @__PURE__ */ E.createElement(
        Ar,
        {
          className: "text-content-neutral-bold",
          fontWeight: f,
          size: z,
          truncate: ee,
          variant: "body"
        },
        U
      ), p && /* @__PURE__ */ E.createElement(
        Ar,
        {
          className: "text-content-neutral-subtle",
          "data-testid": Se("@paloma-list-item-label-id"),
          size: "x-small",
          truncate: ee,
          variant: "body"
        },
        p
      )),
      (a ?? A) && /* @__PURE__ */ E.createElement("div", { className: Ok({ size: z }) }, a && /* @__PURE__ */ E.createElement(
        "div",
        {
          className: "flex justify-between items-center",
          "data-testid": Se("@paloma-list-item-body-text-id")
        },
        /* @__PURE__ */ E.createElement(
          Ar,
          {
            className: "text-content-neutral-regular font-variant-none",
            size: t3[z],
            truncate: ee,
            variant: "body"
          },
          a
        )
      ), A && /* @__PURE__ */ E.createElement(
        "div",
        {
          className: "flex flex-row w-full items-start",
          "data-testid": Se(
            "@paloma-list-item-secondary-label-id"
          )
        },
        /* @__PURE__ */ E.createElement(
          Ar,
          {
            className: "text-content-neutral-subtle justify-self-end",
            size: "x-small",
            truncate: ee,
            variant: "body"
          },
          A
        )
      )),
      n && // Important: For nested lists, do not wrap in additional div
      (X ? n : /* @__PURE__ */ E.createElement(
        "div",
        {
          className: Vk({
            leadingSlot: !!h,
            size: z
          }),
          "data-testid": Se("@paloma-list-item-body-slot-id")
        },
        n
      ))
    ),
    (W ?? Q) && /* @__PURE__ */ E.createElement(
      "div",
      {
        className: Dk({
          longform: w,
          size: z
        })
      },
      Q && /* @__PURE__ */ E.createElement(
        "div",
        {
          "aria-hidden": !0,
          className: "flex items-center",
          "data-testid": Se(
            "@paloma-list-item-trailing-slot-id"
          )
        },
        Q
      ),
      W && /* @__PURE__ */ E.createElement(
        "div",
        {
          "aria-hidden": !0,
          className: "flex items-center",
          "data-testid": Se(
            "@paloma-list-item-trailing-icon-id"
          )
        },
        Lo({ size: z }, W)
      )
    )
  ));
};
const tb = (e) => G.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: G.jsx("path", { d: "M12.2929 3.29291L21 12L12.2929 20.7071L10.8787 19.2929L17.1716 13H4V11H17.1716L10.8787 4.70712L12.2929 3.29291Z" }) }), n3 = ({ children: e, containerClassName: n, emphasis: a, shape: i, size: s }) => {
  const c = typeof s == "number", u = c ? {
    height: s,
    padding: s / 2,
    width: s
  } : void 0, f = c ? void 0 : s;
  return G.jsx("div", { className: tr({
    class: n,
    emphasis: a,
    shape: i,
    size: f
  }), "data-testid": "@paloma-icons-contained-id", style: u, children: e });
}, a3 = ({ "aria-label": e, className: n, color: a, contained: i, containerClassName: s, emphasis: c = "regular", shape: u = "circle", size: f = "medium", svgClassName: m, ...p }) => {
  const v = !e, b = typeof f == "number", h = b ? { height: f, width: f } : void 0, w = b ? void 0 : f, k = i ? n3 : O.Fragment, y = i ? { containerClassName: s, emphasis: c, shape: u, size: f } : {};
  return G.jsx(k, { ...y, children: G.jsx("span", { ...p, className: Nr({ class: n, size: w }), "data-namespace": "@paloma/icons", "data-size": f, id: "arrow-right-id", style: { color: a, ...h }, children: G.jsx(tb, { "aria-hidden": v, "aria-label": e, className: er({ class: m, size: w }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "arrow-right-svg-id", style: { fill: o3, ...h } }) }) });
}, o3 = "currentColor";
function rb(e, n, a) {
  try {
    const s = E.Children.only(e);
    if (s.type === n)
      return a ? a(s, s == null ? void 0 : s.props) : e;
  } catch {
  }
  return null;
}
var i3 = (e) => e ? !!e.type.toString().match(l3) : !1, l3 = /"data-namespace":\s?"@paloma\/icons"/i;
function Yu(e, n) {
  if (!n)
    return null;
  const a = E.Children.only(n);
  return E.cloneElement(a, { ...e });
}
var s3 = oe({
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
}), c3 = "span", ba = O.forwardRef(
  ({
    as: e,
    children: n,
    className: a,
    fontWeight: i = "normal",
    showTitle: s = !1,
    size: c,
    truncate: u = !1,
    underline: f = !1,
    variant: m,
    ...p
  }, v) => {
    const b = e ?? c3, [h, w] = O.useMemo(() => m === "heading" ? [c ?? "large", m] : [c ?? "medium", "body"], [c, m]);
    return /* @__PURE__ */ E.createElement(
      b,
      {
        className: s3({
          className: a,
          fontWeight: i,
          truncate: u,
          underline: f,
          [w]: h
        }),
        "data-font-weight": i,
        "data-size": h,
        "data-truncate": u,
        "data-underline": f,
        "data-variant": w,
        ref: v,
        title: s ? p.title ?? (u && typeof n == "string" ? n : void 0) : void 0,
        ...p
      },
      n
    );
  }
), yu = (e, n = {}) => {
  if (typeof e == "string")
    return /* @__PURE__ */ E.createElement(ba, { ...n }, e);
  if (rb(e, ba)) {
    const a = {
      ...n ?? {},
      ...e.props
    };
    return /* @__PURE__ */ E.createElement(ba, { ...a });
  }
  if (E.isValidElement(e) && typeof e.type == "string") {
    const a = {};
    e.type === "a" && (a.color = "#0000EE", a.textDecoration = "underline");
    const i = e.props, s = {
      ...a,
      ...n.style,
      ...i.style
    };
    return E.cloneElement(
      e,
      {
        style: s
      }
    );
  }
  return e;
}, jd = {
  "bottom-center": "",
  "bottom-left": "",
  "bottom-right": "",
  "top-center": "",
  "top-left": "",
  "top-right": ""
}, Od = {
  circle: "",
  square: ""
}, wu = {
  false: "",
  true: ""
}, nb = {
  avatar: "",
  dot: "",
  icon: "",
  product: "",
  text: ""
}, u3 = {
  negative: "",
  none: "",
  positive: "",
  warning: ""
}, d3 = {
  highlight: "",
  neutral: ""
}, f3 = {
  small: "",
  "x-small": ""
}, p3 = oe({
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
    position: jd,
    shape: Od,
    standalone: {
      false: "@paloma-badge-rotation-relative absolute"
    }
  }
}), m3 = oe({
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
    position: jd,
    shape: Od,
    standalone: {
      false: "@paloma-badge-position-relative absolute z-10"
    },
    variant: nb
  }
}), g3 = oe({
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
    position: jd,
    shape: Od,
    standalone: {
      false: "max-w-[80px]",
      true: ""
    }
  }
}), h3 = oe({
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
    appearance: d3,
    emphasis: {
      bold: "@paloma-badge-content-bold text-content-inverse-bold",
      subtle: "@paloma-badge-content-subtle text-content-neutral-bold"
    },
    hasIcon: wu,
    hasProductLogo: wu,
    isLabelSingleCharacter: wu,
    size: f3,
    status: u3,
    variant: nb
  }
}), v3 = oe({
  base: "@paloma-badge-container relative w-fit"
}), b3 = ({
  appearance: e = "neutral",
  "aria-label": n,
  avatar: a,
  children: i,
  className: s,
  containerClassName: c,
  cutoutBorder: u = !0,
  cutoutColor: f,
  emphasis: m = "subtle",
  icon: p,
  label: v,
  position: b,
  productLogo: h,
  shape: w = "square",
  size: k = "small",
  standalone: y = !1,
  status: _ = "none",
  variant: A,
  ...z
}) => {
  A || (A = v ? "text" : p ?? a ?? h ? "icon" : "dot"), (A === "avatar" || A === "product") && (A = "icon");
  const U = () => {
    if (v)
      return /* @__PURE__ */ E.createElement(
        ba,
        {
          "data-testid": "@paloma-badge-label-id",
          size: k,
          truncate: !0,
          variant: "body"
        },
        v
      );
  }, W = () => {
    if (p)
      return Yu(
        {
          "data-testid": "@paloma-badge-icon-id",
          size: "small"
        },
        p
      );
  }, Q = () => {
    if (a)
      return E.cloneElement(a, {
        ...a.props,
        "aria-label": a.props["aria-label"] ?? n ?? v,
        badge: void 0,
        size: k === "small" ? "x-small" : "xx-small"
      });
  }, Y = () => {
    if (h)
      return E.cloneElement(
        h,
        {
          ...h.props,
          contained: !0,
          size: k === "small" ? "x-small" : "2x-small"
        }
      );
  }, K = () => {
    if (A !== "dot")
      return /* @__PURE__ */ E.createElement(E.Fragment, null, W(), U(), Q(), Y());
  }, X = b == null ? void 0 : b.split("-"), ee = !!(v && v.length === 1), ie = ee && !p, ae = (S) => /* @__PURE__ */ E.createElement(
    "div",
    {
      className: p3({
        class: y ? c : "",
        position: b,
        shape: w,
        standalone: y
      }),
      "data-appearance": e,
      "data-content-single-element": ie,
      "data-cutout-border": u,
      "data-emphasis": m,
      "data-shape": w,
      "data-size": k,
      "data-status": _,
      "data-testid": "@paloma-badge-rotation-id",
      "data-variant": A,
      ...y ? S : {}
    },
    /* @__PURE__ */ E.createElement(
      "div",
      {
        className: m3({
          position: b,
          shape: w,
          standalone: y,
          variant: A
        }),
        "data-position-x": X == null ? void 0 : X[1],
        "data-position-y": X == null ? void 0 : X[0],
        "data-shape": w,
        "data-testid": "@paloma-badge-position-id"
      },
      /* @__PURE__ */ E.createElement(
        "div",
        {
          className: g3({
            cutoutBorder: u,
            hasProductLogo: !!h,
            position: b,
            shape: w,
            standalone: y
          }),
          "data-testid": "@paloma-badge-border-id",
          style: f ? { borderColor: f } : void 0
        },
        /* @__PURE__ */ E.createElement(
          "div",
          {
            "aria-label": n,
            className: h3({
              appearance: e,
              class: s,
              emphasis: m,
              hasIcon: !!p,
              hasProductLogo: !!h,
              isLabelSingleCharacter: ee,
              size: k,
              status: _,
              variant: A
            }),
            "data-testid": "@paloma-badge-content-id",
            role: A !== "dot" ? "status" : void 0
          },
          K()
        )
      )
    )
  );
  return y ? /* @__PURE__ */ E.createElement(ae, { ...z }) : /* @__PURE__ */ E.createElement(
    "div",
    {
      className: v3({ class: c }),
      "data-testid": "@paloma-badge-container-id",
      ...z
    },
    i,
    /* @__PURE__ */ E.createElement(ae, null)
  );
}, y3 = oe({
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
}), w3 = oe({
  base: "object-cover",
  extend: y3,
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
}), x3 = ({
  alt: e,
  as: n,
  className: a,
  loading: i,
  ratio: s,
  size: c,
  sizes: u,
  src: f,
  srcSet: m,
  style: p,
  ...v
}) => {
  const b = ri("img"), h = n ?? b;
  lt(
    typeof e == "string",
    "@paloma/Image requires an alt prop to be passed. Use an empty string (alt='') for decorative images or provide descriptive text for informative images."
  ), lt(
    !(m && !u),
    "Image: srcSet was provided without sizes. This may lead to unexpected behavior."
  );
  const w = { height: c, width: c };
  return /* @__PURE__ */ E.createElement(
    h,
    {
      alt: e,
      className: w3({
        class: a,
        ratio: s,
        size: typeof c == "string" ? c : void 0
      }),
      loading: i,
      sizes: u,
      src: f,
      srcSet: m,
      style: { ...w, ...p },
      ...v
    }
  );
}, k3 = [
  /* Uses a dummy class because FocusRing is a functional component that just adds
      the class to the content.
  
      The cn or other style functions on the FocusRing are always called, so we can't
      listen to them to test functionality */
  "@paloma-focus-ring",
  "outline",
  "outline-2",
  "outline-offset-2",
  "outline-interactive-highlight"
], _3 = ({
  children: e,
  disabled: n,
  focusRingClass: a,
  ...i
}) => n ? e : /* @__PURE__ */ E.createElement(dr, { focusRingClass: Bt(k3, a), ...i }, e), E3 = oe({
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
}), Ug = oe({
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
}), S3 = oe({
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
}), C3 = oe({
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
}), z3 = oe({
  base: "w-full",
  variants: {
    orientation: {
      horizontal: "rounded-lg",
      vertical: "rounded-xl"
    }
  }
}), $3 = oe({
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
}), P3 = oe({
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
}), A3 = oe({
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
}), F3 = oe({
  base: "w-full flex flex-col gap-2 items-center md:[&[data-trailing-bottom=true]]:items-end [&>button]:w-full md:[&>button]:w-auto"
}), ab = ({
  action: e,
  actionIcon: n,
  badgeAriaLabel: a,
  badgeLabel: i,
  body: s,
  className: c,
  contained: u,
  contentSlot: f,
  disabled: m = !1,
  emphasis: p = "bold",
  eyebrow: v,
  media: b,
  meta: h,
  metaSlot: w,
  onClick: k,
  orientation: y = "vertical",
  size: _ = "large",
  title: A,
  titleTag: z = "div",
  trailingSlot: U,
  trailingSlotBottom: W = !1,
  truncateBody: Q = "none",
  truncateTitle: Y,
  variant: K = "base",
  ...X
}) => {
  const ee = y === "vertical", ie = K === "condensed", ae = !!U, S = !!A || !!h || !!s || !!e, R = S || ae, { pressProps: C } = Zl({
    isDisabled: m,
    onPress: k
  }), j = k ? "button" : "div", L = k ? Je(C, {
    "aria-disabled": m,
    disabled: m
  }) : {}, T = E.cloneElement(b, {
    className: z3({
      class: b.props.className,
      orientation: y
    })
  }), I = () => i ? typeof i == "string" ? /* @__PURE__ */ E.createElement(
    "div",
    {
      className: "absolute bottom-2 left-1/2 -translate-x-1/2",
      "data-testid": "@paloma-media-card-badge-id"
    },
    /* @__PURE__ */ E.createElement(
      b3,
      {
        appearance: "neutral",
        "aria-label": a,
        emphasis: "bold",
        label: i,
        size: "small",
        standalone: !0
      }
    )
  ) : i : null, F = () => /* @__PURE__ */ E.createElement(
    "div",
    {
      className: C3({
        isCondensed: ie,
        isVertical: ee,
        trailingSlotBottom: !!W
      })
    },
    I(),
    rb(T, x3) ? E.cloneElement(T, {
      ratio: ie ? "1:1" : "16:9"
    }) : T
  ), V = () => e ? /* @__PURE__ */ E.createElement(
    "div",
    {
      className: "flex flex-row justify-between items-center pt-2 mt-auto",
      "data-testid": "@paloma-media-card-action-id"
    },
    /* @__PURE__ */ E.createElement(
      ba,
      {
        className: "text-content-highlight",
        fontWeight: "bold",
        size: "small",
        variant: "body"
      },
      e
    ),
    n ? Yu(
      {
        contained: !0,
        containerClassName: "leading-none",
        size: "x-small"
      },
      n
    ) : /* @__PURE__ */ E.createElement(a3, { contained: !0, size: "x-small" })
  ) : null, $ = () => h ? /* @__PURE__ */ E.createElement(
    "div",
    {
      className: "flex flex-row gap-1 items-center",
      "data-testid": "@paloma-media-card-meta-id"
    },
    w && (i3(w) ? Yu({ size: "x-small" }, w) : w),
    /* @__PURE__ */ E.createElement(
      ba,
      {
        className: "text-content-neutral-subtle",
        fontWeight: "bold",
        size: "x-small",
        variant: "body"
      },
      h
    )
  ) : null, D = () => S ? /* @__PURE__ */ E.createElement(
    "div",
    {
      className: $3({
        contained: u,
        isCondensed: ie,
        isVertical: ee
      }),
      "data-testid": "@paloma-media-card-content-id"
    },
    v && yu(v, {
      size: "x-small",
      variant: "body"
    }),
    A && yu(A, {
      as: z,
      className: S3({
        headingSize: z,
        truncateTitle: Y
      }),
      fontWeight: p === "regular" ? "normal" : p,
      ...z === "div" && { size: _ },
      variant: "body"
    }),
    $(),
    s && yu(s, {
      className: P3({
        truncateBody: Q
      }),
      size: "small",
      variant: "body"
    }),
    f,
    V()
  ) : null, me = () => U ? W ? /* @__PURE__ */ E.createElement(
    "div",
    {
      className: F3(),
      "data-trailing-bottom": !!W
    },
    U
  ) : /* @__PURE__ */ E.createElement(
    "div",
    {
      className: A3({ isVertical: ee }),
      "data-trailing-slot-bottom": !1
    },
    U
  ) : null;
  return /* @__PURE__ */ E.createElement(_3, { focusRingClass: "rounded-xl" }, /* @__PURE__ */ E.createElement(
    j,
    {
      className: E3({
        class: c,
        contained: u,
        isButton: !!k && !m,
        isVertical: ee,
        trailingSlotBottom: !!W,
        withTrailingSlot: ae
      }),
      "data-trailing-bottom": !!W,
      ...Je(L, X)
    },
    W ? /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("div", { className: "flex w-full" }, F(), R && /* @__PURE__ */ E.createElement(
      "div",
      {
        className: Ug({
          isCondensed: ie,
          isVertical: ee,
          trailingSlotBottom: !1,
          withTrailingSlot: !1
        })
      },
      D()
    )), me()) : /* @__PURE__ */ E.createElement(E.Fragment, null, F(), R && /* @__PURE__ */ E.createElement(
      "div",
      {
        className: Ug({
          isCondensed: ie,
          isVertical: ee,
          trailingSlotBottom: !!W,
          withTrailingSlot: ae
        })
      },
      D(),
      me()
    ))
  ));
};
const T3 = "https://help.ea.com/_images/seegk6e7ypwi/7jN3C28fdJbwCiVBApxgDe/cadaf9fe8310b4fcc71fae54edd40810/apex-legends-box-art-image.webp", N3 = [
  ["SimsArchitect_Maya", "2,847 Contributions"],
  ["ProPlayerKJ", "1,523 Contributions"],
  ["NightOwlGaming", "4,106 Contributions"],
  ["CasualCrafter", "4,106 Contributions"],
  ["Casual Crafter", "4,106 Contributions"]
];
function I3() {
  return /* @__PURE__ */ G.jsxs("aside", { className: "community-sidebar", children: [
    /* @__PURE__ */ G.jsx(
      ab,
      {
        className: "community-sidebar__hero",
        contained: !0,
        eyebrow: "Apex Legends Forums",
        title: "Contribute a post on the Apex Legends Forums",
        body: "Reward Exclusive Badge",
        media: /* @__PURE__ */ G.jsx("img", { src: T3, alt: "Apex Legends" }),
        action: "Accept Quest",
        onClick: () => window.location.assign("/latest"),
        titleTag: "h3"
      }
    ),
    /* @__PURE__ */ G.jsxs("section", { className: "community-sidebar__panel", children: [
      /* @__PURE__ */ G.jsxs("div", { className: "community-sidebar__panel-header", children: [
        /* @__PURE__ */ G.jsx("h2", { children: "Community Heroes" }),
        /* @__PURE__ */ G.jsx(
          Nd,
          {
            iconOnly: !0,
            "aria-label": "View community heroes",
            size: "x-small",
            variant: "secondary",
            children: "+"
          }
        )
      ] }),
      /* @__PURE__ */ G.jsx("div", { className: "community-sidebar__members", role: "list", children: N3.map(([e, n]) => /* @__PURE__ */ G.jsx(
        r3,
        {
          className: "community-sidebar__member",
          title: e,
          bodyText: n,
          size: "small",
          leadingSlot: /* @__PURE__ */ G.jsx(xk, { label: e.slice(0, 2), size: "small", authenticated: !0 })
        },
        e
      )) })
    ] })
  ] });
}
var Vd = ai(), we = (e) => ni(e, Vd), Dd = ai();
we.write = (e) => ni(e, Dd);
var Jl = ai();
we.onStart = (e) => ni(e, Jl);
var Bd = ai();
we.onFrame = (e) => ni(e, Bd);
var Ud = ai();
we.onFinish = (e) => ni(e, Ud);
var ya = [];
we.setTimeout = (e, n) => {
  const a = we.now() + n, i = () => {
    const c = ya.findIndex((u) => u.cancel == i);
    ~c && ya.splice(c, 1), cn -= ~c ? 1 : 0;
  }, s = { time: a, handler: e, cancel: i };
  return ya.splice(ob(a), 0, s), cn += 1, ib(), s;
};
var ob = (e) => ~(~ya.findIndex((n) => n.time > e) || ~ya.length);
we.cancel = (e) => {
  Jl.delete(e), Bd.delete(e), Ud.delete(e), Vd.delete(e), Dd.delete(e);
};
we.sync = (e) => {
  Qu = !0, we.batchedUpdates(e), Qu = !1;
};
we.throttle = (e) => {
  let n;
  function a() {
    try {
      e(...n);
    } finally {
      n = null;
    }
  }
  function i(...s) {
    n = s, we.onStart(a);
  }
  return i.handler = e, i.cancel = () => {
    Jl.delete(a), n = null;
  }, i;
};
var Hd = typeof window < "u" ? window.requestAnimationFrame : (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  (() => {
  })
);
we.use = (e) => Hd = e;
we.now = typeof performance < "u" ? () => performance.now() : Date.now;
we.batchedUpdates = (e) => e();
we.catch = console.error;
we.frameLoop = "always";
we.advance = () => {
  we.frameLoop !== "demand" ? console.warn(
    "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
  ) : sb();
};
var sn = -1, cn = 0, Qu = !1;
function ni(e, n) {
  Qu ? (n.delete(e), e(0)) : (n.add(e), ib());
}
function ib() {
  sn < 0 && (sn = 0, we.frameLoop !== "demand" && Hd(lb));
}
function M3() {
  sn = -1;
}
function lb() {
  ~sn && (Hd(lb), we.batchedUpdates(sb));
}
function sb() {
  const e = sn;
  sn = we.now();
  const n = ob(sn);
  if (n && (cb(ya.splice(0, n), (a) => a.handler()), cn -= n), !cn) {
    M3();
    return;
  }
  Jl.flush(), Vd.flush(e ? Math.min(64, sn - e) : 16.667), Bd.flush(), Dd.flush(), Ud.flush();
}
function ai() {
  let e = /* @__PURE__ */ new Set(), n = e;
  return {
    add(a) {
      cn += n == e && !e.has(a) ? 1 : 0, e.add(a);
    },
    delete(a) {
      return cn -= n == e && e.has(a) ? 1 : 0, e.delete(a);
    },
    flush(a) {
      n.size && (e = /* @__PURE__ */ new Set(), cn -= n.size, cb(n, (i) => i(a) && e.add(i)), cn += e.size, n = e);
    }
  };
}
function cb(e, n) {
  e.forEach((a) => {
    try {
      n(a);
    } catch (i) {
      we.catch(i);
    }
  });
}
var L3 = Object.defineProperty, R3 = (e, n) => {
  for (var a in n)
    L3(e, a, { get: n[a], enumerable: !0 });
}, Jt = {};
R3(Jt, {
  assign: () => O3,
  colors: () => un,
  createStringInterpolator: () => qd,
  skipAnimation: () => db,
  to: () => ub,
  willAdvance: () => Gd
});
function Xu() {
}
var j3 = (e, n, a) => Object.defineProperty(e, n, { value: a, writable: !0, configurable: !0 }), ne = {
  arr: Array.isArray,
  obj: (e) => !!e && e.constructor.name === "Object",
  fun: (e) => typeof e == "function",
  str: (e) => typeof e == "string",
  num: (e) => typeof e == "number",
  und: (e) => e === void 0
};
function zr(e, n) {
  if (ne.arr(e)) {
    if (!ne.arr(n) || e.length !== n.length)
      return !1;
    for (let a = 0; a < e.length; a++)
      if (e[a] !== n[a])
        return !1;
    return !0;
  }
  return e === n;
}
var $e = (e, n) => e.forEach(n);
function ur(e, n, a) {
  if (ne.arr(e)) {
    for (let i = 0; i < e.length; i++)
      n.call(a, e[i], `${i}`);
    return;
  }
  for (const i in e)
    e.hasOwnProperty(i) && n.call(a, e[i], i);
}
var Tt = (e) => ne.und(e) ? [] : ne.arr(e) ? e : [e];
function Ro(e, n) {
  if (e.size) {
    const a = Array.from(e);
    e.clear(), $e(a, n);
  }
}
var To = (e, ...n) => Ro(e, (a) => a(...n)), Wd = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), qd, ub, un = null, db = !1, Gd = Xu, O3 = (e) => {
  e.to && (ub = e.to), e.now && (we.now = e.now), e.colors !== void 0 && (un = e.colors), e.skipAnimation != null && (db = e.skipAnimation), e.createStringInterpolator && (qd = e.createStringInterpolator), e.requestAnimationFrame && we.use(e.requestAnimationFrame), e.batchedUpdates && (we.batchedUpdates = e.batchedUpdates), e.willAdvance && (Gd = e.willAdvance), e.frameLoop && (we.frameLoop = e.frameLoop);
}, jo = /* @__PURE__ */ new Set(), Dt = [], xu = [], Hl = 0, es = {
  get idle() {
    return !jo.size && !Dt.length;
  },
  /** Advance the given animation on every frame until idle. */
  start(e) {
    Hl > e.priority ? (jo.add(e), we.onStart(V3)) : (fb(e), we(Zu));
  },
  /** Advance all animations by the given time. */
  advance: Zu,
  /** Call this when an animation's priority changes. */
  sort(e) {
    if (Hl)
      we.onFrame(() => es.sort(e));
    else {
      const n = Dt.indexOf(e);
      ~n && (Dt.splice(n, 1), pb(e));
    }
  },
  /**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */
  clear() {
    Dt = [], jo.clear();
  }
};
function V3() {
  jo.forEach(fb), jo.clear(), we(Zu);
}
function fb(e) {
  Dt.includes(e) || pb(e);
}
function pb(e) {
  Dt.splice(
    D3(Dt, (n) => n.priority > e.priority),
    0,
    e
  );
}
function Zu(e) {
  const n = xu;
  for (let a = 0; a < Dt.length; a++) {
    const i = Dt[a];
    Hl = i.priority, i.idle || (Gd(i), i.advance(e), i.idle || n.push(i));
  }
  return Hl = 0, xu = Dt, xu.length = 0, Dt = n, Dt.length > 0;
}
function D3(e, n) {
  const a = e.findIndex(n);
  return a < 0 ? e.length : a;
}
var B3 = {
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
}, Zt = "[-+]?\\d*\\.?\\d+", Wl = Zt + "%";
function ts(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var U3 = new RegExp("rgb" + ts(Zt, Zt, Zt)), H3 = new RegExp("rgba" + ts(Zt, Zt, Zt, Zt)), W3 = new RegExp("hsl" + ts(Zt, Wl, Wl)), q3 = new RegExp(
  "hsla" + ts(Zt, Wl, Wl, Zt)
), G3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, K3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Y3 = /^#([0-9a-fA-F]{6})$/, Q3 = /^#([0-9a-fA-F]{8})$/;
function X3(e) {
  let n;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (n = Y3.exec(e)) ? parseInt(n[1] + "ff", 16) >>> 0 : un && un[e] !== void 0 ? un[e] : (n = U3.exec(e)) ? (fa(n[1]) << 24 | // r
  fa(n[2]) << 16 | // g
  fa(n[3]) << 8 | // b
  255) >>> // a
  0 : (n = H3.exec(e)) ? (fa(n[1]) << 24 | // r
  fa(n[2]) << 16 | // g
  fa(n[3]) << 8 | // b
  qg(n[4])) >>> // a
  0 : (n = G3.exec(e)) ? parseInt(
    n[1] + n[1] + // r
    n[2] + n[2] + // g
    n[3] + n[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (n = Q3.exec(e)) ? parseInt(n[1], 16) >>> 0 : (n = K3.exec(e)) ? parseInt(
    n[1] + n[1] + // r
    n[2] + n[2] + // g
    n[3] + n[3] + // b
    n[4] + n[4],
    // a
    16
  ) >>> 0 : (n = W3.exec(e)) ? (Hg(
    Wg(n[1]),
    // h
    El(n[2]),
    // s
    El(n[3])
    // l
  ) | 255) >>> // a
  0 : (n = q3.exec(e)) ? (Hg(
    Wg(n[1]),
    // h
    El(n[2]),
    // s
    El(n[3])
    // l
  ) | qg(n[4])) >>> // a
  0 : null;
}
function ku(e, n, a) {
  return a < 0 && (a += 1), a > 1 && (a -= 1), a < 1 / 6 ? e + (n - e) * 6 * a : a < 1 / 2 ? n : a < 2 / 3 ? e + (n - e) * (2 / 3 - a) * 6 : e;
}
function Hg(e, n, a) {
  const i = a < 0.5 ? a * (1 + n) : a + n - a * n, s = 2 * a - i, c = ku(s, i, e + 1 / 3), u = ku(s, i, e), f = ku(s, i, e - 1 / 3);
  return Math.round(c * 255) << 24 | Math.round(u * 255) << 16 | Math.round(f * 255) << 8;
}
function fa(e) {
  const n = parseInt(e, 10);
  return n < 0 ? 0 : n > 255 ? 255 : n;
}
function Wg(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function qg(e) {
  const n = parseFloat(e);
  return n < 0 ? 0 : n > 1 ? 255 : Math.round(n * 255);
}
function El(e) {
  const n = parseFloat(e);
  return n < 0 ? 0 : n > 100 ? 1 : n / 100;
}
function Gg(e) {
  let n = X3(e);
  if (n === null)
    return e;
  n = n || 0;
  const a = (n & 4278190080) >>> 24, i = (n & 16711680) >>> 16, s = (n & 65280) >>> 8, c = (n & 255) / 255;
  return `rgba(${a}, ${i}, ${s}, ${c})`;
}
var Ho = (e, n, a) => {
  if (ne.fun(e))
    return e;
  if (ne.arr(e))
    return Ho({
      range: e,
      output: n,
      extrapolate: a
    });
  if (ne.str(e.output[0]))
    return qd(e);
  const i = e, s = i.output, c = i.range || [0, 1], u = i.extrapolateLeft || i.extrapolate || "extend", f = i.extrapolateRight || i.extrapolate || "extend", m = i.easing || ((p) => p);
  return (p) => {
    const v = J3(p, c);
    return Z3(
      p,
      c[v],
      c[v + 1],
      s[v],
      s[v + 1],
      m,
      u,
      f,
      i.map
    );
  };
};
function Z3(e, n, a, i, s, c, u, f, m) {
  let p = m ? m(e) : e;
  if (p < n) {
    if (u === "identity")
      return p;
    u === "clamp" && (p = n);
  }
  if (p > a) {
    if (f === "identity")
      return p;
    f === "clamp" && (p = a);
  }
  return i === s ? i : n === a ? e <= n ? i : s : (n === -1 / 0 ? p = -p : a === 1 / 0 ? p = p - n : p = (p - n) / (a - n), p = c(p), i === -1 / 0 ? p = -p : s === 1 / 0 ? p = p + i : p = p * (s - i) + i, p);
}
function J3(e, n) {
  for (var a = 1; a < n.length - 1 && !(n[a] >= e); ++a)
    ;
  return a - 1;
}
var mb = {
  linear: (e) => e,
  easeInOutCubic: (e) => e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2
}, Wo = Symbol.for("FluidValue.get"), _a = Symbol.for("FluidValue.observers"), Ot = (e) => !!(e && e[Wo]), zt = (e) => e && e[Wo] ? e[Wo]() : e, Kg = (e) => e[_a] || null;
function e4(e, n) {
  e.eventObserved ? e.eventObserved(n) : e(n);
}
function qo(e, n) {
  const a = e[_a];
  a && a.forEach((i) => {
    e4(i, n);
  });
}
var gb = class {
  constructor(e) {
    if (!e && !(e = this.get))
      throw Error("Unknown getter");
    t4(this, e);
  }
}, t4 = (e, n) => hb(e, Wo, n);
function $a(e, n) {
  if (e[Wo]) {
    let a = e[_a];
    a || hb(e, _a, a = /* @__PURE__ */ new Set()), a.has(n) || (a.add(n), e.observerAdded && e.observerAdded(a.size, n));
  }
  return n;
}
function Go(e, n) {
  const a = e[_a];
  if (a && a.has(n)) {
    const i = a.size - 1;
    i ? a.delete(n) : e[_a] = null, e.observerRemoved && e.observerRemoved(i, n);
  }
}
var hb = (e, n, a) => Object.defineProperty(e, n, {
  value: a,
  writable: !0,
  configurable: !0
}), Ml = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, r4 = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, Yg = new RegExp(`(${Ml.source})(%|[a-z]+)`, "i"), n4 = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, rs = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, vb = (e) => {
  const [n, a] = a4(e);
  if (!n || Wd())
    return e;
  const i = window.getComputedStyle(document.documentElement).getPropertyValue(n);
  if (i)
    return i.trim();
  if (a && a.startsWith("--")) {
    const s = window.getComputedStyle(document.documentElement).getPropertyValue(a);
    return s || e;
  } else {
    if (a && rs.test(a))
      return vb(a);
    if (a)
      return a;
  }
  return e;
}, a4 = (e) => {
  const n = rs.exec(e);
  if (!n)
    return [,];
  const [, a, i] = n;
  return [a, i];
}, _u, o4 = (e, n, a, i, s) => `rgba(${Math.round(n)}, ${Math.round(a)}, ${Math.round(i)}, ${s})`, bb = (e) => {
  _u || (_u = un ? (
    // match color names, ignore partial matches
    new RegExp(`(${Object.keys(un).join("|")})(?!\\w)`, "g")
  ) : (
    // never match
    /^\b$/
  ));
  const n = e.output.map((c) => zt(c).replace(rs, vb).replace(r4, Gg).replace(_u, Gg)), a = n.map((c) => c.match(Ml).map(Number)), s = a[0].map(
    (c, u) => a.map((f) => {
      if (!(u in f))
        throw Error('The arity of each "output" value must be equal');
      return f[u];
    })
  ).map(
    (c) => Ho({ ...e, output: c })
  );
  return (c) => {
    var m;
    const u = !Yg.test(n[0]) && ((m = n.find((p) => Yg.test(p))) == null ? void 0 : m.replace(Ml, ""));
    let f = 0;
    return n[0].replace(
      Ml,
      () => `${s[f++](c)}${u || ""}`
    ).replace(n4, o4);
  };
}, Kd = "react-spring: ", yb = (e) => {
  const n = e;
  let a = !1;
  if (typeof n != "function")
    throw new TypeError(`${Kd}once requires a function parameter`);
  return (...i) => {
    a || (n(...i), a = !0);
  };
}, i4 = yb(console.warn);
function l4() {
  i4(
    `${Kd}The "interpolate" function is deprecated in v9 (use "to" instead)`
  );
}
var s4 = yb(console.warn);
function c4() {
  s4(
    `${Kd}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function ns(e) {
  return ne.str(e) && (e[0] == "#" || /\d/.test(e) || // Do not identify a CSS variable as an AnimatedString if its SSR
  !Wd() && rs.test(e) || e in (un || {}));
}
var Yd = Wd() ? O.useEffect : O.useLayoutEffect, u4 = () => {
  const e = O.useRef(!1);
  return Yd(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function wb() {
  const e = O.useState()[1], n = u4();
  return () => {
    n.current && e(Math.random());
  };
}
function d4(e, n) {
  const [a] = O.useState(
    () => ({
      inputs: n,
      result: e()
    })
  ), i = O.useRef(), s = i.current;
  let c = s;
  return c ? n && c.inputs && f4(n, c.inputs) || (c = {
    inputs: n,
    result: e()
  }) : c = a, O.useEffect(() => {
    i.current = c, s == a && (a.inputs = a.result = void 0);
  }, [c]), c.result;
}
function f4(e, n) {
  if (e.length !== n.length)
    return !1;
  for (let a = 0; a < e.length; a++)
    if (e[a] !== n[a])
      return !1;
  return !0;
}
var xb = (e) => O.useEffect(e, p4), p4 = [];
function Qg(e) {
  const n = O.useRef();
  return O.useEffect(() => {
    n.current = e;
  }), n.current;
}
var Ko = Symbol.for("Animated:node"), m4 = (e) => !!e && e[Ko] === e, cr = (e) => e && e[Ko], Qd = (e, n) => j3(e, Ko, n), as = (e) => e && e[Ko] && e[Ko].getPayload(), kb = class {
  constructor() {
    Qd(this, this);
  }
  /** Get every `AnimatedValue` used by this node. */
  getPayload() {
    return this.payload || [];
  }
}, oi = class extends kb {
  constructor(e) {
    super(), this._value = e, this.done = !0, this.durationProgress = 0, ne.num(this._value) && (this.lastPosition = this._value);
  }
  /** @internal */
  static create(e) {
    return new oi(e);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(e, n) {
    return ne.num(e) && (this.lastPosition = e, n && (e = Math.round(e / n) * n, this.done && (this.lastPosition = e))), this._value === e ? !1 : (this._value = e, !0);
  }
  reset() {
    const { done: e } = this;
    this.done = !1, ne.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null);
  }
}, Yo = class extends oi {
  constructor(e) {
    super(0), this._string = null, this._toString = Ho({
      output: [e, e]
    });
  }
  /** @internal */
  static create(e) {
    return new Yo(e);
  }
  getValue() {
    const e = this._string;
    return e ?? (this._string = this._toString(this._value));
  }
  setValue(e) {
    if (ne.str(e)) {
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
    e && (this._toString = Ho({
      output: [this.getValue(), e]
    })), this._value = 0, super.reset();
  }
}, ql = { dependencies: null }, os = class extends kb {
  constructor(e) {
    super(), this.source = e, this.setValue(e);
  }
  getValue(e) {
    const n = {};
    return ur(this.source, (a, i) => {
      m4(a) ? n[i] = a.getValue(e) : Ot(a) ? n[i] = zt(a) : e || (n[i] = a);
    }), n;
  }
  /** Replace the raw object data */
  setValue(e) {
    this.source = e, this.payload = this._makePayload(e);
  }
  reset() {
    this.payload && $e(this.payload, (e) => e.reset());
  }
  /** Create a payload set. */
  _makePayload(e) {
    if (e) {
      const n = /* @__PURE__ */ new Set();
      return ur(e, this._addToPayload, n), Array.from(n);
    }
  }
  /** Add to a payload set. */
  _addToPayload(e) {
    ql.dependencies && Ot(e) && ql.dependencies.add(e);
    const n = as(e);
    n && $e(n, (a) => this.add(a));
  }
}, _b = class extends os {
  constructor(e) {
    super(e);
  }
  /** @internal */
  static create(e) {
    return new _b(e);
  }
  getValue() {
    return this.source.map((e) => e.getValue());
  }
  setValue(e) {
    const n = this.getPayload();
    return e.length == n.length ? n.map((a, i) => a.setValue(e[i])).some(Boolean) : (super.setValue(e.map(g4)), !0);
  }
};
function g4(e) {
  return (ns(e) ? Yo : oi).create(e);
}
function Ju(e) {
  const n = cr(e);
  return n ? n.constructor : ne.arr(e) ? _b : ns(e) ? Yo : oi;
}
var Xg = (e, n) => {
  const a = (
    // Function components must use "forwardRef" to avoid being
    // re-rendered on every animation frame.
    !ne.fun(e) || e.prototype && e.prototype.isReactComponent
  );
  return O.forwardRef((i, s) => {
    const c = O.useRef(null), u = a && // eslint-disable-next-line react-hooks/rules-of-hooks
    O.useCallback(
      (k) => {
        c.current = b4(s, k);
      },
      [s]
    ), [f, m] = v4(i, n), p = wb(), v = () => {
      const k = c.current;
      if (a && !k)
        return;
      (k ? n.applyAnimatedValues(k, f.getValue(!0)) : !1) === !1 && p();
    }, b = new h4(v, m), h = O.useRef();
    Yd(() => (h.current = b, $e(m, (k) => $a(k, b)), () => {
      h.current && ($e(
        h.current.deps,
        (k) => Go(k, h.current)
      ), we.cancel(h.current.update));
    })), O.useEffect(v, []), xb(() => () => {
      const k = h.current;
      $e(k.deps, (y) => Go(y, k));
    });
    const w = n.getComponentProps(f.getValue());
    return /* @__PURE__ */ O.createElement(e, { ...w, ref: u });
  });
}, h4 = class {
  constructor(e, n) {
    this.update = e, this.deps = n;
  }
  eventObserved(e) {
    e.type == "change" && we.write(this.update);
  }
};
function v4(e, n) {
  const a = /* @__PURE__ */ new Set();
  return ql.dependencies = a, e.style && (e = {
    ...e,
    style: n.createAnimatedStyle(e.style)
  }), e = new os(e), ql.dependencies = null, [e, a];
}
function b4(e, n) {
  return e && (ne.fun(e) ? e(n) : e.current = n), n;
}
var Zg = Symbol.for("AnimatedComponent"), y4 = (e, {
  applyAnimatedValues: n = () => !1,
  createAnimatedStyle: a = (s) => new os(s),
  getComponentProps: i = (s) => s
} = {}) => {
  const s = {
    applyAnimatedValues: n,
    createAnimatedStyle: a,
    getComponentProps: i
  }, c = (u) => {
    const f = Jg(u) || "Anonymous";
    return ne.str(u) ? u = c[u] || (c[u] = Xg(u, s)) : u = u[Zg] || (u[Zg] = Xg(u, s)), u.displayName = `Animated(${f})`, u;
  };
  return ur(e, (u, f) => {
    ne.arr(e) && (f = Jg(u)), c[f] = c(u);
  }), {
    animated: c
  };
}, Jg = (e) => ne.str(e) ? e : e && ne.str(e.displayName) ? e.displayName : ne.fun(e) && e.name || null;
function Pn(e, ...n) {
  return ne.fun(e) ? e(...n) : e;
}
var Oo = (e, n) => e === !0 || !!(n && e && (ne.fun(e) ? e(n) : Tt(e).includes(n))), Eb = (e, n) => ne.obj(e) ? n && e[n] : e, Sb = (e, n) => e.default === !0 ? e[n] : e.default ? e.default[n] : void 0, w4 = (e) => e, Xd = (e, n = w4) => {
  let a = x4;
  e.default && e.default !== !0 && (e = e.default, a = Object.keys(e));
  const i = {};
  for (const s of a) {
    const c = n(e[s], s);
    ne.und(c) || (i[s] = c);
  }
  return i;
}, x4 = [
  "config",
  "onProps",
  "onStart",
  "onChange",
  "onPause",
  "onResume",
  "onRest"
], k4 = {
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
function _4(e) {
  const n = {};
  let a = 0;
  if (ur(e, (i, s) => {
    k4[s] || (n[s] = i, a++);
  }), a)
    return n;
}
function Cb(e) {
  const n = _4(e);
  if (n) {
    const a = { to: n };
    return ur(e, (i, s) => s in n || (a[s] = i)), a;
  }
  return { ...e };
}
function Qo(e) {
  return e = zt(e), ne.arr(e) ? e.map(Qo) : ns(e) ? Jt.createStringInterpolator({
    range: [0, 1],
    output: [e, e]
  })(1) : e;
}
function E4(e) {
  for (const n in e)
    return !0;
  return !1;
}
function ed(e) {
  return ne.fun(e) || ne.arr(e) && ne.obj(e[0]);
}
function S4(e, n) {
  var a;
  (a = e.ref) == null || a.delete(e), n == null || n.delete(e);
}
function C4(e, n) {
  var a;
  n && e.ref !== n && ((a = e.ref) == null || a.delete(e), n.add(e), e.ref = n);
}
var z4 = {
  default: { tension: 170, friction: 26 }
}, td = {
  ...z4.default,
  mass: 1,
  damping: 1,
  easing: mb.linear,
  clamp: !1
}, $4 = class {
  constructor() {
    this.velocity = 0, Object.assign(this, td);
  }
};
function P4(e, n, a) {
  a && (a = { ...a }, eh(a, n), n = { ...a, ...n }), eh(e, n), Object.assign(e, n);
  for (const u in td)
    e[u] == null && (e[u] = td[u]);
  let { frequency: i, damping: s } = e;
  const { mass: c } = e;
  return ne.und(i) || (i < 0.01 && (i = 0.01), s < 0 && (s = 0), e.tension = Math.pow(2 * Math.PI / i, 2) * c, e.friction = 4 * Math.PI * s * c / i), e;
}
function eh(e, n) {
  if (!ne.und(n.decay))
    e.duration = void 0;
  else {
    const a = !ne.und(n.tension) || !ne.und(n.friction);
    (a || !ne.und(n.frequency) || !ne.und(n.damping) || !ne.und(n.mass)) && (e.duration = void 0, e.decay = void 0), a && (e.frequency = void 0);
  }
}
var th = [], A4 = class {
  constructor() {
    this.changed = !1, this.values = th, this.toValues = null, this.fromValues = th, this.config = new $4(), this.immediate = !1;
  }
};
function zb(e, { key: n, props: a, defaultProps: i, state: s, actions: c }) {
  return new Promise((u, f) => {
    let m, p, v = Oo(a.cancel ?? (i == null ? void 0 : i.cancel), n);
    if (v)
      w();
    else {
      ne.und(a.pause) || (s.paused = Oo(a.pause, n));
      let k = i == null ? void 0 : i.pause;
      k !== !0 && (k = s.paused || Oo(k, n)), m = Pn(a.delay || 0, n), k ? (s.resumeQueue.add(h), c.pause()) : (c.resume(), h());
    }
    function b() {
      s.resumeQueue.add(h), s.timeouts.delete(p), p.cancel(), m = p.time - we.now();
    }
    function h() {
      m > 0 && !Jt.skipAnimation ? (s.delayed = !0, p = we.setTimeout(w, m), s.pauseQueue.add(b), s.timeouts.add(p)) : w();
    }
    function w() {
      s.delayed && (s.delayed = !1), s.pauseQueue.delete(b), s.timeouts.delete(p), e <= (s.cancelId || 0) && (v = !0);
      try {
        c.start({ ...a, callId: e, cancel: v }, u);
      } catch (k) {
        f(k);
      }
    }
  });
}
var Zd = (e, n) => n.length == 1 ? n[0] : n.some((a) => a.cancelled) ? wa(e.get()) : n.every((a) => a.noop) ? $b(e.get()) : Xt(
  e.get(),
  n.every((a) => a.finished)
), $b = (e) => ({
  value: e,
  noop: !0,
  finished: !0,
  cancelled: !1
}), Xt = (e, n, a = !1) => ({
  value: e,
  finished: n,
  cancelled: a
}), wa = (e) => ({
  value: e,
  cancelled: !0,
  finished: !1
});
function Pb(e, n, a, i) {
  const { callId: s, parentId: c, onRest: u } = n, { asyncTo: f, promise: m } = a;
  return !c && e === f && !n.reset ? m : a.promise = (async () => {
    a.asyncId = s, a.asyncTo = e;
    const p = Xd(
      n,
      (_, A) => (
        // The `onRest` prop is only called when the `runAsync` promise is resolved.
        A === "onRest" ? void 0 : _
      )
    );
    let v, b;
    const h = new Promise(
      (_, A) => (v = _, b = A)
    ), w = (_) => {
      const A = (
        // The `cancel` prop or `stop` method was used.
        s <= (a.cancelId || 0) && wa(i) || // The async `to` prop was replaced.
        s !== a.asyncId && Xt(i, !1)
      );
      if (A)
        throw _.result = A, b(_), _;
    }, k = (_, A) => {
      const z = new rh(), U = new nh();
      return (async () => {
        if (Jt.skipAnimation)
          throw Xo(a), U.result = Xt(i, !1), b(U), U;
        w(z);
        const W = ne.obj(_) ? { ..._ } : { ...A, to: _ };
        W.parentId = s, ur(p, (Y, K) => {
          ne.und(W[K]) && (W[K] = Y);
        });
        const Q = await i.start(W);
        return w(z), a.paused && await new Promise((Y) => {
          a.resumeQueue.add(Y);
        }), Q;
      })();
    };
    let y;
    if (Jt.skipAnimation)
      return Xo(a), Xt(i, !1);
    try {
      let _;
      ne.arr(e) ? _ = (async (A) => {
        for (const z of A)
          await k(z);
      })(e) : _ = Promise.resolve(e(k, i.stop.bind(i))), await Promise.all([_.then(v), h]), y = Xt(i.get(), !0, !1);
    } catch (_) {
      if (_ instanceof rh)
        y = _.result;
      else if (_ instanceof nh)
        y = _.result;
      else
        throw _;
    } finally {
      s == a.asyncId && (a.asyncId = c, a.asyncTo = c ? f : void 0, a.promise = c ? m : void 0);
    }
    return ne.fun(u) && we.batchedUpdates(() => {
      u(y, i, i.item);
    }), y;
  })();
}
function Xo(e, n) {
  Ro(e.timeouts, (a) => a.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, n && (e.cancelId = n);
}
var rh = class extends Error {
  constructor() {
    super(
      "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
    );
  }
}, nh = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
  }
}, rd = (e) => e instanceof Jd, F4 = 1, Jd = class extends gb {
  constructor() {
    super(...arguments), this.id = F4++, this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(e) {
    this._priority != e && (this._priority = e, this._onPriorityChange(e));
  }
  /** Get the current value */
  get() {
    const e = cr(this);
    return e && e.getValue();
  }
  /** Create a spring that maps our value to another value */
  to(...e) {
    return Jt.to(this, e);
  }
  /** @deprecated Use the `to` method instead. */
  interpolate(...e) {
    return l4(), Jt.to(this, e);
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
  _onChange(e, n = !1) {
    qo(this, {
      type: "change",
      parent: this,
      value: e,
      idle: n
    });
  }
  /** Tell our children about our new priority */
  _onPriorityChange(e) {
    this.idle || es.sort(this), qo(this, {
      type: "priority",
      parent: this,
      priority: e
    });
  }
}, Ln = Symbol.for("SpringPhase"), Ab = 1, nd = 2, ad = 4, Eu = (e) => (e[Ln] & Ab) > 0, tn = (e) => (e[Ln] & nd) > 0, ko = (e) => (e[Ln] & ad) > 0, ah = (e, n) => n ? e[Ln] |= nd | Ab : e[Ln] &= ~nd, oh = (e, n) => n ? e[Ln] |= ad : e[Ln] &= ~ad, T4 = class extends Jd {
  constructor(e, n) {
    if (super(), this.animation = new A4(), this.defaultProps = {}, this._state = {
      paused: !1,
      delayed: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._pendingCalls = /* @__PURE__ */ new Set(), this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !ne.und(e) || !ne.und(n)) {
      const a = ne.obj(e) ? { ...e } : { ...n, from: e };
      ne.und(a.default) && (a.default = !0), this.start(a);
    }
  }
  /** Equals true when not advancing on each frame. */
  get idle() {
    return !(tn(this) || this._state.asyncTo) || ko(this);
  }
  get goal() {
    return zt(this.animation.to);
  }
  get velocity() {
    const e = cr(this);
    return e instanceof oi ? e.lastVelocity || 0 : e.getPayload().map((n) => n.lastVelocity || 0);
  }
  /**
   * When true, this value has been animated at least once.
   */
  get hasAnimated() {
    return Eu(this);
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
    return ko(this);
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
    let n = !0, a = !1;
    const i = this.animation;
    let { toValues: s } = i;
    const { config: c } = i, u = as(i.to);
    !u && Ot(i.to) && (s = Tt(zt(i.to))), i.values.forEach((p, v) => {
      if (p.done)
        return;
      const b = (
        // Animated strings always go from 0 to 1.
        p.constructor == Yo ? 1 : u ? u[v].lastPosition : s[v]
      );
      let h = i.immediate, w = b;
      if (!h) {
        if (w = p.lastPosition, c.tension <= 0) {
          p.done = !0;
          return;
        }
        let k = p.elapsedTime += e;
        const y = i.fromValues[v], _ = p.v0 != null ? p.v0 : p.v0 = ne.arr(c.velocity) ? c.velocity[v] : c.velocity;
        let A;
        const z = c.precision || (y == b ? 5e-3 : Math.min(1, Math.abs(b - y) * 1e-3));
        if (ne.und(c.duration))
          if (c.decay) {
            const U = c.decay === !0 ? 0.998 : c.decay, W = Math.exp(-(1 - U) * k);
            w = y + _ / (1 - U) * (1 - W), h = Math.abs(p.lastPosition - w) <= z, A = _ * W;
          } else {
            A = p.lastVelocity == null ? _ : p.lastVelocity;
            const U = c.restVelocity || z / 10, W = c.clamp ? 0 : c.bounce, Q = !ne.und(W), Y = y == b ? p.v0 > 0 : y < b;
            let K, X = !1;
            const ee = 1, ie = Math.ceil(e / ee);
            for (let ae = 0; ae < ie && (K = Math.abs(A) > U, !(!K && (h = Math.abs(b - w) <= z, h))); ++ae) {
              Q && (X = w == b || w > b == Y, X && (A = -A * W, w = b));
              const S = -c.tension * 1e-6 * (w - b), R = -c.friction * 1e-3 * A, C = (S + R) / c.mass;
              A = A + C * ee, w = w + A * ee;
            }
          }
        else {
          let U = 1;
          c.duration > 0 && (this._memoizedDuration !== c.duration && (this._memoizedDuration = c.duration, p.durationProgress > 0 && (p.elapsedTime = c.duration * p.durationProgress, k = p.elapsedTime += e)), U = (c.progress || 0) + k / this._memoizedDuration, U = U > 1 ? 1 : U < 0 ? 0 : U, p.durationProgress = U), w = y + c.easing(U) * (b - y), A = (w - p.lastPosition) / e, h = U == 1;
        }
        p.lastVelocity = A, Number.isNaN(w) && (console.warn("Got NaN while animating:", this), h = !0);
      }
      u && !u[v].done && (h = !1), h ? p.done = !0 : n = !1, p.setValue(w, c.round) && (a = !0);
    });
    const f = cr(this), m = f.getValue();
    if (n) {
      const p = zt(i.to);
      (m !== p || a) && !c.decay ? (f.setValue(p), this._onChange(p)) : a && c.decay && this._onChange(m), this._stop();
    } else a && this._onChange(m);
  }
  /** Set the current value, while stopping the current animation */
  set(e) {
    return we.batchedUpdates(() => {
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
      const { to: e, config: n } = this.animation;
      we.batchedUpdates(() => {
        this._onStart(), n.decay || this._set(e, !1), this._stop();
      });
    }
    return this;
  }
  /** Push props into the pending queue. */
  update(e) {
    return (this.queue || (this.queue = [])).push(e), this;
  }
  start(e, n) {
    let a;
    return ne.und(e) ? (a = this.queue || [], this.queue = []) : a = [ne.obj(e) ? e : { ...n, to: e }], Promise.all(
      a.map((i) => this._update(i))
    ).then((i) => Zd(this, i));
  }
  /**
   * Stop the current animation, and cancel any delayed updates.
   *
   * Pass `true` to call `onRest` with `cancelled: true`.
   */
  stop(e) {
    const { to: n } = this.animation;
    return this._focus(this.get()), Xo(this._state, e && this._lastCallId), we.batchedUpdates(() => this._stop(n, e)), this;
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
    const n = this.key || "";
    let { to: a, from: i } = e;
    a = ne.obj(a) ? a[n] : a, (a == null || ed(a)) && (a = void 0), i = ne.obj(i) ? i[n] : i, i == null && (i = void 0);
    const s = { to: a, from: i };
    return Eu(this) || (e.reverse && ([a, i] = [i, a]), i = zt(i), ne.und(i) ? cr(this) || this._set(a) : this._set(i)), s;
  }
  /** Every update is processed by this method before merging. */
  _update({ ...e }, n) {
    const { key: a, defaultProps: i } = this;
    e.default && Object.assign(
      i,
      Xd(
        e,
        (u, f) => /^on/.test(f) ? Eb(u, a) : u
      )
    ), lh(this, e, "onProps"), Eo(this, "onProps", e, this);
    const s = this._prepareNode(e);
    if (Object.isFrozen(this))
      throw Error(
        "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
      );
    const c = this._state;
    return zb(++this._lastCallId, {
      key: a,
      props: e,
      defaultProps: i,
      state: c,
      actions: {
        pause: () => {
          ko(this) || (oh(this, !0), To(c.pauseQueue), Eo(
            this,
            "onPause",
            Xt(this, _o(this, this.animation.to)),
            this
          ));
        },
        resume: () => {
          ko(this) && (oh(this, !1), tn(this) && this._resume(), To(c.resumeQueue), Eo(
            this,
            "onResume",
            Xt(this, _o(this, this.animation.to)),
            this
          ));
        },
        start: this._merge.bind(this, s)
      }
    }).then((u) => {
      if (e.loop && u.finished && !(n && u.noop)) {
        const f = Fb(e);
        if (f)
          return this._update(f, !0);
      }
      return u;
    });
  }
  /** Merge props into the current animation */
  _merge(e, n, a) {
    if (n.cancel)
      return this.stop(!0), a(wa(this));
    const i = !ne.und(e.to), s = !ne.und(e.from);
    if (i || s)
      if (n.callId > this._lastToId)
        this._lastToId = n.callId;
      else
        return a(wa(this));
    const { key: c, defaultProps: u, animation: f } = this, { to: m, from: p } = f;
    let { to: v = m, from: b = p } = e;
    s && !i && (!n.default || ne.und(v)) && (v = b), n.reverse && ([v, b] = [b, v]);
    const h = !zr(b, p);
    h && (f.from = b), b = zt(b);
    const w = !zr(v, m);
    w && this._focus(v);
    const k = ed(n.to), { config: y } = f, { decay: _, velocity: A } = y;
    (i || s) && (y.velocity = 0), n.config && !k && P4(
      y,
      Pn(n.config, c),
      // Avoid calling the same "config" prop twice.
      n.config !== u.config ? Pn(u.config, c) : void 0
    );
    let z = cr(this);
    if (!z || ne.und(v))
      return a(Xt(this, !0));
    const U = (
      // When `reset` is undefined, the `from` prop implies `reset: true`,
      // except for declarative updates. When `reset` is defined, there
      // must exist a value to animate from.
      ne.und(n.reset) ? s && !n.default : !ne.und(b) && Oo(n.reset, c)
    ), W = U ? b : this.get(), Q = Qo(v), Y = ne.num(Q) || ne.arr(Q) || ns(Q), K = !k && (!Y || Oo(u.immediate || n.immediate, c));
    if (w) {
      const ae = Ju(v);
      if (ae !== z.constructor)
        if (K)
          z = this._set(Q);
        else
          throw Error(
            `Cannot animate between ${z.constructor.name} and ${ae.name}, as the "to" prop suggests`
          );
    }
    const X = z.constructor;
    let ee = Ot(v), ie = !1;
    if (!ee) {
      const ae = U || !Eu(this) && h;
      (w || ae) && (ie = zr(Qo(W), Q), ee = !ie), (!zr(f.immediate, K) && !K || !zr(y.decay, _) || !zr(y.velocity, A)) && (ee = !0);
    }
    if (ie && tn(this) && (f.changed && !U ? ee = !0 : ee || this._stop(m)), !k && ((ee || Ot(m)) && (f.values = z.getPayload(), f.toValues = Ot(v) ? null : X == Yo ? [1] : Tt(Q)), f.immediate != K && (f.immediate = K, !K && !U && this._set(m)), ee)) {
      const { onRest: ae } = f;
      $e(I4, (R) => lh(this, n, R));
      const S = Xt(this, _o(this, m));
      To(this._pendingCalls, S), this._pendingCalls.add(a), f.changed && we.batchedUpdates(() => {
        var R;
        f.changed = !U, ae == null || ae(S, this), U ? Pn(u.onRest, S) : (R = f.onStart) == null || R.call(f, S, this);
      });
    }
    U && this._set(W), k ? a(Pb(n.to, n, this._state, this)) : ee ? this._start() : tn(this) && !w ? this._pendingCalls.add(a) : a($b(W));
  }
  /** Update the `animation.to` value, which might be a `FluidValue` */
  _focus(e) {
    const n = this.animation;
    e !== n.to && (Kg(this) && this._detach(), n.to = e, Kg(this) && this._attach());
  }
  _attach() {
    let e = 0;
    const { to: n } = this.animation;
    Ot(n) && ($a(n, this), rd(n) && (e = n.priority + 1)), this.priority = e;
  }
  _detach() {
    const { to: e } = this.animation;
    Ot(e) && Go(e, this);
  }
  /**
   * Update the current value from outside the frameloop,
   * and return the `Animated` node.
   */
  _set(e, n = !0) {
    const a = zt(e);
    if (!ne.und(a)) {
      const i = cr(this);
      if (!i || !zr(a, i.getValue())) {
        const s = Ju(a);
        !i || i.constructor != s ? Qd(this, s.create(a)) : i.setValue(a), i && we.batchedUpdates(() => {
          this._onChange(a, n);
        });
      }
    }
    return cr(this);
  }
  _onStart() {
    const e = this.animation;
    e.changed || (e.changed = !0, Eo(
      this,
      "onStart",
      Xt(this, _o(this, e.to)),
      this
    ));
  }
  _onChange(e, n) {
    n || (this._onStart(), Pn(this.animation.onChange, e, this)), Pn(this.defaultProps.onChange, e, this), super._onChange(e, n);
  }
  // This method resets the animation state (even if already animating) to
  // ensure the latest from/to range is used, and it also ensures this spring
  // is added to the frameloop.
  _start() {
    const e = this.animation;
    cr(this).reset(zt(e.to)), e.immediate || (e.fromValues = e.values.map((n) => n.lastPosition)), tn(this) || (ah(this, !0), ko(this) || this._resume());
  }
  _resume() {
    Jt.skipAnimation ? this.finish() : es.start(this);
  }
  /**
   * Exit the frameloop and notify `onRest` listeners.
   *
   * Always wrap `_stop` calls with `batchedUpdates`.
   */
  _stop(e, n) {
    if (tn(this)) {
      ah(this, !1);
      const a = this.animation;
      $e(a.values, (s) => {
        s.done = !0;
      }), a.toValues && (a.onChange = a.onPause = a.onResume = void 0), qo(this, {
        type: "idle",
        parent: this
      });
      const i = n ? wa(this.get()) : Xt(this.get(), _o(this, e ?? a.to));
      To(this._pendingCalls, i), a.changed && (a.changed = !1, Eo(this, "onRest", i, this));
    }
  }
};
function _o(e, n) {
  const a = Qo(n), i = Qo(e.get());
  return zr(i, a);
}
function Fb(e, n = e.loop, a = e.to) {
  const i = Pn(n);
  if (i) {
    const s = i !== !0 && Cb(i), c = (s || e).reverse, u = !s || s.reset;
    return Zo({
      ...e,
      loop: n,
      // Avoid updating default props when looping.
      default: !1,
      // Never loop the `pause` prop.
      pause: void 0,
      // For the "reverse" prop to loop as expected, the "to" prop
      // must be undefined. The "reverse" prop is ignored when the
      // "to" prop is an array or function.
      to: !c || ed(a) ? a : void 0,
      // Ignore the "from" prop except on reset.
      from: u ? e.from : void 0,
      reset: u,
      // The "loop" prop can return a "useSpring" props object to
      // override any of the original props.
      ...s
    });
  }
}
function Zo(e) {
  const { to: n, from: a } = e = Cb(e), i = /* @__PURE__ */ new Set();
  return ne.obj(n) && ih(n, i), ne.obj(a) && ih(a, i), e.keys = i.size ? Array.from(i) : null, e;
}
function N4(e) {
  const n = Zo(e);
  return ne.und(n.default) && (n.default = Xd(n)), n;
}
function ih(e, n) {
  ur(e, (a, i) => a != null && n.add(i));
}
var I4 = [
  "onStart",
  "onRest",
  "onChange",
  "onPause",
  "onResume"
];
function lh(e, n, a) {
  e.animation[a] = n[a] !== Sb(n, a) ? Eb(n[a], e.key) : void 0;
}
function Eo(e, n, ...a) {
  var i, s, c, u;
  (s = (i = e.animation)[n]) == null || s.call(i, ...a), (u = (c = e.defaultProps)[n]) == null || u.call(c, ...a);
}
var M4 = ["onStart", "onChange", "onRest"], L4 = 1, R4 = class {
  constructor(n, a) {
    this.id = L4++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = !1, this._state = {
      paused: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._events = {
      onStart: /* @__PURE__ */ new Map(),
      onChange: /* @__PURE__ */ new Map(),
      onRest: /* @__PURE__ */ new Map()
    }, this._onFrame = this._onFrame.bind(this), a && (this._flush = a), n && this.start({ default: !0, ...n });
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
    return this.each((a, i) => n[i] = a.get()), n;
  }
  /** Set the current values without animating. */
  set(n) {
    for (const a in n) {
      const i = n[a];
      ne.und(i) || this.springs[a].set(i);
    }
  }
  /** Push an update onto the queue of each value. */
  update(n) {
    return n && this.queue.push(Zo(n)), this;
  }
  /**
   * Start the queued animations for every spring, and resolve the returned
   * promise once all queued animations have finished or been cancelled.
   *
   * When you pass a queue (instead of nothing), that queue is used instead of
   * the queued animations added with the `update` method, which are left alone.
   */
  start(n) {
    let { queue: a } = this;
    return n ? a = Tt(n).map(Zo) : this.queue = [], this._flush ? this._flush(this, a) : (Lb(this, a), od(this, a));
  }
  /** @internal */
  stop(n, a) {
    if (n !== !!n && (a = n), a) {
      const i = this.springs;
      $e(Tt(a), (s) => i[s].stop(!!n));
    } else
      Xo(this._state, this._lastAsyncId), this.each((i) => i.stop(!!n));
    return this;
  }
  /** Freeze the active animation in time */
  pause(n) {
    if (ne.und(n))
      this.start({ pause: !0 });
    else {
      const a = this.springs;
      $e(Tt(n), (i) => a[i].pause());
    }
    return this;
  }
  /** Resume the animation if paused. */
  resume(n) {
    if (ne.und(n))
      this.start({ pause: !1 });
    else {
      const a = this.springs;
      $e(Tt(n), (i) => a[i].resume());
    }
    return this;
  }
  /** Call a function once per spring value */
  each(n) {
    ur(this.springs, n);
  }
  /** @internal Called at the end of every animation frame */
  _onFrame() {
    const { onStart: n, onChange: a, onRest: i } = this._events, s = this._active.size > 0, c = this._changed.size > 0;
    (s && !this._started || c && !this._started) && (this._started = !0, Ro(n, ([m, p]) => {
      p.value = this.get(), m(p, this, this._item);
    }));
    const u = !s && this._started, f = c || u && i.size ? this.get() : null;
    c && a.size && Ro(a, ([m, p]) => {
      p.value = f, m(p, this, this._item);
    }), u && (this._started = !1, Ro(i, ([m, p]) => {
      p.value = f, m(p, this, this._item);
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
    we.onFrame(this._onFrame);
  }
};
function od(e, n) {
  return Promise.all(n.map((a) => Tb(e, a))).then(
    (a) => Zd(e, a)
  );
}
async function Tb(e, n, a) {
  const { keys: i, to: s, from: c, loop: u, onRest: f, onResolve: m } = n, p = ne.obj(n.default) && n.default;
  u && (n.loop = !1), s === !1 && (n.to = null), c === !1 && (n.from = null);
  const v = ne.arr(s) || ne.fun(s) ? s : void 0;
  v ? (n.to = void 0, n.onRest = void 0, p && (p.onRest = void 0)) : $e(M4, (y) => {
    const _ = n[y];
    if (ne.fun(_)) {
      const A = e._events[y];
      n[y] = ({ finished: z, cancelled: U }) => {
        const W = A.get(_);
        W ? (z || (W.finished = !1), U && (W.cancelled = !0)) : A.set(_, {
          value: null,
          finished: z || !1,
          cancelled: U || !1
        });
      }, p && (p[y] = n[y]);
    }
  });
  const b = e._state;
  n.pause === !b.paused ? (b.paused = n.pause, To(n.pause ? b.pauseQueue : b.resumeQueue)) : b.paused && (n.pause = !0);
  const h = (i || Object.keys(e.springs)).map(
    (y) => e.springs[y].start(n)
  ), w = n.cancel === !0 || Sb(n, "cancel") === !0;
  (v || w && b.asyncId) && h.push(
    zb(++e._lastAsyncId, {
      props: n,
      state: b,
      actions: {
        pause: Xu,
        resume: Xu,
        start(y, _) {
          w ? (Xo(b, e._lastAsyncId), _(wa(e))) : (y.onRest = f, _(
            Pb(
              v,
              y,
              b,
              e
            )
          ));
        }
      }
    })
  ), b.paused && await new Promise((y) => {
    b.resumeQueue.add(y);
  });
  const k = Zd(e, await Promise.all(h));
  if (u && k.finished && !(a && k.noop)) {
    const y = Fb(n, u, s);
    if (y)
      return Lb(e, [y]), Tb(e, y, !0);
  }
  return m && we.batchedUpdates(() => m(k, e, e.item)), k;
}
function sh(e, n) {
  const a = { ...e.springs };
  return n && $e(Tt(n), (i) => {
    ne.und(i.keys) && (i = Zo(i)), ne.obj(i.to) || (i = { ...i, to: void 0 }), Mb(a, i, (s) => Ib(s));
  }), Nb(e, a), a;
}
function Nb(e, n) {
  ur(n, (a, i) => {
    e.springs[i] || (e.springs[i] = a, $a(a, e));
  });
}
function Ib(e, n) {
  const a = new T4();
  return a.key = e, n && $a(a, n), a;
}
function Mb(e, n, a) {
  n.keys && $e(n.keys, (i) => {
    (e[i] || (e[i] = a(i)))._prepareNode(n);
  });
}
function Lb(e, n) {
  $e(n, (a) => {
    Mb(e.springs, a, (i) => Ib(i, e));
  });
}
var is = ({
  children: e,
  ...n
}) => {
  const a = O.useContext(Gl), i = n.pause || !!a.pause, s = n.immediate || !!a.immediate;
  n = d4(() => ({ pause: i, immediate: s }), [i, s]);
  const { Provider: c } = Gl;
  return /* @__PURE__ */ O.createElement(c, { value: n }, e);
}, Gl = j4(is, {});
is.Provider = Gl.Provider;
is.Consumer = Gl.Consumer;
function j4(e, n) {
  return Object.assign(e, O.createContext(n)), e.Provider._context = e, e.Consumer._context = e, e;
}
var O4 = () => {
  const e = [], n = function(i) {
    c4();
    const s = [];
    return $e(e, (c, u) => {
      if (ne.und(i))
        s.push(c.start());
      else {
        const f = a(i, c, u);
        f && s.push(c.start(f));
      }
    }), s;
  };
  n.current = e, n.add = function(i) {
    e.includes(i) || e.push(i);
  }, n.delete = function(i) {
    const s = e.indexOf(i);
    ~s && e.splice(s, 1);
  }, n.pause = function() {
    return $e(e, (i) => i.pause(...arguments)), this;
  }, n.resume = function() {
    return $e(e, (i) => i.resume(...arguments)), this;
  }, n.set = function(i) {
    $e(e, (s, c) => {
      const u = ne.fun(i) ? i(c, s) : i;
      u && s.set(u);
    });
  }, n.start = function(i) {
    const s = [];
    return $e(e, (c, u) => {
      if (ne.und(i))
        s.push(c.start());
      else {
        const f = this._getProps(i, c, u);
        f && s.push(c.start(f));
      }
    }), s;
  }, n.stop = function() {
    return $e(e, (i) => i.stop(...arguments)), this;
  }, n.update = function(i) {
    return $e(e, (s, c) => s.update(this._getProps(i, s, c))), this;
  };
  const a = function(i, s, c) {
    return ne.fun(i) ? i(c, s) : i;
  };
  return n._getProps = a, n;
};
function V4(e, n, a) {
  const i = ne.fun(n) && n;
  i && !a && (a = []);
  const s = O.useMemo(
    () => i || arguments.length == 3 ? O4() : void 0,
    []
  ), c = O.useRef(0), u = wb(), f = O.useMemo(
    () => ({
      ctrls: [],
      queue: [],
      flush(A, z) {
        const U = sh(A, z);
        return c.current > 0 && !f.queue.length && !Object.keys(U).some((Q) => !A.springs[Q]) ? od(A, z) : new Promise((Q) => {
          Nb(A, U), f.queue.push(() => {
            Q(od(A, z));
          }), u();
        });
      }
    }),
    []
  ), m = O.useRef([...f.ctrls]), p = [], v = Qg(e) || 0;
  O.useMemo(() => {
    $e(m.current.slice(e, v), (A) => {
      S4(A, s), A.stop(!0);
    }), m.current.length = e, b(v, e);
  }, [e]), O.useMemo(() => {
    b(0, Math.min(v, e));
  }, a);
  function b(A, z) {
    for (let U = A; U < z; U++) {
      const W = m.current[U] || (m.current[U] = new R4(null, f.flush)), Q = i ? i(U, W) : n[U];
      Q && (p[U] = N4(Q));
    }
  }
  const h = m.current.map((A, z) => sh(A, p[z])), w = O.useContext(is), k = Qg(w), y = w !== k && E4(w);
  Yd(() => {
    c.current++, f.ctrls = m.current;
    const { queue: A } = f;
    A.length && (f.queue = [], $e(A, (z) => z())), $e(m.current, (z, U) => {
      s == null || s.add(z), y && z.start({ default: w });
      const W = p[U];
      W && (C4(z, W.ref), z.ref ? z.queue.push(W) : z.start(W));
    });
  }), xb(() => () => {
    $e(f.ctrls, (A) => A.stop(!0));
  });
  const _ = h.map((A) => ({ ...A }));
  return s ? [_, s] : _;
}
function ch(e, n) {
  const a = ne.fun(e), [[i], s] = V4(
    1,
    a ? e : [e],
    a ? [] : n
  );
  return a || arguments.length == 2 ? [i, s] : i;
}
var D4 = class extends Jd {
  constructor(e, n) {
    super(), this.source = e, this.idle = !0, this._active = /* @__PURE__ */ new Set(), this.calc = Ho(...n);
    const a = this._get(), i = Ju(a);
    Qd(this, i.create(a));
  }
  advance(e) {
    const n = this._get(), a = this.get();
    zr(n, a) || (cr(this).setValue(n), this._onChange(n, this.idle)), !this.idle && uh(this._active) && Su(this);
  }
  _get() {
    const e = ne.arr(this.source) ? this.source.map(zt) : Tt(zt(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle && !uh(this._active) && (this.idle = !1, $e(as(this), (e) => {
      e.done = !1;
    }), Jt.skipAnimation ? (we.batchedUpdates(() => this.advance()), Su(this)) : es.start(this));
  }
  // Observe our sources only when we're observed.
  _attach() {
    let e = 1;
    $e(Tt(this.source), (n) => {
      Ot(n) && $a(n, this), rd(n) && (n.idle || this._active.add(n), e = Math.max(e, n.priority + 1));
    }), this.priority = e, this._start();
  }
  // Stop observing our sources once we have no observers.
  _detach() {
    $e(Tt(this.source), (e) => {
      Ot(e) && Go(e, this);
    }), this._active.clear(), Su(this);
  }
  /** @internal */
  eventObserved(e) {
    e.type == "change" ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : e.type == "idle" ? this._active.delete(e.parent) : e.type == "priority" && (this.priority = Tt(this.source).reduce(
      (n, a) => Math.max(n, (rd(a) ? a.priority : 0) + 1),
      0
    ));
  }
};
function B4(e) {
  return e.idle !== !1;
}
function uh(e) {
  return !e.size || Array.from(e).every(B4);
}
function Su(e) {
  e.idle || (e.idle = !0, $e(as(e), (n) => {
    n.done = !0;
  }), qo(e, {
    type: "idle",
    parent: e
  }));
}
Jt.assign({
  createStringInterpolator: bb,
  to: (e, n) => new D4(e, n)
});
var Rb = /^--/;
function U4(e, n) {
  return n == null || typeof n == "boolean" || n === "" ? "" : typeof n == "number" && n !== 0 && !Rb.test(e) && !(Vo.hasOwnProperty(e) && Vo[e]) ? n + "px" : ("" + n).trim();
}
var dh = {};
function H4(e, n) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  const a = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", { style: i, children: s, scrollTop: c, scrollLeft: u, viewBox: f, ...m } = n, p = Object.values(m), v = Object.keys(m).map(
    (b) => a || e.hasAttribute(b) ? b : dh[b] || (dh[b] = b.replace(
      /([A-Z])/g,
      // Attributes are written in dash case
      (h) => "-" + h.toLowerCase()
    ))
  );
  s !== void 0 && (e.textContent = s);
  for (const b in i)
    if (i.hasOwnProperty(b)) {
      const h = U4(b, i[b]);
      Rb.test(b) ? e.style.setProperty(b, h) : e.style[b] = h;
    }
  v.forEach((b, h) => {
    e.setAttribute(b, p[h]);
  }), c !== void 0 && (e.scrollTop = c), u !== void 0 && (e.scrollLeft = u), f !== void 0 && e.setAttribute("viewBox", f);
}
var Vo = {
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
}, W4 = (e, n) => e + n.charAt(0).toUpperCase() + n.substring(1), q4 = ["Webkit", "Ms", "Moz", "O"];
Vo = Object.keys(Vo).reduce((e, n) => (q4.forEach((a) => e[W4(a, n)] = e[n]), e), Vo);
var G4 = /^(matrix|translate|scale|rotate|skew)/, K4 = /^(translate)/, Y4 = /^(rotate|skew)/, Cu = (e, n) => ne.num(e) && e !== 0 ? e + n : e, Ll = (e, n) => ne.arr(e) ? e.every((a) => Ll(a, n)) : ne.num(e) ? e === n : parseFloat(e) === n, Q4 = class extends os {
  constructor({ x: e, y: n, z: a, ...i }) {
    const s = [], c = [];
    (e || n || a) && (s.push([e || 0, n || 0, a || 0]), c.push((u) => [
      `translate3d(${u.map((f) => Cu(f, "px")).join(",")})`,
      // prettier-ignore
      Ll(u, 0)
    ])), ur(i, (u, f) => {
      if (f === "transform")
        s.push([u || ""]), c.push((m) => [m, m === ""]);
      else if (G4.test(f)) {
        if (delete i[f], ne.und(u))
          return;
        const m = K4.test(f) ? "px" : Y4.test(f) ? "deg" : "";
        s.push(Tt(u)), c.push(
          f === "rotate3d" ? ([p, v, b, h]) => [
            `rotate3d(${p},${v},${b},${Cu(h, m)})`,
            Ll(h, 0)
          ] : (p) => [
            `${f}(${p.map((v) => Cu(v, m)).join(",")})`,
            Ll(p, f.startsWith("scale") ? 1 : 0)
          ]
        );
      }
    }), s.length && (i.transform = new X4(s, c)), super(i);
  }
}, X4 = class extends gb {
  constructor(e, n) {
    super(), this.inputs = e, this.transforms = n, this._value = null;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let e = "", n = !0;
    return $e(this.inputs, (a, i) => {
      const s = zt(a[0]), [c, u] = this.transforms[i](
        ne.arr(s) ? s : a.map(zt)
      );
      e += " " + c, n = n && u;
    }), n ? "none" : e;
  }
  // Start observing our inputs once we have an observer.
  observerAdded(e) {
    e == 1 && $e(
      this.inputs,
      (n) => $e(
        n,
        (a) => Ot(a) && $a(a, this)
      )
    );
  }
  // Stop observing our inputs once we have no observers.
  observerRemoved(e) {
    e == 0 && $e(
      this.inputs,
      (n) => $e(
        n,
        (a) => Ot(a) && Go(a, this)
      )
    );
  }
  eventObserved(e) {
    e.type == "change" && (this._value = null), qo(this, e);
  }
}, Z4 = [
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
Jt.assign({
  batchedUpdates: yx.unstable_batchedUpdates,
  createStringInterpolator: bb,
  colors: B3
});
var J4 = y4(Z4, {
  applyAnimatedValues: H4,
  createAnimatedStyle: (e) => new Q4(e),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getComponentProps: ({ scrollTop: e, scrollLeft: n, ...a }) => a
}), jb = J4.animated;
function e_(e, n, a) {
  return Math.max(n, Math.min(e, a));
}
const pt = {
  toVector(e, n) {
    return e === void 0 && (e = n), Array.isArray(e) ? e : [e, e];
  },
  add(e, n) {
    return [e[0] + n[0], e[1] + n[1]];
  },
  sub(e, n) {
    return [e[0] - n[0], e[1] - n[1]];
  },
  addTo(e, n) {
    e[0] += n[0], e[1] += n[1];
  },
  subTo(e, n) {
    e[0] -= n[0], e[1] -= n[1];
  }
};
function fh(e, n, a) {
  return n === 0 || Math.abs(n) === 1 / 0 ? Math.pow(e, a * 5) : e * n * a / (n + a * e);
}
function ph(e, n, a, i = 0.15) {
  return i === 0 ? e_(e, n, a) : e < n ? -fh(n - e, a - n, i) + n : e > a ? +fh(e - a, a - n, i) + a : e;
}
function t_(e, [n, a], [i, s]) {
  const [[c, u], [f, m]] = e;
  return [ph(n, c, u, i), ph(a, f, m, s)];
}
function r_(e, n) {
  if (typeof e != "object" || e === null) return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var i = a.call(e, n);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function n_(e) {
  var n = r_(e, "string");
  return typeof n == "symbol" ? n : String(n);
}
function Ct(e, n, a) {
  return n = n_(n), n in e ? Object.defineProperty(e, n, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = a, e;
}
function mh(e, n) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    n && (i = i.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), a.push.apply(a, i);
  }
  return a;
}
function qe(e) {
  for (var n = 1; n < arguments.length; n++) {
    var a = arguments[n] != null ? arguments[n] : {};
    n % 2 ? mh(Object(a), !0).forEach(function(i) {
      Ct(e, i, a[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : mh(Object(a)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(a, i));
    });
  }
  return e;
}
const Ob = {
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
function gh(e) {
  return e ? e[0].toUpperCase() + e.slice(1) : "";
}
const a_ = ["enter", "leave"];
function o_(e = !1, n) {
  return e && !a_.includes(n);
}
function i_(e, n = "", a = !1) {
  const i = Ob[e], s = i && i[n] || n;
  return "on" + gh(e) + gh(s) + (o_(a, s) ? "Capture" : "");
}
const l_ = ["gotpointercapture", "lostpointercapture"];
function s_(e) {
  let n = e.substring(2).toLowerCase();
  const a = !!~n.indexOf("passive");
  a && (n = n.replace("passive", ""));
  const i = l_.includes(n) ? "capturecapture" : "capture", s = !!~n.indexOf(i);
  return s && (n = n.replace("capture", "")), {
    device: n,
    capture: s,
    passive: a
  };
}
function c_(e, n = "") {
  const a = Ob[e], i = a && a[n] || n;
  return e + i;
}
function ls(e) {
  return "touches" in e;
}
function Vb(e) {
  return ls(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse";
}
function u_(e) {
  return Array.from(e.touches).filter((n) => {
    var a, i;
    return n.target === e.currentTarget || ((a = e.currentTarget) === null || a === void 0 || (i = a.contains) === null || i === void 0 ? void 0 : i.call(a, n.target));
  });
}
function d_(e) {
  return e.type === "touchend" || e.type === "touchcancel" ? e.changedTouches : e.targetTouches;
}
function Db(e) {
  return ls(e) ? d_(e)[0] : e;
}
function f_(e) {
  return u_(e).map((n) => n.identifier);
}
function zu(e) {
  const n = Db(e);
  return ls(e) ? n.identifier : n.pointerId;
}
function hh(e) {
  const n = Db(e);
  return [n.clientX, n.clientY];
}
function p_(e) {
  const n = {};
  if ("buttons" in e && (n.buttons = e.buttons), "shiftKey" in e) {
    const {
      shiftKey: a,
      altKey: i,
      metaKey: s,
      ctrlKey: c
    } = e;
    Object.assign(n, {
      shiftKey: a,
      altKey: i,
      metaKey: s,
      ctrlKey: c
    });
  }
  return n;
}
function Kl(e, ...n) {
  return typeof e == "function" ? e(...n) : e;
}
function m_() {
}
function g_(...e) {
  return e.length === 0 ? m_ : e.length === 1 ? e[0] : function() {
    let n;
    for (const a of e)
      n = a.apply(this, arguments) || n;
    return n;
  };
}
function vh(e, n) {
  return Object.assign({}, n, e || {});
}
const h_ = 32;
class v_ {
  constructor(n, a, i) {
    this.ctrl = n, this.args = a, this.key = i, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset());
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
      shared: a,
      ingKey: i,
      args: s
    } = this;
    a[i] = n._active = n.active = n._blocked = n._force = !1, n._step = [!1, !1], n.intentional = !1, n._movement = [0, 0], n._distance = [0, 0], n._direction = [0, 0], n._delta = [0, 0], n._bounds = [[-1 / 0, 1 / 0], [-1 / 0, 1 / 0]], n.args = s, n.axis = void 0, n.memo = void 0, n.elapsedTime = n.timeDelta = 0, n.direction = [0, 0], n.distance = [0, 0], n.overflow = [0, 0], n._movementBound = [!1, !1], n.velocity = [0, 0], n.movement = [0, 0], n.delta = [0, 0], n.timeStamp = 0;
  }
  start(n) {
    const a = this.state, i = this.config;
    a._active || (this.reset(), this.computeInitial(), a._active = !0, a.target = n.target, a.currentTarget = n.currentTarget, a.lastOffset = i.from ? Kl(i.from, a) : a.offset, a.offset = a.lastOffset, a.startTime = a.timeStamp = n.timeStamp);
  }
  computeValues(n) {
    const a = this.state;
    a._values = n, a.values = this.config.transform(n);
  }
  computeInitial() {
    const n = this.state;
    n._initial = n._values, n.initial = n.values;
  }
  compute(n) {
    const {
      state: a,
      config: i,
      shared: s
    } = this;
    a.args = this.args;
    let c = 0;
    if (n && (a.event = n, i.preventDefault && n.cancelable && a.event.preventDefault(), a.type = n.type, s.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, s.locked = !!document.pointerLockElement, Object.assign(s, p_(n)), s.down = s.pressed = s.buttons % 2 === 1 || s.touches > 0, c = n.timeStamp - a.timeStamp, a.timeStamp = n.timeStamp, a.elapsedTime = a.timeStamp - a.startTime), a._active) {
      const Y = a._delta.map(Math.abs);
      pt.addTo(a._distance, Y);
    }
    this.axisIntent && this.axisIntent(n);
    const [u, f] = a._movement, [m, p] = i.threshold, {
      _step: v,
      values: b
    } = a;
    if (i.hasCustomTransform ? (v[0] === !1 && (v[0] = Math.abs(u) >= m && b[0]), v[1] === !1 && (v[1] = Math.abs(f) >= p && b[1])) : (v[0] === !1 && (v[0] = Math.abs(u) >= m && Math.sign(u) * m), v[1] === !1 && (v[1] = Math.abs(f) >= p && Math.sign(f) * p)), a.intentional = v[0] !== !1 || v[1] !== !1, !a.intentional) return;
    const h = [0, 0];
    if (i.hasCustomTransform) {
      const [Y, K] = b;
      h[0] = v[0] !== !1 ? Y - v[0] : 0, h[1] = v[1] !== !1 ? K - v[1] : 0;
    } else
      h[0] = v[0] !== !1 ? u - v[0] : 0, h[1] = v[1] !== !1 ? f - v[1] : 0;
    this.restrictToAxis && !a._blocked && this.restrictToAxis(h);
    const w = a.offset, k = a._active && !a._blocked || a.active;
    k && (a.first = a._active && !a.active, a.last = !a._active && a.active, a.active = s[this.ingKey] = a._active, n && (a.first && ("bounds" in i && (a._bounds = Kl(i.bounds, a)), this.setup && this.setup()), a.movement = h, this.computeOffset()));
    const [y, _] = a.offset, [[A, z], [U, W]] = a._bounds;
    a.overflow = [y < A ? -1 : y > z ? 1 : 0, _ < U ? -1 : _ > W ? 1 : 0], a._movementBound[0] = a.overflow[0] ? a._movementBound[0] === !1 ? a._movement[0] : a._movementBound[0] : !1, a._movementBound[1] = a.overflow[1] ? a._movementBound[1] === !1 ? a._movement[1] : a._movementBound[1] : !1;
    const Q = a._active ? i.rubberband || [0, 0] : [0, 0];
    if (a.offset = t_(a._bounds, a.offset, Q), a.delta = pt.sub(a.offset, w), this.computeMovement(), k && (!a.last || c > h_)) {
      a.delta = pt.sub(a.offset, w);
      const Y = a.delta.map(Math.abs);
      pt.addTo(a.distance, Y), a.direction = a.delta.map(Math.sign), a._direction = a._delta.map(Math.sign), !a.first && c > 0 && (a.velocity = [Y[0] / c, Y[1] / c], a.timeDelta = c);
    }
  }
  emit() {
    const n = this.state, a = this.shared, i = this.config;
    if (n._active || this.clean(), (n._blocked || !n.intentional) && !n._force && !i.triggerAllEvents) return;
    const s = this.handler(qe(qe(qe({}, a), n), {}, {
      [this.aliasKey]: n.values
    }));
    s !== void 0 && (n.memo = s);
  }
  clean() {
    this.eventStore.clean(), this.timeoutStore.clean();
  }
}
function b_([e, n], a) {
  const i = Math.abs(e), s = Math.abs(n);
  if (i > s && i > a)
    return "x";
  if (s > i && s > a)
    return "y";
}
class y_ extends v_ {
  constructor(...n) {
    super(...n), Ct(this, "aliasKey", "xy");
  }
  reset() {
    super.reset(), this.state.axis = void 0;
  }
  init() {
    this.state.offset = [0, 0], this.state.lastOffset = [0, 0];
  }
  computeOffset() {
    this.state.offset = pt.add(this.state.lastOffset, this.state.movement);
  }
  computeMovement() {
    this.state.movement = pt.sub(this.state.offset, this.state.lastOffset);
  }
  axisIntent(n) {
    const a = this.state, i = this.config;
    if (!a.axis && n) {
      const s = typeof i.axisThreshold == "object" ? i.axisThreshold[Vb(n)] : i.axisThreshold;
      a.axis = b_(a._movement, s);
    }
    a._blocked = (i.lockDirection || !!i.axis) && !a.axis || !!i.axis && i.axis !== a.axis;
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
const w_ = (e) => e, bh = 0.15, Bb = {
  enabled(e = !0) {
    return e;
  },
  eventOptions(e, n, a) {
    return qe(qe({}, a.shared.eventOptions), e);
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
        return [bh, bh];
      case !1:
        return [0, 0];
      default:
        return pt.toVector(e);
    }
  },
  from(e) {
    if (typeof e == "function") return e;
    if (e != null) return pt.toVector(e);
  },
  transform(e, n, a) {
    const i = e || a.shared.transform;
    return this.hasCustomTransform = !!i, i || w_;
  },
  threshold(e) {
    return pt.toVector(e, 0);
  }
}, x_ = 0, ii = qe(qe({}, Bb), {}, {
  axis(e, n, {
    axis: a
  }) {
    if (this.lockDirection = a === "lock", !this.lockDirection) return a;
  },
  axisThreshold(e = x_) {
    return e;
  },
  bounds(e = {}) {
    if (typeof e == "function")
      return (c) => ii.bounds(e(c));
    if ("current" in e)
      return () => e.current;
    if (typeof HTMLElement == "function" && e instanceof HTMLElement)
      return e;
    const {
      left: n = -1 / 0,
      right: a = 1 / 0,
      top: i = -1 / 0,
      bottom: s = 1 / 0
    } = e;
    return [[n, a], [i, s]];
  }
}), yh = {
  ArrowRight: (e, n = 1) => [e * n, 0],
  ArrowLeft: (e, n = 1) => [-1 * e * n, 0],
  ArrowUp: (e, n = 1) => [0, -1 * e * n],
  ArrowDown: (e, n = 1) => [0, e * n]
};
class k_ extends y_ {
  constructor(...n) {
    super(...n), Ct(this, "ingKey", "dragging");
  }
  reset() {
    super.reset();
    const n = this.state;
    n._pointerId = void 0, n._pointerActive = !1, n._keyboardActive = !1, n._preventScroll = !1, n._delayed = !1, n.swipe = [0, 0], n.tap = !1, n.canceled = !1, n.cancel = this.cancel.bind(this);
  }
  setup() {
    const n = this.state;
    if (n._bounds instanceof HTMLElement) {
      const a = n._bounds.getBoundingClientRect(), i = n.currentTarget.getBoundingClientRect(), s = {
        left: a.left - i.left + n.offset[0],
        right: a.right - i.right + n.offset[0],
        top: a.top - i.top + n.offset[1],
        bottom: a.bottom - i.bottom + n.offset[1]
      };
      n._bounds = ii.bounds(s);
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
    const a = this.config, i = this.state;
    if (n.buttons != null && (Array.isArray(a.pointerButtons) ? !a.pointerButtons.includes(n.buttons) : a.pointerButtons !== -1 && a.pointerButtons !== n.buttons)) return;
    const s = this.ctrl.setEventIds(n);
    a.pointerCapture && n.target.setPointerCapture(n.pointerId), !(s && s.size > 1 && i._pointerActive) && (this.start(n), this.setupPointer(n), i._pointerId = zu(n), i._pointerActive = !0, this.computeValues(hh(n)), this.computeInitial(), a.preventScrollAxis && Vb(n) !== "mouse" ? (i._active = !1, this.setupScrollPrevention(n)) : a.delay > 0 ? (this.setupDelayTrigger(n), a.triggerAllEvents && (this.compute(n), this.emit())) : this.startPointerDrag(n));
  }
  startPointerDrag(n) {
    const a = this.state;
    a._active = !0, a._preventScroll = !0, a._delayed = !1, this.compute(n), this.emit();
  }
  pointerMove(n) {
    const a = this.state, i = this.config;
    if (!a._pointerActive) return;
    const s = zu(n);
    if (a._pointerId !== void 0 && s !== a._pointerId) return;
    const c = hh(n);
    if (document.pointerLockElement === n.target ? a._delta = [n.movementX, n.movementY] : (a._delta = pt.sub(c, a._values), this.computeValues(c)), pt.addTo(a._movement, a._delta), this.compute(n), a._delayed && a.intentional) {
      this.timeoutStore.remove("dragDelay"), a.active = !1, this.startPointerDrag(n);
      return;
    }
    if (i.preventScrollAxis && !a._preventScroll)
      if (a.axis)
        if (a.axis === i.preventScrollAxis || i.preventScrollAxis === "xy") {
          a._active = !1, this.clean();
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
    const a = this.state, i = this.config;
    if (!a._active || !a._pointerActive) return;
    const s = zu(n);
    if (a._pointerId !== void 0 && s !== a._pointerId) return;
    this.state._pointerActive = !1, this.setActive(), this.compute(n);
    const [c, u] = a._distance;
    if (a.tap = c <= i.tapsThreshold && u <= i.tapsThreshold, a.tap && i.filterTaps)
      a._force = !0;
    else {
      const [f, m] = a._delta, [p, v] = a._movement, [b, h] = i.swipe.velocity, [w, k] = i.swipe.distance, y = i.swipe.duration;
      if (a.elapsedTime < y) {
        const _ = Math.abs(f / a.timeDelta), A = Math.abs(m / a.timeDelta);
        _ > b && Math.abs(p) > w && (a.swipe[0] = Math.sign(f)), A > h && Math.abs(v) > k && (a.swipe[1] = Math.sign(m));
      }
    }
    this.emit();
  }
  pointerClick(n) {
    !this.state.tap && n.detail > 0 && (n.preventDefault(), n.stopPropagation());
  }
  setupPointer(n) {
    const a = this.config, i = a.device;
    a.pointerLock && n.currentTarget.requestPointerLock(), a.pointerCapture || (this.eventStore.add(this.sharedConfig.window, i, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, i, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, i, "cancel", this.pointerUp.bind(this)));
  }
  pointerClean() {
    this.config.pointerLock && document.pointerLockElement === this.state.currentTarget && document.exitPointerLock();
  }
  preventScroll(n) {
    this.state._preventScroll && n.cancelable && n.preventDefault();
  }
  setupScrollPrevention(n) {
    this.state._preventScroll = !1, __(n);
    const a = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
      passive: !1
    });
    this.eventStore.add(this.sharedConfig.window, "touch", "end", a), this.eventStore.add(this.sharedConfig.window, "touch", "cancel", a), this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, n);
  }
  setupDelayTrigger(n) {
    this.state._delayed = !0, this.timeoutStore.add("dragDelay", () => {
      this.state._step = [0, 0], this.startPointerDrag(n);
    }, this.config.delay);
  }
  keyDown(n) {
    const a = yh[n.key];
    if (a) {
      const i = this.state, s = n.shiftKey ? 10 : n.altKey ? 0.1 : 1;
      this.start(n), i._delta = a(this.config.keyboardDisplacement, s), i._keyboardActive = !0, pt.addTo(i._movement, i._delta), this.compute(n), this.emit();
    }
  }
  keyUp(n) {
    n.key in yh && (this.state._keyboardActive = !1, this.setActive(), this.compute(n), this.emit());
  }
  bind(n) {
    const a = this.config.device;
    n(a, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (n(a, "change", this.pointerMove.bind(this)), n(a, "end", this.pointerUp.bind(this)), n(a, "cancel", this.pointerUp.bind(this)), n("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (n("key", "down", this.keyDown.bind(this)), n("key", "up", this.keyUp.bind(this))), this.config.filterTaps && n("click", "", this.pointerClick.bind(this), {
      capture: !0,
      passive: !1
    });
  }
}
function __(e) {
  "persist" in e && typeof e.persist == "function" && e.persist();
}
const li = typeof window < "u" && window.document && window.document.createElement;
function Ub() {
  return li && "ontouchstart" in window;
}
function E_() {
  return Ub() || li && window.navigator.maxTouchPoints > 1;
}
function S_() {
  return li && "onpointerdown" in window;
}
function C_() {
  return li && "exitPointerLock" in window.document;
}
function z_() {
  try {
    return "constructor" in GestureEvent;
  } catch {
    return !1;
  }
}
const Vt = {
  isBrowser: li,
  gesture: z_(),
  touch: Ub(),
  touchscreen: E_(),
  pointer: S_(),
  pointerLock: C_()
}, $_ = 250, P_ = 180, A_ = 0.5, F_ = 50, T_ = 250, N_ = 10, wh = {
  mouse: 0,
  touch: 0,
  pen: 8
}, I_ = qe(qe({}, ii), {}, {
  device(e, n, {
    pointer: {
      touch: a = !1,
      lock: i = !1,
      mouse: s = !1
    } = {}
  }) {
    return this.pointerLock = i && Vt.pointerLock, Vt.touch && a ? "touch" : this.pointerLock ? "mouse" : Vt.pointer && !s ? "pointer" : Vt.touch ? "touch" : "mouse";
  },
  preventScrollAxis(e, n, {
    preventScroll: a
  }) {
    if (this.preventScrollDelay = typeof a == "number" ? a : a || a === void 0 && e ? $_ : void 0, !(!Vt.touchscreen || a === !1))
      return e || (a !== void 0 ? "y" : void 0);
  },
  pointerCapture(e, n, {
    pointer: {
      capture: a = !0,
      buttons: i = 1,
      keys: s = !0
    } = {}
  }) {
    return this.pointerButtons = i, this.keys = s, !this.pointerLock && this.device === "pointer" && a;
  },
  threshold(e, n, {
    filterTaps: a = !1,
    tapsThreshold: i = 3,
    axis: s = void 0
  }) {
    const c = pt.toVector(e, a ? i : s ? 1 : 0);
    return this.filterTaps = a, this.tapsThreshold = i, c;
  },
  swipe({
    velocity: e = A_,
    distance: n = F_,
    duration: a = T_
  } = {}) {
    return {
      velocity: this.transform(pt.toVector(e)),
      distance: this.transform(pt.toVector(n)),
      duration: a
    };
  },
  delay(e = 0) {
    switch (e) {
      case !0:
        return P_;
      case !1:
        return 0;
      default:
        return e;
    }
  },
  axisThreshold(e) {
    return e ? qe(qe({}, wh), e) : wh;
  },
  keyboardDisplacement(e = N_) {
    return e;
  }
});
qe(qe({}, Bb), {}, {
  device(e, n, {
    shared: a,
    pointer: {
      touch: i = !1
    } = {}
  }) {
    if (a.target && !Vt.touch && Vt.gesture) return "gesture";
    if (Vt.touch && i) return "touch";
    if (Vt.touchscreen) {
      if (Vt.pointer) return "pointer";
      if (Vt.touch) return "touch";
    }
  },
  bounds(e, n, {
    scaleBounds: a = {},
    angleBounds: i = {}
  }) {
    const s = (u) => {
      const f = vh(Kl(a, u), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [f.min, f.max];
    }, c = (u) => {
      const f = vh(Kl(i, u), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [f.min, f.max];
    };
    return typeof a != "function" && typeof i != "function" ? [s(), c()] : (u) => [s(u), c(u)];
  },
  threshold(e, n, a) {
    return this.lockDirection = a.axis === "lock", pt.toVector(e, this.lockDirection ? [0.1, 3] : 0);
  },
  modifierKey(e) {
    return e === void 0 ? "ctrlKey" : e;
  },
  pinchOnWheel(e = !0) {
    return e;
  }
});
qe(qe({}, ii), {}, {
  mouseOnly: (e = !0) => e
});
qe(qe({}, ii), {}, {
  mouseOnly: (e = !0) => e
});
const Hb = /* @__PURE__ */ new Map(), id = /* @__PURE__ */ new Map();
function M_(e) {
  Hb.set(e.key, e.engine), id.set(e.key, e.resolver);
}
const L_ = {
  key: "drag",
  engine: k_,
  resolver: I_
};
function R_(e, n) {
  if (e == null) return {};
  var a = {}, i = Object.keys(e), s, c;
  for (c = 0; c < i.length; c++)
    s = i[c], !(n.indexOf(s) >= 0) && (a[s] = e[s]);
  return a;
}
function j_(e, n) {
  if (e == null) return {};
  var a = R_(e, n), i, s;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(e);
    for (s = 0; s < c.length; s++)
      i = c[s], !(n.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (a[i] = e[i]);
  }
  return a;
}
const O_ = {
  target(e) {
    if (e)
      return () => "current" in e ? e.current : e;
  },
  enabled(e = !0) {
    return e;
  },
  window(e = Vt.isBrowser ? window : void 0) {
    return e;
  },
  eventOptions({
    passive: e = !0,
    capture: n = !1
  } = {}) {
    return {
      passive: e,
      capture: n
    };
  },
  transform(e) {
    return e;
  }
}, V_ = ["target", "eventOptions", "window", "enabled", "transform"];
function Rl(e = {}, n) {
  const a = {};
  for (const [i, s] of Object.entries(n))
    switch (typeof s) {
      case "function":
        a[i] = s.call(a, e[i], i, e);
        break;
      case "object":
        a[i] = Rl(e[i], s);
        break;
      case "boolean":
        s && (a[i] = e[i]);
        break;
    }
  return a;
}
function D_(e, n, a = {}) {
  const i = e, {
    target: s,
    eventOptions: c,
    window: u,
    enabled: f,
    transform: m
  } = i, p = j_(i, V_);
  if (a.shared = Rl({
    target: s,
    eventOptions: c,
    window: u,
    enabled: f,
    transform: m
  }, O_), n) {
    const v = id.get(n);
    a[n] = Rl(qe({
      shared: a.shared
    }, p), v);
  } else
    for (const v in p) {
      const b = id.get(v);
      b && (a[v] = Rl(qe({
        shared: a.shared
      }, p[v]), b));
    }
  return a;
}
class Wb {
  constructor(n, a) {
    Ct(this, "_listeners", /* @__PURE__ */ new Set()), this._ctrl = n, this._gestureKey = a;
  }
  add(n, a, i, s, c) {
    const u = this._listeners, f = c_(a, i), m = this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}, p = qe(qe({}, m), c);
    n.addEventListener(f, s, p);
    const v = () => {
      n.removeEventListener(f, s, p), u.delete(v);
    };
    return u.add(v), v;
  }
  clean() {
    this._listeners.forEach((n) => n()), this._listeners.clear();
  }
}
class B_ {
  constructor() {
    Ct(this, "_timeouts", /* @__PURE__ */ new Map());
  }
  add(n, a, i = 140, ...s) {
    this.remove(n), this._timeouts.set(n, window.setTimeout(a, i, ...s));
  }
  remove(n) {
    const a = this._timeouts.get(n);
    a && window.clearTimeout(a);
  }
  clean() {
    this._timeouts.forEach((n) => void window.clearTimeout(n)), this._timeouts.clear();
  }
}
class U_ {
  constructor(n) {
    Ct(this, "gestures", /* @__PURE__ */ new Set()), Ct(this, "_targetEventStore", new Wb(this)), Ct(this, "gestureEventStores", {}), Ct(this, "gestureTimeoutStores", {}), Ct(this, "handlers", {}), Ct(this, "config", {}), Ct(this, "pointerIds", /* @__PURE__ */ new Set()), Ct(this, "touchIds", /* @__PURE__ */ new Set()), Ct(this, "state", {
      shared: {
        shiftKey: !1,
        metaKey: !1,
        ctrlKey: !1,
        altKey: !1
      }
    }), H_(this, n);
  }
  setEventIds(n) {
    if (ls(n))
      return this.touchIds = new Set(f_(n)), this.touchIds;
    if ("pointerId" in n)
      return n.type === "pointerup" || n.type === "pointercancel" ? this.pointerIds.delete(n.pointerId) : n.type === "pointerdown" && this.pointerIds.add(n.pointerId), this.pointerIds;
  }
  applyHandlers(n, a) {
    this.handlers = n, this.nativeHandlers = a;
  }
  applyConfig(n, a) {
    this.config = D_(n, a, this.config);
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
    const a = this.config.shared, i = {};
    let s;
    if (!(a.target && (s = a.target(), !s))) {
      if (a.enabled) {
        for (const u of this.gestures) {
          const f = this.config[u], m = xh(i, f.eventOptions, !!s);
          if (f.enabled) {
            const p = Hb.get(u);
            new p(this, n, u).bind(m);
          }
        }
        const c = xh(i, a.eventOptions, !!s);
        for (const u in this.nativeHandlers)
          c(u, "", (f) => this.nativeHandlers[u](qe(qe({}, this.state.shared), {}, {
            event: f,
            args: n
          })), void 0, !0);
      }
      for (const c in i)
        i[c] = g_(...i[c]);
      if (!s) return i;
      for (const c in i) {
        const {
          device: u,
          capture: f,
          passive: m
        } = s_(c);
        this._targetEventStore.add(s, u, "", i[c], {
          capture: f,
          passive: m
        });
      }
    }
  }
}
function pa(e, n) {
  e.gestures.add(n), e.gestureEventStores[n] = new Wb(e, n), e.gestureTimeoutStores[n] = new B_();
}
function H_(e, n) {
  n.drag && pa(e, "drag"), n.wheel && pa(e, "wheel"), n.scroll && pa(e, "scroll"), n.move && pa(e, "move"), n.pinch && pa(e, "pinch"), n.hover && pa(e, "hover");
}
const xh = (e, n, a) => (i, s, c, u = {}, f = !1) => {
  var m, p;
  const v = (m = u.capture) !== null && m !== void 0 ? m : n.capture, b = (p = u.passive) !== null && p !== void 0 ? p : n.passive;
  let h = f ? i : i_(i, s, v);
  a && b && (h += "Passive"), e[h] = e[h] || [], e[h].push(c);
};
function W_(e, n = {}, a, i) {
  const s = E.useMemo(() => new U_(e), []);
  if (s.applyHandlers(e, i), s.applyConfig(n, a), E.useEffect(s.effect.bind(s)), E.useEffect(() => s.clean.bind(s), []), n.target === void 0)
    return s.bind.bind(s);
}
function q_(e, n) {
  return M_(L_), W_({
    drag: e
  }, n || {}, "drag");
}
const G_ = (e) => G.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: G.jsx("path", { d: "M11.7071 3.29291L3 12L11.7071 20.7071L13.1213 19.2929L6.82841 13L20 13V11L6.82844 11L13.1213 4.70712L11.7071 3.29291Z" }) }), K_ = O.forwardRef(({ "aria-label": e, as: n, className: a, color: i, contained: s = !1, disabled: c, emphasis: u = "regular", onBlur: f, onClick: m, onFocus: p, shape: v = "square", size: b = "medium", svgClassName: h, ...w }, k) => {
  const y = n ?? "button", _ = O.useRef(null), { buttonProps: A } = Ca({
    elementType: y,
    isDisabled: c,
    onBlur: f,
    onFocus: p,
    onPress: m
  }, _), z = !!(c || !e), U = typeof b == "number", W = U ? { height: b, width: b } : void 0, Q = U && s ? { padding: b / 2 } : void 0, Y = U ? void 0 : b, K = Je(A, w);
  return G.jsx(Q_, { disabled: c, children: G.jsx(y, { "aria-disabled": c, "aria-hidden": z, "aria-label": e, className: tr({
    button: !0,
    class: a,
    emphasis: s && u,
    shape: v,
    size: Y
  }), "data-namespace": "@paloma/icons", "data-size": b, id: "arrow-left-id", ref: Tr(_, k), style: { color: i, ...Q, ...W }, ...K, children: G.jsx(G_, { className: er({ class: h, size: Y }), "data-testid": "@paloma-icon-button-svg-id", focusable: "false", id: "arrow-left-svg-id", style: { fill: Y_, ...W } }) }) });
}), Y_ = "currentColor", Q_ = ({ children: e, disabled: n, ...a }) => n ? e : G.jsx(dr, { focusRingClass: Lv(), ...a, children: e }), X_ = O.forwardRef(({ "aria-label": e, as: n, className: a, color: i, contained: s = !1, disabled: c, emphasis: u = "regular", onBlur: f, onClick: m, onFocus: p, shape: v = "square", size: b = "medium", svgClassName: h, ...w }, k) => {
  const y = n ?? "button", _ = O.useRef(null), { buttonProps: A } = Ca({
    elementType: y,
    isDisabled: c,
    onBlur: f,
    onFocus: p,
    onPress: m
  }, _), z = !!(c || !e), U = typeof b == "number", W = U ? { height: b, width: b } : void 0, Q = U && s ? { padding: b / 2 } : void 0, Y = U ? void 0 : b, K = Je(A, w);
  return G.jsx(J_, { disabled: c, children: G.jsx(y, { "aria-disabled": c, "aria-hidden": z, "aria-label": e, className: tr({
    button: !0,
    class: a,
    emphasis: s && u,
    shape: v,
    size: Y
  }), "data-namespace": "@paloma/icons", "data-size": b, id: "arrow-right-id", ref: Tr(_, k), style: { color: i, ...Q, ...W }, ...K, children: G.jsx(tb, { className: er({ class: h, size: Y }), "data-testid": "@paloma-icon-button-svg-id", focusable: "false", id: "arrow-right-svg-id", style: { fill: Z_, ...W } }) }) });
}), Z_ = "currentColor", J_ = ({ children: e, disabled: n, ...a }) => n ? e : G.jsx(dr, { focusRingClass: Lv(), ...a, children: e });
var e8 = typeof window > "u" ? O.useEffect : O.useLayoutEffect, t8 = oe({
  base: "h-1 w-1 bg-content-neutral-bold/[0.15] rounded-full",
  variants: {
    isCurrent: {
      true: "w-12"
    }
  }
}), r8 = oe({
  base: "flex flex-col gap-4 flex-grow w-full"
}), n8 = oe({
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
}), qb = (e, n, a) => ({
  dotWidthGrow: () => e.to([0, 1], [4, 48]).to((k) => `${k}px`),
  dotWidthShrink: () => e.to([0, 1], [48, 4]).to((k) => `${k}px`),
  fadeIn: () => e.to([0, 1], [0, 1]).to((k) => k),
  fadeOut: () => e.to([0, 1], [1, 0]).to((k) => k),
  scaleCard: (k, y) => {
    if (a)
      return e.to([0, 1], [k, y]).to((_) => _);
  },
  slideBack: () => {
    if (a)
      return e.to([0, 1], [0, a]).to((k) => k);
  },
  slideForward: () => {
    if (a)
      return e.to([0, 1], [0, -a]).to((k) => k);
  },
  slideIn: () => {
    if (n)
      return e.to([0, 1], [0, n]).to((k) => k);
  },
  slideOut: (k = 0, y = "left") => {
    if (!n)
      return;
    const _ = y === "left" ? -1 : 1;
    return e.to([0, 1], [k, n]).to((A) => _ * A);
  }
}), a8 = ({
  currentSlide: e = 1,
  isAnimatingBackward: n,
  isAnimatingForward: a,
  items: i,
  motion: s
}) => {
  const { dotWidthGrow: c, dotWidthShrink: u } = qb(s), f = (m) => {
    if (a) {
      if (m === e)
        return c();
      if (m === (e || i.length) - 1)
        return u();
    } else if (n) {
      if (m === e)
        return c();
      if (m === e + 1 || m === 0 && e + 1 === i.length)
        return u();
    }
  };
  return /* @__PURE__ */ E.createElement(
    "div",
    {
      className: "flex gap-2 self-center",
      "data-testid": Se("@paloma-carousel-dots-id")
    },
    i.map((m, p) => /* @__PURE__ */ E.createElement(
      jb.div,
      {
        className: t8({ isCurrent: p === e }),
        "data-testid": Se(`@paloma-carousel-dot-${p}-id`),
        key: p,
        style: { width: f(p) }
      }
    ))
  );
};
function o8(e, n, a) {
  try {
    const s = E.Children.only(e);
    if (s.type === n)
      return a ? a(s, s == null ? void 0 : s.props) : e;
  } catch {
  }
  return null;
}
var i8 = oe({
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
}), l8 = "span", $u = O.forwardRef(
  ({
    as: e,
    children: n,
    className: a,
    fontWeight: i = "normal",
    showTitle: s = !1,
    size: c,
    truncate: u = !1,
    underline: f = !1,
    variant: m,
    ...p
  }, v) => {
    const b = e ?? l8, [h, w] = O.useMemo(() => m === "heading" ? [c ?? "large", m] : [c ?? "medium", "body"], [c, m]);
    return /* @__PURE__ */ E.createElement(
      b,
      {
        className: i8({
          className: a,
          fontWeight: i,
          truncate: u,
          underline: f,
          [w]: h
        }),
        "data-font-weight": i,
        "data-size": h,
        "data-truncate": u,
        "data-underline": f,
        "data-variant": w,
        ref: v,
        title: s ? p.title ?? (u && typeof n == "string" ? n : void 0) : void 0,
        ...p
      },
      n
    );
  }
), s8 = (e, n = {}) => {
  if (typeof e == "string")
    return /* @__PURE__ */ E.createElement($u, { ...n }, e);
  if (o8(e, $u)) {
    const a = {
      ...n ?? {},
      ...e.props
    };
    return /* @__PURE__ */ E.createElement($u, { ...a });
  }
  if (E.isValidElement(e) && typeof e.type == "string") {
    const a = {};
    e.type === "a" && (a.color = "#0000EE", a.textDecoration = "underline");
    const i = e.props, s = {
      ...a,
      ...n.style,
      ...i.style
    };
    return E.cloneElement(
      e,
      {
        style: s
      }
    );
  }
  return e;
}, c8 = ({
  arrows: e = !0,
  backArrowLabel: n = "Back",
  forwardArrowLabel: a = "Forward",
  handleBackPress: i,
  handleForwardPress: s,
  title: c,
  titleTag: u = "div"
}) => /* @__PURE__ */ E.createElement(E.Fragment, null, s8(c, {
  as: u,
  className: "m-0 text-content-neutral-bold",
  fontWeight: "bold",
  size: "x-small",
  variant: "heading"
}), e && /* @__PURE__ */ E.createElement("div", { className: "flex gap-8 self-start" }, /* @__PURE__ */ E.createElement(
  K_,
  {
    "aria-label": n,
    className: "rtl:rotate-180 text-content-neutral-bold",
    onClick: i,
    size: "small"
  }
), /* @__PURE__ */ E.createElement(
  X_,
  {
    "aria-label": a,
    className: "rtl:rotate-180 text-content-neutral-bold",
    onClick: s,
    size: "small"
  }
))), Pu = 2, kh = 5, _h = 3, u8 = ({
  carouselItemWrapperClassname: e,
  children: n,
  className: a,
  dots: i = !0,
  onSlideChange: s,
  overlap: c = 12,
  scale: u = 0.9,
  titleTag: f = "div",
  withBackdropBlur: m = !1,
  ...p
}) => {
  const [v, b] = O.useState(!1);
  O.useEffect(() => {
    const pe = window.matchMedia("(prefers-reduced-motion: reduce)");
    b(pe.matches);
    const Pe = (rr) => b(rr.matches);
    return pe.addEventListener("change", Pe), () => pe.removeEventListener("change", Pe);
  }, []);
  const h = O.useRef(!1), w = O.useRef(null), [k, y] = O.useState(0), [_, A] = O.useState(() => {
    const pe = E.Children.toArray(n);
    return [
      pe[k === 0 ? pe.length - 1 : k - 1],
      ...pe.slice(k),
      ...pe.slice(0, k)
    ];
  }), z = n.length ?? 0, U = z >= _h ? _h : Pu;
  lt(
    z >= Pu && z <= kh,
    `A carousel must contain between ${Pu} - ${kh} items.`
  );
  const [W, Q] = O.useState(!1), [Y, K] = O.useState(!1), [X, ee] = O.useState(!1), ie = W || Y, [ae, S] = O.useState({ height: 0, width: 0 }), R = O.useMemo(() => {
    const pe = U - 1;
    return ae.width + c * pe;
  }, [U, ae.width, c]);
  O.useEffect(() => {
    h.current ? s == null || s(k) : h.current = !0;
  }, [s, k]), O.useEffect(() => {
    if (!ie) {
      const pe = E.Children.toArray(n), Pe = [
        pe[k === 0 ? pe.length - 1 : k - 1],
        ...pe.slice(k),
        ...pe.slice(0, k)
      ];
      A(Pe);
    }
  }, [n, k, ie]);
  const C = () => {
    w.current && S({
      height: w.current.offsetHeight,
      width: w.current.offsetWidth
    });
  };
  e8(() => {
    C();
    const pe = () => {
      C();
    };
    window.addEventListener("resize", pe);
    let Pe = null;
    return w.current && window.ResizeObserver && (Pe = new ResizeObserver(() => {
      C();
    }), Pe.observe(w.current)), () => {
      window.removeEventListener("resize", pe), Pe && Pe.disconnect();
    };
  }, []);
  const j = () => {
    if (!ie)
      return y(k === 0 ? z - 1 : k - 1), K(!0), st();
  }, L = () => {
    if (!ie)
      return y(k === z - 1 ? 0 : k + 1), Q(!0), st();
  }, [T, I] = ch(() => ({
    config: {
      duration: 600,
      easing: mb.easeInOutCubic
    },
    motion: 0
  })), [{ x: F }, V] = ch(() => ({ x: 0 })), $ = ae.width / 4, D = q_(
    ({ active: pe, args: [Pe], cancel: rr, down: pn, movement: [mn] }) => {
      if (Pe === 1) {
        if (ee(!0), V.start({
          immediate: v || pe,
          x: pn ? mn : 0
        }), mn < -$)
          return rr(), L();
        if (mn > $)
          return rr(), j();
        !pn && !pe && ee(!1);
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
    fadeOut: fe,
    scaleCard: ve,
    slideBack: ye,
    slideForward: ze,
    slideIn: Te,
    slideOut: Me
  } = qb(T.motion, ae.width, c), st = () => {
    if (v) {
      Q(!1), K(!1), ee(!1);
      return;
    }
    return I.start({
      motion: 1,
      onRest: () => (Q(!1), K(!1), ee(!1), I.start({ immediate: !0, motion: 0 }))
    });
  }, jn = (pe) => {
    if (!ie && X && pe === 1)
      return F;
    if (W) {
      if (pe === 1)
        return Me(X ? $ : 0);
      if (pe !== 1 && pe !== 0)
        return ze();
    }
    if (Y) {
      if (pe === 0)
        return Te();
      if (pe === 1 && X)
        return Me($, "right");
      if (pe !== U)
        return ye();
    }
  }, si = (pe) => {
    if (W && pe === 1)
      return fe();
    if (Y) {
      if (pe === 0)
        return me();
      if (pe === 1 && X)
        return fe();
    }
  }, On = (pe) => {
    const Pe = Math.pow(u, pe - 1);
    if (!ie) {
      if (pe === 0 || pe === 1)
        return;
      if (pe !== 1)
        return [1, Pe];
    }
    if (W)
      return pe === 1 || pe === 0 ? void 0 : [1, ve(Pe, Math.pow(u, pe - 2))];
    if (Y) {
      if (pe === 0)
        return;
      if (pe === U)
        return [1, Pe];
      if (pe !== 0)
        return [1, ve(Pe, Math.pow(u, pe))];
    }
  }, Vn = (pe) => pe === 0 ? -ae.width : pe === 1 ? 0 : (pe - 1) * c;
  return /* @__PURE__ */ E.createElement(
    "div",
    {
      className: r8({ class: a }),
      "data-testid": Se("@paloma-carousel-id"),
      style: { maxWidth: R }
    },
    /* @__PURE__ */ E.createElement("div", { className: "flex flex-grow justify-between items-center gap-4" }, /* @__PURE__ */ E.createElement(
      c8,
      {
        handleBackPress: j,
        handleForwardPress: L,
        titleTag: f,
        ...p
      }
    )),
    /* @__PURE__ */ E.createElement("div", { className: "flex flex-col items-start gap-6" }, /* @__PURE__ */ E.createElement(
      "div",
      {
        className: "flex relative z-0 select-none",
        "data-carousel-card-container": !0,
        "data-testid": Se("@paloma-carousel-card-container-id"),
        style: { height: ae.height, width: ae.width }
      },
      _.map((pe, Pe) => {
        if (Pe > U)
          return;
        const rr = {
          index: Pe,
          left: Vn(Pe),
          opacity: si(Pe),
          scale: On(Pe),
          translateX: jn(Pe),
          zIndex: Pe === 0 ? 2 : Pe === 1 ? 1 : -(z * Pe)
        };
        return /* @__PURE__ */ E.createElement(
          jb.div,
          {
            ...D(Pe),
            className: n8({
              class: e,
              isFirst: Pe === 0,
              withBackdropBlur: m
            }),
            key: Pe,
            onDragStart: (pn) => pn.preventDefault(),
            style: rr
          },
          pe
        );
      }),
      /* @__PURE__ */ E.createElement(
        "div",
        {
          className: "absolute",
          "data-testid": Se("@paloma-carousel-last-id"),
          ref: w,
          style: {
            left: Vn(U),
            scale: `1 ${Math.pow(u, U - 1)}`,
            zIndex: z * -(z + 1)
          }
        },
        _[z - 1]
      )
    ), i && /* @__PURE__ */ E.createElement(
      a8,
      {
        currentSlide: k,
        isAnimatingBackward: Y,
        isAnimatingForward: W,
        items: n,
        motion: T.motion
      }
    ))
  );
};
function Eh({ card: e }) {
  return /* @__PURE__ */ G.jsx(
    ab,
    {
      className: "game-media-slider__card",
      contained: !0,
      eyebrow: "EA Help",
      media: /* @__PURE__ */ G.jsx(
        "img",
        {
          className: "game-media-slider__image",
          src: e.image,
          alt: e.title,
          loading: "lazy"
        }
      ),
      title: e.title,
      titleTag: "h3",
      action: "Open game",
      onClick: () => e.link && window.location.assign(e.link),
      size: "medium",
      variant: "base"
    }
  );
}
function d8({ cards: e = [], title: n = "Help by games" }) {
  const a = e.filter((i) => i == null ? void 0 : i.title).slice(0, 5);
  return a.length ? a.length === 1 ? /* @__PURE__ */ G.jsxs("section", { className: "game-media-slider", children: [
    /* @__PURE__ */ G.jsx("h2", { className: "block-stat-slider__title", children: n }),
    /* @__PURE__ */ G.jsx(Eh, { card: a[0] })
  ] }) : /* @__PURE__ */ G.jsx("section", { className: "game-media-slider", children: /* @__PURE__ */ G.jsx(
    u8,
    {
      title: n,
      arrows: !0,
      dots: !0,
      backArrowLabel: "Previous games",
      forwardArrowLabel: "Next games",
      className: "game-media-slider__carousel",
      carouselItemWrapperClassname: "game-media-slider__item",
      children: a.map((i) => /* @__PURE__ */ G.jsx(Eh, { card: i }, `${i.title}-${i.link || "card"}`))
    }
  ) }) : null;
}
var Sh = "";
function Ch(e) {
  return Object.entries(e).map(([n, a]) => `${n}: ${a};`).join(`
`);
}
function f8(e, n) {
  return O.useMemo(() => {
    if (!n)
      return [e, void 0];
    const a = e ?? (n && `theme-${z1(n)}`);
    return [
      a,
      `${n.light !== void 0 ? `[data-paloma-mode=light] #${a}:not([data-paloma-theme]), #${a}[data-paloma-mode=light] {
              ${Ch(n.light)}
            }` : Sh}
      ${n.dark !== void 0 ? `[data-paloma-mode=dark] #${a}:not([data-paloma-theme]), #${a}[data-paloma-mode=dark] {
              ${Ch(n.dark)}
            }` : Sh}`
    ];
  }, [n, e]);
}
var Gb = O.createContext({
  mode: "light",
  theme: "ea-blue",
  themeId: "",
  themeVariant: void 0,
  variant: "ea-blue"
}), p8 = (e) => O.useContext(Gb), Kb = ({
  children: e,
  config: n,
  id: a,
  mode: i,
  theme: s,
  themeId: c,
  themeVariant: u,
  ...f
}) => {
  const [m, p] = f8(a, n), v = p8(), b = O.useMemo(() => ({
    ...v,
    mode: i ?? v.mode,
    theme: s ?? v.theme,
    themeId: c ?? v.themeId,
    themeVariant: u ?? v.themeVariant,
    variant: s ?? v.theme
  }), [v, i, s, c, u]);
  return /* @__PURE__ */ E.createElement(Gb.Provider, { value: b }, p && /* @__PURE__ */ E.createElement("style", { "data-testid": "@paloma-theme-provider-style-id" }, p), /* @__PURE__ */ E.createElement(
    "div",
    {
      ...f,
      "data-paloma-mode": b.mode,
      "data-paloma-theme": b.theme,
      "data-paloma-variant": b.themeVariant,
      "data-testid": b.themeId,
      id: m
    },
    e
  ));
};
function m8() {
  return /* @__PURE__ */ G.jsxs("section", { className: "ea-react-homepage-layout__tools", children: [
    /* @__PURE__ */ G.jsx(
      G2,
      {
        className: "ea-react-homepage-layout__alert",
        status: "none",
        title: "EA Forums community",
        body: "Find game help, updates, and the latest player discussions.",
        badge: "LIVE"
      }
    ),
    /* @__PURE__ */ G.jsx(m5, {}),
    /* @__PURE__ */ G.jsxs("div", { className: "ea-react-homepage-layout__actions", children: [
      /* @__PURE__ */ G.jsx(
        i5,
        {
          standalone: !0,
          variant: "text",
          label: "Community",
          appearance: "highlight",
          size: "small"
        }
      ),
      /* @__PURE__ */ G.jsx(E5, { as: "p", size: "small", children: "Explore what is happening across EA games." }),
      /* @__PURE__ */ G.jsx(
        Nd,
        {
          size: "small",
          variant: "secondary",
          onPress: () => window.location.assign("/categories"),
          children: "Browse categories"
        }
      ),
      /* @__PURE__ */ G.jsx(Il, { href: "/latest", size: "small", hoverUnderline: !0, children: "Latest discussions" })
    ] })
  ] });
}
function g8({ cards: e = [] }) {
  const [n, a] = O.useState(!0);
  return O.useEffect(() => {
    window.alert("Homepage loaded");
  }, []), /* @__PURE__ */ G.jsx("main", { className: "ea-react-homepage-layout", children: /* @__PURE__ */ G.jsxs(Kb, { mode: "dark", children: [
    /* @__PURE__ */ G.jsx(
      Nd,
      {
        size: "small",
        variant: "secondary",
        onPress: () => a((i) => !i),
        children: n ? "Hide homepage" : "Show homepage"
      }
    ),
    n && /* @__PURE__ */ G.jsxs(G.Fragment, { children: [
      /* @__PURE__ */ G.jsx(m8, {}),
      /* @__PURE__ */ G.jsx("section", { className: "ea-react-homepage-layout__game-slider", children: /* @__PURE__ */ G.jsx(d8, { cards: e }) }),
      /* @__PURE__ */ G.jsx("section", { className: "ea-react-homepage-layout__content-grid", children: /* @__PURE__ */ G.jsx(I3, {}) }),
      /* @__PURE__ */ G.jsx("section", { className: "ea-react-homepage-layout__announcements", children: /* @__PURE__ */ G.jsx(X5, {}) })
    ] })
  ] }) });
}
const h8 = (e) => G.jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: [G.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10Z" }), G.jsx("path", { d: "M16.3287 17.743C16.8458 17.3198 17.3198 16.8459 17.7429 16.3287L21.7069 20.2928L20.2927 21.707L16.3287 17.743Z" })] }), v8 = ({ children: e, containerClassName: n, emphasis: a, shape: i, size: s }) => {
  const c = typeof s == "number", u = c ? {
    height: s,
    padding: s / 2,
    width: s
  } : void 0, f = c ? void 0 : s;
  return G.jsx("div", { className: tr({
    class: n,
    emphasis: a,
    shape: i,
    size: f
  }), "data-testid": "@paloma-icons-contained-id", style: u, children: e });
}, b8 = ({ "aria-label": e, className: n, color: a, contained: i, containerClassName: s, emphasis: c = "regular", shape: u = "circle", size: f = "medium", svgClassName: m, ...p }) => {
  const v = !e, b = typeof f == "number", h = b ? { height: f, width: f } : void 0, w = b ? void 0 : f, k = i ? v8 : O.Fragment, y = i ? { containerClassName: s, emphasis: c, shape: u, size: f } : {};
  return G.jsx(k, { ...y, children: G.jsx("span", { ...p, className: Nr({ class: n, size: w }), "data-namespace": "@paloma/icons", "data-size": f, id: "search-id", style: { color: a, ...h }, children: G.jsx(h8, { "aria-hidden": v, "aria-label": e, className: er({ class: m, size: w }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "search-svg-id", style: { fill: y8, ...h } }) }) });
}, y8 = "currentColor", w8 = (e) => G.jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", ...e, children: G.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 10.4141L6.70706 15.707L5.29285 14.2928L11.2928 8.2928L12 7.58569L12.7071 8.2928L18.7071 14.2928L17.2928 15.707L12 10.4141Z" }) }), x8 = ({ children: e, containerClassName: n, emphasis: a, shape: i, size: s }) => {
  const c = typeof s == "number", u = c ? {
    height: s,
    padding: s / 2,
    width: s
  } : void 0, f = c ? void 0 : s;
  return G.jsx("div", { className: tr({
    class: n,
    emphasis: a,
    shape: i,
    size: f
  }), "data-testid": "@paloma-icons-contained-id", style: u, children: e });
}, k8 = ({ "aria-label": e, className: n, color: a, contained: i, containerClassName: s, emphasis: c = "regular", shape: u = "circle", size: f = "medium", svgClassName: m, ...p }) => {
  const v = !e, b = typeof f == "number", h = b ? { height: f, width: f } : void 0, w = b ? void 0 : f, k = i ? x8 : O.Fragment, y = i ? { containerClassName: s, emphasis: c, shape: u, size: f } : {};
  return G.jsx(k, { ...y, children: G.jsx("span", { ...p, className: Nr({ class: n, size: w }), "data-namespace": "@paloma/icons", "data-size": f, id: "carat-up-small-id", style: { color: a, ...h }, children: G.jsx(w8, { "aria-hidden": v, "aria-label": e, className: er({ class: m, size: w }), "data-testid": "@paloma-icon-svg-id", focusable: "false", id: "carat-up-small-svg-id", style: { fill: _8, ...h } }) }) });
}, _8 = "currentColor";
var E8 = () => {
  const [e, n] = O.useState(0), [a, i] = O.useState(!1), [s, c] = O.useState(0);
  O.useEffect(() => {
    const f = window.scrollY;
    c(f), i(!0);
  }, []);
  const u = O.useCallback(() => {
    const f = window.scrollY;
    c(f), f <= 5 || f <= e ? i(!0) : i(!1), n(f);
  }, [e]);
  return O.useEffect(() => {
    if (!(typeof window > "u"))
      return window.addEventListener("scroll", u, { passive: !0 }), () => window.removeEventListener("scroll", u);
  }, [u]), { scrollPosY: s, visible: a };
};
function S8(e, n, a) {
  try {
    const s = E.Children.only(e);
    if (s.type === n)
      return a ? a(s, s == null ? void 0 : s.props) : e;
  } catch {
  }
  return null;
}
function Do(e, n) {
  if (!n)
    return null;
  const a = E.Children.only(n);
  return E.cloneElement(a, { ...e });
}
var C8 = oe({
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
}), z8 = "span", Yb = O.forwardRef(
  ({
    as: e,
    children: n,
    className: a,
    fontWeight: i = "normal",
    showTitle: s = !1,
    size: c,
    truncate: u = !1,
    underline: f = !1,
    variant: m,
    ...p
  }, v) => {
    const b = e ?? z8, [h, w] = O.useMemo(() => m === "heading" ? [c ?? "large", m] : [c ?? "medium", "body"], [c, m]);
    return /* @__PURE__ */ E.createElement(
      b,
      {
        className: C8({
          className: a,
          fontWeight: i,
          truncate: u,
          underline: f,
          [w]: h
        }),
        "data-font-weight": i,
        "data-size": h,
        "data-truncate": u,
        "data-underline": f,
        "data-variant": w,
        ref: v,
        title: s ? p.title ?? (u && typeof n == "string" ? n : void 0) : void 0,
        ...p
      },
      n
    );
  }
), zh = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Et = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, $8 = (e, n) => JSON.stringify(e) === JSON.stringify(n);
function Qb(e, n) {
  e.forEach(function(a) {
    Array.isArray(a) ? Qb(a, n) : n.push(a);
  });
}
function Xb(e) {
  let n = [];
  return Qb(e, n), n;
}
var Zb = (...e) => Xb(e).filter(Boolean), Jb = (e, n) => {
  let a = {}, i = Object.keys(e), s = Object.keys(n);
  for (let c of i)
    if (s.includes(c)) {
      let u = e[c], f = n[c];
      typeof u == "object" && typeof f == "object" ? a[c] = Jb(u, f) : Array.isArray(u) || Array.isArray(f) ? a[c] = Zb(f, u) : a[c] = f + " " + u;
    } else
      a[c] = e[c];
  for (let c of s)
    i.includes(c) || (a[c] = n[c]);
  return a;
}, $h = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim(), ef = "-";
function P8(e) {
  const n = F8(e), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: i
  } = e;
  function s(u) {
    const f = u.split(ef);
    return f[0] === "" && f.length !== 1 && f.shift(), e0(f, n) || A8(u);
  }
  function c(u, f) {
    const m = a[u] || [];
    return f && i[u] ? [...m, ...i[u]] : m;
  }
  return {
    getClassGroupId: s,
    getConflictingClassGroupIds: c
  };
}
function e0(e, n) {
  var u;
  if (e.length === 0)
    return n.classGroupId;
  const a = e[0], i = n.nextPart.get(a), s = i ? e0(e.slice(1), i) : void 0;
  if (s)
    return s;
  if (n.validators.length === 0)
    return;
  const c = e.join(ef);
  return (u = n.validators.find(({
    validator: f
  }) => f(c))) == null ? void 0 : u.classGroupId;
}
var Ph = /^\[(.+)\]$/;
function A8(e) {
  if (Ph.test(e)) {
    const n = Ph.exec(e)[1], a = n == null ? void 0 : n.substring(0, n.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}
function F8(e) {
  const {
    theme: n,
    prefix: a
  } = e, i = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return N8(Object.entries(e.classGroups), a).forEach(([c, u]) => {
    ld(u, i, c, n);
  }), i;
}
function ld(e, n, a, i) {
  e.forEach((s) => {
    if (typeof s == "string") {
      const c = s === "" ? n : Ah(n, s);
      c.classGroupId = a;
      return;
    }
    if (typeof s == "function") {
      if (T8(s)) {
        ld(s(i), n, a, i);
        return;
      }
      n.validators.push({
        validator: s,
        classGroupId: a
      });
      return;
    }
    Object.entries(s).forEach(([c, u]) => {
      ld(u, Ah(n, c), a, i);
    });
  });
}
function Ah(e, n) {
  let a = e;
  return n.split(ef).forEach((i) => {
    a.nextPart.has(i) || a.nextPart.set(i, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(i);
  }), a;
}
function T8(e) {
  return e.isThemeGetter;
}
function N8(e, n) {
  return n ? e.map(([a, i]) => {
    const s = i.map((c) => typeof c == "string" ? n + c : typeof c == "object" ? Object.fromEntries(Object.entries(c).map(([u, f]) => [n + u, f])) : c);
    return [a, s];
  }) : e;
}
function I8(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, a = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  function s(c, u) {
    a.set(c, u), n++, n > e && (n = 0, i = a, a = /* @__PURE__ */ new Map());
  }
  return {
    get(c) {
      let u = a.get(c);
      if (u !== void 0)
        return u;
      if ((u = i.get(c)) !== void 0)
        return s(c, u), u;
    },
    set(c, u) {
      a.has(c) ? a.set(c, u) : s(c, u);
    }
  };
}
var t0 = "!";
function M8(e) {
  const n = e.separator, a = n.length === 1, i = n[0], s = n.length;
  return function(u) {
    const f = [];
    let m = 0, p = 0, v;
    for (let y = 0; y < u.length; y++) {
      let _ = u[y];
      if (m === 0) {
        if (_ === i && (a || u.slice(y, y + s) === n)) {
          f.push(u.slice(p, y)), p = y + s;
          continue;
        }
        if (_ === "/") {
          v = y;
          continue;
        }
      }
      _ === "[" ? m++ : _ === "]" && m--;
    }
    const b = f.length === 0 ? u : u.substring(p), h = b.startsWith(t0), w = h ? b.substring(1) : b, k = v && v > p ? v - p : void 0;
    return {
      modifiers: f,
      hasImportantModifier: h,
      baseClassName: w,
      maybePostfixModifierPosition: k
    };
  };
}
function L8(e) {
  if (e.length <= 1)
    return e;
  const n = [];
  let a = [];
  return e.forEach((i) => {
    i[0] === "[" ? (n.push(...a.sort(), i), a = []) : a.push(i);
  }), n.push(...a.sort()), n;
}
function R8(e) {
  return {
    cache: I8(e.cacheSize),
    splitModifiers: M8(e),
    ...P8(e)
  };
}
var j8 = /\s+/;
function O8(e, n) {
  const {
    splitModifiers: a,
    getClassGroupId: i,
    getConflictingClassGroupIds: s
  } = n, c = /* @__PURE__ */ new Set();
  return e.trim().split(j8).map((u) => {
    const {
      modifiers: f,
      hasImportantModifier: m,
      baseClassName: p,
      maybePostfixModifierPosition: v
    } = a(u);
    let b = i(v ? p.substring(0, v) : p), h = !!v;
    if (!b) {
      if (!v)
        return {
          isTailwindClass: !1,
          originalClassName: u
        };
      if (b = i(p), !b)
        return {
          isTailwindClass: !1,
          originalClassName: u
        };
      h = !1;
    }
    const w = L8(f).join(":");
    return {
      isTailwindClass: !0,
      modifierId: m ? w + t0 : w,
      classGroupId: b,
      originalClassName: u,
      hasPostfixModifier: h
    };
  }).reverse().filter((u) => {
    if (!u.isTailwindClass)
      return !0;
    const {
      modifierId: f,
      classGroupId: m,
      hasPostfixModifier: p
    } = u, v = f + m;
    return c.has(v) ? !1 : (c.add(v), s(m, p).forEach((b) => c.add(f + b)), !0);
  }).reverse().map((u) => u.originalClassName).join(" ");
}
function V8() {
  let e = 0, n, a, i = "";
  for (; e < arguments.length; )
    (n = arguments[e++]) && (a = r0(n)) && (i && (i += " "), i += a);
  return i;
}
function r0(e) {
  if (typeof e == "string")
    return e;
  let n, a = "";
  for (let i = 0; i < e.length; i++)
    e[i] && (n = r0(e[i])) && (a && (a += " "), a += n);
  return a;
}
function sd(e, ...n) {
  let a, i, s, c = u;
  function u(m) {
    const p = n.reduce((v, b) => b(v), e());
    return a = R8(p), i = a.cache.get, s = a.cache.set, c = f, f(m);
  }
  function f(m) {
    const p = i(m);
    if (p)
      return p;
    const v = O8(m, a);
    return s(m, v), v;
  }
  return function() {
    return c(V8.apply(null, arguments));
  };
}
function De(e) {
  const n = (a) => a[e] || [];
  return n.isThemeGetter = !0, n;
}
var n0 = /^\[(?:([a-z-]+):)?(.+)\]$/i, D8 = /^\d+\/\d+$/, B8 = /* @__PURE__ */ new Set(["px", "full", "screen"]), U8 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, H8 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, W8 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, q8 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, G8 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function xr(e) {
  return Fn(e) || B8.has(e) || D8.test(e);
}
function rn(e) {
  return Pa(e, "length", tE);
}
function Fn(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Sl(e) {
  return Pa(e, "number", Fn);
}
function So(e) {
  return !!e && Number.isInteger(Number(e));
}
function K8(e) {
  return e.endsWith("%") && Fn(e.slice(0, -1));
}
function _e(e) {
  return n0.test(e);
}
function nn(e) {
  return U8.test(e);
}
var Y8 = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function Q8(e) {
  return Pa(e, Y8, a0);
}
function X8(e) {
  return Pa(e, "position", a0);
}
var Z8 = /* @__PURE__ */ new Set(["image", "url"]);
function J8(e) {
  return Pa(e, Z8, nE);
}
function eE(e) {
  return Pa(e, "", rE);
}
function Co() {
  return !0;
}
function Pa(e, n, a) {
  const i = n0.exec(e);
  return i ? i[1] ? typeof n == "string" ? i[1] === n : n.has(i[1]) : a(i[2]) : !1;
}
function tE(e) {
  return H8.test(e) && !W8.test(e);
}
function a0() {
  return !1;
}
function rE(e) {
  return q8.test(e);
}
function nE(e) {
  return G8.test(e);
}
function cd() {
  const e = De("colors"), n = De("spacing"), a = De("blur"), i = De("brightness"), s = De("borderColor"), c = De("borderRadius"), u = De("borderSpacing"), f = De("borderWidth"), m = De("contrast"), p = De("grayscale"), v = De("hueRotate"), b = De("invert"), h = De("gap"), w = De("gradientColorStops"), k = De("gradientColorStopPositions"), y = De("inset"), _ = De("margin"), A = De("opacity"), z = De("padding"), U = De("saturate"), W = De("scale"), Q = De("sepia"), Y = De("skew"), K = De("space"), X = De("translate"), ee = () => ["auto", "contain", "none"], ie = () => ["auto", "hidden", "clip", "visible", "scroll"], ae = () => ["auto", _e, n], S = () => [_e, n], R = () => ["", xr, rn], C = () => ["auto", Fn, _e], j = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], L = () => ["solid", "dashed", "dotted", "double", "none"], T = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], I = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], F = () => ["", "0", _e], V = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], $ = () => [Fn, Sl], D = () => [Fn, _e];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Co],
      spacing: [xr, rn],
      blur: ["none", "", nn, _e],
      brightness: $(),
      borderColor: [e],
      borderRadius: ["none", "", "full", nn, _e],
      borderSpacing: S(),
      borderWidth: R(),
      contrast: $(),
      grayscale: F(),
      hueRotate: D(),
      invert: F(),
      gap: S(),
      gradientColorStops: [e],
      gradientColorStopPositions: [K8, rn],
      inset: ae(),
      margin: ae(),
      opacity: $(),
      padding: S(),
      saturate: $(),
      scale: $(),
      sepia: F(),
      skew: D(),
      space: S(),
      translate: S()
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
        "break-after": V()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": V()
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
        object: [...j(), _e]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ie()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ie()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ie()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: ee()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": ee()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": ee()
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
        z: ["auto", So, _e]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: ae()
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
        grow: F()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: F()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", So, _e]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Co]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", So, _e]
        }, _e]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": C()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": C()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Co]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [So, _e]
        }, _e]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": C()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": C()
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
        justify: ["normal", ...I()]
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
        content: ["normal", ...I(), "baseline"]
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
        "place-content": [...I(), "baseline"]
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
        p: [z]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [z]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [z]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [z]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [z]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [z]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [z]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [z]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [z]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [_]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [_]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [_]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [_]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [_]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [_]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [_]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [_]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [_]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [K]
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
        "space-y": [K]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", _e, n]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [_e, n, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [_e, n, "none", "full", "min", "max", "fit", "prose", {
          screen: [nn]
        }, nn]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [_e, n, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [_e, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [_e, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [_e, n, "auto", "min", "max", "fit"]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Sl]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Co]
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
        "line-clamp": ["none", Fn, Sl]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", xr, _e]
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
        "placeholder-opacity": [A]
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
        "text-opacity": [A]
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
        decoration: [...L(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", xr, rn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", xr, _e]
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
        indent: S()
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
        "bg-opacity": [A]
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
        bg: [...j(), X8]
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
        bg: ["auto", "cover", "contain", Q8]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, J8]
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
        border: [f]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [f]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [f]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [f]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [f]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [f]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [f]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [f]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [f]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [A]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...L(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [f]
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
        "divide-y": [f]
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
        "divide-opacity": [A]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: L()
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
        outline: ["", ...L()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [xr, _e]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [xr, rn]
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
        ring: R()
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
        "ring-opacity": [A]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [xr, rn]
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
        shadow: ["", "inner", "none", nn, eE]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Co]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [A]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...T(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": T()
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
        blur: [a]
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
        contrast: [m]
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
        "hue-rotate": [v]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [b]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [U]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [Q]
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
        "backdrop-blur": [a]
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
        "backdrop-contrast": [m]
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
        "backdrop-hue-rotate": [v]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [b]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [A]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [U]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [Q]
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
        duration: D()
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
        delay: D()
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
        rotate: [So, _e]
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
        "skew-x": [Y]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [Y]
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
        "scroll-m": S()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": S()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": S()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": S()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": S()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": S()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": S()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": S()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": S()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": S()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": S()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": S()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": S()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": S()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": S()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": S()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": S()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": S()
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
        stroke: [xr, rn, Sl]
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
function aE(e, {
  cacheSize: n,
  prefix: a,
  separator: i,
  extend: s = {},
  override: c = {}
}) {
  jl(e, "cacheSize", n), jl(e, "prefix", a), jl(e, "separator", i);
  for (const u in c)
    oE(e[u], c[u]);
  for (const u in s)
    iE(e[u], s[u]);
  return e;
}
function jl(e, n, a) {
  a !== void 0 && (e[n] = a);
}
function oE(e, n) {
  if (n)
    for (const a in n)
      jl(e, a, n[a]);
}
function iE(e, n) {
  if (n)
    for (const a in n) {
      const i = n[a];
      i !== void 0 && (e[a] = (e[a] || []).concat(i));
    }
}
function lE(e, ...n) {
  return typeof e == "function" ? sd(cd, e, ...n) : sd(() => aE(cd(), e), ...n);
}
var sE = /* @__PURE__ */ sd(cd), cE = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, o0 = (e) => e || void 0, Jo = (...e) => o0(Xb(e).filter(Boolean).join(" ")), Au = null, $r = {}, ud = !1, zo = (...e) => (n) => n.twMerge ? ((!Au || ud) && (ud = !1, Au = Et($r) ? sE : lE({ ...$r, extend: { theme: $r.theme, classGroups: $r.classGroups, conflictingClassGroupModifiers: $r.conflictingClassGroupModifiers, conflictingClassGroups: $r.conflictingClassGroups, ...$r.extend } })), o0(Au(Jo(e)))) : Jo(e), Fh = (e, n) => {
  for (let a in n)
    e.hasOwnProperty(a) ? e[a] = Jo(e[a], n[a]) : e[a] = n[a];
  return e;
}, ss = (e, n) => {
  let { extend: a = null, slots: i = {}, variants: s = {}, compoundVariants: c = [], compoundSlots: u = [], defaultVariants: f = {} } = e, m = { ...cE, ...n }, p = a != null && a.base ? Jo(a.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, v = a != null && a.variants && !Et(a.variants) ? Jb(s, a.variants) : s, b = a != null && a.defaultVariants && !Et(a.defaultVariants) ? { ...a.defaultVariants, ...f } : f;
  !Et(m.twMergeConfig) && !$8(m.twMergeConfig, $r) && (ud = !0, $r = m.twMergeConfig);
  let h = Et(a == null ? void 0 : a.slots), w = Et(i) ? {} : { base: Jo(e == null ? void 0 : e.base, h && (a == null ? void 0 : a.base)), ...i }, k = h ? w : Fh({ ...a == null ? void 0 : a.slots }, Et(w) ? { base: e == null ? void 0 : e.base } : w), y = Et(a == null ? void 0 : a.compoundVariants) ? c : Zb(a == null ? void 0 : a.compoundVariants, c), _ = (z) => {
    if (Et(v) && Et(i) && h)
      return zo(p, z == null ? void 0 : z.class, z == null ? void 0 : z.className)(m);
    if (y && !Array.isArray(y))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof y}`);
    if (u && !Array.isArray(u))
      throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof u}`);
    let U = (S, R, C = [], j) => {
      let L = C;
      if (typeof R == "string")
        L = L.concat($h(R).split(" ").map((T) => `${S}:${T}`));
      else if (Array.isArray(R))
        L = L.concat(R.reduce((T, I) => T.concat(`${S}:${I}`), []));
      else if (typeof R == "object" && typeof j == "string") {
        for (let T in R)
          if (R.hasOwnProperty(T) && T === j) {
            let I = R[T];
            if (I && typeof I == "string") {
              let F = $h(I);
              L[j] ? L[j] = L[j].concat(F.split(" ").map((V) => `${S}:${V}`)) : L[j] = F.split(" ").map((V) => `${S}:${V}`);
            } else
              Array.isArray(I) && I.length > 0 && (L[j] = I.reduce((F, V) => F.concat(`${S}:${V}`), []));
          }
      }
      return L;
    }, W = (S, R = v, C = null, j = null) => {
      var L;
      let T = R[S];
      if (!T || Et(T))
        return null;
      let I = (L = j == null ? void 0 : j[S]) != null ? L : z == null ? void 0 : z[S];
      if (I === null)
        return null;
      let F = zh(I), V = Array.isArray(m.responsiveVariants) && m.responsiveVariants.length > 0 || m.responsiveVariants === !0, $ = b == null ? void 0 : b[S], D = [];
      if (typeof F == "object" && V)
        for (let [ve, ye] of Object.entries(F)) {
          let ze = T[ye];
          if (ve === "initial") {
            $ = ye;
            continue;
          }
          Array.isArray(m.responsiveVariants) && !m.responsiveVariants.includes(ve) || (D = U(ve, ze, D, C));
        }
      let me = F != null && typeof F != "object" ? F : zh($), fe = T[me || "false"];
      return typeof D == "object" && typeof C == "string" && D[C] ? Fh(D, fe) : D.length > 0 ? (D.push(fe), D) : fe;
    }, Q = () => v ? Object.keys(v).map((S) => W(S, v)) : null, Y = (S, R) => {
      if (!v || typeof v != "object")
        return null;
      let C = new Array();
      for (let j in v) {
        let L = W(j, v, S, R), T = S === "base" && typeof L == "string" ? L : L && L[S];
        T && (C[C.length] = T);
      }
      return C;
    }, K = {};
    for (let S in z)
      z[S] !== void 0 && (K[S] = z[S]);
    let X = (S, R) => {
      var C;
      let j = typeof (z == null ? void 0 : z[S]) == "object" ? { [S]: (C = z[S]) == null ? void 0 : C.initial } : {};
      return { ...b, ...K, ...j, ...R };
    }, ee = (S = [], R) => {
      let C = [];
      for (let { class: j, className: L, ...T } of S) {
        let I = !0;
        for (let [F, V] of Object.entries(T)) {
          let $ = X(F, R);
          if (Array.isArray(V)) {
            if (!V.includes($[F])) {
              I = !1;
              break;
            }
          } else if ($[F] !== V) {
            I = !1;
            break;
          }
        }
        I && (j && C.push(j), L && C.push(L));
      }
      return C;
    }, ie = (S) => {
      let R = ee(y, S);
      if (!Array.isArray(R))
        return R;
      let C = {};
      for (let j of R)
        if (typeof j == "string" && (C.base = zo(C.base, j)(m)), typeof j == "object")
          for (let [L, T] of Object.entries(j))
            C[L] = zo(C[L], T)(m);
      return C;
    }, ae = (S) => {
      if (u.length < 1)
        return null;
      let R = {};
      for (let { slots: C = [], class: j, className: L, ...T } of u) {
        if (!Et(T)) {
          let I = !0;
          for (let F of Object.keys(T)) {
            let V = X(F, S)[F];
            if (V === void 0 || (Array.isArray(T[F]) ? !T[F].includes(V) : T[F] !== V)) {
              I = !1;
              break;
            }
          }
          if (!I)
            continue;
        }
        for (let I of C)
          R[I] = R[I] || [], R[I].push([j, L]);
      }
      return R;
    };
    if (!Et(i) || !h) {
      let S = {};
      if (typeof k == "object" && !Et(k))
        for (let R of Object.keys(k))
          S[R] = (C) => {
            var j, L;
            return zo(k[R], Y(R, C), ((j = ie(C)) != null ? j : [])[R], ((L = ae(C)) != null ? L : [])[R], C == null ? void 0 : C.class, C == null ? void 0 : C.className)(m);
          };
      return S;
    }
    return zo(p, Q(), ee(y), z == null ? void 0 : z.class, z == null ? void 0 : z.className)(m);
  }, A = () => {
    if (!(!v || typeof v != "object"))
      return Object.keys(v);
  };
  return _.variantKeys = A(), _.extend = a, _.base = p, _.slots = k, _.variants = v, _.defaultVariants = b, _.compoundSlots = u, _.compoundVariants = y, _;
}, uE = ss({
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
}), dE = ss({
  base: "text-content-neutral-bold"
}), fE = ss({
  // Target the logos text to hide on mobile only
  base: "text-content-neutral-bold [&_span[data-logo-product-name=paloma-logo]]:max-lg:hidden"
}), pE = [
  /* Uses a dummy class because FocusRing is a functional component that just adds
      the class to the content.
  
      The cn or other style functions on the FocusRing are always called, so we can't
      listen to them to test functionality */
  "@paloma-focus-ring",
  "outline",
  "outline-2",
  "outline-offset-2",
  "outline-interactive-highlight"
], i0 = ({
  children: e,
  disabled: n,
  focusRingClass: a,
  ...i
}) => n ? e : /* @__PURE__ */ E.createElement(dr, { focusRingClass: Bt(pE, a), ...i }, e), mE = oe({
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
}), Th = ({
  children: e,
  showTitle: n,
  size: a
}) => /* @__PURE__ */ E.createElement(
  Yb,
  {
    fontWeight: "bold",
    showTitle: n,
    size: a,
    truncate: !0,
    variant: "body"
  },
  e
), l0 = O.forwardRef(
  ({
    "aria-label": e,
    as: n,
    children: a,
    className: i,
    disabled: s,
    hideButton: c,
    iconOnly: u,
    isLoading: f,
    leadingIcon: m,
    loadingIcon: p,
    loadingLabel: v = "Loading",
    onBlur: b,
    onClick: h,
    onFocus: w,
    onPress: k,
    showTitle: y,
    size: _ = "medium",
    trailingIcon: A,
    type: z = "button",
    variant: U = "primary",
    ...W
  }, Q) => {
    const Y = n ?? "button", K = n === "div" || n === "span", X = n === "a", ee = O.useRef(null);
    lt(
      !(u && !e && !K),
      "Button with iconOnly must have an aria-label for accessibility. If Button is purely decorative and does not convey any meaning or action, it should have aria-hidden='true' to be ignored by assistive technologies."
    );
    const { buttonProps: ie } = Ca(
      {
        elementType: Y,
        isDisabled: !!s,
        onBlur: b,
        onFocus: w,
        onPress: f ? void 0 : (R) => {
          k ? k(R) : h == null || h(R);
        }
      },
      ee
    ), ae = K ? W : Je(ie, W), S = /* @__PURE__ */ E.createElement(E.Fragment, null, p ?? Do(
      { className: "animate-loading-hourglass", size: _ },
      /* @__PURE__ */ E.createElement(zd, null)
    ), !u && /* @__PURE__ */ E.createElement(Th, { size: _ }, v));
    return /* @__PURE__ */ E.createElement(i0, null, O.createElement(
      Y,
      {
        "aria-label": f ? v : e,
        className: mE({
          class: i,
          hideButton: c,
          iconOnly: u,
          isDecorative: K,
          isLoading: f,
          size: _,
          variant: U
        }),
        /* Add this to test uses of Button on other components */
        "data-size": Se(_),
        /* Add this to test uses of Button on other components */
        "data-variant": Se(U),
        ref: Tr(ee, Q),
        ...ae,
        "aria-busy": f ? !0 : void 0,
        "aria-disabled": !!s || !!f || void 0,
        // react-aria adds role="button" for non-button elements; strip it for links
        ...X && { role: void 0 },
        type: X || K ? void 0 : f && (z === "submit" || z === "reset") ? "button" : z
      },
      f ? S : /* @__PURE__ */ E.createElement(E.Fragment, null, Do(
        {
          size: m != null && m.props.size ? m.props.size : _
        },
        m
      ), !u && /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(Th, { showTitle: y, size: _ }, a), Do(
        {
          size: A != null && A.props.size ? A.props.size : _
        },
        A
      )))
    ));
  }
), Nh = ({
  "aria-label": e = "Search",
  onClick: n,
  ...a
}) => /* @__PURE__ */ E.createElement(
  l0,
  {
    "aria-label": e,
    "data-testid": Se("@paloma-header-search-button-id"),
    iconOnly: !0,
    leadingIcon: /* @__PURE__ */ E.createElement(b8, null),
    onClick: n,
    size: "small",
    variant: "secondary",
    ...a
  }
), gE = oe({
  base: "@paloma-link group inline-flex items-center gap-2 no-underline rounded-sm outline-none text-inherit text-content-highlight aria-disabled:pointer-events-none aria-disabled:opacity-30"
}), hE = oe({
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
}), vE = O.forwardRef(
  ({
    "aria-current": e,
    "aria-expanded": n,
    "aria-label": a,
    as: i,
    bold: s,
    children: c,
    className: u,
    disabled: f,
    hoverUnderline: m = !0,
    href: p,
    leadingIcon: v,
    onBlur: b,
    onClick: h,
    onFocus: w,
    size: k = "medium",
    target: y,
    trailingIcon: _,
    underline: A = !1,
    ...z
  }, U) => {
    const W = ri("a"), Q = i ?? W, Y = O.useRef(null), { linkProps: K } = Cd(
      { isDisabled: f, onBlur: b, onFocus: w, onPress: h },
      Y
    ), X = Je(K, z);
    return /* @__PURE__ */ E.createElement(i0, { disabled: f }, /* @__PURE__ */ E.createElement(
      Q,
      {
        ...X,
        "aria-current": e,
        "aria-disabled": f,
        "aria-expanded": n,
        "aria-label": a,
        className: gE({
          class: u
        }),
        "data-bold": Se(s),
        "data-hover-underline": Se(m),
        "data-size": Se(k),
        "data-underline": Se(A),
        disabled: f,
        href: p,
        ref: Tr(U, Y),
        tabIndex: 0,
        target: y
      },
      Do({ size: k }, v),
      /* @__PURE__ */ E.createElement(
        Yb,
        {
          className: hE({ hoverUnderline: m, underline: A }),
          fontWeight: s ? "bold" : "normal",
          size: k,
          underline: A,
          variant: "body"
        },
        c
      ),
      Do({ size: k }, _)
    ));
  }
), bE = ss({
  variants: {
    isOpen: {
      false: "bg-transparent",
      true: ""
    }
  }
}), yE = ({
  children: e,
  href: n,
  isOpen: a,
  isSecondaryLink: i = !1,
  leadingIcon: s,
  ...c
}) => {
  const u = i ? "medium" : "large";
  return n ? /* @__PURE__ */ E.createElement(
    vE,
    {
      bold: !0,
      className: "text-content-neutral-bold rounded-full px-5 py-4",
      "data-testid": "@paloma-header-nav-link-id",
      hoverUnderline: !1,
      href: n,
      leadingIcon: s,
      size: u,
      underline: !1
    },
    e
  ) : /* @__PURE__ */ E.createElement(
    l0,
    {
      ...c,
      className: bE({ isOpen: a }),
      leadingIcon: s,
      size: u,
      trailingIcon: a ? /* @__PURE__ */ E.createElement(
        k8,
        {
          "data-testid": "@paloma-header-nav-button-icon-open-id",
          size: "small"
        }
      ) : /* @__PURE__ */ E.createElement(
        Jv,
        {
          "data-testid": "@paloma-header-nav-button-icon-closed-id",
          size: "small"
        }
      ),
      type: "button",
      variant: a ? "primary" : "inverse"
    },
    e
  );
}, wE = ({
  className: e,
  hideSearchButton: n = !1,
  logo: a,
  mobileNav: i,
  mobileNavAriaLabel: s,
  navAriaLabel: c = "Main",
  navigationBg: u = !0,
  onSearchPress: f,
  primaryNav: m,
  searchButtonAriaLabel: p,
  searchEnabled: v,
  secondaryNav: b
}) => {
  const { scrollPosY: k, visible: y } = E8(), _ = k > 76, A = k > 97, z = !y && _, U = !y && A, W = _ && u, Q = A && u;
  return /* @__PURE__ */ E.createElement(
    "header",
    {
      className: uE({
        className: e,
        hasBgDesktop: Q,
        hasBgMobile: W,
        scrolledHeaderVisible: y,
        shouldHideDesktop: U,
        shouldHideMobile: z
      }),
      "data-testid": "@paloma-header-id"
    },
    /* @__PURE__ */ E.createElement(
      "nav",
      {
        "aria-label": c,
        className: "max-lg:hidden lg:flex flex-grow justify-between gap-10 h-16 col-span-full box-border mx-auto px-6 lg:px-10 w-full max-md:max-w-[815px] md:max-w-[1327px] lg:max-w-[1520px]"
      },
      /* @__PURE__ */ E.createElement("div", { className: "flex gap-10" }, a && E.cloneElement(a, {
        className: dE({
          className: a.props.className
        }),
        "data-testid": "@paloma-header-desktop-logo-id"
      }), /* @__PURE__ */ E.createElement("div", { className: "flex gap-2 items-center" }, m == null ? void 0 : m.map(
        (Y, K) => E.cloneElement(Y, {
          key: `@paloma-header-primary-nav-${K}`
        })
      ))),
      /* @__PURE__ */ E.createElement("div", { className: "flex gap-4 items-center" }, b == null ? void 0 : b.map(
        (Y, K) => S8(Y, yE) ? E.cloneElement(Y, {
          isSecondaryLink: !0,
          key: `@paloma-header-secondary-nav-${K}`
        }) : E.cloneElement(Y, {
          key: `@paloma-header-secondary-nav-${K}`
        })
      ), v && /* @__PURE__ */ E.createElement(
        Nh,
        {
          "aria-label": p,
          "data-testid": "@paloma-header-search-desktop-id",
          hideButton: n,
          onClick: f
        }
      ))
    ),
    /* @__PURE__ */ E.createElement(
      "nav",
      {
        "aria-label": s || c,
        className: "px-6 w-full max-lg:flex max-lg:justify-between lg:hidden box-border mx-auto max-md:max-w-[815px] md:max-w-[1327px]"
      },
      a && E.cloneElement(a, {
        className: fE({ className: a.props.className }),
        "data-testid": "@paloma-header-mobile-logo-id"
      }),
      i,
      v && /* @__PURE__ */ E.createElement(
        Nh,
        {
          "aria-label": p,
          "data-testid": "@paloma-header-search-mobile-id",
          hideButton: n,
          onClick: f
        }
      )
    )
  );
}, xE = oe({
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
}), kE = "span", _E = O.forwardRef(
  ({
    as: e,
    children: n,
    className: a,
    fontWeight: i = "normal",
    showTitle: s = !1,
    size: c,
    truncate: u = !1,
    underline: f = !1,
    variant: m,
    ...p
  }, v) => {
    const b = e ?? kE, [h, w] = O.useMemo(() => m === "heading" ? [c ?? "large", m] : [c ?? "medium", "body"], [c, m]);
    return /* @__PURE__ */ E.createElement(
      b,
      {
        className: xE({
          className: a,
          fontWeight: i,
          truncate: u,
          underline: f,
          [w]: h
        }),
        "data-font-weight": i,
        "data-size": h,
        "data-truncate": u,
        "data-underline": f,
        "data-variant": w,
        ref: v,
        title: s ? p.title ?? (u && typeof n == "string" ? n : void 0) : void 0,
        ...p
      },
      n
    );
  }
), EE = (e) => /* @__PURE__ */ E.createElement(
  "svg",
  {
    fill: "currentColor",
    viewBox: "0 0 41 40",
    xmlns: "http://www.w3.org/2000/svg",
    ...e
  },
  /* @__PURE__ */ E.createElement(
    "path",
    {
      clipRule: "evenodd",
      d: "M20.5 40C31.5457 40 40.5 31.0457 40.5 20C40.5 8.9543 31.5457 0 20.5 0C9.4543 0 0.5 8.9543 0.5 20C0.5 31.0457 9.4543 40 20.5 40ZM8.36931 18.583H20.017L18.2273 21.4453H12.6307L10.8693 24.1377H19.0795L26.3807 13L35.5 27H32.0625L30.2443 24.1377H24.9318L26.6932 21.4453H28.3977L26.3807 18.583L20.6989 27H5.5L9.10796 21.4453H6.49432L8.36931 18.583ZM12.0909 13H23.9943L22.233 15.9474H10.2727L12.0909 13Z",
      fillRule: "evenodd"
    }
  )
), Ih = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, St = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, SE = (e, n) => JSON.stringify(e) === JSON.stringify(n);
function s0(e, n) {
  e.forEach(function(a) {
    Array.isArray(a) ? s0(a, n) : n.push(a);
  });
}
function c0(e) {
  let n = [];
  return s0(e, n), n;
}
var u0 = (...e) => c0(e).filter(Boolean), d0 = (e, n) => {
  let a = {}, i = Object.keys(e), s = Object.keys(n);
  for (let c of i)
    if (s.includes(c)) {
      let u = e[c], f = n[c];
      typeof u == "object" && typeof f == "object" ? a[c] = d0(u, f) : Array.isArray(u) || Array.isArray(f) ? a[c] = u0(f, u) : a[c] = f + " " + u;
    } else
      a[c] = e[c];
  for (let c of s)
    i.includes(c) || (a[c] = n[c]);
  return a;
}, Mh = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim(), tf = "-";
function CE(e) {
  const n = $E(e), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: i
  } = e;
  function s(u) {
    const f = u.split(tf);
    return f[0] === "" && f.length !== 1 && f.shift(), f0(f, n) || zE(u);
  }
  function c(u, f) {
    const m = a[u] || [];
    return f && i[u] ? [...m, ...i[u]] : m;
  }
  return {
    getClassGroupId: s,
    getConflictingClassGroupIds: c
  };
}
function f0(e, n) {
  var u;
  if (e.length === 0)
    return n.classGroupId;
  const a = e[0], i = n.nextPart.get(a), s = i ? f0(e.slice(1), i) : void 0;
  if (s)
    return s;
  if (n.validators.length === 0)
    return;
  const c = e.join(tf);
  return (u = n.validators.find(({
    validator: f
  }) => f(c))) == null ? void 0 : u.classGroupId;
}
var Lh = /^\[(.+)\]$/;
function zE(e) {
  if (Lh.test(e)) {
    const n = Lh.exec(e)[1], a = n == null ? void 0 : n.substring(0, n.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}
function $E(e) {
  const {
    theme: n,
    prefix: a
  } = e, i = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return AE(Object.entries(e.classGroups), a).forEach(([c, u]) => {
    dd(u, i, c, n);
  }), i;
}
function dd(e, n, a, i) {
  e.forEach((s) => {
    if (typeof s == "string") {
      const c = s === "" ? n : Rh(n, s);
      c.classGroupId = a;
      return;
    }
    if (typeof s == "function") {
      if (PE(s)) {
        dd(s(i), n, a, i);
        return;
      }
      n.validators.push({
        validator: s,
        classGroupId: a
      });
      return;
    }
    Object.entries(s).forEach(([c, u]) => {
      dd(u, Rh(n, c), a, i);
    });
  });
}
function Rh(e, n) {
  let a = e;
  return n.split(tf).forEach((i) => {
    a.nextPart.has(i) || a.nextPart.set(i, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(i);
  }), a;
}
function PE(e) {
  return e.isThemeGetter;
}
function AE(e, n) {
  return n ? e.map(([a, i]) => {
    const s = i.map((c) => typeof c == "string" ? n + c : typeof c == "object" ? Object.fromEntries(Object.entries(c).map(([u, f]) => [n + u, f])) : c);
    return [a, s];
  }) : e;
}
function FE(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, a = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  function s(c, u) {
    a.set(c, u), n++, n > e && (n = 0, i = a, a = /* @__PURE__ */ new Map());
  }
  return {
    get(c) {
      let u = a.get(c);
      if (u !== void 0)
        return u;
      if ((u = i.get(c)) !== void 0)
        return s(c, u), u;
    },
    set(c, u) {
      a.has(c) ? a.set(c, u) : s(c, u);
    }
  };
}
var p0 = "!";
function TE(e) {
  const n = e.separator, a = n.length === 1, i = n[0], s = n.length;
  return function(u) {
    const f = [];
    let m = 0, p = 0, v;
    for (let y = 0; y < u.length; y++) {
      let _ = u[y];
      if (m === 0) {
        if (_ === i && (a || u.slice(y, y + s) === n)) {
          f.push(u.slice(p, y)), p = y + s;
          continue;
        }
        if (_ === "/") {
          v = y;
          continue;
        }
      }
      _ === "[" ? m++ : _ === "]" && m--;
    }
    const b = f.length === 0 ? u : u.substring(p), h = b.startsWith(p0), w = h ? b.substring(1) : b, k = v && v > p ? v - p : void 0;
    return {
      modifiers: f,
      hasImportantModifier: h,
      baseClassName: w,
      maybePostfixModifierPosition: k
    };
  };
}
function NE(e) {
  if (e.length <= 1)
    return e;
  const n = [];
  let a = [];
  return e.forEach((i) => {
    i[0] === "[" ? (n.push(...a.sort(), i), a = []) : a.push(i);
  }), n.push(...a.sort()), n;
}
function IE(e) {
  return {
    cache: FE(e.cacheSize),
    splitModifiers: TE(e),
    ...CE(e)
  };
}
var ME = /\s+/;
function LE(e, n) {
  const {
    splitModifiers: a,
    getClassGroupId: i,
    getConflictingClassGroupIds: s
  } = n, c = /* @__PURE__ */ new Set();
  return e.trim().split(ME).map((u) => {
    const {
      modifiers: f,
      hasImportantModifier: m,
      baseClassName: p,
      maybePostfixModifierPosition: v
    } = a(u);
    let b = i(v ? p.substring(0, v) : p), h = !!v;
    if (!b) {
      if (!v)
        return {
          isTailwindClass: !1,
          originalClassName: u
        };
      if (b = i(p), !b)
        return {
          isTailwindClass: !1,
          originalClassName: u
        };
      h = !1;
    }
    const w = NE(f).join(":");
    return {
      isTailwindClass: !0,
      modifierId: m ? w + p0 : w,
      classGroupId: b,
      originalClassName: u,
      hasPostfixModifier: h
    };
  }).reverse().filter((u) => {
    if (!u.isTailwindClass)
      return !0;
    const {
      modifierId: f,
      classGroupId: m,
      hasPostfixModifier: p
    } = u, v = f + m;
    return c.has(v) ? !1 : (c.add(v), s(m, p).forEach((b) => c.add(f + b)), !0);
  }).reverse().map((u) => u.originalClassName).join(" ");
}
function RE() {
  let e = 0, n, a, i = "";
  for (; e < arguments.length; )
    (n = arguments[e++]) && (a = m0(n)) && (i && (i += " "), i += a);
  return i;
}
function m0(e) {
  if (typeof e == "string")
    return e;
  let n, a = "";
  for (let i = 0; i < e.length; i++)
    e[i] && (n = m0(e[i])) && (a && (a += " "), a += n);
  return a;
}
function fd(e, ...n) {
  let a, i, s, c = u;
  function u(m) {
    const p = n.reduce((v, b) => b(v), e());
    return a = IE(p), i = a.cache.get, s = a.cache.set, c = f, f(m);
  }
  function f(m) {
    const p = i(m);
    if (p)
      return p;
    const v = LE(m, a);
    return s(m, v), v;
  }
  return function() {
    return c(RE.apply(null, arguments));
  };
}
function Be(e) {
  const n = (a) => a[e] || [];
  return n.isThemeGetter = !0, n;
}
var g0 = /^\[(?:([a-z-]+):)?(.+)\]$/i, jE = /^\d+\/\d+$/, OE = /* @__PURE__ */ new Set(["px", "full", "screen"]), VE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, DE = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, BE = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, UE = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, HE = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function kr(e) {
  return Tn(e) || OE.has(e) || jE.test(e);
}
function an(e) {
  return Aa(e, "length", ZE);
}
function Tn(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Cl(e) {
  return Aa(e, "number", Tn);
}
function $o(e) {
  return !!e && Number.isInteger(Number(e));
}
function WE(e) {
  return e.endsWith("%") && Tn(e.slice(0, -1));
}
function Ee(e) {
  return g0.test(e);
}
function on(e) {
  return VE.test(e);
}
var qE = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function GE(e) {
  return Aa(e, qE, h0);
}
function KE(e) {
  return Aa(e, "position", h0);
}
var YE = /* @__PURE__ */ new Set(["image", "url"]);
function QE(e) {
  return Aa(e, YE, eS);
}
function XE(e) {
  return Aa(e, "", JE);
}
function Po() {
  return !0;
}
function Aa(e, n, a) {
  const i = g0.exec(e);
  return i ? i[1] ? typeof n == "string" ? i[1] === n : n.has(i[1]) : a(i[2]) : !1;
}
function ZE(e) {
  return DE.test(e) && !BE.test(e);
}
function h0() {
  return !1;
}
function JE(e) {
  return UE.test(e);
}
function eS(e) {
  return HE.test(e);
}
function pd() {
  const e = Be("colors"), n = Be("spacing"), a = Be("blur"), i = Be("brightness"), s = Be("borderColor"), c = Be("borderRadius"), u = Be("borderSpacing"), f = Be("borderWidth"), m = Be("contrast"), p = Be("grayscale"), v = Be("hueRotate"), b = Be("invert"), h = Be("gap"), w = Be("gradientColorStops"), k = Be("gradientColorStopPositions"), y = Be("inset"), _ = Be("margin"), A = Be("opacity"), z = Be("padding"), U = Be("saturate"), W = Be("scale"), Q = Be("sepia"), Y = Be("skew"), K = Be("space"), X = Be("translate"), ee = () => ["auto", "contain", "none"], ie = () => ["auto", "hidden", "clip", "visible", "scroll"], ae = () => ["auto", Ee, n], S = () => [Ee, n], R = () => ["", kr, an], C = () => ["auto", Tn, Ee], j = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], L = () => ["solid", "dashed", "dotted", "double", "none"], T = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], I = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], F = () => ["", "0", Ee], V = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], $ = () => [Tn, Cl], D = () => [Tn, Ee];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Po],
      spacing: [kr, an],
      blur: ["none", "", on, Ee],
      brightness: $(),
      borderColor: [e],
      borderRadius: ["none", "", "full", on, Ee],
      borderSpacing: S(),
      borderWidth: R(),
      contrast: $(),
      grayscale: F(),
      hueRotate: D(),
      invert: F(),
      gap: S(),
      gradientColorStops: [e],
      gradientColorStopPositions: [WE, an],
      inset: ae(),
      margin: ae(),
      opacity: $(),
      padding: S(),
      saturate: $(),
      scale: $(),
      sepia: F(),
      skew: D(),
      space: S(),
      translate: S()
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
        columns: [on]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": V()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": V()
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
        object: [...j(), Ee]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ie()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ie()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ie()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: ee()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": ee()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": ee()
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
        z: ["auto", $o, Ee]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: ae()
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
        grow: F()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: F()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", $o, Ee]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Po]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", $o, Ee]
        }, Ee]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": C()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": C()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Po]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [$o, Ee]
        }, Ee]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": C()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": C()
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
        justify: ["normal", ...I()]
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
        content: ["normal", ...I(), "baseline"]
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
        "place-content": [...I(), "baseline"]
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
        p: [z]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [z]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [z]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [z]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [z]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [z]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [z]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [z]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [z]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [_]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [_]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [_]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [_]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [_]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [_]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [_]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [_]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [_]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [K]
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
        "space-y": [K]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Ee, n]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Ee, n, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Ee, n, "none", "full", "min", "max", "fit", "prose", {
          screen: [on]
        }, on]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Ee, n, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Ee, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Ee, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Ee, n, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", on, an]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Cl]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Po]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Ee]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Tn, Cl]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", kr, Ee]
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
        "placeholder-opacity": [A]
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
        "text-opacity": [A]
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
        decoration: [...L(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", kr, an]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", kr, Ee]
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
        indent: S()
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
        "bg-opacity": [A]
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
        bg: [...j(), KE]
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
        bg: ["auto", "cover", "contain", GE]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, QE]
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
        border: [f]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [f]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [f]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [f]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [f]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [f]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [f]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [f]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [f]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [A]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...L(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [f]
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
        "divide-y": [f]
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
        "divide-opacity": [A]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: L()
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
        outline: ["", ...L()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [kr, Ee]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [kr, an]
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
        ring: R()
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
        "ring-opacity": [A]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [kr, an]
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
        shadow: ["", "inner", "none", on, XE]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Po]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [A]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...T(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": T()
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
        blur: [a]
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
        contrast: [m]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", on, Ee]
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
        "hue-rotate": [v]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [b]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [U]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [Q]
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
        "backdrop-blur": [a]
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
        "backdrop-contrast": [m]
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
        "backdrop-hue-rotate": [v]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [b]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [A]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [U]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [Q]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Ee]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: D()
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
        delay: D()
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
        rotate: [$o, Ee]
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
        "skew-x": [Y]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [Y]
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
        "scroll-m": S()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": S()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": S()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": S()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": S()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": S()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": S()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": S()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": S()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": S()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": S()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": S()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": S()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": S()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": S()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": S()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": S()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": S()
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
        stroke: [kr, an, Cl]
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
function tS(e, {
  cacheSize: n,
  prefix: a,
  separator: i,
  extend: s = {},
  override: c = {}
}) {
  Ol(e, "cacheSize", n), Ol(e, "prefix", a), Ol(e, "separator", i);
  for (const u in c)
    rS(e[u], c[u]);
  for (const u in s)
    nS(e[u], s[u]);
  return e;
}
function Ol(e, n, a) {
  a !== void 0 && (e[n] = a);
}
function rS(e, n) {
  if (n)
    for (const a in n)
      Ol(e, a, n[a]);
}
function nS(e, n) {
  if (n)
    for (const a in n) {
      const i = n[a];
      i !== void 0 && (e[a] = (e[a] || []).concat(i));
    }
}
function aS(e, ...n) {
  return typeof e == "function" ? fd(pd, e, ...n) : fd(() => tS(pd(), e), ...n);
}
var oS = /* @__PURE__ */ fd(pd), iS = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, v0 = (e) => e || void 0, ei = (...e) => v0(c0(e).filter(Boolean).join(" ")), Fu = null, Pr = {}, md = !1, Ao = (...e) => (n) => n.twMerge ? ((!Fu || md) && (md = !1, Fu = St(Pr) ? oS : aS({ ...Pr, extend: { theme: Pr.theme, classGroups: Pr.classGroups, conflictingClassGroupModifiers: Pr.conflictingClassGroupModifiers, conflictingClassGroups: Pr.conflictingClassGroups, ...Pr.extend } })), v0(Fu(ei(e)))) : ei(e), jh = (e, n) => {
  for (let a in n)
    e.hasOwnProperty(a) ? e[a] = ei(e[a], n[a]) : e[a] = n[a];
  return e;
}, lS = (e, n) => {
  let { extend: a = null, slots: i = {}, variants: s = {}, compoundVariants: c = [], compoundSlots: u = [], defaultVariants: f = {} } = e, m = { ...iS, ...n }, p = a != null && a.base ? ei(a.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, v = a != null && a.variants && !St(a.variants) ? d0(s, a.variants) : s, b = a != null && a.defaultVariants && !St(a.defaultVariants) ? { ...a.defaultVariants, ...f } : f;
  !St(m.twMergeConfig) && !SE(m.twMergeConfig, Pr) && (md = !0, Pr = m.twMergeConfig);
  let h = St(a == null ? void 0 : a.slots), w = St(i) ? {} : { base: ei(e == null ? void 0 : e.base, h && (a == null ? void 0 : a.base)), ...i }, k = h ? w : jh({ ...a == null ? void 0 : a.slots }, St(w) ? { base: e == null ? void 0 : e.base } : w), y = St(a == null ? void 0 : a.compoundVariants) ? c : u0(a == null ? void 0 : a.compoundVariants, c), _ = (z) => {
    if (St(v) && St(i) && h)
      return Ao(p, z == null ? void 0 : z.class, z == null ? void 0 : z.className)(m);
    if (y && !Array.isArray(y))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof y}`);
    if (u && !Array.isArray(u))
      throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof u}`);
    let U = (S, R, C = [], j) => {
      let L = C;
      if (typeof R == "string")
        L = L.concat(Mh(R).split(" ").map((T) => `${S}:${T}`));
      else if (Array.isArray(R))
        L = L.concat(R.reduce((T, I) => T.concat(`${S}:${I}`), []));
      else if (typeof R == "object" && typeof j == "string") {
        for (let T in R)
          if (R.hasOwnProperty(T) && T === j) {
            let I = R[T];
            if (I && typeof I == "string") {
              let F = Mh(I);
              L[j] ? L[j] = L[j].concat(F.split(" ").map((V) => `${S}:${V}`)) : L[j] = F.split(" ").map((V) => `${S}:${V}`);
            } else
              Array.isArray(I) && I.length > 0 && (L[j] = I.reduce((F, V) => F.concat(`${S}:${V}`), []));
          }
      }
      return L;
    }, W = (S, R = v, C = null, j = null) => {
      var L;
      let T = R[S];
      if (!T || St(T))
        return null;
      let I = (L = j == null ? void 0 : j[S]) != null ? L : z == null ? void 0 : z[S];
      if (I === null)
        return null;
      let F = Ih(I), V = Array.isArray(m.responsiveVariants) && m.responsiveVariants.length > 0 || m.responsiveVariants === !0, $ = b == null ? void 0 : b[S], D = [];
      if (typeof F == "object" && V)
        for (let [ve, ye] of Object.entries(F)) {
          let ze = T[ye];
          if (ve === "initial") {
            $ = ye;
            continue;
          }
          Array.isArray(m.responsiveVariants) && !m.responsiveVariants.includes(ve) || (D = U(ve, ze, D, C));
        }
      let me = F != null && typeof F != "object" ? F : Ih($), fe = T[me || "false"];
      return typeof D == "object" && typeof C == "string" && D[C] ? jh(D, fe) : D.length > 0 ? (D.push(fe), D) : fe;
    }, Q = () => v ? Object.keys(v).map((S) => W(S, v)) : null, Y = (S, R) => {
      if (!v || typeof v != "object")
        return null;
      let C = new Array();
      for (let j in v) {
        let L = W(j, v, S, R), T = S === "base" && typeof L == "string" ? L : L && L[S];
        T && (C[C.length] = T);
      }
      return C;
    }, K = {};
    for (let S in z)
      z[S] !== void 0 && (K[S] = z[S]);
    let X = (S, R) => {
      var C;
      let j = typeof (z == null ? void 0 : z[S]) == "object" ? { [S]: (C = z[S]) == null ? void 0 : C.initial } : {};
      return { ...b, ...K, ...j, ...R };
    }, ee = (S = [], R) => {
      let C = [];
      for (let { class: j, className: L, ...T } of S) {
        let I = !0;
        for (let [F, V] of Object.entries(T)) {
          let $ = X(F, R);
          if (Array.isArray(V)) {
            if (!V.includes($[F])) {
              I = !1;
              break;
            }
          } else if ($[F] !== V) {
            I = !1;
            break;
          }
        }
        I && (j && C.push(j), L && C.push(L));
      }
      return C;
    }, ie = (S) => {
      let R = ee(y, S);
      if (!Array.isArray(R))
        return R;
      let C = {};
      for (let j of R)
        if (typeof j == "string" && (C.base = Ao(C.base, j)(m)), typeof j == "object")
          for (let [L, T] of Object.entries(j))
            C[L] = Ao(C[L], T)(m);
      return C;
    }, ae = (S) => {
      if (u.length < 1)
        return null;
      let R = {};
      for (let { slots: C = [], class: j, className: L, ...T } of u) {
        if (!St(T)) {
          let I = !0;
          for (let F of Object.keys(T)) {
            let V = X(F, S)[F];
            if (V === void 0 || (Array.isArray(T[F]) ? !T[F].includes(V) : T[F] !== V)) {
              I = !1;
              break;
            }
          }
          if (!I)
            continue;
        }
        for (let I of C)
          R[I] = R[I] || [], R[I].push([j, L]);
      }
      return R;
    };
    if (!St(i) || !h) {
      let S = {};
      if (typeof k == "object" && !St(k))
        for (let R of Object.keys(k))
          S[R] = (C) => {
            var j, L;
            return Ao(k[R], Y(R, C), ((j = ie(C)) != null ? j : [])[R], ((L = ae(C)) != null ? L : [])[R], C == null ? void 0 : C.class, C == null ? void 0 : C.className)(m);
          };
      return S;
    }
    return Ao(p, Q(), ee(y), z == null ? void 0 : z.class, z == null ? void 0 : z.className)(m);
  }, A = () => {
    if (!(!v || typeof v != "object"))
      return Object.keys(v);
  };
  return _.variantKeys = A(), _.extend = a, _.base = p, _.slots = k, _.variants = v, _.defaultVariants = b, _.compoundSlots = u, _.compoundVariants = y, _;
}, sS = lS({
  base: "@paloma-logo flex flex-row gap-2 items-center"
}), cS = ({
  altText: e,
  className: n,
  color: a,
  logoSvg: i,
  productName: s,
  size: c = "small",
  style: u,
  ...f
}) => {
  const m = !!(s != null && s.length), p = !!(e != null && e.length), v = m || !p, b = m ? void 0 : e, h = {
    large: "medium",
    medium: "small",
    small: "x-small",
    "x-small": "large",
    "xx-small": "medium"
  }, w = {
    large: 64,
    medium: 56,
    small: 44,
    "x-small": 32,
    "xx-small": 24
  }, k = i ? E.Children.only(i) : /* @__PURE__ */ E.createElement(
    EE,
    {
      "aria-hidden": v,
      "aria-label": b,
      "data-testid": "@paloma-logo-ea",
      height: w[c],
      width: w[c]
    }
  ), y = E.cloneElement(k, {
    className: Bt("@paloma-logo-image", k.props.classList),
    style: { ...k.props.style, fill: "currentColor" }
  });
  return /* @__PURE__ */ E.createElement(
    "div",
    {
      ...f,
      className: sS({ className: n }),
      style: { color: a, ...u }
    },
    y,
    s && /* @__PURE__ */ E.createElement(
      _E,
      {
        "data-logo-product-name": "paloma-logo",
        "data-testid": "@paloma-logo-product-name-id",
        fontWeight: "bold",
        size: h[c],
        variant: c === "xx-small" || c === "x-small" ? "body" : "heading"
      },
      s
    )
  );
};
function uS({
  productName: e = "EA Forums",
  homeUrl: n = "/",
  primaryNav: a = [],
  secondaryNav: i = [],
  onSearchSubmit: s
}) {
  return /* @__PURE__ */ G.jsx(Kb, { mode: "dark", children: /* @__PURE__ */ G.jsx(
    wE,
    {
      logo: /* @__PURE__ */ G.jsx(Il, { href: n, "aria-label": "Home", hoverUnderline: !1, children: /* @__PURE__ */ G.jsx(cS, { productName: e }) }),
      primaryNav: a.map(({ label: c, href: u }) => /* @__PURE__ */ G.jsx(Il, { href: u, children: c }, u)),
      secondaryNav: i.map(({ label: c, href: u }) => /* @__PURE__ */ G.jsx(Il, { href: u, isSecondaryLink: !0, children: c }, u)),
      searchEnabled: !!s,
      onSearchSubmit: s
    }
  ) });
}
if (typeof document < "u" && !document.querySelector("[data-ea-paloma-styles]")) {
  const e = document.createElement("style");
  e.dataset.eaPalomaStyles = "true", e.textContent = xw, document.head.appendChild(e);
}
const Yl = /* @__PURE__ */ new WeakMap();
function b0(e, n, a = {}) {
  if (!e || !n)
    return;
  let i = Yl.get(e);
  i || (i = ww.createRoot(e), Yl.set(e, i)), i.render(E.createElement(n, a));
}
function pS(e) {
  const n = Yl.get(e);
  n && (n.unmount(), Yl.delete(e));
}
async function mS(e, n = {}) {
  b0(e, g8, n);
}
async function gS(e, n = {}) {
  b0(e, uS, n);
}
export {
  b0 as mount,
  mS as mountHomepage,
  gS as mountSiteHeader,
  pS as unmount
};
