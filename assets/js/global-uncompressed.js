// (jQuery 1.2.6 + Smooth scroll + Shadowbox + Parallax + Filters + Déclarations)

    /* ----------- JQUERY 1.2.6 ----------- */

(function () {
    function m(a, c) {
        c.src ? b.ajax({
            url: c.src,
            async: !1,
            dataType: "script"
        }) : b.globalEval(c.text || c.textContent || c.innerHTML || "");
        c.parentNode && c.parentNode.removeChild(c)
    }

    function D(a, c) {
        return a[0] && parseInt(b.curCSS(a[0], c, !0), 10) || 0
    }

    function H() {
        if (!x) {
            x = !0;
            document.addEventListener && !b.browser.opera && document.addEventListener("DOMContentLoaded", b.ready, !1);
            b.browser.msie && window == top && function () {
                if (!b.isReady) {
                    try {
                        document.documentElement.doScroll("left")
                    } catch (a) {
                        setTimeout(arguments.callee, 0);
                        return
                    }
                    b.ready()
                }
            }();
            b.browser.opera && document.addEventListener("DOMContentLoaded", function () {
                if (!b.isReady) {
                    for (var a = 0; a < document.styleSheets.length; a++) {
                        if (document.styleSheets[a].disabled) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                    }
                    b.ready()
                }
            }, !1);
            if (b.browser.safari) {
                var a;
                (function () {
                    b.isReady || ("loaded" != document.readyState && "complete" != document.readyState ? setTimeout(arguments.callee, 0) : (a === k && (a = b("style, link[rel=stylesheet]").length), document.styleSheets.length != a ? setTimeout(arguments.callee, 0) : b.ready()))
                })()
            }
            b.event.add(window, "load", b.ready)
        }
    }
    var L = window.jQuery,
        I = window.$,
        b = window.jQuery = window.$ = function (a, c) {
            return new b.fn.init(a, c)
        }, P = /^[^<]*(<(.|\s)+>)[^>]*$|^#(\w+)$/,
        n = /^.[^:#\[\.]*$/,
        k;
    b.fn = b.prototype = {
        init: function (a, c) {
            a = a || document;
            if (a.nodeType) {
                return this[0] = a, this.length = 1, this
            }
            if ("string" == typeof a) {
                var d = P.exec(a);
                if (!d || !d[1] && c) {
                    return b(c).find(a)
                }
                if (d[1]) {
                    a = b.clean([d[1]], c)
                } else {
                    var f = document.getElementById(d[3]);
                    if (f) {
                        return f.id != d[3] ? b().find(a) : b(f)
                    }
                    a = []
                }
            } else {
                if (b.isFunction(a)) {
                    return b(document)[b.fn.ready ? "ready" : "load"](a)
                }
            }
            return this.setArray(b.makeArray(a))
        },
        jquery: "1.2.6",
        size: function () {
            return this.length
        },
        length: 0,
        get: function (a) {
            return a == k ? b.makeArray(this) : this[a]
        },
        pushStack: function (a) {
            a = b(a);
            a.prevObject = this;
            return a
        },
        setArray: function (a) {
            this.length = 0;
            Array.prototype.push.apply(this, a);
            return this
        },
        each: function (a, c) {
            return b.each(this, a, c)
        },
        index: function (a) {
            return b.inArray(a && a.jquery ? a[0] : a, this)
        },
        attr: function (a, c, d) {
            var f = a;
            if (a.constructor == String) {
                if (c === k) {
                    return this[0] && b[d || "attr"](this[0], a)
                }
                f = {};
                f[a] = c
            }
            return this.each(function (c) {
                for (a in f) {
                    b.attr(d ? this.style : this, a, b.prop(this, f[a], d, c, a))
                }
            })
        },
        css: function (a, c) {
            ("width" == a || "height" == a) && 0 > parseFloat(c) && (c = k);
            return this.attr(a, c, "curCSS")
        },
        text: function (a) {
            if ("object" != typeof a && null != a) {
                return this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(a))
            }
            var c = "";
            b.each(a || this, function () {
                b.each(this.childNodes, function () {
                    8 != this.nodeType && (c += 1 != this.nodeType ? this.nodeValue : b.fn.text([this]))
                })
            });
            return c
        },
        wrapAll: function (a) {
            this[0] && b(a, this[0].ownerDocument).clone().insertBefore(this[0]).map(function () {
                for (var a = this; a.firstChild;) {
                    a = a.firstChild
                }
                return a
            }).append(this);
            return this
        },
        wrapInner: function (a) {
            return this.each(function () {
                b(this).contents().wrapAll(a)
            })
        },
        wrap: function (a) {
            return this.each(function () {
                b(this).wrapAll(a)
            })
        },
        append: function () {
            return this.domManip(arguments, !0, !1, function (a) {
                1 == this.nodeType && this.appendChild(a)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, !0, function (a) {
                1 == this.nodeType && this.insertBefore(a, this.firstChild)
            })
        },
        before: function () {
            return this.domManip(arguments, !1, !1, function (a) {
                this.parentNode.insertBefore(a, this)
            })
        },
        after: function () {
            return this.domManip(arguments, !1, !0, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        end: function () {
            return this.prevObject || b([])
        },
        find: function (a) {
            var c = b.map(this, function (c) {
                return b.find(a, c)
            });
            return this.pushStack(/[^+>] [^+>]/.test(a) || -1 < a.indexOf("..") ? b.unique(c) : c)
        },
        clone: function (a) {
            var c = this.map(function () {
                if (b.browser.msie && !b.isXMLDoc(this)) {
                    var a = this.cloneNode(!0),
                        c = document.createElement("div");
                    c.appendChild(a);
                    return b.clean([c.innerHTML])[0]
                }
                return this.cloneNode(!0)
            }),
                d = c.find("*").andSelf().each(function () {
                    this[s] != k && (this[s] = null)
                });
            !0 === a && this.find("*").andSelf().each(function (a) {
                if (3 != this.nodeType) {
                    var c = b.data(this, "events"),
                        h;
                    for (h in c) {
                        for (var v in c[h]) {
                            b.event.add(d[a], h, c[h][v], c[h][v].data)
                        }
                    }
                }
            });
            return c
        },
        filter: function (a) {
            return this.pushStack(b.isFunction(a) && b.grep(this, function (c, b) {
                return a.call(c, b)
            }) || b.multiFilter(a, this))
        },
        not: function (a) {
            if (a.constructor == String) {
                if (n.test(a)) {
                    return this.pushStack(b.multiFilter(a, this, !0))
                }
                a = b.multiFilter(a, this)
            }
            var c = a.length && a[a.length - 1] !== k && !a.nodeType;
            return this.filter(function () {
                return c ? 0 > b.inArray(this, a) : this != a
            })
        },
        add: function (a) {
            return this.pushStack(b.unique(b.merge(this.get(), "string" == typeof a ? b(a) : b.makeArray(a))))
        },
        is: function (a) {
            return !!a && 0 < b.multiFilter(a, this).length
        },
        hasClass: function (a) {
            return this.is("." + a)
        },
        val: function (a) {
            if (a == k) {
                if (this.length) {
                    var c = this[0];
                    if (b.nodeName(c, "select")) {
                        var d = c.selectedIndex,
                            f = [],
                            g = c.options,
                            c = "select-one" == c.type;
                        if (0 > d) {
                            return null
                        }
                        for (var h = c ? d : 0, d = c ? d + 1 : g.length; h < d; h++) {
                            var v = g[h];
                            if (v.selected) {
                                a = b.browser.msie && !v.attributes.value.specified ? v.text : v.value;
                                if (c) {
                                    return a
                                }
                                f.push(a)
                            }
                        }
                        return f
                    }
                    return (this[0].value || "").replace(/\r/g, "")
                }
                return k
            }
            a.constructor == Number && (a += "");
            return this.each(function () {
                if (1 == this.nodeType) {
                    if (a.constructor == Array && /radio|checkbox/.test(this.type)) {
                        this.checked = 0 <= b.inArray(this.value, a) || 0 <= b.inArray(this.name, a)
                    } else {
                        if (b.nodeName(this, "select")) {
                            var c = b.makeArray(a);
                            b("option", this).each(function () {
                                this.selected = 0 <= b.inArray(this.value, c) || 0 <= b.inArray(this.text, c)
                            });
                            c.length || (this.selectedIndex = -1)
                        } else {
                            this.value = a
                        }
                    }
                }
            })
        },
        html: function (a) {
            return a == k ? this[0] ? this[0].innerHTML : null : this.empty().append(a)
        },
        replaceWith: function (a) {
            return this.after(a).remove()
        },
        eq: function (a) {
            return this.slice(a, a + 1)
        },
        slice: function () {
            return this.pushStack(Array.prototype.slice.apply(this, arguments))
        },
        map: function (a) {
            return this.pushStack(b.map(this, function (c, b) {
                return a.call(c, b, c)
            }))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        },
        data: function (a, c) {
            var d = a.split(".");
            d[1] = d[1] ? "." + d[1] : "";
            if (c === k) {
                var f = this.triggerHandler("getData" + d[1] + "!", [d[0]]);
                f === k && this.length && (f = b.data(this[0], a));
                return f === k && d[1] ? this.data(d[0]) : f
            }
            return this.trigger("setData" + d[1] + "!", [d[0], c]).each(function () {
                b.data(this, a, c)
            })
        },
        removeData: function (a) {
            return this.each(function () {
                b.removeData(this, a)
            })
        },
        domManip: function (a, c, d, f) {
            var g = 1 < this.length,
                h;
            return this.each(function () {
                h || (h = b.clean(a, this.ownerDocument), d && h.reverse());
                var v = this;
                c && b.nodeName(this, "table") && b.nodeName(h[0], "tr") && (v = this.getElementsByTagName("tbody")[0] || this.appendChild(this.ownerDocument.createElement("tbody")));
                var k = b([]);
                b.each(h, function () {
                    var a = g ? b(this).clone(!0)[0] : this;
                    b.nodeName(a, "script") ? k = k.add(a) : (1 == a.nodeType && (k = k.add(b("script", a).remove())), f.call(v, a))
                });
                k.each(m)
            })
        }
    };
    b.fn.init.prototype = b.fn;
    b.extend = b.fn.extend = function () {
        var a = arguments[0] || {}, c = 1,
            d = arguments.length,
            f = !1,
            g;
        a.constructor == Boolean && (f = a, a = arguments[1] || {}, c = 2);
        "object" != typeof a && "function" != typeof a && (a = {});
        d == c && (a = this, --c);
        for (; c < d; c++) {
            if (null != (g = arguments[c])) {
                for (var h in g) {
                    var v = a[h],
                        n = g[h];
                    a !== n && (f && n && "object" == typeof n && !n.nodeType ? a[h] = b.extend(f, v || (null != n.length ? [] : {}), n) : n !== k && (a[h] = n))
                }
            }
        }
        return a
    };
    var s = "jQuery" + +new Date,
        y = 0,
        l = {}, u = /z-?index|font-?weight|opacity|zoom|line-?height/i,
        z = document.defaultView || {};
    b.extend({
        noConflict: function (a) {
            window.$ = I;
            a && (window.jQuery = L);
            return b
        },
        isFunction: function (a) {
            return !!a && "string" != typeof a && !a.nodeName && a.constructor != Array && /^[\s[]?function/.test(a + "")
        },
        isXMLDoc: function (a) {
            return a.documentElement && !a.body || a.tagName && a.ownerDocument && !a.ownerDocument.body
        },
        globalEval: function (a) {
            if (a = b.trim(a)) {
                var c = document.getElementsByTagName("head")[0] || document.documentElement,
                    d = document.createElement("script");
                d.type = "text/javascript";
                b.browser.msie ? d.text = a : d.appendChild(document.createTextNode(a));
                c.insertBefore(d, c.firstChild);
                c.removeChild(d)
            }
        },
        nodeName: function (a, c) {
            return a.nodeName && a.nodeName.toUpperCase() == c.toUpperCase()
        },
        cache: {},
        data: function (a, c, d) {
            a = a == window ? l : a;
            var f = a[s];
            f || (f = a[s] = ++y);
            c && !b.cache[f] && (b.cache[f] = {});
            d !== k && (b.cache[f][c] = d);
            return c ? b.cache[f][c] : f
        },
        removeData: function (a, c) {
            a = a == window ? l : a;
            var d = a[s];
            if (c) {
                if (b.cache[d]) {
                    delete b.cache[d][c];
                    c = "";
                    for (c in b.cache[d]) {
                        break
                    }
                    c || b.removeData(a)
                }
            } else {
                try {
                    delete a[s]
                } catch (f) {
                    a.removeAttribute && a.removeAttribute(s)
                }
                delete b.cache[d]
            }
        },
        each: function (a, c, b) {
            var f, g = 0,
                h = a.length;
            if (b) {
                if (h == k) {
                    for (f in a) {
                        if (!1 === c.apply(a[f], b)) {
                            break
                        }
                    }
                } else {
                    for (; g < h && !1 !== c.apply(a[g++], b);) {}
                }
            } else {
                if (h == k) {
                    for (f in a) {
                        if (!1 === c.call(a[f], f, a[f])) {
                            break
                        }
                    }
                } else {
                    for (b = a[0]; g < h && !1 !== c.call(b, g, b); b = a[++g]) {}
                }
            }
            return a
        },
        prop: function (a, c, d, f, g) {
            b.isFunction(c) && (c = c.call(a, f));
            return c && c.constructor == Number && "curCSS" == d && !u.test(g) ? c + "px" : c
        },
        className: {
            add: function (a, c) {
                b.each((c || "").split(/\s+/), function (c, f) {
                    1 != a.nodeType || b.className.has(a.className, f) || (a.className += (a.className ? " " : "") + f)
                })
            },
            remove: function (a, c) {
                1 == a.nodeType && (a.className = c != k ? b.grep(a.className.split(/\s+/), function (a) {
                    return !b.className.has(c, a)
                }).join(" ") : "")
            },
            has: function (a, c) {
                return -1 < b.inArray(c, (a.className || a).toString().split(/\s+/))
            }
        },
        swap: function (a, c, b) {
            var f = {}, g;
            for (g in c) {
                f[g] = a.style[g], a.style[g] = c[g]
            }
            b.call(a);
            for (g in c) {
                a.style[g] = f[g]
            }
        },
        css: function (a, c, d) {
            if ("width" == c || "height" == c) {
                var f;
                d = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                };
                var g = "width" == c ? ["Left", "Right"] : ["Top", "Bottom"],
                    h = function () {
                        f = "width" == c ? a.offsetWidth : a.offsetHeight;
                        var d = 0,
                            h = 0;
                        b.each(g, function () {
                            d += parseFloat(b.curCSS(a, "padding" + this, !0)) || 0;
                            h += parseFloat(b.curCSS(a, "border" + this + "Width", !0)) || 0
                        });
                        f -= Math.round(d + h)
                    };
                b(a).is(":visible") ? h() : b.swap(a, d, h);
                return Math.max(0, f)
            }
            return b.curCSS(a, c, d)
        },
        curCSS: function (a, c, d) {
            function f(a) {
                if (!b.browser.safari) {
                    return !1
                }
                a = z.getComputedStyle(a, null);
                return !a || "" == a.getPropertyValue("color")
            }
            var g, h = a.style;
            if ("opacity" == c && b.browser.msie) {
                return g = b.attr(h, "opacity"), "" == g ? "1" : g
            }
            if (b.browser.opera && "display" == c) {
                var v = h.outline;
                h.outline = "0 solid black";
                h.outline = v
            }
            c.match(/float/i) && (c = U);
            if (!d && h && h[c]) {
                g = h[c]
            } else {
                if (z.getComputedStyle) {
                    c.match(/float/i) && (c = "float");
                    c = c.replace(/([A-Z])/g, "-$1").toLowerCase();
                    if ((g = z.getComputedStyle(a, null)) && !f(a)) {
                        g = g.getPropertyValue(c)
                    } else {
                        h = [];
                        d = [];
                        v = a;
                        for (a = 0; v && f(v); v = v.parentNode) {
                            d.unshift(v)
                        }
                        for (; a < d.length; a++) {
                            f(d[a]) && (h[a] = d[a].style.display, d[a].style.display = "block")
                        }
                        g = "display" == c && null != h[d.length - 1] ? "none" : g && g.getPropertyValue(c) || "";
                        for (a = 0; a < h.length; a++) {
                            null != h[a] && (d[a].style.display = h[a])
                        }
                    }
                    "opacity" == c && "" == g && (g = "1")
                } else {
                    a.currentStyle && (g = c.replace(/\-(\w)/g, function (a, c) {
                        return c.toUpperCase()
                    }), g = a.currentStyle[c] || a.currentStyle[g], !/^\d+(px)?$/i.test(g) && /^\d/.test(g) && (c = h.left, d = a.runtimeStyle.left, a.runtimeStyle.left = a.currentStyle.left, h.left = g || 0, g = h.pixelLeft + "px", h.left = c, a.runtimeStyle.left = d))
                }
            }
            return g
        },
        clean: function (a, c) {
            var d = [];
            c = c || document;
            "undefined" == typeof c.createElement && (c = c.ownerDocument || c[0] && c[0].ownerDocument || document);
            b.each(a, function (a, g) {
                if (g) {
                    g.constructor == Number && (g += "");
                    if ("string" == typeof g) {
                        g = g.replace(/(<(\w+)[^>]*?)\/>/g, function (a, c, b) {
                            return b.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i) ? a : c + "></" + b + ">"
                        });
                        var h = b.trim(g).toLowerCase(),
                            v = c.createElement("div"),
                            n = !h.indexOf("<opt") && [1, "<select multiple='multiple'>", "</select>"] || !h.indexOf("<leg") && [1, "<fieldset>", "</fieldset>"] || h.match(/^<(thead|tbody|tfoot|colg|cap)/) && [1, "<table>", "</table>"] || !h.indexOf("<tr") && [2, "<table><tbody>", "</tbody></table>"] || (!h.indexOf("<td") || !h.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || !h.indexOf("<col") && [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"] || b.browser.msie && [1, "div<div>", "</div>"] || [0, "", ""];
                        for (v.innerHTML = n[1] + g + n[2]; n[0]--;) {
                            v = v.lastChild
                        }
                        if (b.browser.msie) {
                            h = !h.indexOf("<table") && 0 > h.indexOf("<tbody") ? v.firstChild && v.firstChild.childNodes : "<table>" == n[1] && 0 > h.indexOf("<tbody") ? v.childNodes : [];
                            for (n = h.length - 1; 0 <= n; --n) {
                                b.nodeName(h[n], "tbody") && !h[n].childNodes.length && h[n].parentNode.removeChild(h[n])
                            }
                            /^\s/.test(g) && v.insertBefore(c.createTextNode(g.match(/^\s*/)[0]), v.firstChild)
                        }
                        g = b.makeArray(v.childNodes)
                    }
                    if (0 !== g.length || b.nodeName(g, "form") || b.nodeName(g, "select")) {
                        g[0] == k || b.nodeName(g, "form") || g.options ? d.push(g) : d = b.merge(d, g)
                    }
                }
            });
            return d
        },
        attr: function (a, c, d) {
            if (!a || 3 == a.nodeType || 8 == a.nodeType) {
                return k
            }
            var f = !b.isXMLDoc(a),
                g = d !== k,
                h = b.browser.msie;
            c = f && b.props[c] || c;
            if (a.tagName) {
                var n = /href|src|style/.test(c);
                "selected" == c && b.browser.safari && a.parentNode.selectedIndex;
                if (c in a && f && !n) {
                    if (g) {
                        if ("type" == c && b.nodeName(a, "input") && a.parentNode) {
                            throw "type property can't be changed"
                        }
                        a[c] = d
                    }
                    return b.nodeName(a, "form") && a.getAttributeNode(c) ? a.getAttributeNode(c).nodeValue : a[c]
                }
                if (h && f && "style" == c) {
                    return b.attr(a.style, "cssText", d)
                }
                g && a.setAttribute(c, "" + d);
                a = h && f && n ? a.getAttribute(c, 2) : a.getAttribute(c);
                return null === a ? k : a
            }
            if (h && "opacity" == c) {
                return g && (a.zoom = 1, a.filter = (a.filter || "").replace(/alpha\([^)]*\)/, "") + ("NaN" == parseInt(d) + "" ? "" : "alpha(opacity=" + 100 * d + ")")), a.filter && 0 <= a.filter.indexOf("opacity=") ? parseFloat(a.filter.match(/opacity=([^)]*)/)[1]) / 100 + "" : ""
            }
            c = c.replace(/-([a-z])/ig, function (a, c) {
                return c.toUpperCase()
            });
            g && (a[c] = d);
            return a[c]
        },
        trim: function (a) {
            return (a || "").replace(/^\s+|\s+$/g, "")
        },
        makeArray: function (a) {
            var c = [];
            if (null != a) {
                var b = a.length;
                if (null == b || a.split || a.setInterval || a.call) {
                    c[0] = a
                } else {
                    for (; b;) {
                        c[--b] = a[b]
                    }
                }
            }
            return c
        },
        inArray: function (a, c) {
            for (var b = 0, f = c.length; b < f; b++) {
                if (c[b] === a) {
                    return b
                }
            }
            return -1
        },
        merge: function (a, c) {
            var d = 0,
                f, g = a.length;
            if (b.browser.msie) {
                for (; f = c[d++];) {
                    8 != f.nodeType && (a[g++] = f)
                }
            } else {
                for (; f = c[d++];) {
                    a[g++] = f
                }
            }
            return a
        },
        unique: function (a) {
            var c = [],
                d = {};
            try {
                for (var f = 0, g = a.length; f < g; f++) {
                    var h = b.data(a[f]);
                    d[h] || (d[h] = !0, c.push(a[f]))
                }
            } catch (n) {
                c = a
            }
            return c
        },
        grep: function (a, c, b) {
            for (var f = [], g = 0, h = a.length; g < h; g++) {
                !b != !c(a[g], g) && f.push(a[g])
            }
            return f
        },
        map: function (a, c) {
            for (var b = [], f = 0, g = a.length; f < g; f++) {
                var h = c(a[f], f);
                null != h && (b[b.length] = h)
            }
            return b.concat.apply([], b)
        }
    });
    var p = navigator.userAgent.toLowerCase();
    b.browser = {
        version: (p.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1],
        safari: /webkit/.test(p),
        opera: /opera/.test(p),
        msie: /msie/.test(p) && !/opera/.test(p),
        mozilla: /mozilla/.test(p) && !/(compatible|webkit)/.test(p)
    };
    var U = b.browser.msie ? "styleFloat" : "cssFloat";
    b.extend({
        boxModel: !b.browser.msie || "CSS1Compat" == document.compatMode,
        props: {
            "for": "htmlFor",
            "class": "className",
            "float": U,
            cssFloat: U,
            styleFloat: U,
            readonly: "readOnly",
            maxlength: "maxLength",
            cellspacing: "cellSpacing"
        }
    });
    b.each({
        parent: function (a) {
            return a.parentNode
        },
        parents: function (a) {
            return b.dir(a, "parentNode")
        },
        next: function (a) {
            return b.nth(a, 2, "nextSibling")
        },
        prev: function (a) {
            return b.nth(a, 2, "previousSibling")
        },
        nextAll: function (a) {
            return b.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return b.dir(a, "previousSibling")
        },
        siblings: function (a) {
            return b.sibling(a.parentNode.firstChild, a)
        },
        children: function (a) {
            return b.sibling(a.firstChild)
        },
        contents: function (a) {
            return b.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : b.makeArray(a.childNodes)
        }
    }, function (a, c) {
        b.fn[a] = function (a) {
            var f = b.map(this, c);
            a && "string" == typeof a && (f = b.multiFilter(a, f));
            return this.pushStack(b.unique(f))
        }
    });
    b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, c) {
        b.fn[a] = function () {
            var a = arguments;
            return this.each(function () {
                for (var f = 0, g = a.length; f < g; f++) {
                    b(a[f])[c](this)
                }
            })
        }
    });
    b.each({
        removeAttr: function (a) {
            b.attr(this, a, "");
            1 == this.nodeType && this.removeAttribute(a)
        },
        addClass: function (a) {
            b.className.add(this, a)
        },
        removeClass: function (a) {
            b.className.remove(this, a)
        },
        toggleClass: function (a) {
            b.className[b.className.has(this, a) ? "remove" : "add"](this, a)
        },
        remove: function (a) {
            if (!a || b.filter(a, [this]).r.length) {
                b("*", this).add(this).each(function () {
                    b.event.remove(this);
                    b.removeData(this)
                }), this.parentNode && this.parentNode.removeChild(this)
            }
        },
        empty: function () {
            for (b(">*", this).remove(); this.firstChild;) {
                this.removeChild(this.firstChild)
            }
        }
    }, function (a, c) {
        b.fn[a] = function () {
            return this.each(c, arguments)
        }
    });
    b.each(["Height", "Width"], function (a, c) {
        var d = c.toLowerCase();
        b.fn[d] = function (a) {
            return this[0] == window ? b.browser.opera && document.body["client" + c] || b.browser.safari && window["inner" + c] || "CSS1Compat" == document.compatMode && document.documentElement["client" + c] || document.body["client" + c] : this[0] == document ? Math.max(Math.max(document.body["scroll" + c], document.documentElement["scroll" + c]), Math.max(document.body["offset" + c], document.documentElement["offset" + c])) : a == k ? this.length ? b.css(this[0], d) : null : this.css(d, a.constructor == String ? a : a + "px")
        }
    });
    var A = b.browser.safari && 417 > parseInt(b.browser.version) ? "(?:[\\w*_-]|\\\\.)" : "(?:[\\w\u0128-\uffff*_-]|\\\\.)",
        t = RegExp("^>\\s*(" + A + "+)"),
        r = RegExp("^(" + A + "+)(#)(" + A + "+)"),
        B = RegExp("^([#.]?)(" + A + "*)");
    b.extend({
        expr: {
            "": function (a, c, d) {
                return "*" == d[2] || b.nodeName(a, d[2])
            },
            "#": function (a, c, b) {
                return a.getAttribute("id") == b[2]
            },
            ":": {
                lt: function (a, c, b) {
                    return c < b[3] - 0
                },
                gt: function (a, c, b) {
                    return c > b[3] - 0
                },
                nth: function (a, c, b) {
                    return b[3] - 0 == c
                },
                eq: function (a, c, b) {
                    return b[3] - 0 == c
                },
                first: function (a, c) {
                    return 0 == c
                },
                last: function (a, c, b, f) {
                    return c == f.length - 1
                },
                even: function (a, c) {
                    return 0 == c % 2
                },
                odd: function (a, c) {
                    return c % 2
                },
                "first-child": function (a) {
                    return a.parentNode.getElementsByTagName("*")[0] == a
                },
                "last-child": function (a) {
                    return b.nth(a.parentNode.lastChild, 1, "previousSibling") == a
                },
                "only-child": function (a) {
                    return !b.nth(a.parentNode.lastChild, 2, "previousSibling")
                },
                parent: function (a) {
                    return a.firstChild
                },
                empty: function (a) {
                    return !a.firstChild
                },
                contains: function (a, c, d) {
                    return 0 <= (a.textContent || a.innerText || b(a).text() || "").indexOf(d[3])
                },
                visible: function (a) {
                    return "hidden" != a.type && "none" != b.css(a, "display") && "hidden" != b.css(a, "visibility")
                },
                hidden: function (a) {
                    return "hidden" == a.type || "none" == b.css(a, "display") || "hidden" == b.css(a, "visibility")
                },
                enabled: function (a) {
                    return !a.disabled
                },
                disabled: function (a) {
                    return a.disabled
                },
                checked: function (a) {
                    return a.checked
                },
                selected: function (a) {
                    return a.selected || b.attr(a, "selected")
                },
                text: function (a) {
                    return "text" == a.type
                },
                radio: function (a) {
                    return "radio" == a.type
                },
                checkbox: function (a) {
                    return "checkbox" == a.type
                },
                file: function (a) {
                    return "file" == a.type
                },
                password: function (a) {
                    return "password" == a.type
                },
                submit: function (a) {
                    return "submit" == a.type
                },
                image: function (a) {
                    return "image" == a.type
                },
                reset: function (a) {
                    return "reset" == a.type
                },
                button: function (a) {
                    return "button" == a.type || b.nodeName(a, "button")
                },
                input: function (a) {
                    return /input|select|textarea|button/i.test(a.nodeName)
                },
                has: function (a, c, d) {
                    return b.find(d[3], a).length
                },
                header: function (a) {
                    return /h\d/i.test(a.nodeName)
                },
                animated: function (a) {
                    return b.grep(b.timers, function (c) {
                        return a == c.elem
                    }).length
                }
            }
        },
        parse: [/^(\[) *@?([\w-]+) *([!*$^~=]*) *('?"?)(.*?)\4 *\]/, /^(:)([\w-]+)\("?'?(.*?(\(.*?\))?[^(]*?)"?'?\)/, RegExp("^([:.#]*)(" + A + "+)")],
        multiFilter: function (a, c, d) {
            for (var f, g = []; a && a != f;) {
                f = a;
                var h = b.filter(a, c, d);
                a = h.t.replace(/^\s*,\s*/, "");
                g = d ? c = h.r : b.merge(g, h.r)
            }
            return g
        },
        find: function (a, c) {
            if ("string" != typeof a) {
                return [a]
            }
            if (c && 1 != c.nodeType && 9 != c.nodeType) {
                return []
            }
            c = c || document;
            for (var d = [c], f = [], g, h; a && g != a;) {
                var n = [];
                g = a;
                a = b.trim(a);
                h = !1;
                var k = t,
                    q = k.exec(a);
                if (q) {
                    h = q[1].toUpperCase();
                    for (var l = 0; d[l]; l++) {
                        for (q = d[l].firstChild; q; q = q.nextSibling) {
                            1 != q.nodeType || "*" != h && q.nodeName.toUpperCase() != h || n.push(q)
                        }
                    }
                    d = n;
                    a = a.replace(k, "");
                    if (0 == a.indexOf(" ")) {
                        continue
                    }
                    h = !0
                } else {
                    if (k = /^([>+~])\s*(\w*)/i, null != (q = k.exec(a))) {
                        n = [];
                        l = {};
                        h = q[2].toUpperCase();
                        for (var q = q[1], W = 0, p = d.length; W < p; W++) {
                            for (var m = "~" == q || "+" == q ? d[W].nextSibling : d[W].firstChild; m; m = m.nextSibling) {
                                if (1 == m.nodeType) {
                                    var w = b.data(m);
                                    if ("~" == q && l[w]) {
                                        break
                                    }
                                    h && m.nodeName.toUpperCase() != h || ("~" == q && (l[w] = !0), n.push(m));
                                    if ("+" == q) {
                                        break
                                    }
                                }
                            }
                        }
                        d = n;
                        a = b.trim(a.replace(k, ""));
                        h = !0
                    }
                } if (a && !h) {
                    if (a.indexOf(",")) {
                        k = r;
                        (q = k.exec(a)) ? q = [0, q[2], q[3], q[1]] : (k = B, q = k.exec(a));
                        q[2] = q[2].replace(/\\/g, "");
                        h = d[d.length - 1];
                        if ("#" == q[1] && h && h.getElementById && !b.isXMLDoc(h)) {
                            d = h.getElementById(q[2]), (b.browser.msie || b.browser.opera) && d && "string" == typeof d.id && d.id != q[2] && (d = b('[@id="' + q[2] + '"]', h)[0]), d = n = !d || q[3] && !b.nodeName(d, q[3]) ? [] : [d]
                        } else {
                            for (l = 0; d[l]; l++) {
                                h = "#" == q[1] && q[3] ? q[3] : "" != q[1] || "" == q[0] ? "*" : q[2], "*" == h && "object" == d[l].nodeName.toLowerCase() && (h = "param"), n = b.merge(n, d[l].getElementsByTagName(h))
                            }
                            "." == q[1] && (n = b.classFilter(n, q[2]));
                            if ("#" == q[1]) {
                                d = [];
                                for (l = 0; n[l]; l++) {
                                    if (n[l].getAttribute("id") == q[2]) {
                                        d = [n[l]];
                                        break
                                    }
                                }
                                n = d
                            }
                            d = n
                        }
                        a = a.replace(k, "")
                    } else {
                        c == d[0] && d.shift(), f = b.merge(f, d), n = d = [c], a = " " + a.substr(1, a.length)
                    }
                }
                a && (n = b.filter(a, n), d = n.r, a = b.trim(n.t))
            }
            a && (d = []);
            d && c == d[0] && d.shift();
            return f = b.merge(f, d)
        },
        classFilter: function (a, c, b) {
            c = " " + c + " ";
            for (var f = [], g = 0; a[g]; g++) {
                var h = 0 <= (" " + a[g].className + " ").indexOf(c);
                (!b && h || b && !h) && f.push(a[g])
            }
            return f
        },
        filter: function (a, c, d) {
            for (var f; a && a != f;) {
                f = a;
                for (var g = b.parse, h, k = 0; g[k]; k++) {
                    if (h = g[k].exec(a)) {
                        a = a.substring(h[0].length);
                        h[2] = h[2].replace(/\\/g, "");
                        break
                    }
                }
                if (!h) {
                    break
                }
                if (":" == h[1] && "not" == h[2]) {
                    c = n.test(h[3]) ? b.filter(h[3], c, !0).r : b(c).not(h[3])
                } else {
                    if ("." == h[1]) {
                        c = b.classFilter(c, h[2], d)
                    } else {
                        if ("[" == h[1]) {
                            for (var g = [], l = h[3], k = 0, q = c.length; k < q; k++) {
                                var m = c[k],
                                    p = m[b.props[h[2]] || h[2]];
                                if (null == p || /href|src|selected/.test(h[2])) {
                                    p = b.attr(m, h[2]) || ""
                                }("" == l && !! p || "=" == l && p == h[5] || "!=" == l && p != h[5] || "^=" == l && p && !p.indexOf(h[5]) || "$=" == l && p.substr(p.length - h[5].length) == h[5] || ("*=" == l || "~=" == l) && 0 <= p.indexOf(h[5])) ^ d && g.push(m)
                            }
                            c = g
                        } else {
                            if (":" == h[1] && "nth-child" == h[2]) {
                                l = {};
                                g = [];
                                f = /(-?)(\d*)n((?:\+|-)?\d*)/.exec("even" == h[3] && "2n" || "odd" == h[3] && "2n+1" || !/\D/.test(h[3]) && "0n+" + h[3] || h[3]);
                                m = f[1] + (f[2] || 1) - 0;
                                f = f[3] - 0;
                                k = 0;
                                for (q = c.length; k < q; k++) {
                                    var p = c[k],
                                        r = p.parentNode,
                                        s = b.data(r);
                                    if (!l[s]) {
                                        for (var w = 1, r = r.firstChild; r; r = r.nextSibling) {
                                            1 == r.nodeType && (r.nodeIndex = w++)
                                        }
                                        l[s] = !0
                                    }
                                    s = !1;
                                    0 == m ? p.nodeIndex == f && (s = !0) : 0 == (p.nodeIndex - f) % m && 0 <= (p.nodeIndex - f) / m && (s = !0);
                                    s ^ d && g.push(p)
                                }
                                c = g
                            } else {
                                var e = b.expr[h[1]];
                                "object" == typeof e && (e = e[h[2]]);
                                "string" == typeof e && (e = eval("false||function(a,i){return " + e + ";}"));
                                c = b.grep(c, function (a, b) {
                                    return e(a, b, h, c)
                                }, d)
                            }
                        }
                    }
                }
            }
            return {
                r: c,
                t: a
            }
        },
        dir: function (a, c) {
            for (var b = [], f = a[c]; f && f != document;) {
                1 == f.nodeType && b.push(f), f = f[c]
            }
            return b
        },
        nth: function (a, c, b, f) {
            c = c || 1;
            for (f = 0; a && (1 != a.nodeType || ++f != c); a = a[b]) {}
            return a
        },
        sibling: function (a, c) {
            for (var b = []; a; a = a.nextSibling) {
                1 == a.nodeType && a != c && b.push(a)
            }
            return b
        }
    });
    b.event = {
        add: function (a, c, d, f) {
            if (3 != a.nodeType && 8 != a.nodeType) {
                b.browser.msie && a.setInterval && (a = window);
                d.guid || (d.guid = this.guid++);
                if (f != k) {
                    var g = d;
                    d = this.proxy(g, function () {
                        return g.apply(this, arguments)
                    });
                    d.data = f
                }
                var h = b.data(a, "events") || b.data(a, "events", {}),
                    n = b.data(a, "handle") || b.data(a, "handle", function () {
                        if ("undefined" != typeof b && !b.event.triggered) {
                            return b.event.handle.apply(arguments.callee.elem, arguments)
                        }
                    });
                n.elem = a;
                b.each(c.split(/\s+/), function (c, f) {
                    var g = f.split(".");
                    f = g[0];
                    d.type = g[1];
                    g = h[f];
                    g || (g = h[f] = {}, b.event.special[f] && !1 !== b.event.special[f].setup.call(a) || (a.addEventListener ? a.addEventListener(f, n, !1) : a.attachEvent && a.attachEvent("on" + f, n)));
                    g[d.guid] = d;
                    b.event.global[f] = !0
                });
                a = null
            }
        },
        guid: 1,
        global: {},
        remove: function (a, c, d) {
            if (3 != a.nodeType && 8 != a.nodeType) {
                var f = b.data(a, "events"),
                    g;
                if (f) {
                    if (c == k || "string" == typeof c && "." == c.charAt(0)) {
                        for (var h in f) {
                            this.remove(a, h + (c || ""))
                        }
                    } else {
                        c.type && (d = c.handler, c = c.type), b.each(c.split(/\s+/), function (c, h) {
                            var n = h.split(".");
                            h = n[0];
                            if (f[h]) {
                                if (d) {
                                    delete f[h][d.guid]
                                } else {
                                    for (d in f[h]) {
                                        n[1] && f[h][d].type != n[1] || delete f[h][d]
                                    }
                                }
                                for (g in f[h]) {
                                    break
                                }
                                g || (b.event.special[h] && !1 !== b.event.special[h].teardown.call(a) || (a.removeEventListener ? a.removeEventListener(h, b.data(a, "handle"), !1) : a.detachEvent && a.detachEvent("on" + h, b.data(a, "handle"))), g = null, delete f[h])
                            }
                        })
                    }
                    for (g in f) {
                        break
                    }
                    if (!g) {
                        if (c = b.data(a, "handle")) {
                            c.elem = null
                        }
                        b.removeData(a, "events");
                        b.removeData(a, "handle")
                    }
                }
            }
        },
        trigger: function (a, c, d, f, g) {
            c = b.makeArray(c);
            if (0 <= a.indexOf("!")) {
                a = a.slice(0, -1);
                var h = !0
            }
            if (d) {
                if (3 == d.nodeType || 8 == d.nodeType) {
                    return k
                }
                var n, l = b.isFunction(d[a] || null),
                    q = !c[0] || !c[0].preventDefault;
                q && (c.unshift({
                    type: a,
                    target: d,
                    preventDefault: function () {},
                    stopPropagation: function () {},
                    timeStamp: +new Date
                }), c[0][s] = !0);
                c[0].type = a;
                h && (c[0].exclusive = !0);
                (h = b.data(d, "handle")) && (n = h.apply(d, c));
                (!l || b.nodeName(d, "a") && "click" == a) && d["on" + a] && !1 === d["on" + a].apply(d, c) && (n = !1);
                q && c.shift();
                g && b.isFunction(g) && (c = g.apply(d, null == n ? c : c.concat(n)), c !== k && (n = c));
                if (l && !1 !== f && !1 !== n && (!b.nodeName(d, "a") || "click" != a)) {
                    this.triggered = !0;
                    try {
                        d[a]()
                    } catch (p) {}
                }
                this.triggered = !1
            } else {
                this.global[a] && b("*").add([window, document]).trigger(a, c)
            }
            return n
        },
        handle: function (a) {
            var c, d, f, g, h;
            a = arguments[0] = b.event.fix(a || window.event);
            f = a.type.split(".");
            a.type = f[0];
            f = f[1];
            g = !f && !a.exclusive;
            h = (b.data(this, "events") || {})[a.type];
            for (var n in h) {
                if (d = h[n], g || d.type == f) {
                    a.handler = d, a.data = d.data, d = d.apply(this, arguments), !1 !== c && (c = d), !1 === d && (a.preventDefault(), a.stopPropagation())
                }
            }
            return c
        },
        fix: function (a) {
            if (!0 == a[s]) {
                return a
            }
            var c = a;
            a = {
                originalEvent: c
            };
            for (var b = "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target timeStamp toElement type view wheelDelta which".split(" "), f = b.length; f; f--) {
                a[b[f]] = c[b[f]]
            }
            a[s] = !0;
            a.preventDefault = function () {
                c.preventDefault && c.preventDefault();
                c.returnValue = !1
            };
            a.stopPropagation = function () {
                c.stopPropagation && c.stopPropagation();
                c.cancelBubble = !0
            };
            a.timeStamp = a.timeStamp || +new Date;
            a.target || (a.target = a.srcElement || document);
            3 == a.target.nodeType && (a.target = a.target.parentNode);
            !a.relatedTarget && a.fromElement && (a.relatedTarget = a.fromElement == a.target ? a.toElement : a.fromElement);
            null == a.pageX && null != a.clientX && (b = document.documentElement, f = document.body, a.pageX = a.clientX + (b && b.scrollLeft || f && f.scrollLeft || 0) - (b.clientLeft || 0), a.pageY = a.clientY + (b && b.scrollTop || f && f.scrollTop || 0) - (b.clientTop || 0));
            !a.which && (a.charCode || 0 === a.charCode ? a.charCode : a.keyCode) && (a.which = a.charCode || a.keyCode);
            !a.metaKey && a.ctrlKey && (a.metaKey = a.ctrlKey);
            !a.which && a.button && (a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0);
            return a
        },
        proxy: function (a, c) {
            c.guid = a.guid = a.guid || c.guid || this.guid++;
            return c
        },
        special: {
            ready: {
                setup: function () {
                    H()
                },
                teardown: function () {}
            },
            mouseenter: {
                setup: function () {
                    if (b.browser.msie) {
                        return !1
                    }
                    b(this).bind("mouseover", b.event.special.mouseenter.handler);
                    return !0
                },
                teardown: function () {
                    if (b.browser.msie) {
                        return !1
                    }
                    b(this).unbind("mouseover", b.event.special.mouseenter.handler);
                    return !0
                },
                handler: function (a) {
                    if (E(a, this)) {
                        return !0
                    }
                    a.type = "mouseenter";
                    return b.event.handle.apply(this, arguments)
                }
            },
            mouseleave: {
                setup: function () {
                    if (b.browser.msie) {
                        return !1
                    }
                    b(this).bind("mouseout", b.event.special.mouseleave.handler);
                    return !0
                },
                teardown: function () {
                    if (b.browser.msie) {
                        return !1
                    }
                    b(this).unbind("mouseout", b.event.special.mouseleave.handler);
                    return !0
                },
                handler: function (a) {
                    if (E(a, this)) {
                        return !0
                    }
                    a.type = "mouseleave";
                    return b.event.handle.apply(this, arguments)
                }
            }
        }
    };
    b.fn.extend({
        bind: function (a, c, d) {
            return "unload" == a ? this.one(a, c, d) : this.each(function () {
                b.event.add(this, a, d || c, d && c)
            })
        },
        one: function (a, c, d) {
            var f = b.event.proxy(d || c, function (a) {
                b(this).unbind(a, f);
                return (d || c).apply(this, arguments)
            });
            return this.each(function () {
                b.event.add(this, a, f, d && c)
            })
        },
        unbind: function (a, c) {
            return this.each(function () {
                b.event.remove(this, a, c)
            })
        },
        trigger: function (a, c, d) {
            return this.each(function () {
                b.event.trigger(a, c, this, !0, d)
            })
        },
        triggerHandler: function (a, c, d) {
            return this[0] && b.event.trigger(a, c, this[0], !1, d)
        },
        toggle: function (a) {
            for (var c = arguments, d = 1; d < c.length;) {
                b.event.proxy(a, c[d++])
            }
            return this.click(b.event.proxy(a, function (a) {
                this.lastToggle = (this.lastToggle || 0) % d;
                a.preventDefault();
                return c[this.lastToggle++].apply(this, arguments) || !1
            }))
        },
        hover: function (a, c) {
            return this.bind("mouseenter", a).bind("mouseleave", c)
        },
        ready: function (a) {
            H();
            b.isReady ? a.call(document, b) : b.readyList.push(function () {
                return a.call(this, b)
            });
            return this
        }
    });
    b.extend({
        isReady: !1,
        readyList: [],
        ready: function () {
            b.isReady || (b.isReady = !0, b.readyList && (b.each(b.readyList, function () {
                this.call(document)
            }), b.readyList = null), b(document).triggerHandler("ready"))
        }
    });
    var x = !1;
    b.each("blur focus load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout change select submit keydown keypress keyup error".split(" "), function (a, c) {
        b.fn[c] = function (a) {
            return a ? this.bind(c, a) : this.trigger(c)
        }
    });
    var E = function (a, c) {
        for (var b = a.relatedTarget; b && b != c;) {
            try {
                b = b.parentNode
            } catch (f) {
                b = c
            }
        }
        return b == c
    };
    b(window).bind("unload", function () {
        b("*").add(document).unbind()
    });
    b.fn.extend({
        _load: b.fn.load,
        load: function (a, c, d) {
            if ("string" != typeof a) {
                return this._load(a)
            }
            var f = a.indexOf(" ");
            if (0 <= f) {
                var g = a.slice(f, a.length);
                a = a.slice(0, f)
            }
            d = d || function () {};
            f = "GET";
            c && (b.isFunction(c) ? (d = c, c = null) : (c = b.param(c), f = "POST"));
            var h = this;
            b.ajax({
                url: a,
                type: f,
                dataType: "html",
                data: c,
                complete: function (a, c) {
                    "success" != c && "notmodified" != c || h.html(g ? b("<div/>").append(a.responseText.replace(/<script(.|\s)*?\/script>/g, "")).find(g) : a.responseText);
                    h.each(d, [a.responseText, c, a])
                }
            });
            return this
        },
        serialize: function () {
            return b.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return b.nodeName(this, "form") ? b.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || /select|textarea/i.test(this.nodeName) || /text|hidden|password/i.test(this.type))
            }).map(function (a, c) {
                var d = b(this).val();
                return null == d ? null : d.constructor == Array ? b.map(d, function (a, b) {
                    return {
                        name: c.name,
                        value: a
                    }
                }) : {
                    name: c.name,
                    value: d
                }
            }).get()
        }
    });
    b.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, c) {
        b.fn[c] = function (a) {
            return this.bind(c, a)
        }
    });
    var ca = +new Date;
    b.extend({
        get: function (a, c, d, f) {
            b.isFunction(c) && (d = c, c = null);
            return b.ajax({
                type: "GET",
                url: a,
                data: c,
                success: d,
                dataType: f
            })
        },
        getScript: function (a, c) {
            return b.get(a, null, c, "script")
        },
        getJSON: function (a, c, d) {
            return b.get(a, c, d, "json")
        },
        post: function (a, c, d, f) {
            b.isFunction(c) && (d = c, c = {});
            return b.ajax({
                type: "POST",
                url: a,
                data: c,
                success: d,
                dataType: f
            })
        },
        ajaxSetup: function (a) {
            b.extend(b.ajaxSettings, a)
        },
        ajaxSettings: {
            url: location.href,
            global: !0,
            type: "GET",
            timeout: 0,
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            data: null,
            username: null,
            password: null,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                script: "text/javascript, application/javascript",
                json: "application/json, text/javascript",
                text: "text/plain",
                _default: "*/*"
            }
        },
        lastModified: {},
        ajax: function (a) {
            function c() {
                a.success && a.success(n, h);
                a.global && b.event.trigger("ajaxSuccess", [w, a])
            }

            function d() {
                a.complete && a.complete(w, h);
                a.global && b.event.trigger("ajaxComplete", [w, a]);
                a.global && !--b.active && b.event.trigger("ajaxStop")
            }
            a = b.extend(!0, a, b.extend(!0, {}, b.ajaxSettings, a));
            var f, g = /=\?(&|$)/g,
                h, n, l = a.type.toUpperCase();
            a.data && a.processData && "string" != typeof a.data && (a.data = b.param(a.data));
            "jsonp" == a.dataType && ("GET" == l ? a.url.match(g) || (a.url += (a.url.match(/\?/) ? "&" : "?") + (a.jsonp || "callback") + "=?") : a.data && a.data.match(g) || (a.data = (a.data ? a.data + "&" : "") + (a.jsonp || "callback") + "=?"), a.dataType = "json");
            "json" == a.dataType && (a.data && a.data.match(g) || a.url.match(g)) && (f = "jsonp" + ca++, a.data && (a.data = (a.data + "").replace(g, "=" + f + "$1")), a.url = a.url.replace(g, "=" + f + "$1"), a.dataType = "script", window[f] = function (a) {
                n = a;
                c();
                d();
                window[f] = k;
                try {
                    delete window[f]
                } catch (b) {}
                p && p.removeChild(m)
            });
            "script" == a.dataType && null == a.cache && (a.cache = !1);
            if (!1 === a.cache && "GET" == l) {
                var g = +new Date,
                    q = a.url.replace(/(\?|&)_=.*?(&|$)/, "$1_=" + g + "$2");
                a.url = q + (q == a.url ? (a.url.match(/\?/) ? "&" : "?") + "_=" + g : "")
            }
            a.data && "GET" == l && (a.url += (a.url.match(/\?/) ? "&" : "?") + a.data, a.data = null);
            a.global && !b.active++ && b.event.trigger("ajaxStart");
            g = /^(?:\w+:)?\/\/([^\/?#]+)/;
            if ("script" == a.dataType && "GET" == l && g.test(a.url) && g.exec(a.url)[1] != location.host) {
                var p = document.getElementsByTagName("head")[0],
                    m = document.createElement("script");
                m.src = a.url;
                a.scriptCharset && (m.charset = a.scriptCharset);
                if (!f) {
                    var r = !1;
                    m.onload = m.onreadystatechange = function () {
                        r || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (r = !0, c(), d(), p.removeChild(m))
                    }
                }
                p.appendChild(m);
                return k
            }
            var s = !1,
                w = window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest;
            a.username ? w.open(l, a.url, a.async, a.username, a.password) : w.open(l, a.url, a.async);
            try {
                a.data && w.setRequestHeader("Content-Type", a.contentType), a.ifModified && w.setRequestHeader("If-Modified-Since", b.lastModified[a.url] || "Thu, 01 Jan 1970 00:00:00 GMT"), w.setRequestHeader("X-Requested-With", "XMLHttpRequest"), w.setRequestHeader("Accept", a.dataType && a.accepts[a.dataType] ? a.accepts[a.dataType] + ", */*" : a.accepts._default)
            } catch (e) {}
            if (a.beforeSend && !1 === a.beforeSend(w, a)) {
                return a.global && b.active--, w.abort(), !1
            }
            a.global && b.event.trigger("ajaxSend", [w, a]);
            var t = function (e) {
                if (!s && w && (4 == w.readyState || "timeout" == e)) {
                    s = !0;
                    E && (clearInterval(E), E = null);
                    h = "timeout" == e && "timeout" || !b.httpSuccess(w) && "error" || a.ifModified && b.httpNotModified(w, a.url) && "notmodified" || "success";
                    if ("success" == h) {
                        try {
                            n = b.httpData(w, a.dataType, a.dataFilter)
                        } catch (g) {
                            h = "parsererror"
                        }
                    }
                    if ("success" == h) {
                        var k;
                        try {
                            k = w.getResponseHeader("Last-Modified")
                        } catch (l) {}
                        a.ifModified && k && (b.lastModified[a.url] = k);
                        f || c()
                    } else {
                        b.handleError(a, w, h)
                    }
                    d();
                    a.async && (w = null)
                }
            };
            if (a.async) {
                var E = setInterval(t, 13);
                0 < a.timeout && setTimeout(function () {
                    w && (w.abort(), s || t("timeout"))
                }, a.timeout)
            }
            try {
                w.send(a.data)
            } catch (x) {
                b.handleError(a, w, null, x)
            }
            a.async || t();
            return w
        },
        handleError: function (a, c, d, f) {
            a.error && a.error(c, d, f);
            a.global && b.event.trigger("ajaxError", [c, a, f])
        },
        active: 0,
        httpSuccess: function (a) {
            try {
                return !a.status && "file:" == location.protocol || 200 <= a.status && 300 > a.status || 304 == a.status || 1223 == a.status || b.browser.safari && a.status == k
            } catch (c) {}
            return !1
        },
        httpNotModified: function (a, c) {
            try {
                var d = a.getResponseHeader("Last-Modified");
                return 304 == a.status || d == b.lastModified[c] || b.browser.safari && a.status == k
            } catch (f) {}
            return !1
        },
        httpData: function (a, c, d) {
            var f = a.getResponseHeader("content-type");
            a = (f = "xml" == c || !c && f && 0 <= f.indexOf("xml")) ? a.responseXML : a.responseText;
            if (f && "parsererror" == a.documentElement.tagName) {
                throw "parsererror"
            }
            d && (a = d(a, c));
            "script" == c && b.globalEval(a);
            "json" == c && (a = eval("(" + a + ")"));
            return a
        },
        param: function (a) {
            var c = [];
            if (a.constructor == Array || a.jquery) {
                b.each(a, function () {
                    c.push(encodeURIComponent(this.name) + "=" + encodeURIComponent(this.value))
                })
            } else {
                for (var d in a) {
                    a[d] && a[d].constructor == Array ? b.each(a[d], function () {
                        c.push(encodeURIComponent(d) + "=" + encodeURIComponent(this))
                    }) : c.push(encodeURIComponent(d) + "=" + encodeURIComponent(b.isFunction(a[d]) ? a[d]() : a[d]))
                }
            }
            return c.join("&").replace(/%20/g, "+")
        }
    });
    
    /* SMOOTH SCROLL */
    
    b.fn.extend({
        show: function (a, c) {
            return a ? this.animate({
                height: "show",
                width: "show",
                opacity: "show"
            }, a, c) : this.filter(":hidden").each(function () {
                this.style.display = this.oldblock || "";
                if ("none" == b.css(this, "display")) {
                    var a = b("<" + this.tagName + " />").appendTo("body");
                    this.style.display = a.css("display");
                    "none" == this.style.display && (this.style.display = "block");
                    a.remove()
                }
            }).end()
        },
        hide: function (a, c) {
            return a ? this.animate({
                height: "hide",
                width: "hide",
                opacity: "hide"
            }, a, c) : this.filter(":visible").each(function () {
                this.oldblock = this.oldblock || b.css(this, "display");
                this.style.display = "none"
            }).end()
        },
        _toggle: b.fn.toggle,
        toggle: function (a, c) {
            return b.isFunction(a) && b.isFunction(c) ? this._toggle.apply(this, arguments) : a ? this.animate({
                height: "toggle",
                width: "toggle",
                opacity: "toggle"
            }, a, c) : this.each(function () {
                b(this)[b(this).is(":hidden") ? "show" : "hide"]()
            })
        },
        slideDown: function (a, c) {
            return this.animate({
                height: "show"
            }, a, c)
        },
        slideUp: function (a, c) {
            return this.animate({
                height: "hide"
            }, a, c)
        },
        slideToggle: function (a, c) {
            return this.animate({
                height: "toggle"
            }, a, c)
        },
        fadeIn: function (a, c) {
            return this.animate({
                opacity: "show"
            }, a, c)
        },
        fadeOut: function (a, c) {
            return this.animate({
                opacity: "hide"
            }, a, c)
        },
        fadeTo: function (a, c, b) {
            return this.animate({
                opacity: c
            }, a, b)
        },
        animate: function (a, c, d, f) {
            var g = b.speed(c, d, f);
            return this[!1 === g.queue ? "each" : "queue"](function () {
                if (1 != this.nodeType) {
                    return !1
                }
                var c = b.extend({}, g),
                    d, f = b(this).is(":hidden"),
                    n = this;
                for (d in a) {
                    if ("hide" == a[d] && f || "show" == a[d] && !f) {
                        return c.complete.call(this)
                    }
                    if ("height" == d || "width" == d) {
                        c.display = b.css(this, "display"), c.overflow = this.style.overflow
                    }
                }
                null != c.overflow && (this.style.overflow = "hidden");
                c.curAnim = b.extend({}, a);
                b.each(a, function (d, g) {
                    var k = new b.fx(n, c, d);
                    if (/toggle|show|hide/.test(g)) {
                        k["toggle" == g ? f ? "show" : "hide" : g](a)
                    } else {
                        var l = g.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),
                            p = k.cur(!0) || 0;
                        if (l) {
                            var e = parseFloat(l[2]),
                                m = l[3] || "px";
                            "px" != m && (n.style[d] = (e || 1) + m, p *= (e || 1) / k.cur(!0), n.style[d] = p + m);
                            l[1] && (e = ("-=" == l[1] ? -1 : 1) * e + p);
                            k.custom(p, e, m)
                        } else {
                            k.custom(p, g, "")
                        }
                    }
                });
                return !0
            })
        },
        queue: function (a, c) {
            if (b.isFunction(a) || a && a.constructor == Array) {
                c = a, a = "fx"
            }
            return !a || "string" == typeof a && !c ? Q(this[0], a) : this.each(function () {
                c.constructor == Array ? Q(this, a, c) : (Q(this, a).push(c), 1 == Q(this, a).length && c.call(this))
            })
        },
        stop: function (a, c) {
            var d = b.timers;
            a && this.queue([]);
            this.each(function () {
                for (var a = d.length - 1; 0 <= a; a--) {
                    if (d[a].elem == this) {
                        if (c) {
                            d[a](!0)
                        }
                        d.splice(a, 1)
                    }
                }
            });
            c || this.dequeue();
            return this
        }
    });
    var Q = function (a, c, d) {
        if (a) {
            c = c || "fx";
            var f = b.data(a, c + "queue");
            if (!f || d) {
                f = b.data(a, c + "queue", b.makeArray(d))
            }
        }
        return f
    };
    b.fn.dequeue = function (a) {
        a = a || "fx";
        return this.each(function () {
            var c = Q(this, a);
            c.shift();
            c.length && c[0].call(this)
        })
    };
    b.extend({
        speed: function (a, c, d) {
            var f = a && a.constructor == Object ? a : {
                complete: d || !d && c || b.isFunction(a) && a,
                duration: a,
                easing: d && c || c && c.constructor != Function && c
            };
            f.duration = (f.duration && f.duration.constructor == Number ? f.duration : b.fx.speeds[f.duration]) || b.fx.speeds.def;
            f.old = f.complete;
            f.complete = function () {
                !1 !== f.queue && b(this).dequeue();
                b.isFunction(f.old) && f.old.call(this)
            };
            return f
        },
        easing: {
            linear: function (a, c, b, f) {
                return b + f * a
            },
            swing: function (a, c, b, f) {
                return (-Math.cos(a * Math.PI) / 2 + 0.5) * f + b
            }
        },
        timers: [],
        timerId: null,
        fx: function (a, c, b) {
            this.options = c;
            this.elem = a;
            this.prop = b;
            c.orig || (c.orig = {})
        }
    });
    b.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this);
            (b.fx.step[this.prop] || b.fx.step._default)(this);
            if ("height" == this.prop || "width" == this.prop) {
                this.elem.style.display = "block"
            }
        },
        cur: function (a) {
            return null != this.elem[this.prop] && null == this.elem.style[this.prop] ? this.elem[this.prop] : (a = parseFloat(b.css(this.elem, this.prop, a))) && -10000 < a ? a : parseFloat(b.curCSS(this.elem, this.prop)) || 0
        },
        custom: function (a, c, d) {
            function f(a) {
                return g.step(a)
            }
            this.startTime = +new Date;
            this.start = a;
            this.end = c;
            this.unit = d || this.unit || "px";
            this.now = this.start;
            this.pos = this.state = 0;
            this.update();
            var g = this;
            f.elem = this.elem;
            b.timers.push(f);
            null == b.timerId && (b.timerId = setInterval(function () {
                for (var a = b.timers, c = 0; c < a.length; c++) {
                    a[c]() || a.splice(c--, 1)
                }
                a.length || (clearInterval(b.timerId), b.timerId = null)
            }, 13))
        },
        show: function () {
            this.options.orig[this.prop] = b.attr(this.elem.style, this.prop);
            this.options.show = !0;
            this.custom(0, this.cur());
            if ("width" == this.prop || "height" == this.prop) {
                this.elem.style[this.prop] = "1px"
            }
            b(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = b.attr(this.elem.style, this.prop);
            this.options.hide = !0;
            this.custom(this.cur(), 0)
        },
        step: function (a) {
            var c = +new Date;
            if (a || c > this.options.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                a = this.options.curAnim[this.prop] = !0;
                for (var d in this.options.curAnim) {
                    !0 !== this.options.curAnim[d] && (a = !1)
                }
                if (a && (null != this.options.display && (this.elem.style.overflow = this.options.overflow, this.elem.style.display = this.options.display, "none" == b.css(this.elem, "display") && (this.elem.style.display = "block")), this.options.hide && (this.elem.style.display = "none"), this.options.hide || this.options.show)) {
                    for (var f in this.options.curAnim) {
                        b.attr(this.elem.style, f, this.options.orig[f])
                    }
                }
                a && this.options.complete.call(this.elem);
                return !1
            }
            d = c - this.startTime;
            this.state = d / this.options.duration;
            this.pos = b.easing[this.options.easing || (b.easing.swing ? "swing" : "linear")](this.state, d, 0, 1, this.options.duration);
            this.now = this.start + (this.end - this.start) * this.pos;
            this.update();
            return !0
        }
    };
    b.extend(b.fx, {
        speeds: {
            slow: 600,
            fast: 200,
            def: 400
        },
        step: {
            scrollLeft: function (a) {
                a.elem.scrollLeft = a.now
            },
            scrollTop: function (a) {
                a.elem.scrollTop = a.now
            },
            opacity: function (a) {
                b.attr(a.elem.style, "opacity", a.now)
            },
            _default: function (a) {
                a.elem.style[a.prop] = a.now + a.unit
            }
        }
    });
    b.fn.offset = function () {
        function a(a) {
            c(b.curCSS(a, "borderLeftWidth", !0), b.curCSS(a, "borderTopWidth", !0))
        }

        function c(a, c) {
            d += parseInt(a, 10) || 0;
            f += parseInt(c, 10) || 0
        }
        var d = 0,
            f = 0,
            g = this[0],
            h;
        if (g) {
            with(b.browser) {
                var n = g.parentNode,
                    k = g,
                    l = g.offsetParent;
                h = g.ownerDocument;
                var m = safari && 522 > parseInt(version) && !/adobeair/i.test(p),
                    r = b.curCSS,
                    s = "fixed" == r(g, "position");
                if (g.getBoundingClientRect) {
                    g = g.getBoundingClientRect(), c(g.left + Math.max(h.documentElement.scrollLeft, h.body.scrollLeft), g.top + Math.max(h.documentElement.scrollTop, h.body.scrollTop)), c(-h.documentElement.clientLeft, -h.documentElement.clientTop)
                } else {
                    for (c(g.offsetLeft, g.offsetTop); l;) {
                        c(l.offsetLeft, l.offsetTop), (mozilla && !/^t(able|d|h)$/i.test(l.tagName) || safari && !m) && a(l), s || "fixed" != r(l, "position") || (s = !0), k = /^body$/i.test(l.tagName) ? k : l, l = l.offsetParent
                    }
                    for (; n && n.tagName && !/^body|html$/i.test(n.tagName);) {
                        /^inline|table.*$/i.test(r(n, "display")) || c(-n.scrollLeft, -n.scrollTop), mozilla && "visible" != r(n, "overflow") && a(n), n = n.parentNode
                    }(m && (s || "absolute" == r(k, "position")) || mozilla && "absolute" != r(k, "position")) && c(-h.body.offsetLeft, -h.body.offsetTop);
                    s && c(Math.max(h.documentElement.scrollLeft, h.body.scrollLeft), Math.max(h.documentElement.scrollTop, h.body.scrollTop))
                }
                h = {
                    top: f,
                    left: d
                }
            }
        }
        return h
    };
    b.fn.extend({
        position: function () {
            var a;
            if (this[0]) {
                a = this.offsetParent();
                var c = this.offset(),
                    b = /^body|html$/i.test(a[0].tagName) ? {
                        top: 0,
                        left: 0
                    } : a.offset();
                c.top -= D(this, "marginTop");
                c.left -= D(this, "marginLeft");
                b.top += D(a, "borderTopWidth");
                b.left += D(a, "borderLeftWidth");
                a = {
                    top: c.top - b.top,
                    left: c.left - b.left
                }
            }
            return a
        },
        offsetParent: function () {
            for (var a = this[0].offsetParent; a && !/^body|html$/i.test(a.tagName) && "static" == b.css(a, "position");) {
                a = a.offsetParent
            }
            return b(a)
        }
    });
    b.each(["Left", "Top"], function (a, c) {
        var d = "scroll" + c;
        b.fn[d] = function (c) {
            if (this[0]) {
                return c != k ? this.each(function () {
                    this == window || this == document ? window.scrollTo(a ? b(window).scrollLeft() : c, a ? c : b(window).scrollTop()) : this[d] = c
                }) : this[0] == window || this[0] == document ? self[a ? "pageYOffset" : "pageXOffset"] || b.boxModel && document.documentElement[d] || document.body[d] : this[0][d]
            }
        }
    });
    b.each(["Height", "Width"], function (a, c) {
        var d = a ? "Left" : "Top",
            f = a ? "Right" : "Bottom";
        b.fn["inner" + c] = function () {
            return this[c.toLowerCase()]() + D(this, "padding" + d) + D(this, "padding" + f)
        };
        b.fn["outer" + c] = function (a) {
            return this["inner" + c]() + D(this, "border" + d + "Width") + D(this, "border" + f + "Width") + (a ? D(this, "margin" + d) + D(this, "margin" + f) : 0)
        }
    })
})();
(function (d) {
    function h(j, o, i) {
        var q = 0,
            n = 0,
            p = 0;
        j.ontarget ? (i.x = o.x, i.y = o.y) : (q = i.x - o.x, n = i.y - o.y, p = Math.sqrt(q * q + n * n), i.x = o.x + q * j.takeoverFactor, i.y = o.y + n * j.takeoverFactor, p < j.takeoverThresh && p > -1 * j.takeoverThresh && (j.ontarget = !0))
    }

    function f(i, j) {
        var l = j.element.offset();
        d.extend(i, {
            width: i.element.width(),
            height: i.element.height()
        });
        d.extend(j, {
            width: j.element.width(),
            height: j.element.height(),
            top: l.top,
            left: l.left
        })
    }

    function c(j, l, i) {
        if ("string" === typeof j) {
            if (-1 != j.search(/^\d+\s?px$/)) {
                return j = j.replace("px", ""), j = parseInt(j, 10), {
                    travel: j,
                    travelpx: !0,
                    offset: l * (i - j),
                    cssPos: 100 * l + "%"
                }
            } - 1 != j.search(/^\d+\s?%$/) ? (j.replace("%", ""), j = parseInt(j, 10) / 100) : j = 1
        }
        return {
            travel: j,
            travelpx: !1,
            offset: l * (1 - j)
        }
    }

    function e(i, m, o) {
        var p, j, n = {};
        i[m] = d.extend({}, {
            width: i[m].element.width(),
            height: i[m].element.height()
        }, i[m]);
        p = c(i[m].xtravel, i[m].xorigin, i[m].width);
        j = c(i[m].ytravel, i[m].yorigin, i[m].height);
        d.extend(i[m], {
            diffxrat: o.width / (i[m].width - o.width),
            diffyrat: o.height / (i[m].height - o.height),
            xtravel: p.travel,
            ytravel: j.travel,
            xtravelpx: p.travelpx,
            ytravelpx: j.travelpx,
            xoffset: p.offset,
            yoffset: j.offset
        });
        p.travelpx && (n.left = p.cssPos);
        j.travelpx && (n.top = j.cssPos);
        (p.travelpx || j.travelpx) && i[m].element.css(n)
    }

    function a(i, m, n) {
        var o;
        d.extend(i[m], {
            content: []
        });
        for (var j = 0; j < i[m].element.children().length; j++) {
            i[m].content[j] || (i[m].content[j] = {}), i[m].content[j].element || (i[m].content[j].element = i[m].element.children().eq(j)), !i[m].content[j].anchor && i[m].content[j].element.children("a").attr("name") && (i[m].content[j].anchor = i[m].content[j].element.children("a").attr("name")), i[m].content[j].anchor && (o = i[m].content[j].element.offset(), d.extend(i[m].content[j], {
                width: i[m].content[j].element.width(),
                height: i[m].content[j].element.height(),
                x: o.left - n.left,
                y: o.top - n.top
            }), d.extend(i[m].content[j], {
                posxrat: (i[m].content[j].x + i[m].content[j].width / 2) / i[m].width,
                posyrat: (i[m].content[j].y + i[m].content[j].height / 2) / i[m].height
            }))
        }
    }

    function g(j, o, i) {
        for (var r, n, p, q = 0; q < j.length; q++) {
            r = j[q].xtravel * o + j[q].xoffset, n = j[q].ytravel * i + j[q].yoffset, p = {}, j[q].xparallax && (j[q].xtravelpx ? p.marginLeft = -1 * r + "px" : (p.left = 100 * r + "%", p.marginLeft = r * j[q].width * -1 + "px")), j[q].yparallax && (j[q].ytravelpx ? p.marginTop = -1 * n + "px" : (p.top = 100 * n + "%", p.marginTop = n * j[q].height * -1 + "px")), j[q].element.css(p)
        }
    }
    
    /* ----------- JPARALLAX ----------- */
    
    d.fn.jparallax = function (p) {
        var i = d().extend({}, d.fn.jparallax.settings, p),
            m = {
                xparallax: i.xparallax,
                yparallax: i.yparallax,
                xorigin: i.xorigin,
                yorigin: i.yorigin,
                xtravel: i.xtravel,
                ytravel: i.ytravel
            }, o = {
                element: i.mouseport,
                takeoverFactor: i.takeoverFactor,
                takeoverThresh: i.takeoverThresh
            };
        i.mouseport && (o.element = i.mouseport);
        for (var b = [], j = 1; j < arguments.length; j++) {
            b.push(d.extend({}, m, arguments[j]))
        }
        return this.each(function () {
            function z(n, u, t) {
                for (var r = 0; r < n.length; r++) {
                    for (var x = 0; x < n[r].content.length; x++) {
                        if (n[r].content[x].anchor == u) {
                            return t(r, x), [r, x]
                        }
                    }
                }
                return !1
            }
            var w = {
                x: 0.5,
                y: 0.5
            }, q = {
                    x: 0.5,
                    y: 0.5
                }, l = {
                    running: !1,
                    frame: i.frameDuration,
                    fire: function (n, r) {
                        h(v, w, q);
                        g(y, q.x, q.y);
                        this.running = setTimeout(function () {
                            w.x == n && w.y == r && v.ontarget ? l.running && (l.running = !1) : l.fire(w.x, w.y)
                        }, l.frame)
                    }
                }, s = {
                    element: d(this)
                }, v = d.extend({}, {
                    element: s.element
                }, o, {
                    xinside: !1,
                    yinside: !1,
                    active: !1,
                    ontarget: !1
                }),
                y = [];
            f(s, v);
            for (var k = 0; k < s.element.children().length; k++) {
                y[k] = d.extend({}, m, b[k], {
                    element: s.element.children("*:eq(" + k + ")")
                }), e(y, k, v), i.triggerResponse && a(y, k, s.element.offset())
            }
            s.element.children().css("position", "absolute");
            g(y, 0.5, 0.5);
            i.mouseResponse && d().mousemove(function (n) {
                v.xinside = n.pageX >= v.left && n.pageX < v.width + v.left ? !0 : !1;
                v.yinside = n.pageY >= v.top && n.pageY < v.height + v.top ? !0 : !1;
                v.xinside && v.yinside && !v.active && (v.ontarget = !1, v.active = !0);
                v.active && (w.x = v.xinside ? (n.pageX - v.left) / v.width : n.pageX < v.left ? 0 : 1, w.y = v.yinside ? (n.pageY - v.top) / v.height : n.pageY < v.top ? 0 : 1);
                v.xinside && v.yinside ? l.running || l.fire(w.x, w.y) : v.active && (v.active = !1)
            });
            i.triggerResponse && s.element.bind("jparallax", function (n, r) {
                r = r.replace(".html", "").replace("#", "");
                z(y, r, function (t, u) {
                    w.x = y[t].content[u].posxrat * (y[t].diffxrat + 1) - 0.5 * y[t].diffxrat;
                    w.y = y[t].content[u].posyrat * (y[t].diffyrat + 1) - 0.5 * y[t].diffyrat;
                    i.triggerExposesEdges || (0 > w.x && (w.x = 0), 1 < w.x && (w.x = 1), 0 > w.y && (w.y = 0), 1 < w.y && (w.y = 1));
                    v.ontarget = !1;
                    l.running || l.fire(w.x, w.y)
                })
            });
            d(window).resize(function () {
                f(s, v);
                for (var n = 0; n < y.length; n++) {
                    e(y, n, v)
                }
            })
        })
    };
    d.fn.jparallax.settings = {
        mouseResponse: !0,
        mouseActiveOutside: !1,
        triggerResponse: !0,
        triggerExposesEdges: !1,
        xparallax: !0,
        yparallax: !0,
        xorigin: 0.5,
        yorigin: 0.5,
        xtravel: 1,
        ytravel: 1,
        takeoverFactor: 0.65,
        takeoverThresh: 0.002,
        frameDuration: 25
    };
    (function (i) {
        "left" == i.xorigin ? i.xorigin = 0 : "middle" == i.xorigin || "centre" == i.xorigin || "center" == i.xorigin ? i.xorigin = 0.5 : "right" == i.xorigin && (i.xorigin = 1);
        "top" == i.yorigin ? i.yorigin = 0 : "middle" == i.yorigin || "centre" == i.yorigin || "center" == i.yorigin ? i.yorigin = 0.5 : "bottom" == i.yorigin && (i.yorigin = 1)
    })(d.fn.jparallax.settings);
    d(function () {})
})(jQuery);
(function (a5, aA) {
    var aw, ar, av, be;

    function an(b) {
        bb.options.enableKeys && (b ? aR : az)(document, "keydown", a4)
    }

    function a4(d) {
        if (!(d.metaKey || d.shiftKey || d.altKey || d.ctrlKey)) {
            var c;
            switch (d.which ? d.which : d.keyCode) {
            case 81:
            case 88:
            case 27:
                c = bb.close;
                break;
            case 37:
                c = bb.previous;
                break;
            case 39:
                c = bb.next;
                break;
            case 32:
                c = "number" == typeof ax ? bb.pause : bb.play
            }
            c && (d.preventDefault(), c())
        }
    }

    function a7(e) {
        an(!1);
        var d = bb.getCurrent(),
            f = "inline" == d.player ? "html" : d.player;
        if ("function" != typeof bb[f]) {
            throw "unknown player " + f
        }
        e && (bb.player.remove(), bb.revertOptions(), bb.applyOptions(d.options || {}));
        bb.player = new bb[f](d, bb.playerId);
        1 < bb.gallery.length && (d = bb.gallery[bb.current + 1] || bb.gallery[0], "img" == d.player && ((new Image).src = d.content), d = bb.gallery[bb.current - 1] || bb.gallery[bb.gallery.length - 1], "img" == d.player && ((new Image).src = d.content));
        bb.skin.onLoad(e, aY)
    }

    function aY() {
        if (ay) {
            if ("undefined" != typeof bb.player.ready) {
                var b = setInterval(function () {
                    ay ? bb.player.ready && (clearInterval(b), b = null, bb.skin.onReady(aP)) : (clearInterval(b), b = null)
                }, 10)
            } else {
                bb.skin.onReady(aP)
            }
        }
    }

    function aP() {
        ay && (bb.player.append(bb.skin.body, bb.dimensions), bb.skin.onShow(a6))
    }

    function a6() {
        if (ay) {
            if (bb.player.onLoad) {
                bb.player.onLoad()
            }
            bb.options.onFinish(bb.getCurrent());
            bb.isPaused() || bb.play();
            an(!0)
        }
    }

    function aV() {
        return (new Date).getTime()
    }

    function aO(e, d) {
        for (var f in d) {
            e[f] = d[f]
        }
        return e
    }

    function a3(g, f) {
        for (var l = 0, h = g.length, k = g[0]; l < h && !1 !== f.call(k, l, k); k = g[++l]) {}
    }

    function ah(d, c) {
        return d.replace(/\{(\w+?)\}/g, function (b, e) {
            return c[e]
        })
    }

    function aD() {}

    function aX(b) {
        return document.getElementById(b)
    }

    function a0(b) {
        b.parentNode.removeChild(b)
    }

    function aC(b) {
        return [b.pageX || b.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft), b.pageY || b.clientY + (document.documentElement.scrollTop || document.body.scrollTop)]
    }

    function aR(f, d, h) {
        if (f.addEventListener) {
            f.addEventListener(d, h, !1)
        } else {
            if (3 !== f.nodeType && 8 !== f.nodeType) {
                f.setInterval && f !== a5 && !f.frameElement && (f = a5);
                h.__guid || (h.__guid = aR.guid++);
                f.events || (f.events = {});
                var g = f.events[d];
                g || (g = f.events[d] = {}, f["on" + d] && (g[0] = f["on" + d]));
                g[h.__guid] = h;
                f["on" + d] = aR.handleEvent
            }
        }
    }

    function az(e, d, f) {
        e.removeEventListener ? e.removeEventListener(d, f, !1) : e.events && e.events[d] && delete e.events[d][f.__guid]
    }

    function aL() {
        if (!j) {
            try {
                document.documentElement.doScroll("left")
            } catch (b) {
                setTimeout(aL, 1);
                return
            }
            bb.load()
        }
    }

    function am(b) {
        bb.open(this);
        bb.gallery.length && b.preventDefault()
    }

    function bf() {
        var b = bb.dimensions;
        aO(aq.style, {
            height: b.innerHeight + "px",
            width: b.innerWidth + "px"
        })
    }

    function bd(b) {
        b.preventDefault();
        b = aC(b);
        av = b[0];
        be = b[1];
        aj = aX(bb.player.id);
        aR(document, "mousemove", bc);
        aR(document, "mouseup", ba);
        bb.isGecko && (aq.style.cursor = "-moz-grabbing")
    }

    function bc(b) {
        var h = bb.player,
            g = bb.dimensions;
        b = aC(b);
        var e = b[0] - av;
        av += e;
        aw = Math.max(Math.min(0, aw + e), g.innerWidth - h.width);
        b = b[1] - be;
        be += b;
        ar = Math.max(Math.min(0, ar + b), g.innerHeight - h.height);
        aO(aj.style, {
            left: aw + "px",
            top: ar + "px"
        })
    }

    function ba() {
        az(document, "mousemove", bc);
        az(document, "mouseup", ba);
        bb.isGecko && (aq.style.cursor = "-moz-grab")
    }
    
    /* ----------- SHADOWBOX ----------- */

    function a9(E, D, C, B, A) {
        var y = "opacity" == D,
            z = y ? bb.setOpacity : function (b, d) {
                b.style[D] = "" + d + "px"
            };
        if (0 == B || !y && !bb.options.animate || y && !bb.options.animateFade) {
            z(E, C), A && A()
        } else {
            var x = parseFloat(bb.getStyle(E, D)) || 0,
                w = C - x;
            if (0 == w) {
                A && A()
            } else {
                B *= 1000;
                var u = aV(),
                    v = bb.ease,
                    t = u + B,
                    s, e = setInterval(function () {
                        s = aV();
                        s >= t ? (clearInterval(e), e = null, z(E, C), A && A()) : z(E, x + v((s - u) / B) * w)
                    }, 10)
            }
        }
    }

    function a8() {
        au.style.height = bb.getWindowSize("Height") + "px";
        au.style.width = bb.getWindowSize("Width") + "px"
    }

    function aU() {
        au.style.top = document.documentElement.scrollTop + "px";
        au.style.left = document.documentElement.scrollLeft + "px"
    }

    function aQ(b) {
        b ? a3(aN, function (d, c) {
            c[0].style.visibility = c[1] || ""
        }) : (aN = [], a3(bb.options.troubleElements, function (d, c) {
            a3(document.getElementsByTagName(c), function (f, e) {
                aN.push([e, e.style.visibility]);
                e.style.visibility = "hidden"
            })
        }))
    }

    function a1(e, d) {
        var f = aX("sb-nav-" + e);
        f && (f.style.display = d ? "" : "none")
    }

    function aH(g, e) {
        var l = aX("sb-loading"),
            k = bb.getCurrent().player,
            k = "img" == k || "html" == k;
        if (g) {
            bb.setOpacity(l, 0);
            l.style.display = "block";
            var h = function () {
                bb.clearOpacity(l);
                e && e()
            };
            k ? a9(l, "opacity", 1, bb.options.fadeDuration, h) : h()
        } else {
            h = function () {
                l.style.display = "none";
                bb.clearOpacity(l);
                e && e()
            }, k ? a9(l, "opacity", 0, bb.options.fadeDuration, h) : h()
        }
    }

    function ae(k, g) {
        var q = aX("sb-title"),
            n = aX("sb-info"),
            q = q.offsetHeight,
            n = n.offsetHeight,
            p = aX("sb-title-inner"),
            m = aX("sb-info-inner"),
            l = k ? 0.35 : 0;
        a9(p, "marginTop", q, l);
        a9(m, "marginTop", -1 * n, l, function () {
            p.style.visibility = m.style.visibility = "hidden";
            g()
        })
    }

    function o(g, e, l, k) {
        var h = aX("sb-wrapper-inner");
        l = l ? bb.options.resizeDuration : 0;
        a9(ai, "top", e, l);
        a9(h, "height", g, l, k)
    }

    function aE(f, e, h, g) {
        h = h ? bb.options.resizeDuration : 0;
        a9(ai, "left", e, h);
        a9(ai, "width", f, h, g)
    }

    function aS(k, e) {
        var q = aX("sb-body-inner");
        k = parseInt(k);
        e = parseInt(e);
        var p = ai.offsetHeight - q.offsetHeight,
            q = ai.offsetWidth - q.offsetWidth,
            n = ap.offsetHeight,
            l = ap.offsetWidth,
            m = parseInt(bb.options.viewportPadding) || 20;
        return bb.setDimensions(k, e, n, l, p, q, m, bb.player && "drag" != bb.options.handleOversize)
    }
    var bb = {
        version: "3.0.3"
    }, aB = navigator.userAgent.toLowerCase(); - 1 < aB.indexOf("windows") || -1 < aB.indexOf("win32") ? bb.isWindows = !0 : -1 < aB.indexOf("macintosh") || -1 < aB.indexOf("mac os x") ? bb.isMac = !0 : -1 < aB.indexOf("linux") && (bb.isLinux = !0);
    bb.isIE = -1 < aB.indexOf("msie");
    bb.isIE6 = -1 < aB.indexOf("msie 6");
    bb.isIE7 = -1 < aB.indexOf("msie 7");
    bb.isGecko = -1 < aB.indexOf("gecko") && -1 == aB.indexOf("safari");
    bb.isWebKit = -1 < aB.indexOf("applewebkit/");
    var aI = /#(.+)$/,
        ak = /^(light|shadow)box\[(.*?)\]/i,
        ag = /\s*([a-z_]*?)\s*=\s*(.+)\s*/,
        aW = /[0-9a-z]+$/i,
        aJ = /(.+\/)shadowbox\.js/i,
        ay = !1,
        ad = !1,
        aT = {}, ao = 0,
        i, ax;
    bb.current = -1;
    bb.dimensions = null;
    bb.ease = function (b) {
        return 1 + Math.pow(b - 1, 3)
    };
    bb.errorInfo = {
        fla: {
            name: "Flash",
            url: "http://www.adobe.com/products/flashplayer/"
        },
        qt: {
            name: "QuickTime",
            url: "http://www.apple.com/quicktime/download/"
        },
        wmp: {
            name: "Windows Media Player",
            url: "http://www.microsoft.com/windows/windowsmedia/"
        },
        f4m: {
            name: "Flip4Mac",
            url: "http://www.flip4mac.com/wmv_download.htm"
        }
    };
    bb.gallery = [];
    bb.onReady = aD;
    bb.path = null;
    bb.player = null;
    bb.playerId = "sb-player";
    bb.options = {
        animate: !0,
        animateFade: !0,
        autoplayMovies: !0,
        continuous: !1,
        enableKeys: !0,
        flashParams: {
            bgcolor: "#000000",
            allowfullscreen: !0
        },
        flashVars: {},
        flashVersion: "9.0.115",
        handleOversize: "resize",
        handleUnsupported: "link",
        onChange: aD,
        onClose: aD,
        onFinish: aD,
        onOpen: aD,
        showMovieControls: !0,
        skipSetup: !1,
        slideshowDelay: 0,
        viewportPadding: 20
    };
    bb.getCurrent = function () {
        return -1 < bb.current ? bb.gallery[bb.current] : null
    };
    bb.hasNext = function () {
        return 1 < bb.gallery.length && (bb.current != bb.gallery.length - 1 || bb.options.continuous)
    };
    bb.isOpen = function () {
        return ay
    };
    bb.isPaused = function () {
        return "pause" == ax
    };
    bb.applyOptions = function (b) {
        aT = aO({}, bb.options);
        aO(bb.options, b)
    };
    bb.revertOptions = function () {
        aO(bb.options, aT)
    };
    bb.init = function (k, e) {
        if (!ad) {
            ad = !0;
            bb.skin.options && aO(bb.options, bb.skin.options);
            k && aO(bb.options, k);
            if (!bb.path) {
                for (var q, p = document.getElementsByTagName("script"), n = 0, l = p.length; n < l; ++n) {
                    if (q = aJ.exec(p[n].src)) {
                        bb.path = q[1];
                        break
                    }
                }
            }
            e && (bb.onReady = e);
            if ("complete" === document.readyState) {
                bb.load()
            } else {
                if (document.addEventListener) {
                    document.addEventListener("DOMContentLoaded", ac, !1), a5.addEventListener("load", bb.load, !1)
                } else {
                    if (document.attachEvent) {
                        document.attachEvent("onreadystatechange", ac);
                        a5.attachEvent("onload", bb.load);
                        q = !1;
                        try {
                            q = null === a5.frameElement
                        } catch (m) {}
                        document.documentElement.doScroll && q && aL()
                    }
                }
            }
        }
    };
    bb.open = function (k) {
        if (!ay && (k = bb.makeGallery(k), bb.gallery = k[0], bb.current = k[1], k = bb.getCurrent(), null != k)) {
            bb.applyOptions(k.options || {});
            k = bb.errorInfo;
            for (var e = bb.plugins, q, p, n, l, m = 0; m < bb.gallery.length; ++m) {
                q = bb.gallery[m];
                p = !1;
                n = null;
                switch (q.player) {
                case "flv":
                case "swf":
                    e.fla || (n = "fla");
                    break;
                case "qt":
                    e.qt || (n = "qt");
                    break;
                case "wmp":
                    bb.isMac ? e.qt && e.f4m ? q.player = "qt" : n = "qtf4m" : e.wmp || (n = "wmp");
                    break;
                case "qtwmp":
                    e.qt ? q.player = "qt" : e.wmp ? q.player = "wmp" : n = "qtwmp"
                }
                if (n) {
                    if ("link" == bb.options.handleUnsupported) {
                        switch (n) {
                        case "qtf4m":
                            l = "shared";
                            n = [k.qt.url, k.qt.name, k.f4m.url, k.f4m.name];
                            break;
                        case "qtwmp":
                            l = "either";
                            n = [k.qt.url, k.qt.name, k.wmp.url, k.wmp.name];
                            break;
                        default:
                            l = "single", n = [k[n].url, k[n].name]
                        }
                        q.player = "html";
                        q.content = '<div class="sb-message">' + ah(bb.lang.errors[l], n) + "</div>"
                    } else {
                        p = !0
                    }
                } else {
                    if ("inline" == q.player) {
                        (l = aI.exec(q.content)) ? (l = aX(l[1])) ? q.content = l.innerHTML : p = !0 : p = !0
                    } else {
                        if ("swf" == q.player || "flv" == q.player) {
                            l = q.options && q.options.flashVersion || bb.options.flashVersion, bb.flash && !bb.flash.hasFlashPlayerVersion(l) && (q.width = 310, q.height = 177)
                        }
                    }
                }
                p && (bb.gallery.splice(m, 1), m < bb.current ? --bb.current : m == bb.current && (bb.current = 0 < m ? m - 1 : m), --m)
            }
            bb.gallery.length && (k = bb.getCurrent(), !1 !== bb.options.onOpen(k) && (ay = !0, bb.skin.onOpen(k, a7)))
        }
    };
    bb.close = function () {
        ay && (ay = !1, bb.player && (bb.player.remove(), bb.player = null), "number" == typeof ax && (clearTimeout(ax), ax = null), ao = 0, an(!1), bb.options.onClose(bb.getCurrent()), bb.skin.onClose(), bb.revertOptions())
    };
    bb.play = function () {
        if (bb.hasNext() && (ao || (ao = 1000 * bb.options.slideshowDelay), ao && (i = aV(), ax = setTimeout(function () {
            ao = i = 0;
            bb.next()
        }, ao), bb.skin.onPlay))) {
            bb.skin.onPlay()
        }
    };
    bb.pause = function () {
        if ("number" == typeof ax && (ao = Math.max(0, ao - (aV() - i))) && (clearTimeout(ax), ax = "pause", bb.skin.onPause)) {
            bb.skin.onPause()
        }
    };
    bb.change = function (b) {
        if (!(b in bb.gallery)) {
            if (bb.options.continuous) {
                if (b = 0 > b ? bb.gallery.length + b : 0, !(b in bb.gallery)) {
                    return
                }
            } else {
                return
            }
        }
        bb.current = b;
        "number" == typeof ax && (clearTimeout(ax), ax = null, ao = i = 0);
        bb.options.onChange(bb.getCurrent());
        a7(!0)
    };
    bb.next = function () {
        bb.change(bb.current + 1)
    };
    bb.previous = function () {
        bb.change(bb.current - 1)
    };
    bb.setDimensions = function (F, E, D, C, B, z, A, y) {
        var x = F,
            v = E,
            w = 2 * A + B;
        F + w > D && (F = D - w);
        var u = 2 * A + z;
        E + u > C && (E = C - u);
        var t = (x - F) / x,
            e = (v - E) / v,
            G = 0 < t || 0 < e;
        y && G && (t > e ? E = Math.round(v / x * F) : e > t && (F = Math.round(x / v * E)));
        bb.dimensions = {
            height: F + B,
            width: E + z,
            innerHeight: F,
            innerWidth: E,
            top: Math.floor((D - (F + w)) / 2 + A),
            left: Math.floor((C - (E + u)) / 2 + A),
            oversized: G
        };
        return bb.dimensions
    };
    bb.makeGallery = function (g) {
        var e = [],
            l = -1;
        "string" == typeof g && (g = [g]);
        if ("number" == typeof g.length) {
            a3(g, function (b, d) {
                e[b] = d.content ? d : {
                    content: d
                }
            }), l = 0
        } else {
            if (g.tagName) {
                var k = bb.getCache(g);
                g = k ? k : bb.makeObject(g)
            }
            if (g.gallery) {
                var e = [],
                    h;
                for (h in bb.cache) {
                    k = bb.cache[h], k.gallery && k.gallery == g.gallery && (-1 == l && k.content == g.content && (l = e.length), e.push(k))
                } - 1 == l && (e.unshift(g), l = 0)
            } else {
                e = [g], l = 0
            }
        }
        a3(e, function (b, d) {
            e[b] = aO({}, d)
        });
        return [e, l]
    };
    bb.makeObject = function (g, e) {
        var l = {
            content: g.href,
            title: g.getAttribute("title") || "",
            link: g
        };
        e ? (e = aO({}, e), a3(["player", "title", "height", "width", "gallery"], function (b, c) {
            "undefined" != typeof e[c] && (l[c] = e[c], delete e[c])
        }), l.options = e) : l.options = {};
        l.player || (l.player = bb.getPlayer(l.content));
        var k = g.getAttribute("data-rel");
        if (k) {
            var h = k.match(ak);
            h && (l.gallery = escape(h[2]));
            a3(k.split(";"), function (d, c) {
                (h = c.match(ag)) && (l[h[1]] = h[2])
            })
        }
        return l
    };
    bb.getPlayer = function (e) {
        if (-1 < e.indexOf("#") && 0 == e.indexOf(document.location.href)) {
            return "inline"
        }
        var d = e.indexOf("?"); - 1 < d && (e = e.substring(0, d));
        var f;
        (e = e.match(aW)) && (f = e[0].toLowerCase());
        if (f) {
            if (bb.img && -1 < bb.img.ext.indexOf(f)) {
                return "img"
            }
            if (bb.swf && -1 < bb.swf.ext.indexOf(f)) {
                return "swf"
            }
            if (bb.flv && -1 < bb.flv.ext.indexOf(f)) {
                return "flv"
            }
            if (bb.qt && -1 < bb.qt.ext.indexOf(f)) {
                return bb.wmp && -1 < bb.wmp.ext.indexOf(f) ? "qtwmp" : "qt"
            }
            if (bb.wmp && -1 < bb.wmp.ext.indexOf(f)) {
                return "wmp"
            }
        }
        return "iframe"
    };
    Array.prototype.indexOf || (Array.prototype.indexOf = function (e, d) {
        var f = this.length >>> 0;
        d = d || 0;
        for (0 > d && (d += f); d < f; ++d) {
            if (d in this && this[d] === e) {
                return d
            }
        }
        return -1
    });
    var aM = !0,
        aF = !0;
    bb.getStyle = function () {
        var d = /opacity=([^)]*)/,
            c = document.defaultView && document.defaultView.getComputedStyle;
        return function (h, g) {
            var b;
            if (!aM && "opacity" == g && h.currentStyle) {
                return b = d.test(h.currentStyle.filter || "") ? parseFloat(RegExp.$1) / 100 + "" : "", "" === b ? "1" : b
            }
            if (c) {
                var a = c(h, null);
                a && (b = a[g]);
                "opacity" == g && "" == b && (b = "1")
            } else {
                b = h.currentStyle[g]
            }
            return b
        }
    }();
    bb.appendHTML = function (e, d) {
        if (e.insertAdjacentHTML) {
            e.insertAdjacentHTML("BeforeEnd", d)
        } else {
            if (e.lastChild) {
                var f = e.ownerDocument.createRange();
                f.setStartAfter(e.lastChild);
                f = f.createContextualFragment(d);
                e.appendChild(f)
            } else {
                e.innerHTML = d
            }
        }
    };
    bb.getWindowSize = function (b) {
        return "CSS1Compat" === document.compatMode ? document.documentElement["client" + b] : document.body["client" + b]
    };
    bb.setOpacity = function (e, d) {
        var f = e.style;
        aM ? f.opacity = 1 == d ? "" : d : (f.zoom = 1, 1 == d ? "string" == typeof f.filter && /alpha/i.test(f.filter) && (f.filter = f.filter.replace(/\s*[\w\.]*alpha\([^\)]*\);?/gi, "")) : f.filter = (f.filter || "").replace(/\s*[\w\.]*alpha\([^\)]*\)/gi, "") + " alpha(opacity=" + 100 * d + ")")
    };
    bb.clearOpacity = function (b) {
        bb.setOpacity(b, 1)
    };
    aR.guid = 1;
    aR.handleEvent = function (f) {
        var e = !0;
        f = f || aR.fixEvent(((this.ownerDocument || this.document || this).parentWindow || a5).event);
        var h = this.events[f.type],
            g;
        for (g in h) {
            this.__handleEvent = h[g], !1 === this.__handleEvent(f) && (e = !1)
        }
        return e
    };
    aR.preventDefault = function () {
        this.returnValue = !1
    };
    aR.stopPropagation = function () {
        this.cancelBubble = !0
    };
    aR.fixEvent = function (b) {
        b.preventDefault = aR.preventDefault;
        b.stopPropagation = aR.stopPropagation;
        return b
    };
    var j = !1,
        ac;
    document.addEventListener ? ac = function () {
        document.removeEventListener("DOMContentLoaded", ac, !1);
        bb.load()
    } : document.attachEvent && (ac = function () {
        "complete" === document.readyState && (document.detachEvent("onreadystatechange", ac), bb.load())
    });
    bb.load = function () {
        if (!j) {
            if (!document.body) {
                return setTimeout(bb.load, 13)
            }
            j = !0;
            var d = document.body,
                c = document.createElement("div");
            aM = "string" === typeof c.style.opacity;
            c.style.position = "fixed";
            c.style.margin = 0;
            c.style.top = "20px";
            d.appendChild(c, d.firstChild);
            aF = 20 == c.offsetTop;
            d.removeChild(c);
            bb.onReady();
            bb.options.skipSetup || bb.setup();
            bb.skin.init()
        }
    };
    bb.plugins = {};
    if (navigator.plugins && navigator.plugins.length) {
        var af = [];
        a3(navigator.plugins, function (d, c) {
            af.push(c.name)
        });
        af = af.join(",");
        aB = -1 < af.indexOf("Flip4Mac");
        bb.plugins = {
            fla: -1 < af.indexOf("Shockwave Flash"),
            qt: -1 < af.indexOf("QuickTime"),
            wmp: !aB && -1 < af.indexOf("Windows Media"),
            f4m: aB
        }
    } else {
        aB = function (e) {
            var d;
            try {
                d = new ActiveXObject(e)
            } catch (f) {}
            return !!d
        }, bb.plugins = {
            fla: aB("ShockwaveFlash.ShockwaveFlash"),
            qt: aB("QuickTime.QuickTime"),
            wmp: aB("wmplayer.ocx"),
            f4m: !1
        }
    }
    var aZ = /^(light|shadow)box/i,
        aK = 1;
    bb.cache = {};
    bb.select = function (g) {
        var e = [];
        if (g) {
            var l = g.length;
            if (l) {
                if ("string" == typeof g) {
                    bb.find && (e = bb.find(g))
                } else {
                    if (2 == l && "string" == typeof g[0] && g[1].nodeType) {
                        bb.find && (e = bb.find(g[0], g[1]))
                    } else {
                        for (var k = 0; k < l; ++k) {
                            e[k] = g[k]
                        }
                    }
                }
            } else {
                e.push(g)
            }
        } else {
            var h;
            a3(document.getElementsByTagName("a"), function (b, d) {
                (h = d.getAttribute("data-rel")) && aZ.test(h) && e.push(d)
            })
        }
        return e
    };
    bb.setup = function (d, c) {
        a3(bb.select(d), function (b, e) {
            bb.addCache(e, c)
        })
    };
    bb.teardown = function (b) {
        a3(bb.select(b), function (d, c) {
            bb.removeCache(c)
        })
    };
    bb.addCache = function (e, d) {
        var f = e.shadowboxCacheKey;
        f == aA && (f = aK++, e.shadowboxCacheKey = f, aR(e, "click", am));
        bb.cache[f] = bb.makeObject(e, d)
    };
    bb.removeCache = function (b) {
        az(b, "click", am);
        delete bb.cache[b.shadowboxCacheKey];
        b.shadowboxCacheKey = null
    };
    bb.getCache = function (b) {
        b = b.shadowboxCacheKey;
        return b in bb.cache && bb.cache[b]
    };
    bb.clearCache = function () {
        for (var b in bb.cache) {
            bb.removeCache(bb.cache[b].link)
        }
        bb.cache = {}
    };
    bb.find = function () {
        function M(a) {
            for (var h = "", g, f = 0; a[f]; f++) {
                g = a[f], 3 === g.nodeType || 4 === g.nodeType ? h += g.nodeValue : 8 !== g.nodeType && (h += M(g.childNodes))
            }
            return h
        }

        function L(v, t, s, r, q, n) {
            q = 0;
            for (var p = r.length; q < p; q++) {
                var m = r[q];
                if (m) {
                    for (var m = m[v], b = !1; m;) {
                        if (m.sizcache === s) {
                            b = r[m.sizset];
                            break
                        }
                        1 !== m.nodeType || n || (m.sizcache = s, m.sizset = q);
                        if (m.nodeName.toLowerCase() === t) {
                            b = m;
                            break
                        }
                        m = m[v]
                    }
                    r[q] = b
                }
            }
        }

        function K(v, t, s, r, q, m) {
            q = 0;
            for (var p = r.length; q < p; q++) {
                var k = r[q];
                if (k) {
                    for (var k = k[v], c = !1; k;) {
                        if (k.sizcache === s) {
                            c = r[k.sizset];
                            break
                        }
                        if (1 === k.nodeType) {
                            if (m || (k.sizcache = s, k.sizset = q), "string" !== typeof t) {
                                if (k === t) {
                                    c = !0;
                                    break
                                }
                            } else {
                                if (0 < E.filter(t, [k]).length) {
                                    c = k;
                                    break
                                }
                            }
                        }
                        k = k[v]
                    }
                    r[q] = c
                }
            }
        }
        var J = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            I = 0,
            H = Object.prototype.toString,
            F = !1,
            G = !0;
        [0, 0].sort(function () {
                G = !1;
                return 0
            });
        var E = function (O, N, v, s) {
            v = v || [];
            var n = N = N || document;
            if (1 !== N.nodeType && 9 !== N.nodeType) {
                return []
            }
            if (!O || "string" !== typeof O) {
                return v
            }
            for (var p = [], k, d, f, l, t = !0, S = w(N), P = O; null !== (J.exec(""), k = J.exec(P));) {
                if (P = k[3], p.push(k[1]), k[2]) {
                    l = k[3];
                    break
                }
            }
            if (1 < p.length && B.exec(O)) {
                if (2 === p.length && D.relative[p[0]]) {
                    d = u(p[0] + p[1], N)
                } else {
                    for (d = D.relative[p[0]] ? [N] : E(p.shift(), N); p.length;) {
                        O = p.shift(), D.relative[O] && (O += p.shift()), d = u(O, d)
                    }
                }
            } else {
                if (!s && 1 < p.length && 9 === N.nodeType && !S && D.match.ID.test(p[0]) && !D.match.ID.test(p[p.length - 1]) && (k = E.find(p.shift(), N, S), N = k.expr ? E.filter(k.expr, k.set)[0] : k.set[0]), N) {
                    for (k = s ? {
                        expr: p.pop(),
                        set: A(s)
                    } : E.find(p.pop(), 1 !== p.length || "~" !== p[0] && "+" !== p[0] || !N.parentNode ? N : N.parentNode, S), d = k.expr ? E.filter(k.expr, k.set) : k.set, 0 < p.length ? f = A(d) : t = !1; p.length;) {
                        var Q = p.pop();
                        k = Q;
                        D.relative[Q] ? k = p.pop() : Q = "";
                        null == k && (k = N);
                        D.relative[Q](f, k, S)
                    }
                } else {
                    f = []
                }
            }
            f || (f = d);
            if (!f) {
                throw "Syntax error, unrecognized expression: " + (Q || O)
            }
            if ("[object Array]" === H.call(f)) {
                if (t) {
                    if (N && 1 === N.nodeType) {
                        for (O = 0; null != f[O]; O++) {
                            f[O] && (!0 === f[O] || 1 === f[O].nodeType && x(N, f[O])) && v.push(d[O])
                        }
                    } else {
                        for (O = 0; null != f[O]; O++) {
                            f[O] && 1 === f[O].nodeType && v.push(d[O])
                        }
                    }
                } else {
                    v.push.apply(v, f)
                }
            } else {
                A(f, v)
            }
            l && (E(l, n, v, s), E.uniqueSort(v));
            return v
        };
        E.uniqueSort = function (d) {
            if (y && (F = G, d.sort(y), F)) {
                for (var c = 1; c < d.length; c++) {
                    d[c] === d[c - 1] && d.splice(c--, 1)
                }
            }
            return d
        };
        E.matches = function (d, c) {
            return E(d, null, null, c)
        };
        E.find = function (v, t, s) {
            var r, q;
            if (!v) {
                return []
            }
            for (var p = 0, n = D.order.length; p < n; p++) {
                var m = D.order[p];
                if (q = D.leftMatch[m].exec(v)) {
                    var l = q[1];
                    q.splice(1, 1);
                    if ("\\" !== l.substr(l.length - 1) && (q[1] = (q[1] || "").replace(/\\/g, ""), r = D.find[m](q, t, s), null != r)) {
                        v = v.replace(D.match[m], "");
                        break
                    }
                }
            }
            r || (r = t.getElementsByTagName("*"));
            return {
                set: r,
                expr: v
            }
        };
        E.filter = function (Z, Y, X, V) {
            for (var U = Z, T = [], S = Y, Q, O, N = Y && Y[0] && w(Y[0]); Z && Y.length;) {
                for (var v in D.filter) {
                    if (null != (Q = D.match[v].exec(Z))) {
                        var s = D.filter[v],
                            t, l;
                        O = !1;
                        S === T && (T = []);
                        if (D.preFilter[v]) {
                            if (Q = D.preFilter[v](Q, S, X, T, V, N), !Q) {
                                O = t = !0
                            } else {
                                if (!0 === Q) {
                                    continue
                                }
                            }
                        }
                        if (Q) {
                            for (var P = 0; null != (l = S[P]); P++) {
                                if (l) {
                                    t = s(l, Q, P, S);
                                    var W = V ^ !! t;
                                    X && null != t ? W ? O = !0 : S[P] = !1 : W && (T.push(l), O = !0)
                                }
                            }
                        }
                        if (t !== aA) {
                            X || (S = T);
                            Z = Z.replace(D.match[v], "");
                            if (!O) {
                                return []
                            }
                            break
                        }
                    }
                }
                if (Z === U) {
                    if (null == O) {
                        throw "Syntax error, unrecognized expression: " + Z
                    }
                    break
                }
                U = Z
            }
            return S
        };
        var D = E.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function (b) {
                    return b.getAttribute("href")
                }
            },
            relative: {
                "+": function (h, g) {
                    var n = "string" === typeof g,
                        m = n && !/\W/.test(g),
                        n = n && !m;
                    m && (g = g.toLowerCase());
                    for (var m = 0, l = h.length, k; m < l; m++) {
                        if (k = h[m]) {
                            for (;
                                (k = k.previousSibling) && 1 !== k.nodeType;) {}
                            h[m] = n || k && k.nodeName.toLowerCase() === g ? k || !1 : k === g
                        }
                    }
                    n && E.filter(g, h, !0)
                },
                ">": function (h, g) {
                    var n = "string" === typeof g;
                    if (n && !/\W/.test(g)) {
                        g = g.toLowerCase();
                        for (var m = 0, l = h.length; m < l; m++) {
                            var k = h[m];
                            k && (n = k.parentNode, h[m] = n.nodeName.toLowerCase() === g ? n : !1)
                        }
                    } else {
                        m = 0;
                        for (l = h.length; m < l; m++) {
                            (k = h[m]) && (h[m] = n ? k.parentNode : k.parentNode === g)
                        }
                        n && E.filter(g, h, !0)
                    }
                },
                "": function (b, n, m) {
                    var l = I++,
                        e = K;
                    if ("string" === typeof n && !/\W/.test(n)) {
                        var c = n = n.toLowerCase(),
                            e = L
                    }
                    e("parentNode", n, l, b, c, m)
                },
                "~": function (b, n, m) {
                    var l = I++,
                        e = K;
                    if ("string" === typeof n && !/\W/.test(n)) {
                        var c = n = n.toLowerCase(),
                            e = L
                    }
                    e("previousSibling", n, l, b, c, m)
                }
            },
            find: {
                ID: function (e, d, f) {
                    if ("undefined" !== typeof d.getElementById && !f) {
                        return (e = d.getElementById(e[1])) ? [e] : []
                    }
                },
                NAME: function (h, g) {
                    if ("undefined" !== typeof g.getElementsByName) {
                        for (var n = [], m = g.getElementsByName(h[1]), l = 0, k = m.length; l < k; l++) {
                            m[l].getAttribute("name") === h[1] && n.push(m[l])
                        }
                        return 0 === n.length ? null : n
                    }
                },
                TAG: function (d, c) {
                    return c.getElementsByTagName(d[1])
                }
            },
            preFilter: {
                CLASS: function (k, h, q, p, n, m) {
                    k = " " + k[1].replace(/\\/g, "") + " ";
                    if (m) {
                        return k
                    }
                    m = 0;
                    for (var l; null != (l = h[m]); m++) {
                        l && (n ^ (l.className && 0 <= (" " + l.className + " ").replace(/[\t\n]/g, " ").indexOf(k)) ? q || p.push(l) : q && (h[m] = !1))
                    }
                    return !1
                },
                ID: function (b) {
                    return b[1].replace(/\\/g, "")
                },
                TAG: function (d, c) {
                    return d[1].toLowerCase()
                },
                CHILD: function (d) {
                    if ("nth" === d[1]) {
                        var c = /(-?)(\d*)n((?:\+|-)?\d*)/.exec("even" === d[2] && "2n" || "odd" === d[2] && "2n+1" || !/\D/.test(d[2]) && "0n+" + d[2] || d[2]);
                        d[2] = c[1] + (c[2] || 1) - 0;
                        d[3] = c[3] - 0
                    }
                    d[0] = I++;
                    return d
                },
                ATTR: function (h, g, n, m, l, k) {
                    g = h[1].replace(/\\/g, "");
                    !k && D.attrMap[g] && (h[1] = D.attrMap[g]);
                    "~=" === h[2] && (h[4] = " " + h[4] + " ");
                    return h
                },
                PSEUDO: function (g, d, l, k, h) {
                    if ("not" === g[1]) {
                        if (1 < (J.exec(g[3]) || "").length || /^\w/.test(g[3])) {
                            g[3] = E(g[3], null, null, d)
                        } else {
                            return g = E.filter(g[3], d, l, 1 ^ h), l || k.push.apply(k, g), !1
                        }
                    } else {
                        if (D.match.POS.test(g[0]) || D.match.CHILD.test(g[0])) {
                            return !0
                        }
                    }
                    return g
                },
                POS: function (b) {
                    b.unshift(!0);
                    return b
                }
            },
            filters: {
                enabled: function (b) {
                    return !1 === b.disabled && "hidden" !== b.type
                },
                disabled: function (b) {
                    return !0 === b.disabled
                },
                checked: function (b) {
                    return !0 === b.checked
                },
                selected: function (b) {
                    b.parentNode.selectedIndex;
                    return !0 === b.selected
                },
                parent: function (b) {
                    return !!b.firstChild
                },
                empty: function (b) {
                    return !b.firstChild
                },
                has: function (e, d, f) {
                    return !!E(f[3], e).length
                },
                header: function (b) {
                    return /h\d/i.test(b.nodeName)
                },
                text: function (b) {
                    return "text" === b.type
                },
                radio: function (b) {
                    return "radio" === b.type
                },
                checkbox: function (b) {
                    return "checkbox" === b.type
                },
                file: function (b) {
                    return "file" === b.type
                },
                password: function (b) {
                    return "password" === b.type
                },
                submit: function (b) {
                    return "submit" === b.type
                },
                image: function (b) {
                    return "image" === b.type
                },
                reset: function (b) {
                    return "reset" === b.type
                },
                button: function (b) {
                    return "button" === b.type || "button" === b.nodeName.toLowerCase()
                },
                input: function (b) {
                    return /input|select|textarea|button/i.test(b.nodeName)
                }
            },
            setFilters: {
                first: function (d, c) {
                    return 0 === c
                },
                last: function (f, e, h, g) {
                    return e === g.length - 1
                },
                even: function (d, c) {
                    return 0 === c % 2
                },
                odd: function (d, c) {
                    return 1 === c % 2
                },
                lt: function (e, d, f) {
                    return d < f[3] - 0
                },
                gt: function (e, d, f) {
                    return d > f[3] - 0
                },
                nth: function (e, d, f) {
                    return f[3] - 0 === d
                },
                eq: function (e, d, f) {
                    return f[3] - 0 === d
                }
            },
            filter: {
                PSEUDO: function (a, n, m, l) {
                    var k = n[1],
                        h = D.filters[k];
                    if (h) {
                        return h(a, m, n, l)
                    }
                    if ("contains" === k) {
                        return 0 <= (a.textContent || a.innerText || M([a]) || "").indexOf(n[3])
                    }
                    if ("not" === k) {
                        n = n[3];
                        m = 0;
                        for (l = n.length; m < l; m++) {
                            if (n[m] === a) {
                                return !1
                            }
                        }
                        return !0
                    }
                    throw "Syntax error, unrecognized expression: " + k
                },
                CHILD: function (l, k) {
                    var s = k[1],
                        r = l;
                    switch (s) {
                    case "only":
                    case "first":
                        for (; r = r.previousSibling;) {
                            if (1 === r.nodeType) {
                                return !1
                            }
                        }
                        if ("first" === s) {
                            return !0
                        }
                        r = l;
                    case "last":
                        for (; r = r.nextSibling;) {
                            if (1 === r.nodeType) {
                                return !1
                            }
                        }
                        return !0;
                    case "nth":
                        var s = k[2],
                            q = k[3];
                        if (1 === s && 0 === q) {
                            return !0
                        }
                        var p = k[0],
                            n = l.parentNode;
                        if (n && (n.sizcache !== p || !l.nodeIndex)) {
                            for (var m = 0, r = n.firstChild; r; r = r.nextSibling) {
                                1 === r.nodeType && (r.nodeIndex = ++m)
                            }
                            n.sizcache = p
                        }
                        r = l.nodeIndex - q;
                        return 0 === s ? 0 === r : 0 === r % s && 0 <= r / s
                    }
                },
                ID: function (d, c) {
                    return 1 === d.nodeType && d.getAttribute("id") === c
                },
                TAG: function (d, c) {
                    return "*" === c && 1 === d.nodeType || d.nodeName.toLowerCase() === c
                },
                CLASS: function (d, c) {
                    return -1 < (" " + (d.className || d.getAttribute("class")) + " ").indexOf(c)
                },
                ATTR: function (h, g) {
                    var n = g[1],
                        n = D.attrHandle[n] ? D.attrHandle[n](h) : null != h[n] ? h[n] : h.getAttribute(n),
                        m = n + "",
                        l = g[2],
                        k = g[4];
                    return null == n ? "!=" === l : "=" === l ? m === k : "*=" === l ? 0 <= m.indexOf(k) : "~=" === l ? 0 <= (" " + m + " ").indexOf(k) : k ? "!=" === l ? m !== k : "^=" === l ? 0 === m.indexOf(k) : "$=" === l ? m.substr(m.length - k.length) === k : "|=" === l ? m === k || m.substr(0, k.length + 1) === k + "-" : !1 : m && !1 !== n
                },
                POS: function (g, f, l, k) {
                    var h = D.setFilters[f[2]];
                    if (h) {
                        return h(g, l, f, k)
                    }
                }
            }
        }, B = D.match.POS,
            C;
        for (C in D.match) {
            D.match[C] = RegExp(D.match[C].source + /(?![^\[]*\])(?![^\(]*\))/.source), D.leftMatch[C] = RegExp(/(^(?:.|\r|\n)*?)/.source + D.match[C].source)
        }
        var A = function (d, c) {
            d = Array.prototype.slice.call(d, 0);
            return c ? (c.push.apply(c, d), c) : d
        };
        try {
            Array.prototype.slice.call(document.documentElement.childNodes, 0)
        } catch (z) {
            A = function (g, f) {
                var l = f || [];
                if ("[object Array]" === H.call(g)) {
                    Array.prototype.push.apply(l, g)
                } else {
                    if ("number" === typeof g.length) {
                        for (var k = 0, h = g.length; k < h; k++) {
                            l.push(g[k])
                        }
                    } else {
                        for (k = 0; g[k]; k++) {
                            l.push(g[k])
                        }
                    }
                }
                return l
            }
        }
        var y;
        document.documentElement.compareDocumentPosition ? y = function (e, d) {
            if (!e.compareDocumentPosition || !d.compareDocumentPosition) {
                return e == d && (F = !0), e.compareDocumentPosition ? -1 : 1
            }
            var f = e.compareDocumentPosition(d) & 4 ? -1 : e === d ? 0 : 1;
            0 === f && (F = !0);
            return f
        } : "sourceIndex" in document.documentElement ? y = function (e, d) {
            if (!e.sourceIndex || !d.sourceIndex) {
                return e == d && (F = !0), e.sourceIndex ? -1 : 1
            }
            var f = e.sourceIndex - d.sourceIndex;
            0 === f && (F = !0);
            return f
        } : document.createRange && (y = function (f, e) {
            if (!f.ownerDocument || !e.ownerDocument) {
                return f == e && (F = !0), f.ownerDocument ? -1 : 1
            }
            var h = f.ownerDocument.createRange(),
                g = e.ownerDocument.createRange();
            h.setStart(f, 0);
            h.setEnd(f, 0);
            g.setStart(e, 0);
            g.setEnd(e, 0);
            h = h.compareBoundaryPoints(Range.START_TO_END, g);
            0 === h && (F = !0);
            return h
        });
        (function () {
            var e = document.createElement("div"),
                d = "script" + (new Date).getTime();
            e.innerHTML = "<a name='" + d + "'/>";
            var f = document.documentElement;
            f.insertBefore(e, f.firstChild);
            document.getElementById(d) && (D.find.ID = function (h, g, k) {
                if ("undefined" !== typeof g.getElementById && !k) {
                    return (g = g.getElementById(h[1])) ? g.id === h[1] || "undefined" !== typeof g.getAttributeNode && g.getAttributeNode("id").nodeValue === h[1] ? [g] : aA : []
                }
            }, D.filter.ID = function (h, g) {
                var k = "undefined" !== typeof h.getAttributeNode && h.getAttributeNode("id");
                return 1 === h.nodeType && k && k.nodeValue === g
            });
            f.removeChild(e);
            f = e = null
        })();
        (function () {
            var b = document.createElement("div");
            b.appendChild(document.createComment(""));
            0 < b.getElementsByTagName("*").length && (D.find.TAG = function (g, f) {
                var l = f.getElementsByTagName(g[1]);
                if ("*" === g[1]) {
                    for (var k = [], h = 0; l[h]; h++) {
                        1 === l[h].nodeType && k.push(l[h])
                    }
                    l = k
                }
                return l
            });
            b.innerHTML = "<a href='#'></a>";
            b.firstChild && "undefined" !== typeof b.firstChild.getAttribute && "#" !== b.firstChild.getAttribute("href") && (D.attrHandle.href = function (c) {
                return c.getAttribute("href", 2)
            });
            b = null
        })();
        document.querySelectorAll && function () {
            var e = E,
                d = document.createElement("div");
            d.innerHTML = "<p class='TEST'></p>";
            if (!d.querySelectorAll || 0 !== d.querySelectorAll(".TEST").length) {
                E = function (a, l, k, h) {
                    l = l || document;
                    if (!h && 9 === l.nodeType && !w(l)) {
                        try {
                            return A(l.querySelectorAll(a), k)
                        } catch (g) {}
                    }
                    return e(a, l, k, h)
                };
                for (var f in e) {
                    E[f] = e[f]
                }
                d = null
            }
        }();
        (function () {
            var b = document.createElement("div");
            b.innerHTML = "<div class='test e'></div><div class='test'></div>";
            b.getElementsByClassName && 0 !== b.getElementsByClassName("e").length && (b.lastChild.className = "e", 1 !== b.getElementsByClassName("e").length && (D.order.splice(1, 0, "CLASS"), D.find.CLASS = function (e, d, f) {
                if ("undefined" !== typeof d.getElementsByClassName && !f) {
                    return d.getElementsByClassName(e[1])
                }
            }, b = null))
        })();
        var x = document.compareDocumentPosition ? function (d, c) {
                return d.compareDocumentPosition(c) & 16
            } : function (d, c) {
                return d !== c && (d.contains ? d.contains(c) : !0)
            }, w = function (b) {
                return (b = (b ? b.ownerDocument || b : 0).documentElement) ? "HTML" !== b.nodeName : !1
            }, u = function (k, h) {
                for (var q = [], p = "", n, m = h.nodeType ? [h] : h; n = D.match.PSEUDO.exec(k);) {
                    p += n[0], k = k.replace(D.match.PSEUDO, "")
                }
                k = D.relative[k] ? k + "*" : k;
                n = 0;
                for (var l = m.length; n < l; n++) {
                    E(k, m[n], q)
                }
                return E.filter(p, q)
            };
        return E
    }();
    bb.lang = {
        code: "fr",
        of: "de",
        loading: "chargement",
        cancel: "Annuler",
        next: "Suivant",
        previous: "Pr\u00c3\u00a9c\u00c3\u00a9dent",
        play: "Lire",
        pause: "Pause",
        close: "Fermer",
        errors: {
            single: 'Vous devez installer le plugin <a href="{0}">{1}</a> pour afficher ce contenu.',
            shared: 'Vous devez installer les plugins <a href="{0}">{1}</a> et <a href="{2}">{3}</a> pour afficher ce contenu.',
            either: 'Vous devez installer le plugin <a href="{0}">{1}</a> ou <a href="{2}">{3}</a> pour afficher ce contenu.'
        }
    };
    var at, aq, aj;
    bb.img = function (e, d) {
        this.obj = e;
        this.id = d;
        this.ready = !1;
        var f = this;
        at = new Image;
        at.onload = function () {
            f.height = e.height ? parseInt(e.height, 10) : at.height;
            f.width = e.width ? parseInt(e.width, 10) : at.width;
            f.ready = !0;
            at = at.onload = null
        };
        at.src = e.content
    };
    bb.img.ext = ["bmp", "gif", "jpg", "jpeg", "png"];
    bb.img.prototype = {
        append: function (g, e) {
            var l = document.createElement("img");
            l.id = this.id;
            l.src = this.obj.content;
            l.style.position = "absolute";
            var k, h;
            e.oversized && "resize" == bb.options.handleOversize ? (k = e.innerHeight, h = e.innerWidth) : (k = this.height, h = this.width);
            l.setAttribute("height", k);
            l.setAttribute("width", h);
            g.appendChild(l)
        },
        remove: function () {
            var b = aX(this.id);
            b && a0(b);
            aq && (az(aq, "mousedown", bd), a0(aq), aq = null);
            aj = null;
            at && (at = at.onload = null)
        },
        onLoad: function () {
            if (bb.dimensions.oversized && "drag" == bb.options.handleOversize) {
                ar = aw = 0;
                be = av = null;
                var a = ["position:absolute", "cursor:" + (bb.isGecko ? "-moz-grab" : "move"), "background-color:" + (bb.isIE ? "#fff;filter:alpha(opacity=0)" : "transparent")].join(";");
                bb.appendHTML(bb.skin.body, '<div id="sb-drag-proxy" style="' + a + '"></div>');
                aq = aX("sb-drag-proxy");
                bf();
                aR(aq, "mousedown", bd)
            }
        },
        onWindowResize: function () {
            var a = bb.dimensions;
            switch (bb.options.handleOversize) {
            case "resize":
                var f = aX(this.id);
                f.height = a.innerHeight;
                f.width = a.innerWidth;
                break;
            case "drag":
                if (aj) {
                    var f = parseInt(bb.getStyle(aj, "top")),
                        e = parseInt(bb.getStyle(aj, "left"));
                    f + this.height < a.innerHeight && (aj.style.top = a.innerHeight - this.height + "px");
                    e + this.width < a.innerWidth && (aj.style.left = a.innerWidth - this.width + "px");
                    bf()
                }
            }
        }
    };
    bb.html = function (d, c) {
        this.obj = d;
        this.id = c;
        this.height = d.height ? parseInt(d.height, 10) : 300;
        this.width = d.width ? parseInt(d.width, 10) : 500
    };
    bb.html.prototype = {
        append: function (e, d) {
            var f = document.createElement("div");
            f.id = this.id;
            f.className = "html";
            f.innerHTML = this.obj.content;
            e.appendChild(f)
        },
        remove: function () {
            var b = aX(this.id);
            b && a0(b)
        }
    };
    bb.qt = function (d, c) {
        this.obj = d;
        this.id = c;
        this.height = d.height ? parseInt(d.height, 10) : 300;
        bb.options.showMovieControls && (this.height += 16);
        this.width = d.width ? parseInt(d.width, 10) : 300
    };
    bb.qt.ext = "dv mov moov movie mp4 avi mpg mpeg".split(" ");
    bb.qt.prototype = {
        append: function (l, e) {
            var s = bb.options,
                r = String(s.autoplayMovies),
                q = String(s.showMovieControls),
                s = "<object",
                p = {
                    id: this.id,
                    name: this.id,
                    height: this.height,
                    width: this.width,
                    kioskmode: "true"
                };
            bb.isIE ? (p.classid = "clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B", p.codebase = "http://www.apple.com/qtactivex/qtplugin.cab#version=6,0,2,0") : (p.type = "video/quicktime", p.data = this.obj.content);
            for (var n in p) {
                s += " " + n + '="' + p[n] + '"'
            }
            var s = s + ">",
                r = {
                    src: this.obj.content,
                    scale: "aspect",
                    controller: q,
                    autoplay: r
                }, m;
            for (m in r) {
                s += '<param name="' + m + '" value="' + r[m] + '">'
            }
            l.innerHTML = s + "</object>"
        },
        remove: function () {
            try {
                document[this.id].Stop()
            } catch (d) {}
            var c = aX(this.id);
            c && a0(c)
        }
    };
    var al = bb.isIE ? 70 : 45;
    bb.wmp = function (d, c) {
        this.obj = d;
        this.id = c;
        this.height = d.height ? parseInt(d.height, 10) : 300;
        bb.options.showMovieControls && (this.height += al);
        this.width = d.width ? parseInt(d.width, 10) : 300
    };
    bb.wmp.ext = "asf avi mpg mpeg wm wmv".split(" ");
    bb.wmp.prototype = {
        append: function (h, e) {
            var n = bb.options,
                m = '<object id="' + this.id + '" name="' + this.id + '" height="' + this.height + '" width="' + this.width + '"',
                l = {
                    autostart: n.autoplayMovies ? 1 : 0
                };
            bb.isIE ? (m += ' classid="clsid:6BF52A52-394A-11d3-B153-00C04F79FAA6"', l.url = this.obj.content, l.uimode = n.showMovieControls ? "full" : "none") : (m = m + ' type="video/x-ms-wmv"' + (' data="' + this.obj.content + '"'), l.showcontrols = n.showMovieControls ? 1 : 0);
            var m = m + ">",
                k;
            for (k in l) {
                m += '<param name="' + k + '" value="' + l[k] + '">'
            }
            m += "</object>";
            h.innerHTML = m
        },
        remove: function () {
            if (bb.isIE) {
                try {
                    a5[this.id].controls.stop(), a5[this.id].URL = "movie" + aV() + ".wmv", a5[this.id] = function () {}
                } catch (d) {}
            }
            var c = aX(this.id);
            c && setTimeout(function () {
                a0(c)
            }, 10)
        }
    };
    var aG = !1,
        aN = [],
        a2 = ["sb-nav-close", "sb-nav-next", "sb-nav-play", "sb-nav-pause", "sb-nav-previous"],
        au, ap, ai, ab = !0,
        R = {
            markup: '<div id="sb-container"><div id="sb-overlay"></div><div id="sb-wrapper"><div id="sb-title"><div id="sb-title-inner"></div></div><div id="sb-wrapper-inner"><div id="sb-body"><div id="sb-body-inner"></div><div id="sb-loading"><div id="sb-loading-inner"><span>{loading}</span></div></div></div></div><div id="sb-info"><div id="sb-info-inner"><div id="sb-counter"></div><div id="sb-nav"><a id="sb-nav-close" title="{close}" onclick="Shadowbox.close()"></a><a id="sb-nav-next" title="{next}" onclick="Shadowbox.next()"></a><a id="sb-nav-play" title="{play}" onclick="Shadowbox.play()"></a><a id="sb-nav-pause" title="{pause}" onclick="Shadowbox.pause()"></a><a id="sb-nav-previous" title="{previous}" onclick="Shadowbox.previous()"></a></div></div></div></div></div>',
            options: {
                animSequence: "sync",
                counterLimit: 10,
                counterType: "default",
                displayCounter: !0,
                displayNav: !0,
                fadeDuration: 0.35,
                initialHeight: 160,
                initialWidth: 320,
                modal: !1,
                overlayColor: "#000",
                overlayOpacity: 0.5,
                resizeDuration: 0.35,
                showOverlay: !0,
                troubleElements: ["select", "object", "embed", "canvas"]
            },
            init: function () {
                bb.appendHTML(document.body, ah(R.markup, bb.lang));
                R.body = aX("sb-body-inner");
                au = aX("sb-container");
                ap = aX("sb-overlay");
                ai = aX("sb-wrapper");
                aF || (au.style.position = "absolute");
                if (!aM) {
                    var f, e, h = /url\("(.*\.png)"\)/;
                    a3(a2, function (b, a) {
                        if (f = aX(a)) {
                            if (e = bb.getStyle(f, "backgroundImage").match(h)) {
                                f.style.backgroundImage = "none", f.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,src=" + e[1] + ",sizingMethod=scale);"
                            }
                        }
                    })
                }
                var g;
                aR(a5, "resize", function () {
                    g && (clearTimeout(g), g = null);
                    ay && (g = setTimeout(R.onWindowResize, 10))
                })
            },
            onOpen: function (e, d) {
                ab = !1;
                au.style.display = "block";
                a8();
                var f = aS(bb.options.initialHeight, bb.options.initialWidth);
                o(f.innerHeight, f.top);
                aE(f.width, f.left);
                bb.options.showOverlay && (ap.style.backgroundColor = bb.options.overlayColor, bb.setOpacity(ap, 0), bb.options.modal || aR(ap, "click", bb.close), aG = !0);
                aF || (aU(), aR(a5, "scroll", aU));
                aQ();
                au.style.visibility = "visible";
                aG ? a9(ap, "opacity", bb.options.overlayOpacity, bb.options.fadeDuration, d) : d()
            },
            onLoad: function (d, c) {
                for (aH(!0); R.body.firstChild;) {
                    a0(R.body.firstChild)
                }
                ae(d, function () {
                    if (ay) {
                        d || (ai.style.visibility = "visible");
                        var n = bb.getCurrent();
                        aX("sb-title-inner").innerHTML = n.title || "";
                        var m, l, e, b, a;
                        bb.options.displayNav ? (m = !0, n = bb.gallery.length, 1 < n && (bb.options.continuous ? l = a = !0 : (l = n - 1 > bb.current, a = 0 < bb.current)), 0 < bb.options.slideshowDelay && bb.hasNext() && (b = !bb.isPaused(), e = !b)) : m = l = e = b = a = !1;
                        a1("close", m);
                        a1("next", l);
                        a1("play", e);
                        a1("pause", b);
                        a1("previous", a);
                        l = "";
                        if (bb.options.displayCounter && 1 < bb.gallery.length) {
                            if (n = bb.gallery.length, "skip" == bb.options.counterType) {
                                for (e = 0, a = n, b = parseInt(bb.options.counterLimit) || 0, b < n && 2 < b && (a = Math.floor(b / 2), e = bb.current - a, 0 > e && (e += n), a = bb.current + (b - a), a > n && (a -= n)); e != a;) {
                                    e == n && (e = 0), l += '<a onclick="Shadowbox.change(' + e + ');"', e == bb.current && (l += ' class="sb-counter-current"'), l += ">" + ++e + "</a>"
                                }
                            } else {
                                l = [bb.current + 1, bb.lang.of, n].join(" ")
                            }
                        }
                        aX("sb-counter").innerHTML = l;
                        c()
                    }
                })
            },
            onReady: function (f) {
                if (ay) {
                    var e = bb.player,
                        h = aS(e.height, e.width),
                        g = function () {
                            var a = aX("sb-title-inner"),
                                d = aX("sb-info-inner");
                            a.style.visibility = d.style.visibility = "";
                            "" != a.innerHTML && a9(a, "marginTop", 0, 0.35);
                            a9(d, "marginTop", 0, 0.35, f)
                        };
                    switch (bb.options.animSequence) {
                    case "hw":
                        o(h.innerHeight, h.top, !0, function () {
                            aE(h.width, h.left, !0, g)
                        });
                        break;
                    case "wh":
                        aE(h.width, h.left, !0, function () {
                            o(h.innerHeight, h.top, !0, g)
                        });
                        break;
                    default:
                        aE(h.width, h.left, !0), o(h.innerHeight, h.top, !0, g)
                    }
                }
            },
            onShow: function (b) {
                aH(!1, b);
                ab = !0
            },
            onClose: function () {
                aF || az(a5, "scroll", aU);
                az(ap, "click", bb.close);
                ai.style.visibility = "hidden";
                var b = function () {
                    au.style.visibility = "hidden";
                    au.style.display = "none";
                    aQ(!0)
                };
                aG ? a9(ap, "opacity", 0, bb.options.fadeDuration, b) : b()
            },
            onPlay: function () {
                a1("play", !1);
                a1("pause", !0)
            },
            onPause: function () {
                a1("pause", !1);
                a1("play", !0)
            },
            onWindowResize: function () {
                if (ab) {
                    a8();
                    var d = bb.player,
                        c = aS(d.height, d.width);
                    aE(c.width, c.left);
                    o(c.innerHeight, c.top);
                    if (d.onWindowResize) {
                        d.onWindowResize()
                    }
                }
            }
        };
    bb.skin = R;
    a5.Shadowbox = bb
})(window);

    /* ----------- FILTERS ----------- */

$(document).ready(function () {
    function a() {
        $(".audiovisuel").animate({
            opacity: 0.1
        }, 150);
        $(".webdev").animate({
            opacity: 0.1
        }, 150);
        $(".graphic").animate({
            opacity: 0.1
        }, 150)
    }
    $(".button-audiovisual").click(function () {
        a();
        $(".audiovisuel").animate({
            opacity: 1
        }, 100)
    });
    $(".button-web-development").click(function () {
        a();
        $(".webdev").animate({
            opacity: 1
        }, 100)
    });
    $(".button-graphic-design").click(function () {
        a();
        $(".graphic").animate({
            opacity: 1
        }, 100)
    });
    $(".button-all").click(function () {
        a();
        $(".audiovisuel, .webdev, .graphic").animate({
            opacity: 1
        }, 100)
    })
});

    /* ----------- DECLARATIONS ----------- */

$(document).ready(function () {
    $('#parallax').jparallax();
});

$('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') || location.hostname === this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 800);
            return false;
        }
    }
});

Shadowbox.init();