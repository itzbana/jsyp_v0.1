/*! For license information please see npm-gsap.js.LICENSE.txt */
"use strict";
(self.webpackChunkcreatorspc = self.webpackChunkcreatorspc || []).push([[7924], {
    295: (t, e, n) => {
        n.d(e, {
            c: () => h
        });
        var r, i, o = n(8576), s = function() {
            return r || "undefined" != typeof window && (r = window.gsap) && r.registerPlugin && r
        }, a = function() {
            (r = s()) ? (r.registerEase("_CE", h.create),
            i = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
        }, u = function(t) {
            return ~~(1e3 * t + (t < 0 ? -.5 : .5)) / 1e3
        }, l = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi, c = /[cLlsSaAhHvVtTqQ]/g, f = function t(e, n, r, i, o, s, a, u, l, c, f) {
            var h, p = (e + r) / 2, d = (n + i) / 2, g = (r + o) / 2, D = (i + s) / 2, v = (o + a) / 2, m = (s + u) / 2, _ = (p + g) / 2, y = (d + D) / 2, x = (g + v) / 2, C = (D + m) / 2, w = (_ + x) / 2, b = (y + C) / 2, E = a - e, F = u - n, T = Math.abs((r - a) * F - (i - u) * E), M = Math.abs((o - a) * F - (s - u) * E);
            return c || (c = [{
                x: e,
                y: n
            }, {
                x: a,
                y: u
            }],
            f = 1),
            c.splice(f || c.length - 1, 0, {
                x: w,
                y: b
            }),
            (T + M) * (T + M) > l * (E * E + F * F) && (h = c.length,
            t(e, n, p, d, _, y, w, b, l, c, f),
            t(w, b, x, C, v, m, a, u, l, c, f + 1 + (c.length - h))),
            c
        }, h = function() {
            function t(t, e, n) {
                i || a(),
                this.id = t,
                this.setData(e, n)
            }
            var e = t.prototype;
            return e.setData = function(t, e) {
                e = e || {};
                var n, i, s, a, u, h, p, d, g, D = (t = t || "0,0,1,1").match(l), v = 1, m = [], _ = [], y = e.precision || 1, x = y <= 1;
                if (this.data = t,
                (c.test(t) || ~t.indexOf("M") && t.indexOf("C") < 0) && (D = (0,
                o.od)(t)[0]),
                4 === (n = D.length))
                    D.unshift(0, 0),
                    D.push(1, 1),
                    n = 8;
                else if ((n - 2) % 6)
                    throw "Invalid CustomEase";
                for (0 == +D[0] && 1 == +D[n - 2] || function(t, e, n) {
                    n || 0 === n || (n = Math.max(+t[t.length - 1], +t[1]));
                    var r, i = -1 * +t[0], o = -n, s = t.length, a = 1 / (+t[s - 2] + i), u = -e || (Math.abs(+t[s - 1] - +t[1]) < .01 * (+t[s - 2] - +t[0]) ? function(t) {
                        var e, n = t.length, r = 1e20;
                        for (e = 1; e < n; e += 6)
                            +t[e] < r && (r = +t[e]);
                        return r
                    }(t) + o : +t[s - 1] + o);
                    for (u = u ? 1 / u : -a,
                    r = 0; r < s; r += 2)
                        t[r] = (+t[r] + i) * a,
                        t[r + 1] = (+t[r + 1] + o) * u
                }(D, e.height, e.originY),
                this.segment = D,
                a = 2; a < n; a += 6)
                    i = {
                        x: +D[a - 2],
                        y: +D[a - 1]
                    },
                    s = {
                        x: +D[a + 4],
                        y: +D[a + 5]
                    },
                    m.push(i, s),
                    f(i.x, i.y, +D[a], +D[a + 1], +D[a + 2], +D[a + 3], s.x, s.y, 1 / (2e5 * y), m, m.length - 1);
                for (n = m.length,
                a = 0; a < n; a++)
                    p = m[a],
                    d = m[a - 1] || p,
                    (p.x > d.x || d.y !== p.y && d.x === p.x || p === d) && p.x <= 1 ? (d.cx = p.x - d.x,
                    d.cy = p.y - d.y,
                    d.n = p,
                    d.nx = p.x,
                    x && a > 1 && Math.abs(d.cy / d.cx - m[a - 2].cy / m[a - 2].cx) > 2 && (x = 0),
                    d.cx < v && (d.cx ? v = d.cx : (d.cx = .001,
                    a === n - 1 && (d.x -= .001,
                    v = Math.min(v, .001),
                    x = 0)))) : (m.splice(a--, 1),
                    n--);
                if (u = 1 / (n = 1 / v + 1 | 0),
                h = 0,
                p = m[0],
                x) {
                    for (a = 0; a < n; a++)
                        g = a * u,
                        p.nx < g && (p = m[++h]),
                        i = p.y + (g - p.x) / p.cx * p.cy,
                        _[a] = {
                            x: g,
                            cx: u,
                            y: i,
                            cy: 0,
                            nx: 9
                        },
                        a && (_[a - 1].cy = i - _[a - 1].y);
                    h = m[m.length - 1],
                    _[n - 1].cy = h.y - i,
                    _[n - 1].cx = h.x - _[_.length - 1].x
                } else {
                    for (a = 0; a < n; a++)
                        p.nx < a * u && (p = m[++h]),
                        _[a] = p;
                    h < m.length - 1 && (_[a - 1] = m[m.length - 2])
                }
                return this.ease = function(t) {
                    var e = _[t * n | 0] || _[n - 1];
                    return e.nx < t && (e = e.n),
                    e.y + (t - e.x) / e.cx * e.cy
                }
                ,
                this.ease.custom = this,
                this.id && r && r.registerEase(this.id, this.ease),
                this
            }
            ,
            e.getSVGData = function(e) {
                return t.getSVGData(this, e)
            }
            ,
            t.create = function(e, n, r) {
                return new t(e,n,r).ease
            }
            ,
            t.register = function(t) {
                r = t,
                a()
            }
            ,
            t.get = function(t) {
                return r.parseEase(t)
            }
            ,
            t.getSVGData = function(e, n) {
                var i, s, a, l, c, f, h, p, d, g, D = (n = n || {}).width || 100, v = n.height || 100, m = n.x || 0, _ = (n.y || 0) + v, y = r.utils.toArray(n.path)[0];
                if (n.invert && (v = -v,
                _ = 0),
                "string" == typeof e && (e = r.parseEase(e)),
                e.custom && (e = e.custom),
                e instanceof t)
                    i = (0,
                    o.e_)((0,
                    o.MJ)([e.segment], D, 0, 0, -v, m, _));
                else {
                    for (i = [m, _],
                    l = 1 / (h = Math.max(5, 200 * (n.precision || 1))),
                    p = 5 / (h += 2),
                    d = u(m + l * D),
                    s = ((g = u(_ + e(l) * -v)) - _) / (d - m),
                    a = 2; a < h; a++)
                        c = u(m + a * l * D),
                        f = u(_ + e(a * l) * -v),
                        (Math.abs((f - g) / (c - d) - s) > p || a === h - 1) && (i.push(d, g),
                        s = (f - g) / (c - d)),
                        d = c,
                        g = f;
                    i = "M" + i.join(",")
                }
                return y && y.setAttribute("d", i),
                i
            }
            ,
            t
        }();
        h.version = "3.12.7",
        h.headless = !0,
        s() && r.registerPlugin(h)
    }
    ,
    4680: (t, e, n) => {
        n.d(e, {
            w: () => Tt
        });
        var r = n(2816);
        function i(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        var o, s, a, u, l, c, f, h, p, d, g, D, v, m, _, y, x, C, w, b, E, F, T = 0, M = function() {
            return "undefined" != typeof window
        }, A = function() {
            return o || M() && (o = window.gsap) && o.registerPlugin && o
        }, k = function(t) {
            return "function" == typeof t
        }, S = function(t) {
            return "object" == typeof t
        }, P = function(t) {
            return void 0 === t
        }, O = function() {
            return !1
        }, B = "transform", L = "transformOrigin", N = function(t) {
            return Math.round(1e4 * t) / 1e4
        }, R = Array.isArray, Y = function(t, e) {
            var n = a.createElementNS ? a.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : a.createElement(t);
            return n.style ? n : a.createElement(t)
        }, X = 180 / Math.PI, z = 1e20, I = new r.S6, H = Date.now || function() {
            return (new Date).getTime()
        }
        , W = [], q = {}, V = 0, U = /^(?:a|input|textarea|button|select)$/i, j = 0, K = {}, G = {}, Z = function(t, e) {
            var n, r = {};
            for (n in t)
                r[n] = e ? t[n] * e : t[n];
            return r
        }, $ = function t(e, n) {
            for (var r, i = e.length; i--; )
                n ? e[i].style.touchAction = n : e[i].style.removeProperty("touch-action"),
                (r = e[i].children) && r.length && t(r, n)
        }, Q = function() {
            return W.forEach((function(t) {
                return t()
            }
            ))
        }, J = function() {
            return !W.length && o.ticker.remove(Q)
        }, tt = function(t) {
            for (var e = W.length; e--; )
                W[e] === t && W.splice(e, 1);
            o.to(J, {
                overwrite: !0,
                delay: 15,
                duration: 0,
                onComplete: J,
                data: "_draggable"
            })
        }, et = function(t, e, n, r) {
            if (t.addEventListener) {
                var i = v[e];
                r = r || (g ? {
                    passive: !1
                } : null),
                t.addEventListener(i || e, n, r),
                i && e !== i && t.addEventListener(e, n, r)
            }
        }, nt = function(t, e, n, r) {
            if (t.removeEventListener) {
                var i = v[e];
                t.removeEventListener(i || e, n, r),
                i && e !== i && t.removeEventListener(e, n, r)
            }
        }, rt = function(t) {
            t.preventDefault && t.preventDefault(),
            t.preventManipulation && t.preventManipulation()
        }, it = function t(e) {
            m = e.touches && T < e.touches.length,
            nt(e.target, "touchend", t)
        }, ot = function(t) {
            m = t.touches && T < t.touches.length,
            et(t.target, "touchend", it)
        }, st = function(t) {
            return s.pageYOffset || t.scrollTop || t.documentElement.scrollTop || t.body.scrollTop || 0
        }, at = function(t) {
            return s.pageXOffset || t.scrollLeft || t.documentElement.scrollLeft || t.body.scrollLeft || 0
        }, ut = function t(e, n) {
            et(e, "scroll", n),
            ct(e.parentNode) || t(e.parentNode, n)
        }, lt = function t(e, n) {
            nt(e, "scroll", n),
            ct(e.parentNode) || t(e.parentNode, n)
        }, ct = function(t) {
            return !(t && t !== u && 9 !== t.nodeType && t !== a.body && t !== s && t.nodeType && t.parentNode)
        }, ft = function(t, e) {
            var n = "x" === e ? "Width" : "Height"
              , r = "scroll" + n
              , i = "client" + n;
            return Math.max(0, ct(t) ? Math.max(u[r], l[r]) - (s["inner" + n] || u[i] || l[i]) : t[r] - t[i])
        }, ht = function t(e, n) {
            var r = ft(e, "x")
              , i = ft(e, "y");
            ct(e) ? e = G : t(e.parentNode, n),
            e._gsMaxScrollX = r,
            e._gsMaxScrollY = i,
            n || (e._gsScrollX = e.scrollLeft || 0,
            e._gsScrollY = e.scrollTop || 0)
        }, pt = function(t, e, n) {
            var r = t.style;
            r && (P(r[e]) && (e = p(e, t) || e),
            null == n ? r.removeProperty && r.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase()) : r[e] = n)
        }, dt = function(t) {
            return s.getComputedStyle(t instanceof Element ? t : t.host || (t.parentNode || {}).host || t)
        }, gt = {}, Dt = function(t) {
            if (t === s)
                return gt.left = gt.top = 0,
                gt.width = gt.right = u.clientWidth || t.innerWidth || l.clientWidth || 0,
                gt.height = gt.bottom = (t.innerHeight || 0) - 20 < u.clientHeight ? u.clientHeight : t.innerHeight || l.clientHeight || 0,
                gt;
            var e = t.ownerDocument || a
              , n = P(t.pageX) ? t.nodeType || P(t.left) || P(t.top) ? d(t)[0].getBoundingClientRect() : t : {
                left: t.pageX - at(e),
                top: t.pageY - st(e),
                right: t.pageX - at(e) + 1,
                bottom: t.pageY - st(e) + 1
            };
            return P(n.right) && !P(n.width) ? (n.right = n.left + n.width,
            n.bottom = n.top + n.height) : P(n.width) && (n = {
                width: n.right - n.left,
                height: n.bottom - n.top,
                right: n.right,
                left: n.left,
                bottom: n.bottom,
                top: n.top
            }),
            n
        }, vt = function(t, e, n) {
            var r, i = t.vars, o = i[n], s = t._listeners[e];
            return k(o) && (r = o.apply(i.callbackScope || t, i[n + "Params"] || [t.pointerEvent])),
            s && !1 === t.dispatchEvent(e) && (r = !1),
            r
        }, mt = function(t, e) {
            var n, r, i, o = d(t)[0];
            return o.nodeType || o === s ? yt(o, e) : P(t.left) ? {
                left: r = t.min || t.minX || t.minRotation || 0,
                top: n = t.min || t.minY || 0,
                width: (t.max || t.maxX || t.maxRotation || 0) - r,
                height: (t.max || t.maxY || 0) - n
            } : (i = {
                x: 0,
                y: 0
            },
            {
                left: t.left - i.x,
                top: t.top - i.y,
                width: t.width,
                height: t.height
            })
        }, _t = {}, yt = function(t, e) {
            e = d(e)[0];
            var n, i, o, u, l, c, f, h, p, g, D, v, m, _ = t.getBBox && t.ownerSVGElement, y = t.ownerDocument || a;
            if (t === s)
                o = st(y),
                i = (n = at(y)) + (y.documentElement.clientWidth || t.innerWidth || y.body.clientWidth || 0),
                u = o + ((t.innerHeight || 0) - 20 < y.documentElement.clientHeight ? y.documentElement.clientHeight : t.innerHeight || y.body.clientHeight || 0);
            else {
                if (e === s || P(e))
                    return t.getBoundingClientRect();
                n = o = 0,
                _ ? (D = (g = t.getBBox()).width,
                v = g.height) : (t.viewBox && (g = t.viewBox.baseVal) && (n = g.x || 0,
                o = g.y || 0,
                D = g.width,
                v = g.height),
                D || (g = "border-box" === (m = dt(t)).boxSizing,
                D = (parseFloat(m.width) || t.clientWidth || 0) + (g ? 0 : parseFloat(m.borderLeftWidth) + parseFloat(m.borderRightWidth)),
                v = (parseFloat(m.height) || t.clientHeight || 0) + (g ? 0 : parseFloat(m.borderTopWidth) + parseFloat(m.borderBottomWidth)))),
                i = D,
                u = v
            }
            return t === e ? {
                left: n,
                top: o,
                width: i - n,
                height: u - o
            } : (c = (l = (0,
            r.qK)(e, !0).multiply((0,
            r.qK)(t))).apply({
                x: n,
                y: o
            }),
            f = l.apply({
                x: i,
                y: o
            }),
            h = l.apply({
                x: i,
                y: u
            }),
            p = l.apply({
                x: n,
                y: u
            }),
            {
                left: n = Math.min(c.x, f.x, h.x, p.x),
                top: o = Math.min(c.y, f.y, h.y, p.y),
                width: Math.max(c.x, f.x, h.x, p.x) - n,
                height: Math.max(c.y, f.y, h.y, p.y) - o
            })
        }, xt = function(t, e, n, r, i, o) {
            var s, a, u, l = {};
            if (e)
                if (1 !== i && e instanceof Array) {
                    if (l.end = s = [],
                    u = e.length,
                    S(e[0]))
                        for (a = 0; a < u; a++)
                            s[a] = Z(e[a], i);
                    else
                        for (a = 0; a < u; a++)
                            s[a] = e[a] * i;
                    n += 1.1,
                    r -= 1.1
                } else
                    k(e) ? l.end = function(n) {
                        var r, o, s = e.call(t, n);
                        if (1 !== i)
                            if (S(s)) {
                                for (o in r = {},
                                s)
                                    r[o] = s[o] * i;
                                s = r
                            } else
                                s *= i;
                        return s
                    }
                    : l.end = e;
            return (n || 0 === n) && (l.max = n),
            (r || 0 === r) && (l.min = r),
            o && (l.velocity = 0),
            l
        }, Ct = function t(e) {
            var n;
            return !(!e || !e.getAttribute || e === l) && (!("true" !== (n = e.getAttribute("data-clickable")) && ("false" === n || !U.test(e.nodeName + "") && "true" !== e.getAttribute("contentEditable"))) || t(e.parentNode))
        }, wt = function(t, e) {
            for (var n, r = t.length; r--; )
                (n = t[r]).ondragstart = n.onselectstart = e ? null : O,
                o.set(n, {
                    lazy: !0,
                    userSelect: e ? "text" : "none"
                })
        }, bt = function t(e) {
            return "fixed" === dt(e).position || ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
        }, Et = function(t, e) {
            t = o.utils.toArray(t)[0],
            e = e || {};
            var n, r, i, s, a, u, l = document.createElement("div"), c = l.style, f = t.firstChild, h = 0, p = 0, d = t.scrollTop, g = t.scrollLeft, D = t.scrollWidth, v = t.scrollHeight, m = 0, _ = 0, y = 0;
            E && !1 !== e.force3D ? (a = "translate3d(",
            u = "px,0px)") : B && (a = "translate(",
            u = "px)"),
            this.scrollTop = function(t, e) {
                if (!arguments.length)
                    return -this.top();
                this.top(-t, e)
            }
            ,
            this.scrollLeft = function(t, e) {
                if (!arguments.length)
                    return -this.left();
                this.left(-t, e)
            }
            ,
            this.left = function(n, r) {
                if (!arguments.length)
                    return -(t.scrollLeft + p);
                var i = t.scrollLeft - g
                  , s = p;
                if ((i > 2 || i < -2) && !r)
                    return g = t.scrollLeft,
                    o.killTweensOf(this, {
                        left: 1,
                        scrollLeft: 1
                    }),
                    this.left(-g),
                    void (e.onKill && e.onKill());
                (n = -n) < 0 ? (p = n - .5 | 0,
                n = 0) : n > _ ? (p = n - _ | 0,
                n = _) : p = 0,
                (p || s) && (this._skip || (c[B] = a + -p + "px," + -h + u),
                p + m >= 0 && (c.paddingRight = p + m + "px")),
                t.scrollLeft = 0 | n,
                g = t.scrollLeft
            }
            ,
            this.top = function(n, r) {
                if (!arguments.length)
                    return -(t.scrollTop + h);
                var i = t.scrollTop - d
                  , s = h;
                if ((i > 2 || i < -2) && !r)
                    return d = t.scrollTop,
                    o.killTweensOf(this, {
                        top: 1,
                        scrollTop: 1
                    }),
                    this.top(-d),
                    void (e.onKill && e.onKill());
                (n = -n) < 0 ? (h = n - .5 | 0,
                n = 0) : n > y ? (h = n - y | 0,
                n = y) : h = 0,
                (h || s) && (this._skip || (c[B] = a + -p + "px," + -h + u)),
                t.scrollTop = 0 | n,
                d = t.scrollTop
            }
            ,
            this.maxScrollTop = function() {
                return y
            }
            ,
            this.maxScrollLeft = function() {
                return _
            }
            ,
            this.disable = function() {
                for (f = l.firstChild; f; )
                    s = f.nextSibling,
                    t.appendChild(f),
                    f = s;
                t === l.parentNode && t.removeChild(l)
            }
            ,
            this.enable = function() {
                if ((f = t.firstChild) !== l) {
                    for (; f; )
                        s = f.nextSibling,
                        l.appendChild(f),
                        f = s;
                    t.appendChild(l),
                    this.calibrate()
                }
            }
            ,
            this.calibrate = function(e) {
                var o, s, a, u = t.clientWidth === n;
                d = t.scrollTop,
                g = t.scrollLeft,
                u && t.clientHeight === r && l.offsetHeight === i && D === t.scrollWidth && v === t.scrollHeight && !e || ((h || p) && (s = this.left(),
                a = this.top(),
                this.left(-t.scrollLeft),
                this.top(-t.scrollTop)),
                o = dt(t),
                u && !e || (c.display = "block",
                c.width = "auto",
                c.paddingRight = "0px",
                (m = Math.max(0, t.scrollWidth - t.clientWidth)) && (m += parseFloat(o.paddingLeft) + (F ? parseFloat(o.paddingRight) : 0))),
                c.display = "inline-block",
                c.position = "relative",
                c.overflow = "visible",
                c.verticalAlign = "top",
                c.boxSizing = "content-box",
                c.width = "100%",
                c.paddingRight = m + "px",
                F && (c.paddingBottom = o.paddingBottom),
                n = t.clientWidth,
                r = t.clientHeight,
                D = t.scrollWidth,
                v = t.scrollHeight,
                _ = t.scrollWidth - n,
                y = t.scrollHeight - r,
                i = l.offsetHeight,
                c.display = "block",
                (s || a) && (this.left(s),
                this.top(a)))
            }
            ,
            this.content = l,
            this.element = t,
            this._skip = !1,
            this.enable()
        }, Ft = function(t) {
            if (M() && document.body) {
                var e = window && window.navigator;
                s = window,
                a = document,
                u = a.documentElement,
                l = a.body,
                c = Y("div"),
                C = !!window.PointerEvent,
                (f = Y("div")).style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab",
                x = "grab" === f.style.cursor ? "grab" : "move",
                _ = e && -1 !== e.userAgent.toLowerCase().indexOf("android"),
                D = "ontouchstart"in u && "orientation"in s || e && (e.MaxTouchPoints > 0 || e.msMaxTouchPoints > 0),
                r = Y("div"),
                m = (i = Y("div")).style,
                T = l,
                m.display = "inline-block",
                m.position = "relative",
                r.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden",
                r.appendChild(i),
                T.appendChild(r),
                n = i.offsetHeight + 18 > r.scrollHeight,
                T.removeChild(r),
                F = n,
                v = function(t) {
                    for (var e = t.split(","), n = (("onpointerdown"in c ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown"in c ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : t).split(",")), r = {}, i = 4; --i > -1; )
                        r[e[i]] = n[i],
                        r[n[i]] = e[i];
                    try {
                        u.addEventListener("test", null, Object.defineProperty({}, "passive", {
                            get: function() {
                                g = 1
                            }
                        }))
                    } catch (t) {}
                    return r
                }("touchstart,touchmove,touchend,touchcancel"),
                et(a, "touchcancel", O),
                et(s, "touchmove", O),
                l && l.addEventListener("touchstart", O),
                et(a, "contextmenu", (function() {
                    for (var t in q)
                        q[t].isPressed && q[t].endDrag()
                }
                )),
                o = h = A()
            }
            var n, r, i, m, T;
            o ? (y = o.plugins.inertia,
            w = o.core.context || function() {}
            ,
            p = o.utils.checkPrefix,
            B = p(B),
            L = p(L),
            d = o.utils.toArray,
            b = o.core.getStyleSaver,
            E = !!p("perspective")) : t && console.warn("Please gsap.registerPlugin(Draggable)")
        }, Tt = function(t) {
            var e, n;
            function l(e, n) {
                var c;
                c = t.call(this) || this,
                h || Ft(1),
                e = d(e)[0],
                c.styles = b && b(e, "transform,left,top"),
                y || (y = o.plugins.inertia),
                c.vars = n = Z(n || {}),
                c.target = e,
                c.x = c.y = c.rotation = 0,
                c.dragResistance = parseFloat(n.dragResistance) || 0,
                c.edgeResistance = isNaN(n.edgeResistance) ? 1 : parseFloat(n.edgeResistance) || 0,
                c.lockAxis = n.lockAxis,
                c.autoScroll = n.autoScroll || 0,
                c.lockedAxis = null,
                c.allowEventDefault = !!n.allowEventDefault,
                o.getProperty(e, "x");
                var p, g, E, F, M, A, O, B, Y, U, J, it, ft, gt, yt, Tt, Mt, At, kt, St, Pt, Ot, Bt, Lt, Nt, Rt, Yt, Xt, zt, It, Ht, Wt, qt, Vt = (n.type || "x,y").toLowerCase(), Ut = ~Vt.indexOf("x") || ~Vt.indexOf("y"), jt = -1 !== Vt.indexOf("rotation"), Kt = jt ? "rotation" : Ut ? "x" : "left", Gt = Ut ? "y" : "top", Zt = !(!~Vt.indexOf("x") && !~Vt.indexOf("left") && "scroll" !== Vt), $t = !(!~Vt.indexOf("y") && !~Vt.indexOf("top") && "scroll" !== Vt), Qt = n.minimumMovement || 2, Jt = i(c), te = d(n.trigger || n.handle || e), ee = {}, ne = 0, re = !1, ie = n.autoScrollMarginTop || 40, oe = n.autoScrollMarginRight || 40, se = n.autoScrollMarginBottom || 40, ae = n.autoScrollMarginLeft || 40, ue = n.clickableTest || Ct, le = 0, ce = e._gsap || o.core.getCache(e), fe = bt(e), he = function(t, n) {
                    return parseFloat(ce.get(e, t, n))
                }, pe = e.ownerDocument || a, de = function(t) {
                    return rt(t),
                    t.stopImmediatePropagation && t.stopImmediatePropagation(),
                    !1
                }, ge = function t(n) {
                    if (Jt.autoScroll && Jt.isDragging && (re || Mt)) {
                        var r, i, o, a, l, c, f, h, p = e, d = 15 * Jt.autoScroll;
                        for (re = !1,
                        G.scrollTop = null != s.pageYOffset ? s.pageYOffset : null != pe.documentElement.scrollTop ? pe.documentElement.scrollTop : pe.body.scrollTop,
                        G.scrollLeft = null != s.pageXOffset ? s.pageXOffset : null != pe.documentElement.scrollLeft ? pe.documentElement.scrollLeft : pe.body.scrollLeft,
                        a = Jt.pointerX - G.scrollLeft,
                        l = Jt.pointerY - G.scrollTop; p && !i; )
                            r = (i = ct(p.parentNode)) ? G : p.parentNode,
                            o = i ? {
                                bottom: Math.max(u.clientHeight, s.innerHeight || 0),
                                right: Math.max(u.clientWidth, s.innerWidth || 0),
                                left: 0,
                                top: 0
                            } : r.getBoundingClientRect(),
                            c = f = 0,
                            $t && ((h = r._gsMaxScrollY - r.scrollTop) < 0 ? f = h : l > o.bottom - se && h ? (re = !0,
                            f = Math.min(h, d * (1 - Math.max(0, o.bottom - l) / se) | 0)) : l < o.top + ie && r.scrollTop && (re = !0,
                            f = -Math.min(r.scrollTop, d * (1 - Math.max(0, l - o.top) / ie) | 0)),
                            f && (r.scrollTop += f)),
                            Zt && ((h = r._gsMaxScrollX - r.scrollLeft) < 0 ? c = h : a > o.right - oe && h ? (re = !0,
                            c = Math.min(h, d * (1 - Math.max(0, o.right - a) / oe) | 0)) : a < o.left + ae && r.scrollLeft && (re = !0,
                            c = -Math.min(r.scrollLeft, d * (1 - Math.max(0, a - o.left) / ae) | 0)),
                            c && (r.scrollLeft += c)),
                            i && (c || f) && (s.scrollTo(r.scrollLeft, r.scrollTop),
                            Me(Jt.pointerX + c, Jt.pointerY + f)),
                            p = r
                    }
                    if (Mt) {
                        var D = Jt.x
                          , v = Jt.y;
                        jt ? (Jt.deltaX = D - parseFloat(ce.rotation),
                        Jt.rotation = D,
                        ce.rotation = D + "deg",
                        ce.renderTransform(1, ce)) : g ? ($t && (Jt.deltaY = v - g.top(),
                        g.top(v)),
                        Zt && (Jt.deltaX = D - g.left(),
                        g.left(D))) : Ut ? ($t && (Jt.deltaY = v - parseFloat(ce.y),
                        ce.y = v + "px"),
                        Zt && (Jt.deltaX = D - parseFloat(ce.x),
                        ce.x = D + "px"),
                        ce.renderTransform(1, ce)) : ($t && (Jt.deltaY = v - parseFloat(e.style.top || 0),
                        e.style.top = v + "px"),
                        Zt && (Jt.deltaX = D - parseFloat(e.style.left || 0),
                        e.style.left = D + "px")),
                        !B || n || Xt || (Xt = !0,
                        !1 === vt(Jt, "drag", "onDrag") && (Zt && (Jt.x -= Jt.deltaX),
                        $t && (Jt.y -= Jt.deltaY),
                        t(!0)),
                        Xt = !1)
                    }
                    Mt = !1
                }, De = function(t, n) {
                    var r, i, s = Jt.x, a = Jt.y;
                    e._gsap || (ce = o.core.getCache(e)),
                    ce.uncache && o.getProperty(e, "x"),
                    Ut ? (Jt.x = parseFloat(ce.x),
                    Jt.y = parseFloat(ce.y)) : jt ? Jt.x = Jt.rotation = parseFloat(ce.rotation) : g ? (Jt.y = g.top(),
                    Jt.x = g.left()) : (Jt.y = parseFloat(e.style.top || (i = dt(e)) && i.top) || 0,
                    Jt.x = parseFloat(e.style.left || (i || {}).left) || 0),
                    (kt || St || Pt) && !n && (Jt.isDragging || Jt.isThrowing) && (Pt && (K.x = Jt.x,
                    K.y = Jt.y,
                    (r = Pt(K)).x !== Jt.x && (Jt.x = r.x,
                    Mt = !0),
                    r.y !== Jt.y && (Jt.y = r.y,
                    Mt = !0)),
                    kt && (r = kt(Jt.x)) !== Jt.x && (Jt.x = r,
                    jt && (Jt.rotation = r),
                    Mt = !0),
                    St && ((r = St(Jt.y)) !== Jt.y && (Jt.y = r),
                    Mt = !0)),
                    Mt && ge(!0),
                    t || (Jt.deltaX = Jt.x - s,
                    Jt.deltaY = Jt.y - a,
                    vt(Jt, "throwupdate", "onThrowUpdate"))
                }, ve = function(t, e, n, r) {
                    return null == e && (e = -z),
                    null == n && (n = z),
                    k(t) ? function(i) {
                        var o = Jt.isPressed ? 1 - Jt.edgeResistance : 1;
                        return t.call(Jt, (i > n ? n + (i - n) * o : i < e ? e + (i - e) * o : i) * r) * r
                    }
                    : R(t) ? function(r) {
                        for (var i, o, s = t.length, a = 0, u = z; --s > -1; )
                            (o = (i = t[s]) - r) < 0 && (o = -o),
                            o < u && i >= e && i <= n && (a = s,
                            u = o);
                        return t[a]
                    }
                    : isNaN(t) ? function(t) {
                        return t
                    }
                    : function() {
                        return t * r
                    }
                }, me = function() {
                    var t, r, i, o;
                    O = !1,
                    g ? (g.calibrate(),
                    Jt.minX = J = -g.maxScrollLeft(),
                    Jt.minY = ft = -g.maxScrollTop(),
                    Jt.maxX = U = Jt.maxY = it = 0,
                    O = !0) : n.bounds && (t = mt(n.bounds, e.parentNode),
                    jt ? (Jt.minX = J = t.left,
                    Jt.maxX = U = t.left + t.width,
                    Jt.minY = ft = Jt.maxY = it = 0) : P(n.bounds.maxX) && P(n.bounds.maxY) ? (r = mt(e, e.parentNode),
                    Jt.minX = J = Math.round(he(Kt, "px") + t.left - r.left),
                    Jt.minY = ft = Math.round(he(Gt, "px") + t.top - r.top),
                    Jt.maxX = U = Math.round(J + (t.width - r.width)),
                    Jt.maxY = it = Math.round(ft + (t.height - r.height))) : (t = n.bounds,
                    Jt.minX = J = t.minX,
                    Jt.minY = ft = t.minY,
                    Jt.maxX = U = t.maxX,
                    Jt.maxY = it = t.maxY),
                    J > U && (Jt.minX = U,
                    Jt.maxX = U = J,
                    J = Jt.minX),
                    ft > it && (Jt.minY = it,
                    Jt.maxY = it = ft,
                    ft = Jt.minY),
                    jt && (Jt.minRotation = J,
                    Jt.maxRotation = U),
                    O = !0),
                    n.liveSnap && (i = !0 === n.liveSnap ? n.snap || {} : n.liveSnap,
                    o = R(i) || k(i),
                    jt ? (kt = ve(o ? i : i.rotation, J, U, 1),
                    St = null) : i.points ? Pt = function(t, e, n, r, i, o, s) {
                        return o = o && o < z ? o * o : z,
                        k(t) ? function(a) {
                            var u, l, c, f = Jt.isPressed ? 1 - Jt.edgeResistance : 1, h = a.x, p = a.y;
                            return a.x = h = h > n ? n + (h - n) * f : h < e ? e + (h - e) * f : h,
                            a.y = p = p > i ? i + (p - i) * f : p < r ? r + (p - r) * f : p,
                            (u = t.call(Jt, a)) !== a && (a.x = u.x,
                            a.y = u.y),
                            1 !== s && (a.x *= s,
                            a.y *= s),
                            o < z && (l = a.x - h) * l + (c = a.y - p) * c > o && (a.x = h,
                            a.y = p),
                            a
                        }
                        : R(t) ? function(e) {
                            for (var n, r, i, s, a = t.length, u = 0, l = z; --a > -1; )
                                (s = (n = (i = t[a]).x - e.x) * n + (r = i.y - e.y) * r) < l && (u = a,
                                l = s);
                            return l <= o ? t[u] : e
                        }
                        : function(t) {
                            return t
                        }
                    }(o ? i : i.points, J, U, ft, it, i.radius, g ? -1 : 1) : (Zt && (kt = ve(o ? i : i.x || i.left || i.scrollLeft, J, U, g ? -1 : 1)),
                    $t && (St = ve(o ? i : i.y || i.top || i.scrollTop, ft, it, g ? -1 : 1))))
                }, _e = function() {
                    Jt.isThrowing = !1,
                    vt(Jt, "throwcomplete", "onThrowComplete")
                }, ye = function() {
                    Jt.isThrowing = !1
                }, xe = function(t, r) {
                    var i, s, a, u;
                    t && y ? (!0 === t && (i = n.snap || n.liveSnap || {},
                    s = R(i) || k(i),
                    t = {
                        resistance: (n.throwResistance || n.resistance || 1e3) / (jt ? 10 : 1)
                    },
                    jt ? t.rotation = xt(Jt, s ? i : i.rotation, U, J, 1, r) : (Zt && (t[Kt] = xt(Jt, s ? i : i.points || i.x || i.left, U, J, g ? -1 : 1, r || "x" === Jt.lockedAxis)),
                    $t && (t[Gt] = xt(Jt, s ? i : i.points || i.y || i.top, it, ft, g ? -1 : 1, r || "y" === Jt.lockedAxis)),
                    (i.points || R(i) && S(i[0])) && (t.linkedProps = Kt + "," + Gt,
                    t.radius = i.radius))),
                    Jt.isThrowing = !0,
                    u = isNaN(n.overshootTolerance) ? 1 === n.edgeResistance ? 0 : 1 - Jt.edgeResistance + .2 : n.overshootTolerance,
                    t.duration || (t.duration = {
                        max: Math.max(n.minDuration || 0, "maxDuration"in n ? n.maxDuration : 2),
                        min: isNaN(n.minDuration) ? 0 === u || S(t) && t.resistance > 1e3 ? 0 : .5 : n.minDuration,
                        overshoot: u
                    }),
                    Jt.tween = a = o.to(g || e, {
                        inertia: t,
                        data: "_draggable",
                        inherit: !1,
                        onComplete: _e,
                        onInterrupt: ye,
                        onUpdate: n.fastMode ? vt : De,
                        onUpdateParams: n.fastMode ? [Jt, "onthrowupdate", "onThrowUpdate"] : i && i.radius ? [!1, !0] : []
                    }),
                    n.fastMode || (g && (g._skip = !0),
                    a.render(1e9, !0, !0),
                    De(!0, !0),
                    Jt.endX = Jt.x,
                    Jt.endY = Jt.y,
                    jt && (Jt.endRotation = Jt.x),
                    a.play(0),
                    De(!0, !0),
                    g && (g._skip = !1))) : O && Jt.applyBounds()
                }, Ce = function(t) {
                    var n, i = Lt;
                    Lt = (0,
                    r.qK)(e.parentNode, !0),
                    t && Jt.isPressed && !Lt.equals(i || new r.S6) && (n = i.inverse().apply({
                        x: E,
                        y: F
                    }),
                    Lt.apply(n, n),
                    E = n.x,
                    F = n.y),
                    Lt.equals(I) && (Lt = null)
                }, we = function() {
                    var t, n, i, o = 1 - Jt.edgeResistance, s = fe ? at(pe) : 0, a = fe ? st(pe) : 0;
                    Ut && (ce.x = he(Kt, "px") + "px",
                    ce.y = he(Gt, "px") + "px",
                    ce.renderTransform()),
                    Ce(!1),
                    _t.x = Jt.pointerX - s,
                    _t.y = Jt.pointerY - a,
                    Lt && Lt.apply(_t, _t),
                    E = _t.x,
                    F = _t.y,
                    Mt && (Me(Jt.pointerX, Jt.pointerY),
                    ge(!0)),
                    Wt = (0,
                    r.qK)(e),
                    g ? (me(),
                    A = g.top(),
                    M = g.left()) : (be() ? (De(!0, !0),
                    me()) : Jt.applyBounds(),
                    jt ? (t = e.ownerSVGElement ? [ce.xOrigin - e.getBBox().x, ce.yOrigin - e.getBBox().y] : (dt(e)[L] || "0 0").split(" "),
                    Tt = Jt.rotationOrigin = (0,
                    r.qK)(e).apply({
                        x: parseFloat(t[0]) || 0,
                        y: parseFloat(t[1]) || 0
                    }),
                    De(!0, !0),
                    n = Jt.pointerX - Tt.x - s,
                    i = Tt.y - Jt.pointerY + a,
                    M = Jt.x,
                    A = Jt.y = Math.atan2(i, n) * X) : (A = he(Gt, "px"),
                    M = he(Kt, "px"))),
                    O && o && (M > U ? M = U + (M - U) / o : M < J && (M = J - (J - M) / o),
                    jt || (A > it ? A = it + (A - it) / o : A < ft && (A = ft - (ft - A) / o))),
                    Jt.startX = M = N(M),
                    Jt.startY = A = N(A)
                }, be = function() {
                    return Jt.tween && Jt.tween.isActive()
                }, Ee = function() {
                    !f.parentNode || be() || Jt.isDragging || f.parentNode.removeChild(f)
                }, Fe = function(t, r) {
                    var i;
                    if (!p || Jt.isPressed || !t || !("mousedown" !== t.type && "pointerdown" !== t.type || r) && H() - le < 30 && v[Jt.pointerEvent.type])
                        Ht && t && p && rt(t);
                    else {
                        if (Nt = be(),
                        qt = !1,
                        Jt.pointerEvent = t,
                        v[t.type] ? (Bt = ~t.type.indexOf("touch") ? t.currentTarget || t.target : pe,
                        et(Bt, "touchend", Ae),
                        et(Bt, "touchmove", Te),
                        et(Bt, "touchcancel", Ae),
                        et(pe, "touchstart", ot)) : (Bt = null,
                        et(pe, "mousemove", Te)),
                        Yt = null,
                        C && Bt || (et(pe, "mouseup", Ae),
                        t && t.target && et(t.target, "mouseup", Ae)),
                        Ot = ue.call(Jt, t.target) && !1 === n.dragClickables && !r)
                            return et(t.target, "change", Ae),
                            vt(Jt, "pressInit", "onPressInit"),
                            vt(Jt, "press", "onPress"),
                            wt(te, !0),
                            void (Ht = !1);
                        var a;
                        if (Rt = !(!Bt || Zt === $t || !1 === Jt.vars.allowNativeTouchScrolling || Jt.vars.allowContextMenu && t && (t.ctrlKey || t.which > 2)) && (Zt ? "y" : "x"),
                        (Ht = !Rt && !Jt.allowEventDefault) && (rt(t),
                        et(s, "touchforcechange", rt)),
                        t.changedTouches ? (t = gt = t.changedTouches[0],
                        yt = t.identifier) : t.pointerId ? yt = t.pointerId : gt = yt = null,
                        T++,
                        a = ge,
                        W.push(a),
                        1 === W.length && o.ticker.add(Q),
                        F = Jt.pointerY = t.pageY,
                        E = Jt.pointerX = t.pageX,
                        vt(Jt, "pressInit", "onPressInit"),
                        (Rt || Jt.autoScroll) && ht(e.parentNode),
                        !e.parentNode || !Jt.autoScroll || g || jt || !e.parentNode._gsMaxScrollX || f.parentNode || e.getBBox || (f.style.width = e.parentNode.scrollWidth + "px",
                        e.parentNode.appendChild(f)),
                        we(),
                        Jt.tween && Jt.tween.kill(),
                        Jt.isThrowing = !1,
                        o.killTweensOf(g || e, ee, !0),
                        g && o.killTweensOf(e, {
                            scrollTo: 1
                        }, !0),
                        Jt.tween = Jt.lockedAxis = null,
                        (n.zIndexBoost || !jt && !g && !1 !== n.zIndexBoost) && (e.style.zIndex = l.zIndex++),
                        Jt.isPressed = !0,
                        B = !(!n.onDrag && !Jt._listeners.drag),
                        Y = !(!n.onMove && !Jt._listeners.move),
                        !1 !== n.cursor || n.activeCursor)
                            for (i = te.length; --i > -1; )
                                o.set(te[i], {
                                    cursor: n.activeCursor || n.cursor || ("grab" === x ? "grabbing" : x)
                                });
                        vt(Jt, "press", "onPress")
                    }
                }, Te = function(t) {
                    var n, r, i, o, a, u, l = t;
                    if (p && !m && Jt.isPressed && t) {
                        if (Jt.pointerEvent = t,
                        n = t.changedTouches) {
                            if ((t = n[0]) !== gt && t.identifier !== yt) {
                                for (o = n.length; --o > -1 && (t = n[o]).identifier !== yt && t.target !== e; )
                                    ;
                                if (o < 0)
                                    return
                            }
                        } else if (t.pointerId && yt && t.pointerId !== yt)
                            return;
                        Bt && Rt && !Yt && (_t.x = t.pageX - (fe ? at(pe) : 0),
                        _t.y = t.pageY - (fe ? st(pe) : 0),
                        Lt && Lt.apply(_t, _t),
                        r = _t.x,
                        i = _t.y,
                        ((a = Math.abs(r - E)) !== (u = Math.abs(i - F)) && (a > Qt || u > Qt) || _ && Rt === Yt) && (Yt = a > u && Zt ? "x" : "y",
                        Rt && Yt !== Rt && et(s, "touchforcechange", rt),
                        !1 !== Jt.vars.lockAxisOnTouchScroll && Zt && $t && (Jt.lockedAxis = "x" === Yt ? "y" : "x",
                        k(Jt.vars.onLockAxis) && Jt.vars.onLockAxis.call(Jt, l)),
                        _ && Rt === Yt)) ? Ae(l) : (Jt.allowEventDefault || Rt && (!Yt || Rt === Yt) || !1 === l.cancelable ? Ht && (Ht = !1) : (rt(l),
                        Ht = !0),
                        Jt.autoScroll && (re = !0),
                        Me(t.pageX, t.pageY, Y))
                    } else
                        Ht && t && p && rt(t)
                }, Me = function(t, e, n) {
                    var r, i, o, s, a, u, l = 1 - Jt.dragResistance, c = 1 - Jt.edgeResistance, f = Jt.pointerX, h = Jt.pointerY, p = A, d = Jt.x, g = Jt.y, D = Jt.endX, v = Jt.endY, m = Jt.endRotation, _ = Mt;
                    Jt.pointerX = t,
                    Jt.pointerY = e,
                    fe && (t -= at(pe),
                    e -= st(pe)),
                    jt ? (s = Math.atan2(Tt.y - e, t - Tt.x) * X,
                    (a = Jt.y - s) > 180 ? (A -= 360,
                    Jt.y = s) : a < -180 && (A += 360,
                    Jt.y = s),
                    Jt.x !== M || Math.max(Math.abs(E - t), Math.abs(F - e)) > Qt ? (Jt.y = s,
                    o = M + (A - s) * l) : o = M) : (Lt && (u = t * Lt.a + e * Lt.c + Lt.e,
                    e = t * Lt.b + e * Lt.d + Lt.f,
                    t = u),
                    (i = e - F) < Qt && i > -Qt && (i = 0),
                    (r = t - E) < Qt && r > -Qt && (r = 0),
                    (Jt.lockAxis || Jt.lockedAxis) && (r || i) && ((u = Jt.lockedAxis) || (Jt.lockedAxis = u = Zt && Math.abs(r) > Math.abs(i) ? "y" : $t ? "x" : null,
                    u && k(Jt.vars.onLockAxis) && Jt.vars.onLockAxis.call(Jt, Jt.pointerEvent)),
                    "y" === u ? i = 0 : "x" === u && (r = 0)),
                    o = N(M + r * l),
                    s = N(A + i * l)),
                    (kt || St || Pt) && (Jt.x !== o || Jt.y !== s && !jt) && (Pt && (K.x = o,
                    K.y = s,
                    u = Pt(K),
                    o = N(u.x),
                    s = N(u.y)),
                    kt && (o = N(kt(o))),
                    St && (s = N(St(s)))),
                    O && (o > U ? o = U + Math.round((o - U) * c) : o < J && (o = J + Math.round((o - J) * c)),
                    jt || (s > it ? s = Math.round(it + (s - it) * c) : s < ft && (s = Math.round(ft + (s - ft) * c)))),
                    (Jt.x !== o || Jt.y !== s && !jt) && (jt ? (Jt.endRotation = Jt.x = Jt.endX = o,
                    Mt = !0) : ($t && (Jt.y = Jt.endY = s,
                    Mt = !0),
                    Zt && (Jt.x = Jt.endX = o,
                    Mt = !0)),
                    n && !1 === vt(Jt, "move", "onMove") ? (Jt.pointerX = f,
                    Jt.pointerY = h,
                    A = p,
                    Jt.x = d,
                    Jt.y = g,
                    Jt.endX = D,
                    Jt.endY = v,
                    Jt.endRotation = m,
                    Mt = _) : !Jt.isDragging && Jt.isPressed && (Jt.isDragging = qt = !0,
                    vt(Jt, "dragstart", "onDragStart")))
                }, Ae = function t(r, i) {
                    if (p && Jt.isPressed && (!r || null == yt || i || !(r.pointerId && r.pointerId !== yt && r.target !== e || r.changedTouches && !function(t, e) {
                        for (var n = t.length; n--; )
                            if (t[n].identifier === e)
                                return !0
                    }(r.changedTouches, yt)))) {
                        Jt.isPressed = !1;
                        var a, u, l, c, f, h = r, d = Jt.isDragging, g = Jt.vars.allowContextMenu && r && (r.ctrlKey || r.which > 2), D = o.delayedCall(.001, Ee);
                        if (Bt ? (nt(Bt, "touchend", t),
                        nt(Bt, "touchmove", Te),
                        nt(Bt, "touchcancel", t),
                        nt(pe, "touchstart", ot)) : nt(pe, "mousemove", Te),
                        nt(s, "touchforcechange", rt),
                        C && Bt || (nt(pe, "mouseup", t),
                        r && r.target && nt(r.target, "mouseup", t)),
                        Mt = !1,
                        d && (ne = j = H(),
                        Jt.isDragging = !1),
                        tt(ge),
                        Ot && !g)
                            return r && (nt(r.target, "change", t),
                            Jt.pointerEvent = h),
                            wt(te, !1),
                            vt(Jt, "release", "onRelease"),
                            vt(Jt, "click", "onClick"),
                            void (Ot = !1);
                        for (u = te.length; --u > -1; )
                            pt(te[u], "cursor", n.cursor || (!1 !== n.cursor ? x : null));
                        if (T--,
                        r) {
                            if ((a = r.changedTouches) && (r = a[0]) !== gt && r.identifier !== yt) {
                                for (u = a.length; --u > -1 && (r = a[u]).identifier !== yt && r.target !== e; )
                                    ;
                                if (u < 0 && !i)
                                    return
                            }
                            Jt.pointerEvent = h,
                            Jt.pointerX = r.pageX,
                            Jt.pointerY = r.pageY
                        }
                        return g && h ? (rt(h),
                        Ht = !0,
                        vt(Jt, "release", "onRelease")) : h && !d ? (Ht = !1,
                        Nt && (n.snap || n.bounds) && xe(n.inertia || n.throwProps),
                        vt(Jt, "release", "onRelease"),
                        _ && "touchmove" === h.type || -1 !== h.type.indexOf("cancel") || (vt(Jt, "click", "onClick"),
                        H() - le < 300 && vt(Jt, "doubleclick", "onDoubleClick"),
                        c = h.target || e,
                        le = H(),
                        f = function() {
                            le === zt || !Jt.enabled() || Jt.isPressed || h.defaultPrevented || (c.click ? c.click() : pe.createEvent && ((l = pe.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, s, 1, Jt.pointerEvent.screenX, Jt.pointerEvent.screenY, Jt.pointerX, Jt.pointerY, !1, !1, !1, !1, 0, null),
                            c.dispatchEvent(l)))
                        }
                        ,
                        _ || h.defaultPrevented || o.delayedCall(.05, f))) : (xe(n.inertia || n.throwProps),
                        Jt.allowEventDefault || !h || !1 === n.dragClickables && ue.call(Jt, h.target) || !d || Rt && (!Yt || Rt !== Yt) || !1 === h.cancelable ? Ht = !1 : (Ht = !0,
                        rt(h)),
                        vt(Jt, "release", "onRelease")),
                        be() && D.duration(Jt.tween.duration()),
                        d && vt(Jt, "dragend", "onDragEnd"),
                        !0
                    }
                    Ht && r && p && rt(r)
                }, ke = function(t) {
                    if (t && Jt.isDragging && !g) {
                        var n = t.target || e.parentNode
                          , r = n.scrollLeft - n._gsScrollX
                          , i = n.scrollTop - n._gsScrollY;
                        (r || i) && (Lt ? (E -= r * Lt.a + i * Lt.c,
                        F -= i * Lt.d + r * Lt.b) : (E -= r,
                        F -= i),
                        n._gsScrollX += r,
                        n._gsScrollY += i,
                        Me(Jt.pointerX, Jt.pointerY))
                    }
                }, Se = function(t) {
                    var e = H()
                      , n = e - le < 100
                      , r = e - ne < 50
                      , i = n && zt === le
                      , o = Jt.pointerEvent && Jt.pointerEvent.defaultPrevented
                      , s = n && It === le
                      , a = t.isTrusted || null == t.isTrusted && n && i;
                    if ((i || r && !1 !== Jt.vars.suppressClickOnDrag) && t.stopImmediatePropagation && t.stopImmediatePropagation(),
                    n && (!Jt.pointerEvent || !Jt.pointerEvent.defaultPrevented) && (!i || a && !s))
                        return a && i && (It = le),
                        void (zt = le);
                    (Jt.isPressed || r || n) && (a && t.detail && n && !o || rt(t)),
                    n || r || qt || (t && t.target && (Jt.pointerEvent = t),
                    vt(Jt, "click", "onClick"))
                }, Pe = function(t) {
                    return Lt ? {
                        x: t.x * Lt.a + t.y * Lt.c + Lt.e,
                        y: t.x * Lt.b + t.y * Lt.d + Lt.f
                    } : {
                        x: t.x,
                        y: t.y
                    }
                };
                return (At = l.get(e)) && At.kill(),
                c.startDrag = function(t, n) {
                    var r, i, o, s;
                    Fe(t || Jt.pointerEvent, !0),
                    n && !Jt.hitTest(t || Jt.pointerEvent) && (r = Dt(t || Jt.pointerEvent),
                    i = Dt(e),
                    o = Pe({
                        x: r.left + r.width / 2,
                        y: r.top + r.height / 2
                    }),
                    s = Pe({
                        x: i.left + i.width / 2,
                        y: i.top + i.height / 2
                    }),
                    E -= o.x - s.x,
                    F -= o.y - s.y),
                    Jt.isDragging || (Jt.isDragging = qt = !0,
                    vt(Jt, "dragstart", "onDragStart"))
                }
                ,
                c.drag = Te,
                c.endDrag = function(t) {
                    return Ae(t || Jt.pointerEvent, !0)
                }
                ,
                c.timeSinceDrag = function() {
                    return Jt.isDragging ? 0 : (H() - ne) / 1e3
                }
                ,
                c.timeSinceClick = function() {
                    return (H() - le) / 1e3
                }
                ,
                c.hitTest = function(t, e) {
                    return l.hitTest(Jt.target, t, e)
                }
                ,
                c.getDirection = function(t, n) {
                    var r, i, o, s, a, u, l = "velocity" === t && y ? t : S(t) && !jt ? "element" : "start";
                    return "element" === l && (a = Dt(Jt.target),
                    u = Dt(t)),
                    r = "start" === l ? Jt.x - M : "velocity" === l ? y.getVelocity(e, Kt) : a.left + a.width / 2 - (u.left + u.width / 2),
                    jt ? r < 0 ? "counter-clockwise" : "clockwise" : (n = n || 2,
                    i = "start" === l ? Jt.y - A : "velocity" === l ? y.getVelocity(e, Gt) : a.top + a.height / 2 - (u.top + u.height / 2),
                    s = (o = Math.abs(r / i)) < 1 / n ? "" : r < 0 ? "left" : "right",
                    o < n && ("" !== s && (s += "-"),
                    s += i < 0 ? "up" : "down"),
                    s)
                }
                ,
                c.applyBounds = function(t, r) {
                    var i, o, a, u, l, c;
                    if (t && n.bounds !== t)
                        return n.bounds = t,
                        Jt.update(!0, r);
                    if (De(!0),
                    me(),
                    O && !be()) {
                        if (i = Jt.x,
                        o = Jt.y,
                        i > U ? i = U : i < J && (i = J),
                        o > it ? o = it : o < ft && (o = ft),
                        (Jt.x !== i || Jt.y !== o) && (a = !0,
                        Jt.x = Jt.endX = i,
                        jt ? Jt.endRotation = i : Jt.y = Jt.endY = o,
                        Mt = !0,
                        ge(!0),
                        Jt.autoScroll && !Jt.isDragging))
                            for (ht(e.parentNode),
                            u = e,
                            G.scrollTop = null != s.pageYOffset ? s.pageYOffset : null != pe.documentElement.scrollTop ? pe.documentElement.scrollTop : pe.body.scrollTop,
                            G.scrollLeft = null != s.pageXOffset ? s.pageXOffset : null != pe.documentElement.scrollLeft ? pe.documentElement.scrollLeft : pe.body.scrollLeft; u && !c; )
                                l = (c = ct(u.parentNode)) ? G : u.parentNode,
                                $t && l.scrollTop > l._gsMaxScrollY && (l.scrollTop = l._gsMaxScrollY),
                                Zt && l.scrollLeft > l._gsMaxScrollX && (l.scrollLeft = l._gsMaxScrollX),
                                u = l;
                        Jt.isThrowing && (a || Jt.endX > U || Jt.endX < J || Jt.endY > it || Jt.endY < ft) && xe(n.inertia || n.throwProps, a)
                    }
                    return Jt
                }
                ,
                c.update = function(t, n, i) {
                    if (n && Jt.isPressed) {
                        var o = (0,
                        r.qK)(e)
                          , s = Wt.apply({
                            x: Jt.x - M,
                            y: Jt.y - A
                        })
                          , a = (0,
                        r.qK)(e.parentNode, !0);
                        a.apply({
                            x: o.e - s.x,
                            y: o.f - s.y
                        }, s),
                        Jt.x -= s.x - a.e,
                        Jt.y -= s.y - a.f,
                        ge(!0),
                        we()
                    }
                    var u = Jt.x
                      , l = Jt.y;
                    return Ce(!n),
                    t ? Jt.applyBounds() : (Mt && i && ge(!0),
                    De(!0)),
                    n && (Me(Jt.pointerX, Jt.pointerY),
                    Mt && ge(!0)),
                    Jt.isPressed && !n && (Zt && Math.abs(u - Jt.x) > .01 || $t && Math.abs(l - Jt.y) > .01 && !jt) && we(),
                    Jt.autoScroll && (ht(e.parentNode, Jt.isDragging),
                    re = Jt.isDragging,
                    ge(!0),
                    lt(e, ke),
                    ut(e, ke)),
                    Jt
                }
                ,
                c.enable = function(t) {
                    var r, i, s, a = {
                        lazy: !0
                    };
                    if (!1 !== n.cursor && (a.cursor = n.cursor || x),
                    o.utils.checkPrefix("touchCallout") && (a.touchCallout = "none"),
                    "soft" !== t) {
                        for ($(te, Zt === $t ? "none" : n.allowNativeTouchScrolling && e.scrollHeight === e.clientHeight == (e.scrollWidth === e.clientHeight) || n.allowEventDefault ? "manipulation" : Zt ? "pan-y" : "pan-x"),
                        i = te.length; --i > -1; )
                            s = te[i],
                            C || et(s, "mousedown", Fe),
                            et(s, "touchstart", Fe),
                            et(s, "click", Se, !0),
                            o.set(s, a),
                            s.getBBox && s.ownerSVGElement && Zt !== $t && o.set(s.ownerSVGElement, {
                                touchAction: n.allowNativeTouchScrolling || n.allowEventDefault ? "manipulation" : Zt ? "pan-y" : "pan-x"
                            }),
                            n.allowContextMenu || et(s, "contextmenu", de);
                        wt(te, !1)
                    }
                    return ut(e, ke),
                    p = !0,
                    y && "soft" !== t && y.track(g || e, Ut ? "x,y" : jt ? "rotation" : "top,left"),
                    e._gsDragID = r = e._gsDragID || "d" + V++,
                    q[r] = Jt,
                    g && (g.enable(),
                    g.element._gsDragID = r),
                    (n.bounds || jt) && we(),
                    n.bounds && Jt.applyBounds(),
                    Jt
                }
                ,
                c.disable = function(t) {
                    for (var n, r = Jt.isDragging, i = te.length; --i > -1; )
                        pt(te[i], "cursor", null);
                    if ("soft" !== t) {
                        for ($(te, null),
                        i = te.length; --i > -1; )
                            n = te[i],
                            pt(n, "touchCallout", null),
                            nt(n, "mousedown", Fe),
                            nt(n, "touchstart", Fe),
                            nt(n, "click", Se, !0),
                            nt(n, "contextmenu", de);
                        wt(te, !0),
                        Bt && (nt(Bt, "touchcancel", Ae),
                        nt(Bt, "touchend", Ae),
                        nt(Bt, "touchmove", Te)),
                        nt(pe, "mouseup", Ae),
                        nt(pe, "mousemove", Te)
                    }
                    return lt(e, ke),
                    p = !1,
                    y && "soft" !== t && (y.untrack(g || e, Ut ? "x,y" : jt ? "rotation" : "top,left"),
                    Jt.tween && Jt.tween.kill()),
                    g && g.disable(),
                    tt(ge),
                    Jt.isDragging = Jt.isPressed = Ot = !1,
                    r && vt(Jt, "dragend", "onDragEnd"),
                    Jt
                }
                ,
                c.enabled = function(t, e) {
                    return arguments.length ? t ? Jt.enable(e) : Jt.disable(e) : p
                }
                ,
                c.kill = function() {
                    return Jt.isThrowing = !1,
                    Jt.tween && Jt.tween.kill(),
                    Jt.disable(),
                    o.set(te, {
                        clearProps: "userSelect"
                    }),
                    delete q[e._gsDragID],
                    Jt
                }
                ,
                c.revert = function() {
                    this.kill(),
                    this.styles && this.styles.revert()
                }
                ,
                ~Vt.indexOf("scroll") && (g = c.scrollProxy = new Et(e,function(t, e) {
                    for (var n in e)
                        n in t || (t[n] = e[n]);
                    return t
                }({
                    onKill: function() {
                        Jt.isPressed && Ae(null)
                    }
                }, n)),
                e.style.overflowY = $t && !D ? "auto" : "hidden",
                e.style.overflowX = Zt && !D ? "auto" : "hidden",
                e = g.content),
                jt ? ee.rotation = 1 : (Zt && (ee[Kt] = 1),
                $t && (ee[Gt] = 1)),
                ce.force3D = !("force3D"in n) || n.force3D,
                w(i(c)),
                c.enable(),
                c
            }
            return n = t,
            (e = l).prototype = Object.create(n.prototype),
            e.prototype.constructor = e,
            e.__proto__ = n,
            l.register = function(t) {
                o = t,
                Ft()
            }
            ,
            l.create = function(t, e) {
                return h || Ft(!0),
                d(t).map((function(t) {
                    return new l(t,e)
                }
                ))
            }
            ,
            l.get = function(t) {
                return q[(d(t)[0] || {})._gsDragID]
            }
            ,
            l.timeSinceDrag = function() {
                return (H() - j) / 1e3
            }
            ,
            l.hitTest = function(t, e, n) {
                if (t === e)
                    return !1;
                var r, i, o, s = Dt(t), a = Dt(e), u = s.top, l = s.left, c = s.right, f = s.bottom, h = s.width, p = s.height, d = a.left > c || a.right < l || a.top > f || a.bottom < u;
                return d || !n ? !d : (o = -1 !== (n + "").indexOf("%"),
                n = parseFloat(n) || 0,
                (r = {
                    left: Math.max(l, a.left),
                    top: Math.max(u, a.top)
                }).width = Math.min(c, a.right) - r.left,
                r.height = Math.min(f, a.bottom) - r.top,
                !(r.width < 0 || r.height < 0) && (o ? (n *= .01,
                (i = r.width * r.height) >= h * p * n || i >= a.width * a.height * n) : r.width > n && r.height > n))
            }
            ,
            l
        }(function() {
            function t(t) {
                this._listeners = {},
                this.target = t || this
            }
            var e = t.prototype;
            return e.addEventListener = function(t, e) {
                var n = this._listeners[t] || (this._listeners[t] = []);
                ~n.indexOf(e) || n.push(e)
            }
            ,
            e.removeEventListener = function(t, e) {
                var n = this._listeners[t]
                  , r = n && n.indexOf(e);
                r >= 0 && n.splice(r, 1)
            }
            ,
            e.dispatchEvent = function(t) {
                var e, n = this;
                return (this._listeners[t] || []).forEach((function(r) {
                    return !1 === r.call(n, {
                        type: t,
                        target: n.target
                    }) && (e = !1)
                }
                )),
                e
            }
            ,
            t
        }());
        !function(t, e) {
            for (var n in e)
                n in t || (t[n] = e[n])
        }(Tt.prototype, {
            pointerX: 0,
            pointerY: 0,
            startX: 0,
            startY: 0,
            deltaX: 0,
            deltaY: 0,
            isDragging: !1,
            isPressed: !1
        }),
        Tt.zIndex = 1e3,
        Tt.version = "3.12.7",
        A() && o.registerPlugin(Tt)
    }
    ,
    9052: (t, e, n) => {
        n.d(e, {
            gF: () => Q
        });
        var r, i, o, s, a, u, l, c, f = function() {
            return r || "undefined" != typeof window && (r = window.gsap)
        }, h = {}, p = function(t) {
            return c(t).id
        }, d = function(t) {
            return h[p("string" == typeof t ? o(t)[0] : t)]
        }, g = function(t) {
            var e, n = a;
            if (t - l >= .05)
                for (l = t; n; )
                    ((e = n.g(n.t, n.p)) !== n.v1 || t - n.t1 > .2) && (n.v2 = n.v1,
                    n.v1 = e,
                    n.t2 = n.t1,
                    n.t1 = t),
                    n = n._next
        }, D = {
            deg: 360,
            rad: 2 * Math.PI
        }, v = function() {
            (r = f()) && (o = r.utils.toArray,
            s = r.utils.getUnit,
            c = r.core.getCache,
            u = r.ticker,
            i = 1)
        }, m = function(t, e, n, r) {
            this.t = t,
            this.p = e,
            this.g = t._gsap.get,
            this.rCap = D[n || s(this.g(t, e))],
            this.v1 = this.v2 = 0,
            this.t1 = this.t2 = u.time,
            r && (this._next = r,
            r._prev = this)
        }, _ = function() {
            function t(t, e) {
                i || v(),
                this.target = o(t)[0],
                h[p(this.target)] = this,
                this._props = {},
                e && this.add(e)
            }
            t.register = function(t) {
                r = t,
                v()
            }
            ;
            var e = t.prototype;
            return e.get = function(t, e) {
                var n, r, i, o = this._props[t] || console.warn("Not tracking " + t + " velocity.");
                return n = parseFloat(e ? o.v1 : o.g(o.t, o.p)) - parseFloat(o.v2),
                (r = o.rCap) && (n %= r) != n % (r / 2) && (n = n < 0 ? n + r : n - r),
                i = n / ((e ? o.t1 : u.time) - o.t2),
                Math.round(1e4 * i) / 1e4
            }
            ,
            e.getAll = function() {
                var t, e = {}, n = this._props;
                for (t in n)
                    e[t] = this.get(t);
                return e
            }
            ,
            e.isTracking = function(t) {
                return t in this._props
            }
            ,
            e.add = function(t, e) {
                t in this._props || (a || (u.add(g),
                l = u.time),
                a = this._props[t] = new m(this.target,t,e,a))
            }
            ,
            e.remove = function(t) {
                var e, n, r = this._props[t];
                r && (e = r._prev,
                n = r._next,
                e && (e._next = n),
                n ? n._prev = e : a === r && (u.remove(g),
                a = 0),
                delete this._props[t])
            }
            ,
            e.kill = function(t) {
                for (var e in this._props)
                    this.remove(e);
                t || delete h[p(this.target)]
            }
            ,
            t.track = function(e, n, r) {
                i || v();
                for (var s, a, u = [], l = o(e), c = n.split(","), f = (r || "").split(","), h = l.length; h--; ) {
                    for (s = d(l[h]) || new t(l[h]),
                    a = c.length; a--; )
                        s.add(c[a], f[a] || f[0]);
                    u.push(s)
                }
                return u
            }
            ,
            t.untrack = function(t, e) {
                var n = (e || "").split(",");
                o(t).forEach((function(t) {
                    var e = d(t);
                    e && (n.length ? n.forEach((function(t) {
                        return e.remove(t)
                    }
                    )) : e.kill(1))
                }
                ))
            }
            ,
            t.isTracking = function(t, e) {
                var n = d(t);
                return n && n.isTracking(e)
            }
            ,
            t.getVelocity = function(t, e) {
                var n = d(t);
                return n && n.isTracking(e) ? n.get(e) : console.warn("Not tracking velocity of " + e)
            }
            ,
            t
        }();
        _.getByTarget = d,
        f() && r.registerPlugin(_);
        var y, x, C, w, b, E, F, T, M, A, k, S, P, O, B = _.getByTarget, L = function() {
            return y || "undefined" != typeof window && (y = window.gsap) && y.registerPlugin && y
        }, N = function(t) {
            return "number" == typeof t
        }, R = function(t) {
            return "object" == typeof t
        }, Y = function(t) {
            return "function" == typeof t
        }, X = Array.isArray, z = function(t) {
            return t
        }, I = 1e10, H = function(t, e, n) {
            for (var r in e)
                r in t || r === n || (t[r] = e[r]);
            return t
        }, W = function t(e) {
            var n, r, i = {};
            for (n in e)
                i[n] = R(r = e[n]) && !X(r) ? t(r) : r;
            return i
        }, q = function(t, e, n, r, i) {
            var o, s, a, u, l = e.length, c = 0, f = I;
            if (R(t)) {
                for (; l--; ) {
                    for (a in o = e[l],
                    s = 0,
                    t)
                        s += (u = o[a] - t[a]) * u;
                    s < f && (c = l,
                    f = s)
                }
                if ((i || I) < I && i < Math.sqrt(f))
                    return t
            } else
                for (; l--; )
                    (s = (o = e[l]) - t) < 0 && (s = -s),
                    s < f && o >= r && o <= n && (c = l,
                    f = s);
            return e[c]
        }, V = function(t, e, n, r, i, o, s) {
            if ("auto" === t.end)
                return t;
            var a, u, l = t.end;
            if (n = isNaN(n) ? I : n,
            r = isNaN(r) ? -I : r,
            R(e)) {
                if (a = e.calculated ? e : (Y(l) ? l(e, s) : q(e, l, n, r, o)) || e,
                !e.calculated) {
                    for (u in a)
                        e[u] = a[u];
                    e.calculated = !0
                }
                a = a[i]
            } else
                a = Y(l) ? l(e, s) : X(l) ? q(e, l, n, r, o) : parseFloat(l);
            return a > n ? a = n : a < r && (a = r),
            {
                max: a,
                min: a,
                unitFactor: t.unitFactor
            }
        }, U = function(t, e, n) {
            return isNaN(t[e]) ? n : +t[e]
        }, j = function(t, e) {
            return .05 * e * t / A
        }, K = function(t, e, n) {
            return Math.abs((e - t) * A / n / .05)
        }, G = {
            resistance: 1,
            checkpoint: 1,
            preventOvershoot: 1,
            linkedProps: 1,
            radius: 1,
            duration: 1
        }, Z = function(t, e, n, r) {
            if (e.linkedProps) {
                var i, o, s, a, u, l, c = e.linkedProps.split(","), f = {};
                for (i = 0; i < c.length; i++)
                    (s = e[o = c[i]]) && (a = N(s.velocity) ? s.velocity : (u = u || B(t)) && u.isTracking(o) ? u.get(o) : 0,
                    l = Math.abs(a / U(s, "resistance", r)),
                    f[o] = parseFloat(n(t, o)) + j(a, l));
                return f
            }
        }, $ = function() {
            (y = L()) && (C = y.parseEase,
            w = y.utils.toArray,
            F = y.utils.getUnit,
            M = y.core.getCache,
            k = y.utils.clamp,
            P = y.core.getStyleSaver,
            O = y.core.reverting || function() {}
            ,
            b = C("power3"),
            A = b(.05),
            T = y.core.PropTween,
            y.config({
                resistance: 100,
                unitFactors: {
                    time: 1e3,
                    totalTime: 1e3,
                    progress: 1e3,
                    totalProgress: 1e3
                }
            }),
            E = y.config(),
            y.registerPlugin(_),
            x = 1)
        }, Q = {
            version: "3.12.7",
            name: "inertia",
            register: function(t) {
                y = t,
                $()
            },
            init: function(t, e, n, r, i) {
                x || $();
                var o = B(t);
                if ("auto" === e) {
                    if (!o)
                        return void console.warn("No inertia tracking on " + t + ". InertiaPlugin.track(target) first.");
                    e = o.getAll()
                }
                this.styles = P && "object" == typeof t.style && P(t),
                this.target = t,
                this.tween = n,
                S = e;
                var s, a, u, l, c, f, h, p, d, g = t._gsap, D = g.get, v = e.duration, m = R(v), _ = e.preventOvershoot || m && 0 === v.overshoot, y = U(e, "resistance", E.resistance), C = N(v) ? v : function(t, e, n, r, i, o) {
                    if (void 0 === n && (n = 10),
                    void 0 === r && (r = .2),
                    void 0 === i && (i = 1),
                    void 0 === o && (o = 0),
                    "string" == typeof t && (t = w(t)[0]),
                    !t)
                        return 0;
                    var s, a, u, l, c, f, h, p, d, g, D = 0, v = I, m = e.inertia || e, _ = M(t).get, y = U(m, "resistance", E.resistance);
                    for (s in g = Z(t, m, _, y),
                    m)
                        G[s] || (a = m[s],
                        R(a) || ((p = p || B(t)) && p.isTracking(s) ? a = N(a) ? {
                            velocity: a
                        } : {
                            velocity: p.get(s)
                        } : (l = +a || 0,
                        u = Math.abs(l / y))),
                        R(a) && (l = N(a.velocity) ? a.velocity : (p = p || B(t)) && p.isTracking(s) ? p.get(s) : 0,
                        u = k(r, n, Math.abs(l / U(a, "resistance", y))),
                        f = (c = parseFloat(_(t, s)) || 0) + j(l, u),
                        "end"in a && (a = V(a, g && s in g ? g : f, a.max, a.min, s, m.radius, l),
                        o && (S === e && (S = m = W(e)),
                        m[s] = H(a, m[s], "end"))),
                        "max"in a && f > +a.max + 1e-10 ? (d = a.unitFactor || E.unitFactors[s] || 1,
                        (h = c > a.max && a.min !== a.max || l * d > -15 && l * d < 45 ? r + .1 * (n - r) : K(c, a.max, l)) + i < v && (v = h + i)) : "min"in a && f < +a.min - 1e-10 && (d = a.unitFactor || E.unitFactors[s] || 1,
                        (h = c < a.min && a.min !== a.max || l * d > -45 && l * d < 15 ? r + .1 * (n - r) : K(c, a.min, l)) + i < v && (v = h + i)),
                        h > D && (D = h)),
                        u > D && (D = u));
                    return D > v && (D = v),
                    D > n ? n : D < r ? r : D
                }(t, e, m && v.max || 10, m && v.min || .2, m && "overshoot"in v ? +v.overshoot : _ ? 0 : 1, !0);
                for (s in e = S,
                S = 0,
                d = Z(t, e, D, y),
                e)
                    G[s] || (a = e[s],
                    Y(a) && (a = a(r, t, i)),
                    N(a) ? c = a : R(a) && !isNaN(a.velocity) ? c = +a.velocity : o && o.isTracking(s) ? c = o.get(s) : console.warn("ERROR: No velocity was defined for " + t + " property: " + s),
                    f = j(c, C),
                    p = 0,
                    u = D(t, s),
                    l = F(u),
                    u = parseFloat(u),
                    R(a) && (h = u + f,
                    "end"in a && (a = V(a, d && s in d ? d : h, a.max, a.min, s, e.radius, c)),
                    "max"in a && +a.max < h ? _ || a.preventOvershoot ? f = a.max - u : p = a.max - u - f : "min"in a && +a.min > h && (_ || a.preventOvershoot ? f = a.min - u : p = a.min - u - f)),
                    this._props.push(s),
                    this.styles && this.styles.save(s),
                    this._pt = new T(this._pt,t,s,u,0,z,0,g.set(t, s, this)),
                    this._pt.u = l || 0,
                    this._pt.c1 = f,
                    this._pt.c2 = p);
                return n.duration(C),
                1
            },
            render: function(t, e) {
                var n, r = e._pt;
                if ((t = b(e.tween._time / e.tween._dur)) || !O())
                    for (; r; )
                        r.set(r.t, r.p, (n = r.s + r.c1 * t + r.c2 * t * t,
                        Math.round(1e4 * n) / 1e4 + r.u), r.d, t),
                        r = r._next;
                else
                    e.styles.revert()
            }
        };
        "track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach((function(t) {
            return Q[t] = _[t]
        }
        )),
        L() && y.registerPlugin(Q)
    }
    ,
    5216: (t, e, n) => {
        n.d(e, {
            k: () => b
        });
        var r, i, o, s, a, u, l = n(8576), c = n(2816), f = "x,translateX,left,marginLeft,xPercent".split(","), h = "y,translateY,top,marginTop,yPercent".split(","), p = Math.PI / 180, d = function(t, e, n, r) {
            for (var i = e.length, o = 2 === r ? 0 : r, s = 0; s < i; s++)
                t[o] = parseFloat(e[s][n]),
                2 === r && (t[o + 1] = 0),
                o += 2;
            return t
        }, g = function(t, e, n) {
            return parseFloat(t._gsap.get(t, e, n || "px")) || 0
        }, D = function(t) {
            var e, n = t[0], r = t[1];
            for (e = 2; e < t.length; e += 2)
                n = t[e] += n,
                r = t[e + 1] += r
        }, v = function(t, e, n, r, i, o, s, a, u) {
            return "cubic" === s.type ? e = [e] : (!1 !== s.fromCurrent && e.unshift(g(n, r, a), i ? g(n, i, u) : 0),
            s.relative && D(e),
            e = [(i ? l.uy : l.ie)(e, s.curviness)]),
            e = o(C(e, n, s)),
            w(t, n, r, e, "x", a),
            i && w(t, n, i, e, "y", u),
            (0,
            l.YF)(e, s.resolution || (0 === s.curviness ? 20 : 12))
        }, m = function(t) {
            return t
        }, _ = /[-+\.]*\d+\.?(?:e-|e\+)?\d*/g, y = function(t, e, n) {
            var r, i = (0,
            c.qK)(t), o = 0, s = 0;
            return "svg" === (t.tagName + "").toLowerCase() ? (r = t.viewBox.baseVal).width || (r = {
                width: +t.getAttribute("width"),
                height: +t.getAttribute("height")
            }) : r = e && t.getBBox && t.getBBox(),
            e && "auto" !== e && (o = e.push ? e[0] * (r ? r.width : t.offsetWidth || 0) : e.x,
            s = e.push ? e[1] * (r ? r.height : t.offsetHeight || 0) : e.y),
            n.apply(o || s ? i.apply({
                x: o,
                y: s
            }) : {
                x: i.e,
                y: i.f
            })
        }, x = function(t, e, n, r) {
            var i, o = (0,
            c.qK)(t.parentNode, !0, !0), s = o.clone().multiply((0,
            c.qK)(e)), a = y(t, n, o), u = y(e, r, o), l = u.x, f = u.y;
            return s.e = s.f = 0,
            "auto" === r && e.getTotalLength && "path" === e.tagName.toLowerCase() && (i = e.getAttribute("d").match(_) || [],
            l += (i = s.apply({
                x: +i[0],
                y: +i[1]
            })).x,
            f += i.y),
            i && (l -= (i = s.apply(e.getBBox())).x,
            f -= i.y),
            s.e = l - a.x,
            s.f = f - a.y,
            s
        }, C = function(t, e, n) {
            var i, o, a, u = n.align, c = n.matrix, f = n.offsetX, h = n.offsetY, p = n.alignOrigin, d = t[0][0], D = t[0][1], v = g(e, "x"), m = g(e, "y");
            return t && t.length ? (u && ("self" === u || (i = s(u)[0] || e) === e ? (0,
            l.MJ)(t, 1, 0, 0, 1, v - d, m - D) : (p && !1 !== p[2] ? r.set(e, {
                transformOrigin: 100 * p[0] + "% " + 100 * p[1] + "%"
            }) : p = [g(e, "xPercent") / -100, g(e, "yPercent") / -100],
            a = (o = x(e, i, p, "auto")).apply({
                x: d,
                y: D
            }),
            (0,
            l.MJ)(t, o.a, o.b, o.c, o.d, v + o.e - (a.x - o.e), m + o.f - (a.y - o.f)))),
            c ? (0,
            l.MJ)(t, c.a, c.b, c.c, c.d, c.e, c.f) : (f || h) && (0,
            l.MJ)(t, 1, 0, 0, 1, f || 0, h || 0),
            t) : (0,
            l.fL)("M0,0L0,0")
        }, w = function(t, e, n, r, s, a) {
            var u = e._gsap
              , l = u.harness
              , c = l && l.aliases && l.aliases[n]
              , f = c && c.indexOf(",") < 0 ? c : n
              , h = t._pt = new i(t._pt,e,f,0,0,m,0,u.set(e, f, t));
            h.u = o(u.get(e, f, a)) || 0,
            h.path = r,
            h.pp = s,
            t._props.push(f)
        }, b = {
            version: "3.12.7",
            name: "motionPath",
            register: function(t, e, n) {
                o = (r = t).utils.getUnit,
                s = r.utils.toArray,
                a = r.core.getStyleSaver,
                u = r.core.reverting || function() {}
                ,
                i = n
            },
            init: function(t, e, n) {
                if (!r)
                    return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),
                    !1;
                "object" == typeof e && !e.style && e.path || (e = {
                    path: e
                });
                var i, s, u, c, p = [], g = e, D = g.path, m = g.autoRotate, _ = g.unitX, y = g.unitY, x = g.x, b = g.y, E = D[0], F = (u = e.start,
                c = "end"in e ? e.end : 1,
                function(t) {
                    return u || 1 !== c ? (0,
                    l.EN)(t, u, c) : t
                }
                );
                if (this.rawPaths = p,
                this.target = t,
                this.tween = n,
                this.styles = a && a(t, "transform"),
                (this.rotate = m || 0 === m) && (this.rOffset = parseFloat(m) || 0,
                this.radians = !!e.useRadians,
                this.rProp = e.rotation || "rotation",
                this.rSet = t._gsap.set(t, this.rProp, this),
                this.ru = o(t._gsap.get(t, this.rProp)) || 0),
                Array.isArray(D) && !("closed"in D) && "number" != typeof E) {
                    for (s in E)
                        !x && ~f.indexOf(s) ? x = s : !b && ~h.indexOf(s) && (b = s);
                    for (s in x && b ? p.push(v(this, d(d([], D, x, 0), D, b, 1), t, x, b, F, e, _ || o(D[0][x]), y || o(D[0][b]))) : x = b = 0,
                    E)
                        s !== x && s !== b && p.push(v(this, d([], D, s, 2), t, s, 0, F, e, o(D[0][s])))
                } else
                    i = F(C((0,
                    l.fL)(e.path), t, e)),
                    (0,
                    l.YF)(i, e.resolution),
                    p.push(i),
                    w(this, t, e.x || "x", i, "x", e.unitX || "px"),
                    w(this, t, e.y || "y", i, "y", e.unitY || "px");
                n.vars.immediateRender && this.render(n.progress(), this)
            },
            render: function(t, e) {
                var n = e.rawPaths
                  , r = n.length
                  , i = e._pt;
                if (e.tween._time || !u()) {
                    for (t > 1 ? t = 1 : t < 0 && (t = 0); r--; )
                        (0,
                        l.Ut)(n[r], t, !r && e.rotate, n[r]);
                    for (; i; )
                        i.set(i.t, i.p, i.path[i.pp] + i.u, i.d, t),
                        i = i._next;
                    e.rotate && e.rSet(e.target, e.rProp, n[0].angle * (e.radians ? p : 1) + e.rOffset + e.ru, e, t)
                } else
                    e.styles.revert()
            },
            getLength: function(t) {
                return (0,
                l.YF)((0,
                l.fL)(t)).totalLength
            },
            sliceRawPath: l.EN,
            getRawPath: l.fL,
            pointsToSegment: l.uy,
            stringToRawPath: l.od,
            rawPathToString: l.e_,
            transformRawPath: l.MJ,
            getGlobalMatrix: c.qK,
            getPositionOnPath: l.Ut,
            cacheRawPathMeasurements: l.YF,
            convertToPath: function(t, e) {
                return s(t).map((function(t) {
                    return (0,
                    l.y8)(t, !1 !== e)
                }
                ))
            },
            convertCoordinates: function(t, e, n) {
                var r = (0,
                c.qK)(e, !0, !0).multiply((0,
                c.qK)(t));
                return n ? r.apply(n) : r
            },
            getAlignMatrix: x,
            getRelativePosition: function(t, e, n, r) {
                var i = x(t, e, n, r);
                return {
                    x: i.e,
                    y: i.f
                }
            },
            arrayToRawPath: function(t, e) {
                var n = d(d([], t, (e = e || {}).x || "x", 0), t, e.y || "y", 1);
                return e.relative && D(n),
                ["cubic" === e.type ? n : (0,
                l.uy)(n, e.curviness)]
            }
        };
        (r || "undefined" != typeof window && (r = window.gsap) && r.registerPlugin && r) && r.registerPlugin(b)
    }
    ,
    2472: (t, e, n) => {
        n.d(e, {
            M: () => y
        });
        var r, i, o, s, a, u, l, c, f = function() {
            return "undefined" != typeof window
        }, h = function() {
            return r || f() && (r = window.gsap) && r.registerPlugin && r
        }, p = function(t) {
            return "string" == typeof t
        }, d = function(t) {
            return "function" == typeof t
        }, g = function(t, e) {
            var n = "x" === e ? "Width" : "Height"
              , r = "scroll" + n
              , i = "client" + n;
            return t === o || t === s || t === a ? Math.max(s[r], a[r]) - (o["inner" + n] || s[i] || a[i]) : t[r] - t["offset" + n]
        }, D = function(t, e) {
            var n = "scroll" + ("x" === e ? "Left" : "Top");
            return t === o && (null != t.pageXOffset ? n = "page" + e.toUpperCase() + "Offset" : t = null != s[n] ? s : a),
            function() {
                return t[n]
            }
        }, v = function(t, e) {
            if (!(t = u(t)[0]) || !t.getBoundingClientRect)
                return console.warn("scrollTo target doesn't exist. Using 0") || {
                    x: 0,
                    y: 0
                };
            var n = t.getBoundingClientRect()
              , r = !e || e === o || e === a
              , i = r ? {
                top: s.clientTop - (o.pageYOffset || s.scrollTop || a.scrollTop || 0),
                left: s.clientLeft - (o.pageXOffset || s.scrollLeft || a.scrollLeft || 0)
            } : e.getBoundingClientRect()
              , l = {
                x: n.left - i.left,
                y: n.top - i.top
            };
            return !r && e && (l.x += D(e, "x")(),
            l.y += D(e, "y")()),
            l
        }, m = function(t, e, n, r, i) {
            return isNaN(t) || "object" == typeof t ? p(t) && "=" === t.charAt(1) ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + r - i : "max" === t ? g(e, n) - i : Math.min(g(e, n), v(t, e)[n] - i) : parseFloat(t) - i
        }, _ = function() {
            r = h(),
            f() && r && "undefined" != typeof document && document.body && (o = window,
            a = document.body,
            s = document.documentElement,
            u = r.utils.toArray,
            r.config({
                autoKillThreshold: 7
            }),
            l = r.config(),
            i = 1)
        }, y = {
            version: "3.12.7",
            name: "scrollTo",
            rawVars: 1,
            register: function(t) {
                r = t,
                _()
            },
            init: function(t, e, n, s, a) {
                i || _();
                var u = this
                  , f = r.getProperty(t, "scrollSnapType");
                u.isWin = t === o,
                u.target = t,
                u.tween = n,
                e = function(t, e, n, r) {
                    if (d(t) && (t = t(e, n, r)),
                    "object" != typeof t)
                        return p(t) && "max" !== t && "=" !== t.charAt(1) ? {
                            x: t,
                            y: t
                        } : {
                            y: t
                        };
                    if (t.nodeType)
                        return {
                            y: t,
                            x: t
                        };
                    var i, o = {};
                    for (i in t)
                        o[i] = "onAutoKill" !== i && d(t[i]) ? t[i](e, n, r) : t[i];
                    return o
                }(e, s, t, a),
                u.vars = e,
                u.autoKill = !!("autoKill"in e ? e : l).autoKill,
                u.getX = D(t, "x"),
                u.getY = D(t, "y"),
                u.x = u.xPrev = u.getX(),
                u.y = u.yPrev = u.getY(),
                c || (c = r.core.globals().ScrollTrigger),
                "smooth" === r.getProperty(t, "scrollBehavior") && r.set(t, {
                    scrollBehavior: "auto"
                }),
                f && "none" !== f && (u.snap = 1,
                u.snapInline = t.style.scrollSnapType,
                t.style.scrollSnapType = "none"),
                null != e.x ? (u.add(u, "x", u.x, m(e.x, t, "x", u.x, e.offsetX || 0), s, a),
                u._props.push("scrollTo_x")) : u.skipX = 1,
                null != e.y ? (u.add(u, "y", u.y, m(e.y, t, "y", u.y, e.offsetY || 0), s, a),
                u._props.push("scrollTo_y")) : u.skipY = 1
            },
            render: function(t, e) {
                for (var n, r, i, s, a, u = e._pt, f = e.target, h = e.tween, p = e.autoKill, d = e.xPrev, D = e.yPrev, v = e.isWin, m = e.snap, _ = e.snapInline; u; )
                    u.r(t, u.d),
                    u = u._next;
                n = v || !e.skipX ? e.getX() : d,
                i = (r = v || !e.skipY ? e.getY() : D) - D,
                s = n - d,
                a = l.autoKillThreshold,
                e.x < 0 && (e.x = 0),
                e.y < 0 && (e.y = 0),
                p && (!e.skipX && (s > a || s < -a) && n < g(f, "x") && (e.skipX = 1),
                !e.skipY && (i > a || i < -a) && r < g(f, "y") && (e.skipY = 1),
                e.skipX && e.skipY && (h.kill(),
                e.vars.onAutoKill && e.vars.onAutoKill.apply(h, e.vars.onAutoKillParams || []))),
                v ? o.scrollTo(e.skipX ? n : e.x, e.skipY ? r : e.y) : (e.skipY || (f.scrollTop = e.y),
                e.skipX || (f.scrollLeft = e.x)),
                !m || 1 !== t && 0 !== t || (r = f.scrollTop,
                n = f.scrollLeft,
                _ ? f.style.scrollSnapType = _ : f.style.removeProperty("scroll-snap-type"),
                f.scrollTop = r + 1,
                f.scrollLeft = n + 1,
                f.scrollTop = r,
                f.scrollLeft = n),
                e.xPrev = e.x,
                e.yPrev = e.y,
                c && c.update()
            },
            kill: function(t) {
                var e = "scrollTo" === t
                  , n = this._props.indexOf(t);
                return (e || "scrollTo_x" === t) && (this.skipX = 1),
                (e || "scrollTo_y" === t) && (this.skipY = 1),
                n > -1 && this._props.splice(n, 1),
                !this._props.length
            }
        };
        y.max = g,
        y.getOffset = v,
        y.buildGetter = D,
        y.config = function(t) {
            for (var e in l || _() || (l = r.config()),
            t)
                l[e] = t[e]
        }
        ,
        h() && r.registerPlugin(y)
    }
    ,
    314: (t, e, n) => {
        function r(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        n.d(e, {
            c: () => ln
        });
        var i, o, s, a, u, l, c, f, h, p, d, g, D, v = function() {
            return i || "undefined" != typeof window && (i = window.gsap) && i.registerPlugin && i
        }, m = 1, _ = [], y = [], x = [], C = Date.now, w = function(t, e) {
            return e
        }, b = function(t, e) {
            return ~x.indexOf(t) && x[x.indexOf(t) + 1][e]
        }, E = function(t) {
            return !!~p.indexOf(t)
        }, F = function(t, e, n, r, i) {
            return t.addEventListener(e, n, {
                passive: !1 !== r,
                capture: !!i
            })
        }, T = function(t, e, n, r) {
            return t.removeEventListener(e, n, !!r)
        }, M = "scrollLeft", A = "scrollTop", k = function() {
            return d && d.isPressed || y.cache++
        }, S = function(t, e) {
            var n = function n(r) {
                if (r || 0 === r) {
                    m && (s.history.scrollRestoration = "manual");
                    var i = d && d.isPressed;
                    r = n.v = Math.round(r) || (d && d.iOS ? 1 : 0),
                    t(r),
                    n.cacheID = y.cache,
                    i && w("ss", r)
                } else
                    (e || y.cache !== n.cacheID || w("ref")) && (n.cacheID = y.cache,
                    n.v = t());
                return n.v + n.offset
            };
            return n.offset = 0,
            t && n
        }, P = {
            s: M,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: S((function(t) {
                return arguments.length ? s.scrollTo(t, O.sc()) : s.pageXOffset || a[M] || u[M] || l[M] || 0
            }
            ))
        }, O = {
            s: A,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: P,
            sc: S((function(t) {
                return arguments.length ? s.scrollTo(P.sc(), t) : s.pageYOffset || a[A] || u[A] || l[A] || 0
            }
            ))
        }, B = function(t, e) {
            return (e && e._ctx && e._ctx.selector || i.utils.toArray)(t)[0] || ("string" == typeof t && !1 !== i.config().nullTargetWarn ? console.warn("Element not found:", t) : null)
        }, L = function(t, e) {
            var n = e.s
              , r = e.sc;
            E(t) && (t = a.scrollingElement || u);
            var o = y.indexOf(t)
              , s = r === O.sc ? 1 : 2;
            !~o && (o = y.push(t) - 1),
            y[o + s] || F(t, "scroll", k);
            var l = y[o + s]
              , c = l || (y[o + s] = S(b(t, n), !0) || (E(t) ? r : S((function(e) {
                return arguments.length ? t[n] = e : t[n]
            }
            ))));
            return c.target = t,
            l || (c.smooth = "smooth" === i.getProperty(t, "scrollBehavior")),
            c
        }, N = function(t, e, n) {
            var r = t
              , i = t
              , o = C()
              , s = o
              , a = e || 50
              , u = Math.max(500, 3 * a)
              , l = function(t, e) {
                var u = C();
                e || u - o > a ? (i = r,
                r = t,
                s = o,
                o = u) : n ? r += t : r = i + (t - i) / (u - s) * (o - s)
            };
            return {
                update: l,
                reset: function() {
                    i = r = n ? 0 : r,
                    s = o = 0
                },
                getVelocity: function(t) {
                    var e = s
                      , a = i
                      , c = C();
                    return (t || 0 === t) && t !== r && l(t),
                    o === s || c - s > u ? 0 : (r + (n ? a : -a)) / ((n ? c : o) - e) * 1e3
                }
            }
        }, R = function(t, e) {
            return e && !t._gsapAllow && t.preventDefault(),
            t.changedTouches ? t.changedTouches[0] : t
        }, Y = function(t) {
            var e = Math.max.apply(Math, t)
              , n = Math.min.apply(Math, t);
            return Math.abs(e) >= Math.abs(n) ? e : n
        }, X = function() {
            var t, e, n, r;
            (h = i.core.globals().ScrollTrigger) && h.core && (t = h.core,
            e = t.bridge || {},
            n = t._scrollers,
            r = t._proxies,
            n.push.apply(n, y),
            r.push.apply(r, x),
            y = n,
            x = r,
            w = function(t, n) {
                return e[t](n)
            }
            )
        }, z = function(t) {
            return i = t || v(),
            !o && i && "undefined" != typeof document && document.body && (s = window,
            a = document,
            u = a.documentElement,
            l = a.body,
            p = [s, a, u, l],
            i.utils.clamp,
            D = i.core.context || function() {}
            ,
            f = "onpointerenter"in l ? "pointer" : "mouse",
            c = I.isTouch = s.matchMedia && s.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in s || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
            g = I.eventTypes = ("ontouchstart"in u ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in u ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
            setTimeout((function() {
                return m = 0
            }
            ), 500),
            X(),
            o = 1),
            o
        };
        P.op = O,
        y.cache = 0;
        var I = function() {
            function t(t) {
                this.init(t)
            }
            var e, n;
            return t.prototype.init = function(t) {
                o || z(i) || console.warn("Please gsap.registerPlugin(Observer)"),
                h || X();
                var e = t.tolerance
                  , n = t.dragMinimum
                  , r = t.type
                  , p = t.target
                  , v = t.lineHeight
                  , m = t.debounce
                  , y = t.preventDefault
                  , x = t.onStop
                  , w = t.onStopDelay
                  , b = t.ignore
                  , M = t.wheelSpeed
                  , A = t.event
                  , S = t.onDragStart
                  , I = t.onDragEnd
                  , H = t.onDrag
                  , W = t.onPress
                  , q = t.onRelease
                  , V = t.onRight
                  , U = t.onLeft
                  , j = t.onUp
                  , K = t.onDown
                  , G = t.onChangeX
                  , Z = t.onChangeY
                  , $ = t.onChange
                  , Q = t.onToggleX
                  , J = t.onToggleY
                  , tt = t.onHover
                  , et = t.onHoverEnd
                  , nt = t.onMove
                  , rt = t.ignoreCheck
                  , it = t.isNormalizer
                  , ot = t.onGestureStart
                  , st = t.onGestureEnd
                  , at = t.onWheel
                  , ut = t.onEnable
                  , lt = t.onDisable
                  , ct = t.onClick
                  , ft = t.scrollSpeed
                  , ht = t.capture
                  , pt = t.allowClicks
                  , dt = t.lockAxis
                  , gt = t.onLockAxis;
                this.target = p = B(p) || u,
                this.vars = t,
                b && (b = i.utils.toArray(b)),
                e = e || 1e-9,
                n = n || 0,
                M = M || 1,
                ft = ft || 1,
                r = r || "wheel,touch,pointer",
                m = !1 !== m,
                v || (v = parseFloat(s.getComputedStyle(l).lineHeight) || 22);
                var Dt, vt, mt, _t, yt, xt, Ct, wt = this, bt = 0, Et = 0, Ft = t.passive || !y && !1 !== t.passive, Tt = L(p, P), Mt = L(p, O), At = Tt(), kt = Mt(), St = ~r.indexOf("touch") && !~r.indexOf("pointer") && "pointerdown" === g[0], Pt = E(p), Ot = p.ownerDocument || a, Bt = [0, 0, 0], Lt = [0, 0, 0], Nt = 0, Rt = function() {
                    return Nt = C()
                }, Yt = function(t, e) {
                    return (wt.event = t) && b && ~b.indexOf(t.target) || e && St && "touch" !== t.pointerType || rt && rt(t, e)
                }, Xt = function() {
                    var t = wt.deltaX = Y(Bt)
                      , n = wt.deltaY = Y(Lt)
                      , r = Math.abs(t) >= e
                      , i = Math.abs(n) >= e;
                    $ && (r || i) && $(wt, t, n, Bt, Lt),
                    r && (V && wt.deltaX > 0 && V(wt),
                    U && wt.deltaX < 0 && U(wt),
                    G && G(wt),
                    Q && wt.deltaX < 0 != bt < 0 && Q(wt),
                    bt = wt.deltaX,
                    Bt[0] = Bt[1] = Bt[2] = 0),
                    i && (K && wt.deltaY > 0 && K(wt),
                    j && wt.deltaY < 0 && j(wt),
                    Z && Z(wt),
                    J && wt.deltaY < 0 != Et < 0 && J(wt),
                    Et = wt.deltaY,
                    Lt[0] = Lt[1] = Lt[2] = 0),
                    (_t || mt) && (nt && nt(wt),
                    mt && (S && 1 === mt && S(wt),
                    H && H(wt),
                    mt = 0),
                    _t = !1),
                    xt && !(xt = !1) && gt && gt(wt),
                    yt && (at(wt),
                    yt = !1),
                    Dt = 0
                }, zt = function(t, e, n) {
                    Bt[n] += t,
                    Lt[n] += e,
                    wt._vx.update(t),
                    wt._vy.update(e),
                    m ? Dt || (Dt = requestAnimationFrame(Xt)) : Xt()
                }, It = function(t, e) {
                    dt && !Ct && (wt.axis = Ct = Math.abs(t) > Math.abs(e) ? "x" : "y",
                    xt = !0),
                    "y" !== Ct && (Bt[2] += t,
                    wt._vx.update(t, !0)),
                    "x" !== Ct && (Lt[2] += e,
                    wt._vy.update(e, !0)),
                    m ? Dt || (Dt = requestAnimationFrame(Xt)) : Xt()
                }, Ht = function(t) {
                    if (!Yt(t, 1)) {
                        var e = (t = R(t, y)).clientX
                          , r = t.clientY
                          , i = e - wt.x
                          , o = r - wt.y
                          , s = wt.isDragging;
                        wt.x = e,
                        wt.y = r,
                        (s || (i || o) && (Math.abs(wt.startX - e) >= n || Math.abs(wt.startY - r) >= n)) && (mt = s ? 2 : 1,
                        s || (wt.isDragging = !0),
                        It(i, o))
                    }
                }, Wt = wt.onPress = function(t) {
                    Yt(t, 1) || t && t.button || (wt.axis = Ct = null,
                    vt.pause(),
                    wt.isPressed = !0,
                    t = R(t),
                    bt = Et = 0,
                    wt.startX = wt.x = t.clientX,
                    wt.startY = wt.y = t.clientY,
                    wt._vx.reset(),
                    wt._vy.reset(),
                    F(it ? p : Ot, g[1], Ht, Ft, !0),
                    wt.deltaX = wt.deltaY = 0,
                    W && W(wt))
                }
                , qt = wt.onRelease = function(t) {
                    if (!Yt(t, 1)) {
                        T(it ? p : Ot, g[1], Ht, !0);
                        var e = !isNaN(wt.y - wt.startY)
                          , n = wt.isDragging
                          , r = n && (Math.abs(wt.x - wt.startX) > 3 || Math.abs(wt.y - wt.startY) > 3)
                          , o = R(t);
                        !r && e && (wt._vx.reset(),
                        wt._vy.reset(),
                        y && pt && i.delayedCall(.08, (function() {
                            if (C() - Nt > 300 && !t.defaultPrevented)
                                if (t.target.click)
                                    t.target.click();
                                else if (Ot.createEvent) {
                                    var e = Ot.createEvent("MouseEvents");
                                    e.initMouseEvent("click", !0, !0, s, 1, o.screenX, o.screenY, o.clientX, o.clientY, !1, !1, !1, !1, 0, null),
                                    t.target.dispatchEvent(e)
                                }
                        }
                        ))),
                        wt.isDragging = wt.isGesturing = wt.isPressed = !1,
                        x && n && !it && vt.restart(!0),
                        mt && Xt(),
                        I && n && I(wt),
                        q && q(wt, r)
                    }
                }
                , Vt = function(t) {
                    return t.touches && t.touches.length > 1 && (wt.isGesturing = !0) && ot(t, wt.isDragging)
                }, Ut = function() {
                    return (wt.isGesturing = !1) || st(wt)
                }, jt = function(t) {
                    if (!Yt(t)) {
                        var e = Tt()
                          , n = Mt();
                        zt((e - At) * ft, (n - kt) * ft, 1),
                        At = e,
                        kt = n,
                        x && vt.restart(!0)
                    }
                }, Kt = function(t) {
                    if (!Yt(t)) {
                        t = R(t, y),
                        at && (yt = !0);
                        var e = (1 === t.deltaMode ? v : 2 === t.deltaMode ? s.innerHeight : 1) * M;
                        zt(t.deltaX * e, t.deltaY * e, 0),
                        x && !it && vt.restart(!0)
                    }
                }, Gt = function(t) {
                    if (!Yt(t)) {
                        var e = t.clientX
                          , n = t.clientY
                          , r = e - wt.x
                          , i = n - wt.y;
                        wt.x = e,
                        wt.y = n,
                        _t = !0,
                        x && vt.restart(!0),
                        (r || i) && It(r, i)
                    }
                }, Zt = function(t) {
                    wt.event = t,
                    tt(wt)
                }, $t = function(t) {
                    wt.event = t,
                    et(wt)
                }, Qt = function(t) {
                    return Yt(t) || R(t, y) && ct(wt)
                };
                vt = wt._dc = i.delayedCall(w || .25, (function() {
                    wt._vx.reset(),
                    wt._vy.reset(),
                    vt.pause(),
                    x && x(wt)
                }
                )).pause(),
                wt.deltaX = wt.deltaY = 0,
                wt._vx = N(0, 50, !0),
                wt._vy = N(0, 50, !0),
                wt.scrollX = Tt,
                wt.scrollY = Mt,
                wt.isDragging = wt.isGesturing = wt.isPressed = !1,
                D(this),
                wt.enable = function(t) {
                    return wt.isEnabled || (F(Pt ? Ot : p, "scroll", k),
                    r.indexOf("scroll") >= 0 && F(Pt ? Ot : p, "scroll", jt, Ft, ht),
                    r.indexOf("wheel") >= 0 && F(p, "wheel", Kt, Ft, ht),
                    (r.indexOf("touch") >= 0 && c || r.indexOf("pointer") >= 0) && (F(p, g[0], Wt, Ft, ht),
                    F(Ot, g[2], qt),
                    F(Ot, g[3], qt),
                    pt && F(p, "click", Rt, !0, !0),
                    ct && F(p, "click", Qt),
                    ot && F(Ot, "gesturestart", Vt),
                    st && F(Ot, "gestureend", Ut),
                    tt && F(p, f + "enter", Zt),
                    et && F(p, f + "leave", $t),
                    nt && F(p, f + "move", Gt)),
                    wt.isEnabled = !0,
                    wt.isDragging = wt.isGesturing = wt.isPressed = _t = mt = !1,
                    wt._vx.reset(),
                    wt._vy.reset(),
                    At = Tt(),
                    kt = Mt(),
                    t && t.type && Wt(t),
                    ut && ut(wt)),
                    wt
                }
                ,
                wt.disable = function() {
                    wt.isEnabled && (_.filter((function(t) {
                        return t !== wt && E(t.target)
                    }
                    )).length || T(Pt ? Ot : p, "scroll", k),
                    wt.isPressed && (wt._vx.reset(),
                    wt._vy.reset(),
                    T(it ? p : Ot, g[1], Ht, !0)),
                    T(Pt ? Ot : p, "scroll", jt, ht),
                    T(p, "wheel", Kt, ht),
                    T(p, g[0], Wt, ht),
                    T(Ot, g[2], qt),
                    T(Ot, g[3], qt),
                    T(p, "click", Rt, !0),
                    T(p, "click", Qt),
                    T(Ot, "gesturestart", Vt),
                    T(Ot, "gestureend", Ut),
                    T(p, f + "enter", Zt),
                    T(p, f + "leave", $t),
                    T(p, f + "move", Gt),
                    wt.isEnabled = wt.isPressed = wt.isDragging = !1,
                    lt && lt(wt))
                }
                ,
                wt.kill = wt.revert = function() {
                    wt.disable();
                    var t = _.indexOf(wt);
                    t >= 0 && _.splice(t, 1),
                    d === wt && (d = 0)
                }
                ,
                _.push(wt),
                it && E(p) && (d = wt),
                wt.enable(A)
            }
            ,
            e = t,
            (n = [{
                key: "velocityX",
                get: function() {
                    return this._vx.getVelocity()
                }
            }, {
                key: "velocityY",
                get: function() {
                    return this._vy.getVelocity()
                }
            }]) && r(e.prototype, n),
            t
        }();
        I.version = "3.12.7",
        I.create = function(t) {
            return new I(t)
        }
        ,
        I.register = z,
        I.getAll = function() {
            return _.slice()
        }
        ,
        I.getById = function(t) {
            return _.filter((function(e) {
                return e.vars.id === t
            }
            ))[0]
        }
        ,
        v() && i.registerPlugin(I);
        var H, W, q, V, U, j, K, G, Z, $, Q, J, tt, et, nt, rt, it, ot, st, at, ut, lt, ct, ft, ht, pt, dt, gt, Dt, vt, mt, _t, yt, xt, Ct, wt, bt, Et, Ft = 1, Tt = Date.now, Mt = Tt(), At = 0, kt = 0, St = function(t, e, n) {
            var r = Vt(t) && ("clamp(" === t.substr(0, 6) || t.indexOf("max") > -1);
            return n["_" + e + "Clamp"] = r,
            r ? t.substr(6, t.length - 7) : t
        }, Pt = function(t, e) {
            return !e || Vt(t) && "clamp(" === t.substr(0, 6) ? t : "clamp(" + t + ")"
        }, Ot = function t() {
            return kt && requestAnimationFrame(t)
        }, Bt = function() {
            return et = 1
        }, Lt = function() {
            return et = 0
        }, Nt = function(t) {
            return t
        }, Rt = function(t) {
            return Math.round(1e5 * t) / 1e5 || 0
        }, Yt = function() {
            return "undefined" != typeof window
        }, Xt = function() {
            return H || Yt() && (H = window.gsap) && H.registerPlugin && H
        }, zt = function(t) {
            return !!~K.indexOf(t)
        }, It = function(t) {
            return ("Height" === t ? mt : q["inner" + t]) || U["client" + t] || j["client" + t]
        }, Ht = function(t) {
            return b(t, "getBoundingClientRect") || (zt(t) ? function() {
                return en.width = q.innerWidth,
                en.height = mt,
                en
            }
            : function() {
                return de(t)
            }
            )
        }, Wt = function(t, e) {
            var n = e.s
              , r = e.d2
              , i = e.d
              , o = e.a;
            return Math.max(0, (n = "scroll" + r) && (o = b(t, n)) ? o() - Ht(t)()[i] : zt(t) ? (U[n] || j[n]) - It(r) : t[n] - t["offset" + r])
        }, qt = function(t, e) {
            for (var n = 0; n < st.length; n += 3)
                (!e || ~e.indexOf(st[n + 1])) && t(st[n], st[n + 1], st[n + 2])
        }, Vt = function(t) {
            return "string" == typeof t
        }, Ut = function(t) {
            return "function" == typeof t
        }, jt = function(t) {
            return "number" == typeof t
        }, Kt = function(t) {
            return "object" == typeof t
        }, Gt = function(t, e, n) {
            return t && t.progress(e ? 0 : 1) && n && t.pause()
        }, Zt = function(t, e) {
            if (t.enabled) {
                var n = t._ctx ? t._ctx.add((function() {
                    return e(t)
                }
                )) : e(t);
                n && n.totalTime && (t.callbackAnimation = n)
            }
        }, $t = Math.abs, Qt = "left", Jt = "right", te = "bottom", ee = "width", ne = "height", re = "Right", ie = "Left", oe = "Top", se = "Bottom", ae = "padding", ue = "margin", le = "Width", ce = "Height", fe = "px", he = function(t) {
            return q.getComputedStyle(t)
        }, pe = function(t, e) {
            for (var n in e)
                n in t || (t[n] = e[n]);
            return t
        }, de = function(t, e) {
            var n = e && "matrix(1, 0, 0, 1, 0, 0)" !== he(t)[nt] && H.to(t, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0
            }).progress(1)
              , r = t.getBoundingClientRect();
            return n && n.progress(0).kill(),
            r
        }, ge = function(t, e) {
            var n = e.d2;
            return t["offset" + n] || t["client" + n] || 0
        }, De = function(t) {
            var e, n = [], r = t.labels, i = t.duration();
            for (e in r)
                n.push(r[e] / i);
            return n
        }, ve = function(t) {
            var e = H.utils.snap(t)
              , n = Array.isArray(t) && t.slice(0).sort((function(t, e) {
                return t - e
            }
            ));
            return n ? function(t, r, i) {
                var o;
                if (void 0 === i && (i = .001),
                !r)
                    return e(t);
                if (r > 0) {
                    for (t -= i,
                    o = 0; o < n.length; o++)
                        if (n[o] >= t)
                            return n[o];
                    return n[o - 1]
                }
                for (o = n.length,
                t += i; o--; )
                    if (n[o] <= t)
                        return n[o];
                return n[0]
            }
            : function(n, r, i) {
                void 0 === i && (i = .001);
                var o = e(n);
                return !r || Math.abs(o - n) < i || o - n < 0 == r < 0 ? o : e(r < 0 ? n - t : n + t)
            }
        }, me = function(t, e, n, r) {
            return n.split(",").forEach((function(n) {
                return t(e, n, r)
            }
            ))
        }, _e = function(t, e, n, r, i) {
            return t.addEventListener(e, n, {
                passive: !r,
                capture: !!i
            })
        }, ye = function(t, e, n, r) {
            return t.removeEventListener(e, n, !!r)
        }, xe = function(t, e, n) {
            (n = n && n.wheelHandler) && (t(e, "wheel", n),
            t(e, "touchmove", n))
        }, Ce = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        }, we = {
            toggleActions: "play",
            anticipatePin: 0
        }, be = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        }, Ee = function(t, e) {
            if (Vt(t)) {
                var n = t.indexOf("=")
                  , r = ~n ? +(t.charAt(n - 1) + 1) * parseFloat(t.substr(n + 1)) : 0;
                ~n && (t.indexOf("%") > n && (r *= e / 100),
                t = t.substr(0, n - 1)),
                t = r + (t in be ? be[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
            }
            return t
        }, Fe = function(t, e, n, r, i, o, s, a) {
            var u = i.startColor
              , l = i.endColor
              , c = i.fontSize
              , f = i.indent
              , h = i.fontWeight
              , p = V.createElement("div")
              , d = zt(n) || "fixed" === b(n, "pinType")
              , g = -1 !== t.indexOf("scroller")
              , D = d ? j : n
              , v = -1 !== t.indexOf("start")
              , m = v ? u : l
              , _ = "border-color:" + m + ";font-size:" + c + ";color:" + m + ";font-weight:" + h + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return _ += "position:" + ((g || a) && d ? "fixed;" : "absolute;"),
            (g || a || !d) && (_ += (r === O ? Jt : te) + ":" + (o + parseFloat(f)) + "px;"),
            s && (_ += "box-sizing:border-box;text-align:left;width:" + s.offsetWidth + "px;"),
            p._isStart = v,
            p.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")),
            p.style.cssText = _,
            p.innerText = e || 0 === e ? t + "-" + e : t,
            D.children[0] ? D.insertBefore(p, D.children[0]) : D.appendChild(p),
            p._offset = p["offset" + r.op.d2],
            Te(p, 0, r, v),
            p
        }, Te = function(t, e, n, r) {
            var i = {
                display: "block"
            }
              , o = n[r ? "os2" : "p2"]
              , s = n[r ? "p2" : "os2"];
            t._isFlipped = r,
            i[n.a + "Percent"] = r ? -100 : 0,
            i[n.a] = r ? "1px" : 0,
            i["border" + o + le] = 1,
            i["border" + s + le] = 0,
            i[n.p] = e + "px",
            H.set(t, i)
        }, Me = [], Ae = {}, ke = function() {
            return Tt() - At > 34 && (Ct || (Ct = requestAnimationFrame(Ke)))
        }, Se = function() {
            (!ct || !ct.isPressed || ct.startX > j.clientWidth) && (y.cache++,
            ct ? Ct || (Ct = requestAnimationFrame(Ke)) : Ke(),
            At || Re("scrollStart"),
            At = Tt())
        }, Pe = function() {
            pt = q.innerWidth,
            ht = q.innerHeight
        }, Oe = function(t) {
            y.cache++,
            (!0 === t || !tt && !lt && !V.fullscreenElement && !V.webkitFullscreenElement && (!ft || pt !== q.innerWidth || Math.abs(q.innerHeight - ht) > .25 * q.innerHeight)) && G.restart(!0)
        }, Be = {}, Le = [], Ne = function t() {
            return ye(ln, "scrollEnd", t) || Ve(!0)
        }, Re = function(t) {
            return Be[t] && Be[t].map((function(t) {
                return t()
            }
            )) || Le
        }, Ye = [], Xe = function(t) {
            for (var e = 0; e < Ye.length; e += 5)
                (!t || Ye[e + 4] && Ye[e + 4].query === t) && (Ye[e].style.cssText = Ye[e + 1],
                Ye[e].getBBox && Ye[e].setAttribute("transform", Ye[e + 2] || ""),
                Ye[e + 3].uncache = 1)
        }, ze = function(t, e) {
            var n;
            for (rt = 0; rt < Me.length; rt++)
                !(n = Me[rt]) || e && n._ctx !== e || (t ? n.kill(1) : n.revert(!0, !0));
            _t = !0,
            e && Xe(e),
            e || Re("revert")
        }, Ie = function(t, e) {
            y.cache++,
            (e || !wt) && y.forEach((function(t) {
                return Ut(t) && t.cacheID++ && (t.rec = 0)
            }
            )),
            Vt(t) && (q.history.scrollRestoration = Dt = t)
        }, He = 0, We = function() {
            j.appendChild(vt),
            mt = !ct && vt.offsetHeight || q.innerHeight,
            j.removeChild(vt)
        }, qe = function(t) {
            return Z(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach((function(e) {
                return e.style.display = t ? "none" : "block"
            }
            ))
        }, Ve = function(t, e) {
            if (U = V.documentElement,
            j = V.body,
            K = [q, V, U, j],
            !At || t || _t) {
                We(),
                wt = ln.isRefreshing = !0,
                y.forEach((function(t) {
                    return Ut(t) && ++t.cacheID && (t.rec = t())
                }
                ));
                var n = Re("refreshInit");
                at && ln.sort(),
                e || ze(),
                y.forEach((function(t) {
                    Ut(t) && (t.smooth && (t.target.style.scrollBehavior = "auto"),
                    t(0))
                }
                )),
                Me.slice(0).forEach((function(t) {
                    return t.refresh()
                }
                )),
                _t = !1,
                Me.forEach((function(t) {
                    if (t._subPinOffset && t.pin) {
                        var e = t.vars.horizontal ? "offsetWidth" : "offsetHeight"
                          , n = t.pin[e];
                        t.revert(!0, 1),
                        t.adjustPinSpacing(t.pin[e] - n),
                        t.refresh()
                    }
                }
                )),
                yt = 1,
                qe(!0),
                Me.forEach((function(t) {
                    var e = Wt(t.scroller, t._dir)
                      , n = "max" === t.vars.end || t._endClamp && t.end > e
                      , r = t._startClamp && t.start >= e;
                    (n || r) && t.setPositions(r ? e - 1 : t.start, n ? Math.max(r ? e : t.start + 1, e) : t.end, !0)
                }
                )),
                qe(!1),
                yt = 0,
                n.forEach((function(t) {
                    return t && t.render && t.render(-1)
                }
                )),
                y.forEach((function(t) {
                    Ut(t) && (t.smooth && requestAnimationFrame((function() {
                        return t.target.style.scrollBehavior = "smooth"
                    }
                    )),
                    t.rec && t(t.rec))
                }
                )),
                Ie(Dt, 1),
                G.pause(),
                He++,
                wt = 2,
                Ke(2),
                Me.forEach((function(t) {
                    return Ut(t.vars.onRefresh) && t.vars.onRefresh(t)
                }
                )),
                wt = ln.isRefreshing = !1,
                Re("refresh")
            } else
                _e(ln, "scrollEnd", Ne)
        }, Ue = 0, je = 1, Ke = function(t) {
            if (2 === t || !wt && !_t) {
                ln.isUpdating = !0,
                Et && Et.update(0);
                var e = Me.length
                  , n = Tt()
                  , r = n - Mt >= 50
                  , i = e && Me[0].scroll();
                if (je = Ue > i ? -1 : 1,
                wt || (Ue = i),
                r && (At && !et && n - At > 200 && (At = 0,
                Re("scrollEnd")),
                Q = Mt,
                Mt = n),
                je < 0) {
                    for (rt = e; rt-- > 0; )
                        Me[rt] && Me[rt].update(0, r);
                    je = 1
                } else
                    for (rt = 0; rt < e; rt++)
                        Me[rt] && Me[rt].update(0, r);
                ln.isUpdating = !1
            }
            Ct = 0
        }, Ge = [Qt, "top", te, Jt, ue + se, ue + re, ue + oe, ue + ie, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Ze = Ge.concat([ee, ne, "boxSizing", "max" + le, "max" + ce, "position", ue, ae, ae + oe, ae + re, ae + se, ae + ie]), $e = function(t, e, n, r) {
            if (!t._gsap.swappedIn) {
                for (var i, o = Ge.length, s = e.style, a = t.style; o--; )
                    s[i = Ge[o]] = n[i];
                s.position = "absolute" === n.position ? "absolute" : "relative",
                "inline" === n.display && (s.display = "inline-block"),
                a[te] = a[Jt] = "auto",
                s.flexBasis = n.flexBasis || "auto",
                s.overflow = "visible",
                s.boxSizing = "border-box",
                s[ee] = ge(t, P) + fe,
                s[ne] = ge(t, O) + fe,
                s[ae] = a[ue] = a.top = a[Qt] = "0",
                Je(r),
                a[ee] = a["max" + le] = n[ee],
                a[ne] = a["max" + ce] = n[ne],
                a[ae] = n[ae],
                t.parentNode !== e && (t.parentNode.insertBefore(e, t),
                e.appendChild(t)),
                t._gsap.swappedIn = !0
            }
        }, Qe = /([A-Z])/g, Je = function(t) {
            if (t) {
                var e, n, r = t.t.style, i = t.length, o = 0;
                for ((t.t._gsap || H.core.getCache(t.t)).uncache = 1; o < i; o += 2)
                    n = t[o + 1],
                    e = t[o],
                    n ? r[e] = n : r[e] && r.removeProperty(e.replace(Qe, "-$1").toLowerCase())
            }
        }, tn = function(t) {
            for (var e = Ze.length, n = t.style, r = [], i = 0; i < e; i++)
                r.push(Ze[i], n[Ze[i]]);
            return r.t = t,
            r
        }, en = {
            left: 0,
            top: 0
        }, nn = function(t, e, n, r, i, o, s, a, u, l, c, f, h, p) {
            Ut(t) && (t = t(a)),
            Vt(t) && "max" === t.substr(0, 3) && (t = f + ("=" === t.charAt(4) ? Ee("0" + t.substr(3), n) : 0));
            var d, g, D, v = h ? h.time() : 0;
            if (h && h.seek(0),
            isNaN(t) || (t = +t),
            jt(t))
                h && (t = H.utils.mapRange(h.scrollTrigger.start, h.scrollTrigger.end, 0, f, t)),
                s && Te(s, n, r, !0);
            else {
                Ut(e) && (e = e(a));
                var m, _, y, x, C = (t || "0").split(" ");
                D = B(e, a) || j,
                (m = de(D) || {}) && (m.left || m.top) || "none" !== he(D).display || (x = D.style.display,
                D.style.display = "block",
                m = de(D),
                x ? D.style.display = x : D.style.removeProperty("display")),
                _ = Ee(C[0], m[r.d]),
                y = Ee(C[1] || "0", n),
                t = m[r.p] - u[r.p] - l + _ + i - y,
                s && Te(s, y, r, n - y < 20 || s._isStart && y > 20),
                n -= n - y
            }
            if (p && (a[p] = t || -.001,
            t < 0 && (t = 0)),
            o) {
                var w = t + n
                  , b = o._isStart;
                d = "scroll" + r.d2,
                Te(o, w, r, b && w > 20 || !b && (c ? Math.max(j[d], U[d]) : o.parentNode[d]) <= w + 1),
                c && (u = de(s),
                c && (o.style[r.op.p] = u[r.op.p] - r.op.m - o._offset + fe))
            }
            return h && D && (d = de(D),
            h.seek(f),
            g = de(D),
            h._caScrollDist = d[r.p] - g[r.p],
            t = t / h._caScrollDist * f),
            h && h.seek(v),
            h ? t : Math.round(t)
        }, rn = /(webkit|moz|length|cssText|inset)/i, on = function(t, e, n, r) {
            if (t.parentNode !== e) {
                var i, o, s = t.style;
                if (e === j) {
                    for (i in t._stOrig = s.cssText,
                    o = he(t))
                        +i || rn.test(i) || !o[i] || "string" != typeof s[i] || "0" === i || (s[i] = o[i]);
                    s.top = n,
                    s.left = r
                } else
                    s.cssText = t._stOrig;
                H.core.getCache(t).uncache = 1,
                e.appendChild(t)
            }
        }, sn = function(t, e, n) {
            var r = e
              , i = r;
            return function(e) {
                var o = Math.round(t());
                return o !== r && o !== i && Math.abs(o - r) > 3 && Math.abs(o - i) > 3 && (e = o,
                n && n()),
                i = r,
                r = Math.round(e)
            }
        }, an = function(t, e, n) {
            var r = {};
            r[e.p] = "+=" + n,
            H.set(t, r)
        }, un = function(t, e) {
            var n = L(t, e)
              , r = "_scroll" + e.p2
              , i = function e(i, o, s, a, u) {
                var l = e.tween
                  , c = o.onComplete
                  , f = {};
                s = s || n();
                var h = sn(n, s, (function() {
                    l.kill(),
                    e.tween = 0
                }
                ));
                return u = a && u || 0,
                a = a || i - s,
                l && l.kill(),
                o[r] = i,
                o.inherit = !1,
                o.modifiers = f,
                f[r] = function() {
                    return h(s + a * l.ratio + u * l.ratio * l.ratio)
                }
                ,
                o.onUpdate = function() {
                    y.cache++,
                    e.tween && Ke()
                }
                ,
                o.onComplete = function() {
                    e.tween = 0,
                    c && c.call(l)
                }
                ,
                l = e.tween = H.to(t, o)
            };
            return t[r] = n,
            n.wheelHandler = function() {
                return i.tween && i.tween.kill() && (i.tween = 0)
            }
            ,
            _e(t, "wheel", n.wheelHandler),
            ln.isTouch && _e(t, "touchmove", n.wheelHandler),
            i
        }, ln = function() {
            function t(e, n) {
                W || t.register(H) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
                gt(this),
                this.init(e, n)
            }
            return t.prototype.init = function(e, n) {
                if (this.progress = this.start = 0,
                this.vars && this.kill(!0, !0),
                kt) {
                    var r, i, o, s, a, u, l, c, f, h, p, d, g, D, v, m, _, C, w, E, F, T, M, A, k, S, N, R, Y, X, z, I, W, K, G, J, nt, it, ot, st, lt, ct, ft = e = pe(Vt(e) || jt(e) || e.nodeType ? {
                        trigger: e
                    } : e, we), ht = ft.onUpdate, pt = ft.toggleClass, dt = ft.id, gt = ft.onToggle, Dt = ft.onRefresh, vt = ft.scrub, mt = ft.trigger, _t = ft.pin, Ct = ft.pinSpacing, Mt = ft.invalidateOnRefresh, Ot = ft.anticipatePin, Bt = ft.onScrubComplete, Lt = ft.onSnapComplete, Yt = ft.once, Xt = ft.snap, qt = ft.pinReparent, Qt = ft.pinSpacer, Jt = ft.containerAnimation, te = ft.fastScrollEnd, me = ft.preventOverlaps, xe = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? P : O, be = !vt && 0 !== vt, Te = B(e.scroller || q), ke = H.core.getCache(Te), Pe = zt(Te), Be = "fixed" === ("pinType"in e ? e.pinType : b(Te, "pinType") || Pe && "fixed"), Le = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack], Re = be && e.toggleActions.split(" "), Ye = "markers"in e ? e.markers : we.markers, Xe = Pe ? 0 : parseFloat(he(Te)["border" + xe.p2 + le]) || 0, ze = this, Ie = e.onRefreshInit && function() {
                        return e.onRefreshInit(ze)
                    }
                    , We = function(t, e, n) {
                        var r = n.d
                          , i = n.d2
                          , o = n.a;
                        return (o = b(t, "getBoundingClientRect")) ? function() {
                            return o()[r]
                        }
                        : function() {
                            return (e ? It(i) : t["client" + i]) || 0
                        }
                    }(Te, Pe, xe), qe = function(t, e) {
                        return !e || ~x.indexOf(t) ? Ht(t) : function() {
                            return en
                        }
                    }(Te, Pe), Ue = 0, Ke = 0, Ge = 0, Ze = L(Te, xe);
                    if (ze._startClamp = ze._endClamp = !1,
                    ze._dir = xe,
                    Ot *= 45,
                    ze.scroller = Te,
                    ze.scroll = Jt ? Jt.time.bind(Jt) : Ze,
                    s = Ze(),
                    ze.vars = e,
                    n = n || e.animation,
                    "refreshPriority"in e && (at = 1,
                    -9999 === e.refreshPriority && (Et = ze)),
                    ke.tweenScroll = ke.tweenScroll || {
                        top: un(Te, O),
                        left: un(Te, P)
                    },
                    ze.tweenTo = r = ke.tweenScroll[xe.p],
                    ze.scrubDuration = function(t) {
                        (W = jt(t) && t) ? I ? I.duration(t) : I = H.to(n, {
                            ease: "expo",
                            totalProgress: "+=0",
                            inherit: !1,
                            duration: W,
                            paused: !0,
                            onComplete: function() {
                                return Bt && Bt(ze)
                            }
                        }) : (I && I.progress(1).kill(),
                        I = 0)
                    }
                    ,
                    n && (n.vars.lazy = !1,
                    n._initted && !ze.isReverted || !1 !== n.vars.immediateRender && !1 !== e.immediateRender && n.duration() && n.render(0, !0, !0),
                    ze.animation = n.pause(),
                    n.scrollTrigger = ze,
                    ze.scrubDuration(vt),
                    X = 0,
                    dt || (dt = n.vars.id)),
                    Xt && (Kt(Xt) && !Xt.push || (Xt = {
                        snapTo: Xt
                    }),
                    "scrollBehavior"in j.style && H.set(Pe ? [j, U] : Te, {
                        scrollBehavior: "auto"
                    }),
                    y.forEach((function(t) {
                        return Ut(t) && t.target === (Pe ? V.scrollingElement || U : Te) && (t.smooth = !1)
                    }
                    )),
                    o = Ut(Xt.snapTo) ? Xt.snapTo : "labels" === Xt.snapTo ? function(t) {
                        return function(e) {
                            return H.utils.snap(De(t), e)
                        }
                    }(n) : "labelsDirectional" === Xt.snapTo ? (st = n,
                    function(t, e) {
                        return ve(De(st))(t, e.direction)
                    }
                    ) : !1 !== Xt.directional ? function(t, e) {
                        return ve(Xt.snapTo)(t, Tt() - Ke < 500 ? 0 : e.direction)
                    }
                    : H.utils.snap(Xt.snapTo),
                    K = Xt.duration || {
                        min: .1,
                        max: 2
                    },
                    K = Kt(K) ? $(K.min, K.max) : $(K, K),
                    G = H.delayedCall(Xt.delay || W / 2 || .1, (function() {
                        var t = Ze()
                          , e = Tt() - Ke < 500
                          , i = r.tween;
                        if (!(e || Math.abs(ze.getVelocity()) < 10) || i || et || Ue === t)
                            ze.isActive && Ue !== t && G.restart(!0);
                        else {
                            var s, a, c = (t - u) / D, f = n && !be ? n.totalProgress() : c, h = e ? 0 : (f - z) / (Tt() - Q) * 1e3 || 0, p = H.utils.clamp(-c, 1 - c, $t(h / 2) * h / .185), d = c + (!1 === Xt.inertia ? 0 : p), g = Xt, v = g.onStart, m = g.onInterrupt, _ = g.onComplete;
                            if (s = o(d, ze),
                            jt(s) || (s = d),
                            a = Math.max(0, Math.round(u + s * D)),
                            t <= l && t >= u && a !== t) {
                                if (i && !i._initted && i.data <= $t(a - t))
                                    return;
                                !1 === Xt.inertia && (p = s - c),
                                r(a, {
                                    duration: K($t(.185 * Math.max($t(d - f), $t(s - f)) / h / .05 || 0)),
                                    ease: Xt.ease || "power3",
                                    data: $t(a - t),
                                    onInterrupt: function() {
                                        return G.restart(!0) && m && m(ze)
                                    },
                                    onComplete: function() {
                                        ze.update(),
                                        Ue = Ze(),
                                        n && !be && (I ? I.resetTo("totalProgress", s, n._tTime / n._tDur) : n.progress(s)),
                                        X = z = n && !be ? n.totalProgress() : ze.progress,
                                        Lt && Lt(ze),
                                        _ && _(ze)
                                    }
                                }, t, p * D, a - t - p * D),
                                v && v(ze, r.tween)
                            }
                        }
                    }
                    )).pause()),
                    dt && (Ae[dt] = ze),
                    (ot = (mt = ze.trigger = B(mt || !0 !== _t && _t)) && mt._gsap && mt._gsap.stRevert) && (ot = ot(ze)),
                    _t = !0 === _t ? mt : B(_t),
                    Vt(pt) && (pt = {
                        targets: mt,
                        className: pt
                    }),
                    _t && (!1 === Ct || Ct === ue || (Ct = !(!Ct && _t.parentNode && _t.parentNode.style && "flex" === he(_t.parentNode).display) && ae),
                    ze.pin = _t,
                    (i = H.core.getCache(_t)).spacer ? v = i.pinState : (Qt && ((Qt = B(Qt)) && !Qt.nodeType && (Qt = Qt.current || Qt.nativeElement),
                    i.spacerIsNative = !!Qt,
                    Qt && (i.spacerState = tn(Qt))),
                    i.spacer = C = Qt || V.createElement("div"),
                    C.classList.add("pin-spacer"),
                    dt && C.classList.add("pin-spacer-" + dt),
                    i.pinState = v = tn(_t)),
                    !1 !== e.force3D && H.set(_t, {
                        force3D: !0
                    }),
                    ze.spacer = C = i.spacer,
                    Y = he(_t),
                    A = Y[Ct + xe.os2],
                    E = H.getProperty(_t),
                    F = H.quickSetter(_t, xe.a, fe),
                    $e(_t, C, Y),
                    _ = tn(_t)),
                    Ye) {
                        d = Kt(Ye) ? pe(Ye, Ce) : Ce,
                        h = Fe("scroller-start", dt, Te, xe, d, 0),
                        p = Fe("scroller-end", dt, Te, xe, d, 0, h),
                        w = h["offset" + xe.op.d2];
                        var Qe = B(b(Te, "content") || Te);
                        c = this.markerStart = Fe("start", dt, Qe, xe, d, w, 0, Jt),
                        f = this.markerEnd = Fe("end", dt, Qe, xe, d, w, 0, Jt),
                        Jt && (it = H.quickSetter([c, f], xe.a, fe)),
                        Be || x.length && !0 === b(Te, "fixedMarkers") || (ct = he(lt = Pe ? j : Te).position,
                        lt.style.position = "absolute" === ct || "fixed" === ct ? ct : "relative",
                        H.set([h, p], {
                            force3D: !0
                        }),
                        S = H.quickSetter(h, xe.a, fe),
                        R = H.quickSetter(p, xe.a, fe))
                    }
                    if (Jt) {
                        var rn = Jt.vars.onUpdate
                          , sn = Jt.vars.onUpdateParams;
                        Jt.eventCallback("onUpdate", (function() {
                            ze.update(0, 0, 1),
                            rn && rn.apply(Jt, sn || [])
                        }
                        ))
                    }
                    if (ze.previous = function() {
                        return Me[Me.indexOf(ze) - 1]
                    }
                    ,
                    ze.next = function() {
                        return Me[Me.indexOf(ze) + 1]
                    }
                    ,
                    ze.revert = function(t, e) {
                        if (!e)
                            return ze.kill(!0);
                        var r = !1 !== t || !ze.enabled
                          , i = tt;
                        r !== ze.isReverted && (r && (J = Math.max(Ze(), ze.scroll.rec || 0),
                        Ge = ze.progress,
                        nt = n && n.progress()),
                        c && [c, f, h, p].forEach((function(t) {
                            return t.style.display = r ? "none" : "block"
                        }
                        )),
                        r && (tt = ze,
                        ze.update(r)),
                        !_t || qt && ze.isActive || (r ? function(t, e, n) {
                            Je(n);
                            var r = t._gsap;
                            if (r.spacerIsNative)
                                Je(r.spacerState);
                            else if (t._gsap.swappedIn) {
                                var i = e.parentNode;
                                i && (i.insertBefore(t, e),
                                i.removeChild(e))
                            }
                            t._gsap.swappedIn = !1
                        }(_t, C, v) : $e(_t, C, he(_t), k)),
                        r || ze.update(r),
                        tt = i,
                        ze.isReverted = r)
                    }
                    ,
                    ze.refresh = function(i, o, d, y) {
                        if (!tt && ze.enabled || o)
                            if (_t && i && At)
                                _e(t, "scrollEnd", Ne);
                            else {
                                !wt && Ie && Ie(ze),
                                tt = ze,
                                r.tween && !d && (r.tween.kill(),
                                r.tween = 0),
                                I && I.pause(),
                                Mt && n && n.revert({
                                    kill: !1
                                }).invalidate(),
                                ze.isReverted || ze.revert(!0, !0),
                                ze._subPinOffset = !1;
                                var x, w, b, F, A, S, R, Y, X, z, W, q, K, Z = We(), $ = qe(), Q = Jt ? Jt.duration() : Wt(Te, xe), et = D <= .01, rt = 0, it = y || 0, ot = Kt(d) ? d.end : e.end, st = e.endTrigger || mt, at = Kt(d) ? d.start : e.start || (0 !== e.start && mt ? _t ? "0 0" : "0 100%" : 0), lt = ze.pinnedContainer = e.pinnedContainer && B(e.pinnedContainer, ze), ct = mt && Math.max(0, Me.indexOf(ze)) || 0, ft = ct;
                                for (Ye && Kt(d) && (q = H.getProperty(h, xe.p),
                                K = H.getProperty(p, xe.p)); ft-- > 0; )
                                    (S = Me[ft]).end || S.refresh(0, 1) || (tt = ze),
                                    !(R = S.pin) || R !== mt && R !== _t && R !== lt || S.isReverted || (z || (z = []),
                                    z.unshift(S),
                                    S.revert(!0, !0)),
                                    S !== Me[ft] && (ct--,
                                    ft--);
                                for (Ut(at) && (at = at(ze)),
                                at = St(at, "start", ze),
                                u = nn(at, mt, Z, xe, Ze(), c, h, ze, $, Xe, Be, Q, Jt, ze._startClamp && "_startClamp") || (_t ? -.001 : 0),
                                Ut(ot) && (ot = ot(ze)),
                                Vt(ot) && !ot.indexOf("+=") && (~ot.indexOf(" ") ? ot = (Vt(at) ? at.split(" ")[0] : "") + ot : (rt = Ee(ot.substr(2), Z),
                                ot = Vt(at) ? at : (Jt ? H.utils.mapRange(0, Jt.duration(), Jt.scrollTrigger.start, Jt.scrollTrigger.end, u) : u) + rt,
                                st = mt)),
                                ot = St(ot, "end", ze),
                                l = Math.max(u, nn(ot || (st ? "100% 0" : Q), st, Z, xe, Ze() + rt, f, p, ze, $, Xe, Be, Q, Jt, ze._endClamp && "_endClamp")) || -.001,
                                rt = 0,
                                ft = ct; ft--; )
                                    (R = (S = Me[ft]).pin) && S.start - S._pinPush <= u && !Jt && S.end > 0 && (x = S.end - (ze._startClamp ? Math.max(0, S.start) : S.start),
                                    (R === mt && S.start - S._pinPush < u || R === lt) && isNaN(at) && (rt += x * (1 - S.progress)),
                                    R === _t && (it += x));
                                if (u += rt,
                                l += rt,
                                ze._startClamp && (ze._startClamp += rt),
                                ze._endClamp && !wt && (ze._endClamp = l || -.001,
                                l = Math.min(l, Wt(Te, xe))),
                                D = l - u || (u -= .01) && .001,
                                et && (Ge = H.utils.clamp(0, 1, H.utils.normalize(u, l, J))),
                                ze._pinPush = it,
                                c && rt && ((x = {})[xe.a] = "+=" + rt,
                                lt && (x[xe.p] = "-=" + Ze()),
                                H.set([c, f], x)),
                                !_t || yt && ze.end >= Wt(Te, xe)) {
                                    if (mt && Ze() && !Jt)
                                        for (w = mt.parentNode; w && w !== j; )
                                            w._pinOffset && (u -= w._pinOffset,
                                            l -= w._pinOffset),
                                            w = w.parentNode
                                } else
                                    x = he(_t),
                                    F = xe === O,
                                    b = Ze(),
                                    T = parseFloat(E(xe.a)) + it,
                                    !Q && l > 1 && (W = {
                                        style: W = (Pe ? V.scrollingElement || U : Te).style,
                                        value: W["overflow" + xe.a.toUpperCase()]
                                    },
                                    Pe && "scroll" !== he(j)["overflow" + xe.a.toUpperCase()] && (W.style["overflow" + xe.a.toUpperCase()] = "scroll")),
                                    $e(_t, C, x),
                                    _ = tn(_t),
                                    w = de(_t, !0),
                                    Y = Be && L(Te, F ? P : O)(),
                                    Ct ? ((k = [Ct + xe.os2, D + it + fe]).t = C,
                                    (ft = Ct === ae ? ge(_t, xe) + D + it : 0) && (k.push(xe.d, ft + fe),
                                    "auto" !== C.style.flexBasis && (C.style.flexBasis = ft + fe)),
                                    Je(k),
                                    lt && Me.forEach((function(t) {
                                        t.pin === lt && !1 !== t.vars.pinSpacing && (t._subPinOffset = !0)
                                    }
                                    )),
                                    Be && Ze(J)) : (ft = ge(_t, xe)) && "auto" !== C.style.flexBasis && (C.style.flexBasis = ft + fe),
                                    Be && ((A = {
                                        top: w.top + (F ? b - u : Y) + fe,
                                        left: w.left + (F ? Y : b - u) + fe,
                                        boxSizing: "border-box",
                                        position: "fixed"
                                    })[ee] = A["max" + le] = Math.ceil(w.width) + fe,
                                    A[ne] = A["max" + ce] = Math.ceil(w.height) + fe,
                                    A[ue] = A[ue + oe] = A[ue + re] = A[ue + se] = A[ue + ie] = "0",
                                    A[ae] = x[ae],
                                    A[ae + oe] = x[ae + oe],
                                    A[ae + re] = x[ae + re],
                                    A[ae + se] = x[ae + se],
                                    A[ae + ie] = x[ae + ie],
                                    m = function(t, e, n) {
                                        for (var r, i = [], o = t.length, s = n ? 8 : 0; s < o; s += 2)
                                            r = t[s],
                                            i.push(r, r in e ? e[r] : t[s + 1]);
                                        return i.t = t.t,
                                        i
                                    }(v, A, qt),
                                    wt && Ze(0)),
                                    n ? (X = n._initted,
                                    ut(1),
                                    n.render(n.duration(), !0, !0),
                                    M = E(xe.a) - T + D + it,
                                    N = Math.abs(D - M) > 1,
                                    Be && N && m.splice(m.length - 2, 2),
                                    n.render(0, !0, !0),
                                    X || n.invalidate(!0),
                                    n.parent || n.totalTime(n.totalTime()),
                                    ut(0)) : M = D,
                                    W && (W.value ? W.style["overflow" + xe.a.toUpperCase()] = W.value : W.style.removeProperty("overflow-" + xe.a));
                                z && z.forEach((function(t) {
                                    return t.revert(!1, !0)
                                }
                                )),
                                ze.start = u,
                                ze.end = l,
                                s = a = wt ? J : Ze(),
                                Jt || wt || (s < J && Ze(J),
                                ze.scroll.rec = 0),
                                ze.revert(!1, !0),
                                Ke = Tt(),
                                G && (Ue = -1,
                                G.restart(!0)),
                                tt = 0,
                                n && be && (n._initted || nt) && n.progress() !== nt && n.progress(nt || 0, !0).render(n.time(), !0, !0),
                                (et || Ge !== ze.progress || Jt || Mt || n && !n._initted) && (n && !be && n.totalProgress(Jt && u < -.001 && !Ge ? H.utils.normalize(u, l, 0) : Ge, !0),
                                ze.progress = et || (s - u) / D === Ge ? 0 : Ge),
                                _t && Ct && (C._pinOffset = Math.round(ze.progress * M)),
                                I && I.invalidate(),
                                isNaN(q) || (q -= H.getProperty(h, xe.p),
                                K -= H.getProperty(p, xe.p),
                                an(h, xe, q),
                                an(c, xe, q - (y || 0)),
                                an(p, xe, K),
                                an(f, xe, K - (y || 0))),
                                et && !wt && ze.update(),
                                !Dt || wt || g || (g = !0,
                                Dt(ze),
                                g = !1)
                            }
                    }
                    ,
                    ze.getVelocity = function() {
                        return (Ze() - a) / (Tt() - Q) * 1e3 || 0
                    }
                    ,
                    ze.endAnimation = function() {
                        Gt(ze.callbackAnimation),
                        n && (I ? I.progress(1) : n.paused() ? be || Gt(n, ze.direction < 0, 1) : Gt(n, n.reversed()))
                    }
                    ,
                    ze.labelToScroll = function(t) {
                        return n && n.labels && (u || ze.refresh() || u) + n.labels[t] / n.duration() * D || 0
                    }
                    ,
                    ze.getTrailing = function(t) {
                        var e = Me.indexOf(ze)
                          , n = ze.direction > 0 ? Me.slice(0, e).reverse() : Me.slice(e + 1);
                        return (Vt(t) ? n.filter((function(e) {
                            return e.vars.preventOverlaps === t
                        }
                        )) : n).filter((function(t) {
                            return ze.direction > 0 ? t.end <= u : t.start >= l
                        }
                        ))
                    }
                    ,
                    ze.update = function(t, e, i) {
                        if (!Jt || i || t) {
                            var o, c, f, p, d, g, v, y = !0 === wt ? J : ze.scroll(), x = t ? 0 : (y - u) / D, w = x < 0 ? 0 : x > 1 ? 1 : x || 0, b = ze.progress;
                            if (e && (a = s,
                            s = Jt ? Ze() : y,
                            Xt && (z = X,
                            X = n && !be ? n.totalProgress() : w)),
                            Ot && _t && !tt && !Ft && At && (!w && u < y + (y - a) / (Tt() - Q) * Ot ? w = 1e-4 : 1 === w && l > y + (y - a) / (Tt() - Q) * Ot && (w = .9999)),
                            w !== b && ze.enabled) {
                                if (p = (d = (o = ze.isActive = !!w && w < 1) != (!!b && b < 1)) || !!w != !!b,
                                ze.direction = w > b ? 1 : -1,
                                ze.progress = w,
                                p && !tt && (c = w && !b ? 0 : 1 === w ? 1 : 1 === b ? 2 : 3,
                                be && (f = !d && "none" !== Re[c + 1] && Re[c + 1] || Re[c],
                                v = n && ("complete" === f || "reset" === f || f in n))),
                                me && (d || v) && (v || vt || !n) && (Ut(me) ? me(ze) : ze.getTrailing(me).forEach((function(t) {
                                    return t.endAnimation()
                                }
                                ))),
                                be || (!I || tt || Ft ? n && n.totalProgress(w, !(!tt || !Ke && !t)) : (I._dp._time - I._start !== I._time && I.render(I._dp._time - I._start),
                                I.resetTo ? I.resetTo("totalProgress", w, n._tTime / n._tDur) : (I.vars.totalProgress = w,
                                I.invalidate().restart()))),
                                _t)
                                    if (t && Ct && (C.style[Ct + xe.os2] = A),
                                    Be) {
                                        if (p) {
                                            if (g = !t && w > b && l + 1 > y && y + 1 >= Wt(Te, xe),
                                            qt)
                                                if (t || !o && !g)
                                                    on(_t, C);
                                                else {
                                                    var E = de(_t, !0)
                                                      , k = y - u;
                                                    on(_t, j, E.top + (xe === O ? k : 0) + fe, E.left + (xe === O ? 0 : k) + fe)
                                                }
                                            Je(o || g ? m : _),
                                            N && w < 1 && o || F(T + (1 !== w || g ? 0 : M))
                                        }
                                    } else
                                        F(Rt(T + M * w));
                                Xt && !r.tween && !tt && !Ft && G.restart(!0),
                                pt && (d || Yt && w && (w < 1 || !xt)) && Z(pt.targets).forEach((function(t) {
                                    return t.classList[o || Yt ? "add" : "remove"](pt.className)
                                }
                                )),
                                ht && !be && !t && ht(ze),
                                p && !tt ? (be && (v && ("complete" === f ? n.pause().totalProgress(1) : "reset" === f ? n.restart(!0).pause() : "restart" === f ? n.restart(!0) : n[f]()),
                                ht && ht(ze)),
                                !d && xt || (gt && d && Zt(ze, gt),
                                Le[c] && Zt(ze, Le[c]),
                                Yt && (1 === w ? ze.kill(!1, 1) : Le[c] = 0),
                                d || Le[c = 1 === w ? 1 : 3] && Zt(ze, Le[c])),
                                te && !o && Math.abs(ze.getVelocity()) > (jt(te) ? te : 2500) && (Gt(ze.callbackAnimation),
                                I ? I.progress(1) : Gt(n, "reverse" === f ? 1 : !w, 1))) : be && ht && !tt && ht(ze)
                            }
                            if (R) {
                                var P = Jt ? y / Jt.duration() * (Jt._caScrollDist || 0) : y;
                                S(P + (h._isFlipped ? 1 : 0)),
                                R(P)
                            }
                            it && it(-y / Jt.duration() * (Jt._caScrollDist || 0))
                        }
                    }
                    ,
                    ze.enable = function(e, n) {
                        ze.enabled || (ze.enabled = !0,
                        _e(Te, "resize", Oe),
                        Pe || _e(Te, "scroll", Se),
                        Ie && _e(t, "refreshInit", Ie),
                        !1 !== e && (ze.progress = Ge = 0,
                        s = a = Ue = Ze()),
                        !1 !== n && ze.refresh())
                    }
                    ,
                    ze.getTween = function(t) {
                        return t && r ? r.tween : I
                    }
                    ,
                    ze.setPositions = function(t, e, n, r) {
                        if (Jt) {
                            var i = Jt.scrollTrigger
                              , o = Jt.duration()
                              , s = i.end - i.start;
                            t = i.start + s * t / o,
                            e = i.start + s * e / o
                        }
                        ze.refresh(!1, !1, {
                            start: Pt(t, n && !!ze._startClamp),
                            end: Pt(e, n && !!ze._endClamp)
                        }, r),
                        ze.update()
                    }
                    ,
                    ze.adjustPinSpacing = function(t) {
                        if (k && t) {
                            var e = k.indexOf(xe.d) + 1;
                            k[e] = parseFloat(k[e]) + t + fe,
                            k[1] = parseFloat(k[1]) + t + fe,
                            Je(k)
                        }
                    }
                    ,
                    ze.disable = function(e, n) {
                        if (ze.enabled && (!1 !== e && ze.revert(!0, !0),
                        ze.enabled = ze.isActive = !1,
                        n || I && I.pause(),
                        J = 0,
                        i && (i.uncache = 1),
                        Ie && ye(t, "refreshInit", Ie),
                        G && (G.pause(),
                        r.tween && r.tween.kill() && (r.tween = 0)),
                        !Pe)) {
                            for (var o = Me.length; o--; )
                                if (Me[o].scroller === Te && Me[o] !== ze)
                                    return;
                            ye(Te, "resize", Oe),
                            Pe || ye(Te, "scroll", Se)
                        }
                    }
                    ,
                    ze.kill = function(t, r) {
                        ze.disable(t, r),
                        I && !r && I.kill(),
                        dt && delete Ae[dt];
                        var o = Me.indexOf(ze);
                        o >= 0 && Me.splice(o, 1),
                        o === rt && je > 0 && rt--,
                        o = 0,
                        Me.forEach((function(t) {
                            return t.scroller === ze.scroller && (o = 1)
                        }
                        )),
                        o || wt || (ze.scroll.rec = 0),
                        n && (n.scrollTrigger = null,
                        t && n.revert({
                            kill: !1
                        }),
                        r || n.kill()),
                        c && [c, f, h, p].forEach((function(t) {
                            return t.parentNode && t.parentNode.removeChild(t)
                        }
                        )),
                        Et === ze && (Et = 0),
                        _t && (i && (i.uncache = 1),
                        o = 0,
                        Me.forEach((function(t) {
                            return t.pin === _t && o++
                        }
                        )),
                        o || (i.spacer = 0)),
                        e.onKill && e.onKill(ze)
                    }
                    ,
                    Me.push(ze),
                    ze.enable(!1, !1),
                    ot && ot(ze),
                    n && n.add && !D) {
                        var ln = ze.update;
                        ze.update = function() {
                            ze.update = ln,
                            y.cache++,
                            u || l || ze.refresh()
                        }
                        ,
                        H.delayedCall(.01, ze.update),
                        D = .01,
                        u = l = 0
                    } else
                        ze.refresh();
                    _t && function() {
                        if (bt !== He) {
                            var t = bt = He;
                            requestAnimationFrame((function() {
                                return t === He && Ve(!0)
                            }
                            ))
                        }
                    }()
                } else
                    this.update = this.refresh = this.kill = Nt
            }
            ,
            t.register = function(e) {
                return W || (H = e || Xt(),
                Yt() && window.document && t.enable(),
                W = kt),
                W
            }
            ,
            t.defaults = function(t) {
                if (t)
                    for (var e in t)
                        we[e] = t[e];
                return we
            }
            ,
            t.disable = function(t, e) {
                kt = 0,
                Me.forEach((function(n) {
                    return n[e ? "kill" : "disable"](t)
                }
                )),
                ye(q, "wheel", Se),
                ye(V, "scroll", Se),
                clearInterval(J),
                ye(V, "touchcancel", Nt),
                ye(j, "touchstart", Nt),
                me(ye, V, "pointerdown,touchstart,mousedown", Bt),
                me(ye, V, "pointerup,touchend,mouseup", Lt),
                G.kill(),
                qt(ye);
                for (var n = 0; n < y.length; n += 3)
                    xe(ye, y[n], y[n + 1]),
                    xe(ye, y[n], y[n + 2])
            }
            ,
            t.enable = function() {
                if (q = window,
                V = document,
                U = V.documentElement,
                j = V.body,
                H && (Z = H.utils.toArray,
                $ = H.utils.clamp,
                gt = H.core.context || Nt,
                ut = H.core.suppressOverwrites || Nt,
                Dt = q.history.scrollRestoration || "auto",
                Ue = q.pageYOffset || 0,
                H.core.globals("ScrollTrigger", t),
                j)) {
                    kt = 1,
                    (vt = document.createElement("div")).style.height = "100vh",
                    vt.style.position = "absolute",
                    We(),
                    Ot(),
                    I.register(H),
                    t.isTouch = I.isTouch,
                    dt = I.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
                    ft = 1 === I.isTouch,
                    _e(q, "wheel", Se),
                    K = [q, V, U, j],
                    H.matchMedia ? (t.matchMedia = function(t) {
                        var e, n = H.matchMedia();
                        for (e in t)
                            n.add(e, t[e]);
                        return n
                    }
                    ,
                    H.addEventListener("matchMediaInit", (function() {
                        return ze()
                    }
                    )),
                    H.addEventListener("matchMediaRevert", (function() {
                        return Xe()
                    }
                    )),
                    H.addEventListener("matchMedia", (function() {
                        Ve(0, 1),
                        Re("matchMedia")
                    }
                    )),
                    H.matchMedia().add("(orientation: portrait)", (function() {
                        return Pe(),
                        Pe
                    }
                    ))) : console.warn("Requires GSAP 3.11.0 or later"),
                    Pe(),
                    _e(V, "scroll", Se);
                    var e, n, r = j.hasAttribute("style"), i = j.style, o = i.borderTopStyle, s = H.core.Animation.prototype;
                    for (s.revert || Object.defineProperty(s, "revert", {
                        value: function() {
                            return this.time(-.01, !0)
                        }
                    }),
                    i.borderTopStyle = "solid",
                    e = de(j),
                    O.m = Math.round(e.top + O.sc()) || 0,
                    P.m = Math.round(e.left + P.sc()) || 0,
                    o ? i.borderTopStyle = o : i.removeProperty("border-top-style"),
                    r || (j.setAttribute("style", ""),
                    j.removeAttribute("style")),
                    J = setInterval(ke, 250),
                    H.delayedCall(.5, (function() {
                        return Ft = 0
                    }
                    )),
                    _e(V, "touchcancel", Nt),
                    _e(j, "touchstart", Nt),
                    me(_e, V, "pointerdown,touchstart,mousedown", Bt),
                    me(_e, V, "pointerup,touchend,mouseup", Lt),
                    nt = H.utils.checkPrefix("transform"),
                    Ze.push(nt),
                    W = Tt(),
                    G = H.delayedCall(.2, Ve).pause(),
                    st = [V, "visibilitychange", function() {
                        var t = q.innerWidth
                          , e = q.innerHeight;
                        V.hidden ? (it = t,
                        ot = e) : it === t && ot === e || Oe()
                    }
                    , V, "DOMContentLoaded", Ve, q, "load", Ve, q, "resize", Oe],
                    qt(_e),
                    Me.forEach((function(t) {
                        return t.enable(0, 1)
                    }
                    )),
                    n = 0; n < y.length; n += 3)
                        xe(ye, y[n], y[n + 1]),
                        xe(ye, y[n], y[n + 2])
                }
            }
            ,
            t.config = function(e) {
                "limitCallbacks"in e && (xt = !!e.limitCallbacks);
                var n = e.syncInterval;
                n && clearInterval(J) || (J = n) && setInterval(ke, n),
                "ignoreMobileResize"in e && (ft = 1 === t.isTouch && e.ignoreMobileResize),
                "autoRefreshEvents"in e && (qt(ye) || qt(_e, e.autoRefreshEvents || "none"),
                lt = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
            }
            ,
            t.scrollerProxy = function(t, e) {
                var n = B(t)
                  , r = y.indexOf(n)
                  , i = zt(n);
                ~r && y.splice(r, i ? 6 : 2),
                e && (i ? x.unshift(q, e, j, e, U, e) : x.unshift(n, e))
            }
            ,
            t.clearMatchMedia = function(t) {
                Me.forEach((function(e) {
                    return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
                }
                ))
            }
            ,
            t.isInViewport = function(t, e, n) {
                var r = (Vt(t) ? B(t) : t).getBoundingClientRect()
                  , i = r[n ? ee : ne] * e || 0;
                return n ? r.right - i > 0 && r.left + i < q.innerWidth : r.bottom - i > 0 && r.top + i < q.innerHeight
            }
            ,
            t.positionInViewport = function(t, e, n) {
                Vt(t) && (t = B(t));
                var r = t.getBoundingClientRect()
                  , i = r[n ? ee : ne]
                  , o = null == e ? i / 2 : e in be ? be[e] * i : ~e.indexOf("%") ? parseFloat(e) * i / 100 : parseFloat(e) || 0;
                return n ? (r.left + o) / q.innerWidth : (r.top + o) / q.innerHeight
            }
            ,
            t.killAll = function(t) {
                if (Me.slice(0).forEach((function(t) {
                    return "ScrollSmoother" !== t.vars.id && t.kill()
                }
                )),
                !0 !== t) {
                    var e = Be.killAll || [];
                    Be = {},
                    e.forEach((function(t) {
                        return t()
                    }
                    ))
                }
            }
            ,
            t
        }();
        ln.version = "3.12.7",
        ln.saveStyles = function(t) {
            return t ? Z(t).forEach((function(t) {
                if (t && t.style) {
                    var e = Ye.indexOf(t);
                    e >= 0 && Ye.splice(e, 5),
                    Ye.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), H.core.getCache(t), gt())
                }
            }
            )) : Ye
        }
        ,
        ln.revert = function(t, e) {
            return ze(!t, e)
        }
        ,
        ln.create = function(t, e) {
            return new ln(t,e)
        }
        ,
        ln.refresh = function(t) {
            return t ? Oe(!0) : (W || ln.register()) && Ve(!0)
        }
        ,
        ln.update = function(t) {
            return ++y.cache && Ke(!0 === t ? 2 : 0)
        }
        ,
        ln.clearScrollMemory = Ie,
        ln.maxScroll = function(t, e) {
            return Wt(t, e ? P : O)
        }
        ,
        ln.getScrollFunc = function(t, e) {
            return L(B(t), e ? P : O)
        }
        ,
        ln.getById = function(t) {
            return Ae[t]
        }
        ,
        ln.getAll = function() {
            return Me.filter((function(t) {
                return "ScrollSmoother" !== t.vars.id
            }
            ))
        }
        ,
        ln.isScrolling = function() {
            return !!At
        }
        ,
        ln.snapDirectional = ve,
        ln.addEventListener = function(t, e) {
            var n = Be[t] || (Be[t] = []);
            ~n.indexOf(e) || n.push(e)
        }
        ,
        ln.removeEventListener = function(t, e) {
            var n = Be[t]
              , r = n && n.indexOf(e);
            r >= 0 && n.splice(r, 1)
        }
        ,
        ln.batch = function(t, e) {
            var n, r = [], i = {}, o = e.interval || .016, s = e.batchMax || 1e9, a = function(t, e) {
                var n = []
                  , r = []
                  , i = H.delayedCall(o, (function() {
                    e(n, r),
                    n = [],
                    r = []
                }
                )).pause();
                return function(t) {
                    n.length || i.restart(!0),
                    n.push(t.trigger),
                    r.push(t),
                    s <= n.length && i.progress(1)
                }
            };
            for (n in e)
                i[n] = "on" === n.substr(0, 2) && Ut(e[n]) && "onRefreshInit" !== n ? a(0, e[n]) : e[n];
            return Ut(s) && (s = s(),
            _e(ln, "refresh", (function() {
                return s = e.batchMax()
            }
            ))),
            Z(t).forEach((function(t) {
                var e = {};
                for (n in i)
                    e[n] = i[n];
                e.trigger = t,
                r.push(ln.create(e))
            }
            )),
            r
        }
        ;
        var cn, fn = function(t, e, n, r) {
            return e > r ? t(r) : e < 0 && t(0),
            n > r ? (r - e) / (n - e) : n < 0 ? e / (e - n) : 1
        }, hn = function t(e, n) {
            !0 === n ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === n ? "auto" : n ? "pan-" + n + (I.isTouch ? " pinch-zoom" : "") : "none",
            e === U && t(j, n)
        }, pn = {
            auto: 1,
            scroll: 1
        }, dn = function(t) {
            var e, n = t.event, r = t.target, i = t.axis, o = (n.changedTouches ? n.changedTouches[0] : n).target, s = o._gsap || H.core.getCache(o), a = Tt();
            if (!s._isScrollT || a - s._isScrollT > 2e3) {
                for (; o && o !== j && (o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth || !pn[(e = he(o)).overflowY] && !pn[e.overflowX]); )
                    o = o.parentNode;
                s._isScroll = o && o !== r && !zt(o) && (pn[(e = he(o)).overflowY] || pn[e.overflowX]),
                s._isScrollT = a
            }
            (s._isScroll || "x" === i) && (n.stopPropagation(),
            n._gsapAllow = !0)
        }, gn = function(t, e, n, r) {
            return I.create({
                target: t,
                capture: !0,
                debounce: !1,
                lockAxis: !0,
                type: e,
                onWheel: r = r && dn,
                onPress: r,
                onDrag: r,
                onScroll: r,
                onEnable: function() {
                    return n && _e(V, I.eventTypes[0], vn, !1, !0)
                },
                onDisable: function() {
                    return ye(V, I.eventTypes[0], vn, !0)
                }
            })
        }, Dn = /(input|label|select|textarea)/i, vn = function(t) {
            var e = Dn.test(t.target.tagName);
            (e || cn) && (t._gsapAllow = !0,
            cn = e)
        };
        ln.sort = function(t) {
            if (Ut(t))
                return Me.sort(t);
            var e = q.pageYOffset || 0;
            return ln.getAll().forEach((function(t) {
                return t._sortY = t.trigger ? e + t.trigger.getBoundingClientRect().top : t.start + q.innerHeight
            }
            )),
            Me.sort(t || function(t, e) {
                return -1e6 * (t.vars.refreshPriority || 0) + (t.vars.containerAnimation ? 1e6 : t._sortY) - ((e.vars.containerAnimation ? 1e6 : e._sortY) + -1e6 * (e.vars.refreshPriority || 0))
            }
            )
        }
        ,
        ln.observe = function(t) {
            return new I(t)
        }
        ,
        ln.normalizeScroll = function(t) {
            if (void 0 === t)
                return ct;
            if (!0 === t && ct)
                return ct.enable();
            if (!1 === t)
                return ct && ct.kill(),
                void (ct = t);
            var e = t instanceof I ? t : function(t) {
                Kt(t) || (t = {}),
                t.preventDefault = t.isNormalizer = t.allowClicks = !0,
                t.type || (t.type = "wheel,touch"),
                t.debounce = !!t.debounce,
                t.id = t.id || "normalizer";
                var e, n, r, i, o, s, a, u, l = t, c = l.normalizeScrollX, f = l.momentum, h = l.allowNestedScroll, p = l.onRelease, d = B(t.target) || U, g = H.core.globals().ScrollSmoother, D = g && g.get(), v = dt && (t.content && B(t.content) || D && !1 !== t.content && !D.smooth() && D.content()), m = L(d, O), _ = L(d, P), x = 1, C = (I.isTouch && q.visualViewport ? q.visualViewport.scale * q.visualViewport.width : q.outerWidth) / q.innerWidth, w = 0, b = Ut(f) ? function() {
                    return f(e)
                }
                : function() {
                    return f || 2.8
                }
                , E = gn(d, t.type, !0, h), F = function() {
                    return i = !1
                }, T = Nt, M = Nt, A = function() {
                    n = Wt(d, O),
                    M = $(dt ? 1 : 0, n),
                    c && (T = $(0, Wt(d, P))),
                    r = He
                }, k = function() {
                    v._gsap.y = Rt(parseFloat(v._gsap.y) + m.offset) + "px",
                    v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(v._gsap.y) + ", 0, 1)",
                    m.offset = m.cacheID = 0
                }, S = function() {
                    A(),
                    o.isActive() && o.vars.scrollY > n && (m() > n ? o.progress(1) && m(n) : o.resetTo("scrollY", n))
                };
                return v && H.set(v, {
                    y: "+=0"
                }),
                t.ignoreCheck = function(t) {
                    return dt && "touchmove" === t.type && function() {
                        if (i) {
                            requestAnimationFrame(F);
                            var t = Rt(e.deltaY / 2)
                              , n = M(m.v - t);
                            if (v && n !== m.v + m.offset) {
                                m.offset = n - m.v;
                                var r = Rt((parseFloat(v && v._gsap.y) || 0) - m.offset);
                                v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r + ", 0, 1)",
                                v._gsap.y = r + "px",
                                m.cacheID = y.cache,
                                Ke()
                            }
                            return !0
                        }
                        m.offset && k(),
                        i = !0
                    }() || x > 1.05 && "touchstart" !== t.type || e.isGesturing || t.touches && t.touches.length > 1
                }
                ,
                t.onPress = function() {
                    i = !1;
                    var t = x;
                    x = Rt((q.visualViewport && q.visualViewport.scale || 1) / C),
                    o.pause(),
                    t !== x && hn(d, x > 1.01 || !c && "x"),
                    s = _(),
                    a = m(),
                    A(),
                    r = He
                }
                ,
                t.onRelease = t.onGestureStart = function(t, e) {
                    if (m.offset && k(),
                    e) {
                        y.cache++;
                        var r, i, s = b();
                        c && (i = (r = _()) + .05 * s * -t.velocityX / .227,
                        s *= fn(_, r, i, Wt(d, P)),
                        o.vars.scrollX = T(i)),
                        i = (r = m()) + .05 * s * -t.velocityY / .227,
                        s *= fn(m, r, i, Wt(d, O)),
                        o.vars.scrollY = M(i),
                        o.invalidate().duration(s).play(.01),
                        (dt && o.vars.scrollY >= n || r >= n - 1) && H.to({}, {
                            onUpdate: S,
                            duration: s
                        })
                    } else
                        u.restart(!0);
                    p && p(t)
                }
                ,
                t.onWheel = function() {
                    o._ts && o.pause(),
                    Tt() - w > 1e3 && (r = 0,
                    w = Tt())
                }
                ,
                t.onChange = function(t, e, n, i, o) {
                    if (He !== r && A(),
                    e && c && _(T(i[2] === e ? s + (t.startX - t.x) : _() + e - i[1])),
                    n) {
                        m.offset && k();
                        var u = o[2] === n
                          , l = u ? a + t.startY - t.y : m() + n - o[1]
                          , f = M(l);
                        u && l !== f && (a += f - l),
                        m(f)
                    }
                    (n || e) && Ke()
                }
                ,
                t.onEnable = function() {
                    hn(d, !c && "x"),
                    ln.addEventListener("refresh", S),
                    _e(q, "resize", S),
                    m.smooth && (m.target.style.scrollBehavior = "auto",
                    m.smooth = _.smooth = !1),
                    E.enable()
                }
                ,
                t.onDisable = function() {
                    hn(d, !0),
                    ye(q, "resize", S),
                    ln.removeEventListener("refresh", S),
                    E.kill()
                }
                ,
                t.lockAxis = !1 !== t.lockAxis,
                (e = new I(t)).iOS = dt,
                dt && !m() && m(1),
                dt && H.ticker.add(Nt),
                u = e._dc,
                o = H.to(e, {
                    ease: "power4",
                    paused: !0,
                    inherit: !1,
                    scrollX: c ? "+=0.1" : "+=0",
                    scrollY: "+=0.1",
                    modifiers: {
                        scrollY: sn(m, m(), (function() {
                            return o.pause()
                        }
                        ))
                    },
                    onUpdate: Ke,
                    onComplete: u.vars.onComplete
                }),
                e
            }(t);
            return ct && ct.target === e.target && ct.kill(),
            zt(e.target) && (ct = e),
            e
        }
        ,
        ln.core = {
            _getVelocityProp: N,
            _inputObserver: gn,
            _scrollers: y,
            _proxies: x,
            bridge: {
                ss: function() {
                    At || Re("scrollStart"),
                    At = Tt()
                },
                ref: function() {
                    return tt
                }
            }
        },
        Xt() && H.registerPlugin(ln)
    }
    ,
    6560: (t, e, n) => {
        n.d(e, {
            c: () => T
        });
        var r = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
        function i(t) {
            var e = t.nodeType
              , n = "";
            if (1 === e || 9 === e || 11 === e) {
                if ("string" == typeof t.textContent)
                    return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling)
                    n += i(t)
            } else if (3 === e || 4 === e)
                return t.nodeValue;
            return n
        }
        var o, s, a, u, l, c, f = /(?:\r|\n|\t\t)/g, h = /(?:\s\s+)/g, p = String.fromCharCode(160), d = function(t) {
            o = document,
            s = window,
            (u = u || t || s.gsap || console.warn("Please gsap.registerPlugin(SplitText)")) && (c = u.utils.toArray,
            l = u.core.context || function() {}
            ,
            a = 1)
        }, g = function(t) {
            return s.getComputedStyle(t)
        }, D = function(t) {
            return "absolute" === t.position || !0 === t.absolute
        }, v = function(t, e) {
            for (var n, r = e.length; --r > -1; )
                if (n = e[r],
                t.substr(0, n.length) === n)
                    return n.length
        }, m = function(t, e) {
            void 0 === t && (t = "");
            var n = ~t.indexOf("++")
              , r = 1;
            return n && (t = t.split("++").join("")),
            function() {
                return "<" + e + " style='position:relative;display:inline-block;'" + (t ? " class='" + t + (n ? r++ : "") + "'>" : ">")
            }
        }, _ = function t(e, n, r) {
            var i = e.nodeType;
            if (1 === i || 9 === i || 11 === i)
                for (e = e.firstChild; e; e = e.nextSibling)
                    t(e, n, r);
            else
                3 !== i && 4 !== i || (e.nodeValue = e.nodeValue.split(n).join(r))
        }, y = function(t, e) {
            for (var n = e.length; --n > -1; )
                t.push(e[n])
        }, x = function(t, e, n) {
            for (var r; t && t !== e; ) {
                if (r = t._next || t.nextSibling)
                    return r.textContent.charAt(0) === n;
                t = t.parentNode || t._parent
            }
        }, C = function t(e) {
            var n, r, i = c(e.childNodes), o = i.length;
            for (n = 0; n < o; n++)
                (r = i[n])._isSplit ? t(r) : n && r.previousSibling && 3 === r.previousSibling.nodeType ? (r.previousSibling.nodeValue += 3 === r.nodeType ? r.nodeValue : r.firstChild.nodeValue,
                e.removeChild(r)) : 3 !== r.nodeType && (e.insertBefore(r.firstChild, r),
                e.removeChild(r))
        }, w = function(t, e) {
            return parseFloat(e[t]) || 0
        }, b = function(t, e, n, r, i, s, a) {
            var u, l, c, f, h, p, d, v, m, b, E, F, T = g(t), M = w("paddingLeft", T), A = -999, k = w("borderBottomWidth", T) + w("borderTopWidth", T), S = w("borderLeftWidth", T) + w("borderRightWidth", T), P = w("paddingTop", T) + w("paddingBottom", T), O = w("paddingLeft", T) + w("paddingRight", T), B = w("fontSize", T) * (e.lineThreshold || .2), L = T.textAlign, N = [], R = [], Y = [], X = e.wordDelimiter || " ", z = e.tag ? e.tag : e.span ? "span" : "div", I = e.type || e.split || "chars,words,lines", H = i && ~I.indexOf("lines") ? [] : null, W = ~I.indexOf("words"), q = ~I.indexOf("chars"), V = D(e), U = e.linesClass, j = ~(U || "").indexOf("++"), K = [], G = "flex" === T.display, Z = t.style.display;
            for (j && (U = U.split("++").join("")),
            G && (t.style.display = "block"),
            c = (l = t.getElementsByTagName("*")).length,
            h = [],
            u = 0; u < c; u++)
                h[u] = l[u];
            if (H || V)
                for (u = 0; u < c; u++)
                    ((p = (f = h[u]).parentNode === t) || V || q && !W) && (F = f.offsetTop,
                    H && p && Math.abs(F - A) > B && ("BR" !== f.nodeName || 0 === u) && (d = [],
                    H.push(d),
                    A = F),
                    V && (f._x = f.offsetLeft,
                    f._y = F,
                    f._w = f.offsetWidth,
                    f._h = f.offsetHeight),
                    H && ((f._isSplit && p || !q && p || W && p || !W && f.parentNode.parentNode === t && !f.parentNode._isSplit) && (d.push(f),
                    f._x -= M,
                    x(f, t, X) && (f._wordEnd = !0)),
                    "BR" === f.nodeName && (f.nextSibling && "BR" === f.nextSibling.nodeName || 0 === u) && H.push([])));
            for (u = 0; u < c; u++)
                if (p = (f = h[u]).parentNode === t,
                "BR" !== f.nodeName)
                    if (V && (m = f.style,
                    W || p || (f._x += f.parentNode._x,
                    f._y += f.parentNode._y),
                    m.left = f._x + "px",
                    m.top = f._y + "px",
                    m.position = "absolute",
                    m.display = "block",
                    m.width = f._w + 1 + "px",
                    m.height = f._h + "px"),
                    !W && q)
                        if (f._isSplit)
                            for (f._next = l = f.nextSibling,
                            f.parentNode.appendChild(f); l && 3 === l.nodeType && " " === l.textContent; )
                                f._next = l.nextSibling,
                                f.parentNode.appendChild(l),
                                l = l.nextSibling;
                        else
                            f.parentNode._isSplit ? (f._parent = f.parentNode,
                            !f.previousSibling && f.firstChild && (f.firstChild._isFirst = !0),
                            f.nextSibling && " " === f.nextSibling.textContent && !f.nextSibling.nextSibling && K.push(f.nextSibling),
                            f._next = f.nextSibling && f.nextSibling._isFirst ? null : f.nextSibling,
                            f.parentNode.removeChild(f),
                            h.splice(u--, 1),
                            c--) : p || (F = !f.nextSibling && x(f.parentNode, t, X),
                            f.parentNode._parent && f.parentNode._parent.appendChild(f),
                            F && f.parentNode.appendChild(o.createTextNode(" ")),
                            "span" === z && (f.style.display = "inline"),
                            N.push(f));
                    else
                        f.parentNode._isSplit && !f._isSplit && "" !== f.innerHTML ? R.push(f) : q && !f._isSplit && ("span" === z && (f.style.display = "inline"),
                        N.push(f));
                else
                    H || V ? (f.parentNode && f.parentNode.removeChild(f),
                    h.splice(u--, 1),
                    c--) : W || t.appendChild(f);
            for (u = K.length; --u > -1; )
                K[u].parentNode.removeChild(K[u]);
            if (H) {
                for (V && (b = o.createElement(z),
                t.appendChild(b),
                E = b.offsetWidth + "px",
                F = b.offsetParent === t ? 0 : t.offsetLeft,
                t.removeChild(b)),
                m = t.style.cssText,
                t.style.cssText = "display:none;"; t.firstChild; )
                    t.removeChild(t.firstChild);
                for (v = " " === X && (!V || !W && !q),
                u = 0; u < H.length; u++) {
                    for (d = H[u],
                    (b = o.createElement(z)).style.cssText = "display:block;text-align:" + L + ";position:" + (V ? "absolute;" : "relative;"),
                    U && (b.className = U + (j ? u + 1 : "")),
                    Y.push(b),
                    c = d.length,
                    l = 0; l < c; l++)
                        "BR" !== d[l].nodeName && (f = d[l],
                        b.appendChild(f),
                        v && f._wordEnd && b.appendChild(o.createTextNode(" ")),
                        V && (0 === l && (b.style.top = f._y + "px",
                        b.style.left = M + F + "px"),
                        f.style.top = "0px",
                        F && (f.style.left = f._x - F + "px")));
                    0 === c ? b.innerHTML = "&nbsp;" : W || q || (C(b),
                    _(b, String.fromCharCode(160), " ")),
                    V && (b.style.width = E,
                    b.style.height = f._h + "px"),
                    t.appendChild(b)
                }
                t.style.cssText = m
            }
            V && (a > t.clientHeight && (t.style.height = a - P + "px",
            t.clientHeight < a && (t.style.height = a + k + "px")),
            s > t.clientWidth && (t.style.width = s - O + "px",
            t.clientWidth < s && (t.style.width = s + S + "px"))),
            G && (Z ? t.style.display = Z : t.style.removeProperty("display")),
            y(n, N),
            W && y(r, R),
            y(i, Y)
        }, E = function(t, e, n, s) {
            var a, u, l, c, d, g, m, y, x = e.tag ? e.tag : e.span ? "span" : "div", C = ~(e.type || e.split || "chars,words,lines").indexOf("chars"), w = D(e), b = e.wordDelimiter || " ", E = function(t) {
                return t === b || t === p && " " === b
            }, F = " " !== b ? "" : w ? "&#173; " : " ", T = "</" + x + ">", M = 1, A = e.specialChars ? "function" == typeof e.specialChars ? e.specialChars : v : null, k = o.createElement("div"), S = t.parentNode;
            for (S.insertBefore(k, t),
            k.textContent = t.nodeValue,
            S.removeChild(t),
            m = -1 !== (a = i(t = k)).indexOf("<"),
            !1 !== e.reduceWhiteSpace && (a = a.replace(h, " ").replace(f, "")),
            m && (a = a.split("<").join("{{LT}}")),
            d = a.length,
            u = (" " === a.charAt(0) ? F : "") + n(),
            l = 0; l < d; l++)
                if (g = a.charAt(l),
                A && (y = A(a.substr(l), e.specialChars)))
                    g = a.substr(l, y || 1),
                    u += C && " " !== g ? s() + g + "</" + x + ">" : g,
                    l += y - 1;
                else if (E(g) && !E(a.charAt(l - 1)) && l) {
                    for (u += M ? T : "",
                    M = 0; E(a.charAt(l + 1)); )
                        u += F,
                        l++;
                    l === d - 1 ? u += F : ")" !== a.charAt(l + 1) && (u += F + n(),
                    M = 1)
                } else
                    "{" === g && "{{LT}}" === a.substr(l, 6) ? (u += C ? s() + "{{LT}}</" + x + ">" : "{{LT}}",
                    l += 5) : g.charCodeAt(0) >= 55296 && g.charCodeAt(0) <= 56319 || a.charCodeAt(l + 1) >= 65024 && a.charCodeAt(l + 1) <= 65039 ? (c = ((a.substr(l, 12).split(r) || [])[1] || "").length || 2,
                    u += C && " " !== g ? s() + a.substr(l, c) + "</" + x + ">" : a.substr(l, c),
                    l += c - 1) : u += C && " " !== g ? s() + g + "</" + x + ">" : g;
            t.outerHTML = u + (M ? T : ""),
            m && _(S, "{{LT}}", "<")
        }, F = function t(e, n, r, i) {
            var o, s, a = c(e.childNodes), u = a.length, l = D(n);
            if (3 !== e.nodeType || u > 1) {
                for (n.absolute = !1,
                o = 0; o < u; o++)
                    (s = a[o])._next = s._isFirst = s._parent = s._wordEnd = null,
                    (3 !== s.nodeType || /\S+/.test(s.nodeValue)) && (l && 3 !== s.nodeType && "inline" === g(s).display && (s.style.display = "inline-block",
                    s.style.position = "relative"),
                    s._isSplit = !0,
                    t(s, n, r, i));
                return n.absolute = l,
                void (e._isSplit = !0)
            }
            E(e, n, r, i)
        }, T = function() {
            function t(t, e) {
                a || d(),
                this.elements = c(t),
                this.chars = [],
                this.words = [],
                this.lines = [],
                this._originals = [],
                this.vars = e || {},
                l(this),
                this.split(e)
            }
            var e = t.prototype;
            return e.split = function(t) {
                this.isSplit && this.revert(),
                this.vars = t = t || this.vars,
                this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
                for (var e, n, r, i = this.elements.length, o = t.tag ? t.tag : t.span ? "span" : "div", s = m(t.wordsClass, o), a = m(t.charsClass, o); --i > -1; )
                    r = this.elements[i],
                    this._originals[i] = {
                        html: r.innerHTML,
                        style: r.getAttribute("style")
                    },
                    e = r.clientHeight,
                    n = r.clientWidth,
                    F(r, t, s, a),
                    b(r, t, this.chars, this.words, this.lines, n, e);
                return this.chars.reverse(),
                this.words.reverse(),
                this.lines.reverse(),
                this.isSplit = !0,
                this
            }
            ,
            e.revert = function() {
                var t = this._originals;
                if (!t)
                    throw "revert() call wasn't scoped properly.";
                return this.elements.forEach((function(e, n) {
                    e.innerHTML = t[n].html,
                    e.setAttribute("style", t[n].style || "")
                }
                )),
                this.chars = [],
                this.words = [],
                this.lines = [],
                this.isSplit = !1,
                this
            }
            ,
            t.create = function(e, n) {
                return new t(e,n)
            }
            ,
            t
        }();
        T.version = "3.12.7",
        T.register = d
    }
    ,
    8520: (t, e, n) => {
        function r(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function i(t, e) {
            t.prototype = Object.create(e.prototype),
            t.prototype.constructor = t,
            t.__proto__ = e
        }
        n.d(e, {
            w$: () => Ur
        });
        var o, s, a, u, l, c, f, h, p, d, g, D, v, m, _, y = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        }, x = {
            duration: .5,
            overwrite: !1,
            delay: 0
        }, C = 1e8, w = 1e-8, b = 2 * Math.PI, E = b / 4, F = 0, T = Math.sqrt, M = Math.cos, A = Math.sin, k = function(t) {
            return "string" == typeof t
        }, S = function(t) {
            return "function" == typeof t
        }, P = function(t) {
            return "number" == typeof t
        }, O = function(t) {
            return void 0 === t
        }, B = function(t) {
            return "object" == typeof t
        }, L = function(t) {
            return !1 !== t
        }, N = function() {
            return "undefined" != typeof window
        }, R = function(t) {
            return S(t) || k(t)
        }, Y = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {}
        , X = Array.isArray, z = /(?:-?\.?\d|\.)+/gi, I = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, H = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, W = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, q = /[+-]=-?[.\d]+/, V = /[^,'"\[\]\s]+/gi, U = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, j = {}, K = {}, G = function(t) {
            return (K = bt(t, j)) && En
        }, Z = function(t, e) {
            return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
        }, $ = function(t, e) {
            return !e && console.warn(t)
        }, Q = function(t, e) {
            return t && (j[t] = e) && K && (K[t] = e) || j
        }, J = function() {
            return 0
        }, tt = {
            suppressEvents: !0,
            isStart: !0,
            kill: !1
        }, et = {
            suppressEvents: !0,
            kill: !1
        }, nt = {
            suppressEvents: !0
        }, rt = {}, it = [], ot = {}, st = {}, at = {}, ut = 30, lt = [], ct = "", ft = function(t) {
            var e, n, r = t[0];
            if (B(r) || S(r) || (t = [t]),
            !(e = (r._gsap || {}).harness)) {
                for (n = lt.length; n-- && !lt[n].targetTest(r); )
                    ;
                e = lt[n]
            }
            for (n = t.length; n--; )
                t[n] && (t[n]._gsap || (t[n]._gsap = new Ye(t[n],e))) || t.splice(n, 1);
            return t
        }, ht = function(t) {
            return t._gsap || ft(ee(t))[0]._gsap
        }, pt = function(t, e, n) {
            return (n = t[e]) && S(n) ? t[e]() : O(n) && t.getAttribute && t.getAttribute(e) || n
        }, dt = function(t, e) {
            return (t = t.split(",")).forEach(e) || t
        }, gt = function(t) {
            return Math.round(1e5 * t) / 1e5 || 0
        }, Dt = function(t) {
            return Math.round(1e7 * t) / 1e7 || 0
        }, vt = function(t, e) {
            var n = e.charAt(0)
              , r = parseFloat(e.substr(2));
            return t = parseFloat(t),
            "+" === n ? t + r : "-" === n ? t - r : "*" === n ? t * r : t / r
        }, mt = function(t, e) {
            for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n; )
                ;
            return r < n
        }, _t = function() {
            var t, e, n = it.length, r = it.slice(0);
            for (ot = {},
            it.length = 0,
            t = 0; t < n; t++)
                (e = r[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        }, yt = function(t, e, n, r) {
            it.length && !s && _t(),
            t.render(e, n, r || s && e < 0 && (t._initted || t._startAt)),
            it.length && !s && _t()
        }, xt = function(t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(V).length < 2 ? e : k(t) ? t.trim() : t
        }, Ct = function(t) {
            return t
        }, wt = function(t, e) {
            for (var n in e)
                n in t || (t[n] = e[n]);
            return t
        }, bt = function(t, e) {
            for (var n in e)
                t[n] = e[n];
            return t
        }, Et = function t(e, n) {
            for (var r in n)
                "__proto__" !== r && "constructor" !== r && "prototype" !== r && (e[r] = B(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
            return e
        }, Ft = function(t, e) {
            var n, r = {};
            for (n in t)
                n in e || (r[n] = t[n]);
            return r
        }, Tt = function(t) {
            var e, n = t.parent || u, r = t.keyframes ? (e = X(t.keyframes),
            function(t, n) {
                for (var r in n)
                    r in t || "duration" === r && e || "ease" === r || (t[r] = n[r])
            }
            ) : wt;
            if (L(t.inherit))
                for (; n; )
                    r(t, n.vars.defaults),
                    n = n.parent || n._dp;
            return t
        }, Mt = function(t, e, n, r, i) {
            void 0 === n && (n = "_first"),
            void 0 === r && (r = "_last");
            var o, s = t[r];
            if (i)
                for (o = e[i]; s && s[i] > o; )
                    s = s._prev;
            return s ? (e._next = s._next,
            s._next = e) : (e._next = t[n],
            t[n] = e),
            e._next ? e._next._prev = e : t[r] = e,
            e._prev = s,
            e.parent = e._dp = t,
            e
        }, At = function(t, e, n, r) {
            void 0 === n && (n = "_first"),
            void 0 === r && (r = "_last");
            var i = e._prev
              , o = e._next;
            i ? i._next = o : t[n] === e && (t[n] = o),
            o ? o._prev = i : t[r] === e && (t[r] = i),
            e._next = e._prev = e.parent = null
        }, kt = function(t, e) {
            t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t),
            t._act = 0
        }, St = function(t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0))
                for (var n = t; n; )
                    n._dirty = 1,
                    n = n.parent;
            return t
        }, Pt = function(t, e, n, r) {
            return t._startAt && (s ? t._startAt.revert(et) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r))
        }, Ot = function t(e) {
            return !e || e._ts && t(e.parent)
        }, Bt = function(t) {
            return t._repeat ? Lt(t._tTime, t = t.duration() + t._rDelay) * t : 0
        }, Lt = function(t, e) {
            var n = Math.floor(t = Dt(t / e));
            return t && n === t ? n - 1 : n
        }, Nt = function(t, e) {
            return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        }, Rt = function(t) {
            return t._end = Dt(t._start + (t._tDur / Math.abs(t._ts || t._rts || w) || 0))
        }, Yt = function(t, e) {
            var n = t._dp;
            return n && n.smoothChildTiming && t._ts && (t._start = Dt(n._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
            Rt(t),
            n._dirty || St(n, t)),
            t
        }, Xt = function(t, e) {
            var n;
            if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (n = Nt(t.rawTime(), e),
            (!e._dur || $t(0, e.totalDuration(), n) - e._tTime > w) && e.render(n, !0)),
            St(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                if (t._dur < t.duration())
                    for (n = t; n._dp; )
                        n.rawTime() >= 0 && n.totalTime(n._tTime),
                        n = n._dp;
                t._zTime = -1e-8
            }
        }, zt = function(t, e, n, r) {
            return e.parent && kt(e),
            e._start = Dt((P(n) ? n : n || t !== u ? Kt(t, n, e) : t._time) + e._delay),
            e._end = Dt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
            Mt(t, e, "_first", "_last", t._sort ? "_start" : 0),
            qt(e) || (t._recent = e),
            r || Xt(t, e),
            t._ts < 0 && Yt(t, t._tTime),
            t
        }, It = function(t, e) {
            return (j.ScrollTrigger || Z("scrollTrigger", e)) && j.ScrollTrigger.create(e, t)
        }, Ht = function(t, e, n, r, i) {
            return Ue(t, e, i),
            t._initted ? !n && t._pt && !s && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && p !== Ee.frame ? (it.push(t),
            t._lazy = [i, r],
            1) : void 0 : 1
        }, Wt = function t(e) {
            var n = e.parent;
            return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
        }, qt = function(t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e
        }, Vt = function(t, e, n, r) {
            var i = t._repeat
              , o = Dt(e) || 0
              , s = t._tTime / t._tDur;
            return s && !r && (t._time *= o / t._dur),
            t._dur = o,
            t._tDur = i ? i < 0 ? 1e10 : Dt(o * (i + 1) + t._rDelay * i) : o,
            s > 0 && !r && Yt(t, t._tTime = t._tDur * s),
            t.parent && Rt(t),
            n || St(t.parent, t),
            t
        }, Ut = function(t) {
            return t instanceof ze ? St(t) : Vt(t, t._dur)
        }, jt = {
            _start: 0,
            endTime: J,
            totalDuration: J
        }, Kt = function t(e, n, r) {
            var i, o, s, a = e.labels, u = e._recent || jt, l = e.duration() >= C ? u.endTime(!1) : e._dur;
            return k(n) && (isNaN(n) || n in a) ? (o = n.charAt(0),
            s = "%" === n.substr(-1),
            i = n.indexOf("="),
            "<" === o || ">" === o ? (i >= 0 && (n = n.replace(/=/, "")),
            ("<" === o ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (s ? (i < 0 ? u : r).totalDuration() / 100 : 1)) : i < 0 ? (n in a || (a[n] = l),
            a[n]) : (o = parseFloat(n.charAt(i - 1) + n.substr(i + 1)),
            s && r && (o = o / 100 * (X(r) ? r[0] : r).totalDuration()),
            i > 1 ? t(e, n.substr(0, i - 1), r) + o : l + o)) : null == n ? l : +n
        }, Gt = function(t, e, n) {
            var r, i, o = P(e[1]), s = (o ? 2 : 1) + (t < 2 ? 0 : 1), a = e[s];
            if (o && (a.duration = e[1]),
            a.parent = n,
            t) {
                for (r = a,
                i = n; i && !("immediateRender"in r); )
                    r = i.vars.defaults || {},
                    i = L(i.vars.inherit) && i.parent;
                a.immediateRender = L(r.immediateRender),
                t < 2 ? a.runBackwards = 1 : a.startAt = e[s - 1]
            }
            return new $e(e[0],a,e[s + 1])
        }, Zt = function(t, e) {
            return t || 0 === t ? e(t) : e
        }, $t = function(t, e, n) {
            return n < t ? t : n > e ? e : n
        }, Qt = function(t, e) {
            return k(t) && (e = U.exec(t)) ? e[1] : ""
        }, Jt = [].slice, te = function(t, e) {
            return t && B(t) && "length"in t && (!e && !t.length || t.length - 1 in t && B(t[0])) && !t.nodeType && t !== l
        }, ee = function(t, e, n) {
            return a && !e && a.selector ? a.selector(t) : !k(t) || n || !c && Fe() ? X(t) ? function(t, e, n) {
                return void 0 === n && (n = []),
                t.forEach((function(t) {
                    var r;
                    return k(t) && !e || te(t, 1) ? (r = n).push.apply(r, ee(t)) : n.push(t)
                }
                )) || n
            }(t, n) : te(t) ? Jt.call(t, 0) : t ? [t] : [] : Jt.call((e || f).querySelectorAll(t), 0)
        }, ne = function(t) {
            return t = ee(t)[0] || $("Invalid scope") || {},
            function(e) {
                var n = t.current || t.nativeElement || t;
                return ee(e, n.querySelectorAll ? n : n === t ? $("Invalid scope") || f.createElement("div") : t)
            }
        }, re = function(t) {
            return t.sort((function() {
                return .5 - Math.random()
            }
            ))
        }, ie = function(t) {
            if (S(t))
                return t;
            var e = B(t) ? t : {
                each: t
            }
              , n = Oe(e.ease)
              , r = e.from || 0
              , i = parseFloat(e.base) || 0
              , o = {}
              , s = r > 0 && r < 1
              , a = isNaN(r) || s
              , u = e.axis
              , l = r
              , c = r;
            return k(r) ? l = c = {
                center: .5,
                edges: .5,
                end: 1
            }[r] || 0 : !s && a && (l = r[0],
            c = r[1]),
            function(t, s, f) {
                var h, p, d, g, D, v, m, _, y, x = (f || e).length, w = o[x];
                if (!w) {
                    if (!(y = "auto" === e.grid ? 0 : (e.grid || [1, C])[1])) {
                        for (m = -C; m < (m = f[y++].getBoundingClientRect().left) && y < x; )
                            ;
                        y < x && y--
                    }
                    for (w = o[x] = [],
                    h = a ? Math.min(y, x) * l - .5 : r % y,
                    p = y === C ? 0 : a ? x * c / y - .5 : r / y | 0,
                    m = 0,
                    _ = C,
                    v = 0; v < x; v++)
                        d = v % y - h,
                        g = p - (v / y | 0),
                        w[v] = D = u ? Math.abs("y" === u ? g : d) : T(d * d + g * g),
                        D > m && (m = D),
                        D < _ && (_ = D);
                    "random" === r && re(w),
                    w.max = m - _,
                    w.min = _,
                    w.v = x = (parseFloat(e.amount) || parseFloat(e.each) * (y > x ? x - 1 : u ? "y" === u ? x / y : y : Math.max(y, x / y)) || 0) * ("edges" === r ? -1 : 1),
                    w.b = x < 0 ? i - x : i,
                    w.u = Qt(e.amount || e.each) || 0,
                    n = n && x < 0 ? Se(n) : n
                }
                return x = (w[t] - w.min) / w.max || 0,
                Dt(w.b + (n ? n(x) : x) * w.v) + w.u
            }
        }, oe = function(t) {
            var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
            return function(n) {
                var r = Dt(Math.round(parseFloat(n) / t) * t * e);
                return (r - r % 1) / e + (P(n) ? 0 : Qt(n))
            }
        }, se = function(t, e) {
            var n, r, i = X(t);
            return !i && B(t) && (n = i = t.radius || C,
            t.values ? (t = ee(t.values),
            (r = !P(t[0])) && (n *= n)) : t = oe(t.increment)),
            Zt(e, i ? S(t) ? function(e) {
                return r = t(e),
                Math.abs(r - e) <= n ? r : e
            }
            : function(e) {
                for (var i, o, s = parseFloat(r ? e.x : e), a = parseFloat(r ? e.y : 0), u = C, l = 0, c = t.length; c--; )
                    (i = r ? (i = t[c].x - s) * i + (o = t[c].y - a) * o : Math.abs(t[c] - s)) < u && (u = i,
                    l = c);
                return l = !n || u <= n ? t[l] : e,
                r || l === e || P(e) ? l : l + Qt(e)
            }
            : oe(t))
        }, ae = function(t, e, n, r) {
            return Zt(X(t) ? !e : !0 === n ? !!(n = 0) : !r, (function() {
                return X(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (e - t + .99 * n)) / n) * n * r) / r
            }
            ))
        }, ue = function(t, e, n) {
            return Zt(n, (function(n) {
                return t[~~e(n)]
            }
            ))
        }, le = function(t) {
            for (var e, n, r, i, o = 0, s = ""; ~(e = t.indexOf("random(", o)); )
                r = t.indexOf(")", e),
                i = "[" === t.charAt(e + 7),
                n = t.substr(e + 7, r - e - 7).match(i ? V : z),
                s += t.substr(o, e - o) + ae(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5),
                o = r + 1;
            return s + t.substr(o, t.length - o)
        }, ce = function(t, e, n, r, i) {
            var o = e - t
              , s = r - n;
            return Zt(i, (function(e) {
                return n + ((e - t) / o * s || 0)
            }
            ))
        }, fe = function(t, e, n) {
            var r, i, o, s = t.labels, a = C;
            for (r in s)
                (i = s[r] - e) < 0 == !!n && i && a > (i = Math.abs(i)) && (o = r,
                a = i);
            return o
        }, he = function(t, e, n) {
            var r, i, o, s = t.vars, u = s[e], l = a, c = t._ctx;
            if (u)
                return r = s[e + "Params"],
                i = s.callbackScope || t,
                n && it.length && _t(),
                c && (a = c),
                o = r ? u.apply(i, r) : u.call(i),
                a = l,
                o
        }, pe = function(t) {
            return kt(t),
            t.scrollTrigger && t.scrollTrigger.kill(!!s),
            t.progress() < 1 && he(t, "onInterrupt"),
            t
        }, de = [], ge = function(t) {
            if (t)
                if (t = !t.name && t.default || t,
                N() || t.headless) {
                    var e = t.name
                      , n = S(t)
                      , r = e && !n && t.init ? function() {
                        this._props = []
                    }
                    : t
                      , i = {
                        init: J,
                        render: an,
                        add: qe,
                        kill: ln,
                        modifier: un,
                        rawVars: 0
                    }
                      , o = {
                        targetTest: 0,
                        get: 0,
                        getSetter: nn,
                        aliases: {},
                        register: 0
                    };
                    if (Fe(),
                    t !== r) {
                        if (st[e])
                            return;
                        wt(r, wt(Ft(t, i), o)),
                        bt(r.prototype, bt(i, Ft(t, o))),
                        st[r.prop = e] = r,
                        t.targetTest && (lt.push(r),
                        rt[e] = 1),
                        e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    Q(e, r),
                    t.register && t.register(En, r, hn)
                } else
                    de.push(t)
        }, De = 255, ve = {
            aqua: [0, De, De],
            lime: [0, De, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, De],
            navy: [0, 0, 128],
            white: [De, De, De],
            olive: [128, 128, 0],
            yellow: [De, De, 0],
            orange: [De, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [De, 0, 0],
            pink: [De, 192, 203],
            cyan: [0, De, De],
            transparent: [De, De, De, 0]
        }, me = function(t, e, n) {
            return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) * De + .5 | 0
        }, _e = function(t, e, n) {
            var r, i, o, s, a, u, l, c, f, h, p = t ? P(t) ? [t >> 16, t >> 8 & De, t & De] : 0 : ve.black;
            if (!p) {
                if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)),
                ve[t])
                    p = ve[t];
                else if ("#" === t.charAt(0)) {
                    if (t.length < 6 && (r = t.charAt(1),
                    i = t.charAt(2),
                    o = t.charAt(3),
                    t = "#" + r + r + i + i + o + o + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")),
                    9 === t.length)
                        return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & De, p & De, parseInt(t.substr(7), 16) / 255];
                    p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & De, t & De]
                } else if ("hsl" === t.substr(0, 3))
                    if (p = h = t.match(z),
                    e) {
                        if (~t.indexOf("="))
                            return p = t.match(I),
                            n && p.length < 4 && (p[3] = 1),
                            p
                    } else
                        s = +p[0] % 360 / 360,
                        a = +p[1] / 100,
                        r = 2 * (u = +p[2] / 100) - (i = u <= .5 ? u * (a + 1) : u + a - u * a),
                        p.length > 3 && (p[3] *= 1),
                        p[0] = me(s + 1 / 3, r, i),
                        p[1] = me(s, r, i),
                        p[2] = me(s - 1 / 3, r, i);
                else
                    p = t.match(z) || ve.transparent;
                p = p.map(Number)
            }
            return e && !h && (r = p[0] / De,
            i = p[1] / De,
            o = p[2] / De,
            u = ((l = Math.max(r, i, o)) + (c = Math.min(r, i, o))) / 2,
            l === c ? s = a = 0 : (f = l - c,
            a = u > .5 ? f / (2 - l - c) : f / (l + c),
            s = l === r ? (i - o) / f + (i < o ? 6 : 0) : l === i ? (o - r) / f + 2 : (r - i) / f + 4,
            s *= 60),
            p[0] = ~~(s + .5),
            p[1] = ~~(100 * a + .5),
            p[2] = ~~(100 * u + .5)),
            n && p.length < 4 && (p[3] = 1),
            p
        }, ye = function(t) {
            var e = []
              , n = []
              , r = -1;
            return t.split(Ce).forEach((function(t) {
                var i = t.match(H) || [];
                e.push.apply(e, i),
                n.push(r += i.length + 1)
            }
            )),
            e.c = n,
            e
        }, xe = function(t, e, n) {
            var r, i, o, s, a = "", u = (t + a).match(Ce), l = e ? "hsla(" : "rgba(", c = 0;
            if (!u)
                return t;
            if (u = u.map((function(t) {
                return (t = _e(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            }
            )),
            n && (o = ye(t),
            (r = n.c).join(a) !== o.c.join(a)))
                for (s = (i = t.replace(Ce, "1").split(H)).length - 1; c < s; c++)
                    a += i[c] + (~r.indexOf(c) ? u.shift() || l + "0,0,0,0)" : (o.length ? o : u.length ? u : n).shift());
            if (!i)
                for (s = (i = t.split(Ce)).length - 1; c < s; c++)
                    a += i[c] + u[c];
            return a + i[s]
        }, Ce = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in ve)
                e += "|" + t + "\\b";
            return new RegExp(e + ")","gi")
        }(), we = /hsl[a]?\(/, be = function(t) {
            var e, n = t.join(" ");
            if (Ce.lastIndex = 0,
            Ce.test(n))
                return e = we.test(n),
                t[1] = xe(t[1], e),
                t[0] = xe(t[0], e, ye(t[1])),
                !0
        }, Ee = function() {
            var t, e, n, r, i, o, s = Date.now, a = 500, u = 33, p = s(), d = p, D = 1e3 / 240, v = D, m = [], _ = function n(l) {
                var c, f, h, g, _ = s() - d, y = !0 === l;
                if ((_ > a || _ < 0) && (p += _ - u),
                ((c = (h = (d += _) - p) - v) > 0 || y) && (g = ++r.frame,
                i = h - 1e3 * r.time,
                r.time = h /= 1e3,
                v += c + (c >= D ? 4 : D - c),
                f = 1),
                y || (t = e(n)),
                f)
                    for (o = 0; o < m.length; o++)
                        m[o](h, i, g, l)
            };
            return r = {
                time: 0,
                frame: 0,
                tick: function() {
                    _(!0)
                },
                deltaRatio: function(t) {
                    return i / (1e3 / (t || 60))
                },
                wake: function() {
                    h && (!c && N() && (l = c = window,
                    f = l.document || {},
                    j.gsap = En,
                    (l.gsapVersions || (l.gsapVersions = [])).push(En.version),
                    G(K || l.GreenSockGlobals || !l.gsap && l || {}),
                    de.forEach(ge)),
                    n = "undefined" != typeof requestAnimationFrame && requestAnimationFrame,
                    t && r.sleep(),
                    e = n || function(t) {
                        return setTimeout(t, v - 1e3 * r.time + 1 | 0)
                    }
                    ,
                    g = 1,
                    _(2))
                },
                sleep: function() {
                    (n ? cancelAnimationFrame : clearTimeout)(t),
                    g = 0,
                    e = J
                },
                lagSmoothing: function(t, e) {
                    a = t || 1 / 0,
                    u = Math.min(e || 33, a)
                },
                fps: function(t) {
                    D = 1e3 / (t || 240),
                    v = 1e3 * r.time + D
                },
                add: function(t, e, n) {
                    var i = e ? function(e, n, o, s) {
                        t(e, n, o, s),
                        r.remove(i)
                    }
                    : t;
                    return r.remove(t),
                    m[n ? "unshift" : "push"](i),
                    Fe(),
                    i
                },
                remove: function(t, e) {
                    ~(e = m.indexOf(t)) && m.splice(e, 1) && o >= e && o--
                },
                _listeners: m
            }
        }(), Fe = function() {
            return !g && Ee.wake()
        }, Te = {}, Me = /^[\d.\-M][\d.\-,\s]/, Ae = /["']/g, ke = function(t) {
            for (var e, n, r, i = {}, o = t.substr(1, t.length - 3).split(":"), s = o[0], a = 1, u = o.length; a < u; a++)
                n = o[a],
                e = a !== u - 1 ? n.lastIndexOf(",") : n.length,
                r = n.substr(0, e),
                i[s] = isNaN(r) ? r.replace(Ae, "").trim() : +r,
                s = n.substr(e + 1).trim();
            return i
        }, Se = function(t) {
            return function(e) {
                return 1 - t(1 - e)
            }
        }, Pe = function t(e, n) {
            for (var r, i = e._first; i; )
                i instanceof ze ? t(i, n) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === n || (i.timeline ? t(i.timeline, n) : (r = i._ease,
                i._ease = i._yEase,
                i._yEase = r,
                i._yoyo = n)),
                i = i._next
        }, Oe = function(t, e) {
            return t && (S(t) ? t : Te[t] || function(t) {
                var e, n, r, i, o = (t + "").split("("), s = Te[o[0]];
                return s && o.length > 1 && s.config ? s.config.apply(null, ~t.indexOf("{") ? [ke(o[1])] : (e = t,
                n = e.indexOf("(") + 1,
                r = e.indexOf(")"),
                i = e.indexOf("(", n),
                e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r)).split(",").map(xt)) : Te._CE && Me.test(t) ? Te._CE("", t) : s
            }(t)) || e
        }, Be = function(t, e, n, r) {
            void 0 === n && (n = function(t) {
                return 1 - e(1 - t)
            }
            ),
            void 0 === r && (r = function(t) {
                return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
            }
            );
            var i, o = {
                easeIn: e,
                easeOut: n,
                easeInOut: r
            };
            return dt(t, (function(t) {
                for (var e in Te[t] = j[t] = o,
                Te[i = t.toLowerCase()] = n,
                o)
                    Te[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Te[t + "." + e] = o[e]
            }
            )),
            o
        }, Le = function(t) {
            return function(e) {
                return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
            }
        }, Ne = function t(e, n, r) {
            var i = n >= 1 ? n : 1
              , o = (r || (e ? .3 : .45)) / (n < 1 ? n : 1)
              , s = o / b * (Math.asin(1 / i) || 0)
              , a = function(t) {
                return 1 === t ? 1 : i * Math.pow(2, -10 * t) * A((t - s) * o) + 1
            }
              , u = "out" === e ? a : "in" === e ? function(t) {
                return 1 - a(1 - t)
            }
            : Le(a);
            return o = b / o,
            u.config = function(n, r) {
                return t(e, n, r)
            }
            ,
            u
        }, Re = function t(e, n) {
            void 0 === n && (n = 1.70158);
            var r = function(t) {
                return t ? --t * t * ((n + 1) * t + n) + 1 : 0
            }
              , i = "out" === e ? r : "in" === e ? function(t) {
                return 1 - r(1 - t)
            }
            : Le(r);
            return i.config = function(n) {
                return t(e, n)
            }
            ,
            i
        };
        dt("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
            var n = e < 5 ? e + 1 : e;
            Be(t + ",Power" + (n - 1), e ? function(t) {
                return Math.pow(t, n)
            }
            : function(t) {
                return t
            }
            , (function(t) {
                return 1 - Math.pow(1 - t, n)
            }
            ), (function(t) {
                return t < .5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2
            }
            ))
        }
        )),
        Te.Linear.easeNone = Te.none = Te.Linear.easeIn,
        Be("Elastic", Ne("in"), Ne("out"), Ne()),
        D = 7.5625,
        m = 1 / (v = 2.75),
        Be("Bounce", (function(t) {
            return 1 - _(1 - t)
        }
        ), _ = function(t) {
            return t < m ? D * t * t : t < .7272727272727273 ? D * Math.pow(t - 1.5 / v, 2) + .75 : t < .9090909090909092 ? D * (t -= 2.25 / v) * t + .9375 : D * Math.pow(t - 2.625 / v, 2) + .984375
        }
        ),
        Be("Expo", (function(t) {
            return Math.pow(2, 10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t)
        }
        )),
        Be("Circ", (function(t) {
            return -(T(1 - t * t) - 1)
        }
        )),
        Be("Sine", (function(t) {
            return 1 === t ? 1 : 1 - M(t * E)
        }
        )),
        Be("Back", Re("in"), Re("out"), Re()),
        Te.SteppedEase = Te.steps = j.SteppedEase = {
            config: function(t, e) {
                void 0 === t && (t = 1);
                var n = 1 / t
                  , r = t + (e ? 0 : 1)
                  , i = e ? 1 : 0;
                return function(t) {
                    return ((r * $t(0, .99999999, t) | 0) + i) * n
                }
            }
        },
        x.ease = Te["quad.out"],
        dt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
            return ct += t + "," + t + "Params,"
        }
        ));
        var Ye = function(t, e) {
            this.id = F++,
            t._gsap = this,
            this.target = t,
            this.harness = e,
            this.get = e ? e.get : pt,
            this.set = e ? e.getSetter : nn
        }
          , Xe = function() {
            function t(t) {
                this.vars = t,
                this._delay = +t.delay || 0,
                (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
                this._yoyo = !!t.yoyo || !!t.yoyoEase),
                this._ts = 1,
                Vt(this, +t.duration, 1, 1),
                this.data = t.data,
                a && (this._ctx = a,
                a.data.push(this)),
                g || Ee.wake()
            }
            var e = t.prototype;
            return e.delay = function(t) {
                return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
                this._delay = t,
                this) : this._delay
            }
            ,
            e.duration = function(t) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
            }
            ,
            e.totalDuration = function(t) {
                return arguments.length ? (this._dirty = 0,
                Vt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            }
            ,
            e.totalTime = function(t, e) {
                if (Fe(),
                !arguments.length)
                    return this._tTime;
                var n = this._dp;
                if (n && n.smoothChildTiming && this._ts) {
                    for (Yt(this, t),
                    !n._dp || n.parent || Xt(n, this); n && n.parent; )
                        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
                        n = n.parent;
                    !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && zt(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === w || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t),
                yt(this, t, e)),
                this
            }
            ,
            e.time = function(t, e) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Bt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
            }
            ,
            e.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
            }
            ,
            e.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Bt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
            }
            ,
            e.iteration = function(t, e) {
                var n = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? Lt(this._tTime, n) + 1 : 1
            }
            ,
            e.timeScale = function(t, e) {
                if (!arguments.length)
                    return -1e-8 === this._rts ? 0 : this._rts;
                if (this._rts === t)
                    return this;
                var n = this.parent && this._ts ? Nt(this.parent._time, this) : this._tTime;
                return this._rts = +t || 0,
                this._ts = this._ps || -1e-8 === t ? 0 : this._rts,
                this.totalTime($t(-Math.abs(this._delay), this._tDur, n), !1 !== e),
                Rt(this),
                function(t) {
                    for (var e = t.parent; e && e.parent; )
                        e._dirty = 1,
                        e.totalDuration(),
                        e = e.parent;
                    return t
                }(this)
            }
            ,
            e.paused = function(t) {
                return arguments.length ? (this._ps !== t && (this._ps = t,
                t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
                this._ts = this._act = 0) : (Fe(),
                this._ts = this._rts,
                this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== w && (this._tTime -= w)))),
                this) : this._ps
            }
            ,
            e.startTime = function(t) {
                if (arguments.length) {
                    this._start = t;
                    var e = this.parent || this._dp;
                    return e && (e._sort || !this.parent) && zt(e, this, t - this._delay),
                    this
                }
                return this._start
            }
            ,
            e.endTime = function(t) {
                return this._start + (L(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
            }
            ,
            e.rawTime = function(t) {
                var e = this.parent || this._dp;
                return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Nt(e.rawTime(t), this) : this._tTime : this._tTime
            }
            ,
            e.revert = function(t) {
                void 0 === t && (t = nt);
                var e = s;
                return s = t,
                (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t),
                this.totalTime(-.01, t.suppressEvents)),
                "nested" !== this.data && !1 !== t.kill && this.kill(),
                s = e,
                this
            }
            ,
            e.globalTime = function(t) {
                for (var e = this, n = arguments.length ? t : e.rawTime(); e; )
                    n = e._start + n / (Math.abs(e._ts) || 1),
                    e = e._dp;
                return !this.parent && this._sat ? this._sat.globalTime(t) : n
            }
            ,
            e.repeat = function(t) {
                return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t,
                Ut(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
            }
            ,
            e.repeatDelay = function(t) {
                if (arguments.length) {
                    var e = this._time;
                    return this._rDelay = t,
                    Ut(this),
                    e ? this.time(e) : this
                }
                return this._rDelay
            }
            ,
            e.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t,
                this) : this._yoyo
            }
            ,
            e.seek = function(t, e) {
                return this.totalTime(Kt(this, t), L(e))
            }
            ,
            e.restart = function(t, e) {
                return this.play().totalTime(t ? -this._delay : 0, L(e)),
                this._dur || (this._zTime = -1e-8),
                this
            }
            ,
            e.play = function(t, e) {
                return null != t && this.seek(t, e),
                this.reversed(!1).paused(!1)
            }
            ,
            e.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
            }
            ,
            e.pause = function(t, e) {
                return null != t && this.seek(t, e),
                this.paused(!0)
            }
            ,
            e.resume = function() {
                return this.paused(!1)
            }
            ,
            e.reversed = function(t) {
                return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                this) : this._rts < 0
            }
            ,
            e.invalidate = function() {
                return this._initted = this._act = 0,
                this._zTime = -1e-8,
                this
            }
            ,
            e.isActive = function() {
                var t, e = this.parent || this._dp, n = this._start;
                return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= n && t < this.endTime(!0) - w))
            }
            ,
            e.eventCallback = function(t, e, n) {
                var r = this.vars;
                return arguments.length > 1 ? (e ? (r[t] = e,
                n && (r[t + "Params"] = n),
                "onUpdate" === t && (this._onUpdate = e)) : delete r[t],
                this) : r[t]
            }
            ,
            e.then = function(t) {
                var e = this;
                return new Promise((function(n) {
                    var r = S(t) ? t : Ct
                      , i = function() {
                        var t = e.then;
                        e.then = null,
                        S(r) && (r = r(e)) && (r.then || r === e) && (e.then = t),
                        n(r),
                        e.then = t
                    };
                    e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? i() : e._prom = i
                }
                ))
            }
            ,
            e.kill = function() {
                pe(this)
            }
            ,
            t
        }();
        wt(Xe.prototype, {
            _time: 0,
            _start: 0,
            _end: 0,
            _tTime: 0,
            _tDur: 0,
            _dirty: 0,
            _repeat: 0,
            _yoyo: !1,
            parent: null,
            _initted: !1,
            _rDelay: 0,
            _ts: 1,
            _dp: 0,
            ratio: 0,
            _zTime: -1e-8,
            _prom: 0,
            _ps: !1,
            _rts: 1
        });
        var ze = function(t) {
            function e(e, n) {
                var i;
                return void 0 === e && (e = {}),
                (i = t.call(this, e) || this).labels = {},
                i.smoothChildTiming = !!e.smoothChildTiming,
                i.autoRemoveChildren = !!e.autoRemoveChildren,
                i._sort = L(e.sortChildren),
                u && zt(e.parent || u, r(i), n),
                e.reversed && i.reverse(),
                e.paused && i.paused(!0),
                e.scrollTrigger && It(r(i), e.scrollTrigger),
                i
            }
            i(e, t);
            var n = e.prototype;
            return n.to = function(t, e, n) {
                return Gt(0, arguments, this),
                this
            }
            ,
            n.from = function(t, e, n) {
                return Gt(1, arguments, this),
                this
            }
            ,
            n.fromTo = function(t, e, n, r) {
                return Gt(2, arguments, this),
                this
            }
            ,
            n.set = function(t, e, n) {
                return e.duration = 0,
                e.parent = this,
                Tt(e).repeatDelay || (e.repeat = 0),
                e.immediateRender = !!e.immediateRender,
                new $e(t,e,Kt(this, n),1),
                this
            }
            ,
            n.call = function(t, e, n) {
                return zt(this, $e.delayedCall(0, t, e), n)
            }
            ,
            n.staggerTo = function(t, e, n, r, i, o, s) {
                return n.duration = e,
                n.stagger = n.stagger || r,
                n.onComplete = o,
                n.onCompleteParams = s,
                n.parent = this,
                new $e(t,n,Kt(this, i)),
                this
            }
            ,
            n.staggerFrom = function(t, e, n, r, i, o, s) {
                return n.runBackwards = 1,
                Tt(n).immediateRender = L(n.immediateRender),
                this.staggerTo(t, e, n, r, i, o, s)
            }
            ,
            n.staggerFromTo = function(t, e, n, r, i, o, s, a) {
                return r.startAt = n,
                Tt(r).immediateRender = L(r.immediateRender),
                this.staggerTo(t, e, r, i, o, s, a)
            }
            ,
            n.render = function(t, e, n) {
                var r, i, o, a, l, c, f, h, p, d, g, D, v = this._time, m = this._dirty ? this.totalDuration() : this._tDur, _ = this._dur, y = t <= 0 ? 0 : Dt(t), x = this._zTime < 0 != t < 0 && (this._initted || !_);
                if (this !== u && y > m && t >= 0 && (y = m),
                y !== this._tTime || n || x) {
                    if (v !== this._time && _ && (y += this._time - v,
                    t += this._time - v),
                    r = y,
                    p = this._start,
                    c = !(h = this._ts),
                    x && (_ || (v = this._zTime),
                    (t || !e) && (this._zTime = t)),
                    this._repeat) {
                        if (g = this._yoyo,
                        l = _ + this._rDelay,
                        this._repeat < -1 && t < 0)
                            return this.totalTime(100 * l + t, e, n);
                        if (r = Dt(y % l),
                        y === m ? (a = this._repeat,
                        r = _) : ((a = ~~(d = Dt(y / l))) && a === d && (r = _,
                        a--),
                        r > _ && (r = _)),
                        d = Lt(this._tTime, l),
                        !v && this._tTime && d !== a && this._tTime - d * l - this._dur <= 0 && (d = a),
                        g && 1 & a && (r = _ - r,
                        D = 1),
                        a !== d && !this._lock) {
                            var C = g && 1 & d
                              , b = C === (g && 1 & a);
                            if (a < d && (C = !C),
                            v = C ? 0 : y % _ ? _ : y,
                            this._lock = 1,
                            this.render(v || (D ? 0 : Dt(a * l)), e, !_)._lock = 0,
                            this._tTime = y,
                            !e && this.parent && he(this, "onRepeat"),
                            this.vars.repeatRefresh && !D && (this.invalidate()._lock = 1),
                            v && v !== this._time || c !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                                return this;
                            if (_ = this._dur,
                            m = this._tDur,
                            b && (this._lock = 2,
                            v = C ? _ : -1e-4,
                            this.render(v, !0),
                            this.vars.repeatRefresh && !D && this.invalidate()),
                            this._lock = 0,
                            !this._ts && !c)
                                return this;
                            Pe(this, D)
                        }
                    }
                    if (this._hasPause && !this._forcing && this._lock < 2 && (f = function(t, e, n) {
                        var r;
                        if (n > e)
                            for (r = t._first; r && r._start <= n; ) {
                                if ("isPause" === r.data && r._start > e)
                                    return r;
                                r = r._next
                            }
                        else
                            for (r = t._last; r && r._start >= n; ) {
                                if ("isPause" === r.data && r._start < e)
                                    return r;
                                r = r._prev
                            }
                    }(this, Dt(v), Dt(r)),
                    f && (y -= r - (r = f._start))),
                    this._tTime = y,
                    this._time = r,
                    this._act = !h,
                    this._initted || (this._onUpdate = this.vars.onUpdate,
                    this._initted = 1,
                    this._zTime = t,
                    v = 0),
                    !v && r && !e && !a && (he(this, "onStart"),
                    this._tTime !== y))
                        return this;
                    if (r >= v && t >= 0)
                        for (i = this._first; i; ) {
                            if (o = i._next,
                            (i._act || r >= i._start) && i._ts && f !== i) {
                                if (i.parent !== this)
                                    return this.render(t, e, n);
                                if (i.render(i._ts > 0 ? (r - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (r - i._start) * i._ts, e, n),
                                r !== this._time || !this._ts && !c) {
                                    f = 0,
                                    o && (y += this._zTime = -1e-8);
                                    break
                                }
                            }
                            i = o
                        }
                    else {
                        i = this._last;
                        for (var E = t < 0 ? t : r; i; ) {
                            if (o = i._prev,
                            (i._act || E <= i._end) && i._ts && f !== i) {
                                if (i.parent !== this)
                                    return this.render(t, e, n);
                                if (i.render(i._ts > 0 ? (E - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (E - i._start) * i._ts, e, n || s && (i._initted || i._startAt)),
                                r !== this._time || !this._ts && !c) {
                                    f = 0,
                                    o && (y += this._zTime = E ? -1e-8 : w);
                                    break
                                }
                            }
                            i = o
                        }
                    }
                    if (f && !e && (this.pause(),
                    f.render(r >= v ? 0 : -1e-8)._zTime = r >= v ? 1 : -1,
                    this._ts))
                        return this._start = p,
                        Rt(this),
                        this.render(t, e, n);
                    this._onUpdate && !e && he(this, "onUpdate", !0),
                    (y === m && this._tTime >= this.totalDuration() || !y && v) && (p !== this._start && Math.abs(h) === Math.abs(this._ts) || this._lock || ((t || !_) && (y === m && this._ts > 0 || !y && this._ts < 0) && kt(this, 1),
                    e || t < 0 && !v || !y && !v && m || (he(this, y === m && t >= 0 ? "onComplete" : "onReverseComplete", !0),
                    this._prom && !(y < m && this.timeScale() > 0) && this._prom())))
                }
                return this
            }
            ,
            n.add = function(t, e) {
                var n = this;
                if (P(e) || (e = Kt(this, e, t)),
                !(t instanceof Xe)) {
                    if (X(t))
                        return t.forEach((function(t) {
                            return n.add(t, e)
                        }
                        )),
                        this;
                    if (k(t))
                        return this.addLabel(t, e);
                    if (!S(t))
                        return this;
                    t = $e.delayedCall(0, t)
                }
                return this !== t ? zt(this, t, e) : this
            }
            ,
            n.getChildren = function(t, e, n, r) {
                void 0 === t && (t = !0),
                void 0 === e && (e = !0),
                void 0 === n && (n = !0),
                void 0 === r && (r = -C);
                for (var i = [], o = this._first; o; )
                    o._start >= r && (o instanceof $e ? e && i.push(o) : (n && i.push(o),
                    t && i.push.apply(i, o.getChildren(!0, e, n)))),
                    o = o._next;
                return i
            }
            ,
            n.getById = function(t) {
                for (var e = this.getChildren(1, 1, 1), n = e.length; n--; )
                    if (e[n].vars.id === t)
                        return e[n]
            }
            ,
            n.remove = function(t) {
                return k(t) ? this.removeLabel(t) : S(t) ? this.killTweensOf(t) : (t.parent === this && At(this, t),
                t === this._recent && (this._recent = this._last),
                St(this))
            }
            ,
            n.totalTime = function(e, n) {
                return arguments.length ? (this._forcing = 1,
                !this._dp && this._ts && (this._start = Dt(Ee.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))),
                t.prototype.totalTime.call(this, e, n),
                this._forcing = 0,
                this) : this._tTime
            }
            ,
            n.addLabel = function(t, e) {
                return this.labels[t] = Kt(this, e),
                this
            }
            ,
            n.removeLabel = function(t) {
                return delete this.labels[t],
                this
            }
            ,
            n.addPause = function(t, e, n) {
                var r = $e.delayedCall(0, e || J, n);
                return r.data = "isPause",
                this._hasPause = 1,
                zt(this, r, Kt(this, t))
            }
            ,
            n.removePause = function(t) {
                var e = this._first;
                for (t = Kt(this, t); e; )
                    e._start === t && "isPause" === e.data && kt(e),
                    e = e._next
            }
            ,
            n.killTweensOf = function(t, e, n) {
                for (var r = this.getTweensOf(t, n), i = r.length; i--; )
                    Ie !== r[i] && r[i].kill(t, e);
                return this
            }
            ,
            n.getTweensOf = function(t, e) {
                for (var n, r = [], i = ee(t), o = this._first, s = P(e); o; )
                    o instanceof $e ? mt(o._targets, i) && (s ? (!Ie || o._initted && o._ts) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && r.push(o) : (n = o.getTweensOf(i, e)).length && r.push.apply(r, n),
                    o = o._next;
                return r
            }
            ,
            n.tweenTo = function(t, e) {
                e = e || {};
                var n, r = this, i = Kt(r, t), o = e, s = o.startAt, a = o.onStart, u = o.onStartParams, l = o.immediateRender, c = $e.to(r, wt({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: i,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((i - (s && "time"in s ? s.time : r._time)) / r.timeScale()) || w,
                    onStart: function() {
                        if (r.pause(),
                        !n) {
                            var t = e.duration || Math.abs((i - (s && "time"in s ? s.time : r._time)) / r.timeScale());
                            c._dur !== t && Vt(c, t, 0, 1).render(c._time, !0, !0),
                            n = 1
                        }
                        a && a.apply(c, u || [])
                    }
                }, e));
                return l ? c.render(0) : c
            }
            ,
            n.tweenFromTo = function(t, e, n) {
                return this.tweenTo(e, wt({
                    startAt: {
                        time: Kt(this, t)
                    }
                }, n))
            }
            ,
            n.recent = function() {
                return this._recent
            }
            ,
            n.nextLabel = function(t) {
                return void 0 === t && (t = this._time),
                fe(this, Kt(this, t))
            }
            ,
            n.previousLabel = function(t) {
                return void 0 === t && (t = this._time),
                fe(this, Kt(this, t), 1)
            }
            ,
            n.currentLabel = function(t) {
                return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + w)
            }
            ,
            n.shiftChildren = function(t, e, n) {
                void 0 === n && (n = 0);
                for (var r, i = this._first, o = this.labels; i; )
                    i._start >= n && (i._start += t,
                    i._end += t),
                    i = i._next;
                if (e)
                    for (r in o)
                        o[r] >= n && (o[r] += t);
                return St(this)
            }
            ,
            n.invalidate = function(e) {
                var n = this._first;
                for (this._lock = 0; n; )
                    n.invalidate(e),
                    n = n._next;
                return t.prototype.invalidate.call(this, e)
            }
            ,
            n.clear = function(t) {
                void 0 === t && (t = !0);
                for (var e, n = this._first; n; )
                    e = n._next,
                    this.remove(n),
                    n = e;
                return this._dp && (this._time = this._tTime = this._pTime = 0),
                t && (this.labels = {}),
                St(this)
            }
            ,
            n.totalDuration = function(t) {
                var e, n, r, i = 0, o = this, s = o._last, a = C;
                if (arguments.length)
                    return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
                if (o._dirty) {
                    for (r = o.parent; s; )
                        e = s._prev,
                        s._dirty && s.totalDuration(),
                        (n = s._start) > a && o._sort && s._ts && !o._lock ? (o._lock = 1,
                        zt(o, s, n - s._delay, 1)._lock = 0) : a = n,
                        n < 0 && s._ts && (i -= n,
                        (!r && !o._dp || r && r.smoothChildTiming) && (o._start += n / o._ts,
                        o._time -= n,
                        o._tTime -= n),
                        o.shiftChildren(-n, !1, -Infinity),
                        a = 0),
                        s._end > i && s._ts && (i = s._end),
                        s = e;
                    Vt(o, o === u && o._time > i ? o._time : i, 1, 1),
                    o._dirty = 0
                }
                return o._tDur
            }
            ,
            e.updateRoot = function(t) {
                if (u._ts && (yt(u, Nt(t, u)),
                p = Ee.frame),
                Ee.frame >= ut) {
                    ut += y.autoSleep || 120;
                    var e = u._first;
                    if ((!e || !e._ts) && y.autoSleep && Ee._listeners.length < 2) {
                        for (; e && !e._ts; )
                            e = e._next;
                        e || Ee.sleep()
                    }
                }
            }
            ,
            e
        }(Xe);
        wt(ze.prototype, {
            _lock: 0,
            _hasPause: 0,
            _forcing: 0
        });
        var Ie, He, We = function(t, e, n, r, i, o, s) {
            var a, u, l, c, f, h, p, d, g = new hn(this._pt,t,e,0,1,sn,null,i), D = 0, v = 0;
            for (g.b = n,
            g.e = r,
            n += "",
            (p = ~(r += "").indexOf("random(")) && (r = le(r)),
            o && (o(d = [n, r], t, e),
            n = d[0],
            r = d[1]),
            u = n.match(W) || []; a = W.exec(r); )
                c = a[0],
                f = r.substring(D, a.index),
                l ? l = (l + 1) % 5 : "rgba(" === f.substr(-5) && (l = 1),
                c !== u[v++] && (h = parseFloat(u[v - 1]) || 0,
                g._pt = {
                    _next: g._pt,
                    p: f || 1 === v ? f : ",",
                    s: h,
                    c: "=" === c.charAt(1) ? vt(h, c) - h : parseFloat(c) - h,
                    m: l && l < 4 ? Math.round : 0
                },
                D = W.lastIndex);
            return g.c = D < r.length ? r.substring(D, r.length) : "",
            g.fp = s,
            (q.test(r) || p) && (g.e = 0),
            this._pt = g,
            g
        }, qe = function(t, e, n, r, i, o, s, a, u, l) {
            S(r) && (r = r(i || 0, t, o));
            var c, f = t[e], h = "get" !== n ? n : S(f) ? u ? t[e.indexOf("set") || !S(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : f, p = S(f) ? u ? tn : Je : Qe;
            if (k(r) && (~r.indexOf("random(") && (r = le(r)),
            "=" === r.charAt(1) && ((c = vt(h, r) + (Qt(h) || 0)) || 0 === c) && (r = c)),
            !l || h !== r || He)
                return isNaN(h * r) || "" === r ? (!f && !(e in t) && Z(e, r),
                We.call(this, t, e, h, r, p, a || y.stringFilter, u)) : (c = new hn(this._pt,t,e,+h || 0,r - (h || 0),"boolean" == typeof f ? on : rn,0,p),
                u && (c.fp = u),
                s && c.modifier(s, this, t),
                this._pt = c)
        }, Ve = function(t, e, n, r, i, o) {
            var s, a, u, l;
            if (st[t] && !1 !== (s = new st[t]).init(i, s.rawVars ? e[t] : function(t, e, n, r, i) {
                if (S(t) && (t = Ke(t, i, e, n, r)),
                !B(t) || t.style && t.nodeType || X(t) || Y(t))
                    return k(t) ? Ke(t, i, e, n, r) : t;
                var o, s = {};
                for (o in t)
                    s[o] = Ke(t[o], i, e, n, r);
                return s
            }(e[t], r, i, o, n), n, r, o) && (n._pt = a = new hn(n._pt,i,t,0,1,s.render,s,0,s.priority),
            n !== d))
                for (u = n._ptLookup[n._targets.indexOf(i)],
                l = s._props.length; l--; )
                    u[s._props[l]] = a;
            return s
        }, Ue = function t(e, n, r) {
            var i, a, l, c, f, h, p, d, g, D, v, m, _, y = e.vars, b = y.ease, E = y.startAt, F = y.immediateRender, T = y.lazy, M = y.onUpdate, A = y.runBackwards, k = y.yoyoEase, S = y.keyframes, P = y.autoRevert, O = e._dur, B = e._startAt, N = e._targets, R = e.parent, Y = R && "nested" === R.data ? R.vars.targets : N, X = "auto" === e._overwrite && !o, z = e.timeline;
            if (z && (!S || !b) && (b = "none"),
            e._ease = Oe(b, x.ease),
            e._yEase = k ? Se(Oe(!0 === k ? b : k, x.ease)) : 0,
            k && e._yoyo && !e._repeat && (k = e._yEase,
            e._yEase = e._ease,
            e._ease = k),
            e._from = !z && !!y.runBackwards,
            !z || S && !y.stagger) {
                if (m = (d = N[0] ? ht(N[0]).harness : 0) && y[d.prop],
                i = Ft(y, rt),
                B && (B._zTime < 0 && B.progress(1),
                n < 0 && A && F && !P ? B.render(-1, !0) : B.revert(A && O ? et : tt),
                B._lazy = 0),
                E) {
                    if (kt(e._startAt = $e.set(N, wt({
                        data: "isStart",
                        overwrite: !1,
                        parent: R,
                        immediateRender: !0,
                        lazy: !B && L(T),
                        startAt: null,
                        delay: 0,
                        onUpdate: M && function() {
                            return he(e, "onUpdate")
                        }
                        ,
                        stagger: 0
                    }, E))),
                    e._startAt._dp = 0,
                    e._startAt._sat = e,
                    n < 0 && (s || !F && !P) && e._startAt.revert(et),
                    F && O && n <= 0 && r <= 0)
                        return void (n && (e._zTime = n))
                } else if (A && O && !B)
                    if (n && (F = !1),
                    l = wt({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: F && !B && L(T),
                        immediateRender: F,
                        stagger: 0,
                        parent: R
                    }, i),
                    m && (l[d.prop] = m),
                    kt(e._startAt = $e.set(N, l)),
                    e._startAt._dp = 0,
                    e._startAt._sat = e,
                    n < 0 && (s ? e._startAt.revert(et) : e._startAt.render(-1, !0)),
                    e._zTime = n,
                    F) {
                        if (!n)
                            return
                    } else
                        t(e._startAt, w, w);
                for (e._pt = e._ptCache = 0,
                T = O && L(T) || T && !O,
                a = 0; a < N.length; a++) {
                    if (p = (f = N[a])._gsap || ft(N)[a]._gsap,
                    e._ptLookup[a] = D = {},
                    ot[p.id] && it.length && _t(),
                    v = Y === N ? a : Y.indexOf(f),
                    d && !1 !== (g = new d).init(f, m || i, e, v, Y) && (e._pt = c = new hn(e._pt,f,g.name,0,1,g.render,g,0,g.priority),
                    g._props.forEach((function(t) {
                        D[t] = c
                    }
                    )),
                    g.priority && (h = 1)),
                    !d || m)
                        for (l in i)
                            st[l] && (g = Ve(l, i, e, v, f, Y)) ? g.priority && (h = 1) : D[l] = c = qe.call(e, f, l, "get", i[l], v, Y, 0, y.stringFilter);
                    e._op && e._op[a] && e.kill(f, e._op[a]),
                    X && e._pt && (Ie = e,
                    u.killTweensOf(f, D, e.globalTime(n)),
                    _ = !e.parent,
                    Ie = 0),
                    e._pt && T && (ot[p.id] = 1)
                }
                h && fn(e),
                e._onInit && e._onInit(e)
            }
            e._onUpdate = M,
            e._initted = (!e._op || e._pt) && !_,
            S && n <= 0 && z.render(C, !0, !0)
        }, je = function(t, e, n, r) {
            var i, o, s = e.ease || r || "power1.inOut";
            if (X(e))
                o = n[t] || (n[t] = []),
                e.forEach((function(t, n) {
                    return o.push({
                        t: n / (e.length - 1) * 100,
                        v: t,
                        e: s
                    })
                }
                ));
            else
                for (i in e)
                    o = n[i] || (n[i] = []),
                    "ease" === i || o.push({
                        t: parseFloat(t),
                        v: e[i],
                        e: s
                    })
        }, Ke = function(t, e, n, r, i) {
            return S(t) ? t.call(e, n, r, i) : k(t) && ~t.indexOf("random(") ? le(t) : t
        }, Ge = ct + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Ze = {};
        dt(Ge + ",id,stagger,delay,duration,paused,scrollTrigger", (function(t) {
            return Ze[t] = 1
        }
        ));
        var $e = function(t) {
            function e(e, n, i, s) {
                var a;
                "number" == typeof n && (i.duration = n,
                n = i,
                i = null);
                var l, c, f, h, p, d, g, D, v = (a = t.call(this, s ? n : Tt(n)) || this).vars, m = v.duration, _ = v.delay, x = v.immediateRender, C = v.stagger, w = v.overwrite, b = v.keyframes, E = v.defaults, F = v.scrollTrigger, T = v.yoyoEase, M = n.parent || u, A = (X(e) || Y(e) ? P(e[0]) : "length"in n) ? [e] : ee(e);
                if (a._targets = A.length ? ft(A) : $("GSAP target " + e + " not found. https://gsap.com", !y.nullTargetWarn) || [],
                a._ptLookup = [],
                a._overwrite = w,
                b || C || R(m) || R(_)) {
                    if (n = a.vars,
                    (l = a.timeline = new ze({
                        data: "nested",
                        defaults: E || {},
                        targets: M && "nested" === M.data ? M.vars.targets : A
                    })).kill(),
                    l.parent = l._dp = r(a),
                    l._start = 0,
                    C || R(m) || R(_)) {
                        if (h = A.length,
                        g = C && ie(C),
                        B(C))
                            for (p in C)
                                ~Ge.indexOf(p) && (D || (D = {}),
                                D[p] = C[p]);
                        for (c = 0; c < h; c++)
                            (f = Ft(n, Ze)).stagger = 0,
                            T && (f.yoyoEase = T),
                            D && bt(f, D),
                            d = A[c],
                            f.duration = +Ke(m, r(a), c, d, A),
                            f.delay = (+Ke(_, r(a), c, d, A) || 0) - a._delay,
                            !C && 1 === h && f.delay && (a._delay = _ = f.delay,
                            a._start += _,
                            f.delay = 0),
                            l.to(d, f, g ? g(c, d, A) : 0),
                            l._ease = Te.none;
                        l.duration() ? m = _ = 0 : a.timeline = 0
                    } else if (b) {
                        Tt(wt(l.vars.defaults, {
                            ease: "none"
                        })),
                        l._ease = Oe(b.ease || n.ease || "none");
                        var k, S, O, N = 0;
                        if (X(b))
                            b.forEach((function(t) {
                                return l.to(A, t, ">")
                            }
                            )),
                            l.duration();
                        else {
                            for (p in f = {},
                            b)
                                "ease" === p || "easeEach" === p || je(p, b[p], f, b.easeEach);
                            for (p in f)
                                for (k = f[p].sort((function(t, e) {
                                    return t.t - e.t
                                }
                                )),
                                N = 0,
                                c = 0; c < k.length; c++)
                                    (O = {
                                        ease: (S = k[c]).e,
                                        duration: (S.t - (c ? k[c - 1].t : 0)) / 100 * m
                                    })[p] = S.v,
                                    l.to(A, O, N),
                                    N += O.duration;
                            l.duration() < m && l.to({}, {
                                duration: m - l.duration()
                            })
                        }
                    }
                    m || a.duration(m = l.duration())
                } else
                    a.timeline = 0;
                return !0 !== w || o || (Ie = r(a),
                u.killTweensOf(A),
                Ie = 0),
                zt(M, r(a), i),
                n.reversed && a.reverse(),
                n.paused && a.paused(!0),
                (x || !m && !b && a._start === Dt(M._time) && L(x) && Ot(r(a)) && "nested" !== M.data) && (a._tTime = -1e-8,
                a.render(Math.max(0, -_) || 0)),
                F && It(r(a), F),
                a
            }
            i(e, t);
            var n = e.prototype;
            return n.render = function(t, e, n) {
                var r, i, o, a, u, l, c, f, h, p = this._time, d = this._tDur, g = this._dur, D = t < 0, v = t > d - w && !D ? d : t < w ? 0 : t;
                if (g) {
                    if (v !== this._tTime || !t || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== D || this._lazy) {
                        if (r = v,
                        f = this.timeline,
                        this._repeat) {
                            if (a = g + this._rDelay,
                            this._repeat < -1 && D)
                                return this.totalTime(100 * a + t, e, n);
                            if (r = Dt(v % a),
                            v === d ? (o = this._repeat,
                            r = g) : (o = ~~(u = Dt(v / a))) && o === u ? (r = g,
                            o--) : r > g && (r = g),
                            (l = this._yoyo && 1 & o) && (h = this._yEase,
                            r = g - r),
                            u = Lt(this._tTime, a),
                            r === p && !n && this._initted && o === u)
                                return this._tTime = v,
                                this;
                            o !== u && (f && this._yEase && Pe(f, l),
                            this.vars.repeatRefresh && !l && !this._lock && r !== a && this._initted && (this._lock = n = 1,
                            this.render(Dt(a * o), !0).invalidate()._lock = 0))
                        }
                        if (!this._initted) {
                            if (Ht(this, D ? t : r, n, e, v))
                                return this._tTime = 0,
                                this;
                            if (!(p === this._time || n && this.vars.repeatRefresh && o !== u))
                                return this;
                            if (g !== this._dur)
                                return this.render(t, e, n)
                        }
                        if (this._tTime = v,
                        this._time = r,
                        !this._act && this._ts && (this._act = 1,
                        this._lazy = 0),
                        this.ratio = c = (h || this._ease)(r / g),
                        this._from && (this.ratio = c = 1 - c),
                        r && !p && !e && !o && (he(this, "onStart"),
                        this._tTime !== v))
                            return this;
                        for (i = this._pt; i; )
                            i.r(c, i.d),
                            i = i._next;
                        f && f.render(t < 0 ? t : f._dur * f._ease(r / this._dur), e, n) || this._startAt && (this._zTime = t),
                        this._onUpdate && !e && (D && Pt(this, t, 0, n),
                        he(this, "onUpdate")),
                        this._repeat && o !== u && this.vars.onRepeat && !e && this.parent && he(this, "onRepeat"),
                        v !== this._tDur && v || this._tTime !== v || (D && !this._onUpdate && Pt(this, t, 0, !0),
                        (t || !g) && (v === this._tDur && this._ts > 0 || !v && this._ts < 0) && kt(this, 1),
                        e || D && !p || !(v || p || l) || (he(this, v === d ? "onComplete" : "onReverseComplete", !0),
                        this._prom && !(v < d && this.timeScale() > 0) && this._prom()))
                    }
                } else
                    !function(t, e, n, r) {
                        var i, o, a, u = t.ratio, l = e < 0 || !e && (!t._start && Wt(t) && (t._initted || !qt(t)) || (t._ts < 0 || t._dp._ts < 0) && !qt(t)) ? 0 : 1, c = t._rDelay, f = 0;
                        if (c && t._repeat && (f = $t(0, t._tDur, e),
                        o = Lt(f, c),
                        t._yoyo && 1 & o && (l = 1 - l),
                        o !== Lt(t._tTime, c) && (u = 1 - l,
                        t.vars.repeatRefresh && t._initted && t.invalidate())),
                        l !== u || s || r || t._zTime === w || !e && t._zTime) {
                            if (!t._initted && Ht(t, e, r, n, f))
                                return;
                            for (a = t._zTime,
                            t._zTime = e || (n ? w : 0),
                            n || (n = e && !a),
                            t.ratio = l,
                            t._from && (l = 1 - l),
                            t._time = 0,
                            t._tTime = f,
                            i = t._pt; i; )
                                i.r(l, i.d),
                                i = i._next;
                            e < 0 && Pt(t, e, 0, !0),
                            t._onUpdate && !n && he(t, "onUpdate"),
                            f && t._repeat && !n && t.parent && he(t, "onRepeat"),
                            (e >= t._tDur || e < 0) && t.ratio === l && (l && kt(t, 1),
                            n || s || (he(t, l ? "onComplete" : "onReverseComplete", !0),
                            t._prom && t._prom()))
                        } else
                            t._zTime || (t._zTime = e)
                    }(this, t, e, n);
                return this
            }
            ,
            n.targets = function() {
                return this._targets
            }
            ,
            n.invalidate = function(e) {
                return (!e || !this.vars.runBackwards) && (this._startAt = 0),
                this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
                this._ptLookup = [],
                this.timeline && this.timeline.invalidate(e),
                t.prototype.invalidate.call(this, e)
            }
            ,
            n.resetTo = function(t, e, n, r, i) {
                g || Ee.wake(),
                this._ts || this.play();
                var o = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
                return this._initted || Ue(this, o),
                function(t, e, n, r, i, o, s, a) {
                    var u, l, c, f, h = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                    if (!h)
                        for (h = t._ptCache[e] = [],
                        c = t._ptLookup,
                        f = t._targets.length; f--; ) {
                            if ((u = c[f][e]) && u.d && u.d._pt)
                                for (u = u.d._pt; u && u.p !== e && u.fp !== e; )
                                    u = u._next;
                            if (!u)
                                return He = 1,
                                t.vars[e] = "+=0",
                                Ue(t, s),
                                He = 0,
                                a ? $(e + " not eligible for reset") : 1;
                            h.push(u)
                        }
                    for (f = h.length; f--; )
                        (u = (l = h[f])._pt || l).s = !r && 0 !== r || i ? u.s + (r || 0) + o * u.c : r,
                        u.c = n - u.s,
                        l.e && (l.e = gt(n) + Qt(l.e)),
                        l.b && (l.b = u.s + Qt(l.b))
                }(this, t, e, n, r, this._ease(o / this._dur), o, i) ? this.resetTo(t, e, n, r, 1) : (Yt(this, 0),
                this.parent || Mt(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
                this.render(0))
            }
            ,
            n.kill = function(t, e) {
                if (void 0 === e && (e = "all"),
                !(t || e && "all" !== e))
                    return this._lazy = this._pt = 0,
                    this.parent ? pe(this) : this.scrollTrigger && this.scrollTrigger.kill(!!s),
                    this;
                if (this.timeline) {
                    var n = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(t, e, Ie && !0 !== Ie.vars.overwrite)._first || pe(this),
                    this.parent && n !== this.timeline.totalDuration() && Vt(this, this._dur * this.timeline._tDur / n, 0, 1),
                    this
                }
                var r, i, o, a, u, l, c, f = this._targets, h = t ? ee(t) : f, p = this._ptLookup, d = this._pt;
                if ((!e || "all" === e) && function(t, e) {
                    for (var n = t.length, r = n === e.length; r && n-- && t[n] === e[n]; )
                        ;
                    return n < 0
                }(f, h))
                    return "all" === e && (this._pt = 0),
                    pe(this);
                for (r = this._op = this._op || [],
                "all" !== e && (k(e) && (u = {},
                dt(e, (function(t) {
                    return u[t] = 1
                }
                )),
                e = u),
                e = function(t, e) {
                    var n, r, i, o, s = t[0] ? ht(t[0]).harness : 0, a = s && s.aliases;
                    if (!a)
                        return e;
                    for (r in n = bt({}, e),
                    a)
                        if (r in n)
                            for (i = (o = a[r].split(",")).length; i--; )
                                n[o[i]] = n[r];
                    return n
                }(f, e)),
                c = f.length; c--; )
                    if (~h.indexOf(f[c]))
                        for (u in i = p[c],
                        "all" === e ? (r[c] = e,
                        a = i,
                        o = {}) : (o = r[c] = r[c] || {},
                        a = e),
                        a)
                            (l = i && i[u]) && ("kill"in l.d && !0 !== l.d.kill(u) || At(this, l, "_pt"),
                            delete i[u]),
                            "all" !== o && (o[u] = 1);
                return this._initted && !this._pt && d && pe(this),
                this
            }
            ,
            e.to = function(t, n) {
                return new e(t,n,arguments[2])
            }
            ,
            e.from = function(t, e) {
                return Gt(1, arguments)
            }
            ,
            e.delayedCall = function(t, n, r, i) {
                return new e(n,0,{
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: t,
                    onComplete: n,
                    onReverseComplete: n,
                    onCompleteParams: r,
                    onReverseCompleteParams: r,
                    callbackScope: i
                })
            }
            ,
            e.fromTo = function(t, e, n) {
                return Gt(2, arguments)
            }
            ,
            e.set = function(t, n) {
                return n.duration = 0,
                n.repeatDelay || (n.repeat = 0),
                new e(t,n)
            }
            ,
            e.killTweensOf = function(t, e, n) {
                return u.killTweensOf(t, e, n)
            }
            ,
            e
        }(Xe);
        wt($e.prototype, {
            _targets: [],
            _lazy: 0,
            _startAt: 0,
            _op: 0,
            _onInit: 0
        }),
        dt("staggerTo,staggerFrom,staggerFromTo", (function(t) {
            $e[t] = function() {
                var e = new ze
                  , n = Jt.call(arguments, 0);
                return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0),
                e[t].apply(e, n)
            }
        }
        ));
        var Qe = function(t, e, n) {
            return t[e] = n
        }
          , Je = function(t, e, n) {
            return t[e](n)
        }
          , tn = function(t, e, n, r) {
            return t[e](r.fp, n)
        }
          , en = function(t, e, n) {
            return t.setAttribute(e, n)
        }
          , nn = function(t, e) {
            return S(t[e]) ? Je : O(t[e]) && t.setAttribute ? en : Qe
        }
          , rn = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        }
          , on = function(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        }
          , sn = function(t, e) {
            var n = e._pt
              , r = "";
            if (!t && e.b)
                r = e.b;
            else if (1 === t && e.e)
                r = e.e;
            else {
                for (; n; )
                    r = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + r,
                    n = n._next;
                r += e.c
            }
            e.set(e.t, e.p, r, e)
        }
          , an = function(t, e) {
            for (var n = e._pt; n; )
                n.r(t, n.d),
                n = n._next
        }
          , un = function(t, e, n, r) {
            for (var i, o = this._pt; o; )
                i = o._next,
                o.p === r && o.modifier(t, e, n),
                o = i
        }
          , ln = function(t) {
            for (var e, n, r = this._pt; r; )
                n = r._next,
                r.p === t && !r.op || r.op === t ? At(this, r, "_pt") : r.dep || (e = 1),
                r = n;
            return !e
        }
          , cn = function(t, e, n, r) {
            r.mSet(t, e, r.m.call(r.tween, n, r.mt), r)
        }
          , fn = function(t) {
            for (var e, n, r, i, o = t._pt; o; ) {
                for (e = o._next,
                n = r; n && n.pr > o.pr; )
                    n = n._next;
                (o._prev = n ? n._prev : i) ? o._prev._next = o : r = o,
                (o._next = n) ? n._prev = o : i = o,
                o = e
            }
            t._pt = r
        }
          , hn = function() {
            function t(t, e, n, r, i, o, s, a, u) {
                this.t = e,
                this.s = r,
                this.c = i,
                this.p = n,
                this.r = o || rn,
                this.d = s || this,
                this.set = a || Qe,
                this.pr = u || 0,
                this._next = t,
                t && (t._prev = this)
            }
            return t.prototype.modifier = function(t, e, n) {
                this.mSet = this.mSet || this.set,
                this.set = cn,
                this.m = t,
                this.mt = n,
                this.tween = e
            }
            ,
            t
        }();
        dt(ct + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
            return rt[t] = 1
        }
        )),
        j.TweenMax = j.TweenLite = $e,
        j.TimelineLite = j.TimelineMax = ze,
        u = new ze({
            sortChildren: !1,
            defaults: x,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !0
        }),
        y.stringFilter = be;
        var pn = []
          , dn = {}
          , gn = []
          , Dn = 0
          , vn = 0
          , mn = function(t) {
            return (dn[t] || gn).map((function(t) {
                return t()
            }
            ))
        }
          , _n = function() {
            var t = Date.now()
              , e = [];
            t - Dn > 2 && (mn("matchMediaInit"),
            pn.forEach((function(t) {
                var n, r, i, o, s = t.queries, a = t.conditions;
                for (r in s)
                    (n = l.matchMedia(s[r]).matches) && (i = 1),
                    n !== a[r] && (a[r] = n,
                    o = 1);
                o && (t.revert(),
                i && e.push(t))
            }
            )),
            mn("matchMediaRevert"),
            e.forEach((function(t) {
                return t.onMatch(t, (function(e) {
                    return t.add(null, e)
                }
                ))
            }
            )),
            Dn = t,
            mn("matchMedia"))
        }
          , yn = function() {
            function t(t, e) {
                this.selector = e && ne(e),
                this.data = [],
                this._r = [],
                this.isReverted = !1,
                this.id = vn++,
                t && this.add(t)
            }
            var e = t.prototype;
            return e.add = function(t, e, n) {
                S(t) && (n = e,
                e = t,
                t = S);
                var r = this
                  , i = function() {
                    var t, i = a, o = r.selector;
                    return i && i !== r && i.data.push(r),
                    n && (r.selector = ne(n)),
                    a = r,
                    t = e.apply(r, arguments),
                    S(t) && r._r.push(t),
                    a = i,
                    r.selector = o,
                    r.isReverted = !1,
                    t
                };
                return r.last = i,
                t === S ? i(r, (function(t) {
                    return r.add(null, t)
                }
                )) : t ? r[t] = i : i
            }
            ,
            e.ignore = function(t) {
                var e = a;
                a = null,
                t(this),
                a = e
            }
            ,
            e.getTweens = function() {
                var e = [];
                return this.data.forEach((function(n) {
                    return n instanceof t ? e.push.apply(e, n.getTweens()) : n instanceof $e && !(n.parent && "nested" === n.parent.data) && e.push(n)
                }
                )),
                e
            }
            ,
            e.clear = function() {
                this._r.length = this.data.length = 0
            }
            ,
            e.kill = function(t, e) {
                var n = this;
                if (t ? function() {
                    for (var e, r = n.getTweens(), i = n.data.length; i--; )
                        "isFlip" === (e = n.data[i]).data && (e.revert(),
                        e.getChildren(!0, !0, !1).forEach((function(t) {
                            return r.splice(r.indexOf(t), 1)
                        }
                        )));
                    for (r.map((function(t) {
                        return {
                            g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -1 / 0,
                            t
                        }
                    }
                    )).sort((function(t, e) {
                        return e.g - t.g || -1 / 0
                    }
                    )).forEach((function(e) {
                        return e.t.revert(t)
                    }
                    )),
                    i = n.data.length; i--; )
                        (e = n.data[i])instanceof ze ? "nested" !== e.data && (e.scrollTrigger && e.scrollTrigger.revert(),
                        e.kill()) : !(e instanceof $e) && e.revert && e.revert(t);
                    n._r.forEach((function(e) {
                        return e(t, n)
                    }
                    )),
                    n.isReverted = !0
                }() : this.data.forEach((function(t) {
                    return t.kill && t.kill()
                }
                )),
                this.clear(),
                e)
                    for (var r = pn.length; r--; )
                        pn[r].id === this.id && pn.splice(r, 1)
            }
            ,
            e.revert = function(t) {
                this.kill(t || {})
            }
            ,
            t
        }()
          , xn = function() {
            function t(t) {
                this.contexts = [],
                this.scope = t,
                a && a.data.push(this)
            }
            var e = t.prototype;
            return e.add = function(t, e, n) {
                B(t) || (t = {
                    matches: t
                });
                var r, i, o, s = new yn(0,n || this.scope), u = s.conditions = {};
                for (i in a && !s.selector && (s.selector = a.selector),
                this.contexts.push(s),
                e = s.add("onMatch", e),
                s.queries = t,
                t)
                    "all" === i ? o = 1 : (r = l.matchMedia(t[i])) && (pn.indexOf(s) < 0 && pn.push(s),
                    (u[i] = r.matches) && (o = 1),
                    r.addListener ? r.addListener(_n) : r.addEventListener("change", _n));
                return o && e(s, (function(t) {
                    return s.add(null, t)
                }
                )),
                this
            }
            ,
            e.revert = function(t) {
                this.kill(t || {})
            }
            ,
            e.kill = function(t) {
                this.contexts.forEach((function(e) {
                    return e.kill(t, !0)
                }
                ))
            }
            ,
            t
        }()
          , Cn = {
            registerPlugin: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                e.forEach((function(t) {
                    return ge(t)
                }
                ))
            },
            timeline: function(t) {
                return new ze(t)
            },
            getTweensOf: function(t, e) {
                return u.getTweensOf(t, e)
            },
            getProperty: function(t, e, n, r) {
                k(t) && (t = ee(t)[0]);
                var i = ht(t || {}).get
                  , o = n ? Ct : xt;
                return "native" === n && (n = ""),
                t ? e ? o((st[e] && st[e].get || i)(t, e, n, r)) : function(e, n, r) {
                    return o((st[e] && st[e].get || i)(t, e, n, r))
                }
                : t
            },
            quickSetter: function(t, e, n) {
                if ((t = ee(t)).length > 1) {
                    var r = t.map((function(t) {
                        return En.quickSetter(t, e, n)
                    }
                    ))
                      , i = r.length;
                    return function(t) {
                        for (var e = i; e--; )
                            r[e](t)
                    }
                }
                t = t[0] || {};
                var o = st[e]
                  , s = ht(t)
                  , a = s.harness && (s.harness.aliases || {})[e] || e
                  , u = o ? function(e) {
                    var r = new o;
                    d._pt = 0,
                    r.init(t, n ? e + n : e, d, 0, [t]),
                    r.render(1, r),
                    d._pt && an(1, d)
                }
                : s.set(t, a);
                return o ? u : function(e) {
                    return u(t, a, n ? e + n : e, s, 1)
                }
            },
            quickTo: function(t, e, n) {
                var r, i = En.to(t, wt(((r = {})[e] = "+=0.1",
                r.paused = !0,
                r.stagger = 0,
                r), n || {})), o = function(t, n, r) {
                    return i.resetTo(e, t, n, r)
                };
                return o.tween = i,
                o
            },
            isTweening: function(t) {
                return u.getTweensOf(t, !0).length > 0
            },
            defaults: function(t) {
                return t && t.ease && (t.ease = Oe(t.ease, x.ease)),
                Et(x, t || {})
            },
            config: function(t) {
                return Et(y, t || {})
            },
            registerEffect: function(t) {
                var e = t.name
                  , n = t.effect
                  , r = t.plugins
                  , i = t.defaults
                  , o = t.extendTimeline;
                (r || "").split(",").forEach((function(t) {
                    return t && !st[t] && !j[t] && $(e + " effect requires " + t + " plugin.")
                }
                )),
                at[e] = function(t, e, r) {
                    return n(ee(t), wt(e || {}, i), r)
                }
                ,
                o && (ze.prototype[e] = function(t, n, r) {
                    return this.add(at[e](t, B(n) ? n : (r = n) && {}, this), r)
                }
                )
            },
            registerEase: function(t, e) {
                Te[t] = Oe(e)
            },
            parseEase: function(t, e) {
                return arguments.length ? Oe(t, e) : Te
            },
            getById: function(t) {
                return u.getById(t)
            },
            exportRoot: function(t, e) {
                void 0 === t && (t = {});
                var n, r, i = new ze(t);
                for (i.smoothChildTiming = L(t.smoothChildTiming),
                u.remove(i),
                i._dp = 0,
                i._time = i._tTime = u._time,
                n = u._first; n; )
                    r = n._next,
                    !e && !n._dur && n instanceof $e && n.vars.onComplete === n._targets[0] || zt(i, n, n._start - n._delay),
                    n = r;
                return zt(u, i, 0),
                i
            },
            context: function(t, e) {
                return t ? new yn(t,e) : a
            },
            matchMedia: function(t) {
                return new xn(t)
            },
            matchMediaRefresh: function() {
                return pn.forEach((function(t) {
                    var e, n, r = t.conditions;
                    for (n in r)
                        r[n] && (r[n] = !1,
                        e = 1);
                    e && t.revert()
                }
                )) || _n()
            },
            addEventListener: function(t, e) {
                var n = dn[t] || (dn[t] = []);
                ~n.indexOf(e) || n.push(e)
            },
            removeEventListener: function(t, e) {
                var n = dn[t]
                  , r = n && n.indexOf(e);
                r >= 0 && n.splice(r, 1)
            },
            utils: {
                wrap: function t(e, n, r) {
                    var i = n - e;
                    return X(e) ? ue(e, t(0, e.length), n) : Zt(r, (function(t) {
                        return (i + (t - e) % i) % i + e
                    }
                    ))
                },
                wrapYoyo: function t(e, n, r) {
                    var i = n - e
                      , o = 2 * i;
                    return X(e) ? ue(e, t(0, e.length - 1), n) : Zt(r, (function(t) {
                        return e + ((t = (o + (t - e) % o) % o || 0) > i ? o - t : t)
                    }
                    ))
                },
                distribute: ie,
                random: ae,
                snap: se,
                normalize: function(t, e, n) {
                    return ce(t, e, 0, 1, n)
                },
                getUnit: Qt,
                clamp: function(t, e, n) {
                    return Zt(n, (function(n) {
                        return $t(t, e, n)
                    }
                    ))
                },
                splitColor: _e,
                toArray: ee,
                selector: ne,
                mapRange: ce,
                pipe: function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                        e[n] = arguments[n];
                    return function(t) {
                        return e.reduce((function(t, e) {
                            return e(t)
                        }
                        ), t)
                    }
                },
                unitize: function(t, e) {
                    return function(n) {
                        return t(parseFloat(n)) + (e || Qt(n))
                    }
                },
                interpolate: function t(e, n, r, i) {
                    var o = isNaN(e + n) ? 0 : function(t) {
                        return (1 - t) * e + t * n
                    }
                    ;
                    if (!o) {
                        var s, a, u, l, c, f = k(e), h = {};
                        if (!0 === r && (i = 1) && (r = null),
                        f)
                            e = {
                                p: e
                            },
                            n = {
                                p: n
                            };
                        else if (X(e) && !X(n)) {
                            for (u = [],
                            l = e.length,
                            c = l - 2,
                            a = 1; a < l; a++)
                                u.push(t(e[a - 1], e[a]));
                            l--,
                            o = function(t) {
                                t *= l;
                                var e = Math.min(c, ~~t);
                                return u[e](t - e)
                            }
                            ,
                            r = n
                        } else
                            i || (e = bt(X(e) ? [] : {}, e));
                        if (!u) {
                            for (s in n)
                                qe.call(h, e, s, "get", n[s]);
                            o = function(t) {
                                return an(t, h) || (f ? e.p : e)
                            }
                        }
                    }
                    return Zt(r, o)
                },
                shuffle: re
            },
            install: G,
            effects: at,
            ticker: Ee,
            updateRoot: ze.updateRoot,
            plugins: st,
            globalTimeline: u,
            core: {
                PropTween: hn,
                globals: Q,
                Tween: $e,
                Timeline: ze,
                Animation: Xe,
                getCache: ht,
                _removeLinkedListItem: At,
                reverting: function() {
                    return s
                },
                context: function(t) {
                    return t && a && (a.data.push(t),
                    t._ctx = a),
                    a
                },
                suppressOverwrites: function(t) {
                    return o = t
                }
            }
        };
        dt("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
            return Cn[t] = $e[t]
        }
        )),
        Ee.add(ze.updateRoot),
        d = Cn.to({}, {
            duration: 0
        });
        var wn = function(t, e) {
            for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; )
                n = n._next;
            return n
        }
          , bn = function(t, e) {
            return {
                name: t,
                rawVars: 1,
                init: function(t, n, r) {
                    r._onInit = function(t) {
                        var r, i;
                        if (k(n) && (r = {},
                        dt(n, (function(t) {
                            return r[t] = 1
                        }
                        )),
                        n = r),
                        e) {
                            for (i in r = {},
                            n)
                                r[i] = e(n[i]);
                            n = r
                        }
                        !function(t, e) {
                            var n, r, i, o = t._targets;
                            for (n in e)
                                for (r = o.length; r--; )
                                    (i = t._ptLookup[r][n]) && (i = i.d) && (i._pt && (i = wn(i, n)),
                                    i && i.modifier && i.modifier(e[n], t, o[r], n))
                        }(t, n)
                    }
                }
            }
        }
          , En = Cn.registerPlugin({
            name: "attr",
            init: function(t, e, n, r, i) {
                var o, s, a;
                for (o in this.tween = n,
                e)
                    a = t.getAttribute(o) || "",
                    (s = this.add(t, "setAttribute", (a || 0) + "", e[o], r, i, 0, 0, o)).op = o,
                    s.b = a,
                    this._props.push(o)
            },
            render: function(t, e) {
                for (var n = e._pt; n; )
                    s ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d),
                    n = n._next
            }
        }, {
            name: "endArray",
            init: function(t, e) {
                for (var n = e.length; n--; )
                    this.add(t, n, t[n] || 0, e[n], 0, 0, 0, 0, 0, 1)
            }
        }, bn("roundProps", oe), bn("modifiers"), bn("snap", se)) || Cn;
        $e.version = ze.version = En.version = "3.12.7",
        h = 1,
        N() && Fe(),
        Te.Power0,
        Te.Power1,
        Te.Power2,
        Te.Power3,
        Te.Power4,
        Te.Linear,
        Te.Quad,
        Te.Cubic,
        Te.Quart,
        Te.Quint,
        Te.Strong,
        Te.Elastic,
        Te.Back,
        Te.SteppedEase,
        Te.Bounce,
        Te.Sine,
        Te.Expo,
        Te.Circ;
        var Fn, Tn, Mn, An, kn, Sn, Pn, On, Bn = {}, Ln = 180 / Math.PI, Nn = Math.PI / 180, Rn = Math.atan2, Yn = /([A-Z])/g, Xn = /(left|right|width|margin|padding|x)/i, zn = /[\s,\(]\S/, In = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        }, Hn = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        }, Wn = function(t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        }, qn = function(t, e) {
            return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
        }, Vn = function(t, e) {
            var n = e.s + e.c * t;
            e.set(e.t, e.p, ~~(n + (n < 0 ? -.5 : .5)) + e.u, e)
        }, Un = function(t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e)
        }, jn = function(t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
        }, Kn = function(t, e, n) {
            return t.style[e] = n
        }, Gn = function(t, e, n) {
            return t.style.setProperty(e, n)
        }, Zn = function(t, e, n) {
            return t._gsap[e] = n
        }, $n = function(t, e, n) {
            return t._gsap.scaleX = t._gsap.scaleY = n
        }, Qn = function(t, e, n, r, i) {
            var o = t._gsap;
            o.scaleX = o.scaleY = n,
            o.renderTransform(i, o)
        }, Jn = function(t, e, n, r, i) {
            var o = t._gsap;
            o[e] = n,
            o.renderTransform(i, o)
        }, tr = "transform", er = tr + "Origin", nr = function t(e, n) {
            var r = this
              , i = this.target
              , o = i.style
              , s = i._gsap;
            if (e in Bn && o) {
                if (this.tfm = this.tfm || {},
                "transform" === e)
                    return In.transform.split(",").forEach((function(e) {
                        return t.call(r, e, n)
                    }
                    ));
                if (~(e = In[e] || e).indexOf(",") ? e.split(",").forEach((function(t) {
                    return r.tfm[t] = yr(i, t)
                }
                )) : this.tfm[e] = s.x ? s[e] : yr(i, e),
                e === er && (this.tfm.zOrigin = s.zOrigin),
                this.props.indexOf(tr) >= 0)
                    return;
                s.svg && (this.svgo = i.getAttribute("data-svg-origin"),
                this.props.push(er, n, "")),
                e = tr
            }
            (o || n) && this.props.push(e, n, o[e])
        }, rr = function(t) {
            t.translate && (t.removeProperty("translate"),
            t.removeProperty("scale"),
            t.removeProperty("rotate"))
        }, ir = function() {
            var t, e, n = this.props, r = this.target, i = r.style, o = r._gsap;
            for (t = 0; t < n.length; t += 3)
                n[t + 1] ? 2 === n[t + 1] ? r[n[t]](n[t + 2]) : r[n[t]] = n[t + 2] : n[t + 2] ? i[n[t]] = n[t + 2] : i.removeProperty("--" === n[t].substr(0, 2) ? n[t] : n[t].replace(Yn, "-$1").toLowerCase());
            if (this.tfm) {
                for (e in this.tfm)
                    o[e] = this.tfm[e];
                o.svg && (o.renderTransform(),
                r.setAttribute("data-svg-origin", this.svgo || "")),
                (t = Pn()) && t.isStart || i[tr] || (rr(i),
                o.zOrigin && i[er] && (i[er] += " " + o.zOrigin + "px",
                o.zOrigin = 0,
                o.renderTransform()),
                o.uncache = 1)
            }
        }, or = function(t, e) {
            var n = {
                target: t,
                props: [],
                revert: ir,
                save: nr
            };
            return t._gsap || En.core.getCache(t),
            e && t.style && t.nodeType && e.split(",").forEach((function(t) {
                return n.save(t)
            }
            )),
            n
        }, sr = function(t, e) {
            var n = Tn.createElementNS ? Tn.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Tn.createElement(t);
            return n && n.style ? n : Tn.createElement(t)
        }, ar = function t(e, n, r) {
            var i = getComputedStyle(e);
            return i[n] || i.getPropertyValue(n.replace(Yn, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && t(e, lr(n) || n, 1) || ""
        }, ur = "O,Moz,ms,Ms,Webkit".split(","), lr = function(t, e, n) {
            var r = (e || kn).style
              , i = 5;
            if (t in r && !n)
                return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(ur[i] + t in r); )
                ;
            return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? ur[i] : "") + t
        }, cr = function() {
            "undefined" != typeof window && window.document && (Fn = window,
            Tn = Fn.document,
            Mn = Tn.documentElement,
            kn = sr("div") || {
                style: {}
            },
            sr("div"),
            tr = lr(tr),
            er = tr + "Origin",
            kn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
            On = !!lr("perspective"),
            Pn = En.core.reverting,
            An = 1)
        }, fr = function(t) {
            var e, n = t.ownerSVGElement, r = sr("svg", n && n.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = t.cloneNode(!0);
            i.style.display = "block",
            r.appendChild(i),
            Mn.appendChild(r);
            try {
                e = i.getBBox()
            } catch (t) {}
            return r.removeChild(i),
            Mn.removeChild(r),
            e
        }, hr = function(t, e) {
            for (var n = e.length; n--; )
                if (t.hasAttribute(e[n]))
                    return t.getAttribute(e[n])
        }, pr = function(t) {
            var e, n;
            try {
                e = t.getBBox()
            } catch (r) {
                e = fr(t),
                n = 1
            }
            return e && (e.width || e.height) || n || (e = fr(t)),
            !e || e.width || e.x || e.y ? e : {
                x: +hr(t, ["x", "cx", "x1"]) || 0,
                y: +hr(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            }
        }, dr = function(t) {
            return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !pr(t))
        }, gr = function(t, e) {
            if (e) {
                var n, r = t.style;
                e in Bn && e !== er && (e = tr),
                r.removeProperty ? ("ms" !== (n = e.substr(0, 2)) && "webkit" !== e.substr(0, 6) || (e = "-" + e),
                r.removeProperty("--" === n ? e : e.replace(Yn, "-$1").toLowerCase())) : r.removeAttribute(e)
            }
        }, Dr = function(t, e, n, r, i, o) {
            var s = new hn(t._pt,e,n,0,1,o ? jn : Un);
            return t._pt = s,
            s.b = r,
            s.e = i,
            t._props.push(n),
            s
        }, vr = {
            deg: 1,
            rad: 1,
            turn: 1
        }, mr = {
            grid: 1,
            flex: 1
        }, _r = function t(e, n, r, i) {
            var o, s, a, u, l = parseFloat(r) || 0, c = (r + "").trim().substr((l + "").length) || "px", f = kn.style, h = Xn.test(n), p = "svg" === e.tagName.toLowerCase(), d = (p ? "client" : "offset") + (h ? "Width" : "Height"), g = 100, D = "px" === i, v = "%" === i;
            if (i === c || !l || vr[i] || vr[c])
                return l;
            if ("px" !== c && !D && (l = t(e, n, r, "px")),
            u = e.getCTM && dr(e),
            (v || "%" === c) && (Bn[n] || ~n.indexOf("adius")))
                return o = u ? e.getBBox()[h ? "width" : "height"] : e[d],
                gt(v ? l / o * g : l / 100 * o);
            if (f[h ? "width" : "height"] = g + (D ? c : i),
            s = "rem" !== i && ~n.indexOf("adius") || "em" === i && e.appendChild && !p ? e : e.parentNode,
            u && (s = (e.ownerSVGElement || {}).parentNode),
            s && s !== Tn && s.appendChild || (s = Tn.body),
            (a = s._gsap) && v && a.width && h && a.time === Ee.time && !a.uncache)
                return gt(l / a.width * g);
            if (!v || "height" !== n && "width" !== n)
                (v || "%" === c) && !mr[ar(s, "display")] && (f.position = ar(e, "position")),
                s === e && (f.position = "static"),
                s.appendChild(kn),
                o = kn[d],
                s.removeChild(kn),
                f.position = "absolute";
            else {
                var m = e.style[n];
                e.style[n] = g + i,
                o = e[d],
                m ? e.style[n] = m : gr(e, n)
            }
            return h && v && ((a = ht(s)).time = Ee.time,
            a.width = s[d]),
            gt(D ? o * l / g : o && l ? g / o * l : 0)
        }, yr = function(t, e, n, r) {
            var i;
            return An || cr(),
            e in In && "transform" !== e && ~(e = In[e]).indexOf(",") && (e = e.split(",")[0]),
            Bn[e] && "transform" !== e ? (i = Sr(t, r),
            i = "transformOrigin" !== e ? i[e] : i.svg ? i.origin : Pr(ar(t, er)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || r || ~(i + "").indexOf("calc(")) && (i = br[e] && br[e](t, e, n) || ar(t, e) || pt(t, e) || ("opacity" === e ? 1 : 0)),
            n && !~(i + "").trim().indexOf(" ") ? _r(t, e, i, n) + n : i
        }, xr = function(t, e, n, r) {
            if (!n || "none" === n) {
                var i = lr(e, t, 1)
                  , o = i && ar(t, i, 1);
                o && o !== n ? (e = i,
                n = o) : "borderColor" === e && (n = ar(t, "borderTopColor"))
            }
            var s, a, u, l, c, f, h, p, d, g, D, v = new hn(this._pt,t.style,e,0,1,sn), m = 0, _ = 0;
            if (v.b = n,
            v.e = r,
            n += "",
            "auto" == (r += "") && (f = t.style[e],
            t.style[e] = r,
            r = ar(t, e) || r,
            f ? t.style[e] = f : gr(t, e)),
            be(s = [n, r]),
            r = s[1],
            u = (n = s[0]).match(H) || [],
            (r.match(H) || []).length) {
                for (; a = H.exec(r); )
                    h = a[0],
                    d = r.substring(m, a.index),
                    c ? c = (c + 1) % 5 : "rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5) || (c = 1),
                    h !== (f = u[_++] || "") && (l = parseFloat(f) || 0,
                    D = f.substr((l + "").length),
                    "=" === h.charAt(1) && (h = vt(l, h) + D),
                    p = parseFloat(h),
                    g = h.substr((p + "").length),
                    m = H.lastIndex - g.length,
                    g || (g = g || y.units[e] || D,
                    m === r.length && (r += g,
                    v.e += g)),
                    D !== g && (l = _r(t, e, f, g) || 0),
                    v._pt = {
                        _next: v._pt,
                        p: d || 1 === _ ? d : ",",
                        s: l,
                        c: p - l,
                        m: c && c < 4 || "zIndex" === e ? Math.round : 0
                    });
                v.c = m < r.length ? r.substring(m, r.length) : ""
            } else
                v.r = "display" === e && "none" === r ? jn : Un;
            return q.test(r) && (v.e = 0),
            this._pt = v,
            v
        }, Cr = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        }, wr = function(t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var n, r, i, o = e.t, s = o.style, a = e.u, u = o._gsap;
                if ("all" === a || !0 === a)
                    s.cssText = "",
                    r = 1;
                else
                    for (i = (a = a.split(",")).length; --i > -1; )
                        n = a[i],
                        Bn[n] && (r = 1,
                        n = "transformOrigin" === n ? er : tr),
                        gr(o, n);
                r && (gr(o, tr),
                u && (u.svg && o.removeAttribute("transform"),
                s.scale = s.rotate = s.translate = "none",
                Sr(o, 1),
                u.uncache = 1,
                rr(s)))
            }
        }, br = {
            clearProps: function(t, e, n, r, i) {
                if ("isFromStart" !== i.data) {
                    var o = t._pt = new hn(t._pt,e,n,0,0,wr);
                    return o.u = r,
                    o.pr = -10,
                    o.tween = i,
                    t._props.push(n),
                    1
                }
            }
        }, Er = [1, 0, 0, 1, 0, 0], Fr = {}, Tr = function(t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
        }, Mr = function(t) {
            var e = ar(t, tr);
            return Tr(e) ? Er : e.substr(7).match(I).map(gt)
        }, Ar = function(t, e) {
            var n, r, i, o, s = t._gsap || ht(t), a = t.style, u = Mr(t);
            return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? Er : u : (u !== Er || t.offsetParent || t === Mn || s.svg || (i = a.display,
            a.display = "block",
            (n = t.parentNode) && (t.offsetParent || t.getBoundingClientRect().width) || (o = 1,
            r = t.nextElementSibling,
            Mn.appendChild(t)),
            u = Mr(t),
            i ? a.display = i : gr(t, "display"),
            o && (r ? n.insertBefore(t, r) : n ? n.appendChild(t) : Mn.removeChild(t))),
            e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
        }, kr = function(t, e, n, r, i, o) {
            var s, a, u, l = t._gsap, c = i || Ar(t, !0), f = l.xOrigin || 0, h = l.yOrigin || 0, p = l.xOffset || 0, d = l.yOffset || 0, g = c[0], D = c[1], v = c[2], m = c[3], _ = c[4], y = c[5], x = e.split(" "), C = parseFloat(x[0]) || 0, w = parseFloat(x[1]) || 0;
            n ? c !== Er && (a = g * m - D * v) && (u = C * (-D / a) + w * (g / a) - (g * y - D * _) / a,
            C = C * (m / a) + w * (-v / a) + (v * y - m * _) / a,
            w = u) : (C = (s = pr(t)).x + (~x[0].indexOf("%") ? C / 100 * s.width : C),
            w = s.y + (~(x[1] || x[0]).indexOf("%") ? w / 100 * s.height : w)),
            r || !1 !== r && l.smooth ? (_ = C - f,
            y = w - h,
            l.xOffset = p + (_ * g + y * v) - _,
            l.yOffset = d + (_ * D + y * m) - y) : l.xOffset = l.yOffset = 0,
            l.xOrigin = C,
            l.yOrigin = w,
            l.smooth = !!r,
            l.origin = e,
            l.originIsAbsolute = !!n,
            t.style[er] = "0px 0px",
            o && (Dr(o, l, "xOrigin", f, C),
            Dr(o, l, "yOrigin", h, w),
            Dr(o, l, "xOffset", p, l.xOffset),
            Dr(o, l, "yOffset", d, l.yOffset)),
            t.setAttribute("data-svg-origin", C + " " + w)
        }, Sr = function(t, e) {
            var n = t._gsap || new Ye(t);
            if ("x"in n && !e && !n.uncache)
                return n;
            var r, i, o, s, a, u, l, c, f, h, p, d, g, D, v, m, _, x, C, w, b, E, F, T, M, A, k, S, P, O, B, L, N = t.style, R = n.scaleX < 0, Y = "px", X = "deg", z = getComputedStyle(t), I = ar(t, er) || "0";
            return r = i = o = u = l = c = f = h = p = 0,
            s = a = 1,
            n.svg = !(!t.getCTM || !dr(t)),
            z.translate && ("none" === z.translate && "none" === z.scale && "none" === z.rotate || (N[tr] = ("none" !== z.translate ? "translate3d(" + (z.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== z.rotate ? "rotate(" + z.rotate + ") " : "") + ("none" !== z.scale ? "scale(" + z.scale.split(" ").join(",") + ") " : "") + ("none" !== z[tr] ? z[tr] : "")),
            N.scale = N.rotate = N.translate = "none"),
            D = Ar(t, n.svg),
            n.svg && (n.uncache ? (M = t.getBBox(),
            I = n.xOrigin - M.x + "px " + (n.yOrigin - M.y) + "px",
            T = "") : T = !e && t.getAttribute("data-svg-origin"),
            kr(t, T || I, !!T || n.originIsAbsolute, !1 !== n.smooth, D)),
            d = n.xOrigin || 0,
            g = n.yOrigin || 0,
            D !== Er && (x = D[0],
            C = D[1],
            w = D[2],
            b = D[3],
            r = E = D[4],
            i = F = D[5],
            6 === D.length ? (s = Math.sqrt(x * x + C * C),
            a = Math.sqrt(b * b + w * w),
            u = x || C ? Rn(C, x) * Ln : 0,
            (f = w || b ? Rn(w, b) * Ln + u : 0) && (a *= Math.abs(Math.cos(f * Nn))),
            n.svg && (r -= d - (d * x + g * w),
            i -= g - (d * C + g * b))) : (L = D[6],
            O = D[7],
            k = D[8],
            S = D[9],
            P = D[10],
            B = D[11],
            r = D[12],
            i = D[13],
            o = D[14],
            l = (v = Rn(L, P)) * Ln,
            v && (T = E * (m = Math.cos(-v)) + k * (_ = Math.sin(-v)),
            M = F * m + S * _,
            A = L * m + P * _,
            k = E * -_ + k * m,
            S = F * -_ + S * m,
            P = L * -_ + P * m,
            B = O * -_ + B * m,
            E = T,
            F = M,
            L = A),
            c = (v = Rn(-w, P)) * Ln,
            v && (m = Math.cos(-v),
            B = b * (_ = Math.sin(-v)) + B * m,
            x = T = x * m - k * _,
            C = M = C * m - S * _,
            w = A = w * m - P * _),
            u = (v = Rn(C, x)) * Ln,
            v && (T = x * (m = Math.cos(v)) + C * (_ = Math.sin(v)),
            M = E * m + F * _,
            C = C * m - x * _,
            F = F * m - E * _,
            x = T,
            E = M),
            l && Math.abs(l) + Math.abs(u) > 359.9 && (l = u = 0,
            c = 180 - c),
            s = gt(Math.sqrt(x * x + C * C + w * w)),
            a = gt(Math.sqrt(F * F + L * L)),
            v = Rn(E, F),
            f = Math.abs(v) > 2e-4 ? v * Ln : 0,
            p = B ? 1 / (B < 0 ? -B : B) : 0),
            n.svg && (T = t.getAttribute("transform"),
            n.forceCSS = t.setAttribute("transform", "") || !Tr(ar(t, tr)),
            T && t.setAttribute("transform", T))),
            Math.abs(f) > 90 && Math.abs(f) < 270 && (R ? (s *= -1,
            f += u <= 0 ? 180 : -180,
            u += u <= 0 ? 180 : -180) : (a *= -1,
            f += f <= 0 ? 180 : -180)),
            e = e || n.uncache,
            n.x = r - ((n.xPercent = r && (!e && n.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetWidth * n.xPercent / 100 : 0) + Y,
            n.y = i - ((n.yPercent = i && (!e && n.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetHeight * n.yPercent / 100 : 0) + Y,
            n.z = o + Y,
            n.scaleX = gt(s),
            n.scaleY = gt(a),
            n.rotation = gt(u) + X,
            n.rotationX = gt(l) + X,
            n.rotationY = gt(c) + X,
            n.skewX = f + X,
            n.skewY = h + X,
            n.transformPerspective = p + Y,
            (n.zOrigin = parseFloat(I.split(" ")[2]) || !e && n.zOrigin || 0) && (N[er] = Pr(I)),
            n.xOffset = n.yOffset = 0,
            n.force3D = y.force3D,
            n.renderTransform = n.svg ? Xr : On ? Yr : Br,
            n.uncache = 0,
            n
        }, Pr = function(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        }, Or = function(t, e, n) {
            var r = Qt(e);
            return gt(parseFloat(e) + parseFloat(_r(t, "x", n + "px", r))) + r
        }, Br = function(t, e) {
            e.z = "0px",
            e.rotationY = e.rotationX = "0deg",
            e.force3D = 0,
            Yr(t, e)
        }, Lr = "0deg", Nr = "0px", Rr = ") ", Yr = function(t, e) {
            var n = e || this
              , r = n.xPercent
              , i = n.yPercent
              , o = n.x
              , s = n.y
              , a = n.z
              , u = n.rotation
              , l = n.rotationY
              , c = n.rotationX
              , f = n.skewX
              , h = n.skewY
              , p = n.scaleX
              , d = n.scaleY
              , g = n.transformPerspective
              , D = n.force3D
              , v = n.target
              , m = n.zOrigin
              , _ = ""
              , y = "auto" === D && t && 1 !== t || !0 === D;
            if (m && (c !== Lr || l !== Lr)) {
                var x, C = parseFloat(l) * Nn, w = Math.sin(C), b = Math.cos(C);
                C = parseFloat(c) * Nn,
                x = Math.cos(C),
                o = Or(v, o, w * x * -m),
                s = Or(v, s, -Math.sin(C) * -m),
                a = Or(v, a, b * x * -m + m)
            }
            g !== Nr && (_ += "perspective(" + g + Rr),
            (r || i) && (_ += "translate(" + r + "%, " + i + "%) "),
            (y || o !== Nr || s !== Nr || a !== Nr) && (_ += a !== Nr || y ? "translate3d(" + o + ", " + s + ", " + a + ") " : "translate(" + o + ", " + s + Rr),
            u !== Lr && (_ += "rotate(" + u + Rr),
            l !== Lr && (_ += "rotateY(" + l + Rr),
            c !== Lr && (_ += "rotateX(" + c + Rr),
            f === Lr && h === Lr || (_ += "skew(" + f + ", " + h + Rr),
            1 === p && 1 === d || (_ += "scale(" + p + ", " + d + Rr),
            v.style[tr] = _ || "translate(0, 0)"
        }, Xr = function(t, e) {
            var n, r, i, o, s, a = e || this, u = a.xPercent, l = a.yPercent, c = a.x, f = a.y, h = a.rotation, p = a.skewX, d = a.skewY, g = a.scaleX, D = a.scaleY, v = a.target, m = a.xOrigin, _ = a.yOrigin, y = a.xOffset, x = a.yOffset, C = a.forceCSS, w = parseFloat(c), b = parseFloat(f);
            h = parseFloat(h),
            p = parseFloat(p),
            (d = parseFloat(d)) && (p += d = parseFloat(d),
            h += d),
            h || p ? (h *= Nn,
            p *= Nn,
            n = Math.cos(h) * g,
            r = Math.sin(h) * g,
            i = Math.sin(h - p) * -D,
            o = Math.cos(h - p) * D,
            p && (d *= Nn,
            s = Math.tan(p - d),
            i *= s = Math.sqrt(1 + s * s),
            o *= s,
            d && (s = Math.tan(d),
            n *= s = Math.sqrt(1 + s * s),
            r *= s)),
            n = gt(n),
            r = gt(r),
            i = gt(i),
            o = gt(o)) : (n = g,
            o = D,
            r = i = 0),
            (w && !~(c + "").indexOf("px") || b && !~(f + "").indexOf("px")) && (w = _r(v, "x", c, "px"),
            b = _r(v, "y", f, "px")),
            (m || _ || y || x) && (w = gt(w + m - (m * n + _ * i) + y),
            b = gt(b + _ - (m * r + _ * o) + x)),
            (u || l) && (s = v.getBBox(),
            w = gt(w + u / 100 * s.width),
            b = gt(b + l / 100 * s.height)),
            s = "matrix(" + n + "," + r + "," + i + "," + o + "," + w + "," + b + ")",
            v.setAttribute("transform", s),
            C && (v.style[tr] = s)
        }, zr = function(t, e, n, r, i) {
            var o, s, a = 360, u = k(i), l = parseFloat(i) * (u && ~i.indexOf("rad") ? Ln : 1) - r, c = r + l + "deg";
            return u && ("short" === (o = i.split("_")[1]) && (l %= a) != l % 180 && (l += l < 0 ? a : -360),
            "cw" === o && l < 0 ? l = (l + 36e9) % a - ~~(l / a) * a : "ccw" === o && l > 0 && (l = (l - 36e9) % a - ~~(l / a) * a)),
            t._pt = s = new hn(t._pt,e,n,r,l,Wn),
            s.e = c,
            s.u = "deg",
            t._props.push(n),
            s
        }, Ir = function(t, e) {
            for (var n in e)
                t[n] = e[n];
            return t
        }, Hr = function(t, e, n) {
            var r, i, o, s, a, u, l, c = Ir({}, n._gsap), f = n.style;
            for (i in c.svg ? (o = n.getAttribute("transform"),
            n.setAttribute("transform", ""),
            f[tr] = e,
            r = Sr(n, 1),
            gr(n, tr),
            n.setAttribute("transform", o)) : (o = getComputedStyle(n)[tr],
            f[tr] = e,
            r = Sr(n, 1),
            f[tr] = o),
            Bn)
                (o = c[i]) !== (s = r[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (a = Qt(o) !== (l = Qt(s)) ? _r(n, i, o, l) : parseFloat(o),
                u = parseFloat(s),
                t._pt = new hn(t._pt,r,i,a,u - a,Hn),
                t._pt.u = l || 0,
                t._props.push(i));
            Ir(r, c)
        };
        dt("padding,margin,Width,Radius", (function(t, e) {
            var n = "Top"
              , r = "Right"
              , i = "Bottom"
              , o = "Left"
              , s = (e < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map((function(n) {
                return e < 2 ? t + n : "border" + n + t
            }
            ));
            br[e > 1 ? "border" + t : t] = function(t, e, n, r, i) {
                var o, a;
                if (arguments.length < 4)
                    return o = s.map((function(e) {
                        return yr(t, e, n)
                    }
                    )),
                    5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a;
                o = (r + "").split(" "),
                a = {},
                s.forEach((function(t, e) {
                    return a[t] = o[e] = o[e] || o[(e - 1) / 2 | 0]
                }
                )),
                t.init(e, a, i)
            }
        }
        ));
        var Wr, qr, Vr = {
            name: "css",
            register: cr,
            targetTest: function(t) {
                return t.style && t.nodeType
            },
            init: function(t, e, n, r, i) {
                var o, s, a, u, l, c, f, h, p, d, g, D, v, m, _, x, C, w, b, E, F = this._props, T = t.style, M = n.vars.startAt;
                for (f in An || cr(),
                this.styles = this.styles || or(t),
                x = this.styles.props,
                this.tween = n,
                e)
                    if ("autoRound" !== f && (s = e[f],
                    !st[f] || !Ve(f, e, n, r, t, i)))
                        if (l = typeof s,
                        c = br[f],
                        "function" === l && (l = typeof (s = s.call(n, r, t, i))),
                        "string" === l && ~s.indexOf("random(") && (s = le(s)),
                        c)
                            c(this, t, f, s, n) && (_ = 1);
                        else if ("--" === f.substr(0, 2))
                            o = (getComputedStyle(t).getPropertyValue(f) + "").trim(),
                            s += "",
                            Ce.lastIndex = 0,
                            Ce.test(o) || (h = Qt(o),
                            p = Qt(s)),
                            p ? h !== p && (o = _r(t, f, o, p) + p) : h && (s += h),
                            this.add(T, "setProperty", o, s, r, i, 0, 0, f),
                            F.push(f),
                            x.push(f, 0, T[f]);
                        else if ("undefined" !== l) {
                            if (M && f in M ? (o = "function" == typeof M[f] ? M[f].call(n, r, t, i) : M[f],
                            k(o) && ~o.indexOf("random(") && (o = le(o)),
                            Qt(o + "") || "auto" === o || (o += y.units[f] || Qt(yr(t, f)) || ""),
                            "=" === (o + "").charAt(1) && (o = yr(t, f))) : o = yr(t, f),
                            u = parseFloat(o),
                            (d = "string" === l && "=" === s.charAt(1) && s.substr(0, 2)) && (s = s.substr(2)),
                            a = parseFloat(s),
                            f in In && ("autoAlpha" === f && (1 === u && "hidden" === yr(t, "visibility") && a && (u = 0),
                            x.push("visibility", 0, T.visibility),
                            Dr(this, T, "visibility", u ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)),
                            "scale" !== f && "transform" !== f && ~(f = In[f]).indexOf(",") && (f = f.split(",")[0])),
                            g = f in Bn)
                                if (this.styles.save(f),
                                D || ((v = t._gsap).renderTransform && !e.parseTransform || Sr(t, e.parseTransform),
                                m = !1 !== e.smoothOrigin && v.smooth,
                                (D = this._pt = new hn(this._pt,T,tr,0,1,v.renderTransform,v,0,-1)).dep = 1),
                                "scale" === f)
                                    this._pt = new hn(this._pt,v,"scaleY",v.scaleY,(d ? vt(v.scaleY, d + a) : a) - v.scaleY || 0,Hn),
                                    this._pt.u = 0,
                                    F.push("scaleY", f),
                                    f += "X";
                                else {
                                    if ("transformOrigin" === f) {
                                        x.push(er, 0, T[er]),
                                        w = void 0,
                                        b = void 0,
                                        E = void 0,
                                        b = (w = (C = s).split(" "))[0],
                                        E = w[1] || "50%",
                                        "top" !== b && "bottom" !== b && "left" !== E && "right" !== E || (C = b,
                                        b = E,
                                        E = C),
                                        w[0] = Cr[b] || b,
                                        w[1] = Cr[E] || E,
                                        s = w.join(" "),
                                        v.svg ? kr(t, s, 0, m, 0, this) : ((p = parseFloat(s.split(" ")[2]) || 0) !== v.zOrigin && Dr(this, v, "zOrigin", v.zOrigin, p),
                                        Dr(this, T, f, Pr(o), Pr(s)));
                                        continue
                                    }
                                    if ("svgOrigin" === f) {
                                        kr(t, s, 1, m, 0, this);
                                        continue
                                    }
                                    if (f in Fr) {
                                        zr(this, v, f, u, d ? vt(u, d + s) : s);
                                        continue
                                    }
                                    if ("smoothOrigin" === f) {
                                        Dr(this, v, "smooth", v.smooth, s);
                                        continue
                                    }
                                    if ("force3D" === f) {
                                        v[f] = s;
                                        continue
                                    }
                                    if ("transform" === f) {
                                        Hr(this, s, t);
                                        continue
                                    }
                                }
                            else
                                f in T || (f = lr(f) || f);
                            if (g || (a || 0 === a) && (u || 0 === u) && !zn.test(s) && f in T)
                                a || (a = 0),
                                (h = (o + "").substr((u + "").length)) !== (p = Qt(s) || (f in y.units ? y.units[f] : h)) && (u = _r(t, f, o, p)),
                                this._pt = new hn(this._pt,g ? v : T,f,u,(d ? vt(u, d + a) : a) - u,g || "px" !== p && "zIndex" !== f || !1 === e.autoRound ? Hn : Vn),
                                this._pt.u = p || 0,
                                h !== p && "%" !== p && (this._pt.b = o,
                                this._pt.r = qn);
                            else if (f in T)
                                xr.call(this, t, f, o, d ? d + s : s);
                            else if (f in t)
                                this.add(t, f, o || t[f], d ? d + s : s, r, i);
                            else if ("parseTransform" !== f) {
                                Z(f, s);
                                continue
                            }
                            g || (f in T ? x.push(f, 0, T[f]) : "function" == typeof t[f] ? x.push(f, 2, t[f]()) : x.push(f, 1, o || t[f])),
                            F.push(f)
                        }
                _ && fn(this)
            },
            render: function(t, e) {
                if (e.tween._time || !Pn())
                    for (var n = e._pt; n; )
                        n.r(t, n.d),
                        n = n._next;
                else
                    e.styles.revert()
            },
            get: yr,
            aliases: In,
            getSetter: function(t, e, n) {
                var r = In[e];
                return r && r.indexOf(",") < 0 && (e = r),
                e in Bn && e !== er && (t._gsap.x || yr(t, "x")) ? n && Sn === n ? "scale" === e ? $n : Zn : (Sn = n || {}) && ("scale" === e ? Qn : Jn) : t.style && !O(t.style[e]) ? Kn : ~e.indexOf("-") ? Gn : nn(t, e)
            },
            core: {
                _removeProperty: gr,
                _getMatrix: Ar
            }
        };
        En.utils.checkPrefix = lr,
        En.core.getStyleSaver = or,
        qr = dt("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (Wr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
            Bn[t] = 1
        }
        )),
        dt(Wr, (function(t) {
            y.units[t] = "deg",
            Fr[t] = 1
        }
        )),
        In[qr[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Wr,
        dt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
            var e = t.split(":");
            In[e[1]] = qr[e[0]]
        }
        )),
        dt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
            y.units[t] = "px"
        }
        )),
        En.registerPlugin(Vr);
        var Ur = En.registerPlugin(Vr) || En;
        Ur.core.Tween
    }
    ,
    2816: (t, e, n) => {
        n.d(e, {
            S6: () => E,
            qK: () => F
        });
        var r, i, o, s, a, u, l, c, f, h = "transform", p = h + "Origin", d = function(t) {
            var e = t.ownerDocument || t;
            !(h in t.style) && "msTransform"in t.style && (p = (h = "msTransform") + "Origin");
            for (; e.parentNode && (e = e.parentNode); )
                ;
            if (i = window,
            l = new E,
            e) {
                r = e,
                o = e.documentElement,
                s = e.body,
                (c = r.createElementNS("http://www.w3.org/2000/svg", "g")).style.transform = "none";
                var n = e.createElement("div")
                  , a = e.createElement("div")
                  , u = e && (e.body || e.firstElementChild);
                u && u.appendChild && (u.appendChild(n),
                n.appendChild(a),
                n.setAttribute("style", "position:static;transform:translate3d(0,0,1px)"),
                f = a.offsetParent !== n,
                u.removeChild(n))
            }
            return e
        }, g = function(t) {
            for (var e, n; t && t !== s; )
                (n = t._gsap) && n.uncache && n.get(t, "x"),
                n && !n.scaleX && !n.scaleY && n.renderTransform && (n.scaleX = n.scaleY = 1e-4,
                n.renderTransform(1, n),
                e ? e.push(n) : e = [n]),
                t = t.parentNode;
            return e
        }, D = [], v = [], m = function() {
            return i.pageYOffset || r.scrollTop || o.scrollTop || s.scrollTop || 0
        }, _ = function() {
            return i.pageXOffset || r.scrollLeft || o.scrollLeft || s.scrollLeft || 0
        }, y = function(t) {
            return t.ownerSVGElement || ("svg" === (t.tagName + "").toLowerCase() ? t : null)
        }, x = function t(e) {
            return "fixed" === i.getComputedStyle(e).position || ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
        }, C = function t(e, n) {
            if (e.parentNode && (r || d(e))) {
                var i = y(e)
                  , o = i ? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml"
                  , s = i ? n ? "rect" : "g" : "div"
                  , l = 2 !== n ? 0 : 100
                  , c = 3 === n ? 100 : 0
                  , f = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;"
                  , h = r.createElementNS ? r.createElementNS(o.replace(/^https/, "http"), s) : r.createElement(s);
                return n && (i ? (u || (u = t(e)),
                h.setAttribute("width", .01),
                h.setAttribute("height", .01),
                h.setAttribute("transform", "translate(" + l + "," + c + ")"),
                u.appendChild(h)) : (a || ((a = t(e)).style.cssText = f),
                h.style.cssText = f + "width:0.1px;height:0.1px;top:" + c + "px;left:" + l + "px",
                a.appendChild(h))),
                h
            }
            throw "Need document and parent."
        }, w = function(t, e) {
            var n, r, o, s, d, g, m = y(t), _ = t === m, x = m ? D : v, w = t.parentNode;
            if (t === i)
                return t;
            if (x.length || x.push(C(t, 1), C(t, 2), C(t, 3)),
            n = m ? u : a,
            m)
                _ ? (o = function(t) {
                    var e, n = t.getCTM();
                    return n || (e = t.style[h],
                    t.style[h] = "none",
                    t.appendChild(c),
                    n = c.getCTM(),
                    t.removeChild(c),
                    e ? t.style[h] = e : t.style.removeProperty(h.replace(/([A-Z])/g, "-$1").toLowerCase())),
                    n || l.clone()
                }(t),
                s = -o.e / o.a,
                d = -o.f / o.d,
                r = l) : t.getBBox ? (o = t.getBBox(),
                s = (r = (r = t.transform ? t.transform.baseVal : {}).numberOfItems ? r.numberOfItems > 1 ? function(t) {
                    for (var e = new E, n = 0; n < t.numberOfItems; n++)
                        e.multiply(t.getItem(n).matrix);
                    return e
                }(r) : r.getItem(0).matrix : l).a * o.x + r.c * o.y,
                d = r.b * o.x + r.d * o.y) : (r = new E,
                s = d = 0),
                e && "g" === t.tagName.toLowerCase() && (s = d = 0),
                (_ ? m : w).appendChild(n),
                n.setAttribute("transform", "matrix(" + r.a + "," + r.b + "," + r.c + "," + r.d + "," + (r.e + s) + "," + (r.f + d) + ")");
            else {
                if (s = d = 0,
                f)
                    for (r = t.offsetParent,
                    o = t; o && (o = o.parentNode) && o !== r && o.parentNode; )
                        (i.getComputedStyle(o)[h] + "").length > 4 && (s = o.offsetLeft,
                        d = o.offsetTop,
                        o = 0);
                if ("absolute" !== (g = i.getComputedStyle(t)).position && "fixed" !== g.position)
                    for (r = t.offsetParent; w && w !== r; )
                        s += w.scrollLeft || 0,
                        d += w.scrollTop || 0,
                        w = w.parentNode;
                (o = n.style).top = t.offsetTop - d + "px",
                o.left = t.offsetLeft - s + "px",
                o[h] = g[h],
                o[p] = g[p],
                o.position = "fixed" === g.position ? "fixed" : "absolute",
                t.parentNode.appendChild(n)
            }
            return n
        }, b = function(t, e, n, r, i, o, s) {
            return t.a = e,
            t.b = n,
            t.c = r,
            t.d = i,
            t.e = o,
            t.f = s,
            t
        }, E = function() {
            function t(t, e, n, r, i, o) {
                void 0 === t && (t = 1),
                void 0 === e && (e = 0),
                void 0 === n && (n = 0),
                void 0 === r && (r = 1),
                void 0 === i && (i = 0),
                void 0 === o && (o = 0),
                b(this, t, e, n, r, i, o)
            }
            var e = t.prototype;
            return e.inverse = function() {
                var t = this.a
                  , e = this.b
                  , n = this.c
                  , r = this.d
                  , i = this.e
                  , o = this.f
                  , s = t * r - e * n || 1e-10;
                return b(this, r / s, -e / s, -n / s, t / s, (n * o - r * i) / s, -(t * o - e * i) / s)
            }
            ,
            e.multiply = function(t) {
                var e = this.a
                  , n = this.b
                  , r = this.c
                  , i = this.d
                  , o = this.e
                  , s = this.f
                  , a = t.a
                  , u = t.c
                  , l = t.b
                  , c = t.d
                  , f = t.e
                  , h = t.f;
                return b(this, a * e + l * r, a * n + l * i, u * e + c * r, u * n + c * i, o + f * e + h * r, s + f * n + h * i)
            }
            ,
            e.clone = function() {
                return new t(this.a,this.b,this.c,this.d,this.e,this.f)
            }
            ,
            e.equals = function(t) {
                var e = this.a
                  , n = this.b
                  , r = this.c
                  , i = this.d
                  , o = this.e
                  , s = this.f;
                return e === t.a && n === t.b && r === t.c && i === t.d && o === t.e && s === t.f
            }
            ,
            e.apply = function(t, e) {
                void 0 === e && (e = {});
                var n = t.x
                  , r = t.y
                  , i = this.a
                  , o = this.b
                  , s = this.c
                  , a = this.d
                  , u = this.e
                  , l = this.f;
                return e.x = n * i + r * s + u || 0,
                e.y = n * o + r * a + l || 0,
                e
            }
            ,
            t
        }();
        function F(t, e, n, i) {
            if (!t || !t.parentNode || (r || d(t)).documentElement === t)
                return new E;
            var o = g(t)
              , s = y(t) ? D : v
              , a = w(t, n)
              , u = s[0].getBoundingClientRect()
              , l = s[1].getBoundingClientRect()
              , c = s[2].getBoundingClientRect()
              , f = a.parentNode
              , h = !i && x(t)
              , p = new E((l.left - u.left) / 100,(l.top - u.top) / 100,(c.left - u.left) / 100,(c.top - u.top) / 100,u.left + (h ? 0 : _()),u.top + (h ? 0 : m()));
            if (f.removeChild(a),
            o)
                for (u = o.length; u--; )
                    (l = o[u]).scaleX = l.scaleY = 0,
                    l.renderTransform(1, l);
            return e ? p.inverse() : p
        }
    }
    ,
    8576: (t, e, n) => {
        n.d(e, {
            EN: () => N,
            MJ: () => H,
            Ut: () => I,
            YF: () => Y,
            e_: () => j,
            fL: () => A,
            ie: () => V,
            od: () => q,
            uy: () => U,
            y8: () => B
        });
        var r = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
          , i = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
          , o = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi
          , s = /(^[#\.][a-z]|[a-y][a-z])/i
          , a = Math.PI / 180
          , u = 180 / Math.PI
          , l = Math.sin
          , c = Math.cos
          , f = Math.abs
          , h = Math.sqrt
          , p = Math.atan2
          , d = 1e8
          , g = function(t) {
            return "string" == typeof t
        }
          , D = function(t) {
            return "number" == typeof t
        }
          , v = function(t) {
            return void 0 === t
        }
          , m = {}
          , _ = {}
          , y = 1e5
          , x = function(t) {
            return Math.round((t + d) % 1 * y) / y || (t < 0 ? 0 : 1)
        }
          , C = function(t) {
            return Math.round(t * y) / y || 0
        }
          , w = function(t) {
            return Math.round(1e10 * t) / 1e10 || 0
        }
          , b = function(t, e, n, r) {
            var i = t[e]
              , o = 1 === r ? 6 : X(i, n, r);
            if ((o || !r) && o + n + 2 < i.length)
                return t.splice(e, 0, i.slice(0, n + o + 2)),
                i.splice(0, n + o),
                1
        }
          , E = function(t, e, n) {
            var r = t.length
              , i = ~~(n * r);
            if (t[i] > e) {
                for (; --i && t[i] > e; )
                    ;
                i < 0 && (i = 0)
            } else
                for (; t[++i] < e && i < r; )
                    ;
            return i < r ? i : r - 1
        }
          , F = function(t, e) {
            var n = t.length;
            for (e || t.reverse(); n--; )
                t[n].reversed || k(t[n])
        }
          , T = function(t, e) {
            return e.totalLength = t.totalLength,
            t.samples ? (e.samples = t.samples.slice(0),
            e.lookup = t.lookup.slice(0),
            e.minLength = t.minLength,
            e.resolution = t.resolution) : t.totalPoints && (e.totalPoints = t.totalPoints),
            e
        }
          , M = function(t, e) {
            var n = t.length
              , r = t[n - 1] || []
              , i = r.length;
            n && e[0] === r[i - 2] && e[1] === r[i - 1] && (e = r.concat(e.slice(2)),
            n--),
            t[n] = e
        };
        function A(t) {
            var e, n = (t = g(t) && s.test(t) && document.querySelector(t) || t).getAttribute ? t : 0;
            return n && (t = t.getAttribute("d")) ? (n._gsPath || (n._gsPath = {}),
            (e = n._gsPath[t]) && !e._dirty ? e : n._gsPath[t] = q(t)) : t ? g(t) ? q(t) : D(t[0]) ? [t] : t : console.warn("Expecting a <path> element or an SVG path data string")
        }
        function k(t) {
            var e, n = 0;
            for (t.reverse(); n < t.length; n += 2)
                e = t[n],
                t[n] = t[n + 1],
                t[n + 1] = e;
            t.reversed = !t.reversed
        }
        var S = function(t, e) {
            var n, r = document.createElementNS("http://www.w3.org/2000/svg", "path"), i = [].slice.call(t.attributes), o = i.length;
            for (e = "," + e + ","; --o > -1; )
                n = i[o].nodeName.toLowerCase(),
                e.indexOf("," + n + ",") < 0 && r.setAttributeNS(null, n, i[o].nodeValue);
            return r
        }
          , P = {
            rect: "rx,ry,x,y,width,height",
            circle: "r,cx,cy",
            ellipse: "rx,ry,cx,cy",
            line: "x1,x2,y1,y2"
        }
          , O = function(t, e) {
            for (var n = e ? e.split(",") : [], r = {}, i = n.length; --i > -1; )
                r[n[i]] = +t.getAttribute(n[i]) || 0;
            return r
        };
        function B(t, e) {
            var n, r, o, s, a, u, l, c, f, h, p, d, g, D, v, m, _, y, x, C, w, b, E = t.tagName.toLowerCase(), F = .552284749831;
            return "path" !== E && t.getBBox ? (u = S(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),
            b = O(t, P[E]),
            "rect" === E ? (s = b.rx,
            a = b.ry || s,
            r = b.x,
            o = b.y,
            h = b.width - 2 * s,
            p = b.height - 2 * a,
            n = s || a ? "M" + (m = (D = (g = r + s) + h) + s) + "," + (y = o + a) + " V" + (x = y + p) + " C" + [m, C = x + a * F, v = D + s * F, w = x + a, D, w, D - (D - g) / 3, w, g + (D - g) / 3, w, g, w, d = r + s * (1 - F), w, r, C, r, x, r, x - (x - y) / 3, r, y + (x - y) / 3, r, y, r, _ = o + a * (1 - F), d, o, g, o, g + (D - g) / 3, o, D - (D - g) / 3, o, D, o, v, o, m, _, m, y].join(",") + "z" : "M" + (r + h) + "," + o + " v" + p + " h" + -h + " v" + -p + " h" + h + "z") : "circle" === E || "ellipse" === E ? ("circle" === E ? c = (s = a = b.r) * F : (s = b.rx,
            c = (a = b.ry) * F),
            n = "M" + ((r = b.cx) + s) + "," + (o = b.cy) + " C" + [r + s, o + c, r + (l = s * F), o + a, r, o + a, r - l, o + a, r - s, o + c, r - s, o, r - s, o - c, r - l, o - a, r, o - a, r + l, o - a, r + s, o - c, r + s, o].join(",") + "z") : "line" === E ? n = "M" + b.x1 + "," + b.y1 + " L" + b.x2 + "," + b.y2 : "polyline" !== E && "polygon" !== E || (n = "M" + (r = (f = (t.getAttribute("points") + "").match(i) || []).shift()) + "," + (o = f.shift()) + " L" + f.join(","),
            "polygon" === E && (n += "," + r + "," + o + "z")),
            u.setAttribute("d", j(u._gsRawPath = q(n))),
            e && t.parentNode && (t.parentNode.insertBefore(u, t),
            t.parentNode.removeChild(t)),
            u) : t
        }
        function L(t, e, n) {
            var r, i = t[e], o = t[e + 2], s = t[e + 4];
            return i += (o - i) * n,
            i += ((o += (s - o) * n) - i) * n,
            r = o + (s + (t[e + 6] - s) * n - o) * n - i,
            i = t[e + 1],
            i += ((o = t[e + 3]) - i) * n,
            i += ((o += ((s = t[e + 5]) - o) * n) - i) * n,
            C(p(o + (s + (t[e + 7] - s) * n - o) * n - i, r) * u)
        }
        function N(t, e, n) {
            n = v(n) ? 1 : w(n) || 0,
            e = w(e) || 0;
            var r = Math.max(0, ~~(f(n - e) - 1e-8))
              , i = function(t) {
                for (var e = [], n = 0; n < t.length; n++)
                    e[n] = T(t[n], t[n].slice(0));
                return T(t, e)
            }(t);
            if (e > n && (e = 1 - e,
            n = 1 - n,
            F(i),
            i.totalLength = 0),
            e < 0 || n < 0) {
                var o = Math.abs(~~Math.min(e, n)) + 1;
                e += o,
                n += o
            }
            i.totalLength || Y(i);
            var s, a, u, l, c, h, p, d, g = n > 1, D = z(i, e, m, !0), y = z(i, n, _), x = y.segment, C = D.segment, E = y.segIndex, A = D.segIndex, k = y.i, S = D.i, P = A === E, O = k === S && P;
            if (g || r) {
                for (s = E < A || P && k < S || O && y.t < D.t,
                b(i, A, S, D.t) && (A++,
                s || (E++,
                O ? (y.t = (y.t - D.t) / (1 - D.t),
                k = 0) : P && (k -= S))),
                Math.abs(1 - (n - e)) < 1e-5 ? E = A - 1 : !y.t && E ? E-- : b(i, E, k, y.t) && s && A++,
                1 === D.t && (A = (A + 1) % i.length),
                c = [],
                p = 1 + (h = i.length) * r,
                d = A,
                p += (h - A + E) % h,
                l = 0; l < p; l++)
                    M(c, i[d++ % h]);
                i = c
            } else if (u = 1 === y.t ? 6 : X(x, k, y.t),
            e !== n)
                for (a = X(C, S, O ? D.t / y.t : D.t),
                P && (u += a),
                x.splice(k + u + 2),
                (a || S) && C.splice(0, S + a),
                l = i.length; l--; )
                    (l < A || l > E) && i.splice(l, 1);
            else
                x.angle = L(x, k + u, 0),
                D = x[k += u],
                y = x[k + 1],
                x.length = x.totalLength = 0,
                x.totalPoints = i.totalPoints = 8,
                x.push(D, y, D, y, D, y, D, y);
            return i.totalLength = 0,
            i
        }
        function R(t, e, n) {
            e = e || 0,
            t.samples || (t.samples = [],
            t.lookup = []);
            var r, i, o, s, a, u, l, c, p, g, D, v, m, _, y, x, C, w = ~~t.resolution || 12, b = 1 / w, E = n ? e + 6 * n + 1 : t.length, F = t[e], T = t[e + 1], M = e ? e / 6 * w : 0, A = t.samples, k = t.lookup, S = (e ? t.minLength : d) || d, P = A[M + n * w - 1], O = e ? A[M - 1] : 0;
            for (A.length = k.length = 0,
            i = e + 2; i < E; i += 6) {
                if (o = t[i + 4] - F,
                s = t[i + 2] - F,
                a = t[i] - F,
                c = t[i + 5] - T,
                p = t[i + 3] - T,
                g = t[i + 1] - T,
                u = l = D = v = 0,
                f(o) < .01 && f(c) < .01 && f(a) + f(g) < .01)
                    t.length > 8 && (t.splice(i, 6),
                    i -= 6,
                    E -= 6);
                else
                    for (r = 1; r <= w; r++)
                        u = l - (l = ((_ = b * r) * _ * o + 3 * (m = 1 - _) * (_ * s + m * a)) * _),
                        D = v - (v = (_ * _ * c + 3 * m * (_ * p + m * g)) * _),
                        (x = h(D * D + u * u)) < S && (S = x),
                        O += x,
                        A[M++] = O;
                F += o,
                T += c
            }
            if (P)
                for (P -= O; M < A.length; M++)
                    A[M] += P;
            if (A.length && S) {
                if (t.totalLength = C = A[A.length - 1] || 0,
                t.minLength = S,
                C / S < 9999)
                    for (x = y = 0,
                    r = 0; r < C; r += S)
                        k[x++] = A[y] < r ? ++y : y
            } else
                t.totalLength = A[0] = 0;
            return e ? O - A[e / 2 - 1] : O
        }
        function Y(t, e) {
            var n, r, i;
            for (i = n = r = 0; i < t.length; i++)
                t[i].resolution = ~~e || 12,
                r += t[i].length,
                n += R(t[i]);
            return t.totalPoints = r,
            t.totalLength = n,
            t
        }
        function X(t, e, n) {
            if (n <= 0 || n >= 1)
                return 0;
            var r = t[e]
              , i = t[e + 1]
              , o = t[e + 2]
              , s = t[e + 3]
              , a = t[e + 4]
              , u = t[e + 5]
              , l = r + (o - r) * n
              , c = o + (a - o) * n
              , f = i + (s - i) * n
              , h = s + (u - s) * n
              , p = l + (c - l) * n
              , d = f + (h - f) * n
              , g = a + (t[e + 6] - a) * n
              , D = u + (t[e + 7] - u) * n;
            return c += (g - c) * n,
            h += (D - h) * n,
            t.splice(e + 2, 4, C(l), C(f), C(p), C(d), C(p + (c - p) * n), C(d + (h - d) * n), C(c), C(h), C(g), C(D)),
            t.samples && t.samples.splice(e / 6 * t.resolution | 0, 0, 0, 0, 0, 0, 0, 0),
            6
        }
        function z(t, e, n, r) {
            n = n || {},
            t.totalLength || Y(t),
            (e < 0 || e > 1) && (e = x(e));
            var i, o, s, a, u, l, c, f = 0, h = t[0];
            if (e)
                if (1 === e)
                    c = 1,
                    l = (h = t[f = t.length - 1]).length - 8;
                else {
                    if (t.length > 1) {
                        for (s = t.totalLength * e,
                        u = l = 0; (u += t[l++].totalLength) < s; )
                            f = l;
                        e = (s - (a = u - (h = t[f]).totalLength)) / (u - a) || 0
                    }
                    i = h.samples,
                    o = h.resolution,
                    s = h.totalLength * e,
                    a = (l = h.lookup.length ? h.lookup[~~(s / h.minLength)] || 0 : E(i, s, e)) ? i[l - 1] : 0,
                    (u = i[l]) < s && (a = u,
                    u = i[++l]),
                    c = 1 / o * ((s - a) / (u - a) + l % o),
                    l = 6 * ~~(l / o),
                    r && 1 === c && (l + 6 < h.length ? (l += 6,
                    c = 0) : f + 1 < t.length && (l = c = 0,
                    h = t[++f]))
                }
            else
                c = l = f = 0,
                h = t[0];
            return n.t = c,
            n.i = l,
            n.path = t,
            n.segment = h,
            n.segIndex = f,
            n
        }
        function I(t, e, n, r) {
            var i, o, s, a, u, l, c, f, h, p = t[0], d = r || {};
            if ((e < 0 || e > 1) && (e = x(e)),
            p.lookup || Y(t),
            t.length > 1) {
                for (s = t.totalLength * e,
                u = l = 0; (u += t[l++].totalLength) < s; )
                    p = t[l];
                e = (s - (a = u - p.totalLength)) / (u - a) || 0
            }
            return i = p.samples,
            o = p.resolution,
            s = p.totalLength * e,
            a = (l = p.lookup.length ? p.lookup[e < 1 ? ~~(s / p.minLength) : p.lookup.length - 1] || 0 : E(i, s, e)) ? i[l - 1] : 0,
            (u = i[l]) < s && (a = u,
            u = i[++l]),
            h = 1 - (c = 1 / o * ((s - a) / (u - a) + l % o) || 0),
            f = p[l = 6 * ~~(l / o)],
            d.x = C((c * c * (p[l + 6] - f) + 3 * h * (c * (p[l + 4] - f) + h * (p[l + 2] - f))) * c + f),
            d.y = C((c * c * (p[l + 7] - (f = p[l + 1])) + 3 * h * (c * (p[l + 5] - f) + h * (p[l + 3] - f))) * c + f),
            n && (d.angle = p.totalLength ? L(p, l, c >= 1 ? 1 - 1e-9 : c || 1e-9) : p.angle || 0),
            d
        }
        function H(t, e, n, r, i, o, s) {
            for (var a, u, l, c, f, h = t.length; --h > -1; )
                for (u = (a = t[h]).length,
                l = 0; l < u; l += 2)
                    c = a[l],
                    f = a[l + 1],
                    a[l] = c * e + f * r + o,
                    a[l + 1] = c * n + f * i + s;
            return t._dirty = 1,
            t
        }
        function W(t, e, n, r, i, o, s, u, p) {
            if (t !== u || e !== p) {
                n = f(n),
                r = f(r);
                var d = i % 360 * a
                  , g = c(d)
                  , D = l(d)
                  , v = Math.PI
                  , m = 2 * v
                  , _ = (t - u) / 2
                  , y = (e - p) / 2
                  , x = g * _ + D * y
                  , C = -D * _ + g * y
                  , w = x * x
                  , b = C * C
                  , E = w / (n * n) + b / (r * r);
                E > 1 && (n = h(E) * n,
                r = h(E) * r);
                var F = n * n
                  , T = r * r
                  , M = (F * T - F * b - T * w) / (F * b + T * w);
                M < 0 && (M = 0);
                var A = (o === s ? -1 : 1) * h(M)
                  , k = A * (n * C / r)
                  , S = A * (-r * x / n)
                  , P = (t + u) / 2 + (g * k - D * S)
                  , O = (e + p) / 2 + (D * k + g * S)
                  , B = (x - k) / n
                  , L = (C - S) / r
                  , N = (-x - k) / n
                  , R = (-C - S) / r
                  , Y = B * B + L * L
                  , X = (L < 0 ? -1 : 1) * Math.acos(B / h(Y))
                  , z = (B * R - L * N < 0 ? -1 : 1) * Math.acos((B * N + L * R) / h(Y * (N * N + R * R)));
                isNaN(z) && (z = v),
                !s && z > 0 ? z -= m : s && z < 0 && (z += m),
                X %= m,
                z %= m;
                var I, H = Math.ceil(f(z) / (m / 4)), W = [], q = z / H, V = 4 / 3 * l(q / 2) / (1 + c(q / 2)), U = g * n, j = D * n, K = D * -r, G = g * r;
                for (I = 0; I < H; I++)
                    x = c(i = X + I * q),
                    C = l(i),
                    B = c(i += q),
                    L = l(i),
                    W.push(x - V * C, C + V * x, B + V * L, L - V * B, B, L);
                for (I = 0; I < W.length; I += 2)
                    x = W[I],
                    C = W[I + 1],
                    W[I] = x * U + C * K + P,
                    W[I + 1] = x * j + C * G + O;
                return W[I - 2] = u,
                W[I - 1] = p,
                W
            }
        }
        function q(t) {
            var e, n, i, s, a, u, l, c, h, p, d, g, D, v, m, _ = (t + "").replace(o, (function(t) {
                var e = +t;
                return e < 1e-4 && e > -1e-4 ? 0 : e
            }
            )).match(r) || [], y = [], x = 0, C = 0, w = 2 / 3, b = _.length, E = 0, F = "ERROR: malformed path: " + t, T = function(t, e, n, r) {
                p = (n - t) / 3,
                d = (r - e) / 3,
                l.push(t + p, e + d, n - p, r - d, n, r)
            };
            if (!t || !isNaN(_[0]) || isNaN(_[1]))
                return console.log(F),
                y;
            for (e = 0; e < b; e++)
                if (D = a,
                isNaN(_[e]) ? u = (a = _[e].toUpperCase()) !== _[e] : e--,
                i = +_[e + 1],
                s = +_[e + 2],
                u && (i += x,
                s += C),
                e || (c = i,
                h = s),
                "M" === a)
                    l && (l.length < 8 ? y.length -= 1 : E += l.length),
                    x = c = i,
                    C = h = s,
                    l = [i, s],
                    y.push(l),
                    e += 2,
                    a = "L";
                else if ("C" === a)
                    l || (l = [0, 0]),
                    u || (x = C = 0),
                    l.push(i, s, x + 1 * _[e + 3], C + 1 * _[e + 4], x += 1 * _[e + 5], C += 1 * _[e + 6]),
                    e += 6;
                else if ("S" === a)
                    p = x,
                    d = C,
                    "C" !== D && "S" !== D || (p += x - l[l.length - 4],
                    d += C - l[l.length - 3]),
                    u || (x = C = 0),
                    l.push(p, d, i, s, x += 1 * _[e + 3], C += 1 * _[e + 4]),
                    e += 4;
                else if ("Q" === a)
                    p = x + (i - x) * w,
                    d = C + (s - C) * w,
                    u || (x = C = 0),
                    x += 1 * _[e + 3],
                    C += 1 * _[e + 4],
                    l.push(p, d, x + (i - x) * w, C + (s - C) * w, x, C),
                    e += 4;
                else if ("T" === a)
                    p = x - l[l.length - 4],
                    d = C - l[l.length - 3],
                    l.push(x + p, C + d, i + (x + 1.5 * p - i) * w, s + (C + 1.5 * d - s) * w, x = i, C = s),
                    e += 2;
                else if ("H" === a)
                    T(x, C, x = i, C),
                    e += 1;
                else if ("V" === a)
                    T(x, C, x, C = i + (u ? C - x : 0)),
                    e += 1;
                else if ("L" === a || "Z" === a)
                    "Z" === a && (i = c,
                    s = h,
                    l.closed = !0),
                    ("L" === a || f(x - i) > .5 || f(C - s) > .5) && (T(x, C, i, s),
                    "L" === a && (e += 2)),
                    x = i,
                    C = s;
                else if ("A" === a) {
                    if (v = _[e + 4],
                    m = _[e + 5],
                    p = _[e + 6],
                    d = _[e + 7],
                    n = 7,
                    v.length > 1 && (v.length < 3 ? (d = p,
                    p = m,
                    n--) : (d = m,
                    p = v.substr(2),
                    n -= 2),
                    m = v.charAt(1),
                    v = v.charAt(0)),
                    g = W(x, C, +_[e + 1], +_[e + 2], +_[e + 3], +v, +m, (u ? x : 0) + 1 * p, (u ? C : 0) + 1 * d),
                    e += n,
                    g)
                        for (n = 0; n < g.length; n++)
                            l.push(g[n]);
                    x = l[l.length - 2],
                    C = l[l.length - 1]
                } else
                    console.log(F);
            return (e = l.length) < 6 ? (y.pop(),
            e = 0) : l[0] === l[e - 2] && l[1] === l[e - 1] && (l.closed = !0),
            y.totalPoints = E + e,
            y
        }
        function V(t, e) {
            void 0 === e && (e = 1);
            for (var n = t[0], r = 0, i = [n, r], o = 2; o < t.length; o += 2)
                i.push(n, r, t[o], r = (t[o] - n) * e / 2, n = t[o], -r);
            return i
        }
        function U(t, e) {
            f(t[0] - t[2]) < 1e-4 && f(t[1] - t[3]) < 1e-4 && (t = t.slice(2));
            var n, r, i, o, s, a, u, l, c, p, d, g, D, v, m = t.length - 2, _ = +t[0], y = +t[1], x = +t[2], w = +t[3], b = [_, y, _, y], E = x - _, F = w - y, T = Math.abs(t[m] - _) < .001 && Math.abs(t[m + 1] - y) < .001;
            for (T && (t.push(x, w),
            x = _,
            w = y,
            _ = t[m - 2],
            y = t[m - 1],
            t.unshift(_, y),
            m += 4),
            e = e || 0 === e ? +e : 1,
            i = 2; i < m; i += 2)
                n = _,
                r = y,
                _ = x,
                y = w,
                x = +t[i + 2],
                w = +t[i + 3],
                _ === x && y === w || (o = E,
                s = F,
                E = x - _,
                F = w - y,
                l = ((a = h(o * o + s * s)) + (u = h(E * E + F * F))) * e * .25 / h(Math.pow(E / u + o / a, 2) + Math.pow(F / u + s / a, 2)),
                d = _ - ((c = _ - (_ - n) * (a ? l / a : 0)) + (((p = _ + (x - _) * (u ? l / u : 0)) - c) * (3 * a / (a + u) + .5) / 4 || 0)),
                v = y - ((g = y - (y - r) * (a ? l / a : 0)) + (((D = y + (w - y) * (u ? l / u : 0)) - g) * (3 * a / (a + u) + .5) / 4 || 0)),
                _ === n && y === r || b.push(C(c + d), C(g + v), C(_), C(y), C(p + d), C(D + v)));
            return _ !== x || y !== w || b.length < 4 ? b.push(C(x), C(w), C(x), C(w)) : b.length -= 2,
            2 === b.length ? b.push(_, y, _, y, _, y) : T && (b.splice(0, 6),
            b.length = b.length - 6),
            b
        }
        function j(t) {
            D(t[0]) && (t = [t]);
            var e, n, r, i, o = "", s = t.length;
            for (n = 0; n < s; n++) {
                for (i = t[n],
                o += "M" + C(i[0]) + "," + C(i[1]) + " C",
                e = i.length,
                r = 2; r < e; r++)
                    o += C(i[r++]) + "," + C(i[r++]) + " " + C(i[r++]) + "," + C(i[r++]) + " " + C(i[r++]) + "," + C(i[r]) + " ";
                i.closed && (o += "z")
            }
            return o
        }
    }
}]);
