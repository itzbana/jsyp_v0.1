!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("tti", [], e) : "object" == typeof exports ? exports["tti"] = e() : t["tti"] = e()
}(window, function() {
    return n = [function(t, e) {
        var n = function() {
            return this
        }();
        try {
            n = n || Function("return this")()
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }
    , function(t, e, n) {
        "use strict";
        e.__esModule = !0,
        e.setCustomProperties = e._sendWebVitalsData = e._collectVitals = e.calculateTTI = void 0,
        n(2);
        function i() {
            0 < s.timeToInteractive && setTimeout(function() {
                window._expDataLayer = window._expDataLayer || [],
                window._expDataLayer.push({
                    schema: "add_perf",
                    version: "v1",
                    data: window._tccInternal ? {
                        type: "pageperf",
                        properties: s,
                        custom_properties: c
                    } : {
                        timing_object: s,
                        is_hard_navigation: !0,
                        custom_properties: c
                    }
                })
            }, 0)
        }
        function r() {
            var t, e, n = (r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).name, r = r.value;
            s[n] = "CLS" === n ? r : Math.round(r),
            "timeToInteractive" === n && (s.hasOwnProperty("FID") ? i() : (t = 0,
            e = setInterval(function() {
                (s.hasOwnProperty("FID") || 10 < t) && (e && (clearInterval(e),
                e = null),
                i()),
                t += 1
            }, 500)))
        }
        var o = n(5)
          , u = n(6)
          , a = n(7)
          , s = {
            nav_type: "hard"
        }
          , c = {};
        e.calculateTTI = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : r;
            try {
                (0,
                u.getLCP)(e, !0),
                (0,
                u.getFID)(e),
                (0,
                u.getCLS)(e, !0),
                (0,
                o.getFirstConsistentlyInteractive)().then(function(t) {
                    e({
                        name: "timeToInteractive",
                        value: t
                    })
                })
            } catch (t) {
                (0,
                a.error)('unable to calculate "web-vitals" performance metrics', t)
            }
        }
        ,
        e._collectVitals = r,
        e._sendWebVitalsData = i,
        e.setCustomProperties = function() {
            return c = Object.assign({}, c, 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {})
        }
    }
    , function(t, e, n) {
        "use strict";
        t.exports = n(3).polyfill()
    }
    , function(t, e, n) {
        var rt, it;
        rt = n(4),
        it = n(0),
        t.exports = function() {
            "use strict";
            function r(t) {
                var e = typeof t;
                return t !== null && (e === "object" || e === "function")
            }
            function s(t) {
                return typeof t === "function"
            }
            var t = void 0;
            if (Array.isArray)
                t = Array.isArray;
            else
                t = function(t) {
                    return Object.prototype.toString.call(t) === "[object Array]"
                }
                ;
            var n = t
              , i = 0
              , e = void 0
              , o = void 0
              , u = function t(e, n) {
                b[i] = e;
                b[i + 1] = n;
                i += 2;
                if (i === 2)
                    if (o)
                        o(_);
                    else
                        S()
            };
            function a(t) {
                o = t
            }
            function c(t) {
                u = t
            }
            var f = typeof window !== "undefined" ? window : undefined
              , l = f || {}
              , d = l.MutationObserver || l.WebKitMutationObserver
              , p = typeof self === "undefined" && typeof rt !== "undefined" && {}.toString.call(rt) === "[object process]"
              , v = typeof Uint8ClampedArray !== "undefined" && typeof importScripts !== "undefined" && typeof MessageChannel !== "undefined";
            function h() {
                return function() {
                    return rt.nextTick(_)
                }
            }
            function m() {
                if (typeof e !== "undefined")
                    return function() {
                        e(_)
                    }
                    ;
                return w()
            }
            function y() {
                var t = 0;
                var e = new d(_);
                var n = document.createTextNode("");
                e.observe(n, {
                    characterData: true
                });
                return function() {
                    n.data = t = ++t % 2
                }
            }
            function g() {
                var t = new MessageChannel;
                t.port1.onmessage = _;
                return function() {
                    return t.port2.postMessage(0)
                }
            }
            function w() {
                var t = setTimeout;
                return function() {
                    return t(_, 1)
                }
            }
            var b = new Array(1e3);
            function _() {
                for (var t = 0; t < i; t += 2) {
                    var e = b[t];
                    var n = b[t + 1];
                    e(n);
                    b[t] = undefined;
                    b[t + 1] = undefined
                }
                i = 0
            }
            function T() {
                try {
                    var t = Function("return this")().require("vertx");
                    e = t.runOnLoop || t.runOnContext;
                    return m()
                } catch (t) {
                    return w()
                }
            }
            var S = void 0;
            if (p)
                S = h();
            else if (d)
                S = y();
            else if (v)
                S = g();
            else if (f === undefined && "function" === "function")
                S = T();
            else
                S = w();
            function E(t, e) {
                var n = this;
                var r = new this.constructor(j);
                if (r[x] === undefined)
                    X(r);
                var i = n._state;
                if (i) {
                    var o = arguments[i - 1];
                    u(function() {
                        return V(i, r, o, n._result)
                    })
                } else
                    H(n, r, t, e);
                return r
            }
            function L(t) {
                var e = this;
                if (t && typeof t === "object" && t.constructor === e)
                    return t;
                var n = new e(j);
                q(n, t);
                return n
            }
            var x = Math.random().toString(36).substring(2);
            function j() {}
            var A = void 0
              , P = 1
              , O = 2;
            function C() {
                return new TypeError("You cannot resolve a promise with itself")
            }
            function F() {
                return new TypeError("A promises callback cannot return that same promise.")
            }
            function M(t, e, n, r) {
                try {
                    t.call(e, n, r)
                } catch (t) {
                    return t
                }
            }
            function k(t, r, i) {
                u(function(e) {
                    var n = false;
                    var t = M(i, r, function(t) {
                        if (n)
                            return;
                        n = true;
                        if (r !== t)
                            q(e, t);
                        else
                            B(e, t)
                    }, function(t) {
                        if (n)
                            return;
                        n = true;
                        W(e, t)
                    }, "Settle: " + (e._label || " unknown promise"));
                    if (!n && t) {
                        n = true;
                        W(e, t)
                    }
                }, t)
            }
            function I(e, t) {
                if (t._state === P)
                    B(e, t._result);
                else if (t._state === O)
                    W(e, t._result);
                else
                    H(t, undefined, function(t) {
                        return q(e, t)
                    }, function(t) {
                        return W(e, t)
                    })
            }
            function D(t, e, n) {
                if (e.constructor === t.constructor && n === E && e.constructor.resolve === L)
                    I(t, e);
                else if (n === undefined)
                    B(t, e);
                else if (s(n))
                    k(t, e, n);
                else
                    B(t, e)
            }
            function q(e, t) {
                if (e === t)
                    W(e, C());
                else if (r(t)) {
                    var n = void 0;
                    try {
                        n = t.then
                    } catch (t) {
                        W(e, t);
                        return
                    }
                    D(e, t, n)
                } else
                    B(e, t)
            }
            function N(t) {
                if (t._onerror)
                    t._onerror(t._result);
                R(t)
            }
            function B(t, e) {
                if (t._state !== A)
                    return;
                t._result = e;
                t._state = P;
                if (t._subscribers.length !== 0)
                    u(R, t)
            }
            function W(t, e) {
                if (t._state !== A)
                    return;
                t._state = O;
                t._result = e;
                u(N, t)
            }
            function H(t, e, n, r) {
                var i = t._subscribers;
                var o = i.length;
                t._onerror = null;
                i[o] = e;
                i[o + P] = n;
                i[o + O] = r;
                if (o === 0 && t._state)
                    u(R, t)
            }
            function R(t) {
                var e = t._subscribers;
                var n = t._state;
                if (e.length === 0)
                    return;
                var r = void 0
                  , i = void 0
                  , o = t._result;
                for (var u = 0; u < e.length; u += 3) {
                    r = e[u];
                    i = e[u + n];
                    if (r)
                        V(n, r, i, o);
                    else
                        i(o)
                }
                t._subscribers.length = 0
            }
            function V(t, e, n, r) {
                var i = s(n)
                  , o = void 0
                  , u = void 0
                  , a = true;
                if (i) {
                    try {
                        o = n(r)
                    } catch (t) {
                        a = false;
                        u = t
                    }
                    if (e === o) {
                        W(e, F());
                        return
                    }
                } else
                    o = r;
                if (e._state !== A)
                    ;
                else if (i && a)
                    q(e, o);
                else if (a === false)
                    W(e, u);
                else if (t === P)
                    B(e, o);
                else if (t === O)
                    W(e, o)
            }
            function Y(n, t) {
                try {
                    t(function t(e) {
                        q(n, e)
                    }, function t(e) {
                        W(n, e)
                    })
                } catch (t) {
                    W(n, t)
                }
            }
            var K = 0;
            function U() {
                return K++
            }
            function X(t) {
                t[x] = K++;
                t._state = undefined;
                t._result = undefined;
                t._subscribers = []
            }
            function J() {
                return new Error("Array Methods must be provided an Array")
            }
            var z = function() {
                function t(t, e) {
                    this._instanceConstructor = t;
                    this.promise = new t(j);
                    if (!this.promise[x])
                        X(this.promise);
                    if (n(e)) {
                        this.length = e.length;
                        this._remaining = e.length;
                        this._result = new Array(this.length);
                        if (this.length === 0)
                            B(this.promise, this._result);
                        else {
                            this.length = this.length || 0;
                            this._enumerate(e);
                            if (this._remaining === 0)
                                B(this.promise, this._result)
                        }
                    } else
                        W(this.promise, J())
                }
                t.prototype._enumerate = function t(e) {
                    for (var n = 0; this._state === A && n < e.length; n++)
                        this._eachEntry(e[n], n)
                }
                ;
                t.prototype._eachEntry = function t(e, n) {
                    var r = this._instanceConstructor;
                    var i = r.resolve;
                    if (i === L) {
                        var o = void 0;
                        var u = void 0;
                        var a = false;
                        try {
                            o = e.then
                        } catch (t) {
                            a = true;
                            u = t
                        }
                        if (o === E && e._state !== A)
                            this._settledAt(e._state, n, e._result);
                        else if (typeof o !== "function") {
                            this._remaining--;
                            this._result[n] = e
                        } else if (r === et) {
                            var s = new r(j);
                            if (a)
                                W(s, u);
                            else
                                D(s, e, o);
                            this._willSettleAt(s, n)
                        } else
                            this._willSettleAt(new r(function(t) {
                                return t(e)
                            }
                            ), n)
                    } else
                        this._willSettleAt(i(e), n)
                }
                ;
                t.prototype._settledAt = function t(e, n, r) {
                    var i = this.promise;
                    if (i._state === A) {
                        this._remaining--;
                        if (e === O)
                            W(i, r);
                        else
                            this._result[n] = r
                    }
                    if (this._remaining === 0)
                        B(i, this._result)
                }
                ;
                t.prototype._willSettleAt = function t(e, n) {
                    var r = this;
                    H(e, undefined, function(t) {
                        return r._settledAt(P, n, t)
                    }, function(t) {
                        return r._settledAt(O, n, t)
                    })
                }
                ;
                return t
            }();
            function G(t) {
                return new z(this,t).promise
            }
            function Q(i) {
                var o = this;
                if (!n(i))
                    return new o(function(t, e) {
                        return e(new TypeError("You must pass an array to race."))
                    }
                    );
                else
                    return new o(function(t, e) {
                        var n = i.length;
                        for (var r = 0; r < n; r++)
                            o.resolve(i[r]).then(t, e)
                    }
                    )
            }
            function Z(t) {
                var e = this;
                var n = new e(j);
                W(n, t);
                return n
            }
            function $() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }
            function tt() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }
            var et = function() {
                function e(t) {
                    this[x] = U();
                    this._result = this._state = undefined;
                    this._subscribers = [];
                    if (j !== t) {
                        typeof t !== "function" && $();
                        this instanceof e ? Y(this, t) : tt()
                    }
                }
                e.prototype.catch = function t(e) {
                    return this.then(null, e)
                }
                ;
                e.prototype.finally = function t(e) {
                    var n = this;
                    var r = n.constructor;
                    if (s(e))
                        return n.then(function(t) {
                            return r.resolve(e()).then(function() {
                                return t
                            })
                        }, function(t) {
                            return r.resolve(e()).then(function() {
                                throw t
                            })
                        });
                    return n.then(e, e)
                }
                ;
                return e
            }();
            function nt() {
                var t = void 0;
                if (typeof it !== "undefined")
                    t = it;
                else if (typeof self !== "undefined")
                    t = self;
                else
                    try {
                        t = Function("return this")()
                    } catch (t) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                var e = t.Promise;
                if (e) {
                    var n = null;
                    try {
                        n = Object.prototype.toString.call(e.resolve())
                    } catch (t) {}
                    if (n === "[object Promise]" && !e.cast)
                        return
                }
                t.Promise = et
            }
            return et.prototype.then = E,
            et.all = G,
            et.race = Q,
            et.resolve = L,
            et.reject = Z,
            et._setScheduler = a,
            et._setAsap = c,
            et._asap = u,
            et.polyfill = nt,
            et.Promise = et
        }()
    }
    , function(t, e) {
        var n, r, t = t.exports = {};
        function i() {
            throw Error("setTimeout has not been defined")
        }
        function o() {
            throw Error("clearTimeout has not been defined")
        }
        function u(e) {
            if (n === setTimeout)
                return setTimeout(e, 0);
            if ((n === i || !n) && setTimeout)
                return (n = setTimeout)(e, 0);
            try {
                return n(e, 0)
            } catch (t) {
                try {
                    return n.call(null, e, 0)
                } catch (t) {
                    return n.call(this, e, 0)
                }
            }
        }
        !function() {
            try {
                n = "function" == typeof setTimeout ? setTimeout : i
            } catch (t) {
                n = i
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : o
            } catch (t) {
                r = o
            }
        }();
        var a, s = [], c = !1, f = -1;
        function l() {
            c && a && (c = !1,
            a.length ? s = a.concat(s) : f = -1,
            s.length && d())
        }
        function d() {
            if (!c) {
                var t = u(l);
                c = !0;
                for (var e = s.length; e; ) {
                    for (a = s,
                    s = []; ++f < e; )
                        a && a[f].run();
                    f = -1,
                    e = s.length
                }
                a = null,
                c = !1,
                function(e) {
                    if (r === clearTimeout)
                        return clearTimeout(e);
                    if ((r === o || !r) && clearTimeout)
                        return (r = clearTimeout)(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(t)
            }
        }
        function p(t, e) {
            this.fun = t,
            this.array = e
        }
        function v() {}
        t.nextTick = function(t) {
            var e = Array(arguments.length - 1);
            if (1 < arguments.length)
                for (var n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
            s.push(new p(t,e)),
            1 !== s.length || c || u(d)
        }
        ,
        p.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        t.title = "browser",
        t.browser = !0,
        t.env = {},
        t.argv = [],
        t.version = "",
        t.versions = {},
        t.on = v,
        t.addListener = v,
        t.once = v,
        t.off = v,
        t.removeListener = v,
        t.removeAllListeners = v,
        t.emit = v,
        t.prependListener = v,
        t.prependOnceListener = v,
        t.listeners = function(t) {
            return []
        }
        ,
        t.binding = function(t) {
            throw Error("process.binding is not supported")
        }
        ,
        t.cwd = function() {
            return "/"
        }
        ,
        t.chdir = function(t) {
            throw Error("process.chdir is not supported")
        }
        ,
        t.umask = function() {
            return 0
        }
    }
    , function(y, g, t) {
        var w, b;
        w = t(0),
        function() {
            var r = ("undefined" == typeof window || window !== this) && void 0 !== w && null != w ? w : this
              , e = "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, n) {
                t != Array.prototype && t != Object.prototype && (t[e] = n.value)
            }
            ;
            function n() {
                n = function() {}
                ,
                r.Symbol || (r.Symbol = t)
            }
            var i = 0;
            function t(t) {
                return "jscomp_symbol_" + (t || "") + i++
            }
            function o() {
                n();
                var t = (t = r.Symbol.iterator) || (r.Symbol.iterator = r.Symbol("iterator"));
                "function" != typeof Array.prototype[t] && e(Array.prototype, t, {
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        return u(this)
                    }
                }),
                o = function() {}
            }
            function u(t) {
                var e, n = 0;
                return e = function() {
                    return n < t.length ? {
                        done: !1,
                        value: t[n++]
                    } : {
                        done: !0
                    }
                }
                ,
                o(),
                (e = {
                    next: e
                })[r.Symbol.iterator] = function() {
                    return this
                }
                ,
                e
            }
            function l(t) {
                o();
                var e = t[Symbol.iterator];
                return e ? e.call(t) : u(t)
            }
            function d(t) {
                if (!(t instanceof Array)) {
                    t = l(t);
                    for (var e, n = []; !(e = t.next()).done; )
                        n.push(e.value);
                    t = n
                }
                return t
            }
            var p = 0;
            var a = "img script iframe link audio video source".split(" ");
            function v(n) {
                var t = new MutationObserver(function(t) {
                    for (var e = (t = l(t)).next(); !e.done; e = t.next())
                        ("childList" == (e = e.value).type && function t(e, n) {
                            for (var r = (e = l(e)).next(); !r.done; r = e.next())
                                if (r = r.value,
                                n.includes(r.nodeName.toLowerCase()) || t(r.children, n))
                                    return 1
                        }(e.addedNodes, a) || "attributes" == e.type && a.includes(e.target.tagName.toLowerCase())) && n(e)
                }
                );
                return t.observe(document, {
                    attributes: !0,
                    childList: !0,
                    subtree: !0,
                    attributeFilter: ["href", "src"]
                }),
                t
            }
            function h(t, e) {
                if (2 < t.length)
                    return performance.now();
                for (var n = [], r = (e = l(e)).next(); !r.done; r = e.next())
                    r = r.value,
                    n.push({
                        timestamp: r.start,
                        type: "requestStart"
                    }),
                    n.push({
                        timestamp: r.end,
                        type: "requestEnd"
                    });
                for (r = (e = l(t)).next(); !r.done; r = e.next())
                    n.push({
                        timestamp: r.value,
                        type: "requestStart"
                    });
                for (n.sort(function(t, e) {
                    return t.timestamp - e.timestamp
                }),
                t = t.length,
                e = n.length - 1; 0 <= e; e--)
                    switch (r = n[e],
                    r.type) {
                    case "requestStart":
                        t--;
                        break;
                    case "requestEnd":
                        if (2 < ++t)
                            return r.timestamp;
                        break;
                    default:
                        throw Error("Internal Error: This should never happen")
                    }
                return 0
            }
            function s(t) {
                this.w = !!(t = t || {}).useMutationObserver,
                this.u = t.minValue || null,
                t = window.__tti && window.__tti.e;
                var i, o, u, a, s, c, f, r, e = window.__tti && window.__tti.o;
                this.a = t ? t.map(function(t) {
                    return {
                        start: t.startTime,
                        end: t.startTime + t.duration
                    }
                }) : [],
                e && e.disconnect(),
                this.b = [],
                this.f = new Map,
                this.j = null,
                this.v = -1 / 0,
                this.i = !1,
                this.h = this.c = this.s = null,
                i = this.m.bind(this),
                o = this.l.bind(this),
                u = XMLHttpRequest.prototype.send,
                a = p++,
                XMLHttpRequest.prototype.send = function(t) {
                    for (var e = [], n = 0; n < arguments.length; ++n)
                        e[+n] = arguments[n];
                    var r = this;
                    return i(a),
                    this.addEventListener("readystatechange", function() {
                        4 === r.readyState && o(a)
                    }),
                    u.apply(this, e)
                }
                ,
                s = this.m.bind(this),
                c = this.l.bind(this),
                f = fetch,
                fetch = function(t) {
                    for (var i = [], e = 0; e < arguments.length; ++e)
                        i[+e] = arguments[e];
                    return new Promise(function(e, n) {
                        var r = p++;
                        s(r),
                        f.apply(null, [].concat(d(i))).then(function(t) {
                            c(r),
                            e(t)
                        }, function(t) {
                            c(t),
                            n(t)
                        })
                    }
                    )
                }
                ,
                (r = this).c = new PerformanceObserver(function(t) {
                    for (var e, n = (t = l(t.getEntries())).next(); !n.done; n = t.next())
                        "resource" === (n = n.value).entryType && (r.b.push({
                            start: n.fetchStart,
                            end: n.responseEnd
                        }),
                        m(r, h(r.g, r.b) + 5e3)),
                        "longtask" === n.entryType && (e = n.startTime + n.duration,
                        r.a.push({
                            start: n.startTime,
                            end: e
                        }),
                        m(r, e + 5e3))
                }
                ),
                r.c.observe({
                    entryTypes: ["longtask", "resource"]
                }),
                this.w && (this.h = v(this.B.bind(this)))
            }
            function c(t) {
                t.i = !0;
                var e = 0 < t.a.length ? t.a[t.a.length - 1].end : 0
                  , n = h(t.g, t.b);
                m(t, Math.max(n + 5e3, e))
            }
            function m(o, t) {
                !o.i || o.v > t || (clearTimeout(o.j),
                o.j = setTimeout(function() {
                    var t = performance.timing.navigationStart
                      , e = h(o.g, o.b)
                      , t = (window.a && window.a.A ? 1e3 * window.a.A().C - t : 0) || performance.timing.domContentLoadedEventEnd - t
                      , n = o.u || (performance.timing.domContentLoadedEventEnd ? (n = performance.timing).domContentLoadedEventEnd - n.navigationStart : null)
                      , r = performance.now();
                    null === n && m(o, Math.max(e + 5e3, r + 1e3));
                    var i = o.a;
                    (e = r - e < 5e3 ? null : r - (e = i.length ? i[i.length - 1].end : t) < 5e3 ? null : Math.max(e, n)) && (o.s(e),
                    clearTimeout(o.j),
                    o.i = !1,
                    o.c && o.c.disconnect(),
                    o.h && o.h.disconnect()),
                    m(o, performance.now() + 1e3)
                }, t - performance.now()),
                o.v = t)
            }
            s.prototype.getFirstConsistentlyInteractive = function() {
                var e = this;
                return new Promise(function(t) {
                    e.s = t,
                    "complete" == document.readyState ? c(e) : window.addEventListener("load", function() {
                        c(e)
                    })
                }
                )
            }
            ,
            s.prototype.m = function(t) {
                this.f.set(t, performance.now())
            }
            ,
            s.prototype.l = function(t) {
                this.f.delete(t)
            }
            ,
            s.prototype.B = function() {
                m(this, performance.now() + 5e3)
            }
            ,
            r.Object.defineProperties(s.prototype, {
                g: {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return [].concat(d(this.f.values()))
                    }
                }
            });
            var f = {
                getFirstConsistentlyInteractive: function(t) {
                    return t = t || {},
                    "PerformanceLongTaskTiming"in window ? new s(t).getFirstConsistentlyInteractive() : Promise.resolve(null)
                }
            };
            y.exports ? y.exports = f : void 0 === (b = function() {
                return f
            }
            .apply(g, [])) || (y.exports = b)
        }()
    }
    , function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, "getCLS", function() {
            return _
        }),
        n.d(e, "getFCP", function() {
            return g
        }),
        n.d(e, "getFID", function() {
            return x
        }),
        n.d(e, "getLCP", function() {
            return A
        }),
        n.d(e, "getTTFB", function() {
            return P
        });
        function c(t, e) {
            return {
                name: t,
                value: void 0 === e ? -1 : e,
                delta: 0,
                entries: [],
                id: "v2-".concat(Date.now(), "-").concat(1e12 + Math.floor(8999999999999 * Math.random()))
            }
        }
        function f(t, e) {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                    if ("first-input" === t && !("PerformanceEventTiming"in self))
                        return;
                    var n = new PerformanceObserver(function(t) {
                        return t.getEntries().map(e)
                    }
                    );
                    return n.observe({
                        type: t,
                        buffered: !0
                    }),
                    n
                }
            } catch (t) {}
        }
        function l(e, n) {
            function r(t) {
                "pagehide" !== t.type && "hidden" !== document.visibilityState || (e(t),
                n && (removeEventListener("visibilitychange", r, !0),
                removeEventListener("pagehide", r, !0)))
            }
            addEventListener("visibilitychange", r, !0),
            addEventListener("pagehide", r, !0)
        }
        function d(e) {
            addEventListener("pageshow", function(t) {
                t.persisted && e(t)
            }, !0)
        }
        function p(e, n, r) {
            var i;
            return function(t) {
                0 <= n.value && (t || r) && (n.delta = n.value - (i || 0),
                !n.delta && void 0 !== i || (i = n.value,
                e(n)))
            }
        }
        function r() {
            return "hidden" === document.visibilityState ? 0 : 1 / 0
        }
        function i() {
            l(function(t) {
                t = t.timeStamp;
                y = t
            }, !0)
        }
        function s() {
            return y < 0 && (y = r(),
            i(),
            d(function() {
                setTimeout(function() {
                    y = r(),
                    i()
                }, 0)
            })),
            {
                get firstHiddenTime() {
                    return y
                }
            }
        }
        function a(t, e) {
            v || (v = e,
            h = t,
            u = new Date,
            L(removeEventListener),
            E())
        }
        function o(t) {
            var e, n, r, i;
            function o() {
                a(n, r),
                i()
            }
            function u() {
                i()
            }
            t.cancelable && (e = (1e12 < t.timeStamp ? new Date : performance.now()) - t.timeStamp,
            "pointerdown" == t.type ? (n = e,
            r = t,
            i = function() {
                removeEventListener("pointerup", o, T),
                removeEventListener("pointercancel", u, T)
            }
            ,
            addEventListener("pointerup", o, T),
            addEventListener("pointercancel", u, T)) : a(e, t))
        }
        var v, h, u, m, y = -1, g = function(e, n) {
            function t(t) {
                "first-contentful-paint" === t.name && (a && a.disconnect(),
                t.startTime < i.firstHiddenTime && (o.value = t.startTime,
                o.entries.push(t),
                r(!0)))
            }
            var r, i = s(), o = c("FCP"), u = window.performance && performance.getEntriesByName && performance.getEntriesByName("first-contentful-paint")[0], a = u ? null : f("paint", t);
            (u || a) && (r = p(e, o, n),
            u && t(u),
            d(function(t) {
                o = c("FCP"),
                r = p(e, o, n),
                requestAnimationFrame(function() {
                    requestAnimationFrame(function() {
                        o.value = performance.now() - t.timeStamp,
                        r(!0)
                    })
                })
            }))
        }, w = !1, b = -1, _ = function(e, t) {
            w || (g(function(t) {
                b = t.value
            }),
            w = !0);
            function n(t) {
                -1 < b && e(t)
            }
            function r(t) {
                var e, n;
                t.hadRecentInput || (e = a[0],
                n = a[a.length - 1],
                u && t.startTime - n.startTime < 1e3 && t.startTime - e.startTime < 5e3 ? (u += t.value,
                a.push(t)) : (u = t.value,
                a = [t]),
                u > o.value && (o.value = u,
                o.entries = a,
                i()))
            }
            var i, o = c("CLS", 0), u = 0, a = [], s = f("layout-shift", r);
            s && (i = p(n, o, t),
            l(function() {
                s.takeRecords().map(r),
                i(!0)
            }),
            d(function() {
                b = -1,
                o = c("CLS", u = 0),
                i = p(n, o, t)
            }))
        }, T = {
            passive: !0,
            capture: !0
        }, S = new Date, E = function() {
            var e;
            0 <= h && h < u - S && (e = {
                entryType: "first-input",
                name: v.type,
                target: v.target,
                cancelable: v.cancelable,
                startTime: v.timeStamp,
                processingStart: v.timeStamp + h
            },
            m.forEach(function(t) {
                t(e)
            }),
            m = [])
        }, L = function(e) {
            ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(t) {
                return e(t, o, T)
            })
        }, x = function(t, e) {
            function n(t) {
                t.startTime < r.firstHiddenTime && (i.value = t.processingStart - t.startTime,
                i.entries.push(t),
                u(!0))
            }
            var r = s()
              , i = c("FID")
              , o = f("first-input", n)
              , u = p(t, i, e);
            o && l(function() {
                o.takeRecords().map(n),
                o.disconnect()
            }, !0),
            o && d(function() {
                i = c("FID"),
                u = p(t, i, e),
                m = [],
                h = -1,
                v = null,
                L(addEventListener),
                m.push(n),
                E()
            })
        }, j = {}, A = function(e, n) {
            function t(t) {
                var e = t.startTime;
                e < o.firstHiddenTime && (u.value = e,
                u.entries.push(t),
                r())
            }
            var r, i, o = s(), u = c("LCP"), a = f("largest-contentful-paint", t);
            a && (r = p(e, u, n),
            i = function() {
                j[u.id] || (a.takeRecords().map(t),
                a.disconnect(),
                j[u.id] = !0,
                r(!0))
            }
            ,
            ["keydown", "click"].forEach(function(t) {
                addEventListener(t, i, {
                    once: !0,
                    capture: !0
                })
            }),
            l(i, !0),
            d(function(t) {
                u = c("LCP"),
                r = p(e, u, n),
                requestAnimationFrame(function() {
                    requestAnimationFrame(function() {
                        u.value = performance.now() - t.timeStamp,
                        j[u.id] = !0,
                        r(!0)
                    })
                })
            }))
        }, P = function(e) {
            var n = c("TTFB")
              , t = function() {
                try {
                    var t = performance.getEntriesByType("navigation")[0] || function() {
                        var t, e = performance.timing, n = {
                            entryType: "navigation",
                            startTime: 0
                        };
                        for (t in e)
                            "navigationStart" !== t && "toJSON" !== t && (n[t] = Math.max(e[t] - e.navigationStart, 0));
                        return n
                    }();
                    if (n.value = n.delta = t.responseStart,
                    n.value < 0 || n.value > performance.now())
                        return;
                    n.entries = [t],
                    e(n)
                } catch (t) {}
            };
            "complete" === document.readyState ? setTimeout(t, 0) : addEventListener("load", function() {
                return setTimeout(t, 0)
            })
        }
    }
    , function(t, e, n) {
        "use strict";
        e.error = void 0;
        n(8);
        var r = n(9)
          , n = function() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            (0,
            r.getWindow)().console;
            return function() {}
        }
          , n = (n(),
        function() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            (0,
            r.getWindow)().console;
            return function() {}
        }
        )
          , n = n();
        e.error = n
    }
    , function(t, e, n) {
        "use strict";
        var r = !1;
        e.isDebug = function() {
            return r
        }
    }
    , function(t, e, n) {
        "use strict";
        e.getWindow = void 0;
        n(10);
        function r() {
            return a.window
        }
        var i, o, u, a = (i = "",
        u = {
            document: o = Object.create({
                get cookie() {
                    return i
                },
                set cookie(t) {
                    i = t
                }
            })
        },
        n = {},
        "undefined" == typeof window ? {
            window: u,
            document: o,
            navigator: n
        } : {
            window: window || u,
            document: window.document || o,
            navigator: navigator || n
        });
        e.getWindow = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            for (var n in t)
                if (Object.prototype.hasOwnProperty.call(t, n)) {
                    var r = t[n];
                    try {
                        if (e(n, r))
                            return t
                    } catch (t) {}
                }
            return t
        }
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ;
        t.exports = {
            cleanKeyNames: null,
            map: r,
            merge: null,
            parseString: null,
            parseValue: null,
            stringify: null,
            removeUndefined: function t(e) {
                for (var n in e)
                    void 0 === e[n] ? delete e[n] : "object" === i(e[n]) && (t(e[n]),
                    0 === Object.keys(e[n]).length && delete e[n])
            }
        }
    }
    ],
    r = {},
    i.m = n,
    i.c = r,
    i.d = function(t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }
    ,
    i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(e, t) {
        if (1 & t && (e = i(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (i.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                i.d(n, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return n
    }
    ,
    i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        }
        : function() {
            return t
        }
        ;
        return i.d(e, "a", e),
        e
    }
    ,
    i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    i.p = "",
    i(i.s = 1);
    function i(t) {
        if (r[t])
            return r[t].exports;
        var e = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return n[t].call(e.exports, e, e.exports, i),
        e.l = !0,
        e.exports
    }
    var n, r
});
//# sourceMappingURL=tti.min.js.map
