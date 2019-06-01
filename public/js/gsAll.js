/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-borderimage-borderradius-boxshadow-hsla-opacity-rgba-hashchange-history-video-input-inputtypes-printshiv-mq-cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-forms_placeholder-load
 */
window.blockchain = {};
;window.Modernizr = function (a, b, c) {
    function C(a) {
        j.cssText = a
    }

    function D(a, b) {
        return C(n.join(a + ";") + (b || ""))
    }

    function E(a, b) {
        return typeof a === b
    }

    function F(a, b) {
        return !!~("" + a).indexOf(b)
    }

    function G(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!F(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
        }
        return !1
    }

    function H(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c) return d === !1 ? a[e] : E(f, "function") ? f.bind(d || b) : f
        }
        return !1
    }

    function I(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + p.join(d + " ") + d).split(" ");
        return E(b, "string") || E(b, "undefined") ? G(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), H(e, b, c))
    }

    function J() {
        e.input = function (c) {
            for (var d = 0, e = c.length; d < e; d++) t[c[d]] = c[d] in k;
            return t.list && (t.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), t
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), e.inputtypes = function (a) {
            for (var d = 0, e, f, h, i = a.length; d < i; d++) k.setAttribute("type", f = a[d]), e = k.type !== "text", e && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0, g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity() === !1 : e = k.value != l)), s[a[d]] = !!e;
            return s
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }

    var d = "2.6.2", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style,
        k = b.createElement("input"), l = ":)", m = {}.toString, n = " -webkit- -moz- -o- -ms- ".split(" "),
        o = "Webkit Moz O ms", p = o.split(" "), q = o.toLowerCase().split(" "), r = {}, s = {}, t = {}, u = [],
        v = u.slice, w, x = function (a, c, d, e) {
            var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body");
            if (parseInt(d, 10)) while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
            return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
        }, y = function (b) {
            var c = a.matchMedia || a.msMatchMedia;
            if (c) return c(b).matches;
            var d;
            return x("@media " + b + " { #" + h + " { position: absolute; } }", function (b) {
                d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute"
            }), d
        }, z = function () {
            function d(d, e) {
                e = e || b.createElement(a[d] || "div"), d = "on" + d;
                var f = d in e;
                return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = E(e[d], "function"), E(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f
            }

            var a = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return d
        }(), A = {}.hasOwnProperty, B;
    !E(A, "undefined") && !E(A.call, "undefined") ? B = function (a, b) {
        return A.call(a, b)
    } : B = function (a, b) {
        return b in a && E(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function (b) {
        var c = this;
        if (typeof c != "function") throw new TypeError;
        var d = v.call(arguments, 1), e = function () {
            if (this instanceof e) {
                var a = function () {
                };
                a.prototype = c.prototype;
                var f = new a, g = c.apply(f, d.concat(v.call(arguments)));
                return Object(g) === g ? g : f
            }
            return c.apply(b, d.concat(v.call(arguments)))
        };
        return e
    }), r.hashchange = function () {
        return z("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
    }, r.history = function () {
        return !!a.history && !!history.pushState
    }, r.rgba = function () {
        return C("background-color:rgba(150,255,150,.5)"), F(j.backgroundColor, "rgba")
    }, r.hsla = function () {
        return C("background-color:hsla(120,40%,100%,.5)"), F(j.backgroundColor, "rgba") || F(j.backgroundColor, "hsla")
    }, r.borderimage = function () {
        return I("borderImage")
    }, r.borderradius = function () {
        return I("borderRadius")
    }, r.boxshadow = function () {
        return I("boxShadow")
    }, r.opacity = function () {
        return D("opacity:.55"), /^0.55$/.test(j.opacity)
    }, r.fontface = function () {
        var a;
        return x('@font-face {font-family:"font";src:url("https://")}', function (c, d) {
            var e = b.getElementById("smodernizr"), f = e.sheet || e.styleSheet,
                g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
            a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0
        }), a
    }, r.video = function () {
        var a = b.createElement("video"), c = !1;
        try {
            if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
        } catch (d) {
        }
        return c
    };
    for (var K in r) B(r, K) && (w = K.toLowerCase(), e[w] = r[K](), u.push((e[w] ? "" : "no-") + w));
    return e.input || J(), e.addTest = function (a, b) {
        if (typeof a == "object") for (var d in a) B(a, d) && e.addTest(d, a[d]); else {
            a = a.toLowerCase();
            if (e[a] !== c) return e;
            b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
        }
        return e
    }, C(""), i = k = null, e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.mq = y, e.hasEvent = z, e.testProp = function (a) {
        return G([a])
    }, e.testAllProps = I, e.testStyles = x, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + u.join(" ") : ""), e
}(this, this.document), function (a, b) {
    function k(a, b) {
        var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement;
        return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
    }

    function l() {
        var a = r.elements;
        return typeof a == "string" ? a.split(" ") : a
    }

    function m(a) {
        var b = i[a[g]];
        return b || (b = {}, h++, a[g] = h, i[h] = b), b
    }

    function n(a, c, f) {
        c || (c = b);
        if (j) return c.createElement(a);
        f || (f = m(c));
        var g;
        return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
    }

    function o(a, c) {
        a || (a = b);
        if (j) return a.createDocumentFragment();
        c = c || m(a);
        var d = c.frag.cloneNode(), e = 0, f = l(), g = f.length;
        for (; e < g; e++) d.createElement(f[e]);
        return d
    }

    function p(a, b) {
        b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
            return r.shivMethods ? n(c, a, b) : b.createElem(c)
        }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function (a) {
            return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
        }) + ");return n}")(r, b.frag)
    }

    function q(a) {
        a || (a = b);
        var c = m(a);
        return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
    }

    function v(a) {
        var b, c = a.getElementsByTagName("*"), d = c.length, e = RegExp("^(?:" + l().join("|") + ")$", "i"), f = [];
        while (d--) b = c[d], e.test(b.nodeName) && f.push(b.applyElement(w(b)));
        return f
    }

    function w(a) {
        var b, c = a.attributes, d = c.length, e = a.ownerDocument.createElement(t + ":" + a.nodeName);
        while (d--) b = c[d], b.specified && e.setAttribute(b.nodeName, b.nodeValue);
        return e.style.cssText = a.style.cssText, e
    }

    function x(a) {
        var b, c = a.split("{"), d = c.length,
            e = RegExp("(^|[\\s,>+~])(" + l().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"), f = "$1" + t + "\\:$2";
        while (d--) b = c[d] = c[d].split("}"), b[b.length - 1] = b[b.length - 1].replace(e, f), c[d] = b.join("}");
        return c.join("{")
    }

    function y(a) {
        var b = a.length;
        while (b--) a[b].removeNode()
    }

    function z(a) {
        function g() {
            clearTimeout(d._removeSheetTimer), b && b.removeNode(!0), b = null
        }

        var b, c, d = m(a), e = a.namespaces, f = a.parentWindow;
        return !u || a.printShived ? a : (typeof e[t] == "undefined" && e.add(t), f.attachEvent("onbeforeprint", function () {
            g();
            var d, e, f, h = a.styleSheets, i = [], j = h.length, l = Array(j);
            while (j--) l[j] = h[j];
            while (f = l.pop()) if (!f.disabled && s.test(f.media)) {
                try {
                    d = f.imports, e = d.length
                } catch (m) {
                    e = 0
                }
                for (j = 0; j < e; j++) l.push(d[j]);
                try {
                    i.push(f.cssText)
                } catch (m) {
                }
            }
            i = x(i.reverse().join("")), c = v(a), b = k(a, i)
        }), f.attachEvent("onafterprint", function () {
            y(c), clearTimeout(d._removeSheetTimer), d._removeSheetTimer = setTimeout(g, 500)
        }), a.printShived = !0, a)
    }

    var c = a.html5 || {}, d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        e = /^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,
        f, g = "_html5shiv", h = 0, i = {}, j;
    (function () {
        try {
            var a = b.createElement("a");
            a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function () {
                b.createElement("a");
                var a = b.createDocumentFragment();
                return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
            }()
        } catch (c) {
            f = !0, j = !0
        }
    })();
    var r = {
        elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
        shivCSS: c.shivCSS !== !1,
        supportsUnknownElements: j,
        shivMethods: c.shivMethods !== !1,
        type: "default",
        shivDocument: q,
        createElement: n,
        createDocumentFragment: o
    };
    a.html5 = r, q(b);
    var s = /^$|\b(?:all|print)\b/, t = "html5shiv", u = !j && function () {
        var c = b.documentElement;
        return typeof b.namespaces != "undefined" && typeof b.parentWindow != "undefined" && typeof c.applyElement != "undefined" && typeof c.removeNode != "undefined" && typeof a.attachEvent != "undefined"
    }();
    r.type += " print", r.shivPrint = z, z(b)
}(this, document), function (a, b, c) {
    function d(a) {
        return "[object Function]" == o.call(a)
    }

    function e(a) {
        return "string" == typeof a
    }

    function f() {
    }

    function g(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }

    function h() {
        var a = p.shift();
        q = 1, a ? a.t ? m(function () {
            ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(), h()) : q = 0
    }

    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                "img" != a && m(function () {
                    t.removeChild(l)
                }, 50);
                for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
            }
        }

        var j = j || B.errorTimeout, l = b.createElement(a), o = 0, r = 0, u = {t: d, s: c, e: f, a: i, x: j};
        1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
            k.call(this, r)
        }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
    }

    function j(a, b, c, d, f) {
        return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
    }

    function k() {
        var a = B;
        return a.loader = {load: j, i: 0}, a
    }

    var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [],
        q = 0, r = "MozAppearance" in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode,
        l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l,
        u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function (a) {
            return "[object Array]" == o.call(a)
        }, x = [], y = {}, z = {
            timeout: function (a, b) {
                return b.length && (a.timeout = b[0]), a
            }
        }, A, B;
    B = function (a) {
        function b(a) {
            var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = {url: c, origUrl: c, prefixes: a}, e, f,
                g;
            for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
            for (f = 0; f < b; f++) c = x[f](c);
            return c
        }

        function g(a, e, f, g, h) {
            var i = b(a), j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
                k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
            })))
        }

        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a)) c || (j = function () {
                        var a = [].slice.call(arguments);
                        k.apply(this, a), l()
                    }), g(a, j, b, 0, h); else if (Object(a) === a) for (n in m = function () {
                        var b = 0, c;
                        for (c in a) a.hasOwnProperty(c) && b++;
                        return b
                    }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function () {
                        var a = [].slice.call(arguments);
                        k.apply(this, a), l()
                    } : j[n] = function (a) {
                        return function () {
                            var b = [].slice.call(arguments);
                            a && a.apply(this, b), l()
                        }
                    }(k[n])), g(a[n], j, b, n, h))
                } else !c && l()
            }

            var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n;
            c(h ? a.yep : a.nope, !!i), i && c(i)
        }

        var i, j, l = this.yepnope.loader;
        if (e(a)) g(a, 0, l, 0); else if (w(a)) for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l); else Object(a) === a && h(a, l)
    }, B.addPrefix = function (a, b) {
        z[a] = b
    }, B.addFilter = function (a) {
        x.push(a)
    }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () {
        b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
        var k = b.createElement("script"), l, o, e = e || B.errorTimeout;
        k.src = a;
        for (o in d) k.setAttribute(o, d[o]);
        c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
            !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
        }, m(function () {
            l || (l = 1, c(1))
        }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
    }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
        var e = b.createElement("link"), j, c = i ? h : c || f;
        e.href = a, e.rel = "stylesheet", e.type = "text/css";
        for (j in d) e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
}(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
}, Modernizr.addTest("placeholder", function () {
    return "placeholder" in (Modernizr.input || document.createElement("input")) && "placeholder" in (Modernizr.textarea || document.createElement("textarea"))
});
/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
*/
(function (e, t) {
    var n, r, i = typeof t, o = e.document, a = e.location, s = e.jQuery, u = e.$, l = {}, c = [], p = "1.9.1",
        f = c.concat, d = c.push, h = c.slice, g = c.indexOf, m = l.toString, y = l.hasOwnProperty, v = p.trim,
        b = function (e, t) {
            return new b.fn.init(e, t, r)
        }, x = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, w = /\S+/g, T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        N = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, k = /^[\],:{}\s]*$/,
        E = /(?:^|:|,)(?:\s*\[)+/g, S = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, j = /^-ms-/, D = /-([\da-z])/gi,
        L = function (e, t) {
            return t.toUpperCase()
        }, H = function (e) {
            (o.addEventListener || "load" === e.type || "complete" === o.readyState) && (q(), b.ready())
        }, q = function () {
            o.addEventListener ? (o.removeEventListener("DOMContentLoaded", H, !1), e.removeEventListener("load", H, !1)) : (o.detachEvent("onreadystatechange", H), e.detachEvent("onload", H))
        };
    b.fn = b.prototype = {
        jquery: p, constructor: b, init: function (e, n, r) {
            var i, a;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof b ? n[0] : n, b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0)), C.test(i[1]) && b.isPlainObject(n)) for (i in n) b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (a = o.getElementById(i[2]), a && a.parentNode) {
                    if (a.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = a
                }
                return this.context = o, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : b.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), b.makeArray(e, this))
        }, selector: "", length: 0, size: function () {
            return this.length
        }, toArray: function () {
            return h.call(this)
        }, get: function (e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        }, pushStack: function (e) {
            var t = b.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e, t) {
            return b.each(this, e, t)
        }, ready: function (e) {
            return b.ready.promise().done(e), this
        }, slice: function () {
            return this.pushStack(h.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        }, map: function (e) {
            return this.pushStack(b.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: d, sort: [].sort, splice: [].splice
    }, b.fn.init.prototype = b.fn, b.extend = b.fn.extend = function () {
        var e, n, r, i, o, a, s = arguments[0] || {}, u = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || b.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++) if (null != (o = arguments[u])) for (i in o) e = s[i], r = o[i], s !== r && (c && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1, a = e && b.isArray(e) ? e : []) : a = e && b.isPlainObject(e) ? e : {}, s[i] = b.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }, b.extend({
        noConflict: function (t) {
            return e.$ === b && (e.$ = u), t && e.jQuery === b && (e.jQuery = s), b
        }, isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? b.readyWait++ : b.ready(!0)
        }, ready: function (e) {
            if (e === !0 ? !--b.readyWait : !b.isReady) {
                if (!o.body) return setTimeout(b.ready);
                b.isReady = !0, e !== !0 && --b.readyWait > 0 || (n.resolveWith(o, [b]), b.fn.trigger && b(o).trigger("ready").off("ready"))
            }
        }, isFunction: function (e) {
            return "function" === b.type(e)
        }, isArray: Array.isArray || function (e) {
            return "array" === b.type(e)
        }, isWindow: function (e) {
            return null != e && e == e.window
        }, isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object" : typeof e
        }, isPlainObject: function (e) {
            if (!e || "object" !== b.type(e) || e.nodeType || b.isWindow(e)) return !1;
            try {
                if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e) ;
            return r === t || y.call(e, r)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, error: function (e) {
            throw Error(e)
        }, parseHTML: function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || o;
            var r = C.exec(e), i = !n && [];
            return r ? [t.createElement(r[1])] : (r = b.buildFragment([e], t, i), i && b(i).remove(), b.merge([], r.childNodes))
        }, parseJSON: function (n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = b.trim(n), n && k.test(n.replace(S, "@").replace(A, "]").replace(E, ""))) ? Function("return " + n)() : (b.error("Invalid JSON: " + n), t)
        }, parseXML: function (n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + n), r
        }, noop: function () {
        }, globalEval: function (t) {
            t && b.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        }, camelCase: function (e) {
            return e.replace(j, "ms-").replace(D, L)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t, n) {
            var r, i = 0, o = e.length, a = M(e);
            if (n) {
                if (a) {
                    for (; o > i; i++) if (r = t.apply(e[i], n), r === !1) break
                } else for (i in e) if (r = t.apply(e[i], n), r === !1) break
            } else if (a) {
                for (; o > i; i++) if (r = t.call(e[i], i, e[i]), r === !1) break
            } else for (i in e) if (r = t.call(e[i], i, e[i]), r === !1) break;
            return e
        }, trim: v && !v.call("\ufeff\u00a0") ? function (e) {
            return null == e ? "" : v.call(e)
        } : function (e) {
            return null == e ? "" : (e + "").replace(T, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (M(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n
        }, inArray: function (e, t, n) {
            var r;
            if (t) {
                if (g) return g.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n
            }
            return -1
        }, merge: function (e, n) {
            var r = n.length, i = e.length, o = 0;
            if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o]; else while (n[o] !== t) e[i++] = n[o++];
            return e.length = i, e
        }, grep: function (e, t, n) {
            var r, i = [], o = 0, a = e.length;
            for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i
        }, map: function (e, t, n) {
            var r, i = 0, o = e.length, a = M(e), s = [];
            if (a) for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r); else for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r);
            return f.apply([], s)
        }, guid: 1, proxy: function (e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), b.isFunction(e) ? (r = h.call(arguments, 2), i = function () {
                return e.apply(n || this, r.concat(h.call(arguments)))
            }, i.guid = e.guid = e.guid || b.guid++, i) : t
        }, access: function (e, n, r, i, o, a, s) {
            var u = 0, l = e.length, c = null == r;
            if ("object" === b.type(r)) {
                o = !0;
                for (u in r) b.access(e, n, u, r[u], !0, a, s)
            } else if (i !== t && (o = !0, b.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
                    return c.call(b(e), n)
                })), n)) for (; l > u; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
            return o ? e : c ? n.call(e) : l ? n(e[0], r) : a
        }, now: function () {
            return (new Date).getTime()
        }
    }), b.ready.promise = function (t) {
        if (!n) if (n = b.Deferred(), "complete" === o.readyState) setTimeout(b.ready); else if (o.addEventListener) o.addEventListener("DOMContentLoaded", H, !1), e.addEventListener("load", H, !1); else {
            o.attachEvent("onreadystatechange", H), e.attachEvent("onload", H);
            var r = !1;
            try {
                r = null == e.frameElement && o.documentElement
            } catch (i) {
            }
            r && r.doScroll && function a() {
                if (!b.isReady) {
                    try {
                        r.doScroll("left")
                    } catch (e) {
                        return setTimeout(a, 50)
                    }
                    q(), b.ready()
                }
            }()
        }
        return n.promise(t)
    }, b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });

    function M(e) {
        var t = e.length, n = b.type(e);
        return b.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    r = b(o);
    var _ = {};

    function F(e) {
        var t = _[e] = {};
        return b.each(e.match(w) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    b.Callbacks = function (e) {
        e = "string" == typeof e ? _[e] || F(e) : b.extend({}, e);
        var n, r, i, o, a, s, u = [], l = !e.once && [], c = function (t) {
            for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = u.length, n = !0; u && o > a; a++) if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                r = !1;
                break
            }
            n = !1, u && (l ? l.length && c(l.shift()) : r ? u = [] : p.disable())
        }, p = {
            add: function () {
                if (u) {
                    var t = u.length;
                    (function i(t) {
                        b.each(t, function (t, n) {
                            var r = b.type(n);
                            "function" === r ? e.unique && p.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
                        })
                    })(arguments), n ? o = u.length : r && (s = t, c(r))
                }
                return this
            }, remove: function () {
                return u && b.each(arguments, function (e, t) {
                    var r;
                    while ((r = b.inArray(t, u, r)) > -1) u.splice(r, 1), n && (o >= r && o--, a >= r && a--)
                }), this
            }, has: function (e) {
                return e ? b.inArray(e, u) > -1 : !(!u || !u.length)
            }, empty: function () {
                return u = [], this
            }, disable: function () {
                return u = l = r = t, this
            }, disabled: function () {
                return !u
            }, lock: function () {
                return l = t, r || p.disable(), this
            }, locked: function () {
                return !l
            }, fireWith: function (e, t) {
                return t = t || [], t = [e, t.slice ? t.slice() : t], !u || i && !l || (n ? l.push(t) : c(t)), this
            }, fire: function () {
                return p.fireWith(this, arguments), this
            }, fired: function () {
                return !!i
            }
        };
        return p
    }, b.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", b.Callbacks("once memory"), "resolved"], ["reject", "fail", b.Callbacks("once memory"), "rejected"], ["notify", "progress", b.Callbacks("memory")]],
                n = "pending", r = {
                    state: function () {
                        return n
                    }, always: function () {
                        return i.done(arguments).fail(arguments), this
                    }, then: function () {
                        var e = arguments;
                        return b.Deferred(function (n) {
                            b.each(t, function (t, o) {
                                var a = o[0], s = b.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? b.extend(e, r) : r
                    }
                }, i = {};
            return r.pipe = r.then, b.each(t, function (e, o) {
                var a = o[2], s = o[3];
                r[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        }, when: function (e) {
            var t = 0, n = h.call(arguments), r = n.length, i = 1 !== r || e && b.isFunction(e.promise) ? r : 0,
                o = 1 === i ? e : b.Deferred(), a = function (e, t, n) {
                    return function (r) {
                        t[e] = this, n[e] = arguments.length > 1 ? h.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                    }
                }, s, u, l;
            if (r > 1) for (s = Array(r), u = Array(r), l = Array(r); r > t; t++) n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(a(t, l, n)).fail(o.reject).progress(a(t, u, s)) : --i;
            return i || o.resolveWith(l, n), o.promise()
        }
    }), b.support = function () {
        var t, n, r, a, s, u, l, c, p, f, d = o.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
        s = o.createElement("select"), l = s.appendChild(o.createElement("option")), a = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            getSetAttribute: "t" !== d.className,
            leadingWhitespace: 3 === d.firstChild.nodeType,
            tbody: !d.getElementsByTagName("tbody").length,
            htmlSerialize: !!d.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: "/a" === r.getAttribute("href"),
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: !!a.value,
            optSelected: l.selected,
            enctype: !!o.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== o.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === o.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !l.disabled;
        try {
            delete d.test
        } catch (h) {
            t.deleteExpando = !1
        }
        a = o.createElement("input"), a.setAttribute("value", ""), t.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "t"), a.setAttribute("name", "t"), u = o.createDocumentFragment(), u.appendChild(a), t.appendChecked = a.checked, t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (f in{
            submit: !0,
            change: !0,
            focusin: !0
        }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
        return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip, b(function () {
            var n, r, a,
                s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                u = o.getElementsByTagName("body")[0];
            u && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", u.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a = d.getElementsByTagName("td"), a[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === a[0].offsetHeight, a[0].style.display = "", a[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === a[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== u.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {width: "4px"}).width, r = d.appendChild(o.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (u.style.zoom = 1)), u.removeChild(n), n = d = a = r = null)
        }), n = s = u = l = r = a = null, t
    }();
    var O = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, B = /([A-Z])/g;

    function P(e, n, r, i) {
        if (b.acceptData(e)) {
            var o, a, s = b.expando, u = "string" == typeof n, l = e.nodeType, p = l ? b.cache : e,
                f = l ? e[s] : e[s] && s;
            if (f && p[f] && (i || p[f].data) || !u || r !== t) return f || (l ? e[s] = f = c.pop() || b.guid++ : f = s), p[f] || (p[f] = {}, l || (p[f].toJSON = b.noop)), ("object" == typeof n || "function" == typeof n) && (i ? p[f] = b.extend(p[f], n) : p[f].data = b.extend(p[f].data, n)), o = p[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[b.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[b.camelCase(n)])) : a = o, a
        }
    }

    function R(e, t, n) {
        if (b.acceptData(e)) {
            var r, i, o, a = e.nodeType, s = a ? b.cache : e, u = a ? e[b.expando] : b.expando;
            if (s[u]) {
                if (t && (o = n ? s[u] : s[u].data)) {
                    b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)) : t in o ? t = [t] : (t = b.camelCase(t), t = t in o ? [t] : t.split(" "));
                    for (r = 0, i = t.length; i > r; r++) delete o[t[r]];
                    if (!(n ? $ : b.isEmptyObject)(o)) return
                }
                (n || (delete s[u].data, $(s[u]))) && (a ? b.cleanData([e], !0) : b.support.deleteExpando || s != s.window ? delete s[u] : s[u] = null)
            }
        }
    }

    b.extend({
        cache: {},
        expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
        noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
        hasData: function (e) {
            return e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando], !!e && !$(e)
        },
        data: function (e, t, n) {
            return P(e, t, n)
        },
        removeData: function (e, t) {
            return R(e, t)
        },
        _data: function (e, t, n) {
            return P(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return R(e, t, !0)
        },
        acceptData: function (e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && b.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), b.fn.extend({
        data: function (e, n) {
            var r, i, o = this[0], a = 0, s = null;
            if (e === t) {
                if (this.length && (s = b.data(o), 1 === o.nodeType && !b._data(o, "parsedAttrs"))) {
                    for (r = o.attributes; r.length > a; a++) i = r[a].name, i.indexOf("data-") || (i = b.camelCase(i.slice(5)), W(o, i, s[i]));
                    b._data(o, "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof e ? this.each(function () {
                b.data(this, e)
            }) : b.access(this, function (n) {
                return n === t ? o ? W(o, e, b.data(o, e)) : null : (this.each(function () {
                    b.data(this, e, n)
                }), t)
            }, null, n, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                b.removeData(this, e)
            })
        }
    });

    function W(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(B, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : O.test(r) ? b.parseJSON(r) : r
                } catch (o) {
                }
                b.data(e, n, r)
            } else r = t
        }
        return r
    }

    function $(e) {
        var t;
        for (t in e) if (("data" !== t || !b.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    b.extend({
        queue: function (e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = b._data(e, n), r && (!i || b.isArray(r) ? i = b._data(e, n, b.makeArray(r)) : i.push(r)), i || []) : t
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = b.queue(e, t), r = n.length, i = n.shift(), o = b._queueHooks(e, t), a = function () {
                b.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return b._data(e, n) || b._data(e, n, {
                empty: b.Callbacks("once memory").add(function () {
                    b._removeData(e, t + "queue"), b._removeData(e, n)
                })
            })
        }
    }), b.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? b.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = b.queue(this, e, n);
                b._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && b.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                b.dequeue(this, e)
            })
        }, delay: function (e, t) {
            return e = b.fx ? b.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, n) {
            var r, i = 1, o = b.Deferred(), a = this, s = this.length, u = function () {
                --i || o.resolveWith(a, [a])
            };
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            while (s--) r = b._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
            return u(), o.promise(n)
        }
    });
    var I, z, X = /[\t\r\n]/g, U = /\r/g, V = /^(?:input|select|textarea|button|object)$/i, Y = /^(?:a|area)$/i,
        J = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        G = /^(?:checked|selected)$/i, Q = b.support.getSetAttribute, K = b.support.input;
    b.fn.extend({
        attr: function (e, t) {
            return b.access(this, b.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                b.removeAttr(this, e)
            })
        }, prop: function (e, t) {
            return b.access(this, b.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return e = b.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {
                }
            })
        }, addClass: function (e) {
            var t, n, r, i, o, a = 0, s = this.length, u = "string" == typeof e && e;
            if (b.isFunction(e)) return this.each(function (t) {
                b(this).addClass(e.call(this, t, this.className))
            });
            if (u) for (t = (e || "").match(w) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : " ")) {
                o = 0;
                while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                n.className = b.trim(r)
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, o, a = 0, s = this.length, u = 0 === arguments.length || "string" == typeof e && e;
            if (b.isFunction(e)) return this.each(function (t) {
                b(this).removeClass(e.call(this, t, this.className))
            });
            if (u) for (t = (e || "").match(w) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : "")) {
                o = 0;
                while (i = t[o++]) while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                n.className = e ? b.trim(r) : ""
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e, r = "boolean" == typeof t;
            return b.isFunction(e) ? this.each(function (n) {
                b(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n) {
                    var o, a = 0, s = b(this), u = t, l = e.match(w) || [];
                    while (o = l[a++]) u = r ? u : !s.hasClass(o), s[u ? "addClass" : "removeClass"](o)
                } else (n === i || "boolean" === n) && (this.className && b._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : b._data(this, "__className__") || "")
            })
        }, hasClass: function (e) {
            var t = " " + e + " ", n = 0, r = this.length;
            for (; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0) return !0;
            return !1
        }, val: function (e) {
            var n, r, i, o = this[0];
            {
                if (arguments.length) return i = b.isFunction(e), this.each(function (n) {
                    var o, a = b(this);
                    1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : b.isArray(o) && (o = b.map(o, function (e) {
                        return null == e ? "" : e + ""
                    })), r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return r = b.valHooks[o.type] || b.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(U, "") : null == n ? "" : n)
            }
        }
    }), b.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            }, select: {
                get: function (e) {
                    var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i,
                        a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0;
                    for (; s > u; u++) if (n = r[u], !(!n.selected && u !== i || (b.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && b.nodeName(n.parentNode, "optgroup"))) {
                        if (t = b(n).val(), o) return t;
                        a.push(t)
                    }
                    return a
                }, set: function (e, t) {
                    var n = b.makeArray(t);
                    return b(e).find("option").each(function () {
                        this.selected = b.inArray(b(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attr: function (e, n, r) {
            var o, a, s, u = e.nodeType;
            if (e && 3 !== u && 8 !== u && 2 !== u) return typeof e.getAttribute === i ? b.prop(e, n, r) : (a = 1 !== u || !b.isXMLDoc(e), a && (n = n.toLowerCase(), o = b.attrHooks[n] || (J.test(n) ? z : I)), r === t ? o && a && "get" in o && null !== (s = o.get(e, n)) ? s : (typeof e.getAttribute !== i && (s = e.getAttribute(n)), null == s ? t : s) : null !== r ? o && a && "set" in o && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r) : (b.removeAttr(e, n), t))
        },
        removeAttr: function (e, t) {
            var n, r, i = 0, o = t && t.match(w);
            if (o && 1 === e.nodeType) while (n = o[i++]) r = b.propFix[n] || n, J.test(n) ? !Q && G.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : b.attr(e, n, ""), e.removeAttribute(Q ? n : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!b.support.radioValue && "radio" === t && b.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !b.isXMLDoc(e), a && (n = b.propFix[n] || n, o = b.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : V.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), z = {
        get: function (e, n) {
            var r = b.prop(e, n), i = "boolean" == typeof r && e.getAttribute(n),
                o = "boolean" == typeof r ? K && Q ? null != i : G.test(n) ? e[b.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
            return o && o.value !== !1 ? n.toLowerCase() : t
        }, set: function (e, t, n) {
            return t === !1 ? b.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, K && Q || (b.attrHooks.value = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return b.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
        }, set: function (e, n, r) {
            return b.nodeName(e, "input") ? (e.defaultValue = n, t) : I && I.set(e, n, r)
        }
    }), Q || (I = b.valHooks.button = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t
        }, set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, b.attrHooks.contenteditable = {
        get: I.get, set: function (e, t, n) {
            I.set(e, "" === t ? !1 : t, n)
        }
    }, b.each(["width", "height"], function (e, n) {
        b.attrHooks[n] = b.extend(b.attrHooks[n], {
            set: function (e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        })
    })), b.support.hrefNormalized || (b.each(["href", "src", "width", "height"], function (e, n) {
        b.attrHooks[n] = b.extend(b.attrHooks[n], {
            get: function (e) {
                var r = e.getAttribute(n, 2);
                return null == r ? t : r
            }
        })
    }), b.each(["href", "src"], function (e, t) {
        b.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    })), b.support.style || (b.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), b.support.enctype || (b.propFix.enctype = "encoding"), b.support.checkOn || b.each(["radio", "checkbox"], function () {
        b.valHooks[this] = {
            get: function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), b.each(["radio", "checkbox"], function () {
        b.valHooks[this] = b.extend(b.valHooks[this], {
            set: function (e, n) {
                return b.isArray(n) ? e.checked = b.inArray(b(e).val(), n) >= 0 : t
            }
        })
    });
    var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/,
        nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\.(.+)|)$/;

    function it() {
        return !0
    }

    function ot() {
        return !1
    }

    b.event = {
        global: {},
        add: function (e, n, r, o, a) {
            var s, u, l, c, p, f, d, h, g, m, y, v = b._data(e);
            if (v) {
                r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = b.guid++), (u = v.events) || (u = v.events = {}), (f = v.handle) || (f = v.handle = function (e) {
                    return typeof b === i || e && b.event.triggered === e.type ? t : b.event.dispatch.apply(f.elem, arguments)
                }, f.elem = e), n = (n || "").match(w) || [""], l = n.length;
                while (l--) s = rt.exec(n[l]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), p = b.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = b.event.special[g] || {}, d = b.extend({
                    type: g,
                    origType: y,
                    data: o,
                    handler: r,
                    guid: r.guid,
                    selector: a,
                    needsContext: a && b.expr.match.needsContext.test(a),
                    namespace: m.join(".")
                }, c), (h = u[g]) || (h = u[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), b.event.global[g] = !0;
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, p, f, d, h, g, m = b.hasData(e) && b._data(e);
            if (m && (c = m.events)) {
                t = (t || "").match(w) || [""], l = t.length;
                while (l--) if (s = rt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                    p = b.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length;
                    while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                    u && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || b.removeEvent(e, d, m.handle), delete c[d])
                } else for (d in c) b.event.remove(e, d + t[l], n, r, !0);
                b.isEmptyObject(c) && (delete m.handle, b._removeData(e, "events"))
            }
        },
        trigger: function (n, r, i, a) {
            var s, u, l, c, p, f, d, h = [i || o], g = y.call(n, "type") ? n.type : n,
                m = y.call(n, "namespace") ? n.namespace.split(".") : [];
            if (l = f = i = i || o, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + b.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), u = 0 > g.indexOf(":") && "on" + g, n = n[b.expando] ? n : new b.Event(g, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : b.makeArray(r, [n]), p = b.event.special[g] || {}, a || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!a && !p.noBubble && !b.isWindow(i)) {
                    for (c = p.delegateType || g, nt.test(c + g) || (l = l.parentNode); l; l = l.parentNode) h.push(l), f = l;
                    f === (i.ownerDocument || o) && h.push(f.defaultView || f.parentWindow || e)
                }
                d = 0;
                while ((l = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (b._data(l, "events") || {})[n.type] && b._data(l, "handle"), s && s.apply(l, r), s = u && l[u], s && b.acceptData(l) && s.apply && s.apply(l, r) === !1 && n.preventDefault();
                if (n.type = g, !(a || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === g && b.nodeName(i, "a") || !b.acceptData(i) || !u || !i[g] || b.isWindow(i))) {
                    f = i[u], f && (i[u] = null), b.event.triggered = g;
                    try {
                        i[g]()
                    } catch (v) {
                    }
                    b.event.triggered = t, f && (i[u] = f)
                }
                return n.result
            }
        },
        dispatch: function (e) {
            e = b.event.fix(e);
            var n, r, i, o, a, s = [], u = h.call(arguments), l = (b._data(this, "events") || {})[e.type] || [],
                c = b.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                s = b.event.handlers.call(this, e, l), n = 0;
                while ((o = s[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = o.elem, a = 0;
                    while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, n) {
            var r, i, o, a, s = [], u = n.delegateCount, l = e.target;
            if (u && l.nodeType && (!e.button || "click" !== e.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                for (o = [], a = 0; u > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? b(r, this).index(l) >= 0 : b.find(r, this, null, [l]).length), o[r] && o.push(i);
                o.length && s.push({elem: l, handlers: o})
            }
            return n.length > u && s.push({elem: this, handlers: n.slice(u)}), s
        },
        fix: function (e) {
            if (e[b.expando]) return e;
            var t, n, r, i = e.type, a = e, s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new b.Event(a), t = r.length;
            while (t--) n = r[t], e[n] = a[n];
            return e.target || (e.target = a.srcElement || o), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, a) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, a, s = n.button, u = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || o, a = i.documentElement, r = i.body, e.pageX = n.clientX + (a && a.scrollLeft || r && r.scrollLeft || 0) - (a && a.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (a && a.scrollTop || r && r.scrollTop || 0) - (a && a.clientTop || r && r.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {noBubble: !0}, click: {
                trigger: function () {
                    return b.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                }
            }, focus: {
                trigger: function () {
                    if (this !== o.activeElement && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === o.activeElement && this.blur ? (this.blur(), !1) : t
                }, delegateType: "focusout"
            }, beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = b.extend(new b.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            r ? b.event.trigger(i, null, t) : b.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, b.removeEvent = o.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, b.Event = function (e, n) {
        return this instanceof b.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && b.extend(this, n), this.timeStamp = e && e.timeStamp || b.now(), this[b.expando] = !0, t) : new b.Event(e, n)
    }, b.Event.prototype = {
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = it, this.stopPropagation()
        }
    }, b.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        b.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !b.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), b.support.submitBubbles || (b.event.special.submit = {
        setup: function () {
            return b.nodeName(this, "form") ? !1 : (b.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target, r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form : t;
                r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), b._data(r, "submitBubbles", !0))
            }), t)
        }, postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0))
        }, teardown: function () {
            return b.nodeName(this, "form") ? !1 : (b.event.remove(this, "._submit"), t)
        }
    }), b.support.changeBubbles || (b.event.special.change = {
        setup: function () {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (b.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), b.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), b.event.simulate("change", this, e, !0)
            })), !1) : (b.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || b.event.simulate("change", this.parentNode, e, !0)
                }), b._data(t, "changeBubbles", !0))
            }), t)
        }, handle: function (e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        }, teardown: function () {
            return b.event.remove(this, "._change"), !Z.test(this.nodeName)
        }
    }), b.support.focusinBubbles || b.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = 0, r = function (e) {
            b.event.simulate(t, e.target, b.event.fix(e), !0)
        };
        b.event.special[t] = {
            setup: function () {
                0 === n++ && o.addEventListener(e, r, !0)
            }, teardown: function () {
                0 === --n && o.removeEventListener(e, r, !0)
            }
        }
    }), b.fn.extend({
        on: function (e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) this.on(a, n, r, e[a], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot; else if (!i) return this;
            return 1 === o && (s = i, i = function (e) {
                return b().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = b.guid++)), this.each(function () {
                b.event.add(this, e, i, r, n)
            })
        }, one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        }, off: function (e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function () {
                b.event.remove(this, e, r, n)
            })
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }, trigger: function (e, t) {
            return this.each(function () {
                b.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, n) {
            var r = this[0];
            return r ? b.event.trigger(e, n, r, !0) : t
        }
    }), function (e, t) {
        var n, r, i, o, a, s, u, l, c, p, f, d, h, g, m, y, v, x = "sizzle" + -new Date, w = e.document, T = {}, N = 0,
            C = 0, k = it(), E = it(), S = it(), A = typeof t, j = 1 << 31, D = [], L = D.pop, H = D.push, q = D.slice,
            M = D.indexOf || function (e) {
                var t = 0, n = this.length;
                for (; n > t; t++) if (this[t] === e) return t;
                return -1
            }, _ = "[\\x20\\t\\r\\n\\f]", F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = F.replace("w", "w#"),
            B = "([*^$|!~]?=)",
            P = "\\[" + _ + "*(" + F + ")" + _ + "*(?:" + B + _ + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + O + ")|)|)" + _ + "*\\]",
            R = ":(" + F + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + P.replace(3, 8) + ")*)|.*)\\)|)",
            W = RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"), $ = RegExp("^" + _ + "*," + _ + "*"),
            I = RegExp("^" + _ + "*([\\x20\\t\\r\\n\\f>+~])" + _ + "*"), z = RegExp(R), X = RegExp("^" + O + "$"), U = {
                ID: RegExp("^#(" + F + ")"),
                CLASS: RegExp("^\\.(" + F + ")"),
                NAME: RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"),
                TAG: RegExp("^(" + F.replace("w", "w*") + ")"),
                ATTR: RegExp("^" + P),
                PSEUDO: RegExp("^" + R),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"),
                needsContext: RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i")
            }, V = /[\x20\t\r\n\f]*[+~]/, Y = /^[^{]+\{\s*\[native code/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            G = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, K = /'|\\/g,
            Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
            tt = function (e, t) {
                var n = "0x" + t - 65536;
                return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
            };
        try {
            q.call(w.documentElement.childNodes, 0)[0].nodeType
        } catch (nt) {
            q = function (e) {
                var t, n = [];
                while (t = this[e++]) n.push(t);
                return n
            }
        }

        function rt(e) {
            return Y.test(e + "")
        }

        function it() {
            var e, t = [];
            return e = function (n, r) {
                return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r
            }
        }

        function ot(e) {
            return e[x] = !0, e
        }

        function at(e) {
            var t = p.createElement("div");
            try {
                return e(t)
            } catch (n) {
                return !1
            } finally {
                t = null
            }
        }

        function st(e, t, n, r) {
            var i, o, a, s, u, l, f, g, m, v;
            if ((t ? t.ownerDocument || t : w) !== p && c(t), t = t || p, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (!d && !r) {
                if (i = J.exec(e)) if (a = i[1]) {
                    if (9 === s) {
                        if (o = t.getElementById(a), !o || !o.parentNode) return n;
                        if (o.id === a) return n.push(o), n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && y(t, o) && o.id === a) return n.push(o), n
                } else {
                    if (i[2]) return H.apply(n, q.call(t.getElementsByTagName(e), 0)), n;
                    if ((a = i[3]) && T.getByClassName && t.getElementsByClassName) return H.apply(n, q.call(t.getElementsByClassName(a), 0)), n
                }
                if (T.qsa && !h.test(e)) {
                    if (f = !0, g = x, m = t, v = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        l = ft(e), (f = t.getAttribute("id")) ? g = f.replace(K, "\\$&") : t.setAttribute("id", g), g = "[id='" + g + "'] ", u = l.length;
                        while (u--) l[u] = g + dt(l[u]);
                        m = V.test(e) && t.parentNode || t, v = l.join(",")
                    }
                    if (v) try {
                        return H.apply(n, q.call(m.querySelectorAll(v), 0)), n
                    } catch (b) {
                    } finally {
                        f || t.removeAttribute("id")
                    }
                }
            }
            return wt(e.replace(W, "$1"), t, n, r)
        }

        a = st.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, c = st.setDocument = function (e) {
            var n = e ? e.ownerDocument || e : w;
            return n !== p && 9 === n.nodeType && n.documentElement ? (p = n, f = n.documentElement, d = a(n), T.tagNameNoComments = at(function (e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), T.attributes = at(function (e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t
            }), T.getByClassName = at(function (e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
            }), T.getByName = at(function (e) {
                e.id = x + 0, e.innerHTML = "<a name='" + x + "'></a><div name='" + x + "'></div>", f.insertBefore(e, f.firstChild);
                var t = n.getElementsByName && n.getElementsByName(x).length === 2 + n.getElementsByName(x + 0).length;
                return T.getIdNotName = !n.getElementById(x), f.removeChild(e), t
            }), i.attrHandle = at(function (e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== A && "#" === e.firstChild.getAttribute("href")
            }) ? {} : {
                href: function (e) {
                    return e.getAttribute("href", 2)
                }, type: function (e) {
                    return e.getAttribute("type")
                }
            }, T.getIdNotName ? (i.find.ID = function (e, t) {
                if (typeof t.getElementById !== A && !d) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, i.filter.ID = function (e) {
                var t = e.replace(et, tt);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (i.find.ID = function (e, n) {
                if (typeof n.getElementById !== A && !d) {
                    var r = n.getElementById(e);
                    return r ? r.id === e || typeof r.getAttributeNode !== A && r.getAttributeNode("id").value === e ? [r] : t : []
                }
            }, i.filter.ID = function (e) {
                var t = e.replace(et, tt);
                return function (e) {
                    var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), i.find.TAG = T.tagNameNoComments ? function (e, n) {
                return typeof n.getElementsByTagName !== A ? n.getElementsByTagName(e) : t
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, i.find.NAME = T.getByName && function (e, n) {
                return typeof n.getElementsByName !== A ? n.getElementsByName(name) : t
            }, i.find.CLASS = T.getByClassName && function (e, n) {
                return typeof n.getElementsByClassName === A || d ? t : n.getElementsByClassName(e)
            }, g = [], h = [":focus"], (T.qsa = rt(n.querySelectorAll)) && (at(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || h.push("\\[" + _ + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || h.push(":checked")
            }), at(function (e) {
                e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && h.push("[*^$]=" + _ + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), h.push(",.*:")
            })), (T.matchesSelector = rt(m = f.matchesSelector || f.mozMatchesSelector || f.webkitMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function (e) {
                T.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), g.push("!=", R)
            }), h = RegExp(h.join("|")), g = RegExp(g.join("|")), y = rt(f.contains) || f.compareDocumentPosition ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t) while (t = t.parentNode) if (t === e) return !0;
                return !1
            }, v = f.compareDocumentPosition ? function (e, t) {
                var r;
                return e === t ? (u = !0, 0) : (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & r || e.parentNode && 11 === e.parentNode.nodeType ? e === n || y(w, e) ? -1 : t === n || y(w, t) ? 1 : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function (e, t) {
                var r, i = 0, o = e.parentNode, a = t.parentNode, s = [e], l = [t];
                if (e === t) return u = !0, 0;
                if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : 0;
                if (o === a) return ut(e, t);
                r = e;
                while (r = r.parentNode) s.unshift(r);
                r = t;
                while (r = r.parentNode) l.unshift(r);
                while (s[i] === l[i]) i++;
                return i ? ut(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
            }, u = !1, [0, 0].sort(v), T.detectDuplicates = u, p) : p
        }, st.matches = function (e, t) {
            return st(e, null, null, t)
        }, st.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Z, "='$1']"), !(!T.matchesSelector || d || g && g.test(t) || h.test(t))) try {
                var n = m.call(e, t);
                if (n || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (r) {
            }
            return st(t, p, null, [e]).length > 0
        }, st.contains = function (e, t) {
            return (e.ownerDocument || e) !== p && c(e), y(e, t)
        }, st.attr = function (e, t) {
            var n;
            return (e.ownerDocument || e) !== p && c(e), d || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : d || T.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
        }, st.error = function (e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, st.uniqueSort = function (e) {
            var t, n = [], r = 1, i = 0;
            if (u = !T.detectDuplicates, e.sort(v), u) {
                for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                while (i--) e.splice(n[i], 1)
            }
            return e
        };

        function ut(e, t) {
            var n = t && e, r = n && (~t.sourceIndex || j) - (~e.sourceIndex || j);
            if (r) return r;
            if (n) while (n = n.nextSibling) if (n === t) return -1;
            return e ? 1 : -1
        }

        function lt(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function ct(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function pt(e) {
            return ot(function (t) {
                return t = +t, ot(function (n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        o = st.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r]; r++) n += o(t);
            return n
        }, i = st.selectors = {
            cacheLength: 50,
            createPseudo: ot,
            match: U,
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || st.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && st.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[5] && e[2];
                    return U.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && z.test(n) && (t = ft(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    return "*" === e ? function () {
                        return !0
                    } : (e = e.replace(et, tt).toLowerCase(), function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                }, CLASS: function (e) {
                    var t = k[e + " "];
                    return t || (t = RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && k(e, function (e) {
                        return t.test(e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, t, n) {
                    return function (r) {
                        var i = st.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode,
                            y = s && t.nodeName.toLowerCase(), v = !u && !s;
                        if (m) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g]) if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                c = m[x] || (m[x] = {}), l = c[e] || [], d = l[0] === N && l[1], f = l[0] === N && l[2], p = d && m.childNodes[d];
                                while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if (1 === p.nodeType && ++f && p === t) {
                                    c[e] = [N, d, f];
                                    break
                                }
                            } else if (v && (l = (t[x] || (t[x] = {}))[e]) && l[0] === N) f = l[1]; else while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[x] || (p[x] = {}))[e] = [N, f]), p === t)) break;
                            return f -= i, f === r || 0 === f % r && f / r >= 0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || st.error("unsupported pseudo: " + e);
                    return r[x] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ot(function (e, n) {
                        var i, o = r(e, t), a = o.length;
                        while (a--) i = M.call(e, o[a]), e[i] = !(n[i] = o[a])
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: ot(function (e) {
                    var t = [], n = [], r = s(e.replace(W, "$1"));
                    return r[x] ? ot(function (e, t, n, i) {
                        var o, a = r(e, null, i, []), s = e.length;
                        while (s--) (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop()
                    }
                }), has: ot(function (e) {
                    return function (t) {
                        return st(e, t).length > 0
                    }
                }), contains: ot(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                    }
                }), lang: ot(function (e) {
                    return X.test(e || "") || st.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(), function (t) {
                        var n;
                        do if (n = d ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === f
                }, focus: function (e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0
                }, parent: function (e) {
                    return !i.pseudos.empty(e)
                }, header: function (e) {
                    return Q.test(e.nodeName)
                }, input: function (e) {
                    return G.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                }, first: pt(function () {
                    return [0]
                }), last: pt(function (e, t) {
                    return [t - 1]
                }), eq: pt(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }), even: pt(function (e, t) {
                    var n = 0;
                    for (; t > n; n += 2) e.push(n);
                    return e
                }), odd: pt(function (e, t) {
                    var n = 1;
                    for (; t > n; n += 2) e.push(n);
                    return e
                }), lt: pt(function (e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; --r >= 0;) e.push(r);
                    return e
                }), gt: pt(function (e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; t > ++r;) e.push(r);
                    return e
                })
            }
        };
        for (n in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) i.pseudos[n] = lt(n);
        for (n in{submit: !0, reset: !0}) i.pseudos[n] = ct(n);

        function ft(e, t) {
            var n, r, o, a, s, u, l, c = E[e + " "];
            if (c) return t ? 0 : c.slice(0);
            s = e, u = [], l = i.preFilter;
            while (s) {
                (!n || (r = $.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(o = [])), n = !1, (r = I.exec(s)) && (n = r.shift(), o.push({
                    value: n,
                    type: r[0].replace(W, " ")
                }), s = s.slice(n.length));
                for (a in i.filter) !(r = U[a].exec(s)) || l[a] && !(r = l[a](r)) || (n = r.shift(), o.push({
                    value: n,
                    type: a,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? st.error(e) : E(e, u).slice(0)
        }

        function dt(e) {
            var t = 0, n = e.length, r = "";
            for (; n > t; t++) r += e[t].value;
            return r
        }

        function ht(e, t, n) {
            var i = t.dir, o = n && "parentNode" === i, a = C++;
            return t.first ? function (t, n, r) {
                while (t = t[i]) if (1 === t.nodeType || o) return e(t, n, r)
            } : function (t, n, s) {
                var u, l, c, p = N + " " + a;
                if (s) {
                    while (t = t[i]) if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                } else while (t = t[i]) if (1 === t.nodeType || o) if (c = t[x] || (t[x] = {}), (l = c[i]) && l[0] === p) {
                    if ((u = l[1]) === !0 || u === r) return u === !0
                } else if (l = c[i] = [p], l[1] = e(t, n, s) || r, l[1] === !0) return !0
            }
        }

        function gt(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--) if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function mt(e, t, n, r, i) {
            var o, a = [], s = 0, u = e.length, l = null != t;
            for (; u > s; s++) (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
            return a
        }

        function yt(e, t, n, r, i, o) {
            return r && !r[x] && (r = yt(r)), i && !i[x] && (i = yt(i, o)), ot(function (o, a, s, u) {
                var l, c, p, f = [], d = [], h = a.length, g = o || xt(t || "*", s.nodeType ? [s] : s, []),
                    m = !e || !o && t ? g : mt(g, f, e, s, u), y = n ? i || (o ? e : h || r) ? [] : a : m;
                if (n && n(m, y, s, u), r) {
                    l = mt(y, d), r(l, [], s, u), c = l.length;
                    while (c--) (p = l[c]) && (y[d[c]] = !(m[d[c]] = p))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [], c = y.length;
                            while (c--) (p = y[c]) && l.push(m[c] = p);
                            i(null, y = [], l, u)
                        }
                        c = y.length;
                        while (c--) (p = y[c]) && (l = i ? M.call(o, p) : f[c]) > -1 && (o[l] = !(a[l] = p))
                    }
                } else y = mt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : H.apply(a, y)
            })
        }

        function vt(e) {
            var t, n, r, o = e.length, a = i.relative[e[0].type], s = a || i.relative[" "], u = a ? 1 : 0,
                c = ht(function (e) {
                    return e === t
                }, s, !0), p = ht(function (e) {
                    return M.call(t, e) > -1
                }, s, !0), f = [function (e, n, r) {
                    return !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
                }];
            for (; o > u; u++) if (n = i.relative[e[u].type]) f = [ht(gt(f), n)]; else {
                if (n = i.filter[e[u].type].apply(null, e[u].matches), n[x]) {
                    for (r = ++u; o > r; r++) if (i.relative[e[r].type]) break;
                    return yt(u > 1 && gt(f), u > 1 && dt(e.slice(0, u - 1)).replace(W, "$1"), n, r > u && vt(e.slice(u, r)), o > r && vt(e = e.slice(r)), o > r && dt(e))
                }
                f.push(n)
            }
            return gt(f)
        }

        function bt(e, t) {
            var n = 0, o = t.length > 0, a = e.length > 0, s = function (s, u, c, f, d) {
                var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, T = l,
                    C = s || a && i.find.TAG("*", d && u.parentNode || u), k = N += null == T ? 1 : Math.random() || .1;
                for (w && (l = u !== p && u, r = n); null != (h = C[b]); b++) {
                    if (a && h) {
                        g = 0;
                        while (m = e[g++]) if (m(h, u, c)) {
                            f.push(h);
                            break
                        }
                        w && (N = k, r = ++n)
                    }
                    o && ((h = !m && h) && v--, s && x.push(h))
                }
                if (v += b, o && b !== v) {
                    g = 0;
                    while (m = t[g++]) m(x, y, u, c);
                    if (s) {
                        if (v > 0) while (b--) x[b] || y[b] || (y[b] = L.call(f));
                        y = mt(y)
                    }
                    H.apply(f, y), w && !s && y.length > 0 && v + t.length > 1 && st.uniqueSort(f)
                }
                return w && (N = k, l = T), x
            };
            return o ? ot(s) : s
        }

        s = st.compile = function (e, t) {
            var n, r = [], i = [], o = S[e + " "];
            if (!o) {
                t || (t = ft(e)), n = t.length;
                while (n--) o = vt(t[n]), o[x] ? r.push(o) : i.push(o);
                o = S(e, bt(i, r))
            }
            return o
        };

        function xt(e, t, n) {
            var r = 0, i = t.length;
            for (; i > r; r++) st(e, t[r], n);
            return n
        }

        function wt(e, t, n, r) {
            var o, a, u, l, c, p = ft(e);
            if (!r && 1 === p.length) {
                if (a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (u = a[0]).type && 9 === t.nodeType && !d && i.relative[a[1].type]) {
                    if (t = i.find.ID(u.matches[0].replace(et, tt), t)[0], !t) return n;
                    e = e.slice(a.shift().value.length)
                }
                o = U.needsContext.test(e) ? 0 : a.length;
                while (o--) {
                    if (u = a[o], i.relative[l = u.type]) break;
                    if ((c = i.find[l]) && (r = c(u.matches[0].replace(et, tt), V.test(a[0].type) && t.parentNode || t))) {
                        if (a.splice(o, 1), e = r.length && dt(a), !e) return H.apply(n, q.call(r, 0)), n;
                        break
                    }
                }
            }
            return s(e, p)(r, t, d, n, V.test(e)), n
        }

        i.pseudos.nth = i.pseudos.eq;

        function Tt() {
        }

        i.filters = Tt.prototype = i.pseudos, i.setFilters = new Tt, c(), st.attr = b.attr, b.find = st, b.expr = st.selectors, b.expr[":"] = b.expr.pseudos, b.unique = st.uniqueSort, b.text = st.getText, b.isXMLDoc = st.isXML, b.contains = st.contains
    }(e);
    var at = /Until$/, st = /^(?:parents|prev(?:Until|All))/, ut = /^.[^:#\[\.,]*$/, lt = b.expr.match.needsContext,
        ct = {children: !0, contents: !0, next: !0, prev: !0};
    b.fn.extend({
        find: function (e) {
            var t, n, r, i = this.length;
            if ("string" != typeof e) return r = this, this.pushStack(b(e).filter(function () {
                for (t = 0; i > t; t++) if (b.contains(r[t], this)) return !0
            }));
            for (n = [], t = 0; i > t; t++) b.find(e, this[t], n);
            return n = this.pushStack(i > 1 ? b.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
        }, has: function (e) {
            var t, n = b(e, this), r = n.length;
            return this.filter(function () {
                for (t = 0; r > t; t++) if (b.contains(this, n[t])) return !0
            })
        }, not: function (e) {
            return this.pushStack(ft(this, e, !1))
        }, filter: function (e) {
            return this.pushStack(ft(this, e, !0))
        }, is: function (e) {
            return !!e && ("string" == typeof e ? lt.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0)
        }, closest: function (e, t) {
            var n, r = 0, i = this.length, o = [], a = lt.test(e) || "string" != typeof e ? b(e, t || this.context) : 0;
            for (; i > r; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && 11 !== n.nodeType) {
                    if (a ? a.index(n) > -1 : b.find.matchesSelector(n, e)) {
                        o.push(n);
                        break
                    }
                    n = n.parentNode
                }
            }
            return this.pushStack(o.length > 1 ? b.unique(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            var n = "string" == typeof e ? b(e, t) : b.makeArray(e && e.nodeType ? [e] : e), r = b.merge(this.get(), n);
            return this.pushStack(b.unique(r))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), b.fn.andSelf = b.fn.addBack;

    function pt(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    b.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return b.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return b.dir(e, "parentNode", n)
        }, next: function (e) {
            return pt(e, "nextSibling")
        }, prev: function (e) {
            return pt(e, "previousSibling")
        }, nextAll: function (e) {
            return b.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return b.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return b.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return b.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return b.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return b.sibling(e.firstChild)
        }, contents: function (e) {
            return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.merge([], e.childNodes)
        }
    }, function (e, t) {
        b.fn[e] = function (n, r) {
            var i = b.map(this, t, n);
            return at.test(e) || (r = n), r && "string" == typeof r && (i = b.filter(r, i)), i = this.length > 1 && !ct[e] ? b.unique(i) : i, this.length > 1 && st.test(e) && (i = i.reverse()), this.pushStack(i)
        }
    }), b.extend({
        filter: function (e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? b.find.matchesSelector(t[0], e) ? [t[0]] : [] : b.find.matches(e, t)
        }, dir: function (e, n, r) {
            var i = [], o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !b(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        }, sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });

    function ft(e, t, n) {
        if (t = t || 0, b.isFunction(t)) return b.grep(e, function (e, r) {
            var i = !!t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return b.grep(e, function (e) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var r = b.grep(e, function (e) {
                return 1 === e.nodeType
            });
            if (ut.test(t)) return b.filter(t, r, !n);
            t = b.filter(t, r)
        }
        return b.grep(e, function (e) {
            return b.inArray(e, t) >= 0 === n
        })
    }

    function dt(e) {
        var t = ht.split("|"), n = e.createDocumentFragment();
        if (n.createElement) while (t.length) n.createElement(t.pop());
        return n
    }

    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gt = / jQuery\d+="(?:null|\d+)"/g, mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"), yt = /^\s+/,
        vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/,
        xt = /<tbody/i, wt = /<|&#?\w+;/, Tt = /<(?:script|style|link)/i, Nt = /^(?:checkbox|radio)$/i,
        Ct = /checked\s*(?:[^=]|=\s*.checked.)/i, kt = /^$|\/(?:java|ecma)script/i, Et = /^true\/(.*)/,
        St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, At = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: b.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, jt = dt(o), Dt = jt.appendChild(o.createElement("div"));
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, b.fn.extend({
        text: function (e) {
            return b.access(this, function (e) {
                return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
            }, null, e, arguments.length)
        }, wrapAll: function (e) {
            if (b.isFunction(e)) return this.each(function (t) {
                b(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = b(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            return b.isFunction(e) ? this.each(function (t) {
                b(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = b(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = b.isFunction(e);
            return this.each(function (n) {
                b(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                b.nodeName(this, "body") || b(this).replaceWith(this.childNodes)
            }).end()
        }, append: function () {
            return this.domManip(arguments, !0, function (e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
            })
        }, prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
            })
        }, before: function () {
            return this.domManip(arguments, !1, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return this.domManip(arguments, !1, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, remove: function (e, t) {
            var n, r = 0;
            for (; null != (n = this[r]); r++) (!e || b.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || b.cleanData(Ot(n)), n.parentNode && (t && b.contains(n.ownerDocument, n) && Mt(Ot(n, "script")), n.parentNode.removeChild(n)));
            return this
        }, empty: function () {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && b.cleanData(Ot(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && b.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }, clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return b.clone(this, e, t)
            })
        }, html: function (e) {
            return b.access(this, function (e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
                if (!("string" != typeof e || Tt.test(e) || !b.support.htmlSerialize && mt.test(e) || !b.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (b.cleanData(Ot(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {
                    }
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function (e) {
            var t = b.isFunction(e);
            return t || "string" == typeof e || (e = b(e).not(this).detach()), this.domManip([e], !0, function (e) {
                var t = this.nextSibling, n = this.parentNode;
                n && (b(this).remove(), n.insertBefore(e, t))
            })
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, n, r) {
            e = f.apply([], e);
            var i, o, a, s, u, l, c = 0, p = this.length, d = this, h = p - 1, g = e[0], m = b.isFunction(g);
            if (m || !(1 >= p || "string" != typeof g || b.support.checkClone) && Ct.test(g)) return this.each(function (i) {
                var o = d.eq(i);
                m && (e[0] = g.call(this, i, n ? o.html() : t)), o.domManip(e, n, r)
            });
            if (p && (l = b.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                for (n = n && b.nodeName(i, "tr"), s = b.map(Ot(l, "script"), Ht), a = s.length; p > c; c++) o = l, c !== h && (o = b.clone(o, !0, !0), a && b.merge(s, Ot(o, "script"))), r.call(n && b.nodeName(this[c], "table") ? Lt(this[c], "tbody") : this[c], o, c);
                if (a) for (u = s[s.length - 1].ownerDocument, b.map(s, qt), c = 0; a > c; c++) o = s[c], kt.test(o.type || "") && !b._data(o, "globalEval") && b.contains(u, o) && (o.src ? b.ajax({
                    url: o.src,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                }) : b.globalEval((o.text || o.textContent || o.innerHTML || "").replace(St, "")));
                l = i = null
            }
            return this
        }
    });

    function Lt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function Ht(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type, e
    }

    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Mt(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++) b._data(n, "globalEval", !t || b._data(t[r], "globalEval"))
    }

    function _t(e, t) {
        if (1 === t.nodeType && b.hasData(e)) {
            var n, r, i, o = b._data(e), a = b._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s) for (r = 0, i = s[n].length; i > r; r++) b.event.add(t, n, s[n][r])
            }
            a.data && (a.data = b.extend({}, a.data))
        }
    }

    function Ft(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !b.support.noCloneEvent && t[b.expando]) {
                i = b._data(t);
                for (r in i.events) b.removeEvent(t, r, i.handle);
                t.removeAttribute(b.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Nt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        b.fn[e] = function (e) {
            var n, r = 0, i = [], o = b(e), a = o.length - 1;
            for (; a >= r; r++) n = r === a ? this : this.clone(!0), b(o[r])[t](n), d.apply(i, n.get());
            return this.pushStack(i)
        }
    });

    function Ot(e, n) {
        var r, o, a = 0,
            s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s) for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) !n || b.nodeName(o, n) ? s.push(o) : b.merge(s, Ot(o, n));
        return n === t || n && b.nodeName(e, n) ? b.merge([e], s) : s
    }

    function Bt(e) {
        Nt.test(e.type) && (e.defaultChecked = e.checked)
    }

    b.extend({
        clone: function (e, t, n) {
            var r, i, o, a, s, u = b.contains(e.ownerDocument, e);
            if (b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(b.support.noCloneEvent && b.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e))) for (r = Ot(o), s = Ot(e), a = 0; null != (i = s[a]); ++a) r[a] && Ft(i, r[a]);
            if (t) if (n) for (s = s || Ot(e), r = r || Ot(o), a = 0; null != (i = s[a]); a++) _t(i, r[a]); else _t(e, o);
            return r = Ot(o, "script"), r.length > 0 && Mt(r, !u && Ot(e, "script")), r = s = i = null, o
        }, buildFragment: function (e, t, n, r) {
            var i, o, a, s, u, l, c, p = e.length, f = dt(t), d = [], h = 0;
            for (; p > h; h++) if (o = e[h], o || 0 === o) if ("object" === b.type(o)) b.merge(d, o.nodeType ? [o] : o); else if (wt.test(o)) {
                s = s || f.appendChild(t.createElement("div")), u = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[u] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
                while (i--) s = s.lastChild;
                if (!b.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !b.support.tbody) {
                    o = "table" !== u || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
                    while (i--) b.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l)
                }
                b.merge(d, s.childNodes), s.textContent = "";
                while (s.firstChild) s.removeChild(s.firstChild);
                s = f.lastChild
            } else d.push(t.createTextNode(o));
            s && f.removeChild(s), b.support.appendChecked || b.grep(Ot(d, "input"), Bt), h = 0;
            while (o = d[h++]) if ((!r || -1 === b.inArray(o, r)) && (a = b.contains(o.ownerDocument, o), s = Ot(f.appendChild(o), "script"), a && Mt(s), n)) {
                i = 0;
                while (o = s[i++]) kt.test(o.type || "") && n.push(o)
            }
            return s = null, f
        }, cleanData: function (e, t) {
            var n, r, o, a, s = 0, u = b.expando, l = b.cache, p = b.support.deleteExpando, f = b.event.special;
            for (; null != (n = e[s]); s++) if ((t || b.acceptData(n)) && (o = n[u], a = o && l[o])) {
                if (a.events) for (r in a.events) f[r] ? b.event.remove(n, r) : b.removeEvent(n, r, a.handle);
                l[o] && (delete l[o], p ? delete n[u] : typeof n.removeAttribute !== i ? n.removeAttribute(u) : n[u] = null, c.push(o))
            }
        }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/,
        Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + x + ")(.*)$", "i"),
        Yt = RegExp("^(" + x + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + x + ")", "i"), Gt = {BODY: "block"},
        Qt = {position: "absolute", visibility: "hidden", display: "block"}, Kt = {letterSpacing: 0, fontWeight: 400},
        Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"];

    function tn(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length;
        while (i--) if (t = en[i] + n, t in e) return t;
        return r
    }

    function nn(e, t) {
        return e = t || e, "none" === b.css(e, "display") || !b.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, o = [], a = 0, s = e.length;
        for (; s > a; a++) r = e[a], r.style && (o[a] = b._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = b._data(r, "olddisplay", un(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && b._data(r, "olddisplay", i ? n : b.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    b.fn.extend({
        css: function (e, n) {
            return b.access(this, function (e, n, r) {
                var i, o, a = {}, s = 0;
                if (b.isArray(n)) {
                    for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = b.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? b.style(e, n, r) : b.css(e, n)
            }, e, n, arguments.length > 1)
        }, show: function () {
            return rn(this, !0)
        }, hide: function () {
            return rn(this)
        }, toggle: function (e) {
            var t = "boolean" == typeof e;
            return this.each(function () {
                (t ? e : nn(this)) ? b(this).show() : b(this).hide()
            })
        }
    }), b.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Wt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": b.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = b.camelCase(n), l = e.style;
                if (n = b.cssProps[u] || (b.cssProps[u] = tn(l, u)), s = b.cssHooks[n] || b.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
                if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(b.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || b.cssNumber[u] || (r += "px"), b.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    l[n] = r
                } catch (c) {
                }
            }
        },
        css: function (e, n, r, i) {
            var o, a, s, u = b.camelCase(n);
            return n = b.cssProps[u] || (b.cssProps[u] = tn(e.style, u)), s = b.cssHooks[n] || b.cssHooks[u], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || b.isNumeric(o) ? o || 0 : a) : a
        },
        swap: function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }
    }), e.getComputedStyle ? (Rt = function (t) {
        return e.getComputedStyle(t, null)
    }, Wt = function (e, n, r) {
        var i, o, a, s = r || Rt(e), u = s ? s.getPropertyValue(n) || s[n] : t, l = e.style;
        return s && ("" !== u || b.contains(e.ownerDocument, e) || (u = b.style(e, n)), Yt.test(u) && Ut.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u
    }) : o.documentElement.currentStyle && (Rt = function (e) {
        return e.currentStyle
    }, Wt = function (e, n, r) {
        var i, o, a, s = r || Rt(e), u = s ? s[n] : t, l = e.style;
        return null == u && l && l[n] && (u = l[n]), Yt.test(u) && !zt.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u
    });

    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0;
        for (; 4 > o; o += 2) "margin" === n && (a += b.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= b.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= b.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += b.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += b.css(e, "border" + Zt[o] + "Width", !0, i)));
        return a
    }

    function sn(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = Rt(e),
            a = b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
            r = a && (b.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function un(e) {
        var t = o, n = Gt[e];
        return n || (n = ln(e, t), "none" !== n && n || (Pt = (Pt || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = ln(e, t), Pt.detach()), Gt[e] = n), n
    }

    function ln(e, t) {
        var n = b(t.createElement(e)).appendTo(t.body), r = b.css(n[0], "display");
        return n.remove(), r
    }

    b.each(["height", "width"], function (e, n) {
        b.cssHooks[n] = {
            get: function (e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(b.css(e, "display")) ? b.swap(e, Qt, function () {
                    return sn(e, n, i)
                }) : sn(e, n, i) : t
            }, set: function (e, t, r) {
                var i = r && Rt(e);
                return on(e, t, r ? an(e, n, r, b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), b.support.opacity || (b.cssHooks.opacity = {
        get: function (e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var n = e.style, r = e.currentStyle, i = b.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === b.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
        }
    }), b(function () {
        b.support.reliableMarginRight || (b.cssHooks.marginRight = {
            get: function (e, n) {
                return n ? b.swap(e, {display: "inline-block"}, Wt, [e, "marginRight"]) : t
            }
        }), !b.support.pixelPosition && b.fn.position && b.each(["top", "left"], function (e, n) {
            b.cssHooks[n] = {
                get: function (e, r) {
                    return r ? (r = Wt(e, n), Yt.test(r) ? b(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), b.expr && b.expr.filters && (b.expr.filters.hidden = function (e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !b.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || b.css(e, "display"))
    }, b.expr.filters.visible = function (e) {
        return !b.expr.filters.hidden(e)
    }), b.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        b.cssHooks[e + t] = {
            expand: function (n) {
                var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ut.test(e) || (b.cssHooks[e + t].set = on)
    });
    var cn = /%20/g, pn = /\[\]$/, fn = /\r?\n/g, dn = /^(?:submit|button|image|reset|file)$/i,
        hn = /^(?:input|select|textarea|keygen)/i;
    b.fn.extend({
        serialize: function () {
            return b.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = b.prop(this, "elements");
                return e ? b.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !b(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Nt.test(e))
            }).map(function (e, t) {
                var n = b(this).val();
                return null == n ? null : b.isArray(n) ? b.map(n, function (e) {
                    return {name: t.name, value: e.replace(fn, "\r\n")}
                }) : {name: t.name, value: n.replace(fn, "\r\n")}
            }).get()
        }
    }), b.param = function (e, n) {
        var r, i = [], o = function (e, t) {
            t = b.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional), b.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function () {
            o(this.name, this.value)
        }); else for (r in e) gn(r, e[r], n, o);
        return i.join("&").replace(cn, "+")
    };

    function gn(e, t, n, r) {
        var i;
        if (b.isArray(t)) b.each(t, function (t, i) {
            n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== b.type(t)) r(e, t); else for (i in t) gn(e + "[" + i + "]", t[i], n, r)
    }

    b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        b.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), b.fn.hover = function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    };
    var mn, yn, vn = b.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Nn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Cn = /^(?:GET|HEAD)$/, kn = /^\/\//,
        En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = b.fn.load, An = {}, jn = {}, Dn = "*/".concat("*");
    try {
        yn = a.href
    } catch (Ln) {
        yn = o.createElement("a"), yn.href = "", yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];

    function Hn(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(w) || [];
            if (b.isFunction(n)) while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function qn(e, n, r, i) {
        var o = {}, a = e === jn;

        function s(u) {
            var l;
            return o[u] = !0, b.each(e[u] || [], function (e, u) {
                var c = u(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(l = c) : t : (n.dataTypes.unshift(c), s(c), !1)
            }), l
        }

        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }

    function Mn(e, n) {
        var r, i, o = b.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && b.extend(!0, e, r), e
    }

    b.fn.load = function (e, n, r) {
        if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
        var i, o, a, s = this, u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), b.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && b.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function (e) {
            o = arguments, s.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
            s.each(r, o || [e.responseText, t, e])
        }), this
    }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        b.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), b.each(["get", "post"], function (e, n) {
        b[n] = function (e, r, i, o) {
            return b.isFunction(r) && (o = o || i, i = r, r = t), b.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }), b.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yn,
            type: "GET",
            isLocal: Nn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText"},
            converters: {"* text": e.String, "text html": !0, "text json": b.parseJSON, "text xml": b.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? Mn(Mn(e, b.ajaxSettings), t) : Mn(b.ajaxSettings, e)
        },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function (e, n) {
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, o, a, s, u, l, c, p = b.ajaxSetup({}, n), f = p.context || p,
                d = p.context && (f.nodeType || f.jquery) ? b(f) : b.event, h = b.Deferred(),
                g = b.Callbacks("once memory"), m = p.statusCode || {}, y = {}, v = {}, x = 0, T = "canceled", N = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (2 === x) {
                            if (!c) {
                                c = {};
                                while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2]
                            }
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return 2 === x ? a : null
                    }, setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return x || (e = v[n] = v[n] || e, y[e] = t), this
                    }, overrideMimeType: function (e) {
                        return x || (p.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (2 > x) for (t in e) m[t] = [m[t], e[t]]; else N.always(e[N.status]);
                        return this
                    }, abort: function (e) {
                        var t = e || T;
                        return l && l.abort(t), k(0, t), this
                    }
                };
            if (h.promise(N).complete = g.add, N.success = N.done, N.error = N.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = b.trim(p.dataType || "*").toLowerCase().match(w) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (mn[3] || ("http:" === mn[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)), qn(An, p, n, N), 2 === x) return N;
            u = p.global, u && 0 === b.active++ && b.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Cn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (b.lastModified[o] && N.setRequestHeader("If-Modified-Since", b.lastModified[o]), b.etag[o] && N.setRequestHeader("If-None-Match", b.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && N.setRequestHeader("Content-Type", p.contentType), N.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers) N.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (p.beforeSend.call(f, N, p) === !1 || 2 === x)) return N.abort();
            T = "abort";
            for (i in{success: 1, error: 1, complete: 1}) N[i](p[i]);
            if (l = qn(jn, p, n, N)) {
                N.readyState = 1, u && d.trigger("ajaxSend", [N, p]), p.async && p.timeout > 0 && (s = setTimeout(function () {
                    N.abort("timeout")
                }, p.timeout));
                try {
                    x = 1, l.send(y, k)
                } catch (C) {
                    if (!(2 > x)) throw C;
                    k(-1, C)
                }
            } else k(-1, "No Transport");

            function k(e, n, r, i) {
                var c, y, v, w, T, C = n;
                2 !== x && (x = 2, s && clearTimeout(s), l = t, a = i || "", N.readyState = e > 0 ? 4 : 0, r && (w = _n(p, N, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (T = N.getResponseHeader("Last-Modified"), T && (b.lastModified[o] = T), T = N.getResponseHeader("etag"), T && (b.etag[o] = T)), 204 === e ? (c = !0, C = "nocontent") : 304 === e ? (c = !0, C = "notmodified") : (c = Fn(p, w), C = c.state, y = c.data, v = c.error, c = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), N.status = e, N.statusText = (n || C) + "", c ? h.resolveWith(f, [y, C, N]) : h.rejectWith(f, [N, C, v]), N.statusCode(m), m = t, u && d.trigger(c ? "ajaxSuccess" : "ajaxError", [N, p, c ? y : v]), g.fireWith(f, [N, C]), u && (d.trigger("ajaxComplete", [N, p]), --b.active || b.event.trigger("ajaxStop")))
            }

            return N
        },
        getScript: function (e, n) {
            return b.get(e, t, n, "script")
        },
        getJSON: function (e, t, n) {
            return b.get(e, t, n, "json")
        }
    });

    function _n(e, n, r) {
        var i, o, a, s, u = e.contents, l = e.dataTypes, c = e.responseFields;
        for (s in c) s in r && (n[c[s]] = r[s]);
        while ("*" === l[0]) l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o) for (s in u) if (u[s] && u[s].test(o)) {
            l.unshift(s);
            break
        }
        if (l[0] in r) a = l[0]; else {
            for (s in r) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== l[0] && l.unshift(a), r[a]) : t
    }

    function Fn(e, t) {
        var n, r, i, o, a = {}, s = 0, u = e.dataTypes.slice(), l = u[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1]) for (i in e.converters) a[i.toLowerCase()] = e.converters[i];
        for (; r = u[++s];) if ("*" !== r) {
            if ("*" !== l && l !== r) {
                if (i = a[l + " " + r] || a["* " + r], !i) for (n in a) if (o = n.split(" "), o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) {
                    i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0], u.splice(s--, 0, r));
                    break
                }
                if (i !== !0) if (i && e["throws"]) t = i(t); else try {
                    t = i(t)
                } catch (c) {
                    return {state: "parsererror", error: i ? c : "No conversion from " + l + " to " + r}
                }
            }
            l = r
        }
        return {state: "success", data: t}
    }

    b.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return b.globalEval(e), e
            }
        }
    }), b.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), b.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = o.head || b("head")[0] || o.documentElement;
            return {
                send: function (t, i) {
                    n = o.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                }, abort: function () {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var On = [], Bn = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = On.pop() || b.expando + "_" + vn++;
            return this[e] = !0, e
        }
    }), b.ajaxPrefilter("json jsonp", function (n, r, i) {
        var o, a, s,
            u = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return s || b.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
            s = arguments
        }, i.always(function () {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, On.push(o)), s && b.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function () {
        var e;
        for (e in Pn) Pn[e](t, !0)
    };

    function In() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    b.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && In() || zn()
    } : In, Rn = b.ajaxSettings.xhr(), b.support.cors = !!Rn && "withCredentials" in Rn, Rn = b.support.ajax = !!Rn, Rn && b.ajaxTransport(function (n) {
        if (!n.crossDomain || b.support.cors) {
            var r;
            return {
                send: function (i, o) {
                    var a, s, u = n.xhr();
                    if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) u[s] = n.xhrFields[s];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) u.setRequestHeader(s, i[s])
                    } catch (l) {
                    }
                    u.send(n.hasContent && n.data || null), r = function (e, i) {
                        var s, l, c, p;
                        try {
                            if (r && (i || 4 === u.readyState)) if (r = t, a && (u.onreadystatechange = b.noop, $n && delete Pn[a]), i) 4 !== u.readyState && u.abort(); else {
                                p = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (p.text = u.responseText);
                                try {
                                    c = u.statusText
                                } catch (f) {
                                    c = ""
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                            }
                        } catch (d) {
                            i || o(-1, d)
                        }
                        p && o(s, c, p, l)
                    }, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, b(e).unload($n)), Pn[a] = r), u.onreadystatechange = r) : r()
                }, abort: function () {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + x + ")([a-z%]*)$", "i"),
        Jn = /queueHooks$/, Gn = [nr], Qn = {
            "*": [function (e, t) {
                var n, r, i = this.createTween(e, t), o = Yn.exec(t), a = i.cur(), s = +a || 0, u = 1, l = 20;
                if (o) {
                    if (n = +o[2], r = o[3] || (b.cssNumber[e] ? "" : "px"), "px" !== r && s) {
                        s = b.css(i.elem, e, !0) || n || 1;
                        do u = u || ".5", s /= u, b.style(i.elem, e, s + r); while (u !== (u = i.cur() / a) && 1 !== u && --l)
                    }
                    i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n
                }
                return i
            }]
        };

    function Kn() {
        return setTimeout(function () {
            Xn = t
        }), Xn = b.now()
    }

    function Zn(e, t) {
        b.each(t, function (t, n) {
            var r = (Qn[t] || []).concat(Qn["*"]), i = 0, o = r.length;
            for (; o > i; i++) if (r[i].call(e, t, n)) return
        })
    }

    function er(e, t, n) {
        var r, i, o = 0, a = Gn.length, s = b.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (i) return !1;
            var t = Xn || Kn(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r,
                a = 0, u = l.tweens.length;
            for (; u > a; a++) l.tweens[a].run(o);
            return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
        }, l = s.promise({
            elem: e,
            props: b.extend({}, t),
            opts: b.extend(!0, {specialEasing: {}}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Xn || Kn(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r
            },
            stop: function (t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i) return this;
                for (i = !0; r > n; n++) l.tweens[n].run(1);
                return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
            }
        }), c = l.props;
        for (tr(c, l.opts.specialEasing); a > o; o++) if (r = Gn[o].call(l, e, c, l.opts)) return r;
        return Zn(l, c), b.isFunction(l.opts.start) && l.opts.start.call(e, l), b.fx.timer(b.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function tr(e, t) {
        var n, r, i, o, a;
        for (i in e) if (r = b.camelCase(i), o = t[r], n = e[i], b.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = b.cssHooks[r], a && "expand" in a) {
            n = a.expand(n), delete e[r];
            for (i in n) i in e || (e[i] = n[i], t[i] = o)
        } else t[r] = o
    }

    b.Animation = b.extend(er, {
        tweener: function (e, t) {
            b.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0, i = e.length;
            for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
        }, prefilter: function (e, t) {
            t ? Gn.unshift(e) : Gn.push(e)
        }
    });

    function nr(e, t, n) {
        var r, i, o, a, s, u, l, c, p, f = this, d = e.style, h = {}, g = [], m = e.nodeType && nn(e);
        n.queue || (c = b._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, p = c.empty.fire, c.empty.fire = function () {
            c.unqueued || p()
        }), c.unqueued++, f.always(function () {
            f.always(function () {
                c.unqueued--, b.queue(e, "fx").length || c.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === b.css(e, "display") && "none" === b.css(e, "float") && (b.support.inlineBlockNeedsLayout && "inline" !== un(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", b.support.shrinkWrapBlocks || f.always(function () {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (i in t) if (a = t[i], Vn.exec(a)) {
            if (delete t[i], u = u || "toggle" === a, a === (m ? "hide" : "show")) continue;
            g.push(i)
        }
        if (o = g.length) {
            s = b._data(e, "fxshow") || b._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), u && (s.hidden = !m), m ? b(e).show() : f.done(function () {
                b(e).hide()
            }), f.done(function () {
                var t;
                b._removeData(e, "fxshow");
                for (t in h) b.style(e, t, h[t])
            });
            for (i = 0; o > i; i++) r = g[i], l = f.createTween(r, m ? s[r] : 0), h[r] = s[r] || b.style(e, r), r in s || (s[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }

    b.Tween = rr, rr.prototype = {
        constructor: rr, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (b.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = b.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            }, set: function (e) {
                b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[b.cssProps[e.prop]] || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, b.each(["toggle", "show", "hide"], function (e, t) {
        var n = b.fn[t];
        b.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), b.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = b.isEmptyObject(e), o = b.speed(t, n, r), a = function () {
                var t = er(this, b.extend({}, e), o);
                a.finish = function () {
                    t.stop(!0)
                }, (i || b._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, n = null != e && e + "queueHooks", o = b.timers, a = b._data(this);
                if (n) a[n] && a[n].stop && i(a[n]); else for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && b.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = b._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = b.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, b.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    });

    function ir(e, t) {
        var n, r = {height: e}, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    b.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        b.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), b.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? b.extend({}, e) : {
            complete: n || !n && t || b.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !b.isFunction(t) && t
        };
        return r.duration = b.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            b.isFunction(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue)
        }, r
    }, b.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, b.timers = [], b.fx = rr.prototype.init, b.fx.tick = function () {
        var e, n = b.timers, r = 0;
        for (Xn = b.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || b.fx.stop(), Xn = t
    }, b.fx.timer = function (e) {
        e() && b.timers.push(e) && b.fx.start()
    }, b.fx.interval = 13, b.fx.start = function () {
        Un || (Un = setInterval(b.fx.tick, b.fx.interval))
    }, b.fx.stop = function () {
        clearInterval(Un), Un = null
    }, b.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, b.fx.step = {}, b.expr && b.expr.filters && (b.expr.filters.animated = function (e) {
        return b.grep(b.timers, function (t) {
            return e === t.elem
        }).length
    }), b.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            b.offset.setOffset(this, e, t)
        });
        var n, r, o = {top: 0, left: 0}, a = this[0], s = a && a.ownerDocument;
        if (s) return n = s.documentElement, b.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
            top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : o
    }, b.offset = {
        setOffset: function (e, t, n) {
            var r = b.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = b(e), o = i.offset(), a = b.css(e, "top"), s = b.css(e, "left"),
                u = ("absolute" === r || "fixed" === r) && b.inArray("auto", [a, s]) > -1, l = {}, c = {}, p, f;
            u ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), b.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (l.top = t.top - o.top + p), null != t.left && (l.left = t.left - o.left + f), "using" in t ? t.using.call(e, l) : i.css(l)
        }
    }, b.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, n = {top: 0, left: 0}, r = this[0];
                return "fixed" === b.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), b.nodeName(e[0], "html") || (n = e.offset()), n.top += b.css(e[0], "borderTopWidth", !0), n.left += b.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - b.css(r, "marginTop", !0),
                    left: t.left - n.left - b.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || o.documentElement;
                while (e && !b.nodeName(e, "html") && "static" === b.css(e, "position")) e = e.offsetParent;
                return e || o.documentElement
            })
        }
    }), b.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, n) {
        var r = /Y/.test(n);
        b.fn[e] = function (i) {
            return b.access(this, function (e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? b(a).scrollLeft() : o, r ? o : b(a).scrollTop()) : e[i] = o, t)
            }, e, i, arguments.length, null)
        }
    });

    function or(e) {
        return b.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }

    b.each({Height: "height", Width: "width"}, function (e, n) {
        b.each({padding: "inner" + e, content: n, "": "outer" + e}, function (r, i) {
            b.fn[i] = function (i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return b.access(this, function (n, r, i) {
                    var o;
                    return b.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? b.css(n, r, s) : b.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), e.jQuery = e.$ = b, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return b
    })
})(window);
/**
 * @license
 * Lo-Dash 1.1.1 (Custom Build) lodash.com/license
 * Build: `lodash -o ./dist/lodash.compat.js`
 * Underscore.js 1.4.4 underscorejs.org/LICENSE
 */
;(function (n) {
    function t(r) {
        function a(n) {
            return n && typeof n == "object" && !fe(n) && Vt.call(n, "__wrapped__") ? n : new K(n)
        }

        function q(n, t, e) {
            var r = n.length, u = r - t >= e;
            if (u) {
                var a = {};
                for (e = t - 1; ++e < r;) {
                    var o = qt(n[e]);
                    (Vt.call(a, o) ? a[o] : a[o] = []).push(n[e])
                }
            }
            return function (e) {
                if (u) {
                    var r = qt(e);
                    return Vt.call(a, r) && -1 < yt(a[r], e)
                }
                return -1 < yt(n, e, t)
            }
        }

        function B(n) {
            return n.charCodeAt(0)
        }

        function F(n, t) {
            var e = n.b, r = t.b;
            if (n = n.a, t = t.a, n !== t) {
                if (n > t || typeof n == "undefined") return 1;
                if (n < t || typeof t == "undefined") return -1
            }
            return e < r ? -1 : 1
        }

        function R(n, t, e, r) {
            function u() {
                var r = arguments, c = o ? this : t;
                return a || (n = t[i]), e.length && (r = r.length ? (r = V(r), f ? r.concat(e) : e.concat(r)) : e), this instanceof u ? (M.prototype = n.prototype, c = new M, M.prototype = null, r = n.apply(c, r), Z(r) ? r : c) : n.apply(c, r)
            }

            var a = Y(n), o = !e, i = t;
            if (o) {
                var f = r;
                e = t
            } else if (!a) {
                if (!r) throw new Bt;
                t = n
            }
            return u
        }

        function T() {
            for (var n, t = {
                g: _,
                b: "k(m)",
                c: "",
                e: "m",
                f: "",
                h: "",
                i: !0,
                j: !!le
            }, e = 0; n = arguments[e]; e++) for (var r in n) t[r] = n[r];
            if (n = t.a, t.d = /^[^,]+/.exec(n)[0], e = At, r = "var i,m=" + t.d + ",u=" + t.e + ";if(!m)return u;" + t.h + ";", t.b ? (r += "var n=m.length;i=-1;if(" + t.b + "){", ie.unindexedChars && (r += "if(l(m)){m=m.split('')}"), r += "while(++i<n){" + t.f + "}}else{") : ie.nonEnumArgs && (r += "var n=m.length;i=-1;if(n&&j(m)){while(++i<n){i+='';" + t.f + "}}else{"), ie.enumPrototypes && (r += "var v=typeof m=='function';"), t.i && t.j) r += "var s=-1,t=r[typeof m]?o(m):[],n=t.length;while(++s<n){i=t[s];", ie.enumPrototypes && (r += "if(!(v&&i=='prototype')){"), r += t.f, ie.enumPrototypes && (r += "}"), r += "}";
            else if (r += "for(i in m){", (ie.enumPrototypes || t.i) && (r += "if(", ie.enumPrototypes && (r += "!(v&&i=='prototype')"), ie.enumPrototypes && t.i && (r += "&&"), t.i && (r += "h.call(m,i)"), r += "){"), r += t.f + ";", (ie.enumPrototypes || t.i) && (r += "}"), r += "}", ie.nonEnumShadows) {
                r += "var f=m.constructor;";
                for (var u = 0; 7 > u; u++) r += "i='" + t.g[u] + "';if(", "constructor" == t.g[u] && (r += "!(f&&f.prototype===m)&&"), r += "h.call(m,i)){" + t.f + "}"
            }
            return (t.b || ie.nonEnumArgs) && (r += "}"), r += t.c + ";return u", e("h,j,k,l,o,p,r", "return function(" + n + "){" + r + "}")(Vt, H, fe, tt, le, a, P)
        }

        function D(n) {
            return "\\" + N[n]
        }

        function z(n) {
            return se[n]
        }

        function L(n) {
            return typeof n.toString != "function" && typeof(n + "") == "string"
        }

        function K(n) {
            this.__wrapped__ = n
        }

        function M() {
        }

        function U(n) {
            var t = !1;
            if (!n || Qt.call(n) != E || !ie.argsClass && H(n)) return t;
            var e = n.constructor;
            return (Y(e) ? e instanceof e : ie.nodeClass || !L(n)) ? ie.ownLast ? (ye(n, function (n, e, r) {
                return t = Vt.call(r, e), !1
            }), !0 === t) : (ye(n, function (n, e) {
                t = e
            }), !1 === t || Vt.call(n, t)) : t
        }

        function V(n, t, e) {
            t || (t = 0), typeof e == "undefined" && (e = n ? n.length : 0);
            var r = -1;
            e = e - t || 0;
            for (var u = Ot(0 > e ? 0 : e); ++r < e;) u[r] = n[t + r];
            return u
        }

        function G(n) {
            return ve[n]
        }

        function H(n) {
            return Qt.call(n) == C
        }

        function J(n, t, r, u, o, i) {
            var f = n;
            if (typeof t == "function" && (u = r, r = t, t = !1), typeof r == "function") {
                if (r = typeof u == "undefined" ? r : a.createCallback(r, u, 1), f = r(f), typeof f != "undefined") return f;
                f = n
            }
            if (u = Z(f)) {
                var c = Qt.call(f);
                if (!I[c] || !ie.nodeClass && L(f)) return f;
                var l = fe(f)
            }
            if (!u || !t) return u ? l ? V(f) : ge({}, f) : f;
            switch (u = oe[c], c) {
                case j:
                case k:
                    return new u(+f);
                case O:
                case A:
                    return new u(f);
                case S:
                    return u(f.source, v.exec(f))
            }
            for (o || (o = []), i || (i = []), c = o.length; c--;) if (o[c] == n) return i[c];
            return f = l ? u(f.length) : {}, l && (Vt.call(n, "index") && (f.index = n.index), Vt.call(n, "input") && (f.input = n.input)), o.push(n), i.push(f), (l ? ft : me)(n, function (n, u) {
                f[u] = J(n, t, r, e, o, i)
            }), f
        }

        function Q(n) {
            var t = [];
            return ye(n, function (n, e) {
                Y(n) && t.push(e)
            }), t.sort()
        }

        function W(n) {
            for (var t = -1, e = le(n), r = e.length, u = {}; ++t < r;) {
                var a = e[t];
                u[n[a]] = a
            }
            return u
        }

        function X(n, t, e, r, u, o) {
            var f = e === i;
            if (e && !f) {
                e = typeof r == "undefined" ? e : a.createCallback(e, r, 2);
                var c = e(n, t);
                if (typeof c != "undefined") return !!c
            }
            if (n === t) return 0 !== n || 1 / n == 1 / t;
            var l = typeof n, p = typeof t;
            if (n === n && (!n || "function" != l && "object" != l) && (!t || "function" != p && "object" != p)) return !1;
            if (null == n || null == t) return n === t;
            if (p = Qt.call(n), l = Qt.call(t), p == C && (p = E), l == C && (l = E), p != l) return !1;
            switch (p) {
                case j:
                case k:
                    return +n == +t;
                case O:
                    return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
                case S:
                case A:
                    return n == qt(t)
            }
            if (l = p == w, !l) {
                if (Vt.call(n, "__wrapped__") || Vt.call(t, "__wrapped__")) return X(n.__wrapped__ || n, t.__wrapped__ || t, e, r, u, o);
                if (p != E || !ie.nodeClass && (L(n) || L(t))) return !1;
                var p = !ie.argsObject && H(n) ? Nt : n.constructor, s = !ie.argsObject && H(t) ? Nt : t.constructor;
                if (p != s && (!Y(p) || !(p instanceof p && Y(s) && s instanceof s))) return !1
            }
            for (u || (u = []), o || (o = []), p = u.length; p--;) if (u[p] == n) return o[p] == t;
            var v = 0, c = !0;
            if (u.push(n), o.push(t), l) {
                if (p = n.length, v = t.length, c = v == n.length, !c && !f) return c;
                for (; v--;) if (l = p, s = t[v], f) for (; l-- && !(c = X(n[l], s, e, r, u, o));) ; else if (!(c = X(n[v], s, e, r, u, o))) break;
                return c
            }
            return ye(t, function (t, a, i) {
                return Vt.call(i, a) ? (v++, c = Vt.call(n, a) && X(n[a], t, e, r, u, o)) : void 0
            }), c && !f && ye(n, function (n, t, e) {
                return Vt.call(e, t) ? c = -1 < --v : void 0
            }), c
        }

        function Y(n) {
            return typeof n == "function"
        }

        function Z(n) {
            return n ? P[typeof n] : !1
        }

        function nt(n) {
            return typeof n == "number" || Qt.call(n) == O
        }

        function tt(n) {
            return typeof n == "string" || Qt.call(n) == A
        }

        function et(n, t, e) {
            var r = arguments, u = 0, o = 2;
            if (!Z(n)) return n;
            if (e === i) var f = r[3], c = r[4],
                l = r[5]; else c = [], l = [], typeof e != "number" && (o = r.length), 3 < o && "function" == typeof r[o - 2] ? f = a.createCallback(r[--o - 1], r[o--], 2) : 2 < o && "function" == typeof r[o - 1] && (f = r[--o]);
            for (; ++u < o;) (fe(r[u]) ? ft : me)(r[u], function (t, e) {
                var r, u, a = t, o = n[e];
                if (t && ((u = fe(t)) || de(t))) {
                    for (a = c.length; a--;) if (r = c[a] == t) {
                        o = l[a];
                        break
                    }
                    r || (o = u ? fe(o) ? o : [] : de(o) ? o : {}, f && (a = f(o, t), typeof a != "undefined" && (o = a)), c.push(t), l.push(o), f || (o = et(o, t, i, f, c, l)))
                } else f && (a = f(o, t), typeof a == "undefined" && (a = t)), typeof a != "undefined" && (o = a);
                n[e] = o
            });
            return n
        }

        function rt(n) {
            for (var t = -1, e = le(n), r = e.length, u = Ot(r); ++t < r;) u[t] = n[e[t]];
            return u
        }

        function ut(n, t, e) {
            var r = -1, u = n ? n.length : 0, a = !1;
            return e = (0 > e ? te(0, u + e) : e) || 0, typeof u == "number" ? a = -1 < (tt(n) ? n.indexOf(t, e) : yt(n, t, e)) : pe(n, function (n) {
                return ++r < e ? void 0 : !(a = n === t)
            }), a
        }

        function at(n, t, e) {
            var r = !0;
            if (t = a.createCallback(t, e), fe(n)) {
                e = -1;
                for (var u = n.length; ++e < u && (r = !!t(n[e], e, n));) ;
            } else pe(n, function (n, e, u) {
                return r = !!t(n, e, u)
            });
            return r
        }

        function ot(n, t, e) {
            var r = [];
            if (t = a.createCallback(t, e), fe(n)) {
                e = -1;
                for (var u = n.length; ++e < u;) {
                    var o = n[e];
                    t(o, e, n) && r.push(o)
                }
            } else pe(n, function (n, e, u) {
                t(n, e, u) && r.push(n)
            });
            return r
        }

        function it(n, t, e) {
            if (t = a.createCallback(t, e), !fe(n)) {
                var r;
                return pe(n, function (n, e, u) {
                    return t(n, e, u) ? (r = n, !1) : void 0
                }), r
            }
            e = -1;
            for (var u = n.length; ++e < u;) {
                var o = n[e];
                if (t(o, e, n)) return o
            }
        }

        function ft(n, t, e) {
            if (t && typeof e == "undefined" && fe(n)) {
                e = -1;
                for (var r = n.length; ++e < r && !1 !== t(n[e], e, n);) ;
            } else pe(n, t, e);
            return n
        }

        function ct(n, t, e) {
            var r = -1, u = n ? n.length : 0, o = Ot(typeof u == "number" ? u : 0);
            if (t = a.createCallback(t, e), fe(n)) for (; ++r < u;) o[r] = t(n[r], r, n); else pe(n, function (n, e, u) {
                o[++r] = t(n, e, u)
            });
            return o
        }

        function lt(n, t, e) {
            var r = -1 / 0, u = r;
            if (!t && fe(n)) {
                e = -1;
                for (var o = n.length; ++e < o;) {
                    var i = n[e];
                    i > u && (u = i)
                }
            } else t = !t && tt(n) ? B : a.createCallback(t, e), pe(n, function (n, e, a) {
                e = t(n, e, a), e > r && (r = e, u = n)
            });
            return u
        }

        function pt(n, t, e, r) {
            var u = 3 > arguments.length;
            if (t = a.createCallback(t, r, 4), fe(n)) {
                var o = -1, i = n.length;
                for (u && (e = n[++o]); ++o < i;) e = t(e, n[o], o, n)
            } else pe(n, function (n, r, a) {
                e = u ? (u = !1, n) : t(e, n, r, a)
            });
            return e
        }

        function st(n, t, e, r) {
            var u = n, o = n ? n.length : 0, i = 3 > arguments.length;
            if (typeof o != "number") var f = le(n), o = f.length; else ie.unindexedChars && tt(n) && (u = n.split(""));
            return t = a.createCallback(t, r, 4), ft(n, function (n, r, a) {
                r = f ? f[--o] : --o, e = i ? (i = !1, u[r]) : t(e, u[r], r, a)
            }), e
        }

        function vt(n, t, e) {
            var r;
            if (t = a.createCallback(t, e), fe(n)) {
                e = -1;
                for (var u = n.length; ++e < u && !(r = t(n[e], e, n));) ;
            } else pe(n, function (n, e, u) {
                return !(r = t(n, e, u))
            });
            return !!r
        }

        function gt(n, t, e) {
            if (n) {
                var r = 0, u = n.length;
                if (typeof t != "number" && null != t) {
                    var o = -1;
                    for (t = a.createCallback(t, e); ++o < u && t(n[o], o, n);) r++
                } else if (r = t, null == r || e) return n[0];
                return V(n, 0, ee(te(0, r), u))
            }
        }

        function ht(n, t, e, r) {
            var u = -1, o = n ? n.length : 0, i = [];
            for (typeof t != "boolean" && null != t && (r = e, e = t, t = !1), null != e && (e = a.createCallback(e, r)); ++u < o;) r = n[u], e && (r = e(r, u, n)), fe(r) ? Gt.apply(i, t ? r : ht(r)) : i.push(r);
            return i
        }

        function yt(n, t, e) {
            var r = -1, u = n ? n.length : 0;
            if (typeof e == "number") r = (0 > e ? te(0, u + e) : e || 0) - 1; else if (e) return r = dt(n, t), n[r] === t ? r : -1;
            for (; ++r < u;) if (n[r] === t) return r;
            return -1
        }

        function mt(n, t, e) {
            if (typeof t != "number" && null != t) {
                var r = 0, u = -1, o = n ? n.length : 0;
                for (t = a.createCallback(t, e); ++u < o && t(n[u], u, n);) r++
            } else r = null == t || e ? 1 : te(0, t);
            return V(n, r)
        }

        function dt(n, t, e, r) {
            var u = 0, o = n ? n.length : u;
            for (e = e ? a.createCallback(e, r, 1) : jt, t = e(t); u < o;) r = u + o >>> 1, e(n[r]) < t ? u = r + 1 : o = r;
            return u
        }

        function bt(n, t, e, r) {
            var u = -1, o = n ? n.length : 0, i = [], f = i;
            typeof t != "boolean" && null != t && (r = e, e = t, t = !1);
            var c = !t && 75 <= o;
            if (c) var l = {};
            for (null != e && (f = [], e = a.createCallback(e, r)); ++u < o;) {
                r = n[u];
                var p = e ? e(r, u, n) : r;
                if (c) var s = qt(p), s = Vt.call(l, s) ? !(f = l[s]) : f = l[s] = [];
                (t ? !u || f[f.length - 1] !== p : s || 0 > yt(f, p)) && ((e || c) && f.push(p), i.push(r))
            }
            return i
        }

        function _t(n, t) {
            for (var e = -1, r = n ? n.length : 0, u = {}; ++e < r;) {
                var a = n[e];
                t ? u[a] = t[e] : u[a[0]] = a[1]
            }
            return u
        }

        function Ct(n, t) {
            return ie.fastBind || Wt && 2 < arguments.length ? Wt.call.apply(Wt, arguments) : R(n, t, V(arguments, 2))
        }

        function wt(n) {
            var t = V(arguments, 1);
            return Jt(function () {
                n.apply(e, t)
            }, 1)
        }

        function jt(n) {
            return n
        }

        function kt(n) {
            ft(Q(n), function (t) {
                var e = a[t] = n[t];
                a.prototype[t] = function () {
                    var n = this.__wrapped__, t = [n];
                    return Gt.apply(t, arguments), t = e.apply(a, t), n && typeof n == "object" && n == t ? this : new K(t)
                }
            })
        }

        function xt() {
            return this.__wrapped__
        }

        r = r ? $.defaults(n.Object(), r, $.pick(n, b)) : n;
        var Ot = r.Array, Et = r.Boolean, St = r.Date, At = r.Function, It = r.Math, Pt = r.Number, Nt = r.Object,
            $t = r.RegExp, qt = r.String, Bt = r.TypeError, Ft = Ot(), Rt = Nt(), Tt = r._,
            Dt = $t("^" + qt(Rt.valueOf).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/valueOf|for [^\]]+/g, ".+?") + "$"),
            zt = It.ceil, Lt = r.clearTimeout, Kt = Ft.concat, Mt = It.floor,
            Ut = Dt.test(Ut = Nt.getPrototypeOf) && Ut, Vt = Rt.hasOwnProperty, Gt = Ft.push, Ht = r.setImmediate,
            Jt = r.setTimeout, Qt = Rt.toString, Wt = Dt.test(Wt = V.bind) && Wt, Xt = Dt.test(Xt = Ot.isArray) && Xt,
            Yt = r.isFinite, Zt = r.isNaN, ne = Dt.test(ne = Nt.keys) && ne, te = It.max, ee = It.min, re = r.parseInt,
            ue = It.random, It = Dt.test(r.attachEvent), ae = Wt && !/\n|true/.test(Wt + It), oe = {};
        oe[w] = Ot, oe[j] = Et, oe[k] = St, oe[E] = Nt, oe[O] = Pt, oe[S] = $t, oe[A] = qt;
        var ie = a.support = {};
        (function () {
            var n = function () {
                this.x = 1
            }, t = {0: 1, length: 1}, e = [];
            n.prototype = {valueOf: 1, y: 1};
            for (var r in new n) e.push(r);
            for (r in arguments) ;
            ie.argsObject = arguments.constructor == Nt, ie.argsClass = H(arguments), ie.enumPrototypes = n.propertyIsEnumerable("prototype"), ie.fastBind = Wt && !ae, ie.ownLast = "x" != e[0], ie.nonEnumArgs = 0 != r, ie.nonEnumShadows = !/valueOf/.test(e), ie.spliceObjects = (Ft.splice.call(t, 0, 1), !t[0]), ie.unindexedChars = "xx" != "x"[0] + Nt("x")[0];
            try {
                ie.nodeClass = !(Qt.call(document) == E && !({toString: 0} + ""))
            } catch (u) {
                ie.nodeClass = !0
            }
        })(1), a.templateSettings = {
            escape: /<%-([\s\S]+?)%>/g,
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: g,
            variable: "",
            imports: {_: a}
        }, Et = {
            a: "q,w,g",
            h: "var a=arguments,b=0,c=typeof g=='number'?2:a.length;while(++b<c){m=a[b];if(m&&r[typeof m]){",
            f: "if(typeof u[i]=='undefined')u[i]=m[i]",
            c: "}}"
        }, Pt = {
            a: "e,d,x",
            h: "d=d&&typeof x=='undefined'?d:p.createCallback(d,x)",
            b: "typeof n=='number'",
            f: "if(d(m[i],i,e)===false)return u"
        }, It = {
            h: "if(!r[typeof m])return u;" + Pt.h,
            b: !1
        }, K.prototype = a.prototype, ie.argsClass || (H = function (n) {
            return n ? Vt.call(n, "callee") : !1
        });
        var fe = Xt || function (n) {
                return ie.argsObject && n instanceof Ot || Qt.call(n) == w
            }, ce = T({a: "q", e: "[]", h: "if(!(r[typeof q]))return u", f: "u.push(i)", b: !1}), le = ne ? function (n) {
                return Z(n) ? ie.enumPrototypes && typeof n == "function" || ie.nonEnumArgs && n.length && H(n) ? ce(n) : ne(n) : []
            } : ce, pe = T(Pt), se = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"}, ve = W(se),
            ge = T(Et, {
                h: Et.h.replace(";", ";if(c>3&&typeof a[c-2]=='function'){var d=p.createCallback(a[--c-1],a[c--],2);}else if(c>2&&typeof a[c-1]=='function'){d=a[--c];}"),
                f: "u[i]=d?d(u[i],m[i]):m[i]"
            }), he = T(Et), ye = T(Pt, It, {i: !1}), me = T(Pt, It);
        Y(/x/) && (Y = function (n) {
            return n instanceof At || Qt.call(n) == x
        });
        var de = Ut ? function (n) {
            if (!n || Qt.call(n) != E || !ie.argsClass && H(n)) return !1;
            var t = n.valueOf, e = typeof t == "function" && (e = Ut(t)) && Ut(e);
            return e ? n == e || Ut(n) == e : U(n)
        } : U;
        return ae && u && typeof Ht == "function" && (wt = Ct(Ht, r)), Ht = 8 == re("08") ? re : function (n, t) {
            return re(tt(n) ? n.replace(h, "") : n, t || 0)
        }, a.after = function (n, t) {
            return 1 > n ? t() : function () {
                return 1 > --n ? t.apply(this, arguments) : void 0
            }
        }, a.assign = ge, a.at = function (n) {
            var t = -1, e = Kt.apply(Ft, V(arguments, 1)), r = e.length, u = Ot(r);
            for (ie.unindexedChars && tt(n) && (n = n.split("")); ++t < r;) u[t] = n[e[t]];
            return u
        }, a.bind = Ct, a.bindAll = function (n) {
            for (var t = Kt.apply(Ft, arguments), e = 1 < t.length ? 0 : (t = Q(n), -1), r = t.length; ++e < r;) {
                var u = t[e];
                n[u] = Ct(n[u], n)
            }
            return n
        }, a.bindKey = function (n, t) {
            return R(n, t, V(arguments, 2), i)
        }, a.compact = function (n) {
            for (var t = -1, e = n ? n.length : 0, r = []; ++t < e;) {
                var u = n[t];
                u && r.push(u)
            }
            return r
        }, a.compose = function () {
            var n = arguments;
            return function () {
                for (var t = arguments, e = n.length; e--;) t = [n[e].apply(this, t)];
                return t[0]
            }
        }, a.countBy = function (n, t, e) {
            var r = {};
            return t = a.createCallback(t, e), ft(n, function (n, e, u) {
                e = qt(t(n, e, u)), Vt.call(r, e) ? r[e]++ : r[e] = 1
            }), r
        }, a.createCallback = function (n, t, e) {
            if (null == n) return jt;
            var r = typeof n;
            if ("function" != r) {
                if ("object" != r) return function (t) {
                    return t[n]
                };
                var u = le(n);
                return function (t) {
                    for (var e = u.length, r = !1; e-- && (r = X(t[u[e]], n[u[e]], i));) ;
                    return r
                }
            }
            return typeof t != "undefined" ? 1 === e ? function (e) {
                return n.call(t, e)
            } : 2 === e ? function (e, r) {
                return n.call(t, e, r)
            } : 4 === e ? function (e, r, u, a) {
                return n.call(t, e, r, u, a)
            } : function (e, r, u) {
                return n.call(t, e, r, u)
            } : n
        }, a.debounce = function (n, t, e) {
            function r() {
                i = null, e || (a = n.apply(o, u))
            }

            var u, a, o, i;
            return function () {
                var f = e && !i;
                return u = arguments, o = this, Lt(i), i = Jt(r, t), f && (a = n.apply(o, u)), a
            }
        }, a.defaults = he, a.defer = wt, a.delay = function (n, t) {
            var r = V(arguments, 2);
            return Jt(function () {
                n.apply(e, r)
            }, t)
        }, a.difference = function (n) {
            for (var t = -1, e = n ? n.length : 0, r = Kt.apply(Ft, arguments), r = q(r, e, 100), u = []; ++t < e;) {
                var a = n[t];
                r(a) || u.push(a)
            }
            return u
        }, a.filter = ot, a.flatten = ht, a.forEach = ft, a.forIn = ye, a.forOwn = me, a.functions = Q, a.groupBy = function (n, t, e) {
            var r = {};
            return t = a.createCallback(t, e), ft(n, function (n, e, u) {
                e = qt(t(n, e, u)), (Vt.call(r, e) ? r[e] : r[e] = []).push(n)
            }), r
        }, a.initial = function (n, t, e) {
            if (!n) return [];
            var r = 0, u = n.length;
            if (typeof t != "number" && null != t) {
                var o = u;
                for (t = a.createCallback(t, e); o-- && t(n[o], o, n);) r++
            } else r = null == t || e ? 1 : t || r;
            return V(n, 0, ee(te(0, u - r), u))
        }, a.intersection = function (n) {
            var t = arguments, e = t.length, r = {0: {}}, u = -1, a = n ? n.length : 0, o = 100 <= a, i = [], f = i;
            n:for (; ++u < a;) {
                var c = n[u];
                if (o) var l = qt(c), l = Vt.call(r[0], l) ? !(f = r[0][l]) : f = r[0][l] = [];
                if (l || 0 > yt(f, c)) {
                    o && f.push(c);
                    for (var p = e; --p;) if (!(r[p] || (r[p] = q(t[p], 0, 100)))(c)) continue n;
                    i.push(c)
                }
            }
            return i
        }, a.invert = W, a.invoke = function (n, t) {
            var e = V(arguments, 2), r = -1, u = typeof t == "function", a = n ? n.length : 0,
                o = Ot(typeof a == "number" ? a : 0);
            return ft(n, function (n) {
                o[++r] = (u ? t : n[t]).apply(n, e)
            }), o
        }, a.keys = le, a.map = ct, a.max = lt, a.memoize = function (n, t) {
            var e = {};
            return function () {
                var r = qt(t ? t.apply(this, arguments) : arguments[0]);
                return Vt.call(e, r) ? e[r] : e[r] = n.apply(this, arguments)
            }
        }, a.merge = et, a.min = function (n, t, e) {
            var r = 1 / 0, u = r;
            if (!t && fe(n)) {
                e = -1;
                for (var o = n.length; ++e < o;) {
                    var i = n[e];
                    i < u && (u = i)
                }
            } else t = !t && tt(n) ? B : a.createCallback(t, e), pe(n, function (n, e, a) {
                e = t(n, e, a), e < r && (r = e, u = n)
            });
            return u
        }, a.omit = function (n, t, e) {
            var r = typeof t == "function", u = {};
            if (r) t = a.createCallback(t, e); else var o = Kt.apply(Ft, arguments);
            return ye(n, function (n, e, a) {
                (r ? !t(n, e, a) : 0 > yt(o, e, 1)) && (u[e] = n)
            }), u
        }, a.once = function (n) {
            var t, e;
            return function () {
                return t ? e : (t = !0, e = n.apply(this, arguments), n = null, e)
            }
        }, a.pairs = function (n) {
            for (var t = -1, e = le(n), r = e.length, u = Ot(r); ++t < r;) {
                var a = e[t];
                u[t] = [a, n[a]]
            }
            return u
        }, a.partial = function (n) {
            return R(n, V(arguments, 1))
        }, a.partialRight = function (n) {
            return R(n, V(arguments, 1), null, i)
        }, a.pick = function (n, t, e) {
            var r = {};
            if (typeof t != "function") for (var u = 0, o = Kt.apply(Ft, arguments), i = Z(n) ? o.length : 0; ++u < i;) {
                var f = o[u];
                f in n && (r[f] = n[f])
            } else t = a.createCallback(t, e), ye(n, function (n, e, u) {
                t(n, e, u) && (r[e] = n)
            });
            return r
        }, a.pluck = ct, a.range = function (n, t, e) {
            n = +n || 0, e = +e || 1, null == t && (t = n, n = 0);
            var r = -1;
            t = te(0, zt((t - n) / e));
            for (var u = Ot(t); ++r < t;) u[r] = n, n += e;
            return u
        }, a.reject = function (n, t, e) {
            return t = a.createCallback(t, e), ot(n, function (n, e, r) {
                return !t(n, e, r)
            })
        }, a.rest = mt, a.shuffle = function (n) {
            var t = -1, e = n ? n.length : 0, r = Ot(typeof e == "number" ? e : 0);
            return ft(n, function (n) {
                var e = Mt(ue() * (++t + 1));
                r[t] = r[e], r[e] = n
            }), r
        }, a.sortBy = function (n, t, e) {
            var r = -1, u = n ? n.length : 0, o = Ot(typeof u == "number" ? u : 0);
            for (t = a.createCallback(t, e), ft(n, function (n, e, u) {
                o[++r] = {a: t(n, e, u), b: r, c: n}
            }), u = o.length, o.sort(F); u--;) o[u] = o[u].c;
            return o
        }, a.tap = function (n, t) {
            return t(n), n
        }, a.throttle = function (n, t) {
            function e() {
                i = new St, o = null, u = n.apply(a, r)
            }

            var r, u, a, o, i = 0;
            return function () {
                var f = new St, c = t - (f - i);
                return r = arguments, a = this, 0 < c ? o || (o = Jt(e, c)) : (Lt(o), o = null, i = f, u = n.apply(a, r)), u
            }
        }, a.times = function (n, t, e) {
            n = -1 < (n = +n) ? n : 0;
            var r = -1, u = Ot(n);
            for (t = a.createCallback(t, e, 1); ++r < n;) u[r] = t(r);
            return u
        }, a.toArray = function (n) {
            return n && typeof n.length == "number" ? ie.unindexedChars && tt(n) ? n.split("") : V(n) : rt(n)
        }, a.union = function () {
            return bt(Kt.apply(Ft, arguments))
        }, a.uniq = bt, a.values = rt, a.where = ot, a.without = function (n) {
            for (var t = -1, e = n ? n.length : 0, r = q(arguments, 1, 30), u = []; ++t < e;) {
                var a = n[t];
                r(a) || u.push(a)
            }
            return u
        }, a.wrap = function (n, t) {
            return function () {
                var e = [n];
                return Gt.apply(e, arguments), t.apply(this, e)
            }
        }, a.zip = function (n) {
            for (var t = -1, e = n ? lt(ct(arguments, "length")) : 0, r = Ot(e); ++t < e;) r[t] = ct(arguments, t);
            return r
        }, a.zipObject = _t, a.collect = ct, a.drop = mt, a.each = ft, a.extend = ge, a.methods = Q, a.object = _t, a.select = ot, a.tail = mt, a.unique = bt, kt(a), a.clone = J, a.cloneDeep = function (n, t, e) {
            return J(n, !0, t, e)
        }, a.contains = ut, a.escape = function (n) {
            return null == n ? "" : qt(n).replace(m, z)
        }, a.every = at, a.find = it, a.findIndex = function (n, t, e) {
            var r = -1, u = n ? n.length : 0;
            for (t = a.createCallback(t, e); ++r < u;) if (t(n[r], r, n)) return r;
            return -1
        }, a.findKey = function (n, t, e) {
            var r;
            return t = a.createCallback(t, e), me(n, function (n, e, u) {
                return t(n, e, u) ? (r = e, !1) : void 0
            }), r
        }, a.has = function (n, t) {
            return n ? Vt.call(n, t) : !1
        }, a.identity = jt, a.indexOf = yt, a.isArguments = H, a.isArray = fe, a.isBoolean = function (n) {
            return !0 === n || !1 === n || Qt.call(n) == j
        }, a.isDate = function (n) {
            return n instanceof St || Qt.call(n) == k
        }, a.isElement = function (n) {
            return n ? 1 === n.nodeType : !1
        }, a.isEmpty = function (n) {
            var t = !0;
            if (!n) return t;
            var e = Qt.call(n), r = n.length;
            return e == w || e == A || (ie.argsClass ? e == C : H(n)) || e == E && typeof r == "number" && Y(n.splice) ? !r : (me(n, function () {
                return t = !1
            }), t)
        }, a.isEqual = X, a.isFinite = function (n) {
            return Yt(n) && !Zt(parseFloat(n))
        }, a.isFunction = Y, a.isNaN = function (n) {
            return nt(n) && n != +n
        }, a.isNull = function (n) {
            return null === n
        }, a.isNumber = nt, a.isObject = Z, a.isPlainObject = de, a.isRegExp = function (n) {
            return n instanceof $t || Qt.call(n) == S
        }, a.isString = tt, a.isUndefined = function (n) {
            return typeof n == "undefined"
        }, a.lastIndexOf = function (n, t, e) {
            var r = n ? n.length : 0;
            for (typeof e == "number" && (r = (0 > e ? te(0, r + e) : ee(e, r - 1)) + 1); r--;) if (n[r] === t) return r;
            return -1
        }, a.mixin = kt, a.noConflict = function () {
            return r._ = Tt, this
        }, a.parseInt = Ht, a.random = function (n, t) {
            return null == n && null == t && (t = 1), n = +n || 0, null == t && (t = n, n = 0), n + Mt(ue() * ((+t || 0) - n + 1))
        },a.reduce = pt,a.reduceRight = st,a.result = function (n, t) {
            var r = n ? n[t] : e;
            return Y(r) ? n[t]() : r
        },a.runInContext = t,a.size = function (n) {
            var t = n ? n.length : 0;
            return typeof t == "number" ? t : le(n).length
        },a.some = vt,a.sortedIndex = dt,a.template = function (n, t, r) {
            var u = a.templateSettings;
            n || (n = ""), r = he({}, r, u);
            var o, i = he({}, r.imports, u.imports), u = le(i), i = rt(i), p = 0, v = r.interpolate || y, h = "__p+='",
                v = $t((r.escape || y).source + "|" + v.source + "|" + (v === g ? s : y).source + "|" + (r.evaluate || y).source + "|$", "g");
            n.replace(v, function (t, e, r, u, a, i) {
                return r || (r = u), h += n.slice(p, i).replace(d, D), e && (h += "'+__e(" + e + ")+'"), a && (o = !0, h += "';" + a + ";__p+='"), r && (h += "'+((__t=(" + r + "))==null?'':__t)+'"), p = i + t.length, t
            }), h += "';\n", v = r = r.variable, v || (r = "obj", h = "with(" + r + "){" + h + "}"), h = (o ? h.replace(f, "") : h).replace(c, "$1").replace(l, "$1;"), h = "function(" + r + "){" + (v ? "" : r + "||(" + r + "={});") + "var __t,__p='',__e=_.escape" + (o ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + h + "return __p}";
            try {
                var m = At(u, "return " + h).apply(e, i)
            } catch (b) {
                throw b.source = h, b
            }
            return t ? m(t) : (m.source = h, m)
        },a.unescape = function (n) {
            return null == n ? "" : qt(n).replace(p, G)
        },a.uniqueId = function (n) {
            var t = ++o;
            return qt(null == n ? "" : n) + t
        },a.all = at,a.any = vt,a.detect = it,a.foldl = pt,a.foldr = st,a.include = ut,a.inject = pt,me(a, function (n, t) {
            a.prototype[t] || (a.prototype[t] = function () {
                var t = [this.__wrapped__];
                return Gt.apply(t, arguments), n.apply(a, t)
            })
        }),a.first = gt,a.last = function (n, t, e) {
            if (n) {
                var r = 0, u = n.length;
                if (typeof t != "number" && null != t) {
                    var o = u;
                    for (t = a.createCallback(t, e); o-- && t(n[o], o, n);) r++
                } else if (r = t, null == r || e) return n[u - 1];
                return V(n, te(0, u - r))
            }
        },a.take = gt,a.head = gt,me(a, function (n, t) {
            a.prototype[t] || (a.prototype[t] = function (t, e) {
                var r = n(this.__wrapped__, t, e);
                return null == t || e && typeof t != "function" ? r : new K(r)
            })
        }),a.VERSION = "1.1.1",a.prototype.toString = function () {
            return qt(this.__wrapped__)
        },a.prototype.value = xt,a.prototype.valueOf = xt,pe(["join", "pop", "shift"], function (n) {
            var t = Ft[n];
            a.prototype[n] = function () {
                return t.apply(this.__wrapped__, arguments)
            }
        }),pe(["push", "reverse", "sort", "unshift"], function (n) {
            var t = Ft[n];
            a.prototype[n] = function () {
                return t.apply(this.__wrapped__, arguments), this
            }
        }),pe(["concat", "slice", "splice"], function (n) {
            var t = Ft[n];
            a.prototype[n] = function () {
                return new K(t.apply(this.__wrapped__, arguments))
            }
        }),ie.spliceObjects || pe(["pop", "shift", "splice"], function (n) {
            var t = Ft[n], e = "splice" == n;
            a.prototype[n] = function () {
                var n = this.__wrapped__, r = t.apply(n, arguments);
                return 0 === n.length && delete n[0], e ? new K(r) : r
            }
        }),a
    }

    var e, r = typeof exports == "object" && exports,
        u = typeof module == "object" && module && module.exports == r && module,
        a = typeof global == "object" && global;
    a.global === a && (n = a);
    var o = 0, i = {}, f = /\b__p\+='';/g, c = /\b(__p\+=)''\+/g, l = /(__e\(.*?\)|\b__t\))\+'';/g,
        p = /&(?:amp|lt|gt|quot|#39);/g, s = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, v = /\w*$/, g = /<%=([\s\S]+?)%>/g,
        h = /^0+(?=.$)/, y = /($^)/, m = /[&<>"']/g, d = /['\n\r\t\u2028\u2029\\]/g,
        b = "Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setImmediate setTimeout".split(" "),
        _ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        C = "[object Arguments]", w = "[object Array]", j = "[object Boolean]", k = "[object Date]",
        x = "[object Function]", O = "[object Number]", E = "[object Object]", S = "[object RegExp]",
        A = "[object String]", I = {};
    I[x] = !1, I[C] = I[w] = I[j] = I[k] = I[O] = I[E] = I[S] = I[A] = !0;
    var P = {"boolean": !1, "function": !0, object: !0, number: !1, string: !1, undefined: !1},
        N = {"\\": "\\", "'": "'", "\n": "n", "\r": "r", "	": "t", "\u2028": "u2028", "\u2029": "u2029"}, $ = t();
    typeof define == "function" && typeof define.amd == "object" && define.amd ? (n._ = $, define(function () {
        return $
    })) : r && !r.nodeType ? u ? (u.exports = $)._ = $ : r._ = $ : n._ = $
})(this);
/**  Ramda v0.17.1
 *  https://github.com/ramda/ramda
 *  (c) 2013-2015 Scott Sauyet, Michael Hurley, and David Chambers
 *  Ramda may be freely distributed under the MIT license.
 *  @license
 */
(function () {
    "use strict";
    var n = {"@@functional/placeholder": !0}, t = function (n, t) {
        switch (n) {
            case 0:
                return function () {
                    return t.apply(this, arguments)
                };
            case 1:
                return function (n) {
                    return t.apply(this, arguments)
                };
            case 2:
                return function (n, r) {
                    return t.apply(this, arguments)
                };
            case 3:
                return function (n, r, e) {
                    return t.apply(this, arguments)
                };
            case 4:
                return function (n, r, e, u) {
                    return t.apply(this, arguments)
                };
            case 5:
                return function (n, r, e, u, i) {
                    return t.apply(this, arguments)
                };
            case 6:
                return function (n, r, e, u, i, o) {
                    return t.apply(this, arguments)
                };
            case 7:
                return function (n, r, e, u, i, o, c) {
                    return t.apply(this, arguments)
                };
            case 8:
                return function (n, r, e, u, i, o, c, a) {
                    return t.apply(this, arguments)
                };
            case 9:
                return function (n, r, e, u, i, o, c, a, f) {
                    return t.apply(this, arguments)
                };
            case 10:
                return function (n, r, e, u, i, o, c, a, f, s) {
                    return t.apply(this, arguments)
                };
            default:
                throw new Error("First argument to _arity must be a non-negative integer no greater than ten")
        }
    }, r = function (n) {
        return new RegExp(n.source, (n.global ? "g" : "") + (n.ignoreCase ? "i" : "") + (n.multiline ? "m" : "") + (n.sticky ? "y" : "") + (n.unicode ? "u" : ""))
    }, e = function (n) {
        return function () {
            return !n.apply(this, arguments)
        }
    }, u = function (n, t) {
        n = n || [], t = t || [];
        var r, e = n.length, u = t.length, i = [];
        for (r = 0; e > r;) i[i.length] = n[r], r += 1;
        for (r = 0; u > r;) i[i.length] = t[r], r += 1;
        return i
    }, i = function (n, t, r) {
        for (var e = 0, u = r.length; u > e;) {
            if (n(t, r[e])) return !0;
            e += 1
        }
        return !1
    }, o = function (n) {
        return function t(r) {
            return 0 === arguments.length ? t : null != r && r["@@functional/placeholder"] === !0 ? t : n.apply(this, arguments)
        }
    }, c = function (n) {
        return function t(r, e) {
            var u = arguments.length;
            return 0 === u ? t : 1 === u && null != r && r["@@functional/placeholder"] === !0 ? t : 1 === u ? o(function (t) {
                return n(r, t)
            }) : 2 === u && null != r && r["@@functional/placeholder"] === !0 && null != e && e["@@functional/placeholder"] === !0 ? t : 2 === u && null != r && r["@@functional/placeholder"] === !0 ? o(function (t) {
                return n(t, e)
            }) : 2 === u && null != e && e["@@functional/placeholder"] === !0 ? o(function (t) {
                return n(r, t)
            }) : n(r, e)
        }
    }, a = function (n) {
        return function t(r, e, u) {
            var i = arguments.length;
            return 0 === i ? t : 1 === i && null != r && r["@@functional/placeholder"] === !0 ? t : 1 === i ? c(function (t, e) {
                return n(r, t, e)
            }) : 2 === i && null != r && r["@@functional/placeholder"] === !0 && null != e && e["@@functional/placeholder"] === !0 ? t : 2 === i && null != r && r["@@functional/placeholder"] === !0 ? c(function (t, r) {
                return n(t, e, r)
            }) : 2 === i && null != e && e["@@functional/placeholder"] === !0 ? c(function (t, e) {
                return n(r, t, e)
            }) : 2 === i ? o(function (t) {
                return n(r, e, t)
            }) : 3 === i && null != r && r["@@functional/placeholder"] === !0 && null != e && e["@@functional/placeholder"] === !0 && null != u && u["@@functional/placeholder"] === !0 ? t : 3 === i && null != r && r["@@functional/placeholder"] === !0 && null != e && e["@@functional/placeholder"] === !0 ? c(function (t, r) {
                return n(t, r, u)
            }) : 3 === i && null != r && r["@@functional/placeholder"] === !0 && null != u && u["@@functional/placeholder"] === !0 ? c(function (t, r) {
                return n(t, e, r)
            }) : 3 === i && null != e && e["@@functional/placeholder"] === !0 && null != u && u["@@functional/placeholder"] === !0 ? c(function (t, e) {
                return n(r, t, e)
            }) : 3 === i && null != r && r["@@functional/placeholder"] === !0 ? o(function (t) {
                return n(t, e, u)
            }) : 3 === i && null != e && e["@@functional/placeholder"] === !0 ? o(function (t) {
                return n(r, t, u)
            }) : 3 === i && null != u && u["@@functional/placeholder"] === !0 ? o(function (t) {
                return n(r, e, t)
            }) : n(r, e, u)
        }
    }, f = function cu(n, r, e) {
        return function () {
            for (var u = [], i = 0, o = n, c = 0; c < r.length || i < arguments.length;) {
                var a;
                c < r.length && (null == r[c] || r[c]["@@functional/placeholder"] !== !0 || i >= arguments.length) ? a = r[c] : (a = arguments[i], i += 1), u[c] = a, (null == a || a["@@functional/placeholder"] !== !0) && (o -= 1), c += 1
            }
            return 0 >= o ? e.apply(this, u) : t(o, cu(n, u, e))
        }
    }, s = function (n, t) {
        for (var r = 0, e = t.length, u = []; e > r;) n(t[r]) && (u[u.length] = t[r]), r += 1;
        return u
    }, l = function (n) {
        return {"@@transducer/value": n, "@@transducer/reduced": !0}
    }, p = function (n) {
        return function (t) {
            return s(function (n) {
                return "function" == typeof t[n]
            }, n(t))
        }
    }, h = function (n, t) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }, g = function (n) {
        return n
    }, d = Array.isArray || function (n) {
        return null != n && n.length >= 0 && "[object Array]" === Object.prototype.toString.call(n)
    }, y = Number.isInteger || function (n) {
        return n << 0 === n
    }, m = function (n) {
        return "[object Number]" === Object.prototype.toString.call(n)
    }, v = function (n) {
        return "[object String]" === Object.prototype.toString.call(n)
    }, w = function (n) {
        return "function" == typeof n["@@transducer/step"]
    }, x = function (n, t) {
        for (var r = 0, e = t.length, u = Array(e); e > r;) u[r] = n(t[r]), r += 1;
        return u
    }, b = function (n, t) {
        return function () {
            return t.call(this, n.apply(this, arguments))
        }
    }, j = function (n, t) {
        return function () {
            var r = this;
            return n.apply(r, arguments).then(function (n) {
                return t.call(r, n)
            })
        }
    }, O = function (n) {
        return '"' + n.replace(/"/g, '\\"') + '"'
    }, S = function (n) {
        return n && n["@@transducer/reduced"] ? n : {"@@transducer/value": n, "@@transducer/reduced": !0}
    }, E = function au(n, t, r) {
        switch (arguments.length) {
            case 1:
                return au(n, 0, n.length);
            case 2:
                return au(n, t, n.length);
            default:
                for (var e = [], u = 0, i = Math.max(0, Math.min(n.length, r) - t); i > u;) e[u] = n[t + u], u += 1;
                return e
        }
    }, A = function () {
        var n = function (n) {
            return (10 > n ? "0" : "") + n
        };
        return "function" == typeof Date.prototype.toISOString ? function (n) {
            return n.toISOString()
        } : function (t) {
            return t.getUTCFullYear() + "-" + n(t.getUTCMonth() + 1) + "-" + n(t.getUTCDate()) + "T" + n(t.getUTCHours()) + ":" + n(t.getUTCMinutes()) + ":" + n(t.getUTCSeconds()) + "." + (t.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z"
        }
    }(), I = function () {
        function n(n, t) {
            this.xf = t, this.pred = n, this.lastValue = void 0, this.seenFirstValue = !1
        }

        return n.prototype["@@transducer/init"] = function () {
            return this.xf["@@transducer/init"]()
        }, n.prototype["@@transducer/result"] = function (n) {
            return this.xf["@@transducer/result"](n)
        }, n.prototype["@@transducer/step"] = function (n, t) {
            var r = !1;
            return this.seenFirstValue ? this.pred(this.lastValue, t) && (r = !0) : this.seenFirstValue = !0, this.lastValue = t, r ? n : this.xf["@@transducer/step"](n, t)
        }, c(function (t, r) {
            return new n(t, r)
        })
    }(), k = {
        init: function () {
            return this.xf["@@transducer/init"]()
        }, result: function (n) {
            return this.xf["@@transducer/result"](n)
        }
    }, N = function () {
        function n(n, t) {
            this.xf = t, this.f = n
        }

        return n.prototype["@@transducer/init"] = k.init, n.prototype["@@transducer/result"] = k.result, n.prototype["@@transducer/step"] = function (n, t) {
            return this.f(t) ? this.xf["@@transducer/step"](n, t) : n
        }, c(function (t, r) {
            return new n(t, r)
        })
    }(), C = function () {
        function n(n, t) {
            this.xf = t, this.f = n, this.found = !1
        }

        return n.prototype["@@transducer/init"] = k.init, n.prototype["@@transducer/result"] = function (n) {
            return this.found || (n = this.xf["@@transducer/step"](n, void 0)), this.xf["@@transducer/result"](n)
        }, n.prototype["@@transducer/step"] = function (n, t) {
            return this.f(t) && (this.found = !0, n = S(this.xf["@@transducer/step"](n, t))), n
        }, c(function (t, r) {
            return new n(t, r)
        })
    }(), M = function () {
        function n(n, t) {
            this.xf = t, this.f = n, this.idx = -1, this.found = !1
        }

        return n.prototype["@@transducer/init"] = k.init, n.prototype["@@transducer/result"] = function (n) {
            return this.found || (n = this.xf["@@transducer/step"](n, -1)), this.xf["@@transducer/result"](n)
        }, n.prototype["@@transducer/step"] = function (n, t) {
            return this.idx += 1, this.f(t) && (this.found = !0, n = S(this.xf["@@transducer/step"](n, this.idx))), n
        }, c(function (t, r) {
            return new n(t, r)
        })
    }(), P = function () {
        function n(n, t) {
            this.xf = t, this.f = n
        }

        return n.prototype["@@transducer/init"] = k.init, n.prototype["@@transducer/result"] = function (n) {
            return this.xf["@@transducer/result"](this.xf["@@transducer/step"](n, this.last))
        }, n.prototype["@@transducer/step"] = function (n, t) {
            return this.f(t) && (this.last = t), n
        }, c(function (t, r) {
            return new n(t, r)
        })
    }(), T = function () {
        function n(n, t) {
            this.xf = t, this.f = n, this.idx = -1, this.lastIdx = -1
        }

        return n.prototype["@@transducer/init"] = k.init, n.prototype["@@transducer/result"] = function (n) {
            return this.xf["@@transducer/result"](this.xf["@@transducer/step"](n, this.lastIdx))
        }, n.prototype["@@transducer/step"] = function (n, t) {
            return this.idx += 1, this.f(t) && (this.lastIdx = this.idx), n
        }, c(function (t, r) {
            return new n(t, r)
        })
    }(), q = function () {
        function n(n, t) {
            this.xf = t, this.f = n
        }

        return n.prototype["@@transducer/init"] = k.init, n.prototype["@@transducer/result"] = k.result, n.prototype["@@transducer/step"] = function (n, t) {
            return this.xf["@@transducer/step"](n, this.f(t))
        }, c(function (t, r) {
            return new n(t, r)
        })
    }(), W = function () {
        function n(n, t) {
            this.xf = t, this.n = n
        }

        return n.prototype["@@transducer/init"] = k.init, n.prototype["@@transducer/result"] = k.result, n.prototype["@@transducer/step"] = function (n, t) {
            return 0 === this.n ? S(n) : (this.n -= 1, this.xf["@@transducer/step"](n, t))
        }, c(function (t, r) {
            return new n(t, r)
        })
    }(), R = function () {
        function n(n, t) {
            this.xf = t, this.f = n
        }

        return n.prototype["@@transducer/init"] = k.init, n.prototype["@@transducer/result"] = k.result, n.prototype["@@transducer/step"] = function (n, t) {
            return this.f(t) ? this.xf["@@transducer/step"](n, t) : S(n)
        }, c(function (t, r) {
            return new n(t, r)
        })
    }(), B = function () {
        function n(n) {
            this.f = n
        }

        return n.prototype["@@transducer/init"] = function () {
            throw new Error("init not implemented on XWrap")
        }, n.prototype["@@transducer/result"] = function (n) {
            return n
        }, n.prototype["@@transducer/step"] = function (n, t) {
            return this.f(n, t)
        }, function (t) {
            return new n(t)
        }
    }(), L = c(function (n, t) {
        return n + t
    }), U = a(function (n, t, r) {
        if (t >= r.length || t < -r.length) return r;
        var e = 0 > t ? r.length : 0, i = e + t, o = u(r);
        return o[i] = n(r[i]), o
    }), F = o(function (n) {
        return function () {
            return n
        }
    }), D = c(function (n, t) {
        for (var r = 0, e = t.length - (n - 1), u = new Array(e >= 0 ? e : 0); e > r;) u[r] = E(t, r, r + n), r += 1;
        return u
    }), V = c(function (n, t) {
        return u(t, [n])
    }), z = c(function (n, t) {
        return n.apply(this, t)
    }), _ = a(function (n, t, r) {
        var e = {};
        for (var u in r) e[u] = r[u];
        return e[n] = t, e
    }), K = a(function fu(n, t, r) {
        switch (n.length) {
            case 0:
                return r;
            case 1:
                return _(n[0], t, r);
            default:
                return _(n[0], fu(E(n, 1), t, Object(r[n[0]])), r)
        }
    }), $ = c(function (n, r) {
        return t(n.length, function () {
            return n.apply(r, arguments)
        })
    }), H = c(function (n, t) {
        return function () {
            return n.apply(this, arguments) && t.apply(this, arguments)
        }
    }), X = o(function (n) {
        return function (t, r) {
            return n(t, r) ? -1 : n(r, t) ? 1 : 0
        }
    }), Y = o(e), Z = o(function (n) {
        return function () {
            for (var t = 0; t < n.length;) {
                if (n[t][0].apply(this, arguments)) return n[t][1].apply(this, arguments);
                t += 1
            }
        }
    }), G = a(i), J = c(function (n, t) {
        for (var r = {}, e = t.length, u = 0; e > u;) {
            var i = n(t[u]);
            r[i] = (h(i, r) ? r[i] : 0) + 1, u += 1
        }
        return r
    }), Q = c(function (n, t) {
        var r = {};
        return r[n] = t, r
    }), nn = c(function (n, r) {
        return 1 === n ? o(r) : t(n, f(n, [], r))
    }), tn = L(-1), rn = c(function (n, t) {
        return null == t ? n : t
    }), en = a(function (n, t, r) {
        for (var e = [], u = 0, i = t.length, o = G(n); i > u;) o(t[u], r) || o(t[u], e) || (e[e.length] = t[u]), u += 1;
        return e
    }), un = c(function (n, t) {
        var r = {};
        for (var e in t) e !== n && (r[e] = t[e]);
        return r
    }), on = c(function su(n, t) {
        switch (n.length) {
            case 0:
                return t;
            case 1:
                return un(n[0], t);
            default:
                var r = n[0], e = E(n, 1);
                return null == t[r] ? t : _(r, su(e, t[r]), t)
        }
    }), cn = c(function (n, t) {
        return n / t
    }), an = c(function (n, t) {
        for (var r = t.length - 1; r >= 0 && n(t[r]);) r -= 1;
        return E(t, 0, r + 1)
    }), fn = c(function (n, t) {
        return function () {
            return n.apply(this, arguments) || t.apply(this, arguments)
        }
    }), sn = o(function (n) {
        if (null != n && "function" == typeof n.empty) return n.empty();
        if (null != n && null != typeof n.constructor && "function" == typeof n.constructor.empty) return n.constructor.empty();
        switch (Object.prototype.toString.call(n)) {
            case"[object Array]":
                return [];
            case"[object Object]":
                return {};
            case"[object String]":
                return ""
        }
    }), ln = c(function lu(n, t) {
        var r, e, u, i = {};
        for (e in t) r = n[e], u = typeof r, i[e] = "function" === u ? r(t[e]) : "object" === u ? lu(n[e], t[e]) : t[e];
        return i
    }), pn = o(function (n) {
        for (var t = 0, r = n.length, e = {}; r > t;) d(n[t]) && n[t].length && (e[n[t][0]] = n[t][1]), t += 1;
        return e
    }), hn = c(function (n, t) {
        return n > t
    }), gn = c(function (n, t) {
        return n >= t
    }), dn = c(h), yn = c(function (n, t) {
        return n in t
    }), mn = c(function (n, t) {
        return n === t ? 0 !== n || 1 / n === 1 / t : n !== n && t !== t
    }), vn = o(g), wn = a(function (n, t, r) {
        return nn(Math.max(n.length, t.length, r.length), function () {
            return n.apply(this, arguments) ? t.apply(this, arguments) : r.apply(this, arguments)
        })
    }), xn = L(1), bn = a(function (n, t, r) {
        n = n < r.length && n >= 0 ? n : r.length;
        var e = E(r);
        return e.splice(n, 0, t), e
    }), jn = a(function (n, t, r) {
        return n = n < r.length && n >= 0 ? n : r.length, u(u(E(r, 0, n), t), E(r, n))
    }), On = c(function (n, t) {
        return null != t && t.constructor === n || t instanceof n
    }), Sn = o(function (n) {
        return d(n) ? !0 : n ? "object" != typeof n ? !1 : n instanceof String ? !1 : 1 === n.nodeType ? !!n.length : 0 === n.length ? !0 : n.length > 0 ? n.hasOwnProperty(0) && n.hasOwnProperty(n.length - 1) : !1 : !1
    }), En = o(function (n) {
        return 0 === Object(n).length
    }), An = o(function (n) {
        return null == n
    }), In = function () {
        var n = !{toString: null}.propertyIsEnumerable("toString"),
            t = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
            r = function (n, t) {
                for (var r = 0; r < n.length;) {
                    if (n[r] === t) return !0;
                    r += 1
                }
                return !1
            };
        return o("function" == typeof Object.keys ? function (n) {
            return Object(n) !== n ? [] : Object.keys(n)
        } : function (e) {
            if (Object(e) !== e) return [];
            var u, i, o = [];
            for (u in e) h(u, e) && (o[o.length] = u);
            if (n) for (i = t.length - 1; i >= 0;) u = t[i], h(u, e) && !r(o, u) && (o[o.length] = u), i -= 1;
            return o
        })
    }(), kn = o(function (n) {
        var t, r = [];
        for (t in n) r[r.length] = t;
        return r
    }), Nn = o(function (n) {
        return null != n && On(Number, n.length) ? n.length : NaN
    }), Cn = c(function (n, t) {
        return t > n
    }), Mn = c(function (n, t) {
        return t >= n
    }), Pn = a(function (n, t, r) {
        for (var e = 0, u = r.length, i = [], o = [t]; u > e;) o = n(o[0], r[e]), i[e] = o[1], e += 1;
        return [o[0], i]
    }), Tn = a(function (n, t, r) {
        for (var e = r.length - 1, u = [], i = [t]; e >= 0;) i = n(i[0], r[e]), u[e] = i[1], e -= 1;
        return [i[0], u]
    }), qn = c(function (n, t) {
        return t.match(n) || []
    }), Wn = c(function (n, t) {
        return y(n) ? !y(t) || 1 > t ? NaN : (n % t + t) % t : NaN
    }), Rn = c(function (n, t) {
        return t > n ? t : n
    }), Bn = a(function (n, t, r) {
        return n(r) > n(t) ? r : t
    }), Ln = c(function (n, t) {
        for (var r = {}, e = In(n), u = 0; u < e.length;) r[e[u]] = n[e[u]], u += 1;
        for (e = In(t), u = 0; u < e.length;) r[e[u]] = t[e[u]], u += 1;
        return r
    }), Un = c(function (n, t) {
        return n > t ? t : n
    }), Fn = a(function (n, t, r) {
        return n(r) < n(t) ? r : t
    }), Dn = c(function (n, t) {
        return n % t
    }), Vn = c(function (n, t) {
        return n * t
    }), zn = c(function (n, t) {
        switch (n) {
            case 0:
                return function () {
                    return t.call(this)
                };
            case 1:
                return function (n) {
                    return t.call(this, n)
                };
            case 2:
                return function (n, r) {
                    return t.call(this, n, r)
                };
            case 3:
                return function (n, r, e) {
                    return t.call(this, n, r, e)
                };
            case 4:
                return function (n, r, e, u) {
                    return t.call(this, n, r, e, u)
                };
            case 5:
                return function (n, r, e, u, i) {
                    return t.call(this, n, r, e, u, i)
                };
            case 6:
                return function (n, r, e, u, i, o) {
                    return t.call(this, n, r, e, u, i, o)
                };
            case 7:
                return function (n, r, e, u, i, o, c) {
                    return t.call(this, n, r, e, u, i, o, c)
                };
            case 8:
                return function (n, r, e, u, i, o, c, a) {
                    return t.call(this, n, r, e, u, i, o, c, a)
                };
            case 9:
                return function (n, r, e, u, i, o, c, a, f) {
                    return t.call(this, n, r, e, u, i, o, c, a, f)
                };
            case 10:
                return function (n, r, e, u, i, o, c, a, f, s) {
                    return t.call(this, n, r, e, u, i, o, c, a, f, s)
                };
            default:
                throw new Error("First argument to nAry must be a non-negative integer no greater than ten")
        }
    }), _n = o(function (n) {
        return -n
    }), Kn = o(function (n) {
        return !n
    }), $n = c(function (n, t) {
        var r = 0 > n ? t.length + n : n;
        return v(t) ? t.charAt(r) : t[r]
    }), Hn = o(function (n) {
        return function () {
            return $n(n, arguments)
        }
    }), Xn = c(function (n, t) {
        return t.charAt(0 > n ? t.length + n : n)
    }), Yn = c(function (n, t) {
        return t.charCodeAt(0 > n ? t.length + n : n)
    }), Zn = o(function (n) {
        return [n]
    }), Gn = o(function (n) {
        var t, r = !1;
        return function () {
            return r ? t : (r = !0, t = n.apply(this, arguments))
        }
    }), Jn = function () {
        var n = function (t) {
            return {
                value: t, map: function (r) {
                    return n(r(t))
                }
            }
        };
        return a(function (t, r, e) {
            return t(function (t) {
                return n(r(t))
            })(e).value
        })
    }(), Qn = c(function (n, t) {
        if (null != t) {
            for (var r = t, e = 0, u = n.length; u > e && null != r; e += 1) r = r[n[e]];
            return r
        }
    }), nt = c(function (n, t) {
        for (var r = {}, e = 0; e < n.length;) n[e] in t && (r[n[e]] = t[n[e]]), e += 1;
        return r
    }), tt = c(function (n, t) {
        for (var r = {}, e = 0, u = n.length; u > e;) {
            var i = n[e];
            r[i] = t[i], e += 1
        }
        return r
    }), rt = c(function (n, t) {
        var r = {};
        for (var e in t) n(t[e], e, t) && (r[e] = t[e]);
        return r
    }), et = c(function (n, t) {
        return u([n], t)
    }), ut = c(function (n, t) {
        return t[n]
    }), it = a(function (n, t, r) {
        return null != r && h(t, r) ? r[t] : n
    }), ot = a(function (n, t, r) {
        return n(r[t])
    }), ct = c(function (n, t) {
        for (var r = n.length, e = [], u = 0; r > u;) e[u] = t[n[u]], u += 1;
        return e
    }), at = c(function (n, t) {
        if (!m(n) || !m(t)) throw new TypeError("Both arguments to range must be numbers");
        for (var r = [], e = n; t > e;) r.push(e), e += 1;
        return r
    }), ft = a(function (n, t, r) {
        for (var e = r.length - 1; e >= 0;) t = n(t, r[e]), e -= 1;
        return t
    }), st = o(S), lt = a(function (n, t, r) {
        return u(E(r, 0, Math.min(n, r.length)), E(r, Math.min(r.length, n + t)))
    }), pt = a(function (n, t, r) {
        return r.replace(n, t)
    }), ht = o(function (n) {
        return E(n).reverse()
    }), gt = a(function (n, t, r) {
        for (var e = 0, u = r.length, i = [t]; u > e;) t = n(t, r[e]), i[e + 1] = t, e += 1;
        return i
    }), dt = a(function (n, t, r) {
        return Jn(n, F(t), r)
    }), yt = c(function (n, t) {
        return E(t).sort(n)
    }), mt = c(function (n, t) {
        return E(t).sort(function (t, r) {
            var e = n(t), u = n(r);
            return u > e ? -1 : e > u ? 1 : 0
        })
    }), vt = c(function (n, t) {
        return n - t
    }), wt = c(function (n, t) {
        for (var r = t.length - 1; r >= 0 && n(t[r]);) r -= 1;
        return E(t, r + 1, 1 / 0)
    }), xt = c(function (n, t) {
        return n(t), t
    }), bt = c(function (n, t) {
        return r(n).test(t)
    }), jt = c(function (n, t) {
        for (var r = Number(t), e = new Array(r), u = 0; r > u;) e[u] = n(u), u += 1;
        return e
    }), Ot = o(function (n) {
        var t = [];
        for (var r in n) h(r, n) && (t[t.length] = [r, n[r]]);
        return t
    }), St = o(function (n) {
        var t = [];
        for (var r in n) t[t.length] = [r, n[r]];
        return t
    }), Et = function () {
        var n = "	\n\f\r  áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff", t = "â€‹",
            r = "function" == typeof String.prototype.trim;
        return o(r && !n.trim() && t.trim() ? function (n) {
            return n.trim()
        } : function (t) {
            var r = new RegExp("^[" + n + "][" + n + "]*"), e = new RegExp("[" + n + "][" + n + "]*$");
            return t.replace(r, "").replace(e, "")
        })
    }(), At = o(function (n) {
        return null === n ? "Null" : void 0 === n ? "Undefined" : Object.prototype.toString.call(n).slice(8, -1)
    }), It = o(function (n) {
        return function () {
            return n(E(arguments))
        }
    }), kt = o(function (n) {
        return zn(1, n)
    }), Nt = c(function (n, t) {
        return nn(n, function () {
            for (var r, e = 1, u = t, i = 0; n >= e && "function" == typeof u;) r = e === n ? arguments.length : i + u.length, u = u.apply(this, E(arguments, i, r)), e += 1, i = r;
            return u
        })
    }), Ct = c(function (n, t) {
        for (var r = n(t), e = []; r && r.length;) e[e.length] = r[0], r = n(r[1]);
        return e
    }), Mt = c(function (n, t) {
        for (var r, e = 0, u = t.length, o = []; u > e;) r = t[e], i(n, r, o) || (o[o.length] = r), e += 1;
        return o
    }), Pt = a(function (n, t, r) {
        return U(F(t), n, r)
    }), Tt = o(function (n) {
        for (var t = In(n), r = t.length, e = [], u = 0; r > u;) e[u] = n[t[u]], u += 1;
        return e
    }), qt = o(function (n) {
        var t, r = [];
        for (t in n) r[r.length] = n[t];
        return r
    }), Wt = function () {
        var n = function (n) {
            return {
                value: n, map: function () {
                    return this
                }
            }
        };
        return c(function (t, r) {
            return t(n)(r).value
        })
    }(), Rt = c(function (n, t) {
        for (var r in n) if (h(r, n) && !n[r](t[r])) return !1;
        return !0
    }), Bt = c(function (n, t) {
        return nn(n.length, function () {
            return t.apply(this, u([n], arguments))
        })
    }), Lt = c(function (n, t) {
        for (var r, e = 0, u = n.length, i = t.length, o = []; u > e;) {
            for (r = 0; i > r;) o[o.length] = [n[e], t[r]], r += 1;
            e += 1
        }
        return o
    }), Ut = c(function (n, t) {
        for (var r = [], e = 0, u = Math.min(n.length, t.length); u > e;) r[e] = [n[e], t[e]], e += 1;
        return r
    }), Ft = c(function (n, t) {
        for (var r = 0, e = n.length, u = {}; e > r;) u[n[r]] = t[r], r += 1;
        return u
    }), Dt = a(function (n, t, r) {
        for (var e = [], u = 0, i = Math.min(t.length, r.length); i > u;) e[u] = n(t[u], r[u]), u += 1;
        return e
    }), Vt = F(!1), zt = F(!0), _t = function (n, t) {
        return function () {
            var r = arguments.length;
            if (0 === r) return t();
            var e = arguments[r - 1];
            return d(e) || "function" != typeof e[n] ? t.apply(this, arguments) : e[n].apply(e, E(arguments, 0, r - 1))
        }
    }, Kt = function pu(n, t, e) {
        var u = function (r) {
            for (var u = t.length, i = 0; u > i;) {
                if (n === t[i]) return e[i];
                i += 1
            }
            t[i + 1] = n, e[i + 1] = r;
            for (var o in n) r[o] = pu(n[o], t, e);
            return r
        };
        switch (At(n)) {
            case"Object":
                return u({});
            case"Array":
                return u([]);
            case"Date":
                return new Date(n);
            case"RegExp":
                return r(n);
            default:
                return n
        }
    }, $t = function (n) {
        return function (r) {
            var e = E(arguments, 1);
            return t(Math.max(0, r.length - e.length), function () {
                return r.apply(this, n(e, arguments))
            })
        }
    }, Ht = function (n, t, r) {
        return function () {
            var e = arguments.length;
            if (0 === e) return r();
            var u = arguments[e - 1];
            if (!d(u)) {
                var i = E(arguments, 0, e - 1);
                if ("function" == typeof u[n]) return u[n].apply(u, i);
                if (w(u)) {
                    var o = t.apply(null, i);
                    return o(u)
                }
            }
            return r.apply(this, arguments)
        }
    }, Xt = function hu(n, t, r, e) {
        var u = At(n);
        if (u !== At(t)) return !1;
        if ("Boolean" === u || "Number" === u || "String" === u) return "object" == typeof n ? "object" == typeof t && mn(n.valueOf(), t.valueOf()) : mn(n, t);
        if (mn(n, t)) return !0;
        if ("RegExp" === u) return n.source === t.source && n.global === t.global && n.ignoreCase === t.ignoreCase && n.multiline === t.multiline && n.sticky === t.sticky && n.unicode === t.unicode;
        if (Object(n) === n) {
            if ("Date" === u && n.getTime() !== t.getTime()) return !1;
            var i = In(n);
            if (i.length !== In(t).length) return !1;
            for (var o = r.length - 1; o >= 0;) {
                if (r[o] === n) return e[o] === t;
                o -= 1
            }
            for (r[r.length] = n, e[e.length] = t, o = i.length - 1; o >= 0;) {
                var c = i[o];
                if (!h(c, t) || !hu(t[c], n[c], r, e)) return !1;
                o -= 1
            }
            return r.pop(), e.pop(), !0
        }
        return !1
    }, Yt = function (n, t) {
        return null != t && !d(t) && "function" == typeof t[n]
    }, Zt = function (n) {
        return function t(r) {
            for (var e, u, i, o = [], c = 0, a = r.length; a > c;) {
                if (Sn(r[c])) for (e = n ? t(r[c]) : r[c], u = 0, i = e.length; i > u;) o[o.length] = e[u], u += 1; else o[o.length] = r[c];
                c += 1
            }
            return o
        }
    }, Gt = function () {
        function n(n, t, r) {
            for (var e = 0, u = r.length; u > e;) {
                if (t = n["@@transducer/step"](t, r[e]), t && t["@@transducer/reduced"]) {
                    t = t["@@transducer/value"];
                    break
                }
                e += 1
            }
            return n["@@transducer/result"](t)
        }

        function t(n, t, r) {
            for (var e = r.next(); !e.done;) {
                if (t = n["@@transducer/step"](t, e.value), t && t["@@transducer/reduced"]) {
                    t = t["@@transducer/value"];
                    break
                }
                e = r.next()
            }
            return n["@@transducer/result"](t)
        }

        function r(n, t, r) {
            return n["@@transducer/result"](r.reduce($(n["@@transducer/step"], n), t))
        }

        var e = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator";
        return function (u, i, o) {
            if ("function" == typeof u && (u = B(u)), Sn(o)) return n(u, i, o);
            if ("function" == typeof o.reduce) return r(u, i, o);
            if (null != o[e]) return t(u, i, o[e]());
            if ("function" == typeof o.next) return t(u, i, o);
            throw new TypeError("reduce: list must be array or iterable")
        }
    }(), Jt = function () {
        var n = {
            "@@transducer/init": Array, "@@transducer/step": function (n, t) {
                return u(n, [t])
            }, "@@transducer/result": g
        }, t = {
            "@@transducer/init": String, "@@transducer/step": function (n, t) {
                return n + t
            }, "@@transducer/result": g
        }, r = {
            "@@transducer/init": Object, "@@transducer/step": function (n, t) {
                return Ln(n, Sn(t) ? Q(t[0], t[1]) : t)
            }, "@@transducer/result": g
        };
        return function (e) {
            if (w(e)) return e;
            if (Sn(e)) return n;
            if ("string" == typeof e) return t;
            if ("object" == typeof e) return r;
            throw new Error("Cannot create transformer for " + e)
        }
    }(), Qt = function () {
        function n(n, t) {
            this.xf = t, this.f = n, this.all = !0
        }

        return n.prototype["@@transducer/init"] = k.init, n.prototype["@@transducer/result"] = function (n) {
            return this.all && (n = this.xf["@@transducer/step"](n, !0)), this.xf["@@transducer/result"](n)
        }, n.prototype["@@transducer/step"] = function (n, t) {
            return this.f(t) || (this.all = !1, n = S(this.xf["@@transducer/step"](n, !1))), n
        }, c(function (t, r) {
            return new n(t, r)
        })
    }(), nr = function () {
        function n(n, t) {
            this.xf = t, this.f = n, this.any = !1
        }

        return n.prototype["@@transducer/init"] = k.init, n.prototype["@@transducer/result"] = function (n) {
            return this.any || (n = this.xf["@@transducer/step"](n, !1)), this.xf["@@transducer/result"](n)
        }, n.prototype["@@transducer/step"] = function (n, t) {
            return this.f(t) && (this.any = !0, n = S(this.xf["@@transducer/step"](n, !0))), n
        }, c(function (t, r) {
            return new n(t, r)
        })
    }(), tr = function () {
        function n(n, t) {
            this.xf = t, this.n = n
        }

        return n.prototype["@@transducer/init"] = k.init, n.prototype["@@transducer/result"] = k.result, n.prototype["@@transducer/step"] = function (n, t) {
            return this.n > 0 ? (this.n -= 1, n) : this.xf["@@transducer/step"](n, t)
        }, c(function (t, r) {
            return new n(t, r)
        })
    }(), rr = function () {
        function n(n, t) {
            this.xf = t, this.f = n
        }

        return n.prototype["@@transducer/init"] = k.init, n.prototype["@@transducer/result"] = k.result, n.prototype["@@transducer/step"] = function (n, t) {
            if (this.f) {
                if (this.f(t)) return n;
                this.f = null
            }
            return this.xf["@@transducer/step"](n, t)
        }, c(function (t, r) {
            return new n(t, r)
        })
    }(), er = function () {
        function n(n, t) {
            this.xf = t, this.f = n, this.inputs = {}
        }

        return n.prototype["@@transducer/init"] = k.init, n.prototype["@@transducer/result"] = function (n) {
            var t;
            for (t in this.inputs) if (h(t, this.inputs) && (n = this.xf["@@transducer/step"](n, this.inputs[t]), n["@@transducer/reduced"])) {
                n = n["@@transducer/value"];
                break
            }
            return this.xf["@@transducer/result"](n)
        }, n.prototype["@@transducer/step"] = function (n, t) {
            var r = this.f(t);
            return this.inputs[r] = this.inputs[r] || [r, []], this.inputs[r][1] = V(t, this.inputs[r][1]), n
        }, c(function (t, r) {
            return new n(t, r)
        })
    }(), ur = o(function (n) {
        return nn(n.length, function () {
            var t = 0, r = arguments[0], e = arguments[arguments.length - 1], i = E(arguments);
            return i[0] = function () {
                var n = r.apply(this, u(arguments, [t, e]));
                return t += 1, n
            }, n.apply(this, i)
        })
    }), ir = c(Ht("all", Qt, function (n, t) {
        for (var r = 0; r < t.length;) {
            if (!n(t[r])) return !1;
            r += 1
        }
        return !0
    })), or = c(function (n, t) {
        return Yt("and", n) ? n.and(t) : n && t
    }), cr = c(Ht("any", nr, function (n, t) {
        for (var r = 0; r < t.length;) {
            if (n(t[r])) return !0;
            r += 1
        }
        return !1
    })), ar = o(function (n) {
        return zn(2, n)
    }), fr = o(function (n) {
        return Kt(n, [], [])
    }), sr = c(function (n, t) {
        if (d(t)) return u(n, t);
        if (Yt("concat", n)) return n.concat(t);
        throw new TypeError("can't concat " + typeof n)
    }), lr = o(function (n) {
        return nn(n.length, n)
    }), pr = c(Ht("dropWhile", rr, function (n, t) {
        for (var r = 0, e = t.length; e > r && n(t[r]);) r += 1;
        return E(t, r)
    })), hr = c(function (n, t) {
        return Yt("equals", n) ? n.equals(t) : Yt("equals", t) ? t.equals(n) : Xt(n, t, [], [])
    }), gr = c(Ht("filter", N, s)), dr = c(Ht("find", C, function (n, t) {
        for (var r = 0, e = t.length; e > r;) {
            if (n(t[r])) return t[r];
            r += 1
        }
    })), yr = c(Ht("findIndex", M, function (n, t) {
        for (var r = 0, e = t.length; e > r;) {
            if (n(t[r])) return r;
            r += 1
        }
        return -1
    })), mr = c(Ht("findLast", P, function (n, t) {
        for (var r = t.length - 1; r >= 0;) {
            if (n(t[r])) return t[r];
            r -= 1
        }
    })), vr = c(Ht("findLastIndex", T, function (n, t) {
        for (var r = t.length - 1; r >= 0;) {
            if (n(t[r])) return r;
            r -= 1
        }
        return -1
    })), wr = o(Zt(!0)), xr = o(function (n) {
        return lr(function (t, r) {
            var e = E(arguments);
            return e[0] = r, e[1] = t, n.apply(this, e)
        })
    }), br = c(_t("forEach", function (n, t) {
        for (var r = t.length, e = 0; r > e;) n(t[e]), e += 1;
        return t
    })), jr = o(p(In)), Or = o(p(kn)), Sr = c(Ht("groupBy", er, function (n, t) {
        return Gt(function (t, r) {
            var e = n(r);
            return t[e] = V(r, t[e] || (t[e] = [])), t
        }, {}, t)
    })), Er = $n(0), Ar = a(function (n, t, r) {
        for (var e = [], u = 0; u < t.length;) i(n, t[u], r) && (e[e.length] = t[u]), u += 1;
        return Mt(n, e)
    }), Ir = c(_t("intersperse", function (n, t) {
        for (var r = [], e = 0, u = t.length; u > e;) e === u - 1 ? r.push(t[e]) : r.push(t[e], n), e += 1;
        return r
    })), kr = a(function (n, t, r) {
        return w(n) ? Gt(t(n), n["@@transducer/init"](), r) : Gt(t(Jt(n)), n, r)
    }), Nr = o(function (n) {
        for (var t = In(n), r = t.length, e = 0, u = {}; r > e;) {
            var i = t[e], o = n[i], c = h(o, u) ? u[o] : u[o] = [];
            c[c.length] = i, e += 1
        }
        return u
    }), Cr = o(function (n) {
        for (var t = In(n), r = t.length, e = 0, u = {}; r > e;) {
            var i = t[e];
            u[n[i]] = i, e += 1
        }
        return u
    }), Mr = $n(-1), Pr = c(function (n, t) {
        if (Yt("lastIndexOf", t)) return t.lastIndexOf(n);
        for (var r = t.length - 1; r >= 0;) {
            if (hr(t[r], n)) return r;
            r -= 1
        }
        return -1
    }), Tr = c(Ht("map", q, x)), qr = c(function (n, t) {
        return Gt(function (r, e) {
            return r[e] = n(t[e]), r
        }, {}, In(t))
    }), Wr = c(function (n, t) {
        return Gt(function (r, e) {
            return r[e] = n(t[e], e, t), r
        }, {}, In(t))
    }), Rr = c(e(Ht("any", nr, cr))), Br = c(function (n, t) {
        return Yt("or", n) ? n.or(t) : n || t
    }), Lr = lr($t(u)), Ur = lr($t(xr(u))), Fr = c(function (n, t) {
        return Gt(function (t, r) {
            var e = t[n(r) ? 0 : 1];
            return e[e.length] = r, t
        }, [[], []], t)
    }), Dr = a(function (n, t, r) {
        return hr(Qn(n, r), t)
    }), Vr = c(function (n, t) {
        return Tr(ut(n), t)
    }), zr = a(function (n, t, r) {
        return ot(hr(t), n, r)
    }), _r = a(function (n, t, r) {
        return ot(On(n), t, r)
    }), Kr = a(Gt), $r = c(function (n, t) {
        return gr(e(n), t)
    }), Hr = c(function (n, t) {
        return jt(F(n), t)
    }), Xr = a(_t("slice", function (n, t, r) {
        return Array.prototype.slice.call(r, n, t)
    })), Yr = c(function (n, t) {
        if (0 >= n) throw new Error("First argument to splitEvery must be a positive integer");
        for (var r = [], e = 0; e < t.length;) r.push(Xr(e, e += n, t));
        return r
    }), Zr = Kr(L, 0), Gr = _t("tail", Xr(1, 1 / 0)), Jr = c(Ht("take", W, function (n, t) {
        return Xr(0, 0 > n ? 1 / 0 : n, t)
    })), Qr = c(Ht("takeWhile", R, function (n, t) {
        for (var r = 0, e = t.length; e > r && n(t[r]);) r += 1;
        return E(t, 0, r)
    })), ne = nn(4, function (n, t, r, e) {
        return Gt(n("function" == typeof t ? B(t) : t), r, e)
    }), te = a(function (n, t, r) {
        return Mt(n, u(t, r))
    }), re = Mt(hr), ee = o(Zt(!1)), ue = lr(function (n) {
        var r = E(arguments, 1), e = r.length;
        return lr(t(e, function () {
            for (var t = [], u = 0; e > u;) t[u] = r[u](arguments[u]), u += 1;
            return n.apply(this, t.concat(E(arguments, e)))
        }))
    }), ie = c(function (n, t) {
        return Rt(qr(hr, n), t)
    }), oe = function () {
        var n = function (n) {
            return {
                "@@transducer/init": k.init, "@@transducer/result": function (t) {
                    return n["@@transducer/result"](t)
                }, "@@transducer/step": function (t, r) {
                    var e = n["@@transducer/step"](t, r);
                    return e["@@transducer/reduced"] ? l(e) : e
                }
            }
        };
        return function (t) {
            var r = n(t);
            return {
                "@@transducer/init": k.init, "@@transducer/result": function (n) {
                    return r["@@transducer/result"](n)
                }, "@@transducer/step": function (n, t) {
                    return Sn(t) ? Gt(r, n, t) : Gt(r, n, [t])
                }
            }
        }
    }(), ce = function (n, t, r) {
        for (var e = r; e < n.length;) {
            if (hr(n[e], t)) return e;
            e += 1
        }
        return -1
    }, ae = function (n) {
        return function (r) {
            var e = function () {
                var t = arguments;
                return n(function (n) {
                    return n.apply(null, t)
                }, r)
            };
            return arguments.length > 1 ? e.apply(null, E(arguments, 1)) : t(Math.max.apply(Math, Vr("length", r)), e)
        }
    }, fe = c(function (n, t) {
        return Tr(n, oe(t))
    }), se = o(ae(ir)), le = o(ae(cr)), pe = c(function (n, t) {
        return Yt("ap", n) ? n.ap(t) : Gt(function (n, r) {
            return u(n, Tr(r, t))
        }, [], n)
    }), he = lr(function (n) {
        return n.apply(this, E(arguments, 1))
    }), ge = c(Ht("chain", fe, function (n, t) {
        return ee(Tr(n, t))
    })), de = a(function (n, t, r) {
        function e(t, r) {
            return pe(Tr(V, n(r)), t)
        }

        return Gt(e, t([]), r)
    }), ye = c(function (n, t) {
        if (n > 10) throw new Error("Constructor with greater than ten arguments");
        return 0 === n ? function () {
            return new t
        } : lr(zn(n, function (n, r, e, u, i, o, c, a, f, s) {
            switch (arguments.length) {
                case 1:
                    return new t(n);
                case 2:
                    return new t(n, r);
                case 3:
                    return new t(n, r, e);
                case 4:
                    return new t(n, r, e, u);
                case 5:
                    return new t(n, r, e, u, i);
                case 6:
                    return new t(n, r, e, u, i, o);
                case 7:
                    return new t(n, r, e, u, i, o, c);
                case 8:
                    return new t(n, r, e, u, i, o, c, a);
                case 9:
                    return new t(n, r, e, u, i, o, c, a, f);
                case 10:
                    return new t(n, r, e, u, i, o, c, a, f, s)
            }
        }))
    }), me = nn(3, function (n) {
        var t = E(arguments, 1);
        return nn(Math.max.apply(Math, Vr("length", t)), function () {
            var r = arguments, e = this;
            return n.apply(e, x(function (n) {
                return n.apply(e, r)
            }, t))
        })
    }), ve = c(Ht("drop", tr, function (n, t) {
        return Xr(Math.max(0, n), 1 / 0, t)
    })), we = c(function (n, t) {
        return Jr(n < t.length ? t.length - n : 0, t)
    }), xe = c(Ht("dropRepeatsWith", I, function (n, t) {
        var r = [], e = 1, u = t.length;
        if (0 !== u) for (r[0] = t[0]; u > e;) n(Mr(r), t[e]) || (r[r.length] = t[e]), e += 1;
        return r
    })), be = a(function (n, t, r) {
        return hr(t[n], r[n])
    }), je = c(function (n, t) {
        return Yt("indexOf", t) ? t.indexOf(n) : ce(t, n, 0)
    }), Oe = Xr(0, -1), Se = o(function (n) {
        for (var t = n.length, r = 0; t > r;) {
            if (ce(n, n[r], r + 1) >= 0) return !1;
            r += 1
        }
        return !0
    }), Ee = c(function (n, t) {
        return function (r) {
            return function (e) {
                return Tr(function (n) {
                    return t(n, e)
                }, r(n(e)))
            }
        }
    }), Ae = o(function (n) {
        return Ee($n(n), Pt(n))
    }), Ie = o(function (n) {
        return Ee(ut(n), _(n))
    }), ke = c(function (n, t) {
        var r = nn(n, t);
        return nn(n, function () {
            return Gt(pe, Tr(r, arguments[0]), E(arguments, 1))
        })
    }), Ne = o(function (n) {
        return Zr(n) / n.length
    }), Ce = o(function (n) {
        var t = n.length;
        if (0 === t) return NaN;
        var r = 2 - t % 2, e = (t - r) / 2;
        return Ne(E(n).sort(function (n, t) {
            return t > n ? -1 : n > t ? 1 : 0
        }).slice(e, e + r))
    }), Me = o(function (n) {
        return Kr(Ln, {}, n)
    }), Pe = function () {
        if (0 === arguments.length) throw new Error("pipe requires at least one argument");
        return nn(arguments[0].length, Kr(b, arguments[0], Gr(arguments)))
    }, Te = function () {
        if (0 === arguments.length) throw new Error("pipeP requires at least one argument");
        return nn(arguments[0].length, Kr(j, arguments[0], Gr(arguments)))
    }, qe = Kr(Vn, 1), We = ue(x, tt, vn), Re = c(function (n, t) {
        return ve(n >= 0 ? t.length - n : 0, t)
    }), Be = function (n, t) {
        return ce(t, n, 0) >= 0
    }, Le = function gu(n, t) {
        var r = function (r) {
            var e = t.concat([n]);
            return Be(r, e) ? "<Circular>" : gu(r, e)
        }, e = function (n, t) {
            return x(function (t) {
                return O(t) + ": " + r(n[t])
            }, t.slice().sort())
        };
        switch (Object.prototype.toString.call(n)) {
            case"[object Arguments]":
                return "(function() { return arguments; }(" + x(r, n).join(", ") + "))";
            case"[object Array]":
                return "[" + x(r, n).concat(e(n, $r(bt(/^\d+$/), In(n)))).join(", ") + "]";
            case"[object Boolean]":
                return "object" == typeof n ? "new Boolean(" + r(n.valueOf()) + ")" : n.toString();
            case"[object Date]":
                return "new Date(" + O(A(n)) + ")";
            case"[object Null]":
                return "null";
            case"[object Number]":
                return "object" == typeof n ? "new Number(" + r(n.valueOf()) + ")" : 1 / n === -(1 / 0) ? "-0" : n.toString(10);
            case"[object String]":
                return "object" == typeof n ? "new String(" + r(n.valueOf()) + ")" : O(n);
            case"[object Undefined]":
                return "undefined";
            default:
                return "function" == typeof n.constructor && "Object" !== n.constructor.name && "function" == typeof n.toString && "[object Object]" !== n.toString() ? n.toString() : "{" + e(n, In(n)).join(", ") + "}"
        }
    }, Ue = de(vn), Fe = function () {
        if (0 === arguments.length) throw new Error("compose requires at least one argument");
        return Pe.apply(this, ht(arguments))
    }, De = function () {
        return 0 === arguments.length ? vn : Fe.apply(this, Tr(ge, arguments))
    }, Ve = function () {
        if (0 === arguments.length) throw new Error("composeP requires at least one argument");
        return Te.apply(this, ht(arguments))
    }, ze = o(function (n) {
        return ye(n.length, n);
    }), _e = c(Be), Ke = c(function (n, t) {
        for (var r = [], e = 0, u = n.length; u > e;) Be(n[e], t) || Be(n[e], r) || (r[r.length] = n[e]), e += 1;
        return r
    }), $e = o(Ht("dropRepeats", I(hr), xe(hr))), He = c(function (n, t) {
        return re(s(xr(Be)(n), t))
    }), Xe = o(function (n) {
        return ke(n.length, n)
    }), Ye = c(function (n, t) {
        var r = {};
        for (var e in t) Be(e, n) || (r[e] = t[e]);
        return r
    }), Ze = function () {
        return De.apply(this, ht(arguments))
    }, Ge = o(function (n) {
        return Le(n, [])
    }), Je = c(Fe(re, u)), Qe = c(function (n, t) {
        for (var r, e, u = 0, i = [], o = []; u < t.length;) e = t[u], r = n(e), Be(r, i) || (o.push(e), i.push(r)), u += 1;
        return o
    }), nu = c(function (n, t) {
        return nn(n + 1, function () {
            var r = arguments[n];
            if (null != r && On(Function, r[t])) return r[t].apply(r, E(arguments, 0, n));
            throw new TypeError(Ge(r) + ' does not have a method named "' + t + '"')
        })
    }), tu = nu(1, "join"), ru = o(function (n) {
        var t = {};
        return function () {
            var r = Ge(arguments);
            return h(r, t) || (t[r] = n.apply(this, arguments)), t[r]
        }
    }), eu = nu(1, "split"), uu = nu(0, "toLowerCase"), iu = nu(0, "toUpperCase"), ou = {
        F: Vt,
        T: zt,
        __: n,
        add: L,
        addIndex: ur,
        adjust: U,
        all: ir,
        allPass: se,
        always: F,
        and: or,
        any: cr,
        anyPass: le,
        ap: pe,
        aperture: D,
        append: V,
        apply: z,
        assoc: _,
        assocPath: K,
        binary: ar,
        bind: $,
        both: H,
        call: he,
        chain: ge,
        clone: fr,
        commute: Ue,
        commuteMap: de,
        comparator: X,
        complement: Y,
        compose: Fe,
        composeK: De,
        composeP: Ve,
        concat: sr,
        cond: Z,
        construct: ze,
        constructN: ye,
        contains: _e,
        containsWith: G,
        converge: me,
        countBy: J,
        createMapEntry: Q,
        curry: lr,
        curryN: nn,
        dec: tn,
        defaultTo: rn,
        difference: Ke,
        differenceWith: en,
        dissoc: un,
        dissocPath: on,
        divide: cn,
        drop: ve,
        dropLast: we,
        dropLastWhile: an,
        dropRepeats: $e,
        dropRepeatsWith: xe,
        dropWhile: pr,
        either: fn,
        empty: sn,
        eqProps: be,
        equals: hr,
        evolve: ln,
        filter: gr,
        find: dr,
        findIndex: yr,
        findLast: mr,
        findLastIndex: vr,
        flatten: wr,
        flip: xr,
        forEach: br,
        fromPairs: pn,
        functions: jr,
        functionsIn: Or,
        groupBy: Sr,
        gt: hn,
        gte: gn,
        has: dn,
        hasIn: yn,
        head: Er,
        identical: mn,
        identity: vn,
        ifElse: wn,
        inc: xn,
        indexOf: je,
        init: Oe,
        insert: bn,
        insertAll: jn,
        intersection: He,
        intersectionWith: Ar,
        intersperse: Ir,
        into: kr,
        invert: Nr,
        invertObj: Cr,
        invoker: nu,
        is: On,
        isArrayLike: Sn,
        isEmpty: En,
        isNil: An,
        isSet: Se,
        join: tu,
        keys: In,
        keysIn: kn,
        last: Mr,
        lastIndexOf: Pr,
        length: Nn,
        lens: Ee,
        lensIndex: Ae,
        lensProp: Ie,
        lift: Xe,
        liftN: ke,
        lt: Cn,
        lte: Mn,
        map: Tr,
        mapAccum: Pn,
        mapAccumRight: Tn,
        mapObj: qr,
        mapObjIndexed: Wr,
        match: qn,
        mathMod: Wn,
        max: Rn,
        maxBy: Bn,
        mean: Ne,
        median: Ce,
        memoize: ru,
        merge: Ln,
        mergeAll: Me,
        min: Un,
        minBy: Fn,
        modulo: Dn,
        multiply: Vn,
        nAry: zn,
        negate: _n,
        none: Rr,
        not: Kn,
        nth: $n,
        nthArg: Hn,
        nthChar: Xn,
        nthCharCode: Yn,
        of: Zn,
        omit: Ye,
        once: Gn,
        or: Br,
        over: Jn,
        partial: Lr,
        partialRight: Ur,
        partition: Fr,
        path: Qn,
        pathEq: Dr,
        pick: nt,
        pickAll: tt,
        pickBy: rt,
        pipe: Pe,
        pipeK: Ze,
        pipeP: Te,
        pluck: Vr,
        prepend: et,
        product: qe,
        project: We,
        prop: ut,
        propEq: zr,
        propIs: _r,
        propOr: it,
        propSatisfies: ot,
        props: ct,
        range: at,
        reduce: Kr,
        reduceRight: ft,
        reduced: st,
        reject: $r,
        remove: lt,
        repeat: Hr,
        replace: pt,
        reverse: ht,
        scan: gt,
        set: dt,
        slice: Xr,
        sort: yt,
        sortBy: mt,
        split: eu,
        splitEvery: Yr,
        subtract: vt,
        sum: Zr,
        tail: Gr,
        take: Jr,
        takeLast: Re,
        takeLastWhile: wt,
        takeWhile: Qr,
        tap: xt,
        test: bt,
        times: jt,
        toLower: uu,
        toPairs: Ot,
        toPairsIn: St,
        toString: Ge,
        toUpper: iu,
        transduce: ne,
        trim: Et,
        type: At,
        unapply: It,
        unary: kt,
        uncurryN: Nt,
        unfold: Ct,
        union: Je,
        unionWith: te,
        uniq: re,
        uniqBy: Qe,
        uniqWith: Mt,
        unnest: ee,
        update: Pt,
        useWith: ue,
        values: Tt,
        valuesIn: qt,
        view: Wt,
        where: Rt,
        whereEq: ie,
        wrap: Bt,
        xprod: Lt,
        zip: Ut,
        zipObj: Ft,
        zipWith: Dt
    };
    "object" == typeof exports ? module.exports = ou : "function" == typeof define && define.amd ? define(function () {
        return ou
    }) : this.R = ou
}).call(this);
window.JSON || (window.JSON = {}), function () {
    function f(a) {
        return a < 10 ? "0" + a : a
    }

    function quote(a) {
        return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function (a) {
            var b = meta[a];
            return typeof b == "string" ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + a + '"'
    }

    function str(a, b) {
        var c, d, e, f, g = gap, h, i = b[a];
        i && typeof i == "object" && typeof i.toJSON == "function" && (i = i.toJSON(a)), typeof rep == "function" && (i = rep.call(b, a, i));
        switch (typeof i) {
            case"string":
                return quote(i);
            case"number":
                return isFinite(i) ? String(i) : "null";
            case"boolean":
            case"null":
                return String(i);
            case"object":
                if (!i) return "null";
                gap += indent, h = [];
                if (Object.prototype.toString.apply(i) === "[object Array]") {
                    f = i.length;
                    for (c = 0; c < f; c += 1) h[c] = str(c, i) || "null";
                    return e = h.length === 0 ? "[]" : gap ? "[\n" + gap + h.join(",\n" + gap) + "\n" + g + "]" : "[" + h.join(",") + "]", gap = g, e
                }
                if (rep && typeof rep == "object") {
                    f = rep.length;
                    for (c = 0; c < f; c += 1) d = rep[c], typeof d == "string" && (e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e))
                } else for (d in i) Object.hasOwnProperty.call(i, d) && (e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e));
                return e = h.length === 0 ? "{}" : gap ? "{\n" + gap + h.join(",\n" + gap) + "\n" + g + "}" : "{" + h.join(",") + "}", gap = g, e
        }
    }

    "use strict", typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function (a) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (a) {
        return this.valueOf()
    });
    var JSON = window.JSON,
        cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap, indent, meta = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"},
        rep;
    typeof JSON.stringify != "function" && (JSON.stringify = function (a, b, c) {
        var d;
        gap = "", indent = "";
        if (typeof c == "number") for (d = 0; d < c; d += 1) indent += " "; else typeof c == "string" && (indent = c);
        rep = b;
        if (!b || typeof b == "function" || typeof b == "object" && typeof b.length == "number") return str("", {"": a});
        throw new Error("JSON.stringify")
    }), typeof JSON.parse != "function" && (JSON.parse = function (text, reviver) {
        function walk(a, b) {
            var c, d, e = a[b];
            if (e && typeof e == "object") for (c in e) Object.hasOwnProperty.call(e, c) && (d = walk(e, c), d !== undefined ? e[c] = d : delete e[c]);
            return reviver.call(a, b, e)
        }

        var j;
        text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({"": j}, "") : j;
        throw new SyntaxError("JSON.parse")
    })
}(), function (a, b) {
    "use strict";
    var c = a.History = a.History || {}, d = a.jQuery;
    if (typeof c.Adapter != "undefined") throw new Error("History.js Adapter has already been loaded...");
    c.Adapter = {
        bind: function (a, b, c) {
            d(a).bind(b, c)
        }, trigger: function (a, b, c) {
            d(a).trigger(b, c)
        }, extractEventData: function (a, c, d) {
            var e = c && c.originalEvent && c.originalEvent[a] || d && d[a] || b;
            return e
        }, onDomLoad: function (a) {
            d(a)
        }
    }, typeof c.init != "undefined" && c.init()
}(window), function (a, b) {
    "use strict";
    var c = a.document, d = a.setTimeout || d, e = a.clearTimeout || e, f = a.setInterval || f,
        g = a.History = a.History || {};
    if (typeof g.initHtml4 != "undefined") throw new Error("History.js HTML4 Support has already been loaded...");
    g.initHtml4 = function () {
        if (typeof g.initHtml4.initialized != "undefined") return !1;
        g.initHtml4.initialized = !0, g.enabled = !0, g.savedHashes = [], g.isLastHash = function (a) {
            var b = g.getHashByIndex(), c;
            return c = a === b, c
        }, g.saveHash = function (a) {
            return g.isLastHash(a) ? !1 : (g.savedHashes.push(a), !0)
        }, g.getHashByIndex = function (a) {
            var b = null;
            return typeof a == "undefined" ? b = g.savedHashes[g.savedHashes.length - 1] : a < 0 ? b = g.savedHashes[g.savedHashes.length + a] : b = g.savedHashes[a], b
        }, g.discardedHashes = {}, g.discardedStates = {}, g.discardState = function (a, b, c) {
            var d = g.getHashByState(a), e;
            return e = {discardedState: a, backState: c, forwardState: b}, g.discardedStates[d] = e, !0
        }, g.discardHash = function (a, b, c) {
            var d = {discardedHash: a, backState: c, forwardState: b};
            return g.discardedHashes[a] = d, !0
        }, g.discardedState = function (a) {
            var b = g.getHashByState(a), c;
            return c = g.discardedStates[b] || !1, c
        }, g.discardedHash = function (a) {
            var b = g.discardedHashes[a] || !1;
            return b
        }, g.recycleState = function (a) {
            var b = g.getHashByState(a);
            return g.discardedState(a) && delete g.discardedStates[b], !0
        }, g.emulated.hashChange && (g.hashChangeInit = function () {
            g.checkerFunction = null;
            var b = "", d, e, h, i;
            return g.isInternetExplorer() ? (d = "historyjs-iframe", e = c.createElement("iframe"), e.setAttribute("id", d), e.style.display = "none", c.body.appendChild(e), e.contentWindow.document.open(), e.contentWindow.document.close(), h = "", i = !1, g.checkerFunction = function () {
                if (i) return !1;
                i = !0;
                var c = g.getHash() || "", d = g.unescapeHash(e.contentWindow.document.location.hash) || "";
                return c !== b ? (b = c, d !== c && (h = d = c, e.contentWindow.document.open(), e.contentWindow.document.close(), e.contentWindow.document.location.hash = g.escapeHash(c)), g.Adapter.trigger(a, "hashchange")) : d !== h && (h = d, g.setHash(d, !1)), i = !1, !0
            }) : g.checkerFunction = function () {
                var c = g.getHash();
                return c !== b && (b = c, g.Adapter.trigger(a, "hashchange")), !0
            }, g.intervalList.push(f(g.checkerFunction, g.options.hashChangeInterval)), !0
        }, g.Adapter.onDomLoad(g.hashChangeInit)), g.emulated.pushState && (g.onHashChange = function (b) {
            var d = b && b.newURL || c.location.href, e = g.getHashByUrl(d), f = null, h = null, i = null, j;
            return g.isLastHash(e) ? (g.busy(!1), !1) : (g.doubleCheckComplete(), g.saveHash(e), e && g.isTraditionalAnchor(e) ? (g.Adapter.trigger(a, "anchorchange"), g.busy(!1), !1) : (f = g.extractState(g.getFullUrl(e || c.location.href, !1), !0), g.isLastSavedState(f) ? (g.busy(!1), !1) : (h = g.getHashByState(f), j = g.discardedState(f), j ? (g.getHashByIndex(-2) === g.getHashByState(j.forwardState) ? g.back(!1) : g.forward(!1), !1) : (g.pushState(f.data, f.title, f.url, !1), !0))))
        }, g.Adapter.bind(a, "hashchange", g.onHashChange), g.pushState = function (b, d, e, f) {
            if (g.getHashByUrl(e)) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (f !== !1 && g.busy()) return g.pushQueue({
                scope: g,
                callback: g.pushState,
                args: arguments,
                queue: f
            }), !1;
            g.busy(!0);
            var h = g.createStateObject(b, d, e), i = g.getHashByState(h), j = g.getState(!1), k = g.getHashByState(j),
                l = g.getHash();
            return g.storeState(h), g.expectedStateId = h.id, g.recycleState(h), g.setTitle(h), i === k ? (g.busy(!1), !1) : i !== l && i !== g.getShortUrl(c.location.href) ? (g.setHash(i, !1), !1) : (g.saveState(h), g.Adapter.trigger(a, "statechange"), g.busy(!1), !0)
        }, g.replaceState = function (a, b, c, d) {
            if (g.getHashByUrl(c)) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (d !== !1 && g.busy()) return g.pushQueue({
                scope: g,
                callback: g.replaceState,
                args: arguments,
                queue: d
            }), !1;
            g.busy(!0);
            var e = g.createStateObject(a, b, c), f = g.getState(!1), h = g.getStateByIndex(-2);
            return g.discardState(f, e, h), g.pushState(e.data, e.title, e.url, !1), !0
        }), g.emulated.pushState && g.getHash() && !g.emulated.hashChange && g.Adapter.onDomLoad(function () {
            g.Adapter.trigger(a, "hashchange")
        })
    }, typeof g.init != "undefined" && g.init()
}(window), function (a, b) {
    "use strict";
    var c = a.console || b, d = a.document, e = a.navigator, f = a.sessionStorage || !1, g = a.setTimeout,
        h = a.clearTimeout, i = a.setInterval, j = a.clearInterval, k = a.JSON, l = a.alert,
        m = a.History = a.History || {}, n = a.history;
    k.stringify = k.stringify || k.encode, k.parse = k.parse || k.decode;
    if (typeof m.init != "undefined") throw new Error("History.js Core has already been loaded...");
    m.init = function () {
        return typeof m.Adapter == "undefined" ? !1 : (typeof m.initCore != "undefined" && m.initCore(), typeof m.initHtml4 != "undefined" && m.initHtml4(), !0)
    }, m.initCore = function () {
        if (typeof m.initCore.initialized != "undefined") return !1;
        m.initCore.initialized = !0, m.options = m.options || {}, m.options.hashChangeInterval = m.options.hashChangeInterval || 100, m.options.safariPollInterval = m.options.safariPollInterval || 500, m.options.doubleCheckInterval = m.options.doubleCheckInterval || 500, m.options.storeInterval = m.options.storeInterval || 1e3, m.options.busyDelay = m.options.busyDelay || 250, m.options.debug = m.options.debug || !1, m.options.initialTitle = m.options.initialTitle || d.title, m.intervalList = [], m.clearAllIntervals = function () {
            var a, b = m.intervalList;
            if (typeof b != "undefined" && b !== null) {
                for (a = 0; a < b.length; a++) j(b[a]);
                m.intervalList = null
            }
        }, m.debug = function () {
            (m.options.debug || !1) && m.log.apply(m, arguments)
        }, m.log = function () {
            var a = typeof c != "undefined" && typeof c.log != "undefined" && typeof c.log.apply != "undefined",
                b = d.getElementById("log"), e, f, g, h, i;
            a ? (h = Array.prototype.slice.call(arguments), e = h.shift(), typeof c.debug != "undefined" ? c.debug.apply(c, [e, h]) : c.log.apply(c, [e, h])) : e = "\n" + arguments[0] + "\n";
            for (f = 1, g = arguments.length; f < g; ++f) {
                i = arguments[f];
                if (typeof i == "object" && typeof k != "undefined") try {
                    i = k.stringify(i)
                } catch (j) {
                }
                e += "\n" + i + "\n"
            }
            return b ? (b.value += e + "\n-----\n", b.scrollTop = b.scrollHeight - b.clientHeight) : a || l(e), !0
        }, m.getInternetExplorerMajorVersion = function () {
            var a = m.getInternetExplorerMajorVersion.cached = typeof m.getInternetExplorerMajorVersion.cached != "undefined" ? m.getInternetExplorerMajorVersion.cached : function () {
                var a = 3, b = d.createElement("div"), c = b.getElementsByTagName("i");
                while ((b.innerHTML = "<!--[if gt IE " + ++a + "]><i></i><![endif]-->") && c[0]) ;
                return a > 4 ? a : !1
            }();
            return a
        }, m.isInternetExplorer = function () {
            var a = m.isInternetExplorer.cached = typeof m.isInternetExplorer.cached != "undefined" ? m.isInternetExplorer.cached : Boolean(m.getInternetExplorerMajorVersion());
            return a
        }, m.emulated = {
            pushState: !Boolean(a.history && a.history.pushState && a.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(e.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(e.userAgent)),
            hashChange: Boolean(!("onhashchange" in a || "onhashchange" in d) || m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 8)
        }, m.enabled = !m.emulated.pushState, m.bugs = {
            setHash: Boolean(!m.emulated.pushState && e.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),
            safariPoll: Boolean(!m.emulated.pushState && e.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),
            ieDoubleCheck: Boolean(m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 8),
            hashEscape: Boolean(m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 7)
        }, m.isEmptyObject = function (a) {
            for (var b in a) return !1;
            return !0
        }, m.cloneObject = function (a) {
            var b, c;
            return a ? (b = k.stringify(a), c = k.parse(b)) : c = {}, c
        }, m.getRootUrl = function () {
            var a = d.location.protocol + "//" + (d.location.hostname || d.location.host);
            if (d.location.port || !1) a += ":" + d.location.port;
            return a += "/", a
        }, m.getBaseHref = function () {
            var a = d.getElementsByTagName("base"), b = null, c = "";
            return a.length === 1 && (b = a[0], c = b.href.replace(/[^\/]+$/, "")), c = c.replace(/\/+$/, ""), c && (c += "/"), c
        }, m.getBaseUrl = function () {
            var a = m.getBaseHref() || m.getBasePageUrl() || m.getRootUrl();
            return a
        }, m.getPageUrl = function () {
            var a = m.getState(!1, !1), b = (a || {}).url || d.location.href, c;
            return c = b.replace(/\/+$/, "").replace(/[^\/]+$/, function (a, b, c) {
                return /\./.test(a) ? a : a + "/"
            }), c
        }, m.getBasePageUrl = function () {
            var a = d.location.href.replace(/[#\?].*/, "").replace(/[^\/]+$/, function (a, b, c) {
                return /[^\/]$/.test(a) ? "" : a
            }).replace(/\/+$/, "") + "/";
            return a
        }, m.getFullUrl = function (a, b) {
            var c = a, d = a.substring(0, 1);
            return b = typeof b == "undefined" ? !0 : b, /[a-z]+\:\/\//.test(a) || (d === "/" ? c = m.getRootUrl() + a.replace(/^\/+/, "") : d === "#" ? c = m.getPageUrl().replace(/#.*/, "") + a : d === "?" ? c = m.getPageUrl().replace(/[\?#].*/, "") + a : b ? c = m.getBaseUrl() + a.replace(/^(\.\/)+/, "") : c = m.getBasePageUrl() + a.replace(/^(\.\/)+/, "")), c.replace(/\#$/, "")
        }, m.getShortUrl = function (a) {
            var b = a, c = m.getBaseUrl(), d = m.getRootUrl();
            return m.emulated.pushState && (b = b.replace(c, "")), b = b.replace(d, "/"), m.isTraditionalAnchor(b) && (b = "./" + b), b = b.replace(/^(\.\/)+/g, "./").replace(/\#$/, ""), b
        }, m.store = {}, m.idToState = m.idToState || {}, m.stateToId = m.stateToId || {}, m.urlToId = m.urlToId || {}, m.storedStates = m.storedStates || [], m.savedStates = m.savedStates || [], m.normalizeStore = function () {
            m.store.idToState = m.store.idToState || {}, m.store.urlToId = m.store.urlToId || {}, m.store.stateToId = m.store.stateToId || {}
        }, m.getState = function (a, b) {
            typeof a == "undefined" && (a = !0), typeof b == "undefined" && (b = !0);
            var c = m.getLastSavedState();
            return !c && b && (c = m.createStateObject()), a && (c = m.cloneObject(c), c.url = c.cleanUrl || c.url), c
        }, m.getIdByState = function (a) {
            var b = m.extractId(a.url), c;
            if (!b) {
                c = m.getStateString(a);
                if (typeof m.stateToId[c] != "undefined") b = m.stateToId[c]; else if (typeof m.store.stateToId[c] != "undefined") b = m.store.stateToId[c]; else {
                    for (; ;) {
                        b = (new Date).getTime() + String(Math.random()).replace(/\D/g, "");
                        if (typeof m.idToState[b] == "undefined" && typeof m.store.idToState[b] == "undefined") break
                    }
                    m.stateToId[c] = b, m.idToState[b] = a
                }
            }
            return b
        }, m.normalizeState = function (a) {
            var b, c;
            if (!a || typeof a != "object") a = {};
            if (typeof a.normalized != "undefined") return a;
            if (!a.data || typeof a.data != "object") a.data = {};
            b = {}, b.normalized = !0, b.title = a.title || "", b.url = m.getFullUrl(m.unescapeString(a.url || d.location.href)), b.hash = m.getShortUrl(b.url), b.data = m.cloneObject(a.data), b.id = m.getIdByState(b), b.cleanUrl = b.url.replace(/\??\&_suid.*/, ""), b.url = b.cleanUrl, c = !m.isEmptyObject(b.data);
            if (b.title || c) b.hash = m.getShortUrl(b.url).replace(/\??\&_suid.*/, ""), /\?/.test(b.hash) || (b.hash += "?"), b.hash += "&_suid=" + b.id;
            return b.hashedUrl = m.getFullUrl(b.hash), (m.emulated.pushState || m.bugs.safariPoll) && m.hasUrlDuplicate(b) && (b.url = b.hashedUrl), b
        }, m.createStateObject = function (a, b, c) {
            var d = {data: a, title: b, url: c};
            return d = m.normalizeState(d), d
        }, m.getStateById = function (a) {
            a = String(a);
            var c = m.idToState[a] || m.store.idToState[a] || b;
            return c
        }, m.getStateString = function (a) {
            var b, c, d;
            return b = m.normalizeState(a), c = {data: b.data, title: a.title, url: a.url}, d = k.stringify(c), d
        }, m.getStateId = function (a) {
            var b, c;
            return b = m.normalizeState(a), c = b.id, c
        }, m.getHashByState = function (a) {
            var b, c;
            return b = m.normalizeState(a), c = b.hash, c
        }, m.extractId = function (a) {
            var b, c, d;
            return c = /(.*)\&_suid=([0-9]+)$/.exec(a), d = c ? c[1] || a : a, b = c ? String(c[2] || "") : "", b || !1
        }, m.isTraditionalAnchor = function (a) {
            var b = !/[\/\?\.]/.test(a);
            return b
        }, m.extractState = function (a, b) {
            var c = null, d, e;
            return b = b || !1, d = m.extractId(a), d && (c = m.getStateById(d)), c || (e = m.getFullUrl(a), d = m.getIdByUrl(e) || !1, d && (c = m.getStateById(d)), !c && b && !m.isTraditionalAnchor(a) && (c = m.createStateObject(null, null, e))), c
        }, m.getIdByUrl = function (a) {
            var c = m.urlToId[a] || m.store.urlToId[a] || b;
            return c
        }, m.getLastSavedState = function () {
            return m.savedStates[m.savedStates.length - 1] || b
        }, m.getLastStoredState = function () {
            return m.storedStates[m.storedStates.length - 1] || b
        }, m.hasUrlDuplicate = function (a) {
            var b = !1, c;
            return c = m.extractState(a.url), b = c && c.id !== a.id, b
        }, m.storeState = function (a) {
            return m.urlToId[a.url] = a.id, m.storedStates.push(m.cloneObject(a)), a
        }, m.isLastSavedState = function (a) {
            var b = !1, c, d, e;
            return m.savedStates.length && (c = a.id, d = m.getLastSavedState(), e = d.id, b = c === e), b
        }, m.saveState = function (a) {
            return m.isLastSavedState(a) ? !1 : (m.savedStates.push(m.cloneObject(a)), !0)
        }, m.getStateByIndex = function (a) {
            var b = null;
            return typeof a == "undefined" ? b = m.savedStates[m.savedStates.length - 1] : a < 0 ? b = m.savedStates[m.savedStates.length + a] : b = m.savedStates[a], b
        }, m.getHash = function () {
            var a = m.unescapeHash(d.location.hash);
            return a
        }, m.unescapeString = function (b) {
            var c = b, d;
            for (; ;) {
                d = a.unescape(c);
                if (d === c) break;
                c = d
            }
            return c
        }, m.unescapeHash = function (a) {
            var b = m.normalizeHash(a);
            return b = m.unescapeString(b), b
        }, m.normalizeHash = function (a) {
            var b = a.replace(/[^#]*#/, "").replace(/#.*/, "");
            return b
        }, m.setHash = function (a, b) {
            var c, e, f;
            return b !== !1 && m.busy() ? (m.pushQueue({
                scope: m,
                callback: m.setHash,
                args: arguments,
                queue: b
            }), !1) : (c = m.escapeHash(a), m.busy(!0), e = m.extractState(a, !0), e && !m.emulated.pushState ? m.pushState(e.data, e.title, e.url, !1) : d.location.hash !== c && (m.bugs.setHash ? (f = m.getPageUrl(), m.pushState(null, null, f + "#" + c, !1)) : d.location.hash = c), m)
        }, m.escapeHash = function (b) {
            var c = m.normalizeHash(b);
            return c = a.escape(c), m.bugs.hashEscape || (c = c.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), c
        }, m.getHashByUrl = function (a) {
            var b = String(a).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
            return b = m.unescapeHash(b), b
        }, m.setTitle = function (a) {
            var b = a.title, c;
            b || (c = m.getStateByIndex(0), c && c.url === a.url && (b = c.title || m.options.initialTitle));
            try {
                d.getElementsByTagName("title")[0].innerHTML = b.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
            } catch (e) {
            }
            return d.title = b, m
        }, m.queues = [], m.busy = function (a) {
            typeof a != "undefined" ? m.busy.flag = a : typeof m.busy.flag == "undefined" && (m.busy.flag = !1);
            if (!m.busy.flag) {
                h(m.busy.timeout);
                var b = function () {
                    var a, c, d;
                    if (m.busy.flag) return;
                    for (a = m.queues.length - 1; a >= 0; --a) {
                        c = m.queues[a];
                        if (c.length === 0) continue;
                        d = c.shift(), m.fireQueueItem(d), m.busy.timeout = g(b, m.options.busyDelay)
                    }
                };
                m.busy.timeout = g(b, m.options.busyDelay)
            }
            return m.busy.flag
        }, m.busy.flag = !1, m.fireQueueItem = function (a) {
            return a.callback.apply(a.scope || m, a.args || [])
        }, m.pushQueue = function (a) {
            return m.queues[a.queue || 0] = m.queues[a.queue || 0] || [], m.queues[a.queue || 0].push(a), m
        }, m.queue = function (a, b) {
            return typeof a == "function" && (a = {callback: a}), typeof b != "undefined" && (a.queue = b), m.busy() ? m.pushQueue(a) : m.fireQueueItem(a), m
        }, m.clearQueue = function () {
            return m.busy.flag = !1, m.queues = [], m
        }, m.stateChanged = !1, m.doubleChecker = !1, m.doubleCheckComplete = function () {
            return m.stateChanged = !0, m.doubleCheckClear(), m
        }, m.doubleCheckClear = function () {
            return m.doubleChecker && (h(m.doubleChecker), m.doubleChecker = !1), m
        }, m.doubleCheck = function (a) {
            return m.stateChanged = !1, m.doubleCheckClear(), m.bugs.ieDoubleCheck && (m.doubleChecker = g(function () {
                return m.doubleCheckClear(), m.stateChanged || a(), !0
            }, m.options.doubleCheckInterval)), m
        }, m.safariStatePoll = function () {
            var b = m.extractState(d.location.href), c;
            if (!m.isLastSavedState(b)) c = b; else return;
            return c || (c = m.createStateObject()), m.Adapter.trigger(a, "popstate"), m
        }, m.back = function (a) {
            return a !== !1 && m.busy() ? (m.pushQueue({
                scope: m,
                callback: m.back,
                args: arguments,
                queue: a
            }), !1) : (m.busy(!0), m.doubleCheck(function () {
                m.back(!1)
            }), n.go(-1), !0)
        }, m.forward = function (a) {
            return a !== !1 && m.busy() ? (m.pushQueue({
                scope: m,
                callback: m.forward,
                args: arguments,
                queue: a
            }), !1) : (m.busy(!0), m.doubleCheck(function () {
                m.forward(!1)
            }), n.go(1), !0)
        }, m.go = function (a, b) {
            var c;
            if (a > 0) for (c = 1; c <= a; ++c) m.forward(b); else {
                if (!(a < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                for (c = -1; c >= a; --c) m.back(b)
            }
            return m
        };
        if (m.emulated.pushState) {
            var o = function () {
            };
            m.pushState = m.pushState || o, m.replaceState = m.replaceState || o
        } else m.onPopState = function (b, c) {
            var e = !1, f = !1, g, h;
            return m.doubleCheckComplete(), g = m.getHash(), g ? (h = m.extractState(g || d.location.href, !0), h ? m.replaceState(h.data, h.title, h.url, !1) : (m.Adapter.trigger(a, "anchorchange"), m.busy(!1)), m.expectedStateId = !1, !1) : (e = m.Adapter.extractEventData("state", b, c) || !1, e ? f = m.getStateById(e) : m.expectedStateId ? f = m.getStateById(m.expectedStateId) : f = m.extractState(d.location.href), f || (f = m.createStateObject(null, null, d.location.href)), m.expectedStateId = !1, m.isLastSavedState(f) ? (m.busy(!1), !1) : (m.storeState(f), m.saveState(f), m.setTitle(f), m.Adapter.trigger(a, "statechange"), m.busy(!1), !0))
        }, m.Adapter.bind(a, "popstate", m.onPopState), m.pushState = function (b, c, d, e) {
            if (m.getHashByUrl(d) && m.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (e !== !1 && m.busy()) return m.pushQueue({
                scope: m,
                callback: m.pushState,
                args: arguments,
                queue: e
            }), !1;
            m.busy(!0);
            var f = m.createStateObject(b, c, d);
            return m.isLastSavedState(f) ? m.busy(!1) : (m.storeState(f), m.expectedStateId = f.id, n.pushState(f.id, f.title, f.url), m.Adapter.trigger(a, "popstate")), !0
        }, m.replaceState = function (b, c, d, e) {
            if (m.getHashByUrl(d) && m.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (e !== !1 && m.busy()) return m.pushQueue({
                scope: m,
                callback: m.replaceState,
                args: arguments,
                queue: e
            }), !1;
            m.busy(!0);
            var f = m.createStateObject(b, c, d);
            return m.isLastSavedState(f) ? m.busy(!1) : (m.storeState(f), m.expectedStateId = f.id, n.replaceState(f.id, f.title, f.url), m.Adapter.trigger(a, "popstate")), !0
        };
        if (f) {
            try {
                m.store = k.parse(f.getItem("History.store")) || {}
            } catch (p) {
                m.store = {}
            }
            m.normalizeStore()
        } else m.store = {}, m.normalizeStore();
        m.Adapter.bind(a, "beforeunload", m.clearAllIntervals), m.Adapter.bind(a, "unload", m.clearAllIntervals), m.saveState(m.storeState(m.extractState(d.location.href, !0))), f && (m.onUnload = function () {
            var a, b;
            try {
                a = k.parse(f.getItem("History.store")) || {}
            } catch (c) {
                a = {}
            }
            a.idToState = a.idToState || {}, a.urlToId = a.urlToId || {}, a.stateToId = a.stateToId || {};
            for (b in m.idToState) {
                if (!m.idToState.hasOwnProperty(b)) continue;
                a.idToState[b] = m.idToState[b]
            }
            for (b in m.urlToId) {
                if (!m.urlToId.hasOwnProperty(b)) continue;
                a.urlToId[b] = m.urlToId[b]
            }
            for (b in m.stateToId) {
                if (!m.stateToId.hasOwnProperty(b)) continue;
                a.stateToId[b] = m.stateToId[b]
            }
            m.store = a, m.normalizeStore(), f.setItem("History.store", k.stringify(a))
        }, m.intervalList.push(i(m.onUnload, m.options.storeInterval)), m.Adapter.bind(a, "beforeunload", m.onUnload), m.Adapter.bind(a, "unload", m.onUnload));
        if (!m.emulated.pushState) {
            m.bugs.safariPoll && m.intervalList.push(i(m.safariStatePoll, m.options.safariPollInterval));
            if (e.vendor === "Apple Computer, Inc." || (e.appCodeName || "") === "Mozilla") m.Adapter.bind(a, "hashchange", function () {
                m.Adapter.trigger(a, "popstate")
            }), m.getHash() && m.Adapter.onDomLoad(function () {
                m.Adapter.trigger(a, "hashchange")
            })
        }
    }, m.init()
}(window)
/**
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * @license TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing,
    {
        def: 'easeOutQuad',
        swing: function (x, t, b, c, d) {
            //alert(jQuery.easing.default);
            return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
        },
        easeInQuad: function (x, t, b, c, d) {
            return c * (t /= d) * t + b;
        },
        easeOutQuad: function (x, t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
        },
        easeInOutQuad: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
            return -c / 2 * ((--t) * (t - 2) - 1) + b;
        },
        easeInCubic: function (x, t, b, c, d) {
            return c * (t /= d) * t * t + b;
        },
        easeOutCubic: function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        },
        easeInOutCubic: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
        },
        easeInQuart: function (x, t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
        },
        easeOutQuart: function (x, t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        },
        easeInOutQuart: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        },
        easeInQuint: function (x, t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        },
        easeOutQuint: function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        },
        easeInOutQuint: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        },
        easeInSine: function (x, t, b, c, d) {
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
        },
        easeOutSine: function (x, t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
        },
        easeInOutSine: function (x, t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
        },
        easeInExpo: function (x, t, b, c, d) {
            return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
        },
        easeOutExpo: function (x, t, b, c, d) {
            return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        },
        easeInOutExpo: function (x, t, b, c, d) {
            if (t == 0) return b;
            if (t == d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function (x, t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        },
        easeOutCirc: function (x, t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        },
        easeInOutCirc: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        },
        easeInElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            }
            else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        },
        easeOutElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            }
            else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
        },
        easeInOutElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d / 2) == 2) return b + c;
            if (!p) p = d * (.3 * 1.5);
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            }
            else var s = p / (2 * Math.PI) * Math.asin(c / a);
            if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
        },
        easeInBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
        },
        easeOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        },
        easeInOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
        },
        easeInBounce: function (x, t, b, c, d) {
            return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
        },
        easeOutBounce: function (x, t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b;
            } else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
            } else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
            } else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
            }
        },
        easeInOutBounce: function (x, t, b, c, d) {
            if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
            return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
        }
    });

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
/*
 TERMS OF USE - jQuery Easing

 Open source under the BSD License.

 Copyright ï¿½ 2008 George McGinley Smith
 All rights reserved.

 Redistribution and use in source and binary forms, with or without modification,
 are permitted provided that the following conditions are met:

 Redistributions of source code must retain the above copyright notice, this list of
 conditions and the following disclaimer.
 Redistributions in binary form must reproduce the above copyright notice, this list
 of conditions and the following disclaimer in the documentation and/or other materials
 provided with the distribution.

 Neither the name of the author nor the names of contributors may be used to endorse
 or promote products derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 OF THE POSSIBILITY OF SUCH DAMAGE.

*/
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad", swing: function (e, a, c, b, d) {
        return jQuery.easing[jQuery.easing.def](e, a, c, b, d)
    }, easeInQuad: function (e, a, c, b, d) {
        return b * (a /= d) * a + c
    }, easeOutQuad: function (e, a, c, b, d) {
        return -b * (a /= d) * (a - 2) + c
    }, easeInOutQuad: function (e, a, c, b, d) {
        return (a /= d / 2) < 1 ? b / 2 * a * a + c : -b / 2 * (--a * (a - 2) - 1) + c
    }, easeInCubic: function (e, a, c, b, d) {
        return b * (a /= d) * a * a + c
    }, easeOutCubic: function (e, a, c, b, d) {
        return b * ((a = a / d - 1) * a * a + 1) + c
    }, easeInOutCubic: function (e, a, c, b, d) {
        return (a /= d / 2) < 1 ? b / 2 * a * a * a + c : b /
            2 * ((a -= 2) * a * a + 2) + c
    }, easeInQuart: function (e, a, c, b, d) {
        return b * (a /= d) * a * a * a + c
    }, easeOutQuart: function (e, a, c, b, d) {
        return -b * ((a = a / d - 1) * a * a * a - 1) + c
    }, easeInOutQuart: function (e, a, c, b, d) {
        return (a /= d / 2) < 1 ? b / 2 * a * a * a * a + c : -b / 2 * ((a -= 2) * a * a * a - 2) + c
    }, easeInQuint: function (e, a, c, b, d) {
        return b * (a /= d) * a * a * a * a + c
    }, easeOutQuint: function (e, a, c, b, d) {
        return b * ((a = a / d - 1) * a * a * a * a + 1) + c
    }, easeInOutQuint: function (e, a, c, b, d) {
        return (a /= d / 2) < 1 ? b / 2 * a * a * a * a * a + c : b / 2 * ((a -= 2) * a * a * a * a + 2) + c
    }, easeInSine: function (e, a, c, b, d) {
        return -b * Math.cos(a /
            d * (Math.PI / 2)) + b + c
    }, easeOutSine: function (e, a, c, b, d) {
        return b * Math.sin(a / d * (Math.PI / 2)) + c
    }, easeInOutSine: function (e, a, c, b, d) {
        return -b / 2 * (Math.cos(Math.PI * a / d) - 1) + c
    }, easeInExpo: function (e, a, c, b, d) {
        return a == 0 ? c : b * Math.pow(2, 10 * (a / d - 1)) + c
    }, easeOutExpo: function (e, a, c, b, d) {
        return a == d ? c + b : b * (-Math.pow(2, -10 * a / d) + 1) + c
    }, easeInOutExpo: function (e, a, c, b, d) {
        return a == 0 ? c : a == d ? c + b : (a /= d / 2) < 1 ? b / 2 * Math.pow(2, 10 * (a - 1)) + c : b / 2 * (-Math.pow(2, -10 * --a) + 2) + c
    }, easeInCirc: function (e, a, c, b, d) {
        return -b * (Math.sqrt(1 - (a /= d) *
            a) - 1) + c
    }, easeOutCirc: function (e, a, c, b, d) {
        return b * Math.sqrt(1 - (a = a / d - 1) * a) + c
    }, easeInOutCirc: function (e, a, c, b, d) {
        return (a /= d / 2) < 1 ? -b / 2 * (Math.sqrt(1 - a * a) - 1) + c : b / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + c
    }, easeInElastic: function (e, a, c, b, d) {
        var e = 1.70158, f = 0, g = b;
        if (a == 0) return c;
        if ((a /= d) == 1) return c + b;
        f || (f = d * 0.3);
        g < Math.abs(b) ? (g = b, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(b / g);
        return -(g * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / f)) + c
    }, easeOutElastic: function (e, a, c, b, d) {
        var e = 1.70158, f = 0, g = b;
        if (a == 0) return c;
        if ((a /=
                d) == 1) return c + b;
        f || (f = d * 0.3);
        g < Math.abs(b) ? (g = b, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(b / g);
        return g * Math.pow(2, -10 * a) * Math.sin((a * d - e) * 2 * Math.PI / f) + b + c
    }, easeInOutElastic: function (e, a, c, b, d) {
        var e = 1.70158, f = 0, g = b;
        if (a == 0) return c;
        if ((a /= d / 2) == 2) return c + b;
        f || (f = d * 0.3 * 1.5);
        g < Math.abs(b) ? (g = b, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(b / g);
        return a < 1 ? -0.5 * g * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / f) + c : g * Math.pow(2, -10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / f) * 0.5 + b + c
    }, easeInBack: function (e, a, c, b, d, f) {
        f == void 0 &&
        (f = 1.70158);
        return b * (a /= d) * a * ((f + 1) * a - f) + c
    }, easeOutBack: function (e, a, c, b, d, f) {
        f == void 0 && (f = 1.70158);
        return b * ((a = a / d - 1) * a * ((f + 1) * a + f) + 1) + c
    }, easeInOutBack: function (e, a, c, b, d, f) {
        f == void 0 && (f = 1.70158);
        return (a /= d / 2) < 1 ? b / 2 * a * a * (((f *= 1.525) + 1) * a - f) + c : b / 2 * ((a -= 2) * a * (((f *= 1.525) + 1) * a + f) + 2) + c
    }, easeInBounce: function (e, a, c, b, d) {
        return b - jQuery.easing.easeOutBounce(e, d - a, 0, b, d) + c
    }, easeOutBounce: function (e, a, c, b, d) {
        return (a /= d) < 1 / 2.75 ? b * 7.5625 * a * a + c : a < 2 / 2.75 ? b * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + c : a < 2.5 / 2.75 ? b *
            (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + c : b * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + c
    }, easeInOutBounce: function (e, a, c, b, d) {
        return a < d / 2 ? jQuery.easing.easeInBounce(e, a * 2, 0, b, d) * 0.5 + c : jQuery.easing.easeOutBounce(e, a * 2 - d, 0, b, d) * 0.5 + b * 0.5 + c
    }
});
/*!
* TableSorter 2.10.8 min - Client-side table sorting with ease!
* Copyright (c) 2007 Christian Bach
*/
!function (f) {
    f.extend({
        tablesorter: new function () {
            function c(d) {
                "undefined" !== typeof console && "undefined" !== typeof console.log ? console.log(d) : alert(d)
            }

            function t(d, b) {
                c(d + " (" + ((new Date).getTime() - b.getTime()) + "ms)")
            }

            function r(d, b, a) {
                if (!b) return "";
                var e = d.config, c = e.textExtraction, l = "",
                    l = "simple" === c ? e.supportsTextContent ? b.textContent : f(b).text() : "function" === typeof c ? c(b, d, a) : "object" === typeof c && c.hasOwnProperty(a) ? c[a](b, d, a) : e.supportsTextContent ? b.textContent : f(b).text();
                return f.trim(l)
            }

            function j(d) {
                var b = d.config, a = b.$tbodies = b.$table.children("tbody:not(." + b.cssInfoBlock + ")"), e, u, l, p,
                    n, k, h = "";
                if (0 === a.length) return b.debug ? c("*Empty table!* Not building a parser cache") : "";
                a = a[0].rows;
                if (a[0]) {
                    e = [];
                    u = a[0].cells.length;
                    for (l = 0; l < u; l++) {
                        p = b.$headers.filter(":not([colspan])");
                        p = p.add(b.$headers.filter('[colspan="1"]')).filter('[data-column="' + l + '"]:last');
                        n = b.headers[l];
                        k = g.getParserById(g.getData(p, n, "sorter"));
                        b.empties[l] = g.getData(p, n, "empty") || b.emptyTo || (b.emptyToBottom ? "bottom" : "top");
                        b.strings[l] = g.getData(p, n, "string") || b.stringTo || "max";
                        if (!k) a:{
                            p = d;
                            n = a;
                            k = -1;
                            for (var f = l, m = void 0, t = g.parsers.length, F = !1, D = "", m = !0; "" === D && m;) k++, n[k] ? (F = n[k].cells[f], D = r(p, F, f), p.config.debug && c("Checking if value was empty on row " + k + ", column: " + f + ': "' + D + '"')) : m = !1;
                            for (; 0 <= --t;) if ((m = g.parsers[t]) && "text" !== m.id && m.is && m.is(D, p, F)) {
                                k = m;
                                break a
                            }
                            k = g.getParserById("text")
                        }
                        b.debug && (h += "column:" + l + "; parser:" + k.id + "; string:" + b.strings[l] + "; empty: " + b.empties[l] + "\n");
                        e.push(k)
                    }
                }
                b.debug && c(h);
                b.parsers = e
            }

            function v(d) {
                var b = d.tBodies, a = d.config, e, u, l = a.parsers, p, n, k, h, q, m, H, j = [];
                a.cache = {};
                if (!l) return a.debug ? c("*Empty table!* Not building a cache") : "";
                a.debug && (H = new Date);
                a.showProcessing && g.isProcessing(d, !0);
                for (h = 0; h < b.length; h++) if (a.cache[h] = {
                        row: [],
                        normalized: []
                    }, !f(b[h]).hasClass(a.cssInfoBlock)) {
                    e = b[h] && b[h].rows.length || 0;
                    u = b[h].rows[0] && b[h].rows[0].cells.length || 0;
                    for (n = 0; n < e; ++n) if (q = f(b[h].rows[n]), m = [], q.hasClass(a.cssChildRow)) a.cache[h].row[a.cache[h].row.length - 1] = a.cache[h].row[a.cache[h].row.length - 1].add(q); else {
                        a.cache[h].row.push(q);
                        for (k = 0; k < u; ++k) if (p = r(d, q[0].cells[k], k), p = l[k].format(p, d, q[0].cells[k], k), m.push(p), "numeric" === (l[k].type || "").toLowerCase()) j[k] = Math.max(Math.abs(p) || 0, j[k] || 0);
                        m.push(a.cache[h].normalized.length);
                        a.cache[h].normalized.push(m)
                    }
                    a.cache[h].colMax = j
                }
                a.showProcessing && g.isProcessing(d);
                a.debug && t("Building cache for " + e + " rows", H)
            }

            function x(d, b) {
                var a = d.config, e = d.tBodies, c = [], l = a.cache, p, n, k, h, q, m, r, j, D, s, v;
                if (l[0]) {
                    a.debug && (v = new Date);
                    for (j = 0; j < e.length; j++) if (p = f(e[j]), p.length && !p.hasClass(a.cssInfoBlock)) {
                        q = g.processTbody(d, p, !0);
                        p = l[j].row;
                        n = l[j].normalized;
                        h = (k = n.length) ? n[0].length - 1 : 0;
                        for (m = 0; m < k; m++) if (s = n[m][h], c.push(p[s]), !a.appender || !a.removeRows) {
                            D = p[s].length;
                            for (r = 0; r < D; r++) q.append(p[s][r])
                        }
                        g.processTbody(d, q, !1)
                    }
                    a.appender && a.appender(d, c);
                    a.debug && t("Rebuilt table", v);
                    b || g.applyWidget(d);
                    f(d).trigger("sortEnd", d)
                }
            }

            function A(d) {
                var b = [], a = {}, e = 0, u = f(d).find("thead:eq(0), tfoot").children("tr"), l, p, n, k, h, q, m, j,
                    r, s;
                for (l = 0; l < u.length; l++) {
                    h = u[l].cells;
                    for (p = 0; p < h.length; p++) {
                        k = h[p];
                        q = k.parentNode.rowIndex;
                        m = q + "-" + k.cellIndex;
                        j = k.rowSpan || 1;
                        r = k.colSpan || 1;
                        "undefined" === typeof b[q] && (b[q] = []);
                        for (n = 0; n < b[q].length + 1; n++) if ("undefined" === typeof b[q][n]) {
                            s = n;
                            break
                        }
                        a[m] = s;
                        e = Math.max(s, e);
                        f(k).attr({"data-column": s});
                        for (n = q; n < q + j; n++) {
                            "undefined" === typeof b[n] && (b[n] = []);
                            m = b[n];
                            for (k = s; k < s + r; k++) m[k] = "x"
                        }
                    }
                }
                d.config.columns = e;
                var v, B, x, A, z, y, C, w = d.config;
                w.headerList = [];
                w.headerContent = [];
                w.debug && (C = new Date);
                A = w.cssIcon ? '<i class="' + w.cssIcon + '"></i>' : "";
                w.$headers = f(d).find(w.selectorHeaders).each(function (d) {
                    B = f(this);
                    v = w.headers[d];
                    w.headerContent[d] = this.innerHTML;
                    z = w.headerTemplate.replace(/\{content\}/g, this.innerHTML).replace(/\{icon\}/g, A);
                    w.onRenderTemplate && (x = w.onRenderTemplate.apply(B, [d, z])) && "string" === typeof x && (z = x);
                    this.innerHTML = '<div class="tablesorter-header-inner">' + z + "</div>";
                    w.onRenderHeader && w.onRenderHeader.apply(B, [d]);
                    this.column = a[this.parentNode.rowIndex + "-" + this.cellIndex];
                    var b = g.getData(B, v, "sortInitialOrder") || w.sortInitialOrder;
                    this.order = /^d/i.test(b) || 1 === b ? [1, 0, 2] : [0, 1, 2];
                    this.count = -1;
                    this.lockedOrder = !1;
                    y = g.getData(B, v, "lockedOrder") || !1;
                    "undefined" !== typeof y && !1 !== y && (this.order = this.lockedOrder = /^d/i.test(y) || 1 === y ? [1, 1, 1] : [0, 0, 0]);
                    B.addClass(w.cssHeader);
                    w.headerList[d] = this;
                    B.parent().addClass(w.cssHeaderRow);
                    B.attr("tabindex", 0)
                });
                E(d);
                w.debug && (t("Built headers:", C), c(w.$headers))
            }

            function y(d, b, a) {
                var e = d.config;
                e.$table.find(e.selectorRemove).remove();
                j(d);
                v(d);
                G(e.$table, b, a)
            }

            function E(d) {
                var b, a = d.config;
                a.$headers.each(function (d, c) {
                    b = "false" === g.getData(c, a.headers[d], "sorter");
                    c.sortDisabled = b;
                    f(c)[b ? "addClass" : "removeClass"]("sorter-false")
                })
            }

            function C(d) {
                var b, a, e, c = d.config, l = c.sortList, p = [c.cssAsc, c.cssDesc],
                    g = f(d).find("tfoot tr").children().removeClass(p.join(" "));
                c.$headers.removeClass(p.join(" "));
                e = l.length;
                for (b = 0; b < e; b++) if (2 !== l[b][1] && (d = c.$headers.not(".sorter-false").filter('[data-column="' + l[b][0] + '"]' + (1 === e ? ":last" : "")), d.length)) for (a = 0; a < d.length; a++) d[a].sortDisabled || (d.eq(a).addClass(p[l[b][1]]), g.length && g.filter('[data-column="' + l[b][0] + '"]').eq(a).addClass(p[l[b][1]]))
            }

            function z(d) {
                var b = 0, a = d.config, e = a.sortList, c = e.length, l = d.tBodies.length, p, g, k, h, q, m, j, r, s;
                if (!a.serverSideSorting && a.cache[0]) {
                    a.debug && (p = new Date);
                    for (k = 0; k < l; k++) q = a.cache[k].colMax, s = (m = a.cache[k].normalized) && m[0] ? m[0].length - 1 : 0, m.sort(function (l, p) {
                        for (g = 0; g < c; g++) {
                            h = e[g][0];
                            r = e[g][1];
                            j = /n/i.test(a.parsers && a.parsers[h] ? a.parsers[h].type || "" : "") ? "Numeric" : "Text";
                            j += 0 === r ? "" : "Desc";
                            /Numeric/.test(j) && a.strings[h] && (b = "boolean" === typeof a.string[a.strings[h]] ? (0 === r ? 1 : -1) * (a.string[a.strings[h]] ? -1 : 1) : a.strings[h] ? a.string[a.strings[h]] || 0 : 0);
                            var k = f.tablesorter["sort" + j](d, l[h], p[h], h, q[h], b);
                            if (k) return k
                        }
                        return l[s] - p[s]
                    });
                    a.debug && t("Sorting on " + e.toString() + " and dir " + r + " time", p)
                }
            }

            function I(d, b) {
                d.trigger("updateComplete");
                "function" === typeof b && b(d[0])
            }

            function G(d, b, a) {
                !1 !== b && !d[0].isProcessing ? d.trigger("sorton", [d[0].config.sortList, function () {
                    I(d, a)
                }]) : I(d, a)
            }

            function J(d) {
                var b = d.config, a = b.$table, e, c;
                b.$headers.find(b.selectorSort).add(b.$headers.filter(b.selectorSort)).unbind("mousedown.tablesorter mouseup.tablesorter sort.tablesorter keypress.tablesorter").bind("mousedown.tablesorter mouseup.tablesorter sort.tablesorter keypress.tablesorter", function (a, e) {
                    if (1 !== (a.which || a.button) && !/sort|keypress/.test(a.type) || "keypress" === a.type && 13 !== a.which || "mouseup" === a.type && !0 !== e && 250 < (new Date).getTime() - c) return !1;
                    if ("mousedown" === a.type) return c = (new Date).getTime(), "INPUT" === a.target.tagName ? "" : !b.cancelSelection;
                    b.delayInit && !b.cache && v(d);
                    var n = (/TH|TD/.test(this.tagName) ? f(this) : f(this).parents("th, td").filter(":first"))[0];
                    if (!n.sortDisabled) {
                        var k, h, q, m = d.config, j = !a[m.sortMultiSortKey], r = f(d);
                        r.trigger("sortStart", d);
                        n.count = a[m.sortResetKey] ? 2 : (n.count + 1) % (m.sortReset ? 3 : 2);
                        m.sortRestart && (h = n, m.$headers.each(function () {
                            if (this !== h && (j || !f(this).is("." + m.cssDesc + ",." + m.cssAsc))) this.count = -1
                        }));
                        h = n.column;
                        if (j) {
                            m.sortList = [];
                            if (null !== m.sortForce) {
                                k = m.sortForce;
                                for (q = 0; q < k.length; q++) k[q][0] !== h && m.sortList.push(k[q])
                            }
                            k = n.order[n.count];
                            if (2 > k && (m.sortList.push([h, k]), 1 < n.colSpan)) for (q = 1; q < n.colSpan; q++) m.sortList.push([h + q, k])
                        } else if (m.sortAppend && 1 < m.sortList.length && g.isValueInArray(m.sortAppend[0][0], m.sortList) && m.sortList.pop(), g.isValueInArray(h, m.sortList)) for (q = 0; q < m.sortList.length; q++) n = m.sortList[q], k = m.headerList[n[0]], n[0] === h && (n[1] = k.order[k.count], 2 === n[1] && (m.sortList.splice(q, 1), k.count = -1)); else if (k = n.order[n.count], 2 > k && (m.sortList.push([h, k]), 1 < n.colSpan)) for (q = 1; q < n.colSpan; q++) m.sortList.push([h + q, k]);
                        if (null !== m.sortAppend) {
                            k = m.sortAppend;
                            for (q = 0; q < k.length; q++) k[q][0] !== h && m.sortList.push(k[q])
                        }
                        r.trigger("sortBegin", d);
                        setTimeout(function () {
                            C(d);
                            z(d);
                            x(d)
                        }, 1)
                    }
                });
                b.cancelSelection && b.$headers.attr("unselectable", "on").bind("selectstart", !1).css({
                    "user-select": "none",
                    MozUserSelect: "none"
                });
                a.unbind("sortReset update updateRows updateCell updateAll addRows sorton appendCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave ".split(" ").join(".tablesorter ")).bind("sortReset.tablesorter", function (a) {
                    a.stopPropagation();
                    b.sortList = [];
                    C(d);
                    z(d);
                    x(d)
                }).bind("updateAll.tablesorter", function (a, b, e) {
                    a.stopPropagation();
                    g.refreshWidgets(d, !0, !0);
                    g.restoreHeaders(d);
                    A(d);
                    J(d);
                    y(d, b, e)
                }).bind("update.tablesorter updateRows.tablesorter", function (a, b, e) {
                    a.stopPropagation();
                    E(d);
                    y(d, b, e)
                }).bind("updateCell.tablesorter", function (e, c, g, k) {
                    e.stopPropagation();
                    a.find(b.selectorRemove).remove();
                    var h, q, m;
                    h = a.find("tbody");
                    e = h.index(f(c).parents("tbody").filter(":first"));
                    var u = f(c).parents("tr").filter(":first");
                    c = f(c)[0];
                    h.length && 0 <= e && (q = h.eq(e).find("tr").index(u), m = c.cellIndex, h = b.cache[e].normalized[q].length - 1, b.cache[e].row[d.config.cache[e].normalized[q][h]] = u, b.cache[e].normalized[q][m] = b.parsers[m].format(r(d, c, m), d, c, m), G(a, g, k))
                }).bind("addRows.tablesorter", function (c, g, f, k) {
                    c.stopPropagation();
                    var h = g.filter("tr").length, u = [], m = g[0].cells.length,
                        t = a.find("tbody").index(g.parents("tbody").filter(":first"));
                    b.parsers || j(d);
                    for (c = 0; c < h; c++) {
                        for (e = 0; e < m; e++) u[e] = b.parsers[e].format(r(d, g[c].cells[e], e), d, g[c].cells[e], e);
                        u.push(b.cache[t].row.length);
                        b.cache[t].row.push([g[c]]);
                        b.cache[t].normalized.push(u);
                        u = []
                    }
                    G(a, f, k)
                }).bind("sorton.tablesorter", function (b, e, c, g) {
                    b.stopPropagation();
                    a.trigger("sortStart", this);
                    var h, u, m, j = d.config;
                    b = e || j.sortList;
                    j.sortList = [];
                    f.each(b, function (a, b) {
                        h = [parseInt(b[0], 10), parseInt(b[1], 10)];
                        if (m = j.headerList[h[0]]) j.sortList.push(h), u = f.inArray(h[1], m.order), m.count = 0 <= u ? u : h[1] % (j.sortReset ? 3 : 2)
                    });
                    C(d);
                    a.trigger("sortBegin", this);
                    z(d);
                    x(d, g);
                    "function" === typeof c && c(d)
                }).bind("appendCache.tablesorter", function (a, b, e) {
                    a.stopPropagation();
                    x(d, e);
                    "function" === typeof b && b(d)
                }).bind("applyWidgetId.tablesorter", function (a, e) {
                    a.stopPropagation();
                    g.getWidgetById(e).format(d, b, b.widgetOptions)
                }).bind("applyWidgets.tablesorter", function (a, b) {
                    a.stopPropagation();
                    g.applyWidget(d, b)
                }).bind("refreshWidgets.tablesorter", function (a, b, e) {
                    a.stopPropagation();
                    g.refreshWidgets(d, b, e)
                }).bind("destroy.tablesorter", function (a, b, e) {
                    a.stopPropagation();
                    g.destroy(d, b, e)
                })
            }

            var g = this;
            g.version = "2.10.8";
            g.parsers = [];
            g.widgets = [];
            g.defaults = {
                theme: "default",
                widthFixed: !1,
                showProcessing: !1,
                headerTemplate: "{content}",
                onRenderTemplate: null,
                onRenderHeader: null,
                cancelSelection: !0,
                dateFormat: "mmddyyyy",
                sortMultiSortKey: "shiftKey",
                sortResetKey: "ctrlKey",
                usNumberFormat: !0,
                delayInit: !1,
                serverSideSorting: !1,
                headers: {},
                ignoreCase: !0,
                sortForce: null,
                sortList: [],
                sortAppend: null,
                sortInitialOrder: "asc",
                sortLocaleCompare: !1,
                sortReset: !1,
                sortRestart: !1,
                emptyTo: "bottom",
                stringTo: "max",
                textExtraction: "simple",
                textSorter: null,
                widgets: [],
                widgetOptions: {zebra: ["even", "odd"]},
                initWidgets: !0,
                initialized: null,
                tableClass: "tablesorter",
                cssAsc: "tablesorter-headerAsc",
                cssChildRow: "tablesorter-childRow",
                cssDesc: "tablesorter-headerDesc",
                cssHeader: "tablesorter-header",
                cssHeaderRow: "tablesorter-headerRow",
                cssIcon: "tablesorter-icon",
                cssInfoBlock: "tablesorter-infoOnly",
                cssProcessing: "tablesorter-processing",
                selectorHeaders: "> thead th, > thead td",
                selectorSort: "th, td",
                selectorRemove: ".remove-me",
                debug: !1,
                headerList: [],
                empties: {},
                strings: {},
                parsers: []
            };
            g.log = c;
            g.benchmark = t;
            g.construct = function (d) {
                return this.each(function () {
                    if (!this.tHead || 0 === this.tBodies.length || !0 === this.hasInitialized) return this.config && this.config.debug ? c("stopping initialization! No thead, tbody or tablesorter has already been initialized") : "";
                    var b = f(this), a = this, e, u = "", l = f.metadata;
                    a.hasInitialized = !1;
                    a.isProcessing = !0;
                    a.config = {};
                    e = f.extend(!0, a.config, g.defaults, d);
                    f.data(a, "tablesorter", e);
                    e.debug && f.data(a, "startoveralltimer", new Date);
                    e.supportsTextContent = "x" === f("<span>x</span>")[0].textContent;
                    e.supportsDataObject = 1.4 <= parseFloat(f.fn.jquery);
                    e.string = {
                        max: 1,
                        min: -1,
                        "max+": 1,
                        "max-": -1,
                        zero: 0,
                        none: 0,
                        "null": 0,
                        top: !0,
                        bottom: !1
                    };
                    /tablesorter\-/.test(b.attr("class")) || (u = "" !== e.theme ? " tablesorter-" + e.theme : "");
                    e.$table = b.addClass(e.tableClass + u);
                    e.$tbodies = b.children("tbody:not(." + e.cssInfoBlock + ")");
                    A(a);
                    if (a.config.widthFixed && 0 === f(a).find("colgroup").length) {
                        var p = f("<colgroup>"), n = f(a).width();
                        f(a.tBodies[0]).find("tr:first").children("td").each(function () {
                            p.append(f("<col>").css("width", parseInt(1E3 * (f(this).width() / n), 10) / 10 + "%"))
                        });
                        f(a).prepend(p)
                    }
                    j(a);
                    e.delayInit || v(a);
                    J(a);
                    e.supportsDataObject && "undefined" !== typeof b.data().sortlist ? e.sortList = b.data().sortlist : l && (b.metadata() && b.metadata().sortlist) && (e.sortList = b.metadata().sortlist);
                    g.applyWidget(a, !0);
                    0 < e.sortList.length ? b.trigger("sorton", [e.sortList, {}, !e.initWidgets]) : e.initWidgets && g.applyWidget(a);
                    e.showProcessing && b.unbind("sortBegin.tablesorter sortEnd.tablesorter").bind("sortBegin.tablesorter sortEnd.tablesorter", function (b) {
                        g.isProcessing(a, "sortBegin" === b.type)
                    });
                    a.hasInitialized = !0;
                    a.isProcessing = !1;
                    e.debug && g.benchmark("Overall initialization time", f.data(a, "startoveralltimer"));
                    b.trigger("tablesorter-initialized", a);
                    "function" === typeof e.initialized && e.initialized(a)
                })
            };
            g.isProcessing = function (d, b, a) {
                d = f(d);
                var e = d[0].config;
                d = a || d.find("." + e.cssHeader);
                b ? (0 < e.sortList.length && (d = d.filter(function () {
                    return this.sortDisabled ? !1 : g.isValueInArray(parseFloat(f(this).attr("data-column")), e.sortList)
                })), d.addClass(e.cssProcessing)) : d.removeClass(e.cssProcessing)
            };
            g.processTbody = function (d, b, a) {
                if (a) return d.isProcessing = !0, b.before('<span class="tablesorter-savemyplace"/>'), a = f.fn.detach ? b.detach() : b.remove();
                a = f(d).find("span.tablesorter-savemyplace");
                b.insertAfter(a);
                a.remove();
                d.isProcessing = !1
            };
            g.clearTableBody = function (d) {
                f(d)[0].config.$tbodies.empty()
            };
            g.restoreHeaders = function (d) {
                var b = d.config;
                b.$table.find(b.selectorHeaders).each(function (a) {
                    f(this).find(".tablesorter-header-inner").length && f(this).html(b.headerContent[a])
                })
            };
            g.destroy = function (d, b, a) {
                d = f(d)[0];
                if (d.hasInitialized) {
                    g.refreshWidgets(d, !0, !0);
                    var e = f(d), c = d.config, l = e.find("thead:first"),
                        p = l.find("tr." + c.cssHeaderRow).removeClass(c.cssHeaderRow),
                        n = e.find("tfoot:first > tr").children("th, td");
                    l.find("tr").not(p).remove();
                    e.removeData("tablesorter").unbind("sortReset update updateAll updateRows updateCell addRows sorton appendCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave keypress sortBegin sortEnd ".split(" ").join(".tablesorter "));
                    c.$headers.add(n).removeClass(c.cssHeader + " " + c.cssAsc + " " + c.cssDesc).removeAttr("data-column");
                    p.find(c.selectorSort).unbind("mousedown.tablesorter mouseup.tablesorter keypress.tablesorter");
                    g.restoreHeaders(d);
                    !1 !== b && e.removeClass(c.tableClass + " tablesorter-" + c.theme);
                    d.hasInitialized = !1;
                    "function" === typeof a && a(d)
                }
            };
            g.regex = [/(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi, /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/, /^0x[0-9a-f]+$/i];
            g.sortText = function (d, b, a, e) {
                if (b === a) return 0;
                var c = d.config, l = c.string[c.empties[e] || c.emptyTo], f = g.regex;
                if ("" === b && 0 !== l) return "boolean" === typeof l ? l ? -1 : 1 : -l || -1;
                if ("" === a && 0 !== l) return "boolean" === typeof l ? l ? 1 : -1 : l || 1;
                if ("function" === typeof c.textSorter) return c.textSorter(b, a, d, e);
                d = b.replace(f[0], "\\0$1\\0").replace(/\\0$/, "").replace(/^\\0/, "").split("\\0");
                e = a.replace(f[0], "\\0$1\\0").replace(/\\0$/, "").replace(/^\\0/, "").split("\\0");
                b = parseInt(b.match(f[2]), 16) || 1 !== d.length && b.match(f[1]) && Date.parse(b);
                if (a = parseInt(a.match(f[2]), 16) || b && a.match(f[1]) && Date.parse(a) || null) {
                    if (b < a) return -1;
                    if (b > a) return 1
                }
                c = Math.max(d.length, e.length);
                for (b = 0; b < c; b++) {
                    a = isNaN(d[b]) ? d[b] || 0 : parseFloat(d[b]) || 0;
                    f = isNaN(e[b]) ? e[b] || 0 : parseFloat(e[b]) || 0;
                    if (isNaN(a) !== isNaN(f)) return isNaN(a) ? 1 : -1;
                    typeof a !== typeof f && (a += "", f += "");
                    if (a < f) return -1;
                    if (a > f) return 1
                }
                return 0
            };
            g.sortTextDesc = function (d, b, a, e) {
                if (b === a) return 0;
                var c = d.config, f = c.string[c.empties[e] || c.emptyTo];
                return "" === b && 0 !== f ? "boolean" === typeof f ? f ? -1 : 1 : f || 1 : "" === a && 0 !== f ? "boolean" === typeof f ? f ? 1 : -1 : -f || -1 : "function" === typeof c.textSorter ? c.textSorter(a, b, d, e) : g.sortText(d, a, b)
            };
            g.getTextValue = function (d, b, a) {
                if (b) {
                    var c = d ? d.length : 0, g = b + a;
                    for (b = 0; b < c; b++) g += d.charCodeAt(b);
                    return a * g
                }
                return 0
            };
            g.sortNumeric = function (d, b, a, c, f, l) {
                if (b === a) return 0;
                d = d.config;
                c = d.string[d.empties[c] || d.emptyTo];
                if ("" === b && 0 !== c) return "boolean" === typeof c ? c ? -1 : 1 : -c || -1;
                if ("" === a && 0 !== c) return "boolean" === typeof c ? c ? 1 : -1 : c || 1;
                isNaN(b) && (b = g.getTextValue(b, f, l));
                isNaN(a) && (a = g.getTextValue(a, f, l));
                return b - a
            };
            g.sortNumericDesc = function (d, b, a, c, f, l) {
                if (b === a) return 0;
                d = d.config;
                c = d.string[d.empties[c] || d.emptyTo];
                if ("" === b && 0 !== c) return "boolean" === typeof c ? c ? -1 : 1 : c || 1;
                if ("" === a && 0 !== c) return "boolean" === typeof c ? c ? 1 : -1 : -c || -1;
                isNaN(b) && (b = g.getTextValue(b, f, l));
                isNaN(a) && (a = g.getTextValue(a, f, l));
                return a - b
            };
            g.characterEquivalents = {
                a: "\u00e1\u00e0\u00e2\u00e3\u00e4\u0105\u00e5",
                A: "\u00c1\u00c0\u00c2\u00c3\u00c4\u0104\u00c5",
                c: "\u00e7\u0107\u010d",
                C: "\u00c7\u0106\u010c",
                e: "\u00e9\u00e8\u00ea\u00eb\u011b\u0119",
                E: "\u00c9\u00c8\u00ca\u00cb\u011a\u0118",
                i: "\u00ed\u00ec\u0130\u00ee\u00ef\u0131",
                I: "\u00cd\u00cc\u0130\u00ce\u00cf",
                o: "\u00f3\u00f2\u00f4\u00f5\u00f6",
                O: "\u00d3\u00d2\u00d4\u00d5\u00d6",
                ss: "\u00df",
                SS: "\u1e9e",
                u: "\u00fa\u00f9\u00fb\u00fc\u016f",
                U: "\u00da\u00d9\u00db\u00dc\u016e"
            };
            g.replaceAccents = function (d) {
                var b, a = "[", c = g.characterEquivalents;
                if (!g.characterRegex) {
                    g.characterRegexArray = {};
                    for (b in c) "string" === typeof b && (a += c[b], g.characterRegexArray[b] = RegExp("[" + c[b] + "]", "g"));
                    g.characterRegex = RegExp(a + "]")
                }
                if (g.characterRegex.test(d)) for (b in c) "string" === typeof b && (d = d.replace(g.characterRegexArray[b], b));
                return d
            };
            g.isValueInArray = function (d, b) {
                var a, c = b.length;
                for (a = 0; a < c; a++) if (b[a][0] === d) return !0;
                return !1
            };
            g.addParser = function (d) {
                var b, a = g.parsers.length, c = !0;
                for (b = 0; b < a; b++) g.parsers[b].id.toLowerCase() === d.id.toLowerCase() && (c = !1);
                c && g.parsers.push(d)
            };
            g.getParserById = function (d) {
                var b, a = g.parsers.length;
                for (b = 0; b < a; b++) if (g.parsers[b].id.toLowerCase() === d.toString().toLowerCase()) return g.parsers[b];
                return !1
            };
            g.addWidget = function (d) {
                g.widgets.push(d)
            };
            g.getWidgetById = function (d) {
                var b, a, c = g.widgets.length;
                for (b = 0; b < c; b++) if ((a = g.widgets[b]) && a.hasOwnProperty("id") && a.id.toLowerCase() === d.toLowerCase()) return a
            };
            g.applyWidget = function (d, b) {
                d = f(d)[0];
                var a = d.config, c = a.widgetOptions, j = [], l, p, n;
                a.debug && (l = new Date);
                a.widgets.length && (a.widgets = f.grep(a.widgets, function (b, d) {
                    return f.inArray(b, a.widgets) === d
                }), f.each(a.widgets || [], function (a, b) {
                    if ((n = g.getWidgetById(b)) && n.id) n.priority || (n.priority = 10), j[a] = n
                }), j.sort(function (a, b) {
                    return a.priority < b.priority ? -1 : a.priority === b.priority ? 0 : 1
                }), f.each(j, function (g, h) {
                    h && (b ? (h.hasOwnProperty("options") && (c = d.config.widgetOptions = f.extend(!0, {}, h.options, c)), h.hasOwnProperty("init") && h.init(d, h, a, c)) : !b && h.hasOwnProperty("format") && h.format(d, a, c, !1))
                }));
                a.debug && (p = a.widgets.length, t("Completed " + (!0 === b ? "initializing " : "applying ") + p + " widget" + (1 !== p ? "s" : ""), l))
            };
            g.refreshWidgets = function (d, b, a) {
                d = f(d)[0];
                var e, j = d.config, l = j.widgets, p = g.widgets, n = p.length;
                for (e = 0; e < n; e++) if (p[e] && p[e].id && (b || 0 > f.inArray(p[e].id, l))) j.debug && c("Refeshing widgets: Removing " + p[e].id), p[e].hasOwnProperty("remove") && p[e].remove(d, j, j.widgetOptions);
                !0 !== a && g.applyWidget(d, b)
            };
            g.getData = function (d, b, a) {
                var c = "";
                d = f(d);
                var g, l;
                if (!d.length) return "";
                g = f.metadata ? d.metadata() : !1;
                l = " " + (d.attr("class") || "");
                "undefined" !== typeof d.data(a) || "undefined" !== typeof d.data(a.toLowerCase()) ? c += d.data(a) || d.data(a.toLowerCase()) : g && "undefined" !== typeof g[a] ? c += g[a] : b && "undefined" !== typeof b[a] ? c += b[a] : " " !== l && l.match(" " + a + "-") && (c = l.match(RegExp("\\s" + a + "-([\\w-]+)"))[1] || "");
                return f.trim(c)
            };
            g.formatFloat = function (c, b) {
                if ("string" !== typeof c || "" === c) return c;
                var a;
                c = (b && b.config ? !1 !== b.config.usNumberFormat : "undefined" !== typeof b ? b : 1) ? c.replace(/,/g, "") : c.replace(/[\s|\.]/g, "").replace(/,/g, ".");
                /^\s*\([.\d]+\)/.test(c) && (c = c.replace(/^\s*\(/, "-").replace(/\)/, ""));
                a = parseFloat(c);
                return isNaN(a) ? f.trim(c) : a
            };
            g.isDigit = function (c) {
                return isNaN(c) ? /^[\-+(]?\d+[)]?$/.test(c.toString().replace(/[,.'"\s]/g, "")) : !0
            }
        }
    });
    var j = f.tablesorter;
    f.fn.extend({tablesorter: j.construct});
    j.addParser({
        id: "text", is: function () {
            return !0
        }, format: function (c, t) {
            var r = t.config;
            c && (c = f.trim(r.ignoreCase ? c.toLocaleLowerCase() : c), c = r.sortLocaleCompare ? j.replaceAccents(c) : c);
            return c
        }, type: "text"
    });
    j.addParser({
        id: "digit", is: function (c) {
            return j.isDigit(c)
        }, format: function (c, t) {
            var r = j.formatFloat((c || "").replace(/[^\w,. \-()]/g, ""), t);
            return c && "number" === typeof r ? r : c ? f.trim(c && t.config.ignoreCase ? c.toLocaleLowerCase() : c) : c
        }, type: "numeric"
    });
    j.addParser({
        id: "currency", is: function (c) {
            return /^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/.test((c || "").replace(/[,. ]/g, ""))
        }, format: function (c, t) {
            var r = j.formatFloat((c || "").replace(/[^\w,. \-()]/g, ""), t);
            return c && "number" === typeof r ? r : c ? f.trim(c && t.config.ignoreCase ? c.toLocaleLowerCase() : c) : c
        }, type: "numeric"
    });
    j.addParser({
        id: "ipAddress", is: function (c) {
            return /^\d{1,3}[\.]\d{1,3}[\.]\d{1,3}[\.]\d{1,3}$/.test(c)
        }, format: function (c, f) {
            var r, s = c ? c.split(".") : "", v = "", x = s.length;
            for (r = 0; r < x; r++) v += ("00" + s[r]).slice(-3);
            return c ? j.formatFloat(v, f) : c
        }, type: "numeric"
    });
    j.addParser({
        id: "url", is: function (c) {
            return /^(https?|ftp|file):\/\//.test(c)
        }, format: function (c) {
            return c ? f.trim(c.replace(/(https?|ftp|file):\/\//, "")) : c
        }, type: "text"
    });
    j.addParser({
        id: "isoDate", is: function (c) {
            return /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/.test(c)
        }, format: function (c, f) {
            return c ? j.formatFloat("" !== c ? (new Date(c.replace(/-/g, "/"))).getTime() || "" : "", f) : c
        }, type: "numeric"
    });
    j.addParser({
        id: "percent", is: function (c) {
            return /(\d\s*?%|%\s*?\d)/.test(c) && 15 > c.length
        }, format: function (c, f) {
            return c ? j.formatFloat(c.replace(/%/g, ""), f) : c
        }, type: "numeric"
    });
    j.addParser({
        id: "usLongDate", is: function (c) {
            return /^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i.test(c) || /^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i.test(c)
        }, format: function (c, f) {
            return c ? j.formatFloat((new Date(c.replace(/(\S)([AP]M)$/i, "$1 $2"))).getTime() || "", f) : c
        }, type: "numeric"
    });
    j.addParser({
        id: "shortDate", is: function (c) {
            return /(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/.test((c || "").replace(/\s+/g, " ").replace(/[\-.,]/g, "/"))
        }, format: function (c, f, r, s) {
            if (c) {
                r = f.config;
                var v = r.headerList[s];
                s = v.dateFormat || j.getData(v, r.headers[s], "dateFormat") || r.dateFormat;
                c = c.replace(/\s+/g, " ").replace(/[\-.,]/g, "/");
                "mmddyyyy" === s ? c = c.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/, "$3/$1/$2") : "ddmmyyyy" === s ? c = c.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/, "$3/$2/$1") : "yyyymmdd" === s && (c = c.replace(/(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/, "$1/$2/$3"))
            }
            return c ? j.formatFloat((new Date(c)).getTime() || "", f) : c
        }, type: "numeric"
    });
    j.addParser({
        id: "time", is: function (c) {
            return /^(([0-2]?\d:[0-5]\d)|([0-1]?\d:[0-5]\d\s?([AP]M)))$/i.test(c)
        }, format: function (c, f) {
            return c ? j.formatFloat((new Date("2000/01/01 " + c.replace(/(\S)([AP]M)$/i, "$1 $2"))).getTime() || "", f) : c
        }, type: "numeric"
    });
    j.addParser({
        id: "metadata", is: function () {
            return !1
        }, format: function (c, j, r) {
            c = j.config;
            c = !c.parserMetadataName ? "sortValue" : c.parserMetadataName;
            return f(r).metadata()[c]
        }, type: "numeric"
    });
    j.addWidget({
        id: "zebra", priority: 90, format: function (c, t, r) {
            var s, v, x, A, y, E, C = RegExp(t.cssChildRow, "i"), z = t.$tbodies;
            t.debug && (y = new Date);
            for (c = 0; c < z.length; c++) s = z.eq(c), E = s.children("tr").length, 1 < E && (x = 0, s = s.children("tr:visible"), s.each(function () {
                v = f(this);
                C.test(this.className) || x++;
                A = 0 === x % 2;
                v.removeClass(r.zebra[A ? 1 : 0]).addClass(r.zebra[A ? 0 : 1])
            }));
            t.debug && j.benchmark("Applying Zebra widget", y)
        }, remove: function (c, j, r) {
            var s;
            j = j.$tbodies;
            var v = (r.zebra || ["even", "odd"]).join(" ");
            for (r = 0; r < j.length; r++) s = f.tablesorter.processTbody(c, j.eq(r), !0), s.children().removeClass(v), f.tablesorter.processTbody(c, s, !1)
        }
    })
}(jQuery);
var r = void 0, t = null;

function u(a) {
    return function () {
        return this[a]
    }
}

var x, JSON;
JSON || (JSON = {});
(function () {
    function a(b, d) {
        var e, s, k, v, g = f, i, o = d[b];
        o && typeof o === "object" && typeof o.toJSON === "function" && (o = o.toJSON(b));
        typeof n === "function" && (o = n.call(d, b, o));
        switch (typeof o) {
            case "string":
                return c(o);
            case "number":
                return isFinite(o) ? String(o) : "null";
            case "boolean":
            case "null":
                return String(o);
            case "object":
                if (!o) return "null";
                f += h;
                i = [];
                if (Object.prototype.toString.apply(o) === "[object Array]") {
                    v = o.length;
                    for (e = 0; e < v; e += 1) i[e] = a(e, o) || "null";
                    k = i.length === 0 ? "[]" : f ? "[\n" + f + i.join(",\n" + f) + "\n" +
                        g + "]" : "[" + i.join(",") + "]";
                    f = g;
                    return k
                }
                if (n && typeof n === "object") {
                    v = n.length;
                    for (e = 0; e < v; e += 1) s = n[e], typeof s === "string" && (k = a(s, o), k && i.push(c(s) + (f ? ": " : ":") + k))
                } else for (s in o) Object.hasOwnProperty.call(o, s) && (k = a(s, o), k && i.push(c(s) + (f ? ": " : ":") + k));
                k = i.length === 0 ? "{}" : f ? "{\n" + f + i.join(",\n" + f) + "\n" + g + "}" : "{" + i.join(",") + "}";
                f = g;
                return k
        }
    }

    function c(a) {
        e.lastIndex = 0;
        return e.test(a) ? '"' + a.replace(e, function (a) {
                var c = k[a];
                return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) +
            '"' : '"' + a + '"'
    }

    function b(a) {
        return a < 10 ? "0" + a : a
    }

    typeof Date.prototype.toJSON !== "function" && (Date.prototype.toJSON = function () {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + b(this.getUTCMonth() + 1) + "-" + b(this.getUTCDate()) + "T" + b(this.getUTCHours()) + ":" + b(this.getUTCMinutes()) + ":" + b(this.getUTCSeconds()) + "Z" : t
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
        return this.valueOf()
    });
    var d = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        e = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        f, h, k = {"\u0008": "\\b", "\t": "\\t", "\n": "\\n", "\u000c": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"},
        n;
    typeof JSON.stringify !== "function" && (JSON.stringify = function (c, b, d) {
        var e;
        f = "";
        h = "";
        if (typeof d === "number") for (e = 0; e < d; e += 1) h += " "; else typeof d === "string" && (h = d);
        if ((n = b) && typeof b !== "function" && (typeof b !== "object" || typeof b.length !== "number")) throw Error("JSON.stringify");
        return a("",
            {"": c})
    });
    typeof JSON.parse !== "function" && (JSON.parse = function (a, c) {
        function b(a, d) {
            var g, i, o = a[d];
            if (o && typeof o === "object") for (g in o) Object.hasOwnProperty.call(o, g) && (i = b(o, g), i !== r ? o[g] = i : delete o[g]);
            return c.call(a, d, o)
        }

        var h;
        a = String(a);
        d.lastIndex = 0;
        d.test(a) && (a = a.replace(d, function (a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return h = eval("(" + a + ")"), typeof c === "function" ? b({"": h}, "") : h;
        throw new SyntaxError("JSON.parse");
    })
})();
(function (a) {
    var c = "placeholder" in document.createElement("input");
    a.fn.placeholder = function (b) {
        if (!c) {
            if (b) {
                switch (b) {
                    case "clear":
                        this.each(function () {
                            var c = a(this);
                            (c.data("isEmpty") || c.val() == c.attr("placeholder")) && c.val("")
                        })
                }
                return this
            }
            this.each(function () {
                a(this).data("gotPlaceholder") || (a(this).focus(function () {
                    var c = a(this);
                    c.data("isEmpty") && c.val("").removeClass("placeholder")
                }).blur(function () {
                    var c = a(this);
                    (c.data("isEmpty") || !c.val().length) && c.val(c.attr("placeholder")).addClass("placeholder")
                }).keyup(function () {
                    var c =
                        a(this);
                    c.data("isEmpty", c.val().length == 0)
                }).data("gotPlaceholder", !0), (!a(this).val().length || a(this).val() == a(this).attr("placeholder")) && a(this).val(a(this).attr("placeholder")).addClass("placeholder").data("isEmpty", !0))
            })
        }
        return this
    }
})(jQuery);
(function (a) {
    function c(a) {
        return (a = /^\s*?[\+-]?(\d*\.?\d*?)\s*?$/.exec(a)) && a.length > 0 ? a[1] : !1
    }

    function b(c, b) {
        var f = !1;
        a.each(c, function (a, c) {
            f || (f = c == b)
        });
        return f
    }

    a.ya = {id: "TinySort", version: "1.0.4", defaults: {$: "asc", attr: "", uc: "start", Ic: !1}};
    a.fn.extend({
        ya: function (d, e) {
            d && typeof d != "string" && (e = d, d = t);
            var f = a.extend({}, a.ya.defaults, e), h = {};
            this.each(function (g) {
                var c = !d || d == "" ? a(this) : a(this).find(d),
                    b = f.$ == "rand" ? "" + Math.random() : f.attr == "" ? c.text() : c.attr(f.attr),
                    j = a(this).parent();
                h[j] ||
                (h[j] = {m: [], K: []});
                c.length > 0 ? h[j].m.push({m: b, Ea: a(this), K: g}) : h[j].K.push({Ea: a(this), K: g})
            });
            for (var k in h) {
                var n = h[k];
                n.m.sort(function (a, g) {
                    var b = a.m.toLowerCase ? a.m.toLowerCase() : a.m, j = g.m.toLowerCase ? g.m.toLowerCase() : g.m;
                    c(a.m) && c(g.m) && (b = parseFloat(a.m), j = parseFloat(g.m));
                    return (f.$ == "asc" ? 1 : -1) * (b < j ? -1 : b > j ? 1 : 0)
                })
            }
            var m = [];
            for (k in h) {
                var n = h[k], q = [], p = a(this).length;
                switch (f.uc) {
                    case "first":
                        a.each(n.m, function (a, g) {
                            p = Math.min(p, g.K)
                        });
                        break;
                    case "org":
                        a.each(n.m, function (a, g) {
                            q.push(g.K)
                        });
                        break;
                    case "end":
                        p = n.K.length;
                        break;
                    default:
                        p = 0
                }
                for (var s = [0, 0], w = 0; w < a(this).length; w++) {
                    var v = w >= p && w < p + n.m.length;
                    b(q, w) && (v = !0);
                    var g = (v ? n.m : n.K)[s[v ? 0 : 1]].Ea;
                    g.parent().append(g);
                    (v || !f.Ic) && m.push(g.get(0));
                    s[v ? 0 : 1]++
                }
            }
            return this.pushStack(m)
        }
    });
    a.fn.qd = a.fn.rd = a.fn.ea = a.fn.ya
})(jQuery);
(function (a) {
    var c, b, d, e;

    function f(g) {
        return a.data(g, "tooltip")
    }

    function h(g) {
        f(this).delay ? w = setTimeout(n, f(this).delay) : n();
        v = !!f(this).Id;
        a(document.body).bind("mousemove", m);
        m(g)
    }

    function k() {
        if (!a.C.S && !(this == p || !this.fb && !f(this).ia)) {
            p = this;
            s = this.fb;
            if (f(this).ia) {
                c.hide();
                var g = f(this).ia.call(this);
                g.nodeType || g.jquery ? b.empty().append(g) : b.html(g);
                b.show()
            } else if (f(this).Uc) {
                g = s.split(f(this).Uc);
                c.html(g.shift()).show();
                b.empty();
                for (var i = 0, o; o = g[i]; i++) 0 < i && b.append("<br/>"), b.append(o);
                b.Ub()
            } else c.html(s).show(), b.hide();
            f(this).$a && a(this).url() ? d.html(a(this).url().replace("http://", "")).show() : d.hide();
            e.addClass(f(this).Fa);
            h.apply(this, arguments)
        }
    }

    function n() {
        w = t;
        !a.fn.ha && f(p).H ? e.is(":animated") ? e.stop().show().fadeTo(f(p).H, p.cb) : e.is(":visible") ? e.fadeTo(f(p).H, p.cb) : e.fadeIn(f(p).H) : e.show();
        m()
    }

    function m(g) {
        if (!a.C.S && !(g && "OPTION" == g.target.tagName)) if (!v && e.is(":visible") && a(document.body).unbind("mousemove", m), t == p) a(document.body).unbind("mousemove", m); else {
            e.removeClass("viewport-right").removeClass("viewport-bottom");
            var c = e[0].offsetLeft, b = e[0].offsetTop;
            g && (c = g.pageX + f(p).left, b = g.pageY + f(p).top, g = "auto", f(p).Dd && (g = a(window).width() - c, c = "auto"), e.css({
                left: c,
                right: g,
                top: b
            }));
            var g = a(window).scrollLeft(), l = a(window).scrollTop(), j = a(window).width(), d = a(window).height(),
                h = e[0];
            g + j < h.offsetLeft + h.offsetWidth && (c -= h.offsetWidth + 20 + f(p).left, e.css({left: c + "px"}).addClass("viewport-right"));
            l + d < h.offsetTop + h.offsetHeight && (b -= h.offsetHeight + 20 + f(p).top, e.css({top: b + "px"}).addClass("viewport-bottom"))
        }
    }

    function q() {
        function g() {
            e.removeClass(c.Fa).hide().css("opacity",
                "")
        }

        if (!a.C.S) {
            w && clearTimeout(w);
            p = t;
            var c = f(this);
            !a.fn.ha && c.H ? e.is(":animated") ? e.stop().fadeTo(c.H, 0, g) : e.stop().fadeOut(c.H, g) : g()
        }
    }

    c = r;
    b = r;
    d = r;
    e = r;
    var p, s, w, v = !1;
    a.C = {
        S: !1, defaults: {delay: 200, H: !1, $a: !0, Fa: "", top: 15, left: 15, id: "tooltip"}, sd: function () {
            a.C.S = !a.C.S
        }
    };
    a.fn.extend({
        C: function (g) {
            g = a.extend({}, a.C.defaults, g);
            e || (e = a('<div id="' + g.id + '"><h3></h3><div class="body"></div><div class="url"></div></div>').appendTo(document.body).hide(), a.fn.ha && e.ha(), c = a("h3", e), b = a("div.body", e),
                d = a("div.url", e));
            return this.each(function () {
                a.data(this, "tooltip", g);
                this.cb = e.css("opacity");
                this.fb = this.title;
                a(this).removeAttr("title");
                this.alt = ""
            }).mouseover(k).mouseout(q).click(q)
        }, Ub: function () {
            return this.each(function () {
                a(this)[a(this).html() ? "show" : "hide"]()
            })
        }, url: function () {
            return this.attr("href") || this.attr("src")
        }
    })
})(jQuery);
jQuery.noConflict();
window.WebFontConfig = {
    custom: {families: "UniversLTW01-47LightCn,UniversLTW01-55Oblique,Univers LT W01 55 Roman,UniversLTW01-57Condense 723821,UniversLTW01-59UltraCn,Univers LT W01 65 Bold,UniversLTW01-67BoldCn".split(",")},
    active: function () {
        typeof GS.d.wa === "function" && GS.d.wa()
    }
};
var GS = window.GS || {};
GS.zd = window.GS.jsRoot && window.GS.jsRoot !== "undefined" ? window["GS.jsRoot"] : "/";
GS.a = function (a) {
    return Page = {
        Q: [], N: {}, c: function (a, b) {
            if (!(a == "*" || "className" in a || "id" in a) && b) throw Error("Parameters missing for GS.Page.register");
            var d = "", d = /:not\((.*?)\)/;
            if (d.test(a.className)) for (var e = d.exec(a.className)[1].split(","), f = 0; f < e.length; f++) d = "." + e[f], Page.N[d] = Page.N[d] || [], Page.N[d].push(b); else d = a == "*" ? "*" : a.className ? "." + a.className : "#" + a.id, Page.Q[d] = Page.Q[d] || [], Page.Q[d].push(b)
        }, Jc: function () {
            Page.da(Page.Q["*"] || []);
            for (var c = a(document.body).attr("class"), c = c ?
                c.split(" ") : [], b = 0, d = c.length; b < d; b++) Page.da(Page.Q["." + c[b]] || []), delete Page.N["." + c[b]];
            (c = a(document.body).attr("id")) && Page.da(Page.Q["#" + c] || []);
            var c = [], e;
            for (e in Page.N) c = c.concat(Page.N[e]);
            Page.da(c)
        }, da: function (a) {
            if (a) for (var b = 0, d = a.length; b < d; b++) if (a[b] instanceof Function) a[b](); else throw Error("Not a registered function");
        }
    }
}(jQuery);
window.GS = GS;
window.GS.Page = GS.a;
window.GS.Page.register = GS.a.c;
jQuery(function () {
    GS.a.Jc()
});
GS = GS || {};
(function (a) {
    GS.kb = function () {
        return {
            Fd: 9, xd: function (c) {
                c = c instanceof jQuery ? c : a(c);
                if (c.hasClass("gs-taken-over")) return !1;
                var b = !!c.hasClass("gs-slider-vertical"),
                    d = a('<div class="gs-slider-wrapper"><div class="gs-slider-bar"></div><div class="gs-slider-bar-handle"></div></div>');
                c.before(d);
                b && d.addClass("gs-slider-vertical");
                d.append(c);
                d.click(function (c) {
                    var d = Math.round, h = a(this).children(".gs-slider-bar"), k = a(this).children("input.gs-slider"),
                        n = c.pageX - a(this).offset().left, m = c.pageY - a(this).offset().top,
                        q = a(this).width(), p = a(this).height(), c = d((b ? m : n) * 100 / (b ? p : q)),
                        d = d((b ? m : n) * k.attr("max") / (b ? p : q));
                    GS.MediaComponent.Jd(d);
                    h.css(b ? "height" : "width", (b ? 100 - c : c) + "%");
                    k.val(d);
                    k.change();
                    GS.kb.Eb(h)
                });
                c.addClass("gs-taken-over")
            }, Md: function (c) {
                if (!a(c).hasClass("video-time-scroll")) {
                    var c = c instanceof jQuery ? c : a(c), b = !!c.hasClass("gs-slider-vertical"),
                        d = c.siblings(".gs-slider-bar"), e = c.attr("max"), c = c.attr("value");
                    d.css(b ? "height" : "width", 100 * c / e + "%");
                    d.animate({Gd: 100 * c / e + "%"}, 2E3, function () {
                    })
                }
            },
            Eb: function (c) {
                var c = c instanceof jQuery ? c : a(c), b = c.css("-webkit-transform");
                c.css("-webkit-transform", "scale(1)");
                c.css("-webkit-transform", b)
            }
        }
    }()
})(jQuery);
GS = window.GS || {};
GS.d = function (a, c, b) {
    GS.d = function () {
        var d = !1, e = t, f = c.GS.navURL;
        this.u = function (a) {
            d = a
        };
        this.Fb = function () {
            return d
        };
        this.v = function () {
            return "ontouchstart" in c && /mobi/i.test(c.navigator.userAgent) ? !0 : !1
        };
        this.Tc = function () {
            var a = decodeURIComponent((/[?|&]view=([^&;]+?)(&|#|;|$)/.exec(location.search) || [, ""])[1].replace(/\+/g, "%20")) || !1;
            a || (a = (a = b.cookie.match("(?:^|;)\\s*gsView=([^;]*)")) ? decodeURIComponent(a[1]) : !1);
            a == "mobile" ? b.cookie = "gsView=mobile; path=/" : (b.cookie = "gsView=desktop; path=/", c.gscq_isMobile =
                !1)
        };
        this.dc = function () {
            a("#main-nav").load(f + "?view=desktop ul#marketing-nav", function () {
                a("#sub-nav").load(f + "?view=desktop ul#audience-nav", function () {
                    a("#main-nav > ul > li, #sub-nav > ul > li.wideNav:not(#worldwideNav)").append('<span class="navCloser"></span>');
                    var b = c.location.pathname.substring(c.location.pathname.indexOf("/") + 1);
                    try {
                        c.GS.Navigation.parentPage && c.GS.Navigation.parentPage !== "undefined" && (b = c.GS.Navigation.parentPage)
                    } catch (d) {
                    }
                    var e = a('#main-nav > ul > li > a[href$="' + b + '"], #sub-nav > ul > li > a[href$="' +
                        b + '"]');
                    e.each(function () {
                        a(this).wrap("<strong></strong>")
                    });
                    a("body.top-level").length > 0 && e.parents("li").first().addClass("suppressNav");
                    a('header a[href="' + b + '"]').parents("li").each(function () {
                        a(this).children("a.toplevel").addClass("active").wrap("<strong></strong>")
                    });
                    a("#main-nav > ul > li").size();
                    GS.Sitewide.D(GS.d.wa);
                    a("#main-nav ul li a").each(function () {
                        var c = [], b = [];
                        a(this).parents("li").each(function () {
                            c.push(a(this).index() + 1);
                            GS.Sitewide.A && b.push(GS.Sitewide.A(a("a:first", this).text()))
                        });
                        var d = {type: "navigation", title: b.reverse().join(":"), position: c.reverse().join(":")};
                        GS.Sitewide.g && a(this).data("analytics", d).bind("click", function (c) {
                            GS.Sitewide.g(c, a(this).data("analytics"))
                        })
                    });
                    a("#main-nav > ul > li > a").each(function () {
                        a(this).data("analytics").type = "navigation-slide"
                    });
                    var f = a("#main-nav > ul > li").length;
                    a("#sub-nav ul li a").each(function () {
                        var c = [], b = [];
                        a(this).parents("li").each(function () {
                            a(this).hasClass("sidebyside") ? a(this).index() != 0 && a(this).prevAll("li.sidebyside").each(function () {
                                c[c.length -
                                1] += a("li", this).length
                            }) : (GS.Sitewide.A && b.push(GS.Sitewide.A(a("a:first", this).text())), c.push(a(this).index() + 1))
                        });
                        c = c.reverse();
                        c[0] += f;
                        var d = {type: "navigation", title: b.reverse().join(":"), position: c.join(":")};
                        a(this).data("analytics", d).bind("click", function (c) {
                            GS.Sitewide.g(c, a(this).data("analytics"))
                        })
                    });
                    a("ul#audience-nav > li.wideNav.hasTout").each(function () {
                        a("a.toplevel", a(this)).text() == "Worldwide" && a(this).find("li.has-children ul li a").each(function () {
                            a(this).attr("href").indexOf("/locations/") !=
                            -1 && a(this).attr("href", a(this).attr("href") + "#" + a(this).text())
                        })
                    })
                })
            });
            a("body").on({
                "mouseenter focusin": function () {
                    GS.d.v() || GS.d.u(!0)
                }, Hd: function () {
                    GS.d.u(!0)
                }
            }, "#main-nav > li > a, #sub-nav > ul > li > a, #main-nav > li > span.linkless, #sub-nav > ul > li > span.linkless").on({
                touchstart: function () {
                    var c = a(this).parents("#sub-nav").size() > 0 && a(this).parents("li").size() == 1 ? "toplevel-right" : a(this).parents("#main-nav").size() > 0 && a(this).parents("li").size() == 1 ? "toplevel" : "";
                    c == "" || a(this).closest("li").find("ul:first").children(":not(:has(.edit_dots_marker))").size() >
                    0 ? (a.data(this, "hover", !0), GS.d.u(!0), GS.d.J(this, c), a(this).closest("li").hasClass("has-children") ? GS.d.u(!1) : GS.d.u(!0)) : (a("#sub-nav li.active").removeClass("active"), a("#main-nav li.active").removeClass("active"))
                }, "mouseenter focusin": function () {
                    var c = a(this).parents("#sub-nav").size() > 0 && a(this).parents("li").size() == 1 ? "toplevel-right" : a(this).parents("#main-nav").size() > 0 && a(this).parents("li").size() == 1 ? "toplevel" : "";
                    c == "" || a(this).closest("li").find("ul:first").children(":not(:has(.edit_dots_marker))").size() >
                    0 ? GS.d.v() || (a.data(this, "hover", !0), GS.d.u(!0), GS.d.J(this, c)) : GS.d.v() || (a("#sub-nav li.active").removeClass("active"), a("#main-nav li.active").removeClass("active"))
                }, "mouseleave focusout": function () {
                    GS.d.v() || (a.data(this, "hover", !1), GS.d.u(!0))
                }, click: function (c) {
                    GS.d.v() ? (a(c.target).closest("li").hasClass("has-children") || a(c.target).hasClass("toplevel")) && a(c.target).closest("li").find("ul li").length && c.preventDefault() : GS.d.u(!1)
                }
            }, "#main-nav li a, #sub-nav li a, #main-nav li span.linkless, #sub-nav li span.linkless").on({
                hd: function (c) {
                    a(this).parent().hasClass("active") ||
                    (a(c.target).closest("li").find("ul li").length && (c.preventDefault(), a.data(this, "hover", !0)), GS.d.u(!0));
                    GS.d.J(this, "toplevel")
                }, "mouseenter focusin": function () {
                    GS.d.v() || (a.data(this, "hover", !0), GS.d.J(this, "toplevel"), a("#main-nav a.toplevel").addClass("expandHitArea"))
                }, "mouseleave focusout": function () {
                    GS.d.v() || (a.data(this, "hover", !1), setTimeout(function () {
                        a("#main-nav li.active a.toplevel").length == 0 && a("#main-nav a.toplevel").removeClass("expandHitArea")
                    }, 200))
                }
            }, "#main-nav ul li a.toplevel").on("touchstart",
                "#main-nav ul li.active a.toplevel", function () {
                    GS.d.u(!1);
                    return !0
                }).on({
                hd: function (c) {
                    a(c.target).closest("li").find("ul li").length && (c.preventDefault(), a.data(this, "hover", !0));
                    GS.d.u(!0);
                    GS.d.J(this, "toplevel-right")
                }, "mouseenter focusin": function () {
                    GS.d.v() || GS.d.J(this, "toplevel-right")
                }, click: function (c) {
                    GS.d.v() ? a(c.target).closest("li").find("ul li").length && c.preventDefault() : GS.d.J(this, "toplevel-right")
                }
            }, "#sub-nav li a.toplevel").on("touchstart", "#sub-nav ul li.active a.toplevel", function () {
                GS.d.u(!1);
                a(this).click();
                return !0
            })
        };
        this.J = function (c, b) {
            e && clearTimeout(e);
            var d = a(c), b = b || "";
            e = setTimeout(function () {
                if (!d.data("hover")) return !1;
                GS.d.Fb() && !GS.d.v() && a("#main-nav li, #sub-nav li").each(function () {
                    a(this).removeClass("active").css({"background-color": "transparent"});
                    d.parents("li").addClass("active")
                });
                GS.d.v() && a("#main-nav li, #sub-nav li").each(function () {
                    a(this).removeClass("active").css({"background-color": "transparent"});
                    d.parents("li").addClass("active")
                })
            }, b === "toplevel-right" ?
                200 : b !== "toplevel" ? 40 : 200)
        };
        this.X = function () {
            a("#main-nav li, #sub-nav li").removeClass("active");
            a("#main-nav a.toplevel").removeClass("expandHitArea")
        };
        this.lc = function () {
            a("body").on("keydown", "#wrapper", function (c) {
                c.which == 9 && a(c.target)[0] == a("#loginNav > ul >li").last().find("li").last().find("a")[0] && GS.d.X()
            }).on({
                mouseleave: function () {
                    GS.d.X()
                }, keydown: function (b) {
                    var d = b.which;
                    a(b.target).closest("ul").children("li").index(a(b.target).parent("li"));
                    a(b.target).closest("ul").children("li");
                    (d == 27 || d == 88) && GS.d.X();
                    d == 37 && (a(b.target).hasClass("toplevel") ? a(b.target).parent("li").prev("li").length > 0 && a(b.target).parent("li").prev("li").find("a").first().focus() : a(b.target).parent("li").parent("ul").hasClass("narrowRight") ? a(b.target).parent("li").parent("ul").siblings("ul.narrowLeft").children("li").first().find("a").first().focus() : a(b.target).parent("li").parent("ul").parent("li").hasClass("sidebyside") ? a(b.target).parent("li").parent("ul").parent("li").siblings("li.sidebyside").children("ul").children("li").first().find("a").first().focus() :
                        a(b.target).parent().parent().closest("li").find("a").first().focus());
                    d == 38 && (b.preventDefault(), a(b.target).parent("li").parent("ul").children("li").first().find("a").first()[0] == a(b.target)[0] ? a(b.target).parent("li").parent("ul").parent("li").hasClass("sidebyside") ? a("#loginNav ul li.sidebyside")[0] == a(b.target).parent("li").parent("ul").parent("li")[0] ? a("#loginNav").find("a").first().focus() : a(b.target).parent("li").parent("ul").parent("li").prev("li").children("ul").children("li").find("a").last().focus() :
                        a(b.target).parent("li").parent("ul").hasClass("narrowRight") ? a(b.target).parent("li").parent("ul").prev("ul").children("li").last().find("a").first().focus() : a(b.target).parent("li").parent("ul").siblings("p")[0] == a(b.target).parent("li").parent("ul").prev()[0] ? a(b.target).parent("li").parent("ul").siblings("p").find("a").first().focus() : a(b.target).parent("li").parent("ul").siblings("a").first().focus() : a(b.target).parent("p").parent("section").siblings("a").hasClass("toplevel") ? a(b.target).parent("p").parent("section").siblings("a").focus() :
                        a(b.target).hasClass("toplevel") || a(b.target).parent().prev().find("a").first().focus());
                    if (d == 39) a(b.target).parent("li").hasClass("has-children") ? a(b.target).siblings("ul").first().children("li").first().find("a").first().focus() : a(b.target).hasClass("toplevel") ? a(b.target).parent("li").next("li").length > 0 ? a(b.target).parent("li").next("li").find("a").first().focus() : (a(b.target).parent("li").parent("ul").parent().next().find("input").first().focus(), GS.d.X()) : a(b.target).parent("li").parent("ul").hasClass("narrowLeft") ?
                        a(b.target).parent("li").parent("ul").siblings("ul.narrowRight").children("li").first().find("a").first().focus() : a(b.target).parent("li").parent("ul").parent("li").hasClass("sidebyside") ? a(b.target).parent("li").parent("ul").parent("li").siblings("li.sidebyside").children("ul").children("li").first().find("a").first().focus() : c.location = b.target;
                    d == 40 && (b.preventDefault(), a(b.target).hasClass("toplevel") ? a(b.target).siblings("section")[0] == a(b.target).next()[0] ? a(b.target).next().children("p").find("a").first().focus() :
                        a(b.target).siblings("ul").first().children("li").first().find("a").first().focus() : a(b.target).parent("li").parent("ul").parent("li").hasClass("sidebyside") && a(b.target).parent("li").parent("ul").children("li").last().find("a").first()[0] == a(b.target)[0] ? a("#loginNav ul li.sidebyside")[0] == a(b.target).parent("li").parent("ul").parent("li")[0] && a(b.target).parent("li").parent("ul").parent("li").next("li").children("ul").children("li").find("a").first().focus() : a(b.target).parent("li").parent("ul").hasClass("narrowLeft") &&
                    a(b.target).parent("li").parent("ul").children("li").find("a").last()[0] == a(b.target)[0] ? a(b.target).parent("li").parent("ul").next("ul").children("li").first().find("a").first().focus() : a(b.target).parent().next().find("a").first().focus())
                }
            }, "#main-nav, #sub-nav").on("click", "span.navCloser", function () {
                GS.d.X()
            }).on({
                    mouseenter: function () {
                        a("#main-nav>ul>li").each(function () {
                            a(this).find("div.pullquote").first().css("z-index", "511")
                        })
                    }, mouseleave: function () {
                        a(".suppressNav").removeClass("suppressNav")
                    }
                },
                "#main-nav > ul > li").on({
                "mouseenter mouseover focusin": function () {
                    a(this).closest("ul").siblings("div.pullquote").css("z-index", "510")
                }, "mouseleave mouseout focusout": function () {
                    var c = this;
                    setTimeout(function () {
                        a(c).closest("ul").find("li.active").length < 1 && a(c).parent().siblings().find("ul:visible").length < 1 && a(c).closest("ul").siblings("div.pullquote").css("z-index", "511")
                    }, 500)
                }
            }, "#main-nav > ul > li > ul > li > a, #main-nav > ul > li > ul > li > strong > a").on("mouseleave", "#sub-nav > ul > li",
                function () {
                    a(".suppressNav").removeClass("suppressNav")
                })
        };
        this.wa = function () {
            a("#sub-nav > ul > li").each(function () {
                if (!a(this).hasClass("wideNav")) {
                    var c = a(this).outerWidth();
                    a(this).find("ul").each(function () {
                        a(this).css("left", (a(this).innerWidth() - c) / 2 * -1)
                    })
                }
            })
        };
        this.td = function () {
            a(b).ready(function () {
                GS.Geo.Bd && a("#worldwideNav section ul").addClass("has-local-content")
            })
        };
        this.cc = function () {
            function c(d) {
                var e = {};
                a.each(d, function (c, d) {
                    var f = {};
                    if (d.tagName === "UL") return e.data = d.children;
                    d.childNodes.length > 0 && a(d.childNodes).each(function (a, g) {
                        if (g.className === "toplevel") f.name = g.innerText, f.link = g.href;
                        g.nodeName === "UL" && (e[f.name] = {Ac: b(g.children), link: f.link})
                    })
                });
                return e
            }

            function b(c) {
                var d = [];
                a.each(c, function (c, b) {
                    a(b).is("LI") && d.push(b)
                });
                return d
            }

            function d(c, b, e) {
                var f;
                a.each(c, function (a, c) {
                    if (c[b] === e) return f = c.childNodes
                });
                return f
            }

            a.ajax({url: f + "?view=desktop #main-nav"}).then(function (b) {
                var e = {}, f = a.parseHTML(b).filter(function (a) {
                        return a.nodeName === "DIV"
                    }), k =
                        d(f[0].children, "tagName", "HEADER"), k = d(k, "tagName", "SECTION"),
                    f = d(f[0].children, "tagName", "SECTION"), f = d(f, "className", "sitemap"),
                    f = d(f, "id", "marketing-nav");
                e.marketingNav = c(f);
                e.socialIcons = c(k);
                e.worldwideNav = a(b).find("li#worldwideNav > a.toplevel");
                b = a.parseHTML(b).filter(function (a) {
                    return a.nodeName === "DIV" && a.id === "wrapper"
                });
                e.contentManagedNodes = a(b).children("section.content").find("li.footer-menu > ul");
                return e
            }).then(function (c) {
                a("footer").addClass("clearfix footer-skin");
                a("footer").append("<section></section>");
                a("body.full-width").length && a("footer").addClass("full-width");
                var b = a("footer ul:first-child").detach(), d = c.marketingNav, e = c.socialIcons,
                    c = c.contentManagedNodes;
                a(Object.keys(d).reverse()).each(function (c, b) {
                    if (b === "undefined") return b;
                    a("footer > section").prepend('<nav class="onlyDesktop"><h6><a href="' + d[b].link + '">' + b + "</a></h6></nav>");
                    d[b].Ac.forEach(function (c) {
                        a.each(c, function (c, g) {
                            c === "firstElementChild" && a("footer > section nav:first").append(g)
                        })
                    })
                });
                a("footer > section").prepend("<nav />");
                c[0] && a(c[0]).children().each(function (c, b) {
                    a(b).children().each(function (c, b) {
                        var o = /((http|https):\/\/)?(www\.)?marcus\..*/i;
                        if (a(b).is("a")) {
                            var d = o.test(b.href) ? ' rel="nofollow"' : "";
                            a('<h6><a href="' + b.href + '"' + d + ">" + b.innerHTML + "</a></h6>").appendTo("footer > section nav:first")
                        }
                        a(b).is("ul") && a(b).children().length && (a("footer > section nav:first h6:last").addClass("noSpace"), a(b).children().find("a").each(function (c, b) {
                            o.test(b.href) && a(b).attr("rel", "nofollow")
                        }), a(b).children().find("a").addClass("blank").insertAfter("footer > section nav:first h6:last"))
                    })
                });
                a('footer section nav h6:contains("Login")').remove();
                a("footer > section").append('<nav class="socialIcons"/>');
                a(e.data).each(function (c, b) {
                    if (b.className === "twitter") {
                        var g = a(b).find("a:first").attr("class", "social-button twitter");
                        a("footer > section nav.socialIcons").append(a(g).attr("href", "https://twitter.com/goldmansachs"))
                    } else {
                        var g = a(b.children[0]).unwrap(), i = !(g.text().indexOf("gplus") > 1) ? g.text() : "google";
                        g.addClass("social-button " + i);
                        a("footer > section nav.socialIcons").append(g)
                    }
                });
                a("footer.footer-skin > section > nav").find('a:contains("`")').each(function (c, b) {
                    var g = a(b).html().replace(/(?=(?:[^`]*`[^`]*`)*[^`]*$)(`)(.*?`|)(?=.*?(?:`|$))/g, "<i>$1$2</i>");
                    a(b).html(g)
                });
                a("footer > section").append('<nav class="legalLinks">');
                a(b[0].children).each(function (c, b) {
                    if (b.innerText.indexOf("Mobile View") > -1) {
                        var g = a(b).find("a:first")[0].href.replace("/sitemap", ""),
                            i = a(b).find("a:first").removeAttr("href");
                        a("footer > section nav.legalLinks").append(a(i).attr("href", g))
                    } else a("footer > section nav.legalLinks").append(a(b).find("a:first"))
                });
                b = "<span>&copy;</span> " + (new Date).getFullYear() + " Goldman Sachs";
                a("footer").find("p").addClass("legal").html(b).appendTo("footer section > nav.legalLinks");
                a("footer nav.legalLinks a#learnMore").text("Security")
            }).then(function () {
                var b;
                a("header section.social-icons").length > 0 ? a("header section.social-icons").detach().each(function () {
                    a(this).children().each(function (c, d) {
                        b = a(d).children().filter(".twitter")
                    })
                }) : a("header section.social-connect").detach().each(function () {
                    a(this).children().each(function (c,
                                                      d) {
                        b = a(d).children().filter(".twitter")
                    })
                });
                a("footer > section > nav.socialIcons > a.twitter").replaceWith(a(b));
                a('<a href="https://www.facebook.com/goldmansachs/" class="social-button facebook"><div>facebook</div></a>').insertBefore(a("footer > section > nav.socialIcons > a.social-button.linkedin"));
                a('<a href="http://www.goldmansachs.com/worldwide/china/wechat-qr-code.jpg" class="social-button wechat"><div>wechat</div></a>').insertAfter(a("footer > section > nav.socialIcons > a.youtube"));
                a("header nav#skiplinks").attr("tabindex",
                    "-1");
                a("footer.footer-skin > section > nav").find('p:contains("Goldman Sachs")').each(function (b, c) {
                    var d = a(c).html().replace(/\s/g, "&nbsp;");
                    a(c).html(d)
                })
            })
        }
    };
    return new GS.d
}(jQuery, this, this.document);
GS.a.c("*", GS.d.Tc);
GS.a.c("*", GS.d.lc);
GS.a.c("*", GS.d.dc);
GS.a.c({className: "interim-footer"}, GS.d.cc);
GS = window.GS || {};
gsAnalytics = window.gsAnalytics || {};
if (typeof gsAnalytics.handleSidebarToutImpression === "undefined") gsAnalytics.handleSidebarToutImpression = function () {
};
GS.Sitewide = function (a, c, b, d) {
    GS.Sitewide = function () {
        function e() {
            v = !0
        }

        function f() {
            k("trackScroll") && (GS.Sitewide.hb(), (GS.Sitewide.pageFootPrint.maxLoc || GS.Sitewide.pageFootPrint.maxLoc === 0) && gsAnalytics.trackScroll(GS.Sitewide.pageFootPrint.maxLoc))
        }

        function h(b) {
            if (k("handleHeaderFooterNav")) {
                var c, d = b.target.activeElement, b = a(d).parentsUntil("body").filter(function (a, b) {
                    return b.nodeName == "BODY" || b.nodeName !== "HTML"
                }).length < 1, l = a(d).parentsUntil("footer").filter(function (a, b) {
                    return b.nodeName ==
                        "BODY"
                }).length < 1, j = a(d).parentsUntil("header").filter(function (a, b) {
                    return b.nodeName == "BODY"
                }).length < 1;
                l && !b && (c = a(d).parent().is("H6") ? "Footer: " + d.text : "Footer: " + a(d).siblings("H6").text() + ": " + d.text, gsAnalytics.handleHeaderFooterNav(d, c));
                j && !b && (a(d).hasClass("toplevel") ? c = "Header: " + d.text : a(d).parentsUntil("nav").filter(function (b, g) {
                    var j = a(g).find("li.active a.toplevel").text(),
                        l = a(d).closest("li.has-children").find("> a").text();
                    j.length && (c = l.length ? "Header: " + j + ": " + l + ": " + d.text :
                        "Header: " + j + ": " + d.text)
                }), gsAnalytics.handleHeaderFooterNav(d, c))
            }
        }

        function k(a) {
            return typeof c.gsAnalytics == "object" && typeof c.gsAnalytics[a] == "function"
        }

        function n(a, b) {
            a.hover(function () {
                b.show()
            }, function () {
                b.hide()
            })
        }

        var m = [], q = t, p = b.cookie.match("(?:^|;)\\s*gsInet=([^;]*)"),
            s = b.cookie.match("(?:^|;)\\s*gsGlobalNav=([^;]*)");
        this.Cd = -1;
        this.context = {region: GS.regionContext || !1, division: GS.divisionContext || !1};
        this.Ta = "/a/data/jobs/";
        this.$b = "search.html";
        this.Qa = c.location.hostname == "www.goldmansachs.com";
        this.pc = function () {
            for (var c = b.URL.substring(b.URL.lastIndexOf("/") + 1, b.URL.indexOf(".html")).split("-"), i = a("#filter_all"), d = a("#all"), l = 0; l < c.length; l++) {
                var j = c[l];
                a(".regionSelect li a").each(function () {
                    j == GS.Sitewide.L(a(this).attr("class")) && (a(this).parent().addClass("selected"), i.parent().removeClass("selected"))
                });
                a(".divisionSelect li a").each(function () {
                    j == GS.Sitewide.L(a(this).attr("class")) && (a(this).parent().addClass("selected"), d.parent().removeClass("selected"))
                })
            }
        };
        this.zb = function () {
            q =
                a("body").innerWidth()
        };
        GS.isInternalUser = !1;
        this.Pb = function () {
            if (GS.userPromise) return GS.userPromise;
            var g = a.Deferred();
            GS.userPromise = g.promise();
            if (p) return GS.isInternalUser = p[1] == "pass" ? !0 : !1, g.resolve(), GS.userPromise;
            var i = b.createElement("SCRIPT");
            i.type = "text/javascript";
            i.src = "http://home.web.gs.com/inettag.js";
            c.GoldmanSachs = c.GoldmanSachs || {};
            c.GoldmanSachs._inet = function () {
                try {
                    GS.isInternalUser = !0;
                    g.resolve();
                    var a = new Date;
                    a.setTime(a.getTime() + 31536E6);
                    b.cookie = "gsInet=pass; path=/; expires=" +
                        a.toGMTString();
                    i.parentNode.removeChild(i)
                } catch (c) {
                }
            };
            b.getElementsByTagName("head")[0].appendChild(i);
            setTimeout(function () {
                try {
                    if (!GS.isInternalUser) {
                        i.parentNode.removeChild(i);
                        var a = new Date;
                        a.setTime(a.getTime() + 31536E6);
                        b.cookie = "gsInet=fail; path=/; expires=" + a.toGMTString()
                    }
                    g.resolve()
                } catch (c) {
                    g.resolve()
                }
            }, 500);
            return GS.userPromise.promise()
        };
        this.userPromise = this.Pb();
        this.Yb = function () {
            return function () {
                if (b.documentMode === 11) {
                    var a = b.getElementsByTagName("head")[0], c = b.createElement("link");
                    c.type = "text/css";
                    c.href = "/css/gs.browser.ie.11.css";
                    c.rel = "stylesheet";
                    c.media = "screen,print";
                    a.appendChild(c)
                }
            }()
        };
        this.nb = function () {
            function b() {
            }

            Modernizr.mq("screen and (min-width: 10px)") || (b = function () {
                var b = a("body").innerWidth() > 1230;
                a("body").toggleClass("view1280", b);
                a("body").toggleClass("view1024", !b)
            }, a('link[href$="gs.responsivedesign.css"]').length == 0 && a.get("/css/gs.responsivedesign.css", function (b) {
                a('<style type="text/css"></style>').html(b).appendTo("head")
            }),
                GS.Sitewide.D(b));
            return b
        };
        this.D = function (a) {
            a();
            GS.Sitewide.fa(a)
        };
        this.ec = function () {
            var b = a("header section.social-connect"), c = a("footer section.social-connect");
            c.length && (b.length ? c.remove() : c.insertBefore("header nav#sub-nav"))
        };
        this.fa = function (a) {
            _.contains(m, a) || m.push(a)
        };
        var w = _.debounce(function () {
            var b = a("body").innerWidth();
            q != b && (q = b, a.each(m, function () {
                this()
            }));
            GS.MediaComponent && GS.MediaComponent.updateMediaComponent()
        }, 5);
        this.pd = function () {
            a(c).on("resize", w)
        };
        this.Ka = function (b) {
            ((hitlink =
                a(b).find("a.hitLink:first").attr("href")) || a(b).find("a:first").attr("href")) && a(b).css("cursor", "pointer")
        };
        this.pulseOpacityOn = function (b, c) {
            (c ? a(b).find(c) : a(b)).animate({opacity: 0.75}, 400, function () {
                a(this).animate({opacity: 1}, 250, function () {
                    a(this).css("opacity", "")
                })
            })
        };
        this.pulseOpacityOff = function (b, c) {
            (c ? a(b).find(c) : a(b)).stop().css("opacity", "1").css("opacity", "")
        };
        this.Sb = function () {
            a("ul.faqs li div").hide()
        };
        this.Ec = function () {
            if (!a("body").hasClass("allowIframe") && top.location != self.location) top.location =
                self.location.href
        };
        this.Fc = function () {
            var b = "/security/index.html";
            /(.*)localhost|desktop[.]services|megakiwiqa[.]web|uat[.]pubweb|elm[.]site[.]gs|pubweb-kiwi[.]web(.*)/i.test(location.href) && (b = "/pubweb.gs/pages/security/index");
            typeof GS.Geo == "object" && GS.Geo.region && GS.Geo.region !== "" && GS.Geo.region === "emea" ? a('<a id="learnMore" href="' + b + '">Security</a>').insertBefore("nav#sub-nav") : a("ul#footer-links").append('<li><a id="learnMore" href="' + b + '">Security</a></li>')
        };
        this.wb = function () {
            function b(c) {
                function d(j) {
                    a("body").off("click.assignClickArea");
                    j.originalClickEvent = c;
                    var l = a(j).attr("target");
                    (c.ctrlKey || c.shiftKey) && a(j).attr("target", "_blank");
                    j.click();
                    l ? a(j).attr("target", l) : a(j).removeAttr("target");
                    a("body").on("click.assignClickArea", ".hitArea:not(.twitter)", b)
                }

                if (a(c.target).is("a[href]")) return !0; else if (a(c.target).parentsUntil(".hitArea", "a[href]").length > 0) return !0; else {
                    var l = a(this).find("a.hitLink[href]:first");
                    l.length > 0 ? d(l[0]) : (l = a(this).find("a[href]:first"), l.length > 0 && d(l[0]))
                }
            }

            a("body").on("mouseenter", ".hitArea", function () {
                ((hitlink =
                    a(this).find("a.hitLink:first").attr("href")) || a(this).find("a:first").attr("href")) && a(this).css("cursor", "pointer")
            });
            a("body").on("click.assignClickArea", ".hitArea", b)
        };
        this.oc = function () {
            a("body").on({
                mouseenter: function () {
                    GS.Sitewide.pulseOpacityOn(this);
                    GS.Sitewide.Ka(this)
                }, mouseleave: function () {
                    GS.Sitewide.pulseOpacityOff(this)
                }
            }, ".quickLinks li a,.pulseText");
            a("body").on({
                mouseenter: function () {
                    GS.Sitewide.pulseOpacityOn(this, "img");
                    GS.Sitewide.Ka(this)
                }, mouseleave: function () {
                    GS.Sitewide.pulseOpacityOff(this,
                        "img")
                }
            }, ".featuredItems article,.homepage-grid article:not(.no-pulse),.content-carousel-item.meet-our-people-bkg-type.hitArea,.quickLinks ul li.quickBrowse h3 a,.mediaComponentThumbs article,.tenk-main-tout,.tierradelfuego .explore-other-ways figure,.video-deep-link-container .video-deep-link-item figure,.pulseImage")
        };
        this.Ld = function () {
            a(".social-connect .footer-social-twitter").on("touchend click", function () {
                a(".social-items li.twitter:hover .twitter-submenu").toggle()
            })
        };
        this.Kd = function () {
            a(".social-icons .twitter a div").on("touchend click",
                function () {
                    a(".social-icons li.twitter:hover ul").toggle()
                })
        };
        this.Mc = function () {
            a("form .search-img").on("click", function () {
                a(this).siblings("#searchBox").removeClass("hidden");
                a(this).siblings("#searchBox").animate({width: "230"}, "fast", function () {
                    a(this).focus()
                })
            });
            a("#searchBox").on({
                focus: function () {
                    a(this).animate({width: "230"}, "fast", function () {
                        a(this).removeClass("hidden");
                        a(this).siblings(".search-img").wrap("<button></button>")
                    })
                }, blur: function () {
                    a(this).animate({width: "0"}, "fast", function () {
                        a(this).addClass("hidden");
                        a(this).siblings("button").length > 0 && a(this).siblings("button").children().unwrap()
                    })
                }
            })
        };
        this.jb = function () {
            a("ul.faqs li").click(function (b) {
                if (!a(b.target).is("a")) {
                    if (a(this).hasClass("single-expand")) {
                        var c = a(this);
                        a("ul.faqs li.faqExpanded").each(function () {
                            a(this).is(c) || a(this).toggleClass("faqExpanded").find("div").slideToggle("fast")
                        })
                    }
                    a(this).toggleClass("faqExpanded").find("div").slideToggle("fast")
                }
            })
        };
        this.Y = function (b) {
            var c = a(".filter:visible");
            c.length != 0 && (b != "all" && b != "filter_all" ?
                c.find("li").hide().end().find("." + b).show() : c.find("li").show())
        };
        this.rb = function () {
            a('.customSelect li:not(".selected")').hide();
            a("body").on("click", ".customSelect .selected a", function (b) {
                b.stopPropagation();
                b.preventDefault();
                a(a(this).parents(".customSelect")).addClass("open").removeClass("closed").find("li").slideDown()
            });
            var b = "";
            a("body").on("click", ".customSelect.open a", function (i) {
                i.stopPropagation();
                i.preventDefault();
                var d = a(this).parents(".customSelect");
                d.hasClass("redirectSelection") ?
                    c.location = a(this).attr("href") : d.hasClass("filterSection") ? (a(".tab").hide(), a(a(this).attr("href")).show()) : d.hasClass("filter-blog") && (a(this).attr("href").replace("#", "") == "all" ? a(".blogList > li").show() : (a(".blogList > li").hide(), a("." + a(this).attr("href").replace("#", "")).show()), GS.Sitewide.Aa());
                d.find("li").not(a(this).parent()).slideUp("400", function () {
                    d.addClass("closed").removeClass("open")
                });
                d.find("li").removeClass("selected");
                a(a(this).parent()).addClass("selected");
                b = a(this).attr("id");
                d.trigger("onFilter", [b, a(this)])
            });
            a("body").on("mouseleave", ".customSelect.open", function () {
                a(a(this).find("li")).not(a("li.selected")).slideUp("400", function () {
                    a(a(this).parents(".customSelect")).addClass("closed").removeClass("open")
                })
            });
            a(".customSelect").bind("onFilter", function (a, b) {
                GS.Sitewide.Y(b)
            })
        };
        this.ua = function (a, b) {
            if (b) {
                var c = a.find("a." + b).closest("li");
                c.length == 1 && (a.find("li").removeClass("selected").hide(), c.addClass("selected").show())
            }
        };
        this.$c = function () {
            a("nav.state li a").bind("click",
                function (b) {
                    b.preventDefault();
                    b.stopPropagation();
                    a(this).parent().hasClass("selected") || (a("nav.state").find("li").removeClass("selected"), a(this).parent().addClass("selected"), b = a(this).attr("href"), a(".tab").hide(), a(b).show())
                });
            a("nav").hasClass("state") && a(".tab:gt(0)").hide()
        };
        this.gd = function () {
            n(a(".shareLink"), a("#shareOverlay"))
        };
        this.fd = function () {
            n(a(".rss-link"), a("#feedOverlay"))
        };
        this.yb = function () {
            a(".archive").hide();
            a("#archiveSelect").hide();
            a("a#arc").bind("click", function (b) {
                b.preventDefault();
                a("#archiveSelect:hidden").show()
            });
            a("a#current").bind("click", function (b) {
                b.preventDefault();
                a("#archiveSelect:visible").hide()
            })
        };
        this.Oa = function () {
            Modernizr.input.placeholder || a("[placeholder]").placeholder()
        };
        this.mc = function () {
            var b = a("ul.listings"), c = b.find("li"), d = a("a#country"), l = a("a#city");
            d.on("click", function () {
                a(this).hasClass("selected") || (a(this), l.removeClass("selected"), c.sort(function (b, c) {
                    return a(b).find("span.country").text() != a(c).find("span.country").text() ? a(b).find("span.country").text().localeCompare(a(c).find("span.country").text()) :
                        a(b).find("span.city").text().localeCompare(a(c).find("span.city").text())
                }), b.empty(), b.append(c))
            });
            l.on("click", function () {
                a(this).hasClass("selected") || (a(this), d.removeClass("selected"), c.sort(function (b, c) {
                    return a(b).find("span.city").text() != a(c).find("span.city").text() ? a(b).find("span.city").text().localeCompare(a(c).find("span.city").text()) : a(b).find("span.country").text().localeCompare(a(c).find("span.country").text())
                }), b.empty(), b.append(c))
            })
        };
        this.oa = function () {
            function b(a) {
                return a !==
                t && a !== d ? a : 0
            }

            function c(b) {
                o.find("a").each(function () {
                    var c = a(this);
                    b === "filter_all" ? c.removeClass("hide") : (c.addClass("hide"), c.hasClass(b) && c.removeClass("hide"))
                })
            }

            var o = a("#map-container"), l;
            GS.Sitewide.D(function () {
                l = a("body").innerWidth() > 1230 ? 1 : 0.8;
                a(".loc").remove();
                var c = a(".map-component"), i = 0, d = 0;
                c && (i = b(c.data("offset-x")), d = b(c.data("offset-y")));
                a("ul.listings>li").each(function (b, c) {
                    var c = a(c), g = c.find("span.city").text(),
                        j = "#" + g.toLowerCase().replace(/, /g, "-").replace(/ /g, "").replace(/\(|\)/g,
                            "");
                    a('<a href="HREF" class="loc"></a>').css({
                        left: parseInt(c.data("x") * l) + i,
                        top: parseInt(c.data("y") * l) + d * l
                    }).attr({href: j}).addClass(c.attr("class")).appendTo(o).C({
                        delay: 0,
                        left: 15,
                        top: 0,
                        $a: !1,
                        ia: function () {
                            return g
                        }
                    })
                })
            });
            a("body").on("click", ".loc", function (b) {
                b.preventDefault();
                b = a(this).attr("href");
                if (a(b).is(":hidden")) {
                    var g = a(this).attr("class").split(" ")[1];
                    GS.Sitewide.Y(g);
                    c(g);
                    a(".regionSelect").find("li").removeClass("selected").hide();
                    a(".regionSelect li #" + g).parent().addClass("selected").show()
                }
                a("html, body").animate({scrollTop: a(b).offset().top},
                    "fast")
            });
            a("body").on("onFilter", ".customSelect", function (a, b) {
                c(b);
                GS.Sitewide.Y(b)
            })
        };
        this.Lc = function () {
            function b() {
                if (c.location.hash != "") {
                    var g = c.location.hash.substring(1);
                    $countryElement = _.find(a("section.office-listings ul.listings > li"), function (a) {
                        return a.find("span.country").text() == g
                    });
                    a("body, html, document").scrollTop($countryElement.offset().top)
                }
            }

            a(c).bind("load", b).bind("hashchange", b)
        };
        this.matchHeight = function () {
            function b() {
                var c = a(".matchHeight");
                c.size() > 0 && setTimeout(function () {
                    var b =
                        0;
                    c.height("auto");
                    c.each(function () {
                        b = a(this).height() > b ? a(this).height() : b
                    });
                    c.height(b);
                    c.each(function () {
                        if (a(this).hasClass("twitter-card-widget")) {
                            var c = a(this).find(".header").outerHeight(!0);
                            a(this).find(".container a").attr("height", b - c)
                        }
                    })
                }, 250)
            }

            GS.Sitewide.D(b);
            return b
        };
        this.fc = function () {
            function b() {
                var c = a(".matchSecondHeight");
                c.size() > 0 && setTimeout(function () {
                    var b = 0;
                    c.height("auto");
                    c.each(function () {
                        b = a(this).height() > b ? a(this).height() : b
                    });
                    c.height(b)
                }, 250)
            }

            GS.Sitewide.D(b);
            return b
        };
        this.Na = function () {
            function c() {
                var b = a(".grid-content li");
                b.find("a").hover(f, Q);
                b.css("opacity", 1).removeClass("filteredOut").find("a").removeClass("disabled").end().ea({
                    $: "asc",
                    attr: "rel"
                })
            }

            function i(b, i) {
                var d;
                d = typeof i === "string" ? i : i.parents(".customSelect").attr("id");
                for (var l = !1, j = {}, e = 0, o = k.length; e < o; ++e) for (var f in k[e]) d === f && (l = !0, b === "" ? k.splice(e, 1) : k[e][f] = b);
                l || (j[d] = b, k.push(j));
                c();
                d = a(".grid-content li");
                e = 0;
                for (o = k.length; e < o; ++e) for (f in k[e]) d.not("." + k[e][f]).css("opacity",
                    0.3).addClass("filteredOut").find("a").addClass("disabled").unbind("mouseenter mouseleave").end().ea(".filteredOut")
            }

            function e() {
                var c = "", g = a("#division ul li.selected a").attr("id"),
                    d = a("#region ul li.selected a").attr("id"), i = a("#corptitle ul li.selected a").attr("id"),
                    l = a(".people-list"), j = a(".people-list .people-container");
                j.find(".people-profile").each(function (b, c) {
                    var g = a(c);
                    g.removeClass("grid1-grad1 grid1-grad2 grid1-grad3 grid1-grad4");
                    g.hide()
                });
                if (l.hasClass("random-order")) {
                    var l = j.find("article.recent-updated"),
                        o = j.find("article.non-recent");
                    j.empty();
                    for (var l = GS.Sitewide.shuffle(l), o = GS.Sitewide.shuffle(o), f = 0; f < l.length; f++) j.append(l[f]);
                    for (f = 0; f < o.length; f++) j.append(o[f])
                }
                g ? (c += "." + g, b.cookie = "gsPeopleDivision=" + g) : b.cookie = "gsPeopleDivision=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                d ? (c += "." + d, b.cookie = "gsPeopleRegion=" + d) : b.cookie = "gsPeopleRegion=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                i ? (c += "." + i, b.cookie = "gsPeopleTitle=" + i) : b.cookie = "gsPeopleTitle=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                a(".people-list article.people-profile" +
                    c).each(function (b, c) {
                    a(c).addClass("grid1-grad" + (b % 4 + 1));
                    a(c).show()
                });
                c ? a(".people-list article.people-profile" + c).length ? a(".people-list section.no-result-template").hide() : a(".people-list section.no-result-template").show() : a(".people-list section.no-result-template").hide()
            }

            function l() {
                var c, g, d;
                g = (c = b.cookie.match("(?:^|;)\\s*gsPeopleDivision=([^;]*)")) ? decodeURIComponent(c[1]) : !1;
                d = (c = b.cookie.match("(?:^|;)\\s*gsPeopleRegion=([^;]*)")) ? decodeURIComponent(c[1]) : !1;
                c = (c = b.cookie.match("(?:^|;)\\s*gsPeopleTitle=([^;]*)")) ?
                    decodeURIComponent(c[1]) : !1;
                if (g) {
                    var i = a("#division ul li.all");
                    g = a("#" + g).parent();
                    i.removeClass("selected");
                    i.hide();
                    g.addClass("selected");
                    g.show()
                }
                d && (i = a("#region ul li.all"), g = a("#" + d).parent(), i.removeClass("selected"), i.hide(), g.addClass("selected"), g.show());
                c && (i = a("#corptitle ul li.all"), g = a("#" + c).parent(), i.removeClass("selected"), i.hide(), g.addClass("selected"), g.show());
                e()
            }

            function j(b) {
                var c = a(".grid-content li");
                c.find("a").hover(f, Q);
                b !== "filter_all" && c.length !== 0 ? c.css("opacity",
                    1).removeClass("filteredOut").find("a").removeClass("disabled").end().not("." + b).css("opacity", 0.3).addClass("filteredOut").find("a").addClass("disabled").unbind("mouseenter mouseleave").end().ea(".filteredOut") : b === "filter_all" && c.length != 0 && c.css("opacity", 1).removeClass("filteredOut").ea({
                    $: "asc",
                    attr: "rel"
                })
            }

            function f(b) {
                function c() {
                    if (g.data("hover")) {
                        var d = g.parents("ul.grid-content").offset().left + g.parents("ul.grid-content").width() / 2,
                            l = a("ul.grid-content").position().left, j = a("ul.grid-content").position().top,
                            e = a("header").outerHeight(!0);
                        i.addClass(S);
                        var o = g.parent();
                        i.find("img").attr("src", o.data("img"));
                        o.data("name") && i.find("h4.name").text(o.data("name"));
                        o.data("cty") && i.find("p.country").text(o.data("cty"));
                        o.data("biz") && i.find("p.business span").text(o.data("biz"));
                        o.data("link") && i.find("a").attr("href", o.data("link"));
                        o.data("desc") && i.find("p.desc").text(o.data("desc"));
                        o.data("title") && i.find("p.title").text(o.data("title"));
                        o.data("div") && i.find("p.position").text(o.data("div"));
                        g.unbind("mouseleave");
                        d = b.pageX < d ? "left" : "right";
                        i.removeClass("left right").addClass(d).css({
                            left: g.parent().position().left + l,
                            top: g.parent().position().top + j + e
                        }).fadeIn(400).mouseleave(function () {
                            g.bind("mouseleave", Q);
                            i.removeClass("left right").css({display: "none"}).unbind("mouseleave")
                        })
                    }
                }

                b.preventDefault();
                var g = a(this), i = a(".profile-card");
                a.data(this, "hover", !0);
                h === d && clearTimeout(h);
                h = setTimeout(function () {
                    c()
                }, 250)
            }

            function Q() {
                a(this);
                a.data(this, "hover", !1)
            }

            var h, S = a("body").attr("class").split(" ")[1], S =
                S ? S : a("body").attr("class"), k = [];
            a(".regionSelect").length > 0 && a(".regionSelect").unbind("onFilter").bind("onFilter", function (a, b) {
                j(b)
            });
            a(".cityFilter").length > 0 && a(".cityFilter").unbind("onFilter").bind("onFilter", function (a, b) {
                j(b)
            });
            a(".people-content").length > 0 && (a(".people-content .customSelect").unbind("onFilter").bind("onFilter", function (a, b, c) {
                i(b, c);
                e()
            }), a("#filter_video").click(function () {
                this.checked ? i("filter_video", "video") : i("", "video")
            }), a("#reset").click(function (b) {
                b.preventDefault();
                k = [];
                c();
                a("#filter_video").attr("checked", !1);
                a(".people-content .customSelect").each(function () {
                    a(this).find("li").removeClass("selected").hide().first().addClass("selected").show()
                });
                e()
            }), l());
            var n = a('<div id="profile-container" />'), p = a('<div class="profile-data" />');
            if (a("body").hasClass("ten-thousand")) for (var L = [a('<h4 class="name" />'), a('<p class="country" />'), a('<p class="business">Business: <br /><span></span></p>'), a('<p class="desc" />'), a('<a href="#" class="hitLink">View her profile</a>')],
                                                             m = 0; m < L.length; ++m) p.append(L[m]); else if (a("body").hasClass("careerspeople")) {
                n.addClass("careerspeople");
                L = [a('<h4 class="name" />'), a('<p class="title" />'), a('<p class="position" />'), a('<a href="#" class="hitLink">Read profile</a>')];
                for (m = 0; m < L.length; ++m) p.append(L[m])
            }
            m = a('<div class="profile-card hitArea" />').append(a("<img />")).append(p);
            n.append(m);
            a("body").prepend(n);
            n = a("ul.grid-content li");
            for (m = 0; m < n.length; m++) a(n[m]).attr("rel", m);
            a("ul.grid-content li a").removeAttr("style").unbind("mouseenter mouseleave").hover(f,
                Q).click(function () {
                return !1
            })
        };
        this.Dc = function () {
            var b = a(".loadRegion li.selected a").first().text(), c = a(".daAjax").html();
            a("body").on("click", ".loadRegion.open a", function () {
                var d = a(this).attr("href"), l = a(this).text();
                l === b ? a(".daAjax").html(c) : (a(".daAjax").load(d + " #loadContent"), a(this).parents("aside").find("h3 strong").text(l))
            })
        };
        this.yc = function () {
            a(".divisionSelect").each(function () {
                if (GS.Sitewide.context.division && GS.Sitewide.context.division !== "") {
                    var b = a(".divisionSelect-" + GS.Sitewide.context.division,
                        this);
                    b.size() > 0 && (a("li", this).removeClass("selected").hide(), b.parent("li").addClass("selected").show())
                }
            })
        };
        this.Aa = function () {
            var b = 0;
            a(".blogList > li").each(function () {
                switch (b) {
                    case 0:
                        a(this).addClass("blogGrad1");
                        break;
                    case 1:
                        a(this).addClass("blogGrad2");
                        break;
                    case 2:
                        a(this).addClass("blogGrad3"), b = -1
                }
                b++
            })
        };
        this.ob = function () {
            a(".appDeadLine p").html(a(".appDeadLine a:first").attr("data-deadline") + " <a href='#' class='buttonLink'>apply now</a>");
            a(".appDeadLine").on("click", ".customSelect.open a",
                function () {
                    var b = a(this).attr("data-deadline");
                    a(this).parents(".customSelect").next("p").html(b + " <a href='#' class='buttonLink'>apply now</a>")
                })
        };
        this.Yc = function () {
            var b = a("<section></section>");
            b.load("/a/data/stock/stock.html .stockprice", function (c, d) {
                d === "success" && (b.addClass("stockPrice hitArea").prepend('<h2 class="hidden">Latest stock information</h2>'), a("tfoot", b).replaceWith('<tfoot><tr><td colspan="4"><a href="/investor-relations/stock-chart/index.html">View stock chart</a></td></tr></tfoot>'),
                    a(".quickLinks").after(b))
            })
        };
        this.tc = function () {
            var c = decodeURIComponent((/[?|&]bid=([^&;]+?)(&|#|;|$)/.exec(location.search) || [, ""])[1].replace(/\+/g, "%20")) || !1,
                i = !1;
            if (c) {
                var d = new Date;
                d.setTime(d.getTime() + 31536E6);
                b.cookie = "gsBid=" + c + "; path=/; expires=" + d.toGMTString();
                i = c
            } else i = (c = b.cookie.match("(?:^|;)\\s*gsBid=([^;]*)")) ? decodeURIComponent(c[1]) : !1;
            i && a("a.buttonLink").each(function () {
                var b = a(this).attr("href");
                a(this).attr("href", b.replace("bid=5001", "bid=" + i))
            })
        };
        this.Sa = function () {
            var b =
                    GS.Sitewide.L(a(".regionSelect li:first").attr("class")),
                d = GS.Sitewide.L(a(".divisionSelect li:first").attr("class"));
            typeof GS.Sitewide.context == "object" && GS.Sitewide.context.region && GS.Sitewide.context.region !== "" && GS.Sitewide.ua(a(".regionSelect"), "regionSelect-" + GS.Sitewide.context.region);
            typeof GS.Sitewide.context == "object" && GS.Sitewide.context.division && GS.Sitewide.context.division !== "" && GS.Sitewide.ua(a(".divisionSelect"), "divisionSelect-" + GS.Sitewide.context.division);
            a("#jobs");
            var e = [];
            a(".searchListing").tablesorter();
            a(".filters .customSelect").off("onFilter").on("onFilter", function (b, c, g) {
                for (var d = g.parents(".customSelect").attr("id"), i = !1, f = {}, b = 0, g = e.length; b < g; ++b) for (var h in e[b]) d === h && (i = !0, c === "" ? e.splice(b, 1) : e[b][h] = c);
                i || (f[d] = c, e.push(f));
                c = a(".searchListing tbody tr");
                c.not(":first").css("display", "table-row");
                c.first().addClass("hidden");
                c = a(".searchListing tbody tr");
                b = 0;
                for (g = e.length; b < g; ++b) for (h in e[b]) c.not("." + e[b][h]).css("display", "none"), c.find(":visible").length ===
                0 && c.first().removeClass("hidden").css("display", "table-row")
            });
            a(".searchCTA").click(function (l) {
                l.preventDefault();
                var l = GS.Sitewide.L(a(".regionSelect li.selected a:eq(0)").attr("class")),
                    l = l == !1 || l == "all" ? !1 : l,
                    j = GS.Sitewide.L(a(".divisionSelect li.selected a:eq(0)").attr("class")),
                    j = j == !1 || j == "all" ? !1 : j, e = "",
                    e = l && l !== b && j && j !== d ? l + "-" + j + ".html" : j && j !== d ? j + ".html" : l && l !== b ? l + ".html" : GS.Sitewide.$b;
                if (e !== "") e = GS.Sitewide.Ta + e, c.location = e
            })
        };
        this.ac = function () {
            function b() {
                c = GS.Sitewide.context.region &&
                GS.Sitewide.context.region !== "" ? GS.Sitewide.context.region : GS.Geo.region && GS.Geo.region !== "" ? GS.Sitewide.context.region = GS.Geo.region : "americas";
                GS.Sitewide.ua(e, "regionSelect-" + c);
                a("#top3").remove();
                a("#entryLevel").remove();
                var g = GS.Sitewide.Ta + c + "-" + GS.Sitewide.context.division;
                a('<div id="top3" />').load(g + "-top3.html", function (b, c) {
                    c === "success" && a(this).appendTo(d);
                    a('<div id="entryLevel" />').load(g + "-entry.html", function (b, c) {
                        c === "success" && a(this).appendTo(d)
                    })
                })
            }

            var c = "", d = a(".jobSidebar"),
                e = a(".jobSidebar .regionSelect");
            e.off("onFilter").on("onFilter", function (a, c, d) {
                GS.Sitewide.context.region = GS.Sitewide.L(d.attr("class"));
                b()
            });
            b()
        };
        this.L = function (b) {
            var c = !1;
            b && (c = (testMatches = b.match(/(regionSelect|divisionSelect)\-[^\s]+/)) && testMatches[0] ? a.trim(testMatches[0].replace(/(regionSelect|divisionSelect)\-/, "").toLowerCase()) : "");
            return c
        };
        this.Wb = function () {
            a(".radioType").click(function () {
                a(".customSelect").addClass("hidden").each(function () {
                    a(this).find("li").removeClass("selected").hide().first().addClass("selected").show()
                });
                GS.Sitewide.Y("filter_all");
                a("#" + this.value).removeClass("hidden")
            })
        };
        this.initExploreCitizenship = function () {
            a("article.explore-citizenship-item figcaption").each(function () {
                var b;
                b = a(this).hasClass("non-image-item") ? 200 : a(c).width() > 1230 ? 400 : 320;
                var d = a(this).height();
                b = (b - d) / 2 - 10;
                a(this).css("margin-top", b + "px")
            })
        };
        this.Rc = function () {
            a(c).bind("load resize", GS.Sitewide.initExploreCitizenship())
        };
        this.Xb = function () {
            var b = /.*source_(.*)(\W|$)/;
            a("cite").hover(function () {
                if (b.test(a(this).attr("class"))) {
                    var c =
                        RegExp.$1, d = a(this).width();
                    a(this).css({position: "relative"});
                    c = a("#sourcetip_" + c).clone().attr("id", "temp_id");
                    a(this).append(c);
                    c.removeClass("hidden");
                    var e = c.height();
                    c.css({left: d + 8 + "px", top: "-" + e + "px"});
                    d = c.offset().left;
                    e = c.offset().top;
                    c.remove().appendTo("body").css({left: d + "px", top: e + "px"})
                }
            }, function () {
                a("#temp_id").remove()
            })
        };
        this.Mb = function () {
            var b = a("nav.quickLinks").data("jsonlink");
            b && a.getJSON(b, function (b) {
                var g = b.profiles.length;
                a.each(b.profiles, function (d, e) {
                    if (c.location.pathname ==
                        e.url) {
                        var f = (d + g - 1) % g;
                        right = (d + 1) % g;
                        a("li.quickNext a").attr("href", b.profiles[right].url).text(b.profiles[right].name);
                        a("li.quickPrevious a").attr("href", b.profiles[f].url).text(b.profiles[f].name)
                    }
                })
            })
        };
        this.Lb = function () {
            function b(a) {
                return a.substr(0, f).split(" ").slice(0, -1).join(" ") + "..."
            }

            var d = a("nav.quickLinks").data("json-page"), e = a("nav.quickLinks").data("theme"),
                l = a("nav.quickLinks").data("is-archive"), j, f = c.innerWidth > 1230 ? 55 : 50;
            d && a.getJSON(d, function (d) {
                if (e) {
                    var i = d[e], f = d[e].length;
                    d.index.length && (j = d.index[0]);
                    if (l || i.length == 1) {
                        var d = i[0].themeName, h = i[0].themeUrl;
                        a("li.articleNext").remove();
                        a("li.articlePrevious").addClass("singleQuickLink");
                        a("li.articlePrevious a").attr("href", h ? h : j.url).html(h ? d : j.title)
                    } else a.each(i, function (d, e) {
                        if (c.location.pathname == e.url) {
                            var j = (d + f - 1) % f;
                            right = (d + 1) % f;
                            a("li.articleNext a").attr("href", i[right].url).html(i[right].title.length > 50 ? b(i[right].title) : i[right].title);
                            a("li.articlePrevious a").attr("href", i[j].url).html(i[j].title.length >
                            50 ? b(i[j].title) : i[j].title);
                            i.length == 2 && (d == 0 ? (a("li.articleNext").addClass("singleQuickLink"), a("li.articlePrevious").remove()) : (a("li.articleNext").remove(), a("li.articlePrevious").addClass("singleQuickLink")))
                        }
                    })
                } else d.index.length && (j = d.index[0]), a("li.articleNext").remove(), a("li.articlePrevious").addClass("singleQuickLink"), a("li.articlePrevious a").attr("href", j.url).html(j.title)
            })
        };
        this.Kb = function () {
            a(".jobs").load("/a/data/jobs/search.html #jobs", function (b, c) {
                c == "success" && (a("caption.caption").addClass("clearfix"),
                    a('<a href="http://www.goldmansachs.com/a/data/jobs/search.html" class="search-all">Search all available positions</a>').appendTo("caption.caption"))
            })
        };
        this.Jb = function () {
            function b() {
                var g = "http://" + c.location.hostname, d = "", i = "", e = 0;
                a(".checkbox:checked").each(function () {
                    d += i + i + a(this).attr("name") + "\n" + g + a(this).attr("value");
                    i = "\n";
                    e++
                });
                if (e == 0) alert("Please make a selection from the list of reports."); else return d
            }

            var i = a("ul#reportList").data("rsubject"), e = a("ul#reportList").data("rbody"),
                e = e.replace(/\\n/g, "\n"), l = a("ul#reportList").data("email");
            a("div.form #submitrequest").click(function () {
                function c(b, g) {
                    a.trim(b) == "" && p.push(g);
                    return b
                }

                function f(b, c) {
                    c == d && (c = !0);
                    return b == d || a.trim(b) == "" ? "" : m + a.trim(b) + (c ? "\n" : "")
                }

                function h(b) {
                    for (var c = "", g = "", d = 0; d < b.length; d++) b[d] && a.trim(b[d]) != "" && (c += g + a.trim(b[d]), g = ", ");
                    return c
                }

                function k(b) {
                    var c = a(b).val();
                    return c === a(b).attr("placeholder") ? "" : c
                }

                a("#mailing");
                var n = b();
                if (n != "") {
                    var m = "          ", p = [], q = "";
                    q += f(c(k(a("#fname")),
                        "Full Name"));
                    q += f(k(a("#company")));
                    q += f(k(a("#add1")), "Address Line 1");
                    q += f(k(a("#add2")));
                    q += f(h([c(k(a("#city")), "City"), c(k(a("#state")), "State/Province/Region"), c(k(a("#postal")), "Zip/Postal Code"), c(k(a("#country")), "Country")]));
                    q += f(k(a("#phone")), !1);
                    p.length > 0 ? alert("The following fields are required: " + h(p)) : (n = "mailto:" + l + "?subject=" + i + "&body=" + escape(e.replace("${selection}", n).replace("${requester}", q)), a("body").append('<iframe src="' + n + '" height="1" width="1"></iframe>'))
                }
            })
        };
        this.Pc =
            function () {
                function b() {
                    var c = "", g = "", d = 0;
                    a(".checkbox:checked").each(function () {
                        c += g + g + a(this).attr("data-group") + " - " + a(this).attr("data-desc") + " - " + a(this).attr("data-title") + " - " + a(this).attr("data-file");
                        g = "\n";
                        d++
                    });
                    if (d == 0) alert("Please make a selection from the list of reports."); else return c
                }

                var c = a("ul#reportList").data("rsubject"), e = a("ul#reportList").data("rbody"),
                    e = e.replace(/\\n/g, "\n"), l = a("ul#reportList").data("email");
                a("div.form #submitrequest").click(function () {
                    function j(b,
                               c) {
                        a.trim(b) == "" && p.push(c);
                        return b
                    }

                    function f(b) {
                        var c;
                        c == d && (c = !0);
                        return b == d || a.trim(b) == "" ? "" : m + a.trim(b) + (c ? "\n" : "")
                    }

                    function h(b) {
                        for (var c = "", g = "", d = 0; d < b.length; d++) b[d] && a.trim(b[d]) != "" && (c += g + a.trim(b[d]), g = ", ");
                        return c
                    }

                    function k(b) {
                        var c = a(b).val();
                        return c === a(b).attr("placeholder") ? "" : c
                    }

                    a("#mailing");
                    var n = b();
                    if (n && n != "") {
                        var m = "          ", p = [], q = "";
                        q += f(j(k(a("#fname")), "Full Name"));
                        q += f(j(k(a("#email")), "Email"));
                        p.length > 0 ? alert("The following fields are required: " + h(p)) :
                            (n = "mailto:" + l + "?subject=" + c + "&body=" + escape(e.replace("${selection}", n).replace("${requester}", q)), a("body").append('<iframe src="' + n + '" height="1" width="1"></iframe>'))
                    }
                })
            };
        this.A = function () {
            var a = /(\||'|\$|%|\^|\*|:|~|,)/gi;
            return function (b) {
                return b && b.replace(a, "")
            }
        }();
        this.Sc = function () {
            a("nav.quickLinks").length > 0 && a("nav.quickLinks li a").each(function () {
                a(this).html('<span class="hide">' + a(this).text() + '</span><span class="trunc"></span>')
            });
            GS.Sitewide.jd()
        };
        this.jd = function () {
            GS.Sitewide.D(function () {
                var b =
                    a("body").innerWidth() <= 1230 ? 50 : 55;
                a("nav.quickLinks").length > 0 && a("nav.quickLinks li a span.trunc").each(function () {
                    a(this).prev("span").text().length > b ? a(this).text(a.trim(a(this).prev("span").text()).substr(0, b).split(" ").slice(0, -1).join(" ") + "...") : a(this).text(a(this).prev("span").text())
                })
            })
        };
        this.cd = function () {
            a(".filter-tabs .filter-container .filters").hide();
            a(".filter-tabs .tab-header .filter a").click(function (b) {
                b.preventDefault();
                a(".filter-tabs .filter-container .filters").hide().removeClass("selected-tab");
                b = a(this).attr("href");
                a(this).parent().hasClass("selected") ? (a(this).parent().removeClass("selected"), a(b).hide().removeClass("selected-tab")) : (a(".filter-tabs .tab-header li").removeClass("selected"), a(this).parent().addClass("selected"), a(b).show().addClass("selected-tab"), a(".tenk-profiles-meet li").show())
            });
            a("a.close").click(function (b) {
                b.preventDefault();
                a(this).parent().parent().removeClass("selected-tab");
                a(this).parent().parent().hide();
                a(".filter-tabs .tab-header .filter").removeClass("selected")
            })
        };
        this.ad = function () {
            var b, c, d = a(".tenk-profiles-meet li"), e = a(".tenk-featured-filter article");
            b = function (b) {
                a(b).parent().parent().find(".selected a").each(function () {
                    c = a(this).attr("href").substring(1);
                    d.each(function () {
                        a(this).hasClass(c) && a(this).show()
                    })
                })
            };
            parseFeatured = function (b) {
                c = a(b).attr("href").substring(1);
                e.each(function () {
                    a(this).hasClass(c) && a(this).show()
                })
            };
            a(".filter-tabs .filter-list a").click(function (c) {
                c.preventDefault();
                d.hide();
                a(this).parent().hasClass("all") ? (a(this).parent().parent().find("li").removeClass("selected"),
                    a(this).parent().addClass("selected"), d.show()) : (a(this).parent().hasClass("selected") ? (a(this).parent().removeClass("selected"), d.hide()) : (a(this).parent().addClass("selected"), a(this).parent().parent().find(".all").removeClass("selected")), b(this))
            });
            a(".filter-featured .filter-list li a").click(function (b) {
                b.preventDefault();
                a(".flagged").removeClass("flagged");
                a(this).parents(".customSelect").addClass("flagged");
                a(".customSelect").not(".flagged").find("li").hide().removeClass("selected");
                a(".customSelect").not(".flagged").find("li.all").show().addClass("selected");
                a(this).parent().hasClass("all") ? e.show() : (e.hide(), parseFeatured(this))
            });
            a(".filter-featured .filter-list li.selected a").each(function () {
                a(this).parent().hasClass("all") || (e.hide(), parseFeatured(this))
            })
        };
        this.dd = function () {
            a(".tenk-landing-profiles .profiles-list li").hover(function () {
                var b = a(this).position();
                b.left < 400 ? (b = b.left + 100, a(this).find(".rollover-container").show(120).css("left", b + "px").removeClass("rightPos").addClass("leftPos")) : (b = a(".tenk-landing-profiles").width() - (b.left + 100),
                    a(this).find(".rollover-container").show(120).css("right", b + "px").removeClass("leftPos").addClass("rightPos"))
            }, function () {
                a(this).find(".rollover-container").hide()
            })
        };
        this.eb = function () {
            var b = a(".order-tabs li"), c = a(".sort-items-box"), d = a(".sort-item"), e, j;
            b.find("a").click(function (c) {
                c.preventDefault();
                b.removeClass("selected");
                a(this).parent().addClass("selected");
                e()
            });
            orderit = function (b) {
                d.sort(function (c, d) {
                    itemAVal = a(c).data(b);
                    itemBVal = a(d).data(b);
                    return b == "publisheddate" ? itemAVal < itemBVal ?
                        1 : itemAVal > itemBVal ? -1 : 0 : itemAVal < itemBVal ? -1 : itemAVal > itemBVal ? 1 : 0
                });
                d.detach();
                c.append(d)
            };
            e = function () {
                b.each(function () {
                    a(this).hasClass("selected") && (j = a(this).find("a").attr("href").substring(1), orderit(j))
                })
            };
            e()
        };
        this.bd = function () {
            var b = a(".order-tabs li"), c = a(".sort-items-box"), d = a(".sort-item"), e;
            b.find("a").click(function (c) {
                c.preventDefault();
                b.removeClass("selected");
                a(this).parent().addClass("selected");
                e()
            });
            orderit = function (b) {
                d.sort(function (c, d) {
                    itemAVal = a(c).data(b);
                    itemBVal =
                        a(d).data(b);
                    return itemAVal < itemBVal ? -1 : itemAVal > itemBVal ? 1 : 0
                });
                d.detach();
                c.append(d)
            };
            e = function () {
                b.each(function () {
                    if (a(this).hasClass("selected")) {
                        var b = a(this).find("a").attr("id");
                        d.each(function () {
                            a(this).css("display", "block");
                            b != "all" && a(this).data("category") !== b && a(this).css("display", "none")
                        });
                        orderit("location")
                    }
                })
            };
            e()
        };
        this.ed = function () {
            var b = a(".tenk-slider"), c = b.width();
            a(".smallLinks ul li").hover(function () {
                a(this).addClass("hover")
            }, function () {
                a(this).removeClass("hover")
            });
            a(b).each(function () {
                function b() {
                    e = parseInt(a(i).find(".clip .slide-items").css("margin-left"));
                    e == 0 && a(i).find(".quickPrevious").addClass("disabled");
                    Math.abs(c() - d()) - Math.abs(e) <= 0 && a(i).find(".quickNext").addClass("disabled")
                }

                function c() {
                    return g() * a(i).find(".clip .slide-items li").length
                }

                function d() {
                    return a(i).find(".clip").width()
                }

                function g() {
                    return a(i).find(".clip .slide-items li").width()
                }

                var i = this, e, f;
                (function () {
                    a(i).on("click", ".quickNext", function (h) {
                        h.preventDefault();
                        a(i).find(".quickPrevious").removeClass("disabled");
                        e = a(i).find(".clip .slide-items").css("margin-left");
                        f = parseInt(e) - g();
                        Math.abs(f) <= Math.abs(c() - d()) ? a(i).find(".clip .slide-items").animate({marginLeft: f + "px"}, 200, function () {
                            b()
                        }) : a(i).find(".clip .slide-items").animate({marginLeft: "-" + Math.abs(c() - d()) + "px"}, 200, function () {
                            b()
                        })
                    })
                })();
                (function () {
                    a(i).on("click", ".quickPrevious", function (c) {
                        c.preventDefault();
                        a(i).find(".quickNext").removeClass("disabled");
                        e = a(i).find(".clip .slide-items").css("margin-left");
                        f = parseInt(e) + g();
                        f <= 0 ? a(i).find(".clip .slide-items").animate({
                            marginLeft: f +
                            "px"
                        }, 200, function () {
                            b()
                        }) : a(i).find(".clip .slide-items").animate({marginLeft: "0px"}, 200, function () {
                            b()
                        })
                    })
                })()
            });
            GS.Sitewide.fa(function () {
                a(".tenk-slider").width() != c && (c = a(".tenk-slider").width(), a(".clip .slide-items").css("margin-left", 0), a(".quickNext").removeClass("disabled"), a(".quickPrevious").addClass("disabled"))
            })
        };
        this.Ed = function () {
            a("body").on("click", 'a[href*="redirect=true"]', function () {
                if (typeof GS.Geo == "object" && GS.Geo.country && GS.Geo.country == "uk") {
                    var b = a(this).attr("href").replace("US",
                        "UK");
                    a(this).attr("href", b)
                }
            })
        };
        this.zc = function () {
            a("body").on("click", "ul.faqs li:not(.faqExpanded)", function (b) {
                var c = {type: "progress-readmore", name: a(this).find("h2").text()};
                GS.Sitewide.g(b, c)
            })
        };
        this.La = function () {
            if (a("body#homepage").length > 0 && k("toutClick")) a(c).on("load", function () {
                for (var c = b.querySelectorAll("section.card-grid ul#cardGridItems div.owl-stage a"), d = b.querySelectorAll("section.hero-top div.text > a.btn"), e = b.querySelectorAll("section#careers div.text div.actions > a"), f =
                    b.querySelectorAll("section#announcements div.container article div a"), j = 0; j < c.length; j++) c[j].addEventListener("click", function (b) {
                    var c = a(b.target).closest("div.card-front"),
                        c = "Card Grid Module: " + a(c).find("div.heading > h5").text();
                    gsAnalytics.toutClick(b.target, c)
                }), d[j] && d[j].addEventListener("click", function (b) {
                    var c = a(b.target).closest("section.hero-top div.text"),
                        c = "Hero Tout: " + a(c).find("h2").text();
                    gsAnalytics.toutClick(b.target, c)
                }), e[j] && e[j].addEventListener("click", function (b) {
                    var c =
                        a(b.target).closest("section#careers div.text"), c = "Career Tout: " + a(c).find("h2").text();
                    gsAnalytics.toutClick(b.target, c)
                }), f[j] && f[j].addEventListener("click", function (b) {
                    var c = a(b.target).closest("section#announcements div.container article"),
                        c = "Announcement Tout: " + a(c).find("div.heading > h5").text();
                    gsAnalytics.toutClick(b.target, c)
                })
            })
        };
        var v = !0;
        this.Cc = function () {
            if (k("toutClick")) a(c).on("beforeunload", function (a) {
                v && (v = !1, f(), h(a), setTimeout(e, 1E3))
            })
        };
        this.gb = function (b, c, d) {
            if (k("handleToutClick") &&
                b && !a(b.target).hasClass("gsAnalyticsFired_tout-click")) {
                if (c == t || c === "") c = "No Section";
                if (d == t || d === "") d = "No Title";
                GS.Sitewide.g(b, {type: "tout-click", Oc: c, name: d})
            }
        };
        this.xc = function () {
            if (a(".homepage-grid.careers").length > 0) {
                var b = {type: "toplevel-tout", ba: "Careers", count: 7, title: "", position: 0, z: ""};
                a("#hero").on("click", function (c) {
                    var d = a(c.target);
                    b.title = b.position = "Hero";
                    if (d.is("a")) b.title = b.title, b.z = a.trim(d.text()), b.position = b.position + ":" + d.closest("li").index();
                    GS.Sitewide.g(c, b)
                });
                a(".careersPromo .links").on("click", function (c) {
                    var d = a(c.target);
                    b.title = b.position = a(this).find("h1").text();
                    d.is("a") ? (b.title = d.closest(".links").find("h3").text(), b.z = d.text(), b.position = [d.closest(".links").index(), d.closest("li").index()].join(":")) : (b.title = d.closest(".links").find("h3").text(), b.position = "" + d.closest(".links").index());
                    GS.Sitewide.g(c, b)
                });
                a(".social-carousel li").on("click", function (c) {
                    b.title = "Social";
                    b.z = a(this).find(".cta").text();
                    b.position = "Social:" + a(this).index();
                    GS.Sitewide.g(c, b)
                });
                a(".stay-connected article").on("click", function (c) {
                    b.title = a.trim(a(this).find("h2").text());
                    b.z = a(this).find("h3").text();
                    b.position = "Stay Connected:" + a(this).index();
                    GS.Sitewide.g(c, b)
                });
                a(".explore-divisions .explore-divisions-item").on("click", function (c) {
                    b.title = "Divisions";
                    b.z = a(this).find("a").text();
                    b.position = "Divisions:" + a(this).index();
                    GS.Sitewide.g(c, b)
                });
                a(".meet-our-people-carousel .content-carousel-item").on("click", function (c) {
                    b.title = a(this).find("h2").text();
                    b.z = a(this).find("a.cta").text();
                    b.position = a(this).find("h2").text() + ":" + a(this).index();
                    GS.Sitewide.g(c, b)
                });
                a(".learn-more-section article").on("click", function (c) {
                    b.title = b.position = a(this).closest("section").find("h2").text();
                    b.z = a(this).find("a.cta").text();
                    b.position = b.position + ":" + a(this).index();
                    GS.Sitewide.g(c, b)
                })
            }
            if (a("body").hasClass("top-level") && a(".homepage-grid.careers").length == 0) a("body").on("click", ".homepage-grid article", function (b) {
                var c = {
                    type: "toplevel-tout", count: a(".homepage-grid article").length,
                    position: a(this).index(), title: a.trim(a(this).find("h2").text())
                };
                a("#marketing-nav").children("li").find("a.toplevel").each(function () {
                    if (a(this).closest("strong").length == 1) c.ba = a(this).text()
                });
                c.ba = c.ba || "Home";
                if (a(this).find('a:not(".view,.edit_dots_marker")').length != 1) if (c.position = c.position + ":" + (a.inArray(b.target, a(this).find("a")) + 1), a(this).is(".video")) c.z = a(b.target).closest("li").find("h3").text(); else if (a(b.target).is("a")) c.z = a(b.target).text();
                GS.Sitewide.g(b, c)
            });
            a("header").on("click.analytics",
                "a#learnMore", function (a) {
                    GS.Sitewide.g(a, {type: "cookies-link"})
                });
            if (a("div.focus article.grid1x1").length > 0) a("div.focus").on("click.analytics", "article.grid1x1", function (b) {
                var c = GS.Sitewide.A(a("h2", this).text());
                a("a", this).length != 1 && a(b.target).is("a") && (c = c + ":" + GS.Sitewide.A(a(b.target).text()));
                c = {type: "focuson-tout", title: c, position: a(this).index()};
                GS.Sitewide.g(b, c)
            });
            if (a(".breadcrumbs li a").length > 0) {
                var c = "";
                a(".breadcrumbs").each(function () {
                    c = c == "" ? GS.Sitewide.A(a(this).text()) : c +
                        ":" + GS.Sitewide.A(a(this).text());
                    var b = {type: "breadcrumb", title: c};
                    a(this).data("analytics", b).bind("click", function (b) {
                        GS.Sitewide.g(b, a(this).data("analytics"))
                    })
                })
            }
            if (a(".featuredItems article:not(.tenk-side-tout)").length > 0) {
                var d = 1;
                a(".featuredItems article").each(function () {
                    var b = {
                        type: "sidebar-tout", title: a.trim(a.map(a("a", this)[0].childNodes, function (a) {
                            if (a.nodeType === 3) return a.data
                        }).join("")), position: d
                    };
                    a(this).data("analytics", b).bind("click", function (b) {
                        GS.Sitewide.g(b, a(this).data("analytics"))
                    });
                    d++
                })
            }
            a("section.richContent").on("click.analytics", "#endFrame li", function (b) {
                var c = {type: "video-recommendation", title: a.trim(a(this).text()), position: a(this).index()};
                GS.Sitewide.g(b, c)
            });
            a("#homelink a").length > 0 && a("#homelink a").each(function () {
                a(this).data("analytics", {
                    type: "navigation-slide",
                    title: "Home",
                    position: "0"
                }).bind("click", function (b) {
                    GS.Sitewide.g(b, a(this).data("analytics"))
                })
            });
            if (a("nav.quickLinks").length > 0) a("nav.quickLinks").on("click.analytics", "li", function (b) {
                var c = {
                    type: "horizontal-nav",
                    title: a("span.hide", this).text(), direction: a(this).hasClass("quickNext") ? "right" : "left"
                };
                GS.Sitewide.g(b, c)
            });
            if (a("body").hasClass("livestream")) a("#question_form").on("submit", function (a) {
                GS.Sitewide.g(a, {type: "livestream-submittal"})
            });
            a("body").on("click.analytics", ".transitionButton", function (b) {
                var c = {
                    type: "homepage-swipe",
                    title: a(this).html(),
                    direction: a(this).id == "transitionPrevButton" ? "left" : "right"
                };
                GS.Sitewide.g(b, c)
            });
            a("body.careersBlog").on("click.analytics", ".post-preview a", function (b) {
                GS.Sitewide.g(b,
                    {type: "careers-blog", name: a(this).closest("article").find("h2").text()})
            })
        };
        this.Kc = function () {
            a("section.grid2-padded a").length > 0 && a("section.grid2-padded a").each(function () {
                var b = RegExp("//" + location.host + "($|/)");
                a(this).get(0).href.substring(0, 4) === "http" && !b.test(a(this).get(0).href) && a(this).get(0).href.indexOf("addthis") == -1 && (b = {
                    type: "10ksb-link",
                    title: a.trim(a(this).text())
                }, a(this).data("analytics", b).bind("click", function (b) {
                    GS.Sitewide.g(b, a(this).data("analytics"))
                }))
            })
        };
        this.Hc = function () {
            var a =
                toutToDisplay;
            a || (a = {});
            var b, c = "";
            with (a) c += '\n\t<h3> You may be interested in..</h3>\n\t<div class="hitArea">\n\t\t<img src="' + ((b = toutImg) == t ? "" : b) + '"  alt="">\n\t\t<a href="' + ((b = toutLink) == t ? "" : b) + '"></a>\n\t\t<div>\n\t\t\t<h2>' + ((b = toutTitle) == t ? "" : b) + "</h2>\n\t\t\t" + ((b = toutCopy) == t ? "" : b) + '\n\t\t\t<a href="' + ((b = toutLink) == t ? "" : b) + '">' + ((b = toutCTA) == t ? "" : b) + "</a>\n\t\t</div>\n\t</div>\n";
            return c
        };
        this.Nc = function () {
            searchTerm = a(".results #searchBox").val().toLowerCase();
            if (toutToDisplay = _.find(touts,
                    function (a) {
                        return a.matcher(searchTerm)
                    })) {
                var b = GS.Sitewide.Hc();
                a("#search-tout-container").html(b);
                a("#search-tout-container .hitArea").on("click", function (b) {
                    b.stopPropagation();
                    b = a(this).find("a.hitLink:first").length ? a(this).find("a.hitLink:first") : a(this).find("a:first");
                    gsAnalytics && gsAnalytics.clickedFromSearchTout && b && b.attr("href") && a(this).find("h2") && gsAnalytics.clickedFromSearchTout(a(this).find("h2").text())
                })
            }
        };
        this.mb = function () {
            a(".post-image.video").append('<a class="post-image-icon" />');
            a(".post-image-icon").attr("href", function () {
                return a(this).parent("div").find("a").attr("href")
            });
            a(".articleImg.video").parent().append('<div class="post-image-icon" />')
        };
        this.ud = function () {
            if (typeof gsAnalytics.handleOurThinkingVideo != "undefined") {
                var b = GS.MediaComponent.trackVideoOpen;
                GS.MediaComponent.trackVideoOpen = function (a, c, d) {
                    gsAnalytics.handleOurThinkingVideo(c);
                    b(a, c, d)
                }
            }
            if (a("ul.cards").length > 0) a("ul.cards").on("click.analytics", "li.hitArea", function (b) {
                var c = {
                    type: "our-thinking-card",
                    title: a.trim(a.map(a("a", this)[0].childNodes, function (a) {
                        if (a.nodeType === 3) return a.data
                    }).join(""))
                };
                GS.Sitewide.g(b, c)
            })
        };
        this.Zc = function () {
            a(".shareLink a").length > 0 && a(".shareLink a").attr("href", "#")
        };
        this.wd = function () {
            a("#searchBox").closest("form").attr("action", "/search/search.gscgi").attr("method", "post")
        };
        this.sc = function () {
            function b(g) {
                a(g || "ul.dateList.filter").each(function () {
                    var b = a(this).closest("div.archiveWithPagination"), g = 0, e = 1;
                    a(this).children("li").each(function () {
                        if (a(this).is(":visible")) {
                            g++;
                            var b = Math.floor(g / 11);
                            e = b;
                            b > 1 && a(this).hide();
                            a(this).attr("data-pageNumber", b)
                        } else a(this).removeAttr("data-pageNumber")
                    });
                    b.find("ul.filterPagination, .archiveLink").remove();
                    var f = [];
                    if (e > 1) {
                        f.push('<ul class="filterPagination"><li class="previous unavailable">Previous</li><li class="pagination active" data-paginator="1">1</li>');
                        for (var l = 2; l <= e; l++) f.push('<li class="pagination" data-paginator="'), f.push(l), f.push('">'), f.push(l), f.push("</li>");
                        f.push('<li class="next">Next</li></ul>')
                    }
                    l =
                        b.find(".customSelect .selected > a");
                    l.is("[data-archiveLink]") && (f.push('<a class="archiveLink" href="'), f.push(l.data("archivelink")), f.push('">'), f.push(l.text()), f.push(" archive</a>"));
                    b.append(f.join(""));
                    c = b.find("ul.filterPagination li.pagination");
                    d = c.length;
                    e == 1 && b.find(".archiveLink").css("display", "block");
                    c.each(function (b, c) {
                        b >= 10 && a(c).hide()
                    })
                })
            }

            var c, d;
            b();
            a("div.archiveWithPagination").on("onFilter", ".customSelect", function () {
                b(a(this).closest("div.archiveWithPagination").find("ul.dateList.filter"))
            }).on("click",
                "ul.filterPagination li:not(.active, .next, .previous)", function () {
                    var b = a(this).closest("div.archiveWithPagination"), g = b.find("ul.filterPagination").find("li"),
                        e, f;
                    g.removeClass("active");
                    a(this).addClass("active");
                    a("body,html,document").scrollTop(a(".archiveWithPagination").offset().top);
                    var h = a(this).index();
                    h == 1 ? g.first().addClass("unavailable") : g.first().removeClass("unavailable");
                    h == g.length - 2 ? (g.last().addClass("unavailable"), b.find(".archiveLink").css("display", "block")) : (g.last().removeClass("unavailable"),
                        b.find(".archiveLink").hide());
                    d > 10 && (h <= 5 ? (e = 0, f = 10) : (f = d - h > 5 ? h + 5 : d, e = f - 10), c.each(function (b, c) {
                        b >= e && b < f ? a(c).show() : a(c).hide()
                    }));
                    var k = a(this).data("paginator");
                    b.find("ul.dateList.filter").children("li").each(function () {
                        a(this).attr("data-pageNumber") == k ? a(this).show() : a(this).hide()
                    })
                }).on("click", "ul.filterPagination li.previous:not(.unavailable)", function () {
                a(this).nextAll(".active").prev().click()
            }).on("click", "ul.filterPagination li.next:not(.unavailable)", function () {
                a(this).prevAll(".active").next().click()
            })
        };
        this.g = function (b, c) {
            var d = b !== !0 && typeof b == "object" && typeof b.target == "object";
            if (d) {
                if (a(b.target).find(".gsAnalyticsFired_" + c.type).length > 0) return;
                a(b.target).addClass("gsAnalyticsFired_" + c.type)
            }
            try {
                if (d) b.target = b.target || {}, b.target.gsAnalyticsjQEvent = b;
                switch (c.type) {
                    case "breadcrumb":
                        gsAnalytics.handleBreadcrumb(b.target, c.title);
                        break;
                    case "toplevel-tout":
                        gsAnalytics.handleGridTout(b.target, c.title, c.position, c.count, c.ba, c.z);
                        break;
                    case "sidebar-tout":
                        gsAnalytics.handleSidebarToutClick(b.target,
                            c.title, c.position);
                        break;
                    case "video-recommendation":
                        gsAnalytics.handleVideoRecommendationClick(b.target, c.title, c.position);
                        break;
                    case "video-recommendation-impression":
                        gsAnalytics.handleVideoRecommendationImpression(c.videos);
                        break;
                    case "horizontal-nav":
                        gsAnalytics.handleHorizontalNav(b.target, c.title, c.direction);
                        break;
                    case "navigation":
                        a(b.target).parents().is("header") || gsAnalytics.handleGlobalNav(b.target, c.title, c.position);
                        break;
                    case "navigation-slide":
                        gsAnalytics.handleGlobalNav(!0, c.title,
                            c.position);
                        a("body").hasClass("top-level") && typeof a("body").data("transitionIndex") != "undefined" && gsAnalytics.fireHomepageSwipePageView(!0, c.title);
                        break;
                    case "homepage-swipe":
                        gsAnalytics.handleHomepageSwipe(!0, c.title, c.direction);
                        break;
                    case "10ksb-link":
                        gsAnalytics.handleSBLink(b.target, c.title);
                        break;
                    case "our-thinking-card":
                        gsAnalytics.handleOurThinkingDownload(b.target, c.title);
                        break;
                    case "focuson-tout":
                        gsAnalytics.handleFocusOnGridClick(b.target, c.position, c.title);
                        break;
                    case "cookies-link":
                        gsAnalytics.handleLearnAboutCookies(b.target);
                        break;
                    case "quiz-submit-information":
                        gsAnalytics.handleQuizSubmitInformation(!0, c.country, c.location, c.degree, c.degreeType, c.major, c.educationType, c.rangeStart, c.rangeEnd, c.school);
                        break;
                    case "quiz-answer-question":
                        gsAnalytics.handleQuizAnswerQuestion(!0, c.questions, c.answers, c.modules, c.divisions);
                        break;
                    case "quiz-show-results":
                        gsAnalytics.handleQuizComplete(!0, c.questions, c.answers, c.divisions);
                        break;
                    case "quiz-click-module":
                        gsAnalytics.handleQuizToutClick(!0, c.overlayId);
                        break;
                    case "progress-readmore":
                        gsAnalytics.handleProgressLearnMore(!0,
                            c.name);
                        break;
                    case "livestream-submittal":
                        gsAnalytics.handleLivestreamQuestion(!0);
                        break;
                    case "careers-blog":
                        gsAnalytics.handleCareersBlogClick(b.target, c.name);
                        break;
                    case "tout-click":
                        gsAnalytics.handleToutClick(b.target, c.Oc, c.name);
                        break;
                    case "in-page-carousel-click":
                        gsAnalytics.handleCarouselCardClick(!0, c.section, c.name);
                        break;
                    case "insights-page-transition":
                        f(), GS.Sitewide.p.maxLoc = 0, gsAnalytics.inPlacePageLoad("Goldman Sachs", "Insights", "", "", c.pageName)
                }
            } catch (e) {
            }
        };
        this.md = function () {
            a(".video.content-carousel li.content-carousel-item").each(function (b) {
                var c =
                    a(this).find(".content a.video-index-autoplay");
                c && (b = GS.Sitewide.Qa ? "http://www.goldmansachs.com/video/index.html?autoPlay=true&playlist=0&video=" + b : "/pubweb.gs/pages/video/index?autoPlay=true&playlist=0&video=" + b, c.attr("href", b))
            })
        };
        this.ta = function (b) {
            var d = a("article.filter-list-tout"), e = a(".filter-list-category .title.category"), f;
            b ? c.location.hash = b.attr("id") : b = e.first();
            f = a("article.filter-list-tout." + b.attr("id"));
            a.each(e, function () {
                a(this).removeClass("select")
            });
            b.addClass("select");
            a.each(d, function () {
                a(this).hide()
            });
            f.show()
        };
        this.initFilterLinksList = function () {
            if (a("article.filter-list-category").length) {
                var b;
                a(".filter-list-category .title.category").bind("click", function () {
                    GS.Sitewide.ta(a(this))
                });
                c.location.hash && (b = a(c.location.hash));
                GS.Sitewide.ta(b);
                a(c).on("hashchange", function () {
                    GS.Sitewide.ta(a(c.location.hash))
                })
            }
        };
        this.Gc = function (b) {
            var d = a("section#related-links-frame");
            if (d) {
                var e = [];
                d.attr("data-title") && (e = d.attr("data-title").split(";"));
                c.japan_relatedlinks_url &&
                a.getJSON(c.japan_relatedlinks_url, function (f) {
                    var j = c.location.pathname, h = _.template(a("script.related-link").html()), k = [], n = [],
                        f = _.filter(f, function (a) {
                            return j != a.link_url
                        });
                    _.templateSettings.variable = "item";
                    b || (b = 2);
                    if (f.length <= b) k = f; else for (; k.length < b;) {
                        var m = Math.round(Math.random() * (f.length - 1));
                        c.location.pathname.indexOf(f[m].Ad) == -1 && (k.push(f[m]), n.push(f[m].title), f.splice(m, 1))
                    }
                    for (f = 0; f < k.length; f++) {
                        m = k[f];
                        m.video_tout == "yes" && (m["class"] = "video-icon");
                        if (m.title_crumbs && m.title_crumbs.length) for (var p =
                            0; p < m.title_crumbs.length; p++) if (e.length < p + 1 || m.title_crumbs[p] != e[p]) {
                            m.super_title = m.title_crumbs[p];
                            break
                        }
                        m.description = a("<div>").html(m.description).text();
                        d.append(h({item: m}))
                    }
                    gsAnalytics && gsAnalytics.handleSidebarToutImpression && gsAnalytics.handleSidebarToutImpression(n)
                })
            }
        };
        this.Rb = function () {
            a("body#homepage").length && c.country_msg_url && (!s || s[1] !== "hide") && c.country_msg_url && a.getJSON(c.country_msg_url, function (d) {
                if (d[GS.Geo.country] && d[GS.Geo.country] != "br") {
                    a("body");
                    var e = a("#global-nav"),
                        f = d[GS.Geo.country];
                    if (e && (e.show(), e.find("span.local-language").text(f.question), e.find("span.yes").text(f.yes), e.find("span.no").text(f.no), e.find("span.yes").on("click", function () {
                            c.location.href = f.url
                        }), e.find("span.no").on("click", function () {
                            e.hide();
                            var a = new Date;
                            a.setTime(a.getTime() + 2592E6);
                            b.cookie = "gsGlobalNav=hide; path=/; expires=" + a.toGMTString()
                        }), e.addClass(GS.Geo.country), GS.Geo.country == "us")) {
                        var h = e.find("span.local-language"), j = e.find("span.yes"), d = a("<a>");
                        e.find("div").empty();
                        d.attr("href", f.url);
                        d.append(h);
                        d.append(j);
                        e.find("div").append(d);
                        d.on("click", function () {
                            gsAnalytics && gsAnalytics.handleDataVizInteraction && gsAnalytics.handleDataVizInteraction(h.text() + " " + j.text(), "click")
                        })
                    }
                }
            })
        };
        this.pb = function () {
            a("#content").length && a("#content").attr("tabindex", "-1")
        };
        this.shuffle = function (a) {
            for (var b, c, d = a.length; d; b = Math.floor(Math.random() * d), c = a[--d], a[d] = a[b], a[b] = c) ;
            return a
        };
        this.Ja = function () {
            var a = {}, b, d = /\+/g, e = /([^&=]+)=?([^&]*)/g, f = c.location.href.split("?")[1];
            if (f) for (; b = e.exec(f);) a[decodeURIComponent(b[1].replace(d, " "))] = decodeURIComponent(b[2].replace(d, " "));
            return a
        };
        this.kd = function (b) {
            var c = GS.Sitewide.Ja(), d = b.urlParams, e = b.state ? b.state : {}, f = b.title ? b.title : "", h = "?";
            b.hardUpdate && b.hardUpdate || (d = a.extend(c, d));
            if (a.isEmptyObject(d)) h = ""; else {
                for (key in d) h += key + "=" + d[key] + "&";
                h.charAt(h.length - 1) == "&" && (h = h.substring(0, h.length - 1))
            }
            History.pushState(e, f, h)
        };
        this.yd = function () {
            var a = navigator.userAgent.toLowerCase();
            return a.indexOf("msie") !=
            -1 ? parseInt(a.split("msie")[1]) : !1
        };
        this.p = {qb: 0, hc: 0, scrollTop: 0, od: a(c).height(), Db: []};
        this.hb = function () {
            var e = a(c).height(), f = a(b).height(),
                h = c.pageYOffset !== d ? c.pageYOffset : (b.documentElement || b.body.parentNode || b.body).scrollTop,
                l = 0, l = e == f ? 100 : parseInt(100 * (h + e) / f, 10);
            GS.Sitewide.p.scrollTop = h;
            GS.Sitewide.p.curLoc = l;
            GS.Sitewide.p.maxLoc = Math.max(l, GS.Sitewide.p.maxLoc);
            GS.Sitewide.p.footPrint.push(l)
        };
        a(c).on("scroll", _.debounce(function () {
                GS.Sitewide.hb();
                a("body").trigger("gsScrollEnd")
            },
            250));
        this.Ia = function (a) {
            return (a = b.cookie.match("(?:^|;)\\s*" + a + "=([^;]*)")) ? a[1] : t
        };
        this.va = function (a, c, d, e) {
            if (a) a = a + "=" + c + ";", a += "path=" + (d ? d : "/") + ";", e && (a += "expires=" + e), b.cookie = a
        };
        this.Ha = function (a) {
            var b = JSON.parse(GS.Sitewide.Ia("gsABTest")) || {};
            return !a ? b : b[a]
        };
        this.Qc = function (a, b) {
            if (a) {
                var c = GS.Sitewide.Ha();
                c[a] = b;
                GS.Sitewide.va("gsABTest", JSON.stringify(c))
            }
        };
        this.ic = function () {
            a(".metric-module a.metric-link").on("click", function () {
                var b = a(this).closest(".metric-module").data("title"),
                    c = a(this).attr("href");
                b && c && gsAnalytics && gsAnalytics.handleDataVizInteraction && gsAnalytics.handleDataVizInteraction(b + ": " + c, "click")
            });
            a("body").on("gsScrollEnd", function () {
                var b = GS.Sitewide.p.scrollTop, c = GS.Sitewide.p.scrollTop + GS.Sitewide.p.winHeight,
                    d = a(".metric-module").length;
                a(".metric-module").each(function (e) {
                    var f = a(this);
                    e += 1;
                    var h = f.height(), k = f.offset().top, h = f.offset().top + h;
                    if (!f.hasClass("viewed") && (k >= b && k <= c || h >= b && h <= c)) f.addClass("viewed"), gsAnalytics && gsAnalytics.moduleViewed &&
                    gsAnalytics.moduleViewed(e, f.data("title"), d)
                })
            })
        };
        this.Xc = function () {
            if (!(a(".link-list-sticky-menu").length == 0 || a(".link-list-sticky-menu .menu-container").length == 0)) {
                var d = a(".link-list-sticky-menu .menu-container"),
                    e = a(".link-list-sticky-menu .menu-container").offset().top;
                a(b).on("scroll", function () {
                    a(c).scrollTop() > e ? d.css({position: "fixed"}) : d.css({position: "absolute"})
                });
                a(b).on("resize", function () {
                    e = a(".link-list-sticky-menu .menu-container").offset().top
                });
                setTimeout(function () {
                    if (e != a(".link-list-sticky-menu .menu-container").offset().top) e =
                        a(".link-list-sticky-menu .menu-container").offset().top
                }, 1E3)
            }
        };
        this.tb = function () {
            a(".toolkitGridItem").each(function () {
                var b, c = a(this);
                c.hover(function () {
                    clearTimeout(b);
                    c.addClass("hover")
                }, function () {
                    b = setTimeout(function () {
                        c.removeClass("hover")
                    }, 200)
                })
            })
        };
        this.xb = function () {
            function b(c) {
                var e = 0;
                c.find("li").each(function () {
                    e += a(this).outerWidth()
                });
                return e + 24 * c.find("li").length + d
            }

            var c = a(".gs-share-buttons"), d = 70;
            c.each(function () {
                a(this).find("li a").attr("tabindex", "-1");
                a(this).attr("data-width",
                    b(a(this)));
                a(this).attr("data-thumb-width", a(this).find("div").width());
                a(this).find("ul").width(b(a(this)))
            });
            c.on("click", function (b) {
                var c = a(this);
                if (a(b.target).parents("ul.share-services").length === 0) {
                    c.toggleClass("expanded");
                    c.find("div").width(c.hasClass("expanded") ? c.data("width") : c.data("thumb-width"));
                    var d = c.hasClass("expanded");
                    c.find("li a").attr("tabindex", d ? 0 : -1);
                    b.preventDefault()
                }
            })
        };
        this.Ra = function () {
            var b = (c.Va && (c.Va("only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)").gc ||
                c.Va("only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)").gc) || c.devicePixelRatio && c.devicePixelRatio >= 2) && /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
            b || a(".parse-retina").each(function () {
                var b = a(this).attr("src");
                b.indexOf("?resize=0.5xw:0.5xh") == -1 && a(this).attr("src", b + "?resize=0.5xw:0.5xh")
            });
            GS.Sitewide.va("gsRetina", b);
            return b
        }
    };
    return new GS.Sitewide
}(jQuery,
    this, this.document);
window.GS.Sitewide = GS.Sitewide;
window.GS.Sitewide.context = GS.Sitewide.context;
window.GS.Sitewide.context.region = GS.Sitewide.context.region;
window.GS.Sitewide.context.division = GS.Sitewide.context.region;
window.GS.Sitewide.isProd = GS.Sitewide.Qa;
window.GS.Sitewide.analyticsEscape = GS.Sitewide.A;
window.GS.Sitewide.doAnalytics = GS.Sitewide.g;
window.GS.Sitewide.initPlaceholder = GS.Sitewide.Oa;
window.GS.Sitewide.addResizeTimerFunction = GS.Sitewide.fa;
window.GS.Sitewide.addAndFireResizeTimerFunction = GS.Sitewide.D;
window.GS.Sitewide.shuffle = GS.Sitewide.shuffle;
window.GS.Sitewide.getUrlParams = GS.Sitewide.Ja;
window.GS.Sitewide.updateUrlParams = GS.Sitewide.kd;
window.GS.Sitewide.pageFootPrint = GS.Sitewide.p;
window.GS.Sitewide.pageFootPrint.curLoc = GS.Sitewide.p.qb;
window.GS.Sitewide.pageFootPrint.maxLoc = GS.Sitewide.p.hc;
window.GS.Sitewide.pageFootPrint.scrollTop = GS.Sitewide.p.scrollTop;
window.GS.Sitewide.pageFootPrint.winHeight = GS.Sitewide.p.od;
window.GS.Sitewide.pageFootPrint.footPrint = GS.Sitewide.p.Db;
window.GS.Sitewide.setCookie = GS.Sitewide.va;
window.GS.Sitewide.getCookie = GS.Sitewide.Ia;
window.GS.Sitewide.getABTest = GS.Sitewide.Ha;
window.GS.Sitewide.setABTest = GS.Sitewide.Qc;
window.GS.Sitewide.isRetina = GS.Sitewide.Ra;
window.GS.Sitewide.toutClickAnalytics = GS.Sitewide.gb;
GS.a.c("*", GS.Sitewide.Yb);
GS.a.c("*", GS.Sitewide.nb);
GS.a.c("*", GS.Sitewide.Ec);
GS.a.c("*", GS.Sitewide.zb);
GS.a.c("*", GS.Sitewide.pd);
GS.a.c("*", GS.Sitewide.Fc);
GS.a.c("*", GS.Sitewide.wb);
GS.a.c("*", GS.Sitewide.oc);
GS.a.c("*", GS.Sitewide.Mc);
GS.a.c("*", GS.Sitewide.pc);
GS.a.c("*", GS.Sitewide.rb);
GS.a.c("*", GS.Sitewide.$c);
GS.a.c("*", GS.Sitewide.matchHeight);
GS.a.c("*", GS.Sitewide.fc);
GS.a.c("*", GS.Sitewide.Oa);
GS.a.c("*", GS.Sitewide.gd);
GS.a.c("*", GS.Sitewide.fd);
GS.a.c("*", GS.Sitewide.ob);
GS.a.c("*", GS.Sitewide.Sb);
GS.a.c("*", GS.Sitewide.jb);
GS.a.c("*", GS.Sitewide.yc);
GS.a.c("*", GS.Sitewide.Zc);
GS.a.c("*", GS.Sitewide.Sc);
GS.a.c("*", GS.Sitewide.xc);
GS.a.c("*", GS.Sitewide.Sa);
GS.a.c("*", GS.Sitewide.cd);
GS.a.c("*", GS.Sitewide.dd);
GS.a.c("*", GS.Sitewide.ed);
GS.a.c("*", GS.Sitewide.Dc);
GS.a.c("*", GS.Sitewide.ec);
GS.a.c("*", GS.Sitewide.initFilterLinksList);
GS.a.c("*", GS.Sitewide.Gc);
GS.a.c("*", GS.Sitewide.Rc);
GS.a.c("*", GS.Sitewide.pb);
GS.a.c("*", GS.Sitewide.ic);
GS.a.c("*", GS.Sitewide.Xc);
GS.a.c("*", GS.Sitewide.tb);
GS.a.c("*", GS.Sitewide.xb);
GS.a.c("*", GS.Sitewide.Ra);
GS.a.c("*", GS.Sitewide.Cc);
GS.a.c("*", GS.Sitewide.La);
GS.a.c("*", GS.Sitewide.gb);
GS.a.c({className: "homepage"}, GS.Sitewide.La);
GS.a.c({className: "top-level"}, GS.Sitewide.md);
GS.a.c({className: "top-level"}, GS.Sitewide.Rb);
GS.a.c({className: "search-results"}, GS.Sitewide.Nc);
GS.a.c({className: "tenk-businesses"}, GS.Sitewide.eb);
GS.a.c({className: "meet-the-women"}, GS.Sitewide.eb);
GS.a.c({className: "sts-mailing"}, GS.Sitewide.Pc);
GS.a.c({className: "10kfilter"}, GS.Sitewide.bd);
GS.a.c({className: "progress"}, GS.Sitewide.zc);
GS.a.c({className: "meet-the-women"}, GS.Sitewide.ad);
GS.a.c({className: "blog"}, GS.Sitewide.Aa);
GS.a.c({className: "10ksb"}, GS.Sitewide.Kc);
GS.a.c({className: "financials"}, GS.Sitewide.yb);
GS.a.c({className: "offices"}, GS.Sitewide.mc);
GS.a.c({className: "offices"}, GS.Sitewide.oa);
GS.a.c({className: "offices"}, GS.Sitewide.Lc);
GS.a.c({className: "ten-thousand"}, GS.Sitewide.Na);
GS.a.c({className: "careerspeople"}, GS.Sitewide.Na);
GS.a.c({className: "stockquote"}, GS.Sitewide.Yc);
GS.a.c({className: "careersSearch"}, GS.Sitewide.Sa);
GS.a.c({className: "careersSearch"}, GS.Sitewide.tc);
GS.a.c({className: "careers"}, GS.Sitewide.ac);
GS.a.c({className: "ourthinking"}, GS.Sitewide.Wb);
GS.a.c({className: "sources"}, GS.Sitewide.Xb);
GS.a.c({className: "peoplePage"}, GS.Sitewide.Mb);
GS.a.c({className: "financialReports"}, GS.Sitewide.Jb);
GS.a.c({className: "enhancedOTAnalytics"}, GS.Sitewide.vd);
GS.a.c({className: "careers-dashboard"}, GS.Sitewide.Kb);
GS.a.c({className: "mediaRelationsIndex"}, GS.Sitewide.sc);
GS.a.c({className: "careersBlog"}, GS.Sitewide.mb);
GS.a.c({className: "our-thinkingt-article"}, GS.Sitewide.Lb);

/*
 Copyright 2011 Small Batch, Inc.

 Licensed under the Apache License, Version 2.0 (the "License"); you may not
 use this file except in compliance with the License. You may obtain a copy of
 the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 License for the specific language governing permissions and limitations under
 the License.
*/
function y(a, c, b) {
    var d = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : [];
    return function () {
        d.push.apply(d, arguments);
        return c.apply(a, d)
    }
}

function z(a, c) {
    this.ja = a;
    this.e = c
}

z.prototype.createElement = function (a, c, b) {
    a = this.ja.createElement(a);
    if (c) for (var d in c) if (c.hasOwnProperty(d)) d == "style" && this.e.getName() == "MSIE" ? a.style.cssText = c[d] : a.setAttribute(d, c[d]);
    b && a.appendChild(this.ja.createTextNode(b));
    return a
};

function A(a, c, b) {
    a = a.ja.getElementsByTagName(c)[0];
    if (!a) a = document.documentElement;
    a && a.lastChild && a.insertBefore(b, a.lastChild)
}

function aa(a) {
    function c() {
        document.body ? a() : setTimeout(c, 0)
    }

    c()
}

function B(a) {
    a.parentNode && a.parentNode.removeChild(a)
}

function C(a, c) {
    return a.createElement("link", {rel: "stylesheet", href: c})
}

function D(a, c) {
    return a.createElement("script", {src: c})
}

function E(a, c) {
    for (var b = a.className.split(/\s+/), d = 0, e = b.length; d < e; d++) if (b[d] == c) return;
    b.push(c);
    a.className = b.join(" ").replace(/^\s+/, "")
}

function F(a, c) {
    for (var b = a.className.split(/\s+/), d = [], e = 0, f = b.length; e < f; e++) b[e] != c && d.push(b[e]);
    a.className = d.join(" ").replace(/^\s+/, "").replace(/\s+$/, "")
}

function ba(a, c) {
    for (var b = a.className.split(/\s+/), d = 0, e = b.length; d < e; d++) if (b[d] == c) return !0;
    return !1
}

function G(a, c, b, d, e, f, h, k) {
    this.kc = a;
    this.ld = c;
    this.vb = b;
    this.ub = d;
    this.wc = e;
    this.vc = f;
    this.sb = h;
    this.nd = k
}

x = G.prototype;
x.getName = u("kc");
x.Qb = u("ld");
x.Hb = u("vb");
x.Ib = u("ub");
x.Nb = u("wc");
x.Ob = u("vc");
x.Gb = u("sb");
x.P = u("nd");

function H(a, c) {
    this.e = a;
    this.t = c
}

var ca = new G("Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", r, !1);
H.prototype.parse = function () {
    var a;
    if (this.e.indexOf("MSIE") != -1) if (a = I(this.e, /(MSIE [\d\w\.]+)/, 1), a != "") {
        var c = a.split(" ");
        a = c[0];
        c = c[1];
        a = new G(a, c, a, c, J(this), K(this), M(this.t), N(c) >= 6)
    } else a = new G("MSIE", "Unknown", "MSIE", "Unknown", J(this), K(this), M(this.t), !1); else if (this.e.indexOf("Opera") != -1) a:{
        var c = a = "Unknown", b = I(this.e, /(Presto\/[\d\w\.]+)/, 1);
        b != "" ? (c = b.split("/"), a = c[0], c = c[1]) : (this.e.indexOf("Gecko") != -1 && (a = "Gecko"), b = I(this.e, /rv:([^\)]+)/, 1), b != "" && (c = b));
        if (this.e.indexOf("Version/") !=
            -1 && (b = I(this.e, /Version\/([\d\.]+)/, 1), b != "")) {
            a = new G("Opera", b, a, c, J(this), K(this), M(this.t), N(b) >= 10);
            break a
        }
        b = I(this.e, /Opera[\/ ]([\d\.]+)/, 1);
        a = b != "" ? new G("Opera", b, a, c, J(this), K(this), M(this.t), N(b) >= 10) : new G("Opera", "Unknown", a, c, J(this), K(this), M(this.t), !1)
    } else if (this.e.indexOf("AppleWebKit") != -1) {
        a = J(this);
        c = K(this);
        b = I(this.e, /AppleWebKit\/([\d\.\+]+)/, 1);
        b == "" && (b = "Unknown");
        var d = "Unknown";
        this.e.indexOf("Chrome") != -1 ? d = "Chrome" : this.e.indexOf("Safari") != -1 ? d = "Safari" : this.e.indexOf("AdobeAIR") !=
            -1 && (d = "AdobeAIR");
        var e = "Unknown";
        this.e.indexOf("Version/") != -1 ? e = I(this.e, /Version\/([\d\.\w]+)/, 1) : d == "Chrome" ? e = I(this.e, /Chrome\/([\d\.]+)/, 1) : d == "AdobeAIR" && (e = I(this.e, /AdobeAIR\/([\d\.]+)/, 1));
        var f = !1;
        d == "AdobeAIR" ? (f = I(e, /\d+\.(\d+)/, 1), f = N(e) > 2 || N(e) == 2 && parseInt(f, 10) >= 5) : (f = I(b, /\d+\.(\d+)/, 1), f = N(b) >= 526 || N(b) >= 525 && parseInt(f, 10) >= 13);
        a = new G(d, e, "AppleWebKit", b, a, c, M(this.t), f)
    } else this.e.indexOf("Gecko") != -1 ? (c = a = "Unknown", d = !1, this.e.indexOf("Firefox") != -1 ? (a = "Firefox", b = I(this.e,
        /Firefox\/([\d\w\.]+)/, 1), b != "" && (d = I(b, /\d+\.(\d+)/, 1), c = b, d = b != "" && N(b) >= 3 && parseInt(d, 10) >= 5)) : this.e.indexOf("Mozilla") != -1 && (a = "Mozilla"), b = I(this.e, /rv:([^\)]+)/, 1), b == "" ? b = "Unknown" : d || (d = N(b), e = parseInt(I(b, /\d+\.(\d+)/, 1), 10), f = parseInt(I(b, /\d+\.\d+\.(\d+)/, 1), 10), d = d > 1 || d == 1 && e > 9 || d == 1 && e == 9 && f >= 2 || b.match(/1\.9\.1b[123]/) != t || b.match(/1\.9\.1\.[\d\.]+/) != t), a = new G(a, c, "Gecko", b, J(this), K(this), M(this.t), d)) : a = ca;
    return a
};

function J(a) {
    var c = I(a.e, /(iPod|iPad|iPhone|Android)/, 1);
    if (c != "") return c;
    a = I(a.e, /(Linux|Mac_PowerPC|Macintosh|Windows)/, 1);
    return a != "" ? (a == "Mac_PowerPC" && (a = "Macintosh"), a) : "Unknown"
}

function K(a) {
    var c = I(a.e, /(OS X|Windows NT|Android) ([^;)]+)/, 2);
    if (c) return c;
    return (c = I(a.e, /(iPhone )?OS ([\d_]+)/, 2)) ? c : (a = I(a.e, /Linux ([i\d]+)/, 1)) ? a : "Unknown"
}

function N(a) {
    a = I(a, /(\d+)/, 1);
    return a != "" ? parseInt(a, 10) : -1
}

function I(a, c, b) {
    return (a = a.match(c)) && a[b] ? a[b] : ""
}

function M(a) {
    if (a.documentMode) return a.documentMode
}

function da(a, c, b) {
    this.f = a;
    this.o = c;
    this.Ba = b;
    this.s = "wf";
    this.q = new ea("-")
}

function fa(a) {
    E(a.o, a.q.n(a.s, "loading"));
    O(a, "loading")
}

function ga(a) {
    F(a.o, a.q.n(a.s, "loading"));
    ba(a.o, a.q.n(a.s, "active")) || E(a.o, a.q.n(a.s, "inactive"));
    O(a, "inactive")
}

function O(a, c, b, d) {
    if (a.Ba[c]) a.Ba[c](b, d)
}

function ha() {
    this.Wa = {}
}

function ia(a, c) {
    var b = [], d;
    for (d in c) if (c.hasOwnProperty(d)) {
        var e = a.Wa[d];
        e && b.push(e(c[d]))
    }
    return b
}

function P(a, c, b, d, e) {
    this.f = a;
    this.U = c;
    this.V = b;
    this.M = d;
    this.ma = e;
    this.Da = 0;
    this.ab = this.Ua = !1
}

P.prototype.watch = function (a, c, b, d) {
    for (var e = a.length, f = 0; f < e; f++) {
        var h = a[f];
        c[h] || (c[h] = ["n4"]);
        this.Da += c[h].length
    }
    if (d) this.Ua = d;
    for (f = 0; f < e; f++) for (var h = a[f], d = c[h], k = b[h], n = 0, m = d.length; n < m; n++) {
        var q = d[n], p = this.U, s = h, w = q;
        E(p.o, p.q.n(p.s, s, w, "loading"));
        O(p, "fontloading", s, w);
        p = y(this, this.Ab);
        s = y(this, this.Bb);
        new ja(p, s, this.f, this.V, this.M, this.ma, h, q, k)
    }
};
P.prototype.Ab = function (a, c) {
    var b = this.U;
    F(b.o, b.q.n(b.s, a, c, "loading"));
    F(b.o, b.q.n(b.s, a, c, "inactive"));
    E(b.o, b.q.n(b.s, a, c, "active"));
    O(b, "fontactive", a, c);
    this.ab = !0;
    ka(this)
};
P.prototype.Bb = function (a, c) {
    var b = this.U;
    F(b.o, b.q.n(b.s, a, c, "loading"));
    ba(b.o, b.q.n(b.s, a, c, "active")) || E(b.o, b.q.n(b.s, a, c, "inactive"));
    O(b, "fontinactive", a, c);
    ka(this)
};

function ka(a) {
    if (--a.Da == 0 && a.Ua) a.ab ? (a = a.U, F(a.o, a.q.n(a.s, "loading")), F(a.o, a.q.n(a.s, "inactive")), E(a.o, a.q.n(a.s, "active")), O(a, "active")) : ga(a.U)
}

function ja(a, c, b, d, e, f, h, k, n) {
    this.lb = a;
    this.Vb = c;
    this.f = b;
    this.V = d;
    this.M = e;
    this.ma = f;
    this.jc = new la;
    this.O = new T;
    this.la = h;
    this.ka = k;
    this.Cb = n || "BESs";
    this.qc = ma(this, "arial,'URW Gothic L',sans-serif");
    this.rc = ma(this, "Georgia,'Century Schoolbook L',serif");
    this.ra = na(this, "arial,'URW Gothic L',sans-serif");
    this.sa = na(this, "Georgia,'Century Schoolbook L',serif");
    this.Wc = f();
    this.Ca()
}

ja.prototype.Ca = function () {
    var a = this.V.na(this.sa);
    this.qc != this.V.na(this.ra) || this.rc != a ? (a = this.lb, B(this.ra), B(this.sa), a(this.la, this.ka)) : this.ma() - this.Wc < 5E3 ? oa(this) : (a = this.Vb, B(this.ra), B(this.sa), a(this.la, this.ka))
};

function oa(a) {
    a.M(function (a, b) {
        return function () {
            b.call(a)
        }
    }(a, a.Ca), 50)
}

function ma(a, c) {
    var b = na(a, c, !0), d = a.V.na(b);
    B(b);
    return d
}

function na(a, c, b) {
    var d = a.O.expand(a.ka),
        c = a.f.createElement("span", {style: "position:absolute;top:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;font-family:" + (b ? "" : a.jc.quote(a.la) + ",") + c + ";" + d}, a.Cb);
    A(a.f, "body", c);
    return c
}

function U(a, c, b, d, e) {
    this.f = a;
    this.Ga = c;
    this.o = b;
    this.M = d;
    this.e = e;
    this.pa = this.qa = 0
}

U.prototype.G = function (a, c) {
    this.Ga.Wa[a] = c
};
U.prototype.load = function (a) {
    var c = new da(this.f, this.o, a);
    this.e.P() ? pa(this, c, a) : ga(c)
};
U.prototype.Zb = function (a, c, b, d) {
    d ? a.load(y(this, this.nc, c, b)) : (a = --this.qa == 0, this.pa--, a && (this.pa == 0 ? ga(c) : fa(c)), b.watch([], {}, {}, a))
};
U.prototype.nc = function (a, c, b, d, e) {
    var f = --this.qa == 0;
    f && fa(a);
    this.M(y(this, function (a, b, c, d, e) {
        a.watch(b, c || {}, d || {}, e)
    }, c, b, d, e, f))
};

function pa(a, c, b) {
    b = ia(a.Ga, b);
    a.pa = a.qa = b.length;
    for (var d = new P(a.f, c, {
        na: function (a) {
            return a.offsetWidth
        }
    }, a.M, function () {
        return (new Date).getTime()
    }), e = 0, f = b.length; e < f; e++) {
        var h = b[e];
        h.R(a.e, y(a, a.Zb, h, c, d))
    }
}

function ea(a) {
    this.bc = a || "-"
}

ea.prototype.n = function (a) {
    for (var c = [], b = 0; b < arguments.length; b++) c.push(arguments[b].replace(/[\W_]+/g, "").toLowerCase());
    return c.join(this.bc)
};

function la() {
    this.Ya = "'"
}

la.prototype.quote = function (a) {
    for (var c = [], a = a.split(/,\s*/), b = 0; b < a.length; b++) {
        var d = a[b].replace(/['"]/g, "");
        d.indexOf(" ") == -1 ? c.push(d) : c.push(this.Ya + d + this.Ya)
    }
    return c.join(",")
};

function T() {
    this.ca = qa;
    this.B = ra
}

var qa = ["font-style", "font-weight"], ra = {
    "font-style": [["n", "normal"], ["i", "italic"], ["o", "oblique"]],
    "font-weight": [["1", "100"], ["2", "200"], ["3", "300"], ["4", "400"], ["5", "500"], ["6", "600"], ["7", "700"], ["8", "800"], ["9", "900"], ["4", "normal"], ["7", "bold"]]
};

function V(a, c, b) {
    this.Ma = a;
    this.Bc = c;
    this.B = b
}

V.prototype.compact = function (a, c) {
    for (var b = 0; b < this.B.length; b++) if (c == this.B[b][1]) {
        a[this.Ma] = this.B[b][0];
        break
    }
};
V.prototype.expand = function (a, c) {
    for (var b = 0; b < this.B.length; b++) if (c == this.B[b][0]) {
        a[this.Ma] = this.Bc + ":" + this.B[b][1];
        break
    }
};
T.prototype.compact = function (a) {
    for (var c = ["n", "4"], a = a.split(";"), b = 0, d = a.length; b < d; b++) {
        var e = a[b].replace(/\s+/g, "").split(":");
        if (e.length == 2) {
            var f = e[1];
            a:{
                for (var e = e[0], h = 0; h < this.ca.length; h++) if (e == this.ca[h]) {
                    e = new V(h, e, this.B[e]);
                    break a
                }
                e = t
            }
            e && e.compact(c, f)
        }
    }
    return c.join("")
};
T.prototype.expand = function (a) {
    if (a.length != 2) return t;
    for (var c = [t, t], b = 0, d = this.ca.length; b < d; b++) {
        var e = this.ca[b];
        (new V(b, e, this.B[e])).expand(c, a.substr(b, 1))
    }
    return c[0] && c[1] ? c.join(";") + ";" : t
};
window.WebFont = function () {
    var a = (new H(navigator.userAgent, document)).parse();
    return new U(new z(document, a), new ha, document.documentElement, function (a, b) {
        setTimeout(a, b)
    }, a)
}();
window.WebFont.load = window.WebFont.load;
window.WebFont.addModule = window.WebFont.G;
G.prototype.getName = G.prototype.getName;
G.prototype.getVersion = G.prototype.Qb;
G.prototype.getEngine = G.prototype.Hb;
G.prototype.getEngineVersion = G.prototype.Ib;
G.prototype.getPlatform = G.prototype.Nb;
G.prototype.getPlatformVersion = G.prototype.Ob;
G.prototype.getDocumentMode = G.prototype.Gb;
G.prototype.isSupportingWebFont = G.prototype.P;

function sa(a, c) {
    this.f = a;
    this.h = c
}

var ta = {regular: "n4", bold: "n7", italic: "i4", bolditalic: "i7", r: "n4", b: "n7", i: "i4", bi: "i7"};
sa.prototype.R = function (a, c) {
    return c(a.P())
};
sa.prototype.load = function (a) {
    var c, b;
    A(this.f, "head", C(this.f, ("https:" == document.location.protocol ? "https:" : "http:") + "//webfonts.fontslive.com/css/" + this.h.key + ".css"));
    var d = this.h.families, e, f;
    e = [];
    f = {};
    for (var h = 0, k = d.length; h < k; h++) {
        b = b = c = r;
        b = d[h].split(":");
        c = b[0];
        if (b[1]) {
            b = b[1].split(",");
            for (var n = [], m = 0, q = b.length; m < q; m++) {
                var p = b[m];
                if (p) {
                    var s = ta[p];
                    n.push(s ? s : p)
                }
            }
            b = n
        } else b = ["n4"];
        e.push(c);
        f[c] = b
    }
    a(e, f)
};
window.WebFont.G("ascender", function (a) {
    var c = (new H(navigator.userAgent, document)).parse();
    return new sa(new z(document, c), a)
});

function ua(a) {
    this.ga = a ? a : ("https:" == window.location.protocol ? "https:" : "http:") + va;
    this.k = [];
    this.xa = []
}

var va = "//fonts.googleapis.com/css";
ua.prototype.n = function () {
    if (this.k.length == 0) throw Error("No fonts to load !");
    if (this.ga.indexOf("kit=") != -1) return this.ga;
    for (var a = this.k.length, c = [], b = 0; b < a; b++) c.push(this.k[b].replace(/ /g, "+"));
    a = this.ga + "?family=" + c.join("%7C");
    this.xa.length > 0 && (a += "&subset=" + this.xa.join(","));
    return a
};

function wa(a) {
    this.k = a;
    this.Xa = [];
    this.ib = {};
    this.Z = {};
    this.O = new T
}

var xa = {
    ultralight: "n2",
    light: "n3",
    regular: "n4",
    bold: "n7",
    italic: "i4",
    bolditalic: "i7",
    ul: "n2",
    l: "n3",
    r: "n4",
    b: "n7",
    i: "i4",
    bi: "i7"
}, ya = {
    latin: "BESs",
    cyrillic: "&#1081;&#1103;&#1046;",
    greek: "&#945;&#946;&#931;",
    khmer: "&#x1780;&#x1781;&#x1782;",
    Hanuman: "&#x1780;&#x1781;&#x1782;"
};
wa.prototype.parse = function () {
    var g;
    for (var a = this.k.length, c = 0; c < a; c++) {
        var b = this.k[c].split(":"), d = b[0], e = ["n4"];
        if (b.length >= 2) {
            var f;
            var h = b[1];
            f = [];
            if (h) for (var h = h.split(","), k = h.length, n = 0; n < k; n++) {
                var m;
                m = h[n];
                if (m.match(/^[\w ]+$/)) {
                    var q = xa[m];
                    q ? m = q : (q = m.match(/^(\d*)(\w*)$/), m = q[1], q = q[2], g = (m = this.O.expand([q ? q : "n", m ? m.substr(0, 1) : "4"].join(""))) ? this.O.compact(m) : t, m = g)
                } else m = "";
                m && f.push(m)
            }
            f.length > 0 && (e = f);
            b.length == 3 && (b = b[2], f = [], b = !b ? f : b.split(","), b.length > 0 && (b = ya[b[0]]) && (this.Z[d] =
                b))
        }
        this.Z[d] || (b = ya[d]) && (this.Z[d] = b);
        this.Xa.push(d);
        this.ib[d] = e
    }
};

function W(a, c, b) {
    this.e = a;
    this.f = c;
    this.h = b
}

W.prototype.R = function (a, c) {
    c(a.P())
};
W.prototype.load = function (a) {
    this.e.getName() == "MSIE" && this.h.blocking != !0 ? aa(y(this, this.Pa, a)) : this.Pa(a)
};
W.prototype.Pa = function (a) {
    for (var c = this.f, b = new ua(this.h.api), d = this.h.families, e = d.length, f = 0; f < e; f++) {
        var h = d[f].split(":");
        h.length == 3 && b.xa.push(h.pop());
        b.k.push(h.join(":"))
    }
    d = new wa(d);
    d.parse();
    A(c, "head", C(c, b.n()));
    a(d.Xa, d.ib, d.Z)
};
window.WebFont.G("google", function (a) {
    var c = (new H(navigator.userAgent, document)).parse();
    return new W(c, new z(document, c), a)
});

function za(a, c) {
    this.f = a;
    this.h = c
}

za.prototype.load = function (a) {
    for (var c = this.h.urls || [], b = this.h.families || [], d = 0, e = c.length; d < e; d++) A(this.f, "head", C(this.f, c[d]));
    a(b)
};
za.prototype.R = function (a, c) {
    return c(a.P())
};
window.WebFont.G("custom", function (a) {
    var c = (new H(navigator.userAgent, document)).parse();
    return new za(new z(document, c), a)
});

function X(a, c, b) {
    this.w = a;
    this.f = c;
    this.h = b;
    this.k = [];
    this.I = {};
    this.O = new T
}

X.prototype.W = function (a) {
    return (this.h.api || "http://fontdeck.com/api/v1/project-info?") + "project=" + a + "&domain=" + document.location.hostname + "&callback=window.__webfontfontdeckmodule__[" + a + "]"
};
X.prototype.R = function (a, c) {
    var b = this.h.id, d = this.h.families || t, e = this;
    b ? (this.w.__webfontfontdeckmodule__ || (this.w.__webfontfontdeckmodule__ = {}), this.w.__webfontfontdeckmodule__[b] = function (a) {
        A(e.f, "head", C(e.f, a.css));
        for (var b = 0, k = a.provides.length; b < k; ++b) {
            var n = a.provides[b];
            e.k.push(n.name);
            e.I[n.name] = [e.O.compact("font-weight:" + n.weight + ";font-style:" + n.style)]
        }
        if (d !== t) e.k = d;
        c(!0)
    }, A(this.f, "head", D(this.f, this.W(b)))) : c(!0)
};
X.prototype.load = function (a) {
    a(this.k, this.I)
};
window.WebFont.G("fontdeck", function (a) {
    var c = (new H(navigator.userAgent, document)).parse();
    return new X(window, new z(document, c), a)
});

function Y(a, c, b, d, e) {
    this.w = a;
    this.e = c;
    this.f = b;
    this.t = d;
    this.h = e;
    this.k = [];
    this.I = {}
}

Y.prototype.R = function (a, c) {
    var b = this, d = b.h.projectId;
    if (d) {
        var e = D(b.f, b.W(d));
        e.id = "__MonotypeAPIScript__" + d;
        e.onreadystatechange = function (a) {
            if (e.readyState === "loaded" || e.readyState === "complete") e.onreadystatechange = t, e.onload(a)
        };
        e.onload = function () {
            if (b.w["__mti_fntLst" + d]) {
                var e = b.w["__mti_fntLst" + d]();
                if (e && e.length) {
                    var h;
                    for (h = 0; h < e.length; h++) b.k.push(e[h].fontfamily)
                }
            }
            c(a.P())
        };
        A(this.f, "head", e)
    } else c(!0)
};
Y.prototype.W = function (a) {
    var c = this.protocol(), b = (this.h.api || "fast.fonts.com/jsapi").replace(/^.*http(s?):(\/\/)?/, "");
    return c + "//" + b + "/" + a + ".js"
};
Y.prototype.load = function (a) {
    a(this.k, this.I)
};
Y.prototype.protocol = function () {
    var a = ["http:", "https:"], c = a[0];
    if (this.t && this.t.location && this.t.location.protocol) for (var b = 0, b = 0; b < a.length; b++) if (this.t.location.protocol === a[b]) return this.t.location.protocol;
    return c
};
window.WebFont.G("monotype", function (a) {
    var c = (new H(navigator.userAgent, document)).parse();
    return new Y(window, c, new z(document, c), document, a)
});

function Z(a, c, b) {
    this.w = a;
    this.f = c;
    this.h = b;
    this.k = [];
    this.I = {}
}

Z.prototype.W = function (a) {
    return (this.h.api || "http://use.typekit.com") + "/" + a + ".js"
};
Z.prototype.R = function (a, c) {
    var b = this.h.id, d = this.h, e = this;
    b ? (this.w.__webfonttypekitmodule__ || (this.w.__webfonttypekitmodule__ = {}), this.w.__webfonttypekitmodule__[b] = function (b) {
        b(a, d, function (a, b, d) {
            e.k = b;
            e.I = d;
            c(a)
        })
    }, A(this.f, "head", D(this.f, this.W(b)))) : c(!0)
};
Z.prototype.load = function (a) {
    a(this.k, this.I)
};
window.WebFont.G("typekit", function (a) {
    var c = (new H(navigator.userAgent, document)).parse();
    return new Z(window, new z(document, c), a)
});
window.WebFontConfig && window.WebFont.load(window.WebFontConfig);
GS = GS || {};
GS.j = function (a) {
    GS.j = function () {
        this.init = function () {
            GS.j.oa()
        };
        this.oa = function () {
            a(".map-container");
            var c = [];
            GS.j.aa = a(".map-container img");
            GS.j.za = a("map#countries area, map#countries_sm area, .country-list li a");
            GS.j.Za = a(".country-list li a");
            GS.j.Za.each(function (b, d) {
                c.push("a/pgs/content/images/country-selector/" + a(d).attr("data-country") + "_over.png")
            });
            a(c).each(function () {
                a("<img />").attr("src", this)
            });
            a(GS.j.za).mouseenter(function () {
                GS.j.Vc(a(this).attr("data-country"))
            });
            a(GS.j.za).mouseleave(function () {
                GS.j.Tb()
            });
            a("map#countries area, map#countries_sm area").focus(function () {
                a(this).blur()
            });
            GS.j.bb();
            a(window).resize(function () {
                GS.j.bb()
            })
        };
        this.Vc = function (c) {
            GS.j.aa.attr("src", "a/pgs/content/images/country-selector/" + c + "_over.png");
            a('.country-list li a[data-country="' + c + '"]').addClass("hover")
        };
        this.Tb = function () {
            GS.j.aa.attr("src", "a/pgs/content/images/country-selector/map.png");
            GS.j.Za.removeClass("hover")
        };
        this.bb = function () {
            a("body").innerWidth() > 1230 ? GS.j.aa.attr("usemap", "#countries") : GS.j.aa.attr("usemap",
                "#countries_sm")
        }
    };
    return new GS.j
}(jQuery);
GS.a.c("*", GS.j.init);