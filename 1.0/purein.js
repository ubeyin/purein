/*
 Copyright (C) Ubeyin, Co. 2021
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
(function (e, k) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = k() : 'function' == typeof define && define.amd ? define(k) : e.Purein = k()
})(this, function () {
    'use strict';
    class Purein {
        constructor(e) {
            if (typeof e !== "undefined" && e != null) this.element = e;
            else this.element = {};
            /**
             * (Web Components)
             */
            this.component = function (x, y) {
                switch (x) {
                    case 'button':
                        let fg = "<style>/*!!!! BUTTONS !!!!*/.purein-button{position:relative;display:inline-block;box-sizing:border-box;border:none;border-radius:4px;padding:0 16px;min-width:64px;height:36px;vertical-align:middle;text-align:center;text-overflow:ellipsis;text-transform:uppercase;color:#fff;background-color:#6200ee;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);font-family:Roboto,'Segoe UI',BlinkMacSystemFont,system-ui,-apple-system;font-size:14px;font-weight:500;line-height:36px;overflow:hidden;outline:0;transition:box-shadow .2s}.purein-button::-moz-focus-inner{border:none}.purein-button-outline{background-color:transparent!important;color:#6200ee;border:1px solid #6200ee;box-shadow:none!important;font-weight:600;height:38px}.purein-button-outline:focus,.purein-button-outline:hover{background-color:rgba(98,0,238,.12)!important}.purein-button::before{content:'';position:absolute;top:0;bottom:0;left:0;right:0;background-color:#fff;opacity:0;transition:opacity .2s}.purein-button::after{content:'';position:absolute;left:50%;top:50%;border-radius:50%;padding:50%;width:32px;height:32px;background-color:#fff;opacity:0;transform:translate(-50%,-50%) scale(1);transition:opacity 1s,transform .5s}.purein-button:focus,.purein-button:hover{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.purein-button:hover::before{opacity:.08}.purein-button:focus::before{opacity:.24}.purein-button:hover:focus::before{opacity:.3}.purein-button:active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.purein-button:active::after{opacity:.32;transform:translate(-50%,-50%) scale(0);transition:transform 0s}.purein-button:disabled{color:rgba(0,0,0,.38);background-color:rgba(0,0,0,.12);box-shadow:none;cursor:initial}.purein-button:disabled::before{opacity:0}.purein-button:disabled::after{opacity:0}</style>";
                        document.head.innerHTML += fg;
                        purein_button(y, this);
                        break;
                    default:
                        purein_component(x, y, this);
                        break;
                }
            };
            /**
             * (Web Scopes)
             */
            this.scope = function (m) {
                var o = this.element;
                if (o.nodeName && typeof o == 'object') {
                    for (const k in m) {
                        if (Object.hasOwnProperty.call(m, k)) {
                            o.innerHTML = o.innerHTML.replaceAll("{{" + k + "}}", m[k]);
                        }
                    }
                } else if (typeof o == 'string') {
                    for (const k in m) {
                        if (Object.hasOwnProperty.call(m, k)) {
                            for (let i = 0; i < document.querySelectorAll(o).length; i++) {
                                document.querySelectorAll(o)[i].innerHTML = document.querySelectorAll(o)[i].innerHTML.replaceAll("{{" + k + "}}", m[k]);
                            }
                        }
                    }
                }
            }
            /**
             * (Web Async)
             */
            this.async = function (f) {
                var m, n, k, o;
                if (f) m = f;
                else m = {};
                k = this.element;
                n = m.success;
                o = m.error;

                var i;
                if (window.XMLHttpRequest) {
                    //Firefox, Opera, IE7, and other browsers will use the native object
                    i = new XMLHttpRequest();
                } else {
                    //IE 5 and 6 will use the ActiveX control
                    i = new ActiveXObject("Microsoft.XMLHTTP");
                }
                if (i && typeof k === 'string') {
                    if (m.method) i.open(m.method, k);
                    else i.open("GET", k);
                    if (n) i.addEventListener("load", function () {
                        if (this.readyState == 4 && this.status == 200) {
                            return n(i.responseText, i);
                        } else {

                        }
                    });
                    if (o) i.addEventListener("error", function () {
                        return o(i.status);
                    });
                    i.send(0);
                } else {
                    throw new Error("Purein.Async->['Some arguments are missing!']");
                }
            }
            /**
             * (Web Device)
             */
            this.device = function (f, p) {
                switch (f) {
                    case 'media':
                        purein_media(p);
                        break;
                    case 'size':
                        purein_size(p);
                        break;
                }
            }
        }
    }

    function purein_size(g) {
        if (g) {
            window.addEventListener('resize', function (ev) {
                return g(window.innerWidth, window.innerHeight, ev);
            });
            return g(window.innerWidth, window.innerHeight, '');
        } else {
            throw new Error("Purein.Device.Size->['Some arguments are missing!']");
        }
    }

    function purein_media(f) {
        var m, n, o, p, q, r, u, w;
        m = {} = f;
        n = m.xsmall, o = m.small, p = m.medium, q = m.large, r = m.xlarge, u = m.xxlarge;
        if (m) {
            setInterval(() => {
                w = window.innerWidth;
                if (w <= 576) {
                    if (n) return n(w);
                } else if (w >= 576 && w < 768) {
                    if (o) return o(w);
                } else if (w >= 768 && w < 992) {
                    if (p) return p(w);
                } else if (w >= 992 && w < 1200) {
                    if (q) return q(w);
                } else if (w >= 1200 && w < 1400) {
                    if (r) return r(w);
                } else if (w >= 1400) {
                    if (u) return u(w);
                }
            }, 100);
        } else {
            throw new Error("Purein.Device.Media->['Some arguments are missing!']");
        }
    }

    function purein_button(c, _t) {
        var a, b, d, k, l, m;
        var g, f;
        m = _t.element;

        if (_t) {
            g = function () {
                if (c) a = c;
                else a = {};
                l = 'purein-button', b = a.value, d = a.attr;
                k = document.createElement('button');
                if (a.value) k.innerHTML = b;
                if (a.style == 'outline') k.classList.add('purein-button-outline');
                if (typeof d === "object") {
                    for (const key in d) {
                        if (Object.hasOwnProperty.call(d, key)) {
                            if (typeof d[key] === 'function') k.addEventListener(key, d[key]);
                            else if (typeof d[key] === 'string') k.setAttribute(key, d[key]);
                        }
                    }
                }
                k.classList.add(l);
            };

            f = function () {

                if (m.nodeName && typeof m == 'object') {
                    g();
                    m.appendChild(k)
                } else if (typeof m === "string") {
                    for (let i = 0; i < document.querySelectorAll(m).length; i++) {
                        g();
                        document.querySelectorAll(m)[i].appendChild(k);
                    }
                }
            };

            return f();
        } else {
            throw new Error("Purein.Component->['Some arguments are missing!']");
        }
    }

    function purein_component(x, y, _t) {
        var a, b, d, k, m;
        var g, f;
        m = _t.element;

        if (x && _t) {
            g = function () {
                if (y) a = y;
                else a = {};
                b = a.value, d = a.attr;
                k = document.createElement(x);
                if (a.value) k.value = b;
                if (typeof d === "object") {
                    for (const key in d) {
                        if (Object.hasOwnProperty.call(d, key)) {
                            if (typeof d[key] === 'function') k.addEventListener(key, d[key]);
                            else if (typeof d[key] === 'string') k.setAttribute(key, d[key]);
                        }
                    }
                }
            };

            f = function () {
                if (m.nodeName && typeof m == 'object') {
                    g();
                    m.appendChild(k)
                } else if (typeof m === "string") {
                    for (let i = 0; i < document.querySelectorAll(m).length; i++) {
                        g();
                        document.querySelectorAll(m)[i].appendChild(k);
                    }
                }
            };
            return f();
        } else {
            throw new Error("Purein.Component->['Some arguments are missing!']");
        }
    }

    return Purein;
});

/***
 ** Purein 1.0 - functions
 * Web Components : Button, ...
 * Web Scope : ...
 * Web Async : ...
 * Web Device : Media, Size
***/
