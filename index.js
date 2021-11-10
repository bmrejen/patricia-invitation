(function(a, b, c) {
    if (c in b && b[c]) {
        var d, e = a.location, f = /^(a|html)$/i;
        a.addEventListener("click", function(a) {
            d = a.target;
            while (!f.test(d.nodeName))
                d = d.parentNode;
            "href"in d && (d.href.indexOf("http") || ~d.href.indexOf(e.host)) && (a.preventDefault(),
            e.href = d.href)
        }, !1)
    }
}
)(document, window.navigator, "standalone");
;//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function() {
    var n = this
      , t = n._
      , r = {}
      , e = Array.prototype
      , u = Object.prototype
      , i = Function.prototype
      , a = e.push
      , o = e.slice
      , c = e.concat
      , l = u.toString
      , f = u.hasOwnProperty
      , s = e.forEach
      , p = e.map
      , h = e.reduce
      , v = e.reduceRight
      , g = e.filter
      , d = e.every
      , m = e.some
      , y = e.indexOf
      , b = e.lastIndexOf
      , x = Array.isArray
      , w = Object.keys
      , _ = i.bind
      , j = function(n) {
        return n instanceof j ? n : this instanceof j ? (this._wrapped = n,
        void 0) : new j(n)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = j),
    exports._ = j) : n._ = j,
    j.VERSION = "1.5.2";
    var A = j.each = j.forEach = function(n, t, e) {
        if (null != n)
            if (s && n.forEach === s)
                n.forEach(t, e);
            else if (n.length === +n.length) {
                for (var u = 0, i = n.length; i > u; u++)
                    if (t.call(e, n[u], u, n) === r)
                        return
            } else
                for (var a = j.keys(n), u = 0, i = a.length; i > u; u++)
                    if (t.call(e, n[a[u]], a[u], n) === r)
                        return
    }
    ;
    j.map = j.collect = function(n, t, r) {
        var e = [];
        return null == n ? e : p && n.map === p ? n.map(t, r) : (A(n, function(n, u, i) {
            e.push(t.call(r, n, u, i))
        }),
        e)
    }
    ;
    var E = "Reduce of empty array with no initial value";
    j.reduce = j.foldl = j.inject = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []),
        h && n.reduce === h)
            return e && (t = j.bind(t, e)),
            u ? n.reduce(t, r) : n.reduce(t);
        if (A(n, function(n, i, a) {
            u ? r = t.call(e, r, n, i, a) : (r = n,
            u = !0)
        }),
        !u)
            throw new TypeError(E);
        return r
    }
    ,
    j.reduceRight = j.foldr = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []),
        v && n.reduceRight === v)
            return e && (t = j.bind(t, e)),
            u ? n.reduceRight(t, r) : n.reduceRight(t);
        var i = n.length;
        if (i !== +i) {
            var a = j.keys(n);
            i = a.length
        }
        if (A(n, function(o, c, l) {
            c = a ? a[--i] : --i,
            u ? r = t.call(e, r, n[c], c, l) : (r = n[c],
            u = !0)
        }),
        !u)
            throw new TypeError(E);
        return r
    }
    ,
    j.find = j.detect = function(n, t, r) {
        var e;
        return O(n, function(n, u, i) {
            return t.call(r, n, u, i) ? (e = n,
            !0) : void 0
        }),
        e
    }
    ,
    j.filter = j.select = function(n, t, r) {
        var e = [];
        return null == n ? e : g && n.filter === g ? n.filter(t, r) : (A(n, function(n, u, i) {
            t.call(r, n, u, i) && e.push(n)
        }),
        e)
    }
    ,
    j.reject = function(n, t, r) {
        return j.filter(n, function(n, e, u) {
            return !t.call(r, n, e, u)
        }, r)
    }
    ,
    j.every = j.all = function(n, t, e) {
        t || (t = j.identity);
        var u = !0;
        return null == n ? u : d && n.every === d ? n.every(t, e) : (A(n, function(n, i, a) {
            return (u = u && t.call(e, n, i, a)) ? void 0 : r
        }),
        !!u)
    }
    ;
    var O = j.some = j.any = function(n, t, e) {
        t || (t = j.identity);
        var u = !1;
        return null == n ? u : m && n.some === m ? n.some(t, e) : (A(n, function(n, i, a) {
            return u || (u = t.call(e, n, i, a)) ? r : void 0
        }),
        !!u)
    }
    ;
    j.contains = j.include = function(n, t) {
        return null == n ? !1 : y && n.indexOf === y ? n.indexOf(t) != -1 : O(n, function(n) {
            return n === t
        })
    }
    ,
    j.invoke = function(n, t) {
        var r = o.call(arguments, 2)
          , e = j.isFunction(t);
        return j.map(n, function(n) {
            return (e ? t : n[t]).apply(n, r)
        })
    }
    ,
    j.pluck = function(n, t) {
        return j.map(n, function(n) {
            return n[t]
        })
    }
    ,
    j.where = function(n, t, r) {
        return j.isEmpty(t) ? r ? void 0 : [] : j[r ? "find" : "filter"](n, function(n) {
            for (var r in t)
                if (t[r] !== n[r])
                    return !1;
            return !0
        })
    }
    ,
    j.findWhere = function(n, t) {
        return j.where(n, t, !0)
    }
    ,
    j.max = function(n, t, r) {
        if (!t && j.isArray(n) && n[0] === +n[0] && n.length < 65535)
            return Math.max.apply(Math, n);
        if (!t && j.isEmpty(n))
            return -1 / 0;
        var e = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return A(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            a > e.computed && (e = {
                value: n,
                computed: a
            })
        }),
        e.value
    }
    ,
    j.min = function(n, t, r) {
        if (!t && j.isArray(n) && n[0] === +n[0] && n.length < 65535)
            return Math.min.apply(Math, n);
        if (!t && j.isEmpty(n))
            return 1 / 0;
        var e = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return A(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            a < e.computed && (e = {
                value: n,
                computed: a
            })
        }),
        e.value
    }
    ,
    j.shuffle = function(n) {
        var t, r = 0, e = [];
        return A(n, function(n) {
            t = j.random(r++),
            e[r - 1] = e[t],
            e[t] = n
        }),
        e
    }
    ,
    j.sample = function(n, t, r) {
        return arguments.length < 2 || r ? n[j.random(n.length - 1)] : j.shuffle(n).slice(0, Math.max(0, t))
    }
    ;
    var k = function(n) {
        return j.isFunction(n) ? n : function(t) {
            return t[n]
        }
    };
    j.sortBy = function(n, t, r) {
        var e = k(t);
        return j.pluck(j.map(n, function(n, t, u) {
            return {
                value: n,
                index: t,
                criteria: e.call(r, n, t, u)
            }
        }).sort(function(n, t) {
            var r = n.criteria
              , e = t.criteria;
            if (r !== e) {
                if (r > e || r === void 0)
                    return 1;
                if (e > r || e === void 0)
                    return -1
            }
            return n.index - t.index
        }), "value")
    }
    ;
    var F = function(n) {
        return function(t, r, e) {
            var u = {}
              , i = null == r ? j.identity : k(r);
            return A(t, function(r, a) {
                var o = i.call(e, r, a, t);
                n(u, o, r)
            }),
            u
        }
    };
    j.groupBy = F(function(n, t, r) {
        (j.has(n, t) ? n[t] : n[t] = []).push(r)
    }),
    j.indexBy = F(function(n, t, r) {
        n[t] = r
    }),
    j.countBy = F(function(n, t) {
        j.has(n, t) ? n[t]++ : n[t] = 1
    }),
    j.sortedIndex = function(n, t, r, e) {
        r = null == r ? j.identity : k(r);
        for (var u = r.call(e, t), i = 0, a = n.length; a > i; ) {
            var o = i + a >>> 1;
            r.call(e, n[o]) < u ? i = o + 1 : a = o
        }
        return i
    }
    ,
    j.toArray = function(n) {
        return n ? j.isArray(n) ? o.call(n) : n.length === +n.length ? j.map(n, j.identity) : j.values(n) : []
    }
    ,
    j.size = function(n) {
        return null == n ? 0 : n.length === +n.length ? n.length : j.keys(n).length
    }
    ,
    j.first = j.head = j.take = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : o.call(n, 0, t)
    }
    ,
    j.initial = function(n, t, r) {
        return o.call(n, 0, n.length - (null == t || r ? 1 : t))
    }
    ,
    j.last = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length - 1] : o.call(n, Math.max(n.length - t, 0))
    }
    ,
    j.rest = j.tail = j.drop = function(n, t, r) {
        return o.call(n, null == t || r ? 1 : t)
    }
    ,
    j.compact = function(n) {
        return j.filter(n, j.identity)
    }
    ;
    var M = function(n, t, r) {
        return t && j.every(n, j.isArray) ? c.apply(r, n) : (A(n, function(n) {
            j.isArray(n) || j.isArguments(n) ? t ? a.apply(r, n) : M(n, t, r) : r.push(n)
        }),
        r)
    };
    j.flatten = function(n, t) {
        return M(n, t, [])
    }
    ,
    j.without = function(n) {
        return j.difference(n, o.call(arguments, 1))
    }
    ,
    j.uniq = j.unique = function(n, t, r, e) {
        j.isFunction(t) && (e = r,
        r = t,
        t = !1);
        var u = r ? j.map(n, r, e) : n
          , i = []
          , a = [];
        return A(u, function(r, e) {
            (t ? e && a[a.length - 1] === r : j.contains(a, r)) || (a.push(r),
            i.push(n[e]))
        }),
        i
    }
    ,
    j.union = function() {
        return j.uniq(j.flatten(arguments, !0))
    }
    ,
    j.intersection = function(n) {
        var t = o.call(arguments, 1);
        return j.filter(j.uniq(n), function(n) {
            return j.every(t, function(t) {
                return j.indexOf(t, n) >= 0
            })
        })
    }
    ,
    j.difference = function(n) {
        var t = c.apply(e, o.call(arguments, 1));
        return j.filter(n, function(n) {
            return !j.contains(t, n)
        })
    }
    ,
    j.zip = function() {
        for (var n = j.max(j.pluck(arguments, "length").concat(0)), t = new Array(n), r = 0; n > r; r++)
            t[r] = j.pluck(arguments, "" + r);
        return t
    }
    ,
    j.object = function(n, t) {
        if (null == n)
            return {};
        for (var r = {}, e = 0, u = n.length; u > e; e++)
            t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r
    }
    ,
    j.indexOf = function(n, t, r) {
        if (null == n)
            return -1;
        var e = 0
          , u = n.length;
        if (r) {
            if ("number" != typeof r)
                return e = j.sortedIndex(n, t),
                n[e] === t ? e : -1;
            e = 0 > r ? Math.max(0, u + r) : r
        }
        if (y && n.indexOf === y)
            return n.indexOf(t, r);
        for (; u > e; e++)
            if (n[e] === t)
                return e;
        return -1
    }
    ,
    j.lastIndexOf = function(n, t, r) {
        if (null == n)
            return -1;
        var e = null != r;
        if (b && n.lastIndexOf === b)
            return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t);
        for (var u = e ? r : n.length; u--; )
            if (n[u] === t)
                return u;
        return -1
    }
    ,
    j.range = function(n, t, r) {
        arguments.length <= 1 && (t = n || 0,
        n = 0),
        r = arguments[2] || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = new Array(e); e > u; )
            i[u++] = n,
            n += r;
        return i
    }
    ;
    var R = function() {};
    j.bind = function(n, t) {
        var r, e;
        if (_ && n.bind === _)
            return _.apply(n, o.call(arguments, 1));
        if (!j.isFunction(n))
            throw new TypeError;
        return r = o.call(arguments, 2),
        e = function() {
            if (!(this instanceof e))
                return n.apply(t, r.concat(o.call(arguments)));
            R.prototype = n.prototype;
            var u = new R;
            R.prototype = null;
            var i = n.apply(u, r.concat(o.call(arguments)));
            return Object(i) === i ? i : u
        }
    }
    ,
    j.partial = function(n) {
        var t = o.call(arguments, 1);
        return function() {
            return n.apply(this, t.concat(o.call(arguments)))
        }
    }
    ,
    j.bindAll = function(n) {
        var t = o.call(arguments, 1);
        if (0 === t.length)
            throw new Error("bindAll must be passed function names");
        return A(t, function(t) {
            n[t] = j.bind(n[t], n)
        }),
        n
    }
    ,
    j.memoize = function(n, t) {
        var r = {};
        return t || (t = j.identity),
        function() {
            var e = t.apply(this, arguments);
            return j.has(r, e) ? r[e] : r[e] = n.apply(this, arguments)
        }
    }
    ,
    j.delay = function(n, t) {
        var r = o.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, r)
        }, t)
    }
    ,
    j.defer = function(n) {
        return j.delay.apply(j, [n, 1].concat(o.call(arguments, 1)))
    }
    ,
    j.throttle = function(n, t, r) {
        var e, u, i, a = null, o = 0;
        r || (r = {});
        var c = function() {
            o = r.leading === !1 ? 0 : new Date,
            a = null,
            i = n.apply(e, u)
        };
        return function() {
            var l = new Date;
            o || r.leading !== !1 || (o = l);
            var f = t - (l - o);
            return e = this,
            u = arguments,
            0 >= f ? (clearTimeout(a),
            a = null,
            o = l,
            i = n.apply(e, u)) : a || r.trailing === !1 || (a = setTimeout(c, f)),
            i
        }
    }
    ,
    j.debounce = function(n, t, r) {
        var e, u, i, a, o;
        return function() {
            i = this,
            u = arguments,
            a = new Date;
            var c = function() {
                var l = new Date - a;
                t > l ? e = setTimeout(c, t - l) : (e = null,
                r || (o = n.apply(i, u)))
            }
              , l = r && !e;
            return e || (e = setTimeout(c, t)),
            l && (o = n.apply(i, u)),
            o
        }
    }
    ,
    j.once = function(n) {
        var t, r = !1;
        return function() {
            return r ? t : (r = !0,
            t = n.apply(this, arguments),
            n = null,
            t)
        }
    }
    ,
    j.wrap = function(n, t) {
        return function() {
            var r = [n];
            return a.apply(r, arguments),
            t.apply(this, r)
        }
    }
    ,
    j.compose = function() {
        var n = arguments;
        return function() {
            for (var t = arguments, r = n.length - 1; r >= 0; r--)
                t = [n[r].apply(this, t)];
            return t[0]
        }
    }
    ,
    j.after = function(n, t) {
        return function() {
            return --n < 1 ? t.apply(this, arguments) : void 0
        }
    }
    ,
    j.keys = w || function(n) {
        if (n !== Object(n))
            throw new TypeError("Invalid object");
        var t = [];
        for (var r in n)
            j.has(n, r) && t.push(r);
        return t
    }
    ,
    j.values = function(n) {
        for (var t = j.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++)
            e[u] = n[t[u]];
        return e
    }
    ,
    j.pairs = function(n) {
        for (var t = j.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++)
            e[u] = [t[u], n[t[u]]];
        return e
    }
    ,
    j.invert = function(n) {
        for (var t = {}, r = j.keys(n), e = 0, u = r.length; u > e; e++)
            t[n[r[e]]] = r[e];
        return t
    }
    ,
    j.functions = j.methods = function(n) {
        var t = [];
        for (var r in n)
            j.isFunction(n[r]) && t.push(r);
        return t.sort()
    }
    ,
    j.extend = function(n) {
        return A(o.call(arguments, 1), function(t) {
            if (t)
                for (var r in t)
                    n[r] = t[r]
        }),
        n
    }
    ,
    j.pick = function(n) {
        var t = {}
          , r = c.apply(e, o.call(arguments, 1));
        return A(r, function(r) {
            r in n && (t[r] = n[r])
        }),
        t
    }
    ,
    j.omit = function(n) {
        var t = {}
          , r = c.apply(e, o.call(arguments, 1));
        for (var u in n)
            j.contains(r, u) || (t[u] = n[u]);
        return t
    }
    ,
    j.defaults = function(n) {
        return A(o.call(arguments, 1), function(t) {
            if (t)
                for (var r in t)
                    n[r] === void 0 && (n[r] = t[r])
        }),
        n
    }
    ,
    j.clone = function(n) {
        return j.isObject(n) ? j.isArray(n) ? n.slice() : j.extend({}, n) : n
    }
    ,
    j.tap = function(n, t) {
        return t(n),
        n
    }
    ;
    var S = function(n, t, r, e) {
        if (n === t)
            return 0 !== n || 1 / n == 1 / t;
        if (null == n || null == t)
            return n === t;
        n instanceof j && (n = n._wrapped),
        t instanceof j && (t = t._wrapped);
        var u = l.call(n);
        if (u != l.call(t))
            return !1;
        switch (u) {
        case "[object String]":
            return n == String(t);
        case "[object Number]":
            return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
        case "[object Date]":
        case "[object Boolean]":
            return +n == +t;
        case "[object RegExp]":
            return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase
        }
        if ("object" != typeof n || "object" != typeof t)
            return !1;
        for (var i = r.length; i--; )
            if (r[i] == n)
                return e[i] == t;
        var a = n.constructor
          , o = t.constructor;
        if (a !== o && !(j.isFunction(a) && a instanceof a && j.isFunction(o) && o instanceof o))
            return !1;
        r.push(n),
        e.push(t);
        var c = 0
          , f = !0;
        if ("[object Array]" == u) {
            if (c = n.length,
            f = c == t.length)
                for (; c-- && (f = S(n[c], t[c], r, e)); )
                    ;
        } else {
            for (var s in n)
                if (j.has(n, s) && (c++,
                !(f = j.has(t, s) && S(n[s], t[s], r, e))))
                    break;
            if (f) {
                for (s in t)
                    if (j.has(t, s) && !c--)
                        break;
                f = !c
            }
        }
        return r.pop(),
        e.pop(),
        f
    };
    j.isEqual = function(n, t) {
        return S(n, t, [], [])
    }
    ,
    j.isEmpty = function(n) {
        if (null == n)
            return !0;
        if (j.isArray(n) || j.isString(n))
            return 0 === n.length;
        for (var t in n)
            if (j.has(n, t))
                return !1;
        return !0
    }
    ,
    j.isElement = function(n) {
        return !(!n || 1 !== n.nodeType)
    }
    ,
    j.isArray = x || function(n) {
        return "[object Array]" == l.call(n)
    }
    ,
    j.isObject = function(n) {
        return n === Object(n)
    }
    ,
    A(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(n) {
        j["is" + n] = function(t) {
            return l.call(t) == "[object " + n + "]"
        }
    }),
    j.isArguments(arguments) || (j.isArguments = function(n) {
        return !(!n || !j.has(n, "callee"))
    }
    ),
    "function" != typeof /./ && (j.isFunction = function(n) {
        return "function" == typeof n
    }
    ),
    j.isFinite = function(n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    }
    ,
    j.isNaN = function(n) {
        return j.isNumber(n) && n != +n
    }
    ,
    j.isBoolean = function(n) {
        return n === !0 || n === !1 || "[object Boolean]" == l.call(n)
    }
    ,
    j.isNull = function(n) {
        return null === n
    }
    ,
    j.isUndefined = function(n) {
        return n === void 0
    }
    ,
    j.has = function(n, t) {
        return f.call(n, t)
    }
    ,
    j.noConflict = function() {
        return n._ = t,
        this
    }
    ,
    j.identity = function(n) {
        return n
    }
    ,
    j.times = function(n, t, r) {
        for (var e = Array(Math.max(0, n)), u = 0; n > u; u++)
            e[u] = t.call(r, u);
        return e
    }
    ,
    j.random = function(n, t) {
        return null == t && (t = n,
        n = 0),
        n + Math.floor(Math.random() * (t - n + 1))
    }
    ;
    var I = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    I.unescape = j.invert(I.escape);
    var T = {
        escape: new RegExp("[" + j.keys(I.escape).join("") + "]","g"),
        unescape: new RegExp("(" + j.keys(I.unescape).join("|") + ")","g")
    };
    j.each(["escape", "unescape"], function(n) {
        j[n] = function(t) {
            return null == t ? "" : ("" + t).replace(T[n], function(t) {
                return I[n][t]
            })
        }
    }),
    j.result = function(n, t) {
        if (null == n)
            return void 0;
        var r = n[t];
        return j.isFunction(r) ? r.call(n) : r
    }
    ,
    j.mixin = function(n) {
        A(j.functions(n), function(t) {
            var r = j[t] = n[t];
            j.prototype[t] = function() {
                var n = [this._wrapped];
                return a.apply(n, arguments),
                z.call(this, r.apply(j, n))
            }
        })
    }
    ;
    var N = 0;
    j.uniqueId = function(n) {
        var t = ++N + "";
        return n ? n + t : t
    }
    ,
    j.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var q = /(.)^/
      , B = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }
      , D = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    j.template = function(n, t, r) {
        var e;
        r = j.defaults({}, r, j.templateSettings);
        var u = new RegExp([(r.escape || q).source, (r.interpolate || q).source, (r.evaluate || q).source].join("|") + "|$","g")
          , i = 0
          , a = "__p+='";
        n.replace(u, function(t, r, e, u, o) {
            return a += n.slice(i, o).replace(D, function(n) {
                return "\\" + B[n]
            }),
            r && (a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"),
            e && (a += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"),
            u && (a += "';\n" + u + "\n__p+='"),
            i = o + t.length,
            t
        }),
        a += "';\n",
        r.variable || (a = "with(obj||{}){\n" + a + "}\n"),
        a = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            e = new Function(r.variable || "obj","_",a)
        } catch (o) {
            throw o.source = a,
            o
        }
        if (t)
            return e(t, j);
        var c = function(n) {
            return e.call(this, n, j)
        };
        return c.source = "function(" + (r.variable || "obj") + "){\n" + a + "}",
        c
    }
    ,
    j.chain = function(n) {
        return j(n).chain()
    }
    ;
    var z = function(n) {
        return this._chain ? j(n).chain() : n
    };
    j.mixin(j),
    A(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
        var t = e[n];
        j.prototype[n] = function() {
            var r = this._wrapped;
            return t.apply(r, arguments),
            "shift" != n && "splice" != n || 0 !== r.length || delete r[0],
            z.call(this, r)
        }
    }),
    A(["concat", "join", "slice"], function(n) {
        var t = e[n];
        j.prototype[n] = function() {
            return z.call(this, t.apply(this._wrapped, arguments))
        }
    }),
    j.extend(j.prototype, {
        chain: function() {
            return this._chain = !0,
            this
        },
        value: function() {
            return this._wrapped
        }
    })
}
).call(this);
//# sourceMappingURL=underscore-min.map
;(function(root, factory) {
    if (typeof module === "object" && module.exports) {
        module.exports = function(_) {
            _ = _ || require("underscore");
            return factory(_);
        }
        ;
    } else if (typeof define === "function" && define.amd) {
        define(["underscore"], function(_) {
            return factory(_, root);
        });
    } else {
        root.postal = factory(root._, root);
    }
}(this, function(_, global, undefined) {
    var postal;
    var ConsecutiveDistinctPredicate = function() {
        var previous;
        return function(data) {
            var eq = false;
            if (_.isString(data)) {
                eq = data === previous;
                previous = data;
            } else {
                eq = _.isEqual(data, previous);
                previous = _.clone(data);
            }
            return !eq;
        }
        ;
    };
    var DistinctPredicate = function() {
        var previous = [];
        return function(data) {
            var isDistinct = !_.any(previous, function(p) {
                if (_.isObject(data) || _.isArray(data)) {
                    return _.isEqual(data, p);
                }
                return data === p;
            });
            if (isDistinct) {
                previous.push(data);
            }
            return isDistinct;
        }
        ;
    };
    var ChannelDefinition = function(channelName) {
        this.channel = channelName || postal.configuration.DEFAULT_CHANNEL;
    };
    ChannelDefinition.prototype.subscribe = function() {
        return arguments.length === 1 ? new SubscriptionDefinition(this.channel,arguments[0].topic,arguments[0].callback) : new SubscriptionDefinition(this.channel,arguments[0],arguments[1]);
    }
    ;
    ChannelDefinition.prototype.publish = function() {
        var envelope = arguments.length === 1 ? (Object.prototype.toString.call(arguments[0]) === "[object String]" ? {
            topic: arguments[0]
        } : arguments[0]) : {
            topic: arguments[0],
            data: arguments[1]
        };
        envelope.channel = this.channel;
        return postal.configuration.bus.publish(envelope);
    }
    ;
    var SubscriptionDefinition = function(channel, topic, callback) {
        if (arguments.length !== 3) {
            throw new Error("You must provide a channel, topic and callback when creating a SubscriptionDefinition instance.");
        }
        if (topic.length === 0) {
            throw new Error("Topics cannot be empty");
        }
        this.channel = channel;
        this.topic = topic;
        this.callback = callback;
        this.constraints = [];
        this.context = null;
        postal.configuration.bus.publish({
            channel: postal.configuration.SYSTEM_CHANNEL,
            topic: "subscription.created",
            data: {
                event: "subscription.created",
                channel: channel,
                topic: topic
            }
        });
        postal.configuration.bus.subscribe(this);
    };
    SubscriptionDefinition.prototype = {
        unsubscribe: function() {
            if (!this.inactive) {
                this.inactive = true;
                postal.configuration.bus.unsubscribe(this);
                postal.configuration.bus.publish({
                    channel: postal.configuration.SYSTEM_CHANNEL,
                    topic: "subscription.removed",
                    data: {
                        event: "subscription.removed",
                        channel: this.channel,
                        topic: this.topic
                    }
                });
            }
        },
        defer: function() {
            var self = this;
            var fn = this.callback;
            this.callback = function(data, env) {
                setTimeout(function() {
                    fn.call(self.context, data, env);
                }, 0);
            }
            ;
            return this;
        },
        disposeAfter: function(maxCalls) {
            if (_.isNaN(maxCalls) || maxCalls <= 0) {
                throw "The value provided to disposeAfter (maxCalls) must be a number greater than zero.";
            }
            var self = this;
            var fn = this.callback;
            var dispose = _.after(maxCalls, _.bind(function() {
                this.unsubscribe();
            }, this));
            this.callback = function() {
                fn.apply(self.context, arguments);
                dispose();
            }
            ;
            return this;
        },
        distinctUntilChanged: function() {
            this.withConstraint(new ConsecutiveDistinctPredicate());
            return this;
        },
        distinct: function() {
            this.withConstraint(new DistinctPredicate());
            return this;
        },
        once: function() {
            this.disposeAfter(1);
            return this;
        },
        withConstraint: function(predicate) {
            if (!_.isFunction(predicate)) {
                throw "Predicate constraint must be a function";
            }
            this.constraints.push(predicate);
            return this;
        },
        withConstraints: function(predicates) {
            var self = this;
            if (_.isArray(predicates)) {
                _.each(predicates, function(predicate) {
                    self.withConstraint(predicate);
                });
            }
            return self;
        },
        withContext: function(context) {
            this.context = context;
            return this;
        },
        withDebounce: function(milliseconds, immediate) {
            if (_.isNaN(milliseconds)) {
                throw "Milliseconds must be a number";
            }
            var fn = this.callback;
            this.callback = _.debounce(fn, milliseconds, !!immediate);
            return this;
        },
        withDelay: function(milliseconds) {
            if (_.isNaN(milliseconds)) {
                throw "Milliseconds must be a number";
            }
            var self = this;
            var fn = this.callback;
            this.callback = function(data, env) {
                setTimeout(function() {
                    fn.call(self.context, data, env);
                }, milliseconds);
            }
            ;
            return this;
        },
        withThrottle: function(milliseconds, options) {
            options = options || {};
            if (_.isNaN(milliseconds)) {
                throw "Milliseconds must be a number";
            }
            var fn = this.callback;
            this.callback = _.throttle(fn, milliseconds, options);
            return this;
        },
        subscribe: function(callback) {
            this.callback = callback;
            return this;
        }
    };
    var bindingsResolver = {
        cache: {},
        regex: {},
        compare: function(binding, topic) {
            var pattern, rgx, prevSegment, result = (this.cache[topic] && this.cache[topic][binding]);
            if (typeof result !== "undefined") {
                return result;
            }
            if (!(rgx = this.regex[binding])) {
                pattern = "^" + _.map(binding.split("."), function(segment) {
                    var res = "";
                    if (!!prevSegment) {
                        res = prevSegment !== "#" ? "\\.\\b" : "\\b";
                    }
                    if (segment === "#") {
                        res += "[\\s\\S]*";
                    } else if (segment === "*") {
                        res += "[^.]+";
                    } else {
                        res += segment;
                    }
                    prevSegment = segment;
                    return res;
                }).join("") + "$";
                rgx = this.regex[binding] = new RegExp(pattern);
            }
            this.cache[topic] = this.cache[topic] || {};
            this.cache[topic][binding] = result = rgx.test(topic);
            return result;
        },
        reset: function() {
            this.cache = {};
            this.regex = {};
        }
    };
    var fireSub = function(subDef, envelope) {
        if (!subDef.inactive && postal.configuration.resolver.compare(subDef.topic, envelope.topic)) {
            if (_.all(subDef.constraints, function(constraint) {
                return constraint.call(subDef.context, envelope.data, envelope);
            })) {
                if (typeof subDef.callback === "function") {
                    subDef.callback.call(subDef.context, envelope.data, envelope);
                }
            }
        }
    };
    var pubInProgress = 0;
    var unSubQueue = [];
    var clearUnSubQueue = function() {
        while (unSubQueue.length) {
            localBus.unsubscribe(unSubQueue.shift());
        }
    };
    var localBus = {
        addWireTap: function(callback) {
            var self = this;
            self.wireTaps.push(callback);
            return function() {
                var idx = self.wireTaps.indexOf(callback);
                if (idx !== -1) {
                    self.wireTaps.splice(idx, 1);
                }
            }
            ;
        },
        publish: function(envelope) {
            ++pubInProgress;
            envelope.timeStamp = new Date();
            _.each(this.wireTaps, function(tap) {
                tap(envelope.data, envelope);
            });
            if (this.subscriptions[envelope.channel]) {
                _.each(this.subscriptions[envelope.channel], function(subscribers) {
                    var idx = 0, len = subscribers.length, subDef;
                    while (idx < len) {
                        if (subDef = subscribers[idx++]) {
                            fireSub(subDef, envelope);
                        }
                    }
                });
            }
            if (--pubInProgress === 0) {
                clearUnSubQueue();
            }
            return envelope;
        },
        reset: function() {
            if (this.subscriptions) {
                _.each(this.subscriptions, function(channel) {
                    _.each(channel, function(topic) {
                        while (topic.length) {
                            topic.pop().unsubscribe();
                        }
                    });
                });
                this.subscriptions = {};
            }
        },
        subscribe: function(subDef) {
            var channel = this.subscriptions[subDef.channel], subs;
            if (!channel) {
                channel = this.subscriptions[subDef.channel] = {};
            }
            subs = this.subscriptions[subDef.channel][subDef.topic];
            if (!subs) {
                subs = this.subscriptions[subDef.channel][subDef.topic] = [];
            }
            subs.push(subDef);
            return subDef;
        },
        subscriptions: {},
        wireTaps: [],
        unsubscribe: function(config) {
            if (pubInProgress) {
                unSubQueue.push(config);
                return;
            }
            if (this.subscriptions[config.channel][config.topic]) {
                var len = this.subscriptions[config.channel][config.topic].length
                  , idx = 0;
                while (idx < len) {
                    if (this.subscriptions[config.channel][config.topic][idx] === config) {
                        this.subscriptions[config.channel][config.topic].splice(idx, 1);
                        break;
                    }
                    idx += 1;
                }
            }
        }
    };
    postal = {
        configuration: {
            bus: localBus,
            resolver: bindingsResolver,
            DEFAULT_CHANNEL: "/",
            SYSTEM_CHANNEL: "postal"
        },
        ChannelDefinition: ChannelDefinition,
        SubscriptionDefinition: SubscriptionDefinition,
        channel: function(channelName) {
            return new ChannelDefinition(channelName);
        },
        subscribe: function(options) {
            return new SubscriptionDefinition(options.channel || postal.configuration.DEFAULT_CHANNEL,options.topic,options.callback);
        },
        publish: function(envelope) {
            envelope.channel = envelope.channel || postal.configuration.DEFAULT_CHANNEL;
            return postal.configuration.bus.publish(envelope);
        },
        addWireTap: function(callback) {
            return this.configuration.bus.addWireTap(callback);
        },
        linkChannels: function(sources, destinations) {
            var result = [];
            sources = !_.isArray(sources) ? [sources] : sources;
            destinations = !_.isArray(destinations) ? [destinations] : destinations;
            _.each(sources, function(source) {
                var sourceTopic = source.topic || "#";
                _.each(destinations, function(destination) {
                    var destChannel = destination.channel || postal.configuration.DEFAULT_CHANNEL;
                    result.push(postal.subscribe({
                        channel: source.channel || postal.configuration.DEFAULT_CHANNEL,
                        topic: sourceTopic,
                        callback: function(data, env) {
                            var newEnv = _.clone(env);
                            newEnv.topic = _.isFunction(destination.topic) ? destination.topic(env.topic) : destination.topic || env.topic;
                            newEnv.channel = destChannel;
                            newEnv.data = data;
                            postal.publish(newEnv);
                        }
                    }));
                });
            });
            return result;
        },
        utils: {
            getSubscribersFor: function() {
                var channel = arguments[0]
                  , tpc = arguments[1];
                if (arguments.length === 1) {
                    channel = arguments[0].channel || postal.configuration.DEFAULT_CHANNEL;
                    tpc = arguments[0].topic;
                }
                if (postal.configuration.bus.subscriptions[channel] && Object.prototype.hasOwnProperty.call(postal.configuration.bus.subscriptions[channel], tpc)) {
                    return postal.configuration.bus.subscriptions[channel][tpc];
                }
                return [];
            },
            reset: function() {
                postal.configuration.bus.reset();
                postal.configuration.resolver.reset();
            }
        }
    };
    localBus.subscriptions[postal.configuration.SYSTEM_CHANNEL] = {};
    if (global && Object.prototype.hasOwnProperty.call(global, "__postalReady__") && _.isArray(global.__postalReady__)) {
        while (global.__postalReady__.length) {
            global.__postalReady__.shift().onReady(postal);
        }
    }
    return postal;
}));
;(function(w) {
    var routes = [];
    var map = {};
    var reference = "routie";
    var oldReference = w[reference];
    var Route = function(path, name) {
        this.name = name;
        this.path = path;
        this.keys = [];
        this.fns = [];
        this.params = {};
        this.regex = pathToRegexp(this.path, this.keys, false, false);
    };
    Route.prototype.addHandler = function(fn) {
        this.fns.push(fn);
    }
    ;
    Route.prototype.removeHandler = function(fn) {
        for (var i = 0, c = this.fns.length; i < c; i++) {
            var f = this.fns[i];
            if (fn == f) {
                this.fns.splice(i, 1);
                return;
            }
        }
    }
    ;
    Route.prototype.run = function(params) {
        for (var i = 0, c = this.fns.length; i < c; i++) {
            this.fns[i].apply(this, params);
        }
    }
    ;
    Route.prototype.match = function(path, params) {
        var m = this.regex.exec(path);
        if (!m)
            return false;
        for (var i = 1, len = m.length; i < len; ++i) {
            var key = this.keys[i - 1];
            var val = ('string' == typeof m[i]) ? decodeURIComponent(m[i]) : m[i];
            if (key) {
                this.params[key.name] = val;
            }
            params.push(val);
        }
        return true;
    }
    ;
    Route.prototype.toURL = function(params) {
        var path = this.path;
        for (var param in params) {
            path = path.replace('/:' + param, '/' + params[param]);
        }
        path = path.replace(/\/:.*\?/g, '/').replace(/\?/g, '');
        if (path.indexOf(':') != -1) {
            throw new Error('missing parameters for url: ' + path);
        }
        return path;
    }
    ;
    var pathToRegexp = function(path, keys, sensitive, strict) {
        if (path instanceof RegExp)
            return path;
        if (path instanceof Array)
            path = '(' + path.join('|') + ')';
        path = path.concat(strict ? '' : '/?').replace(/\/\(/g, '(?:/').replace(/\+/g, '__plus__').replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?/g, function(_, slash, format, key, capture, optional) {
            keys.push({
                name: key,
                optional: !!optional
            });
            slash = slash || '';
            return '' + (optional ? '' : slash) + '(?:' + (optional ? slash : '') + (format || '') + (capture || (format && '([^/.]+?)' || '([^/]+?)')) + ')' + (optional || '');
        }).replace(/([\/.])/g, '\\$1').replace(/__plus__/g, '(.+)').replace(/\*/g, '(.*)');
        return new RegExp('^' + path + '$',sensitive ? '' : 'i');
    };
    var addHandler = function(path, fn) {
        var s = path.split(' ');
        var name = (s.length == 2) ? s[0] : null;
        path = (s.length == 2) ? s[1] : s[0];
        if (!map[path]) {
            map[path] = new Route(path,name);
            routes.push(map[path]);
        }
        map[path].addHandler(fn);
    };
    var routie = function(path, fn) {
        if (typeof fn == 'function') {
            addHandler(path, fn);
            routie.reload();
        } else if (typeof path == 'object') {
            for (var p in path) {
                addHandler(p, path[p]);
            }
            routie.reload();
        } else if (typeof fn === 'undefined') {
            routie.navigate(path);
        }
    };
    routie.lookup = function(name, obj) {
        for (var i = 0, c = routes.length; i < c; i++) {
            var route = routes[i];
            if (route.name == name) {
                return route.toURL(obj);
            }
        }
    }
    ;
    routie.remove = function(path, fn) {
        var route = map[path];
        if (!route)
            return;
        route.removeHandler(fn);
    }
    ;
    routie.removeAll = function() {
        map = {};
        routes = [];
    }
    ;
    routie.navigate = function(path, options) {
        options = options || {};
        var silent = options.silent || false;
        if (silent) {
            removeListener();
        }
        setTimeout(function() {
            window.location.hash = path;
            if (silent) {
                setTimeout(function() {
                    addListener();
                }, 1);
            }
        }, 1);
    }
    ;
    routie.noConflict = function() {
        w[reference] = oldReference;
        return routie;
    }
    ;
    var getHash = function() {
        return window.location.hash.substring(1);
    };
    var checkRoute = function(hash, route) {
        var params = [];
        if (route.match(hash, params)) {
            route.run(params);
            return true;
        }
        return false;
    };
    var hashChanged = routie.reload = function() {
        var hash = getHash();
        for (var i = 0, c = routes.length; i < c; i++) {
            var route = routes[i];
            if (checkRoute(hash, route)) {
                return;
            }
        }
    }
    ;
    var addListener = function() {
        if (w.addEventListener) {
            w.addEventListener('hashchange', hashChanged, false);
        } else {
            w.attachEvent('onhashchange', hashChanged);
        }
    };
    var removeListener = function() {
        if (w.removeEventListener) {
            w.removeEventListener('hashchange', hashChanged);
        } else {
            w.detachEvent('onhashchange', hashChanged);
        }
    };
    addListener();
    w[reference] = routie;
}
)(window);
;/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function(e, t) {
    var n, r, i = typeof t, o = e.location, a = e.document, s = a.documentElement, l = e.jQuery, u = e.$, c = {}, p = [], f = "1.10.2", d = p.concat, h = p.push, g = p.slice, m = p.indexOf, y = c.toString, v = c.hasOwnProperty, b = f.trim, x = function(e, t) {
        return new x.fn.init(e,t,r)
    }, w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = /\S+/g, C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, E = /^[\],:{}\s]*$/, S = /(?:^|:|,)(?:\s*\[)+/g, A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, D = /^-ms-/, L = /-([\da-z])/gi, H = function(e, t) {
        return t.toUpperCase()
    }, q = function(e) {
        (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(),
        x.ready())
    }, _ = function() {
        a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1),
        e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q),
        e.detachEvent("onload", q))
    };
    x.fn = x.prototype = {
        jquery: f,
        constructor: x,
        init: function(e, n, r) {
            var i, o;
            if (!e)
                return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e),
                !i || !i[1] && n)
                    return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof x ? n[0] : n,
                    x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)),
                    k.test(i[1]) && x.isPlainObject(n))
                        for (i in n)
                            x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = a.getElementById(i[2]),
                o && o.parentNode) {
                    if (o.id !== i[2])
                        return r.find(e);
                    this.length = 1,
                    this[0] = o
                }
                return this.context = a,
                this.selector = e,
                this
            }
            return e.nodeType ? (this.context = this[0] = e,
            this.length = 1,
            this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector,
            this.context = e.context),
            x.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return g.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return x.each(this, e, t)
        },
        ready: function(e) {
            return x.ready.promise().done(e),
            this
        },
        slice: function() {
            return this.pushStack(g.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(x.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: h,
        sort: [].sort,
        splice: [].splice
    },
    x.fn.init.prototype = x.fn,
    x.extend = x.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s,
        s = arguments[1] || {},
        l = 2),
        "object" == typeof s || x.isFunction(s) || (s = {}),
        u === l && (s = this,
        --l); u > l; l++)
            if (null != (o = arguments[l]))
                for (i in o)
                    e = s[i],
                    r = o[i],
                    s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1,
                    a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {},
                    s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }
    ,
    x.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e.$ === x && (e.$ = u),
            t && e.jQuery === x && (e.jQuery = l),
            x
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? x.readyWait++ : x.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--x.readyWait : !x.isReady) {
                if (!a.body)
                    return setTimeout(x.ready);
                x.isReady = !0,
                e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]),
                x.fn.trigger && x(a).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === x.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === x.type(e)
        }
        ,
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
        },
        isPlainObject: function(e) {
            var n;
            if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e))
                return !1;
            try {
                if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (r) {
                return !1
            }
            if (x.support.ownLast)
                for (n in e)
                    return v.call(e, n);
            for (n in e)
                ;
            return n === t || v.call(e, n)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        error: function(e) {
            throw Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e)
                return null;
            "boolean" == typeof t && (n = t,
            t = !1),
            t = t || a;
            var r = k.exec(e)
              , i = !n && [];
            return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i),
            i && x(i).remove(),
            x.merge([], r.childNodes))
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n),
            n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n),
            t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n)
                return null;
            try {
                e.DOMParser ? (i = new DOMParser,
                r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"),
                r.async = "false",
                r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n),
            r
        },
        noop: function() {},
        globalEval: function(t) {
            t && x.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            }
            )(t)
        },
        camelCase: function(e) {
            return e.replace(D, "ms-").replace(L, H)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0, o = e.length, a = M(e);
            if (n) {
                if (a) {
                    for (; o > i; i++)
                        if (r = t.apply(e[i], n),
                        r === !1)
                            break
                } else
                    for (i in e)
                        if (r = t.apply(e[i], n),
                        r === !1)
                            break
            } else if (a) {
                for (; o > i; i++)
                    if (r = t.call(e[i], i, e[i]),
                    r === !1)
                        break
            } else
                for (i in e)
                    if (r = t.call(e[i], i, e[i]),
                    r === !1)
                        break;
            return e
        },
        trim: b && !b.call("\ufeff\u00a0") ? function(e) {
            return null == e ? "" : b.call(e)
        }
        : function(e) {
            return null == e ? "" : (e + "").replace(C, "")
        }
        ,
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (m)
                    return m.call(t, e, n);
                for (r = t.length,
                n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length
              , i = e.length
              , o = 0;
            if ("number" == typeof r)
                for (; r > o; o++)
                    e[i++] = n[o];
            else
                while (n[o] !== t)
                    e[i++] = n[o++];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            var r, i = [], o = 0, a = e.length;
            for (n = !!n; a > o; o++)
                r = !!t(e[o], o),
                n !== r && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var r, i = 0, o = e.length, a = M(e), s = [];
            if (a)
                for (; o > i; i++)
                    r = t(e[i], i, n),
                    null != r && (s[s.length] = r);
            else
                for (i in e)
                    r = t(e[i], i, n),
                    null != r && (s[s.length] = r);
            return d.apply([], s)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n],
            n = e,
            e = o),
            x.isFunction(e) ? (r = g.call(arguments, 2),
            i = function() {
                return e.apply(n || this, r.concat(g.call(arguments)))
            }
            ,
            i.guid = e.guid = e.guid || x.guid++,
            i) : t
        },
        access: function(e, n, r, i, o, a, s) {
            var l = 0
              , u = e.length
              , c = null == r;
            if ("object" === x.type(r)) {
                o = !0;
                for (l in r)
                    x.access(e, n, l, r[l], !0, a, s)
            } else if (i !== t && (o = !0,
            x.isFunction(i) || (s = !0),
            c && (s ? (n.call(e, i),
            n = null) : (c = n,
            n = function(e, t, n) {
                return c.call(x(e), n)
            }
            )),
            n))
                for (; u > l; l++)
                    n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
            return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t)
                a[o] = e.style[o],
                e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t)
                e.style[o] = a[o];
            return i
        }
    }),
    x.ready.promise = function(t) {
        if (!n)
            if (n = x.Deferred(),
            "complete" === a.readyState)
                setTimeout(x.ready);
            else if (a.addEventListener)
                a.addEventListener("DOMContentLoaded", q, !1),
                e.addEventListener("load", q, !1);
            else {
                a.attachEvent("onreadystatechange", q),
                e.attachEvent("onload", q);
                var r = !1;
                try {
                    r = null == e.frameElement && a.documentElement
                } catch (i) {}
                r && r.doScroll && function o() {
                    if (!x.isReady) {
                        try {
                            r.doScroll("left")
                        } catch (e) {
                            return setTimeout(o, 50)
                        }
                        _(),
                        x.ready()
                    }
                }()
            }
        return n.promise(t)
    }
    ,
    x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    function M(e) {
        var t = e.length
          , n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    r = x(a),
    function(e, t) {
        var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date, w = e.document, T = 0, C = 0, N = st(), k = st(), E = st(), S = !1, A = function(e, t) {
            return e === t ? (S = !0,
            0) : 0
        }, j = typeof t, D = 1 << 31, L = {}.hasOwnProperty, H = [], q = H.pop, _ = H.push, M = H.push, O = H.slice, F = H.indexOf || function(e) {
            var t = 0
              , n = this.length;
            for (; n > t; t++)
                if (this[t] === e)
                    return t;
            return -1
        }
        , B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", P = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", W = R.replace("w", "w#"), $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]", I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)", z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"), X = RegExp("^" + P + "*," + P + "*"), U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), V = RegExp(P + "*[+~]"), Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"), J = RegExp(I), G = RegExp("^" + W + "$"), Q = {
            ID: RegExp("^#(" + R + ")"),
            CLASS: RegExp("^\\.(" + R + ")"),
            TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + $),
            PSEUDO: RegExp("^" + I),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
            bool: RegExp("^(?:" + B + ")$", "i"),
            needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
        }, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /^(?:input|select|textarea|button)$/i, tt = /^h\d$/i, nt = /'|\\/g, rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"), it = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
        };
        try {
            M.apply(H = O.call(w.childNodes), w.childNodes),
            H[w.childNodes.length].nodeType
        } catch (ot) {
            M = {
                apply: H.length ? function(e, t) {
                    _.apply(e, O.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        function at(e, t, n, i) {
            var o, a, s, l, u, c, d, m, y, x;
            if ((t ? t.ownerDocument || t : w) !== f && p(t),
            t = t || f,
            n = n || [],
            !e || "string" != typeof e)
                return n;
            if (1 !== (l = t.nodeType) && 9 !== l)
                return [];
            if (h && !i) {
                if (o = Z.exec(e))
                    if (s = o[1]) {
                        if (9 === l) {
                            if (a = t.getElementById(s),
                            !a || !a.parentNode)
                                return n;
                            if (a.id === s)
                                return n.push(a),
                                n
                        } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s)
                            return n.push(a),
                            n
                    } else {
                        if (o[2])
                            return M.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName)
                            return M.apply(n, t.getElementsByClassName(s)),
                            n
                    }
                if (r.qsa && (!g || !g.test(e))) {
                    if (m = d = b,
                    y = t,
                    x = 9 === l && e,
                    1 === l && "object" !== t.nodeName.toLowerCase()) {
                        c = mt(e),
                        (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m),
                        m = "[id='" + m + "'] ",
                        u = c.length;
                        while (u--)
                            c[u] = m + yt(c[u]);
                        y = V.test(e) && t.parentNode || t,
                        x = c.join(",")
                    }
                    if (x)
                        try {
                            return M.apply(n, y.querySelectorAll(x)),
                            n
                        } catch (T) {} finally {
                            d || t.removeAttribute("id")
                        }
                }
            }
            return kt(e.replace(z, "$1"), t, n, i)
        }
        function st() {
            var e = [];
            function t(n, r) {
                return e.push(n += " ") > o.cacheLength && delete t[e.shift()],
                t[n] = r
            }
            return t
        }
        function lt(e) {
            return e[b] = !0,
            e
        }
        function ut(e) {
            var t = f.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function ct(e, t) {
            var n = e.split("|")
              , r = e.length;
            while (r--)
                o.attrHandle[n[r]] = t
        }
        function pt(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function ft(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function dt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function ht(e) {
            return lt(function(t) {
                return t = +t,
                lt(function(n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while (a--)
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        s = at.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }
        ,
        r = at.support = {},
        p = at.setDocument = function(e) {
            var n = e ? e.ownerDocument || e : w
              , i = n.defaultView;
            return n !== f && 9 === n.nodeType && n.documentElement ? (f = n,
            d = n.documentElement,
            h = !s(n),
            i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() {
                p()
            }),
            r.attributes = ut(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            r.getElementsByTagName = ut(function(e) {
                return e.appendChild(n.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            r.getElementsByClassName = ut(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                e.firstChild.className = "i",
                2 === e.getElementsByClassName("i").length
            }),
            r.getById = ut(function(e) {
                return d.appendChild(e).id = b,
                !n.getElementsByName || !n.getElementsByName(b).length
            }),
            r.getById ? (o.find.ID = function(e, t) {
                if (typeof t.getElementById !== j && h) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }
            ,
            o.filter.ID = function(e) {
                var t = e.replace(rt, it);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete o.find.ID,
            o.filter.ID = function(e) {
                var t = e.replace(rt, it);
                return function(e) {
                    var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            o.find.TAG = r.getElementsByTagName ? function(e, n) {
                return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            o.find.CLASS = r.getElementsByClassName && function(e, n) {
                return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
            }
            ,
            m = [],
            g = [],
            (r.qsa = K.test(n.querySelectorAll)) && (ut(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>",
                e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"),
                e.querySelectorAll(":checked").length || g.push(":checked")
            }),
            ut(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("t", ""),
                e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"),
                e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                g.push(",.*:")
            })),
            (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function(e) {
                r.disconnectedMatch = y.call(e, "div"),
                y.call(e, "[s!='']:x"),
                m.push("!=", I)
            }),
            g = g.length && RegExp(g.join("|")),
            m = m.length && RegExp(m.join("|")),
            v = K.test(d.contains) || d.compareDocumentPosition ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            A = d.compareDocumentPosition ? function(e, t) {
                if (e === t)
                    return S = !0,
                    0;
                var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            }
            : function(e, t) {
                var r, i = 0, o = e.parentNode, a = t.parentNode, s = [e], l = [t];
                if (e === t)
                    return S = !0,
                    0;
                if (!o || !a)
                    return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
                if (o === a)
                    return pt(e, t);
                r = e;
                while (r = r.parentNode)
                    s.unshift(r);
                r = t;
                while (r = r.parentNode)
                    l.unshift(r);
                while (s[i] === l[i])
                    i++;
                return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
            }
            ,
            n) : f
        }
        ,
        at.matches = function(e, t) {
            return at(e, null, null, t)
        }
        ,
        at.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== f && p(e),
            t = t.replace(Y, "='$1']"),
            !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t)))
                try {
                    var n = y.call(e, t);
                    if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (i) {}
            return at(t, f, null, [e]).length > 0
        }
        ,
        at.contains = function(e, t) {
            return (e.ownerDocument || e) !== f && p(e),
            v(e, t)
        }
        ,
        at.attr = function(e, n) {
            (e.ownerDocument || e) !== f && p(e);
            var i = o.attrHandle[n.toLowerCase()]
              , a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
            return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
        }
        ,
        at.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        at.uniqueSort = function(e) {
            var t, n = [], i = 0, o = 0;
            if (S = !r.detectDuplicates,
            c = !r.sortStable && e.slice(0),
            e.sort(A),
            S) {
                while (t = e[o++])
                    t === e[o] && (i = n.push(o));
                while (i--)
                    e.splice(n[i], 1)
            }
            return e
        }
        ,
        a = at.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += a(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r]; r++)
                    n += a(t);
            return n
        }
        ,
        o = at.selectors = {
            cacheLength: 50,
            createPseudo: lt,
            match: Q,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(rt, it),
                    e[3] = (e[4] || e[5] || "").replace(rt, it),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var n, r = !e[5] && e[2];
                    return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n),
                    e[2] = r.slice(0, n)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(rt, it).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = N[e + " "];
                    return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = at.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "",
                        "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !l && !s;
                        if (m) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g])
                                        if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild],
                            a && v) {
                                c = m[b] || (m[b] = {}),
                                u = c[e] || [],
                                d = u[0] === T && u[1],
                                f = u[0] === T && u[2],
                                p = d && m.childNodes[d];
                                while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                    if (1 === p.nodeType && ++f && p === t) {
                                        c[e] = [T, d, f];
                                        break
                                    }
                            } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T)
                                f = u[1];
                            else
                                while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                    if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]),
                                    p === t))
                                        break;
                            return f -= i,
                            f === r || 0 === f % r && f / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
                    return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t],
                    o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function(e, n) {
                        var i, o = r(e, t), a = o.length;
                        while (a--)
                            i = F.call(e, o[a]),
                            e[i] = !(n[i] = o[a])
                    }) : function(e) {
                        return r(e, 0, n)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: lt(function(e) {
                    var t = []
                      , n = []
                      , r = l(e.replace(z, "$1"));
                    return r[b] ? lt(function(e, t, n, i) {
                        var o, a = r(e, null, i, []), s = e.length;
                        while (s--)
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        !n.pop()
                    }
                }),
                has: lt(function(e) {
                    return function(t) {
                        return at(e, t).length > 0
                    }
                }),
                contains: lt(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
                    }
                }),
                lang: lt(function(e) {
                    return G.test(e || "") || at.error("unsupported lang: " + e),
                    e = e.replace(rt, it).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return n = n.toLowerCase(),
                                n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === d
                },
                focus: function(e) {
                    return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !o.pseudos.empty(e)
                },
                header: function(e) {
                    return tt.test(e.nodeName)
                },
                input: function(e) {
                    return et.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: ht(function() {
                    return [0]
                }),
                last: ht(function(e, t) {
                    return [t - 1]
                }),
                eq: ht(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: ht(function(e, t) {
                    var n = 0;
                    for (; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                odd: ht(function(e, t) {
                    var n = 1;
                    for (; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                lt: ht(function(e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: ht(function(e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; t > ++r; )
                        e.push(r);
                    return e
                })
            }
        },
        o.pseudos.nth = o.pseudos.eq;
        for (n in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            o.pseudos[n] = ft(n);
        for (n in {
            submit: !0,
            reset: !0
        })
            o.pseudos[n] = dt(n);
        function gt() {}
        gt.prototype = o.filters = o.pseudos,
        o.setFilters = new gt;
        function mt(e, t) {
            var n, r, i, a, s, l, u, c = k[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            s = e,
            l = [],
            u = o.preFilter;
            while (s) {
                (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s),
                l.push(i = [])),
                n = !1,
                (r = U.exec(s)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace(z, " ")
                }),
                s = s.slice(n.length));
                for (a in o.filter)
                    !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: a,
                        matches: r
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
        }
        function yt(e) {
            var t = 0
              , n = e.length
              , r = "";
            for (; n > t; t++)
                r += e[t].value;
            return r
        }
        function vt(e, t, n) {
            var r = t.dir
              , o = n && "parentNode" === r
              , a = C++;
            return t.first ? function(t, n, i) {
                while (t = t[r])
                    if (1 === t.nodeType || o)
                        return e(t, n, i)
            }
            : function(t, n, s) {
                var l, u, c, p = T + " " + a;
                if (s) {
                    while (t = t[r])
                        if ((1 === t.nodeType || o) && e(t, n, s))
                            return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || o)
                            if (c = t[b] || (t[b] = {}),
                            (u = c[r]) && u[0] === p) {
                                if ((l = u[1]) === !0 || l === i)
                                    return l === !0
                            } else if (u = c[r] = [p],
                            u[1] = e(t, n, s) || i,
                            u[1] === !0)
                                return !0
            }
        }
        function bt(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function xt(e, t, n, r, i) {
            var o, a = [], s = 0, l = e.length, u = null != t;
            for (; l > s; s++)
                (o = e[s]) && (!n || n(o, r, i)) && (a.push(o),
                u && t.push(s));
            return a
        }
        function wt(e, t, n, r, i, o) {
            return r && !r[b] && (r = wt(r)),
            i && !i[b] && (i = wt(i, o)),
            lt(function(o, a, s, l) {
                var u, c, p, f = [], d = [], h = a.length, g = o || Nt(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : xt(g, f, e, s, l), y = n ? i || (o ? e : h || r) ? [] : a : m;
                if (n && n(m, y, s, l),
                r) {
                    u = xt(y, d),
                    r(u, [], s, l),
                    c = u.length;
                    while (c--)
                        (p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            u = [],
                            c = y.length;
                            while (c--)
                                (p = y[c]) && u.push(m[c] = p);
                            i(null, y = [], u, l)
                        }
                        c = y.length;
                        while (c--)
                            (p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
                    }
                } else
                    y = xt(y === a ? y.splice(h, y.length) : y),
                    i ? i(null, a, y, l) : M.apply(a, y)
            })
        }
        function Tt(e) {
            var t, n, r, i = e.length, a = o.relative[e[0].type], s = a || o.relative[" "], l = a ? 1 : 0, c = vt(function(e) {
                return e === t
            }, s, !0), p = vt(function(e) {
                return F.call(t, e) > -1
            }, s, !0), f = [function(e, n, r) {
                return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
            }
            ];
            for (; i > l; l++)
                if (n = o.relative[e[l].type])
                    f = [vt(bt(f), n)];
                else {
                    if (n = o.filter[e[l].type].apply(null, e[l].matches),
                    n[b]) {
                        for (r = ++l; i > r; r++)
                            if (o.relative[e[r].type])
                                break;
                        return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e))
                    }
                    f.push(n)
                }
            return bt(f)
        }
        function Ct(e, t) {
            var n = 0
              , r = t.length > 0
              , a = e.length > 0
              , s = function(s, l, c, p, d) {
                var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, C = u, N = s || a && o.find.TAG("*", d && l.parentNode || l), k = T += null == C ? 1 : Math.random() || .1;
                for (w && (u = l !== f && l,
                i = n); null != (h = N[b]); b++) {
                    if (a && h) {
                        g = 0;
                        while (m = e[g++])
                            if (m(h, l, c)) {
                                p.push(h);
                                break
                            }
                        w && (T = k,
                        i = ++n)
                    }
                    r && ((h = !m && h) && v--,
                    s && x.push(h))
                }
                if (v += b,
                r && b !== v) {
                    g = 0;
                    while (m = t[g++])
                        m(x, y, l, c);
                    if (s) {
                        if (v > 0)
                            while (b--)
                                x[b] || y[b] || (y[b] = q.call(p));
                        y = xt(y)
                    }
                    M.apply(p, y),
                    w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
                }
                return w && (T = k,
                u = C),
                x
            };
            return r ? lt(s) : s
        }
        l = at.compile = function(e, t) {
            var n, r = [], i = [], o = E[e + " "];
            if (!o) {
                t || (t = mt(e)),
                n = t.length;
                while (n--)
                    o = Tt(t[n]),
                    o[b] ? r.push(o) : i.push(o);
                o = E(e, Ct(i, r))
            }
            return o
        }
        ;
        function Nt(e, t, n) {
            var r = 0
              , i = t.length;
            for (; i > r; r++)
                at(e, t[r], n);
            return n
        }
        function kt(e, t, n, i) {
            var a, s, u, c, p, f = mt(e);
            if (!i && 1 === f.length) {
                if (s = f[0] = f[0].slice(0),
                s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
                    if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0],
                    !t)
                        return n;
                    e = e.slice(s.shift().value.length)
                }
                a = Q.needsContext.test(e) ? 0 : s.length;
                while (a--) {
                    if (u = s[a],
                    o.relative[c = u.type])
                        break;
                    if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
                        if (s.splice(a, 1),
                        e = i.length && yt(s),
                        !e)
                            return M.apply(n, i),
                            n;
                        break
                    }
                }
            }
            return l(e, f)(i, t, !h, n, V.test(e)),
            n
        }
        r.sortStable = b.split("").sort(A).join("") === b,
        r.detectDuplicates = S,
        p(),
        r.sortDetached = ut(function(e) {
            return 1 & e.compareDocumentPosition(f.createElement("div"))
        }),
        ut(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || ct("type|href|height|width", function(e, n, r) {
            return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
        }),
        r.attributes && ut(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || ct("value", function(e, n, r) {
            return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
        }),
        ut(function(e) {
            return null == e.getAttribute("disabled")
        }) || ct(B, function(e, n, r) {
            var i;
            return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
        }),
        x.find = at,
        x.expr = at.selectors,
        x.expr[":"] = x.expr.pseudos,
        x.unique = at.uniqueSort,
        x.text = at.getText,
        x.isXMLDoc = at.isXML,
        x.contains = at.contains
    }(e);
    var O = {};
    function F(e) {
        var t = O[e] = {};
        return x.each(e.match(T) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    x.Callbacks = function(e) {
        e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
        var n, r, i, o, a, s, l = [], u = !e.once && [], c = function(t) {
            for (r = e.memory && t,
            i = !0,
            a = s || 0,
            s = 0,
            o = l.length,
            n = !0; l && o > a; a++)
                if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                    r = !1;
                    break
                }
            n = !1,
            l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
        }, p = {
            add: function() {
                if (l) {
                    var t = l.length;
                    (function i(t) {
                        x.each(t, function(t, n) {
                            var r = x.type(n);
                            "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                        })
                    }
                    )(arguments),
                    n ? o = l.length : r && (s = t,
                    c(r))
                }
                return this
            },
            remove: function() {
                return l && x.each(arguments, function(e, t) {
                    var r;
                    while ((r = x.inArray(t, l, r)) > -1)
                        l.splice(r, 1),
                        n && (o >= r && o--,
                        a >= r && a--)
                }),
                this
            },
            has: function(e) {
                return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
            },
            empty: function() {
                return l = [],
                o = 0,
                this
            },
            disable: function() {
                return l = u = r = t,
                this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return u = t,
                r || p.disable(),
                this
            },
            locked: function() {
                return !u
            },
            fireWith: function(e, t) {
                return !l || i && !u || (t = t || [],
                t = [e, t.slice ? t.slice() : t],
                n ? u.push(t) : c(t)),
                this
            },
            fire: function() {
                return p.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return p
    }
    ,
    x.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]]
              , n = "pending"
              , r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return x.Deferred(function(n) {
                        x.each(t, function(t, o) {
                            var a = o[0]
                              , s = x.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? x.extend(e, r) : r
                }
            }
              , i = {};
            return r.pipe = r.then,
            x.each(t, function(e, o) {
                var a = o[2]
                  , s = o[3];
                r[o[1]] = a.add,
                s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments),
                    this
                }
                ,
                i[o[0] + "With"] = a.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t = 0, n = g.call(arguments), r = n.length, i = 1 !== r || e && x.isFunction(e.promise) ? r : 0, o = 1 === i ? e : x.Deferred(), a = function(e, t, n) {
                return function(r) {
                    t[e] = this,
                    n[e] = arguments.length > 1 ? g.call(arguments) : r,
                    n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                }
            }, s, l, u;
            if (r > 1)
                for (s = Array(r),
                l = Array(r),
                u = Array(r); r > t; t++)
                    n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
            return i || o.resolveWith(u, n),
            o.promise()
        }
    }),
    x.support = function(t) {
        var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
        if (d.setAttribute("className", "t"),
        d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        n = d.getElementsByTagName("*") || [],
        r = d.getElementsByTagName("a")[0],
        !r || !r.style || !n.length)
            return t;
        s = a.createElement("select"),
        u = s.appendChild(a.createElement("option")),
        o = d.getElementsByTagName("input")[0],
        r.style.cssText = "top:1px;float:left;opacity:.5",
        t.getSetAttribute = "t" !== d.className,
        t.leadingWhitespace = 3 === d.firstChild.nodeType,
        t.tbody = !d.getElementsByTagName("tbody").length,
        t.htmlSerialize = !!d.getElementsByTagName("link").length,
        t.style = /top/.test(r.getAttribute("style")),
        t.hrefNormalized = "/a" === r.getAttribute("href"),
        t.opacity = /^0.5/.test(r.style.opacity),
        t.cssFloat = !!r.style.cssFloat,
        t.checkOn = !!o.value,
        t.optSelected = u.selected,
        t.enctype = !!a.createElement("form").enctype,
        t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML,
        t.inlineBlockNeedsLayout = !1,
        t.shrinkWrapBlocks = !1,
        t.pixelPosition = !1,
        t.deleteExpando = !0,
        t.noCloneEvent = !0,
        t.reliableMarginRight = !0,
        t.boxSizingReliable = !0,
        o.checked = !0,
        t.noCloneChecked = o.cloneNode(!0).checked,
        s.disabled = !0,
        t.optDisabled = !u.disabled;
        try {
            delete d.test
        } catch (h) {
            t.deleteExpando = !1
        }
        o = a.createElement("input"),
        o.setAttribute("value", ""),
        t.input = "" === o.getAttribute("value"),
        o.value = "t",
        o.setAttribute("type", "radio"),
        t.radioValue = "t" === o.value,
        o.setAttribute("checked", "t"),
        o.setAttribute("name", "t"),
        l = a.createDocumentFragment(),
        l.appendChild(o),
        t.appendChecked = o.checked,
        t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked,
        d.attachEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }),
        d.cloneNode(!0).click());
        for (f in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            d.setAttribute(c = "on" + f, "t"),
            t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
        d.style.backgroundClip = "content-box",
        d.cloneNode(!0).style.backgroundClip = "",
        t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (f in x(t))
            break;
        return t.ownLast = "0" !== f,
        x(function() {
            var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", l = a.getElementsByTagName("body")[0];
            l && (n = a.createElement("div"),
            n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
            l.appendChild(n).appendChild(d),
            d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            o = d.getElementsByTagName("td"),
            o[0].style.cssText = "padding:0;margin:0;border:0;display:none",
            p = 0 === o[0].offsetHeight,
            o[0].style.display = "",
            o[1].style.display = "none",
            t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight,
            d.innerHTML = "",
            d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
            x.swap(l, null != l.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === d.offsetWidth
            }),
            e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top,
            t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width,
            r = d.appendChild(a.createElement("div")),
            r.style.cssText = d.style.cssText = s,
            r.style.marginRight = r.style.width = "0",
            d.style.width = "1px",
            t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)),
            typeof d.style.zoom !== i && (d.innerHTML = "",
            d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1",
            t.inlineBlockNeedsLayout = 3 === d.offsetWidth,
            d.style.display = "block",
            d.innerHTML = "<div></div>",
            d.firstChild.style.width = "5px",
            t.shrinkWrapBlocks = 3 !== d.offsetWidth,
            t.inlineBlockNeedsLayout && (l.style.zoom = 1)),
            l.removeChild(n),
            n = d = o = r = null)
        }),
        n = s = l = u = r = o = null,
        t
    }({});
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/
      , P = /([A-Z])/g;
    function R(e, n, r, i) {
        if (x.acceptData(e)) {
            var o, a, s = x.expando, l = e.nodeType, u = l ? x.cache : e, c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n)
                return c || (c = l ? e[s] = p.pop() || x.guid++ : s),
                u[c] || (u[c] = l ? {} : {
                    toJSON: x.noop
                }),
                ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)),
                a = u[c],
                i || (a.data || (a.data = {}),
                a = a.data),
                r !== t && (a[x.camelCase(n)] = r),
                "string" == typeof n ? (o = a[n],
                null == o && (o = a[x.camelCase(n)])) : o = a,
                o
        }
    }
    function W(e, t, n) {
        if (x.acceptData(e)) {
            var r, i, o = e.nodeType, a = o ? x.cache : e, s = o ? e[x.expando] : x.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t),
                    t = t in r ? [t] : t.split(" ")),
                    i = t.length;
                    while (i--)
                        delete r[t[i]];
                    if (n ? !I(r) : !x.isEmptyObject(r))
                        return
                }
                (n || (delete a[s].data,
                I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }
    x.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando],
            !!e && !I(e)
        },
        data: function(e, t, n) {
            return R(e, t, n)
        },
        removeData: function(e, t) {
            return W(e, t)
        },
        _data: function(e, t, n) {
            return R(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return W(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType)
                return !1;
            var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }),
    x.fn.extend({
        data: function(e, n) {
            var r, i, o = null, a = 0, s = this[0];
            if (e === t) {
                if (this.length && (o = x.data(s),
                1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
                    for (r = s.attributes; r.length > a; a++)
                        i = r[a].name,
                        0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)),
                        $(s, i, o[i]));
                    x._data(s, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                x.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                x.data(this, e, n)
            }) : s ? $(s, e, x.data(s, e)) : null
        },
        removeData: function(e) {
            return this.each(function() {
                x.removeData(this, e)
            })
        }
    });
    function $(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            if (r = e.getAttribute(i),
            "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
                } catch (o) {}
                x.data(e, n, r)
            } else
                r = t
        }
        return r
    }
    function I(e) {
        var t;
        for (t in e)
            if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    x.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue",
            i = x._data(e, n),
            r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)),
            i || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = x._queueHooks(e, t)
              , a = function() {
                x.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return x._data(e, n) || x._data(e, n, {
                empty: x.Callbacks("once memory").add(function() {
                    x._removeData(e, t + "queue"),
                    x._removeData(e, n)
                })
            })
        }
    }),
    x.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e,
            e = "fx",
            r--),
            r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = x.queue(this, e, n);
                x._queueHooks(this, e),
                "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                x.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = x.fx ? x.fx.speeds[e] || e : e,
            t = t || "fx",
            this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1, o = x.Deferred(), a = this, s = this.length, l = function() {
                --i || o.resolveWith(a, [a])
            };
            "string" != typeof e && (n = e,
            e = t),
            e = e || "fx";
            while (s--)
                r = x._data(a[s], e + "queueHooks"),
                r && r.empty && (i++,
                r.empty.add(l));
            return l(),
            o.promise(n)
        }
    });
    var z, X, U = /[\t\r\n\f]/g, V = /\r/g, Y = /^(?:input|select|textarea|button|object)$/i, J = /^(?:a|area)$/i, G = /^(?:checked|selected)$/i, Q = x.support.getSetAttribute, K = x.support.input;
    x.fn.extend({
        attr: function(e, t) {
            return x.access(this, x.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                x.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return x.access(this, x.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = x.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = t,
                    delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0, s = this.length, l = "string" == typeof e && e;
            if (x.isFunction(e))
                return this.each(function(t) {
                    x(this).addClass(e.call(this, t, this.className))
                });
            if (l)
                for (t = (e || "").match(T) || []; s > a; a++)
                    if (n = this[a],
                    r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
                        o = 0;
                        while (i = t[o++])
                            0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = x.trim(r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0, s = this.length, l = 0 === arguments.length || "string" == typeof e && e;
            if (x.isFunction(e))
                return this.each(function(t) {
                    x(this).removeClass(e.call(this, t, this.className))
                });
            if (l)
                for (t = (e || "").match(T) || []; s > a; a++)
                    if (n = this[a],
                    r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
                        o = 0;
                        while (i = t[o++])
                            while (r.indexOf(" " + i + " ") >= 0)
                                r = r.replace(" " + i + " ", " ");
                        n.className = e ? x.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function(n) {
                x(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n) {
                    var t, r = 0, o = x(this), a = e.match(T) || [];
                    while (t = a[r++])
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else
                    (n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className),
                    this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            var t = " " + e + " "
              , n = 0
              , r = this.length;
            for (; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0];
            {
                if (arguments.length)
                    return i = x.isFunction(e),
                    this.each(function(n) {
                        var o;
                        1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e,
                        null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function(e) {
                            return null == e ? "" : e + ""
                        })),
                        r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()],
                        r && "set"in r && r.set(this, o, "value") !== t || (this.value = o))
                    });
                if (o)
                    return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()],
                    r && "get"in r && (n = r.get(o, "value")) !== t ? n : (n = o.value,
                    "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
            }
        }
    }),
    x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0;
                    for (; s > l; l++)
                        if (n = r[l],
                        !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                            if (t = x(n).val(),
                            o)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = x.makeArray(t), a = i.length;
                    while (a--)
                        r = i[a],
                        (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        },
        attr: function(e, n, r) {
            var o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)
                return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(),
                o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)),
                r === t ? o && "get"in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n),
                null == a ? t : a) : null !== r ? o && "set"in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""),
                r) : (x.removeAttr(e, n),
                t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(T);
            if (o && 1 === e.nodeType)
                while (n = o[i++])
                    r = x.propFix[n] || n,
                    x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""),
                    e.removeAttribute(Q ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)
                return a = 1 !== s || !x.isXMLDoc(e),
                a && (n = x.propFix[n] || n,
                o = x.propHooks[n]),
                r !== t ? o && "set"in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get"in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }),
    X = {
        set: function(e, t, n) {
            return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    x.each(x.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var r = x.expr.attrHandle[n] || x.find.attr;
        x.expr.attrHandle[n] = K && Q || !G.test(n) ? function(e, n, i) {
            var o = x.expr.attrHandle[n]
              , a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return x.expr.attrHandle[n] = o,
            a
        }
        : function(e, n, r) {
            return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }),
    K && Q || (x.attrHooks.value = {
        set: function(e, n, r) {
            return x.nodeName(e, "input") ? (e.defaultValue = n,
            t) : z && z.set(e, n, r)
        }
    }),
    Q || (z = {
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)),
            i.value = n += "",
            "value" === r || n === e.getAttribute(r) ? n : t
        }
    },
    x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function(e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }
    ,
    x.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        },
        set: z.set
    },
    x.attrHooks.contenteditable = {
        set: function(e, t, n) {
            z.set(e, "" === t ? !1 : t, n)
        }
    },
    x.each(["width", "height"], function(e, n) {
        x.attrHooks[n] = {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"),
                r) : t
            }
        }
    })),
    x.support.hrefNormalized || x.each(["href", "src"], function(e, t) {
        x.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    x.support.style || (x.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }),
    x.support.optSelected || (x.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        }
    }),
    x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        x.propFix[this.toLowerCase()] = this
    }),
    x.support.enctype || (x.propFix.enctype = "encoding"),
    x.each(["radio", "checkbox"], function() {
        x.valHooks[this] = {
            set: function(e, n) {
                return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
            }
        },
        x.support.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var Z = /^(?:input|select|textarea)$/i
      , et = /^key/
      , tt = /^(?:mouse|contextmenu)|click/
      , nt = /^(?:focusinfocus|focusoutblur)$/
      , rt = /^([^.]*)(?:\.(.+)|)$/;
    function it() {
        return !0
    }
    function ot() {
        return !1
    }
    function at() {
        try {
            return a.activeElement
        } catch (e) {}
    }
    x.event = {
        global: {},
        add: function(e, n, r, o, a) {
            var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
            if (v) {
                r.handler && (c = r,
                r = c.handler,
                a = c.selector),
                r.guid || (r.guid = x.guid++),
                (l = v.events) || (l = v.events = {}),
                (f = v.handle) || (f = v.handle = function(e) {
                    return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
                }
                ,
                f.elem = e),
                n = (n || "").match(T) || [""],
                u = n.length;
                while (u--)
                    s = rt.exec(n[u]) || [],
                    g = y = s[1],
                    m = (s[2] || "").split(".").sort(),
                    g && (p = x.event.special[g] || {},
                    g = (a ? p.delegateType : p.bindType) || g,
                    p = x.event.special[g] || {},
                    d = x.extend({
                        type: g,
                        origType: y,
                        data: o,
                        handler: r,
                        guid: r.guid,
                        selector: a,
                        needsContext: a && x.expr.match.needsContext.test(a),
                        namespace: m.join(".")
                    }, c),
                    (h = l[g]) || (h = l[g] = [],
                    h.delegateCount = 0,
                    p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))),
                    p.add && (p.add.call(e, d),
                    d.handler.guid || (d.handler.guid = r.guid)),
                    a ? h.splice(h.delegateCount++, 0, d) : h.push(d),
                    x.event.global[g] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
            if (m && (c = m.events)) {
                t = (t || "").match(T) || [""],
                u = t.length;
                while (u--)
                    if (s = rt.exec(t[u]) || [],
                    d = g = s[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        p = x.event.special[d] || {},
                        d = (r ? p.delegateType : p.bindType) || d,
                        f = c[d] || [],
                        s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        l = o = f.length;
                        while (o--)
                            a = f[o],
                            !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1),
                            a.selector && f.delegateCount--,
                            p.remove && p.remove.call(e, a));
                        l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle),
                        delete c[d])
                    } else
                        for (d in c)
                            x.event.remove(e, d + t[u], n, r, !0);
                x.isEmptyObject(c) && (delete m.handle,
                x._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, o) {
            var s, l, u, c, p, f, d, h = [i || a], g = v.call(n, "type") ? n.type : n, m = v.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || a,
            3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."),
            g = m.shift(),
            m.sort()),
            l = 0 > g.indexOf(":") && "on" + g,
            n = n[x.expando] ? n : new x.Event(g,"object" == typeof n && n),
            n.isTrigger = o ? 2 : 3,
            n.namespace = m.join("."),
            n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            n.result = t,
            n.target || (n.target = i),
            r = null == r ? [n] : x.makeArray(r, [n]),
            p = x.event.special[g] || {},
            o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!o && !p.noBubble && !x.isWindow(i)) {
                    for (c = p.delegateType || g,
                    nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode)
                        h.push(u),
                        f = u;
                    f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
                }
                d = 0;
                while ((u = h[d++]) && !n.isPropagationStopped())
                    n.type = d > 1 ? c : p.bindType || g,
                    s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"),
                    s && s.apply(u, r),
                    s = l && u[l],
                    s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
                if (n.type = g,
                !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
                    f = i[l],
                    f && (i[l] = null),
                    x.event.triggered = g;
                    try {
                        i[g]()
                    } catch (y) {}
                    x.event.triggered = t,
                    f && (i[l] = f)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = x.event.fix(e);
            var n, r, i, o, a, s = [], l = g.call(arguments), u = (x._data(this, "events") || {})[e.type] || [], c = x.event.special[e.type] || {};
            if (l[0] = e,
            e.delegateTarget = this,
            !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                s = x.event.handlers.call(this, e, u),
                n = 0;
                while ((o = s[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = o.elem,
                    a = 0;
                    while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())
                        (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i,
                        e.data = i.data,
                        r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l),
                        r !== t && (e.result = r) === !1 && (e.preventDefault(),
                        e.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [], l = n.delegateCount, u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (o = [],
                        a = 0; l > a; a++)
                            i = n[a],
                            r = i.selector + " ",
                            o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length),
                            o[r] && o.push(i);
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return n.length > l && s.push({
                elem: this,
                handlers: n.slice(l)
            }),
            s
        },
        fix: function(e) {
            if (e[x.expando])
                return e;
            var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}),
            r = s.props ? this.props.concat(s.props) : this.props,
            e = new x.Event(o),
            t = r.length;
            while (t--)
                n = r[t],
                e[n] = o[n];
            return e.target || (e.target = o.srcElement || a),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, s = n.button, l = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a,
                o = i.documentElement,
                r = i.body,
                e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0),
                e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)),
                !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l),
                e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== at() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === at() && this.blur ? (this.blur(),
                    !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : t
                },
                _default: function(e) {
                    return x.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = x.extend(new x.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    x.removeEvent = a.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
    : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null),
        e.detachEvent(r, n))
    }
    ,
    x.Event = function(e, n) {
        return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e,
        n && x.extend(this, n),
        this.timeStamp = e && e.timeStamp || x.now(),
        this[x.expando] = !0,
        t) : new x.Event(e,n)
    }
    ,
    x.Event.prototype = {
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = it,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = it,
            e && (e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = it,
            this.stopPropagation()
        }
    },
    x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    x.support.submitBubbles || (x.event.special.submit = {
        setup: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target
                  , r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
                r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }),
                x._data(r, "submitBubbles", !0))
            }),
            t)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble,
            this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"),
            t)
        }
    }),
    x.support.changeBubbles || (x.event.special.change = {
        setup: function() {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }),
            x.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                x.event.simulate("change", this, e, !0)
            })),
            !1) : (x.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
                }),
                x._data(t, "changeBubbles", !0))
            }),
            t)
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return x.event.remove(this, "._change"),
            !Z.test(this.nodeName)
        }
    }),
    x.support.focusinBubbles || x.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0
          , r = function(e) {
            x.event.simulate(t, e.target, x.event.fix(e), !0)
        };
        x.event.special[t] = {
            setup: function() {
                0 === n++ && a.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 === --n && a.removeEventListener(e, r, !0)
            }
        }
    }),
    x.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n,
                n = t);
                for (a in e)
                    this.on(a, n, r, e[a], o);
                return this
            }
            if (null == r && null == i ? (i = n,
            r = n = t) : null == i && ("string" == typeof n ? (i = r,
            r = t) : (i = r,
            r = n,
            n = t)),
            i === !1)
                i = ot;
            else if (!i)
                return this;
            return 1 === o && (s = i,
            i = function(e) {
                return x().off(e),
                s.apply(this, arguments)
            }
            ,
            i.guid = s.guid || (s.guid = x.guid++)),
            this.each(function() {
                x.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == typeof e) {
                for (o in e)
                    this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n,
            n = t),
            r === !1 && (r = ot),
            this.each(function() {
                x.event.remove(this, e, r, n)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                x.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? x.event.trigger(e, n, r, !0) : t
        }
    });
    var st = /^.[^:#\[\.,]*$/
      , lt = /^(?:parents|prev(?:Until|All))/
      , ut = x.expr.match.needsContext
      , ct = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    x.fn.extend({
        find: function(e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e)
                return this.pushStack(x(e).filter(function() {
                    for (t = 0; i > t; t++)
                        if (x.contains(r[t], this))
                            return !0
                }));
            for (t = 0; i > t; t++)
                x.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? x.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + e : e,
            n
        },
        has: function(e) {
            var t, n = x(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (x.contains(this, n[t]))
                        return !0
            })
        },
        not: function(e) {
            return this.pushStack(ft(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(ft(this, e || [], !1))
        },
        is: function(e) {
            return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
            for (; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? x.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e)
              , r = x.merge(this.get(), n);
            return this.pushStack(x.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });
    function pt(e, t) {
        do
            e = e[t];
        while (e && 1 !== e.nodeType);return e
    }
    x.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return x.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return x.dir(e, "parentNode", n)
        },
        next: function(e) {
            return pt(e, "nextSibling")
        },
        prev: function(e) {
            return pt(e, "previousSibling")
        },
        nextAll: function(e) {
            return x.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return x.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return x.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return x.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return x.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return x.sibling(e.firstChild)
        },
        contents: function(e) {
            return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
        }
    }, function(e, t) {
        x.fn[e] = function(n, r) {
            var i = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = x.filter(r, i)),
            this.length > 1 && (ct[e] || (i = x.unique(i)),
            lt.test(e) && (i = i.reverse())),
            this.pushStack(i)
        }
    }),
    x.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        },
        dir: function(e, n, r) {
            var i = []
              , o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r)))
                1 === o.nodeType && i.push(o),
                o = o[n];
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    function ft(e, t, n) {
        if (x.isFunction(t))
            return x.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
        if (t.nodeType)
            return x.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (st.test(t))
                return x.filter(t, e, n);
            t = x.filter(t, e)
        }
        return x.grep(e, function(e) {
            return x.inArray(e, t) >= 0 !== n
        })
    }
    function dt(e) {
        var t = ht.split("|")
          , n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length)
                n.createElement(t.pop());
        return n
    }
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , gt = / jQuery\d+="(?:null|\d+)"/g
      , mt = RegExp("<(?:" + ht + ")[\\s/>]", "i")
      , yt = /^\s+/
      , vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , bt = /<([\w:]+)/
      , xt = /<tbody/i
      , wt = /<|&#?\w+;/
      , Tt = /<(?:script|style|link)/i
      , Ct = /^(?:checkbox|radio)$/i
      , Nt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , kt = /^$|\/(?:java|ecma)script/i
      , Et = /^true\/(.*)/
      , St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , At = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , jt = dt(a)
      , Dt = jt.appendChild(a.createElement("div"));
    At.optgroup = At.option,
    At.tbody = At.tfoot = At.colgroup = At.caption = At.thead,
    At.th = At.td,
    x.fn.extend({
        text: function(e) {
            return x.access(this, function(e) {
                return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            var n, r = e ? x.filter(e, this) : this, i = 0;
            for (; null != (n = r[i]); i++)
                t || 1 !== n.nodeType || x.cleanData(Ft(n)),
                n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")),
                n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && x.cleanData(Ft(e, !1));
                while (e.firstChild)
                    e.removeChild(e.firstChild);
                e.options && x.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e : t,
            this.map(function() {
                return x.clone(this, e, t)
            })
        },
        html: function(e) {
            return x.access(this, function(e) {
                var n = this[0] || {}
                  , r = 0
                  , i = this.length;
                if (e === t)
                    return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
                if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (; i > r; r++)
                            n = this[r] || {},
                            1 === n.nodeType && (x.cleanData(Ft(n, !1)),
                            n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = x.map(this, function(e) {
                return [e.nextSibling, e.parentNode]
            })
              , t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++]
                  , i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling),
                x(this).remove(),
                i.insertBefore(n, r))
            }, !0),
            t ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t, n) {
            e = d.apply([], e);
            var r, i, o, a, s, l, u = 0, c = this.length, p = this, f = c - 1, h = e[0], g = x.isFunction(h);
            if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h))
                return this.each(function(r) {
                    var i = p.eq(r);
                    g && (e[0] = h.call(this, r, i.html())),
                    i.domManip(e, t, n)
                });
            if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this),
            r = l.firstChild,
            1 === l.childNodes.length && (l = r),
            r)) {
                for (a = x.map(Ft(l, "script"), Ht),
                o = a.length; c > u; u++)
                    i = l,
                    u !== f && (i = x.clone(i, !0, !0),
                    o && x.merge(a, Ft(i, "script"))),
                    t.call(this[u], i, u);
                if (o)
                    for (s = a[a.length - 1].ownerDocument,
                    x.map(a, qt),
                    u = 0; o > u; u++)
                        i = a[u],
                        kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
                l = r = null
            }
            return this
        }
    });
    function Lt(e, t) {
        return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function Ht(e) {
        return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type,
        e
    }
    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function _t(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++)
            x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
    }
    function Mt(e, t) {
        if (1 === t.nodeType && x.hasData(e)) {
            var n, r, i, o = x._data(e), a = x._data(t, o), s = o.events;
            if (s) {
                delete a.handle,
                a.events = {};
                for (n in s)
                    for (r = 0,
                    i = s[n].length; i > r; r++)
                        x.event.add(t, n, s[n][r])
            }
            a.data && (a.data = x.extend({}, a.data))
        }
    }
    function Ot(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(),
            !x.support.noCloneEvent && t[x.expando]) {
                i = x._data(t);
                for (r in i.events)
                    x.removeEvent(t, r, i.handle);
                t.removeAttribute(x.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text,
            qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
            x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        x.fn[e] = function(e) {
            var n, r = 0, i = [], o = x(e), a = o.length - 1;
            for (; a >= r; r++)
                n = r === a ? this : this.clone(!0),
                x(o[r])[t](n),
                h.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    function Ft(e, n) {
        var r, o, a = 0, s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s)
            for (s = [],
            r = e.childNodes || e; null != (o = r[a]); a++)
                !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
        return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
    }
    function Bt(e) {
        Ct.test(e.type) && (e.defaultChecked = e.checked)
    }
    x.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
            if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML,
            Dt.removeChild(o = Dt.firstChild)),
            !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for (r = Ft(o),
                s = Ft(e),
                a = 0; null != (i = s[a]); ++a)
                    r[a] && Ot(i, r[a]);
            if (t)
                if (n)
                    for (s = s || Ft(e),
                    r = r || Ft(o),
                    a = 0; null != (i = s[a]); a++)
                        Mt(i, r[a]);
                else
                    Mt(e, o);
            return r = Ft(o, "script"),
            r.length > 0 && _t(r, !l && Ft(e, "script")),
            r = s = i = null,
            o
        },
        buildFragment: function(e, t, n, r) {
            var i, o, a, s, l, u, c, p = e.length, f = dt(t), d = [], h = 0;
            for (; p > h; h++)
                if (o = e[h],
                o || 0 === o)
                    if ("object" === x.type(o))
                        x.merge(d, o.nodeType ? [o] : o);
                    else if (wt.test(o)) {
                        s = s || f.appendChild(t.createElement("div")),
                        l = (bt.exec(o) || ["", ""])[1].toLowerCase(),
                        c = At[l] || At._default,
                        s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2],
                        i = c[0];
                        while (i--)
                            s = s.lastChild;
                        if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])),
                        !x.support.tbody) {
                            o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild,
                            i = o && o.childNodes.length;
                            while (i--)
                                x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
                        }
                        x.merge(d, s.childNodes),
                        s.textContent = "";
                        while (s.firstChild)
                            s.removeChild(s.firstChild);
                        s = f.lastChild
                    } else
                        d.push(t.createTextNode(o));
            s && f.removeChild(s),
            x.support.appendChecked || x.grep(Ft(d, "input"), Bt),
            h = 0;
            while (o = d[h++])
                if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o),
                s = Ft(f.appendChild(o), "script"),
                a && _t(s),
                n)) {
                    i = 0;
                    while (o = s[i++])
                        kt.test(o.type || "") && n.push(o)
                }
            return s = null,
            f
        },
        cleanData: function(e, t) {
            var n, r, o, a, s = 0, l = x.expando, u = x.cache, c = x.support.deleteExpando, f = x.event.special;
            for (; null != (n = e[s]); s++)
                if ((t || x.acceptData(n)) && (o = n[l],
                a = o && u[o])) {
                    if (a.events)
                        for (r in a.events)
                            f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
                    u[o] && (delete u[o],
                    c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null,
                    p.push(o))
                }
        },
        _evalUrl: function(e) {
            return x.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }),
    x.fn.extend({
        wrapAll: function(e) {
            if (x.isFunction(e))
                return this.each(function(t) {
                    x(this).wrapAll(e.call(this, t))
                });
            if (this[0]) {
                var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType)
                        e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return x.isFunction(e) ? this.each(function(t) {
                x(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = x(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = x.isFunction(e);
            return this.each(function(n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + w + ")(.*)$", "i"), Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + w + ")", "i"), Gt = {
        BODY: "block"
    }, Qt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Kt = {
        letterSpacing: 0,
        fontWeight: 400
    }, Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"];
    function tn(e, t) {
        if (t in e)
            return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1)
          , r = t
          , i = en.length;
        while (i--)
            if (t = en[i] + n,
            t in e)
                return t;
        return r
    }
    function nn(e, t) {
        return e = t || e,
        "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
    }
    function rn(e, t) {
        var n, r, i, o = [], a = 0, s = e.length;
        for (; s > a; a++)
            r = e[a],
            r.style && (o[a] = x._data(r, "olddisplay"),
            n = r.style.display,
            t ? (o[a] || "none" !== n || (r.style.display = ""),
            "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r),
            (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
        for (a = 0; s > a; a++)
            r = e[a],
            r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    x.fn.extend({
        css: function(e, n) {
            return x.access(this, function(e, n, r) {
                var i, o, a = {}, s = 0;
                if (x.isArray(n)) {
                    for (o = Rt(e),
                    i = n.length; i > s; s++)
                        a[n[s]] = x.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? x.style(e, n, r) : x.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return rn(this, !0)
        },
        hide: function() {
            return rn(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                nn(this) ? x(this).show() : x(this).hide()
            })
        }
    }),
    x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
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
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": x.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = x.camelCase(n), u = e.style;
                if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)),
                s = x.cssHooks[n] || x.cssHooks[l],
                r === t)
                    return s && "get"in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
                if (a = typeof r,
                "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)),
                a = "number"),
                !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"),
                x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"),
                s && "set"in s && (r = s.set(e, r, i)) === t)))
                    try {
                        u[n] = r
                    } catch (c) {}
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, l = x.camelCase(n);
            return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)),
            s = x.cssHooks[n] || x.cssHooks[l],
            s && "get"in s && (a = s.get(e, !0, r)),
            a === t && (a = Wt(e, n, i)),
            "normal" === a && n in Kt && (a = Kt[n]),
            "" === r || r ? (o = parseFloat(a),
            r === !0 || x.isNumeric(o) ? o || 0 : a) : a
        }
    }),
    e.getComputedStyle ? (Rt = function(t) {
        return e.getComputedStyle(t, null)
    }
    ,
    Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e), l = s ? s.getPropertyValue(n) || s[n] : t, u = e.style;
        return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)),
        Yt.test(l) && Ut.test(n) && (i = u.width,
        o = u.minWidth,
        a = u.maxWidth,
        u.minWidth = u.maxWidth = u.width = l,
        l = s.width,
        u.width = i,
        u.minWidth = o,
        u.maxWidth = a)),
        l
    }
    ) : a.documentElement.currentStyle && (Rt = function(e) {
        return e.currentStyle
    }
    ,
    Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e), l = s ? s[n] : t, u = e.style;
        return null == l && u && u[n] && (l = u[n]),
        Yt.test(l) && !zt.test(n) && (i = u.left,
        o = e.runtimeStyle,
        a = o && o.left,
        a && (o.left = e.currentStyle.left),
        u.left = "fontSize" === n ? "1em" : l,
        l = u.pixelLeft + "px",
        u.left = i,
        a && (o.left = a)),
        "" === l ? "auto" : l
    }
    );
    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0
          , a = 0;
        for (; 4 > o; o += 2)
            "margin" === n && (a += x.css(e, n + Zt[o], !0, i)),
            r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)),
            "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i),
            "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
        return a
    }
    function sn(e, t, n) {
        var r = !0
          , i = "width" === t ? e.offsetWidth : e.offsetHeight
          , o = Rt(e)
          , a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o),
            (0 > i || null == i) && (i = e.style[t]),
            Yt.test(i))
                return i;
            r = a && (x.support.boxSizingReliable || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }
    function ln(e) {
        var t = a
          , n = Gt[e];
        return n || (n = un(e, t),
        "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement),
        t = (Pt[0].contentWindow || Pt[0].contentDocument).document,
        t.write("<!doctype html><html><body>"),
        t.close(),
        n = un(e, t),
        Pt.detach()),
        Gt[e] = n),
        n
    }
    function un(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body)
          , r = x.css(n[0], "display");
        return n.remove(),
        r
    }
    x.each(["height", "width"], function(e, n) {
        x.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function() {
                    return sn(e, n, i)
                }) : sn(e, n, i) : t
            },
            set: function(e, t, r) {
                var i = r && Rt(e);
                return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    x.support.opacity || (x.cssHooks.opacity = {
        get: function(e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
              , r = e.currentStyle
              , i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , o = r && r.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
        }
    }),
    x(function() {
        x.support.reliableMarginRight || (x.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? x.swap(e, {
                    display: "inline-block"
                }, Wt, [e, "marginRight"]) : t
            }
        }),
        !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function(e, n) {
            x.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = Wt(e, n),
                    Yt.test(r) ? x(e).position()[n] + "px" : r) : t
                }
            }
        })
    }),
    x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
    }
    ,
    x.expr.filters.visible = function(e) {
        return !x.expr.filters.hidden(e)
    }
    ),
    x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0
                  , i = {}
                  , o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++)
                    i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        Ut.test(e) || (x.cssHooks[e + t].set = on)
    });
    var cn = /%20/g
      , pn = /\[\]$/
      , fn = /\r?\n/g
      , dn = /^(?:submit|button|image|reset|file)$/i
      , hn = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
            }).map(function(e, t) {
                var n = x(this).val();
                return null == n ? null : x.isArray(n) ? x.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(fn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(fn, "\r\n")
                }
            }).get()
        }
    }),
    x.param = function(e, n) {
        var r, i = [], o = function(e, t) {
            t = x.isFunction(t) ? t() : null == t ? "" : t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional),
        x.isArray(e) || e.jquery && !x.isPlainObject(e))
            x.each(e, function() {
                o(this.name, this.value)
            });
        else
            for (r in e)
                gn(r, e[r], n, o);
        return i.join("&").replace(cn, "+")
    }
    ;
    function gn(e, t, n, r) {
        var i;
        if (x.isArray(t))
            x.each(t, function(t, i) {
                n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== x.type(t))
            r(e, t);
        else
            for (i in t)
                gn(e + "[" + i + "]", t[i], n, r)
    }
    x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        x.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    x.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var mn, yn, vn = x.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Nn = /^(?:GET|HEAD)$/, kn = /^\/\//, En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = x.fn.load, An = {}, jn = {}, Dn = "*/".concat("*");
    try {
        yn = o.href
    } catch (Ln) {
        yn = a.createElement("a"),
        yn.href = "",
        yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];
    function Hn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, o = t.toLowerCase().match(T) || [];
            if (x.isFunction(n))
                while (r = o[i++])
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function qn(e, n, r, i) {
        var o = {}
          , a = e === jn;
        function s(l) {
            var u;
            return o[l] = !0,
            x.each(e[l] || [], function(e, l) {
                var c = l(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c),
                s(c),
                !1)
            }),
            u
        }
        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }
    function _n(e, n) {
        var r, i, o = x.ajaxSettings.flatOptions || {};
        for (i in n)
            n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && x.extend(!0, e, r),
        e
    }
    x.fn.load = function(e, n, r) {
        if ("string" != typeof e && Sn)
            return Sn.apply(this, arguments);
        var i, o, a, s = this, l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length),
        e = e.slice(0, l)),
        x.isFunction(n) ? (r = n,
        n = t) : n && "object" == typeof n && (a = "POST"),
        s.length > 0 && x.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments,
            s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        }).complete(r && function(e, t) {
            s.each(r, o || [e.responseText, t, e])
        }
        ),
        this
    }
    ,
    x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yn,
            type: "GET",
            isLocal: Cn.test(mn[1]),
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
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": x.parseJSON,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
        },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function(e, n) {
            "object" == typeof e && (n = e,
            e = t),
            n = n || {};
            var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n), f = p.context || p, d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event, h = x.Deferred(), g = x.Callbacks("once memory"), m = p.statusCode || {}, y = {}, v = {}, b = 0, w = "canceled", C = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === b) {
                        if (!c) {
                            c = {};
                            while (t = Tn.exec(a))
                                c[t[1].toLowerCase()] = t[2]
                        }
                        t = c[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? a : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return b || (e = v[n] = v[n] || e,
                    y[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return b || (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (2 > b)
                            for (t in e)
                                m[t] = [m[t], e[t]];
                        else
                            C.always(e[C.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || w;
                    return u && u.abort(t),
                    k(0, t),
                    this
                }
            };
            if (h.promise(C).complete = g.add,
            C.success = C.done,
            C.error = C.fail,
            p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"),
            p.type = n.method || n.type || p.method || p.type,
            p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""],
            null == p.crossDomain && (r = En.exec(p.url.toLowerCase()),
            p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))),
            p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)),
            qn(An, p, n, C),
            2 === b)
                return C;
            l = p.global,
            l && 0 === x.active++ && x.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !Nn.test(p.type),
            o = p.url,
            p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data,
            delete p.data),
            p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)),
            p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]),
            x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])),
            (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType),
            C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers)
                C.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b))
                return C.abort();
            w = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            })
                C[i](p[i]);
            if (u = qn(jn, p, n, C)) {
                C.readyState = 1,
                l && d.trigger("ajaxSend", [C, p]),
                p.async && p.timeout > 0 && (s = setTimeout(function() {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    b = 1,
                    u.send(y, k)
                } catch (N) {
                    if (!(2 > b))
                        throw N;
                    k(-1, N)
                }
            } else
                k(-1, "No Transport");
            function k(e, n, r, i) {
                var c, y, v, w, T, N = n;
                2 !== b && (b = 2,
                s && clearTimeout(s),
                u = t,
                a = i || "",
                C.readyState = e > 0 ? 4 : 0,
                c = e >= 200 && 300 > e || 304 === e,
                r && (w = Mn(p, C, r)),
                w = On(p, w, C, c),
                c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"),
                T && (x.lastModified[o] = T),
                T = C.getResponseHeader("etag"),
                T && (x.etag[o] = T)),
                204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state,
                y = w.data,
                v = w.error,
                c = !v)) : (v = N,
                (e || !N) && (N = "error",
                0 > e && (e = 0))),
                C.status = e,
                C.statusText = (n || N) + "",
                c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]),
                C.statusCode(m),
                m = t,
                l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]),
                g.fireWith(f, [C, N]),
                l && (d.trigger("ajaxComplete", [C, p]),
                --x.active || x.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function(e, n) {
            return x.get(e, t, n, "script")
        }
    }),
    x.each(["get", "post"], function(e, n) {
        x[n] = function(e, r, i, o) {
            return x.isFunction(r) && (o = o || i,
            i = r,
            r = t),
            x.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    });
    function Mn(e, n, r) {
        var i, o, a, s, l = e.contents, u = e.dataTypes;
        while ("*" === u[0])
            u.shift(),
            o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)
            for (s in l)
                if (l[s] && l[s].test(o)) {
                    u.unshift(s);
                    break
                }
        if (u[0]in r)
            a = u[0];
        else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== u[0] && u.unshift(a),
        r[a]) : t
    }
    function On(e, t, n, r) {
        var i, o, a, s, l, u = {}, c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters)
                u[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            l = o,
            o = c.shift())
                if ("*" === o)
                    o = l;
                else if ("*" !== l && l !== o) {
                    if (a = u[l + " " + o] || u["* " + o],
                    !a)
                        for (i in u)
                            if (s = i.split(" "),
                            s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0],
                                c.unshift(s[1]));
                                break
                            }
                    if (a !== !0)
                        if (a && e["throws"])
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (p) {
                                return {
                                    state: "parsererror",
                                    error: a ? p : "No conversion from " + l + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e),
                e
            }
        }
    }),
    x.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }),
    x.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = a.head || x("head")[0] || a.documentElement;
            return {
                send: function(t, i) {
                    n = a.createElement("script"),
                    n.async = !0,
                    e.scriptCharset && (n.charset = e.scriptCharset),
                    n.src = e.url,
                    n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null,
                        n.parentNode && n.parentNode.removeChild(n),
                        n = null,
                        t || i(200, "success"))
                    }
                    ,
                    r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Fn = []
      , Bn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Fn.pop() || x.expando + "_" + vn++;
            return this[e] = !0,
            e
        }
    }),
    x.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback,
        l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o),
        n.converters["script json"] = function() {
            return s || x.error(o + " was not called"),
            s[0]
        }
        ,
        n.dataTypes[0] = "json",
        a = e[o],
        e[o] = function() {
            s = arguments
        }
        ,
        i.always(function() {
            e[o] = a,
            n[o] && (n.jsonpCallback = r.jsonpCallback,
            Fn.push(o)),
            s && x.isFunction(a) && a(s[0]),
            s = a = t
        }),
        "script") : t
    });
    var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function() {
        var e;
        for (e in Pn)
            Pn[e](t, !0)
    }
    ;
    function In() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    x.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && In() || zn()
    }
    : In,
    Rn = x.ajaxSettings.xhr(),
    x.support.cors = !!Rn && "withCredentials"in Rn,
    Rn = x.support.ajax = !!Rn,
    Rn && x.ajaxTransport(function(n) {
        if (!n.crossDomain || x.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async),
                    n.xhrFields)
                        for (s in n.xhrFields)
                            l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType),
                    n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i)
                            l.setRequestHeader(s, i[s])
                    } catch (u) {}
                    l.send(n.hasContent && n.data || null),
                    r = function(e, i) {
                        var s, u, c, p;
                        try {
                            if (r && (i || 4 === l.readyState))
                                if (r = t,
                                a && (l.onreadystatechange = x.noop,
                                $n && delete Pn[a]),
                                i)
                                    4 !== l.readyState && l.abort();
                                else {
                                    p = {},
                                    s = l.status,
                                    u = l.getAllResponseHeaders(),
                                    "string" == typeof l.responseText && (p.text = l.responseText);
                                    try {
                                        c = l.statusText
                                    } catch (f) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                }
                        } catch (d) {
                            i || o(-1, d)
                        }
                        p && o(s, c, p, u)
                    }
                    ,
                    n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn,
                    $n && (Pn || (Pn = {},
                    x(e).unload($n)),
                    Pn[a] = r),
                    l.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Gn = [nr], Qn = {
        "*": [function(e, t) {
            var n = this.createTween(e, t)
              , r = n.cur()
              , i = Yn.exec(t)
              , o = i && i[3] || (x.cssNumber[e] ? "" : "px")
              , a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e))
              , s = 1
              , l = 20;
            if (a && a[3] !== o) {
                o = o || a[3],
                i = i || [],
                a = +r || 1;
                do
                    s = s || ".5",
                    a /= s,
                    x.style(n.elem, e, a + o);
                while (s !== (s = n.cur() / r) && 1 !== s && --l)
            }
            return i && (a = n.start = +a || +r || 0,
            n.unit = o,
            n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]),
            n
        }
        ]
    };
    function Kn() {
        return setTimeout(function() {
            Xn = t
        }),
        Xn = x.now()
    }
    function Zn(e, t, n) {
        var r, i = (Qn[t] || []).concat(Qn["*"]), o = 0, a = i.length;
        for (; a > o; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function er(e, t, n) {
        var r, i, o = 0, a = Gn.length, s = x.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (i)
                return !1;
            var t = Xn || Kn()
              , n = Math.max(0, u.startTime + u.duration - t)
              , r = n / u.duration || 0
              , o = 1 - r
              , a = 0
              , l = u.tweens.length;
            for (; l > a; a++)
                u.tweens[a].run(o);
            return s.notifyWith(e, [u, o, n]),
            1 > o && l ? n : (s.resolveWith(e, [u]),
            !1)
        }, u = s.promise({
            elem: e,
            props: x.extend({}, t),
            opts: x.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Xn || Kn(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? u.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; r > n; n++)
                    u.tweens[n].run(1);
                return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]),
                this
            }
        }), c = u.props;
        for (tr(c, u.opts.specialEasing); a > o; o++)
            if (r = Gn[o].call(u, e, c, u.opts))
                return r;
        return x.map(c, Zn, u),
        x.isFunction(u.opts.start) && u.opts.start.call(e, u),
        x.fx.timer(x.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function tr(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = x.camelCase(n),
            i = t[r],
            o = e[n],
            x.isArray(o) && (i = o[1],
            o = e[n] = o[0]),
            n !== r && (e[r] = o,
            delete e[n]),
            a = x.cssHooks[r],
            a && "expand"in a) {
                o = a.expand(o),
                delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n],
                    t[n] = i)
            } else
                t[r] = i
    }
    x.Animation = x.extend(er, {
        tweener: function(e, t) {
            x.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.split(" ");
            var n, r = 0, i = e.length;
            for (; i > r; r++)
                n = e[r],
                Qn[n] = Qn[n] || [],
                Qn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Gn.unshift(e) : Gn.push(e)
        }
    });
    function nr(e, t, n) {
        var r, i, o, a, s, l, u = this, c = {}, p = e.style, f = e.nodeType && nn(e), d = x._data(e, "fxshow");
        n.queue || (s = x._queueHooks(e, "fx"),
        null == s.unqueued && (s.unqueued = 0,
        l = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || l()
        }
        ),
        s.unqueued++,
        u.always(function() {
            u.always(function() {
                s.unqueued--,
                x.queue(e, "fx").length || s.empty.fire()
            })
        })),
        1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
        "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        n.overflow && (p.overflow = "hidden",
        x.support.shrinkWrapBlocks || u.always(function() {
            p.overflow = n.overflow[0],
            p.overflowX = n.overflow[1],
            p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r],
            Vn.exec(i)) {
                if (delete t[r],
                o = o || "toggle" === i,
                i === (f ? "hide" : "show"))
                    continue;
                c[r] = d && d[r] || x.style(e, r)
            }
        if (!x.isEmptyObject(c)) {
            d ? "hidden"in d && (f = d.hidden) : d = x._data(e, "fxshow", {}),
            o && (d.hidden = !f),
            f ? x(e).show() : u.done(function() {
                x(e).hide()
            }),
            u.done(function() {
                var t;
                x._removeData(e, "fxshow");
                for (t in c)
                    x.style(e, t, c[t])
            });
            for (r in c)
                a = Zn(f ? d[r] : 0, r, u),
                r in d || (d[r] = a.start,
                f && (a.end = a.start,
                a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e,t,n,r,i)
    }
    x.Tween = rr,
    rr.prototype = {
        constructor: rr,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (x.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : rr.propHooks._default.set(this),
            this
        }
    },
    rr.prototype.init.prototype = rr.prototype,
    rr.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    x.each(["toggle", "show", "hide"], function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }),
    x.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = x.isEmptyObject(e)
              , o = x.speed(t, n, r)
              , a = function() {
                var t = er(this, x.extend({}, e), o);
                (i || x._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(r)
            };
            return "string" != typeof e && (r = n,
            n = e,
            e = t),
            n && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , n = null != e && e + "queueHooks"
                  , o = x.timers
                  , a = x._data(this);
                if (n)
                    a[n] && a[n].stop && i(a[n]);
                else
                    for (n in a)
                        a[n] && a[n].stop && Jn.test(n) && i(a[n]);
                for (n = o.length; n--; )
                    o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r),
                    t = !1,
                    o.splice(n, 1));
                (t || !r) && x.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = x._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = x.timers, a = r ? r.length : 0;
                for (n.finish = !0,
                x.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; a > t; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    });
    function ir(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)
            n = Zt[i],
            r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    x.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        x.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    x.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || x.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !x.isFunction(t) && t
        };
        return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default,
        (null == r.queue || r.queue === !0) && (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            x.isFunction(r.old) && r.old.call(this),
            r.queue && x.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    x.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    },
    x.timers = [],
    x.fx = rr.prototype.init,
    x.fx.tick = function() {
        var e, n = x.timers, r = 0;
        for (Xn = x.now(); n.length > r; r++)
            e = n[r],
            e() || n[r] !== e || n.splice(r--, 1);
        n.length || x.fx.stop(),
        Xn = t
    }
    ,
    x.fx.timer = function(e) {
        e() && x.timers.push(e) && x.fx.start()
    }
    ,
    x.fx.interval = 13,
    x.fx.start = function() {
        Un || (Un = setInterval(x.fx.tick, x.fx.interval))
    }
    ,
    x.fx.stop = function() {
        clearInterval(Un),
        Un = null
    }
    ,
    x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    x.fx.step = {},
    x.expr && x.expr.filters && (x.expr.filters.animated = function(e) {
        return x.grep(x.timers, function(t) {
            return e === t.elem
        }).length
    }
    ),
    x.fn.offset = function(e) {
        if (arguments.length)
            return e === t ? this : this.each(function(t) {
                x.offset.setOffset(this, e, t)
            });
        var n, r, o = {
            top: 0,
            left: 0
        }, a = this[0], s = a && a.ownerDocument;
        if (s)
            return n = s.documentElement,
            x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()),
            r = or(s),
            {
                top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : o
    }
    ,
    x.offset = {
        setOffset: function(e, t, n) {
            var r = x.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = x(e), o = i.offset(), a = x.css(e, "top"), s = x.css(e, "left"), l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1, u = {}, c = {}, p, f;
            l ? (c = i.position(),
            p = c.top,
            f = c.left) : (p = parseFloat(a) || 0,
            f = parseFloat(s) || 0),
            x.isFunction(t) && (t = t.call(e, n, o)),
            null != t.top && (u.top = t.top - o.top + p),
            null != t.left && (u.left = t.left - o.left + f),
            "using"in t ? t.using.call(e, u) : i.css(u)
        }
    },
    x.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, r = this[0];
                return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                x.nodeName(e[0], "html") || (n = e.offset()),
                n.top += x.css(e[0], "borderTopWidth", !0),
                n.left += x.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - x.css(r, "marginTop", !0),
                    left: t.left - n.left - x.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || s;
                while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position"))
                    e = e.offsetParent;
                return e || s
            })
        }
    }),
    x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        x.fn[e] = function(i) {
            return x.access(this, function(e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o,
                t)
            }, e, i, arguments.length, null)
        }
    });
    function or(e) {
        return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    x.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        x.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            x.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i)
                  , s = r || (i === !0 || o === !0 ? "margin" : "border");
                return x.access(this, function(n, r, i) {
                    var o;
                    return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement,
                    Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }),
    x.fn.size = function() {
        return this.length
    }
    ,
    x.fn.andSelf = x.fn.addBack,
    "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return x
    }))
}
)(window);

;/*! jQuery UI - v1.10.4 - 2014-12-03
* http://jqueryui.com
* Includes: jquery.ui.effect.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function(e, t) {
    var i = "ui-effects-";
    e.effects = {
        effect: {}
    },
    function(e, t) {
        function i(e, t, i) {
            var s = c[t.type] || {};
            return null == e ? i || !t.def ? null : t.def : (e = s.floor ? ~~e : parseFloat(e),
            isNaN(e) ? t.def : s.mod ? (e + s.mod) % s.mod : 0 > e ? 0 : e > s.max ? s.max : e)
        }
        function s(i) {
            var s = l()
              , n = s._rgba = [];
            return i = i.toLowerCase(),
            f(h, function(e, a) {
                var o, r = a.re.exec(i), h = r && a.parse(r), l = a.space || "rgba";
                return h ? (o = s[l](h),
                s[u[l].cache] = o[u[l].cache],
                n = s._rgba = o._rgba,
                !1) : t
            }),
            n.length ? ("0,0,0,0" === n.join() && e.extend(n, a.transparent),
            s) : a[i]
        }
        function n(e, t, i) {
            return i = (i + 1) % 1,
            1 > 6 * i ? e + 6 * (t - e) * i : 1 > 2 * i ? t : 2 > 3 * i ? e + 6 * (t - e) * (2 / 3 - i) : e
        }
        var a, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", r = /^([\-+])=\s*(\d+\.?\d*)/, h = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(e) {
                return [e[1], e[2], e[3], e[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(e) {
                return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(e) {
                return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(e) {
                return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(e) {
                return [e[1], e[2] / 100, e[3] / 100, e[4]]
            }
        }], l = e.Color = function(t, i, s, n) {
            return new e.Color.fn.parse(t,i,s,n)
        }
        , u = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, c = {
            "byte": {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, d = l.support = {}, p = e("<p>")[0], f = e.each;
        p.style.cssText = "background-color:rgba(1,1,1,.5)",
        d.rgba = p.style.backgroundColor.indexOf("rgba") > -1,
        f(u, function(e, t) {
            t.cache = "_" + e,
            t.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        }),
        l.fn = e.extend(l.prototype, {
            parse: function(n, o, r, h) {
                if (n === t)
                    return this._rgba = [null, null, null, null],
                    this;
                (n.jquery || n.nodeType) && (n = e(n).css(o),
                o = t);
                var c = this
                  , d = e.type(n)
                  , p = this._rgba = [];
                return o !== t && (n = [n, o, r, h],
                d = "array"),
                "string" === d ? this.parse(s(n) || a._default) : "array" === d ? (f(u.rgba.props, function(e, t) {
                    p[t.idx] = i(n[t.idx], t)
                }),
                this) : "object" === d ? (n instanceof l ? f(u, function(e, t) {
                    n[t.cache] && (c[t.cache] = n[t.cache].slice())
                }) : f(u, function(t, s) {
                    var a = s.cache;
                    f(s.props, function(e, t) {
                        if (!c[a] && s.to) {
                            if ("alpha" === e || null == n[e])
                                return;
                            c[a] = s.to(c._rgba)
                        }
                        c[a][t.idx] = i(n[e], t, !0)
                    }),
                    c[a] && 0 > e.inArray(null, c[a].slice(0, 3)) && (c[a][3] = 1,
                    s.from && (c._rgba = s.from(c[a])))
                }),
                this) : t
            },
            is: function(e) {
                var i = l(e)
                  , s = !0
                  , n = this;
                return f(u, function(e, a) {
                    var o, r = i[a.cache];
                    return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [],
                    f(a.props, function(e, i) {
                        return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : t
                    })),
                    s
                }),
                s
            },
            _space: function() {
                var e = []
                  , t = this;
                return f(u, function(i, s) {
                    t[s.cache] && e.push(i)
                }),
                e.pop()
            },
            transition: function(e, t) {
                var s = l(e)
                  , n = s._space()
                  , a = u[n]
                  , o = 0 === this.alpha() ? l("transparent") : this
                  , r = o[a.cache] || a.to(o._rgba)
                  , h = r.slice();
                return s = s[a.cache],
                f(a.props, function(e, n) {
                    var a = n.idx
                      , o = r[a]
                      , l = s[a]
                      , u = c[n.type] || {};
                    null !== l && (null === o ? h[a] = l : (u.mod && (l - o > u.mod / 2 ? o += u.mod : o - l > u.mod / 2 && (o -= u.mod)),
                    h[a] = i((l - o) * t + o, n)))
                }),
                this[n](h)
            },
            blend: function(t) {
                if (1 === this._rgba[3])
                    return this;
                var i = this._rgba.slice()
                  , s = i.pop()
                  , n = l(t)._rgba;
                return l(e.map(i, function(e, t) {
                    return (1 - s) * n[t] + s * e
                }))
            },
            toRgbaString: function() {
                var t = "rgba("
                  , i = e.map(this._rgba, function(e, t) {
                    return null == e ? t > 2 ? 1 : 0 : e
                });
                return 1 === i[3] && (i.pop(),
                t = "rgb("),
                t + i.join() + ")"
            },
            toHslaString: function() {
                var t = "hsla("
                  , i = e.map(this.hsla(), function(e, t) {
                    return null == e && (e = t > 2 ? 1 : 0),
                    t && 3 > t && (e = Math.round(100 * e) + "%"),
                    e
                });
                return 1 === i[3] && (i.pop(),
                t = "hsl("),
                t + i.join() + ")"
            },
            toHexString: function(t) {
                var i = this._rgba.slice()
                  , s = i.pop();
                return t && i.push(~~(255 * s)),
                "#" + e.map(i, function(e) {
                    return e = (e || 0).toString(16),
                    1 === e.length ? "0" + e : e
                }).join("")
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }),
        l.fn.parse.prototype = l.fn,
        u.hsla.to = function(e) {
            if (null == e[0] || null == e[1] || null == e[2])
                return [null, null, null, e[3]];
            var t, i, s = e[0] / 255, n = e[1] / 255, a = e[2] / 255, o = e[3], r = Math.max(s, n, a), h = Math.min(s, n, a), l = r - h, u = r + h, c = .5 * u;
            return t = h === r ? 0 : s === r ? 60 * (n - a) / l + 360 : n === r ? 60 * (a - s) / l + 120 : 60 * (s - n) / l + 240,
            i = 0 === l ? 0 : .5 >= c ? l / u : l / (2 - u),
            [Math.round(t) % 360, i, c, null == o ? 1 : o]
        }
        ,
        u.hsla.from = function(e) {
            if (null == e[0] || null == e[1] || null == e[2])
                return [null, null, null, e[3]];
            var t = e[0] / 360
              , i = e[1]
              , s = e[2]
              , a = e[3]
              , o = .5 >= s ? s * (1 + i) : s + i - s * i
              , r = 2 * s - o;
            return [Math.round(255 * n(r, o, t + 1 / 3)), Math.round(255 * n(r, o, t)), Math.round(255 * n(r, o, t - 1 / 3)), a]
        }
        ,
        f(u, function(s, n) {
            var a = n.props
              , o = n.cache
              , h = n.to
              , u = n.from;
            l.fn[s] = function(s) {
                if (h && !this[o] && (this[o] = h(this._rgba)),
                s === t)
                    return this[o].slice();
                var n, r = e.type(s), c = "array" === r || "object" === r ? s : arguments, d = this[o].slice();
                return f(a, function(e, t) {
                    var s = c["object" === r ? e : t.idx];
                    null == s && (s = d[t.idx]),
                    d[t.idx] = i(s, t)
                }),
                u ? (n = l(u(d)),
                n[o] = d,
                n) : l(d)
            }
            ,
            f(a, function(t, i) {
                l.fn[t] || (l.fn[t] = function(n) {
                    var a, o = e.type(n), h = "alpha" === t ? this._hsla ? "hsla" : "rgba" : s, l = this[h](), u = l[i.idx];
                    return "undefined" === o ? u : ("function" === o && (n = n.call(this, u),
                    o = e.type(n)),
                    null == n && i.empty ? this : ("string" === o && (a = r.exec(n),
                    a && (n = u + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))),
                    l[i.idx] = n,
                    this[h](l)))
                }
                )
            })
        }),
        l.hook = function(t) {
            var i = t.split(" ");
            f(i, function(t, i) {
                e.cssHooks[i] = {
                    set: function(t, n) {
                        var a, o, r = "";
                        if ("transparent" !== n && ("string" !== e.type(n) || (a = s(n)))) {
                            if (n = l(a || n),
                            !d.rgba && 1 !== n._rgba[3]) {
                                for (o = "backgroundColor" === i ? t.parentNode : t; ("" === r || "transparent" === r) && o && o.style; )
                                    try {
                                        r = e.css(o, "backgroundColor"),
                                        o = o.parentNode
                                    } catch (h) {}
                                n = n.blend(r && "transparent" !== r ? r : "_default")
                            }
                            n = n.toRgbaString()
                        }
                        try {
                            t.style[i] = n
                        } catch (h) {}
                    }
                },
                e.fx.step[i] = function(t) {
                    t.colorInit || (t.start = l(t.elem, i),
                    t.end = l(t.end),
                    t.colorInit = !0),
                    e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
                }
            })
        }
        ,
        l.hook(o),
        e.cssHooks.borderColor = {
            expand: function(e) {
                var t = {};
                return f(["Top", "Right", "Bottom", "Left"], function(i, s) {
                    t["border" + s + "Color"] = e
                }),
                t
            }
        },
        a = e.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(jQuery),
    function() {
        function i(t) {
            var i, s, n = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle, a = {};
            if (n && n.length && n[0] && n[n[0]])
                for (s = n.length; s--; )
                    i = n[s],
                    "string" == typeof n[i] && (a[e.camelCase(i)] = n[i]);
            else
                for (i in n)
                    "string" == typeof n[i] && (a[i] = n[i]);
            return a
        }
        function s(t, i) {
            var s, n, o = {};
            for (s in i)
                n = i[s],
                t[s] !== n && (a[s] || (e.fx.step[s] || !isNaN(parseFloat(n))) && (o[s] = n));
            return o
        }
        var n = ["add", "remove", "toggle"]
          , a = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, i) {
            e.fx.step[i] = function(e) {
                ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (jQuery.style(e.elem, i, e.end),
                e.setAttr = !0)
            }
        }),
        e.fn.addBack || (e.fn.addBack = function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
        ),
        e.effects.animateClass = function(t, a, o, r) {
            var h = e.speed(a, o, r);
            return this.queue(function() {
                var a, o = e(this), r = o.attr("class") || "", l = h.children ? o.find("*").addBack() : o;
                l = l.map(function() {
                    var t = e(this);
                    return {
                        el: t,
                        start: i(this)
                    }
                }),
                a = function() {
                    e.each(n, function(e, i) {
                        t[i] && o[i + "Class"](t[i])
                    })
                }
                ,
                a(),
                l = l.map(function() {
                    return this.end = i(this.el[0]),
                    this.diff = s(this.start, this.end),
                    this
                }),
                o.attr("class", r),
                l = l.map(function() {
                    var t = this
                      , i = e.Deferred()
                      , s = e.extend({}, h, {
                        queue: !1,
                        complete: function() {
                            i.resolve(t)
                        }
                    });
                    return this.el.animate(this.diff, s),
                    i.promise()
                }),
                e.when.apply(e, l.get()).done(function() {
                    a(),
                    e.each(arguments, function() {
                        var t = this.el;
                        e.each(this.diff, function(e) {
                            t.css(e, "")
                        })
                    }),
                    h.complete.call(o[0])
                })
            })
        }
        ,
        e.fn.extend({
            addClass: function(t) {
                return function(i, s, n, a) {
                    return s ? e.effects.animateClass.call(this, {
                        add: i
                    }, s, n, a) : t.apply(this, arguments)
                }
            }(e.fn.addClass),
            removeClass: function(t) {
                return function(i, s, n, a) {
                    return arguments.length > 1 ? e.effects.animateClass.call(this, {
                        remove: i
                    }, s, n, a) : t.apply(this, arguments)
                }
            }(e.fn.removeClass),
            toggleClass: function(i) {
                return function(s, n, a, o, r) {
                    return "boolean" == typeof n || n === t ? a ? e.effects.animateClass.call(this, n ? {
                        add: s
                    } : {
                        remove: s
                    }, a, o, r) : i.apply(this, arguments) : e.effects.animateClass.call(this, {
                        toggle: s
                    }, n, a, o)
                }
            }(e.fn.toggleClass),
            switchClass: function(t, i, s, n, a) {
                return e.effects.animateClass.call(this, {
                    add: i,
                    remove: t
                }, s, n, a)
            }
        })
    }(),
    function() {
        function s(t, i, s, n) {
            return e.isPlainObject(t) && (i = t,
            t = t.effect),
            t = {
                effect: t
            },
            null == i && (i = {}),
            e.isFunction(i) && (n = i,
            s = null,
            i = {}),
            ("number" == typeof i || e.fx.speeds[i]) && (n = s,
            s = i,
            i = {}),
            e.isFunction(s) && (n = s,
            s = null),
            i && e.extend(t, i),
            s = s || i.duration,
            t.duration = e.fx.off ? 0 : "number" == typeof s ? s : s in e.fx.speeds ? e.fx.speeds[s] : e.fx.speeds._default,
            t.complete = n || i.complete,
            t
        }
        function n(t) {
            return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? e.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0
        }
        e.extend(e.effects, {
            version: "1.10.4",
            save: function(e, t) {
                for (var s = 0; t.length > s; s++)
                    null !== t[s] && e.data(i + t[s], e[0].style[t[s]])
            },
            restore: function(e, s) {
                var n, a;
                for (a = 0; s.length > a; a++)
                    null !== s[a] && (n = e.data(i + s[a]),
                    n === t && (n = ""),
                    e.css(s[a], n))
            },
            setMode: function(e, t) {
                return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"),
                t
            },
            getBaseline: function(e, t) {
                var i, s;
                switch (e[0]) {
                case "top":
                    i = 0;
                    break;
                case "middle":
                    i = .5;
                    break;
                case "bottom":
                    i = 1;
                    break;
                default:
                    i = e[0] / t.height
                }
                switch (e[1]) {
                case "left":
                    s = 0;
                    break;
                case "center":
                    s = .5;
                    break;
                case "right":
                    s = 1;
                    break;
                default:
                    s = e[1] / t.width
                }
                return {
                    x: s,
                    y: i
                }
            },
            createWrapper: function(t) {
                if (t.parent().is(".ui-effects-wrapper"))
                    return t.parent();
                var i = {
                    width: t.outerWidth(!0),
                    height: t.outerHeight(!0),
                    "float": t.css("float")
                }
                  , s = e("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                })
                  , n = {
                    width: t.width(),
                    height: t.height()
                }
                  , a = document.activeElement;
                try {
                    a.id
                } catch (o) {
                    a = document.body
                }
                return t.wrap(s),
                (t[0] === a || e.contains(t[0], a)) && e(a).focus(),
                s = t.parent(),
                "static" === t.css("position") ? (s.css({
                    position: "relative"
                }),
                t.css({
                    position: "relative"
                })) : (e.extend(i, {
                    position: t.css("position"),
                    zIndex: t.css("z-index")
                }),
                e.each(["top", "left", "bottom", "right"], function(e, s) {
                    i[s] = t.css(s),
                    isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                }),
                t.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })),
                t.css(n),
                s.css(i).show()
            },
            removeWrapper: function(t) {
                var i = document.activeElement;
                return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t),
                (t[0] === i || e.contains(t[0], i)) && e(i).focus()),
                t
            },
            setTransition: function(t, i, s, n) {
                return n = n || {},
                e.each(i, function(e, i) {
                    var a = t.cssUnit(i);
                    a[0] > 0 && (n[i] = a[0] * s + a[1])
                }),
                n
            }
        }),
        e.fn.extend({
            effect: function() {
                function t(t) {
                    function s() {
                        e.isFunction(a) && a.call(n[0]),
                        e.isFunction(t) && t()
                    }
                    var n = e(this)
                      , a = i.complete
                      , r = i.mode;
                    (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](),
                    s()) : o.call(n[0], i, s)
                }
                var i = s.apply(this, arguments)
                  , n = i.mode
                  , a = i.queue
                  , o = e.effects.effect[i.effect];
                return e.fx.off || !o ? n ? this[n](i.duration, i.complete) : this.each(function() {
                    i.complete && i.complete.call(this)
                }) : a === !1 ? this.each(t) : this.queue(a || "fx", t)
            },
            show: function(e) {
                return function(t) {
                    if (n(t))
                        return e.apply(this, arguments);
                    var i = s.apply(this, arguments);
                    return i.mode = "show",
                    this.effect.call(this, i)
                }
            }(e.fn.show),
            hide: function(e) {
                return function(t) {
                    if (n(t))
                        return e.apply(this, arguments);
                    var i = s.apply(this, arguments);
                    return i.mode = "hide",
                    this.effect.call(this, i)
                }
            }(e.fn.hide),
            toggle: function(e) {
                return function(t) {
                    if (n(t) || "boolean" == typeof t)
                        return e.apply(this, arguments);
                    var i = s.apply(this, arguments);
                    return i.mode = "toggle",
                    this.effect.call(this, i)
                }
            }(e.fn.toggle),
            cssUnit: function(t) {
                var i = this.css(t)
                  , s = [];
                return e.each(["em", "px", "%", "pt"], function(e, t) {
                    i.indexOf(t) > 0 && (s = [parseFloat(i), t])
                }),
                s
            }
        })
    }(),
    function() {
        var t = {};
        e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, i) {
            t[i] = function(t) {
                return Math.pow(t, e + 2)
            }
        }),
        e.extend(t, {
            Sine: function(e) {
                return 1 - Math.cos(e * Math.PI / 2)
            },
            Circ: function(e) {
                return 1 - Math.sqrt(1 - e * e)
            },
            Elastic: function(e) {
                return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
            },
            Back: function(e) {
                return e * e * (3 * e - 2)
            },
            Bounce: function(e) {
                for (var t, i = 4; ((t = Math.pow(2, --i)) - 1) / 11 > e; )
                    ;
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
            }
        }),
        e.each(t, function(t, i) {
            e.easing["easeIn" + t] = i,
            e.easing["easeOut" + t] = function(e) {
                return 1 - i(1 - e)
            }
            ,
            e.easing["easeInOut" + t] = function(e) {
                return .5 > e ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2
            }
        })
    }()
}
)(jQuery);
;/* HTML5 Placeholder jQuery Plugin - v2.1.0
 * Copyright (c)2015 Mathias Bynens
 * 2015-01-27
 */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    function b(b) {
        var c = {}
          , d = /^jQuery\d+$/;
        return a.each(b.attributes, function(a, b) {
            b.specified && !d.test(b.name) && (c[b.name] = b.value)
        }),
        c
    }
    function c(b, c) {
        var d = this
          , f = a(d);
        if (d.value == f.attr("placeholder") && f.hasClass(m.customClass))
            if (f.data("placeholder-password")) {
                if (f = f.hide().nextAll('input[type="password"]:first').show().attr("id", f.removeAttr("id").data("placeholder-id")),
                b === !0)
                    return f[0].value = c;
                f.focus()
            } else
                d.value = "",
                f.removeClass(m.customClass),
                d == e() && d.select()
    }
    function d() {
        var d, e = this, f = a(e), g = this.id;
        if ("" === e.value) {
            if ("password" === e.type) {
                if (!f.data("placeholder-textinput")) {
                    try {
                        d = f.clone().attr({
                            type: "text"
                        })
                    } catch (h) {
                        d = a("<input>").attr(a.extend(b(this), {
                            type: "text"
                        }))
                    }
                    d.removeAttr("name").data({
                        "placeholder-password": f,
                        "placeholder-id": g
                    }).bind("focus.placeholder", c),
                    f.data({
                        "placeholder-textinput": d,
                        "placeholder-id": g
                    }).before(d)
                }
                f = f.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", g).show()
            }
            f.addClass(m.customClass),
            f[0].value = f.attr("placeholder")
        } else
            f.removeClass(m.customClass)
    }
    function e() {
        try {
            return document.activeElement
        } catch (a) {}
    }
    var f, g, h = "[object OperaMini]" == Object.prototype.toString.call(window.operamini), i = "placeholder"in document.createElement("input") && !h, j = "placeholder"in document.createElement("textarea") && !h, k = a.valHooks, l = a.propHooks;
    if (i && j)
        g = a.fn.placeholder = function() {
            return this
        }
        ,
        g.input = g.textarea = !0;
    else {
        var m = {};
        g = a.fn.placeholder = function(b) {
            var e = {
                customClass: "placeholder"
            };
            m = a.extend({}, e, b);
            var f = this;
            return f.filter((i ? "textarea" : ":input") + "[placeholder]").not("." + m.customClass).bind({
                "focus.placeholder": c,
                "blur.placeholder": d
            }).data("placeholder-enabled", !0).trigger("blur.placeholder"),
            f
        }
        ,
        g.input = i,
        g.textarea = j,
        f = {
            get: function(b) {
                var c = a(b)
                  , d = c.data("placeholder-password");
                return d ? d[0].value : c.data("placeholder-enabled") && c.hasClass(m.customClass) ? "" : b.value
            },
            set: function(b, f) {
                var g = a(b)
                  , h = g.data("placeholder-password");
                return h ? h[0].value = f : g.data("placeholder-enabled") ? ("" === f ? (b.value = f,
                b != e() && d.call(b)) : g.hasClass(m.customClass) ? c.call(b, !0, f) || (b.value = f) : b.value = f,
                g) : b.value = f
            }
        },
        i || (k.input = f,
        l.value = f),
        j || (k.textarea = f,
        l.value = f),
        a(function() {
            a(document).delegate("form", "submit.placeholder", function() {
                var b = a("." + m.customClass, this).each(c);
                setTimeout(function() {
                    b.each(d)
                }, 10)
            })
        }),
        a(window).bind("beforeunload.placeholder", function() {
            a("." + m.customClass).each(function() {
                this.value = ""
            })
        })
    }
});
//# sourceMappingURL=jquery.placeholder.min.js.map
;/*! jQuery plugin for Hammer.JS - v1.0.0 - 2014-01-02
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2014 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */
/*! Hammer.JS - v1.0.6 - 2014-01-02
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2014 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */
(function(window, undefined) {
    'use strict';
    var Hammer = function(element, options) {
        return new Hammer.Instance(element,options || {});
    };
    Hammer.defaults = {
        stop_browser_behavior: {
            userSelect: 'none',
            touchAction: 'none',
            touchCallout: 'none',
            contentZooming: 'none',
            userDrag: 'none',
            tapHighlightColor: 'rgba(0,0,0,0)'
        }
    };
    Hammer.HAS_POINTEREVENTS = window.navigator.pointerEnabled || window.navigator.msPointerEnabled;
    Hammer.HAS_TOUCHEVENTS = ('ontouchstart'in window);
    Hammer.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android|silk/i;
    Hammer.NO_MOUSEEVENTS = Hammer.HAS_TOUCHEVENTS && window.navigator.userAgent.match(Hammer.MOBILE_REGEX);
    Hammer.EVENT_TYPES = {};
    Hammer.DIRECTION_DOWN = 'down';
    Hammer.DIRECTION_LEFT = 'left';
    Hammer.DIRECTION_UP = 'up';
    Hammer.DIRECTION_RIGHT = 'right';
    Hammer.POINTER_MOUSE = 'mouse';
    Hammer.POINTER_TOUCH = 'touch';
    Hammer.POINTER_PEN = 'pen';
    Hammer.EVENT_START = 'start';
    Hammer.EVENT_MOVE = 'move';
    Hammer.EVENT_END = 'end';
    Hammer.DOCUMENT = window.document;
    Hammer.plugins = Hammer.plugins || {};
    Hammer.gestures = Hammer.gestures || {};
    Hammer.READY = false;
    function setup() {
        if (Hammer.READY) {
            return;
        }
        Hammer.event.determineEventTypes();
        Hammer.utils.each(Hammer.gestures, function(gesture) {
            Hammer.detection.register(gesture);
        });
        Hammer.event.onTouch(Hammer.DOCUMENT, Hammer.EVENT_MOVE, Hammer.detection.detect);
        Hammer.event.onTouch(Hammer.DOCUMENT, Hammer.EVENT_END, Hammer.detection.detect);
        Hammer.READY = true;
    }
    Hammer.utils = {
        extend: function extend(dest, src, merge) {
            for (var key in src) {
                if (dest[key] !== undefined && merge) {
                    continue;
                }
                dest[key] = src[key];
            }
            return dest;
        },
        each: function(obj, iterator, context) {
            var i, length;
            if ('forEach'in obj) {
                obj.forEach(iterator, context);
            } else if (obj.length !== undefined) {
                for (i = 0,
                length = obj.length; i < length; i++) {
                    if (iterator.call(context, obj[i], i, obj) === false) {
                        return;
                    }
                }
            } else {
                for (i in obj) {
                    if (obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj) === false) {
                        return;
                    }
                }
            }
        },
        hasParent: function(node, parent) {
            while (node) {
                if (node == parent) {
                    return true;
                }
                node = node.parentNode;
            }
            return false;
        },
        getCenter: function getCenter(touches) {
            var valuesX = []
              , valuesY = [];
            Hammer.utils.each(touches, function(touch) {
                valuesX.push(typeof touch.clientX !== 'undefined' ? touch.clientX : touch.pageX);
                valuesY.push(typeof touch.clientY !== 'undefined' ? touch.clientY : touch.pageY);
            });
            return {
                pageX: ((Math.min.apply(Math, valuesX) + Math.max.apply(Math, valuesX)) / 2),
                pageY: ((Math.min.apply(Math, valuesY) + Math.max.apply(Math, valuesY)) / 2)
            };
        },
        getVelocity: function getVelocity(delta_time, delta_x, delta_y) {
            return {
                x: Math.abs(delta_x / delta_time) || 0,
                y: Math.abs(delta_y / delta_time) || 0
            };
        },
        getAngle: function getAngle(touch1, touch2) {
            var y = touch2.pageY - touch1.pageY
              , x = touch2.pageX - touch1.pageX;
            return Math.atan2(y, x) * 180 / Math.PI;
        },
        getDirection: function getDirection(touch1, touch2) {
            var x = Math.abs(touch1.pageX - touch2.pageX)
              , y = Math.abs(touch1.pageY - touch2.pageY);
            if (x >= y) {
                return touch1.pageX - touch2.pageX > 0 ? Hammer.DIRECTION_LEFT : Hammer.DIRECTION_RIGHT;
            } else {
                return touch1.pageY - touch2.pageY > 0 ? Hammer.DIRECTION_UP : Hammer.DIRECTION_DOWN;
            }
        },
        getDistance: function getDistance(touch1, touch2) {
            var x = touch2.pageX - touch1.pageX
              , y = touch2.pageY - touch1.pageY;
            return Math.sqrt((x * x) + (y * y));
        },
        getScale: function getScale(start, end) {
            if (start.length >= 2 && end.length >= 2) {
                return this.getDistance(end[0], end[1]) / this.getDistance(start[0], start[1]);
            }
            return 1;
        },
        getRotation: function getRotation(start, end) {
            if (start.length >= 2 && end.length >= 2) {
                return this.getAngle(end[1], end[0]) - this.getAngle(start[1], start[0]);
            }
            return 0;
        },
        isVertical: function isVertical(direction) {
            return (direction == Hammer.DIRECTION_UP || direction == Hammer.DIRECTION_DOWN);
        },
        stopDefaultBrowserBehavior: function stopDefaultBrowserBehavior(element, css_props) {
            if (!css_props || !element || !element.style) {
                return;
            }
            Hammer.utils.each(['webkit', 'khtml', 'moz', 'Moz', 'ms', 'o', ''], function(vendor) {
                Hammer.utils.each(css_props, function(prop) {
                    if (vendor) {
                        prop = vendor + prop.substring(0, 1).toUpperCase() + prop.substring(1);
                    }
                    if (prop in element.style) {
                        element.style[prop] = prop;
                    }
                });
            });
            if (css_props.userSelect == 'none') {
                element.onselectstart = function() {
                    return false;
                }
                ;
            }
            if (css_props.userDrag == 'none') {
                element.ondragstart = function() {
                    return false;
                }
                ;
            }
        }
    };
    Hammer.Instance = function(element, options) {
        var self = this;
        setup();
        this.element = element;
        this.enabled = true;
        this.options = Hammer.utils.extend(Hammer.utils.extend({}, Hammer.defaults), options || {});
        if (this.options.stop_browser_behavior) {
            Hammer.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior);
        }
        Hammer.event.onTouch(element, Hammer.EVENT_START, function(ev) {
            if (self.enabled) {
                Hammer.detection.startDetect(self, ev);
            }
        });
        return this;
    }
    ;
    Hammer.Instance.prototype = {
        on: function onEvent(gesture, handler) {
            var gestures = gesture.split(' ');
            Hammer.utils.each(gestures, function(gesture) {
                this.element.addEventListener(gesture, handler, false);
            }, this);
            return this;
        },
        off: function offEvent(gesture, handler) {
            var gestures = gesture.split(' ');
            Hammer.utils.each(gestures, function(gesture) {
                this.element.removeEventListener(gesture, handler, false);
            }, this);
            return this;
        },
        trigger: function triggerEvent(gesture, eventData) {
            if (!eventData) {
                eventData = {};
            }
            var event = Hammer.DOCUMENT.createEvent('Event');
            event.initEvent(gesture, true, true);
            event.gesture = eventData;
            var element = this.element;
            if (Hammer.utils.hasParent(eventData.target, element)) {
                element = eventData.target;
            }
            element.dispatchEvent(event);
            return this;
        },
        enable: function enable(state) {
            this.enabled = state;
            return this;
        }
    };
    var last_move_event = null;
    var enable_detect = false;
    var touch_triggered = false;
    Hammer.event = {
        bindDom: function(element, type, handler) {
            var types = type.split(' ');
            Hammer.utils.each(types, function(type) {
                element.addEventListener(type, handler, false);
            });
        },
        onTouch: function onTouch(element, eventType, handler) {
            var self = this;
            this.bindDom(element, Hammer.EVENT_TYPES[eventType], function bindDomOnTouch(ev) {
                var sourceEventType = ev.type.toLowerCase();
                if (sourceEventType.match(/mouse/) && touch_triggered) {
                    return;
                } else if (sourceEventType.match(/touch/) || sourceEventType.match(/pointerdown/) || (sourceEventType.match(/mouse/) && ev.which === 1)) {
                    enable_detect = true;
                } else if (sourceEventType.match(/mouse/) && !ev.which) {
                    enable_detect = false;
                }
                if (sourceEventType.match(/touch|pointer/)) {
                    touch_triggered = true;
                }
                var count_touches = 0;
                if (enable_detect) {
                    if (Hammer.HAS_POINTEREVENTS && eventType != Hammer.EVENT_END) {
                        count_touches = Hammer.PointerEvent.updatePointer(eventType, ev);
                    } else if (sourceEventType.match(/touch/)) {
                        count_touches = ev.touches.length;
                    } else if (!touch_triggered) {
                        count_touches = sourceEventType.match(/up/) ? 0 : 1;
                    }
                    if (count_touches > 0 && eventType == Hammer.EVENT_END) {
                        eventType = Hammer.EVENT_MOVE;
                    } else if (!count_touches) {
                        eventType = Hammer.EVENT_END;
                    }
                    if (count_touches || last_move_event === null) {
                        last_move_event = ev;
                    }
                    handler.call(Hammer.detection, self.collectEventData(element, eventType, self.getTouchList(last_move_event, eventType), ev));
                    if (Hammer.HAS_POINTEREVENTS && eventType == Hammer.EVENT_END) {
                        count_touches = Hammer.PointerEvent.updatePointer(eventType, ev);
                    }
                }
                if (!count_touches) {
                    last_move_event = null;
                    enable_detect = false;
                    touch_triggered = false;
                    Hammer.PointerEvent.reset();
                }
            });
        },
        determineEventTypes: function determineEventTypes() {
            var types;
            if (Hammer.HAS_POINTEREVENTS) {
                types = Hammer.PointerEvent.getEvents();
            } else if (Hammer.NO_MOUSEEVENTS) {
                types = ['touchstart', 'touchmove', 'touchend touchcancel'];
            } else {
                types = ['touchstart mousedown', 'touchmove mousemove', 'touchend touchcancel mouseup'];
            }
            Hammer.EVENT_TYPES[Hammer.EVENT_START] = types[0];
            Hammer.EVENT_TYPES[Hammer.EVENT_MOVE] = types[1];
            Hammer.EVENT_TYPES[Hammer.EVENT_END] = types[2];
        },
        getTouchList: function getTouchList(ev) {
            if (Hammer.HAS_POINTEREVENTS) {
                return Hammer.PointerEvent.getTouchList();
            } else if (ev.touches) {
                return ev.touches;
            } else {
                ev.identifier = 1;
                return [ev];
            }
        },
        collectEventData: function collectEventData(element, eventType, touches, ev) {
            var pointerType = Hammer.POINTER_TOUCH;
            if (ev.type.match(/mouse/) || Hammer.PointerEvent.matchType(Hammer.POINTER_MOUSE, ev)) {
                pointerType = Hammer.POINTER_MOUSE;
            }
            return {
                center: Hammer.utils.getCenter(touches),
                timeStamp: new Date().getTime(),
                target: ev.target,
                touches: touches,
                eventType: eventType,
                pointerType: pointerType,
                srcEvent: ev,
                preventDefault: function() {
                    if (this.srcEvent.preventManipulation) {
                        this.srcEvent.preventManipulation();
                    }
                    if (this.srcEvent.preventDefault) {
                        this.srcEvent.preventDefault();
                    }
                },
                stopPropagation: function() {
                    this.srcEvent.stopPropagation();
                },
                stopDetect: function() {
                    return Hammer.detection.stopDetect();
                }
            };
        }
    };
    Hammer.PointerEvent = {
        pointers: {},
        getTouchList: function() {
            var self = this;
            var touchlist = [];
            Hammer.utils.each(self.pointers, function(pointer) {
                touchlist.push(pointer);
            });
            return touchlist;
        },
        updatePointer: function(type, pointerEvent) {
            if (type == Hammer.EVENT_END) {
                this.pointers = {};
            } else {
                pointerEvent.identifier = pointerEvent.pointerId;
                this.pointers[pointerEvent.pointerId] = pointerEvent;
            }
            return Object.keys(this.pointers).length;
        },
        matchType: function(pointerType, ev) {
            if (!ev.pointerType) {
                return false;
            }
            var pt = ev.pointerType
              , types = {};
            types[Hammer.POINTER_MOUSE] = (pt === ev.MSPOINTER_TYPE_MOUSE || pt === Hammer.POINTER_MOUSE);
            types[Hammer.POINTER_TOUCH] = (pt === ev.MSPOINTER_TYPE_TOUCH || pt === Hammer.POINTER_TOUCH);
            types[Hammer.POINTER_PEN] = (pt === ev.MSPOINTER_TYPE_PEN || pt === Hammer.POINTER_PEN);
            return types[pointerType];
        },
        getEvents: function() {
            return ['pointerdown MSPointerDown', 'pointermove MSPointerMove', 'pointerup pointercancel MSPointerUp MSPointerCancel'];
        },
        reset: function() {
            this.pointers = {};
        }
    };
    Hammer.detection = {
        gestures: [],
        current: null,
        previous: null,
        stopped: false,
        startDetect: function startDetect(inst, eventData) {
            if (this.current) {
                return;
            }
            this.stopped = false;
            this.current = {
                inst: inst,
                startEvent: Hammer.utils.extend({}, eventData),
                lastEvent: false,
                name: ''
            };
            this.detect(eventData);
        },
        detect: function detect(eventData) {
            if (!this.current || this.stopped) {
                return;
            }
            eventData = this.extendEventData(eventData);
            var inst_options = this.current.inst.options;
            Hammer.utils.each(this.gestures, function(gesture) {
                if (!this.stopped && inst_options[gesture.name] !== false) {
                    if (gesture.handler.call(gesture, eventData, this.current.inst) === false) {
                        this.stopDetect();
                        return false;
                    }
                }
            }, this);
            if (this.current) {
                this.current.lastEvent = eventData;
            }
            if (eventData.eventType == Hammer.EVENT_END && !eventData.touches.length - 1) {
                this.stopDetect();
            }
            return eventData;
        },
        stopDetect: function stopDetect() {
            this.previous = Hammer.utils.extend({}, this.current);
            this.current = null;
            this.stopped = true;
        },
        extendEventData: function extendEventData(ev) {
            var startEv = this.current.startEvent;
            if (startEv && (ev.touches.length != startEv.touches.length || ev.touches === startEv.touches)) {
                startEv.touches = [];
                Hammer.utils.each(ev.touches, function(touch) {
                    startEv.touches.push(Hammer.utils.extend({}, touch));
                });
            }
            var delta_time = ev.timeStamp - startEv.timeStamp, delta_x = ev.center.pageX - startEv.center.pageX, delta_y = ev.center.pageY - startEv.center.pageY, velocity = Hammer.utils.getVelocity(delta_time, delta_x, delta_y), interimAngle, interimDirection;
            if (ev.eventType === 'end') {
                interimAngle = this.current.lastEvent && this.current.lastEvent.interimAngle;
                interimDirection = this.current.lastEvent && this.current.lastEvent.interimDirection;
            } else {
                interimAngle = this.current.lastEvent && Hammer.utils.getAngle(this.current.lastEvent.center, ev.center);
                interimDirection = this.current.lastEvent && Hammer.utils.getDirection(this.current.lastEvent.center, ev.center);
            }
            Hammer.utils.extend(ev, {
                deltaTime: delta_time,
                deltaX: delta_x,
                deltaY: delta_y,
                velocityX: velocity.x,
                velocityY: velocity.y,
                distance: Hammer.utils.getDistance(startEv.center, ev.center),
                angle: Hammer.utils.getAngle(startEv.center, ev.center),
                interimAngle: interimAngle,
                direction: Hammer.utils.getDirection(startEv.center, ev.center),
                interimDirection: interimDirection,
                scale: Hammer.utils.getScale(startEv.touches, ev.touches),
                rotation: Hammer.utils.getRotation(startEv.touches, ev.touches),
                startEvent: startEv
            });
            return ev;
        },
        register: function register(gesture) {
            var options = gesture.defaults || {};
            if (options[gesture.name] === undefined) {
                options[gesture.name] = true;
            }
            Hammer.utils.extend(Hammer.defaults, options, true);
            gesture.index = gesture.index || 1000;
            this.gestures.push(gesture);
            this.gestures.sort(function(a, b) {
                if (a.index < b.index) {
                    return -1;
                }
                if (a.index > b.index) {
                    return 1;
                }
                return 0;
            });
            return this.gestures;
        }
    };
    Hammer.gestures.Drag = {
        name: 'drag',
        index: 50,
        defaults: {
            drag_min_distance: 10,
            correct_for_drag_min_distance: true,
            drag_max_touches: 1,
            drag_block_horizontal: false,
            drag_block_vertical: false,
            drag_lock_to_axis: false,
            drag_lock_min_distance: 25
        },
        triggered: false,
        handler: function dragGesture(ev, inst) {
            if (Hammer.detection.current.name != this.name && this.triggered) {
                inst.trigger(this.name + 'end', ev);
                this.triggered = false;
                return;
            }
            if (inst.options.drag_max_touches > 0 && ev.touches.length > inst.options.drag_max_touches) {
                return;
            }
            switch (ev.eventType) {
            case Hammer.EVENT_START:
                this.triggered = false;
                break;
            case Hammer.EVENT_MOVE:
                if (ev.distance < inst.options.drag_min_distance && Hammer.detection.current.name != this.name) {
                    return;
                }
                if (Hammer.detection.current.name != this.name) {
                    Hammer.detection.current.name = this.name;
                    if (inst.options.correct_for_drag_min_distance && ev.distance > 0) {
                        var factor = Math.abs(inst.options.drag_min_distance / ev.distance);
                        Hammer.detection.current.startEvent.center.pageX += ev.deltaX * factor;
                        Hammer.detection.current.startEvent.center.pageY += ev.deltaY * factor;
                        ev = Hammer.detection.extendEventData(ev);
                    }
                }
                if (Hammer.detection.current.lastEvent.drag_locked_to_axis || (inst.options.drag_lock_to_axis && inst.options.drag_lock_min_distance <= ev.distance)) {
                    ev.drag_locked_to_axis = true;
                }
                var last_direction = Hammer.detection.current.lastEvent.direction;
                if (ev.drag_locked_to_axis && last_direction !== ev.direction) {
                    if (Hammer.utils.isVertical(last_direction)) {
                        ev.direction = (ev.deltaY < 0) ? Hammer.DIRECTION_UP : Hammer.DIRECTION_DOWN;
                    } else {
                        ev.direction = (ev.deltaX < 0) ? Hammer.DIRECTION_LEFT : Hammer.DIRECTION_RIGHT;
                    }
                }
                if (!this.triggered) {
                    inst.trigger(this.name + 'start', ev);
                    this.triggered = true;
                }
                inst.trigger(this.name, ev);
                inst.trigger(this.name + ev.direction, ev);
                if ((inst.options.drag_block_vertical && Hammer.utils.isVertical(ev.direction)) || (inst.options.drag_block_horizontal && !Hammer.utils.isVertical(ev.direction))) {
                    ev.preventDefault();
                }
                break;
            case Hammer.EVENT_END:
                if (this.triggered) {
                    inst.trigger(this.name + 'end', ev);
                }
                this.triggered = false;
                break;
            }
        }
    };
    Hammer.gestures.Hold = {
        name: 'hold',
        index: 10,
        defaults: {
            hold_timeout: 500,
            hold_threshold: 1
        },
        timer: null,
        handler: function holdGesture(ev, inst) {
            switch (ev.eventType) {
            case Hammer.EVENT_START:
                clearTimeout(this.timer);
                Hammer.detection.current.name = this.name;
                this.timer = setTimeout(function() {
                    if (Hammer.detection.current.name == 'hold') {
                        inst.trigger('hold', ev);
                    }
                }, inst.options.hold_timeout);
                break;
            case Hammer.EVENT_MOVE:
                if (ev.distance > inst.options.hold_threshold) {
                    clearTimeout(this.timer);
                }
                break;
            case Hammer.EVENT_END:
                clearTimeout(this.timer);
                break;
            }
        }
    };
    Hammer.gestures.Release = {
        name: 'release',
        index: Infinity,
        handler: function releaseGesture(ev, inst) {
            if (ev.eventType == Hammer.EVENT_END) {
                inst.trigger(this.name, ev);
            }
        }
    };
    Hammer.gestures.Swipe = {
        name: 'swipe',
        index: 40,
        defaults: {
            swipe_min_touches: 1,
            swipe_max_touches: 1,
            swipe_velocity: 0.7
        },
        handler: function swipeGesture(ev, inst) {
            if (ev.eventType == Hammer.EVENT_END) {
                if (inst.options.swipe_max_touches > 0 && ev.touches.length < inst.options.swipe_min_touches && ev.touches.length > inst.options.swipe_max_touches) {
                    return;
                }
                if (ev.velocityX > inst.options.swipe_velocity || ev.velocityY > inst.options.swipe_velocity) {
                    inst.trigger(this.name, ev);
                    inst.trigger(this.name + ev.direction, ev);
                }
            }
        }
    };
    Hammer.gestures.Tap = {
        name: 'tap',
        index: 100,
        defaults: {
            tap_max_touchtime: 250,
            tap_max_distance: 10,
            tap_always: true,
            doubletap_distance: 20,
            doubletap_interval: 300
        },
        handler: function tapGesture(ev, inst) {
            if (ev.eventType == Hammer.EVENT_END && ev.srcEvent.type != 'touchcancel') {
                var prev = Hammer.detection.previous
                  , did_doubletap = false;
                if (ev.deltaTime > inst.options.tap_max_touchtime || ev.distance > inst.options.tap_max_distance) {
                    return;
                }
                if (prev && prev.name == 'tap' && (ev.timeStamp - prev.lastEvent.timeStamp) < inst.options.doubletap_interval && ev.distance < inst.options.doubletap_distance) {
                    inst.trigger('doubletap', ev);
                    did_doubletap = true;
                }
                if (!did_doubletap || inst.options.tap_always) {
                    Hammer.detection.current.name = 'tap';
                    inst.trigger(Hammer.detection.current.name, ev);
                }
            }
        }
    };
    Hammer.gestures.Touch = {
        name: 'touch',
        index: -Infinity,
        defaults: {
            prevent_default: false,
            prevent_mouseevents: false
        },
        handler: function touchGesture(ev, inst) {
            if (inst.options.prevent_mouseevents && ev.pointerType == Hammer.POINTER_MOUSE) {
                ev.stopDetect();
                return;
            }
            if (inst.options.prevent_default) {
                ev.preventDefault();
            }
            if (ev.eventType == Hammer.EVENT_START) {
                inst.trigger(this.name, ev);
            }
        }
    };
    Hammer.gestures.Transform = {
        name: 'transform',
        index: 45,
        defaults: {
            transform_min_scale: 0.01,
            transform_min_rotation: 1,
            transform_always_block: false
        },
        triggered: false,
        handler: function transformGesture(ev, inst) {
            if (Hammer.detection.current.name != this.name && this.triggered) {
                inst.trigger(this.name + 'end', ev);
                this.triggered = false;
                return;
            }
            if (ev.touches.length < 2) {
                return;
            }
            if (inst.options.transform_always_block) {
                ev.preventDefault();
            }
            switch (ev.eventType) {
            case Hammer.EVENT_START:
                this.triggered = false;
                break;
            case Hammer.EVENT_MOVE:
                var scale_threshold = Math.abs(1 - ev.scale);
                var rotation_threshold = Math.abs(ev.rotation);
                if (scale_threshold < inst.options.transform_min_scale && rotation_threshold < inst.options.transform_min_rotation) {
                    return;
                }
                Hammer.detection.current.name = this.name;
                if (!this.triggered) {
                    inst.trigger(this.name + 'start', ev);
                    this.triggered = true;
                }
                inst.trigger(this.name, ev);
                if (rotation_threshold > inst.options.transform_min_rotation) {
                    inst.trigger('rotate', ev);
                }
                if (scale_threshold > inst.options.transform_min_scale) {
                    inst.trigger('pinch', ev);
                    inst.trigger('pinch' + ((ev.scale < 1) ? 'in' : 'out'), ev);
                }
                break;
            case Hammer.EVENT_END:
                if (this.triggered) {
                    inst.trigger(this.name + 'end', ev);
                }
                this.triggered = false;
                break;
            }
        }
    };
    if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
        define(function() {
            return Hammer;
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = Hammer;
    } else {
        window.Hammer = Hammer;
    }
}
)(this);
/*! jQuery plugin for Hammer.JS - v1.0.0 - 2014-01-02
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2014 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */
(function(window, undefined) {
    'use strict';
    function setup(Hammer, $) {
        Hammer.event.bindDom = function(element, eventTypes, handler) {
            $(element).on(eventTypes, function(ev) {
                var data = ev.originalEvent || ev;
                if (data.pageX === undefined) {
                    data.pageX = ev.pageX;
                    data.pageY = ev.pageY;
                }
                if (!data.target) {
                    data.target = ev.target;
                }
                if (data.which === undefined) {
                    data.which = data.button;
                }
                if (!data.preventDefault) {
                    data.preventDefault = ev.preventDefault;
                }
                if (!data.stopPropagation) {
                    data.stopPropagation = ev.stopPropagation;
                }
                handler.call(this, data);
            });
        }
        ;
        Hammer.Instance.prototype.on = function(types, handler) {
            return $(this.element).on(types, handler);
        }
        ;
        Hammer.Instance.prototype.off = function(types, handler) {
            return $(this.element).off(types, handler);
        }
        ;
        Hammer.Instance.prototype.trigger = function(gesture, eventData) {
            var el = $(this.element);
            if (el.has(eventData.target).length) {
                el = $(eventData.target);
            }
            return el.trigger({
                type: gesture,
                gesture: eventData
            });
        }
        ;
        $.fn.hammer = function(options) {
            return this.each(function() {
                var el = $(this);
                var inst = el.data('hammer');
                if (!inst) {
                    el.data('hammer', new Hammer(this,options || {}));
                } else if (inst && options) {
                    Hammer.utils.extend(inst.options, options);
                }
            });
        }
        ;
    }
    if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
        define(['hammer', 'jquery'], setup);
    } else {
        setup(window.Hammer, window.jQuery || window.Zepto);
    }
}
)(this);
;function adjustOldSwiperToNewApi(mySwiper) {
    if (!mySwiper.slidePrev || !mySwiper.slideNext) {
        mySwiper.slidePrev = function() {
            this.slideToIndex(this.activeIndex - 1);
        }
        ;
        mySwiper.slideNext = function() {
            this.slideToIndex(this.activeIndex + 1);
        }
        ;
        mySwiper.slideToIndex = function(i) {
            var sl = $('.' + this.params.slideClass, this.container);
            var n = sl.length;
            i = parseInt(i) || 0;
            if (i < 0)
                i = 0;
            else if (i >= n)
                i = n - 1;
            this.activeIndex = i;
            var as = sl.eq(i);
            sl.removeClass(this.params.slideActiveClass);
            as.addClass(this.params.slideActiveClass);
            if (this.params.pagination) {
                var pl = $('.' + this.params.paginationElementClass, this.params.pagination);
                pl.removeClass(this.params.paginationActiveClass);
                pl.eq(i).addClass(this.params.paginationActiveClass);
            }
            this.fireCallback('SlideNext', this);
            this.fireCallback('SlideChangeStart', this);
        }
        ;
        mySwiper.swipeTo = function(i) {
            this.slideToIndex(i);
        }
        ;
        mySwiper.slideTo = mySwiper.swipeTo;
        mySwiper.swipeNext = mySwiper.slideNext;
        mySwiper.swipePrev = mySwiper.slidePrev;
        var oldAppendSlide = mySwiper.appendSlide;
        mySwiper.appendSlide = function(html) {
            if (typeof html === 'string') {
                html = $(html)[0];
            }
            return oldAppendSlide(html);
        }
    }
    if (!mySwiper.on) {
        mySwiper.on = function(ev, fn) {
            var ev2 = ev;
            if (ev == 'SlideNextStart')
                ev2 = 'SlideNext';
            this.addCallback(ev2, fn);
        }
    }
    ;if (!mySwiper.update) {
        mySwiper.update = function() {}
    }
    ;
}
(function() {
    var method;
    var noop = function noop() {};
    var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
    var length = methods.length;
    var console = (window.console = window.console || {});
    while (length--) {
        method = methods[length];
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());
(function(root, doc, factory) {
    if (typeof define === "function" && define.amd) {
        define(["underscore", "postal"], function(_, postal) {
            return factory(_, postal, root, doc);
        });
    } else {
        factory(root._, root.postal, root, doc);
    }
}(this, document, function(_, postal, global, document, undefined) {
    var ForkJoin = function(queue, onSuccess, onError, options) {
        var self = this, _onError = (Object.prototype.toString.call(onError) === "[object Function]") ? onError : function() {}
        , _options = (Object.prototype.toString.call(onError) === "[object Object]") ? onError : options || {}, _subscriptions = [], _timeoutFn, _startTimeOut = function() {
            if (_options && _options.timeout) {
                _timeoutFn = setTimeout(function() {
                    _onError({
                        type: "timeout",
                        data: _.pluck(_subscriptions, "data")
                    });
                }, _options.timeout);
            }
        }, _reset = function() {
            _.each(_subscriptions, function(sub) {
                sub.data = undefined;
            });
        }, _checkFired = function() {
            var _data = _.pluck(_subscriptions, "data"), _fn;
            if (_.all(_data, _.identity)) {
                clearTimeout(_timeoutFn);
                onSuccess.apply(this, _data);
                if (_options && _options.once) {
                    self.dispose();
                } else {
                    _reset();
                    _startTimeOut();
                }
            }
        };
        self.dispose = function() {
            _.each(_subscriptions, function(sub) {
                sub.unsubscribe();
            });
            _subscriptions = [];
        }
        ;
        _.each(queue, function(sub) {
            var subscriptionDefinition = postal.subscribe(sub);
            subscriptionDefinition.data = undefined;
            subscriptionDefinition.subscribe(function(data) {
                subscriptionDefinition.data = data;
                _checkFired();
            });
            _subscriptions.push(subscriptionDefinition);
        });
        _startTimeOut();
    };
    postal.when = function(queue, onSuccess, onError, options) {
        return new ForkJoin(queue,onSuccess,onError,options);
    }
    ;
}));
Modernizr.addTest('hires', function() {
    var dpr = window.devicePixelRatio || (window.screen.deviceXDPI / window.screen.logicalXDPI) || 1;
    return !!(dpr > 1);
});
function ScaleImage(srcwidth, srcheight, targetwidth, targetheight, fLetterBox, bigger) {
    var fLetterBox = true;
    var bigger = false;
    var result = {
        width: 0,
        height: 0,
        fScaleToTargetWidth: true
    };
    if ((srcwidth <= 0) || (srcheight <= 0) || (targetwidth <= 0) || (targetheight <= 0)) {
        return result;
    }
    var scaleX1 = targetwidth;
    var scaleY1 = (srcheight * targetwidth) / srcwidth;
    var scaleX2 = (srcwidth * targetheight) / srcheight;
    var scaleY2 = targetheight;
    var fScaleOnWidth = (scaleX2 > targetwidth);
    if (fScaleOnWidth) {
        fScaleOnWidth = fLetterBox;
    } else {
        fScaleOnWidth = !fLetterBox;
    }
    if (fScaleOnWidth) {
        result.width = Math.floor(scaleX1);
        result.height = Math.floor(scaleY1);
        result.fScaleToTargetWidth = true;
    } else {
        result.width = Math.floor(scaleX2);
        result.height = Math.floor(scaleY2);
        result.fScaleToTargetWidth = false;
    }
    if (!bigger) {
        result.width = result.width > srcwidth ? srcwidth : result.width;
        result.height = result.height > srcheight ? srcheight : result.height;
    }
    result.targetleft = Math.floor((targetwidth - result.width) / 2);
    result.targettop = Math.floor((targetheight - result.height) / 2);
    return result;
}
(function(global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(global.jQuery);
    }
}(this, function($) {
    'use strict';
    var touchHook = {
        props: ['touches', 'pageX', 'pageY', 'clientX', 'clientY'],
        filter: function(event, originalEvent) {
            var touch;
            if (!originalEvent.pageX && originalEvent.touches && (touch = originalEvent.touches[0])) {
                event.pageX = touch.pageX;
                event.pageY = touch.pageY;
                event.clientX = touch.clientX;
                event.clientY = touch.clientY;
            }
            return event;
        }
    };
    $.each(['touchstart', 'touchmove', 'touchend'], function(i, name) {
        $.event.fixHooks[name] = touchHook;
    });
    var pointerEvents = !!window.PointerEvent;
    if (pointerEvents) {
        var pointerHook = {
            props: ['pageX', 'pageY', 'clientX', 'clientY']
        };
        $.each(['pointerdown', 'pointermove', 'pointerup'], function(i, name) {
            $.event.fixHooks[name] = pointerHook;
        });
    }
    var datakey = '__pz__';
    var slice = Array.prototype.slice;
    var rupper = /([A-Z])/g;
    var rsvg = /^http:[\w\.\/]+svg$/;
    var rinline = /^inline/;
    var floating = '(\\-?[\\d\\.e]+)';
    var commaSpace = '\\,?\\s*';
    var rmatrix = new RegExp('^matrix\\(' + floating + commaSpace + floating + commaSpace + floating + commaSpace + floating + commaSpace + floating + commaSpace + floating + '\\)$');
    function matrixEquals(first, second) {
        var i = first.length;
        while (--i) {
            if (+first[i] !== +second[i]) {
                return false;
            }
        }
        return true;
    }
    function createResetOptions(opts) {
        var options = {
            range: true,
            animate: true
        };
        if (typeof opts === 'boolean') {
            options.animate = opts;
        } else {
            $.extend(options, opts);
        }
        return options;
    }
    function Matrix(a, b, c, d, e, f, g, h, i) {
        if ($.type(a) === 'array') {
            this.elements = [+a[0], +a[2], +a[4], +a[1], +a[3], +a[5], 0, 0, 1];
        } else {
            this.elements = [a, b, c, d, e, f, g || 0, h || 0, i || 1];
        }
    }
    Matrix.prototype = {
        x: function(matrix) {
            var isVector = matrix instanceof Vector;
            var a = this.elements
              , b = matrix.elements;
            if (isVector && b.length === 3) {
                return new Vector(a[0] * b[0] + a[1] * b[1] + a[2] * b[2],a[3] * b[0] + a[4] * b[1] + a[5] * b[2],a[6] * b[0] + a[7] * b[1] + a[8] * b[2]);
            } else if (b.length === a.length) {
                return new Matrix(a[0] * b[0] + a[1] * b[3] + a[2] * b[6],a[0] * b[1] + a[1] * b[4] + a[2] * b[7],a[0] * b[2] + a[1] * b[5] + a[2] * b[8],a[3] * b[0] + a[4] * b[3] + a[5] * b[6],a[3] * b[1] + a[4] * b[4] + a[5] * b[7],a[3] * b[2] + a[4] * b[5] + a[5] * b[8],a[6] * b[0] + a[7] * b[3] + a[8] * b[6],a[6] * b[1] + a[7] * b[4] + a[8] * b[7],a[6] * b[2] + a[7] * b[5] + a[8] * b[8]);
            }
            return false;
        },
        inverse: function() {
            var d = 1 / this.determinant()
              , a = this.elements;
            return new Matrix(d * (a[8] * a[4] - a[7] * a[5]),d * (-(a[8] * a[1] - a[7] * a[2])),d * (a[5] * a[1] - a[4] * a[2]),d * (-(a[8] * a[3] - a[6] * a[5])),d * (a[8] * a[0] - a[6] * a[2]),d * (-(a[5] * a[0] - a[3] * a[2])),d * (a[7] * a[3] - a[6] * a[4]),d * (-(a[7] * a[0] - a[6] * a[1])),d * (a[4] * a[0] - a[3] * a[1]));
        },
        determinant: function() {
            var a = this.elements;
            return a[0] * (a[8] * a[4] - a[7] * a[5]) - a[3] * (a[8] * a[1] - a[7] * a[2]) + a[6] * (a[5] * a[1] - a[4] * a[2]);
        }
    };
    function Vector(x, y, z) {
        this.elements = [x, y, z];
    }
    Vector.prototype.e = Matrix.prototype.e = function(i) {
        return this.elements[i];
    }
    ;
    function Panzoom(elem, options) {
        if (!(this instanceof Panzoom)) {
            return new Panzoom(elem,options);
        }
        if (elem.nodeType !== 1) {
            $.error('Panzoom called on non-Element node');
        }
        if (!$.contains(document, elem)) {
            $.error('Panzoom element must be attached to the document');
        }
        var d = $.data(elem, datakey);
        if (d) {
            return d;
        }
        this.options = options = $.extend({}, Panzoom.defaults, options);
        this.elem = elem;
        var $elem = this.$elem = $(elem);
        this.$set = options.$set && options.$set.length ? options.$set : $elem;
        this.$doc = $(elem.ownerDocument || document);
        this.$parent = $elem.parent();
        this.isSVG = rsvg.test(elem.namespaceURI) && elem.nodeName.toLowerCase() !== 'svg';
        this.panning = false;
        this._buildTransform();
        if (!this.isSVG) {
            this._transform = $.cssProps.transform.replace(rupper, '-$1').toLowerCase();
        }
        this._buildTransition();
        this.resetDimensions();
        var $empty = $();
        var self = this;
        $.each(['$zoomIn', '$zoomOut', '$zoomRange', '$reset'], function(i, name) {
            self[name] = options[name] || $empty;
        });
        this.enable();
        $.data(elem, datakey, this);
    }
    Panzoom.rmatrix = rmatrix;
    Panzoom.defaults = {
        eventNamespace: '.panzoom',
        transition: true,
        cursor: 'move',
        disablePan: false,
        disableZoom: false,
        increment: 0.3,
        minScale: 0.4,
        maxScale: 5,
        rangeStep: 0.05,
        duration: 200,
        easing: 'ease-in-out',
        contain: false
    };
    Panzoom.prototype = {
        constructor: Panzoom,
        instance: function() {
            return this;
        },
        enable: function() {
            this._initStyle();
            this._bind();
            this.disabled = false;
        },
        disable: function() {
            this.disabled = true;
            this._resetStyle();
            this._unbind();
        },
        isDisabled: function() {
            return this.disabled;
        },
        destroy: function() {
            this.disable();
            $.removeData(this.elem, datakey);
        },
        resetDimensions: function() {
            var $parent = this.$parent;
            this.container = {
                width: $parent.width(),
                height: $parent.height()
            };
            var elem = this.elem;
            var $elem = this.$elem;
            var dims = this.dimensions = this.isSVG ? {
                left: elem.getAttribute('x') || 0,
                top: elem.getAttribute('y') || 0,
                width: elem.getAttribute('width') || $elem.outerWidth(),
                height: elem.getAttribute('height') || $elem.outerHeight(),
                margin: {
                    left: 0,
                    top: 0
                }
            } : {
                left: $.css(elem, 'left', true) || 0,
                top: $.css(elem, 'top', true) || 0,
                width: $elem.outerWidth(),
                height: $elem.outerHeight(),
                margin: {
                    top: $.css(elem, 'marginTop', true) || 0,
                    left: $.css(elem, 'marginLeft', true) || 0
                }
            };
            dims.widthBorder = ($.css(elem, 'borderLeftWidth', true) + $.css(elem, 'borderRightWidth', true)) || 0;
            dims.heightBorder = ($.css(elem, 'borderTopWidth', true) + $.css(elem, 'borderBottomWidth', true)) || 0;
        },
        reset: function(options) {
            options = createResetOptions(options);
            var matrix = this.setMatrix(this._origTransform, options);
            if (!options.silent) {
                this._trigger('reset', matrix);
            }
        },
        resetZoom: function(options) {
            options = createResetOptions(options);
            var origMatrix = this.getMatrix(this._origTransform);
            options.dValue = origMatrix[3];
            this.zoom(origMatrix[0], options);
        },
        resetPan: function(options) {
            var origMatrix = this.getMatrix(this._origTransform);
            this.pan(origMatrix[4], origMatrix[5], createResetOptions(options));
        },
        setTransform: function(transform) {
            var method = this.isSVG ? 'attr' : 'style';
            var $set = this.$set;
            var i = $set.length;
            while (i) {
                $[method]($set[--i], 'transform', transform);
            }
        },
        getTransform: function(transform) {
            var transformElem = this.$set[0];
            if (transform) {
                this.setTransform(transform);
            } else {
                transform = $[this.isSVG ? 'attr' : 'style'](transformElem, 'transform');
            }
            if (transform !== 'none' && !rmatrix.test(transform) && !this.isSVG) {
                this.setTransform(transform = $.css(transformElem, 'transform'));
            }
            return transform || 'none';
        },
        getMatrix: function(transform) {
            var matrix = rmatrix.exec(transform || this.getTransform());
            if (matrix) {
                matrix.shift();
            }
            return matrix || [1, 0, 0, 1, 0, 0];
        },
        setMatrix: function(matrix, options) {
            if (this.disabled) {
                return;
            }
            if (!options) {
                options = {};
            }
            if (typeof matrix === 'string') {
                matrix = this.getMatrix(matrix);
            }
            var dims, container, marginW, marginH, diffW, diffH, left, top;
            var scale = +matrix[0];
            var $parent = this.$parent;
            var contain = typeof options.contain !== 'undefined' ? options.contain : this.options.contain;
            if (contain) {
                dims = this._checkDims();
                container = this.container;
                marginW = ((dims.width * scale) - container.width) / 2;
                marginH = ((dims.height * scale) - container.height) / 2;
                if (contain === 'invert') {
                    diffW = dims.width > container.width ? dims.width - container.width : 0;
                    diffH = dims.height > container.height ? dims.height - container.height : 0;
                    marginW += (container.width - dims.width) / 2;
                    marginH += (container.height - dims.height) / 2;
                    left = dims.left + dims.margin.left;
                    top = dims.top + dims.margin.top;
                    matrix[4] = Math.max(Math.min(matrix[4], marginW - left), -marginW - left - diffW);
                    matrix[5] = Math.max(Math.min(matrix[5], marginH - top), -marginH - top - diffH + dims.heightBorder);
                } else {
                    diffH = container.height > dims.height ? container.height - dims.height : 0;
                    if ($parent.css('textAlign') !== 'center' || !rinline.test($.css(this.elem, 'display'))) {
                        diffW = container.width > dims.width ? container.width - dims.width : 0;
                        marginW = marginH = 0;
                    } else {
                        diffW = 0;
                    }
                    matrix[4] = Math.min(Math.max(matrix[4], marginW - dims.left), -marginW - dims.left + diffW);
                    matrix[5] = Math.min(Math.max(matrix[5], marginH - dims.top), -marginH - dims.top + diffH);
                }
            }
            if (options.animate !== 'skip') {
                this.transition(!options.animate);
            }
            if (options.range) {
                this.$zoomRange.val(scale);
            }
            this.setTransform('matrix(' + matrix.join(',') + ')');
            if (!options.silent) {
                this._trigger('change', matrix);
            }
            return matrix;
        },
        isPanning: function() {
            return this.panning;
        },
        transition: function(off) {
            var transition = off || !this.options.transition ? 'none' : this._transition;
            var $set = this.$set;
            var i = $set.length;
            while (i) {
                if ($.style($set[--i], 'transition') !== transition) {
                    $.style($set[i], 'transition', transition);
                }
            }
        },
        pan: function(x, y, options) {
            if (this.options.disablePan) {
                return;
            }
            if (!options) {
                options = {};
            }
            var matrix = options.matrix;
            if (!matrix) {
                matrix = this.getMatrix();
            }
            if (options.relative) {
                x += +matrix[4];
                y += +matrix[5];
            }
            matrix[4] = x;
            matrix[5] = y;
            this.setMatrix(matrix, options);
            if (!options.silent) {
                this._trigger('pan', x, y);
            }
        },
        zoom: function(scale, opts) {
            if (typeof scale === 'object') {
                opts = scale;
                scale = null;
            } else if (!opts) {
                opts = {};
            }
            var options = $.extend({}, this.options, opts);
            if (options.disableZoom) {
                return;
            }
            var animate = false;
            var matrix = options.matrix || this.getMatrix();
            if (typeof scale !== 'number') {
                scale = +matrix[0] + (options.increment * (scale ? -1 : 1));
                animate = true;
            }
            if (scale > options.maxScale) {
                scale = options.maxScale;
            } else if (scale < options.minScale) {
                scale = options.minScale;
            }
            var focal = options.focal;
            if (focal && !options.disablePan) {
                animate = false;
                var dims = this._checkDims();
                var clientX = focal.clientX - dims.width / 2;
                var clientY = focal.clientY - dims.height / 2;
                var clientV = new Vector(clientX,clientY,1);
                var surfaceM = new Matrix(matrix);
                var o = this.$parent.offset();
                var offsetM = new Matrix(1,0,o.left - this.$doc.scrollLeft(),0,1,o.top - this.$doc.scrollTop());
                var surfaceV = surfaceM.inverse().x(offsetM.inverse().x(clientV));
                var scaleBy = scale / matrix[0];
                surfaceM = surfaceM.x(new Matrix([scaleBy, 0, 0, scaleBy, 0, 0]));
                clientV = offsetM.x(surfaceM.x(surfaceV));
                matrix[4] = +matrix[4] + (clientX - clientV.e(0));
                matrix[5] = +matrix[5] + (clientY - clientV.e(1));
            }
            matrix[0] = scale;
            matrix[3] = typeof options.dValue === 'number' ? options.dValue : scale;
            this.setMatrix(matrix, {
                animate: typeof options.animate === 'boolean' ? options.animate : animate,
                range: !options.noSetRange
            });
            if (!options.silent) {
                this._trigger('zoom', scale, options);
            }
        },
        option: function(key, value) {
            var options;
            if (!key) {
                return $.extend({}, this.options);
            }
            if (typeof key === 'string') {
                if (arguments.length === 1) {
                    return this.options[key] !== undefined ? this.options[key] : null;
                }
                options = {};
                options[key] = value;
            } else {
                options = key;
            }
            this._setOptions(options);
        },
        _setOptions: function(options) {
            $.each(options, $.proxy(function(key, value) {
                switch (key) {
                case 'disablePan':
                    this._resetStyle();
                case '$zoomIn':
                case '$zoomOut':
                case '$zoomRange':
                case '$reset':
                case 'disableZoom':
                case 'onStart':
                case 'onChange':
                case 'onZoom':
                case 'onPan':
                case 'onEnd':
                case 'onReset':
                case 'eventNamespace':
                    this._unbind();
                }
                this.options[key] = value;
                switch (key) {
                case 'disablePan':
                    this._initStyle();
                case '$zoomIn':
                case '$zoomOut':
                case '$zoomRange':
                case '$reset':
                    this[key] = value;
                case 'disableZoom':
                case 'onStart':
                case 'onChange':
                case 'onZoom':
                case 'onPan':
                case 'onEnd':
                case 'onReset':
                case 'eventNamespace':
                    this._bind();
                    break;
                case 'cursor':
                    $.style(this.elem, 'cursor', value);
                    break;
                case 'minScale':
                    this.$zoomRange.attr('min', value);
                    break;
                case 'maxScale':
                    this.$zoomRange.attr('max', value);
                    break;
                case 'rangeStep':
                    this.$zoomRange.attr('step', value);
                    break;
                case 'startTransform':
                    this._buildTransform();
                    break;
                case 'duration':
                case 'easing':
                    this._buildTransition();
                case 'transition':
                    this.transition();
                    break;
                case '$set':
                    if (value instanceof $ && value.length) {
                        this.$set = value;
                    }
                }
            }, this));
        },
        _initStyle: function() {
            if (!this.options.disablePan) {
                this.$elem.css('cursor', this.options.cursor);
            }
            var $parent = this.$parent;
            if ($parent.length && !$.nodeName($parent[0], 'body')) {
                var parentStyles = {
                    overflow: 'hidden'
                };
                if ($parent.css('position') === 'static') {
                    parentStyles.position = 'relative';
                }
                $parent.css(parentStyles);
            }
        },
        _resetStyle: function() {
            this.$elem.css({
                'cursor': '',
                'transition': ''
            });
            this.$parent.css({
                'overflow': '',
                'position': ''
            });
        },
        _bind: function() {
            var self = this;
            var options = this.options;
            var ns = options.eventNamespace;
            var str_start = pointerEvents ? 'pointerdown' + ns : ('touchstart' + ns + ' mousedown' + ns);
            var str_click = pointerEvents ? 'pointerup' + ns : ('touchend' + ns + ' click' + ns);
            var events = {};
            var $reset = this.$reset;
            var $zoomRange = this.$zoomRange;
            $.each(['Start', 'Change', 'Zoom', 'Pan', 'End', 'Reset'], function() {
                var m = options['on' + this];
                if ($.isFunction(m)) {
                    events['panzoom' + this.toLowerCase() + ns] = m;
                }
            });
            if (!options.disablePan || !options.disableZoom) {
                events[str_start] = function(e) {
                    var touches;
                    if (e.type === 'touchstart' ? (touches = e.touches) && ((touches.length === 1 && !options.disablePan) || touches.length === 2) : !options.disablePan && e.which === 1) {
                        e.preventDefault();
                        e.stopPropagation();
                        self._startMove(e, touches);
                    }
                }
                ;
            }
            this.$elem.on(events);
            if ($reset.length) {
                $reset.on(str_click, function(e) {
                    e.preventDefault();
                    self.reset();
                });
            }
            if ($zoomRange.length) {
                $zoomRange.attr({
                    step: options.rangeStep === Panzoom.defaults.rangeStep && $zoomRange.attr('step') || options.rangeStep,
                    min: options.minScale,
                    max: options.maxScale
                }).prop({
                    value: this.getMatrix()[0]
                });
            }
            if (options.disableZoom) {
                return;
            }
            var $zoomIn = this.$zoomIn;
            var $zoomOut = this.$zoomOut;
            if ($zoomIn.length && $zoomOut.length) {
                $zoomIn.on(str_click, function(e) {
                    e.preventDefault();
                    self.zoom();
                });
                $zoomOut.on(str_click, function(e) {
                    e.preventDefault();
                    self.zoom(true);
                });
            }
            if ($zoomRange.length) {
                events = {};
                events[(pointerEvents ? 'pointerdown' : 'mousedown') + ns] = function() {
                    self.transition(true);
                }
                ;
                events['change' + ns] = function() {
                    self.zoom(+this.value, {
                        noSetRange: true
                    });
                }
                ;
                $zoomRange.on(events);
            }
        },
        _unbind: function() {
            this.$elem.add(this.$zoomIn).add(this.$zoomOut).add(this.$reset).off(this.options.eventNamespace);
        },
        _buildTransform: function() {
            return this._origTransform = this.getTransform(this.options.startTransform);
        },
        _buildTransition: function() {
            var options = this.options;
            if (this._transform) {
                this._transition = this._transform + ' ' + options.duration + 'ms ' + options.easing;
            }
        },
        _checkDims: function() {
            var dims = this.dimensions;
            if (dims.width === dims.widthBorder || dims.height === dims.heightBorder) {
                this.resetDimensions();
            }
            return this.dimensions;
        },
        _getDistance: function(touches) {
            var touch1 = touches[0];
            var touch2 = touches[1];
            return Math.sqrt(Math.pow(Math.abs(touch2.clientX - touch1.clientX), 2) + Math.pow(Math.abs(touch2.clientY - touch1.clientY), 2));
        },
        _getMiddle: function(touches) {
            var touch1 = touches[0];
            var touch2 = touches[1];
            return {
                clientX: ((touch2.clientX - touch1.clientX) / 2) + touch1.clientX,
                clientY: ((touch2.clientY - touch1.clientY) / 2) + touch1.clientY
            };
        },
        _trigger: function(event) {
            if (typeof event === 'string') {
                event = 'panzoom' + event;
            }
            this.$elem.triggerHandler(event, [this].concat(slice.call(arguments, 1)));
        },
        _startMove: function(event, touches) {
            var move, moveEvent, endEvent, startDistance, startScale, startMiddle, startPageX, startPageY;
            var self = this;
            var options = this.options;
            var ns = options.eventNamespace;
            var matrix = this.getMatrix();
            var original = matrix.slice(0);
            var origPageX = +original[4];
            var origPageY = +original[5];
            var panOptions = {
                matrix: matrix,
                animate: 'skip'
            };
            if (pointerEvents) {
                moveEvent = 'pointermove';
                endEvent = 'pointerup';
            } else if (event.type === 'touchstart') {
                moveEvent = 'touchmove';
                endEvent = 'touchend';
            } else {
                moveEvent = 'mousemove';
                endEvent = 'mouseup';
            }
            moveEvent += ns;
            endEvent += ns;
            this.transition(true);
            this.panning = true;
            this._trigger('start', event, touches);
            if (touches && touches.length === 2) {
                startDistance = this._getDistance(touches);
                startScale = +matrix[0];
                startMiddle = this._getMiddle(touches);
                move = function(e) {
                    e.preventDefault();
                    var middle = self._getMiddle(touches = e.touches);
                    var diff = self._getDistance(touches) - startDistance;
                    self.zoom(diff * (options.increment / 100) + startScale, {
                        focal: middle,
                        matrix: matrix
                    });
                    self.pan(+matrix[4] + middle.clientX - startMiddle.clientX, +matrix[5] + middle.clientY - startMiddle.clientY, panOptions);
                    startMiddle = middle;
                }
                ;
            } else {
                startPageX = event.pageX;
                startPageY = event.pageY;
                move = function(e) {
                    e.preventDefault();
                    self.pan(origPageX + e.pageX - startPageX, origPageY + e.pageY - startPageY, panOptions);
                }
                ;
            }
            $(document).off(ns).on(moveEvent, move).on(endEvent, function(e) {
                e.preventDefault();
                $(this).off(ns);
                self.panning = false;
                e.type = 'panzoomend';
                self._trigger(e, matrix, !matrixEquals(matrix, original));
            });
        }
    };
    $.fn.panzoom = function(options) {
        var instance, args, m, ret;
        if (typeof options === 'string') {
            ret = [];
            args = slice.call(arguments, 1);
            this.each(function() {
                instance = $.data(this, datakey);
                if (!instance) {
                    ret.push(undefined);
                } else if (options.charAt(0) !== '_' && typeof (m = instance[options]) === 'function' && (m = m.apply(instance, args)) !== undefined) {
                    ret.push(m);
                }
            });
            return ret.length ? (ret.length === 1 ? ret[0] : ret) : this;
        }
        return this.each(function() {
            new Panzoom(this,options);
        });
    }
    ;
    return Panzoom;
}));
(function(root, factory) {
    if (typeof exports == 'object')
        module.exports = factory()
    else if (typeof define == 'function' && define.amd)
        define(factory)
    else
        root.Spinner = factory()
}(this, function() {
    "use strict";
    var prefixes = ['webkit', 'Moz', 'ms', 'O'], animations = {}, useCssAnimations
    function createEl(tag, prop) {
        var el = document.createElement(tag || 'div'), n
        for (n in prop)
            el[n] = prop[n]
        return el
    }
    function ins(parent) {
        for (var i = 1, n = arguments.length; i < n; i++)
            parent.appendChild(arguments[i])
        return parent
    }
    var sheet = (function() {
        var el = createEl('style', {
            type: 'text/css'
        })
        ins(document.getElementsByTagName('head')[0], el)
        return el.sheet || el.styleSheet
    }())
    function addAnimation(alpha, trail, i, lines) {
        var name = ['opacity', trail, ~~(alpha * 100), i, lines].join('-')
          , start = 0.01 + i / lines * 100
          , z = Math.max(1 - (1 - alpha) / trail * (100 - start), alpha)
          , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
          , pre = prefix && '-' + prefix + '-' || ''
        if (!animations[name]) {
            sheet.insertRule('@' + pre + 'keyframes ' + name + '{' + '0%{opacity:' + z + '}' + start + '%{opacity:' + alpha + '}' + (start + 0.01) + '%{opacity:1}' + (start + trail) % 100 + '%{opacity:' + alpha + '}' + '100%{opacity:' + z + '}' + '}', sheet.cssRules.length)
            animations[name] = 1
        }
        return name
    }
    function vendor(el, prop) {
        var s = el.style, pp, i
        prop = prop.charAt(0).toUpperCase() + prop.slice(1)
        for (i = 0; i < prefixes.length; i++) {
            pp = prefixes[i] + prop
            if (s[pp] !== undefined)
                return pp
        }
        if (s[prop] !== undefined)
            return prop
    }
    function css(el, prop) {
        for (var n in prop)
            el.style[vendor(el, n) || n] = prop[n]
        return el
    }
    function merge(obj) {
        for (var i = 1; i < arguments.length; i++) {
            var def = arguments[i]
            for (var n in def)
                if (obj[n] === undefined)
                    obj[n] = def[n]
        }
        return obj
    }
    function pos(el) {
        var o = {
            x: el.offsetLeft,
            y: el.offsetTop
        }
        while ((el = el.offsetParent))
            o.x += el.offsetLeft,
            o.y += el.offsetTop
        return o
    }
    function getColor(color, idx) {
        return typeof color == 'string' ? color : color[idx % color.length]
    }
    var defaults = {
        lines: 13,
        length: 4,
        width: 2,
        radius: 5,
        rotate: 0,
        corners: 1,
        color: '#3f424c',
        direction: 1,
        speed: 1,
        trail: 100,
        opacity: 1 / 4,
        fps: 20,
        zIndex: 1,
        className: 'spinner',
        top: 'auto',
        left: 'auto',
        position: 'relative'
    }
    function Spinner(o) {
        if (typeof this == 'undefined')
            return new Spinner(o)
        this.opts = merge(o || {}, Spinner.defaults, defaults)
    }
    Spinner.defaults = {}
    merge(Spinner.prototype, {
        spin: function(target) {
            this.stop()
            var self = this, o = self.opts, el = self.el = css(createEl(0, {
                className: o.className
            }), {
                position: o.position,
                width: 0,
                zIndex: o.zIndex
            }), mid = o.radius + o.length + o.width, ep, tp
            if (target) {
                target.insertBefore(el, target.firstChild || null)
                tp = pos(target)
                ep = pos(el)
                css(el, {
                    left: (o.left == 'auto' ? tp.x - ep.x + (target.offsetWidth >> 1) : parseInt(o.left, 10) + mid) + 'px',
                    top: (o.top == 'auto' ? tp.y - ep.y + (target.offsetHeight >> 1) : parseInt(o.top, 10) + mid) + 'px'
                })
            }
            el.setAttribute('role', 'progressbar')
            self.lines(el, self.opts)
            if (!useCssAnimations) {
                var i = 0, start = (o.lines - 1) * (1 - o.direction) / 2, alpha, fps = o.fps, f = fps / o.speed, ostep = (1 - o.opacity) / (f * o.trail / 100), astep = f / o.lines;
                (function anim() {
                    i++;
                    for (var j = 0; j < o.lines; j++) {
                        alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)
                        self.opacity(el, j * o.direction + start, alpha, o)
                    }
                    self.timeout = self.el && setTimeout(anim, ~~(1000 / fps))
                }
                )()
            }
            return self
        },
        stop: function() {
            var el = this.el
            if (el) {
                clearTimeout(this.timeout)
                if (el.parentNode)
                    el.parentNode.removeChild(el)
                this.el = undefined
            }
            return this
        },
        lines: function(el, o) {
            var i = 0, start = (o.lines - 1) * (1 - o.direction) / 2, seg
            function fill(color, shadow) {
                return css(createEl(), {
                    position: 'absolute',
                    width: (o.length + o.width) + 'px',
                    height: o.width + 'px',
                    background: color,
                    boxShadow: shadow,
                    transformOrigin: 'left',
                    transform: 'rotate(' + ~~(360 / o.lines * i + o.rotate) + 'deg) translate(' + o.radius + 'px' + ',0)',
                    borderRadius: (o.corners * o.width >> 1) + 'px'
                })
            }
            for (; i < o.lines; i++) {
                seg = css(createEl(), {
                    position: 'absolute',
                    top: 1 + ~(o.width / 2) + 'px',
                    transform: o.hwaccel ? 'translate3d(0,0,0)' : '',
                    opacity: o.opacity,
                    animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1 / o.speed + 's linear infinite'
                })
                if (o.shadow)
                    ins(seg, css(fill('#000', '0 0 4px ' + '#000'), {
                        top: 2 + 'px'
                    }))
                ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')))
            }
            return el
        },
        opacity: function(el, i, val) {
            if (i < el.childNodes.length)
                el.childNodes[i].style.opacity = val
        }
    })
    function initVML() {
        function vml(tag, attr) {
            return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
        }
        sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')
        Spinner.prototype.lines = function(el, o) {
            var r = o.length + o.width
              , s = 2 * r
            function grp() {
                return css(vml('group', {
                    coordsize: s + ' ' + s,
                    coordorigin: -r + ' ' + -r
                }), {
                    width: s,
                    height: s
                })
            }
            var margin = -(o.width + o.length) * 2 + 'px', g = css(grp(), {
                position: 'absolute',
                top: margin,
                left: margin
            }), i
            function seg(i, dx, filter) {
                ins(g, ins(css(grp(), {
                    rotation: 360 / o.lines * i + 'deg',
                    left: ~~dx
                }), ins(css(vml('roundrect', {
                    arcsize: o.corners
                }), {
                    width: r,
                    height: o.width,
                    left: o.radius,
                    top: -o.width >> 1,
                    filter: filter
                }), vml('fill', {
                    color: getColor(o.color, i),
                    opacity: o.opacity
                }), vml('stroke', {
                    opacity: 0
                }))))
            }
            if (o.shadow)
                for (i = 1; i <= o.lines; i++)
                    seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')
            for (i = 1; i <= o.lines; i++)
                seg(i)
            return ins(el, g)
        }
        Spinner.prototype.opacity = function(el, i, val, o) {
            var c = el.firstChild
            o = o.shadow && o.lines || 0
            if (c && i + o < c.childNodes.length) {
                c = c.childNodes[i + o];
                c = c && c.firstChild;
                c = c && c.firstChild
                if (c)
                    c.opacity = val
            }
        }
    }
    var probe = css(createEl('group'), {
        behavior: 'url(#default#VML)'
    })
    if (!vendor(probe, 'transform') && probe.adj)
        initVML()
    else
        useCssAnimations = vendor(probe, 'animation')
    return Spinner
}));
(function(factory) {
    if (typeof exports == 'object') {
        factory(require('jquery'), require('spin'))
    } else if (typeof define == 'function' && define.amd) {
        define(['jquery', 'spin'], factory)
    } else {
        if (!window.Spinner)
            throw new Error('Spin.js not present')
        factory(window.jQuery, window.Spinner)
    }
}(function($, Spinner) {
    $.fn.spin = function(opts, color) {
        return this.each(function() {
            var $this = $(this)
              , data = $this.data();
            if (data.spinner) {
                data.spinner.stop();
                delete data.spinner;
            }
            if (opts !== false) {
                opts = $.extend({
                    color: color || $this.css('color')
                }, $.fn.spin.presets[opts] || opts)
                data.spinner = new Spinner(opts).spin(this)
            }
        })
    }
    $.fn.spin.presets = {
        tiny: {
            lines: 8,
            length: 2,
            width: 2,
            radius: 3
        },
        small: {
            lines: 8,
            length: 4,
            width: 3,
            radius: 5
        },
        large: {
            lines: 10,
            length: 8,
            width: 4,
            radius: 8
        }
    }
}));
/*!
* @license PreloadJS
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2011-2013 gskinner.com, inc.
*
* Distributed under the terms of the MIT license.
* http://www.opensource.org/licenses/mit-license.html
*
* This notice shall be included in all copies or substantial portions of the Software.
*/
this.createjs = this.createjs || {};
(function() {
    "use strict";
    var s = createjs.PreloadJS = createjs.PreloadJS || {};
    s.version = "0.4.1";
    s.buildDate = "Tue, 04 Mar 2014 23:44:08 GMT";
}
)();
this.createjs = this.createjs || {};
(function() {
    "use strict";
    var Event = function(type, bubbles, cancelable) {
        this.initialize(type, bubbles, cancelable);
    };
    var p = Event.prototype;
    p.type = null;
    p.target = null;
    p.currentTarget = null;
    p.eventPhase = 0;
    p.bubbles = false;
    p.cancelable = false;
    p.timeStamp = 0;
    p.defaultPrevented = false;
    p.propagationStopped = false;
    p.immediatePropagationStopped = false;
    p.removed = false;
    p.initialize = function(type, bubbles, cancelable) {
        this.type = type;
        this.bubbles = bubbles;
        this.cancelable = cancelable;
        this.timeStamp = (new Date()).getTime();
    }
    ;
    p.preventDefault = function() {
        this.defaultPrevented = true;
    }
    ;
    p.stopPropagation = function() {
        this.propagationStopped = true;
    }
    ;
    p.stopImmediatePropagation = function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
    }
    ;
    p.remove = function() {
        this.removed = true;
    }
    ;
    p.clone = function() {
        return new Event(this.type,this.bubbles,this.cancelable);
    }
    ;
    p.toString = function() {
        return "[Event (type=" + this.type + ")]";
    }
    ;
    createjs.Event = Event;
}());
this.createjs = this.createjs || {};
(function() {
    "use strict";
    var EventDispatcher = function() {};
    var p = EventDispatcher.prototype;
    EventDispatcher.initialize = function(target) {
        target.addEventListener = p.addEventListener;
        target.on = p.on;
        target.removeEventListener = target.off = p.removeEventListener;
        target.removeAllEventListeners = p.removeAllEventListeners;
        target.hasEventListener = p.hasEventListener;
        target.dispatchEvent = p.dispatchEvent;
        target._dispatchEvent = p._dispatchEvent;
        target.willTrigger = p.willTrigger;
    }
    ;
    p._listeners = null;
    p._captureListeners = null;
    p.initialize = function() {}
    ;
    p.addEventListener = function(type, listener, useCapture) {
        var listeners;
        if (useCapture) {
            listeners = this._captureListeners = this._captureListeners || {};
        } else {
            listeners = this._listeners = this._listeners || {};
        }
        var arr = listeners[type];
        if (arr) {
            this.removeEventListener(type, listener, useCapture);
        }
        arr = listeners[type];
        if (!arr) {
            listeners[type] = [listener];
        } else {
            arr.push(listener);
        }
        return listener;
    }
    ;
    p.on = function(type, listener, scope, once, data, useCapture) {
        if (listener.handleEvent) {
            scope = scope || listener;
            listener = listener.handleEvent;
        }
        scope = scope || this;
        return this.addEventListener(type, function(evt) {
            listener.call(scope, evt, data);
            once && evt.remove();
        }, useCapture);
    }
    ;
    p.removeEventListener = function(type, listener, useCapture) {
        var listeners = useCapture ? this._captureListeners : this._listeners;
        if (!listeners) {
            return;
        }
        var arr = listeners[type];
        if (!arr) {
            return;
        }
        for (var i = 0, l = arr.length; i < l; i++) {
            if (arr[i] == listener) {
                if (l == 1) {
                    delete (listeners[type]);
                } else {
                    arr.splice(i, 1);
                }
                break;
            }
        }
    }
    ;
    p.off = p.removeEventListener;
    p.removeAllEventListeners = function(type) {
        if (!type) {
            this._listeners = this._captureListeners = null;
        } else {
            if (this._listeners) {
                delete (this._listeners[type]);
            }
            if (this._captureListeners) {
                delete (this._captureListeners[type]);
            }
        }
    }
    ;
    p.dispatchEvent = function(eventObj, target) {
        if (typeof eventObj == "string") {
            var listeners = this._listeners;
            if (!listeners || !listeners[eventObj]) {
                return false;
            }
            eventObj = new createjs.Event(eventObj);
        }
        eventObj.target = target || this;
        if (!eventObj.bubbles || !this.parent) {
            this._dispatchEvent(eventObj, 2);
        } else {
            var top = this
              , list = [top];
            while (top.parent) {
                list.push(top = top.parent);
            }
            var i, l = list.length;
            for (i = l - 1; i >= 0 && !eventObj.propagationStopped; i--) {
                list[i]._dispatchEvent(eventObj, 1 + (i == 0));
            }
            for (i = 1; i < l && !eventObj.propagationStopped; i++) {
                list[i]._dispatchEvent(eventObj, 3);
            }
        }
        return eventObj.defaultPrevented;
    }
    ;
    p.hasEventListener = function(type) {
        var listeners = this._listeners
          , captureListeners = this._captureListeners;
        return !!((listeners && listeners[type]) || (captureListeners && captureListeners[type]));
    }
    ;
    p.willTrigger = function(type) {
        var o = this;
        while (o) {
            if (o.hasEventListener(type)) {
                return true;
            }
            o = o.parent;
        }
        return false;
    }
    ;
    p.toString = function() {
        return "[EventDispatcher]";
    }
    ;
    p._dispatchEvent = function(eventObj, eventPhase) {
        var l, listeners = (eventPhase == 1) ? this._captureListeners : this._listeners;
        if (eventObj && listeners) {
            var arr = listeners[eventObj.type];
            if (!arr || !(l = arr.length)) {
                return;
            }
            eventObj.currentTarget = this;
            eventObj.eventPhase = eventPhase;
            eventObj.removed = false;
            arr = arr.slice();
            for (var i = 0; i < l && !eventObj.immediatePropagationStopped; i++) {
                var o = arr[i];
                if (o.handleEvent) {
                    o.handleEvent(eventObj);
                } else {
                    o(eventObj);
                }
                if (eventObj.removed) {
                    this.off(eventObj.type, o, eventPhase == 1);
                    eventObj.removed = false;
                }
            }
        }
    }
    ;
    createjs.EventDispatcher = EventDispatcher;
}());
this.createjs = this.createjs || {};
(function() {
    "use strict";
    createjs.indexOf = function(array, searchElement) {
        for (var i = 0, l = array.length; i < l; i++) {
            if (searchElement === array[i]) {
                return i;
            }
        }
        return -1;
    }
}());
this.createjs = this.createjs || {};
(function() {
    "use strict";
    createjs.proxy = function(method, scope) {
        var aArgs = Array.prototype.slice.call(arguments, 2);
        return function() {
            return method.apply(scope, Array.prototype.slice.call(arguments, 0).concat(aArgs));
        }
        ;
    }
}());
this.createjs = this.createjs || {};
(function() {
    "use strict";
    var AbstractLoader = function() {
        this.init();
    };
    AbstractLoader.prototype = new createjs.EventDispatcher();
    var p = AbstractLoader.prototype;
    var s = AbstractLoader;
    s.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?)|(.{0,2}\/{1}))?([/.]*?(?:[^?]+)?\/)?((?:[^/?]+)\.(\w+))(?:\?(\S+)?)?$/;
    s.PATH_PATTERN = /^(?:(\w+:)\/{2})|(.{0,2}\/{1})?([/.]*?(?:[^?]+)?\/?)?$/;
    p.loaded = false;
    p.canceled = false;
    p.progress = 0;
    p._item = null;
    p.getItem = function() {
        return this._item;
    }
    ;
    p.init = function() {}
    ;
    p.load = function() {}
    ;
    p.close = function() {}
    ;
    p._sendLoadStart = function() {
        if (this._isCanceled()) {
            return;
        }
        this.dispatchEvent("loadstart");
    }
    ;
    p._sendProgress = function(value) {
        if (this._isCanceled()) {
            return;
        }
        var event = null;
        if (typeof (value) == "number") {
            this.progress = value;
            event = new createjs.Event("progress");
            event.loaded = this.progress;
            event.total = 1;
        } else {
            event = value;
            this.progress = value.loaded / value.total;
            if (isNaN(this.progress) || this.progress == Infinity) {
                this.progress = 0;
            }
        }
        event.progress = this.progress;
        this.hasEventListener("progress") && this.dispatchEvent(event);
    }
    ;
    p._sendComplete = function() {
        if (this._isCanceled()) {
            return;
        }
        this.dispatchEvent("complete");
    }
    ;
    p._sendError = function(event) {
        if (this._isCanceled() || !this.hasEventListener("error")) {
            return;
        }
        if (event == null) {
            event = new createjs.Event("error");
        }
        this.dispatchEvent(event);
    }
    ;
    p._isCanceled = function() {
        if (window.createjs == null || this.canceled) {
            return true;
        }
        return false;
    }
    ;
    p._parseURI = function(path) {
        if (!path) {
            return null;
        }
        return path.match(s.FILE_PATTERN);
    }
    ;
    p._parsePath = function(path) {
        if (!path) {
            return null;
        }
        return path.match(s.PATH_PATTERN);
    }
    ;
    p._formatQueryString = function(data, query) {
        if (data == null) {
            throw new Error('You must specify data.');
        }
        var params = [];
        for (var n in data) {
            params.push(n + '=' + escape(data[n]));
        }
        if (query) {
            params = params.concat(query);
        }
        return params.join('&');
    }
    ;
    p.buildPath = function(src, data) {
        if (data == null) {
            return src;
        }
        var query = [];
        var idx = src.indexOf('?');
        if (idx != -1) {
            var q = src.slice(idx + 1);
            query = query.concat(q.split('&'));
        }
        if (idx != -1) {
            return src.slice(0, idx) + '?' + this._formatQueryString(data, query);
        } else {
            return src + '?' + this._formatQueryString(data, query);
        }
    }
    ;
    p._isCrossDomain = function(item) {
        var target = document.createElement("a");
        target.href = item.src;
        var host = document.createElement("a");
        host.href = location.href;
        var crossdomain = (target.hostname != "") && (target.port != host.port || target.protocol != host.protocol || target.hostname != host.hostname);
        return crossdomain;
    }
    p._isLocal = function(item) {
        var target = document.createElement("a");
        target.href = item.src;
        return target.hostname == "" && target.protocol == "file:";
    }
    ;
    p.toString = function() {
        return "[PreloadJS AbstractLoader]";
    }
    ;
    createjs.AbstractLoader = AbstractLoader;
}());
this.createjs = this.createjs || {};
(function() {
    "use strict";
    var LoadQueue = function(useXHR, basePath, crossOrigin) {
        this.init(useXHR, basePath, crossOrigin);
    };
    var p = LoadQueue.prototype = new createjs.AbstractLoader();
    var s = LoadQueue;
    s.loadTimeout = 28000;
    s.LOAD_TIMEOUT = 0;
    s.BINARY = "binary";
    s.CSS = "css";
    s.IMAGE = "image";
    s.JAVASCRIPT = "javascript";
    s.JSON = "json";
    s.JSONP = "jsonp";
    s.MANIFEST = "manifest";
    s.SOUND = "sound";
    s.SVG = "svg";
    s.TEXT = "text";
    s.XML = "xml";
    s.POST = 'POST';
    s.GET = 'GET';
    p._basePath = null;
    p._crossOrigin = "";
    p.useXHR = true;
    p.stopOnError = false;
    p.maintainScriptOrder = true;
    p.next = null;
    p._typeCallbacks = null;
    p._extensionCallbacks = null;
    p._loadStartWasDispatched = false;
    p._maxConnections = 1;
    p._currentlyLoadingScript = null;
    p._currentLoads = null;
    p._loadQueue = null;
    p._loadQueueBackup = null;
    p._loadItemsById = null;
    p._loadItemsBySrc = null;
    p._loadedResults = null;
    p._loadedRawResults = null;
    p._numItems = 0;
    p._numItemsLoaded = 0;
    p._scriptOrder = null;
    p._loadedScripts = null;
    p.init = function(useXHR, basePath, crossOrigin) {
        this._numItems = this._numItemsLoaded = 0;
        this._paused = false;
        this._loadStartWasDispatched = false;
        this._currentLoads = [];
        this._loadQueue = [];
        this._loadQueueBackup = [];
        this._scriptOrder = [];
        this._loadedScripts = [];
        this._loadItemsById = {};
        this._loadItemsBySrc = {};
        this._loadedResults = {};
        this._loadedRawResults = {};
        this._typeCallbacks = {};
        this._extensionCallbacks = {};
        this._basePath = basePath;
        this.setUseXHR(useXHR);
        this._crossOrigin = (crossOrigin === true) ? "Anonymous" : (crossOrigin === false || crossOrigin == null) ? "" : crossOrigin;
    }
    ;
    p.setUseXHR = function(value) {
        this.useXHR = (value != false && window.XMLHttpRequest != null);
        return this.useXHR;
    }
    ;
    p.removeAll = function() {
        this.remove();
    }
    ;
    p.remove = function(idsOrUrls) {
        var args = null;
        if (idsOrUrls && !(idsOrUrls instanceof Array)) {
            args = [idsOrUrls];
        } else if (idsOrUrls) {
            args = idsOrUrls;
        } else if (arguments.length > 0) {
            return;
        }
        var itemsWereRemoved = false;
        if (!args) {
            this.close();
            for (var n in this._loadItemsById) {
                this._disposeItem(this._loadItemsById[n]);
            }
            this.init(this.useXHR);
        } else {
            while (args.length) {
                var item = args.pop();
                var r = this.getResult(item);
                for (i = this._loadQueue.length - 1; i >= 0; i--) {
                    loadItem = this._loadQueue[i].getItem();
                    if (loadItem.id == item || loadItem.src == item) {
                        this._loadQueue.splice(i, 1)[0].cancel();
                        break;
                    }
                }
                for (i = this._loadQueueBackup.length - 1; i >= 0; i--) {
                    loadItem = this._loadQueueBackup[i].getItem();
                    if (loadItem.id == item || loadItem.src == item) {
                        this._loadQueueBackup.splice(i, 1)[0].cancel();
                        break;
                    }
                }
                if (r) {
                    delete this._loadItemsById[r.id];
                    delete this._loadItemsBySrc[r.src];
                    this._disposeItem(r);
                } else {
                    for (var i = this._currentLoads.length - 1; i >= 0; i--) {
                        var loadItem = this._currentLoads[i].getItem();
                        if (loadItem.id == item || loadItem.src == item) {
                            this._currentLoads.splice(i, 1)[0].cancel();
                            itemsWereRemoved = true;
                            break;
                        }
                    }
                }
            }
            if (itemsWereRemoved) {
                this._loadNext();
            }
        }
    }
    ;
    p.reset = function() {
        this.close();
        for (var n in this._loadItemsById) {
            this._disposeItem(this._loadItemsById[n]);
        }
        var a = [];
        for (var i = 0, l = this._loadQueueBackup.length; i < l; i++) {
            a.push(this._loadQueueBackup[i].getItem());
        }
        this.loadManifest(a, false);
    }
    ;
    s.isBinary = function(type) {
        switch (type) {
        case createjs.LoadQueue.IMAGE:
        case createjs.LoadQueue.BINARY:
            return true;
        default:
            return false;
        }
    }
    ;
    s.isText = function(type) {
        switch (type) {
        case createjs.LoadQueue.TEXT:
        case createjs.LoadQueue.JSON:
        case createjs.LoadQueue.MANIFEST:
        case createjs.LoadQueue.XML:
        case createjs.LoadQueue.HTML:
        case createjs.LoadQueue.CSS:
        case createjs.LoadQueue.SVG:
        case createjs.LoadQueue.JAVASCRIPT:
            return true;
        default:
            return false;
        }
    }
    ;
    p.installPlugin = function(plugin) {
        if (plugin == null || plugin.getPreloadHandlers == null) {
            return;
        }
        var map = plugin.getPreloadHandlers();
        map.scope = plugin;
        if (map.types != null) {
            for (var i = 0, l = map.types.length; i < l; i++) {
                this._typeCallbacks[map.types[i]] = map;
            }
        }
        if (map.extensions != null) {
            for (i = 0,
            l = map.extensions.length; i < l; i++) {
                this._extensionCallbacks[map.extensions[i]] = map;
            }
        }
    }
    ;
    p.setMaxConnections = function(value) {
        this._maxConnections = value;
        if (!this._paused && this._loadQueue.length > 0) {
            this._loadNext();
        }
    }
    ;
    p.loadFile = function(file, loadNow, basePath) {
        if (file == null) {
            var event = new createjs.Event("error");
            event.text = "PRELOAD_NO_FILE";
            this._sendError(event);
            return;
        }
        this._addItem(file, null, basePath);
        if (loadNow !== false) {
            this.setPaused(false);
        } else {
            this.setPaused(true);
        }
    }
    ;
    p.loadManifest = function(manifest, loadNow, basePath) {
        var fileList = null;
        var path = null;
        if (manifest instanceof Array) {
            if (manifest.length == 0) {
                var event = new createjs.Event("error");
                event.text = "PRELOAD_MANIFEST_EMPTY";
                this._sendError(event);
                return;
            }
            fileList = manifest;
        } else if (typeof (manifest) === "string") {
            fileList = [{
                src: manifest,
                type: s.MANIFEST
            }];
        } else if (typeof (manifest) == "object") {
            if (manifest.src !== undefined) {
                if (manifest.type == null) {
                    manifest.type = s.MANIFEST;
                } else if (manifest.type != s.MANIFEST) {
                    var event = new createjs.Event("error");
                    event.text = "PRELOAD_MANIFEST_ERROR";
                    this._sendError(event);
                }
                fileList = [manifest];
            } else if (manifest.manifest !== undefined) {
                fileList = manifest.manifest;
                path = manifest.path;
            }
        } else {
            var event = new createjs.Event("error");
            event.text = "PRELOAD_MANIFEST_NULL";
            this._sendError(event);
            return;
        }
        for (var i = 0, l = fileList.length; i < l; i++) {
            this._addItem(fileList[i], path, basePath);
        }
        if (loadNow !== false) {
            this.setPaused(false);
        } else {
            this.setPaused(true);
        }
    }
    ;
    p.load = function() {
        this.setPaused(false);
    }
    ;
    p.getItem = function(value) {
        return this._loadItemsById[value] || this._loadItemsBySrc[value];
    }
    ;
    p.getResult = function(value, rawResult) {
        var item = this._loadItemsById[value] || this._loadItemsBySrc[value];
        if (item == null) {
            return null;
        }
        var id = item.id;
        if (rawResult && this._loadedRawResults[id]) {
            return this._loadedRawResults[id];
        }
        return this._loadedResults[id];
    }
    ;
    p.setPaused = function(value) {
        this._paused = value;
        if (!this._paused) {
            this._loadNext();
        }
    }
    ;
    p.close = function() {
        while (this._currentLoads.length) {
            this._currentLoads.pop().cancel();
        }
        this._scriptOrder.length = 0;
        this._loadedScripts.length = 0;
        this.loadStartWasDispatched = false;
    }
    ;
    p._addItem = function(value, path, basePath) {
        var item = this._createLoadItem(value, path, basePath);
        if (item == null) {
            return;
        }
        var loader = this._createLoader(item);
        if (loader != null) {
            this._loadQueue.push(loader);
            this._loadQueueBackup.push(loader);
            this._numItems++;
            this._updateProgress();
            if (this.maintainScriptOrder && item.type == createjs.LoadQueue.JAVASCRIPT && loader instanceof createjs.XHRLoader) {
                this._scriptOrder.push(item);
                this._loadedScripts.push(null);
            }
        }
    }
    ;
    p._createLoadItem = function(value, path, basePath) {
        var item = null;
        switch (typeof (value)) {
        case "string":
            item = {
                src: value
            };
            break;
        case "object":
            if (window.HTMLAudioElement && value instanceof window.HTMLAudioElement) {
                item = {
                    tag: value,
                    src: item.tag.src,
                    type: createjs.LoadQueue.SOUND
                };
            } else {
                item = value;
            }
            break;
        default:
            return null;
        }
        var match = this._parseURI(item.src);
        if (match != null) {
            item.ext = match[6];
        }
        if (item.type == null) {
            item.type = this._getTypeByExtension(item.ext);
        }
        var bp = "";
        var useBasePath = basePath || this._basePath;
        var autoId = item.src;
        if (match && match[1] == null && match[3] == null) {
            if (path) {
                bp = path;
                var pathMatch = this._parsePath(path);
                autoId = path + autoId;
                if (useBasePath != null && pathMatch && pathMatch[1] == null && pathMatch[2] == null) {
                    bp = useBasePath + bp;
                }
            } else if (useBasePath != null) {
                bp = useBasePath;
            }
        }
        item.src = bp + item.src;
        item.path = bp;
        if (item.type == createjs.LoadQueue.JSON || item.type == createjs.LoadQueue.MANIFEST) {
            item._loadAsJSONP = (item.callback != null);
        }
        if (item.type == createjs.LoadQueue.JSONP && item.callback == null) {
            throw new Error('callback is required for loading JSONP requests.');
        }
        if (item.tag === undefined || item.tag === null) {
            item.tag = this._createTag(item);
        }
        if (item.id === undefined || item.id === null || item.id === "") {
            item.id = autoId;
        }
        var customHandler = this._typeCallbacks[item.type] || this._extensionCallbacks[item.ext];
        if (customHandler) {
            var result = customHandler.callback.call(customHandler.scope, item.src, item.type, item.id, item.data, bp, this);
            if (result === false) {
                return null;
            } else if (result === true) {} else {
                if (result.src != null) {
                    item.src = result.src;
                }
                if (result.id != null) {
                    item.id = result.id;
                }
                if (result.tag != null) {
                    item.tag = result.tag;
                }
                if (result.completeHandler != null) {
                    item.completeHandler = result.completeHandler;
                }
                if (result.type) {
                    item.type = result.type;
                }
                match = this._parseURI(item.src);
                if (match != null && match[6] != null) {
                    item.ext = match[6].toLowerCase();
                }
            }
        }
        this._loadItemsById[item.id] = item;
        this._loadItemsBySrc[item.src] = item;
        return item;
    }
    ;
    p._createLoader = function(item) {
        var useXHR = this.useXHR;
        switch (item.type) {
        case createjs.LoadQueue.JSON:
        case createjs.LoadQueue.MANIFEST:
            useXHR = !item._loadAsJSONP;
            break;
        case createjs.LoadQueue.XML:
        case createjs.LoadQueue.TEXT:
            useXHR = true;
            break;
        case createjs.LoadQueue.SOUND:
        case createjs.LoadQueue.JSONP:
            useXHR = false;
            break;
        case null:
            return null;
        }
        if (useXHR) {
            return new createjs.XHRLoader(item,this._crossOrigin);
        } else {
            return new createjs.TagLoader(item);
        }
    }
    ;
    p._loadNext = function() {
        if (this._paused) {
            return;
        }
        if (!this._loadStartWasDispatched) {
            this._sendLoadStart();
            this._loadStartWasDispatched = true;
        }
        if (this._numItems == this._numItemsLoaded) {
            this.loaded = true;
            this._sendComplete();
            if (this.next && this.next.load) {
                this.next.load();
            }
        } else {
            this.loaded = false;
        }
        for (var i = 0; i < this._loadQueue.length; i++) {
            if (this._currentLoads.length >= this._maxConnections) {
                break;
            }
            var loader = this._loadQueue[i];
            if (this.maintainScriptOrder && loader instanceof createjs.TagLoader && loader.getItem().type == createjs.LoadQueue.JAVASCRIPT) {
                if (this._currentlyLoadingScript) {
                    continue;
                }
                this._currentlyLoadingScript = true;
            }
            this._loadQueue.splice(i, 1);
            i--;
            this._loadItem(loader);
        }
    }
    ;
    p._loadItem = function(loader) {
        loader.on("progress", this._handleProgress, this);
        loader.on("complete", this._handleFileComplete, this);
        loader.on("error", this._handleFileError, this);
        this._currentLoads.push(loader);
        this._sendFileStart(loader.getItem());
        loader.load();
    }
    ;
    p._handleFileError = function(event) {
        var loader = event.target;
        this._numItemsLoaded++;
        this._updateProgress();
        var newEvent = new createjs.Event("error");
        newEvent.text = "FILE_LOAD_ERROR[" + event.text + "]";
        newEvent.item = loader.getItem();
        this._sendError(newEvent);
        if (!this.stopOnError) {
            this._removeLoadItem(loader);
            this._loadNext();
        }
    }
    ;
    p._handleFileComplete = function(event) {
        var loader = event.target;
        var item = loader.getItem();
        this._loadedResults[item.id] = loader.getResult();
        if (loader instanceof createjs.XHRLoader) {
            this._loadedRawResults[item.id] = loader.getResult(true);
        }
        this._removeLoadItem(loader);
        if (this.maintainScriptOrder && item.type == createjs.LoadQueue.JAVASCRIPT) {
            if (loader instanceof createjs.TagLoader) {
                this._currentlyLoadingScript = false;
            } else {
                this._loadedScripts[createjs.indexOf(this._scriptOrder, item)] = item;
                this._checkScriptLoadOrder(loader);
                return;
            }
        }
        delete item._loadAsJSONP;
        if (item.type == createjs.LoadQueue.MANIFEST) {
            var result = loader.getResult();
            if (result != null && result.manifest !== undefined) {
                this.loadManifest(result, true);
            }
        }
        this._processFinishedLoad(item, loader);
    }
    ;
    p._processFinishedLoad = function(item, loader) {
        this._numItemsLoaded++;
        this._updateProgress();
        this._sendFileComplete(item, loader);
        this._loadNext();
    }
    ;
    p._checkScriptLoadOrder = function() {
        var l = this._loadedScripts.length;
        for (var i = 0; i < l; i++) {
            var item = this._loadedScripts[i];
            if (item === null) {
                break;
            }
            if (item === true) {
                continue;
            }
            var loadItem = this._loadedResults[item.id];
            (document.body || document.getElementsByTagName("body")[0]).appendChild(loadItem);
            this._processFinishedLoad(item);
            this._loadedScripts[i] = true;
        }
    }
    ;
    p._removeLoadItem = function(loader) {
        var l = this._currentLoads.length;
        for (var i = 0; i < l; i++) {
            if (this._currentLoads[i] == loader) {
                this._currentLoads.splice(i, 1);
                break;
            }
        }
    }
    ;
    p._handleProgress = function(event) {
        var loader = event.target;
        this._sendFileProgress(loader.getItem(), loader.progress);
        this._updateProgress();
    }
    ;
    p._updateProgress = function() {
        var loaded = this._numItemsLoaded / this._numItems;
        var remaining = this._numItems - this._numItemsLoaded;
        if (remaining > 0) {
            var chunk = 0;
            for (var i = 0, l = this._currentLoads.length; i < l; i++) {
                chunk += this._currentLoads[i].progress;
            }
            loaded += (chunk / remaining) * (remaining / this._numItems);
        }
        this._sendProgress(loaded);
    }
    ;
    p._disposeItem = function(item) {
        delete this._loadedResults[item.id];
        delete this._loadedRawResults[item.id];
        delete this._loadItemsById[item.id];
        delete this._loadItemsBySrc[item.src];
    }
    ;
    p._createTag = function(item) {
        var tag = null;
        switch (item.type) {
        case createjs.LoadQueue.IMAGE:
            tag = document.createElement("img");
            if (this._crossOrigin != "" && !this._isLocal(item)) {
                tag.crossOrigin = this._crossOrigin;
            }
            return tag;
        case createjs.LoadQueue.SOUND:
            tag = document.createElement("audio");
            tag.autoplay = false;
            return tag;
        case createjs.LoadQueue.JSON:
        case createjs.LoadQueue.JSONP:
        case createjs.LoadQueue.JAVASCRIPT:
        case createjs.LoadQueue.MANIFEST:
            tag = document.createElement("script");
            tag.type = "text/javascript";
            return tag;
        case createjs.LoadQueue.CSS:
            if (this.useXHR) {
                tag = document.createElement("style");
            } else {
                tag = document.createElement("link");
            }
            tag.rel = "stylesheet";
            tag.type = "text/css";
            return tag;
        case createjs.LoadQueue.SVG:
            if (this.useXHR) {
                tag = document.createElement("svg");
            } else {
                tag = document.createElement("object");
                tag.type = "image/svg+xml";
            }
            return tag;
        }
        return null;
    }
    ;
    p._getTypeByExtension = function(extension) {
        if (extension == null) {
            return createjs.LoadQueue.TEXT;
        }
        switch (extension.toLowerCase()) {
        case "jpeg":
        case "jpg":
        case "gif":
        case "png":
        case "webp":
        case "bmp":
            return createjs.LoadQueue.IMAGE;
        case "ogg":
        case "mp3":
        case "wav":
            return createjs.LoadQueue.SOUND;
        case "json":
            return createjs.LoadQueue.JSON;
        case "xml":
            return createjs.LoadQueue.XML;
        case "css":
            return createjs.LoadQueue.CSS;
        case "js":
            return createjs.LoadQueue.JAVASCRIPT;
        case 'svg':
            return createjs.LoadQueue.SVG;
        default:
            return createjs.LoadQueue.TEXT;
        }
    }
    ;
    p._sendFileProgress = function(item, progress) {
        if (this._isCanceled()) {
            this._cleanUp();
            return;
        }
        if (!this.hasEventListener("fileprogress")) {
            return;
        }
        var event = new createjs.Event("fileprogress");
        event.progress = progress;
        event.loaded = progress;
        event.total = 1;
        event.item = item;
        this.dispatchEvent(event);
    }
    ;
    p._sendFileComplete = function(item, loader) {
        if (this._isCanceled()) {
            return;
        }
        var event = new createjs.Event("fileload");
        event.loader = loader;
        event.item = item;
        event.result = this._loadedResults[item.id];
        event.rawResult = this._loadedRawResults[item.id];
        if (item.completeHandler) {
            item.completeHandler(event);
        }
        this.hasEventListener("fileload") && this.dispatchEvent(event)
    }
    ;
    p._sendFileStart = function(item) {
        var event = new createjs.Event("filestart");
        event.item = item;
        this.hasEventListener("filestart") && this.dispatchEvent(event);
    }
    ;
    p.toString = function() {
        return "[PreloadJS LoadQueue]";
    }
    ;
    createjs.LoadQueue = LoadQueue;
    var BrowserDetect = function() {}
    BrowserDetect.init = function() {
        var agent = navigator.userAgent;
        BrowserDetect.isFirefox = (agent.indexOf("Firefox") > -1);
        BrowserDetect.isOpera = (window.opera != null);
        BrowserDetect.isChrome = (agent.indexOf("Chrome") > -1);
        BrowserDetect.isIOS = agent.indexOf("iPod") > -1 || agent.indexOf("iPhone") > -1 || agent.indexOf("iPad") > -1;
    }
    ;
    BrowserDetect.init();
    createjs.LoadQueue.BrowserDetect = BrowserDetect;
}());
this.createjs = this.createjs || {};
(function() {
    "use strict";
    var TagLoader = function(item) {
        this.init(item);
    };
    var p = TagLoader.prototype = new createjs.AbstractLoader();
    p._loadTimeout = null;
    p._tagCompleteProxy = null;
    p._isAudio = false;
    p._tag = null;
    p._jsonResult = null;
    p.init = function(item) {
        this._item = item;
        this._tag = item.tag;
        this._isAudio = (window.HTMLAudioElement && item.tag instanceof window.HTMLAudioElement);
        this._tagCompleteProxy = createjs.proxy(this._handleLoad, this);
    }
    ;
    p.getResult = function() {
        if (this._item.type == createjs.LoadQueue.JSONP || this._item.type == createjs.LoadQueue.MANIFEST) {
            return this._jsonResult;
        } else {
            return this._tag;
        }
    }
    ;
    p.cancel = function() {
        this.canceled = true;
        this._clean();
    }
    ;
    p.load = function() {
        var item = this._item;
        var tag = this._tag;
        clearTimeout(this._loadTimeout);
        var duration = createjs.LoadQueue.LOAD_TIMEOUT;
        if (duration == 0) {
            duration = createjs.LoadQueue.loadTimeout;
        }
        this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), duration);
        if (this._isAudio) {
            tag.src = null;
            tag.preload = "auto";
        }
        tag.onerror = function() {
            console.log('arguments in on error')
            console.log(arguments)
            createjs.proxy(this._handleError, this);
        }
        if (this._isAudio) {
            tag.onstalled = createjs.proxy(this._handleStalled, this);
            tag.addEventListener("canplaythrough", this._tagCompleteProxy, false);
        } else {
            tag.onload = createjs.proxy(this._handleLoad, this);
            tag.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this);
        }
        var src = this.buildPath(item.src, item.values);
        switch (item.type) {
        case createjs.LoadQueue.CSS:
            tag.href = src;
            break;
        case createjs.LoadQueue.SVG:
            tag.data = src;
            break;
        default:
            tag.src = src;
        }
        if (item.type == createjs.LoadQueue.JSONP || item.type == createjs.LoadQueue.JSON || item.type == createjs.LoadQueue.MANIFEST) {
            if (item.callback == null) {
                throw new Error('callback is required for loading JSONP requests.');
            }
            if (window[item.callback] != null) {
                throw new Error('JSONP callback "' + item.callback + '" already exists on window. You need to specify a different callback. Or re-name the current one.');
            }
            window[item.callback] = createjs.proxy(this._handleJSONPLoad, this);
        }
        if (item.type == createjs.LoadQueue.SVG || item.type == createjs.LoadQueue.JSONP || item.type == createjs.LoadQueue.JSON || item.type == createjs.LoadQueue.MANIFEST || item.type == createjs.LoadQueue.JAVASCRIPT || item.type == createjs.LoadQueue.CSS) {
            this._startTagVisibility = tag.style.visibility;
            tag.style.visibility = "hidden";
            (document.body || document.getElementsByTagName("body")[0]).appendChild(tag);
        }
        if (tag.load != null) {
            tag.load();
        }
    }
    ;
    p._handleJSONPLoad = function(data) {
        this._jsonResult = data;
    }
    ;
    p._handleTimeout = function() {
        this._clean();
        var event = new createjs.Event("error");
        event.text = "PRELOAD_TIMEOUT";
        this._sendError(event);
    }
    ;
    p._handleStalled = function() {}
    ;
    p._handleError = function(event) {
        this._clean();
        var newEvent = new createjs.Event("error");
        this._sendError(newEvent);
    }
    ;
    p._handleReadyStateChange = function() {
        clearTimeout(this._loadTimeout);
        var tag = this.getItem().tag;
        if (tag.readyState == "loaded" || tag.readyState == "complete") {
            this._handleLoad();
        }
    }
    ;
    p._handleLoad = function(event) {
        if (this._isCanceled()) {
            return;
        }
        var item = this.getItem();
        var tag = item.tag;
        if (this.loaded || this._isAudio && tag.readyState !== 4) {
            return;
        }
        this.loaded = true;
        switch (item.type) {
        case createjs.LoadQueue.SVG:
        case createjs.LoadQueue.JSON:
        case createjs.LoadQueue.JSONP:
        case createjs.LoadQueue.MANIFEST:
        case createjs.LoadQueue.CSS:
            tag.style.visibility = this._startTagVisibility;
            (document.body || document.getElementsByTagName("body")[0]).removeChild(tag);
            break;
        default:
        }
        this._clean();
        this._sendComplete();
    }
    ;
    p._clean = function() {
        clearTimeout(this._loadTimeout);
        var item = this.getItem();
        var tag = item.tag;
        if (tag != null) {
            tag.onload = null;
            tag.removeEventListener && tag.removeEventListener("canplaythrough", this._tagCompleteProxy, false);
            tag.onstalled = null;
            tag.onprogress = null;
            tag.onerror = null;
            if (tag.parentNode != null && item.type == createjs.LoadQueue.SVG && item.type == createjs.LoadQueue.JSON && item.type == createjs.LoadQueue.MANIFEST && item.type == createjs.LoadQueue.CSS && item.type == createjs.LoadQueue.JSONP) {
                tag.parentNode.removeChild(tag);
            }
        }
        var item = this.getItem();
        if (item.type == createjs.LoadQueue.JSONP || item.type == createjs.LoadQueue.MANIFEST) {
            window[item.callback] = null;
        }
    }
    ;
    p.toString = function() {
        return "[PreloadJS TagLoader]";
    }
    ;
    createjs.TagLoader = TagLoader;
}());
this.createjs = this.createjs || {};
(function() {
    "use strict";
    var XHRLoader = function(item, crossOrigin) {
        this.init(item, crossOrigin);
    };
    var p = XHRLoader.prototype = new createjs.AbstractLoader();
    p._request = null;
    p._loadTimeout = null;
    p._xhrLevel = 1;
    p._response = null;
    p._rawResponse = null;
    p._crossOrigin = "";
    p.init = function(item, crossOrigin) {
        this._item = item;
        this._crossOrigin = crossOrigin;
        if (!this._createXHR(item)) {}
    }
    ;
    p.getResult = function(rawResult) {
        if (rawResult && this._rawResponse) {
            return this._rawResponse;
        }
        return this._response;
    }
    ;
    p.cancel = function() {
        this.canceled = true;
        this._clean();
        this._request.abort();
    }
    ;
    p.load = function() {
        if (this._request == null) {
            this._handleError();
            return;
        }
        this._request.onloadstart = createjs.proxy(this._handleLoadStart, this);
        this._request.onprogress = createjs.proxy(this._handleProgress, this);
        this._request.onabort = createjs.proxy(this._handleAbort, this);
        this._request.onerror = createjs.proxy(this._handleError, this);
        this._request.ontimeout = createjs.proxy(this._handleTimeout, this);
        if (this._xhrLevel == 1) {
            var duration = createjs.LoadQueue.LOAD_TIMEOUT;
            if (duration == 0) {
                duration = createjs.LoadQueue.loadTimeout;
            } else {
                try {
                    console.warn("LoadQueue.LOAD_TIMEOUT has been deprecated in favor of LoadQueue.loadTimeout");
                } catch (e) {}
            }
            this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), duration);
        }
        this._request.onload = createjs.proxy(this._handleLoad, this);
        this._request.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this);
        try {
            if (!this._item.values || this._item.method == createjs.LoadQueue.GET) {
                this._request.send();
            } else if (this._item.method == createjs.LoadQueue.POST) {
                this._request.send(this._formatQueryString(this._item.values));
            }
        } catch (error) {
            var event = new createjs.Event("error");
            event.error = error;
            this._sendError(event);
        }
    }
    ;
    p.getAllResponseHeaders = function() {
        if (this._request.getAllResponseHeaders instanceof Function) {
            return this._request.getAllResponseHeaders();
        } else {
            return null;
        }
    }
    ;
    p.getResponseHeader = function(header) {
        if (this._request.getResponseHeader instanceof Function) {
            return this._request.getResponseHeader(header);
        } else {
            return null;
        }
    }
    ;
    p._handleProgress = function(event) {
        if (!event || event.loaded > 0 && event.total == 0) {
            return;
        }
        var newEvent = new createjs.Event("progress");
        newEvent.loaded = event.loaded;
        newEvent.total = event.total;
        this._sendProgress(newEvent);
    }
    ;
    p._handleLoadStart = function(event) {
        clearTimeout(this._loadTimeout);
        this._sendLoadStart();
    }
    ;
    p._handleAbort = function(event) {
        this._clean();
        var newEvent = new createjs.Event("error");
        newEvent.text = "XHR_ABORTED";
        this._sendError(newEvent);
    }
    ;
    p._handleError = function(event) {
        this._clean();
        var newEvent = new createjs.Event("error");
        this._sendError(newEvent);
    }
    ;
    p._handleReadyStateChange = function(event) {
        if (this._request.readyState == 4) {
            this._handleLoad();
        }
    }
    ;
    p._handleLoad = function(event) {
        if (this.loaded) {
            return;
        }
        this.loaded = true;
        if (!this._checkError()) {
            this._handleError();
            return;
        }
        this._response = this._getResponse();
        this._clean();
        var isComplete = this._generateTag();
        if (isComplete) {
            this._sendComplete();
        }
    }
    ;
    p._handleTimeout = function(event) {
        this._clean();
        var newEvent = new createjs.Event("error");
        newEvent.text = "PRELOAD_TIMEOUT";
        this._sendError(event);
    }
    ;
    p._checkError = function() {
        var status = parseInt(this._request.status);
        switch (status) {
        case 404:
        case 0:
            return false;
        }
        return true;
    }
    ;
    p._getResponse = function() {
        if (this._response != null) {
            return this._response;
        }
        if (this._request.response != null) {
            return this._request.response;
        }
        try {
            if (this._request.responseText != null) {
                return this._request.responseText;
            }
        } catch (e) {}
        try {
            if (this._request.responseXML != null) {
                return this._request.responseXML;
            }
        } catch (e) {}
        return null;
    }
    ;
    p._createXHR = function(item) {
        var crossdomain = this._isCrossDomain(item);
        var req = null;
        if (crossdomain && window.XDomainRequest) {
            req = new XDomainRequest();
        } else if (window.XMLHttpRequest) {
            req = new XMLHttpRequest();
        } else {
            try {
                req = new ActiveXObject("Msxml2.XMLHTTP.6.0");
            } catch (e) {
                try {
                    req = new ActiveXObject("Msxml2.XMLHTTP.3.0");
                } catch (e) {
                    try {
                        req = new ActiveXObject("Msxml2.XMLHTTP");
                    } catch (e) {
                        return false;
                    }
                }
            }
        }
        if (createjs.LoadQueue.isText(item.type) && req.overrideMimeType) {
            req.overrideMimeType("text/plain; charset=utf-8");
        }
        this._xhrLevel = (typeof req.responseType === "string") ? 2 : 1;
        var src = null;
        if (item.method == createjs.LoadQueue.GET) {
            src = this.buildPath(item.src, item.values);
        } else {
            src = item.src;
        }
        req.open(item.method || createjs.LoadQueue.GET, src, true);
        if (crossdomain && req instanceof XMLHttpRequest && this._xhrLevel == 1) {
            req.setRequestHeader("Origin", location.origin);
        }
        if (item.values && item.method == createjs.LoadQueue.POST) {
            req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }
        if (createjs.LoadQueue.isBinary(item.type)) {
            req.responseType = "arraybuffer";
        }
        this._request = req;
        return true;
    }
    ;
    p._clean = function() {
        clearTimeout(this._loadTimeout);
        var req = this._request;
        req.onloadstart = null;
        req.onprogress = null;
        req.onabort = null;
        req.onerror = null;
        req.onload = null;
        req.ontimeout = null;
        req.onloadend = null;
        req.onreadystatechange = null;
    }
    ;
    p._generateTag = function() {
        var type = this._item.type;
        var tag = this._item.tag;
        switch (type) {
        case createjs.LoadQueue.IMAGE:
            tag.onload = createjs.proxy(this._handleTagReady, this);
            if (this._crossOrigin != "") {
                tag.crossOrigin = "Anonymous";
            }
            tag.src = this.buildPath(this._item.src, this._item.values);
            this._rawResponse = this._response;
            this._response = tag;
            return false;
        case createjs.LoadQueue.JAVASCRIPT:
            tag = document.createElement("script");
            tag.text = this._response;
            this._rawResponse = this._response;
            this._response = tag;
            return true;
        case createjs.LoadQueue.CSS:
            var head = document.getElementsByTagName("head")[0];
            head.appendChild(tag);
            if (tag.styleSheet) {
                tag.styleSheet.cssText = this._response;
            } else {
                var textNode = document.createTextNode(this._response);
                tag.appendChild(textNode);
            }
            this._rawResponse = this._response;
            this._response = tag;
            return true;
        case createjs.LoadQueue.XML:
            var xml = this._parseXML(this._response, "text/xml");
            this._rawResponse = this._response;
            this._response = xml;
            return true;
        case createjs.LoadQueue.SVG:
            var xml = this._parseXML(this._response, "image/svg+xml");
            this._rawResponse = this._response;
            if (xml.documentElement != null) {
                tag.appendChild(xml.documentElement);
                this._response = tag;
            } else {
                this._response = xml;
            }
            return true;
        case createjs.LoadQueue.JSON:
        case createjs.LoadQueue.MANIFEST:
            var json = {};
            try {
                json = JSON.parse(this._response);
            } catch (error) {
                json = error;
            }
            this._rawResponse = this._response;
            this._response = json;
            return true;
        }
        return true;
    }
    ;
    p._parseXML = function(text, type) {
        var xml = null;
        try {
            if (window.DOMParser) {
                var parser = new DOMParser();
                xml = parser.parseFromString(text, type);
            } else {
                xml = new ActiveXObject("Microsoft.XMLDOM");
                xml.async = false;
                xml.loadXML(text);
            }
        } catch (e) {}
        return xml;
    }
    ;
    p._handleTagReady = function() {
        this._sendComplete();
    }
    ;
    p.toString = function() {
        return "[PreloadJS XHRLoader]";
    }
    ;
    createjs.XHRLoader = XHRLoader;
}());
if (typeof JSON !== 'object') {
    JSON = {};
}
(function() {
    'use strict';
    function f(n) {
        return n < 10 ? '0' + n : n;
    }
    if (typeof Date.prototype.toJSON !== 'function') {
        Date.prototype.toJSON = function(key) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + '-' + f(this.getUTCMonth() + 1) + '-' + f(this.getUTCDate()) + 'T' + f(this.getUTCHours()) + ':' + f(this.getUTCMinutes()) + ':' + f(this.getUTCSeconds()) + 'Z' : null;
        }
        ;
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(key) {
            return this.valueOf();
        }
        ;
    }
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"': '\\"',
        '\\': '\\\\'
    }, rep;
    function quote(string) {
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
            var c = meta[a];
            return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }
    function str(key, holder) {
        var i, k, v, length, mind = gap, partial, value = holder[key];
        if (value && typeof value === 'object' && typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }
        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }
        switch (typeof value) {
        case 'string':
            return quote(value);
        case 'number':
            return isFinite(value) ? String(value) : 'null';
        case 'boolean':
        case 'null':
            return String(value);
        case 'object':
            if (!value) {
                return 'null';
            }
            gap += indent;
            partial = [];
            if (Object.prototype.toString.apply(value) === '[object Array]') {
                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }
                v = partial.length === 0 ? '[]' : gap ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }
            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }
            v = partial.length === 0 ? '{}' : gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }
    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function(value, replacer, space) {
            var i;
            gap = '';
            indent = '';
            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }
            } else if (typeof space === 'string') {
                indent = space;
            }
            rep = replacer;
            if (replacer && typeof replacer !== 'function' && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }
            return str('', {
                '': value
            });
        }
        ;
    }
    if (typeof JSON.parse !== 'function') {
        JSON.parse = function(text, reviver) {
            var j;
            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function(a) {
                    return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
                j = eval('(' + text + ')');
                return typeof reviver === 'function' ? walk({
                    '': j
                }, '') : j;
            }
            throw new SyntaxError('JSON.parse');
        }
        ;
    }
}());
(function($) {
    var defaults = {
        inputSelectors: 'input:not([type=radio], [type=checkbox], [type=reset]), input[type=checkbox], input[type=radio]:checked, textarea, select',
        multiValSelector: '[type=checkbox], select',
        keyAttr: 'name',
        wrapped: false,
        allowEmptyMultiVal: false,
        allowEmptySingleVal: true,
        keyTransform: null
    }
      , settings = {}
      , empty = function(obj) {
        if (obj && obj.length)
            return obj.length === 0;
        for (var key in obj)
            if (hasOwnProperty.call(obj, key))
                return false;
        return true;
    };
    $.fn.form2json = function(options) {
        var form = $(this);
        if (!form.is('form')) {
            return;
        }
        settings = $.extend(true, {}, defaults, options);
        var data = {}
          , fields = form.find(settings.inputSelectors)
          , singleVal = fields.filter(':not(' + settings.multiValSelector + ')')
          , multiVal = fields.filter(settings.multiValSelector);
        singleVal.each(function() {
            var item = $(this)
              , key = item.attr(settings.keyAttr) || item.attr('name') || item.attr('id')
              , val = item.val();
            if (!settings.allowEmptySingleVal && empty(val))
                return true;
            if (key) {
                var keyHierarchy = key.split('.'), dKeys = $.map(keyHierarchy, function(k) {
                    return $.isFunction(settings.keyTransform) ? settings.keyTransform(k, item) : k;
                }), obj = data, prop;
                while (prop = dKeys.shift()) {
                    obj[prop] = obj[prop] || {};
                    if (dKeys.length) {
                        obj = obj[prop];
                    } else {
                        break;
                    }
                }
                obj[prop] = val;
            }
        });
        multiVal.each(function() {
            var item = $(this)
              , key = item.attr(settings.keyAttr) || item.attr('name') || item.attr('id')
              , val = item.is(':checkbox:not(:checked)') ? null : item.val();
            if (key && (val || settings.allowEmptyMultiVal)) {
                var keyHierarchy = key.split('.'), dKeys = $.map(keyHierarchy, function(k) {
                    return $.isFunction(settings.keyTransform) ? settings.keyTransform(k, item) : k;
                }), obj = data, prop;
                while (prop = dKeys.shift()) {
                    obj[prop] = obj[prop] || (dKeys.length ? {} : null);
                    if (dKeys.length) {
                        obj = obj[prop];
                    } else {
                        break;
                    }
                }
                if (obj[prop]) {
                    if (val) {
                        $.isArray(obj[prop]) || (obj[prop] = [obj[prop]]);
                        obj[prop].push(val);
                    }
                } else {
                    obj[prop] = val;
                }
            }
        });
        if (!settings.wrapped) {
            return data;
        }
        var ajax = {
            data: data
        }
          , method = form.attr('method')
          , action = form.attr('action');
        (method && method.toUpperCase() != 'GET') && (ajax.type = method);
        (action) && (ajax.url = action);
        return ajax;
    }
    ;
}
)(jQuery);
var mobileOS;
var mobileOSver;
function getOS() {
    var ua = navigator.userAgent;
    var uaindex;
    if (ua.match(/iPad/i) || ua.match(/iPhone/i)) {
        mobileOS = 'iOS';
        uaindex = ua.indexOf('OS ');
    } else if (ua.match(/Android/i)) {
        mobileOS = 'Android';
        uaindex = ua.indexOf('Android ');
    } else {
        mobileOS = 'unknown';
    }
    if (mobileOS === 'iOS' && uaindex > -1) {
        mobileOSver = ua.substr(uaindex + 3, 3).replace('_', '.');
    } else if (mobileOS === 'Android' && uaindex > -1) {
        mobileOSver = ua.substr(uaindex + 8, 3);
    } else {
        mobileOSver = 'unknown';
    }
}
(function($) {
    $.ua = $.ua || {
        platform: {},
        browser: {},
        engine: {}
    };
    var ua = navigator.userAgent.toLowerCase()
      , p = $.ua.platform
      , b = $.ua.browser
      , e = $.ua.engine
      , u = 'unknown';
    p.name = (/(win|mac|linux|iphone|ipod|android)/.exec(ua) || [, u])[1];
    p[p.name] = true;
    b.name = (/(msie|firefox|chrome|safari|opera)/.exec(ua) || [, u])[1];
    b[b.name] = true;
    var ver = /(?:msie |firefox\/|chrome\/|safari\/|version\/)(\d+(\.\d+)*)/.exec(ua);
    b.version = (b.unknown) ? 0 : ver[1];
    e.name = (/(trident|webkit|gecko|presto)/.exec(ua) || [, u])[1];
    e[e.name] = true;
    e.version = (e.unknown) ? 0 : /(?:trident\/|rv:|webkit\/|presto\/)(\d+(\.\d+)*)/.exec(ua)[1];
}
)(jQuery);
(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["lodash", "postal"], function(_, postal) {
            return factory(_, postal, root);
        });
    } else if (typeof module === "object" && module.exports) {
        module.exports = function(postal) {
            return factory(require("lodash"), postal);
        }
        ;
    } else {
        factory(root._, root.postal, root);
    }
}(typeof window !== "undefined" ? window : this, function(_, postal, global, undefined) {
    postal.diagnostics = {};
    var DiagnosticsWireTap = function(options) {
        options = options || {};
        _.extend(this, {
            active: true,
            filters: [],
            name: _.uniqueId("wiretap_"),
            includeNesting: false
        }, options);
        this.removeWireTap = postal.addWireTap(_.bind(this.wiretapFn, this));
        if (postal.diagnostics[this.name]) {
            postal.diagnostics[this.name].removeWireTap();
        }
        postal.diagnostics[this.name] = this;
    };
    DiagnosticsWireTap.prototype.wiretapFn = function(data, envelope, nesting) {
        if (!this.active) {
            return;
        }
        if (!this.filters.length || _.any(this.filters, function(filter) {
            return this.applyFilter(filter, envelope);
        }, this)) {
            try {
                this.writer(this.serialize(envelope), nesting);
            } catch (exception) {
                this.writer("Unable to serialize envelope: " + exception);
            }
        }
    }
    ;
    DiagnosticsWireTap.prototype.applyFilter = function(filter, env) {
        var match = 0
          , possible = 0;
        _.each(filter, function(item, key) {
            if (env[key]) {
                possible++;
                if (_.isRegExp(item) && item.test(env[key])) {
                    match++;
                } else if (_.isObject(env[key]) && !_.isArray(env[key])) {
                    if (this.applyFilter(item, env[key])) {
                        match++;
                    }
                } else {
                    if (_.isEqual(env[key], item)) {
                        match++;
                    }
                }
            }
        }, this);
        return match === possible;
    }
    ;
    DiagnosticsWireTap.prototype.clearFilters = function() {
        this.filters = [];
    }
    ;
    DiagnosticsWireTap.prototype.removeFilter = function(filter) {
        this.filters = _.filter(this.filters, function(item) {
            return !_.isEqual(item, filter);
        });
    }
    ;
    DiagnosticsWireTap.prototype.addFilter = function(constraint) {
        if (!_.isArray(constraint)) {
            constraint = [constraint];
        }
        _.each(constraint, function(item) {
            if (this.filters.length === 0 || !_.any(this.filters, function(filter) {
                return _.isEqual(filter, item);
            })) {
                this.filters.push(item);
            }
        }, this);
    }
    ;
    DiagnosticsWireTap.prototype.serialize = function(env) {
        if (typeof JSON === "undefined") {
            throw new Error("This browser or environment does not provide JSON support");
        }
        return JSON.stringify(env, null, 4);
    }
    ;
    DiagnosticsWireTap.prototype.writer = function(output, nesting) {
        var segments = {
            'router': 'Page View',
            'mv_animation': 'Animation Step',
            'mv_preloader': 'Image loded'
        }
        if (output.indexOf('{') === -1) {
            console.warn('in wiretap:')
            console.warn(output)
            return
        }
        var tmpdata = JSON.parse(output);
        if (this.includeNesting) {
            console.log(output, "\t(nesting level: ", nesting, ")");
        } else {
            var dataString = '--'
            if (tmpdata.data) {
                _.each(tmpdata.data, function(dat, key) {
                    if (_.isObject(dat)) {
                        _.each(dat, function(datn, keyn) {
                            if (_.isObject(datn)) {
                                _.each(tmpdata.data, function(datn1, keyn1) {
                                    dataString += keyn1 + ': ' + datn1;
                                })
                            } else {
                                dataString += keyn + ': ' + datn;
                            }
                        })
                    } else {
                        dataString += key + ': ' + dat;
                    }
                })
            }
            if (tmpdata.channel === 'mv_preloader') {
                if (tmpdata.topic === 'allCardsLoaded') {
                    ga('send', 'event', 'RV', 'allImagesLoaded', 'successfully');
                }
                if (tmpdata.topic === 'error') {
                    var errInfo = tmpdata.data.data.text;
                    errInfo += ' ' + tmpdata.data.data.src;
                    ga('send', 'event', 'RV', 'imagesLoadingError', errInfo.substr(0, 400));
                }
            }
        }
    }
    ;
    postal.diagnostics.DiagnosticsWireTap = DiagnosticsWireTap;
    return DiagnosticsWireTap;
}));
Object.keys = Object.keys || function(o, k, r) {
    r = [];
    for (k in o)
        r.hasOwnProperty.call(o, k) && r.push(k);
    return r
}
;
!window.addEventListener && function(e, t, n, r, i, s, o) {
    e[r] = t[r] = n[r] = function(e, t) {
        var n = this;
        o.unshift([n, e, t, function(e) {
            e.currentTarget = n,
            e.preventDefault = function() {
                e.returnValue = !1
            }
            ,
            e.stopPropagation = function() {
                e.cancelBubble = !0
            }
            ,
            e.target = e.srcElement || n,
            t.call(n, e)
        }
        ]),
        this.attachEvent("on" + e, o[0][3])
    }
    ,
    e[i] = t[i] = n[i] = function(e, t) {
        for (var n = 0, r; r = o[n]; ++n)
            if (r[0] == this && r[1] == e && r[2] == t)
                return this.detachEvent("on" + e, o.splice(n, 1)[0][3])
    }
    ,
    e[s] = t[s] = n[s] = function(e) {
        return this.fireEvent("on" + e.type, e)
    }
}(Window.prototype, HTMLDocument.prototype, Element.prototype, "addEventListener", "removeEventListener", "dispatchEvent", []);
/*! iScroll v5.1.1 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license */
(function(window, document, Math) {
    var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
        window.setTimeout(callback, 1000 / 60);
    }
    ;
    var utils = (function() {
        var me = {};
        var _elementStyle = document.createElement('div').style;
        var _vendor = (function() {
            var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'], transform, i = 0, l = vendors.length;
            for (; i < l; i++) {
                transform = vendors[i] + 'ransform';
                if (transform in _elementStyle)
                    return vendors[i].substr(0, vendors[i].length - 1);
            }
            return false;
        }
        )();
        function _prefixStyle(style) {
            if (_vendor === false)
                return false;
            if (_vendor === '')
                return style;
            return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
        }
        me.getTime = Date.now || function getTime() {
            return new Date().getTime();
        }
        ;
        me.extend = function(target, obj) {
            for (var i in obj) {
                target[i] = obj[i];
            }
        }
        ;
        me.addEvent = function(el, type, fn, capture) {
            el.addEventListener(type, fn, !!capture);
        }
        ;
        me.removeEvent = function(el, type, fn, capture) {
            el.removeEventListener(type, fn, !!capture);
        }
        ;
        me.momentum = function(current, start, time, lowerMargin, wrapperSize, deceleration) {
            var distance = current - start, speed = Math.abs(distance) / time, destination, duration;
            deceleration = deceleration === undefined ? 0.0006 : deceleration;
            destination = current + (speed * speed) / (2 * deceleration) * (distance < 0 ? -1 : 1);
            duration = speed / deceleration;
            if (destination < lowerMargin) {
                destination = wrapperSize ? lowerMargin - (wrapperSize / 2.5 * (speed / 8)) : lowerMargin;
                distance = Math.abs(destination - current);
                duration = distance / speed;
            } else if (destination > 0) {
                destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
                distance = Math.abs(current) + destination;
                duration = distance / speed;
            }
            return {
                destination: Math.round(destination),
                duration: duration
            };
        }
        ;
        var _transform = _prefixStyle('transform');
        me.extend(me, {
            hasTransform: _transform !== false,
            hasPerspective: _prefixStyle('perspective')in _elementStyle,
            hasTouch: 'ontouchstart'in window,
            hasPointer: navigator.msPointerEnabled,
            hasTransition: _prefixStyle('transition')in _elementStyle
        });
        me.isBadAndroid = /Android /.test(window.navigator.appVersion) && !(/Chrome\/\d/.test(window.navigator.appVersion));
        me.extend(me.style = {}, {
            transform: _transform,
            transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
            transitionDuration: _prefixStyle('transitionDuration'),
            transitionDelay: _prefixStyle('transitionDelay'),
            transformOrigin: _prefixStyle('transformOrigin')
        });
        me.hasClass = function(e, c) {
            var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
            return re.test(e.className);
        }
        ;
        me.addClass = function(e, c) {
            if (me.hasClass(e, c)) {
                return;
            }
            var newclass = e.className.split(' ');
            newclass.push(c);
            e.className = newclass.join(' ');
        }
        ;
        me.removeClass = function(e, c) {
            if (!me.hasClass(e, c)) {
                return;
            }
            var re = new RegExp("(^|\\s)" + c + "(\\s|$)",'g');
            e.className = e.className.replace(re, ' ');
        }
        ;
        me.offset = function(el) {
            var left = -el.offsetLeft
              , top = -el.offsetTop;
            while (el = el.offsetParent) {
                left -= el.offsetLeft;
                top -= el.offsetTop;
            }
            return {
                left: left,
                top: top
            };
        }
        ;
        me.preventDefaultException = function(el, exceptions) {
            for (var i in exceptions) {
                if (exceptions[i].test(el[i])) {
                    return true;
                }
            }
            return false;
        }
        ;
        me.extend(me.eventType = {}, {
            touchstart: 1,
            touchmove: 1,
            touchend: 1,
            mousedown: 2,
            mousemove: 2,
            mouseup: 2,
            MSPointerDown: 3,
            MSPointerMove: 3,
            MSPointerUp: 3
        });
        me.extend(me.ease = {}, {
            quadratic: {
                style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                fn: function(k) {
                    return k * (2 - k);
                }
            },
            circular: {
                style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',
                fn: function(k) {
                    return Math.sqrt(1 - (--k * k));
                }
            },
            back: {
                style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                fn: function(k) {
                    var b = 4;
                    return (k = k - 1) * k * ((b + 1) * k + b) + 1;
                }
            },
            bounce: {
                style: '',
                fn: function(k) {
                    if ((k /= 1) < (1 / 2.75)) {
                        return 7.5625 * k * k;
                    } else if (k < (2 / 2.75)) {
                        return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
                    } else if (k < (2.5 / 2.75)) {
                        return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
                    } else {
                        return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
                    }
                }
            },
            elastic: {
                style: '',
                fn: function(k) {
                    var f = 0.22
                      , e = 0.4;
                    if (k === 0) {
                        return 0;
                    }
                    if (k == 1) {
                        return 1;
                    }
                    return (e * Math.pow(2, -10 * k) * Math.sin((k - f / 4) * (2 * Math.PI) / f) + 1);
                }
            }
        });
        me.tap = function(e, eventName) {
            var ev = document.createEvent('Event');
            ev.initEvent(eventName, true, true);
            ev.pageX = e.pageX;
            ev.pageY = e.pageY;
            e.target.dispatchEvent(ev);
        }
        ;
        me.click = function(e) {
            var target = e.target, ev;
            if (!(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName)) {
                ev = document.createEvent('MouseEvents');
                ev.initMouseEvent('click', true, true, e.view, 1, target.screenX, target.screenY, target.clientX, target.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null);
                ev._constructed = true;
                target.dispatchEvent(ev);
            }
        }
        ;
        return me;
    }
    )();
    function IScroll(el, options) {
        this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
        this.scroller = this.wrapper.children[0];
        this.scrollerStyle = this.scroller.style;
        this.options = {
            zoomMin: 1,
            zoomMax: 4,
            startZoom: 1,
            resizeScrollbars: true,
            mouseWheelSpeed: 20,
            snapThreshold: 0.334,
            startX: 0,
            startY: 0,
            scrollY: true,
            directionLockThreshold: 5,
            momentum: true,
            bounce: true,
            bounceTime: 600,
            bounceEasing: '',
            preventDefault: true,
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
            },
            HWCompositing: true,
            useTransition: true,
            useTransform: true
        };
        for (var i in options) {
            this.options[i] = options[i];
        }
        this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';
        this.options.useTransition = utils.hasTransition && this.options.useTransition;
        this.options.useTransform = utils.hasTransform && this.options.useTransform;
        this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
        this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;
        this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
        this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;
        this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
        this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;
        this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;
        this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;
        if (this.options.tap === true) {
            this.options.tap = 'tap';
        }
        if (this.options.shrinkScrollbars == 'scale') {
            this.options.useTransition = false;
        }
        this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;
        this.x = 0;
        this.y = 0;
        this.directionX = 0;
        this.directionY = 0;
        this._events = {};
        this.scale = Math.min(Math.max(this.options.startZoom, this.options.zoomMin), this.options.zoomMax);
        this._init();
        this.refresh();
        this.scrollTo(this.options.startX, this.options.startY);
        this.enable();
    }
    IScroll.prototype = {
        version: '5.1.1',
        _init: function() {
            this._initEvents();
            if (this.options.zoom) {
                this._initZoom();
            }
            if (this.options.scrollbars || this.options.indicators) {
                this._initIndicators();
            }
            if (this.options.mouseWheel) {
                this._initWheel();
            }
            if (this.options.snap) {
                this._initSnap();
            }
            if (this.options.keyBindings) {
                this._initKeys();
            }
        },
        destroy: function() {
            this._initEvents(true);
            this._execEvent('destroy');
        },
        _transitionEnd: function(e) {
            if (e.target != this.scroller || !this.isInTransition) {
                return;
            }
            this._transitionTime();
            if (!this.resetPosition(this.options.bounceTime)) {
                this.isInTransition = false;
                this._execEvent('scrollEnd');
            }
        },
        _start: function(e) {
            if (utils.eventType[e.type] != 1) {
                if (e.button !== 0) {
                    return;
                }
            }
            if (!this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated)) {
                return;
            }
            if (this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
                e.preventDefault();
            }
            var point = e.touches ? e.touches[0] : e, pos;
            this.initiated = utils.eventType[e.type];
            this.moved = false;
            this.distX = 0;
            this.distY = 0;
            this.directionX = 0;
            this.directionY = 0;
            this.directionLocked = 0;
            this._transitionTime();
            this.startTime = utils.getTime();
            if (this.options.useTransition && this.isInTransition) {
                this.isInTransition = false;
                pos = this.getComputedPosition();
                this._translate(Math.round(pos.x), Math.round(pos.y));
                this._execEvent('scrollEnd');
            } else if (!this.options.useTransition && this.isAnimating) {
                this.isAnimating = false;
                this._execEvent('scrollEnd');
            }
            this.startX = this.x;
            this.startY = this.y;
            this.absStartX = this.x;
            this.absStartY = this.y;
            this.pointX = point.pageX;
            this.pointY = point.pageY;
            this._execEvent('beforeScrollStart');
        },
        _move: function(e) {
            if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
                return;
            }
            if (this.options.preventDefault) {
                e.preventDefault();
            }
            var point = e.touches ? e.touches[0] : e, deltaX = point.pageX - this.pointX, deltaY = point.pageY - this.pointY, timestamp = utils.getTime(), newX, newY, absDistX, absDistY;
            this.pointX = point.pageX;
            this.pointY = point.pageY;
            this.distX += deltaX;
            this.distY += deltaY;
            absDistX = Math.abs(this.distX);
            absDistY = Math.abs(this.distY);
            if (timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10)) {
                return;
            }
            if (!this.directionLocked && !this.options.freeScroll) {
                if (absDistX > absDistY + this.options.directionLockThreshold) {
                    this.directionLocked = 'h';
                } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
                    this.directionLocked = 'v';
                } else {
                    this.directionLocked = 'n';
                }
            }
            if (this.directionLocked == 'h') {
                if (this.options.eventPassthrough == 'vertical') {
                    e.preventDefault();
                } else if (this.options.eventPassthrough == 'horizontal') {
                    this.initiated = false;
                    return;
                }
                deltaY = 0;
            } else if (this.directionLocked == 'v') {
                if (this.options.eventPassthrough == 'horizontal') {
                    e.preventDefault();
                } else if (this.options.eventPassthrough == 'vertical') {
                    this.initiated = false;
                    return;
                }
                deltaX = 0;
            }
            deltaX = this.hasHorizontalScroll ? deltaX : 0;
            deltaY = this.hasVerticalScroll ? deltaY : 0;
            newX = this.x + deltaX;
            newY = this.y + deltaY;
            if (newX > 0 || newX < this.maxScrollX) {
                newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
            }
            if (newY > 0 || newY < this.maxScrollY) {
                newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
            }
            this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
            this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;
            if (!this.moved) {
                this._execEvent('scrollStart');
            }
            this.moved = true;
            this._translate(newX, newY);
            if (timestamp - this.startTime > 300) {
                this.startTime = timestamp;
                this.startX = this.x;
                this.startY = this.y;
            }
        },
        _end: function(e) {
            if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
                return;
            }
            if (this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
                e.preventDefault();
            }
            var point = e.changedTouches ? e.changedTouches[0] : e, momentumX, momentumY, duration = utils.getTime() - this.startTime, newX = Math.round(this.x), newY = Math.round(this.y), distanceX = Math.abs(newX - this.startX), distanceY = Math.abs(newY - this.startY), time = 0, easing = '';
            this.isInTransition = 0;
            this.initiated = 0;
            this.endTime = utils.getTime();
            if (this.resetPosition(this.options.bounceTime)) {
                return;
            }
            this.scrollTo(newX, newY);
            if (!this.moved) {
                if (this.options.tap) {
                    utils.tap(e, this.options.tap);
                }
                if (this.options.click) {
                    utils.click(e);
                }
                this._execEvent('scrollCancel');
                return;
            }
            if (this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100) {
                this._execEvent('flick');
                return;
            }
            if (this.options.momentum && duration < 300) {
                momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                    destination: newX,
                    duration: 0
                };
                momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                    destination: newY,
                    duration: 0
                };
                newX = momentumX.destination;
                newY = momentumY.destination;
                time = Math.max(momentumX.duration, momentumY.duration);
                this.isInTransition = 1;
            }
            if (this.options.snap) {
                var snap = this._nearestSnap(newX, newY);
                this.currentPage = snap;
                time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
                newX = snap.x;
                newY = snap.y;
                this.directionX = 0;
                this.directionY = 0;
                easing = this.options.bounceEasing;
            }
            if (newX != this.x || newY != this.y) {
                if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
                    easing = utils.ease.quadratic;
                }
                this.scrollTo(newX, newY, time, easing);
                return;
            }
            this._execEvent('scrollEnd');
        },
        _resize: function() {
            var that = this;
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(function() {
                that.refresh();
            }, this.options.resizePolling);
        },
        resetPosition: function(time) {
            var x = this.x
              , y = this.y;
            time = time || 0;
            if (!this.hasHorizontalScroll || this.x > 0) {
                x = 0;
            } else if (this.x < this.maxScrollX) {
                x = this.maxScrollX;
            }
            if (!this.hasVerticalScroll || this.y > 0) {
                y = 0;
            } else if (this.y < this.maxScrollY) {
                y = this.maxScrollY;
            }
            if (x == this.x && y == this.y) {
                return false;
            }
            this.scrollTo(x, y, time, this.options.bounceEasing);
            return true;
        },
        disable: function() {
            this.enabled = false;
        },
        enable: function() {
            this.enabled = true;
        },
        refresh: function() {
            var rf = this.wrapper.offsetHeight;
            this.wrapperWidth = this.wrapper.clientWidth;
            this.wrapperHeight = this.wrapper.clientHeight;
            this.scrollerWidth = Math.round(this.scroller.offsetWidth * this.scale);
            this.scrollerHeight = Math.round(this.scroller.offsetHeight * this.scale);
            this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
            this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
            this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
            this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;
            if (!this.hasHorizontalScroll) {
                this.maxScrollX = 0;
                this.scrollerWidth = this.wrapperWidth;
            }
            if (!this.hasVerticalScroll) {
                this.maxScrollY = 0;
                this.scrollerHeight = this.wrapperHeight;
            }
            this.endTime = 0;
            this.directionX = 0;
            this.directionY = 0;
            this.wrapperOffset = utils.offset(this.wrapper);
            this._execEvent('refresh');
            this.resetPosition();
        },
        on: function(type, fn) {
            if (!this._events[type]) {
                this._events[type] = [];
            }
            this._events[type].push(fn);
        },
        off: function(type, fn) {
            if (!this._events[type]) {
                return;
            }
            var index = this._events[type].indexOf(fn);
            if (index > -1) {
                this._events[type].splice(index, 1);
            }
        },
        _execEvent: function(type) {
            if (!this._events[type]) {
                return;
            }
            var i = 0
              , l = this._events[type].length;
            if (!l) {
                return;
            }
            for (; i < l; i++) {
                this._events[type][i].apply(this, [].slice.call(arguments, 1));
            }
        },
        scrollBy: function(x, y, time, easing) {
            x = this.x + x;
            y = this.y + y;
            time = time || 0;
            this.scrollTo(x, y, time, easing);
        },
        scrollTo: function(x, y, time, easing) {
            easing = easing || utils.ease.circular;
            this.isInTransition = this.options.useTransition && time > 0;
            if (!time || (this.options.useTransition && easing.style)) {
                this._transitionTimingFunction(easing.style);
                this._transitionTime(time);
                this._translate(x, y);
            } else {
                this._animate(x, y, time, easing.fn);
            }
        },
        scrollToElement: function(el, time, offsetX, offsetY, easing) {
            el = el.nodeType ? el : this.scroller.querySelector(el);
            if (!el) {
                return;
            }
            var pos = utils.offset(el);
            pos.left -= this.wrapperOffset.left;
            pos.top -= this.wrapperOffset.top;
            if (offsetX === true) {
                offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
            }
            if (offsetY === true) {
                offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
            }
            pos.left -= offsetX || 0;
            pos.top -= offsetY || 0;
            pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
            pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;
            time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x - pos.left), Math.abs(this.y - pos.top)) : time;
            this.scrollTo(pos.left, pos.top, time, easing);
        },
        _transitionTime: function(time) {
            time = time || 0;
            this.scrollerStyle[utils.style.transitionDuration] = time + 'ms';
            if (!time && utils.isBadAndroid) {
                this.scrollerStyle[utils.style.transitionDuration] = '0.001s';
            }
            if (this.indicators) {
                for (var i = this.indicators.length; i--; ) {
                    this.indicators[i].transitionTime(time);
                }
            }
        },
        _transitionTimingFunction: function(easing) {
            this.scrollerStyle[utils.style.transitionTimingFunction] = easing;
            if (this.indicators) {
                for (var i = this.indicators.length; i--; ) {
                    this.indicators[i].transitionTimingFunction(easing);
                }
            }
        },
        _translate: function(x, y) {
            if (this.options.useTransform) {
                this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px) scale(' + this.scale + ') ' + this.translateZ;
            } else {
                x = Math.round(x);
                y = Math.round(y);
                this.scrollerStyle.left = x + 'px';
                this.scrollerStyle.top = y + 'px';
            }
            this.x = x;
            this.y = y;
            if (this.indicators) {
                for (var i = this.indicators.length; i--; ) {
                    this.indicators[i].updatePosition();
                }
            }
        },
        _initEvents: function(remove) {
            var eventType = remove ? utils.removeEvent : utils.addEvent
              , target = this.options.bindToWrapper ? this.wrapper : window;
            eventType(window, 'orientationchange', this);
            eventType(window, 'resize', this);
            if (this.options.click) {
                eventType(this.wrapper, 'click', this, true);
            }
            if (!this.options.disableMouse) {
                eventType(this.wrapper, 'mousedown', this);
                eventType(target, 'mousemove', this);
                eventType(target, 'mousecancel', this);
                eventType(target, 'mouseup', this);
            }
            if (utils.hasPointer && !this.options.disablePointer) {
                eventType(this.wrapper, 'MSPointerDown', this);
                eventType(target, 'MSPointerMove', this);
                eventType(target, 'MSPointerCancel', this);
                eventType(target, 'MSPointerUp', this);
            }
            if (utils.hasTouch && !this.options.disableTouch) {
                eventType(this.wrapper, 'touchstart', this);
                eventType(target, 'touchmove', this);
                eventType(target, 'touchcancel', this);
                eventType(target, 'touchend', this);
            }
            eventType(this.scroller, 'transitionend', this);
            eventType(this.scroller, 'webkitTransitionEnd', this);
            eventType(this.scroller, 'oTransitionEnd', this);
            eventType(this.scroller, 'MSTransitionEnd', this);
        },
        getComputedPosition: function() {
            var matrix = window.getComputedStyle(this.scroller, null), x, y;
            if (this.options.useTransform) {
                matrix = matrix[utils.style.transform].split(')')[0].split(', ');
                x = +(matrix[12] || matrix[4]);
                y = +(matrix[13] || matrix[5]);
            } else {
                x = +matrix.left.replace(/[^-\d.]/g, '');
                y = +matrix.top.replace(/[^-\d.]/g, '');
            }
            return {
                x: x,
                y: y
            };
        },
        _initIndicators: function() {
            var interactive = this.options.interactiveScrollbars, customStyle = typeof this.options.scrollbars != 'string', indicators = [], indicator;
            var that = this;
            this.indicators = [];
            if (this.options.scrollbars) {
                if (this.options.scrollY) {
                    indicator = {
                        el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
                        interactive: interactive,
                        defaultScrollbars: true,
                        customStyle: customStyle,
                        resize: this.options.resizeScrollbars,
                        shrink: this.options.shrinkScrollbars,
                        fade: this.options.fadeScrollbars,
                        listenX: false
                    };
                    this.wrapper.appendChild(indicator.el);
                    indicators.push(indicator);
                }
                if (this.options.scrollX) {
                    indicator = {
                        el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
                        interactive: interactive,
                        defaultScrollbars: true,
                        customStyle: customStyle,
                        resize: this.options.resizeScrollbars,
                        shrink: this.options.shrinkScrollbars,
                        fade: this.options.fadeScrollbars,
                        listenY: false
                    };
                    this.wrapper.appendChild(indicator.el);
                    indicators.push(indicator);
                }
            }
            if (this.options.indicators) {
                indicators = indicators.concat(this.options.indicators);
            }
            for (var i = indicators.length; i--; ) {
                this.indicators.push(new Indicator(this,indicators[i]));
            }
            function _indicatorsMap(fn) {
                for (var i = that.indicators.length; i--; ) {
                    fn.call(that.indicators[i]);
                }
            }
            if (this.options.fadeScrollbars) {
                this.on('scrollEnd', function() {
                    _indicatorsMap(function() {
                        this.fade();
                    });
                });
                this.on('scrollCancel', function() {
                    _indicatorsMap(function() {
                        this.fade();
                    });
                });
                this.on('scrollStart', function() {
                    _indicatorsMap(function() {
                        this.fade(1);
                    });
                });
                this.on('beforeScrollStart', function() {
                    _indicatorsMap(function() {
                        this.fade(1, true);
                    });
                });
            }
            this.on('refresh', function() {
                _indicatorsMap(function() {
                    this.refresh();
                });
            });
            this.on('destroy', function() {
                _indicatorsMap(function() {
                    this.destroy();
                });
                delete this.indicators;
            });
        },
        _initZoom: function() {
            this.scrollerStyle[utils.style.transformOrigin] = '0 0';
        },
        _zoomStart: function(e) {
            var c1 = Math.abs(e.touches[0].pageX - e.touches[1].pageX)
              , c2 = Math.abs(e.touches[0].pageY - e.touches[1].pageY);
            this.touchesDistanceStart = Math.sqrt(c1 * c1 + c2 * c2);
            this.startScale = this.scale;
            this.originX = Math.abs(e.touches[0].pageX + e.touches[1].pageX) / 2 + this.wrapperOffset.left - this.x;
            this.originY = Math.abs(e.touches[0].pageY + e.touches[1].pageY) / 2 + this.wrapperOffset.top - this.y;
            this._execEvent('zoomStart');
        },
        _zoom: function(e) {
            if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
                return;
            }
            if (this.options.preventDefault) {
                e.preventDefault();
            }
            var c1 = Math.abs(e.touches[0].pageX - e.touches[1].pageX), c2 = Math.abs(e.touches[0].pageY - e.touches[1].pageY), distance = Math.sqrt(c1 * c1 + c2 * c2), scale = 1 / this.touchesDistanceStart * distance * this.startScale, lastScale, x, y;
            this.scaled = true;
            if (scale < this.options.zoomMin) {
                scale = 0.5 * this.options.zoomMin * Math.pow(2.0, scale / this.options.zoomMin);
            } else if (scale > this.options.zoomMax) {
                scale = 2.0 * this.options.zoomMax * Math.pow(0.5, this.options.zoomMax / scale);
            }
            lastScale = scale / this.startScale;
            x = this.originX - this.originX * lastScale + this.startX;
            y = this.originY - this.originY * lastScale + this.startY;
            this.scale = scale;
            this.scrollTo(x, y, 0);
        },
        _zoomEnd: function(e) {
            if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
                return;
            }
            if (this.options.preventDefault) {
                e.preventDefault();
            }
            var newX, newY, lastScale;
            this.isInTransition = 0;
            this.initiated = 0;
            if (this.scale > this.options.zoomMax) {
                this.scale = this.options.zoomMax;
            } else if (this.scale < this.options.zoomMin) {
                this.scale = this.options.zoomMin;
            }
            this.refresh();
            lastScale = this.scale / this.startScale;
            newX = this.originX - this.originX * lastScale + this.startX;
            newY = this.originY - this.originY * lastScale + this.startY;
            if (newX > 0) {
                newX = 0;
            } else if (newX < this.maxScrollX) {
                newX = this.maxScrollX;
            }
            if (newY > 0) {
                newY = 0;
            } else if (newY < this.maxScrollY) {
                newY = this.maxScrollY;
            }
            if (this.x != newX || this.y != newY) {
                this.scrollTo(newX, newY, this.options.bounceTime);
            }
            this.scaled = false;
            this._execEvent('zoomEnd');
        },
        zoom: function(scale, x, y, time) {
            if (scale < this.options.zoomMin) {
                scale = this.options.zoomMin;
            } else if (scale > this.options.zoomMax) {
                scale = this.options.zoomMax;
            }
            if (scale == this.scale) {
                return;
            }
            var relScale = scale / this.scale;
            x = x === undefined ? this.wrapperWidth / 2 : x;
            y = y === undefined ? this.wrapperHeight / 2 : y;
            time = time === undefined ? 300 : time;
            x = x + this.wrapperOffset.left - this.x;
            y = y + this.wrapperOffset.top - this.y;
            x = x - x * relScale + this.x;
            y = y - y * relScale + this.y;
            this.scale = scale;
            this.refresh();
            if (x > 0) {
                x = 0;
            } else if (x < this.maxScrollX) {
                x = this.maxScrollX;
            }
            if (y > 0) {
                y = 0;
            } else if (y < this.maxScrollY) {
                y = this.maxScrollY;
            }
            this.scrollTo(x, y, time);
        },
        _wheelZoom: function(e) {
            var wheelDeltaY, deltaScale, that = this;
            clearTimeout(this.wheelTimeout);
            this.wheelTimeout = setTimeout(function() {
                that._execEvent('zoomEnd');
            }, 400);
            if ('deltaX'in e) {
                wheelDeltaY = -e.deltaY / Math.abs(e.deltaY);
            } else if ('wheelDeltaX'in e) {
                wheelDeltaY = e.wheelDeltaY / Math.abs(e.wheelDeltaY);
            } else if ('wheelDelta'in e) {
                wheelDeltaY = e.wheelDelta / Math.abs(e.wheelDelta);
            } else if ('detail'in e) {
                wheelDeltaY = -e.detail / Math.abs(e.wheelDelta);
            } else {
                return;
            }
            deltaScale = this.scale + wheelDeltaY / 5;
            this.zoom(deltaScale, e.pageX, e.pageY, 0);
        },
        _initWheel: function() {
            utils.addEvent(this.wrapper, 'wheel', this);
            utils.addEvent(this.wrapper, 'mousewheel', this);
            utils.addEvent(this.wrapper, 'DOMMouseScroll', this);
            this.on('destroy', function() {
                utils.removeEvent(this.wrapper, 'wheel', this);
                utils.removeEvent(this.wrapper, 'mousewheel', this);
                utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
            });
        },
        _wheel: function(e) {
            if (!this.enabled) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            var wheelDeltaX, wheelDeltaY, newX, newY, that = this;
            if (this.wheelTimeout === undefined) {
                that._execEvent('scrollStart');
            }
            clearTimeout(this.wheelTimeout);
            this.wheelTimeout = setTimeout(function() {
                that._execEvent('scrollEnd');
                that.wheelTimeout = undefined;
            }, 400);
            if ('deltaX'in e) {
                wheelDeltaX = -e.deltaX;
                wheelDeltaY = -e.deltaY;
            } else if ('wheelDeltaX'in e) {
                wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
                wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
            } else if ('wheelDelta'in e) {
                wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
            } else if ('detail'in e) {
                wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
            } else {
                return;
            }
            wheelDeltaX *= this.options.invertWheelDirection;
            wheelDeltaY *= this.options.invertWheelDirection;
            if (!this.hasVerticalScroll) {
                wheelDeltaX = wheelDeltaY;
                wheelDeltaY = 0;
            }
            if (this.options.snap) {
                newX = this.currentPage.pageX;
                newY = this.currentPage.pageY;
                if (wheelDeltaX > 0) {
                    newX--;
                } else if (wheelDeltaX < 0) {
                    newX++;
                }
                if (wheelDeltaY > 0) {
                    newY--;
                } else if (wheelDeltaY < 0) {
                    newY++;
                }
                this.goToPage(newX, newY);
                return;
            }
            newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
            newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);
            if (newX > 0) {
                newX = 0;
            } else if (newX < this.maxScrollX) {
                newX = this.maxScrollX;
            }
            if (newY > 0) {
                newY = 0;
            } else if (newY < this.maxScrollY) {
                newY = this.maxScrollY;
            }
            this.scrollTo(newX, newY, 0);
        },
        _initSnap: function() {
            this.currentPage = {};
            if (typeof this.options.snap == 'string') {
                this.options.snap = this.scroller.querySelectorAll(this.options.snap);
            }
            this.on('refresh', function() {
                var i = 0, l, m = 0, n, cx, cy, x = 0, y, stepX = this.options.snapStepX || this.wrapperWidth, stepY = this.options.snapStepY || this.wrapperHeight, el;
                this.pages = [];
                if (!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight) {
                    return;
                }
                if (this.options.snap === true) {
                    cx = Math.round(stepX / 2);
                    cy = Math.round(stepY / 2);
                    while (x > -this.scrollerWidth) {
                        this.pages[i] = [];
                        l = 0;
                        y = 0;
                        while (y > -this.scrollerHeight) {
                            this.pages[i][l] = {
                                x: Math.max(x, this.maxScrollX),
                                y: Math.max(y, this.maxScrollY),
                                width: stepX,
                                height: stepY,
                                cx: x - cx,
                                cy: y - cy
                            };
                            y -= stepY;
                            l++;
                        }
                        x -= stepX;
                        i++;
                    }
                } else {
                    el = this.options.snap;
                    l = el.length;
                    n = -1;
                    for (; i < l; i++) {
                        if (i === 0 || el[i].offsetLeft <= el[i - 1].offsetLeft) {
                            m = 0;
                            n++;
                        }
                        if (!this.pages[m]) {
                            this.pages[m] = [];
                        }
                        x = Math.max(-el[i].offsetLeft, this.maxScrollX);
                        y = Math.max(-el[i].offsetTop, this.maxScrollY);
                        cx = x - Math.round(el[i].offsetWidth / 2);
                        cy = y - Math.round(el[i].offsetHeight / 2);
                        this.pages[m][n] = {
                            x: x,
                            y: y,
                            width: el[i].offsetWidth,
                            height: el[i].offsetHeight,
                            cx: cx,
                            cy: cy
                        };
                        if (x > this.maxScrollX) {
                            m++;
                        }
                    }
                }
                this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);
                if (this.options.snapThreshold % 1 === 0) {
                    this.snapThresholdX = this.options.snapThreshold;
                    this.snapThresholdY = this.options.snapThreshold;
                } else {
                    this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
                    this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
                }
            });
            this.on('flick', function() {
                var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.x - this.startX), 1000), Math.min(Math.abs(this.y - this.startY), 1000)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, time);
            });
        },
        _nearestSnap: function(x, y) {
            if (!this.pages.length) {
                return {
                    x: 0,
                    y: 0,
                    pageX: 0,
                    pageY: 0
                };
            }
            var i = 0
              , l = this.pages.length
              , m = 0;
            if (Math.abs(x - this.absStartX) < this.snapThresholdX && Math.abs(y - this.absStartY) < this.snapThresholdY) {
                return this.currentPage;
            }
            if (x > 0) {
                x = 0;
            } else if (x < this.maxScrollX) {
                x = this.maxScrollX;
            }
            if (y > 0) {
                y = 0;
            } else if (y < this.maxScrollY) {
                y = this.maxScrollY;
            }
            for (; i < l; i++) {
                if (x >= this.pages[i][0].cx) {
                    x = this.pages[i][0].x;
                    break;
                }
            }
            l = this.pages[i].length;
            for (; m < l; m++) {
                if (y >= this.pages[0][m].cy) {
                    y = this.pages[0][m].y;
                    break;
                }
            }
            if (i == this.currentPage.pageX) {
                i += this.directionX;
                if (i < 0) {
                    i = 0;
                } else if (i >= this.pages.length) {
                    i = this.pages.length - 1;
                }
                x = this.pages[i][0].x;
            }
            if (m == this.currentPage.pageY) {
                m += this.directionY;
                if (m < 0) {
                    m = 0;
                } else if (m >= this.pages[0].length) {
                    m = this.pages[0].length - 1;
                }
                y = this.pages[0][m].y;
            }
            return {
                x: x,
                y: y,
                pageX: i,
                pageY: m
            };
        },
        goToPage: function(x, y, time, easing) {
            easing = easing || this.options.bounceEasing;
            if (x >= this.pages.length) {
                x = this.pages.length - 1;
            } else if (x < 0) {
                x = 0;
            }
            if (y >= this.pages[x].length) {
                y = this.pages[x].length - 1;
            } else if (y < 0) {
                y = 0;
            }
            var posX = this.pages[x][y].x
              , posY = this.pages[x][y].y;
            time = time === undefined ? this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;
            this.currentPage = {
                x: posX,
                y: posY,
                pageX: x,
                pageY: y
            };
            this.scrollTo(posX, posY, time, easing);
        },
        next: function(time, easing) {
            var x = this.currentPage.pageX
              , y = this.currentPage.pageY;
            x++;
            if (x >= this.pages.length && this.hasVerticalScroll) {
                x = 0;
                y++;
            }
            this.goToPage(x, y, time, easing);
        },
        prev: function(time, easing) {
            var x = this.currentPage.pageX
              , y = this.currentPage.pageY;
            x--;
            if (x < 0 && this.hasVerticalScroll) {
                x = 0;
                y--;
            }
            this.goToPage(x, y, time, easing);
        },
        _initKeys: function(e) {
            var keys = {
                pageUp: 33,
                pageDown: 34,
                end: 35,
                home: 36,
                left: 37,
                up: 38,
                right: 39,
                down: 40
            };
            var i;
            if (typeof this.options.keyBindings == 'object') {
                for (i in this.options.keyBindings) {
                    if (typeof this.options.keyBindings[i] == 'string') {
                        this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
                    }
                }
            } else {
                this.options.keyBindings = {};
            }
            for (i in keys) {
                this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
            }
            utils.addEvent(window, 'keydown', this);
            this.on('destroy', function() {
                utils.removeEvent(window, 'keydown', this);
            });
        },
        _key: function(e) {
            if (!this.enabled) {
                return;
            }
            var snap = this.options.snap, newX = snap ? this.currentPage.pageX : this.x, newY = snap ? this.currentPage.pageY : this.y, now = utils.getTime(), prevTime = this.keyTime || 0, acceleration = 0.250, pos;
            if (this.options.useTransition && this.isInTransition) {
                pos = this.getComputedPosition();
                this._translate(Math.round(pos.x), Math.round(pos.y));
                this.isInTransition = false;
            }
            this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;
            switch (e.keyCode) {
            case this.options.keyBindings.pageUp:
                if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
                    newX += snap ? 1 : this.wrapperWidth;
                } else {
                    newY += snap ? 1 : this.wrapperHeight;
                }
                break;
            case this.options.keyBindings.pageDown:
                if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
                    newX -= snap ? 1 : this.wrapperWidth;
                } else {
                    newY -= snap ? 1 : this.wrapperHeight;
                }
                break;
            case this.options.keyBindings.end:
                newX = snap ? this.pages.length - 1 : this.maxScrollX;
                newY = snap ? this.pages[0].length - 1 : this.maxScrollY;
                break;
            case this.options.keyBindings.home:
                newX = 0;
                newY = 0;
                break;
            case this.options.keyBindings.left:
                newX += snap ? -1 : 5 + this.keyAcceleration >> 0;
                break;
            case this.options.keyBindings.up:
                newY += snap ? 1 : 5 + this.keyAcceleration >> 0;
                break;
            case this.options.keyBindings.right:
                newX -= snap ? -1 : 5 + this.keyAcceleration >> 0;
                break;
            case this.options.keyBindings.down:
                newY -= snap ? 1 : 5 + this.keyAcceleration >> 0;
                break;
            default:
                return;
            }
            if (snap) {
                this.goToPage(newX, newY);
                return;
            }
            if (newX > 0) {
                newX = 0;
                this.keyAcceleration = 0;
            } else if (newX < this.maxScrollX) {
                newX = this.maxScrollX;
                this.keyAcceleration = 0;
            }
            if (newY > 0) {
                newY = 0;
                this.keyAcceleration = 0;
            } else if (newY < this.maxScrollY) {
                newY = this.maxScrollY;
                this.keyAcceleration = 0;
            }
            this.scrollTo(newX, newY, 0);
            this.keyTime = now;
        },
        _animate: function(destX, destY, duration, easingFn) {
            var that = this
              , startX = this.x
              , startY = this.y
              , startTime = utils.getTime()
              , destTime = startTime + duration;
            function step() {
                var now = utils.getTime(), newX, newY, easing;
                if (now >= destTime) {
                    that.isAnimating = false;
                    that._translate(destX, destY);
                    if (!that.resetPosition(that.options.bounceTime)) {
                        that._execEvent('scrollEnd');
                    }
                    return;
                }
                now = (now - startTime) / duration;
                easing = easingFn(now);
                newX = (destX - startX) * easing + startX;
                newY = (destY - startY) * easing + startY;
                that._translate(newX, newY);
                if (that.isAnimating) {
                    rAF(step);
                }
            }
            this.isAnimating = true;
            step();
        },
        handleEvent: function(e) {
            switch (e.type) {
            case 'touchstart':
            case 'MSPointerDown':
            case 'mousedown':
                this._start(e);
                if (this.options.zoom && e.touches && e.touches.length > 1) {
                    this._zoomStart(e);
                }
                break;
            case 'touchmove':
            case 'MSPointerMove':
            case 'mousemove':
                if (this.options.zoom && e.touches && e.touches[1]) {
                    this._zoom(e);
                    return;
                }
                this._move(e);
                break;
            case 'touchend':
            case 'MSPointerUp':
            case 'mouseup':
            case 'touchcancel':
            case 'MSPointerCancel':
            case 'mousecancel':
                if (this.scaled) {
                    this._zoomEnd(e);
                    return;
                }
                this._end(e);
                break;
            case 'orientationchange':
            case 'resize':
                this._resize();
                break;
            case 'transitionend':
            case 'webkitTransitionEnd':
            case 'oTransitionEnd':
            case 'MSTransitionEnd':
                this._transitionEnd(e);
                break;
            case 'wheel':
            case 'DOMMouseScroll':
            case 'mousewheel':
                if (this.options.wheelAction == 'zoom') {
                    this._wheelZoom(e);
                    return;
                }
                this._wheel(e);
                break;
            case 'keydown':
                this._key(e);
                break;
            }
        }
    };
    function createDefaultScrollbar(direction, interactive, type) {
        var scrollbar = document.createElement('div')
          , indicator = document.createElement('div');
        if (type === true) {
            scrollbar.style.cssText = 'position:absolute;z-index:9999';
            indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
        }
        indicator.className = 'iScrollIndicator';
        if (direction == 'h') {
            if (type === true) {
                scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
                indicator.style.height = '100%';
            }
            scrollbar.className = 'iScrollHorizontalScrollbar';
        } else {
            if (type === true) {
                scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
                indicator.style.width = '100%';
            }
            scrollbar.className = 'iScrollVerticalScrollbar';
        }
        scrollbar.style.cssText += ';overflow:hidden';
        if (!interactive) {
            scrollbar.style.pointerEvents = 'none';
        }
        scrollbar.appendChild(indicator);
        return scrollbar;
    }
    function Indicator(scroller, options) {
        this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
        this.wrapperStyle = this.wrapper.style;
        this.indicator = this.wrapper.children[0];
        this.indicatorStyle = this.indicator.style;
        this.scroller = scroller;
        this.options = {
            listenX: true,
            listenY: true,
            interactive: false,
            resize: true,
            defaultScrollbars: false,
            shrink: false,
            fade: false,
            speedRatioX: 0,
            speedRatioY: 0
        };
        for (var i in options) {
            this.options[i] = options[i];
        }
        this.sizeRatioX = 1;
        this.sizeRatioY = 1;
        this.maxPosX = 0;
        this.maxPosY = 0;
        if (this.options.interactive) {
            if (!this.options.disableTouch) {
                utils.addEvent(this.indicator, 'touchstart', this);
                utils.addEvent(window, 'touchend', this);
            }
            if (!this.options.disablePointer) {
                utils.addEvent(this.indicator, 'MSPointerDown', this);
                utils.addEvent(window, 'MSPointerUp', this);
            }
            if (!this.options.disableMouse) {
                utils.addEvent(this.indicator, 'mousedown', this);
                utils.addEvent(window, 'mouseup', this);
            }
        }
        if (this.options.fade) {
            this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
            this.wrapperStyle[utils.style.transitionDuration] = utils.isBadAndroid ? '0.001s' : '0ms';
            this.wrapperStyle.opacity = '0';
        }
    }
    Indicator.prototype = {
        handleEvent: function(e) {
            switch (e.type) {
            case 'touchstart':
            case 'MSPointerDown':
            case 'mousedown':
                this._start(e);
                break;
            case 'touchmove':
            case 'MSPointerMove':
            case 'mousemove':
                this._move(e);
                break;
            case 'touchend':
            case 'MSPointerUp':
            case 'mouseup':
            case 'touchcancel':
            case 'MSPointerCancel':
            case 'mousecancel':
                this._end(e);
                break;
            }
        },
        destroy: function() {
            if (this.options.interactive) {
                utils.removeEvent(this.indicator, 'touchstart', this);
                utils.removeEvent(this.indicator, 'MSPointerDown', this);
                utils.removeEvent(this.indicator, 'mousedown', this);
                utils.removeEvent(window, 'touchmove', this);
                utils.removeEvent(window, 'MSPointerMove', this);
                utils.removeEvent(window, 'mousemove', this);
                utils.removeEvent(window, 'touchend', this);
                utils.removeEvent(window, 'MSPointerUp', this);
                utils.removeEvent(window, 'mouseup', this);
            }
            if (this.options.defaultScrollbars) {
                this.wrapper.parentNode.removeChild(this.wrapper);
            }
        },
        _start: function(e) {
            var point = e.touches ? e.touches[0] : e;
            e.preventDefault();
            e.stopPropagation();
            this.transitionTime();
            this.initiated = true;
            this.moved = false;
            this.lastPointX = point.pageX;
            this.lastPointY = point.pageY;
            this.startTime = utils.getTime();
            if (!this.options.disableTouch) {
                utils.addEvent(window, 'touchmove', this);
            }
            if (!this.options.disablePointer) {
                utils.addEvent(window, 'MSPointerMove', this);
            }
            if (!this.options.disableMouse) {
                utils.addEvent(window, 'mousemove', this);
            }
            this.scroller._execEvent('beforeScrollStart');
        },
        _move: function(e) {
            var point = e.touches ? e.touches[0] : e, deltaX, deltaY, newX, newY, timestamp = utils.getTime();
            if (!this.moved) {
                this.scroller._execEvent('scrollStart');
            }
            this.moved = true;
            deltaX = point.pageX - this.lastPointX;
            this.lastPointX = point.pageX;
            deltaY = point.pageY - this.lastPointY;
            this.lastPointY = point.pageY;
            newX = this.x + deltaX;
            newY = this.y + deltaY;
            this._pos(newX, newY);
            e.preventDefault();
            e.stopPropagation();
        },
        _end: function(e) {
            if (!this.initiated) {
                return;
            }
            this.initiated = false;
            e.preventDefault();
            e.stopPropagation();
            utils.removeEvent(window, 'touchmove', this);
            utils.removeEvent(window, 'MSPointerMove', this);
            utils.removeEvent(window, 'mousemove', this);
            if (this.scroller.options.snap) {
                var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);
                var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - snap.x), 1000), Math.min(Math.abs(this.scroller.y - snap.y), 1000)), 300);
                if (this.scroller.x != snap.x || this.scroller.y != snap.y) {
                    this.scroller.directionX = 0;
                    this.scroller.directionY = 0;
                    this.scroller.currentPage = snap;
                    this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
                }
            }
            if (this.moved) {
                this.scroller._execEvent('scrollEnd');
            }
        },
        transitionTime: function(time) {
            time = time || 0;
            this.indicatorStyle[utils.style.transitionDuration] = time + 'ms';
            if (!time && utils.isBadAndroid) {
                this.indicatorStyle[utils.style.transitionDuration] = '0.001s';
            }
        },
        transitionTimingFunction: function(easing) {
            this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
        },
        refresh: function() {
            this.transitionTime();
            if (this.options.listenX && !this.options.listenY) {
                this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
            } else if (this.options.listenY && !this.options.listenX) {
                this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
            } else {
                this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
            }
            if (this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll) {
                utils.addClass(this.wrapper, 'iScrollBothScrollbars');
                utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');
                if (this.options.defaultScrollbars && this.options.customStyle) {
                    if (this.options.listenX) {
                        this.wrapper.style.right = '8px';
                    } else {
                        this.wrapper.style.bottom = '8px';
                    }
                }
            } else {
                utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
                utils.addClass(this.wrapper, 'iScrollLoneScrollbar');
                if (this.options.defaultScrollbars && this.options.customStyle) {
                    if (this.options.listenX) {
                        this.wrapper.style.right = '2px';
                    } else {
                        this.wrapper.style.bottom = '2px';
                    }
                }
            }
            var r = this.wrapper.offsetHeight;
            if (this.options.listenX) {
                this.wrapperWidth = this.wrapper.clientWidth;
                if (this.options.resize) {
                    this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
                    this.indicatorStyle.width = this.indicatorWidth + 'px';
                } else {
                    this.indicatorWidth = this.indicator.clientWidth;
                }
                this.maxPosX = this.wrapperWidth - this.indicatorWidth;
                if (this.options.shrink == 'clip') {
                    this.minBoundaryX = -this.indicatorWidth + 8;
                    this.maxBoundaryX = this.wrapperWidth - 8;
                } else {
                    this.minBoundaryX = 0;
                    this.maxBoundaryX = this.maxPosX;
                }
                this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX));
            }
            if (this.options.listenY) {
                this.wrapperHeight = this.wrapper.clientHeight;
                if (this.options.resize) {
                    this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
                    this.indicatorStyle.height = this.indicatorHeight + 'px';
                } else {
                    this.indicatorHeight = this.indicator.clientHeight;
                }
                this.maxPosY = this.wrapperHeight - this.indicatorHeight;
                if (this.options.shrink == 'clip') {
                    this.minBoundaryY = -this.indicatorHeight + 8;
                    this.maxBoundaryY = this.wrapperHeight - 8;
                } else {
                    this.minBoundaryY = 0;
                    this.maxBoundaryY = this.maxPosY;
                }
                this.maxPosY = this.wrapperHeight - this.indicatorHeight;
                this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY));
            }
            this.updatePosition();
        },
        updatePosition: function() {
            var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0
              , y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;
            if (!this.options.ignoreBoundaries) {
                if (x < this.minBoundaryX) {
                    if (this.options.shrink == 'scale') {
                        this.width = Math.max(this.indicatorWidth + x, 8);
                        this.indicatorStyle.width = this.width + 'px';
                    }
                    x = this.minBoundaryX;
                } else if (x > this.maxBoundaryX) {
                    if (this.options.shrink == 'scale') {
                        this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
                        this.indicatorStyle.width = this.width + 'px';
                        x = this.maxPosX + this.indicatorWidth - this.width;
                    } else {
                        x = this.maxBoundaryX;
                    }
                } else if (this.options.shrink == 'scale' && this.width != this.indicatorWidth) {
                    this.width = this.indicatorWidth;
                    this.indicatorStyle.width = this.width + 'px';
                }
                if (y < this.minBoundaryY) {
                    if (this.options.shrink == 'scale') {
                        this.height = Math.max(this.indicatorHeight + y * 3, 8);
                        this.indicatorStyle.height = this.height + 'px';
                    }
                    y = this.minBoundaryY;
                } else if (y > this.maxBoundaryY) {
                    if (this.options.shrink == 'scale') {
                        this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
                        this.indicatorStyle.height = this.height + 'px';
                        y = this.maxPosY + this.indicatorHeight - this.height;
                    } else {
                        y = this.maxBoundaryY;
                    }
                } else if (this.options.shrink == 'scale' && this.height != this.indicatorHeight) {
                    this.height = this.indicatorHeight;
                    this.indicatorStyle.height = this.height + 'px';
                }
            }
            this.x = x;
            this.y = y;
            if (this.scroller.options.useTransform) {
                this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
            } else {
                this.indicatorStyle.left = x + 'px';
                this.indicatorStyle.top = y + 'px';
            }
        },
        _pos: function(x, y) {
            if (x < 0) {
                x = 0;
            } else if (x > this.maxPosX) {
                x = this.maxPosX;
            }
            if (y < 0) {
                y = 0;
            } else if (y > this.maxPosY) {
                y = this.maxPosY;
            }
            x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
            y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;
            this.scroller.scrollTo(x, y);
        },
        fade: function(val, hold) {
            if (hold && !this.visible) {
                return;
            }
            clearTimeout(this.fadeTimeout);
            this.fadeTimeout = null;
            var time = val ? 250 : 500
              , delay = val ? 0 : 300;
            val = val ? '1' : '0';
            this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';
            this.fadeTimeout = setTimeout((function(val) {
                this.wrapperStyle.opacity = val;
                this.visible = +val;
            }
            ).bind(this, val), delay);
        }
    };
    IScroll.utils = utils;
    if (typeof module != 'undefined' && module.exports) {
        module.exports = IScroll;
    } else {
        window.IScroll = IScroll;
    }
}
)(window, document, Math);
;(function() {
    'use strict';
    var $;
    var Swiper = function(container, params) {
        if (!(this instanceof Swiper))
            return new Swiper(container,params);
        var defaults = {
            direction: 'horizontal',
            touchEventsTarget: 'container',
            initialSlide: 0,
            speed: 300,
            autoplay: false,
            autoplayDisableOnInteraction: true,
            autoplayStopOnLast: false,
            iOSEdgeSwipeDetection: false,
            iOSEdgeSwipeThreshold: 20,
            freeMode: false,
            freeModeMomentum: true,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: true,
            freeModeMomentumBounceRatio: 1,
            freeModeSticky: false,
            freeModeMinimumVelocity: 0.02,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: 'slide',
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            },
            flip: {
                slideShadows: true,
                limitRotation: true
            },
            cube: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94
            },
            fade: {
                crossFade: false
            },
            parallax: false,
            scrollbar: null,
            scrollbarHide: true,
            scrollbarDraggable: false,
            scrollbarSnapOnRelease: false,
            keyboardControl: false,
            mousewheelControl: false,
            mousewheelReleaseOnEdges: false,
            mousewheelInvert: false,
            mousewheelForceToAxis: false,
            mousewheelSensitivity: 1,
            hashnav: false,
            breakpoints: undefined,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: 'column',
            slidesPerGroup: 1,
            centeredSlides: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: true,
            onlyExternal: false,
            threshold: 0,
            touchMoveStopPropagation: true,
            uniqueNavElements: true,
            pagination: null,
            paginationElement: 'span',
            paginationClickable: false,
            paginationHide: false,
            paginationBulletRender: null,
            paginationProgressRender: null,
            paginationFractionRender: null,
            paginationCustomRender: null,
            paginationType: 'bullets',
            resistance: true,
            resistanceRatio: 0.85,
            nextButton: null,
            prevButton: null,
            watchSlidesProgress: false,
            watchSlidesVisibility: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            lazyLoading: false,
            lazyLoadingInPrevNext: false,
            lazyLoadingInPrevNextAmount: 1,
            lazyLoadingOnTransitionStart: false,
            preloadImages: true,
            updateOnImagesReady: true,
            loop: false,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            control: undefined,
            controlInverse: false,
            controlBy: 'slide',
            allowSwipeToPrev: true,
            allowSwipeToNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: 'swiper-no-swiping',
            slideClass: 'swiper-slide',
            slideActiveClass: 'swiper-slide-active',
            slideVisibleClass: 'swiper-slide-visible',
            slideDuplicateClass: 'swiper-slide-duplicate',
            slideNextClass: 'swiper-slide-next',
            slidePrevClass: 'swiper-slide-prev',
            wrapperClass: 'swiper-wrapper',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            buttonDisabledClass: 'swiper-button-disabled',
            paginationCurrentClass: 'swiper-pagination-current',
            paginationTotalClass: 'swiper-pagination-total',
            paginationHiddenClass: 'swiper-pagination-hidden',
            paginationProgressbarClass: 'swiper-pagination-progressbar',
            observer: false,
            observeParents: false,
            a11y: false,
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}',
            runCallbacksOnInit: true
        };
        var initialVirtualTranslate = params && params.virtualTranslate;
        params = params || {};
        var originalParams = {};
        for (var param in params) {
            if (typeof params[param] === 'object' && params[param] !== null && !(params[param].nodeType || params[param] === window || params[param] === document || (typeof Dom7 !== 'undefined' && params[param]instanceof Dom7) || (typeof jQuery !== 'undefined' && params[param]instanceof jQuery))) {
                originalParams[param] = {};
                for (var deepParam in params[param]) {
                    originalParams[param][deepParam] = params[param][deepParam];
                }
            } else {
                originalParams[param] = params[param];
            }
        }
        for (var def in defaults) {
            if (typeof params[def] === 'undefined') {
                params[def] = defaults[def];
            } else if (typeof params[def] === 'object') {
                for (var deepDef in defaults[def]) {
                    if (typeof params[def][deepDef] === 'undefined') {
                        params[def][deepDef] = defaults[def][deepDef];
                    }
                }
            }
        }
        var s = this;
        s.params = params;
        s.originalParams = originalParams;
        s.classNames = [];
        if (typeof $ !== 'undefined' && typeof Dom7 !== 'undefined') {
            $ = Dom7;
        }
        if (typeof $ === 'undefined') {
            if (typeof Dom7 === 'undefined') {
                $ = window.Dom7 || window.Zepto || window.jQuery;
            } else {
                $ = Dom7;
            }
            if (!$)
                return;
        }
        s.$ = $;
        s.currentBreakpoint = undefined;
        s.getActiveBreakpoint = function() {
            if (!s.params.breakpoints)
                return false;
            var breakpoint = false;
            var points = [], point;
            for (point in s.params.breakpoints) {
                if (s.params.breakpoints.hasOwnProperty(point)) {
                    points.push(point);
                }
            }
            points.sort(function(a, b) {
                return parseInt(a, 10) > parseInt(b, 10);
            });
            for (var i = 0; i < points.length; i++) {
                point = points[i];
                if (point >= window.innerWidth && !breakpoint) {
                    breakpoint = point;
                }
            }
            return breakpoint || 'max';
        }
        ;
        s.setBreakpoint = function() {
            var breakpoint = s.getActiveBreakpoint();
            if (breakpoint && s.currentBreakpoint !== breakpoint) {
                var breakPointsParams = breakpoint in s.params.breakpoints ? s.params.breakpoints[breakpoint] : s.originalParams;
                var needsReLoop = s.params.loop && (breakPointsParams.slidesPerView !== s.params.slidesPerView);
                for (var param in breakPointsParams) {
                    s.params[param] = breakPointsParams[param];
                }
                s.currentBreakpoint = breakpoint;
                if (needsReLoop && s.destroyLoop) {
                    s.reLoop(true);
                }
            }
        }
        ;
        if (s.params.breakpoints) {
            s.setBreakpoint();
        }
        s.container = $(container);
        if (s.container.length === 0)
            return;
        if (s.container.length > 1) {
            var swipers = [];
            s.container.each(function() {
                var container = this;
                swipers.push(new Swiper(this,params));
            });
            return swipers;
        }
        s.container[0].swiper = s;
        s.container.data('swiper', s);
        s.classNames.push('swiper-container-' + s.params.direction);
        if (s.params.freeMode) {
            s.classNames.push('swiper-container-free-mode');
        }
        if (!s.support.flexbox) {
            s.classNames.push('swiper-container-no-flexbox');
            s.params.slidesPerColumn = 1;
        }
        if (s.params.autoHeight) {
            s.classNames.push('swiper-container-autoheight');
        }
        if (s.params.parallax || s.params.watchSlidesVisibility) {
            s.params.watchSlidesProgress = true;
        }
        if (['cube', 'coverflow', 'flip'].indexOf(s.params.effect) >= 0) {
            if (s.support.transforms3d) {
                s.params.watchSlidesProgress = true;
                s.classNames.push('swiper-container-3d');
            } else {
                s.params.effect = 'slide';
            }
        }
        if (s.params.effect !== 'slide') {
            s.classNames.push('swiper-container-' + s.params.effect);
        }
        if (s.params.effect === 'cube') {
            s.params.resistanceRatio = 0;
            s.params.slidesPerView = 1;
            s.params.slidesPerColumn = 1;
            s.params.slidesPerGroup = 1;
            s.params.centeredSlides = false;
            s.params.spaceBetween = 0;
            s.params.virtualTranslate = true;
            s.params.setWrapperSize = false;
        }
        if (s.params.effect === 'fade' || s.params.effect === 'flip') {
            s.params.slidesPerView = 1;
            s.params.slidesPerColumn = 1;
            s.params.slidesPerGroup = 1;
            s.params.watchSlidesProgress = true;
            s.params.spaceBetween = 0;
            s.params.setWrapperSize = false;
            if (typeof initialVirtualTranslate === 'undefined') {
                s.params.virtualTranslate = true;
            }
        }
        if (s.params.grabCursor && s.support.touch) {
            s.params.grabCursor = false;
        }
        s.wrapper = s.container.children('.' + s.params.wrapperClass);
        if (s.params.pagination) {
            s.paginationContainer = $(s.params.pagination);
            if (s.params.uniqueNavElements && typeof s.params.pagination === 'string' && s.paginationContainer.length > 1 && s.container.find(s.params.pagination).length === 1) {
                s.paginationContainer = s.container.find(s.params.pagination);
            }
            if (s.params.paginationType === 'bullets' && s.params.paginationClickable) {
                s.paginationContainer.addClass('swiper-pagination-clickable');
            } else {
                s.params.paginationClickable = false;
            }
            s.paginationContainer.addClass('swiper-pagination-' + s.params.paginationType);
        }
        if (s.params.nextButton || s.params.prevButton) {
            if (s.params.nextButton) {
                s.nextButton = $(s.params.nextButton);
                if (s.params.uniqueNavElements && typeof s.params.nextButton === 'string' && s.nextButton.length > 1 && s.container.find(s.params.nextButton).length === 1) {
                    s.nextButton = s.container.find(s.params.nextButton);
                }
            }
            if (s.params.prevButton) {
                s.prevButton = $(s.params.prevButton);
                if (s.params.uniqueNavElements && typeof s.params.prevButton === 'string' && s.prevButton.length > 1 && s.container.find(s.params.prevButton).length === 1) {
                    s.prevButton = s.container.find(s.params.prevButton);
                }
            }
        }
        s.isHorizontal = function() {
            return s.params.direction === 'horizontal';
        }
        ;
        s.rtl = s.isHorizontal() && (s.container[0].dir.toLowerCase() === 'rtl' || s.container.css('direction') === 'rtl');
        if (s.rtl) {
            s.classNames.push('swiper-container-rtl');
        }
        if (s.rtl) {
            s.wrongRTL = s.wrapper.css('display') === '-webkit-box';
        }
        if (s.params.slidesPerColumn > 1) {
            s.classNames.push('swiper-container-multirow');
        }
        if (s.device.android) {
            s.classNames.push('swiper-container-android');
        }
        s.container.addClass(s.classNames.join(' '));
        s.translate = 0;
        s.progress = 0;
        s.velocity = 0;
        s.lockSwipeToNext = function() {
            s.params.allowSwipeToNext = false;
        }
        ;
        s.lockSwipeToPrev = function() {
            s.params.allowSwipeToPrev = false;
        }
        ;
        s.lockSwipes = function() {
            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = false;
        }
        ;
        s.unlockSwipeToNext = function() {
            s.params.allowSwipeToNext = true;
        }
        ;
        s.unlockSwipeToPrev = function() {
            s.params.allowSwipeToPrev = true;
        }
        ;
        s.unlockSwipes = function() {
            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = true;
        }
        ;
        function round(a) {
            return Math.floor(a);
        }
        if (s.params.grabCursor) {
            s.container[0].style.cursor = 'move';
            s.container[0].style.cursor = '-webkit-grab';
            s.container[0].style.cursor = '-moz-grab';
            s.container[0].style.cursor = 'grab';
        }
        s.imagesToLoad = [];
        s.imagesLoaded = 0;
        s.loadImage = function(imgElement, src, srcset, checkForComplete, callback) {
            var image;
            function onReady() {
                if (callback)
                    callback();
            }
            if (!imgElement.complete || !checkForComplete) {
                if (src) {
                    image = new window.Image();
                    image.onload = onReady;
                    image.onerror = onReady;
                    if (srcset) {
                        image.srcset = srcset;
                    }
                    if (src) {
                        image.src = src;
                    }
                } else {
                    onReady();
                }
            } else {
                onReady();
            }
        }
        ;
        s.preloadImages = function() {
            s.imagesToLoad = s.container.find('img');
            function _onReady() {
                if (typeof s === 'undefined' || s === null)
                    return;
                if (s.imagesLoaded !== undefined)
                    s.imagesLoaded++;
                if (s.imagesLoaded === s.imagesToLoad.length) {
                    if (s.params.updateOnImagesReady)
                        s.update();
                    s.emit('onImagesReady', s);
                }
            }
            for (var i = 0; i < s.imagesToLoad.length; i++) {
                s.loadImage(s.imagesToLoad[i], (s.imagesToLoad[i].currentSrc || s.imagesToLoad[i].getAttribute('src')), (s.imagesToLoad[i].srcset || s.imagesToLoad[i].getAttribute('srcset')), true, _onReady);
            }
        }
        ;
        s.autoplayTimeoutId = undefined;
        s.autoplaying = false;
        s.autoplayPaused = false;
        function autoplay() {
            s.autoplayTimeoutId = setTimeout(function() {
                if (s.params.loop) {
                    s.fixLoop();
                    s._slideNext();
                    s.emit('onAutoplay', s);
                } else {
                    if (!s.isEnd) {
                        s._slideNext();
                        s.emit('onAutoplay', s);
                    } else {
                        if (!params.autoplayStopOnLast) {
                            s._slideTo(0);
                            s.emit('onAutoplay', s);
                        } else {
                            s.stopAutoplay();
                        }
                    }
                }
            }, s.params.autoplay);
        }
        s.startAutoplay = function() {
            if (typeof s.autoplayTimeoutId !== 'undefined')
                return false;
            if (!s.params.autoplay)
                return false;
            if (s.autoplaying)
                return false;
            s.autoplaying = true;
            s.emit('onAutoplayStart', s);
            autoplay();
        }
        ;
        s.stopAutoplay = function(internal) {
            if (!s.autoplayTimeoutId)
                return;
            if (s.autoplayTimeoutId)
                clearTimeout(s.autoplayTimeoutId);
            s.autoplaying = false;
            s.autoplayTimeoutId = undefined;
            s.emit('onAutoplayStop', s);
        }
        ;
        s.pauseAutoplay = function(speed) {
            if (s.autoplayPaused)
                return;
            if (s.autoplayTimeoutId)
                clearTimeout(s.autoplayTimeoutId);
            s.autoplayPaused = true;
            if (speed === 0) {
                s.autoplayPaused = false;
                autoplay();
            } else {
                s.wrapper.transitionEnd(function() {
                    if (!s)
                        return;
                    s.autoplayPaused = false;
                    if (!s.autoplaying) {
                        s.stopAutoplay();
                    } else {
                        autoplay();
                    }
                });
            }
        }
        ;
        s.minTranslate = function() {
            return (-s.snapGrid[0]);
        }
        ;
        s.maxTranslate = function() {
            return (-s.snapGrid[s.snapGrid.length - 1]);
        }
        ;
        s.updateAutoHeight = function() {
            var slide = s.slides.eq(s.activeIndex)[0];
            if (typeof slide !== 'undefined') {
                var newHeight = slide.offsetHeight;
                if (newHeight)
                    s.wrapper.css('height', newHeight + 'px');
            }
        }
        ;
        s.updateContainerSize = function() {
            var width, height;
            if (typeof s.params.width !== 'undefined') {
                width = s.params.width;
            } else {
                width = s.container[0].clientWidth;
            }
            if (typeof s.params.height !== 'undefined') {
                height = s.params.height;
            } else {
                height = s.container[0].clientHeight;
            }
            if (width === 0 && s.isHorizontal() || height === 0 && !s.isHorizontal()) {
                return;
            }
            width = width - parseInt(s.container.css('padding-left'), 10) - parseInt(s.container.css('padding-right'), 10);
            height = height - parseInt(s.container.css('padding-top'), 10) - parseInt(s.container.css('padding-bottom'), 10);
            s.width = width;
            s.height = height;
            s.size = s.isHorizontal() ? s.width : s.height;
        }
        ;
        s.updateSlidesSize = function() {
            s.slides = s.wrapper.children('.' + s.params.slideClass);
            s.snapGrid = [];
            s.slidesGrid = [];
            s.slidesSizesGrid = [];
            var spaceBetween = s.params.spaceBetween, slidePosition = -s.params.slidesOffsetBefore, i, prevSlideSize = 0, index = 0;
            if (typeof s.size === 'undefined')
                return;
            if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
                spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * s.size;
            }
            s.virtualSize = -spaceBetween;
            if (s.rtl)
                s.slides.css({
                    marginLeft: '',
                    marginTop: ''
                });
            else
                s.slides.css({
                    marginRight: '',
                    marginBottom: ''
                });
            var slidesNumberEvenToRows;
            if (s.params.slidesPerColumn > 1) {
                if (Math.floor(s.slides.length / s.params.slidesPerColumn) === s.slides.length / s.params.slidesPerColumn) {
                    slidesNumberEvenToRows = s.slides.length;
                } else {
                    slidesNumberEvenToRows = Math.ceil(s.slides.length / s.params.slidesPerColumn) * s.params.slidesPerColumn;
                }
                if (s.params.slidesPerView !== 'auto' && s.params.slidesPerColumnFill === 'row') {
                    slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, s.params.slidesPerView * s.params.slidesPerColumn);
                }
            }
            var slideSize;
            var slidesPerColumn = s.params.slidesPerColumn;
            var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
            var numFullColumns = slidesPerRow - (s.params.slidesPerColumn * slidesPerRow - s.slides.length);
            for (i = 0; i < s.slides.length; i++) {
                slideSize = 0;
                var slide = s.slides.eq(i);
                if (s.params.slidesPerColumn > 1) {
                    var newSlideOrderIndex;
                    var column, row;
                    if (s.params.slidesPerColumnFill === 'column') {
                        column = Math.floor(i / slidesPerColumn);
                        row = i - column * slidesPerColumn;
                        if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
                            if (++row >= slidesPerColumn) {
                                row = 0;
                                column++;
                            }
                        }
                        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
                        slide.css({
                            '-webkit-box-ordinal-group': newSlideOrderIndex,
                            '-moz-box-ordinal-group': newSlideOrderIndex,
                            '-ms-flex-order': newSlideOrderIndex,
                            '-webkit-order': newSlideOrderIndex,
                            'order': newSlideOrderIndex
                        });
                    } else {
                        row = Math.floor(i / slidesPerRow);
                        column = i - row * slidesPerRow;
                    }
                    slide.css({
                        'margin-top': (row !== 0 && s.params.spaceBetween) && (s.params.spaceBetween + 'px')
                    }).attr('data-swiper-column', column).attr('data-swiper-row', row);
                }
                if (slide.css('display') === 'none')
                    continue;
                if (s.params.slidesPerView === 'auto') {
                    slideSize = s.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
                    if (s.params.roundLengths)
                        slideSize = round(slideSize);
                } else {
                    slideSize = (s.size - (s.params.slidesPerView - 1) * spaceBetween) / s.params.slidesPerView;
                    if (s.params.roundLengths)
                        slideSize = round(slideSize);
                    if (s.isHorizontal()) {
                        s.slides[i].style.width = slideSize + 'px';
                    } else {
                        s.slides[i].style.height = slideSize + 'px';
                    }
                }
                s.slides[i].swiperSlideSize = slideSize;
                s.slidesSizesGrid.push(slideSize);
                if (s.params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (i === 0)
                        slidePosition = slidePosition - s.size / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1000)
                        slidePosition = 0;
                    if ((index) % s.params.slidesPerGroup === 0)
                        s.snapGrid.push(slidePosition);
                    s.slidesGrid.push(slidePosition);
                } else {
                    if ((index) % s.params.slidesPerGroup === 0)
                        s.snapGrid.push(slidePosition);
                    s.slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                s.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index++;
            }
            s.virtualSize = Math.max(s.virtualSize, s.size) + s.params.slidesOffsetAfter;
            var newSlidesGrid;
            if (s.rtl && s.wrongRTL && (s.params.effect === 'slide' || s.params.effect === 'coverflow')) {
                s.wrapper.css({
                    width: s.virtualSize + s.params.spaceBetween + 'px'
                });
            }
            if (!s.support.flexbox || s.params.setWrapperSize) {
                if (s.isHorizontal())
                    s.wrapper.css({
                        width: s.virtualSize + s.params.spaceBetween + 'px'
                    });
                else
                    s.wrapper.css({
                        height: s.virtualSize + s.params.spaceBetween + 'px'
                    });
            }
            if (s.params.slidesPerColumn > 1) {
                s.virtualSize = (slideSize + s.params.spaceBetween) * slidesNumberEvenToRows;
                s.virtualSize = Math.ceil(s.virtualSize / s.params.slidesPerColumn) - s.params.spaceBetween;
                s.wrapper.css({
                    width: s.virtualSize + s.params.spaceBetween + 'px'
                });
                if (s.params.centeredSlides) {
                    newSlidesGrid = [];
                    for (i = 0; i < s.snapGrid.length; i++) {
                        if (s.snapGrid[i] < s.virtualSize + s.snapGrid[0])
                            newSlidesGrid.push(s.snapGrid[i]);
                    }
                    s.snapGrid = newSlidesGrid;
                }
            }
            if (!s.params.centeredSlides) {
                newSlidesGrid = [];
                for (i = 0; i < s.snapGrid.length; i++) {
                    if (s.snapGrid[i] <= s.virtualSize - s.size) {
                        newSlidesGrid.push(s.snapGrid[i]);
                    }
                }
                s.snapGrid = newSlidesGrid;
                if (Math.floor(s.virtualSize - s.size) - Math.floor(s.snapGrid[s.snapGrid.length - 1]) > 1) {
                    s.snapGrid.push(s.virtualSize - s.size);
                }
            }
            if (s.snapGrid.length === 0)
                s.snapGrid = [0];
            if (s.params.spaceBetween !== 0) {
                if (s.isHorizontal()) {
                    if (s.rtl)
                        s.slides.css({
                            marginLeft: spaceBetween + 'px'
                        });
                    else
                        s.slides.css({
                            marginRight: spaceBetween + 'px'
                        });
                } else
                    s.slides.css({
                        marginBottom: spaceBetween + 'px'
                    });
            }
            if (s.params.watchSlidesProgress) {
                s.updateSlidesOffset();
            }
        }
        ;
        s.updateSlidesOffset = function() {
            for (var i = 0; i < s.slides.length; i++) {
                s.slides[i].swiperSlideOffset = s.isHorizontal() ? s.slides[i].offsetLeft : s.slides[i].offsetTop;
            }
        }
        ;
        s.updateSlidesProgress = function(translate) {
            if (typeof translate === 'undefined') {
                translate = s.translate || 0;
            }
            if (s.slides.length === 0)
                return;
            if (typeof s.slides[0].swiperSlideOffset === 'undefined')
                s.updateSlidesOffset();
            var offsetCenter = -translate;
            if (s.rtl)
                offsetCenter = translate;
            s.slides.removeClass(s.params.slideVisibleClass);
            for (var i = 0; i < s.slides.length; i++) {
                var slide = s.slides[i];
                var slideProgress = (offsetCenter - slide.swiperSlideOffset) / (slide.swiperSlideSize + s.params.spaceBetween);
                if (s.params.watchSlidesVisibility) {
                    var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
                    var slideAfter = slideBefore + s.slidesSizesGrid[i];
                    var isVisible = (slideBefore >= 0 && slideBefore < s.size) || (slideAfter > 0 && slideAfter <= s.size) || (slideBefore <= 0 && slideAfter >= s.size);
                    if (isVisible) {
                        s.slides.eq(i).addClass(s.params.slideVisibleClass);
                    }
                }
                slide.progress = s.rtl ? -slideProgress : slideProgress;
            }
        }
        ;
        s.updateProgress = function(translate) {
            if (typeof translate === 'undefined') {
                translate = s.translate || 0;
            }
            var translatesDiff = s.maxTranslate() - s.minTranslate();
            var wasBeginning = s.isBeginning;
            var wasEnd = s.isEnd;
            if (translatesDiff === 0) {
                s.progress = 0;
                s.isBeginning = s.isEnd = true;
            } else {
                s.progress = (translate - s.minTranslate()) / (translatesDiff);
                s.isBeginning = s.progress <= 0;
                s.isEnd = s.progress >= 1;
            }
            if (s.isBeginning && !wasBeginning)
                s.emit('onReachBeginning', s);
            if (s.isEnd && !wasEnd)
                s.emit('onReachEnd', s);
            if (s.params.watchSlidesProgress)
                s.updateSlidesProgress(translate);
            s.emit('onProgress', s, s.progress);
        }
        ;
        s.updateActiveIndex = function() {
            var translate = s.rtl ? s.translate : -s.translate;
            var newActiveIndex, i, snapIndex;
            for (i = 0; i < s.slidesGrid.length; i++) {
                if (typeof s.slidesGrid[i + 1] !== 'undefined') {
                    if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1] - (s.slidesGrid[i + 1] - s.slidesGrid[i]) / 2) {
                        newActiveIndex = i;
                    } else if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1]) {
                        newActiveIndex = i + 1;
                    }
                } else {
                    if (translate >= s.slidesGrid[i]) {
                        newActiveIndex = i;
                    }
                }
            }
            if (newActiveIndex < 0 || typeof newActiveIndex === 'undefined')
                newActiveIndex = 0;
            snapIndex = Math.floor(newActiveIndex / s.params.slidesPerGroup);
            if (snapIndex >= s.snapGrid.length)
                snapIndex = s.snapGrid.length - 1;
            if (newActiveIndex === s.activeIndex) {
                return;
            }
            s.snapIndex = snapIndex;
            s.previousIndex = s.activeIndex;
            s.activeIndex = newActiveIndex;
            s.updateClasses();
        }
        ;
        s.updateClasses = function() {
            s.slides.removeClass(s.params.slideActiveClass + ' ' + s.params.slideNextClass + ' ' + s.params.slidePrevClass);
            var activeSlide = s.slides.eq(s.activeIndex);
            activeSlide.addClass(s.params.slideActiveClass);
            var nextSlide = activeSlide.next('.' + s.params.slideClass).addClass(s.params.slideNextClass);
            if (s.params.loop && nextSlide.length === 0) {
                s.slides.eq(0).addClass(s.params.slideNextClass);
            }
            var prevSlide = activeSlide.prev('.' + s.params.slideClass).addClass(s.params.slidePrevClass);
            if (s.params.loop && prevSlide.length === 0) {
                s.slides.eq(-1).addClass(s.params.slidePrevClass);
            }
            if (s.paginationContainer && s.paginationContainer.length > 0) {
                var current, total = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
                if (s.params.loop) {
                    current = Math.ceil((s.activeIndex - s.loopedSlides) / s.params.slidesPerGroup);
                    if (current > s.slides.length - 1 - s.loopedSlides * 2) {
                        current = current - (s.slides.length - s.loopedSlides * 2);
                    }
                    if (current > total - 1)
                        current = current - total;
                    if (current < 0 && s.params.paginationType !== 'bullets')
                        current = total + current;
                } else {
                    if (typeof s.snapIndex !== 'undefined') {
                        current = s.snapIndex;
                    } else {
                        current = s.activeIndex || 0;
                    }
                }
                if (s.params.paginationType === 'bullets' && s.bullets && s.bullets.length > 0) {
                    s.bullets.removeClass(s.params.bulletActiveClass);
                    if (s.paginationContainer.length > 1) {
                        s.bullets.each(function() {
                            if ($(this).index() === current)
                                $(this).addClass(s.params.bulletActiveClass);
                        });
                    } else {
                        s.bullets.eq(current).addClass(s.params.bulletActiveClass);
                    }
                }
                if (s.params.paginationType === 'fraction') {
                    s.paginationContainer.find('.' + s.params.paginationCurrentClass).text(current + 1);
                    s.paginationContainer.find('.' + s.params.paginationTotalClass).text(total);
                }
                if (s.params.paginationType === 'progress') {
                    var scale = (current + 1) / total
                      , scaleX = scale
                      , scaleY = 1;
                    if (!s.isHorizontal()) {
                        scaleY = scale;
                        scaleX = 1;
                    }
                    s.paginationContainer.find('.' + s.params.paginationProgressbarClass).transform('translate3d(0,0,0) scaleX(' + scaleX + ') scaleY(' + scaleY + ')').transition(s.params.speed);
                }
                if (s.params.paginationType === 'custom' && s.params.paginationCustomRender) {
                    s.paginationContainer.html(s.params.paginationCustomRender(s, current + 1, total));
                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);
                }
            }
            if (!s.params.loop) {
                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
                    if (s.isBeginning) {
                        s.prevButton.addClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y)
                            s.a11y.disable(s.prevButton);
                    } else {
                        s.prevButton.removeClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y)
                            s.a11y.enable(s.prevButton);
                    }
                }
                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
                    if (s.isEnd) {
                        s.nextButton.addClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y)
                            s.a11y.disable(s.nextButton);
                    } else {
                        s.nextButton.removeClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y)
                            s.a11y.enable(s.nextButton);
                    }
                }
            }
        }
        ;
        s.updatePagination = function() {
            if (!s.params.pagination)
                return;
            if (s.paginationContainer && s.paginationContainer.length > 0) {
                var paginationHTML = '';
                if (s.params.paginationType === 'bullets') {
                    var numberOfBullets = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
                    for (var i = 0; i < numberOfBullets; i++) {
                        if (s.params.paginationBulletRender) {
                            paginationHTML += s.params.paginationBulletRender(i, s.params.bulletClass);
                        } else {
                            paginationHTML += '<' + s.params.paginationElement + ' class="' + s.params.bulletClass + '"></' + s.params.paginationElement + '>';
                        }
                    }
                    s.paginationContainer.html(paginationHTML);
                    s.bullets = s.paginationContainer.find('.' + s.params.bulletClass);
                    if (s.params.paginationClickable && s.params.a11y && s.a11y) {
                        s.a11y.initPagination();
                    }
                }
                if (s.params.paginationType === 'fraction') {
                    if (s.params.paginationFractionRender) {
                        paginationHTML = s.params.paginationFractionRender(s, s.params.paginationCurrentClass, s.params.paginationTotalClass);
                    } else {
                        paginationHTML = '<span class="' + s.params.paginationCurrentClass + '"></span>' + ' / ' + '<span class="' + s.params.paginationTotalClass + '"></span>';
                    }
                    s.paginationContainer.html(paginationHTML);
                }
                if (s.params.paginationType === 'progress') {
                    if (s.params.paginationProgressRender) {
                        paginationHTML = s.params.paginationProgressRender(s, s.params.paginationProgressbarClass);
                    } else {
                        paginationHTML = '<span class="' + s.params.paginationProgressbarClass + '"></span>';
                    }
                    s.paginationContainer.html(paginationHTML);
                }
                if (s.params.paginationType !== 'custom') {
                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);
                }
            }
        }
        ;
        s.update = function(updateTranslate) {
            s.updateContainerSize();
            s.updateSlidesSize();
            s.updateProgress();
            s.updatePagination();
            s.updateClasses();
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.set();
            }
            function forceSetTranslate() {
                newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
                s.setWrapperTranslate(newTranslate);
                s.updateActiveIndex();
                s.updateClasses();
            }
            if (updateTranslate) {
                var translated, newTranslate;
                if (s.controller && s.controller.spline) {
                    s.controller.spline = undefined;
                }
                if (s.params.freeMode) {
                    forceSetTranslate();
                    if (s.params.autoHeight) {
                        s.updateAutoHeight();
                    }
                } else {
                    if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
                        translated = s.slideTo(s.slides.length - 1, 0, false, true);
                    } else {
                        translated = s.slideTo(s.activeIndex, 0, false, true);
                    }
                    if (!translated) {
                        forceSetTranslate();
                    }
                }
            } else if (s.params.autoHeight) {
                s.updateAutoHeight();
            }
        }
        ;
        s.onResize = function(forceUpdatePagination) {
            if (s.params.breakpoints) {
                s.setBreakpoint();
            }
            var allowSwipeToPrev = s.params.allowSwipeToPrev;
            var allowSwipeToNext = s.params.allowSwipeToNext;
            s.params.allowSwipeToPrev = s.params.allowSwipeToNext = true;
            s.updateContainerSize();
            s.updateSlidesSize();
            if (s.params.slidesPerView === 'auto' || s.params.freeMode || forceUpdatePagination)
                s.updatePagination();
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.set();
            }
            if (s.controller && s.controller.spline) {
                s.controller.spline = undefined;
            }
            var slideChangedBySlideTo = false;
            if (s.params.freeMode) {
                var newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
                s.setWrapperTranslate(newTranslate);
                s.updateActiveIndex();
                s.updateClasses();
                if (s.params.autoHeight) {
                    s.updateAutoHeight();
                }
            } else {
                s.updateClasses();
                if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
                    slideChangedBySlideTo = s.slideTo(s.slides.length - 1, 0, false, true);
                } else {
                    slideChangedBySlideTo = s.slideTo(s.activeIndex, 0, false, true);
                }
            }
            if (s.params.lazyLoading && !slideChangedBySlideTo && s.lazy) {
                s.lazy.load();
            }
            s.params.allowSwipeToPrev = allowSwipeToPrev;
            s.params.allowSwipeToNext = allowSwipeToNext;
        }
        ;
        var desktopEvents = ['mousedown', 'mousemove', 'mouseup'];
        if (window.navigator.pointerEnabled)
            desktopEvents = ['pointerdown', 'pointermove', 'pointerup'];
        else if (window.navigator.msPointerEnabled)
            desktopEvents = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
        s.touchEvents = {
            start: s.support.touch || !s.params.simulateTouch ? 'touchstart' : desktopEvents[0],
            move: s.support.touch || !s.params.simulateTouch ? 'touchmove' : desktopEvents[1],
            end: s.support.touch || !s.params.simulateTouch ? 'touchend' : desktopEvents[2]
        };
        if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
            (s.params.touchEventsTarget === 'container' ? s.container : s.wrapper).addClass('swiper-wp8-' + s.params.direction);
        }
        s.initEvents = function(detach) {
            var actionDom = detach ? 'off' : 'on';
            var action = detach ? 'removeEventListener' : 'addEventListener';
            var touchEventsTarget = s.params.touchEventsTarget === 'container' ? s.container[0] : s.wrapper[0];
            var target = s.support.touch ? touchEventsTarget : document;
            var moveCapture = s.params.nested ? true : false;
            if (s.browser.ie) {
                touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
                target[action](s.touchEvents.move, s.onTouchMove, moveCapture);
                target[action](s.touchEvents.end, s.onTouchEnd, false);
            } else {
                if (s.support.touch) {
                    touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
                    touchEventsTarget[action](s.touchEvents.move, s.onTouchMove, moveCapture);
                    touchEventsTarget[action](s.touchEvents.end, s.onTouchEnd, false);
                }
                if (params.simulateTouch && !s.device.ios && !s.device.android) {
                    touchEventsTarget[action]('mousedown', s.onTouchStart, false);
                    document[action]('mousemove', s.onTouchMove, moveCapture);
                    document[action]('mouseup', s.onTouchEnd, false);
                }
            }
            window[action]('resize', s.onResize);
            if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
                s.nextButton[actionDom]('click', s.onClickNext);
                if (s.params.a11y && s.a11y)
                    s.nextButton[actionDom]('keydown', s.a11y.onEnterKey);
            }
            if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
                s.prevButton[actionDom]('click', s.onClickPrev);
                if (s.params.a11y && s.a11y)
                    s.prevButton[actionDom]('keydown', s.a11y.onEnterKey);
            }
            if (s.params.pagination && s.params.paginationClickable) {
                s.paginationContainer[actionDom]('click', '.' + s.params.bulletClass, s.onClickIndex);
                if (s.params.a11y && s.a11y)
                    s.paginationContainer[actionDom]('keydown', '.' + s.params.bulletClass, s.a11y.onEnterKey);
            }
            if (s.params.preventClicks || s.params.preventClicksPropagation)
                touchEventsTarget[action]('click', s.preventClicks, true);
        }
        ;
        s.attachEvents = function() {
            s.initEvents();
        }
        ;
        s.detachEvents = function() {
            s.initEvents(true);
        }
        ;
        s.allowClick = true;
        s.preventClicks = function(e) {
            if (!s.allowClick) {
                if (s.params.preventClicks)
                    e.preventDefault();
                if (s.params.preventClicksPropagation && s.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        ;
        s.onClickNext = function(e) {
            e.preventDefault();
            if (s.isEnd && !s.params.loop)
                return;
            s.slideNext();
        }
        ;
        s.onClickPrev = function(e) {
            e.preventDefault();
            if (s.isBeginning && !s.params.loop)
                return;
            s.slidePrev();
        }
        ;
        s.onClickIndex = function(e) {
            e.preventDefault();
            var index = $(this).index() * s.params.slidesPerGroup;
            if (s.params.loop)
                index = index + s.loopedSlides;
            s.slideTo(index);
        }
        ;
        function findElementInEvent(e, selector) {
            var el = $(e.target);
            if (!el.is(selector)) {
                if (typeof selector === 'string') {
                    el = el.parents(selector);
                } else if (selector.nodeType) {
                    var found;
                    el.parents().each(function(index, _el) {
                        if (_el === selector)
                            found = selector;
                    });
                    if (!found)
                        return undefined;
                    else
                        return selector;
                }
            }
            if (el.length === 0) {
                return undefined;
            }
            return el[0];
        }
        s.updateClickedSlide = function(e) {
            var slide = findElementInEvent(e, '.' + s.params.slideClass);
            var slideFound = false;
            if (slide) {
                for (var i = 0; i < s.slides.length; i++) {
                    if (s.slides[i] === slide)
                        slideFound = true;
                }
            }
            if (slide && slideFound) {
                s.clickedSlide = slide;
                s.clickedIndex = $(slide).index();
            } else {
                s.clickedSlide = undefined;
                s.clickedIndex = undefined;
                return;
            }
            if (s.params.slideToClickedSlide && s.clickedIndex !== undefined && s.clickedIndex !== s.activeIndex) {
                var slideToIndex = s.clickedIndex, realIndex, duplicatedSlides;
                if (s.params.loop) {
                    if (s.animating)
                        return;
                    realIndex = $(s.clickedSlide).attr('data-swiper-slide-index');
                    if (s.params.centeredSlides) {
                        if ((slideToIndex < s.loopedSlides - s.params.slidesPerView / 2) || (slideToIndex > s.slides.length - s.loopedSlides + s.params.slidesPerView / 2)) {
                            s.fixLoop();
                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.swiper-slide-duplicate)').eq(0).index();
                            setTimeout(function() {
                                s.slideTo(slideToIndex);
                            }, 0);
                        } else {
                            s.slideTo(slideToIndex);
                        }
                    } else {
                        if (slideToIndex > s.slides.length - s.params.slidesPerView) {
                            s.fixLoop();
                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.swiper-slide-duplicate)').eq(0).index();
                            setTimeout(function() {
                                s.slideTo(slideToIndex);
                            }, 0);
                        } else {
                            s.slideTo(slideToIndex);
                        }
                    }
                } else {
                    s.slideTo(slideToIndex);
                }
            }
        }
        ;
        var isTouched, isMoved, allowTouchCallbacks, touchStartTime, isScrolling, currentTranslate, startTranslate, allowThresholdMove, formElements = 'input, select, textarea, button', lastClickTime = Date.now(), clickTimeout, velocities = [], allowMomentumBounce;
        s.animating = false;
        s.touches = {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
        };
        var isTouchEvent, startMoving;
        s.onTouchStart = function(e) {
            if (e.originalEvent)
                e = e.originalEvent;
            isTouchEvent = e.type === 'touchstart';
            if (!isTouchEvent && 'which'in e && e.which === 3)
                return;
            if (s.params.noSwiping && findElementInEvent(e, '.' + s.params.noSwipingClass)) {
                s.allowClick = true;
                return;
            }
            if (s.params.swipeHandler) {
                if (!findElementInEvent(e, s.params.swipeHandler))
                    return;
            }
            var startX = s.touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
            var startY = s.touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
            if (s.device.ios && s.params.iOSEdgeSwipeDetection && startX <= s.params.iOSEdgeSwipeThreshold) {
                return;
            }
            isTouched = true;
            isMoved = false;
            allowTouchCallbacks = true;
            isScrolling = undefined;
            startMoving = undefined;
            s.touches.startX = startX;
            s.touches.startY = startY;
            touchStartTime = Date.now();
            s.allowClick = true;
            s.updateContainerSize();
            s.swipeDirection = undefined;
            if (s.params.threshold > 0)
                allowThresholdMove = false;
            if (e.type !== 'touchstart') {
                var preventDefault = true;
                if ($(e.target).is(formElements))
                    preventDefault = false;
                if (document.activeElement && $(document.activeElement).is(formElements)) {
                    document.activeElement.blur();
                }
                if (preventDefault) {
                    e.preventDefault();
                }
            }
            s.emit('onTouchStart', s, e);
        }
        ;
        s.onTouchMove = function(e) {
            if (e.originalEvent)
                e = e.originalEvent;
            if (isTouchEvent && e.type === 'mousemove')
                return;
            if (e.preventedByNestedSwiper) {
                s.touches.startX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                s.touches.startY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
                return;
            }
            if (s.params.onlyExternal) {
                s.allowClick = false;
                if (isTouched) {
                    s.touches.startX = s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                    s.touches.startY = s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
                    touchStartTime = Date.now();
                }
                return;
            }
            if (isTouchEvent && document.activeElement) {
                if (e.target === document.activeElement && $(e.target).is(formElements)) {
                    isMoved = true;
                    s.allowClick = false;
                    return;
                }
            }
            if (allowTouchCallbacks) {
                s.emit('onTouchMove', s, e);
            }
            if (e.targetTouches && e.targetTouches.length > 1)
                return;
            s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
            s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
            if (typeof isScrolling === 'undefined') {
                var touchAngle = Math.atan2(Math.abs(s.touches.currentY - s.touches.startY), Math.abs(s.touches.currentX - s.touches.startX)) * 180 / Math.PI;
                isScrolling = s.isHorizontal() ? touchAngle > s.params.touchAngle : (90 - touchAngle > s.params.touchAngle);
            }
            if (isScrolling) {
                s.emit('onTouchMoveOpposite', s, e);
            }
            if (typeof startMoving === 'undefined' && s.browser.ieTouch) {
                if (s.touches.currentX !== s.touches.startX || s.touches.currentY !== s.touches.startY) {
                    startMoving = true;
                }
            }
            if (!isTouched)
                return;
            if (isScrolling) {
                isTouched = false;
                return;
            }
            if (!startMoving && s.browser.ieTouch) {
                return;
            }
            s.allowClick = false;
            s.emit('onSliderMove', s, e);
            e.preventDefault();
            if (s.params.touchMoveStopPropagation && !s.params.nested) {
                e.stopPropagation();
            }
            if (!isMoved) {
                if (params.loop) {
                    s.fixLoop();
                }
                startTranslate = s.getWrapperTranslate();
                s.setWrapperTransition(0);
                if (s.animating) {
                    s.wrapper.trigger('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd');
                }
                if (s.params.autoplay && s.autoplaying) {
                    if (s.params.autoplayDisableOnInteraction) {
                        s.stopAutoplay();
                    } else {
                        s.pauseAutoplay();
                    }
                }
                allowMomentumBounce = false;
                if (s.params.grabCursor) {
                    s.container[0].style.cursor = 'move';
                    s.container[0].style.cursor = '-webkit-grabbing';
                    s.container[0].style.cursor = '-moz-grabbin';
                    s.container[0].style.cursor = 'grabbing';
                }
            }
            isMoved = true;
            var diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
            diff = diff * s.params.touchRatio;
            if (s.rtl)
                diff = -diff;
            s.swipeDirection = diff > 0 ? 'prev' : 'next';
            currentTranslate = diff + startTranslate;
            var disableParentSwiper = true;
            if ((diff > 0 && currentTranslate > s.minTranslate())) {
                disableParentSwiper = false;
                if (s.params.resistance)
                    currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + startTranslate + diff, s.params.resistanceRatio);
            } else if (diff < 0 && currentTranslate < s.maxTranslate()) {
                disableParentSwiper = false;
                if (s.params.resistance)
                    currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - startTranslate - diff, s.params.resistanceRatio);
            }
            if (disableParentSwiper) {
                e.preventedByNestedSwiper = true;
            }
            if (!s.params.allowSwipeToNext && s.swipeDirection === 'next' && currentTranslate < startTranslate) {
                currentTranslate = startTranslate;
            }
            if (!s.params.allowSwipeToPrev && s.swipeDirection === 'prev' && currentTranslate > startTranslate) {
                currentTranslate = startTranslate;
            }
            if (!s.params.followFinger)
                return;
            if (s.params.threshold > 0) {
                if (Math.abs(diff) > s.params.threshold || allowThresholdMove) {
                    if (!allowThresholdMove) {
                        allowThresholdMove = true;
                        s.touches.startX = s.touches.currentX;
                        s.touches.startY = s.touches.currentY;
                        currentTranslate = startTranslate;
                        s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
                        return;
                    }
                } else {
                    currentTranslate = startTranslate;
                    return;
                }
            }
            if (s.params.freeMode || s.params.watchSlidesProgress) {
                s.updateActiveIndex();
            }
            if (s.params.freeMode) {
                if (velocities.length === 0) {
                    velocities.push({
                        position: s.touches[s.isHorizontal() ? 'startX' : 'startY'],
                        time: touchStartTime
                    });
                }
                velocities.push({
                    position: s.touches[s.isHorizontal() ? 'currentX' : 'currentY'],
                    time: (new window.Date()).getTime()
                });
            }
            s.updateProgress(currentTranslate);
            s.setWrapperTranslate(currentTranslate);
        }
        ;
        s.onTouchEnd = function(e) {
            if (e.originalEvent)
                e = e.originalEvent;
            if (allowTouchCallbacks) {
                s.emit('onTouchEnd', s, e);
            }
            allowTouchCallbacks = false;
            if (!isTouched)
                return;
            if (s.params.grabCursor && isMoved && isTouched) {
                s.container[0].style.cursor = 'move';
                s.container[0].style.cursor = '-webkit-grab';
                s.container[0].style.cursor = '-moz-grab';
                s.container[0].style.cursor = 'grab';
            }
            var touchEndTime = Date.now();
            var timeDiff = touchEndTime - touchStartTime;
            if (s.allowClick) {
                s.updateClickedSlide(e);
                s.emit('onTap', s, e);
                if (timeDiff < 300 && (touchEndTime - lastClickTime) > 300) {
                    if (clickTimeout)
                        clearTimeout(clickTimeout);
                    clickTimeout = setTimeout(function() {
                        if (!s)
                            return;
                        if (s.params.paginationHide && s.paginationContainer.length > 0 && !$(e.target).hasClass(s.params.bulletClass)) {
                            s.paginationContainer.toggleClass(s.params.paginationHiddenClass);
                        }
                        s.emit('onClick', s, e);
                    }, 300);
                }
                if (timeDiff < 300 && (touchEndTime - lastClickTime) < 300) {
                    if (clickTimeout)
                        clearTimeout(clickTimeout);
                    s.emit('onDoubleTap', s, e);
                }
            }
            lastClickTime = Date.now();
            setTimeout(function() {
                if (s)
                    s.allowClick = true;
            }, 0);
            if (!isTouched || !isMoved || !s.swipeDirection || s.touches.diff === 0 || currentTranslate === startTranslate) {
                isTouched = isMoved = false;
                return;
            }
            isTouched = isMoved = false;
            var currentPos;
            if (s.params.followFinger) {
                currentPos = s.rtl ? s.translate : -s.translate;
            } else {
                currentPos = -currentTranslate;
            }
            if (s.params.freeMode) {
                if (currentPos < -s.minTranslate()) {
                    s.slideTo(s.activeIndex);
                    return;
                } else if (currentPos > -s.maxTranslate()) {
                    if (s.slides.length < s.snapGrid.length) {
                        s.slideTo(s.snapGrid.length - 1);
                    } else {
                        s.slideTo(s.slides.length - 1);
                    }
                    return;
                }
                if (s.params.freeModeMomentum) {
                    if (velocities.length > 1) {
                        var lastMoveEvent = velocities.pop()
                          , velocityEvent = velocities.pop();
                        var distance = lastMoveEvent.position - velocityEvent.position;
                        var time = lastMoveEvent.time - velocityEvent.time;
                        s.velocity = distance / time;
                        s.velocity = s.velocity / 2;
                        if (Math.abs(s.velocity) < s.params.freeModeMinimumVelocity) {
                            s.velocity = 0;
                        }
                        if (time > 150 || (new window.Date().getTime() - lastMoveEvent.time) > 300) {
                            s.velocity = 0;
                        }
                    } else {
                        s.velocity = 0;
                    }
                    velocities.length = 0;
                    var momentumDuration = 1000 * s.params.freeModeMomentumRatio;
                    var momentumDistance = s.velocity * momentumDuration;
                    var newPosition = s.translate + momentumDistance;
                    if (s.rtl)
                        newPosition = -newPosition;
                    var doBounce = false;
                    var afterBouncePosition;
                    var bounceAmount = Math.abs(s.velocity) * 20 * s.params.freeModeMomentumBounceRatio;
                    if (newPosition < s.maxTranslate()) {
                        if (s.params.freeModeMomentumBounce) {
                            if (newPosition + s.maxTranslate() < -bounceAmount) {
                                newPosition = s.maxTranslate() - bounceAmount;
                            }
                            afterBouncePosition = s.maxTranslate();
                            doBounce = true;
                            allowMomentumBounce = true;
                        } else {
                            newPosition = s.maxTranslate();
                        }
                    } else if (newPosition > s.minTranslate()) {
                        if (s.params.freeModeMomentumBounce) {
                            if (newPosition - s.minTranslate() > bounceAmount) {
                                newPosition = s.minTranslate() + bounceAmount;
                            }
                            afterBouncePosition = s.minTranslate();
                            doBounce = true;
                            allowMomentumBounce = true;
                        } else {
                            newPosition = s.minTranslate();
                        }
                    } else if (s.params.freeModeSticky) {
                        var j = 0, nextSlide;
                        for (j = 0; j < s.snapGrid.length; j += 1) {
                            if (s.snapGrid[j] > -newPosition) {
                                nextSlide = j;
                                break;
                            }
                        }
                        if (Math.abs(s.snapGrid[nextSlide] - newPosition) < Math.abs(s.snapGrid[nextSlide - 1] - newPosition) || s.swipeDirection === 'next') {
                            newPosition = s.snapGrid[nextSlide];
                        } else {
                            newPosition = s.snapGrid[nextSlide - 1];
                        }
                        if (!s.rtl)
                            newPosition = -newPosition;
                    }
                    if (s.velocity !== 0) {
                        if (s.rtl) {
                            momentumDuration = Math.abs((-newPosition - s.translate) / s.velocity);
                        } else {
                            momentumDuration = Math.abs((newPosition - s.translate) / s.velocity);
                        }
                    } else if (s.params.freeModeSticky) {
                        s.slideReset();
                        return;
                    }
                    if (s.params.freeModeMomentumBounce && doBounce) {
                        s.updateProgress(afterBouncePosition);
                        s.setWrapperTransition(momentumDuration);
                        s.setWrapperTranslate(newPosition);
                        s.onTransitionStart();
                        s.animating = true;
                        s.wrapper.transitionEnd(function() {
                            if (!s || !allowMomentumBounce)
                                return;
                            s.emit('onMomentumBounce', s);
                            s.setWrapperTransition(s.params.speed);
                            s.setWrapperTranslate(afterBouncePosition);
                            s.wrapper.transitionEnd(function() {
                                if (!s)
                                    return;
                                s.onTransitionEnd();
                            });
                        });
                    } else if (s.velocity) {
                        s.updateProgress(newPosition);
                        s.setWrapperTransition(momentumDuration);
                        s.setWrapperTranslate(newPosition);
                        s.onTransitionStart();
                        if (!s.animating) {
                            s.animating = true;
                            s.wrapper.transitionEnd(function() {
                                if (!s)
                                    return;
                                s.onTransitionEnd();
                            });
                        }
                    } else {
                        s.updateProgress(newPosition);
                    }
                    s.updateActiveIndex();
                }
                if (!s.params.freeModeMomentum || timeDiff >= s.params.longSwipesMs) {
                    s.updateProgress();
                    s.updateActiveIndex();
                }
                return;
            }
            var i, stopIndex = 0, groupSize = s.slidesSizesGrid[0];
            for (i = 0; i < s.slidesGrid.length; i += s.params.slidesPerGroup) {
                if (typeof s.slidesGrid[i + s.params.slidesPerGroup] !== 'undefined') {
                    if (currentPos >= s.slidesGrid[i] && currentPos < s.slidesGrid[i + s.params.slidesPerGroup]) {
                        stopIndex = i;
                        groupSize = s.slidesGrid[i + s.params.slidesPerGroup] - s.slidesGrid[i];
                    }
                } else {
                    if (currentPos >= s.slidesGrid[i]) {
                        stopIndex = i;
                        groupSize = s.slidesGrid[s.slidesGrid.length - 1] - s.slidesGrid[s.slidesGrid.length - 2];
                    }
                }
            }
            var ratio = (currentPos - s.slidesGrid[stopIndex]) / groupSize;
            if (timeDiff > s.params.longSwipesMs) {
                if (!s.params.longSwipes) {
                    s.slideTo(s.activeIndex);
                    return;
                }
                if (s.swipeDirection === 'next') {
                    if (ratio >= s.params.longSwipesRatio)
                        s.slideTo(stopIndex + s.params.slidesPerGroup);
                    else
                        s.slideTo(stopIndex);
                }
                if (s.swipeDirection === 'prev') {
                    if (ratio > (1 - s.params.longSwipesRatio))
                        s.slideTo(stopIndex + s.params.slidesPerGroup);
                    else
                        s.slideTo(stopIndex);
                }
            } else {
                if (!s.params.shortSwipes) {
                    s.slideTo(s.activeIndex);
                    return;
                }
                if (s.swipeDirection === 'next') {
                    s.slideTo(stopIndex + s.params.slidesPerGroup);
                }
                if (s.swipeDirection === 'prev') {
                    s.slideTo(stopIndex);
                }
            }
        }
        ;
        s._slideTo = function(slideIndex, speed) {
            return s.slideTo(slideIndex, speed, true, true);
        }
        ;
        s.slideTo = function(slideIndex, speed, runCallbacks, internal) {
            if (typeof runCallbacks === 'undefined')
                runCallbacks = true;
            if (typeof slideIndex === 'undefined')
                slideIndex = 0;
            if (slideIndex < 0)
                slideIndex = 0;
            s.snapIndex = Math.floor(slideIndex / s.params.slidesPerGroup);
            if (s.snapIndex >= s.snapGrid.length)
                s.snapIndex = s.snapGrid.length - 1;
            var translate = -s.snapGrid[s.snapIndex];
            if (s.params.autoplay && s.autoplaying) {
                if (internal || !s.params.autoplayDisableOnInteraction) {
                    s.pauseAutoplay(speed);
                } else {
                    s.stopAutoplay();
                }
            }
            s.updateProgress(translate);
            for (var i = 0; i < s.slidesGrid.length; i++) {
                if (-Math.floor(translate * 100) >= Math.floor(s.slidesGrid[i] * 100)) {
                    slideIndex = i;
                }
            }
            if (!s.params.allowSwipeToNext && translate < s.translate && translate < s.minTranslate()) {
                return false;
            }
            if (!s.params.allowSwipeToPrev && translate > s.translate && translate > s.maxTranslate()) {
                if ((s.activeIndex || 0) !== slideIndex)
                    return false;
            }
            if (typeof speed === 'undefined')
                speed = s.params.speed;
            s.previousIndex = s.activeIndex || 0;
            s.activeIndex = slideIndex;
            if ((s.rtl && -translate === s.translate) || (!s.rtl && translate === s.translate)) {
                if (s.params.autoHeight) {
                    s.updateAutoHeight();
                }
                s.updateClasses();
                if (s.params.effect !== 'slide') {
                    s.setWrapperTranslate(translate);
                }
                return false;
            }
            s.updateClasses();
            s.onTransitionStart(runCallbacks);
            if (speed === 0) {
                s.setWrapperTranslate(translate);
                s.setWrapperTransition(0);
                s.onTransitionEnd(runCallbacks);
            } else {
                s.setWrapperTranslate(translate);
                s.setWrapperTransition(speed);
                if (!s.animating) {
                    s.animating = true;
                    s.wrapper.transitionEnd(function() {
                        if (!s)
                            return;
                        s.onTransitionEnd(runCallbacks);
                    });
                }
            }
            return true;
        }
        ;
        s.onTransitionStart = function(runCallbacks) {
            if (typeof runCallbacks === 'undefined')
                runCallbacks = true;
            if (s.params.autoHeight) {
                s.updateAutoHeight();
            }
            if (s.lazy)
                s.lazy.onTransitionStart();
            if (runCallbacks) {
                s.emit('onTransitionStart', s);
                if (s.activeIndex !== s.previousIndex) {
                    s.emit('onSlideChangeStart', s);
                    if (s.activeIndex > s.previousIndex) {
                        s.emit('onSlideNextStart', s);
                    } else {
                        s.emit('onSlidePrevStart', s);
                    }
                }
            }
        }
        ;
        s.onTransitionEnd = function(runCallbacks) {
            s.animating = false;
            s.setWrapperTransition(0);
            if (typeof runCallbacks === 'undefined')
                runCallbacks = true;
            if (s.lazy)
                s.lazy.onTransitionEnd();
            if (runCallbacks) {
                s.emit('onTransitionEnd', s);
                if (s.activeIndex !== s.previousIndex) {
                    s.emit('onSlideChangeEnd', s);
                    if (s.activeIndex > s.previousIndex) {
                        s.emit('onSlideNextEnd', s);
                    } else {
                        s.emit('onSlidePrevEnd', s);
                    }
                }
            }
            if (s.params.hashnav && s.hashnav) {
                s.hashnav.setHash();
            }
        }
        ;
        s.slideNext = function(runCallbacks, speed, internal) {
            if (s.params.loop) {
                if (s.animating)
                    return false;
                s.fixLoop();
                var clientLeft = s.container[0].clientLeft;
                return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
            } else
                return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
        }
        ;
        s._slideNext = function(speed) {
            return s.slideNext(true, speed, true);
        }
        ;
        s.slidePrev = function(runCallbacks, speed, internal) {
            if (s.params.loop) {
                if (s.animating)
                    return false;
                s.fixLoop();
                var clientLeft = s.container[0].clientLeft;
                return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
            } else
                return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
        }
        ;
        s._slidePrev = function(speed) {
            return s.slidePrev(true, speed, true);
        }
        ;
        s.slideReset = function(runCallbacks, speed, internal) {
            return s.slideTo(s.activeIndex, speed, runCallbacks);
        }
        ;
        s.setWrapperTransition = function(duration, byController) {
            s.wrapper.transition(duration);
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                s.effects[s.params.effect].setTransition(duration);
            }
            if (s.params.parallax && s.parallax) {
                s.parallax.setTransition(duration);
            }
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.setTransition(duration);
            }
            if (s.params.control && s.controller) {
                s.controller.setTransition(duration, byController);
            }
            s.emit('onSetTransition', s, duration);
        }
        ;
        s.setWrapperTranslate = function(translate, updateActiveIndex, byController) {
            var x = 0
              , y = 0
              , z = 0;
            if (s.isHorizontal()) {
                x = s.rtl ? -translate : translate;
            } else {
                y = translate;
            }
            if (s.params.roundLengths) {
                x = round(x);
                y = round(y);
            }
            if (!s.params.virtualTranslate) {
                if (s.support.transforms3d)
                    s.wrapper.transform('translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)');
                else
                    s.wrapper.transform('translate(' + x + 'px, ' + y + 'px)');
            }
            s.translate = s.isHorizontal() ? x : y;
            var progress;
            var translatesDiff = s.maxTranslate() - s.minTranslate();
            if (translatesDiff === 0) {
                progress = 0;
            } else {
                progress = (translate - s.minTranslate()) / (translatesDiff);
            }
            if (progress !== s.progress) {
                s.updateProgress(translate);
            }
            if (updateActiveIndex)
                s.updateActiveIndex();
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                s.effects[s.params.effect].setTranslate(s.translate);
            }
            if (s.params.parallax && s.parallax) {
                s.parallax.setTranslate(s.translate);
            }
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.setTranslate(s.translate);
            }
            if (s.params.control && s.controller) {
                s.controller.setTranslate(s.translate, byController);
            }
            s.emit('onSetTranslate', s, s.translate);
        }
        ;
        s.getTranslate = function(el, axis) {
            var matrix, curTransform, curStyle, transformMatrix;
            if (typeof axis === 'undefined') {
                axis = 'x';
            }
            if (s.params.virtualTranslate) {
                return s.rtl ? -s.translate : s.translate;
            }
            curStyle = window.getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(',').length > 6) {
                    curTransform = curTransform.split(', ').map(function(a) {
                        return a.replace(',', '.');
                    }).join(', ');
                }
                transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
                matrix = transformMatrix.toString().split(',');
            }
            if (axis === 'x') {
                if (window.WebKitCSSMatrix)
                    curTransform = transformMatrix.m41;
                else if (matrix.length === 16)
                    curTransform = parseFloat(matrix[12]);
                else
                    curTransform = parseFloat(matrix[4]);
            }
            if (axis === 'y') {
                if (window.WebKitCSSMatrix)
                    curTransform = transformMatrix.m42;
                else if (matrix.length === 16)
                    curTransform = parseFloat(matrix[13]);
                else
                    curTransform = parseFloat(matrix[5]);
            }
            if (s.rtl && curTransform)
                curTransform = -curTransform;
            return curTransform || 0;
        }
        ;
        s.getWrapperTranslate = function(axis) {
            if (typeof axis === 'undefined') {
                axis = s.isHorizontal() ? 'x' : 'y';
            }
            return s.getTranslate(s.wrapper[0], axis);
        }
        ;
        s.observers = [];
        function initObserver(target, options) {
            options = options || {};
            var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
            var observer = new ObserverFunc(function(mutations) {
                mutations.forEach(function(mutation) {
                    s.onResize(true);
                    s.emit('onObserverUpdate', s, mutation);
                });
            }
            );
            observer.observe(target, {
                attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
                childList: typeof options.childList === 'undefined' ? true : options.childList,
                characterData: typeof options.characterData === 'undefined' ? true : options.characterData
            });
            s.observers.push(observer);
        }
        s.initObservers = function() {
            if (s.params.observeParents) {
                var containerParents = s.container.parents();
                for (var i = 0; i < containerParents.length; i++) {
                    initObserver(containerParents[i]);
                }
            }
            initObserver(s.container[0], {
                childList: false
            });
            initObserver(s.wrapper[0], {
                attributes: false
            });
        }
        ;
        s.disconnectObservers = function() {
            for (var i = 0; i < s.observers.length; i++) {
                s.observers[i].disconnect();
            }
            s.observers = [];
        }
        ;
        s.createLoop = function() {
            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
            var slides = s.wrapper.children('.' + s.params.slideClass);
            if (s.params.slidesPerView === 'auto' && !s.params.loopedSlides)
                s.params.loopedSlides = slides.length;
            s.loopedSlides = parseInt(s.params.loopedSlides || s.params.slidesPerView, 10);
            s.loopedSlides = s.loopedSlides + s.params.loopAdditionalSlides;
            if (s.loopedSlides > slides.length) {
                s.loopedSlides = slides.length;
            }
            var prependSlides = [], appendSlides = [], i;
            slides.each(function(index, el) {
                var slide = $(this);
                if (index < s.loopedSlides)
                    appendSlides.push(el);
                if (index < slides.length && index >= slides.length - s.loopedSlides)
                    prependSlides.push(el);
                slide.attr('data-swiper-slide-index', index);
            });
            for (i = 0; i < appendSlides.length; i++) {
                s.wrapper.append($(appendSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
            }
            for (i = prependSlides.length - 1; i >= 0; i--) {
                s.wrapper.prepend($(prependSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
            }
        }
        ;
        s.destroyLoop = function() {
            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
            s.slides.removeAttr('data-swiper-slide-index');
        }
        ;
        s.reLoop = function(updatePosition) {
            var oldIndex = s.activeIndex - s.loopedSlides;
            s.destroyLoop();
            s.createLoop();
            s.updateSlidesSize();
            if (updatePosition) {
                s.slideTo(oldIndex + s.loopedSlides, 0, false);
            }
        }
        ;
        s.fixLoop = function() {
            var newIndex;
            if (s.activeIndex < s.loopedSlides) {
                newIndex = s.slides.length - s.loopedSlides * 3 + s.activeIndex;
                newIndex = newIndex + s.loopedSlides;
                s.slideTo(newIndex, 0, false, true);
            } else if ((s.params.slidesPerView === 'auto' && s.activeIndex >= s.loopedSlides * 2) || (s.activeIndex > s.slides.length - s.params.slidesPerView * 2)) {
                newIndex = -s.slides.length + s.activeIndex + s.loopedSlides;
                newIndex = newIndex + s.loopedSlides;
                s.slideTo(newIndex, 0, false, true);
            }
        }
        ;
        s.appendSlide = function(slides) {
            if (s.params.loop) {
                s.destroyLoop();
            }
            if (typeof slides === 'object' && slides.length) {
                for (var i = 0; i < slides.length; i++) {
                    if (slides[i])
                        s.wrapper.append(slides[i]);
                }
            } else {
                s.wrapper.append(slides);
            }
            if (s.params.loop) {
                s.createLoop();
            }
            if (!(s.params.observer && s.support.observer)) {
                s.update(true);
            }
        }
        ;
        s.prependSlide = function(slides) {
            if (s.params.loop) {
                s.destroyLoop();
            }
            var newActiveIndex = s.activeIndex + 1;
            if (typeof slides === 'object' && slides.length) {
                for (var i = 0; i < slides.length; i++) {
                    if (slides[i])
                        s.wrapper.prepend(slides[i]);
                }
                newActiveIndex = s.activeIndex + slides.length;
            } else {
                s.wrapper.prepend(slides);
            }
            if (s.params.loop) {
                s.createLoop();
            }
            if (!(s.params.observer && s.support.observer)) {
                s.update(true);
            }
            s.slideTo(newActiveIndex, 0, false);
        }
        ;
        s.removeSlide = function(slidesIndexes) {
            if (s.params.loop) {
                s.destroyLoop();
                s.slides = s.wrapper.children('.' + s.params.slideClass);
            }
            var newActiveIndex = s.activeIndex, indexToRemove;
            if (typeof slidesIndexes === 'object' && slidesIndexes.length) {
                for (var i = 0; i < slidesIndexes.length; i++) {
                    indexToRemove = slidesIndexes[i];
                    if (s.slides[indexToRemove])
                        s.slides.eq(indexToRemove).remove();
                    if (indexToRemove < newActiveIndex)
                        newActiveIndex--;
                }
                newActiveIndex = Math.max(newActiveIndex, 0);
            } else {
                indexToRemove = slidesIndexes;
                if (s.slides[indexToRemove])
                    s.slides.eq(indexToRemove).remove();
                if (indexToRemove < newActiveIndex)
                    newActiveIndex--;
                newActiveIndex = Math.max(newActiveIndex, 0);
            }
            if (s.params.loop) {
                s.createLoop();
            }
            if (!(s.params.observer && s.support.observer)) {
                s.update(true);
            }
            if (s.params.loop) {
                s.slideTo(newActiveIndex + s.loopedSlides, 0, false);
            } else {
                s.slideTo(newActiveIndex, 0, false);
            }
        }
        ;
        s.removeAllSlides = function() {
            var slidesIndexes = [];
            for (var i = 0; i < s.slides.length; i++) {
                slidesIndexes.push(i);
            }
            s.removeSlide(slidesIndexes);
        }
        ;
        s.effects = {
            fade: {
                setTranslate: function() {
                    for (var i = 0; i < s.slides.length; i++) {
                        var slide = s.slides.eq(i);
                        var offset = slide[0].swiperSlideOffset;
                        var tx = -offset;
                        if (!s.params.virtualTranslate)
                            tx = tx - s.translate;
                        var ty = 0;
                        if (!s.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                        }
                        var slideOpacity = s.params.fade.crossFade ? Math.max(1 - Math.abs(slide[0].progress), 0) : 1 + Math.min(Math.max(slide[0].progress, -1), 0);
                        slide.css({
                            opacity: slideOpacity
                        }).transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px)');
                    }
                },
                setTransition: function(duration) {
                    s.slides.transition(duration);
                    if (s.params.virtualTranslate && duration !== 0) {
                        var eventTriggered = false;
                        s.slides.transitionEnd(function() {
                            if (eventTriggered)
                                return;
                            if (!s)
                                return;
                            eventTriggered = true;
                            s.animating = false;
                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
                            for (var i = 0; i < triggerEvents.length; i++) {
                                s.wrapper.trigger(triggerEvents[i]);
                            }
                        });
                    }
                }
            },
            flip: {
                setTranslate: function() {
                    for (var i = 0; i < s.slides.length; i++) {
                        var slide = s.slides.eq(i);
                        var progress = slide[0].progress;
                        if (s.params.flip.limitRotation) {
                            progress = Math.max(Math.min(slide[0].progress, 1), -1);
                        }
                        var offset = slide[0].swiperSlideOffset;
                        var rotate = -180 * progress
                          , rotateY = rotate
                          , rotateX = 0
                          , tx = -offset
                          , ty = 0;
                        if (!s.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                            rotateX = -rotateY;
                            rotateY = 0;
                        } else if (s.rtl) {
                            rotateY = -rotateY;
                        }
                        slide[0].style.zIndex = -Math.abs(Math.round(progress)) + s.slides.length;
                        if (s.params.flip.slideShadows) {
                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                                slide.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                                slide.append(shadowAfter);
                            }
                            if (shadowBefore.length)
                                shadowBefore[0].style.opacity = Math.max(-progress, 0);
                            if (shadowAfter.length)
                                shadowAfter[0].style.opacity = Math.max(progress, 0);
                        }
                        slide.transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');
                    }
                },
                setTransition: function(duration) {
                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                    if (s.params.virtualTranslate && duration !== 0) {
                        var eventTriggered = false;
                        s.slides.eq(s.activeIndex).transitionEnd(function() {
                            if (eventTriggered)
                                return;
                            if (!s)
                                return;
                            if (!$(this).hasClass(s.params.slideActiveClass))
                                return;
                            eventTriggered = true;
                            s.animating = false;
                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
                            for (var i = 0; i < triggerEvents.length; i++) {
                                s.wrapper.trigger(triggerEvents[i]);
                            }
                        });
                    }
                }
            },
            cube: {
                setTranslate: function() {
                    var wrapperRotate = 0, cubeShadow;
                    if (s.params.cube.shadow) {
                        if (s.isHorizontal()) {
                            cubeShadow = s.wrapper.find('.swiper-cube-shadow');
                            if (cubeShadow.length === 0) {
                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                                s.wrapper.append(cubeShadow);
                            }
                            cubeShadow.css({
                                height: s.width + 'px'
                            });
                        } else {
                            cubeShadow = s.container.find('.swiper-cube-shadow');
                            if (cubeShadow.length === 0) {
                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                                s.container.append(cubeShadow);
                            }
                        }
                    }
                    for (var i = 0; i < s.slides.length; i++) {
                        var slide = s.slides.eq(i);
                        var slideAngle = i * 90;
                        var round = Math.floor(slideAngle / 360);
                        if (s.rtl) {
                            slideAngle = -slideAngle;
                            round = Math.floor(-slideAngle / 360);
                        }
                        var progress = Math.max(Math.min(slide[0].progress, 1), -1);
                        var tx = 0
                          , ty = 0
                          , tz = 0;
                        if (i % 4 === 0) {
                            tx = -round * 4 * s.size;
                            tz = 0;
                        } else if ((i - 1) % 4 === 0) {
                            tx = 0;
                            tz = -round * 4 * s.size;
                        } else if ((i - 2) % 4 === 0) {
                            tx = s.size + round * 4 * s.size;
                            tz = s.size;
                        } else if ((i - 3) % 4 === 0) {
                            tx = -s.size;
                            tz = 3 * s.size + s.size * 4 * round;
                        }
                        if (s.rtl) {
                            tx = -tx;
                        }
                        if (!s.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                        }
                        var transform = 'rotateX(' + (s.isHorizontal() ? 0 : -slideAngle) + 'deg) rotateY(' + (s.isHorizontal() ? slideAngle : 0) + 'deg) translate3d(' + tx + 'px, ' + ty + 'px, ' + tz + 'px)';
                        if (progress <= 1 && progress > -1) {
                            wrapperRotate = i * 90 + progress * 90;
                            if (s.rtl)
                                wrapperRotate = -i * 90 - progress * 90;
                        }
                        slide.transform(transform);
                        if (s.params.cube.slideShadows) {
                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                                slide.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                                slide.append(shadowAfter);
                            }
                            if (shadowBefore.length)
                                shadowBefore[0].style.opacity = Math.max(-progress, 0);
                            if (shadowAfter.length)
                                shadowAfter[0].style.opacity = Math.max(progress, 0);
                        }
                    }
                    s.wrapper.css({
                        '-webkit-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                        '-moz-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                        '-ms-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                        'transform-origin': '50% 50% -' + (s.size / 2) + 'px'
                    });
                    if (s.params.cube.shadow) {
                        if (s.isHorizontal()) {
                            cubeShadow.transform('translate3d(0px, ' + (s.width / 2 + s.params.cube.shadowOffset) + 'px, ' + (-s.width / 2) + 'px) rotateX(90deg) rotateZ(0deg) scale(' + (s.params.cube.shadowScale) + ')');
                        } else {
                            var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                            var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                            var scale1 = s.params.cube.shadowScale
                              , scale2 = s.params.cube.shadowScale / multiplier
                              , offset = s.params.cube.shadowOffset;
                            cubeShadow.transform('scale3d(' + scale1 + ', 1, ' + scale2 + ') translate3d(0px, ' + (s.height / 2 + offset) + 'px, ' + (-s.height / 2 / scale2) + 'px) rotateX(-90deg)');
                        }
                    }
                    var zFactor = (s.isSafari || s.isUiWebView) ? (-s.size / 2) : 0;
                    s.wrapper.transform('translate3d(0px,0,' + zFactor + 'px) rotateX(' + (s.isHorizontal() ? 0 : wrapperRotate) + 'deg) rotateY(' + (s.isHorizontal() ? -wrapperRotate : 0) + 'deg)');
                },
                setTransition: function(duration) {
                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                    if (s.params.cube.shadow && !s.isHorizontal()) {
                        s.container.find('.swiper-cube-shadow').transition(duration);
                    }
                }
            },
            coverflow: {
                setTranslate: function() {
                    var transform = s.translate;
                    var center = s.isHorizontal() ? -transform + s.width / 2 : -transform + s.height / 2;
                    var rotate = s.isHorizontal() ? s.params.coverflow.rotate : -s.params.coverflow.rotate;
                    var translate = s.params.coverflow.depth;
                    for (var i = 0, length = s.slides.length; i < length; i++) {
                        var slide = s.slides.eq(i);
                        var slideSize = s.slidesSizesGrid[i];
                        var slideOffset = slide[0].swiperSlideOffset;
                        var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * s.params.coverflow.modifier;
                        var rotateY = s.isHorizontal() ? rotate * offsetMultiplier : 0;
                        var rotateX = s.isHorizontal() ? 0 : rotate * offsetMultiplier;
                        var translateZ = -translate * Math.abs(offsetMultiplier);
                        var translateY = s.isHorizontal() ? 0 : s.params.coverflow.stretch * (offsetMultiplier);
                        var translateX = s.isHorizontal() ? s.params.coverflow.stretch * (offsetMultiplier) : 0;
                        if (Math.abs(translateX) < 0.001)
                            translateX = 0;
                        if (Math.abs(translateY) < 0.001)
                            translateY = 0;
                        if (Math.abs(translateZ) < 0.001)
                            translateZ = 0;
                        if (Math.abs(rotateY) < 0.001)
                            rotateY = 0;
                        if (Math.abs(rotateX) < 0.001)
                            rotateX = 0;
                        var slideTransform = 'translate3d(' + translateX + 'px,' + translateY + 'px,' + translateZ + 'px)  rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
                        slide.transform(slideTransform);
                        slide[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                        if (s.params.coverflow.slideShadows) {
                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                                slide.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                                slide.append(shadowAfter);
                            }
                            if (shadowBefore.length)
                                shadowBefore[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                            if (shadowAfter.length)
                                shadowAfter[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
                        }
                    }
                    if (s.browser.ie) {
                        var ws = s.wrapper[0].style;
                        ws.perspectiveOrigin = center + 'px 50%';
                    }
                },
                setTransition: function(duration) {
                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                }
            }
        };
        s.lazy = {
            initialImageLoaded: false,
            loadImageInSlide: function(index, loadInDuplicate) {
                if (typeof index === 'undefined')
                    return;
                if (typeof loadInDuplicate === 'undefined')
                    loadInDuplicate = true;
                if (s.slides.length === 0)
                    return;
                var slide = s.slides.eq(index);
                var img = slide.find('.swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)');
                if (slide.hasClass('swiper-lazy') && !slide.hasClass('swiper-lazy-loaded') && !slide.hasClass('swiper-lazy-loading')) {
                    img = img.add(slide[0]);
                }
                if (img.length === 0)
                    return;
                img.each(function() {
                    var _img = $(this);
                    _img.addClass('swiper-lazy-loading');
                    var background = _img.attr('data-background');
                    var src = _img.attr('data-src')
                      , srcset = _img.attr('data-srcset');
                    s.loadImage(_img[0], (src || background), srcset, false, function() {
                        if (background) {
                            _img.css('background-image', 'url("' + background + '")');
                            _img.removeAttr('data-background');
                        } else {
                            if (srcset) {
                                _img.attr('srcset', srcset);
                                _img.removeAttr('data-srcset');
                            }
                            if (src) {
                                _img.attr('src', src);
                                _img.removeAttr('data-src');
                            }
                        }
                        _img.addClass('swiper-lazy-loaded').removeClass('swiper-lazy-loading');
                        slide.find('.swiper-lazy-preloader, .preloader').remove();
                        if (s.params.loop && loadInDuplicate) {
                            var slideOriginalIndex = slide.attr('data-swiper-slide-index');
                            if (slide.hasClass(s.params.slideDuplicateClass)) {
                                var originalSlide = s.wrapper.children('[data-swiper-slide-index="' + slideOriginalIndex + '"]:not(.' + s.params.slideDuplicateClass + ')');
                                s.lazy.loadImageInSlide(originalSlide.index(), false);
                            } else {
                                var duplicatedSlide = s.wrapper.children('.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + slideOriginalIndex + '"]');
                                s.lazy.loadImageInSlide(duplicatedSlide.index(), false);
                            }
                        }
                        s.emit('onLazyImageReady', s, slide[0], _img[0]);
                    });
                    s.emit('onLazyImageLoad', s, slide[0], _img[0]);
                });
            },
            load: function() {
                var i;
                if (s.params.watchSlidesVisibility) {
                    s.wrapper.children('.' + s.params.slideVisibleClass).each(function() {
                        s.lazy.loadImageInSlide($(this).index());
                    });
                } else {
                    if (s.params.slidesPerView > 1) {
                        for (i = s.activeIndex; i < s.activeIndex + s.params.slidesPerView; i++) {
                            if (s.slides[i])
                                s.lazy.loadImageInSlide(i);
                        }
                    } else {
                        s.lazy.loadImageInSlide(s.activeIndex);
                    }
                }
                if (s.params.lazyLoadingInPrevNext) {
                    if (s.params.slidesPerView > 1 || (s.params.lazyLoadingInPrevNextAmount && s.params.lazyLoadingInPrevNextAmount > 1)) {
                        var amount = s.params.lazyLoadingInPrevNextAmount;
                        var spv = s.params.slidesPerView;
                        var maxIndex = Math.min(s.activeIndex + spv + Math.max(amount, spv), s.slides.length);
                        var minIndex = Math.max(s.activeIndex - Math.max(spv, amount), 0);
                        for (i = s.activeIndex + s.params.slidesPerView; i < maxIndex; i++) {
                            if (s.slides[i])
                                s.lazy.loadImageInSlide(i);
                        }
                        for (i = minIndex; i < s.activeIndex; i++) {
                            if (s.slides[i])
                                s.lazy.loadImageInSlide(i);
                        }
                    } else {
                        var nextSlide = s.wrapper.children('.' + s.params.slideNextClass);
                        if (nextSlide.length > 0)
                            s.lazy.loadImageInSlide(nextSlide.index());
                        var prevSlide = s.wrapper.children('.' + s.params.slidePrevClass);
                        if (prevSlide.length > 0)
                            s.lazy.loadImageInSlide(prevSlide.index());
                    }
                }
            },
            onTransitionStart: function() {
                if (s.params.lazyLoading) {
                    if (s.params.lazyLoadingOnTransitionStart || (!s.params.lazyLoadingOnTransitionStart && !s.lazy.initialImageLoaded)) {
                        s.lazy.load();
                    }
                }
            },
            onTransitionEnd: function() {
                if (s.params.lazyLoading && !s.params.lazyLoadingOnTransitionStart) {
                    s.lazy.load();
                }
            }
        };
        s.scrollbar = {
            isTouched: false,
            setDragPosition: function(e) {
                var sb = s.scrollbar;
                var x = 0
                  , y = 0;
                var translate;
                var pointerPosition = s.isHorizontal() ? ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX) : ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY);
                var position = (pointerPosition) - sb.track.offset()[s.isHorizontal() ? 'left' : 'top'] - sb.dragSize / 2;
                var positionMin = -s.minTranslate() * sb.moveDivider;
                var positionMax = -s.maxTranslate() * sb.moveDivider;
                if (position < positionMin) {
                    position = positionMin;
                } else if (position > positionMax) {
                    position = positionMax;
                }
                position = -position / sb.moveDivider;
                s.updateProgress(position);
                s.setWrapperTranslate(position, true);
            },
            dragStart: function(e) {
                var sb = s.scrollbar;
                sb.isTouched = true;
                e.preventDefault();
                e.stopPropagation();
                sb.setDragPosition(e);
                clearTimeout(sb.dragTimeout);
                sb.track.transition(0);
                if (s.params.scrollbarHide) {
                    sb.track.css('opacity', 1);
                }
                s.wrapper.transition(100);
                sb.drag.transition(100);
                s.emit('onScrollbarDragStart', s);
            },
            dragMove: function(e) {
                var sb = s.scrollbar;
                if (!sb.isTouched)
                    return;
                if (e.preventDefault)
                    e.preventDefault();
                else
                    e.returnValue = false;
                sb.setDragPosition(e);
                s.wrapper.transition(0);
                sb.track.transition(0);
                sb.drag.transition(0);
                s.emit('onScrollbarDragMove', s);
            },
            dragEnd: function(e) {
                var sb = s.scrollbar;
                if (!sb.isTouched)
                    return;
                sb.isTouched = false;
                if (s.params.scrollbarHide) {
                    clearTimeout(sb.dragTimeout);
                    sb.dragTimeout = setTimeout(function() {
                        sb.track.css('opacity', 0);
                        sb.track.transition(400);
                    }, 1000);
                }
                s.emit('onScrollbarDragEnd', s);
                if (s.params.scrollbarSnapOnRelease) {
                    s.slideReset();
                }
            },
            enableDraggable: function() {
                var sb = s.scrollbar;
                var target = s.support.touch ? sb.track : document;
                $(sb.track).on(s.touchEvents.start, sb.dragStart);
                $(target).on(s.touchEvents.move, sb.dragMove);
                $(target).on(s.touchEvents.end, sb.dragEnd);
            },
            disableDraggable: function() {
                var sb = s.scrollbar;
                var target = s.support.touch ? sb.track : document;
                $(sb.track).off(s.touchEvents.start, sb.dragStart);
                $(target).off(s.touchEvents.move, sb.dragMove);
                $(target).off(s.touchEvents.end, sb.dragEnd);
            },
            set: function() {
                if (!s.params.scrollbar)
                    return;
                var sb = s.scrollbar;
                sb.track = $(s.params.scrollbar);
                if (s.params.uniqueNavElements && typeof s.params.scrollbar === 'string' && sb.track.length > 1 && s.container.find(s.params.scrollbar).length === 1) {
                    sb.track = s.container.find(s.params.scrollbar);
                }
                sb.drag = sb.track.find('.swiper-scrollbar-drag');
                if (sb.drag.length === 0) {
                    sb.drag = $('<div class="swiper-scrollbar-drag"></div>');
                    sb.track.append(sb.drag);
                }
                sb.drag[0].style.width = '';
                sb.drag[0].style.height = '';
                sb.trackSize = s.isHorizontal() ? sb.track[0].offsetWidth : sb.track[0].offsetHeight;
                sb.divider = s.size / s.virtualSize;
                sb.moveDivider = sb.divider * (sb.trackSize / s.size);
                sb.dragSize = sb.trackSize * sb.divider;
                if (s.isHorizontal()) {
                    sb.drag[0].style.width = sb.dragSize + 'px';
                } else {
                    sb.drag[0].style.height = sb.dragSize + 'px';
                }
                if (sb.divider >= 1) {
                    sb.track[0].style.display = 'none';
                } else {
                    sb.track[0].style.display = '';
                }
                if (s.params.scrollbarHide) {
                    sb.track[0].style.opacity = 0;
                }
            },
            setTranslate: function() {
                if (!s.params.scrollbar)
                    return;
                var diff;
                var sb = s.scrollbar;
                var translate = s.translate || 0;
                var newPos;
                var newSize = sb.dragSize;
                newPos = (sb.trackSize - sb.dragSize) * s.progress;
                if (s.rtl && s.isHorizontal()) {
                    newPos = -newPos;
                    if (newPos > 0) {
                        newSize = sb.dragSize - newPos;
                        newPos = 0;
                    } else if (-newPos + sb.dragSize > sb.trackSize) {
                        newSize = sb.trackSize + newPos;
                    }
                } else {
                    if (newPos < 0) {
                        newSize = sb.dragSize + newPos;
                        newPos = 0;
                    } else if (newPos + sb.dragSize > sb.trackSize) {
                        newSize = sb.trackSize - newPos;
                    }
                }
                if (s.isHorizontal()) {
                    if (s.support.transforms3d) {
                        sb.drag.transform('translate3d(' + (newPos) + 'px, 0, 0)');
                    } else {
                        sb.drag.transform('translateX(' + (newPos) + 'px)');
                    }
                    sb.drag[0].style.width = newSize + 'px';
                } else {
                    if (s.support.transforms3d) {
                        sb.drag.transform('translate3d(0px, ' + (newPos) + 'px, 0)');
                    } else {
                        sb.drag.transform('translateY(' + (newPos) + 'px)');
                    }
                    sb.drag[0].style.height = newSize + 'px';
                }
                if (s.params.scrollbarHide) {
                    clearTimeout(sb.timeout);
                    sb.track[0].style.opacity = 1;
                    sb.timeout = setTimeout(function() {
                        sb.track[0].style.opacity = 0;
                        sb.track.transition(400);
                    }, 1000);
                }
            },
            setTransition: function(duration) {
                if (!s.params.scrollbar)
                    return;
                s.scrollbar.drag.transition(duration);
            }
        };
        s.controller = {
            LinearSpline: function(x, y) {
                this.x = x;
                this.y = y;
                this.lastIndex = x.length - 1;
                var i1, i3;
                var l = this.x.length;
                this.interpolate = function(x2) {
                    if (!x2)
                        return 0;
                    i3 = binarySearch(this.x, x2);
                    i1 = i3 - 1;
                    return ((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1]) + this.y[i1];
                }
                ;
                var binarySearch = (function() {
                    var maxIndex, minIndex, guess;
                    return function(array, val) {
                        minIndex = -1;
                        maxIndex = array.length;
                        while (maxIndex - minIndex > 1)
                            if (array[guess = maxIndex + minIndex >> 1] <= val) {
                                minIndex = guess;
                            } else {
                                maxIndex = guess;
                            }
                        return maxIndex;
                    }
                    ;
                }
                )();
            },
            getInterpolateFunction: function(c) {
                if (!s.controller.spline)
                    s.controller.spline = s.params.loop ? new s.controller.LinearSpline(s.slidesGrid,c.slidesGrid) : new s.controller.LinearSpline(s.snapGrid,c.snapGrid);
            },
            setTranslate: function(translate, byController) {
                var controlled = s.params.control;
                var multiplier, controlledTranslate;
                function setControlledTranslate(c) {
                    translate = c.rtl && c.params.direction === 'horizontal' ? -s.translate : s.translate;
                    if (s.params.controlBy === 'slide') {
                        s.controller.getInterpolateFunction(c);
                        controlledTranslate = -s.controller.spline.interpolate(-translate);
                    }
                    if (!controlledTranslate || s.params.controlBy === 'container') {
                        multiplier = (c.maxTranslate() - c.minTranslate()) / (s.maxTranslate() - s.minTranslate());
                        controlledTranslate = (translate - s.minTranslate()) * multiplier + c.minTranslate();
                    }
                    if (s.params.controlInverse) {
                        controlledTranslate = c.maxTranslate() - controlledTranslate;
                    }
                    c.updateProgress(controlledTranslate);
                    c.setWrapperTranslate(controlledTranslate, false, s);
                    c.updateActiveIndex();
                }
                if (s.isArray(controlled)) {
                    for (var i = 0; i < controlled.length; i++) {
                        if (controlled[i] !== byController && controlled[i]instanceof Swiper) {
                            setControlledTranslate(controlled[i]);
                        }
                    }
                } else if (controlled instanceof Swiper && byController !== controlled) {
                    setControlledTranslate(controlled);
                }
            },
            setTransition: function(duration, byController) {
                var controlled = s.params.control;
                var i;
                function setControlledTransition(c) {
                    c.setWrapperTransition(duration, s);
                    if (duration !== 0) {
                        c.onTransitionStart();
                        c.wrapper.transitionEnd(function() {
                            if (!controlled)
                                return;
                            if (c.params.loop && s.params.controlBy === 'slide') {
                                c.fixLoop();
                            }
                            c.onTransitionEnd();
                        });
                    }
                }
                if (s.isArray(controlled)) {
                    for (i = 0; i < controlled.length; i++) {
                        if (controlled[i] !== byController && controlled[i]instanceof Swiper) {
                            setControlledTransition(controlled[i]);
                        }
                    }
                } else if (controlled instanceof Swiper && byController !== controlled) {
                    setControlledTransition(controlled);
                }
            }
        };
        s.hashnav = {
            init: function() {
                if (!s.params.hashnav)
                    return;
                s.hashnav.initialized = true;
                var hash = document.location.hash.replace('#', '');
                if (!hash)
                    return;
                var speed = 0;
                for (var i = 0, length = s.slides.length; i < length; i++) {
                    var slide = s.slides.eq(i);
                    var slideHash = slide.attr('data-hash');
                    if (slideHash === hash && !slide.hasClass(s.params.slideDuplicateClass)) {
                        var index = slide.index();
                        s.slideTo(index, speed, s.params.runCallbacksOnInit, true);
                    }
                }
            },
            setHash: function() {
                if (!s.hashnav.initialized || !s.params.hashnav)
                    return;
                document.location.hash = s.slides.eq(s.activeIndex).attr('data-hash') || '';
            }
        };
        function handleKeyboard(e) {
            if (e.originalEvent)
                e = e.originalEvent;
            var kc = e.keyCode || e.charCode;
            if (!s.params.allowSwipeToNext && (s.isHorizontal() && kc === 39 || !s.isHorizontal() && kc === 40)) {
                return false;
            }
            if (!s.params.allowSwipeToPrev && (s.isHorizontal() && kc === 37 || !s.isHorizontal() && kc === 38)) {
                return false;
            }
            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
                return;
            }
            if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
                return;
            }
            if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {
                var inView = false;
                if (s.container.parents('.swiper-slide').length > 0 && s.container.parents('.swiper-slide-active').length === 0) {
                    return;
                }
                var windowScroll = {
                    left: window.pageXOffset,
                    top: window.pageYOffset
                };
                var windowWidth = window.innerWidth;
                var windowHeight = window.innerHeight;
                var swiperOffset = s.container.offset();
                if (s.rtl)
                    swiperOffset.left = swiperOffset.left - s.container[0].scrollLeft;
                var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + s.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + s.height], [swiperOffset.left + s.width, swiperOffset.top + s.height]];
                for (var i = 0; i < swiperCoord.length; i++) {
                    var point = swiperCoord[i];
                    if (point[0] >= windowScroll.left && point[0] <= windowScroll.left + windowWidth && point[1] >= windowScroll.top && point[1] <= windowScroll.top + windowHeight) {
                        inView = true;
                    }
                }
                if (!inView)
                    return;
            }
            if (s.isHorizontal()) {
                if (kc === 37 || kc === 39) {
                    if (e.preventDefault)
                        e.preventDefault();
                    else
                        e.returnValue = false;
                }
                if ((kc === 39 && !s.rtl) || (kc === 37 && s.rtl))
                    s.slideNext();
                if ((kc === 37 && !s.rtl) || (kc === 39 && s.rtl))
                    s.slidePrev();
            } else {
                if (kc === 38 || kc === 40) {
                    if (e.preventDefault)
                        e.preventDefault();
                    else
                        e.returnValue = false;
                }
                if (kc === 40)
                    s.slideNext();
                if (kc === 38)
                    s.slidePrev();
            }
        }
        s.disableKeyboardControl = function() {
            s.params.keyboardControl = false;
            $(document).off('keydown', handleKeyboard);
        }
        ;
        s.enableKeyboardControl = function() {
            s.params.keyboardControl = true;
            $(document).on('keydown', handleKeyboard);
        }
        ;
        s.mousewheel = {
            event: false,
            lastScrollTime: (new window.Date()).getTime()
        };
        if (s.params.mousewheelControl) {
            try {
                new window.WheelEvent('wheel');
                s.mousewheel.event = 'wheel';
            } catch (e) {
                if (window.WheelEvent || (s.container[0] && 'wheel'in s.container[0])) {
                    s.mousewheel.event = 'wheel';
                }
            }
            if (!s.mousewheel.event && window.WheelEvent) {}
            if (!s.mousewheel.event && document.onmousewheel !== undefined) {
                s.mousewheel.event = 'mousewheel';
            }
            if (!s.mousewheel.event) {
                s.mousewheel.event = 'DOMMouseScroll';
            }
        }
        function handleMousewheel(e) {
            if (e.originalEvent)
                e = e.originalEvent;
            var we = s.mousewheel.event;
            var delta = 0;
            var rtlFactor = s.rtl ? -1 : 1;
            if (we === 'mousewheel') {
                if (s.params.mousewheelForceToAxis) {
                    if (s.isHorizontal()) {
                        if (Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))
                            delta = e.wheelDeltaX * rtlFactor;
                        else
                            return;
                    } else {
                        if (Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))
                            delta = e.wheelDeltaY;
                        else
                            return;
                    }
                } else {
                    delta = Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY) ? -e.wheelDeltaX * rtlFactor : -e.wheelDeltaY;
                }
            } else if (we === 'DOMMouseScroll')
                delta = -e.detail;
            else if (we === 'wheel') {
                if (s.params.mousewheelForceToAxis) {
                    if (s.isHorizontal()) {
                        if (Math.abs(e.deltaX) > Math.abs(e.deltaY))
                            delta = -e.deltaX * rtlFactor;
                        else
                            return;
                    } else {
                        if (Math.abs(e.deltaY) > Math.abs(e.deltaX))
                            delta = -e.deltaY;
                        else
                            return;
                    }
                } else {
                    delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX * rtlFactor : -e.deltaY;
                }
            }
            if (delta === 0)
                return;
            if (s.params.mousewheelInvert)
                delta = -delta;
            if (!s.params.freeMode) {
                if ((new window.Date()).getTime() - s.mousewheel.lastScrollTime > 60) {
                    if (delta < 0) {
                        if ((!s.isEnd || s.params.loop) && !s.animating)
                            s.slideNext();
                        else if (s.params.mousewheelReleaseOnEdges)
                            return true;
                    } else {
                        if ((!s.isBeginning || s.params.loop) && !s.animating)
                            s.slidePrev();
                        else if (s.params.mousewheelReleaseOnEdges)
                            return true;
                    }
                }
                s.mousewheel.lastScrollTime = (new window.Date()).getTime();
            } else {
                var position = s.getWrapperTranslate() + delta * s.params.mousewheelSensitivity;
                var wasBeginning = s.isBeginning
                  , wasEnd = s.isEnd;
                if (position >= s.minTranslate())
                    position = s.minTranslate();
                if (position <= s.maxTranslate())
                    position = s.maxTranslate();
                s.setWrapperTransition(0);
                s.setWrapperTranslate(position);
                s.updateProgress();
                s.updateActiveIndex();
                if (!wasBeginning && s.isBeginning || !wasEnd && s.isEnd) {
                    s.updateClasses();
                }
                if (s.params.freeModeSticky) {
                    clearTimeout(s.mousewheel.timeout);
                    s.mousewheel.timeout = setTimeout(function() {
                        s.slideReset();
                    }, 300);
                } else {
                    if (s.params.lazyLoading && s.lazy) {
                        s.lazy.load();
                    }
                }
                if (position === 0 || position === s.maxTranslate())
                    return;
            }
            if (s.params.autoplay)
                s.stopAutoplay();
            if (e.preventDefault)
                e.preventDefault();
            else
                e.returnValue = false;
            return false;
        }
        s.disableMousewheelControl = function() {
            if (!s.mousewheel.event)
                return false;
            s.container.off(s.mousewheel.event, handleMousewheel);
            return true;
        }
        ;
        s.enableMousewheelControl = function() {
            if (!s.mousewheel.event)
                return false;
            s.container.on(s.mousewheel.event, handleMousewheel);
            return true;
        }
        ;
        function setParallaxTransform(el, progress) {
            el = $(el);
            var p, pX, pY;
            var rtlFactor = s.rtl ? -1 : 1;
            p = el.attr('data-swiper-parallax') || '0';
            pX = el.attr('data-swiper-parallax-x');
            pY = el.attr('data-swiper-parallax-y');
            if (pX || pY) {
                pX = pX || '0';
                pY = pY || '0';
            } else {
                if (s.isHorizontal()) {
                    pX = p;
                    pY = '0';
                } else {
                    pY = p;
                    pX = '0';
                }
            }
            if ((pX).indexOf('%') >= 0) {
                pX = parseInt(pX, 10) * progress * rtlFactor + '%';
            } else {
                pX = pX * progress * rtlFactor + 'px';
            }
            if ((pY).indexOf('%') >= 0) {
                pY = parseInt(pY, 10) * progress + '%';
            } else {
                pY = pY * progress + 'px';
            }
            el.transform('translate3d(' + pX + ', ' + pY + ',0px)');
        }
        s.parallax = {
            setTranslate: function() {
                s.container.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function() {
                    setParallaxTransform(this, s.progress);
                });
                s.slides.each(function() {
                    var slide = $(this);
                    slide.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function() {
                        var progress = Math.min(Math.max(slide[0].progress, -1), 1);
                        setParallaxTransform(this, progress);
                    });
                });
            },
            setTransition: function(duration) {
                if (typeof duration === 'undefined')
                    duration = s.params.speed;
                s.container.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function() {
                    var el = $(this);
                    var parallaxDuration = parseInt(el.attr('data-swiper-parallax-duration'), 10) || duration;
                    if (duration === 0)
                        parallaxDuration = 0;
                    el.transition(parallaxDuration);
                });
            }
        };
        s._plugins = [];
        for (var plugin in s.plugins) {
            var p = s.plugins[plugin](s, s.params[plugin]);
            if (p)
                s._plugins.push(p);
        }
        s.callPlugins = function(eventName) {
            for (var i = 0; i < s._plugins.length; i++) {
                if (eventName in s._plugins[i]) {
                    s._plugins[i][eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                }
            }
        }
        ;
        function normalizeEventName(eventName) {
            if (eventName.indexOf('on') !== 0) {
                if (eventName[0] !== eventName[0].toUpperCase()) {
                    eventName = 'on' + eventName[0].toUpperCase() + eventName.substring(1);
                } else {
                    eventName = 'on' + eventName;
                }
            }
            return eventName;
        }
        s.emitterEventListeners = {};
        s.emit = function(eventName) {
            if (s.params[eventName]) {
                s.params[eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            }
            var i;
            if (s.emitterEventListeners[eventName]) {
                for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
                    s.emitterEventListeners[eventName][i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                }
            }
            if (s.callPlugins)
                s.callPlugins(eventName, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        }
        ;
        s.on = function(eventName, handler) {
            eventName = normalizeEventName(eventName);
            if (!s.emitterEventListeners[eventName])
                s.emitterEventListeners[eventName] = [];
            s.emitterEventListeners[eventName].push(handler);
            return s;
        }
        ;
        s.off = function(eventName, handler) {
            var i;
            eventName = normalizeEventName(eventName);
            if (typeof handler === 'undefined') {
                s.emitterEventListeners[eventName] = [];
                return s;
            }
            if (!s.emitterEventListeners[eventName] || s.emitterEventListeners[eventName].length === 0)
                return;
            for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
                if (s.emitterEventListeners[eventName][i] === handler)
                    s.emitterEventListeners[eventName].splice(i, 1);
            }
            return s;
        }
        ;
        s.once = function(eventName, handler) {
            eventName = normalizeEventName(eventName);
            var _handler = function() {
                handler(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
                s.off(eventName, _handler);
            };
            s.on(eventName, _handler);
            return s;
        }
        ;
        s.a11y = {
            makeFocusable: function($el) {
                $el.attr('tabIndex', '0');
                return $el;
            },
            addRole: function($el, role) {
                $el.attr('role', role);
                return $el;
            },
            addLabel: function($el, label) {
                $el.attr('aria-label', label);
                return $el;
            },
            disable: function($el) {
                $el.attr('aria-disabled', true);
                return $el;
            },
            enable: function($el) {
                $el.attr('aria-disabled', false);
                return $el;
            },
            onEnterKey: function(event) {
                if (event.keyCode !== 13)
                    return;
                if ($(event.target).is(s.params.nextButton)) {
                    s.onClickNext(event);
                    if (s.isEnd) {
                        s.a11y.notify(s.params.lastSlideMessage);
                    } else {
                        s.a11y.notify(s.params.nextSlideMessage);
                    }
                } else if ($(event.target).is(s.params.prevButton)) {
                    s.onClickPrev(event);
                    if (s.isBeginning) {
                        s.a11y.notify(s.params.firstSlideMessage);
                    } else {
                        s.a11y.notify(s.params.prevSlideMessage);
                    }
                }
                if ($(event.target).is('.' + s.params.bulletClass)) {
                    $(event.target)[0].click();
                }
            },
            liveRegion: $('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
            notify: function(message) {
                var notification = s.a11y.liveRegion;
                if (notification.length === 0)
                    return;
                notification.html('');
                notification.html(message);
            },
            init: function() {
                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
                    s.a11y.makeFocusable(s.nextButton);
                    s.a11y.addRole(s.nextButton, 'button');
                    s.a11y.addLabel(s.nextButton, s.params.nextSlideMessage);
                }
                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
                    s.a11y.makeFocusable(s.prevButton);
                    s.a11y.addRole(s.prevButton, 'button');
                    s.a11y.addLabel(s.prevButton, s.params.prevSlideMessage);
                }
                $(s.container).append(s.a11y.liveRegion);
            },
            initPagination: function() {
                if (s.params.pagination && s.params.paginationClickable && s.bullets && s.bullets.length) {
                    s.bullets.each(function() {
                        var bullet = $(this);
                        s.a11y.makeFocusable(bullet);
                        s.a11y.addRole(bullet, 'button');
                        s.a11y.addLabel(bullet, s.params.paginationBulletMessage.replace(/{{index}}/, bullet.index() + 1));
                    });
                }
            },
            destroy: function() {
                if (s.a11y.liveRegion && s.a11y.liveRegion.length > 0)
                    s.a11y.liveRegion.remove();
            }
        };
        s.init = function() {
            if (s.params.loop)
                s.createLoop();
            s.updateContainerSize();
            s.updateSlidesSize();
            s.updatePagination();
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.set();
                if (s.params.scrollbarDraggable) {
                    s.scrollbar.enableDraggable();
                }
            }
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                if (!s.params.loop)
                    s.updateProgress();
                s.effects[s.params.effect].setTranslate();
            }
            if (s.params.loop) {
                s.slideTo(s.params.initialSlide + s.loopedSlides, 0, s.params.runCallbacksOnInit);
            } else {
                s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit);
                if (s.params.initialSlide === 0) {
                    if (s.parallax && s.params.parallax)
                        s.parallax.setTranslate();
                    if (s.lazy && s.params.lazyLoading) {
                        s.lazy.load();
                        s.lazy.initialImageLoaded = true;
                    }
                }
            }
            s.attachEvents();
            if (s.params.observer && s.support.observer) {
                s.initObservers();
            }
            if (s.params.preloadImages && !s.params.lazyLoading) {
                s.preloadImages();
            }
            if (s.params.autoplay) {
                s.startAutoplay();
            }
            if (s.params.keyboardControl) {
                if (s.enableKeyboardControl)
                    s.enableKeyboardControl();
            }
            if (s.params.mousewheelControl) {
                if (s.enableMousewheelControl)
                    s.enableMousewheelControl();
            }
            if (s.params.hashnav) {
                if (s.hashnav)
                    s.hashnav.init();
            }
            if (s.params.a11y && s.a11y)
                s.a11y.init();
            s.emit('onInit', s);
        }
        ;
        s.cleanupStyles = function() {
            s.container.removeClass(s.classNames.join(' ')).removeAttr('style');
            s.wrapper.removeAttr('style');
            if (s.slides && s.slides.length) {
                s.slides.removeClass([s.params.slideVisibleClass, s.params.slideActiveClass, s.params.slideNextClass, s.params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-column').removeAttr('data-swiper-row');
            }
            if (s.paginationContainer && s.paginationContainer.length) {
                s.paginationContainer.removeClass(s.params.paginationHiddenClass);
            }
            if (s.bullets && s.bullets.length) {
                s.bullets.removeClass(s.params.bulletActiveClass);
            }
            if (s.params.prevButton)
                $(s.params.prevButton).removeClass(s.params.buttonDisabledClass);
            if (s.params.nextButton)
                $(s.params.nextButton).removeClass(s.params.buttonDisabledClass);
            if (s.params.scrollbar && s.scrollbar) {
                if (s.scrollbar.track && s.scrollbar.track.length)
                    s.scrollbar.track.removeAttr('style');
                if (s.scrollbar.drag && s.scrollbar.drag.length)
                    s.scrollbar.drag.removeAttr('style');
            }
        }
        ;
        s.destroy = function(deleteInstance, cleanupStyles) {
            s.detachEvents();
            s.stopAutoplay();
            if (s.params.scrollbar && s.scrollbar) {
                if (s.params.scrollbarDraggable) {
                    s.scrollbar.disableDraggable();
                }
            }
            if (s.params.loop) {
                s.destroyLoop();
            }
            if (cleanupStyles) {
                s.cleanupStyles();
            }
            s.disconnectObservers();
            if (s.params.keyboardControl) {
                if (s.disableKeyboardControl)
                    s.disableKeyboardControl();
            }
            if (s.params.mousewheelControl) {
                if (s.disableMousewheelControl)
                    s.disableMousewheelControl();
            }
            if (s.params.a11y && s.a11y)
                s.a11y.destroy();
            s.emit('onDestroy');
            if (deleteInstance !== false)
                s = null;
        }
        ;
        s.init();
        return s;
    };
    Swiper.prototype = {
        isSafari: (function() {
            var ua = navigator.userAgent.toLowerCase();
            return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
        }
        )(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isArray: function(arr) {
            return Object.prototype.toString.apply(arr) === '[object Array]';
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: (window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1) || (window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1)
        },
        device: (function() {
            var ua = navigator.userAgent;
            var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
            return {
                ios: ipad || iphone || ipod,
                android: android
            };
        }
        )(),
        support: {
            touch: (window.Modernizr && Modernizr.touch === true) || (function() {
                return !!(('ontouchstart'in window) || window.DocumentTouch && document instanceof DocumentTouch);
            }
            )(),
            transforms3d: (window.Modernizr && Modernizr.csstransforms3d === true) || (function() {
                var div = document.createElement('div').style;
                return ('webkitPerspective'in div || 'MozPerspective'in div || 'OPerspective'in div || 'MsPerspective'in div || 'perspective'in div);
            }
            )(),
            flexbox: (function() {
                var div = document.createElement('div').style;
                var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
                for (var i = 0; i < styles.length; i++) {
                    if (styles[i]in div)
                        return true;
                }
            }
            )(),
            observer: (function() {
                return ('MutationObserver'in window || 'WebkitMutationObserver'in window);
            }
            )()
        },
        plugins: {}
    };
    var swiperDomPlugins = ['jQuery', 'Zepto', 'Dom7'];
    for (var i = 0; i < swiperDomPlugins.length; i++) {
        if (window[swiperDomPlugins[i]]) {
            addLibraryPlugin(window[swiperDomPlugins[i]]);
        }
    }
    var domLib;
    if (typeof Dom7 === 'undefined') {
        domLib = window.Dom7 || window.Zepto || window.jQuery;
    } else {
        domLib = Dom7;
    }
    function addLibraryPlugin(lib) {
        lib.fn.swiper = function(params) {
            var firstInstance;
            lib(this).each(function() {
                var s = new Swiper(this,params);
                if (!firstInstance)
                    firstInstance = s;
            });
            return firstInstance;
        }
        ;
    }
    if (domLib) {
        if (!('transitionEnd'in domLib.fn)) {
            domLib.fn.transitionEnd = function(callback) {
                var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'], i, j, dom = this;
                function fireCallBack(e) {
                    if (e.target !== this)
                        return;
                    callback.call(this, e);
                    for (i = 0; i < events.length; i++) {
                        dom.off(events[i], fireCallBack);
                    }
                }
                if (callback) {
                    for (i = 0; i < events.length; i++) {
                        dom.on(events[i], fireCallBack);
                    }
                }
                return this;
            }
            ;
        }
        if (!('transform'in domLib.fn)) {
            domLib.fn.transform = function(transform) {
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
                }
                return this;
            }
            ;
        }
        if (!('transition'in domLib.fn)) {
            domLib.fn.transition = function(duration) {
                if (typeof duration !== 'string') {
                    duration = duration + 'ms';
                }
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
                }
                return this;
            }
            ;
        }
    }
    window.Swiper = Swiper;
}
)();
if (typeof (module) !== 'undefined') {
    module.exports = window.Swiper;
} else if (typeof define === 'function' && define.amd) {
    define([], function() {
        'use strict';
        return window.Swiper;
    });
}
;(function(_, p, $) {
    'use strict';
    var pbg = p.channel()
      , pb = p.channel('mv_preloader')
      , settings = {};
    pbg.subscribe("init", function(data) {
        settings = data.messageData;
        settings.coverImageUrl = data.coverImageUrl;
    });
    var loadconditions = [{
        channel: '',
        topic: 'init'
    }, {
        channel: 'mv_markup',
        topic: 'envelopeBuilt'
    }];
    if (settings.music && location.hash !== '#card' && location.hash !== '' && location.hash !== '#p') {
        loadconditions.push({
            channel: '',
            topic: 'audioReady'
        });
    }
    if (location.hash == '#info/photos') {
        loadconditions.push({
            channel: 'router',
            topic: 'card'
        });
        $("#stage").on('scroll.intoCards', _.debounce(function() {
            var s = $("#stage");
            if (s.scrollTop() < s.height()) {
                s.off('scroll.intoCards');
                location.hash = '';
                location.hash = 'card';
            }
        }, 200));
    }
    p.when(loadconditions, function() {
        $('#stage').spin();
        var queue = new createjs.LoadQueue()
          , list = [];
        queue.useXHR = false;
        if (_.isObject(settings.envelopeImages)) {
            list.push([{
                id: 'front',
                src: settings.envelopeImages.front,
                type: createjs.LoadQueue.IMAGE
            }]);
            list.push([{
                id: 'back',
                src: settings.envelopeImages.back,
                type: createjs.LoadQueue.IMAGE
            }, {
                id: 'flapClosed',
                src: settings.envelopeImages.flapClosed,
                type: createjs.LoadQueue.IMAGE
            }]);
            list.push([{
                id: 'flapOpened',
                src: settings.envelopeImages.flapOpened,
                type: createjs.LoadQueue.IMAGE
            }, {
                id: 'lining',
                src: settings.envelopeImages.lining,
                type: createjs.LoadQueue.IMAGE
            }]);
        }
        if (!settings.cards) {
            console.log('There must be at least one card to show!');
            return false;
        }
        if (window.devicePixelRatio > 1) {
            _.each(settings.cards, function(card, i) {
                if (card.hiResUrl && card.hiResUrl != card.url) {
                    card.url = card.hiResUrl;
                    console.log('card[ ' + i + ' ] URL changed to hi-res: ' + card.url);
                }
            });
        }
        list.push([{
            id: 'card1',
            src: _.pluck(settings.cards, 'url')[0],
            type: createjs.LoadQueue.IMAGE
        }]);
        if (settings.cards.length > 1) {
            var additionalCards = [];
            _.each(_.rest(_.pluck(settings.cards, 'url')), function(obj, i) {
                additionalCards.push({
                    id: 'card' + (i + 2),
                    src: obj,
                    type: createjs.LoadQueue.IMAGE
                });
            });
            list.push(additionalCards);
        }
        if (settings.coverImageUrl) {
            list.push([{
                id: 'coverImage',
                src: settings.coverImageUrl,
                type: createjs.LoadQueue.IMAGE
            }]);
        }
        _.each(list, function(obj) {
            queue.loadManifest(obj);
        });
        function handleComplete() {
            pb.publish('allCardsLoaded', {
                data: ''
            });
            window.ek__allcardsloaded = true;
            $('#stage').spin(false);
        }
        function handleFileLoad(response) {
            if (ek__data.debug)
                console.log('publishing ' + response.item.id + 'ImgLoaded');
            pb.publish(response.item.id + 'ImgLoaded', {
                data: {
                    src: response.item.src,
                    key: response.item.id,
                    w: response.result.width,
                    h: response.result.height
                }
            });
        }
        function handleErrors(err) {
            pb.publish('error', {
                data: {
                    text: err.text,
                    src: err.item.src
                }
            });
        }
        queue.on("fileload", handleFileLoad, this);
        queue.on("error", handleErrors, this);
        queue.on("complete", handleComplete, this);
    });
}(_, postal, jQuery));
(function(_, p, feat, $) {
    'use strict';
    if (ek__data.enterRsvpCode || ek__data.enterOpenAccessCode)
        return;
    var pbg = p.channel()
      , pb = p.channel('mv_markup');
    var data = {};
    var env = {};
    var csstransforms3d = true;
    var cnt = '';
    pbg.subscribe("init", function(dat) {
        data = dat.messageData;
        data.desktop = dat.desktop;
        data.logoUrl = dat.logoUrl;
        data.customLogo = dat.ek.customLogo;
        data.isNoNavi = _.isEmpty(dat.navi);
        cnt = dat.ek__lang_content;
    });
    p.when([{
        channel: 'env',
        topic: 'update'
    }], function(envdata) {
        if (ek__data.debug) {
            console.log('updating envdata in module #markup:');
            console.log(envdata);
        }
        env = envdata;
    });
    if (!feat.csstransforms3d) {
        $(document.body).addClass('no-csstransforms3d');
        csstransforms3d = false;
    }
    _.templateSettings.variable = "d";
    var tmpl_envelope = _.template('<div class="envelope <%- d.classes  %>">' + '<div class="envelope_back">' + '<div class="shadow-object"></div>' + '<div class="lining" data="lining"></div>' + '<div class="flap_inside" data="flapOpened"></div>' + '<div class="envelope_back_outside" data="back"></div>' + '<div class="flap_outside" data="flapClosed"></div>' + '</div>' + '<div class="flap_outside" data="flapClosed"></div>' + '<div class="envelope_front" data="front"></div>' + '</div>')
      , tmpl_card = _.template('<div class="card" id="mv_slides_card<%- d.i %>" data-card-idx="<%- d.i-1 %>"><div class="front" data="card<%- d.i %>"></div>' + '<% if(d.addBack){%><div class="back" data="card<%- d.i+1 %>"></div><% } %></div>');
    p.when([{
        channel: 'rp_navigation',
        topic: 'ready'
    }, {
        channel: 'env',
        topic: 'update'
    }], function() {
        buildEnvelope();
    });
    function addAnimatedGifs(card, target) {
        if (card.animatedGifs && card.animatedGifs.length) {
            _.each(card.animatedGifs, function(agif, i) {
                var $agif = $('<img class="agif" src="' + agif.src + '"/>'), css;
                if (data.desktop) {
                    css = {
                        left: agif.x,
                        top: agif.y,
                        width: agif.w,
                        height: agif.h
                    };
                } else {
                    var relF = function(px, ref) {
                        return Math.round(parseInt(px) * 1000 / ref) / 10 + '%';
                    };
                    css = {
                        left: relF(agif.x, card.refW),
                        top: relF(agif.y, card.refH),
                        width: relF(agif.w, card.refW),
                        height: relF(agif.h, card.refH)
                    };
                }
                $agif.css(css);
                target.append($agif);
            });
        }
    }
    function buildEnvelope() {
        var message = $('<div id="mv_msg" />');
        if (data.isNoNavi) {
            if (!data.desktop)
                message.addClass('noTopNavi');
        }
        if (data.doubleSidedCards && feat.csstransforms3d) {
            $(document.body).addClass('doubleSidedCards');
        }
        if (_.isObject(data.envelopeImages)) {
            message.append('<div class="animation outside">' + tmpl_envelope({
                classes: 'closed'
            }) + '</div>');
            var card = data.cards[0];
            var shadowClass = card.ownShadow ? '' : 'shadow';
            message.find('.envelope_back_outside').before('<div data="card1" class="card ' + card.format + ' ' + shadowClass + '"></div>');
        } else if (data.cardAnimation) {
            message.append('<div class="animation outside">' + '<div class="envelope flip movedDown"><div class="envelope_back"></div></div></div>');
            var card = data.cards[0];
            var classes = card.ownShadow ? '' : 'shadow';
            if (data.desktop)
                classes += ' zoomed';
            message.find('.envelope_back').append('<div data="card1" class="card resized ' + card.format + ' ' + classes + '"></div>');
        }
        var contents = $('#contents');
        if (contents.length)
            contents.before(message);
        else
            $('#stage').append(message);
        var isFirefox = typeof InstallTrigger !== 'undefined';
        var perspective = !isFirefox;
        if (!perspective) {
            $('.animation').css({
                'perspective': '100000px'
            })
        }
        slidemarkup();
        if (data.desktop) {
            $('#mv_msg').append('<div class="ekLogo"><a href="' + data.logoUrl + '" target="_blank" ' + ' onclick="ga(\'send\',\'event\',\'RV\',\'Viral\',\'EkBotmLogo\')"' + (data.customLogo ? '' : ' title="EventKingdom"') + '>&nbsp;</a></div>');
        }
        $('#stage').spin();
        window.envelopeBuilt = true;
        pb.publish('envelopeBuilt', {
            data: 'empty'
        });
    }
    p.when([{
        channel: 'mv_preloader',
        topic: '*'
    }], function(info) {
        if (!info.data) {
            return;
        }
        $('div[data="' + info.data.key + '"]').css({
            backgroundImage: 'url(' + info.data.src + ')'
        }).addClass('loaded').attr('data-w', info.data.w).attr('data-h', info.data.h);
    });
    p.when([{
        channel: 'mv_preloader',
        topic: 'frontImgLoaded'
    }, {
        channel: 'mv_markup',
        topic: 'envelopeBuilt'
    }], function(data1) {
        _.delay(function() {
            pb.publish('frontReady', {
                data: data1
            });
        }, 400);
    });
    p.when([{
        channel: 'mv_markup',
        topic: 'frontReady'
    }, {
        channel: 'mv_preloader',
        topic: 'backImgLoaded'
    }, {
        channel: 'mv_preloader',
        topic: 'flapClosedImgLoaded'
    }, {
        channel: 'mv_animation',
        topic: 'messageAppeared'
    }], function(data2, data3) {
        pb.publish('backReady', {
            data: {
                data2: data2,
                data3: data3
            }
        });
    });
    p.when([{
        channel: 'mv_preloader',
        topic: 'liningImgLoaded'
    }, {
        channel: 'mv_preloader',
        topic: 'flapOpenedImgLoaded'
    }, {
        channel: 'mv_preloader',
        topic: 'card1ImgLoaded'
    }], function(data4, data5, data6) {
        pb.publish('insideReady', {
            data: {
                data4: data4,
                data5: data5,
                data6: data6
            }
        });
    });
    p.when([{
        channel: 'mv_animation',
        topic: 'cardRemoved'
    }], function(data) {
        $('#mv_msg .animation .envelope .card').addClass('resized');
        pb.publish('cardResized', {
            data: {
                data: data
            }
        });
    });
    p.when([{
        channel: 'mv_animation',
        topic: 'cardZoomed'
    }], function() {
        _.delay(function() {
            var isShowDotsNavi = $('.navbar .rp_navi_card').hasClass('active') || data.isNoNavi && (_.isObject(data.envelopeImages) || data.cards && data.cards.length > 1);
            if (isShowDotsNavi) {
                $('.message-navigation').css({
                    display: 'block'
                });
                if (data.isNoNavi) {
                    if (!data.desktop)
                        $('.message-navigation').addClass('noTopNavi');
                }
            }
            if (mobileOS === 'Android') {
                $('#stage').css({
                    'overflowY': 'auto',
                    'paddingBottom': '20px'
                });
            }
            $('.swiper-container').css({
                display: 'block'
            });
            $('#mv_msg .animation').css('display', 'none');
            if (typeof mySwiper !== 'undefined') {
                mySwiper.params.autoplay = ek__data.messageData.cards[0].displayTimeBothSides * 1000;
                mySwiper.update(true);
                if (ie8) {
                    if (ek__data.debug)
                        console.log('IE8 swiper init...');
                    mySwiper.slideToIndex(_.isObject(data.envelopeImages) ? 1 : 0);
                }
                mySwiper.startAutoplay();
            }
            pbg.publish('cardsPreviewStarted', {});
        }, 200);
    });
    p.when([{
        channel: '',
        topic: 'cardsPreviewStarted'
    }], function() {
        $('#stage').addClass('cardsPreview');
    });
    function slidemarkup() {
        var slides = $('<div class="swiper-container" style="display:none;"><div class="swiper-wrapper"></div></div>');
        var swiperWrapper = slides.find('.swiper-wrapper');
        if (_.isObject(data.envelopeImages)) {
            swiperWrapper.append($('<div id="mv_slide_0" data-slide-idx="0" class="swiper-slide"><div><div>' + tmpl_envelope({
                open: true
            }) + '</div></div></li>'));
            _.each(data.envelopeImages, function(val, key) {
                slides.find('div[data="' + key + '"]').css({
                    backgroundImage: 'url(' + val + ')'
                });
            });
        }
        var envelSlides = _.isObject(data.envelopeImages) ? 1 : 0;
        var slideIdx = envelSlides;
        var prevIsFront = false;
        _.each(data.cards, function(card, i) {
            var cls = 'swiper-slide'
              , otherSideIdAttr = ''
              , cardMarkup = false;
            var nextCard = i + 1 < data.cards.length ? data.cards[i + 1] : undefined;
            if (prevIsFront) {
                prevIsFront = false;
                return;
            } else if (feat.csstransforms3d && card.front && nextCard && card.format == nextCard.format && card.index + 1 == nextCard.index) {
                cls += ' double-sided front';
                cardMarkup = tmpl_card({
                    card: card,
                    i: (i + 1),
                    addBack: true
                });
                prevIsFront = true;
                if (card.displayTime > 0) {
                    if (nextCard.displayTime) {
                        card.displayTimeBothSides = card.displayTime + nextCard.displayTime;
                        nextCard.displayTimeBothSides = card.displayTimeBothSides;
                    } else {
                        card.displayTimeBothSides = card.displayTime + 999;
                        nextCard.displayTimeBothSides = 0;
                    }
                } else {
                    card.displayTimeBothSides = 0;
                    nextCard.displayTimeBothSides = card.displayTimeBothSides;
                }
            } else {
                cardMarkup = tmpl_card({
                    card: card,
                    i: (i + 1)
                });
            }
            swiperWrapper.append('<div id="mv_slide_' + slideIdx + '" data-slide-idx="' + slideIdx + '" class="' + cls + '" ' + otherSideIdAttr + '"style="width:' + $(window).width() + 'px"><div>' + cardMarkup + '</div></div>');
            slideIdx++;
        });
        $('#mv_msg').append(slides);
        if (feat.csstransforms3d && !data.doubleSidedCards) {
            $('.swiper-container .card').css({
                '-webkit-transform': 'translateZ(0)'
            });
        }
        $('.swiper-slide').css({
            height: '100%'
        });
        _.each(data.cards, function(card, cardIdx) {
            if (card.animatedGifs && card.animatedGifs.length) {
                var slideImg = $('#mv_msg .swiper-container .swiper-slide [data="card' + (cardIdx + 1) + '"]');
                addAnimatedGifs(card, slideImg);
            }
        });
        if (csstransforms3d) {
            $('.swiper-slide').hammer().on("tap", ".envelope", function() {
                if (mySwiper) {
                    var ai = parseInt(mySwiper.activeIndex, 10);
                    if (ai != 0)
                        return;
                }
                $(this).toggleClass('flip');
            });
        }
        var cardPos = $('#mv_msg .animation .card').offset();
        if (ek__data.debug)
            console.log(cardPos);
        if (!_.isObject(data.envelopeImages) && !data.cardAnimation) {
            $('.swiper-container').css({
                display: 'block'
            });
            if (data.cards.length > 1) {
                $('.message-navigation').css({
                    display: 'block'
                });
            }
            getOS();
            if (mobileOS === 'Android') {
                $('#stage').css({
                    'overflowY': 'auto',
                    'paddingBottom': '20px'
                });
            }
        }
        pb.publish('slideMarkupReady', {
            data: cardPos
        });
    }
}(_, postal, Modernizr, jQuery));
(function(_, p, $) {
    'use strict';
    if (!Modernizr.csstransforms3d || ek__data.enterRsvpCode || ek__data.enterOpenAccessCode) {
        return;
    }
    var pbg = p.channel()
      , pb = p.channel('mv_animation')
      , settings = {}
      , isEdge = navigator.userAgent.search(/ Edge\//i) > 0;
    pbg.subscribe("init", function(data) {
        settings = _.extend(settings, data.messageData);
        settings.desktop = data.desktop;
    });
    p.when([{
        channel: 'mv_preloader',
        topic: 'card1ImgLoaded'
    }, {
        channel: '',
        topic: 'audioReady'
    }], function() {
        if (!settings.envelopeImages && settings.cardAnimation) {
            $('#stage').addClass('animating').spin(false);
            var msg = $('#mv_msg')
              , anim = msg.find('.animation');
            if (settings.desktop) {
                msg.css('z-index', 11);
            }
            forwardEvent(anim[0], "TransitionEnd", 'envelopeDismissed', settings.desktop ? 0 : 500);
            anim.removeClass('outside');
        }
    });
    p.when([{
        channel: 'mv_markup',
        topic: 'frontReady'
    }, {
        channel: '',
        topic: 'audioReady'
    }], function() {
        $('#stage').addClass('animating').spin(false);
        var msgE = $('#mv_msg')
          , animE = $('#mv_msg .animation')[0];
        if (settings.desktop) {
            msgE.css('z-index', 11);
        }
        _.delay(function() {
            $('#stage').spin({
                top: '90px'
            });
        }, 1500);
        forwardEvent(animE, "TransitionEnd", 'messageAppeared', 0);
        $('#mv_msg .animation').removeClass('outside');
    });
    p.when([{
        channel: 'mv_animation',
        topic: 'messageAppeared'
    }], function() {
        var msgE = $('#mv_msg');
        if (settings.desktop) {
            msgE.css('z-index', '');
        }
    });
    p.when([{
        channel: 'mv_animation',
        topic: 'messageAppeared'
    }, {
        channel: 'mv_markup',
        topic: 'insideReady'
    }], function() {
        if (ek__data.debug)
            console.log('mv_animation+messageAppeared, mv_markup+backReady')
        forwardEvent($('#mv_msg .animation .envelope')[0], "TransitionEnd", settings.desktop ? 'envelopeTurnedAround' : 'envelopeReadyToOpen');
        _.delay(function() {
            $('#mv_msg .animation .envelope').addClass('flip');
        }, 20);
    });
    p.when([{
        channel: 'mv_animation',
        topic: 'envelopeTurnedAround'
    }], function() {
        if (ek__data.debug)
            console.log('channel: mv_animation, topic: envelopeTurnedAround')
        _.delay(function() {
            forwardEvent($('#mv_msg .animation .envelope .envelope_back')[0], "TransitionEnd", 'envelopeReadyToOpen');
            _.delay(function() {
                $('#mv_msg .animation .envelope').addClass('movedDown');
            }, 20);
        }, 20);
    });
    p.when([{
        channel: 'mv_animation',
        topic: 'envelopeReadyToOpen'
    }, {
        channel: 'mv_markup',
        topic: 'insideReady'
    }], function() {
        if (ek__data.debug)
            console.log('in animation envelopeTurnedAround & insideReady');
        forwardEvent($('#mv_msg .animation .envelope .envelope_back .flap_inside')[0], "TransitionEnd", 'envelopeOpened');
        _.delay(function() {
            $('#stage').spin(false);
            $('#mv_msg .animation .envelope').removeClass('closed');
        }, 100);
    });
    p.when([{
        channel: 'mv_animation',
        topic: 'envelopeOpened'
    }], function() {
        if (ek__data.debug)
            console.log('in animation envelopeOpened');
        forwardEvent($('#mv_msg .animation .envelope .card')[0], "TransitionEnd", 'cardRemoved');
        _.delay(function() {
            $('#mv_msg .animation .envelope').addClass('cardRemoved');
            if (isEdge)
                $('<style></style>').appendTo(document.body).remove();
        }, 520);
    });
    p.when([{
        channel: 'mv_markup',
        topic: 'cardResized'
    }], function() {
        forwardEvent($('#mv_msg .animation .envelope .envelope_back_outside')[0], "TransitionEnd", 'envelopeDismissed');
        _.delay(function() {
            $('#mv_msg .animation .envelope').addClass('dismissed');
            if (isEdge)
                $('<style></style>').appendTo(document.body).remove();
        }, 20);
    });
    p.when([{
        channel: 'mv_animation',
        topic: 'envelopeDismissed'
    }], function() {
        $('#mv_msg .animation .envelope .card').addClass('zoomed');
        window.animationfinished = true;
        $('#stage').removeClass('animating');
        if (!settings.envelopeImages && settings.cardAnimation && settings.desktop) {
            $('#mv_msg').css('z-index', '');
        }
        _.delay(function() {
            pb.publish('cardZoomed', {
                data: 'empty'
            });
        }, 2000);
    });
    function pfEvent(element, type, callback) {
        var pfx = ["webkit", "moz", "MS", "o", ""];
        var i;
        for (i = 0; i < pfx.length; i++) {
            if (!pfx[i]) {
                type = type.toLowerCase();
            }
            element.addEventListener(pfx[i] + type, callback, false);
        }
    }
    function forwardEvent(element, type, name, fwDelay) {
        if (ek__data.debug)
            console.log('element: ' + element.className + ', type: ' + type + ', name: ' + name + ', fwDelay: ' + fwDelay)
        pfEvent(element, type, function(e) {
            e.stopPropagation();
            if (e.srcElement === element || e.originalTarget === element) {
                if ($(element).attr('data-done') !== 'true') {
                    $(element).attr('data-done', 'true');
                    if (fwDelay > 0)
                        _.delay(function() {
                            pb.publish(name, {
                                data: 'empty'
                            });
                        }, fwDelay);
                    else
                        pb.publish(name, {
                            data: 'empty'
                        });
                }
            }
        });
    }
}(_, postal, jQuery));
(function(_, p, $) {
    'use strict';
    if (ek__data.enterRsvpCode || ek__data.enterOpenAccessCode)
        return;
    var pbg = p.channel()
      , pb = p.channel('mv_animation')
      , settings = {}
      , isNoNavi = _.isEmpty(ek__data.navi);
    function checkIFrameAdded(cardIdx) {
        var card = settings.cards[cardIdx];
        if (card && card.iframes && card.iframes.length) {
            var slideImg = $('#mv_msg .swiper-container .swiper-slide [data="card' + (cardIdx + 1) + '"]');
            var ifr = slideImg.find('iframe');
            if (!ifr.length) {
                _.each(card.iframes, function(ifr, i) {
                    var $ifr = $(ifr.markup), cover = $('<div class="iframeCover"></div>'), css;
                    if (ek__data.desktop) {
                        css = {
                            left: ifr.x,
                            top: ifr.y,
                            width: ifr.w,
                            height: ifr.h
                        };
                    } else {
                        var scale = slideImg.width() / card.refW;
                        var scF = function(px) {
                            return Math.round(parseInt(px) * scale) + 'px';
                        };
                        css = {
                            left: scF(ifr.x),
                            top: scF(ifr.y),
                            width: scF(ifr.w),
                            height: scF(ifr.h)
                        };
                    }
                    $ifr.css(css);
                    cover.css(css);
                    slideImg.append($ifr).append(cover);
                });
            }
        }
    }
    var autoSwitchToReply = true;
    var _goToReplyTimeout, _flipCardTimeout;
    function _goToReply(automated) {
        clearTimeout(_goToReplyTimeout);
        clearTimeout(_flipCardTimeout);
        if (!isNoNavi) {
            location.hash = '';
            location.hash = 'reply';
        }
    }
    function getSlideIdx(el) {
        var slide = $(el).closest('.swiper-slide');
        return slide.length ? parseInt(slide.data('slideIdx'), 10) : undefined;
    }
    function getCardIdx(el) {
        var slide = $(el).closest('.swiper-slide');
        var card = slide.find('.card');
        var backOffs = slide.hasClass('double-sided') && slide.hasClass('flipped') ? 1 : 0;
        return card.length ? parseInt(card.data('cardIdx'), 10) + backOffs : undefined;
    }
    function flipCard(el, toBack) {
        var slide = $(el).closest('.swiper-slide.double-sided');
        if (!slide.length)
            return;
        var wasFlipped = slide.hasClass('flipped'), isFlipped;
        if (toBack === undefined) {
            slide.toggleClass('flipped');
            isFlipped = !wasFlipped;
        } else {
            if (toBack && !wasFlipped) {
                slide.addClass('flipped');
                isFlipped = true;
            } else if (!toBack && wasFlipped) {
                slide.removeClass('flipped');
                isFlipped = false;
            } else
                isFlipped = wasFlipped;
        }
        if (isFlipped) {
            var cardIdx = parseInt(slide.find('.card').data('cardIdx'), 10) + 1;
            checkIFrameAdded(cardIdx);
        }
        if (isFlipped != wasFlipped) {
            if (window.mySwiper)
                window.mySwiper.emit('onSlideChangeStart');
        }
    }
    function setupCardFlipTimer(cardIdx) {
        var card = settings.cards[cardIdx];
        if (ek__data.debug) {
            console.log('setupCardFlipTimer() card: ' + cardIdx);
            console.log(card);
        }
        if (card.front && card.displayTime > 0) {
            _flipCardTimeout = setTimeout(function() {
                if (ek__data.debug)
                    console.log('_flipCardTimeout() mySwiper.autoplaying: ' + window.mySwiper.autoplaying);
                if (window.mySwiper.autoplaying) {
                    var slide = $('#mv_msg .swiper-container [data-card-idx="' + cardIdx + '"]').closest('.swiper-slide');
                    if (slide.hasClass('double-sided')) {
                        flipCard(slide);
                    }
                }
            }, card.displayTime * 1000);
        }
    }
    pbg.subscribe("init", function(data) {
        settings = _.extend(settings, data.messageData);
    });
    p.when([{
        channel: 'mv_markup',
        topic: 'slideMarkupReady'
    }], function(data) {
        if (!ek__data.desktop || ek__data.tablet || ek__data.protoViewer || settings.doubleSidedCards && Modernizr.csstransforms3d) {
            $('#mv_msg').before('<div class="message-navigation" style="display:none"><div class="arrow left"></div>' + '<div class="pagination"></div><div class="arrow right"></div></div>');
        } else {
            if (ek__data.desktop && settings.cards.length > 1 && !isNoNavi) {
                $('#mv_msg').before('<div class="message-navigation" style="display:none"><div class="arrow right hidden"></div></div>');
            }
        }
        _.each(settings.cards, function(card, i) {
            var shadowClass = card.ownShadow ? '' : 'shadow';
            $('#mv_slides_card' + (i + 1)).addClass(card.format).addClass(shadowClass);
        });
        if (ek__data.debug) {
            console.log('[mv_markup:slideMarkupReady] ' + new Date().toTimeString());
        }
        p.when([{
            channel: 'mv_animation',
            topic: 'finished'
        }], function(automated) {
            if (automated && autoSwitchToReply == false)
                return;
            var displayTime = settings.cards[settings.cards.length - 1].displayTimeBothSides;
            if (displayTime) {
                _goToReplyTimeout = setTimeout(function() {
                    _goToReply(automated);
                }, displayTime * 1000);
            } else {
                clearTimeout(_goToReplyTimeout);
            }
        });
        p.when([{
            channel: 'router',
            topic: '*'
        }], function(info) {
            if (info && info.key === 'card') {} else {
                clearTimeout(_goToReplyTimeout);
                autoSwitchToReply = false;
                clearTimeout(_flipCardTimeout);
            }
        });
        $('#stage').one('scroll', function(e) {
            clearTimeout(_goToReplyTimeout);
        });
        var slideClickCtrl = {
            block: function() {
                this.blocked = true;
            },
            checkBlocked: function() {
                if (this.blocked) {
                    this.blocked = false;
                    return true;
                } else
                    return false;
            },
        };
        var swipeToTurn = settings.doubleSidedCards && Modernizr.csstransforms3d;
        if (swipeToTurn) {
            var turnDrag = false;
            $('#mv_msg .swiper-container .swiper-slide.double-sided').hammer({
                drag_min_distance: 0
            }).on('dragstart', function(ev) {
                var el = $(this);
                if (!el.hasClass(mySwiper.params.slideActiveClass))
                    return;
                var flipped = el.hasClass('flipped');
                if (flipped && ev.gesture.interimDirection == Hammer.DIRECTION_RIGHT || !flipped && ev.gesture.interimDirection == Hammer.DIRECTION_LEFT) {
                    mySwiper.params.onlyExternal = true;
                    turnDrag = true;
                    el.removeClass('animate');
                    mySwiper.stopAutoplay();
                    clearTimeout(_flipCardTimeout);
                    clearTimeout(_goToReplyTimeout);
                    slideClickCtrl.block();
                } else {
                    mySwiper.params.onlyExternal = false;
                    turnDrag = false;
                }
            }).on('drag', function(ev) {
                var el = $(this);
                if (!turnDrag || !el.hasClass(mySwiper.params.slideActiveClass))
                    return;
                var deg = ev.gesture.deltaX / 3;
                if (el.hasClass('flipped')) {
                    deg -= 180;
                }
                if (deg < -210)
                    deg = -210;
                else if (deg > 30)
                    deg = 30;
                el.find('.card').css('transform', 'rotateY(' + deg + 'deg)');
            }).on('dragend', function(ev) {
                var el = $(this)
                  , fulfill = false;
                if (!el.hasClass(mySwiper.params.slideActiveClass))
                    return;
                if (ev.gesture.deltaX == 0)
                    slideClickCtrl.checkBlocked();
                if (ev.gesture.velocityX >= 0.0) {
                    if (ev.gesture.interimDirection == Hammer.DIRECTION_LEFT) {
                        flipCard(el, true);
                        fulfill = true;
                    } else if (ev.gesture.interimDirection == Hammer.DIRECTION_RIGHT) {
                        flipCard(el, false);
                        fulfill = true;
                    }
                }
                el.addClass('animate').find('.card').css('transform', '');
                mySwiper.params.onlyExternal = false;
            });
        }
        window.mySwiper = new Swiper('#mv_msg .swiper-container',{
            direction: 'horizontal',
            nested: swipeToTurn && Modernizr.touch,
            loop: false,
            autoplay: _.isObject(settings.envelopeImages) ? 0 : settings.cards[0].displayTimeBothSides * 1000,
            pagination: !ek__data.desktop || ek__data.tablet || ek__data.protoViewer || settings.doubleSidedCards ? '.pagination' : null,
            paginationType: 'bullets',
            bulletClass: 'swiper-pagination-switch',
            bulletActiveClass: 'swiper-active-switch',
            autoplayDisableOnInteraction: true,
            autoplayStopOnLast: true,
            speed: 300,
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            grabCursor: true,
            paginationClickable: true,
            slideToClickedSlide: true,
            threshold: 5,
            initialSlide: _.isObject(settings.envelopeImages) ? 1 : 0,
            onReachEnd: function(swiper) {
                pb.publish('finished', true);
            }
        });
        $('#mv_msg .swiper-container .swiper-slide.double-sided').addClass("animate");
        adjustOldSwiperToNewApi(mySwiper);
        if (_.isObject(data.envelopeImages) || data.cardAnimation) {
            mySwiper.stopAutoplay();
        }
        var currentIndex = parseInt(mySwiper.activeIndex, 10);
        $('#mv_msg .swiper-container .card').on('click', function(e) {
            if (slideClickCtrl.checkBlocked())
                return;
            e.preventDefault();
            mySwiper.stopAutoplay();
            var ai = parseInt(mySwiper.activeIndex, 10);
            var slideI = getSlideIdx(this)
              , cardI = getCardIdx(this);
            if (slideI == currentIndex + 1) {
                var curSlide = $(mySwiper.slides[currentIndex]);
                if (curSlide.hasClass('double-sided') && !curSlide.hasClass('flipped')) {
                    flipCard(curSlide);
                    if (ai == slideI) {
                        mySwiper.slideTo(slideI - 1);
                    }
                    _.delay(function() {
                        mySwiper.slideTo(slideI);
                    }, 1000);
                    return;
                }
            }
            if (ai != slideI) {
                console.warn('.card.click() ai:', ai, ' != slideI:', slideI);
                mySwiper.slideTo(slideI);
                ai = slideI;
            }
            if (ai === currentIndex && (cardI > 0 || cardI === 0) && settings.cards[cardI] && settings.cards[cardI].extLink) {
                var url = settings.cards[cardI].extLink;
                if (!url.match(/^(http|https|ftp|mailto):/i)) {
                    url = 'http://' + url;
                }
                window.open(url, '_blank');
                return;
            }
            if (ai === currentIndex) {
                var slide = $(this).closest('.swiper-slide');
                if (slide.hasClass('double-sided')) {
                    flipCard(slide);
                } else if (ai === mySwiper.slides.length - 1) {
                    _goToReply(false);
                } else {}
            } else {}
        });
        if (currentIndex === 0) {
            $('.message-navigation .left').addClass('hidden');
        }
        if ((ek__data.tablet || ek__data.protoViewer) && isNoNavi) {
            $('.message-navigation .right').toggleClass('hidden', currentIndex === mySwiper.slides.length - 1);
        }
        $('.message-navigation .arrow.left').on('click', function(e) {
            e.preventDefault();
            var slide = $(mySwiper.slides[mySwiper.activeIndex]).filter('.double-sided.flipped');
            if (slide.length) {
                flipCard(slide, false);
            } else {
                mySwiper.slidePrev();
            }
        });
        $('.message-navigation .arrow.right').on('click', function(e) {
            var slide = $(mySwiper.slides[mySwiper.activeIndex]).filter('.double-sided');
            if (slide.length && !slide.hasClass('flipped')) {
                flipCard(slide, true);
            } else if (currentIndex === mySwiper.slides.length - 1) {
                if (!isNoNavi)
                    _goToReply(false);
            } else {
                if (!ek__data.desktop)
                    $('<style></style>').appendTo($(document.body)).remove();
                mySwiper.slideNext();
            }
            e.preventDefault();
        });
        window.myScroll = [];
        mySwiper.on('SlideNextStart', function() {
            mySwiper.stopAutoplay();
            if (typeof ek__allcardsloaded === 'undefined' && !$('#stage').hasClass('animating') && location.hash === '#card') {
                $('#stage').spin();
            }
            var cardI = getCardIdx('#mv_slide_' + mySwiper.activeIndex);
            var card = settings.cards[cardI];
            if (card) {
                setupCardFlipTimer(cardI);
                mySwiper.params.autoplay = card.displayTimeBothSides * 1000;
                mySwiper.startAutoplay();
                checkIFrameAdded(cardI);
            }
        });
        mySwiper.on('SlideChangeStart', function() {
            var slideIdx = parseInt(mySwiper.activeIndex, 10);
            if (ek__data.desktop) {
                var side = 0;
                if (slideIdx === 0 || mySwiper.isEnd) {
                    var dslide = $(mySwiper.slides[slideIdx]).filter('.double-sided');
                    if (dslide.length)
                        side = dslide.hasClass('flipped') ? 2 : 1;
                }
                $('.message-navigation .left').toggleClass('hidden', slideIdx === 0 && side != 2);
                if (ek__data.tablet || ek__data.protoViewer || settings.doubleSidedCards && Modernizr.csstransforms3d) {
                    if (isNoNavi) {
                        $('.message-navigation .right').toggleClass('hidden', mySwiper.isEnd);
                    }
                } else {
                    $('.message-navigation .right').toggleClass('hidden', !mySwiper.isEnd);
                }
            }
        });
        var startTrans;
        mySwiper.on('TouchStart', function() {
            startTrans = mySwiper.translate
        });
        mySwiper.on('TouchEnd', function() {
            if (mySwiper.isEnd && mySwiper.translate < startTrans) {
                _goToReply(false);
            }
        });
        mySwiper.on('SlideChangeEnd', function() {
            currentIndex = parseInt(mySwiper.activeIndex, 10);
            if (!mySwiper.isEnd) {
                clearTimeout(_goToReplyTimeout);
                clearTimeout(_flipCardTimeout);
            }
        });
        if (!_.isObject(settings.envelopeImages) && !settings.cardAnimation) {
            $('<style></style>').appendTo($(document.body)).remove();
            if ($('.pagination').children().length > 1) {
                $('.message-navigation').css({
                    display: 'block'
                });
            }
            $('#stage').spin(false);
            pbg.publish('cardsPreviewStarted', {});
        }
    });
    p.when([{
        channel: '',
        topic: 'cardsPreviewStarted'
    }], function() {
        if (!isNoNavi && mySwiper.paginationContainer && mySwiper.paginationContainer.length) {
            var addExtraBulletF = function() {
                mySwiper.paginationContainer.append($('<' + mySwiper.params.paginationElement + ' class="' + mySwiper.params.bulletClass + '"></' + mySwiper.params.paginationElement + '>').on('click', function() {
                    _goToReply(false);
                }));
            };
            addExtraBulletF();
            $(window).on('resize', addExtraBulletF);
        }
        setupCardFlipTimer(0);
        checkIFrameAdded(0);
    });
}(_, postal, jQuery, Modernizr.load));
(function(_, p, $, loader) {
    'use strict';
    if (ek__data.enterRsvpCode || ek__data.enterOpenAccessCode)
        return;
    var pbg = p.channel(), audioPlayer = null, settings = {}, mute = false, startDialog = !window.navigator.standalone, noAutoPlayAllowed = $('body').hasClass('safari'), cnt = '', maxStockMusicMillis = (ek__data.protoViewer ? 5 : 30) * 1000, fadeInMillis = 2000, fadeInTimer, fadeOutTimer;
    var startFadeIn = function() {
        if (ek__data.debug)
            console.log('startFadeIn()');
        var fadeInSteps = 40
          , volStep = 0;
        audioPlayer.volume(0);
        fadeInTimer = setInterval(function() {
            audioPlayer.volume(++volStep / fadeInSteps);
            if (volStep >= fadeInSteps) {
                stopFadeIn();
            }
        }, fadeInMillis / fadeInSteps);
    };
    var stopFadeIn = function() {
        if (fadeInTimer) {
            clearInterval(fadeInTimer);
            fadeInTimer = false;
        }
    };
    var startFadeOut = function() {
        if (ek__data.debug)
            console.log('startFadeOut()');
        stopFadeIn();
        var fadeOutSteps = 40
          , volStep = fadeOutSteps;
        var startVolume = audioPlayer.volume();
        fadeOutTimer = setInterval(function() {
            audioPlayer.volume(startVolume * (--volStep / fadeOutSteps));
            if (volStep <= 0) {
                if (ek__data.debug)
                    console.log('startFadeOut() pausing...');
                audioPlayer.one('pause', function() {
                    audioPlayer.seek(settings.music.fragmentStart / 1000);
                    if (ek__data.debug)
                        console.log('startFadeOut() rewinded.');
                });
                audioPlayer.pause();
                stopFadeIn();
                stopFadeOut(startVolume);
            }
        }, fadeInMillis / fadeOutSteps);
    };
    var stopFadeOut = function(volume) {
        if (fadeOutTimer) {
            clearInterval(fadeOutTimer);
            fadeOutTimer = false;
        }
    };
    pbg.subscribe("init", function(data) {
        cnt = data.ek__lang_content;
        if (data.messageData.music) {
            settings = data.messageData;
            settings.desktop = data.desktop;
            if (settings.music.fromStock) {
                if (!settings.music.fragmentLength || settings.music.fragmentLength > maxStockMusicMillis) {
                    settings.music.fragmentLength = maxStockMusicMillis;
                }
            }
            if (settings.music.fragmentLength > 0) {
                settings.music.fragmentStop = settings.music.fragmentStart + settings.music.fragmentLength;
            }
            if (ek__data.debug)
                console.log('MUSIC: ', settings.music);
            Modernizr.load({
                load: data.host + '/js/mobile/common/audio5.js',
                complete: function() {
                    pbg.publish('playerLoaded', {
                        data: 'loaded'
                    });
                }
            });
        } else {
            pbg.publish('audioReady', {
                data: ''
            });
        }
        if (settings.music && settings.music.startImmediately) {
            p.when([{
                channel: '',
                topic: 'musicPlaybackInitiated'
            }, {
                channel: 'mv_preloader',
                topic: _.isObject(settings.envelopeImages) ? 'frontImgLoaded' : 'card1ImgLoaded'
            }, {
                channel: '',
                topic: 'musicCanPlay'
            }], function() {
                $('#stage').spin(false);
                if (settings.music.fragmentStart > 0) {
                    if (ek__data.debug)
                        console.log('seek to: ', settings.music.fragmentStart / 1000);
                    audioPlayer.seek(settings.music.fragmentStart / 1000);
                }
                if (typeof ek_audiomute === 'undefined') {
                    audioPlayer.play();
                    pbg.publish('audioReady', {
                        data: ''
                    });
                }
            });
        } else if (settings.music) {
            p.when([{
                channel: '',
                topic: 'musicPlaybackInitiated'
            }, {
                channel: '',
                topic: 'musicCanPlay'
            }], function() {
                if (settings.music.fragmentStart > 0) {
                    if (ek__data.debug)
                        console.log('seek to: ', settings.music.fragmentStart / 1000);
                    audioPlayer.seek(settings.music.fragmentStart / 1000);
                }
                pbg.publish('audioReady', {
                    data: ''
                });
            });
            p.when([{
                channel: '',
                topic: 'musicCanPlay'
            }, {
                channel: 'mv_animation',
                topic: _.isObject(settings.envelopeImages) ? 'envelopeOpened' : 'envelopeDismissed'
            }], function() {
                $('#stage').spin(false);
                if (typeof ek_audiomute === 'undefined') {
                    audioPlayer.play();
                }
            });
        }
        if (settings.music && startDialog) {
            p.when([{
                channel: '',
                topic: 'musicPlaybackInitiated'
            }], function() {
                $('#stage').spin();
                if (mute) {
                    window.ek_audiomute = true;
                    pbg.publish('audioReady', {
                        mute: true
                    });
                } else {
                    if (noAutoPlayAllowed && !settings.music.startImmediately) {
                        audioPlayer.volume(0);
                        audioPlayer.play();
                        _.delay(function() {
                            audioPlayer.seek(0);
                            audioPlayer.pause();
                            audioPlayer.volume(1);
                        }, 10);
                    }
                }
                _.delay(function() {
                    $('#mv_audio_dialog').css('display', 'none');
                }, 10);
            });
        }
    });
    p.when([{
        channel: 'rp_navigation',
        topic: 'ready'
    }, {
        channel: '',
        topic: 'musicPlaybackInitiated'
    }], function() {
        $('.audio-hint').css({
            display: 'block'
        });
    });
    p.when([{
        channel: '',
        topic: 'audioReady'
    }], function() {
        $('.audio-hint').css({
            display: 'none'
        });
        $('#stage').spin(false);
    });
    p.when([{
        channel: '',
        topic: 'playerLoaded'
    }], function() {
        var audioReady = function() {
            this.on('error', function() {
                console.error('audioPlayer.error()');
                mute = true;
                pbg.publish('musicCanPlay', {
                    data: 'error'
                });
            }, this);
            this.load(settings.music.url);
            var soundE = $('#sound');
            this.one('canplay', function() {
                if (ek__data.debug)
                    console.log('music is buffered');
                pbg.publish('musicCanPlay', {
                    data: 'dance!'
                });
                soundE.addClass(window.ek_audiomute ? 'mute' : 'vol3').attr('volume', window.ek_audiomute ? '' : '3').show();
                soundE.find('#mute').off('click.mute').on('click.mute', function() {
                    if (ek__data.debug)
                        console.log('#mute.click() audioPlayer.playing: ', audioPlayer.playing);
                    if (!audioPlayer.playing) {
                        audioPlayer.play();
                        audioPlayer.volume(1);
                    } else {
                        audioPlayer.pause();
                    }
                });
                soundE.find('#volume').off('click.volume').on('click.volume', function() {
                    if (ek__data.debug)
                        console.log('#volume.click()');
                    var vol = parseInt(soundE.attr('volume'))
                      , nextVol = vol ? vol - 1 : 3;
                    audioPlayer.play();
                    audioPlayer.volume((nextVol + 1) / 5.0);
                    soundE.removeClass('vol0 vol1 vol2 vol3 mute').addClass('vol' + nextVol).attr('volume', nextVol);
                });
                $('#stage').spin(false);
            }, this);
            var startVal = settings.music.fragmentStart / 1000
            var stopVal = settings.music.fragmentStop / 1000;
            this.on('play', function() {
                if (ek__data.debug)
                    console.log('play() position: ', this.position);
                soundE.removeClass('mute').addClass('vol3').attr('volume', '3');
                if (this.position < startVal - 0.1) {
                    this.seek(startVal);
                }
                var startDiff = this.position - startVal;
                if (settings.music.fadeIn && !fadeInTimer && startDiff >= 0 && startDiff < 0.1) {
                    startFadeIn();
                } else {
                    stopFadeIn();
                    stopFadeOut();
                }
                if (ek__data.debug)
                    console.log('play() event ended.');
            }, this);
            this.on('pause', function() {
                if (ek__data.debug)
                    console.log('pause() position: ', this.position);
                soundE.removeClass('vol0 vol1 vol2 vol3').addClass('mute').attr('volume', '');
            }, this);
            this.on('ended', function() {
                if (ek__data.debug)
                    console.log('ended() position: ', this.position);
                soundE.removeClass('vol0 vol1 vol2 vol3').addClass('mute').attr('volume', '');
                if (settings.music.loop) {
                    audioPlayer.seek(0);
                    audioPlayer.play();
                }
            }, this);
            if (settings.music.fragmentStop > 0) {
                var fadeOutVal = settings.music.fadeOutStart ? settings.music.fadeOutStart / 1000 : -1;
                this.on('timeupdate', function(position, duration) {
                    if (ek__data.debug)
                        console.log('timeupdate() position: ', position, ', duration: ', duration);
                    if (fadeOutVal > 0 && !fadeOutTimer && position >= fadeOutVal && position < stopVal) {
                        startFadeOut();
                    }
                    if (position >= stopVal) {
                        if (fadeOutVal > 0) {
                            audioPlayer.one('pause', function() {
                                audioPlayer.seek(startVal);
                            });
                            audioPlayer.pause();
                        } else {
                            audioPlayer.seek(startVal);
                            if (settings.music.fadeIn && !fadeInTimer)
                                startFadeIn();
                        }
                        position = startVal;
                    } else if (position < startVal - 0.1) {
                        audioPlayer.seek(startVal);
                        position = startVal;
                        if (settings.music.fadeIn && !fadeInTimer)
                            startFadeIn();
                    }
                    if (ek__data.debug)
                        console.log('timeupdate() event ended.');
                }, this);
            }
        };
        audioPlayer = new Audio5js({
            ready: audioReady,
            throw_errors: false,
            format_time: false
        });
        if (startDialog) {
            var tmpl_dialog = $('<div id="mv_audio_dialog" class="hidden">' + '<p>' + "View card with music?" + '</p>' + '<div id="mv_audio_controls"></div>' + '</div>');
            $('<a role="mute"><span>' + "NO" + '</span></a>').on('click', function(ev) {
                window.ek_audiomute = true;
                mute = true;
                $('#sound').removeClass('vol0 vol1 vol2 vol3').addClass('mute').attr('volume', '');
                pbg.publish('musicPlaybackInitiated', {
                    data: 'mute'
                });
            }).appendTo($(tmpl_dialog).find('#mv_audio_controls'));
            $('<a role="play"><span>' + "YES" + '</span></a>').on('click', function(ev) {
                pbg.publish('musicPlaybackInitiated', {
                    data: 'play'
                });
            }).appendTo($(tmpl_dialog).find('#mv_audio_controls'));
            $('#stage').spin(false);
            $('#stage').prepend(tmpl_dialog);
            _.delay(function() {
                $('#mv_audio_dialog').removeClass('hidden');
            }, 10);
        } else {
            pbg.publish('musicPlaybackInitiated', {
                data: 'dance!'
            });
        }
    });
    p.when([{
        channel: 'router',
        topic: '*'
    }], function(info) {});
}(_, postal, jQuery, Modernizr.load));
;if (ek__data.enterOpenAccessCode) {
    location.hash = '#openAccessCode';
} else if (location.hash === '' || location.hash === '#p' || location.hash === 'p') {
    if (ek__data.enterRsvpCode) {
        location.hash = '#rsvpCode';
    } else {
        location.hash = '#card';
    }
}
var ek_jsonrpc_counter = 0;
var EK_PAGE_TOP_PADDING = 80;
var EK_PAGE_SCROLL_ANIMATE = 200;
var rv_utils = (function($) {
    var _systemMessageDismissedAlready = false;
    return {
        _showSystemMessage: function(msgText) {
            if (msgText && !_systemMessageDismissedAlready) {
                var smE = $('#systemMessage');
                if (!smE.length) {
                    $(document.body).append('<div id="systemMessage"><span>' + msgText + '</span> <a href="#" onclick="return rv_utils.__dSM(this)">' + _Translator['label.dismiss'] + '</a></div>');
                    if (window["ga"])
                        ga('send', 'event', 'SystemMessage', 'Show', 'Rv');
                } else {
                    smE.find('span').html(msgText);
                }
            }
        },
        __dSM: function(linkE) {
            $(linkE).closest('div').remove();
            _systemMessageDismissedAlready = true;
            if (window["ga"])
                ga('send', 'event', 'SystemMessage', 'Dismiss', 'Rv');
            return false;
        },
        findPopup: function(id) {
            if ($.type(id) == 'string') {
                if (id.search(/^[#\.]/) !== 0) {
                    id = '#' + id;
                }
            }
            var p = $(id);
            if (!p.hasClass('popup')) {
                p = p.closest('.popup');
            }
            return p;
        },
        buildPopup: function(id, classes, innerHtml) {
            if (!innerHtml)
                return $();
            var html = '<div class="popup"><span onclick="rv_utils.closePopup( this )" class="close">&times;</span>' + '<div class="popupContents">' + innerHtml + '</div></div>';
            var p = $(html);
            if (id)
                p.attr('id', id);
            if (classes)
                p.addClass(classes);
            return p;
        },
        openPopup: function(id) {
            var p = this.findPopup(id).addClass('opened');
            if (p.hasClass('modal'))
                $('body').addClass('modalPopup');
        },
        closePopup: function(id) {
            var p = this.findPopup(id).removeClass('opened');
            if (!$('.popup.opened.modal').length)
                $('body').removeClass('modalPopup');
            p.triggerHandler('close');
        },
        genRecaptchaToken: function() {
            return grecaptcha.execute(ek__data.recaptchaKey, {
                action: 'RVShareInvite'
            });
        }
    };
}
)(jQuery);
var rp_utils = (function(_, p, $) {
    ek__data.recipName = ek__data.recipName || '';
    ek__data.email = ek__data.email || '';
    var hlightSelF = function(sel) {
        var retv = sel.css('background-color');
        sel.animate({
            'background-color': '#b44ba8'
        }, 500).animate({
            'background-color': retv
        }, 1000, 'swing', function() {
            sel.css('background-color', '');
        });
    };
    return {
        showMsg: function(page, msg, type, timeout) {
            if (type == 'error' && !ek__data.desktop) {
                alert(msg);
            } else {
                var b = $('body');
                if (b.hasClass('modalPopup'))
                    b.removeClass('modalPopup');
                page = $(page);
                var msgE = page.find('#rpc_message');
                var hideMsg = function() {
                    if (ek__data.desktop)
                        msgE.fadeOut(500, function() {
                            msgE.remove()
                        });
                    else
                        msgE.css({
                            'display': 'none'
                        }).remove();
                };
                msgE.css({
                    'display': 'none'
                }).remove();
                if (ek__data.desktop) {
                    page.prepend('<div id="rpc_message"><pre>' + msg + '</pre></div>');
                } else {
                    page.children('div').first().prepend('<div id="rpc_message"><pre>' + msg + '</pre></div>');
                    if (mobileOS === 'iOS' && parseFloat(mobileOSver) < 7) {
                        contentscroller.scrollTo(0, 0)
                    }
                }
                msgE = page.find('#rpc_message');
                msgE.click(hideMsg);
                $(document).one('click', hideMsg);
                if (timeout)
                    _.delay(hideMsg, timeout);
                if (!ek__data.desktop) {
                    rp_utils.scrollToPage(page);
                }
            }
        },
        highlightErrorCode: function(page, code) {
            if (code == 4 || code == 5) {
                hlightSelF(page.find('input[name="email"]'));
            } else if (code == 6) {
                hlightSelF(page.find('input[name="Name"]'));
            } else if (code == 7) {
                hlightSelF(page.find('#improveContactInfo input, #improveContactInfo select'));
            } else if (code == 10) {
                hlightSelF(page.find('.radioform > div > span'));
            } else if (code == 12) {
                hlightSelF(page.find('textarea[name="text"]'));
            } else if (code == 15) {
                hlightSelF(page.find('#accompaniesUpdate input'));
            } else if (code == 16) {
                hlightSelF(page.find('#GDPRAcceptance'));
            }
        },
        syncRecipName: function(scope) {
            scope = scope || document.body;
            $('.recipNameUpdate input', scope).val(ek__data.recipName).on('blur', function() {
                ek__data.recipName = $(this).val();
                if (ek__data.recipName)
                    $('.recipNameUpdate input').not(this).val(ek__data.recipName);
            });
        },
        syncEmail: function(scope) {
            scope = scope || document.body;
            $('.emailUpdate input', scope).val(ek__data.email).on('blur', function() {
                ek__data.email = $(this).val();
                if (ek__data.email)
                    $('.emailUpdate input').not(this).val(ek__data.email);
            });
        },
        updateMissingToken: function(token) {
            if (!ek__data.accessToken && token) {
                ek__data.accessToken = token;
                if (ek__data.ek.emailUrl) {
                    ek__data.ek.emailUrl = ek__data.ek.emailUrl.replace(/([\?\&]token=)/, '$1' + token);
                    var rvlpLinkE = $('.rvlpLink a');
                    if (rvlpLinkE.length) {
                        rvlpLinkE.attr('href', ek__data.ek.emailUrl);
                    }
                }
            }
        },
        scrollToPage: function($page) {
            var scrollToY = $('#mv_msg').height() - EK_PAGE_TOP_PADDING;
            if ($page && $page.length) {
                scrollToY += $page.position().top;
            }
            $('#stage').animate({
                scrollTop: scrollToY
            }, EK_PAGE_SCROLL_ANIMATE);
        },
        jsonRPC: function(method, params, page) {
            if (!params)
                params = {};
            if (!params.accessToken)
                params.accessToken = ek__data.accessToken;
            ek_jsonrpc_counter++;
            return $.ajax(ek__data.host + ek__data.endpointUrl, {
                type: 'POST',
                dataType: 'json',
                contentType: "application/json",
                data: JSON.stringify({
                    'jsonrpc': '2.0',
                    'method': method,
                    'params': params,
                    'id': ek_jsonrpc_counter
                })
            }).done(function(data) {
                if (page && data.result) {
                    if (data.result.message) {
                        rp_utils.showMsg(page, data.result.message, 'result', 3000);
                    }
                }
                if (page && data.error) {
                    if (data.error.message) {
                        rp_utils.showMsg(page, data.error.message, 'error');
                        rp_utils.highlightErrorCode(page, data.error.code);
                    } else {
                        rp_utils.showMsg(page, 'Unknown JSON-RPC error', 'error');
                    }
                }
            }).fail(function(jqXHR, textStatus, errorThrown) {
                if (page) {
                    rp_utils.showMsg(page, textStatus, 'error');
                }
            });
        }
    };
}
)(_, postal, jQuery);
(function(p) {
    'use strict';
    var pbg = p.channel()
      , pb = p.channel('env')
      , envdata = {};
    pbg.subscribe("dataAvailable", function(data) {
        envdata.orientation = window.orientation === 90 || window.orientation === -90 ? 'landscape' : 'portrait';
        getOS();
        if (mobileOS === 'Android' && parseFloat(mobileOSver) < 3) {
            ek__data.messageData.envelopeImages = null;
            data.messageData.envelopeImages = null;
        }
        if (mobileOS === 'Android') {
            $('#stage').css({
                'position': 'fixed'
            })
            $('body').on('click', 'textarea', function(e) {
                $(this).parents('.content').css({
                    'paddingBottom': '200px'
                })
                $('#contents').scrollTop($(this).position().top + 15);
            })
            $('body').on('click', 'input', function(e) {
                if ($(this).attr('type') === 'text') {
                    $('#contents').scrollTop($(this).position().top + 15);
                }
            })
        }
        if ($.ua.platform.name === 'win' && $.ua.browser.name === 'firefox') {
            $('html').addClass('win-ff')
        }
        if (navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i)) {
            $('html').addClass('ipad ios7');
            $(document).bind('touchmove', function(e) {
                if (location.hash === '#card') {
                    e.preventDefault();
                }
            });
        }
        pb.publish('update', envdata);
        data.ek__lang_content = {
            'global': window.i18n_GLOBAL,
            'custom': window.i18n_ek_RV
        };
        pbg.publish('init', data);
    });
}(postal));
(function(_, p, route, $) {
    'use strict';
    var settings = {};
    var pbg = p.channel()
      , pb = p.channel('router');
    pbg.subscribe("init", function(data) {
        settings.navi = data.navi || null;
        settings.startupURL = data.startupURL || null;
        if (_.size(data.pages) == 1 && _.has(data.pages, 'message')) {
            settings.noNaviMsg = data.pages.message;
        }
        if (settings.navi === null) {
            console.log('"navi" object missing. Cannot match hash data');
            return false;
        }
        var escapeF = function(fieldV, linkUrls) {
            if (_.isString(fieldV)) {
                fieldV = _.escape(fieldV);
                if (linkUrls) {
                    var urlPattern = /\b((((ht|f)tp(s)?:)\/\/)(www[0-9]{0,3}\.[\S]+(\b|$)))/gim;
                    fieldV = fieldV.replace(urlPattern, '<a href="$3//$6" target="_blank">$6</a>');
                    urlPattern = /(^|[^\w\/>])(www[0-9]{0,3}\.[\S]+(\b|$))/gim;
                    fieldV = fieldV.replace(urlPattern, '$1<a href="http://$2" target="_blank">$2</a>');
                    var emailPattern = /\b([\S]+@[a-z0-9\.\-]+[.][a-z]{2,4}(\b|$))/gim;
                    fieldV = fieldV.replace(emailPattern, '<a href="mailto:$1" target="_blank">$1</a>');
                }
                return fieldV;
            } else {
                return fieldV;
            }
        }
        var escapeO = function(ote) {
            _.each(ote, function(val, key) {
                if (_.isObject(val)) {
                    escapeO(val);
                } else if (_.isArray(val)) {
                    _.each(val, function(aF, i) {
                        val[i] = escapeF(aF);
                    });
                }
                if (_.isString(val)) {
                    ote[key] = escapeF(val, (key == 'text' || key == 'comment' || key == 'description'));
                }
            });
        }
        escapeO(data.pages);
        pb.publish('ready', {
            data: ''
        });
        var isPhotosPg = location.hash == '#info/photos';
        var isDwnlPg = location.hash == '#info/downloads';
        if (isPhotosPg || isDwnlPg) {
            pbg.publish('renderAllPages', {});
            p.when([{
                channel: 'rp_pages',
                topic: 'pageLayoutChanged'
            }], function(data) {
                var $page = isPhotosPg ? $('#photos_frame') : $('#downloads_frame');
                $page[0].scrollIntoView();
                var stage = $('#stage');
                stage.scrollTop(Math.max(stage.scrollTop() - EK_PAGE_TOP_PADDING, 0));
            });
        }
    });
    p.when([{
        channel: 'rp_navigation',
        topic: 'ready'
    }, {
        channel: 'rp_pages',
        topic: 'allPagesRendered'
    }, {
        channel: 'router',
        topic: 'ready'
    }], function() {
        var paths = {};
        var isNoNavi = _.isEmpty(settings.navi);
        if (isNoNavi) {
            var KEY_CARD = 'card';
            paths[KEY_CARD] = function() {
                pb.publish(KEY_CARD, {
                    key: KEY_CARD
                });
            }
            paths[KEY_CARD + '/*'] = function(path) {
                pb.publish(KEY_CARD, {
                    key: KEY_CARD,
                    path: path
                });
            }
        } else {
            _.each(settings.navi, function(val, key) {
                paths[key] = function() {
                    if (key != 'card' && settings.noNaviMsg) {
                        alert(settings.noNaviMsg);
                        return;
                    }
                    pb.publish(key, {
                        key: key,
                        dat: val
                    });
                }
                ;
                paths[key + '/*'] = function(path) {
                    if (settings.noNaviMsg) {
                        alert(settings.noNaviMsg);
                        return;
                    }
                    pb.publish(key, {
                        key: key,
                        path: path,
                        dat: val
                    });
                }
                ;
            });
        }
        route(paths);
    });
    $(document).on('click', 'a[href="#*"]', function(ev) {
        ev.preventDefault();
        if ($(event.target).attr("href") !== '#p') {
            location.hash = '';
            location.hash = $(event.target).attr("href");
        }
    });
}(_, postal, routie, jQuery));
(function(_, p, $) {
    'use strict';
    var settings = {};
    var pbg = p.channel()
      , pb = p.channel('rp_navigation')
      , cnt = null;
    var pageChangesCounter = 0;
    pbg.subscribe("init", function(data) {
        if (data.enterRsvpCode || data.enterOpenAccessCode) {
            $('#stage').append('<div id="contents"></div>');
            pb.publish('ready', {
                data: ''
            });
            return;
        }
        settings.navi = data.navi || null;
        settings.startupURL = data.startupURL || null;
        cnt = data.ek__lang_content;
        settings.landscapeWarningText = data.landscapeWarningText || null;
        if (settings.navi === null) {
            console.log('"navi" object missing. Cannot proceed without');
        }
        var isNoNavi = _.isEmpty(settings.navi);
        var subnavilen = isNoNavi ? 0 : _.keys(settings.navi.info).length;
        var desktopNaviWrapper = function(tmpl) {
            return data.desktop ? '<div class="navline">' + tmpl + '</div>' : tmpl;
        };
        _.templateSettings.variable = "navi";
        // var _infoItemLabel = _.escape(cnt.global.navigation.more || null);
        var _infoItemLabel = _.escape(null);
        if (subnavilen == 1) {
            if (settings.navi.info.photos) {
                _infoItemLabel = _.escape(cnt.global.navigation.photos);
            } else if (settings.navi.info.info) {
                _infoItemLabel = _.escape(settings.navi.info.info.label);
            }
        }
        if (!isNoNavi || data.desktop) {
            var _naviTemplate = '';
            _naviTemplate += '<div class="navbar' + (!subnavilen ? ' reduced' : '') + '">';
            if (!isNoNavi) {
                _naviTemplate += '<a class="rp_navi_card active" href="#card"><%- navi.card.label %></a>' + '<a class="rp_navi_reply" href="#reply"><%- navi.reply.label %></a>' + '<% if(Object.keys(navi.info).length > 0){ %>' + '<a class="rp_navi_info" <% if(Object.keys(navi.info).length==1){%> data="solo" href="#info/<%=Object.keys(navi.info)[0]%>"  <% }else{ %>  href="#p"  <% } %> >' + _infoItemLabel + '</a>' + '<% } %>';
            }
            _naviTemplate += '</div>';
            if (!isNoNavi) {
                _naviTemplate += '<% if(Object.keys(navi.info).length>0){ %>' + '<div class="rp_subnav"><div><ul><% _.each( navi.info, function(obj,i){ %>' + '<li><a href="#info/<%- i %>"><%- obj.label %></a></li>' + '<% }) %></ul></div></div>' + '<% } %>';
            }
            var tmpl_navi = _.template(desktopNaviWrapper(_naviTemplate));
            $('#stage').append(tmpl_navi(settings.navi));
            if (data.desktop) {
                var iconsHtml = '';
                if (data.printUrl)
                    iconsHtml += '<div id="printer"><a href="' + data.printUrl + '" title="' + data.printLabel + '"> </a></div>';
                if (data.messageData.music) {
                    iconsHtml += '<div id="sound"><span id="mute" title="' + data.messageData.music.labels.mute + '"></span><span id="volume"></span></div>';
                }
                if (iconsHtml)
                    $('#stage .navbar').prepend(iconsHtml);
                if (ek__data.ek.email && ek__data.ek.emailUrl) {
                    var guestName = ek__data.ek.guestName || ek__data.ek.email;
                    $('#stage .navline').append('<div class="rec-email"><a href="' + ek__data.ek.emailUrl + '" target="_blank" onclick="ga(\'send\',\'event\',\'RV\',\'Viral\',\'TopREmail\')">' + guestName + '</a></div>');
                }
            }
        }
        $('#stage').append('<div id="bottomBar" style="display: none;"></div>');
        if (ek__data.debug) {
            console.log('cnt:');
            console.log(cnt);
        }
        _.templateSettings.variable = "cnt";
        var tmpl_cont = _.template('<div class="audio-hint" style="display:none"><p>Downloadiiing music</p></div>' + '<div id="rp_landscape_shim" style="display:none"><p>Please return to portraiiiiiit mode</p></div>' + '<div id="contents" style="display:none">' + '</div>');
        $('#stage').append(tmpl_cont(cnt));
        $('a.rp_navi_info').on('click', function() {
            if ($(this).attr('data') !== 'solo') {
                $('.rp_subnav').toggleClass('open').removeClass('auto');
                if (typeof window.naviscroller === 'undefined') {
                    getOS();
                    if ((mobileOS === 'iOS' && parseFloat(mobileOSver) < 7) || (mobileOS === 'Android' && parseFloat(mobileOSver) < 3)) {
                        window.naviscroller = new IScroll($('.rp_subnav div')[0],{
                            scrollX: false,
                            scrollY: true,
                            zoom: false,
                            momentum: true,
                            click: true
                        });
                    }
                }
            }
        });
        if (data.desktop) {
            $('a.rp_navi_info').on('mouseenter', function() {
                if ($(this).attr('data') !== 'solo')
                    $('.rp_subnav').addClass('open').removeClass('auto');
            }).prev().on('mouseenter', function() {
                $('.rp_subnav').removeClass('open auto');
            });
            $('.rp_subnav ul').on('mouseleave', function() {
                $('.rp_subnav').removeClass('open auto');
            });
        }
        $('.navbar > a').hammer().on('tap', function(ev) {
            location.hash = '';
        });
        $('.rp_subnav a').hammer().on('tap', function(ev) {
            ev.preventDefault();
            ev.stopPropagation();
            location.hash = '';
            $('.rp_subnav').removeClass('auto');
            $('.rp_subnav').find('li').removeClass('active');
            $(this).parents('li').addClass('active');
        });
        $('.rp_subnav').on('click', function() {
            $(this).toggleClass('open');
        });
        var naviArrowClk = function(next) {
            var navbar = $('#stage .navbar')
              , subnav = $('#stage .rp_subnav');
            var tlactive = navbar.find('.active');
            var followLink = function(a) {
                if (a && a.attr('href'))
                    location.hash = a.attr('href').replace('#', '');
                return a;
            }
            if (tlactive.hasClass('rp_navi_reply')) {
                if (next) {
                    if (subnav.length) {
                        var clicked = followLink(subnav.find('a').first());
                    }
                } else {
                    var clicked = followLink(navbar.find('.rp_navi_card'));
                }
            } else if (tlactive.hasClass('rp_navi_info')) {
                if (next) {
                    followLink(subnav.find('.active').next().find('a'));
                } else {
                    var prev = subnav.find('.active').prev();
                    if (prev.length) {
                        followLink(prev.find('a'));
                    } else {
                        followLink(navbar.find('.rp_navi_reply'));
                    }
                }
            }
            return false;
        };
        var onNaviArrowClk = function() {
            var arr = $(this);
            var next = arr.hasClass('right');
            return naviArrowClk(next);
        };
        $('#navi_arrows .arrow').on('click', onNaviArrowClk);
        if (Modernizr.touch)
            $('#navi_arrows .arrow').on('touchstart', onNaviArrowClk);
        if (data.desktop) {
            $(document).on('keydown', function(event) {
                if ((event.which == 37 || event.which == 39)) {
                    if ($(document).data('disable-key-navi'))
                        return;
                    var ae = document.activeElement;
                    var tag = ae && ae.tagName ? ae.tagName.toLowerCase() : false;
                    if (tag == 'input' || tag == 'textarea' || tag == 'select') {
                        return;
                    }
                    if ($('.rp_navi_card.active').length) {
                        $('.message-navigation').find('.arrow' + (event.which == 37 ? '.left' : '.right')).click();
                    } else {
                        naviArrowClk(event.which != 37);
                    }
                }
            });
        }
        if (!data.desktop) {
            var onfocus = function() {
                $(document.body).addClass('reducedHeight');
            };
            var onblur = function() {
                $(document.body).removeClass('reducedHeight');
            };
            $(document).on('focus', 'input[type="text"]', onfocus).on('blur', 'input[type="text"]', onblur);
            $(document).on('focus', 'textarea', onfocus).on('blur', 'textarea', onblur);
        }
        pb.publish('ready', {
            data: ''
        });
    });
    p.when([{
        channel: 'router',
        topic: '*'
    }], function(info) {
        if (!settings.navi || _.isEmpty(settings.navi)) {
            return;
        }
        $('.rp_subnav').removeClass('open');
        $('.navbar').find('a').removeClass('active');
        $('a.rp_navi_' + info.key).addClass('active');
        $('.rp_subnav').find('li').removeClass('active');
        if (info.path) {
            $('.rp_subnav').find('a[href="#info_' + info.path + '"]').parents('li').addClass('active');
        }
        var stageE = $('#stage');
        $.each(['card', 'reply', 'info'], function(i, e) {
            stageE.removeClass(e);
        });
        if (info.key) {
            stageE.addClass(info.key);
        }
        if (ek__data.debug)
            console.log(info);
        if (info.key == 'reply') {} else if (info.key == 'info') {}
        if (pageChangesCounter) {}
        pageChangesCounter++;
        var pageSyntheticUrl = '/event/' + ek__data.eventUrlPrefix + '/';
        var pageId = info.key;
        pageSyntheticUrl += pageId;
        if (info.path) {
            pageSyntheticUrl += '/' + info.path;
            pageId = info.path;
        }
        ga('send', 'pageview', pageSyntheticUrl);
        ga('send', 'event', 'RV', 'TopNavi', pageId);
        ga('send', 'event', 'RV', 'EventPageNavi', ek__data.eventUrlPrefix);
    });
}(_, postal, jQuery));
(function(_, p, $) {
    'use strict';
    var pbg = p.channel()
      , pb = p.channel('rsvpCode')
      , content = null
      , settings = null
      , desktop = false;
    pbg.subscribe("init", function(data) {
        content = data.ek__lang_content;
        settings = data.enterRsvpCode;
        desktop = data.desktop;
    });
    p.when([{
        channel: '',
        topic: 'init'
    }, {
        channel: 'rp_navigation',
        topic: 'ready'
    }], function(data) {
        if (settings) {
            pbg.publish('cardsPreviewStarted', {});
        }
    });
    p.when([{
        channel: 'rp_pages',
        topic: 'rsvpcodePageRendered'
    }, {
        channel: '',
        topic: 'init'
    }], function(data) {
        var page = $(data.pageDom);
        var pageContent = page.find('.content');
        pageContent.before('<h2>' + _.escape(ek__data.eventTitle) + '</h2>');
        var html = '<form action="' + settings.rsvpCodeSubmitUrl + '" method="post">' + '<legend>' + content.custom.rsvpCode.enterCodeLabel + '</legend>' + '<input type="text" name="password" maxlength="100" value="" style="text-align:center;"/>' + '<input type="submit" value="' + content.custom.rsvpCode.submitBtn + '" class="submitall" id="submitall">' + '</form>';
        pageContent.append(html);
        pb.publish('afterRsvpCodePageRendered', data);
    });
}(_, postal, jQuery));
(function(_, p, $) {
    'use strict';
    var pbg = p.channel()
      , pb = p.channel('openAccessCode')
      , content = null
      , settings = null
      , desktop = false;
    pbg.subscribe("init", function(data) {
        content = data.ek__lang_content;
        settings = data.enterOpenAccessCode;
        desktop = data.desktop;
    });
    p.when([{
        channel: '',
        topic: 'init'
    }, {
        channel: 'rp_navigation',
        topic: 'ready'
    }], function(data) {
        if (settings) {
            pbg.publish('cardsPreviewStarted', {});
        }
    });
    p.when([{
        channel: 'rp_pages',
        topic: 'openaccesscodePageRendered'
    }, {
        channel: '',
        topic: 'init'
    }], function(data) {
        var page = $(data.pageDom);
        var pageContent = page.find('.content');
        pageContent.before('<h2>' + _.escape(ek__data.eventTitle) + '</h2>');
        var html = '<form action="' + settings.accessCodeSubmitUrl + '" method="post">' + '<legend>' + content.custom.openAccessCode.enterCodeLabel + '</legend>' + '<input type="text" name="password" maxlength="50" value="" style="text-align:center;"/>' + '<input type="submit" value="' + content.custom.openAccessCode.submitBtn + '" class="submitall" id="submitall">' + '</form>';
        pageContent.append(html);
        pb.publish('afterOpenAccessCodePageRendered', data);
    });
}(_, postal, jQuery));
(function(_, p, $) {
    'use strict';
    var pbg = p.channel()
      , pb = p.channel('rsvp')
      , content = null
      , desktop = false;
    pbg.subscribe("init", function(data) {
        content = data.ek__lang_content;
        desktop = data.desktop;
        pb.publish('ready');
    });
    p.when([{
        channel: 'rp_pages',
        topic: 'rsvpPageRendered'
    }, {
        channel: '',
        topic: 'init'
    }], function(data) {
        var page = $(data.pageDom);
        var _mandatoryFieldMarkerLabel = content.custom.rsvp.update_info_mandatory_marker;
        var _LEGEND_REQ_FIELDS_NOTE_CLASS = 'smallHint';
        var _LEGEND_MANDATORY_INFO_TEPLATE = '<span class=\"' + _LEGEND_REQ_FIELDS_NOTE_CLASS + '\">' + content.custom.rsvp.update_info_mandatory_hint + '</span>';
        var InputsMediator = (function($, page, content) {
            var _TEMPLATE_IMPROVE_INFO_FORM = '' + '<form id="improveContactInfo">' + '<div>' + '<legend><pre>-</pre></legend>' + '<fieldset class="compact contactInfo">' + '</fieldset>' + '</div>' + '</form>';
            var ctx;
            var rsvpd = ek__data.pages.RSVP;
            var improveContactInfoRequested = false;
            var anyContactInfoFieldMandatory = false;
            var _createImproveAddressForm = function(contactInfoImprove) {
                improveContactInfoRequested = contactInfoImprove;
                ctx = $(_TEMPLATE_IMPROVE_INFO_FORM);
                if (contactInfoImprove !== true) {
                    ctx.find('fieldset').addClass('hidden');
                }
                return ctx;
            };
            var _checkBindForPersonalEditability = function() {
                if (rsvpd.nameEditable && !rsvpd.nameRequired) {
                    var forPersonalLabel = page.find('.forPersonalLabel');
                    var nameLabel = forPersonalLabel.find('.valuer');
                    var recipNameForm = '<form class="recipNameUpdate hidden"><input placeholder="' + nameLabel + content.custom.rsvp.update_info_mandatory_marker + '" type="text" name="Name" maxlength="120" value=""/></form>';
                    forPersonalLabel.before(recipNameForm);
                    page.find('input[name="Name"]').val(nameLabel.text() || '');
                    if (forPersonalLabel.find('.editableName').length === 0) {
                        nameLabel.wrap('<div class="editableName"></div>');
                        var editLink = $('<span class="link"> &nbsp;' + content.custom.rsvp.editName + '</span>').on('click', function() {
                            page.find('.recipNameUpdate').removeClass('hidden');
                            page.find('.forPersonalLabel').addClass('hidden');
                        });
                        page.find('.editableName').append(editLink);
                    }
                }
            };
            return {
                createImproveAddressForm: _createImproveAddressForm,
                updateLegend: function(anyFieldMandatory, postalUpdateOnly) {
                    var _labelHtml = content.custom.rsvp.update_info;
                    if (postalUpdateOnly) {
                        _labelHtml = content.custom.rsvp.update_info_postal_only;
                    }
                    if (anyFieldMandatory || rsvpd.emailRequired || rsvpd.nameRequired) {
                        _labelHtml += _LEGEND_MANDATORY_INFO_TEPLATE;
                    }
                    ctx.find('legend pre').html(_labelHtml);
                    anyContactInfoFieldMandatory = anyFieldMandatory;
                },
                checkBindForPersonalEditability: _checkBindForPersonalEditability,
                finalize: function() {
                    if (rsvpd.emailRequired || rsvpd.nameRequired) {
                        var templateHtml = '<fieldset class="compact"></fieldset>';
                        if (!ctx) {
                            _createImproveAddressForm();
                        }
                        if (improveContactInfoRequested === true) {
                            templateHtml += '<hr class="short nameEmailAndCIUSepa"/>';
                        }
                        ctx.find('fieldset').before(templateHtml);
                        var fieldset = ctx.find('fieldset').eq(0);
                        if (rsvpd.emailRequired) {
                            fieldset.prepend('<span class="emailUpdate"><input placeholder="' + content.custom.rsvp.email + content.custom.rsvp.update_info_mandatory_marker + '" type="text" name="email" maxlength="120" value=""/></span>');
                            rp_utils.syncEmail(page);
                        }
                        if (rsvpd.nameRequired) {
                            var nameLabel = ek__data.openAccess ? content.custom.rsvp.openAccessNameLabel : content.custom.rsvp.Name;
                            fieldset.prepend('<span class="recipNameUpdate"><input placeholder="' + nameLabel + content.custom.rsvp.update_info_mandatory_marker + '" type="text" name="Name" maxlength="120" value=""/></span>');
                            rp_utils.syncRecipName(page);
                        }
                    }
                    _checkBindForPersonalEditability();
                    return ctx;
                },
                cleanupIfEmpty: function() {
                    var improveContactInfoForm = $('#improveContactInfo', page);
                    improveContactInfoForm.find('hr').remove();
                    if (improveContactInfoForm.find('fieldset').length > 1) {
                        improveContactInfoForm.find('fieldset').eq(0).remove();
                    }
                    if (improveContactInfoForm.find('fieldset *').length == 0 || improveContactInfoForm.find('fieldset:visible').length == 0) {
                        improveContactInfoForm.remove();
                    } else {
                        if (!anyContactInfoFieldMandatory) {
                            improveContactInfoForm.find('legend pre .' + _LEGEND_REQ_FIELDS_NOTE_CLASS).remove();
                        }
                    }
                }
            };
        }($, page, content));
        var rsvpd = ek__data.pages.RSVP;
        var onlyMsgBox = false;
        if (!rsvpd.rsvpOptionsEnabled && !rsvpd.button && !rsvpd.improveContactInfo && _.keys(rsvpd.invitations).length == 1 && !rsvpd.invitations[0].dateTimeFormattedLabel) {
            page.find('.title').hide();
            onlyMsgBox = true;
        }
        var invCount = page.find('.invitations li').length;
        var $content = page.find('.content');
        $content.addClass('invCount' + invCount);
        if (invCount > 1)
            $content.addClass('invCountMulti')
        if (rsvpd.comment)
            $content.addClass('withComment');
        if ($content.find('.forPersonalLabel').hasClass('hidden'))
            $content.addClass('forPersonalLabelHidden');
        var isRsvpEditMode = false;
        var anyRsvped = false;
        var rsvpPossibleForGuest = false;
        var allowAccompanies = rsvpd.invitations.length;
        var anyAccompanyNames = rsvpd.accompanies && rsvpd.accompanies.names && _.any(rsvpd.accompanies.names);
        page.find('.invitations li').each(function(index) {
            var li = $(this)
              , dl = $(this).find('dl')
              , accepted = dl.attr('accepted') || null
              , invId = li.find('.id').text()
              , invD = rsvpd.invitations[index]
              , invStickyClass = '';
            rsvpPossibleForGuest = rsvpPossibleForGuest || invD.rsvpPossible !== false;
            var acceptOptLabel = rsvpd.rsvpOptionWillAttendLabel || ' ';
            var acceptOptDoneLabel = acceptOptLabel;
            var forWaitingList = dl.attr('forwaitinglist') === 'true';
            if (rsvpd.rsvpPossible && rsvpd.rsvpOptionsEnabled) {
                if (invD.guestLimitReached && invD.waitingListEnabled) {
                    acceptOptDoneLabel = rsvpd.rsvpOptionAwaitingDoneLabel.replace('\n', '<br/>');
                    acceptOptLabel = rsvpd.rsvpOptionAwaitingLabel;
                    var cls = 'forWaitingList';
                    invStickyClass += ' ' + cls;
                    li.addClass(cls);
                } else if (forWaitingList) {
                    acceptOptDoneLabel = rsvpd.rsvpOptionAwaitingDoneLabel.replace('\n', '<br/>');
                    if (!invD.guestLimitReached) {
                        pb.subscribe("rsvpDone", function() {
                            li.find('.radioform label.rsvpDone').html(acceptOptLabel);
                        });
                    }
                }
            } else if (forWaitingList) {
                if (rsvpd.rsvpOptionAwaitingDoneLabel) {
                    acceptOptDoneLabel = rsvpd.rsvpOptionAwaitingDoneLabel.replace('\n', '<br/>');
                }
            }
            var radioFormBody;
            if (rsvpd.rsvp2ndOptionRemoved) {
                radioFormBody = '<div class="true"><span><input type="checkbox" name="' + invId + 'radios" value="true" id="' + invId + '1" /></span>' + '<span><label for="' + invId + '1" class="rsvpEdit">' + acceptOptLabel + '</label>' + '<label for="' + invId + '1" class="rsvpDone">' + acceptOptDoneLabel + '</label></span></div>' + '<div class="false"><span><input type="checkbox" name="' + invId + 'radios" value="false" id="' + invId + '2" /></span>' + '<span><label for="' + invId + '2">' + (rsvpd.rsvpOptionWillNotAttendLabel || ' ') + '</label></span></div>' + '<div class="viewed"><span></span><span><label>' + content.custom.rsvp.statusViewed + '</label></span></div>';
            } else {
                radioFormBody = '<div class="true"><span><input type="radio" name="' + invId + 'radios" value="true" id="' + invId + '1" />' + '</span><span><label for="' + invId + '1" class="rsvpEdit">' + acceptOptLabel + '</label>' + '<label for="' + invId + '1" class="rsvpDone">' + acceptOptDoneLabel + '</label></span></div>' + '<div class="false"><span><input type="radio" name="' + invId + 'radios" value="false" id="' + invId + '2" />' + '</span><span><label for="' + invId + '2">' + (rsvpd.rsvpOptionWillNotAttendLabel || ' ') + '</label></span></div>' + '<div class="viewed"><span></span><span><label>' + content.custom.rsvp.statusViewed + '</label></span></div>';
            }
            var radioform = $('<form id="' + invId + '" class="radioform">' + radioFormBody + '</form>');
            if (accepted !== null) {
                li.addClass('accepted-' + dl.attr('accepted'));
                if (accepted === 'true') {
                    radioform.find('.true input').attr('checked', true);
                    anyRsvped = true;
                } else if (accepted === 'false') {
                    radioform.find('.false input').attr('checked', true);
                    anyRsvped = true;
                }
            } else {
                if (rsvpd.rsvpPossible && rsvpd.rsvpOptionsEnabled) {
                    page.find('.content').addClass('editmode firstRsvpMode');
                    $('#contents').addClass('rsvpeditmode');
                    isRsvpEditMode = true;
                }
            }
            if (rsvpd.rsvpPossible && rsvpd.rsvpOptionsEnabled) {
                radioform.find('input').on('change', function() {
                    li.removeClass('form-opt-sel-false form-opt-sel-true').addClass('form-opt-sel-' + this.value);
                });
                var checkedOpt = radioform.find('input').filter(':checked');
                if (checkedOpt.length) {
                    li.addClass('form-opt-sel-' + checkedOpt.val());
                }
            }
            if (rsvpd.rsvp2ndOptionRemoved) {
                radioform.find('.true input').on('change', function() {
                    if (anyRsvped) {
                        $('#' + invId + '2').prop('checked', !this.checked);
                    }
                });
            }
            if (_.isBoolean(invD.rsvpPossible)) {
                var cls = 'rsvpPossible-' + invD.rsvpPossible;
                li.addClass(cls);
                invStickyClass += ' ' + cls;
            }
            if (_.isBoolean(invD.withAccompany)) {
                li.addClass('withAccompany-' + invD.withAccompany);
            }
            if (_.isBoolean(invD.guestLimitReached)) {
                var cls = 'guestLimitReached-' + invD.guestLimitReached;
                invStickyClass += ' ' + cls;
                li.addClass(cls);
            }
            if (_.isBoolean(invD.waitingListEnabled)) {
                var cls = 'waitingListEnabled-' + invD.waitingListEnabled;
                invStickyClass += ' ' + cls;
                li.addClass(cls);
            }
            radioform.appendTo(li);
            if (index === 0 && desktop && invCount > 1)
                li.prepend('<hr class="short beforeInvitations"/>');
            var cont = li.children('dl');
            var addLabel = cont.children('.additionalLabel');
            if (addLabel.length)
                addLabel.detach().appendTo(li);
            if (rsvpd.ek845Accompanies && rsvpd.rsvpPossible && rsvpd.rsvpOptionsEnabled && rsvpd.accompanies && rsvpd.accompanies.count) {
                if (invD.allowAccompanies && invD.rsvpPossible !== false) {
                    var cbState = invD.withAccompany || accepted === null && anyAccompanyNames ? 'checked="checked"' : '';
                    var cb = $('<input type="checkbox" ' + cbState + ' class="" id="accSw' + invId + '"/>').on('click', function() {
                        var checked = $('.accompanySwitch input[type="checkbox"]').filter(':checked').length;
                        page.find('.content').toggleClass('accompaniesHidden', checked < 1).toggleClass('withAccompaniesChecked', checked > 0);
                    });
                    var wholeSwitch = $('<div class="accompanySwitch"></div>');
                    wholeSwitch.append(cb).append('<label for="accSw' + invId + '">' + content.custom.rsvp.accompanySwitch + '</label>');
                    li.append(wholeSwitch);
                    li.append('<div class="accompanyRsvpStatus"><label class="withAccompany">' + content.custom.rsvp.withAccompanyLabel + '</label><label class="withoutAccompany">' + content.custom.rsvp.withoutAccompanyLabel + '</label></div>');
                    radioform.find('input').on('change', function() {
                        if (this.value == 'false') {
                            li.find('.accompanySwitch input[type="checkbox"]').filter(':checked').click();
                        }
                    });
                } else {
                    allowAccompanies--;
                }
            }
            li.data('stickyClass', invStickyClass);
        });
        rsvpPossibleForGuest = rsvpPossibleForGuest && rsvpd.rsvpPossible;
        $content.addClass('rsvpPossibleForGuest-' + rsvpPossibleForGuest);
        if (rsvpd.ek845Accompanies && rsvpd.rsvpPossible && rsvpd.rsvpOptionsEnabled && rsvpd.accompanies && rsvpd.accompanies.count) {
            var checked = $('.accompanySwitch input[type="checkbox"]').filter(':checked').length;
            page.find('.content').toggleClass('accompaniesHidden', checked < 1).toggleClass('withAccompaniesChecked', checked > 0);
        }
        var peopleCountCurrentValue = 0;
        if (invCount) {
            if (rsvpd.rsvpPossible && rsvpd.rsvpOptionsEnabled) {
                var pcV = page.find('.peopleCount');
                if (pcV.length) {
                    var currentValue = pcV.data('current');
                    var maxValue = pcV.data('max');
                    var formHtml = '<form id="peopleCountEdit">';
                    formHtml += content.custom.rsvp.peopleCountLabel;
                    formHtml += ' <select name="count">';
                    for (var i = 1; i <= maxValue; i++) {
                        formHtml += '<option ';
                        if (i == currentValue) {
                            formHtml += 'selected="selected" ';
                            peopleCountCurrentValue = i;
                        }
                        formHtml += ' value="' + i + '">' + i + '</option>';
                    }
                    formHtml += '</select></form>';
                    pcV.after(formHtml);
                }
            }
        }
        var button = $('<input type="button" value="' + content.custom.rsvp.reply_edit + '" id="changebutton" />').on('click', function() {
            page.find('.invitations li').each(function() {
                var li = $(this);
                li.attr('class', li.data('stickyClass') || '');
                var checkedOpt = li.find('.radioform input').filter(':checked');
                if (checkedOpt.length) {
                    li.addClass('form-opt-sel-' + checkedOpt.val());
                }
            });
            $(this).parents('.content').addClass('editmode');
            $('#contents').addClass('rsvpeditmode');
            isRsvpEditMode = true;
            $('<style></style>').appendTo($(document.body)).remove();
        });
        var ek_accompaniedForm;
        if (rsvpd.accompanies && rsvpd.accompanies.count && allowAccompanies > 0) {
            ek_accompaniedForm = '<form id="accompaniesUpdate">' + '<div class="accompanies">' + '<legend><pre>' + content.custom.rsvp.accompanied_legend + _LEGEND_MANDATORY_INFO_TEPLATE + '</pre></legend>';
            var i;
            var nameval;
            for (i = 0; i < rsvpd.accompanies.count; ++i) {
                nameval = rsvpd.accompanies.names && rsvpd.accompanies.names[i] ? rsvpd.accompanies.names[i] : '';
                var plhSuffix = (rsvpd.ek845Accompanies && i == 0) ? _mandatoryFieldMarkerLabel : '';
                ek_accompaniedForm += '<input placeholder="' + content.global.general['name'] + plhSuffix + '" type="text" name="accompanies0" maxlength="120" value="' + nameval + '"></td>';
            }
            ek_accompaniedForm += '</div></form>';
        }
        page.find('.content').addClass('improveContactInfo-' + !_.isEmpty(rsvpd.improveContactInfo));
        var ek_improveAddressForm;
        if (typeof rsvpd.improveContactInfo !== 'undefined' && _.isEmpty(rsvpd.improveContactInfo) === false) {
            var _postalUpdateOnly = true;
            var _anyFieldMandatory = false;
            ek_improveAddressForm = InputsMediator.createImproveAddressForm(true);
            var fieldset = ek_improveAddressForm.find('fieldset');
            var updates = rsvpd.improveContactInfo.itemsOrder;
            var dynaEntryIdx = 0;
            var address = ['countryCode', 'streetNo', 'zip', 'city', 'state'];
            var maxLengths = {
                'companyName': '250',
                'companyDept': '250',
                'jobTitle': '250',
                'streetNo': '250',
                'zip': '20'
            }
              , DEFAULT_TF_LEN = 50;
            var buildUCIDynaEntry = function(entry, values, id, cls) {
                var placeholder = entry.label;
                if (entry.mandatory) {
                    placeholder += _mandatoryFieldMarkerLabel;
                    _anyFieldMandatory = true;
                }
                var html, value, fldName = "dynaEntries";
                if (entry.id) {
                    fldName += '.' + entry.id;
                }
                if (entry.id && $.isPlainObject(values)) {
                    value = values[entry.id];
                } else if (_.isString(values)) {
                    value = values;
                }
                if (entry.type === 'D') {
                    var selected = false;
                    html = '<select';
                    if (id)
                        html += ' id="' + id + '"';
                    if (cls)
                        html += ' class="' + cls + '"';
                    html += (entry.mandatory ? ' required' : '') + ' placeholder="' + placeholder + '" name="' + fldName + '">';
                    html += '<option ' + (entry.mandatory ? 'disabled' : '') + ' value=""';
                    if (!value) {
                        html += ' selected';
                        selected = true;
                    }
                    html += '>' + placeholder + '</option>';
                    var subEntries = '';
                    $.each(entry.options, function(oIdx, option) {
                        var optVal = $.isArray(option) ? optVal = option[0] : option;
                        var optSelected = false;
                        html += '<option ';
                        if (value == optVal) {
                            html += 'selected ';
                            selected = optSelected = true;
                        }
                        if ($.isArray(option)) {
                            for (var i = 1; i < option.length; i++) {
                                var clss = 'uciSubEntry ' + (optSelected ? '' : 'hidden ') + id + ' ' + id + '-' + oIdx;
                                subEntries += buildUCIDynaEntry(option[i], values, null, clss);
                            }
                        }
                        html += 'value="' + optVal + '">' + optVal + '</option>';
                    });
                    if (value && !selected) {
                        html += '<option selected value="' + value + '">' + value + '</option>';
                    }
                    html += '</select>';
                    if (subEntries) {
                        html += subEntries;
                    }
                    ;
                } else {
                    html = '<input';
                    if (id)
                        html += ' id="' + id + '"';
                    if (cls)
                        html += ' class="' + cls + '"';
                    html += ' placeholder="' + placeholder + '" name="' + fldName + '" ' + 'maxlength="50" type="text" value="' + (value || '') + '" />';
                }
                return html;
            }
            var cc = (rsvpd.improveContactInfo.currentValues && rsvpd.improveContactInfo.currentValues.address) ? rsvpd.improveContactInfo.currentValues.address.countryCode : null;
            _.each(updates, function(key) {
                if (typeof rsvpd.improveContactInfo[key] !== 'undefined') {
                    if (key === 'address') {
                        fieldset.append('<div class="address"></div>');
                        _.each(address, function(key) {
                            if (key === 'countryCode') {
                                var select = '<select name="countryCode" class="countryCode">';
                                select += '<option value="-">-</option>';
                                _.each(content.global.countries, function(val, key) {
                                    if (cc !== null && typeof cc !== 'undefined' && cc === key) {
                                        select += '<option value="' + key + '" selected="selected">' + val + '</option>';
                                    } else {
                                        select += '<option value="' + key + '">' + val + '</option>';
                                    }
                                });
                                select += '</select>';
                                $(select).on('change', function() {
                                    var selectedValue = $(this).find('option:selected').val()
                                    if (ek__data.debug)
                                        console.log('selectedValue: ' + selectedValue)
                                    if (selectedValue === 'US' || selectedValue === 'CA' || selectedValue === 'GB') {
                                        if (!$(this).parents('fieldset').hasClass('anglo')) {
                                            var cityclone = $(this).siblings('input[name|="city"]').clone();
                                            $(this).siblings('input[name|="city"]').remove();
                                            $(this).siblings('input[name|="zip"]').before(cityclone);
                                            var stateclone = $(this).siblings('input[name|="state"]').clone();
                                            $(this).siblings('input[name|="state"]').remove();
                                            $(this).siblings('input[name|="zip"]').before(stateclone);
                                            $(this).parents('fieldset').addClass('anglo');
                                        }
                                    } else {
                                        if ($(this).parents('fieldset').hasClass('anglo')) {
                                            var cityclone = $(this).siblings('input[name|="city"]').clone();
                                            $(this).siblings('input[name|="city"]').remove();
                                            $(this).siblings('input[name|="zip"]').after(cityclone);
                                            $(this).parents('fieldset').removeClass('anglo');
                                        }
                                    }
                                    if (selectedValue === 'US' || selectedValue === 'CA') {
                                        $(this).siblings('input[name|="state"]').show();
                                    } else {
                                        $(this).siblings('input[name|="state"]').hide();
                                    }
                                }).appendTo(fieldset.find('.address'));
                            } else {
                                var placeholder = content.custom.rsvp[key] || content.global.general[key];
                                if (rsvpd.improveContactInfo.address === true) {
                                    placeholder += _mandatoryFieldMarkerLabel;
                                    _anyFieldMandatory = true;
                                }
                                var maxLen = maxLengths[key] || DEFAULT_TF_LEN;
                                var value = rsvpd.improveContactInfo.currentValues ? rsvpd.improveContactInfo.currentValues.address[key] || '' : '';
                                var $input = $('<input placeholder="' + placeholder + '" name="' + key + '" maxlength="' + maxLen + '" type="text" value="' + value + '" />');
                                if (key === 'state' && (cc !== 'CA' && cc !== 'US')) {
                                    $input.css('display', 'none');
                                }
                                fieldset.find('.address').append($input);
                            }
                        });
                    } else if (key === 'GDPRAcceptance') {
                        var gdpr = rsvpd.improveContactInfo[key];
                        if (gdpr.text) {
                            var gdprAcc = $('<div id="GDPRAcceptance"></div>');
                            gdprAcc.append('<input type="hidden" name="_dummy" value="1"/>');
                            gdprAcc.append('<input type="checkbox" name="GDPRAccepted" value="true" id="GDPRAccCB"/>');
                            if (gdpr.GDPRAccepted === true) {
                                gdprAcc.find('#GDPRAccCB').prop('checked', true);
                            }
                            var htext = gdpr.text.replace('\n', '<br/>');
                            if (gdpr.url) {
                                htext = '<a href="' + gdpr.url + '" target="_blank">' + htext + '</a>';
                            }
                            gdprAcc.append('<label for="GDPRAccCB">' + htext + _mandatoryFieldMarkerLabel + '</label>');
                            fieldset.append(gdprAcc);
                            _postalUpdateOnly = false;
                            _anyFieldMandatory = true;
                        }
                    } else if (key === 'dynaEntries') {
                        var eIdx = dynaEntryIdx++;
                        var entry = rsvpd.improveContactInfo[key][eIdx];
                        if (entry) {
                            _postalUpdateOnly = false;
                            var values = '';
                            if (rsvpd.improveContactInfo.currentValues) {
                                var currentValues = rsvpd.improveContactInfo.currentValues[key];
                                if ($.isPlainObject(currentValues)) {
                                    values = currentValues;
                                } else if ($.isArray(currentValues)) {
                                    values = currentValues[eIdx];
                                }
                            }
                            fieldset.append(buildUCIDynaEntry(entry, values, 'uciDynaEntry-' + eIdx, 'uciDynaEntry'));
                        }
                    } else {
                        _postalUpdateOnly = false;
                        var placeholder = rsvpd.improveContactInfo[key + 'Label'] || content.custom.rsvp[key] || content.global.general[key];
                        if (rsvpd.improveContactInfo[key] === true) {
                            placeholder += _mandatoryFieldMarkerLabel;
                            _anyFieldMandatory = true;
                        }
                        var maxLen = maxLengths[key] || DEFAULT_TF_LEN;
                        var value = rsvpd.improveContactInfo.currentValues ? rsvpd.improveContactInfo.currentValues[key] || '' : '';
                        var input = '<input placeholder="' + placeholder + '" name="' + key + '" maxlength="' + maxLen + '" type="text" value="' + value + '" />';
                        fieldset.append(input);
                    }
                }
            });
            if (cc === 'US' || cc === 'CA' || cc === 'GB') {
                var cityclone = fieldset.find('input[name|="city"]').clone();
                fieldset.find('input[name|="city"]').remove();
                fieldset.find('input[name|="zip"]').before(cityclone);
                var stateclone = fieldset.find('input[name|="state"]').clone();
                fieldset.find('input[name|="state"]').remove();
                fieldset.find('input[name|="zip"]').before(stateclone);
                fieldset.addClass('anglo');
            }
            InputsMediator.updateLegend(_anyFieldMandatory, _postalUpdateOnly);
            fieldset.find('select.uciDynaEntry').on('change', function() {
                var sel = $(this);
                var selIdx = sel.find(':selected').index() - 1;
                sel.parent().find('.' + sel.prop('id')).addClass('hidden').filter('.' + sel.prop('id') + '-' + selIdx).removeClass('hidden');
            });
        } else {
            if (rsvpd.emailRequired || rsvpd.nameRequired) {
                ek_improveAddressForm = InputsMediator.createImproveAddressForm();
                InputsMediator.updateLegend(true);
            }
        }
        var rsvpMsgHdr = content.custom.pages_global.add_message;
        if (rsvpd.rsvpOptionsEnabled === false && !rsvpd.button && rsvpd.rsvpMsgSenderName) {
            rsvpMsgHdr = content.custom.pages_global.add_message_from.replace('$name', rsvpd.rsvpMsgSenderName);
        }
        var ek_rsvpMessage = '<form id="rsvp_message">' + '<legend>' + rsvpMsgHdr + '</legend>' + '<textarea></textarea>' + '<input type="button" value="' + content.custom.rsvp.send + '" class="submitall" id="submitmessage" />' + '</form>';
        var sentMessages = '<h4>' + content.custom.pages_global.sent_messages + '</h4>';
        _.each(ek__data.sentMessages, function(message) {
            sentMessages += '<div><small>' + message.dateFormattedLabel + '</small><pre>' + message.text + '</pre></div>';
        });
        var pageContent = page.find('.content');
        pageContent.append(ek_accompaniedForm);
        if (rsvpd.rsvpPossible || rsvpd.emailRequired || rsvpd.nameRequired) {
            pageContent.append(InputsMediator.finalize());
        }
        page.find('.invitations').after('<hr class="afterInvitations"/>');
        if (invCount == 1) {
            var accompaniesUpdate = page.find('#accompaniesUpdate');
            if (accompaniesUpdate.length) {
                accompaniesUpdate.append('<hr class="afterAccompaniesUpdate"/>');
            }
        }
        page.find('.invitations').after(button);
        if (rsvpd.accompanies || rsvpd.improveContactInfo) {
            pageContent.append('<input type="button" id="savebutton" value="' + content.global.action.save + '" class="submitall">');
            if (desktop) {
                pageContent.append('<hr class="afterSaveBtn"/>');
            }
        }
        pageContent.append(ek_rsvpMessage);
        if (desktop)
            pageContent.append('<hr class="short onlyeditmode"/>');
        pageContent.append('<input type="submit" value="' + content.custom.rsvp.sendAll + '" class="submitall" id="submitall">');
        if (rsvpPossibleForGuest && rsvpd.rsvpReminder && !ek__data.openAccess && !rsvpd.emailRequired) {
            if (desktop)
                pageContent.append('<hr class="short onlyeditmode rsvpReminderStuff"/>');
            var formHtml = '<form id="rsvpReminder" class="rsvpReminderStuff">';
            formHtml += content.custom.rsvp.remindMeToReply;
            formHtml += ' <select name="delayHours">';
            formHtml += '<option value="">' + content.custom.rsvp.remindMeIn + '</option>';
            _.each([3, 24, 48, 168, 720], function(dh) {
                if (rsvpd.rsvpReminder.maxDelay && dh > rsvpd.rsvpReminder.maxDelay)
                    return;
                formHtml += '<option ';
                var delayLabel = content.custom.rsvp['remindMeIn_' + dh + '_hours'];
                formHtml += ' value="' + dh + '">' + delayLabel + '</option>';
            });
            formHtml += '</select></form>';
            pageContent.append(formHtml);
            pageContent.find('form#rsvpReminder select').on('change', function(e) {
                var sel = $(this);
                if (!sel.val())
                    return;
                var form = sel.closest('form');
                var params = {};
                _.extend(params, form.form2json());
                rp_utils.jsonRPC('requestRsvpReminder', params, page).done(function(data) {
                    if (data.result.inlineMessage) {
                        form.html(data.result.inlineMessage);
                    } else {
                        form.remove();
                    }
                    if (ga)
                        ga('send', 'event', 'RV', 'replyReminder', 'request');
                });
                return false;
            });
            pb.subscribe("rsvpDone", function() {
                pageContent.find('.rsvpReminderStuff').remove();
            });
        }
        if (rsvpd.allowInvFwdAsOpenShare && ek__data.openAccessUrl) {
            var bottomBar = $('#bottomBar').show();
            var formHtml = '<form id="invitationForward">';
            formHtml += '<input type="button" value="' + content.custom.rsvp.shareBtn + '" class="" />';
            formHtml += '</form>';
            bottomBar.append(formHtml);
            bottomBar.find('form#invitationForward input').on('click', function(e) {
                var waUrl = ek__data.openAccessUrl;
                waUrl += (waUrl.indexOf("?") > 0 ? "&" : "?") + "sharedvia=whatsapp";
                if (mobileOS == 'iOS' || mobileOS == 'Android') {
                    waUrl = "whatsapp://send?text=" + encodeURIComponent(waUrl);
                } else {
                    waUrl = "https://" + ($.ua.browser.name == 'firefox' || $.ua.browser.name == 'safari' ? "web" : "api") + ".whatsapp.com/send?text=" + encodeURIComponent(waUrl);
                }
                var popHtml = '<h3 class="title">' + content.custom.share_popup.title + '</h3>' + '<div class="shareIcons">' + '<a href="#" class="viaLink" title="' + content.custom.share_popup.viaLink + '"><img src="/img/icon/link_100.png" style="width:30px;padding:10px;"/></a>';
                if (/*!ek__data.openAccess && */
                ek__data.accessToken) {
                    popHtml += '<a href="#" class="viaEmail" title="' + content.custom.share_popup.viaEmail + '"><img src="/img/icon/email_100.png"/></a>';
                }
                popHtml += '<a href="' + waUrl + '" target="_blank" class="viaWhatsApp" title="' + content.custom.share_popup.viaWhatsApp + '"><img src="/img/icon/products/whatsapp_100.png"/></a>' + '</div><div class="buttons">' + '<input type="button" value="' + content.global.action.cancel + '" class="" onclick="rv_utils.closePopup(this);"/>' + '</div>';
                var pop = rv_utils.buildPopup(0, 'share modal', popHtml).on('close', function() {
                    $(this).remove();
                });
                pop.find('a.viaLink').on('click', function() {
                    pop.find('.popupContents').html('<h3 class="title">' + content.custom.share_popup.title_viaLink + '</h3>' + '<div class="link"><a href="' + ek__data.openAccessUrl + '" target="_blank">' + _.escape(ek__data.openAccessUrl) + '</a></div>' + '<div class="buttons"><input type="button" value="' + content.global.action.ok + '" onclick="rv_utils.closePopup(this);"/></div>');
                    ga('send', 'event', 'RV', 'openShare', 'link');
                    return false;
                });
                pop.find('a.viaEmail').on('click', function() {
                    pop.find('.popupContents').html('<div>' + content.custom.share_popup.sendToEmail + '</div>' + '<form><div class="mt"><input type="text" name="email" placeholder="' + content.global.general.email + '"/></div>' + '<div class="recaptchaNote">' + content.custom.share_popup.recaptchaNote + '</div>' + '<div class="buttons"><input type="button" class="sendToEmail" value="' + content.global.action.send + '"/></div></form>');
                    pop.find('input.sendToEmail').on('click', function() {
                        var btn = $(this);
                        btn.prop('disabled', true);
                        rv_utils.genRecaptchaToken().then(function(recaptchaToken) {
                            var form = btn.closest('form');
                            var params = {
                                'reCap': recaptchaToken
                            };
                            _.extend(params, form.form2json());
                            rp_utils.jsonRPC('sendOpenShareEmail', params, page).done(function(data) {
                                if (!data.error) {
                                    rv_utils.closePopup(pop);
                                    ga('send', 'event', 'RV', 'openShare', 'email');
                                } else {
                                    btn.prop('disabled', false);
                                }
                            });
                        });
                    });
                    return false;
                });
                pop.find('a.viaWhatsApp').on('click', function() {
                    ga('send', 'event', 'RV', 'openShare', 'WhatsApp');
                    return true;
                });
                $('body').append(pop);
                rv_utils.openPopup(pop);
                return false;
            });
        }
        if (ek__data.sentMessages && ek__data.sentMessages.length > 0) {
            pageContent.append(desktop ? '<hr class="short"/>' : '').append('<div class="messages">' + sentMessages + '</div>');
        }
        pageContent.find('input[placeholder]').placeholder();
        pageContent.find('textarea[placeholder]').placeholder();
        pageContent.append('<div class="bottomSpacer">.</div>');
        $('.submitall').click(function(e) {
            ek_jsonrpc_counter++;
            var btn = $(this)
              , btnId = btn.attr('id');
            var params = {
                "accessToken": ek__data.accessToken,
                "submitButton": btnId
            };
            if (rsvpd.rsvpOptionsEnabled && isRsvpEditMode) {
                params.invitations = {};
                params.forWaitingList = {};
                params.withAccompany = {};
                $('.invitations li').each(function() {
                    var id = $(this).find('form').attr('id');
                    var val = $('input[name=' + id + 'radios]:checked', '#' + id).val();
                    if (val === 'true' || val === 'false') {
                        params.invitations[id] = val === 'true' ? true : false;
                        params.forWaitingList[id] = $(this).hasClass('forWaitingList');
                    }
                    if (rsvpd.ek845Accompanies) {
                        var waCB = $('#accSw' + id);
                        if (waCB.length)
                            params.withAccompany[id] = waCB.prop('checked');
                    }
                });
                var peopleCountF = $('form#peopleCountEdit', page);
                if (peopleCountF.length) {
                    var newPeopleCountValue = parseInt(peopleCountF.find('select').val());
                    if (peopleCountCurrentValue != newPeopleCountValue) {
                        params.peopleCount = newPeopleCountValue;
                        peopleCountCurrentValue = newPeopleCountValue;
                        pageContent.find('.peopleCount').data('current', newPeopleCountValue).find('.valuer').html(newPeopleCountValue);
                    }
                }
            }
            var recipNameF = $('.recipNameUpdate', page);
            if (recipNameF.length) {
                params.name = recipNameF.find('input').val();
            }
            var emailF = $('.emailUpdate', page);
            if (emailF.length) {
                params.email = emailF.find('input').val();
            }
            if (rsvpd.rsvpPossible) {
                var update = {}
                  , addressUpd = {}
                  , dynaEntries = {}
                  , dynaEntriesA = [];
                $('#improveContactInfo *').each(function() {
                    var input = $(this)
                      , inpName = input.attr('name');
                    if (inpName && inpName.indexOf('dynaEntries.') === 0) {
                        dynaEntries[inpName.split('.')[1]] = input.val() || '';
                    } else if (inpName === 'dynaEntries') {
                        dynaEntriesA.push(input.val() || '');
                    } else {
                        if (input.val() && input.val() !== '' && inpName) {
                            if (input.parent().hasClass('address')) {
                                addressUpd[inpName] = input.val();
                            } else if (input.attr('type') == 'checkbox') {
                                if (!!input.prop('checked'))
                                    update[inpName] = input.val();
                            } else {
                                update[inpName] = input.val();
                            }
                        }
                    }
                });
                if (!_.isEmpty(addressUpd)) {
                    update.address = addressUpd;
                }
                if (!_.isEmpty(dynaEntries) || dynaEntriesA.length) {
                    if (_.isEmpty(update))
                        update = {};
                    update.dynaEntries = dynaEntries;
                    if (_.isEmpty(update.dynaEntries))
                        update.dynaEntries = dynaEntriesA;
                }
                if (!_.isEmpty(update)) {
                    params.improveContactInfo = update;
                }
                var accompanies = [];
                $('#accompaniesUpdate input').each(function() {
                    if ($(this).attr('name')) {
                        accompanies.push($(this).val());
                    }
                });
                if (!_.isEmpty(accompanies)) {
                    params.accompanies = accompanies;
                }
            }
            if ($('form#rsvp_message').find('textarea').val() !== '') {
                params.message = $('form#rsvp_message').find('textarea').val();
            }
            if (ek__data.debug) {
                console.log('params:');
                console.log(params);
            }
            var rpcMethod = "storeRsvp";
            if (!rsvpPossibleForGuest) {
                rpcMethod = "sendMessage";
                params.text = params.message;
                params.message = undefined;
            }
            var jsonData = {
                "jsonrpc": "2.0",
                "method": rpcMethod,
                "params": params,
                "id": ek_jsonrpc_counter
            };
            if (!ek__data.endpointUrl) {
                alert('no Endpoint URL!');
            }
            $.ajax({
                url: ek__data.host + ek__data.endpointUrl,
                type: "POST",
                data: JSON.stringify(jsonData),
                dataType: "json",
                contentType: "application/json",
                success: function(data) {
                    if (data.result) {
                        rp_utils.updateMissingToken(data.result.accessToken);
                        var msgOnly = rpcMethod == 'sendMessage';
                        if (!(msgOnly || rsvpd.rsvpOptionsEnabled === false)) {
                            page.find('.invitations li').each(function() {
                                var li = $(this);
                                var optSel = li.find('.radioform input:checked').val();
                                li.addClass('accepted-' + (optSel || 'null'));
                                if (rsvpd.ek845Accompanies && optSel) {
                                    var waCB = li.find('.accompanySwitch input[type="checkbox"]');
                                    if (waCB.length)
                                        li.addClass('withAccompany-' + waCB.prop('checked'));
                                }
                            });
                        }
                        anyRsvped = page.find('.invitations li.accepted-true').length > 0 || page.find('.invitations li.accepted-false').length > 0;
                        page.find('.content').removeClass('editmode firstRsvpMode');
                        isRsvpEditMode = false;
                        $('#contents').removeClass('rsvpeditmode');
                        page.find('form#rsvp_message').find('textarea').val('');
                        page.find('form#rsvp_message').find('textarea').focus();
                        page.find('form#rsvp_message').find('textarea').blur();
                        var retMsg = [];
                        if (msgOnly || btnId == 'submitmessage') {
                            retMsg.push(content.custom.send_message.sending_done);
                        } else if (btnId == 'savebutton') {
                            retMsg.push(content.custom.contact_info_update.saved);
                        } else if (btnId == 'submitall') {
                            retMsg.push(content.custom.rsvp.info_sent);
                        }
                        if (data.result.message)
                            retMsg.push(data.result.message);
                        rp_utils.showMsg(page, retMsg.join('<br/>'), 'result', 3000);
                        if (params.email) {
                            emailF.remove();
                            rsvpd.emailRequired = false;
                        }
                        if (params.name) {
                            recipNameF.remove();
                            $('.forPersonalLabel').removeClass('hidden').find('.valuer').text(params.name);
                            page.find('.content').removeClass('forPersonalLabelHidden');
                            rsvpd.nameRequired = false;
                            if (rsvpd.rsvpOptionsEnabled === false && !rsvpd.button) {
                                $('#rsvp_message legend').text(content.custom.pages_global.add_message_from.replace('$name', params.name));
                                rsvpd.rsvpMsgSenderName = params.name;
                            }
                            InputsMediator.checkBindForPersonalEditability();
                        }
                        InputsMediator.cleanupIfEmpty();
                        var sentMsg = data.result.sentMessage;
                        if (sentMsg) {
                            if (ek__data.debug)
                                console.log(data)
                            if (typeof ek__data.sentMessages === 'undefined') {
                                ek__data.sentMessages = [];
                            }
                            ek__data.sentMessages.unshift(sentMsg);
                            if (ek__data.debug)
                                console.log(ek__data.sentMessages)
                            var sentMessagesDom = '<h4>' + content.custom.pages_global.sent_messages + '</h4>';
                            _.each(ek__data.sentMessages, function(message) {
                                sentMessagesDom += '<div><small>' + message.dateFormattedLabel + '</small><pre>' + message.text + '</pre></div>';
                            });
                            if (!page.find('.messages').length) {
                                page.find('.content').append(desktop ? '<hr class="short"/>' : '').append('<div class="messages">' + sentMessagesDom + '</div>');
                            } else {
                                page.find('.messages').html('');
                                page.find('.messages').append(sentMessagesDom);
                            }
                        }
                        rp_utils.scrollToPage(page);
                        pb.publish("rsvpDone");
                    }
                    if (data.error) {
                        if (ek__data.debug)
                            console.log('error!!');
                        if (data.error.message) {
                            rp_utils.showMsg(page, data.error.message, 'error');
                            rp_utils.highlightErrorCode(page, data.error.code);
                        } else {
                            rp_utils.showMsg(page, 'Unknown JSON-RPC error', 'error');
                        }
                        if (data.error.invitations) {
                            _.each(data.error.invitations, function(inv) {
                                var li = page.find('.invitations li form#' + inv.id).closest('li');
                                if (li.length) {
                                    li.find('dd.availablePlaces').html(inv.availablePlaces);
                                }
                            });
                        }
                    }
                },
                error: function() {
                    rp_utils.showMsg(page, content.custom.pages_global.sending_error, 'error');
                }
            });
            e.preventDefault();
        });
    });
    p.when([{
        channel: 'rp_pages',
        topic: 'infoPageRendered'
    }, {
        channel: '',
        topic: 'init'
    }], function(data) {
        var page = $(data.pageDom)
          , pd = data.data;
        var invs = page.find('.invitations');
        if (invs.length) {
            var invCount = invs.children('li').length;
            var firstVisibleEl = !invs.prevAll().length;
            if (desktop && invCount > 1 && !firstVisibleEl)
                invs.before('<hr class="short"/>');
            if (desktop && firstVisibleEl)
                invs.find('dd.title').first().css('margin-top', 0);
        }
    });
}(_, postal, jQuery));
(function(p, $) {
    'use strict';
    var pbg = p.channel()
      , pb = p.channel('photoGallery')
      , content = null;
    pbg.subscribe("init", function(data) {
        content = data.ek__lang_content;
    });
    p.when([{
        channel: 'rp_pages',
        topic: 'photosPageRendered'
    }], function(data) {
        var page = $(data.pageDom);
        function showGallery(album, index, autoplay) {
            index = parseInt(index);
            var id = $(album).find('dd.id').text();
            if (!id) {
                return false;
            }
            if (!$('.overlay').length) {
                $('#stage').append($('<div class="overlay" />'));
            } else {
                $('.overlay').css({
                    'display': 'block'
                });
            }
            $(document).data('disable-key-navi', true);
            var updateGalleryState = function(swiper) {
                gallery.removeClass('showsFirst showsLast');
                if (swiper.activeIndex == 0)
                    gallery.addClass('showsFirst');
                else if (swiper.activeIndex == swiper.slides.length - 1)
                    gallery.addClass('showsLast');
            };
            var closeGallery = function() {
                window.gallerySwiper[id].stopAutoplay();
                $('#gallery_' + id).css({
                    'display': 'none'
                });
                $('.overlay').css({
                    'display': 'none'
                });
                $('.closebutton').remove();
                $(document).data('disable-key-navi', false);
            };
            $('<div class="closebutton">X</div>"').on('click', closeGallery).appendTo($('#stage'));
            if ($('#gallery_' + id).length) {
                gallery = $('#gallery_' + id).css({
                    'display': 'block'
                });
                var swiper = window.gallerySwiper[id];
                swiper.stopAutoplay();
                swiper.position = index;
                setupSwiper(swiper);
                if (autoplay)
                    swiper.startAutoplay();
                return false;
            }
            var gallery = $('<div class="gallery" id="gallery_' + id + '"><div class="swiper-wrapper"></div></div>"');
            if (ek__data.desktop) {
                $(document).on('keydown', function(event) {
                    if (event.which == 27) {
                        closeGallery();
                    }
                });
                $('<div class="photoClickPane left"><div class="arrow"> </div></div>').on('click', function() {
                    window.gallerySwiper[id].slidePrev();
                }).appendTo(gallery);
                $('<div class="photoClickPane right"><div class="arrow"> </div></div>').on('click', function() {
                    window.gallerySwiper[id].slideNext();
                }).appendTo(gallery);
            }
            var imagesBig = $(album).find('.photos img.bigone');
            var imageList = [];
            imagesBig.each(function(i) {
                imageList.push({
                    "image": $(this).attr('datasrc'),
                    "index": 0
                });
            });
            gallery.appendTo($('#stage'));
            window.gallerySwiper = window.gallerySwiper || {};
            window.gallerySwiper[id] = new Swiper('#gallery_' + id,{
                direction: 'horizontal',
                preloadImages: false,
                lazyLoading: true,
                lazyLoadingInPrevNext: true,
                autoplay: 2500,
                autoplayDisableOnInteraction: true,
                autoplayStopOnLast: false,
                speed: 300,
                grabCursor: !ek__data.desktop,
                initialSlide: 0,
                loop: true,
                keyboardControl: !!ek__data.desktop,
                mousewheelControl: !!ek__data.desktop,
                calculateHeight: !!ek__data.desktop
            });
            adjustOldSwiperToNewApi(window.gallerySwiper[id]);
            window.gallerySwiper[id].on('SlideChangeStart', function(swiper) {
                updateGalleryState(swiper);
            });
            function createSlide(swiper, html) {
                return '<div class="' + swiper.params.slideClass + '">' + html + '</div>';
            }
            function setupSwiper(swiper) {
                swiper.removeAllSlides();
                var iL = swiper.imageList
                  , len = iL.length;
                for (var i = 0; i < len; i++) {
                    var ind = (index + i - 1 + len) % len;
                    var slide;
                    console.log('setupSwiper() i: ' + i + ', ind: ' + ind + ', image: ' + iL[ind].image);
                    if (i == 1) {
                        slide = createSlide(swiper, '<div><img src="' + iL[ind].image + '"></div>');
                    } else {
                        var srcAttr = ie8 ? 'src' : 'data-src';
                        slide = createSlide(swiper, '<div><img class="swiper-lazy" ' + srcAttr + '="' + iL[ind].image + '"></div>');
                    }
                    swiper.appendSlide(slide);
                }
                swiper.slideTo(2, 0, null);
            }
            window.gallerySwiper[id].imageList = imageList;
            window.gallerySwiper[id].position = index;
            setupSwiper(window.gallerySwiper[id], index, imageList);
            window.gallerySwiper[id].stopAutoplay();
            if (autoplay)
                window.gallerySwiper[id].startAutoplay();
            $('#gallery_' + id + ' .swiper-slide img').panzoom({
                minScale: 1,
                maxScale: 2,
                disablePan: true,
                duration: 500
            });
            $('#gallery_' + id + ' .swiper-slide').each(function() {
                if (ek__data.debug)
                    console.log($(this).attr('id'));
                if (!myScroll[$(this).attr('id')]) {
                    myScroll[$(this).attr('id')] = new IScroll($(this)[0],{
                        scrollX: false,
                        scrollY: true,
                        zoom: false,
                        momentum: true
                    });
                }
            });
            $('.swiper-slide').hammer().on("doubletap", 'img', function() {
                var curZoom = $(this).panzoom("getTransform") === 'none' ? 1 : $(this).panzoom("getTransform").split('(')[1].split(',')[0];
                if (curZoom < 2) {
                    $(this).panzoom("zoom", 2, {
                        silent: false
                    });
                } else {
                    $(this).panzoom("zoom", 1, {
                        silent: false
                    });
                }
            });
        }
        page.find('dd.photo img').on('click', function() {
            var galleryname = $(this).parents('li').find('.title').text();
            if (page.hasClass('details')) {
                var index = $(this).parent().parent().parent().attr('class');
                showGallery($(this).parents('li'), index);
            } else {
                $(this).parents('ul').find('.active').removeClass('active');
                $(this).parents('li').addClass('active');
                page.addClass('details');
                if (page.find('.button').length === 0) {
                    page.find('.content').prepend('<div class="buttonbar"><div class="button back">' + content.global.navigation.back + '</div></div>');
                    page.find('.button').on('click', function() {
                        page.removeClass('details');
                    });
                    if (ek__data.desktop) {
                        $('<div class="button play">' + content.custom.photos.slideshow + '</div>').click(function() {
                            showGallery(page.find('.albums li.active'), 0, true);
                        }).appendTo(page.find('.buttonbar'));
                    }
                }
                if (page.find('h3').length) {
                    page.find('h3').text(galleryname);
                } else {
                    if (ek__data.desktop)
                        page.find('.buttonbar').after('<h3>' + galleryname + '</h3>');
                    else
                        page.find('h2').after('<h3>' + galleryname + '</h3>');
                }
                $('#contents').scrollTop(0);
            }
        });
    });
}(postal, jQuery));
(function(_, p, $) {
    'use strict';
    var pbg = p.channel()
      , pb = p.channel('guestlist')
      , content = null;
    pbg.subscribe("init", function(data) {
        content = data.ek__lang_content;
        pb.publish('ready');
    });
    p.when([{
        channel: 'rp_pages',
        topic: 'guestlistPageRendered'
    }, {
        channel: '',
        topic: 'init'
    }], function(data, x, y) {
        var page = $(data.pageDom);
        var optionsSetup = ['open', 'accepted', 'declined'];
        var filterOptionsToDisplay = data.data.filter;
        var filterOptionsHtml = '';
        if (filterOptionsToDisplay && filterOptionsToDisplay.length) {
            for (var i = 0; i < filterOptionsToDisplay.length; i++) {
                var optionV = optionsSetup[filterOptionsToDisplay[i] - 2];
                filterOptionsHtml += '<div class="buttonbar"><div class="button" ';
                filterOptionsHtml += ' filterid="' + filterOptionsToDisplay[i] + '"';
                filterOptionsHtml += ' filtername="' + optionV + '">' + content.custom.guestlist[optionV] + '</div></div>';
            }
            if (filterOptionsToDisplay.length) {
                filterOptionsHtml += '<div class="buttonbar"><div class="button active" filterid="5" filtername="showall">' + content.custom.guestlist.showall + '</div></div>';
            }
        }
        if (filterOptionsHtml) {
            var filter = '<div class="filterpanel optionsCount' + filterOptionsToDisplay.length + '">' + filterOptionsHtml + '</div>';
            page.find('ul.recipients li').each(function() {
                var filterid = $(this).find('.filter').text();
                if (filterid === '2') {
                    $(this).addClass('open');
                }
                if (filterid === '3') {
                    $(this).addClass('accepted');
                }
                if (filterid === '4') {
                    $(this).addClass('declined');
                }
            });
            page.find('.content').prepend(filter);
            if (filterOptionsToDisplay.length) {
                page.find('.button').on('click', function() {
                    page.find('.filterpanel .button').removeClass('active');
                    $(this).addClass('active');
                    var rl = page.find('ul.recipients').removeClass('accepted declined open showall').addClass($(this).attr('filtername'));
                    rl.children().removeClass('firstVisible').filter(':visible').first().addClass('firstVisible');
                });
            }
        }
    });
}(_, postal, jQuery));
(function(_, p, $) {
    'use strict';
    var pbg = p.channel()
      , pb = p.channel('contact_form')
      , content = null;
    pbg.subscribe("init", function(data) {
        content = data.ek__lang_content;
        pb.publish('ready');
    });
    p.when([{
        channel: 'rp_pages',
        topic: '*'
    }], function(data) {
        if (typeof data.pageDom === 'undefined' || content === null) {
            return false;
        }
        var page = $(data.pageDom);
        var pageData = data.data;
        var formPlaceholder = page.find('.canSendMessage');
        var _mandatoryFieldMarkerLabel = content.custom.rsvp.update_info_mandatory_marker;
        function renderMessages() {
            var markup = '<h4>' + content.custom.pages_global.sent_messages + '</h4>';
            _.each(ek__data.sentMessages, function(message) {
                markup += '<div><small>' + message.dateFormattedLabel + '</small><pre>' + message.text + '</pre></div>';
            });
            return markup;
        }
        if (formPlaceholder.length && formPlaceholder.text() === 'true') {
            formPlaceholder.each(function(i) {
                var form = $('<form id="form' + i + '" action="' + ek__data.host + ek__data.endpointUrl + '"><legend>' + content.custom.pages_global.add_message + '</legend><textarea name="text"></textarea><input type="submit" value="' + content.global.action.send + '" /></form>');
                $(this).after(form);
                var theform = page.find('#form' + i);
                if (pageData.nameRequired) {
                    var recipNameForm = '<form class="recipNameUpdate"><input placeholder="' + content.custom.rsvp.Name + _mandatoryFieldMarkerLabel + '" type="text" name="Name" maxlength="120" value=""/></form><hr class="short"/>';
                    theform.before(recipNameForm);
                    rp_utils.syncRecipName(page);
                }
                if (pageData.emailRequired) {
                    var emailForm = '<form class="emailUpdate"><input placeholder="' + content.custom.rsvp.email + _mandatoryFieldMarkerLabel + '" type="text" name="email" maxlength="120" value=""/></form><hr class="short"/>';
                    theform.before(emailForm);
                    rp_utils.syncEmail(page);
                }
                form.submit(function(e) {
                    ek_jsonrpc_counter++;
                    var params = {
                        "accessToken": ek__data.accessToken
                    };
                    _.extend(params, $(this).form2json());
                    var recipNameF = $('form.recipNameUpdate', page);
                    if (recipNameF.length) {
                        params.name = recipNameF.find('input').val();
                    }
                    var emailF = $('form.emailUpdate', page);
                    if (emailF.length) {
                        params.email = emailF.find('input').val();
                    }
                    var JSONdata = {
                        "jsonrpc": "2.0",
                        "method": "sendMessage",
                        "params": params,
                        "id": ek_jsonrpc_counter
                    };
                    var formURL = $(this).attr("action");
                    $.ajax({
                        url: formURL,
                        type: "POST",
                        data: JSON.stringify(JSONdata),
                        dataType: "json",
                        contentType: "application/json",
                        success: function(data) {
                            if (data.result) {
                                if (ek__data.debug)
                                    console.log(theform);
                                $(theform)[0].reset();
                                rp_utils.updateMissingToken(data.result.accessToken);
                                var retMsg = [content.custom.send_message.sending_done];
                                if (data.result.message)
                                    retMsg.push(data.result.message);
                                rp_utils.showMsg(page, retMsg.join('<br/>'), 'result', 3000);
                                var msgs = $(theform).nextAll('.messages').first();
                                msgs.html('');
                                ek__data.sentMessages.unshift(data.result.sentMessage);
                                msgs.append(renderMessages());
                                rp_utils.scrollToPage(page);
                            }
                            if (data.error) {
                                if (ek__data.debug)
                                    console.log('error!!');
                                if (data.error.message) {
                                    rp_utils.showMsg(page, data.error.message, 'error');
                                    rp_utils.highlightErrorCode(page, data.error.code);
                                } else {
                                    rp_utils.showMsg(page, 'Unknown JSON-RPC error', 'error');
                                }
                            }
                        },
                        error: function() {
                            rp_utils.showMsg(page, content.custom.pages_global.sending_error, 'error');
                        }
                    });
                    e.preventDefault();
                });
                if (ek__data.sentMessages && ek__data.sentMessages.length > 0) {
                    $(form).after((ek__data.desktop ? '<hr class="short"/>' : '') + '<div class="messages">' + renderMessages() + '</div>');
                }
            });
        }
    });
}(_, postal, jQuery));
(function(_, p, $) {
    'use strict';
    var pbg = p.channel()
      , pb = p.channel('rp_pages')
      , settings = {}
      , content = {};
    pbg.subscribe("init", function(data) {
        settings.navi = data.navi || null;
        settings.startupURL = data.startupURL || null;
        settings.pages = data.pages || null;
        settings.host = data.host || null;
        content = data.ek__lang_content || null;
        settings.desktop = data.desktop;
        settings.logoUrl = data.logoUrl;
        settings.customLogo = data.ek.customLogo;
        settings.googleApiKey = data.googleApiKey;
        if (settings.navi === null) {
            console.log('"navi" object missing. Cannot proceed without');
            return;
        }
        pb.publish('ready', {
            data: ''
        });
    });
    p.when([{
        channel: 'router',
        topic: 'card'
    }], function() {
        $('#mv_msg').css({
            'left': '0'
        });
        $('#stage').animate({
            scrollTop: 0
        }, EK_PAGE_SCROLL_ANIMATE);
    });
    p.when([{
        channel: 'router',
        topic: '*'
    }], function(info) {
        if (!settings.navi || _.isEmpty(settings.navi)) {
            return;
        }
        if (info.key === 'card' || info.key === 'inbox') {
            return false;
        }
        $('#stage').spin(false);
        if (ek__data.debug) {
            console.log('in router settings:');
            console.log(settings);
        }
        var pageToShow = '';
        var title = '';
        if (settings.startupURL && typeof alreadyStartup === 'undefined') {
            pageToShow = settings.startupURL;
            window.alreadyStartup = true;
        } else if (info.path) {
            pageToShow = settings.navi[info.key][info.path].pageId;
            title = settings.navi[info.key][info.path].label;
        } else if (ek__data.enterRsvpCode) {
            pageToShow = 'rsvpCode';
        } else if (ek__data.enterOpenAccessCode) {
            pageToShow = 'openAccessCode';
        } else {
            pageToShow = settings.navi[info.key].pageId;
            if (settings.navi.reply && settings.navi.info[settings.navi.reply.pageId.toLowerCase()] && settings.navi.info[settings.navi.reply.pageId.toLowerCase()].label.length > 0) {
                title = settings.navi.info[settings.navi.reply.pageId.toLowerCase()].label;
            } else {
                title = settings.navi[info.key].label;
            }
        }
        if (settings.navi.reply) {
            var ownReplyTitle = settings.navi.reply.pageTitle.toLowerCase() != settings.navi.reply.label.toLowerCase();
            if (info.key == 'reply' && settings.navi.reply.pageTitle && ownReplyTitle) {
                title = settings.navi.reply.pageTitle;
            } else if (!ownReplyTitle && _.keys(settings.pages).length == 2 && settings.pages.INFO) {
                title = false;
            }
        }
        var $page = $('#' + pageToShow.toLowerCase() + '_frame');
        if (!$page.length)
            $page = null;
        if ($page) {
            rp_utils.scrollToPage($page);
        } else {
            console.error('[Page switching] $page is null, pageToShow: ', pageToShow, ', info: ', info);
        }
    });
    p.when([{
        channel: 'rp_pages',
        topic: 'ready'
    }, {
        channel: '',
        topic: 'cardsPreviewStarted'
    }], function() {
        pbg.publish('renderAllPages', {});
    });
    p.when([{
        channel: 'rp_pages',
        topic: 'ready'
    }, {
        channel: '',
        topic: 'renderAllPages'
    }], function() {
        if (!settings.navi || _.isEmpty(settings.navi) || _.size(settings.pages) == 1 && _.has(settings.pages, 'message')) {
            pb.publish('allPagesRendered', {});
            return;
        }
        if ($('#contents .page').length) {
            console.warn('pages already rendered.');
            return;
        }
        var coverImageUrl = ek__data.coverImageUrl;
        _.each(settings.navi, function(val, key) {
            if (key == 'info') {
                _.each(val, function(pathVal, path) {
                    renderPage({
                        key: key,
                        path: path
                    });
                });
            } else {
                renderPage({
                    key: key
                });
            }
        });
        if (settings.desktop) {
            $('#contents').append('<span class="ekLogo"><a href="' + settings.logoUrl + '" target="_blank" onclick="ga(\'send\',\'event\',\'RV\',\'Viral\',\'EkBotmLogo\')"' + (settings.customLogo ? '' : ' title="EventKingdom"') + '>&nbsp;</a></span>');
        }
        $('#stage').append('<div class="bottomSpacer">&nbsp;</div>');
        pb.publish('allPagesRendered', {});
        var pageLayoutChangeNotifFn = _.debounce(function(pg) {
            pb.publish('pageLayoutChanged', {
                page: pg
            });
        }, 100);
        function renderPage(info) {
            if (info.key === 'card' || info.key === 'inbox') {
                return false;
            }
            var pageToShow = '';
            var title = '';
            if (info.path) {
                pageToShow = settings.navi[info.key][info.path].pageId;
                title = settings.navi[info.key][info.path].label;
            } else {
                pageToShow = settings.navi[info.key].pageId;
                if (settings.navi.reply && settings.navi.info[settings.navi.reply.pageId.toLowerCase()] && settings.navi.info[settings.navi.reply.pageId.toLowerCase()].label.length > 0) {
                    title = settings.navi.info[settings.navi.reply.pageId.toLowerCase()].label;
                } else {
                    title = settings.navi[info.key].label;
                }
            }
            if (settings.navi.reply) {
                var ownReplyTitle = settings.navi.reply.pageTitle.toLowerCase() != settings.navi.reply.label.toLowerCase();
                if (info.key == 'reply' && settings.navi.reply.pageTitle && ownReplyTitle) {
                    title = settings.navi.reply.pageTitle;
                } else if (!ownReplyTitle && _.keys(settings.pages).length == 2 && settings.pages.INFO) {
                    title = false;
                }
            }
            var $page = $('#' + pageToShow.toLowerCase() + '_frame');
            if (!$page.length)
                $page = null;
            function makeCalendarButtons() {
                $page.find('.calendar').each(function() {
                    var $cal = $(this);
                    var $dl = $cal.closest('dl');
                    var $date = $dl.find('.dateTimeFormattedLabel');
                    if ($date.length) {
                        var newEle = $date.clone();
                        $cal.before(newEle);
                        $date.remove();
                        if (settings.desktop) {
                            newEle.addClass('calLink').on('click', function(event) {
                                $cal.find('input').trigger('click');
                            });
                        }
                    }
                    var $url = $dl.find('.url');
                    if ($url.length) {
                        var newURL = $url.clone();
                        $cal.before(newURL);
                        $url.remove();
                    }
                    var $phone = $dl.find('.phoneNumber');
                    if ($phone.length) {
                        var newPhone = $phone.clone();
                        $cal.before(newPhone);
                        $phone.remove();
                    }
                });
                $page.find('.calendar').css({
                    display: settings.desktop ? 'none' : 'block'
                });
            }
            if ($page === null) {
                var pageContent = $('<div id="' + pageToShow.toLowerCase() + '_frame" class="page"><div></div></div>');
                var contentDiv = pageContent.find('div');
                if (settings.desktop) {
                    pageContent.prepend('<div class="shadePane">&nbsp;</div>');
                }
                if (coverImageUrl) {
                    contentDiv.append('<div class="coverImage"><img src="' + ek__data.coverImageUrl + '"/></div>');
                    coverImageUrl = null;
                }
                if (title)
                    contentDiv.append('<h2>' + title + '</h2>');
                else
                    pageContent.addClass('notitle');
                contentDiv.append(render(settings.pages[pageToShow]));
                $('#contents').append(pageContent);
                $page = $('#' + pageToShow.toLowerCase() + '_frame');
                if ($page.find('.calendar').length) {
                    makeCalendarButtons();
                } else if (pageToShow.toLowerCase() === 'rsvp' && settings.pages.RSVP.rsvpOptionsEnabled === false) {
                    makeCalendarButtons();
                }
                if ($page.find('.dressCode').length && $page.find('.invitations').length) {
                    $page.find('.invitations li').each(function() {
                        if ($(this).find('.comment').length) {
                            var clone = $(this).find('.dressCode').clone();
                            $(this).find('.dressCode').remove()
                            $(this).find('.comment').before(clone)
                        }
                    });
                }
                if (pageToShow.toLowerCase() === 'ticketing') {
                    if ($page.find('iframe').length) {
                        $page.find('.content').prepend($page.find('.invitations').detach());
                        getOS();
                        if (mobileOS !== 'iOS' && ek__data.eb && ek__data.eb.eventId && ek__data.eb.apiToken) {
                            var _url = 'https://www.eventbriteapi.com/v3/events/' + ek__data.eb.eventId;
                            _url += '/ticket_classes/?token=' + ek__data.eb.apiToken;
                            $.ajax({
                                url: _url,
                                success: function(contents) {
                                    if (contents) {
                                        var ticketsCount = 0;
                                        if (contents.pagination && contents.pagination.object_count) {
                                            ticketsCount = contents.pagination.object_count;
                                        } else if (contents.ticket_classes && contents.ticket_classes.length) {
                                            ticketsCount = contents.ticket_classes.length;
                                        }
                                        if (ticketsCount > 2) {
                                            var ebIFrame = $page.find('iframe');
                                            var iframeH = 50 + 40 + 75 + 70;
                                            ebIFrame.height(iframeH + ticketsCount * 125);
                                        }
                                    }
                                }
                            });
                        }
                    }
                    if ($page.find('input.tickets').length) {
                        $page.find('.content').prepend($page.find('.invitations').detach());
                    }
                }
                $page.find('.dateTimeFormattedLabel dd.0').each(function() {
                    var text = $(this).text();
                    text = text.indexOf(' a.m.') != -1 ? text.replace(/ a.m./g, '&nbsp;a.m.') : text;
                    text = text.indexOf(' p.m.') != -1 ? text.replace(/ p.m./g, '&nbsp;p.m.') : text;
                    text = text.indexOf(' Uhr') != -1 ? text.replace(/ Uhr/g, '&nbsp;Uhr') : text;
                    $(this).html(text);
                });
                pb.publish(pageToShow.toLowerCase() + 'PageRendered', {
                    pageToShow: pageToShow.toLowerCase(),
                    pageDom: pageContent,
                    data: _.clone(settings.pages[pageToShow])
                });
            }
            var contents = $('#contents');
            var swipeDir = contents.data('swipeDir');
            if (swipeDir) {
                $page.css({
                    'left': -swipeDir * $page.width()
                });
                contents.data('swipeDir', false);
                _.delay(function() {
                    $page.animate({
                        'left': 0
                    }, 200);
                }, 0);
            }
            contents.show();
            if (!$('#' + pageToShow.toLowerCase() + '_frame').hasClass('iscrolled')) {
                getOS();
                if ((mobileOS === 'iOS' && parseFloat(mobileOSver) < 7) || (mobileOS === 'Android' && parseFloat(mobileOSver) < 3)) {
                    $('#' + pageToShow.toLowerCase() + '_frame').addClass('iscrolled');
                    _.delay(function() {
                        window.contentscroller = new IScroll($('#' + pageToShow.toLowerCase() + '_frame')[0],{
                            scrollX: false,
                            scrollY: true,
                            zoom: false,
                            momentum: true,
                            click: true
                        });
                    }, 200);
                }
            }
            _.delay(function() {
                if (ek__data.startupMessages && !_.isEmpty(ek__data.startupMessages) && typeof window.startupMessagesShown === 'undefined') {
                    if (ek__data.desktop)
                        rp_utils.showMsg($page, _.flatten(ek__data.startupMessages).join(''));
                    else
                        _.each(ek__data.startupMessages, function(message) {
                            alert(message);
                        });
                    window.startupMessagesShown = true;
                }
            }, 300)
            function render(obj) {
                var markup = $('<div class="content"></div>');
                _.each(obj, function(val, key) {
                    if (val === '' || val === 'undefined' || typeof val === 'undefined') {
                        return false;
                    }
                    if (key === 'photoThumbedUrl') {
                        markup.append('<div class="photo"><img src="' + val + '" /></div>');
                    } else if (key === 'photoUrl') {
                        markup.append(' ');
                    } else if (key === 'forPersonalLabel') {
                        var cls = (val === ' ') ? key + ' hidden' : key;
                        if (settings.desktop) {
                            markup.append('<div class="' + cls + '">' + content.custom.rsvp.forPersonalLabel + '<div class="valuer">' + val + '</div></div>');
                        } else {
                            markup.append('<p class="' + cls + '">' + content.custom.rsvp.forPersonalLabel + ' <span class="valuer">' + val + '</span></p>');
                        }
                    } else if (key === 'button') {
                        if (val.iframe && settings.desktop) {
                            markup.append('<iframe src="' + val.iframe + '" frameborder="0" height="420" width="100%" vspace="0" hspace="0" marginheight="5" marginwidth="5" scrolling="auto" allowtransparency="true"></iframe>');
                        } else {
                            markup.append('<input type="button" class="customlink tickets" value="' + val.label + '" onclick="window.open(\'' + val.url + '\',\'_blank\')" />');
                        }
                    } else if (key === 'comment') {
                        markup.append('<pre class="' + key + '">' + val + '</pre>');
                        if (settings.desktop)
                            markup.append('<hr class="short"/>');
                    } else if (key === 'text') {
                        markup.append('<pre class="' + key + '">' + val + '</pre>');
                    } else if (key === 'textAlign' && val > 2 && val < 6) {
                        markup.addClass(['alignLeft', 'alignCenter', 'alignRight'][val - 3]);
                    } else if (key === 'peopleCount') {
                        var maxPeopleCount = parseInt(val['max']);
                        if (maxPeopleCount > 1) {
                            var rTag = 'p'
                              , vTag = 'span';
                            if (settings.desktop) {
                                rTag = 'div';
                            }
                            markup.append('<' + rTag + ' class="peopleCount" data-current="' + val['current'] + '" data-max="' + maxPeopleCount + '">' + content.custom.rsvp.peopleCountLabel + ' <' + vTag + ' class="valuer">' + val['current'] + '</' + vTag + '></' + rTag + '>');
                        }
                    } else if (key === 'rsvpReminder') {} else if (_.isString(val)) {
                        markup.append('<p class="' + key + '">' + val + '</p>');
                    } else if (_.isArray(val)) {
                        var list = $('<ul class="' + key + '"></ul>');
                        _.each(val, function(item, index) {
                            var listitem = $('<li></li>');
                            if (_.isObject(item)) {
                                if (settings.desktop && index > 0)
                                    listitem.append('<hr class="' + (key == 'hotels' ? 'long' : 'short') + '"/>');
                                listitem.append(markupObj(item));
                            }
                            list.append(listitem);
                        });
                        markup.append(list);
                    } else if (_.isObject(val)) {
                        markup.append(markupObj(val, key));
                        if (settings.desktop && _.contains(['host'], key))
                            markup.append('<hr class="short"/>');
                    } else if (_.isBoolean(val)) {
                        markup.append('<div class="system-only ' + key + '">' + val + '</div>');
                        markup.addClass(key + '-' + val);
                    }
                });
                return markup;
                function markupObj(obj, key) {
                    if (obj === '' || obj === 'undefined' || typeof obj === 'undefined') {
                        return false;
                    }
                    var markup = $('<dl class="' + key + '"></dl>');
                    if (obj.photoThumbedUrl) {
                        markup.addClass('hasphoto');
                        var bigImg = obj.photoUrl || '';
                        var markupPhoto = '<dd class="photo"><img class="thumb" src="' + obj.photoThumbedUrl + '" />';
                        if (obj.photoUrl) {
                            markupPhoto += '<img class="bigone" src="/s.png" datasrc="' + obj.photoUrl + '" />';
                        }
                        markupPhoto += '</dd>';
                        markup.append(markupPhoto);
                    }
                    if (obj.zip && obj.city) {
                        obj.city = obj.zip + ' ' + obj.city;
                    }
                    _.each(obj, function(val, key) {
                        if (_.isObject(val)) {
                            if (key === 'address') {
                                var strCity = (obj.address.city || '');
                                if (obj.address.countryCode === 'US' || obj.address.countryCode === 'CA') {
                                    strCity = strCity + ', ' + (obj.address.state || '') + ' ' + (obj.address.zip || '');
                                } else if (obj.address.countryCode === 'GB') {
                                    strCity = strCity + ' ' + (obj.address.zip || '');
                                } else {
                                    strCity = (obj.address.zip || '') + ' ' + strCity;
                                }
                                var custobj = {
                                    locationName: obj.locationName || '',
                                    streetNo: obj.address.streetNo || '',
                                    zipCity: strCity.replace(/^\s+|\s+$/g, ''),
                                    country: obj.address.country || ''
                                };
                                var mapmarkup = '';
                                if (obj.locationName || obj.address.streetNo || obj.address.city || obj.address.country) {
                                    mapmarkup = $('<div class="mapaddress"></div>');
                                    if (settings.desktop) {
                                        var addrLine = _.compact([custobj.streetNo, custobj.zipCity, custobj.country]).join(' | ');
                                        var target = markup.children('.locationName');
                                        if (!target.length)
                                            target = markup.children('.companyAttribute');
                                        if (!target.length)
                                            target = markup.children('.company');
                                        if (!target.length)
                                            target = markup.children('.contactInfo');
                                        if (!target.length)
                                            target = markup.children('.name');
                                        if (!target.length)
                                            target = markup.children('.title');
                                        if (target.length)
                                            target.after('<dd>' + addrLine + '</dd>');
                                        else
                                            markup.append('<dd>' + addrLine + '</dd>');
                                        if (obj.address.googleMapEnabled && window['google'] && window['google']['maps'] && obj.address.streetNo && obj.address.city && obj.address.country) {
                                            new google.maps.Geocoder().geocode({
                                                'address': obj.address.googleLocation
                                            }, function(results, status) {
                                                if (status == google.maps.GeocoderStatus.OK) {
                                                    markup.append(mapmarkup);
                                                    var gmap = new google.maps.Map(mapmarkup[0],{
                                                        zoom: 15,
                                                        scrollwheel: false,
                                                        center: results[0].geometry.location,
                                                        mapTypeId: google.maps.MapTypeId.ROADMAP
                                                    });
                                                    mapmarkup.data('google.maps.Map', gmap);
                                                    var marker = new google.maps.Marker({
                                                        map: gmap,
                                                        position: results[0].geometry.location,
                                                        title: custobj.streetNo
                                                    });
                                                    var gmapLocation = encodeURIComponent(obj.address.googleLocation);
                                                    var mapdirurl = 'https://maps.google.com?saddr=Current+Location&daddr=' + gmapLocation;
                                                    markup.append('<div class="mapLink"><a href="' + mapdirurl + '" target="_blank">' + content.custom.pages_global.open_big_map + '</a></div>');
                                                    pageLayoutChangeNotifFn($page[0]);
                                                }
                                            });
                                        }
                                    } else {
                                        var gmapLocation = encodeURIComponent(obj.address.googleLocation);
                                        var mapurl = mobileOS && (mobileOS === 'iOS') ? 'https://maps.apple.com/maps' : 'https://maps.google.com'
                                        if (obj.address.googleMapEnabled) {
                                            var mapString = '<a href="' + mapurl + '?q=' + gmapLocation + '" target="_blank">' + '<img src="https://maps.googleapis.com/maps/api/staticmap?' + 'center=' + encodeURIComponent(val.city + ',' + val.streetNo + ',' + val.country) + '&zoom=13&size=300x200&format=jpg&sensor=true&scale=2' + '&key=' + ek__data.googleApiKey + '" /></a>';
                                            mapmarkup.append(mapString);
                                        }
                                        mapmarkup.append(markupObj(custobj));
                                        markup.append(mapmarkup);
                                        mapmarkup.append(markupObj(custobj));
                                        markup.append(mapmarkup);
                                        if (obj.address.googleMapEnabled) {
                                            var mapdirurl = 'https://maps.google.com?saddr=Current+Location&daddr=' + gmapLocation;
                                            markup.append('<div class="mapLink"><a href="' + mapdirurl + '" target="_blank">' + content.custom.pages_global.open_big_map + '</a></div>');
                                        }
                                    }
                                }
                            } else if (key === 'calendar') {
                                var objitem = $('<dd class="' + key + '"><input type="button" value="' + content.custom.pages_global.add_to_calendar + '" /></dd>');
                                val.outlookUrl = val.outlookUrl.replace(/\$websiteUrl/g, 'websiteUrl=' + encodeURIComponent(ek__data.entryURL));
                                val.iCalUrl = val.iCalUrl.replace(/\$websiteUrl/g, 'websiteUrl=' + encodeURIComponent(ek__data.entryURL));
                                val.googleCalUrl = val.googleCalUrl.replace(/\%24websiteUrl/g, encodeURIComponent(ek__data.entryURL));
                                val.yahooCalUrl = val.yahooCalUrl.replace(/\%24websiteUrl/g, encodeURIComponent(ek__data.entryURL));
                                objitem.find('input').on('click', function() {
                                    var popHtml = '<h3 class="title">' + content.custom.calendar_popup.title + '</h3>' + '<p class="calLink"><a href="' + val.outlookUrl + '">' + content.custom.calendar_popup.outlook + '</a></p>' + '<p class="calLink"><a href="' + val.iCalUrl + '">' + content.custom.calendar_popup.ical + '</a></p>' + '<p class="calLink"><a href="' + val.googleCalUrl + '" target="_blank">' + content.custom.calendar_popup.googleCal + '</a></p>' + '<p class="calLink"><a href="' + val.yahooCalUrl + '" target="_blank">' + content.custom.calendar_popup.yahooCal + '</a></p>';
                                    var pop = rv_utils.buildPopup(0, 'addToCal modal', popHtml).on('close', function() {
                                        $(this).remove();
                                    });
                                    $('body').append(pop);
                                    rv_utils.openPopup(pop);
                                });
                                markup.append(objitem);
                            } else if (key === 'checkInWalletPassDownlLink') {
                                if (ek__data.accessToken) {
                                    var url = settings.desktop ? '#' : val.url + '&token=' + ek__data.accessToken;
                                    var objitem = $('<dd class="' + key + '"><a href="' + url + '">' + content.custom.pages_global.downlWalletCheckInPass + '</a></dd>');
                                    markup.append(objitem);
                                    if (settings.desktop) {
                                        objitem.find('a').on('click', function() {
                                            var page = $(this).closest('.page');
                                            rp_utils.jsonRPC('resendConfirmationEmail', null, page);
                                            return false;
                                        });
                                    }
                                }
                            } else {
                                var objitem = $('<dd class="' + key + '"></dd>');
                                objitem.append(markupObj(val));
                                markup.append(objitem);
                            }
                        } else {
                            var cnt = markupItem(val, key, obj);
                            var objitem = '';
                            if (key !== 'photoThumbedUrl' && key != 'photoUrl' && key != 'accepted' && !_.isBoolean(val)) {
                                var objitem = $('<dt>' + key + '</dt><dd class="' + key + '">' + cnt + '</dd>');
                            }
                            if (_.isBoolean(val) || key == 'accepted' && val == 'null') {
                                markup.attr(key, val);
                            }
                            markup.append(objitem);
                        }
                    });
                    return markup;
                }
                function markupItem(item, key, parent) {
                    var cnt = item;
                    if (item === '' || item === 'undefined' || typeof item === 'undefined') {
                        return '';
                    }
                    var customstring = content.custom[pageToShow.toLowerCase()] && content.custom[pageToShow.toLowerCase()][key] ? content.custom[pageToShow.toLowerCase()][key] : null;
                    if (customstring !== null) {
                        if (customstring.indexOf('%@') !== -1) {
                            cnt = customstring.replace('%@', item);
                        } else {
                            cnt = customstring + ' ' + item;
                        }
                    }
                    if (key === 'photoThumbedUrl') {
                        cnt = '<img src="' + item + '" />';
                    } else if (key === 'photoUrl') {
                        cnt = '<img src="' + item + '" />';
                    } else if (key === 'email') {
                        cnt = '<a href="mailto:' + item + '">' + item + '</a>';
                    } else if (key === 'url') {
                        var href = item.indexOf('http') != -1 ? item : 'http://' + item;
                        if (parent.mimeType) {
                            cnt = '<a href="' + href + '" target="_blank">' + parent.name + '</a>';
                        } else {
                            cnt = '<a href="' + href + '" target="_blank">' + item + '</a>';
                        }
                    } else if (key === 'phoneNumber' || key === 'mobileNumber') {
                        cnt = '<a href="tel:' + item + '">' + item + '</a>';
                    } else if (key === 'comment' || key === 'description') {
                        cnt = '<pre>' + item + '</pre>';
                    } else if (key === 'dressCode') {
                        cnt = '<pre>' + content.custom.pages_global.dress_code + ' ' + item + '</pre>';
                    }
                    return cnt;
                }
            }
        }
    });
}(_, postal, jQuery));
;(function(_, p, $, feat) {
    if (feat.csstransforms3d || ek__data.enterRsvpCode || ek__data.enterOpenAccessCode)
        return false;
    var settings = {};
    var pbg = p.channel()
      , pb = p.channel('mv_animation');
    pbg.subscribe("init", function(data) {
        settings = _.extend(settings, data.messageData);
        if (window.ie8) {
            $('#mv_msg .animation .envelope').css({
                'opacity': 'inherit',
                'filter': 'inherit'
            }).each(function() {
                PIE.attach(this);
            });
            $('.message-navigation .pagination .swiper-pagination-switch').each(function() {
                PIE.attach(this);
            });
        }
    });
    p.when([{
        channel: 'mv_preloader',
        topic: 'card1ImgLoaded'
    }, {
        channel: '',
        topic: 'audioReady'
    }], function() {
        if (!settings.envelopeImages && settings.cardAnimation) {
            $('#stage').addClass('animating').spin(false);
            var msg = $('#mv_msg')
              , anim = msg.find('.animation');
            msg.css('z-index', 11);
            anim.find('.envelope').removeClass('movedDown').find('.envelope_back .card').css({
                'top': '-=123px'
            });
            anim.css('top', '-680px').removeClass('outside').animate({
                'top': '0px'
            }, {
                duration: 1500,
                easing: 'swing',
                complete: function() {
                    _.delay(function() {
                        pb.publish('envelopeDismissed', {
                            data: ''
                        });
                    }, 2000);
                    msg.css('z-index', '');
                }
            });
        }
    });
    var addImgElem = function(sel, imgSrc, delay) {
        if (delay > 0)
            return _.delay(function() {
                addImgElem(sel, imgSrc);
            }, delay);
        var el = $(sel);
        el.css({
            'background-image': 'none'
        });
        if (el.find('img').length == 0)
            el.append('<img src="' + imgSrc + '"/>');
    };
    p.when([{
        channel: 'mv_preloader',
        topic: 'flapClosedImgLoaded'
    }], function(data) {
        addImgElem('#mv_msg .animation .envelope .envelope_back .flap_outside', settings.envelopeImages.flapClosed, 20);
    });
    p.when([{
        channel: 'mv_preloader',
        topic: 'flapOpenedImgLoaded'
    }], function(data) {
        addImgElem('#mv_msg .animation .envelope .envelope_back .flap_inside', settings.envelopeImages.flapOpened, 20);
        if (window.ie8) {
            addImgElem('#mv_msg .swiper-container .envelope .envelope_back .flap_inside', settings.envelopeImages.flapOpened, 20);
        }
    });
    p.when([{
        channel: 'mv_preloader',
        topic: 'liningImgLoaded'
    }], function(data) {
        if (window.ie8) {
            addImgElem('#mv_msg .swiper-container .envelope .envelope_back .lining', settings.envelopeImages.lining, 20);
        }
    });
    p.when([{
        channel: 'mv_preloader',
        topic: 'frontImgLoaded'
    }, {
        channel: 'mv_preloader',
        topic: 'flapClosedImgLoaded'
    }, {
        channel: 'mv_markup',
        topic: 'envelopeBuilt'
    }], function(data) {
        _.delay(function() {
            pb.publish('envelopeReadyForUpdates', {
                data: ''
            });
        }, 20);
    });
    p.when([{
        channel: 'mv_markup',
        topic: 'frontReady'
    }, {
        channel: 'mv_animation',
        topic: 'envelopeReadyForUpdates'
    }, {
        channel: '',
        topic: 'audioReady'
    }], function(data) {
        $('#stage').addClass('animating').spin(false);
        var msgE = $('#mv_msg').css('z-index', 11);
        if (window.ie9) {
            $('#mv_msg .swiper-container .envelope > .flap_outside').css({
                top: "-60%",
                'background-image': 'url("' + settings.envelopeImages.flapOpenedOutside + '")'
            });
        }
        if (window.ie8) {
            $('#mv_msg .swiper-container .envelope > .flap_outside').css({
                top: "-60%",
                backgroundImage: 'url("' + settings.envelopeImages.flapOpenedOutside + '")'
            });
            $('#mv_msg .envelope div').each(function() {
                var el = $(this);
                var bgIm = el.css('background-image');
                if (bgIm && bgIm.toLowerCase().indexOf('url') === 0) {
                    var imgUrl = bgIm.replace(/^url\(["']?/i, '').replace(/["']?\)$/i, '');
                    el.css({
                        'background-image': ''
                    }).append('<img src="' + imgUrl + '"/>');
                }
            });
        }
        $('#mv_msg .animation.outside').css('top', '-680px').removeClass('outside').animate({
            'top': '0px'
        }, {
            duration: 1500,
            easing: 'swing',
            complete: function() {
                _.delay(function() {
                    pb.publish('messageAppeared', {
                        data: ''
                    });
                }, 2000);
                msgE.css('z-index', '');
                $('#stage').spin({
                    top: '90px'
                });
            }
        });
    });
    p.when([{
        channel: 'mv_animation',
        topic: 'messageAppeared'
    }, {
        channel: 'mv_markup',
        topic: 'backReady'
    }], function(data) {
        $('#mv_msg .animation .envelope').css('opacity', 1).animate({
            'opacity': 0
        }, {
            duration: 600,
            easing: 'linear',
            complete: function() {
                $(this).addClass('flip');
            }
        }).animate({
            'opacity': 1
        }, {
            duration: 600,
            easing: 'linear'
        }).animate({
            'top': '+=0px'
        }, {
            duration: 1000,
        }).animate({
            'top': '+=170px'
        }, {
            duration: 1000,
            easing: 'swing',
            complete: function() {
                $(this).addClass('flip');
                pb.publish('envelopeReadyToOpen', {
                    data: ''
                });
            }
        });
    });
    p.when([{
        channel: 'mv_animation',
        topic: 'envelopeReadyToOpen'
    }, {
        channel: 'mv_markup',
        topic: 'insideReady'
    }], function(data) {
        $('#stage').spin(false);
        $('#mv_msg .animation .envelope').removeClass('closed');
        var flapInside = $('#mv_msg .animation .envelope .flap_inside');
        var flapInsideImg = flapInside.find('img');
        var flapInsideH = flapInsideImg.height();
        flapInsideImg.height(0);
        flapInside.css('background-image', '');
        $('#mv_msg .animation .envelope .envelope_back .flap_outside').css('background-image', '');
        $('#mv_msg .animation .envelope .envelope_back .flap_outside img').animate({
            'height': '0px'
        }, {
            duration: 1000,
            easing: 'easeInQuad',
            complete: function() {
                $(this).hide();
                flapInsideImg.animate({
                    'top': -flapInsideH,
                    'height': flapInsideH
                }, {
                    duration: 1000,
                    easing: 'easeOutQuad',
                    complete: function() {
                        $(this).addClass('flip');
                        pb.publish('envelopeOpened', {
                            data: ''
                        });
                    }
                });
            }
        });
    });
    p.when([{
        channel: 'mv_animation',
        topic: 'envelopeOpened'
    }], function(data) {
        _.delay(function() {
            $('#mv_msg .animation .envelope .envelope_back .card').animate({
                'top': '-=293px'
            }, {
                duration: 1200,
                easing: 'swing',
                complete: function() {
                    $('#mv_msg .animation .envelope').addClass('cardRemoved');
                    pb.publish('cardRemoved', {
                        data: ''
                    });
                }
            });
        }, 520);
    });
    p.when([{
        channel: 'mv_markup',
        topic: 'cardResized'
    }], function(data) {
        var envBk = $('#mv_msg .animation .envelope .envelope_back');
        $('.flap_inside', envBk).add('.envelope_back_outside', envBk).add('.lining', envBk).add('.shadow-object', envBk).animate({
            'top': '1200px'
        }, {
            duration: 1200,
            easing: 'easeInSine',
            complete: _.once(function() {
                $('#mv_msg .animation .envelope').addClass('dismissed');
                pb.publish('envelopeDismissed', {
                    data: ''
                });
            })
        });
    });
    p.when([{
        channel: 'mv_animation',
        topic: 'envelopeDismissed'
    }], function(data) {
        window.animationfinished = true;
        $('#stage').removeClass('animating');
        pb.publish('cardZoomed', {
            data: ''
        });
    });
}
)(_, postal, jQuery, Modernizr);
(function(_, p, $, feat) {
    if (feat.csstransforms3d || ek__data.enterRsvpCode || ek__data.enterOpenAccessCode)
        return false;
    var opacity = feat.testProp('opacity');
    p.when([{
        channel: 'mv_markup',
        topic: 'slideMarkupReady'
    }], function(data) {
        $('.swiper-slide .envelope').hammer().on("tap", function(event) {
            if (!opacity) {
                $(this).toggleClass('flip');
                return;
            }
            $(this).animate({
                'opacity': 0
            }, {
                duration: 300,
                easing: 'linear',
                complete: function() {
                    $(this).toggleClass('flip');
                }
            }).animate({
                'opacity': 1
            }, {
                duration: 300,
                easing: 'linear'
            });
        });
    });
}
)(_, postal, jQuery, Modernizr);
