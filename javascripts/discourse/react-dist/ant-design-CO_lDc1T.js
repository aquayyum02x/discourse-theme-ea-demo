function $u(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const a in n)
        if (a !== "default" && !(a in e)) {
          const i = Object.getOwnPropertyDescriptor(n, a);
          i && Object.defineProperty(e, a, i.get ? i : {
            enumerable: !0,
            get: () => n[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function Po(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var oi = { exports: {} }, ue = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var es;
function _u() {
  if (es) return ue;
  es = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), o = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), d = Symbol.for("react.activity"), v = Symbol.for("react.view_transition"), g = Symbol.iterator;
  function h(b) {
    return b === null || typeof b != "object" ? null : (b = g && b[g] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var y = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, m = Object.assign, C = {};
  function p(b, T, z) {
    this.props = b, this.context = T, this.refs = C, this.updater = z || y;
  }
  p.prototype.isReactComponent = {}, p.prototype.setState = function(b, T) {
    if (typeof b != "object" && typeof b != "function" && b != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, b, T, "setState");
  }, p.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function S() {
  }
  S.prototype = p.prototype;
  function $(b, T, z) {
    this.props = b, this.context = T, this.refs = C, this.updater = z || y;
  }
  var E = $.prototype = new S();
  E.constructor = $, m(E, p.prototype), E.isPureReactComponent = !0;
  var x = Array.isArray;
  function P() {
  }
  var w = { H: null, A: null, T: null, S: null }, R = Object.prototype.hasOwnProperty;
  function O(b, T, z) {
    var V = z.ref;
    return {
      $$typeof: e,
      type: b,
      key: T,
      ref: V !== void 0 ? V : null,
      props: z
    };
  }
  function I(b, T) {
    return O(b.type, T, b.props);
  }
  function F(b) {
    return typeof b == "object" && b !== null && b.$$typeof === e;
  }
  function A(b) {
    var T = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(z) {
      return T[z];
    });
  }
  var k = /\/+/g;
  function D(b, T) {
    return typeof b == "object" && b !== null && b.key != null ? A("" + b.key) : T.toString(36);
  }
  function L(b) {
    switch (b.status) {
      case "fulfilled":
        return b.value;
      case "rejected":
        throw b.reason;
      default:
        switch (typeof b.status == "string" ? b.then(P, P) : (b.status = "pending", b.then(
          function(T) {
            b.status === "pending" && (b.status = "fulfilled", b.value = T);
          },
          function(T) {
            b.status === "pending" && (b.status = "rejected", b.reason = T);
          }
        )), b.status) {
          case "fulfilled":
            return b.value;
          case "rejected":
            throw b.reason;
        }
    }
    throw b;
  }
  function j(b, T, z, V, q) {
    var B = typeof b;
    (B === "undefined" || B === "boolean") && (b = null);
    var Z = !1;
    if (b === null) Z = !0;
    else
      switch (B) {
        case "bigint":
        case "string":
        case "number":
          Z = !0;
          break;
        case "object":
          switch (b.$$typeof) {
            case e:
            case t:
              Z = !0;
              break;
            case f:
              return Z = b._init, j(
                Z(b._payload),
                T,
                z,
                V,
                q
              );
          }
      }
    if (Z)
      return q = q(b), Z = V === "" ? "." + D(b, 0) : V, x(q) ? (z = "", Z != null && (z = Z.replace(k, "$&/") + "/"), j(q, T, z, "", function(xe) {
        return xe;
      })) : q != null && (F(q) && (q = I(
        q,
        z + (q.key == null || b && b.key === q.key ? "" : ("" + q.key).replace(
          k,
          "$&/"
        ) + "/") + Z
      )), T.push(q)), 1;
    Z = 0;
    var se = V === "" ? "." : V + ":";
    if (x(b))
      for (var oe = 0; oe < b.length; oe++)
        V = b[oe], B = se + D(V, oe), Z += j(
          V,
          T,
          z,
          B,
          q
        );
    else if (oe = h(b), typeof oe == "function")
      for (b = oe.call(b), oe = 0; !(V = b.next()).done; )
        V = V.value, B = se + D(V, oe++), Z += j(
          V,
          T,
          z,
          B,
          q
        );
    else if (B === "object") {
      if (typeof b.then == "function")
        return j(
          L(b),
          T,
          z,
          V,
          q
        );
      throw T = String(b), Error(
        "Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Z;
  }
  function H(b, T, z) {
    if (b == null) return b;
    var V = [], q = 0;
    return j(b, V, "", "", function(B) {
      return T.call(z, B, q++);
    }), V;
  }
  function K(b) {
    if (b._status === -1) {
      var T = b._result, z = T();
      z.then(
        function(V) {
          (b._status === 0 || b._status === -1) && (b._status = 1, b._result = V, z.status === void 0 && (z.status = "fulfilled", z.value = V));
        },
        function(V) {
          (b._status === 0 || b._status === -1) && (b._status = 2, b._result = V, z.status === void 0 && (z.status = "rejected", z.reason = V));
        }
      ), b._status === -1 && (b._status = 0, b._result = z);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var W = typeof reportError == "function" ? reportError : function(b) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var T = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof b == "object" && b !== null && typeof b.message == "string" ? String(b.message) : String(b),
        error: b
      });
      if (!window.dispatchEvent(T)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", b);
      return;
    }
    console.error(b);
  };
  function X(b) {
    var T = w.T, z = {};
    z.types = T !== null ? T.types : null, w.T = z;
    try {
      var V = b(), q = w.S;
      q !== null && q(z, V), typeof V == "object" && V !== null && typeof V.then == "function" && V.then(P, W);
    } catch (B) {
      W(B);
    } finally {
      T !== null && z.types !== null && (T.types = z.types), w.T = T;
    }
  }
  function G(b) {
    var T = w.T;
    if (T !== null) {
      var z = T.types;
      z === null ? T.types = [b] : z.indexOf(b) === -1 && z.push(b);
    } else X(G.bind(null, b));
  }
  var U = {
    map: H,
    forEach: function(b, T, z) {
      H(
        b,
        function() {
          T.apply(this, arguments);
        },
        z
      );
    },
    count: function(b) {
      var T = 0;
      return H(b, function() {
        T++;
      }), T;
    },
    toArray: function(b) {
      return H(b, function(T) {
        return T;
      }) || [];
    },
    only: function(b) {
      if (!F(b))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return b;
    }
  };
  return ue.Activity = d, ue.Children = U, ue.Component = p, ue.Fragment = r, ue.Profiler = a, ue.PureComponent = $, ue.StrictMode = n, ue.Suspense = l, ue.ViewTransition = v, ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w, ue.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(b) {
      return w.H.useMemoCache(b);
    }
  }, ue.addTransitionType = G, ue.cache = function(b) {
    return function() {
      return b.apply(null, arguments);
    };
  }, ue.cacheSignal = function() {
    return null;
  }, ue.cloneElement = function(b, T, z) {
    if (b == null)
      throw Error(
        "The argument must be a React element, but you passed " + b + "."
      );
    var V = m({}, b.props), q = b.key;
    if (T != null)
      for (B in T.key !== void 0 && (q = "" + T.key), T)
        !R.call(T, B) || B === "key" || B === "__self" || B === "__source" || B === "ref" && T.ref === void 0 || (V[B] = T[B]);
    var B = arguments.length - 2;
    if (B === 1) V.children = z;
    else if (1 < B) {
      for (var Z = Array(B), se = 0; se < B; se++)
        Z[se] = arguments[se + 2];
      V.children = Z;
    }
    return O(b.type, q, V);
  }, ue.createContext = function(b) {
    return b = {
      $$typeof: o,
      _currentValue: b,
      _currentValue2: b,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, b.Provider = b, b.Consumer = {
      $$typeof: i,
      _context: b
    }, b;
  }, ue.createElement = function(b, T, z) {
    var V, q = {}, B = null;
    if (T != null)
      for (V in T.key !== void 0 && (B = "" + T.key), T)
        R.call(T, V) && V !== "key" && V !== "__self" && V !== "__source" && (q[V] = T[V]);
    var Z = arguments.length - 2;
    if (Z === 1) q.children = z;
    else if (1 < Z) {
      for (var se = Array(Z), oe = 0; oe < Z; oe++)
        se[oe] = arguments[oe + 2];
      q.children = se;
    }
    if (b && b.defaultProps)
      for (V in Z = b.defaultProps, Z)
        q[V] === void 0 && (q[V] = Z[V]);
    return O(b, B, q);
  }, ue.createRef = function() {
    return { current: null };
  }, ue.forwardRef = function(b) {
    return { $$typeof: s, render: b };
  }, ue.isValidElement = F, ue.lazy = function(b) {
    return {
      $$typeof: f,
      _payload: { _status: -1, _result: b },
      _init: K
    };
  }, ue.memo = function(b, T) {
    return {
      $$typeof: u,
      type: b,
      compare: T === void 0 ? null : T
    };
  }, ue.startTransition = X, ue.unstable_useCacheRefresh = function() {
    return w.H.useCacheRefresh();
  }, ue.use = function(b) {
    return w.H.use(b);
  }, ue.useActionState = function(b, T, z) {
    return w.H.useActionState(b, T, z);
  }, ue.useCallback = function(b, T) {
    return w.H.useCallback(b, T);
  }, ue.useContext = function(b) {
    return w.H.useContext(b);
  }, ue.useDebugValue = function() {
  }, ue.useDeferredValue = function(b, T) {
    return w.H.useDeferredValue(b, T);
  }, ue.useEffect = function(b, T) {
    return w.H.useEffect(b, T);
  }, ue.useEffectEvent = function(b) {
    return w.H.useEffectEvent(b);
  }, ue.useId = function() {
    return w.H.useId();
  }, ue.useImperativeHandle = function(b, T, z) {
    return w.H.useImperativeHandle(b, T, z);
  }, ue.useInsertionEffect = function(b, T) {
    return w.H.useInsertionEffect(b, T);
  }, ue.useLayoutEffect = function(b, T) {
    return w.H.useLayoutEffect(b, T);
  }, ue.useMemo = function(b, T) {
    return w.H.useMemo(b, T);
  }, ue.useOptimistic = function(b, T) {
    return w.H.useOptimistic(b, T);
  }, ue.useReducer = function(b, T, z) {
    return w.H.useReducer(b, T, z);
  }, ue.useRef = function(b) {
    return w.H.useRef(b);
  }, ue.useState = function(b) {
    return w.H.useState(b);
  }, ue.useSyncExternalStore = function(b, T, z) {
    return w.H.useSyncExternalStore(
      b,
      T,
      z
    );
  }, ue.useTransition = function() {
    return w.H.useTransition();
  }, ue.version = "19.3.0", ue;
}
var ts;
function kl() {
  return ts || (ts = 1, oi.exports = _u()), oi.exports;
}
var c = kl();
const Xe = /* @__PURE__ */ Po(c), Va = /* @__PURE__ */ $u({
  __proto__: null,
  default: Xe
}, [c]);
var si = { exports: {} }, $t = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rs;
function Pu() {
  if (rs) return $t;
  rs = 1;
  var e = kl();
  function t(f) {
    var d = "https://react.dev/errors/" + f;
    if (1 < arguments.length) {
      d += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        d += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return "Minified React error #" + f + "; visit " + d + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var n = {
    d: {
      f: r,
      r: function() {
        throw Error(t(522));
      },
      D: r,
      C: r,
      L: r,
      m: r,
      X: r,
      S: r,
      M: r
    },
    p: 0,
    findDOMNode: null
  }, a = Symbol.for("react.portal"), i = Symbol.for("react.recoverable"), o = Symbol.for("react.optimistic_key");
  function s(f, d, v) {
    var g = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: a,
      key: g == null ? null : g === o ? o : "" + g,
      children: f,
      containerInfo: d,
      implementation: v
    };
  }
  var l = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function u(f, d) {
    if (f === "font") return "";
    if (typeof d == "string")
      return d === "use-credentials" ? d : "";
  }
  return $t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n, $t.browser = function(f) {
    return { $$typeof: i, _reason: f };
  }, $t.createPortal = function(f, d) {
    var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!d || d.nodeType !== 1 && d.nodeType !== 9 && d.nodeType !== 11)
      throw Error(t(299));
    return s(f, d, null, v);
  }, $t.flushSync = function(f) {
    var d = l.T, v = n.p;
    try {
      if (l.T = null, n.p = 2, f) return f();
    } finally {
      l.T = d, n.p = v, n.d.f();
    }
  }, $t.preconnect = function(f, d) {
    typeof f == "string" && (d ? (d = d.crossOrigin, d = typeof d == "string" ? d === "use-credentials" ? d : "" : void 0) : d = null, n.d.C(f, d));
  }, $t.prefetchDNS = function(f) {
    typeof f == "string" && n.d.D(f);
  }, $t.preinit = function(f, d) {
    if (typeof f == "string" && d && typeof d.as == "string") {
      var v = d.as, g = u(v, d.crossOrigin), h = typeof d.integrity == "string" ? d.integrity : void 0, y = typeof d.fetchPriority == "string" ? d.fetchPriority : void 0;
      v === "style" ? n.d.S(
        f,
        typeof d.precedence == "string" ? d.precedence : void 0,
        {
          crossOrigin: g,
          integrity: h,
          fetchPriority: y
        }
      ) : v === "script" && n.d.X(f, {
        crossOrigin: g,
        integrity: h,
        fetchPriority: y,
        nonce: typeof d.nonce == "string" ? d.nonce : void 0
      });
    }
  }, $t.preinitModule = function(f, d) {
    if (typeof f == "string")
      if (typeof d == "object" && d !== null) {
        if (d.as == null || d.as === "script") {
          var v = u(
            d.as,
            d.crossOrigin
          );
          n.d.M(f, {
            crossOrigin: v,
            integrity: typeof d.integrity == "string" ? d.integrity : void 0,
            nonce: typeof d.nonce == "string" ? d.nonce : void 0,
            fetchPriority: typeof d.fetchPriority == "string" ? d.fetchPriority : void 0
          });
        }
      } else d == null && n.d.M(f);
  }, $t.preload = function(f, d) {
    if (typeof f == "string" && typeof d == "object" && d !== null && typeof d.as == "string") {
      var v = d.as, g = u(v, d.crossOrigin);
      n.d.L(f, v, {
        crossOrigin: g,
        integrity: typeof d.integrity == "string" ? d.integrity : void 0,
        nonce: typeof d.nonce == "string" ? d.nonce : void 0,
        type: typeof d.type == "string" ? d.type : void 0,
        fetchPriority: typeof d.fetchPriority == "string" ? d.fetchPriority : void 0,
        referrerPolicy: typeof d.referrerPolicy == "string" ? d.referrerPolicy : void 0,
        imageSrcSet: typeof d.imageSrcSet == "string" ? d.imageSrcSet : void 0,
        imageSizes: typeof d.imageSizes == "string" ? d.imageSizes : void 0,
        media: typeof d.media == "string" ? d.media : void 0
      });
    }
  }, $t.preloadModule = function(f, d) {
    if (typeof f == "string")
      if (d) {
        var v = u(d.as, d.crossOrigin);
        n.d.m(f, {
          as: typeof d.as == "string" && d.as !== "script" ? d.as : void 0,
          crossOrigin: v,
          integrity: typeof d.integrity == "string" ? d.integrity : void 0,
          nonce: typeof d.nonce == "string" ? d.nonce : void 0,
          fetchPriority: typeof d.fetchPriority == "string" ? d.fetchPriority : void 0
        });
      } else n.d.m(f);
  }, $t.requestFormReset = function(f) {
    n.d.r(f);
  }, $t.unstable_batchedUpdates = function(f, d) {
    return f(d);
  }, $t.useFormState = function(f, d, v) {
    return l.H.useFormState(f, d, v);
  }, $t.useFormStatus = function() {
    return l.H.useHostTransitionStatus();
  }, $t.version = "19.3.0", $t;
}
var ns;
function Ru() {
  if (ns) return si.exports;
  ns = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return e(), si.exports = Pu(), si.exports;
}
var li = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var as;
function Mu() {
  return as || (as = 1, (function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var i = "", o = 0; o < arguments.length; o++) {
          var s = arguments[o];
          s && (i = a(i, n(s)));
        }
        return i;
      }
      function n(i) {
        if (typeof i == "string" || typeof i == "number")
          return i;
        if (typeof i != "object")
          return "";
        if (Array.isArray(i))
          return r.apply(null, i);
        if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
          return i.toString();
        var o = "";
        for (var s in i)
          t.call(i, s) && i[s] && (o = a(o, s));
        return o;
      }
      function a(i, o) {
        return o ? i ? i + " " + o : i + o : i;
      }
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  })(li)), li.exports;
}
var Tu = Mu();
const ne = /* @__PURE__ */ Po(Tu);
function Br(e, t) {
  var r = Object.assign({}, e);
  return Array.isArray(t) && t.forEach(function(n) {
    delete r[n];
  }), r;
}
var Ri = {}, Ou = function(t) {
};
function Iu(e, t) {
}
function ku(e, t) {
}
function Au() {
  Ri = {};
}
function Al(e, t, r) {
  !t && !Ri[r] && (e(!1, r), Ri[r] = !0);
}
function Nt(e, t) {
  Al(Iu, e, t);
}
function Fu(e, t) {
  Al(ku, e, t);
}
Nt.preMessage = Ou;
Nt.resetWarned = Au;
Nt.noteOnce = Fu;
const Nu = /* @__PURE__ */ c.createContext({});
function Fl(e) {
  if (Array.isArray(e)) return e;
}
function Lu(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], l = !0, u = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        l = !1;
      } else for (; !(l = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (f) {
      u = !0, a = f;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw a;
      }
    }
    return s;
  }
}
function Mi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ro(e, t) {
  if (e) {
    if (typeof e == "string") return Mi(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Mi(e, t) : void 0;
  }
}
function Nl() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function N(e, t) {
  return Fl(e) || Lu(e, t) || Ro(e, t) || Nl();
}
function ce(e) {
  "@babel/helpers - typeof";
  return ce = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ce(e);
}
function ju(e, t) {
  if (ce(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ce(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ll(e) {
  var t = ju(e, "string");
  return ce(t) == "symbol" ? t : t + "";
}
function _(e, t, r) {
  return (t = Ll(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Du(e) {
  if (Array.isArray(e)) return Mi(e);
}
function jl(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Vu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ae(e) {
  return Du(e) || jl(e) || Ro(e) || Vu();
}
function is(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? is(Object(r), !0).forEach(function(n) {
      _(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : is(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Dn(e) {
  for (var t = 0, r, n = 0, a = e.length; a >= 4; ++n, a -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function qt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function zu(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var r = t; r; ) {
    if (r === e)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
var os = "data-rc-order", ss = "data-rc-priority", Hu = "rc-util-key", Ti = /* @__PURE__ */ new Map();
function Dl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Hu;
}
function za(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Bu(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Mo(e) {
  return Array.from((Ti.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Vl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!qt())
    return null;
  var r = t.csp, n = t.prepend, a = t.priority, i = a === void 0 ? 0 : a, o = Bu(n), s = o === "prependQueue", l = document.createElement("style");
  l.setAttribute(os, o), s && i && l.setAttribute(ss, "".concat(i)), r != null && r.nonce && (l.nonce = r == null ? void 0 : r.nonce), l.innerHTML = e;
  var u = za(t), f = u.firstChild;
  if (n) {
    if (s) {
      var d = (t.styles || Mo(u)).filter(function(v) {
        if (!["prepend", "prependQueue"].includes(v.getAttribute(os)))
          return !1;
        var g = Number(v.getAttribute(ss) || 0);
        return i >= g;
      });
      if (d.length)
        return u.insertBefore(l, d[d.length - 1].nextSibling), l;
    }
    u.insertBefore(l, f);
  } else
    u.appendChild(l);
  return l;
}
function zl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = za(t);
  return (t.styles || Mo(r)).find(function(n) {
    return n.getAttribute(Dl(t)) === e;
  });
}
function Vn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = zl(e, t);
  if (r) {
    var n = za(t);
    n.removeChild(r);
  }
}
function Wu(e, t) {
  var r = Ti.get(e);
  if (!r || !zu(document, r)) {
    var n = Vl("", t), a = n.parentNode;
    Ti.set(e, a), e.removeChild(n);
  }
}
function wr(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = za(r), a = Mo(n), i = M(M({}, r), {}, {
    styles: a
  });
  Wu(n, i);
  var o = zl(t, i);
  if (o) {
    var s, l;
    if ((s = i.csp) !== null && s !== void 0 && s.nonce && o.nonce !== ((l = i.csp) === null || l === void 0 ? void 0 : l.nonce)) {
      var u;
      o.nonce = (u = i.csp) === null || u === void 0 ? void 0 : u.nonce;
    }
    return o.innerHTML !== e && (o.innerHTML = e), o;
  }
  var f = Vl(e, i);
  return f.setAttribute(Dl(i), t), f;
}
function Ku(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function ze(e, t) {
  if (e == null) return {};
  var r, n, a = Ku(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  }
  return a;
}
function Ha(e, t, r) {
  var n = c.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
function zn(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function a(i, o) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, l = n.has(i);
    if (Nt(!l, "Warning: There may be circular references"), l)
      return !1;
    if (i === o)
      return !0;
    if (r && s > 1)
      return !1;
    n.add(i);
    var u = s + 1;
    if (Array.isArray(i)) {
      if (!Array.isArray(o) || i.length !== o.length)
        return !1;
      for (var f = 0; f < i.length; f++)
        if (!a(i[f], o[f], u))
          return !1;
      return !0;
    }
    if (i && o && ce(i) === "object" && ce(o) === "object") {
      var d = Object.keys(i);
      return d.length !== Object.keys(o).length ? !1 : d.every(function(v) {
        return a(i[v], o[v], u);
      });
    }
    return !1;
  }
  return a(e, t);
}
function Pt(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function ls(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ll(n.key), n);
  }
}
function Rt(e, t, r) {
  return t && ls(e.prototype, t), r && ls(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
var qu = "%";
function Oi(e) {
  return e.join(qu);
}
var Gu = /* @__PURE__ */ (function() {
  function e(t) {
    Pt(this, e), _(this, "instanceId", void 0), _(this, "cache", /* @__PURE__ */ new Map()), _(this, "extracted", /* @__PURE__ */ new Set()), this.instanceId = t;
  }
  return Rt(e, [{
    key: "get",
    value: function(r) {
      return this.opGet(Oi(r));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(r) {
      return this.cache.get(r) || null;
    }
  }, {
    key: "update",
    value: function(r, n) {
      return this.opUpdate(Oi(r), n);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(r, n) {
      var a = this.cache.get(r), i = n(a);
      i === null ? this.cache.delete(r) : this.cache.set(r, i);
    }
  }]), e;
})(), un = "data-token-hash", ur = "data-css-hash", Tr = "__cssinjs_instance__";
function Uu() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(ur, "]")) || [], r = document.head.firstChild;
    Array.from(t).forEach(function(a) {
      a[Tr] = a[Tr] || e, a[Tr] === e && document.head.insertBefore(a, r);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat(ur, "]"))).forEach(function(a) {
      var i = a.getAttribute(ur);
      if (n[i]) {
        if (a[Tr] === e) {
          var o;
          (o = a.parentNode) === null || o === void 0 || o.removeChild(a);
        }
      } else
        n[i] = !0;
    });
  }
  return new Gu(e);
}
var Qn = /* @__PURE__ */ c.createContext({
  hashPriority: "low",
  cache: Uu(),
  defaultCache: !0
});
function we(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Hn(e, t) {
  return Hn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Hn(e, t);
}
function Ar(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Hn(e, t);
}
function Bn(e) {
  return Bn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Bn(e);
}
function To() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (To = function() {
    return !!e;
  })();
}
function Xu(e, t) {
  if (t && (ce(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return we(e);
}
function Fr(e) {
  var t = To();
  return function() {
    var r, n = Bn(e);
    if (t) {
      var a = Bn(this).constructor;
      r = Reflect.construct(n, arguments, a);
    } else r = n.apply(this, arguments);
    return Xu(this, r);
  };
}
function Yu(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var Oo = /* @__PURE__ */ (function() {
  function e() {
    Pt(this, e), _(this, "cache", void 0), _(this, "keys", void 0), _(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Rt(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(r) {
      var n, a, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, o = {
        map: this.cache
      };
      return r.forEach(function(s) {
        if (!o)
          o = void 0;
        else {
          var l;
          o = (l = o) === null || l === void 0 || (l = l.map) === null || l === void 0 ? void 0 : l.get(s);
        }
      }), (n = o) !== null && n !== void 0 && n.value && i && (o.value[1] = this.cacheCallTimes++), (a = o) === null || a === void 0 ? void 0 : a.value;
    }
  }, {
    key: "get",
    value: function(r) {
      var n;
      return (n = this.internalGet(r, !0)) === null || n === void 0 ? void 0 : n[0];
    }
  }, {
    key: "has",
    value: function(r) {
      return !!this.internalGet(r);
    }
  }, {
    key: "set",
    value: function(r, n) {
      var a = this;
      if (!this.has(r)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var i = this.keys.reduce(function(u, f) {
            var d = N(u, 2), v = d[1];
            return a.internalGet(f)[1] < v ? [f, a.internalGet(f)[1]] : u;
          }, [this.keys[0], this.cacheCallTimes]), o = N(i, 1), s = o[0];
          this.delete(s);
        }
        this.keys.push(r);
      }
      var l = this.cache;
      r.forEach(function(u, f) {
        if (f === r.length - 1)
          l.set(u, {
            value: [n, a.cacheCallTimes++]
          });
        else {
          var d = l.get(u);
          d ? d.map || (d.map = /* @__PURE__ */ new Map()) : l.set(u, {
            map: /* @__PURE__ */ new Map()
          }), l = l.get(u).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(r, n) {
      var a = r.get(n[0]);
      if (n.length === 1) {
        var i;
        return a.map ? r.set(n[0], {
          map: a.map
        }) : r.delete(n[0]), (i = a.value) === null || i === void 0 ? void 0 : i[0];
      }
      var o = this.deleteByPath(a.map, n.slice(1));
      return (!a.map || a.map.size === 0) && !a.value && r.delete(n[0]), o;
    }
  }, {
    key: "delete",
    value: function(r) {
      if (this.has(r))
        return this.keys = this.keys.filter(function(n) {
          return !Yu(n, r);
        }), this.deleteByPath(this.cache, r);
    }
  }]), e;
})();
_(Oo, "MAX_CACHE_SIZE", 20);
_(Oo, "MAX_CACHE_OFFSET", 5);
var cs = 0, Hl = /* @__PURE__ */ (function() {
  function e(t) {
    Pt(this, e), _(this, "derivatives", void 0), _(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = cs, t.length === 0 && (t.length > 0, void 0), cs += 1;
  }
  return Rt(e, [{
    key: "getDerivativeToken",
    value: function(r) {
      return this.derivatives.reduce(function(n, a) {
        return a(r, n);
      }, void 0);
    }
  }]), e;
})(), ci = new Oo();
function Ii(e) {
  var t = Array.isArray(e) ? e : [e];
  return ci.has(t) || ci.set(t, new Hl(t)), ci.get(t);
}
var Qu = /* @__PURE__ */ new WeakMap(), ui = {};
function Zu(e, t) {
  for (var r = Qu, n = 0; n < t.length; n += 1) {
    var a = t[n];
    r.has(a) || r.set(a, /* @__PURE__ */ new WeakMap()), r = r.get(a);
  }
  return r.has(ui) || r.set(ui, e()), r.get(ui);
}
var us = /* @__PURE__ */ new WeakMap();
function Fn(e) {
  var t = us.get(e) || "";
  return t || (Object.keys(e).forEach(function(r) {
    var n = e[r];
    t += r, n instanceof Hl ? t += n.id : n && ce(n) === "object" ? t += Fn(n) : t += n;
  }), t = Dn(t), us.set(e, t)), t;
}
function fs(e, t) {
  return Dn("".concat(t, "_").concat(Fn(e)));
}
var ki = qt();
function Y(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function Oa(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (a)
    return e;
  var i = M(M({}, n), {}, _(_({}, un, t), ur, r)), o = Object.keys(i).map(function(s) {
    var l = i[s];
    return l ? "".concat(s, '="').concat(l, '"') : null;
  }).filter(function(s) {
    return s;
  }).join(" ");
  return "<style ".concat(o, ">").concat(e, "</style>");
}
var wa = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(r ? "".concat(r, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, Ju = function(t, r, n) {
  return Object.keys(t).length ? ".".concat(r).concat(n != null && n.scope ? ".".concat(n.scope) : "", "{").concat(Object.entries(t).map(function(a) {
    var i = N(a, 2), o = i[0], s = i[1];
    return "".concat(o, ":").concat(s, ";");
  }).join(""), "}") : "";
}, Bl = function(t, r, n) {
  var a = {}, i = {};
  return Object.entries(t).forEach(function(o) {
    var s, l, u = N(o, 2), f = u[0], d = u[1];
    if (n != null && (s = n.preserve) !== null && s !== void 0 && s[f])
      i[f] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(n != null && (l = n.ignore) !== null && l !== void 0 && l[f])) {
      var v, g = wa(f, n == null ? void 0 : n.prefix);
      a[g] = typeof d == "number" && !(n != null && (v = n.unitless) !== null && v !== void 0 && v[f]) ? "".concat(d, "px") : String(d), i[f] = "var(".concat(g, ")");
    }
  }), [i, Ju(a, r, {
    scope: n == null ? void 0 : n.scope
  })];
}, ds = qt() ? c.useLayoutEffect : c.useEffect, It = function(t, r) {
  var n = c.useRef(!0);
  ds(function() {
    return t(n.current);
  }, r), ds(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, Ai = function(t, r) {
  It(function(n) {
    if (!n)
      return t();
  }, r);
}, ef = M({}, Va), vs = ef.useInsertionEffect, tf = function(t, r, n) {
  c.useMemo(t, n), It(function() {
    return r(!0);
  }, n);
}, rf = vs ? function(e, t, r) {
  return vs(function() {
    return e(), t();
  }, r);
} : tf, nf = M({}, Va), af = nf.useInsertionEffect, of = function(t) {
  var r = [], n = !1;
  function a(i) {
    n || r.push(i);
  }
  return c.useEffect(function() {
    return n = !1, function() {
      n = !0, r.length && r.forEach(function(i) {
        return i();
      });
    };
  }, t), a;
}, sf = function() {
  return function(t) {
    t();
  };
}, lf = typeof af < "u" ? of : sf;
function Io(e, t, r, n, a) {
  var i = c.useContext(Qn), o = i.cache, s = [e].concat(ae(t)), l = Oi(s), u = lf([l]), f = function(h) {
    o.opUpdate(l, function(y) {
      var m = y || [void 0, void 0], C = N(m, 2), p = C[0], S = p === void 0 ? 0 : p, $ = C[1], E = $, x = E || r(), P = [S, x];
      return h ? h(P) : P;
    });
  };
  c.useMemo(
    function() {
      f();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [l]
    /* eslint-enable */
  );
  var d = o.opGet(l), v = d[1];
  return rf(function() {
    a == null || a(v);
  }, function(g) {
    return f(function(h) {
      var y = N(h, 2), m = y[0], C = y[1];
      return g && m === 0 && (a == null || a(v)), [m + 1, C];
    }), function() {
      o.opUpdate(l, function(h) {
        var y = h || [], m = N(y, 2), C = m[0], p = C === void 0 ? 0 : C, S = m[1], $ = p - 1;
        return $ === 0 ? (u(function() {
          (g || !o.opGet(l)) && (n == null || n(S, !1));
        }), null) : [p - 1, S];
      });
    };
  }, [l]), v;
}
var cf = {}, uf = "css", Vr = /* @__PURE__ */ new Map();
function ff(e) {
  Vr.set(e, (Vr.get(e) || 0) + 1);
}
function df(e, t) {
  if (typeof document < "u") {
    var r = document.querySelectorAll("style[".concat(un, '="').concat(e, '"]'));
    r.forEach(function(n) {
      if (n[Tr] === t) {
        var a;
        (a = n.parentNode) === null || a === void 0 || a.removeChild(n);
      }
    });
  }
}
var vf = 0;
function mf(e, t) {
  Vr.set(e, (Vr.get(e) || 0) - 1);
  var r = /* @__PURE__ */ new Set();
  Vr.forEach(function(n, a) {
    n <= 0 && r.add(a);
  }), Vr.size - r.size > vf && r.forEach(function(n) {
    df(n, t), Vr.delete(n);
  });
}
var gf = function(t, r, n, a) {
  var i = n.getDerivativeToken(t), o = M(M({}, i), r);
  return a && (o = a(o)), o;
}, Wl = "token";
function hf(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = c.useContext(Qn), a = n.cache.instanceId, i = n.container, o = r.salt, s = o === void 0 ? "" : o, l = r.override, u = l === void 0 ? cf : l, f = r.formatToken, d = r.getComputedToken, v = r.cssVar, g = Zu(function() {
    return Object.assign.apply(Object, [{}].concat(ae(t)));
  }, t), h = Fn(g), y = Fn(u), m = v ? Fn(v) : "", C = Io(Wl, [s, e.id, h, y, m], function() {
    var p, S = d ? d(g, u, e) : gf(g, u, e, f), $ = M({}, S), E = "";
    if (v) {
      var x = Bl(S, v.key, {
        prefix: v.prefix,
        ignore: v.ignore,
        unitless: v.unitless,
        preserve: v.preserve
      }), P = N(x, 2);
      S = P[0], E = P[1];
    }
    var w = fs(S, s);
    S._tokenKey = w, $._tokenKey = fs($, s);
    var R = (p = v == null ? void 0 : v.key) !== null && p !== void 0 ? p : w;
    S._themeKey = R, ff(R);
    var O = "".concat(uf, "-").concat(Dn(w));
    return S._hashId = O, [S, O, $, E, (v == null ? void 0 : v.key) || ""];
  }, function(p) {
    mf(p[0]._themeKey, a);
  }, function(p) {
    var S = N(p, 4), $ = S[0], E = S[3];
    if (v && E) {
      var x = wr(E, Dn("css-variables-".concat($._themeKey)), {
        mark: ur,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      x[Tr] = a, x.setAttribute(un, $._themeKey);
    }
  });
  return C;
}
var pf = function(t, r, n) {
  var a = N(t, 5), i = a[2], o = a[3], s = a[4], l = n || {}, u = l.plain;
  if (!o)
    return null;
  var f = i._tokenKey, d = -999, v = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, g = Oa(o, s, f, v, u);
  return [d, f, g];
};
function fe() {
  return fe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, fe.apply(null, arguments);
}
var yf = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Kl = "comm", ql = "rule", Gl = "decl", bf = "@import", Cf = "@namespace", Sf = "@keyframes", wf = "@layer", xf = Math.abs, Nn = String.fromCharCode;
function Ul(e) {
  return e.trim();
}
function Fi(e, t, r) {
  return e.replace(t, r);
}
function on(e, t) {
  return e.charCodeAt(t) | 0;
}
function fn(e, t, r) {
  return e.slice(t, r);
}
function hr(e) {
  return e.length;
}
function Ef(e) {
  return e.length;
}
function da(e, t) {
  return t.push(e), e;
}
var Ba = 1, dn = 1, Xl = 0, ar = 0, mt = 0, pn = "";
function ko(e, t, r, n, a, i, o, s) {
  return { value: e, root: t, parent: r, type: n, props: a, children: i, line: Ba, column: dn, length: o, return: "", siblings: s };
}
function $f() {
  return mt;
}
function _f() {
  return mt = ar > 0 ? on(pn, --ar) : 0, dn--, mt === 10 && (dn = 1, Ba--), mt;
}
function fr() {
  return mt = ar < Xl ? on(pn, ar++) : 0, dn++, mt === 10 && (dn = 1, Ba++), mt;
}
function Or() {
  return on(pn, ar);
}
function xa() {
  return ar;
}
function Wa(e, t) {
  return fn(pn, e, t);
}
function Wn(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Pf(e) {
  return Ba = dn = 1, Xl = hr(pn = e), ar = 0, [];
}
function Rf(e) {
  return pn = "", e;
}
function fi(e) {
  return Ul(Wa(ar - 1, Ni(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Mf(e) {
  for (; (mt = Or()) && mt < 33; )
    fr();
  return Wn(e) > 2 || Wn(mt) > 3 ? "" : " ";
}
function Tf(e, t) {
  for (; --t && fr() && !(mt < 48 || mt > 102 || mt > 57 && mt < 65 || mt > 70 && mt < 97); )
    ;
  return Wa(e, xa() + (t < 6 && Or() == 32 && fr() == 32));
}
function Ni(e) {
  for (; fr(); )
    switch (mt) {
      // ] ) " '
      case e:
        return ar;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ni(mt);
        break;
      // (
      case 40:
        e === 41 && Ni(e);
        break;
      // \
      case 92:
        fr();
        break;
    }
  return ar;
}
function Of(e, t) {
  for (; fr() && e + mt !== 57; )
    if (e + mt === 84 && Or() === 47)
      break;
  return "/*" + Wa(t, ar - 1) + "*" + Nn(e === 47 ? e : fr());
}
function If(e) {
  for (; !Wn(Or()); )
    fr();
  return Wa(e, ar);
}
function kf(e) {
  return Rf(Ea("", null, null, null, [""], e = Pf(e), 0, [0], e));
}
function Ea(e, t, r, n, a, i, o, s, l) {
  for (var u = 0, f = 0, d = o, v = 0, g = 0, h = 0, y = 1, m = 1, C = 1, p = 0, S = 0, $ = "", E = a, x = i, P = n, w = $; m; )
    switch (h = S, S = fr()) {
      // (
      case 40:
        h != 108 && on(w, d - 1) == 58 ? (p++, w += "(") : w += fi(S);
        break;
      // )
      case 41:
        p--, w += ")";
        break;
      // " ' [
      case 34:
      case 39:
      case 91:
        w += fi(S);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        if (p > 0) {
          w += Nn(S);
          break;
        }
        w += Mf(h);
        break;
      // \
      case 92:
        w += Tf(xa() - 1, 7);
        continue;
      // /
      case 47:
        switch (Or()) {
          case 42:
          case 47:
            da(Af(Of(fr(), xa()), t, r, l), l), (Wn(h || 1) == 5 || Wn(Or() || 1) == 5) && hr(w) && fn(w, -1, void 0) !== " " && (w += " ");
            break;
          default:
            w += "/";
        }
        break;
      // {
      case 123 * y:
        s[u++] = hr(w) * C;
      // } ; \0
      case 125 * y:
      case 59:
      case 0:
        if (p > 0 && S) {
          w += Nn(S);
          break;
        }
        switch (S) {
          // \0 }
          case 0:
          case 125:
            m = 0;
          // ;
          case 59 + f:
            C == -1 && (w = Fi(w, /\f/g, "")), g > 0 && (hr(w) - d || y === 0) && da(g > 32 ? gs(w + ";", n, r, d - 1, l) : gs(Fi(w, " ", "") + ";", n, r, d - 2, l), l);
            break;
          // @ ;
          case 59:
            w += ";";
          // { rule/at-rule
          default:
            if (da(P = ms(w, t, r, u, f, a, s, $, E = [], x = [], d, i), i), S === 123)
              if (f === 0)
                Ea(w, t, P, P, E, i, d, s, x);
              else {
                switch (v) {
                  // c(ontainer)
                  case 99:
                    if (on(w, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (on(w, 2) === 97) break;
                  default:
                    f = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                f ? Ea(e, P, P, n && da(ms(e, P, P, 0, 0, a, s, $, a, E = [], d, x), x), a, x, d, s, n ? E : x) : Ea(w, P, P, P, [""], x, 0, s, x);
              }
        }
        u = f = g = 0, y = C = 1, $ = w = "", d = o;
        break;
      // :
      case 58:
        d = 1 + hr(w), g = h;
      default:
        if (y < 1) {
          if (S == 123)
            --y;
          else if (S == 125 && y++ == 0 && _f() == 125)
            continue;
        }
        switch (w += Nn(S), S * y) {
          // &
          case 38:
            C = f > 0 ? 1 : (w += "\f", -1);
            break;
          // ,
          case 44:
            if (p > 0) break;
            s[u++] = (hr(w) - 1) * C, C = 1;
            break;
          // @
          case 64:
            Or() === 45 && (w += fi(fr())), v = Or(), f = d = hr($ = w += If(xa())), S++;
            break;
          // -
          case 45:
            h === 45 && hr(w) == 2 && (y = 0);
        }
    }
  return i;
}
function ms(e, t, r, n, a, i, o, s, l, u, f, d) {
  for (var v = a - 1, g = a === 0 ? i : [""], h = Ef(g), y = 0, m = 0, C = 0; y < n; ++y)
    for (var p = 0, S = fn(e, v + 1, v = xf(m = o[y])), $ = e; p < h; ++p)
      ($ = Ul(m > 0 ? g[p] + " " + S : Fi(S, /&\f/g, g[p]))) && (l[C++] = $);
  return ko(e, t, r, a === 0 ? ql : s, l, u, f, d);
}
function Af(e, t, r, n) {
  return ko(e, t, r, Kl, Nn($f()), fn(e, 2, -2), 0, n);
}
function gs(e, t, r, n, a) {
  return ko(e, t, r, Gl, fn(e, 0, n), fn(e, n + 1, -1), n, a);
}
function Li(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function Ff(e, t, r, n) {
  switch (e.type) {
    case wf:
      if (e.children.length) break;
    case bf:
    case Cf:
    case Gl:
      return e.return = e.return || e.value;
    case Kl:
      return "";
    case Sf:
      return e.return = e.value + "{" + Li(e.children, n) + "}";
    case ql:
      if (!hr(e.value = e.props.join(","))) return "";
  }
  return hr(r = Li(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
var hs = "data-ant-cssinjs-cache-path", Yl = "_FILE_STYLE__", Hr, Ql = !0;
function Nf() {
  if (!Hr && (Hr = {}, qt())) {
    var e = document.createElement("div");
    e.className = hs, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(a) {
      var i = a.split(":"), o = N(i, 2), s = o[0], l = o[1];
      Hr[s] = l;
    });
    var r = document.querySelector("style[".concat(hs, "]"));
    if (r) {
      var n;
      Ql = !1, (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
    }
    document.body.removeChild(e);
  }
}
function Lf(e) {
  return Nf(), !!Hr[e];
}
function jf(e) {
  var t = Hr[e], r = null;
  if (t && qt())
    if (Ql)
      r = Yl;
    else {
      var n = document.querySelector("style[".concat(ur, '="').concat(Hr[e], '"]'));
      n ? r = n.innerHTML : delete Hr[e];
    }
  return [r, t];
}
var Df = "_skip_check_", Zl = "_multi_value_";
function $a(e) {
  var t = Li(kf(e), Ff);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function Vf(e) {
  return ce(e) === "object" && e && (Df in e || Zl in e);
}
function ps(e, t, r) {
  if (!t)
    return e;
  var n = ".".concat(t), a = r === "low" ? ":where(".concat(n, ")") : n, i = e.split(",").map(function(o) {
    var s, l = o.trim().split(/\s+/), u = l[0] || "", f = ((s = u.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return u = "".concat(f).concat(a).concat(u.slice(f.length)), [u].concat(ae(l.slice(1))).join(" ");
  });
  return i.join(",");
}
var zf = function e(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, a = n.root, i = n.injectHash, o = n.parentSelectors, s = r.hashId, l = r.layer;
  r.path;
  var u = r.hashPriority, f = r.transformers, d = f === void 0 ? [] : f;
  r.linters;
  var v = "", g = {};
  function h(C) {
    var p = C.getName(s);
    if (!g[p]) {
      var S = e(C.style, r, {
        root: !1,
        parentSelectors: o
      }), $ = N(S, 1), E = $[0];
      g[p] = "@keyframes ".concat(C.getName(s)).concat(E);
    }
  }
  function y(C) {
    var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return C.forEach(function(S) {
      Array.isArray(S) ? y(S, p) : S && p.push(S);
    }), p;
  }
  var m = y(Array.isArray(t) ? t : [t]);
  return m.forEach(function(C) {
    var p = typeof C == "string" && !a ? {} : C;
    if (typeof p == "string")
      v += "".concat(p, `
`);
    else if (p._keyframe)
      h(p);
    else {
      var S = d.reduce(function($, E) {
        var x;
        return (E == null || (x = E.visit) === null || x === void 0 ? void 0 : x.call(E, $)) || $;
      }, p);
      Object.keys(S).forEach(function($) {
        var E = S[$];
        if (ce(E) === "object" && E && ($ !== "animationName" || !E._keyframe) && !Vf(E)) {
          var x = !1, P = $.trim(), w = !1;
          (a || i) && s ? P.startsWith("@") ? x = !0 : P === "&" ? P = ps("", s, u) : P = ps($, s, u) : a && !s && (P === "&" || P === "") && (P = "", w = !0);
          var R = e(E, r, {
            root: w,
            injectHash: x,
            parentSelectors: [].concat(ae(o), [P])
          }), O = N(R, 2), I = O[0], F = O[1];
          g = M(M({}, g), F), v += "".concat(P).concat(I);
        } else {
          let D = function(L, j) {
            var H = L.replace(/[A-Z]/g, function(W) {
              return "-".concat(W.toLowerCase());
            }), K = j;
            !yf[L] && typeof K == "number" && K !== 0 && (K = "".concat(K, "px")), L === "animationName" && j !== null && j !== void 0 && j._keyframe && (h(j), K = j.getName(s)), v += "".concat(H, ":").concat(K, ";");
          };
          var A, k = (A = E == null ? void 0 : E.value) !== null && A !== void 0 ? A : E;
          ce(E) === "object" && E !== null && E !== void 0 && E[Zl] && Array.isArray(k) ? k.forEach(function(L) {
            D($, L);
          }) : D($, k);
        }
      });
    }
  }), a ? l && (v && (v = "@layer ".concat(l.name, " {").concat(v, "}")), l.dependencies && (g["@layer ".concat(l.name)] = l.dependencies.map(function(C) {
    return "@layer ".concat(C, ", ").concat(l.name, ";");
  }).join(`
`))) : v = "{".concat(v, "}"), [v, g];
};
function Jl(e, t) {
  return Dn("".concat(e.join("%")).concat(t));
}
function Hf() {
  return null;
}
var ec = "style";
function ji(e, t) {
  var r = e.token, n = e.path, a = e.hashId, i = e.layer, o = e.nonce, s = e.clientOnly, l = e.order, u = l === void 0 ? 0 : l, f = c.useContext(Qn), d = f.autoClear;
  f.mock;
  var v = f.defaultCache, g = f.hashPriority, h = f.container, y = f.ssrInline, m = f.transformers, C = f.linters, p = f.cache, S = f.layer, $ = r._tokenKey, E = [$];
  S && E.push("layer"), E.push.apply(E, ae(n));
  var x = ki, P = Io(
    ec,
    E,
    // Create cache if needed
    function() {
      var F = E.join("|");
      if (Lf(F)) {
        var A = jf(F), k = N(A, 2), D = k[0], L = k[1];
        if (D)
          return [D, $, L, {}, s, u];
      }
      var j = t(), H = zf(j, {
        hashId: a,
        hashPriority: g,
        layer: S ? i : void 0,
        path: n.join("-"),
        transformers: m,
        linters: C
      }), K = N(H, 2), W = K[0], X = K[1], G = $a(W), U = Jl(E, G);
      return [G, $, U, X, s, u];
    },
    // Remove cache if no need
    function(F, A) {
      var k = N(F, 3), D = k[2];
      (A || d) && ki && Vn(D, {
        mark: ur,
        attachTo: h
      });
    },
    // Effect: Inject style here
    function(F) {
      var A = N(F, 4), k = A[0];
      A[1];
      var D = A[2], L = A[3];
      if (x && k !== Yl) {
        var j = {
          mark: ur,
          prepend: S ? !1 : "queue",
          attachTo: h,
          priority: u
        }, H = typeof o == "function" ? o() : o;
        H && (j.csp = {
          nonce: H
        });
        var K = [], W = [];
        Object.keys(L).forEach(function(G) {
          G.startsWith("@layer") ? K.push(G) : W.push(G);
        }), K.forEach(function(G) {
          wr($a(L[G]), "_layer-".concat(G), M(M({}, j), {}, {
            prepend: !0
          }));
        });
        var X = wr(k, D, j);
        X[Tr] = p.instanceId, X.setAttribute(un, $), W.forEach(function(G) {
          wr($a(L[G]), "_effect-".concat(G), j);
        });
      }
    }
  ), w = N(P, 3), R = w[0], O = w[1], I = w[2];
  return function(F) {
    var A;
    return !y || x || !v ? A = /* @__PURE__ */ c.createElement(Hf, null) : A = /* @__PURE__ */ c.createElement("style", fe({}, _(_({}, un, O), ur, I), {
      dangerouslySetInnerHTML: {
        __html: R
      }
    })), /* @__PURE__ */ c.createElement(c.Fragment, null, A, F);
  };
}
var Bf = function(t, r, n) {
  var a = N(t, 6), i = a[0], o = a[1], s = a[2], l = a[3], u = a[4], f = a[5], d = n || {}, v = d.plain;
  if (u)
    return null;
  var g = i, h = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  };
  return g = Oa(i, o, s, h, v), l && Object.keys(l).forEach(function(y) {
    if (!r[y]) {
      r[y] = !0;
      var m = $a(l[y]), C = Oa(m, o, "_effect-".concat(y), h, v);
      y.startsWith("@layer") ? g = C + g : g += C;
    }
  }), [f, s, g];
}, tc = "cssVar", Wf = function(t, r) {
  var n = t.key, a = t.prefix, i = t.unitless, o = t.ignore, s = t.token, l = t.scope, u = l === void 0 ? "" : l, f = c.useContext(Qn), d = f.cache.instanceId, v = f.container, g = s._tokenKey, h = [].concat(ae(t.path), [n, u, g]), y = Io(tc, h, function() {
    var m = r(), C = Bl(m, n, {
      prefix: a,
      unitless: i,
      ignore: o,
      scope: u
    }), p = N(C, 2), S = p[0], $ = p[1], E = Jl(h, $);
    return [S, $, E, n];
  }, function(m) {
    var C = N(m, 3), p = C[2];
    ki && Vn(p, {
      mark: ur,
      attachTo: v
    });
  }, function(m) {
    var C = N(m, 3), p = C[1], S = C[2];
    if (p) {
      var $ = wr(p, S, {
        mark: ur,
        prepend: "queue",
        attachTo: v,
        priority: -999
      });
      $[Tr] = d, $.setAttribute(un, n);
    }
  });
  return y;
}, Kf = function(t, r, n) {
  var a = N(t, 4), i = a[1], o = a[2], s = a[3], l = n || {}, u = l.plain;
  if (!i)
    return null;
  var f = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, v = Oa(i, s, o, d, u);
  return [f, o, v];
};
_(_(_({}, ec, Bf), Wl, pf), tc, Kf);
var Er = /* @__PURE__ */ (function() {
  function e(t, r) {
    Pt(this, e), _(this, "name", void 0), _(this, "style", void 0), _(this, "_keyframe", !0), this.name = t, this.style = r;
  }
  return Rt(e, [{
    key: "getName",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return r ? "".concat(r, "-").concat(this.name) : this.name;
    }
  }]), e;
})();
function qr(e) {
  return e.notSplit = !0, e;
}
qr(["borderTop", "borderBottom"]), qr(["borderTop"]), qr(["borderBottom"]), qr(["borderLeft", "borderRight"]), qr(["borderLeft"]), qr(["borderRight"]);
var Ao = /* @__PURE__ */ c.createContext({});
function qf(e) {
  return Fl(e) || jl(e) || Ro(e) || Nl();
}
function pr(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    r = r[t[n]];
  }
  return r;
}
function rc(e, t, r, n) {
  if (!t.length)
    return r;
  var a = qf(t), i = a[0], o = a.slice(1), s;
  return !e && typeof i == "number" ? s = [] : Array.isArray(e) ? s = ae(e) : s = M({}, e), n && r === void 0 && o.length === 1 ? delete s[i][o[0]] : s[i] = rc(s[i], o, r, n), s;
}
function lr(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !pr(e, t.slice(0, -1)) ? e : rc(e, t, r, n);
}
function Gf(e) {
  return ce(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function ys(e) {
  return Array.isArray(e) ? [] : {};
}
var Uf = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function tn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = ys(t[0]);
  return t.forEach(function(a) {
    function i(o, s) {
      var l = new Set(s), u = pr(a, o), f = Array.isArray(u);
      if (f || Gf(u)) {
        if (!l.has(u)) {
          l.add(u);
          var d = pr(n, o);
          f ? n = lr(n, o, []) : (!d || ce(d) !== "object") && (n = lr(n, o, ys(u))), Uf(u).forEach(function(v) {
            i([].concat(ae(o), [v]), l);
          });
        }
      } else
        n = lr(n, o, u);
    }
    i([]);
  }), n;
}
const Xf = /* @__PURE__ */ c.createContext(void 0);
var Yf = {
  yearFormat: "YYYY",
  dayFormat: "D",
  cellMeridiemFormat: "A",
  monthBeforeYear: !0
}, Qf = M(M({}, Yf), {}, {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  week: "Week",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  dateFormat: "M/D/YYYY",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
});
const Zf = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
};
Object.assign({
  placeholder: "Select date",
  yearPlaceholder: "Select year",
  quarterPlaceholder: "Select quarter",
  monthPlaceholder: "Select month",
  weekPlaceholder: "Select week",
  rangePlaceholder: ["Start date", "End date"],
  rangeYearPlaceholder: ["Start year", "End year"],
  rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
  rangeMonthPlaceholder: ["Start month", "End month"],
  rangeWeekPlaceholder: ["Start week", "End week"]
}, Qf), Object.assign({}, Zf);
const Bt = "${label} is not a valid ${type}", Ka = {
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: Bt,
        method: Bt,
        array: Bt,
        object: Bt,
        number: Bt,
        date: Bt,
        boolean: Bt,
        integer: Bt,
        float: Bt,
        regexp: Bt,
        email: Bt,
        url: Bt,
        hex: Bt
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  }
};
Object.assign({}, Ka.Modal);
let _a = [];
const bs = () => _a.reduce((e, t) => Object.assign(Object.assign({}, e), t), Ka.Modal);
function Jf(e) {
  if (e) {
    const t = Object.assign({}, e);
    return _a.push(t), bs(), () => {
      _a = _a.filter((r) => r !== t), bs();
    };
  }
  Object.assign({}, Ka.Modal);
}
const nc = /* @__PURE__ */ c.createContext(void 0), ed = "internalMark", td = (e) => {
  const {
    locale: t = {},
    children: r,
    _ANT_MARK__: n
  } = e;
  c.useEffect(() => Jf(t == null ? void 0 : t.Modal), [t]);
  const a = c.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ c.createElement(nc.Provider, {
    value: a
  }, r);
}, ac = {
  blue: "#1677FF",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  /**
   * @deprecated Use magenta instead
   */
  pink: "#EB2F96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, Kn = Object.assign(Object.assign({}, ac), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1,
  // Motion
  motion: !0
}), St = Math.round;
function di(e, t) {
  const r = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], n = r.map((a) => parseFloat(a));
  for (let a = 0; a < 3; a += 1)
    n[a] = t(n[a] || 0, r[a] || "", a);
  return r[3] ? n[3] = r[3].includes("%") ? n[3] / 100 : n[3] : n[3] = 1, n;
}
const Cs = (e, t, r) => r === 0 ? e : e / 100;
function Rn(e, t) {
  const r = t || 255;
  return e > r ? r : e < 0 ? 0 : e;
}
class ut {
  constructor(t) {
    _(this, "isValid", !0), _(this, "r", 0), _(this, "g", 0), _(this, "b", 0), _(this, "a", 1), _(this, "_h", void 0), _(this, "_s", void 0), _(this, "_l", void 0), _(this, "_v", void 0), _(this, "_max", void 0), _(this, "_min", void 0), _(this, "_brightness", void 0);
    function r(n) {
      return n[0] in t && n[1] in t && n[2] in t;
    }
    if (t) if (typeof t == "string") {
      let a = function(i) {
        return n.startsWith(i);
      };
      const n = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(n) ? this.fromHexString(n) : a("rgb") ? this.fromRgbString(n) : a("hsl") ? this.fromHslString(n) : (a("hsv") || a("hsb")) && this.fromHsvString(n);
    } else if (t instanceof ut)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (r("rgb"))
      this.r = Rn(t.r), this.g = Rn(t.g), this.b = Rn(t.b), this.a = typeof t.a == "number" ? Rn(t.a, 1) : 1;
    else if (r("hsl"))
      this.fromHsl(t);
    else if (r("hsv"))
      this.fromHsv(t);
    else
      throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(t));
  }
  // ======================= Setter =======================
  setR(t) {
    return this._sc("r", t);
  }
  setG(t) {
    return this._sc("g", t);
  }
  setB(t) {
    return this._sc("b", t);
  }
  setA(t) {
    return this._sc("a", t, 1);
  }
  setHue(t) {
    const r = this.toHsv();
    return r.h = t, this._c(r);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function t(i) {
      const o = i / 255;
      return o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4);
    }
    const r = t(this.r), n = t(this.g), a = t(this.b);
    return 0.2126 * r + 0.7152 * n + 0.0722 * a;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = St(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._s = 0 : this._s = t / this.getMax();
    }
    return this._s;
  }
  getLightness() {
    return typeof this._l > "u" && (this._l = (this.getMax() + this.getMin()) / 510), this._l;
  }
  getValue() {
    return typeof this._v > "u" && (this._v = this.getMax() / 255), this._v;
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   * Note: this is not the b of HSB
   * @see http://www.w3.org/TR/AERT#color-contrast
   */
  getBrightness() {
    return typeof this._brightness > "u" && (this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3), this._brightness;
  }
  // ======================== Func ========================
  darken(t = 10) {
    const r = this.getHue(), n = this.getSaturation();
    let a = this.getLightness() - t / 100;
    return a < 0 && (a = 0), this._c({
      h: r,
      s: n,
      l: a,
      a: this.a
    });
  }
  lighten(t = 10) {
    const r = this.getHue(), n = this.getSaturation();
    let a = this.getLightness() + t / 100;
    return a > 1 && (a = 1), this._c({
      h: r,
      s: n,
      l: a,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, r = 50) {
    const n = this._c(t), a = r / 100, i = (s) => (n[s] - this[s]) * a + this[s], o = {
      r: St(i("r")),
      g: St(i("g")),
      b: St(i("b")),
      a: St(i("a") * 100) / 100
    };
    return this._c(o);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(t = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, t);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(t = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, t);
  }
  onBackground(t) {
    const r = this._c(t), n = this.a + r.a * (1 - this.a), a = (i) => St((this[i] * this.a + r[i] * r.a * (1 - this.a)) / n);
    return this._c({
      r: a("r"),
      g: a("g"),
      b: a("b"),
      a: n
    });
  }
  // ======================= Status =======================
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return this.getBrightness() >= 128;
  }
  // ======================== MISC ========================
  equals(t) {
    return this.r === t.r && this.g === t.g && this.b === t.b && this.a === t.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let t = "#";
    const r = (this.r || 0).toString(16);
    t += r.length === 2 ? r : "0" + r;
    const n = (this.g || 0).toString(16);
    t += n.length === 2 ? n : "0" + n;
    const a = (this.b || 0).toString(16);
    if (t += a.length === 2 ? a : "0" + a, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const i = St(this.a * 255).toString(16);
      t += i.length === 2 ? i : "0" + i;
    }
    return t;
  }
  /** CSS support color pattern */
  toHsl() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      l: this.getLightness(),
      a: this.a
    };
  }
  /** CSS support color pattern */
  toHslString() {
    const t = this.getHue(), r = St(this.getSaturation() * 100), n = St(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${r}%,${n}%,${this.a})` : `hsl(${t},${r}%,${n}%)`;
  }
  /** Same as toHsb */
  toHsv() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      v: this.getValue(),
      a: this.a
    };
  }
  toRgb() {
    return {
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a
    };
  }
  toRgbString() {
    return this.a !== 1 ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`;
  }
  toString() {
    return this.toRgbString();
  }
  // ====================== Privates ======================
  /** Return a new FastColor object with one channel changed */
  _sc(t, r, n) {
    const a = this.clone();
    return a[t] = Rn(r, n), a;
  }
  _c(t) {
    return new this.constructor(t);
  }
  getMax() {
    return typeof this._max > "u" && (this._max = Math.max(this.r, this.g, this.b)), this._max;
  }
  getMin() {
    return typeof this._min > "u" && (this._min = Math.min(this.r, this.g, this.b)), this._min;
  }
  fromHexString(t) {
    const r = t.replace("#", "");
    function n(a, i) {
      return parseInt(r[a] + r[i || a], 16);
    }
    r.length < 6 ? (this.r = n(0), this.g = n(1), this.b = n(2), this.a = r[3] ? n(3) / 255 : 1) : (this.r = n(0, 1), this.g = n(2, 3), this.b = n(4, 5), this.a = r[6] ? n(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: r,
    l: n,
    a
  }) {
    if (this._h = t % 360, this._s = r, this._l = n, this.a = typeof a == "number" ? a : 1, r <= 0) {
      const v = St(n * 255);
      this.r = v, this.g = v, this.b = v;
    }
    let i = 0, o = 0, s = 0;
    const l = t / 60, u = (1 - Math.abs(2 * n - 1)) * r, f = u * (1 - Math.abs(l % 2 - 1));
    l >= 0 && l < 1 ? (i = u, o = f) : l >= 1 && l < 2 ? (i = f, o = u) : l >= 2 && l < 3 ? (o = u, s = f) : l >= 3 && l < 4 ? (o = f, s = u) : l >= 4 && l < 5 ? (i = f, s = u) : l >= 5 && l < 6 && (i = u, s = f);
    const d = n - u / 2;
    this.r = St((i + d) * 255), this.g = St((o + d) * 255), this.b = St((s + d) * 255);
  }
  fromHsv({
    h: t,
    s: r,
    v: n,
    a
  }) {
    this._h = t % 360, this._s = r, this._v = n, this.a = typeof a == "number" ? a : 1;
    const i = St(n * 255);
    if (this.r = i, this.g = i, this.b = i, r <= 0)
      return;
    const o = t / 60, s = Math.floor(o), l = o - s, u = St(n * (1 - r) * 255), f = St(n * (1 - r * l) * 255), d = St(n * (1 - r * (1 - l)) * 255);
    switch (s) {
      case 0:
        this.g = d, this.b = u;
        break;
      case 1:
        this.r = f, this.b = u;
        break;
      case 2:
        this.r = u, this.b = d;
        break;
      case 3:
        this.r = u, this.g = f;
        break;
      case 4:
        this.r = d, this.g = u;
        break;
      case 5:
      default:
        this.g = u, this.b = f;
        break;
    }
  }
  fromHsvString(t) {
    const r = di(t, Cs);
    this.fromHsv({
      h: r[0],
      s: r[1],
      v: r[2],
      a: r[3]
    });
  }
  fromHslString(t) {
    const r = di(t, Cs);
    this.fromHsl({
      h: r[0],
      s: r[1],
      l: r[2],
      a: r[3]
    });
  }
  fromRgbString(t) {
    const r = di(t, (n, a) => (
      // Convert percentage to number. e.g. 50% -> 128
      a.includes("%") ? St(n / 100 * 255) : n
    ));
    this.r = r[0], this.g = r[1], this.b = r[2], this.a = r[3];
  }
}
var va = 2, Ss = 0.16, rd = 0.05, nd = 0.05, ad = 0.15, ic = 5, oc = 4, id = [{
  index: 7,
  amount: 15
}, {
  index: 6,
  amount: 25
}, {
  index: 5,
  amount: 30
}, {
  index: 5,
  amount: 45
}, {
  index: 5,
  amount: 65
}, {
  index: 5,
  amount: 85
}, {
  index: 4,
  amount: 90
}, {
  index: 3,
  amount: 95
}, {
  index: 2,
  amount: 97
}, {
  index: 1,
  amount: 98
}];
function ws(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - va * t : Math.round(e.h) + va * t : n = r ? Math.round(e.h) + va * t : Math.round(e.h) - va * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function xs(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - Ss * t : t === oc ? n = e.s + Ss : n = e.s + rd * t, n > 1 && (n = 1), r && t === ic && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Math.round(n * 100) / 100;
}
function Es(e, t, r) {
  var n;
  return r ? n = e.v + nd * t : n = e.v - ad * t, n = Math.max(0, Math.min(1, n)), Math.round(n * 100) / 100;
}
function qn(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = new ut(e), a = n.toHsv(), i = ic; i > 0; i -= 1) {
    var o = new ut({
      h: ws(a, i, !0),
      s: xs(a, i, !0),
      v: Es(a, i, !0)
    });
    r.push(o);
  }
  r.push(n);
  for (var s = 1; s <= oc; s += 1) {
    var l = new ut({
      h: ws(a, s),
      s: xs(a, s),
      v: Es(a, s)
    });
    r.push(l);
  }
  return t.theme === "dark" ? id.map(function(u) {
    var f = u.index, d = u.amount;
    return new ut(t.backgroundColor || "#141414").mix(r[f], d).toHexString();
  }) : r.map(function(u) {
    return u.toHexString();
  });
}
var vi = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, Di = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
Di.primary = Di[5];
var Vi = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
Vi.primary = Vi[5];
var zi = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
zi.primary = zi[5];
var Hi = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
Hi.primary = Hi[5];
var Bi = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
Bi.primary = Bi[5];
var Wi = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
Wi.primary = Wi[5];
var Ki = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
Ki.primary = Ki[5];
var qi = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
qi.primary = qi[5];
var Ia = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Ia.primary = Ia[5];
var Gi = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
Gi.primary = Gi[5];
var Ui = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
Ui.primary = Ui[5];
var Xi = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
Xi.primary = Xi[5];
var Yi = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
Yi.primary = Yi[5];
var mi = {
  red: Di,
  volcano: Vi,
  orange: zi,
  gold: Hi,
  yellow: Bi,
  lime: Wi,
  green: Ki,
  cyan: qi,
  blue: Ia,
  geekblue: Gi,
  purple: Ui,
  magenta: Xi,
  grey: Yi
};
function od(e, {
  generateColorPalettes: t,
  generateNeutralColorPalettes: r
}) {
  const {
    colorSuccess: n,
    colorWarning: a,
    colorError: i,
    colorInfo: o,
    colorPrimary: s,
    colorBgBase: l,
    colorTextBase: u
  } = e, f = t(s), d = t(n), v = t(a), g = t(i), h = t(o), y = r(l, u), m = e.colorLink || e.colorInfo, C = t(m), p = new ut(g[1]).mix(new ut(g[3]), 50).toHexString();
  return Object.assign(Object.assign({}, y), {
    colorPrimaryBg: f[1],
    colorPrimaryBgHover: f[2],
    colorPrimaryBorder: f[3],
    colorPrimaryBorderHover: f[4],
    colorPrimaryHover: f[5],
    colorPrimary: f[6],
    colorPrimaryActive: f[7],
    colorPrimaryTextHover: f[8],
    colorPrimaryText: f[9],
    colorPrimaryTextActive: f[10],
    colorSuccessBg: d[1],
    colorSuccessBgHover: d[2],
    colorSuccessBorder: d[3],
    colorSuccessBorderHover: d[4],
    colorSuccessHover: d[4],
    colorSuccess: d[6],
    colorSuccessActive: d[7],
    colorSuccessTextHover: d[8],
    colorSuccessText: d[9],
    colorSuccessTextActive: d[10],
    colorErrorBg: g[1],
    colorErrorBgHover: g[2],
    colorErrorBgFilledHover: p,
    colorErrorBgActive: g[3],
    colorErrorBorder: g[3],
    colorErrorBorderHover: g[4],
    colorErrorHover: g[5],
    colorError: g[6],
    colorErrorActive: g[7],
    colorErrorTextHover: g[8],
    colorErrorText: g[9],
    colorErrorTextActive: g[10],
    colorWarningBg: v[1],
    colorWarningBgHover: v[2],
    colorWarningBorder: v[3],
    colorWarningBorderHover: v[4],
    colorWarningHover: v[4],
    colorWarning: v[6],
    colorWarningActive: v[7],
    colorWarningTextHover: v[8],
    colorWarningText: v[9],
    colorWarningTextActive: v[10],
    colorInfoBg: h[1],
    colorInfoBgHover: h[2],
    colorInfoBorder: h[3],
    colorInfoBorderHover: h[4],
    colorInfoHover: h[4],
    colorInfo: h[6],
    colorInfoActive: h[7],
    colorInfoTextHover: h[8],
    colorInfoText: h[9],
    colorInfoTextActive: h[10],
    colorLinkHover: C[4],
    colorLink: C[6],
    colorLinkActive: C[7],
    colorBgMask: new ut("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const sd = (e) => {
  let t = e, r = e, n = e, a = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? a = 4 : e >= 8 && (a = 6), {
    borderRadius: e,
    borderRadiusXS: n,
    borderRadiusSM: r,
    borderRadiusLG: t,
    borderRadiusOuter: a
  };
};
function ld(e) {
  const {
    motionUnit: t,
    motionBase: r,
    borderRadius: n,
    lineWidth: a
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(r + t).toFixed(1)}s`,
    motionDurationMid: `${(r + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(r + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: a + 1
  }, sd(n));
}
const cd = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function ud(e) {
  return (e + 8) / e;
}
function fd(e) {
  const t = Array.from({
    length: 10
  }).map((r, n) => {
    const a = n - 1, i = e * Math.pow(Math.E, a / 5), o = n > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(o / 2) * 2;
  });
  return t[1] = e, t.map((r) => ({
    size: r,
    lineHeight: ud(r)
  }));
}
const dd = (e) => {
  const t = fd(e), r = t.map((f) => f.size), n = t.map((f) => f.lineHeight), a = r[1], i = r[0], o = r[2], s = n[1], l = n[0], u = n[2];
  return {
    fontSizeSM: i,
    fontSize: a,
    fontSizeLG: o,
    fontSizeXL: r[3],
    fontSizeHeading1: r[6],
    fontSizeHeading2: r[5],
    fontSizeHeading3: r[4],
    fontSizeHeading4: r[3],
    fontSizeHeading5: r[2],
    lineHeight: s,
    lineHeightLG: u,
    lineHeightSM: l,
    fontHeight: Math.round(s * a),
    fontHeightLG: Math.round(u * o),
    fontHeightSM: Math.round(l * i),
    lineHeightHeading1: n[6],
    lineHeightHeading2: n[5],
    lineHeightHeading3: n[4],
    lineHeightHeading4: n[3],
    lineHeightHeading5: n[2]
  };
};
function vd(e) {
  const {
    sizeUnit: t,
    sizeStep: r
  } = e;
  return {
    sizeXXL: t * (r + 8),
    // 48
    sizeXL: t * (r + 4),
    // 32
    sizeLG: t * (r + 2),
    // 24
    sizeMD: t * (r + 1),
    // 20
    sizeMS: t * r,
    // 16
    size: t * r,
    // 16
    sizeSM: t * (r - 1),
    // 12
    sizeXS: t * (r - 2),
    // 8
    sizeXXS: t * (r - 3)
    // 4
  };
}
const tr = (e, t) => new ut(e).setA(t).toRgbString(), Mn = (e, t) => new ut(e).darken(t).toHexString(), md = (e) => {
  const t = qn(e);
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[4],
    6: t[5],
    7: t[6],
    8: t[4],
    9: t[5],
    10: t[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, gd = (e, t) => {
  const r = e || "#fff", n = t || "#000";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: tr(n, 0.88),
    colorTextSecondary: tr(n, 0.65),
    colorTextTertiary: tr(n, 0.45),
    colorTextQuaternary: tr(n, 0.25),
    colorFill: tr(n, 0.15),
    colorFillSecondary: tr(n, 0.06),
    colorFillTertiary: tr(n, 0.04),
    colorFillQuaternary: tr(n, 0.02),
    colorBgSolid: tr(n, 1),
    colorBgSolidHover: tr(n, 0.75),
    colorBgSolidActive: tr(n, 0.95),
    colorBgLayout: Mn(r, 4),
    colorBgContainer: Mn(r, 0),
    colorBgElevated: Mn(r, 0),
    colorBgSpotlight: tr(n, 0.85),
    colorBgBlur: "transparent",
    colorBorder: Mn(r, 15),
    colorBorderSecondary: Mn(r, 6)
  };
};
function hd(e) {
  vi.pink = vi.magenta, mi.pink = mi.magenta;
  const t = Object.keys(ac).map((r) => {
    const n = e[r] === vi[r] ? mi[r] : qn(e[r]);
    return Array.from({
      length: 10
    }, () => 1).reduce((a, i, o) => (a[`${r}-${o + 1}`] = n[o], a[`${r}${o + 1}`] = n[o], a), {});
  }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), od(e, {
    generateColorPalettes: md,
    generateNeutralColorPalettes: gd
  })), dd(e.fontSize)), vd(e)), cd(e)), ld(e));
}
const sc = Ii(hd), Qi = {
  token: Kn,
  override: {
    override: Kn
  },
  hashed: !0
}, lc = /* @__PURE__ */ Xe.createContext(Qi), Zi = "ant", Fo = "anticon", pd = ["outlined", "borderless", "filled", "underlined"], yd = (e, t) => t || (e ? `${Zi}-${e}` : Zi), _t = /* @__PURE__ */ c.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: yd,
  iconPrefixCls: Fo
}), {
  Consumer: x0
} = _t, $s = {};
function bd(e) {
  const t = c.useContext(_t), {
    getPrefixCls: r,
    direction: n,
    getPopupContainer: a
  } = t, i = t[e];
  return Object.assign(Object.assign({
    classNames: $s,
    styles: $s
  }, i), {
    getPrefixCls: r,
    direction: n,
    getPopupContainer: a
  });
}
const Cd = `-ant-${Date.now()}-${Math.random()}`;
function Sd(e, t) {
  const r = {}, n = (o, s) => {
    let l = o.clone();
    return l = (s == null ? void 0 : s(l)) || l, l.toRgbString();
  }, a = (o, s) => {
    const l = new ut(o), u = qn(l.toRgbString());
    r[`${s}-color`] = n(l), r[`${s}-color-disabled`] = u[1], r[`${s}-color-hover`] = u[4], r[`${s}-color-active`] = u[6], r[`${s}-color-outline`] = l.clone().setA(0.2).toRgbString(), r[`${s}-color-deprecated-bg`] = u[0], r[`${s}-color-deprecated-border`] = u[2];
  };
  if (t.primaryColor) {
    a(t.primaryColor, "primary");
    const o = new ut(t.primaryColor), s = qn(o.toRgbString());
    s.forEach((u, f) => {
      r[`primary-${f + 1}`] = u;
    }), r["primary-color-deprecated-l-35"] = n(o, (u) => u.lighten(35)), r["primary-color-deprecated-l-20"] = n(o, (u) => u.lighten(20)), r["primary-color-deprecated-t-20"] = n(o, (u) => u.tint(20)), r["primary-color-deprecated-t-50"] = n(o, (u) => u.tint(50)), r["primary-color-deprecated-f-12"] = n(o, (u) => u.setA(u.a * 0.12));
    const l = new ut(s[0]);
    r["primary-color-active-deprecated-f-30"] = n(l, (u) => u.setA(u.a * 0.3)), r["primary-color-active-deprecated-d-02"] = n(l, (u) => u.darken(2));
  }
  return t.successColor && a(t.successColor, "success"), t.warningColor && a(t.warningColor, "warning"), t.errorColor && a(t.errorColor, "error"), t.infoColor && a(t.infoColor, "info"), `
  :root {
    ${Object.keys(r).map((o) => `--${e}-${o}: ${r[o]};`).join(`
`)}
  }
  `.trim();
}
function wd(e, t) {
  const r = Sd(e, t);
  qt() && wr(r, `${Cd}-dynamic-theme`);
}
const Ji = /* @__PURE__ */ c.createContext(!1), xd = ({
  children: e,
  disabled: t
}) => {
  const r = c.useContext(Ji);
  return /* @__PURE__ */ c.createElement(Ji.Provider, {
    value: t ?? r
  }, e);
}, vn = /* @__PURE__ */ c.createContext(void 0), Ed = ({
  children: e,
  size: t
}) => {
  const r = c.useContext(vn);
  return /* @__PURE__ */ c.createElement(vn.Provider, {
    value: t || r
  }, e);
};
function $d() {
  const e = c.useContext(Ji), t = c.useContext(vn);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
var cc = /* @__PURE__ */ Rt(function e() {
  Pt(this, e);
}), uc = "CALC_UNIT", _d = new RegExp(uc, "g");
function gi(e) {
  return typeof e == "number" ? "".concat(e).concat(uc) : e;
}
var Pd = /* @__PURE__ */ (function(e) {
  Ar(r, e);
  var t = Fr(r);
  function r(n, a) {
    var i;
    Pt(this, r), i = t.call(this), _(we(i), "result", ""), _(we(i), "unitlessCssVar", void 0), _(we(i), "lowPriority", void 0);
    var o = ce(n);
    return i.unitlessCssVar = a, n instanceof r ? i.result = "(".concat(n.result, ")") : o === "number" ? i.result = gi(n) : o === "string" && (i.result = n), i;
  }
  return Rt(r, [{
    key: "add",
    value: function(a) {
      return a instanceof r ? this.result = "".concat(this.result, " + ").concat(a.getResult()) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " + ").concat(gi(a))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(a) {
      return a instanceof r ? this.result = "".concat(this.result, " - ").concat(a.getResult()) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " - ").concat(gi(a))), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(a) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), a instanceof r ? this.result = "".concat(this.result, " * ").concat(a.getResult(!0)) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " * ").concat(a)), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(a) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), a instanceof r ? this.result = "".concat(this.result, " / ").concat(a.getResult(!0)) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " / ").concat(a)), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(a) {
      return this.lowPriority || a ? "(".concat(this.result, ")") : this.result;
    }
  }, {
    key: "equal",
    value: function(a) {
      var i = this, o = a || {}, s = o.unit, l = !0;
      return typeof s == "boolean" ? l = s : Array.from(this.unitlessCssVar).some(function(u) {
        return i.result.includes(u);
      }) && (l = !1), this.result = this.result.replace(_d, l ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), r;
})(cc), Rd = /* @__PURE__ */ (function(e) {
  Ar(r, e);
  var t = Fr(r);
  function r(n) {
    var a;
    return Pt(this, r), a = t.call(this), _(we(a), "result", 0), n instanceof r ? a.result = n.result : typeof n == "number" && (a.result = n), a;
  }
  return Rt(r, [{
    key: "add",
    value: function(a) {
      return a instanceof r ? this.result += a.result : typeof a == "number" && (this.result += a), this;
    }
  }, {
    key: "sub",
    value: function(a) {
      return a instanceof r ? this.result -= a.result : typeof a == "number" && (this.result -= a), this;
    }
  }, {
    key: "mul",
    value: function(a) {
      return a instanceof r ? this.result *= a.result : typeof a == "number" && (this.result *= a), this;
    }
  }, {
    key: "div",
    value: function(a) {
      return a instanceof r ? this.result /= a.result : typeof a == "number" && (this.result /= a), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), r;
})(cc), Md = function(t, r) {
  var n = t === "css" ? Pd : Rd;
  return function(a) {
    return new n(a, r);
  };
}, _s = function(t, r) {
  return "".concat([r, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function Vt(e) {
  var t = c.useRef();
  t.current = e;
  var r = c.useCallback(function() {
    for (var n, a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(i));
  }, []);
  return r;
}
function Gn(e) {
  var t = c.useRef(!1), r = c.useState(e), n = N(r, 2), a = n[0], i = n[1];
  c.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function o(s, l) {
    l && t.current || i(s);
  }
  return [a, o];
}
function hi(e) {
  return e !== void 0;
}
function sn(e, t) {
  var r = t || {}, n = r.defaultValue, a = r.value, i = r.onChange, o = r.postState, s = Gn(function() {
    return hi(a) ? a : hi(n) ? typeof n == "function" ? n() : n : typeof e == "function" ? e() : e;
  }), l = N(s, 2), u = l[0], f = l[1], d = a !== void 0 ? a : u, v = o ? o(d) : d, g = Vt(i), h = Gn([d]), y = N(h, 2), m = y[0], C = y[1];
  Ai(function() {
    var S = m[0];
    u !== S && g(u, S);
  }, [m]), Ai(function() {
    hi(a) || f(a);
  }, [a]);
  var p = Vt(function(S, $) {
    f(S, $), C([d], $);
  });
  return [v, p];
}
var pi = { exports: {} }, Ve = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ps;
function Td() {
  if (Ps) return Ve;
  Ps = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function y(m) {
    if (typeof m == "object" && m !== null) {
      var C = m.$$typeof;
      switch (C) {
        case e:
          switch (m = m.type, m) {
            case r:
            case a:
            case n:
            case u:
            case f:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case o:
                case l:
                case v:
                case d:
                case i:
                  return m;
                default:
                  return C;
              }
          }
        case t:
          return C;
      }
    }
  }
  return Ve.ContextConsumer = o, Ve.ContextProvider = i, Ve.Element = e, Ve.ForwardRef = l, Ve.Fragment = r, Ve.Lazy = v, Ve.Memo = d, Ve.Portal = t, Ve.Profiler = a, Ve.StrictMode = n, Ve.Suspense = u, Ve.SuspenseList = f, Ve.isAsyncMode = function() {
    return !1;
  }, Ve.isConcurrentMode = function() {
    return !1;
  }, Ve.isContextConsumer = function(m) {
    return y(m) === o;
  }, Ve.isContextProvider = function(m) {
    return y(m) === i;
  }, Ve.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, Ve.isForwardRef = function(m) {
    return y(m) === l;
  }, Ve.isFragment = function(m) {
    return y(m) === r;
  }, Ve.isLazy = function(m) {
    return y(m) === v;
  }, Ve.isMemo = function(m) {
    return y(m) === d;
  }, Ve.isPortal = function(m) {
    return y(m) === t;
  }, Ve.isProfiler = function(m) {
    return y(m) === a;
  }, Ve.isStrictMode = function(m) {
    return y(m) === n;
  }, Ve.isSuspense = function(m) {
    return y(m) === u;
  }, Ve.isSuspenseList = function(m) {
    return y(m) === f;
  }, Ve.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === a || m === n || m === u || m === f || m === g || typeof m == "object" && m !== null && (m.$$typeof === v || m.$$typeof === d || m.$$typeof === i || m.$$typeof === o || m.$$typeof === l || m.$$typeof === h || m.getModuleId !== void 0);
  }, Ve.typeOf = y, Ve;
}
var Rs;
function Od() {
  return Rs || (Rs = 1, pi.exports = Td()), pi.exports;
}
var yi = Od(), Id = Symbol.for("react.element"), kd = Symbol.for("react.transitional.element"), Ad = Symbol.for("react.fragment");
function fc(e) {
  return (
    // Base object type
    e && ce(e) === "object" && // React Element type
    (e.$$typeof === Id || e.$$typeof === kd) && // React Fragment type
    e.type === Ad
  );
}
var Fd = Number(c.version.split(".")[0]), No = function(t, r) {
  typeof t == "function" ? t(r) : ce(t) === "object" && t && "current" in t && (t.current = r);
}, qa = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var a = r.filter(Boolean);
  return a.length <= 1 ? a[0] : function(i) {
    r.forEach(function(o) {
      No(o, i);
    });
  };
}, Zn = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  return Ha(function() {
    return qa.apply(void 0, r);
  }, r, function(a, i) {
    return a.length !== i.length || a.every(function(o, s) {
      return o !== i[s];
    });
  });
}, yn = function(t) {
  var r, n;
  if (!t)
    return !1;
  if (dc(t) && Fd >= 19)
    return !0;
  var a = yi.isMemo(t) ? t.type.type : t.type;
  return !(typeof a == "function" && !((r = a.prototype) !== null && r !== void 0 && r.render) && a.$$typeof !== yi.ForwardRef || typeof t == "function" && !((n = t.prototype) !== null && n !== void 0 && n.render) && t.$$typeof !== yi.ForwardRef);
};
function dc(e) {
  return /* @__PURE__ */ c.isValidElement(e) && !fc(e);
}
var Jn = function(t) {
  if (t && dc(t)) {
    var r = t;
    return r.props.propertyIsEnumerable("ref") ? r.props.ref : r.ref;
  }
  return null;
};
function Ms(e, t, r, n) {
  var a = M({}, t[e]);
  if (n != null && n.deprecatedTokens) {
    var i = n.deprecatedTokens;
    i.forEach(function(s) {
      var l = N(s, 2), u = l[0], f = l[1];
      if (a != null && a[u] || a != null && a[f]) {
        var d;
        (d = a[f]) !== null && d !== void 0 || (a[f] = a == null ? void 0 : a[u]);
      }
    });
  }
  var o = M(M({}, r), a);
  return Object.keys(o).forEach(function(s) {
    o[s] === t[s] && delete o[s];
  }), o;
}
var vc = typeof CSSINJS_STATISTIC < "u", eo = !0;
function ea() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  if (!vc)
    return Object.assign.apply(Object, [{}].concat(t));
  eo = !1;
  var n = {};
  return t.forEach(function(a) {
    if (ce(a) === "object") {
      var i = Object.keys(a);
      i.forEach(function(o) {
        Object.defineProperty(n, o, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return a[o];
          }
        });
      });
    }
  }), eo = !0, n;
}
var Ts = {};
function Nd() {
}
var Ld = function(t) {
  var r, n = t, a = Nd;
  return vc && typeof Proxy < "u" && (r = /* @__PURE__ */ new Set(), n = new Proxy(t, {
    get: function(o, s) {
      if (eo) {
        var l;
        (l = r) === null || l === void 0 || l.add(s);
      }
      return o[s];
    }
  }), a = function(o, s) {
    var l;
    Ts[o] = {
      global: Array.from(r),
      component: M(M({}, (l = Ts[o]) === null || l === void 0 ? void 0 : l.component), s)
    };
  }), {
    token: n,
    keys: r,
    flush: a
  };
};
function Os(e, t, r) {
  if (typeof r == "function") {
    var n;
    return r(ea(t, (n = t[e]) !== null && n !== void 0 ? n : {}));
  }
  return r ?? {};
}
function jd(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return "max(".concat(n.map(function(i) {
        return Y(i);
      }).join(","), ")");
    },
    min: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return "min(".concat(n.map(function(i) {
        return Y(i);
      }).join(","), ")");
    }
  };
}
var Dd = 1e3 * 60 * 10, Vd = /* @__PURE__ */ (function() {
  function e() {
    Pt(this, e), _(this, "map", /* @__PURE__ */ new Map()), _(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), _(this, "nextID", 0), _(this, "lastAccessBeat", /* @__PURE__ */ new Map()), _(this, "accessBeat", 0);
  }
  return Rt(e, [{
    key: "set",
    value: function(r, n) {
      this.clear();
      var a = this.getCompositeKey(r);
      this.map.set(a, n), this.lastAccessBeat.set(a, Date.now());
    }
  }, {
    key: "get",
    value: function(r) {
      var n = this.getCompositeKey(r), a = this.map.get(n);
      return this.lastAccessBeat.set(n, Date.now()), this.accessBeat += 1, a;
    }
  }, {
    key: "getCompositeKey",
    value: function(r) {
      var n = this, a = r.map(function(i) {
        return i && ce(i) === "object" ? "obj_".concat(n.getObjectID(i)) : "".concat(ce(i), "_").concat(i);
      });
      return a.join("|");
    }
  }, {
    key: "getObjectID",
    value: function(r) {
      if (this.objectIDMap.has(r))
        return this.objectIDMap.get(r);
      var n = this.nextID;
      return this.objectIDMap.set(r, n), this.nextID += 1, n;
    }
  }, {
    key: "clear",
    value: function() {
      var r = this;
      if (this.accessBeat > 1e4) {
        var n = Date.now();
        this.lastAccessBeat.forEach(function(a, i) {
          n - a > Dd && (r.map.delete(i), r.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
})(), Is = new Vd();
function zd(e, t) {
  return Xe.useMemo(function() {
    var r = Is.get(t);
    if (r)
      return r;
    var n = e();
    return Is.set(t, n), n;
  }, t);
}
var Hd = function() {
  return {};
};
function Bd(e) {
  var t = e.useCSP, r = t === void 0 ? Hd : t, n = e.useToken, a = e.usePrefix, i = e.getResetStyles, o = e.getCommonStyle, s = e.getCompUnitless;
  function l(v, g, h, y) {
    var m = Array.isArray(v) ? v[0] : v;
    function C(w) {
      return "".concat(String(m)).concat(w.slice(0, 1).toUpperCase()).concat(w.slice(1));
    }
    var p = (y == null ? void 0 : y.unitless) || {}, S = typeof s == "function" ? s(v) : {}, $ = M(M({}, S), {}, _({}, C("zIndexPopup"), !0));
    Object.keys(p).forEach(function(w) {
      $[C(w)] = p[w];
    });
    var E = M(M({}, y), {}, {
      unitless: $,
      prefixToken: C
    }), x = f(v, g, h, E), P = u(m, h, E);
    return function(w) {
      var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : w, O = x(w, R), I = N(O, 2), F = I[1], A = P(R), k = N(A, 2), D = k[0], L = k[1];
      return [D, F, L];
    };
  }
  function u(v, g, h) {
    var y = h.unitless, m = h.injectStyle, C = m === void 0 ? !0 : m, p = h.prefixToken, S = h.ignore, $ = function(P) {
      var w = P.rootCls, R = P.cssVar, O = R === void 0 ? {} : R, I = n(), F = I.realToken;
      return Wf({
        path: [v],
        prefix: O.prefix,
        key: O.key,
        unitless: y,
        ignore: S,
        token: F,
        scope: w
      }, function() {
        var A = Os(v, F, g), k = Ms(v, F, A, {
          deprecatedTokens: h == null ? void 0 : h.deprecatedTokens
        });
        return Object.keys(A).forEach(function(D) {
          k[p(D)] = k[D], delete k[D];
        }), k;
      }), null;
    }, E = function(P) {
      var w = n(), R = w.cssVar;
      return [function(O) {
        return C && R ? /* @__PURE__ */ Xe.createElement(Xe.Fragment, null, /* @__PURE__ */ Xe.createElement($, {
          rootCls: P,
          cssVar: R,
          component: v
        }), O) : O;
      }, R == null ? void 0 : R.key];
    };
    return E;
  }
  function f(v, g, h) {
    var y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, m = Array.isArray(v) ? v : [v, v], C = N(m, 1), p = C[0], S = m.join("-"), $ = e.layer || {
      name: "antd"
    };
    return function(E) {
      var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : E, P = n(), w = P.theme, R = P.realToken, O = P.hashId, I = P.token, F = P.cssVar, A = a(), k = A.rootPrefixCls, D = A.iconPrefixCls, L = r(), j = F ? "css" : "js", H = zd(function() {
        var b = /* @__PURE__ */ new Set();
        return F && Object.keys(y.unitless || {}).forEach(function(T) {
          b.add(wa(T, F.prefix)), b.add(wa(T, _s(p, F.prefix)));
        }), Md(j, b);
      }, [j, p, F == null ? void 0 : F.prefix]), K = jd(j), W = K.max, X = K.min, G = {
        theme: w,
        token: I,
        hashId: O,
        nonce: function() {
          return L.nonce;
        },
        clientOnly: y.clientOnly,
        layer: $,
        // antd is always at top of styles
        order: y.order || -999
      };
      typeof i == "function" && ji(M(M({}, G), {}, {
        clientOnly: !1,
        path: ["Shared", k]
      }), function() {
        return i(I, {
          prefix: {
            rootPrefixCls: k,
            iconPrefixCls: D
          },
          csp: L
        });
      });
      var U = ji(M(M({}, G), {}, {
        path: [S, E, D]
      }), function() {
        if (y.injectStyle === !1)
          return [];
        var b = Ld(I), T = b.token, z = b.flush, V = Os(p, R, h), q = ".".concat(E), B = Ms(p, R, V, {
          deprecatedTokens: y.deprecatedTokens
        });
        F && V && ce(V) === "object" && Object.keys(V).forEach(function(xe) {
          V[xe] = "var(".concat(wa(xe, _s(p, F.prefix)), ")");
        });
        var Z = ea(T, {
          componentCls: q,
          prefixCls: E,
          iconCls: ".".concat(D),
          antCls: ".".concat(k),
          calc: H,
          // @ts-ignore
          max: W,
          // @ts-ignore
          min: X
        }, F ? V : B), se = g(Z, {
          hashId: O,
          prefixCls: E,
          rootPrefixCls: k,
          iconPrefixCls: D
        });
        z(p, B);
        var oe = typeof o == "function" ? o(Z, E, x, y.resetFont) : null;
        return [y.resetStyle === !1 ? null : oe, se];
      });
      return [U, O];
    };
  }
  function d(v, g, h) {
    var y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, m = f(v, g, h, M({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, y)), C = function(S) {
      var $ = S.prefixCls, E = S.rootCls, x = E === void 0 ? $ : E;
      return m($, x), null;
    };
    return C;
  }
  return {
    genStyleHooks: l,
    genSubStyleComponent: d,
    genComponentStyleHook: f
  };
}
const Wd = "5.29.3";
function bi(e) {
  return e >= 0 && e <= 255;
}
function ma(e, t) {
  const {
    r,
    g: n,
    b: a,
    a: i
  } = new ut(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: o,
    g: s,
    b: l
  } = new ut(t).toRgb();
  for (let u = 0.01; u <= 1; u += 0.01) {
    const f = Math.round((r - o * (1 - u)) / u), d = Math.round((n - s * (1 - u)) / u), v = Math.round((a - l * (1 - u)) / u);
    if (bi(f) && bi(d) && bi(v))
      return new ut({
        r: f,
        g: d,
        b: v,
        a: Math.round(u * 100) / 100
      }).toRgbString();
  }
  return new ut({
    r,
    g: n,
    b: a,
    a: 1
  }).toRgbString();
}
var Kd = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function mc(e) {
  const {
    override: t
  } = e, r = Kd(e, ["override"]), n = Object.assign({}, t);
  Object.keys(Kn).forEach((v) => {
    delete n[v];
  });
  const a = Object.assign(Object.assign({}, r), n), i = 480, o = 576, s = 768, l = 992, u = 1200, f = 1600;
  return a.motion === !1 && (a.motionDurationFast = "0s", a.motionDurationMid = "0s", a.motionDurationSlow = "0s"), Object.assign(Object.assign(Object.assign({}, a), {
    // ============== Background ============== //
    colorFillContent: a.colorFillSecondary,
    colorFillContentHover: a.colorFill,
    colorFillAlter: a.colorFillQuaternary,
    colorBgContainerDisabled: a.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: a.colorBgContainer,
    colorSplit: ma(a.colorBorderSecondary, a.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: a.colorTextQuaternary,
    colorTextDisabled: a.colorTextQuaternary,
    colorTextHeading: a.colorText,
    colorTextLabel: a.colorTextSecondary,
    colorTextDescription: a.colorTextTertiary,
    colorTextLightSolid: a.colorWhite,
    colorHighlight: a.colorError,
    colorBgTextHover: a.colorFillSecondary,
    colorBgTextActive: a.colorFill,
    colorIcon: a.colorTextTertiary,
    colorIconHover: a.colorText,
    colorErrorOutline: ma(a.colorErrorBg, a.colorBgContainer),
    colorWarningOutline: ma(a.colorWarningBg, a.colorBgContainer),
    // Font
    fontSizeIcon: a.fontSizeSM,
    // Line
    lineWidthFocus: a.lineWidth * 3,
    // Control
    lineWidth: a.lineWidth,
    controlOutlineWidth: a.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: a.controlHeight / 2,
    controlItemBgHover: a.colorFillTertiary,
    controlItemBgActive: a.colorPrimaryBg,
    controlItemBgActiveHover: a.colorPrimaryBgHover,
    controlItemBgActiveDisabled: a.colorFill,
    controlTmpOutline: a.colorFillQuaternary,
    controlOutline: ma(a.colorPrimaryBg, a.colorBgContainer),
    lineType: a.lineType,
    borderRadius: a.borderRadius,
    borderRadiusXS: a.borderRadiusXS,
    borderRadiusSM: a.borderRadiusSM,
    borderRadiusLG: a.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: a.sizeXXS,
    paddingXS: a.sizeXS,
    paddingSM: a.sizeSM,
    padding: a.size,
    paddingMD: a.sizeMD,
    paddingLG: a.sizeLG,
    paddingXL: a.sizeXL,
    paddingContentHorizontalLG: a.sizeLG,
    paddingContentVerticalLG: a.sizeMS,
    paddingContentHorizontal: a.sizeMS,
    paddingContentVertical: a.sizeSM,
    paddingContentHorizontalSM: a.size,
    paddingContentVerticalSM: a.sizeXS,
    marginXXS: a.sizeXXS,
    marginXS: a.sizeXS,
    marginSM: a.sizeSM,
    margin: a.size,
    marginMD: a.sizeMD,
    marginLG: a.sizeLG,
    marginXL: a.sizeXL,
    marginXXL: a.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: i,
    screenXSMin: i,
    screenXSMax: o - 1,
    screenSM: o,
    screenSMMin: o,
    screenSMMax: s - 1,
    screenMD: s,
    screenMDMin: s,
    screenMDMax: l - 1,
    screenLG: l,
    screenLGMin: l,
    screenLGMax: u - 1,
    screenXL: u,
    screenXLMin: u,
    screenXLMax: f - 1,
    screenXXL: f,
    screenXXLMin: f,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new ut("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new ut("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new ut("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), n);
}
var ks = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const gc = {
  lineHeight: !0,
  lineHeightSM: !0,
  lineHeightLG: !0,
  lineHeightHeading1: !0,
  lineHeightHeading2: !0,
  lineHeightHeading3: !0,
  lineHeightHeading4: !0,
  lineHeightHeading5: !0,
  opacityLoading: !0,
  fontWeightStrong: !0,
  zIndexPopupBase: !0,
  zIndexBase: !0,
  opacityImage: !0
}, qd = {
  motionBase: !0,
  motionUnit: !0
}, Gd = {
  screenXS: !0,
  screenXSMin: !0,
  screenXSMax: !0,
  screenSM: !0,
  screenSMMin: !0,
  screenSMMax: !0,
  screenMD: !0,
  screenMDMin: !0,
  screenMDMax: !0,
  screenLG: !0,
  screenLGMin: !0,
  screenLGMax: !0,
  screenXL: !0,
  screenXLMin: !0,
  screenXLMax: !0,
  screenXXL: !0,
  screenXXLMin: !0
}, hc = (e, t, r) => {
  const n = r.getDerivativeToken(e), {
    override: a
  } = t, i = ks(t, ["override"]);
  let o = Object.assign(Object.assign({}, n), {
    override: a
  });
  return o = mc(o), i && Object.entries(i).forEach(([s, l]) => {
    const {
      theme: u
    } = l, f = ks(l, ["theme"]);
    let d = f;
    u && (d = hc(Object.assign(Object.assign({}, o), f), {
      override: f
    }, u)), o[s] = d;
  }), o;
};
function Ga() {
  const {
    token: e,
    hashed: t,
    theme: r,
    override: n,
    cssVar: a
  } = Xe.useContext(lc), i = `${Wd}-${t || ""}`, o = r || sc, [s, l, u] = hf(o, [Kn, e], {
    salt: i,
    override: n,
    getComputedToken: hc,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: mc,
    cssVar: a && {
      prefix: a.prefix,
      key: a.key,
      unitless: gc,
      ignore: qd,
      preserve: Gd
    }
  });
  return [o, u, t ? l : "", s, a];
}
const Lo = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, jo = (e, t = !1) => ({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  color: e.colorText,
  fontSize: e.fontSize,
  // font-variant: @font-variant-base;
  lineHeight: e.lineHeight,
  listStyle: "none",
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: t ? "inherit" : e.fontFamily
}), Ud = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), Do = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
}), Xd = (e) => ({
  a: {
    color: e.colorLink,
    textDecoration: e.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${e.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: e.colorLinkHover
    },
    "&:active": {
      color: e.colorLinkActive
    },
    "&:active, &:hover": {
      textDecoration: e.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: e.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: e.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), Yd = (e, t, r, n) => {
  const a = `[class^="${t}"], [class*=" ${t}"]`, i = r ? `.${r}` : a, o = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let s = {};
  return n !== !1 && (s = {
    fontFamily: e.fontFamily,
    fontSize: e.fontSize
  }), {
    [i]: Object.assign(Object.assign(Object.assign({}, s), o), {
      [a]: o
    })
  };
}, Vo = (e, t) => ({
  outline: `${Y(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: t ?? 1,
  transition: "outline-offset 0s, outline 0s"
}), to = (e, t) => ({
  "&:focus-visible": Vo(e, t)
}), pc = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, Ud()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: zo
} = Bd({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = c.useContext(_t);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [e, t, r, n, a] = Ga();
    return {
      theme: e,
      realToken: t,
      hashId: r,
      token: n,
      cssVar: a
    };
  },
  useCSP: () => {
    const {
      csp: e
    } = c.useContext(_t);
    return e ?? {};
  },
  getResetStyles: (e, t) => {
    var r;
    const n = Xd(e);
    return [n, {
      "&": n
    }, pc((r = t == null ? void 0 : t.prefix.iconPrefixCls) !== null && r !== void 0 ? r : Fo)];
  },
  getCommonStyle: Yd,
  getCompUnitless: () => gc
}), Qd = (e, t) => {
  const [r, n] = Ga();
  return ji({
    token: n,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => pc(e));
}, Zd = Object.assign({}, Va), {
  useId: As
} = Zd, Jd = () => "", ev = typeof As > "u" ? Jd : As;
function tv(e, t, r) {
  var n;
  const a = e || {}, i = a.inherit === !1 || !t ? Object.assign(Object.assign({}, Qi), {
    hashed: (n = t == null ? void 0 : t.hashed) !== null && n !== void 0 ? n : Qi.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, o = ev();
  return Ha(() => {
    var s, l;
    if (!e)
      return t;
    const u = Object.assign({}, i.components);
    Object.keys(e.components || {}).forEach((v) => {
      u[v] = Object.assign(Object.assign({}, u[v]), e.components[v]);
    });
    const f = `css-var-${o.replace(/:/g, "")}`, d = ((s = a.cssVar) !== null && s !== void 0 ? s : i.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: r == null ? void 0 : r.prefixCls
    }, typeof i.cssVar == "object" ? i.cssVar : {}), typeof a.cssVar == "object" ? a.cssVar : {}), {
      key: typeof a.cssVar == "object" && ((l = a.cssVar) === null || l === void 0 ? void 0 : l.key) || f
    });
    return Object.assign(Object.assign(Object.assign({}, i), a), {
      token: Object.assign(Object.assign({}, i.token), a.token),
      components: u,
      cssVar: d
    });
  }, [a, i], (s, l) => s.some((u, f) => {
    const d = l[f];
    return !zn(u, d, !0);
  }));
}
var Ua = Ru();
const Fs = /* @__PURE__ */ Po(Ua);
function Un(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function rv(e) {
  return e && ce(e) === "object" && Un(e.nativeElement) ? e.nativeElement : Un(e) ? e : null;
}
function Pa(e) {
  var t = rv(e);
  if (t)
    return t;
  if (e instanceof Xe.Component) {
    var r;
    return (r = Fs.findDOMNode) === null || r === void 0 ? void 0 : r.call(Fs, e);
  }
  return null;
}
var nv = ["children"], yc = /* @__PURE__ */ c.createContext({});
function av(e) {
  var t = e.children, r = ze(e, nv);
  return /* @__PURE__ */ c.createElement(yc.Provider, {
    value: r
  }, t);
}
var iv = /* @__PURE__ */ (function(e) {
  Ar(r, e);
  var t = Fr(r);
  function r() {
    return Pt(this, r), t.apply(this, arguments);
  }
  return Rt(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
})(c.Component);
function ov(e) {
  var t = c.useReducer(function(s) {
    return s + 1;
  }, 0), r = N(t, 2), n = r[1], a = c.useRef(e), i = Vt(function() {
    return a.current;
  }), o = Vt(function(s) {
    a.current = typeof s == "function" ? s(a.current) : s, n();
  });
  return [i, o];
}
var Mr = "none", ga = "appear", ha = "enter", pa = "leave", Ns = "none", cr = "prepare", rn = "start", nn = "active", Ho = "end", bc = "prepared";
function Ls(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function sv(e, t) {
  var r = {
    animationend: Ls("Animation", "AnimationEnd"),
    transitionend: Ls("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var lv = sv(qt(), typeof window < "u" ? window : {}), Cc = {};
if (qt()) {
  var cv = document.createElement("div");
  Cc = cv.style;
}
var ya = {};
function Sc(e) {
  if (ya[e])
    return ya[e];
  var t = lv[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, a = 0; a < n; a += 1) {
      var i = r[a];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in Cc)
        return ya[e] = t[i], ya[e];
    }
  return "";
}
var wc = Sc("animationend"), xc = Sc("transitionend"), Ec = !!(wc && xc), js = wc || "animationend", Ds = xc || "transitionend";
function Vs(e, t) {
  if (!e) return null;
  if (ce(e) === "object") {
    var r = t.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return e[r];
  }
  return "".concat(e, "-").concat(t);
}
const uv = (function(e) {
  var t = c.useRef();
  function r(a) {
    a && (a.removeEventListener(Ds, e), a.removeEventListener(js, e));
  }
  function n(a) {
    t.current && t.current !== a && r(t.current), a && a !== t.current && (a.addEventListener(Ds, e), a.addEventListener(js, e), t.current = a);
  }
  return c.useEffect(function() {
    return function() {
      r(t.current);
    };
  }, []), [n, r];
});
var $c = qt() ? c.useLayoutEffect : c.useEffect, _c = function(t) {
  return +setTimeout(t, 16);
}, Pc = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (_c = function(t) {
  return window.requestAnimationFrame(t);
}, Pc = function(t) {
  return window.cancelAnimationFrame(t);
});
var zs = 0, Bo = /* @__PURE__ */ new Map();
function Rc(e) {
  Bo.delete(e);
}
var nr = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  zs += 1;
  var n = zs;
  function a(i) {
    if (i === 0)
      Rc(n), t();
    else {
      var o = _c(function() {
        a(i - 1);
      });
      Bo.set(n, o);
    }
  }
  return a(r), n;
};
nr.cancel = function(e) {
  var t = Bo.get(e);
  return Rc(e), Pc(t);
};
const fv = (function() {
  var e = c.useRef(null);
  function t() {
    nr.cancel(e.current);
  }
  function r(n) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = nr(function() {
      a <= 1 ? n({
        isCanceled: function() {
          return i !== e.current;
        }
      }) : r(n, a - 1);
    });
    e.current = i;
  }
  return c.useEffect(function() {
    return function() {
      t();
    };
  }, []), [r, t];
});
var dv = [cr, rn, nn, Ho], vv = [cr, bc], Mc = !1, mv = !0;
function Tc(e) {
  return e === nn || e === Ho;
}
const gv = (function(e, t, r) {
  var n = Gn(Ns), a = N(n, 2), i = a[0], o = a[1], s = fv(), l = N(s, 2), u = l[0], f = l[1];
  function d() {
    o(cr, !0);
  }
  var v = t ? vv : dv;
  return $c(function() {
    if (i !== Ns && i !== Ho) {
      var g = v.indexOf(i), h = v[g + 1], y = r(i);
      y === Mc ? o(h, !0) : h && u(function(m) {
        function C() {
          m.isCanceled() || o(h, !0);
        }
        y === !0 ? C() : Promise.resolve(y).then(C);
      });
    }
  }, [e, i]), c.useEffect(function() {
    return function() {
      f();
    };
  }, []), [d, i];
});
function hv(e, t, r, n) {
  var a = n.motionEnter, i = a === void 0 ? !0 : a, o = n.motionAppear, s = o === void 0 ? !0 : o, l = n.motionLeave, u = l === void 0 ? !0 : l, f = n.motionDeadline, d = n.motionLeaveImmediately, v = n.onAppearPrepare, g = n.onEnterPrepare, h = n.onLeavePrepare, y = n.onAppearStart, m = n.onEnterStart, C = n.onLeaveStart, p = n.onAppearActive, S = n.onEnterActive, $ = n.onLeaveActive, E = n.onAppearEnd, x = n.onEnterEnd, P = n.onLeaveEnd, w = n.onVisibleChanged, R = Gn(), O = N(R, 2), I = O[0], F = O[1], A = ov(Mr), k = N(A, 2), D = k[0], L = k[1], j = Gn(null), H = N(j, 2), K = H[0], W = H[1], X = D(), G = c.useRef(!1), U = c.useRef(null);
  function b() {
    return r();
  }
  var T = c.useRef(!1);
  function z() {
    L(Mr), W(null, !0);
  }
  var V = Vt(function(J) {
    var ve = D();
    if (ve !== Mr) {
      var ye = b();
      if (!(J && !J.deadline && J.target !== ye)) {
        var he = T.current, st;
        ve === ga && he ? st = E == null ? void 0 : E(ye, J) : ve === ha && he ? st = x == null ? void 0 : x(ye, J) : ve === pa && he && (st = P == null ? void 0 : P(ye, J)), he && st !== !1 && z();
      }
    }
  }), q = uv(V), B = N(q, 1), Z = B[0], se = function(ve) {
    switch (ve) {
      case ga:
        return _(_(_({}, cr, v), rn, y), nn, p);
      case ha:
        return _(_(_({}, cr, g), rn, m), nn, S);
      case pa:
        return _(_(_({}, cr, h), rn, C), nn, $);
      default:
        return {};
    }
  }, oe = c.useMemo(function() {
    return se(X);
  }, [X]), xe = gv(X, !e, function(J) {
    if (J === cr) {
      var ve = oe[cr];
      return ve ? ve(b()) : Mc;
    }
    if ($e in oe) {
      var ye;
      W(((ye = oe[$e]) === null || ye === void 0 ? void 0 : ye.call(oe, b(), null)) || null);
    }
    return $e === nn && X !== Mr && (Z(b()), f > 0 && (clearTimeout(U.current), U.current = setTimeout(function() {
      V({
        deadline: !0
      });
    }, f))), $e === bc && z(), mv;
  }), ie = N(xe, 2), Ee = ie[0], $e = ie[1], He = Tc($e);
  T.current = He;
  var qe = c.useRef(null);
  $c(function() {
    if (!(G.current && qe.current === t)) {
      F(t);
      var J = G.current;
      G.current = !0;
      var ve;
      !J && t && s && (ve = ga), J && t && i && (ve = ha), (J && !t && u || !J && d && !t && u) && (ve = pa);
      var ye = se(ve);
      ve && (e || ye[cr]) ? (L(ve), Ee()) : L(Mr), qe.current = t;
    }
  }, [t]), c.useEffect(function() {
    // Cancel appear
    (X === ga && !s || // Cancel enter
    X === ha && !i || // Cancel leave
    X === pa && !u) && L(Mr);
  }, [s, i, u]), c.useEffect(function() {
    return function() {
      G.current = !1, clearTimeout(U.current);
    };
  }, []);
  var Ne = c.useRef(!1);
  c.useEffect(function() {
    I && (Ne.current = !0), I !== void 0 && X === Mr && ((Ne.current || I) && (w == null || w(I)), Ne.current = !0);
  }, [I, X]);
  var ge = K;
  return oe[cr] && $e === rn && (ge = M({
    transition: "none"
  }, ge)), [X, $e, ge, I ?? t];
}
function pv(e) {
  var t = e;
  ce(e) === "object" && (t = e.transitionSupport);
  function r(a, i) {
    return !!(a.motionName && t && i !== !1);
  }
  var n = /* @__PURE__ */ c.forwardRef(function(a, i) {
    var o = a.visible, s = o === void 0 ? !0 : o, l = a.removeOnLeave, u = l === void 0 ? !0 : l, f = a.forceRender, d = a.children, v = a.motionName, g = a.leavedClassName, h = a.eventProps, y = c.useContext(yc), m = y.motion, C = r(a, m), p = c.useRef(), S = c.useRef();
    function $() {
      try {
        return p.current instanceof HTMLElement ? p.current : Pa(S.current);
      } catch {
        return null;
      }
    }
    var E = hv(C, s, $, a), x = N(E, 4), P = x[0], w = x[1], R = x[2], O = x[3], I = c.useRef(O);
    O && (I.current = !0);
    var F = c.useCallback(function(H) {
      p.current = H, No(i, H);
    }, [i]), A, k = M(M({}, h), {}, {
      visible: s
    });
    if (!d)
      A = null;
    else if (P === Mr)
      O ? A = d(M({}, k), F) : !u && I.current && g ? A = d(M(M({}, k), {}, {
        className: g
      }), F) : f || !u && !g ? A = d(M(M({}, k), {}, {
        style: {
          display: "none"
        }
      }), F) : A = null;
    else {
      var D;
      w === cr ? D = "prepare" : Tc(w) ? D = "active" : w === rn && (D = "start");
      var L = Vs(v, "".concat(P, "-").concat(D));
      A = d(M(M({}, k), {}, {
        className: ne(Vs(v, P), _(_({}, L, L && D), v, typeof v == "string")),
        style: R
      }), F);
    }
    if (/* @__PURE__ */ c.isValidElement(A) && yn(A)) {
      var j = Jn(A);
      j || (A = /* @__PURE__ */ c.cloneElement(A, {
        ref: F
      }));
    }
    return /* @__PURE__ */ c.createElement(iv, {
      ref: S
    }, A);
  });
  return n.displayName = "CSSMotion", n;
}
const ta = pv(Ec);
var ro = "add", no = "keep", ao = "remove", Ci = "removed";
function yv(e) {
  var t;
  return e && ce(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, M(M({}, t), {}, {
    key: String(t.key)
  });
}
function io() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(yv);
}
function bv() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, a = t.length, i = io(e), o = io(t);
  i.forEach(function(u) {
    for (var f = !1, d = n; d < a; d += 1) {
      var v = o[d];
      if (v.key === u.key) {
        n < d && (r = r.concat(o.slice(n, d).map(function(g) {
          return M(M({}, g), {}, {
            status: ro
          });
        })), n = d), r.push(M(M({}, v), {}, {
          status: no
        })), n += 1, f = !0;
        break;
      }
    }
    f || r.push(M(M({}, u), {}, {
      status: ao
    }));
  }), n < a && (r = r.concat(o.slice(n).map(function(u) {
    return M(M({}, u), {}, {
      status: ro
    });
  })));
  var s = {};
  r.forEach(function(u) {
    var f = u.key;
    s[f] = (s[f] || 0) + 1;
  });
  var l = Object.keys(s).filter(function(u) {
    return s[u] > 1;
  });
  return l.forEach(function(u) {
    r = r.filter(function(f) {
      var d = f.key, v = f.status;
      return d !== u || v !== ao;
    }), r.forEach(function(f) {
      f.key === u && (f.status = no);
    });
  }), r;
}
var Cv = ["component", "children", "onVisibleChanged", "onAllRemoved"], Sv = ["status"], wv = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function xv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ta, r = /* @__PURE__ */ (function(n) {
    Ar(i, n);
    var a = Fr(i);
    function i() {
      var o;
      Pt(this, i);
      for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++)
        l[u] = arguments[u];
      return o = a.call.apply(a, [this].concat(l)), _(we(o), "state", {
        keyEntities: []
      }), _(we(o), "removeKey", function(f) {
        o.setState(function(d) {
          var v = d.keyEntities.map(function(g) {
            return g.key !== f ? g : M(M({}, g), {}, {
              status: Ci
            });
          });
          return {
            keyEntities: v
          };
        }, function() {
          var d = o.state.keyEntities, v = d.filter(function(g) {
            var h = g.status;
            return h !== Ci;
          }).length;
          v === 0 && o.props.onAllRemoved && o.props.onAllRemoved();
        });
      }), o;
    }
    return Rt(i, [{
      key: "render",
      value: function() {
        var s = this, l = this.state.keyEntities, u = this.props, f = u.component, d = u.children, v = u.onVisibleChanged;
        u.onAllRemoved;
        var g = ze(u, Cv), h = f || c.Fragment, y = {};
        return wv.forEach(function(m) {
          y[m] = g[m], delete g[m];
        }), delete g.keys, /* @__PURE__ */ c.createElement(h, g, l.map(function(m, C) {
          var p = m.status, S = ze(m, Sv), $ = p === ro || p === no;
          return /* @__PURE__ */ c.createElement(t, fe({}, y, {
            key: S.key,
            visible: $,
            eventProps: S,
            onVisibleChanged: function(x) {
              v == null || v(x, {
                key: S.key
              }), x || s.removeKey(S.key);
            }
          }), function(E, x) {
            return d(M(M({}, E), {}, {
              index: C
            }), x);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, l) {
        var u = s.keys, f = l.keyEntities, d = io(u), v = bv(f, d);
        return {
          keyEntities: v.filter(function(g) {
            var h = f.find(function(y) {
              var m = y.key;
              return g.key === m;
            });
            return !(h && h.status === Ci && g.status === ao);
          })
        };
      }
    }]), i;
  })(c.Component);
  return _(r, "defaultProps", {
    component: "div"
  }), r;
}
xv(Ec);
const Hs = /* @__PURE__ */ c.createContext(!0);
function Ev(e) {
  const t = c.useContext(Hs), {
    children: r
  } = e, [, n] = Ga(), {
    motion: a
  } = n, i = c.useRef(!1);
  return i.current || (i.current = t !== a), i.current ? /* @__PURE__ */ c.createElement(Hs.Provider, {
    value: a
  }, /* @__PURE__ */ c.createElement(av, {
    motion: a
  }, r)) : r;
}
const $v = () => null;
var _v = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Pv = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let Oc;
function Rv() {
  return Oc || Zi;
}
function Mv(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const Tv = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: r,
    theme: n,
    holderRender: a
  } = e;
  t !== void 0 && (Oc = t), n && Mv(n) && wd(Rv(), n);
}, Ov = (e) => {
  const {
    children: t,
    csp: r,
    autoInsertSpaceInButton: n,
    alert: a,
    anchor: i,
    form: o,
    locale: s,
    componentSize: l,
    direction: u,
    space: f,
    splitter: d,
    virtual: v,
    dropdownMatchSelectWidth: g,
    popupMatchSelectWidth: h,
    popupOverflow: y,
    legacyLocale: m,
    parentContext: C,
    iconPrefixCls: p,
    theme: S,
    componentDisabled: $,
    segmented: E,
    statistic: x,
    spin: P,
    calendar: w,
    carousel: R,
    cascader: O,
    collapse: I,
    typography: F,
    checkbox: A,
    descriptions: k,
    divider: D,
    drawer: L,
    skeleton: j,
    steps: H,
    image: K,
    layout: W,
    list: X,
    mentions: G,
    modal: U,
    progress: b,
    result: T,
    slider: z,
    breadcrumb: V,
    menu: q,
    pagination: B,
    input: Z,
    textArea: se,
    empty: oe,
    badge: xe,
    radio: ie,
    rate: Ee,
    switch: $e,
    transfer: He,
    avatar: qe,
    message: Ne,
    tag: ge,
    table: J,
    card: ve,
    tabs: ye,
    timeline: he,
    timePicker: st,
    upload: _e,
    notification: kt,
    tree: Be,
    colorPicker: Le,
    datePicker: ft,
    rangePicker: We,
    flex: nt,
    wave: bt,
    dropdown: be,
    warning: Te,
    tour: Ie,
    tooltip: at,
    popover: dt,
    popconfirm: Gt,
    floatButton: Ut,
    floatButtonGroup: Lt,
    variant: Xt,
    inputNumber: zt,
    treeSelect: it
  } = e, ke = c.useCallback((pe, Qe) => {
    const {
      prefixCls: tt
    } = e;
    if (Qe)
      return Qe;
    const Ye = tt || C.getPrefixCls("");
    return pe ? `${Ye}-${pe}` : Ye;
  }, [C.getPrefixCls, e.prefixCls]), Re = p || C.iconPrefixCls || Fo, vt = r || C.csp;
  Qd(Re, vt);
  const et = tv(S, C.theme, {
    prefixCls: ke("")
  }), me = {
    csp: vt,
    autoInsertSpaceInButton: n,
    alert: a,
    anchor: i,
    locale: s || m,
    direction: u,
    space: f,
    splitter: d,
    virtual: v,
    popupMatchSelectWidth: h ?? g,
    popupOverflow: y,
    getPrefixCls: ke,
    iconPrefixCls: Re,
    theme: et,
    segmented: E,
    statistic: x,
    spin: P,
    calendar: w,
    carousel: R,
    cascader: O,
    collapse: I,
    typography: F,
    checkbox: A,
    descriptions: k,
    divider: D,
    drawer: L,
    skeleton: j,
    steps: H,
    image: K,
    input: Z,
    textArea: se,
    layout: W,
    list: X,
    mentions: G,
    modal: U,
    progress: b,
    result: T,
    slider: z,
    breadcrumb: V,
    menu: q,
    pagination: B,
    empty: oe,
    badge: xe,
    radio: ie,
    rate: Ee,
    switch: $e,
    transfer: He,
    avatar: qe,
    message: Ne,
    tag: ge,
    table: J,
    card: ve,
    tabs: ye,
    timeline: he,
    timePicker: st,
    upload: _e,
    notification: kt,
    tree: Be,
    colorPicker: Le,
    datePicker: ft,
    rangePicker: We,
    flex: nt,
    wave: bt,
    dropdown: be,
    warning: Te,
    tour: Ie,
    tooltip: at,
    popover: dt,
    popconfirm: Gt,
    floatButton: Ut,
    floatButtonGroup: Lt,
    variant: Xt,
    inputNumber: zt,
    treeSelect: it
  }, Ce = Object.assign({}, C);
  Object.keys(me).forEach((pe) => {
    me[pe] !== void 0 && (Ce[pe] = me[pe]);
  }), Pv.forEach((pe) => {
    const Qe = e[pe];
    Qe && (Ce[pe] = Qe);
  }), typeof n < "u" && (Ce.button = Object.assign({
    autoInsertSpace: n
  }, Ce.button));
  const Oe = Ha(() => Ce, Ce, (pe, Qe) => {
    const tt = Object.keys(pe), Ye = Object.keys(Qe);
    return tt.length !== Ye.length || tt.some((At) => pe[At] !== Qe[At]);
  }), {
    layer: ot
  } = c.useContext(Qn), te = c.useMemo(() => ({
    prefixCls: Re,
    csp: vt,
    layer: ot ? "antd" : void 0
  }), [Re, vt, ot]);
  let re = /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement($v, {
    dropdownMatchSelectWidth: g
  }), t);
  const Ae = c.useMemo(() => {
    var pe, Qe, tt, Ye;
    return tn(((pe = Ka.Form) === null || pe === void 0 ? void 0 : pe.defaultValidateMessages) || {}, ((tt = (Qe = Oe.locale) === null || Qe === void 0 ? void 0 : Qe.Form) === null || tt === void 0 ? void 0 : tt.defaultValidateMessages) || {}, ((Ye = Oe.form) === null || Ye === void 0 ? void 0 : Ye.validateMessages) || {}, (o == null ? void 0 : o.validateMessages) || {});
  }, [Oe, o == null ? void 0 : o.validateMessages]);
  Object.keys(Ae).length > 0 && (re = /* @__PURE__ */ c.createElement(Xf.Provider, {
    value: Ae
  }, re)), s && (re = /* @__PURE__ */ c.createElement(td, {
    locale: s,
    _ANT_MARK__: ed
  }, re)), re = /* @__PURE__ */ c.createElement(Ao.Provider, {
    value: te
  }, re), l && (re = /* @__PURE__ */ c.createElement(Ed, {
    size: l
  }, re)), re = /* @__PURE__ */ c.createElement(Ev, null, re);
  const Ge = c.useMemo(() => {
    const pe = et || {}, {
      algorithm: Qe,
      token: tt,
      components: Ye,
      cssVar: At
    } = pe, Yt = _v(pe, ["algorithm", "token", "components", "cssVar"]), Mt = Qe && (!Array.isArray(Qe) || Qe.length > 0) ? Ii(Qe) : sc, wt = {};
    Object.entries(Ye || {}).forEach(([xt, Dt]) => {
      const je = Object.assign({}, Dt);
      "algorithm" in je && (je.algorithm === !0 ? je.theme = Mt : (Array.isArray(je.algorithm) || typeof je.algorithm == "function") && (je.theme = Ii(je.algorithm)), delete je.algorithm), wt[xt] = je;
    });
    const jt = Object.assign(Object.assign({}, Kn), tt);
    return Object.assign(Object.assign({}, Yt), {
      theme: Mt,
      token: jt,
      components: wt,
      override: Object.assign({
        override: jt
      }, wt),
      cssVar: At
    });
  }, [et]);
  return S && (re = /* @__PURE__ */ c.createElement(lc.Provider, {
    value: Ge
  }, re)), Oe.warning && (re = /* @__PURE__ */ c.createElement(Nu.Provider, {
    value: Oe.warning
  }, re)), $ !== void 0 && (re = /* @__PURE__ */ c.createElement(xd, {
    disabled: $
  }, re)), /* @__PURE__ */ c.createElement(_t.Provider, {
    value: Oe
  }, re);
}, ra = (e) => {
  const t = c.useContext(_t), r = c.useContext(nc);
  return /* @__PURE__ */ c.createElement(Ov, Object.assign({
    parentContext: t,
    legacyLocale: r
  }, e));
};
ra.ConfigContext = _t;
ra.SizeContext = vn;
ra.config = Tv;
ra.useConfig = $d;
Object.defineProperty(ra, "SizeContext", {
  get: () => vn
});
const Ic = (e) => {
  const t = Xe.useContext(vn);
  return Xe.useMemo(() => e ? typeof e == "string" ? e ?? t : typeof e == "function" ? e(t) : t : t, [e, t]);
}, Xa = (e) => {
  const {
    prefixCls: t,
    className: r,
    style: n,
    size: a,
    shape: i
  } = e, o = ne({
    [`${t}-lg`]: a === "large",
    [`${t}-sm`]: a === "small"
  }), s = ne({
    [`${t}-circle`]: i === "circle",
    [`${t}-square`]: i === "square",
    [`${t}-round`]: i === "round"
  }), l = c.useMemo(() => typeof a == "number" ? {
    width: a,
    height: a,
    lineHeight: `${a}px`
  } : {}, [a]);
  return /* @__PURE__ */ c.createElement("span", {
    className: ne(t, o, s, r),
    style: Object.assign(Object.assign({}, l), n)
  });
}, Iv = new Er("ant-skeleton-loading", {
  "0%": {
    backgroundPosition: "100% 50%"
  },
  "100%": {
    backgroundPosition: "0 50%"
  }
}), Ya = (e) => ({
  height: e,
  lineHeight: Y(e)
}), ln = (e) => Object.assign({
  width: e
}, Ya(e)), kv = (e) => ({
  background: e.skeletonLoadingBackground,
  backgroundSize: "400% 100%",
  animationName: Iv,
  animationDuration: e.skeletonLoadingMotionDuration,
  animationTimingFunction: "ease",
  animationIterationCount: "infinite"
}), Si = (e, t) => Object.assign({
  width: t(e).mul(5).equal(),
  minWidth: t(e).mul(5).equal()
}, Ya(e)), Av = (e) => {
  const {
    skeletonAvatarCls: t,
    gradientFromColor: r,
    controlHeight: n,
    controlHeightLG: a,
    controlHeightSM: i
  } = e;
  return {
    [t]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: r
    }, ln(n)),
    [`${t}${t}-circle`]: {
      borderRadius: "50%"
    },
    [`${t}${t}-lg`]: Object.assign({}, ln(a)),
    [`${t}${t}-sm`]: Object.assign({}, ln(i))
  };
}, Fv = (e) => {
  const {
    controlHeight: t,
    borderRadiusSM: r,
    skeletonInputCls: n,
    controlHeightLG: a,
    controlHeightSM: i,
    gradientFromColor: o,
    calc: s
  } = e;
  return {
    [n]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: o,
      borderRadius: r
    }, Si(t, s)),
    [`${n}-lg`]: Object.assign({}, Si(a, s)),
    [`${n}-sm`]: Object.assign({}, Si(i, s))
  };
}, Bs = (e) => Object.assign({
  width: e
}, Ya(e)), Nv = (e) => {
  const {
    skeletonImageCls: t,
    imageSizeBase: r,
    gradientFromColor: n,
    borderRadiusSM: a,
    calc: i
  } = e;
  return {
    [t]: Object.assign(Object.assign({
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      verticalAlign: "middle",
      background: n,
      borderRadius: a
    }, Bs(i(r).mul(2).equal())), {
      [`${t}-path`]: {
        fill: "#bfbfbf"
      },
      [`${t}-svg`]: Object.assign(Object.assign({}, Bs(r)), {
        maxWidth: i(r).mul(4).equal(),
        maxHeight: i(r).mul(4).equal()
      }),
      [`${t}-svg${t}-svg-circle`]: {
        borderRadius: "50%"
      }
    }),
    [`${t}${t}-circle`]: {
      borderRadius: "50%"
    }
  };
}, wi = (e, t, r) => {
  const {
    skeletonButtonCls: n
  } = e;
  return {
    [`${r}${n}-circle`]: {
      width: t,
      minWidth: t,
      borderRadius: "50%"
    },
    [`${r}${n}-round`]: {
      borderRadius: t
    }
  };
}, xi = (e, t) => Object.assign({
  width: t(e).mul(2).equal(),
  minWidth: t(e).mul(2).equal()
}, Ya(e)), Lv = (e) => {
  const {
    borderRadiusSM: t,
    skeletonButtonCls: r,
    controlHeight: n,
    controlHeightLG: a,
    controlHeightSM: i,
    gradientFromColor: o,
    calc: s
  } = e;
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
    [r]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: o,
      borderRadius: t,
      width: s(n).mul(2).equal(),
      minWidth: s(n).mul(2).equal()
    }, xi(n, s))
  }, wi(e, n, r)), {
    [`${r}-lg`]: Object.assign({}, xi(a, s))
  }), wi(e, a, `${r}-lg`)), {
    [`${r}-sm`]: Object.assign({}, xi(i, s))
  }), wi(e, i, `${r}-sm`));
}, jv = (e) => {
  const {
    componentCls: t,
    skeletonAvatarCls: r,
    skeletonTitleCls: n,
    skeletonParagraphCls: a,
    skeletonButtonCls: i,
    skeletonInputCls: o,
    skeletonImageCls: s,
    controlHeight: l,
    controlHeightLG: u,
    controlHeightSM: f,
    gradientFromColor: d,
    padding: v,
    marginSM: g,
    borderRadius: h,
    titleHeight: y,
    blockRadius: m,
    paragraphLiHeight: C,
    controlHeightXS: p,
    paragraphMarginTop: S
  } = e;
  return {
    [t]: {
      display: "table",
      width: "100%",
      [`${t}-header`]: {
        display: "table-cell",
        paddingInlineEnd: v,
        verticalAlign: "top",
        // Avatar
        [r]: Object.assign({
          display: "inline-block",
          verticalAlign: "top",
          background: d
        }, ln(l)),
        [`${r}-circle`]: {
          borderRadius: "50%"
        },
        [`${r}-lg`]: Object.assign({}, ln(u)),
        [`${r}-sm`]: Object.assign({}, ln(f))
      },
      [`${t}-content`]: {
        display: "table-cell",
        width: "100%",
        verticalAlign: "top",
        // Title
        [n]: {
          width: "100%",
          height: y,
          background: d,
          borderRadius: m,
          [`+ ${a}`]: {
            marginBlockStart: f
          }
        },
        // paragraph
        [a]: {
          padding: 0,
          "> li": {
            width: "100%",
            height: C,
            listStyle: "none",
            background: d,
            borderRadius: m,
            "+ li": {
              marginBlockStart: p
            }
          }
        },
        [`${a}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
          width: "61%"
        }
      },
      [`&-round ${t}-content`]: {
        [`${n}, ${a} > li`]: {
          borderRadius: h
        }
      }
    },
    [`${t}-with-avatar ${t}-content`]: {
      // Title
      [n]: {
        marginBlockStart: g,
        [`+ ${a}`]: {
          marginBlockStart: S
        }
      }
    },
    // Skeleton element
    [`${t}${t}-element`]: Object.assign(Object.assign(Object.assign(Object.assign({
      display: "inline-block",
      width: "auto"
    }, Lv(e)), Av(e)), Fv(e)), Nv(e)),
    // Skeleton Block Button, Input
    [`${t}${t}-block`]: {
      width: "100%",
      [i]: {
        width: "100%"
      },
      [o]: {
        width: "100%"
      }
    },
    // With active animation
    [`${t}${t}-active`]: {
      [`
        ${n},
        ${a} > li,
        ${r},
        ${i},
        ${o},
        ${s}
      `]: Object.assign({}, kv(e))
    }
  };
}, Dv = (e) => {
  const {
    colorFillContent: t,
    colorFill: r
  } = e, n = t, a = r;
  return {
    color: n,
    colorGradientEnd: a,
    gradientFromColor: n,
    gradientToColor: a,
    titleHeight: e.controlHeight / 2,
    blockRadius: e.borderRadiusSM,
    paragraphMarginTop: e.marginLG + e.marginXXS,
    paragraphLiHeight: e.controlHeight / 2
  };
}, bn = zo("Skeleton", (e) => {
  const {
    componentCls: t,
    calc: r
  } = e, n = ea(e, {
    skeletonAvatarCls: `${t}-avatar`,
    skeletonTitleCls: `${t}-title`,
    skeletonParagraphCls: `${t}-paragraph`,
    skeletonButtonCls: `${t}-button`,
    skeletonInputCls: `${t}-input`,
    skeletonImageCls: `${t}-image`,
    imageSizeBase: r(e.controlHeight).mul(1.5).equal(),
    borderRadius: 100,
    // Large number to make capsule shape
    skeletonLoadingBackground: `linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,
    skeletonLoadingMotionDuration: "1.4s"
  });
  return jv(n);
}, Dv, {
  deprecatedTokens: [["color", "gradientFromColor"], ["colorGradientEnd", "gradientToColor"]]
}), Vv = (e) => {
  const {
    prefixCls: t,
    className: r,
    rootClassName: n,
    active: a,
    shape: i = "circle",
    size: o = "default"
  } = e, {
    getPrefixCls: s
  } = c.useContext(_t), l = s("skeleton", t), [u, f, d] = bn(l), v = Br(e, ["prefixCls", "className"]), g = ne(l, `${l}-element`, {
    [`${l}-active`]: a
  }, r, n, f, d);
  return u(/* @__PURE__ */ c.createElement("div", {
    className: g
  }, /* @__PURE__ */ c.createElement(Xa, Object.assign({
    prefixCls: `${l}-avatar`,
    shape: i,
    size: o
  }, v))));
}, zv = (e) => {
  const {
    prefixCls: t,
    className: r,
    rootClassName: n,
    active: a,
    block: i = !1,
    size: o = "default"
  } = e, {
    getPrefixCls: s
  } = c.useContext(_t), l = s("skeleton", t), [u, f, d] = bn(l), v = Br(e, ["prefixCls"]), g = ne(l, `${l}-element`, {
    [`${l}-active`]: a,
    [`${l}-block`]: i
  }, r, n, f, d);
  return u(/* @__PURE__ */ c.createElement("div", {
    className: g
  }, /* @__PURE__ */ c.createElement(Xa, Object.assign({
    prefixCls: `${l}-button`,
    size: o
  }, v))));
}, Hv = "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z", Bv = (e) => {
  const {
    prefixCls: t,
    className: r,
    rootClassName: n,
    style: a,
    active: i
  } = e, {
    getPrefixCls: o
  } = c.useContext(_t), s = o("skeleton", t), [l, u, f] = bn(s), d = ne(s, `${s}-element`, {
    [`${s}-active`]: i
  }, r, n, u, f);
  return l(/* @__PURE__ */ c.createElement("div", {
    className: d
  }, /* @__PURE__ */ c.createElement("div", {
    className: ne(`${s}-image`, r),
    style: a
  }, /* @__PURE__ */ c.createElement("svg", {
    viewBox: "0 0 1098 1024",
    xmlns: "http://www.w3.org/2000/svg",
    className: `${s}-image-svg`
  }, /* @__PURE__ */ c.createElement("title", null, "Image placeholder"), /* @__PURE__ */ c.createElement("path", {
    d: Hv,
    className: `${s}-image-path`
  })))));
}, Wv = (e) => {
  const {
    prefixCls: t,
    className: r,
    rootClassName: n,
    active: a,
    block: i,
    size: o = "default"
  } = e, {
    getPrefixCls: s
  } = c.useContext(_t), l = s("skeleton", t), [u, f, d] = bn(l), v = Br(e, ["prefixCls"]), g = ne(l, `${l}-element`, {
    [`${l}-active`]: a,
    [`${l}-block`]: i
  }, r, n, f, d);
  return u(/* @__PURE__ */ c.createElement("div", {
    className: g
  }, /* @__PURE__ */ c.createElement(Xa, Object.assign({
    prefixCls: `${l}-input`,
    size: o
  }, v))));
}, Kv = (e) => {
  const {
    prefixCls: t,
    className: r,
    rootClassName: n,
    style: a,
    active: i,
    children: o
  } = e, {
    getPrefixCls: s
  } = c.useContext(_t), l = s("skeleton", t), [u, f, d] = bn(l), v = ne(l, `${l}-element`, {
    [`${l}-active`]: i
  }, f, r, n, d);
  return u(/* @__PURE__ */ c.createElement("div", {
    className: v
  }, /* @__PURE__ */ c.createElement("div", {
    className: ne(`${l}-image`, r),
    style: a
  }, o)));
}, qv = (e, t) => {
  const {
    width: r,
    rows: n = 2
  } = t;
  if (Array.isArray(r))
    return r[e];
  if (n - 1 === e)
    return r;
}, Gv = (e) => {
  const {
    prefixCls: t,
    className: r,
    style: n,
    rows: a = 0
  } = e, i = Array.from({
    length: a
  }).map((o, s) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ c.createElement("li", {
      key: s,
      style: {
        width: qv(s, e)
      }
    })
  ));
  return /* @__PURE__ */ c.createElement("ul", {
    className: ne(t, r),
    style: n
  }, i);
}, Uv = ({
  prefixCls: e,
  className: t,
  width: r,
  style: n
}) => (
  // biome-ignore lint/a11y/useHeadingContent: HOC here
  /* @__PURE__ */ c.createElement("h3", {
    className: ne(e, t),
    style: Object.assign({
      width: r
    }, n)
  })
);
function Ei(e) {
  return e && typeof e == "object" ? e : {};
}
function Xv(e, t) {
  return e && !t ? {
    size: "large",
    shape: "square"
  } : {
    size: "large",
    shape: "circle"
  };
}
function Yv(e, t) {
  return !e && t ? {
    width: "38%"
  } : e && t ? {
    width: "50%"
  } : {};
}
function Qv(e, t) {
  const r = {};
  return (!e || !t) && (r.width = "61%"), !e && t ? r.rows = 3 : r.rows = 2, r;
}
const Cn = (e) => {
  const {
    prefixCls: t,
    loading: r,
    className: n,
    rootClassName: a,
    style: i,
    children: o,
    avatar: s = !1,
    title: l = !0,
    paragraph: u = !0,
    active: f,
    round: d
  } = e, {
    getPrefixCls: v,
    direction: g,
    className: h,
    style: y
  } = bd("skeleton"), m = v("skeleton", t), [C, p, S] = bn(m);
  if (r || !("loading" in e)) {
    const $ = !!s, E = !!l, x = !!u;
    let P;
    if ($) {
      const O = Object.assign(Object.assign({
        prefixCls: `${m}-avatar`
      }, Xv(E, x)), Ei(s));
      P = /* @__PURE__ */ c.createElement("div", {
        className: `${m}-header`
      }, /* @__PURE__ */ c.createElement(Xa, Object.assign({}, O)));
    }
    let w;
    if (E || x) {
      let O;
      if (E) {
        const F = Object.assign(Object.assign({
          prefixCls: `${m}-title`
        }, Yv($, x)), Ei(l));
        O = /* @__PURE__ */ c.createElement(Uv, Object.assign({}, F));
      }
      let I;
      if (x) {
        const F = Object.assign(Object.assign({
          prefixCls: `${m}-paragraph`
        }, Qv($, E)), Ei(u));
        I = /* @__PURE__ */ c.createElement(Gv, Object.assign({}, F));
      }
      w = /* @__PURE__ */ c.createElement("div", {
        className: `${m}-content`
      }, O, I);
    }
    const R = ne(m, {
      [`${m}-with-avatar`]: $,
      [`${m}-active`]: f,
      [`${m}-rtl`]: g === "rtl",
      [`${m}-round`]: d
    }, h, n, a, p, S);
    return C(/* @__PURE__ */ c.createElement("div", {
      className: R,
      style: Object.assign(Object.assign({}, y), i)
    }, P, w));
  }
  return o ?? null;
};
Cn.Button = zv;
Cn.Avatar = Vv;
Cn.Input = Wv;
Cn.Image = Bv;
Cn.Node = Kv;
var Zv = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" };
function kc(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Jv(e) {
  return kc(e) instanceof ShadowRoot;
}
function ka(e) {
  return Jv(e) ? kc(e) : null;
}
function em(e) {
  return e.replace(/-(.)/g, function(t, r) {
    return r.toUpperCase();
  });
}
function tm(e, t) {
  Nt(e, "[@ant-design/icons] ".concat(t));
}
function Ws(e) {
  return ce(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (ce(e.icon) === "object" || typeof e.icon == "function");
}
function Ks() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, r) {
    var n = e[r];
    switch (r) {
      case "class":
        t.className = n, delete t.class;
        break;
      default:
        delete t[r], t[em(r)] = n;
    }
    return t;
  }, {});
}
function oo(e, t, r) {
  return r ? /* @__PURE__ */ Xe.createElement(e.tag, M(M({
    key: t
  }, Ks(e.attrs)), r), (e.children || []).map(function(n, a) {
    return oo(n, "".concat(t, "-").concat(e.tag, "-").concat(a));
  })) : /* @__PURE__ */ Xe.createElement(e.tag, M({
    key: t
  }, Ks(e.attrs)), (e.children || []).map(function(n, a) {
    return oo(n, "".concat(t, "-").concat(e.tag, "-").concat(a));
  }));
}
function Ac(e) {
  return qn(e)[0];
}
function Fc(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var rm = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, nm = function(t) {
  var r = c.useContext(Ao), n = r.csp, a = r.prefixCls, i = r.layer, o = rm;
  a && (o = o.replace(/anticon/g, a)), i && (o = "@layer ".concat(i, ` {
`).concat(o, `
}`)), c.useEffect(function() {
    var s = t.current, l = ka(s);
    wr(o, "@ant-design-icons", {
      prepend: !i,
      csp: n,
      attachTo: l
    });
  }, []);
}, am = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Ln = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function im(e) {
  var t = e.primaryColor, r = e.secondaryColor;
  Ln.primaryColor = t, Ln.secondaryColor = r || Ac(t), Ln.calculated = !!r;
}
function om() {
  return M({}, Ln);
}
var Sn = function(t) {
  var r = t.icon, n = t.className, a = t.onClick, i = t.style, o = t.primaryColor, s = t.secondaryColor, l = ze(t, am), u = c.useRef(), f = Ln;
  if (o && (f = {
    primaryColor: o,
    secondaryColor: s || Ac(o)
  }), nm(u), tm(Ws(r), "icon should be icon definiton, but got ".concat(r)), !Ws(r))
    return null;
  var d = r;
  return d && typeof d.icon == "function" && (d = M(M({}, d), {}, {
    icon: d.icon(f.primaryColor, f.secondaryColor)
  })), oo(d.icon, "svg-".concat(d.name), M(M({
    className: n,
    onClick: a,
    style: i,
    "data-icon": d.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, l), {}, {
    ref: u
  }));
};
Sn.displayName = "IconReact";
Sn.getTwoToneColors = om;
Sn.setTwoToneColors = im;
function Nc(e) {
  var t = Fc(e), r = N(t, 2), n = r[0], a = r[1];
  return Sn.setTwoToneColors({
    primaryColor: n,
    secondaryColor: a
  });
}
function sm() {
  var e = Sn.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var lm = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Nc(Ia.primary);
var wn = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var r = e.className, n = e.icon, a = e.spin, i = e.rotate, o = e.tabIndex, s = e.onClick, l = e.twoToneColor, u = ze(e, lm), f = c.useContext(Ao), d = f.prefixCls, v = d === void 0 ? "anticon" : d, g = f.rootClassName, h = ne(g, v, _(_({}, "".concat(v, "-").concat(n.name), !!n.name), "".concat(v, "-spin"), !!a || n.name === "loading"), r), y = o;
  y === void 0 && s && (y = -1);
  var m = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, C = Fc(l), p = N(C, 2), S = p[0], $ = p[1];
  return /* @__PURE__ */ c.createElement("span", fe({
    role: "img",
    "aria-label": n.name
  }, u, {
    ref: t,
    tabIndex: y,
    onClick: s,
    className: h
  }), /* @__PURE__ */ c.createElement(Sn, {
    icon: n,
    primaryColor: S,
    secondaryColor: $,
    style: m
  }));
});
wn.displayName = "AntdIcon";
wn.getTwoToneColor = sm;
wn.setTwoToneColor = Nc;
var cm = function(t, r) {
  return /* @__PURE__ */ c.createElement(wn, fe({}, t, {
    ref: r,
    icon: Zv
  }));
}, um = /* @__PURE__ */ c.forwardRef(cm), fm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "ellipsis", theme: "outlined" }, dm = function(t, r) {
  return /* @__PURE__ */ c.createElement(wn, fe({}, t, {
    ref: r,
    icon: fm
  }));
}, vm = /* @__PURE__ */ c.forwardRef(dm), mm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { tag: "path", attrs: { d: "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z" } }] }, name: "plus", theme: "outlined" }, gm = function(t, r) {
  return /* @__PURE__ */ c.createElement(wn, fe({}, t, {
    ref: r,
    icon: mm
  }));
}, hm = /* @__PURE__ */ c.forwardRef(gm);
const Lc = (function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e == null ? void 0 : e.substr(0, 4));
}), Qa = /* @__PURE__ */ c.createContext(null);
function mn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [];
  return Xe.Children.forEach(e, function(n) {
    n == null && !t.keepEmpty || (Array.isArray(n) ? r = r.concat(mn(n)) : fc(n) && n.props ? r = r.concat(mn(n.props.children, t)) : r.push(n));
  }), r;
}
var so = /* @__PURE__ */ c.createContext(null);
function pm(e) {
  var t = e.children, r = e.onBatchResize, n = c.useRef(0), a = c.useRef([]), i = c.useContext(so), o = c.useCallback(function(s, l, u) {
    n.current += 1;
    var f = n.current;
    a.current.push({
      size: s,
      element: l,
      data: u
    }), Promise.resolve().then(function() {
      f === n.current && (r == null || r(a.current), a.current = []);
    }), i == null || i(s, l, u);
  }, [r, i]);
  return /* @__PURE__ */ c.createElement(so.Provider, {
    value: o
  }, t);
}
var jc = (function() {
  if (typeof Map < "u")
    return Map;
  function e(t, r) {
    var n = -1;
    return t.some(function(a, i) {
      return a[0] === r ? (n = i, !0) : !1;
    }), n;
  }
  return (
    /** @class */
    (function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(r) {
        var n = e(this.__entries__, r), a = this.__entries__[n];
        return a && a[1];
      }, t.prototype.set = function(r, n) {
        var a = e(this.__entries__, r);
        ~a ? this.__entries__[a][1] = n : this.__entries__.push([r, n]);
      }, t.prototype.delete = function(r) {
        var n = this.__entries__, a = e(n, r);
        ~a && n.splice(a, 1);
      }, t.prototype.has = function(r) {
        return !!~e(this.__entries__, r);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(r, n) {
        n === void 0 && (n = null);
        for (var a = 0, i = this.__entries__; a < i.length; a++) {
          var o = i[a];
          r.call(n, o[1], o[0]);
        }
      }, t;
    })()
  );
})(), lo = typeof window < "u" && typeof document < "u" && window.document === document, Aa = (function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
})(), ym = (function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Aa) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
})(), bm = 2;
function Cm(e, t) {
  var r = !1, n = !1, a = 0;
  function i() {
    r && (r = !1, e()), n && s();
  }
  function o() {
    ym(i);
  }
  function s() {
    var l = Date.now();
    if (r) {
      if (l - a < bm)
        return;
      n = !0;
    } else
      r = !0, n = !1, setTimeout(o, t);
    a = l;
  }
  return s;
}
var Sm = 20, wm = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], xm = typeof MutationObserver < "u", Em = (
  /** @class */
  (function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Cm(this.refresh.bind(this), Sm);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var r = this.observers_, n = r.indexOf(t);
      ~n && r.splice(n, 1), !r.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(r) {
        return r.gatherActive(), r.hasActive();
      });
      return t.forEach(function(r) {
        return r.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !lo || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), xm ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !lo || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var r = t.propertyName, n = r === void 0 ? "" : r, a = wm.some(function(i) {
        return !!~n.indexOf(i);
      });
      a && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  })()
), Dc = (function(e, t) {
  for (var r = 0, n = Object.keys(t); r < n.length; r++) {
    var a = n[r];
    Object.defineProperty(e, a, {
      value: t[a],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}), gn = (function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Aa;
}), Vc = Za(0, 0, 0, 0);
function Fa(e) {
  return parseFloat(e) || 0;
}
function qs(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return t.reduce(function(n, a) {
    var i = e["border-" + a + "-width"];
    return n + Fa(i);
  }, 0);
}
function $m(e) {
  for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, a = t; n < a.length; n++) {
    var i = a[n], o = e["padding-" + i];
    r[i] = Fa(o);
  }
  return r;
}
function _m(e) {
  var t = e.getBBox();
  return Za(0, 0, t.width, t.height);
}
function Pm(e) {
  var t = e.clientWidth, r = e.clientHeight;
  if (!t && !r)
    return Vc;
  var n = gn(e).getComputedStyle(e), a = $m(n), i = a.left + a.right, o = a.top + a.bottom, s = Fa(n.width), l = Fa(n.height);
  if (n.boxSizing === "border-box" && (Math.round(s + i) !== t && (s -= qs(n, "left", "right") + i), Math.round(l + o) !== r && (l -= qs(n, "top", "bottom") + o)), !Mm(e)) {
    var u = Math.round(s + i) - t, f = Math.round(l + o) - r;
    Math.abs(u) !== 1 && (s -= u), Math.abs(f) !== 1 && (l -= f);
  }
  return Za(a.left, a.top, s, l);
}
var Rm = /* @__PURE__ */ (function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof gn(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof gn(e).SVGElement && typeof e.getBBox == "function";
  };
})();
function Mm(e) {
  return e === gn(e).document.documentElement;
}
function Tm(e) {
  return lo ? Rm(e) ? _m(e) : Pm(e) : Vc;
}
function Om(e) {
  var t = e.x, r = e.y, n = e.width, a = e.height, i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, o = Object.create(i.prototype);
  return Dc(o, {
    x: t,
    y: r,
    width: n,
    height: a,
    top: r,
    right: t + n,
    bottom: a + r,
    left: t
  }), o;
}
function Za(e, t, r, n) {
  return { x: e, y: t, width: r, height: n };
}
var Im = (
  /** @class */
  (function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Za(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = Tm(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  })()
), km = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(t, r) {
      var n = Om(r);
      Dc(this, { target: t, contentRect: n });
    }
    return e;
  })()
), Am = (
  /** @class */
  (function() {
    function e(t, r, n) {
      if (this.activeObservations_ = [], this.observations_ = new jc(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = r, this.callbackCtx_ = n;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof gn(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) || (r.set(t, new Im(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof gn(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) && (r.delete(t), r.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(r) {
        r.isActive() && t.activeObservations_.push(r);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, r = this.activeObservations_.map(function(n) {
          return new km(n.target, n.broadcastRect());
        });
        this.callback_.call(t, r, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  })()
), zc = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new jc(), Hc = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var r = Em.getInstance(), n = new Am(t, r, this);
      zc.set(this, n);
    }
    return e;
  })()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  Hc.prototype[e] = function() {
    var t;
    return (t = zc.get(this))[e].apply(t, arguments);
  };
});
var Fm = (function() {
  return typeof Aa.ResizeObserver < "u" ? Aa.ResizeObserver : Hc;
})(), Ir = /* @__PURE__ */ new Map();
function Nm(e) {
  e.forEach(function(t) {
    var r, n = t.target;
    (r = Ir.get(n)) === null || r === void 0 || r.forEach(function(a) {
      return a(n);
    });
  });
}
var Bc = new Fm(Nm);
function Lm(e, t) {
  Ir.has(e) || (Ir.set(e, /* @__PURE__ */ new Set()), Bc.observe(e)), Ir.get(e).add(t);
}
function jm(e, t) {
  Ir.has(e) && (Ir.get(e).delete(t), Ir.get(e).size || (Bc.unobserve(e), Ir.delete(e)));
}
var Dm = /* @__PURE__ */ (function(e) {
  Ar(r, e);
  var t = Fr(r);
  function r() {
    return Pt(this, r), t.apply(this, arguments);
  }
  return Rt(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
})(c.Component);
function Vm(e, t) {
  var r = e.children, n = e.disabled, a = c.useRef(null), i = c.useRef(null), o = c.useContext(so), s = typeof r == "function", l = s ? r(a) : r, u = c.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), f = !s && /* @__PURE__ */ c.isValidElement(l) && yn(l), d = f ? Jn(l) : null, v = Zn(d, a), g = function() {
    var C;
    return Pa(a.current) || // Support `nativeElement` format
    (a.current && ce(a.current) === "object" ? Pa((C = a.current) === null || C === void 0 ? void 0 : C.nativeElement) : null) || Pa(i.current);
  };
  c.useImperativeHandle(t, function() {
    return g();
  });
  var h = c.useRef(e);
  h.current = e;
  var y = c.useCallback(function(m) {
    var C = h.current, p = C.onResize, S = C.data, $ = m.getBoundingClientRect(), E = $.width, x = $.height, P = m.offsetWidth, w = m.offsetHeight, R = Math.floor(E), O = Math.floor(x);
    if (u.current.width !== R || u.current.height !== O || u.current.offsetWidth !== P || u.current.offsetHeight !== w) {
      var I = {
        width: R,
        height: O,
        offsetWidth: P,
        offsetHeight: w
      };
      u.current = I;
      var F = P === Math.round(E) ? E : P, A = w === Math.round(x) ? x : w, k = M(M({}, I), {}, {
        offsetWidth: F,
        offsetHeight: A
      });
      o == null || o(k, m, S), p && Promise.resolve().then(function() {
        p(k, m);
      });
    }
  }, []);
  return c.useEffect(function() {
    var m = g();
    return m && !n && Lm(m, y), function() {
      return jm(m, y);
    };
  }, [a.current, n]), /* @__PURE__ */ c.createElement(Dm, {
    ref: i
  }, f ? /* @__PURE__ */ c.cloneElement(l, {
    ref: v
  }) : l);
}
var zm = /* @__PURE__ */ c.forwardRef(Vm), Hm = "rc-observer-key";
function Bm(e, t) {
  var r = e.children, n = typeof r == "function" ? [r] : mn(r);
  return n.map(function(a, i) {
    var o = (a == null ? void 0 : a.key) || "".concat(Hm, "-").concat(i);
    return /* @__PURE__ */ c.createElement(zm, fe({}, e, {
      key: o,
      ref: i === 0 ? t : void 0
    }), a);
  });
}
var kr = /* @__PURE__ */ c.forwardRef(Bm);
kr.Collection = pm;
var Wm = function(t) {
  var r = t.activeTabOffset, n = t.horizontal, a = t.rtl, i = t.indicator, o = i === void 0 ? {} : i, s = o.size, l = o.align, u = l === void 0 ? "center" : l, f = c.useState(), d = N(f, 2), v = d[0], g = d[1], h = c.useRef(), y = Xe.useCallback(function(C) {
    return typeof s == "function" ? s(C) : typeof s == "number" ? s : C;
  }, [s]);
  function m() {
    nr.cancel(h.current);
  }
  return c.useEffect(function() {
    var C = {};
    if (r)
      if (n) {
        C.width = y(r.width);
        var p = a ? "right" : "left";
        u === "start" && (C[p] = r[p]), u === "center" && (C[p] = r[p] + r.width / 2, C.transform = a ? "translateX(50%)" : "translateX(-50%)"), u === "end" && (C[p] = r[p] + r.width, C.transform = "translateX(-100%)");
      } else
        C.height = y(r.height), u === "start" && (C.top = r.top), u === "center" && (C.top = r.top + r.height / 2, C.transform = "translateY(-50%)"), u === "end" && (C.top = r.top + r.height, C.transform = "translateY(-100%)");
    return m(), h.current = nr(function() {
      var S = v && C && Object.keys(C).every(function($) {
        var E = C[$], x = v[$];
        return typeof E == "number" && typeof x == "number" ? Math.round(E) === Math.round(x) : E === x;
      });
      S || g(C);
    }), m;
  }, [JSON.stringify(r), n, a, u, y]), {
    style: v
  };
}, Gs = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
};
function Km(e, t, r) {
  return c.useMemo(function() {
    for (var n, a = /* @__PURE__ */ new Map(), i = t.get((n = e[0]) === null || n === void 0 ? void 0 : n.key) || Gs, o = i.left + i.width, s = 0; s < e.length; s += 1) {
      var l = e[s].key, u = t.get(l);
      if (!u) {
        var f;
        u = t.get((f = e[s - 1]) === null || f === void 0 ? void 0 : f.key) || Gs;
      }
      var d = a.get(l) || M({}, u);
      d.right = o - d.left - d.width, a.set(l, d);
    }
    return a;
  }, [e.map(function(n) {
    return n.key;
  }).join("_"), t, r]);
}
function Us(e, t) {
  var r = c.useRef(e), n = c.useState({}), a = N(n, 2), i = a[1];
  function o(s) {
    var l = typeof s == "function" ? s(r.current) : s;
    l !== r.current && t(l, r.current), r.current = l, i({});
  }
  return [r.current, o];
}
var qm = 0.1, Xs = 0.01, Ra = 20, Ys = Math.pow(0.995, Ra);
function Gm(e, t) {
  var r = c.useState(), n = N(r, 2), a = n[0], i = n[1], o = c.useState(0), s = N(o, 2), l = s[0], u = s[1], f = c.useState(0), d = N(f, 2), v = d[0], g = d[1], h = c.useState(), y = N(h, 2), m = y[0], C = y[1], p = c.useRef();
  function S(R) {
    var O = R.touches[0], I = O.screenX, F = O.screenY;
    i({
      x: I,
      y: F
    }), window.clearInterval(p.current);
  }
  function $(R) {
    if (a) {
      var O = R.touches[0], I = O.screenX, F = O.screenY;
      i({
        x: I,
        y: F
      });
      var A = I - a.x, k = F - a.y;
      t(A, k);
      var D = Date.now();
      u(D), g(D - l), C({
        x: A,
        y: k
      });
    }
  }
  function E() {
    if (a && (i(null), C(null), m)) {
      var R = m.x / v, O = m.y / v, I = Math.abs(R), F = Math.abs(O);
      if (Math.max(I, F) < qm) return;
      var A = R, k = O;
      p.current = window.setInterval(function() {
        if (Math.abs(A) < Xs && Math.abs(k) < Xs) {
          window.clearInterval(p.current);
          return;
        }
        A *= Ys, k *= Ys, t(A * Ra, k * Ra);
      }, Ra);
    }
  }
  var x = c.useRef();
  function P(R) {
    var O = R.deltaX, I = R.deltaY, F = 0, A = Math.abs(O), k = Math.abs(I);
    A === k ? F = x.current === "x" ? O : I : A > k ? (F = O, x.current = "x") : (F = I, x.current = "y"), t(-F, -F) && R.preventDefault();
  }
  var w = c.useRef(null);
  w.current = {
    onTouchStart: S,
    onTouchMove: $,
    onTouchEnd: E,
    onWheel: P
  }, c.useEffect(function() {
    function R(A) {
      w.current.onTouchStart(A);
    }
    function O(A) {
      w.current.onTouchMove(A);
    }
    function I(A) {
      w.current.onTouchEnd(A);
    }
    function F(A) {
      w.current.onWheel(A);
    }
    return document.addEventListener("touchmove", O, {
      passive: !1
    }), document.addEventListener("touchend", I, {
      passive: !0
    }), e.current.addEventListener("touchstart", R, {
      passive: !0
    }), e.current.addEventListener("wheel", F, {
      passive: !1
    }), function() {
      document.removeEventListener("touchmove", O), document.removeEventListener("touchend", I);
    };
  }, []);
}
function Wc(e) {
  var t = c.useState(0), r = N(t, 2), n = r[0], a = r[1], i = c.useRef(0), o = c.useRef();
  return o.current = e, Ai(function() {
    var s;
    (s = o.current) === null || s === void 0 || s.call(o);
  }, [n]), function() {
    i.current === n && (i.current += 1, a(i.current));
  };
}
function Um(e) {
  var t = c.useRef([]), r = c.useState({}), n = N(r, 2), a = n[1], i = c.useRef(typeof e == "function" ? e() : e), o = Wc(function() {
    var l = i.current;
    t.current.forEach(function(u) {
      l = u(l);
    }), t.current = [], i.current = l, a({});
  });
  function s(l) {
    t.current.push(l), o();
  }
  return [i.current, s];
}
var Qs = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  right: 0
};
function Xm(e, t, r, n, a, i, o) {
  var s = o.tabs, l = o.tabPosition, u = o.rtl, f, d, v;
  return ["top", "bottom"].includes(l) ? (f = "width", d = u ? "right" : "left", v = Math.abs(r)) : (f = "height", d = "top", v = -r), c.useMemo(function() {
    if (!s.length)
      return [0, 0];
    for (var g = s.length, h = g, y = 0; y < g; y += 1) {
      var m = e.get(s[y].key) || Qs;
      if (Math.floor(m[d] + m[f]) > Math.floor(v + t)) {
        h = y - 1;
        break;
      }
    }
    for (var C = 0, p = g - 1; p >= 0; p -= 1) {
      var S = e.get(s[p].key) || Qs;
      if (S[d] < v) {
        C = p + 1;
        break;
      }
    }
    return C > h ? [0, -1] : [C, h];
  }, [e, t, n, a, i, v, l, s.map(function(g) {
    return g.key;
  }).join("_"), u]);
}
function Zs(e) {
  var t;
  return e instanceof Map ? (t = {}, e.forEach(function(r, n) {
    t[n] = r;
  })) : t = e, JSON.stringify(t);
}
var Ym = "TABS_DQ";
function Kc(e) {
  return String(e).replace(/"/g, Ym);
}
function Wo(e, t, r, n) {
  return (
    // Only editable tabs can be removed
    !(!r || // Tabs cannot be removed when disabled
    n || // closable is false
    e === !1 || // If closable is undefined, the remove button should be hidden when closeIcon is null or false
    e === void 0 && (t === !1 || t === null))
  );
}
var qc = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var r = e.prefixCls, n = e.editable, a = e.locale, i = e.style;
  return !n || n.showAdd === !1 ? null : /* @__PURE__ */ c.createElement("button", {
    ref: t,
    type: "button",
    className: "".concat(r, "-nav-add"),
    style: i,
    "aria-label": (a == null ? void 0 : a.addAriaLabel) || "Add tab",
    onClick: function(s) {
      n.onEdit("add", {
        event: s
      });
    }
  }, n.addIcon || "+");
}), Js = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var r = e.position, n = e.prefixCls, a = e.extra;
  if (!a)
    return null;
  var i, o = {};
  return ce(a) === "object" && !/* @__PURE__ */ c.isValidElement(a) ? o = a : o.right = a, r === "right" && (i = o.right), r === "left" && (i = o.left), i ? /* @__PURE__ */ c.createElement("div", {
    className: "".concat(n, "-extra-content"),
    ref: t
  }, i) : null;
}), Gc = /* @__PURE__ */ c.createContext(null), el = [];
function Qm(e, t) {
  var r = c.useState(function() {
    if (!qt())
      return null;
    var h = document.createElement("div");
    return h;
  }), n = N(r, 1), a = n[0], i = c.useRef(!1), o = c.useContext(Gc), s = c.useState(el), l = N(s, 2), u = l[0], f = l[1], d = o || (i.current ? void 0 : function(h) {
    f(function(y) {
      var m = [h].concat(ae(y));
      return m;
    });
  });
  function v() {
    a.parentElement || document.body.appendChild(a), i.current = !0;
  }
  function g() {
    var h;
    (h = a.parentElement) === null || h === void 0 || h.removeChild(a), i.current = !1;
  }
  return It(function() {
    return e ? o ? o(v) : v() : g(), g;
  }, [e]), It(function() {
    u.length && (u.forEach(function(h) {
      return h();
    }), f(el));
  }, [u]), [a, d];
}
function Zm(e) {
  var t = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)), r = document.createElement("div");
  r.id = t;
  var n = r.style;
  n.position = "absolute", n.left = "0", n.top = "0", n.width = "100px", n.height = "100px", n.overflow = "scroll";
  var a, i;
  if (e) {
    var o = getComputedStyle(e);
    n.scrollbarColor = o.scrollbarColor, n.scrollbarWidth = o.scrollbarWidth;
    var s = getComputedStyle(e, "::-webkit-scrollbar"), l = parseInt(s.width, 10), u = parseInt(s.height, 10);
    try {
      var f = l ? "width: ".concat(s.width, ";") : "", d = u ? "height: ".concat(s.height, ";") : "";
      wr(`
#`.concat(t, `::-webkit-scrollbar {
`).concat(f, `
`).concat(d, `
}`), t);
    } catch (h) {
      console.error(h), a = l, i = u;
    }
  }
  document.body.appendChild(r);
  var v = e && a && !isNaN(a) ? a : r.offsetWidth - r.clientWidth, g = e && i && !isNaN(i) ? i : r.offsetHeight - r.clientHeight;
  return document.body.removeChild(r), Vn(t), {
    width: v,
    height: g
  };
}
function Jm(e) {
  return typeof document > "u" || !e || !(e instanceof Element) ? {
    width: 0,
    height: 0
  } : Zm(e);
}
function eg() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var tg = "rc-util-locker-".concat(Date.now()), tl = 0;
function rg(e) {
  var t = !!e, r = c.useState(function() {
    return tl += 1, "".concat(tg, "_").concat(tl);
  }), n = N(r, 1), a = n[0];
  It(function() {
    if (t) {
      var i = Jm(document.body).width, o = eg();
      wr(`
html body {
  overflow-y: hidden;
  `.concat(o ? "width: calc(100% - ".concat(i, "px);") : "", `
}`), a);
    } else
      Vn(a);
    return function() {
      Vn(a);
    };
  }, [t, a]);
}
var ng = !1;
function ag(e) {
  return ng;
}
var rl = function(t) {
  return t === !1 ? !1 : !qt() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, Uc = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var r = e.open, n = e.autoLock, a = e.getContainer;
  e.debug;
  var i = e.autoDestroy, o = i === void 0 ? !0 : i, s = e.children, l = c.useState(r), u = N(l, 2), f = u[0], d = u[1], v = f || r;
  c.useEffect(function() {
    (o || r) && d(r);
  }, [r, o]);
  var g = c.useState(function() {
    return rl(a);
  }), h = N(g, 2), y = h[0], m = h[1];
  c.useEffect(function() {
    var I = rl(a);
    m(I ?? null);
  });
  var C = Qm(v && !y), p = N(C, 2), S = p[0], $ = p[1], E = y ?? S;
  rg(n && r && qt() && (E === S || E === document.body));
  var x = null;
  if (s && yn(s) && t) {
    var P = s;
    x = P.ref;
  }
  var w = Zn(x, t);
  if (!v || !qt() || y === void 0)
    return null;
  var R = E === !1 || ag(), O = s;
  return t && (O = /* @__PURE__ */ c.cloneElement(s, {
    ref: w
  })), /* @__PURE__ */ c.createElement(Gc.Provider, {
    value: $
  }, R ? O : /* @__PURE__ */ Ua.createPortal(O, E));
});
function ig() {
  var e = M({}, Va);
  return e.useId;
}
var nl = 0, al = ig();
const og = al ? (
  // Use React `useId`
  (function(t) {
    var r = al();
    return t || r;
  })
) : (
  // Use compatible of `useId`
  (function(t) {
    var r = c.useState("ssr-id"), n = N(r, 2), a = n[0], i = n[1];
    return c.useEffect(function() {
      var o = nl;
      nl += 1, i("rc_unique_".concat(o));
    }, []), t || a;
  })
);
function sg(e) {
  var t = e.prefixCls, r = e.align, n = e.arrow, a = e.arrowPos, i = n || {}, o = i.className, s = i.content, l = a.x, u = l === void 0 ? 0 : l, f = a.y, d = f === void 0 ? 0 : f, v = c.useRef();
  if (!r || !r.points)
    return null;
  var g = {
    position: "absolute"
  };
  if (r.autoArrow !== !1) {
    var h = r.points[0], y = r.points[1], m = h[0], C = h[1], p = y[0], S = y[1];
    m === p || !["t", "b"].includes(m) ? g.top = d : m === "t" ? g.top = 0 : g.bottom = 0, C === S || !["l", "r"].includes(C) ? g.left = u : C === "l" ? g.left = 0 : g.right = 0;
  }
  return /* @__PURE__ */ c.createElement("div", {
    ref: v,
    className: ne("".concat(t, "-arrow"), o),
    style: g
  }, s);
}
function lg(e) {
  var t = e.prefixCls, r = e.open, n = e.zIndex, a = e.mask, i = e.motion;
  return a ? /* @__PURE__ */ c.createElement(ta, fe({}, i, {
    motionAppear: !0,
    visible: r,
    removeOnLeave: !0
  }), function(o) {
    var s = o.className;
    return /* @__PURE__ */ c.createElement("div", {
      style: {
        zIndex: n
      },
      className: ne("".concat(t, "-mask"), s)
    });
  }) : null;
}
var cg = /* @__PURE__ */ c.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
}), ug = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var r = e.popup, n = e.className, a = e.prefixCls, i = e.style, o = e.target, s = e.onVisibleChanged, l = e.open, u = e.keepDom, f = e.fresh, d = e.onClick, v = e.mask, g = e.arrow, h = e.arrowPos, y = e.align, m = e.motion, C = e.maskMotion, p = e.forceRender, S = e.getPopupContainer, $ = e.autoDestroy, E = e.portal, x = e.zIndex, P = e.onMouseEnter, w = e.onMouseLeave, R = e.onPointerEnter, O = e.onPointerDownCapture, I = e.ready, F = e.offsetX, A = e.offsetY, k = e.offsetR, D = e.offsetB, L = e.onAlign, j = e.onPrepare, H = e.stretch, K = e.targetWidth, W = e.targetHeight, X = typeof r == "function" ? r() : r, G = l || u, U = (S == null ? void 0 : S.length) > 0, b = c.useState(!S || !U), T = N(b, 2), z = T[0], V = T[1];
  if (It(function() {
    !z && U && o && V(!0);
  }, [z, U, o]), !z)
    return null;
  var q = "auto", B = {
    left: "-1000vw",
    top: "-1000vh",
    right: q,
    bottom: q
  };
  if (I || !l) {
    var Z, se = y.points, oe = y.dynamicInset || ((Z = y._experimental) === null || Z === void 0 ? void 0 : Z.dynamicInset), xe = oe && se[0][1] === "r", ie = oe && se[0][0] === "b";
    xe ? (B.right = k, B.left = q) : (B.left = F, B.right = q), ie ? (B.bottom = D, B.top = q) : (B.top = A, B.bottom = q);
  }
  var Ee = {};
  return H && (H.includes("height") && W ? Ee.height = W : H.includes("minHeight") && W && (Ee.minHeight = W), H.includes("width") && K ? Ee.width = K : H.includes("minWidth") && K && (Ee.minWidth = K)), l || (Ee.pointerEvents = "none"), /* @__PURE__ */ c.createElement(E, {
    open: p || G,
    getContainer: S && function() {
      return S(o);
    },
    autoDestroy: $
  }, /* @__PURE__ */ c.createElement(lg, {
    prefixCls: a,
    open: l,
    zIndex: x,
    mask: v,
    motion: C
  }), /* @__PURE__ */ c.createElement(kr, {
    onResize: L,
    disabled: !l
  }, function($e) {
    return /* @__PURE__ */ c.createElement(ta, fe({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: p,
      leavedClassName: "".concat(a, "-hidden")
    }, m, {
      onAppearPrepare: j,
      onEnterPrepare: j,
      visible: l,
      onVisibleChanged: function(qe) {
        var Ne;
        m == null || (Ne = m.onVisibleChanged) === null || Ne === void 0 || Ne.call(m, qe), s(qe);
      }
    }), function(He, qe) {
      var Ne = He.className, ge = He.style, J = ne(a, Ne, n);
      return /* @__PURE__ */ c.createElement("div", {
        ref: qa($e, t, qe),
        className: J,
        style: M(M(M(M({
          "--arrow-x": "".concat(h.x || 0, "px"),
          "--arrow-y": "".concat(h.y || 0, "px")
        }, B), Ee), ge), {}, {
          boxSizing: "border-box",
          zIndex: x
        }, i),
        onMouseEnter: P,
        onMouseLeave: w,
        onPointerEnter: R,
        onClick: d,
        onPointerDownCapture: O
      }, g && /* @__PURE__ */ c.createElement(sg, {
        prefixCls: a,
        arrow: g,
        arrowPos: h,
        align: y
      }), /* @__PURE__ */ c.createElement(cg, {
        cache: !l && !f
      }, X));
    });
  }));
}), fg = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var r = e.children, n = e.getTriggerDOMNode, a = yn(r), i = c.useCallback(function(s) {
    No(t, n ? n(s) : s);
  }, [n]), o = Zn(i, Jn(r));
  return a ? /* @__PURE__ */ c.cloneElement(r, {
    ref: o
  }) : r;
}), il = /* @__PURE__ */ c.createContext(null);
function ol(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function dg(e, t, r, n) {
  return c.useMemo(function() {
    var a = ol(r ?? t), i = ol(n ?? t), o = new Set(a), s = new Set(i);
    return e && (o.has("hover") && (o.delete("hover"), o.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [o, s];
  }, [e, t, r, n]);
}
const Xc = (function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var t = e.getBBox(), r = t.width, n = t.height;
      if (r || n)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var a = e.getBoundingClientRect(), i = a.width, o = a.height;
      if (i || o)
        return !0;
    }
  }
  return !1;
});
function vg() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 ? arguments[2] : void 0;
  return r ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function mg(e, t, r, n) {
  for (var a = r.points, i = Object.keys(e), o = 0; o < i.length; o += 1) {
    var s, l = i[o];
    if (vg((s = e[l]) === null || s === void 0 ? void 0 : s.points, a, n))
      return "".concat(t, "-placement-").concat(l);
  }
  return "";
}
function sl(e, t, r, n) {
  return t || (r ? {
    motionName: "".concat(e, "-").concat(r)
  } : n ? {
    motionName: n
  } : null);
}
function na(e) {
  return e.ownerDocument.defaultView;
}
function co(e) {
  for (var t = [], r = e == null ? void 0 : e.parentElement, n = ["hidden", "scroll", "clip", "auto"]; r; ) {
    var a = na(r).getComputedStyle(r), i = a.overflowX, o = a.overflowY, s = a.overflow;
    [i, o, s].some(function(l) {
      return n.includes(l);
    }) && t.push(r), r = r.parentElement;
  }
  return t;
}
function Xn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function Tn(e) {
  return Xn(parseFloat(e), 0);
}
function ll(e, t) {
  var r = M({}, e);
  return (t || []).forEach(function(n) {
    if (!(n instanceof HTMLBodyElement || n instanceof HTMLHtmlElement)) {
      var a = na(n).getComputedStyle(n), i = a.overflow, o = a.overflowClipMargin, s = a.borderTopWidth, l = a.borderBottomWidth, u = a.borderLeftWidth, f = a.borderRightWidth, d = n.getBoundingClientRect(), v = n.offsetHeight, g = n.clientHeight, h = n.offsetWidth, y = n.clientWidth, m = Tn(s), C = Tn(l), p = Tn(u), S = Tn(f), $ = Xn(Math.round(d.width / h * 1e3) / 1e3), E = Xn(Math.round(d.height / v * 1e3) / 1e3), x = (h - y - p - S) * $, P = (v - g - m - C) * E, w = m * E, R = C * E, O = p * $, I = S * $, F = 0, A = 0;
      if (i === "clip") {
        var k = Tn(o);
        F = k * $, A = k * E;
      }
      var D = d.x + O - F, L = d.y + w - A, j = D + d.width + 2 * F - O - I - x, H = L + d.height + 2 * A - w - R - P;
      r.left = Math.max(r.left, D), r.top = Math.max(r.top, L), r.right = Math.min(r.right, j), r.bottom = Math.min(r.bottom, H);
    }
  }), r;
}
function cl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = "".concat(t), n = r.match(/^(.*)\%$/);
  return n ? e * (parseFloat(n[1]) / 100) : parseFloat(r);
}
function ul(e, t) {
  var r = t || [], n = N(r, 2), a = n[0], i = n[1];
  return [cl(e.width, a), cl(e.height, i)];
}
function fl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function Gr(e, t) {
  var r = t[0], n = t[1], a, i;
  return r === "t" ? i = e.y : r === "b" ? i = e.y + e.height : i = e.y + e.height / 2, n === "l" ? a = e.x : n === "r" ? a = e.x + e.width : a = e.x + e.width / 2, {
    x: a,
    y: i
  };
}
function Rr(e, t) {
  var r = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return e.map(function(n, a) {
    return a === t ? r[n] || "c" : n;
  }).join("");
}
function gg(e, t, r, n, a, i, o) {
  var s = c.useState({
    ready: !1,
    offsetX: 0,
    offsetY: 0,
    offsetR: 0,
    offsetB: 0,
    arrowX: 0,
    arrowY: 0,
    scaleX: 1,
    scaleY: 1,
    align: a[n] || {}
  }), l = N(s, 2), u = l[0], f = l[1], d = c.useRef(0), v = c.useMemo(function() {
    return t ? co(t) : [];
  }, [t]), g = c.useRef({}), h = function() {
    g.current = {};
  };
  e || h();
  var y = Vt(function() {
    if (t && r && e) {
      let er = function(_n, Sr) {
        var Pr = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : st, Pn = G.x + _n, ca = G.y + Sr, ri = Pn + ie, ni = ca + xe, ai = Math.max(Pn, Pr.left), Q = Math.max(ca, Pr.top), le = Math.min(ri, Pr.right), rt = Math.min(ni, Pr.bottom);
        return Math.max(0, (le - ai) * (rt - Q));
      }, Kr = function() {
        Mt = G.y + Ce, wt = Mt + xe, jt = G.x + me, xt = jt + ie;
      };
      var p, S, $, E, x = t, P = x.ownerDocument, w = na(x), R = w.getComputedStyle(x), O = R.position, I = x.style.left, F = x.style.top, A = x.style.right, k = x.style.bottom, D = x.style.overflow, L = M(M({}, a[n]), i), j = P.createElement("div");
      (p = x.parentElement) === null || p === void 0 || p.appendChild(j), j.style.left = "".concat(x.offsetLeft, "px"), j.style.top = "".concat(x.offsetTop, "px"), j.style.position = O, j.style.height = "".concat(x.offsetHeight, "px"), j.style.width = "".concat(x.offsetWidth, "px"), x.style.left = "0", x.style.top = "0", x.style.right = "auto", x.style.bottom = "auto", x.style.overflow = "hidden";
      var H;
      if (Array.isArray(r))
        H = {
          x: r[0],
          y: r[1],
          width: 0,
          height: 0
        };
      else {
        var K, W, X = r.getBoundingClientRect();
        X.x = (K = X.x) !== null && K !== void 0 ? K : X.left, X.y = (W = X.y) !== null && W !== void 0 ? W : X.top, H = {
          x: X.x,
          y: X.y,
          width: X.width,
          height: X.height
        };
      }
      var G = x.getBoundingClientRect(), U = w.getComputedStyle(x), b = U.height, T = U.width;
      G.x = (S = G.x) !== null && S !== void 0 ? S : G.left, G.y = ($ = G.y) !== null && $ !== void 0 ? $ : G.top;
      var z = P.documentElement, V = z.clientWidth, q = z.clientHeight, B = z.scrollWidth, Z = z.scrollHeight, se = z.scrollTop, oe = z.scrollLeft, xe = G.height, ie = G.width, Ee = H.height, $e = H.width, He = {
        left: 0,
        top: 0,
        right: V,
        bottom: q
      }, qe = {
        left: -oe,
        top: -se,
        right: B - oe,
        bottom: Z - se
      }, Ne = L.htmlRegion, ge = "visible", J = "visibleFirst";
      Ne !== "scroll" && Ne !== J && (Ne = ge);
      var ve = Ne === J, ye = ll(qe, v), he = ll(He, v), st = Ne === ge ? he : ye, _e = ve ? he : st;
      x.style.left = "auto", x.style.top = "auto", x.style.right = "0", x.style.bottom = "0";
      var kt = x.getBoundingClientRect();
      x.style.left = I, x.style.top = F, x.style.right = A, x.style.bottom = k, x.style.overflow = D, (E = x.parentElement) === null || E === void 0 || E.removeChild(j);
      var Be = Xn(Math.round(ie / parseFloat(T) * 1e3) / 1e3), Le = Xn(Math.round(xe / parseFloat(b) * 1e3) / 1e3);
      if (Be === 0 || Le === 0 || Un(r) && !Xc(r))
        return;
      var ft = L.offset, We = L.targetOffset, nt = ul(G, ft), bt = N(nt, 2), be = bt[0], Te = bt[1], Ie = ul(H, We), at = N(Ie, 2), dt = at[0], Gt = at[1];
      H.x -= dt, H.y -= Gt;
      var Ut = L.points || [], Lt = N(Ut, 2), Xt = Lt[0], zt = Lt[1], it = fl(zt), ke = fl(Xt), Re = Gr(H, it), vt = Gr(G, ke), et = M({}, L), me = Re.x - vt.x + be, Ce = Re.y - vt.y + Te, Oe = er(me, Ce), ot = er(me, Ce, he), te = Gr(H, ["t", "l"]), re = Gr(G, ["t", "l"]), Ae = Gr(H, ["b", "r"]), Ge = Gr(G, ["b", "r"]), pe = L.overflow || {}, Qe = pe.adjustX, tt = pe.adjustY, Ye = pe.shiftX, At = pe.shiftY, Yt = function(Sr) {
        return typeof Sr == "boolean" ? Sr : Sr >= 0;
      }, Mt, wt, jt, xt;
      Kr();
      var Dt = Yt(tt), je = ke[0] === it[0];
      if (Dt && ke[0] === "t" && (wt > _e.bottom || g.current.bt)) {
        var Ht = Ce;
        je ? Ht -= xe - Ee : Ht = te.y - Ge.y - Te;
        var yr = er(me, Ht), br = er(me, Ht, he);
        // Of course use larger one
        yr > Oe || yr === Oe && (!ve || // Choose recommend one
        br >= ot) ? (g.current.bt = !0, Ce = Ht, Te = -Te, et.points = [Rr(ke, 0), Rr(it, 0)]) : g.current.bt = !1;
      }
      if (Dt && ke[0] === "b" && (Mt < _e.top || g.current.tb)) {
        var de = Ce;
        je ? de += xe - Ee : de = Ae.y - re.y - Te;
        var ee = er(me, de), Se = er(me, de, he);
        // Of course use larger one
        ee > Oe || ee === Oe && (!ve || // Choose recommend one
        Se >= ot) ? (g.current.tb = !0, Ce = de, Te = -Te, et.points = [Rr(ke, 0), Rr(it, 0)]) : g.current.tb = !1;
      }
      var Fe = Yt(Qe), De = ke[1] === it[1];
      if (Fe && ke[1] === "l" && (xt > _e.right || g.current.rl)) {
        var Je = me;
        De ? Je -= ie - $e : Je = te.x - Ge.x - be;
        var gt = er(Je, Ce), vr = er(Je, Ce, he);
        // Of course use larger one
        gt > Oe || gt === Oe && (!ve || // Choose recommend one
        vr >= ot) ? (g.current.rl = !0, me = Je, be = -be, et.points = [Rr(ke, 1), Rr(it, 1)]) : g.current.rl = !1;
      }
      if (Fe && ke[1] === "r" && (jt < _e.left || g.current.lr)) {
        var or = me;
        De ? or += ie - $e : or = Ae.x - re.x - be;
        var Qt = er(or, Ce), sr = er(or, Ce, he);
        // Of course use larger one
        Qt > Oe || Qt === Oe && (!ve || // Choose recommend one
        sr >= ot) ? (g.current.lr = !0, me = or, be = -be, et.points = [Rr(ke, 1), Rr(it, 1)]) : g.current.lr = !1;
      }
      Kr();
      var Ft = Ye === !0 ? 0 : Ye;
      typeof Ft == "number" && (jt < he.left && (me -= jt - he.left - be, H.x + $e < he.left + Ft && (me += H.x - he.left + $e - Ft)), xt > he.right && (me -= xt - he.right - be, H.x > he.right - Ft && (me += H.x - he.right + Ft)));
      var Zt = At === !0 ? 0 : At;
      typeof Zt == "number" && (Mt < he.top && (Ce -= Mt - he.top - Te, H.y + Ee < he.top + Zt && (Ce += H.y - he.top + Ee - Zt)), wt > he.bottom && (Ce -= wt - he.bottom - Te, H.y > he.bottom - Zt && (Ce += H.y - he.bottom + Zt)));
      var Jt = G.x + me, mr = Jt + ie, Nr = G.y + Ce, Ze = Nr + xe, Me = H.x, Ke = Me + $e, Ct = H.y, Et = Ct + Ee, $r = Math.max(Jt, Me), _r = Math.min(mr, Ke), xn = ($r + _r) / 2, Wr = xn - Jt, Lr = Math.max(Nr, Ct), Cr = Math.min(Ze, Et), jr = (Lr + Cr) / 2, En = jr - Nr;
      o == null || o(t, et);
      var gr = kt.right - G.x - (me + G.width), $n = kt.bottom - G.y - (Ce + G.height);
      Be === 1 && (me = Math.floor(me), gr = Math.floor(gr)), Le === 1 && (Ce = Math.floor(Ce), $n = Math.floor($n));
      var ti = {
        ready: !0,
        offsetX: me / Be,
        offsetY: Ce / Le,
        offsetR: gr / Be,
        offsetB: $n / Le,
        arrowX: Wr / Be,
        arrowY: En / Le,
        scaleX: Be,
        scaleY: Le,
        align: et
      };
      f(ti);
    }
  }), m = function() {
    d.current += 1;
    var S = d.current;
    Promise.resolve().then(function() {
      d.current === S && y();
    });
  }, C = function() {
    f(function(S) {
      return M(M({}, S), {}, {
        ready: !1
      });
    });
  };
  return It(C, [n]), It(function() {
    e || C();
  }, [e]), [u.ready, u.offsetX, u.offsetY, u.offsetR, u.offsetB, u.arrowX, u.arrowY, u.scaleX, u.scaleY, u.align, m];
}
function hg(e, t, r, n, a) {
  It(function() {
    if (e && t && r) {
      let d = function() {
        n(), a();
      };
      var i = t, o = r, s = co(i), l = co(o), u = na(o), f = new Set([u].concat(ae(s), ae(l)));
      return f.forEach(function(v) {
        v.addEventListener("scroll", d, {
          passive: !0
        });
      }), u.addEventListener("resize", d, {
        passive: !0
      }), n(), function() {
        f.forEach(function(v) {
          v.removeEventListener("scroll", d), u.removeEventListener("resize", d);
        });
      };
    }
  }, [e, t, r]);
}
function pg(e, t, r, n, a, i, o, s) {
  var l = c.useRef(e);
  l.current = e;
  var u = c.useRef(!1);
  c.useEffect(function() {
    if (t && n && (!a || i)) {
      var d = function() {
        u.current = !1;
      }, v = function(m) {
        var C;
        l.current && !o(((C = m.composedPath) === null || C === void 0 || (C = C.call(m)) === null || C === void 0 ? void 0 : C[0]) || m.target) && !u.current && s(!1);
      }, g = na(n);
      g.addEventListener("pointerdown", d, !0), g.addEventListener("mousedown", v, !0), g.addEventListener("contextmenu", v, !0);
      var h = ka(r);
      return h && (h.addEventListener("mousedown", v, !0), h.addEventListener("contextmenu", v, !0)), function() {
        g.removeEventListener("pointerdown", d, !0), g.removeEventListener("mousedown", v, !0), g.removeEventListener("contextmenu", v, !0), h && (h.removeEventListener("mousedown", v, !0), h.removeEventListener("contextmenu", v, !0));
      };
    }
  }, [t, r, n, a, i]);
  function f() {
    u.current = !0;
  }
  return f;
}
var yg = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function bg() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Uc, t = /* @__PURE__ */ c.forwardRef(function(r, n) {
    var a = r.prefixCls, i = a === void 0 ? "rc-trigger-popup" : a, o = r.children, s = r.action, l = s === void 0 ? "hover" : s, u = r.showAction, f = r.hideAction, d = r.popupVisible, v = r.defaultPopupVisible, g = r.onPopupVisibleChange, h = r.afterPopupVisibleChange, y = r.mouseEnterDelay, m = r.mouseLeaveDelay, C = m === void 0 ? 0.1 : m, p = r.focusDelay, S = r.blurDelay, $ = r.mask, E = r.maskClosable, x = E === void 0 ? !0 : E, P = r.getPopupContainer, w = r.forceRender, R = r.autoDestroy, O = r.destroyPopupOnHide, I = r.popup, F = r.popupClassName, A = r.popupStyle, k = r.popupPlacement, D = r.builtinPlacements, L = D === void 0 ? {} : D, j = r.popupAlign, H = r.zIndex, K = r.stretch, W = r.getPopupClassNameFromAlign, X = r.fresh, G = r.alignPoint, U = r.onPopupClick, b = r.onPopupAlign, T = r.arrow, z = r.popupMotion, V = r.maskMotion, q = r.popupTransitionName, B = r.popupAnimation, Z = r.maskTransitionName, se = r.maskAnimation, oe = r.className, xe = r.getTriggerDOMNode, ie = ze(r, yg), Ee = R || O || !1, $e = c.useState(!1), He = N($e, 2), qe = He[0], Ne = He[1];
    It(function() {
      Ne(Lc());
    }, []);
    var ge = c.useRef({}), J = c.useContext(il), ve = c.useMemo(function() {
      return {
        registerSubPopup: function(le, rt) {
          ge.current[le] = rt, J == null || J.registerSubPopup(le, rt);
        }
      };
    }, [J]), ye = og(), he = c.useState(null), st = N(he, 2), _e = st[0], kt = st[1], Be = c.useRef(null), Le = Vt(function(Q) {
      Be.current = Q, Un(Q) && _e !== Q && kt(Q), J == null || J.registerSubPopup(ye, Q);
    }), ft = c.useState(null), We = N(ft, 2), nt = We[0], bt = We[1], be = c.useRef(null), Te = Vt(function(Q) {
      Un(Q) && nt !== Q && (bt(Q), be.current = Q);
    }), Ie = c.Children.only(o), at = (Ie == null ? void 0 : Ie.props) || {}, dt = {}, Gt = Vt(function(Q) {
      var le, rt, ht = nt;
      return (ht == null ? void 0 : ht.contains(Q)) || ((le = ka(ht)) === null || le === void 0 ? void 0 : le.host) === Q || Q === ht || (_e == null ? void 0 : _e.contains(Q)) || ((rt = ka(_e)) === null || rt === void 0 ? void 0 : rt.host) === Q || Q === _e || Object.values(ge.current).some(function(lt) {
        return (lt == null ? void 0 : lt.contains(Q)) || Q === lt;
      });
    }), Ut = sl(i, z, B, q), Lt = sl(i, V, se, Z), Xt = c.useState(v || !1), zt = N(Xt, 2), it = zt[0], ke = zt[1], Re = d ?? it, vt = Vt(function(Q) {
      d === void 0 && ke(Q);
    });
    It(function() {
      ke(d || !1);
    }, [d]);
    var et = c.useRef(Re);
    et.current = Re;
    var me = c.useRef([]);
    me.current = [];
    var Ce = Vt(function(Q) {
      var le;
      vt(Q), ((le = me.current[me.current.length - 1]) !== null && le !== void 0 ? le : Re) !== Q && (me.current.push(Q), g == null || g(Q));
    }), Oe = c.useRef(), ot = function() {
      clearTimeout(Oe.current);
    }, te = function(le) {
      var rt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      ot(), rt === 0 ? Ce(le) : Oe.current = setTimeout(function() {
        Ce(le);
      }, rt * 1e3);
    };
    c.useEffect(function() {
      return ot;
    }, []);
    var re = c.useState(!1), Ae = N(re, 2), Ge = Ae[0], pe = Ae[1];
    It(function(Q) {
      (!Q || Re) && pe(!0);
    }, [Re]);
    var Qe = c.useState(null), tt = N(Qe, 2), Ye = tt[0], At = tt[1], Yt = c.useState(null), Mt = N(Yt, 2), wt = Mt[0], jt = Mt[1], xt = function(le) {
      jt([le.clientX, le.clientY]);
    }, Dt = gg(Re, _e, G && wt !== null ? wt : nt, k, L, j, b), je = N(Dt, 11), Ht = je[0], yr = je[1], br = je[2], de = je[3], ee = je[4], Se = je[5], Fe = je[6], De = je[7], Je = je[8], gt = je[9], vr = je[10], or = dg(qe, l, u, f), Qt = N(or, 2), sr = Qt[0], Ft = Qt[1], Zt = sr.has("click"), Jt = Ft.has("click") || Ft.has("contextMenu"), mr = Vt(function() {
      Ge || vr();
    }), Nr = function() {
      et.current && G && Jt && te(!1);
    };
    hg(Re, nt, _e, mr, Nr), It(function() {
      mr();
    }, [wt, k]), It(function() {
      Re && !(L != null && L[k]) && mr();
    }, [JSON.stringify(j)]);
    var Ze = c.useMemo(function() {
      var Q = mg(L, i, gt, G);
      return ne(Q, W == null ? void 0 : W(gt));
    }, [gt, W, L, i, G]);
    c.useImperativeHandle(n, function() {
      return {
        nativeElement: be.current,
        popupElement: Be.current,
        forceAlign: mr
      };
    });
    var Me = c.useState(0), Ke = N(Me, 2), Ct = Ke[0], Et = Ke[1], $r = c.useState(0), _r = N($r, 2), xn = _r[0], Wr = _r[1], Lr = function() {
      if (K && nt) {
        var le = nt.getBoundingClientRect();
        Et(le.width), Wr(le.height);
      }
    }, Cr = function() {
      Lr(), mr();
    }, jr = function(le) {
      pe(!1), vr(), h == null || h(le);
    }, En = function() {
      return new Promise(function(le) {
        Lr(), At(function() {
          return le;
        });
      });
    };
    It(function() {
      Ye && (vr(), Ye(), At(null));
    }, [Ye]);
    function gr(Q, le, rt, ht) {
      dt[Q] = function(lt) {
        var ua;
        ht == null || ht(lt), te(le, rt);
        for (var ii = arguments.length, Jo = new Array(ii > 1 ? ii - 1 : 0), fa = 1; fa < ii; fa++)
          Jo[fa - 1] = arguments[fa];
        (ua = at[Q]) === null || ua === void 0 || ua.call.apply(ua, [at, lt].concat(Jo));
      };
    }
    (Zt || Jt) && (dt.onClick = function(Q) {
      var le;
      et.current && Jt ? te(!1) : !et.current && Zt && (xt(Q), te(!0));
      for (var rt = arguments.length, ht = new Array(rt > 1 ? rt - 1 : 0), lt = 1; lt < rt; lt++)
        ht[lt - 1] = arguments[lt];
      (le = at.onClick) === null || le === void 0 || le.call.apply(le, [at, Q].concat(ht));
    });
    var $n = pg(Re, Jt, nt, _e, $, x, Gt, te), ti = sr.has("hover"), er = Ft.has("hover"), Kr, _n;
    ti && (gr("onMouseEnter", !0, y, function(Q) {
      xt(Q);
    }), gr("onPointerEnter", !0, y, function(Q) {
      xt(Q);
    }), Kr = function(le) {
      (Re || Ge) && _e !== null && _e !== void 0 && _e.contains(le.target) && te(!0, y);
    }, G && (dt.onMouseMove = function(Q) {
      var le;
      (le = at.onMouseMove) === null || le === void 0 || le.call(at, Q);
    })), er && (gr("onMouseLeave", !1, C), gr("onPointerLeave", !1, C), _n = function() {
      te(!1, C);
    }), sr.has("focus") && gr("onFocus", !0, p), Ft.has("focus") && gr("onBlur", !1, S), sr.has("contextMenu") && (dt.onContextMenu = function(Q) {
      var le;
      et.current && Ft.has("contextMenu") ? te(!1) : (xt(Q), te(!0)), Q.preventDefault();
      for (var rt = arguments.length, ht = new Array(rt > 1 ? rt - 1 : 0), lt = 1; lt < rt; lt++)
        ht[lt - 1] = arguments[lt];
      (le = at.onContextMenu) === null || le === void 0 || le.call.apply(le, [at, Q].concat(ht));
    }), oe && (dt.className = ne(at.className, oe));
    var Sr = c.useRef(!1);
    Sr.current || (Sr.current = w || Re || Ge);
    var Pr = M(M({}, at), dt), Pn = {}, ca = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    ca.forEach(function(Q) {
      ie[Q] && (Pn[Q] = function() {
        for (var le, rt = arguments.length, ht = new Array(rt), lt = 0; lt < rt; lt++)
          ht[lt] = arguments[lt];
        (le = Pr[Q]) === null || le === void 0 || le.call.apply(le, [Pr].concat(ht)), ie[Q].apply(ie, ht);
      });
    });
    var ri = /* @__PURE__ */ c.cloneElement(Ie, M(M({}, Pr), Pn)), ni = {
      x: Se,
      y: Fe
    }, ai = T ? M({}, T !== !0 ? T : {}) : null;
    return /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(kr, {
      disabled: !Re,
      ref: Te,
      onResize: Cr
    }, /* @__PURE__ */ c.createElement(fg, {
      getTriggerDOMNode: xe
    }, ri)), Sr.current && /* @__PURE__ */ c.createElement(il.Provider, {
      value: ve
    }, /* @__PURE__ */ c.createElement(ug, {
      portal: e,
      ref: Le,
      prefixCls: i,
      popup: I,
      className: ne(F, Ze),
      style: A,
      target: nt,
      onMouseEnter: Kr,
      onMouseLeave: _n,
      onPointerEnter: Kr,
      zIndex: H,
      open: Re,
      keepDom: Ge,
      fresh: X,
      onClick: U,
      onPointerDownCapture: $n,
      mask: $,
      motion: Ut,
      maskMotion: Lt,
      onVisibleChanged: jr,
      onPrepare: En,
      forceRender: w,
      autoDestroy: Ee,
      getPopupContainer: P,
      align: gt,
      arrow: ai,
      arrowPos: ni,
      ready: Ht,
      offsetX: yr,
      offsetY: br,
      offsetR: de,
      offsetB: ee,
      onAlign: mr,
      stretch: K,
      targetWidth: Ct / De,
      targetHeight: xn / Je
    })));
  });
  return t;
}
const Yc = bg(Uc);
var pt = {
  /**
   * TAB
   */
  TAB: 9,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40
}, Cg = pt.ESC, Sg = pt.TAB;
function wg(e) {
  var t = e.visible, r = e.triggerRef, n = e.onVisibleChange, a = e.autoFocus, i = e.overlayRef, o = c.useRef(!1), s = function() {
    if (t) {
      var d, v;
      (d = r.current) === null || d === void 0 || (v = d.focus) === null || v === void 0 || v.call(d), n == null || n(!1);
    }
  }, l = function() {
    var d;
    return (d = i.current) !== null && d !== void 0 && d.focus ? (i.current.focus(), o.current = !0, !0) : !1;
  }, u = function(d) {
    switch (d.keyCode) {
      case Cg:
        s();
        break;
      case Sg: {
        var v = !1;
        o.current || (v = l()), v ? d.preventDefault() : s();
        break;
      }
    }
  };
  c.useEffect(function() {
    return t ? (window.addEventListener("keydown", u), a && nr(l, 3), function() {
      window.removeEventListener("keydown", u), o.current = !1;
    }) : function() {
      o.current = !1;
    };
  }, [t]);
}
var xg = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var r = e.overlay, n = e.arrow, a = e.prefixCls, i = c.useMemo(function() {
    var s;
    return typeof r == "function" ? s = r() : s = r, s;
  }, [r]), o = qa(t, Jn(i));
  return /* @__PURE__ */ Xe.createElement(Xe.Fragment, null, n && /* @__PURE__ */ Xe.createElement("div", {
    className: "".concat(a, "-arrow")
  }), /* @__PURE__ */ Xe.cloneElement(i, {
    ref: yn(i) ? o : void 0
  }));
}), Ur = {
  adjustX: 1,
  adjustY: 1
}, Xr = [0, 0], Eg = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: Ur,
    offset: [0, -4],
    targetOffset: Xr
  },
  top: {
    points: ["bc", "tc"],
    overflow: Ur,
    offset: [0, -4],
    targetOffset: Xr
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Ur,
    offset: [0, -4],
    targetOffset: Xr
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Ur,
    offset: [0, 4],
    targetOffset: Xr
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: Ur,
    offset: [0, 4],
    targetOffset: Xr
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Ur,
    offset: [0, 4],
    targetOffset: Xr
  }
}, $g = ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger", "autoFocus", "overlay", "children", "onVisibleChange"];
function _g(e, t) {
  var r, n = e.arrow, a = n === void 0 ? !1 : n, i = e.prefixCls, o = i === void 0 ? "rc-dropdown" : i, s = e.transitionName, l = e.animation, u = e.align, f = e.placement, d = f === void 0 ? "bottomLeft" : f, v = e.placements, g = v === void 0 ? Eg : v, h = e.getPopupContainer, y = e.showAction, m = e.hideAction, C = e.overlayClassName, p = e.overlayStyle, S = e.visible, $ = e.trigger, E = $ === void 0 ? ["hover"] : $, x = e.autoFocus, P = e.overlay, w = e.children, R = e.onVisibleChange, O = ze(e, $g), I = Xe.useState(), F = N(I, 2), A = F[0], k = F[1], D = "visible" in e ? S : A, L = Xe.useRef(null), j = Xe.useRef(null), H = Xe.useRef(null);
  Xe.useImperativeHandle(t, function() {
    return L.current;
  });
  var K = function(q) {
    k(q), R == null || R(q);
  };
  wg({
    visible: D,
    triggerRef: H,
    onVisibleChange: K,
    autoFocus: x,
    overlayRef: j
  });
  var W = function(q) {
    var B = e.onOverlayClick;
    k(!1), B && B(q);
  }, X = function() {
    return /* @__PURE__ */ Xe.createElement(xg, {
      ref: j,
      overlay: P,
      prefixCls: o,
      arrow: a
    });
  }, G = function() {
    return typeof P == "function" ? X : X();
  }, U = function() {
    var q = e.minOverlayWidthMatchTrigger, B = e.alignPoint;
    return "minOverlayWidthMatchTrigger" in e ? q : !B;
  }, b = function() {
    var q = e.openClassName;
    return q !== void 0 ? q : "".concat(o, "-open");
  }, T = /* @__PURE__ */ Xe.cloneElement(w, {
    className: ne((r = w.props) === null || r === void 0 ? void 0 : r.className, D && b()),
    ref: yn(w) ? qa(H, Jn(w)) : void 0
  }), z = m;
  return !z && E.indexOf("contextMenu") !== -1 && (z = ["click"]), /* @__PURE__ */ Xe.createElement(Yc, fe({
    builtinPlacements: g
  }, O, {
    prefixCls: o,
    ref: L,
    popupClassName: ne(C, _({}, "".concat(o, "-show-arrow"), a)),
    popupStyle: p,
    action: E,
    showAction: y,
    hideAction: z,
    popupPlacement: d,
    popupAlign: u,
    popupTransitionName: s,
    popupAnimation: l,
    popupVisible: D,
    stretch: U() ? "minWidth" : "",
    popup: G(),
    onPopupVisibleChange: K,
    onPopupClick: W,
    getPopupContainer: h
  }), T);
}
const Pg = /* @__PURE__ */ Xe.forwardRef(_g);
var Rg = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], Yr = void 0;
function Mg(e, t) {
  var r = e.prefixCls, n = e.invalidate, a = e.item, i = e.renderItem, o = e.responsive, s = e.responsiveDisabled, l = e.registerSize, u = e.itemKey, f = e.className, d = e.style, v = e.children, g = e.display, h = e.order, y = e.component, m = y === void 0 ? "div" : y, C = ze(e, Rg), p = o && !g;
  function S(w) {
    l(u, w);
  }
  c.useEffect(function() {
    return function() {
      S(null);
    };
  }, []);
  var $ = i && a !== Yr ? i(a, {
    index: h
  }) : v, E;
  n || (E = {
    opacity: p ? 0 : 1,
    height: p ? 0 : Yr,
    overflowY: p ? "hidden" : Yr,
    order: o ? h : Yr,
    pointerEvents: p ? "none" : Yr,
    position: p ? "absolute" : Yr
  });
  var x = {};
  p && (x["aria-hidden"] = !0);
  var P = /* @__PURE__ */ c.createElement(m, fe({
    className: ne(!n && r, f),
    style: M(M({}, E), d)
  }, x, C, {
    ref: t
  }), $);
  return o && (P = /* @__PURE__ */ c.createElement(kr, {
    onResize: function(R) {
      var O = R.offsetWidth;
      S(O);
    },
    disabled: s
  }, P)), P;
}
var an = /* @__PURE__ */ c.forwardRef(Mg);
an.displayName = "Item";
function Tg(e) {
  if (typeof MessageChannel > "u")
    nr(e);
  else {
    var t = new MessageChannel();
    t.port1.onmessage = function() {
      return e();
    }, t.port2.postMessage(void 0);
  }
}
function Og() {
  var e = c.useRef(null), t = function(n) {
    e.current || (e.current = [], Tg(function() {
      Ua.unstable_batchedUpdates(function() {
        e.current.forEach(function(a) {
          a();
        }), e.current = null;
      });
    })), e.current.push(n);
  };
  return t;
}
function Qr(e, t) {
  var r = c.useState(t), n = N(r, 2), a = n[0], i = n[1], o = Vt(function(s) {
    e(function() {
      i(s);
    });
  });
  return [a, o];
}
var Na = /* @__PURE__ */ Xe.createContext(null), Ig = ["component"], kg = ["className"], Ag = ["className"], Fg = function(t, r) {
  var n = c.useContext(Na);
  if (!n) {
    var a = t.component, i = a === void 0 ? "div" : a, o = ze(t, Ig);
    return /* @__PURE__ */ c.createElement(i, fe({}, o, {
      ref: r
    }));
  }
  var s = n.className, l = ze(n, kg), u = t.className, f = ze(t, Ag);
  return /* @__PURE__ */ c.createElement(Na.Provider, {
    value: null
  }, /* @__PURE__ */ c.createElement(an, fe({
    ref: r,
    className: ne(s, u)
  }, l, f)));
}, Qc = /* @__PURE__ */ c.forwardRef(Fg);
Qc.displayName = "RawItem";
var Ng = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "prefix", "suffix", "component", "itemComponent", "onVisibleChange"], Zc = "responsive", Jc = "invalidate";
function Lg(e) {
  return "+ ".concat(e.length, " ...");
}
function jg(e, t) {
  var r = e.prefixCls, n = r === void 0 ? "rc-overflow" : r, a = e.data, i = a === void 0 ? [] : a, o = e.renderItem, s = e.renderRawItem, l = e.itemKey, u = e.itemWidth, f = u === void 0 ? 10 : u, d = e.ssr, v = e.style, g = e.className, h = e.maxCount, y = e.renderRest, m = e.renderRawRest, C = e.prefix, p = e.suffix, S = e.component, $ = S === void 0 ? "div" : S, E = e.itemComponent, x = e.onVisibleChange, P = ze(e, Ng), w = d === "full", R = Og(), O = Qr(R, null), I = N(O, 2), F = I[0], A = I[1], k = F || 0, D = Qr(R, /* @__PURE__ */ new Map()), L = N(D, 2), j = L[0], H = L[1], K = Qr(R, 0), W = N(K, 2), X = W[0], G = W[1], U = Qr(R, 0), b = N(U, 2), T = b[0], z = b[1], V = Qr(R, 0), q = N(V, 2), B = q[0], Z = q[1], se = Qr(R, 0), oe = N(se, 2), xe = oe[0], ie = oe[1], Ee = c.useState(null), $e = N(Ee, 2), He = $e[0], qe = $e[1], Ne = c.useState(null), ge = N(Ne, 2), J = ge[0], ve = ge[1], ye = c.useMemo(function() {
    return J === null && w ? Number.MAX_SAFE_INTEGER : J || 0;
  }, [J, F]), he = c.useState(!1), st = N(he, 2), _e = st[0], kt = st[1], Be = "".concat(n, "-item"), Le = Math.max(X, T), ft = h === Zc, We = i.length && ft, nt = h === Jc, bt = We || typeof h == "number" && i.length > h, be = c.useMemo(function() {
    var te = i;
    return We ? F === null && w ? te = i : te = i.slice(0, Math.min(i.length, k / f)) : typeof h == "number" && (te = i.slice(0, h)), te;
  }, [i, f, F, h, We]), Te = c.useMemo(function() {
    return We ? i.slice(ye + 1) : i.slice(be.length);
  }, [i, be, We, ye]), Ie = c.useCallback(function(te, re) {
    var Ae;
    return typeof l == "function" ? l(te) : (Ae = l && (te == null ? void 0 : te[l])) !== null && Ae !== void 0 ? Ae : re;
  }, [l]), at = c.useCallback(o || function(te) {
    return te;
  }, [o]);
  function dt(te, re, Ae) {
    J === te && (re === void 0 || re === He) || (ve(te), Ae || (kt(te < i.length - 1), x == null || x(te)), re !== void 0 && qe(re));
  }
  function Gt(te, re) {
    A(re.clientWidth);
  }
  function Ut(te, re) {
    H(function(Ae) {
      var Ge = new Map(Ae);
      return re === null ? Ge.delete(te) : Ge.set(te, re), Ge;
    });
  }
  function Lt(te, re) {
    z(re), G(T);
  }
  function Xt(te, re) {
    Z(re);
  }
  function zt(te, re) {
    ie(re);
  }
  function it(te) {
    return j.get(Ie(be[te], te));
  }
  It(function() {
    if (k && typeof Le == "number" && be) {
      var te = B + xe, re = be.length, Ae = re - 1;
      if (!re) {
        dt(0, null);
        return;
      }
      for (var Ge = 0; Ge < re; Ge += 1) {
        var pe = it(Ge);
        if (w && (pe = pe || 0), pe === void 0) {
          dt(Ge - 1, void 0, !0);
          break;
        }
        if (te += pe, // Only one means `totalWidth` is the final width
        Ae === 0 && te <= k || // Last two width will be the final width
        Ge === Ae - 1 && te + it(Ae) <= k) {
          dt(Ae, null);
          break;
        } else if (te + Le > k) {
          dt(Ge - 1, te - pe - xe + T);
          break;
        }
      }
      p && it(0) + xe > k && qe(null);
    }
  }, [k, j, T, B, xe, Ie, be]);
  var ke = _e && !!Te.length, Re = {};
  He !== null && We && (Re = {
    position: "absolute",
    left: He,
    top: 0
  });
  var vt = {
    prefixCls: Be,
    responsive: We,
    component: E,
    invalidate: nt
  }, et = s ? function(te, re) {
    var Ae = Ie(te, re);
    return /* @__PURE__ */ c.createElement(Na.Provider, {
      key: Ae,
      value: M(M({}, vt), {}, {
        order: re,
        item: te,
        itemKey: Ae,
        registerSize: Ut,
        display: re <= ye
      })
    }, s(te, re));
  } : function(te, re) {
    var Ae = Ie(te, re);
    return /* @__PURE__ */ c.createElement(an, fe({}, vt, {
      order: re,
      key: Ae,
      item: te,
      renderItem: at,
      itemKey: Ae,
      registerSize: Ut,
      display: re <= ye
    }));
  }, me = {
    order: ke ? ye : Number.MAX_SAFE_INTEGER,
    className: "".concat(Be, "-rest"),
    registerSize: Lt,
    display: ke
  }, Ce = y || Lg, Oe = m ? /* @__PURE__ */ c.createElement(Na.Provider, {
    value: M(M({}, vt), me)
  }, m(Te)) : /* @__PURE__ */ c.createElement(an, fe({}, vt, me), typeof Ce == "function" ? Ce(Te) : Ce), ot = /* @__PURE__ */ c.createElement($, fe({
    className: ne(!nt && n, g),
    style: v,
    ref: t
  }, P), C && /* @__PURE__ */ c.createElement(an, fe({}, vt, {
    responsive: ft,
    responsiveDisabled: !We,
    order: -1,
    className: "".concat(Be, "-prefix"),
    registerSize: Xt,
    display: !0
  }), C), be.map(et), bt ? Oe : null, p && /* @__PURE__ */ c.createElement(an, fe({}, vt, {
    responsive: ft,
    responsiveDisabled: !We,
    order: ye,
    className: "".concat(Be, "-suffix"),
    registerSize: zt,
    display: !0,
    style: Re
  }), p));
  return ft ? /* @__PURE__ */ c.createElement(kr, {
    onResize: Gt,
    disabled: !We
  }, ot) : ot;
}
var xr = /* @__PURE__ */ c.forwardRef(jg);
xr.displayName = "Overflow";
xr.Item = Qc;
xr.RESPONSIVE = Zc;
xr.INVALIDATE = Jc;
var eu = /* @__PURE__ */ c.createContext(null);
function tu(e, t) {
  return e === void 0 ? null : "".concat(e, "-").concat(t);
}
function ru(e) {
  var t = c.useContext(eu);
  return tu(t, e);
}
var Dg = ["children", "locked"], dr = /* @__PURE__ */ c.createContext(null);
function Vg(e, t) {
  var r = M({}, e);
  return Object.keys(t).forEach(function(n) {
    var a = t[n];
    a !== void 0 && (r[n] = a);
  }), r;
}
function Yn(e) {
  var t = e.children, r = e.locked, n = ze(e, Dg), a = c.useContext(dr), i = Ha(function() {
    return Vg(a, n);
  }, [a, n], function(o, s) {
    return !r && (o[0] !== s[0] || !zn(o[1], s[1], !0));
  });
  return /* @__PURE__ */ c.createElement(dr.Provider, {
    value: i
  }, t);
}
var zg = [], nu = /* @__PURE__ */ c.createContext(null);
function Ja() {
  return c.useContext(nu);
}
var au = /* @__PURE__ */ c.createContext(zg);
function aa(e) {
  var t = c.useContext(au);
  return c.useMemo(function() {
    return e !== void 0 ? [].concat(ae(t), [e]) : t;
  }, [t, e]);
}
var iu = /* @__PURE__ */ c.createContext(null), Ko = /* @__PURE__ */ c.createContext({});
function dl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (Xc(e)) {
    var r = e.nodeName.toLowerCase(), n = (
      // Focusable element
      ["input", "select", "textarea", "button"].includes(r) || // Editable element
      e.isContentEditable || // Anchor with href element
      r === "a" && !!e.getAttribute("href")
    ), a = e.getAttribute("tabindex"), i = Number(a), o = null;
    return a && !Number.isNaN(i) ? o = i : n && o === null && (o = 0), n && e.disabled && (o = null), o !== null && (o >= 0 || t && o < 0);
  }
  return !1;
}
function Hg(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = ae(e.querySelectorAll("*")).filter(function(n) {
    return dl(n, t);
  });
  return dl(e, t) && r.unshift(e), r;
}
var uo = pt.LEFT, fo = pt.RIGHT, vo = pt.UP, Ma = pt.DOWN, Ta = pt.ENTER, ou = pt.ESC, On = pt.HOME, In = pt.END, vl = [vo, Ma, uo, fo];
function Bg(e, t, r, n) {
  var a, i = "prev", o = "next", s = "children", l = "parent";
  if (e === "inline" && n === Ta)
    return {
      inlineTrigger: !0
    };
  var u = _(_({}, vo, i), Ma, o), f = _(_(_(_({}, uo, r ? o : i), fo, r ? i : o), Ma, s), Ta, s), d = _(_(_(_(_(_({}, vo, i), Ma, o), Ta, s), ou, l), uo, r ? s : l), fo, r ? l : s), v = {
    inline: u,
    horizontal: f,
    vertical: d,
    inlineSub: u,
    horizontalSub: d,
    verticalSub: d
  }, g = (a = v["".concat(e).concat(t ? "" : "Sub")]) === null || a === void 0 ? void 0 : a[n];
  switch (g) {
    case i:
      return {
        offset: -1,
        sibling: !0
      };
    case o:
      return {
        offset: 1,
        sibling: !0
      };
    case l:
      return {
        offset: -1,
        sibling: !1
      };
    case s:
      return {
        offset: 1,
        sibling: !1
      };
    default:
      return null;
  }
}
function Wg(e) {
  for (var t = e; t; ) {
    if (t.getAttribute("data-menu-list"))
      return t;
    t = t.parentElement;
  }
  return null;
}
function Kg(e, t) {
  for (var r = e || document.activeElement; r; ) {
    if (t.has(r))
      return r;
    r = r.parentElement;
  }
  return null;
}
function qo(e, t) {
  var r = Hg(e, !0);
  return r.filter(function(n) {
    return t.has(n);
  });
}
function ml(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  if (!e)
    return null;
  var a = qo(e, t), i = a.length, o = a.findIndex(function(s) {
    return r === s;
  });
  return n < 0 ? o === -1 ? o = i - 1 : o -= 1 : n > 0 && (o += 1), o = (o + i) % i, a[o];
}
var mo = function(t, r) {
  var n = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  return t.forEach(function(o) {
    var s = document.querySelector("[data-menu-id='".concat(tu(r, o), "']"));
    s && (n.add(s), i.set(s, o), a.set(o, s));
  }), {
    elements: n,
    key2element: a,
    element2key: i
  };
};
function qg(e, t, r, n, a, i, o, s, l, u) {
  var f = c.useRef(), d = c.useRef();
  d.current = t;
  var v = function() {
    nr.cancel(f.current);
  };
  return c.useEffect(function() {
    return function() {
      v();
    };
  }, []), function(g) {
    var h = g.which;
    if ([].concat(vl, [Ta, ou, On, In]).includes(h)) {
      var y = i(), m = mo(y, n), C = m, p = C.elements, S = C.key2element, $ = C.element2key, E = S.get(t), x = Kg(E, p), P = $.get(x), w = Bg(e, o(P, !0).length === 1, r, h);
      if (!w && h !== On && h !== In)
        return;
      (vl.includes(h) || [On, In].includes(h)) && g.preventDefault();
      var R = function(j) {
        if (j) {
          var H = j, K = j.querySelector("a");
          K != null && K.getAttribute("href") && (H = K);
          var W = $.get(j);
          s(W), v(), f.current = nr(function() {
            d.current === W && H.focus();
          });
        }
      };
      if ([On, In].includes(h) || w.sibling || !x) {
        var O;
        !x || e === "inline" ? O = a.current : O = Wg(x);
        var I, F = qo(O, p);
        h === On ? I = F[0] : h === In ? I = F[F.length - 1] : I = ml(O, p, x, w.offset), R(I);
      } else if (w.inlineTrigger)
        l(P);
      else if (w.offset > 0)
        l(P, !0), v(), f.current = nr(function() {
          m = mo(y, n);
          var L = x.getAttribute("aria-controls"), j = document.getElementById(L), H = ml(j, m.elements);
          R(H);
        }, 5);
      else if (w.offset < 0) {
        var A = o(P, !0), k = A[A.length - 2], D = S.get(k);
        l(k, !1), R(D);
      }
    }
    u == null || u(g);
  };
}
function Gg(e) {
  Promise.resolve().then(e);
}
var Go = "__RC_UTIL_PATH_SPLIT__", gl = function(t) {
  return t.join(Go);
}, Ug = function(t) {
  return t.split(Go);
}, go = "rc-menu-more";
function Xg() {
  var e = c.useState({}), t = N(e, 2), r = t[1], n = c.useRef(/* @__PURE__ */ new Map()), a = c.useRef(/* @__PURE__ */ new Map()), i = c.useState([]), o = N(i, 2), s = o[0], l = o[1], u = c.useRef(0), f = c.useRef(!1), d = function() {
    f.current || r({});
  }, v = c.useCallback(function(S, $) {
    var E = gl($);
    a.current.set(E, S), n.current.set(S, E), u.current += 1;
    var x = u.current;
    Gg(function() {
      x === u.current && d();
    });
  }, []), g = c.useCallback(function(S, $) {
    var E = gl($);
    a.current.delete(E), n.current.delete(S);
  }, []), h = c.useCallback(function(S) {
    l(S);
  }, []), y = c.useCallback(function(S, $) {
    var E = n.current.get(S) || "", x = Ug(E);
    return $ && s.includes(x[0]) && x.unshift(go), x;
  }, [s]), m = c.useCallback(function(S, $) {
    return S.filter(function(E) {
      return E !== void 0;
    }).some(function(E) {
      var x = y(E, !0);
      return x.includes($);
    });
  }, [y]), C = function() {
    var $ = ae(n.current.keys());
    return s.length && $.push(go), $;
  }, p = c.useCallback(function(S) {
    var $ = "".concat(n.current.get(S)).concat(Go), E = /* @__PURE__ */ new Set();
    return ae(a.current.keys()).forEach(function(x) {
      x.startsWith($) && E.add(a.current.get(x));
    }), E;
  }, []);
  return c.useEffect(function() {
    return function() {
      f.current = !0;
    };
  }, []), {
    // Register
    registerPath: v,
    unregisterPath: g,
    refreshOverflowKeys: h,
    // Util
    isSubPathKey: m,
    getKeyPath: y,
    getKeys: C,
    getSubPathKeys: p
  };
}
function kn(e) {
  var t = c.useRef(e);
  t.current = e;
  var r = c.useCallback(function() {
    for (var n, a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(i));
  }, []);
  return e ? r : void 0;
}
var Yg = Math.random().toFixed(5).toString().slice(2), hl = 0;
function Qg(e) {
  var t = sn(e, {
    value: e
  }), r = N(t, 2), n = r[0], a = r[1];
  return c.useEffect(function() {
    hl += 1;
    var i = "".concat(Yg, "-").concat(hl);
    a("rc-menu-uuid-".concat(i));
  }, []), n;
}
function su(e, t, r, n) {
  var a = c.useContext(dr), i = a.activeKey, o = a.onActive, s = a.onInactive, l = {
    active: i === e
  };
  return t || (l.onMouseEnter = function(u) {
    r == null || r({
      key: e,
      domEvent: u
    }), o(e);
  }, l.onMouseLeave = function(u) {
    n == null || n({
      key: e,
      domEvent: u
    }), s(e);
  }), l;
}
function lu(e) {
  var t = c.useContext(dr), r = t.mode, n = t.rtl, a = t.inlineIndent;
  if (r !== "inline")
    return null;
  var i = e;
  return n ? {
    paddingRight: i * a
  } : {
    paddingLeft: i * a
  };
}
function cu(e) {
  var t = e.icon, r = e.props, n = e.children, a;
  return t === null || t === !1 ? null : (typeof t == "function" ? a = /* @__PURE__ */ c.createElement(t, M({}, r)) : typeof t != "boolean" && (a = t), a || n || null);
}
var Zg = ["item"];
function La(e) {
  var t = e.item, r = ze(e, Zg);
  return Object.defineProperty(r, "item", {
    get: function() {
      return Nt(!1, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future."), t;
    }
  }), r;
}
var Jg = ["title", "attribute", "elementRef"], eh = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"], th = ["active"], rh = /* @__PURE__ */ (function(e) {
  Ar(r, e);
  var t = Fr(r);
  function r() {
    return Pt(this, r), t.apply(this, arguments);
  }
  return Rt(r, [{
    key: "render",
    value: function() {
      var a = this.props, i = a.title, o = a.attribute, s = a.elementRef, l = ze(a, Jg), u = Br(l, ["eventKey", "popupClassName", "popupOffset", "onTitleClick"]);
      return Nt(!o, "`attribute` of Menu.Item is deprecated. Please pass attribute directly."), /* @__PURE__ */ c.createElement(xr.Item, fe({}, o, {
        title: typeof i == "string" ? i : void 0
      }, u, {
        ref: s
      }));
    }
  }]), r;
})(c.Component), nh = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var r = e.style, n = e.className, a = e.eventKey;
  e.warnKey;
  var i = e.disabled, o = e.itemIcon, s = e.children, l = e.role, u = e.onMouseEnter, f = e.onMouseLeave, d = e.onClick, v = e.onKeyDown, g = e.onFocus, h = ze(e, eh), y = ru(a), m = c.useContext(dr), C = m.prefixCls, p = m.onItemClick, S = m.disabled, $ = m.overflowDisabled, E = m.itemIcon, x = m.selectedKeys, P = m.onActive, w = c.useContext(Ko), R = w._internalRenderMenuItem, O = "".concat(C, "-item"), I = c.useRef(), F = c.useRef(), A = S || i, k = Zn(t, F), D = aa(a), L = function(B) {
    return {
      key: a,
      // Note: For legacy code is reversed which not like other antd component
      keyPath: ae(D).reverse(),
      item: I.current,
      domEvent: B
    };
  }, j = o || E, H = su(a, A, u, f), K = H.active, W = ze(H, th), X = x.includes(a), G = lu(D.length), U = function(B) {
    if (!A) {
      var Z = L(B);
      d == null || d(La(Z)), p(Z);
    }
  }, b = function(B) {
    if (v == null || v(B), B.which === pt.ENTER) {
      var Z = L(B);
      d == null || d(La(Z)), p(Z);
    }
  }, T = function(B) {
    P(a), g == null || g(B);
  }, z = {};
  e.role === "option" && (z["aria-selected"] = X);
  var V = /* @__PURE__ */ c.createElement(rh, fe({
    ref: I,
    elementRef: k,
    role: l === null ? "none" : l || "menuitem",
    tabIndex: i ? null : -1,
    "data-menu-id": $ && y ? null : y
  }, Br(h, ["extra"]), W, z, {
    component: "li",
    "aria-disabled": i,
    style: M(M({}, G), r),
    className: ne(O, _(_(_({}, "".concat(O, "-active"), K), "".concat(O, "-selected"), X), "".concat(O, "-disabled"), A), n),
    onClick: U,
    onKeyDown: b,
    onFocus: T
  }), s, /* @__PURE__ */ c.createElement(cu, {
    props: M(M({}, e), {}, {
      isSelected: X
    }),
    icon: j
  }));
  return R && (V = R(V, e, {
    selected: X
  })), V;
});
function ah(e, t) {
  var r = e.eventKey, n = Ja(), a = aa(r);
  return c.useEffect(function() {
    if (n)
      return n.registerPath(r, a), function() {
        n.unregisterPath(r, a);
      };
  }, [a]), n ? null : /* @__PURE__ */ c.createElement(nh, fe({}, e, {
    ref: t
  }));
}
const ei = /* @__PURE__ */ c.forwardRef(ah);
var ih = ["className", "children"], oh = function(t, r) {
  var n = t.className, a = t.children, i = ze(t, ih), o = c.useContext(dr), s = o.prefixCls, l = o.mode, u = o.rtl;
  return /* @__PURE__ */ c.createElement("ul", fe({
    className: ne(s, u && "".concat(s, "-rtl"), "".concat(s, "-sub"), "".concat(s, "-").concat(l === "inline" ? "inline" : "vertical"), n),
    role: "menu"
  }, i, {
    "data-menu-list": !0,
    ref: r
  }), a);
}, Uo = /* @__PURE__ */ c.forwardRef(oh);
Uo.displayName = "SubMenuList";
function Xo(e, t) {
  return mn(e).map(function(r, n) {
    if (/* @__PURE__ */ c.isValidElement(r)) {
      var a, i, o = r.key, s = (a = (i = r.props) === null || i === void 0 ? void 0 : i.eventKey) !== null && a !== void 0 ? a : o, l = s == null;
      l && (s = "tmp_key-".concat([].concat(ae(t), [n]).join("-")));
      var u = {
        key: s,
        eventKey: s
      };
      return /* @__PURE__ */ c.cloneElement(r, u);
    }
    return r;
  });
}
var Ot = {
  adjustX: 1,
  adjustY: 1
}, sh = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: Ot
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Ot
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Ot
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Ot
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: Ot
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: Ot
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: Ot
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: Ot
  }
}, lh = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: Ot
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Ot
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Ot
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Ot
  },
  rightTop: {
    points: ["tr", "tl"],
    overflow: Ot
  },
  rightBottom: {
    points: ["br", "bl"],
    overflow: Ot
  },
  leftTop: {
    points: ["tl", "tr"],
    overflow: Ot
  },
  leftBottom: {
    points: ["bl", "br"],
    overflow: Ot
  }
};
function uu(e, t, r) {
  if (t)
    return t;
  if (r)
    return r[e] || r.other;
}
var ch = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
};
function uh(e) {
  var t = e.prefixCls, r = e.visible, n = e.children, a = e.popup, i = e.popupStyle, o = e.popupClassName, s = e.popupOffset, l = e.disabled, u = e.mode, f = e.onVisibleChange, d = c.useContext(dr), v = d.getPopupContainer, g = d.rtl, h = d.subMenuOpenDelay, y = d.subMenuCloseDelay, m = d.builtinPlacements, C = d.triggerSubMenuAction, p = d.forceSubMenuRender, S = d.rootClassName, $ = d.motion, E = d.defaultMotions, x = c.useState(!1), P = N(x, 2), w = P[0], R = P[1], O = M(g ? M({}, lh) : M({}, sh), m), I = ch[u], F = uu(u, $, E), A = c.useRef(F);
  u !== "inline" && (A.current = F);
  var k = M(M({}, A.current), {}, {
    leavedClassName: "".concat(t, "-hidden"),
    removeOnLeave: !1,
    motionAppear: !0
  }), D = c.useRef();
  return c.useEffect(function() {
    return D.current = nr(function() {
      R(r);
    }), function() {
      nr.cancel(D.current);
    };
  }, [r]), /* @__PURE__ */ c.createElement(Yc, {
    prefixCls: t,
    popupClassName: ne("".concat(t, "-popup"), _({}, "".concat(t, "-rtl"), g), o, S),
    stretch: u === "horizontal" ? "minWidth" : null,
    getPopupContainer: v,
    builtinPlacements: O,
    popupPlacement: I,
    popupVisible: w,
    popup: a,
    popupStyle: i,
    popupAlign: s && {
      offset: s
    },
    action: l ? [] : [C],
    mouseEnterDelay: h,
    mouseLeaveDelay: y,
    onPopupVisibleChange: f,
    forceRender: p,
    popupMotion: k,
    fresh: !0
  }, n);
}
function fh(e) {
  var t = e.id, r = e.open, n = e.keyPath, a = e.children, i = "inline", o = c.useContext(dr), s = o.prefixCls, l = o.forceSubMenuRender, u = o.motion, f = o.defaultMotions, d = o.mode, v = c.useRef(!1);
  v.current = d === i;
  var g = c.useState(!v.current), h = N(g, 2), y = h[0], m = h[1], C = v.current ? r : !1;
  c.useEffect(function() {
    v.current && m(!1);
  }, [d]);
  var p = M({}, uu(i, u, f));
  n.length > 1 && (p.motionAppear = !1);
  var S = p.onVisibleChanged;
  return p.onVisibleChanged = function($) {
    return !v.current && !$ && m(!0), S == null ? void 0 : S($);
  }, y ? null : /* @__PURE__ */ c.createElement(Yn, {
    mode: i,
    locked: !v.current
  }, /* @__PURE__ */ c.createElement(ta, fe({
    visible: C
  }, p, {
    forceRender: l,
    removeOnLeave: !1,
    leavedClassName: "".concat(s, "-hidden")
  }), function($) {
    var E = $.className, x = $.style;
    return /* @__PURE__ */ c.createElement(Uo, {
      id: t,
      className: E,
      style: x
    }, a);
  }));
}
var dh = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "popupStyle", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"], vh = ["active"], mh = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var r = e.style, n = e.className, a = e.title, i = e.eventKey;
  e.warnKey;
  var o = e.disabled, s = e.internalPopupClose, l = e.children, u = e.itemIcon, f = e.expandIcon, d = e.popupClassName, v = e.popupOffset, g = e.popupStyle, h = e.onClick, y = e.onMouseEnter, m = e.onMouseLeave, C = e.onTitleClick, p = e.onTitleMouseEnter, S = e.onTitleMouseLeave, $ = ze(e, dh), E = ru(i), x = c.useContext(dr), P = x.prefixCls, w = x.mode, R = x.openKeys, O = x.disabled, I = x.overflowDisabled, F = x.activeKey, A = x.selectedKeys, k = x.itemIcon, D = x.expandIcon, L = x.onItemClick, j = x.onOpenChange, H = x.onActive, K = c.useContext(Ko), W = K._internalRenderSubMenuItem, X = c.useContext(iu), G = X.isSubPathKey, U = aa(), b = "".concat(P, "-submenu"), T = O || o, z = c.useRef(), V = c.useRef(), q = u ?? k, B = f ?? D, Z = R.includes(i), se = !I && Z, oe = G(A, i), xe = su(i, T, p, S), ie = xe.active, Ee = ze(xe, vh), $e = c.useState(!1), He = N($e, 2), qe = He[0], Ne = He[1], ge = function(Ie) {
    T || Ne(Ie);
  }, J = function(Ie) {
    ge(!0), y == null || y({
      key: i,
      domEvent: Ie
    });
  }, ve = function(Ie) {
    ge(!1), m == null || m({
      key: i,
      domEvent: Ie
    });
  }, ye = c.useMemo(function() {
    return ie || (w !== "inline" ? qe || G([F], i) : !1);
  }, [w, ie, F, qe, i, G]), he = lu(U.length), st = function(Ie) {
    T || (C == null || C({
      key: i,
      domEvent: Ie
    }), w === "inline" && j(i, !Z));
  }, _e = kn(function(Te) {
    h == null || h(La(Te)), L(Te);
  }), kt = function(Ie) {
    w !== "inline" && j(i, Ie);
  }, Be = function() {
    H(i);
  }, Le = E && "".concat(E, "-popup"), ft = c.useMemo(function() {
    return /* @__PURE__ */ c.createElement(cu, {
      icon: w !== "horizontal" ? B : void 0,
      props: M(M({}, e), {}, {
        isOpen: se,
        // [Legacy] Not sure why need this mark
        isSubMenu: !0
      })
    }, /* @__PURE__ */ c.createElement("i", {
      className: "".concat(b, "-arrow")
    }));
  }, [w, B, e, se, b]), We = /* @__PURE__ */ c.createElement("div", fe({
    role: "menuitem",
    style: he,
    className: "".concat(b, "-title"),
    tabIndex: T ? null : -1,
    ref: z,
    title: typeof a == "string" ? a : null,
    "data-menu-id": I && E ? null : E,
    "aria-expanded": se,
    "aria-haspopup": !0,
    "aria-controls": Le,
    "aria-disabled": T,
    onClick: st,
    onFocus: Be
  }, Ee), a, ft), nt = c.useRef(w);
  if (w !== "inline" && U.length > 1 ? nt.current = "vertical" : nt.current = w, !I) {
    var bt = nt.current;
    We = /* @__PURE__ */ c.createElement(uh, {
      mode: bt,
      prefixCls: b,
      visible: !s && se && w !== "inline",
      popupClassName: d,
      popupOffset: v,
      popupStyle: g,
      popup: /* @__PURE__ */ c.createElement(
        Yn,
        {
          mode: bt === "horizontal" ? "vertical" : bt
        },
        /* @__PURE__ */ c.createElement(Uo, {
          id: Le,
          ref: V
        }, l)
      ),
      disabled: T,
      onVisibleChange: kt
    }, We);
  }
  var be = /* @__PURE__ */ c.createElement(xr.Item, fe({
    ref: t,
    role: "none"
  }, $, {
    component: "li",
    style: r,
    className: ne(b, "".concat(b, "-").concat(w), n, _(_(_(_({}, "".concat(b, "-open"), se), "".concat(b, "-active"), ye), "".concat(b, "-selected"), oe), "".concat(b, "-disabled"), T)),
    onMouseEnter: J,
    onMouseLeave: ve
  }), We, !I && /* @__PURE__ */ c.createElement(fh, {
    id: Le,
    open: se,
    keyPath: U
  }, l));
  return W && (be = W(be, e, {
    selected: oe,
    active: ye,
    open: se,
    disabled: T
  })), /* @__PURE__ */ c.createElement(Yn, {
    onItemClick: _e,
    mode: w === "horizontal" ? "vertical" : w,
    itemIcon: q,
    expandIcon: B
  }, be);
}), Yo = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var r = e.eventKey, n = e.children, a = aa(r), i = Xo(n, a), o = Ja();
  c.useEffect(function() {
    if (o)
      return o.registerPath(r, a), function() {
        o.unregisterPath(r, a);
      };
  }, [a]);
  var s;
  return o ? s = i : s = /* @__PURE__ */ c.createElement(mh, fe({
    ref: t
  }, e), i), /* @__PURE__ */ c.createElement(au.Provider, {
    value: a
  }, s);
});
function fu(e) {
  var t = e.className, r = e.style, n = c.useContext(dr), a = n.prefixCls, i = Ja();
  return i ? null : /* @__PURE__ */ c.createElement("li", {
    role: "separator",
    className: ne("".concat(a, "-item-divider"), t),
    style: r
  });
}
var gh = ["className", "title", "eventKey", "children"], hh = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var r = e.className, n = e.title;
  e.eventKey;
  var a = e.children, i = ze(e, gh), o = c.useContext(dr), s = o.prefixCls, l = "".concat(s, "-item-group");
  return /* @__PURE__ */ c.createElement("li", fe({
    ref: t,
    role: "presentation"
  }, i, {
    onClick: function(f) {
      return f.stopPropagation();
    },
    className: ne(l, r)
  }), /* @__PURE__ */ c.createElement("div", {
    role: "presentation",
    className: "".concat(l, "-title"),
    title: typeof n == "string" ? n : void 0
  }, n), /* @__PURE__ */ c.createElement("ul", {
    role: "group",
    className: "".concat(l, "-list")
  }, a));
}), du = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var r = e.eventKey, n = e.children, a = aa(r), i = Xo(n, a), o = Ja();
  return o ? i : /* @__PURE__ */ c.createElement(hh, fe({
    ref: t
  }, Br(e, ["warnKey"])), i);
}), ph = ["label", "children", "key", "type", "extra"];
function ho(e, t, r) {
  var n = t.item, a = t.group, i = t.submenu, o = t.divider;
  return (e || []).map(function(s, l) {
    if (s && ce(s) === "object") {
      var u = s, f = u.label, d = u.children, v = u.key, g = u.type, h = u.extra, y = ze(u, ph), m = v ?? "tmp-".concat(l);
      return d || g === "group" ? g === "group" ? /* @__PURE__ */ c.createElement(a, fe({
        key: m
      }, y, {
        title: f
      }), ho(d, t, r)) : /* @__PURE__ */ c.createElement(i, fe({
        key: m
      }, y, {
        title: f
      }), ho(d, t, r)) : g === "divider" ? /* @__PURE__ */ c.createElement(o, fe({
        key: m
      }, y)) : /* @__PURE__ */ c.createElement(n, fe({
        key: m
      }, y, {
        extra: h
      }), f, (!!h || h === 0) && /* @__PURE__ */ c.createElement("span", {
        className: "".concat(r, "-item-extra")
      }, h));
    }
    return null;
  }).filter(function(s) {
    return s;
  });
}
function pl(e, t, r, n, a) {
  var i = e, o = M({
    divider: fu,
    item: ei,
    group: du,
    submenu: Yo
  }, n);
  return t && (i = ho(t, o, a)), Xo(i, r);
}
var yh = ["prefixCls", "rootClassName", "style", "className", "tabIndex", "items", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName", "_internalRenderMenuItem", "_internalRenderSubMenuItem", "_internalComponents"], Dr = [], bh = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var r, n = e, a = n.prefixCls, i = a === void 0 ? "rc-menu" : a, o = n.rootClassName, s = n.style, l = n.className, u = n.tabIndex, f = u === void 0 ? 0 : u, d = n.items, v = n.children, g = n.direction, h = n.id, y = n.mode, m = y === void 0 ? "vertical" : y, C = n.inlineCollapsed, p = n.disabled, S = n.disabledOverflow, $ = n.subMenuOpenDelay, E = $ === void 0 ? 0.1 : $, x = n.subMenuCloseDelay, P = x === void 0 ? 0.1 : x, w = n.forceSubMenuRender, R = n.defaultOpenKeys, O = n.openKeys, I = n.activeKey, F = n.defaultActiveFirst, A = n.selectable, k = A === void 0 ? !0 : A, D = n.multiple, L = D === void 0 ? !1 : D, j = n.defaultSelectedKeys, H = n.selectedKeys, K = n.onSelect, W = n.onDeselect, X = n.inlineIndent, G = X === void 0 ? 24 : X, U = n.motion, b = n.defaultMotions, T = n.triggerSubMenuAction, z = T === void 0 ? "hover" : T, V = n.builtinPlacements, q = n.itemIcon, B = n.expandIcon, Z = n.overflowedIndicator, se = Z === void 0 ? "..." : Z, oe = n.overflowedIndicatorPopupClassName, xe = n.getPopupContainer, ie = n.onClick, Ee = n.onOpenChange, $e = n.onKeyDown;
  n.openAnimation, n.openTransitionName;
  var He = n._internalRenderMenuItem, qe = n._internalRenderSubMenuItem, Ne = n._internalComponents, ge = ze(n, yh), J = c.useMemo(function() {
    return [pl(v, d, Dr, Ne, i), pl(v, d, Dr, {}, i)];
  }, [v, d, Ne]), ve = N(J, 2), ye = ve[0], he = ve[1], st = c.useState(!1), _e = N(st, 2), kt = _e[0], Be = _e[1], Le = c.useRef(), ft = Qg(h), We = g === "rtl", nt = sn(R, {
    value: O,
    postState: function(Me) {
      return Me || Dr;
    }
  }), bt = N(nt, 2), be = bt[0], Te = bt[1], Ie = function(Me) {
    var Ke = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    function Ct() {
      Te(Me), Ee == null || Ee(Me);
    }
    Ke ? Ua.flushSync(Ct) : Ct();
  }, at = c.useState(be), dt = N(at, 2), Gt = dt[0], Ut = dt[1], Lt = c.useRef(!1), Xt = c.useMemo(function() {
    return (m === "inline" || m === "vertical") && C ? ["vertical", C] : [m, !1];
  }, [m, C]), zt = N(Xt, 2), it = zt[0], ke = zt[1], Re = it === "inline", vt = c.useState(it), et = N(vt, 2), me = et[0], Ce = et[1], Oe = c.useState(ke), ot = N(Oe, 2), te = ot[0], re = ot[1];
  c.useEffect(function() {
    Ce(it), re(ke), Lt.current && (Re ? Te(Gt) : Ie(Dr));
  }, [it, ke]);
  var Ae = c.useState(0), Ge = N(Ae, 2), pe = Ge[0], Qe = Ge[1], tt = pe >= ye.length - 1 || me !== "horizontal" || S;
  c.useEffect(function() {
    Re && Ut(be);
  }, [be]), c.useEffect(function() {
    return Lt.current = !0, function() {
      Lt.current = !1;
    };
  }, []);
  var Ye = Xg(), At = Ye.registerPath, Yt = Ye.unregisterPath, Mt = Ye.refreshOverflowKeys, wt = Ye.isSubPathKey, jt = Ye.getKeyPath, xt = Ye.getKeys, Dt = Ye.getSubPathKeys, je = c.useMemo(function() {
    return {
      registerPath: At,
      unregisterPath: Yt
    };
  }, [At, Yt]), Ht = c.useMemo(function() {
    return {
      isSubPathKey: wt
    };
  }, [wt]);
  c.useEffect(function() {
    Mt(tt ? Dr : ye.slice(pe + 1).map(function(Ze) {
      return Ze.key;
    }));
  }, [pe, tt]);
  var yr = sn(I || F && ((r = ye[0]) === null || r === void 0 ? void 0 : r.key), {
    value: I
  }), br = N(yr, 2), de = br[0], ee = br[1], Se = kn(function(Ze) {
    ee(Ze);
  }), Fe = kn(function() {
    ee(void 0);
  });
  c.useImperativeHandle(t, function() {
    return {
      list: Le.current,
      focus: function(Me) {
        var Ke, Ct = xt(), Et = mo(Ct, ft), $r = Et.elements, _r = Et.key2element, xn = Et.element2key, Wr = qo(Le.current, $r), Lr = de ?? (Wr[0] ? xn.get(Wr[0]) : (Ke = ye.find(function(En) {
          return !En.props.disabled;
        })) === null || Ke === void 0 ? void 0 : Ke.key), Cr = _r.get(Lr);
        if (Lr && Cr) {
          var jr;
          Cr == null || (jr = Cr.focus) === null || jr === void 0 || jr.call(Cr, Me);
        }
      }
    };
  });
  var De = sn(j || [], {
    value: H,
    // Legacy convert key to array
    postState: function(Me) {
      return Array.isArray(Me) ? Me : Me == null ? Dr : [Me];
    }
  }), Je = N(De, 2), gt = Je[0], vr = Je[1], or = function(Me) {
    if (k) {
      var Ke = Me.key, Ct = gt.includes(Ke), Et;
      L ? Ct ? Et = gt.filter(function(_r) {
        return _r !== Ke;
      }) : Et = [].concat(ae(gt), [Ke]) : Et = [Ke], vr(Et);
      var $r = M(M({}, Me), {}, {
        selectedKeys: Et
      });
      Ct ? W == null || W($r) : K == null || K($r);
    }
    !L && be.length && me !== "inline" && Ie(Dr);
  }, Qt = kn(function(Ze) {
    ie == null || ie(La(Ze)), or(Ze);
  }), sr = kn(function(Ze, Me) {
    var Ke = be.filter(function(Et) {
      return Et !== Ze;
    });
    if (Me)
      Ke.push(Ze);
    else if (me !== "inline") {
      var Ct = Dt(Ze);
      Ke = Ke.filter(function(Et) {
        return !Ct.has(Et);
      });
    }
    zn(be, Ke, !0) || Ie(Ke, !0);
  }), Ft = function(Me, Ke) {
    var Ct = Ke ?? !be.includes(Me);
    sr(Me, Ct);
  }, Zt = qg(me, de, We, ft, Le, xt, jt, ee, Ft, $e);
  c.useEffect(function() {
    Be(!0);
  }, []);
  var Jt = c.useMemo(function() {
    return {
      _internalRenderMenuItem: He,
      _internalRenderSubMenuItem: qe
    };
  }, [He, qe]), mr = me !== "horizontal" || S ? ye : (
    // Need wrap for overflow dropdown that do not response for open
    ye.map(function(Ze, Me) {
      return (
        // Always wrap provider to avoid sub node re-mount
        /* @__PURE__ */ c.createElement(Yn, {
          key: Ze.key,
          overflowDisabled: Me > pe
        }, Ze)
      );
    })
  ), Nr = /* @__PURE__ */ c.createElement(xr, fe({
    id: h,
    ref: Le,
    prefixCls: "".concat(i, "-overflow"),
    component: "ul",
    itemComponent: ei,
    className: ne(i, "".concat(i, "-root"), "".concat(i, "-").concat(me), l, _(_({}, "".concat(i, "-inline-collapsed"), te), "".concat(i, "-rtl"), We), o),
    dir: g,
    style: s,
    role: "menu",
    tabIndex: f,
    data: mr,
    renderRawItem: function(Me) {
      return Me;
    },
    renderRawRest: function(Me) {
      var Ke = Me.length, Ct = Ke ? ye.slice(-Ke) : null;
      return /* @__PURE__ */ c.createElement(Yo, {
        eventKey: go,
        title: se,
        disabled: tt,
        internalPopupClose: Ke === 0,
        popupClassName: oe
      }, Ct);
    },
    maxCount: me !== "horizontal" || S ? xr.INVALIDATE : xr.RESPONSIVE,
    ssr: "full",
    "data-menu-list": !0,
    onVisibleChange: function(Me) {
      Qe(Me);
    },
    onKeyDown: Zt
  }, ge));
  return /* @__PURE__ */ c.createElement(Ko.Provider, {
    value: Jt
  }, /* @__PURE__ */ c.createElement(eu.Provider, {
    value: ft
  }, /* @__PURE__ */ c.createElement(Yn, {
    prefixCls: i,
    rootClassName: o,
    mode: me,
    openKeys: be,
    rtl: We,
    disabled: p,
    motion: kt ? U : null,
    defaultMotions: kt ? b : null,
    activeKey: de,
    onActive: Se,
    onInactive: Fe,
    selectedKeys: gt,
    inlineIndent: G,
    subMenuOpenDelay: E,
    subMenuCloseDelay: P,
    forceSubMenuRender: w,
    builtinPlacements: V,
    triggerSubMenuAction: z,
    getPopupContainer: xe,
    itemIcon: q,
    expandIcon: B,
    onItemClick: Qt,
    onOpenChange: sr
  }, /* @__PURE__ */ c.createElement(iu.Provider, {
    value: Ht
  }, Nr), /* @__PURE__ */ c.createElement("div", {
    style: {
      display: "none"
    },
    "aria-hidden": !0
  }, /* @__PURE__ */ c.createElement(nu.Provider, {
    value: je
  }, he)))));
}), ia = bh;
ia.Item = ei;
ia.SubMenu = Yo;
ia.ItemGroup = du;
ia.Divider = fu;
var Ch = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var r = e.prefixCls, n = e.id, a = e.tabs, i = e.locale, o = e.mobile, s = e.more, l = s === void 0 ? {} : s, u = e.style, f = e.className, d = e.editable, v = e.tabBarGutter, g = e.rtl, h = e.removeAriaLabel, y = e.onTabClick, m = e.getPopupContainer, C = e.popupClassName, p = c.useState(!1), S = N(p, 2), $ = S[0], E = S[1], x = c.useState(null), P = N(x, 2), w = P[0], R = P[1], O = l.icon, I = O === void 0 ? "More" : O, F = "".concat(n, "-more-popup"), A = "".concat(r, "-dropdown"), k = w !== null ? "".concat(F, "-").concat(w) : null, D = i == null ? void 0 : i.dropdownAriaLabel;
  function L(U, b) {
    U.preventDefault(), U.stopPropagation(), d.onEdit("remove", {
      key: b,
      event: U
    });
  }
  var j = /* @__PURE__ */ c.createElement(ia, {
    onClick: function(b) {
      var T = b.key, z = b.domEvent;
      y(T, z), E(!1);
    },
    prefixCls: "".concat(A, "-menu"),
    id: F,
    tabIndex: -1,
    role: "listbox",
    "aria-activedescendant": k,
    selectedKeys: [w],
    "aria-label": D !== void 0 ? D : "expanded dropdown"
  }, a.map(function(U) {
    var b = U.closable, T = U.disabled, z = U.closeIcon, V = U.key, q = U.label, B = Wo(b, z, d, T);
    return /* @__PURE__ */ c.createElement(ei, {
      key: V,
      id: "".concat(F, "-").concat(V),
      role: "option",
      "aria-controls": n && "".concat(n, "-panel-").concat(V),
      disabled: T
    }, /* @__PURE__ */ c.createElement("span", null, q), B && /* @__PURE__ */ c.createElement("button", {
      type: "button",
      "aria-label": h || "remove",
      tabIndex: 0,
      className: "".concat(A, "-menu-item-remove"),
      onClick: function(se) {
        se.stopPropagation(), L(se, V);
      }
    }, z || d.removeIcon || "×"));
  }));
  function H(U) {
    for (var b = a.filter(function(B) {
      return !B.disabled;
    }), T = b.findIndex(function(B) {
      return B.key === w;
    }) || 0, z = b.length, V = 0; V < z; V += 1) {
      T = (T + U + z) % z;
      var q = b[T];
      if (!q.disabled) {
        R(q.key);
        return;
      }
    }
  }
  function K(U) {
    var b = U.which;
    if (!$) {
      [pt.DOWN, pt.SPACE, pt.ENTER].includes(b) && (E(!0), U.preventDefault());
      return;
    }
    switch (b) {
      case pt.UP:
        H(-1), U.preventDefault();
        break;
      case pt.DOWN:
        H(1), U.preventDefault();
        break;
      case pt.ESC:
        E(!1);
        break;
      case pt.SPACE:
      case pt.ENTER:
        w !== null && y(w, U);
        break;
    }
  }
  c.useEffect(function() {
    var U = document.getElementById(k);
    U && U.scrollIntoView && U.scrollIntoView(!1);
  }, [w]), c.useEffect(function() {
    $ || R(null);
  }, [$]);
  var W = _({}, g ? "marginRight" : "marginLeft", v);
  a.length || (W.visibility = "hidden", W.order = 1);
  var X = ne(_({}, "".concat(A, "-rtl"), g)), G = o ? null : /* @__PURE__ */ c.createElement(Pg, fe({
    prefixCls: A,
    overlay: j,
    visible: a.length ? $ : !1,
    onVisibleChange: E,
    overlayClassName: ne(X, C),
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    getPopupContainer: m
  }, l), /* @__PURE__ */ c.createElement("button", {
    type: "button",
    className: "".concat(r, "-nav-more"),
    style: W,
    "aria-haspopup": "listbox",
    "aria-controls": F,
    id: "".concat(n, "-more"),
    "aria-expanded": $,
    onKeyDown: K
  }, I));
  return /* @__PURE__ */ c.createElement("div", {
    className: ne("".concat(r, "-nav-operations"), f),
    style: u,
    ref: t
  }, G, /* @__PURE__ */ c.createElement(qc, {
    prefixCls: r,
    locale: i,
    editable: d
  }));
});
const Sh = /* @__PURE__ */ c.memo(Ch, function(e, t) {
  return (
    // https://github.com/ant-design/ant-design/issues/32544
    // We'd better remove syntactic sugar in `rc-menu` since this has perf issue
    t.tabMoving
  );
});
var wh = function(t) {
  var r = t.prefixCls, n = t.id, a = t.active, i = t.focus, o = t.tab, s = o.key, l = o.label, u = o.disabled, f = o.closeIcon, d = o.icon, v = t.closable, g = t.renderWrapper, h = t.removeAriaLabel, y = t.editable, m = t.onClick, C = t.onFocus, p = t.onBlur, S = t.onKeyDown, $ = t.onMouseDown, E = t.onMouseUp, x = t.style, P = t.tabCount, w = t.currentPosition, R = "".concat(r, "-tab"), O = Wo(v, f, y, u);
  function I(L) {
    u || m(L);
  }
  function F(L) {
    L.preventDefault(), L.stopPropagation(), y.onEdit("remove", {
      key: s,
      event: L
    });
  }
  var A = c.useMemo(function() {
    return d && typeof l == "string" ? /* @__PURE__ */ c.createElement("span", null, l) : l;
  }, [l, d]), k = c.useRef(null);
  c.useEffect(function() {
    i && k.current && k.current.focus();
  }, [i]);
  var D = /* @__PURE__ */ c.createElement("div", {
    key: s,
    "data-node-key": Kc(s),
    className: ne(R, _(_(_(_({}, "".concat(R, "-with-remove"), O), "".concat(R, "-active"), a), "".concat(R, "-disabled"), u), "".concat(R, "-focus"), i)),
    style: x,
    onClick: I
  }, /* @__PURE__ */ c.createElement("div", {
    ref: k,
    role: "tab",
    "aria-selected": a,
    id: n && "".concat(n, "-tab-").concat(s),
    className: "".concat(R, "-btn"),
    "aria-controls": n && "".concat(n, "-panel-").concat(s),
    "aria-disabled": u,
    tabIndex: u ? null : a ? 0 : -1,
    onClick: function(j) {
      j.stopPropagation(), I(j);
    },
    onKeyDown: S,
    onMouseDown: $,
    onMouseUp: E,
    onFocus: C,
    onBlur: p
  }, i && /* @__PURE__ */ c.createElement("div", {
    "aria-live": "polite",
    style: {
      width: 0,
      height: 0,
      position: "absolute",
      overflow: "hidden",
      opacity: 0
    }
  }, "Tab ".concat(w, " of ").concat(P)), d && /* @__PURE__ */ c.createElement("span", {
    className: "".concat(R, "-icon")
  }, d), l && A), O && /* @__PURE__ */ c.createElement("button", {
    type: "button",
    role: "tab",
    "aria-label": h || "remove",
    tabIndex: a ? 0 : -1,
    className: "".concat(R, "-remove"),
    onClick: function(j) {
      j.stopPropagation(), F(j);
    }
  }, f || y.removeIcon || "×"));
  return g ? g(D) : D;
}, xh = function(t, r) {
  var n = t.offsetWidth, a = t.offsetHeight, i = t.offsetTop, o = t.offsetLeft, s = t.getBoundingClientRect(), l = s.width, u = s.height, f = s.left, d = s.top;
  return Math.abs(l - n) < 1 ? [l, u, f - r.left, d - r.top] : [n, a, o, i];
}, Zr = function(t) {
  var r = t.current || {}, n = r.offsetWidth, a = n === void 0 ? 0 : n, i = r.offsetHeight, o = i === void 0 ? 0 : i;
  if (t.current) {
    var s = t.current.getBoundingClientRect(), l = s.width, u = s.height;
    if (Math.abs(l - a) < 1)
      return [l, u];
  }
  return [a, o];
}, ba = function(t, r) {
  return t[r ? 0 : 1];
}, yl = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var r = e.className, n = e.style, a = e.id, i = e.animated, o = e.activeKey, s = e.rtl, l = e.extra, u = e.editable, f = e.locale, d = e.tabPosition, v = e.tabBarGutter, g = e.children, h = e.onTabClick, y = e.onTabScroll, m = e.indicator, C = c.useContext(Qa), p = C.prefixCls, S = C.tabs, $ = c.useRef(null), E = c.useRef(null), x = c.useRef(null), P = c.useRef(null), w = c.useRef(null), R = c.useRef(null), O = c.useRef(null), I = d === "top" || d === "bottom", F = Us(0, function(de, ee) {
    I && y && y({
      direction: de > ee ? "left" : "right"
    });
  }), A = N(F, 2), k = A[0], D = A[1], L = Us(0, function(de, ee) {
    !I && y && y({
      direction: de > ee ? "top" : "bottom"
    });
  }), j = N(L, 2), H = j[0], K = j[1], W = c.useState([0, 0]), X = N(W, 2), G = X[0], U = X[1], b = c.useState([0, 0]), T = N(b, 2), z = T[0], V = T[1], q = c.useState([0, 0]), B = N(q, 2), Z = B[0], se = B[1], oe = c.useState([0, 0]), xe = N(oe, 2), ie = xe[0], Ee = xe[1], $e = Um(/* @__PURE__ */ new Map()), He = N($e, 2), qe = He[0], Ne = He[1], ge = Km(S, qe, z[0]), J = ba(G, I), ve = ba(z, I), ye = ba(Z, I), he = ba(ie, I), st = Math.floor(J) < Math.floor(ve + ye), _e = st ? J - he : J - ye, kt = "".concat(p, "-nav-operations-hidden"), Be = 0, Le = 0;
  I && s ? (Be = 0, Le = Math.max(0, ve - _e)) : (Be = Math.min(0, _e - ve), Le = 0);
  function ft(de) {
    return de < Be ? Be : de > Le ? Le : de;
  }
  var We = c.useRef(null), nt = c.useState(), bt = N(nt, 2), be = bt[0], Te = bt[1];
  function Ie() {
    Te(Date.now());
  }
  function at() {
    We.current && clearTimeout(We.current);
  }
  Gm(P, function(de, ee) {
    function Se(Fe, De) {
      Fe(function(Je) {
        var gt = ft(Je + De);
        return gt;
      });
    }
    return st ? (I ? Se(D, de) : Se(K, ee), at(), Ie(), !0) : !1;
  }), c.useEffect(function() {
    return at(), be && (We.current = setTimeout(function() {
      Te(0);
    }, 100)), at;
  }, [be]);
  var dt = Xm(
    ge,
    // Container
    _e,
    // Transform
    I ? k : H,
    // Tabs
    ve,
    // Add
    ye,
    // Operation
    he,
    M(M({}, e), {}, {
      tabs: S
    })
  ), Gt = N(dt, 2), Ut = Gt[0], Lt = Gt[1], Xt = Vt(function() {
    var de = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : o, ee = ge.get(de) || {
      width: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0
    };
    if (I) {
      var Se = k;
      s ? ee.right < k ? Se = ee.right : ee.right + ee.width > k + _e && (Se = ee.right + ee.width - _e) : ee.left < -k ? Se = -ee.left : ee.left + ee.width > -k + _e && (Se = -(ee.left + ee.width - _e)), K(0), D(ft(Se));
    } else {
      var Fe = H;
      ee.top < -H ? Fe = -ee.top : ee.top + ee.height > -H + _e && (Fe = -(ee.top + ee.height - _e)), D(0), K(ft(Fe));
    }
  }), zt = c.useState(), it = N(zt, 2), ke = it[0], Re = it[1], vt = c.useState(!1), et = N(vt, 2), me = et[0], Ce = et[1], Oe = S.filter(function(de) {
    return !de.disabled;
  }).map(function(de) {
    return de.key;
  }), ot = function(ee) {
    var Se = Oe.indexOf(ke || o), Fe = Oe.length, De = (Se + ee + Fe) % Fe, Je = Oe[De];
    Re(Je);
  }, te = function(ee, Se) {
    var Fe = Oe.indexOf(ee), De = S.find(function(gt) {
      return gt.key === ee;
    }), Je = Wo(De == null ? void 0 : De.closable, De == null ? void 0 : De.closeIcon, u, De == null ? void 0 : De.disabled);
    Je && (Se.preventDefault(), Se.stopPropagation(), u.onEdit("remove", {
      key: ee,
      event: Se
    }), Fe === Oe.length - 1 ? ot(-1) : ot(1));
  }, re = function(ee, Se) {
    Ce(!0), Se.button === 1 && te(ee, Se);
  }, Ae = function(ee) {
    var Se = ee.code, Fe = s && I, De = Oe[0], Je = Oe[Oe.length - 1];
    switch (Se) {
      // LEFT
      case "ArrowLeft": {
        I && ot(Fe ? 1 : -1);
        break;
      }
      // RIGHT
      case "ArrowRight": {
        I && ot(Fe ? -1 : 1);
        break;
      }
      // UP
      case "ArrowUp": {
        ee.preventDefault(), I || ot(-1);
        break;
      }
      // DOWN
      case "ArrowDown": {
        ee.preventDefault(), I || ot(1);
        break;
      }
      // HOME
      case "Home": {
        ee.preventDefault(), Re(De);
        break;
      }
      // END
      case "End": {
        ee.preventDefault(), Re(Je);
        break;
      }
      // Enter & Space
      case "Enter":
      case "Space": {
        ee.preventDefault(), h(ke ?? o, ee);
        break;
      }
      // Backspace
      case "Backspace":
      case "Delete": {
        te(ke, ee);
        break;
      }
    }
  }, Ge = {};
  I ? Ge[s ? "marginRight" : "marginLeft"] = v : Ge.marginTop = v;
  var pe = S.map(function(de, ee) {
    var Se = de.key;
    return /* @__PURE__ */ c.createElement(wh, {
      id: a,
      prefixCls: p,
      key: Se,
      tab: de,
      style: ee === 0 ? void 0 : Ge,
      closable: de.closable,
      editable: u,
      active: Se === o,
      focus: Se === ke,
      renderWrapper: g,
      removeAriaLabel: f == null ? void 0 : f.removeAriaLabel,
      tabCount: Oe.length,
      currentPosition: ee + 1,
      onClick: function(De) {
        h(Se, De);
      },
      onKeyDown: Ae,
      onFocus: function() {
        me || Re(Se), Xt(Se), Ie(), P.current && (s || (P.current.scrollLeft = 0), P.current.scrollTop = 0);
      },
      onBlur: function() {
        Re(void 0);
      },
      onMouseDown: function(De) {
        return re(Se, De);
      },
      onMouseUp: function() {
        Ce(!1);
      }
    });
  }), Qe = function() {
    return Ne(function() {
      var ee, Se = /* @__PURE__ */ new Map(), Fe = (ee = w.current) === null || ee === void 0 ? void 0 : ee.getBoundingClientRect();
      return S.forEach(function(De) {
        var Je, gt = De.key, vr = (Je = w.current) === null || Je === void 0 ? void 0 : Je.querySelector('[data-node-key="'.concat(Kc(gt), '"]'));
        if (vr) {
          var or = xh(vr, Fe), Qt = N(or, 4), sr = Qt[0], Ft = Qt[1], Zt = Qt[2], Jt = Qt[3];
          Se.set(gt, {
            width: sr,
            height: Ft,
            left: Zt,
            top: Jt
          });
        }
      }), Se;
    });
  };
  c.useEffect(function() {
    Qe();
  }, [S.map(function(de) {
    return de.key;
  }).join("_")]);
  var tt = Wc(function() {
    var de = Zr($), ee = Zr(E), Se = Zr(x);
    U([de[0] - ee[0] - Se[0], de[1] - ee[1] - Se[1]]);
    var Fe = Zr(O);
    se(Fe);
    var De = Zr(R);
    Ee(De);
    var Je = Zr(w);
    V([Je[0] - Fe[0], Je[1] - Fe[1]]), Qe();
  }), Ye = S.slice(0, Ut), At = S.slice(Lt + 1), Yt = [].concat(ae(Ye), ae(At)), Mt = ge.get(o), wt = Wm({
    activeTabOffset: Mt,
    horizontal: I,
    indicator: m,
    rtl: s
  }), jt = wt.style;
  c.useEffect(function() {
    Xt();
  }, [o, Be, Le, Zs(Mt), Zs(ge), I]), c.useEffect(function() {
    tt();
  }, [s]);
  var xt = !!Yt.length, Dt = "".concat(p, "-nav-wrap"), je, Ht, yr, br;
  return I ? s ? (Ht = k > 0, je = k !== Le) : (je = k < 0, Ht = k !== Be) : (yr = H < 0, br = H !== Be), /* @__PURE__ */ c.createElement(kr, {
    onResize: tt
  }, /* @__PURE__ */ c.createElement("div", {
    ref: Zn(t, $),
    role: "tablist",
    "aria-orientation": I ? "horizontal" : "vertical",
    className: ne("".concat(p, "-nav"), r),
    style: n,
    onKeyDown: function() {
      Ie();
    }
  }, /* @__PURE__ */ c.createElement(Js, {
    ref: E,
    position: "left",
    extra: l,
    prefixCls: p
  }), /* @__PURE__ */ c.createElement(kr, {
    onResize: tt
  }, /* @__PURE__ */ c.createElement("div", {
    className: ne(Dt, _(_(_(_({}, "".concat(Dt, "-ping-left"), je), "".concat(Dt, "-ping-right"), Ht), "".concat(Dt, "-ping-top"), yr), "".concat(Dt, "-ping-bottom"), br)),
    ref: P
  }, /* @__PURE__ */ c.createElement(kr, {
    onResize: tt
  }, /* @__PURE__ */ c.createElement("div", {
    ref: w,
    className: "".concat(p, "-nav-list"),
    style: {
      transform: "translate(".concat(k, "px, ").concat(H, "px)"),
      transition: be ? "none" : void 0
    }
  }, pe, /* @__PURE__ */ c.createElement(qc, {
    ref: O,
    prefixCls: p,
    locale: f,
    editable: u,
    style: M(M({}, pe.length === 0 ? void 0 : Ge), {}, {
      visibility: xt ? "hidden" : null
    })
  }), /* @__PURE__ */ c.createElement("div", {
    className: ne("".concat(p, "-ink-bar"), _({}, "".concat(p, "-ink-bar-animated"), i.inkBar)),
    style: jt
  }))))), /* @__PURE__ */ c.createElement(Sh, fe({}, e, {
    removeAriaLabel: f == null ? void 0 : f.removeAriaLabel,
    ref: R,
    prefixCls: p,
    tabs: Yt,
    className: !xt && kt,
    tabMoving: !!be
  })), /* @__PURE__ */ c.createElement(Js, {
    ref: x,
    position: "right",
    extra: l,
    prefixCls: p
  })));
}), vu = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var r = e.prefixCls, n = e.className, a = e.style, i = e.id, o = e.active, s = e.tabKey, l = e.children;
  return /* @__PURE__ */ c.createElement("div", {
    id: i && "".concat(i, "-panel-").concat(s),
    role: "tabpanel",
    tabIndex: o ? 0 : -1,
    "aria-labelledby": i && "".concat(i, "-tab-").concat(s),
    "aria-hidden": !o,
    style: a,
    className: ne(r, o && "".concat(r, "-active"), n),
    ref: t
  }, l);
}), Eh = ["renderTabBar"], $h = ["label", "key"], _h = function(t) {
  var r = t.renderTabBar, n = ze(t, Eh), a = c.useContext(Qa), i = a.tabs;
  if (r) {
    var o = M(M({}, n), {}, {
      // Legacy support. We do not use this actually
      panes: i.map(function(s) {
        var l = s.label, u = s.key, f = ze(s, $h);
        return /* @__PURE__ */ c.createElement(vu, fe({
          tab: l,
          key: u,
          tabKey: u
        }, f));
      })
    });
    return r(o, yl);
  }
  return /* @__PURE__ */ c.createElement(yl, n);
}, Ph = ["key", "forceRender", "style", "className", "destroyInactiveTabPane"], Rh = function(t) {
  var r = t.id, n = t.activeKey, a = t.animated, i = t.tabPosition, o = t.destroyInactiveTabPane, s = c.useContext(Qa), l = s.prefixCls, u = s.tabs, f = a.tabPane, d = "".concat(l, "-tabpane");
  return /* @__PURE__ */ c.createElement("div", {
    className: ne("".concat(l, "-content-holder"))
  }, /* @__PURE__ */ c.createElement("div", {
    className: ne("".concat(l, "-content"), "".concat(l, "-content-").concat(i), _({}, "".concat(l, "-content-animated"), f))
  }, u.map(function(v) {
    var g = v.key, h = v.forceRender, y = v.style, m = v.className, C = v.destroyInactiveTabPane, p = ze(v, Ph), S = g === n;
    return /* @__PURE__ */ c.createElement(ta, fe({
      key: g,
      visible: S,
      forceRender: h,
      removeOnLeave: !!(o || C),
      leavedClassName: "".concat(d, "-hidden")
    }, a.tabPaneMotion), function($, E) {
      var x = $.style, P = $.className;
      return /* @__PURE__ */ c.createElement(vu, fe({}, p, {
        prefixCls: d,
        id: r,
        tabKey: g,
        animated: f,
        active: S,
        style: M(M({}, y), x),
        className: ne(m, P),
        ref: E
      }));
    });
  })));
};
function Mh() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    inkBar: !0,
    tabPane: !1
  }, t;
  return e === !1 ? t = {
    inkBar: !1,
    tabPane: !1
  } : e === !0 ? t = {
    inkBar: !0,
    tabPane: !1
  } : t = M({
    inkBar: !0
  }, ce(e) === "object" ? e : {}), t.tabPaneMotion && t.tabPane === void 0 && (t.tabPane = !0), !t.tabPaneMotion && t.tabPane && (t.tabPane = !1), t;
}
var Th = ["id", "prefixCls", "className", "items", "direction", "activeKey", "defaultActiveKey", "editable", "animated", "tabPosition", "tabBarGutter", "tabBarStyle", "tabBarExtraContent", "locale", "more", "destroyInactiveTabPane", "renderTabBar", "onChange", "onTabClick", "onTabScroll", "getPopupContainer", "popupClassName", "indicator"], bl = 0, Oh = /* @__PURE__ */ c.forwardRef(function(e, t) {
  var r = e.id, n = e.prefixCls, a = n === void 0 ? "rc-tabs" : n, i = e.className, o = e.items, s = e.direction, l = e.activeKey, u = e.defaultActiveKey, f = e.editable, d = e.animated, v = e.tabPosition, g = v === void 0 ? "top" : v, h = e.tabBarGutter, y = e.tabBarStyle, m = e.tabBarExtraContent, C = e.locale, p = e.more, S = e.destroyInactiveTabPane, $ = e.renderTabBar, E = e.onChange, x = e.onTabClick, P = e.onTabScroll, w = e.getPopupContainer, R = e.popupClassName, O = e.indicator, I = ze(e, Th), F = c.useMemo(function() {
    return (o || []).filter(function(ie) {
      return ie && ce(ie) === "object" && "key" in ie;
    });
  }, [o]), A = s === "rtl", k = Mh(d), D = c.useState(!1), L = N(D, 2), j = L[0], H = L[1];
  c.useEffect(function() {
    H(Lc());
  }, []);
  var K = sn(function() {
    var ie;
    return (ie = F[0]) === null || ie === void 0 ? void 0 : ie.key;
  }, {
    value: l,
    defaultValue: u
  }), W = N(K, 2), X = W[0], G = W[1], U = c.useState(function() {
    return F.findIndex(function(ie) {
      return ie.key === X;
    });
  }), b = N(U, 2), T = b[0], z = b[1];
  c.useEffect(function() {
    var ie = F.findIndex(function($e) {
      return $e.key === X;
    });
    if (ie === -1) {
      var Ee;
      ie = Math.max(0, Math.min(T, F.length - 1)), G((Ee = F[ie]) === null || Ee === void 0 ? void 0 : Ee.key);
    }
    z(ie);
  }, [F.map(function(ie) {
    return ie.key;
  }).join("_"), X, T]);
  var V = sn(null, {
    value: r
  }), q = N(V, 2), B = q[0], Z = q[1];
  c.useEffect(function() {
    r || (Z("rc-tabs-".concat(bl)), bl += 1);
  }, []);
  function se(ie, Ee) {
    x == null || x(ie, Ee);
    var $e = ie !== X;
    G(ie), $e && (E == null || E(ie));
  }
  var oe = {
    id: B,
    activeKey: X,
    animated: k,
    tabPosition: g,
    rtl: A,
    mobile: j
  }, xe = M(M({}, oe), {}, {
    editable: f,
    locale: C,
    more: p,
    tabBarGutter: h,
    onTabClick: se,
    onTabScroll: P,
    extra: m,
    style: y,
    panes: null,
    getPopupContainer: w,
    popupClassName: R,
    indicator: O
  });
  return /* @__PURE__ */ c.createElement(Qa.Provider, {
    value: {
      tabs: F,
      prefixCls: a
    }
  }, /* @__PURE__ */ c.createElement("div", fe({
    ref: t,
    id: r,
    className: ne(a, "".concat(a, "-").concat(g), _(_(_({}, "".concat(a, "-mobile"), j), "".concat(a, "-editable"), f), "".concat(a, "-rtl"), A), i)
  }, I), /* @__PURE__ */ c.createElement(_h, fe({}, xe, {
    renderTabBar: $
  })), /* @__PURE__ */ c.createElement(Rh, fe({
    destroyInactiveTabPane: S
  }, oe, {
    animated: k
  }))));
});
const Ih = (e) => {
  const [, , , , t] = Ga();
  return t ? `${e}-css-var` : "";
}, kh = (e, t, r) => `${e}-${t}`, Ah = {
  motionAppear: !1,
  motionEnter: !0,
  motionLeave: !0
};
function Fh(e, t = {
  inkBar: !0,
  tabPane: !1
}) {
  let r;
  return t === !1 ? r = {
    inkBar: !1,
    tabPane: !1
  } : t === !0 ? r = {
    inkBar: !0,
    tabPane: !0
  } : r = Object.assign({
    inkBar: !0
  }, typeof t == "object" ? t : {}), r.tabPane && (r.tabPaneMotion = Object.assign(Object.assign({}, Ah), {
    motionName: kh(e, "switch")
  })), r;
}
var Nh = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function Lh(e) {
  return e.filter((t) => t);
}
function jh(e, t) {
  if (e)
    return e.map((n) => {
      var a;
      const i = (a = n.destroyOnHidden) !== null && a !== void 0 ? a : n.destroyInactiveTabPane;
      return Object.assign(Object.assign({}, n), {
        // TODO: In the future, destroyInactiveTabPane in rc-tabs needs to be upgrade to destroyOnHidden
        destroyInactiveTabPane: i
      });
    });
  const r = mn(t).map((n) => {
    if (/* @__PURE__ */ c.isValidElement(n)) {
      const {
        key: a,
        props: i
      } = n, o = i || {}, {
        tab: s
      } = o, l = Nh(o, ["tab"]);
      return Object.assign(Object.assign({
        key: String(a)
      }, l), {
        label: s
      });
    }
    return null;
  });
  return Lh(r);
}
const Dh = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), Vh = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), zh = (e, t, r, n, a = !1) => {
  const i = a ? "&" : "";
  return {
    [`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]: Object.assign(Object.assign({}, Dh(n)), {
      animationPlayState: "paused"
    }),
    [`${i}${e}-leave`]: Object.assign(Object.assign({}, Vh(n)), {
      animationPlayState: "paused"
    }),
    [`
      ${i}${e}-enter${e}-enter-active,
      ${i}${e}-appear${e}-appear-active
    `]: {
      animationName: t,
      animationPlayState: "running"
    },
    [`${i}${e}-leave${e}-leave-active`]: {
      animationName: r,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, Hh = new Er("antSlideUpIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), Bh = new Er("antSlideUpOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), Wh = new Er("antSlideDownIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  }
}), Kh = new Er("antSlideDownOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  }
}), qh = new Er("antSlideLeftIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), Gh = new Er("antSlideLeftOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), Uh = new Er("antSlideRightIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  }
}), Xh = new Er("antSlideRightOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  }
}), Yh = {
  "slide-up": {
    inKeyframes: Hh,
    outKeyframes: Bh
  },
  "slide-down": {
    inKeyframes: Wh,
    outKeyframes: Kh
  },
  "slide-left": {
    inKeyframes: qh,
    outKeyframes: Gh
  },
  "slide-right": {
    inKeyframes: Uh,
    outKeyframes: Xh
  }
}, Cl = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: a,
    outKeyframes: i
  } = Yh[t];
  return [zh(n, a, i, e.motionDurationMid), {
    [`
      ${n}-enter,
      ${n}-appear
    `]: {
      transform: "scale(0)",
      transformOrigin: "0% 0%",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutQuint,
      "&-prepare": {
        transform: "scale(1)"
      }
    },
    [`${n}-leave`]: {
      animationTimingFunction: e.motionEaseInQuint
    }
  }];
}, Qh = (e) => {
  const {
    componentCls: t,
    motionDurationSlow: r
  } = e;
  return [
    {
      [t]: {
        [`${t}-switch`]: {
          "&-appear, &-enter": {
            transition: "none",
            "&-start": {
              opacity: 0
            },
            "&-active": {
              opacity: 1,
              transition: `opacity ${r}`
            }
          },
          "&-leave": {
            position: "absolute",
            transition: "none",
            inset: 0,
            "&-start": {
              opacity: 1
            },
            "&-active": {
              opacity: 0,
              transition: `opacity ${r}`
            }
          }
        }
      }
    },
    // Follow code may reuse in other components
    [Cl(e, "slide-up"), Cl(e, "slide-down")]
  ];
}, Zh = (e) => {
  const {
    componentCls: t,
    tabsCardPadding: r,
    cardBg: n,
    cardGutter: a,
    colorBorderSecondary: i,
    itemSelectedColor: o
  } = e;
  return {
    [`${t}-card`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        [`${t}-tab`]: {
          margin: 0,
          padding: r,
          background: n,
          border: `${Y(e.lineWidth)} ${e.lineType} ${i}`,
          transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`
        },
        [`${t}-tab-active`]: {
          color: o,
          background: e.colorBgContainer
        },
        [`${t}-tab-focus:has(${t}-tab-btn:focus-visible)`]: Vo(e, -3),
        [`& ${t}-tab${t}-tab-focus ${t}-tab-btn:focus-visible`]: {
          outline: "none"
        },
        [`${t}-ink-bar`]: {
          visibility: "hidden"
        }
      },
      // ========================== Top & Bottom ==========================
      [`&${t}-top, &${t}-bottom`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab + ${t}-tab`]: {
            marginLeft: {
              _skip_check_: !0,
              value: Y(a)
            }
          }
        }
      },
      [`&${t}-top`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            borderRadius: `${Y(e.borderRadiusLG)} ${Y(e.borderRadiusLG)} 0 0`
          },
          [`${t}-tab-active`]: {
            borderBottomColor: e.colorBgContainer
          }
        }
      },
      [`&${t}-bottom`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            borderRadius: `0 0 ${Y(e.borderRadiusLG)} ${Y(e.borderRadiusLG)}`
          },
          [`${t}-tab-active`]: {
            borderTopColor: e.colorBgContainer
          }
        }
      },
      // ========================== Left & Right ==========================
      [`&${t}-left, &${t}-right`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab + ${t}-tab`]: {
            marginTop: Y(a)
          }
        }
      },
      [`&${t}-left`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `${Y(e.borderRadiusLG)} 0 0 ${Y(e.borderRadiusLG)}`
            }
          },
          [`${t}-tab-active`]: {
            borderRightColor: {
              _skip_check_: !0,
              value: e.colorBgContainer
            }
          }
        }
      },
      [`&${t}-right`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `0 ${Y(e.borderRadiusLG)} ${Y(e.borderRadiusLG)} 0`
            }
          },
          [`${t}-tab-active`]: {
            borderLeftColor: {
              _skip_check_: !0,
              value: e.colorBgContainer
            }
          }
        }
      }
    }
  };
}, Jh = (e) => {
  const {
    componentCls: t,
    itemHoverColor: r,
    dropdownEdgeChildVerticalPadding: n
  } = e;
  return {
    [`${t}-dropdown`]: Object.assign(Object.assign({}, jo(e)), {
      position: "absolute",
      top: -9999,
      left: {
        _skip_check_: !0,
        value: -9999
      },
      zIndex: e.zIndexPopup,
      display: "block",
      "&-hidden": {
        display: "none"
      },
      [`${t}-dropdown-menu`]: {
        maxHeight: e.tabsDropdownHeight,
        margin: 0,
        padding: `${Y(n)} 0`,
        overflowX: "hidden",
        overflowY: "auto",
        textAlign: {
          _skip_check_: !0,
          value: "left"
        },
        listStyleType: "none",
        backgroundColor: e.colorBgContainer,
        backgroundClip: "padding-box",
        borderRadius: e.borderRadiusLG,
        outline: "none",
        boxShadow: e.boxShadowSecondary,
        "&-item": Object.assign(Object.assign({}, Lo), {
          display: "flex",
          alignItems: "center",
          minWidth: e.tabsDropdownWidth,
          margin: 0,
          padding: `${Y(e.paddingXXS)} ${Y(e.paddingSM)}`,
          color: e.colorText,
          fontWeight: "normal",
          fontSize: e.fontSize,
          lineHeight: e.lineHeight,
          cursor: "pointer",
          transition: `all ${e.motionDurationSlow}`,
          "> span": {
            flex: 1,
            whiteSpace: "nowrap"
          },
          "&-remove": {
            flex: "none",
            marginLeft: {
              _skip_check_: !0,
              value: e.marginSM
            },
            color: e.colorIcon,
            fontSize: e.fontSizeSM,
            background: "transparent",
            border: 0,
            cursor: "pointer",
            "&:hover": {
              color: r
            }
          },
          "&:hover": {
            background: e.controlItemBgHover
          },
          "&-disabled": {
            "&, &:hover": {
              color: e.colorTextDisabled,
              background: "transparent",
              cursor: "not-allowed"
            }
          }
        })
      }
    })
  };
}, ep = (e) => {
  const {
    componentCls: t,
    margin: r,
    colorBorderSecondary: n,
    horizontalMargin: a,
    verticalItemPadding: i,
    verticalItemMargin: o,
    calc: s
  } = e;
  return {
    // ========================== Top & Bottom ==========================
    [`${t}-top, ${t}-bottom`]: {
      flexDirection: "column",
      [`> ${t}-nav, > div > ${t}-nav`]: {
        margin: a,
        "&::before": {
          position: "absolute",
          right: {
            _skip_check_: !0,
            value: 0
          },
          left: {
            _skip_check_: !0,
            value: 0
          },
          borderBottom: `${Y(e.lineWidth)} ${e.lineType} ${n}`,
          content: "''"
        },
        [`${t}-ink-bar`]: {
          height: e.lineWidthBold,
          "&-animated": {
            transition: `width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`
          }
        },
        [`${t}-nav-wrap`]: {
          "&::before, &::after": {
            top: 0,
            bottom: 0,
            width: e.controlHeight
          },
          "&::before": {
            left: {
              _skip_check_: !0,
              value: 0
            },
            boxShadow: e.boxShadowTabsOverflowLeft
          },
          "&::after": {
            right: {
              _skip_check_: !0,
              value: 0
            },
            boxShadow: e.boxShadowTabsOverflowRight
          },
          [`&${t}-nav-wrap-ping-left::before`]: {
            opacity: 1
          },
          [`&${t}-nav-wrap-ping-right::after`]: {
            opacity: 1
          }
        }
      }
    },
    [`${t}-top`]: {
      [`> ${t}-nav,
        > div > ${t}-nav`]: {
        "&::before": {
          bottom: 0
        },
        [`${t}-ink-bar`]: {
          bottom: 0
        }
      }
    },
    [`${t}-bottom`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        order: 1,
        marginTop: r,
        marginBottom: 0,
        "&::before": {
          top: 0
        },
        [`${t}-ink-bar`]: {
          top: 0
        }
      },
      [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
        order: 0
      }
    },
    // ========================== Left & Right ==========================
    [`${t}-left, ${t}-right`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        flexDirection: "column",
        minWidth: s(e.controlHeight).mul(1.25).equal(),
        // >>>>>>>>>>> Tab
        [`${t}-tab`]: {
          padding: i,
          textAlign: "center"
        },
        [`${t}-tab + ${t}-tab`]: {
          margin: o
        },
        // >>>>>>>>>>> Nav
        [`${t}-nav-wrap`]: {
          flexDirection: "column",
          "&::before, &::after": {
            right: {
              _skip_check_: !0,
              value: 0
            },
            left: {
              _skip_check_: !0,
              value: 0
            },
            height: e.controlHeight
          },
          "&::before": {
            top: 0,
            boxShadow: e.boxShadowTabsOverflowTop
          },
          "&::after": {
            bottom: 0,
            boxShadow: e.boxShadowTabsOverflowBottom
          },
          [`&${t}-nav-wrap-ping-top::before`]: {
            opacity: 1
          },
          [`&${t}-nav-wrap-ping-bottom::after`]: {
            opacity: 1
          }
        },
        // >>>>>>>>>>> Ink Bar
        [`${t}-ink-bar`]: {
          width: e.lineWidthBold,
          "&-animated": {
            transition: `height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`
          }
        },
        [`${t}-nav-list, ${t}-nav-operations`]: {
          flex: "1 0 auto",
          // fix safari scroll problem
          flexDirection: "column"
        }
      }
    },
    [`${t}-left`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        [`${t}-ink-bar`]: {
          right: {
            _skip_check_: !0,
            value: 0
          }
        }
      },
      [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
        marginLeft: {
          _skip_check_: !0,
          value: Y(s(e.lineWidth).mul(-1).equal())
        },
        borderLeft: {
          _skip_check_: !0,
          value: `${Y(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        },
        [`> ${t}-content > ${t}-tabpane`]: {
          paddingLeft: {
            _skip_check_: !0,
            value: e.paddingLG
          }
        }
      }
    },
    [`${t}-right`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        order: 1,
        [`${t}-ink-bar`]: {
          left: {
            _skip_check_: !0,
            value: 0
          }
        }
      },
      [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
        order: 0,
        marginRight: {
          _skip_check_: !0,
          value: s(e.lineWidth).mul(-1).equal()
        },
        borderRight: {
          _skip_check_: !0,
          value: `${Y(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        },
        [`> ${t}-content > ${t}-tabpane`]: {
          paddingRight: {
            _skip_check_: !0,
            value: e.paddingLG
          }
        }
      }
    }
  };
}, tp = (e) => {
  const {
    componentCls: t,
    cardPaddingSM: r,
    cardPaddingLG: n,
    cardHeightSM: a,
    cardHeightLG: i,
    horizontalItemPaddingSM: o,
    horizontalItemPaddingLG: s
  } = e;
  return {
    // >>>>> shared
    [t]: {
      "&-small": {
        [`> ${t}-nav`]: {
          [`${t}-tab`]: {
            padding: o,
            fontSize: e.titleFontSizeSM
          }
        }
      },
      "&-large": {
        [`> ${t}-nav`]: {
          [`${t}-tab`]: {
            padding: s,
            fontSize: e.titleFontSizeLG,
            lineHeight: e.lineHeightLG
          }
        }
      }
    },
    // >>>>> card
    [`${t}-card`]: {
      // Small
      [`&${t}-small`]: {
        [`> ${t}-nav`]: {
          [`${t}-tab`]: {
            padding: r
          },
          [`${t}-nav-add`]: {
            minWidth: a,
            minHeight: a
          }
        },
        [`&${t}-bottom`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: `0 0 ${Y(e.borderRadius)} ${Y(e.borderRadius)}`
          }
        },
        [`&${t}-top`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: `${Y(e.borderRadius)} ${Y(e.borderRadius)} 0 0`
          }
        },
        [`&${t}-right`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `0 ${Y(e.borderRadius)} ${Y(e.borderRadius)} 0`
            }
          }
        },
        [`&${t}-left`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `${Y(e.borderRadius)} 0 0 ${Y(e.borderRadius)}`
            }
          }
        }
      },
      // Large
      [`&${t}-large`]: {
        [`> ${t}-nav`]: {
          [`${t}-tab`]: {
            padding: n
          },
          [`${t}-nav-add`]: {
            minWidth: i,
            minHeight: i
          }
        }
      }
    }
  };
}, rp = (e) => {
  const {
    componentCls: t,
    itemActiveColor: r,
    itemHoverColor: n,
    iconCls: a,
    tabsHorizontalItemMargin: i,
    horizontalItemPadding: o,
    itemSelectedColor: s,
    itemColor: l
  } = e, u = `${t}-tab`;
  return {
    [u]: {
      position: "relative",
      WebkitTouchCallout: "none",
      WebkitTapHighlightColor: "transparent",
      display: "inline-flex",
      alignItems: "center",
      padding: o,
      fontSize: e.titleFontSize,
      background: "transparent",
      border: 0,
      outline: "none",
      cursor: "pointer",
      color: l,
      "&-btn, &-remove": {
        "&:focus:not(:focus-visible), &:active": {
          color: r
        }
      },
      "&-btn": {
        outline: "none",
        transition: `all ${e.motionDurationSlow}`,
        [`${u}-icon:not(:last-child)`]: {
          marginInlineEnd: e.marginSM
        }
      },
      "&-remove": Object.assign({
        flex: "none",
        lineHeight: 1,
        marginRight: {
          _skip_check_: !0,
          value: e.calc(e.marginXXS).mul(-1).equal()
        },
        marginLeft: {
          _skip_check_: !0,
          value: e.marginXS
        },
        color: e.colorIcon,
        fontSize: e.fontSizeSM,
        background: "transparent",
        border: "none",
        outline: "none",
        cursor: "pointer",
        transition: `all ${e.motionDurationSlow}`,
        "&:hover": {
          color: e.colorTextHeading
        }
      }, to(e)),
      "&:hover": {
        color: n
      },
      [`&${u}-active ${u}-btn`]: {
        color: s,
        textShadow: e.tabsActiveTextShadow
      },
      [`&${u}-focus ${u}-btn:focus-visible`]: Vo(e),
      [`&${u}-disabled`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed"
      },
      [`&${u}-disabled ${u}-btn, &${u}-disabled ${t}-remove`]: {
        "&:focus, &:active": {
          color: e.colorTextDisabled
        }
      },
      [`& ${u}-remove ${a}`]: {
        margin: 0,
        verticalAlign: "middle"
      },
      [`${a}:not(:last-child)`]: {
        marginRight: {
          _skip_check_: !0,
          value: e.marginSM
        }
      }
    },
    [`${u} + ${u}`]: {
      margin: {
        _skip_check_: !0,
        value: i
      }
    }
  };
}, np = (e) => {
  const {
    componentCls: t,
    tabsHorizontalItemMarginRTL: r,
    iconCls: n,
    cardGutter: a,
    calc: i
  } = e;
  return {
    [`${t}-rtl`]: {
      direction: "rtl",
      [`${t}-nav`]: {
        [`${t}-tab`]: {
          margin: {
            _skip_check_: !0,
            value: r
          },
          [`${t}-tab:last-of-type`]: {
            marginLeft: {
              _skip_check_: !0,
              value: 0
            }
          },
          [n]: {
            marginRight: {
              _skip_check_: !0,
              value: 0
            },
            marginLeft: {
              _skip_check_: !0,
              value: Y(e.marginSM)
            }
          },
          [`${t}-tab-remove`]: {
            marginRight: {
              _skip_check_: !0,
              value: Y(e.marginXS)
            },
            marginLeft: {
              _skip_check_: !0,
              value: Y(i(e.marginXXS).mul(-1).equal())
            },
            [n]: {
              margin: 0
            }
          }
        }
      },
      [`&${t}-left`]: {
        [`> ${t}-nav`]: {
          order: 1
        },
        [`> ${t}-content-holder`]: {
          order: 0
        }
      },
      [`&${t}-right`]: {
        [`> ${t}-nav`]: {
          order: 0
        },
        [`> ${t}-content-holder`]: {
          order: 1
        }
      },
      // ====================== Card ======================
      [`&${t}-card${t}-top, &${t}-card${t}-bottom`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab + ${t}-tab`]: {
            marginRight: {
              _skip_check_: !0,
              value: a
            },
            marginLeft: {
              _skip_check_: !0,
              value: 0
            }
          }
        }
      }
    },
    [`${t}-dropdown-rtl`]: {
      direction: "rtl"
    },
    [`${t}-menu-item`]: {
      [`${t}-dropdown-rtl`]: {
        textAlign: {
          _skip_check_: !0,
          value: "right"
        }
      }
    }
  };
}, ap = (e) => {
  const {
    componentCls: t,
    tabsCardPadding: r,
    cardHeight: n,
    cardGutter: a,
    itemHoverColor: i,
    itemActiveColor: o,
    colorBorderSecondary: s
  } = e;
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, jo(e)), {
      display: "flex",
      // ========================== Navigation ==========================
      [`> ${t}-nav, > div > ${t}-nav`]: {
        position: "relative",
        display: "flex",
        flex: "none",
        alignItems: "center",
        [`${t}-nav-wrap`]: {
          position: "relative",
          display: "flex",
          flex: "auto",
          alignSelf: "stretch",
          overflow: "hidden",
          whiteSpace: "nowrap",
          transform: "translate(0)",
          // Fix chrome render bug
          // >>>>> Ping shadow
          "&::before, &::after": {
            position: "absolute",
            zIndex: 1,
            opacity: 0,
            transition: `opacity ${e.motionDurationSlow}`,
            content: "''",
            pointerEvents: "none"
          }
        },
        [`${t}-nav-list`]: {
          position: "relative",
          display: "flex",
          transition: `opacity ${e.motionDurationSlow}`
        },
        // >>>>>>>> Operations
        [`${t}-nav-operations`]: {
          display: "flex",
          alignSelf: "stretch"
        },
        [`${t}-nav-operations-hidden`]: {
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none"
        },
        [`${t}-nav-more`]: {
          position: "relative",
          padding: r,
          background: "transparent",
          border: 0,
          color: e.colorText,
          "&::after": {
            position: "absolute",
            right: {
              _skip_check_: !0,
              value: 0
            },
            bottom: 0,
            left: {
              _skip_check_: !0,
              value: 0
            },
            height: e.calc(e.controlHeightLG).div(8).equal(),
            transform: "translateY(100%)",
            content: "''"
          }
        },
        [`${t}-nav-add`]: Object.assign({
          minWidth: n,
          minHeight: n,
          marginLeft: {
            _skip_check_: !0,
            value: a
          },
          background: "transparent",
          border: `${Y(e.lineWidth)} ${e.lineType} ${s}`,
          borderRadius: `${Y(e.borderRadiusLG)} ${Y(e.borderRadiusLG)} 0 0`,
          outline: "none",
          cursor: "pointer",
          color: e.colorText,
          transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
          "&:hover": {
            color: i
          },
          "&:active, &:focus:not(:focus-visible)": {
            color: o
          }
        }, to(e, -3))
      },
      [`${t}-extra-content`]: {
        flex: "none"
      },
      // ============================ InkBar ============================
      [`${t}-ink-bar`]: {
        position: "absolute",
        background: e.inkBarColor,
        pointerEvents: "none"
      }
    }), rp(e)), {
      // =========================== TabPanes ===========================
      [`${t}-content`]: {
        position: "relative",
        width: "100%"
      },
      [`${t}-content-holder`]: {
        flex: "auto",
        minWidth: 0,
        minHeight: 0
      },
      [`${t}-tabpane`]: Object.assign(Object.assign({}, to(e)), {
        "&-hidden": {
          display: "none"
        }
      })
    }),
    [`${t}-centered`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        [`${t}-nav-wrap`]: {
          [`&:not([class*='${t}-nav-wrap-ping']) > ${t}-nav-list`]: {
            margin: "auto"
          }
        }
      }
    }
  };
}, ip = (e) => {
  const {
    cardHeight: t,
    cardHeightSM: r,
    cardHeightLG: n,
    controlHeight: a,
    controlHeightLG: i
  } = e, o = t || i, s = r || a, l = n || i + 8;
  return {
    zIndexPopup: e.zIndexPopupBase + 50,
    cardBg: e.colorFillAlter,
    // We can not pass this as valid value,
    // Since `cardHeight` will lock nav add button height.
    cardHeight: o,
    cardHeightSM: s,
    cardHeightLG: l,
    // Initialize with empty string, because cardPadding will be calculated with cardHeight by default.
    cardPadding: `${(o - e.fontHeight) / 2 - e.lineWidth}px ${e.padding}px`,
    cardPaddingSM: `${(s - e.fontHeight) / 2 - e.lineWidth}px ${e.paddingXS}px`,
    cardPaddingLG: `${(l - e.fontHeightLG) / 2 - e.lineWidth}px ${e.padding}px`,
    titleFontSize: e.fontSize,
    titleFontSizeLG: e.fontSizeLG,
    titleFontSizeSM: e.fontSize,
    inkBarColor: e.colorPrimary,
    horizontalMargin: `0 0 ${e.margin}px 0`,
    horizontalItemGutter: 32,
    // Fixed Value
    // Initialize with empty string, because horizontalItemMargin will be calculated with horizontalItemGutter by default.
    horizontalItemMargin: "",
    horizontalItemMarginRTL: "",
    horizontalItemPadding: `${e.paddingSM}px 0`,
    horizontalItemPaddingSM: `${e.paddingXS}px 0`,
    horizontalItemPaddingLG: `${e.padding}px 0`,
    verticalItemPadding: `${e.paddingXS}px ${e.paddingLG}px`,
    verticalItemMargin: `${e.margin}px 0 0 0`,
    itemColor: e.colorText,
    itemSelectedColor: e.colorPrimary,
    itemHoverColor: e.colorPrimaryHover,
    itemActiveColor: e.colorPrimaryActive,
    cardGutter: e.marginXXS / 2
  };
}, op = zo("Tabs", (e) => {
  const t = ea(e, {
    // `cardPadding` is empty by default, so we could calculate with dynamic `cardHeight`
    tabsCardPadding: e.cardPadding,
    dropdownEdgeChildVerticalPadding: e.paddingXXS,
    tabsActiveTextShadow: "0 0 0.25px currentcolor",
    tabsDropdownHeight: 200,
    tabsDropdownWidth: 120,
    tabsHorizontalItemMargin: `0 0 0 ${Y(e.horizontalItemGutter)}`,
    tabsHorizontalItemMarginRTL: `0 0 0 ${Y(e.horizontalItemGutter)}`
  });
  return [tp(t), np(t), ep(t), Jh(t), Zh(t), ap(t), Qh(t)];
}, ip), sp = () => null;
var lp = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const cp = /* @__PURE__ */ c.forwardRef((e, t) => {
  var r, n, a, i, o, s, l, u, f, d, v;
  const {
    type: g,
    className: h,
    rootClassName: y,
    size: m,
    onEdit: C,
    hideAdd: p,
    centered: S,
    addIcon: $,
    removeIcon: E,
    moreIcon: x,
    more: P,
    popupClassName: w,
    children: R,
    items: O,
    animated: I,
    style: F,
    indicatorSize: A,
    indicator: k,
    destroyInactiveTabPane: D,
    destroyOnHidden: L
  } = e, j = lp(e, ["type", "className", "rootClassName", "size", "onEdit", "hideAdd", "centered", "addIcon", "removeIcon", "moreIcon", "more", "popupClassName", "children", "items", "animated", "style", "indicatorSize", "indicator", "destroyInactiveTabPane", "destroyOnHidden"]), {
    prefixCls: H
  } = j, {
    direction: K,
    tabs: W,
    getPrefixCls: X,
    getPopupContainer: G
  } = c.useContext(_t), U = X("tabs", H), b = Ih(U), [T, z, V] = op(U, b), q = c.useRef(null);
  c.useImperativeHandle(t, () => ({
    nativeElement: q.current
  }));
  let B;
  g === "editable-card" && (B = {
    onEdit: ($e, {
      key: He,
      event: qe
    }) => {
      C == null || C($e === "add" ? qe : He, $e);
    },
    removeIcon: (r = E ?? (W == null ? void 0 : W.removeIcon)) !== null && r !== void 0 ? r : /* @__PURE__ */ c.createElement(um, null),
    addIcon: ($ ?? (W == null ? void 0 : W.addIcon)) || /* @__PURE__ */ c.createElement(hm, null),
    showAdd: p !== !0
  });
  const Z = X(), se = Ic(m), oe = jh(O, R), xe = Fh(U, I), ie = Object.assign(Object.assign({}, W == null ? void 0 : W.style), F), Ee = {
    align: (n = k == null ? void 0 : k.align) !== null && n !== void 0 ? n : (a = W == null ? void 0 : W.indicator) === null || a === void 0 ? void 0 : a.align,
    size: (l = (o = (i = k == null ? void 0 : k.size) !== null && i !== void 0 ? i : A) !== null && o !== void 0 ? o : (s = W == null ? void 0 : W.indicator) === null || s === void 0 ? void 0 : s.size) !== null && l !== void 0 ? l : W == null ? void 0 : W.indicatorSize
  };
  return T(/* @__PURE__ */ c.createElement(Oh, Object.assign({
    ref: q,
    direction: K,
    getPopupContainer: G
  }, j, {
    items: oe,
    className: ne({
      [`${U}-${se}`]: se,
      [`${U}-card`]: ["card", "editable-card"].includes(g),
      [`${U}-editable-card`]: g === "editable-card",
      [`${U}-centered`]: S
    }, W == null ? void 0 : W.className, h, y, z, V, b),
    popupClassName: ne(w, z, V, b),
    style: ie,
    editable: B,
    more: Object.assign({
      icon: (v = (d = (f = (u = W == null ? void 0 : W.more) === null || u === void 0 ? void 0 : u.icon) !== null && f !== void 0 ? f : W == null ? void 0 : W.moreIcon) !== null && d !== void 0 ? d : x) !== null && v !== void 0 ? v : /* @__PURE__ */ c.createElement(vm, null),
      transitionName: `${Z}-slide-up`
    }, P),
    prefixCls: U,
    animated: xe,
    indicator: Ee,
    // TODO: In the future, destroyInactiveTabPane in rc-tabs needs to be upgrade to destroyOnHidden
    destroyInactiveTabPane: L ?? D
  })));
}), mu = cp;
mu.TabPane = sp;
var up = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const gu = (e) => {
  var {
    prefixCls: t,
    className: r,
    hoverable: n = !0
  } = e, a = up(e, ["prefixCls", "className", "hoverable"]);
  const {
    getPrefixCls: i
  } = c.useContext(_t), o = i("card", t), s = ne(`${o}-grid`, r, {
    [`${o}-grid-hoverable`]: n
  });
  return /* @__PURE__ */ c.createElement("div", Object.assign({}, a, {
    className: s
  }));
}, fp = (e) => {
  const {
    antCls: t,
    componentCls: r,
    headerHeight: n,
    headerPadding: a,
    tabsMarginBottom: i
  } = e;
  return Object.assign(Object.assign({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: n,
    marginBottom: -1,
    padding: `0 ${Y(a)}`,
    color: e.colorTextHeading,
    fontWeight: e.fontWeightStrong,
    fontSize: e.headerFontSize,
    background: e.headerBg,
    borderBottom: `${Y(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`,
    borderRadius: `${Y(e.borderRadiusLG)} ${Y(e.borderRadiusLG)} 0 0`
  }, Do()), {
    "&-wrapper": {
      width: "100%",
      display: "flex",
      alignItems: "center"
    },
    "&-title": Object.assign(Object.assign({
      display: "inline-block",
      flex: 1
    }, Lo), {
      [`
          > ${r}-typography,
          > ${r}-typography-edit-content
        `]: {
        insetInlineStart: 0,
        marginTop: 0,
        marginBottom: 0
      }
    }),
    [`${t}-tabs-top`]: {
      clear: "both",
      marginBottom: i,
      color: e.colorText,
      fontWeight: "normal",
      fontSize: e.fontSize,
      "&-bar": {
        borderBottom: `${Y(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`
      }
    }
  });
}, dp = (e) => {
  const {
    cardPaddingBase: t,
    colorBorderSecondary: r,
    cardShadow: n,
    lineWidth: a
  } = e;
  return {
    width: "33.33%",
    padding: t,
    border: 0,
    borderRadius: 0,
    boxShadow: `
      ${Y(a)} 0 0 0 ${r},
      0 ${Y(a)} 0 0 ${r},
      ${Y(a)} ${Y(a)} 0 0 ${r},
      ${Y(a)} 0 0 0 ${r} inset,
      0 ${Y(a)} 0 0 ${r} inset;
    `,
    transition: `all ${e.motionDurationMid}`,
    "&-hoverable:hover": {
      position: "relative",
      zIndex: 1,
      boxShadow: n
    }
  };
}, vp = (e) => {
  const {
    componentCls: t,
    iconCls: r,
    actionsLiMargin: n,
    cardActionsIconSize: a,
    colorBorderSecondary: i,
    actionsBg: o
  } = e;
  return Object.assign(Object.assign({
    margin: 0,
    padding: 0,
    listStyle: "none",
    background: o,
    borderTop: `${Y(e.lineWidth)} ${e.lineType} ${i}`,
    display: "flex",
    borderRadius: `0 0 ${Y(e.borderRadiusLG)} ${Y(e.borderRadiusLG)}`
  }, Do()), {
    "& > li": {
      margin: n,
      color: e.colorTextDescription,
      textAlign: "center",
      "> span": {
        position: "relative",
        display: "block",
        minWidth: e.calc(e.cardActionsIconSize).mul(2).equal(),
        fontSize: e.fontSize,
        lineHeight: e.lineHeight,
        cursor: "pointer",
        "&:hover": {
          color: e.colorPrimary,
          transition: `color ${e.motionDurationMid}`
        },
        [`a:not(${t}-btn), > ${r}`]: {
          display: "inline-block",
          width: "100%",
          color: e.colorIcon,
          lineHeight: Y(e.fontHeight),
          transition: `color ${e.motionDurationMid}`,
          "&:hover": {
            color: e.colorPrimary
          }
        },
        [`> ${r}`]: {
          fontSize: a,
          lineHeight: Y(e.calc(a).mul(e.lineHeight).equal())
        }
      },
      "&:not(:last-child)": {
        borderInlineEnd: `${Y(e.lineWidth)} ${e.lineType} ${i}`
      }
    }
  });
}, mp = (e) => Object.assign(Object.assign({
  margin: `${Y(e.calc(e.marginXXS).mul(-1).equal())} 0`,
  display: "flex"
}, Do()), {
  "&-avatar": {
    paddingInlineEnd: e.padding
  },
  "&-detail": {
    overflow: "hidden",
    flex: 1,
    "> div:not(:last-child)": {
      marginBottom: e.marginXS
    }
  },
  "&-title": Object.assign({
    color: e.colorTextHeading,
    fontWeight: e.fontWeightStrong,
    fontSize: e.fontSizeLG
  }, Lo),
  "&-description": {
    color: e.colorTextDescription
  }
}), gp = (e) => {
  const {
    componentCls: t,
    colorFillAlter: r,
    headerPadding: n,
    bodyPadding: a
  } = e;
  return {
    [`${t}-head`]: {
      padding: `0 ${Y(n)}`,
      background: r,
      "&-title": {
        fontSize: e.fontSize
      }
    },
    [`${t}-body`]: {
      padding: `${Y(e.padding)} ${Y(a)}`
    }
  };
}, hp = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    overflow: "hidden",
    [`${t}-body`]: {
      userSelect: "none"
    }
  };
}, pp = (e) => {
  const {
    componentCls: t,
    cardShadow: r,
    cardHeadPadding: n,
    colorBorderSecondary: a,
    boxShadowTertiary: i,
    bodyPadding: o,
    extraColor: s
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, jo(e)), {
      position: "relative",
      background: e.colorBgContainer,
      borderRadius: e.borderRadiusLG,
      [`&:not(${t}-bordered)`]: {
        boxShadow: i
      },
      [`${t}-head`]: fp(e),
      [`${t}-extra`]: {
        // https://stackoverflow.com/a/22429853/3040605
        marginInlineStart: "auto",
        color: s,
        fontWeight: "normal",
        fontSize: e.fontSize
      },
      [`${t}-body`]: {
        padding: o,
        borderRadius: `0 0 ${Y(e.borderRadiusLG)} ${Y(e.borderRadiusLG)}`
      },
      [`${t}-grid`]: dp(e),
      [`${t}-cover`]: {
        "> *": {
          display: "block",
          width: "100%",
          borderRadius: `${Y(e.borderRadiusLG)} ${Y(e.borderRadiusLG)} 0 0`
        }
      },
      [`${t}-actions`]: vp(e),
      [`${t}-meta`]: mp(e)
    }),
    [`${t}-bordered`]: {
      border: `${Y(e.lineWidth)} ${e.lineType} ${a}`,
      [`${t}-cover`]: {
        marginTop: -1,
        marginInlineStart: -1,
        marginInlineEnd: -1
      }
    },
    [`${t}-hoverable`]: {
      cursor: "pointer",
      transition: `box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,
      "&:hover": {
        borderColor: "transparent",
        boxShadow: r
      }
    },
    [`${t}-contain-grid`]: {
      borderRadius: `${Y(e.borderRadiusLG)} ${Y(e.borderRadiusLG)} 0 0 `,
      [`${t}-body`]: {
        display: "flex",
        flexWrap: "wrap"
      },
      [`&:not(${t}-loading) ${t}-body`]: {
        marginBlockStart: e.calc(e.lineWidth).mul(-1).equal(),
        marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
        padding: 0
      }
    },
    [`${t}-contain-tabs`]: {
      [`> div${t}-head`]: {
        minHeight: 0,
        [`${t}-head-title, ${t}-extra`]: {
          paddingTop: n
        }
      }
    },
    [`${t}-type-inner`]: gp(e),
    [`${t}-loading`]: hp(e),
    [`${t}-rtl`]: {
      direction: "rtl"
    }
  };
}, yp = (e) => {
  const {
    componentCls: t,
    bodyPaddingSM: r,
    headerPaddingSM: n,
    headerHeightSM: a,
    headerFontSizeSM: i
  } = e;
  return {
    [`${t}-small`]: {
      [`> ${t}-head`]: {
        minHeight: a,
        padding: `0 ${Y(n)}`,
        fontSize: i,
        [`> ${t}-head-wrapper`]: {
          [`> ${t}-extra`]: {
            fontSize: e.fontSize
          }
        }
      },
      [`> ${t}-body`]: {
        padding: r
      }
    },
    [`${t}-small${t}-contain-tabs`]: {
      [`> ${t}-head`]: {
        [`${t}-head-title, ${t}-extra`]: {
          paddingTop: 0,
          display: "flex",
          alignItems: "center"
        }
      }
    }
  };
}, bp = (e) => {
  var t, r;
  return {
    headerBg: "transparent",
    headerFontSize: e.fontSizeLG,
    headerFontSizeSM: e.fontSize,
    headerHeight: e.fontSizeLG * e.lineHeightLG + e.padding * 2,
    headerHeightSM: e.fontSize * e.lineHeight + e.paddingXS * 2,
    actionsBg: e.colorBgContainer,
    actionsLiMargin: `${e.paddingSM}px 0`,
    tabsMarginBottom: -e.padding - e.lineWidth,
    extraColor: e.colorText,
    bodyPaddingSM: 12,
    // Fixed padding.
    headerPaddingSM: 12,
    bodyPadding: (t = e.bodyPadding) !== null && t !== void 0 ? t : e.paddingLG,
    headerPadding: (r = e.headerPadding) !== null && r !== void 0 ? r : e.paddingLG
  };
}, Cp = zo("Card", (e) => {
  const t = ea(e, {
    cardShadow: e.boxShadowCard,
    cardHeadPadding: e.padding,
    cardPaddingBase: e.paddingLG,
    cardActionsIconSize: e.fontSize
  });
  return [
    // Style
    pp(t),
    // Size
    yp(t)
  ];
}, bp);
function hu(e, t) {
  this.v = e, this.k = t;
}
function Tt(e, t, r, n) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch {
    a = 0;
  }
  Tt = function(o, s, l, u) {
    function f(d, v) {
      Tt(o, d, function(g) {
        return this._invoke(d, v, g);
      });
    }
    s ? a ? a(o, s, {
      value: l,
      enumerable: !u,
      configurable: !u,
      writable: !u
    }) : o[s] = l : (f("next", 0), f("throw", 1), f("return", 2));
  }, Tt(e, t, r, n);
}
function Qo() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e, t, r = typeof Symbol == "function" ? Symbol : {}, n = r.iterator || "@@iterator", a = r.toStringTag || "@@toStringTag";
  function i(g, h, y, m) {
    var C = h && h.prototype instanceof s ? h : s, p = Object.create(C.prototype);
    return Tt(p, "_invoke", (function(S, $, E) {
      var x, P, w, R = 0, O = E || [], I = !1, F = {
        p: 0,
        n: 0,
        v: e,
        a: A,
        f: A.bind(e, 4),
        d: function(D, L) {
          return x = D, P = 0, w = e, F.n = L, o;
        }
      };
      function A(k, D) {
        for (P = k, w = D, t = 0; !I && R && !L && t < O.length; t++) {
          var L, j = O[t], H = F.p, K = j[2];
          k > 3 ? (L = K === D) && (w = j[(P = j[4]) ? 5 : (P = 3, 3)], j[4] = j[5] = e) : j[0] <= H && ((L = k < 2 && H < j[1]) ? (P = 0, F.v = D, F.n = j[1]) : H < K && (L = k < 3 || j[0] > D || D > K) && (j[4] = k, j[5] = D, F.n = K, P = 0));
        }
        if (L || k > 1) return o;
        throw I = !0, D;
      }
      return function(k, D, L) {
        if (R > 1) throw TypeError("Generator is already running");
        for (I && D === 1 && A(D, L), P = D, w = L; (t = P < 2 ? e : w) || !I; ) {
          x || (P ? P < 3 ? (P > 1 && (F.n = -1), A(P, w)) : F.n = w : F.v = w);
          try {
            if (R = 2, x) {
              if (P || (k = "next"), t = x[k]) {
                if (!(t = t.call(x, w))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                w = t.value, P < 2 && (P = 0);
              } else P === 1 && (t = x.return) && t.call(x), P < 2 && (w = TypeError("The iterator does not provide a '" + k + "' method"), P = 1);
              x = e;
            } else if ((t = (I = F.n < 0) ? w : S.call($, F)) !== o) break;
          } catch (j) {
            x = e, P = 1, w = j;
          } finally {
            R = 1;
          }
        }
        return {
          value: t,
          done: I
        };
      };
    })(g, y, m), !0), p;
  }
  var o = {};
  function s() {
  }
  function l() {
  }
  function u() {
  }
  t = Object.getPrototypeOf;
  var f = [][n] ? t(t([][n]())) : (Tt(t = {}, n, function() {
    return this;
  }), t), d = u.prototype = s.prototype = Object.create(f);
  function v(g) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(g, u) : (g.__proto__ = u, Tt(g, a, "GeneratorFunction")), g.prototype = Object.create(d), g;
  }
  return l.prototype = u, Tt(d, "constructor", u), Tt(u, "constructor", l), l.displayName = "GeneratorFunction", Tt(u, a, "GeneratorFunction"), Tt(d), Tt(d, a, "Generator"), Tt(d, n, function() {
    return this;
  }), Tt(d, "toString", function() {
    return "[object Generator]";
  }), (Qo = function() {
    return {
      w: i,
      m: v
    };
  })();
}
function ja(e, t) {
  function r(a, i, o, s) {
    try {
      var l = e[a](i), u = l.value;
      return u instanceof hu ? t.resolve(u.v).then(function(f) {
        r("next", f, o, s);
      }, function(f) {
        r("throw", f, o, s);
      }) : t.resolve(u).then(function(f) {
        l.value = f, o(l);
      }, function(f) {
        return r("throw", f, o, s);
      });
    } catch (f) {
      s(f);
    }
  }
  var n;
  this.next || (Tt(ja.prototype), Tt(ja.prototype, typeof Symbol == "function" && Symbol.asyncIterator || "@asyncIterator", function() {
    return this;
  })), Tt(this, "_invoke", function(a, i, o) {
    function s() {
      return new t(function(l, u) {
        r(a, o, l, u);
      });
    }
    return n = n ? n.then(s, s) : s();
  }, !0);
}
function pu(e, t, r, n, a) {
  return new ja(Qo().w(e, t, r, n), a || Promise);
}
function Sp(e, t, r, n, a) {
  var i = pu(e, t, r, n, a);
  return i.next().then(function(o) {
    return o.done ? o.value : i.next();
  });
}
function wp(e) {
  var t = Object(e), r = [];
  for (var n in t) r.unshift(n);
  return function a() {
    for (; r.length; ) if ((n = r.pop()) in t) return a.value = n, a.done = !1, a;
    return a.done = !0, a;
  };
}
function Sl(e) {
  if (e != null) {
    var t = e[typeof Symbol == "function" && Symbol.iterator || "@@iterator"], r = 0;
    if (t) return t.call(e);
    if (typeof e.next == "function") return e;
    if (!isNaN(e.length)) return {
      next: function() {
        return e && r >= e.length && (e = void 0), {
          value: e && e[r++],
          done: !e
        };
      }
    };
  }
  throw new TypeError(ce(e) + " is not iterable");
}
function ir() {
  var e = Qo(), t = e.m(ir), r = (Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.__proto__).constructor;
  function n(o) {
    var s = typeof o == "function" && o.constructor;
    return !!s && (s === r || (s.displayName || s.name) === "GeneratorFunction");
  }
  var a = {
    throw: 1,
    return: 2,
    break: 3,
    continue: 3
  };
  function i(o) {
    var s, l;
    return function(u) {
      s || (s = {
        stop: function() {
          return l(u.a, 2);
        },
        catch: function() {
          return u.v;
        },
        abrupt: function(d, v) {
          return l(u.a, a[d], v);
        },
        delegateYield: function(d, v, g) {
          return s.resultName = v, l(u.d, Sl(d), g);
        },
        finish: function(d) {
          return l(u.f, d);
        }
      }, l = function(d, v, g) {
        u.p = s.prev, u.n = s.next;
        try {
          return d(v, g);
        } finally {
          s.next = u.n;
        }
      }), s.resultName && (s[s.resultName] = u.v, s.resultName = void 0), s.sent = u.v, s.next = u.n;
      try {
        return o.call(this, s);
      } finally {
        u.p = s.prev, u.n = s.next;
      }
    };
  }
  return (ir = function() {
    return {
      wrap: function(l, u, f, d) {
        return e.w(i(l), u, f, d && d.reverse());
      },
      isGeneratorFunction: n,
      mark: e.m,
      awrap: function(l, u) {
        return new hu(l, u);
      },
      AsyncIterator: ja,
      async: function(l, u, f, d, v) {
        return (n(u) ? pu : Sp)(i(l), u, f, d, v);
      },
      keys: wp,
      values: Sl
    };
  })();
}
function wl(e, t, r, n, a, i, o) {
  try {
    var s = e[i](o), l = s.value;
  } catch (u) {
    return void r(u);
  }
  s.done ? t(l) : Promise.resolve(l).then(n, a);
}
function oa(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, a) {
      var i = e.apply(t, r);
      function o(l) {
        wl(i, n, a, o, s, "next", l);
      }
      function s(l) {
        wl(i, n, a, o, s, "throw", l);
      }
      o(void 0);
    });
  };
}
var zr = "RC_FORM_INTERNAL_HOOKS", Ue = function() {
  Nt(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, hn = /* @__PURE__ */ c.createContext({
  getFieldValue: Ue,
  getFieldsValue: Ue,
  getFieldError: Ue,
  getFieldWarning: Ue,
  getFieldsError: Ue,
  isFieldsTouched: Ue,
  isFieldTouched: Ue,
  isFieldValidating: Ue,
  isFieldsValidating: Ue,
  resetFields: Ue,
  setFields: Ue,
  setFieldValue: Ue,
  setFieldsValue: Ue,
  validateFields: Ue,
  submit: Ue,
  getInternalHooks: function() {
    return Ue(), {
      dispatch: Ue,
      initEntityValue: Ue,
      registerField: Ue,
      useSubscribe: Ue,
      setInitialValues: Ue,
      destroyForm: Ue,
      setCallbacks: Ue,
      registerWatch: Ue,
      getFields: Ue,
      setValidateMessages: Ue,
      setPreserve: Ue,
      getInitialValue: Ue
    };
  }
}), Da = /* @__PURE__ */ c.createContext(null);
function po(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function xp(e) {
  return e && !!e._init;
}
function yo() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      tel: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var bo = yo();
function Ep(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function $p(e, t, r) {
  if (To()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return r && Hn(a, r.prototype), a;
}
function Co(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Co = function(n) {
    if (n === null || !Ep(n)) return n;
    if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(n)) return t.get(n);
      t.set(n, a);
    }
    function a() {
      return $p(n, arguments, Bn(this).constructor);
    }
    return a.prototype = Object.create(n.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Hn(a, n);
  }, Co(e);
}
var _p = /%[sdj%]/g, Pp = function() {
};
typeof process < "u" && process.env;
function So(e) {
  if (!e || !e.length) return null;
  var t = {};
  return e.forEach(function(r) {
    var n = r.field;
    t[n] = t[n] || [], t[n].push(r);
  }), t;
}
function Kt(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  var a = 0, i = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var o = e.replace(_p, function(s) {
      if (s === "%%")
        return "%";
      if (a >= i)
        return s;
      switch (s) {
        case "%s":
          return String(r[a++]);
        case "%d":
          return Number(r[a++]);
        case "%j":
          try {
            return JSON.stringify(r[a++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return s;
      }
    });
    return o;
  }
  return e;
}
function Rp(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern" || e === "tel";
}
function yt(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || Rp(t) && typeof e == "string" && !e);
}
function Mp(e, t, r) {
  var n = [], a = 0, i = e.length;
  function o(s) {
    n.push.apply(n, ae(s || [])), a++, a === i && r(n);
  }
  e.forEach(function(s) {
    t(s, o);
  });
}
function xl(e, t, r) {
  var n = 0, a = e.length;
  function i(o) {
    if (o && o.length) {
      r(o);
      return;
    }
    var s = n;
    n = n + 1, s < a ? t(e[s], i) : r([]);
  }
  i([]);
}
function Tp(e) {
  var t = [];
  return Object.keys(e).forEach(function(r) {
    t.push.apply(t, ae(e[r] || []));
  }), t;
}
var El = /* @__PURE__ */ (function(e) {
  Ar(r, e);
  var t = Fr(r);
  function r(n, a) {
    var i;
    return Pt(this, r), i = t.call(this, "Async Validation Error"), _(we(i), "errors", void 0), _(we(i), "fields", void 0), i.errors = n, i.fields = a, i;
  }
  return Rt(r);
})(/* @__PURE__ */ Co(Error));
function Op(e, t, r, n, a) {
  if (t.first) {
    var i = new Promise(function(v, g) {
      var h = function(C) {
        return n(C), C.length ? g(new El(C, So(C))) : v(a);
      }, y = Tp(e);
      xl(y, r, h);
    });
    return i.catch(function(v) {
      return v;
    }), i;
  }
  var o = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), l = s.length, u = 0, f = [], d = new Promise(function(v, g) {
    var h = function(m) {
      if (f.push.apply(f, m), u++, u === l)
        return n(f), f.length ? g(new El(f, So(f))) : v(a);
    };
    s.length || (n(f), v(a)), s.forEach(function(y) {
      var m = e[y];
      o.indexOf(y) !== -1 ? xl(m, r, h) : Mp(m, r, h);
    });
  });
  return d.catch(function(v) {
    return v;
  }), d;
}
function Ip(e) {
  return !!(e && e.message !== void 0);
}
function kp(e, t) {
  for (var r = e, n = 0; n < t.length; n++) {
    if (r == null)
      return r;
    r = r[t[n]];
  }
  return r;
}
function $l(e, t) {
  return function(r) {
    var n;
    return e.fullFields ? n = kp(t, e.fullFields) : n = t[r.field || e.fullField], Ip(r) ? (r.field = r.field || e.fullField, r.fieldValue = n, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: n,
      field: r.field || e.fullField
    };
  };
}
function _l(e, t) {
  if (t) {
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var n = t[r];
        ce(n) === "object" && ce(e[r]) === "object" ? e[r] = M(M({}, e[r]), n) : e[r] = n;
      }
  }
  return e;
}
var Jr = "enum", Ap = function(t, r, n, a, i) {
  t[Jr] = Array.isArray(t[Jr]) ? t[Jr] : [], t[Jr].indexOf(r) === -1 && a.push(Kt(i.messages[Jr], t.fullField, t[Jr].join(", ")));
}, Fp = function(t, r, n, a, i) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(r) || a.push(Kt(i.messages.pattern.mismatch, t.fullField, r, t.pattern));
    else if (typeof t.pattern == "string") {
      var o = new RegExp(t.pattern);
      o.test(r) || a.push(Kt(i.messages.pattern.mismatch, t.fullField, r, t.pattern));
    }
  }
}, Np = function(t, r, n, a, i) {
  var o = typeof t.len == "number", s = typeof t.min == "number", l = typeof t.max == "number", u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, f = r, d = null, v = typeof r == "number", g = typeof r == "string", h = Array.isArray(r);
  if (v ? d = "number" : g ? d = "string" : h && (d = "array"), !d)
    return !1;
  h && (f = r.length), g && (f = r.replace(u, "_").length), o ? f !== t.len && a.push(Kt(i.messages[d].len, t.fullField, t.len)) : s && !l && f < t.min ? a.push(Kt(i.messages[d].min, t.fullField, t.min)) : l && !s && f > t.max ? a.push(Kt(i.messages[d].max, t.fullField, t.max)) : s && l && (f < t.min || f > t.max) && a.push(Kt(i.messages[d].range, t.fullField, t.min, t.max));
}, yu = function(t, r, n, a, i, o) {
  t.required && (!n.hasOwnProperty(t.field) || yt(r, o || t.type)) && a.push(Kt(i.messages.required, t.fullField));
}, Ca;
const Lp = (function() {
  if (Ca)
    return Ca;
  var e = "[a-fA-F\\d:]", t = function(x) {
    return x && x.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(e, ")|(?<=").concat(e, ")(?=\\s|$))") : "";
  }, r = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", n = "[a-fA-F\\d]{1,4}", a = [
    "(?:".concat(n, ":){7}(?:").concat(n, "|:)"),
    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
    "(?:".concat(n, ":){6}(?:").concat(r, "|:").concat(n, "|:)"),
    // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::
    "(?:".concat(n, ":){5}(?::").concat(r, "|(?::").concat(n, "){1,2}|:)"),
    // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::
    "(?:".concat(n, ":){4}(?:(?::").concat(n, "){0,1}:").concat(r, "|(?::").concat(n, "){1,3}|:)"),
    // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::
    "(?:".concat(n, ":){3}(?:(?::").concat(n, "){0,2}:").concat(r, "|(?::").concat(n, "){1,4}|:)"),
    // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::
    "(?:".concat(n, ":){2}(?:(?::").concat(n, "){0,3}:").concat(r, "|(?::").concat(n, "){1,5}|:)"),
    // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::
    "(?:".concat(n, ":){1}(?:(?::").concat(n, "){0,4}:").concat(r, "|(?::").concat(n, "){1,6}|:)"),
    // 1::              1::3:4:5:6:7:8   1::8            1::
    "(?::(?:(?::".concat(n, "){0,5}:").concat(r, "|(?::").concat(n, "){1,7}|:))")
    // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::
  ], i = "(?:%[0-9a-zA-Z]{1,})?", o = "(?:".concat(a.join("|"), ")").concat(i), s = new RegExp("(?:^".concat(r, "$)|(?:^").concat(o, "$)")), l = new RegExp("^".concat(r, "$")), u = new RegExp("^".concat(o, "$")), f = function(x) {
    return x && x.exact ? s : new RegExp("(?:".concat(t(x)).concat(r).concat(t(x), ")|(?:").concat(t(x)).concat(o).concat(t(x), ")"), "g");
  };
  f.v4 = function(E) {
    return E && E.exact ? l : new RegExp("".concat(t(E)).concat(r).concat(t(E)), "g");
  }, f.v6 = function(E) {
    return E && E.exact ? u : new RegExp("".concat(t(E)).concat(o).concat(t(E)), "g");
  };
  var d = "(?:(?:[a-z]+:)?//)", v = "(?:\\S+(?::\\S*)?@)?", g = f.v4().source, h = f.v6().source, y = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", m = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", C = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", p = "(?::\\d{2,5})?", S = '(?:[/?#][^\\s"]*)?', $ = "(?:".concat(d, "|www\\.)").concat(v, "(?:localhost|").concat(g, "|").concat(h, "|").concat(y).concat(m).concat(C, ")").concat(p).concat(S);
  return Ca = new RegExp("(?:^".concat($, "$)"), "i"), Ca;
});
var $i = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  /**
   * Phone number regex, support country code, brackets, spaces, and dashes (or non-breaking hyphen \u2011).
   * @see https://regexr.com/3c53v
   * @see https://ihateregex.io/expr/phone/
   * @see https://developers.google.com/style/phone-numbers using non-breaking hyphen \u2011
   */
  tel: /^(\+[0-9]{1,3}[-\s\u2011]?)?(\([0-9]{1,4}\)[-\s\u2011]?)?([0-9]+[-\s\u2011]?)*[0-9]+$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, An = {
  integer: function(t) {
    return An.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return An.number(t) && !An.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return ce(t) === "object" && !An.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match($i.email);
  },
  tel: function(t) {
    return typeof t == "string" && t.length <= 32 && !!t.match($i.tel);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(Lp());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match($i.hex);
  }
}, jp = function(t, r, n, a, i) {
  if (t.required && r === void 0) {
    yu(t, r, n, a, i);
    return;
  }
  var o = ["integer", "float", "array", "regexp", "object", "method", "email", "tel", "number", "date", "url", "hex"], s = t.type;
  o.indexOf(s) > -1 ? An[s](r) || a.push(Kt(i.messages.types[s], t.fullField, t.type)) : s && ce(r) !== t.type && a.push(Kt(i.messages.types[s], t.fullField, t.type));
}, Dp = function(t, r, n, a, i) {
  (/^\s+$/.test(r) || r === "") && a.push(Kt(i.messages.whitespace, t.fullField));
};
const Pe = {
  required: yu,
  whitespace: Dp,
  type: jp,
  range: Np,
  enum: Ap,
  pattern: Fp
};
var Vp = function(t, r, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (yt(r) && !t.required)
      return n();
    Pe.required(t, r, a, o, i);
  }
  n(o);
}, zp = function(t, r, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (r == null && !t.required)
      return n();
    Pe.required(t, r, a, o, i, "array"), r != null && (Pe.type(t, r, a, o, i), Pe.range(t, r, a, o, i));
  }
  n(o);
}, Hp = function(t, r, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (yt(r) && !t.required)
      return n();
    Pe.required(t, r, a, o, i), r !== void 0 && Pe.type(t, r, a, o, i);
  }
  n(o);
}, Bp = function(t, r, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (yt(r, "date") && !t.required)
      return n();
    if (Pe.required(t, r, a, o, i), !yt(r, "date")) {
      var l;
      r instanceof Date ? l = r : l = new Date(r), Pe.type(t, l, a, o, i), l && Pe.range(t, l.getTime(), a, o, i);
    }
  }
  n(o);
}, Wp = "enum", Kp = function(t, r, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (yt(r) && !t.required)
      return n();
    Pe.required(t, r, a, o, i), r !== void 0 && Pe[Wp](t, r, a, o, i);
  }
  n(o);
}, qp = function(t, r, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (yt(r) && !t.required)
      return n();
    Pe.required(t, r, a, o, i), r !== void 0 && (Pe.type(t, r, a, o, i), Pe.range(t, r, a, o, i));
  }
  n(o);
}, Gp = function(t, r, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (yt(r) && !t.required)
      return n();
    Pe.required(t, r, a, o, i), r !== void 0 && (Pe.type(t, r, a, o, i), Pe.range(t, r, a, o, i));
  }
  n(o);
}, Up = function(t, r, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (yt(r) && !t.required)
      return n();
    Pe.required(t, r, a, o, i), r !== void 0 && Pe.type(t, r, a, o, i);
  }
  n(o);
}, Xp = function(t, r, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (r === "" && (r = void 0), yt(r) && !t.required)
      return n();
    Pe.required(t, r, a, o, i), r !== void 0 && (Pe.type(t, r, a, o, i), Pe.range(t, r, a, o, i));
  }
  n(o);
}, Yp = function(t, r, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (yt(r) && !t.required)
      return n();
    Pe.required(t, r, a, o, i), r !== void 0 && Pe.type(t, r, a, o, i);
  }
  n(o);
}, Qp = function(t, r, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (yt(r, "string") && !t.required)
      return n();
    Pe.required(t, r, a, o, i), yt(r, "string") || Pe.pattern(t, r, a, o, i);
  }
  n(o);
}, Zp = function(t, r, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (yt(r) && !t.required)
      return n();
    Pe.required(t, r, a, o, i), yt(r) || Pe.type(t, r, a, o, i);
  }
  n(o);
}, Jp = function(t, r, n, a, i) {
  var o = [], s = Array.isArray(r) ? "array" : ce(r);
  Pe.required(t, r, a, o, i, s), n(o);
}, e0 = function(t, r, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (yt(r, "string") && !t.required)
      return n();
    Pe.required(t, r, a, o, i, "string"), yt(r, "string") || (Pe.type(t, r, a, o, i), Pe.range(t, r, a, o, i), Pe.pattern(t, r, a, o, i), t.whitespace === !0 && Pe.whitespace(t, r, a, o, i));
  }
  n(o);
}, Sa = function(t, r, n, a, i) {
  var o = t.type, s = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (yt(r, o) && !t.required)
      return n();
    Pe.required(t, r, a, s, i, o), yt(r, o) || Pe.type(t, r, a, s, i);
  }
  n(s);
};
const jn = {
  string: e0,
  method: Up,
  number: Xp,
  boolean: Hp,
  regexp: Zp,
  integer: Gp,
  float: qp,
  array: zp,
  object: Yp,
  enum: Kp,
  pattern: Qp,
  date: Bp,
  url: Sa,
  hex: Sa,
  email: Sa,
  tel: Sa,
  required: Jp,
  any: Vp
};
var sa = /* @__PURE__ */ (function() {
  function e(t) {
    Pt(this, e), _(this, "rules", null), _(this, "_messages", bo), this.define(t);
  }
  return Rt(e, [{
    key: "define",
    value: function(r) {
      var n = this;
      if (!r)
        throw new Error("Cannot configure a schema with no rules");
      if (ce(r) !== "object" || Array.isArray(r))
        throw new Error("Rules must be an object");
      this.rules = {}, Object.keys(r).forEach(function(a) {
        var i = r[a];
        n.rules[a] = Array.isArray(i) ? i : [i];
      });
    }
  }, {
    key: "messages",
    value: function(r) {
      return r && (this._messages = _l(yo(), r)), this._messages;
    }
  }, {
    key: "validate",
    value: function(r) {
      var n = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
      }, o = r, s = a, l = i;
      if (typeof s == "function" && (l = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
        return l && l(null, o), Promise.resolve(o);
      function u(h) {
        var y = [], m = {};
        function C(S) {
          if (Array.isArray(S)) {
            var $;
            y = ($ = y).concat.apply($, ae(S));
          } else
            y.push(S);
        }
        for (var p = 0; p < h.length; p++)
          C(h[p]);
        y.length ? (m = So(y), l(y, m)) : l(null, o);
      }
      if (s.messages) {
        var f = this.messages();
        f === bo && (f = yo()), _l(f, s.messages), s.messages = f;
      } else
        s.messages = this.messages();
      var d = {}, v = s.keys || Object.keys(this.rules);
      v.forEach(function(h) {
        var y = n.rules[h], m = o[h];
        y.forEach(function(C) {
          var p = C;
          typeof p.transform == "function" && (o === r && (o = M({}, o)), m = o[h] = p.transform(m), m != null && (p.type = p.type || (Array.isArray(m) ? "array" : ce(m)))), typeof p == "function" ? p = {
            validator: p
          } : p = M({}, p), p.validator = n.getValidationMethod(p), p.validator && (p.field = h, p.fullField = p.fullField || h, p.type = n.getType(p), d[h] = d[h] || [], d[h].push({
            rule: p,
            value: m,
            source: o,
            field: h
          }));
        });
      });
      var g = {};
      return Op(d, s, function(h, y) {
        var m = h.rule, C = (m.type === "object" || m.type === "array") && (ce(m.fields) === "object" || ce(m.defaultField) === "object");
        C = C && (m.required || !m.required && h.value), m.field = h.field;
        function p(P, w) {
          return M(M({}, w), {}, {
            fullField: "".concat(m.fullField, ".").concat(P),
            fullFields: m.fullFields ? [].concat(ae(m.fullFields), [P]) : [P]
          });
        }
        function S() {
          var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], w = Array.isArray(P) ? P : [P];
          !s.suppressWarning && w.length && e.warning("async-validator:", w), w.length && m.message !== void 0 && m.message !== null && (w = [].concat(m.message));
          var R = w.map($l(m, o));
          if (s.first && R.length)
            return g[m.field] = 1, y(R);
          if (!C)
            y(R);
          else {
            if (m.required && !h.value)
              return m.message !== void 0 ? R = [].concat(m.message).map($l(m, o)) : s.error && (R = [s.error(m, Kt(s.messages.required, m.field))]), y(R);
            var O = {};
            m.defaultField && Object.keys(h.value).map(function(A) {
              O[A] = m.defaultField;
            }), O = M(M({}, O), h.rule.fields);
            var I = {};
            Object.keys(O).forEach(function(A) {
              var k = O[A], D = Array.isArray(k) ? k : [k];
              I[A] = D.map(p.bind(null, A));
            });
            var F = new e(I);
            F.messages(s.messages), h.rule.options && (h.rule.options.messages = s.messages, h.rule.options.error = s.error), F.validate(h.value, h.rule.options || s, function(A) {
              var k = [];
              R && R.length && k.push.apply(k, ae(R)), A && A.length && k.push.apply(k, ae(A)), y(k.length ? k : null);
            });
          }
        }
        var $;
        if (m.asyncValidator)
          $ = m.asyncValidator(m, h.value, S, h.source, s);
        else if (m.validator) {
          try {
            $ = m.validator(m, h.value, S, h.source, s);
          } catch (P) {
            var E, x;
            (E = (x = console).error) === null || E === void 0 || E.call(x, P), s.suppressValidatorError || setTimeout(function() {
              throw P;
            }, 0), S(P.message);
          }
          $ === !0 ? S() : $ === !1 ? S(typeof m.message == "function" ? m.message(m.fullField || m.field) : m.message || "".concat(m.fullField || m.field, " fails")) : $ instanceof Array ? S($) : $ instanceof Error && S($.message);
        }
        $ && $.then && $.then(function() {
          return S();
        }, function(P) {
          return S(P);
        });
      }, function(h) {
        u(h);
      }, o);
    }
  }, {
    key: "getType",
    value: function(r) {
      if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !jn.hasOwnProperty(r.type))
        throw new Error(Kt("Unknown rule type %s", r.type));
      return r.type || "string";
    }
  }, {
    key: "getValidationMethod",
    value: function(r) {
      if (typeof r.validator == "function")
        return r.validator;
      var n = Object.keys(r), a = n.indexOf("message");
      return a !== -1 && n.splice(a, 1), n.length === 1 && n[0] === "required" ? jn.required : jn[this.getType(r)] || void 0;
    }
  }]), e;
})();
_(sa, "register", function(t, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  jn[t] = r;
});
_(sa, "warning", Pp);
_(sa, "messages", bo);
_(sa, "validators", jn);
var Wt = "'${name}' is not a valid ${type}", bu = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: Wt,
    method: Wt,
    array: Wt,
    object: Wt,
    number: Wt,
    date: Wt,
    boolean: Wt,
    integer: Wt,
    float: Wt,
    regexp: Wt,
    email: Wt,
    url: Wt,
    hex: Wt
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
}, Pl = sa;
function t0(e, t) {
  return e.replace(/\\?\$\{\w+\}/g, function(r) {
    if (r.startsWith("\\"))
      return r.slice(1);
    var n = r.slice(2, -1);
    return t[n];
  });
}
var Rl = "CODE_LOGIC_ERROR";
function wo(e, t, r, n, a) {
  return xo.apply(this, arguments);
}
function xo() {
  return xo = oa(/* @__PURE__ */ ir().mark(function e(t, r, n, a, i) {
    var o, s, l, u, f, d, v, g, h;
    return ir().wrap(function(m) {
      for (; ; ) switch (m.prev = m.next) {
        case 0:
          return o = M({}, n), delete o.ruleIndex, Pl.warning = function() {
          }, o.validator && (s = o.validator, o.validator = function() {
            try {
              return s.apply(void 0, arguments);
            } catch (C) {
              return console.error(C), Promise.reject(Rl);
            }
          }), l = null, o && o.type === "array" && o.defaultField && (l = o.defaultField, delete o.defaultField), u = new Pl(_({}, t, [o])), f = tn(bu, a.validateMessages), u.messages(f), d = [], m.prev = 10, m.next = 13, Promise.resolve(u.validate(_({}, t, r), M({}, a)));
        case 13:
          m.next = 18;
          break;
        case 15:
          m.prev = 15, m.t0 = m.catch(10), m.t0.errors && (d = m.t0.errors.map(function(C, p) {
            var S = C.message, $ = S === Rl ? f.default : S;
            return /* @__PURE__ */ c.isValidElement($) ? (
              // Wrap ReactNode with `key`
              /* @__PURE__ */ c.cloneElement($, {
                key: "error_".concat(p)
              })
            ) : $;
          }));
        case 18:
          if (!(!d.length && l && Array.isArray(r) && r.length > 0)) {
            m.next = 23;
            break;
          }
          return m.next = 21, Promise.all(r.map(function(C, p) {
            return wo("".concat(t, ".").concat(p), C, l, a, i);
          }));
        case 21:
          return v = m.sent, m.abrupt("return", v.reduce(function(C, p) {
            return [].concat(ae(C), ae(p));
          }, []));
        case 23:
          return g = M(M({}, n), {}, {
            name: t,
            enum: (n.enum || []).join(", ")
          }, i), h = d.map(function(C) {
            return typeof C == "string" ? t0(C, g) : C;
          }), m.abrupt("return", h);
        case 26:
        case "end":
          return m.stop();
      }
    }, e, null, [[10, 15]]);
  })), xo.apply(this, arguments);
}
function r0(e, t, r, n, a, i) {
  var o = e.join("."), s = r.map(function(f, d) {
    var v = f.validator, g = M(M({}, f), {}, {
      ruleIndex: d
    });
    return v && (g.validator = function(h, y, m) {
      var C = !1, p = function() {
        for (var E = arguments.length, x = new Array(E), P = 0; P < E; P++)
          x[P] = arguments[P];
        Promise.resolve().then(function() {
          Nt(!C, "Your validator function has already return a promise. `callback` will be ignored."), C || m.apply(void 0, x);
        });
      }, S = v(h, y, p);
      C = S && typeof S.then == "function" && typeof S.catch == "function", Nt(C, "`callback` is deprecated. Please return a promise instead."), C && S.then(function() {
        m();
      }).catch(function($) {
        m($ || " ");
      });
    }), g;
  }).sort(function(f, d) {
    var v = f.warningOnly, g = f.ruleIndex, h = d.warningOnly, y = d.ruleIndex;
    return !!v == !!h ? g - y : v ? 1 : -1;
  }), l;
  if (a === !0)
    l = new Promise(/* @__PURE__ */ (function() {
      var f = oa(/* @__PURE__ */ ir().mark(function d(v, g) {
        var h, y, m;
        return ir().wrap(function(p) {
          for (; ; ) switch (p.prev = p.next) {
            case 0:
              h = 0;
            case 1:
              if (!(h < s.length)) {
                p.next = 12;
                break;
              }
              return y = s[h], p.next = 5, wo(o, t, y, n, i);
            case 5:
              if (m = p.sent, !m.length) {
                p.next = 9;
                break;
              }
              return g([{
                errors: m,
                rule: y
              }]), p.abrupt("return");
            case 9:
              h += 1, p.next = 1;
              break;
            case 12:
              v([]);
            case 13:
            case "end":
              return p.stop();
          }
        }, d);
      }));
      return function(d, v) {
        return f.apply(this, arguments);
      };
    })());
  else {
    var u = s.map(function(f) {
      return wo(o, t, f, n, i).then(function(d) {
        return {
          errors: d,
          rule: f
        };
      });
    });
    l = (a ? a0(u) : n0(u)).then(function(f) {
      return Promise.reject(f);
    });
  }
  return l.catch(function(f) {
    return f;
  }), l;
}
function n0(e) {
  return Eo.apply(this, arguments);
}
function Eo() {
  return Eo = oa(/* @__PURE__ */ ir().mark(function e(t) {
    return ir().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          return n.abrupt("return", Promise.all(t).then(function(a) {
            var i, o = (i = []).concat.apply(i, ae(a));
            return o;
          }));
        case 1:
        case "end":
          return n.stop();
      }
    }, e);
  })), Eo.apply(this, arguments);
}
function a0(e) {
  return $o.apply(this, arguments);
}
function $o() {
  return $o = oa(/* @__PURE__ */ ir().mark(function e(t) {
    var r;
    return ir().wrap(function(a) {
      for (; ; ) switch (a.prev = a.next) {
        case 0:
          return r = 0, a.abrupt("return", new Promise(function(i) {
            t.forEach(function(o) {
              o.then(function(s) {
                s.errors.length && i([s]), r += 1, r === t.length && i([]);
              });
            });
          }));
        case 2:
        case "end":
          return a.stop();
      }
    }, e);
  })), $o.apply(this, arguments);
}
function ct(e) {
  return po(e);
}
function Ml(e, t) {
  var r = {};
  return t.forEach(function(n) {
    var a = pr(e, n);
    r = lr(r, n, a);
  }), r;
}
function cn(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e && e.some(function(n) {
    return Cu(t, n, r);
  });
}
function Cu(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || !r && e.length !== t.length ? !1 : t.every(function(n, a) {
    return e[a] === n;
  });
}
function i0(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || ce(e) !== "object" || ce(t) !== "object")
    return !1;
  var r = Object.keys(e), n = Object.keys(t), a = new Set([].concat(r, n));
  return ae(a).every(function(i) {
    var o = e[i], s = t[i];
    return typeof o == "function" && typeof s == "function" ? !0 : o === s;
  });
}
function o0(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && ce(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function Tl(e, t, r) {
  var n = e.length;
  if (t < 0 || t >= n || r < 0 || r >= n)
    return e;
  var a = e[t], i = t - r;
  return i > 0 ? [].concat(ae(e.slice(0, r)), [a], ae(e.slice(r, t)), ae(e.slice(t + 1, n))) : i < 0 ? [].concat(ae(e.slice(0, t)), ae(e.slice(t + 1, r + 1)), [a], ae(e.slice(r + 1, n))) : e;
}
var s0 = ["name"], rr = [];
function _i(e, t, r, n, a, i) {
  return typeof e == "function" ? e(t, r, "source" in i ? {
    source: i.source
  } : {}) : n !== a;
}
var Zo = /* @__PURE__ */ (function(e) {
  Ar(r, e);
  var t = Fr(r);
  function r(n) {
    var a;
    if (Pt(this, r), a = t.call(this, n), _(we(a), "state", {
      resetCount: 0
    }), _(we(a), "cancelRegisterFunc", null), _(we(a), "mounted", !1), _(we(a), "touched", !1), _(we(a), "dirty", !1), _(we(a), "validatePromise", void 0), _(we(a), "prevValidating", void 0), _(we(a), "errors", rr), _(we(a), "warnings", rr), _(we(a), "cancelRegister", function() {
      var l = a.props, u = l.preserve, f = l.isListField, d = l.name;
      a.cancelRegisterFunc && a.cancelRegisterFunc(f, u, ct(d)), a.cancelRegisterFunc = null;
    }), _(we(a), "getNamePath", function() {
      var l = a.props, u = l.name, f = l.fieldContext, d = f.prefixName, v = d === void 0 ? [] : d;
      return u !== void 0 ? [].concat(ae(v), ae(u)) : [];
    }), _(we(a), "getRules", function() {
      var l = a.props, u = l.rules, f = u === void 0 ? [] : u, d = l.fieldContext;
      return f.map(function(v) {
        return typeof v == "function" ? v(d) : v;
      });
    }), _(we(a), "refresh", function() {
      a.mounted && a.setState(function(l) {
        var u = l.resetCount;
        return {
          resetCount: u + 1
        };
      });
    }), _(we(a), "metaCache", null), _(we(a), "triggerMetaEvent", function(l) {
      var u = a.props.onMetaChange;
      if (u) {
        var f = M(M({}, a.getMeta()), {}, {
          destroy: l
        });
        zn(a.metaCache, f) || u(f), a.metaCache = f;
      } else
        a.metaCache = null;
    }), _(we(a), "onStoreChange", function(l, u, f) {
      var d = a.props, v = d.shouldUpdate, g = d.dependencies, h = g === void 0 ? [] : g, y = d.onReset, m = f.store, C = a.getNamePath(), p = a.getValue(l), S = a.getValue(m), $ = u && cn(u, C);
      switch (f.type === "valueUpdate" && f.source === "external" && !zn(p, S) && (a.touched = !0, a.dirty = !0, a.validatePromise = null, a.errors = rr, a.warnings = rr, a.triggerMetaEvent()), f.type) {
        case "reset":
          if (!u || $) {
            a.touched = !1, a.dirty = !1, a.validatePromise = void 0, a.errors = rr, a.warnings = rr, a.triggerMetaEvent(), y == null || y(), a.refresh();
            return;
          }
          break;
        /**
         * In case field with `preserve = false` nest deps like:
         * - A = 1 => show B
         * - B = 1 => show C
         * - Reset A, need clean B, C
         */
        case "remove": {
          if (v && _i(v, l, m, p, S, f)) {
            a.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var E = f.data;
          if ($) {
            "touched" in E && (a.touched = E.touched), "validating" in E && !("originRCField" in E) && (a.validatePromise = E.validating ? Promise.resolve([]) : null), "errors" in E && (a.errors = E.errors || rr), "warnings" in E && (a.warnings = E.warnings || rr), a.dirty = !0, a.triggerMetaEvent(), a.reRender();
            return;
          } else if ("value" in E && cn(u, C, !0)) {
            a.reRender();
            return;
          }
          if (v && !C.length && _i(v, l, m, p, S, f)) {
            a.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var x = h.map(ct);
          if (x.some(function(P) {
            return cn(f.relatedFields, P);
          })) {
            a.reRender();
            return;
          }
          break;
        }
        default:
          if ($ || (!h.length || C.length || v) && _i(v, l, m, p, S, f)) {
            a.reRender();
            return;
          }
          break;
      }
      v === !0 && a.reRender();
    }), _(we(a), "validateRules", function(l) {
      var u = a.getNamePath(), f = a.getValue(), d = l || {}, v = d.triggerName, g = d.validateOnly, h = g === void 0 ? !1 : g, y = Promise.resolve().then(/* @__PURE__ */ oa(/* @__PURE__ */ ir().mark(function m() {
        var C, p, S, $, E, x, P;
        return ir().wrap(function(R) {
          for (; ; ) switch (R.prev = R.next) {
            case 0:
              if (a.mounted) {
                R.next = 2;
                break;
              }
              return R.abrupt("return", []);
            case 2:
              if (C = a.props, p = C.validateFirst, S = p === void 0 ? !1 : p, $ = C.messageVariables, E = C.validateDebounce, x = a.getRules(), v && (x = x.filter(function(O) {
                return O;
              }).filter(function(O) {
                var I = O.validateTrigger;
                if (!I)
                  return !0;
                var F = po(I);
                return F.includes(v);
              })), !(E && v)) {
                R.next = 10;
                break;
              }
              return R.next = 8, new Promise(function(O) {
                setTimeout(O, E);
              });
            case 8:
              if (a.validatePromise === y) {
                R.next = 10;
                break;
              }
              return R.abrupt("return", []);
            case 10:
              return P = r0(u, f, x, l, S, $), P.catch(function(O) {
                return O;
              }).then(function() {
                var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : rr;
                if (a.validatePromise === y) {
                  var I;
                  a.validatePromise = null;
                  var F = [], A = [];
                  (I = O.forEach) === null || I === void 0 || I.call(O, function(k) {
                    var D = k.rule.warningOnly, L = k.errors, j = L === void 0 ? rr : L;
                    D ? A.push.apply(A, ae(j)) : F.push.apply(F, ae(j));
                  }), a.errors = F, a.warnings = A, a.triggerMetaEvent(), a.reRender();
                }
              }), R.abrupt("return", P);
            case 13:
            case "end":
              return R.stop();
          }
        }, m);
      })));
      return h || (a.validatePromise = y, a.dirty = !0, a.errors = rr, a.warnings = rr, a.triggerMetaEvent(), a.reRender()), y;
    }), _(we(a), "isFieldValidating", function() {
      return !!a.validatePromise;
    }), _(we(a), "isFieldTouched", function() {
      return a.touched;
    }), _(we(a), "isFieldDirty", function() {
      if (a.dirty || a.props.initialValue !== void 0)
        return !0;
      var l = a.props.fieldContext, u = l.getInternalHooks(zr), f = u.getInitialValue;
      return f(a.getNamePath()) !== void 0;
    }), _(we(a), "getErrors", function() {
      return a.errors;
    }), _(we(a), "getWarnings", function() {
      return a.warnings;
    }), _(we(a), "isListField", function() {
      return a.props.isListField;
    }), _(we(a), "isList", function() {
      return a.props.isList;
    }), _(we(a), "isPreserve", function() {
      return a.props.preserve;
    }), _(we(a), "getMeta", function() {
      a.prevValidating = a.isFieldValidating();
      var l = {
        touched: a.isFieldTouched(),
        validating: a.prevValidating,
        errors: a.errors,
        warnings: a.warnings,
        name: a.getNamePath(),
        validated: a.validatePromise === null
      };
      return l;
    }), _(we(a), "getOnlyChild", function(l) {
      if (typeof l == "function") {
        var u = a.getMeta();
        return M(M({}, a.getOnlyChild(l(a.getControlled(), u, a.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var f = mn(l);
      return f.length !== 1 || !/* @__PURE__ */ c.isValidElement(f[0]) ? {
        child: f,
        isFunction: !1
      } : {
        child: f[0],
        isFunction: !1
      };
    }), _(we(a), "getValue", function(l) {
      var u = a.props.fieldContext.getFieldsValue, f = a.getNamePath();
      return pr(l || u(!0), f);
    }), _(we(a), "getControlled", function() {
      var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = a.props, f = u.name, d = u.trigger, v = u.validateTrigger, g = u.getValueFromEvent, h = u.normalize, y = u.valuePropName, m = u.getValueProps, C = u.fieldContext, p = v !== void 0 ? v : C.validateTrigger, S = a.getNamePath(), $ = C.getInternalHooks, E = C.getFieldsValue, x = $(zr), P = x.dispatch, w = a.getValue(), R = m || function(k) {
        return _({}, y, k);
      }, O = l[d], I = f !== void 0 ? R(w) : {}, F = M(M({}, l), I);
      F[d] = function() {
        a.touched = !0, a.dirty = !0, a.triggerMetaEvent();
        for (var k, D = arguments.length, L = new Array(D), j = 0; j < D; j++)
          L[j] = arguments[j];
        g ? k = g.apply(void 0, L) : k = o0.apply(void 0, [y].concat(L)), h && (k = h(k, w, E(!0))), k !== w && P({
          type: "updateValue",
          namePath: S,
          value: k
        }), O && O.apply(void 0, L);
      };
      var A = po(p || []);
      return A.forEach(function(k) {
        var D = F[k];
        F[k] = function() {
          D && D.apply(void 0, arguments);
          var L = a.props.rules;
          L && L.length && P({
            type: "validateField",
            namePath: S,
            triggerName: k
          });
        };
      }), F;
    }), n.fieldContext) {
      var i = n.fieldContext.getInternalHooks, o = i(zr), s = o.initEntityValue;
      s(we(a));
    }
    return a;
  }
  return Rt(r, [{
    key: "componentDidMount",
    value: function() {
      var a = this.props, i = a.shouldUpdate, o = a.fieldContext;
      if (this.mounted = !0, o) {
        var s = o.getInternalHooks, l = s(zr), u = l.registerField;
        this.cancelRegisterFunc = u(this);
      }
      i === !0 && this.reRender();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1;
    }
  }, {
    key: "reRender",
    value: function() {
      this.mounted && this.forceUpdate();
    }
  }, {
    key: "render",
    value: function() {
      var a = this.state.resetCount, i = this.props.children, o = this.getOnlyChild(i), s = o.child, l = o.isFunction, u;
      return l ? u = s : /* @__PURE__ */ c.isValidElement(s) ? u = /* @__PURE__ */ c.cloneElement(s, this.getControlled(s.props)) : (Nt(!s, "`children` of Field is not validate ReactElement."), u = s), /* @__PURE__ */ c.createElement(c.Fragment, {
        key: a
      }, u);
    }
  }]), r;
})(c.Component);
_(Zo, "contextType", hn);
_(Zo, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function Su(e) {
  var t, r = e.name, n = ze(e, s0), a = c.useContext(hn), i = c.useContext(Da), o = r !== void 0 ? ct(r) : void 0, s = (t = n.isListField) !== null && t !== void 0 ? t : !!i, l = "keep";
  return s || (l = "_".concat((o || []).join("_"))), /* @__PURE__ */ c.createElement(Zo, fe({
    key: l,
    name: o,
    isListField: s
  }, n, {
    fieldContext: a
  }));
}
function l0(e) {
  var t = e.name, r = e.initialValue, n = e.children, a = e.rules, i = e.validateTrigger, o = e.isListField, s = c.useContext(hn), l = c.useContext(Da), u = c.useRef({
    keys: [],
    id: 0
  }), f = u.current, d = c.useMemo(function() {
    var y = ct(s.prefixName) || [];
    return [].concat(ae(y), ae(ct(t)));
  }, [s.prefixName, t]), v = c.useMemo(function() {
    return M(M({}, s), {}, {
      prefixName: d
    });
  }, [s, d]), g = c.useMemo(function() {
    return {
      getKey: function(m) {
        var C = d.length, p = m[C];
        return [f.keys[p], m.slice(C + 1)];
      }
    };
  }, [d]);
  if (typeof n != "function")
    return Nt(!1, "Form.List only accepts function as children."), null;
  var h = function(m, C, p) {
    var S = p.source;
    return S === "internal" ? !1 : m !== C;
  };
  return /* @__PURE__ */ c.createElement(Da.Provider, {
    value: g
  }, /* @__PURE__ */ c.createElement(hn.Provider, {
    value: v
  }, /* @__PURE__ */ c.createElement(Su, {
    name: [],
    shouldUpdate: h,
    rules: a,
    validateTrigger: i,
    initialValue: r,
    isList: !0,
    isListField: o ?? !!l
  }, function(y, m) {
    var C = y.value, p = C === void 0 ? [] : C, S = y.onChange, $ = s.getFieldValue, E = function() {
      var R = $(d || []);
      return R || [];
    }, x = {
      add: function(R, O) {
        var I = E();
        O >= 0 && O <= I.length ? (f.keys = [].concat(ae(f.keys.slice(0, O)), [f.id], ae(f.keys.slice(O))), S([].concat(ae(I.slice(0, O)), [R], ae(I.slice(O))))) : (f.keys = [].concat(ae(f.keys), [f.id]), S([].concat(ae(I), [R]))), f.id += 1;
      },
      remove: function(R) {
        var O = E(), I = new Set(Array.isArray(R) ? R : [R]);
        I.size <= 0 || (f.keys = f.keys.filter(function(F, A) {
          return !I.has(A);
        }), S(O.filter(function(F, A) {
          return !I.has(A);
        })));
      },
      move: function(R, O) {
        if (R !== O) {
          var I = E();
          R < 0 || R >= I.length || O < 0 || O >= I.length || (f.keys = Tl(f.keys, R, O), S(Tl(I, R, O)));
        }
      }
    }, P = p || [];
    return Array.isArray(P) || (P = []), n(P.map(function(w, R) {
      var O = f.keys[R];
      return O === void 0 && (f.keys[R] = f.id, O = f.keys[R], f.id += 1), {
        name: R,
        key: O,
        isListField: !0
      };
    }), x, m);
  })));
}
function c0(e) {
  var t = !1, r = e.length, n = [];
  return e.length ? new Promise(function(a, i) {
    e.forEach(function(o, s) {
      o.catch(function(l) {
        return t = !0, l;
      }).then(function(l) {
        r -= 1, n[s] = l, !(r > 0) && (t && i(n), a(n));
      });
    });
  }) : Promise.resolve([]);
}
var wu = "__@field_split__";
function Pi(e) {
  return e.map(function(t) {
    return "".concat(ce(t), ":").concat(t);
  }).join(wu);
}
var en = /* @__PURE__ */ (function() {
  function e() {
    Pt(this, e), _(this, "kvs", /* @__PURE__ */ new Map());
  }
  return Rt(e, [{
    key: "set",
    value: function(r, n) {
      this.kvs.set(Pi(r), n);
    }
  }, {
    key: "get",
    value: function(r) {
      return this.kvs.get(Pi(r));
    }
  }, {
    key: "update",
    value: function(r, n) {
      var a = this.get(r), i = n(a);
      i ? this.set(r, i) : this.delete(r);
    }
  }, {
    key: "delete",
    value: function(r) {
      this.kvs.delete(Pi(r));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(r) {
      return ae(this.kvs.entries()).map(function(n) {
        var a = N(n, 2), i = a[0], o = a[1], s = i.split(wu);
        return r({
          key: s.map(function(l) {
            var u = l.match(/^([^:]*):(.*)$/), f = N(u, 3), d = f[1], v = f[2];
            return d === "number" ? Number(v) : v;
          }),
          value: o
        });
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      var r = {};
      return this.map(function(n) {
        var a = n.key, i = n.value;
        return r[a.join(".")] = i, null;
      }), r;
    }
  }]), e;
})(), u0 = ["name"], f0 = /* @__PURE__ */ Rt(function e(t) {
  var r = this;
  Pt(this, e), _(this, "formHooked", !1), _(this, "forceRootUpdate", void 0), _(this, "subscribable", !0), _(this, "store", {}), _(this, "fieldEntities", []), _(this, "initialValues", {}), _(this, "callbacks", {}), _(this, "validateMessages", null), _(this, "preserve", null), _(this, "lastValidatePromise", null), _(this, "getForm", function() {
    return {
      getFieldValue: r.getFieldValue,
      getFieldsValue: r.getFieldsValue,
      getFieldError: r.getFieldError,
      getFieldWarning: r.getFieldWarning,
      getFieldsError: r.getFieldsError,
      isFieldsTouched: r.isFieldsTouched,
      isFieldTouched: r.isFieldTouched,
      isFieldValidating: r.isFieldValidating,
      isFieldsValidating: r.isFieldsValidating,
      resetFields: r.resetFields,
      setFields: r.setFields,
      setFieldValue: r.setFieldValue,
      setFieldsValue: r.setFieldsValue,
      validateFields: r.validateFields,
      submit: r.submit,
      _init: !0,
      getInternalHooks: r.getInternalHooks
    };
  }), _(this, "getInternalHooks", function(n) {
    return n === zr ? (r.formHooked = !0, {
      dispatch: r.dispatch,
      initEntityValue: r.initEntityValue,
      registerField: r.registerField,
      useSubscribe: r.useSubscribe,
      setInitialValues: r.setInitialValues,
      destroyForm: r.destroyForm,
      setCallbacks: r.setCallbacks,
      setValidateMessages: r.setValidateMessages,
      getFields: r.getFields,
      setPreserve: r.setPreserve,
      getInitialValue: r.getInitialValue,
      registerWatch: r.registerWatch
    }) : (Nt(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), _(this, "useSubscribe", function(n) {
    r.subscribable = n;
  }), _(this, "prevWithoutPreserves", null), _(this, "setInitialValues", function(n, a) {
    if (r.initialValues = n || {}, a) {
      var i, o = tn(n, r.store);
      (i = r.prevWithoutPreserves) === null || i === void 0 || i.map(function(s) {
        var l = s.key;
        o = lr(o, l, pr(n, l));
      }), r.prevWithoutPreserves = null, r.updateStore(o);
    }
  }), _(this, "destroyForm", function(n) {
    if (n)
      r.updateStore({});
    else {
      var a = new en();
      r.getFieldEntities(!0).forEach(function(i) {
        r.isMergedPreserve(i.isPreserve()) || a.set(i.getNamePath(), !0);
      }), r.prevWithoutPreserves = a;
    }
  }), _(this, "getInitialValue", function(n) {
    var a = pr(r.initialValues, n);
    return n.length ? tn(a) : a;
  }), _(this, "setCallbacks", function(n) {
    r.callbacks = n;
  }), _(this, "setValidateMessages", function(n) {
    r.validateMessages = n;
  }), _(this, "setPreserve", function(n) {
    r.preserve = n;
  }), _(this, "watchList", []), _(this, "registerWatch", function(n) {
    return r.watchList.push(n), function() {
      r.watchList = r.watchList.filter(function(a) {
        return a !== n;
      });
    };
  }), _(this, "notifyWatch", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (r.watchList.length) {
      var a = r.getFieldsValue(), i = r.getFieldsValue(!0);
      r.watchList.forEach(function(o) {
        o(a, i, n);
      });
    }
  }), _(this, "timeoutId", null), _(this, "warningUnhooked", function() {
  }), _(this, "updateStore", function(n) {
    r.store = n;
  }), _(this, "getFieldEntities", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return n ? r.fieldEntities.filter(function(a) {
      return a.getNamePath().length;
    }) : r.fieldEntities;
  }), _(this, "getFieldsMap", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, a = new en();
    return r.getFieldEntities(n).forEach(function(i) {
      var o = i.getNamePath();
      a.set(o, i);
    }), a;
  }), _(this, "getFieldEntitiesForNamePathList", function(n) {
    if (!n)
      return r.getFieldEntities(!0);
    var a = r.getFieldsMap(!0);
    return n.map(function(i) {
      var o = ct(i);
      return a.get(o) || {
        INVALIDATE_NAME_PATH: ct(i)
      };
    });
  }), _(this, "getFieldsValue", function(n, a) {
    r.warningUnhooked();
    var i, o, s;
    if (n === !0 || Array.isArray(n) ? (i = n, o = a) : n && ce(n) === "object" && (s = n.strict, o = n.filter), i === !0 && !o)
      return r.store;
    var l = r.getFieldEntitiesForNamePathList(Array.isArray(i) ? i : null), u = [];
    return l.forEach(function(f) {
      var d, v, g = "INVALIDATE_NAME_PATH" in f ? f.INVALIDATE_NAME_PATH : f.getNamePath();
      if (s) {
        var h, y;
        if ((h = (y = f).isList) !== null && h !== void 0 && h.call(y))
          return;
      } else if (!i && (d = (v = f).isListField) !== null && d !== void 0 && d.call(v))
        return;
      if (!o)
        u.push(g);
      else {
        var m = "getMeta" in f ? f.getMeta() : null;
        o(m) && u.push(g);
      }
    }), Ml(r.store, u.map(ct));
  }), _(this, "getFieldValue", function(n) {
    r.warningUnhooked();
    var a = ct(n);
    return pr(r.store, a);
  }), _(this, "getFieldsError", function(n) {
    r.warningUnhooked();
    var a = r.getFieldEntitiesForNamePathList(n);
    return a.map(function(i, o) {
      return i && !("INVALIDATE_NAME_PATH" in i) ? {
        name: i.getNamePath(),
        errors: i.getErrors(),
        warnings: i.getWarnings()
      } : {
        name: ct(n[o]),
        errors: [],
        warnings: []
      };
    });
  }), _(this, "getFieldError", function(n) {
    r.warningUnhooked();
    var a = ct(n), i = r.getFieldsError([a])[0];
    return i.errors;
  }), _(this, "getFieldWarning", function(n) {
    r.warningUnhooked();
    var a = ct(n), i = r.getFieldsError([a])[0];
    return i.warnings;
  }), _(this, "isFieldsTouched", function() {
    r.warningUnhooked();
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    var o = a[0], s = a[1], l, u = !1;
    a.length === 0 ? l = null : a.length === 1 ? Array.isArray(o) ? (l = o.map(ct), u = !1) : (l = null, u = o) : (l = o.map(ct), u = s);
    var f = r.getFieldEntities(!0), d = function(m) {
      return m.isFieldTouched();
    };
    if (!l)
      return u ? f.every(function(y) {
        return d(y) || y.isList();
      }) : f.some(d);
    var v = new en();
    l.forEach(function(y) {
      v.set(y, []);
    }), f.forEach(function(y) {
      var m = y.getNamePath();
      l.forEach(function(C) {
        C.every(function(p, S) {
          return m[S] === p;
        }) && v.update(C, function(p) {
          return [].concat(ae(p), [y]);
        });
      });
    });
    var g = function(m) {
      return m.some(d);
    }, h = v.map(function(y) {
      var m = y.value;
      return m;
    });
    return u ? h.every(g) : h.some(g);
  }), _(this, "isFieldTouched", function(n) {
    return r.warningUnhooked(), r.isFieldsTouched([n]);
  }), _(this, "isFieldsValidating", function(n) {
    r.warningUnhooked();
    var a = r.getFieldEntities();
    if (!n)
      return a.some(function(o) {
        return o.isFieldValidating();
      });
    var i = n.map(ct);
    return a.some(function(o) {
      var s = o.getNamePath();
      return cn(i, s) && o.isFieldValidating();
    });
  }), _(this, "isFieldValidating", function(n) {
    return r.warningUnhooked(), r.isFieldsValidating([n]);
  }), _(this, "resetWithFieldInitialValue", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = new en(), i = r.getFieldEntities(!0);
    i.forEach(function(l) {
      var u = l.props.initialValue, f = l.getNamePath();
      if (u !== void 0) {
        var d = a.get(f) || /* @__PURE__ */ new Set();
        d.add({
          entity: l,
          value: u
        }), a.set(f, d);
      }
    });
    var o = function(u) {
      u.forEach(function(f) {
        var d = f.props.initialValue;
        if (d !== void 0) {
          var v = f.getNamePath(), g = r.getInitialValue(v);
          if (g !== void 0)
            Nt(!1, "Form already set 'initialValues' with path '".concat(v.join("."), "'. Field can not overwrite it."));
          else {
            var h = a.get(v);
            if (h && h.size > 1)
              Nt(!1, "Multiple Field with path '".concat(v.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (h) {
              var y = r.getFieldValue(v), m = f.isListField();
              !m && (!n.skipExist || y === void 0) && r.updateStore(lr(r.store, v, ae(h)[0].value));
            }
          }
        }
      });
    }, s;
    n.entities ? s = n.entities : n.namePathList ? (s = [], n.namePathList.forEach(function(l) {
      var u = a.get(l);
      if (u) {
        var f;
        (f = s).push.apply(f, ae(ae(u).map(function(d) {
          return d.entity;
        })));
      }
    })) : s = i, o(s);
  }), _(this, "resetFields", function(n) {
    r.warningUnhooked();
    var a = r.store;
    if (!n) {
      r.updateStore(tn(r.initialValues)), r.resetWithFieldInitialValue(), r.notifyObservers(a, null, {
        type: "reset"
      }), r.notifyWatch();
      return;
    }
    var i = n.map(ct);
    i.forEach(function(o) {
      var s = r.getInitialValue(o);
      r.updateStore(lr(r.store, o, s));
    }), r.resetWithFieldInitialValue({
      namePathList: i
    }), r.notifyObservers(a, i, {
      type: "reset"
    }), r.notifyWatch(i);
  }), _(this, "setFields", function(n) {
    r.warningUnhooked();
    var a = r.store, i = [];
    n.forEach(function(o) {
      var s = o.name, l = ze(o, u0), u = ct(s);
      i.push(u), "value" in l && r.updateStore(lr(r.store, u, l.value)), r.notifyObservers(a, [u], {
        type: "setField",
        data: o
      });
    }), r.notifyWatch(i);
  }), _(this, "getFields", function() {
    var n = r.getFieldEntities(!0), a = n.map(function(i) {
      var o = i.getNamePath(), s = i.getMeta(), l = M(M({}, s), {}, {
        name: o,
        value: r.getFieldValue(o)
      });
      return Object.defineProperty(l, "originRCField", {
        value: !0
      }), l;
    });
    return a;
  }), _(this, "initEntityValue", function(n) {
    var a = n.props.initialValue;
    if (a !== void 0) {
      var i = n.getNamePath(), o = pr(r.store, i);
      o === void 0 && r.updateStore(lr(r.store, i, a));
    }
  }), _(this, "isMergedPreserve", function(n) {
    var a = n !== void 0 ? n : r.preserve;
    return a ?? !0;
  }), _(this, "registerField", function(n) {
    r.fieldEntities.push(n);
    var a = n.getNamePath();
    if (r.notifyWatch([a]), n.props.initialValue !== void 0) {
      var i = r.store;
      r.resetWithFieldInitialValue({
        entities: [n],
        skipExist: !0
      }), r.notifyObservers(i, [n.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(o, s) {
      var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (r.fieldEntities = r.fieldEntities.filter(function(d) {
        return d !== n;
      }), !r.isMergedPreserve(s) && (!o || l.length > 1)) {
        var u = o ? void 0 : r.getInitialValue(a);
        if (a.length && r.getFieldValue(a) !== u && r.fieldEntities.every(function(d) {
          return (
            // Only reset when no namePath exist
            !Cu(d.getNamePath(), a)
          );
        })) {
          var f = r.store;
          r.updateStore(lr(f, a, u, !0)), r.notifyObservers(f, [a], {
            type: "remove"
          }), r.triggerDependenciesUpdate(f, a);
        }
      }
      r.notifyWatch([a]);
    };
  }), _(this, "dispatch", function(n) {
    switch (n.type) {
      case "updateValue": {
        var a = n.namePath, i = n.value;
        r.updateValue(a, i);
        break;
      }
      case "validateField": {
        var o = n.namePath, s = n.triggerName;
        r.validateFields([o], {
          triggerName: s
        });
        break;
      }
    }
  }), _(this, "notifyObservers", function(n, a, i) {
    if (r.subscribable) {
      var o = M(M({}, i), {}, {
        store: r.getFieldsValue(!0)
      });
      r.getFieldEntities().forEach(function(s) {
        var l = s.onStoreChange;
        l(n, a, o);
      });
    } else
      r.forceRootUpdate();
  }), _(this, "triggerDependenciesUpdate", function(n, a) {
    var i = r.getDependencyChildrenFields(a);
    return i.length && r.validateFields(i), r.notifyObservers(n, i, {
      type: "dependenciesUpdate",
      relatedFields: [a].concat(ae(i))
    }), i;
  }), _(this, "updateValue", function(n, a) {
    var i = ct(n), o = r.store;
    r.updateStore(lr(r.store, i, a)), r.notifyObservers(o, [i], {
      type: "valueUpdate",
      source: "internal"
    }), r.notifyWatch([i]);
    var s = r.triggerDependenciesUpdate(o, i), l = r.callbacks.onValuesChange;
    if (l) {
      var u = Ml(r.store, [i]);
      l(u, r.getFieldsValue());
    }
    r.triggerOnFieldsChange([i].concat(ae(s)));
  }), _(this, "setFieldsValue", function(n) {
    r.warningUnhooked();
    var a = r.store;
    if (n) {
      var i = tn(r.store, n);
      r.updateStore(i);
    }
    r.notifyObservers(a, null, {
      type: "valueUpdate",
      source: "external"
    }), r.notifyWatch();
  }), _(this, "setFieldValue", function(n, a) {
    r.setFields([{
      name: n,
      value: a,
      errors: [],
      warnings: []
    }]);
  }), _(this, "getDependencyChildrenFields", function(n) {
    var a = /* @__PURE__ */ new Set(), i = [], o = new en();
    r.getFieldEntities().forEach(function(l) {
      var u = l.props.dependencies;
      (u || []).forEach(function(f) {
        var d = ct(f);
        o.update(d, function() {
          var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return v.add(l), v;
        });
      });
    });
    var s = function l(u) {
      var f = o.get(u) || /* @__PURE__ */ new Set();
      f.forEach(function(d) {
        if (!a.has(d)) {
          a.add(d);
          var v = d.getNamePath();
          d.isFieldDirty() && v.length && (i.push(v), l(v));
        }
      });
    };
    return s(n), i;
  }), _(this, "triggerOnFieldsChange", function(n, a) {
    var i = r.callbacks.onFieldsChange;
    if (i) {
      var o = r.getFields();
      if (a) {
        var s = new en();
        a.forEach(function(u) {
          var f = u.name, d = u.errors;
          s.set(f, d);
        }), o.forEach(function(u) {
          u.errors = s.get(u.name) || u.errors;
        });
      }
      var l = o.filter(function(u) {
        var f = u.name;
        return cn(n, f);
      });
      l.length && i(l, o);
    }
  }), _(this, "validateFields", function(n, a) {
    r.warningUnhooked();
    var i, o;
    Array.isArray(n) || typeof n == "string" || typeof a == "string" ? (i = n, o = a) : o = n;
    var s = !!i, l = s ? i.map(ct) : [], u = [], f = String(Date.now()), d = /* @__PURE__ */ new Set(), v = o || {}, g = v.recursive, h = v.dirty;
    r.getFieldEntities(!0).forEach(function(p) {
      if (s || l.push(p.getNamePath()), !(!p.props.rules || !p.props.rules.length) && !(h && !p.isFieldDirty())) {
        var S = p.getNamePath();
        if (d.add(S.join(f)), !s || cn(l, S, g)) {
          var $ = p.validateRules(M({
            validateMessages: M(M({}, bu), r.validateMessages)
          }, o));
          u.push($.then(function() {
            return {
              name: S,
              errors: [],
              warnings: []
            };
          }).catch(function(E) {
            var x, P = [], w = [];
            return (x = E.forEach) === null || x === void 0 || x.call(E, function(R) {
              var O = R.rule.warningOnly, I = R.errors;
              O ? w.push.apply(w, ae(I)) : P.push.apply(P, ae(I));
            }), P.length ? Promise.reject({
              name: S,
              errors: P,
              warnings: w
            }) : {
              name: S,
              errors: P,
              warnings: w
            };
          }));
        }
      }
    });
    var y = c0(u);
    r.lastValidatePromise = y, y.catch(function(p) {
      return p;
    }).then(function(p) {
      var S = p.map(function($) {
        var E = $.name;
        return E;
      });
      r.notifyObservers(r.store, S, {
        type: "validateFinish"
      }), r.triggerOnFieldsChange(S, p);
    });
    var m = y.then(function() {
      return r.lastValidatePromise === y ? Promise.resolve(r.getFieldsValue(l)) : Promise.reject([]);
    }).catch(function(p) {
      var S = p.filter(function($) {
        return $ && $.errors.length;
      });
      return Promise.reject({
        values: r.getFieldsValue(l),
        errorFields: S,
        outOfDate: r.lastValidatePromise !== y
      });
    });
    m.catch(function(p) {
      return p;
    });
    var C = l.filter(function(p) {
      return d.has(p.join(f));
    });
    return r.triggerOnFieldsChange(C), m;
  }), _(this, "submit", function() {
    r.warningUnhooked(), r.validateFields().then(function(n) {
      var a = r.callbacks.onFinish;
      if (a)
        try {
          a(n);
        } catch (i) {
          console.error(i);
        }
    }).catch(function(n) {
      var a = r.callbacks.onFinishFailed;
      a && a(n);
    });
  }), this.forceRootUpdate = t;
});
function xu(e) {
  var t = c.useRef(), r = c.useState({}), n = N(r, 2), a = n[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var i = function() {
        a({});
      }, o = new f0(i);
      t.current = o.getForm();
    }
  return [t.current];
}
var _o = /* @__PURE__ */ c.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), d0 = function(t) {
  var r = t.validateMessages, n = t.onFormChange, a = t.onFormFinish, i = t.children, o = c.useContext(_o), s = c.useRef({});
  return /* @__PURE__ */ c.createElement(_o.Provider, {
    value: M(M({}, o), {}, {
      validateMessages: M(M({}, o.validateMessages), r),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(u, f) {
        n && n(u, {
          changedFields: f,
          forms: s.current
        }), o.triggerFormChange(u, f);
      },
      triggerFormFinish: function(u, f) {
        a && a(u, {
          values: f,
          forms: s.current
        }), o.triggerFormFinish(u, f);
      },
      registerForm: function(u, f) {
        u && (s.current = M(M({}, s.current), {}, _({}, u, f))), o.registerForm(u, f);
      },
      unregisterForm: function(u) {
        var f = M({}, s.current);
        delete f[u], s.current = f, o.unregisterForm(u);
      }
    })
  }, i);
}, v0 = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"], m0 = function(t, r) {
  var n = t.name, a = t.initialValues, i = t.fields, o = t.form, s = t.preserve, l = t.children, u = t.component, f = u === void 0 ? "form" : u, d = t.validateMessages, v = t.validateTrigger, g = v === void 0 ? "onChange" : v, h = t.onValuesChange, y = t.onFieldsChange, m = t.onFinish, C = t.onFinishFailed, p = t.clearOnDestroy, S = ze(t, v0), $ = c.useRef(null), E = c.useContext(_o), x = xu(o), P = N(x, 1), w = P[0], R = w.getInternalHooks(zr), O = R.useSubscribe, I = R.setInitialValues, F = R.setCallbacks, A = R.setValidateMessages, k = R.setPreserve, D = R.destroyForm;
  c.useImperativeHandle(r, function() {
    return M(M({}, w), {}, {
      nativeElement: $.current
    });
  }), c.useEffect(function() {
    return E.registerForm(n, w), function() {
      E.unregisterForm(n);
    };
  }, [E, w, n]), A(M(M({}, E.validateMessages), d)), F({
    onValuesChange: h,
    onFieldsChange: function(b) {
      if (E.triggerFormChange(n, b), y) {
        for (var T = arguments.length, z = new Array(T > 1 ? T - 1 : 0), V = 1; V < T; V++)
          z[V - 1] = arguments[V];
        y.apply(void 0, [b].concat(z));
      }
    },
    onFinish: function(b) {
      E.triggerFormFinish(n, b), m && m(b);
    },
    onFinishFailed: C
  }), k(s);
  var L = c.useRef(null);
  I(a, !L.current), L.current || (L.current = !0), c.useEffect(
    function() {
      return function() {
        return D(p);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var j, H = typeof l == "function";
  if (H) {
    var K = w.getFieldsValue(!0);
    j = l(K, w);
  } else
    j = l;
  O(!H);
  var W = c.useRef();
  c.useEffect(function() {
    i0(W.current || [], i || []) || w.setFields(i || []), W.current = i;
  }, [i, w]);
  var X = c.useMemo(function() {
    return M(M({}, w), {}, {
      validateTrigger: g
    });
  }, [w, g]), G = /* @__PURE__ */ c.createElement(Da.Provider, {
    value: null
  }, /* @__PURE__ */ c.createElement(hn.Provider, {
    value: X
  }, j));
  return f === !1 ? G : /* @__PURE__ */ c.createElement(f, fe({}, S, {
    ref: $,
    onSubmit: function(b) {
      b.preventDefault(), b.stopPropagation(), w.submit();
    },
    onReset: function(b) {
      var T;
      b.preventDefault(), w.resetFields(), (T = S.onReset) === null || T === void 0 || T.call(S, b);
    }
  }), G);
};
function Ol(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
function g0() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0], a = t[1], i = a === void 0 ? {} : a, o = xp(i) ? {
    form: i
  } : i, s = o.form, l = c.useState(), u = N(l, 2), f = u[0], d = u[1], v = c.useMemo(function() {
    return Ol(f);
  }, [f]), g = c.useRef(v);
  g.current = v;
  var h = c.useContext(hn), y = s || h, m = y && y._init, C = ct(n), p = c.useRef(C);
  return p.current = C, c.useEffect(
    function() {
      if (m) {
        var S = y.getFieldsValue, $ = y.getInternalHooks, E = $(zr), x = E.registerWatch, P = function(I, F) {
          var A = o.preserve ? F : I;
          return typeof n == "function" ? n(A) : pr(A, p.current);
        }, w = x(function(O, I) {
          var F = P(O, I), A = Ol(F);
          g.current !== A && (g.current = A, d(F));
        }), R = P(S(), S(!0));
        return f !== R && d(R), w;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [m]
  ), f;
}
var h0 = /* @__PURE__ */ c.forwardRef(m0), la = h0;
la.FormProvider = d0;
la.Field = Su;
la.List = l0;
la.useForm = xu;
la.useWatch = g0;
const p0 = /* @__PURE__ */ c.createContext(void 0), y0 = (e, t, r) => {
  var n, a;
  const {
    variant: i,
    [e]: o
  } = c.useContext(_t), s = c.useContext(p0), l = o == null ? void 0 : o.variant;
  let u;
  typeof t < "u" ? u = t : r === !1 ? u = "borderless" : u = (a = (n = s ?? l) !== null && n !== void 0 ? n : i) !== null && a !== void 0 ? a : "outlined";
  const f = pd.includes(u);
  return [u, f];
};
var Il = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const b0 = (e) => {
  const {
    actionClasses: t,
    actions: r = [],
    actionStyle: n
  } = e;
  return /* @__PURE__ */ c.createElement("ul", {
    className: t,
    style: n
  }, r.map((a, i) => {
    const o = `action-${i}`;
    return /* @__PURE__ */ c.createElement("li", {
      style: {
        width: `${100 / r.length}%`
      },
      key: o
    }, /* @__PURE__ */ c.createElement("span", null, a));
  }));
}, C0 = /* @__PURE__ */ c.forwardRef((e, t) => {
  const {
    prefixCls: r,
    className: n,
    rootClassName: a,
    style: i,
    extra: o,
    headStyle: s = {},
    bodyStyle: l = {},
    title: u,
    loading: f,
    bordered: d,
    variant: v,
    size: g,
    type: h,
    cover: y,
    actions: m,
    tabList: C,
    children: p,
    activeTabKey: S,
    defaultActiveTabKey: $,
    tabBarExtraContent: E,
    hoverable: x,
    tabProps: P = {},
    classNames: w,
    styles: R
  } = e, O = Il(e, ["prefixCls", "className", "rootClassName", "style", "extra", "headStyle", "bodyStyle", "title", "loading", "bordered", "variant", "size", "type", "cover", "actions", "tabList", "children", "activeTabKey", "defaultActiveTabKey", "tabBarExtraContent", "hoverable", "tabProps", "classNames", "styles"]), {
    getPrefixCls: I,
    direction: F,
    card: A
  } = c.useContext(_t), [k] = y0("card", v, d), D = (ge) => {
    var J;
    (J = e.onTabChange) === null || J === void 0 || J.call(e, ge);
  }, L = (ge) => {
    var J;
    return ne((J = A == null ? void 0 : A.classNames) === null || J === void 0 ? void 0 : J[ge], w == null ? void 0 : w[ge]);
  }, j = (ge) => {
    var J;
    return Object.assign(Object.assign({}, (J = A == null ? void 0 : A.styles) === null || J === void 0 ? void 0 : J[ge]), R == null ? void 0 : R[ge]);
  }, H = c.useMemo(() => {
    let ge = !1;
    return c.Children.forEach(p, (J) => {
      (J == null ? void 0 : J.type) === gu && (ge = !0);
    }), ge;
  }, [p]), K = I("card", r), [W, X, G] = Cp(K), U = /* @__PURE__ */ c.createElement(Cn, {
    loading: !0,
    active: !0,
    paragraph: {
      rows: 4
    },
    title: !1
  }, p), b = S !== void 0, T = Object.assign(Object.assign({}, P), {
    [b ? "activeKey" : "defaultActiveKey"]: b ? S : $,
    tabBarExtraContent: E
  });
  let z;
  const V = Ic(g), q = !V || V === "default" ? "large" : V, B = C ? /* @__PURE__ */ c.createElement(mu, Object.assign({
    size: q
  }, T, {
    className: `${K}-head-tabs`,
    onChange: D,
    items: C.map((ge) => {
      var {
        tab: J
      } = ge, ve = Il(ge, ["tab"]);
      return Object.assign({
        label: J
      }, ve);
    })
  })) : null;
  if (u || o || B) {
    const ge = ne(`${K}-head`, L("header")), J = ne(`${K}-head-title`, L("title")), ve = ne(`${K}-extra`, L("extra")), ye = Object.assign(Object.assign({}, s), j("header"));
    z = /* @__PURE__ */ c.createElement("div", {
      className: ge,
      style: ye
    }, /* @__PURE__ */ c.createElement("div", {
      className: `${K}-head-wrapper`
    }, u && /* @__PURE__ */ c.createElement("div", {
      className: J,
      style: j("title")
    }, u), o && /* @__PURE__ */ c.createElement("div", {
      className: ve,
      style: j("extra")
    }, o)), B);
  }
  const Z = ne(`${K}-cover`, L("cover")), se = y ? /* @__PURE__ */ c.createElement("div", {
    className: Z,
    style: j("cover")
  }, y) : null, oe = ne(`${K}-body`, L("body")), xe = Object.assign(Object.assign({}, l), j("body")), ie = /* @__PURE__ */ c.createElement("div", {
    className: oe,
    style: xe
  }, f ? U : p), Ee = ne(`${K}-actions`, L("actions")), $e = m != null && m.length ? /* @__PURE__ */ c.createElement(b0, {
    actionClasses: Ee,
    actionStyle: j("actions"),
    actions: m
  }) : null, He = Br(O, ["onTabChange"]), qe = ne(K, A == null ? void 0 : A.className, {
    [`${K}-loading`]: f,
    [`${K}-bordered`]: k !== "borderless",
    [`${K}-hoverable`]: x,
    [`${K}-contain-grid`]: H,
    [`${K}-contain-tabs`]: C == null ? void 0 : C.length,
    [`${K}-${V}`]: V,
    [`${K}-type-${h}`]: !!h,
    [`${K}-rtl`]: F === "rtl"
  }, n, a, X, G), Ne = Object.assign(Object.assign({}, A == null ? void 0 : A.style), i);
  return W(/* @__PURE__ */ c.createElement("div", Object.assign({
    ref: t
  }, He, {
    className: qe,
    style: Ne
  }), z, se, ie, $e));
});
var S0 = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const w0 = (e) => {
  const {
    prefixCls: t,
    className: r,
    avatar: n,
    title: a,
    description: i
  } = e, o = S0(e, ["prefixCls", "className", "avatar", "title", "description"]), {
    getPrefixCls: s
  } = c.useContext(_t), l = s("card", t), u = ne(`${l}-meta`, r), f = n ? /* @__PURE__ */ c.createElement("div", {
    className: `${l}-meta-avatar`
  }, n) : null, d = a ? /* @__PURE__ */ c.createElement("div", {
    className: `${l}-meta-title`
  }, a) : null, v = i ? /* @__PURE__ */ c.createElement("div", {
    className: `${l}-meta-description`
  }, i) : null, g = d || v ? /* @__PURE__ */ c.createElement("div", {
    className: `${l}-meta-detail`
  }, d, v) : null;
  return /* @__PURE__ */ c.createElement("div", Object.assign({}, o, {
    className: u
  }), f, g);
}, Eu = C0;
Eu.Grid = gu;
Eu.Meta = w0;
export {
  Eu as C,
  Xe as R,
  Ru as a,
  kl as r
};
