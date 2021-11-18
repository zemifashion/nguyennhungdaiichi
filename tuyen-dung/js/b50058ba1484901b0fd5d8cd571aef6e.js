var ms_grabbing_curosr = 'https://dai-ichi.vn/wp-content/plugins/master-slider/public/assets/css/common/grabbing.cur',
    ms_grab_curosr = 'https://dai-ichi.vn/wp-content/plugins/master-slider/public/assets/css/common/grab.cur';
(function ($) {
    "use strict";
    $(function () {
        var masterslider_270a = new MasterSlider();
        masterslider_270a.control('arrows', {autohide: !1, overVideo: !0});
        masterslider_270a.control('bullets', {autohide: !0, overVideo: !0, dir: 'h', align: 'bottom', margin: 10});
        masterslider_270a.control('circletimer', {
            autohide: !1,
            overVideo: !0,
            color: '#434343',
            radius: 10,
            stroke: 3
        });
        masterslider_270a.control('timebar', {
            autohide: !1,
            overVideo: !0,
            align: 'bottom',
            color: '#FFFFFF',
            width: 4
        });
        masterslider_270a.setup("MS61957b0da270a", {
            width: 800,
            height: 300,
            minHeight: 0,
            space: 0,
            start: 1,
            grabCursor: !0,
            swipe: !0,
            mouse: !0,
            layout: "boxed",
            wheel: !1,
            autoplay: !0,
            instantStartLayers: !1,
            loop: !0,
            shuffle: !1,
            preload: 0,
            heightLimit: !0,
            autoHeight: !1,
            smoothHeight: !0,
            endPause: !1,
            overPause: !0,
            fillMode: "fill",
            centerControls: !0,
            startOnAppear: !1,
            layersMode: "center",
            hideLayers: !1,
            fullscreenMargin: 0,
            speed: 20,
            dir: "h",
            parallaxMode: 'swipe',
            view: "basic"
        });
        window.masterslider_instances = window.masterslider_instances || [];
        window.masterslider_instances.push(masterslider_270a)
    })
})(jQuery);
!function r(c, a, f) {
    function o(n, t) {
        if (!a[n]) {
            if (!c[n]) {
                var e = "function" == typeof require && require;
                if (!t && e) return e(n, !0);
                if (s) return s(n, !0);
                var i = new Error("Cannot find module '" + n + "'");
                throw i.code = "MODULE_NOT_FOUND", i
            }
            var u = a[n] = {exports: {}};
            c[n][0].call(u.exports, function (t) {
                return o(c[n][1][t] || t)
            }, u, u.exports, r, c, a, f)
        }
        return a[n].exports
    }

    for (var s = "function" == typeof require && require, t = 0; t < f.length; t++) o(f[t]);
    return o
}({
    1: [function (t, n, r) {
        "use strict";
        t(2);
        var e = function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {default: t}
        }(t(15));
        e.default._babelPolyfill && "undefined" != typeof console && console.warn && console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning."), e.default._babelPolyfill = !0
    }, {15: 15, 2: 2}],
    2: [function (t, n, r) {
        "use strict";
        t(3), t(5), t(4), t(11), t(10), t(13), t(12), t(14), t(7), t(8), t(6), t(9), t(306), t(307)
    }, {10: 10, 11: 11, 12: 12, 13: 13, 14: 14, 3: 3, 306: 306, 307: 307, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9}],
    3: [function (t, n, r) {
        t(278), t(214), t(216), t(215), t(218), t(220), t(225), t(219), t(217), t(227), t(226), t(222), t(223), t(221), t(213), t(224), t(228), t(229), t(180), t(182), t(181), t(231), t(230), t(201), t(211), t(212), t(202), t(203), t(204), t(205), t(206), t(207), t(208), t(209), t(210), t(184), t(185), t(186), t(187), t(188), t(189), t(190), t(191), t(192), t(193), t(194), t(195), t(196), t(197), t(198), t(199), t(200), t(265), t(270), t(277), t(268), t(260), t(261), t(266), t(271), t(273), t(256), t(257), t(258), t(259), t(262), t(263), t(264), t(267), t(269), t(272), t(274), t(275), t(276), t(175), t(177), t(176), t(179), t(178), t(163), t(161), t(168), t(165), t(171), t(173), t(160), t(167), t(157), t(172), t(155), t(170), t(169), t(162), t(166), t(154), t(156), t(159), t(158), t(174), t(164), t(247),t(248),t(254),t(249),t(250),t(251),t(252),t(253),t(232),t(183),t(255),t(290),t(291),t(279),t(280),t(285),t(288),t(289),t(283),t(286),t(284),t(287),t(281),t(282),t(233),t(234),t(235),t(236),t(237),t(240),t(238),t(239),t(241),t(242),t(243),t(244),t(246),t(245),n.exports = t(52)
    }, {
        154: 154,
        155: 155,
        156: 156,
        157: 157,
        158: 158,
        159: 159,
        160: 160,
        161: 161,
        162: 162,
        163: 163,
        164: 164,
        165: 165,
        166: 166,
        167: 167,
        168: 168,
        169: 169,
        170: 170,
        171: 171,
        172: 172,
        173: 173,
        174: 174,
        175: 175,
        176: 176,
        177: 177,
        178: 178,
        179: 179,
        180: 180,
        181: 181,
        182: 182,
        183: 183,
        184: 184,
        185: 185,
        186: 186,
        187: 187,
        188: 188,
        189: 189,
        190: 190,
        191: 191,
        192: 192,
        193: 193,
        194: 194,
        195: 195,
        196: 196,
        197: 197,
        198: 198,
        199: 199,
        200: 200,
        201: 201,
        202: 202,
        203: 203,
        204: 204,
        205: 205,
        206: 206,
        207: 207,
        208: 208,
        209: 209,
        210: 210,
        211: 211,
        212: 212,
        213: 213,
        214: 214,
        215: 215,
        216: 216,
        217: 217,
        218: 218,
        219: 219,
        220: 220,
        221: 221,
        222: 222,
        223: 223,
        224: 224,
        225: 225,
        226: 226,
        227: 227,
        228: 228,
        229: 229,
        230: 230,
        231: 231,
        232: 232,
        233: 233,
        234: 234,
        235: 235,
        236: 236,
        237: 237,
        238: 238,
        239: 239,
        240: 240,
        241: 241,
        242: 242,
        243: 243,
        244: 244,
        245: 245,
        246: 246,
        247: 247,
        248: 248,
        249: 249,
        250: 250,
        251: 251,
        252: 252,
        253: 253,
        254: 254,
        255: 255,
        256: 256,
        257: 257,
        258: 258,
        259: 259,
        260: 260,
        261: 261,
        262: 262,
        263: 263,
        264: 264,
        265: 265,
        266: 266,
        267: 267,
        268: 268,
        269: 269,
        270: 270,
        271: 271,
        272: 272,
        273: 273,
        274: 274,
        275: 275,
        276: 276,
        277: 277,
        278: 278,
        279: 279,
        280: 280,
        281: 281,
        282: 282,
        283: 283,
        284: 284,
        285: 285,
        286: 286,
        287: 287,
        288: 288,
        289: 289,
        290: 290,
        291: 291,
        52: 52
    }],
    4: [function (t, n, r) {
        t(292), n.exports = t(52).Array.flatMap
    }, {292: 292, 52: 52}],
    5: [function (t, n, r) {
        t(293), n.exports = t(52).Array.includes
    }, {293: 293, 52: 52}],
    6: [function (t, n, r) {
        t(294), n.exports = t(52).Object.entries
    }, {294: 294, 52: 52}],
    7: [function (t, n, r) {
        t(295), n.exports = t(52).Object.getOwnPropertyDescriptors
    }, {295: 295, 52: 52}],
    8: [function (t, n, r) {
        t(296), n.exports = t(52).Object.values
    }, {296: 296, 52: 52}],
    9: [function (t, n, r) {
        "use strict";
        t(232), t(297), n.exports = t(52).Promise.finally
    }, {232: 232, 297: 297, 52: 52}],
    10: [function (t, n, r) {
        t(298), n.exports = t(52).String.padEnd
    }, {298: 298, 52: 52}],
    11: [function (t, n, r) {
        t(299), n.exports = t(52).String.padStart
    }, {299: 299, 52: 52}],
    12: [function (t, n, r) {
        t(301), n.exports = t(52).String.trimRight
    }, {301: 301, 52: 52}],
    13: [function (t, n, r) {
        t(300), n.exports = t(52).String.trimLeft
    }, {300: 300, 52: 52}],
    14: [function (t, n, r) {
        t(302), n.exports = t(151).f("asyncIterator")
    }, {151: 151, 302: 302}],
    15: [function (t, n, r) {
        t(32), n.exports = t(18).global
    }, {18: 18, 32: 32}],
    16: [function (t, n, r) {
        n.exports = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, {}],
    17: [function (t, n, r) {
        var e = t(28);
        n.exports = function (t) {
            if (!e(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, {28: 28}],
    18: [function (t, n, r) {
        var e = n.exports = {version: "2.6.11"};
        "number" == typeof __e && (__e = e)
    }, {}],
    19: [function (t, n, r) {
        var o = t(16);
        n.exports = function (e, i, t) {
            if (o(e), void 0 === i) return e;
            switch (t) {
                case 1:
                    return function (t) {
                        return e.call(i, t)
                    };
                case 2:
                    return function (t, n) {
                        return e.call(i, t, n)
                    };
                case 3:
                    return function (t, n, r) {
                        return e.call(i, t, n, r)
                    }
            }
            return function () {
                return e.apply(i, arguments)
            }
        }
    }, {16: 16}],
    20: [function (t, n, r) {
        n.exports = !t(23)(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, {23: 23}],
    21: [function (t, n, r) {
        var e = t(28), i = t(24).document, o = e(i) && e(i.createElement);
        n.exports = function (t) {
            return o ? i.createElement(t) : {}
        }
    }, {24: 24, 28: 28}],
    22: [function (t, n, r) {
        var g = t(24), y = t(18), d = t(19), x = t(26), m = t(25), S = "prototype", b = function (t, n, r) {
            var e, i, o, u = t & b.F, c = t & b.G, a = t & b.S, f = t & b.P, s = t & b.B, l = t & b.W,
                h = c ? y : y[n] || (y[n] = {}), p = h[S], v = c ? g : a ? g[n] : (g[n] || {})[S];
            for (e in c && (r = n), r) (i = !u && v && void 0 !== v[e]) && m(h, e) || (o = i ? v[e] : r[e], h[e] = c && "function" != typeof v[e] ? r[e] : s && i ? d(o, g) : l && v[e] == o ? function (e) {
                function qb(t, n, r) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, n)
                        }
                        return new e(t, n, r)
                    }
                    return e.apply(this, arguments)
                }

                return qb[S] = e[S], qb
            }(o) : f && "function" == typeof o ? d(Function.call, o) : o, f && ((h.virtual || (h.virtual = {}))[e] = o, t & b.R && p && !p[e] && x(p, e, o)))
        };
        b.F = 1, b.G = 2, b.S = 4, b.P = 8, b.B = 16, b.W = 32, b.U = 64, b.R = 128, n.exports = b
    }, {18: 18, 19: 19, 24: 24, 25: 25, 26: 26}],
    23: [function (t, n, r) {
        n.exports = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, {}],
    24: [function (t, n, r) {
        var e = n.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = e)
    }, {}],
    25: [function (t, n, r) {
        var e = {}.hasOwnProperty;
        n.exports = function (t, n) {
            return e.call(t, n)
        }
    }, {}],
    26: [function (t, n, r) {
        var e = t(29), i = t(30);
        n.exports = t(20) ? function (t, n, r) {
            return e.f(t, n, i(1, r))
        } : function (t, n, r) {
            return t[n] = r, t
        }
    }, {20: 20, 29: 29, 30: 30}],
    27: [function (t, n, r) {
        n.exports = !t(20) && !t(23)(function () {
            return 7 != Object.defineProperty(t(21)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, {20: 20, 21: 21, 23: 23}],
    28: [function (t, n, r) {
        n.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, {}],
    29: [function (t, n, r) {
        var e = t(17), i = t(27), o = t(31), u = Object.defineProperty;
        r.f = t(20) ? Object.defineProperty : function defineProperty(t, n, r) {
            if (e(t), n = o(n, !0), e(r), i) try {
                return u(t, n, r)
            } catch (t) {
            }
            if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
            return "value" in r && (t[n] = r.value), t
        }
    }, {17: 17, 20: 20, 27: 27, 31: 31}],
    30: [function (t, n, r) {
        n.exports = function (t, n) {
            return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n}
        }
    }, {}],
    31: [function (t, n, r) {
        var i = t(28);
        n.exports = function (t, n) {
            if (!i(t)) return t;
            var r, e;
            if (n && "function" == typeof (r = t.toString) && !i(e = r.call(t))) return e;
            if ("function" == typeof (r = t.valueOf) && !i(e = r.call(t))) return e;
            if (!n && "function" == typeof (r = t.toString) && !i(e = r.call(t))) return e;
            throw TypeError("Can't convert object to primitive value")
        }
    }, {28: 28}],
    32: [function (t, n, r) {
        var e = t(22);
        e(e.G, {global: t(24)})
    }, {22: 22, 24: 24}],
    33: [function (t, n, r) {
        arguments[4][16][0].apply(r, arguments)
    }, {16: 16}],
    34: [function (t, n, r) {
        var e = t(48);
        n.exports = function (t, n) {
            if ("number" != typeof t && "Number" != e(t)) throw TypeError(n);
            return +t
        }
    }, {48: 48}],
    35: [function (t, n, r) {
        var e = t(152)("unscopables"), i = Array.prototype;
        null == i[e] && t(72)(i, e, {}), n.exports = function (t) {
            i[e][t] = !0
        }
    }, {152: 152, 72: 72}],
    36: [function (t, n, r) {
        "use strict";
        var e = t(129)(!0);
        n.exports = function (t, n, r) {
            return n + (r ? e(t, n).length : 1)
        }
    }, {129: 129}],
    37: [function (t, n, r) {
        n.exports = function (t, n, r, e) {
            if (!(t instanceof n) || void 0 !== e && e in t) throw TypeError(r + ": incorrect invocation!");
            return t
        }
    }, {}],
    38: [function (t, n, r) {
        arguments[4][17][0].apply(r, arguments)
    }, {17: 17, 81: 81}],
    39: [function (t, n, r) {
        "use strict";
        var f = t(142), s = t(137), l = t(141);
        n.exports = [].copyWithin || function copyWithin(t, n) {
            var r = f(this), e = l(r.length), i = s(t, e), o = s(n, e),
                u = 2 < arguments.length ? arguments[2] : void 0, c = Math.min((void 0 === u ? e : s(u, e)) - o, e - i),
                a = 1;
            for (o < i && i < o + c && (a = -1, o += c - 1, i += c - 1); 0 < c--;) o in r ? r[i] = r[o] : delete r[i], i += a, o += a;
            return r
        }
    }, {137: 137, 141: 141, 142: 142}],
    40: [function (t, n, r) {
        "use strict";
        var c = t(142), a = t(137), f = t(141);
        n.exports = function fill(t) {
            for (var n = c(this), r = f(n.length), e = arguments.length, i = a(1 < e ? arguments[1] : void 0, r), o = 2 < e ? arguments[2] : void 0, u = void 0 === o ? r : a(o, r); i < u;) n[i++] = t;
            return n
        }
    }, {137: 137, 141: 141, 142: 142}],
    41: [function (t, n, r) {
        var a = t(140), f = t(141), s = t(137);
        n.exports = function (c) {
            return function (t, n, r) {
                var e, i = a(t), o = f(i.length), u = s(r, o);
                if (c && n != n) {
                    for (; u < o;) if ((e = i[u++]) != e) return !0
                } else for (; u < o; u++) if ((c || u in i) && i[u] === n) return c || u || 0;
                return !c && -1
            }
        }
    }, {137: 137, 140: 140, 141: 141}],
    42: [function (t, n, r) {
        var m = t(54), S = t(77), b = t(142), w = t(141), e = t(45);
        n.exports = function (l, t) {
            var h = 1 == l, p = 2 == l, v = 3 == l, g = 4 == l, y = 6 == l, d = 5 == l || y, x = t || e;
            return function (t, n, r) {
                for (var e, i, o = b(t), u = S(o), c = m(n, r, 3), a = w(u.length), f = 0, s = h ? x(t, a) : p ? x(t, 0) : void 0; f < a; f++) if ((d || f in u) && (i = c(e = u[f], f, o), l)) if (h) s[f] = i; else if (i) switch (l) {
                    case 3:
                        return !0;
                    case 5:
                        return e;
                    case 6:
                        return f;
                    case 2:
                        s.push(e)
                } else if (g) return !1;
                return y ? -1 : v || g ? g : s
            }
        }
    }, {141: 141, 142: 142, 45: 45, 54: 54, 77: 77}],
    43: [function (t, n, r) {
        var s = t(33), l = t(142), h = t(77), p = t(141);
        n.exports = function (t, n, r, e, i) {
            s(n);
            var o = l(t), u = h(o), c = p(o.length), a = i ? c - 1 : 0, f = i ? -1 : 1;
            if (r < 2) for (; ;) {
                if (a in u) {
                    e = u[a], a += f;
                    break
                }
                if (a += f, i ? a < 0 : c <= a) throw TypeError("Reduce of empty array with no initial value")
            }
            for (; i ? 0 <= a : a < c; a += f) a in u && (e = n(e, u[a], a, o));
            return e
        }
    }, {141: 141, 142: 142, 33: 33, 77: 77}],
    44: [function (t, n, r) {
        var e = t(81), i = t(79), o = t(152)("species");
        n.exports = function (t) {
            var n;
            return i(t) && ("function" != typeof (n = t.constructor) || n !== Array && !i(n.prototype) || (n = void 0), e(n) && null === (n = n[o]) && (n = void 0)), void 0 === n ? Array : n
        }
    }, {152: 152, 79: 79, 81: 81}],
    45: [function (t, n, r) {
        var e = t(44);
        n.exports = function (t, n) {
            return new (e(t))(n)
        }
    }, {44: 44}],
    46: [function (t, n, r) {
        "use strict";
        var o = t(33), u = t(81), c = t(76), a = [].slice, f = {};
        n.exports = Function.bind || function bind(n) {
            var r = o(this), e = a.call(arguments, 1), i = function () {
                var t = e.concat(a.call(arguments));
                return this instanceof i ? function (t, n, r) {
                    if (!(n in f)) {
                        for (var e = [], i = 0; i < n; i++) e[i] = "a[" + i + "]";
                        f[n] = Function("F,a", "return new F(" + e.join(",") + ")")
                    }
                    return f[n](t, r)
                }(r, t.length, t) : c(r, t, n)
            };
            return u(r.prototype) && (i.prototype = r.prototype), i
        }
    }, {33: 33, 76: 76, 81: 81}],
    47: [function (t, n, r) {
        var i = t(48), o = t(152)("toStringTag"), u = "Arguments" == i(function () {
            return arguments
        }());
        n.exports = function (t) {
            var n, r, e;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function (t, n) {
                try {
                    return t[n]
                } catch (t) {
                }
            }(n = Object(t), o)) ? r : u ? i(n) : "Object" == (e = i(n)) && "function" == typeof n.callee ? "Arguments" : e
        }
    }, {152: 152, 48: 48}],
    48: [function (t, n, r) {
        var e = {}.toString;
        n.exports = function (t) {
            return e.call(t).slice(8, -1)
        }
    }, {}],
    49: [function (t, n, r) {
        "use strict";

        function ag(t, n) {
            var r, e = p(n);
            if ("F" !== e) return t._i[e];
            for (r = t._f; r; r = r.n) if (r.k == n) return r
        }

        var u = t(99).f, c = t(98), a = t(117), f = t(54), s = t(37), l = t(68), e = t(85), i = t(87), o = t(123),
            h = t(58), p = t(94).fastKey, v = t(149), g = h ? "_s" : "size";
        n.exports = {
            getConstructor: function (t, o, r, e) {
                var i = t(function (t, n) {
                    s(t, i, o, "_i"), t._t = o, t._i = c(null), t._f = void 0, t._l = void 0, t[g] = 0, null != n && l(n, r, t[e], t)
                });
                return a(i.prototype, {
                    clear: function clear() {
                        for (var t = v(this, o), n = t._i, r = t._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete n[r.i];
                        t._f = t._l = void 0, t[g] = 0
                    }, delete: function (t) {
                        var n = v(this, o), r = ag(n, t);
                        if (r) {
                            var e = r.n, i = r.p;
                            delete n._i[r.i], r.r = !0, i && (i.n = e), e && (e.p = i), n._f == r && (n._f = e), n._l == r && (n._l = i), n[g]--
                        }
                        return !!r
                    }, forEach: function forEach(t) {
                        v(this, o);
                        for (var n, r = f(t, 1 < arguments.length ? arguments[1] : void 0, 3); n = n ? n.n : this._f;) for (r(n.v, n.k, this); n && n.r;) n = n.p
                    }, has: function has(t) {
                        return !!ag(v(this, o), t)
                    }
                }), h && u(i.prototype, "size", {
                    get: function () {
                        return v(this, o)[g]
                    }
                }), i
            }, def: function (t, n, r) {
                var e, i, o = ag(t, n);
                return o ? o.v = r : (t._l = o = {
                    i: i = p(n, !0),
                    k: n,
                    v: r,
                    p: e = t._l,
                    n: void 0,
                    r: !1
                }, t._f || (t._f = o), e && (e.n = o), t[g]++, "F" !== i && (t._i[i] = o)), t
            }, getEntry: ag, setStrong: function (t, r, n) {
                e(t, r, function (t, n) {
                    this._t = v(t, r), this._k = n, this._l = void 0
                }, function () {
                    for (var t = this, n = t._k, r = t._l; r && r.r;) r = r.p;
                    return t._t && (t._l = r = r ? r.n : t._t._f) ? i(0, "keys" == n ? r.k : "values" == n ? r.v : [r.k, r.v]) : (t._t = void 0, i(1))
                }, n ? "entries" : "values", !n, !0), o(r)
            }
        }
    }, {117: 117, 123: 123, 149: 149, 37: 37, 54: 54, 58: 58, 68: 68, 85: 85, 87: 87, 94: 94, 98: 98, 99: 99}],
    50: [function (t, n, r) {
        "use strict";

        function _g(t) {
            return t._l || (t._l = new g)
        }

        function bh(t, n) {
            return o(t.a, function (t) {
                return t[0] === n
            })
        }

        var u = t(117), c = t(94).getWeak, i = t(38), a = t(81), f = t(37), s = t(68), e = t(42), l = t(71), h = t(149),
            o = e(5), p = e(6), v = 0, g = function () {
                this.a = []
            };
        g.prototype = {
            get: function (t) {
                var n = bh(this, t);
                if (n) return n[1]
            }, has: function (t) {
                return !!bh(this, t)
            }, set: function (t, n) {
                var r = bh(this, t);
                r ? r[1] = n : this.a.push([t, n])
            }, delete: function (n) {
                var t = p(this.a, function (t) {
                    return t[0] === n
                });
                return ~t && this.a.splice(t, 1), !!~t
            }
        }, n.exports = {
            getConstructor: function (t, r, e, i) {
                var o = t(function (t, n) {
                    f(t, o, r, "_i"), t._t = r, t._i = v++, t._l = void 0, null != n && s(n, e, t[i], t)
                });
                return u(o.prototype, {
                    delete: function (t) {
                        if (!a(t)) return !1;
                        var n = c(t);
                        return !0 === n ? _g(h(this, r)).delete(t) : n && l(n, this._i) && delete n[this._i]
                    }, has: function has(t) {
                        if (!a(t)) return !1;
                        var n = c(t);
                        return !0 === n ? _g(h(this, r)).has(t) : n && l(n, this._i)
                    }
                }), o
            }, def: function (t, n, r) {
                var e = c(i(n), !0);
                return !0 === e ? _g(t).set(n, r) : e[t._i] = r, t
            }, ufstore: _g
        }
    }, {117: 117, 149: 149, 37: 37, 38: 38, 42: 42, 68: 68, 71: 71, 81: 81, 94: 94}],
    51: [function (t, n, r) {
        "use strict";
        var y = t(70), d = t(62), x = t(118), m = t(117), S = t(94), b = t(68), w = t(37), _ = t(81), E = t(64),
            O = t(86), F = t(124), I = t(75);
        n.exports = function (e, t, n, r, i, o) {
            function ci(t) {
                var r = f[t];
                x(f, t, "delete" == t ? function (t) {
                    return !(o && !_(t)) && r.call(this, 0 === t ? 0 : t)
                } : "has" == t ? function has(t) {
                    return !(o && !_(t)) && r.call(this, 0 === t ? 0 : t)
                } : "get" == t ? function get(t) {
                    return o && !_(t) ? void 0 : r.call(this, 0 === t ? 0 : t)
                } : "add" == t ? function add(t) {
                    return r.call(this, 0 === t ? 0 : t), this
                } : function set(t, n) {
                    return r.call(this, 0 === t ? 0 : t, n), this
                })
            }

            var u = y[e], c = u, a = i ? "set" : "add", f = c && c.prototype, s = {};
            if ("function" == typeof c && (o || f.forEach && !E(function () {
                (new c).entries().next()
            }))) {
                var l = new c, h = l[a](o ? {} : -0, 1) != l, p = E(function () {
                    l.has(1)
                }), v = O(function (t) {
                    new c(t)
                }), g = !o && E(function () {
                    for (var t = new c, n = 5; n--;) t[a](n, n);
                    return !t.has(-0)
                });
                v || (((c = t(function (t, n) {
                    w(t, c, e);
                    var r = I(new u, t, c);
                    return null != n && b(n, i, r[a], r), r
                })).prototype = f).constructor = c), (p || g) && (ci("delete"), ci("has"), i && ci("get")), (g || h) && ci(a), o && f.clear && delete f.clear
            } else c = r.getConstructor(t, e, i, a), m(c.prototype, n), S.NEED = !0;
            return F(c, e), s[e] = c, d(d.G + d.W + d.F * (c != u), s), o || r.setStrong(c, e, i), c
        }
    }, {117: 117, 118: 118, 124: 124, 37: 37, 62: 62, 64: 64, 68: 68, 70: 70, 75: 75, 81: 81, 86: 86, 94: 94}],
    52: [function (t, n, r) {
        arguments[4][18][0].apply(r, arguments)
    }, {18: 18}],
    53: [function (t, n, r) {
        "use strict";
        var e = t(99), i = t(116);
        n.exports = function (t, n, r) {
            n in t ? e.f(t, n, i(0, r)) : t[n] = r
        }
    }, {116: 116, 99: 99}],
    54: [function (t, n, r) {
        arguments[4][19][0].apply(r, arguments)
    }, {19: 19, 33: 33}],
    55: [function (t, n, r) {
        "use strict";

        function Qi(t) {
            return 9 < t ? t : "0" + t
        }

        var e = t(64), i = Date.prototype.getTime, o = Date.prototype.toISOString;
        n.exports = e(function () {
            return "0385-07-25T07:06:39.999Z" != o.call(new Date(-5e13 - 1))
        }) || !e(function () {
            o.call(new Date(NaN))
        }) ? function toISOString() {
            if (!isFinite(i.call(this))) throw RangeError("Invalid time value");
            var t = this, n = t.getUTCFullYear(), r = t.getUTCMilliseconds(), e = n < 0 ? "-" : 9999 < n ? "+" : "";
            return e + ("00000" + Math.abs(n)).slice(e ? -6 : -4) + "-" + Qi(t.getUTCMonth() + 1) + "-" + Qi(t.getUTCDate()) + "T" + Qi(t.getUTCHours()) + ":" + Qi(t.getUTCMinutes()) + ":" + Qi(t.getUTCSeconds()) + "." + (99 < r ? r : "0" + Qi(r)) + "Z"
        } : o
    }, {64: 64}],
    56: [function (t, n, r) {
        "use strict";
        var e = t(38), i = t(143);
        n.exports = function (t) {
            if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint");
            return i(e(this), "number" != t)
        }
    }, {143: 143, 38: 38}],
    57: [function (t, n, r) {
        n.exports = function (t) {
            if (null == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, {}],
    58: [function (t, n, r) {
        arguments[4][20][0].apply(r, arguments)
    }, {20: 20, 64: 64}],
    59: [function (t, n, r) {
        arguments[4][21][0].apply(r, arguments)
    }, {21: 21, 70: 70, 81: 81}],
    60: [function (t, n, r) {
        n.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, {}],
    61: [function (t, n, r) {
        var c = t(107), a = t(104), f = t(108);
        n.exports = function (t) {
            var n = c(t), r = a.f;
            if (r) for (var e, i = r(t), o = f.f, u = 0; i.length > u;) o.call(t, e = i[u++]) && n.push(e);
            return n
        }
    }, {104: 104, 107: 107, 108: 108}],
    62: [function (t, n, r) {
        var g = t(70), y = t(52), d = t(72), x = t(118), m = t(54), S = "prototype", b = function (t, n, r) {
            var e, i, o, u, c = t & b.F, a = t & b.G, f = t & b.S, s = t & b.P, l = t & b.B,
                h = a ? g : f ? g[n] || (g[n] = {}) : (g[n] || {})[S], p = a ? y : y[n] || (y[n] = {}),
                v = p[S] || (p[S] = {});
            for (e in a && (r = n), r) o = ((i = !c && h && void 0 !== h[e]) ? h : r)[e], u = l && i ? m(o, g) : s && "function" == typeof o ? m(Function.call, o) : o, h && x(h, e, o, t & b.U), p[e] != o && d(p, e, u), s && v[e] != o && (v[e] = o)
        };
        g.core = y, b.F = 1, b.G = 2, b.S = 4, b.P = 8, b.B = 16, b.W = 32, b.U = 64, b.R = 128, n.exports = b
    }, {118: 118, 52: 52, 54: 54, 70: 70, 72: 72}],
    63: [function (t, n, r) {
        var e = t(152)("match");
        n.exports = function (n) {
            var r = /./;
            try {
                "/./"[n](r)
            } catch (t) {
                try {
                    return r[e] = !1, !"/./"[n](r)
                } catch (t) {
                }
            }
            return !0
        }
    }, {152: 152}],
    64: [function (t, n, r) {
        arguments[4][23][0].apply(r, arguments)
    }, {23: 23}],
    65: [function (t, n, r) {
        "use strict";
        t(248);
        var s = t(118), l = t(72), h = t(64), p = t(57), v = t(152), g = t(120), y = v("species"), d = !h(function () {
            var t = /./;
            return t.exec = function () {
                var t = [];
                return t.groups = {a: "7"}, t
            }, "7" !== "".replace(t, "$<a>")
        }), x = function () {
            var t = /(?:)/, n = t.exec;
            t.exec = function () {
                return n.apply(this, arguments)
            };
            var r = "ab".split(t);
            return 2 === r.length && "a" === r[0] && "b" === r[1]
        }();
        n.exports = function (r, t, n) {
            var e = v(r), o = !h(function () {
                var t = {};
                return t[e] = function () {
                    return 7
                }, 7 != ""[r](t)
            }), i = o ? !h(function () {
                var t = !1, n = /a/;
                return n.exec = function () {
                    return t = !0, null
                }, "split" === r && (n.constructor = {}, n.constructor[y] = function () {
                    return n
                }), n[e](""), !t
            }) : void 0;
            if (!o || !i || "replace" === r && !d || "split" === r && !x) {
                var u = /./[e], c = n(p, e, ""[r], function maybeCallNative(t, n, r, e, i) {
                    return n.exec === g ? o && !i ? {done: !0, value: u.call(n, r, e)} : {
                        done: !0,
                        value: t.call(r, n, e)
                    } : {done: !1}
                }), a = c[0], f = c[1];
                s(String.prototype, r, a), l(RegExp.prototype, e, 2 == t ? function (t, n) {
                    return f.call(t, this, n)
                } : function (t) {
                    return f.call(t, this)
                })
            }
        }
    }, {118: 118, 120: 120, 152: 152, 248: 248, 57: 57, 64: 64, 72: 72}],
    66: [function (t, n, r) {
        "use strict";
        var e = t(38);
        n.exports = function () {
            var t = e(this), n = "";
            return t.global && (n += "g"), t.ignoreCase && (n += "i"), t.multiline && (n += "m"), t.unicode && (n += "u"), t.sticky && (n += "y"), n
        }
    }, {38: 38}],
    67: [function (t, n, r) {
        "use strict";
        var p = t(79), v = t(81), g = t(141), y = t(54), d = t(152)("isConcatSpreadable");
        n.exports = function flattenIntoArray(t, n, r, e, i, o, u, c) {
            for (var a, f, s = i, l = 0, h = !!u && y(u, c, 3); l < e;) {
                if (l in r) {
                    if (a = h ? h(r[l], l, n) : r[l], f = !1, v(a) && (f = void 0 !== (f = a[d]) ? !!f : p(a)), f && 0 < o) s = flattenIntoArray(t, n, a, g(a.length), s, o - 1) - 1; else {
                        if (9007199254740991 <= s) throw TypeError();
                        t[s] = a
                    }
                    s++
                }
                l++
            }
            return s
        }
    }, {141: 141, 152: 152, 54: 54, 79: 79, 81: 81}],
    68: [function (t, n, r) {
        var h = t(54), p = t(83), v = t(78), g = t(38), y = t(141), d = t(153), x = {}, m = {};
        (r = n.exports = function (t, n, r, e, i) {
            var o, u, c, a, f = i ? function () {
                return t
            } : d(t), s = h(r, e, n ? 2 : 1), l = 0;
            if ("function" != typeof f) throw TypeError(t + " is not iterable!");
            if (v(f)) {
                for (o = y(t.length); l < o; l++) if ((a = n ? s(g(u = t[l])[0], u[1]) : s(t[l])) === x || a === m) return a
            } else for (c = f.call(t); !(u = c.next()).done;) if ((a = p(c, s, u.value, n)) === x || a === m) return a
        }).BREAK = x, r.RETURN = m
    }, {141: 141, 153: 153, 38: 38, 54: 54, 78: 78, 83: 83}],
    69: [function (t, n, r) {
        n.exports = t(126)("native-function-to-string", Function.toString)
    }, {126: 126}],
    70: [function (t, n, r) {
        arguments[4][24][0].apply(r, arguments)
    }, {24: 24}],
    71: [function (t, n, r) {
        arguments[4][25][0].apply(r, arguments)
    }, {25: 25}],
    72: [function (t, n, r) {
        arguments[4][26][0].apply(r, arguments)
    }, {116: 116, 26: 26, 58: 58, 99: 99}],
    73: [function (t, n, r) {
        var e = t(70).document;
        n.exports = e && e.documentElement
    }, {70: 70}],
    74: [function (t, n, r) {
        arguments[4][27][0].apply(r, arguments)
    }, {27: 27, 58: 58, 59: 59, 64: 64}],
    75: [function (t, n, r) {
        var o = t(81), u = t(122).set;
        n.exports = function (t, n, r) {
            var e, i = n.constructor;
            return i !== r && "function" == typeof i && (e = i.prototype) !== r.prototype && o(e) && u && u(t, e), t
        }
    }, {122: 122, 81: 81}],
    76: [function (t, n, r) {
        n.exports = function (t, n, r) {
            var e = void 0 === r;
            switch (n.length) {
                case 0:
                    return e ? t() : t.call(r);
                case 1:
                    return e ? t(n[0]) : t.call(r, n[0]);
                case 2:
                    return e ? t(n[0], n[1]) : t.call(r, n[0], n[1]);
                case 3:
                    return e ? t(n[0], n[1], n[2]) : t.call(r, n[0], n[1], n[2]);
                case 4:
                    return e ? t(n[0], n[1], n[2], n[3]) : t.call(r, n[0], n[1], n[2], n[3])
            }
            return t.apply(r, n)
        }
    }, {}],
    77: [function (t, n, r) {
        var e = t(48);
        n.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
            return "String" == e(t) ? t.split("") : Object(t)
        }
    }, {48: 48}],
    78: [function (t, n, r) {
        var e = t(88), i = t(152)("iterator"), o = Array.prototype;
        n.exports = function (t) {
            return void 0 !== t && (e.Array === t || o[i] === t)
        }
    }, {152: 152, 88: 88}],
    79: [function (t, n, r) {
        var e = t(48);
        n.exports = Array.isArray || function isArray(t) {
            return "Array" == e(t)
        }
    }, {48: 48}],
    80: [function (t, n, r) {
        var e = t(81), i = Math.floor;
        n.exports = function isInteger(t) {
            return !e(t) && isFinite(t) && i(t) === t
        }
    }, {81: 81}],
    81: [function (t, n, r) {
        arguments[4][28][0].apply(r, arguments)
    }, {28: 28}],
    82: [function (t, n, r) {
        var e = t(81), i = t(48), o = t(152)("match");
        n.exports = function (t) {
            var n;
            return e(t) && (void 0 !== (n = t[o]) ? !!n : "RegExp" == i(t))
        }
    }, {152: 152, 48: 48, 81: 81}],
    83: [function (t, n, r) {
        var o = t(38);
        n.exports = function (n, t, r, e) {
            try {
                return e ? t(o(r)[0], r[1]) : t(r)
            } catch (t) {
                var i = n.return;
                throw void 0 !== i && o(i.call(n)), t
            }
        }
    }, {38: 38}],
    84: [function (t, n, r) {
        "use strict";
        var e = t(98), i = t(116), o = t(124), u = {};
        t(72)(u, t(152)("iterator"), function () {
            return this
        }), n.exports = function (t, n, r) {
            t.prototype = e(u, {next: i(1, r)}), o(t, n + " Iterator")
        }
    }, {116: 116, 124: 124, 152: 152, 72: 72, 98: 98}],
    85: [function (t, n, r) {
        "use strict";

        function Qn() {
            return this
        }

        var x = t(89), m = t(62), S = t(118), b = t(72), w = t(88), _ = t(84), E = t(124), O = t(105),
            F = t(152)("iterator"), I = !([].keys && "next" in [].keys()), P = "values";
        n.exports = function (t, n, r, e, i, o, u) {
            _(r, n, e);

            function Yn(t) {
                if (!I && t in p) return p[t];
                switch (t) {
                    case"keys":
                        return function keys() {
                            return new r(this, t)
                        };
                    case P:
                        return function values() {
                            return new r(this, t)
                        }
                }
                return function entries() {
                    return new r(this, t)
                }
            }

            var c, a, f, s = n + " Iterator", l = i == P, h = !1, p = t.prototype,
                v = p[F] || p["@@iterator"] || i && p[i], g = v || Yn(i), y = i ? l ? Yn("entries") : g : void 0,
                d = "Array" == n && p.entries || v;
            if (d && (f = O(d.call(new t))) !== Object.prototype && f.next && (E(f, s, !0), x || "function" == typeof f[F] || b(f, F, Qn)), l && v && v.name !== P && (h = !0, g = function values() {
                return v.call(this)
            }), x && !u || !I && !h && p[F] || b(p, F, g), w[n] = g, w[s] = Qn, i) if (c = {
                values: l ? g : Yn(P),
                keys: o ? g : Yn("keys"),
                entries: y
            }, u) for (a in c) a in p || S(p, a, c[a]); else m(m.P + m.F * (I || h), n, c);
            return c
        }
    }, {105: 105, 118: 118, 124: 124, 152: 152, 62: 62, 72: 72, 84: 84, 88: 88, 89: 89}],
    86: [function (t, n, r) {
        var o = t(152)("iterator"), u = !1;
        try {
            var e = [7][o]();
            e.return = function () {
                u = !0
            }, Array.from(e, function () {
                throw 2
            })
        } catch (t) {
        }
        n.exports = function (t, n) {
            if (!n && !u) return !1;
            var r = !1;
            try {
                var e = [7], i = e[o]();
                i.next = function () {
                    return {done: r = !0}
                }, e[o] = function () {
                    return i
                }, t(e)
            } catch (t) {
            }
            return r
        }
    }, {152: 152}],
    87: [function (t, n, r) {
        n.exports = function (t, n) {
            return {value: n, done: !!t}
        }
    }, {}],
    88: [function (t, n, r) {
        n.exports = {}
    }, {}],
    89: [function (t, n, r) {
        n.exports = !1
    }, {}],
    90: [function (t, n, r) {
        var e = Math.expm1;
        n.exports = !e || 22025.465794806718 < e(10) || e(10) < 22025.465794806718 || -2e-17 != e(-2e-17) ? function expm1(t) {
            return 0 == (t = +t) ? t : -1e-6 < t && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1
        } : e
    }, {}],
    91: [function (t, n, r) {
        var o = t(93), e = Math.pow, u = e(2, -52), c = e(2, -23), a = e(2, 127) * (2 - c), f = e(2, -126);
        n.exports = Math.fround || function fround(t) {
            var n, r, e = Math.abs(t), i = o(t);
            return e < f ? i * (e / f / c + 1 / u - 1 / u) * f * c : a < (r = (n = (1 + c / u) * e) - (n - e)) || r != r ? i * (1 / 0) : i * r
        }
    }, {93: 93}],
    92: [function (t, n, r) {
        n.exports = Math.log1p || function log1p(t) {
            return -1e-8 < (t = +t) && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t)
        }
    }, {}],
    93: [function (t, n, r) {
        n.exports = Math.sign || function sign(t) {
            return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1
        }
    }, {}],
    94: [function (t, n, r) {
        function tp(t) {
            u(t, e, {value: {i: "O" + ++c, w: {}}})
        }

        var e = t(147)("meta"), i = t(81), o = t(71), u = t(99).f, c = 0, a = Object.isExtensible || function () {
            return !0
        }, f = !t(64)(function () {
            return a(Object.preventExtensions({}))
        }), s = n.exports = {
            KEY: e, NEED: !1, fastKey: function (t, n) {
                if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!o(t, e)) {
                    if (!a(t)) return "F";
                    if (!n) return "E";
                    tp(t)
                }
                return t[e].i
            }, getWeak: function (t, n) {
                if (!o(t, e)) {
                    if (!a(t)) return !0;
                    if (!n) return !1;
                    tp(t)
                }
                return t[e].w
            }, onFreeze: function (t) {
                return f && s.NEED && a(t) && !o(t, e) && tp(t), t
            }
        }
    }, {147: 147, 64: 64, 71: 71, 81: 81, 99: 99}],
    95: [function (t, n, r) {
        var u = t(70), c = t(136).set, a = u.MutationObserver || u.WebKitMutationObserver, f = u.process, s = u.Promise,
            l = "process" == t(48)(f);
        n.exports = function () {
            function Qp() {
                var t, n;
                for (l && (t = f.domain) && t.exit(); r;) {
                    n = r.fn, r = r.next;
                    try {
                        n()
                    } catch (t) {
                        throw r ? i() : e = void 0, t
                    }
                }
                e = void 0, t && t.enter()
            }

            var r, e, i;
            if (l) i = function () {
                f.nextTick(Qp)
            }; else if (!a || u.navigator && u.navigator.standalone) if (s && s.resolve) {
                var t = s.resolve(void 0);
                i = function () {
                    t.then(Qp)
                }
            } else i = function () {
                c.call(u, Qp)
            }; else {
                var n = !0, o = document.createTextNode("");
                new a(Qp).observe(o, {characterData: !0}), i = function () {
                    o.data = n = !n
                }
            }
            return function (t) {
                var n = {fn: t, next: void 0};
                e && (e.next = n), r || (r = n, i()), e = n
            }
        }
    }, {136: 136, 48: 48, 70: 70}],
    96: [function (t, n, r) {
        "use strict";
        var i = t(33);

        function PromiseCapability(t) {
            var r, e;
            this.promise = new t(function (t, n) {
                if (void 0 !== r || void 0 !== e) throw TypeError("Bad Promise constructor");
                r = t, e = n
            }), this.resolve = i(r), this.reject = i(e)
        }

        n.exports.f = function (t) {
            return new PromiseCapability(t)
        }
    }, {33: 33}],
    97: [function (t, n, r) {
        "use strict";
        var h = t(58), p = t(107), v = t(104), g = t(108), y = t(142), d = t(77), i = Object.assign;
        n.exports = !i || t(64)(function () {
            var t = {}, n = {}, r = Symbol(), e = "abcdefghijklmnopqrst";
            return t[r] = 7, e.split("").forEach(function (t) {
                n[t] = t
            }), 7 != i({}, t)[r] || Object.keys(i({}, n)).join("") != e
        }) ? function assign(t, n) {
            for (var r = y(t), e = arguments.length, i = 1, o = v.f, u = g.f; i < e;) for (var c, a = d(arguments[i++]), f = o ? p(a).concat(o(a)) : p(a), s = f.length, l = 0; l < s;) c = f[l++], h && !u.call(a, c) || (r[c] = a[c]);
            return r
        } : i
    }, {104: 104, 107: 107, 108: 108, 142: 142, 58: 58, 64: 64, 77: 77}],
    98: [function (e, t, n) {
        function Pq() {
        }

        var i = e(38), o = e(100), u = e(60), c = e(125)("IE_PROTO"), a = "prototype", f = function () {
            var t, n = e(59)("iframe"), r = u.length;
            for (n.style.display = "none", e(73).appendChild(n), n.src = "javascript:", (t = n.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), f = t.F; r--;) delete f[a][u[r]];
            return f()
        };
        t.exports = Object.create || function create(t, n) {
            var r;
            return null !== t ? (Pq[a] = i(t), r = new Pq, Pq[a] = null, r[c] = t) : r = f(), void 0 === n ? r : o(r, n)
        }
    }, {100: 100, 125: 125, 38: 38, 59: 59, 60: 60, 73: 73}],
    99: [function (t, n, r) {
        arguments[4][29][0].apply(r, arguments)
    }, {143: 143, 29: 29, 38: 38, 58: 58, 74: 74}],
    100: [function (t, n, r) {
        var u = t(99), c = t(38), a = t(107);
        n.exports = t(58) ? Object.defineProperties : function defineProperties(t, n) {
            c(t);
            for (var r, e = a(n), i = e.length, o = 0; o < i;) u.f(t, r = e[o++], n[r]);
            return t
        }
    }, {107: 107, 38: 38, 58: 58, 99: 99}],
    101: [function (t, n, r) {
        var e = t(108), i = t(116), o = t(140), u = t(143), c = t(71), a = t(74), f = Object.getOwnPropertyDescriptor;
        r.f = t(58) ? f : function getOwnPropertyDescriptor(t, n) {
            if (t = o(t), n = u(n, !0), a) try {
                return f(t, n)
            } catch (t) {
            }
            if (c(t, n)) return i(!e.f.call(t, n), t[n])
        }
    }, {108: 108, 116: 116, 140: 140, 143: 143, 58: 58, 71: 71, 74: 74}],
    102: [function (t, n, r) {
        var e = t(140), i = t(103).f, o = {}.toString,
            u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        n.exports.f = function getOwnPropertyNames(t) {
            return u && "[object Window]" == o.call(t) ? function (t) {
                try {
                    return i(t)
                } catch (t) {
                    return u.slice()
                }
            }(t) : i(e(t))
        }
    }, {103: 103, 140: 140}],
    103: [function (t, n, r) {
        var e = t(106), i = t(60).concat("length", "prototype");
        r.f = Object.getOwnPropertyNames || function getOwnPropertyNames(t) {
            return e(t, i)
        }
    }, {106: 106, 60: 60}],
    104: [function (t, n, r) {
        r.f = Object.getOwnPropertySymbols
    }, {}],
    105: [function (t, n, r) {
        var e = t(71), i = t(142), o = t(125)("IE_PROTO"), u = Object.prototype;
        n.exports = Object.getPrototypeOf || function (t) {
            return t = i(t), e(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
        }
    }, {125: 125, 142: 142, 71: 71}],
    106: [function (t, n, r) {
        var u = t(71), c = t(140), a = t(41)(!1), f = t(125)("IE_PROTO");
        n.exports = function (t, n) {
            var r, e = c(t), i = 0, o = [];
            for (r in e) r != f && u(e, r) && o.push(r);
            for (; n.length > i;) u(e, r = n[i++]) && (~a(o, r) || o.push(r));
            return o
        }
    }, {125: 125, 140: 140, 41: 41, 71: 71}],
    107: [function (t, n, r) {
        var e = t(106), i = t(60);
        n.exports = Object.keys || function keys(t) {
            return e(t, i)
        }
    }, {106: 106, 60: 60}],
    108: [function (t, n, r) {
        r.f = {}.propertyIsEnumerable
    }, {}],
    109: [function (t, n, r) {
        var i = t(62), o = t(52), u = t(64);
        n.exports = function (t, n) {
            var r = (o.Object || {})[t] || Object[t], e = {};
            e[t] = n(r), i(i.S + i.F * u(function () {
                r(1)
            }), "Object", e)
        }
    }, {52: 52, 62: 62, 64: 64}],
    110: [function (t, n, r) {
        var a = t(58), f = t(107), s = t(140), l = t(108).f;
        n.exports = function (c) {
            return function (t) {
                for (var n, r = s(t), e = f(r), i = e.length, o = 0, u = []; o < i;) n = e[o++], a && !l.call(r, n) || u.push(c ? [n, r[n]] : r[n]);
                return u
            }
        }
    }, {107: 107, 108: 108, 140: 140, 58: 58}],
    111: [function (t, n, r) {
        var e = t(103), i = t(104), o = t(38), u = t(70).Reflect;
        n.exports = u && u.ownKeys || function ownKeys(t) {
            var n = e.f(o(t)), r = i.f;
            return r ? n.concat(r(t)) : n
        }
    }, {103: 103, 104: 104, 38: 38, 70: 70}],
    112: [function (t, n, r) {
        var e = t(70).parseFloat, i = t(134).trim;
        n.exports = 1 / e(t(135) + "-0") != -1 / 0 ? function parseFloat(t) {
            var n = i(String(t), 3), r = e(n);
            return 0 === r && "-" == n.charAt(0) ? -0 : r
        } : e
    }, {134: 134, 135: 135, 70: 70}],
    113: [function (t, n, r) {
        var e = t(70).parseInt, i = t(134).trim, o = t(135), u = /^[-+]?0[xX]/;
        n.exports = 8 !== e(o + "08") || 22 !== e(o + "0x16") ? function parseInt(t, n) {
            var r = i(String(t), 3);
            return e(r, n >>> 0 || (u.test(r) ? 16 : 10))
        } : e
    }, {134: 134, 135: 135, 70: 70}],
    114: [function (t, n, r) {
        n.exports = function (t) {
            try {
                return {e: !1, v: t()}
            } catch (t) {
                return {e: !0, v: t}
            }
        }
    }, {}],
    115: [function (t, n, r) {
        var e = t(38), i = t(81), o = t(96);
        n.exports = function (t, n) {
            if (e(t), i(n) && n.constructor === t) return n;
            var r = o.f(t);
            return (0, r.resolve)(n), r.promise
        }
    }, {38: 38, 81: 81, 96: 96}],
    116: [function (t, n, r) {
        arguments[4][30][0].apply(r, arguments)
    }, {30: 30}],
    117: [function (t, n, r) {
        var i = t(118);
        n.exports = function (t, n, r) {
            for (var e in n) i(t, e, n[e], r);
            return t
        }
    }, {118: 118}],
    118: [function (t, n, r) {
        var o = t(70), u = t(72), c = t(71), a = t(147)("src"), e = t(69), i = "toString", f = ("" + e).split(i);
        t(52).inspectSource = function (t) {
            return e.call(t)
        }, (n.exports = function (t, n, r, e) {
            var i = "function" == typeof r;
            i && (c(r, "name") || u(r, "name", n)), t[n] !== r && (i && (c(r, a) || u(r, a, t[n] ? "" + t[n] : f.join(String(n)))), t === o ? t[n] = r : e ? t[n] ? t[n] = r : u(t, n, r) : (delete t[n], u(t, n, r)))
        })(Function.prototype, i, function toString() {
            return "function" == typeof this && this[a] || e.call(this)
        })
    }, {147: 147, 52: 52, 69: 69, 70: 70, 71: 71, 72: 72}],
    119: [function (t, n, r) {
        "use strict";
        var i = t(47), o = RegExp.prototype.exec;
        n.exports = function (t, n) {
            var r = t.exec;
            if ("function" == typeof r) {
                var e = r.call(t, n);
                if ("object" != typeof e) throw new TypeError("RegExp exec method returned something other than an Object or null");
                return e
            }
            if ("RegExp" !== i(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
            return o.call(t, n)
        }
    }, {47: 47}],
    120: [function (t, n, r) {
        "use strict";
        var e, i, u = t(66), c = RegExp.prototype.exec, a = String.prototype.replace, o = c, f = "lastIndex",
            s = (e = /a/, i = /b*/g, c.call(e, "a"), c.call(i, "a"), 0 !== e[f] || 0 !== i[f]),
            l = void 0 !== /()??/.exec("")[1];
        (s || l) && (o = function exec(t) {
            var n, r, e, i, o = this;
            return l && (r = new RegExp("^" + o.source + "$(?!\\s)", u.call(o))), s && (n = o[f]), e = c.call(o, t), s && e && (o[f] = o.global ? e.index + e[0].length : n), l && e && 1 < e.length && a.call(e[0], r, function () {
                for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (e[i] = void 0)
            }), e
        }), n.exports = o
    }, {66: 66}],
    121: [function (t, n, r) {
        n.exports = Object.is || function is(t, n) {
            return t === n ? 0 !== t || 1 / t == 1 / n : t != t && n != n
        }
    }, {}],
    122: [function (n, t, r) {
        function Wu(t, n) {
            if (i(t), !e(n) && null !== n) throw TypeError(n + ": can't set as prototype!")
        }

        var e = n(81), i = n(38);
        t.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, r, e) {
                try {
                    (e = n(54)(Function.call, n(101).f(Object.prototype, "__proto__").set, 2))(t, []), r = !(t instanceof Array)
                } catch (t) {
                    r = !0
                }
                return function setPrototypeOf(t, n) {
                    return Wu(t, n), r ? t.__proto__ = n : e(t, n), t
                }
            }({}, !1) : void 0), check: Wu
        }
    }, {101: 101, 38: 38, 54: 54, 81: 81}],
    123: [function (t, n, r) {
        "use strict";
        var e = t(70), i = t(99), o = t(58), u = t(152)("species");
        n.exports = function (t) {
            var n = e[t];
            o && n && !n[u] && i.f(n, u, {
                configurable: !0, get: function () {
                    return this
                }
            })
        }
    }, {152: 152, 58: 58, 70: 70, 99: 99}],
    124: [function (t, n, r) {
        var e = t(99).f, i = t(71), o = t(152)("toStringTag");
        n.exports = function (t, n, r) {
            t && !i(t = r ? t : t.prototype, o) && e(t, o, {configurable: !0, value: n})
        }
    }, {152: 152, 71: 71, 99: 99}],
    125: [function (t, n, r) {
        var e = t(126)("keys"), i = t(147);
        n.exports = function (t) {
            return e[t] || (e[t] = i(t))
        }
    }, {126: 126, 147: 147}],
    126: [function (t, n, r) {
        var e = t(52), i = t(70), o = "__core-js_shared__", u = i[o] || (i[o] = {});
        (n.exports = function (t, n) {
            return u[t] || (u[t] = void 0 !== n ? n : {})
        })("versions", []).push({
            version: e.version,
            mode: t(89) ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    }, {52: 52, 70: 70, 89: 89}],
    127: [function (t, n, r) {
        var i = t(38), o = t(33), u = t(152)("species");
        n.exports = function (t, n) {
            var r, e = i(t).constructor;
            return void 0 === e || null == (r = i(e)[u]) ? n : o(r)
        }
    }, {152: 152, 33: 33, 38: 38}],
    128: [function (t, n, r) {
        "use strict";
        var e = t(64);
        n.exports = function (t, n) {
            return !!t && e(function () {
                n ? t.call(null, function () {
                }, 1) : t.call(null)
            })
        }
    }, {64: 64}],
    129: [function (t, n, r) {
        var a = t(139), f = t(57);
        n.exports = function (c) {
            return function (t, n) {
                var r, e, i = String(f(t)), o = a(n), u = i.length;
                return o < 0 || u <= o ? c ? "" : void 0 : (r = i.charCodeAt(o)) < 55296 || 56319 < r || o + 1 === u || (e = i.charCodeAt(o + 1)) < 56320 || 57343 < e ? c ? i.charAt(o) : r : c ? i.slice(o, o + 2) : e - 56320 + (r - 55296 << 10) + 65536
            }
        }
    }, {139: 139, 57: 57}],
    130: [function (t, n, r) {
        var e = t(82), i = t(57);
        n.exports = function (t, n, r) {
            if (e(n)) throw TypeError("String#" + r + " doesn't accept regex!");
            return String(i(t))
        }
    }, {57: 57, 82: 82}],
    131: [function (t, n, r) {
        function Aw(t, n, r, e) {
            var i = String(u(t)), o = "<" + n;
            return "" !== r && (o += " " + r + '="' + String(e).replace(c, "&quot;") + '"'), o + ">" + i + "</" + n + ">"
        }

        var e = t(62), i = t(64), u = t(57), c = /"/g;
        n.exports = function (n, t) {
            var r = {};
            r[n] = t(Aw), e(e.P + e.F * i(function () {
                var t = ""[n]('"');
                return t !== t.toLowerCase() || 3 < t.split('"').length
            }), "String", r)
        }
    }, {57: 57, 62: 62, 64: 64}],
    132: [function (t, n, r) {
        var s = t(141), l = t(133), h = t(57);
        n.exports = function (t, n, r, e) {
            var i = String(h(t)), o = i.length, u = void 0 === r ? " " : String(r), c = s(n);
            if (c <= o || "" == u) return i;
            var a = c - o, f = l.call(u, Math.ceil(a / u.length));
            return f.length > a && (f = f.slice(0, a)), e ? f + i : i + f
        }
    }, {133: 133, 141: 141, 57: 57}],
    133: [function (t, n, r) {
        "use strict";
        var i = t(139), o = t(57);
        n.exports = function repeat(t) {
            var n = String(o(this)), r = "", e = i(t);
            if (e < 0 || e == 1 / 0) throw RangeError("Count can't be negative");
            for (; 0 < e; (e >>>= 1) && (n += n)) 1 & e && (r += n);
            return r
        }
    }, {139: 139, 57: 57}],
    134: [function (t, n, r) {
        function tx(t, n, r) {
            var e = {}, i = c(function () {
                return !!a[t]() || "​" != "​"[t]()
            }), o = e[t] = i ? n(s) : a[t];
            r && (e[r] = o), u(u.P + u.F * i, "String", e)
        }

        var u = t(62), e = t(57), c = t(64), a = t(135), i = "[" + a + "]", o = RegExp("^" + i + i + "*"),
            f = RegExp(i + i + "*$"), s = tx.trim = function (t, n) {
                return t = String(e(t)), 1 & n && (t = t.replace(o, "")), 2 & n && (t = t.replace(f, "")), t
            };
        n.exports = tx
    }, {135: 135, 57: 57, 62: 62, 64: 64}],
    135: [function (t, n, r) {
        n.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
    }, {}],
    136: [function (t, n, r) {
        function Zx() {
            var t = +this;
            if (d.hasOwnProperty(t)) {
                var n = d[t];
                delete d[t], n()
            }
        }

        function $x(t) {
            Zx.call(t.data)
        }

        var e, i, o, u = t(54), c = t(76), a = t(73), f = t(59), s = t(70), l = s.process, h = s.setImmediate,
            p = s.clearImmediate, v = s.MessageChannel, g = s.Dispatch, y = 0, d = {}, x = "onreadystatechange";
        h && p || (h = function setImmediate(t) {
            for (var n = [], r = 1; r < arguments.length;) n.push(arguments[r++]);
            return d[++y] = function () {
                c("function" == typeof t ? t : Function(t), n)
            }, e(y), y
        }, p = function clearImmediate(t) {
            delete d[t]
        }, "process" == t(48)(l) ? e = function (t) {
            l.nextTick(u(Zx, t, 1))
        } : g && g.now ? e = function (t) {
            g.now(u(Zx, t, 1))
        } : v ? (o = (i = new v).port2, i.port1.onmessage = $x, e = u(o.postMessage, o, 1)) : s.addEventListener && "function" == typeof postMessage && !s.importScripts ? (e = function (t) {
            s.postMessage(t + "", "*")
        }, s.addEventListener("message", $x, !1)) : e = x in f("script") ? function (t) {
            a.appendChild(f("script"))[x] = function () {
                a.removeChild(this), Zx.call(t)
            }
        } : function (t) {
            setTimeout(u(Zx, t, 1), 0)
        }), n.exports = {set: h, clear: p}
    }, {48: 48, 54: 54, 59: 59, 70: 70, 73: 73, 76: 76}],
    137: [function (t, n, r) {
        var e = t(139), i = Math.max, o = Math.min;
        n.exports = function (t, n) {
            return (t = e(t)) < 0 ? i(t + n, 0) : o(t, n)
        }
    }, {139: 139}],
    138: [function (t, n, r) {
        var e = t(139), i = t(141);
        n.exports = function (t) {
            if (void 0 === t) return 0;
            var n = e(t), r = i(n);
            if (n !== r) throw RangeError("Wrong length!");
            return r
        }
    }, {139: 139, 141: 141}],
    139: [function (t, n, r) {
        var e = Math.ceil, i = Math.floor;
        n.exports = function (t) {
            return isNaN(t = +t) ? 0 : (0 < t ? i : e)(t)
        }
    }, {}],
    140: [function (t, n, r) {
        var e = t(77), i = t(57);
        n.exports = function (t) {
            return e(i(t))
        }
    }, {57: 57, 77: 77}],
    141: [function (t, n, r) {
        var e = t(139), i = Math.min;
        n.exports = function (t) {
            return 0 < t ? i(e(t), 9007199254740991) : 0
        }
    }, {139: 139}],
    142: [function (t, n, r) {
        var e = t(57);
        n.exports = function (t) {
            return Object(e(t))
        }
    }, {57: 57}],
    143: [function (t, n, r) {
        arguments[4][31][0].apply(r, arguments)
    }, {31: 31, 81: 81}],
    144: [function (t, n, r) {
        "use strict";
        if (t(58)) {
            var y = t(89), d = t(70), x = t(64), m = t(62), S = t(146), e = t(145), h = t(54), b = t(37), i = t(116),
                w = t(72), o = t(117), u = t(139), _ = t(141), E = t(138), c = t(137), a = t(143), f = t(71), O = t(47),
                F = t(81), p = t(142), v = t(78), I = t(98), P = t(105), A = t(103).f, g = t(153), s = t(147),
                l = t(152), M = t(42), k = t(41), N = t(127), j = t(164), R = t(88), T = t(86), L = t(123), C = t(40),
                G = t(39), D = t(99), U = t(101), W = D.f, V = U.f, B = d.RangeError, q = d.TypeError, Y = d.Uint8Array,
                z = "ArrayBuffer", X = "Shared" + z, $ = "BYTES_PER_ELEMENT", Q = "prototype", Z = Array[Q],
                J = e.ArrayBuffer, H = e.DataView, K = M(0), tt = M(2), nt = M(3), rt = M(4), et = M(5), it = M(6),
                ot = k(!0), ut = k(!1), ct = j.values, at = j.keys, ft = j.entries, st = Z.lastIndexOf, lt = Z.reduce,
                ht = Z.reduceRight, pt = Z.join, vt = Z.sort, gt = Z.slice, yt = Z.toString, dt = Z.toLocaleString,
                xt = l("iterator"), mt = l("toStringTag"), St = s("typed_constructor"), bt = s("def_constructor"),
                wt = S.CONSTR, _t = S.TYPED, Et = S.VIEW, Ot = "Wrong length!", Ft = M(1, function (t, n) {
                    return kt(N(t, t[bt]), n)
                }), It = x(function () {
                    return 1 === new Y(new Uint16Array([1]).buffer)[0]
                }), Pt = !!Y && !!Y[Q].set && x(function () {
                    new Y(1).set({})
                }), At = function (t, n) {
                    var r = u(t);
                    if (r < 0 || r % n) throw B("Wrong offset!");
                    return r
                }, Mt = function (t) {
                    if (F(t) && _t in t) return t;
                    throw q(t + " is not a typed array!")
                }, kt = function (t, n) {
                    if (!(F(t) && St in t)) throw q("It is not a typed array constructor!");
                    return new t(n)
                }, Nt = function (t, n) {
                    return jt(N(t, t[bt]), n)
                }, jt = function (t, n) {
                    for (var r = 0, e = n.length, i = kt(t, e); r < e;) i[r] = n[r++];
                    return i
                }, Rt = function (t, n, r) {
                    W(t, n, {
                        get: function () {
                            return this._d[r]
                        }
                    })
                }, Tt = function from(t) {
                    var n, r, e, i, o, u, c = p(t), a = arguments.length, f = 1 < a ? arguments[1] : void 0,
                        s = void 0 !== f, l = g(c);
                    if (null != l && !v(l)) {
                        for (u = l.call(c), e = [], n = 0; !(o = u.next()).done; n++) e.push(o.value);
                        c = e
                    }
                    for (s && 2 < a && (f = h(f, arguments[2], 2)), n = 0, r = _(c.length), i = kt(this, r); n < r; n++) i[n] = s ? f(c[n], n) : c[n];
                    return i
                }, Lt = function of() {
                    for (var t = 0, n = arguments.length, r = kt(this, n); t < n;) r[t] = arguments[t++];
                    return r
                }, Ct = !!Y && x(function () {
                    dt.call(new Y(1))
                }), Gt = function toLocaleString() {
                    return dt.apply(Ct ? gt.call(Mt(this)) : Mt(this), arguments)
                }, Dt = {
                    copyWithin: function copyWithin(t, n) {
                        return G.call(Mt(this), t, n, 2 < arguments.length ? arguments[2] : void 0)
                    }, every: function every(t) {
                        return rt(Mt(this), t, 1 < arguments.length ? arguments[1] : void 0)
                    }, fill: function fill(t) {
                        return C.apply(Mt(this), arguments)
                    }, filter: function filter(t) {
                        return Nt(this, tt(Mt(this), t, 1 < arguments.length ? arguments[1] : void 0))
                    }, find: function find(t) {
                        return et(Mt(this), t, 1 < arguments.length ? arguments[1] : void 0)
                    }, findIndex: function findIndex(t) {
                        return it(Mt(this), t, 1 < arguments.length ? arguments[1] : void 0)
                    }, forEach: function forEach(t) {
                        K(Mt(this), t, 1 < arguments.length ? arguments[1] : void 0)
                    }, indexOf: function indexOf(t) {
                        return ut(Mt(this), t, 1 < arguments.length ? arguments[1] : void 0)
                    }, includes: function includes(t) {
                        return ot(Mt(this), t, 1 < arguments.length ? arguments[1] : void 0)
                    }, join: function join(t) {
                        return pt.apply(Mt(this), arguments)
                    }, lastIndexOf: function lastIndexOf(t) {
                        return st.apply(Mt(this), arguments)
                    }, map: function map(t) {
                        return Ft(Mt(this), t, 1 < arguments.length ? arguments[1] : void 0)
                    }, reduce: function reduce(t) {
                        return lt.apply(Mt(this), arguments)
                    }, reduceRight: function reduceRight(t) {
                        return ht.apply(Mt(this), arguments)
                    }, reverse: function reverse() {
                        for (var t, n = this, r = Mt(n).length, e = Math.floor(r / 2), i = 0; i < e;) t = n[i], n[i++] = n[--r], n[r] = t;
                        return n
                    }, some: function some(t) {
                        return nt(Mt(this), t, 1 < arguments.length ? arguments[1] : void 0)
                    }, sort: function sort(t) {
                        return vt.call(Mt(this), t)
                    }, subarray: function subarray(t, n) {
                        var r = Mt(this), e = r.length, i = c(t, e);
                        return new (N(r, r[bt]))(r.buffer, r.byteOffset + i * r.BYTES_PER_ELEMENT, _((void 0 === n ? e : c(n, e)) - i))
                    }
                }, Ut = function slice(t, n) {
                    return Nt(this, gt.call(Mt(this), t, n))
                }, Wt = function set(t) {
                    Mt(this);
                    var n = At(arguments[1], 1), r = this.length, e = p(t), i = _(e.length), o = 0;
                    if (r < i + n) throw B(Ot);
                    for (; o < i;) this[n + o] = e[o++]
                }, Vt = {
                    entries: function entries() {
                        return ft.call(Mt(this))
                    }, keys: function keys() {
                        return at.call(Mt(this))
                    }, values: function values() {
                        return ct.call(Mt(this))
                    }
                }, Bt = function (t, n) {
                    return F(t) && t[_t] && "symbol" != typeof n && n in t && String(+n) == String(n)
                }, qt = function getOwnPropertyDescriptor(t, n) {
                    return Bt(t, n = a(n, !0)) ? i(2, t[n]) : V(t, n)
                }, Yt = function defineProperty(t, n, r) {
                    return !(Bt(t, n = a(n, !0)) && F(r) && f(r, "value")) || f(r, "get") || f(r, "set") || r.configurable || f(r, "writable") && !r.writable || f(r, "enumerable") && !r.enumerable ? W(t, n, r) : (t[n] = r.value, t)
                };
            wt || (U.f = qt, D.f = Yt), m(m.S + m.F * !wt, "Object", {
                getOwnPropertyDescriptor: qt,
                defineProperty: Yt
            }), x(function () {
                yt.call({})
            }) && (yt = dt = function toString() {
                return pt.call(this)
            });
            var zt = o({}, Dt);
            o(zt, Vt), w(zt, xt, Vt.values), o(zt, {
                slice: Ut, set: Wt, constructor: function () {
                }, toString: yt, toLocaleString: Gt
            }), Rt(zt, "buffer", "b"), Rt(zt, "byteOffset", "o"), Rt(zt, "byteLength", "l"), Rt(zt, "length", "e"), W(zt, mt, {
                get: function () {
                    return this[_t]
                }
            }), n.exports = function (t, l, n, o) {
                function CC(t, i) {
                    W(t, i, {
                        get: function () {
                            return t = i, (n = this._d).v[r](t * l + n.o, It);
                            var t, n
                        }, set: function (t) {
                            return n = i, r = t, e = this._d, o && (r = (r = Math.round(r)) < 0 ? 0 : 255 < r ? 255 : 255 & r), void e.v[u](n * l + e.o, r, It);
                            var n, r, e
                        }, enumerable: !0
                    })
                }

                var h = t + ((o = !!o) ? "Clamped" : "") + "Array", r = "get" + t, u = "set" + t, p = d[h], c = p || {},
                    e = p && P(p), i = !p || !S.ABV, a = {}, f = p && p[Q];
                i ? (p = n(function (t, n, r, e) {
                    b(t, p, h, "_d");
                    var i, o, u, c, a = 0, f = 0;
                    if (F(n)) {
                        if (!(n instanceof J || (c = O(n)) == z || c == X)) return _t in n ? jt(p, n) : Tt.call(p, n);
                        i = n, f = At(r, l);
                        var s = n.byteLength;
                        if (void 0 === e) {
                            if (s % l) throw B(Ot);
                            if ((o = s - f) < 0) throw B(Ot)
                        } else if (s < (o = _(e) * l) + f) throw B(Ot);
                        u = o / l
                    } else u = E(n), i = new J(o = u * l);
                    for (w(t, "_d", {b: i, o: f, l: o, e: u, v: new H(i)}); a < u;) CC(t, a++)
                }), f = p[Q] = I(zt), w(f, "constructor", p)) : x(function () {
                    p(1)
                }) && x(function () {
                    new p(-1)
                }) && T(function (t) {
                    new p, new p(null), new p(1.5), new p(t)
                }, !0) || (p = n(function (t, n, r, e) {
                    var i;
                    return b(t, p, h), F(n) ? n instanceof J || (i = O(n)) == z || i == X ? void 0 !== e ? new c(n, At(r, l), e) : void 0 !== r ? new c(n, At(r, l)) : new c(n) : _t in n ? jt(p, n) : Tt.call(p, n) : new c(E(n))
                }), K(e !== Function.prototype ? A(c).concat(A(e)) : A(c), function (t) {
                    t in p || w(p, t, c[t])
                }), p[Q] = f, y || (f.constructor = p));
                var s = f[xt], v = !!s && ("values" == s.name || null == s.name), g = Vt.values;
                w(p, St, !0), w(f, _t, h), w(f, Et, !0), w(f, bt, p), (o ? new p(1)[mt] == h : mt in f) || W(f, mt, {
                    get: function () {
                        return h
                    }
                }), a[h] = p, m(m.G + m.W + m.F * (p != c), a), m(m.S, h, {BYTES_PER_ELEMENT: l}), m(m.S + m.F * x(function () {
                    c.of.call(p, 1)
                }), h, {
                    from: Tt,
                    of: Lt
                }), $ in f || w(f, $, l), m(m.P, h, Dt), L(h), m(m.P + m.F * Pt, h, {set: Wt}), m(m.P + m.F * !v, h, Vt), y || f.toString == yt || (f.toString = yt), m(m.P + m.F * x(function () {
                    new p(1).slice()
                }), h, {slice: Ut}), m(m.P + m.F * (x(function () {
                    return [1, 2].toLocaleString() != new p([1, 2]).toLocaleString()
                }) || !x(function () {
                    f.toLocaleString.call([1, 2])
                })), h, {toLocaleString: Gt}), R[h] = v ? s : g, y || v || w(f, xt, g)
            }
        } else n.exports = function () {
        }
    }, {
        101: 101,
        103: 103,
        105: 105,
        116: 116,
        117: 117,
        123: 123,
        127: 127,
        137: 137,
        138: 138,
        139: 139,
        141: 141,
        142: 142,
        143: 143,
        145: 145,
        146: 146,
        147: 147,
        152: 152,
        153: 153,
        164: 164,
        37: 37,
        39: 39,
        40: 40,
        41: 41,
        42: 42,
        47: 47,
        54: 54,
        58: 58,
        62: 62,
        64: 64,
        70: 70,
        71: 71,
        72: 72,
        78: 78,
        81: 81,
        86: 86,
        88: 88,
        89: 89,
        98: 98,
        99: 99
    }],
    145: [function (t, n, r) {
        "use strict";
        var e = t(70), i = t(58), o = t(89), u = t(146), c = t(72), a = t(117), f = t(64), s = t(37), l = t(139),
            h = t(141), p = t(138), v = t(103).f, g = t(99).f, y = t(40), d = t(124), x = "ArrayBuffer", m = "DataView",
            S = "prototype", b = "Wrong index!", w = e[x], _ = e[m], E = e.Math, O = e.RangeError, F = e.Infinity,
            I = w, P = E.abs, A = E.pow, M = E.floor, k = E.log, N = E.LN2, j = "byteLength", R = "byteOffset",
            T = i ? "_b" : "buffer", L = i ? "_l" : j, C = i ? "_o" : R;

        function packIEEE754(t, n, r) {
            var e, i, o, u = new Array(r), c = 8 * r - n - 1, a = (1 << c) - 1, f = a >> 1,
                s = 23 === n ? A(2, -24) - A(2, -77) : 0, l = 0, h = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for ((t = P(t)) != t || t === F ? (i = t != t ? 1 : 0, e = a) : (e = M(k(t) / N), t * (o = A(2, -e)) < 1 && (e--, o *= 2), 2 <= (t += 1 <= e + f ? s / o : s * A(2, 1 - f)) * o && (e++, o /= 2), a <= e + f ? (i = 0, e = a) : 1 <= e + f ? (i = (t * o - 1) * A(2, n), e += f) : (i = t * A(2, f - 1) * A(2, n), e = 0)); 8 <= n; u[l++] = 255 & i, i /= 256, n -= 8) ;
            for (e = e << n | i, c += n; 0 < c; u[l++] = 255 & e, e /= 256, c -= 8) ;
            return u[--l] |= 128 * h, u
        }

        function unpackIEEE754(t, n, r) {
            var e, i = 8 * r - n - 1, o = (1 << i) - 1, u = o >> 1, c = i - 7, a = r - 1, f = t[a--], s = 127 & f;
            for (f >>= 7; 0 < c; s = 256 * s + t[a], a--, c -= 8) ;
            for (e = s & (1 << -c) - 1, s >>= -c, c += n; 0 < c; e = 256 * e + t[a], a--, c -= 8) ;
            if (0 === s) s = 1 - u; else {
                if (s === o) return e ? NaN : f ? -F : F;
                e += A(2, n), s -= u
            }
            return (f ? -1 : 1) * e * A(2, s - n)
        }

        function unpackI32(t) {
            return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
        }

        function packI8(t) {
            return [255 & t]
        }

        function packI16(t) {
            return [255 & t, t >> 8 & 255]
        }

        function packI32(t) {
            return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
        }

        function packF64(t) {
            return packIEEE754(t, 52, 8)
        }

        function packF32(t) {
            return packIEEE754(t, 23, 4)
        }

        function addGetter(t, n, r) {
            g(t[S], n, {
                get: function () {
                    return this[r]
                }
            })
        }

        function get(t, n, r, e) {
            var i = p(+r);
            if (i + n > t[L]) throw O(b);
            var o = t[T]._b, u = i + t[C], c = o.slice(u, u + n);
            return e ? c : c.reverse()
        }

        function set(t, n, r, e, i, o) {
            var u = p(+r);
            if (u + n > t[L]) throw O(b);
            for (var c = t[T]._b, a = u + t[C], f = e(+i), s = 0; s < n; s++) c[a + s] = f[o ? s : n - s - 1]
        }

        if (u.ABV) {
            if (!f(function () {
                w(1)
            }) || !f(function () {
                new w(-1)
            }) || f(function () {
                return new w, new w(1.5), new w(NaN), w.name != x
            })) {
                for (var G, D = (w = function ArrayBuffer(t) {
                    return s(this, w), new I(p(t))
                })[S] = I[S], U = v(I), W = 0; U.length > W;) (G = U[W++]) in w || c(w, G, I[G]);
                o || (D.constructor = w)
            }
            var V = new _(new w(2)), B = _[S].setInt8;
            V.setInt8(0, 2147483648), V.setInt8(1, 2147483649), !V.getInt8(0) && V.getInt8(1) || a(_[S], {
                setInt8: function setInt8(t, n) {
                    B.call(this, t, n << 24 >> 24)
                }, setUint8: function setUint8(t, n) {
                    B.call(this, t, n << 24 >> 24)
                }
            }, !0)
        } else w = function ArrayBuffer(t) {
            s(this, w, x);
            var n = p(t);
            this._b = y.call(new Array(n), 0), this[L] = n
        }, _ = function DataView(t, n, r) {
            s(this, _, m), s(t, w, m);
            var e = t[L], i = l(n);
            if (i < 0 || e < i) throw O("Wrong offset!");
            if (e < i + (r = void 0 === r ? e - i : h(r))) throw O("Wrong length!");
            this[T] = t, this[C] = i, this[L] = r
        }, i && (addGetter(w, j, "_l"), addGetter(_, "buffer", "_b"), addGetter(_, j, "_l"), addGetter(_, R, "_o")), a(_[S], {
            getInt8: function getInt8(t) {
                return get(this, 1, t)[0] << 24 >> 24
            }, getUint8: function getUint8(t) {
                return get(this, 1, t)[0]
            }, getInt16: function getInt16(t) {
                var n = get(this, 2, t, arguments[1]);
                return (n[1] << 8 | n[0]) << 16 >> 16
            }, getUint16: function getUint16(t) {
                var n = get(this, 2, t, arguments[1]);
                return n[1] << 8 | n[0]
            }, getInt32: function getInt32(t) {
                return unpackI32(get(this, 4, t, arguments[1]))
            }, getUint32: function getUint32(t) {
                return unpackI32(get(this, 4, t, arguments[1])) >>> 0
            }, getFloat32: function getFloat32(t) {
                return unpackIEEE754(get(this, 4, t, arguments[1]), 23, 4)
            }, getFloat64: function getFloat64(t) {
                return unpackIEEE754(get(this, 8, t, arguments[1]), 52, 8)
            }, setInt8: function setInt8(t, n) {
                set(this, 1, t, packI8, n)
            }, setUint8: function setUint8(t, n) {
                set(this, 1, t, packI8, n)
            }, setInt16: function setInt16(t, n) {
                set(this, 2, t, packI16, n, arguments[2])
            }, setUint16: function setUint16(t, n) {
                set(this, 2, t, packI16, n, arguments[2])
            }, setInt32: function setInt32(t, n) {
                set(this, 4, t, packI32, n, arguments[2])
            }, setUint32: function setUint32(t, n) {
                set(this, 4, t, packI32, n, arguments[2])
            }, setFloat32: function setFloat32(t, n) {
                set(this, 4, t, packF32, n, arguments[2])
            }, setFloat64: function setFloat64(t, n) {
                set(this, 8, t, packF64, n, arguments[2])
            }
        });
        d(w, x), d(_, m), c(_[S], u.VIEW, !0), r[x] = w, r[m] = _
    }, {
        103: 103,
        117: 117,
        124: 124,
        138: 138,
        139: 139,
        141: 141,
        146: 146,
        37: 37,
        40: 40,
        58: 58,
        64: 64,
        70: 70,
        72: 72,
        89: 89,
        99: 99
    }],
    146: [function (t, n, r) {
        for (var e, i = t(70), o = t(72), u = t(147), c = u("typed_array"), a = u("view"), f = !(!i.ArrayBuffer || !i.DataView), s = f, l = 0, h = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); l < 9;) (e = i[h[l++]]) ? (o(e.prototype, c, !0), o(e.prototype, a, !0)) : s = !1;
        n.exports = {ABV: f, CONSTR: s, TYPED: c, VIEW: a}
    }, {147: 147, 70: 70, 72: 72}],
    147: [function (t, n, r) {
        var e = 0, i = Math.random();
        n.exports = function (t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + i).toString(36))
        }
    }, {}],
    148: [function (t, n, r) {
        var e = t(70).navigator;
        n.exports = e && e.userAgent || ""
    }, {70: 70}],
    149: [function (t, n, r) {
        var e = t(81);
        n.exports = function (t, n) {
            if (!e(t) || t._t !== n) throw TypeError("Incompatible receiver, " + n + " required!");
            return t
        }
    }, {81: 81}],
    150: [function (t, n, r) {
        var e = t(70), i = t(52), o = t(89), u = t(151), c = t(99).f;
        n.exports = function (t) {
            var n = i.Symbol || (i.Symbol = o ? {} : e.Symbol || {});
            "_" == t.charAt(0) || t in n || c(n, t, {value: u.f(t)})
        }
    }, {151: 151, 52: 52, 70: 70, 89: 89, 99: 99}],
    151: [function (t, n, r) {
        r.f = t(152)
    }, {152: 152}],
    152: [function (t, n, r) {
        var e = t(126)("wks"), i = t(147), o = t(70).Symbol, u = "function" == typeof o;
        (n.exports = function (t) {
            return e[t] || (e[t] = u && o[t] || (u ? o : i)("Symbol." + t))
        }).store = e
    }, {126: 126, 147: 147, 70: 70}],
    153: [function (t, n, r) {
        var e = t(47), i = t(152)("iterator"), o = t(88);
        n.exports = t(52).getIteratorMethod = function (t) {
            if (null != t) return t[i] || t["@@iterator"] || o[e(t)]
        }
    }, {152: 152, 47: 47, 52: 52, 88: 88}],
    154: [function (t, n, r) {
        var e = t(62);
        e(e.P, "Array", {copyWithin: t(39)}), t(35)("copyWithin")
    }, {35: 35, 39: 39, 62: 62}],
    155: [function (t, n, r) {
        "use strict";
        var e = t(62), i = t(42)(4);
        e(e.P + e.F * !t(128)([].every, !0), "Array", {
            every: function every(t) {
                return i(this, t, arguments[1])
            }
        })
    }, {128: 128, 42: 42, 62: 62}],
    156: [function (t, n, r) {
        var e = t(62);
        e(e.P, "Array", {fill: t(40)}), t(35)("fill")
    }, {35: 35, 40: 40, 62: 62}],
    157: [function (t, n, r) {
        "use strict";
        var e = t(62), i = t(42)(2);
        e(e.P + e.F * !t(128)([].filter, !0), "Array", {
            filter: function filter(t) {
                return i(this, t, arguments[1])
            }
        })
    }, {128: 128, 42: 42, 62: 62}],
    158: [function (t, n, r) {
        "use strict";
        var e = t(62), i = t(42)(6), o = "findIndex", u = !0;
        o in [] && Array(1)[o](function () {
            u = !1
        }), e(e.P + e.F * u, "Array", {
            findIndex: function findIndex(t) {
                return i(this, t, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), t(35)(o)
    }, {35: 35, 42: 42, 62: 62}],
    159: [function (t, n, r) {
        "use strict";
        var e = t(62), i = t(42)(5), o = "find", u = !0;
        o in [] && Array(1)[o](function () {
            u = !1
        }), e(e.P + e.F * u, "Array", {
            find: function find(t) {
                return i(this, t, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), t(35)(o)
    }, {35: 35, 42: 42, 62: 62}],
    160: [function (t, n, r) {
        "use strict";
        var e = t(62), i = t(42)(0), o = t(128)([].forEach, !0);
        e(e.P + e.F * !o, "Array", {
            forEach: function forEach(t) {
                return i(this, t, arguments[1])
            }
        })
    }, {128: 128, 42: 42, 62: 62}],
    161: [function (t, n, r) {
        "use strict";
        var h = t(54), e = t(62), p = t(142), v = t(83), g = t(78), y = t(141), d = t(53), x = t(153);
        e(e.S + e.F * !t(86)(function (t) {
            Array.from(t)
        }), "Array", {
            from: function from(t) {
                var n, r, e, i, o = p(t), u = "function" == typeof this ? this : Array, c = arguments.length,
                    a = 1 < c ? arguments[1] : void 0, f = void 0 !== a, s = 0, l = x(o);
                if (f && (a = h(a, 2 < c ? arguments[2] : void 0, 2)), null == l || u == Array && g(l)) for (r = new u(n = y(o.length)); s < n; s++) d(r, s, f ? a(o[s], s) : o[s]); else for (i = l.call(o), r = new u; !(e = i.next()).done; s++) d(r, s, f ? v(i, a, [e.value, s], !0) : e.value);
                return r.length = s, r
            }
        })
    }, {141: 141, 142: 142, 153: 153, 53: 53, 54: 54, 62: 62, 78: 78, 83: 83, 86: 86}],
    162: [function (t, n, r) {
        "use strict";
        var e = t(62), i = t(41)(!1), o = [].indexOf, u = !!o && 1 / [1].indexOf(1, -0) < 0;
        e(e.P + e.F * (u || !t(128)(o)), "Array", {
            indexOf: function indexOf(t) {
                return u ? o.apply(this, arguments) || 0 : i(this, t, arguments[1])
            }
        })
    }, {128: 128, 41: 41, 62: 62}],
    163: [function (t, n, r) {
        var e = t(62);
        e(e.S, "Array", {isArray: t(79)})
    }, {62: 62, 79: 79}],
    164: [function (t, n, r) {
        "use strict";
        var e = t(35), i = t(87), o = t(88), u = t(140);
        n.exports = t(85)(Array, "Array", function (t, n) {
            this._t = u(t), this._i = 0, this._k = n
        }, function () {
            var t = this._t, n = this._k, r = this._i++;
            return !t || r >= t.length ? (this._t = void 0, i(1)) : i(0, "keys" == n ? r : "values" == n ? t[r] : [r, t[r]])
        }, "values"), o.Arguments = o.Array, e("keys"), e("values"), e("entries")
    }, {140: 140, 35: 35, 85: 85, 87: 87, 88: 88}],
    165: [function (t, n, r) {
        "use strict";
        var e = t(62), i = t(140), o = [].join;
        e(e.P + e.F * (t(77) != Object || !t(128)(o)), "Array", {
            join: function join(t) {
                return o.call(i(this), void 0 === t ? "," : t)
            }
        })
    }, {128: 128, 140: 140, 62: 62, 77: 77}],
    166: [function (t, n, r) {
        "use strict";
        var e = t(62), i = t(140), o = t(139), u = t(141), c = [].lastIndexOf,
            a = !!c && 1 / [1].lastIndexOf(1, -0) < 0;
        e(e.P + e.F * (a || !t(128)(c)), "Array", {
            lastIndexOf: function lastIndexOf(t) {
                if (a) return c.apply(this, arguments) || 0;
                var n = i(this), r = u(n.length), e = r - 1;
                for (1 < arguments.length && (e = Math.min(e, o(arguments[1]))), e < 0 && (e = r + e); 0 <= e; e--) if (e in n && n[e] === t) return e || 0;
                return -1
            }
        })
    }, {128: 128, 139: 139, 140: 140, 141: 141, 62: 62}],
    167: [function (t, n, r) {
        "use strict";
        var e = t(62), i = t(42)(1);
        e(e.P + e.F * !t(128)([].map, !0), "Array", {
            map: function map(t) {
                return i(this, t, arguments[1])
            }
        })
    }, {128: 128, 42: 42, 62: 62}],
    168: [function (t, n, r) {
        "use strict";
        var e = t(62), i = t(53);
        e(e.S + e.F * t(64)(function () {
            function F() {
            }

            return !(Array.of.call(F) instanceof F)
        }), "Array", {
            of: function of() {
                for (var t = 0, n = arguments.length, r = new ("function" == typeof this ? this : Array)(n); t < n;) i(r, t, arguments[t++]);
                return r.length = n, r
            }
        })
    }, {53: 53, 62: 62, 64: 64}],
    169: [function (t, n, r) {
        "use strict";
        var e = t(62), i = t(43);
        e(e.P + e.F * !t(128)([].reduceRight, !0), "Array", {
            reduceRight: function reduceRight(t) {
                return i(this, t, arguments.length, arguments[1], !0)
            }
        })
    }, {128: 128, 43: 43, 62: 62}],
    170: [function (t, n, r) {
        "use strict";
        var e = t(62), i = t(43);
        e(e.P + e.F * !t(128)([].reduce, !0), "Array", {
            reduce: function reduce(t) {
                return i(this, t, arguments.length, arguments[1], !1)
            }
        })
    }, {128: 128, 43: 43, 62: 62}],
    171: [function (t, n, r) {
        "use strict";
        var e = t(62), i = t(73), f = t(48), s = t(137), l = t(141), h = [].slice;
        e(e.P + e.F * t(64)(function () {
            i && h.call(i)
        }), "Array", {
            slice: function slice(t, n) {
                var r = l(this.length), e = f(this);
                if (n = void 0 === n ? r : n, "Array" == e) return h.call(this, t, n);
                for (var i = s(t, r), o = s(n, r), u = l(o - i), c = new Array(u), a = 0; a < u; a++) c[a] = "String" == e ? this.charAt(i + a) : this[i + a];
                return c
            }
        })
    }, {137: 137, 141: 141, 48: 48, 62: 62, 64: 64, 73: 73}],
    172: [function (t, n, r) {
        "use strict";
        var e = t(62), i = t(42)(3);
        e(e.P + e.F * !t(128)([].some, !0), "Array", {
            some: function some(t) {
                return i(this, t, arguments[1])
            }
        })
    }, {128: 128, 42: 42, 62: 62}],
    173: [function (t, n, r) {
        "use strict";
        var e = t(62), i = t(33), o = t(142), u = t(64), c = [].sort, a = [1, 2, 3];
        e(e.P + e.F * (u(function () {
            a.sort(void 0)
        }) || !u(function () {
            a.sort(null)
        }) || !t(128)(c)), "Array", {
            sort: function sort(t) {
                return void 0 === t ? c.call(o(this)) : c.call(o(this), i(t))
            }
        })
    }, {128: 128, 142: 142, 33: 33, 62: 62, 64: 64}],
    174: [function (t, n, r) {
        t(123)("Array")
    }, {123: 123}],
    175: [function (t, n, r) {
        var e = t(62);
        e(e.S, "Date", {
            now: function () {
                return (new Date).getTime()
            }
        })
    }, {62: 62}],
    176: [function (t, n, r) {
        var e = t(62), i = t(55);
        e(e.P + e.F * (Date.prototype.toISOString !== i), "Date", {toISOString: i})
    }, {55: 55, 62: 62}],
    177: [function (t, n, r) {
        "use strict";
        var e = t(62), i = t(142), o = t(143);
        e(e.P + e.F * t(64)(function () {
            return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
                toISOString: function () {
                    return 1
                }
            })
        }), "Date", {
            toJSON: function toJSON(t) {
                var n = i(this), r = o(n);
                return "number" != typeof r || isFinite(r) ? n.toISOString() : null
            }
        })
    }, {142: 142, 143: 143, 62: 62, 64: 64}],
    178: [function (t, n, r) {
        var e = t(152)("toPrimitive"), i = Date.prototype;
        e in i || t(72)(i, e, t(56))
    }, {152: 152, 56: 56, 72: 72}],
    179: [function (t, n, r) {
        var e = Date.prototype, i = "Invalid Date", o = "toString", u = e[o], c = e.getTime;
        new Date(NaN) + "" != i && t(118)(e, o, function toString() {
            var t = c.call(this);
            return t == t ? u.call(this) : i
        })
    }, {118: 118}],
    180: [function (t, n, r) {
        var e = t(62);
        e(e.P, "Function", {bind: t(46)})
    }, {46: 46, 62: 62}],
    181: [function (t, n, r) {
        "use strict";
        var e = t(81), i = t(105), o = t(152)("hasInstance"), u = Function.prototype;
        o in u || t(99).f(u, o, {
            value: function (t) {
                if ("function" != typeof this || !e(t)) return !1;
                if (!e(this.prototype)) return t instanceof this;
                for (; t = i(t);) if (this.prototype === t) return !0;
                return !1
            }
        })
    }, {105: 105, 152: 152, 81: 81, 99: 99}],
    182: [function (t, n, r) {
        var e = t(99).f, i = Function.prototype, o = /^\s*function ([^ (]*)/;
        "name" in i || t(58) && e(i, "name", {
            configurable: !0, get: function () {
                try {
                    return ("" + this).match(o)[1]
                } catch (t) {
                    return ""
                }
            }
        })
    }, {58: 58, 99: 99}],
    183: [function (t, n, r) {
        "use strict";
        var e = t(49), i = t(149);
        n.exports = t(51)("Map", function (t) {
            return function Map() {
                return t(this, 0 < arguments.length ? arguments[0] : void 0)
            }
        }, {
            get: function get(t) {
                var n = e.getEntry(i(this, "Map"), t);
                return n && n.v
            }, set: function set(t, n) {
                return e.def(i(this, "Map"), 0 === t ? 0 : t, n)
            }
        }, e, !0)
    }, {149: 149, 49: 49, 51: 51}],
    184: [function (t, n, r) {
        var e = t(62), i = t(92), o = Math.sqrt, u = Math.acosh;
        e(e.S + e.F * !(u && 710 == Math.floor(u(Number.MAX_VALUE)) && u(1 / 0) == 1 / 0), "Math", {
            acosh: function acosh(t) {
                return (t = +t) < 1 ? NaN : 94906265.62425156 < t ? Math.log(t) + Math.LN2 : i(t - 1 + o(t - 1) * o(t + 1))
            }
        })
    }, {62: 62, 92: 92}],
    185: [function (t, n, r) {
        var e = t(62), i = Math.asinh;
        e(e.S + e.F * !(i && 0 < 1 / i(0)), "Math", {
            asinh: function asinh(t) {
                return isFinite(t = +t) && 0 != t ? t < 0 ? -asinh(-t) : Math.log(t + Math.sqrt(t * t + 1)) : t
            }
        })
    }, {62: 62}],
    186: [function (t, n, r) {
        var e = t(62), i = Math.atanh;
        e(e.S + e.F * !(i && 1 / i(-0) < 0), "Math", {
            atanh: function atanh(t) {
                return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2
            }
        })
    }, {62: 62}],
    187: [function (t, n, r) {
        var e = t(62), i = t(93);
        e(e.S, "Math", {
            cbrt: function cbrt(t) {
                return i(t = +t) * Math.pow(Math.abs(t), 1 / 3)
            }
        })
    }, {62: 62, 93: 93}],
    188: [function (t, n, r) {
        var e = t(62);
        e(e.S, "Math", {
            clz32: function clz32(t) {
                return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32
            }
        })
    }, {62: 62}],
    189: [function (t, n, r) {
        var e = t(62), i = Math.exp;
        e(e.S, "Math", {
            cosh: function cosh(t) {
                return (i(t = +t) + i(-t)) / 2
            }
        })
    }, {62: 62}],
    190: [function (t, n, r) {
        var e = t(62), i = t(90);
        e(e.S + e.F * (i != Math.expm1), "Math", {expm1: i})
    }, {62: 62, 90: 90}],
    191: [function (t, n, r) {
        var e = t(62);
        e(e.S, "Math", {fround: t(91)})
    }, {62: 62, 91: 91}],
    192: [function (t, n, r) {
        var e = t(62), a = Math.abs;
        e(e.S, "Math", {
            hypot: function hypot(t, n) {
                for (var r, e, i = 0, o = 0, u = arguments.length, c = 0; o < u;) c < (r = a(arguments[o++])) ? (i = i * (e = c / r) * e + 1, c = r) : i += 0 < r ? (e = r / c) * e : r;
                return c === 1 / 0 ? 1 / 0 : c * Math.sqrt(i)
            }
        })
    }, {62: 62}],
    193: [function (t, n, r) {
        var e = t(62), i = Math.imul;
        e(e.S + e.F * t(64)(function () {
            return -5 != i(4294967295, 5) || 2 != i.length
        }), "Math", {
            imul: function imul(t, n) {
                var r = 65535, e = +t, i = +n, o = r & e, u = r & i;
                return 0 | o * u + ((r & e >>> 16) * u + o * (r & i >>> 16) << 16 >>> 0)
            }
        })
    }, {62: 62, 64: 64}],
    194: [function (t, n, r) {
        var e = t(62);
        e(e.S, "Math", {
            log10: function log10(t) {
                return Math.log(t) * Math.LOG10E
            }
        })
    }, {62: 62}],
    195: [function (t, n, r) {
        var e = t(62);
        e(e.S, "Math", {log1p: t(92)})
    }, {62: 62, 92: 92}],
    196: [function (t, n, r) {
        var e = t(62);
        e(e.S, "Math", {
            log2: function log2(t) {
                return Math.log(t) / Math.LN2
            }
        })
    }, {62: 62}],
    197: [function (t, n, r) {
        var e = t(62);
        e(e.S, "Math", {sign: t(93)})
    }, {62: 62, 93: 93}],
    198: [function (t, n, r) {
        var e = t(62), i = t(90), o = Math.exp;
        e(e.S + e.F * t(64)(function () {
            return -2e-17 != !Math.sinh(-2e-17)
        }), "Math", {
            sinh: function sinh(t) {
                return Math.abs(t = +t) < 1 ? (i(t) - i(-t)) / 2 : (o(t - 1) - o(-t - 1)) * (Math.E / 2)
            }
        })
    }, {62: 62, 64: 64, 90: 90}],
    199: [function (t, n, r) {
        var e = t(62), i = t(90), o = Math.exp;
        e(e.S, "Math", {
            tanh: function tanh(t) {
                var n = i(t = +t), r = i(-t);
                return n == 1 / 0 ? 1 : r == 1 / 0 ? -1 : (n - r) / (o(t) + o(-t))
            }
        })
    }, {62: 62, 90: 90}],
    200: [function (t, n, r) {
        var e = t(62);
        e(e.S, "Math", {
            trunc: function trunc(t) {
                return (0 < t ? Math.floor : Math.ceil)(t)
            }
        })
    }, {62: 62}],
    201: [function (t, n, r) {
        "use strict";

        function EN(t) {
            var n = s(t, !1);
            if ("string" == typeof n && 2 < n.length) {
                var r, e, i, o = (n = x ? n.trim() : h(n, 3)).charCodeAt(0);
                if (43 === o || 45 === o) {
                    if (88 === (r = n.charCodeAt(2)) || 120 === r) return NaN
                } else if (48 === o) {
                    switch (n.charCodeAt(1)) {
                        case 66:
                        case 98:
                            e = 2, i = 49;
                            break;
                        case 79:
                        case 111:
                            e = 8, i = 55;
                            break;
                        default:
                            return +n
                    }
                    for (var u, c = n.slice(2), a = 0, f = c.length; a < f; a++) if ((u = c.charCodeAt(a)) < 48 || i < u) return NaN;
                    return parseInt(c, e)
                }
            }
            return +n
        }

        var e = t(70), i = t(71), o = t(48), u = t(75), s = t(143), c = t(64), a = t(103).f, f = t(101).f, l = t(99).f,
            h = t(134).trim, p = "Number", v = e[p], g = v, y = v.prototype, d = o(t(98)(y)) == p,
            x = "trim" in String.prototype;
        if (!v(" 0o1") || !v("0b1") || v("+0x1")) {
            v = function Number(t) {
                var n = arguments.length < 1 ? 0 : t, r = this;
                return r instanceof v && (d ? c(function () {
                    y.valueOf.call(r)
                }) : o(r) != p) ? u(new g(EN(n)), r, v) : EN(n)
            };
            for (var m, S = t(58) ? a(g) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), b = 0; S.length > b; b++) i(g, m = S[b]) && !i(v, m) && l(v, m, f(g, m));
            (v.prototype = y).constructor = v, t(118)(e, p, v)
        }
    }, {
        101: 101,
        103: 103,
        118: 118,
        134: 134,
        143: 143,
        48: 48,
        58: 58,
        64: 64,
        70: 70,
        71: 71,
        75: 75,
        98: 98,
        99: 99
    }],
    202: [function (t, n, r) {
        var e = t(62);
        e(e.S, "Number", {EPSILON: Math.pow(2, -52)})
    }, {62: 62}],
    203: [function (t, n, r) {
        var e = t(62), i = t(70).isFinite;
        e(e.S, "Number", {
            isFinite: function isFinite(t) {
                return "number" == typeof t && i(t)
            }
        })
    }, {62: 62, 70: 70}],
    204: [function (t, n, r) {
        var e = t(62);
        e(e.S, "Number", {isInteger: t(80)})
    }, {62: 62, 80: 80}],
    205: [function (t, n, r) {
        var e = t(62);
        e(e.S, "Number", {
            isNaN: function isNaN(t) {
                return t != t
            }
        })
    }, {62: 62}],
    206: [function (t, n, r) {
        var e = t(62), i = t(80), o = Math.abs;
        e(e.S, "Number", {
            isSafeInteger: function isSafeInteger(t) {
                return i(t) && o(t) <= 9007199254740991
            }
        })
    }, {62: 62, 80: 80}],
    207: [function (t, n, r) {
        var e = t(62);
        e(e.S, "Number", {MAX_SAFE_INTEGER: 9007199254740991})
    }, {62: 62}],
    208: [function (t, n, r) {
        var e = t(62);
        e(e.S, "Number", {MIN_SAFE_INTEGER: -9007199254740991})
    }, {62: 62}],
    209: [function (t, n, r) {
        var e = t(62), i = t(112);
        e(e.S + e.F * (Number.parseFloat != i), "Number", {parseFloat: i})
    }, {112: 112, 62: 62}],
    210: [function (t, n, r) {
        var e = t(62), i = t(113);
        e(e.S + e.F * (Number.parseInt != i), "Number", {parseInt: i})
    }, {113: 113, 62: 62}],
    211: [function (t, n, r) {
        "use strict";

        function XO(t, n) {
            for (var r = -1, e = n; ++r < 6;) e += t * u[r], u[r] = e % 1e7, e = o(e / 1e7)
        }

        function YO(t) {
            for (var n = 6, r = 0; 0 <= --n;) r += u[n], u[n] = o(r / t), r = r % t * 1e7
        }

        function ZO() {
            for (var t = 6, n = ""; 0 <= --t;) if ("" !== n || 0 === t || 0 !== u[t]) {
                var r = String(u[t]);
                n = "" === n ? r : n + l.call("0", 7 - r.length) + r
            }
            return n
        }

        var e = t(62), f = t(139), s = t(34), l = t(133), i = 1..toFixed, o = Math.floor, u = [0, 0, 0, 0, 0, 0],
            h = "Number.toFixed: incorrect invocation!", p = function (t, n, r) {
                return 0 === n ? r : n % 2 == 1 ? p(t, n - 1, r * t) : p(t * t, n / 2, r)
            };
        e(e.P + e.F * (!!i && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !t(64)(function () {
            i.call({})
        })), "Number", {
            toFixed: function toFixed(t) {
                var n, r, e, i, o = s(this, h), u = f(t), c = "", a = "0";
                if (u < 0 || 20 < u) throw RangeError(h);
                if (o != o) return "NaN";
                if (o <= -1e21 || 1e21 <= o) return String(o);
                if (o < 0 && (c = "-", o = -o), 1e-21 < o) if (r = (n = function (t) {
                    for (var n = 0, r = t; 4096 <= r;) n += 12, r /= 4096;
                    for (; 2 <= r;) n += 1, r /= 2;
                    return n
                }(o * p(2, 69, 1)) - 69) < 0 ? o * p(2, -n, 1) : o / p(2, n, 1), r *= 4503599627370496, 0 < (n = 52 - n)) {
                    for (XO(0, r), e = u; 7 <= e;) XO(1e7, 0), e -= 7;
                    for (XO(p(10, e, 1), 0), e = n - 1; 23 <= e;) YO(1 << 23), e -= 23;
                    YO(1 << e), XO(1, 1), YO(2), a = ZO()
                } else XO(0, r), XO(1 << -n, 0), a = ZO() + l.call("0", u);
                return a = 0 < u ? c + ((i = a.length) <= u ? "0." + l.call("0", u - i) + a : a.slice(0, i - u) + "." + a.slice(i - u)) : c + a
            }
        })
    }, {133: 133, 139: 139, 34: 34, 62: 62, 64: 64}],
    212: [function (t, n, r) {
        "use strict";
        var e = t(62), i = t(64), o = t(34), u = 1..toPrecision;
        e(e.P + e.F * (i(function () {
            return "1" !== u.call(1, void 0)
        }) || !i(function () {
            u.call({})
        })), "Number", {
            toPrecision: function toPrecision(t) {
                var n = o(this, "Number#toPrecision: incorrect invocation!");
                return void 0 === t ? u.call(n) : u.call(n, t)
            }
        })
    }, {34: 34, 62: 62, 64: 64}],
    213: [function (t, n, r) {
        var e = t(62);
        e(e.S + e.F, "Object", {assign: t(97)})
    }, {62: 62, 97: 97}],
    214: [function (t, n, r) {
        var e = t(62);
        e(e.S, "Object", {create: t(98)})
    }, {62: 62, 98: 98}],
    215: [function (t, n, r) {
        var e = t(62);
        e(e.S + e.F * !t(58), "Object", {defineProperties: t(100)})
    }, {100: 100, 58: 58, 62: 62}],
    216: [function (t, n, r) {
        var e = t(62);
        e(e.S + e.F * !t(58), "Object", {defineProperty: t(99).f})
    }, {58: 58, 62: 62, 99: 99}],
    217: [function (t, n, r) {
        var e = t(81), i = t(94).onFreeze;
        t(109)("freeze", function (n) {
            return function freeze(t) {
                return n && e(t) ? n(i(t)) : t
            }
        })
    }, {109: 109, 81: 81, 94: 94}],
    218: [function (t, n, r) {
        var e = t(140), i = t(101).f;
        t(109)("getOwnPropertyDescriptor", function () {
            return function getOwnPropertyDescriptor(t, n) {
                return i(e(t), n)
            }
        })
    }, {101: 101, 109: 109, 140: 140}],
    219: [function (t, n, r) {
        t(109)("getOwnPropertyNames", function () {
            return t(102).f
        })
    }, {102: 102, 109: 109}],
    220: [function (t, n, r) {
        var e = t(142), i = t(105);
        t(109)("getPrototypeOf", function () {
            return function getPrototypeOf(t) {
                return i(e(t))
            }
        })
    }, {105: 105, 109: 109, 142: 142}],
    221: [function (t, n, r) {
        var e = t(81);
        t(109)("isExtensible", function (n) {
            return function isExtensible(t) {
                return !!e(t) && (!n || n(t))
            }
        })
    }, {109: 109, 81: 81}],
    222: [function (t, n, r) {
        var e = t(81);
        t(109)("isFrozen", function (n) {
            return function isFrozen(t) {
                return !e(t) || !!n && n(t)
            }
        })
    }, {109: 109, 81: 81}],
    223: [function (t, n, r) {
        var e = t(81);
        t(109)("isSealed", function (n) {
            return function isSealed(t) {
                return !e(t) || !!n && n(t)
            }
        })
    }, {109: 109, 81: 81}],
    224: [function (t, n, r) {
        var e = t(62);
        e(e.S, "Object", {is: t(121)})
    }, {121: 121, 62: 62}],
    225: [function (t, n, r) {
        var e = t(142), i = t(107);
        t(109)("keys", function () {
            return function keys(t) {
                return i(e(t))
            }
        })
    }, {107: 107, 109: 109, 142: 142}],
    226: [function (t, n, r) {
        var e = t(81), i = t(94).onFreeze;
        t(109)("preventExtensions", function (n) {
            return function preventExtensions(t) {
                return n && e(t) ? n(i(t)) : t
            }
        })
    }, {109: 109, 81: 81, 94: 94}],
    227: [function (t, n, r) {
        var e = t(81), i = t(94).onFreeze;
        t(109)("seal", function (n) {
            return function seal(t) {
                return n && e(t) ? n(i(t)) : t
            }
        })
    }, {109: 109, 81: 81, 94: 94}],
    228: [function (t, n, r) {
        var e = t(62);
        e(e.S, "Object", {setPrototypeOf: t(122).set})
    }, {122: 122, 62: 62}],
    229: [function (t, n, r) {
        "use strict";
        var e = t(47), i = {};
        i[t(152)("toStringTag")] = "z", i + "" != "[object z]" && t(118)(Object.prototype, "toString", function toString() {
            return "[object " + e(this) + "]"
        }, !0)
    }, {118: 118, 152: 152, 47: 47}],
    230: [function (t, n, r) {
        var e = t(62), i = t(112);
        e(e.G + e.F * (parseFloat != i), {parseFloat: i})
    }, {112: 112, 62: 62}],
    231: [function (t, n, r) {
        var e = t(62), i = t(113);
        e(e.G + e.F * (parseInt != i), {parseInt: i})
    }, {113: 113, 62: 62}],
    232: [function (r, t, n) {
        "use strict";

        function $R() {
        }

        function fS(t) {
            var n;
            return !(!h(t) || "function" != typeof (n = t.then)) && n
        }

        function gS(s, r) {
            if (!s._n) {
                s._n = !0;
                var e = s._c;
                x(function () {
                    for (var a = s._v, f = 1 == s._s, t = 0, n = function (t) {
                        var n, r, e, i = f ? t.ok : t.fail, o = t.resolve, u = t.reject, c = t.domain;
                        try {
                            i ? (f || (2 == s._h && R(s), s._h = 1), !0 === i ? n = a : (c && c.enter(), n = i(a), c && (c.exit(), e = !0)), n === t.promise ? u(E("Promise-chain cycle")) : (r = fS(n)) ? r.call(n, o, u) : o(n)) : u(a)
                        } catch (t) {
                            c && !e && c.exit(), u(t)
                        }
                    }; e.length > t;) n(e[t++]);
                    s._c = [], s._n = !1, r && !s._h && N(s)
                })
            }
        }

        function kS(t) {
            var n = this;
            n._d || (n._d = !0, (n = n._w || n)._v = t, n._s = 2, n._a || (n._a = n._c.slice()), gS(n, !0))
        }

        var e, i, o, u, c = r(89), a = r(70), f = r(54), s = r(47), l = r(62), h = r(81), p = r(33), v = r(37),
            g = r(68), y = r(127), d = r(136).set, x = r(95)(), m = r(96), S = r(114), b = r(148), w = r(115),
            _ = "Promise", E = a.TypeError, O = a.process, F = O && O.versions, I = F && F.v8 || "", P = a[_],
            A = "process" == s(O), M = i = m.f, k = !!function () {
                try {
                    var t = P.resolve(1), n = (t.constructor = {})[r(152)("species")] = function (t) {
                        t($R, $R)
                    };
                    return (A || "function" == typeof PromiseRejectionEvent) && t.then($R) instanceof n && 0 !== I.indexOf("6.6") && -1 === b.indexOf("Chrome/66")
                } catch (t) {
                }
            }(), N = function (o) {
                d.call(a, function () {
                    var t, n, r, e = o._v, i = j(o);
                    if (i && (t = S(function () {
                        A ? O.emit("unhandledRejection", e, o) : (n = a.onunhandledrejection) ? n({
                            promise: o,
                            reason: e
                        }) : (r = a.console) && r.error && r.error("Unhandled promise rejection", e)
                    }), o._h = A || j(o) ? 2 : 1), o._a = void 0, i && t.e) throw t.v
                })
            }, j = function (t) {
                return 1 !== t._h && 0 === (t._a || t._c).length
            }, R = function (n) {
                d.call(a, function () {
                    var t;
                    A ? O.emit("rejectionHandled", n) : (t = a.onrejectionhandled) && t({promise: n, reason: n._v})
                })
            }, T = function (t) {
                var r, e = this;
                if (!e._d) {
                    e._d = !0, e = e._w || e;
                    try {
                        if (e === t) throw E("Promise can't be resolved itself");
                        (r = fS(t)) ? x(function () {
                            var n = {_w: e, _d: !1};
                            try {
                                r.call(t, f(T, n, 1), f(kS, n, 1))
                            } catch (t) {
                                kS.call(n, t)
                            }
                        }) : (e._v = t, e._s = 1, gS(e, !1))
                    } catch (t) {
                        kS.call({_w: e, _d: !1}, t)
                    }
                }
            };
        k || (P = function Promise(t) {
            v(this, P, _, "_h"), p(t), e.call(this);
            try {
                t(f(T, this, 1), f(kS, this, 1))
            } catch (t) {
                kS.call(this, t)
            }
        }, (e = function Promise(t) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }).prototype = r(117)(P.prototype, {
            then: function then(t, n) {
                var r = M(y(this, P));
                return r.ok = "function" != typeof t || t, r.fail = "function" == typeof n && n, r.domain = A ? O.domain : void 0, this._c.push(r), this._a && this._a.push(r), this._s && gS(this, !1), r.promise
            }, catch: function (t) {
                return this.then(void 0, t)
            }
        }), o = function () {
            var t = new e;
            this.promise = t, this.resolve = f(T, t, 1), this.reject = f(kS, t, 1)
        }, m.f = M = function (t) {
            return t === P || t === u ? new o(t) : i(t)
        }), l(l.G + l.W + l.F * !k, {Promise: P}), r(124)(P, _), r(123)(_), u = r(52)[_], l(l.S + l.F * !k, _, {
            reject: function reject(t) {
                var n = M(this);
                return (0, n.reject)(t), n.promise
            }
        }), l(l.S + l.F * (c || !k), _, {
            resolve: function resolve(t) {
                return w(c && this === u ? P : this, t)
            }
        }), l(l.S + l.F * !(k && r(86)(function (t) {
            P.all(t).catch($R)
        })), _, {
            all: function all(t) {
                var u = this, n = M(u), c = n.resolve, a = n.reject, r = S(function () {
                    var e = [], i = 0, o = 1;
                    g(t, !1, function (t) {
                        var n = i++, r = !1;
                        e.push(void 0), o++, u.resolve(t).then(function (t) {
                            r || (r = !0, e[n] = t, --o || c(e))
                        }, a)
                    }), --o || c(e)
                });
                return r.e && a(r.v), n.promise
            }, race: function race(t) {
                var n = this, r = M(n), e = r.reject, i = S(function () {
                    g(t, !1, function (t) {
                        n.resolve(t).then(r.resolve, e)
                    })
                });
                return i.e && e(i.v), r.promise
            }
        })
    }, {
        114: 114,
        115: 115,
        117: 117,
        123: 123,
        124: 124,
        127: 127,
        136: 136,
        148: 148,
        152: 152,
        33: 33,
        37: 37,
        47: 47,
        52: 52,
        54: 54,
        62: 62,
        68: 68,
        70: 70,
        81: 81,
        86: 86,
        89: 89,
        95: 95,
        96: 96
    }],
    233: [function (t, n, r) {
        var e = t(62), o = t(33), u = t(38), c = (t(70).Reflect || {}).apply, a = Function.apply;
        e(e.S + e.F * !t(64)(function () {
            c(function () {
            })
        }), "Reflect", {
            apply: function apply(t, n, r) {
                var e = o(t), i = u(r);
                return c ? c(e, n, i) : a.call(e, n, i)
            }
        })
    }, {33: 33, 38: 38, 62: 62, 64: 64, 70: 70}],
    234: [function (t, n, r) {
        var e = t(62), c = t(98), a = t(33), f = t(38), s = t(81), i = t(64), l = t(46),
            h = (t(70).Reflect || {}).construct, p = i(function () {
                function F() {
                }

                return !(h(function () {
                }, [], F) instanceof F)
            }), v = !i(function () {
                h(function () {
                })
            });
        e(e.S + e.F * (p || v), "Reflect", {
            construct: function construct(t, n) {
                a(t), f(n);
                var r = arguments.length < 3 ? t : a(arguments[2]);
                if (v && !p) return h(t, n, r);
                if (t == r) {
                    switch (n.length) {
                        case 0:
                            return new t;
                        case 1:
                            return new t(n[0]);
                        case 2:
                            return new t(n[0], n[1]);
                        case 3:
                            return new t(n[0], n[1], n[2]);
                        case 4:
                            return new t(n[0], n[1], n[2], n[3])
                    }
                    var e = [null];
                    return e.push.apply(e, n), new (l.apply(t, e))
                }
                var i = r.prototype, o = c(s(i) ? i : Object.prototype), u = Function.apply.call(t, o, n);
                return s(u) ? u : o
            }
        })
    }, {33: 33, 38: 38, 46: 46, 62: 62, 64: 64, 70: 70, 81: 81, 98: 98}],
    235: [function (t, n, r) {
        var e = t(99), i = t(62), o = t(38), u = t(143);
        i(i.S + i.F * t(64)(function () {
            Reflect.defineProperty(e.f({}, 1, {value: 1}), 1, {value: 2})
        }), "Reflect", {
            defineProperty: function defineProperty(t, n, r) {
                o(t), n = u(n, !0), o(r);
                try {
                    return e.f(t, n, r), !0
                } catch (t) {
                    return !1
                }
            }
        })
    }, {143: 143, 38: 38, 62: 62, 64: 64, 99: 99}],
    236: [function (t, n, r) {
        var e = t(62), i = t(101).f, o = t(38);
        e(e.S, "Reflect", {
            deleteProperty: function deleteProperty(t, n) {
                var r = i(o(t), n);
                return !(r && !r.configurable) && delete t[n]
            }
        })
    }, {101: 101, 38: 38, 62: 62}],
    237: [function (t, n, r) {
        "use strict";

        function IU(t) {
            this._t = i(t), this._i = 0;
            var n, r = this._k = [];
            for (n in t) r.push(n)
        }

        var e = t(62), i = t(38);
        t(84)(IU, "Object", function () {
            var t, n = this._k;
            do {
                if (this._i >= n.length) return {value: void 0, done: !0}
            } while (!((t = n[this._i++]) in this._t));
            return {value: t, done: !1}
        }), e(e.S, "Reflect", {
            enumerate: function enumerate(t) {
                return new IU(t)
            }
        })
    }, {38: 38, 62: 62, 84: 84}],
    238: [function (t, n, r) {
        var e = t(101), i = t(62), o = t(38);
        i(i.S, "Reflect", {
            getOwnPropertyDescriptor: function getOwnPropertyDescriptor(t, n) {
                return e.f(o(t), n)
            }
        })
    }, {101: 101, 38: 38, 62: 62}],
    239: [function (t, n, r) {
        var e = t(62), i = t(105), o = t(38);
        e(e.S, "Reflect", {
            getPrototypeOf: function getPrototypeOf(t) {
                return i(o(t))
            }
        })
    }, {105: 105, 38: 38, 62: 62}],
    240: [function (t, n, r) {
        var o = t(101), u = t(105), c = t(71), e = t(62), a = t(81), f = t(38);
        e(e.S, "Reflect", {
            get: function get(t, n) {
                var r, e, i = arguments.length < 3 ? t : arguments[2];
                return f(t) === i ? t[n] : (r = o.f(t, n)) ? c(r, "value") ? r.value : void 0 !== r.get ? r.get.call(i) : void 0 : a(e = u(t)) ? get(e, n, i) : void 0
            }
        })
    }, {101: 101, 105: 105, 38: 38, 62: 62, 71: 71, 81: 81}],
    241: [function (t, n, r) {
        var e = t(62);
        e(e.S, "Reflect", {
            has: function has(t, n) {
                return n in t
            }
        })
    }, {62: 62}],
    242: [function (t, n, r) {
        var e = t(62), i = t(38), o = Object.isExtensible;
        e(e.S, "Reflect", {
            isExtensible: function isExtensible(t) {
                return i(t), !o || o(t)
            }
        })
    }, {38: 38, 62: 62}],
    243: [function (t, n, r) {
        var e = t(62);
        e(e.S, "Reflect", {ownKeys: t(111)})
    }, {111: 111, 62: 62}],
    244: [function (t, n, r) {
        var e = t(62), i = t(38), o = Object.preventExtensions;
        e(e.S, "Reflect", {
            preventExtensions: function preventExtensions(t) {
                i(t);
                try {
                    return o && o(t), !0
                } catch (t) {
                    return !1
                }
            }
        })
    }, {38: 38, 62: 62}],
    245: [function (t, n, r) {
        var e = t(62), i = t(122);
        i && e(e.S, "Reflect", {
            setPrototypeOf: function setPrototypeOf(t, n) {
                i.check(t, n);
                try {
                    return i.set(t, n), !0
                } catch (t) {
                    return !1
                }
            }
        })
    }, {122: 122, 62: 62}],
    246: [function (t, n, r) {
        var c = t(99), a = t(101), f = t(105), s = t(71), e = t(62), l = t(116), h = t(38), p = t(81);
        e(e.S, "Reflect", {
            set: function set(t, n, r) {
                var e, i, o = arguments.length < 4 ? t : arguments[3], u = a.f(h(t), n);
                if (!u) {
                    if (p(i = f(t))) return set(i, n, r, o);
                    u = l(0)
                }
                if (s(u, "value")) {
                    if (!1 === u.writable || !p(o)) return !1;
                    if (e = a.f(o, n)) {
                        if (e.get || e.set || !1 === e.writable) return !1;
                        e.value = r, c.f(o, n, e)
                    } else c.f(o, n, l(0, r));
                    return !0
                }
                return void 0 !== u.set && (u.set.call(o, r), !0)
            }
        })
    }, {101: 101, 105: 105, 116: 116, 38: 38, 62: 62, 71: 71, 81: 81, 99: 99}],
    247: [function (t, n, r) {
        var e = t(70), o = t(75), i = t(99).f, u = t(103).f, c = t(82), a = t(66), f = e.RegExp, s = f, l = f.prototype,
            h = /a/g, p = /a/g, v = new f(h) !== h;
        if (t(58) && (!v || t(64)(function () {
            return p[t(152)("match")] = !1, f(h) != h || f(p) == p || "/a/i" != f(h, "i")
        }))) {
            f = function RegExp(t, n) {
                var r = this instanceof f, e = c(t), i = void 0 === n;
                return !r && e && t.constructor === f && i ? t : o(v ? new s(e && !i ? t.source : t, n) : s((e = t instanceof f) ? t.source : t, e && i ? a.call(t) : n), r ? this : l, f)
            };

            function DW(n) {
                n in f || i(f, n, {
                    configurable: !0, get: function () {
                        return s[n]
                    }, set: function (t) {
                        s[n] = t
                    }
                })
            }

            for (var g = u(s), y = 0; g.length > y;) DW(g[y++]);
            (l.constructor = f).prototype = l, t(118)(e, "RegExp", f)
        }
        t(123)("RegExp")
    }, {103: 103, 118: 118, 123: 123, 152: 152, 58: 58, 64: 64, 66: 66, 70: 70, 75: 75, 82: 82, 99: 99}],
    248: [function (t, n, r) {
        "use strict";
        var e = t(120);
        t(62)({target: "RegExp", proto: !0, forced: e !== /./.exec}, {exec: e})
    }, {120: 120, 62: 62}],
    249: [function (t, n, r) {
        t(58) && "g" != /./g.flags && t(99).f(RegExp.prototype, "flags", {configurable: !0, get: t(66)})
    }, {58: 58, 66: 66, 99: 99}],
    250: [function (t, n, r) {
        "use strict";
        var l = t(38), h = t(141), p = t(36), v = t(119);
        t(65)("match", 1, function (e, i, f, s) {
            return [function match(t) {
                var n = e(this), r = null == t ? void 0 : t[i];
                return void 0 !== r ? r.call(t, n) : new RegExp(t)[i](String(n))
            }, function (t) {
                var n = s(f, t, this);
                if (n.done) return n.value;
                var r = l(t), e = String(this);
                if (!r.global) return v(r, e);
                for (var i, o = r.unicode, u = [], c = r.lastIndex = 0; null !== (i = v(r, e));) {
                    var a = String(i[0]);
                    "" === (u[c] = a) && (r.lastIndex = p(e, h(r.lastIndex), o)), c++
                }
                return 0 === c ? null : u
            }]
        })
    }, {119: 119, 141: 141, 36: 36, 38: 38, 65: 65}],
    251: [function (t, n, r) {
        "use strict";
        var _ = t(38), e = t(142), E = t(141), O = t(139), F = t(36), I = t(119), P = Math.max, A = Math.min,
            h = Math.floor, p = /\$([$&`']|\d\d?|<[^>]*>)/g, v = /\$([$&`']|\d\d?)/g;
        t(65)("replace", 2, function (i, o, b, w) {
            return [function replace(t, n) {
                var r = i(this), e = null == t ? void 0 : t[o];
                return void 0 !== e ? e.call(t, r, n) : b.call(String(r), t, n)
            }, function (t, n) {
                var r = w(b, t, this, n);
                if (r.done) return r.value;
                var e = _(t), i = String(this), o = "function" == typeof n;
                o || (n = String(n));
                var u = e.global;
                if (u) {
                    var c = e.unicode;
                    e.lastIndex = 0
                }
                for (var a = []; ;) {
                    var f = I(e, i);
                    if (null === f) break;
                    if (a.push(f), !u) break;
                    "" === String(f[0]) && (e.lastIndex = F(i, E(e.lastIndex), c))
                }
                for (var s, l = "", h = 0, p = 0; p < a.length; p++) {
                    f = a[p];
                    for (var v = String(f[0]), g = P(A(O(f.index), i.length), 0), y = [], d = 1; d < f.length; d++) y.push(void 0 === (s = f[d]) ? s : String(s));
                    var x = f.groups;
                    if (o) {
                        var m = [v].concat(y, g, i);
                        void 0 !== x && m.push(x);
                        var S = String(n.apply(void 0, m))
                    } else S = getSubstitution(v, i, g, y, x, n);
                    h <= g && (l += i.slice(h, g) + S, h = g + v.length)
                }
                return l + i.slice(h)
            }];

            function getSubstitution(o, u, c, a, f, t) {
                var s = c + o.length, l = a.length, n = v;
                return void 0 !== f && (f = e(f), n = p), b.call(t, n, function (t, n) {
                    var r;
                    switch (n.charAt(0)) {
                        case"$":
                            return "$";
                        case"&":
                            return o;
                        case"`":
                            return u.slice(0, c);
                        case"'":
                            return u.slice(s);
                        case"<":
                            r = f[n.slice(1, -1)];
                            break;
                        default:
                            var e = +n;
                            if (0 == e) return t;
                            if (l < e) {
                                var i = h(e / 10);
                                return 0 === i ? t : i <= l ? void 0 === a[i - 1] ? n.charAt(1) : a[i - 1] + n.charAt(1) : t
                            }
                            r = a[e - 1]
                    }
                    return void 0 === r ? "" : r
                })
            }
        })
    }, {119: 119, 139: 139, 141: 141, 142: 142, 36: 36, 38: 38, 65: 65}],
    252: [function (t, n, r) {
        "use strict";
        var a = t(38), f = t(121), s = t(119);
        t(65)("search", 1, function (e, i, u, c) {
            return [function search(t) {
                var n = e(this), r = null == t ? void 0 : t[i];
                return void 0 !== r ? r.call(t, n) : new RegExp(t)[i](String(n))
            }, function (t) {
                var n = c(u, t, this);
                if (n.done) return n.value;
                var r = a(t), e = String(this), i = r.lastIndex;
                f(i, 0) || (r.lastIndex = 0);
                var o = s(r, e);
                return f(r.lastIndex, i) || (r.lastIndex = i), null === o ? -1 : o.index
            }]
        })
    }, {119: 119, 121: 121, 38: 38, 65: 65}],
    253: [function (t, n, r) {
        "use strict";
        var l = t(82), m = t(38), S = t(127), b = t(36), w = t(141), _ = t(119), h = t(120), e = t(64), E = Math.min,
            p = [].push, u = "split", v = "length", g = "lastIndex", O = 4294967295, F = !e(function () {
                RegExp(O, "y")
            });
        t(65)("split", 2, function (i, o, y, d) {
            var x;
            return x = "c" == "abbc"[u](/(b)*/)[1] || 4 != "test"[u](/(?:)/, -1)[v] || 2 != "ab"[u](/(?:ab)*/)[v] || 4 != "."[u](/(.?)(.?)/)[v] || 1 < "."[u](/()()/)[v] || ""[u](/.?/)[v] ? function (t, n) {
                var r = String(this);
                if (void 0 === t && 0 === n) return [];
                if (!l(t)) return y.call(r, t, n);
                for (var e, i, o, u = [], c = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), a = 0, f = void 0 === n ? O : n >>> 0, s = new RegExp(t.source, c + "g"); (e = h.call(s, r)) && !(a < (i = s[g]) && (u.push(r.slice(a, e.index)), 1 < e[v] && e.index < r[v] && p.apply(u, e.slice(1)), o = e[0][v], a = i, u[v] >= f));) s[g] === e.index && s[g]++;
                return a === r[v] ? !o && s.test("") || u.push("") : u.push(r.slice(a)), u[v] > f ? u.slice(0, f) : u
            } : "0"[u](void 0, 0)[v] ? function (t, n) {
                return void 0 === t && 0 === n ? [] : y.call(this, t, n)
            } : y, [function split(t, n) {
                var r = i(this), e = null == t ? void 0 : t[o];
                return void 0 !== e ? e.call(t, r, n) : x.call(String(r), t, n)
            }, function (t, n) {
                var r = d(x, t, this, n, x !== y);
                if (r.done) return r.value;
                var e = m(t), i = String(this), o = S(e, RegExp), u = e.unicode,
                    c = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (F ? "y" : "g"),
                    a = new o(F ? e : "^(?:" + e.source + ")", c), f = void 0 === n ? O : n >>> 0;
                if (0 == f) return [];
                if (0 === i.length) return null === _(a, i) ? [i] : [];
                for (var s = 0, l = 0, h = []; l < i.length;) {
                    a.lastIndex = F ? l : 0;
                    var p, v = _(a, F ? i : i.slice(l));
                    if (null === v || (p = E(w(a.lastIndex + (F ? 0 : l)), i.length)) === s) l = b(i, l, u); else {
                        if (h.push(i.slice(s, l)), h.length === f) return h;
                        for (var g = 1; g <= v.length - 1; g++) if (h.push(v[g]), h.length === f) return h;
                        l = s = p
                    }
                }
                return h.push(i.slice(s)), h
            }]
        })
    }, {119: 119, 120: 120, 127: 127, 141: 141, 36: 36, 38: 38, 64: 64, 65: 65, 82: 82}],
    254: [function (n, t, r) {
        "use strict";
        n(249);

        function XZ(t) {
            n(118)(RegExp.prototype, u, t, !0)
        }

        var e = n(38), i = n(66), o = n(58), u = "toString", c = /./[u];
        n(64)(function () {
            return "/a/b" != c.call({source: "a", flags: "b"})
        }) ? XZ(function toString() {
            var t = e(this);
            return "/".concat(t.source, "/", "flags" in t ? t.flags : !o && t instanceof RegExp ? i.call(t) : void 0)
        }) : c.name != u && XZ(function toString() {
            return c.call(this)
        })
    }, {118: 118, 249: 249, 38: 38, 58: 58, 64: 64, 66: 66}],
    255: [function (t, n, r) {
        "use strict";
        var e = t(49), i = t(149);
        n.exports = t(51)("Set", function (t) {
            return function Set() {
                return t(this, 0 < arguments.length ? arguments[0] : void 0)
            }
        }, {
            add: function add(t) {
                return e.def(i(this, "Set"), t = 0 === t ? 0 : t, t)
            }
        }, e)
    }, {149: 149, 49: 49, 51: 51}],
    256: [function (t, n, r) {
        "use strict";
        t(131)("anchor", function (n) {
            return function anchor(t) {
                return n(this, "a", "name", t)
            }
        })
    }, {131: 131}],
    257: [function (t, n, r) {
        "use strict";
        t(131)("big", function (t) {
            return function big() {
                return t(this, "big", "", "")
            }
        })
    }, {131: 131}],
    258: [function (t, n, r) {
        "use strict";
        t(131)("blink", function (t) {
            return function blink() {
                return t(this, "blink", "", "")
            }
        })
    }, {131: 131}],
    259: [function (t, n, r) {
        "use strict";
        t(131)("bold", function (t) {
            return function bold() {
                return t(this, "b", "", "")
            }
        })
    }, {131: 131}],
    260: [function (t, n, r) {
        "use strict";
        var e = t(62), i = t(129)(!1);
        e(e.P, "String", {
            codePointAt: function codePointAt(t) {
                return i(this, t)
            }
        })
    }, {129: 129, 62: 62}],
    261: [function (t, n, r) {
        "use strict";
        var e = t(62), u = t(141), c = t(130), a = "endsWith", f = ""[a];
        e(e.P + e.F * t(63)(a), "String", {
            endsWith: function endsWith(t) {
                var n = c(this, t, a), r = 1 < arguments.length ? arguments[1] : void 0, e = u(n.length),
                    i = void 0 === r ? e : Math.min(u(r), e), o = String(t);
                return f ? f.call(n, o, i) : n.slice(i - o.length, i) === o
            }
        })
    }, {130: 130, 141: 141, 62: 62, 63: 63}],
    262: [function (t, n, r) {
        "use strict";
        t(131)("fixed", function (t) {
            return function fixed() {
                return t(this, "tt", "", "")
            }
        })
    }, {131: 131}],
    263: [function (t, n, r) {
        "use strict";
        t(131)("fontcolor", function (n) {
            return function fontcolor(t) {
                return n(this, "font", "color", t)
            }
        })
    }, {131: 131}],
    264: [function (t, n, r) {
        "use strict";
        t(131)("fontsize", function (n) {
            return function fontsize(t) {
                return n(this, "font", "size", t)
            }
        })
    }, {131: 131}],
    265: [function (t, n, r) {
        var e = t(62), o = t(137), u = String.fromCharCode, i = String.fromCodePoint;
        e(e.S + e.F * (!!i && 1 != i.length), "String", {
            fromCodePoint: function fromCodePoint(t) {
                for (var n, r = [], e = arguments.length, i = 0; i < e;) {
                    if (n = +arguments[i++], o(n, 1114111) !== n) throw RangeError(n + " is not a valid code point");
                    r.push(n < 65536 ? u(n) : u(55296 + ((n -= 65536) >> 10), n % 1024 + 56320))
                }
                return r.join("")
            }
        })
    }, {137: 137, 62: 62}],
    266: [function (t, n, r) {
        "use strict";
        var e = t(62), i = t(130), o = "includes";
        e(e.P + e.F * t(63)(o), "String", {
            includes: function includes(t) {
                return !!~i(this, t, o).indexOf(t, 1 < arguments.length ? arguments[1] : void 0)
            }
        })
    }, {130: 130, 62: 62, 63: 63}],
    267: [function (t, n, r) {
        "use strict";
        t(131)("italics", function (t) {
            return function italics() {
                return t(this, "i", "", "")
            }
        })
    }, {131: 131}],
    268: [function (t, n, r) {
        "use strict";
        var e = t(129)(!0);
        t(85)(String, "String", function (t) {
            this._t = String(t), this._i = 0
        }, function () {
            var t, n = this._t, r = this._i;
            return r >= n.length ? {value: void 0, done: !0} : (t = e(n, r), this._i += t.length, {value: t, done: !1})
        })
    }, {129: 129, 85: 85}],
    269: [function (t, n, r) {
        "use strict";
        t(131)("link", function (n) {
            return function link(t) {
                return n(this, "a", "href", t)
            }
        })
    }, {131: 131}],
    270: [function (t, n, r) {
        var e = t(62), u = t(140), c = t(141);
        e(e.S, "String", {
            raw: function raw(t) {
                for (var n = u(t.raw), r = c(n.length), e = arguments.length, i = [], o = 0; o < r;) i.push(String(n[o++])), o < e && i.push(String(arguments[o]));
                return i.join("")
            }
        })
    }, {140: 140, 141: 141, 62: 62}],
    271: [function (t, n, r) {
        var e = t(62);
        e(e.P, "String", {repeat: t(133)})
    }, {133: 133, 62: 62}],
    272: [function (t, n, r) {
        "use strict";
        t(131)("small", function (t) {
            return function small() {
                return t(this, "small", "", "")
            }
        })
    }, {131: 131}],
    273: [function (t, n, r) {
        "use strict";
        var e = t(62), i = t(141), o = t(130), u = "startsWith", c = ""[u];
        e(e.P + e.F * t(63)(u), "String", {
            startsWith: function startsWith(t) {
                var n = o(this, t, u), r = i(Math.min(1 < arguments.length ? arguments[1] : void 0, n.length)),
                    e = String(t);
                return c ? c.call(n, e, r) : n.slice(r, r + e.length) === e
            }
        })
    }, {130: 130, 141: 141, 62: 62, 63: 63}],
    274: [function (t, n, r) {
        "use strict";
        t(131)("strike", function (t) {
            return function strike() {
                return t(this, "strike", "", "")
            }
        })
    }, {131: 131}],
    275: [function (t, n, r) {
        "use strict";
        t(131)("sub", function (t) {
            return function sub() {
                return t(this, "sub", "", "")
            }
        })
    }, {131: 131}],
    276: [function (t, n, r) {
        "use strict";
        t(131)("sup", function (t) {
            return function sup() {
                return t(this, "sup", "", "")
            }
        })
    }, {131: 131}],
    277: [function (t, n, r) {
        "use strict";
        t(134)("trim", function (t) {
            return function trim() {
                return t(this, 3)
            }
        })
    }, {134: 134}],
    278: [function (t, n, r) {
        "use strict";

        function B1(t) {
            var n = W[t] = E(j[L]);
            return n._k = t, n
        }

        function E1(t, n) {
            x(t);
            for (var r, e = y(n = b(n)), i = 0, o = e.length; i < o;) Q(t, r = e[i++], n[r]);
            return t
        }

        function G1(t) {
            var n = D.call(this, t = w(t, !0));
            return !(this === B && u(W, t) && !u(V, t)) && (!(n || !u(this, t) || !u(W, t) || u(this, C) && this[C][t]) || n)
        }

        function H1(t, n) {
            if (t = b(t), n = w(n, !0), t !== B || !u(W, n) || u(V, n)) {
                var r = M(t, n);
                return !r || !u(W, n) || u(t, C) && t[C][n] || (r.enumerable = !0), r
            }
        }

        function I1(t) {
            for (var n, r = N(b(t)), e = [], i = 0; r.length > i;) u(W, n = r[i++]) || n == C || n == a || e.push(n);
            return e
        }

        function J1(t) {
            for (var n, r = t === B, e = N(r ? V : b(t)), i = [], o = 0; e.length > o;) !u(W, n = e[o++]) || r && !u(B, n) || i.push(W[n]);
            return i
        }

        var e = t(70), u = t(71), i = t(58), o = t(62), c = t(118), a = t(94).KEY, f = t(64), s = t(126), l = t(124),
            h = t(147), p = t(152), v = t(151), g = t(150), y = t(61), d = t(79), x = t(38), m = t(81), S = t(142),
            b = t(140), w = t(143), _ = t(116), E = t(98), O = t(102), F = t(101), I = t(104), P = t(99), A = t(107),
            M = F.f, k = P.f, N = O.f, j = e.Symbol, R = e.JSON, T = R && R.stringify, L = "prototype",
            C = p("_hidden"), G = p("toPrimitive"), D = {}.propertyIsEnumerable, U = s("symbol-registry"),
            W = s("symbols"), V = s("op-symbols"), B = Object[L], q = "function" == typeof j && !!I.f, Y = e.QObject,
            z = !Y || !Y[L] || !Y[L].findChild, X = i && f(function () {
                return 7 != E(k({}, "a", {
                    get: function () {
                        return k(this, "a", {value: 7}).a
                    }
                })).a
            }) ? function (t, n, r) {
                var e = M(B, n);
                e && delete B[n], k(t, n, r), e && t !== B && k(B, n, e)
            } : k, $ = q && "symbol" == typeof j.iterator ? function (t) {
                return "symbol" == typeof t
            } : function (t) {
                return t instanceof j
            }, Q = function defineProperty(t, n, r) {
                return t === B && Q(V, n, r), x(t), n = w(n, !0), x(r), u(W, n) ? (r.enumerable ? (u(t, C) && t[C][n] && (t[C][n] = !1), r = E(r, {enumerable: _(0, !1)})) : (u(t, C) || k(t, C, _(1, {})), t[C][n] = !0), X(t, n, r)) : k(t, n, r)
            };
        q || (c((j = function Symbol() {
            if (this instanceof j) throw TypeError("Symbol is not a constructor!");
            var n = h(0 < arguments.length ? arguments[0] : void 0), r = function (t) {
                this === B && r.call(V, t), u(this, C) && u(this[C], n) && (this[C][n] = !1), X(this, n, _(1, t))
            };
            return i && z && X(B, n, {configurable: !0, set: r}), B1(n)
        })[L], "toString", function toString() {
            return this._k
        }), F.f = H1, P.f = Q, t(103).f = O.f = I1, t(108).f = G1, I.f = J1, i && !t(89) && c(B, "propertyIsEnumerable", G1, !0), v.f = function (t) {
            return B1(p(t))
        }), o(o.G + o.W + o.F * !q, {Symbol: j});
        for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), J = 0; Z.length > J;) p(Z[J++]);
        for (var H = A(p.store), K = 0; H.length > K;) g(H[K++]);
        o(o.S + o.F * !q, "Symbol", {
            for: function (t) {
                return u(U, t += "") ? U[t] : U[t] = j(t)
            }, keyFor: function keyFor(t) {
                if (!$(t)) throw TypeError(t + " is not a symbol!");
                for (var n in U) if (U[n] === t) return n
            }, useSetter: function () {
                z = !0
            }, useSimple: function () {
                z = !1
            }
        }), o(o.S + o.F * !q, "Object", {
            create: function create(t, n) {
                return void 0 === n ? E(t) : E1(E(t), n)
            },
            defineProperty: Q,
            defineProperties: E1,
            getOwnPropertyDescriptor: H1,
            getOwnPropertyNames: I1,
            getOwnPropertySymbols: J1
        });
        var tt = f(function () {
            I.f(1)
        });
        o(o.S + o.F * tt, "Object", {
            getOwnPropertySymbols: function getOwnPropertySymbols(t) {
                return I.f(S(t))
            }
        }), R && o(o.S + o.F * (!q || f(function () {
            var t = j();
            return "[null]" != T([t]) || "{}" != T({a: t}) || "{}" != T(Object(t))
        })), "JSON", {
            stringify: function stringify(t) {
                for (var n, r, e = [t], i = 1; i < arguments.length;) e.push(arguments[i++]);
                if (r = n = e[1], (m(n) || void 0 !== t) && !$(t)) return d(n) || (n = function (t, n) {
                    if ("function" == typeof r && (n = r.call(this, t, n)), !$(n)) return n
                }), e[1] = n, T.apply(R, e)
            }
        }), j[L][G] || t(72)(j[L], G, j[L].valueOf), l(j, "Symbol"), l(Math, "Math", !0), l(e.JSON, "JSON", !0)
    }, {
        101: 101,
        102: 102,
        103: 103,
        104: 104,
        107: 107,
        108: 108,
        116: 116,
        118: 118,
        124: 124,
        126: 126,
        140: 140,
        142: 142,
        143: 143,
        147: 147,
        150: 150,
        151: 151,
        152: 152,
        38: 38,
        58: 58,
        61: 61,
        62: 62,
        64: 64,
        70: 70,
        71: 71,
        72: 72,
        79: 79,
        81: 81,
        89: 89,
        94: 94,
        98: 98,
        99: 99
    }],
    279: [function (t, n, r) {
        "use strict";
        var e = t(62), i = t(146), o = t(145), f = t(38), s = t(137), l = t(141), u = t(81), c = t(70).ArrayBuffer,
            h = t(127), p = o.ArrayBuffer, v = o.DataView, a = i.ABV && c.isView, g = p.prototype.slice, y = i.VIEW,
            d = "ArrayBuffer";
        e(e.G + e.W + e.F * (c !== p), {ArrayBuffer: p}), e(e.S + e.F * !i.CONSTR, d, {
            isView: function isView(t) {
                return a && a(t) || u(t) && y in t
            }
        }), e(e.P + e.U + e.F * t(64)(function () {
            return !new p(2).slice(1, void 0).byteLength
        }), d, {
            slice: function slice(t, n) {
                if (void 0 !== g && void 0 === n) return g.call(f(this), t);
                for (var r = f(this).byteLength, e = s(t, r), i = s(void 0 === n ? r : n, r), o = new (h(this, p))(l(i - e)), u = new v(this), c = new v(o), a = 0; e < i;) c.setUint8(a++, u.getUint8(e++));
                return o
            }
        }), t(123)(d)
    }, {123: 123, 127: 127, 137: 137, 141: 141, 145: 145, 146: 146, 38: 38, 62: 62, 64: 64, 70: 70, 81: 81}],
    280: [function (t, n, r) {
        var e = t(62);
        e(e.G + e.W + e.F * !t(146).ABV, {DataView: t(145).DataView})
    }, {145: 145, 146: 146, 62: 62}],
    281: [function (t, n, r) {
        t(144)("Float32", 4, function (e) {
            return function Float32Array(t, n, r) {
                return e(this, t, n, r)
            }
        })
    }, {144: 144}],
    282: [function (t, n, r) {
        t(144)("Float64", 8, function (e) {
            return function Float64Array(t, n, r) {
                return e(this, t, n, r)
            }
        })
    }, {144: 144}],
    283: [function (t, n, r) {
        t(144)("Int16", 2, function (e) {
            return function Int16Array(t, n, r) {
                return e(this, t, n, r)
            }
        })
    }, {144: 144}],
    284: [function (t, n, r) {
        t(144)("Int32", 4, function (e) {
            return function Int32Array(t, n, r) {
                return e(this, t, n, r)
            }
        })
    }, {144: 144}],
    285: [function (t, n, r) {
        t(144)("Int8", 1, function (e) {
            return function Int8Array(t, n, r) {
                return e(this, t, n, r)
            }
        })
    }, {144: 144}],
    286: [function (t, n, r) {
        t(144)("Uint16", 2, function (e) {
            return function Uint16Array(t, n, r) {
                return e(this, t, n, r)
            }
        })
    }, {144: 144}],
    287: [function (t, n, r) {
        t(144)("Uint32", 4, function (e) {
            return function Uint32Array(t, n, r) {
                return e(this, t, n, r)
            }
        })
    }, {144: 144}],
    288: [function (t, n, r) {
        t(144)("Uint8", 1, function (e) {
            return function Uint8Array(t, n, r) {
                return e(this, t, n, r)
            }
        })
    }, {144: 144}],
    289: [function (t, n, r) {
        t(144)("Uint8", 1, function (e) {
            return function Uint8ClampedArray(t, n, r) {
                return e(this, t, n, r)
            }
        }, !0)
    }, {144: 144}],
    290: [function (t, n, r) {
        "use strict";

        function R4(t) {
            return function WeakMap() {
                return t(this, 0 < arguments.length ? arguments[0] : void 0)
            }
        }

        var o, e = t(70), i = t(42)(0), u = t(118), c = t(94), a = t(97), f = t(50), s = t(81), l = t(149), h = t(149),
            p = !e.ActiveXObject && "ActiveXObject" in e, v = "WeakMap", g = c.getWeak, y = Object.isExtensible,
            d = f.ufstore, x = {
                get: function get(t) {
                    if (s(t)) {
                        var n = g(t);
                        return !0 === n ? d(l(this, v)).get(t) : n ? n[this._i] : void 0
                    }
                }, set: function set(t, n) {
                    return f.def(l(this, v), t, n)
                }
            }, m = n.exports = t(51)(v, R4, x, f, !0, !0);
        h && p && (a((o = f.getConstructor(R4, v)).prototype, x), c.NEED = !0, i(["delete", "has", "get", "set"], function (e) {
            var t = m.prototype, i = t[e];
            u(t, e, function (t, n) {
                if (!s(t) || y(t)) return i.call(this, t, n);
                this._f || (this._f = new o);
                var r = this._f[e](t, n);
                return "set" == e ? this : r
            })
        }))
    }, {118: 118, 149: 149, 42: 42, 50: 50, 51: 51, 70: 70, 81: 81, 94: 94, 97: 97}],
    291: [function (t, n, r) {
        "use strict";
        var e = t(50), i = t(149), o = "WeakSet";
        t(51)(o, function (t) {
            return function WeakSet() {
                return t(this, 0 < arguments.length ? arguments[0] : void 0)
            }
        }, {
            add: function add(t) {
                return e.def(i(this, o), t, !0)
            }
        }, e, !1, !0)
    }, {149: 149, 50: 50, 51: 51}],
    292: [function (t, n, r) {
        "use strict";
        var e = t(62), i = t(67), o = t(142), u = t(141), c = t(33), a = t(45);
        e(e.P, "Array", {
            flatMap: function flatMap(t) {
                var n, r, e = o(this);
                return c(t), n = u(e.length), r = a(e, 0), i(r, e, e, n, 0, 1, t, arguments[1]), r
            }
        }), t(35)("flatMap")
    }, {141: 141, 142: 142, 33: 33, 35: 35, 45: 45, 62: 62, 67: 67}],
    293: [function (t, n, r) {
        "use strict";
        var e = t(62), i = t(41)(!0);
        e(e.P, "Array", {
            includes: function includes(t) {
                return i(this, t, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), t(35)("includes")
    }, {35: 35, 41: 41, 62: 62}],
    294: [function (t, n, r) {
        var e = t(62), i = t(110)(!0);
        e(e.S, "Object", {
            entries: function entries(t) {
                return i(t)
            }
        })
    }, {110: 110, 62: 62}],
    295: [function (t, n, r) {
        var e = t(62), a = t(111), f = t(140), s = t(101), l = t(53);
        e(e.S, "Object", {
            getOwnPropertyDescriptors: function getOwnPropertyDescriptors(t) {
                for (var n, r, e = f(t), i = s.f, o = a(e), u = {}, c = 0; o.length > c;) void 0 !== (r = i(e, n = o[c++])) && l(u, n, r);
                return u
            }
        })
    }, {101: 101, 111: 111, 140: 140, 53: 53, 62: 62}],
    296: [function (t, n, r) {
        var e = t(62), i = t(110)(!1);
        e(e.S, "Object", {
            values: function values(t) {
                return i(t)
            }
        })
    }, {110: 110, 62: 62}],
    297: [function (t, n, r) {
        "use strict";
        var e = t(62), i = t(52), o = t(70), u = t(127), c = t(115);
        e(e.P + e.R, "Promise", {
            finally: function (n) {
                var r = u(this, i.Promise || o.Promise), t = "function" == typeof n;
                return this.then(t ? function (t) {
                    return c(r, n()).then(function () {
                        return t
                    })
                } : n, t ? function (t) {
                    return c(r, n()).then(function () {
                        throw t
                    })
                } : n)
            }
        })
    }, {115: 115, 127: 127, 52: 52, 62: 62, 70: 70}],
    298: [function (t, n, r) {
        "use strict";
        var e = t(62), i = t(132), o = t(148), u = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
        e(e.P + e.F * u, "String", {
            padEnd: function padEnd(t) {
                return i(this, t, 1 < arguments.length ? arguments[1] : void 0, !1)
            }
        })
    }, {132: 132, 148: 148, 62: 62}],
    299: [function (t, n, r) {
        "use strict";
        var e = t(62), i = t(132), o = t(148), u = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
        e(e.P + e.F * u, "String", {
            padStart: function padStart(t) {
                return i(this, t, 1 < arguments.length ? arguments[1] : void 0, !0)
            }
        })
    }, {132: 132, 148: 148, 62: 62}],
    300: [function (t, n, r) {
        "use strict";
        t(134)("trimLeft", function (t) {
            return function trimLeft() {
                return t(this, 1)
            }
        }, "trimStart")
    }, {134: 134}],
    301: [function (t, n, r) {
        "use strict";
        t(134)("trimRight", function (t) {
            return function trimRight() {
                return t(this, 2)
            }
        }, "trimEnd")
    }, {134: 134}],
    302: [function (t, n, r) {
        t(150)("asyncIterator")
    }, {150: 150}],
    303: [function (t, n, r) {
        for (var e = t(164), i = t(107), o = t(118), u = t(70), c = t(72), a = t(88), f = t(152), s = f("iterator"), l = f("toStringTag"), h = a.Array, p = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, v = i(p), g = 0; g < v.length; g++) {
            var y, d = v[g], x = p[d], m = u[d], S = m && m.prototype;
            if (S && (S[s] || c(S, s, h), S[l] || c(S, l, d), a[d] = h, x)) for (y in e) S[y] || o(S, y, e[y], !0)
        }
    }, {107: 107, 118: 118, 152: 152, 164: 164, 70: 70, 72: 72, 88: 88}],
    304: [function (t, n, r) {
        var e = t(62), i = t(136);
        e(e.G + e.B, {setImmediate: i.set, clearImmediate: i.clear})
    }, {136: 136, 62: 62}],
    305: [function (t, n, r) {
        function y7(i) {
            return function (t, n) {
                var r = 2 < arguments.length, e = r && u.call(arguments, 2);
                return i(r ? function () {
                    ("function" == typeof t ? t : Function(t)).apply(this, e)
                } : t, n)
            }
        }

        var e = t(70), i = t(62), o = t(148), u = [].slice, c = /MSIE .\./.test(o);
        i(i.G + i.B + i.F * c, {setTimeout: y7(e.setTimeout), setInterval: y7(e.setInterval)})
    }, {148: 148, 62: 62, 70: 70}],
    306: [function (t, n, r) {
        t(305), t(304), t(303), n.exports = t(52)
    }, {303: 303, 304: 304, 305: 305, 52: 52}],
    307: [function (t, n, r) {
        var e = function (u) {
            "use strict";
            var c, t = Object.prototype, f = t.hasOwnProperty, n = "function" == typeof Symbol ? Symbol : {},
                i = n.iterator || "@@iterator", r = n.asyncIterator || "@@asyncIterator",
                e = n.toStringTag || "@@toStringTag";

            function wrap(t, n, r, e) {
                var i = n && n.prototype instanceof Generator ? n : Generator, o = Object.create(i.prototype),
                    u = new Context(e || []);
                return o._invoke = function makeInvokeMethod(o, u, c) {
                    var a = s;
                    return function invoke(t, n) {
                        if (a === h) throw new Error("Generator is already running");
                        if (a === p) {
                            if ("throw" === t) throw n;
                            return doneResult()
                        }
                        for (c.method = t, c.arg = n; ;) {
                            var r = c.delegate;
                            if (r) {
                                var e = maybeInvokeDelegate(r, c);
                                if (e) {
                                    if (e === v) continue;
                                    return e
                                }
                            }
                            if ("next" === c.method) c.sent = c._sent = c.arg; else if ("throw" === c.method) {
                                if (a === s) throw a = p, c.arg;
                                c.dispatchException(c.arg)
                            } else "return" === c.method && c.abrupt("return", c.arg);
                            a = h;
                            var i = tryCatch(o, u, c);
                            if ("normal" === i.type) {
                                if (a = c.done ? p : l, i.arg === v) continue;
                                return {value: i.arg, done: c.done}
                            }
                            "throw" === i.type && (a = p, c.method = "throw", c.arg = i.arg)
                        }
                    }
                }(t, r, u), o
            }

            function tryCatch(t, n, r) {
                try {
                    return {type: "normal", arg: t.call(n, r)}
                } catch (t) {
                    return {type: "throw", arg: t}
                }
            }

            u.wrap = wrap;
            var s = "suspendedStart", l = "suspendedYield", h = "executing", p = "completed", v = {};

            function Generator() {
            }

            function GeneratorFunction() {
            }

            function GeneratorFunctionPrototype() {
            }

            var o = {};
            o[i] = function () {
                return this
            };
            var a = Object.getPrototypeOf, g = a && a(a(values([])));
            g && g !== t && f.call(g, i) && (o = g);
            var y = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(o);

            function defineIteratorMethods(t) {
                ["next", "throw", "return"].forEach(function (n) {
                    t[n] = function (t) {
                        return this._invoke(n, t)
                    }
                })
            }

            function AsyncIterator(c, a) {
                var t;
                this._invoke = function enqueue(r, e) {
                    function callInvokeWithMethodAndArg() {
                        return new a(function (t, n) {
                            !function invoke(t, n, r, e) {
                                var i = tryCatch(c[t], c, n);
                                if ("throw" !== i.type) {
                                    var o = i.arg, u = o.value;
                                    return u && "object" == typeof u && f.call(u, "__await") ? a.resolve(u.__await).then(function (t) {
                                        invoke("next", t, r, e)
                                    }, function (t) {
                                        invoke("throw", t, r, e)
                                    }) : a.resolve(u).then(function (t) {
                                        o.value = t, r(o)
                                    }, function (t) {
                                        return invoke("throw", t, r, e)
                                    })
                                }
                                e(i.arg)
                            }(r, e, t, n)
                        })
                    }

                    return t = t ? t.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg()
                }
            }

            function maybeInvokeDelegate(t, n) {
                var r = t.iterator[n.method];
                if (r === c) {
                    if (n.delegate = null, "throw" === n.method) {
                        if (t.iterator.return && (n.method = "return", n.arg = c, maybeInvokeDelegate(t, n), "throw" === n.method)) return v;
                        n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return v
                }
                var e = tryCatch(r, t.iterator, n.arg);
                if ("throw" === e.type) return n.method = "throw", n.arg = e.arg, n.delegate = null, v;
                var i = e.arg;
                return i ? i.done ? (n[t.resultName] = i.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = c), n.delegate = null, v) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, v)
            }

            function pushTryEntry(t) {
                var n = {tryLoc: t[0]};
                1 in t && (n.catchLoc = t[1]), 2 in t && (n.finallyLoc = t[2], n.afterLoc = t[3]), this.tryEntries.push(n)
            }

            function resetTryEntry(t) {
                var n = t.completion || {};
                n.type = "normal", delete n.arg, t.completion = n
            }

            function Context(t) {
                this.tryEntries = [{tryLoc: "root"}], t.forEach(pushTryEntry, this), this.reset(!0)
            }

            function values(t) {
                if (t) {
                    var n = t[i];
                    if (n) return n.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1, e = function next() {
                            for (; ++r < t.length;) if (f.call(t, r)) return next.value = t[r], next.done = !1, next;
                            return next.value = c, next.done = !0, next
                        };
                        return e.next = e
                    }
                }
                return {next: doneResult}
            }

            function doneResult() {
                return {value: c, done: !0}
            }

            return GeneratorFunction.prototype = y.constructor = GeneratorFunctionPrototype, GeneratorFunctionPrototype.constructor = GeneratorFunction, GeneratorFunctionPrototype[e] = GeneratorFunction.displayName = "GeneratorFunction", u.isGeneratorFunction = function (t) {
                var n = "function" == typeof t && t.constructor;
                return !!n && (n === GeneratorFunction || "GeneratorFunction" === (n.displayName || n.name))
            }, u.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, e in t || (t[e] = "GeneratorFunction")), t.prototype = Object.create(y), t
            }, u.awrap = function (t) {
                return {__await: t}
            }, defineIteratorMethods(AsyncIterator.prototype), AsyncIterator.prototype[r] = function () {
                return this
            }, u.AsyncIterator = AsyncIterator, u.async = function (t, n, r, e, i) {
                void 0 === i && (i = Promise);
                var o = new AsyncIterator(wrap(t, n, r, e), i);
                return u.isGeneratorFunction(n) ? o : o.next().then(function (t) {
                    return t.done ? t.value : o.next()
                })
            }, defineIteratorMethods(y), y[e] = "Generator", y[i] = function () {
                return this
            }, y.toString = function () {
                return "[object Generator]"
            }, u.keys = function (n) {
                var r = [];
                for (var t in n) r.push(t);
                return r.reverse(), function next() {
                    for (; r.length;) {
                        var t = r.pop();
                        if (t in n) return next.value = t, next.done = !1, next
                    }
                    return next.done = !0, next
                }
            }, u.values = values, Context.prototype = {
                constructor: Context, reset: function (t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = c, this.done = !1, this.delegate = null, this.method = "next", this.arg = c, this.tryEntries.forEach(resetTryEntry), !t) for (var n in this) "t" === n.charAt(0) && f.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = c)
                }, stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                }, dispatchException: function (r) {
                    if (this.done) throw r;
                    var e = this;

                    function handle(t, n) {
                        return i.type = "throw", i.arg = r, e.next = t, n && (e.method = "next", e.arg = c), !!n
                    }

                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var n = this.tryEntries[t], i = n.completion;
                        if ("root" === n.tryLoc) return handle("end");
                        if (n.tryLoc <= this.prev) {
                            var o = f.call(n, "catchLoc"), u = f.call(n, "finallyLoc");
                            if (o && u) {
                                if (this.prev < n.catchLoc) return handle(n.catchLoc, !0);
                                if (this.prev < n.finallyLoc) return handle(n.finallyLoc)
                            } else if (o) {
                                if (this.prev < n.catchLoc) return handle(n.catchLoc, !0)
                            } else {
                                if (!u) throw new Error("try statement without catch or finally");
                                if (this.prev < n.finallyLoc) return handle(n.finallyLoc)
                            }
                        }
                    }
                }, abrupt: function (t, n) {
                    for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                        var e = this.tryEntries[r];
                        if (e.tryLoc <= this.prev && f.call(e, "finallyLoc") && this.prev < e.finallyLoc) {
                            var i = e;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= n && n <= i.finallyLoc && (i = null);
                    var o = i ? i.completion : {};
                    return o.type = t, o.arg = n, i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(o)
                }, complete: function (t, n) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && n && (this.next = n), v
                }, finish: function (t) {
                    for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                        var r = this.tryEntries[n];
                        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), v
                    }
                }, catch: function (t) {
                    for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc === t) {
                            var e = r.completion;
                            if ("throw" === e.type) {
                                var i = e.arg;
                                resetTryEntry(r)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                }, delegateYield: function (t, n, r) {
                    return this.delegate = {
                        iterator: values(t),
                        resultName: n,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = c), v
                }
            }, u
        }("object" == typeof n ? n.exports : {});
        try {
            regeneratorRuntime = e
        } catch (t) {
            Function("r", "regeneratorRuntime = r")(e)
        }
    }, {}]
}, {}, [1]);
!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.WHATWGFetch = {})
}(this, function (a) {
    "use strict";
    var e, r, o = "URLSearchParams" in self, n = "Symbol" in self && "iterator" in Symbol,
        h = "FileReader" in self && "Blob" in self && function () {
            try {
                return new Blob, !0
            } catch (t) {
                return !1
            }
        }(), i = "FormData" in self, s = "ArrayBuffer" in self;

    function u(t) {
        if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
        return t.toLowerCase()
    }

    function f(t) {
        return t = "string" != typeof t ? String(t) : t
    }

    function t(e) {
        var t = {
            next: function () {
                var t = e.shift();
                return {done: void 0 === t, value: t}
            }
        };
        return n && (t[Symbol.iterator] = function () {
            return t
        }), t
    }

    function d(e) {
        this.map = {}, e instanceof d ? e.forEach(function (t, e) {
            this.append(e, t)
        }, this) : Array.isArray(e) ? e.forEach(function (t) {
            this.append(t[0], t[1])
        }, this) : e && Object.getOwnPropertyNames(e).forEach(function (t) {
            this.append(t, e[t])
        }, this)
    }

    function c(t) {
        if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
        t.bodyUsed = !0
    }

    function p(r) {
        return new Promise(function (t, e) {
            r.onload = function () {
                t(r.result)
            }, r.onerror = function () {
                e(r.error)
            }
        })
    }

    function y(t) {
        var e = new FileReader, r = p(e);
        return e.readAsArrayBuffer(t), r
    }

    function l(t) {
        if (t.slice) return t.slice(0);
        var e = new Uint8Array(t.byteLength);
        return e.set(new Uint8Array(t)), e.buffer
    }

    function b() {
        return this.bodyUsed = !1, this._initBody = function (t) {
            var e;
            (this._bodyInit = t) ? "string" == typeof t ? this._bodyText = t : h && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : i && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : o && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : s && h && ((e = t) && DataView.prototype.isPrototypeOf(e)) ? (this._bodyArrayBuffer = l(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : s && (ArrayBuffer.prototype.isPrototypeOf(t) || r(t)) ? this._bodyArrayBuffer = l(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : o && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }, h && (this.blob = function () {
            var t = c(this);
            if (t) return t;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]))
        }, this.arrayBuffer = function () {
            return this._bodyArrayBuffer ? c(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(y)
        }), this.text = function () {
            var t, e, r = c(this);
            if (r) return r;
            if (this._bodyBlob) return t = this._bodyBlob, e = new FileReader, r = p(e), e.readAsText(t), r;
            if (this._bodyArrayBuffer) return Promise.resolve(function (t) {
                for (var e = new Uint8Array(t), r = new Array(e.length), o = 0; o < e.length; o++) r[o] = String.fromCharCode(e[o]);
                return r.join("")
            }(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText)
        }, i && (this.formData = function () {
            return this.text().then(E)
        }), this.json = function () {
            return this.text().then(JSON.parse)
        }, this
    }

    s && (e = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], r = ArrayBuffer.isView || function (t) {
        return t && -1 < e.indexOf(Object.prototype.toString.call(t))
    }), d.prototype.append = function (t, e) {
        t = u(t), e = f(e);
        var r = this.map[t];
        this.map[t] = r ? r + ", " + e : e
    }, d.prototype.delete = function (t) {
        delete this.map[u(t)]
    }, d.prototype.get = function (t) {
        return t = u(t), this.has(t) ? this.map[t] : null
    }, d.prototype.has = function (t) {
        return this.map.hasOwnProperty(u(t))
    }, d.prototype.set = function (t, e) {
        this.map[u(t)] = f(e)
    }, d.prototype.forEach = function (t, e) {
        for (var r in this.map) this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
    }, d.prototype.keys = function () {
        var r = [];
        return this.forEach(function (t, e) {
            r.push(e)
        }), t(r)
    }, d.prototype.values = function () {
        var e = [];
        return this.forEach(function (t) {
            e.push(t)
        }), t(e)
    }, d.prototype.entries = function () {
        var r = [];
        return this.forEach(function (t, e) {
            r.push([e, t])
        }), t(r)
    }, n && (d.prototype[Symbol.iterator] = d.prototype.entries);
    var m = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

    function w(t, e) {
        var r, o = (e = e || {}).body;
        if (t instanceof w) {
            if (t.bodyUsed) throw new TypeError("Already read");
            this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new d(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, o || null == t._bodyInit || (o = t._bodyInit, t.bodyUsed = !0)
        } else this.url = String(t);
        if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new d(e.headers)), this.method = (r = e.method || this.method || "GET", t = r.toUpperCase(), -1 < m.indexOf(t) ? t : r), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o) throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(o)
    }

    function E(t) {
        var r = new FormData;
        return t.trim().split("&").forEach(function (t) {
            var e;
            t && (t = (e = t.split("=")).shift().replace(/\+/g, " "), e = e.join("=").replace(/\+/g, " "), r.append(decodeURIComponent(t), decodeURIComponent(e)))
        }), r
    }

    function v(t, e) {
        e = e || {}, this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = 200 <= this.status && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new d(e.headers), this.url = e.url || "", this._initBody(t)
    }

    w.prototype.clone = function () {
        return new w(this, {body: this._bodyInit})
    }, b.call(w.prototype), b.call(v.prototype), v.prototype.clone = function () {
        return new v(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new d(this.headers),
            url: this.url
        })
    }, v.error = function () {
        var t = new v(null, {status: 0, statusText: ""});
        return t.type = "error", t
    };
    var A = [301, 302, 303, 307, 308];
    v.redirect = function (t, e) {
        if (-1 === A.indexOf(e)) throw new RangeError("Invalid status code");
        return new v(null, {status: e, headers: {location: t}})
    }, a.DOMException = self.DOMException;
    try {
        new a.DOMException
    } catch (t) {
        a.DOMException = function (t, e) {
            this.message = t, this.name = e;
            t = Error(t);
            this.stack = t.stack
        }, a.DOMException.prototype = Object.create(Error.prototype), a.DOMException.prototype.constructor = a.DOMException
    }

    function _(i, s) {
        return new Promise(function (o, t) {
            var e = new w(i, s);
            if (e.signal && e.signal.aborted) return t(new a.DOMException("Aborted", "AbortError"));
            var n = new XMLHttpRequest;

            function r() {
                n.abort()
            }

            n.onload = function () {
                var r, t = {
                    status: n.status,
                    statusText: n.statusText,
                    headers: (e = n.getAllResponseHeaders() || "", r = new d, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function (t) {
                        var e = t.split(":"), t = e.shift().trim();
                        t && (e = e.join(":").trim(), r.append(t, e))
                    }), r)
                };
                t.url = "responseURL" in n ? n.responseURL : t.headers.get("X-Request-URL");
                var e = "response" in n ? n.response : n.responseText;
                o(new v(e, t))
            }, n.onerror = function () {
                t(new TypeError("Network request failed"))
            }, n.ontimeout = function () {
                t(new TypeError("Network request failed"))
            }, n.onabort = function () {
                t(new a.DOMException("Aborted", "AbortError"))
            }, n.open(e.method, e.url, !0), "include" === e.credentials ? n.withCredentials = !0 : "omit" === e.credentials && (n.withCredentials = !1), "responseType" in n && h && (n.responseType = "blob"), e.headers.forEach(function (t, e) {
                n.setRequestHeader(e, t)
            }), e.signal && (e.signal.addEventListener("abort", r), n.onreadystatechange = function () {
                4 === n.readyState && e.signal.removeEventListener("abort", r)
            }), n.send(void 0 === e._bodyInit ? null : e._bodyInit)
        })
    }

    _.polyfill = !0, self.fetch || (self.fetch = _, self.Headers = d, self.Request = w, self.Response = v), a.Headers = d, a.Request = w, a.Response = v, a.fetch = _, Object.defineProperty(a, "__esModule", {value: !0})
});
var wpcf7 = {"api": {"root": "https:\/\/dai-ichi.vn\/wp-json\/", "namespace": "contact-form-7\/v1"}, "cached": "1"};
!function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {i: r, l: !1, exports: {}};
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
            return e[t]
        }.bind(null, o));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 3)
}([function (e, t) {
    e.exports = function (e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }, e.exports.default = e.exports, e.exports.__esModule = !0
}, function (e, t, n) {
    var r = n(2);
    e.exports = function (e, t) {
        if (null == e) return {};
        var n, o, a = r(e, t);
        if (Object.getOwnPropertySymbols) {
            var c = Object.getOwnPropertySymbols(e);
            for (o = 0; o < c.length; o++) n = c[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
        }
        return a
    }, e.exports.default = e.exports, e.exports.__esModule = !0
}, function (e, t) {
    e.exports = function (e, t) {
        if (null == e) return {};
        var n, r, o = {}, a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
    }, e.exports.default = e.exports, e.exports.__esModule = !0
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = function (e) {
        return Math.abs(parseInt(e, 10))
    }, o = function (e, t) {
        var n = new Map([["init", "init"], ["validation_failed", "invalid"], ["acceptance_missing", "unaccepted"], ["spam", "spam"], ["aborted", "aborted"], ["mail_sent", "sent"], ["mail_failed", "failed"], ["submitting", "submitting"], ["resetting", "resetting"]]);
        n.has(t) && (t = n.get(t)), Array.from(n.values()).includes(t) || (t = (t = t.replace(/[^0-9a-z]+/i, " ").trim()).replace(/\s+/, "-"), t = "custom-".concat(t));
        var r = e.getAttribute("data-status");
        return e.wpcf7.status = t, e.setAttribute("data-status", t), e.classList.add(t), r && r !== t && e.classList.remove(r), t
    }, a = function (e, t, n) {
        var r = new CustomEvent("wpcf7".concat(t), {bubbles: !0, detail: n});
        "string" == typeof e && (e = document.querySelector(e)), e.dispatchEvent(r)
    }, c = n(0), i = n.n(c), s = n(1), u = n.n(s);

    function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function f(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? l(Object(n), !0).forEach((function (t) {
                i()(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    var p = function (e) {
        var t = wpcf7.api, n = t.root, r = t.namespace, o = void 0 === r ? "contact-form-7/v1" : r;
        return d.reduceRight((function (e, t) {
            return function (n) {
                return t(n, e)
            }
        }), (function (e) {
            var t, r, a = e.url, c = e.path, i = e.endpoint, s = e.headers, l = e.body, p = e.data,
                d = u()(e, ["url", "path", "endpoint", "headers", "body", "data"]);
            "string" == typeof i && (t = o.replace(/^\/|\/$/g, ""), c = (r = i.replace(/^\//, "")) ? t + "/" + r : t), "string" == typeof c && (-1 !== n.indexOf("?") && (c = c.replace("?", "&")), c = c.replace(/^\//, ""), a = n + c), delete (s = f({Accept: "application/json, */*;q=0.1"}, s))["X-WP-Nonce"], p && (l = JSON.stringify(p), s["Content-Type"] = "application/json");
            var v = {code: "fetch_error", message: "You are probably offline."},
                b = {code: "invalid_json", message: "The response is not a valid JSON response."};
            return window.fetch(a || c || window.location.href, f(f({}, d), {}, {
                headers: s,
                body: l
            })).then((function (e) {
                return Promise.resolve(e).then((function (e) {
                    if (e.status >= 200 && e.status < 300) return e;
                    throw e
                })).then((function (e) {
                    if (204 === e.status) return null;
                    if (e && e.json) return e.json().catch((function () {
                        throw b
                    }));
                    throw b
                }))
            }), (function () {
                throw v
            }))
        }))(e)
    }, d = [];

    function v(e, t = {}) {
        const n = new FormData(e);
        t.submitter && t.submitter.name && n.append(t.submitter.name, t.submitter.value);
        const r = {
            contactFormId: e.wpcf7.id,
            pluginVersion: e.wpcf7.pluginVersion,
            contactFormLocale: e.wpcf7.locale,
            unitTag: e.wpcf7.unitTag,
            containerPostId: e.wpcf7.containerPost,
            status: e.wpcf7.status,
            inputs: Array.from(n, e => {
                const t = e[0], n = e[1];
                return !t.match(/^_/) && {name: t, value: n}
            }).filter(e => !1 !== e),
            formData: n
        }, c = t => {
            const n = document.createElement("li");
            n.setAttribute("id", t.error_id), t.idref ? n.insertAdjacentHTML("beforeend", `<a href="#${t.idref}">${t.message}</a>`) : n.insertAdjacentText("beforeend", t.message), e.wpcf7.parent.querySelector(".screen-reader-response ul").appendChild(n)
        }, i = t => {
            const n = e.querySelector(t.into), r = n.querySelector(".wpcf7-form-control");
            r.classList.add("wpcf7-not-valid"), r.setAttribute("aria-describedby", t.error_id);
            const o = document.createElement("span");
            o.setAttribute("class", "wpcf7-not-valid-tip"), o.setAttribute("aria-hidden", "true"), o.insertAdjacentText("beforeend", t.message), n.appendChild(o), n.querySelectorAll("[aria-invalid]").forEach(e => {
                e.setAttribute("aria-invalid", "true")
            }), r.closest(".use-floating-validation-tip") && (r.addEventListener("focus", e => {
                o.setAttribute("style", "display: none")
            }), o.addEventListener("mouseover", e => {
                o.setAttribute("style", "display: none")
            }))
        };
        p({
            endpoint: `contact-forms/${e.wpcf7.id}/feedback`,
            method: "POST",
            body: n,
            wpcf7: {endpoint: "feedback", form: e, detail: r}
        }).then(t => {
            const n = o(e, t.status);
            return r.status = t.status, r.apiResponse = t, ["invalid", "unaccepted", "spam", "aborted"].includes(n) ? a(e, n, r) : ["sent", "failed"].includes(n) && a(e, "mail" + n, r), a(e, "submit", r), t
        }).then(t => {
            t.posted_data_hash && (e.querySelector('input[name="_wpcf7_posted_data_hash"]').value = t.posted_data_hash), "mail_sent" === t.status && (e.reset(), e.wpcf7.resetOnMailSent = !0), t.invalid_fields && (t.invalid_fields.forEach(c), t.invalid_fields.forEach(i)), e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').insertAdjacentText("beforeend", t.message), e.querySelectorAll(".wpcf7-response-output").forEach(e => {
                e.innerText = t.message
            })
        }).catch(e => console.error(e))
    }

    p.use = function (e) {
        d.unshift(e)
    }, p.use((e, t) => {
        if (e.wpcf7 && "feedback" === e.wpcf7.endpoint) {
            const {form: t, detail: n} = e.wpcf7;
            b(t), a(t, "beforesubmit", n), o(t, "submitting")
        }
        return t(e)
    });
    const b = e => {
        e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').innerText = "", e.wpcf7.parent.querySelector(".screen-reader-response ul").innerText = "", e.querySelectorAll(".wpcf7-not-valid-tip").forEach(e => {
            e.remove()
        }), e.querySelectorAll("[aria-invalid]").forEach(e => {
            e.setAttribute("aria-invalid", "false")
        }), e.querySelectorAll(".wpcf7-form-control").forEach(e => {
            e.removeAttribute("aria-describedby"), e.classList.remove("wpcf7-not-valid")
        }), e.querySelectorAll(".wpcf7-response-output").forEach(e => {
            e.innerText = ""
        })
    };

    function w(e) {
        var t = new FormData(e), n = {
            contactFormId: e.wpcf7.id,
            pluginVersion: e.wpcf7.pluginVersion,
            contactFormLocale: e.wpcf7.locale,
            unitTag: e.wpcf7.unitTag,
            containerPostId: e.wpcf7.containerPost,
            status: e.wpcf7.status,
            inputs: Array.from(t, (function (e) {
                var t = e[0], n = e[1];
                return !t.match(/^_/) && {name: t, value: n}
            })).filter((function (e) {
                return !1 !== e
            })),
            formData: t
        };
        p({
            endpoint: "contact-forms/".concat(e.wpcf7.id, "/refill"),
            method: "GET",
            wpcf7: {endpoint: "refill", form: e, detail: n}
        }).then((function (t) {
            e.wpcf7.resetOnMailSent ? (delete e.wpcf7.resetOnMailSent, o(e, "mail_sent")) : o(e, "init"), n.apiResponse = t, a(e, "reset", n)
        })).catch((function (e) {
            return console.error(e)
        }))
    }

    p.use((function (e, t) {
        if (e.wpcf7 && "refill" === e.wpcf7.endpoint) {
            var n = e.wpcf7, r = n.form;
            n.detail, b(r), o(r, "resetting")
        }
        return t(e)
    }));
    var m = function (e, t) {
        var n = function (n) {
            var r = t[n];
            e.querySelectorAll('input[name="'.concat(n, '"]')).forEach((function (e) {
                e.value = ""
            })), e.querySelectorAll("img.wpcf7-captcha-".concat(n)).forEach((function (e) {
                e.setAttribute("src", r)
            }));
            var o = /([0-9]+)\.(png|gif|jpeg)$/.exec(r);
            o && e.querySelectorAll('input[name="_wpcf7_captcha_challenge_'.concat(n, '"]')).forEach((function (e) {
                e.value = o[1]
            }))
        };
        for (var r in t) n(r)
    }, h = function (e, t) {
        var n = function (n) {
            var r = t[n][0], o = t[n][1];
            e.querySelectorAll(".wpcf7-form-control-wrap.".concat(n)).forEach((function (e) {
                e.querySelector('input[name="'.concat(n, '"]')).value = "", e.querySelector(".wpcf7-quiz-label").textContent = r, e.querySelector('input[name="_wpcf7_quiz_answer_'.concat(n, '"]')).value = o
            }))
        };
        for (var r in t) n(r)
    };

    function y(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function g(e) {
        var t = new FormData(e);
        e.wpcf7 = {
            id: r(t.get("_wpcf7")),
            status: e.getAttribute("data-status"),
            pluginVersion: t.get("_wpcf7_version"),
            locale: t.get("_wpcf7_locale"),
            unitTag: t.get("_wpcf7_unit_tag"),
            containerPost: r(t.get("_wpcf7_container_post")),
            parent: e.closest(".wpcf7")
        }, e.querySelectorAll(".wpcf7-submit").forEach((function (e) {
            e.insertAdjacentHTML("afterend", '<span class="ajax-loader"></span>')
        })), function (e) {
            e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach((function (t) {
                t.addEventListener("change", (function (t) {
                    var n = t.target.getAttribute("name");
                    e.querySelectorAll('input[type="checkbox"][name="'.concat(n, '"]')).forEach((function (e) {
                        e !== t.target && (e.checked = !1)
                    }))
                }))
            }))
        }(e), function (e) {
            e.querySelectorAll(".has-free-text").forEach((function (t) {
                var n = t.querySelector("input.wpcf7-free-text"),
                    r = t.querySelector('input[type="checkbox"], input[type="radio"]');
                n.disabled = !r.checked, e.addEventListener("change", (function (e) {
                    n.disabled = !r.checked, e.target === r && r.checked && n.focus()
                }))
            }))
        }(e), function (e) {
            e.querySelectorAll(".wpcf7-validates-as-url").forEach((function (e) {
                e.addEventListener("change", (function (t) {
                    var n = e.value.trim();
                    n && !n.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== n.indexOf(".") && (n = "http://" + (n = n.replace(/^\/+/, ""))), e.value = n
                }))
            }))
        }(e), function (e) {
            if (e.querySelector(".wpcf7-acceptance") && !e.classList.contains("wpcf7-acceptance-as-validation")) {
                var t = function () {
                    var t = !0;
                    e.querySelectorAll(".wpcf7-acceptance").forEach((function (e) {
                        if (t && !e.classList.contains("optional")) {
                            var n = e.querySelector('input[type="checkbox"]');
                            (e.classList.contains("invert") && n.checked || !e.classList.contains("invert") && !n.checked) && (t = !1)
                        }
                    })), e.querySelectorAll(".wpcf7-submit").forEach((function (e) {
                        e.disabled = !t
                    }))
                };
                t(), e.addEventListener("change", (function (e) {
                    t()
                })), e.addEventListener("wpcf7reset", (function (e) {
                    t()
                }))
            }
        }(e), function (e) {
            var t = function (e, t) {
                var n = r(e.getAttribute("data-starting-value")), o = r(e.getAttribute("data-maximum-value")),
                    a = r(e.getAttribute("data-minimum-value")),
                    c = e.classList.contains("down") ? n - t.value.length : t.value.length;
                e.setAttribute("data-current-value", c), e.innerText = c, o && o < t.value.length ? e.classList.add("too-long") : e.classList.remove("too-long"), a && t.value.length < a ? e.classList.add("too-short") : e.classList.remove("too-short")
            }, n = function (n) {
                n = function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? y(Object(n), !0).forEach((function (t) {
                            i()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({init: !1}, n), e.querySelectorAll(".wpcf7-character-count").forEach((function (r) {
                    var o = r.getAttribute("data-target-name"), a = e.querySelector('[name="'.concat(o, '"]'));
                    a && (a.value = a.defaultValue, t(r, a), n.init && a.addEventListener("keyup", (function (e) {
                        t(r, a)
                    })))
                }))
            };
            n({init: !0}), e.addEventListener("wpcf7reset", (function (e) {
                n()
            }))
        }(e), window.addEventListener("load", (function (t) {
            wpcf7.cached && e.reset()
        })), e.addEventListener("reset", (function (t) {
            wpcf7.reset(e)
        })), e.addEventListener("submit", (function (t) {
            var n = t.submitter;
            wpcf7.submit(e, {submitter: n}), t.preventDefault()
        })), e.addEventListener("wpcf7submit", (function (t) {
            t.detail.apiResponse.captcha && m(e, t.detail.apiResponse.captcha), t.detail.apiResponse.quiz && h(e, t.detail.apiResponse.quiz)
        })), e.addEventListener("wpcf7reset", (function (t) {
            t.detail.apiResponse.captcha && m(e, t.detail.apiResponse.captcha), t.detail.apiResponse.quiz && h(e, t.detail.apiResponse.quiz)
        }))
    }

    document.addEventListener("DOMContentLoaded", e => {
        var t;
        if ("undefined" == typeof wpcf7) return void console.error("wpcf7 is not defined.");
        if (void 0 === wpcf7.api) return void console.error("wpcf7.api is not defined.");
        if ("function" != typeof window.fetch) return void console.error("Your browser doesn't support window.fetch().");
        if ("function" != typeof window.FormData) return void console.error("Your browser doesn't support window.FormData().");
        const n = document.querySelectorAll(".wpcf7 > form");
        "function" == typeof n.forEach ? (wpcf7 = {
            init: g,
            submit: v,
            reset: w, ...null !== (t = wpcf7) && void 0 !== t ? t : {}
        }, n.forEach(e => wpcf7.init(e))) : console.error("Your browser doesn't support NodeList.forEach().")
    })
}]);
(function () {
    const siteNavigation = document.getElementById('site-navigation');
    if (!siteNavigation) {
        return
    }
    const button = siteNavigation.getElementsByTagName('button')[0];
    if ('undefined' === typeof button) {
        return
    }
    const menu = siteNavigation.getElementsByTagName('ul')[0];
    if ('undefined' === typeof menu) {
        button.style.display = 'none';
        return
    }
    if (!menu.classList.contains('nav-menu')) {
        menu.classList.add('nav-menu')
    }
    button.addEventListener('click', function () {
        siteNavigation.classList.toggle('toggled');
        if (button.getAttribute('aria-expanded') === 'true') {
            button.setAttribute('aria-expanded', 'false')
        } else {
            button.setAttribute('aria-expanded', 'true')
        }
    });
    document.addEventListener('click', function (event) {
        const isClickInside = siteNavigation.contains(event.target);
        if (!isClickInside) {
            siteNavigation.classList.remove('toggled');
            button.setAttribute('aria-expanded', 'false')
        }
    });
    const links = menu.getElementsByTagName('a');
    const linksWithChildren = menu.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');
    for (const link of links) {
        link.addEventListener('focus', toggleFocus, !0);
        link.addEventListener('blur', toggleFocus, !0)
    }
    for (const link of linksWithChildren) {
        link.addEventListener('touchstart', toggleFocus, !1)
    }

    function toggleFocus() {
        if (event.type === 'focus' || event.type === 'blur') {
            let self = this;
            while (!self.classList.contains('nav-menu')) {
                if ('li' === self.tagName.toLowerCase()) {
                    self.classList.toggle('focus')
                }
                self = self.parentNode
            }
        }
        if (event.type === 'touchstart') {
            const menuItem = this.parentNode;
            event.preventDefault();
            for (const link of menuItem.parentNode.children) {
                if (menuItem !== link) {
                    link.classList.remove('focus')
                }
            }
            menuItem.classList.toggle('focus')
        }
    }
}());/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    var t = [], r = Object.getPrototypeOf, s = t.slice, g = t.flat ? function (e) {
            return t.flat.call(e)
        } : function (e) {
            return t.concat.apply([], e)
        }, u = t.push, i = t.indexOf, n = {}, o = n.toString, v = n.hasOwnProperty, a = v.toString, l = a.call(Object),
        y = {}, m = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        }, x = function (e) {
            return null != e && e === e.window
        }, E = C.document, c = {type: !0, src: !0, nonce: !0, noModule: !0};

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }

    var f = "3.5.1", S = function (e, t) {
        return new S.fn.init(e, t)
    };

    function p(e) {
        var t = !!e && "length" in e && e.length, n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    S.fn = S.prototype = {
        jquery: f, constructor: S, length: 0, toArray: function () {
            return s.call(this)
        }, get: function (e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return S.each(this, e)
        }, map: function (n) {
            return this.pushStack(S.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        }, slice: function () {
            return this.pushStack(s.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, even: function () {
            return this.pushStack(S.grep(this, function (e, t) {
                return (t + 1) % 2
            }))
        }, odd: function () {
            return this.pushStack(S.grep(this, function (e, t) {
                return t % 2
            }))
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: u, sort: t.sort, splice: t.splice
    }, S.extend = S.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, globalEval: function (e, t, n) {
            b(e, {nonce: t && t.nonce}, n)
        }, each: function (e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break
            } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        }, inArray: function (e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        }, map: function (e, t, n) {
            var r, i, o = 0, a = [];
            if (p(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        }, guid: 1, support: y
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function (n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date, p = n.document, k = 0,
            r = 0, m = ue(), x = ue(), A = ue(), N = ue(), D = function (e, t) {
                return e === t && (l = !0), 0
            }, j = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"), $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"), ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function (e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, oe = function () {
                T()
            }, ae = be(function (e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {dir: "parentNode", next: "legend"});
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function (e, t) {
                    L.apply(e, O.call(t))
                } : function (e, t) {
                    var n = e.length, r = 0;
                    while (e[n++] = t[r++]) ;
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
                    if (9 === p) {
                        if (!(a = e.getElementById(i))) return n;
                        if (a.id === i) return n.push(a), n
                    } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
                } else {
                    if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                    if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
                }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[S] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            var n = e.split("|"), r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while (n = n.nextSibling) if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ve(a) {
            return le(function (o) {
                return o = +o, le(function (e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        for (e in d = se.support = {}, i = se.isXML = function (e) {
            var t = e.namespaceURI, n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }, T = se.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : p;
            return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
                return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }), d.attributes = ce(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), d.getElementsByTagName = ce(function (e) {
                return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
            }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
                return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
            }), d.getById ? (b.filter.ID = function (e) {
                var t = e.replace(te, ne);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (b.filter.ID = function (e) {
                var n = e.replace(te, ne);
                return function (e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }, b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        i = t.getElementsByName(e), r = 0;
                        while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
            }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
                var t;
                a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
            }), ce(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
            })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
                d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
            }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t) while (t = t.parentNode) if (t === e) return !0;
                return !1
            }, D = t ? function (e, t) {
                if (e === t) return l = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return l = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                if (i === o) return pe(e, t);
                n = e;
                while (n = n.parentNode) a.unshift(n);
                n = t;
                while (n = n.parentNode) s.unshift(n);
                while (a[r] === s[r]) r++;
                return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
            }), C
        }, se.matches = function (e, t) {
            return se(e, null, null, t)
        }, se.matchesSelector = function (e, t) {
            if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                var n = c.call(e, t);
                if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (e) {
                N(t, !0)
            }
            return 0 < se(t, C, null, [e]).length
        }, se.contains = function (e, t) {
            return (e.ownerDocument || e) != C && T(e), y(e, t)
        }, se.attr = function (e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = b.attrHandle[t.toLowerCase()],
                r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, se.escape = function (e) {
            return (e + "").replace(re, ie)
        }, se.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, se.uniqueSort = function (e) {
            var t, n = [], r = 0, i = 0;
            if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
                while (t = e[i++]) t === e[i] && (r = n.push(i));
                while (r--) e.splice(n[r], 1)
            }
            return u = null, e
        }, o = se.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else while (t = e[r++]) n += o(t);
            return n
        }, (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = m[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (n, r, i) {
                    return function (e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                }, CHILD: function (h, e, t, g, v) {
                    var y = "nth" !== h.slice(0, 3), m = "last" !== h.slice(-4), x = "of-type" === e;
                    return 1 === g && 0 === v ? function (e) {
                        return !!e.parentNode
                    } : function (e, t, n) {
                        var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode,
                            f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (y) {
                                while (l) {
                                    a = e;
                                    while (a = a[l]) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if (1 === a.nodeType && ++d && a === e) {
                                    i[h] = [k, s, d];
                                    break
                                }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                            return (d -= v) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                }, PSEUDO: function (e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
                        var n, r = a(e, o), i = r.length;
                        while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                    }) : function (e) {
                        return a(e, 0, t)
                    }) : a
                }
            },
            pseudos: {
                not: le(function (e) {
                    var r = [], i = [], s = f(e.replace($, "$1"));
                    return s[S] ? le(function (e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while (a--) (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function (e, t, n) {
                        return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                    }
                }), has: le(function (t) {
                    return function (e) {
                        return 0 < se(t, e).length
                    }
                }), contains: le(function (t) {
                    return t = t.replace(te, ne), function (e) {
                        return -1 < (e.textContent || o(e)).indexOf(t)
                    }
                }), lang: le(function (n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                }, root: function (e) {
                    return e === a
                }, focus: function (e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: ge(!1), disabled: ge(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !b.pseudos.empty(e)
                }, header: function (e) {
                    return J.test(e.nodeName)
                }, input: function (e) {
                    return Q.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: ve(function () {
                    return [0]
                }), last: ve(function (e, t) {
                    return [t - 1]
                }), eq: ve(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: ve(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: ve(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: ve(function (e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                    return e
                }), gt: ve(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) b.pseudos[e] = de(e);
        for (e in {submit: !0, reset: !0}) b.pseudos[e] = he(e);

        function me() {
        }

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(s, e, t) {
            var u = e.dir, l = e.next, c = l || u, f = t && "parentNode" === c, p = r++;
            return e.first ? function (e, t, n) {
                while (e = e[u]) if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function (e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u]) if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else while (e = e[u]) if (1 === e.nodeType || f) if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e; else {
                    if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
                    if ((i[c] = a)[2] = s(e, t, n)) return !0
                }
                return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function (e, t, n) {
                var r = i.length;
                while (r--) if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || function (e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) {
                    i = Te(p, u), v(i, [], n, r), o = i.length;
                    while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;
                            while (o--) (a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--) (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
                return e === i
            }, a, !0), l = be(function (e) {
                return -1 < P(i, e)
            }, a, !0), c = [function (e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null, r
            }]; s < r; s++) if (t = b.relative[e[s].type]) c = [be(we(c), t)]; else {
                if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                    for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
                    return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                }
                c.push(t)
            }
            return we(c)
        }

        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function (e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace($, " ")
                }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function (e, t) {
            var n, v, y, m, x, r, i = [], o = [], a = A[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == C || (T(o), n = !E);
                            while (s = v[a++]) if (s(o, t || C, n)) {
                                r.push(o);
                                break
                            }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function (e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function (e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(C);
    S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
    var h = function (e, t, n) {
        var r = [], i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
            if (i && S(e).is(n)) break;
            r.push(e)
        }
        return r
    }, T = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }, k = S.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(e, n, r) {
        return m(n) ? S.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function (e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function (e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }

    S.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, S.fn.extend({
        find: function (e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
                for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        }, filter: function (e) {
            return this.pushStack(D(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(D(this, e || [], !0))
        }, is: function (e) {
            return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || j, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }).prototype = S.fn, j = S(E);
    var L = /^(?:parents|prev(?:Until|All))/, H = {children: !0, contents: !0, next: !0, prev: !0};

    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType) ;
        return e
    }

    S.fn.extend({
        has: function (e) {
            var t = S(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && S(e);
            if (!k.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), S.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return h(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return h(e, "parentNode", n)
        }, next: function (e) {
            return O(e, "nextSibling")
        }, prev: function (e) {
            return O(e, "previousSibling")
        }, nextAll: function (e) {
            return h(e, "nextSibling")
        }, prevAll: function (e) {
            return h(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return h(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return h(e, "previousSibling", n)
        }, siblings: function (e) {
            return T((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return T(e.firstChild)
        }, contents: function (e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
        }
    }, function (r, i) {
        S.fn[r] = function (e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    S.Callbacks = function (r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
            n[t] = !0
        }), n) : S.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function () {
            for (a = a || r.once, o = i = !0; u.length; l = -1) {
                t = u.shift();
                while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
            }
            r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
        }, f = {
            add: function () {
                return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                    S.each(e, function (e, t) {
                        m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                    })
                }(arguments), t && !i && c()), this
            }, remove: function () {
                return S.each(arguments, function (e, t) {
                    var n;
                    while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                }), this
            }, has: function (e) {
                return e ? -1 < S.inArray(e, s) : 0 < s.length
            }, empty: function () {
                return s && (s = []), this
            }, disable: function () {
                return a = u = [], s = t = "", this
            }, disabled: function () {
                return !s
            }, lock: function () {
                return a = u = [], t || i || (s = t = ""), this
            }, locked: function () {
                return !!a
            }, fireWith: function (e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
            }, fire: function () {
                return f.fireWith(this, arguments), this
            }, fired: function () {
                return !!o
            }
        };
        return f
    }, S.extend({
        Deferred: function (e) {
            var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
                i = "pending", a = {
                    state: function () {
                        return i
                    }, always: function () {
                        return s.done(arguments).fail(arguments), this
                    }, "catch": function (e) {
                        return a.then(null, e)
                    }, pipe: function () {
                        var i = arguments;
                        return S.Deferred(function (r) {
                            S.each(o, function (e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function () {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    }, then: function (t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function () {
                                var n = this, r = arguments, e = function () {
                                    var e, t;
                                    if (!(i < u)) {
                                        if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                    }
                                }, t = s ? e : function () {
                                    try {
                                        e()
                                    } catch (e) {
                                        S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
                                    }
                                };
                                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }

                        return S.Deferred(function (e) {
                            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? S.extend(e, a) : a
                    }
                }, s = {};
            return S.each(o, function (e, t) {
                var n = t[2], r = t[5];
                a[t[1]] = n.add, r && n.add(function () {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        }, when: function (e) {
            var n = arguments.length, t = n, r = Array(t), i = s.call(arguments), o = S.Deferred(), a = function (t) {
                return function (e) {
                    r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function (e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, S.readyException = function (e) {
        C.setTimeout(function () {
            throw e
        })
    };
    var F = S.Deferred();

    function B() {
        E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready()
    }

    S.fn.ready = function (e) {
        return F.then(e)["catch"](function (e) {
            S.readyException(e)
        }), this
    }, S.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var $ = function (e, t, n, r, i, o, a) {
        var s = 0, u = e.length, l = null == n;
        if ("object" === w(n)) for (s in i = !0, n) $(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
            return l.call(S(e), n)
        })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }, _ = /^-ms-/, z = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }

    var V = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = S.expando + G.uid++
    }

    G.uid = 1, G.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n; else for (r in t) i[X(r)] = t[r];
            return i
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        }, access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                    while (n--) delete r[t[n]]
                }
                (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G, Q = new G, J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
            try {
                n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
            } catch (e) {
            }
            Q.set(e, t, n)
        } else n = void 0;
        return n
    }

    S.extend({
        hasData: function (e) {
            return Q.hasData(e) || Y.hasData(e)
        }, data: function (e, t, n) {
            return Q.access(e, t, n)
        }, removeData: function (e, t) {
            Q.remove(e, t)
        }, _data: function (e, t, n) {
            return Y.access(e, t, n)
        }, _removeData: function (e, t) {
            Y.remove(e, t)
        }
    }), S.fn.extend({
        data: function (n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function () {
                Q.set(this, n)
            }) : $(this, function (e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function () {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                Q.remove(this, e)
            })
        }
    }), S.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = S.queue(e, t), r = n.length, i = n.shift(), o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                S.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function () {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), S.fn.extend({
        queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                S.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, i = S.Deferred(), o = this, a = this.length, s = function () {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--) (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"], re = E.documentElement, ie = function (e) {
            return S.contains(e.ownerDocument, e)
        }, oe = {composed: !0};
    re.getRootNode && (ie = function (e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };

    function se(e, t, n, r) {
        var i, o, a = 20, s = r ? function () {
                return r.cur()
            } : function () {
                return S.css(e, t, "")
            }, u = s(), l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, S.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    var ue = {};

    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }

    S.fn.extend({
        show: function () {
            return le(this, !0)
        }, hide: function () {
            return le(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }

    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }

    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o); else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++]) if (r && -1 < S.inArray(o, r)) i && i.push(o); else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }

    var be = /^key/, we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Te = /^([^.]*)(?:\.(.+)|)/;

    function Ce() {
        return !0
    }

    function Ee() {
        return !1
    }

    function Se(e, t) {
        return e === function () {
            try {
                return E.activeElement
            } catch (e) {
            }
        }() == ("focus" === t)
    }

    function ke(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee; else if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
            return S().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
            S.event.add(this, t, i, r, n)
        })
    }

    function Ae(e, i, o) {
        o ? (Y.set(e, i, !1), S.event.add(e, i, {
            namespace: !1, handler: function (e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation(); else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
                } else r.length && (Y.set(this, i, {value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)}), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce)
    }

    S.event = {
        global: {}, add: function (t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
                    return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(P) || [""]).length;
                while (l--) d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && S.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
            }
        }, remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--) if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                    f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                    while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])
                } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t, n, r, i, o, a, s = new Array(arguments.length), u = S.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [], c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l), t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        }, handlers: function (e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                o.length && s.push({elem: l, handlers: o})
            }
            return l = this, u < t.length && s.push({elem: l, handlers: t.slice(u)}), s
        }, addProp: function (t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0, configurable: !0, get: m(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                }, set: function (e) {
                    Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                }
            })
        }, fix: function (e) {
            return e[S.expando] ? e : new S.Event(e)
        }, special: {
            load: {noBubble: !0}, click: {
                setup: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1
                }, trigger: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0
                }, _default: function (e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, S.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, S.Event = function (e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, S.event.addProp), S.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        S.event.special[e] = {
            setup: function () {
                return Ae(this, e, Se), !1
            }, trigger: function () {
                return Ae(this, e), !0
            }, delegateType: t
        }
    }), S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, i) {
        S.event.special[e] = {
            delegateType: i, bindType: i, handle: function (e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), S.fn.extend({
        on: function (e, t, n, r) {
            return ke(this, e, t, n, r)
        }, one: function (e, t, n, r) {
            return ke(this, e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function () {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<script|<style|<link/i, De = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function qe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }

    function Le(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function He(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Oe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
        }
    }

    function Pe(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d)) return n.each(function (e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o)
        });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {nonce: u.nonce || u.getAttribute("nonce")}, l) : b(u.textContent.replace(je, ""), u, l))
        }
        return n
    }

    function Re(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    S.extend({
        htmlPrefilter: function (e) {
            return e
        }, clone: function (e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]); else Oe(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        }, cleanData: function (e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++) if (V(n)) {
                if (t = n[Y.expando]) {
                    if (t.events) for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                    n[Y.expando] = void 0
                }
                n[Q.expando] && (n[Q.expando] = void 0)
            }
        }
    }), S.fn.extend({
        detach: function (e) {
            return Re(this, e, !0)
        }, remove: function (e) {
            return Re(this, e)
        }, text: function (e) {
            return $(this, function (e) {
                return void 0 === e ? S.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return Pe(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
            })
        }, prepend: function () {
            return Pe(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = qe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return Pe(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return Pe(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return S.clone(this, e, t)
            })
        }, html: function (e) {
            return $(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var n = [];
            return Pe(this, arguments, function (e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, a) {
        S.fn[e] = function (e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"), Ie = function (e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C), t.getComputedStyle(e)
    }, We = function (e, t, n) {
        var r, i, o = {};
        for (i in t) o[i] = e.style[i], e.style[i] = t[i];
        for (i in r = n.call(e), t) e.style[i] = o[i];
        return r
    }, Fe = new RegExp(ne.join("|"), "i");

    function Be(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function $e(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    !function () {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }

        var n, r, i, o, a, s, u = E.createElement("div"), l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
            boxSizingReliable: function () {
                return e(), r
            }, pixelBoxStyles: function () {
                return e(), o
            }, pixelPosition: function () {
                return e(), n
            }, reliableMarginLeft: function () {
                return e(), s
            }, scrollboxSize: function () {
                return e(), i
            }, reliableTrDimensions: function () {
                var e, t, n, r;
                return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a
            }
        }))
    }();
    var _e = ["Webkit", "Moz", "ms"], ze = E.createElement("div").style, Ue = {};

    function Xe(e) {
        var t = S.cssProps[e] || Ue[e];
        return t || (e in ze ? e : Ue[e] = function (e) {
            var t = e[0].toUpperCase() + e.slice(1), n = _e.length;
            while (n--) if ((e = _e[n] + t) in ze) return e
        }(e) || e)
    }

    var Ve = /^(none|table(?!-c[ea]).+)/, Ge = /^--/,
        Ye = {position: "absolute", visibility: "hidden", display: "block"},
        Qe = {letterSpacing: "0", fontWeight: "400"};

    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0, s = 0, u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Ze(e, t, n) {
        var r = Ie(e), i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r), o = i,
            a = Be(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Me.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function et(e, t, n, r, i) {
        return new et.prototype.init(e, t, n, r, i)
    }

    S.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t), u = Ge.test(t), l = e.style;
                if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = X(t);
            return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), S.each(["height", "width"], function (e, u) {
        S.cssHooks[u] = {
            get: function (e, t, n) {
                if (t) return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function () {
                    return Ze(e, u, n)
                })
            }, set: function (e, t, n) {
                var r, i = Ie(e), o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i), s = n ? Ke(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s)
            }
        }
    }), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), S.each({margin: "", padding: "", border: "Width"}, function (i, o) {
        S.cssHooks[i + o] = {
            expand: function (e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (S.cssHooks[i + o].set = Je)
    }), S.fn.extend({
        css: function (e, t) {
            return $(this, function (e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((S.Tween = et).prototype = {
        constructor: et, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
        }
    }).init.prototype = et.prototype, (et.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            }, set: function (e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, S.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, S.fx = et.prototype.init, S.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/, at = /queueHooks$/;

    function st() {
        nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick())
    }

    function ut() {
        return C.setTimeout(function () {
            tt = void 0
        }), tt = Date.now()
    }

    function lt(e, t) {
        var n, r = 0, i = {height: e};
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
    }

    function ft(o, e, t) {
        var n, a, r = 0, i = ft.prefilters.length, s = S.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (a) return !1;
            for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        }, l = s.promise({
            elem: o,
            props: S.extend({}, e),
            opts: S.extend(!0, {specialEasing: {}, easing: S.easing._default}, t),
            originalProperties: e,
            originalOptions: t,
            startTime: tt || ut(),
            duration: t.duration,
            tweens: [],
            createTween: function (e, t) {
                var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n), n
            },
            stop: function (e) {
                var t = 0, n = e ? l.tweens.length : 0;
                if (a) return this;
                for (a = !0; t < n; t++) l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
            }
        }), c = l.props;
        for (!function (e, t) {
            var n, r, i, o, a;
            for (n in e) if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i
        }(c, l.opts.specialEasing); r < i; r++) if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }

    S.Animation = S.extend(ft, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
        }, prefilters: [function (e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style,
                g = e.nodeType && ae(e), v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                a.unqueued || s()
            }), a.unqueued++, p.always(function () {
                p.always(function () {
                    a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
                })
            })), t) if (i = t[r], ot.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !v || void 0 === v[r]) continue;
                    g = !0
                }
                d[r] = v && v[r] || S.style(e, r)
            }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
                h.display = l
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {display: l}), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
                for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r])
            })), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }], prefilter: function (e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }), S.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
        }, r
    }, S.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (t, e, n, r) {
            var i = S.isEmptyObject(t), o = S.speed(e, n, r), a = function () {
                var e = ft(this, S.extend({}, t), o);
                (i || Y.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (i, e, o) {
            var a = function (e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
                var e = !0, t = null != i && i + "queueHooks", n = S.timers, r = Y.get(this);
                if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        }, finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = S.timers, o = n ? n.length : 0;
                for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function (e, r) {
        var i = S.fn[r];
        S.fn[r] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
        }
    }), S.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, r) {
        S.fn[e] = function (e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), S.timers = [], S.fx.tick = function () {
        var e, t = 0, n = S.timers;
        for (tt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), tt = void 0
    }, S.fx.timer = function (e) {
        S.timers.push(e), S.fx.start()
    }, S.fx.interval = 13, S.fx.start = function () {
        nt || (nt = !0, st())
    }, S.fx.stop = function () {
        nt = null
    }, S.fx.speeds = {slow: 600, fast: 200, _default: 400}, S.fn.delay = function (r, e) {
        return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function () {
                C.clearTimeout(n)
            }
        })
    }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value;
    var pt, dt = S.expr.attrHandle;
    S.fn.extend({
        attr: function (e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length)
        }, removeAttr: function (e) {
            return this.each(function () {
                S.removeAttr(this, e)
            })
        }
    }), S.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, r = 0, i = t && t.match(P);
            if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n)
        }
    }), pt = {
        set: function (e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var a = dt[t] || S.find.attr;
        dt[t] = function (e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r
        }
    });
    var ht = /^(?:input|select|textarea|button)$/i, gt = /^(?:a|area)$/i;

    function vt(e) {
        return (e.match(P) || []).join(" ")
    }

    function yt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }

    S.fn.extend({
        prop: function (e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[S.propFix[e] || e]
            })
        }
    }), S.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    }), y.optSelected || (S.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        S.propFix[this.toLowerCase()] = this
    }), S.fn.extend({
        addClass: function (t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function (e) {
                S(this).addClass(t.call(this, e, yt(this)))
            });
            if ((e = mt(t)).length) while (n = this[u++]) if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                a = 0;
                while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                i !== (s = vt(r)) && n.setAttribute("class", s)
            }
            return this
        }, removeClass: function (t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function (e) {
                S(this).removeClass(t.call(this, e, yt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = mt(t)).length) while (n = this[u++]) if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                a = 0;
                while (o = e[a++]) while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                i !== (s = vt(r)) && n.setAttribute("class", s)
            }
            return this
        }, toggleClass: function (i, t) {
            var o = typeof i, a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
                S(this).toggleClass(i.call(this, e, yt(this), t), t)
            }) : this.each(function () {
                var e, t, n, r;
                if (a) {
                    t = 0, n = S(this), r = mt(i);
                    while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var xt = /\r/g;
    S.fn.extend({
        val: function (n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function (e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
                    return null == e ? "" : e + ""
                })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : vt(S.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                        if (t = S(n).val(), a) return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    var n, r, i = e.options, o = S.makeArray(t), a = i.length;
                    while (a--) ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), S.each(["radio", "checkbox"], function () {
        S.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        }, y.checkOn || (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in C;
    var bt = /^(?:focusinfocus|focusoutblur)$/, wt = function (e) {
        e.stopPropagation()
    };
    S.extend(S.event, {
        trigger: function (e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        }, simulate: function (e, t, n) {
            var r = S.extend(new S.Event, n, {type: e, isSimulated: !0});
            S.event.trigger(r, null, t)
        }
    }), S.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                S.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return S.event.trigger(e, t, n, !0)
        }
    }), y.focusin || S.each({focus: "focusin", blur: "focusout"}, function (n, r) {
        var i = function (e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function () {
                var e = this.ownerDocument || this.document || this, t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
            }, teardown: function () {
                var e = this.ownerDocument || this.document || this, t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    });
    var Tt = C.location, Ct = {guid: Date.now()}, Et = /\?/;
    S.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t
    };
    var St = /\[\]$/, kt = /\r?\n/g, At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;

    function Dt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) S.each(e, function (e, t) {
            r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        }); else if (r || "object" !== w(e)) i(n, e); else for (t in e) Dt(n + "[" + t + "]", e[t], r, i)
    }

    S.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e) Dt(n, e[n], t, i);
        return r.join("&")
    }, S.fn.extend({
        serialize: function () {
            return S.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
            }).map(function (e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
                    return {name: t.name, value: e.replace(kt, "\r\n")}
                }) : {name: t.name, value: n.replace(kt, "\r\n")}
            }).get()
        }
    });
    var jt = /%20/g, qt = /#.*$/, Lt = /([?&])_=[^&]*/, Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ot = /^(?:GET|HEAD)$/,
        Pt = /^\/\//, Rt = {}, Mt = {}, It = "*/".concat("*"), Wt = E.createElement("a");

    function Ft(o) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0, i = e.toLowerCase().match(P) || [];
            if (m(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Bt(t, i, o, a) {
        var s = {}, u = t === Mt;

        function l(e) {
            var r;
            return s[e] = !0, S.each(t[e] || [], function (e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }

        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function $t(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r), e
    }

    Wt.href = Tt.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function (e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t), y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event, x = S.Deferred(),
                b = S.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    }, getAllResponseHeaders: function () {
                        return h ? p : null
                    }, setRequestHeader: function (e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    }, overrideMimeType: function (e) {
                        return null == h && (v.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (h) T.always(e[T.status]); else for (t in e) w[t] = [w[t], e[t]];
                        return this
                    }, abort: function (e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h) return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function () {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
                    var r, i, o, a, s = e.contents, u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r) for (i in s) if (s[i] && s[i].test(r)) {
                        u.unshift(i);
                        break
                    }
                    if (u[0] in n) o = u[0]; else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function () {
                }), s = function (e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                            break
                        }
                        if (!0 !== a) if (a && e["throws"]) t = a(t); else try {
                            t = a(t)
                        } catch (e) {
                            return {state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o}
                        }
                    }
                    return {state: "success", data: t}
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
            }

            return T
        },
        getJSON: function (e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return S.get(e, void 0, t, "script")
        }
    }), S.each(["get", "post"], function (e, i) {
        S[i] = function (e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }), S.ajaxPrefilter(function (e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), S._evalUrl = function (e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () {
                }
            },
            dataFilter: function (e) {
                S.globalEval(e, t, n)
            }
        })
    }, S.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (n) {
            return m(n) ? this.each(function (e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function () {
                var e = S(this), t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        }, wrap: function (t) {
            var n = m(t);
            return this.each(function (e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                S(this).replaceWith(this.childNodes)
            }), this
        }
    }), S.expr.pseudos.hidden = function (e) {
        return !S.expr.pseudos.visible(e)
    }, S.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, S.ajaxSettings.xhr = function () {
        try {
            return new C.XMLHttpRequest
        } catch (e) {
        }
    };
    var _t = {0: 200, 1223: 204}, zt = S.ajaxSettings.xhr();
    y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function (i) {
        var o, a;
        if (y.cors || zt && !i.crossDomain) return {
            send: function (e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function (e) {
                    return function () {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {binary: r.response} : {text: r.responseText}, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
                    4 === r.readyState && C.setTimeout(function () {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            }, abort: function () {
                o && o()
            }
        }
    }), S.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), S.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return S.globalEval(e), e
            }
        }
    }), S.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), S.ajaxTransport("script", function (n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function (e, t) {
                r = S("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function (e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), E.head.appendChild(r[0])
            }, abort: function () {
                i && i()
            }
        }
    });
    var Ut, Xt = [], Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Xt.pop() || S.expando + "_" + Ct.guid++;
            return this[e] = !0, e
        }
    }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r, i, o,
            a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return o || S.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
            o = arguments
        }, n.always(function () {
            void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0
        }), "script"
    }), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
        var r, i, o
    }, S.fn.load = function (e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, S.expr.pseudos.animated = function (t) {
        return S.grep(S.timers, function (e) {
            return t === e.elem
        }).length
    }, S.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"), c = S(e), f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f))
        }
    }, S.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                S.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n, r = this[0], i = {top: 0, left: 0};
                if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect(); else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent;
                while (e && "static" === S.css(e, "position")) e = e.offsetParent;
                return e || re
            })
        }
    }), S.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function (e) {
            return $(this, function (e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), S.each(["top", "left"], function (e, n) {
        S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
            if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t
        })
    }), S.each({Height: "height", Width: "width"}, function (a, s) {
        S.each({padding: "inner" + a, content: s, "": "outer" + a}, function (r, o) {
            S.fn[o] = function (e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function (e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        S.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), S.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }, hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
        S.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function (e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || S.guid++, i
    }, S.holdReady = function (e) {
        e ? S.readyWait++ : S.ready(!0)
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, S.trim = function (e) {
        return null == e ? "" : (e + "").replace(Gt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return S
    });
    var Yt = C.jQuery, Qt = C.$;
    return S.noConflict = function (e) {
        return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S
    }, "undefined" == typeof e && (C.jQuery = C.$ = S), S
});
jQuery.noConflict();/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0), function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function (e) {
        return t(e, window)
    }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
}(function (s, n) {
    "use strict";

    function e(e) {
        return 0 <= function (e, t) {
            for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], i = 1; i <= 3; i++) {
                if (+o[i] < +n[i]) return 1;
                if (+n[i] < +o[i]) return -1
            }
            return 0
        }(s.fn.jquery, e)
    }

    s.migrateVersion = "3.3.2", n.console && n.console.log && (s && e("3.0.0") || n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
    var r = {};

    function u(e) {
        var t = n.console;
        s.migrateDeduplicateWarnings && r[e] || (r[e] = !0, s.migrateWarnings.push(e), t && t.warn && !s.migrateMute && (t.warn("JQMIGRATE: " + e), s.migrateTrace && t.trace && t.trace()))
    }

    function t(e, t, r, n) {
        Object.defineProperty(e, t, {
            configurable: !0, enumerable: !0, get: function () {
                return u(n), r
            }, set: function (e) {
                u(n), r = e
            }
        })
    }

    function o(e, t, r, n) {
        e[t] = function () {
            return u(n), r.apply(this, arguments)
        }
    }

    s.migrateDeduplicateWarnings = !0, s.migrateWarnings = [], void 0 === s.migrateTrace && (s.migrateTrace = !0), s.migrateReset = function () {
        r = {}, s.migrateWarnings.length = 0
    }, "BackCompat" === n.document.compatMode && u("jQuery is not compatible with Quirks Mode");
    var i, a, c, d = {}, l = s.fn.init, p = s.find, f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
        y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g, m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    for (i in s.fn.init = function (e) {
        var t = Array.prototype.slice.call(arguments);
        return "string" == typeof e && "#" === e && (u("jQuery( '#' ) is not a valid selector"), t[0] = []), l.apply(this, t)
    }, s.fn.init.prototype = s.fn, s.find = function (t) {
        var r = Array.prototype.slice.call(arguments);
        if ("string" == typeof t && f.test(t)) try {
            n.document.querySelector(t)
        } catch (e) {
            t = t.replace(y, function (e, t, r, n) {
                return "[" + t + r + '"' + n + '"]'
            });
            try {
                n.document.querySelector(t), u("Attribute selector with '#' must be quoted: " + r[0]), r[0] = t
            } catch (e) {
                u("Attribute selector with '#' was not fixed: " + r[0])
            }
        }
        return p.apply(this, r)
    }, p) Object.prototype.hasOwnProperty.call(p, i) && (s.find[i] = p[i]);
    o(s.fn, "size", function () {
        return this.length
    }, "jQuery.fn.size() is deprecated and removed; use the .length property"), o(s, "parseJSON", function () {
        return JSON.parse.apply(null, arguments)
    }, "jQuery.parseJSON is deprecated; use JSON.parse"), o(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"), o(s, "unique", s.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"), t(s.expr, "filters", s.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), t(s.expr, ":", s.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"), e("3.1.1") && o(s, "trim", function (e) {
        return null == e ? "" : (e + "").replace(m, "")
    }, "jQuery.trim is deprecated; use String.prototype.trim"), e("3.2.0") && (o(s, "nodeName", function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }, "jQuery.nodeName is deprecated"), o(s, "isArray", Array.isArray, "jQuery.isArray is deprecated; use Array.isArray")), e("3.3.0") && (o(s, "isNumeric", function (e) {
        var t = typeof e;
        return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
    }, "jQuery.isNumeric() is deprecated"), s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        d["[object " + t + "]"] = t.toLowerCase()
    }), o(s, "type", function (e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[Object.prototype.toString.call(e)] || "object" : typeof e
    }, "jQuery.type is deprecated"), o(s, "isFunction", function (e) {
        return "function" == typeof e
    }, "jQuery.isFunction() is deprecated"), o(s, "isWindow", function (e) {
        return null != e && e === e.window
    }, "jQuery.isWindow() is deprecated")), s.ajax && (a = s.ajax, c = /(=)\?(?=&|$)|\?\?/, s.ajax = function () {
        var e = a.apply(this, arguments);
        return e.promise && (o(e, "success", e.done, "jQXHR.success is deprecated and removed"), o(e, "error", e.fail, "jQXHR.error is deprecated and removed"), o(e, "complete", e.always, "jQXHR.complete is deprecated and removed")), e
    }, e("4.0.0") || s.ajaxPrefilter("+json", function (e) {
        !1 !== e.jsonp && (c.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && c.test(e.data)) && u("JSON-to-JSONP auto-promotion is deprecated")
    }));
    var g = s.fn.removeAttr, h = s.fn.toggleClass, v = /\S+/g;

    function j(e) {
        return e.replace(/-([a-z])/g, function (e, t) {
            return t.toUpperCase()
        })
    }

    s.fn.removeAttr = function (e) {
        var r = this;
        return s.each(e.match(v), function (e, t) {
            s.expr.match.bool.test(t) && (u("jQuery.fn.removeAttr no longer sets boolean properties: " + t), r.prop(t, !1))
        }), g.apply(this, arguments)
    };
    var Q, b = !(s.fn.toggleClass = function (t) {
            return void 0 !== t && "boolean" != typeof t ? h.apply(this, arguments) : (u("jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function () {
                var e = this.getAttribute && this.getAttribute("class") || "";
                e && s.data(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
            }))
        }), w = /^[a-z]/,
        x = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    s.swap && s.each(["height", "width", "reliableMarginRight"], function (e, t) {
        var r = s.cssHooks[t] && s.cssHooks[t].get;
        r && (s.cssHooks[t].get = function () {
            var e;
            return b = !0, e = r.apply(this, arguments), b = !1, e
        })
    }), s.swap = function (e, t, r, n) {
        var o, i, a = {};
        for (i in b || u("jQuery.swap() is undocumented and deprecated"), t) a[i] = e.style[i], e.style[i] = t[i];
        for (i in o = r.apply(e, n || []), t) e.style[i] = a[i];
        return o
    }, e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {}, {
        set: function () {
            return u("JQMIGRATE: jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments)
        }
    })), s.cssNumber || (s.cssNumber = {}), Q = s.fn.css, s.fn.css = function (e, t) {
        var r, n, o = this;
        return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function (e, t) {
            s.fn.css.call(o, e, t)
        }), this) : ("number" == typeof t && (r = j(e), n = r, w.test(n) && x.test(n[0].toUpperCase() + n.slice(1)) || s.cssNumber[r] || u('Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')), Q.apply(this, arguments))
    };
    var A, k, S, M, N = s.data;
    s.data = function (e, t, r) {
        var n, o, i;
        if (t && "object" == typeof t && 2 === arguments.length) {
            for (i in n = s.hasData(e) && N.call(this, e), o = {}, t) i !== j(i) ? (u("jQuery.data() always sets/gets camelCased names: " + i), n[i] = t[i]) : o[i] = t[i];
            return N.call(this, e, o), t
        }
        return t && "string" == typeof t && t !== j(t) && (n = s.hasData(e) && N.call(this, e)) && t in n ? (u("jQuery.data() always sets/gets camelCased names: " + t), 2 < arguments.length && (n[t] = r), n[t]) : N.apply(this, arguments)
    }, s.fx && (S = s.Tween.prototype.run, M = function (e) {
        return e
    }, s.Tween.prototype.run = function () {
        1 < s.easing[this.easing].length && (u("'jQuery.easing." + this.easing.toString() + "' should use only one argument"), s.easing[this.easing] = M), S.apply(this, arguments)
    }, A = s.fx.interval || 13, k = "jQuery.fx.interval is deprecated", n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
        configurable: !0,
        enumerable: !0,
        get: function () {
            return n.document.hidden || u(k), A
        },
        set: function (e) {
            u(k), A = e
        }
    }));
    var R = s.fn.load, H = s.event.add, C = s.event.fix;
    s.event.props = [], s.event.fixHooks = {}, t(s.event.props, "concat", s.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"), s.event.fix = function (e) {
        var t, r = e.type, n = this.fixHooks[r], o = s.event.props;
        if (o.length) {
            u("jQuery.event.props are deprecated and removed: " + o.join());
            while (o.length) s.event.addProp(o.pop())
        }
        if (n && !n._migrated_ && (n._migrated_ = !0, u("jQuery.event.fixHooks are deprecated and removed: " + r), (o = n.props) && o.length)) while (o.length) s.event.addProp(o.pop());
        return t = C.call(this, e), n && n.filter ? n.filter(t, e) : t
    }, s.event.add = function (e, t) {
        return e === n && "load" === t && "complete" === n.document.readyState && u("jQuery(window).on('load'...) called after load event occurred"), H.apply(this, arguments)
    }, s.each(["load", "unload", "error"], function (e, t) {
        s.fn[t] = function () {
            var e = Array.prototype.slice.call(arguments, 0);
            return "load" === t && "string" == typeof e[0] ? R.apply(this, e) : (u("jQuery.fn." + t + "() is deprecated"), e.splice(0, 0, t), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this))
        }
    }), s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, r) {
        s.fn[r] = function (e, t) {
            return u("jQuery.fn." + r + "() event shorthand is deprecated"), 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
        }
    }), s(function () {
        s(n.document).triggerHandler("ready")
    }), s.event.special.ready = {
        setup: function () {
            this === n.document && u("'ready' event is deprecated")
        }
    }, s.fn.extend({
        bind: function (e, t, r) {
            return u("jQuery.fn.bind() is deprecated"), this.on(e, null, t, r)
        }, unbind: function (e, t) {
            return u("jQuery.fn.unbind() is deprecated"), this.off(e, null, t)
        }, delegate: function (e, t, r, n) {
            return u("jQuery.fn.delegate() is deprecated"), this.on(t, e, r, n)
        }, undelegate: function (e, t, r) {
            return u("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
        }, hover: function (e, t) {
            return u("jQuery.fn.hover() is deprecated"), this.on("mouseenter", e).on("mouseleave", t || e)
        }
    });

    function T(e) {
        var t = n.document.implementation.createHTMLDocument("");
        return t.body.innerHTML = e, t.body && t.body.innerHTML
    }

    function P(e) {
        var t = e.replace(O, "<$1></$2>");
        t !== e && T(e) !== T(t) && u("HTML tags must be properly nested and closed: " + e)
    }

    var O = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        q = s.htmlPrefilter;
    s.UNSAFE_restoreLegacyHtmlPrefilter = function () {
        s.htmlPrefilter = function (e) {
            return P(e), e.replace(O, "<$1></$2>")
        }
    }, s.htmlPrefilter = function (e) {
        return P(e), q(e)
    };
    var D, _ = s.fn.offset;
    s.fn.offset = function () {
        var e = this[0];
        return !e || e.nodeType && e.getBoundingClientRect ? _.apply(this, arguments) : (u("jQuery.fn.offset() requires a valid DOM element"), arguments.length ? this : void 0)
    }, s.ajax && (D = s.param, s.param = function (e, t) {
        var r = s.ajaxSettings && s.ajaxSettings.traditional;
        return void 0 === t && r && (u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), t = r), D.call(this, e, t)
    });
    var E, F, J = s.fn.andSelf || s.fn.addBack;
    return s.fn.andSelf = function () {
        return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), J.apply(this, arguments)
    }, s.Deferred && (E = s.Deferred, F = [["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"], ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"], ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]], s.Deferred = function (e) {
        var i = E(), a = i.promise();
        return i.pipe = a.pipe = function () {
            var o = arguments;
            return u("deferred.pipe() is deprecated"), s.Deferred(function (n) {
                s.each(F, function (e, t) {
                    var r = "function" == typeof o[e] && o[e];
                    i[t[1]](function () {
                        var e = r && r.apply(this, arguments);
                        e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === a ? n.promise() : this, r ? [e] : arguments)
                    })
                }), o = null
            }).promise()
        }, e && e.call(i, i), i
    }, s.Deferred.exceptionHook = E.exceptionHook), s
});
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad", swing: function (e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    }, easeInQuad: function (e, f, a, h, g) {
        return h * (f /= g) * f + a
    }, easeOutQuad: function (e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a
    }, easeInOutQuad: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return -h / 2 * ((--f) * (f - 2) - 1) + a
    }, easeInCubic: function (e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    }, easeOutCubic: function (e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    }, easeInOutCubic: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    }, easeInQuart: function (e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    }, easeOutQuart: function (e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a
    }, easeInOutQuart: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a
    }, easeInQuint: function (e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    }, easeOutQuint: function (e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    }, easeInOutQuint: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    }, easeInSine: function (e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
    }, easeOutSine: function (e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    }, easeInOutSine: function (e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    }, easeInExpo: function (e, f, a, h, g) {
        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    }, easeOutExpo: function (e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    }, easeInOutExpo: function (e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    }, easeInCirc: function (e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    }, easeOutCirc: function (e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    }, easeInOutCirc: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    }, easeInElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    }, easeOutElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
    }, easeInOutElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k / 2) == 2) {
            return e + l
        }
        if (!j) {
            j = k * (0.3 * 1.5)
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
    }, easeInBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    }, easeOutBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    }, easeInOutBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    }, easeInBounce: function (e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    }, easeOutBounce: function (e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    }, easeInOutBounce: function (e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
});/*!
 * Master Slider – Responsive Touch Swipe Slider [lite version]
 * Copyright © 2021 All Rights Reserved.
 *
 * @author Averta [www.averta.net]
 * @version 2.80.9
 * @date Feb 2021
 */
window.averta = {}, function ($) {
    function getVendorPrefix() {
        if ("result" in arguments.callee) return arguments.callee.result;
        var regex = /^(Moz|Khtml|O|ms|Icab)(?=[A-Z])/, webKitOnly = /^(Webkit|webkit)(?=[A-Z])/,
            someScript = document.getElementsByTagName("script")[0];
        for (var prop in someScript.style) if (webKitOnly.test(prop)) return arguments.callee.result = "Webkit";
        for (var prop in someScript.style) if (regex.test(prop)) return arguments.callee.result = prop.match(regex)[0];
        return arguments.callee.result = "WebkitOpacity" in someScript.style ? "Webkit" : "KhtmlOpacity" in someScript.style ? "Khtml" : ""
    }

    function checkStyleValue(prop) {
        var b = document.body || document.documentElement, s = b.style, p = prop;
        if ("string" == typeof s[p]) return !0;
        v = ["Moz", "Webkit", "Khtml", "O", "ms"], p = p.charAt(0).toUpperCase() + p.substr(1);
        for (var i = 0; i < v.length; i++) if ("string" == typeof s[v[i] + p]) return !0;
        return !1
    }

    function supportsTransitions() {
        return checkStyleValue("transition")
    }

    function supportsTransforms() {
        return checkStyleValue("transform")
    }

    function supports3DTransforms() {
        if (!supportsTransforms()) return !1;
        var has3d, el = document.createElement("i"), transforms = {
            WebkitTransform: "-webkit-transform",
            OTransform: "-o-transform",
            MSTransform: "-ms-transform",
            msTransform: "-ms-transform",
            MozTransform: "-moz-transform",
            Transform: "transform",
            transform: "transform"
        };
        el.style.display = "block", document.body.insertBefore(el, null);
        for (var t in transforms) void 0 !== el.style[t] && (el.style[t] = "translate3d(1px,1px,1px)", has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]));
        return document.body.removeChild(el), null != has3d && has3d.length > 0 && "none" !== has3d
    }

    window["package"] = function (name) {
        window[name] || (window[name] = {})
    };
    var extend = function (target, object) {
        for (var key in object) target[key] = object[key]
    };
    Function.prototype.extend = function (superclass) {
        "function" == typeof superclass.prototype.constructor ? (extend(this.prototype, superclass.prototype), this.prototype.constructor = this) : (this.prototype.extend(superclass), this.prototype.constructor = this)
    };
    var trans = {Moz: "-moz-", Webkit: "-webkit-", Khtml: "-khtml-", O: "-o-", ms: "-ms-", Icab: "-icab-"};
    window._mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), window._touch = "ontouchstart" in document, $(document).ready(function () {
        window._jcsspfx = getVendorPrefix(), window._csspfx = trans[window._jcsspfx], window._cssanim = supportsTransitions(), window._css3d = supports3DTransforms(), window._css2d = supportsTransforms()
    }), window.parseQueryString = function (url) {
        var queryString = {};
        return url.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function ($0, $1, $2, $3) {
            queryString[$1] = $3
        }), queryString
    };
    var fps60 = 50 / 3;
    if (window.requestAnimationFrame || (window.requestAnimationFrame = function () {
        return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
            window.setTimeout(callback, fps60)
        }
    }()), window.getComputedStyle || (window.getComputedStyle = function (el) {
        return this.el = el, this.getPropertyValue = function (prop) {
            var re = /(\-([a-z]){1})/g;
            return "float" == prop && (prop = "styleFloat"), re.test(prop) && (prop = prop.replace(re, function () {
                return arguments[2].toUpperCase()
            })), el.currentStyle[prop] ? el.currentStyle[prop] : null
        }, el.currentStyle
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function (elt) {
        var len = this.length >>> 0, from = Number(arguments[1]) || 0;
        for (from = 0 > from ? Math.ceil(from) : Math.floor(from), 0 > from && (from += len); len > from; from++) if (from in this && this[from] === elt) return from;
        return -1
    }), window.isMSIE = function (version) {
        if (!window.MSBrowserInfo.msie) return !1;
        if (!version) return !0;
        var ieVer = window.MSBrowserInfo.version.slice(0, window.MSBrowserInfo.version.indexOf("."));
        return "string" == typeof version ? eval(-1 !== version.indexOf("<") || -1 !== version.indexOf(">") ? ieVer + version : version + "==" + ieVer) : version == ieVer
    }, $.removeDataAttrs = function ($target, exclude) {
        var i, attrName, dataAttrsToDelete = [], dataAttrs = $target[0].attributes, dataAttrsLen = dataAttrs.length;
        for (exclude = exclude || [], i = 0; dataAttrsLen > i; i++) attrName = dataAttrs[i].name, "data-" === attrName.substring(0, 5) && -1 === exclude.indexOf(attrName) && dataAttrsToDelete.push(dataAttrs[i].name);
        $.each(dataAttrsToDelete, function (index, attrName) {
            $target.removeAttr(attrName)
        })
    }, jQuery) {
        $.jqLoadFix = function () {
            if (this.complete) {
                var that = this;
                setTimeout(function () {
                    $(that).trigger("load")
                }, 1)
            }
        }, jQuery.uaMatch = jQuery.uaMatch || function (ua) {
            ua = ua.toLowerCase();
            var match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
            return {browser: match[1] || "", version: match[2] || "0"}
        }, matched = jQuery.uaMatch(navigator.userAgent), browser = {}, matched.browser && (browser[matched.browser] = !0, browser.version = matched.version), browser.chrome ? browser.webkit = !0 : browser.webkit && (browser.safari = !0);
        var isIE11 = !!navigator.userAgent.match(/Trident\/7\./);
        isIE11 && (browser.msie = "true", delete browser.mozilla), window.MSBrowserInfo = browser, $.fn.preloadImg = function (src, _event) {
            return this.each(function () {
                var $this = $(this), self = this, img = new Image;
                img.onload = function (event) {
                    null == event && (event = {}), $this.attr("src", src), event.width = img.width, event.height = img.height, $this.data("width", img.width), $this.data("height", img.height), setTimeout(function () {
                        _event.call(self, event)
                    }, 50), img = null
                }, img.src = src
            }), this
        }
    }
}(jQuery), function () {
    "use strict";
    averta.EventDispatcher = function () {
        this.listeners = {}
    }, averta.EventDispatcher.extend = function (_proto) {
        var instance = new averta.EventDispatcher;
        for (var key in instance) "constructor" != key && (_proto[key] = averta.EventDispatcher.prototype[key])
    }, averta.EventDispatcher.prototype = {
        constructor: averta.EventDispatcher,
        addEventListener: function (event, listener, ref) {
            this.listeners[event] || (this.listeners[event] = []), this.listeners[event].push({
                listener: listener,
                ref: ref
            })
        },
        removeEventListener: function (event, listener, ref) {
            if (this.listeners[event]) {
                for (var i = 0; i < this.listeners[event].length; ++i) listener === this.listeners[event][i].listener && ref === this.listeners[event][i].ref && this.listeners[event].splice(i--, 1);
                0 === this.listeners[event].length && (this.listeners[event] = null)
            }
        },
        dispatchEvent: function (event) {
            if (event.target = this, this.listeners[event.type]) for (var i = 0, l = this.listeners[event.type].length; l > i; ++i) this.listeners[event.type][i].listener.call(this.listeners[event.type][i].ref, event)
        }
    }
}(), function ($) {
    "use strict";
    var isTouch = "ontouchstart" in document, isPointer = window.navigator.pointerEnabled,
        isMSPoiner = !isPointer && window.navigator.msPointerEnabled, usePointer = isPointer || isMSPoiner,
        ev_start = (isPointer ? "pointerdown " : "") + (isMSPoiner ? "MSPointerDown " : "") + (isTouch ? "touchstart " : "") + "mousedown",
        ev_move = (isPointer ? "pointermove " : "") + (isMSPoiner ? "MSPointerMove " : "") + (isTouch ? "touchmove " : "") + "mousemove",
        ev_end = (isPointer ? "pointerup " : "") + (isMSPoiner ? "MSPointerUp " : "") + (isTouch ? "touchend " : "") + "mouseup",
        ev_cancel = (isPointer ? "pointercancel " : "") + (isMSPoiner ? "MSPointerCancel " : "") + "touchcancel";
    averta.TouchSwipe = function ($element) {
        this.$element = $element, this.enabled = !0, $element.bind(ev_start, {target: this}, this.__touchStart), $element[0].swipe = this, this.onSwipe = null, this.swipeType = "horizontal", this.noSwipeSelector = "input, textarea, button, .no-swipe, .ms-no-swipe", this.lastStatus = {}
    };
    var p = averta.TouchSwipe.prototype;
    p.getDirection = function (new_x, new_y) {
        switch (this.swipeType) {
            case"horizontal":
                return new_x <= this.start_x ? "left" : "right";
            case"vertical":
                return new_y <= this.start_y ? "up" : "down";
            case"all":
                return Math.abs(new_x - this.start_x) > Math.abs(new_y - this.start_y) ? new_x <= this.start_x ? "left" : "right" : new_y <= this.start_y ? "up" : "down"
        }
    }, p.priventDefultEvent = function (new_x, new_y) {
        var dx = Math.abs(new_x - this.start_x), dy = Math.abs(new_y - this.start_y), horiz = dx > dy;
        return "horizontal" === this.swipeType && horiz || "vertical" === this.swipeType && !horiz
    }, p.createStatusObject = function (evt) {
        var temp_x, temp_y, status_data = {};
        return temp_x = this.lastStatus.distanceX || 0, temp_y = this.lastStatus.distanceY || 0, status_data.distanceX = evt.pageX - this.start_x, status_data.distanceY = evt.pageY - this.start_y, status_data.moveX = status_data.distanceX - temp_x, status_data.moveY = status_data.distanceY - temp_y, status_data.distance = parseInt(Math.sqrt(Math.pow(status_data.distanceX, 2) + Math.pow(status_data.distanceY, 2))), status_data.duration = (new Date).getTime() - this.start_time, status_data.direction = this.getDirection(evt.pageX, evt.pageY), status_data
    }, p.__reset = function (event, jqevt) {
        this.reset = !1, this.lastStatus = {}, this.start_time = (new Date).getTime();
        var point = this.__getPoint(event, jqevt);
        this.start_x = point.pageX, this.start_y = point.pageY
    }, p.__touchStart = function (event) {
        var swipe = event.data.target, jqevt = event;
        if (swipe.enabled && !($(event.target).closest(swipe.noSwipeSelector, swipe.$element).length > 0)) {
            if (event = event.originalEvent, usePointer && $(this).css("-ms-touch-action", "horizontal" === swipe.swipeType ? "pan-y" : "pan-x"), !swipe.onSwipe) return void $.error("Swipe listener is undefined");
            if (!(swipe.touchStarted || isTouch && swipe.start_time && "mousedown" === event.type && (new Date).getTime() - swipe.start_time < 600)) {
                var point = swipe.__getPoint(event, jqevt);
                swipe.start_x = point.pageX, swipe.start_y = point.pageY, swipe.start_time = (new Date).getTime(), $(document).bind(ev_end, {target: swipe}, swipe.__touchEnd).bind(ev_move, {target: swipe}, swipe.__touchMove).bind(ev_cancel, {target: swipe}, swipe.__touchCancel);
                var status = swipe.createStatusObject(point);
                status.phase = "start", swipe.onSwipe.call(null, status), isTouch || jqevt.preventDefault(), swipe.lastStatus = status, swipe.touchStarted = !0
            }
        }
    }, p.__touchMove = function (event) {
        var swipe = event.data.target, jqevt = event;
        if (event = event.originalEvent, swipe.touchStarted) {
            clearTimeout(swipe.timo), swipe.timo = setTimeout(function () {
                swipe.__reset(event, jqevt)
            }, 60);
            var point = swipe.__getPoint(event, jqevt), status = swipe.createStatusObject(point);
            swipe.priventDefultEvent(point.pageX, point.pageY) && jqevt.preventDefault(), status.phase = "move", swipe.lastStatus = status, swipe.onSwipe.call(null, status)
        }
    }, p.__touchEnd = function (event) {
        var swipe = event.data.target, jqevt = event;
        event = event.originalEvent, clearTimeout(swipe.timo);
        var status = swipe.lastStatus;
        isTouch || jqevt.preventDefault(), status.phase = "end", swipe.touchStarted = !1, swipe.priventEvt = null, $(document).unbind(ev_end, swipe.__touchEnd).unbind(ev_move, swipe.__touchMove).unbind(ev_cancel, swipe.__touchCancel), status.speed = status.distance / status.duration, swipe.onSwipe.call(null, status)
    }, p.__touchCancel = function (event) {
        var swipe = event.data.target;
        swipe.__touchEnd(event)
    }, p.__getPoint = function (event, jqEvent) {
        return isTouch && -1 === event.type.indexOf("mouse") ? event.touches[0] : usePointer ? event : jqEvent
    }, p.enable = function () {
        this.enabled || (this.enabled = !0)
    }, p.disable = function () {
        this.enabled && (this.enabled = !1)
    }
}(jQuery), function () {
    "use strict";
    averta.Ticker = function () {
    };
    var st = averta.Ticker, list = [], len = 0, __stopped = !0;
    st.add = function (listener, ref) {
        return list.push([listener, ref]), 1 === list.length && st.start(), len = list.length
    }, st.remove = function (listener, ref) {
        for (var i = 0, l = list.length; l > i; ++i) list[i] && list[i][0] === listener && list[i][1] === ref && list.splice(i, 1);
        len = list.length, 0 === len && st.stop()
    }, st.start = function () {
        __stopped && (__stopped = !1, __tick())
    }, st.stop = function () {
        __stopped = !0
    };
    var __tick = function () {
        if (!st.__stopped) {
            for (var item, i = 0; i !== len; i++) item = list[i], item[0].call(item[1]);
            requestAnimationFrame(__tick)
        }
    }
}(), function () {
    "use strict";
    Date.now || (Date.now = function () {
        return (new Date).getTime()
    }), averta.Timer = function (delay, autoStart) {
        this.delay = delay, this.currentCount = 0, this.paused = !1, this.onTimer = null, this.refrence = null, autoStart && this.start()
    }, averta.Timer.prototype = {
        constructor: averta.Timer, start: function () {
            this.paused = !1, this.lastTime = Date.now(), averta.Ticker.add(this.update, this)
        }, stop: function () {
            this.paused = !0, averta.Ticker.remove(this.update, this)
        }, reset: function () {
            this.currentCount = 0, this.paused = !0, this.lastTime = Date.now()
        }, update: function () {
            this.paused || Date.now() - this.lastTime < this.delay || (this.currentCount++, this.lastTime = Date.now(), this.onTimer && this.onTimer.call(this.refrence, this.getTime()))
        }, getTime: function () {
            return this.delay * this.currentCount
        }
    }
}(), function () {
    "use strict";
    window.CSSTween = function (element, duration, delay, ease) {
        this.$element = element, this.duration = duration || 1e3, this.delay = delay || 0, this.ease = ease || "linear"
    };
    var p = CSSTween.prototype;
    p.to = function (callback, target) {
        return this.to_cb = callback, this.to_cb_target = target, this
    }, p.from = function (callback, target) {
        return this.fr_cb = callback, this.fr_cb_target = target, this
    }, p.onComplete = function (callback, target) {
        return this.oc_fb = callback, this.oc_fb_target = target, this
    }, p.chain = function (csstween) {
        return this.chained_tween = csstween, this
    }, p.reset = function () {
        clearTimeout(this.start_to), clearTimeout(this.end_to)
    }, p.start = function () {
        var element = this.$element[0];
        clearTimeout(this.start_to), clearTimeout(this.end_to), this.fresh = !0, this.fr_cb && (element.style[window._jcsspfx + "TransitionDuration"] = "0ms", this.fr_cb.call(this.fr_cb_target));
        var that = this;
        return this.onTransComplete = function () {
            that.fresh && (that.reset(), element.style[window._jcsspfx + "TransitionDuration"] = "", element.style[window._jcsspfx + "TransitionProperty"] = "", element.style[window._jcsspfx + "TransitionTimingFunction"] = "", element.style[window._jcsspfx + "TransitionDelay"] = "", that.fresh = !1, that.chained_tween && that.chained_tween.start(), that.oc_fb && that.oc_fb.call(that.oc_fb_target))
        }, this.start_to = setTimeout(function () {
            that.$element && (element.style[window._jcsspfx + "TransitionDuration"] = that.duration + "ms", element.style[window._jcsspfx + "TransitionProperty"] = that.transProperty || "all", element.style[window._jcsspfx + "TransitionDelay"] = that.delay > 0 ? that.delay + "ms" : "", element.style[window._jcsspfx + "TransitionTimingFunction"] = that.ease, that.to_cb && that.to_cb.call(that.to_cb_target), that.end_to = setTimeout(function () {
                that.onTransComplete()
            }, that.duration + (that.delay || 0)))
        }, 1), this
    }
}(), function () {
    "use strict";

    function transPos(element, properties) {
        if (void 0 !== properties.x || void 0 !== properties.y) if (_cssanim) {
            var trans = window._jcsspfx + "Transform";
            void 0 !== properties.x && (properties[trans] = (properties[trans] || "") + " translateX(" + properties.x + "px)", delete properties.x), void 0 !== properties.y && (properties[trans] = (properties[trans] || "") + " translateY(" + properties.y + "px)", delete properties.y)
        } else {
            if (void 0 !== properties.x) {
                var posx = "auto" !== element.css("right") ? "right" : "left";
                properties[posx] = properties.x + "px", delete properties.x
            }
            if (void 0 !== properties.y) {
                var posy = "auto" !== element.css("bottom") ? "bottom" : "top";
                properties[posy] = properties.y + "px", delete properties.y
            }
        }
        return properties
    }

    var _cssanim = null;
    window.CTween = {}, CTween.setPos = function (element, pos) {
        element.css(transPos(element, pos))
    }, CTween.animate = function (element, duration, properties, options) {
        if (null == _cssanim && (_cssanim = window._cssanim), options = options || {}, transPos(element, properties), _cssanim) {
            var tween = new CSSTween(element, duration, options.delay, EaseDic[options.ease]);
            return options.transProperty && (tween.transProperty = options.transProperty), tween.to(function () {
                element.css(properties)
            }), options.complete && tween.onComplete(options.complete, options.target), tween.start(), tween.stop = tween.reset, tween
        }
        var onCl;
        return options.delay && element.delay(options.delay), options.complete && (onCl = function () {
            options.complete.call(options.target)
        }), element.stop(!0).animate(properties, duration, options.ease || "linear", onCl), element
    }, CTween.fadeOut = function (target, duration, remove) {
        var options = {};
        remove === !0 ? options.complete = function () {
            target.remove()
        } : 2 === remove && (options.complete = function () {
            target.css("display", "none")
        }), CTween.animate(target, duration || 1e3, {opacity: 0}, options)
    }, CTween.fadeIn = function (target, duration, reset) {
        reset !== !1 && target.css("opacity", 0).css("display", ""), CTween.animate(target, duration || 1e3, {opacity: 1})
    }
}(), function () {
    window.EaseDic = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        easeInCubic: "cubic-bezier(.55,.055,.675,.19)",
        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
        easeInOutExpo: "cubic-bezier(1,0,0,1)",
        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
        easeInSine: "cubic-bezier(.47,0,.745,.715)",
        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
    }
}(), function () {
    "use strict";
    window.MSAligner = function (type, $container, $img) {
        this.$container = $container, this.$img = $img, this.type = type || "stretch", this.widthOnly = !1, this.heightOnly = !1
    };
    var p = MSAligner.prototype;
    p.init = function (w, h) {
        switch (this.baseWidth = w, this.baseHeight = h, this.imgRatio = w / h, this.imgRatio2 = h / w, this.type) {
            case"tile":
                this.$container.css("background-image", "url(" + this.$img.attr("src") + ")"), this.$img.remove();
                break;
            case"center":
                this.$container.css("background-image", "url(" + this.$img.attr("src") + ")"), this.$container.css({
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat"
                }), this.$img.remove();
                break;
            case"stretch":
                this.$img.css({width: "100%", height: "100%"});
                break;
            case"fill":
            case"fit":
                this.needAlign = !0, this.align()
        }
    }, p.align = function () {
        if (this.needAlign) {
            var cont_w = this.$container[0].offsetWidth, cont_h = this.$container[0].offsetHeight,
                contRatio = cont_w / cont_h;
            "fill" == this.type ? this.imgRatio < contRatio ? (this.$img.width(cont_w), this.$img.height(cont_w * this.imgRatio2)) : (this.$img.height(cont_h), this.$img.width(cont_h * this.imgRatio)) : "fit" == this.type && (this.imgRatio < contRatio ? (this.$img.height(cont_h), this.$img.width(cont_h * this.imgRatio)) : (this.$img.width(cont_w), this.$img.height(cont_w * this.imgRatio2))), this.setMargin()
        }
    }, p.setMargin = function () {
        var cont_w = this.$container[0].offsetWidth, cont_h = this.$container[0].offsetHeight;
        this.$img.css("margin-top", (cont_h - this.$img[0].offsetHeight) / 2 + "px"), this.$img.css("margin-left", (cont_w - this.$img[0].offsetWidth) / 2 + "px")
    }
}(), function () {
    "use strict";
    var _options = {
        bouncing: !0,
        snapping: !1,
        snapsize: null,
        friction: .05,
        outFriction: .05,
        outAcceleration: .09,
        minValidDist: .3,
        snappingMinSpeed: 2,
        paging: !1,
        endless: !1,
        maxSpeed: 160
    }, Controller = function (min, max, options) {
        if (null === max || null === min) throw new Error("Max and Min values are required.");
        this.options = options || {};
        for (var key in _options) key in this.options || (this.options[key] = _options[key]);
        this._max_value = max, this._min_value = min, this.value = min, this.end_loc = min, this.current_snap = this.getSnapNum(min), this.__extrStep = 0, this.__extraMove = 0, this.__animID = -1
    }, p = Controller.prototype;
    p.changeTo = function (value, animate, speed, snap_num, dispatch) {
        if (this.stopped = !1, this._internalStop(), value = this._checkLimits(value), speed = Math.abs(speed || 0), this.options.snapping && (snap_num = snap_num || this.getSnapNum(value), dispatch !== !1 && this._callsnapChange(snap_num), this.current_snap = snap_num), animate) {
            this.animating = !0;
            var self = this, active_id = ++self.__animID, amplitude = value - self.value, timeStep = 0,
                targetPosition = value, animFrict = 1 - self.options.friction,
                timeconst = animFrict + (speed - 20) * animFrict * 1.3 / self.options.maxSpeed, tick = function () {
                    if (active_id === self.__animID) {
                        var dis = value - self.value;
                        if (!(Math.abs(dis) > self.options.minValidDist && self.animating)) return self.animating && (self.value = value, self._callrenderer()), self.animating = !1, active_id !== self.__animID && (self.__animID = -1), void self._callonComplete("anim");
                        window.requestAnimationFrame(tick), self.value = targetPosition - amplitude * Math.exp(-++timeStep * timeconst), self._callrenderer()
                    }
                };
            return void tick()
        }
        this.value = value, this._callrenderer()
    }, p.drag = function (move) {
        this.start_drag && (this.drag_start_loc = this.value, this.start_drag = !1), this.animating = !1, this._deceleration = !1, this.value -= move, !this.options.endless && (this.value > this._max_value || this.value < 0) ? this.options.bouncing ? (this.__isout = !0, this.value += .6 * move) : this.value = this.value > this._max_value ? this._max_value : 0 : !this.options.endless && this.options.bouncing && (this.__isout = !1), this._callrenderer()
    }, p.push = function (speed) {
        if (this.stopped = !1, this.options.snapping && Math.abs(speed) <= this.options.snappingMinSpeed) return void this.cancel();
        if (this.__speed = speed, this.__startSpeed = speed, this.end_loc = this._calculateEnd(), this.options.snapping) {
            var snap_loc = this.getSnapNum(this.value), end_snap = this.getSnapNum(this.end_loc);
            if (this.options.paging) return snap_loc = this.getSnapNum(this.drag_start_loc), this.__isout = !1, void (speed > 0 ? this.gotoSnap(snap_loc + 1, !0, speed) : this.gotoSnap(snap_loc - 1, !0, speed));
            if (snap_loc === end_snap) return void this.cancel();
            this._callsnapChange(end_snap), this.current_snap = end_snap
        }
        this.animating = !1, this.__needsSnap = this.options.endless || this.end_loc > this._min_value && this.end_loc < this._max_value, this.options.snapping && this.__needsSnap && (this.__extraMove = this._calculateExtraMove(this.end_loc)), this._startDecelaration()
    }, p.bounce = function (speed) {
        this.animating || (this.stopped = !1, this.animating = !1, this.__speed = speed, this.__startSpeed = speed, this.end_loc = this._calculateEnd(), this._startDecelaration())
    }, p.stop = function () {
        this.stopped = !0, this._internalStop()
    }, p.cancel = function () {
        this.start_drag = !0, this.__isout ? (this.__speed = 4e-4, this._startDecelaration()) : this.options.snapping && this.gotoSnap(this.getSnapNum(this.value), !0)
    }, p.renderCallback = function (listener, ref) {
        this.__renderHook = {fun: listener, ref: ref}
    }, p.snappingCallback = function (listener, ref) {
        this.__snapHook = {fun: listener, ref: ref}
    }, p.snapCompleteCallback = function (listener, ref) {
        this.__compHook = {fun: listener, ref: ref}
    }, p.getSnapNum = function (value) {
        return Math.floor((value + this.options.snapsize / 2) / this.options.snapsize)
    }, p.nextSnap = function () {
        this._internalStop();
        var curr_snap = this.getSnapNum(this.value);
        !this.options.endless && (curr_snap + 1) * this.options.snapsize > this._max_value ? (this.__speed = 8, this.__needsSnap = !1, this._startDecelaration()) : this.gotoSnap(curr_snap + 1, !0)
    }, p.prevSnap = function () {
        this._internalStop();
        var curr_snap = this.getSnapNum(this.value);
        !this.options.endless && (curr_snap - 1) * this.options.snapsize < this._min_value ? (this.__speed = -8, this.__needsSnap = !1, this._startDecelaration()) : this.gotoSnap(curr_snap - 1, !0)
    }, p.gotoSnap = function (snap_num, animate, speed) {
        this.changeTo(snap_num * this.options.snapsize, animate, speed, snap_num)
    }, p.destroy = function () {
        this._internalStop(), this.__renderHook = null, this.__snapHook = null, this.__compHook = null
    }, p._internalStop = function () {
        this.start_drag = !0, this.animating = !1, this._deceleration = !1, this.__extrStep = 0
    }, p._calculateExtraMove = function (value) {
        var m = value % this.options.snapsize;
        return m < this.options.snapsize / 2 ? -m : this.options.snapsize - m
    }, p._calculateEnd = function (step) {
        for (var temp_speed = this.__speed, temp_value = this.value, i = 0; Math.abs(temp_speed) > this.options.minValidDist;) temp_value += temp_speed, temp_speed *= this.options.friction, i++;
        return step ? i : temp_value
    }, p._checkLimits = function (value) {
        return this.options.endless ? value : value < this._min_value ? this._min_value : value > this._max_value ? this._max_value : value
    }, p._callrenderer = function () {
        this.__renderHook && this.__renderHook.fun.call(this.__renderHook.ref, this, this.value)
    }, p._callsnapChange = function (targetSnap) {
        this.__snapHook && targetSnap !== this.current_snap && this.__snapHook.fun.call(this.__snapHook.ref, this, targetSnap, targetSnap - this.current_snap)
    }, p._callonComplete = function (type) {
        this.__compHook && !this.stopped && this.__compHook.fun.call(this.__compHook.ref, this, this.current_snap, type)
    }, p._computeDeceleration = function () {
        if (this.options.snapping && this.__needsSnap) {
            var xtr_move = (this.__startSpeed - this.__speed) / this.__startSpeed * this.__extraMove;
            this.value += this.__speed + xtr_move - this.__extrStep, this.__extrStep = xtr_move
        } else this.value += this.__speed;
        if (this.__speed *= this.options.friction, this.options.endless || this.options.bouncing || (this.value <= this._min_value ? (this.value = this._min_value, this.__speed = 0) : this.value >= this._max_value && (this.value = this._max_value, this.__speed = 0)), this._callrenderer(), !this.options.endless && this.options.bouncing) {
            var out_value = 0;
            this.value < this._min_value ? out_value = this._min_value - this.value : this.value > this._max_value && (out_value = this._max_value - this.value), this.__isout = Math.abs(out_value) >= this.options.minValidDist, this.__isout && (this.__speed * out_value <= 0 ? this.__speed += out_value * this.options.outFriction : this.__speed = out_value * this.options.outAcceleration)
        }
    }, p._startDecelaration = function () {
        if (!this._deceleration) {
            this._deceleration = !0;
            var self = this, tick = function () {
                self._deceleration && (self._computeDeceleration(), Math.abs(self.__speed) > self.options.minValidDist || self.__isout ? window.requestAnimationFrame(tick) : (self._deceleration = !1, self.__isout = !1, self.value = self.__needsSnap && self.options.snapping && !self.options.paging ? self._checkLimits(self.end_loc + self.__extraMove) : Math.round(self.value), self._callrenderer(), self._callonComplete("decel")))
            };
            tick()
        }
    }, window.Controller = Controller
}(), window.MSSliderEvent = function (type) {
    this.type = type
}, MSSliderEvent.CHANGE_START = "ms_changestart", MSSliderEvent.CHANGE_END = "ms_changeend", MSSliderEvent.WAITING = "ms_waiting", MSSliderEvent.AUTOPLAY_CHANGE = "ms_autoplaychange", MSSliderEvent.VIDEO_PLAY = "ms_videoPlay", MSSliderEvent.VIDEO_CLOSE = "ms_videoclose", MSSliderEvent.INIT = "ms_init", MSSliderEvent.HARD_UPDATE = "ms_hard_update", MSSliderEvent.RESIZE = "ms_resize", MSSliderEvent.RESERVED_SPACE_CHANGE = "ms_rsc", MSSliderEvent.DESTROY = "ms_destroy", function (window, document, $) {
    "use strict";
    window.MSSlide = function () {
        this.$element = null, this.$loading = $("<div></div>").addClass("ms-slide-loading"), this.view = null, this.index = -1, this.__width = 0, this.__height = 0, this.fillMode = "fill", this.selected = !1, this.pselected = !1, this.autoAppend = !0, this.isSleeping = !0, this.moz = window.MSBrowserInfo.mozilla
    };
    var p = MSSlide.prototype;
    p.onSwipeStart = function () {
        this.link && (this.linkdis = !0), this.video && (this.videodis = !0)
    }, p.onSwipeMove = function (e) {
        var move = Math.max(Math.abs(e.data.distanceX), Math.abs(e.data.distanceY));
        this.swipeMoved = move > 4
    }, p.onSwipeCancel = function () {
        return this.swipeMoved ? void (this.swipeMoved = !1) : (this.link && (this.linkdis = !1), void (this.video && (this.videodis = !1)))
    }, p.assetsLoaded = function () {
        this.ready = !0, this.slider.api._startTimer(), this.isSleeping || this.setupBG(), CTween.fadeOut(this.$loading, 300, !0), (0 === this.slider.options.preload || "all" === this.slider.options.preload) && this.index < this.view.slideList.length - 1 ? this.view.slideList[this.index + 1].loadImages() : "all" === this.slider.options.preload && this.index === this.view.slideList.length - 1 && this.slider._removeLoading()
    }, p.setBG = function (img) {
        this.hasBG = !0;
        var that = this;
        this.$imgcont = $("<div></div>").addClass("ms-slide-bgcont"), this.$element.append(this.$loading).append(this.$imgcont), this.$bg_img = $(img).css("visibility", "hidden"), this.$imgcont.append(this.$bg_img), this.bgAligner = new MSAligner(that.fillMode, that.$imgcont, that.$bg_img), this.bgAligner.widthOnly = this.slider.options.autoHeight, that.slider.options.autoHeight && (that.pselected || that.selected) && that.slider.setHeight(that.slider.options.height), void 0 !== this.$bg_img.data("src") ? (this.bg_src = this.$bg_img.data("src"), this.$bg_img.removeAttr("data-src")) : this.$bg_img.one("load", function (event) {
            that._onBGLoad(event)
        }).each($.jqLoadFix)
    }, p.setupBG = function () {
        !this.initBG && this.bgLoaded && (this.initBG = !0, this.$bg_img.css("visibility", ""), this.bgWidth = this.bgNatrualWidth || this.$bg_img.width(), this.bgHeight = this.bgNatrualHeight || this.$bg_img.height(), CTween.fadeIn(this.$imgcont, 300), this.slider.options.autoHeight && this.$imgcont.height(this.bgHeight * this.ratio), this.bgAligner.init(this.bgWidth, this.bgHeight), this.setSize(this.__width, this.__height), this.slider.options.autoHeight && (this.pselected || this.selected) && this.slider.setHeight(this.getHeight()))
    }, p.loadImages = function () {
        if (!this.ls) {
            if (this.ls = !0, this.hasBG && this.bg_src) {
                var that = this;
                this.$bg_img.preloadImg(this.bg_src, function (event) {
                    that._onBGLoad(event)
                })
            }
            this.hasBG || this.hasLayers || this.assetsLoaded()
        }
    }, p._onBGLoad = function (event) {
        this.bgNatrualWidth = event.width, this.bgNatrualHeight = event.height, this.bgLoaded = !0, window.MSBrowserInfo.msie && this.$bg_img.on("dragstart", function (event) {
            event.preventDefault()
        }), (!this.hasLayers || this.layerController.ready) && this.assetsLoaded()
    }, p.setSize = function (width, height) {
        this.__width = width, this.slider.options.autoHeight && (this.bgLoaded ? (this.ratio = this.__width / this.bgWidth, height = Math.floor(this.ratio * this.bgHeight), this.$imgcont.height(height)) : (this.ratio = width / this.slider.options.width, height = this.slider.options.height * this.ratio)), this.__height = height, this.$element.width(width).height(height), this.hasBG && this.bgLoaded && this.bgAligner.align()
    }, p.getHeight = function () {
        return this.hasBG && this.bgLoaded ? this.bgHeight * this.ratio : Math.max(this.$element[0].clientHeight, this.slider.options.height * this.ratio)
    }, p.__playVideo = function () {
        this.vplayed || this.videodis || (this.vplayed = !0, this.slider.api.paused || (this.slider.api.pause(), this.roc = !0), this.vcbtn.css("display", ""), CTween.fadeOut(this.vpbtn, 500, !1), CTween.fadeIn(this.vcbtn, 500), CTween.fadeIn(this.vframe, 500), this.vframe.css("display", "block").attr("src", this.video + "&autoplay=1"), this.view.$element.addClass("ms-def-cursor"), this.moz && this.view.$element.css("perspective", "none"), this.view.swipeControl && this.view.swipeControl.disable(), this.slider.slideController.dispatchEvent(new MSSliderEvent(MSSliderEvent.VIDEO_PLAY)))
    }, p.__closeVideo = function () {
        if (this.vplayed) {
            this.vplayed = !1, this.roc && this.slider.api.resume();
            var that = this;
            CTween.fadeIn(this.vpbtn, 500), CTween.animate(this.vcbtn, 500, {opacity: 0}, {
                complete: function () {
                    that.vcbtn.css("display", "none")
                }
            }), CTween.animate(this.vframe, 500, {opacity: 0}, {
                complete: function () {
                    that.vframe.attr("src", "about:blank").css("display", "none")
                }
            }), this.moz && this.view.$element.css("perspective", ""), this.view.swipeControl && this.view.swipeControl.enable(), this.view.$element.removeClass("ms-def-cursor"), this.slider.slideController.dispatchEvent(new MSSliderEvent(MSSliderEvent.VIDEO_CLOSE))
        }
    }, p.create = function () {
        var that = this;
        this.link && this.link.addClass("ms-slide-link").html("").click(function (e) {
            that.linkdis && e.preventDefault()
        }), this.video && (-1 === this.video.indexOf("?") && (this.video += "?"), this.vframe = $("<iframe></iframe>").addClass("ms-slide-video").css({
            width: "100%",
            height: "100%",
            display: "none"
        }).attr("src", "about:blank").attr("allowfullscreen", "true").appendTo(this.$element), this.vpbtn = $("<div></div>").addClass("ms-slide-vpbtn").click(function () {
            that.__playVideo()
        }).appendTo(this.$element), this.vcbtn = $("<div></div>").addClass("ms-slide-vcbtn").click(function () {
            that.__closeVideo()
        }).appendTo(this.$element).css("display", "none"), window._touch && this.vcbtn.removeClass("ms-slide-vcbtn").addClass("ms-slide-vcbtn-mobile").append('<div class="ms-vcbtn-txt">Close video</div>').appendTo(this.view.$element.parent())), !this.slider.options.autoHeight && this.hasBG && (this.$imgcont.css("height", "100%"), ("center" === this.fillMode || "stretch" === this.fillMode) && (this.fillMode = "fill")), this.slider.options.autoHeight && this.$element.addClass("ms-slide-auto-height"), this.sleep(!0)
    }, p.destroy = function () {
        this.$element.remove(), this.$element = null
    }, p.prepareToSelect = function () {
        this.pselected || this.selected || (this.pselected = !0, (this.link || this.video) && (this.view.addEventListener(MSViewEvents.SWIPE_START, this.onSwipeStart, this), this.view.addEventListener(MSViewEvents.SWIPE_MOVE, this.onSwipeMove, this), this.view.addEventListener(MSViewEvents.SWIPE_CANCEL, this.onSwipeCancel, this), this.linkdis = !1, this.swipeMoved = !1), this.loadImages(), this.moz && this.$element.css("margin-top", ""))
    }, p.select = function () {
        this.selected || (this.selected = !0, this.pselected = !1, this.$element.addClass("ms-sl-selected"), this.videoAutoPlay && (this.videodis = !1, this.vpbtn.trigger("click")))
    }, p.unselect = function () {
        this.pselected = !1, this.moz && this.$element.css("margin-top", "0.1px"), (this.link || this.video) && (this.view.removeEventListener(MSViewEvents.SWIPE_START, this.onSwipeStart, this), this.view.removeEventListener(MSViewEvents.SWIPE_MOVE, this.onSwipeMove, this), this.view.removeEventListener(MSViewEvents.SWIPE_CANCEL, this.onSwipeCancel, this)), this.selected && (this.selected = !1, this.$element.removeClass("ms-sl-selected"), this.video && this.vplayed && (this.__closeVideo(), this.roc = !1))
    }, p.sleep = function (force) {
        (!this.isSleeping || force) && (this.isSleeping = !0, this.autoAppend && this.$element.detach(), this.hasLayers && this.layerController.onSlideSleep())
    }, p.wakeup = function () {
        this.isSleeping && (this.isSleeping = !1, this.autoAppend && this.view.$slideCont.append(this.$element), this.moz && this.$element.css("margin-top", "0.1px"), this.setupBG(), this.hasBG && this.bgAligner.align(), this.hasLayers && this.layerController.onSlideWakeup())
    }
}(window, document, jQuery), function ($) {
    "use strict";
    var SliderViewList = {};
    window.MSSlideController = function (slider) {
        this._delayProgress = 0, this._timer = new averta.Timer(100), this._timer.onTimer = this.onTimer, this._timer.refrence = this, this.currentSlide = null, this.slider = slider, this.so = slider.options, averta.EventDispatcher.call(this)
    }, MSSlideController.registerView = function (name, _class) {
        if (name in SliderViewList) throw new Error(name + ", is already registered.");
        SliderViewList[name] = _class
    }, MSSlideController.SliderControlList = {}, MSSlideController.registerControl = function (name, _class) {
        if (name in MSSlideController.SliderControlList) throw new Error(name + ", is already registered.");
        MSSlideController.SliderControlList[name] = _class
    };
    var p = MSSlideController.prototype;
    p.setupView = function () {
        var that = this;
        this.resize_listener = function () {
            that.__resize()
        };
        var viewOptions = {
            spacing: this.so.space,
            mouseSwipe: this.so.mouse,
            loop: this.so.loop,
            autoHeight: this.so.autoHeight,
            swipe: this.so.swipe,
            speed: this.so.speed,
            dir: this.so.dir,
            viewNum: this.so.inView,
            critMargin: this.so.critMargin
        };
        this.so.viewOptions && $.extend(viewOptions, this.so.viewOptions), this.so.autoHeight && (this.so.heightLimit = !1);
        var viewClass = SliderViewList[this.slider.options.view] || MSBasicView;
        if (!viewClass._3dreq || window._css3d && !window.MSBrowserInfo.msie || (viewClass = viewClass._fallback || MSBasicView), this.view = new viewClass(viewOptions), this.so.overPause) {
            var that = this;
            this.slider.$element.mouseenter(function () {
                that.is_over = !0, that._stopTimer()
            }).mouseleave(function () {
                that.is_over = !1, that._startTimer()
            })
        }
    }, p.onChangeStart = function () {
        this.change_started = !0, this.currentSlide && this.currentSlide.unselect(), this.currentSlide = this.view.currentSlide, this.currentSlide.prepareToSelect(), this.so.endPause && this.currentSlide.index === this.slider.slides.length - 1 && (this.pause(), this.skipTimer()), this.so.autoHeight && this.slider.setHeight(this.currentSlide.getHeight()), this.so.deepLink && this.__updateWindowHash(), this.dispatchEvent(new MSSliderEvent(MSSliderEvent.CHANGE_START))
    }, p.onChangeEnd = function () {
        if (this.change_started = !1, this._startTimer(), this.currentSlide.select(), this.so.preload > 1) {
            var loc, i, slide, l = this.so.preload - 1;
            for (i = 1; l >= i; ++i) {
                if (loc = this.view.index + i, loc >= this.view.slideList.length) {
                    if (!this.so.loop) {
                        i = l;
                        continue
                    }
                    loc -= this.view.slideList.length
                }
                slide = this.view.slideList[loc], slide && slide.loadImages()
            }
            for (l > this.view.slideList.length / 2 && (l = Math.floor(this.view.slideList.length / 2)), i = 1; l >= i; ++i) {
                if (loc = this.view.index - i, 0 > loc) {
                    if (!this.so.loop) {
                        i = l;
                        continue
                    }
                    loc = this.view.slideList.length + loc
                }
                slide = this.view.slideList[loc], slide && slide.loadImages()
            }
        }
        this.dispatchEvent(new MSSliderEvent(MSSliderEvent.CHANGE_END))
    }, p.onSwipeStart = function () {
        this.skipTimer()
    }, p.skipTimer = function () {
        this._timer.reset(), this._delayProgress = 0, this.dispatchEvent(new MSSliderEvent(MSSliderEvent.WAITING))
    }, p.onTimer = function () {
        if (this._timer.getTime() >= 1e3 * this.view.currentSlide.delay && (this.skipTimer(), this.view.next(), this.hideCalled = !1), this._delayProgress = this._timer.getTime() / (10 * this.view.currentSlide.delay), this.so.hideLayers && !this.hideCalled && 1e3 * this.view.currentSlide.delay - this._timer.getTime() <= 300) {
            var currentSlide = this.view.currentSlide;
            currentSlide.hasLayers && currentSlide.layerController.animHideLayers(), this.hideCalled = !0
        }
        this.dispatchEvent(new MSSliderEvent(MSSliderEvent.WAITING))
    }, p._stopTimer = function () {
        this._timer && this._timer.stop()
    }, p._startTimer = function () {
        this.paused || this.is_over || !this.currentSlide || !this.currentSlide.ready || this.change_started || this._timer.start()
    }, p.__appendSlides = function () {
        var slide, loc, i = 0, l = this.view.slideList.length - 1;
        for (i; l > i; ++i) slide = this.view.slideList[i], slide.detached || (slide.$element.detach(), slide.detached = !0);
        for (this.view.appendSlide(this.view.slideList[this.view.index]), l = 3, i = 1; l >= i; ++i) {
            if (loc = this.view.index + i, loc >= this.view.slideList.length) {
                if (!this.so.loop) {
                    i = l;
                    continue
                }
                loc -= this.view.slideList.length
            }
            slide = this.view.slideList[loc], slide.detached = !1, this.view.appendSlide(slide)
        }
        for (l > this.view.slideList.length / 2 && (l = Math.floor(this.view.slideList.length / 2)), i = 1; l >= i; ++i) {
            if (loc = this.view.index - i, 0 > loc) {
                if (!this.so.loop) {
                    i = l;
                    continue
                }
                loc = this.view.slideList.length + loc
            }
            slide = this.view.slideList[loc], slide.detached = !1, this.view.appendSlide(slide)
        }
    }, p.__resize = function (hard) {
        this.created && (this.width = this.slider.$element[0].clientWidth || this.so.width, this.so.fullwidth || (this.width = Math.min(this.width, this.so.width)), this.height = this.width / this.slider.aspect, this.so.autoHeight ? (this.currentSlide.setSize(this.width, null, hard), this.view.setSize(this.width, this.currentSlide.getHeight(), hard)) : this.view.setSize(this.width, Math.max(this.so.minHeight, this.so.heightLimit ? Math.min(this.height, this.so.height) : this.height), hard), this.slider.$controlsCont && this.so.centerControls && this.so.fullwidth && this.view.$element.css("left", Math.min(0, -(this.slider.$element[0].clientWidth - this.so.width) / 2) + "px"), this.dispatchEvent(new MSSliderEvent(MSSliderEvent.RESIZE)))
    }, p.__dispatchInit = function () {
        this.dispatchEvent(new MSSliderEvent(MSSliderEvent.INIT))
    }, p.setup = function () {
        this.created = !0, this.paused = !this.so.autoplay, this.view.addEventListener(MSViewEvents.CHANGE_START, this.onChangeStart, this), this.view.addEventListener(MSViewEvents.CHANGE_END, this.onChangeEnd, this), this.view.addEventListener(MSViewEvents.SWIPE_START, this.onSwipeStart, this), this.currentSlide = this.view.slideList[this.so.start - 1], this.__resize();
        var startSlide = this.so.start - 1;
        if (this.view.create(startSlide), 0 === this.so.preload && this.view.slideList[0].loadImages(), this.scroller = this.view.controller, this.so.wheel) {
            var that = this, last_time = (new Date).getTime();
            this.wheellistener = function (event) {
                var e = window.event || event.orginalEvent || event;
                e.preventDefault();
                var current_time = (new Date).getTime();
                if (!(400 > current_time - last_time)) {
                    last_time = current_time;
                    var delta = Math.abs(e.detail || e.wheelDelta);
                    window.MSBrowserInfo.mozilla && (delta *= 100);
                    var scrollThreshold = 15;
                    return e.detail < 0 || e.wheelDelta > 0 ? delta >= scrollThreshold && that.previous(!0) : delta >= scrollThreshold && that.next(!0), !1
                }
            }, window.MSBrowserInfo.mozilla ? this.slider.$element[0].addEventListener("DOMMouseScroll", this.wheellistener) : this.slider.$element.bind("mousewheel", this.wheellistener)
        }
        0 === this.slider.$element[0].clientWidth && (this.slider.init_safemode = !0), this.__resize()
    }, p.index = function () {
        return this.view.index
    }, p.count = function () {
        return this.view.slidesCount
    }, p.next = function (checkLoop) {
        this.skipTimer(), this.view.next(checkLoop)
    }, p.previous = function (checkLoop) {
        this.skipTimer(), this.view.previous(checkLoop)
    }, p.gotoSlide = function (index) {
        index = Math.min(index, this.count() - 1), this.skipTimer(), this.view.gotoSlide(index)
    }, p.destroy = function (reset) {
        this.dispatchEvent(new MSSliderEvent(MSSliderEvent.DESTROY)), this.slider.destroy(reset)
    }, p._destroy = function () {
        this._timer.reset(), this._timer = null, $(window).unbind("resize", this.resize_listener), this.view.destroy(), this.view = null, this.so.wheel && (window.MSBrowserInfo.mozilla ? this.slider.$element[0].removeEventListener("DOMMouseScroll", this.wheellistener) : this.slider.$element.unbind("mousewheel", this.wheellistener), this.wheellistener = null), this.so = null
    }, p.runAction = function (action) {
        var actionParams = [];
        if (-1 !== action.indexOf("(")) {
            var temp = action.slice(0, action.indexOf("("));
            actionParams = action.slice(action.indexOf("(") + 1, -1).replace(/\"|\'|\s/g, "").split(","), action = temp
        }
        action in this ? this[action].apply(this, actionParams) : console
    }, p.update = function (hard) {
        this.slider.init_safemode && hard && (this.slider.init_safemode = !1), this.__resize(hard), hard && this.dispatchEvent(new MSSliderEvent(MSSliderEvent.HARD_UPDATE))
    }, p.locate = function () {
        this.__resize()
    }, p.resume = function () {
        this.paused && (this.paused = !1, this._startTimer())
    }, p.pause = function () {
        this.paused || (this.paused = !0, this._stopTimer())
    }, p.currentTime = function () {
        return this._delayProgress
    }, averta.EventDispatcher.extend(p)
}(jQuery), function ($) {
    "use strict";
    window.MasterSlider = function () {
        this.options = {
            forceInit: !0,
            autoplay: !1,
            loop: !1,
            mouse: !0,
            swipe: !0,
            grabCursor: !0,
            space: 0,
            fillMode: "fill",
            start: 1,
            view: "basic",
            width: 300,
            height: 150,
            inView: 15,
            critMargin: 1,
            mobileBGVideo: !1,
            heightLimit: !0,
            smoothHeight: !0,
            autoHeight: !1,
            minHeight: -1,
            fullwidth: !1,
            fullheight: !1,
            autofill: !1,
            layersMode: "center",
            hideLayers: !1,
            endPause: !1,
            centerControls: !0,
            overPause: !0,
            shuffle: !1,
            speed: 17,
            dir: "h",
            preload: 0,
            wheel: !1,
            layout: "boxed",
            autofillTarget: null,
            fullscreenMargin: 0,
            instantStartLayers: !1,
            parallaxMode: "mouse",
            rtl: !1,
            deepLink: null,
            deepLinkType: "path",
            disablePlugins: [],
            responsive: !0,
            tabletWidth: 768,
            tabletHeight: null,
            phoneWidth: 480,
            phoneHeight: null,
            sizingReference: "window"
        }, this.slides = [], this.activePlugins = [], this.$element = null, this.lastMargin = 0, this.leftSpace = 0, this.topSpace = 0, this.rightSpace = 0, this.bottomSpace = 0, this._holdOn = 0;
        var that = this;
        this.resize_listener = function () {
            that._resize()
        }, $(window).bind("resize", this.resize_listener)
    }, MasterSlider.author = "Averta Ltd. (www.averta.net)", MasterSlider.version = "2.80.9", MasterSlider.releaseDate = "Feb 2021", MasterSlider._plugins = [];
    var MS = MasterSlider;
    MS.registerPlugin = function (plugin) {
        -1 === MS._plugins.indexOf(plugin) && MS._plugins.push(plugin)
    };
    var p = MasterSlider.prototype;
    p.__setupSlides = function () {
        var new_slide, that = this, ind = 0;
        this.$element.children(".ms-slide").each(function () {
            var $slide_ele = $(this);
            new_slide = new MSSlide, new_slide.$element = $slide_ele, new_slide.slider = that, new_slide.delay = void 0 !== $slide_ele.data("delay") ? $slide_ele.data("delay") : 3, new_slide.fillMode = void 0 !== $slide_ele.data("fill-mode") ? $slide_ele.data("fill-mode") : that.options.fillMode, new_slide.index = ind++, new_slide.id = $slide_ele.data("id");
            var slide_img = $slide_ele.children("img:not(.ms-layer)");
            if (slide_img.length > 0 && new_slide.setBG(slide_img[0]), that.controls) for (var i = 0, l = that.controls.length; l > i; ++i) that.controls[i].slideAction(new_slide);
            $slide_ele.children("a").each(function () {
                var $this = $(this);
                "video" === this.getAttribute("data-type") ? (new_slide.video = this.getAttribute("href"), new_slide.videoAutoPlay = $this.data("autoplay"), $this.remove()) : $this.hasClass("ms-layer") || (new_slide.link = $(this))
            });
            that.slides.push(new_slide), that.slideController.view.addSlide(new_slide)
        })
    }, p._setupOverlayLayers = function () {
        var self = this, $ollayers = this.$element.children(".ms-overlay-layers").eq(0);
        if ($ollayers.length) {
            var overlayLayers = new MSOverlayLayers(this);
            overlayLayers.$element = $ollayers, self.__createSlideLayers(overlayLayers, $ollayers.find(".ms-layer")), this.view.$element.prepend($ollayers), this.overlayLayers = overlayLayers, overlayLayers.create()
        }
    }, p._removeLoading = function () {
        $(window).unbind("resize", this.resize_listener), this.$element.removeClass("before-init").css("visibility", "visible").css("height", "").css("opacity", 0), CTween.fadeIn(this.$element), this.$loading.remove(), this.slideController && this.slideController.__resize()
    }, p._resize = function () {
        if (this.$loading) {
            var h = this.$loading[0].clientWidth / this.aspect;
            h = this.options.heightLimit ? Math.min(h, this.options.height) : h, this.$loading.height(h), this.$element.height(h)
        }
    }, p._shuffleSlides = function () {
        for (var r, slides = this.$element.children(".ms-slide"), i = 0, l = slides.length; l > i; ++i) r = Math.floor(Math.random() * (l - 1)), i != r && (this.$element[0].insertBefore(slides[i], slides[r]), slides = this.$element.children(".ms-slide"))
    }, p._setupSliderLayout = function () {
        this._updateSideMargins(), this.lastMargin = this.leftSpace;
        var lo = this.options.layout;
        "boxed" !== lo && "partialview" !== lo && (this.options.fullwidth = !0), ("fullscreen" === lo || "fullwidth" === lo || "autofill" === lo) && ($(window).bind("resize", {that: this}, this._updateLayout), this._updateLayout()), $(window).bind("resize", this.slideController.resize_listener)
    }, p._updateLayout = function (event) {
        var that = event ? event.data.that : this, $element = (that.options.layout, that.$element), $win = $(window);
        $element.width($win.width() - that.leftSpace - that.rightSpace);
        var margin = -$element.offset().left + that.leftSpace + that.lastMargin;
        $element.css("margin-left", margin), that.lastMargin = margin
    }, p._init = function () {
        if (!(this._holdOn > 0) && this._docReady) {
            if (this.initialized = !0, "all" !== this.options.preload && this._removeLoading(), this.options.shuffle && this._shuffleSlides(), this.slideController.setupView(), this.view = this.slideController.view, this.$controlsCont = $("<div></div>").addClass("ms-inner-controls-cont"), this.options.centerControls && this.$controlsCont.css("max-width", this.options.width + "px"), this.$controlsCont.prepend(this.view.$element), this.$msContainer = $("<div></div>").addClass("ms-container").prependTo(this.$element).append(this.$controlsCont), this.controls) for (var i = 0, l = this.controls.length; l > i; ++i) this.controls[i].setup();
            if (this._setupSliderLayout(), this.__setupSlides(), this.slideController.setup(), this._setupOverlayLayers(), this.controls) for (i = 0, l = this.controls.length; l > i; ++i) this.controls[i].create();
            if (this.options.autoHeight && this.slideController.view.$element.height(this.slideController.currentSlide.getHeight()), this.options.swipe && !window._touch && this.options.grabCursor && this.options.mouse) {
                var $view = this.view.$element;
                $view.mousedown(function () {
                    $view.removeClass("ms-grab-cursor"), $view.addClass("ms-grabbing-cursor"), window.MSBrowserInfo.msie && window.ms_grabbing_curosr && ($view[0].style.cursor = "url(" + window.ms_grabbing_curosr + "), move")
                }).addClass("ms-grab-cursor"), $(document).mouseup(function () {
                    $view.removeClass("ms-grabbing-cursor"), $view.addClass("ms-grab-cursor"), window.MSBrowserInfo.msie && window.ms_grab_curosr && ($view[0].style.cursor = "url(" + window.ms_grab_curosr + "), move")
                })
            }
            this.slideController.__dispatchInit()
        }
    }, p.setHeight = function (value) {
        this.options.smoothHeight ? (this.htween && (this.htween.reset ? this.htween.reset() : this.htween.stop(!0)), this.htween = CTween.animate(this.slideController.view.$element, 500, {height: value}, {ease: "easeOutQuart"})) : this.slideController.view.$element.height(value)
    }, p.reserveSpace = function (side, space) {
        var sideSpace = side + "Space", pos = this[sideSpace];
        return this[sideSpace] += space, this._updateSideMargins(), pos
    }, p._updateSideMargins = function () {
        this.$element.css("margin", this.topSpace + "px " + this.rightSpace + "px " + this.bottomSpace + "px " + this.leftSpace + "px")
    }, p._realignControls = function () {
        this.rightSpace = this.leftSpace = this.topSpace = this.bottomSpace = 0, this._updateSideMargins(), this.api.dispatchEvent(new MSSliderEvent(MSSliderEvent.RESERVED_SPACE_CHANGE))
    }, p.control = function (control, options) {
        if (control in MSSlideController.SliderControlList) {
            this.controls || (this.controls = []);
            var ins = new MSSlideController.SliderControlList[control](options);
            return ins.slider = this, this.controls.push(ins), this
        }
    }, p.holdOn = function () {
        this._holdOn++
    }, p.release = function () {
        this._holdOn--, this._init()
    }, p.setup = function (target, options) {
        if (this.$element = "string" == typeof target ? $("#" + target) : target.eq(0), this.setupMarkup = this.$element.html(), 0 !== this.$element.length) {
            this.$element.addClass("master-slider").addClass("before-init"), window.MSBrowserInfo.msie ? this.$element.addClass("ms-ie").addClass("ms-ie" + window.MSBrowserInfo.version.slice(0, window.MSBrowserInfo.version.indexOf("."))) : window.MSBrowserInfo.webkit ? this.$element.addClass("ms-wk") : window.MSBrowserInfo.mozilla && this.$element.addClass("ms-moz");
            var ua = navigator.userAgent.toLowerCase(), isAndroid = ua.indexOf("android") > -1;
            isAndroid && this.$element.addClass("ms-android");
            var that = this;
            $.extend(this.options, options), this.aspect = this.options.width / this.options.height, this.responsiveWidth = [this.options.phoneWidth, this.options.tabletWidth, this.options.width], this.responsiveHeight = [this.options.phoneHeight, this.options.tabletHeight, this.options.height], this.responsiveAspect = [this.options.phoneWidth / this.options.phoneHeight, this.options.tabletWidth / this.options.tabletHeight, this.options.width / this.options.height], this.$loading = $("<div></div>").addClass("ms-loading-container").insertBefore(this.$element).append($("<div></div>").addClass("ms-loading")), this.$loading.parent().css("position", "relative"), this.options.autofill && (this.options.fullwidth = !0, this.options.fullheight = !0), this.options.fullheight && this.$element.addClass("ms-fullheight"), this._resize(), this.slideController = new MSSlideController(this), this.api = this.slideController;
            for (var i = 0, l = MS._plugins.length; i !== l; i++) {
                var plugin = MS._plugins[i];
                -1 === this.options.disablePlugins.indexOf(plugin.name) && this.activePlugins.push(new plugin(this))
            }
            return this.options.forceInit && MasterSlider.addJQReadyErrorCheck(this), $(document).ready(function () {
                that.initialized || (that._docReady = !0, that._init())
            }), this
        }
    }, p.getActiveBreakpoint = function (getIndex) {
        var bpList = ["phone", "tablet", "desktop"],
            bpSizes = [this.options.phoneWidth || 480, this.options.tabletWidth || 768, this.options.width],
            currentSize = "self" === this.options.sizingReference ? this.$element.outerWidth(!1) : window.innerWidth,
            bp = "desktop", bpIndex = 2;
        return bpSizes.every(function (size, index) {
            return size >= currentSize ? (bp = bpList[index], bpIndex = index, !1) : !0
        }.bind(this)), getIndex ? bpIndex : bp
    }, p.getBreakpointReferenceSize = function () {
        var bp = this.getActiveBreakpoint();
        return "desktop" === bp ? this.options.width : this.options[bp + "Width"]
    }, p.getResponsiveValue = function (repsVal) {
        var bpIndex = this.getActiveBreakpoint(!0);
        return repsVal.slice(bpIndex).filter(function (value) {
            return void 0 !== value && 1 / 0 !== value
        })[0]
    }, p.destroy = function (insertMarkup) {
        for (var i = 0, l = this.activePlugins.length; i !== l; i++) this.activePlugins[i].destroy();
        if (this.controls) for (i = 0, l = this.controls.length; i !== l; i++) this.controls[i].destroy();
        this.slideController && this.slideController._destroy(), this.$loading && this.$loading.remove(), insertMarkup ? this.$element.html(this.setupMarkup).css("visibility", "hidden") : this.$element.remove();
        var lo = this.options.layout;
        ("fullscreen" === lo || "fullwidth" === lo) && $(window).unbind("resize", this._updateLayout), this.view = null, this.slides = null, this.options = null, this.slideController = null, this.api = null, this.resize_listener = null, this.activePlugins = null
    }
}(jQuery), function ($, window, document, undefined) {
    function MasterSliderPlugin(element, options) {
        this.element = element, this.$element = $(element), this.settings = $.extend({}, defaults, options), this._defaults = defaults, this._name = pluginName, this.init()
    }

    var pluginName = "masterslider", defaults = {controls: {}};
    $.extend(MasterSliderPlugin.prototype, {
        init: function () {
            var self = this;
            this._slider = new MasterSlider;
            for (var control in this.settings.controls) this._slider.control(control, this.settings.controls[control]);
            this._slider.setup(this.$element, this.settings);
            var _superDispatch = this._slider.api.dispatchEvent;
            this._slider.api.dispatchEvent = function (event) {
                self.$element.trigger(event.type), _superDispatch.call(this, event)
            }
        }, api: function () {
            return this._slider.api
        }, slider: function () {
            return this._slider
        }
    }), $.fn[pluginName] = function (options) {
        var args = arguments, plugin = "plugin_" + pluginName;
        if (options === undefined || "object" == typeof options) return this.each(function () {
            $.data(this, plugin) || $.data(this, plugin, new MasterSliderPlugin(this, options))
        });
        if ("string" == typeof options && "_" !== options[0] && "init" !== options) {
            var returns;
            return this.each(function () {
                var instance = $.data(this, plugin);
                instance instanceof MasterSliderPlugin && "function" == typeof instance[options] && (returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1))), instance instanceof MasterSliderPlugin && "function" == typeof instance._slider.api[options] && (returns = instance._slider.api[options].apply(instance._slider.api, Array.prototype.slice.call(args, 1))), "destroy" === options && $.data(this, plugin, null)
            }), returns !== undefined ? returns : this
        }
    }
}(jQuery, window, document), function ($, window) {
    "use strict";
    var sliderInstances = [];
    MasterSlider.addJQReadyErrorCheck = function (slider) {
        sliderInstances.push(slider)
    };
    var _ready = $.fn.ready, _onerror = window.onerror;
    $.fn.ready = function () {
        return window.onerror = function () {
            if (0 !== sliderInstances.length) for (var i = 0, l = sliderInstances.length; i !== l; i++) {
                var slider = sliderInstances[i];
                slider.initialized || (slider._docReady = !0, slider._init())
            }
            return _onerror ? _onerror.apply(this, arguments) : !1
        }, _ready.apply(this, arguments)
    }
}(jQuery, window, document), window.MSViewEvents = function (type, data) {
    this.type = type, this.data = data
}, MSViewEvents.SWIPE_START = "swipeStart", MSViewEvents.SWIPE_END = "swipeEnd", MSViewEvents.SWIPE_MOVE = "swipeMove", MSViewEvents.SWIPE_CANCEL = "swipeCancel", MSViewEvents.SCROLL = "scroll", MSViewEvents.CHANGE_START = "slideChangeStart", MSViewEvents.CHANGE_END = "slideChangeEnd", function ($) {
    "use strict";
    window.MSBasicView = function (options) {
        this.options = {
            loop: !1,
            dir: "h",
            autoHeight: !1,
            spacing: 5,
            mouseSwipe: !0,
            swipe: !0,
            speed: 17,
            minSlideSpeed: 2,
            viewNum: 20,
            critMargin: 1
        }, $.extend(this.options, options), this.dir = this.options.dir, this.loop = this.options.loop, this.spacing = this.options.spacing, this.__width = 0, this.__height = 0, this.__cssProb = "h" === this.dir ? "left" : "top", this.__offset = "h" === this.dir ? "offsetLeft" : "offsetTop", this.__dimension = "h" === this.dir ? "__width" : "__height", this.__translate_end = window._css3d ? " translateZ(0px)" : "", this.$slideCont = $("<div></div>").addClass("ms-slide-container"), this.$element = $("<div></div>").addClass("ms-view").addClass("ms-basic-view").append(this.$slideCont), this.currentSlide = null, this.index = -1, this.slidesCount = 0, this.slides = [], this.slideList = [], this.viewSlidesList = [], this.css3 = window._cssanim, this.start_buffer = 0, this.firstslide_snap = 0, this.slideChanged = !1, this.controller = new Controller(0, 0, {
            snapping: !0,
            snapsize: 100,
            paging: !0,
            snappingMinSpeed: this.options.minSlideSpeed,
            friction: (100 - .5 * this.options.speed) / 100,
            endless: this.loop
        }), this.controller.renderCallback("h" === this.dir ? this._horizUpdate : this._vertiUpdate, this), this.controller.snappingCallback(this.__snapUpdate, this), this.controller.snapCompleteCallback(this.__snapCompelet, this), averta.EventDispatcher.call(this)
    };
    var p = MSBasicView.prototype;
    p.__snapCompelet = function () {
        this.slideChanged && (this.slideChanged = !1, this.__locateSlides(), this.start_buffer = 0, this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_END)))
    }, p.__snapUpdate = function (controller, snap, change) {
        if (this.loop) {
            var target_index = this.index + change;
            this.updateLoop(target_index), target_index >= this.slidesCount && (target_index -= this.slidesCount), 0 > target_index && (target_index = this.slidesCount + target_index), this.index = target_index
        } else {
            if (0 > snap || snap >= this.slidesCount) return;
            this.index = snap
        }
        this._checkCritMargins(), window.MSBrowserInfo.mozilla && (this.slideList[this.index].$element[0].style.marginTop = "0.1px", this.currentSlide && (this.currentSlide.$element[0].style.marginTop = ""));
        var new_slide = this.slideList[this.index];
        new_slide !== this.currentSlide && (this.currentSlide = new_slide, this.autoUpdateZIndex && this.__updateSlidesZindex(), this.slideChanged = !0, this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_START)))
    }, p._checkCritMargins = function () {
        if (!this.normalMode) {
            var hlf = Math.floor(this.options.viewNum / 2),
                inView = this.viewSlidesList.indexOf(this.slideList[this.index]),
                size = this[this.__dimension] + this.spacing, cm = this.options.critMargin;
            return this.loop ? void ((cm >= inView || inView >= this.viewSlidesList.length - cm) && (size *= inView - hlf, this.__locateSlides(!1, size + this.start_buffer), this.start_buffer += size)) : void ((cm > inView && this.index >= cm || inView >= this.viewSlidesList.length - cm && this.index < this.slidesCount - cm) && this.__locateSlides(!1))
        }
    }, p._vertiUpdate = function (controller, value) {
        return this.__contPos = value, this.dispatchEvent(new MSViewEvents(MSViewEvents.SCROLL)), this.css3 ? void (this.$slideCont[0].style[window._jcsspfx + "Transform"] = "translateY(" + -value + "px)" + this.__translate_end) : void (this.$slideCont[0].style.top = -value + "px")
    }, p._horizUpdate = function (controller, value) {
        return this.__contPos = value, this.dispatchEvent(new MSViewEvents(MSViewEvents.SCROLL)), this.css3 ? void (this.$slideCont[0].style[window._jcsspfx + "Transform"] = "translateX(" + -value + "px)" + this.__translate_end) : void (this.$slideCont[0].style.left = -value + "px")
    }, p.__updateViewList = function () {
        if (this.normalMode) return void (this.viewSlidesList = this.slides);
        var temp = this.viewSlidesList.slice();
        this.viewSlidesList = [];
        var l, i = 0, hlf = Math.floor(this.options.viewNum / 2);
        if (this.loop) for (; i !== this.options.viewNum; i++) this.viewSlidesList.push(this.slides[this.currentSlideLoc - hlf + i]); else {
            for (i = 0; i !== hlf && this.index - i !== -1; i++) this.viewSlidesList.unshift(this.slideList[this.index - i]);
            for (i = 1; i !== hlf && this.index + i !== this.slidesCount; i++) this.viewSlidesList.push(this.slideList[this.index + i])
        }
        for (i = 0, l = temp.length; i !== l; i++) -1 === this.viewSlidesList.indexOf(temp[i]) && temp[i].sleep();
        temp = null, this.currentSlide && this.__updateSlidesZindex()
    }, p.__locateSlides = function (move, start) {
        this.__updateViewList(), start = this.loop ? start || 0 : this.slides.indexOf(this.viewSlidesList[0]) * (this[this.__dimension] + this.spacing);
        for (var slide, l = this.viewSlidesList.length, i = 0; i !== l; i++) {
            var pos = start + i * (this[this.__dimension] + this.spacing);
            slide = this.viewSlidesList[i], slide.wakeup(), slide.position = pos, slide.$element[0].style[this.__cssProb] = pos + "px"
        }
        move !== !1 && this.controller.changeTo(this.slideList[this.index].position, !1, null, null, !1)
    }, p.__createLoopList = function () {
        var return_arr = [], i = 0, count = this.slidesCount / 2,
            before_count = this.slidesCount % 2 === 0 ? count - 1 : Math.floor(count),
            after_count = this.slidesCount % 2 === 0 ? count : Math.floor(count);
        for (this.currentSlideLoc = before_count, i = 1; before_count >= i; ++i) return_arr.unshift(this.slideList[this.index - i < 0 ? this.slidesCount - i + this.index : this.index - i]);
        for (return_arr.push(this.slideList[this.index]), i = 1; after_count >= i; ++i) return_arr.push(this.slideList[this.index + i >= this.slidesCount ? this.index + i - this.slidesCount : this.index + i]);
        return return_arr
    }, p.__getSteps = function (index, target) {
        var right = index > target ? this.slidesCount - index + target : target - index,
            left = Math.abs(this.slidesCount - right);
        return left > right ? right : -left
    }, p.__pushEnd = function () {
        var first_slide = this.slides.shift(), last_slide = this.slides[this.slidesCount - 2];
        if (this.slides.push(first_slide), this.normalMode) {
            var pos = last_slide.$element[0][this.__offset] + this.spacing + this[this.__dimension];
            first_slide.$element[0].style[this.__cssProb] = pos + "px", first_slide.position = pos
        }
    }, p.__pushStart = function () {
        var last_slide = this.slides.pop(), first_slide = this.slides[0];
        if (this.slides.unshift(last_slide), this.normalMode) {
            var pos = first_slide.$element[0][this.__offset] - this.spacing - this[this.__dimension];
            last_slide.$element[0].style[this.__cssProb] = pos + "px", last_slide.position = pos
        }
    }, p.__updateSlidesZindex = function () {
        {
            var slide, l = this.viewSlidesList.length;
            Math.floor(l / 2)
        }
        if (this.loop) for (var loc = this.viewSlidesList.indexOf(this.currentSlide), i = 0; i !== l; i++) slide = this.viewSlidesList[i], this.viewSlidesList[i].$element.css("z-index", loc >= i ? i + 1 : l - i); else {
            for (var beforeNum = this.currentSlide.index - this.viewSlidesList[0].index, i = 0; i !== l; i++) this.viewSlidesList[i].$element.css("z-index", beforeNum >= i ? i + 1 : l - i);
            this.currentSlide.$element.css("z-index", l)
        }
    }, p.addSlide = function (slide) {
        slide.view = this, this.slides.push(slide), this.slideList.push(slide), this.slidesCount++
    }, p.appendSlide = function (slide) {
        this.$slideCont.append(slide.$element)
    }, p.updateLoop = function (index) {
        if (this.loop) for (var steps = this.__getSteps(this.index, index), i = 0, l = Math.abs(steps); l > i; ++i) 0 > steps ? this.__pushStart() : this.__pushEnd()
    }, p.gotoSlide = function (index, fast) {
        this.updateLoop(index), this.index = index;
        var target_slide = this.slideList[index];
        this._checkCritMargins(), this.controller.changeTo(target_slide.position, !fast, null, null, !1), target_slide !== this.currentSlide && (this.slideChanged = !0, this.currentSlide = target_slide, this.autoUpdateZIndex && this.__updateSlidesZindex(), this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_START)), fast && this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_END)))
    }, p.next = function (checkLoop) {
        return checkLoop && !this.loop && this.index + 1 >= this.slidesCount ? void this.controller.bounce(10) : void this.gotoSlide(this.index + 1 >= this.slidesCount ? 0 : this.index + 1)
    }, p.previous = function (checkLoop) {
        return checkLoop && !this.loop && this.index - 1 < 0 ? void this.controller.bounce(-10) : void this.gotoSlide(this.index - 1 < 0 ? this.slidesCount - 1 : this.index - 1)
    }, p.setupSwipe = function () {
        this.swipeControl = new averta.TouchSwipe(this.$element), this.swipeControl.swipeType = "h" === this.dir ? "horizontal" : "vertical";
        var that = this;
        this.swipeControl.onSwipe = "h" === this.dir ? function (status) {
            that.horizSwipeMove(status)
        } : function (status) {
            that.vertSwipeMove(status)
        }
    }, p.vertSwipeMove = function (status) {
        var phase = status.phase;
        if ("start" === phase) this.controller.stop(), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_START, status)); else if ("move" === phase && (!this.loop || Math.abs(this.currentSlide.position - this.controller.value + status.moveY) < this.cont_size / 2)) this.controller.drag(status.moveY), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_MOVE, status)); else if ("end" === phase || "cancel" === phase) {
            var speed = status.distanceY / status.duration * 50 / 3,
                speedh = Math.abs(status.distanceY / status.duration * 50 / 3);
            Math.abs(speed) > .1 && Math.abs(speed) >= speedh ? (this.controller.push(-speed), speed > this.controller.options.snappingMinSpeed && this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_END, status))) : (this.controller.cancel(), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_CANCEL, status)))
        }
    }, p.horizSwipeMove = function (status) {
        var phase = status.phase;
        if ("start" === phase) this.controller.stop(), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_START, status)); else if ("move" === phase && (!this.loop || Math.abs(this.currentSlide.position - this.controller.value + status.moveX) < this.cont_size / 2)) this.controller.drag(status.moveX), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_MOVE, status)); else if ("end" === phase || "cancel" === phase) {
            var speed = status.distanceX / status.duration * 50 / 3,
                speedv = Math.abs(status.distanceY / status.duration * 50 / 3);
            Math.abs(speed) > .1 && Math.abs(speed) >= speedv ? (this.controller.push(-speed), speed > this.controller.options.snappingMinSpeed && this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_END, status))) : (this.controller.cancel(), this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_CANCEL, status)))
        }
    }, p.setSize = function (width, height, hard) {
        if (this.lastWidth !== width || height !== this.lastHeight || hard) {
            this.$element.width(width).height(height);
            for (var i = 0; i < this.slidesCount; ++i) this.slides[i].setSize(width, height, hard);
            this.__width = width, this.__height = height, this.__created && (this.__locateSlides(), this.cont_size = (this.slidesCount - 1) * (this[this.__dimension] + this.spacing), this.loop || (this.controller._max_value = this.cont_size), this.controller.options.snapsize = this[this.__dimension] + this.spacing, this.controller.changeTo(this.currentSlide.position, !1, null, null, !1), this.controller.cancel(), this.lastWidth = width, this.lastHeight = height)
        }
    }, p.create = function (index) {
        this.__created = !0, this.index = Math.min(index || 0, this.slidesCount - 1), this.lastSnap = this.index, this.loop && (this.slides = this.__createLoopList()), this.normalMode = this.slidesCount <= this.options.viewNum;
        for (var i = 0; i < this.slidesCount; ++i) this.slides[i].create();
        this.__locateSlides(), this.controller.options.snapsize = this[this.__dimension] + this.spacing, this.loop || (this.controller._max_value = (this.slidesCount - 1) * (this[this.__dimension] + this.spacing)), this.gotoSlide(this.index, !0), this.options.swipe && (window._touch || this.options.mouseSwipe) && this.setupSwipe()
    }, p.destroy = function () {
        if (this.__created) {
            for (var i = 0; i < this.slidesCount; ++i) this.slides[i].destroy();
            this.slides = null, this.slideList = null, this.$element.remove(), this.controller.destroy(), this.controller = null
        }
    }, averta.EventDispatcher.extend(p), MSSlideController.registerView("basic", MSBasicView)
}(jQuery), function () {
    "use strict";
    window.MSFadeView = function (options) {
        MSBasicView.call(this, options), this.$element.removeClass("ms-basic-view").addClass("ms-fade-view"), this.controller.renderCallback(this.__update, this)
    }, MSFadeView.extend(MSBasicView);
    var p = MSFadeView.prototype, _super = MSBasicView.prototype;
    p.__update = function (controller, value) {
        for (var slide, distance, cont_scroll = -value, i = 0; i < this.slidesCount; ++i) slide = this.slideList[i], distance = -cont_scroll - slide.position, this.__updateSlides(slide, distance)
    }, p.__updateSlides = function (slide, distance) {
        var value = Math.abs(distance / this[this.__dimension]);
        0 >= 1 - value ? slide.$element.fadeTo(0, 0).css("visibility", "hidden") : slide.$element.fadeTo(0, 1 - value).css("visibility", "")
    }, p.__locateSlides = function (move, start) {
        this.__updateViewList(), start = this.loop ? start || 0 : this.slides.indexOf(this.viewSlidesList[0]) * (this[this.__dimension] + this.spacing);
        for (var slide, l = this.viewSlidesList.length, i = 0; i !== l; i++) {
            var pos = start + i * this[this.__dimension];
            slide = this.viewSlidesList[i], slide.wakeup(), slide.position = pos
        }
        move !== !1 && this.controller.changeTo(this.slideList[this.index].position, !1, null, null, !1)
    }, p.__pushEnd = function () {
        var first_slide = this.slides.shift(), last_slide = this.slides[this.slidesCount - 2];
        this.slides.push(first_slide), first_slide.position = last_slide.position + this[this.__dimension]
    }, p.__pushStart = function () {
        var last_slide = this.slides.pop(), first_slide = this.slides[0];
        this.slides.unshift(last_slide), last_slide.position = first_slide.position - this[this.__dimension]
    }, p.create = function (index) {
        _super.create.call(this, index), this.spacing = 0, this.controller.options.minValidDist = 10
    }, MSSlideController.registerView("fade", MSFadeView)
}(jQuery), function ($) {
    "use strict";
    var BaseControl = function () {
        this.options = {prefix: "ms-", autohide: !0, overVideo: !0, customClass: null}
    }, p = BaseControl.prototype;
    p.slideAction = function () {
    }, p.setup = function () {
        this.cont = this.options.insertTo ? $(this.options.insertTo) : this.slider.$controlsCont, this.options.overVideo || this._hideOnvideoStarts()
    }, p.checkHideUnder = function () {
        this.options.hideUnder && (this.needsRealign = !this.options.insetTo && ("left" === this.options.align || "right" === this.options.align) && this.options.inset === !1, $(window).bind("resize", {that: this}, this.onResize), this.onResize())
    }, p.onResize = function (event) {
        var that = event && event.data.that || this, w = window.innerWidth;
        w <= that.options.hideUnder && !that.detached ? (that.hide(!0), that.detached = !0, that.onDetach()) : w >= that.options.hideUnder && that.detached && (that.detached = !1, that.visible(), that.onAppend())
    }, p.create = function () {
        this.options.autohide && (this.hide(!0), this.slider.$controlsCont.mouseenter($.proxy(this._onMouseEnter, this)).mouseleave($.proxy(this._onMouseLeave, this)).mousedown($.proxy(this._onMouseDown, this)), this.$element && this.$element.mouseenter($.proxy(this._onMouseEnter, this)).mouseleave($.proxy(this._onMouseLeave, this)).mousedown($.proxy(this._onMouseDown, this)), $(document).mouseup($.proxy(this._onMouseUp, this))), this.options.align && this.$element.addClass("ms-align-" + this.options.align), this.options.customClass && this.$element && this.$element.addClass(this.options.customClass)
    }, p._onMouseEnter = function () {
        this._disableAH || this.mdown || this.visible(), this.mleave = !1
    }, p._onMouseLeave = function () {
        this.mdown || this.hide(), this.mleave = !0
    }, p._onMouseDown = function () {
        this.mdown = !0
    }, p._onMouseUp = function () {
        this.mdown && this.mleave && this.hide(), this.mdown = !1
    }, p.onAppend = function () {
        this.needsRealign && this.slider._realignControls()
    }, p.onDetach = function () {
        this.needsRealign && this.slider._realignControls()
    }, p._hideOnvideoStarts = function () {
        var that = this;
        this.slider.api.addEventListener(MSSliderEvent.VIDEO_PLAY, function () {
            that._disableAH = !0, that.hide()
        }), this.slider.api.addEventListener(MSSliderEvent.VIDEO_CLOSE, function () {
            that._disableAH = !1, that.visible()
        })
    }, p.hide = function (fast) {
        if (fast) this.$element.css("opacity", 0), this.$element.css("display", "none"); else {
            clearTimeout(this.hideTo);
            var $element = this.$element;
            this.hideTo = setTimeout(function () {
                CTween.fadeOut($element, 400, !1)
            }, 20)
        }
        this.$element.addClass("ms-ctrl-hide")
    }, p.visible = function () {
        this.detached || (clearTimeout(this.hideTo), this.$element.css("display", ""), CTween.fadeIn(this.$element, 400, !1), this.$element.removeClass("ms-ctrl-hide"))
    }, p.destroy = function () {
        this.options && this.options.hideUnder && $(window).unbind("resize", this.onResize)
    }, window.BaseControl = BaseControl
}(jQuery), function ($) {
    "use strict";
    var MSArrows = function (options) {
        BaseControl.call(this), $.extend(this.options, options)
    };
    MSArrows.extend(BaseControl);
    var p = MSArrows.prototype, _super = BaseControl.prototype;
    p.setup = function () {
        var that = this;
        this.$next = $("<div></div>").addClass(this.options.prefix + "nav-next").bind("click", function () {
            that.slider.api.next(!0)
        }), this.$prev = $("<div></div>").addClass(this.options.prefix + "nav-prev").bind("click", function () {
            that.slider.api.previous(!0)
        }), _super.setup.call(this), this.cont.append(this.$next), this.cont.append(this.$prev), this.checkHideUnder()
    }, p.hide = function (fast) {
        return fast ? (this.$prev.css("opacity", 0).css("display", "none"), void this.$next.css("opacity", 0).css("display", "none")) : (CTween.fadeOut(this.$prev, 400, !1), CTween.fadeOut(this.$next, 400, !1), this.$prev.addClass("ms-ctrl-hide"), void this.$next.addClass("ms-ctrl-hide"))
    }, p.visible = function () {
        this.detached || (CTween.fadeIn(this.$prev, 400), CTween.fadeIn(this.$next, 400), this.$prev.removeClass("ms-ctrl-hide").css("display", ""), this.$next.removeClass("ms-ctrl-hide").css("display", ""))
    }, p.destroy = function () {
        _super.destroy(), this.$next.remove(), this.$prev.remove()
    }, window.MSArrows = MSArrows, MSSlideController.registerControl("arrows", MSArrows)
}(jQuery), function ($) {
    "use strict";
    var MSThumblist = function (options) {
        BaseControl.call(this), this.options.dir = "h", this.options.wheel = "v" === options.dir, this.options.arrows = !1, this.options.speed = 17, this.options.align = null, this.options.inset = !1, this.options.margin = 10, this.options.space = 10, this.options.width = 100, this.options.height = 100, this.options.type = "thumbs", this.options.hover = !1, $.extend(this.options, options), this.thumbs = [], this.index_count = 0, this.__dimen = "h" === this.options.dir ? "width" : "height", this.__alignsize = "h" === this.options.dir ? "height" : "width", this.__jdimen = "h" === this.options.dir ? "outerWidth" : "outerHeight", this.__pos = "h" === this.options.dir ? "left" : "top", this.click_enable = !0
    };
    MSThumblist.extend(BaseControl);
    var p = MSThumblist.prototype, _super = BaseControl.prototype;
    p.setup = function () {
        if (this.$element = $("<div></div>").addClass(this.options.prefix + "thumb-list"), "tabs" === this.options.type && this.$element.addClass(this.options.prefix + "tabs"), this.$element.addClass("ms-dir-" + this.options.dir), _super.setup.call(this), this.$element.appendTo(this.slider.$controlsCont === this.cont ? this.slider.$element : this.cont), this.$thumbscont = $("<div></div>").addClass("ms-thumbs-cont").appendTo(this.$element), this.options.arrows) {
            var that = this;
            this.$fwd = $("<div></div>").addClass("ms-thumblist-fwd").appendTo(this.$element).click(function () {
                that.controller.push(-15)
            }), this.$bwd = $("<div></div>").addClass("ms-thumblist-bwd").appendTo(this.$element).click(function () {
                that.controller.push(15)
            })
        }
        if (!this.options.insetTo && this.options.align) {
            var align = this.options.align;
            this.options.inset ? this.$element.css(align, this.options.margin) : "top" === align ? this.$element.detach().prependTo(this.slider.$element).css({
                "margin-bottom": this.options.margin,
                position: "relative"
            }) : "bottom" === align ? this.$element.css({
                "margin-top": this.options.margin,
                position: "relative"
            }) : (this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.align()), "v" === this.options.dir ? this.$element.width(this.options.width) : this.$element.height(this.options.height)
        }
        this.checkHideUnder()
    }, p.align = function () {
        if (!this.detached) {
            var align = this.options.align,
                pos = this.slider.reserveSpace(align, this.options[this.__alignsize] + 2 * this.options.margin);
            this.$element.css(align, -pos - this.options[this.__alignsize] - this.options.margin)
        }
    }, p.slideAction = function (slide) {
        var thumb_ele = slide.$element.find(".ms-thumb"), that = this,
            thumb_frame = $("<div></div>").addClass("ms-thumb-frame").append(thumb_ele).append($('<div class="ms-thumb-ol"></div>')).bind(this.options.hover ? "hover" : "click", function () {
                that.changeSlide(thumb_frame)
            });
        if (this.options.align && thumb_frame.width(this.options.width - ("v" === this.options.dir && "tabs" === this.options.type ? 12 : 0)).height(this.options.height).css("margin-" + ("v" === this.options.dir ? "bottom" : "right"), this.options.space), thumb_frame[0].index = this.index_count++, this.$thumbscont.append(thumb_frame), this.options.fillMode && thumb_ele.is("img")) {
            var aligner = new window.MSAligner(this.options.fillMode, thumb_frame, thumb_ele);
            thumb_ele[0].aligner = aligner, thumb_ele.one("load", function () {
                var $this = $(this);
                $this[0].aligner.init($this.width(), $this.height()), $this[0].aligner.align()
            }).each($.jqLoadFix)
        }
        window.MSBrowserInfo.msie && thumb_ele.on("dragstart", function (event) {
            event.preventDefault()
        }), this.thumbs.push(thumb_frame)
    }, p.create = function () {
        _super.create.call(this), this.__translate_end = window._css3d ? " translateZ(0px)" : "", this.controller = new Controller(0, 0, {
            snappingMinSpeed: 2,
            friction: (100 - .5 * this.options.speed) / 100
        }), this.controller.renderCallback("h" === this.options.dir ? this._hMove : this._vMove, this);
        var that = this;
        this.resize_listener = function () {
            that.__resize()
        }, $(window).bind("resize", this.resize_listener), this.thumbSize = this.thumbs[0][this.__jdimen](!0), this.setupSwipe(), this.__resize();
        var that = this;
        this.options.wheel && (this.wheellistener = function (event) {
            var e = window.event || event.orginalEvent || event,
                delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
            return that.controller.push(10 * -delta), !1
        }, window.MSBrowserInfo.mozilla ? this.$element[0].addEventListener("DOMMouseScroll", this.wheellistener) : this.$element.bind("mousewheel", this.wheellistener)), this.slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.update, this), this.slider.api.addEventListener(MSSliderEvent.HARD_UPDATE, this.realignThumbs, this), this.cindex = this.slider.api.index(), this.select(this.thumbs[this.cindex])
    }, p._hMove = function (controller, value) {
        return this.__contPos = value, window._cssanim ? void (this.$thumbscont[0].style[window._jcsspfx + "Transform"] = "translateX(" + -value + "px)" + this.__translate_end) : void (this.$thumbscont[0].style.left = -value + "px")
    }, p._vMove = function (controller, value) {
        return this.__contPos = value, window._cssanim ? void (this.$thumbscont[0].style[window._jcsspfx + "Transform"] = "translateY(" + -value + "px)" + this.__translate_end) : void (this.$thumbscont[0].style.top = -value + "px")
    }, p.setupSwipe = function () {
        this.swipeControl = new averta.TouchSwipe(this.$element), this.swipeControl.swipeType = "h" === this.options.dir ? "horizontal" : "vertical";
        var that = this;
        this.swipeControl.onSwipe = "h" === this.options.dir ? function (status) {
            that.horizSwipeMove(status)
        } : function (status) {
            that.vertSwipeMove(status)
        }
    }, p.vertSwipeMove = function (status) {
        if (!this.dTouch) {
            var phase = status.phase;
            if ("start" === phase) this.controller.stop(); else if ("move" === phase) this.controller.drag(status.moveY); else if ("end" === phase || "cancel" === phase) {
                var speed = Math.abs(status.distanceY / status.duration * 50 / 3);
                speed > .1 ? this.controller.push(-status.distanceY / status.duration * 50 / 3) : (this.click_enable = !0, this.controller.cancel())
            }
        }
    }, p.horizSwipeMove = function (status) {
        if (!this.dTouch) {
            var phase = status.phase;
            if ("start" === phase) this.controller.stop(), this.click_enable = !1; else if ("move" === phase) this.controller.drag(status.moveX); else if ("end" === phase || "cancel" === phase) {
                var speed = Math.abs(status.distanceX / status.duration * 50 / 3);
                speed > .1 ? this.controller.push(-status.distanceX / status.duration * 50 / 3) : (this.click_enable = !0, this.controller.cancel())
            }
        }
    }, p.update = function () {
        var nindex = this.slider.api.index();
        this.cindex !== nindex && (null != this.cindex && this.unselect(this.thumbs[this.cindex]), this.cindex = nindex, this.select(this.thumbs[this.cindex]), this.dTouch || this.updateThumbscroll())
    }, p.realignThumbs = function () {
        this.$element.find(".ms-thumb").each(function (index, thumb) {
            thumb.aligner && thumb.aligner.align()
        })
    }, p.updateThumbscroll = function () {
        var pos = this.thumbSize * this.cindex;
        if (0 / 0 == this.controller.value && (this.controller.value = 0), pos - this.controller.value < 0) return void this.controller.gotoSnap(this.cindex, !0);
        if (pos + this.thumbSize - this.controller.value > this.$element[this.__dimen]()) {
            var first_snap = this.cindex - Math.floor(this.$element[this.__dimen]() / this.thumbSize) + 1;
            return void this.controller.gotoSnap(first_snap, !0)
        }
    }, p.changeSlide = function (thumb) {
        this.click_enable && this.cindex !== thumb[0].index && this.slider.api.gotoSlide(thumb[0].index)
    }, p.unselect = function (ele) {
        ele.removeClass("ms-thumb-frame-selected")
    }, p.select = function (ele) {
        ele.addClass("ms-thumb-frame-selected")
    }, p.__resize = function () {
        var size = this.$element[this.__dimen]();
        if (this.ls !== size) {
            this.ls = size, this.thumbSize = this.thumbs[0][this.__jdimen](!0);
            var len = this.slider.api.count() * this.thumbSize;
            this.$thumbscont[0].style[this.__dimen] = len + "px", size >= len ? (this.dTouch = !0, this.controller.stop(), this.$thumbscont[0].style[this.__pos] = .5 * (size - len) + "px", this.$thumbscont[0].style[window._jcsspfx + "Transform"] = "") : (this.dTouch = !1, this.click_enable = !0, this.$thumbscont[0].style[this.__pos] = "", this.controller._max_value = len - size, this.controller.options.snapsize = this.thumbSize, this.updateThumbscroll())
        }
    }, p.destroy = function () {
        _super.destroy(), this.options.wheel && (window.MSBrowserInfo.mozilla ? this.$element[0].removeEventListener("DOMMouseScroll", this.wheellistener) : this.$element.unbind("mousewheel", this.wheellistener), this.wheellistener = null), $(window).unbind("resize", this.resize_listener), this.$element.remove(), this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.slider.api.removeEventListener(MSSliderEvent.CHANGE_START, this.update, this)
    }, window.MSThumblist = MSThumblist, MSSlideController.registerControl("thumblist", MSThumblist)
}(jQuery), function ($) {
    "use strict";
    var MSBulltes = function (options) {
        BaseControl.call(this), this.options.dir = "h", this.options.inset = !0, this.options.margin = 10, this.options.space = 10, $.extend(this.options, options), this.bullets = []
    };
    MSBulltes.extend(BaseControl);
    var p = MSBulltes.prototype, _super = BaseControl.prototype;
    p.setup = function () {
        if (_super.setup.call(this), this.$element = $("<div></div>").addClass(this.options.prefix + "bullets").addClass("ms-dir-" + this.options.dir).appendTo(this.cont), this.$bullet_cont = $("<div></div>").addClass("ms-bullets-count").appendTo(this.$element), !this.options.insetTo && this.options.align) {
            var align = this.options.align;
            this.options.inset && this.$element.css(align, this.options.margin)
        }
        this.checkHideUnder()
    }, p.create = function () {
        _super.create.call(this);
        var that = this;
        this.slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.update, this), this.cindex = this.slider.api.index();
        for (var i = 0; i < this.slider.api.count(); ++i) {
            var bullet = $("<div></div>").addClass("ms-bullet");
            bullet[0].index = i, bullet.on("click", function () {
                that.changeSlide(this.index)
            }), this.$bullet_cont.append(bullet), this.bullets.push(bullet), "h" === this.options.dir ? bullet.css("margin", this.options.space / 2) : bullet.css("margin", this.options.space)
        }
        "h" === this.options.dir ? this.$element.width(bullet.outerWidth(!0) * this.slider.api.count()) : this.$element.css("margin-top", -this.$element.outerHeight(!0) / 2), this.select(this.bullets[this.cindex])
    }, p.update = function () {
        var nindex = this.slider.api.index();
        this.cindex !== nindex && (null != this.cindex && this.unselect(this.bullets[this.cindex]), this.cindex = nindex, this.select(this.bullets[this.cindex]))
    }, p.changeSlide = function (index) {
        this.cindex !== index && this.slider.api.gotoSlide(index)
    }, p.unselect = function (ele) {
        ele.removeClass("ms-bullet-selected")
    }, p.select = function (ele) {
        ele.addClass("ms-bullet-selected")
    }, p.destroy = function () {
        _super.destroy(), this.slider.api.removeEventListener(MSSliderEvent.CHANGE_START, this.update, this), this.$element.remove()
    }, window.MSBulltes = MSBulltes, MSSlideController.registerControl("bullets", MSBulltes)
}(jQuery), function ($) {
    "use strict";
    var MSScrollbar = function (options) {
        BaseControl.call(this), this.options.dir = "h", this.options.autohide = !0, this.options.width = 4, this.options.color = "#3D3D3D", this.options.margin = 10, $.extend(this.options, options), this.__dimen = "h" === this.options.dir ? "width" : "height", this.__jdimen = "h" === this.options.dir ? "outerWidth" : "outerHeight", this.__pos = "h" === this.options.dir ? "left" : "top", this.__translate_end = window._css3d ? " translateZ(0px)" : "", this.__translate_start = "h" === this.options.dir ? " translateX(" : "translateY("
    };
    MSScrollbar.extend(BaseControl);
    var p = MSScrollbar.prototype, _super = BaseControl.prototype;
    p.setup = function () {
        if (this.$element = $("<div></div>").addClass(this.options.prefix + "sbar").addClass("ms-dir-" + this.options.dir), _super.setup.call(this), this.$element.appendTo(this.slider.$controlsCont === this.cont ? this.slider.$element : this.cont), this.$bar = $("<div></div>").addClass(this.options.prefix + "bar").appendTo(this.$element), this.slider.options.loop && (this.disable = !0, this.$element.remove()), "v" === this.options.dir ? this.$bar.width(this.options.width) : this.$bar.height(this.options.width), this.$bar.css("background-color", this.options.color), !this.options.insetTo && this.options.align) {
            this.$element.css("v" === this.options.dir ? {right: "auto", left: "auto"} : {top: "auto", bottom: "auto"});
            var align = this.options.align;
            this.options.inset ? this.$element.css(align, this.options.margin) : "top" === align ? this.$element.prependTo(this.slider.$element).css({
                "margin-bottom": this.options.margin,
                position: "relative"
            }) : "bottom" === align ? this.$element.css({
                "margin-top": this.options.margin,
                position: "relative"
            }) : (this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.align())
        }
        this.checkHideUnder()
    }, p.align = function () {
        if (!this.detached) {
            var align = this.options.align,
                pos = this.slider.reserveSpace(align, 2 * this.options.margin + this.options.width);
            this.$element.css(align, -pos - this.options.margin - this.options.width)
        }
    }, p.create = function () {
        if (!this.disable) {
            this.scroller = this.slider.api.scroller, this.slider.api.view.addEventListener(MSViewEvents.SCROLL, this._update, this), this.slider.api.addEventListener(MSSliderEvent.RESIZE, this._resize, this), this._resize(), this.options.autohide && this.$bar.css("opacity", "0")
        }
    }, p._resize = function () {
        this.vdimen = this.$element[this.__dimen](), this.bar_dimen = this.slider.api.view["__" + this.__dimen] * this.vdimen / this.scroller._max_value, this.$bar[this.__dimen](this.bar_dimen)
    }, p._update = function () {
        var value = this.scroller.value * (this.vdimen - this.bar_dimen) / this.scroller._max_value;
        if (this.lvalue !== value) {
            if (this.lvalue = value, this.options.autohide) {
                clearTimeout(this.hto), this.$bar.css("opacity", "1");
                var that = this;
                this.hto = setTimeout(function () {
                    that.$bar.css("opacity", "0")
                }, 150)
            }
            return 0 > value ? void (this.$bar[0].style[this.__dimen] = this.bar_dimen + value + "px") : (value > this.vdimen - this.bar_dimen && (this.$bar[0].style[this.__dimen] = this.vdimen - value + "px"), window._cssanim ? void (this.$bar[0].style[window._jcsspfx + "Transform"] = this.__translate_start + value + "px)" + this.__translate_end) : void (this.$bar[0].style[this.__pos] = value + "px"))
        }
    }, p.destroy = function () {
        _super.destroy(), this.slider.api.view.removeEventListener(MSViewEvents.SCROLL, this._update, this), this.slider.api.removeEventListener(MSSliderEvent.RESIZE, this._resize, this), this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.$element.remove()
    }, window.MSScrollbar = MSScrollbar, MSSlideController.registerControl("scrollbar", MSScrollbar)
}(jQuery), function ($) {
    "use strict";
    var MSTimerbar = function (options) {
        BaseControl.call(this), this.options.autohide = !1, this.options.width = 4, this.options.color = "#FFFFFF", this.options.inset = !0, this.options.margin = 0, $.extend(this.options, options)
    };
    MSTimerbar.extend(BaseControl);
    var p = MSTimerbar.prototype, _super = BaseControl.prototype;
    p.setup = function () {
        if (_super.setup.call(this), this.$element = $("<div></div>").addClass(this.options.prefix + "timerbar"), _super.setup.call(this), this.$element.appendTo(this.slider.$controlsCont === this.cont ? this.slider.$element : this.cont), this.$bar = $("<div></div>").addClass("ms-time-bar").appendTo(this.$element), "v" === this.options.dir ? (this.$bar.width(this.options.width), this.$element.width(this.options.width)) : (this.$bar.height(this.options.width), this.$element.height(this.options.width)), this.$bar.css("background-color", this.options.color), !this.options.insetTo && this.options.align) {
            this.$element.css({top: "auto", bottom: "auto"});
            var align = this.options.align;
            this.options.inset ? this.$element.css(align, this.options.margin) : "top" === align ? this.$element.prependTo(this.slider.$element).css({
                "margin-bottom": this.options.margin,
                position: "relative"
            }) : "bottom" === align ? this.$element.css({
                "margin-top": this.options.margin,
                position: "relative"
            }) : (this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.align())
        }
        this.checkHideUnder()
    }, p.align = function () {
        if (!this.detached) {
            var align = this.options.align,
                pos = this.slider.reserveSpace(align, 2 * this.options.margin + this.options.width);
            this.$element.css(align, -pos - this.options.margin - this.options.width)
        }
    }, p.create = function () {
        _super.create.call(this), this.slider.api.addEventListener(MSSliderEvent.WAITING, this._update, this), this._update()
    }, p._update = function () {
        this.$bar[0].style.width = this.slider.api._delayProgress + "%"
    }, p.destroy = function () {
        _super.destroy(), this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.slider.api.removeEventListener(MSSliderEvent.WAITING, this._update, this), this.$element.remove()
    }, window.MSTimerbar = MSTimerbar, MSSlideController.registerControl("timebar", MSTimerbar)
}(jQuery), function ($) {
    "use strict";
    var MSCircleTimer = function (options) {
        BaseControl.call(this), this.options.color = "#A2A2A2", this.options.stroke = 10, this.options.radius = 4, this.options.autohide = !1, $.extend(this.options, options)
    };
    MSCircleTimer.extend(BaseControl);
    var p = MSCircleTimer.prototype, _super = BaseControl.prototype;
    p.setup = function () {
        return _super.setup.call(this), this.$element = $("<div></div>").addClass(this.options.prefix + "ctimer").appendTo(this.cont), this.$canvas = $("<canvas></canvas>").addClass("ms-ctimer-canvas").appendTo(this.$element), this.$bar = $("<div></div>").addClass("ms-ctimer-bullet").appendTo(this.$element), this.$canvas[0].getContext ? (this.ctx = this.$canvas[0].getContext("2d"), this.prog = 0, this.__w = 2 * (this.options.radius + this.options.stroke / 2), this.$canvas[0].width = this.__w, this.$canvas[0].height = this.__w, void this.checkHideUnder()) : (this.destroy(), void (this.disable = !0))
    }, p.create = function () {
        if (!this.disable) {
            _super.create.call(this), this.slider.api.addEventListener(MSSliderEvent.WAITING, this._update, this);
            var that = this;
            this.$element.click(function () {
                that.slider.api.paused ? that.slider.api.resume() : that.slider.api.pause()
            }), this._update()
        }
    }, p._update = function () {
        var that = this;
        $(this).stop(!0).animate({prog: .01 * this.slider.api._delayProgress}, {
            duration: 200, step: function () {
                that._draw()
            }
        })
    }, p._draw = function () {
        this.ctx.clearRect(0, 0, this.__w, this.__w), this.ctx.beginPath(), this.ctx.arc(.5 * this.__w, .5 * this.__w, this.options.radius, 1.5 * Math.PI, 1.5 * Math.PI + 2 * Math.PI * this.prog, !1), this.ctx.strokeStyle = this.options.color, this.ctx.lineWidth = this.options.stroke, this.ctx.stroke()
    }, p.destroy = function () {
        _super.destroy(), this.disable || ($(this).stop(!0), this.slider.api.removeEventListener(MSSliderEvent.WAITING, this._update, this), this.$element.remove())
    }, window.MSCircleTimer = MSCircleTimer, MSSlideController.registerControl("circletimer", MSCircleTimer)
}(jQuery), function ($) {
    "use strict";
    window.MSSlideInfo = function (options) {
        BaseControl.call(this, options), this.options.autohide = !1, this.options.align = null, this.options.inset = !1, this.options.margin = 10, this.options.size = 100, this.options.dir = "h", $.extend(this.options, options), this.data_list = []
    }, MSSlideInfo.fadeDuratation = 400, MSSlideInfo.extend(BaseControl);
    var p = MSSlideInfo.prototype, _super = BaseControl.prototype;
    p.setup = function () {
        if (this.$element = $("<div></div>").addClass(this.options.prefix + "slide-info").addClass("ms-dir-" + this.options.dir), _super.setup.call(this), this.$element.appendTo(this.slider.$controlsCont === this.cont ? this.slider.$element : this.cont), !this.options.insetTo && this.options.align) {
            var align = this.options.align;
            this.options.inset ? this.$element.css(align, this.options.margin) : "top" === align ? this.$element.prependTo(this.slider.$element).css({
                "margin-bottom": this.options.margin,
                position: "relative"
            }) : "bottom" === align ? this.$element.css({
                "margin-top": this.options.margin,
                position: "relative"
            }) : (this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.align()), "v" === this.options.dir ? this.$element.width(this.options.size) : this.$element.css("min-height", this.options.size)
        }
        this.checkHideUnder()
    }, p.align = function () {
        if (!this.detached) {
            var align = this.options.align,
                pos = this.slider.reserveSpace(align, this.options.size + 2 * this.options.margin);
            this.$element.css(align, -pos - this.options.size - this.options.margin)
        }
    }, p.slideAction = function (slide) {
        var info_ele = $(slide.$element.find(".ms-info"));
        info_ele.detach(), this.data_list[slide.index] = info_ele
    }, p.create = function () {
        _super.create.call(this), this.slider.api.addEventListener(MSSliderEvent.CHANGE_START, this.update, this), this.cindex = this.slider.api.index(), this.switchEle(this.data_list[this.cindex])
    }, p.update = function () {
        var nindex = this.slider.api.index();
        this.switchEle(this.data_list[nindex]), this.cindex = nindex
    }, p.switchEle = function (ele) {
        if (this.current_ele) {
            this.current_ele[0].tween && this.current_ele[0].tween.stop(!0), this.current_ele[0].tween = CTween.animate(this.current_ele, MSSlideInfo.fadeDuratation, {opacity: 0}, {
                complete: function () {
                    this.detach(), this[0].tween = null, ele.css("position", "relative")
                }, target: this.current_ele
            }), ele.css("position", "absolute")
        }
        this.__show(ele)
    }, p.__show = function (ele) {
        ele.appendTo(this.$element).css("opacity", "0"), this.current_ele && ele.height(Math.max(ele.height(), this.current_ele.height())), clearTimeout(this.tou), this.tou = setTimeout(function () {
            CTween.fadeIn(ele, MSSlideInfo.fadeDuratation), ele.css("height", "")
        }, MSSlideInfo.fadeDuratation), ele[0].tween && ele[0].tween.stop(!0), this.current_ele = ele
    }, p.destroy = function () {
        _super.destroy(), clearTimeout(this.tou), this.current_ele && this.current_ele[0].tween && this.current_ele[0].tween.stop("true"), this.$element.remove(), this.slider.api.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this), this.slider.api.removeEventListener(MSSliderEvent.CHANGE_START, this.update, this)
    }, MSSlideController.registerControl("slideinfo", MSSlideInfo)
}(jQuery), function ($, document, window) {
    var PId = 0, $window = $(window), $doc = $(document);
    if (window.MasterSlider) {
        var StartOnAppear = function (slider) {
            this.PId = PId++, this.slider = slider, this.$slider = slider.$element, this.slider.options.startOnAppear && (slider.holdOn(), $doc.ready($.proxy(this.init, this)))
        };
        StartOnAppear.name = "MSStartOnAppear";
        var p = StartOnAppear.prototype;
        p.init = function () {
            this.slider.api;
            $window.on("scroll.soa" + this.PId, $.proxy(this._onScroll, this)).trigger("scroll")
        }, p._onScroll = function () {
            var vpBottom = $window.scrollTop() + $window.height(), top = this.$slider.offset().top;
            vpBottom > top && ($window.off("scroll.soa" + this.PId), this.slider.release())
        }, p.destroy = function () {
        }, MasterSlider.registerPlugin(StartOnAppear)
    }
}(jQuery, document, window), function ($, window) {
    "use strict";
    if (window.MSReady) for (var i = 0, l = MSReady.length; i !== l; i++) MSReady[i].call(null, $)
}(jQuery, window, document), function ($) {
    $(window).on("vc_reload", function () {
        if (window.MSReady) for (var i = 0, l = MSReady.length; i !== l; i++) MSReady[i].call(null, $)
    }), window.msCli = function (f) {
        f = f || "pause";
        var m = masterslider_instances;
        for (var i in m) m[i].api[f]()
    }
}(jQuery);
;

function lazyLoadThumb(e) {
    var t = '<img data-lazy-src="https://i.ytimg.com/vi/ID/hqdefault.jpg" width="480" height="360"><noscript><img src="https://i.ytimg.com/vi/ID/hqdefault.jpg" width="480" height="360"></noscript>',
        a = '<div class="play"></div>';
    return t.replace("ID", e) + a
}

function lazyLoadYoutubeIframe() {
    var e = document.createElement("iframe"), t = "https://www.youtube.com/embed/ID?autoplay=1";
    t += 0 === this.dataset.query.length ? '' : '&' + this.dataset.query;
    e.setAttribute("src", t.replace("ID", this.dataset.id)), e.setAttribute("frameborder", "0"), e.setAttribute("allowfullscreen", "1"), this.parentNode.replaceChild(e, this)
}

document.addEventListener("DOMContentLoaded", function () {
    var e, t, a = document.getElementsByClassName("rll-youtube-player");
    for (t = 0; t < a.length; t++) e = document.createElement("div"), e.setAttribute("data-id", a[t].dataset.id), e.setAttribute("data-query", a[t].dataset.query), e.innerHTML = lazyLoadThumb(a[t].dataset.id), e.onclick = lazyLoadYoutubeIframe, a[t].appendChild(e)
});
;/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
(function (global, factory) {
    "use strict";
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ? factory(global, !0) : function (w) {
            if (!w.document) {
                throw new Error("jQuery requires a window with a document")
            }
            return factory(w)
        }
    } else {
        factory(global)
    }
})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
    "use strict";
    var arr = [];
    var getProto = Object.getPrototypeOf;
    var slice = arr.slice;
    var flat = arr.flat ? function (array) {
        return arr.flat.call(array)
    } : function (array) {
        return arr.concat.apply([], array)
    };
    var push = arr.push;
    var indexOf = arr.indexOf;
    var class2type = {};
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var fnToString = hasOwn.toString;
    var ObjectFunctionString = fnToString.call(Object);
    var support = {};
    var isFunction = function isFunction(obj) {
        return typeof obj === "function" && typeof obj.nodeType !== "number"
    };
    var isWindow = function isWindow(obj) {
        return obj != null && obj === obj.window
    };
    var document = window.document;
    var preservedScriptAttributes = {type: !0, src: !0, nonce: !0, noModule: !0};

    function DOMEval(code, node, doc) {
        doc = doc || document;
        var i, val, script = doc.createElement("script");
        script.text = code;
        if (node) {
            for (i in preservedScriptAttributes) {
                val = node[i] || node.getAttribute && node.getAttribute(i);
                if (val) {
                    script.setAttribute(i, val)
                }
            }
        }
        doc.head.appendChild(script).parentNode.removeChild(script)
    }

    function toType(obj) {
        if (obj == null) {
            return obj + ""
        }
        return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj
    }

    var version = "3.5.1", jQuery = function (selector, context) {
        return new jQuery.fn.init(selector, context)
    };
    jQuery.fn = jQuery.prototype = {
        jquery: version, constructor: jQuery, length: 0, toArray: function () {
            return slice.call(this)
        }, get: function (num) {
            if (num == null) {
                return slice.call(this)
            }
            return num < 0 ? this[num + this.length] : this[num]
        }, pushStack: function (elems) {
            var ret = jQuery.merge(this.constructor(), elems);
            ret.prevObject = this;
            return ret
        }, each: function (callback) {
            return jQuery.each(this, callback)
        }, map: function (callback) {
            return this.pushStack(jQuery.map(this, function (elem, i) {
                return callback.call(elem, i, elem)
            }))
        }, slice: function () {
            return this.pushStack(slice.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, even: function () {
            return this.pushStack(jQuery.grep(this, function (_elem, i) {
                return (i + 1) % 2
            }))
        }, odd: function () {
            return this.pushStack(jQuery.grep(this, function (_elem, i) {
                return i % 2
            }))
        }, eq: function (i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: push, sort: arr.sort, splice: arr.splice
    };
    jQuery.extend = jQuery.fn.extend = function () {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length,
            deep = !1;
        if (typeof target === "boolean") {
            deep = target;
            target = arguments[i] || {};
            i++
        }
        if (typeof target !== "object" && !isFunction(target)) {
            target = {}
        }
        if (i === length) {
            target = this;
            i--
        }
        for (; i < length; i++) {
            if ((options = arguments[i]) != null) {
                for (name in options) {
                    copy = options[name];
                    if (name === "__proto__" || target === copy) {
                        continue
                    }
                    if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                        src = target[name];
                        if (copyIsArray && !Array.isArray(src)) {
                            clone = []
                        } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                            clone = {}
                        } else {
                            clone = src
                        }
                        copyIsArray = !1;
                        target[name] = jQuery.extend(deep, clone, copy)
                    } else if (copy !== undefined) {
                        target[name] = copy
                    }
                }
            }
        }
        return target
    };
    jQuery.extend({
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (msg) {
            throw new Error(msg)
        }, noop: function () {
        }, isPlainObject: function (obj) {
            var proto, Ctor;
            if (!obj || toString.call(obj) !== "[object Object]") {
                return !1
            }
            proto = getProto(obj);
            if (!proto) {
                return !0
            }
            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString
        }, isEmptyObject: function (obj) {
            var name;
            for (name in obj) {
                return !1
            }
            return !0
        }, globalEval: function (code, options, doc) {
            DOMEval(code, {nonce: options && options.nonce}, doc)
        }, each: function (obj, callback) {
            var length, i = 0;
            if (isArrayLike(obj)) {
                length = obj.length;
                for (; i < length; i++) {
                    if (callback.call(obj[i], i, obj[i]) === !1) {
                        break
                    }
                }
            } else {
                for (i in obj) {
                    if (callback.call(obj[i], i, obj[i]) === !1) {
                        break
                    }
                }
            }
            return obj
        }, makeArray: function (arr, results) {
            var ret = results || [];
            if (arr != null) {
                if (isArrayLike(Object(arr))) {
                    jQuery.merge(ret, typeof arr === "string" ? [arr] : arr)
                } else {
                    push.call(ret, arr)
                }
            }
            return ret
        }, inArray: function (elem, arr, i) {
            return arr == null ? -1 : indexOf.call(arr, elem, i)
        }, merge: function (first, second) {
            var len = +second.length, j = 0, i = first.length;
            for (; j < len; j++) {
                first[i++] = second[j]
            }
            first.length = i;
            return first
        }, grep: function (elems, callback, invert) {
            var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
            for (; i < length; i++) {
                callbackInverse = !callback(elems[i], i);
                if (callbackInverse !== callbackExpect) {
                    matches.push(elems[i])
                }
            }
            return matches
        }, map: function (elems, callback, arg) {
            var length, value, i = 0, ret = [];
            if (isArrayLike(elems)) {
                length = elems.length;
                for (; i < length; i++) {
                    value = callback(elems[i], i, arg);
                    if (value != null) {
                        ret.push(value)
                    }
                }
            } else {
                for (i in elems) {
                    value = callback(elems[i], i, arg);
                    if (value != null) {
                        ret.push(value)
                    }
                }
            }
            return flat(ret)
        }, guid: 1, support: support
    });
    if (typeof Symbol === "function") {
        jQuery.fn[Symbol.iterator] = arr[Symbol.iterator]
    }
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (_i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase()
    });

    function isArrayLike(obj) {
        var length = !!obj && "length" in obj && obj.length, type = toType(obj);
        if (isFunction(obj) || isWindow(obj)) {
            return !1
        }
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj
    }

    var Sizzle =
        /*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
        (function (window) {
            var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate,
                setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains,
                expando = "sizzle" + 1 * new Date(), preferredDoc = window.document, dirruns = 0, done = 0,
                classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(),
                nonnativeSelectorCache = createCache(), sortOrder = function (a, b) {
                    if (a === b) {
                        hasDuplicate = !0
                    }
                    return 0
                }, hasOwn = ({}).hasOwnProperty, arr = [], pop = arr.pop, pushNative = arr.push, push = arr.push,
                slice = arr.slice, indexOf = function (list, elem) {
                    var i = 0, len = list.length;
                    for (; i < len; i++) {
                        if (list[i] === elem) {
                            return i
                        }
                    }
                    return -1
                },
                booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" + "ismap|loop|multiple|open|readonly|required|scoped",
                whitespace = "[\\x20\\t\\r\\n\\f]",
                identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
                pseudos = ":(" + identifier + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)",
                rwhitespace = new RegExp(whitespace + "+", "g"),
                rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
                rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
                rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
                rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos),
                ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
                    "ID": new RegExp("^#(" + identifier + ")"),
                    "CLASS": new RegExp("^\\.(" + identifier + ")"),
                    "TAG": new RegExp("^(" + identifier + "|[*])"),
                    "ATTR": new RegExp("^" + attributes),
                    "PSEUDO": new RegExp("^" + pseudos),
                    "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                    "bool": new RegExp("^(?:" + booleans + ")$", "i"),
                    "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
                }, rhtml = /HTML$/i, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i,
                rnative = /^[^{]+\{\s*\[native \w/, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/,
                runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"),
                funescape = function (escape, nonHex) {
                    var high = "0x" + escape.slice(1) - 0x10000;
                    return nonHex ? nonHex : high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00)
                }, rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                fcssescape = function (ch, asCodePoint) {
                    if (asCodePoint) {
                        if (ch === "\0") {
                            return "\uFFFD"
                        }
                        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " "
                    }
                    return "\\" + ch
                }, unloadHandler = function () {
                    setDocument()
                }, inDisabledFieldset = addCombinator(function (elem) {
                    return elem.disabled === !0 && elem.nodeName.toLowerCase() === "fieldset"
                }, {dir: "parentNode", next: "legend"});
            try {
                push.apply((arr = slice.call(preferredDoc.childNodes)), preferredDoc.childNodes);
                arr[preferredDoc.childNodes.length].nodeType
            } catch (e) {
                push = {
                    apply: arr.length ? function (target, els) {
                        pushNative.apply(target, slice.call(els))
                    } : function (target, els) {
                        var j = target.length, i = 0;
                        while ((target[j++] = els[i++])) {
                        }
                        target.length = j - 1
                    }
                }
            }

            function Sizzle(selector, context, results, seed) {
                var m, i, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument,
                    nodeType = context ? context.nodeType : 9;
                results = results || [];
                if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
                    return results
                }
                if (!seed) {
                    setDocument(context);
                    context = context || document;
                    if (documentIsHTML) {
                        if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
                            if ((m = match[1])) {
                                if (nodeType === 9) {
                                    if ((elem = context.getElementById(m))) {
                                        if (elem.id === m) {
                                            results.push(elem);
                                            return results
                                        }
                                    } else {
                                        return results
                                    }
                                } else {
                                    if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                        results.push(elem);
                                        return results
                                    }
                                }
                            } else if (match[2]) {
                                push.apply(results, context.getElementsByTagName(selector));
                                return results
                            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                                push.apply(results, context.getElementsByClassName(m));
                                return results
                            }
                        }
                        if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && (nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
                            newSelector = selector;
                            newContext = context;
                            if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
                                newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                                if (newContext !== context || !support.scope) {
                                    if ((nid = context.getAttribute("id"))) {
                                        nid = nid.replace(rcssescape, fcssescape)
                                    } else {
                                        context.setAttribute("id", (nid = expando))
                                    }
                                }
                                groups = tokenize(selector);
                                i = groups.length;
                                while (i--) {
                                    groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i])
                                }
                                newSelector = groups.join(",")
                            }
                            try {
                                push.apply(results, newContext.querySelectorAll(newSelector));
                                return results
                            } catch (qsaError) {
                                nonnativeSelectorCache(selector, !0)
                            } finally {
                                if (nid === expando) {
                                    context.removeAttribute("id")
                                }
                            }
                        }
                    }
                }
                return select(selector.replace(rtrim, "$1"), context, results, seed)
            }

            function createCache() {
                var keys = [];

                function cache(key, value) {
                    if (keys.push(key + " ") > Expr.cacheLength) {
                        delete cache[keys.shift()]
                    }
                    return (cache[key + " "] = value)
                }

                return cache
            }

            function markFunction(fn) {
                fn[expando] = !0;
                return fn
            }

            function assert(fn) {
                var el = document.createElement("fieldset");
                try {
                    return !!fn(el)
                } catch (e) {
                    return !1
                } finally {
                    if (el.parentNode) {
                        el.parentNode.removeChild(el)
                    }
                    el = null
                }
            }

            function addHandle(attrs, handler) {
                var arr = attrs.split("|"), i = arr.length;
                while (i--) {
                    Expr.attrHandle[arr[i]] = handler
                }
            }

            function siblingCheck(a, b) {
                var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
                if (diff) {
                    return diff
                }
                if (cur) {
                    while ((cur = cur.nextSibling)) {
                        if (cur === b) {
                            return -1
                        }
                    }
                }
                return a ? 1 : -1
            }

            function createInputPseudo(type) {
                return function (elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === type
                }
            }

            function createButtonPseudo(type) {
                return function (elem) {
                    var name = elem.nodeName.toLowerCase();
                    return (name === "input" || name === "button") && elem.type === type
                }
            }

            function createDisabledPseudo(disabled) {
                return function (elem) {
                    if ("form" in elem) {
                        if (elem.parentNode && elem.disabled === !1) {
                            if ("label" in elem) {
                                if ("label" in elem.parentNode) {
                                    return elem.parentNode.disabled === disabled
                                } else {
                                    return elem.disabled === disabled
                                }
                            }
                            return elem.isDisabled === disabled || elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled
                        }
                        return elem.disabled === disabled
                    } else if ("label" in elem) {
                        return elem.disabled === disabled
                    }
                    return !1
                }
            }

            function createPositionalPseudo(fn) {
                return markFunction(function (argument) {
                    argument = +argument;
                    return markFunction(function (seed, matches) {
                        var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                        while (i--) {
                            if (seed[(j = matchIndexes[i])]) {
                                seed[j] = !(matches[j] = seed[j])
                            }
                        }
                    })
                })
            }

            function testContext(context) {
                return context && typeof context.getElementsByTagName !== "undefined" && context
            }

            support = Sizzle.support = {};
            isXML = Sizzle.isXML = function (elem) {
                var namespace = elem.namespaceURI, docElem = (elem.ownerDocument || elem).documentElement;
                return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML")
            };
            setDocument = Sizzle.setDocument = function (node) {
                var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
                if (doc == document || doc.nodeType !== 9 || !doc.documentElement) {
                    return document
                }
                document = doc;
                docElem = document.documentElement;
                documentIsHTML = !isXML(document);
                if (preferredDoc != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
                    if (subWindow.addEventListener) {
                        subWindow.addEventListener("unload", unloadHandler, !1)
                    } else if (subWindow.attachEvent) {
                        subWindow.attachEvent("onunload", unloadHandler)
                    }
                }
                support.scope = assert(function (el) {
                    docElem.appendChild(el).appendChild(document.createElement("div"));
                    return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length
                });
                support.attributes = assert(function (el) {
                    el.className = "i";
                    return !el.getAttribute("className")
                });
                support.getElementsByTagName = assert(function (el) {
                    el.appendChild(document.createComment(""));
                    return !el.getElementsByTagName("*").length
                });
                support.getElementsByClassName = rnative.test(document.getElementsByClassName);
                support.getById = assert(function (el) {
                    docElem.appendChild(el).id = expando;
                    return !document.getElementsByName || !document.getElementsByName(expando).length
                });
                if (support.getById) {
                    Expr.filter.ID = function (id) {
                        var attrId = id.replace(runescape, funescape);
                        return function (elem) {
                            return elem.getAttribute("id") === attrId
                        }
                    };
                    Expr.find.ID = function (id, context) {
                        if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                            var elem = context.getElementById(id);
                            return elem ? [elem] : []
                        }
                    }
                } else {
                    Expr.filter.ID = function (id) {
                        var attrId = id.replace(runescape, funescape);
                        return function (elem) {
                            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                            return node && node.value === attrId
                        }
                    };
                    Expr.find.ID = function (id, context) {
                        if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                            var node, i, elems, elem = context.getElementById(id);
                            if (elem) {
                                node = elem.getAttributeNode("id");
                                if (node && node.value === id) {
                                    return [elem]
                                }
                                elems = context.getElementsByName(id);
                                i = 0;
                                while ((elem = elems[i++])) {
                                    node = elem.getAttributeNode("id");
                                    if (node && node.value === id) {
                                        return [elem]
                                    }
                                }
                            }
                            return []
                        }
                    }
                }
                Expr.find.TAG = support.getElementsByTagName ? function (tag, context) {
                    if (typeof context.getElementsByTagName !== "undefined") {
                        return context.getElementsByTagName(tag)
                    } else if (support.qsa) {
                        return context.querySelectorAll(tag)
                    }
                } : function (tag, context) {
                    var elem, tmp = [], i = 0, results = context.getElementsByTagName(tag);
                    if (tag === "*") {
                        while ((elem = results[i++])) {
                            if (elem.nodeType === 1) {
                                tmp.push(elem)
                            }
                        }
                        return tmp
                    }
                    return results
                };
                Expr.find.CLASS = support.getElementsByClassName && function (className, context) {
                    if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                        return context.getElementsByClassName(className)
                    }
                };
                rbuggyMatches = [];
                rbuggyQSA = [];
                if ((support.qsa = rnative.test(document.querySelectorAll))) {
                    assert(function (el) {
                        var input;
                        docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                        if (el.querySelectorAll("[msallowcapture^='']").length) {
                            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")")
                        }
                        if (!el.querySelectorAll("[selected]").length) {
                            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")")
                        }
                        if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                            rbuggyQSA.push("~=")
                        }
                        input = document.createElement("input");
                        input.setAttribute("name", "");
                        el.appendChild(input);
                        if (!el.querySelectorAll("[name='']").length) {
                            rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")")
                        }
                        if (!el.querySelectorAll(":checked").length) {
                            rbuggyQSA.push(":checked")
                        }
                        if (!el.querySelectorAll("a#" + expando + "+*").length) {
                            rbuggyQSA.push(".#.+[+~]")
                        }
                        el.querySelectorAll("\\\f");
                        rbuggyQSA.push("[\\r\\n\\f]")
                    });
                    assert(function (el) {
                        el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
                        var input = document.createElement("input");
                        input.setAttribute("type", "hidden");
                        el.appendChild(input).setAttribute("name", "D");
                        if (el.querySelectorAll("[name=d]").length) {
                            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=")
                        }
                        if (el.querySelectorAll(":enabled").length !== 2) {
                            rbuggyQSA.push(":enabled", ":disabled")
                        }
                        docElem.appendChild(el).disabled = !0;
                        if (el.querySelectorAll(":disabled").length !== 2) {
                            rbuggyQSA.push(":enabled", ":disabled")
                        }
                        el.querySelectorAll("*,:x");
                        rbuggyQSA.push(",.*:")
                    })
                }
                if ((support.matchesSelector = rnative.test((matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)))) {
                    assert(function (el) {
                        support.disconnectedMatch = matches.call(el, "*");
                        matches.call(el, "[s!='']:x");
                        rbuggyMatches.push("!=", pseudos)
                    })
                }
                rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
                rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
                hasCompare = rnative.test(docElem.compareDocumentPosition);
                contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
                    var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
                    return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16))
                } : function (a, b) {
                    if (b) {
                        while ((b = b.parentNode)) {
                            if (b === a) {
                                return !0
                            }
                        }
                    }
                    return !1
                };
                sortOrder = hasCompare ? function (a, b) {
                    if (a === b) {
                        hasDuplicate = !0;
                        return 0
                    }
                    var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    if (compare) {
                        return compare
                    }
                    compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
                    if (compare & 1 || (!support.sortDetached && b.compareDocumentPosition(a) === compare)) {
                        if (a == document || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) {
                            return -1
                        }
                        if (b == document || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) {
                            return 1
                        }
                        return sortInput ? (indexOf(sortInput, a) - indexOf(sortInput, b)) : 0
                    }
                    return compare & 4 ? -1 : 1
                } : function (a, b) {
                    if (a === b) {
                        hasDuplicate = !0;
                        return 0
                    }
                    var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [a], bp = [b];
                    if (!aup || !bup) {
                        return a == document ? -1 : b == document ? 1 : aup ? -1 : bup ? 1 : sortInput ? (indexOf(sortInput, a) - indexOf(sortInput, b)) : 0
                    } else if (aup === bup) {
                        return siblingCheck(a, b)
                    }
                    cur = a;
                    while ((cur = cur.parentNode)) {
                        ap.unshift(cur)
                    }
                    cur = b;
                    while ((cur = cur.parentNode)) {
                        bp.unshift(cur)
                    }
                    while (ap[i] === bp[i]) {
                        i++
                    }
                    return i ? siblingCheck(ap[i], bp[i]) : ap[i] == preferredDoc ? -1 : bp[i] == preferredDoc ? 1 : 0
                };
                return document
            };
            Sizzle.matches = function (expr, elements) {
                return Sizzle(expr, null, null, elements)
            };
            Sizzle.matchesSelector = function (elem, expr) {
                setDocument(elem);
                if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
                    try {
                        var ret = matches.call(elem, expr);
                        if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                            return ret
                        }
                    } catch (e) {
                        nonnativeSelectorCache(expr, !0)
                    }
                }
                return Sizzle(expr, document, null, [elem]).length > 0
            };
            Sizzle.contains = function (context, elem) {
                if ((context.ownerDocument || context) != document) {
                    setDocument(context)
                }
                return contains(context, elem)
            };
            Sizzle.attr = function (elem, name) {
                if ((elem.ownerDocument || elem) != document) {
                    setDocument(elem)
                }
                var fn = Expr.attrHandle[name.toLowerCase()],
                    val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
                return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null
            };
            Sizzle.escape = function (sel) {
                return (sel + "").replace(rcssescape, fcssescape)
            };
            Sizzle.error = function (msg) {
                throw new Error("Syntax error, unrecognized expression: " + msg)
            };
            Sizzle.uniqueSort = function (results) {
                var elem, duplicates = [], j = 0, i = 0;
                hasDuplicate = !support.detectDuplicates;
                sortInput = !support.sortStable && results.slice(0);
                results.sort(sortOrder);
                if (hasDuplicate) {
                    while ((elem = results[i++])) {
                        if (elem === results[i]) {
                            j = duplicates.push(i)
                        }
                    }
                    while (j--) {
                        results.splice(duplicates[j], 1)
                    }
                }
                sortInput = null;
                return results
            };
            getText = Sizzle.getText = function (elem) {
                var node, ret = "", i = 0, nodeType = elem.nodeType;
                if (!nodeType) {
                    while ((node = elem[i++])) {
                        ret += getText(node)
                    }
                } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                    if (typeof elem.textContent === "string") {
                        return elem.textContent
                    } else {
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            ret += getText(elem)
                        }
                    }
                } else if (nodeType === 3 || nodeType === 4) {
                    return elem.nodeValue
                }
                return ret
            };
            Expr = Sizzle.selectors = {
                cacheLength: 50,
                createPseudo: markFunction,
                match: matchExpr,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    "ATTR": function (match) {
                        match[1] = match[1].replace(runescape, funescape);
                        match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                        if (match[2] === "~=") {
                            match[3] = " " + match[3] + " "
                        }
                        return match.slice(0, 4)
                    }, "CHILD": function (match) {
                        match[1] = match[1].toLowerCase();
                        if (match[1].slice(0, 3) === "nth") {
                            if (!match[3]) {
                                Sizzle.error(match[0])
                            }
                            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                            match[5] = +((match[7] + match[8]) || match[3] === "odd")
                        } else if (match[3]) {
                            Sizzle.error(match[0])
                        }
                        return match
                    }, "PSEUDO": function (match) {
                        var excess, unquoted = !match[6] && match[2];
                        if (matchExpr.CHILD.test(match[0])) {
                            return null
                        }
                        if (match[3]) {
                            match[2] = match[4] || match[5] || ""
                        } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, !0)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                            match[0] = match[0].slice(0, excess);
                            match[2] = unquoted.slice(0, excess)
                        }
                        return match.slice(0, 3)
                    }
                },
                filter: {
                    "TAG": function (nodeNameSelector) {
                        var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                        return nodeNameSelector === "*" ? function () {
                            return !0
                        } : function (elem) {
                            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName
                        }
                    }, "CLASS": function (className) {
                        var pattern = classCache[className + " "];
                        return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
                            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "")
                        })
                    }, "ATTR": function (name, operator, check) {
                        return function (elem) {
                            var result = Sizzle.attr(elem, name);
                            if (result == null) {
                                return operator === "!="
                            }
                            if (!operator) {
                                return !0
                            }
                            result += "";
                            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : !1
                        }
                    }, "CHILD": function (type, what, _argument, first, last) {
                        var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last",
                            ofType = what === "of-type";
                        return first === 1 && last === 0 ? function (elem) {
                            return !!elem.parentNode
                        } : function (elem, _context, xml) {
                            var cache, uniqueCache, outerCache, node, nodeIndex, start,
                                dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode,
                                name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = !1;
                            if (parent) {
                                if (simple) {
                                    while (dir) {
                                        node = elem;
                                        while ((node = node[dir])) {
                                            if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                                                return !1
                                            }
                                        }
                                        start = dir = type === "only" && !start && "nextSibling"
                                    }
                                    return !0
                                }
                                start = [forward ? parent.firstChild : parent.lastChild];
                                if (forward && useCache) {
                                    node = parent;
                                    outerCache = node[expando] || (node[expando] = {});
                                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                    cache = uniqueCache[type] || [];
                                    nodeIndex = cache[0] === dirruns && cache[1];
                                    diff = nodeIndex && cache[2];
                                    node = nodeIndex && parent.childNodes[nodeIndex];
                                    while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
                                        if (node.nodeType === 1 && ++diff && node === elem) {
                                            uniqueCache[type] = [dirruns, nodeIndex, diff];
                                            break
                                        }
                                    }
                                } else {
                                    if (useCache) {
                                        node = elem;
                                        outerCache = node[expando] || (node[expando] = {});
                                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                        cache = uniqueCache[type] || [];
                                        nodeIndex = cache[0] === dirruns && cache[1];
                                        diff = nodeIndex
                                    }
                                    if (diff === !1) {
                                        while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
                                            if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                                                if (useCache) {
                                                    outerCache = node[expando] || (node[expando] = {});
                                                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                                    uniqueCache[type] = [dirruns, diff]
                                                }
                                                if (node === elem) {
                                                    break
                                                }
                                            }
                                        }
                                    }
                                }
                                diff -= last;
                                return diff === first || (diff % first === 0 && diff / first >= 0)
                            }
                        }
                    }, "PSEUDO": function (pseudo, argument) {
                        var args,
                            fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                        if (fn[expando]) {
                            return fn(argument)
                        }
                        if (fn.length > 1) {
                            args = [pseudo, pseudo, "", argument];
                            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
                                var idx, matched = fn(seed, argument), i = matched.length;
                                while (i--) {
                                    idx = indexOf(seed, matched[i]);
                                    seed[idx] = !(matches[idx] = matched[i])
                                }
                            }) : function (elem) {
                                return fn(elem, 0, args)
                            }
                        }
                        return fn
                    }
                },
                pseudos: {
                    "not": markFunction(function (selector) {
                        var input = [], results = [], matcher = compile(selector.replace(rtrim, "$1"));
                        return matcher[expando] ? markFunction(function (seed, matches, _context, xml) {
                            var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                            while (i--) {
                                if ((elem = unmatched[i])) {
                                    seed[i] = !(matches[i] = elem)
                                }
                            }
                        }) : function (elem, _context, xml) {
                            input[0] = elem;
                            matcher(input, null, xml, results);
                            input[0] = null;
                            return !results.pop()
                        }
                    }),
                    "has": markFunction(function (selector) {
                        return function (elem) {
                            return Sizzle(selector, elem).length > 0
                        }
                    }),
                    "contains": markFunction(function (text) {
                        text = text.replace(runescape, funescape);
                        return function (elem) {
                            return (elem.textContent || getText(elem)).indexOf(text) > -1
                        }
                    }),
                    "lang": markFunction(function (lang) {
                        if (!ridentifier.test(lang || "")) {
                            Sizzle.error("unsupported lang: " + lang)
                        }
                        lang = lang.replace(runescape, funescape).toLowerCase();
                        return function (elem) {
                            var elemLang;
                            do {
                                if ((elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) {
                                    elemLang = elemLang.toLowerCase();
                                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0
                                }
                            } while ((elem = elem.parentNode) && elem.nodeType === 1);
                            return !1
                        }
                    }),
                    "target": function (elem) {
                        var hash = window.location && window.location.hash;
                        return hash && hash.slice(1) === elem.id
                    },
                    "root": function (elem) {
                        return elem === docElem
                    },
                    "focus": function (elem) {
                        return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex)
                    },
                    "enabled": createDisabledPseudo(!1),
                    "disabled": createDisabledPseudo(!0),
                    "checked": function (elem) {
                        var nodeName = elem.nodeName.toLowerCase();
                        return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected)
                    },
                    "selected": function (elem) {
                        if (elem.parentNode) {
                            elem.parentNode.selectedIndex
                        }
                        return elem.selected === !0
                    },
                    "empty": function (elem) {
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            if (elem.nodeType < 6) {
                                return !1
                            }
                        }
                        return !0
                    },
                    "parent": function (elem) {
                        return !Expr.pseudos.empty(elem)
                    },
                    "header": function (elem) {
                        return rheader.test(elem.nodeName)
                    },
                    "input": function (elem) {
                        return rinputs.test(elem.nodeName)
                    },
                    "button": function (elem) {
                        var name = elem.nodeName.toLowerCase();
                        return name === "input" && elem.type === "button" || name === "button"
                    },
                    "text": function (elem) {
                        var attr;
                        return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text")
                    },
                    "first": createPositionalPseudo(function () {
                        return [0]
                    }),
                    "last": createPositionalPseudo(function (_matchIndexes, length) {
                        return [length - 1]
                    }),
                    "eq": createPositionalPseudo(function (_matchIndexes, length, argument) {
                        return [argument < 0 ? argument + length : argument]
                    }),
                    "even": createPositionalPseudo(function (matchIndexes, length) {
                        var i = 0;
                        for (; i < length; i += 2) {
                            matchIndexes.push(i)
                        }
                        return matchIndexes
                    }),
                    "odd": createPositionalPseudo(function (matchIndexes, length) {
                        var i = 1;
                        for (; i < length; i += 2) {
                            matchIndexes.push(i)
                        }
                        return matchIndexes
                    }),
                    "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
                        var i = argument < 0 ? argument + length : argument > length ? length : argument;
                        for (; --i >= 0;) {
                            matchIndexes.push(i)
                        }
                        return matchIndexes
                    }),
                    "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
                        var i = argument < 0 ? argument + length : argument;
                        for (; ++i < length;) {
                            matchIndexes.push(i)
                        }
                        return matchIndexes
                    })
                }
            };
            Expr.pseudos.nth = Expr.pseudos.eq;
            for (i in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) {
                Expr.pseudos[i] = createInputPseudo(i)
            }
            for (i in {submit: !0, reset: !0}) {
                Expr.pseudos[i] = createButtonPseudo(i)
            }

            function setFilters() {
            }

            setFilters.prototype = Expr.filters = Expr.pseudos;
            Expr.setFilters = new setFilters();
            tokenize = Sizzle.tokenize = function (selector, parseOnly) {
                var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
                if (cached) {
                    return parseOnly ? 0 : cached.slice(0)
                }
                soFar = selector;
                groups = [];
                preFilters = Expr.preFilter;
                while (soFar) {
                    if (!matched || (match = rcomma.exec(soFar))) {
                        if (match) {
                            soFar = soFar.slice(match[0].length) || soFar
                        }
                        groups.push((tokens = []))
                    }
                    matched = !1;
                    if ((match = rcombinators.exec(soFar))) {
                        matched = match.shift();
                        tokens.push({value: matched, type: match[0].replace(rtrim, " ")});
                        soFar = soFar.slice(matched.length)
                    }
                    for (type in Expr.filter) {
                        if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                            matched = match.shift();
                            tokens.push({value: matched, type: type, matches: match});
                            soFar = soFar.slice(matched.length)
                        }
                    }
                    if (!matched) {
                        break
                    }
                }
                return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0)
            };

            function toSelector(tokens) {
                var i = 0, len = tokens.length, selector = "";
                for (; i < len; i++) {
                    selector += tokens[i].value
                }
                return selector
            }

            function addCombinator(matcher, combinator, base) {
                var dir = combinator.dir, skip = combinator.next, key = skip || dir,
                    checkNonElements = base && key === "parentNode", doneName = done++;
                return combinator.first ? function (elem, context, xml) {
                    while ((elem = elem[dir])) {
                        if (elem.nodeType === 1 || checkNonElements) {
                            return matcher(elem, context, xml)
                        }
                    }
                    return !1
                } : function (elem, context, xml) {
                    var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
                    if (xml) {
                        while ((elem = elem[dir])) {
                            if (elem.nodeType === 1 || checkNonElements) {
                                if (matcher(elem, context, xml)) {
                                    return !0
                                }
                            }
                        }
                    } else {
                        while ((elem = elem[dir])) {
                            if (elem.nodeType === 1 || checkNonElements) {
                                outerCache = elem[expando] || (elem[expando] = {});
                                uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                                if (skip && skip === elem.nodeName.toLowerCase()) {
                                    elem = elem[dir] || elem
                                } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                                    return (newCache[2] = oldCache[2])
                                } else {
                                    uniqueCache[key] = newCache;
                                    if ((newCache[2] = matcher(elem, context, xml))) {
                                        return !0
                                    }
                                }
                            }
                        }
                    }
                    return !1
                }
            }

            function elementMatcher(matchers) {
                return matchers.length > 1 ? function (elem, context, xml) {
                    var i = matchers.length;
                    while (i--) {
                        if (!matchers[i](elem, context, xml)) {
                            return !1
                        }
                    }
                    return !0
                } : matchers[0]
            }

            function multipleContexts(selector, contexts, results) {
                var i = 0, len = contexts.length;
                for (; i < len; i++) {
                    Sizzle(selector, contexts[i], results)
                }
                return results
            }

            function condense(unmatched, map, filter, context, xml) {
                var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
                for (; i < len; i++) {
                    if ((elem = unmatched[i])) {
                        if (!filter || filter(elem, context, xml)) {
                            newUnmatched.push(elem);
                            if (mapped) {
                                map.push(i)
                            }
                        }
                    }
                }
                return newUnmatched
            }

            function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                if (postFilter && !postFilter[expando]) {
                    postFilter = setMatcher(postFilter)
                }
                if (postFinder && !postFinder[expando]) {
                    postFinder = setMatcher(postFinder, postSelector)
                }
                return markFunction(function (seed, results, context, xml) {
                    var temp, i, elem, preMap = [], postMap = [], preexisting = results.length,
                        elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
                        matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
                        matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                    if (matcher) {
                        matcher(matcherIn, matcherOut, context, xml)
                    }
                    if (postFilter) {
                        temp = condense(matcherOut, postMap);
                        postFilter(temp, [], context, xml);
                        i = temp.length;
                        while (i--) {
                            if ((elem = temp[i])) {
                                matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem)
                            }
                        }
                    }
                    if (seed) {
                        if (postFinder || preFilter) {
                            if (postFinder) {
                                temp = [];
                                i = matcherOut.length;
                                while (i--) {
                                    if ((elem = matcherOut[i])) {
                                        temp.push((matcherIn[i] = elem))
                                    }
                                }
                                postFinder(null, (matcherOut = []), temp, xml)
                            }
                            i = matcherOut.length;
                            while (i--) {
                                if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                                    seed[temp] = !(results[temp] = elem)
                                }
                            }
                        }
                    } else {
                        matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                        if (postFinder) {
                            postFinder(null, results, matcherOut, xml)
                        } else {
                            push.apply(results, matcherOut)
                        }
                    }
                })
            }

            function matcherFromTokens(tokens) {
                var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type],
                    implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0,
                    matchContext = addCombinator(function (elem) {
                        return elem === checkContext
                    }, implicitRelative, !0), matchAnyContext = addCombinator(function (elem) {
                        return indexOf(checkContext, elem) > -1
                    }, implicitRelative, !0), matchers = [function (elem, context, xml) {
                        var ret = (!leadingRelative && (xml || context !== outermostContext)) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                        checkContext = null;
                        return ret
                    }];
                for (; i < len; i++) {
                    if ((matcher = Expr.relative[tokens[i].type])) {
                        matchers = [addCombinator(elementMatcher(matchers), matcher)]
                    } else {
                        matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                        if (matcher[expando]) {
                            j = ++i;
                            for (; j < len; j++) {
                                if (Expr.relative[tokens[j].type]) {
                                    break
                                }
                            }
                            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({value: tokens[i - 2].type === " " ? "*" : ""})).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens((tokens = tokens.slice(j))), j < len && toSelector(tokens))
                        }
                        matchers.push(matcher)
                    }
                }
                return elementMatcher(matchers)
            }

            function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0,
                    superMatcher = function (seed, context, xml, results, outermost) {
                        var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [],
                            contextBackup = outermostContext,
                            elems = seed || byElement && Expr.find.TAG("*", outermost),
                            dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                            len = elems.length;
                        if (outermost) {
                            outermostContext = context == document || context || outermost
                        }
                        for (; i !== len && (elem = elems[i]) != null; i++) {
                            if (byElement && elem) {
                                j = 0;
                                if (!context && elem.ownerDocument != document) {
                                    setDocument(elem);
                                    xml = !documentIsHTML
                                }
                                while ((matcher = elementMatchers[j++])) {
                                    if (matcher(elem, context || document, xml)) {
                                        results.push(elem);
                                        break
                                    }
                                }
                                if (outermost) {
                                    dirruns = dirrunsUnique
                                }
                            }
                            if (bySet) {
                                if ((elem = !matcher && elem)) {
                                    matchedCount--
                                }
                                if (seed) {
                                    unmatched.push(elem)
                                }
                            }
                        }
                        matchedCount += i;
                        if (bySet && i !== matchedCount) {
                            j = 0;
                            while ((matcher = setMatchers[j++])) {
                                matcher(unmatched, setMatched, context, xml)
                            }
                            if (seed) {
                                if (matchedCount > 0) {
                                    while (i--) {
                                        if (!(unmatched[i] || setMatched[i])) {
                                            setMatched[i] = pop.call(results)
                                        }
                                    }
                                }
                                setMatched = condense(setMatched)
                            }
                            push.apply(results, setMatched);
                            if (outermost && !seed && setMatched.length > 0 && (matchedCount + setMatchers.length) > 1) {
                                Sizzle.uniqueSort(results)
                            }
                        }
                        if (outermost) {
                            dirruns = dirrunsUnique;
                            outermostContext = contextBackup
                        }
                        return unmatched
                    };
                return bySet ? markFunction(superMatcher) : superMatcher
            }

            compile = Sizzle.compile = function (selector, match) {
                var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
                if (!cached) {
                    if (!match) {
                        match = tokenize(selector)
                    }
                    i = match.length;
                    while (i--) {
                        cached = matcherFromTokens(match[i]);
                        if (cached[expando]) {
                            setMatchers.push(cached)
                        } else {
                            elementMatchers.push(cached)
                        }
                    }
                    cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                    cached.selector = selector
                }
                return cached
            };
            select = Sizzle.select = function (selector, context, results, seed) {
                var i, tokens, token, type, find, compiled = typeof selector === "function" && selector,
                    match = !seed && tokenize((selector = compiled.selector || selector));
                results = results || [];
                if (match.length === 1) {
                    tokens = match[0] = match[0].slice(0);
                    if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                        context = (Expr.find.ID(token.matches[0].replace(runescape, funescape), context) || [])[0];
                        if (!context) {
                            return results
                        } else if (compiled) {
                            context = context.parentNode
                        }
                        selector = selector.slice(tokens.shift().value.length)
                    }
                    i = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
                    while (i--) {
                        token = tokens[i];
                        if (Expr.relative[(type = token.type)]) {
                            break
                        }
                        if ((find = Expr.find[type])) {
                            if ((seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context))) {
                                tokens.splice(i, 1);
                                selector = seed.length && toSelector(tokens);
                                if (!selector) {
                                    push.apply(results, seed);
                                    return results
                                }
                                break
                            }
                        }
                    }
                }
                (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
                return results
            };
            support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
            support.detectDuplicates = !!hasDuplicate;
            setDocument();
            support.sortDetached = assert(function (el) {
                return el.compareDocumentPosition(document.createElement("fieldset")) & 1
            });
            if (!assert(function (el) {
                el.innerHTML = "<a href='#'></a>";
                return el.firstChild.getAttribute("href") === "#"
            })) {
                addHandle("type|href|height|width", function (elem, name, isXML) {
                    if (!isXML) {
                        return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2)
                    }
                })
            }
            if (!support.attributes || !assert(function (el) {
                el.innerHTML = "<input/>";
                el.firstChild.setAttribute("value", "");
                return el.firstChild.getAttribute("value") === ""
            })) {
                addHandle("value", function (elem, _name, isXML) {
                    if (!isXML && elem.nodeName.toLowerCase() === "input") {
                        return elem.defaultValue
                    }
                })
            }
            if (!assert(function (el) {
                return el.getAttribute("disabled") == null
            })) {
                addHandle(booleans, function (elem, name, isXML) {
                    var val;
                    if (!isXML) {
                        return elem[name] === !0 ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null
                    }
                })
            }
            return Sizzle
        })(window);
    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors;
    jQuery.expr[":"] = jQuery.expr.pseudos;
    jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;
    jQuery.escapeSelector = Sizzle.escape;
    var dir = function (elem, dir, until) {
        var matched = [], truncate = until !== undefined;
        while ((elem = elem[dir]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
                if (truncate && jQuery(elem).is(until)) {
                    break
                }
                matched.push(elem)
            }
        }
        return matched
    };
    var siblings = function (n, elem) {
        var matched = [];
        for (; n; n = n.nextSibling) {
            if (n.nodeType === 1 && n !== elem) {
                matched.push(n)
            }
        }
        return matched
    };
    var rneedsContext = jQuery.expr.match.needsContext;

    function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase()
    };var rsingleTag = (/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i);

    function winnow(elements, qualifier, not) {
        if (isFunction(qualifier)) {
            return jQuery.grep(elements, function (elem, i) {
                return !!qualifier.call(elem, i, elem) !== not
            })
        }
        if (qualifier.nodeType) {
            return jQuery.grep(elements, function (elem) {
                return (elem === qualifier) !== not
            })
        }
        if (typeof qualifier !== "string") {
            return jQuery.grep(elements, function (elem) {
                return (indexOf.call(qualifier, elem) > -1) !== not
            })
        }
        return jQuery.filter(qualifier, elements, not)
    }

    jQuery.filter = function (expr, elems, not) {
        var elem = elems[0];
        if (not) {
            expr = ":not(" + expr + ")"
        }
        if (elems.length === 1 && elem.nodeType === 1) {
            return jQuery.find.matchesSelector(elem, expr) ? [elem] : []
        }
        return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
            return elem.nodeType === 1
        }))
    };
    jQuery.fn.extend({
        find: function (selector) {
            var i, ret, len = this.length, self = this;
            if (typeof selector !== "string") {
                return this.pushStack(jQuery(selector).filter(function () {
                    for (i = 0; i < len; i++) {
                        if (jQuery.contains(self[i], this)) {
                            return !0
                        }
                    }
                }))
            }
            ret = this.pushStack([]);
            for (i = 0; i < len; i++) {
                jQuery.find(selector, self[i], ret)
            }
            return len > 1 ? jQuery.uniqueSort(ret) : ret
        }, filter: function (selector) {
            return this.pushStack(winnow(this, selector || [], !1))
        }, not: function (selector) {
            return this.pushStack(winnow(this, selector || [], !0))
        }, is: function (selector) {
            return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], !1).length
        }
    });
    var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        init = jQuery.fn.init = function (selector, context, root) {
            var match, elem;
            if (!selector) {
                return this
            }
            root = root || rootjQuery;
            if (typeof selector === "string") {
                if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
                    match = [null, selector, null]
                } else {
                    match = rquickExpr.exec(selector)
                }
                if (match && (match[1] || !context)) {
                    if (match[1]) {
                        context = context instanceof jQuery ? context[0] : context;
                        jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, !0));
                        if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                            for (match in context) {
                                if (isFunction(this[match])) {
                                    this[match](context[match])
                                } else {
                                    this.attr(match, context[match])
                                }
                            }
                        }
                        return this
                    } else {
                        elem = document.getElementById(match[2]);
                        if (elem) {
                            this[0] = elem;
                            this.length = 1
                        }
                        return this
                    }
                } else if (!context || context.jquery) {
                    return (context || root).find(selector)
                } else {
                    return this.constructor(context).find(selector)
                }
            } else if (selector.nodeType) {
                this[0] = selector;
                this.length = 1;
                return this
            } else if (isFunction(selector)) {
                return root.ready !== undefined ? root.ready(selector) : selector(jQuery)
            }
            return jQuery.makeArray(selector, this)
        };
    init.prototype = jQuery.fn;
    rootjQuery = jQuery(document);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/,
        guaranteedUnique = {children: !0, contents: !0, next: !0, prev: !0};
    jQuery.fn.extend({
        has: function (target) {
            var targets = jQuery(target, this), l = targets.length;
            return this.filter(function () {
                var i = 0;
                for (; i < l; i++) {
                    if (jQuery.contains(this, targets[i])) {
                        return !0
                    }
                }
            })
        }, closest: function (selectors, context) {
            var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
            if (!rneedsContext.test(selectors)) {
                for (; i < l; i++) {
                    for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                        if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                            matched.push(cur);
                            break
                        }
                    }
                }
            }
            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched)
        }, index: function (elem) {
            if (!elem) {
                return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1
            }
            if (typeof elem === "string") {
                return indexOf.call(jQuery(elem), this[0])
            }
            return indexOf.call(this, elem.jquery ? elem[0] : elem)
        }, add: function (selector, context) {
            return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))))
        }, addBack: function (selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector))
        }
    });

    function sibling(cur, dir) {
        while ((cur = cur[dir]) && cur.nodeType !== 1) {
        }
        return cur
    }

    jQuery.each({
        parent: function (elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null
        }, parents: function (elem) {
            return dir(elem, "parentNode")
        }, parentsUntil: function (elem, _i, until) {
            return dir(elem, "parentNode", until)
        }, next: function (elem) {
            return sibling(elem, "nextSibling")
        }, prev: function (elem) {
            return sibling(elem, "previousSibling")
        }, nextAll: function (elem) {
            return dir(elem, "nextSibling")
        }, prevAll: function (elem) {
            return dir(elem, "previousSibling")
        }, nextUntil: function (elem, _i, until) {
            return dir(elem, "nextSibling", until)
        }, prevUntil: function (elem, _i, until) {
            return dir(elem, "previousSibling", until)
        }, siblings: function (elem) {
            return siblings((elem.parentNode || {}).firstChild, elem)
        }, children: function (elem) {
            return siblings(elem.firstChild)
        }, contents: function (elem) {
            if (elem.contentDocument != null && getProto(elem.contentDocument)) {
                return elem.contentDocument
            }
            if (nodeName(elem, "template")) {
                elem = elem.content || elem
            }
            return jQuery.merge([], elem.childNodes)
        }
    }, function (name, fn) {
        jQuery.fn[name] = function (until, selector) {
            var matched = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") {
                selector = until
            }
            if (selector && typeof selector === "string") {
                matched = jQuery.filter(selector, matched)
            }
            if (this.length > 1) {
                if (!guaranteedUnique[name]) {
                    jQuery.uniqueSort(matched)
                }
                if (rparentsprev.test(name)) {
                    matched.reverse()
                }
            }
            return this.pushStack(matched)
        }
    });
    var rnothtmlwhite = (/[^\x20\t\r\n\f]+/g);

    function createOptions(options) {
        var object = {};
        jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
            object[flag] = !0
        });
        return object
    }

    jQuery.Callbacks = function (options) {
        options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
        var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function () {
            locked = locked || options.once;
            fired = firing = !0;
            for (; queue.length; firingIndex = -1) {
                memory = queue.shift();
                while (++firingIndex < list.length) {
                    if (list[firingIndex].apply(memory[0], memory[1]) === !1 && options.stopOnFalse) {
                        firingIndex = list.length;
                        memory = !1
                    }
                }
            }
            if (!options.memory) {
                memory = !1
            }
            firing = !1;
            if (locked) {
                if (memory) {
                    list = []
                } else {
                    list = ""
                }
            }
        }, self = {
            add: function () {
                if (list) {
                    if (memory && !firing) {
                        firingIndex = list.length - 1;
                        queue.push(memory)
                    }
                    (function add(args) {
                        jQuery.each(args, function (_, arg) {
                            if (isFunction(arg)) {
                                if (!options.unique || !self.has(arg)) {
                                    list.push(arg)
                                }
                            } else if (arg && arg.length && toType(arg) !== "string") {
                                add(arg)
                            }
                        })
                    })(arguments);
                    if (memory && !firing) {
                        fire()
                    }
                }
                return this
            }, remove: function () {
                jQuery.each(arguments, function (_, arg) {
                    var index;
                    while ((index = jQuery.inArray(arg, list, index)) > -1) {
                        list.splice(index, 1);
                        if (index <= firingIndex) {
                            firingIndex--
                        }
                    }
                });
                return this
            }, has: function (fn) {
                return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0
            }, empty: function () {
                if (list) {
                    list = []
                }
                return this
            }, disable: function () {
                locked = queue = [];
                list = memory = "";
                return this
            }, disabled: function () {
                return !list
            }, lock: function () {
                locked = queue = [];
                if (!memory && !firing) {
                    list = memory = ""
                }
                return this
            }, locked: function () {
                return !!locked
            }, fireWith: function (context, args) {
                if (!locked) {
                    args = args || [];
                    args = [context, args.slice ? args.slice() : args];
                    queue.push(args);
                    if (!firing) {
                        fire()
                    }
                }
                return this
            }, fire: function () {
                self.fireWith(this, arguments);
                return this
            }, fired: function () {
                return !!fired
            }
        };
        return self
    };

    function Identity(v) {
        return v
    }

    function Thrower(ex) {
        throw ex
    }

    function adoptValue(value, resolve, reject, noValue) {
        var method;
        try {
            if (value && isFunction((method = value.promise))) {
                method.call(value).done(resolve).fail(reject)
            } else if (value && isFunction((method = value.then))) {
                method.call(value, resolve, reject)
            } else {
                resolve.apply(undefined, [value].slice(noValue))
            }
        } catch (value) {
            reject.apply(undefined, [value])
        }
    }

    jQuery.extend({
        Deferred: function (func) {
            var tuples = [["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
                state = "pending", promise = {
                    state: function () {
                        return state
                    }, always: function () {
                        deferred.done(arguments).fail(arguments);
                        return this
                    }, "catch": function (fn) {
                        return promise.then(null, fn)
                    }, pipe: function () {
                        var fns = arguments;
                        return jQuery.Deferred(function (newDefer) {
                            jQuery.each(tuples, function (_i, tuple) {
                                var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                                deferred[tuple[1]](function () {
                                    var returned = fn && fn.apply(this, arguments);
                                    if (returned && isFunction(returned.promise)) {
                                        returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject)
                                    } else {
                                        newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments)
                                    }
                                })
                            });
                            fns = null
                        }).promise()
                    }, then: function (onFulfilled, onRejected, onProgress) {
                        var maxDepth = 0;

                        function resolve(depth, deferred, handler, special) {
                            return function () {
                                var that = this, args = arguments, mightThrow = function () {
                                    var returned, then;
                                    if (depth < maxDepth) {
                                        return
                                    }
                                    returned = handler.apply(that, args);
                                    if (returned === deferred.promise()) {
                                        throw new TypeError("Thenable self-resolution")
                                    }
                                    then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                                    if (isFunction(then)) {
                                        if (special) {
                                            then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special))
                                        } else {
                                            maxDepth++;
                                            then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith))
                                        }
                                    } else {
                                        if (handler !== Identity) {
                                            that = undefined;
                                            args = [returned]
                                        }
                                        (special || deferred.resolveWith)(that, args)
                                    }
                                }, process = special ? mightThrow : function () {
                                    try {
                                        mightThrow()
                                    } catch (e) {
                                        if (jQuery.Deferred.exceptionHook) {
                                            jQuery.Deferred.exceptionHook(e, process.stackTrace)
                                        }
                                        if (depth + 1 >= maxDepth) {
                                            if (handler !== Thrower) {
                                                that = undefined;
                                                args = [e]
                                            }
                                            deferred.rejectWith(that, args)
                                        }
                                    }
                                };
                                if (depth) {
                                    process()
                                } else {
                                    if (jQuery.Deferred.getStackHook) {
                                        process.stackTrace = jQuery.Deferred.getStackHook()
                                    }
                                    window.setTimeout(process)
                                }
                            }
                        }

                        return jQuery.Deferred(function (newDefer) {
                            tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                            tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));
                            tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower))
                        }).promise()
                    }, promise: function (obj) {
                        return obj != null ? jQuery.extend(obj, promise) : promise
                    }
                }, deferred = {};
            jQuery.each(tuples, function (i, tuple) {
                var list = tuple[2], stateString = tuple[5];
                promise[tuple[1]] = list.add;
                if (stateString) {
                    list.add(function () {
                        state = stateString
                    }, tuples[3 - i][2].disable, tuples[3 - i][3].disable, tuples[0][2].lock, tuples[0][3].lock)
                }
                list.add(tuple[3].fire);
                deferred[tuple[0]] = function () {
                    deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
                    return this
                };
                deferred[tuple[0] + "With"] = list.fireWith
            });
            promise.promise(deferred);
            if (func) {
                func.call(deferred, deferred)
            }
            return deferred
        }, when: function (singleValue) {
            var
                remaining = arguments.length, i = remaining, resolveContexts = Array(i),
                resolveValues = slice.call(arguments), master = jQuery.Deferred(), updateFunc = function (i) {
                    return function (value) {
                        resolveContexts[i] = this;
                        resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
                        if (!(--remaining)) {
                            master.resolveWith(resolveContexts, resolveValues)
                        }
                    }
                };
            if (remaining <= 1) {
                adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining);
                if (master.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
                    return master.then()
                }
            }
            while (i--) {
                adoptValue(resolveValues[i], updateFunc(i), master.reject)
            }
            return master.promise()
        }
    });
    var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    jQuery.Deferred.exceptionHook = function (error, stack) {
        if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
            window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack)
        }
    };
    jQuery.readyException = function (error) {
        window.setTimeout(function () {
            throw error
        })
    };
    var readyList = jQuery.Deferred();
    jQuery.fn.ready = function (fn) {
        readyList.then(fn).catch(function (error) {
            jQuery.readyException(error)
        });
        return this
    };
    jQuery.extend({
        isReady: !1, readyWait: 1, ready: function (wait) {
            if (wait === !0 ? --jQuery.readyWait : jQuery.isReady) {
                return
            }
            jQuery.isReady = !0;
            if (wait !== !0 && --jQuery.readyWait > 0) {
                return
            }
            readyList.resolveWith(document, [jQuery])
        }
    });
    jQuery.ready.then = readyList.then;

    function completed() {
        document.removeEventListener("DOMContentLoaded", completed);
        window.removeEventListener("load", completed);
        jQuery.ready()
    }

    if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
        window.setTimeout(jQuery.ready)
    } else {
        document.addEventListener("DOMContentLoaded", completed);
        window.addEventListener("load", completed)
    }
    var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0, len = elems.length, bulk = key == null;
        if (toType(key) === "object") {
            chainable = !0;
            for (i in key) {
                access(elems, fn, i, key[i], !0, emptyGet, raw)
            }
        } else if (value !== undefined) {
            chainable = !0;
            if (!isFunction(value)) {
                raw = !0
            }
            if (bulk) {
                if (raw) {
                    fn.call(elems, value);
                    fn = null
                } else {
                    bulk = fn;
                    fn = function (elem, _key, value) {
                        return bulk.call(jQuery(elem), value)
                    }
                }
            }
            if (fn) {
                for (; i < len; i++) {
                    fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)))
                }
            }
        }
        if (chainable) {
            return elems
        }
        if (bulk) {
            return fn.call(elems)
        }
        return len ? fn(elems[0], key) : emptyGet
    };
    var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;

    function fcamelCase(_all, letter) {
        return letter.toUpperCase()
    }

    function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase)
    }

    var acceptData = function (owner) {
        return owner.nodeType === 1 || owner.nodeType === 9 || !(+owner.nodeType)
    };

    function Data() {
        this.expando = jQuery.expando + Data.uid++
    }

    Data.uid = 1;
    Data.prototype = {
        cache: function (owner) {
            var value = owner[this.expando];
            if (!value) {
                value = {};
                if (acceptData(owner)) {
                    if (owner.nodeType) {
                        owner[this.expando] = value
                    } else {
                        Object.defineProperty(owner, this.expando, {value: value, configurable: !0})
                    }
                }
            }
            return value
        }, set: function (owner, data, value) {
            var prop, cache = this.cache(owner);
            if (typeof data === "string") {
                cache[camelCase(data)] = value
            } else {
                for (prop in data) {
                    cache[camelCase(prop)] = data[prop]
                }
            }
            return cache
        }, get: function (owner, key) {
            return key === undefined ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)]
        }, access: function (owner, key, value) {
            if (key === undefined || ((key && typeof key === "string") && value === undefined)) {
                return this.get(owner, key)
            }
            this.set(owner, key, value);
            return value !== undefined ? value : key
        }, remove: function (owner, key) {
            var i, cache = owner[this.expando];
            if (cache === undefined) {
                return
            }
            if (key !== undefined) {
                if (Array.isArray(key)) {
                    key = key.map(camelCase)
                } else {
                    key = camelCase(key);
                    key = key in cache ? [key] : (key.match(rnothtmlwhite) || [])
                }
                i = key.length;
                while (i--) {
                    delete cache[key[i]]
                }
            }
            if (key === undefined || jQuery.isEmptyObject(cache)) {
                if (owner.nodeType) {
                    owner[this.expando] = undefined
                } else {
                    delete owner[this.expando]
                }
            }
        }, hasData: function (owner) {
            var cache = owner[this.expando];
            return cache !== undefined && !jQuery.isEmptyObject(cache)
        }
    };
    var dataPriv = new Data();
    var dataUser = new Data();
    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;

    function getData(data) {
        if (data === "true") {
            return !0
        }
        if (data === "false") {
            return !1
        }
        if (data === "null") {
            return null
        }
        if (data === +data + "") {
            return +data
        }
        if (rbrace.test(data)) {
            return JSON.parse(data)
        }
        return data
    }

    function dataAttr(elem, key, data) {
        var name;
        if (data === undefined && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
                try {
                    data = getData(data)
                } catch (e) {
                }
                dataUser.set(elem, key, data)
            } else {
                data = undefined
            }
        }
        return data
    }

    jQuery.extend({
        hasData: function (elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem)
        }, data: function (elem, name, data) {
            return dataUser.access(elem, name, data)
        }, removeData: function (elem, name) {
            dataUser.remove(elem, name)
        }, _data: function (elem, name, data) {
            return dataPriv.access(elem, name, data)
        }, _removeData: function (elem, name) {
            dataPriv.remove(elem, name)
        }
    });
    jQuery.fn.extend({
        data: function (key, value) {
            var i, name, data, elem = this[0], attrs = elem && elem.attributes;
            if (key === undefined) {
                if (this.length) {
                    data = dataUser.get(elem);
                    if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                        i = attrs.length;
                        while (i--) {
                            if (attrs[i]) {
                                name = attrs[i].name;
                                if (name.indexOf("data-") === 0) {
                                    name = camelCase(name.slice(5));
                                    dataAttr(elem, name, data[name])
                                }
                            }
                        }
                        dataPriv.set(elem, "hasDataAttrs", !0)
                    }
                }
                return data
            }
            if (typeof key === "object") {
                return this.each(function () {
                    dataUser.set(this, key)
                })
            }
            return access(this, function (value) {
                var data;
                if (elem && value === undefined) {
                    data = dataUser.get(elem, key);
                    if (data !== undefined) {
                        return data
                    }
                    data = dataAttr(elem, key);
                    if (data !== undefined) {
                        return data
                    }
                    return
                }
                this.each(function () {
                    dataUser.set(this, key, value)
                })
            }, null, value, arguments.length > 1, null, !0)
        }, removeData: function (key) {
            return this.each(function () {
                dataUser.remove(this, key)
            })
        }
    });
    jQuery.extend({
        queue: function (elem, type, data) {
            var queue;
            if (elem) {
                type = (type || "fx") + "queue";
                queue = dataPriv.get(elem, type);
                if (data) {
                    if (!queue || Array.isArray(data)) {
                        queue = dataPriv.access(elem, type, jQuery.makeArray(data))
                    } else {
                        queue.push(data)
                    }
                }
                return queue || []
            }
        }, dequeue: function (elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(),
                hooks = jQuery._queueHooks(elem, type), next = function () {
                    jQuery.dequeue(elem, type)
                };
            if (fn === "inprogress") {
                fn = queue.shift();
                startLength--
            }
            if (fn) {
                if (type === "fx") {
                    queue.unshift("inprogress")
                }
                delete hooks.stop;
                fn.call(elem, next, hooks)
            }
            if (!startLength && hooks) {
                hooks.empty.fire()
            }
        }, _queueHooks: function (elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function () {
                    dataPriv.remove(elem, [type + "queue", key])
                })
            })
        }
    });
    jQuery.fn.extend({
        queue: function (type, data) {
            var setter = 2;
            if (typeof type !== "string") {
                data = type;
                type = "fx";
                setter--
            }
            if (arguments.length < setter) {
                return jQuery.queue(this[0], type)
            }
            return data === undefined ? this : this.each(function () {
                var queue = jQuery.queue(this, type, data);
                jQuery._queueHooks(this, type);
                if (type === "fx" && queue[0] !== "inprogress") {
                    jQuery.dequeue(this, type)
                }
            })
        }, dequeue: function (type) {
            return this.each(function () {
                jQuery.dequeue(this, type)
            })
        }, clearQueue: function (type) {
            return this.queue(type || "fx", [])
        }, promise: function (type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function () {
                if (!(--count)) {
                    defer.resolveWith(elements, [elements])
                }
            };
            if (typeof type !== "string") {
                obj = type;
                type = undefined
            }
            type = type || "fx";
            while (i--) {
                tmp = dataPriv.get(elements[i], type + "queueHooks");
                if (tmp && tmp.empty) {
                    count++;
                    tmp.empty.add(resolve)
                }
            }
            resolve();
            return defer.promise(obj)
        }
    });
    var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
    var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
    var cssExpand = ["Top", "Right", "Bottom", "Left"];
    var documentElement = document.documentElement;
    var isAttached = function (elem) {
        return jQuery.contains(elem.ownerDocument, elem)
    }, composed = {composed: !0};
    if (documentElement.getRootNode) {
        isAttached = function (elem) {
            return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument
        }
    }
    var isHiddenWithinTree = function (elem, el) {
        elem = el || elem;
        return elem.style.display === "none" || elem.style.display === "" && isAttached(elem) && jQuery.css(elem, "display") === "none"
    };

    function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale, maxIterations = 20, currentValue = tween ? function () {
                return tween.cur()
            } : function () {
                return jQuery.css(elem, prop, "")
            }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
            initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
            initial = initial / 2;
            unit = unit || initialInUnit[3];
            initialInUnit = +initial || 1;
            while (maxIterations--) {
                jQuery.style(elem, prop, initialInUnit + unit);
                if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
                    maxIterations = 0
                }
                initialInUnit = initialInUnit / scale
            }
            initialInUnit = initialInUnit * 2;
            jQuery.style(elem, prop, initialInUnit + unit);
            valueParts = valueParts || []
        }
        if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
                tween.unit = unit;
                tween.start = initialInUnit;
                tween.end = adjusted
            }
        }
        return adjusted
    }

    var defaultDisplayMap = {};

    function getDefaultDisplay(elem) {
        var temp, doc = elem.ownerDocument, nodeName = elem.nodeName, display = defaultDisplayMap[nodeName];
        if (display) {
            return display
        }
        temp = doc.body.appendChild(doc.createElement(nodeName));
        display = jQuery.css(temp, "display");
        temp.parentNode.removeChild(temp);
        if (display === "none") {
            display = "block"
        }
        defaultDisplayMap[nodeName] = display;
        return display
    }

    function showHide(elements, show) {
        var display, elem, values = [], index = 0, length = elements.length;
        for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue
            }
            display = elem.style.display;
            if (show) {
                if (display === "none") {
                    values[index] = dataPriv.get(elem, "display") || null;
                    if (!values[index]) {
                        elem.style.display = ""
                    }
                }
                if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                    values[index] = getDefaultDisplay(elem)
                }
            } else {
                if (display !== "none") {
                    values[index] = "none";
                    dataPriv.set(elem, "display", display)
                }
            }
        }
        for (index = 0; index < length; index++) {
            if (values[index] != null) {
                elements[index].style.display = values[index]
            }
        }
        return elements
    }

    jQuery.fn.extend({
        show: function () {
            return showHide(this, !0)
        }, hide: function () {
            return showHide(this)
        }, toggle: function (state) {
            if (typeof state === "boolean") {
                return state ? this.show() : this.hide()
            }
            return this.each(function () {
                if (isHiddenWithinTree(this)) {
                    jQuery(this).show()
                } else {
                    jQuery(this).hide()
                }
            })
        }
    });
    var rcheckableType = (/^(?:checkbox|radio)$/i);
    var rtagName = (/<([a-z][^\/\0>\x20\t\r\n\f]*)/i);
    var rscriptType = (/^$|^module$|\/(?:java|ecma)script/i);
    (function () {
        var fragment = document.createDocumentFragment(), div = fragment.appendChild(document.createElement("div")),
            input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        support.checkClone = div.cloneNode(!0).cloneNode(!0).lastChild.checked;
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(!0).lastChild.defaultValue;
        div.innerHTML = "<option></option>";
        support.option = !!div.lastChild
    })();
    var wrapMap = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    if (!support.option) {
        wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"]
    }

    function getAll(context, tag) {
        var ret;
        if (typeof context.getElementsByTagName !== "undefined") {
            ret = context.getElementsByTagName(tag || "*")
        } else if (typeof context.querySelectorAll !== "undefined") {
            ret = context.querySelectorAll(tag || "*")
        } else {
            ret = []
        }
        if (tag === undefined || tag && nodeName(context, tag)) {
            return jQuery.merge([context], ret)
        }
        return ret
    }

    function setGlobalEval(elems, refElements) {
        var i = 0, l = elems.length;
        for (; i < l; i++) {
            dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"))
        }
    }

    var rhtml = /<|&#?\w+;/;

    function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0,
            l = elems.length;
        for (; i < l; i++) {
            elem = elems[i];
            if (elem || elem === 0) {
                if (toType(elem) === "object") {
                    jQuery.merge(nodes, elem.nodeType ? [elem] : elem)
                } else if (!rhtml.test(elem)) {
                    nodes.push(context.createTextNode(elem))
                } else {
                    tmp = tmp || fragment.appendChild(context.createElement("div"));
                    tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                    wrap = wrapMap[tag] || wrapMap._default;
                    tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                    j = wrap[0];
                    while (j--) {
                        tmp = tmp.lastChild
                    }
                    jQuery.merge(nodes, tmp.childNodes);
                    tmp = fragment.firstChild;
                    tmp.textContent = ""
                }
            }
        }
        fragment.textContent = "";
        i = 0;
        while ((elem = nodes[i++])) {
            if (selection && jQuery.inArray(elem, selection) > -1) {
                if (ignored) {
                    ignored.push(elem)
                }
                continue
            }
            attached = isAttached(elem);
            tmp = getAll(fragment.appendChild(elem), "script");
            if (attached) {
                setGlobalEval(tmp)
            }
            if (scripts) {
                j = 0;
                while ((elem = tmp[j++])) {
                    if (rscriptType.test(elem.type || "")) {
                        scripts.push(elem)
                    }
                }
            }
        }
        return fragment
    }

    var rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

    function returnTrue() {
        return !0
    }

    function returnFalse() {
        return !1
    }

    function expectSync(elem, type) {
        return (elem === safeActiveElement()) === (type === "focus")
    }

    function safeActiveElement() {
        try {
            return document.activeElement
        } catch (err) {
        }
    }

    function on(elem, types, selector, data, fn, one) {
        var origFn, type;
        if (typeof types === "object") {
            if (typeof selector !== "string") {
                data = data || selector;
                selector = undefined
            }
            for (type in types) {
                on(elem, type, selector, data, types[type], one)
            }
            return elem
        }
        if (data == null && fn == null) {
            fn = selector;
            data = selector = undefined
        } else if (fn == null) {
            if (typeof selector === "string") {
                fn = data;
                data = undefined
            } else {
                fn = data;
                data = selector;
                selector = undefined
            }
        }
        if (fn === !1) {
            fn = returnFalse
        } else if (!fn) {
            return elem
        }
        if (one === 1) {
            origFn = fn;
            fn = function (event) {
                jQuery().off(event);
                return origFn.apply(this, arguments)
            };
            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++)
        }
        return elem.each(function () {
            jQuery.event.add(this, types, fn, data, selector)
        })
    }

    jQuery.event = {
        global: {}, add: function (elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType,
                elemData = dataPriv.get(elem);
            if (!acceptData(elem)) {
                return
            }
            if (handler.handler) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector
            }
            if (selector) {
                jQuery.find.matchesSelector(documentElement, selector)
            }
            if (!handler.guid) {
                handler.guid = jQuery.guid++
            }
            if (!(events = elemData.events)) {
                events = elemData.events = Object.create(null)
            }
            if (!(eventHandle = elemData.handle)) {
                eventHandle = elemData.handle = function (e) {
                    return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined
                }
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                if (!type) {
                    continue
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                special = jQuery.event.special[type] || {};
                handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join(".")
                }, handleObjIn);
                if (!(handlers = events[type])) {
                    handlers = events[type] = [];
                    handlers.delegateCount = 0;
                    if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === !1) {
                        if (elem.addEventListener) {
                            elem.addEventListener(type, eventHandle)
                        }
                    }
                }
                if (special.add) {
                    special.add.call(elem, handleObj);
                    if (!handleObj.handler.guid) {
                        handleObj.handler.guid = handler.guid
                    }
                }
                if (selector) {
                    handlers.splice(handlers.delegateCount++, 0, handleObj)
                } else {
                    handlers.push(handleObj)
                }
                jQuery.event.global[type] = !0
            }
        }, remove: function (elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType,
                elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) {
                return
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                if (!type) {
                    for (type in events) {
                        jQuery.event.remove(elem, type + types[t], handler, selector, !0)
                    }
                    continue
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                handlers = events[type] || [];
                tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                origCount = j = handlers.length;
                while (j--) {
                    handleObj = handlers[j];
                    if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                        handlers.splice(j, 1);
                        if (handleObj.selector) {
                            handlers.delegateCount--
                        }
                        if (special.remove) {
                            special.remove.call(elem, handleObj)
                        }
                    }
                }
                if (origCount && !handlers.length) {
                    if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === !1) {
                        jQuery.removeEvent(elem, type, elemData.handle)
                    }
                    delete events[type]
                }
            }
            if (jQuery.isEmptyObject(events)) {
                dataPriv.remove(elem, "handle events")
            }
        }, dispatch: function (nativeEvent) {
            var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length),
                event = jQuery.event.fix(nativeEvent),
                handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [],
                special = jQuery.event.special[event.type] || {};
            args[0] = event;
            for (i = 1; i < arguments.length; i++) {
                args[i] = arguments[i]
            }
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === !1) {
                return
            }
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                event.currentTarget = matched.elem;
                j = 0;
                while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                    if (!event.rnamespace || handleObj.namespace === !1 || event.rnamespace.test(handleObj.namespace)) {
                        event.handleObj = handleObj;
                        event.data = handleObj.data;
                        ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                        if (ret !== undefined) {
                            if ((event.result = ret) === !1) {
                                event.preventDefault();
                                event.stopPropagation()
                            }
                        }
                    }
                }
            }
            if (special.postDispatch) {
                special.postDispatch.call(this, event)
            }
            return event.result
        }, handlers: function (event, handlers) {
            var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [],
                delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && cur.nodeType && !(event.type === "click" && event.button >= 1)) {
                for (; cur !== this; cur = cur.parentNode || this) {
                    if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === !0)) {
                        matchedHandlers = [];
                        matchedSelectors = {};
                        for (i = 0; i < delegateCount; i++) {
                            handleObj = handlers[i];
                            sel = handleObj.selector + " ";
                            if (matchedSelectors[sel] === undefined) {
                                matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length
                            }
                            if (matchedSelectors[sel]) {
                                matchedHandlers.push(handleObj)
                            }
                        }
                        if (matchedHandlers.length) {
                            handlerQueue.push({elem: cur, handlers: matchedHandlers})
                        }
                    }
                }
            }
            cur = this;
            if (delegateCount < handlers.length) {
                handlerQueue.push({elem: cur, handlers: handlers.slice(delegateCount)})
            }
            return handlerQueue
        }, addProp: function (name, hook) {
            Object.defineProperty(jQuery.Event.prototype, name, {
                enumerable: !0,
                configurable: !0,
                get: isFunction(hook) ? function () {
                    if (this.originalEvent) {
                        return hook(this.originalEvent)
                    }
                } : function () {
                    if (this.originalEvent) {
                        return this.originalEvent[name]
                    }
                },
                set: function (value) {
                    Object.defineProperty(this, name, {enumerable: !0, configurable: !0, writable: !0, value: value})
                }
            })
        }, fix: function (originalEvent) {
            return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent)
        }, special: {
            load: {noBubble: !0}, click: {
                setup: function (data) {
                    var el = this || data;
                    if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                        leverageNative(el, "click", returnTrue)
                    }
                    return !1
                }, trigger: function (data) {
                    var el = this || data;
                    if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                        leverageNative(el, "click")
                    }
                    return !0
                }, _default: function (event) {
                    var target = event.target;
                    return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a")
                }
            }, beforeunload: {
                postDispatch: function (event) {
                    if (event.result !== undefined && event.originalEvent) {
                        event.originalEvent.returnValue = event.result
                    }
                }
            }
        }
    };

    function leverageNative(el, type, expectSync) {
        if (!expectSync) {
            if (dataPriv.get(el, type) === undefined) {
                jQuery.event.add(el, type, returnTrue)
            }
            return
        }
        dataPriv.set(el, type, !1);
        jQuery.event.add(el, type, {
            namespace: !1, handler: function (event) {
                var notAsync, result, saved = dataPriv.get(this, type);
                if ((event.isTrigger & 1) && this[type]) {
                    if (!saved.length) {
                        saved = slice.call(arguments);
                        dataPriv.set(this, type, saved);
                        notAsync = expectSync(this, type);
                        this[type]();
                        result = dataPriv.get(this, type);
                        if (saved !== result || notAsync) {
                            dataPriv.set(this, type, !1)
                        } else {
                            result = {}
                        }
                        if (saved !== result) {
                            event.stopImmediatePropagation();
                            event.preventDefault();
                            return result.value
                        }
                    } else if ((jQuery.event.special[type] || {}).delegateType) {
                        event.stopPropagation()
                    }
                } else if (saved.length) {
                    dataPriv.set(this, type, {value: jQuery.event.trigger(jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)});
                    event.stopImmediatePropagation()
                }
            }
        })
    }

    jQuery.removeEvent = function (elem, type, handle) {
        if (elem.removeEventListener) {
            elem.removeEventListener(type, handle)
        }
    };
    jQuery.Event = function (src, props) {
        if (!(this instanceof jQuery.Event)) {
            return new jQuery.Event(src, props)
        }
        if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === !1 ? returnTrue : returnFalse;
            this.target = (src.target && src.target.nodeType === 3) ? src.target.parentNode : src.target;
            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget
        } else {
            this.type = src
        }
        if (props) {
            jQuery.extend(this, props)
        }
        this.timeStamp = src && src.timeStamp || Date.now();
        this[jQuery.expando] = !0
    };
    jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e && !this.isSimulated) {
                e.preventDefault()
            }
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
                e.stopPropagation()
            }
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
                e.stopImmediatePropagation()
            }
            this.stopPropagation()
        }
    };
    jQuery.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (event) {
            var button = event.button;
            if (event.which == null && rkeyEvent.test(event.type)) {
                return event.charCode != null ? event.charCode : event.keyCode
            }
            if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
                if (button & 1) {
                    return 1
                }
                if (button & 2) {
                    return 3
                }
                if (button & 4) {
                    return 2
                }
                return 0
            }
            return event.which
        }
    }, jQuery.event.addProp);
    jQuery.each({focus: "focusin", blur: "focusout"}, function (type, delegateType) {
        jQuery.event.special[type] = {
            setup: function () {
                leverageNative(this, type, expectSync);
                return !1
            }, trigger: function () {
                leverageNative(this, type);
                return !0
            }, delegateType: delegateType
        }
    });
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix, bindType: fix, handle: function (event) {
                var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                if (!related || (related !== target && !jQuery.contains(target, related))) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply(this, arguments);
                    event.type = fix
                }
                return ret
            }
        }
    });
    jQuery.fn.extend({
        on: function (types, selector, data, fn) {
            return on(this, types, selector, data, fn)
        }, one: function (types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1)
        }, off: function (types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
                handleObj = types.handleObj;
                jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                return this
            }
            if (typeof types === "object") {
                for (type in types) {
                    this.off(type, selector, types[type])
                }
                return this
            }
            if (selector === !1 || typeof selector === "function") {
                fn = selector;
                selector = undefined
            }
            if (fn === !1) {
                fn = returnFalse
            }
            return this.each(function () {
                jQuery.event.remove(this, types, fn, selector)
            })
        }
    });
    var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function manipulationTarget(elem, content) {
        if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
            return jQuery(elem).children("tbody")[0] || elem
        }
        return elem
    }

    function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem
    }

    function restoreScript(elem) {
        if ((elem.type || "").slice(0, 5) === "true/") {
            elem.type = elem.type.slice(5)
        } else {
            elem.removeAttribute("type")
        }
        return elem
    }

    function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, udataOld, udataCur, events;
        if (dest.nodeType !== 1) {
            return
        }
        if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.get(src);
            events = pdataOld.events;
            if (events) {
                dataPriv.remove(dest, "handle events");
                for (type in events) {
                    for (i = 0, l = events[type].length; i < l; i++) {
                        jQuery.event.add(dest, type, events[type][i])
                    }
                }
            }
        }
        if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery.extend({}, udataOld);
            dataUser.set(dest, udataCur)
        }
    }

    function fixInput(src, dest) {
        var nodeName = dest.nodeName.toLowerCase();
        if (nodeName === "input" && rcheckableType.test(src.type)) {
            dest.checked = src.checked
        } else if (nodeName === "input" || nodeName === "textarea") {
            dest.defaultValue = src.defaultValue
        }
    }

    function domManip(collection, args, callback, ignored) {
        args = flat(args);
        var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1,
            value = args[0], valueIsFunction = isFunction(value);
        if (valueIsFunction || (l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value))) {
            return collection.each(function (index) {
                var self = collection.eq(index);
                if (valueIsFunction) {
                    args[0] = value.call(this, index, self.html())
                }
                domManip(self, args, callback, ignored)
            })
        }
        if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, !1, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) {
                fragment = first
            }
            if (first || ignored) {
                scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                hasScripts = scripts.length;
                for (; i < l; i++) {
                    node = fragment;
                    if (i !== iNoClone) {
                        node = jQuery.clone(node, !0, !0);
                        if (hasScripts) {
                            jQuery.merge(scripts, getAll(node, "script"))
                        }
                    }
                    callback.call(collection[i], node, i)
                }
                if (hasScripts) {
                    doc = scripts[scripts.length - 1].ownerDocument;
                    jQuery.map(scripts, restoreScript);
                    for (i = 0; i < hasScripts; i++) {
                        node = scripts[i];
                        if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                            if (node.src && (node.type || "").toLowerCase() !== "module") {
                                if (jQuery._evalUrl && !node.noModule) {
                                    jQuery._evalUrl(node.src, {nonce: node.nonce || node.getAttribute("nonce")}, doc)
                                }
                            } else {
                                DOMEval(node.textContent.replace(rcleanScript, ""), node, doc)
                            }
                        }
                    }
                }
            }
        }
        return collection
    }

    function remove(elem, selector, keepData) {
        var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
        for (; (node = nodes[i]) != null; i++) {
            if (!keepData && node.nodeType === 1) {
                jQuery.cleanData(getAll(node))
            }
            if (node.parentNode) {
                if (keepData && isAttached(node)) {
                    setGlobalEval(getAll(node, "script"))
                }
                node.parentNode.removeChild(node)
            }
        }
        return elem
    }

    jQuery.extend({
        htmlPrefilter: function (html) {
            return html
        }, clone: function (elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(!0), inPage = isAttached(elem);
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                destElements = getAll(clone);
                srcElements = getAll(elem);
                for (i = 0, l = srcElements.length; i < l; i++) {
                    fixInput(srcElements[i], destElements[i])
                }
            }
            if (dataAndEvents) {
                if (deepDataAndEvents) {
                    srcElements = srcElements || getAll(elem);
                    destElements = destElements || getAll(clone);
                    for (i = 0, l = srcElements.length; i < l; i++) {
                        cloneCopyEvent(srcElements[i], destElements[i])
                    }
                } else {
                    cloneCopyEvent(elem, clone)
                }
            }
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
                setGlobalEval(destElements, !inPage && getAll(elem, "script"))
            }
            return clone
        }, cleanData: function (elems) {
            var data, elem, type, special = jQuery.event.special, i = 0;
            for (; (elem = elems[i]) !== undefined; i++) {
                if (acceptData(elem)) {
                    if ((data = elem[dataPriv.expando])) {
                        if (data.events) {
                            for (type in data.events) {
                                if (special[type]) {
                                    jQuery.event.remove(elem, type)
                                } else {
                                    jQuery.removeEvent(elem, type, data.handle)
                                }
                            }
                        }
                        elem[dataPriv.expando] = undefined
                    }
                    if (elem[dataUser.expando]) {
                        elem[dataUser.expando] = undefined
                    }
                }
            }
        }
    });
    jQuery.fn.extend({
        detach: function (selector) {
            return remove(this, selector, !0)
        }, remove: function (selector) {
            return remove(this, selector)
        }, text: function (value) {
            return access(this, function (value) {
                return value === undefined ? jQuery.text(this) : this.empty().each(function () {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        this.textContent = value
                    }
                })
            }, null, value, arguments.length)
        }, append: function () {
            return domManip(this, arguments, function (elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem)
                }
            })
        }, prepend: function () {
            return domManip(this, arguments, function (elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild)
                }
            })
        }, before: function () {
            return domManip(this, arguments, function (elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this)
                }
            })
        }, after: function () {
            return domManip(this, arguments, function (elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this.nextSibling)
                }
            })
        }, empty: function () {
            var elem, i = 0;
            for (; (elem = this[i]) != null; i++) {
                if (elem.nodeType === 1) {
                    jQuery.cleanData(getAll(elem, !1));
                    elem.textContent = ""
                }
            }
            return this
        }, clone: function (dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? !1 : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function () {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents)
            })
        }, html: function (value) {
            return access(this, function (value) {
                var elem = this[0] || {}, i = 0, l = this.length;
                if (value === undefined && elem.nodeType === 1) {
                    return elem.innerHTML
                }
                if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
                    value = jQuery.htmlPrefilter(value);
                    try {
                        for (; i < l; i++) {
                            elem = this[i] || {};
                            if (elem.nodeType === 1) {
                                jQuery.cleanData(getAll(elem, !1));
                                elem.innerHTML = value
                            }
                        }
                        elem = 0
                    } catch (e) {
                    }
                }
                if (elem) {
                    this.empty().append(value)
                }
            }, null, value, arguments.length)
        }, replaceWith: function () {
            var ignored = [];
            return domManip(this, arguments, function (elem) {
                var parent = this.parentNode;
                if (jQuery.inArray(this, ignored) < 0) {
                    jQuery.cleanData(getAll(this));
                    if (parent) {
                        parent.replaceChild(elem, this)
                    }
                }
            }, ignored)
        }
    });
    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (name, original) {
        jQuery.fn[name] = function (selector) {
            var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
            for (; i <= last; i++) {
                elems = i === last ? this : this.clone(!0);
                jQuery(insert[i])[original](elems);
                push.apply(ret, elems.get())
            }
            return this.pushStack(ret)
        }
    });
    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
    var getStyles = function (elem) {
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = window
        }
        return view.getComputedStyle(elem)
    };
    var swap = function (elem, options, callback) {
        var ret, name, old = {};
        for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name]
        }
        ret = callback.call(elem);
        for (name in options) {
            elem.style[name] = old[name]
        }
        return ret
    };
    var rboxStyle = new RegExp(cssExpand.join("|"), "i");
    (function () {
        function computeStyleTests() {
            if (!div) {
                return
            }
            container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
            div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
            documentElement.appendChild(container).appendChild(div);
            var divStyle = window.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";
            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
            div.style.position = "absolute";
            scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
            documentElement.removeChild(container);
            div = null
        }

        function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure))
        }

        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal,
            reliableMarginLeftVal, container = document.createElement("div"), div = document.createElement("div");
        if (!div.style) {
            return
        }
        div.style.backgroundClip = "content-box";
        div.cloneNode(!0).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        jQuery.extend(support, {
            boxSizingReliable: function () {
                computeStyleTests();
                return boxSizingReliableVal
            }, pixelBoxStyles: function () {
                computeStyleTests();
                return pixelBoxStylesVal
            }, pixelPosition: function () {
                computeStyleTests();
                return pixelPositionVal
            }, reliableMarginLeft: function () {
                computeStyleTests();
                return reliableMarginLeftVal
            }, scrollboxSize: function () {
                computeStyleTests();
                return scrollboxSizeVal
            }, reliableTrDimensions: function () {
                var table, tr, trChild, trStyle;
                if (reliableTrDimensionsVal == null) {
                    table = document.createElement("table");
                    tr = document.createElement("tr");
                    trChild = document.createElement("div");
                    table.style.cssText = "position:absolute;left:-11111px";
                    tr.style.height = "1px";
                    trChild.style.height = "9px";
                    documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                    trStyle = window.getComputedStyle(tr);
                    reliableTrDimensionsVal = parseInt(trStyle.height) > 3;
                    documentElement.removeChild(table)
                }
                return reliableTrDimensionsVal
            }
        })
    })();

    function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, style = elem.style;
        computed = computed || getStyles(elem);
        if (computed) {
            ret = computed.getPropertyValue(name) || computed[name];
            if (ret === "" && !isAttached(elem)) {
                ret = jQuery.style(elem, name)
            }
            if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
                width = style.width;
                minWidth = style.minWidth;
                maxWidth = style.maxWidth;
                style.minWidth = style.maxWidth = style.width = ret;
                ret = computed.width;
                style.width = width;
                style.minWidth = minWidth;
                style.maxWidth = maxWidth
            }
        }
        return ret !== undefined ? ret + "" : ret
    }

    function addGetHookIf(conditionFn, hookFn) {
        return {
            get: function () {
                if (conditionFn()) {
                    delete this.get;
                    return
                }
                return (this.get = hookFn).apply(this, arguments)
            }
        }
    }

    var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document.createElement("div").style, vendorProps = {};

    function vendorPropName(name) {
        var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
        while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in emptyStyle) {
                return name
            }
        }
    }

    function finalPropName(name) {
        var final = jQuery.cssProps[name] || vendorProps[name];
        if (final) {
            return final
        }
        if (name in emptyStyle) {
            return name
        }
        return vendorProps[name] = vendorPropName(name) || name
    }

    var rdisplayswap = /^(none|table(?!-c[ea]).+)/, rcustomProp = /^--/,
        cssShow = {position: "absolute", visibility: "hidden", display: "block"},
        cssNormalTransform = {letterSpacing: "0", fontWeight: "400"};

    function setPositiveNumber(_elem, value, subtract) {
        var matches = rcssNum.exec(value);
        return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value
    }

    function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
        var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0;
        if (box === (isBorderBox ? "border" : "content")) {
            return 0
        }
        for (; i < 4; i += 2) {
            if (box === "margin") {
                delta += jQuery.css(elem, box + cssExpand[i], !0, styles)
            }
            if (!isBorderBox) {
                delta += jQuery.css(elem, "padding" + cssExpand[i], !0, styles);
                if (box !== "padding") {
                    delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles)
                } else {
                    extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles)
                }
            } else {
                if (box === "content") {
                    delta -= jQuery.css(elem, "padding" + cssExpand[i], !0, styles)
                }
                if (box !== "margin") {
                    delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles)
                }
            }
        }
        if (!isBorderBox && computedVal >= 0) {
            delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5)) || 0
        }
        return delta
    }

    function getWidthOrHeight(elem, dimension, extra) {
        var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra,
            isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", !1, styles) === "border-box",
            valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles),
            offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
        if (rnumnonpx.test(val)) {
            if (!extra) {
                return val
            }
            val = "auto"
        }
        if ((!support.boxSizingReliable() && isBorderBox || !support.reliableTrDimensions() && nodeName(elem, "tr") || val === "auto" || !parseFloat(val) && jQuery.css(elem, "display", !1, styles) === "inline") && elem.getClientRects().length) {
            isBorderBox = jQuery.css(elem, "boxSizing", !1, styles) === "border-box";
            valueIsBorderBox = offsetProp in elem;
            if (valueIsBorderBox) {
                val = elem[offsetProp]
            }
        }
        val = parseFloat(val) || 0;
        return (val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, val)) + "px"
    }

    jQuery.extend({
        cssHooks: {
            opacity: {
                get: function (elem, computed) {
                    if (computed) {
                        var ret = curCSS(elem, "opacity");
                        return ret === "" ? "1" : ret
                    }
                }
            }
        },
        cssNumber: {
            "animationIterationCount": !0,
            "columnCount": !0,
            "fillOpacity": !0,
            "flexGrow": !0,
            "flexShrink": !0,
            "fontWeight": !0,
            "gridArea": !0,
            "gridColumn": !0,
            "gridColumnEnd": !0,
            "gridColumnStart": !0,
            "gridRow": !0,
            "gridRowEnd": !0,
            "gridRowStart": !0,
            "lineHeight": !0,
            "opacity": !0,
            "order": !0,
            "orphans": !0,
            "widows": !0,
            "zIndex": !0,
            "zoom": !0
        },
        cssProps: {},
        style: function (elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                return
            }
            var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
            if (!isCustomProp) {
                name = finalPropName(origName)
            }
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (value !== undefined) {
                type = typeof value;
                if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                    value = adjustCSS(elem, name, ret);
                    type = "number"
                }
                if (value == null || value !== value) {
                    return
                }
                if (type === "number" && !isCustomProp) {
                    value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px")
                }
                if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                    style[name] = "inherit"
                }
                if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                    if (isCustomProp) {
                        style.setProperty(name, value)
                    } else {
                        style[name] = value
                    }
                }
            } else {
                if (hooks && "get" in hooks && (ret = hooks.get(elem, !1, extra)) !== undefined) {
                    return ret
                }
                return style[name]
            }
        },
        css: function (elem, name, extra, styles) {
            var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
            if (!isCustomProp) {
                name = finalPropName(origName)
            }
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (hooks && "get" in hooks) {
                val = hooks.get(elem, !0, extra)
            }
            if (val === undefined) {
                val = curCSS(elem, name, styles)
            }
            if (val === "normal" && name in cssNormalTransform) {
                val = cssNormalTransform[name]
            }
            if (extra === "" || extra) {
                num = parseFloat(val);
                return extra === !0 || isFinite(num) ? num || 0 : val
            }
            return val
        }
    });
    jQuery.each(["height", "width"], function (_i, dimension) {
        jQuery.cssHooks[dimension] = {
            get: function (elem, computed, extra) {
                if (computed) {
                    return rdisplayswap.test(jQuery.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
                        return getWidthOrHeight(elem, dimension, extra)
                    }) : getWidthOrHeight(elem, dimension, extra)
                }
            }, set: function (elem, value, extra) {
                var matches, styles = getStyles(elem),
                    scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute",
                    boxSizingNeeded = scrollboxSizeBuggy || extra,
                    isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", !1, styles) === "border-box",
                    subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
                if (isBorderBox && scrollboxSizeBuggy) {
                    subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", !1, styles) - 0.5)
                }
                if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                    elem.style[dimension] = value;
                    value = jQuery.css(elem, dimension)
                }
                return setPositiveNumber(elem, value, subtract)
            }
        }
    });
    jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
        if (computed) {
            return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {marginLeft: 0}, function () {
                return elem.getBoundingClientRect().left
            })) + "px"
        }
    });
    jQuery.each({margin: "", padding: "", border: "Width"}, function (prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function (value) {
                var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
                for (; i < 4; i++) {
                    expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0]
                }
                return expanded
            }
        };
        if (prefix !== "margin") {
            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber
        }
    });
    jQuery.fn.extend({
        css: function (name, value) {
            return access(this, function (elem, name, value) {
                var styles, len, map = {}, i = 0;
                if (Array.isArray(name)) {
                    styles = getStyles(elem);
                    len = name.length;
                    for (; i < len; i++) {
                        map[name[i]] = jQuery.css(elem, name[i], !1, styles)
                    }
                    return map
                }
                return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name)
            }, name, value, arguments.length > 1)
        }
    });

    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing)
    }

    jQuery.Tween = Tween;
    Tween.prototype = {
        constructor: Tween, init: function (elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px")
        }, cur: function () {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this)
        }, run: function (percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration)
            } else {
                this.pos = eased = percent
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            }
            if (hooks && hooks.set) {
                hooks.set(this)
            } else {
                Tween.propHooks._default.set(this)
            }
            return this
        }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
        _default: {
            get: function (tween) {
                var result;
                if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                    return tween.elem[tween.prop]
                }
                result = jQuery.css(tween.elem, tween.prop, "");
                return !result || result === "auto" ? 0 : result
            }, set: function (tween) {
                if (jQuery.fx.step[tween.prop]) {
                    jQuery.fx.step[tween.prop](tween)
                } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
                    jQuery.style(tween.elem, tween.prop, tween.now + tween.unit)
                } else {
                    tween.elem[tween.prop] = tween.now
                }
            }
        }
    };
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function (tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
                tween.elem[tween.prop] = tween.now
            }
        }
    };
    jQuery.easing = {
        linear: function (p) {
            return p
        }, swing: function (p) {
            return 0.5 - Math.cos(p * Math.PI) / 2
        }, _default: "swing"
    };
    jQuery.fx = Tween.prototype.init;
    jQuery.fx.step = {};
    var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;

    function schedule() {
        if (inProgress) {
            if (document.hidden === !1 && window.requestAnimationFrame) {
                window.requestAnimationFrame(schedule)
            } else {
                window.setTimeout(schedule, jQuery.fx.interval)
            }
            jQuery.fx.tick()
        }
    }

    function createFxNow() {
        window.setTimeout(function () {
            fxNow = undefined
        });
        return (fxNow = Date.now())
    }

    function genFx(type, includeWidth) {
        var which, i = 0, attrs = {height: type};
        includeWidth = includeWidth ? 1 : 0;
        for (; i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type
        }
        if (includeWidth) {
            attrs.opacity = attrs.width = type
        }
        return attrs
    }

    function createTween(value, prop, animation) {
        var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0,
            length = collection.length;
        for (; index < length; index++) {
            if ((tween = collection[index].call(animation, prop, value))) {
                return tween
            }
        }
    }

    function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
            isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style,
            hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
        if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function () {
                    if (!hooks.unqueued) {
                        oldfire()
                    }
                }
            }
            hooks.unqueued++;
            anim.always(function () {
                anim.always(function () {
                    hooks.unqueued--;
                    if (!jQuery.queue(elem, "fx").length) {
                        hooks.empty.fire()
                    }
                })
            })
        }
        for (prop in props) {
            value = props[prop];
            if (rfxtypes.test(value)) {
                delete props[prop];
                toggle = toggle || value === "toggle";
                if (value === (hidden ? "hide" : "show")) {
                    if (value === "show" && dataShow && dataShow[prop] !== undefined) {
                        hidden = !0
                    } else {
                        continue
                    }
                }
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop)
            }
        }
        propTween = !jQuery.isEmptyObject(props);
        if (!propTween && jQuery.isEmptyObject(orig)) {
            return
        }
        if (isBox && elem.nodeType === 1) {
            opts.overflow = [style.overflow, style.overflowX, style.overflowY];
            restoreDisplay = dataShow && dataShow.display;
            if (restoreDisplay == null) {
                restoreDisplay = dataPriv.get(elem, "display")
            }
            display = jQuery.css(elem, "display");
            if (display === "none") {
                if (restoreDisplay) {
                    display = restoreDisplay
                } else {
                    showHide([elem], !0);
                    restoreDisplay = elem.style.display || restoreDisplay;
                    display = jQuery.css(elem, "display");
                    showHide([elem])
                }
            }
            if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
                if (jQuery.css(elem, "float") === "none") {
                    if (!propTween) {
                        anim.done(function () {
                            style.display = restoreDisplay
                        });
                        if (restoreDisplay == null) {
                            display = style.display;
                            restoreDisplay = display === "none" ? "" : display
                        }
                    }
                    style.display = "inline-block"
                }
            }
        }
        if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function () {
                style.overflow = opts.overflow[0];
                style.overflowX = opts.overflow[1];
                style.overflowY = opts.overflow[2]
            })
        }
        propTween = !1;
        for (prop in orig) {
            if (!propTween) {
                if (dataShow) {
                    if ("hidden" in dataShow) {
                        hidden = dataShow.hidden
                    }
                } else {
                    dataShow = dataPriv.access(elem, "fxshow", {display: restoreDisplay})
                }
                if (toggle) {
                    dataShow.hidden = !hidden
                }
                if (hidden) {
                    showHide([elem], !0)
                }
                anim.done(function () {
                    if (!hidden) {
                        showHide([elem])
                    }
                    dataPriv.remove(elem, "fxshow");
                    for (prop in orig) {
                        jQuery.style(elem, prop, orig[prop])
                    }
                })
            }
            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
                dataShow[prop] = propTween.start;
                if (hidden) {
                    propTween.end = propTween.start;
                    propTween.start = 0
                }
            }
        }
    }

    function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        for (index in props) {
            name = camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (Array.isArray(value)) {
                easing = value[1];
                value = props[index] = value[0]
            }
            if (index !== name) {
                props[name] = value;
                delete props[index]
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
                value = hooks.expand(value);
                delete props[name];
                for (index in value) {
                    if (!(index in props)) {
                        props[index] = value[index];
                        specialEasing[index] = easing
                    }
                }
            } else {
                specialEasing[name] = easing
            }
        }
    }

    function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = Animation.prefilters.length,
            deferred = jQuery.Deferred().always(function () {
                delete tick.elem
            }), tick = function () {
                if (stopped) {
                    return !1
                }
                var currentTime = fxNow || createFxNow(),
                    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
                    temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0,
                    length = animation.tweens.length;
                for (; index < length; index++) {
                    animation.tweens[index].run(percent)
                }
                deferred.notifyWith(elem, [animation, percent, remaining]);
                if (percent < 1 && length) {
                    return remaining
                }
                if (!length) {
                    deferred.notifyWith(elem, [animation, 1, 0])
                }
                deferred.resolveWith(elem, [animation]);
                return !1
            }, animation = deferred.promise({
                elem: elem,
                props: jQuery.extend({}, properties),
                opts: jQuery.extend(!0, {specialEasing: {}, easing: jQuery.easing._default}, options),
                originalProperties: properties,
                originalOptions: options,
                startTime: fxNow || createFxNow(),
                duration: options.duration,
                tweens: [],
                createTween: function (prop, end) {
                    var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                    animation.tweens.push(tween);
                    return tween
                },
                stop: function (gotoEnd) {
                    var index = 0, length = gotoEnd ? animation.tweens.length : 0;
                    if (stopped) {
                        return this
                    }
                    stopped = !0;
                    for (; index < length; index++) {
                        animation.tweens[index].run(1)
                    }
                    if (gotoEnd) {
                        deferred.notifyWith(elem, [animation, 1, 0]);
                        deferred.resolveWith(elem, [animation, gotoEnd])
                    } else {
                        deferred.rejectWith(elem, [animation, gotoEnd])
                    }
                    return this
                }
            }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (; index < length; index++) {
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
                if (isFunction(result.stop)) {
                    jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result)
                }
                return result
            }
        }
        jQuery.map(props, createTween, animation);
        if (isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation)
        }
        animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        jQuery.fx.timer(jQuery.extend(tick, {elem: elem, anim: animation, queue: animation.opts.queue}));
        return animation
    }

    jQuery.Animation = jQuery.extend(Animation, {
        tweeners: {
            "*": [function (prop, value) {
                var tween = this.createTween(prop, value);
                adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                return tween
            }]
        }, tweener: function (props, callback) {
            if (isFunction(props)) {
                callback = props;
                props = ["*"]
            } else {
                props = props.match(rnothtmlwhite)
            }
            var prop, index = 0, length = props.length;
            for (; index < length; index++) {
                prop = props[index];
                Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                Animation.tweeners[prop].unshift(callback)
            }
        }, prefilters: [defaultPrefilter], prefilter: function (callback, prepend) {
            if (prepend) {
                Animation.prefilters.unshift(callback)
            } else {
                Animation.prefilters.push(callback)
            }
        }
    });
    jQuery.speed = function (speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !isFunction(easing) && easing
        };
        if (jQuery.fx.off) {
            opt.duration = 0
        } else {
            if (typeof opt.duration !== "number") {
                if (opt.duration in jQuery.fx.speeds) {
                    opt.duration = jQuery.fx.speeds[opt.duration]
                } else {
                    opt.duration = jQuery.fx.speeds._default
                }
            }
        }
        if (opt.queue == null || opt.queue === !0) {
            opt.queue = "fx"
        }
        opt.old = opt.complete;
        opt.complete = function () {
            if (isFunction(opt.old)) {
                opt.old.call(this)
            }
            if (opt.queue) {
                jQuery.dequeue(this, opt.queue)
            }
        };
        return opt
    };
    jQuery.fn.extend({
        fadeTo: function (speed, to, easing, callback) {
            return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({opacity: to}, speed, easing, callback)
        }, animate: function (prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback),
                doAnimation = function () {
                    var anim = Animation(this, jQuery.extend({}, prop), optall);
                    if (empty || dataPriv.get(this, "finish")) {
                        anim.stop(!0)
                    }
                };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === !1 ? this.each(doAnimation) : this.queue(optall.queue, doAnimation)
        }, stop: function (type, clearQueue, gotoEnd) {
            var stopQueue = function (hooks) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop(gotoEnd)
            };
            if (typeof type !== "string") {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined
            }
            if (clearQueue) {
                this.queue(type || "fx", [])
            }
            return this.each(function () {
                var dequeue = !0, index = type != null && type + "queueHooks", timers = jQuery.timers,
                    data = dataPriv.get(this);
                if (index) {
                    if (data[index] && data[index].stop) {
                        stopQueue(data[index])
                    }
                } else {
                    for (index in data) {
                        if (data[index] && data[index].stop && rrun.test(index)) {
                            stopQueue(data[index])
                        }
                    }
                }
                for (index = timers.length; index--;) {
                    if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                        timers[index].anim.stop(gotoEnd);
                        dequeue = !1;
                        timers.splice(index, 1)
                    }
                }
                if (dequeue || !gotoEnd) {
                    jQuery.dequeue(this, type)
                }
            })
        }, finish: function (type) {
            if (type !== !1) {
                type = type || "fx"
            }
            return this.each(function () {
                var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"],
                    timers = jQuery.timers, length = queue ? queue.length : 0;
                data.finish = !0;
                jQuery.queue(this, type, []);
                if (hooks && hooks.stop) {
                    hooks.stop.call(this, !0)
                }
                for (index = timers.length; index--;) {
                    if (timers[index].elem === this && timers[index].queue === type) {
                        timers[index].anim.stop(!0);
                        timers.splice(index, 1)
                    }
                }
                for (index = 0; index < length; index++) {
                    if (queue[index] && queue[index].finish) {
                        queue[index].finish.call(this)
                    }
                }
                delete data.finish
            })
        }
    });
    jQuery.each(["toggle", "show", "hide"], function (_i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function (speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, !0), speed, easing, callback)
        }
    });
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (name, props) {
        jQuery.fn[name] = function (speed, easing, callback) {
            return this.animate(props, speed, easing, callback)
        }
    });
    jQuery.timers = [];
    jQuery.fx.tick = function () {
        var timer, i = 0, timers = jQuery.timers;
        fxNow = Date.now();
        for (; i < timers.length; i++) {
            timer = timers[i];
            if (!timer() && timers[i] === timer) {
                timers.splice(i--, 1)
            }
        }
        if (!timers.length) {
            jQuery.fx.stop()
        }
        fxNow = undefined
    };
    jQuery.fx.timer = function (timer) {
        jQuery.timers.push(timer);
        jQuery.fx.start()
    };
    jQuery.fx.interval = 13;
    jQuery.fx.start = function () {
        if (inProgress) {
            return
        }
        inProgress = !0;
        schedule()
    };
    jQuery.fx.stop = function () {
        inProgress = null
    };
    jQuery.fx.speeds = {slow: 600, fast: 200, _default: 400};
    jQuery.fn.delay = function (time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function (next, hooks) {
            var timeout = window.setTimeout(next, time);
            hooks.stop = function () {
                window.clearTimeout(timeout)
            }
        })
    };
    (function () {
        var input = document.createElement("input"), select = document.createElement("select"),
            opt = select.appendChild(document.createElement("option"));
        input.type = "checkbox";
        support.checkOn = input.value !== "";
        support.optSelected = opt.selected;
        input = document.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t"
    })();
    var boolHook, attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({
        attr: function (name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1)
        }, removeAttr: function (name) {
            return this.each(function () {
                jQuery.removeAttr(this, name)
            })
        }
    });
    jQuery.extend({
        attr: function (elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
                return
            }
            if (typeof elem.getAttribute === "undefined") {
                return jQuery.prop(elem, name, value)
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined)
            }
            if (value !== undefined) {
                if (value === null) {
                    jQuery.removeAttr(elem, name);
                    return
                }
                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                    return ret
                }
                elem.setAttribute(name, value + "");
                return value
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                return ret
            }
            ret = jQuery.find.attr(elem, name);
            return ret == null ? undefined : ret
        }, attrHooks: {
            type: {
                set: function (elem, value) {
                    if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                        var val = elem.value;
                        elem.setAttribute("type", value);
                        if (val) {
                            elem.value = val
                        }
                        return value
                    }
                }
            }
        }, removeAttr: function (elem, value) {
            var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && elem.nodeType === 1) {
                while ((name = attrNames[i++])) {
                    elem.removeAttribute(name)
                }
            }
        }
    });
    boolHook = {
        set: function (elem, value, name) {
            if (value === !1) {
                jQuery.removeAttr(elem, name)
            } else {
                elem.setAttribute(name, name)
            }
            return name
        }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (_i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;
        attrHandle[name] = function (elem, name, isXML) {
            var ret, handle, lowercaseName = name.toLowerCase();
            if (!isXML) {
                handle = attrHandle[lowercaseName];
                attrHandle[lowercaseName] = ret;
                ret = getter(elem, name, isXML) != null ? lowercaseName : null;
                attrHandle[lowercaseName] = handle
            }
            return ret
        }
    });
    var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
    jQuery.fn.extend({
        prop: function (name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1)
        }, removeProp: function (name) {
            return this.each(function () {
                delete this[jQuery.propFix[name] || name]
            })
        }
    });
    jQuery.extend({
        prop: function (elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
                return
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                name = jQuery.propFix[name] || name;
                hooks = jQuery.propHooks[name]
            }
            if (value !== undefined) {
                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                    return ret
                }
                return (elem[name] = value)
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                return ret
            }
            return elem[name]
        }, propHooks: {
            tabIndex: {
                get: function (elem) {
                    var tabindex = jQuery.find.attr(elem, "tabindex");
                    if (tabindex) {
                        return parseInt(tabindex, 10)
                    }
                    if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                        return 0
                    }
                    return -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    });
    if (!support.optSelected) {
        jQuery.propHooks.selected = {
            get: function (elem) {
                var parent = elem.parentNode;
                if (parent && parent.parentNode) {
                    parent.parentNode.selectedIndex
                }
                return null
            }, set: function (elem) {
                var parent = elem.parentNode;
                if (parent) {
                    parent.selectedIndex;
                    if (parent.parentNode) {
                        parent.parentNode.selectedIndex
                    }
                }
            }
        }
    }
    jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        jQuery.propFix[this.toLowerCase()] = this
    });

    function stripAndCollapse(value) {
        var tokens = value.match(rnothtmlwhite) || [];
        return tokens.join(" ")
    }

    function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || ""
    }

    function classesToArray(value) {
        if (Array.isArray(value)) {
            return value
        }
        if (typeof value === "string") {
            return value.match(rnothtmlwhite) || []
        }
        return []
    }

    jQuery.fn.extend({
        addClass: function (value) {
            var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
            if (isFunction(value)) {
                return this.each(function (j) {
                    jQuery(this).addClass(value.call(this, j, getClass(this)))
                })
            }
            classes = classesToArray(value);
            if (classes.length) {
                while ((elem = this[i++])) {
                    curValue = getClass(elem);
                    cur = elem.nodeType === 1 && (" " + stripAndCollapse(curValue) + " ");
                    if (cur) {
                        j = 0;
                        while ((clazz = classes[j++])) {
                            if (cur.indexOf(" " + clazz + " ") < 0) {
                                cur += clazz + " "
                            }
                        }
                        finalValue = stripAndCollapse(cur);
                        if (curValue !== finalValue) {
                            elem.setAttribute("class", finalValue)
                        }
                    }
                }
            }
            return this
        }, removeClass: function (value) {
            var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
            if (isFunction(value)) {
                return this.each(function (j) {
                    jQuery(this).removeClass(value.call(this, j, getClass(this)))
                })
            }
            if (!arguments.length) {
                return this.attr("class", "")
            }
            classes = classesToArray(value);
            if (classes.length) {
                while ((elem = this[i++])) {
                    curValue = getClass(elem);
                    cur = elem.nodeType === 1 && (" " + stripAndCollapse(curValue) + " ");
                    if (cur) {
                        j = 0;
                        while ((clazz = classes[j++])) {
                            while (cur.indexOf(" " + clazz + " ") > -1) {
                                cur = cur.replace(" " + clazz + " ", " ")
                            }
                        }
                        finalValue = stripAndCollapse(cur);
                        if (curValue !== finalValue) {
                            elem.setAttribute("class", finalValue)
                        }
                    }
                }
            }
            return this
        }, toggleClass: function (value, stateVal) {
            var type = typeof value, isValidValue = type === "string" || Array.isArray(value);
            if (typeof stateVal === "boolean" && isValidValue) {
                return stateVal ? this.addClass(value) : this.removeClass(value)
            }
            if (isFunction(value)) {
                return this.each(function (i) {
                    jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal)
                })
            }
            return this.each(function () {
                var className, i, self, classNames;
                if (isValidValue) {
                    i = 0;
                    self = jQuery(this);
                    classNames = classesToArray(value);
                    while ((className = classNames[i++])) {
                        if (self.hasClass(className)) {
                            self.removeClass(className)
                        } else {
                            self.addClass(className)
                        }
                    }
                } else if (value === undefined || type === "boolean") {
                    className = getClass(this);
                    if (className) {
                        dataPriv.set(this, "__className__", className)
                    }
                    if (this.setAttribute) {
                        this.setAttribute("class", className || value === !1 ? "" : dataPriv.get(this, "__className__") || "")
                    }
                }
            })
        }, hasClass: function (selector) {
            var className, elem, i = 0;
            className = " " + selector + " ";
            while ((elem = this[i++])) {
                if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
                    return !0
                }
            }
            return !1
        }
    });
    var rreturn = /\r/g;
    jQuery.fn.extend({
        val: function (value) {
            var hooks, ret, valueIsFunction, elem = this[0];
            if (!arguments.length) {
                if (elem) {
                    hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                        return ret
                    }
                    ret = elem.value;
                    if (typeof ret === "string") {
                        return ret.replace(rreturn, "")
                    }
                    return ret == null ? "" : ret
                }
                return
            }
            valueIsFunction = isFunction(value);
            return this.each(function (i) {
                var val;
                if (this.nodeType !== 1) {
                    return
                }
                if (valueIsFunction) {
                    val = value.call(this, i, jQuery(this).val())
                } else {
                    val = value
                }
                if (val == null) {
                    val = ""
                } else if (typeof val === "number") {
                    val += ""
                } else if (Array.isArray(val)) {
                    val = jQuery.map(val, function (value) {
                        return value == null ? "" : value + ""
                    })
                }
                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                    this.value = val
                }
            })
        }
    });
    jQuery.extend({
        valHooks: {
            option: {
                get: function (elem) {
                    var val = jQuery.find.attr(elem, "value");
                    return val != null ? val : stripAndCollapse(jQuery.text(elem))
                }
            }, select: {
                get: function (elem) {
                    var value, option, i, options = elem.options, index = elem.selectedIndex,
                        one = elem.type === "select-one", values = one ? null : [],
                        max = one ? index + 1 : options.length;
                    if (index < 0) {
                        i = max
                    } else {
                        i = one ? index : 0
                    }
                    for (; i < max; i++) {
                        option = options[i];
                        if ((option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                            value = jQuery(option).val();
                            if (one) {
                                return value
                            }
                            values.push(value)
                        }
                    }
                    return values
                }, set: function (elem, value) {
                    var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                    while (i--) {
                        option = options[i];
                        if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                            optionSet = !0
                        }
                    }
                    if (!optionSet) {
                        elem.selectedIndex = -1
                    }
                    return values
                }
            }
        }
    });
    jQuery.each(["radio", "checkbox"], function () {
        jQuery.valHooks[this] = {
            set: function (elem, value) {
                if (Array.isArray(value)) {
                    return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1)
                }
            }
        };
        if (!support.checkOn) {
            jQuery.valHooks[this].get = function (elem) {
                return elem.getAttribute("value") === null ? "on" : elem.value
            }
        }
    });
    support.focusin = "onfocusin" in window;
    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function (e) {
        e.stopPropagation()
    };
    jQuery.extend(jQuery.event, {
        trigger: function (event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document],
                type = hasOwn.call(event, "type") ? event.type : event,
                namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = lastElement = tmp = elem = elem || document;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
                return
            }
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
                return
            }
            if (type.indexOf(".") > -1) {
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort()
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            event.result = undefined;
            if (!event.target) {
                event.target = elem
            }
            data = data == null ? [event] : jQuery.makeArray(data, [event]);
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === !1) {
                return
            }
            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
                bubbleType = special.delegateType || type;
                if (!rfocusMorph.test(bubbleType + type)) {
                    cur = cur.parentNode
                }
                for (; cur; cur = cur.parentNode) {
                    eventPath.push(cur);
                    tmp = cur
                }
                if (tmp === (elem.ownerDocument || document)) {
                    eventPath.push(tmp.defaultView || tmp.parentWindow || window)
                }
            }
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                lastElement = cur;
                event.type = i > 1 ? bubbleType : special.bindType || type;
                handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");
                if (handle) {
                    handle.apply(cur, data)
                }
                handle = ontype && cur[ontype];
                if (handle && handle.apply && acceptData(cur)) {
                    event.result = handle.apply(cur, data);
                    if (event.result === !1) {
                        event.preventDefault()
                    }
                }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
                if ((!special._default || special._default.apply(eventPath.pop(), data) === !1) && acceptData(elem)) {
                    if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                        tmp = elem[ontype];
                        if (tmp) {
                            elem[ontype] = null
                        }
                        jQuery.event.triggered = type;
                        if (event.isPropagationStopped()) {
                            lastElement.addEventListener(type, stopPropagationCallback)
                        }
                        elem[type]();
                        if (event.isPropagationStopped()) {
                            lastElement.removeEventListener(type, stopPropagationCallback)
                        }
                        jQuery.event.triggered = undefined;
                        if (tmp) {
                            elem[ontype] = tmp
                        }
                    }
                }
            }
            return event.result
        }, simulate: function (type, elem, event) {
            var e = jQuery.extend(new jQuery.Event(), event, {type: type, isSimulated: !0});
            jQuery.event.trigger(e, null, elem)
        }
    });
    jQuery.fn.extend({
        trigger: function (type, data) {
            return this.each(function () {
                jQuery.event.trigger(type, data, this)
            })
        }, triggerHandler: function (type, data) {
            var elem = this[0];
            if (elem) {
                return jQuery.event.trigger(type, data, elem, !0)
            }
        }
    });
    if (!support.focusin) {
        jQuery.each({focus: "focusin", blur: "focusout"}, function (orig, fix) {
            var handler = function (event) {
                jQuery.event.simulate(fix, event.target, jQuery.event.fix(event))
            };
            jQuery.event.special[fix] = {
                setup: function () {
                    var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix);
                    if (!attaches) {
                        doc.addEventListener(orig, handler, !0)
                    }
                    dataPriv.access(doc, fix, (attaches || 0) + 1)
                }, teardown: function () {
                    var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix) - 1;
                    if (!attaches) {
                        doc.removeEventListener(orig, handler, !0);
                        dataPriv.remove(doc, fix)
                    } else {
                        dataPriv.access(doc, fix, attaches)
                    }
                }
            }
        })
    }
    var location = window.location;
    var nonce = {guid: Date.now()};
    var rquery = (/\?/);
    jQuery.parseXML = function (data) {
        var xml;
        if (!data || typeof data !== "string") {
            return null
        }
        try {
            xml = (new window.DOMParser()).parseFromString(data, "text/xml")
        } catch (e) {
            xml = undefined
        }
        if (!xml || xml.getElementsByTagName("parsererror").length) {
            jQuery.error("Invalid XML: " + data)
        }
        return xml
    };
    var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
        rsubmittable = /^(?:input|select|textarea|keygen)/i;

    function buildParams(prefix, obj, traditional, add) {
        var name;
        if (Array.isArray(obj)) {
            jQuery.each(obj, function (i, v) {
                if (traditional || rbracket.test(prefix)) {
                    add(prefix, v)
                } else {
                    buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add)
                }
            })
        } else if (!traditional && toType(obj) === "object") {
            for (name in obj) {
                buildParams(prefix + "[" + name + "]", obj[name], traditional, add)
            }
        } else {
            add(prefix, obj)
        }
    }

    jQuery.param = function (a, traditional) {
        var prefix, s = [], add = function (key, valueOrFunction) {
            var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value)
        };
        if (a == null) {
            return ""
        }
        if (Array.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
            jQuery.each(a, function () {
                add(this.name, this.value)
            })
        } else {
            for (prefix in a) {
                buildParams(prefix, a[prefix], traditional, add)
            }
        }
        return s.join("&")
    };
    jQuery.fn.extend({
        serialize: function () {
            return jQuery.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this
            }).filter(function () {
                var type = this.type;
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type))
            }).map(function (_i, elem) {
                var val = jQuery(this).val();
                if (val == null) {
                    return null
                }
                if (Array.isArray(val)) {
                    return jQuery.map(val, function (val) {
                        return {name: elem.name, value: val.replace(rCRLF, "\r\n")}
                    })
                }
                return {name: elem.name, value: val.replace(rCRLF, "\r\n")}
            }).get()
        }
    });
    var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
        rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/,
        rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"),
        originAnchor = document.createElement("a");
    originAnchor.href = location.href;

    function addToPrefiltersOrTransports(structure) {
        return function (dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
                func = dataTypeExpression;
                dataTypeExpression = "*"
            }
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (isFunction(func)) {
                while ((dataType = dataTypes[i++])) {
                    if (dataType[0] === "+") {
                        dataType = dataType.slice(1) || "*";
                        (structure[dataType] = structure[dataType] || []).unshift(func)
                    } else {
                        (structure[dataType] = structure[dataType] || []).push(func)
                    }
                }
            }
        }
    }

    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = (structure === transports);

        function inspect(dataType) {
            var selected;
            inspected[dataType] = !0;
            jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                    options.dataTypes.unshift(dataTypeOrTransport);
                    inspect(dataTypeOrTransport);
                    return !1
                } else if (seekingTransport) {
                    return !(selected = dataTypeOrTransport)
                }
            });
            return selected
        }

        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*")
    }

    function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key in src) {
            if (src[key] !== undefined) {
                (flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key]
            }
        }
        if (deep) {
            jQuery.extend(!0, target, deep)
        }
        return target
    }

    function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
        while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === undefined) {
                ct = s.mimeType || jqXHR.getResponseHeader("Content-Type")
            }
        }
        if (ct) {
            for (type in contents) {
                if (contents[type] && contents[type].test(ct)) {
                    dataTypes.unshift(type);
                    break
                }
            }
        }
        if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0]
        } else {
            for (type in responses) {
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    finalDataType = type;
                    break
                }
                if (!firstDataType) {
                    firstDataType = type
                }
            }
            finalDataType = finalDataType || firstDataType
        }
        if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
                dataTypes.unshift(finalDataType)
            }
            return responses[finalDataType]
        }
    }

    function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) {
            for (conv in s.converters) {
                converters[conv.toLowerCase()] = s.converters[conv]
            }
        }
        current = dataTypes.shift();
        while (current) {
            if (s.responseFields[current]) {
                jqXHR[s.responseFields[current]] = response
            }
            if (!prev && isSuccess && s.dataFilter) {
                response = s.dataFilter(response, s.dataType)
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
                if (current === "*") {
                    current = prev
                } else if (prev !== "*" && prev !== current) {
                    conv = converters[prev + " " + current] || converters["* " + current];
                    if (!conv) {
                        for (conv2 in converters) {
                            tmp = conv2.split(" ");
                            if (tmp[1] === current) {
                                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                if (conv) {
                                    if (conv === !0) {
                                        conv = converters[conv2]
                                    } else if (converters[conv2] !== !0) {
                                        current = tmp[0];
                                        dataTypes.unshift(tmp[1])
                                    }
                                    break
                                }
                            }
                        }
                    }
                    if (conv !== !0) {
                        if (conv && s.throws) {
                            response = conv(response)
                        } else {
                            try {
                                response = conv(response)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: conv ? e : "No conversion from " + prev + " to " + current
                                }
                            }
                        }
                    }
                }
            }
        }
        return {state: "success", data: response}
    }

    jQuery.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: location.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": jQuery.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (target, settings) {
            return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target)
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        ajax: function (url, options) {
            if (typeof url === "object") {
                options = url;
                url = undefined
            }
            options = options || {};
            var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed,
                fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s,
                globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
                deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"),
                statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled",
                jqXHR = {
                    readyState: 0, getResponseHeader: function (key) {
                        var match;
                        if (completed) {
                            if (!responseHeaders) {
                                responseHeaders = {};
                                while ((match = rheaders.exec(responseHeadersString))) {
                                    responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2])
                                }
                            }
                            match = responseHeaders[key.toLowerCase() + " "]
                        }
                        return match == null ? null : match.join(", ")
                    }, getAllResponseHeaders: function () {
                        return completed ? responseHeadersString : null
                    }, setRequestHeader: function (name, value) {
                        if (completed == null) {
                            name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                            requestHeaders[name] = value
                        }
                        return this
                    }, overrideMimeType: function (type) {
                        if (completed == null) {
                            s.mimeType = type
                        }
                        return this
                    }, statusCode: function (map) {
                        var code;
                        if (map) {
                            if (completed) {
                                jqXHR.always(map[jqXHR.status])
                            } else {
                                for (code in map) {
                                    statusCode[code] = [statusCode[code], map[code]]
                                }
                            }
                        }
                        return this
                    }, abort: function (statusText) {
                        var finalText = statusText || strAbort;
                        if (transport) {
                            transport.abort(finalText)
                        }
                        done(0, finalText);
                        return this
                    }
                };
            deferred.promise(jqXHR);
            s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
            s.type = options.method || options.type || s.method || s.type;
            s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
            if (s.crossDomain == null) {
                urlAnchor = document.createElement("a");
                try {
                    urlAnchor.href = s.url;
                    urlAnchor.href = urlAnchor.href;
                    s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host
                } catch (e) {
                    s.crossDomain = !0
                }
            }
            if (s.data && s.processData && typeof s.data !== "string") {
                s.data = jQuery.param(s.data, s.traditional)
            }
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            if (completed) {
                return jqXHR
            }
            fireGlobals = jQuery.event && s.global;
            if (fireGlobals && jQuery.active++ === 0) {
                jQuery.event.trigger("ajaxStart")
            }
            s.type = s.type.toUpperCase();
            s.hasContent = !rnoContent.test(s.type);
            cacheURL = s.url.replace(rhash, "");
            if (!s.hasContent) {
                uncached = s.url.slice(cacheURL.length);
                if (s.data && (s.processData || typeof s.data === "string")) {
                    cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                    delete s.data
                }
                if (s.cache === !1) {
                    cacheURL = cacheURL.replace(rantiCache, "$1");
                    uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + (nonce.guid++) + uncached
                }
                s.url = cacheURL + uncached
            } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
                s.data = s.data.replace(r20, "+")
            }
            if (s.ifModified) {
                if (jQuery.lastModified[cacheURL]) {
                    jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL])
                }
                if (jQuery.etag[cacheURL]) {
                    jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL])
                }
            }
            if (s.data && s.hasContent && s.contentType !== !1 || options.contentType) {
                jqXHR.setRequestHeader("Content-Type", s.contentType)
            }
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
            for (i in s.headers) {
                jqXHR.setRequestHeader(i, s.headers[i])
            }
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === !1 || completed)) {
                return jqXHR.abort()
            }
            strAbort = "abort";
            completeDeferred.add(s.complete);
            jqXHR.done(s.success);
            jqXHR.fail(s.error);
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            if (!transport) {
                done(-1, "No Transport")
            } else {
                jqXHR.readyState = 1;
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxSend", [jqXHR, s])
                }
                if (completed) {
                    return jqXHR
                }
                if (s.async && s.timeout > 0) {
                    timeoutTimer = window.setTimeout(function () {
                        jqXHR.abort("timeout")
                    }, s.timeout)
                }
                try {
                    completed = !1;
                    transport.send(requestHeaders, done)
                } catch (e) {
                    if (completed) {
                        throw e
                    }
                    done(-1, e)
                }
            }

            function done(status, nativeStatusText, responses, headers) {
                var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                if (completed) {
                    return
                }
                completed = !0;
                if (timeoutTimer) {
                    window.clearTimeout(timeoutTimer)
                }
                transport = undefined;
                responseHeadersString = headers || "";
                jqXHR.readyState = status > 0 ? 4 : 0;
                isSuccess = status >= 200 && status < 300 || status === 304;
                if (responses) {
                    response = ajaxHandleResponses(s, jqXHR, responses)
                }
                if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1) {
                    s.converters["text script"] = function () {
                    }
                }
                response = ajaxConvert(s, response, jqXHR, isSuccess);
                if (isSuccess) {
                    if (s.ifModified) {
                        modified = jqXHR.getResponseHeader("Last-Modified");
                        if (modified) {
                            jQuery.lastModified[cacheURL] = modified
                        }
                        modified = jqXHR.getResponseHeader("etag");
                        if (modified) {
                            jQuery.etag[cacheURL] = modified
                        }
                    }
                    if (status === 204 || s.type === "HEAD") {
                        statusText = "nocontent"
                    } else if (status === 304) {
                        statusText = "notmodified"
                    } else {
                        statusText = response.state;
                        success = response.data;
                        error = response.error;
                        isSuccess = !error
                    }
                } else {
                    error = statusText;
                    if (status || !statusText) {
                        statusText = "error";
                        if (status < 0) {
                            status = 0
                        }
                    }
                }
                jqXHR.status = status;
                jqXHR.statusText = (nativeStatusText || statusText) + "";
                if (isSuccess) {
                    deferred.resolveWith(callbackContext, [success, statusText, jqXHR])
                } else {
                    deferred.rejectWith(callbackContext, [jqXHR, statusText, error])
                }
                jqXHR.statusCode(statusCode);
                statusCode = undefined;
                if (fireGlobals) {
                    globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error])
                }
                completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
                    if (!(--jQuery.active)) {
                        jQuery.event.trigger("ajaxStop")
                    }
                }
            }

            return jqXHR
        },
        getJSON: function (url, data, callback) {
            return jQuery.get(url, data, callback, "json")
        },
        getScript: function (url, callback) {
            return jQuery.get(url, undefined, callback, "script")
        }
    });
    jQuery.each(["get", "post"], function (_i, method) {
        jQuery[method] = function (url, data, callback, type) {
            if (isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined
            }
            return jQuery.ajax(jQuery.extend({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            }, jQuery.isPlainObject(url) && url))
        }
    });
    jQuery.ajaxPrefilter(function (s) {
        var i;
        for (i in s.headers) {
            if (i.toLowerCase() === "content-type") {
                s.contentType = s.headers[i] || ""
            }
        }
    });
    jQuery._evalUrl = function (url, options, doc) {
        return jQuery.ajax({
            url: url,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () {
                }
            },
            dataFilter: function (response) {
                jQuery.globalEval(response, options, doc)
            }
        })
    };
    jQuery.fn.extend({
        wrapAll: function (html) {
            var wrap;
            if (this[0]) {
                if (isFunction(html)) {
                    html = html.call(this[0])
                }
                wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(!0);
                if (this[0].parentNode) {
                    wrap.insertBefore(this[0])
                }
                wrap.map(function () {
                    var elem = this;
                    while (elem.firstElementChild) {
                        elem = elem.firstElementChild
                    }
                    return elem
                }).append(this)
            }
            return this
        }, wrapInner: function (html) {
            if (isFunction(html)) {
                return this.each(function (i) {
                    jQuery(this).wrapInner(html.call(this, i))
                })
            }
            return this.each(function () {
                var self = jQuery(this), contents = self.contents();
                if (contents.length) {
                    contents.wrapAll(html)
                } else {
                    self.append(html)
                }
            })
        }, wrap: function (html) {
            var htmlIsFunction = isFunction(html);
            return this.each(function (i) {
                jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html)
            })
        }, unwrap: function (selector) {
            this.parent(selector).not("body").each(function () {
                jQuery(this).replaceWith(this.childNodes)
            });
            return this
        }
    });
    jQuery.expr.pseudos.hidden = function (elem) {
        return !jQuery.expr.pseudos.visible(elem)
    };
    jQuery.expr.pseudos.visible = function (elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length)
    };
    jQuery.ajaxSettings.xhr = function () {
        try {
            return new window.XMLHttpRequest()
        } catch (e) {
        }
    };
    var xhrSuccessStatus = {0: 200, 1223: 204}, xhrSupported = jQuery.ajaxSettings.xhr();
    support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
    support.ajax = xhrSupported = !!xhrSupported;
    jQuery.ajaxTransport(function (options) {
        var callback, errorCallback;
        if (support.cors || xhrSupported && !options.crossDomain) {
            return {
                send: function (headers, complete) {
                    var i, xhr = options.xhr();
                    xhr.open(options.type, options.url, options.async, options.username, options.password);
                    if (options.xhrFields) {
                        for (i in options.xhrFields) {
                            xhr[i] = options.xhrFields[i]
                        }
                    }
                    if (options.mimeType && xhr.overrideMimeType) {
                        xhr.overrideMimeType(options.mimeType)
                    }
                    if (!options.crossDomain && !headers["X-Requested-With"]) {
                        headers["X-Requested-With"] = "XMLHttpRequest"
                    }
                    for (i in headers) {
                        xhr.setRequestHeader(i, headers[i])
                    }
                    callback = function (type) {
                        return function () {
                            if (callback) {
                                callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                                if (type === "abort") {
                                    xhr.abort()
                                } else if (type === "error") {
                                    if (typeof xhr.status !== "number") {
                                        complete(0, "error")
                                    } else {
                                        complete(xhr.status, xhr.statusText)
                                    }
                                } else {
                                    complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {binary: xhr.response} : {text: xhr.responseText}, xhr.getAllResponseHeaders())
                                }
                            }
                        }
                    };
                    xhr.onload = callback();
                    errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                    if (xhr.onabort !== undefined) {
                        xhr.onabort = errorCallback
                    } else {
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState === 4) {
                                window.setTimeout(function () {
                                    if (callback) {
                                        errorCallback()
                                    }
                                })
                            }
                        }
                    }
                    callback = callback("abort");
                    try {
                        xhr.send(options.hasContent && options.data || null)
                    } catch (e) {
                        if (callback) {
                            throw e
                        }
                    }
                }, abort: function () {
                    if (callback) {
                        callback()
                    }
                }
            }
        }
    });
    jQuery.ajaxPrefilter(function (s) {
        if (s.crossDomain) {
            s.contents.script = !1
        }
    });
    jQuery.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (text) {
                jQuery.globalEval(text);
                return text
            }
        }
    });
    jQuery.ajaxPrefilter("script", function (s) {
        if (s.cache === undefined) {
            s.cache = !1
        }
        if (s.crossDomain) {
            s.type = "GET"
        }
    });
    jQuery.ajaxTransport("script", function (s) {
        if (s.crossDomain || s.scriptAttrs) {
            var script, callback;
            return {
                send: function (_, complete) {
                    script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
                        charset: s.scriptCharset,
                        src: s.url
                    }).on("load error", callback = function (evt) {
                        script.remove();
                        callback = null;
                        if (evt) {
                            complete(evt.type === "error" ? 404 : 200, evt.type)
                        }
                    });
                    document.head.appendChild(script[0])
                }, abort: function () {
                    if (callback) {
                        callback()
                    }
                }
            }
        }
    });
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (nonce.guid++));
            this[callback] = !0;
            return callback
        }
    });
    jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer,
            jsonProp = s.jsonp !== !1 && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
        if (jsonProp || s.dataTypes[0] === "jsonp") {
            callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            if (jsonProp) {
                s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName)
            } else if (s.jsonp !== !1) {
                s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName
            }
            s.converters["script json"] = function () {
                if (!responseContainer) {
                    jQuery.error(callbackName + " was not called")
                }
                return responseContainer[0]
            };
            s.dataTypes[0] = "json";
            overwritten = window[callbackName];
            window[callbackName] = function () {
                responseContainer = arguments
            };
            jqXHR.always(function () {
                if (overwritten === undefined) {
                    jQuery(window).removeProp(callbackName)
                } else {
                    window[callbackName] = overwritten
                }
                if (s[callbackName]) {
                    s.jsonpCallback = originalSettings.jsonpCallback;
                    oldCallbacks.push(callbackName)
                }
                if (responseContainer && isFunction(overwritten)) {
                    overwritten(responseContainer[0])
                }
                responseContainer = overwritten = undefined
            });
            return "script"
        }
    });
    support.createHTMLDocument = (function () {
        var body = document.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2
    })();
    jQuery.parseHTML = function (data, context, keepScripts) {
        if (typeof data !== "string") {
            return []
        }
        if (typeof context === "boolean") {
            keepScripts = context;
            context = !1
        }
        var base, parsed, scripts;
        if (!context) {
            if (support.createHTMLDocument) {
                context = document.implementation.createHTMLDocument("");
                base = context.createElement("base");
                base.href = document.location.href;
                context.head.appendChild(base)
            } else {
                context = document
            }
        }
        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && [];
        if (parsed) {
            return [context.createElement(parsed[1])]
        }
        parsed = buildFragment([data], context, scripts);
        if (scripts && scripts.length) {
            jQuery(scripts).remove()
        }
        return jQuery.merge([], parsed.childNodes)
    };
    jQuery.fn.load = function (url, params, callback) {
        var selector, type, response, self = this, off = url.indexOf(" ");
        if (off > -1) {
            selector = stripAndCollapse(url.slice(off));
            url = url.slice(0, off)
        }
        if (isFunction(params)) {
            callback = params;
            params = undefined
        } else if (params && typeof params === "object") {
            type = "POST"
        }
        if (self.length > 0) {
            jQuery.ajax({url: url, type: type || "GET", dataType: "html", data: params}).done(function (responseText) {
                response = arguments;
                self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText)
            }).always(callback && function (jqXHR, status) {
                self.each(function () {
                    callback.apply(this, response || [jqXHR.responseText, status, jqXHR])
                })
            })
        }
        return this
    };
    jQuery.expr.pseudos.animated = function (elem) {
        return jQuery.grep(jQuery.timers, function (fn) {
            return elem === fn.elem
        }).length
    };
    jQuery.offset = {
        setOffset: function (elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
                position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
            if (position === "static") {
                elem.style.position = "relative"
            }
            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            if (calculatePosition) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left
            } else {
                curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0
            }
            if (isFunction(options)) {
                options = options.call(elem, i, jQuery.extend({}, curOffset))
            }
            if (options.top != null) {
                props.top = (options.top - curOffset.top) + curTop
            }
            if (options.left != null) {
                props.left = (options.left - curOffset.left) + curLeft
            }
            if ("using" in options) {
                options.using.call(elem, props)
            } else {
                if (typeof props.top === "number") {
                    props.top += "px"
                }
                if (typeof props.left === "number") {
                    props.left += "px"
                }
                curElem.css(props)
            }
        }
    };
    jQuery.fn.extend({
        offset: function (options) {
            if (arguments.length) {
                return options === undefined ? this : this.each(function (i) {
                    jQuery.offset.setOffset(this, options, i)
                })
            }
            var rect, win, elem = this[0];
            if (!elem) {
                return
            }
            if (!elem.getClientRects().length) {
                return {top: 0, left: 0}
            }
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {top: rect.top + win.pageYOffset, left: rect.left + win.pageXOffset}
        }, position: function () {
            if (!this[0]) {
                return
            }
            var offsetParent, offset, doc, elem = this[0], parentOffset = {top: 0, left: 0};
            if (jQuery.css(elem, "position") === "fixed") {
                offset = elem.getBoundingClientRect()
            } else {
                offset = this.offset();
                doc = elem.ownerDocument;
                offsetParent = elem.offsetParent || doc.documentElement;
                while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
                    offsetParent = offsetParent.parentNode
                }
                if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                    parentOffset = jQuery(offsetParent).offset();
                    parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", !0);
                    parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", !0)
                }
            }
            return {
                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", !0),
                left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", !0)
            }
        }, offsetParent: function () {
            return this.map(function () {
                var offsetParent = this.offsetParent;
                while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
                    offsetParent = offsetParent.offsetParent
                }
                return offsetParent || documentElement
            })
        }
    });
    jQuery.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (method, prop) {
        var top = "pageYOffset" === prop;
        jQuery.fn[method] = function (val) {
            return access(this, function (elem, method, val) {
                var win;
                if (isWindow(elem)) {
                    win = elem
                } else if (elem.nodeType === 9) {
                    win = elem.defaultView
                }
                if (val === undefined) {
                    return win ? win[prop] : elem[method]
                }
                if (win) {
                    win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset)
                } else {
                    elem[method] = val
                }
            }, method, val, arguments.length)
        }
    });
    jQuery.each(["top", "left"], function (_i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
            if (computed) {
                computed = curCSS(elem, prop);
                return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed
            }
        })
    });
    jQuery.each({Height: "height", Width: "width"}, function (name, type) {
        jQuery.each({padding: "inner" + name, content: type, "": "outer" + name}, function (defaultExtra, funcName) {
            jQuery.fn[funcName] = function (margin, value) {
                var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
                    extra = defaultExtra || (margin === !0 || value === !0 ? "margin" : "border");
                return access(this, function (elem, type, value) {
                    var doc;
                    if (isWindow(elem)) {
                        return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name]
                    }
                    if (elem.nodeType === 9) {
                        doc = elem.documentElement;
                        return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name])
                    }
                    return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra)
                }, type, chainable ? margin : undefined, chainable)
            }
        })
    });
    jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (_i, type) {
        jQuery.fn[type] = function (fn) {
            return this.on(type, fn)
        }
    });
    jQuery.fn.extend({
        bind: function (types, data, fn) {
            return this.on(types, null, data, fn)
        }, unbind: function (types, fn) {
            return this.off(types, null, fn)
        }, delegate: function (selector, types, data, fn) {
            return this.on(types, selector, data, fn)
        }, undelegate: function (selector, types, fn) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn)
        }, hover: function (fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver)
        }
    });
    jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (_i, name) {
        jQuery.fn[name] = function (data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name)
        }
    });
    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    jQuery.proxy = function (fn, context) {
        var tmp, args, proxy;
        if (typeof context === "string") {
            tmp = fn[context];
            context = fn;
            fn = tmp
        }
        if (!isFunction(fn)) {
            return undefined
        }
        args = slice.call(arguments, 2);
        proxy = function () {
            return fn.apply(context || this, args.concat(slice.call(arguments)))
        };
        proxy.guid = fn.guid = fn.guid || jQuery.guid++;
        return proxy
    };
    jQuery.holdReady = function (hold) {
        if (hold) {
            jQuery.readyWait++
        } else {
            jQuery.ready(!0)
        }
    };
    jQuery.isArray = Array.isArray;
    jQuery.parseJSON = JSON.parse;
    jQuery.nodeName = nodeName;
    jQuery.isFunction = isFunction;
    jQuery.isWindow = isWindow;
    jQuery.camelCase = camelCase;
    jQuery.type = toType;
    jQuery.now = Date.now;
    jQuery.isNumeric = function (obj) {
        var type = jQuery.type(obj);
        return (type === "number" || type === "string") && !isNaN(obj - parseFloat(obj))
    };
    jQuery.trim = function (text) {
        return text == null ? "" : (text + "").replace(rtrim, "")
    };
    if (typeof define === "function" && define.amd) {
        define("jquery", [], function () {
            return jQuery
        })
    }
    var _jQuery = window.jQuery, _$ = window.$;
    jQuery.noConflict = function (deep) {
        if (window.$ === jQuery) {
            window.$ = _$
        }
        if (deep && window.jQuery === jQuery) {
            window.jQuery = _jQuery
        }
        return jQuery
    };
    if (typeof noGlobal === "undefined") {
        window.jQuery = window.$ = jQuery
    }
    return jQuery
});/*!
  * Bootstrap v4.0.0 (https://getbootstrap.com)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery'), require('popper.js')) : typeof define === 'function' && define.amd ? define(['exports', 'jquery', 'popper.js'], factory) : (factory((global.bootstrap = {}), global.jQuery, global.Popper))
}(this, (function (exports, $, Popper) {
    'use strict';
    $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
    Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1;
            descriptor.configurable = !0;
            if ("value" in descriptor) descriptor.writable = !0;
            Object.defineProperty(target, descriptor.key, descriptor)
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor
    }

    function _extends() {
        _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key]
                    }
                }
            }
            return target
        };
        return _extends.apply(this, arguments)
    }

    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass
    }

    var Util = function ($$$1) {
        var transition = !1;
        var MAX_UID = 1000000;

        function toType(obj) {
            return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
        }

        function getSpecialTransitionEndEvent() {
            return {
                bindType: transition.end, delegateType: transition.end, handle: function handle(event) {
                    if ($$$1(event.target).is(this)) {
                        return event.handleObj.handler.apply(this, arguments)
                    }
                    return undefined
                }
            }
        }

        function transitionEndTest() {
            if (typeof window !== 'undefined' && window.QUnit) {
                return !1
            }
            return {end: 'transitionend'}
        }

        function transitionEndEmulator(duration) {
            var _this = this;
            var called = !1;
            $$$1(this).one(Util.TRANSITION_END, function () {
                called = !0
            });
            setTimeout(function () {
                if (!called) {
                    Util.triggerTransitionEnd(_this)
                }
            }, duration);
            return this
        }

        function setTransitionEndSupport() {
            transition = transitionEndTest();
            $$$1.fn.emulateTransitionEnd = transitionEndEmulator;
            if (Util.supportsTransitionEnd()) {
                $$$1.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent()
            }
        }

        function escapeId(selector) {
            selector = typeof $$$1.escapeSelector === 'function' ? $$$1.escapeSelector(selector).substr(1) : selector.replace(/(:|\.|\[|\]|,|=|@)/g, '\\$1');
            return selector
        }

        var Util = {
            TRANSITION_END: 'bsTransitionEnd', getUID: function getUID(prefix) {
                do {
                    prefix += ~~(Math.random() * MAX_UID)
                } while (document.getElementById(prefix));
                return prefix
            }, getSelectorFromElement: function getSelectorFromElement(element) {
                var selector = element.getAttribute('data-target');
                if (!selector || selector === '#') {
                    selector = element.getAttribute('href') || ''
                }
                if (selector.charAt(0) === '#') {
                    selector = escapeId(selector)
                }
                try {
                    var $selector = $$$1(document).find(selector);
                    return $selector.length > 0 ? selector : null
                } catch (err) {
                    return null
                }
            }, reflow: function reflow(element) {
                return element.offsetHeight
            }, triggerTransitionEnd: function triggerTransitionEnd(element) {
                $$$1(element).trigger(transition.end)
            }, supportsTransitionEnd: function supportsTransitionEnd() {
                return Boolean(transition)
            }, isElement: function isElement(obj) {
                return (obj[0] || obj).nodeType
            }, typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
                for (var property in configTypes) {
                    if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
                        var expectedTypes = configTypes[property];
                        var value = config[property];
                        var valueType = value && Util.isElement(value) ? 'element' : toType(value);
                        if (!new RegExp(expectedTypes).test(valueType)) {
                            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."))
                        }
                    }
                }
            }
        };
        setTransitionEndSupport();
        return Util
    }($);
    var Alert = function ($$$1) {
        var NAME = 'alert';
        var VERSION = '4.0.0';
        var DATA_KEY = 'bs.alert';
        var EVENT_KEY = "." + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
        var TRANSITION_DURATION = 150;
        var Selector = {DISMISS: '[data-dismiss="alert"]'};
        var Event = {
            CLOSE: "close" + EVENT_KEY,
            CLOSED: "closed" + EVENT_KEY,
            CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
        };
        var ClassName = {ALERT: 'alert', FADE: 'fade', SHOW: 'show'};
        var Alert = function () {
            function Alert(element) {
                this._element = element
            }

            var _proto = Alert.prototype;
            _proto.close = function close(element) {
                element = element || this._element;
                var rootElement = this._getRootElement(element);
                var customEvent = this._triggerCloseEvent(rootElement);
                if (customEvent.isDefaultPrevented()) {
                    return
                }
                this._removeElement(rootElement)
            };
            _proto.dispose = function dispose() {
                $$$1.removeData(this._element, DATA_KEY);
                this._element = null
            };
            _proto._getRootElement = function _getRootElement(element) {
                var selector = Util.getSelectorFromElement(element);
                var parent = !1;
                if (selector) {
                    parent = $$$1(selector)[0]
                }
                if (!parent) {
                    parent = $$$1(element).closest("." + ClassName.ALERT)[0]
                }
                return parent
            };
            _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
                var closeEvent = $$$1.Event(Event.CLOSE);
                $$$1(element).trigger(closeEvent);
                return closeEvent
            };
            _proto._removeElement = function _removeElement(element) {
                var _this = this;
                $$$1(element).removeClass(ClassName.SHOW);
                if (!Util.supportsTransitionEnd() || !$$$1(element).hasClass(ClassName.FADE)) {
                    this._destroyElement(element);
                    return
                }
                $$$1(element).one(Util.TRANSITION_END, function (event) {
                    return _this._destroyElement(element, event)
                }).emulateTransitionEnd(TRANSITION_DURATION)
            };
            _proto._destroyElement = function _destroyElement(element) {
                $$$1(element).detach().trigger(Event.CLOSED).remove()
            };
            Alert._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function () {
                    var $element = $$$1(this);
                    var data = $element.data(DATA_KEY);
                    if (!data) {
                        data = new Alert(this);
                        $element.data(DATA_KEY, data)
                    }
                    if (config === 'close') {
                        data[config](this)
                    }
                })
            };
            Alert._handleDismiss = function _handleDismiss(alertInstance) {
                return function (event) {
                    if (event) {
                        event.preventDefault()
                    }
                    alertInstance.close(this)
                }
            };
            _createClass(Alert, null, [{
                key: "VERSION", get: function get() {
                    return VERSION
                }
            }]);
            return Alert
        }();
        $$$1(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
        $$$1.fn[NAME] = Alert._jQueryInterface;
        $$$1.fn[NAME].Constructor = Alert;
        $$$1.fn[NAME].noConflict = function () {
            $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
            return Alert._jQueryInterface
        };
        return Alert
    }($);
    var Button = function ($$$1) {
        var NAME = 'button';
        var VERSION = '4.0.0';
        var DATA_KEY = 'bs.button';
        var EVENT_KEY = "." + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
        var ClassName = {ACTIVE: 'active', BUTTON: 'btn', FOCUS: 'focus'};
        var Selector = {
            DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
            DATA_TOGGLE: '[data-toggle="buttons"]',
            INPUT: 'input',
            ACTIVE: '.active',
            BUTTON: '.btn'
        };
        var Event = {
            CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
            FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY + DATA_API_KEY + " " + ("blur" + EVENT_KEY + DATA_API_KEY)
        };
        var Button = function () {
            function Button(element) {
                this._element = element
            }

            var _proto = Button.prototype;
            _proto.toggle = function toggle() {
                var triggerChangeEvent = !0;
                var addAriaPressed = !0;
                var rootElement = $$$1(this._element).closest(Selector.DATA_TOGGLE)[0];
                if (rootElement) {
                    var input = $$$1(this._element).find(Selector.INPUT)[0];
                    if (input) {
                        if (input.type === 'radio') {
                            if (input.checked && $$$1(this._element).hasClass(ClassName.ACTIVE)) {
                                triggerChangeEvent = !1
                            } else {
                                var activeElement = $$$1(rootElement).find(Selector.ACTIVE)[0];
                                if (activeElement) {
                                    $$$1(activeElement).removeClass(ClassName.ACTIVE)
                                }
                            }
                        }
                        if (triggerChangeEvent) {
                            if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
                                return
                            }
                            input.checked = !$$$1(this._element).hasClass(ClassName.ACTIVE);
                            $$$1(input).trigger('change')
                        }
                        input.focus();
                        addAriaPressed = !1
                    }
                }
                if (addAriaPressed) {
                    this._element.setAttribute('aria-pressed', !$$$1(this._element).hasClass(ClassName.ACTIVE))
                }
                if (triggerChangeEvent) {
                    $$$1(this._element).toggleClass(ClassName.ACTIVE)
                }
            };
            _proto.dispose = function dispose() {
                $$$1.removeData(this._element, DATA_KEY);
                this._element = null
            };
            Button._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function () {
                    var data = $$$1(this).data(DATA_KEY);
                    if (!data) {
                        data = new Button(this);
                        $$$1(this).data(DATA_KEY, data)
                    }
                    if (config === 'toggle') {
                        data[config]()
                    }
                })
            };
            _createClass(Button, null, [{
                key: "VERSION", get: function get() {
                    return VERSION
                }
            }]);
            return Button
        }();
        $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
            event.preventDefault();
            var button = event.target;
            if (!$$$1(button).hasClass(ClassName.BUTTON)) {
                button = $$$1(button).closest(Selector.BUTTON)
            }
            Button._jQueryInterface.call($$$1(button), 'toggle')
        }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
            var button = $$$1(event.target).closest(Selector.BUTTON)[0];
            $$$1(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type))
        });
        $$$1.fn[NAME] = Button._jQueryInterface;
        $$$1.fn[NAME].Constructor = Button;
        $$$1.fn[NAME].noConflict = function () {
            $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
            return Button._jQueryInterface
        };
        return Button
    }($);
    var Carousel = function ($$$1) {
        var NAME = 'carousel';
        var VERSION = '4.0.0';
        var DATA_KEY = 'bs.carousel';
        var EVENT_KEY = "." + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
        var TRANSITION_DURATION = 600;
        var ARROW_LEFT_KEYCODE = 37;
        var ARROW_RIGHT_KEYCODE = 39;
        var TOUCHEVENT_COMPAT_WAIT = 500;
        var Default = {interval: 5000, keyboard: !0, slide: !1, pause: 'hover', wrap: !0};
        var DefaultType = {
            interval: '(number|boolean)',
            keyboard: 'boolean',
            slide: '(boolean|string)',
            pause: '(string|boolean)',
            wrap: 'boolean'
        };
        var Direction = {NEXT: 'next', PREV: 'prev', LEFT: 'left', RIGHT: 'right'};
        var Event = {
            SLIDE: "slide" + EVENT_KEY,
            SLID: "slid" + EVENT_KEY,
            KEYDOWN: "keydown" + EVENT_KEY,
            MOUSEENTER: "mouseenter" + EVENT_KEY,
            MOUSELEAVE: "mouseleave" + EVENT_KEY,
            TOUCHEND: "touchend" + EVENT_KEY,
            LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
            CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
        };
        var ClassName = {
            CAROUSEL: 'carousel',
            ACTIVE: 'active',
            SLIDE: 'slide',
            RIGHT: 'carousel-item-right',
            LEFT: 'carousel-item-left',
            NEXT: 'carousel-item-next',
            PREV: 'carousel-item-prev',
            ITEM: 'carousel-item'
        };
        var Selector = {
            ACTIVE: '.active',
            ACTIVE_ITEM: '.active.carousel-item',
            ITEM: '.carousel-item',
            NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
            INDICATORS: '.carousel-indicators',
            DATA_SLIDE: '[data-slide], [data-slide-to]',
            DATA_RIDE: '[data-ride="carousel"]'
        };
        var Carousel = function () {
            function Carousel(element, config) {
                this._items = null;
                this._interval = null;
                this._activeElement = null;
                this._isPaused = !1;
                this._isSliding = !1;
                this.touchTimeout = null;
                this._config = this._getConfig(config);
                this._element = $$$1(element)[0];
                this._indicatorsElement = $$$1(this._element).find(Selector.INDICATORS)[0];
                this._addEventListeners()
            }

            var _proto = Carousel.prototype;
            _proto.next = function next() {
                if (!this._isSliding) {
                    this._slide(Direction.NEXT)
                }
            };
            _proto.nextWhenVisible = function nextWhenVisible() {
                if (!document.hidden && $$$1(this._element).is(':visible') && $$$1(this._element).css('visibility') !== 'hidden') {
                    this.next()
                }
            };
            _proto.prev = function prev() {
                if (!this._isSliding) {
                    this._slide(Direction.PREV)
                }
            };
            _proto.pause = function pause(event) {
                if (!event) {
                    this._isPaused = !0
                }
                if ($$$1(this._element).find(Selector.NEXT_PREV)[0] && Util.supportsTransitionEnd()) {
                    Util.triggerTransitionEnd(this._element);
                    this.cycle(!0)
                }
                clearInterval(this._interval);
                this._interval = null
            };
            _proto.cycle = function cycle(event) {
                if (!event) {
                    this._isPaused = !1
                }
                if (this._interval) {
                    clearInterval(this._interval);
                    this._interval = null
                }
                if (this._config.interval && !this._isPaused) {
                    this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)
                }
            };
            _proto.to = function to(index) {
                var _this = this;
                this._activeElement = $$$1(this._element).find(Selector.ACTIVE_ITEM)[0];
                var activeIndex = this._getItemIndex(this._activeElement);
                if (index > this._items.length - 1 || index < 0) {
                    return
                }
                if (this._isSliding) {
                    $$$1(this._element).one(Event.SLID, function () {
                        return _this.to(index)
                    });
                    return
                }
                if (activeIndex === index) {
                    this.pause();
                    this.cycle();
                    return
                }
                var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;
                this._slide(direction, this._items[index])
            };
            _proto.dispose = function dispose() {
                $$$1(this._element).off(EVENT_KEY);
                $$$1.removeData(this._element, DATA_KEY);
                this._items = null;
                this._config = null;
                this._element = null;
                this._interval = null;
                this._isPaused = null;
                this._isSliding = null;
                this._activeElement = null;
                this._indicatorsElement = null
            };
            _proto._getConfig = function _getConfig(config) {
                config = _extends({}, Default, config);
                Util.typeCheckConfig(NAME, config, DefaultType);
                return config
            };
            _proto._addEventListeners = function _addEventListeners() {
                var _this2 = this;
                if (this._config.keyboard) {
                    $$$1(this._element).on(Event.KEYDOWN, function (event) {
                        return _this2._keydown(event)
                    })
                }
                if (this._config.pause === 'hover') {
                    $$$1(this._element).on(Event.MOUSEENTER, function (event) {
                        return _this2.pause(event)
                    }).on(Event.MOUSELEAVE, function (event) {
                        return _this2.cycle(event)
                    });
                    if ('ontouchstart' in document.documentElement) {
                        $$$1(this._element).on(Event.TOUCHEND, function () {
                            _this2.pause();
                            if (_this2.touchTimeout) {
                                clearTimeout(_this2.touchTimeout)
                            }
                            _this2.touchTimeout = setTimeout(function (event) {
                                return _this2.cycle(event)
                            }, TOUCHEVENT_COMPAT_WAIT + _this2._config.interval)
                        })
                    }
                }
            };
            _proto._keydown = function _keydown(event) {
                if (/input|textarea/i.test(event.target.tagName)) {
                    return
                }
                switch (event.which) {
                    case ARROW_LEFT_KEYCODE:
                        event.preventDefault();
                        this.prev();
                        break;
                    case ARROW_RIGHT_KEYCODE:
                        event.preventDefault();
                        this.next();
                        break;
                    default:
                }
            };
            _proto._getItemIndex = function _getItemIndex(element) {
                this._items = $$$1.makeArray($$$1(element).parent().find(Selector.ITEM));
                return this._items.indexOf(element)
            };
            _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
                var isNextDirection = direction === Direction.NEXT;
                var isPrevDirection = direction === Direction.PREV;
                var activeIndex = this._getItemIndex(activeElement);
                var lastItemIndex = this._items.length - 1;
                var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;
                if (isGoingToWrap && !this._config.wrap) {
                    return activeElement
                }
                var delta = direction === Direction.PREV ? -1 : 1;
                var itemIndex = (activeIndex + delta) % this._items.length;
                return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex]
            };
            _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
                var targetIndex = this._getItemIndex(relatedTarget);
                var fromIndex = this._getItemIndex($$$1(this._element).find(Selector.ACTIVE_ITEM)[0]);
                var slideEvent = $$$1.Event(Event.SLIDE, {
                    relatedTarget: relatedTarget,
                    direction: eventDirectionName,
                    from: fromIndex,
                    to: targetIndex
                });
                $$$1(this._element).trigger(slideEvent);
                return slideEvent
            };
            _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
                if (this._indicatorsElement) {
                    $$$1(this._indicatorsElement).find(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
                    var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];
                    if (nextIndicator) {
                        $$$1(nextIndicator).addClass(ClassName.ACTIVE)
                    }
                }
            };
            _proto._slide = function _slide(direction, element) {
                var _this3 = this;
                var activeElement = $$$1(this._element).find(Selector.ACTIVE_ITEM)[0];
                var activeElementIndex = this._getItemIndex(activeElement);
                var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);
                var nextElementIndex = this._getItemIndex(nextElement);
                var isCycling = Boolean(this._interval);
                var directionalClassName;
                var orderClassName;
                var eventDirectionName;
                if (direction === Direction.NEXT) {
                    directionalClassName = ClassName.LEFT;
                    orderClassName = ClassName.NEXT;
                    eventDirectionName = Direction.LEFT
                } else {
                    directionalClassName = ClassName.RIGHT;
                    orderClassName = ClassName.PREV;
                    eventDirectionName = Direction.RIGHT
                }
                if (nextElement && $$$1(nextElement).hasClass(ClassName.ACTIVE)) {
                    this._isSliding = !1;
                    return
                }
                var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);
                if (slideEvent.isDefaultPrevented()) {
                    return
                }
                if (!activeElement || !nextElement) {
                    return
                }
                this._isSliding = !0;
                if (isCycling) {
                    this.pause()
                }
                this._setActiveIndicatorElement(nextElement);
                var slidEvent = $$$1.Event(Event.SLID, {
                    relatedTarget: nextElement,
                    direction: eventDirectionName,
                    from: activeElementIndex,
                    to: nextElementIndex
                });
                if (Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.SLIDE)) {
                    $$$1(nextElement).addClass(orderClassName);
                    Util.reflow(nextElement);
                    $$$1(activeElement).addClass(directionalClassName);
                    $$$1(nextElement).addClass(directionalClassName);
                    $$$1(activeElement).one(Util.TRANSITION_END, function () {
                        $$$1(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName.ACTIVE);
                        $$$1(activeElement).removeClass(ClassName.ACTIVE + " " + orderClassName + " " + directionalClassName);
                        _this3._isSliding = !1;
                        setTimeout(function () {
                            return $$$1(_this3._element).trigger(slidEvent)
                        }, 0)
                    }).emulateTransitionEnd(TRANSITION_DURATION)
                } else {
                    $$$1(activeElement).removeClass(ClassName.ACTIVE);
                    $$$1(nextElement).addClass(ClassName.ACTIVE);
                    this._isSliding = !1;
                    $$$1(this._element).trigger(slidEvent)
                }
                if (isCycling) {
                    this.cycle()
                }
            };
            Carousel._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function () {
                    var data = $$$1(this).data(DATA_KEY);
                    var _config = _extends({}, Default, $$$1(this).data());
                    if (typeof config === 'object') {
                        _config = _extends({}, _config, config)
                    }
                    var action = typeof config === 'string' ? config : _config.slide;
                    if (!data) {
                        data = new Carousel(this, _config);
                        $$$1(this).data(DATA_KEY, data)
                    }
                    if (typeof config === 'number') {
                        data.to(config)
                    } else if (typeof action === 'string') {
                        if (typeof data[action] === 'undefined') {
                            throw new TypeError("No method named \"" + action + "\"")
                        }
                        data[action]()
                    } else if (_config.interval) {
                        data.pause();
                        data.cycle()
                    }
                })
            };
            Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
                var selector = Util.getSelectorFromElement(this);
                if (!selector) {
                    return
                }
                var target = $$$1(selector)[0];
                if (!target || !$$$1(target).hasClass(ClassName.CAROUSEL)) {
                    return
                }
                var config = _extends({}, $$$1(target).data(), $$$1(this).data());
                var slideIndex = this.getAttribute('data-slide-to');
                if (slideIndex) {
                    config.interval = !1
                }
                Carousel._jQueryInterface.call($$$1(target), config);
                if (slideIndex) {
                    $$$1(target).data(DATA_KEY).to(slideIndex)
                }
                event.preventDefault()
            };
            _createClass(Carousel, null, [{
                key: "VERSION", get: function get() {
                    return VERSION
                }
            }, {
                key: "Default", get: function get() {
                    return Default
                }
            }]);
            return Carousel
        }();
        $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);
        $$$1(window).on(Event.LOAD_DATA_API, function () {
            $$$1(Selector.DATA_RIDE).each(function () {
                var $carousel = $$$1(this);
                Carousel._jQueryInterface.call($carousel, $carousel.data())
            })
        });
        $$$1.fn[NAME] = Carousel._jQueryInterface;
        $$$1.fn[NAME].Constructor = Carousel;
        $$$1.fn[NAME].noConflict = function () {
            $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
            return Carousel._jQueryInterface
        };
        return Carousel
    }($);
    var Collapse = function ($$$1) {
        var NAME = 'collapse';
        var VERSION = '4.0.0';
        var DATA_KEY = 'bs.collapse';
        var EVENT_KEY = "." + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
        var TRANSITION_DURATION = 600;
        var Default = {toggle: !0, parent: ''};
        var DefaultType = {toggle: 'boolean', parent: '(string|element)'};
        var Event = {
            SHOW: "show" + EVENT_KEY,
            SHOWN: "shown" + EVENT_KEY,
            HIDE: "hide" + EVENT_KEY,
            HIDDEN: "hidden" + EVENT_KEY,
            CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
        };
        var ClassName = {SHOW: 'show', COLLAPSE: 'collapse', COLLAPSING: 'collapsing', COLLAPSED: 'collapsed'};
        var Dimension = {WIDTH: 'width', HEIGHT: 'height'};
        var Selector = {ACTIVES: '.show, .collapsing', DATA_TOGGLE: '[data-toggle="collapse"]'};
        var Collapse = function () {
            function Collapse(element, config) {
                this._isTransitioning = !1;
                this._element = element;
                this._config = this._getConfig(config);
                this._triggerArray = $$$1.makeArray($$$1("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
                var tabToggles = $$$1(Selector.DATA_TOGGLE);
                for (var i = 0; i < tabToggles.length; i++) {
                    var elem = tabToggles[i];
                    var selector = Util.getSelectorFromElement(elem);
                    if (selector !== null && $$$1(selector).filter(element).length > 0) {
                        this._selector = selector;
                        this._triggerArray.push(elem)
                    }
                }
                this._parent = this._config.parent ? this._getParent() : null;
                if (!this._config.parent) {
                    this._addAriaAndCollapsedClass(this._element, this._triggerArray)
                }
                if (this._config.toggle) {
                    this.toggle()
                }
            }

            var _proto = Collapse.prototype;
            _proto.toggle = function toggle() {
                if ($$$1(this._element).hasClass(ClassName.SHOW)) {
                    this.hide()
                } else {
                    this.show()
                }
            };
            _proto.show = function show() {
                var _this = this;
                if (this._isTransitioning || $$$1(this._element).hasClass(ClassName.SHOW)) {
                    return
                }
                var actives;
                var activesData;
                if (this._parent) {
                    actives = $$$1.makeArray($$$1(this._parent).find(Selector.ACTIVES).filter("[data-parent=\"" + this._config.parent + "\"]"));
                    if (actives.length === 0) {
                        actives = null
                    }
                }
                if (actives) {
                    activesData = $$$1(actives).not(this._selector).data(DATA_KEY);
                    if (activesData && activesData._isTransitioning) {
                        return
                    }
                }
                var startEvent = $$$1.Event(Event.SHOW);
                $$$1(this._element).trigger(startEvent);
                if (startEvent.isDefaultPrevented()) {
                    return
                }
                if (actives) {
                    Collapse._jQueryInterface.call($$$1(actives).not(this._selector), 'hide');
                    if (!activesData) {
                        $$$1(actives).data(DATA_KEY, null)
                    }
                }
                var dimension = this._getDimension();
                $$$1(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);
                this._element.style[dimension] = 0;
                if (this._triggerArray.length > 0) {
                    $$$1(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', !0)
                }
                this.setTransitioning(!0);
                var complete = function complete() {
                    $$$1(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);
                    _this._element.style[dimension] = '';
                    _this.setTransitioning(!1);
                    $$$1(_this._element).trigger(Event.SHOWN)
                };
                if (!Util.supportsTransitionEnd()) {
                    complete();
                    return
                }
                var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
                var scrollSize = "scroll" + capitalizedDimension;
                $$$1(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
                this._element.style[dimension] = this._element[scrollSize] + "px"
            };
            _proto.hide = function hide() {
                var _this2 = this;
                if (this._isTransitioning || !$$$1(this._element).hasClass(ClassName.SHOW)) {
                    return
                }
                var startEvent = $$$1.Event(Event.HIDE);
                $$$1(this._element).trigger(startEvent);
                if (startEvent.isDefaultPrevented()) {
                    return
                }
                var dimension = this._getDimension();
                this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
                Util.reflow(this._element);
                $$$1(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);
                if (this._triggerArray.length > 0) {
                    for (var i = 0; i < this._triggerArray.length; i++) {
                        var trigger = this._triggerArray[i];
                        var selector = Util.getSelectorFromElement(trigger);
                        if (selector !== null) {
                            var $elem = $$$1(selector);
                            if (!$elem.hasClass(ClassName.SHOW)) {
                                $$$1(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded', !1)
                            }
                        }
                    }
                }
                this.setTransitioning(!0);
                var complete = function complete() {
                    _this2.setTransitioning(!1);
                    $$$1(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN)
                };
                this._element.style[dimension] = '';
                if (!Util.supportsTransitionEnd()) {
                    complete();
                    return
                }
                $$$1(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION)
            };
            _proto.setTransitioning = function setTransitioning(isTransitioning) {
                this._isTransitioning = isTransitioning
            };
            _proto.dispose = function dispose() {
                $$$1.removeData(this._element, DATA_KEY);
                this._config = null;
                this._parent = null;
                this._element = null;
                this._triggerArray = null;
                this._isTransitioning = null
            };
            _proto._getConfig = function _getConfig(config) {
                config = _extends({}, Default, config);
                config.toggle = Boolean(config.toggle);
                Util.typeCheckConfig(NAME, config, DefaultType);
                return config
            };
            _proto._getDimension = function _getDimension() {
                var hasWidth = $$$1(this._element).hasClass(Dimension.WIDTH);
                return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT
            };
            _proto._getParent = function _getParent() {
                var _this3 = this;
                var parent = null;
                if (Util.isElement(this._config.parent)) {
                    parent = this._config.parent;
                    if (typeof this._config.parent.jquery !== 'undefined') {
                        parent = this._config.parent[0]
                    }
                } else {
                    parent = $$$1(this._config.parent)[0]
                }
                var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
                $$$1(parent).find(selector).each(function (i, element) {
                    _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element])
                });
                return parent
            };
            _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
                if (element) {
                    var isOpen = $$$1(element).hasClass(ClassName.SHOW);
                    if (triggerArray.length > 0) {
                        $$$1(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen)
                    }
                }
            };
            Collapse._getTargetFromElement = function _getTargetFromElement(element) {
                var selector = Util.getSelectorFromElement(element);
                return selector ? $$$1(selector)[0] : null
            };
            Collapse._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function () {
                    var $this = $$$1(this);
                    var data = $this.data(DATA_KEY);
                    var _config = _extends({}, Default, $this.data(), typeof config === 'object' && config);
                    if (!data && _config.toggle && /show|hide/.test(config)) {
                        _config.toggle = !1
                    }
                    if (!data) {
                        data = new Collapse(this, _config);
                        $this.data(DATA_KEY, data)
                    }
                    if (typeof config === 'string') {
                        if (typeof data[config] === 'undefined') {
                            throw new TypeError("No method named \"" + config + "\"")
                        }
                        data[config]()
                    }
                })
            };
            _createClass(Collapse, null, [{
                key: "VERSION", get: function get() {
                    return VERSION
                }
            }, {
                key: "Default", get: function get() {
                    return Default
                }
            }]);
            return Collapse
        }();
        $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
            if (event.currentTarget.tagName === 'A') {
                event.preventDefault()
            }
            var $trigger = $$$1(this);
            var selector = Util.getSelectorFromElement(this);
            $$$1(selector).each(function () {
                var $target = $$$1(this);
                var data = $target.data(DATA_KEY);
                var config = data ? 'toggle' : $trigger.data();
                Collapse._jQueryInterface.call($target, config)
            })
        });
        $$$1.fn[NAME] = Collapse._jQueryInterface;
        $$$1.fn[NAME].Constructor = Collapse;
        $$$1.fn[NAME].noConflict = function () {
            $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
            return Collapse._jQueryInterface
        };
        return Collapse
    }($);
    var Dropdown = function ($$$1) {
        var NAME = 'dropdown';
        var VERSION = '4.0.0';
        var DATA_KEY = 'bs.dropdown';
        var EVENT_KEY = "." + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
        var ESCAPE_KEYCODE = 27;
        var SPACE_KEYCODE = 32;
        var TAB_KEYCODE = 9;
        var ARROW_UP_KEYCODE = 38;
        var ARROW_DOWN_KEYCODE = 40;
        var RIGHT_MOUSE_BUTTON_WHICH = 3;
        var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
        var Event = {
            HIDE: "hide" + EVENT_KEY,
            HIDDEN: "hidden" + EVENT_KEY,
            SHOW: "show" + EVENT_KEY,
            SHOWN: "shown" + EVENT_KEY,
            CLICK: "click" + EVENT_KEY,
            CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
            KEYDOWN_DATA_API: "keydown" + EVENT_KEY + DATA_API_KEY,
            KEYUP_DATA_API: "keyup" + EVENT_KEY + DATA_API_KEY
        };
        var ClassName = {
            DISABLED: 'disabled',
            SHOW: 'show',
            DROPUP: 'dropup',
            DROPRIGHT: 'dropright',
            DROPLEFT: 'dropleft',
            MENURIGHT: 'dropdown-menu-right',
            MENULEFT: 'dropdown-menu-left',
            POSITION_STATIC: 'position-static'
        };
        var Selector = {
            DATA_TOGGLE: '[data-toggle="dropdown"]',
            FORM_CHILD: '.dropdown form',
            MENU: '.dropdown-menu',
            NAVBAR_NAV: '.navbar-nav',
            VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled)'
        };
        var AttachmentMap = {
            TOP: 'top-start',
            TOPEND: 'top-end',
            BOTTOM: 'bottom-start',
            BOTTOMEND: 'bottom-end',
            RIGHT: 'right-start',
            RIGHTEND: 'right-end',
            LEFT: 'left-start',
            LEFTEND: 'left-end'
        };
        var Default = {offset: 0, flip: !0, boundary: 'scrollParent'};
        var DefaultType = {offset: '(number|string|function)', flip: 'boolean', boundary: '(string|element)'};
        var Dropdown = function () {
            function Dropdown(element, config) {
                this._element = element;
                this._popper = null;
                this._config = this._getConfig(config);
                this._menu = this._getMenuElement();
                this._inNavbar = this._detectNavbar();
                this._addEventListeners()
            }

            var _proto = Dropdown.prototype;
            _proto.toggle = function toggle() {
                if (this._element.disabled || $$$1(this._element).hasClass(ClassName.DISABLED)) {
                    return
                }
                var parent = Dropdown._getParentFromElement(this._element);
                var isActive = $$$1(this._menu).hasClass(ClassName.SHOW);
                Dropdown._clearMenus();
                if (isActive) {
                    return
                }
                var relatedTarget = {relatedTarget: this._element};
                var showEvent = $$$1.Event(Event.SHOW, relatedTarget);
                $$$1(parent).trigger(showEvent);
                if (showEvent.isDefaultPrevented()) {
                    return
                }
                if (!this._inNavbar) {
                    if (typeof Popper === 'undefined') {
                        throw new TypeError('Bootstrap dropdown require Popper.js (https://popper.js.org)')
                    }
                    var element = this._element;
                    if ($$$1(parent).hasClass(ClassName.DROPUP)) {
                        if ($$$1(this._menu).hasClass(ClassName.MENULEFT) || $$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
                            element = parent
                        }
                    }
                    if (this._config.boundary !== 'scrollParent') {
                        $$$1(parent).addClass(ClassName.POSITION_STATIC)
                    }
                    this._popper = new Popper(element, this._menu, this._getPopperConfig())
                }
                if ('ontouchstart' in document.documentElement && $$$1(parent).closest(Selector.NAVBAR_NAV).length === 0) {
                    $$$1('body').children().on('mouseover', null, $$$1.noop)
                }
                this._element.focus();
                this._element.setAttribute('aria-expanded', !0);
                $$$1(this._menu).toggleClass(ClassName.SHOW);
                $$$1(parent).toggleClass(ClassName.SHOW).trigger($$$1.Event(Event.SHOWN, relatedTarget))
            };
            _proto.dispose = function dispose() {
                $$$1.removeData(this._element, DATA_KEY);
                $$$1(this._element).off(EVENT_KEY);
                this._element = null;
                this._menu = null;
                if (this._popper !== null) {
                    this._popper.destroy();
                    this._popper = null
                }
            };
            _proto.update = function update() {
                this._inNavbar = this._detectNavbar();
                if (this._popper !== null) {
                    this._popper.scheduleUpdate()
                }
            };
            _proto._addEventListeners = function _addEventListeners() {
                var _this = this;
                $$$1(this._element).on(Event.CLICK, function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    _this.toggle()
                })
            };
            _proto._getConfig = function _getConfig(config) {
                config = _extends({}, this.constructor.Default, $$$1(this._element).data(), config);
                Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
                return config
            };
            _proto._getMenuElement = function _getMenuElement() {
                if (!this._menu) {
                    var parent = Dropdown._getParentFromElement(this._element);
                    this._menu = $$$1(parent).find(Selector.MENU)[0]
                }
                return this._menu
            };
            _proto._getPlacement = function _getPlacement() {
                var $parentDropdown = $$$1(this._element).parent();
                var placement = AttachmentMap.BOTTOM;
                if ($parentDropdown.hasClass(ClassName.DROPUP)) {
                    placement = AttachmentMap.TOP;
                    if ($$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
                        placement = AttachmentMap.TOPEND
                    }
                } else if ($parentDropdown.hasClass(ClassName.DROPRIGHT)) {
                    placement = AttachmentMap.RIGHT
                } else if ($parentDropdown.hasClass(ClassName.DROPLEFT)) {
                    placement = AttachmentMap.LEFT
                } else if ($$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
                    placement = AttachmentMap.BOTTOMEND
                }
                return placement
            };
            _proto._detectNavbar = function _detectNavbar() {
                return $$$1(this._element).closest('.navbar').length > 0
            };
            _proto._getPopperConfig = function _getPopperConfig() {
                var _this2 = this;
                var offsetConf = {};
                if (typeof this._config.offset === 'function') {
                    offsetConf.fn = function (data) {
                        data.offsets = _extends({}, data.offsets, _this2._config.offset(data.offsets) || {});
                        return data
                    }
                } else {
                    offsetConf.offset = this._config.offset
                }
                var popperConfig = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: offsetConf,
                        flip: {enabled: this._config.flip},
                        preventOverflow: {boundariesElement: this._config.boundary}
                    }
                };
                return popperConfig
            };
            Dropdown._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function () {
                    var data = $$$1(this).data(DATA_KEY);
                    var _config = typeof config === 'object' ? config : null;
                    if (!data) {
                        data = new Dropdown(this, _config);
                        $$$1(this).data(DATA_KEY, data)
                    }
                    if (typeof config === 'string') {
                        if (typeof data[config] === 'undefined') {
                            throw new TypeError("No method named \"" + config + "\"")
                        }
                        data[config]()
                    }
                })
            };
            Dropdown._clearMenus = function _clearMenus(event) {
                if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
                    return
                }
                var toggles = $$$1.makeArray($$$1(Selector.DATA_TOGGLE));
                for (var i = 0; i < toggles.length; i++) {
                    var parent = Dropdown._getParentFromElement(toggles[i]);
                    var context = $$$1(toggles[i]).data(DATA_KEY);
                    var relatedTarget = {relatedTarget: toggles[i]};
                    if (!context) {
                        continue
                    }
                    var dropdownMenu = context._menu;
                    if (!$$$1(parent).hasClass(ClassName.SHOW)) {
                        continue
                    }
                    if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $$$1.contains(parent, event.target)) {
                        continue
                    }
                    var hideEvent = $$$1.Event(Event.HIDE, relatedTarget);
                    $$$1(parent).trigger(hideEvent);
                    if (hideEvent.isDefaultPrevented()) {
                        continue
                    }
                    if ('ontouchstart' in document.documentElement) {
                        $$$1('body').children().off('mouseover', null, $$$1.noop)
                    }
                    toggles[i].setAttribute('aria-expanded', 'false');
                    $$$1(dropdownMenu).removeClass(ClassName.SHOW);
                    $$$1(parent).removeClass(ClassName.SHOW).trigger($$$1.Event(Event.HIDDEN, relatedTarget))
                }
            };
            Dropdown._getParentFromElement = function _getParentFromElement(element) {
                var parent;
                var selector = Util.getSelectorFromElement(element);
                if (selector) {
                    parent = $$$1(selector)[0]
                }
                return parent || element.parentNode
            };
            Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
                if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $$$1(event.target).closest(Selector.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
                    return
                }
                event.preventDefault();
                event.stopPropagation();
                if (this.disabled || $$$1(this).hasClass(ClassName.DISABLED)) {
                    return
                }
                var parent = Dropdown._getParentFromElement(this);
                var isActive = $$$1(parent).hasClass(ClassName.SHOW);
                if (!isActive && (event.which !== ESCAPE_KEYCODE || event.which !== SPACE_KEYCODE) || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
                    if (event.which === ESCAPE_KEYCODE) {
                        var toggle = $$$1(parent).find(Selector.DATA_TOGGLE)[0];
                        $$$1(toggle).trigger('focus')
                    }
                    $$$1(this).trigger('click');
                    return
                }
                var items = $$$1(parent).find(Selector.VISIBLE_ITEMS).get();
                if (items.length === 0) {
                    return
                }
                var index = items.indexOf(event.target);
                if (event.which === ARROW_UP_KEYCODE && index > 0) {
                    index--
                }
                if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
                    index++
                }
                if (index < 0) {
                    index = 0
                }
                items[index].focus()
            };
            _createClass(Dropdown, null, [{
                key: "VERSION", get: function get() {
                    return VERSION
                }
            }, {
                key: "Default", get: function get() {
                    return Default
                }
            }, {
                key: "DefaultType", get: function get() {
                    return DefaultType
                }
            }]);
            return Dropdown
        }();
        $$$1(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + " " + Event.KEYUP_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
            event.preventDefault();
            event.stopPropagation();
            Dropdown._jQueryInterface.call($$$1(this), 'toggle')
        }).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
            e.stopPropagation()
        });
        $$$1.fn[NAME] = Dropdown._jQueryInterface;
        $$$1.fn[NAME].Constructor = Dropdown;
        $$$1.fn[NAME].noConflict = function () {
            $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
            return Dropdown._jQueryInterface
        };
        return Dropdown
    }($, Popper);
    var Modal = function ($$$1) {
        var NAME = 'modal';
        var VERSION = '4.0.0';
        var DATA_KEY = 'bs.modal';
        var EVENT_KEY = "." + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
        var TRANSITION_DURATION = 300;
        var BACKDROP_TRANSITION_DURATION = 150;
        var ESCAPE_KEYCODE = 27;
        var Default = {backdrop: !0, keyboard: !0, focus: !0, show: !0};
        var DefaultType = {backdrop: '(boolean|string)', keyboard: 'boolean', focus: 'boolean', show: 'boolean'};
        var Event = {
            HIDE: "hide" + EVENT_KEY,
            HIDDEN: "hidden" + EVENT_KEY,
            SHOW: "show" + EVENT_KEY,
            SHOWN: "shown" + EVENT_KEY,
            FOCUSIN: "focusin" + EVENT_KEY,
            RESIZE: "resize" + EVENT_KEY,
            CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
            KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY,
            MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY,
            CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
        };
        var ClassName = {
            SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
            BACKDROP: 'modal-backdrop',
            OPEN: 'modal-open',
            FADE: 'fade',
            SHOW: 'show'
        };
        var Selector = {
            DIALOG: '.modal-dialog',
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
            STICKY_CONTENT: '.sticky-top',
            NAVBAR_TOGGLER: '.navbar-toggler'
        };
        var Modal = function () {
            function Modal(element, config) {
                this._config = this._getConfig(config);
                this._element = element;
                this._dialog = $$$1(element).find(Selector.DIALOG)[0];
                this._backdrop = null;
                this._isShown = !1;
                this._isBodyOverflowing = !1;
                this._ignoreBackdropClick = !1;
                this._originalBodyPadding = 0;
                this._scrollbarWidth = 0
            }

            var _proto = Modal.prototype;
            _proto.toggle = function toggle(relatedTarget) {
                return this._isShown ? this.hide() : this.show(relatedTarget)
            };
            _proto.show = function show(relatedTarget) {
                var _this = this;
                if (this._isTransitioning || this._isShown) {
                    return
                }
                if (Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE)) {
                    this._isTransitioning = !0
                }
                var showEvent = $$$1.Event(Event.SHOW, {relatedTarget: relatedTarget});
                $$$1(this._element).trigger(showEvent);
                if (this._isShown || showEvent.isDefaultPrevented()) {
                    return
                }
                this._isShown = !0;
                this._checkScrollbar();
                this._setScrollbar();
                this._adjustDialog();
                $$$1(document.body).addClass(ClassName.OPEN);
                this._setEscapeEvent();
                this._setResizeEvent();
                $$$1(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
                    return _this.hide(event)
                });
                $$$1(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
                    $$$1(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
                        if ($$$1(event.target).is(_this._element)) {
                            _this._ignoreBackdropClick = !0
                        }
                    })
                });
                this._showBackdrop(function () {
                    return _this._showElement(relatedTarget)
                })
            };
            _proto.hide = function hide(event) {
                var _this2 = this;
                if (event) {
                    event.preventDefault()
                }
                if (this._isTransitioning || !this._isShown) {
                    return
                }
                var hideEvent = $$$1.Event(Event.HIDE);
                $$$1(this._element).trigger(hideEvent);
                if (!this._isShown || hideEvent.isDefaultPrevented()) {
                    return
                }
                this._isShown = !1;
                var transition = Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE);
                if (transition) {
                    this._isTransitioning = !0
                }
                this._setEscapeEvent();
                this._setResizeEvent();
                $$$1(document).off(Event.FOCUSIN);
                $$$1(this._element).removeClass(ClassName.SHOW);
                $$$1(this._element).off(Event.CLICK_DISMISS);
                $$$1(this._dialog).off(Event.MOUSEDOWN_DISMISS);
                if (transition) {
                    $$$1(this._element).one(Util.TRANSITION_END, function (event) {
                        return _this2._hideModal(event)
                    }).emulateTransitionEnd(TRANSITION_DURATION)
                } else {
                    this._hideModal()
                }
            };
            _proto.dispose = function dispose() {
                $$$1.removeData(this._element, DATA_KEY);
                $$$1(window, document, this._element, this._backdrop).off(EVENT_KEY);
                this._config = null;
                this._element = null;
                this._dialog = null;
                this._backdrop = null;
                this._isShown = null;
                this._isBodyOverflowing = null;
                this._ignoreBackdropClick = null;
                this._scrollbarWidth = null
            };
            _proto.handleUpdate = function handleUpdate() {
                this._adjustDialog()
            };
            _proto._getConfig = function _getConfig(config) {
                config = _extends({}, Default, config);
                Util.typeCheckConfig(NAME, config, DefaultType);
                return config
            };
            _proto._showElement = function _showElement(relatedTarget) {
                var _this3 = this;
                var transition = Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE);
                if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
                    document.body.appendChild(this._element)
                }
                this._element.style.display = 'block';
                this._element.removeAttribute('aria-hidden');
                this._element.scrollTop = 0;
                if (transition) {
                    Util.reflow(this._element)
                }
                $$$1(this._element).addClass(ClassName.SHOW);
                if (this._config.focus) {
                    this._enforceFocus()
                }
                var shownEvent = $$$1.Event(Event.SHOWN, {relatedTarget: relatedTarget});
                var transitionComplete = function transitionComplete() {
                    if (_this3._config.focus) {
                        _this3._element.focus()
                    }
                    _this3._isTransitioning = !1;
                    $$$1(_this3._element).trigger(shownEvent)
                };
                if (transition) {
                    $$$1(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION)
                } else {
                    transitionComplete()
                }
            };
            _proto._enforceFocus = function _enforceFocus() {
                var _this4 = this;
                $$$1(document).off(Event.FOCUSIN).on(Event.FOCUSIN, function (event) {
                    if (document !== event.target && _this4._element !== event.target && $$$1(_this4._element).has(event.target).length === 0) {
                        _this4._element.focus()
                    }
                })
            };
            _proto._setEscapeEvent = function _setEscapeEvent() {
                var _this5 = this;
                if (this._isShown && this._config.keyboard) {
                    $$$1(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
                        if (event.which === ESCAPE_KEYCODE) {
                            event.preventDefault();
                            _this5.hide()
                        }
                    })
                } else if (!this._isShown) {
                    $$$1(this._element).off(Event.KEYDOWN_DISMISS)
                }
            };
            _proto._setResizeEvent = function _setResizeEvent() {
                var _this6 = this;
                if (this._isShown) {
                    $$$1(window).on(Event.RESIZE, function (event) {
                        return _this6.handleUpdate(event)
                    })
                } else {
                    $$$1(window).off(Event.RESIZE)
                }
            };
            _proto._hideModal = function _hideModal() {
                var _this7 = this;
                this._element.style.display = 'none';
                this._element.setAttribute('aria-hidden', !0);
                this._isTransitioning = !1;
                this._showBackdrop(function () {
                    $$$1(document.body).removeClass(ClassName.OPEN);
                    _this7._resetAdjustments();
                    _this7._resetScrollbar();
                    $$$1(_this7._element).trigger(Event.HIDDEN)
                })
            };
            _proto._removeBackdrop = function _removeBackdrop() {
                if (this._backdrop) {
                    $$$1(this._backdrop).remove();
                    this._backdrop = null
                }
            };
            _proto._showBackdrop = function _showBackdrop(callback) {
                var _this8 = this;
                var animate = $$$1(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';
                if (this._isShown && this._config.backdrop) {
                    var doAnimate = Util.supportsTransitionEnd() && animate;
                    this._backdrop = document.createElement('div');
                    this._backdrop.className = ClassName.BACKDROP;
                    if (animate) {
                        $$$1(this._backdrop).addClass(animate)
                    }
                    $$$1(this._backdrop).appendTo(document.body);
                    $$$1(this._element).on(Event.CLICK_DISMISS, function (event) {
                        if (_this8._ignoreBackdropClick) {
                            _this8._ignoreBackdropClick = !1;
                            return
                        }
                        if (event.target !== event.currentTarget) {
                            return
                        }
                        if (_this8._config.backdrop === 'static') {
                            _this8._element.focus()
                        } else {
                            _this8.hide()
                        }
                    });
                    if (doAnimate) {
                        Util.reflow(this._backdrop)
                    }
                    $$$1(this._backdrop).addClass(ClassName.SHOW);
                    if (!callback) {
                        return
                    }
                    if (!doAnimate) {
                        callback();
                        return
                    }
                    $$$1(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION)
                } else if (!this._isShown && this._backdrop) {
                    $$$1(this._backdrop).removeClass(ClassName.SHOW);
                    var callbackRemove = function callbackRemove() {
                        _this8._removeBackdrop();
                        if (callback) {
                            callback()
                        }
                    };
                    if (Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE)) {
                        $$$1(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION)
                    } else {
                        callbackRemove()
                    }
                } else if (callback) {
                    callback()
                }
            };
            _proto._adjustDialog = function _adjustDialog() {
                var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
                if (!this._isBodyOverflowing && isModalOverflowing) {
                    this._element.style.paddingLeft = this._scrollbarWidth + "px"
                }
                if (this._isBodyOverflowing && !isModalOverflowing) {
                    this._element.style.paddingRight = this._scrollbarWidth + "px"
                }
            };
            _proto._resetAdjustments = function _resetAdjustments() {
                this._element.style.paddingLeft = '';
                this._element.style.paddingRight = ''
            };
            _proto._checkScrollbar = function _checkScrollbar() {
                var rect = document.body.getBoundingClientRect();
                this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
                this._scrollbarWidth = this._getScrollbarWidth()
            };
            _proto._setScrollbar = function _setScrollbar() {
                var _this9 = this;
                if (this._isBodyOverflowing) {
                    $$$1(Selector.FIXED_CONTENT).each(function (index, element) {
                        var actualPadding = $$$1(element)[0].style.paddingRight;
                        var calculatedPadding = $$$1(element).css('padding-right');
                        $$$1(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px")
                    });
                    $$$1(Selector.STICKY_CONTENT).each(function (index, element) {
                        var actualMargin = $$$1(element)[0].style.marginRight;
                        var calculatedMargin = $$$1(element).css('margin-right');
                        $$$1(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px")
                    });
                    $$$1(Selector.NAVBAR_TOGGLER).each(function (index, element) {
                        var actualMargin = $$$1(element)[0].style.marginRight;
                        var calculatedMargin = $$$1(element).css('margin-right');
                        $$$1(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) + _this9._scrollbarWidth + "px")
                    });
                    var actualPadding = document.body.style.paddingRight;
                    var calculatedPadding = $$$1('body').css('padding-right');
                    $$$1('body').data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px")
                }
            };
            _proto._resetScrollbar = function _resetScrollbar() {
                $$$1(Selector.FIXED_CONTENT).each(function (index, element) {
                    var padding = $$$1(element).data('padding-right');
                    if (typeof padding !== 'undefined') {
                        $$$1(element).css('padding-right', padding).removeData('padding-right')
                    }
                });
                $$$1(Selector.STICKY_CONTENT + ", " + Selector.NAVBAR_TOGGLER).each(function (index, element) {
                    var margin = $$$1(element).data('margin-right');
                    if (typeof margin !== 'undefined') {
                        $$$1(element).css('margin-right', margin).removeData('margin-right')
                    }
                });
                var padding = $$$1('body').data('padding-right');
                if (typeof padding !== 'undefined') {
                    $$$1('body').css('padding-right', padding).removeData('padding-right')
                }
            };
            _proto._getScrollbarWidth = function _getScrollbarWidth() {
                var scrollDiv = document.createElement('div');
                scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
                document.body.appendChild(scrollDiv);
                var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
                document.body.removeChild(scrollDiv);
                return scrollbarWidth
            };
            Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
                return this.each(function () {
                    var data = $$$1(this).data(DATA_KEY);
                    var _config = _extends({}, Modal.Default, $$$1(this).data(), typeof config === 'object' && config);
                    if (!data) {
                        data = new Modal(this, _config);
                        $$$1(this).data(DATA_KEY, data)
                    }
                    if (typeof config === 'string') {
                        if (typeof data[config] === 'undefined') {
                            throw new TypeError("No method named \"" + config + "\"")
                        }
                        data[config](relatedTarget)
                    } else if (_config.show) {
                        data.show(relatedTarget)
                    }
                })
            };
            _createClass(Modal, null, [{
                key: "VERSION", get: function get() {
                    return VERSION
                }
            }, {
                key: "Default", get: function get() {
                    return Default
                }
            }]);
            return Modal
        }();
        $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
            var _this10 = this;
            var target;
            var selector = Util.getSelectorFromElement(this);
            if (selector) {
                target = $$$1(selector)[0]
            }
            var config = $$$1(target).data(DATA_KEY) ? 'toggle' : _extends({}, $$$1(target).data(), $$$1(this).data());
            if (this.tagName === 'A' || this.tagName === 'AREA') {
                event.preventDefault()
            }
            var $target = $$$1(target).one(Event.SHOW, function (showEvent) {
                if (showEvent.isDefaultPrevented()) {
                    return
                }
                $target.one(Event.HIDDEN, function () {
                    if ($$$1(_this10).is(':visible')) {
                        _this10.focus()
                    }
                })
            });
            Modal._jQueryInterface.call($$$1(target), config, this)
        });
        $$$1.fn[NAME] = Modal._jQueryInterface;
        $$$1.fn[NAME].Constructor = Modal;
        $$$1.fn[NAME].noConflict = function () {
            $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
            return Modal._jQueryInterface
        };
        return Modal
    }($);
    var Tooltip = function ($$$1) {
        var NAME = 'tooltip';
        var VERSION = '4.0.0';
        var DATA_KEY = 'bs.tooltip';
        var EVENT_KEY = "." + DATA_KEY;
        var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
        var TRANSITION_DURATION = 150;
        var CLASS_PREFIX = 'bs-tooltip';
        var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
        var DefaultType = {
            animation: 'boolean',
            template: 'string',
            title: '(string|element|function)',
            trigger: 'string',
            delay: '(number|object)',
            html: 'boolean',
            selector: '(string|boolean)',
            placement: '(string|function)',
            offset: '(number|string)',
            container: '(string|element|boolean)',
            fallbackPlacement: '(string|array)',
            boundary: '(string|element)'
        };
        var AttachmentMap = {AUTO: 'auto', TOP: 'top', RIGHT: 'right', BOTTOM: 'bottom', LEFT: 'left'};
        var Default = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
            trigger: 'hover focus',
            title: '',
            delay: 0,
            html: !1,
            selector: !1,
            placement: 'top',
            offset: 0,
            container: !1,
            fallbackPlacement: 'flip',
            boundary: 'scrollParent'
        };
        var HoverState = {SHOW: 'show', OUT: 'out'};
        var Event = {
            HIDE: "hide" + EVENT_KEY,
            HIDDEN: "hidden" + EVENT_KEY,
            SHOW: "show" + EVENT_KEY,
            SHOWN: "shown" + EVENT_KEY,
            INSERTED: "inserted" + EVENT_KEY,
            CLICK: "click" + EVENT_KEY,
            FOCUSIN: "focusin" + EVENT_KEY,
            FOCUSOUT: "focusout" + EVENT_KEY,
            MOUSEENTER: "mouseenter" + EVENT_KEY,
            MOUSELEAVE: "mouseleave" + EVENT_KEY
        };
        var ClassName = {FADE: 'fade', SHOW: 'show'};
        var Selector = {TOOLTIP: '.tooltip', TOOLTIP_INNER: '.tooltip-inner', ARROW: '.arrow'};
        var Trigger = {HOVER: 'hover', FOCUS: 'focus', CLICK: 'click', MANUAL: 'manual'};
        var Tooltip = function () {
            function Tooltip(element, config) {
                if (typeof Popper === 'undefined') {
                    throw new TypeError('Bootstrap tooltips require Popper.js (https://popper.js.org)')
                }
                this._isEnabled = !0;
                this._timeout = 0;
                this._hoverState = '';
                this._activeTrigger = {};
                this._popper = null;
                this.element = element;
                this.config = this._getConfig(config);
                this.tip = null;
                this._setListeners()
            }

            var _proto = Tooltip.prototype;
            _proto.enable = function enable() {
                this._isEnabled = !0
            };
            _proto.disable = function disable() {
                this._isEnabled = !1
            };
            _proto.toggleEnabled = function toggleEnabled() {
                this._isEnabled = !this._isEnabled
            };
            _proto.toggle = function toggle(event) {
                if (!this._isEnabled) {
                    return
                }
                if (event) {
                    var dataKey = this.constructor.DATA_KEY;
                    var context = $$$1(event.currentTarget).data(dataKey);
                    if (!context) {
                        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
                        $$$1(event.currentTarget).data(dataKey, context)
                    }
                    context._activeTrigger.click = !context._activeTrigger.click;
                    if (context._isWithActiveTrigger()) {
                        context._enter(null, context)
                    } else {
                        context._leave(null, context)
                    }
                } else {
                    if ($$$1(this.getTipElement()).hasClass(ClassName.SHOW)) {
                        this._leave(null, this);
                        return
                    }
                    this._enter(null, this)
                }
            };
            _proto.dispose = function dispose() {
                clearTimeout(this._timeout);
                $$$1.removeData(this.element, this.constructor.DATA_KEY);
                $$$1(this.element).off(this.constructor.EVENT_KEY);
                $$$1(this.element).closest('.modal').off('hide.bs.modal');
                if (this.tip) {
                    $$$1(this.tip).remove()
                }
                this._isEnabled = null;
                this._timeout = null;
                this._hoverState = null;
                this._activeTrigger = null;
                if (this._popper !== null) {
                    this._popper.destroy()
                }
                this._popper = null;
                this.element = null;
                this.config = null;
                this.tip = null
            };
            _proto.show = function show() {
                var _this = this;
                if ($$$1(this.element).css('display') === 'none') {
                    throw new Error('Please use show on visible elements')
                }
                var showEvent = $$$1.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    $$$1(this.element).trigger(showEvent);
                    var isInTheDom = $$$1.contains(this.element.ownerDocument.documentElement, this.element);
                    if (showEvent.isDefaultPrevented() || !isInTheDom) {
                        return
                    }
                    var tip = this.getTipElement();
                    var tipId = Util.getUID(this.constructor.NAME);
                    tip.setAttribute('id', tipId);
                    this.element.setAttribute('aria-describedby', tipId);
                    this.setContent();
                    if (this.config.animation) {
                        $$$1(tip).addClass(ClassName.FADE)
                    }
                    var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;
                    var attachment = this._getAttachment(placement);
                    this.addAttachmentClass(attachment);
                    var container = this.config.container === !1 ? document.body : $$$1(this.config.container);
                    $$$1(tip).data(this.constructor.DATA_KEY, this);
                    if (!$$$1.contains(this.element.ownerDocument.documentElement, this.tip)) {
                        $$$1(tip).appendTo(container)
                    }
                    $$$1(this.element).trigger(this.constructor.Event.INSERTED);
                    this._popper = new Popper(this.element, tip, {
                        placement: attachment,
                        modifiers: {
                            offset: {offset: this.config.offset},
                            flip: {behavior: this.config.fallbackPlacement},
                            arrow: {element: Selector.ARROW},
                            preventOverflow: {boundariesElement: this.config.boundary}
                        },
                        onCreate: function onCreate(data) {
                            if (data.originalPlacement !== data.placement) {
                                _this._handlePopperPlacementChange(data)
                            }
                        },
                        onUpdate: function onUpdate(data) {
                            _this._handlePopperPlacementChange(data)
                        }
                    });
                    $$$1(tip).addClass(ClassName.SHOW);
                    if ('ontouchstart' in document.documentElement) {
                        $$$1('body').children().on('mouseover', null, $$$1.noop)
                    }
                    var complete = function complete() {
                        if (_this.config.animation) {
                            _this._fixTransition()
                        }
                        var prevHoverState = _this._hoverState;
                        _this._hoverState = null;
                        $$$1(_this.element).trigger(_this.constructor.Event.SHOWN);
                        if (prevHoverState === HoverState.OUT) {
                            _this._leave(null, _this)
                        }
                    };
                    if (Util.supportsTransitionEnd() && $$$1(this.tip).hasClass(ClassName.FADE)) {
                        $$$1(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION)
                    } else {
                        complete()
                    }
                }
            };
            _proto.hide = function hide(callback) {
                var _this2 = this;
                var tip = this.getTipElement();
                var hideEvent = $$$1.Event(this.constructor.Event.HIDE);
                var complete = function complete() {
                    if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
                        tip.parentNode.removeChild(tip)
                    }
                    _this2._cleanTipClass();
                    _this2.element.removeAttribute('aria-describedby');
                    $$$1(_this2.element).trigger(_this2.constructor.Event.HIDDEN);
                    if (_this2._popper !== null) {
                        _this2._popper.destroy()
                    }
                    if (callback) {
                        callback()
                    }
                };
                $$$1(this.element).trigger(hideEvent);
                if (hideEvent.isDefaultPrevented()) {
                    return
                }
                $$$1(tip).removeClass(ClassName.SHOW);
                if ('ontouchstart' in document.documentElement) {
                    $$$1('body').children().off('mouseover', null, $$$1.noop)
                }
                this._activeTrigger[Trigger.CLICK] = !1;
                this._activeTrigger[Trigger.FOCUS] = !1;
                this._activeTrigger[Trigger.HOVER] = !1;
                if (Util.supportsTransitionEnd() && $$$1(this.tip).hasClass(ClassName.FADE)) {
                    $$$1(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION)
                } else {
                    complete()
                }
                this._hoverState = ''
            };
            _proto.update = function update() {
                if (this._popper !== null) {
                    this._popper.scheduleUpdate()
                }
            };
            _proto.isWithContent = function isWithContent() {
                return Boolean(this.getTitle())
            };
            _proto.addAttachmentClass = function addAttachmentClass(attachment) {
                $$$1(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment)
            };
            _proto.getTipElement = function getTipElement() {
                this.tip = this.tip || $$$1(this.config.template)[0];
                return this.tip
            };
            _proto.setContent = function setContent() {
                var $tip = $$$1(this.getTipElement());
                this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());
                $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW)
            };
            _proto.setElementContent = function setElementContent($element, content) {
                var html = this.config.html;
                if (typeof content === 'object' && (content.nodeType || content.jquery)) {
                    if (html) {
                        if (!$$$1(content).parent().is($element)) {
                            $element.empty().append(content)
                        }
                    } else {
                        $element.text($$$1(content).text())
                    }
                } else {
                    $element[html ? 'html' : 'text'](content)
                }
            };
            _proto.getTitle = function getTitle() {
                var title = this.element.getAttribute('data-original-title');
                if (!title) {
                    title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title
                }
                return title
            };
            _proto._getAttachment = function _getAttachment(placement) {
                return AttachmentMap[placement.toUpperCase()]
            };
            _proto._setListeners = function _setListeners() {
                var _this3 = this;
                var triggers = this.config.trigger.split(' ');
                triggers.forEach(function (trigger) {
                    if (trigger === 'click') {
                        $$$1(_this3.element).on(_this3.constructor.Event.CLICK, _this3.config.selector, function (event) {
                            return _this3.toggle(event)
                        })
                    } else if (trigger !== Trigger.MANUAL) {
                        var eventIn = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSEENTER : _this3.constructor.Event.FOCUSIN;
                        var eventOut = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSELEAVE : _this3.constructor.Event.FOCUSOUT;
                        $$$1(_this3.element).on(eventIn, _this3.config.selector, function (event) {
                            return _this3._enter(event)
                        }).on(eventOut, _this3.config.selector, function (event) {
                            return _this3._leave(event)
                        })
                    }
                    $$$1(_this3.element).closest('.modal').on('hide.bs.modal', function () {
                        return _this3.hide()
                    })
                });
                if (this.config.selector) {
                    this.config = _extends({}, this.config, {trigger: 'manual', selector: ''})
                } else {
                    this._fixTitle()
                }
            };
            _proto._fixTitle = function _fixTitle() {
                var titleType = typeof this.element.getAttribute('data-original-title');
                if (this.element.getAttribute('title') || titleType !== 'string') {
                    this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
                    this.element.setAttribute('title', '')
                }
            };
            _proto._enter = function _enter(event, context) {
                var dataKey = this.constructor.DATA_KEY;
                context = context || $$$1(event.currentTarget).data(dataKey);
                if (!context) {
                    context = new this.constructor(event.currentTarget, this._getDelegateConfig());
                    $$$1(event.currentTarget).data(dataKey, context)
                }
                if (event) {
                    context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = !0
                }
                if ($$$1(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {
                    context._hoverState = HoverState.SHOW;
                    return
                }
                clearTimeout(context._timeout);
                context._hoverState = HoverState.SHOW;
                if (!context.config.delay || !context.config.delay.show) {
                    context.show();
                    return
                }
                context._timeout = setTimeout(function () {
                    if (context._hoverState === HoverState.SHOW) {
                        context.show()
                    }
                }, context.config.delay.show)
            };
            _proto._leave = function _leave(event, context) {
                var dataKey = this.constructor.DATA_KEY;
                context = context || $$$1(event.currentTarget).data(dataKey);
                if (!context) {
                    context = new this.constructor(event.currentTarget, this._getDelegateConfig());
                    $$$1(event.currentTarget).data(dataKey, context)
                }
                if (event) {
                    context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = !1
                }
                if (context._isWithActiveTrigger()) {
                    return
                }
                clearTimeout(context._timeout);
                context._hoverState = HoverState.OUT;
                if (!context.config.delay || !context.config.delay.hide) {
                    context.hide();
                    return
                }
                context._timeout = setTimeout(function () {
                    if (context._hoverState === HoverState.OUT) {
                        context.hide()
                    }
                }, context.config.delay.hide)
            };
            _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
                for (var trigger in this._activeTrigger) {
                    if (this._activeTrigger[trigger]) {
                        return !0
                    }
                }
                return !1
            };
            _proto._getConfig = function _getConfig(config) {
                config = _extends({}, this.constructor.Default, $$$1(this.element).data(), config);
                if (typeof config.delay === 'number') {
                    config.delay = {show: config.delay, hide: config.delay}
                }
                if (typeof config.title === 'number') {
                    config.title = config.title.toString()
                }
                if (typeof config.content === 'number') {
                    config.content = config.content.toString()
                }
                Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
                return config
            };
            _proto._getDelegateConfig = function _getDelegateConfig() {
                var config = {};
                if (this.config) {
                    for (var key in this.config) {
                        if (this.constructor.Default[key] !== this.config[key]) {
                            config[key] = this.config[key]
                        }
                    }
                }
                return config
            };
            _proto._cleanTipClass = function _cleanTipClass() {
                var $tip = $$$1(this.getTipElement());
                var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);
                if (tabClass !== null && tabClass.length > 0) {
                    $tip.removeClass(tabClass.join(''))
                }
            };
            _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(data) {
                this._cleanTipClass();
                this.addAttachmentClass(this._getAttachment(data.placement))
            };
            _proto._fixTransition = function _fixTransition() {
                var tip = this.getTipElement();
                var initConfigAnimation = this.config.animation;
                if (tip.getAttribute('x-placement') !== null) {
                    return
                }
                $$$1(tip).removeClass(ClassName.FADE);
                this.config.animation = !1;
                this.hide();
                this.show();
                this.config.animation = initConfigAnimation
            };
            Tooltip._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function () {
                    var data = $$$1(this).data(DATA_KEY);
                    var _config = typeof config === 'object' && config;
                    if (!data && /dispose|hide/.test(config)) {
                        return
                    }
                    if (!data) {
                        data = new Tooltip(this, _config);
                        $$$1(this).data(DATA_KEY, data)
                    }
                    if (typeof config === 'string') {
                        if (typeof data[config] === 'undefined') {
                            throw new TypeError("No method named \"" + config + "\"")
                        }
                        data[config]()
                    }
                })
            };
            _createClass(Tooltip, null, [{
                key: "VERSION", get: function get() {
                    return VERSION
                }
            }, {
                key: "Default", get: function get() {
                    return Default
                }
            }, {
                key: "NAME", get: function get() {
                    return NAME
                }
            }, {
                key: "DATA_KEY", get: function get() {
                    return DATA_KEY
                }
            }, {
                key: "Event", get: function get() {
                    return Event
                }
            }, {
                key: "EVENT_KEY", get: function get() {
                    return EVENT_KEY
                }
            }, {
                key: "DefaultType", get: function get() {
                    return DefaultType
                }
            }]);
            return Tooltip
        }();
        $$$1.fn[NAME] = Tooltip._jQueryInterface;
        $$$1.fn[NAME].Constructor = Tooltip;
        $$$1.fn[NAME].noConflict = function () {
            $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
            return Tooltip._jQueryInterface
        };
        return Tooltip
    }($, Popper);
    var Popover = function ($$$1) {
        var NAME = 'popover';
        var VERSION = '4.0.0';
        var DATA_KEY = 'bs.popover';
        var EVENT_KEY = "." + DATA_KEY;
        var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
        var CLASS_PREFIX = 'bs-popover';
        var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
        var Default = _extends({}, Tooltip.Default, {
            placement: 'right',
            trigger: 'click',
            content: '',
            template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
        });
        var DefaultType = _extends({}, Tooltip.DefaultType, {content: '(string|element|function)'});
        var ClassName = {FADE: 'fade', SHOW: 'show'};
        var Selector = {TITLE: '.popover-header', CONTENT: '.popover-body'};
        var Event = {
            HIDE: "hide" + EVENT_KEY,
            HIDDEN: "hidden" + EVENT_KEY,
            SHOW: "show" + EVENT_KEY,
            SHOWN: "shown" + EVENT_KEY,
            INSERTED: "inserted" + EVENT_KEY,
            CLICK: "click" + EVENT_KEY,
            FOCUSIN: "focusin" + EVENT_KEY,
            FOCUSOUT: "focusout" + EVENT_KEY,
            MOUSEENTER: "mouseenter" + EVENT_KEY,
            MOUSELEAVE: "mouseleave" + EVENT_KEY
        };
        var Popover = function (_Tooltip) {
            _inheritsLoose(Popover, _Tooltip);

            function Popover() {
                return _Tooltip.apply(this, arguments) || this
            }

            var _proto = Popover.prototype;
            _proto.isWithContent = function isWithContent() {
                return this.getTitle() || this._getContent()
            };
            _proto.addAttachmentClass = function addAttachmentClass(attachment) {
                $$$1(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment)
            };
            _proto.getTipElement = function getTipElement() {
                this.tip = this.tip || $$$1(this.config.template)[0];
                return this.tip
            };
            _proto.setContent = function setContent() {
                var $tip = $$$1(this.getTipElement());
                this.setElementContent($tip.find(Selector.TITLE), this.getTitle());
                var content = this._getContent();
                if (typeof content === 'function') {
                    content = content.call(this.element)
                }
                this.setElementContent($tip.find(Selector.CONTENT), content);
                $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW)
            };
            _proto._getContent = function _getContent() {
                return this.element.getAttribute('data-content') || this.config.content
            };
            _proto._cleanTipClass = function _cleanTipClass() {
                var $tip = $$$1(this.getTipElement());
                var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);
                if (tabClass !== null && tabClass.length > 0) {
                    $tip.removeClass(tabClass.join(''))
                }
            };
            Popover._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function () {
                    var data = $$$1(this).data(DATA_KEY);
                    var _config = typeof config === 'object' ? config : null;
                    if (!data && /destroy|hide/.test(config)) {
                        return
                    }
                    if (!data) {
                        data = new Popover(this, _config);
                        $$$1(this).data(DATA_KEY, data)
                    }
                    if (typeof config === 'string') {
                        if (typeof data[config] === 'undefined') {
                            throw new TypeError("No method named \"" + config + "\"")
                        }
                        data[config]()
                    }
                })
            };
            _createClass(Popover, null, [{
                key: "VERSION", get: function get() {
                    return VERSION
                }
            }, {
                key: "Default", get: function get() {
                    return Default
                }
            }, {
                key: "NAME", get: function get() {
                    return NAME
                }
            }, {
                key: "DATA_KEY", get: function get() {
                    return DATA_KEY
                }
            }, {
                key: "Event", get: function get() {
                    return Event
                }
            }, {
                key: "EVENT_KEY", get: function get() {
                    return EVENT_KEY
                }
            }, {
                key: "DefaultType", get: function get() {
                    return DefaultType
                }
            }]);
            return Popover
        }(Tooltip);
        $$$1.fn[NAME] = Popover._jQueryInterface;
        $$$1.fn[NAME].Constructor = Popover;
        $$$1.fn[NAME].noConflict = function () {
            $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
            return Popover._jQueryInterface
        };
        return Popover
    }($);
    var ScrollSpy = function ($$$1) {
        var NAME = 'scrollspy';
        var VERSION = '4.0.0';
        var DATA_KEY = 'bs.scrollspy';
        var EVENT_KEY = "." + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
        var Default = {offset: 10, method: 'auto', target: ''};
        var DefaultType = {offset: 'number', method: 'string', target: '(string|element)'};
        var Event = {
            ACTIVATE: "activate" + EVENT_KEY,
            SCROLL: "scroll" + EVENT_KEY,
            LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY
        };
        var ClassName = {DROPDOWN_ITEM: 'dropdown-item', DROPDOWN_MENU: 'dropdown-menu', ACTIVE: 'active'};
        var Selector = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: '.active',
            NAV_LIST_GROUP: '.nav, .list-group',
            NAV_LINKS: '.nav-link',
            NAV_ITEMS: '.nav-item',
            LIST_ITEMS: '.list-group-item',
            DROPDOWN: '.dropdown',
            DROPDOWN_ITEMS: '.dropdown-item',
            DROPDOWN_TOGGLE: '.dropdown-toggle'
        };
        var OffsetMethod = {OFFSET: 'offset', POSITION: 'position'};
        var ScrollSpy = function () {
            function ScrollSpy(element, config) {
                var _this = this;
                this._element = element;
                this._scrollElement = element.tagName === 'BODY' ? window : element;
                this._config = this._getConfig(config);
                this._selector = this._config.target + " " + Selector.NAV_LINKS + "," + (this._config.target + " " + Selector.LIST_ITEMS + ",") + (this._config.target + " " + Selector.DROPDOWN_ITEMS);
                this._offsets = [];
                this._targets = [];
                this._activeTarget = null;
                this._scrollHeight = 0;
                $$$1(this._scrollElement).on(Event.SCROLL, function (event) {
                    return _this._process(event)
                });
                this.refresh();
                this._process()
            }

            var _proto = ScrollSpy.prototype;
            _proto.refresh = function refresh() {
                var _this2 = this;
                var autoMethod = this._scrollElement === this._scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;
                var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
                var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
                this._offsets = [];
                this._targets = [];
                this._scrollHeight = this._getScrollHeight();
                var targets = $$$1.makeArray($$$1(this._selector));
                targets.map(function (element) {
                    var target;
                    var targetSelector = Util.getSelectorFromElement(element);
                    if (targetSelector) {
                        target = $$$1(targetSelector)[0]
                    }
                    if (target) {
                        var targetBCR = target.getBoundingClientRect();
                        if (targetBCR.width || targetBCR.height) {
                            return [$$$1(target)[offsetMethod]().top + offsetBase, targetSelector]
                        }
                    }
                    return null
                }).filter(function (item) {
                    return item
                }).sort(function (a, b) {
                    return a[0] - b[0]
                }).forEach(function (item) {
                    _this2._offsets.push(item[0]);
                    _this2._targets.push(item[1])
                })
            };
            _proto.dispose = function dispose() {
                $$$1.removeData(this._element, DATA_KEY);
                $$$1(this._scrollElement).off(EVENT_KEY);
                this._element = null;
                this._scrollElement = null;
                this._config = null;
                this._selector = null;
                this._offsets = null;
                this._targets = null;
                this._activeTarget = null;
                this._scrollHeight = null
            };
            _proto._getConfig = function _getConfig(config) {
                config = _extends({}, Default, config);
                if (typeof config.target !== 'string') {
                    var id = $$$1(config.target).attr('id');
                    if (!id) {
                        id = Util.getUID(NAME);
                        $$$1(config.target).attr('id', id)
                    }
                    config.target = "#" + id
                }
                Util.typeCheckConfig(NAME, config, DefaultType);
                return config
            };
            _proto._getScrollTop = function _getScrollTop() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            };
            _proto._getScrollHeight = function _getScrollHeight() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            };
            _proto._getOffsetHeight = function _getOffsetHeight() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            };
            _proto._process = function _process() {
                var scrollTop = this._getScrollTop() + this._config.offset;
                var scrollHeight = this._getScrollHeight();
                var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();
                if (this._scrollHeight !== scrollHeight) {
                    this.refresh()
                }
                if (scrollTop >= maxScroll) {
                    var target = this._targets[this._targets.length - 1];
                    if (this._activeTarget !== target) {
                        this._activate(target)
                    }
                    return
                }
                if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
                    this._activeTarget = null;
                    this._clear();
                    return
                }
                for (var i = this._offsets.length; i--;) {
                    var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);
                    if (isActiveTarget) {
                        this._activate(this._targets[i])
                    }
                }
            };
            _proto._activate = function _activate(target) {
                this._activeTarget = target;
                this._clear();
                var queries = this._selector.split(',');
                queries = queries.map(function (selector) {
                    return selector + "[data-target=\"" + target + "\"]," + (selector + "[href=\"" + target + "\"]")
                });
                var $link = $$$1(queries.join(','));
                if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
                    $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
                    $link.addClass(ClassName.ACTIVE)
                } else {
                    $link.addClass(ClassName.ACTIVE);
                    $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_LINKS + ", " + Selector.LIST_ITEMS).addClass(ClassName.ACTIVE);
                    $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_ITEMS).children(Selector.NAV_LINKS).addClass(ClassName.ACTIVE)
                }
                $$$1(this._scrollElement).trigger(Event.ACTIVATE, {relatedTarget: target})
            };
            _proto._clear = function _clear() {
                $$$1(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE)
            };
            ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function () {
                    var data = $$$1(this).data(DATA_KEY);
                    var _config = typeof config === 'object' && config;
                    if (!data) {
                        data = new ScrollSpy(this, _config);
                        $$$1(this).data(DATA_KEY, data)
                    }
                    if (typeof config === 'string') {
                        if (typeof data[config] === 'undefined') {
                            throw new TypeError("No method named \"" + config + "\"")
                        }
                        data[config]()
                    }
                })
            };
            _createClass(ScrollSpy, null, [{
                key: "VERSION", get: function get() {
                    return VERSION
                }
            }, {
                key: "Default", get: function get() {
                    return Default
                }
            }]);
            return ScrollSpy
        }();
        $$$1(window).on(Event.LOAD_DATA_API, function () {
            var scrollSpys = $$$1.makeArray($$$1(Selector.DATA_SPY));
            for (var i = scrollSpys.length; i--;) {
                var $spy = $$$1(scrollSpys[i]);
                ScrollSpy._jQueryInterface.call($spy, $spy.data())
            }
        });
        $$$1.fn[NAME] = ScrollSpy._jQueryInterface;
        $$$1.fn[NAME].Constructor = ScrollSpy;
        $$$1.fn[NAME].noConflict = function () {
            $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
            return ScrollSpy._jQueryInterface
        };
        return ScrollSpy
    }($);
    var Tab = function ($$$1) {
        var NAME = 'tab';
        var VERSION = '4.0.0';
        var DATA_KEY = 'bs.tab';
        var EVENT_KEY = "." + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
        var TRANSITION_DURATION = 150;
        var Event = {
            HIDE: "hide" + EVENT_KEY,
            HIDDEN: "hidden" + EVENT_KEY,
            SHOW: "show" + EVENT_KEY,
            SHOWN: "shown" + EVENT_KEY,
            CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
        };
        var ClassName = {
            DROPDOWN_MENU: 'dropdown-menu',
            ACTIVE: 'active',
            DISABLED: 'disabled',
            FADE: 'fade',
            SHOW: 'show'
        };
        var Selector = {
            DROPDOWN: '.dropdown',
            NAV_LIST_GROUP: '.nav, .list-group',
            ACTIVE: '.active',
            ACTIVE_UL: '> li > .active',
            DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            DROPDOWN_TOGGLE: '.dropdown-toggle',
            DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
        };
        var Tab = function () {
            function Tab(element) {
                this._element = element
            }

            var _proto = Tab.prototype;
            _proto.show = function show() {
                var _this = this;
                if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $$$1(this._element).hasClass(ClassName.ACTIVE) || $$$1(this._element).hasClass(ClassName.DISABLED)) {
                    return
                }
                var target;
                var previous;
                var listElement = $$$1(this._element).closest(Selector.NAV_LIST_GROUP)[0];
                var selector = Util.getSelectorFromElement(this._element);
                if (listElement) {
                    var itemSelector = listElement.nodeName === 'UL' ? Selector.ACTIVE_UL : Selector.ACTIVE;
                    previous = $$$1.makeArray($$$1(listElement).find(itemSelector));
                    previous = previous[previous.length - 1]
                }
                var hideEvent = $$$1.Event(Event.HIDE, {relatedTarget: this._element});
                var showEvent = $$$1.Event(Event.SHOW, {relatedTarget: previous});
                if (previous) {
                    $$$1(previous).trigger(hideEvent)
                }
                $$$1(this._element).trigger(showEvent);
                if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
                    return
                }
                if (selector) {
                    target = $$$1(selector)[0]
                }
                this._activate(this._element, listElement);
                var complete = function complete() {
                    var hiddenEvent = $$$1.Event(Event.HIDDEN, {relatedTarget: _this._element});
                    var shownEvent = $$$1.Event(Event.SHOWN, {relatedTarget: previous});
                    $$$1(previous).trigger(hiddenEvent);
                    $$$1(_this._element).trigger(shownEvent)
                };
                if (target) {
                    this._activate(target, target.parentNode, complete)
                } else {
                    complete()
                }
            };
            _proto.dispose = function dispose() {
                $$$1.removeData(this._element, DATA_KEY);
                this._element = null
            };
            _proto._activate = function _activate(element, container, callback) {
                var _this2 = this;
                var activeElements;
                if (container.nodeName === 'UL') {
                    activeElements = $$$1(container).find(Selector.ACTIVE_UL)
                } else {
                    activeElements = $$$1(container).children(Selector.ACTIVE)
                }
                var active = activeElements[0];
                var isTransitioning = callback && Util.supportsTransitionEnd() && active && $$$1(active).hasClass(ClassName.FADE);
                var complete = function complete() {
                    return _this2._transitionComplete(element, active, callback)
                };
                if (active && isTransitioning) {
                    $$$1(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION)
                } else {
                    complete()
                }
            };
            _proto._transitionComplete = function _transitionComplete(element, active, callback) {
                if (active) {
                    $$$1(active).removeClass(ClassName.SHOW + " " + ClassName.ACTIVE);
                    var dropdownChild = $$$1(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];
                    if (dropdownChild) {
                        $$$1(dropdownChild).removeClass(ClassName.ACTIVE)
                    }
                    if (active.getAttribute('role') === 'tab') {
                        active.setAttribute('aria-selected', !1)
                    }
                }
                $$$1(element).addClass(ClassName.ACTIVE);
                if (element.getAttribute('role') === 'tab') {
                    element.setAttribute('aria-selected', !0)
                }
                Util.reflow(element);
                $$$1(element).addClass(ClassName.SHOW);
                if (element.parentNode && $$$1(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {
                    var dropdownElement = $$$1(element).closest(Selector.DROPDOWN)[0];
                    if (dropdownElement) {
                        $$$1(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE)
                    }
                    element.setAttribute('aria-expanded', !0)
                }
                if (callback) {
                    callback()
                }
            };
            Tab._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function () {
                    var $this = $$$1(this);
                    var data = $this.data(DATA_KEY);
                    if (!data) {
                        data = new Tab(this);
                        $this.data(DATA_KEY, data)
                    }
                    if (typeof config === 'string') {
                        if (typeof data[config] === 'undefined') {
                            throw new TypeError("No method named \"" + config + "\"")
                        }
                        data[config]()
                    }
                })
            };
            _createClass(Tab, null, [{
                key: "VERSION", get: function get() {
                    return VERSION
                }
            }]);
            return Tab
        }();
        $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
            event.preventDefault();
            Tab._jQueryInterface.call($$$1(this), 'show')
        });
        $$$1.fn[NAME] = Tab._jQueryInterface;
        $$$1.fn[NAME].Constructor = Tab;
        $$$1.fn[NAME].noConflict = function () {
            $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
            return Tab._jQueryInterface
        };
        return Tab
    }($);
    (function ($$$1) {
        if (typeof $$$1 === 'undefined') {
            throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.')
        }
        var version = $$$1.fn.jquery.split(' ')[0].split('.');
        var minMajor = 1;
        var ltMajor = 2;
        var minMinor = 9;
        var minPatch = 1;
        var maxMajor = 4;
        if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
            throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0')
        }
    })($);
    exports.Util = Util;
    exports.Alert = Alert;
    exports.Button = Button;
    exports.Carousel = Carousel;
    exports.Collapse = Collapse;
    exports.Dropdown = Dropdown;
    exports.Modal = Modal;
    exports.Popover = Popover;
    exports.Scrollspy = ScrollSpy;
    exports.Tab = Tab;
    exports.Tooltip = Tooltip;
    Object.defineProperty(exports, '__esModule', {value: !0})
})));
!function (e) {
    function t() {
        e[n].glbl || (r = {
            $wndw: e(window),
            $docu: e(document),
            $html: e("html"),
            $body: e("body")
        }, i = {}, a = {}, o = {}, e.each([i, a, o], function (e, t) {
            t.add = function (e) {
                e = e.split(" ");
                for (var n = 0, s = e.length; s > n; n++) t[e[n]] = t.mm(e[n])
            }
        }), i.mm = function (e) {
            return "mm-" + e
        }, i.add("wrapper menu panels panel nopanel current highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen"), i.umm = function (e) {
            return "mm-" == e.slice(0, 3) && (e = e.slice(3)), e
        }, a.mm = function (e) {
            return "mm-" + e
        }, a.add("parent sub"), o.mm = function (e) {
            return e + ".mm"
        }, o.add("transitionend webkitTransitionEnd click scroll keydown mousedown mouseup touchstart touchmove touchend orientationchange"), e[n]._c = i, e[n]._d = a, e[n]._e = o, e[n].glbl = r)
    }

    var n = "mmenu", s = "5.6.4";
    if (!(e[n] && e[n].version > s)) {
        e[n] = function (e, t, n) {
            this.$menu = e, this._api = ["bind", "init", "update", "setSelected", "getInstance", "openPanel", "closePanel", "closeAllPanels"], this.opts = t, this.conf = n, this.vars = {}, this.cbck = {}, "function" == typeof this.___deprecated && this.___deprecated(), this._initMenu(), this._initAnchors();
            var s = this.$pnls.children();
            return this._initAddons(), this.init(s), "function" == typeof this.___debug && this.___debug(), this
        }, e[n].version = s, e[n].addons = {}, e[n].uniqueId = 0, e[n].defaults = {
            extensions: [],
            navbar: {add: !0, title: "Menu", titleLink: "panel"},
            onClick: {setSelected: !0},
            slidingSubmenus: !0
        }, e[n].configuration = {
            classNames: {
                divider: "Divider",
                inset: "Inset",
                panel: "Panel",
                selected: "Selected",
                spacer: "Spacer",
                vertical: "Vertical"
            }, clone: !1, openingInterval: 25, panelNodetype: "ul, ol, div", transitionDuration: 400
        }, e[n].prototype = {
            init: function (e) {
                e = e.not("." + i.nopanel), e = this._initPanels(e), this.trigger("init", e), this.trigger("update")
            }, update: function () {
                this.trigger("update")
            }, setSelected: function (e) {
                this.$menu.find("." + i.listview).children().removeClass(i.selected), e.addClass(i.selected), this.trigger("setSelected", e)
            }, openPanel: function (t) {
                var s = t.parent(), a = this;
                if (s.hasClass(i.vertical)) {
                    var o = s.parents("." + i.subopened);
                    if (o.length) return void this.openPanel(o.first());
                    s.addClass(i.opened), this.trigger("openPanel", t), this.trigger("openingPanel", t), this.trigger("openedPanel", t)
                } else {
                    if (t.hasClass(i.current)) return;
                    var r = this.$pnls.children("." + i.panel), l = r.filter("." + i.current);
                    r.removeClass(i.highest).removeClass(i.current).not(t).not(l).not("." + i.vertical).addClass(i.hidden), e[n].support.csstransitions || l.addClass(i.hidden), t.hasClass(i.opened) ? t.nextAll("." + i.opened).addClass(i.highest).removeClass(i.opened).removeClass(i.subopened) : (t.addClass(i.highest), l.addClass(i.subopened)), t.removeClass(i.hidden).addClass(i.current), a.trigger("openPanel", t), setTimeout(function () {
                        t.removeClass(i.subopened).addClass(i.opened), a.trigger("openingPanel", t), a.__transitionend(t, function () {
                            a.trigger("openedPanel", t)
                        }, a.conf.transitionDuration)
                    }, this.conf.openingInterval)
                }
            }, closePanel: function (e) {
                var t = e.parent();
                t.hasClass(i.vertical) && (t.removeClass(i.opened), this.trigger("closePanel", e), this.trigger("closingPanel", e), this.trigger("closedPanel", e))
            }, closeAllPanels: function () {
                this.$menu.find("." + i.listview).children().removeClass(i.selected).filter("." + i.vertical).removeClass(i.opened);
                var e = this.$pnls.children("." + i.panel), t = e.first();
                this.$pnls.children("." + i.panel).not(t).removeClass(i.subopened).removeClass(i.opened).removeClass(i.current).removeClass(i.highest).addClass(i.hidden), this.openPanel(t)
            }, togglePanel: function (e) {
                var t = e.parent();
                t.hasClass(i.vertical) && this[t.hasClass(i.opened) ? "closePanel" : "openPanel"](e)
            }, getInstance: function () {
                return this
            }, bind: function (e, t) {
                this.cbck[e] = this.cbck[e] || [], this.cbck[e].push(t)
            }, trigger: function () {
                var e = this, t = Array.prototype.slice.call(arguments), n = t.shift();
                if (this.cbck[n]) for (var s = 0, i = this.cbck[n].length; i > s; s++) this.cbck[n][s].apply(e, t)
            }, _initMenu: function () {
                this.$menu.attr("id", this.$menu.attr("id") || this.__getUniqueId()), this.conf.clone && (this.$menu = this.$menu.clone(!0), this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function () {
                    e(this).attr("id", i.mm(e(this).attr("id")))
                })), this.$menu.contents().each(function () {
                    3 == e(this)[0].nodeType && e(this).remove()
                }), this.$pnls = e('<div class="' + i.panels + '" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu), this.$menu.parent().addClass(i.wrapper);
                var t = [i.menu];
                this.opts.slidingSubmenus || t.push(i.vertical), this.opts.extensions = this.opts.extensions.length ? "mm-" + this.opts.extensions.join(" mm-") : "", this.opts.extensions && t.push(this.opts.extensions), this.$menu.addClass(t.join(" "))
            }, _initPanels: function (t) {
                var n = this, s = this.__findAddBack(t, "ul, ol");
                this.__refactorClass(s, this.conf.classNames.inset, "inset").addClass(i.nolistview + " " + i.nopanel), s.not("." + i.nolistview).addClass(i.listview);
                var o = this.__findAddBack(t, "." + i.listview).children();
                this.__refactorClass(o, this.conf.classNames.selected, "selected"), this.__refactorClass(o, this.conf.classNames.divider, "divider"), this.__refactorClass(o, this.conf.classNames.spacer, "spacer"), this.__refactorClass(this.__findAddBack(t, "." + this.conf.classNames.panel), this.conf.classNames.panel, "panel");
                var r = e(),
                    l = t.add(t.find("." + i.panel)).add(this.__findAddBack(t, "." + i.listview).children().children(this.conf.panelNodetype)).not("." + i.nopanel);
                this.__refactorClass(l, this.conf.classNames.vertical, "vertical"), this.opts.slidingSubmenus || l.addClass(i.vertical), l.each(function () {
                    var t = e(this), s = t;
                    t.is("ul, ol") ? (t.wrap('<div class="' + i.panel + '" />'), s = t.parent()) : s.addClass(i.panel);
                    var a = t.attr("id");
                    t.removeAttr("id"), s.attr("id", a || n.__getUniqueId()), t.hasClass(i.vertical) && (t.removeClass(n.conf.classNames.vertical), s.add(s.parent()).addClass(i.vertical)), r = r.add(s)
                });
                var d = e("." + i.panel, this.$menu);
                r.each(function (t) {
                    var s, o, r = e(this), l = r.parent(), d = l.children("a, span").first();
                    if (l.is("." + i.panels) || (l.data(a.sub, r), r.data(a.parent, l)), l.children("." + i.next).length || l.parent().is("." + i.listview) && (s = r.attr("id"), o = e('<a class="' + i.next + '" href="#' + s + '" data-target="#' + s + '" />').insertBefore(d), d.is("span") && o.addClass(i.fullsubopen)), !r.children("." + i.navbar).length && !l.hasClass(i.vertical)) {
                        l.parent().is("." + i.listview) ? l = l.closest("." + i.panel) : (d = l.closest("." + i.panel).find('a[href="#' + r.attr("id") + '"]').first(), l = d.closest("." + i.panel));
                        var c = !1, h = e('<div class="' + i.navbar + '" />');
                        if (l.length) {
                            switch (s = l.attr("id"), n.opts.navbar.titleLink) {
                                case"anchor":
                                    c = d.attr("href");
                                    break;
                                case"panel":
                                case"parent":
                                    c = "#" + s;
                                    break;
                                default:
                                    c = !1
                            }
                            h.append('<a class="' + i.btn + " " + i.prev + '" href="#' + s + '" data-target="#' + s + '" />').append(e('<a class="' + i.title + '"' + (c ? ' href="' + c + '"' : "") + " />").text(d.text())).prependTo(r), n.opts.navbar.add && r.addClass(i.hasnavbar)
                        } else n.opts.navbar.title && (h.append('<a class="' + i.title + '">' + n.opts.navbar.title + "</a>").prependTo(r), n.opts.navbar.add && r.addClass(i.hasnavbar))
                    }
                });
                var c = this.__findAddBack(t, "." + i.listview).children("." + i.selected).removeClass(i.selected).last().addClass(i.selected);
                c.add(c.parentsUntil("." + i.menu, "li")).filter("." + i.vertical).addClass(i.opened).end().each(function () {
                    e(this).parentsUntil("." + i.menu, "." + i.panel).not("." + i.vertical).first().addClass(i.opened).parentsUntil("." + i.menu, "." + i.panel).not("." + i.vertical).first().addClass(i.opened).addClass(i.subopened)
                }), c.children("." + i.panel).not("." + i.vertical).addClass(i.opened).parentsUntil("." + i.menu, "." + i.panel).not("." + i.vertical).first().addClass(i.opened).addClass(i.subopened);
                var h = d.filter("." + i.opened);
                return h.length || (h = r.first()), h.addClass(i.opened).last().addClass(i.current), r.not("." + i.vertical).not(h.last()).addClass(i.hidden).end().filter(function () {
                    return !e(this).parent().hasClass(i.panels)
                }).appendTo(this.$pnls), r
            }, _initAnchors: function () {
                var t = this;
                r.$body.on(o.click + "-oncanvas", "a[href]", function (s) {
                    var a = e(this), o = !1, r = t.$menu.find(a).length;
                    for (var l in e[n].addons) if (e[n].addons[l].clickAnchor.call(t, a, r)) {
                        o = !0;
                        break
                    }
                    var d = a.attr("href");
                    if (!o && r && d.length > 1 && "#" == d.slice(0, 1)) try {
                        var c = e(d, t.$menu);
                        c.is("." + i.panel) && (o = !0, t[a.parent().hasClass(i.vertical) ? "togglePanel" : "openPanel"](c))
                    } catch (h) {
                    }
                    if (o && s.preventDefault(), !o && r && a.is("." + i.listview + " > li > a") && !a.is('[rel="external"]') && !a.is('[target="_blank"]')) {
                        t.__valueOrFn(t.opts.onClick.setSelected, a) && t.setSelected(e(s.target).parent());
                        var u = t.__valueOrFn(t.opts.onClick.preventDefault, a, "#" == d.slice(0, 1));
                        u && s.preventDefault(), t.__valueOrFn(t.opts.onClick.close, a, u) && t.close()
                    }
                })
            }, _initAddons: function () {
                var t;
                for (t in e[n].addons) e[n].addons[t].add.call(this), e[n].addons[t].add = function () {
                };
                for (t in e[n].addons) e[n].addons[t].setup.call(this)
            }, _getOriginalMenuId: function () {
                var e = this.$menu.attr("id");
                return e && e.length && this.conf.clone && (e = i.umm(e)), e
            }, __api: function () {
                var t = this, n = {};
                return e.each(this._api, function (e) {
                    var s = this;
                    n[s] = function () {
                        var e = t[s].apply(t, arguments);
                        return "undefined" == typeof e ? n : e
                    }
                }), n
            }, __valueOrFn: function (e, t, n) {
                return "function" == typeof e ? e.call(t[0]) : "undefined" == typeof e && "undefined" != typeof n ? n : e
            }, __refactorClass: function (e, t, n) {
                return e.filter("." + t).removeClass(t).addClass(i[n])
            }, __findAddBack: function (e, t) {
                return e.find(t).add(e.filter(t))
            }, __filterListItems: function (e) {
                return e.not("." + i.divider).not("." + i.hidden)
            }, __transitionend: function (e, t, n) {
                var s = !1, i = function () {
                    s || t.call(e[0]), s = !0
                };
                e.one(o.transitionend, i), e.one(o.webkitTransitionEnd, i), setTimeout(i, 1.1 * n)
            }, __getUniqueId: function () {
                return i.mm(e[n].uniqueId++)
            }
        }, e.fn[n] = function (s, i) {
            return t(), s = e.extend(!0, {}, e[n].defaults, s), i = e.extend(!0, {}, e[n].configuration, i), this.each(function () {
                var t = e(this);
                if (!t.data(n)) {
                    var a = new e[n](t, s, i);
                    a.$menu.data(n, a.__api())
                }
            })
        }, e[n].support = {
            touch: "ontouchstart" in window || navigator.msMaxTouchPoints || !1,
            csstransitions: function () {
                if ("undefined" != typeof Modernizr && "undefined" != typeof Modernizr.csstransitions) return Modernizr.csstransitions;
                var e = document.body || document.documentElement, t = e.style, n = "transition";
                if ("string" == typeof t[n]) return !0;
                var s = ["Moz", "webkit", "Webkit", "Khtml", "O", "ms"];
                n = n.charAt(0).toUpperCase() + n.substr(1);
                for (var i = 0; i < s.length; i++) if ("string" == typeof t[s[i] + n]) return !0;
                return !1
            }()
        };
        var i, a, o, r
    }
}(jQuery), function (e) {
    var t = "mmenu", n = "offCanvas";
    e[t].addons[n] = {
        setup: function () {
            if (this.opts[n]) {
                var i = this.opts[n], a = this.conf[n];
                o = e[t].glbl, this._api = e.merge(this._api, ["open", "close", "setPage"]), ("top" == i.position || "bottom" == i.position) && (i.zposition = "front"), "string" != typeof a.pageSelector && (a.pageSelector = "> " + a.pageNodetype), o.$allMenus = (o.$allMenus || e()).add(this.$menu), this.vars.opened = !1;
                var r = [s.offcanvas];
                "left" != i.position && r.push(s.mm(i.position)), "back" != i.zposition && r.push(s.mm(i.zposition)), this.$menu.addClass(r.join(" ")).parent().removeClass(s.wrapper), this.setPage(o.$page), this._initBlocker(), this["_initWindow_" + n](), this.$menu[a.menuInjectMethod + "To"](a.menuWrapperSelector);
                var l = window.location.hash;
                if (l) {
                    var d = this._getOriginalMenuId();
                    d && d == l.slice(1) && this.open()
                }
            }
        }, add: function () {
            s = e[t]._c, i = e[t]._d, a = e[t]._e, s.add("offcanvas slideout blocking modal background opening blocker page"), i.add("style"), a.add("resize")
        }, clickAnchor: function (e, t) {
            if (!this.opts[n]) return !1;
            var s = this._getOriginalMenuId();
            if (s && e.is('[href="#' + s + '"]')) return this.open(), !0;
            if (o.$page) return s = o.$page.first().attr("id"), s && e.is('[href="#' + s + '"]') ? (this.close(), !0) : !1
        }
    }, e[t].defaults[n] = {
        position: "left",
        zposition: "back",
        blockUI: !0,
        moveBackground: !0
    }, e[t].configuration[n] = {
        pageNodetype: "div",
        pageSelector: null,
        noPageSelector: [],
        wrapPageIfNeeded: !0,
        menuWrapperSelector: "body",
        menuInjectMethod: "prepend"
    }, e[t].prototype.open = function () {
        if (!this.vars.opened) {
            var e = this;
            this._openSetup(), setTimeout(function () {
                e._openFinish()
            }, this.conf.openingInterval), this.trigger("open")
        }
    }, e[t].prototype._openSetup = function () {
        var t = this, r = this.opts[n];
        this.closeAllOthers(), o.$page.each(function () {
            e(this).data(i.style, e(this).attr("style") || "")
        }), o.$wndw.trigger(a.resize + "-" + n, [!0]);
        var l = [s.opened];
        r.blockUI && l.push(s.blocking), "modal" == r.blockUI && l.push(s.modal), r.moveBackground && l.push(s.background), "left" != r.position && l.push(s.mm(this.opts[n].position)), "back" != r.zposition && l.push(s.mm(this.opts[n].zposition)), this.opts.extensions && l.push(this.opts.extensions), o.$html.addClass(l.join(" ")), setTimeout(function () {
            t.vars.opened = !0
        }, this.conf.openingInterval), this.$menu.addClass(s.current + " " + s.opened)
    }, e[t].prototype._openFinish = function () {
        var e = this;
        this.__transitionend(o.$page.first(), function () {
            e.trigger("opened")
        }, this.conf.transitionDuration), o.$html.addClass(s.opening), this.trigger("opening")
    }, e[t].prototype.close = function () {
        if (this.vars.opened) {
            var t = this;
            this.__transitionend(o.$page.first(), function () {
                t.$menu.removeClass(s.current).removeClass(s.opened), o.$html.removeClass(s.opened).removeClass(s.blocking).removeClass(s.modal).removeClass(s.background).removeClass(s.mm(t.opts[n].position)).removeClass(s.mm(t.opts[n].zposition)), t.opts.extensions && o.$html.removeClass(t.opts.extensions), o.$page.each(function () {
                    e(this).attr("style", e(this).data(i.style))
                }), t.vars.opened = !1, t.trigger("closed")
            }, this.conf.transitionDuration), o.$html.removeClass(s.opening), this.trigger("close"), this.trigger("closing")
        }
    }, e[t].prototype.closeAllOthers = function () {
        o.$allMenus.not(this.$menu).each(function () {
            var n = e(this).data(t);
            n && n.close && n.close()
        })
    }, e[t].prototype.setPage = function (t) {
        var i = this, a = this.conf[n];
        t && t.length || (t = o.$body.find(a.pageSelector), a.noPageSelector.length && (t = t.not(a.noPageSelector.join(", "))), t.length > 1 && a.wrapPageIfNeeded && (t = t.wrapAll("<" + this.conf[n].pageNodetype + " />").parent())), t.each(function () {
            e(this).attr("id", e(this).attr("id") || i.__getUniqueId())
        }), t.addClass(s.page + " " + s.slideout), o.$page = t, this.trigger("setPage", t)
    }, e[t].prototype["_initWindow_" + n] = function () {
        o.$wndw.off(a.keydown + "-" + n).on(a.keydown + "-" + n, function (e) {
            return o.$html.hasClass(s.opened) && 9 == e.keyCode ? (e.preventDefault(), !1) : void 0
        });
        var e = 0;
        o.$wndw.off(a.resize + "-" + n).on(a.resize + "-" + n, function (t, n) {
            if (1 == o.$page.length && (n || o.$html.hasClass(s.opened))) {
                var i = o.$wndw.height();
                (n || i != e) && (e = i, o.$page.css("minHeight", i))
            }
        })
    }, e[t].prototype._initBlocker = function () {
        var t = this;
        this.opts[n].blockUI && (o.$blck || (o.$blck = e('<div id="' + s.blocker + '" class="' + s.slideout + '" />')), o.$blck.appendTo(o.$body).off(a.touchstart + "-" + n + " " + a.touchmove + "-" + n).on(a.touchstart + "-" + n + " " + a.touchmove + "-" + n, function (e) {
            e.preventDefault(), e.stopPropagation(), o.$blck.trigger(a.mousedown + "-" + n)
        }).off(a.mousedown + "-" + n).on(a.mousedown + "-" + n, function (e) {
            e.preventDefault(), o.$html.hasClass(s.modal) || (t.closeAllOthers(), t.close())
        }))
    };
    var s, i, a, o
}(jQuery), function (e) {
    var t = "mmenu", n = "scrollBugFix";
    e[t].addons[n] = {
        setup: function () {
            var i = this, r = this.opts[n];
            this.conf[n];
            if (o = e[t].glbl, e[t].support.touch && this.opts.offCanvas && this.opts.offCanvas.blockUI && ("boolean" == typeof r && (r = {fix: r}), "object" != typeof r && (r = {}), r = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], r), r.fix)) {
                var l = this.$menu.attr("id"), d = !1;
                this.bind("opening", function () {
                    this.$pnls.children("." + s.current).scrollTop(0)
                }), o.$docu.on(a.touchmove, function (e) {
                    i.vars.opened && e.preventDefault()
                }), o.$body.on(a.touchstart, "#" + l + "> ." + s.panels + "> ." + s.current, function (e) {
                    i.vars.opened && (d || (d = !0, 0 === e.currentTarget.scrollTop ? e.currentTarget.scrollTop = 1 : e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight && (e.currentTarget.scrollTop -= 1), d = !1))
                }).on(a.touchmove, "#" + l + "> ." + s.panels + "> ." + s.current, function (t) {
                    i.vars.opened && e(this)[0].scrollHeight > e(this).innerHeight() && t.stopPropagation()
                }), o.$wndw.on(a.orientationchange, function () {
                    i.$pnls.children("." + s.current).scrollTop(0).css({"-webkit-overflow-scrolling": "auto"}).css({"-webkit-overflow-scrolling": "touch"})
                })
            }
        }, add: function () {
            s = e[t]._c, i = e[t]._d, a = e[t]._e
        }, clickAnchor: function (e, t) {
        }
    }, e[t].defaults[n] = {fix: !0};
    var s, i, a, o
}(jQuery), function (e) {
    var t = "mmenu", n = "autoHeight";
    e[t].addons[n] = {
        setup: function () {
            if (this.opts.offCanvas) {
                var i = this.opts[n];
                this.conf[n];
                if (o = e[t].glbl, "boolean" == typeof i && i && (i = {height: "auto"}), "string" == typeof i && (i = {height: i}), "object" != typeof i && (i = {}), i = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], i), "auto" == i.height || "highest" == i.height) {
                    this.$menu.addClass(s.autoheight);
                    var a = function (t) {
                        if (this.vars.opened) {
                            var n = parseInt(this.$pnls.css("top"), 10) || 0,
                                a = parseInt(this.$pnls.css("bottom"), 10) || 0, o = 0;
                            this.$menu.addClass(s.measureheight), "auto" == i.height ? (t = t || this.$pnls.children("." + s.current), t.is("." + s.vertical) && (t = t.parents("." + s.panel).not("." + s.vertical).first()), o = t.outerHeight()) : "highest" == i.height && this.$pnls.children().each(function () {
                                var t = e(this);
                                t.is("." + s.vertical) && (t = t.parents("." + s.panel).not("." + s.vertical).first()), o = Math.max(o, t.outerHeight())
                            }), this.$menu.height(o + n + a).removeClass(s.measureheight)
                        }
                    };
                    this.bind("opening", a), "highest" == i.height && this.bind("init", a), "auto" == i.height && (this.bind("update", a), this.bind("openPanel", a), this.bind("closePanel", a))
                }
            }
        }, add: function () {
            s = e[t]._c, i = e[t]._d, a = e[t]._e, s.add("autoheight measureheight"), a.add("resize")
        }, clickAnchor: function (e, t) {
        }
    }, e[t].defaults[n] = {height: "default"};
    var s, i, a, o
}(jQuery), function (e) {
    var t = "mmenu", n = "backButton";
    e[t].addons[n] = {
        setup: function () {
            if (this.opts.offCanvas) {
                var i = this, a = this.opts[n];
                this.conf[n];
                if (o = e[t].glbl, "boolean" == typeof a && (a = {close: a}), "object" != typeof a && (a = {}), a = e.extend(!0, {}, e[t].defaults[n], a), a.close) {
                    var r = "#" + i.$menu.attr("id");
                    this.bind("opened", function (e) {
                        location.hash != r && history.pushState(null, document.title, r)
                    }), e(window).on("popstate", function (e) {
                        o.$html.hasClass(s.opened) ? (e.stopPropagation(), i.close()) : location.hash == r && (e.stopPropagation(), i.open())
                    })
                }
            }
        }, add: function () {
            return window.history && window.history.pushState ? (s = e[t]._c, i = e[t]._d, void (a = e[t]._e)) : void (e[t].addons[n].setup = function () {
            })
        }, clickAnchor: function (e, t) {
        }
    }, e[t].defaults[n] = {close: !1};
    var s, i, a, o
}(jQuery), function (e) {
    var t = "mmenu", n = "columns";
    e[t].addons[n] = {
        setup: function () {
            var i = this.opts[n];
            this.conf[n];
            if (o = e[t].glbl, "boolean" == typeof i && (i = {add: i}), "number" == typeof i && (i = {
                add: !0,
                visible: i
            }), "object" != typeof i && (i = {}), "number" == typeof i.visible && (i.visible = {
                min: i.visible,
                max: i.visible
            }), i = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], i), i.add) {
                i.visible.min = Math.max(1, Math.min(6, i.visible.min)), i.visible.max = Math.max(i.visible.min, Math.min(6, i.visible.max)), this.$menu.addClass(s.columns);
                for (var a = this.opts.offCanvas ? this.$menu.add(o.$html) : this.$menu, r = [], l = 0; l <= i.visible.max; l++) r.push(s.columns + "-" + l);
                r = r.join(" ");
                var d = function (e) {
                    u.call(this, this.$pnls.children("." + s.current)), i.hideNavbars && e.removeClass(s.hasnavbar)
                }, c = function () {
                    var e = this.$pnls.children("." + s.panel).filter("." + s.opened).length;
                    e = Math.min(i.visible.max, Math.max(i.visible.min, e)), a.removeClass(r).addClass(s.columns + "-" + e)
                }, h = function () {
                    this.opts.offCanvas && o.$html.removeClass(r)
                }, u = function (t) {
                    this.$pnls.children("." + s.panel).removeClass(r).filter("." + s.subopened).removeClass(s.hidden).add(t).slice(-i.visible.max).each(function (t) {
                        e(this).addClass(s.columns + "-" + t)
                    })
                };
                this.bind("open", c), this.bind("close", h), this.bind("init", d), this.bind("openPanel", u), this.bind("openingPanel", c), this.bind("openedPanel", c), this.opts.offCanvas || c.call(this)
            }
        }, add: function () {
            s = e[t]._c, i = e[t]._d, a = e[t]._e, s.add("columns")
        }, clickAnchor: function (t, i) {
            if (!this.opts[n].add) return !1;
            if (i) {
                var a = t.attr("href");
                if (a.length > 1 && "#" == a.slice(0, 1)) try {
                    var o = e(a, this.$menu);
                    if (o.is("." + s.panel)) for (var r = parseInt(t.closest("." + s.panel).attr("class").split(s.columns + "-")[1].split(" ")[0], 10) + 1; r !== !1;) {
                        var l = this.$pnls.children("." + s.columns + "-" + r);
                        if (!l.length) {
                            r = !1;
                            break
                        }
                        r++, l.removeClass(s.subopened).removeClass(s.opened).removeClass(s.current).removeClass(s.highest).addClass(s.hidden)
                    }
                } catch (d) {
                }
            }
        }
    }, e[t].defaults[n] = {add: !1, visible: {min: 1, max: 3}, hideNavbars: !1};
    var s, i, a, o
}(jQuery), function (e) {
    var t = "mmenu", n = "counters";
    e[t].addons[n] = {
        setup: function () {
            var a = this, r = this.opts[n];
            this.conf[n];
            o = e[t].glbl, "boolean" == typeof r && (r = {
                add: r,
                update: r
            }), "object" != typeof r && (r = {}), r = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], r), this.bind("init", function (t) {
                this.__refactorClass(e("em", t), this.conf.classNames[n].counter, "counter")
            }), r.add && this.bind("init", function (t) {
                var n;
                switch (r.addTo) {
                    case"panels":
                        n = t;
                        break;
                    default:
                        n = t.filter(r.addTo)
                }
                n.each(function () {
                    var t = e(this).data(i.parent);
                    t && (t.children("em." + s.counter).length || t.prepend(e('<em class="' + s.counter + '" />')))
                })
            }), r.update && this.bind("update", function () {
                this.$pnls.children("." + s.panel).each(function () {
                    var t = e(this), n = t.data(i.parent);
                    if (n) {
                        var o = n.children("em." + s.counter);
                        o.length && (t = t.children("." + s.listview), t.length && o.html(a.__filterListItems(t.children()).length))
                    }
                })
            })
        }, add: function () {
            s = e[t]._c, i = e[t]._d, a = e[t]._e, s.add("counter search noresultsmsg")
        }, clickAnchor: function (e, t) {
        }
    }, e[t].defaults[n] = {
        add: !1,
        addTo: "panels",
        update: !1
    }, e[t].configuration.classNames[n] = {counter: "Counter"};
    var s, i, a, o
}(jQuery), function (e) {
    var t = "mmenu", n = "dividers";
    e[t].addons[n] = {
        setup: function () {
            var i = this, r = this.opts[n];
            this.conf[n];
            if (o = e[t].glbl, "boolean" == typeof r && (r = {
                add: r,
                fixed: r
            }), "object" != typeof r && (r = {}), r = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], r), this.bind("init", function (t) {
                this.__refactorClass(e("li", this.$menu), this.conf.classNames[n].collapsed, "collapsed")
            }), r.add && this.bind("init", function (t) {
                var n;
                switch (r.addTo) {
                    case"panels":
                        n = t;
                        break;
                    default:
                        n = t.filter(r.addTo)
                }
                e("." + s.divider, n).remove(), n.find("." + s.listview).not("." + s.vertical).each(function () {
                    var t = "";
                    i.__filterListItems(e(this).children()).each(function () {
                        var n = e.trim(e(this).children("a, span").text()).slice(0, 1).toLowerCase();
                        n != t && n.length && (t = n, e('<li class="' + s.divider + '">' + n + "</li>").insertBefore(this))
                    })
                })
            }), r.collapse && this.bind("init", function (t) {
                e("." + s.divider, t).each(function () {
                    var t = e(this), n = t.nextUntil("." + s.divider, "." + s.collapsed);
                    n.length && (t.children("." + s.subopen).length || (t.wrapInner("<span />"), t.prepend('<a href="#" class="' + s.subopen + " " + s.fullsubopen + '" />')))
                })
            }), r.fixed) {
                var l = function (t) {
                    t = t || this.$pnls.children("." + s.current);
                    var n = t.find("." + s.divider).not("." + s.hidden);
                    if (n.length) {
                        this.$menu.addClass(s.hasdividers);
                        var i = t.scrollTop() || 0, a = "";
                        t.is(":visible") && t.find("." + s.divider).not("." + s.hidden).each(function () {
                            e(this).position().top + i < i + 1 && (a = e(this).text())
                        }), this.$fixeddivider.text(a)
                    } else this.$menu.removeClass(s.hasdividers)
                };
                this.$fixeddivider = e('<ul class="' + s.listview + " " + s.fixeddivider + '"><li class="' + s.divider + '"></li></ul>').prependTo(this.$pnls).children(), this.bind("openPanel", l), this.bind("update", l), this.bind("init", function (t) {
                    t.off(a.scroll + "-dividers " + a.touchmove + "-dividers").on(a.scroll + "-dividers " + a.touchmove + "-dividers", function (t) {
                        l.call(i, e(this))
                    })
                })
            }
        }, add: function () {
            s = e[t]._c, i = e[t]._d, a = e[t]._e, s.add("collapsed uncollapsed fixeddivider hasdividers"), a.add("scroll")
        }, clickAnchor: function (e, t) {
            if (this.opts[n].collapse && t) {
                var i = e.parent();
                if (i.is("." + s.divider)) {
                    var a = i.nextUntil("." + s.divider, "." + s.collapsed);
                    return i.toggleClass(s.opened), a[i.hasClass(s.opened) ? "addClass" : "removeClass"](s.uncollapsed), !0
                }
            }
            return !1
        }
    }, e[t].defaults[n] = {
        add: !1,
        addTo: "panels",
        fixed: !1,
        collapse: !1
    }, e[t].configuration.classNames[n] = {collapsed: "Collapsed"};
    var s, i, a, o
}(jQuery), function (e) {
    function t(e, t, n) {
        return t > e && (e = t), e > n && (e = n), e
    }

    var n = "mmenu", s = "dragOpen";
    e[n].addons[s] = {
        setup: function () {
            if (this.opts.offCanvas) {
                var a = this, o = this.opts[s], l = this.conf[s];
                if (r = e[n].glbl, "boolean" == typeof o && (o = {open: o}), "object" != typeof o && (o = {}), o = this.opts[s] = e.extend(!0, {}, e[n].defaults[s], o), o.open) {
                    var d, c, h, u, p, f = {}, v = 0, m = !1, g = !1, b = 0, C = 0;
                    switch (this.opts.offCanvas.position) {
                        case"left":
                        case"right":
                            f.events = "panleft panright", f.typeLower = "x", f.typeUpper = "X", g = "width";
                            break;
                        case"top":
                        case"bottom":
                            f.events = "panup pandown", f.typeLower = "y", f.typeUpper = "Y", g = "height"
                    }
                    switch (this.opts.offCanvas.position) {
                        case"right":
                        case"bottom":
                            f.negative = !0, u = function (e) {
                                e >= r.$wndw[g]() - o.maxStartPos && (v = 1)
                            };
                            break;
                        default:
                            f.negative = !1, u = function (e) {
                                e <= o.maxStartPos && (v = 1)
                            }
                    }
                    switch (this.opts.offCanvas.position) {
                        case"left":
                            f.open_dir = "right", f.close_dir = "left";
                            break;
                        case"right":
                            f.open_dir = "left", f.close_dir = "right";
                            break;
                        case"top":
                            f.open_dir = "down", f.close_dir = "up";
                            break;
                        case"bottom":
                            f.open_dir = "up", f.close_dir = "down"
                    }
                    switch (this.opts.offCanvas.zposition) {
                        case"front":
                            p = function () {
                                return this.$menu
                            };
                            break;
                        default:
                            p = function () {
                                return e("." + i.slideout)
                            }
                    }
                    var _ = this.__valueOrFn(o.pageNode, this.$menu, r.$page);
                    "string" == typeof _ && (_ = e(_));
                    var $ = new Hammer(_[0], o.vendors.hammer);
                    $.on("panstart", function (e) {
                        u(e.center[f.typeLower]), r.$slideOutNodes = p(), m = f.open_dir
                    }).on(f.events + " panend", function (e) {
                        v > 0 && e.preventDefault()
                    }).on(f.events, function (e) {
                        if (d = e["delta" + f.typeUpper], f.negative && (d = -d), d != b && (m = d >= b ? f.open_dir : f.close_dir), b = d, b > o.threshold && 1 == v) {
                            if (r.$html.hasClass(i.opened)) return;
                            v = 2, a._openSetup(), a.trigger("opening"), r.$html.addClass(i.dragging), C = t(r.$wndw[g]() * l[g].perc, l[g].min, l[g].max)
                        }
                        2 == v && (c = t(b, 10, C) - ("front" == a.opts.offCanvas.zposition ? C : 0), f.negative && (c = -c), h = "translate" + f.typeUpper + "(" + c + "px )", r.$slideOutNodes.css({
                            "-webkit-transform": "-webkit-" + h,
                            transform: h
                        }))
                    }).on("panend", function (e) {
                        2 == v && (r.$html.removeClass(i.dragging), r.$slideOutNodes.css("transform", ""), a[m == f.open_dir ? "_openFinish" : "close"]()), v = 0
                    })
                }
            }
        }, add: function () {
            return "function" != typeof Hammer || Hammer.VERSION < 2 ? void (e[n].addons[s].setup = function () {
            }) : (i = e[n]._c, a = e[n]._d, o = e[n]._e, void i.add("dragging"))
        }, clickAnchor: function (e, t) {
        }
    }, e[n].defaults[s] = {
        open: !1,
        maxStartPos: 100,
        threshold: 50,
        vendors: {hammer: {}}
    }, e[n].configuration[s] = {width: {perc: .8, min: 140, max: 440}, height: {perc: .8, min: 140, max: 880}};
    var i, a, o, r
}(jQuery), function (e) {
    var t = "mmenu", n = "dropdown";
    e[t].addons[n] = {
        setup: function () {
            if (this.opts.offCanvas) {
                var r = this, l = this.opts[n], d = this.conf[n];
                if (o = e[t].glbl, "boolean" == typeof l && l && (l = {drop: l}), "object" != typeof l && (l = {}), "string" == typeof l.position && (l.position = {of: l.position}), l = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], l), l.drop) {
                    if ("string" != typeof l.position.of) {
                        var c = this.$menu.attr("id");
                        c && c.length && (this.conf.clone && (c = s.umm(c)), l.position.of = '[href="#' + c + '"]')
                    }
                    if ("string" == typeof l.position.of) {
                        var h = e(l.position.of);
                        if (h.length) {
                            this.$menu.addClass(s.dropdown), l.tip && this.$menu.addClass(s.tip), l.event = l.event.split(" "), 1 == l.event.length && (l.event[1] = l.event[0]), "hover" == l.event[0] && h.on(a.mouseenter + "-dropdown", function () {
                                r.open()
                            }), "hover" == l.event[1] && this.$menu.on(a.mouseleave + "-dropdown", function () {
                                r.close()
                            }), this.bind("opening", function () {
                                this.$menu.data(i.style, this.$menu.attr("style") || ""), o.$html.addClass(s.dropdown)
                            }), this.bind("closed", function () {
                                this.$menu.attr("style", this.$menu.data(i.style)), o.$html.removeClass(s.dropdown)
                            });
                            var u = function (i, a) {
                                var r = a[0], c = a[1], u = "x" == i ? "scrollLeft" : "scrollTop",
                                    p = "x" == i ? "outerWidth" : "outerHeight", f = "x" == i ? "left" : "top",
                                    v = "x" == i ? "right" : "bottom", m = "x" == i ? "width" : "height",
                                    g = "x" == i ? "maxWidth" : "maxHeight", b = null, C = o.$wndw[u](),
                                    _ = h.offset()[f] -= C, $ = _ + h[p](), y = o.$wndw[m](),
                                    x = d.offset.button[i] + d.offset.viewport[i];
                                if (l.position[i]) switch (l.position[i]) {
                                    case"left":
                                    case"bottom":
                                        b = "after";
                                        break;
                                    case"right":
                                    case"top":
                                        b = "before"
                                }
                                null === b && (b = y / 2 > _ + ($ - _) / 2 ? "after" : "before");
                                var w, k;
                                return "after" == b ? (w = "x" == i ? _ : $, k = y - (w + x), r[f] = w + d.offset.button[i], r[v] = "auto", c.push(s["x" == i ? "tipleft" : "tiptop"])) : (w = "x" == i ? $ : _, k = w - x, r[v] = "calc( 100% - " + (w - d.offset.button[i]) + "px )", r[f] = "auto", c.push(s["x" == i ? "tipright" : "tipbottom"])), r[g] = Math.min(e[t].configuration[n][m].max, k), [r, c]
                            }, p = function (e) {
                                if (this.vars.opened) {
                                    this.$menu.attr("style", this.$menu.data(i.style));
                                    var t = [{}, []];
                                    t = u.call(this, "y", t), t = u.call(this, "x", t), this.$menu.css(t[0]), l.tip && this.$menu.removeClass(s.tipleft + " " + s.tipright + " " + s.tiptop + " " + s.tipbottom).addClass(t[1].join(" "))
                                }
                            };
                            this.bind("opening", p), o.$wndw.on(a.resize + "-dropdown", function (e) {
                                p.call(r)
                            }), this.opts.offCanvas.blockUI || o.$wndw.on(a.scroll + "-dropdown", function (e) {
                                p.call(r)
                            })
                        }
                    }
                }
            }
        }, add: function () {
            s = e[t]._c, i = e[t]._d, a = e[t]._e, s.add("dropdown tip tipleft tipright tiptop tipbottom"), a.add("mouseenter mouseleave resize scroll")
        }, clickAnchor: function (e, t) {
        }
    }, e[t].defaults[n] = {
        drop: !1,
        event: "click",
        position: {},
        tip: !0
    }, e[t].configuration[n] = {
        offset: {button: {x: -10, y: 10}, viewport: {x: 20, y: 20}},
        height: {max: 880},
        width: {max: 440}
    };
    var s, i, a, o
}(jQuery), function (e) {
    var t = "mmenu", n = "fixedElements";
    e[t].addons[n] = {
        setup: function () {
            if (this.opts.offCanvas) {
                var s = this.opts[n];
                this.conf[n];
                o = e[t].glbl, s = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], s);
                var i = function (e) {
                    var t = this.conf.classNames[n].fixed;
                    this.__refactorClass(e.find("." + t), t, "slideout").appendTo(o.$body)
                };
                i.call(this, o.$page), this.bind("setPage", i)
            }
        }, add: function () {
            s = e[t]._c, i = e[t]._d, a = e[t]._e, s.add("fixed")
        }, clickAnchor: function (e, t) {
        }
    }, e[t].configuration.classNames[n] = {fixed: "Fixed"};
    var s, i, a, o
}(jQuery), function (e) {
    var t = "mmenu", n = "iconPanels";
    e[t].addons[n] = {
        setup: function () {
            var i = this, a = this.opts[n];
            this.conf[n];
            if (o = e[t].glbl, "boolean" == typeof a && (a = {add: a}), "number" == typeof a && (a = {
                add: !0,
                visible: a
            }), "object" != typeof a && (a = {}), a = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], a), a.visible++, a.add) {
                this.$menu.addClass(s.iconpanel);
                for (var r = [], l = 0; l <= a.visible; l++) r.push(s.iconpanel + "-" + l);
                r = r.join(" ");
                var d = function (t) {
                    t.hasClass(s.vertical) || i.$pnls.children("." + s.panel).removeClass(r).filter("." + s.subopened).removeClass(s.hidden).add(t).not("." + s.vertical).slice(-a.visible).each(function (t) {
                        e(this).addClass(s.iconpanel + "-" + t)
                    })
                };
                this.bind("openPanel", d), this.bind("init", function (t) {
                    d.call(i, i.$pnls.children("." + s.current)), a.hideNavbars && t.removeClass(s.hasnavbar), t.not("." + s.vertical).each(function () {
                        e(this).children("." + s.subblocker).length || e(this).prepend('<a href="#' + e(this).closest("." + s.panel).attr("id") + '" class="' + s.subblocker + '" />')
                    })
                })
            }
        }, add: function () {
            s = e[t]._c, i = e[t]._d, a = e[t]._e, s.add("iconpanel subblocker")
        }, clickAnchor: function (e, t) {
        }
    }, e[t].defaults[n] = {add: !1, visible: 3, hideNavbars: !1};
    var s, i, a, o
}(jQuery), function (e) {
    var t = "mmenu", n = "navbars";
    e[t].addons[n] = {
        setup: function () {
            var i = this, a = this.opts[n], r = this.conf[n];
            if (o = e[t].glbl, "undefined" != typeof a) {
                a instanceof Array || (a = [a]);
                var l = {};
                e.each(a, function (o) {
                    var d = a[o];
                    "boolean" == typeof d && d && (d = {}), "object" != typeof d && (d = {}), "undefined" == typeof d.content && (d.content = ["prev", "title"]), d.content instanceof Array || (d.content = [d.content]), d = e.extend(!0, {}, i.opts.navbar, d);
                    var c = d.position, h = d.height;
                    "number" != typeof h && (h = 1), h = Math.min(4, Math.max(1, h)), "bottom" != c && (c = "top"), l[c] || (l[c] = 0), l[c]++;
                    var u = e("<div />").addClass(s.navbar + " " + s.navbar + "-" + c + " " + s.navbar + "-" + c + "-" + l[c] + " " + s.navbar + "-size-" + h);
                    l[c] += h - 1;
                    for (var p = 0, f = 0, v = d.content.length; v > f; f++) {
                        var m = e[t].addons[n][d.content[f]] || !1;
                        m ? p += m.call(i, u, d, r) : (m = d.content[f], m instanceof e || (m = e(d.content[f])), u.append(m))
                    }
                    p += Math.ceil(u.children().not("." + s.btn).not("." + s.title + "-prev").length / h), p > 1 && u.addClass(s.navbar + "-content-" + p), u.children("." + s.btn).length && u.addClass(s.hasbtns), u.prependTo(i.$menu)
                });
                for (var d in l) i.$menu.addClass(s.hasnavbar + "-" + d + "-" + l[d])
            }
        }, add: function () {
            s = e[t]._c, i = e[t]._d, a = e[t]._e, s.add("close hasbtns")
        }, clickAnchor: function (e, t) {
        }
    }, e[t].configuration[n] = {breadcrumbSeparator: "/"}, e[t].configuration.classNames[n] = {};
    var s, i, a, o
}(jQuery), function (e) {
    var t = "mmenu", n = "navbars", s = "breadcrumbs";
    e[t].addons[n][s] = function (n, s, i) {
        var a = e[t]._c, o = e[t]._d;
        a.add("breadcrumbs separator");
        var r = e('<span class="' + a.breadcrumbs + '" />').appendTo(n);
        this.bind("init", function (t) {
            t.removeClass(a.hasnavbar).each(function () {
                for (var t = [], n = e(this), s = e('<span class="' + a.breadcrumbs + '"></span>'), r = e(this).children().first(), l = !0; r && r.length;) {
                    r.is("." + a.panel) || (r = r.closest("." + a.panel));
                    var d = r.children("." + a.navbar).children("." + a.title).text();
                    t.unshift(l ? "<span>" + d + "</span>" : '<a href="#' + r.attr("id") + '">' + d + "</a>"), l = !1, r = r.data(o.parent)
                }
                s.append(t.join('<span class="' + a.separator + '">' + i.breadcrumbSeparator + "</span>")).appendTo(n.children("." + a.navbar))
            })
        });
        var l = function () {
            r.html(this.$pnls.children("." + a.current).children("." + a.navbar).children("." + a.breadcrumbs).html())
        };
        return this.bind("openPanel", l), this.bind("init", l), 0
    }
}(jQuery), function (e) {
    var t = "mmenu", n = "navbars", s = "close";
    e[t].addons[n][s] = function (n, s) {
        var i = e[t]._c, a = e[t].glbl, o = e('<a class="' + i.close + " " + i.btn + '" href="#" />').appendTo(n),
            r = function (e) {
                o.attr("href", "#" + e.attr("id"))
            };
        return r.call(this, a.$page), this.bind("setPage", r), -1
    }
}(jQuery), function (e) {
    var t = "mmenu", n = "navbars", s = "next";
    e[t].addons[n][s] = function (s, i) {
        var a, o, r = e[t]._c, l = e('<a class="' + r.next + " " + r.btn + '" href="#" />').appendTo(s),
            d = function (e) {
                e = e || this.$pnls.children("." + r.current);
                var t = e.find("." + this.conf.classNames[n].panelNext);
                a = t.attr("href"), o = t.html(), l[a ? "attr" : "removeAttr"]("href", a), l[a || o ? "removeClass" : "addClass"](r.hidden), l.html(o)
            };
        return this.bind("openPanel", d), this.bind("init", function () {
            d.call(this)
        }), -1
    }, e[t].configuration.classNames[n].panelNext = "Next"
}(jQuery), function (e) {
    var t = "mmenu", n = "navbars", s = "prev";
    e[t].addons[n][s] = function (s, i) {
        var a = e[t]._c, o = e('<a class="' + a.prev + " " + a.btn + '" href="#" />').appendTo(s);
        this.bind("init", function (e) {
            e.removeClass(a.hasnavbar).children("." + a.navbar).addClass(a.hidden)
        });
        var r, l, d = function (e) {
            if (e = e || this.$pnls.children("." + a.current), !e.hasClass(a.vertical)) {
                var t = e.find("." + this.conf.classNames[n].panelPrev);
                t.length || (t = e.children("." + a.navbar).children("." + a.prev)), r = t.attr("href"), l = t.html(), o[r ? "attr" : "removeAttr"]("href", r), o[r || l ? "removeClass" : "addClass"](a.hidden), o.html(l)
            }
        };
        return this.bind("openPanel", d), this.bind("init", function () {
            d.call(this)
        }), -1
    }, e[t].configuration.classNames[n].panelPrev = "Prev"
}(jQuery), function (e) {
    var t = "mmenu", n = "navbars", s = "searchfield";
    e[t].addons[n][s] = function (n, s) {
        var i = e[t]._c, a = e('<div class="' + i.search + '" />').appendTo(n);
        return "object" != typeof this.opts.searchfield && (this.opts.searchfield = {}), this.opts.searchfield.add = !0, this.opts.searchfield.addTo = a, 0
    }
}(jQuery), function (e) {
    var t = "mmenu", n = "navbars", s = "title";
    e[t].addons[n][s] = function (s, i) {
        var a, o, r = e[t]._c, l = e('<a class="' + r.title + '" />').appendTo(s), d = function (e) {
            if (e = e || this.$pnls.children("." + r.current), !e.hasClass(r.vertical)) {
                var t = e.find("." + this.conf.classNames[n].panelTitle);
                t.length || (t = e.children("." + r.navbar).children("." + r.title)), a = t.attr("href"), o = t.html() || i.title, l[a ? "attr" : "removeAttr"]("href", a), l[a || o ? "removeClass" : "addClass"](r.hidden), l.html(o)
            }
        };
        return this.bind("openPanel", d), this.bind("init", function (e) {
            d.call(this)
        }), 0
    }, e[t].configuration.classNames[n].panelTitle = "Title"
}(jQuery), function (e) {
    function t(e, t, n) {
        e.prop("aria-" + t, n)[n ? "attr" : "removeAttr"]("aria-" + t, "true")
    }

    function n(e) {
        return '<span class="' + a.sronly + '">' + e + "</span>"
    }

    var s = "mmenu", i = "screenReader";
    e[s].addons[i] = {
        setup: function () {
            var o = this.opts[i], r = this.conf[i];
            if (l = e[s].glbl, "boolean" == typeof o && (o = {
                aria: o,
                text: o
            }), "object" != typeof o && (o = {}), o = this.opts[i] = e.extend(!0, {}, e[s].defaults[i], o), o.aria) {
                if (this.opts.offCanvas) {
                    var d = function () {
                        t(this.$menu, "hidden", !1)
                    }, c = function () {
                        t(this.$menu, "hidden", !0)
                    };
                    this.bind("open", d), this.bind("close", c), c.call(this)
                }
                var h = function () {
                    t(this.$menu.find("." + a.hidden), "hidden", !0), t(this.$menu.find('[aria-hidden="true"]').not("." + a.hidden), "hidden", !1)
                }, u = function (e) {
                    t(this.$pnls.children("." + a.panel).not(e).not("." + a.hidden), "hidden", !0), t(e, "hidden", !1)
                };
                this.bind("update", h), this.bind("openPanel", h), this.bind("openPanel", u);
                var p = function (e) {
                    t(e.find("." + a.prev + ", ." + a.next), "haspopup", !0)
                };
                this.bind("init", p), p.call(this, this.$menu.children("." + a.navbar))
            }
            if (o.text) {
                var f = function (t) {
                    t.children("." + a.navbar).children("." + a.prev).html(n(r.text.closeSubmenu)).end().children("." + a.next).html(n(r.text.openSubmenu)).end().children("." + a.close).html(n(r.text.closeMenu)), t.is("." + a.panel) && t.find("." + a.listview).find("." + a.next).each(function () {
                        e(this).html(n(r.text[e(this).parent().is("." + a.vertical) ? "toggleSubmenu" : "openSubmenu"]))
                    })
                };
                this.bind("init", f), f.call(this, this.$menu)
            }
        }, add: function () {
            a = e[s]._c, o = e[s]._d, r = e[s]._e, a.add("sronly")
        }, clickAnchor: function (e, t) {
        }
    }, e[s].defaults[i] = {aria: !1, text: !1}, e[s].configuration[i] = {
        text: {
            closeMenu: "Close menu",
            closeSubmenu: "Close submenu",
            openSubmenu: "Open submenu",
            toggleSubmenu: "Toggle submenu"
        }
    };
    var a, o, r, l
}(jQuery), function (e) {
    function t(e) {
        switch (e) {
            case 9:
            case 16:
            case 17:
            case 18:
            case 37:
            case 38:
            case 39:
            case 40:
                return !0
        }
        return !1
    }

    var n = "mmenu", s = "searchfield";
    e[n].addons[s] = {
        setup: function () {
            var l = this, d = this.opts[s], c = this.conf[s];
            r = e[n].glbl, "boolean" == typeof d && (d = {add: d}), "object" != typeof d && (d = {}), "boolean" == typeof d.resultsPanel && (d.resultsPanel = {add: d.resultsPanel}), d = this.opts[s] = e.extend(!0, {}, e[n].defaults[s], d), c = this.conf[s] = e.extend(!0, {}, e[n].configuration[s], c), this.bind("close", function () {
                this.$menu.find("." + i.search).find("input").blur()
            }), this.bind("init", function (n) {
                if (d.add) {
                    var r;
                    switch (d.addTo) {
                        case"panels":
                            r = n;
                            break;
                        default:
                            r = this.$menu.find(d.addTo)
                    }
                    if (r.each(function () {
                        var t = e(this);
                        if (!t.is("." + i.panel) || !t.is("." + i.vertical)) {
                            if (!t.children("." + i.search).length) {
                                var n = l.__valueOrFn(c.clear, t), s = l.__valueOrFn(c.form, t),
                                    a = l.__valueOrFn(c.input, t), r = l.__valueOrFn(c.submit, t),
                                    h = e("<" + (s ? "form" : "div") + ' class="' + i.search + '" />'),
                                    u = e('<input placeholder="' + d.placeholder + '" type="text" autocomplete="off" />');
                                h.append(u);
                                var p;
                                if (a) for (p in a) u.attr(p, a[p]);
                                if (n && e('<a class="' + i.btn + " " + i.clear + '" href="#" />').appendTo(h).on(o.click + "-searchfield", function (e) {
                                    e.preventDefault(), u.val("").trigger(o.keyup + "-searchfield")
                                }), s) {
                                    for (p in s) h.attr(p, s[p]);
                                    r && !n && e('<a class="' + i.btn + " " + i.next + '" href="#" />').appendTo(h).on(o.click + "-searchfield", function (e) {
                                        e.preventDefault(), h.submit()
                                    })
                                }
                                t.hasClass(i.search) ? t.replaceWith(h) : t.prepend(h).addClass(i.hassearch)
                            }
                            if (d.noResults) {
                                var f = t.closest("." + i.panel).length;
                                if (f || (t = l.$pnls.children("." + i.panel).first()), !t.children("." + i.noresultsmsg).length) {
                                    var v = t.children("." + i.listview).first();
                                    e('<div class="' + i.noresultsmsg + " " + i.hidden + '" />').append(d.noResults)[v.length ? "insertAfter" : "prependTo"](v.length ? v : t)
                                }
                            }
                        }
                    }), d.search) {
                        if (d.resultsPanel.add) {
                            d.showSubPanels = !1;
                            var h = this.$pnls.children("." + i.resultspanel);
                            h.length || (h = e('<div class="' + i.panel + " " + i.resultspanel + " " + i.hidden + '" />').appendTo(this.$pnls).append('<div class="' + i.navbar + " " + i.hidden + '"><a class="' + i.title + '">' + d.resultsPanel.title + "</a></div>").append('<ul class="' + i.listview + '" />').append(this.$pnls.find("." + i.noresultsmsg).first().clone()), this.init(h))
                        }
                        this.$menu.find("." + i.search).each(function () {
                            var n, r, c = e(this), u = c.closest("." + i.panel).length;
                            u ? (n = c.closest("." + i.panel), r = n) : (n = e("." + i.panel, l.$menu), r = l.$menu), d.resultsPanel.add && (n = n.not(h));
                            var p = c.children("input"), f = l.__findAddBack(n, "." + i.listview).children("li"),
                                v = f.filter("." + i.divider), m = l.__filterListItems(f), g = "a", b = g + ", span",
                                C = "", _ = function () {
                                    var t = p.val().toLowerCase();
                                    if (t != C) {
                                        if (C = t, d.resultsPanel.add && h.children("." + i.listview).empty(), n.scrollTop(0), m.add(v).addClass(i.hidden).find("." + i.fullsubopensearch).removeClass(i.fullsubopen + " " + i.fullsubopensearch), m.each(function () {
                                            var t = e(this), n = g;
                                            (d.showTextItems || d.showSubPanels && t.find("." + i.next)) && (n = b);
                                            var s = t.data(a.searchtext) || t.children(n).text();
                                            s.toLowerCase().indexOf(C) > -1 && t.add(t.prevAll("." + i.divider).first()).removeClass(i.hidden)
                                        }), d.showSubPanels && n.each(function (t) {
                                            var n = e(this);
                                            l.__filterListItems(n.find("." + i.listview).children()).each(function () {
                                                var t = e(this), n = t.data(a.sub);
                                                t.removeClass(i.nosubresults), n && n.find("." + i.listview).children().removeClass(i.hidden)
                                            })
                                        }), d.resultsPanel.add) if ("" === C) this.closeAllPanels(), this.openPanel(this.$pnls.children("." + i.subopened).last()); else {
                                            var s = e();
                                            n.each(function () {
                                                var t = l.__filterListItems(e(this).find("." + i.listview).children()).not("." + i.hidden).clone(!0);
                                                t.length && (d.resultsPanel.dividers && (s = s.add('<li class="' + i.divider + '">' + e(this).children("." + i.navbar).text() + "</li>")), s = s.add(t))
                                            }), s.find("." + i.next).remove(), h.children("." + i.listview).append(s), this.openPanel(h)
                                        } else e(n.get().reverse()).each(function (t) {
                                            var n = e(this), s = n.data(a.parent);
                                            s && (l.__filterListItems(n.find("." + i.listview).children()).length ? (s.hasClass(i.hidden) && s.children("." + i.next).not("." + i.fullsubopen).addClass(i.fullsubopen).addClass(i.fullsubopensearch), s.removeClass(i.hidden).removeClass(i.nosubresults).prevAll("." + i.divider).first().removeClass(i.hidden)) : u || (n.hasClass(i.opened) && setTimeout(function () {
                                                l.openPanel(s.closest("." + i.panel))
                                            }, (t + 1) * (1.5 * l.conf.openingInterval)), s.addClass(i.nosubresults)))
                                        });
                                        r.find("." + i.noresultsmsg)[m.not("." + i.hidden).length ? "addClass" : "removeClass"](i.hidden), this.update()
                                    }
                                };
                            p.off(o.keyup + "-" + s + " " + o.change + "-" + s).on(o.keyup + "-" + s, function (e) {
                                t(e.keyCode) || _.call(l)
                            }).on(o.change + "-" + s, function (e) {
                                _.call(l)
                            });
                            var $ = c.children("." + i.btn);
                            $.length && p.on(o.keyup + "-" + s, function (e) {
                                $[p.val().length ? "removeClass" : "addClass"](i.hidden)
                            }), p.trigger(o.keyup + "-" + s)
                        })
                    }
                }
            })
        }, add: function () {
            i = e[n]._c, a = e[n]._d, o = e[n]._e, i.add("clear search hassearch resultspanel noresultsmsg noresults nosubresults fullsubopensearch"), a.add("searchtext"), o.add("change keyup")
        }, clickAnchor: function (e, t) {
        }
    }, e[n].defaults[s] = {
        add: !1,
        addTo: "panels",
        placeholder: "Search",
        noResults: "No results found.",
        resultsPanel: {add: !1, dividers: !0, title: "Search results"},
        search: !0,
        showTextItems: !1,
        showSubPanels: !0
    }, e[n].configuration[s] = {clear: !1, form: !1, input: !1, submit: !1};
    var i, a, o, r
}(jQuery), function (e) {
    var t = "mmenu", n = "sectionIndexer";
    e[t].addons[n] = {
        setup: function () {
            var i = this, r = this.opts[n];
            this.conf[n];
            o = e[t].glbl, "boolean" == typeof r && (r = {add: r}), "object" != typeof r && (r = {}), r = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], r), this.bind("init", function (t) {
                if (r.add) {
                    var n;
                    switch (r.addTo) {
                        case"panels":
                            n = t;
                            break;
                        default:
                            n = e(r.addTo, this.$menu).filter("." + s.panel)
                    }
                    n.find("." + s.divider).closest("." + s.panel).addClass(s.hasindexer)
                }
                if (!this.$indexer && this.$pnls.children("." + s.hasindexer).length) {
                    this.$indexer = e('<div class="' + s.indexer + '" />').prependTo(this.$pnls).append('<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a>'), this.$indexer.children().on(a.mouseover + "-sectionindexer " + s.touchstart + "-sectionindexer", function (t) {
                        var n = e(this).attr("href").slice(1), a = i.$pnls.children("." + s.current),
                            o = a.find("." + s.listview), r = !1, l = a.scrollTop();
                        a.scrollTop(0), o.children("." + s.divider).not("." + s.hidden).each(function () {
                            r === !1 && n == e(this).text().slice(0, 1).toLowerCase() && (r = e(this).position().top)
                        }), a.scrollTop(r !== !1 ? r : l)
                    });
                    var o = function (e) {
                        i.$menu[(e.hasClass(s.hasindexer) ? "add" : "remove") + "Class"](s.hasindexer)
                    };
                    this.bind("openPanel", o), o.call(this, this.$pnls.children("." + s.current))
                }
            })
        }, add: function () {
            s = e[t]._c, i = e[t]._d, a = e[t]._e, s.add("indexer hasindexer"), a.add("mouseover touchstart")
        }, clickAnchor: function (e, t) {
            return e.parent().is("." + s.indexer) ? !0 : void 0
        }
    }, e[t].defaults[n] = {add: !1, addTo: "panels"};
    var s, i, a, o
}(jQuery), function (e) {
    var t = "mmenu", n = "setSelected";
    e[t].addons[n] = {
        setup: function () {
            var a = this.opts[n];
            this.conf[n];
            if (o = e[t].glbl, "boolean" == typeof a && (a = {
                hover: a,
                parent: a
            }), "object" != typeof a && (a = {}), a = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], a), a.current || this.bind("init", function (e) {
                e.find("." + s.listview).children("." + s.selected).removeClass(s.selected)
            }), a.hover && this.$menu.addClass(s.hoverselected), a.parent) {
                this.$menu.addClass(s.parentselected);
                var r = function (e) {
                    this.$pnls.find("." + s.listview).find("." + s.next).removeClass(s.selected);
                    for (var t = e.data(i.parent); t && t.length;) t = t.children("." + s.next).addClass(s.selected).closest("." + s.panel).data(i.parent)
                };
                this.bind("openedPanel", r), this.bind("init", function (e) {
                    r.call(this, this.$pnls.children("." + s.current))
                })
            }
        }, add: function () {
            s = e[t]._c, i = e[t]._d, a = e[t]._e, s.add("hoverselected parentselected")
        }, clickAnchor: function (e, t) {
        }
    }, e[t].defaults[n] = {current: !0, hover: !1, parent: !1};
    var s, i, a, o
}(jQuery), function (e) {
    var t = "mmenu", n = "toggles";
    e[t].addons[n] = {
        setup: function () {
            var i = this;
            this.opts[n], this.conf[n];
            o = e[t].glbl, this.bind("init", function (t) {
                this.__refactorClass(e("input", t), this.conf.classNames[n].toggle, "toggle"), this.__refactorClass(e("input", t), this.conf.classNames[n].check, "check"), e("input." + s.toggle + ", input." + s.check, t).each(function () {
                    var t = e(this), n = t.closest("li"), a = t.hasClass(s.toggle) ? "toggle" : "check",
                        o = t.attr("id") || i.__getUniqueId();
                    n.children('label[for="' + o + '"]').length || (t.attr("id", o), n.prepend(t), e('<label for="' + o + '" class="' + s[a] + '"></label>').insertBefore(n.children("a, span").last()))
                })
            })
        }, add: function () {
            s = e[t]._c, i = e[t]._d, a = e[t]._e, s.add("toggle check")
        }, clickAnchor: function (e, t) {
        }
    }, e[t].configuration.classNames[n] = {toggle: "Toggle", check: "Check"};
    var s, i, a, o
}(jQuery);
!function (i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function (i) {
    "use strict";
    var e = window.Slick || {};
    (e = function () {
        var e = 0;
        return function (t, o) {
            var s, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (e, t) {
                    return i('<button type="button" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
        }
    }()).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
    }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
        var s = this;
        if ("boolean" == typeof t) o = t, t = null; else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e)
        }), s.$slidesCache = s.$slides, s.reinit()
    }, e.prototype.animateHeight = function () {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({height: e}, i.options.speed)
        }
    }, e.prototype.animateSlide = function (e, t) {
        var o = {}, s = this;
        s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({left: e}, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({top: e}, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({animStart: s.currentLeft}).animate({animStart: e}, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function (i) {
                i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o))
            },
            complete: function () {
                t && t.call()
            }
        })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
            s.disableTransition(), t.call()
        }, s.options.speed))
    }, e.prototype.getNavTarget = function () {
        var e = this, t = e.options.asNavFor;
        return t && null !== t && (t = i(t).not(e.$slider)), t
    }, e.prototype.asNavFor = function (e) {
        var t = this.getNavTarget();
        null !== t && "object" == typeof t && t.each(function () {
            var t = i(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function (i) {
        var e = this, t = {};
        !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.autoPlay = function () {
        var i = this;
        i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function () {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function () {
        var i = this, e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e))
    }, e.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function () {
        var e, t, o = this;
        if (!0 === o.options.dots) {
            for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
            o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
        }
    }, e.prototype.buildOut = function () {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function () {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
            for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
                var d = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var a = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && a.appendChild(n.get(c))
                    }
                    d.appendChild(a)
                }
                o.appendChild(d)
            }
            l.$slider.empty().append(o), l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, e.prototype.checkResponsive = function (e, t) {
        var o, s, n, r = this, l = !1, d = r.$slider.width(), a = window.innerWidth || i(window).width();
        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;
            for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
        }
    }, e.prototype.changeSlide = function (e, t) {
        var o, s, n, r = this, l = i(e.currentTarget);
        switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
            case"previous":
                s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                break;
            case"next":
                s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                break;
            case"index":
                var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function (i) {
        var e, t;
        if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1]; else for (var o in e) {
            if (i < e[o]) {
                i = t;
                break
            }
            t = e[o]
        }
        return i
    }, e.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function () {
        var e = this;
        e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function () {
        var i, e = this;
        e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i))
    }, e.prototype.clickHandler = function (i) {
        !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
    }, e.prototype.destroy = function (e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            i(this).attr("style", i(this).data("originalStyling"))
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, e.prototype.disableTransition = function (i) {
        var e = this, t = {};
        t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.fadeSlide = function (i, e) {
        var t = this;
        !1 === t.cssTransitions ? (t.$slides.eq(i).css({zIndex: t.options.zIndex}), t.$slides.eq(i).animate({opacity: 1}, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }), e && setTimeout(function () {
            t.disableTransition(i), e.call()
        }, t.options.speed))
    }, e.prototype.fadeSlideOut = function (i) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(i).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function () {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
            t.stopImmediatePropagation();
            var o = i(this);
            setTimeout(function () {
                e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay())
            }, 0)
        })
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
        return this.currentSlide
    }, e.prototype.getDotCount = function () {
        var i = this, e = 0, t = 0, o = 0;
        if (!0 === i.options.infinite) if (i.slideCount <= i.options.slidesToShow) ++o; else for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else if (!0 === i.options.centerMode) o = i.slideCount; else if (i.options.asNavFor) for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1
    }, e.prototype.getLeft = function (i) {
        var e, t, o, s, n = this, r = 0;
        return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
        return this.options[i]
    }, e.prototype.getNavigableIndexes = function () {
        var i, e = this, t = 0, o = 0, s = [];
        for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }, e.prototype.getSlick = function () {
        return this
    }, e.prototype.getSlideCount = function () {
        var e, t, o = this;
        return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
            if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1
        }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
        this.changeSlide({data: {message: "index", index: parseInt(i)}}, e)
    }, e.prototype.init = function (e) {
        var t = this;
        i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, e.prototype.initADA = function () {
        var e = this, t = Math.ceil(e.slideCount / e.options.slidesToShow),
            o = e.getNavigableIndexes().filter(function (i) {
                return i >= 0 && i < e.slideCount
            });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({tabindex: "-1"}), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
            var s = o.indexOf(t);
            i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1
            }), -1 !== s && i(this).attr({"aria-describedby": "slick-slide-control" + e.instanceUid + s})
        }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
            var n = o[s];
            i(this).attr({role: "presentation"}), i(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + s,
                "aria-controls": "slick-slide" + e.instanceUid + n,
                "aria-label": s + 1 + " of " + t,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({"aria-selected": "true", tabindex: "0"}).end());
        for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
        e.activateADA()
    }, e.prototype.initArrowEvents = function () {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)))
    }, e.prototype.initDotEvents = function () {
        var e = this;
        !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {message: "index"}, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.initSlideEvents = function () {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {action: "start"}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {action: "move"}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {action: "end"}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition)
    }, e.prototype.initUI = function () {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
    }, e.prototype.keyHandler = function (i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({data: {message: !0 === e.options.rtl ? "next" : "previous"}}) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({data: {message: !0 === e.options.rtl ? "previous" : "next"}}))
    }, e.prototype.lazyLoad = function () {
        function e(e) {
            i("img[data-lazy]", e).each(function () {
                var e = i(this), t = i(this).attr("data-lazy"), o = i(this).attr("data-srcset"),
                    s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"), r = document.createElement("img");
                r.onload = function () {
                    e.animate({opacity: 0}, 100, function () {
                        o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({opacity: 1}, 200, function () {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), n.$slider.trigger("lazyLoaded", [n, e, t])
                    })
                }, r.onerror = function () {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t])
                }, r.src = t
            })
        }

        var t, o, s, n = this;
        if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
        e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }, e.prototype.loadSlider = function () {
        var i = this;
        i.setPosition(), i.$slideTrack.css({opacity: 1}), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function () {
        this.changeSlide({data: {message: "next"}})
    }, e.prototype.orientationChange = function () {
        var i = this;
        i.checkResponsive(), i.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function () {
        var i = this;
        i.autoPlayClear(), i.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function () {
        var i = this;
        i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
    }, e.prototype.postSlide = function (e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    }, e.prototype.prev = e.prototype.slickPrev = function () {
        this.changeSlide({data: {message: "previous"}})
    }, e.prototype.preventDefault = function (i) {
        i.preventDefault()
    }, e.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var t, o, s, n, r, l = this, d = i("img[data-lazy]", l.$slider);
        d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad()
        }, r.onerror = function () {
            e < 3 ? setTimeout(function () {
                l.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad())
        }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
    }, e.prototype.refresh = function (e) {
        var t, o, s = this;
        o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {currentSlide: t}), s.init(), e || s.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }, e.prototype.registerBreakpoints = function () {
        var e, t, o, s = this, n = s.options.responsive || null;
        if ("array" === i.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for (e in n) if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
                for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
            }
            s.breakpoints.sort(function (i, e) {
                return s.options.mobileFirst ? i - e : e - i
            })
        }
    }, e.prototype.reinit = function () {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function () {
        var e = this;
        i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
            e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
        var o = this;
        if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
        o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
    }, e.prototype.setCSS = function (i) {
        var e, t, o = this, s = {};
        !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
    }, e.prototype.setDimensions = function () {
        var i = this;
        !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({padding: "0px " + i.options.centerPadding}) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({padding: i.options.centerPadding + " 0px"})), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
    }, e.prototype.setFade = function () {
        var e, t = this;
        t.$slides.each(function (o, s) {
            e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : i(s).css({position: "relative", left: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0})
        }), t.$slides.eq(t.currentSlide).css({zIndex: t.options.zIndex - 1, opacity: 1})
    }, e.prototype.setHeight = function () {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function () {
        var e, t, o, s, n, r = this, l = !1;
        if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s; else if ("multiple" === n) i.each(o, function (i, e) {
            r.options[i] = e
        }); else if ("responsive" === n) for (t in s) if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]]; else {
            for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
            r.options.responsive.push(s[t])
        }
        l && (r.unload(), r.reinit())
    }, e.prototype.setPosition = function () {
        var i = this;
        i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
    }, e.prototype.setProps = function () {
        var i = this, e = document.body.style;
        i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
    }, e.prototype.setSlideClasses = function (i) {
        var e, t, o, s, n = this;
        if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
            var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")
        } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }, e.prototype.setupInfinite = function () {
        var e, t, o, s = this;
        if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
            for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                i(this).attr("id", "")
            })
        }
    }, e.prototype.interrupt = function (i) {
        var e = this;
        i || e.autoPlay(), e.interrupted = i
    }, e.prototype.selectHandler = function (e) {
        var t = this, o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
            s = parseInt(o.attr("data-slick-index"));
        s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
    }, e.prototype.slideHandler = function (i, e, t) {
        var o, s, n, r, l, d = null, a = this;
        if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
            a.postSlide(o)
        }) : a.postSlide(o)); else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
            a.postSlide(o)
        }) : a.postSlide(o)); else {
            if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
                a.postSlide(s)
            })) : a.postSlide(s), void a.animateHeight();
            !0 !== t ? a.animateSlide(d, function () {
                a.postSlide(s)
            }) : a.postSlide(s)
        }
    }, e.prototype.startLoad = function () {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function () {
        var i, e, t, o, s = this;
        return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
    }, e.prototype.swipeEnd = function (i) {
        var e, t, o = this;
        if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
        if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
                case"left":
                case"down":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                    break;
                case"right":
                case"up":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
            }
            "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
    }, e.prototype.swipeHandler = function (i) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
            case"start":
                e.swipeStart(i);
                break;
            case"move":
                e.swipeMove(i);
                break;
            case"end":
                e.swipeEnd(i)
        }
    }, e.prototype.swipeMove = function (i) {
        var e, t, o, s, n, r, l = this;
        return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))))
    }, e.prototype.swipeStart = function (i) {
        var e, t = this;
        if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
        void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
        var i = this;
        null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
    }, e.prototype.unload = function () {
        var e = this;
        i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function (i) {
        var e = this;
        e.$slider.trigger("unslick", [e, i]), e.destroy()
    }, e.prototype.updateArrows = function () {
        var i = this;
        Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function () {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
    }, e.prototype.visibility = function () {
        var i = this;
        i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
    }, i.fn.slick = function () {
        var i, t, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = o.length;
        for (i = 0; i < r; i++) if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
        return o
    }
});
$(document).ready(function ($) {
    $("#menu-mobile").mmenu()
});
window.onscroll = function () {
    myFunction()
};
var navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function myFunction() {
    if ($(window).scrollTop() >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }
};var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = !0;
    s1.src = 'https://embed.tawk.to/600e4cf6a9a34e36b96fdf80/1esrtp99u';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0)
})();
jQuery(document).ready(function ($) {
    $('.btn-search').click(function () {
        $('.form').toggle()
    });
    $('.slider-services').slick({
        centerMode: !0,
        centerPadding: '60px',
        slidesToShow: 5,
        dots: !0,
        arrows: !0,
        responsive: [{
            breakpoint: 768,
            settings: {arrows: !1, centerMode: !0, centerPadding: '40px', slidesToShow: 3}
        }, {
            breakpoint: 480,
            settings: {arrows: !1, centerMode: !0, centerPadding: '40px', slidesToShow: 1, variableWidth: !0}
        }]
    })
})