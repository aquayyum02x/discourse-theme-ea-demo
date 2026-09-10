import { r as Fo, a as Wo, C as $o, R as ko } from "./ant-design-CO_lDc1T.js";
var o0 = { exports: {} }, Fn = {}, g0 = { exports: {} }, S0 = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ky;
function Io() {
  return Ky || (Ky = 1, (function(b) {
    function x(E, C) {
      var M = E.length;
      E.push(C);
      l: for (; 0 < M; ) {
        var ll = M - 1 >>> 1, W = E[ll];
        if (0 < il(W, C))
          E[ll] = C, E[M] = W, M = ll;
        else break l;
      }
    }
    function p(E) {
      return E.length === 0 ? null : E[0];
    }
    function S(E) {
      if (E.length === 0) return null;
      var C = E[0], M = E.pop();
      if (M !== C) {
        E[0] = M;
        l: for (var ll = 0, W = E.length, kt = W >>> 1; ll < kt; ) {
          var aa = 2 * (ll + 1) - 1, $a = E[aa], ct = aa + 1, na = E[ct];
          if (0 > il($a, M))
            ct < W && 0 > il(na, $a) ? (E[ll] = na, E[ct] = M, ll = ct) : (E[ll] = $a, E[aa] = M, ll = aa);
          else if (ct < W && 0 > il(na, M))
            E[ll] = na, E[ct] = M, ll = ct;
          else break l;
        }
      }
      return C;
    }
    function il(E, C) {
      var M = E.sortIndex - C.sortIndex;
      return M !== 0 ? M : E.id - C.id;
    }
    if (b.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var ol = performance;
      b.unstable_now = function() {
        return ol.now();
      };
    } else {
      var Dl = Date, wt = Dl.now();
      b.unstable_now = function() {
        return Dl.now() - wt;
      };
    }
    var kl = [], ot = [], $n = 1, F = null, tl = 3, Iu = !1, Ft = !1, Wt = !1, al = !1, Ct = typeof setTimeout == "function" ? setTimeout : null, Pu = typeof clearTimeout == "function" ? clearTimeout : null, kn = typeof setImmediate < "u" ? setImmediate : null;
    function la(E) {
      for (var C = p(ot); C !== null; ) {
        if (C.callback === null) S(ot);
        else if (C.startTime <= E)
          S(ot), C.sortIndex = C.expirationTime, x(kl, C);
        else break;
        C = p(ot);
      }
    }
    function ta(E) {
      if (Wt = !1, la(E), !Ft)
        if (p(kl) !== null)
          Ft = !0, gt || (gt = !0, Rt());
        else {
          var C = p(ot);
          C !== null && ql(ta, C.startTime - E);
        }
    }
    var gt = !1, X = -1, In = 5, Mu = -1;
    function $t() {
      return al ? !0 : !(b.unstable_now() - Mu < In);
    }
    function St() {
      if (al = !1, gt) {
        var E = b.unstable_now();
        Mu = E;
        var C = !0;
        try {
          l: {
            Ft = !1, Wt && (Wt = !1, Pu(X), X = -1), Iu = !0;
            var M = tl;
            try {
              t: {
                for (la(E), F = p(kl); F !== null && !(F.expirationTime > E && $t()); ) {
                  var ll = F.callback;
                  if (typeof ll == "function") {
                    F.callback = null, tl = F.priorityLevel;
                    var W = ll(
                      F.expirationTime <= E
                    );
                    if (E = b.unstable_now(), typeof W == "function") {
                      F.callback = W, la(E), C = !0;
                      break t;
                    }
                    F === p(kl) && S(kl), la(E);
                  } else S(kl);
                  F = p(kl);
                }
                if (F !== null) C = !0;
                else {
                  var kt = p(ot);
                  kt !== null && ql(
                    ta,
                    kt.startTime - E
                  ), C = !1;
                }
              }
              break l;
            } finally {
              F = null, tl = M, Iu = !1;
            }
            C = void 0;
          }
        } finally {
          C ? Rt() : gt = !1;
        }
      }
    }
    var Rt;
    if (typeof kn == "function")
      Rt = function() {
        kn(St);
      };
    else if (typeof MessageChannel < "u") {
      var ua = new MessageChannel(), Pn = ua.port2;
      ua.port1.onmessage = St, Rt = function() {
        Pn.postMessage(null);
      };
    } else
      Rt = function() {
        Ct(St, 0);
      };
    function ql(E, C) {
      X = Ct(function() {
        E(b.unstable_now());
      }, C);
    }
    b.unstable_IdlePriority = 5, b.unstable_ImmediatePriority = 1, b.unstable_LowPriority = 4, b.unstable_NormalPriority = 3, b.unstable_Profiling = null, b.unstable_UserBlockingPriority = 2, b.unstable_cancelCallback = function(E) {
      E.callback = null;
    }, b.unstable_forceFrameRate = function(E) {
      0 > E || 125 < E ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : In = 0 < E ? Math.floor(1e3 / E) : 5;
    }, b.unstable_getCurrentPriorityLevel = function() {
      return tl;
    }, b.unstable_next = function(E) {
      switch (tl) {
        case 1:
        case 2:
        case 3:
          var C = 3;
          break;
        default:
          C = tl;
      }
      var M = tl;
      tl = C;
      try {
        return E();
      } finally {
        tl = M;
      }
    }, b.unstable_requestPaint = function() {
      al = !0;
    }, b.unstable_runWithPriority = function(E, C) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var M = tl;
      tl = E;
      try {
        return C();
      } finally {
        tl = M;
      }
    }, b.unstable_scheduleCallback = function(E, C, M) {
      var ll = b.unstable_now();
      switch (typeof M == "object" && M !== null ? (M = M.delay, M = typeof M == "number" && 0 < M ? ll + M : ll) : M = ll, E) {
        case 1:
          var W = -1;
          break;
        case 2:
          W = 250;
          break;
        case 5:
          W = 1073741823;
          break;
        case 4:
          W = 1e4;
          break;
        default:
          W = 5e3;
      }
      return W = M + W, E = {
        id: $n++,
        callback: C,
        priorityLevel: E,
        startTime: M,
        expirationTime: W,
        sortIndex: -1
      }, M > ll ? (E.sortIndex = M, x(ot, E), p(kl) === null && E === p(ot) && (Wt ? (Pu(X), X = -1) : Wt = !0, ql(ta, M - ll))) : (E.sortIndex = W, x(kl, E), Ft || Iu || (Ft = !0, gt || (gt = !0, Rt()))), E;
    }, b.unstable_shouldYield = $t, b.unstable_wrapCallback = function(E) {
      var C = tl;
      return function() {
        var M = tl;
        tl = C;
        try {
          return E.apply(this, arguments);
        } finally {
          tl = M;
        }
      };
    };
  })(S0)), S0;
}
var ry;
function Po() {
  return ry || (ry = 1, g0.exports = Io()), g0.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jy;
function lg() {
  if (Jy) return Fn;
  Jy = 1;
  var b = Po(), x = Fo(), p = Wo();
  function S(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function il(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function ol(l) {
    for (var t = l, u = t; u && !u.alternate; )
      t = u, (t.flags & 4098) !== 0 && (l = t.return), u = t.return;
    for (; t.return; ) t = t.return;
    return t.tag === 3 ? l : null;
  }
  function Dl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function wt(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function kl(l) {
    if (ol(l) !== l)
      throw Error(S(188));
  }
  function ot(l) {
    var t = l.alternate;
    if (!t) {
      if (t = ol(l), t === null) throw Error(S(188));
      return t !== l ? null : l;
    }
    for (var u = l, a = t; ; ) {
      var n = u.return;
      if (n === null) break;
      var e = n.alternate;
      if (e === null) {
        if (a = n.return, a !== null) {
          u = a;
          continue;
        }
        break;
      }
      if (n.child === e.child) {
        for (e = n.child; e; ) {
          if (e === u) return kl(n), l;
          if (e === a) return kl(n), t;
          e = e.sibling;
        }
        throw Error(S(188));
      }
      if (u.return !== a.return) u = n, a = e;
      else {
        for (var f = !1, c = n.child; c; ) {
          if (c === u) {
            f = !0, u = n, a = e;
            break;
          }
          if (c === a) {
            f = !0, a = n, u = e;
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = e.child; c; ) {
            if (c === u) {
              f = !0, u = e, a = n;
              break;
            }
            if (c === a) {
              f = !0, a = e, u = n;
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(S(189));
        }
      }
      if (u.alternate !== a) throw Error(S(190));
    }
    if (u.tag !== 3) throw Error(S(188));
    return u.stateNode.current === u ? l : t;
  }
  function $n(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = $n(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  function F(l, t, u, a, n, e) {
    for (; l !== null; ) {
      if ((l.tag === 5 || l.tag === 27 || l.tag === 6) && u(l, a, n, e) || (l.tag !== 22 || l.memoizedState === null) && (t || l.tag !== 5 && l.tag !== 27) && F(
        l.child,
        t,
        u,
        a,
        n,
        e
      ))
        return !0;
      l = l.sibling;
    }
    return !1;
  }
  function tl(l) {
    for (l = l.return; l !== null; ) {
      if (l.tag === 3 || l.tag === 5 || l.tag === 27) return l;
      l = l.return;
    }
    return null;
  }
  function Iu(l) {
    var t = !1;
    for (l = l.return; l !== null && (l.tag === 4 && (t = !0), !(l.tag === 3 || l.tag === 5 || l.tag === 27)); )
      l = l.return;
    return t;
  }
  function Ft(l) {
    var t = [null, null], u = tl(l);
    return u === null || Wt(
      t,
      l,
      u.child,
      { foundSelf: !1 }
    ), t;
  }
  function Wt(l, t, u, a) {
    for (; u !== null; ) {
      if (u === t) a.foundSelf = !0;
      else if (u.tag === 5 || u.tag === 27 || u.tag === 6) {
        if (a.foundSelf) return l[1] = u, !0;
        l[0] = u;
      } else if ((u.tag !== 22 || u.memoizedState === null) && Wt(
        l,
        t,
        u.child,
        a
      ))
        return !0;
      u = u.sibling;
    }
    return !1;
  }
  function al(l) {
    switch (l.tag) {
      case 5:
      case 27:
      case 6:
        return l.stateNode;
      case 3:
        return l.stateNode.containerInfo;
      default:
        throw Error(S(559));
    }
  }
  var Ct = null, Pu = null;
  function kn(l, t, u) {
    return l === u ? !0 : l === t ? (Ct = l, !0) : !1;
  }
  function la(l, t, u) {
    return l === u ? (Pu = l, !1) : l === t ? (Pu !== null && (Ct = l), !0) : !1;
  }
  function ta(l) {
    if (l === null) return null;
    do
      l = l === null ? null : l.return;
    while (l && l.tag !== 5 && l.tag !== 27 && l.tag !== 3);
    return l || null;
  }
  function gt(l, t, u) {
    for (var a = 0, n = l; n; n = u(n)) a++;
    n = 0;
    for (var e = t; e; e = u(e)) n++;
    for (; 0 < a - n; ) l = u(l), a--;
    for (; 0 < n - a; ) t = u(t), n--;
    for (; a--; ) {
      if (l === t || t !== null && l === t.alternate)
        return l;
      l = u(l), t = u(t);
    }
    return null;
  }
  var X = Object.assign, In = Symbol.for("react.element"), Mu = Symbol.for("react.transitional.element"), $t = Symbol.for("react.portal"), St = Symbol.for("react.fragment"), Rt = Symbol.for("react.strict_mode"), ua = Symbol.for("react.profiler"), Pn = Symbol.for("react.consumer"), ql = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), ll = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), kt = Symbol.for("react.activity"), aa = Symbol.for("react.legacy_hidden"), $a = Symbol.for("react.memo_cache_sentinel"), ct = Symbol.for("react.view_transition"), na = Symbol.for("react.recoverable"), z0 = Symbol.iterator;
  function ka(l) {
    return l === null || typeof l != "object" ? null : (l = z0 && l[z0] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var $y = Symbol.for("react.client.reference");
  function qf(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === $y ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case St:
        return "Fragment";
      case ua:
        return "Profiler";
      case Rt:
        return "StrictMode";
      case C:
        return "Suspense";
      case M:
        return "SuspenseList";
      case kt:
        return "Activity";
      case ct:
        return "ViewTransition";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case $t:
          return "Portal";
        case ql:
          return l.displayName || "Context";
        case Pn:
          return (l._context.displayName || "Context") + ".Consumer";
        case E:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case ll:
          return t = l.displayName || null, t !== null ? t : qf(l.type) || "Memo";
        case W:
          t = l._payload, l = l._init;
          try {
            return qf(l(t));
          } catch {
          }
      }
    return null;
  }
  var Ia = Array.isArray, D = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = p.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Uu = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Bf = [], ea = -1;
  function st(l) {
    return { current: l };
  }
  function Tl(l) {
    0 > ea || (l.current = Bf[ea], Bf[ea] = null, ea--);
  }
  function k(l, t) {
    ea++, Bf[ea] = l.current, l.current = t;
  }
  var zt = st(null), Pa = st(null), It = st(null), le = st(null);
  function te(l, t) {
    switch (k(It, t), k(Pa, l), k(zt, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? I1(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = I1(t), l = P1(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    Tl(zt), k(zt, l);
  }
  function fa() {
    Tl(zt), Tl(Pa), Tl(It);
  }
  function Yf(l) {
    var t = l.memoizedState;
    t !== null && (wa._currentValue = t.memoizedState, k(le, l)), t = zt.current;
    var u = P1(t, l.type);
    t !== u && (k(Pa, l), k(zt, u));
  }
  function ue(l) {
    Pa.current === l && (Tl(zt), Tl(Pa)), le.current === l && (Tl(le), wa._currentValue = Uu);
  }
  var Gf, T0;
  function Pt(l) {
    if (Gf === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        Gf = t && t[1] || "", T0 = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Gf + l + T0;
  }
  var Qf = !1;
  function Xf(l, t) {
    if (!l || Qf) return "";
    Qf = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var z = function() {
                throw Error();
              };
              if (Object.defineProperty(z.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(z, []);
                } catch (T) {
                  var m = T;
                }
                Reflect.construct(l, [], z);
              } else {
                try {
                  z.call();
                } catch (T) {
                  m = T;
                }
                z = !1;
                try {
                  var o = Object.getOwnPropertyDescriptor(
                    l.prototype,
                    "props"
                  );
                  Object.defineProperty(l.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), z = !0, new l();
                } finally {
                  z && (o !== void 0 ? Object.defineProperty(l.prototype, "props", o) : delete l.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (T) {
                m = T;
              }
              (z = l()) && typeof z.catch == "function" && z.catch(function() {
              });
            }
          } catch (T) {
            if (T && m && typeof T.stack == "string")
              return [T.stack, m.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var e = a.DetermineComponentFrameRoot(), f = e[0], c = e[1];
      if (f && c) {
        var i = f.split(`
`), d = c.split(`
`);
        for (n = a = 0; a < i.length && !i[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < d.length && !d[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === i.length || n === d.length)
          for (a = i.length - 1, n = d.length - 1; 1 <= a && 0 <= n && i[a] !== d[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (i[a] !== d[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || i[a] !== d[n]) {
                  var g = `
` + i[a].replace(" at new ", " at ");
                  return l.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", l.displayName)), g;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      Qf = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Pt(u) : "";
  }
  function ky(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Pt(l.type);
      case 16:
        return Pt("Lazy");
      case 13:
        return l.child !== t && t !== null ? Pt("Suspense Fallback") : Pt("Suspense");
      case 19:
        return Pt("SuspenseList");
      case 0:
      case 15:
        return Xf(l.type, !1);
      case 11:
        return Xf(l.type.render, !1);
      case 1:
        return Xf(l.type, !0);
      case 31:
        return Pt("Activity");
      case 30:
        return Pt("ViewTransition");
      default:
        return "";
    }
  }
  function b0(l) {
    try {
      var t = "", u = null;
      do
        t += ky(l, u), u = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var jf = Object.prototype.hasOwnProperty, Zf = b.unstable_scheduleCallback, Vf = b.unstable_cancelCallback, Iy = b.unstable_shouldYield, Py = b.unstable_requestPaint, Vl = b.unstable_now, ld = b.unstable_getCurrentPriorityLevel, E0 = b.unstable_ImmediatePriority, O0 = b.unstable_UserBlockingPriority, ae = b.unstable_NormalPriority, td = b.unstable_LowPriority, N0 = b.unstable_IdlePriority, ud = b.log, ad = b.unstable_setDisableYieldValue, ln = null, xl = null;
  function lu(l) {
    if (typeof ud == "function" && ad(l), xl && typeof xl.setStrictMode == "function")
      try {
        xl.setStrictMode(ln, l);
      } catch {
      }
  }
  var Ll = Math.clz32 ? Math.clz32 : fd, nd = Math.log, ed = Math.LN2;
  function fd(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (nd(l) / ed | 0) | 0;
  }
  var ne = 256, ee = 262144, fe = 4194304;
  function Hu(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
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
        return 64;
      case 128:
        return 128;
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
        return l & -l;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function ce(l, t, u) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var n = 0, e = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~e, a !== 0 ? n = Hu(a) : (f &= c, f !== 0 ? n = Hu(f) : u || (u = c & ~l, u !== 0 && (n = Hu(u))))) : (c = a & ~e, c !== 0 ? n = Hu(c) : f !== 0 ? n = Hu(f) : u || (u = a & ~l, u !== 0 && (n = Hu(u)))), n === 0 ? 0 : t !== 0 && t !== n && (t & e) === 0 && (e = n & -n, u = t & -t, e >= u || e === 32 && (u & 4194048) !== 0) ? t : n;
  }
  function tn(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function A0(l, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var a = 31 - Ll(u), n = 1 << a;
        t |= l[a], u &= ~n;
      }
    return t;
  }
  function cd(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function _0() {
    var l = fe;
    return fe <<= 1, (fe & 62914560) === 0 && (fe = 4194304), l;
  }
  function xf(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function un(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function id(l, t, u, a, n, e) {
    var f = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var c = l.entanglements, i = l.expirationTimes, d = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var g = 31 - Ll(u), z = 1 << g;
      c[g] = 0, i[g] = -1;
      var m = d[g];
      if (m !== null)
        for (d[g] = null, g = 0; g < m.length; g++) {
          var o = m[g];
          o !== null && (o.lane &= -536870913);
        }
      u &= ~z;
    }
    a !== 0 && D0(l, a, 0), e !== 0 && n === 0 && l.tag !== 0 && (l.suspendedLanes |= e & ~(f & ~t));
  }
  function D0(l, t, u) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - Ll(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | u & 261930;
  }
  function M0(l, t) {
    var u = l.entangledLanes |= t;
    for (l = l.entanglements; u; ) {
      var a = 31 - Ll(u), n = 1 << a;
      n & t | l[a] & t && (l[a] |= t), u &= ~n;
    }
  }
  function U0(l, t) {
    var u = t & -t;
    return u = (u & 42) !== 0 ? 1 : Lf(u), (u & (l.suspendedLanes | t)) !== 0 ? 0 : u;
  }
  function Lf(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Kf(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function H0() {
    var l = Z.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Qy(l.type));
  }
  function C0(l, t) {
    var u = Z.p;
    try {
      return Z.p = l, t();
    } finally {
      Z.p = u;
    }
  }
  var qt = Math.random().toString(36).slice(2), bl = "__reactFiber$" + qt, Bl = "__reactProps$" + qt, ca = "__reactContainer$" + qt, R0 = "__reactEvents$" + qt, vd = "__reactListeners$" + qt, md = "__reactHandles$" + qt, q0 = "__reactResources$" + qt, an = "__reactMarker$" + qt, ie = "__reactLoad$" + qt;
  function ve(l) {
    delete l[bl], delete l[Bl], delete l[vd], delete l[md];
  }
  function Cu(l) {
    var t;
    if (t = l[bl]) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[ca] || u[bl]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null)
          for (l = Sy(l); l !== null; ) {
            if (u = l[bl]) return u;
            l = Sy(l);
          }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function ia(l) {
    if (l = l[bl] || l[ca]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function nn(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(S(33));
  }
  function va(l) {
    var t = l[q0];
    return t || (t = l[q0] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function gl(l) {
    l[an] = !0;
  }
  function B0(l) {
    l[ie] = void 0;
  }
  var Y0 = /* @__PURE__ */ new Set(), G0 = {};
  function Ru(l, t) {
    ma(l, t), ma(l + "Capture", t);
  }
  function ma(l, t) {
    for (G0[l] = t, l = 0; l < t.length; l++)
      Y0.add(t[l]);
  }
  var yd = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Q0 = {}, X0 = {};
  function dd(l) {
    return jf.call(X0, l) ? !0 : jf.call(Q0, l) ? !1 : yd.test(l) ? X0[l] = !0 : (Q0[l] = !0, !1);
  }
  var j = !1;
  function j0() {
    var l = j;
    return j = !1, l;
  }
  function me(l, t, u) {
    if (dd(t))
      if (u === null) l.removeAttribute(t);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, u);
      }
  }
  function ye(l, t, u) {
    if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, u);
    }
  }
  function Bt(l, t, u, a) {
    if (a === null) l.removeAttribute(u);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(t, u, a);
    }
  }
  function Kl(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Z0(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function hd(l, t, u) {
    var a = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    );
    if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, e = a.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(f) {
          u = "" + f, e.call(this, f);
        }
      }), Object.defineProperty(l, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(f) {
          u = "" + f;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function rf(l) {
    if (!l._valueTracker) {
      var t = Z0(l) ? "checked" : "value";
      l._valueTracker = hd(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function V0(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var u = t.getValue(), a = "";
    return l && (a = Z0(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== u ? (t.setValue(l), !0) : !1;
  }
  var od = /[\n"\\]/g;
  function Il(l) {
    return l.replace(
      od,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Jf(l, t, u, a, n, e, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + Kl(t)) : l.value !== "" + Kl(t) && (l.value = "" + Kl(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? f === "number" && l.value == t ? pf(l, Kl(l.value)) : pf(l, Kl(t)) : u != null ? pf(l, Kl(u)) : a != null && l.removeAttribute("value"), n == null && e != null && (l.defaultChecked = !!e), n != null && (l.checked = n && typeof n != "function" && typeof n != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + Kl(c) : l.removeAttribute("name");
  }
  function x0(l, t, u, a, n, e, f, c) {
    if (e != null && typeof e != "function" && typeof e != "symbol" && typeof e != "boolean" && (l.type = e), t != null || u != null) {
      if (!(e !== "submit" && e !== "reset" || t != null)) {
        rf(l);
        return;
      }
      u = u != null ? "" + Kl(u) : "", t = t != null ? "" + Kl(t) : u, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f), rf(l);
  }
  function pf(l, t) {
    l.defaultValue !== "" + t && (l.defaultValue = "" + t);
  }
  function ya(l, t, u, a) {
    if (l = l.options, t) {
      t = {};
      for (var n = 0; n < u.length; n++)
        t["$" + u[n]] = !0;
      for (u = 0; u < l.length; u++)
        n = t.hasOwnProperty("$" + l[u].value), l[u].selected !== n && (l[u].selected = n), n && a && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Kl(u), t = null, n = 0; n < l.length; n++) {
        if (l[n].value === u) {
          l[n].selected = !0, a && (l[n].defaultSelected = !0);
          return;
        }
        t !== null || l[n].disabled || (t = l[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function L0(l, t, u) {
    if (t != null && (t = "" + Kl(t), t !== l.value && (l.value = t), u == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + Kl(u) : "";
  }
  function K0(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(S(92));
        if (Ia(a)) {
          if (1 < a.length) throw Error(S(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ""), t = u;
    }
    u = Kl(t), l.defaultValue = u, a = l.textContent, a === u && a !== "" && a !== null && (l.value = a), rf(l);
  }
  function da(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var gd = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function r0(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, u) : typeof u != "number" || u === 0 || gd.has(t) ? t === "float" ? l.cssFloat = u : l[t] = ("" + u).trim() : l[t] = u + "px";
  }
  function J0(l, t, u) {
    if (t != null && typeof t != "object")
      throw Error(S(62));
    if (l = l.style, u != null) {
      for (var a in u)
        !u.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "", j = !0);
      for (var n in t)
        a = t[n], t.hasOwnProperty(n) && u[n] !== a && (r0(l, n, a), j = !0);
    } else
      for (var e in t)
        t.hasOwnProperty(e) && r0(l, e, t[e]);
  }
  function wf(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  var Sd = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["maskType", "mask-type"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), sd = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function de(l) {
    return sd.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Tt() {
  }
  var Ff = null;
  function Wf(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var ha = null, oa = null;
  function p0(l) {
    var t = ia(l);
    if (t && (l = t.stateNode)) {
      var u = l[Bl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (Jf(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), t = u.name, u.type === "radio" && t != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + Il(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < u.length; t++) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var n = a[Bl] || null;
                if (!n) throw Error(S(90));
                Jf(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (t = 0; t < u.length; t++)
              a = u[t], a.form === l.form && V0(a);
          }
          break l;
        case "textarea":
          L0(l, u.value, u.defaultValue);
          break l;
        case "select":
          t = u.value, t != null && ya(l, !!u.multiple, t, !1);
      }
    }
  }
  var $f = !1;
  function w0(l, t, u) {
    if ($f) return l(t, u);
    $f = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if ($f = !1, (ha !== null || oa !== null) && (hf(), ha && (t = ha, l = oa, oa = ha = null, p0(t), l)))
        for (t = 0; t < l.length; t++) p0(l[t]);
    }
  }
  function en(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var a = u[Bl] || null;
    if (a === null) return null;
    u = a[t];
    l: switch (t) {
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
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        S(231, t, typeof u)
      );
    return u;
  }
  var Yt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), kf = !1;
  if (Yt)
    try {
      var fn = {};
      Object.defineProperty(fn, "passive", {
        get: function() {
          kf = !0;
        }
      }), window.addEventListener("test", fn, fn), window.removeEventListener("test", fn, fn);
    } catch {
      kf = !1;
    }
  var tu = null, If = null, he = null;
  function F0() {
    if (he) return he;
    var l, t = If, u = t.length, a, n = "value" in tu ? tu.value : tu.textContent, e = n.length;
    for (l = 0; l < u && t[l] === n[l]; l++) ;
    var f = u - l;
    for (a = 1; a <= f && t[u - a] === n[e - a]; a++) ;
    return he = n.slice(l, 1 < a ? 1 - a : void 0);
  }
  function oe(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function ge() {
    return !0;
  }
  function W0() {
    return !1;
  }
  function Ul(l) {
    function t(u, a, n, e, f) {
      this._reactName = u, this._targetInst = n, this.type = a, this.nativeEvent = e, this.target = f, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (u = l[c], this[c] = u ? u(e) : e[c]);
      return this.isDefaultPrevented = (e.defaultPrevented != null ? e.defaultPrevented : e.returnValue === !1) ? ge : W0, this.isPropagationStopped = W0, this;
    }
    return X(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = ge);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = ge);
      },
      persist: function() {
      },
      isPersistent: ge
    }), t;
  }
  var uu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Se = Ul(uu), cn = X({}, uu, { view: 0, detail: 0 }), zd = Ul(cn), Pf, lc, vn, se = X({}, cn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: uc,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== vn && (vn && l.type === "mousemove" ? (Pf = l.screenX - vn.screenX, lc = l.screenY - vn.screenY) : lc = Pf = 0, vn = l), Pf);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : lc;
    }
  }), $0 = Ul(se), Td = X({}, se, { dataTransfer: 0 }), bd = Ul(Td), Ed = X({}, cn, { relatedTarget: 0 }), tc = Ul(Ed), Od = X({}, uu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Nd = Ul(Od), Ad = X({}, uu, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), _d = Ul(Ad), Dd = X({}, uu, { data: 0 }), k0 = Ul(Dd), Md = {
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
  }, Ud = {
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
  }, Hd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Cd(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = Hd[l]) ? !!t[l] : !1;
  }
  function uc() {
    return Cd;
  }
  var Rd = X({}, cn, {
    key: function(l) {
      if (l.key) {
        var t = Md[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = oe(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Ud[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: uc,
    charCode: function(l) {
      return l.type === "keypress" ? oe(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? oe(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), qd = Ul(Rd), Bd = X({}, se, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), I0 = Ul(Bd), Yd = X({}, uu, { submitter: 0 }), Gd = Ul(Yd), Qd = X({}, cn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: uc
  }), Xd = Ul(Qd), jd = X({}, uu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Zd = Ul(jd), Vd = X({}, se, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), xd = Ul(Vd), Ld = X({}, uu, {
    newState: 0,
    oldState: 0,
    source: 0
  }), Kd = Ul(Ld), rd = [9, 13, 27, 32], ac = Yt && "CompositionEvent" in window, mn = null;
  Yt && "documentMode" in document && (mn = document.documentMode);
  var Jd = Yt && "TextEvent" in window && !mn, P0 = Yt && (!ac || mn && 8 < mn && 11 >= mn), lv = " ", tv = !1;
  function uv(l, t) {
    switch (l) {
      case "keyup":
        return rd.indexOf(t.keyCode) !== -1;
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
  function av(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var ga = !1;
  function pd(l, t) {
    switch (l) {
      case "compositionend":
        return av(t);
      case "keypress":
        return t.which !== 32 ? null : (tv = !0, lv);
      case "textInput":
        return l = t.data, l === lv && tv ? null : l;
      default:
        return null;
    }
  }
  function wd(l, t) {
    if (ga)
      return l === "compositionend" || !ac && uv(l, t) ? (l = F0(), he = If = tu = null, ga = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return P0 && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Fd = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function nv(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Fd[l.type] : t === "textarea";
  }
  function ev(l, t, u, a) {
    ha ? oa ? oa.push(a) : oa = [a] : ha = a, t = Tf(t, "onChange"), 0 < t.length && (u = new Se(
      "onChange",
      "change",
      null,
      u,
      a
    ), l.push({ event: u, listeners: t }));
  }
  var yn = null, dn = null;
  function Wd(l) {
    p1(l, 0);
  }
  function ze(l) {
    var t = nn(l);
    if (V0(t)) return l;
  }
  function fv(l, t) {
    if (l === "change") return t;
  }
  var cv = !1;
  if (Yt) {
    var nc;
    if (Yt) {
      var ec = "oninput" in document;
      if (!ec) {
        var iv = document.createElement("div");
        iv.setAttribute("oninput", "return;"), ec = typeof iv.oninput == "function";
      }
      nc = ec;
    } else nc = !1;
    cv = nc && (!document.documentMode || 9 < document.documentMode);
  }
  function vv() {
    yn && (yn.detachEvent("onpropertychange", mv), dn = yn = null);
  }
  function mv(l) {
    if (l.propertyName === "value" && ze(dn)) {
      var t = [];
      ev(
        t,
        dn,
        l,
        Wf(l)
      ), w0(Wd, t);
    }
  }
  function $d(l, t, u) {
    l === "focusin" ? (vv(), yn = t, dn = u, yn.attachEvent("onpropertychange", mv)) : l === "focusout" && vv();
  }
  function kd(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return ze(dn);
  }
  function Id(l, t) {
    if (l === "click") return ze(t);
  }
  function Pd(l, t) {
    if (l === "input" || l === "change")
      return ze(t);
  }
  function lh(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var rl = typeof Object.is == "function" ? Object.is : lh;
  function hn(l, t) {
    if (rl(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var u = Object.keys(l), a = Object.keys(t);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var n = u[a];
      if (!jf.call(t, n) || !rl(l[n], t[n]))
        return !1;
    }
    return !0;
  }
  function fc(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  function yv(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function dv(l, t) {
    var u = yv(l);
    l = 0;
    for (var a; u; ) {
      if (u.nodeType === 3) {
        if (a = l + u.textContent.length, l <= t && a >= t)
          return { node: u, offset: t - l };
        l = a;
      }
      l: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break l;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = yv(u);
    }
  }
  function hv(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? hv(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function ov(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = fc(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = fc(l.document);
    }
    return t;
  }
  function cc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var th = Yt && "documentMode" in document && 11 >= document.documentMode, Sa = null, ic = null, on = null, vc = !1;
  function gv(l, t, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    vc || Sa == null || Sa !== fc(a) || (a = Sa, "selectionStart" in a && cc(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), on && hn(on, a) || (on = a, a = Tf(ic, "onSelect"), 0 < a.length && (t = new Se(
      "onSelect",
      "select",
      null,
      t,
      u
    ), l.push({ event: t, listeners: a }), t.target = Sa)));
  }
  function qu(l, t) {
    var u = {};
    return u[l.toLowerCase()] = t.toLowerCase(), u["Webkit" + l] = "webkit" + t, u["Moz" + l] = "moz" + t, u;
  }
  var sa = {
    animationend: qu("Animation", "AnimationEnd"),
    animationiteration: qu("Animation", "AnimationIteration"),
    animationstart: qu("Animation", "AnimationStart"),
    transitionrun: qu("Transition", "TransitionRun"),
    transitionstart: qu("Transition", "TransitionStart"),
    transitioncancel: qu("Transition", "TransitionCancel"),
    transitionend: qu("Transition", "TransitionEnd")
  }, mc = {}, Sv = {};
  Yt && (Sv = document.createElement("div").style, "AnimationEvent" in window || (delete sa.animationend.animation, delete sa.animationiteration.animation, delete sa.animationstart.animation), "TransitionEvent" in window || delete sa.transitionend.transition);
  function Bu(l) {
    if (mc[l]) return mc[l];
    if (!sa[l]) return l;
    var t = sa[l], u;
    for (u in t)
      if (t.hasOwnProperty(u) && u in Sv)
        return mc[l] = t[u];
    return l;
  }
  var sv = Bu("animationend"), zv = Bu("animationiteration"), Tv = Bu("animationstart"), uh = Bu("transitionrun"), ah = Bu("transitionstart"), nh = Bu("transitioncancel"), bv = Bu("transitionend"), Ev = /* @__PURE__ */ new Map(), yc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  yc.push("scrollEnd");
  function it(l, t) {
    Ev.set(l, t), Ru(t, [l]);
  }
  var eh = 0;
  function Gt(l, t) {
    if (l.name != null && l.name !== "auto") return l.name;
    if (t.autoName !== null) return t.autoName;
    l = dt.identifierPrefix;
    var u = eh++;
    return l = "_" + l + "t_" + u.toString(32) + "_", t.autoName = l;
  }
  function Ov(l) {
    if (l == null || typeof l == "string")
      return l;
    var t = null, u = Xa;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var n = l[u[a]];
        if (n != null) {
          if (n === "none") return "none";
          t = t == null ? n : t + (" " + n);
        }
      }
    return t ?? l.default;
  }
  function Qt(l, t) {
    return l = Ov(l), t = Ov(t), t == null ? l === "auto" ? null : l : t === "auto" ? null : t;
  }
  var Te = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, Pl = [], za = 0, dc = 0;
  function be() {
    for (var l = za, t = dc = za = 0; t < l; ) {
      var u = Pl[t];
      Pl[t++] = null;
      var a = Pl[t];
      Pl[t++] = null;
      var n = Pl[t];
      Pl[t++] = null;
      var e = Pl[t];
      if (Pl[t++] = null, a !== null && n !== null) {
        var f = a.pending;
        f === null ? n.next = n : (n.next = f.next, f.next = n), a.pending = n;
      }
      e !== 0 && Nv(u, n, e);
    }
  }
  function Ee(l, t, u, a) {
    Pl[za++] = l, Pl[za++] = t, Pl[za++] = u, Pl[za++] = a, dc |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function hc(l, t, u, a) {
    return Ee(l, t, u, a), Oe(l);
  }
  function Yu(l, t) {
    return Ee(l, null, null, t), Oe(l);
  }
  function Nv(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var n = !1, e = l.return; e !== null; )
      e.childLanes |= u, a = e.alternate, a !== null && (a.childLanes |= u), e.tag === 22 && (l = e.stateNode, l === null || l._visibility & 1 || (n = !0)), l = e, e = e.return;
    return l.tag === 3 ? (e = l.stateNode, n && t !== null && (n = 31 - Ll(u), l = e.hiddenUpdates, a = l[n], a === null ? l[n] = [t] : a.push(t), t.lane = u | 536870912), e) : null;
  }
  function Oe(l) {
    if (50 < Qn)
      throw Qn = 0, df = null, Error(S(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ta = {};
  function fh(l, t, u, a) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Yl(l, t, u, a) {
    return new fh(l, t, u, a);
  }
  function oc(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Xt(l, t) {
    var u = l.alternate;
    return u === null ? (u = Yl(
      l.tag,
      t,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = t, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 1206910976, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, t = l.dependencies, u.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function Av(l, t) {
    l.flags &= 1206910978;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, t = u.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Ne(l, t, u, a, n, e) {
    var f = 0;
    if (a = l, typeof a == "function") oc(a) && (f = 1);
    else if (typeof a == "string")
      f = Go(
        l,
        u,
        zt.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (a) {
        case kt:
          return l = Yl(31, u, t, n), l.elementType = kt, l.lanes = e, l;
        case St:
          return Gu(u.children, n, e, t);
        case Rt:
          f = 8, n |= 24;
          break;
        case ua:
          return l = Yl(12, u, t, n | 2), l.elementType = ua, l.lanes = e, l;
        case C:
          return l = Yl(13, u, t, n), l.elementType = C, l.lanes = e, l;
        case M:
          return l = Yl(19, u, t, n), l.elementType = M, l.lanes = e, l;
        case aa:
        case ct:
          return l = n | 32, l = Yl(30, u, t, l), l.elementType = ct, l.lanes = e, l.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, l;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case ql:
                f = 10;
                break l;
              case Pn:
                f = 9;
                break l;
              case E:
                f = 11;
                break l;
              case ll:
                f = 14;
                break l;
              case W:
                f = 16, a = null;
                break l;
            }
          f = 29, u = Error(
            S(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = Yl(f, u, t, n), t.elementType = l, t.type = a, t.lanes = e, t;
  }
  function Gu(l, t, u, a) {
    return l = Yl(7, l, a, t), l.lanes = u, l;
  }
  function gc(l, t, u) {
    return l = Yl(6, l, null, t), l.lanes = u, l;
  }
  function _v(l) {
    var t = Yl(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Sc(l, t, u) {
    return t = Yl(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = u, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var Dv = /* @__PURE__ */ new WeakMap();
  function lt(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = Dv.get(l);
      return u !== void 0 ? u : (t = {
        value: l,
        source: t,
        stack: b0(t)
      }, Dv.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: b0(t)
    };
  }
  var ba = [], Ea = 0, Ae = null, gn = 0, tt = [], ut = 0, au = null, bt = 1, Et = "";
  function jt(l, t) {
    ba[Ea++] = gn, ba[Ea++] = Ae, Ae = l, gn = t;
  }
  function Mv(l, t, u) {
    tt[ut++] = bt, tt[ut++] = Et, tt[ut++] = au, au = l;
    var a = bt;
    l = Et;
    var n = 32 - Ll(a) - 1;
    a &= ~(1 << n), u += 1;
    var e = 32 - Ll(t) + n;
    if (30 < e) {
      var f = n - n % 5;
      e = (a & (1 << f) - 1).toString(32), a >>= f, n -= f, bt = 1 << 32 - Ll(t) + n | u << n | a, Et = e + l;
    } else
      bt = 1 << e | u << n | a, Et = l;
  }
  function _e(l) {
    l.return !== null && (jt(l, 1), Mv(l, 1, 0));
  }
  function sc(l) {
    for (; l === Ae; )
      Ae = ba[--Ea], ba[Ea] = null, gn = ba[--Ea], ba[Ea] = null;
    for (; l === au; )
      au = tt[--ut], tt[ut] = null, Et = tt[--ut], tt[ut] = null, bt = tt[--ut], tt[ut] = null;
  }
  function Uv(l, t) {
    tt[ut++] = bt, tt[ut++] = Et, tt[ut++] = au, bt = t.id, Et = t.overflow, au = l;
  }
  var Sl = null, I = null, R = !1, nu = null, at = !1, zc = Error(S(519));
  function eu(l) {
    var t = Error(
      S(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Sn(lt(t, l)), zc;
  }
  function Hv(l) {
    var t = l.stateNode, u = l.type, a = l.memoizedProps;
    switch (t[bl] = l, t[Bl] = a, u) {
      case "dialog":
        B("cancel", t), B("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        B("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < jn.length; u++)
          B(jn[u], t);
        break;
      case "source":
        B("error", t);
        break;
      case "img":
      case "image":
      case "link":
        B("error", t), B("load", t);
        break;
      case "details":
        B("toggle", t);
        break;
      case "input":
        B("invalid", t), x0(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        B("invalid", t);
        break;
      case "textarea":
        B("invalid", t), K0(t, a.value, a.defaultValue, a.children);
    }
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || a.suppressHydrationWarning === !0 || $1(t.textContent, u) ? (a.popover != null && (B("beforetoggle", t), B("toggle", t)), a.onScroll != null && B("scroll", t), a.onScrollEnd != null && B("scrollend", t), a.onClick != null && (t.onclick = Tt), t = !0) : t = !1, t || eu(l, !0);
  }
  function De(l) {
    for (Sl = l.return; Sl; )
      switch (Sl.tag) {
        case 5:
        case 31:
        case 13:
          at = !1;
          return;
        case 27:
        case 3:
          at = !0;
          return;
        default:
          Sl = Sl.return;
      }
  }
  function Oa(l) {
    if (l !== Sl) return !1;
    if (!R) return De(l), R = !0, !1;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Fi(l.type, l.memoizedProps)), u = !u), u && I && eu(l), De(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(S(317));
      I = gy(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(S(317));
      I = gy(l);
    } else
      t === 27 ? (t = I, Eu(l.type) ? (l = a0, a0 = null, I = l) : I = t) : I = Sl ? et(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Qu() {
    I = Sl = null, R = !1;
  }
  function Tc() {
    var l = nu;
    return l !== null && (Xl === null ? Xl = l : Xl.push.apply(
      Xl,
      l
    ), nu = null), l;
  }
  function Sn(l) {
    nu === null ? nu = [l] : nu.push(l);
  }
  var bc = st(null), Xu = null, Zt = null;
  function fu(l, t, u) {
    k(bc, t._currentValue), t._currentValue = u;
  }
  function Vt(l) {
    l._currentValue = bc.current, Tl(bc);
  }
  function Me(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function Ec(l, t, u, a) {
    var n = l.child;
    for (n !== null && (n.return = l); n !== null; ) {
      var e = n.dependencies;
      if (e !== null) {
        var f = n.child;
        e = e.firstContext;
        l: for (; e !== null; ) {
          var c = e;
          e = n;
          for (var i = 0; i < t.length; i++)
            if (c.context === t[i]) {
              e.lanes |= u, c = e.alternate, c !== null && (c.lanes |= u), Me(
                e.return,
                u,
                l
              ), a || (f = null);
              break l;
            }
          e = c.next;
        }
      } else if (n.tag === 18) {
        if (f = n.return, f === null) throw Error(S(341));
        f.lanes |= u, e = f.alternate, e !== null && (e.lanes |= u), Me(f, u, l), f = null;
      } else
        n.tag === 13 && n.memoizedState !== null && n.memoizedState.dehydrated === null ? (n.lanes |= u, f = n.alternate, f !== null && (f.lanes |= u), Me(
          n.return,
          u,
          l
        ), f = n.child, f = f !== null ? f.sibling : null) : f = n.child;
      if (f !== null) f.return = n;
      else
        for (f = n; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (n = f.sibling, n !== null) {
            n.return = f.return, f = n;
            break;
          }
          f = f.return;
        }
      n = f;
    }
  }
  function ju(l, t, u, a) {
    l = null;
    for (var n = t, e = !1; n !== null; ) {
      if (!e) {
        if ((n.flags & 524288) !== 0) e = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var f = n.alternate;
        if (f === null) throw Error(S(387));
        if (f = f.memoizedProps, f !== null) {
          var c = n.type;
          rl(n.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (n === le.current) {
        if (f = n.alternate, f === null) throw Error(S(387));
        f.memoizedState.memoizedState !== n.memoizedState.memoizedState && (l !== null ? l.push(wa) : l = [wa]);
      }
      n = n.return;
    }
    return l !== null && Ec(
      t,
      l,
      u,
      a
    ), t.flags |= 262144, l !== null;
  }
  function Ue(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!rl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Zu(l) {
    Xu = l, Zt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function El(l) {
    return Cv(Xu, l);
  }
  function He(l, t) {
    return Xu === null && Zu(l), Cv(l, t);
  }
  function Cv(l, t) {
    var u = t._currentValue;
    if (t = { context: t, memoizedValue: u, next: null }, Zt === null) {
      if (l === null) throw Error(S(308));
      Zt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Zt = Zt.next = t;
    return u;
  }
  var ch = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(u, a) {
        l.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, ih = b.unstable_scheduleCallback, vh = b.unstable_NormalPriority, vl = {
    $$typeof: ql,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Oc() {
    return {
      controller: new ch(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function sn(l) {
    l.refCount--, l.refCount === 0 && ih(vh, function() {
      l.controller.abort();
    });
  }
  function Rv(l, t) {
    if ((l.pendingLanes & 4194048) !== 0) {
      var u = l.transitionTypes;
      for (u === null && (u = l.transitionTypes = []), l = 0; l < t.length; l++) {
        var a = t[l];
        u.indexOf(a) === -1 && u.push(a);
      }
    }
  }
  var zn = null;
  function mh(l) {
    var t = l.transitionTypes;
    return l.transitionTypes = null, t;
  }
  var Tn = null, Nc = 0, Vu = 0, Na = null;
  function yh(l, t) {
    if (Tn === null) {
      var u = Tn = [];
      Nc = 0, Vu = Zi(), Na = {
        status: "pending",
        value: void 0,
        then: function(a) {
          u.push(a);
        }
      };
    }
    return Nc++, t.then(qv, qv), t;
  }
  function qv() {
    if (--Nc === 0 && (zn = null, Tn !== null)) {
      Na !== null && (Na.status = "fulfilled");
      var l = Tn;
      Tn = null, Vu = 0, Na = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function dh(l, t) {
    var u = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        u.push(n);
      }
    };
    return l.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var n = 0; n < u.length; n++) (0, u[n])(t);
      },
      function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < u.length; n++)
          (0, u[n])(void 0);
      }
    ), a;
  }
  var Bv = D.S;
  D.S = function(l, t) {
    if (_1 = Vl(), typeof t == "object" && t !== null && typeof t.then == "function" && yh(l, t), zn !== null)
      for (var u = xa; u !== null; )
        Rv(u, zn), u = u.next;
    if (u = l.types, u !== null) {
      for (var a = xa; a !== null; )
        Rv(a, u), a = a.next;
      if (Vu !== 0) {
        a = zn, a === null && (a = zn = []);
        for (var n = 0; n < u.length; n++) {
          var e = u[n];
          a.indexOf(e) === -1 && a.push(e);
        }
      }
    }
    Bv !== null && Bv(l, t);
  };
  var xu = st(null);
  function Ac() {
    var l = xu.current;
    return l !== null ? l : $.pooledCache;
  }
  function Ce(l, t) {
    t === null ? k(xu, xu.current) : k(xu, t.pool);
  }
  function Yv() {
    var l = Ac();
    return l === null ? null : { parent: vl._currentValue, pool: l };
  }
  var Aa = Error(S(460)), _c = Error(S(474)), Re = Error(S(542)), qe = { then: function() {
  } };
  function Gv(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Qv(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(Tt, Tt), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, jv(l), l === void 0 && !("reason" in t) ? Error(S(600)) : l;
      default:
        if (typeof t.status == "string") t.then(Tt, Tt);
        else {
          if (l = $, l !== null && 100 < l.shellSuspendCounter)
            throw Error(S(482));
          l = t, l.status = "pending", l.then(
            function(a) {
              if (t.status === "pending") {
                var n = t;
                n.status = "fulfilled", n.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var n = t;
                n.status = "rejected", n.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, jv(l), l;
        }
        throw Ku = t, Aa;
    }
  }
  function Lu(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (Ku = u, Aa) : u;
    }
  }
  var Ku = null;
  function Xv() {
    if (Ku === null) throw Error(S(459));
    var l = Ku;
    return Ku = null, l;
  }
  function jv(l) {
    if (l === Aa || l === Re)
      throw Error(S(483));
  }
  var _a = null, bn = 0;
  function Be(l) {
    var t = bn;
    return bn += 1, _a === null && (_a = []), Qv(_a, l, t);
  }
  function cu(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function Ye(l, t) {
    throw t.$$typeof === In ? Error(S(525)) : (l = Object.prototype.toString.call(t), Error(
      S(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function Zv(l) {
    function t(y, v) {
      if (l) {
        var h = y.deletions;
        h === null ? (y.deletions = [v], y.flags |= 16) : h.push(v);
      }
    }
    function u(y, v) {
      if (!l) return null;
      for (; v !== null; )
        t(y, v), v = v.sibling;
      return null;
    }
    function a(y) {
      for (var v = /* @__PURE__ */ new Map(); y !== null; )
        y.key === null ? v.set(y.index, y) : v.set(y.key, y), y = y.sibling;
      return v;
    }
    function n(y, v) {
      return y = Xt(y, v), y.index = 0, y.sibling = null, y;
    }
    function e(y, v, h) {
      return y.index = h, l ? (h = y.alternate, h !== null ? (h = h.index, h < v ? (y.flags |= 2, v) : h) : (y.flags |= 134217730, v)) : (y.flags |= 1048576, v);
    }
    function f(y) {
      return l && y.alternate === null && (y.flags |= 134217730), y;
    }
    function c(y, v, h, s) {
      return v === null || v.tag !== 6 ? (v = gc(h, y.mode, s), v.return = y, v) : (v = n(v, h), v.return = y, v);
    }
    function i(y, v, h, s) {
      var O = h.type;
      return O === St ? (y = g(
        y,
        v,
        h.props.children,
        s,
        h.key
      ), cu(y, h), y) : v !== null && (v.elementType === O || typeof O == "object" && O !== null && O.$$typeof === W && Lu(O) === v.type) ? (v = n(v, h.props), cu(v, h), v.return = y, v) : (v = Ne(
        h.type,
        h.key,
        h.props,
        null,
        y.mode,
        s
      ), cu(v, h), v.return = y, v);
    }
    function d(y, v, h, s) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== h.containerInfo || v.stateNode.implementation !== h.implementation ? (v = Sc(h, y.mode, s), v.return = y, v) : (v = n(v, h.children || []), v.return = y, v);
    }
    function g(y, v, h, s, O) {
      return v === null || v.tag !== 7 ? (v = Gu(
        h,
        y.mode,
        s,
        O
      ), v.return = y, v) : (v = n(v, h), v.return = y, v);
    }
    function z(y, v, h) {
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return v = gc(
          "" + v,
          y.mode,
          h
        ), v.return = y, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Mu:
            return h = Ne(
              v.type,
              v.key,
              v.props,
              null,
              y.mode,
              h
            ), cu(h, v), h.return = y, h;
          case $t:
            return v = Sc(
              v,
              y.mode,
              h
            ), v.return = y, v;
          case W:
            return v = Lu(v), z(y, v, h);
        }
        if (Ia(v) || ka(v))
          return v = Gu(
            v,
            y.mode,
            h,
            null
          ), v.return = y, v;
        if (typeof v.then == "function")
          return z(y, Be(v), h);
        if (v.$$typeof === ql)
          return z(
            y,
            He(y, v),
            h
          );
        Ye(y, v);
      }
      return null;
    }
    function m(y, v, h, s) {
      var O = v !== null ? v.key : null;
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
        return O !== null ? null : c(y, v, "" + h, s);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case Mu:
            return h.key === O ? i(y, v, h, s) : null;
          case $t:
            return h.key === O ? d(y, v, h, s) : null;
          case W:
            return h = Lu(h), m(y, v, h, s);
        }
        if (Ia(h) || ka(h))
          return O !== null ? null : g(y, v, h, s, null);
        if (typeof h.then == "function")
          return m(
            y,
            v,
            Be(h),
            s
          );
        if (h.$$typeof === ql)
          return m(
            y,
            v,
            He(y, h),
            s
          );
        Ye(y, h);
      }
      return null;
    }
    function o(y, v, h, s, O) {
      if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint")
        return y = y.get(h) || null, c(v, y, "" + s, O);
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case Mu:
            return y = y.get(
              s.key === null ? h : s.key
            ) || null, i(v, y, s, O);
          case $t:
            return y = y.get(
              s.key === null ? h : s.key
            ) || null, d(v, y, s, O);
          case W:
            return s = Lu(s), o(
              y,
              v,
              h,
              s,
              O
            );
        }
        if (Ia(s) || ka(s))
          return y = y.get(h) || null, g(v, y, s, O, null);
        if (typeof s.then == "function")
          return o(
            y,
            v,
            h,
            Be(s),
            O
          );
        if (s.$$typeof === ql)
          return o(
            y,
            v,
            h,
            He(v, s),
            O
          );
        Ye(v, s);
      }
      return null;
    }
    function T(y, v, h, s) {
      for (var O = null, G = null, A = v, _ = v = 0, dl = null; A !== null && _ < h.length; _++) {
        A.index > _ ? (dl = A, A = null) : dl = A.sibling;
        var Q = m(
          y,
          A,
          h[_],
          s
        );
        if (Q === null) {
          A === null && (A = dl);
          break;
        }
        l && A && Q.alternate === null && t(y, A), v = e(Q, v, _), G === null ? O = Q : G.sibling = Q, G = Q, A = dl;
      }
      if (_ === h.length)
        return u(y, A), R && jt(y, _), O;
      if (A === null) {
        for (; _ < h.length; _++)
          A = z(y, h[_], s), A !== null && (v = e(
            A,
            v,
            _
          ), G === null ? O = A : G.sibling = A, G = A);
        return R && jt(y, _), O;
      }
      for (A = a(A); _ < h.length; _++)
        dl = o(
          A,
          y,
          _,
          h[_],
          s
        ), dl !== null && (l && (Q = dl.alternate, Q !== null && A.delete(Q.key === null ? _ : Q.key)), v = e(
          dl,
          v,
          _
        ), G === null ? O = dl : G.sibling = dl, G = dl);
      return l && A.forEach(function(Du) {
        return t(y, Du);
      }), R && jt(y, _), O;
    }
    function N(y, v, h, s) {
      if (h == null) throw Error(S(151));
      for (var O = null, G = null, A = v, _ = v = 0, dl = null, Q = h.next(); A !== null && !Q.done; _++, Q = h.next()) {
        A.index > _ ? (dl = A, A = null) : dl = A.sibling;
        var Du = m(y, A, Q.value, s);
        if (Du === null) {
          A === null && (A = dl);
          break;
        }
        l && A && Du.alternate === null && t(y, A), v = e(Du, v, _), G === null ? O = Du : G.sibling = Du, G = Du, A = dl;
      }
      if (Q.done)
        return u(y, A), R && jt(y, _), O;
      if (A === null) {
        for (; !Q.done; _++, Q = h.next())
          Q = z(y, Q.value, s), Q !== null && (v = e(Q, v, _), G === null ? O = Q : G.sibling = Q, G = Q);
        return R && jt(y, _), O;
      }
      for (A = a(A); !Q.done; _++, Q = h.next())
        Q = o(A, y, _, Q.value, s), Q !== null && (l && (dl = Q.alternate, dl !== null && A.delete(
          dl.key === null ? _ : dl.key
        )), v = e(Q, v, _), G === null ? O = Q : G.sibling = Q, G = Q);
      return l && A.forEach(function(wo) {
        return t(y, wo);
      }), R && jt(y, _), O;
    }
    function H(y, v, h, s) {
      if (typeof h == "object" && h !== null && h.type === St && h.key === null && h.props.ref === void 0 && (h = h.props.children), typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case Mu:
            l: {
              for (var O = h.key; v !== null; ) {
                if (v.key === O) {
                  if (O = h.type, O === St) {
                    if (v.tag === 7) {
                      u(
                        y,
                        v.sibling
                      ), s = n(
                        v,
                        h.props.children
                      ), cu(s, h), s.return = y, y = s;
                      break l;
                    }
                  } else if (v.elementType === O || typeof O == "object" && O !== null && O.$$typeof === W && Lu(O) === v.type) {
                    u(
                      y,
                      v.sibling
                    ), s = n(v, h.props), cu(s, h), s.return = y, y = s;
                    break l;
                  }
                  u(y, v);
                  break;
                } else t(y, v);
                v = v.sibling;
              }
              h.type === St ? (s = Gu(
                h.props.children,
                y.mode,
                s,
                h.key
              ), cu(s, h), s.return = y, y = s) : (s = Ne(
                h.type,
                h.key,
                h.props,
                null,
                y.mode,
                s
              ), cu(s, h), s.return = y, y = s);
            }
            return f(y);
          case $t:
            l: {
              for (O = h.key; v !== null; ) {
                if (v.key === O)
                  if (v.tag === 4 && v.stateNode.containerInfo === h.containerInfo && v.stateNode.implementation === h.implementation) {
                    u(
                      y,
                      v.sibling
                    ), s = n(v, h.children || []), s.return = y, y = s;
                    break l;
                  } else {
                    u(y, v);
                    break;
                  }
                else t(y, v);
                v = v.sibling;
              }
              s = Sc(h, y.mode, s), s.return = y, y = s;
            }
            return f(y);
          case W:
            return h = Lu(h), H(
              y,
              v,
              h,
              s
            );
        }
        if (Ia(h))
          return T(
            y,
            v,
            h,
            s
          );
        if (ka(h)) {
          if (O = ka(h), typeof O != "function") throw Error(S(150));
          return h = O.call(h), N(
            y,
            v,
            h,
            s
          );
        }
        if (typeof h.then == "function")
          return H(
            y,
            v,
            Be(h),
            s
          );
        if (h.$$typeof === ql)
          return H(
            y,
            v,
            He(y, h),
            s
          );
        Ye(y, h);
      }
      return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h, v !== null && v.tag === 6 ? (u(y, v.sibling), s = n(v, h), s.return = y, y = s) : (u(y, v), s = gc(h, y.mode, s), s.return = y, y = s), f(y)) : u(y, v);
    }
    return function(y, v, h, s) {
      try {
        bn = 0;
        var O = H(
          y,
          v,
          h,
          s
        );
        return _a = null, O;
      } catch (A) {
        if (A === Aa || A === Re) throw A;
        var G = Yl(29, A, null, y.mode);
        return G.lanes = s, G.return = y, G;
      } finally {
      }
    };
  }
  var ru = Zv(!0), Vv = Zv(!1), iu = !1;
  function Dc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Mc(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function vu(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function mu(l, t, u) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (V & 2) !== 0) {
      var n = a.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), a.pending = t, t = Oe(l), Nv(l, null, u), t;
    }
    return Ee(l, a, t, u), Oe(l);
  }
  function En(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, M0(l, u);
    }
  }
  function Uc(l, t) {
    var u = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, u === a)) {
      var n = null, e = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var f = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          e === null ? n = e = f : e = e.next = f, u = u.next;
        } while (u !== null);
        e === null ? n = e = t : e = e.next = t;
      } else n = e = t;
      u = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: e,
        shared: a.shared,
        callbacks: a.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = t : l.next = t, u.lastBaseUpdate = t;
  }
  var Hc = !1;
  function On() {
    if (Hc) {
      var l = Na;
      if (l !== null) throw l;
    }
  }
  function Nn(l, t, u, a) {
    Hc = !1;
    var n = l.updateQueue;
    iu = !1;
    var e = n.firstBaseUpdate, f = n.lastBaseUpdate, c = n.shared.pending;
    if (c !== null) {
      n.shared.pending = null;
      var i = c, d = i.next;
      i.next = null, f === null ? e = d : f.next = d, f = i;
      var g = l.alternate;
      g !== null && (g = g.updateQueue, c = g.lastBaseUpdate, c !== f && (c === null ? g.firstBaseUpdate = d : c.next = d, g.lastBaseUpdate = i));
    }
    if (e !== null) {
      var z = n.baseState;
      f = 0, g = d = i = null, c = e;
      do {
        var m = c.lane & -536870913, o = m !== c.lane;
        if (o ? (Y & m) === m : (a & m) === m) {
          m !== 0 && m === Vu && (Hc = !0), g !== null && (g = g.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var T = l, N = c;
            m = t;
            var H = u;
            switch (N.tag) {
              case 1:
                if (T = N.payload, typeof T == "function") {
                  z = T.call(H, z, m);
                  break l;
                }
                z = T;
                break l;
              case 3:
                T.flags = T.flags & -65537 | 128;
              case 0:
                if (T = N.payload, m = typeof T == "function" ? T.call(H, z, m) : T, m == null) break l;
                z = X({}, z, m);
                break l;
              case 2:
                iu = !0;
            }
          }
          m = c.callback, m !== null && (l.flags |= 64, o && (l.flags |= 8192), o = n.callbacks, o === null ? n.callbacks = [m] : o.push(m));
        } else
          o = {
            lane: m,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, g === null ? (d = g = o, i = z) : g = g.next = o, f |= m;
        if (c = c.next, c === null) {
          if (c = n.shared.pending, c === null)
            break;
          o = c, c = o.next, o.next = null, n.lastBaseUpdate = o, n.shared.pending = null;
        }
      } while (!0);
      g === null && (i = z), n.baseState = i, n.firstBaseUpdate = d, n.lastBaseUpdate = g, e === null && (n.shared.lanes = 0), su |= f, l.lanes = f, l.memoizedState = z;
    }
  }
  function xv(l, t) {
    if (typeof l != "function")
      throw Error(S(191, l));
    l.call(t);
  }
  function Lv(l, t) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        xv(u[l], t);
  }
  var yu = st(null), Ge = st(0);
  function Kv(l, t) {
    l = Jt, k(Ge, l), k(yu, t), Jt = l | t.baseLanes;
  }
  function Cc() {
    k(Ge, Jt), k(yu, yu.current);
  }
  function Rc() {
    Jt = Ge.current, Tl(yu), Tl(Ge);
  }
  var Ol = st(null), Ml = null;
  function du(l) {
    var t = l.alternate;
    k(Nl, Nl.current & 1), k(Ol, l), Ml === null && (t === null || yu.current !== null || t.memoizedState !== null) && (Ml = l);
  }
  function qc(l) {
    k(Nl, Nl.current), k(Ol, l), Ml === null && (Ml = l);
  }
  function rv(l) {
    l.tag === 22 ? (k(Nl, Nl.current), k(Ol, l), Ml === null && (Ml = l)) : hu();
  }
  function hu() {
    k(Nl, Nl.current), k(Ol, Ol.current);
  }
  function Jl(l) {
    Tl(Ol), Ml === l && (Ml = null), Tl(Nl);
  }
  var Nl = st(0);
  function An(l, t) {
    k(Ol, Ol.current), k(Nl, t);
  }
  function Bc(l) {
    Tl(Nl), Tl(Ol), Ml === l && (Ml = null);
  }
  function Qe(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || t0(u) || u0(u)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var xt = 0, U = null, w = null, ml = null, Xe = !1, Da = !1, Ju = !1, je = 0, _n = 0, Ma = null, hh = 0;
  function el() {
    throw Error(S(321));
  }
  function Yc(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!rl(l[u], t[u])) return !1;
    return !0;
  }
  function Gc(l, t, u, a, n, e) {
    return xt = e, U = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, D.H = l === null || l.memoizedState === null ? Mm : Um, Ju = !1, e = u(a, n), Ju = !1, Da && (e = pv(
      t,
      u,
      a,
      n
    )), Jv(l), e;
  }
  function Jv(l) {
    D.H = Je;
    var t = w !== null && w.next !== null;
    if (xt = 0, ml = w = U = null, Xe = !1, _n = 0, Ma = null, t) throw Error(S(300));
    l === null || yl || (l = l.dependencies, l !== null && Ue(l) && (yl = !0));
  }
  function pv(l, t, u, a) {
    U = l;
    var n = 0;
    do {
      if (Da && (Ma = null), _n = 0, Da = !1, 25 <= n) throw Error(S(301));
      if (n += 1, ml = w = null, l.updateQueue != null) {
        var e = l.updateQueue;
        e.lastEffect = null, e.events = null, e.stores = null, e.memoCache != null && (e.memoCache.index = 0);
      }
      D.H = Eh, e = t(u, a);
    } while (Da);
    return e;
  }
  function oh() {
    var l = D.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? Dn(t) : t, l = l.useState()[0], (w !== null ? w.memoizedState : null) !== l && (U.flags |= 1024), t;
  }
  function Qc() {
    var l = je !== 0;
    return je = 0, l;
  }
  function Xc(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function jc(l) {
    if (Xe) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Xe = !1;
    }
    xt = 0, ml = w = U = null, Da = !1, _n = je = 0, Ma = null;
  }
  function Hl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ml === null ? U.memoizedState = ml = l : ml = ml.next = l, ml;
  }
  function cl() {
    if (w === null) {
      var l = U.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = w.next;
    var t = ml === null ? U.memoizedState : ml.next;
    if (t !== null)
      ml = t, w = l;
    else {
      if (l === null)
        throw U.alternate === null ? Error(S(467)) : Error(S(310));
      w = l, l = {
        memoizedState: w.memoizedState,
        baseState: w.baseState,
        baseQueue: w.baseQueue,
        queue: w.queue,
        next: null
      }, ml === null ? U.memoizedState = ml = l : ml = ml.next = l;
    }
    return ml;
  }
  function Ze() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Dn(l) {
    var t = _n;
    return _n += 1, Ma === null && (Ma = []), l = Qv(Ma, l, t), t = U, (ml === null ? t.memoizedState : ml.next) === null && (t = t.alternate, D.H = t === null || t.memoizedState === null ? Mm : Um), l;
  }
  function Ve(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Dn(l);
      if (l.$$typeof === na) return;
      if (l.$$typeof === ql) return El(l);
    }
    throw Error(S(438, String(l)));
  }
  function Zc(l) {
    var t = null, u = U.updateQueue;
    if (u !== null && (t = u.memoCache), t == null) {
      var a = U.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), u === null && (u = Ze(), U.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0)
      for (u = t.data[t.index] = Array(l), a = 0; a < l; a++)
        u[a] = $a;
    return t.index++, u;
  }
  function Lt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function xe(l) {
    var t = cl();
    return Vc(t, w, l);
  }
  function Vc(l, t, u) {
    var a = l.queue;
    if (a === null) throw Error(S(311));
    a.lastRenderedReducer = u;
    var n = l.baseQueue, e = a.pending;
    if (e !== null) {
      if (n !== null) {
        var f = n.next;
        n.next = e.next, e.next = f;
      }
      t.baseQueue = n = e, a.pending = null;
    }
    if (e = l.baseState, n === null) l.memoizedState = e;
    else {
      t = n.next;
      var c = f = null, i = null, d = t, g = !1;
      do {
        var z = d.lane & -536870913;
        if (z !== d.lane ? (Y & z) === z : (xt & z) === z) {
          var m = d.revertLane;
          if (m === 0)
            i !== null && (i = i.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null
            }), z === Vu && (g = !0);
          else if ((xt & m) === m) {
            d = d.next, m === Vu && (g = !0);
            continue;
          } else
            z = {
              lane: 0,
              revertLane: d.revertLane,
              gesture: null,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null
            }, i === null ? (c = i = z, f = e) : i = i.next = z, U.lanes |= m, su |= m;
          z = d.action, Ju && u(e, z), e = d.hasEagerState ? d.eagerState : u(e, z);
        } else
          m = {
            lane: z,
            revertLane: d.revertLane,
            gesture: d.gesture,
            action: d.action,
            hasEagerState: d.hasEagerState,
            eagerState: d.eagerState,
            next: null
          }, i === null ? (c = i = m, f = e) : i = i.next = m, U.lanes |= z, su |= z;
        d = d.next;
      } while (d !== null && d !== t);
      if (i === null ? f = e : i.next = c, !rl(e, l.memoizedState) && (yl = !0, g && (u = Na, u !== null)))
        throw u;
      l.memoizedState = e, l.baseState = f, l.baseQueue = i, a.lastRenderedState = e;
    }
    return n === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function xc(l) {
    var t = cl(), u = t.queue;
    if (u === null) throw Error(S(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch, n = u.pending, e = t.memoizedState;
    if (n !== null) {
      u.pending = null;
      var f = n = n.next;
      do
        e = l(e, f.action), f = f.next;
      while (f !== n);
      rl(e, t.memoizedState) || (yl = !0), t.memoizedState = e, t.baseQueue === null && (t.baseState = e), u.lastRenderedState = e;
    }
    return [e, a];
  }
  function wv(l, t, u) {
    var a = U, n = cl(), e = R;
    if (e) {
      if (u === void 0) throw Error(S(407));
      u = u();
    } else u = t();
    var f = !rl(
      (w || n).memoizedState,
      u
    );
    if (f && (n.memoizedState = u, yl = !0), n = n.queue, rc($v.bind(null, a, n, l), [
      l
    ]), l = n.getSnapshot !== t || f || ml !== null && (ml.memoizedState.tag & 1) !== 0, Ua(
      l ? 9 : 8,
      { destroy: void 0 },
      Wv.bind(null, a, n, u, t),
      null
    ), l) {
      if (a.flags |= 2048, $ === null) throw Error(S(349));
      e || (xt & 127) !== 0 || Fv(a, t, u);
    }
    return u;
  }
  function Fv(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = U.updateQueue, t === null ? (t = Ze(), U.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function Wv(l, t, u, a) {
    t.value = u, t.getSnapshot = a, kv(t) && Iv(l);
  }
  function $v(l, t, u) {
    return u(function() {
      kv(t) && Iv(l);
    });
  }
  function kv(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !rl(l, u);
    } catch {
      return !0;
    }
  }
  function Iv(l) {
    var t = Yu(l, 2);
    t !== null && jl(t, l, 2);
  }
  function Lc(l) {
    var t = Hl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Ju) {
        lu(!0);
        try {
          u();
        } finally {
          lu(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Lt,
      lastRenderedState: l
    }, t;
  }
  function Pv(l, t, u, a) {
    return l.baseState = u, Vc(
      l,
      w,
      typeof a == "function" ? a : Lt
    );
  }
  function gh(l, t, u, a, n) {
    if (re(l)) throw Error(S(485));
    if (l = t.action, l !== null) {
      var e = {
        payload: n,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          e.listeners.push(f);
        }
      };
      D.T !== null ? u(!0) : e.isTransition = !1, a(e), u = t.pending, u === null ? (e.next = t.pending = e, lm(t, e)) : (e.next = u.next, t.pending = u.next = e);
    }
  }
  function lm(l, t) {
    var u = t.action, a = t.payload, n = l.state;
    if (t.isTransition) {
      var e = D.T, f = {};
      f.types = e !== null ? e.types : null, D.T = f;
      try {
        var c = u(n, a), i = D.S;
        i !== null && i(f, c), tm(l, t, c);
      } catch (d) {
        Kc(l, t, d);
      } finally {
        e !== null && f.types !== null && (e.types = f.types), D.T = e;
      }
    } else
      try {
        e = u(n, a), tm(l, t, e);
      } catch (d) {
        Kc(l, t, d);
      }
  }
  function tm(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(a) {
        um(l, t, a);
      },
      function(a) {
        return Kc(l, t, a);
      }
    ) : um(l, t, u);
  }
  function um(l, t, u) {
    t.status = "fulfilled", t.value = u, am(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, lm(l, u)));
  }
  function Kc(l, t, u) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = u, am(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function am(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function nm(l, t) {
    return t;
  }
  function em(l, t) {
    if (R) {
      var u = $.formState;
      if (u !== null) {
        l: {
          var a = U;
          if (R) {
            if (I) {
              t: {
                for (var n = I, e = at; n.nodeType !== 8; ) {
                  if (!e) {
                    n = null;
                    break t;
                  }
                  if (n = et(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break t;
                  }
                }
                e = n.data, n = e === "F!" || e === "F" ? n : null;
              }
              if (n) {
                I = et(
                  n.nextSibling
                ), a = n.data === "F!";
                break l;
              }
            }
            eu(a);
          }
          a = !1;
        }
        a && (t = u[0]);
      }
    }
    return u = Hl(), u.memoizedState = u.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: nm,
      lastRenderedState: t
    }, u.queue = a, u = Am.bind(
      null,
      U,
      a
    ), a.dispatch = u, a = Lc(!1), e = Wc.bind(
      null,
      U,
      !1,
      a.queue
    ), a = Hl(), n = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = n, u = gh.bind(
      null,
      U,
      n,
      e,
      u
    ), n.dispatch = u, a.memoizedState = l, [t, u, !1];
  }
  function fm(l) {
    var t = cl();
    return cm(t, w, l);
  }
  function cm(l, t, u) {
    if (t = Vc(
      l,
      t,
      nm
    )[0], l = xe(Lt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Dn(t);
      } catch (f) {
        throw f === Aa ? Re : f;
      }
    else a = t;
    t = cl();
    var n = t.queue, e = n.dispatch;
    return u !== t.memoizedState && (U.flags |= 2048, Ua(
      9,
      { destroy: void 0 },
      Sh.bind(null, n, u),
      null
    )), [a, e, l];
  }
  function Sh(l, t) {
    l.action = t;
  }
  function im(l) {
    var t = cl(), u = w;
    if (u !== null)
      return cm(t, u, l);
    cl(), t = t.memoizedState, u = cl();
    var a = u.queue.dispatch;
    return u.memoizedState = l, [t, a, !1];
  }
  function Ua(l, t, u, a) {
    return l = { tag: l, create: u, deps: a, inst: t, next: null }, t = U.updateQueue, t === null && (t = Ze(), U.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (a = u.next, u.next = l, l.next = a, t.lastEffect = l), l;
  }
  function vm() {
    return cl().memoizedState;
  }
  function Le(l, t, u, a) {
    var n = Hl();
    U.flags |= l, n.memoizedState = Ua(
      1 | t,
      { destroy: void 0 },
      u,
      a === void 0 ? null : a
    );
  }
  function Ke(l, t, u, a) {
    var n = cl();
    a = a === void 0 ? null : a;
    var e = n.memoizedState.inst;
    w !== null && a !== null && Yc(a, w.memoizedState.deps) ? n.memoizedState = Ua(t, e, u, a) : (U.flags |= l, n.memoizedState = Ua(
      1 | t,
      e,
      u,
      a
    ));
  }
  function mm(l, t) {
    Le(8390656, 8, l, t);
  }
  function rc(l, t) {
    Ke(2048, 8, l, t);
  }
  function sh(l) {
    U.flags |= 4;
    var t = U.updateQueue;
    if (t === null)
      t = Ze(), U.updateQueue = t, t.events = [l];
    else {
      var u = t.events;
      u === null ? t.events = [l] : u.push(l);
    }
  }
  function ym(l) {
    var t = cl().memoizedState;
    return sh({ ref: t, nextImpl: l }), function() {
      if ((V & 2) !== 0) throw Error(S(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function dm(l, t) {
    return Ke(4, 2, l, t);
  }
  function hm(l, t) {
    return Ke(4, 4, l, t);
  }
  function om(l, t) {
    if (typeof t == "function") {
      l = l();
      var u = t(l);
      return function() {
        typeof u == "function" ? u() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function gm(l, t, u) {
    u = u != null ? u.concat([l]) : null, Ke(4, 4, om.bind(null, t, l), u);
  }
  function Jc() {
  }
  function Sm(l, t) {
    var u = cl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && Yc(t, a[1]) ? a[0] : (u.memoizedState = [l, t], l);
  }
  function sm(l, t) {
    var u = cl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && Yc(t, a[1]))
      return a[0];
    if (a = l(), Ju) {
      lu(!0);
      try {
        l();
      } finally {
        lu(!1);
      }
    }
    return u.memoizedState = [a, t], a;
  }
  function pc(l, t, u) {
    return u === void 0 || (xt & 1073741824) !== 0 && (Y & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = u, l = M1(), U.lanes |= l, su |= l, u);
  }
  function zm(l, t, u, a) {
    return rl(u, t) ? u : yu.current !== null ? (l = pc(l, u, a), rl(l, t) || (yl = !0), l) : (xt & 106) === 0 || (xt & 1073741824) !== 0 && (Y & 261930) === 0 ? (yl = !0, l.memoizedState = u) : (l = M1(), U.lanes |= l, su |= l, t);
  }
  function Tm(l, t, u, a, n) {
    var e = Z.p;
    Z.p = e !== 0 && 8 > e ? e : 8;
    var f = D.T, c = {};
    c.types = f !== null ? f.types : null, D.T = c, Wc(l, !1, t, u);
    try {
      var i = n(), d = D.S;
      if (d !== null && d(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var g = dh(
          i,
          a
        );
        Mn(
          l,
          t,
          g,
          Wl(l)
        );
      } else
        Mn(
          l,
          t,
          a,
          Wl(l)
        );
    } catch (z) {
      Mn(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: z },
        Wl()
      );
    } finally {
      Z.p = e, f !== null && c.types !== null && (f.types = c.types), D.T = f;
    }
  }
  function zh() {
  }
  function wc(l, t, u, a) {
    if (l.tag !== 5) throw Error(S(476));
    var n = bm(l).queue;
    Tm(
      l,
      n,
      t,
      Uu,
      u === null ? zh : function() {
        return Em(l), u(a);
      }
    );
  }
  function bm(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Uu,
      baseState: Uu,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Lt,
        lastRenderedState: Uu
      },
      next: null
    };
    var u = {};
    return t.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Lt,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function Em(l) {
    var t = bm(l);
    t.next === null && (t = l.alternate.memoizedState), Mn(
      l,
      t.next.queue,
      {},
      Wl()
    );
  }
  function Fc() {
    return El(wa);
  }
  function Om() {
    return cl().memoizedState;
  }
  function Nm() {
    return cl().memoizedState;
  }
  function Th(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = Wl();
          l = vu(u);
          var a = mu(t, l, u);
          a !== null && (jl(a, t, u), En(a, t, u)), t = { cache: Oc() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function bh(l, t, u) {
    var a = Wl();
    u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, re(l) ? _m(t, u) : (u = hc(l, t, u, a), u !== null && (jl(u, l, a), Dm(u, t, a)));
  }
  function Am(l, t, u) {
    var a = Wl();
    Mn(l, t, u, a);
  }
  function Mn(l, t, u, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (re(l)) _m(t, n);
    else {
      var e = l.alternate;
      if (l.lanes === 0 && (e === null || e.lanes === 0) && (e = t.lastRenderedReducer, e !== null))
        try {
          var f = t.lastRenderedState, c = e(f, u);
          if (n.hasEagerState = !0, n.eagerState = c, rl(c, f))
            return Ee(l, t, n, 0), $ === null && be(), !1;
        } catch {
        } finally {
        }
      if (u = hc(l, t, n, a), u !== null)
        return jl(u, l, a), Dm(u, t, a), !0;
    }
    return !1;
  }
  function Wc(l, t, u, a) {
    if (a = {
      lane: 2,
      revertLane: Zi(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, re(l)) {
      if (t) throw Error(S(479));
    } else
      t = hc(
        l,
        u,
        a,
        2
      ), t !== null && jl(t, l, 2);
  }
  function re(l) {
    var t = l.alternate;
    return l === U || t !== null && t === U;
  }
  function _m(l, t) {
    Da = Xe = !0;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function Dm(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, M0(l, u);
    }
  }
  var Je = {
    readContext: El,
    use: Ve,
    useCallback: el,
    useContext: el,
    useEffect: el,
    useImperativeHandle: el,
    useLayoutEffect: el,
    useInsertionEffect: el,
    useMemo: el,
    useReducer: el,
    useRef: el,
    useState: el,
    useDebugValue: el,
    useDeferredValue: el,
    useTransition: el,
    useSyncExternalStore: el,
    useId: el,
    useHostTransitionStatus: el,
    useFormState: el,
    useActionState: el,
    useOptimistic: el,
    useMemoCache: el,
    useCacheRefresh: el,
    useEffectEvent: el
  }, Mm = {
    readContext: El,
    use: Ve,
    useCallback: function(l, t) {
      return Hl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: El,
    useEffect: mm,
    useImperativeHandle: function(l, t, u) {
      u = u != null ? u.concat([l]) : null, Le(
        4194308,
        4,
        om.bind(null, t, l),
        u
      );
    },
    useLayoutEffect: function(l, t) {
      return Le(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      Le(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var u = Hl();
      t = t === void 0 ? null : t;
      var a = l();
      if (Ju) {
        lu(!0);
        try {
          l();
        } finally {
          lu(!1);
        }
      }
      return u.memoizedState = [a, t], a;
    },
    useReducer: function(l, t, u) {
      var a = Hl();
      if (u !== void 0) {
        var n = u(t);
        if (Ju) {
          lu(!0);
          try {
            u(t);
          } finally {
            lu(!1);
          }
        }
      } else n = t;
      return a.memoizedState = a.baseState = n, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: n
      }, a.queue = l, l = l.dispatch = bh.bind(
        null,
        U,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = Hl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Lc(l);
      var t = l.queue, u = Am.bind(null, U, t);
      return t.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Jc,
    useDeferredValue: function(l, t) {
      var u = Hl();
      return pc(u, l, t);
    },
    useTransition: function() {
      var l = Lc(!1);
      return l = Tm.bind(
        null,
        U,
        l.queue,
        !0,
        !1
      ), Hl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, u) {
      var a = U, n = Hl();
      if (R) {
        if (u === void 0)
          throw Error(S(407));
        u = u();
      } else {
        if (u = t(), $ === null)
          throw Error(S(349));
        (Y & 127) !== 0 || Fv(a, t, u);
      }
      n.memoizedState = u;
      var e = { value: u, getSnapshot: t };
      return n.queue = e, mm($v.bind(null, a, e, l), [
        l
      ]), a.flags |= 2048, Ua(
        9,
        { destroy: void 0 },
        Wv.bind(
          null,
          a,
          e,
          u,
          t
        ),
        null
      ), u;
    },
    useId: function() {
      var l = Hl(), t = $.identifierPrefix;
      if (R) {
        var u = Et, a = bt;
        u = (a & ~(1 << 32 - Ll(a) - 1)).toString(32) + u, t = "_" + t + "R_" + u, u = je++, 0 < u && (t += "H" + u.toString(32)), t += "_";
      } else
        u = hh++, t = "_" + t + "r_" + u.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: Fc,
    useFormState: em,
    useActionState: em,
    useOptimistic: function(l) {
      var t = Hl();
      t.memoizedState = t.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = u, t = Wc.bind(
        null,
        U,
        !0,
        u
      ), u.dispatch = t, [l, t];
    },
    useMemoCache: Zc,
    useCacheRefresh: function() {
      return Hl().memoizedState = Th.bind(
        null,
        U
      );
    },
    useEffectEvent: function(l) {
      var t = Hl(), u = { impl: l };
      return t.memoizedState = u, function() {
        if ((V & 2) !== 0)
          throw Error(S(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, Um = {
    readContext: El,
    use: Ve,
    useCallback: Sm,
    useContext: El,
    useEffect: rc,
    useImperativeHandle: gm,
    useInsertionEffect: dm,
    useLayoutEffect: hm,
    useMemo: sm,
    useReducer: xe,
    useRef: vm,
    useState: function() {
      return xe(Lt);
    },
    useDebugValue: Jc,
    useDeferredValue: function(l, t) {
      var u = cl();
      return zm(
        u,
        w.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = xe(Lt)[0], t = cl().memoizedState;
      return [
        typeof l == "boolean" ? l : Dn(l),
        t
      ];
    },
    useSyncExternalStore: wv,
    useId: Om,
    useHostTransitionStatus: Fc,
    useFormState: fm,
    useActionState: fm,
    useOptimistic: function(l, t) {
      var u = cl();
      return Pv(u, w, l, t);
    },
    useMemoCache: Zc,
    useCacheRefresh: Nm,
    useEffectEvent: ym
  }, Eh = {
    readContext: El,
    use: Ve,
    useCallback: Sm,
    useContext: El,
    useEffect: rc,
    useImperativeHandle: gm,
    useInsertionEffect: dm,
    useLayoutEffect: hm,
    useMemo: sm,
    useReducer: xc,
    useRef: vm,
    useState: function() {
      return xc(Lt);
    },
    useDebugValue: Jc,
    useDeferredValue: function(l, t) {
      var u = cl();
      return w === null ? pc(u, l, t) : zm(
        u,
        w.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = xc(Lt)[0], t = cl().memoizedState;
      return [
        typeof l == "boolean" ? l : Dn(l),
        t
      ];
    },
    useSyncExternalStore: wv,
    useId: Om,
    useHostTransitionStatus: Fc,
    useFormState: im,
    useActionState: im,
    useOptimistic: function(l, t) {
      var u = cl();
      return w !== null ? Pv(u, w, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Zc,
    useCacheRefresh: Nm,
    useEffectEvent: ym
  };
  function $c(l, t, u, a) {
    t = l.memoizedState, u = u(a, t), u = u == null ? t : X({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var kc = {
    enqueueSetState: function(l, t, u) {
      l = l._reactInternals;
      var a = Wl(), n = vu(a);
      n.payload = t, u != null && (n.callback = u), t = mu(l, n, a), t !== null && (jl(t, l, a), En(t, l, a));
    },
    enqueueReplaceState: function(l, t, u) {
      l = l._reactInternals;
      var a = Wl(), n = vu(a);
      n.tag = 1, n.payload = t, u != null && (n.callback = u), t = mu(l, n, a), t !== null && (jl(t, l, a), En(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var u = Wl(), a = vu(u);
      a.tag = 2, t != null && (a.callback = t), t = mu(l, a, u), t !== null && (jl(t, l, u), En(t, l, u));
    }
  };
  function Hm(l, t, u, a, n, e, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, e, f) : t.prototype && t.prototype.isPureReactComponent ? !hn(u, a) || !hn(n, e) : !0;
  }
  function Cm(l, t, u, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, a), t.state !== l && kc.enqueueReplaceState(t, t.state, null);
  }
  function pu(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var a in t)
        a !== "ref" && (u[a] = t[a]);
    }
    if (l = l.defaultProps) {
      u === t && (u = X({}, u));
      for (var n in l)
        u[n] === void 0 && (u[n] = l[n]);
    }
    return u;
  }
  function Rm(l) {
    Te(l);
  }
  function qm(l) {
    console.error(l);
  }
  function Bm(l) {
    Te(l);
  }
  function pe(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Ym(l, t, u) {
    try {
      var a = l.onCaughtError;
      a(u.value, {
        componentStack: u.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Ic(l, t, u) {
    return u = vu(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      pe(l, t);
    }, u;
  }
  function Gm(l) {
    return l = vu(l), l.tag = 3, l;
  }
  function Qm(l, t, u, a) {
    var n = u.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var e = a.value;
      l.payload = function() {
        return n(e);
      }, l.callback = function() {
        Ym(t, u, a);
      };
    }
    var f = u.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      Ym(t, u, a), typeof n != "function" && (zu === null ? zu = /* @__PURE__ */ new Set([this]) : zu.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Oh(l, t, u, a, n) {
    if (u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = u.alternate, t !== null && ju(
        t,
        u,
        n,
        !0
      ), u = Ol.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
          case 19:
            return Ml === null ? of() : u.alternate === null && fl === 0 && (fl = 3), u.flags &= -257, u.flags |= 65536, u.lanes = n, a === qe ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Qi(l, a, n)), !1;
          case 22:
            return u.flags |= 65536, a === qe ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : u.add(a)), Qi(l, a, n)), !1;
        }
        throw Error(S(435, u.tag));
      }
      return Qi(l, a, n), of(), !1;
    }
    if (R)
      return t = Ol.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== zc && (l = Error(S(422), { cause: a }), Sn(lt(l, u)))) : (a !== zc && (t = Error(S(423), {
        cause: a
      }), Sn(
        lt(t, u)
      )), l = l.current.alternate, l.flags |= 65536, n &= -n, l.lanes |= n, a = lt(a, u), n = Ic(
        l.stateNode,
        a,
        n
      ), Uc(l, n), fl !== 4 && (fl = 2)), !1;
    var e = Error(S(520), { cause: a });
    if (e = lt(e, u), Gn === null ? Gn = [e] : Gn.push(e), fl !== 4 && (fl = 2), t === null) return !0;
    a = lt(a, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = n & -n, u.lanes |= l, l = Ic(u.stateNode, a, l), Uc(u, l), !1;
        case 1:
          if (t = u.type, e = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || e !== null && typeof e.componentDidCatch == "function" && (zu === null || !zu.has(e))))
            return u.flags |= 65536, n &= -n, u.lanes |= n, n = Gm(n), Qm(
              n,
              l,
              u,
              a
            ), Uc(u, n), !1;
          break;
        case 22:
          if (u.memoizedState !== null)
            return u.flags |= 65536, !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var Pc = Error(S(461)), yl = !1;
  function hl(l, t, u, a) {
    t.child = l === null ? Vv(t, null, u, a) : ru(
      t,
      l.child,
      u,
      a
    );
  }
  function Xm(l, t, u, a, n) {
    u = u.render;
    var e = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var c in a)
        c !== "ref" && (f[c] = a[c]);
    } else f = a;
    return Zu(t), a = Gc(
      l,
      t,
      u,
      f,
      e,
      n
    ), c = Qc(), l !== null && !yl ? (Xc(l, t, n), Kt(l, t, n)) : (R && c && _e(t), t.flags |= 1, hl(l, t, a, n), t.child);
  }
  function jm(l, t, u, a, n) {
    if (l === null) {
      var e = u.type;
      return typeof e == "function" && !oc(e) && e.defaultProps === void 0 && u.compare === null ? (t.tag = 15, t.type = e, Zm(
        l,
        t,
        e,
        a,
        n
      )) : (l = Ne(
        u.type,
        null,
        a,
        t,
        t.mode,
        n
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (e = l.child, !ci(l, n)) {
      var f = e.memoizedProps;
      if (u = u.compare, u = u !== null ? u : hn, u(f, a) && l.ref === t.ref)
        return Kt(l, t, n);
    }
    return t.flags |= 1, l = Xt(e, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Zm(l, t, u, a, n) {
    if (l !== null) {
      var e = l.memoizedProps;
      if (hn(e, a) && l.ref === t.ref)
        if (yl = !1, t.pendingProps = a = e, ci(l, n))
          (l.flags & 131072) !== 0 && (yl = !0);
        else
          return t.lanes = l.lanes, Kt(l, t, n);
    }
    return li(
      l,
      t,
      u,
      a,
      n
    );
  }
  function Vm(l, t, u, a) {
    var n = a.children, e = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (e = e !== null ? e.baseLanes | u : u, l !== null) {
          for (a = t.child = l.child, n = 0; a !== null; )
            n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~e;
        } else a = 0, t.child = null;
        return xm(
          l,
          t,
          e,
          u,
          a
        );
      }
      if ((u & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ce(
          t,
          e !== null ? e.cachePool : null
        ), e !== null ? Kv(t, e) : Cc(), rv(t);
      else
        return a = t.lanes = 536870912, xm(
          l,
          t,
          e !== null ? e.baseLanes | u : u,
          u,
          a
        );
    } else
      e !== null ? (Ce(t, e.cachePool), Kv(t, e), hu(), t.memoizedState = null) : (l !== null && Ce(t, null), Cc(), hu());
    return hl(l, t, n, u), t.child;
  }
  function Un(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function xm(l, t, u, a, n) {
    var e = Ac();
    return e = e === null ? null : { parent: vl._currentValue, pool: e }, t.memoizedState = {
      baseLanes: u,
      cachePool: e
    }, l !== null && Ce(t, null), Cc(), rv(t), l !== null && ju(l, t, a, !0), t.childLanes = n, null;
  }
  function we(l, t) {
    return t = Fe(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Lm(l, t, u) {
    return ru(t, l.child, null, u), l = we(t, t.pendingProps), l.flags |= 2, Jl(t), t.memoizedState = null, l;
  }
  function Nh(l, t, u) {
    var a = t.pendingProps, n = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (R) {
        if (a.mode === "hidden")
          return l = we(t, a), t.lanes = 536870912, l.memoizedState = { baseLanes: 0, cachePool: null }, Un(null, l);
        if (qc(t), (l = I) ? (l = oy(
          l,
          at
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: au !== null ? { id: bt, overflow: Et } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = _v(l), u.return = t, t.child = u, Sl = t, I = null)) : l = null, l === null) throw eu(t);
        return t.lanes = 536870912, null;
      }
      return we(t, a);
    }
    var e = l.memoizedState;
    if (e !== null) {
      var f = e.dehydrated;
      if (qc(t), n)
        if (t.flags & 256)
          t.flags &= -257, t = Lm(
            l,
            t,
            u
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(S(558));
      else if (yl || ju(l, t, u, !1), n = (u & l.childLanes) !== 0, yl || n) {
        if (yu.current === null) {
          if (a = $, a !== null && (f = U0(a, u), f !== 0 && f !== e.retryLane))
            throw e.retryLane = f, Yu(l, f), jl(a, l, f), Pc;
          of();
        }
        t = Lm(
          l,
          t,
          u
        );
      } else
        l = e.treeContext, I = et(f.nextSibling), Sl = t, R = !0, nu = null, at = !1, l !== null && Uv(t, l), t = we(t, a), t.flags |= 134221824;
      return t;
    }
    return l = Xt(l.child, {
      mode: a.mode,
      children: a.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function Ha(l, t) {
    var u = t.ref;
    if (u === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(S(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function li(l, t, u, a, n) {
    return Zu(t), u = Gc(
      l,
      t,
      u,
      a,
      void 0,
      n
    ), a = Qc(), l !== null && !yl ? (Xc(l, t, n), Kt(l, t, n)) : (R && a && _e(t), t.flags |= 1, hl(l, t, u, n), t.child);
  }
  function Km(l, t, u, a, n, e) {
    return Zu(t), t.updateQueue = null, u = pv(
      t,
      a,
      u,
      n
    ), Jv(l), a = Qc(), l !== null && !yl ? (Xc(l, t, e), Kt(l, t, e)) : (R && a && _e(t), t.flags |= 1, hl(l, t, u, e), t.child);
  }
  function rm(l, t, u, a, n) {
    if (Zu(t), t.stateNode === null) {
      var e = Ta, f = u.contextType;
      typeof f == "object" && f !== null && (e = El(f)), e = new u(a, e), t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = kc, t.stateNode = e, e._reactInternals = t, e = t.stateNode, e.props = a, e.state = t.memoizedState, e.refs = {}, Dc(t), f = u.contextType, e.context = typeof f == "object" && f !== null ? El(f) : Ta, e.state = t.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && ($c(
        t,
        u,
        f,
        a
      ), e.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof e.getSnapshotBeforeUpdate == "function" || typeof e.UNSAFE_componentWillMount != "function" && typeof e.componentWillMount != "function" || (f = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), f !== e.state && kc.enqueueReplaceState(e, e.state, null), Nn(t, a, e, n), On(), e.state = t.memoizedState), typeof e.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      e = t.stateNode;
      var c = t.memoizedProps, i = pu(u, c);
      e.props = i;
      var d = e.context, g = u.contextType;
      f = Ta, typeof g == "object" && g !== null && (f = El(g));
      var z = u.getDerivedStateFromProps;
      g = typeof z == "function" || typeof e.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, g || typeof e.UNSAFE_componentWillReceiveProps != "function" && typeof e.componentWillReceiveProps != "function" || (c || d !== f) && Cm(
        t,
        e,
        a,
        f
      ), iu = !1;
      var m = t.memoizedState;
      e.state = m, Nn(t, a, e, n), On(), d = t.memoizedState, c || m !== d || iu ? (typeof z == "function" && ($c(
        t,
        u,
        z,
        a
      ), d = t.memoizedState), (i = iu || Hm(
        t,
        u,
        i,
        a,
        m,
        d,
        f
      )) ? (g || typeof e.UNSAFE_componentWillMount != "function" && typeof e.componentWillMount != "function" || (typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount()), typeof e.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof e.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = d), e.props = a, e.state = d, e.context = f, a = i) : (typeof e.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      e = t.stateNode, Mc(l, t), f = t.memoizedProps, g = pu(u, f), e.props = g, z = t.pendingProps, m = e.context, d = u.contextType, i = Ta, typeof d == "object" && d !== null && (i = El(d)), c = u.getDerivedStateFromProps, (d = typeof c == "function" || typeof e.getSnapshotBeforeUpdate == "function") || typeof e.UNSAFE_componentWillReceiveProps != "function" && typeof e.componentWillReceiveProps != "function" || (f !== z || m !== i) && Cm(
        t,
        e,
        a,
        i
      ), iu = !1, m = t.memoizedState, e.state = m, Nn(t, a, e, n), On();
      var o = t.memoizedState;
      f !== z || m !== o || iu || l !== null && l.dependencies !== null && Ue(l.dependencies) ? (typeof c == "function" && ($c(
        t,
        u,
        c,
        a
      ), o = t.memoizedState), (g = iu || Hm(
        t,
        u,
        g,
        a,
        m,
        o,
        i
      ) || l !== null && l.dependencies !== null && Ue(l.dependencies)) ? (d || typeof e.UNSAFE_componentWillUpdate != "function" && typeof e.componentWillUpdate != "function" || (typeof e.componentWillUpdate == "function" && e.componentWillUpdate(a, o, i), typeof e.UNSAFE_componentWillUpdate == "function" && e.UNSAFE_componentWillUpdate(
        a,
        o,
        i
      )), typeof e.componentDidUpdate == "function" && (t.flags |= 4), typeof e.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof e.componentDidUpdate != "function" || f === l.memoizedProps && m === l.memoizedState || (t.flags |= 4), typeof e.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && m === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = o), e.props = a, e.state = o, e.context = i, a = g) : (typeof e.componentDidUpdate != "function" || f === l.memoizedProps && m === l.memoizedState || (t.flags |= 4), typeof e.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && m === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return e = a, Ha(l, t), a = (t.flags & 128) !== 0, e || a ? (e = t.stateNode, u = a && typeof u.getDerivedStateFromError != "function" ? null : e.render(), t.flags |= 1, l !== null && a ? (t.child = ru(
      t,
      l.child,
      null,
      n
    ), t.child = ru(
      t,
      null,
      u,
      n
    )) : hl(l, t, u, n), t.memoizedState = e.state, l = t.child) : l = Kt(
      l,
      t,
      n
    ), l;
  }
  function Jm(l, t, u, a) {
    return Qu(), t.flags |= 256, hl(l, t, u, a), t.child;
  }
  var ti = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ui(l) {
    return { baseLanes: l, cachePool: Yv() };
  }
  function ai(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= Fl), l;
  }
  function pm(l, t, u) {
    var a = t.pendingProps, n = !1, e = (t.flags & 128) !== 0, f;
    if ((f = e) || (f = l !== null && l.memoizedState === null ? !1 : (Nl.current & 2) !== 0), f && (n = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (R) {
        if (n ? du(t) : hu(), (l = I) ? (l = oy(
          l,
          at
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: au !== null ? { id: bt, overflow: Et } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = _v(l), u.return = t, t.child = u, Sl = t, I = null)) : l = null, l === null) throw eu(t);
        return u0(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      return e = a.children, a = a.fallback, n ? (hu(), n = t.mode, e = Fe(
        { mode: "hidden", children: e },
        n
      ), a = Gu(
        a,
        n,
        u,
        null
      ), e.return = t, a.return = t, e.sibling = a, t.child = e, a = t.child, a.memoizedState = ui(u), a.childLanes = ai(
        l,
        f,
        u
      ), t.memoizedState = ti, Un(null, a)) : (du(t), ni(t, e));
    }
    var c = l.memoizedState;
    if (c !== null) {
      var i = c.dehydrated;
      if (i !== null)
        return Ah(
          l,
          t,
          e,
          f,
          a,
          i,
          c,
          u
        );
    }
    return n ? (hu(), n = a.fallback, e = t.mode, c = l.child, i = c.sibling, a = Xt(c, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = c.subtreeFlags & 1206910976, i !== null ? n = Xt(i, n) : (n = Gu(
      n,
      e,
      u,
      null
    ), n.flags |= 2), n.return = t, a.return = t, a.sibling = n, t.child = a, Un(null, a), a = t.child, n = l.child.memoizedState, n === null ? n = ui(u) : (e = n.cachePool, e !== null ? (c = vl._currentValue, e = e.parent !== c ? { parent: c, pool: c } : e) : e = Yv(), n = {
      baseLanes: n.baseLanes | u,
      cachePool: e
    }), a.memoizedState = n, a.childLanes = ai(
      l,
      f,
      u
    ), t.memoizedState = ti, Un(l.child, a)) : (du(t), u = l.child, l = u.sibling, u = Xt(u, {
      mode: "visible",
      children: a.children
    }), u.return = t, u.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function ni(l, t) {
    return t = Fe(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function Fe(l, t) {
    return l = Yl(22, l, null, t), l.lanes = 0, l;
  }
  function We(l, t, u) {
    return ru(t, l.child, null, u), l = ni(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function Ah(l, t, u, a, n, e, f, c) {
    if (u)
      return t.flags & 256 ? (du(t), t.flags &= -257, We(
        l,
        t,
        c
      )) : t.memoizedState !== null ? (hu(), t.child = l.child, t.flags |= 128, null) : (hu(), e = n.fallback, f = t.mode, n = Fe(
        { mode: "visible", children: n.children },
        f
      ), e = Gu(
        e,
        f,
        c,
        null
      ), e.flags |= 2, n.return = t, e.return = t, n.sibling = e, t.child = n, ru(t, l.child, null, c), n = t.child, n.memoizedState = ui(c), n.childLanes = ai(
        l,
        a,
        c
      ), t.memoizedState = ti, Un(null, n));
    if (du(t), u0(e)) {
      if (a = e.nextSibling && e.nextSibling.dataset, a) var i = a.dgst;
      return a = i, a !== "" && (n = Error(S(419)), n.stack = "", n.digest = a, Sn({ value: n, source: null, stack: null })), We(
        l,
        t,
        c
      );
    }
    if (yl || ju(l, t, c, !1), a = (c & l.childLanes) !== 0, yl || a) {
      if (yu.current !== null)
        return We(
          l,
          t,
          c
        );
      if (a = $, a !== null && (n = U0(
        a,
        c
      ), n !== 0 && n !== f.retryLane))
        throw f.retryLane = n, Yu(l, n), jl(a, l, n), Pc;
      return t0(e) || of(), We(
        l,
        t,
        c
      );
    }
    return t0(e) ? (t.flags |= 192, t.child = l.child, null) : (l = f.treeContext, I = et(e.nextSibling), Sl = t, R = !0, nu = null, at = !1, l !== null && Uv(t, l), t = ni(
      t,
      n.children
    ), t.flags |= 134221824, t);
  }
  function wm(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), Me(l.return, t, u);
  }
  function Fm(l) {
    for (var t = null; l !== null; ) {
      var u = l.alternate;
      u !== null && Qe(u) === null && (t = l), l = l.sibling;
    }
    return t;
  }
  function $e(l, t, u, a, n, e) {
    var f = l.memoizedState;
    f === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: u,
      tailMode: n,
      treeForkCount: e
    } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = u, f.tailMode = n, f.treeForkCount = e);
  }
  function ei(l) {
    var t = l.child;
    for (l.child = null; t !== null; ) {
      var u = t.sibling;
      t.sibling = l.child, l.child = t, t = u;
    }
  }
  function fi(l, t, u) {
    var a = t.pendingProps, n = a.revealOrder, e = a.tail;
    a = a.children;
    var f = Nl.current;
    if (t.flags & 128)
      return An(t, f), null;
    var c = (f & 2) !== 0;
    if (c ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, An(t, f), n === "backwards" && l !== null ? (ei(l), hl(l, t, a, u), ei(l)) : hl(l, t, a, u), a = R ? gn : 0, !c && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && wm(l, u, t);
        else if (l.tag === 19)
          wm(l, u, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (n) {
      case "backwards":
        u = Fm(t.child), u === null ? (n = t.child, t.child = null) : (n = u.sibling, u.sibling = null, ei(t)), $e(
          t,
          !0,
          n,
          null,
          e,
          a
        );
        break;
      case "unstable_legacy-backwards":
        for (u = null, n = t.child, t.child = null; n !== null; ) {
          if (l = n.alternate, l !== null && Qe(l) === null) {
            t.child = n;
            break;
          }
          l = n.sibling, n.sibling = u, u = n, n = l;
        }
        $e(
          t,
          !0,
          u,
          null,
          e,
          a
        );
        break;
      case "together":
        $e(
          t,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      case "independent":
        t.memoizedState = null;
        break;
      default:
        u = Fm(t.child), u === null ? (n = t.child, t.child = null) : (n = u.sibling, u.sibling = null), $e(
          t,
          !1,
          n,
          u,
          e,
          a
        );
    }
    return t.child;
  }
  function Wm(l, t, u) {
    var a = t.pendingProps;
    return fu(t, t.type, a.value), hl(l, t, a.children, u), t.child;
  }
  function Kt(l, t, u) {
    if (l !== null && (t.dependencies = l.dependencies), su |= t.lanes, (u & t.childLanes) === 0)
      if (l !== null) {
        if (ju(
          l,
          t,
          u,
          !1
        ), (u & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(S(153));
    if (t.child !== null) {
      for (l = t.child, u = Xt(l, l.pendingProps), t.child = u, u.return = t; l.sibling !== null; )
        l = l.sibling, u = u.sibling = Xt(l, l.pendingProps), u.return = t;
      u.sibling = null;
    }
    return t.child;
  }
  function ci(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ue(l)));
  }
  function _h(l, t, u) {
    switch (t.tag) {
      case 3:
        te(t, t.stateNode.containerInfo), fu(t, vl, l.memoizedState.cache), Qu();
        break;
      case 27:
      case 5:
        Yf(t);
        break;
      case 4:
        te(t, t.stateNode.containerInfo);
        break;
      case 10:
        fu(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, qc(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null)
            return du(t), t.flags |= 128, null;
          a = ju(
            l,
            t,
            u,
            !1
          );
          var n = t.child.childLanes;
          return a || (u & n) !== 0 ? pm(l, t, u) : (du(t), l = Kt(
            l,
            t,
            u
          ), l !== null ? l.sibling : null);
        }
        du(t);
        break;
      case 19:
        if (t.flags & 128)
          return fi(
            l,
            t,
            u
          );
        if (n = (l.flags & 128) !== 0, a = (u & t.childLanes) !== 0, a || (ju(
          l,
          t,
          u,
          !1
        ), a = (u & t.childLanes) !== 0), n) {
          if (a)
            return fi(
              l,
              t,
              u
            );
          t.flags |= 128;
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), An(t, Nl.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Vm(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        fu(t, vl, l.memoizedState.cache);
    }
    return Kt(l, t, u);
  }
  function $m(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        yl = !0;
      else {
        if (!ci(l, u) && (t.flags & 128) === 0)
          return yl = !1, _h(
            l,
            t,
            u
          );
        yl = (l.flags & 131072) !== 0;
      }
    else
      yl = !1, R && (t.flags & 1048576) !== 0 && Mv(t, gn, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = Lu(t.elementType), t.type = l, typeof l == "function")
            oc(l) ? (a = pu(l, a), t.tag = 1, t = rm(
              null,
              t,
              l,
              a,
              u
            )) : (t.tag = 0, t = li(
              null,
              t,
              l,
              a,
              u
            ));
          else {
            if (l != null) {
              var n = l.$$typeof;
              if (n === E) {
                t.tag = 11, t = Xm(
                  null,
                  t,
                  l,
                  a,
                  u
                );
                break l;
              } else if (n === ll) {
                t.tag = 14, t = jm(
                  null,
                  t,
                  l,
                  a,
                  u
                );
                break l;
              } else if (n === ql) {
                t.tag = 10, t.type = l, t = Wm(
                  null,
                  t,
                  u
                );
                break l;
              }
            }
            throw t = qf(l) || l, Error(S(306, t, ""));
          }
        }
        return t;
      case 0:
        return li(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 1:
        return a = t.type, n = pu(
          a,
          t.pendingProps
        ), rm(
          l,
          t,
          a,
          n,
          u
        );
      case 3:
        l: {
          if (te(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(S(387));
          a = t.pendingProps;
          var e = t.memoizedState;
          n = e.element, Mc(l, t), Nn(t, a, null, u);
          var f = t.memoizedState;
          if (a = f.cache, fu(t, vl, a), a !== e.cache && Ec(
            t,
            [vl],
            u,
            !0
          ), On(), a = f.element, e.isDehydrated)
            if (e = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = e, t.memoizedState = e, t.flags & 256) {
              t = Jm(
                l,
                t,
                a,
                u
              );
              break l;
            } else if (a !== n) {
              n = lt(
                Error(S(424)),
                t
              ), Sn(n), t = Jm(
                l,
                t,
                a,
                u
              );
              break l;
            } else {
              switch (l = t.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (I = et(l.firstChild), Sl = t, R = !0, nu = null, at = !0, u = Vv(
                t,
                null,
                a,
                u
              ), t.child = u; u; )
                u.flags = u.flags & -3 | 134221824, u = u.sibling;
            }
          else {
            if (Qu(), a === n) {
              t = Kt(
                l,
                t,
                u
              );
              break l;
            }
            hl(l, t, a, u);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Ha(l, t), l === null ? (u = Ey(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = u : R || (t.stateNode = ly(
          t.type,
          t.pendingProps,
          It.current,
          t
        )) : t.memoizedState = Ey(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Yf(t), l === null && R && (a = t.stateNode = sy(
          t.type,
          t.pendingProps,
          It.current
        ), Sl = t, at = !0, n = I, Eu(t.type) ? (a0 = n, I = et(a.firstChild)) : I = n), hl(
          l,
          t,
          t.pendingProps.children,
          u
        ), Ha(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && R && ((n = a = I) && (a = bo(
          a,
          t.type,
          t.pendingProps,
          at
        ), a !== null ? (t.stateNode = a, Sl = t, I = et(a.firstChild), at = !1, n = !0) : n = !1), n || eu(t)), Yf(t), n = t.type, e = t.pendingProps, f = l !== null ? l.memoizedProps : null, a = e.children, Fi(n, e) ? a = null : f !== null && Fi(n, f) && (t.flags |= 32), t.memoizedState !== null && (n = Gc(
          l,
          t,
          oh,
          null,
          null,
          u
        ), wa._currentValue = n), Ha(l, t), hl(l, t, a, u), t.child;
      case 6:
        return l === null && R && ((l = u = I) && (u = Eo(
          u,
          t.pendingProps,
          at
        ), u !== null ? (t.stateNode = u, Sl = t, I = null, l = !0) : l = !1), l || eu(t)), null;
      case 13:
        return pm(l, t, u);
      case 4:
        return te(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = ru(
          t,
          null,
          a,
          u
        ) : hl(l, t, a, u), t.child;
      case 11:
        return Xm(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 7:
        return a = t.pendingProps, Ha(l, t), hl(l, t, a, u), t.child;
      case 8:
        return hl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 12:
        return hl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 10:
        return Wm(l, t, u);
      case 9:
        return n = t.type._context, a = t.pendingProps.children, Zu(t), n = El(n), a = a(n), t.flags |= 1, hl(l, t, a, u), t.child;
      case 14:
        return jm(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 15:
        return Zm(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 19:
        return fi(l, t, u);
      case 31:
        return Nh(l, t, u);
      case 22:
        return Vm(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        return Zu(t), a = El(vl), l === null ? (n = Ac(), n === null && (n = $, e = Oc(), n.pooledCache = e, e.refCount++, e !== null && (n.pooledCacheLanes |= u), n = e), t.memoizedState = { parent: a, cache: n }, Dc(t), fu(t, vl, n)) : ((l.lanes & u) !== 0 && (Mc(l, t), Nn(t, null, null, u), On()), n = l.memoizedState, e = t.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), fu(t, vl, a)) : (a = e.cache, fu(t, vl, a), a !== n.cache && Ec(
          t,
          [vl],
          u,
          !0
        ))), hl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 30:
        return t.stateNode === null && (t.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), a = t.pendingProps, a.name != null && a.name !== "auto" ? t.flags |= l === null ? 18882560 : 18874368 : R && _e(t), l !== null && l.memoizedProps.name !== a.name ? t.flags |= 4194816 : Ha(l, t), hl(l, t, a.children, u), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(S(156, t.tag));
  }
  function rt(l) {
    l.flags |= 4;
  }
  function ii(l, t, u, a, n) {
    var e;
    if ((e = (l.mode & 32) !== 0) && (e = u === null ? _y(t, a) : _y(t, a) && (a.src !== u.src || a.srcSet !== u.srcSet)), e) {
      if (l.flags |= 16777216, (n & 335544128) === n)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (R1()) l.flags |= 8192;
        else
          throw Ku = qe, _c;
    } else l.flags &= -16777217;
  }
  function km(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Dy(t))
      if (R1()) l.flags |= 8192;
      else
        throw Ku = qe, _c;
  }
  function ke(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? _0() : 536870912, l.lanes |= t, Ya |= t);
  }
  function Hn(l, t) {
    if (!R)
      switch (l.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var u = l.tail, a = null; u !== null; )
            u.alternate !== null && (a = u), u = u.sibling;
          a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
          break;
        default:
          for (t = l.tail, u = null; t !== null; )
            t.alternate !== null && (u = t), t = t.sibling;
          u === null ? l.tail = null : u.sibling = null;
      }
  }
  function P(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, u = 0, a = 0;
    if (t)
      for (var n = l.child; n !== null; )
        u |= n.lanes | n.childLanes, a |= n.subtreeFlags & 1206910976, a |= n.flags & 1206910976, n.return = l, n = n.sibling;
    else
      for (n = l.child; n !== null; )
        u |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = l, n = n.sibling;
    return l.subtreeFlags |= a, l.childLanes = u, t;
  }
  function Dh(l, t, u) {
    var a = t.pendingProps;
    switch (sc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return P(t), null;
      case 1:
        return P(t), null;
      case 3:
        return u = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Vt(vl), fa(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (Oa(t) ? rt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Tc())), P(t), null;
      case 26:
        var n = t.type, e = t.memoizedState;
        return l === null ? (rt(t), e !== null ? (P(t), km(t, e)) : (P(t), ii(
          t,
          n,
          null,
          a,
          u
        ))) : e ? e !== l.memoizedState ? (rt(t), P(t), km(t, e)) : (P(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && rt(t), P(t), ii(
          t,
          n,
          l,
          a,
          u
        )), null;
      case 27:
        if (ue(t), u = It.current, n = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && rt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(S(166));
            return P(t), t.subtreeFlags &= -33554433, null;
          }
          l = zt.current, Oa(t) ? Hv(t) : (l = sy(n, a, u), t.stateNode = l, rt(t));
        }
        return P(t), t.subtreeFlags &= -33554433, null;
      case 5:
        if (ue(t), n = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && rt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(S(166));
            return P(t), t.subtreeFlags &= -33554433, null;
          }
          if (e = zt.current, Oa(t))
            Hv(t);
          else {
            var f = Vn(
              It.current
            );
            switch (e) {
              case 1:
                e = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                e = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    e = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    e = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    e = f.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(
                      e.firstChild
                    );
                    break;
                  case "select":
                    e = typeof a.is == "string" ? f.createElement("select", {
                      is: a.is
                    }) : f.createElement("select"), a.multiple ? e.multiple = !0 : a.size && (e.size = a.size);
                    break;
                  default:
                    e = typeof a.is == "string" ? f.createElement(n, { is: a.is }) : f.createElement(n);
                }
            }
            e[bl] = t, e[Bl] = a;
            l: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                e.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === t) break l;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t)
                  break l;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            t.stateNode = e;
            l: switch (_l(e, n, a), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && rt(t);
          }
        }
        return P(t), t.subtreeFlags &= -33554433, ii(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          u
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && rt(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(S(166));
          if (l = It.current, Oa(t)) {
            if (l = t.stateNode, u = t.memoizedProps, a = null, n = Sl, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            l[bl] = t, l = !!(l.nodeValue === u || a !== null && a.suppressHydrationWarning === !0 || $1(l.nodeValue, u)), l || eu(t, !0);
          } else
            l = Vn(l).createTextNode(
              a
            ), l[bl] = t, t.stateNode = l;
        }
        return P(t), null;
      case 31:
        if (u = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = Oa(t), u !== null) {
            if (l === null) {
              if (!a) throw Error(S(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(S(557));
              l[bl] = t;
            } else
              Qu(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            P(t), l = !1;
          } else
            u = Tc(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return t.flags & 256 ? (Jl(t), t) : (Jl(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(S(558));
        }
        return P(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (n = Oa(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!n) throw Error(S(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(S(317));
              n[bl] = t;
            } else
              Qu(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            P(t), n = !1;
          } else
            n = Tc(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return t.flags & 256 ? (Jl(t), t) : (Jl(t), null);
        }
        return Jl(t), (t.flags & 128) !== 0 ? (t.lanes = u, t) : (u = a !== null, l = l !== null && l.memoizedState !== null, u && (a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), e = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (e = a.memoizedState.cachePool.pool), e !== n && (a.flags |= 2048)), u !== l && u && (t.child.flags |= 8192), ke(t, t.updateQueue), P(t), null);
      case 4:
        return fa(), l === null && Ki(t.stateNode.containerInfo), t.flags |= 67108864, P(t), null;
      case 10:
        return Vt(t.type), P(t), null;
      case 19:
        if (Bc(t), a = t.memoizedState, a === null) return P(t), null;
        if (n = (t.flags & 128) !== 0, e = a.rendering, e === null)
          if (n) Hn(a, !1);
          else {
            if (fl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (e = Qe(l), e !== null) {
                  for (t.flags |= 128, Hn(a, !1), l = e.updateQueue, t.updateQueue = l, ke(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; )
                    Av(u, l), u = u.sibling;
                  return An(
                    t,
                    Nl.current & 1 | 2
                  ), R && jt(t, a.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            a.tail !== null && Vl() > mf && (t.flags |= 128, n = !0, Hn(a, !1), t.lanes = 4194304);
          }
        else {
          if (!n)
            if (l = Qe(e), l !== null) {
              if (t.flags |= 128, n = !0, l = l.updateQueue, t.updateQueue = l, ke(t, l), Hn(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !e.alternate && !R)
                return P(t), null;
            } else
              2 * Vl() - a.renderingStartTime > mf && u !== 536870912 && (t.flags |= 128, n = !0, Hn(a, !1), t.lanes = 4194304);
          a.isBackwards ? (e.sibling = t.child, t.child = e) : (l = a.last, l !== null ? l.sibling = e : t.child = e, a.last = e);
        }
        if (a.tail !== null) {
          l = a.tail;
          l: {
            for (u = l; u !== null; ) {
              if (u.alternate !== null) {
                u = !1;
                break l;
              }
              u = u.sibling;
            }
            u = !0;
          }
          return a.rendering = l, a.tail = l.sibling, a.renderingStartTime = Vl(), l.sibling = null, e = Nl.current, e = n ? e & 1 | 2 : e & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !u || R ? An(t, e) : (u = e, k(Ol, t), k(Nl, u), Ml === null && (Ml = t)), R && jt(t, a.treeForkCount), l;
        }
        return P(t), null;
      case 22:
      case 23:
        return Jl(t), Rc(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (P(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : P(t), u = t.updateQueue, u !== null && ke(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== u && (t.flags |= 2048), l !== null && Tl(xu), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), Vt(vl), P(t), null;
      case 25:
        return null;
      case 30:
        return t.flags |= 33554432, P(t), null;
    }
    throw Error(S(156, t.tag));
  }
  function Mh(l, t) {
    switch (sc(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Vt(vl), fa(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return ue(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Jl(t), t.alternate === null)
            throw Error(S(340));
          Qu();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (Jl(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(S(340));
          Qu();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return Bc(t), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null), t.flags |= 4, t) : null;
      case 4:
        return fa(), null;
      case 10:
        return Vt(t.type), null;
      case 22:
      case 23:
        return Jl(t), Rc(), l !== null && Tl(xu), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Vt(vl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Im(l, t) {
    switch (sc(t), t.tag) {
      case 3:
        Vt(vl), fa();
        break;
      case 26:
      case 27:
      case 5:
        ue(t);
        break;
      case 4:
        fa();
        break;
      case 31:
        t.memoizedState !== null && Jl(t);
        break;
      case 13:
        Jl(t);
        break;
      case 19:
        Bc(t);
        break;
      case 10:
        Vt(t.type);
        break;
      case 22:
      case 23:
        Jl(t), Rc(), l !== null && Tl(xu);
        break;
      case 24:
        Vt(vl);
    }
  }
  function Cn(l, t) {
    try {
      var u = t.updateQueue, a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            a = void 0;
            var e = u.create, f = u.inst;
            a = e(), f.destroy = a;
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (c) {
      r(t, t.return, c);
    }
  }
  function ou(l, t, u) {
    try {
      var a = t.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var e = n.next;
        a = e;
        do {
          if ((a.tag & l) === l) {
            var f = a.inst, c = f.destroy;
            if (c !== void 0) {
              f.destroy = void 0, n = t;
              var i = u, d = c;
              try {
                d();
              } catch (g) {
                r(
                  n,
                  i,
                  g
                );
              }
            }
          }
          a = a.next;
        } while (a !== e);
      }
    } catch (g) {
      r(t, t.return, g);
    }
  }
  function Pm(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        Lv(t, u);
      } catch (a) {
        r(l, l.return, a);
      }
    }
  }
  function l1(l, t, u) {
    u.props = pu(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (a) {
      r(l, t, a);
    }
  }
  function Ot(l, t) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            var n = l.stateNode, e = Gt(l.memoizedProps, n);
            (n.ref === null || n.ref.name !== e) && (n.ref = cy(e)), a = n.ref;
            break;
          case 7:
            if (l.stateNode === null) {
              var f = new $l(l);
              F(
                l.child,
                !1,
                zo,
                f,
                void 0,
                void 0
              ), l.stateNode = f;
            }
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(a) : u.current = a;
      }
    } catch (c) {
      r(l, t, c);
    }
  }
  function Al(l, t) {
    var u = l.ref, a = l.refCleanup;
    if (u !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          r(l, t, n);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (n) {
          r(l, t, n);
        }
      else u.current = null;
  }
  function Ie(l, t) {
    if ((l.tag === 5 || l.tag === 27 || l.tag === 6) && l.alternate === null && t !== null)
      for (var u = 0; u < t.length; u++)
        hy(
          l.stateNode,
          t[u]
        );
  }
  function t1(l) {
    for (var t = l.return; t !== null && (mi(t) && hy(l.stateNode, t.stateNode), !vi(t)); )
      t = t.return;
  }
  function Rn(l) {
    for (var t = l.return; t !== null && (mi(t) && To(l.stateNode, t.stateNode), !vi(t)); )
      t = t.return;
  }
  function vi(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 27;
  }
  function mi(l) {
    return l && l.tag === 7 && l.stateNode !== null;
  }
  function yi(l) {
    var t = l.type, u = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && a.focus();
          break l;
        case "img":
          u.src ? a.src = u.src : u.srcSet && (a.srcset = u.srcSet);
      }
    } catch (n) {
      r(l, l.return, n);
    }
  }
  function di(l, t, u) {
    try {
      var a = l.stateNode;
      Ph(a, l.type, u, t), a[Bl] = t;
    } catch (n) {
      r(l, l.return, n);
    }
  }
  function u1(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Eu(l.type) || l.tag === 4;
  }
  function hi(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || u1(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Eu(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function oi(l, t, u, a) {
    var n = l.tag;
    if (n === 5 || n === 6)
      n = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(n, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(n), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = Tt)), Ie(l, a), j = !0;
    else if (n !== 4 && (n === 27 && (Ie(l, a), a = null, Eu(l.type) && (u = l.stateNode, t = null)), l = l.child, l !== null))
      for (oi(
        l,
        t,
        u,
        a
      ), l = l.sibling; l !== null; )
        oi(
          l,
          t,
          u,
          a
        ), l = l.sibling;
  }
  function Pe(l, t, u, a) {
    var n = l.tag;
    if (n === 5 || n === 6)
      n = l.stateNode, t ? u.insertBefore(n, t) : u.appendChild(n), Ie(l, a), j = !0;
    else if (n !== 4 && (n === 27 && (Ie(l, a), a = null, Eu(l.type) && (u = l.stateNode)), l = l.child, l !== null))
      for (Pe(
        l,
        t,
        u,
        a
      ), l = l.sibling; l !== null; )
        Pe(
          l,
          t,
          u,
          a
        ), l = l.sibling;
  }
  function a1(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var a = l.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      _l(t, a, u), t[bl] = l, t[Bl] = u;
    } catch (e) {
      r(l, l.return, e);
    }
  }
  var lf = !1, pl = null;
  function n1(l) {
    (l.tag === 30 || (l.subtreeFlags & 33554432) !== 0) && (lf = !0);
  }
  var Nt = null;
  function e1() {
    var l = Nt;
    return Nt = null, l;
  }
  var Gl = 0;
  function Ca(l, t, u, a, n) {
    return Gl = 0, f1(
      l.child,
      t,
      u,
      a,
      n
    );
  }
  function f1(l, t, u, a, n) {
    for (var e = !1; l !== null; ) {
      if (l.tag === 5) {
        var f = l.stateNode;
        if (a !== null) {
          var c = ki(f);
          a.push(c), c.view && (e = !0);
        } else
          e || ki(f).view && (e = !0);
        lf = !0, ey(
          f,
          Gl === 0 ? t : t + "_" + Gl,
          u
        ), Gl++;
      } else (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && n || f1(
        l.child,
        t,
        u,
        a,
        n
      ) && (e = !0));
      l = l.sibling;
    }
    return e;
  }
  function At(l, t) {
    for (; l !== null; )
      l.tag === 5 ? fy(l.stateNode, l.memoizedProps) : (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && t || At(
        l.child,
        t
      )), l = l.sibling;
  }
  function tf(l) {
    if ((l.subtreeFlags & 18874368) !== 0)
      for (l = l.child; l !== null; ) {
        if ((l.tag !== 22 || l.memoizedState === null) && (tf(l), l.tag === 30 && (l.flags & 18874368) !== 0 && l.stateNode.paired)) {
          var t = l.memoizedProps;
          if (t.name == null || t.name === "auto")
            throw Error(S(544));
          var u = t.name;
          t = Qt(t.default, t.share), t !== "none" && (Ca(
            l,
            u,
            t,
            null,
            !1
          ) || At(l.child, !1));
        }
        l = l.sibling;
      }
  }
  function gi(l, t) {
    if (l.tag === 30) {
      var u = l.stateNode, a = l.memoizedProps, n = Gt(a, u), e = Qt(
        a.default,
        u.paired ? a.share : a.enter
      );
      e !== "none" ? Ca(l, n, e, null, !1) ? (tf(l), u.paired || t || ja(l, a.onEnter)) : At(l.child, !1) : tf(l);
    } else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        gi(l, t), l = l.sibling;
    else tf(l);
  }
  function Si(l) {
    if (pl !== null && pl.size !== 0) {
      var t = pl;
      if ((l.subtreeFlags & 18874368) !== 0)
        for (l = l.child; l !== null; ) {
          if (l.tag !== 22 || l.memoizedState === null) {
            if (l.tag === 30 && (l.flags & 18874368) !== 0) {
              var u = l.memoizedProps, a = u.name;
              if (a != null && a !== "auto") {
                var n = t.get(a);
                if (n !== void 0) {
                  var e = Qt(
                    u.default,
                    u.share
                  );
                  if (e !== "none" && (Ca(
                    l,
                    a,
                    e,
                    null,
                    !1
                  ) ? (e = l.stateNode, n.paired = e, e.paired = n, ja(l, u.onShare)) : At(l.child, !1)), t.delete(a), t.size === 0) break;
                }
              }
            }
            Si(l);
          }
          l = l.sibling;
        }
    }
  }
  function si(l) {
    if (l.tag === 30) {
      var t = l.memoizedProps, u = Gt(t, l.stateNode), a = pl !== null ? pl.get(u) : void 0, n = Qt(
        t.default,
        a !== void 0 ? t.share : t.exit
      );
      n !== "none" && (Ca(l, u, n, null, !1) ? a !== void 0 ? (n = l.stateNode, a.paired = n, n.paired = a, pl.delete(u), ja(l, t.onShare)) : ja(l, t.onExit) : At(l.child, !1)), pl !== null && Si(l);
    } else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        si(l), l = l.sibling;
    else
      pl !== null && Si(l);
  }
  function c1(l) {
    for (l = l.child; l !== null; ) {
      if (l.tag === 30) {
        var t = l.memoizedProps, u = Gt(t, l.stateNode);
        t = Qt(t.default, t.update), l.flags &= -5, t !== "none" && Ca(
          l,
          u,
          t,
          l.memoizedState = [],
          !1
        );
      } else
        (l.subtreeFlags & 33554432) !== 0 && c1(l);
      l = l.sibling;
    }
  }
  function zi(l) {
    if ((l.subtreeFlags & 18874368) !== 0)
      for (l = l.child; l !== null; ) {
        if (l.tag !== 22 || l.memoizedState === null) {
          if (l.tag === 30 && (l.flags & 18874368) !== 0) {
            var t = l.stateNode;
            t.paired !== null && (t.paired = null, At(l.child, !1));
          }
          zi(l);
        }
        l = l.sibling;
      }
  }
  function uf(l) {
    if (l.tag === 30)
      l.stateNode.paired = null, At(l.child, !1), zi(l);
    else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        uf(l), l = l.sibling;
    else zi(l);
  }
  function i1(l) {
    for (l = l.child; l !== null; )
      l.tag === 30 ? At(l.child, !1) : (l.subtreeFlags & 33554432) !== 0 && i1(l), l = l.sibling;
  }
  function Ti(l, t, u, a, n, e, f) {
    for (var c = !1; t !== null; ) {
      if (t.tag === 5) {
        var i = t.stateNode;
        if (e !== null && Gl < e.length) {
          var d = e[Gl], g = ki(i);
          (d.view || g.view) && (c = !0);
          var z;
          if (z = (l.flags & 4) === 0)
            if (g.clip) z = !0;
            else {
              z = d.rect;
              var m = g.rect;
              z = z.y !== m.y || z.x !== m.x || z.height !== m.height || z.width !== m.width;
            }
          z && (l.flags |= 4), g.abs ? g = !d.abs : (d = d.rect, g = g.rect, g = d.height !== g.height || d.width !== g.width), g && (l.flags |= 32);
        } else l.flags |= 32;
        (l.flags & 4) !== 0 && ey(
          i,
          Gl === 0 ? u : u + "_" + Gl,
          n
        ), c && (l.flags & 4) !== 0 || (Nt === null && (Nt = []), Nt.push(
          i,
          Gl === 0 ? a : a + "_" + Gl,
          t.memoizedProps
        )), Gl++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && f ? l.flags |= t.flags & 32 : Ti(
        l,
        t.child,
        u,
        a,
        n,
        e,
        f
      ) && (c = !0));
      t = t.sibling;
    }
    return c;
  }
  function v1(l, t) {
    for (l = l.child; l !== null; ) {
      if (l.tag === 30) {
        var u = l.memoizedProps, a = l.stateNode, n = Gt(u, a), e = Qt(u.default, u.update), f;
        f = l.memoizedState, l.memoizedState = null, a = l;
        var c = l.child;
        Gl = 0, n = Ti(
          a,
          c,
          n,
          n,
          e,
          f,
          !1
        ), (l.flags & 4) !== 0 && n && ja(l, u.onUpdate);
      } else
        (l.subtreeFlags & 33554432) !== 0 && v1(l);
      l = l.sibling;
    }
  }
  var sl = !1, L = !1, _t = !1, bi = !1, m1 = typeof WeakSet == "function" ? WeakSet : Set, zl = null, Dt = !1, qn = !1, af = !1, Ei = !1;
  function Uh(l, t, u) {
    if (l = l.containerInfo, pi = Fa, l = ov(l), cc(l)) {
      if ("selectionStart" in l)
        var a = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          a = (a = l.ownerDocument) && a.defaultView || window;
          var n = a.getSelection && a.getSelection();
          if (n && n.rangeCount !== 0) {
            a = n.anchorNode;
            var e = n.anchorOffset, f = n.focusNode;
            n = n.focusOffset;
            try {
              a.nodeType, f.nodeType;
            } catch {
              a = null;
              break l;
            }
            var c = 0, i = -1, d = -1, g = 0, z = 0, m = l, o = null;
            t: for (; ; ) {
              for (var T; m !== a || e !== 0 && m.nodeType !== 3 || (i = c + e), m !== f || n !== 0 && m.nodeType !== 3 || (d = c + n), m.nodeType === 3 && (c += m.nodeValue.length), (T = m.firstChild) !== null; )
                o = m, m = T;
              for (; ; ) {
                if (m === l) break t;
                if (o === a && ++g === e && (i = c), o === f && ++z === n && (d = c), (T = m.nextSibling) !== null) break;
                m = o, o = m.parentNode;
              }
              m = T;
            }
            a = i === -1 || d === -1 ? null : { start: i, end: d };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (wi = { focusedElem: l, selectionRange: a }, Fa = !1, u = (u & 335544064) === u, zl = t, t = u ? 9270 : 1024; zl !== null; ) {
      if (l = zl, u && (a = l.deletions, a !== null))
        for (e = 0; e < a.length; e++)
          u && si(a[e]);
      if (l.alternate === null && (l.flags & 2) !== 0)
        u && n1(l), nf(u);
      else {
        if (l.tag === 22) {
          if (a = l.alternate, l.memoizedState !== null) {
            a !== null && a.memoizedState === null && u && si(a), nf(u);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            u && n1(l), nf(u);
            continue;
          }
        }
        a = l.child, (l.subtreeFlags & t) !== 0 && a !== null ? (a.return = l, zl = a) : (u && c1(l), nf(u));
      }
    }
    pl = null;
  }
  function nf(l) {
    for (; zl !== null; ) {
      var t = zl, u = l, a = t.alternate, n = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((n & 1024) !== 0 && a !== null) {
            u = void 0, n = a.memoizedProps, a = a.memoizedState;
            var e = t.stateNode;
            try {
              var f = pu(
                t.type,
                n
              );
              u = e.getSnapshotBeforeUpdate(
                f,
                a
              ), e.__reactInternalSnapshotBeforeUpdate = u;
            } catch (c) {
              r(t, t.return, c);
            }
          }
          break;
        case 3:
          if ((n & 1024) !== 0) {
            if (a = t.stateNode.containerInfo, u = a.nodeType, u === 9)
              l0(a);
            else if (u === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  l0(a);
                  break;
                default:
                  a.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          u && a !== null && (u = Gt(
            a.memoizedProps,
            a.stateNode
          ), n = t.memoizedProps, n = Qt(n.default, n.update), n !== "none" && Ca(
            a,
            u,
            n,
            a.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((n & 1024) !== 0) throw Error(S(163));
      }
      if (a = t.sibling, a !== null) {
        a.return = t.return, zl = a;
        break;
      }
      zl = t.return;
    }
  }
  function y1(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Mt(l, u), a & 4 && Cn(5, u);
        break;
      case 1:
        if (Mt(l, u), a & 4)
          if (l = u.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (f) {
              r(u, u.return, f);
            }
          else {
            var n = pu(
              u.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                n,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              r(
                u,
                u.return,
                f
              );
            }
          }
        a & 64 && Pm(u), a & 512 && Ot(u, u.return);
        break;
      case 3:
        if (Mt(l, u), a & 64 && (l = u.updateQueue, l !== null)) {
          if (t = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                t = u.child.stateNode;
                break;
              case 1:
                t = u.child.stateNode;
            }
          try {
            Lv(l, t);
          } catch (f) {
            r(u, u.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && a1(u);
      case 26:
      case 5:
        Mt(l, u), t === null && a & 4 && yi(u), a & 512 && Ot(u, u.return);
        break;
      case 12:
        Mt(l, u);
        break;
      case 31:
        Mt(l, u), a & 4 && g1(l, u);
        break;
      case 13:
        Mt(l, u), a & 4 && S1(l, u), a & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = Vh.bind(
          null,
          u
        ), Oo(l, u))));
        break;
      case 22:
        if (a = u.memoizedState !== null || sl, !a) {
          var e = t !== null && t.memoizedState !== null || L;
          t = sl, n = L, sl = a, (L = e) && !n ? (a = 2, (u.subtreeFlags & 8772) !== 0 && (a |= 1), yt(
            l,
            u,
            a
          )) : Mt(l, u), sl = t, L = n;
        }
        break;
      case 30:
        Mt(l, u), a & 512 && Ot(u, u.return);
        break;
      case 7:
        a & 512 && Ot(u, u.return);
      default:
        Mt(l, u);
    }
  }
  function Oi(l, t) {
    for (l = l.child; l !== null; )
      d1(l, t), l = l.sibling;
  }
  function d1(l, t) {
    switch (l.tag) {
      case 5:
      case 26:
        try {
          var u = l.stateNode;
          if (t) {
            var a = u.style;
            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none";
          } else {
            var n = l.stateNode, e = l.memoizedProps.style, f = e != null && e.hasOwnProperty("display") ? e.display : null;
            n.style.display = f == null || typeof f == "boolean" ? "" : ("" + f).trim();
          }
        } catch (i) {
          r(l, l.return, i);
        }
        Ni(l, t);
        break;
      case 6:
        try {
          l.stateNode.nodeValue = t ? "" : l.memoizedProps, j = !0;
        } catch (i) {
          r(l, l.return, i);
        }
        break;
      case 18:
        try {
          var c = l.stateNode;
          t ? ny(c, !0) : ny(l.stateNode, !1);
        } catch (i) {
          r(l, l.return, i);
        }
        break;
      case 22:
      case 23:
        l.memoizedState === null && Oi(l, t);
        break;
      default:
        Oi(l, t);
    }
  }
  function Ni(l, t) {
    if (l.subtreeFlags & 67108864)
      for (l = l.child; l !== null; ) {
        l: {
          var u = l, a = t;
          switch (u.tag) {
            case 4:
              d1(u, a);
              break l;
            case 22:
              u.memoizedState === null && Ni(u, a);
              break l;
            default:
              Ni(u, a);
          }
        }
        l = l.sibling;
      }
  }
  function h1(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, h1(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && ve(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var ul = null, Ql = !1;
  function vt(l, t, u) {
    for (u = u.child; u !== null; )
      o1(l, t, u), u = u.sibling;
  }
  function o1(l, t, u) {
    if (xl && typeof xl.onCommitFiberUnmount == "function")
      try {
        xl.onCommitFiberUnmount(ln, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        L || Al(u, t), vt(
          l,
          t,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && !L && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        L || Al(u, t), Rn(u);
        var a = ul, n = Ql;
        Eu(u.type) && (ul = u.stateNode, Ql = !1), vt(
          l,
          t,
          u
        ), zy(
          u.stateNode,
          u.type,
          u.memoizedProps
        ), ul = a, Ql = n;
        break;
      case 5:
        L || Al(u, t), Rn(u);
      case 6:
        if (u.tag === 6 && Rn(u), a = ul, n = Ql, ul = null, vt(
          l,
          t,
          u
        ), ul = a, Ql = n, ul !== null)
          if (Ql)
            try {
              (ul.nodeType === 9 ? ul.body : ul.nodeName === "HTML" ? ul.ownerDocument.body : ul).removeChild(u.stateNode), j = !0;
            } catch (e) {
              r(
                u,
                t,
                e
              );
            }
          else
            try {
              ul.removeChild(u.stateNode), j = !0;
            } catch (e) {
              r(
                u,
                t,
                e
              );
            }
        break;
      case 18:
        ul !== null && (Ql ? (l = ul, ay(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Wa(l)) : ay(ul, u.stateNode));
        break;
      case 4:
        a = ul, n = Ql, ul = u.stateNode.containerInfo, Ql = !0, vt(
          l,
          t,
          u
        ), ul = a, Ql = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ou(2, u, t), L || ou(4, u, t), vt(
          l,
          t,
          u
        );
        break;
      case 1:
        L || (Al(u, t), a = u.stateNode, typeof a.componentWillUnmount == "function" && l1(
          u,
          t,
          a
        )), vt(
          l,
          t,
          u
        );
        break;
      case 21:
        vt(
          l,
          t,
          u
        );
        break;
      case 22:
        L = (a = L) || u.memoizedState !== null, vt(
          l,
          t,
          u
        ), L = a;
        break;
      case 30:
        Al(u, t), vt(
          l,
          t,
          u
        );
        break;
      case 7:
        L || Al(u, t), vt(
          l,
          t,
          u
        );
        break;
      default:
        vt(
          l,
          t,
          u
        );
    }
  }
  function g1(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Wa(l);
      } catch (u) {
        r(t, t.return, u);
      }
    }
  }
  function S1(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Wa(l);
      } catch (u) {
        r(t, t.return, u);
      }
  }
  function Hh(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new m1()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new m1()), t;
      default:
        throw Error(S(435, l.tag));
    }
  }
  function ef(l, t) {
    var u = Hh(l);
    t.forEach(function(a) {
      if (!u.has(a)) {
        u.add(a);
        var n = xh.bind(null, l, a);
        a.then(n, n);
      }
    });
  }
  function Cl(l, t, u) {
    var a = t.deletions;
    if (a !== null)
      for (var n = 0; n < a.length; n++) {
        var e = a[n], f = l, c = t, i = c;
        l: for (; i !== null; ) {
          switch (i.tag) {
            case 27:
              if (Eu(i.type)) {
                ul = i.stateNode, Ql = !1;
                break l;
              }
              break;
            case 5:
              ul = i.stateNode, Ql = !1;
              break l;
            case 3:
            case 4:
              ul = i.stateNode.containerInfo, Ql = !0;
              break l;
          }
          i = i.return;
        }
        if (ul === null) throw Error(S(160));
        o1(f, c, e), ul = null, Ql = !1, f = e.alternate, f !== null && (f.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        s1(t, l, u), t = t.sibling;
  }
  var mt = null;
  function s1(l, t, u) {
    var a = l.alternate, n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (n & 4 && (a = l.updateQueue, a = a !== null ? a.events : null, a !== null))
          for (var e = 0; e < a.length; e++) {
            var f = a[e];
            f.ref.impl = f.nextImpl;
          }
        Cl(t, l, u), Rl(l), n & 4 && (ou(3, l, l.return), Cn(3, l), ou(5, l, l.return));
        break;
      case 1:
        Cl(t, l, u), Rl(l), n & 512 && (L || a === null || Al(a, a.return)), n & 64 && sl && (l = l.updateQueue, l !== null && (t = l.callbacks, t !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? t : u.concat(t))));
        break;
      case 26:
        if (e = mt, Cl(t, l, u), Rl(l), n & 512 && (L || a === null || Al(a, a.return)), n & 4)
          if (n = a !== null ? a.memoizedState : null, u = l.memoizedState, a === null)
            if (u === null)
              if (l.stateNode === null)
                if (sl)
                  l.stateNode = ly(
                    l.type,
                    l.memoizedProps,
                    t.containerInfo,
                    l
                  );
                else {
                  l: {
                    t = l.type, u = l.memoizedProps, n = e.ownerDocument || e;
                    t: switch (t) {
                      case "title":
                        a = n.getElementsByTagName("title")[0], (!a || a[an] || a[bl] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = n.createElement(t), n.head.insertBefore(
                          a,
                          n.querySelector("head > title")
                        )), _l(a, t, u), a[bl] = l, gl(a), t = a;
                        break l;
                      case "link":
                        if (e = Ay(
                          "link",
                          "href",
                          n
                        ).get(t + (u.href || ""))) {
                          for (f = 0; f < e.length; f++)
                            if (a = e[f], a.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && a.getAttribute("rel") === (u.rel == null ? null : u.rel) && a.getAttribute("title") === (u.title == null ? null : u.title) && a.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                              e.splice(f, 1);
                              break t;
                            }
                        }
                        a = n.createElement(t), _l(a, t, u), n.head.appendChild(a);
                        break;
                      case "meta":
                        if (e = Ay(
                          "meta",
                          "content",
                          n
                        ).get(t + (u.content || ""))) {
                          for (f = 0; f < e.length; f++)
                            if (a = e[f], a.getAttribute("content") === (u.content == null ? null : "" + u.content) && a.getAttribute("name") === (u.name == null ? null : u.name) && a.getAttribute("property") === (u.property == null ? null : u.property) && a.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && a.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                              e.splice(f, 1);
                              break t;
                            }
                        }
                        a = n.createElement(t), _l(a, t, u), n.head.appendChild(a);
                        break;
                      default:
                        throw Error(S(468, t));
                    }
                    a[bl] = l, gl(a), t = a;
                  }
                  l.stateNode = t;
                }
              else
                sl || c0(e, l.type, l.stateNode);
            else
              l.stateNode = Ny(
                e,
                u,
                l.memoizedProps
              );
          else
            n !== u ? (n === null ? (t = a.stateNode, t === null || L || t.parentNode.removeChild(t)) : n.count--, u === null ? sl || c0(e, l.type, l.stateNode) : Ny(e, u, l.memoizedProps)) : u === null && l.stateNode !== null && di(
              l,
              l.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        Cl(t, l, u), Rl(l), n & 512 && (L || a === null || Al(a, a.return)), a !== null && n & 4 && di(
          l,
          l.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (e = _t, _t = !1, Cl(t, l, u), _t = e, Rl(l), n & 512 && (L || a === null || Al(a, a.return)), l.flags & 32) {
          t = l.stateNode;
          try {
            da(t, ""), j = !0;
          } catch (g) {
            r(l, l.return, g);
          }
        }
        n & 4 && l.stateNode != null && (t = l.memoizedProps, di(
          l,
          t,
          a !== null ? a.memoizedProps : t
        )), n & 1024 && (bi = !0);
        break;
      case 6:
        if (Cl(t, l, u), Rl(l), n & 4) {
          if (l.stateNode === null)
            throw Error(S(162));
          t = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = t, j = !0;
          } catch (g) {
            r(l, l.return, g);
          }
        }
        break;
      case 3:
        if (j = !1, Ef = null, e = mt, mt = xn(t.containerInfo), Cl(t, l, u), mt = e, Rl(l), n & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Wa(t.containerInfo);
          } catch (g) {
            r(l, l.return, g);
          }
        bi && (bi = !1, z1(l)), j = !1;
        break;
      case 4:
        n = _t, _t = sl, a = j0(), e = mt, mt = xn(
          l.stateNode.containerInfo
        ), Cl(t, l, u), Rl(l), mt = e, j && qn && (af = !0), j = a, _t = n;
        break;
      case 12:
        Cl(t, l, u), Rl(l);
        break;
      case 31:
        Cl(t, l, u), Rl(l), n & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, ef(l, t)));
        break;
      case 13:
        Cl(t, l, u), Rl(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (vf = Vl()), n & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, ef(l, t)));
        break;
      case 22:
        e = l.memoizedState !== null, f = a !== null && a.memoizedState !== null;
        var c = sl, i = L, d = _t;
        sl = c || e, _t = d || e, L = i || f, Cl(t, l, u), L = i, _t = d, sl = c, Rl(l), n & 8192 && (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, !e || a === null || f || sl || L || (t = f || L, u = sl, a = L, sl = e || sl, L = t, gu(l, 2), sl = u, L = a), !e && _t || Oi(l, e)), n & 4 && (t = l.updateQueue, t !== null && (u = t.retryQueue, u !== null && (t.retryQueue = null, ef(l, u))));
        break;
      case 19:
        Cl(t, l, u), Rl(l), n & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, ef(l, t)));
        break;
      case 30:
        n & 512 && (L || a === null || Al(a, a.return)), n = j0(), e = qn, f = (u & 335544064) === u, c = l.memoizedProps, qn = f && Qt(
          c.default,
          c.update
        ) !== "none", Cl(t, l, u), Rl(l), f && a !== null && j && (l.flags |= 4), qn = e, j = n;
        break;
      case 21:
        break;
      case 7:
        n & 512 && (L || a === null || Al(a, a.return)), a && a.stateNode !== null && (a.stateNode._fragmentFiber = l);
      default:
        Cl(t, l, u), Rl(l);
    }
  }
  function Rl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var u, a = l.return; a !== null; ) {
          if (u1(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var n = l.return; n !== null; ) {
          if (mi(n)) {
            var e = n.stateNode;
            a === null ? a = [e] : a.push(e);
          }
          if (vi(n)) break;
          n = n.return;
        }
        var f = a;
        if (u == null) throw Error(S(160));
        switch (u.tag) {
          case 27:
            var c = u.stateNode, i = hi(l);
            Pe(
              l,
              i,
              c,
              f
            );
            break;
          case 5:
            var d = u.stateNode;
            u.flags & 32 && (da(d, ""), u.flags &= -33);
            var g = hi(l);
            Pe(
              l,
              g,
              d,
              f
            );
            break;
          case 3:
          case 4:
            var z = u.stateNode.containerInfo, m = hi(l);
            oi(
              l,
              m,
              z,
              f
            );
            break;
          default:
            throw Error(S(161));
        }
      } catch (o) {
        r(l, l.return, o);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function z1(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        z1(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, Fa = !0, t.reset(), Fa = !1), l = l.sibling;
      }
  }
  function Ra(l, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null; )
        T1(t, l), t = t.sibling;
    else v1(t);
  }
  function T1(l, t) {
    var u = l.alternate;
    if (u === null) gi(l, !1);
    else
      switch (l.tag) {
        case 3:
          if (Ei = Dt = !1, e1(), Ra(t, l), !Dt && !af) {
            if (l = Nt, l !== null)
              for (var a = 0; a < l.length; a += 3) {
                u = l[a];
                var n = l[a + 1];
                fy(u, l[a + 2]), u = u.ownerDocument.documentElement, u !== null && u.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + n + ")"
                  }
                );
              }
            l = t.containerInfo, l = l.nodeType === 9 ? l.documentElement : l.ownerDocument.documentElement, l !== null && l.style.viewTransitionName === "" && (l.style.viewTransitionName = "none", l.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), l.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), Ei = !0;
          }
          Nt = null;
          break;
        case 5:
          Ra(t, l);
          break;
        case 4:
          a = Dt, Dt = !1, Ra(t, l), Dt && (af = !0), Dt = a;
          break;
        case 22:
          l.memoizedState === null && (u.memoizedState !== null ? gi(l, !1) : Ra(t, l));
          break;
        case 30:
          a = Dt, n = e1(), Dt = !1, Ra(t, l), Dt && (l.flags |= 4);
          var e = l.memoizedProps, f = l.stateNode;
          t = Gt(e, f), f = Gt(u.memoizedProps, f);
          var c = Qt(e.default, e.update);
          c === "none" ? t = !1 : (e = u.memoizedState, u.memoizedState = null, u = l.child, Gl = 0, t = Ti(
            l,
            u,
            t,
            f,
            c,
            e,
            !0
          ), Gl !== (e === null ? 0 : e.length) && (l.flags |= 32)), (l.flags & 4) !== 0 && t ? (ja(
            l,
            l.memoizedProps.onUpdate
          ), Nt = n) : n !== null && (n.push.apply(n, Nt), Nt = n), Dt = (l.flags & 32) !== 0 ? !0 : a;
          break;
        default:
          Ra(t, l);
      }
  }
  function Mt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        y1(l, t.alternate, t), t = t.sibling;
  }
  function gu(l, t) {
    for (l = l.child; l !== null; ) {
      var u = l, a = t;
      switch (u.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ou(4, u, u.return), gu(
            u,
            a
          );
          break;
        case 1:
          Al(u, u.return);
          var n = u.stateNode;
          typeof n.componentWillUnmount == "function" && l1(
            u,
            u.return,
            n
          ), gu(
            u,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && zy(
            u.stateNode,
            u.type,
            u.memoizedProps
          );
        case 5:
          Al(u, u.return), u.tag !== 5 && u.tag !== 27 || Rn(u), gu(
            u,
            a
          );
          break;
        case 6:
          Rn(u);
          break;
        case 26:
          Al(u, u.return), n = u.stateNode, u.memoizedState !== null || n === null || L || n.parentNode.removeChild(n), gu(
            u,
            a
          );
          break;
        case 22:
          u.memoizedState === null && gu(
            u,
            a
          );
          break;
        case 30:
          Al(u, u.return), gu(
            u,
            a
          );
          break;
        case 7:
          Al(u, u.return);
        default:
          gu(
            u,
            a
          );
      }
      l = l.sibling;
    }
  }
  function yt(l, t, u) {
    for (u = (t.subtreeFlags & 8772) !== 0 ? u : u & -2, t = t.child; t !== null; ) {
      var a = t.alternate, n = l, e = t, f = e.flags, c = (u & 1) !== 0;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          yt(
            n,
            e,
            u
          ), Cn(4, e);
          break;
        case 1:
          if (yt(
            n,
            e,
            u
          ), a = e, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (g) {
              r(a, a.return, g);
            }
          if (a = e, n = a.updateQueue, n !== null) {
            var i = a.stateNode;
            try {
              var d = n.shared.hiddenCallbacks;
              if (d !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < d.length; n++)
                  xv(d[n], i);
            } catch (g) {
              r(a, a.return, g);
            }
          }
          c && f & 64 && Pm(e), Ot(e, e.return);
          break;
        case 27:
          (u & 2) !== 0 && a1(e);
        case 5:
          e.tag !== 5 && e.tag !== 27 || t1(e), yt(
            n,
            e,
            u
          ), c && a === null && f & 4 && yi(e), Ot(e, e.return);
          break;
        case 6:
          t1(e);
          break;
        case 26:
          i = e.stateNode, e.memoizedState !== null || i === null || sl || c0(
            xn(i.ownerDocument),
            e.type,
            i
          ), yt(
            n,
            e,
            u
          ), c && a === null && f & 4 && yi(e), Ot(e, e.return);
          break;
        case 12:
          yt(
            n,
            e,
            u
          );
          break;
        case 31:
          yt(
            n,
            e,
            u
          ), c && f & 4 && g1(n, e);
          break;
        case 13:
          yt(
            n,
            e,
            u
          ), c && f & 4 && S1(n, e);
          break;
        case 22:
          e.memoizedState === null && yt(
            n,
            e,
            u
          ), Ot(e, e.return);
          break;
        case 30:
          yt(
            n,
            e,
            u
          ), Ot(e, e.return);
          break;
        case 7:
          Ot(e, e.return);
        default:
          yt(
            n,
            e,
            u
          );
      }
      t = t.sibling;
    }
  }
  function Ai(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && sn(u));
  }
  function _i(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && sn(l));
  }
  function nt(l, t, u, a) {
    var n = (u & 335544064) === u;
    if (t.subtreeFlags & (n ? 10262 : 10256))
      for (t = t.child; t !== null; )
        b1(
          l,
          t,
          u,
          a
        ), t = t.sibling;
    else n && i1(t);
  }
  function b1(l, t, u, a) {
    var n = (u & 335544064) === u;
    n && t.alternate === null && t.return !== null && t.return.alternate !== null && uf(t);
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        nt(
          l,
          t,
          u,
          a
        ), e & 2048 && Cn(9, t);
        break;
      case 1:
        nt(
          l,
          t,
          u,
          a
        );
        break;
      case 3:
        nt(
          l,
          t,
          u,
          a
        ), n && Ei && (l = l.containerInfo, l = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, l.style.viewTransitionName === "root" && (l.style.viewTransitionName = ""), l = l.ownerDocument.documentElement, l !== null && l.style.viewTransitionName === "none" && (l.style.viewTransitionName = "")), e & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && sn(e)));
        break;
      case 12:
        if (e & 2048) {
          nt(
            l,
            t,
            u,
            a
          ), e = t.stateNode;
          try {
            var f = t.memoizedProps, c = f.id, i = f.onPostCommit;
            typeof i == "function" && i(
              c,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (d) {
            r(t, t.return, d);
          }
        } else
          nt(
            l,
            t,
            u,
            a
          );
        break;
      case 31:
        nt(
          l,
          t,
          u,
          a
        );
        break;
      case 13:
        nt(
          l,
          t,
          u,
          a
        );
        break;
      case 23:
        break;
      case 22:
        f = t.stateNode, c = t.alternate, t.memoizedState !== null ? (n && c !== null && c.memoizedState === null && uf(c), f._visibility & 2 ? nt(
          l,
          t,
          u,
          a
        ) : Bn(
          l,
          t
        )) : (n && c !== null && c.memoizedState !== null && uf(t), f._visibility & 2 ? nt(
          l,
          t,
          u,
          a
        ) : (f._visibility |= 2, qa(
          l,
          t,
          u,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        ))), e & 2048 && Ai(c, t);
        break;
      case 24:
        nt(
          l,
          t,
          u,
          a
        ), e & 2048 && _i(t.alternate, t);
        break;
      case 30:
        n && (e = t.alternate, e !== null && (At(e.child, !0), At(t.child, !0))), nt(
          l,
          t,
          u,
          a
        );
        break;
      default:
        nt(
          l,
          t,
          u,
          a
        );
    }
  }
  function qa(l, t, u, a, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var e = l, f = t, c = u, i = a, d = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          qa(
            e,
            f,
            c,
            i,
            n
          ), Cn(8, f);
          break;
        case 23:
          break;
        case 22:
          var g = f.stateNode;
          f.memoizedState !== null ? g._visibility & 2 ? qa(
            e,
            f,
            c,
            i,
            n
          ) : Bn(
            e,
            f
          ) : (g._visibility |= 2, qa(
            e,
            f,
            c,
            i,
            n
          )), n && d & 2048 && Ai(
            f.alternate,
            f
          );
          break;
        case 24:
          qa(
            e,
            f,
            c,
            i,
            n
          ), n && d & 2048 && _i(f.alternate, f);
          break;
        default:
          qa(
            e,
            f,
            c,
            i,
            n
          );
      }
      t = t.sibling;
    }
  }
  function Bn(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var u = l, a = t, n = a.flags;
        switch (a.tag) {
          case 22:
            Bn(u, a), n & 2048 && Ai(
              a.alternate,
              a
            );
            break;
          case 24:
            Bn(u, a), n & 2048 && _i(a.alternate, a);
            break;
          default:
            Bn(u, a);
        }
        t = t.sibling;
      }
  }
  var wu = 8192;
  function Fu(l, t, u) {
    if (l.subtreeFlags & wu)
      for (l = l.child; l !== null; )
        E1(
          l,
          t,
          u
        ), l = l.sibling;
  }
  function E1(l, t, u) {
    switch (l.tag) {
      case 26:
        Fu(
          l,
          t,
          u
        ), l.flags & wu && (l.memoizedState !== null ? Qo(
          u,
          mt,
          l.memoizedState,
          l.memoizedProps
        ) : (l = l.stateNode, (t & 335544128) === t && Uy(u, l)));
        break;
      case 5:
        Fu(
          l,
          t,
          u
        ), l.flags & wu && (l = l.stateNode, (t & 335544128) === t && Uy(u, l));
        break;
      case 3:
      case 4:
        var a = mt;
        mt = xn(l.stateNode.containerInfo), Fu(
          l,
          t,
          u
        ), mt = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = wu, wu = 16777216, Fu(
          l,
          t,
          u
        ), wu = a) : Fu(
          l,
          t,
          u
        ));
        break;
      case 30:
        if ((l.flags & wu) !== 0 && (a = l.memoizedProps.name, a != null && a !== "auto")) {
          var n = l.stateNode;
          n.paired = null, pl === null && (pl = /* @__PURE__ */ new Map()), pl.set(a, n);
        }
        Fu(
          l,
          t,
          u
        );
        break;
      default:
        Fu(
          l,
          t,
          u
        );
    }
  }
  function O1(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function Yn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          zl = a, A1(
            a,
            l
          );
        }
      O1(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        N1(l), l = l.sibling;
  }
  function N1(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Yn(l), l.flags & 2048 && ou(9, l, l.return);
        break;
      case 3:
        Yn(l);
        break;
      case 12:
        Yn(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, ff(l)) : Yn(l);
        break;
      default:
        Yn(l);
    }
  }
  function ff(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          zl = a, A1(
            a,
            l
          );
        }
      O1(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          ou(8, t, t.return), ff(t);
          break;
        case 22:
          u = t.stateNode, u._visibility & 2 && (u._visibility &= -3, ff(t));
          break;
        default:
          ff(t);
      }
      l = l.sibling;
    }
  }
  function A1(l, t) {
    for (; zl !== null; ) {
      var u = zl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          ou(8, u, t);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var a = u.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          sn(u.memoizedState.cache);
      }
      if (a = u.child, a !== null) a.return = u, zl = a;
      else
        l: for (u = l; zl !== null; ) {
          a = zl;
          var n = a.sibling, e = a.return;
          if (h1(a), a === u) {
            zl = null;
            break l;
          }
          if (n !== null) {
            n.return = e, zl = n;
            break l;
          }
          zl = e;
        }
    }
  }
  var Ch = {
    getCacheForType: function(l) {
      var t = El(vl), u = t.data.get(l);
      return u === void 0 && (u = l(), t.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return El(vl).controller.signal;
    }
  }, Rh = typeof WeakMap == "function" ? WeakMap : Map, V = 0, $ = null, q = null, Y = 0, K = 0, wl = null, Su = !1, Ba = !1, Di = !1, Jt = 0, fl = 0, su = 0, Wu = 0, cf = 0, Fl = 0, Ya = 0, Gn = null, Xl = null, Mi = !1, vf = 0, _1 = 0, mf = 1 / 0, yf = null, zu = null, nl = 0, dt = null, $u = null, Ut = 0, Ui = 0, Hi = null, D1 = null, Ga = null, Qa = null, Xa = null, Qn = 0, df = null;
  function Wl() {
    return (V & 2) !== 0 && Y !== 0 ? Y & -Y : D.T !== null ? Zi() : H0();
  }
  function M1() {
    if (Fl === 0)
      if ((Y & 536870912) === 0 || R) {
        var l = ee;
        ee <<= 1, (ee & 3932160) === 0 && (ee = 262144), Fl = l;
      } else Fl = 536870912;
    return l = Ol.current, l !== null && (l.flags |= 32), Fl;
  }
  function ja(l, t) {
    if (t != null) {
      var u = l.stateNode, a = u.ref;
      a === null && (a = u.ref = cy(
        Gt(l.memoizedProps, u)
      )), Qa === null && (Qa = []), Qa.push(t.bind(null, a));
    }
  }
  function jl(l, t, u) {
    (l === $ && (K === 2 || K === 9) || l.cancelPendingCommit !== null) && (Za(l, 0), Tu(
      l,
      Y,
      Fl,
      !1
    )), un(l, u), ((V & 2) === 0 || l !== $) && (l === $ && ((V & 2) === 0 && (Wu |= u), fl === 4 && Tu(
      l,
      Y,
      Fl,
      !1
    )), Ht(l));
  }
  function U1(l, t, u) {
    if ((V & 6) !== 0) throw Error(S(327));
    var a = !u && (t & 127) === 0 && (t & l.expiredLanes) === 0 || tn(l, t), n = a ? Yh(l, t) : Ri(l, t, !0), e = a;
    do {
      if (n === 0) {
        Ba && !a && Tu(l, t, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, e && !qh(u)) {
          n = Ri(l, t, !1), e = !1;
          continue;
        }
        if (n === 2) {
          if (e = t, l.errorRecoveryDisabledLanes & e)
            var f = 0;
          else
            f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            l: {
              var c = l;
              n = Gn;
              var i = c.current.memoizedState.isDehydrated;
              if (i && (Za(c, f).flags |= 256), f = Ri(
                c,
                f,
                !1
              ), f !== 2 && f !== 6) {
                if (Di && !i) {
                  c.errorRecoveryDisabledLanes |= e, Wu |= e, n = 4;
                  break l;
                }
                e = Xl, Xl = n, e !== null && (Xl === null ? Xl = e : Xl.push.apply(
                  Xl,
                  e
                ));
              }
              n = f;
            }
            if (e = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          Za(l, 0), Tu(l, t, 0, !0);
          break;
        }
        l: {
          switch (a = l, e = n, e) {
            case 0:
            case 1:
              throw Error(S(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t)
                break;
            case 6:
              Tu(
                a,
                t,
                Fl,
                !Su
              );
              break l;
            case 2:
              Xl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(S(329));
          }
          if ((t & 62914560) === t && (n = vf + 300 - Vl(), 10 < n)) {
            if (Tu(
              a,
              t,
              Fl,
              !Su
            ), ce(a, 0, !0) !== 0) break l;
            Ut = t, a.timeoutHandle = $i(
              H1.bind(
                null,
                a,
                u,
                Xl,
                yf,
                Mi,
                t,
                Fl,
                Wu,
                Ya,
                Su,
                e,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break l;
          }
          H1(
            a,
            u,
            Xl,
            yf,
            Mi,
            t,
            Fl,
            Wu,
            Ya,
            Su,
            e,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Ht(l);
  }
  function H1(l, t, u, a, n, e, f, c, i, d, g, z, m, o) {
    l.timeoutHandle = -1;
    var T = t.subtreeFlags, N = (e & 335544064) === e;
    if (z = null, (N || T & 8192 || (T & 16785408) === 16785408) && (z = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Tt
    }, pl = null, E1(
      t,
      e,
      z
    ), N && (T = z, N = l.containerInfo, N = (N.nodeType === 9 ? N : N.ownerDocument).__reactViewTransition, N != null && (T.count++, T.waitingForViewTransition = !0, T = rn.bind(T), N.finished.then(T, T))), T = (e & 62914560) === e ? vf - Vl() : (e & 4194048) === e ? _1 - Vl() : 0, T = Xo(
      z,
      T
    ), T !== null)) {
      Ut = e, l.cancelPendingCommit = T(
        X1.bind(
          null,
          l,
          t,
          e,
          u,
          a,
          n,
          f,
          c,
          i,
          d,
          g,
          z,
          null,
          m,
          o
        )
      ), Tu(l, e, f, !d);
      return;
    }
    X1(
      l,
      t,
      e,
      u,
      a,
      n,
      f,
      c,
      i,
      d,
      g,
      z
    );
  }
  function qh(l) {
    for (var t = l; ; ) {
      var u = t.tag;
      if ((u === 0 || u === 11 || u === 15) && t.flags & 16384 && (u = t.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var a = 0; a < u.length; a++) {
          var n = u[a], e = n.getSnapshot;
          n = n.value;
          try {
            if (!rl(e(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = t.child, t.subtreeFlags & 16384 && u !== null)
        u.return = t, t = u;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Tu(l, t, u, a) {
    t = A0(l, t), t &= ~cf, t &= ~Wu, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var n = t; 0 < n; ) {
      var e = 31 - Ll(n), f = 1 << e;
      a[e] = -1, n &= ~f;
    }
    u !== 0 && D0(l, u, t);
  }
  function hf() {
    return (V & 6) === 0 ? (Xn(0), !1) : !0;
  }
  function Ci() {
    if (q !== null) {
      if (K === 0)
        var l = q.return;
      else
        l = q, Zt = Xu = null, jc(l), _a = null, bn = 0, l = q;
      for (; l !== null; )
        Im(l.alternate, l), l = l.return;
      q = null;
    }
  }
  function Za(l, t) {
    var u = l.timeoutHandle;
    return u !== -1 && (l.timeoutHandle = -1, uo(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Ut = 0, Ci(), $ = l, q = u = Xt(l.current, null), Y = t, K = 0, wl = null, Su = !1, Ba = tn(l, t), Di = !1, Ya = Fl = cf = Wu = su = fl = 0, Xl = Gn = null, Mi = !1, Jt = A0(l, t), be(), u;
  }
  function C1(l, t) {
    U = null, D.H = Je, t === Aa || t === Re ? (t = Xv(), K = 3) : t === _c ? (t = Xv(), K = 4) : K = t === Pc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, wl = t, q === null && (fl = 1, pe(
      l,
      lt(t, l.current)
    ));
  }
  function R1() {
    var l = Ol.current;
    return l === null ? !0 : (Y & 4194048) === Y ? Ml === null : (Y & 62914560) === Y || (Y & 536870912) !== 0 ? l === Ml : !1;
  }
  function q1() {
    var l = D.H;
    return D.H = Je, l === null ? Je : l;
  }
  function B1() {
    var l = D.A;
    return D.A = Ch, l;
  }
  function of() {
    fl = 4, Su || (Y & 4194048) !== Y && Ol.current !== null || (Ba = !0), (su & 134217727) === 0 && (Wu & 134217727) === 0 || $ === null || Tu(
      $,
      Y,
      Fl,
      !1
    );
  }
  function Ri(l, t, u) {
    var a = V;
    V |= 2;
    var n = q1(), e = B1();
    ($ !== l || Y !== t) && (yf = null, Za(l, t)), t = !1;
    var f = fl;
    l: do
      try {
        if (K !== 0 && q !== null) {
          var c = q, i = wl;
          switch (K) {
            case 8:
              Ci(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              Ol.current === null && (t = !0);
              var d = K;
              if (K = 0, wl = null, Va(l, c, i, d), u && Ba) {
                f = 0;
                break l;
              }
              break;
            default:
              d = K, K = 0, wl = null, Va(l, c, i, d);
          }
        }
        Bh(), f = fl;
        break;
      } catch (g) {
        C1(l, g);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Zt = Xu = null, V = a, D.H = n, D.A = e, q === null && ($ = null, Y = 0, be()), f;
  }
  function Bh() {
    for (; q !== null; ) Y1(q);
  }
  function Yh(l, t) {
    var u = V;
    V |= 2;
    var a = q1(), n = B1();
    $ !== l || Y !== t ? (yf = null, mf = Vl() + 500, Za(l, t)) : Ba = tn(
      l,
      t
    );
    l: do
      try {
        if (K !== 0 && q !== null) {
          t = q;
          var e = wl;
          t: switch (K) {
            case 1:
              K = 0, wl = null, Va(l, t, e, 1);
              break;
            case 2:
            case 9:
              if (Gv(e)) {
                K = 0, wl = null, G1(t);
                break;
              }
              t = function() {
                K !== 2 && K !== 9 || $ !== l || (K = 7), Ht(l);
              }, e.then(t, t);
              break l;
            case 3:
              K = 7;
              break l;
            case 4:
              K = 5;
              break l;
            case 7:
              Gv(e) ? (K = 0, wl = null, G1(t)) : (K = 0, wl = null, Va(l, t, e, 7));
              break;
            case 5:
              var f = null;
              switch (q.tag) {
                case 26:
                  f = q.memoizedState;
                case 5:
                case 27:
                  var c = q;
                  if (f ? Dy(f) : c.stateNode.complete) {
                    K = 0, wl = null;
                    var i = c.sibling;
                    if (i !== null) q = i;
                    else {
                      var d = c.return;
                      d !== null ? (q = d, gf(d)) : q = null;
                    }
                    break t;
                  }
              }
              K = 0, wl = null, Va(l, t, e, 5);
              break;
            case 6:
              K = 0, wl = null, Va(l, t, e, 6);
              break;
            case 8:
              Ci(), fl = 6;
              break l;
            default:
              throw Error(S(462));
          }
        }
        Gh();
        break;
      } catch (g) {
        C1(l, g);
      }
    while (!0);
    return Zt = Xu = null, D.H = a, D.A = n, V = u, q !== null ? 0 : ($ = null, Y = 0, be(), fl);
  }
  function Gh() {
    for (; q !== null && !Iy(); )
      Y1(q);
  }
  function Y1(l) {
    var t = $m(l.alternate, l, Jt);
    l.memoizedProps = l.pendingProps, t === null ? gf(l) : q = t;
  }
  function G1(l) {
    var t = l, u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Km(
          u,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Y
        );
        break;
      case 11:
        t = Km(
          u,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Y
        );
        break;
      case 5:
        jc(t);
        var a = t;
        a === Sl && (R ? (De(a), a.tag === 5 && a.stateNode != null && (I = a.stateNode)) : (De(a), R = !0));
      default:
        Im(u, t), t = q = Av(t, Jt), t = $m(u, t, Jt);
    }
    l.memoizedProps = l.pendingProps, t === null ? gf(l) : q = t;
  }
  function Va(l, t, u, a) {
    Zt = Xu = null, jc(t), _a = null, bn = 0;
    var n = t.return;
    try {
      if (Oh(
        l,
        n,
        t,
        u,
        Y
      )) {
        fl = 1, pe(
          l,
          lt(u, l.current)
        ), q = null;
        return;
      }
    } catch (e) {
      if (n !== null) throw q = n, e;
      fl = 1, pe(
        l,
        lt(u, l.current)
      ), q = null;
      return;
    }
    t.flags & 32768 ? (R || a === 1 ? l = !0 : Ba || (Y & 536870912) !== 0 ? l = !1 : (Su = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Ol.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Q1(t, l)) : gf(t);
  }
  function gf(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        Q1(
          t,
          Su
        );
        return;
      }
      l = t.return;
      var u = Dh(
        t.alternate,
        t,
        Jt
      );
      if (u !== null) {
        q = u;
        return;
      }
      if (t = t.sibling, t !== null) {
        q = t;
        return;
      }
      q = t = l;
    } while (t !== null);
    fl === 0 && (fl = 5);
  }
  function Q1(l, t) {
    do {
      var u = Mh(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, q = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !t && (l = l.sibling, l !== null)) {
        q = l;
        return;
      }
      q = l = u;
    } while (l !== null);
    fl = 6, q = null;
  }
  function X1(l, t, u, a, n, e, f, c, i, d, g, z) {
    l.cancelPendingCommit = null;
    do
      Sf();
    while (nl !== 0);
    if ((V & 6) !== 0) throw Error(S(327));
    if (t !== null) {
      if (t === l.current) throw Error(S(177));
      l === $ && (q = $ = null, Y = 0), $u = t, dt = l, Ut = u, Hi = n, D1 = a, Qh(
        l,
        t,
        u,
        f,
        c,
        i,
        z
      );
    }
  }
  function Qh(l, t, u, a, n, e, f) {
    var c = t.lanes | t.childLanes;
    if (Ui = c, c |= dc, id(
      l,
      u,
      c,
      a,
      n,
      e
    ), Qa = null, (u & 335544064) === u ? (Xa = mh(l), a = 10262) : (Xa = null, a = 10256), (t.subtreeFlags & a) !== 0 || (t.flags & a) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Lh(ae, function() {
      return Gi(), null;
    })) : (l.callbackNode = null, l.callbackPriority = 0), lf = !1, a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
      a = D.T, D.T = null, n = Z.p, Z.p = 2, e = V, V |= 4;
      try {
        Uh(l, t, u);
      } finally {
        V = e, Z.p = n, D.T = a;
      }
    }
    nl = 1, lf ? Ga = io(
      f,
      l.containerInfo,
      Xa,
      qi,
      Bi,
      jh,
      Yi,
      Gi,
      Xh
    ) : (qi(), Bi(), Yi());
  }
  function Xh(l) {
    if (nl !== 0) {
      var t = dt.onRecoverableError;
      t(l, { componentStack: null });
    }
  }
  function jh() {
    nl === 3 && (nl = 0, T1($u, dt), nl = 4);
  }
  function qi() {
    if (nl === 1) {
      nl = 0;
      var l = dt, t = $u, u = Ut, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = D.T, D.T = null;
        var n = Z.p;
        Z.p = 2;
        var e = V;
        V |= 4;
        try {
          qn = af = !1, s1(t, l, u), u = wi;
          var f = ov(l.containerInfo), c = u.focusedElem, i = u.selectionRange;
          if (f !== c && c && c.ownerDocument && hv(
            c.ownerDocument.documentElement,
            c
          )) {
            if (i !== null && cc(c)) {
              var d = i.start, g = i.end;
              if (g === void 0 && (g = d), "selectionStart" in c)
                c.selectionStart = d, c.selectionEnd = Math.min(
                  g,
                  c.value.length
                );
              else {
                var z = c.ownerDocument || document, m = z && z.defaultView || window;
                if (m.getSelection) {
                  var o = m.getSelection(), T = c.textContent.length, N = Math.min(i.start, T), H = i.end === void 0 ? N : Math.min(i.end, T);
                  !o.extend && N > H && (f = H, H = N, N = f);
                  var y = dv(
                    c,
                    N
                  ), v = dv(
                    c,
                    H
                  );
                  if (y && v && (o.rangeCount !== 1 || o.anchorNode !== y.node || o.anchorOffset !== y.offset || o.focusNode !== v.node || o.focusOffset !== v.offset)) {
                    var h = z.createRange();
                    h.setStart(y.node, y.offset), o.removeAllRanges(), N > H ? (o.addRange(h), o.extend(v.node, v.offset)) : (h.setEnd(v.node, v.offset), o.addRange(h));
                  }
                }
              }
            }
            for (z = [], o = c; o = o.parentNode; )
              o.nodeType === 1 && z.push({
                element: o,
                left: o.scrollLeft,
                top: o.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < z.length; c++) {
              var s = z[c];
              s.element.scrollLeft = s.left, s.element.scrollTop = s.top;
            }
          }
          Fa = !!pi, wi = pi = null;
        } finally {
          V = e, Z.p = n, D.T = a;
        }
      }
      l.current = t, nl = 2;
    }
  }
  function Bi() {
    if (nl === 2) {
      nl = 0;
      var l = dt, t = $u, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = D.T, D.T = null;
        var a = Z.p;
        Z.p = 2;
        var n = V;
        V |= 4;
        try {
          y1(l, t.alternate, t);
        } finally {
          V = n, Z.p = a, D.T = u;
        }
      }
      nl = 3;
    }
  }
  function Yi() {
    if (nl === 4 || nl === 3) {
      nl = 0;
      var l = Ga;
      Ga = null, Py();
      var t = dt, u = $u, a = Ut, n = D1, e = (a & 335544064) === a ? 10262 : 10256;
      if ((u.subtreeFlags & e) !== 0 || (u.flags & e) !== 0 ? nl = 5 : (nl = 0, $u = dt = null, j1(t, t.pendingLanes)), e = t.pendingLanes, e === 0 && (zu = null), Kf(a), u = u.stateNode, xl && typeof xl.onCommitFiberRoot == "function")
        try {
          xl.onCommitFiberRoot(
            ln,
            u,
            void 0,
            (u.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        u = D.T, e = Z.p, Z.p = 2, D.T = null;
        try {
          for (var f = t.onRecoverableError, c = 0; c < n.length; c++) {
            var i = n[c];
            f(i.value, {
              componentStack: i.stack
            });
          }
        } finally {
          D.T = u, Z.p = e;
        }
      }
      if (n = Qa, f = Xa, Xa = null, n !== null && (Qa = null, f === null && (f = []), l !== null))
        for (i = 0; i < n.length; i++)
          u = (0, n[i])(
            f
          ), u !== void 0 && l.finished.finally(u);
      (Ut & 3) !== 0 && Sf(), Ht(t), e = t.pendingLanes, (a & 261930) !== 0 && (e & 42) !== 0 ? t === df ? Qn++ : (Qn = 0, df = t) : (Qn = 0, df = null), Xn(0);
    }
  }
  function j1(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, sn(t)));
  }
  function Sf() {
    return Ga !== null && (Ga.skipTransition(), Ga = null), qi(), Bi(), Yi(), Gi();
  }
  function Gi() {
    if (nl !== 5) return !1;
    var l = dt, t = Ui;
    Ui = 0;
    var u = Kf(Ut), a = D.T, n = Z.p;
    try {
      Z.p = 32 > u ? 32 : u, D.T = null, u = Hi, Hi = null;
      var e = dt, f = Ut;
      if (nl = 0, $u = dt = null, Ut = 0, (V & 6) !== 0) throw Error(S(331));
      var c = V;
      if (V |= 4, N1(e.current), b1(
        e,
        e.current,
        f,
        u
      ), V = c, Xn(0, !1), xl && typeof xl.onPostCommitFiberRoot == "function")
        try {
          xl.onPostCommitFiberRoot(ln, e);
        } catch {
        }
      return !0;
    } finally {
      Z.p = n, D.T = a, j1(l, t);
    }
  }
  function Z1(l, t, u) {
    t = lt(u, t), t = Ic(l.stateNode, t, 2), l = mu(l, t, 2), l !== null && (un(l, 2), Ht(l));
  }
  function r(l, t, u) {
    if (l.tag === 3)
      Z1(l, l, u);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Z1(
            t,
            l,
            u
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (zu === null || !zu.has(a))) {
            l = lt(u, l), u = Gm(2), a = mu(t, u, 2), a !== null && (Qm(
              u,
              a,
              t,
              l
            ), un(a, 2), Ht(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Qi(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Rh();
      var n = /* @__PURE__ */ new Set();
      a.set(t, n);
    } else
      n = a.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(t, n));
    n.has(u) || (Di = !0, n.add(u), l = Zh.bind(null, l, t, u), t.then(l, l));
  }
  function Zh(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, $ === l && (Y & u) === u && ((fl === 4 || fl === 3 && (Y & 62914560) === Y && 300 > Vl() - vf) && (V & 2) === 0 ? Za(l, 0) : cf |= u, Ya === Y && (Ya = 0)), Ht(l);
  }
  function V1(l, t) {
    t === 0 && (t = _0()), l = Yu(l, t), l !== null && (un(l, t), Ht(l));
  }
  function Vh(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), V1(l, u);
  }
  function xh(l, t) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode, n = l.memoizedState;
        n !== null && (u = n.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(S(314));
    }
    a !== null && a.delete(t), V1(l, u);
  }
  function Lh(l, t) {
    return Zf(l, t);
  }
  var xa = null, La = null, Xi = !1, sf = !1, ji = !1, bu = 0;
  function Ht(l) {
    l !== La && l.next === null && (La === null ? xa = La = l : La = La.next = l), sf = !0, Xi || (Xi = !0, rh());
  }
  function Xn(l, t) {
    if (!ji && sf) {
      ji = !0;
      do
        for (var u = !1, a = xa; a !== null; ) {
          if (l !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var e = 0;
            else {
              var f = a.suspendedLanes, c = a.pingedLanes;
              e = (1 << 31 - Ll(42 | l) + 1) - 1, e &= n & ~(f & ~c), e = e & 201326741 ? e & 201326741 | 1 : e ? e | 2 : 0;
            }
            e !== 0 && (u = !0, r1(a, e));
          } else
            e = Y, e = ce(
              a,
              a === $ ? e : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (e & 3) === 0 || tn(a, e) || (u = !0, r1(a, e));
          a = a.next;
        }
      while (u);
      ji = !1;
    }
  }
  function Kh() {
    x1();
  }
  function x1() {
    sf = Xi = !1;
    var l = 0;
    bu !== 0 && to() && (l = bu);
    for (var t = Vl(), u = null, a = xa; a !== null; ) {
      var n = a.next, e = L1(a, t);
      e === 0 ? (a.next = null, u === null ? xa = n : u.next = n, n === null && (La = u)) : (u = a, (l !== 0 || (e & 3) !== 0) && (sf = !0)), a = n;
    }
    nl !== 0 && nl !== 5 || Xn(l), bu !== 0 && (bu = 0);
  }
  function L1(l, t) {
    for (var u = l.suspendedLanes, a = l.pingedLanes, n = l.expirationTimes, e = l.pendingLanes & -62914561; 0 < e; ) {
      var f = 31 - Ll(e), c = 1 << f, i = n[f];
      i === -1 ? ((c & u) === 0 || (c & a) !== 0) && (n[f] = cd(c, t)) : i <= t && (l.expiredLanes |= c), e &= ~c;
    }
    if (t = $, u = Y, u = ce(
      l,
      l === t ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, u === 0 || l === t && (K === 2 || K === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && Vf(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || tn(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (a !== null && Vf(a), Kf(u)) {
        case 2:
        case 8:
          u = O0;
          break;
        case 32:
          u = ae;
          break;
        case 268435456:
          u = N0;
          break;
        default:
          u = ae;
      }
      return a = K1.bind(null, l), u = Zf(u, a), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return a !== null && a !== null && Vf(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function K1(l, t) {
    if (nl !== 0 && nl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (Sf() && l.callbackNode !== u)
      return null;
    var a = Y;
    return a = ce(
      l,
      l === $ ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (U1(l, a, t), L1(l, Vl()), l.callbackNode != null && l.callbackNode === u ? K1.bind(null, l) : null);
  }
  function r1(l, t) {
    if (Sf()) return null;
    U1(l, t, !0);
  }
  function rh() {
    ao(function() {
      (V & 6) !== 0 ? Zf(
        E0,
        Kh
      ) : x1();
    });
  }
  function Zi() {
    if (bu === 0) {
      var l = Vu;
      l === 0 && (l = ne, ne <<= 1, (ne & 261888) === 0 && (ne = 256)), bu = l;
    }
    return bu;
  }
  function J1(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : de(l);
  }
  function Jh(l, t, u, a, n) {
    if (t === "submit" && u && u.stateNode === n) {
      var e = J1(
        (n[Bl] || null).action
      ), f = a.submitter;
      f && (t = (t = f[Bl] || null) ? J1(t.formAction) : f.getAttribute("formAction"), t !== null && (e = t, f = null));
      var c = new Se(
        "action",
        "action",
        null,
        a,
        n
      );
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (bu !== 0) {
                  var i = new FormData(n, f);
                  wc(
                    u,
                    {
                      pending: !0,
                      data: i,
                      method: n.method,
                      action: e
                    },
                    null,
                    i
                  );
                }
              } else
                typeof e == "function" && (c.preventDefault(), i = new FormData(n, f), wc(
                  u,
                  {
                    pending: !0,
                    data: i,
                    method: n.method,
                    action: e
                  },
                  e,
                  i
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var Vi = 0; Vi < yc.length; Vi++) {
    var xi = yc[Vi], ph = xi.toLowerCase(), wh = xi[0].toUpperCase() + xi.slice(1);
    it(
      ph,
      "on" + wh
    );
  }
  it(sv, "onAnimationEnd"), it(zv, "onAnimationIteration"), it(Tv, "onAnimationStart"), it("dblclick", "onDoubleClick"), it("focusin", "onFocus"), it("focusout", "onBlur"), it(uh, "onTransitionRun"), it(ah, "onTransitionStart"), it(nh, "onTransitionCancel"), it(bv, "onTransitionEnd"), ma("onMouseEnter", ["mouseout", "mouseover"]), ma("onMouseLeave", ["mouseout", "mouseover"]), ma("onPointerEnter", ["pointerout", "pointerover"]), ma("onPointerLeave", ["pointerout", "pointerover"]), Ru(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ru(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ru("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ru(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ru(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ru(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var jn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Fh = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jn)
  );
  function p1(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var a = l[u], n = a.event;
      a = a.listeners;
      l: {
        var e = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var c = a[f], i = c.instance, d = c.currentTarget;
            if (c = c.listener, i !== e && n.isPropagationStopped())
              break l;
            e = c, n.currentTarget = d;
            try {
              e(n);
            } catch (g) {
              Te(g);
            }
            n.currentTarget = null, e = i;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (c = a[f], i = c.instance, d = c.currentTarget, c = c.listener, i !== e && n.isPropagationStopped())
              break l;
            e = c, n.currentTarget = d;
            try {
              e(n);
            } catch (g) {
              Te(g);
            }
            n.currentTarget = null, e = i;
          }
      }
    }
  }
  function B(l, t) {
    var u = t[R0];
    u === void 0 && (u = t[R0] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    u.has(a) || (w1(t, l, 2, !1), u.add(a));
  }
  function Li(l, t, u) {
    var a = 0;
    t && (a |= 4), w1(
      u,
      l,
      a,
      t
    );
  }
  var zf = "_reactListening" + Math.random().toString(36).slice(2);
  function Ki(l) {
    if (!l[zf]) {
      l[zf] = !0, Y0.forEach(function(u) {
        u !== "selectionchange" && (Fh.has(u) || Li(u, !1, l), Li(u, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[zf] || (t[zf] = !0, Li("selectionchange", !1, t));
    }
  }
  function w1(l, t, u, a) {
    switch (Qy(t)) {
      case 2:
        var n = xo;
        break;
      case 8:
        n = Lo;
        break;
      default:
        n = v0;
    }
    u = n.bind(
      null,
      t,
      u,
      l
    ), n = void 0, !kf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), a ? n !== void 0 ? l.addEventListener(t, u, {
      capture: !0,
      passive: n
    }) : l.addEventListener(t, u, !0) : n !== void 0 ? l.addEventListener(t, u, {
      passive: n
    }) : l.addEventListener(t, u, !1);
  }
  function ri(l, t, u, a, n) {
    var e = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var c = a.stateNode.containerInfo;
          if (c === n) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var i = f.tag;
              if ((i === 3 || i === 4) && f.stateNode.containerInfo === n)
                return;
              f = f.return;
            }
          for (; c !== null; ) {
            if (f = Cu(c), f === null) return;
            if (i = f.tag, i === 5 || i === 6 || i === 26 || i === 27) {
              a = e = f;
              continue l;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    w0(function() {
      var d = e, g = Wf(u), z = [];
      l: {
        var m = Ev.get(l);
        if (m !== void 0) {
          var o = Se, T = l;
          switch (l) {
            case "keypress":
              if (oe(u) === 0) break l;
            case "keydown":
            case "keyup":
              o = qd;
              break;
            case "focusin":
              T = "focus", o = tc;
              break;
            case "focusout":
              T = "blur", o = tc;
              break;
            case "beforeblur":
            case "afterblur":
              o = tc;
              break;
            case "click":
              if (u.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              o = $0;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              o = bd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              o = Xd;
              break;
            case sv:
            case zv:
            case Tv:
              o = Nd;
              break;
            case bv:
              o = Zd;
              break;
            case "scroll":
            case "scrollend":
              o = zd;
              break;
            case "wheel":
              o = xd;
              break;
            case "copy":
            case "cut":
            case "paste":
              o = _d;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              o = I0;
              break;
            case "submit":
              o = Gd;
              break;
            case "toggle":
            case "beforetoggle":
              o = Kd;
          }
          var N = (t & 4) !== 0, H = !N && (l === "scroll" || l === "scrollend"), y = N ? m !== null ? m + "Capture" : null : m;
          N = [];
          for (var v = d, h; v !== null; ) {
            var s = v;
            if (h = s.stateNode, s = s.tag, s !== 5 && s !== 26 && s !== 27 || h === null || y === null || (s = en(v, y), s != null && N.push(
              Zn(v, s, h)
            )), H) break;
            v = v.return;
          }
          0 < N.length && (m = new o(
            m,
            T,
            null,
            u,
            g
          ), z.push({ event: m, listeners: N }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (o = l === "mouseover" || l === "pointerover", m = l === "mouseout" || l === "pointerout", o && u !== Ff && (T = u.relatedTarget || u.fromElement) && (Cu(T) || T[ca]))
            break l;
          (m || o) && (T = g.window === g ? g : (o = g.ownerDocument) ? o.defaultView || o.parentWindow : window, m ? (o = u.relatedTarget || u.toElement, m = d, o = o ? Cu(o) : null, o !== null && (H = ol(o), N = o.tag, o !== H || N !== 5 && N !== 27 && N !== 6) && (o = null)) : (m = null, o = d), m !== o && (N = $0, s = "onMouseLeave", y = "onMouseEnter", v = "mouse", (l === "pointerout" || l === "pointerover") && (N = I0, s = "onPointerLeave", y = "onPointerEnter", v = "pointer"), H = m == null ? T : nn(m), h = o == null ? T : nn(o), T = new N(
            s,
            v + "leave",
            m,
            u,
            g
          ), T.target = H, T.relatedTarget = h, s = null, Cu(g) === d && (N = new N(
            y,
            v + "enter",
            o,
            u,
            g
          ), N.target = h, N.relatedTarget = H, s = N), H = s, N = m && o ? gt(
            m,
            o,
            Wh
          ) : null, m !== null && F1(
            z,
            T,
            m,
            N,
            !1
          ), o !== null && H !== null && F1(
            z,
            H,
            o,
            N,
            !0
          )));
        }
        l: {
          if (m = d ? nn(d) : window, o = m.nodeName && m.nodeName.toLowerCase(), o === "select" || o === "input" && m.type === "file")
            var O = fv;
          else if (nv(m))
            if (cv)
              O = Pd;
            else {
              O = kd;
              var G = $d;
            }
          else
            o = m.nodeName, !o || o.toLowerCase() !== "input" || m.type !== "checkbox" && m.type !== "radio" ? d && wf(d.elementType) && (O = fv) : O = Id;
          if (O && (O = O(l, d))) {
            ev(
              z,
              O,
              u,
              g
            );
            break l;
          }
          G && G(l, m, d);
        }
        switch (G = d ? nn(d) : window, l) {
          case "focusin":
            (nv(G) || G.contentEditable === "true") && (Sa = G, ic = d, on = null);
            break;
          case "focusout":
            on = ic = Sa = null;
            break;
          case "mousedown":
            vc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            vc = !1, gv(z, u, g);
            break;
          case "selectionchange":
            if (th) break;
          case "keydown":
          case "keyup":
            gv(z, u, g);
        }
        var A;
        if (ac)
          l: {
            switch (l) {
              case "compositionstart":
                var _ = "onCompositionStart";
                break l;
              case "compositionend":
                _ = "onCompositionEnd";
                break l;
              case "compositionupdate":
                _ = "onCompositionUpdate";
                break l;
            }
            _ = void 0;
          }
        else
          ga ? uv(l, u) && (_ = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (_ = "onCompositionStart");
        _ && (P0 && u.locale !== "ko" && (ga || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && ga && (A = F0()) : (tu = g, If = "value" in tu ? tu.value : tu.textContent, ga = !0)), G = Tf(d, _), 0 < G.length && (_ = new k0(
          _,
          l,
          null,
          u,
          g
        ), z.push({ event: _, listeners: G }), A ? _.data = A : (A = av(u), A !== null && (_.data = A)))), (A = Jd ? pd(l, u) : wd(l, u)) && (_ = Tf(d, "onBeforeInput"), 0 < _.length && (G = new k0(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          g
        ), z.push({
          event: G,
          listeners: _
        }), G.data = A)), Jh(
          z,
          l,
          d,
          u,
          g
        );
      }
      p1(z, t);
    });
  }
  function Zn(l, t, u) {
    return {
      instance: l,
      listener: t,
      currentTarget: u
    };
  }
  function Tf(l, t) {
    for (var u = t + "Capture", a = []; l !== null; ) {
      var n = l, e = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || e === null || (n = en(l, u), n != null && a.unshift(
        Zn(l, n, e)
      ), n = en(l, t), n != null && a.push(
        Zn(l, n, e)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function Wh(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function F1(l, t, u, a, n) {
    for (var e = t._reactName, f = []; u !== null && u !== a; ) {
      var c = u, i = c.alternate, d = c.stateNode;
      if (c = c.tag, i !== null && i === a) break;
      c !== 5 && c !== 26 && c !== 27 || d === null || (i = d, n ? (d = en(u, e), d != null && f.unshift(
        Zn(u, d, i)
      )) : n || (d = en(u, e), d != null && f.push(
        Zn(u, d, i)
      ))), u = u.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var $h = /\r\n?/g, kh = /\u0000|\uFFFD/g;
  function W1(l) {
    return (typeof l == "string" ? l : "" + l).replace($h, `
`).replace(kh, "");
  }
  function $1(l, t) {
    return t = W1(t), W1(l) === t;
  }
  function J(l, t, u, a, n, e) {
    switch (u) {
      case "children":
        if (typeof a == "string")
          t === "body" || t === "textarea" && a === "" || da(l, a);
        else if (typeof a == "number" || typeof a == "bigint")
          t !== "body" && da(l, "" + a);
        else return;
        break;
      case "className":
        ye(l, "class", a);
        break;
      case "tabIndex":
        ye(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ye(l, u, a);
        break;
      case "style":
        J0(l, a, e);
        return;
      case "data":
        if (t !== "object") {
          ye(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = de(a), l.setAttribute(u, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof e == "function" && (u === "formAction" ? (t !== "input" && J(l, t, "name", n.name, n, null), J(
            l,
            t,
            "formEncType",
            n.formEncType,
            n,
            null
          ), J(
            l,
            t,
            "formMethod",
            n.formMethod,
            n,
            null
          ), J(
            l,
            t,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (J(l, t, "encType", n.encType, n, null), J(l, t, "method", n.method, n, null), J(l, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = de(a), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = Tt);
        return;
      case "onScroll":
        a != null && B("scroll", l);
        return;
      case "onScrollEnd":
        a != null && B("scrollend", l);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(S(61));
          if (u = a.__html, u != null) {
            if (n.children != null) throw Error(S(60));
            (e != null ? e.__html : void 0) !== u && (l.innerHTML = u);
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = de(a), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        a === !0 ? l.setAttribute(u, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(u) : l.setAttribute(u, a);
        break;
      case "popover":
        B("beforetoggle", l), B("toggle", l), me(l, "popover", a);
        break;
      case "xlinkActuate":
        Bt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Bt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Bt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Bt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Bt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Bt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Bt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Bt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Bt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        me(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N")
          u = Sd.get(u) || u, me(l, u, a);
        else return;
    }
    j = !0;
  }
  function Ji(l, t, u, a, n, e) {
    switch (u) {
      case "style":
        J0(l, a, e);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(S(61));
          if (u = a.__html, u != null) {
            if (n.children != null) throw Error(S(60));
            (e != null ? e.__html : void 0) !== u && (l.innerHTML = u);
          }
        }
        break;
      case "children":
        if (typeof a == "string") da(l, a);
        else if (typeof a == "number" || typeof a == "bigint")
          da(l, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && B("scroll", l);
        return;
      case "onScrollEnd":
        a != null && B("scrollend", l);
        return;
      case "onClick":
        a != null && (l.onclick = Tt);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!G0.hasOwnProperty(u))
          l: {
            if (u[0] === "o" && u[1] === "n" && (n = u.endsWith("Capture"), e = u.slice(2, n ? u.length - 7 : void 0), t = l[Bl] || null, t = t != null ? t[u] : null, typeof t == "function" && l.removeEventListener(e, t, n), typeof a == "function")) {
              typeof t != "function" && t !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(e, a, n);
              break l;
            }
            j = !0, u in l ? l[u] = a : a === !0 ? l.setAttribute(u, "") : me(l, u, a);
          }
        return;
    }
    j = !0;
  }
  function _l(l, t, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        B("error", l), B("load", l);
        var a = !1, n = !1, e;
        for (e in u)
          if (u.hasOwnProperty(e)) {
            var f = u[e];
            if (f != null)
              switch (e) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(S(137, t));
                default:
                  J(l, t, e, f, u, null);
              }
          }
        n && J(l, t, "srcSet", u.srcSet, u, null), a && J(l, t, "src", u.src, u, null);
        return;
      case "input":
        B("invalid", l);
        var c = e = f = n = null, i = null, d = null;
        for (a in u)
          if (u.hasOwnProperty(a)) {
            var g = u[a];
            if (g != null)
              switch (a) {
                case "name":
                  n = g;
                  break;
                case "type":
                  f = g;
                  break;
                case "checked":
                  i = g;
                  break;
                case "defaultChecked":
                  d = g;
                  break;
                case "value":
                  e = g;
                  break;
                case "defaultValue":
                  c = g;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null)
                    throw Error(S(137, t));
                  break;
                default:
                  J(l, t, a, g, u, null);
              }
          }
        x0(
          l,
          e,
          c,
          i,
          d,
          f,
          n,
          !1
        );
        return;
      case "select":
        B("invalid", l), a = f = e = null;
        for (n in u)
          if (u.hasOwnProperty(n) && (c = u[n], c != null))
            switch (n) {
              case "value":
                e = c;
                break;
              case "defaultValue":
                f = c;
                break;
              case "multiple":
                a = c;
              default:
                J(l, t, n, c, u, null);
            }
        t = e, u = f, l.multiple = !!a, t != null ? ya(l, !!a, t, !1) : u != null && ya(l, !!a, u, !0);
        return;
      case "textarea":
        B("invalid", l), e = n = a = null;
        for (f in u)
          if (u.hasOwnProperty(f) && (c = u[f], c != null))
            switch (f) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                n = c;
                break;
              case "children":
                e = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(S(91));
                break;
              default:
                J(l, t, f, c, u, null);
            }
        K0(l, a, n, e);
        return;
      case "option":
        for (i in u)
          if (u.hasOwnProperty(i) && (a = u[i], a != null))
            switch (i) {
              case "selected":
                l.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                J(l, t, i, a, u, null);
            }
        return;
      case "dialog":
        B("beforetoggle", l), B("toggle", l), B("cancel", l), B("close", l);
        break;
      case "iframe":
      case "object":
        B("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < jn.length; a++)
          B(jn[a], l);
        break;
      case "image":
        B("error", l), B("load", l);
        break;
      case "details":
        B("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        B("error", l), B("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (d in u)
          if (u.hasOwnProperty(d) && (a = u[d], a != null))
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(S(137, t));
              default:
                J(l, t, d, a, u, null);
            }
        return;
      default:
        if (wf(t)) {
          for (g in u)
            u.hasOwnProperty(g) && (a = u[g], a !== void 0 && Ji(
              l,
              t,
              g,
              a,
              u,
              void 0
            ));
          return;
        }
    }
    for (c in u)
      u.hasOwnProperty(c) && (a = u[c], a != null && J(l, t, c, a, u, null));
  }
  var Ih = {};
  function Ph(l, t, u, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null, e = null, f = null, c = null, i = null, d = null, g = null;
        for (o in u) {
          var z = u[o];
          if (u.hasOwnProperty(o) && z != null)
            switch (o) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = z;
              default:
                a.hasOwnProperty(o) || J(l, t, o, null, a, z);
            }
        }
        for (var m in a) {
          var o = a[m];
          if (z = u[m], a.hasOwnProperty(m) && (o != null || z != null))
            switch (m) {
              case "type":
                o !== z && (j = !0), e = o;
                break;
              case "name":
                o !== z && (j = !0), n = o;
                break;
              case "checked":
                o !== z && (j = !0), d = o;
                break;
              case "defaultChecked":
                o !== z && (j = !0), g = o;
                break;
              case "value":
                o !== z && (j = !0), f = o;
                break;
              case "defaultValue":
                o !== z && (j = !0), c = o;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (o != null)
                  throw Error(S(137, t));
                break;
              default:
                o !== z && J(
                  l,
                  t,
                  m,
                  o,
                  a,
                  z
                );
            }
        }
        Jf(
          l,
          f,
          c,
          i,
          d,
          g,
          e,
          n
        );
        return;
      case "select":
        o = f = c = m = null;
        for (e in u)
          if (i = u[e], u.hasOwnProperty(e) && i != null)
            switch (e) {
              case "value":
                break;
              case "multiple":
                o = i;
              default:
                a.hasOwnProperty(e) || J(
                  l,
                  t,
                  e,
                  null,
                  a,
                  i
                );
            }
        for (n in a)
          if (e = a[n], i = u[n], a.hasOwnProperty(n) && (e != null || i != null))
            switch (n) {
              case "value":
                e !== i && (j = !0), m = e;
                break;
              case "defaultValue":
                e !== i && (j = !0), c = e;
                break;
              case "multiple":
                e !== i && (j = !0), f = e;
              default:
                e !== i && J(
                  l,
                  t,
                  n,
                  e,
                  a,
                  i
                );
            }
        t = c, u = f, a = o, m != null ? ya(l, !!u, m, !1) : !!a != !!u && (t != null ? ya(l, !!u, t, !0) : ya(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        o = m = null;
        for (c in u)
          if (n = u[c], u.hasOwnProperty(c) && n != null && !a.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                J(l, t, c, null, a, n);
            }
        for (f in a)
          if (n = a[f], e = u[f], a.hasOwnProperty(f) && (n != null || e != null))
            switch (f) {
              case "value":
                n !== e && (j = !0), m = n;
                break;
              case "defaultValue":
                n !== e && (j = !0), o = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(S(91));
                break;
              default:
                n !== e && J(l, t, f, n, a, e);
            }
        L0(l, m, o);
        return;
      case "option":
        for (var T in u)
          if (m = u[T], u.hasOwnProperty(T) && m != null && !a.hasOwnProperty(T))
            switch (T) {
              case "selected":
                l.selected = !1;
                break;
              default:
                J(
                  l,
                  t,
                  T,
                  null,
                  a,
                  m
                );
            }
        for (i in a)
          if (m = a[i], o = u[i], a.hasOwnProperty(i) && m !== o && (m != null || o != null))
            switch (i) {
              case "selected":
                m !== o && (j = !0), l.selected = m && typeof m != "function" && typeof m != "symbol";
                break;
              default:
                J(
                  l,
                  t,
                  i,
                  m,
                  a,
                  o
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var N in u)
          m = u[N], u.hasOwnProperty(N) && m != null && !a.hasOwnProperty(N) && J(l, t, N, null, a, m);
        for (d in a)
          if (m = a[d], o = u[d], a.hasOwnProperty(d) && m !== o && (m != null || o != null))
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (m != null)
                  throw Error(S(137, t));
                break;
              default:
                J(
                  l,
                  t,
                  d,
                  m,
                  a,
                  o
                );
            }
        return;
      default:
        if (wf(t)) {
          for (var H in u)
            m = u[H], u.hasOwnProperty(H) && m !== void 0 && !a.hasOwnProperty(H) && Ji(
              l,
              t,
              H,
              void 0,
              a,
              m
            );
          for (g in a)
            m = a[g], o = u[g], !a.hasOwnProperty(g) || m === o || m === void 0 && o === void 0 || Ji(
              l,
              t,
              g,
              m,
              a,
              o
            );
          return;
        }
    }
    for (var y in u)
      m = u[y], u.hasOwnProperty(y) && m != null && !a.hasOwnProperty(y) && J(l, t, y, null, a, m);
    for (z in a)
      m = a[z], o = u[z], !a.hasOwnProperty(z) || m === o || m == null && o == null || J(l, t, z, m, a, o);
  }
  function k1(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function lo() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, u = performance.getEntriesByType("resource"), a = 0; a < u.length; a++) {
        var n = u[a], e = n.transferSize, f = n.initiatorType, c = n.duration;
        if (e && c && k1(f)) {
          for (f = 0, c = n.responseEnd, a += 1; a < u.length; a++) {
            var i = u[a], d = i.startTime;
            if (d > c) break;
            var g = i.transferSize, z = i.initiatorType;
            g && k1(z) && (i = i.responseEnd, f += g * (i < c ? 1 : (c - d) / (i - d)));
          }
          if (--a, t += 8 * (e + f) / (n.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var pi = null, wi = null;
  function Vn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function I1(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function P1(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function ly(l, t, u, a) {
    return u = Vn(
      u
    ).createElement(l), u[bl] = a, u[Bl] = t, _l(u, l, t), gl(u), u;
  }
  function Fi(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Wi = null;
  function to() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Wi ? !1 : (Wi = l, !0) : (Wi = null, !1);
  }
  var $i = typeof setTimeout == "function" ? setTimeout : void 0, uo = typeof clearTimeout == "function" ? clearTimeout : void 0, ty = typeof Promise == "function" ? Promise : void 0, uy = typeof requestAnimationFrame == "function" ? requestAnimationFrame : $i, ao = typeof queueMicrotask == "function" ? queueMicrotask : typeof ty < "u" ? function(l) {
    return ty.resolve(null).then(l).catch(no);
  } : $i;
  function no(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Eu(l) {
    return l === "head";
  }
  function ay(l, t) {
    var u = t, a = 0;
    do {
      var n = u.nextSibling;
      if (l.removeChild(u), n && n.nodeType === 8)
        if (u = n.data, u === "/$" || u === "/&") {
          if (a === 0) {
            l.removeChild(n), Wa(t);
            return;
          }
          a--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          a++;
        else if (u === "html")
          n0(
            l.ownerDocument.documentElement
          );
        else if (u === "head") {
          u = l.ownerDocument.head, n0(u);
          for (var e = u.firstChild; e; ) {
            var f = e.nextSibling, c = e.nodeName;
            e[an] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && e.rel.toLowerCase() === "stylesheet" || u.removeChild(e), e = f;
          }
        } else
          u === "body" && n0(l.ownerDocument.body);
      u = n;
    } while (u);
    Wa(t);
  }
  function ny(l, t) {
    var u = l;
    l = 0;
    do {
      var a = u.nextSibling;
      if (u.nodeType === 1 ? t ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (t ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), a && a.nodeType === 8)
        if (u = a.data, u === "/$") {
          if (l === 0) break;
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = a;
    } while (u);
  }
  function ey(l, t, u) {
    if (t = CSS.escape(t) !== t ? "r-" + btoa(t).replace(/=/g, "") : t, l.style.viewTransitionName = t, u != null && (l.style.viewTransitionClass = u), u = getComputedStyle(l), u.display === "inline") {
      if (t = l.getClientRects(), t.length === 1) var a = 1;
      else
        for (var n = a = 0; n < t.length; n++) {
          var e = t[n];
          0 < e.width && 0 < e.height && a++;
        }
      a === 1 && (l = l.style, l.display = t.length === 1 ? "inline-block" : "block", l.marginTop = "-" + u.paddingTop, l.marginBottom = "-" + u.paddingBottom);
    }
  }
  function fy(l, t) {
    l = l.style, t = t.style;
    var u = t != null ? t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null : null;
    l.viewTransitionName = u == null || typeof u == "boolean" ? "" : ("" + u).trim(), u = t != null ? t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null : null, l.viewTransitionClass = u == null || typeof u == "boolean" ? "" : ("" + u).trim(), l.display === "inline-block" && (t == null ? l.display = l.margin = "" : (u = t.display, l.display = u == null || typeof u == "boolean" ? "" : u, u = t.margin, u != null ? l.margin = u : (u = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], l.marginTop = u == null || typeof u == "boolean" ? "" : u, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], l.marginBottom = t == null || typeof t == "boolean" ? "" : t)));
  }
  function eo(l, t, u) {
    return u = u.ownerDocument.defaultView, {
      rect: l,
      abs: t.position === "absolute" || t.position === "fixed",
      clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
      view: 0 <= l.bottom && 0 <= l.right && l.top <= u.innerHeight && l.left <= u.innerWidth
    };
  }
  function ki(l) {
    var t = l.getBoundingClientRect(), u = getComputedStyle(l);
    return eo(t, u, l);
  }
  function fo(l) {
    return l.documentElement.clientHeight;
  }
  function co(l) {
    this.addEventListener("load", l), this.addEventListener("error", l);
  }
  function io(l, t, u, a, n, e, f, c, i) {
    var d = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var g = d.startViewTransition({
        update: function() {
          var m = d.defaultView, o = m.navigation && m.navigation.transition, T = d.fonts.status;
          a();
          var N = [];
          if (T === "loaded" && (fo(d), d.fonts.status === "loading" && N.push(d.fonts.ready)), T = N.length, l !== null)
            for (var H = l.suspenseyImages, y = 0, v = 0; v < H.length; v++) {
              var h = H[v];
              if (!h.complete) {
                var s = h.getBoundingClientRect();
                if (0 < s.bottom && 0 < s.right && s.top < m.innerHeight && s.left < m.innerWidth) {
                  if (y += My(h), y > Of) {
                    N.length = T;
                    break;
                  }
                  h = new Promise(
                    co.bind(h)
                  ), N.push(h);
                }
              }
            }
          if (0 < N.length)
            return m = Promise.race([
              Promise.all(N),
              new Promise(function(O) {
                return setTimeout(O, 500);
              })
            ]).then(n, n), (o ? Promise.allSettled([o.finished, m]) : m).then(e, e);
          if (n(), o)
            return o.finished.then(
              e,
              e
            );
          e();
        },
        types: u
      });
      d.__reactViewTransition = g;
      var z = [];
      return g.ready.then(
        function() {
          for (var m = d.documentElement.getAnimations({
            subtree: !0
          }), o = 0; o < m.length; o++) {
            var T = m[o], N = T.effect, H = N.pseudoElement;
            if (H != null && H.startsWith("::view-transition")) {
              z.push(T), T = N.getKeyframes();
              for (var y = H = void 0, v = !0, h = 0; h < T.length; h++) {
                var s = T[h], O = s.width;
                if (H === void 0) H = O;
                else if (H !== O) {
                  v = !1;
                  break;
                }
                if (O = s.height, y === void 0) y = O;
                else if (y !== O) {
                  v = !1;
                  break;
                }
                delete s.width, delete s.height, s.transform === "none" && delete s.transform;
              }
              v && H !== void 0 && y !== void 0 && (N.setKeyframes(T), v = getComputedStyle(
                N.target,
                N.pseudoElement
              ), v.width !== H || v.height !== y) && (v = T[0], v.width = H, v.height = y, v = T[T.length - 1], v.width = H, v.height = y, N.setKeyframes(T));
            }
          }
          f();
        },
        function(m) {
          d.__reactViewTransition === g && (d.__reactViewTransition = null);
          try {
            if (typeof m == "object" && m !== null)
              switch (m.name) {
                case "InvalidStateError":
                  (m.message === "View transition was skipped because document visibility state is hidden." || m.message === "Skipping view transition because document visibility state has become hidden." || m.message === "Skipping view transition because viewport size changed." || m.message === "Transition was aborted because of invalid state") && (m = null);
              }
            m !== null && i(m);
          } finally {
            a(), n(), f();
          }
        }
      ), g.finished.finally(function() {
        for (var m = 0; m < z.length; m++)
          z[m].cancel();
        d.__reactViewTransition === g && (d.__reactViewTransition = null), c();
      }), g;
    } catch {
      return a(), n(), f(), null;
    }
  }
  function ku(l, t) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + l + "(" + t + ")";
  }
  ku.prototype.animate = function(l, t) {
    return t = typeof t == "number" ? { duration: t } : X({}, t), t.pseudoElement = this._selector, this._scope.animate(l, t);
  }, ku.prototype.getAnimations = function() {
    for (var l = this._scope, t = this._selector, u = l.getAnimations({ subtree: !0 }), a = [], n = 0; n < u.length; n++) {
      var e = u[n].effect;
      e !== null && e.target === l && e.pseudoElement === t && a.push(u[n]);
    }
    return a;
  }, ku.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function cy(l) {
    return {
      name: l,
      group: new ku("group", l),
      imagePair: new ku("image-pair", l),
      old: new ku("old", l),
      new: new ku("new", l)
    };
  }
  function $l(l) {
    this._fragmentFiber = l, this._observers = this._eventListeners = null;
  }
  $l.prototype.addEventListener = function(l, t, u) {
    var a = null, n = null;
    if (!(u != null && typeof u != "boolean" && (a = u.signal || null, a !== null && a.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var e = this._eventListeners;
      if (vy(e, l, t, u) === -1) {
        var f = this, c = t;
        u != null && typeof u != "boolean" && u.once === !0 && (c = function(i) {
          f.removeEventListener(
            l,
            t,
            u
          ), typeof t == "function" ? t.call(this, i) : t.handleEvent(i);
        }), a !== null && (n = f.removeEventListener.bind(
          f,
          l,
          t,
          u
        ), a.addEventListener("abort", n, { once: !0 }), n = a.removeEventListener.bind(a, "abort", n)), a = Ka(u), e.push({
          type: l,
          listener: t,
          optionsOrUseCapture: u,
          attachedListener: c,
          cleanup: n
        }), F(
          this._fragmentFiber.child,
          !1,
          vo,
          l,
          c,
          a
        );
      }
      this._eventListeners = e;
    }
  };
  function vo(l, t, u, a) {
    return al(l).addEventListener(
      t,
      u,
      a
    ), !1;
  }
  $l.prototype.removeEventListener = function(l, t, u) {
    var a = this._eventListeners;
    if (a !== null && (t = vy(
      a,
      l,
      t,
      u
    ), t !== -1)) {
      var n = a[t];
      u = n.attachedListener;
      var e = n.cleanup;
      n = Ka(n.optionsOrUseCapture), F(
        this._fragmentFiber.child,
        !1,
        mo,
        l,
        u,
        n
      ), a.splice(t, 1), e !== null && e();
    }
  };
  function mo(l, t, u, a) {
    return al(l).removeEventListener(
      t,
      u,
      a
    ), !1;
  }
  function Ka(l) {
    return l != null && typeof l != "boolean" && (l.once === !0 || l.signal instanceof AbortSignal) ? { capture: l.capture, passive: l.passive } : l;
  }
  function iy(l) {
    return l == null ? "c=0" : typeof l == "boolean" ? "c=" + (l ? "1" : "0") : "c=" + (l.capture ? "1" : "0");
  }
  function vy(l, t, u, a) {
    if (l.length === 0) return -1;
    a = iy(a);
    for (var n = 0; n < l.length; n++) {
      var e = l[n];
      if (e.type === t && e.listener === u && iy(e.optionsOrUseCapture) === a)
        return n;
    }
    return -1;
  }
  $l.prototype.dispatchEvent = function(l) {
    var t = tl(
      this._fragmentFiber
    );
    if (t === null) return !0;
    t = al(t);
    var u = this._eventListeners;
    if (u !== null && 0 < u.length || !l.bubbles) {
      var a = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
      if (u)
        for (var n = 0; n < u.length; n++) {
          var e = u[n];
          a.addEventListener(
            e.type,
            e.attachedListener,
            Ka(e.optionsOrUseCapture)
          );
        }
      if (t.appendChild(a), l = a.dispatchEvent(l), u)
        for (n = 0; n < u.length; n++)
          e = u[n], a.removeEventListener(
            e.type,
            e.attachedListener,
            Ka(e.optionsOrUseCapture)
          );
      return t.removeChild(a), l;
    }
    return t.dispatchEvent(l);
  }, $l.prototype.focus = function(l) {
    F(
      this._fragmentFiber.child,
      !0,
      my,
      l,
      void 0,
      void 0
    );
  };
  function my(l, t) {
    return l.tag === 6 ? !1 : (l = al(l), No(l, t));
  }
  $l.prototype.focusLast = function(l) {
    var t = [];
    F(
      this._fragmentFiber.child,
      !0,
      Ii,
      t,
      void 0,
      void 0
    );
    for (var u = t.length - 1; 0 <= u && !my(t[u], l); u--) ;
  };
  function Ii(l, t) {
    return t.push(l), !1;
  }
  $l.prototype.blur = function() {
    var l = tl(
      this._fragmentFiber
    );
    l !== null && (l = al(l), l = Vn(l).activeElement, l !== null && F(
      this._fragmentFiber.child,
      !1,
      yo,
      l,
      void 0,
      void 0
    ));
  };
  function yo(l, t) {
    return l.tag === 6 ? !1 : (l = al(l), l === t || l.contains(t) ? (t.blur(), !0) : !1);
  }
  $l.prototype.observeUsing = function(l) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(l), F(
      this._fragmentFiber.child,
      !1,
      ho,
      l,
      void 0,
      void 0
    );
  };
  function ho(l, t) {
    return l.tag === 6 || (l = al(l), t.observe(l)), !1;
  }
  $l.prototype.unobserveUsing = function(l) {
    var t = this._observers;
    if (t !== null && t.has(l)) {
      t.delete(l), F(
        this._fragmentFiber.child,
        !1,
        oo,
        l,
        void 0,
        void 0
      );
      for (var u = t = 0; u < ht.length; u++) {
        var a = ht[u];
        a.fragmentInstance === this && a.observer === l ? l.unobserve(a.instance) : ht[t++] = a;
      }
      ht.length = t;
    }
  };
  function oo(l, t) {
    return l.tag === 6 || (l = al(l), t.unobserve(l)), !1;
  }
  var ht = [], Pi = !1;
  function go(l, t, u) {
    ht.push({
      fragmentInstance: l,
      observer: t,
      instance: u
    }), Pi || (Pi = !0, Ao(function() {
      Pi = !1;
      var a = ht;
      ht = [];
      for (var n = 0; n < a.length; n++) {
        var e = a[n];
        e.observer.unobserve(e.instance);
      }
    }));
  }
  $l.prototype.getClientRects = function() {
    var l = [];
    return F(
      this._fragmentFiber.child,
      !1,
      So,
      l,
      void 0,
      void 0
    ), l;
  };
  function So(l, t) {
    if (l.tag === 6) {
      l = l.stateNode;
      var u = l.ownerDocument.createRange();
      u.selectNodeContents(l), t.push.apply(t, u.getClientRects());
    } else
      l = al(l), t.push.apply(t, l.getClientRects());
    return !1;
  }
  $l.prototype.getRootNode = function(l) {
    var t = tl(
      this._fragmentFiber
    );
    return t === null ? this : al(t).getRootNode(l);
  }, $l.prototype.compareDocumentPosition = function(l) {
    var t = tl(
      this._fragmentFiber
    );
    if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var u = [];
    F(
      this._fragmentFiber.child,
      !1,
      Ii,
      u,
      void 0,
      void 0
    );
    var a = al(t);
    if (u.length === 0) {
      if (u = a, Iu(this._fragmentFiber)) {
        l: {
          for (t = this._fragmentFiber.return; t !== null; ) {
            if (t.tag === 4) {
              t = t.stateNode.containerInfo;
              break l;
            }
            if (t.tag === 3 || t.tag === 5 || t.tag === 27)
              break;
            t = t.return;
          }
          t = null;
        }
        t != null && (u = t);
      }
      t = this._fragmentFiber;
      var n = a = u.compareDocumentPosition(l);
      return u === l ? n = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (u = Ft(t)[1], u === null ? n = Node.DOCUMENT_POSITION_PRECEDING : (l = al(u).compareDocumentPosition(
        l
      ), n = l === 0 || l & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), n |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = al(u[0]), n = al(u[u.length - 1]);
    var e = Iu(this._fragmentFiber) ? t.parentElement : a;
    if (e == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, e = e.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var f = t.compareDocumentPosition(l), c = n.compareDocumentPosition(l), i = f & Node.DOCUMENT_POSITION_CONTAINED_BY || c & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return c = a && e && f & Node.DOCUMENT_POSITION_FOLLOWING && c & Node.DOCUMENT_POSITION_PRECEDING, t = a && t === l || e && n === l || i || c ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && t === l || !e && n === l ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : f, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || so(
      t,
      this._fragmentFiber,
      u[0],
      u[u.length - 1],
      l
    ) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function so(l, t, u, a, n) {
    var e = Cu(n);
    if (l & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (u = !!e)
        l: {
          for (; e !== null; ) {
            if (e.tag === 7 && (e === t || e.alternate === t)) {
              u = !0;
              break l;
            }
            e = e.return;
          }
          u = !1;
        }
      return u;
    }
    if (l & Node.DOCUMENT_POSITION_CONTAINS) {
      if (e === null)
        return e = n.ownerDocument, n === e || n === e.documentElement || n === e.body;
      l: {
        for (e = t, t = tl(t); e !== null; ) {
          if (!(e.tag !== 5 && e.tag !== 3 && e.tag !== 27 || e !== t && e.alternate !== t)) {
            e = !0;
            break l;
          }
          e = e.return;
        }
        e = !1;
      }
      return e;
    }
    return l & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!e) && !(t = e === u) && (t = gt(
      u,
      e,
      ta
    ), t === null ? t = !1 : (F(
      t,
      !0,
      kn,
      e,
      u
    ), e = Ct, Ct = null, t = e !== null)), t) : l & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!e) && !(t = e === a) && (t = gt(
      a,
      e,
      ta
    ), t === null ? t = !1 : (F(
      t,
      !0,
      la,
      e,
      a
    ), e = Ct, Pu = Ct = null, t = e !== null)), t) : !1;
  }
  function yy(l, t) {
    var u = l.ownerDocument.createRange();
    u.selectNodeContents(l), l = u.getBoundingClientRect(), window.scrollTo(
      window.scrollX + l.left,
      t ? window.scrollY + l.top : window.scrollY + l.bottom - window.innerHeight
    );
  }
  $l.prototype.scrollIntoView = function(l) {
    if (typeof l == "object") throw Error(S(566));
    var t = [];
    F(
      this._fragmentFiber.child,
      !1,
      Ii,
      t,
      void 0,
      void 0
    );
    var u = l !== !1;
    if (t.length === 0) {
      var a = Ft(
        this._fragmentFiber
      );
      if (a = u ? a[1] || a[0] || tl(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        l = al(a), yy(l, u);
        return;
      }
      if (a = al(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          u = "host" in a ? a.host : null, u !== null && u.scrollIntoView(l);
          return;
        }
        a.scrollIntoView(l);
      }
    }
    for (a = u ? t.length - 1 : 0; a !== (u ? -1 : t.length); ) {
      var n = t[a];
      n.tag === 6 ? (n = al(n), yy(n, u)) : al(n).scrollIntoView(l), a += u ? -1 : 1;
    }
  };
  function zo(l, t) {
    return l = al(l), dy(l, t), !1;
  }
  function dy(l, t) {
    l.reactFragments == null && (l.reactFragments = /* @__PURE__ */ new Set()), l.reactFragments.add(t);
  }
  function hy(l, t) {
    var u = t._eventListeners;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var n = u[a];
        l.addEventListener(
          n.type,
          n.attachedListener,
          Ka(n.optionsOrUseCapture)
        );
      }
    l.nodeType !== 3 && (u = t._observers, u !== null && u.forEach(function(e) {
      for (var f = 0, c = 0; c < ht.length; c++) {
        var i = ht[c];
        (i.fragmentInstance !== t || i.observer !== e || i.instance !== l) && (ht[f++] = i);
      }
      ht.length = f, e.observe(l);
    }), dy(l, t));
  }
  function To(l, t) {
    var u = t._eventListeners;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var n = u[a];
        l.removeEventListener(
          n.type,
          n.attachedListener,
          Ka(n.optionsOrUseCapture)
        );
      }
    l.nodeType !== 3 && (u = t._observers, u !== null && u.forEach(function(e) {
      typeof e.rootMargin == "string" ? go(
        t,
        e,
        l
      ) : e.unobserve(l);
    }), l.reactFragments != null && l.reactFragments.delete(t));
  }
  function l0(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (t = t.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          l0(u), ve(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function bo(l, t, u, a) {
    for (; l.nodeType === 1; ) {
      var n = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[an])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (e = l.getAttribute("rel"), e === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (e !== n.rel || l.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || l.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || l.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (e = l.getAttribute("src"), (e !== (n.src == null ? null : n.src) || l.getAttribute("type") !== (n.type == null ? null : n.type) || l.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && e && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var e = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && l.getAttribute("name") === e)
          return l;
      } else return l;
      if (l = et(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Eo(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = et(l.nextSibling), l === null)) return null;
    return l;
  }
  function oy(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = et(l.nextSibling), l === null)) return null;
    return l;
  }
  function t0(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function u0(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Oo(l, t) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || u.readyState !== "loading")
      t();
    else {
      var a = function() {
        t(), u.removeEventListener("DOMContentLoaded", a);
      };
      u.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function et(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var a0 = null;
  function gy(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (t === 0)
            return et(l.nextSibling);
          t--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Sy(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (t === 0) return l;
          t--;
        } else u !== "/$" && u !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function No(l, t) {
    function u() {
      a = !0;
    }
    if (l.ownerDocument.activeElement === l) return !0;
    var a = !1;
    try {
      l.ownerDocument.addEventListener("focus", u, !0), (l.focus || HTMLElement.prototype.focus).call(l, t);
    } finally {
      l.ownerDocument.removeEventListener("focus", u, !0);
    }
    return a;
  }
  function Ao(l) {
    uy(function() {
      uy(function(t) {
        return l(t);
      });
    });
  }
  function sy(l, t, u) {
    switch (t = Vn(u), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(S(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(S(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(S(454));
        return l;
      default:
        throw Error(S(451));
    }
  }
  function zy(l, t, u) {
    for (var a in u) {
      var n = u[a];
      u.hasOwnProperty(a) && n != null && J(l, t, a, null, Ih, n);
    }
    u.dangerouslySetInnerHTML != null && (l.textContent = ""), l.onclick === Tt && (l.onclick = null), ve(l);
  }
  function n0(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    ve(l);
  }
  var ft = /* @__PURE__ */ new Map(), Ty = /* @__PURE__ */ new Set();
  function xn(l) {
    if (typeof l.getRootNode == "function") {
      var t = l.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  var pt = Z.d;
  Z.d = {
    f: _o,
    r: Do,
    D: Mo,
    C: Uo,
    L: Ho,
    m: Co,
    X: qo,
    S: Ro,
    M: Bo
  };
  function _o() {
    var l = pt.f(), t = hf();
    return l || t;
  }
  function Do(l) {
    var t = ia(l);
    t !== null && t.tag === 5 && t.type === "form" ? Em(t) : pt.r(l);
  }
  var ra = typeof document > "u" ? null : document;
  function by(l, t, u) {
    var a = ra;
    if (a && typeof t == "string" && t) {
      var n = Il(t);
      n = 'link[rel="' + l + '"][href="' + n + '"]', typeof u == "string" && (n += '[crossorigin="' + u + '"]'), Ty.has(n) || (Ty.add(n), l = { rel: l, crossOrigin: u, href: t }, a.querySelector(n) === null && (t = a.createElement("link"), _l(t, "link", l), gl(t), a.head.appendChild(t)));
    }
  }
  function Mo(l) {
    pt.D(l), by("dns-prefetch", l, null);
  }
  function Uo(l, t) {
    pt.C(l, t), by("preconnect", l, t);
  }
  function Ho(l, t, u) {
    pt.L(l, t, u);
    var a = ra;
    if (a && l && t) {
      var n = 'link[rel="preload"][as="' + Il(t) + '"]';
      t === "image" && u && u.imageSrcSet ? (n += '[imagesrcset="' + Il(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (n += '[imagesizes="' + Il(
        u.imageSizes
      ) + '"]')) : n += '[href="' + Il(l) + '"]';
      var e = n;
      switch (t) {
        case "style":
          e = Ja(l);
          break;
        case "script":
          e = pa(l);
      }
      if (!(ft.has(e) || (l = X(
        {
          rel: "preload",
          href: t === "image" && u && u.imageSrcSet ? void 0 : l,
          as: t
        },
        u
      ), ft.set(e, l), a.querySelector(n) !== null || t === "style" && a.querySelector(Ln(e)) || t === "script" && a.querySelector(Kn(e))))) {
        var f = a.createElement("link");
        _l(f, "link", l), t === "style" && (f[ie] = !0, f.onload = f.onerror = function() {
          B0(f);
        }), gl(f), a.head.appendChild(f);
      }
    }
  }
  function Co(l, t) {
    pt.m(l, t);
    var u = ra;
    if (u && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + Il(a) + '"][href="' + Il(l) + '"]', e = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          e = pa(l);
      }
      if (!ft.has(e) && (l = X({ rel: "modulepreload", href: l }, t), ft.set(e, l), u.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Kn(e)))
              return;
        }
        a = u.createElement("link"), _l(a, "link", l), gl(a), u.head.appendChild(a);
      }
    }
  }
  function Ro(l, t, u) {
    pt.S(l, t, u);
    var a = ra;
    if (a && l) {
      var n = va(a).hoistableStyles, e = Ja(l);
      t = t || "default";
      var f = n.get(e);
      if (!f) {
        var c = { loading: 0, preload: null };
        if (f = a.querySelector(
          Ln(e)
        ))
          c.loading = 5;
        else {
          l = X(
            { rel: "stylesheet", href: l, "data-precedence": t },
            u
          ), (u = ft.get(e)) && e0(l, u);
          var i = f = a.createElement("link");
          gl(i), _l(i, "link", l), i._p = new Promise(function(d, g) {
            i.onload = d, i.onerror = g;
          }), i.addEventListener("load", function() {
            c.loading |= 1;
          }), i.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, bf(f, t, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: c
        }, n.set(e, f);
      }
    }
  }
  function qo(l, t) {
    pt.X(l, t);
    var u = ra;
    if (u && l) {
      var a = va(u).hoistableScripts, n = pa(l), e = a.get(n);
      e || (e = u.querySelector(Kn(n)), e || (l = X({ src: l, async: !0 }, t), (t = ft.get(n)) && f0(l, t), e = u.createElement("script"), gl(e), _l(e, "link", l), u.head.appendChild(e)), e = {
        type: "script",
        instance: e,
        count: 1,
        state: null
      }, a.set(n, e));
    }
  }
  function Bo(l, t) {
    pt.M(l, t);
    var u = ra;
    if (u && l) {
      var a = va(u).hoistableScripts, n = pa(l), e = a.get(n);
      e || (e = u.querySelector(Kn(n)), e || (l = X({ src: l, async: !0, type: "module" }, t), (t = ft.get(n)) && f0(l, t), e = u.createElement("script"), gl(e), _l(e, "link", l), u.head.appendChild(e)), e = {
        type: "script",
        instance: e,
        count: 1,
        state: null
      }, a.set(n, e));
    }
  }
  function Ey(l, t, u, a) {
    var n = (n = It.current) ? xn(n) : null;
    if (!n) throw Error(S(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (u = Ja(u.href), t = va(
          n
        ).hoistableStyles, a = t.get(u), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(u, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Ja(u.href);
          var e = va(
            n
          ).hoistableStyles, f = e.get(l);
          if (f || (n = n.ownerDocument || n, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, e.set(l, f), (e = n.querySelector(
            Ln(l)
          )) ? e._p || (f.instance = e, f.state.loading = 5) : (e = ft.get(l), e || (e = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, ft.set(l, e)), Yo(
            n,
            l,
            e,
            f.state
          ))), t && a === null)
            throw Error(S(528, ""));
          return f;
        }
        if (t && a !== null)
          throw Error(S(529, ""));
        return null;
      case "script":
        return t = u.async, u = u.src, typeof u == "string" && t && typeof t != "function" && typeof t != "symbol" ? (u = pa(u), t = va(
          n
        ).hoistableScripts, a = t.get(u), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, t.set(u, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(S(444, l));
    }
  }
  function Ja(l) {
    return 'href="' + Il(l) + '"';
  }
  function Ln(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Oy(l) {
    return X({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Yo(l, t, u, a) {
    if (t = l.querySelector(
      'link[rel="preload"][as="style"][' + t + "]"
    )) {
      if (t[ie] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      t = l.createElement("link"), t[ie] = !0, t.onload = t.onerror = B0.bind(null, t), _l(t, "link", u), gl(t), l.head.appendChild(t);
    a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function pa(l) {
    return '[src="' + Il(l) + '"]';
  }
  function Kn(l) {
    return "script[async]" + l;
  }
  function Ny(l, t, u) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + Il(u.href) + '"]'
          );
          if (a)
            return t.instance = a, gl(a), a;
          var n = X({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), gl(a), _l(a, "style", n), bf(a, u.precedence, l), t.instance = a;
        case "stylesheet":
          n = Ja(u.href);
          var e = l.querySelector(
            Ln(n)
          );
          if (e)
            return t.state.loading |= 4, t.instance = e, gl(e), e;
          a = Oy(u), (n = ft.get(n)) && e0(a, n), e = (l.ownerDocument || l).createElement("link"), gl(e);
          var f = e;
          return f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), _l(e, "link", a), t.state.loading |= 4, bf(e, u.precedence, l), t.instance = e;
        case "script":
          return e = pa(u.src), (n = l.querySelector(
            Kn(e)
          )) ? (t.instance = n, gl(n), n) : (a = u, (n = ft.get(e)) && (a = X({}, u), f0(a, n)), l = l.ownerDocument || l, n = l.createElement("script"), gl(n), _l(n, "link", a), l.head.appendChild(n), t.instance = n);
        case "void":
          return null;
        default:
          throw Error(S(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, bf(a, u.precedence, l));
    return t.instance;
  }
  function bf(l, t, u) {
    for (var a = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, e = n, f = 0; f < a.length; f++) {
      var c = a[f];
      if (c.dataset.precedence === t) e = c;
      else if (e !== n) break;
    }
    e ? e.parentNode.insertBefore(l, e.nextSibling) : (t = u.nodeType === 9 ? u.head : u, t.insertBefore(l, t.firstChild));
  }
  function e0(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function f0(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Ef = null;
  function Ay(l, t, u) {
    if (Ef === null) {
      var a = /* @__PURE__ */ new Map(), n = Ef = /* @__PURE__ */ new Map();
      n.set(u, a);
    } else
      n = Ef, a = n.get(u), a || (a = /* @__PURE__ */ new Map(), n.set(u, a));
    if (a.has(l)) return a;
    for (a.set(l, null), u = u.getElementsByTagName(l), n = 0; n < u.length; n++) {
      var e = u[n];
      if (!(e[an] || e[bl] || l === "link" && e.getAttribute("rel") === "stylesheet") && e.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = e.getAttribute(t) || "";
        f = l + f;
        var c = a.get(f);
        c ? c.push(e) : a.set(f, [e]);
      }
    }
    return a;
  }
  function c0(l, t, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function Go(l, t, u) {
    if (u === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return l = t.disabled, typeof t.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function _y(l, t) {
    return l === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
  }
  function Dy(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function My(l) {
    return (l.width || 100) * (l.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Uy(l, t) {
    typeof t.decode == "function" && (l.imgCount++, t.complete || (l.imgBytes += My(t), l.suspenseyImages.push(t)), l = jo.bind(l), t.decode().then(l, l));
  }
  function Qo(l, t, u, a) {
    if (u.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var n = Ja(a.href), e = t.querySelector(
          Ln(n)
        );
        if (e) {
          t = e._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = rn.bind(l), t.then(l, l)), u.state.loading |= 4, u.instance = e, gl(e);
          return;
        }
        e = t.ownerDocument || t, a = Oy(a), (n = ft.get(n)) && e0(a, n), e = e.createElement("link"), gl(e);
        var f = e;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), _l(e, "link", a), u.instance = e;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, t), (t = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = rn.bind(l), t.addEventListener("load", u), t.addEventListener("error", u));
    }
  }
  var Of = 0;
  function Xo(l, t) {
    return l.stylesheets && l.count === 0 && Af(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var a = setTimeout(function() {
        if (l.stylesheets && Af(l, l.stylesheets), l.unsuspend) {
          var e = l.unsuspend;
          l.unsuspend = null, e();
        }
      }, 6e4 + t);
      0 < l.imgBytes && Of === 0 && (Of = 62500 * lo());
      var n = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Af(l, l.stylesheets), l.unsuspend)) {
            var e = l.unsuspend;
            l.unsuspend = null, e();
          }
        },
        (l.imgBytes > Of ? 50 : 800) + t
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function Hy(l) {
    if (l.count === 0 && (l.imgCount === 0 || !l.waitingForImages)) {
      if (l.stylesheets) Af(l, l.stylesheets);
      else if (l.unsuspend) {
        var t = l.unsuspend;
        l.unsuspend = null, t();
      }
    }
  }
  function rn() {
    this.count--, Hy(this);
  }
  function jo() {
    this.imgCount--, Hy(this);
  }
  var Nf = null;
  function Af(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Nf = /* @__PURE__ */ new Map(), t.forEach(Zo, l), Nf = null, rn.call(l));
  }
  function Zo(l, t) {
    if (!(t.state.loading & 4)) {
      var u = Nf.get(l);
      if (u) var a = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Nf.set(l, u);
        for (var n = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), e = 0; e < n.length; e++) {
          var f = n[e];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (u.set(f.dataset.precedence, f), a = f);
        }
        a && u.set(null, a);
      }
      n = t.instance, f = n.getAttribute("data-precedence"), e = u.get(f) || a, e === a && u.set(null, n), u.set(f, n), this.count++, a = rn.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), e ? e.parentNode.insertBefore(n, e.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(n, l.firstChild)), t.state.loading |= 4;
    }
  }
  var wa = {
    $$typeof: ql,
    Provider: null,
    Consumer: null,
    _currentValue: Uu,
    _currentValue2: Uu,
    _threadCount: 0
  };
  function Vo(l, t, u, a, n, e, f, c, i) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = xf(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xf(0), this.hiddenUpdates = xf(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = e, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Cy(l, t, u, a, n, e, f, c, i, d, g, z) {
    return l = new Vo(
      l,
      t,
      u,
      f,
      i,
      d,
      g,
      z,
      c
    ), t = 1, e === !0 && (t |= 24), e = Yl(3, null, null, t), l.current = e, e.stateNode = l, t = Oc(), t.refCount++, l.pooledCache = t, t.refCount++, e.memoizedState = {
      element: a,
      isDehydrated: u,
      cache: t
    }, Dc(e), l;
  }
  function Ry(l) {
    return l ? (l = Ta, l) : Ta;
  }
  function qy(l, t, u, a, n, e) {
    n = Ry(n), a.context === null ? a.context = n : a.pendingContext = n, a = vu(t), a.payload = { element: u }, e = e === void 0 ? null : e, e !== null && (a.callback = e), u = mu(l, a, t), u !== null && (jl(u, l, t), En(u, l, t));
  }
  function By(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function i0(l, t) {
    By(l, t), (l = l.alternate) && By(l, t);
  }
  function Yy(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Yu(l, 67108864);
      t !== null && jl(t, l, 67108864), i0(l, 67108864);
    }
  }
  function Gy(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Wl();
      t = Lf(t);
      var u = Yu(l, t);
      u !== null && jl(u, l, t), i0(l, t);
    }
  }
  var Fa = !0;
  function xo(l, t, u, a) {
    var n = D.T;
    D.T = null;
    var e = Z.p;
    try {
      Z.p = 2, v0(l, t, u, a);
    } finally {
      Z.p = e, D.T = n;
    }
  }
  function Lo(l, t, u, a) {
    var n = D.T;
    D.T = null;
    var e = Z.p;
    try {
      Z.p = 8, v0(l, t, u, a);
    } finally {
      Z.p = e, D.T = n;
    }
  }
  function v0(l, t, u, a) {
    if (Fa) {
      var n = m0(a);
      if (n === null)
        ri(
          l,
          t,
          a,
          _f,
          u
        ), Xy(l, a);
      else if (ro(
        n,
        l,
        t,
        u,
        a
      ))
        a.stopPropagation();
      else if (Xy(l, a), t & 4 && -1 < Ko.indexOf(l)) {
        for (; n !== null; ) {
          var e = ia(n);
          if (e !== null)
            switch (e.tag) {
              case 3:
                if (e = e.stateNode, e.current.memoizedState.isDehydrated) {
                  var f = Hu(e.pendingLanes);
                  if (f !== 0) {
                    var c = e;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var i = 1 << 31 - Ll(f);
                      c.entanglements[1] |= i, f &= ~i;
                    }
                    Ht(e), (V & 6) === 0 && (mf = Vl() + 500, Xn(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = Yu(e, 2), c !== null && jl(c, e, 2), hf(), i0(e, 2);
            }
          if (e = m0(a), e === null && ri(
            l,
            t,
            a,
            _f,
            u
          ), e === n) break;
          n = e;
        }
        n !== null && a.stopPropagation();
      } else
        ri(
          l,
          t,
          a,
          null,
          u
        );
    }
  }
  function m0(l) {
    return l = Wf(l), y0(l);
  }
  var _f = null;
  function y0(l) {
    if (_f = null, l = Cu(l), l !== null) {
      var t = ol(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = Dl(t), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = wt(t), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return _f = l, null;
  }
  function Qy(l) {
    switch (l) {
      case "beforetoggle":
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
      case "seeked":
      case "submit":
      case "toggle":
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
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
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
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ld()) {
          case E0:
            return 2;
          case O0:
            return 8;
          case ae:
          case td:
            return 32;
          case N0:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var d0 = !1, Ou = null, Nu = null, Au = null, Jn = /* @__PURE__ */ new Map(), pn = /* @__PURE__ */ new Map(), _u = [], Ko = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Xy(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Ou = null;
        break;
      case "dragenter":
      case "dragleave":
        Nu = null;
        break;
      case "mouseover":
      case "mouseout":
        Au = null;
        break;
      case "pointerover":
      case "pointerout":
        Jn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        pn.delete(t.pointerId);
    }
  }
  function wn(l, t, u, a, n, e) {
    return l === null || l.nativeEvent !== e ? (l = {
      blockedOn: t,
      domEventName: u,
      eventSystemFlags: a,
      nativeEvent: e,
      targetContainers: [n]
    }, t !== null && (t = ia(t), t !== null && Yy(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), l);
  }
  function ro(l, t, u, a, n) {
    switch (t) {
      case "focusin":
        return Ou = wn(
          Ou,
          l,
          t,
          u,
          a,
          n
        ), !0;
      case "dragenter":
        return Nu = wn(
          Nu,
          l,
          t,
          u,
          a,
          n
        ), !0;
      case "mouseover":
        return Au = wn(
          Au,
          l,
          t,
          u,
          a,
          n
        ), !0;
      case "pointerover":
        var e = n.pointerId;
        return Jn.set(
          e,
          wn(
            Jn.get(e) || null,
            l,
            t,
            u,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return e = n.pointerId, pn.set(
          e,
          wn(
            pn.get(e) || null,
            l,
            t,
            u,
            a,
            n
          )
        ), !0;
    }
    return !1;
  }
  function jy(l) {
    var t = Cu(l.target);
    if (t !== null) {
      var u = ol(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = Dl(u), t !== null) {
            l.blockedOn = t, C0(l.priority, function() {
              Gy(u);
            });
            return;
          }
        } else if (t === 31) {
          if (t = wt(u), t !== null) {
            l.blockedOn = t, C0(l.priority, function() {
              Gy(u);
            });
            return;
          }
        } else if (t === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Df(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = m0(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(
          u.type,
          u
        );
        Ff = a, u.target.dispatchEvent(a), Ff = null;
      } else
        return t = ia(u), t !== null && Yy(t), l.blockedOn = u, !1;
      t.shift();
    }
    return !0;
  }
  function Zy(l, t, u) {
    Df(l) && u.delete(t);
  }
  function Jo() {
    d0 = !1, Ou !== null && Df(Ou) && (Ou = null), Nu !== null && Df(Nu) && (Nu = null), Au !== null && Df(Au) && (Au = null), Jn.forEach(Zy), pn.forEach(Zy);
  }
  function Mf(l, t) {
    l.blockedOn === t && (l.blockedOn = null, d0 || (d0 = !0, b.unstable_scheduleCallback(
      b.unstable_NormalPriority,
      Jo
    )));
  }
  var Uf = null;
  function Vy(l) {
    Uf !== l && (Uf = l, b.unstable_scheduleCallback(
      b.unstable_NormalPriority,
      function() {
        Uf === l && (Uf = null);
        for (var t = 0; t < l.length; t += 3) {
          var u = l[t], a = l[t + 1], n = l[t + 2];
          if (typeof a != "function") {
            if (y0(a || u) === null)
              continue;
            break;
          }
          var e = ia(u);
          e !== null && (l.splice(t, 3), t -= 3, wc(
            e,
            {
              pending: !0,
              data: n,
              method: u.method,
              action: a
            },
            a,
            n
          ));
        }
      }
    ));
  }
  function Wa(l) {
    function t(i) {
      return Mf(i, l);
    }
    Ou !== null && Mf(Ou, l), Nu !== null && Mf(Nu, l), Au !== null && Mf(Au, l), Jn.forEach(t), pn.forEach(t);
    for (var u = 0; u < _u.length; u++) {
      var a = _u[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < _u.length && (u = _u[0], u.blockedOn === null); )
      jy(u), u.blockedOn === null && _u.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (a = 0; a < u.length; a += 3) {
        var n = u[a], e = u[a + 1], f = n[Bl] || null;
        if (typeof e == "function")
          f || Vy(u);
        else if (f) {
          var c = null;
          if (e && e.hasAttribute("formAction")) {
            if (n = e, f = e[Bl] || null)
              c = f.formAction;
            else if (y0(n) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? u[a + 1] = c : (u.splice(a, 3), a -= 3), Vy(u);
        }
      }
  }
  function xy() {
    function l(e) {
      e.canIntercept && e.info === "react-transition" && e.intercept({
        handler: function() {
          return new Promise(function(f) {
            return n = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      n !== null && (n(), n = null), a || setTimeout(u, 20);
    }
    function u() {
      if (!a && !navigation.transition) {
        var e = navigation.currentEntry;
        e && e.url != null && navigation.navigate(e.url, {
          state: e.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, n = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(u, 100), function() {
        a = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), n !== null && (n(), n = null);
      };
    }
  }
  function h0(l) {
    this._internalRoot = l;
  }
  Hf.prototype.render = h0.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(S(409));
    var u = t.current, a = Wl();
    qy(u, a, l, t, null, null);
  }, Hf.prototype.unmount = h0.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      qy(l.current, 2, null, l, null, null), hf(), t[ca] = null;
    }
  };
  function Hf(l) {
    this._internalRoot = l;
  }
  Hf.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = H0();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < _u.length && t !== 0 && t < _u[u].priority; u++) ;
      _u.splice(u, 0, l), u === 0 && jy(l);
    }
  };
  var Ly = x.version;
  if (Ly !== "19.3.0")
    throw Error(
      S(
        527,
        Ly,
        "19.3.0"
      )
    );
  Z.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(S(188)) : (l = Object.keys(l).join(","), Error(S(268, l)));
    return l = ot(t), l = l !== null ? $n(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var po = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: D,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Cf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Cf.isDisabled && Cf.supportsFiber)
      try {
        ln = Cf.inject(
          po
        ), xl = Cf;
      } catch {
      }
  }
  return Fn.createRoot = function(l, t) {
    if (!il(l)) throw Error(S(299));
    var u = !1, a = "", n = Rm, e = qm, f = Bm;
    return t != null && (t.unstable_strictMode === !0 && (u = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (e = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = Cy(
      l,
      1,
      !1,
      null,
      null,
      u,
      a,
      null,
      n,
      e,
      f,
      xy
    ), l[ca] = t.current, Ki(l), new h0(t);
  }, Fn.hydrateRoot = function(l, t, u) {
    if (!il(l)) throw Error(S(299));
    var a = !1, n = "", e = Rm, f = qm, c = Bm, i = null;
    return u != null && (u.unstable_strictMode === !0 && (a = !0), u.identifierPrefix !== void 0 && (n = u.identifierPrefix), u.onUncaughtError !== void 0 && (e = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (c = u.onRecoverableError), u.formState !== void 0 && (i = u.formState)), t = Cy(
      l,
      1,
      !0,
      t,
      u ?? null,
      a,
      n,
      i,
      e,
      f,
      c,
      xy
    ), t.context = Ry(null), u = t.current, a = Wl(), a = Lf(a), n = vu(a), n.callback = null, mu(u, n, a), u = a, t.current.lanes = u, un(t, u), Ht(t), l[ca] = t.current, Ki(l), new Hf(t);
  }, Fn.version = "19.3.0", Fn;
}
var py;
function tg() {
  if (py) return o0.exports;
  py = 1;
  function b() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b);
      } catch (x) {
        console.error(x);
      }
  }
  return b(), o0.exports = lg(), o0.exports;
}
var ug = tg(), s0 = { exports: {} }, Wn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wy;
function ag() {
  if (wy) return Wn;
  wy = 1;
  var b = Symbol.for("react.transitional.element"), x = Symbol.for("react.fragment");
  function p(S, il, ol) {
    var Dl = null;
    if (ol !== void 0 && (Dl = "" + ol), il.key !== void 0 && (Dl = "" + il.key), "key" in il) {
      ol = {};
      for (var wt in il)
        wt !== "key" && (ol[wt] = il[wt]);
    } else ol = il;
    return il = ol.ref, {
      $$typeof: b,
      type: S,
      key: Dl,
      ref: il !== void 0 ? il : null,
      props: ol
    };
  }
  return Wn.Fragment = x, Wn.jsx = p, Wn.jsxs = p, Wn;
}
var Fy;
function ng() {
  return Fy || (Fy = 1, s0.exports = ag()), s0.exports;
}
var Zl = ng();
function eg(b) {
  const x = [...b];
  for (let p = x.length - 1; p > 0; p--) {
    const S = Math.floor(Math.random() * (p + 1));
    [x[p], x[S]] = [x[S], x[p]];
  }
  return x;
}
function Wy({ card: b, isBig: x }) {
  const p = /* @__PURE__ */ Zl.jsx(
    $o,
    {
      className: `block-announcements__card${x ? " --big" : ""}`,
      cover: b.image ? /* @__PURE__ */ Zl.jsx("div", { className: "block-announcements__media", children: /* @__PURE__ */ Zl.jsx(
        "img",
        {
          className: "block-announcements__image",
          src: b.image,
          alt: b.title,
          loading: "lazy"
        }
      ) }) : void 0,
      hoverable: !0,
      children: /* @__PURE__ */ Zl.jsxs("div", { className: "block-announcements__footer", children: [
        b.subtitle && /* @__PURE__ */ Zl.jsx("div", { className: "block-announcements__subtitle", children: b.subtitle }),
        /* @__PURE__ */ Zl.jsx("div", { className: "block-announcements__title", children: b.title })
      ] })
    }
  );
  return b.link ? /* @__PURE__ */ Zl.jsx("a", { className: "block-announcements__card-link", href: b.link, children: p }) : p;
}
function fg({
  cards: b = [],
  heading: x,
  shuffle: p = !1
}) {
  const S = p ? eg(b) : b, il = S.find((Dl) => Dl.size === "big") || S[0], ol = S.filter((Dl) => Dl !== il);
  return S.length ? /* @__PURE__ */ Zl.jsxs("section", { children: [
    x && /* @__PURE__ */ Zl.jsx("h2", { className: "ea-section-heading", children: x }),
    /* @__PURE__ */ Zl.jsxs("div", { className: "block-announcements__grid", children: [
      /* @__PURE__ */ Zl.jsx("div", { className: "block-announcements__hero", children: /* @__PURE__ */ Zl.jsx(Wy, { card: il, isBig: !0 }) }),
      ol.length > 0 && /* @__PURE__ */ Zl.jsx("div", { className: "block-announcements__small-grid", children: ol.map((Dl) => /* @__PURE__ */ Zl.jsx(Wy, { card: Dl }, Dl.title)) })
    ] })
  ] }) : null;
}
const Rf = /* @__PURE__ */ new WeakMap();
function cg(b, x, p = {}) {
  if (!b || !x)
    return;
  let S = Rf.get(b);
  S || (S = ug.createRoot(b), Rf.set(b, S)), S.render(ko.createElement(x, p));
}
function vg(b) {
  const x = Rf.get(b);
  x && (x.unmount(), Rf.delete(b));
}
function mg(b, x = {}) {
  cg(b, fg, x);
}
export {
  cg as mount,
  mg as mountAnnouncements,
  vg as unmount
};
