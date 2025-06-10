(() => {
  var u = (e, t) => () => (t || e((t = {
    exports: {}
  }).exports, t), t.exports);
  var Ba = u(() => {
    "use strict";

    window.tram = function (e) {
      function t(p, h) {
        var C = new g.Bare();
        return C.init(p, h);
      }
      function n(p) {
        return p.replace(/[A-Z]/g, function (h) {
          return "-" + h.toLowerCase();
        });
      }
      function a(p) {
        var h = parseInt(p.slice(1), 16);
        var C = h >> 16 & 255;
        var U = h >> 8 & 255;
        var P = 255 & h;
        return [C, U, P];
      }
      function i() {}
      function o(p, h) {
        d("Type warning: Expected: [" + p + "] Got: [" + typeof h + "] " + h);
      }
      function s(p, h, C) {
        d("Units do not match [" + p + "]: " + h + ", " + C);
      }
      function l(p, h, C) {
        if (h !== undefined) {
          C = h;
        }
        if (p === undefined) {
          return C;
        }
        var U = C;
        if (ve.test(p) || !Le.test(p)) {
          U = parseInt(p, 10);
        } else if (Le.test(p)) {
          U = 1e3 * parseFloat(p);
        }
        if (0 > U) {
          U = 0;
        }
        return U === U ? U : C;
      }
      function d(p) {
        if (X.debug && window) {
          window.console.warn(p);
        }
      }
      function b(p) {
        var h = -1;
        var C = p ? p.length : 0;
        for (var U = []; ++h < C;) {
          var P = p[h];
          if (P) {
            U.push(P);
          }
        }
        return U;
      }
      var f = function (p, h, C) {
        function G() {}
        function ie(se, re) {
          function Y() {
            var Se = new le();
            if (typeof Se.init == "function") {
              Se.init.apply(Se, arguments);
            }
            return Se;
          }
          function le() {}
          if (re === C) {
            re = se;
            se = Object;
          }
          Y.Bare = le;
          var fe;
          var ge = G[p] = se[p];
          var Fe = le[p] = Y[p] = new G();
          Fe.constructor = Y;
          Y.mixin = function (Se) {
            le[p] = Y[p] = ie(Y, Se)[p];
            return Y;
          };
          Y.open = function (Se) {
            fe = {};
            if (typeof Se == "function") {
              fe = Se.call(Y, Fe, ge, Y, se);
            } else if (typeof Se == "object") {
              fe = Se;
            }
            if (typeof fe == "object") {
              for (var Kt in fe) if (h.call(fe, Kt)) {
                Fe[Kt] = fe[Kt];
              }
            }
            if (!(typeof Fe.init == "function")) {
              Fe.init = se;
            }
            return Y;
          };
          return Y.open(re);
        }
        return ie;
      }("prototype", {}.hasOwnProperty);
      var y = {
        ease: ["ease", function (p, h, C, U) {
          var P = (p /= U) * p;
          var G = P * p;
          return h + C * (-2.75 * G * P + 11 * P * P + -15.5 * G + 8 * P + .25 * p);
        }],
        "ease-in": ["ease-in", function (p, h, C, U) {
          var P = (p /= U) * p;
          var G = P * p;
          return h + C * (-1 * G * P + 3 * P * P + -3 * G + 2 * P);
        }],
        "ease-out": ["ease-out", function (p, h, C, U) {
          var P = (p /= U) * p;
          var G = P * p;
          return h + C * (.3 * G * P + -1.6 * P * P + 2.2 * G + -1.8 * P + 1.9 * p);
        }],
        "ease-in-out": ["ease-in-out", function (p, h, C, U) {
          var P = (p /= U) * p;
          var G = P * p;
          return h + C * (2 * G * P + -5 * P * P + 2 * G + 2 * P);
        }],
        linear: ["linear", function (p, h, C, U) {
          return C * p / U + h;
        }],
        "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (p, h, C, U) {
          return C * (p /= U) * p + h;
        }],
        "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (p, h, C, U) {
          return -C * (p /= U) * (p - 2) + h;
        }],
        "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (p, h, C, U) {
          return (p /= U / 2) < 1 ? C / 2 * p * p + h : -C / 2 * (--p * (p - 2) - 1) + h;
        }],
        "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (p, h, C, U) {
          return C * (p /= U) * p * p + h;
        }],
        "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (p, h, C, U) {
          return C * ((p = p / U - 1) * p * p + 1) + h;
        }],
        "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (p, h, C, U) {
          return (p /= U / 2) < 1 ? C / 2 * p * p * p + h : C / 2 * ((p -= 2) * p * p + 2) + h;
        }],
        "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (p, h, C, U) {
          return C * (p /= U) * p * p * p + h;
        }],
        "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (p, h, C, U) {
          return -C * ((p = p / U - 1) * p * p * p - 1) + h;
        }],
        "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (p, h, C, U) {
          return (p /= U / 2) < 1 ? C / 2 * p * p * p * p + h : -C / 2 * ((p -= 2) * p * p * p - 2) + h;
        }],
        "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (p, h, C, U) {
          return C * (p /= U) * p * p * p * p + h;
        }],
        "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (p, h, C, U) {
          return C * ((p = p / U - 1) * p * p * p * p + 1) + h;
        }],
        "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (p, h, C, U) {
          return (p /= U / 2) < 1 ? C / 2 * p * p * p * p * p + h : C / 2 * ((p -= 2) * p * p * p * p + 2) + h;
        }],
        "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (p, h, C, U) {
          return -C * Math.cos(p / U * (Math.PI / 2)) + C + h;
        }],
        "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (p, h, C, U) {
          return C * Math.sin(p / U * (Math.PI / 2)) + h;
        }],
        "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (p, h, C, U) {
          return -C / 2 * (Math.cos(Math.PI * p / U) - 1) + h;
        }],
        "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (p, h, C, U) {
          return p === 0 ? h : C * Math.pow(2, 10 * (p / U - 1)) + h;
        }],
        "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (p, h, C, U) {
          return p === U ? h + C : C * (-Math.pow(2, -10 * p / U) + 1) + h;
        }],
        "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (p, h, C, U) {
          return p === 0 ? h : p === U ? h + C : (p /= U / 2) < 1 ? C / 2 * Math.pow(2, 10 * (p - 1)) + h : C / 2 * (-Math.pow(2, -10 * --p) + 2) + h;
        }],
        "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (p, h, C, U) {
          return -C * (Math.sqrt(1 - (p /= U) * p) - 1) + h;
        }],
        "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (p, h, C, U) {
          return C * Math.sqrt(1 - (p = p / U - 1) * p) + h;
        }],
        "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (p, h, C, U) {
          return (p /= U / 2) < 1 ? -C / 2 * (Math.sqrt(1 - p * p) - 1) + h : C / 2 * (Math.sqrt(1 - (p -= 2) * p) + 1) + h;
        }],
        "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (p, h, C, U, P) {
          if (P === undefined) {
            P = 1.70158;
          }
          return C * (p /= U) * p * ((P + 1) * p - P) + h;
        }],
        "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (p, h, C, U, P) {
          if (P === undefined) {
            P = 1.70158;
          }
          return C * ((p = p / U - 1) * p * ((P + 1) * p + P) + 1) + h;
        }],
        "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (p, h, C, U, P) {
          if (P === undefined) {
            P = 1.70158;
          }
          return (p /= U / 2) < 1 ? C / 2 * p * p * (((P *= 1.525) + 1) * p - P) + h : C / 2 * ((p -= 2) * p * (((P *= 1.525) + 1) * p + P) + 2) + h;
        }]
      };
      var T = {
        "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
        "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
        "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
      };
      var L = /[\-\.0-9]/g;
      var w = /[A-Z]/;
      var F = /^(rgb|#)/;
      var x = /(em|cm|mm|in|pt|pc|px)$/;
      var V = /(em|cm|mm|in|pt|pc|px|%)$/;
      var K = /(deg|rad|turn)$/;
      var Z = /(all|none) 0s ease 0s/;
      var ee = /^(width|height)$/;
      var M = document.createElement("a");
      var v = ["Webkit", "Moz", "O", "ms"];
      var k = ["-webkit-", "-moz-", "-o-", "-ms-"];
      var D = function (p) {
        if (p in M.style) {
          return {
            dom: p,
            css: p
          };
        }
        var h;
        var C;
        var U = "";
        var P = p.split("-");
        for (h = 0; h < P.length; h++) {
          U += P[h].charAt(0).toUpperCase() + P[h].slice(1);
        }
        for (h = 0; h < v.length; h++) {
          C = v[h] + U;
          if (C in M.style) {
            return {
              dom: C,
              css: k[h] + p
            };
          }
        }
      };
      var W = t.support = {
        bind: Function.prototype.bind,
        transform: D("transform"),
        transition: D("transition"),
        backface: D("backface-visibility"),
        timing: D("transition-timing-function")
      };
      if (W.transition) {
        var te = W.timing.dom;
        M.style[te] = y["ease-in-back"][0];
        if (!M.style[te]) {
          for (var ae in T) y[ae][0] = T[ae];
        }
      }
      var de = t.frame = function () {
        var p = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
        return p && W.bind ? p.bind(window) : function (h) {
          window.setTimeout(h, 16);
        };
      }();
      var ce = t.now = function () {
        var p = window.performance;
        var h = p && (p.now || p.webkitNow || p.msNow || p.mozNow);
        return h && W.bind ? h.bind(p) : Date.now || function () {
          return +new Date();
        };
      }();
      var O = f(function (p) {
        function h(oe, pe) {
          var ye = b(("" + oe).split(" "));
          var Ee = ye[0];
          pe = pe || {};
          var Ae = j[Ee];
          if (!Ae) {
            return d("Unsupported property: " + Ee);
          }
          if (!pe.weak || !this.props[Ee]) {
            var De = Ae[0];
            var Ce = this.props[Ee];
            if (!Ce) {
              Ce = this.props[Ee] = new De.Bare();
            }
            Ce.init(this.$el, ye, Ae, pe);
            return Ce;
          }
        }
        function C(oe, pe, ye) {
          if (oe) {
            var Ee = typeof oe;
            if (!pe) {
              if (this.timer) {
                this.timer.destroy();
              }
              this.queue = [];
              this.active = false;
            }
            if (Ee == "number" && pe) {
              this.timer = new H({
                duration: oe,
                context: this,
                complete: G
              });
              return void (this.active = true);
            }
            if (Ee == "string" && pe) {
              switch (oe) {
                case "hide":
                  Y.call(this);
                  break;
                case "stop":
                  ie.call(this);
                  break;
                case "redraw":
                  le.call(this);
                  break;
                default:
                  h.call(this, oe, ye && ye[1]);
              }
              return G.call(this);
            }
            if (Ee == "function") {
              return void oe.call(this, this);
            }
            if (Ee == "object") {
              var Ae = 0;
              Fe.call(this, oe, function (Oe, M0) {
                if (Oe.span > Ae) {
                  Ae = Oe.span;
                }
                Oe.stop();
                Oe.animate(M0);
              }, function (Oe) {
                if ("wait" in Oe) {
                  Ae = l(Oe.wait, 0);
                }
              });
              ge.call(this);
              if (Ae > 0) {
                this.timer = new H({
                  duration: Ae,
                  context: this
                });
                this.active = true;
                if (pe) {
                  this.timer.complete = G;
                }
              }
              var De = this;
              var Ce = false;
              var Ln = {};
              de(function () {
                Fe.call(De, oe, function (Oe) {
                  if (Oe.active) {
                    Ce = true;
                    Ln[Oe.name] = Oe.nextStyle;
                  }
                });
                if (Ce) {
                  De.$el.css(Ln);
                }
              });
            }
          }
        }
        function U(oe) {
          oe = l(oe, 0);
          if (this.active) {
            this.queue.push({
              options: oe
            });
          } else {
            this.timer = new H({
              duration: oe,
              context: this,
              complete: G
            });
            this.active = true;
          }
        }
        function P(oe) {
          return this.active ? (this.queue.push({
            options: oe,
            args: arguments
          }), void (this.timer.complete = G)) : d("No active transition timer. Use start() or wait() before then().");
        }
        function G() {
          if (this.timer) {
            this.timer.destroy();
          }
          this.active = false;
          if (this.queue.length) {
            var oe = this.queue.shift();
            C.call(this, oe.options, true, oe.args);
          }
        }
        function ie(oe) {
          if (this.timer) {
            this.timer.destroy();
          }
          this.queue = [];
          this.active = false;
          var pe;
          if (typeof oe == "string") {
            pe = {};
            pe[oe] = 1;
          } else {
            pe = typeof oe == "object" && oe != null ? oe : this.props;
          }
          Fe.call(this, pe, Se);
          ge.call(this);
        }
        function se(oe) {
          ie.call(this, oe);
          Fe.call(this, oe, Kt, S0);
        }
        function re(oe) {
          if (typeof oe != "string") {
            oe = "block";
          }
          this.el.style.display = oe;
        }
        function Y() {
          ie.call(this);
          this.el.style.display = "none";
        }
        function le() {
          this.el.offsetHeight;
        }
        function fe() {
          ie.call(this);
          e.removeData(this.el, "bkwld-tram");
          this.$el = this.el = null;
        }
        function ge() {
          var oe;
          var pe;
          var ye = [];
          if (this.upstream) {
            ye.push(this.upstream);
          }
          for (oe in this.props) {
            pe = this.props[oe];
            if (pe.active) {
              ye.push(pe.string);
            }
          }
          ye = ye.join(",");
          if (this.style !== ye) {
            this.style = ye;
            this.el.style[W.transition.dom] = ye;
          }
        }
        function Fe(oe, pe, ye) {
          var Ee;
          var Ae;
          var De;
          var Ce;
          var Ln = pe !== Se;
          var Oe = {};
          for (Ee in oe) {
            De = oe[Ee];
            if (Ee in ue) {
              if (!Oe.transform) {
                Oe.transform = {};
              }
              Oe.transform[Ee] = De;
            } else {
              if (w.test(Ee)) {
                Ee = n(Ee);
              }
              if (Ee in j) {
                Oe[Ee] = De;
              } else {
                if (!Ce) {
                  Ce = {};
                }
                Ce[Ee] = De;
              }
            }
          }
          for (Ee in Oe) {
            De = Oe[Ee];
            Ae = this.props[Ee];
            if (!Ae) {
              if (!Ln) {
                continue;
              }
              Ae = h.call(this, Ee);
            }
            pe.call(this, Ae, De);
          }
          if (ye && Ce) {
            ye.call(this, Ce);
          }
        }
        function Se(oe) {
          oe.stop();
        }
        function Kt(oe, pe) {
          oe.set(pe);
        }
        function S0(oe) {
          this.$el.css(oe);
        }
        function xe(oe, pe) {
          p[oe] = function () {
            return this.children ? A0.call(this, pe, arguments) : (this.el && pe.apply(this, arguments), this);
          };
        }
        function A0(oe, pe) {
          var ye;
          var Ee = this.children.length;
          for (ye = 0; Ee > ye; ye++) {
            oe.apply(this.children[ye], pe);
          }
          return this;
        }
        p.init = function (oe) {
          this.$el = e(oe);
          this.el = this.$el[0];
          this.props = {};
          this.queue = [];
          this.style = "";
          this.active = false;
          if (X.keepInherited && !X.fallback) {
            var pe = q(this.el, "transition");
            if (pe && !Z.test(pe)) {
              this.upstream = pe;
            }
          }
          if (W.backface && X.hideBackface) {
            I(this.el, W.backface.css, "hidden");
          }
        };
        xe("add", h);
        xe("start", C);
        xe("wait", U);
        xe("then", P);
        xe("next", G);
        xe("stop", ie);
        xe("set", se);
        xe("show", re);
        xe("hide", Y);
        xe("redraw", le);
        xe("destroy", fe);
      });
      var g = f(O, function (p) {
        function h(C, U) {
          var P = e.data(C, "bkwld-tram") || e.data(C, "bkwld-tram", new O.Bare());
          if (!P.el) {
            P.init(C);
          }
          return U ? P.start(U) : P;
        }
        p.init = function (C, U) {
          var P = e(C);
          if (!P.length) {
            return this;
          }
          if (P.length === 1) {
            return h(P[0], U);
          }
          var G = [];
          P.each(function (ie, se) {
            G.push(h(se, U));
          });
          this.children = G;
          return this;
        };
      });
      var E = f(function (p) {
        function h() {
          var G = this.get();
          this.update("auto");
          var ie = this.get();
          this.update(G);
          return ie;
        }
        function C(G, ie, se) {
          if (ie !== undefined) {
            se = ie;
          }
          return G in y ? G : se;
        }
        function U(G) {
          var ie = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(G);
          return (ie ? "#" + (16777216 | ie[1] << 16 | ie[2] << 8 | ie[3]).toString(16).slice(1) : G).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
        }
        p.init = function (G, ie, se, re) {
          this.$el = G;
          this.el = G[0];
          var Y = ie[0];
          if (se[2]) {
            Y = se[2];
          }
          if (J[Y]) {
            Y = J[Y];
          }
          this.name = Y;
          this.type = se[1];
          this.duration = l(ie[1], this.duration, 500);
          this.ease = C(ie[2], this.ease, "ease");
          this.delay = l(ie[3], this.delay, 0);
          this.span = this.duration + this.delay;
          this.active = false;
          this.nextStyle = null;
          this.auto = ee.test(this.name);
          this.unit = re.unit || this.unit || X.defaultUnit;
          this.angle = re.angle || this.angle || X.defaultAngle;
          if (X.fallback || re.fallback) {
            this.animate = this.fallback;
          } else {
            this.animate = this.transition;
            this.string = this.name + " " + this.duration + "ms" + (this.ease != "ease" ? " " + y[this.ease][0] : "") + (this.delay ? " " + this.delay + "ms" : "");
          }
        };
        p.set = function (G) {
          G = this.convert(G, this.type);
          this.update(G);
          this.redraw();
        };
        p.transition = function (G) {
          this.active = true;
          G = this.convert(G, this.type);
          if (this.auto) {
            if (this.el.style[this.name] == "auto") {
              this.update(this.get());
              this.redraw();
            }
            if (G == "auto") {
              G = h.call(this);
            }
          }
          this.nextStyle = G;
        };
        p.fallback = function (G) {
          var ie = this.el.style[this.name] || this.convert(this.get(), this.type);
          G = this.convert(G, this.type);
          if (this.auto) {
            if (ie == "auto") {
              ie = this.convert(this.get(), this.type);
            }
            if (G == "auto") {
              G = h.call(this);
            }
          }
          this.tween = new A({
            from: ie,
            to: G,
            duration: this.duration,
            delay: this.delay,
            ease: this.ease,
            update: this.update,
            context: this
          });
        };
        p.get = function () {
          return q(this.el, this.name);
        };
        p.update = function (G) {
          I(this.el, this.name, G);
        };
        p.stop = function () {
          if (this.active || this.nextStyle) {
            this.active = false;
            this.nextStyle = null;
            I(this.el, this.name, this.get());
          }
          var G = this.tween;
          if (G && G.context) {
            G.destroy();
          }
        };
        p.convert = function (G, ie) {
          if (G == "auto" && this.auto) {
            return G;
          }
          var se;
          var re = typeof G == "number";
          var Y = typeof G == "string";
          switch (ie) {
            case "number":
              if (re) {
                return G;
              }
              if (Y && G.replace(L, "") === "") {
                return +G;
              }
              se = "number(unitless)";
              break;
            case F:
              if (Y) {
                if (G === "" && this.original) {
                  return this.original;
                }
                if (ie.test(G)) {
                  return G.charAt(0) == "#" && G.length == 7 ? G : U(G);
                }
              }
              se = "hex or rgb string";
              break;
            case x:
              if (re) {
                return G + this.unit;
              }
              if (Y && ie.test(G)) {
                return G;
              }
              se = "number(px) or string(unit)";
              break;
            case V:
              if (re) {
                return G + this.unit;
              }
              if (Y && ie.test(G)) {
                return G;
              }
              se = "number(px) or string(unit or %)";
              break;
            case K:
              if (re) {
                return G + this.angle;
              }
              if (Y && ie.test(G)) {
                return G;
              }
              se = "number(deg) or string(angle)";
              break;
            case "unitless":
              if (re || Y && V.test(G)) {
                return G;
              }
              se = "number(unitless) or string(unit or %)";
          }
          o(se, G);
          return G;
        };
        p.redraw = function () {
          this.el.offsetHeight;
        };
      });
      var c = f(E, function (p, h) {
        p.init = function () {
          h.init.apply(this, arguments);
          if (!this.original) {
            this.original = this.convert(this.get(), F);
          }
        };
      });
      var N = f(E, function (p, h) {
        p.init = function () {
          h.init.apply(this, arguments);
          this.animate = this.fallback;
        };
        p.get = function () {
          return this.$el[this.name]();
        };
        p.update = function (C) {
          this.$el[this.name](C);
        };
      });
      var S = f(E, function (p, h) {
        function C(U, P) {
          var G;
          var ie;
          var se;
          var re;
          var Y;
          for (G in U) {
            re = ue[G];
            se = re[0];
            ie = re[1] || G;
            Y = this.convert(U[G], se);
            P.call(this, ie, Y, se);
          }
        }
        p.init = function () {
          h.init.apply(this, arguments);
          if (!this.current) {
            this.current = {};
            if (ue.perspective && X.perspective) {
              this.current.perspective = X.perspective;
              I(this.el, this.name, this.style(this.current));
              this.redraw();
            }
          }
        };
        p.set = function (U) {
          C.call(this, U, function (P, G) {
            this.current[P] = G;
          });
          I(this.el, this.name, this.style(this.current));
          this.redraw();
        };
        p.transition = function (U) {
          var P = this.values(U);
          this.tween = new ne({
            current: this.current,
            values: P,
            duration: this.duration,
            delay: this.delay,
            ease: this.ease
          });
          var G;
          var ie = {};
          for (G in this.current) ie[G] = G in P ? P[G] : this.current[G];
          this.active = true;
          this.nextStyle = this.style(ie);
        };
        p.fallback = function (U) {
          var P = this.values(U);
          this.tween = new ne({
            current: this.current,
            values: P,
            duration: this.duration,
            delay: this.delay,
            ease: this.ease,
            update: this.update,
            context: this
          });
        };
        p.update = function () {
          I(this.el, this.name, this.style(this.current));
        };
        p.style = function (U) {
          var P;
          var G = "";
          for (P in U) G += P + "(" + U[P] + ") ";
          return G;
        };
        p.values = function (U) {
          var P;
          var G = {};
          C.call(this, U, function (ie, se, re) {
            G[ie] = se;
            if (this.current[ie] === undefined) {
              P = 0;
              if (~ie.indexOf("scale")) {
                P = 1;
              }
              this.current[ie] = this.convert(P, re);
            }
          });
          return G;
        };
      });
      var A = f(function (p) {
        function h(Y) {
          if (se.push(Y) === 1) {
            de(C);
          }
        }
        function C() {
          var Y;
          var le;
          var fe;
          var ge = se.length;
          if (ge) {
            de(C);
            le = ce();
            for (Y = ge; Y--;) {
              fe = se[Y];
              if (fe) {
                fe.render(le);
              }
            }
          }
        }
        function U(Y) {
          var le;
          var fe = e.inArray(Y, se);
          if (fe >= 0) {
            le = se.slice(fe + 1);
            se.length = fe;
            if (le.length) {
              se = se.concat(le);
            }
          }
        }
        var ie = {
          ease: y.ease[1],
          from: 0,
          to: 1
        };
        p.init = function (Y) {
          this.duration = Y.duration || 0;
          this.delay = Y.delay || 0;
          var le = Y.ease || ie.ease;
          if (y[le]) {
            le = y[le][1];
          }
          if (typeof le != "function") {
            le = ie.ease;
          }
          this.ease = le;
          this.update = Y.update || i;
          this.complete = Y.complete || i;
          this.context = Y.context || this;
          this.name = Y.name;
          var fe = Y.from;
          var ge = Y.to;
          if (fe === undefined) {
            fe = 0;
          }
          if (ge === undefined) {
            ge = 1;
          }
          this.unit = Y.unit || "";
          if (typeof fe == "number" && typeof ge == "number") {
            this.begin = fe;
            this.change = ge - fe;
          } else {
            this.format(ge, fe);
          }
          this.value = this.begin + this.unit;
          this.start = ce();
          if (Y.autoplay !== false) {
            this.play();
          }
        };
        p.play = function () {
          if (!this.active) {
            if (!this.start) {
              this.start = ce();
            }
            this.active = true;
            h(this);
          }
        };
        p.stop = function () {
          if (this.active) {
            this.active = false;
            U(this);
          }
        };
        p.render = function (Y) {
          var le;
          var fe = Y - this.start;
          if (this.delay) {
            if (fe <= this.delay) {
              return;
            }
            fe -= this.delay;
          }
          if (fe < this.duration) {
            var ge = this.ease(fe, 0, 1, this.duration);
            le = this.startRGB ? "#" + (16777216 | this.startRGB[0] + ge * (this.endRGB[0] - this.startRGB[0]) << 16 | this.startRGB[1] + ge * (this.endRGB[1] - this.startRGB[1]) << 8 | this.startRGB[2] + ge * (this.endRGB[2] - this.startRGB[2])).toString(16).slice(1) : Math.round((this.begin + ge * this.change) * 1e3) / 1e3;
            this.value = le + this.unit;
            return void this.update.call(this.context, this.value);
          }
          le = this.endHex || this.begin + this.change;
          this.value = le + this.unit;
          this.update.call(this.context, this.value);
          this.complete.call(this.context);
          this.destroy();
        };
        p.format = function (Y, le) {
          le += "";
          Y += "";
          if (Y.charAt(0) == "#") {
            this.startRGB = a(le);
            this.endRGB = a(Y);
            this.endHex = Y;
            this.begin = 0;
            return void (this.change = 1);
          }
          if (!this.unit) {
            var fe = le.replace(L, "");
            var ge = Y.replace(L, "");
            if (fe !== ge) {
              s("tween", le, Y);
            }
            this.unit = fe;
          }
          le = parseFloat(le);
          Y = parseFloat(Y);
          this.begin = this.value = le;
          this.change = Y - le;
        };
        p.destroy = function () {
          this.stop();
          this.context = null;
          this.ease = this.update = this.complete = i;
        };
        var se = [];
      });
      var H = f(A, function (p) {
        p.init = function (h) {
          this.duration = h.duration || 0;
          this.complete = h.complete || i;
          this.context = h.context;
          this.play();
        };
        p.render = function (h) {
          var C = h - this.start;
          if (!(C < this.duration)) {
            this.complete.call(this.context);
            this.destroy();
          }
        };
      });
      var ne = f(A, function (p, h) {
        p.init = function (C) {
          this.context = C.context;
          this.update = C.update;
          this.tweens = [];
          this.current = C.current;
          var U;
          var P;
          for (U in C.values) {
            P = C.values[U];
            if (this.current[U] !== P) {
              this.tweens.push(new A({
                name: U,
                from: this.current[U],
                to: P,
                duration: C.duration,
                delay: C.delay,
                ease: C.ease,
                autoplay: false
              }));
            }
          }
          this.play();
        };
        p.render = function (C) {
          var U;
          var P;
          var G = this.tweens.length;
          var ie = false;
          for (U = G; U--;) {
            P = this.tweens[U];
            if (P.context) {
              P.render(C);
              this.current[P.name] = P.value;
              ie = true;
            }
          }
          return ie ? void (this.update && this.update.call(this.context)) : this.destroy();
        };
        p.destroy = function () {
          h.destroy.call(this);
          if (this.tweens) {
            var C;
            var U = this.tweens.length;
            for (C = U; C--;) {
              this.tweens[C].destroy();
            }
            this.tweens = null;
            this.current = null;
          }
        };
      });
      var X = t.config = {
        debug: false,
        defaultUnit: "px",
        defaultAngle: "deg",
        keepInherited: false,
        hideBackface: false,
        perspective: "",
        fallback: !W.transition,
        agentTests: []
      };
      t.fallback = function (p) {
        if (!W.transition) {
          return X.fallback = true;
        }
        X.agentTests.push("(" + p + ")");
        var h = new RegExp(X.agentTests.join("|"), "i");
        X.fallback = h.test(navigator.userAgent);
      };
      t.fallback("6.0.[2-5] Safari");
      t.tween = function (p) {
        return new A(p);
      };
      t.delay = function (p, h, C) {
        return new H({
          complete: h,
          duration: p,
          context: C
        });
      };
      e.fn.tram = function (p) {
        return t.call(null, this, p);
      };
      var I = e.style;
      var q = e.css;
      var J = {
        transform: W.transform && W.transform.css
      };
      var j = {
        color: [c, F],
        background: [c, F, "background-color"],
        "outline-color": [c, F],
        "border-color": [c, F],
        "border-top-color": [c, F],
        "border-right-color": [c, F],
        "border-bottom-color": [c, F],
        "border-left-color": [c, F],
        "border-width": [E, x],
        "border-top-width": [E, x],
        "border-right-width": [E, x],
        "border-bottom-width": [E, x],
        "border-left-width": [E, x],
        "border-spacing": [E, x],
        "letter-spacing": [E, x],
        margin: [E, x],
        "margin-top": [E, x],
        "margin-right": [E, x],
        "margin-bottom": [E, x],
        "margin-left": [E, x],
        padding: [E, x],
        "padding-top": [E, x],
        "padding-right": [E, x],
        "padding-bottom": [E, x],
        "padding-left": [E, x],
        "outline-width": [E, x],
        opacity: [E, "number"],
        top: [E, V],
        right: [E, V],
        bottom: [E, V],
        left: [E, V],
        "font-size": [E, V],
        "text-indent": [E, V],
        "word-spacing": [E, V],
        width: [E, V],
        "min-width": [E, V],
        "max-width": [E, V],
        height: [E, V],
        "min-height": [E, V],
        "max-height": [E, V],
        "line-height": [E, "unitless"],
        "scroll-top": [N, "number", "scrollTop"],
        "scroll-left": [N, "number", "scrollLeft"]
      };
      var ue = {};
      if (W.transform) {
        j.transform = [S];
        ue = {
          x: [V, "translateX"],
          y: [V, "translateY"],
          rotate: [K],
          rotateX: [K],
          rotateY: [K],
          scale: ["number"],
          scaleX: ["number"],
          scaleY: ["number"],
          skew: [K],
          skewX: [K],
          skewY: [K]
        };
      }
      if (W.transform && W.backface) {
        ue.z = [V, "translateZ"];
        ue.rotateZ = [K];
        ue.scaleZ = ["number"];
        ue.perspective = [x];
      }
      var ve = /ms/;
      var Le = /s|\./;
      return e.tram = t;
    }(window.jQuery);
  });
  var so = u((sA, oo) => {
    "use strict";

    var C0 = window.$;
    var w0 = Ba() && C0.tram;
    oo.exports = function () {
      var e = {
        VERSION: "1.6.0-Webflow"
      };
      var t = {};
      var n = Array.prototype;
      var a = Object.prototype;
      var o = n.slice;
      var d = a.hasOwnProperty;
      var b = n.forEach;
      var f = n.map;
      var m = n.filter;
      var R = n.some;
      var L = n.indexOf;
      var F = Object.keys;
      var V = e.each = e.forEach = function (v, k, D) {
        if (v == null) {
          return v;
        }
        if (b && v.forEach === b) {
          v.forEach(k, D);
        } else if (v.length === +v.length) {
          var W = 0;
          for (var te = v.length; W < te; W++) {
            if (k.call(D, v[W], W, v) === t) {
              return;
            }
          }
        } else {
          var ae = e.keys(v);
          var W = 0;
          for (var te = ae.length; W < te; W++) {
            if (k.call(D, v[ae[W]], ae[W], v) === t) {
              return;
            }
          }
        }
        return v;
      };
      e.map = e.collect = function (v, k, D) {
        var W = [];
        return v == null ? W : f && v.map === f ? v.map(k, D) : (V(v, function (te, ae, de) {
          W.push(k.call(D, te, ae, de));
        }), W);
      };
      e.find = e.detect = function (v, k, D) {
        var W;
        K(v, function (te, ae, de) {
          if (k.call(D, te, ae, de)) {
            W = te;
            return true;
          }
        });
        return W;
      };
      e.filter = e.select = function (v, k, D) {
        var W = [];
        return v == null ? W : m && v.filter === m ? v.filter(k, D) : (V(v, function (te, ae, de) {
          if (k.call(D, te, ae, de)) {
            W.push(te);
          }
        }), W);
      };
      var K = e.some = e.any = function (v, k, D) {
        if (!k) {
          k = e.identity;
        }
        var W = false;
        return v == null ? W : R && v.some === R ? v.some(k, D) : (V(v, function (te, ae, de) {
          if (W || (W = k.call(D, te, ae, de))) {
            return t;
          }
        }), !!W);
      };
      e.contains = e.include = function (v, k) {
        return v == null ? false : L && v.indexOf === L ? v.indexOf(k) != -1 : K(v, function (D) {
          return D === k;
        });
      };
      e.delay = function (v, k) {
        var D = o.call(arguments, 2);
        return setTimeout(function () {
          return v.apply(null, D);
        }, k);
      };
      e.defer = function (v) {
        return e.delay.apply(e, [v, 1].concat(o.call(arguments, 1)));
      };
      e.throttle = function (v) {
        var k;
        var D;
        var W;
        return function () {
          if (!k) {
            k = true;
            D = arguments;
            W = this;
            w0.frame(function () {
              k = false;
              v.apply(W, D);
            });
          }
        };
      };
      e.debounce = function (v, k, D) {
        var W;
        var te;
        var ae;
        var de;
        var ce;
        var O = function () {
          var g = e.now() - de;
          if (g < k) {
            W = setTimeout(O, k - g);
          } else {
            W = null;
            if (!D) {
              ce = v.apply(ae, te);
              ae = te = null;
            }
          }
        };
        return function () {
          ae = this;
          te = arguments;
          de = e.now();
          var g = D && !W;
          if (!W) {
            W = setTimeout(O, k);
          }
          if (g) {
            ce = v.apply(ae, te);
            ae = te = null;
          }
          return ce;
        };
      };
      e.defaults = function (v) {
        if (!e.isObject(v)) {
          return v;
        }
        var k = 1;
        for (var D = arguments.length; k < D; k++) {
          var W = arguments[k];
          for (var te in W) if (v[te] === undefined) {
            v[te] = W[te];
          }
        }
        return v;
      };
      e.keys = function (v) {
        if (!e.isObject(v)) {
          return [];
        }
        if (F) {
          return F(v);
        }
        var k = [];
        for (var D in v) if (e.has(v, D)) {
          k.push(D);
        }
        return k;
      };
      e.has = function (v, k) {
        return d.call(v, k);
      };
      e.isObject = function (v) {
        return v === Object(v);
      };
      e.now = Date.now || function () {
        return new Date().getTime();
      };
      e.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
      };
      var z = /(.)^/;
      var Z = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var ee = /\\|'|\r|\n|\u2028|\u2029/g;
      var Q = function (v) {
        return "\\" + Z[v];
      };
      var M = /^\s*(\w|\$)+\s*$/;
      e.template = function (v, k, D) {
        if (!k && D) {
          k = D;
        }
        k = e.defaults({}, k, e.templateSettings);
        var W = RegExp([(k.escape || z).source, (k.interpolate || z).source, (k.evaluate || z).source].join("|") + "|$", "g");
        var te = 0;
        var ae = "__p+='";
        v.replace(W, function (g, E, c, N, S) {
          ae += v.slice(te, S).replace(ee, Q);
          te = S + g.length;
          if (E) {
            ae += `'+
((__t=(` + E + `))==null?'':_.escape(__t))+
'`;
          } else if (c) {
            ae += `'+
((__t=(` + c + `))==null?'':__t)+
'`;
          } else if (N) {
            ae += `';
` + N + `
__p+='`;
          }
          return g;
        });
        ae += `';
`;
        var de = k.variable;
        if (de) {
          if (!M.test(de)) {
            throw new Error("variable is not a bare identifier: " + de);
          }
        } else {
          ae = `with(obj||{}){
` + ae + `}
`;
          de = "obj";
        }
        ae = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + ae + `return __p;
`;
        var ce;
        try {
          ce = new Function(k.variable || "obj", "_", ae);
        } catch (g) {
          g.source = ae;
          throw g;
        }
        var O = function (g) {
          return ce.call(this, g, e);
        };
        O.source = "function(" + de + `){
` + ae + "}";
        return O;
      };
      return e;
    }();
  });
  var Ne = u((lA, To) => {
    "use strict";

    var Ie = {};
    var Lt = {};
    var ht = [];
    var Fa = window.Webflow || [];
    var at = window.jQuery;
    var Ge = at(window);
    var B0 = at(document);
    var He = at.isFunction;
    var Pe = Ie._ = so();
    var co = Ie.tram = Ba() && at.tram;
    var Rn = false;
    var Ua = false;
    co.config.hideBackface = false;
    co.config.keepInherited = true;
    Ie.define = function (e, t, n) {
      if (Lt[e]) {
        uo(Lt[e]);
      }
      var a = Lt[e] = t(at, Pe, n) || {};
      fo(a);
      return a;
    };
    Ie.require = function (e) {
      return Lt[e];
    };
    function fo(e) {
      if (Ie.env()) {
        if (He(e.design)) {
          Ge.on("__wf_design", e.design);
        }
        if (He(e.preview)) {
          Ge.on("__wf_preview", e.preview);
        }
      }
      if (He(e.destroy)) {
        Ge.on("__wf_destroy", e.destroy);
      }
      if (e.ready && He(e.ready)) {
        k0(e);
      }
    }
    function k0(e) {
      if (Rn) {
        e.ready();
        return;
      }
      if (!Pe.contains(ht, e.ready)) {
        ht.push(e.ready);
      }
    }
    function uo(e) {
      if (He(e.design)) {
        Ge.off("__wf_design", e.design);
      }
      if (He(e.preview)) {
        Ge.off("__wf_preview", e.preview);
      }
      if (He(e.destroy)) {
        Ge.off("__wf_destroy", e.destroy);
      }
      if (e.ready && He(e.ready)) {
        F0(e);
      }
    }
    function F0(e) {
      ht = Pe.filter(ht, function (t) {
        return t !== e.ready;
      });
    }
    Ie.push = function (e) {
      if (Rn) {
        if (He(e)) {
          e();
        }
        return;
      }
      Fa.push(e);
    };
    Ie.env = function (e) {
      var t = window.__wf_design;
      var n = typeof t < "u";
      if (!e) {
        return n;
      }
      if (e === "design") {
        return n && t;
      }
      if (e === "preview") {
        return n && !t;
      }
      if (e === "slug") {
        return n && window.__wf_slug;
      }
      if (e === "editor") {
        return window.WebflowEditor;
      }
      if (e === "test") {
        return window.__wf_test;
      }
      if (e === "frame") {
        return window !== window.top;
      }
    };
    var hn = navigator.userAgent.toLowerCase();
    var po = Ie.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch;
    var U0 = Ie.env.chrome = /chrome/.test(hn) && /Google/.test(navigator.vendor) && parseInt(hn.match(/chrome\/(\d+)\./)[1], 10);
    var V0 = Ie.env.ios = /(ipod|iphone|ipad)/.test(hn);
    Ie.env.safari = /safari/.test(hn) && !U0 && !V0;
    var ka;
    if (po) {
      B0.on("touchstart mousedown", function (e) {
        ka = e.target;
      });
    }
    Ie.validClick = po ? function (e) {
      return e === ka || at.contains(e, ka);
    } : function () {
      return true;
    };
    Ie.resize = Va(Ge, "resize.webflow orientationchange.webflow load.webflow");
    Ie.scroll = Va(Ge, "scroll.webflow resize.webflow orientationchange.webflow load.webflow");
    Ie.redraw = Va();
    function Va(e, t) {
      var n = [];
      var a = {
        up: Pe.throttle(function (r) {
          Pe.each(n, function (i) {
            i(r);
          });
        })
      };
      if (e && t) {
        e.on(t, a.up);
      }
      a.on = function (r) {
        if (typeof r == "function") {
          if (!Pe.contains(n, r)) {
            n.push(r);
          }
        }
      };
      a.off = function (r) {
        if (!arguments.length) {
          n = [];
          return;
        }
        n = Pe.filter(n, function (i) {
          return i !== r;
        });
      };
      return a;
    }
    Ie.location = function (e) {
      window.location = e;
    };
    if (Ie.env()) {
      Ie.location = function () {};
    }
    Ie.ready = function () {
      Rn = true;
      if (Ua) {
        D0();
      } else {
        Pe.each(ht, lo);
      }
      Pe.each(Fa, lo);
      Ie.resize.up();
    };
    function lo(e) {
      if (He(e)) {
        e();
      }
    }
    function D0() {
      Ua = false;
      Pe.each(Lt, fo);
    }
    var pt;
    Ie.load = function (e) {
      pt.then(e);
    };
    function Io() {
      if (pt) {
        pt.reject();
        Ge.off("load", pt.resolve);
      }
      pt = new at.Deferred();
      Ge.on("load", pt.resolve);
    }
    Ie.destroy = function (e) {
      e = e || {};
      Ua = true;
      Ge.triggerHandler("__wf_destroy");
      if (e.domready != null) {
        Rn = e.domready;
      }
      Pe.each(Lt, uo);
      Ie.resize.off();
      Ie.scroll.off();
      Ie.redraw.off();
      ht = [];
      Fa = [];
      if (pt.state() === "pending") {
        Io();
      }
    };
    at(Ie.ready);
    Io();
    To.exports = window.Webflow = Ie;
  });
  var go = u((cA, mo) => {
    "use strict";

    var yo = Ne();
    yo.define("brand", mo.exports = function (e) {
      var t = {
        ready: function () {
          var T = a.attr("data-wf-status");
          var m = a.attr("data-wf-domain") || "";
          if (/\.webflow\.io$/i.test(m) && o.hostname !== m) {
            T = true;
          }
          if (T && !s) {
            d = d || f();
            y();
            setTimeout(y, 500);
            e(document).off("fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange", b).on("fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange", b);
          }
        }
      };
      var a = e("html");
      var r = e("body");
      var o = window.location;
      var s = /PhantomJS/i.test(navigator.userAgent);
      var d;
      function b() {
        var T = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement || !!document.webkitFullscreenElement;
        e(d).attr("style", T ? "display: none !important;" : "");
      }
      function f() {
        var T = e("<a class=\"w-webflow-badge\"></a>").attr("href", "https://webflow.com?utm_campaign=brandjs");
        var m = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
          marginRight: "4px",
          width: "26px"
        });
        var _ = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
        T.append(m, _);
        return T[0];
      }
      function y() {
        var T = r.children(".w-webflow-badge");
        var m = T.length && T.get(0) === d;
        var _ = yo.env("editor");
        if (m) {
          if (_) {
            T.remove();
          }
          return;
        }
        if (T.length) {
          T.remove();
        }
        if (!_) {
          r.append(d);
        }
      }
      return t;
    });
  });
  var vo = u((dA, bo) => {
    "use strict";

    var Rt = Ne();
    Rt.define("links", bo.exports = function (e, t) {
      var n = {};
      var a = e(window);
      var r;
      var i = Rt.env();
      var o = window.location;
      var s = document.createElement("a");
      var d = /index\.(html|php)$/;
      var b = /\/$/;
      var f;
      var y;
      n.ready = n.design = n.preview = T;
      function T() {
        r = i && Rt.env("design");
        y = Rt.env("slug") || o.pathname || "";
        Rt.scroll.off(_);
        f = [];
        var L = document.links;
        for (var w = 0; w < L.length; ++w) {
          m(L[w]);
        }
        if (f.length) {
          Rt.scroll.on(_);
          _();
        }
      }
      function m(L) {
        if (!L.getAttribute("hreflang")) {
          var w = r && L.getAttribute("href-disabled") || L.getAttribute("href");
          s.href = w;
          if (!(w.indexOf(":") >= 0)) {
            var B = e(L);
            if (s.hash.length > 1 && s.host + s.pathname === o.host + o.pathname) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) {
                return;
              }
              var F = e(s.hash);
              if (F.length) {
                f.push({
                  link: B,
                  sec: F,
                  active: false
                });
              }
              return;
            }
            if (!(w === "#" || w === "")) {
              var x = s.href === o.href || w === y || d.test(w) && b.test(y);
              R(B, "w--current", x);
            }
          }
        }
      }
      function _() {
        var L = a.scrollTop();
        var w = a.height();
        t.each(f, function (B) {
          if (!B.link.attr("hreflang")) {
            var F = B.link;
            var x = B.sec;
            var V = x.offset().top;
            var K = x.outerHeight();
            var z = w * .5;
            var Z = x.is(":visible") && V + K - z >= L && V + z <= L + w;
            if (B.active !== Z) {
              B.active = Z;
              R(F, "w--current", Z);
            }
          }
        });
      }
      function R(L, w, B) {
        var F = L.hasClass(w);
        if (!(B && F || !B && !F)) {
          if (B) {
            L.addClass(w);
          } else {
            L.removeClass(w);
          }
        }
      }
      return n;
    });
  });
  var _o = u((fA, Oo) => {
    "use strict";

    var Nn = Ne();
    Nn.define("scroll", Oo.exports = function (e) {
      var t = {
        WF_CLICK_EMPTY: "click.wf-empty-link",
        WF_CLICK_SCROLL: "click.wf-scroll"
      };
      var n = window.location;
      var a = m() ? null : window.history;
      var r = e(window);
      var i = e(document);
      var o = e(document.body);
      var s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (M) {
        window.setTimeout(M, 15);
      };
      var l = Nn.env("editor") ? ".w-editor-body" : "body";
      var d = "header, " + l + " > .header, " + l + " > .w-nav:not([data-no-scroll])";
      var T = document.createElement("style");
      T.appendChild(document.createTextNode(".wf-force-outline-none[tabindex=\"-1\"]:focus{outline:none;}"));
      function m() {
        try {
          return !!window.frameElement;
        } catch {
          return true;
        }
      }
      var _ = /^#[a-zA-Z0-9][\w:.-]*$/;
      let L = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
      function B(M, v) {
        var k;
        switch (v) {
          case "add":
            k = M.attr("tabindex");
            if (k) {
              M.attr("data-wf-tabindex-swap", k);
            } else {
              M.attr("tabindex", "-1");
            }
            break;
          case "remove":
            k = M.attr("data-wf-tabindex-swap");
            if (k) {
              M.attr("tabindex", k);
              M.removeAttr("data-wf-tabindex-swap");
            } else {
              M.removeAttr("tabindex");
            }
            break;
        }
        M.toggleClass("wf-force-outline-none", v === "add");
      }
      function F(M) {
        var v = M.currentTarget;
        if (!(Nn.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(v.className))) {
          var k = _.test(v.hash) && v.host + v.pathname === n.host + n.pathname ? v.hash : "";
          if (k !== "") {
            var D = e(k);
            if (D.length) {
              if (M) {
                M.preventDefault();
                M.stopPropagation();
              }
              x(k, M);
              window.setTimeout(function () {
                V(D, function () {
                  B(D, "add");
                  D.get(0).focus({
                    preventScroll: true
                  });
                  B(D, "remove");
                });
              }, M ? 0 : 300);
            }
          }
        }
      }
      function x(M) {
        if (n.hash !== M && a && a.pushState && !(Nn.env.chrome && n.protocol === "file:")) {
          var v = a.state && a.state.hash;
          if (v !== M) {
            a.pushState({
              hash: M
            }, "", M);
          }
        }
      }
      function V(M, v) {
        var k = r.scrollTop();
        var D = K(M);
        if (k !== D) {
          var W = z(M, k, D);
          var te = Date.now();
          var ae = function () {
            var de = Date.now() - te;
            window.scroll(0, de > W ? D : k + (D - k) * (de / W < .5 ? 4 * (de / W) * (de / W) * (de / W) : (de / W - 1) * (2 * (de / W) - 2) * (2 * (de / W) - 2) + 1));
            if (de <= W) {
              s(ae);
            } else if (typeof v == "function") {
              v();
            }
          };
          s(ae);
        }
      }
      function K(M) {
        var v = e(d);
        var k = v.css("position") === "fixed" ? v.outerHeight() : 0;
        var D = M.offset().top - k;
        if (M.data("scroll") === "mid") {
          var W = r.height() - k;
          var te = M.outerHeight();
          if (te < W) {
            D -= Math.round((W - te) / 2);
          }
        }
        return D;
      }
      function z(M, v, k) {
        if (document.body.getAttribute("data-wf-scroll-motion") === "none" || L.matches) {
          return 0;
        }
        var D = 1;
        o.add(M).each(function (W, te) {
          var ae = parseFloat(te.getAttribute("data-scroll-time"));
          if (!isNaN(ae) && ae >= 0) {
            D = ae;
          }
        });
        return (472.143 * Math.log(Math.abs(v - k) + 125) - 2e3) * D;
      }
      function Q() {
        var {
          WF_CLICK_EMPTY: M,
          WF_CLICK_SCROLL: v
        } = t;
        i.on(v, "a[href*=\"#\"]:not(.w-tab-link):not(a[href=\"#\"])", F);
        i.on(M, "a[href=\"#\"]", function (k) {
          k.preventDefault();
        });
        document.head.insertBefore(T, document.head.firstChild);
      }
      return {
        ready: Q
      };
    });
  });
  var Ro = u((uA, ho) => {
    "use strict";

    var Lo = Ne();
    Lo.define("focus", ho.exports = function () {
      var e = [];
      var t = false;
      function n(o) {
        if (t) {
          o.preventDefault();
          o.stopPropagation();
          o.stopImmediatePropagation();
          e.unshift(o);
        }
      }
      function a(o) {
        var s = o.target;
        var l = s.tagName;
        return /^a$/i.test(l) && s.href != null || /^(button|textarea)$/i.test(l) && s.disabled !== true || /^input$/i.test(l) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(l) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(l) || /^video$/i.test(l) && s.controls === true;
      }
      function r(o) {
        if (a(o)) {
          t = true;
          setTimeout(() => {
            t = false;
            for (o.target.focus(); e.length > 0;) {
              var s = e.pop();
              s.target.dispatchEvent(new MouseEvent(s.type, s));
            }
          }, 0);
        }
      }
      function i() {
        if (typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Lo.env.safari) {
          document.addEventListener("mousedown", r, true);
          document.addEventListener("mouseup", n, true);
          document.addEventListener("click", n, true);
        }
      }
      return {
        ready: i
      };
    });
  });
  var So = u((pA, No) => {
    "use strict";

    var P0 = Ne();
    P0.define("focus-visible", No.exports = function () {
      function e(n) {
        var a = true;
        var r = false;
        var i = null;
        var o = {
          text: true,
          search: true,
          url: true,
          tel: true,
          email: true,
          password: true,
          number: true,
          date: true,
          month: true,
          week: true,
          time: true,
          datetime: true,
          "datetime-local": true
        };
        function l(B) {
          var F = B.type;
          var x = B.tagName;
          return !!(x === "INPUT" && o[F] && !B.readOnly || x === "TEXTAREA" && !B.readOnly || B.isContentEditable);
        }
        function d(B) {
          if (!B.getAttribute("data-wf-focus-visible")) {
            B.setAttribute("data-wf-focus-visible", "true");
          }
        }
        function b(B) {
          if (B.getAttribute("data-wf-focus-visible")) {
            B.removeAttribute("data-wf-focus-visible");
          }
        }
        function f(B) {
          if (!(B.metaKey || B.altKey || B.ctrlKey)) {
            if (!!(n.activeElement && n.activeElement !== document && n.activeElement.nodeName !== "HTML" && n.activeElement.nodeName !== "BODY" && "classList" in n.activeElement && "contains" in n.activeElement.classList)) {
              d(n.activeElement);
            }
            a = true;
          }
        }
        function y() {
          a = false;
        }
        function T(B) {
          if (!!(B.target && B.target !== document && B.target.nodeName !== "HTML" && B.target.nodeName !== "BODY" && "classList" in B.target && "contains" in B.target.classList) && (a || l(B.target))) {
            d(B.target);
          }
        }
        function m(B) {
          if (!!(B.target && B.target !== document && B.target.nodeName !== "HTML" && B.target.nodeName !== "BODY" && "classList" in B.target && "contains" in B.target.classList) && B.target.hasAttribute("data-wf-focus-visible")) {
            r = true;
            window.clearTimeout(i);
            i = window.setTimeout(function () {
              r = false;
            }, 100);
            b(B.target);
          }
        }
        function _() {
          if (document.visibilityState === "hidden") {
            if (r) {
              a = true;
            }
            R();
          }
        }
        function R() {
          document.addEventListener("mousemove", w);
          document.addEventListener("mousedown", w);
          document.addEventListener("mouseup", w);
          document.addEventListener("pointermove", w);
          document.addEventListener("pointerdown", w);
          document.addEventListener("pointerup", w);
          document.addEventListener("touchmove", w);
          document.addEventListener("touchstart", w);
          document.addEventListener("touchend", w);
        }
        function L() {
          document.removeEventListener("mousemove", w);
          document.removeEventListener("mousedown", w);
          document.removeEventListener("mouseup", w);
          document.removeEventListener("pointermove", w);
          document.removeEventListener("pointerdown", w);
          document.removeEventListener("pointerup", w);
          document.removeEventListener("touchmove", w);
          document.removeEventListener("touchstart", w);
          document.removeEventListener("touchend", w);
        }
        function w(B) {
          if (!(B.target.nodeName && B.target.nodeName.toLowerCase() === "html")) {
            a = false;
            L();
          }
        }
        document.addEventListener("keydown", f, true);
        document.addEventListener("mousedown", y, true);
        document.addEventListener("pointerdown", y, true);
        document.addEventListener("touchstart", y, true);
        document.addEventListener("visibilitychange", _, true);
        R();
        n.addEventListener("focus", T, true);
        n.addEventListener("blur", m, true);
      }
      function t() {
        if (typeof document < "u") {
          try {
            document.querySelector(":focus-visible");
          } catch {
            e(document);
          }
        }
      }
      return {
        ready: t
      };
    });
  });
  var Mo = u((EA, Ao) => {
    "use strict";

    var G0 = Ne();
    G0.define("touch", Ao.exports = function (e) {
      var t = {};
      var n = window.getSelection;
      e.event.special.tap = {
        bindType: "click",
        delegateType: "click"
      };
      t.init = function (i) {
        i = typeof i == "string" ? e(i).get(0) : i;
        return i ? new a(i) : null;
      };
      function a(i) {
        var o = false;
        var s = false;
        var l = Math.min(Math.round(window.innerWidth * .04), 40);
        var d;
        var b;
        i.addEventListener("touchstart", f, false);
        i.addEventListener("touchmove", y, false);
        i.addEventListener("touchend", T, false);
        i.addEventListener("touchcancel", m, false);
        i.addEventListener("mousedown", f, false);
        i.addEventListener("mousemove", y, false);
        i.addEventListener("mouseup", T, false);
        i.addEventListener("mouseout", m, false);
        function f(R) {
          var L = R.touches;
          if (!(L && L.length > 1)) {
            o = true;
            if (L) {
              s = true;
              d = L[0].clientX;
            } else {
              d = R.clientX;
            }
            b = d;
          }
        }
        function y(R) {
          if (o) {
            if (s && R.type === "mousemove") {
              R.preventDefault();
              R.stopPropagation();
              return;
            }
            var L = R.touches;
            var w = L ? L[0].clientX : R.clientX;
            var B = w - b;
            b = w;
            if (Math.abs(B) > l && n && String(n()) === "") {
              r("swipe", R, {
                direction: B > 0 ? "right" : "left"
              });
              m();
            }
          }
        }
        function T(R) {
          if (o && (o = false, s && R.type === "mouseup")) {
            R.preventDefault();
            R.stopPropagation();
            s = false;
            return;
          }
        }
        function m() {
          o = false;
        }
        function _() {
          i.removeEventListener("touchstart", f, false);
          i.removeEventListener("touchmove", y, false);
          i.removeEventListener("touchend", T, false);
          i.removeEventListener("touchcancel", m, false);
          i.removeEventListener("mousedown", f, false);
          i.removeEventListener("mousemove", y, false);
          i.removeEventListener("mouseup", T, false);
          i.removeEventListener("mouseout", m, false);
          i = null;
        }
        this.destroy = _;
      }
      function r(i, o, s) {
        var l = e.Event(i, {
          originalEvent: o
        });
        e(o.target).trigger(l, s);
      }
      t.instance = t.init(document);
      return t;
    });
  });
  var wo = u((IA, Co) => {
    "use strict";

    var xa = Ne();
    xa.define("edit", Co.exports = function (e, t, n) {
      n = n || {};
      if ((xa.env("test") || xa.env("frame")) && !n.fixture && !q0()) {
        return {
          exit: 1
        };
      }
      var a = {};
      var r = e(window);
      var i = e(document.documentElement);
      var o = document.location;
      var l;
      var d = n.load || y;
      var b = false;
      try {
        b = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor");
      } catch {}
      if (b) {
        d();
      } else if (o.search) {
        if (/[?&](edit)(?:[=&?]|$)/.test(o.search) || /\?edit$/.test(o.href)) {
          d();
        }
      } else {
        r.on("hashchange", f).triggerHandler("hashchange");
      }
      function f() {
        if (!l) {
          if (/\?edit/.test(o.hash)) {
            d();
          }
        }
      }
      function y() {
        l = true;
        window.WebflowEditor = true;
        r.off("hashchange", f);
        w(function (F) {
          e.ajax({
            url: "https://editor-api.webflow.com/api/editor/view".replace(/([^:])\/\//g, "$1/"),
            data: {
              siteId: i.attr("data-wf-site")
            },
            xhrFields: {
              withCredentials: true
            },
            dataType: "json",
            crossDomain: true,
            success: T(F)
          });
        });
      }
      function T(F) {
        return function (x) {
          if (!x) {
            console.error("Could not load editor data");
            return;
          }
          x.thirdPartyCookiesSupported = F;
          m(x.scriptPath.indexOf("//") >= 0 ? x.scriptPath : ("https://editor-api.webflow.com" + x.scriptPath).replace(/([^:])\/\//g, "$1/"), function () {
            window.WebflowEditor(x);
          });
        };
      }
      function m(F, x) {
        e.ajax({
          type: "GET",
          url: F,
          dataType: "script",
          cache: true
        }).then(x, _);
      }
      function _(F, x, V) {
        console.error("Could not load editor script: " + x);
        throw V;
      }
      function w(F) {
        var x = window.document.createElement("iframe");
        x.src = "https://webflow.com/site/third-party-cookie-check.html";
        x.style.display = "none";
        x.sandbox = "allow-scripts allow-same-origin";
        var V = function (K) {
          if (K.data === "WF_third_party_cookies_unsupported") {
            B(x, V);
            F(false);
          } else if (K.data === "WF_third_party_cookies_supported") {
            B(x, V);
            F(true);
          }
        };
        x.onerror = function () {
          B(x, V);
          F(false);
        };
        window.addEventListener("message", V, false);
        window.document.body.appendChild(x);
      }
      function B(F, x) {
        window.removeEventListener("message", x, false);
        F.remove();
      }
      return a;
    });
    function q0() {
      try {
        return window.top.__Cypress__;
      } catch {
        return false;
      }
    }
  });
  var Da = u((TA, Bo) => {
    var W0 = typeof global == "object" && global && global.Object === Object && global;
    Bo.exports = W0;
  });
  var qe = u((yA, ko) => {
    var Q0 = Da();
    var H0 = typeof self == "object" && self && self.Object === Object && self;
    var X0 = Q0 || H0 || Function("return this")();
    ko.exports = X0;
  });
  var Nt = u((mA, Fo) => {
    var Y0 = qe();
    var z0 = Y0.Symbol;
    Fo.exports = z0;
  });
  var Do = u((gA, xo) => {
    var Uo = Nt();
    var Vo = Object.prototype;
    var j0 = Vo.hasOwnProperty;
    var K0 = Vo.toString;
    var $t = Uo ? Uo.toStringTag : undefined;
    function $0(e) {
      var t = j0.call(e, $t);
      var n = e[$t];
      try {
        e[$t] = undefined;
      } catch {}
      var r = K0.call(e);
      if (t) {
        e[$t] = n;
      } else {
        delete e[$t];
      }
      return r;
    }
    xo.exports = $0;
  });
  var Go = u((bA, Po) => {
    var Z0 = Object.prototype;
    var J0 = Z0.toString;
    function eT(e) {
      return J0.call(e);
    }
    Po.exports = eT;
  });
  var it = u((vA, Qo) => {
    var qo = Nt();
    var tT = Do();
    var nT = Go();
    var Wo = qo ? qo.toStringTag : undefined;
    function rT(e) {
      return e == null ? e === undefined ? "[object Undefined]" : "[object Null]" : Wo && Wo in Object(e) ? tT(e) : nT(e);
    }
    Qo.exports = rT;
  });
  var Pa = u((OA, Ho) => {
    function oT(e, t) {
      return function (n) {
        return e(t(n));
      };
    }
    Ho.exports = oT;
  });
  var Ga = u((_A, Xo) => {
    var sT = Pa();
    var lT = sT(Object.getPrototypeOf, Object);
    Xo.exports = lT;
  });
  var et = u((LA, Yo) => {
    function cT(e) {
      return e != null && typeof e == "object";
    }
    Yo.exports = cT;
  });
  var qa = u((hA, jo) => {
    var dT = it();
    var fT = Ga();
    var uT = et();
    var ET = Function.prototype;
    var IT = Object.prototype;
    var zo = ET.toString;
    var TT = IT.hasOwnProperty;
    var yT = zo.call(Object);
    function mT(e) {
      if (!uT(e) || dT(e) != "[object Object]") {
        return false;
      }
      var t = fT(e);
      if (t === null) {
        return true;
      }
      var n = TT.call(t, "constructor") && t.constructor;
      return typeof n == "function" && n instanceof n && zo.call(n) == yT;
    }
    jo.exports = mT;
  });
  var Ko = u(Wa => {
    "use strict";

    Object.defineProperty(Wa, "__esModule", {
      value: true
    });
    Wa.default = gT;
    function gT(e) {
      var t;
      var n = e.Symbol;
      if (typeof n == "function") {
        if (n.observable) {
          t = n.observable;
        } else {
          t = n("observable");
          n.observable = t;
        }
      } else {
        t = "@@observable";
      }
      return t;
    }
  });
  var $o = u((Ha, Qa) => {
    "use strict";

    Object.defineProperty(Ha, "__esModule", {
      value: true
    });
    var bT = Ko();
    var vT = bT && bT.__esModule ? bT : {
      default: bT
    };
    var St;
    if (typeof self < "u") {
      St = self;
    } else if (typeof window < "u") {
      St = window;
    } else if (typeof global < "u") {
      St = global;
    } else if (typeof Qa < "u") {
      St = Qa;
    } else {
      St = Function("return this")();
    }
    0;
    var _T = vT.default(St);
    Ha.default = _T;
  });
  var Xa = u(Zt => {
    "use strict";

    Zt.__esModule = true;
    Zt.ActionTypes = undefined;
    Zt.default = ts;
    var LT = qa();
    var hT = LT && LT.__esModule ? LT : {
      default: LT
    };
    var RT = $o();
    var Zo = RT && RT.__esModule ? RT : {
      default: RT
    };
    var Jo = Zt.ActionTypes = {
      INIT: "@@redux/INIT"
    };
    function ts(e, t, n) {
      var a;
      if (typeof t == "function" && typeof n > "u") {
        n = t;
        t = undefined;
      }
      if (typeof n < "u") {
        if (typeof n != "function") {
          throw new Error("Expected the enhancer to be a function.");
        }
        return n(ts)(e, t);
      }
      if (typeof e != "function") {
        throw new Error("Expected the reducer to be a function.");
      }
      var r = e;
      var i = t;
      var o = [];
      var s = o;
      var l = false;
      function d() {
        if (s === o) {
          s = o.slice();
        }
      }
      function b() {
        return i;
      }
      function f(_) {
        if (typeof _ != "function") {
          throw new Error("Expected listener to be a function.");
        }
        var R = true;
        d();
        s.push(_);
        return function () {
          if (R) {
            R = false;
            d();
            var w = s.indexOf(_);
            s.splice(w, 1);
          }
        };
      }
      function y(_) {
        0;
        if (!hT.default(_)) {
          throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
        }
        if (typeof _.type > "u") {
          throw new Error("Actions may not have an undefined \"type\" property. Have you misspelled a constant?");
        }
        if (l) {
          throw new Error("Reducers may not dispatch actions.");
        }
        try {
          l = true;
          i = r(i, _);
        } finally {
          l = false;
        }
        var R = o = s;
        for (var L = 0; L < R.length; L++) {
          R[L]();
        }
        return _;
      }
      function T(_) {
        if (typeof _ != "function") {
          throw new Error("Expected the nextReducer to be a function.");
        }
        r = _;
        y({
          type: Jo.INIT
        });
      }
      function m() {
        var _;
        _ = {
          subscribe: function (w) {
            if (typeof w != "object") {
              throw new TypeError("Expected the observer to be an object.");
            }
            function B() {
              if (w.next) {
                w.next(i);
              }
            }
            B();
            var F = f(B);
            return {
              unsubscribe: F
            };
          }
        };
        _[Zo.default] = function () {
          return this;
        };
        return _;
      }
      y({
        type: Jo.INIT
      });
      a = {
        dispatch: y,
        subscribe: f,
        getState: b,
        replaceReducer: T
      };
      a[Zo.default] = m;
      return a;
    }
  });
  var is = u(ja => {
    "use strict";

    ja.__esModule = true;
    ja.default = wT;
    var ns = Xa();
    function MT(e, t) {
      var n = t && t.type;
      var a = n && "\"" + n.toString() + "\"" || "an action";
      return "Given action " + a + ", reducer \"" + e + "\" returned undefined. To ignore an action, you must explicitly return the previous state.";
    }
    function CT(e) {
      Object.keys(e).forEach(function (t) {
        var n = e[t];
        var a = n(undefined, {
          type: ns.ActionTypes.INIT
        });
        if (typeof a > "u") {
          throw new Error("Reducer \"" + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.");
        }
        var r = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
        if (typeof n(undefined, {
          type: r
        }) > "u") {
          throw new Error("Reducer \"" + t + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ns.ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.");
        }
      });
    }
    function wT(e) {
      var t = Object.keys(e);
      var n = {};
      for (var a = 0; a < t.length; a++) {
        var r = t[a];
        if (typeof e[r] == "function") {
          n[r] = e[r];
        }
      }
      var i = Object.keys(n);
      var s;
      try {
        CT(n);
      } catch (l) {
        s = l;
      }
      return function () {
        var d = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
        var b = arguments[1];
        if (s) {
          throw s;
        }
        var y = false;
        var T = {};
        for (var m = 0; m < i.length; m++) {
          var _ = i[m];
          var R = n[_];
          var L = d[_];
          var w = R(L, b);
          if (typeof w > "u") {
            var B = MT(_, b);
            throw new Error(B);
          }
          T[_] = w;
          y = y || w !== L;
        }
        return y ? T : d;
      };
    }
  });
  var os = u(Ka => {
    "use strict";

    Ka.__esModule = true;
    Ka.default = BT;
    function rs(e, t) {
      return function () {
        return t(e.apply(undefined, arguments));
      };
    }
    function BT(e, t) {
      if (typeof e == "function") {
        return rs(e, t);
      }
      if (typeof e != "object" || e === null) {
        throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + ". Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
      }
      var n = Object.keys(e);
      var a = {};
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        var o = e[i];
        if (typeof o == "function") {
          a[i] = rs(o, t);
        }
      }
      return a;
    }
  });
  var Za = u($a => {
    "use strict";

    $a.__esModule = true;
    $a.default = kT;
    function kT() {
      var e = arguments.length;
      var t = Array(e);
      for (var n = 0; n < e; n++) {
        t[n] = arguments[n];
      }
      if (t.length === 0) {
        return function (i) {
          return i;
        };
      }
      if (t.length === 1) {
        return t[0];
      }
      var a = t[t.length - 1];
      var r = t.slice(0, -1);
      return function () {
        return r.reduceRight(function (i, o) {
          return o(i);
        }, a.apply(undefined, arguments));
      };
    }
  });
  var ss = u(Ja => {
    "use strict";

    Ja.__esModule = true;
    var FT = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var a in n) if (Object.prototype.hasOwnProperty.call(n, a)) {
          e[a] = n[a];
        }
      }
      return e;
    };
    Ja.default = DT;
    var UT = Za();
    var VT = UT && UT.__esModule ? UT : {
      default: UT
    };
    function DT() {
      var e = arguments.length;
      var t = Array(e);
      for (var n = 0; n < e; n++) {
        t[n] = arguments[n];
      }
      return function (a) {
        return function (r, i, o) {
          var s = a(r, i, o);
          var l = s.dispatch;
          var d = [];
          var b = {
            getState: s.getState,
            dispatch: function (y) {
              return l(y);
            }
          };
          d = t.map(function (f) {
            return f(b);
          });
          l = VT.default.apply(undefined, d)(s.dispatch);
          return FT({}, s, {
            dispatch: l
          });
        };
      };
    }
  });
  var ei = u(Ue => {
    "use strict";

    Ue.__esModule = true;
    Ue.compose = Ue.applyMiddleware = Ue.bindActionCreators = Ue.combineReducers = Ue.createStore = undefined;
    var PT = Xa();
    var GT = PT && PT.__esModule ? PT : {
      default: PT
    };
    var qT = is();
    var WT = qT && qT.__esModule ? qT : {
      default: qT
    };
    var QT = os();
    var HT = QT && QT.__esModule ? QT : {
      default: QT
    };
    var XT = ss();
    var YT = XT && XT.__esModule ? XT : {
      default: XT
    };
    var zT = Za();
    var jT = zT && zT.__esModule ? zT : {
      default: zT
    };
    Ue.createStore = GT.default;
    Ue.combineReducers = WT.default;
    Ue.bindActionCreators = HT.default;
    Ue.applyMiddleware = YT.default;
    Ue.compose = jT.default;
  });
  var ls = u(ti => {
    "use strict";

    Object.defineProperty(ti, "__esModule", {
      value: true
    });
    function $T(e, t) {
      for (var n in t) Object.defineProperty(e, n, {
        enumerable: true,
        get: t[n]
      });
    }
    $T(ti, {
      EventAppliesTo: function () {
        return JT;
      },
      EventBasedOn: function () {
        return ey;
      },
      EventContinuousMouseAxes: function () {
        return ty;
      },
      EventLimitAffectedElements: function () {
        return ny;
      },
      EventTypeConsts: function () {
        return ZT;
      },
      QuickEffectDirectionConsts: function () {
        return iy;
      },
      QuickEffectIds: function () {
        return ay;
      }
    });
    var ZT = {
      NAVBAR_OPEN: "NAVBAR_OPEN",
      NAVBAR_CLOSE: "NAVBAR_CLOSE",
      TAB_ACTIVE: "TAB_ACTIVE",
      TAB_INACTIVE: "TAB_INACTIVE",
      SLIDER_ACTIVE: "SLIDER_ACTIVE",
      SLIDER_INACTIVE: "SLIDER_INACTIVE",
      DROPDOWN_OPEN: "DROPDOWN_OPEN",
      DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
      MOUSE_CLICK: "MOUSE_CLICK",
      MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
      MOUSE_DOWN: "MOUSE_DOWN",
      MOUSE_UP: "MOUSE_UP",
      MOUSE_OVER: "MOUSE_OVER",
      MOUSE_OUT: "MOUSE_OUT",
      MOUSE_MOVE: "MOUSE_MOVE",
      MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
      SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
      SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
      SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
      ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
      ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
      PAGE_START: "PAGE_START",
      PAGE_FINISH: "PAGE_FINISH",
      PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
      PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
      PAGE_SCROLL: "PAGE_SCROLL"
    };
    var JT = {
      ELEMENT: "ELEMENT",
      CLASS: "CLASS",
      PAGE: "PAGE"
    };
    var ey = {
      ELEMENT: "ELEMENT",
      VIEWPORT: "VIEWPORT"
    };
    var ty = {
      X_AXIS: "X_AXIS",
      Y_AXIS: "Y_AXIS"
    };
    var ny = {
      CHILDREN: "CHILDREN",
      SIBLINGS: "SIBLINGS",
      IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
    };
    var ay = {
      FADE_EFFECT: "FADE_EFFECT",
      SLIDE_EFFECT: "SLIDE_EFFECT",
      GROW_EFFECT: "GROW_EFFECT",
      SHRINK_EFFECT: "SHRINK_EFFECT",
      SPIN_EFFECT: "SPIN_EFFECT",
      FLY_EFFECT: "FLY_EFFECT",
      POP_EFFECT: "POP_EFFECT",
      FLIP_EFFECT: "FLIP_EFFECT",
      JIGGLE_EFFECT: "JIGGLE_EFFECT",
      PULSE_EFFECT: "PULSE_EFFECT",
      DROP_EFFECT: "DROP_EFFECT",
      BLINK_EFFECT: "BLINK_EFFECT",
      BOUNCE_EFFECT: "BOUNCE_EFFECT",
      FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
      FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
      RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
      JELLO_EFFECT: "JELLO_EFFECT",
      GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
      SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
      PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
    };
    var iy = {
      LEFT: "LEFT",
      RIGHT: "RIGHT",
      BOTTOM: "BOTTOM",
      TOP: "TOP",
      BOTTOM_LEFT: "BOTTOM_LEFT",
      BOTTOM_RIGHT: "BOTTOM_RIGHT",
      TOP_RIGHT: "TOP_RIGHT",
      TOP_LEFT: "TOP_LEFT",
      CLOCKWISE: "CLOCKWISE",
      COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
    };
  });
  var ai = u(ni => {
    "use strict";

    Object.defineProperty(ni, "__esModule", {
      value: true
    });
    function ry(e, t) {
      for (var n in t) Object.defineProperty(e, n, {
        enumerable: true,
        get: t[n]
      });
    }
    ry(ni, {
      ActionAppliesTo: function () {
        return sy;
      },
      ActionTypeConsts: function () {
        return oy;
      }
    });
    var oy = {
      TRANSFORM_MOVE: "TRANSFORM_MOVE",
      TRANSFORM_SCALE: "TRANSFORM_SCALE",
      TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
      TRANSFORM_SKEW: "TRANSFORM_SKEW",
      STYLE_OPACITY: "STYLE_OPACITY",
      STYLE_SIZE: "STYLE_SIZE",
      STYLE_FILTER: "STYLE_FILTER",
      STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
      STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
      STYLE_BORDER: "STYLE_BORDER",
      STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
      OBJECT_VALUE: "OBJECT_VALUE",
      PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
      PLUGIN_SPLINE: "PLUGIN_SPLINE",
      PLUGIN_RIVE: "PLUGIN_RIVE",
      PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
      GENERAL_DISPLAY: "GENERAL_DISPLAY",
      GENERAL_START_ACTION: "GENERAL_START_ACTION",
      GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
      GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
      GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
      GENERAL_LOOP: "GENERAL_LOOP",
      STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
    };
    var sy = {
      ELEMENT: "ELEMENT",
      ELEMENT_CLASS: "ELEMENT_CLASS",
      TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
    };
  });
  var cs = u(ii => {
    "use strict";

    Object.defineProperty(ii, "__esModule", {
      value: true
    });
    Object.defineProperty(ii, "InteractionTypeConsts", {
      enumerable: true,
      get: function () {
        return ly;
      }
    });
    var ly = {
      MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
      MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
      MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
      SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
      SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
      PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
      PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
      PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
      NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
      DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
      ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
      TAB_INTERACTION: "TAB_INTERACTION",
      SLIDER_INTERACTION: "SLIDER_INTERACTION"
    };
  });
  var ds = u(ri => {
    "use strict";

    Object.defineProperty(ri, "__esModule", {
      value: true
    });
    Object.defineProperty(ri, "ReducedMotionTypes", {
      enumerable: true,
      get: function () {
        return yy;
      }
    });
    var cy = ai();
    var {
      TRANSFORM_MOVE: dy,
      TRANSFORM_SCALE: fy,
      TRANSFORM_ROTATE: uy,
      TRANSFORM_SKEW: py,
      STYLE_SIZE: Ey,
      STYLE_FILTER: Iy,
      STYLE_FONT_VARIATION: Ty
    } = cy.ActionTypeConsts;
    var yy = {
      [dy]: true,
      [fy]: true,
      [uy]: true,
      [py]: true,
      [Ey]: true,
      [Iy]: true,
      [Ty]: true
    };
  });
  var fs = u(oi => {
    "use strict";

    Object.defineProperty(oi, "__esModule", {
      value: true
    });
    function my(e, t) {
      for (var n in t) Object.defineProperty(e, n, {
        enumerable: true,
        get: t[n]
      });
    }
    my(oi, {
      IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
        return "IX2_ACTION_LIST_PLAYBACK_CHANGED";
      },
      IX2_ANIMATION_FRAME_CHANGED: function () {
        return "IX2_ANIMATION_FRAME_CHANGED";
      },
      IX2_CLEAR_REQUESTED: function () {
        return "IX2_CLEAR_REQUESTED";
      },
      IX2_ELEMENT_STATE_CHANGED: function () {
        return "IX2_ELEMENT_STATE_CHANGED";
      },
      IX2_EVENT_LISTENER_ADDED: function () {
        return "IX2_EVENT_LISTENER_ADDED";
      },
      IX2_EVENT_STATE_CHANGED: function () {
        return "IX2_EVENT_STATE_CHANGED";
      },
      IX2_INSTANCE_ADDED: function () {
        return "IX2_INSTANCE_ADDED";
      },
      IX2_INSTANCE_REMOVED: function () {
        return "IX2_INSTANCE_REMOVED";
      },
      IX2_INSTANCE_STARTED: function () {
        return "IX2_INSTANCE_STARTED";
      },
      IX2_MEDIA_QUERIES_DEFINED: function () {
        return "IX2_MEDIA_QUERIES_DEFINED";
      },
      IX2_PARAMETER_CHANGED: function () {
        return "IX2_PARAMETER_CHANGED";
      },
      IX2_PLAYBACK_REQUESTED: function () {
        return "IX2_PLAYBACK_REQUESTED";
      },
      IX2_PREVIEW_REQUESTED: function () {
        return "IX2_PREVIEW_REQUESTED";
      },
      IX2_RAW_DATA_IMPORTED: function () {
        return "IX2_RAW_DATA_IMPORTED";
      },
      IX2_SESSION_INITIALIZED: function () {
        return "IX2_SESSION_INITIALIZED";
      },
      IX2_SESSION_STARTED: function () {
        return "IX2_SESSION_STARTED";
      },
      IX2_SESSION_STOPPED: function () {
        return "IX2_SESSION_STOPPED";
      },
      IX2_STOP_REQUESTED: function () {
        return "IX2_STOP_REQUESTED";
      },
      IX2_TEST_FRAME_RENDERED: function () {
        return "IX2_TEST_FRAME_RENDERED";
      },
      IX2_VIEWPORT_WIDTH_CHANGED: function () {
        return "IX2_VIEWPORT_WIDTH_CHANGED";
      }
    });
  });
  var us = u(si => {
    "use strict";

    Object.defineProperty(si, "__esModule", {
      value: true
    });
    function Dy(e, t) {
      for (var n in t) Object.defineProperty(e, n, {
        enumerable: true,
        get: t[n]
      });
    }
    Dy(si, {
      ABSTRACT_NODE: function () {
        return "ABSTRACT_NODE";
      },
      AUTO: function () {
        return "AUTO";
      },
      BACKGROUND: function () {
        return "background";
      },
      BACKGROUND_COLOR: function () {
        return "backgroundColor";
      },
      BAR_DELIMITER: function () {
        return "|";
      },
      BORDER_COLOR: function () {
        return "borderColor";
      },
      BOUNDARY_SELECTOR: function () {
        return ".w-dyn-item";
      },
      CHILDREN: function () {
        return "CHILDREN";
      },
      COLON_DELIMITER: function () {
        return ":";
      },
      COLOR: function () {
        return "color";
      },
      COMMA_DELIMITER: function () {
        return ",";
      },
      CONFIG_UNIT: function () {
        return "unit";
      },
      CONFIG_VALUE: function () {
        return "value";
      },
      CONFIG_X_UNIT: function () {
        return "xUnit";
      },
      CONFIG_X_VALUE: function () {
        return "xValue";
      },
      CONFIG_Y_UNIT: function () {
        return "yUnit";
      },
      CONFIG_Y_VALUE: function () {
        return "yValue";
      },
      CONFIG_Z_UNIT: function () {
        return "zUnit";
      },
      CONFIG_Z_VALUE: function () {
        return "zValue";
      },
      DISPLAY: function () {
        return "display";
      },
      FILTER: function () {
        return "filter";
      },
      FLEX: function () {
        return "flex";
      },
      FONT_VARIATION_SETTINGS: function () {
        return "font-variation-settings";
      },
      HEIGHT: function () {
        return "height";
      },
      HTML_ELEMENT: function () {
        return "HTML_ELEMENT";
      },
      IMMEDIATE_CHILDREN: function () {
        return "IMMEDIATE_CHILDREN";
      },
      IX2_ID_DELIMITER: function () {
        return "|";
      },
      OPACITY: function () {
        return "opacity";
      },
      PARENT: function () {
        return "PARENT";
      },
      PLAIN_OBJECT: function () {
        return "PLAIN_OBJECT";
      },
      PRESERVE_3D: function () {
        return "preserve-3d";
      },
      RENDER_GENERAL: function () {
        return "RENDER_GENERAL";
      },
      RENDER_PLUGIN: function () {
        return "RENDER_PLUGIN";
      },
      RENDER_STYLE: function () {
        return "RENDER_STYLE";
      },
      RENDER_TRANSFORM: function () {
        return "RENDER_TRANSFORM";
      },
      ROTATE_X: function () {
        return "rotateX";
      },
      ROTATE_Y: function () {
        return "rotateY";
      },
      ROTATE_Z: function () {
        return "rotateZ";
      },
      SCALE_3D: function () {
        return "scale3d";
      },
      SCALE_X: function () {
        return "scaleX";
      },
      SCALE_Y: function () {
        return "scaleY";
      },
      SCALE_Z: function () {
        return "scaleZ";
      },
      SIBLINGS: function () {
        return "SIBLINGS";
      },
      SKEW: function () {
        return "skew";
      },
      SKEW_X: function () {
        return "skewX";
      },
      SKEW_Y: function () {
        return "skewY";
      },
      TRANSFORM: function () {
        return "transform";
      },
      TRANSLATE_3D: function () {
        return "translate3d";
      },
      TRANSLATE_X: function () {
        return "translateX";
      },
      TRANSLATE_Y: function () {
        return "translateY";
      },
      TRANSLATE_Z: function () {
        return "translateZ";
      },
      WF_PAGE: function () {
        return "data-wf-page";
      },
      WIDTH: function () {
        return "width";
      },
      WILL_CHANGE: function () {
        return "willChange";
      },
      W_MOD_IX: function () {
        return "w-mod-ix";
      },
      W_MOD_JS: function () {
        return "w-mod-js";
      }
    });
  });
  var we = u(Et => {
    "use strict";

    Object.defineProperty(Et, "__esModule", {
      value: true
    });
    function q1(e, t) {
      for (var n in t) Object.defineProperty(e, n, {
        enumerable: true,
        get: t[n]
      });
    }
    q1(Et, {
      ActionTypeConsts: function () {
        return Q1.ActionTypeConsts;
      },
      IX2EngineActionTypes: function () {
        return H1;
      },
      IX2EngineConstants: function () {
        return X1;
      },
      QuickEffectIds: function () {
        return W1.QuickEffectIds;
      }
    });
    var W1 = Sn(ls(), Et);
    var Q1 = Sn(ai(), Et);
    Sn(cs(), Et);
    Sn(ds(), Et);
    var H1 = Es(fs());
    var X1 = Es(us());
    function Sn(e, t) {
      Object.keys(e).forEach(function (n) {
        if (n !== "default" && !Object.prototype.hasOwnProperty.call(t, n)) {
          Object.defineProperty(t, n, {
            enumerable: true,
            get: function () {
              return e[n];
            }
          });
        }
      });
      return e;
    }
    function ps(e) {
      if (typeof WeakMap != "function") {
        return null;
      }
      var t = new WeakMap();
      var n = new WeakMap();
      return (ps = function (a) {
        return a ? n : t;
      })(e);
    }
    function Es(e, t) {
      if (!t && e && e.__esModule) {
        return e;
      }
      if (e === null || typeof e != "object" && typeof e != "function") {
        return {
          default: e
        };
      }
      var n = ps(t);
      if (n && n.has(e)) {
        return n.get(e);
      }
      var a = {
        __proto__: null
      };
      var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e) if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
        var o = r ? Object.getOwnPropertyDescriptor(e, i) : null;
        if (o && (o.get || o.set)) {
          Object.defineProperty(a, i, o);
        } else {
          a[i] = e[i];
        }
      }
      a.default = e;
      if (n) {
        n.set(e, a);
      }
      return a;
    }
  });
  var Is = u(li => {
    "use strict";

    Object.defineProperty(li, "__esModule", {
      value: true
    });
    Object.defineProperty(li, "ixData", {
      enumerable: true,
      get: function () {
        return j1;
      }
    });
    var Y1 = we();
    var {
      IX2_RAW_DATA_IMPORTED: z1
    } = Y1.IX2EngineActionTypes;
    var j1 = (e = Object.freeze({}), t) => {
      switch (t.type) {
        case z1:
          return t.payload.ixData || Object.freeze({});
        default:
          return e;
      }
    };
  });
  var Mt = u(me => {
    "use strict";

    Object.defineProperty(me, "__esModule", {
      value: true
    });
    var K1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
      return typeof e;
    } : function (e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    me.clone = Mn;
    me.addLast = ms;
    me.addFirst = gs;
    me.removeLast = bs;
    me.removeFirst = vs;
    me.insert = Os;
    me.removeAt = _s;
    me.replaceAt = Ls;
    me.getIn = Cn;
    me.set = wn;
    me.setIn = Bn;
    me.update = Rs;
    me.updateIn = Ns;
    me.merge = Ss;
    me.mergeDeep = As;
    me.mergeIn = Ms;
    me.omit = Cs;
    me.addDefaults = ws;
    function ys(e) {
      throw new Error(e);
    }
    function ci(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t;
    }
    var $1 = {}.hasOwnProperty;
    function Mn(e) {
      if (Array.isArray(e)) {
        return e.slice();
      }
      var t = ci(e);
      var n = {};
      for (var a = 0; a < t.length; a++) {
        var r = t[a];
        n[r] = e[r];
      }
      return n;
    }
    function Be(e, t, n) {
      var a = n;
      if (a == null) {
        ys("INVALID_ARGS");
      }
      var r = false;
      var i = arguments.length;
      var o = Array(i > 3 ? i - 3 : 0);
      for (var s = 3; s < i; s++) {
        o[s - 3] = arguments[s];
      }
      for (var l = 0; l < o.length; l++) {
        var d = o[l];
        if (d != null) {
          var b = ci(d);
          if (b.length) {
            for (var f = 0; f <= b.length; f++) {
              var y = b[f];
              if (!(e && a[y] !== undefined)) {
                var T = d[y];
                if (t && An(a[y]) && An(T)) {
                  T = Be(e, t, a[y], T);
                }
                if (!(T === undefined || T === a[y])) {
                  if (!r) {
                    r = true;
                    a = Mn(a);
                  }
                  a[y] = T;
                }
              }
            }
          }
        }
      }
      return a;
    }
    function An(e) {
      var t = typeof e > "u" ? "undefined" : K1(e);
      return e != null && (t === "object" || t === "function");
    }
    function ms(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function gs(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function bs(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function vs(e) {
      return e.length ? e.slice(1) : e;
    }
    function Os(e, t, n) {
      return e.slice(0, t).concat(Array.isArray(n) ? n : [n]).concat(e.slice(t));
    }
    function _s(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Ls(e, t, n) {
      if (e[t] === n) {
        return e;
      }
      var a = e.length;
      var r = Array(a);
      for (var i = 0; i < a; i++) {
        r[i] = e[i];
      }
      r[t] = n;
      return r;
    }
    function Cn(e, t) {
      if (!Array.isArray(t)) {
        ys("INVALID_ARGS");
      }
      if (e != null) {
        var n = e;
        for (var a = 0; a < t.length; a++) {
          var r = t[a];
          n = n?.[r];
          if (n === undefined) {
            return n;
          }
        }
        return n;
      }
    }
    function wn(e, t, n) {
      var a = typeof t == "number" ? [] : {};
      var r = e ?? a;
      if (r[t] === n) {
        return r;
      }
      var i = Mn(r);
      i[t] = n;
      return i;
    }
    function hs(e, t, n, a) {
      var r = undefined;
      var i = t[a];
      if (a === t.length - 1) {
        r = n;
      } else {
        var o = An(e) && An(e[i]) ? e[i] : typeof t[a + 1] == "number" ? [] : {};
        r = hs(o, t, n, a + 1);
      }
      return wn(e, i, r);
    }
    function Bn(e, t, n) {
      return t.length ? hs(e, t, n, 0) : n;
    }
    function Rs(e, t, n) {
      var a = e?.[t];
      var r = n(a);
      return wn(e, t, r);
    }
    function Ns(e, t, n) {
      var a = Cn(e, t);
      var r = n(a);
      return t.length ? hs(e, t, r, 0) : r;
    }
    function Ss(e, t, n, a, r, i) {
      var o = arguments.length;
      var s = Array(o > 6 ? o - 6 : 0);
      for (var l = 6; l < o; l++) {
        s[l - 6] = arguments[l];
      }
      return s.length ? Be.call.apply(Be, [null, false, false, e, t, n, a, r, i].concat(s)) : Be(false, false, e, t, n, a, r, i);
    }
    function As(e, t, n, a, r, i) {
      var o = arguments.length;
      var s = Array(o > 6 ? o - 6 : 0);
      for (var l = 6; l < o; l++) {
        s[l - 6] = arguments[l];
      }
      return s.length ? Be.call.apply(Be, [null, false, true, e, t, n, a, r, i].concat(s)) : Be(false, true, e, t, n, a, r, i);
    }
    function Ms(e, t, n, a, r, i, o) {
      var s = Cn(e, t);
      if (s == null) {
        s = {};
      }
      var l = undefined;
      var d = arguments.length;
      var b = Array(d > 7 ? d - 7 : 0);
      for (var f = 7; f < d; f++) {
        b[f - 7] = arguments[f];
      }
      if (b.length) {
        l = Be.call.apply(Be, [null, false, false, s, n, a, r, i, o].concat(b));
      } else {
        l = Be(false, false, s, n, a, r, i, o);
      }
      return t.length ? hs(e, t, l, 0) : l;
    }
    function Cs(e, t) {
      var n = Array.isArray(t) ? t : [t];
      var a = false;
      for (var r = 0; r < n.length; r++) {
        if ($1.call(e, n[r])) {
          a = true;
          break;
        }
      }
      if (!a) {
        return e;
      }
      var i = {};
      var o = ci(e);
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        if (!(n.indexOf(l) >= 0)) {
          i[l] = e[l];
        }
      }
      return i;
    }
    function ws(e, t, n, a, r, i) {
      var o = arguments.length;
      var s = Array(o > 6 ? o - 6 : 0);
      for (var l = 6; l < o; l++) {
        s[l - 6] = arguments[l];
      }
      return s.length ? Be.call.apply(Be, [null, true, false, e, t, n, a, r, i].concat(s)) : Be(true, false, e, t, n, a, r, i);
    }
    var Z1 = {
      clone: Mn,
      addLast: ms,
      addFirst: gs,
      removeLast: bs,
      removeFirst: vs,
      insert: Os,
      removeAt: _s,
      replaceAt: Ls,
      getIn: Cn,
      set: wn,
      setIn: Bn,
      update: Rs,
      updateIn: Ns,
      merge: Ss,
      mergeDeep: As,
      mergeIn: Ms,
      omit: Cs,
      addDefaults: ws
    };
    me.default = Z1;
  });
  var ks = u(di => {
    "use strict";

    Object.defineProperty(di, "__esModule", {
      value: true
    });
    Object.defineProperty(di, "ixRequest", {
      enumerable: true,
      get: function () {
        return om;
      }
    });
    var J1 = we();
    var em = Mt();
    var {
      IX2_PREVIEW_REQUESTED: tm,
      IX2_PLAYBACK_REQUESTED: nm,
      IX2_STOP_REQUESTED: am,
      IX2_CLEAR_REQUESTED: im
    } = J1.IX2EngineActionTypes;
    var rm = {
      preview: {},
      playback: {},
      stop: {},
      clear: {}
    };
    var Bs = Object.create(null, {
      [tm]: {
        value: "preview"
      },
      [nm]: {
        value: "playback"
      },
      [am]: {
        value: "stop"
      },
      [im]: {
        value: "clear"
      }
    });
    var om = (e = rm, t) => {
      if (t.type in Bs) {
        let n = [Bs[t.type]];
        0;
        return em.setIn(e, [n], {
          ...t.payload
        });
      }
      return e;
    };
  });
  var Us = u(fi => {
    "use strict";

    Object.defineProperty(fi, "__esModule", {
      value: true
    });
    Object.defineProperty(fi, "ixSession", {
      enumerable: true,
      get: function () {
        return gm;
      }
    });
    var sm = we();
    var Xe = Mt();
    var {
      IX2_SESSION_INITIALIZED: lm,
      IX2_SESSION_STARTED: cm,
      IX2_TEST_FRAME_RENDERED: dm,
      IX2_SESSION_STOPPED: fm,
      IX2_EVENT_LISTENER_ADDED: um,
      IX2_EVENT_STATE_CHANGED: pm,
      IX2_ANIMATION_FRAME_CHANGED: Em,
      IX2_ACTION_LIST_PLAYBACK_CHANGED: Im,
      IX2_VIEWPORT_WIDTH_CHANGED: Tm,
      IX2_MEDIA_QUERIES_DEFINED: ym
    } = sm.IX2EngineActionTypes;
    var Fs = {
      active: false,
      tick: 0,
      eventListeners: [],
      eventState: {},
      playbackState: {},
      viewportWidth: 0,
      mediaQueryKey: null,
      hasBoundaryNodes: false,
      hasDefinedMediaQueries: false,
      reducedMotion: false
    };
    var gm = (e = Fs, t) => {
      switch (t.type) {
        case lm:
          {
            let {
              hasBoundaryNodes: n,
              reducedMotion: a
            } = t.payload;
            0;
            return Xe.merge(e, {
              hasBoundaryNodes: n,
              reducedMotion: a
            });
          }
        case cm:
          0;
          return Xe.set(e, "active", true);
        case dm:
          {
            let {
              payload: {
                step: n = 20
              }
            } = t;
            0;
            return Xe.set(e, "tick", e.tick + n);
          }
        case fm:
          return Fs;
        case Em:
          {
            let {
              payload: {
                now: n
              }
            } = t;
            0;
            return Xe.set(e, "tick", n);
          }
        case um:
          {
            0;
            let n = Xe.addLast(e.eventListeners, t.payload);
            0;
            return Xe.set(e, "eventListeners", n);
          }
        case pm:
          {
            let {
              stateKey: n,
              newState: a
            } = t.payload;
            0;
            return Xe.setIn(e, ["eventState", n], a);
          }
        case Im:
          {
            let {
              actionListId: n,
              isPlaying: a
            } = t.payload;
            0;
            return Xe.setIn(e, ["playbackState", n], a);
          }
        case Tm:
          {
            let {
              width: n,
              mediaQueries: a
            } = t.payload;
            let r = a.length;
            let i = null;
            for (let o = 0; o < r; o++) {
              let {
                key: s,
                min: l,
                max: d
              } = a[o];
              if (n >= l && n <= d) {
                i = s;
                break;
              }
            }
            0;
            return Xe.merge(e, {
              viewportWidth: n,
              mediaQueryKey: i
            });
          }
        case ym:
          0;
          return Xe.set(e, "hasDefinedMediaQueries", true);
        default:
          return e;
      }
    };
  });
  var xs = u((zA, Vs) => {
    function bm() {
      this.__data__ = [];
      this.size = 0;
    }
    Vs.exports = bm;
  });
  var kn = u((jA, Ds) => {
    function vm(e, t) {
      return e === t || e !== e && t !== t;
    }
    Ds.exports = vm;
  });
  var Jt = u((KA, Ps) => {
    var Om = kn();
    function _m(e, t) {
      for (var n = e.length; n--;) {
        if (Om(e[n][0], t)) {
          return n;
        }
      }
      return -1;
    }
    Ps.exports = _m;
  });
  var qs = u(($A, Gs) => {
    var Lm = Jt();
    var hm = Array.prototype;
    var Rm = hm.splice;
    function Nm(e) {
      var t = this.__data__;
      var n = Lm(t, e);
      if (n < 0) {
        return false;
      }
      var a = t.length - 1;
      if (n == a) {
        t.pop();
      } else {
        Rm.call(t, n, 1);
      }
      --this.size;
      return true;
    }
    Gs.exports = Nm;
  });
  var Qs = u((ZA, Ws) => {
    var Sm = Jt();
    function Am(e) {
      var t = this.__data__;
      var n = Sm(t, e);
      return n < 0 ? undefined : t[n][1];
    }
    Ws.exports = Am;
  });
  var Xs = u((JA, Hs) => {
    var Mm = Jt();
    function Cm(e) {
      return Mm(this.__data__, e) > -1;
    }
    Hs.exports = Cm;
  });
  var zs = u((eM, Ys) => {
    var wm = Jt();
    function Bm(e, t) {
      var n = this.__data__;
      var a = wm(n, e);
      if (a < 0) {
        ++this.size;
        n.push([e, t]);
      } else {
        n[a][1] = t;
      }
      return this;
    }
    Ys.exports = Bm;
  });
  var en = u((tM, js) => {
    var km = xs();
    var Fm = qs();
    var Um = Qs();
    var Vm = Xs();
    var xm = zs();
    function Ct(e) {
      var t = -1;
      var n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n;) {
        var a = e[t];
        this.set(a[0], a[1]);
      }
    }
    Ct.prototype.clear = km;
    Ct.prototype.delete = Fm;
    Ct.prototype.get = Um;
    Ct.prototype.has = Vm;
    Ct.prototype.set = xm;
    js.exports = Ct;
  });
  var $s = u((nM, Ks) => {
    var Dm = en();
    function Pm() {
      this.__data__ = new Dm();
      this.size = 0;
    }
    Ks.exports = Pm;
  });
  var Js = u((aM, Zs) => {
    function Gm(e) {
      var t = this.__data__;
      var n = t.delete(e);
      this.size = t.size;
      return n;
    }
    Zs.exports = Gm;
  });
  var tl = u((iM, el) => {
    function qm(e) {
      return this.__data__.get(e);
    }
    el.exports = qm;
  });
  var al = u((rM, nl) => {
    function Wm(e) {
      return this.__data__.has(e);
    }
    nl.exports = Wm;
  });
  var Ye = u((oM, il) => {
    function Qm(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    il.exports = Qm;
  });
  var ui = u((sM, rl) => {
    var Hm = it();
    var Xm = Ye();
    function $m(e) {
      if (!Xm(e)) {
        return false;
      }
      var t = Hm(e);
      return t == "[object Function]" || t == "[object GeneratorFunction]" || t == "[object AsyncFunction]" || t == "[object Proxy]";
    }
    rl.exports = $m;
  });
  var sl = u((lM, ol) => {
    var Zm = qe();
    var Jm = Zm["__core-js_shared__"];
    ol.exports = Jm;
  });
  var dl = u((cM, cl) => {
    var pi = sl();
    var ll = function () {
      var e = /[^.]+$/.exec(pi && pi.keys && pi.keys.IE_PROTO || "");
      return e ? "Symbol(src)_1." + e : "";
    }();
    function e6(e) {
      return !!ll && ll in e;
    }
    cl.exports = e6;
  });
  var Ei = u((dM, fl) => {
    var t6 = Function.prototype;
    var n6 = t6.toString;
    function a6(e) {
      if (e != null) {
        try {
          return n6.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    fl.exports = a6;
  });
  var pl = u((fM, ul) => {
    var i6 = ui();
    var r6 = dl();
    var o6 = Ye();
    var s6 = Ei();
    var l6 = /[\\^$.*+?()[\]{}|]/g;
    var c6 = /^\[object .+?Constructor\]$/;
    var d6 = Function.prototype;
    var f6 = Object.prototype;
    var u6 = d6.toString;
    var p6 = f6.hasOwnProperty;
    var E6 = RegExp("^" + u6.call(p6).replace(l6, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    function I6(e) {
      if (!o6(e) || r6(e)) {
        return false;
      }
      var t = i6(e) ? E6 : c6;
      return t.test(s6(e));
    }
    ul.exports = I6;
  });
  var Il = u((uM, El) => {
    function T6(e, t) {
      return e?.[t];
    }
    El.exports = T6;
  });
  var rt = u((pM, Tl) => {
    var y6 = pl();
    var m6 = Il();
    function g6(e, t) {
      var n = m6(e, t);
      return y6(n) ? n : undefined;
    }
    Tl.exports = g6;
  });
  var Fn = u((EM, yl) => {
    var b6 = rt();
    var v6 = qe();
    var O6 = b6(v6, "Map");
    yl.exports = O6;
  });
  var tn = u((IM, ml) => {
    var _6 = rt();
    var L6 = _6(Object, "create");
    ml.exports = L6;
  });
  var vl = u((TM, bl) => {
    var gl = tn();
    function h6() {
      this.__data__ = gl ? gl(null) : {};
      this.size = 0;
    }
    bl.exports = h6;
  });
  var _l = u((yM, Ol) => {
    function R6(e) {
      var t = this.has(e) && delete this.__data__[e];
      this.size -= t ? 1 : 0;
      return t;
    }
    Ol.exports = R6;
  });
  var hl = u((mM, Ll) => {
    var N6 = tn();
    var A6 = Object.prototype;
    var M6 = A6.hasOwnProperty;
    function C6(e) {
      var t = this.__data__;
      if (N6) {
        var n = t[e];
        return n === "__lodash_hash_undefined__" ? undefined : n;
      }
      return M6.call(t, e) ? t[e] : undefined;
    }
    Ll.exports = C6;
  });
  var Nl = u((gM, Rl) => {
    var w6 = tn();
    var B6 = Object.prototype;
    var k6 = B6.hasOwnProperty;
    function F6(e) {
      var t = this.__data__;
      return w6 ? t[e] !== undefined : k6.call(t, e);
    }
    Rl.exports = F6;
  });
  var Al = u((bM, Sl) => {
    var U6 = tn();
    function x6(e, t) {
      var n = this.__data__;
      this.size += this.has(e) ? 0 : 1;
      n[e] = U6 && t === undefined ? "__lodash_hash_undefined__" : t;
      return this;
    }
    Sl.exports = x6;
  });
  var Cl = u((vM, Ml) => {
    var D6 = vl();
    var P6 = _l();
    var G6 = hl();
    var q6 = Nl();
    var W6 = Al();
    function wt(e) {
      var t = -1;
      var n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n;) {
        var a = e[t];
        this.set(a[0], a[1]);
      }
    }
    wt.prototype.clear = D6;
    wt.prototype.delete = P6;
    wt.prototype.get = G6;
    wt.prototype.has = q6;
    wt.prototype.set = W6;
    Ml.exports = wt;
  });
  var kl = u((OM, Bl) => {
    var wl = Cl();
    var Q6 = en();
    var H6 = Fn();
    function X6() {
      this.size = 0;
      this.__data__ = {
        hash: new wl(),
        map: new (H6 || Q6)(),
        string: new wl()
      };
    }
    Bl.exports = X6;
  });
  var Ul = u((_M, Fl) => {
    function Y6(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
    }
    Fl.exports = Y6;
  });
  var nn = u((LM, Vl) => {
    var z6 = Ul();
    function j6(e, t) {
      var n = e.__data__;
      return z6(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
    }
    Vl.exports = j6;
  });
  var Dl = u((hM, xl) => {
    var K6 = nn();
    function $6(e) {
      var t = K6(this, e).delete(e);
      this.size -= t ? 1 : 0;
      return t;
    }
    xl.exports = $6;
  });
  var Gl = u((RM, Pl) => {
    var Z6 = nn();
    function J6(e) {
      return Z6(this, e).get(e);
    }
    Pl.exports = J6;
  });
  var Wl = u((NM, ql) => {
    var eg = nn();
    function tg(e) {
      return eg(this, e).has(e);
    }
    ql.exports = tg;
  });
  var Hl = u((SM, Ql) => {
    var ng = nn();
    function ag(e, t) {
      var n = ng(this, e);
      var a = n.size;
      n.set(e, t);
      this.size += n.size == a ? 0 : 1;
      return this;
    }
    Ql.exports = ag;
  });
  var Un = u((AM, Xl) => {
    var ig = kl();
    var rg = Dl();
    var og = Gl();
    var sg = Wl();
    var lg = Hl();
    function Bt(e) {
      var t = -1;
      var n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n;) {
        var a = e[t];
        this.set(a[0], a[1]);
      }
    }
    Bt.prototype.clear = ig;
    Bt.prototype.delete = rg;
    Bt.prototype.get = og;
    Bt.prototype.has = sg;
    Bt.prototype.set = lg;
    Xl.exports = Bt;
  });
  var zl = u((MM, Yl) => {
    var cg = en();
    var dg = Fn();
    var fg = Un();
    function pg(e, t) {
      var n = this.__data__;
      if (n instanceof cg) {
        var a = n.__data__;
        if (!dg || a.length < 199) {
          a.push([e, t]);
          this.size = ++n.size;
          return this;
        }
        n = this.__data__ = new fg(a);
      }
      n.set(e, t);
      this.size = n.size;
      return this;
    }
    Yl.exports = pg;
  });
  var Ii = u((CM, jl) => {
    var Eg = en();
    var Ig = $s();
    var Tg = Js();
    var yg = tl();
    var mg = al();
    var gg = zl();
    function kt(e) {
      var t = this.__data__ = new Eg(e);
      this.size = t.size;
    }
    kt.prototype.clear = Ig;
    kt.prototype.delete = Tg;
    kt.prototype.get = yg;
    kt.prototype.has = mg;
    kt.prototype.set = gg;
    jl.exports = kt;
  });
  var $l = u((wM, Kl) => {
    function vg(e) {
      this.__data__.set(e, "__lodash_hash_undefined__");
      return this;
    }
    Kl.exports = vg;
  });
  var Jl = u((BM, Zl) => {
    function Og(e) {
      return this.__data__.has(e);
    }
    Zl.exports = Og;
  });
  var tc = u((kM, ec) => {
    var _g = Un();
    var Lg = $l();
    var hg = Jl();
    function Vn(e) {
      var t = -1;
      var n = e == null ? 0 : e.length;
      for (this.__data__ = new _g(); ++t < n;) {
        this.add(e[t]);
      }
    }
    Vn.prototype.add = Vn.prototype.push = Lg;
    Vn.prototype.has = hg;
    ec.exports = Vn;
  });
  var ac = u((FM, nc) => {
    function Rg(e, t) {
      var n = -1;
      for (var a = e == null ? 0 : e.length; ++n < a;) {
        if (t(e[n], n, e)) {
          return true;
        }
      }
      return false;
    }
    nc.exports = Rg;
  });
  var rc = u((UM, ic) => {
    function Ng(e, t) {
      return e.has(t);
    }
    ic.exports = Ng;
  });
  var Ti = u((VM, oc) => {
    var Sg = tc();
    var Ag = ac();
    var Mg = rc();
    function Bg(e, t, n, a, r, i) {
      var o = n & 1;
      var s = e.length;
      var l = t.length;
      if (s != l && !(o && l > s)) {
        return false;
      }
      var d = i.get(e);
      var b = i.get(t);
      if (d && b) {
        return d == t && b == e;
      }
      var f = -1;
      var y = true;
      var T = n & 2 ? new Sg() : undefined;
      i.set(e, t);
      for (i.set(t, e); ++f < s;) {
        var m = e[f];
        var _ = t[f];
        if (a) {
          var R = o ? a(_, m, f, t, e, i) : a(m, _, f, e, t, i);
        }
        if (R !== undefined) {
          if (R) {
            continue;
          }
          y = false;
          break;
        }
        if (T) {
          if (!Ag(t, function (L, w) {
            if (!Mg(T, w) && (m === L || r(m, L, n, a, i))) {
              return T.push(w);
            }
          })) {
            y = false;
            break;
          }
        } else if (!(m === _ || r(m, _, n, a, i))) {
          y = false;
          break;
        }
      }
      i.delete(e);
      i.delete(t);
      return y;
    }
    oc.exports = Bg;
  });
  var lc = u((xM, sc) => {
    var kg = qe();
    var Fg = kg.Uint8Array;
    sc.exports = Fg;
  });
  var dc = u((DM, cc) => {
    function Ug(e) {
      var t = -1;
      var n = Array(e.size);
      e.forEach(function (a, r) {
        n[++t] = [r, a];
      });
      return n;
    }
    cc.exports = Ug;
  });
  var uc = u((PM, fc) => {
    function Vg(e) {
      var t = -1;
      var n = Array(e.size);
      e.forEach(function (a) {
        n[++t] = a;
      });
      return n;
    }
    fc.exports = Vg;
  });
  var yc = u((GM, Tc) => {
    var pc = Nt();
    var Ec = lc();
    var xg = kn();
    var Dg = Ti();
    var Pg = dc();
    var Gg = uc();
    var Ic = pc ? pc.prototype : undefined;
    var yi = Ic ? Ic.valueOf : undefined;
    function tb(e, t, n, a, r, i, o) {
      switch (n) {
        case "[object DataView]":
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) {
            return false;
          }
          e = e.buffer;
          t = t.buffer;
        case "[object ArrayBuffer]":
          return !(e.byteLength != t.byteLength || !i(new Ec(e), new Ec(t)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return xg(+e, +t);
        case "[object Error]":
          return e.name == t.name && e.message == t.message;
        case "[object RegExp]":
        case "[object String]":
          return e == t + "";
        case "[object Map]":
          var s = Pg;
        case "[object Set]":
          var l = a & 1;
          if (!s) {
            s = Gg;
          }
          if (e.size != t.size && !l) {
            return false;
          }
          var d = o.get(e);
          if (d) {
            return d == t;
          }
          a |= 2;
          o.set(e, t);
          var b = Dg(s(e), s(t), a, r, i, o);
          o.delete(e);
          return b;
        case "[object Symbol]":
          if (yi) {
            return yi.call(e) == yi.call(t);
          }
      }
      return false;
    }
    Tc.exports = tb;
  });
  var xn = u((qM, mc) => {
    function nb(e, t) {
      var n = -1;
      var a = t.length;
      for (var r = e.length; ++n < a;) {
        e[r + n] = t[n];
      }
      return e;
    }
    mc.exports = nb;
  });
  var he = u((WM, gc) => {
    var ab = Array.isArray;
    gc.exports = ab;
  });
  var mi = u((QM, bc) => {
    var ib = xn();
    var rb = he();
    function ob(e, t, n) {
      var a = t(e);
      return rb(e) ? a : ib(a, n(e));
    }
    bc.exports = ob;
  });
  var Oc = u((HM, vc) => {
    function sb(e, t) {
      var n = -1;
      var a = e == null ? 0 : e.length;
      var r = 0;
      for (var i = []; ++n < a;) {
        var o = e[n];
        if (t(o, n, e)) {
          i[r++] = o;
        }
      }
      return i;
    }
    vc.exports = sb;
  });
  var gi = u((XM, _c) => {
    function lb() {
      return [];
    }
    _c.exports = lb;
  });
  var bi = u((YM, hc) => {
    var cb = Oc();
    var db = gi();
    var fb = Object.prototype;
    var ub = fb.propertyIsEnumerable;
    var Lc = Object.getOwnPropertySymbols;
    var pb = Lc ? function (e) {
      return e == null ? [] : (e = Object(e), cb(Lc(e), function (t) {
        return ub.call(e, t);
      }));
    } : db;
    hc.exports = pb;
  });
  var Nc = u((zM, Rc) => {
    function Eb(e, t) {
      var n = -1;
      for (var a = Array(e); ++n < e;) {
        a[n] = t(n);
      }
      return a;
    }
    Rc.exports = Eb;
  });
  var Ac = u((jM, Sc) => {
    var Ib = it();
    var Tb = et();
    function mb(e) {
      return Tb(e) && Ib(e) == "[object Arguments]";
    }
    Sc.exports = mb;
  });
  var an = u((KM, wc) => {
    var Mc = Ac();
    var gb = et();
    var Cc = Object.prototype;
    var bb = Cc.hasOwnProperty;
    var vb = Cc.propertyIsEnumerable;
    var Ob = Mc(function () {
      return arguments;
    }()) ? Mc : function (e) {
      return gb(e) && bb.call(e, "callee") && !vb.call(e, "callee");
    };
    wc.exports = Ob;
  });
  var kc = u(($M, Bc) => {
    function _b() {
      return false;
    }
    Bc.exports = _b;
  });
  var Dn = u((rn, Ft) => {
    var Lb = qe();
    var hb = kc();
    var Vc = typeof rn == "object" && rn && !rn.nodeType && rn;
    var Fc = Vc && typeof Ft == "object" && Ft && !Ft.nodeType && Ft;
    var Rb = Fc && Fc.exports === Vc;
    var Uc = Rb ? Lb.Buffer : undefined;
    var Nb = Uc ? Uc.isBuffer : undefined;
    var Sb = Nb || hb;
    Ft.exports = Sb;
  });
  var Pn = u((ZM, xc) => {
    var Mb = /^(?:0|[1-9]\d*)$/;
    function Cb(e, t) {
      var n = typeof e;
      t = t ?? 9007199254740991;
      return !!t && (n == "number" || n != "symbol" && Mb.test(e)) && e > -1 && e % 1 == 0 && e < t;
    }
    xc.exports = Cb;
  });
  var Gn = u((JM, Dc) => {
    function Bb(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= 9007199254740991;
    }
    Dc.exports = Bb;
  });
  var Gc = u((eC, Pc) => {});
  var Wc = u((tC, qc) => {
    function l3(e) {
      return function (t) {
        return e(t);
      };
    }
    qc.exports = l3;
  });
  var Hc = u((on, Ut) => {
    var c3 = Da();
    var Qc = typeof on == "object" && on && !on.nodeType && on;
    var sn = Qc && typeof Ut == "object" && Ut && !Ut.nodeType && Ut;
    var d3 = sn && sn.exports === Qc;
    var vi = d3 && c3.process;
    var f3 = function () {
      try {
        var e = sn && sn.require && sn.require("util").types;
        return e || vi && vi.binding && vi.binding("util");
      } catch {}
    }();
    Ut.exports = f3;
  });
  var qn = u((nC, zc) => {
    var u3 = Gc();
    var p3 = Wc();
    var Xc = Hc();
    var Yc = Xc && Xc.isTypedArray;
    var E3 = Yc ? p3(Yc) : u3;
    zc.exports = E3;
  });
  var Oi = u((aC, jc) => {
    var I3 = Nc();
    var T3 = an();
    var y3 = he();
    var m3 = Dn();
    var g3 = Pn();
    var b3 = qn();
    var v3 = Object.prototype;
    var O3 = v3.hasOwnProperty;
    function _3(e, t) {
      var n = y3(e);
      var a = !n && T3(e);
      var r = !n && !a && m3(e);
      var i = !n && !a && !r && b3(e);
      var o = n || a || r || i;
      var s = o ? I3(e.length, String) : [];
      var l = s.length;
      for (var d in e) if ((t || O3.call(e, d)) && !(o && (d == "length" || r && (d == "offset" || d == "parent") || i && (d == "buffer" || d == "byteLength" || d == "byteOffset") || g3(d, l)))) {
        s.push(d);
      }
      return s;
    }
    jc.exports = _3;
  });
  var Wn = u((iC, Kc) => {
    var L3 = Object.prototype;
    function h3(e) {
      var t = e && e.constructor;
      var n = typeof t == "function" && t.prototype || L3;
      return e === n;
    }
    Kc.exports = h3;
  });
  var Zc = u((rC, $c) => {
    var R3 = Pa();
    var N3 = R3(Object.keys, Object);
    $c.exports = N3;
  });
  var Qn = u((oC, Jc) => {
    var S3 = Wn();
    var A3 = Zc();
    var M3 = Object.prototype;
    var C3 = M3.hasOwnProperty;
    function w3(e) {
      if (!S3(e)) {
        return A3(e);
      }
      var t = [];
      for (var n in Object(e)) if (C3.call(e, n) && n != "constructor") {
        t.push(n);
      }
      return t;
    }
    Jc.exports = w3;
  });
  var It = u((sC, ed) => {
    var B3 = ui();
    var k3 = Gn();
    function F3(e) {
      return e != null && k3(e.length) && !B3(e);
    }
    ed.exports = F3;
  });
  var ln = u((lC, td) => {
    var U3 = Oi();
    var V3 = Qn();
    var x3 = It();
    function D3(e) {
      return x3(e) ? U3(e) : V3(e);
    }
    td.exports = D3;
  });
  var ad = u((cC, nd) => {
    var P3 = mi();
    var G3 = bi();
    var q3 = ln();
    function W3(e) {
      return P3(e, q3, G3);
    }
    nd.exports = W3;
  });
  var od = u((dC, rd) => {
    var id = ad();
    var H3 = Object.prototype;
    var X3 = H3.hasOwnProperty;
    function Y3(e, t, n, a, r, i) {
      var o = n & 1;
      var s = id(e);
      var l = s.length;
      var d = id(t);
      var b = d.length;
      if (l != b && !o) {
        return false;
      }
      for (var f = l; f--;) {
        var y = s[f];
        if (!(o ? y in t : X3.call(t, y))) {
          return false;
        }
      }
      var T = i.get(e);
      var m = i.get(t);
      if (T && m) {
        return T == t && m == e;
      }
      var _ = true;
      i.set(e, t);
      i.set(t, e);
      for (var R = o; ++f < l;) {
        y = s[f];
        var L = e[y];
        var w = t[y];
        if (a) {
          var B = o ? a(w, L, y, t, e, i) : a(L, w, y, e, t, i);
        }
        if (!(B === undefined ? L === w || r(L, w, n, a, i) : B)) {
          _ = false;
          break;
        }
        if (!R) {
          R = y == "constructor";
        }
      }
      if (_ && !R) {
        var F = e.constructor;
        var x = t.constructor;
        if (F != x && "constructor" in e && "constructor" in t && !(typeof F == "function" && F instanceof F && typeof x == "function" && x instanceof x)) {
          _ = false;
        }
      }
      i.delete(e);
      i.delete(t);
      return _;
    }
    rd.exports = Y3;
  });
  var ld = u((fC, sd) => {
    var z3 = rt();
    var j3 = qe();
    var K3 = z3(j3, "DataView");
    sd.exports = K3;
  });
  var dd = u((uC, cd) => {
    var $3 = rt();
    var Z3 = qe();
    var J3 = $3(Z3, "Promise");
    cd.exports = J3;
  });
  var ud = u((pC, fd) => {
    var e5 = rt();
    var t5 = qe();
    var n5 = e5(t5, "Set");
    fd.exports = n5;
  });
  var _i = u((EC, pd) => {
    var a5 = rt();
    var i5 = qe();
    var r5 = a5(i5, "WeakMap");
    pd.exports = r5;
  });
  var Hn = u((IC, bd) => {
    var Li = ld();
    var hi = Fn();
    var Ri = dd();
    var Ni = ud();
    var Si = _i();
    var gd = it();
    var Vt = Ei();
    var s5 = Vt(Li);
    var l5 = Vt(hi);
    var c5 = Vt(Ri);
    var d5 = Vt(Ni);
    var f5 = Vt(Si);
    var Tt = gd;
    if (Li && Tt(new Li(new ArrayBuffer(1))) != "[object DataView]" || hi && Tt(new hi()) != "[object Map]" || Ri && Tt(Ri.resolve()) != "[object Promise]" || Ni && Tt(new Ni()) != "[object Set]" || Si && Tt(new Si()) != "[object WeakMap]") {
      Tt = function (e) {
        var t = gd(e);
        var n = t == "[object Object]" ? e.constructor : undefined;
        var a = n ? Vt(n) : "";
        if (a) {
          switch (a) {
            case s5:
              return "[object DataView]";
            case l5:
              return "[object Map]";
            case c5:
              return "[object Promise]";
            case d5:
              return "[object Set]";
            case f5:
              return "[object WeakMap]";
          }
        }
        return t;
      };
    }
    bd.exports = Tt;
  });
  var Sd = u((TC, Nd) => {
    var Ai = Ii();
    var u5 = Ti();
    var p5 = yc();
    var E5 = od();
    var vd = Hn();
    var Od = he();
    var _d = Dn();
    var I5 = qn();
    var y5 = Object.prototype;
    var Rd = y5.hasOwnProperty;
    function m5(e, t, n, a, r, i) {
      var o = Od(e);
      var s = Od(t);
      var l = o ? "[object Array]" : vd(e);
      var d = s ? "[object Array]" : vd(t);
      l = l == "[object Arguments]" ? "[object Object]" : l;
      d = d == "[object Arguments]" ? "[object Object]" : d;
      var b = l == "[object Object]";
      var f = d == "[object Object]";
      var y = l == d;
      if (y && _d(e)) {
        if (!_d(t)) {
          return false;
        }
        o = true;
        b = false;
      }
      if (y && !b) {
        if (!i) {
          i = new Ai();
        }
        return o || I5(e) ? u5(e, t, n, a, r, i) : p5(e, t, l, n, a, r, i);
      }
      if (!(n & 1)) {
        var T = b && Rd.call(e, "__wrapped__");
        var m = f && Rd.call(t, "__wrapped__");
        if (T || m) {
          var _ = T ? e.value() : e;
          var R = m ? t.value() : t;
          if (!i) {
            i = new Ai();
          }
          return r(_, R, n, a, i);
        }
      }
      return y ? (i || (i = new Ai()), E5(e, t, n, a, r, i)) : false;
    }
    Nd.exports = m5;
  });
  var Mi = u((yC, Cd) => {
    var g5 = Sd();
    var Ad = et();
    function Md(e, t, n, a, r) {
      return e === t ? true : e == null || t == null || !Ad(e) && !Ad(t) ? e !== e && t !== t : g5(e, t, n, a, Md, r);
    }
    Cd.exports = Md;
  });
  var Bd = u((mC, wd) => {
    var b5 = Ii();
    var v5 = Mi();
    function L5(e, t, n, a) {
      var r = n.length;
      var i = r;
      var o = !a;
      if (e == null) {
        return !i;
      }
      for (e = Object(e); r--;) {
        var s = n[r];
        if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) {
          return false;
        }
      }
      for (; ++r < i;) {
        s = n[r];
        var l = s[0];
        var d = e[l];
        var b = s[1];
        if (o && s[2]) {
          if (d === undefined && !(l in e)) {
            return false;
          }
        } else {
          var f = new b5();
          if (a) {
            var y = a(d, b, l, e, t, f);
          }
          if (!(y === undefined ? v5(b, d, 3, a, f) : y)) {
            return false;
          }
        }
      }
      return true;
    }
    wd.exports = L5;
  });
  var Ci = u((gC, kd) => {
    var h5 = Ye();
    function R5(e) {
      return e === e && !h5(e);
    }
    kd.exports = R5;
  });
  var Ud = u((bC, Fd) => {
    var N5 = Ci();
    var S5 = ln();
    function A5(e) {
      var t = S5(e);
      for (var n = t.length; n--;) {
        var a = t[n];
        var r = e[a];
        t[n] = [a, r, N5(r)];
      }
      return t;
    }
    Fd.exports = A5;
  });
  var wi = u((vC, Vd) => {
    function M5(e, t) {
      return function (n) {
        return n == null ? false : n[e] === t && (t !== undefined || e in Object(n));
      };
    }
    Vd.exports = M5;
  });
  var Dd = u((OC, xd) => {
    var C5 = Bd();
    var w5 = Ud();
    var B5 = wi();
    function k5(e) {
      var t = w5(e);
      return t.length == 1 && t[0][2] ? B5(t[0][0], t[0][1]) : function (n) {
        return n === e || C5(n, e, t);
      };
    }
    xd.exports = k5;
  });
  var cn = u((_C, Pd) => {
    var F5 = it();
    var U5 = et();
    function x5(e) {
      return typeof e == "symbol" || U5(e) && F5(e) == "[object Symbol]";
    }
    Pd.exports = x5;
  });
  var Yn = u((LC, Gd) => {
    var D5 = he();
    var P5 = cn();
    var G5 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var q5 = /^\w*$/;
    function W5(e, t) {
      if (D5(e)) {
        return false;
      }
      var n = typeof e;
      return n == "number" || n == "symbol" || n == "boolean" || e == null || P5(e) ? true : q5.test(e) || !G5.test(e) || t != null && e in Object(t);
    }
    Gd.exports = W5;
  });
  var Qd = u((hC, Wd) => {
    var qd = Un();
    function Bi(e, t) {
      if (typeof e != "function" || t != null && typeof t != "function") {
        throw new TypeError("Expected a function");
      }
      var n = function () {
        var r = t ? t.apply(this, arguments) : arguments[0];
        var i = n.cache;
        if (i.has(r)) {
          return i.get(r);
        }
        var o = e.apply(this, arguments);
        n.cache = i.set(r, o) || i;
        return o;
      };
      n.cache = new (Bi.Cache || qd)();
      return n;
    }
    Bi.Cache = qd;
    Wd.exports = Bi;
  });
  var Xd = u((RC, Hd) => {
    var H5 = Qd();
    function Y5(e) {
      var t = H5(e, function (a) {
        if (n.size === 500) {
          n.clear();
        }
        return a;
      });
      var n = t.cache;
      return t;
    }
    Hd.exports = Y5;
  });
  var zd = u((NC, Yd) => {
    var z5 = Xd();
    var j5 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var K5 = /\\(\\)?/g;
    var $5 = z5(function (e) {
      var t = [];
      if (e.charCodeAt(0) === 46) {
        t.push("");
      }
      e.replace(j5, function (n, a, r, i) {
        t.push(r ? i.replace(K5, "$1") : a || n);
      });
      return t;
    });
    Yd.exports = $5;
  });
  var ki = u((SC, jd) => {
    function Z5(e, t) {
      var n = -1;
      var a = e == null ? 0 : e.length;
      for (var r = Array(a); ++n < a;) {
        r[n] = t(e[n], n, e);
      }
      return r;
    }
    jd.exports = Z5;
  });
  var tf = u((AC, ef) => {
    var Kd = Nt();
    var J5 = ki();
    var e2 = he();
    var t2 = cn();
    var $d = Kd ? Kd.prototype : undefined;
    var Zd = $d ? $d.toString : undefined;
    function Jd(e) {
      if (typeof e == "string") {
        return e;
      }
      if (e2(e)) {
        return J5(e, Jd) + "";
      }
      if (t2(e)) {
        return Zd ? Zd.call(e) : "";
      }
      var t = e + "";
      return t == "0" && 1 / e == -Infinity ? "-0" : t;
    }
    ef.exports = Jd;
  });
  var af = u((MC, nf) => {
    var a2 = tf();
    function i2(e) {
      return e == null ? "" : a2(e);
    }
    nf.exports = i2;
  });
  var dn = u((CC, rf) => {
    var r2 = he();
    var o2 = Yn();
    var s2 = zd();
    var l2 = af();
    function c2(e, t) {
      return r2(e) ? e : o2(e, t) ? [e] : s2(l2(e));
    }
    rf.exports = c2;
  });
  var xt = u((wC, of) => {
    var d2 = cn();
    function u2(e) {
      if (typeof e == "string" || d2(e)) {
        return e;
      }
      var t = e + "";
      return t == "0" && 1 / e == -Infinity ? "-0" : t;
    }
    of.exports = u2;
  });
  var zn = u((BC, sf) => {
    var p2 = dn();
    var E2 = xt();
    function I2(e, t) {
      t = p2(t, e);
      var n = 0;
      for (var a = t.length; e != null && n < a;) {
        e = e[E2(t[n++])];
      }
      return n && n == a ? e : undefined;
    }
    sf.exports = I2;
  });
  var jn = u((kC, lf) => {
    var T2 = zn();
    function y2(e, t, n) {
      var a = e == null ? undefined : T2(e, t);
      return a === undefined ? n : a;
    }
    lf.exports = y2;
  });
  var df = u((FC, cf) => {
    function m2(e, t) {
      return e != null && t in Object(e);
    }
    cf.exports = m2;
  });
  var uf = u((UC, ff) => {
    var g2 = dn();
    var b2 = an();
    var v2 = he();
    var O2 = Pn();
    var _2 = Gn();
    var L2 = xt();
    function h2(e, t, n) {
      t = g2(t, e);
      var a = -1;
      var r = t.length;
      for (var i = false; ++a < r;) {
        var o = L2(t[a]);
        if (!(i = e != null && n(e, o))) {
          break;
        }
        e = e[o];
      }
      return i || ++a != r ? i : (r = e == null ? 0 : e.length, !!r && _2(r) && O2(o, r) && (v2(e) || b2(e)));
    }
    ff.exports = h2;
  });
  var Ef = u((VC, pf) => {
    var R2 = df();
    var N2 = uf();
    function S2(e, t) {
      return e != null && N2(e, t, R2);
    }
    pf.exports = S2;
  });
  var Tf = u((xC, If) => {
    var A2 = Mi();
    var M2 = jn();
    var C2 = Ef();
    var w2 = Yn();
    var B2 = Ci();
    var k2 = wi();
    var F2 = xt();
    function x2(e, t) {
      return w2(e) && B2(t) ? k2(F2(e), t) : function (n) {
        var a = M2(n, e);
        return a === undefined && a === t ? C2(n, e) : A2(t, a, 3);
      };
    }
    If.exports = x2;
  });
  var Kn = u((DC, yf) => {
    function D2(e) {
      return e;
    }
    yf.exports = D2;
  });
  var Fi = u((PC, mf) => {
    function P2(e) {
      return function (t) {
        return t?.[e];
      };
    }
    mf.exports = P2;
  });
  var bf = u((GC, gf) => {
    var G2 = zn();
    function q2(e) {
      return function (t) {
        return G2(t, e);
      };
    }
    gf.exports = q2;
  });
  var Of = u((qC, vf) => {
    var W2 = Fi();
    var Q2 = bf();
    var H2 = Yn();
    var X2 = xt();
    function Y2(e) {
      return H2(e) ? W2(X2(e)) : Q2(e);
    }
    vf.exports = Y2;
  });
  var ot = u((WC, _f) => {
    var z2 = Dd();
    var j2 = Tf();
    var K2 = Kn();
    var $2 = he();
    var Z2 = Of();
    function J2(e) {
      return typeof e == "function" ? e : e == null ? K2 : typeof e == "object" ? $2(e) ? j2(e[0], e[1]) : z2(e) : Z2(e);
    }
    _f.exports = J2;
  });
  var Ui = u((QC, Lf) => {
    var e7 = ot();
    var t7 = It();
    var n7 = ln();
    function a7(e) {
      return function (t, n, a) {
        var r = Object(t);
        if (!t7(t)) {
          var i = e7(n, 3);
          t = n7(t);
          n = function (s) {
            return i(r[s], s, r);
          };
        }
        var o = e(t, n, a);
        return o > -1 ? r[i ? t[o] : o] : undefined;
      };
    }
    Lf.exports = a7;
  });
  var Vi = u((HC, hf) => {
    function i7(e, t, n, a) {
      var r = e.length;
      for (var i = n + (a ? 1 : -1); a ? i-- : ++i < r;) {
        if (t(e[i], i, e)) {
          return i;
        }
      }
      return -1;
    }
    hf.exports = i7;
  });
  var Nf = u((XC, Rf) => {
    var r7 = /\s/;
    function o7(e) {
      for (var t = e.length; t-- && r7.test(e.charAt(t));) {
        ;
      }
      return t;
    }
    Rf.exports = o7;
  });
  var Af = u((YC, Sf) => {
    var s7 = Nf();
    var l7 = /^\s+/;
    function c7(e) {
      return e && e.slice(0, s7(e) + 1).replace(l7, "");
    }
    Sf.exports = c7;
  });
  var $n = u((zC, wf) => {
    var d7 = Af();
    var Mf = Ye();
    var f7 = cn();
    var Cf = -NaN;
    var u7 = /^[-+]0x[0-9a-f]+$/i;
    var p7 = /^0b[01]+$/i;
    var E7 = /^0o[0-7]+$/i;
    function T7(e) {
      if (typeof e == "number") {
        return e;
      }
      if (f7(e)) {
        return Cf;
      }
      if (Mf(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Mf(t) ? t + "" : t;
      }
      if (typeof e != "string") {
        return e === 0 ? e : +e;
      }
      e = d7(e);
      var n = p7.test(e);
      return n || E7.test(e) ? parseInt(e.slice(2), n ? 2 : 8) : u7.test(e) ? Cf : +e;
    }
    wf.exports = T7;
  });
  var Ff = u((jC, kf) => {
    var y7 = $n();
    function g7(e) {
      if (!e) {
        return e === 0 ? e : 0;
      }
      e = y7(e);
      if (e === Infinity || e === -Infinity) {
        var t = e < 0 ? -1 : 1;
        return t * 17976931348623157e292;
      }
      return e === e ? e : 0;
    }
    kf.exports = g7;
  });
  var xi = u((KC, Uf) => {
    var b7 = Ff();
    function v7(e) {
      var t = b7(e);
      var n = t % 1;
      return t === t ? n ? t - n : t : 0;
    }
    Uf.exports = v7;
  });
  var xf = u(($C, Vf) => {
    var O7 = Vi();
    var _7 = ot();
    var L7 = xi();
    var h7 = Math.max;
    function R7(e, t, n) {
      var a = e == null ? 0 : e.length;
      if (!a) {
        return -1;
      }
      var r = n == null ? 0 : L7(n);
      if (r < 0) {
        r = h7(a + r, 0);
      }
      return O7(e, _7(t, 3), r);
    }
    Vf.exports = R7;
  });
  var Di = u((ZC, Df) => {
    var N7 = Ui();
    var S7 = xf();
    var A7 = N7(S7);
    Df.exports = A7;
  });
  var Jn = u(Pi => {
    "use strict";

    Object.defineProperty(Pi, "__esModule", {
      value: true
    });
    function M7(e, t) {
      for (var n in t) Object.defineProperty(e, n, {
        enumerable: true,
        get: t[n]
      });
    }
    M7(Pi, {
      ELEMENT_MATCHES: function () {
        return B7;
      },
      FLEX_PREFIXED: function () {
        return k7;
      },
      IS_BROWSER_ENV: function () {
        return Gf;
      },
      TRANSFORM_PREFIXED: function () {
        return qf;
      },
      TRANSFORM_STYLE_PREFIXED: function () {
        return F7;
      },
      withBrowser: function () {
        return Zn;
      }
    });
    var C7 = Di() && Di().__esModule ? Di() : {
      default: Di()
    };
    var Gf = typeof window < "u";
    var Zn = (e, t) => Gf ? e() : t;
    var B7 = Gf ? (() => (0, C7.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype))() : undefined;
    var k7 = Gf ? (() => {
      let e = document.createElement("i");
      let t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
      try {
        let {
          length: a
        } = t;
        for (let r = 0; r < a; r++) {
          let i = t[r];
          e.style.display = i;
          if (e.style.display === i) {
            return i;
          }
        }
        return "";
      } catch {
        return "";
      }
    })() : "flex";
    var qf = Gf ? (() => {
      let e = document.createElement("i");
      if (e.style.transform == null) {
        let t = ["Webkit", "Moz", "ms"];
        let {
          length: a
        } = t;
        for (let r = 0; r < a; r++) {
          let i = t[r] + "Transform";
          if (e.style[i] !== undefined) {
            return i;
          }
        }
      }
      return "transform";
    })() : "transform";
    var Pf = qf.split("transform")[0];
    var F7 = Pf ? Pf + "TransformStyle" : "transformStyle";
  });
  var Gi = u((ew, Yf) => {
    var P7 = typeof Float32Array == "function";
    function G7(e, t, n, a, r) {
      var i;
      var o;
      var s = 0;
      do {
        o = t + (n - t) / 2;
        i = (((1 - 3 * r + 3 * a) * o + (3 * r - 6 * a)) * o + 3 * a) * o - e;
        if (i > 0) {
          n = o;
        } else {
          t = o;
        }
      } while (Math.abs(i) > 1e-7 && ++s < 10);
      return o;
    }
    function q7(e, t, n, a) {
      for (var r = 0; r < 4; ++r) {
        var i = 3 * (1 - 3 * a + 3 * n) * t * t + 2 * (3 * a - 6 * n) * t + 3 * n;
        if (i === 0) {
          return t;
        }
        var o = (((1 - 3 * a + 3 * n) * t + (3 * a - 6 * n)) * t + 3 * n) * t - e;
        t -= o / i;
      }
      return t;
    }
    Yf.exports = function (t, n, a, r) {
      if (!(0 <= t && t <= 1 && 0 <= a && a <= 1)) {
        throw new Error("bezier x values must be in [0, 1] range");
      }
      var i = P7 ? new Float32Array(11) : new Array(11);
      if (t !== n || a !== r) {
        for (var o = 0; o < 11; ++o) {
          i[o] = (((1 - 3 * a + 3 * t) * (o * 0.1) + (3 * a - 6 * t)) * (o * 0.1) + 3 * t) * (o * 0.1);
        }
      }
      function s(l) {
        var d = 0;
        var b = 1;
        for (; b !== 10 && i[b] <= l; ++b) {
          d += 0.1;
        }
        --b;
        var y = (l - i[b]) / (i[b + 1] - i[b]);
        var T = d + y * 0.1;
        var m = 3 * (1 - 3 * a + 3 * t) * T * T + 2 * (3 * a - 6 * t) * T + 3 * t;
        return m >= .001 ? q7(l, T, t, a) : m === 0 ? T : G7(l, d, d + 0.1, t, a);
      }
      return function (d) {
        return t === n && a === r ? d : d === 0 ? 0 : d === 1 ? 1 : (((1 - 3 * r + 3 * n) * s(d) + (3 * r - 6 * n)) * s(d) + 3 * n) * s(d);
      };
    };
  });
  var Wi = u(qi => {
    "use strict";

    Object.defineProperty(qi, "__esModule", {
      value: true
    });
    function W7(e, t) {
      for (var n in t) Object.defineProperty(e, n, {
        enumerable: true,
        get: t[n]
      });
    }
    W7(qi, {
      bounce: function () {
        return R4;
      },
      bouncePast: function () {
        return N4;
      },
      ease: function () {
        return H7;
      },
      easeIn: function () {
        return X7;
      },
      easeInOut: function () {
        return z7;
      },
      easeOut: function () {
        return Y7;
      },
      inBack: function () {
        return y4;
      },
      inCirc: function () {
        return p4;
      },
      inCubic: function () {
        return Z7;
      },
      inElastic: function () {
        return b4;
      },
      inExpo: function () {
        return d4;
      },
      inOutBack: function () {
        return g4;
      },
      inOutCirc: function () {
        return I4;
      },
      inOutCubic: function () {
        return e4;
      },
      inOutElastic: function () {
        return O4;
      },
      inOutExpo: function () {
        return u4;
      },
      inOutQuad: function () {
        return $7;
      },
      inOutQuart: function () {
        return a4;
      },
      inOutQuint: function () {
        return o4;
      },
      inOutSine: function () {
        return c4;
      },
      inQuad: function () {
        return j7;
      },
      inQuart: function () {
        return t4;
      },
      inQuint: function () {
        return i4;
      },
      inSine: function () {
        return s4;
      },
      outBack: function () {
        return m4;
      },
      outBounce: function () {
        return T4;
      },
      outCirc: function () {
        return E4;
      },
      outCubic: function () {
        return J7;
      },
      outElastic: function () {
        return v4;
      },
      outExpo: function () {
        return f4;
      },
      outQuad: function () {
        return K7;
      },
      outQuart: function () {
        return n4;
      },
      outQuint: function () {
        return r4;
      },
      outSine: function () {
        return l4;
      },
      swingFrom: function () {
        return L4;
      },
      swingFromTo: function () {
        return _4;
      },
      swingTo: function () {
        return h4;
      }
    });
    var na = Gi() && Gi().__esModule ? Gi() : {
      default: Gi()
    };
    0;
    var H7 = na.default(.25, .1, .25, 1);
    0;
    var X7 = na.default(.42, 0, 1, 1);
    0;
    var Y7 = na.default(0, 0, .58, 1);
    0;
    var z7 = na.default(.42, 0, .58, 1);
    function j7(e) {
      return Math.pow(e, 2);
    }
    function K7(e) {
      return -(Math.pow(e - 1, 2) - 1);
    }
    function $7(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2);
    }
    function Z7(e) {
      return Math.pow(e, 3);
    }
    function J7(e) {
      return Math.pow(e - 1, 3) + 1;
    }
    function e4(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2);
    }
    function t4(e) {
      return Math.pow(e, 4);
    }
    function n4(e) {
      return -(Math.pow(e - 1, 4) - 1);
    }
    function a4(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2);
    }
    function i4(e) {
      return Math.pow(e, 5);
    }
    function r4(e) {
      return Math.pow(e - 1, 5) + 1;
    }
    function o4(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2);
    }
    function s4(e) {
      return -Math.cos(e * (Math.PI / 2)) + 1;
    }
    function l4(e) {
      return Math.sin(e * (Math.PI / 2));
    }
    function c4(e) {
      return -.5 * (Math.cos(Math.PI * e) - 1);
    }
    function d4(e) {
      return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
    }
    function f4(e) {
      return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
    }
    function u4(e) {
      return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2);
    }
    function p4(e) {
      return -(Math.sqrt(1 - e * e) - 1);
    }
    function E4(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2));
    }
    function I4(e) {
      return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
    }
    function T4(e) {
      return e < 0.36363636363636365 ? 7.5625 * e * e : e < 0.7272727272727273 ? 7.5625 * (e -= 0.5454545454545454) * e + .75 : e < 0.9090909090909091 ? 7.5625 * (e -= 0.8181818181818182) * e + .9375 : 7.5625 * (e -= 0.9545454545454546) * e + .984375;
    }
    function y4(e) {
      return e * e * (2.70158 * e - 1.70158);
    }
    function m4(e) {
      return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
    }
    function g4(e) {
      let t = 1.70158;
      return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function b4(e) {
      let t = 1.70158;
      let n = 0;
      let a = 1;
      return e === 0 ? 0 : e === 1 ? 1 : (n || (n = .3), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)));
    }
    function v4(e) {
      let t = 1.70158;
      let n = 0;
      let a = 1;
      return e === 0 ? 0 : e === 1 ? 1 : (n || (n = .3), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), a * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / n) + 1);
    }
    function O4(e) {
      let t = 1.70158;
      let n = 0;
      let a = 1;
      return e === 0 ? 0 : (e /= 0.5) === 2 ? 1 : (n || (n = 0.44999999999999996), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), e < 1 ? -.5 * (a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)) : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * .5 + 1);
    }
    function _4(e) {
      let t = 1.70158;
      return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function L4(e) {
      return e * e * (2.70158 * e - 1.70158);
    }
    function h4(e) {
      return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
    }
    function R4(e) {
      return e < 0.36363636363636365 ? 7.5625 * e * e : e < 0.7272727272727273 ? 7.5625 * (e -= 0.5454545454545454) * e + .75 : e < 0.9090909090909091 ? 7.5625 * (e -= 0.8181818181818182) * e + .9375 : 7.5625 * (e -= 0.9545454545454546) * e + .984375;
    }
    function N4(e) {
      return e < 0.36363636363636365 ? 7.5625 * e * e : e < 0.7272727272727273 ? 2 - (7.5625 * (e -= 0.5454545454545454) * e + .75) : e < 0.9090909090909091 ? 2 - (7.5625 * (e -= 0.8181818181818182) * e + .9375) : 2 - (7.5625 * (e -= 0.9545454545454546) * e + .984375);
    }
  });
  var Xi = u(Hi => {
    "use strict";

    Object.defineProperty(Hi, "__esModule", {
      value: true
    });
    function S4(e, t) {
      for (var n in t) Object.defineProperty(e, n, {
        enumerable: true,
        get: t[n]
      });
    }
    S4(Hi, {
      applyEasing: function () {
        return B4;
      },
      createBezierEasing: function () {
        return w4;
      },
      optimizeFloat: function () {
        return Qi;
      }
    });
    var zf = C4(Wi());
    var A4 = Gi() && Gi().__esModule ? Gi() : {
      default: Gi()
    };
    function jf(e) {
      if (typeof WeakMap != "function") {
        return null;
      }
      var t = new WeakMap();
      var n = new WeakMap();
      return (jf = function (a) {
        return a ? n : t;
      })(e);
    }
    function C4(e, t) {
      if (!t && e && e.__esModule) {
        return e;
      }
      if (e === null || typeof e != "object" && typeof e != "function") {
        return {
          default: e
        };
      }
      var n = jf(t);
      if (n && n.has(e)) {
        return n.get(e);
      }
      var a = {
        __proto__: null
      };
      var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e) if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
        var o = r ? Object.getOwnPropertyDescriptor(e, i) : null;
        if (o && (o.get || o.set)) {
          Object.defineProperty(a, i, o);
        } else {
          a[i] = e[i];
        }
      }
      a.default = e;
      if (n) {
        n.set(e, a);
      }
      return a;
    }
    function Qi(e, t = 5, n = 10) {
      let a = Math.pow(n, t);
      let r = Number(Math.round(e * a) / a);
      return Math.abs(r) > 1e-4 ? r : 0;
    }
    function w4(e) {
      0;
      return A4.default(...e);
    }
    function B4(e, t, n) {
      return t === 0 ? 0 : t === 1 ? 1 : Qi(n ? t > 0 ? n(t) : t : t > 0 && e && zf[e] ? zf[e](t) : t);
    }
  });
  var Jf = u(zi => {
    "use strict";

    Object.defineProperty(zi, "__esModule", {
      value: true
    });
    function k4(e, t) {
      for (var n in t) Object.defineProperty(e, n, {
        enumerable: true,
        get: t[n]
      });
    }
    k4(zi, {
      createElementState: function () {
        return Zf;
      },
      ixElements: function () {
        return z4;
      },
      mergeActionState: function () {
        return Yi;
      }
    });
    var aa = Mt();
    var $f = we();
    var {
      HTML_ELEMENT: aw,
      PLAIN_OBJECT: F4,
      ABSTRACT_NODE: iw,
      CONFIG_X_VALUE: U4,
      CONFIG_Y_VALUE: V4,
      CONFIG_Z_VALUE: x4,
      CONFIG_VALUE: D4,
      CONFIG_X_UNIT: P4,
      CONFIG_Y_UNIT: G4,
      CONFIG_Z_UNIT: q4,
      CONFIG_UNIT: W4
    } = $f.IX2EngineConstants;
    var {
      IX2_SESSION_STOPPED: Q4,
      IX2_INSTANCE_ADDED: H4,
      IX2_ELEMENT_STATE_CHANGED: X4
    } = $f.IX2EngineActionTypes;
    var Kf = {};
    var z4 = (e = Kf, t = {}) => {
      switch (t.type) {
        case Q4:
          return Kf;
        case H4:
          {
            let {
              elementId: n,
              element: a,
              origin: r,
              actionItem: i,
              refType: o
            } = t.payload;
            let {
              actionTypeId: s
            } = i;
            let l = e;
            0;
            if (aa.getIn(l, [n, a]) !== a) {
              l = Zf(l, a, o, n, i);
            }
            return Yi(l, n, s, r, i);
          }
        case X4:
          {
            let {
              elementId: n,
              actionTypeId: a,
              current: r,
              actionItem: i
            } = t.payload;
            return Yi(e, n, a, r, i);
          }
        default:
          return e;
      }
    };
    function Zf(e, t, n, a, r) {
      let i = n === F4 ? (0, aa.getIn)(r, ["config", "target", "objectId"]) : null;
      0;
      return aa.mergeIn(e, [a], {
        id: a,
        ref: t,
        refId: i,
        refType: n
      });
    }
    function Yi(e, t, n, a, r) {
      let i = K4(r);
      let o = [t, "refState", n];
      0;
      return aa.mergeIn(e, o, a, i);
    }
    var j4 = [[U4, P4], [V4, G4], [x4, q4], [D4, W4]];
    function K4(e) {
      let {
        config: t
      } = e;
      return j4.reduce((n, a) => {
        let r = a[0];
        let i = a[1];
        let o = t[r];
        let s = t[i];
        if (o != null && s != null) {
          n[i] = s;
        }
        return n;
      }, {});
    }
  });
  var eu = u(ji => {
    "use strict";

    Object.defineProperty(ji, "__esModule", {
      value: true
    });
    function $4(e, t) {
      for (var n in t) Object.defineProperty(e, n, {
        enumerable: true,
        get: t[n]
      });
    }
    $4(ji, {
      clearPlugin: function () {
        return iv;
      },
      createPluginInstance: function () {
        return nv;
      },
      getPluginConfig: function () {
        return Z4;
      },
      getPluginDestination: function () {
        return tv;
      },
      getPluginDuration: function () {
        return J4;
      },
      getPluginOrigin: function () {
        return ev;
      },
      renderPlugin: function () {
        return av;
      }
    });
    var Z4 = e => e.value;
    var J4 = (e, t) => {
      if (t.config.duration !== "auto") {
        return null;
      }
      let n = parseFloat(e.getAttribute("data-duration"));
      return n > 0 ? n * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    var ev = e => e || {
      value: 0
    };
    var tv = e => ({
      value: e.value
    });
    var nv = e => {
      let t = window.Webflow.require("lottie").createInstance(e);
      t.stop();
      t.setSubframe(true);
      return t;
    };
    var av = (e, t, n) => {
      if (!e) {
        return;
      }
      let a = t[n.actionTypeId].value / 100;
      e.goToFrame(e.frames * a);
    };
    var iv = e => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
  });
  var nu = u(Ki => {
    "use strict";

    Object.defineProperty(Ki, "__esModule", {
      value: true
    });
    function rv(e, t) {
      for (var n in t) Object.defineProperty(e, n, {
        enumerable: true,
        get: t[n]
      });
    }
    rv(Ki, {
      clearPlugin: function () {
        return Iv;
      },
      createPluginInstance: function () {
        return pv;
      },
      getPluginConfig: function () {
        return cv;
      },
      getPluginDestination: function () {
        return uv;
      },
      getPluginDuration: function () {
        return dv;
      },
      getPluginOrigin: function () {
        return fv;
      },
      renderPlugin: function () {
        return Ev;
      }
    });
    var lv = (e, t) => e.filter(n => !t.includes(n));
    var cv = (e, t) => e.value[t];
    var dv = () => null;
    var tu = Object.freeze({
      positionX: 0,
      positionY: 0,
      positionZ: 0,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      scaleX: 1,
      scaleY: 1,
      scaleZ: 1
    });
    var fv = (e, t) => {
      let n = t.config.value;
      let a = Object.keys(n);
      if (e) {
        let i = Object.keys(e);
        let o = lv(a, i);
        return o.length ? o.reduce((l, d) => (l[d] = tu[d], l), e) : e;
      }
      return a.reduce((i, o) => (i[o] = tu[o], i), {});
    };
    var uv = e => e.value;
    var pv = (e, t) => {
      let n = t?.config?.target?.pluginElement;
      return n ? document.querySelector(`[data-w-id="${n}"]`) : null;
    };
    var Ev = (e, t, n) => {
      let a = window.Webflow.require("spline");
      let r = a.getInstance(e);
      let i = n.config.target.objectId;
      let o = s => {
        if (!s) {
          throw new Error("Invalid spline app passed to renderSpline");
        }
        let l = i && s.findObjectById(i);
        if (!l) {
          return;
        }
        let {
          PLUGIN_SPLINE: d
        } = t;
        if (d.positionX != null) {
          l.position.x = d.positionX;
        }
        if (d.positionY != null) {
          l.position.y = d.positionY;
        }
        if (d.positionZ != null) {
          l.position.z = d.positionZ;
        }
        if (d.rotationX != null) {
          l.rotation.x = d.rotationX;
        }
        if (d.rotationY != null) {
          l.rotation.y = d.rotationY;
        }
        if (d.rotationZ != null) {
          l.rotation.z = d.rotationZ;
        }
        if (d.scaleX != null) {
          l.scale.x = d.scaleX;
        }
        if (d.scaleY != null) {
          l.scale.y = d.scaleY;
        }
        if (d.scaleZ != null) {
          l.scale.z = d.scaleZ;
        }
      };
      if (r) {
        o(r.spline);
      } else {
        a.setLoadHandler(e, o);
      }
    };
    var Iv = () => null;
  });
  var au = u(Ji => {
    "use strict";

    Object.defineProperty(Ji, "__esModule", {
      value: true
    });
    function Tv(e, t) {
      for (var n in t) Object.defineProperty(e, n, {
        enumerable: true,
        get: t[n]
      });
    }
    Tv(Ji, {
      clearPlugin: function () {
        return hv;
      },
      createPluginInstance: function () {
        return _v;
      },
      getPluginConfig: function () {
        return gv;
      },
      getPluginDestination: function () {
        return Ov;
      },
      getPluginDuration: function () {
        return bv;
      },
      getPluginOrigin: function () {
        return vv;
      },
      renderPlugin: function () {
        return Lv;
      }
    });
    var gv = (e, t) => e.value.inputs[t];
    var bv = () => null;
    var vv = (e, t) => {
      if (e) {
        return e;
      }
      let n = {};
      let {
        inputs: a = {}
      } = t.config.value;
      for (let r in a) if (a[r] == null) {
        n[r] = 0;
      }
      return n;
    };
    var Ov = e => e.value.inputs ?? {};
    var _v = (e, t) => {
      if ((t.config?.target?.selectorGuids || []).length > 0) {
        return e;
      }
      let a = t?.config?.target?.pluginElement;
      return a ? document.querySelector(`[data-w-id="${a}"]`) : null;
    };
    var Lv = (e, {
      PLUGIN_RIVE: t
    }, n) => {
      let a = window.Webflow.require("rive");
      let r = a.getInstance(e);
      let i = a.rive.StateMachineInputType;
      let {
        name: o,
        inputs: s = {}
      } = n.config.value || {};
      function l(d) {
        if (d.loaded) {
          b();
        } else {
          let f = () => {
            b();
            d?.off("load", f);
          };
          d?.on("load", f);
        }
        function b() {
          let f = d.stateMachineInputs(o);
          if (f != null) {
            if (!d.isPlaying) {
              d.play(o, false);
            }
            if ("--wf-rive-fit" in s || "--wf-rive-alignment" in s) {
              let y = d.layout;
              let T = s["--wf-rive-fit"] ?? y.fit;
              let m = s["--wf-rive-alignment"] ?? y.alignment;
              if (T !== y.fit || m !== y.alignment) {
                d.layout = y.copyWith({
                  fit: T,
                  alignment: m
                });
              }
            }
            for (let y in s) {
              if (y === "--wf-rive-fit" || y === "--wf-rive-alignment") {
                continue;
              }
              let T = f.find(m => m.name === y);
              if (T != null) {
                switch (T.type) {
                  case i.Boolean:
                    {
                      if (s[y] != null) {
                        let m = !!s[y];
                        T.value = m;
                      }
                      break;
                    }
                  case i.Number:
                    {
                      let m = t[y];
                      if (m != null) {
                        T.value = m;
                      }
                      break;
                    }
                  case i.Trigger:
                    {
                      if (s[y]) {
                        T.fire();
                      }
                      break;
                    }
                }
              }
            }
          }
        }
      }
      if (r?.rive) {
        l(r.rive);
      } else {
        a.setLoadHandler(e, l);
      }
    };
    var hv = (e, t) => null;
  });
  var tr = u(er => {
    "use strict";

    Object.defineProperty(er, "__esModule", {
      value: true
    });
    Object.defineProperty(er, "normalizeColor", {
      enumerable: true,
      get: function () {
        return Rv;
      }
    });
    var iu = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32"
    };
    function Rv(e) {
      let t;
      let n;
      let a;
      let r = 1;
      let i = e.replace(/\s/g, "").toLowerCase();
      let s = (typeof iu[i] == "string" ? iu[i].toLowerCase() : null) || i;
      if (s.startsWith("#")) {
        let l = s.substring(1);
        if (l.length === 3 || l.length === 4) {
          t = parseInt(l[0] + l[0], 16);
          n = parseInt(l[1] + l[1], 16);
          a = parseInt(l[2] + l[2], 16);
          if (l.length === 4) {
            r = parseInt(l[3] + l[3], 16) / 255;
          }
        } else if (l.length === 6 || l.length === 8) {
          t = parseInt(l.substring(0, 2), 16);
          n = parseInt(l.substring(2, 4), 16);
          a = parseInt(l.substring(4, 6), 16);
          if (l.length === 8) {
            r = parseInt(l.substring(6, 8), 16) / 255;
          }
        }
      } else if (s.startsWith("rgba")) {
        let l = s.match(/rgba\(([^)]+)\)/)[1].split(",");
        t = parseInt(l[0], 10);
        n = parseInt(l[1], 10);
        a = parseInt(l[2], 10);
        r = parseFloat(l[3]);
      } else if (s.startsWith("rgb")) {
        let l = s.match(/rgb\(([^)]+)\)/)[1].split(",");
        t = parseInt(l[0], 10);
        n = parseInt(l[1], 10);
        a = parseInt(l[2], 10);
      } else if (s.startsWith("hsla")) {
        let l = s.match(/hsla\(([^)]+)\)/)[1].split(",");
        let d = parseFloat(l[0]);
        let b = parseFloat(l[1].replace("%", "")) / 100;
        let f = parseFloat(l[2].replace("%", "")) / 100;
        r = parseFloat(l[3]);
        let y = (1 - Math.abs(2 * f - 1)) * b;
        let T = y * (1 - Math.abs(d / 60 % 2 - 1));
        let m = f - y / 2;
        let _;
        let R;
        let L;
        if (d >= 0 && d < 60) {
          _ = y;
          R = T;
          L = 0;
        } else if (d >= 60 && d < 120) {
          _ = T;
          R = y;
          L = 0;
        } else if (d >= 120 && d < 180) {
          _ = 0;
          R = y;
          L = T;
        } else if (d >= 180 && d < 240) {
          _ = 0;
          R = T;
          L = y;
        } else if (d >= 240 && d < 300) {
          _ = T;
          R = 0;
          L = y;
        } else {
          _ = y;
          R = 0;
          L = T;
        }
        t = Math.round((_ + m) * 255);
        n = Math.round((R + m) * 255);
        a = Math.round((L + m) * 255);
      } else if (s.startsWith("hsl")) {
        let l = s.match(/hsl\(([^)]+)\)/)[1].split(",");
        let d = parseFloat(l[0]);
        let b = parseFloat(l[1].replace("%", "")) / 100;
        let f = parseFloat(l[2].replace("%", "")) / 100;
        let y = (1 - Math.abs(2 * f - 1)) * b;
        let T = y * (1 - Math.abs(d / 60 % 2 - 1));
        let m = f - y / 2;
        let _;
        let R;
        let L;
        if (d >= 0 && d < 60) {
          _ = y;
          R = T;
          L = 0;
        } else if (d >= 60 && d < 120) {
          _ = T;
          R = y;
          L = 0;
        } else if (d >= 120 && d < 180) {
          _ = 0;
          R = y;
          L = T;
        } else if (d >= 180 && d < 240) {
          _ = 0;
          R = T;
          L = y;
        } else if (d >= 240 && d < 300) {
          _ = T;
          R = 0;
          L = y;
        } else {
          _ = y;
          R = 0;
          L = T;
        }
        t = Math.round((_ + m) * 255);
        n = Math.round((R + m) * 255);
        a = Math.round((L + m) * 255);
      }
      if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(a)) {
        throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
      }
      return {
        red: t,
        green: n,
        blue: a,
        alpha: r
      };
    }
  });
  var ru = u(nr => {
    "use strict";

    Object.defineProperty(nr, "__esModule", {
      value: true
    });
    function Nv(e, t) {
      for (var n in t) Object.defineProperty(e, n, {
        enumerable: true,
        get: t[n]
      });
    }
    Nv(nr, {
      clearPlugin: function () {
        return Uv;
      },
      createPluginInstance: function () {
        return Bv;
      },
      getPluginConfig: function () {
        return Av;
      },
      getPluginDestination: function () {
        return wv;
      },
      getPluginDuration: function () {
        return Mv;
      },
      getPluginOrigin: function () {
        return Cv;
      },
      renderPlugin: function () {
        return Fv;
      }
    });
    var Sv = tr();
    var Av = (e, t) => e.value[t];
    var Mv = () => null;
    var Cv = (e, t) => {
      if (e) {
        return e;
      }
      let n = t.config.value;
      let a = t.config.target.objectId;
      let r = getComputedStyle(document.documentElement).getPropertyValue(a);
      if (n.size != null) {
        return {
          size: parseInt(r, 10)
        };
      }
      if (n.unit === "%" || n.unit === "-") {
        return {
          size: parseFloat(r)
        };
      }
      if (n.red != null && n.green != null && n.blue != null) {
        0;
        return Sv.normalizeColor(r);
      }
    };
    var wv = e => e.value;
    var Bv = () => null;
    var kv = {
      color: {
        match: ({
          red: e,
          green: t,
          blue: n,
          alpha: a
        }) => [e, t, n, a].every(r => r != null),
        getValue: ({
          red: e,
          green: t,
          blue: n,
          alpha: a
        }) => `rgba(${e}, ${t}, ${n}, ${a})`
      },
      size: {
        match: ({
          size: e
        }) => e != null,
        getValue: ({
          size: e
        }, t) => {
          switch (t) {
            case "-":
              return e;
            default:
              return `${e}${t}`;
          }
        }
      }
    };
    var Fv = (e, t, n) => {
      let {
        target: {
          objectId: a
        },
        value: {
          unit: r
        }
      } = n.config;
      let i = t.PLUGIN_VARIABLE;
      let o = Object.values(kv).find(s => s.match(i, r));
      if (o) {
        document.documentElement.style.setProperty(a, o.getValue(i, r));
      }
    };
    var Uv = (e, t) => {
      let n = t.config.target.objectId;
      document.documentElement.style.removeProperty(n);
    };
  });
  var su = u(ar => {
    "use strict";

    Object.defineProperty(ar, "__esModule", {
      value: true
    });
    Object.defineProperty(ar, "pluginMethodMap", {
      enumerable: true,
      get: function () {
        return Gv;
      }
    });
    var ia = we();
    var Vv = ra(eu());
    var xv = ra(nu());
    var Dv = ra(au());
    var Pv = ra(ru());
    function ou(e) {
      if (typeof WeakMap != "function") {
        return null;
      }
      var t = new WeakMap();
      var n = new WeakMap();
      return (ou = function (a) {
        return a ? n : t;
      })(e);
    }
    function ra(e, t) {
      if (!t && e && e.__esModule) {
        return e;
      }
      if (e === null || typeof e != "object" && typeof e != "function") {
        return {
          default: e
        };
      }
      var n = ou(t);
      if (n && n.has(e)) {
        return n.get(e);
      }
      var a = {
        __proto__: null
      };
      var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e) if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
        var o = r ? Object.getOwnPropertyDescriptor(e, i) : null;
        if (o && (o.get || o.set)) {
          Object.defineProperty(a, i, o);
        } else {
          a[i] = e[i];
        }
      }
      a.default = e;
      if (n) {
        n.set(e, a);
      }
      return a;
    }
    var Gv = new Map([[ia.ActionTypeConsts.PLUGIN_LOTTIE, {
      ...Vv
    }], [ia.ActionTypeConsts.PLUGIN_SPLINE, {
      ...xv
    }], [ia.ActionTypeConsts.PLUGIN_RIVE, {
      ...Dv
    }], [ia.ActionTypeConsts.PLUGIN_VARIABLE, {
      ...Pv
    }]]);
  });
  var rr = u(ir => {
    "use strict";

    Object.defineProperty(ir, "__esModule", {
      value: true
    });
    function qv(e, t) {
      for (var n in t) Object.defineProperty(e, n, {
        enumerable: true,
        get: t[n]
      });
    }
    qv(ir, {
      clearPlugin: function () {
        return $v;
      },
      createPluginInstance: function () {
        return jv;
      },
      getPluginConfig: function () {
        return Hv;
      },
      getPluginDestination: function () {
        return zv;
      },
      getPluginDuration: function () {
        return Yv;
      },
      getPluginOrigin: function () {
        return Xv;
      },
      isPluginType: function () {
        return Qv;
      },
      renderPlugin: function () {
        return Kv;
      }
    });
    var Wv = Jn();
    var lu = su();
    function Qv(e) {
      return lu.pluginMethodMap.has(e);
    }
    var yt = e => t => {
      if (!Wv.IS_BROWSER_ENV) {
        return () => null;
      }
      let n = lu.pluginMethodMap.get(t);
      if (!n) {
        throw new Error(`IX2 no plugin configured for: ${t}`);
      }
      let a = n[e];
      if (!a) {
        throw new Error(`IX2 invalid plugin method: ${e}`);
      }
      return a;
    };
    var Hv = yt("getPluginConfig");
    var Xv = yt("getPluginOrigin");
    var Yv = yt("getPluginDuration");
    var zv = yt("getPluginDestination");
    var jv = yt("createPluginInstance");
    var Kv = yt("renderPlugin");
    var $v = yt("clearPlugin");
  });
  var du = u((pw, cu) => {
    function Zv(e, t) {
      return e == null || e !== e ? t : e;
    }
    cu.exports = Zv;
  });
  var uu = u((Ew, fu) => {
    function Jv(e, t, n, a) {
      var r = -1;
      var i = e == null ? 0 : e.length;
      for (a && i && (n = e[++r]); ++r < i;) {
        n = t(n, e[r], r, e);
      }
      return n;
    }
    fu.exports = Jv;
  });
  var Eu = u((Iw, pu) => {
    function e8(e) {
      return function (t, n, a) {
        var r = -1;
        var i = Object(t);
        var o = a(t);
        for (var s = o.length; s--;) {
          var l = o[e ? s : ++r];
          if (n(i[l], l, i) === false) {
            break;
          }
        }
        return t;
      };
    }
    pu.exports = e8;
  });
  var Tu = u((Tw, Iu) => {
    var t8 = Eu();
    var n8 = t8();
    Iu.exports = n8;
  });
  var or = u((yw, yu) => {
    var a8 = Tu();
    var i8 = ln();
    function r8(e, t) {
      return e && a8(e, t, i8);
    }
    yu.exports = r8;
  });
  var gu = u((mw, mu) => {
    var o8 = It();
    function s8(e, t) {
      return function (n, a) {
        if (n == null) {
          return n;
        }
        if (!o8(n)) {
          return e(n, a);
        }
        var r = n.length;
        var i = t ? r : -1;
        for (var o = Object(n); (t ? i-- : ++i < r) && a(o[i], i, o) !== false;) {
          ;
        }
        return n;
      };
    }
    mu.exports = s8;
  });
  var sr = u((gw, bu) => {
    var l8 = or();
    var c8 = gu();
    var d8 = c8(l8);
    bu.exports = d8;
  });
  var Ou = u((bw, vu) => {
    function f8(e, t, n, a, r) {
      r(e, function (i, o, s) {
        n = a ? (a = false, i) : t(n, i, o, s);
      });
      return n;
    }
    vu.exports = f8;
  });
  var Lu = u((vw, _u) => {
    var u8 = uu();
    var p8 = sr();
    var E8 = ot();
    var I8 = Ou();
    var T8 = he();
    function y8(e, t, n) {
      var a = T8(e) ? u8 : I8;
      var r = arguments.length < 3;
      return a(e, E8(t, 4), n, r, p8);
    }
    _u.exports = y8;
  });
  var Ru = u((Ow, hu) => {
    var m8 = Vi();
    var g8 = ot();
    var b8 = xi();
    var v8 = Math.max;
    var O8 = Math.min;
    function _8(e, t, n) {
      var a = e == null ? 0 : e.length;
      if (!a) {
        return -1;
      }
      var r = a - 1;
      if (n !== undefined) {
        r = b8(n);
        r = n < 0 ? v8(a + r, 0) : O8(r, a - 1);
      }
      return m8(e, g8(t, 3), r, true);
    }
    hu.exports = _8;
  });
  var Su = u((_w, Nu) => {
    var L8 = Ui();
    var h8 = Ru();
    var R8 = L8(h8);
    Nu.exports = R8;
  });
  var Mu = u(lr => {
    "use strict";

    Object.defineProperty(lr, "__esModule", {
      value: true
    });
    Object.defineProperty(lr, "default", {
      enumerable: true,
      get: function () {
        return N8;
      }
    });
    function N8(e, t) {
      if (e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t) {
        return true;
      }
      if (typeof e != "object" || e === null || typeof t != "object" || t === null) {
        return false;
      }
      let n = Object.keys(e);
      let a = Object.keys(t);
      if (n.length !== a.length) {
        return false;
      }
      for (let r = 0; r < n.length; r++) {
        if (!Object.hasOwn(t, n[r]) || !(e[n[r]] === t[n[r]] ? e[n[r]] !== 0 || t[n[r]] !== 0 || 1 / e[n[r]] === 1 / t[n[r]] : e[n[r]] !== e[n[r]] && t[n[r]] !== t[n[r]])) {
          return false;
        }
      }
      return true;
    }
  });
  var ju = u(yr => {
    "use strict";

    Object.defineProperty(yr, "__esModule", {
      value: true
    });
    function A8(e, t) {
      for (var n in t) Object.defineProperty(e, n, {
        enumerable: true,
        get: t[n]
      });
    }
    A8(yr, {
      cleanupHTMLElement: function () {
        return SO;
      },
      clearAllStyles: function () {
        return NO;
      },
      clearObjectCache: function () {
        return z8;
      },
      getActionListProgress: function () {
        return MO;
      },
      getAffectedElements: function () {
        return Ir;
      },
      getComputedStyle: function () {
        return nO;
      },
      getDestinationValues: function () {
        return cO;
      },
      getElementId: function () {
        return Z8;
      },
      getInstanceId: function () {
        return K8;
      },
      getInstanceOrigin: function () {
        return rO;
      },
      getItemConfigByKey: function () {
        return lO;
      },
      getMaxDurationItemIndex: function () {
        return zu;
      },
      getNamespacedParameterId: function () {
        return BO;
      },
      getRenderType: function () {
        return Hu;
      },
      getStyleProp: function () {
        return dO;
      },
      mediaQueriesEqual: function () {
        return FO;
      },
      observeStore: function () {
        return tO;
      },
      reduceListToGroup: function () {
        return CO;
      },
      reifyState: function () {
        return J8;
      },
      renderHTMLElement: function () {
        return fO;
      },
      shallowEqual: function () {
        return xu.default;
      },
      shouldAllowMediaQuery: function () {
        return kO;
      },
      shouldNamespaceEventParameter: function () {
        return wO;
      },
      stringifyTarget: function () {
        return UO;
      }
    });
    var st = du() && du().__esModule ? du() : {
      default: du()
    };
    var fr = Lu() && Lu().__esModule ? Lu() : {
      default: Lu()
    };
    var dr = Su() && Su().__esModule ? Su() : {
      default: Su()
    };
    var Cu = Mt();
    var mt = we();
    var xu = Mu() && Mu().__esModule ? Mu() : {
      default: Mu()
    };
    var M8 = Xi();
    var C8 = tr();
    var Ke = rr();
    var Me = Jn();
    var {
      BACKGROUND: w8,
      TRANSFORM: B8,
      TRANSLATE_3D: k8,
      SCALE_3D: F8,
      ROTATE_X: U8,
      ROTATE_Y: V8,
      ROTATE_Z: x8,
      SKEW: D8,
      PRESERVE_3D: P8,
      FLEX: G8,
      OPACITY: sa,
      FILTER: un,
      FONT_VARIATION_SETTINGS: pn,
      WIDTH: ze,
      HEIGHT: je,
      BACKGROUND_COLOR: Du,
      BORDER_COLOR: q8,
      COLOR: W8,
      CHILDREN: wu,
      IMMEDIATE_CHILDREN: Q8,
      SIBLINGS: Bu,
      PARENT: H8,
      DISPLAY: la,
      WILL_CHANGE: Dt,
      AUTO: lt,
      COMMA_DELIMITER: En,
      COLON_DELIMITER: X8,
      BAR_DELIMITER: cr,
      RENDER_TRANSFORM: Pu,
      RENDER_GENERAL: ur,
      RENDER_STYLE: pr,
      RENDER_PLUGIN: Gu
    } = mt.IX2EngineConstants;
    var {
      TRANSFORM_MOVE: Pt,
      TRANSFORM_SCALE: Gt,
      TRANSFORM_ROTATE: qt,
      TRANSFORM_SKEW: In,
      STYLE_OPACITY: qu,
      STYLE_FILTER: Tn,
      STYLE_FONT_VARIATION: yn,
      STYLE_SIZE: Wt,
      STYLE_BACKGROUND_COLOR: Qt,
      STYLE_BORDER: Ht,
      STYLE_TEXT_COLOR: Xt,
      GENERAL_DISPLAY: da,
      OBJECT_VALUE: Y8
    } = mt.ActionTypeConsts;
    var Wu = e => e.trim();
    var Er = Object.freeze({
      [Qt]: Du,
      [Ht]: q8,
      [Xt]: W8
    });
    var Qu = Object.freeze({
      [Me.TRANSFORM_PREFIXED]: B8,
      [Du]: w8,
      [sa]: sa,
      [un]: un,
      [ze]: ze,
      [je]: je,
      [pn]: pn
    });
    var oa = new Map();
    function z8() {
      oa.clear();
    }
    var j8 = 1;
    function K8() {
      return "i" + j8++;
    }
    var $8 = 1;
    function Z8(e, t) {
      for (let n in e) {
        let a = e[n];
        if (a && a.ref === t) {
          return a.id;
        }
      }
      return "e" + $8++;
    }
    function J8({
      events: e,
      actionLists: t,
      site: n
    } = {}) {
      0;
      let a = fr.default(e, (o, s) => {
        let {
          eventTypeId: l
        } = s;
        if (!o[l]) {
          o[l] = {};
        }
        o[l][s.id] = s;
        return o;
      }, {});
      let r = n && n.mediaQueries;
      let i = [];
      if (r) {
        i = r.map(o => o.key);
      } else {
        r = [];
        console.warn("IX2 missing mediaQueries in site data");
      }
      return {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: a,
          mediaQueries: r,
          mediaQueryKeys: i
        }
      };
    }
    var eO = (e, t) => e === t;
    function tO({
      store: e,
      select: t,
      onChange: n,
      comparator: a = eO
    }) {
      let {
        getState: r,
        subscribe: i
      } = e;
      let o = i(l);
      let s = t(r());
      function l() {
        let d = t(r());
        if (d == null) {
          o();
          return;
        }
        if (!a(d, s)) {
          s = d;
          n(s, e);
        }
      }
      return o;
    }
    function ku(e) {
      let t = typeof e;
      if (t === "string") {
        return {
          id: e
        };
      }
      if (e != null && t === "object") {
        let {
          id: n,
          objectId: a,
          selector: r,
          selectorGuids: i,
          appliesTo: o,
          useEventTarget: s
        } = e;
        return {
          id: n,
          objectId: a,
          selector: r,
          selectorGuids: i,
          appliesTo: o,
          useEventTarget: s
        };
      }
      return {};
    }
    function Ir({
      config: e,
      event: t,
      eventTarget: n,
      elementRoot: a,
      elementApi: r
    }) {
      if (!r) {
        throw new Error("IX2 missing elementApi");
      }
      let {
        targets: i
      } = e;
      if (Array.isArray(i) && i.length > 0) {
        return i.reduce((M, v) => M.concat(Ir({
          config: {
            target: v
          },
          event: t,
          eventTarget: n,
          elementRoot: a,
          elementApi: r
        })), []);
      }
      let {
        getValidDocument: o,
        getQuerySelector: s,
        queryDocument: l,
        getChildElements: d,
        getSiblingElements: b,
        matchSelector: f,
        elementContains: y,
        isSiblingNode: T
      } = r;
      let {
        target: m
      } = e;
      if (!m) {
        return [];
      }
      let {
        id: _,
        objectId: R,
        selector: L,
        selectorGuids: w,
        appliesTo: B,
        useEventTarget: F
      } = ku(m);
      if (R) {
        return [oa.has(R) ? oa.get(R) : oa.set(R, {}).get(R)];
      }
      if (B === mt.EventAppliesTo.PAGE) {
        let M = o(_);
        return M ? [M] : [];
      }
      let V = (t?.action?.config?.affectedElements ?? {})[_ || L] || {};
      let K = !!(V.id || V.selector);
      let z;
      let Z;
      let ee;
      let Q = t && s(ku(t.target));
      if (K) {
        z = V.limitAffectedElements;
        Z = Q;
        ee = s(V);
      } else {
        Z = ee = s({
          id: _,
          selector: L,
          selectorGuids: w
        });
      }
      if (t && F) {
        let M = n && (ee || F === true) ? [n] : l(Q);
        if (ee) {
          if (F === H8) {
            return l(ee).filter(v => M.some(k => y(v, k)));
          }
          if (F === wu) {
            return l(ee).filter(v => M.some(k => y(k, v)));
          }
          if (F === Bu) {
            return l(ee).filter(v => M.some(k => T(k, v)));
          }
        }
        return M;
      }
      return Z == null || ee == null ? [] : Me.IS_BROWSER_ENV && a ? l(ee).filter(M => a.contains(M)) : z === wu ? l(Z, ee) : z === Q8 ? d(l(Z)).filter(f(ee)) : z === Bu ? b(l(Z)).filter(f(ee)) : l(ee);
    }
    function nO({
      element: e,
      actionItem: t
    }) {
      if (!Me.IS_BROWSER_ENV) {
        return {};
      }
      let {
        actionTypeId: n
      } = t;
      switch (n) {
        case Wt:
        case Qt:
        case Ht:
        case Xt:
        case da:
          return window.getComputedStyle(e);
        default:
          return {};
      }
    }
    var Fu = /px/;
    var aO = (e, t) => t.reduce((n, a) => (n[a.type] == null && (n[a.type] = uO[a.type]), n), e || {});
    var iO = (e, t) => t.reduce((n, a) => (n[a.type] == null && (n[a.type] = pO[a.type] || a.defaultValue || 0), n), e || {});
    function rO(e, t = {}, n = {}, a, r) {
      let {
        getStyle: i
      } = r;
      let {
        actionTypeId: o
      } = a;
      0;
      if (Ke.isPluginType(o)) {
        0;
        return Ke.getPluginOrigin(o)(t[o], a);
      }
      switch (a.actionTypeId) {
        case Pt:
        case Gt:
        case qt:
        case In:
          return t[a.actionTypeId] || Tr[a.actionTypeId];
        case Tn:
          return aO(t[a.actionTypeId], a.config.filters);
        case yn:
          return iO(t[a.actionTypeId], a.config.fontVariations);
        case qu:
          0;
          return {
            value: st.default(parseFloat(i(e, sa)), 1)
          };
        case Wt:
          {
            let s = i(e, ze);
            let l = i(e, je);
            let d;
            let b;
            if (a.config.widthUnit === lt) {
              d = Fu.test(s) ? parseFloat(s) : parseFloat(n.width);
            } else {
              0;
              d = st.default(parseFloat(s), parseFloat(n.width));
            }
            if (a.config.heightUnit === lt) {
              b = Fu.test(l) ? parseFloat(l) : parseFloat(n.height);
            } else {
              0;
              b = st.default(parseFloat(l), parseFloat(n.height));
            }
            return {
              widthValue: d,
              heightValue: b
            };
          }
        case Qt:
        case Ht:
        case Xt:
          return LO({
            element: e,
            actionTypeId: a.actionTypeId,
            computedStyle: n,
            getStyle: i
          });
        case da:
          0;
          return {
            value: st.default(i(e, la), n.display)
          };
        case Y8:
          return t[a.actionTypeId] || {
            value: 0
          };
        default:
          return;
      }
    }
    var oO = (e, t) => (t && (e[t.type] = t.value || 0), e);
    var sO = (e, t) => (t && (e[t.type] = t.value || 0), e);
    var lO = (e, t, n) => {
      0;
      if (Ke.isPluginType(e)) {
        0;
        return Ke.getPluginConfig(e)(n, t);
      }
      switch (e) {
        case Tn:
          {
            0;
            let a = dr.default(n.filters, ({
              type: r
            }) => r === t);
            return a ? a.value : 0;
          }
        case yn:
          {
            0;
            let a = dr.default(n.fontVariations, ({
              type: r
            }) => r === t);
            return a ? a.value : 0;
          }
        default:
          return n[t];
      }
    };
    function cO({
      element: e,
      actionItem: t,
      elementApi: n
    }) {
      0;
      if (Ke.isPluginType(t.actionTypeId)) {
        0;
        return Ke.getPluginDestination(t.actionTypeId)(t.config);
      }
      switch (t.actionTypeId) {
        case Pt:
        case Gt:
        case qt:
        case In:
          {
            let {
              xValue: a,
              yValue: r,
              zValue: i
            } = t.config;
            return {
              xValue: a,
              yValue: r,
              zValue: i
            };
          }
        case Wt:
          {
            let {
              getStyle: a,
              setStyle: r,
              getProperty: i
            } = n;
            let {
              widthUnit: o,
              heightUnit: s
            } = t.config;
            let {
              widthValue: l,
              heightValue: d
            } = t.config;
            if (!Me.IS_BROWSER_ENV) {
              return {
                widthValue: l,
                heightValue: d
              };
            }
            if (o === lt) {
              let b = a(e, ze);
              r(e, ze, "");
              l = i(e, "offsetWidth");
              r(e, ze, b);
            }
            if (s === lt) {
              let b = a(e, je);
              r(e, je, "");
              d = i(e, "offsetHeight");
              r(e, je, b);
            }
            return {
              widthValue: l,
              heightValue: d
            };
          }
        case Qt:
        case Ht:
        case Xt:
          {
            let {
              rValue: a,
              gValue: r,
              bValue: i,
              aValue: o,
              globalSwatchId: s
            } = t.config;
            if (s && s.startsWith("--")) {
              let {
                getStyle: l
              } = n;
              let d = l(e, s);
              0;
              let b = C8.normalizeColor(d);
              return {
                rValue: b.red,
                gValue: b.green,
                bValue: b.blue,
                aValue: b.alpha
              };
            }
            return {
              rValue: a,
              gValue: r,
              bValue: i,
              aValue: o
            };
          }
        case Tn:
          return t.config.filters.reduce(oO, {});
        case yn:
          return t.config.fontVariations.reduce(sO, {});
        default:
          {
            let {
              value: a
            } = t.config;
            return {
              value: a
            };
          }
      }
    }
    function Hu(e) {
      if (/^TRANSFORM_/.test(e)) {
        return Pu;
      }
      if (/^STYLE_/.test(e)) {
        return pr;
      }
      if (/^GENERAL_/.test(e)) {
        return ur;
      }
      if (/^PLUGIN_/.test(e)) {
        return Gu;
      }
    }
    function dO(e, t) {
      return e === pr ? t.replace("STYLE_", "").toLowerCase() : null;
    }
    function fO(e, t, n, a, r, i, o, s, l) {
      switch (s) {
        case Pu:
          return TO(e, t, n, r, o);
        case pr:
          return hO(e, t, n, r, i, o);
        case ur:
          return RO(e, r, o);
        case Gu:
          {
            let {
              actionTypeId: d
            } = r;
            0;
            if (Ke.isPluginType(d)) {
              0;
              return Ke.renderPlugin(d)(l, t, r);
            }
          }
      }
    }
    var Tr = {
      [Pt]: Object.freeze({
        xValue: 0,
        yValue: 0,
        zValue: 0
      }),
      [Gt]: Object.freeze({
        xValue: 1,
        yValue: 1,
        zValue: 1
      }),
      [qt]: Object.freeze({
        xValue: 0,
        yValue: 0,
        zValue: 0
      }),
      [In]: Object.freeze({
        xValue: 0,
        yValue: 0
      })
    };
    var uO = Object.freeze({
      blur: 0,
      "hue-rotate": 0,
      invert: 0,
      grayscale: 0,
      saturate: 100,
      sepia: 0,
      contrast: 100,
      brightness: 100
    });
    var pO = Object.freeze({
      wght: 0,
      opsz: 0,
      wdth: 0,
      slnt: 0
    });
    var EO = (e, t) => {
      0;
      let n = dr.default(t.filters, ({
        type: a
      }) => a === e);
      if (n && n.unit) {
        return n.unit;
      }
      switch (e) {
        case "blur":
          return "px";
        case "hue-rotate":
          return "deg";
        default:
          return "%";
      }
    };
    var IO = Object.keys(Tr);
    function TO(e, t, n, a, r) {
      let i = IO.map(s => {
        let l = Tr[s];
        let {
          xValue: d = l.xValue,
          yValue: b = l.yValue,
          zValue: f = l.zValue,
          xUnit: y = "",
          yUnit: T = "",
          zUnit: m = ""
        } = t[s] || {};
        switch (s) {
          case Pt:
            return `${k8}(${d}${y}, ${b}${T}, ${f}${m})`;
          case Gt:
            return `${F8}(${d}${y}, ${b}${T}, ${f}${m})`;
          case qt:
            return `${U8}(${d}${y}) ${V8}(${b}${T}) ${x8}(${f}${m})`;
          case In:
            return `${D8}(${d}${y}, ${b}${T})`;
          default:
            return "";
        }
      }).join(" ");
      let {
        setStyle: o
      } = r;
      gt(e, Me.TRANSFORM_PREFIXED, r);
      o(e, Me.TRANSFORM_PREFIXED, i);
      if (gO(a, n)) {
        o(e, Me.TRANSFORM_STYLE_PREFIXED, P8);
      }
    }
    function yO(e, t, n, a) {
      0;
      let r = fr.default(t, (o, s, l) => `${o} ${l}(${s}${EO(l, n)})`, "");
      let {
        setStyle: i
      } = a;
      gt(e, un, a);
      i(e, un, r);
    }
    function mO(e, t, n, a) {
      0;
      let r = fr.default(t, (o, s, l) => (o.push(`"${l}" ${s}`), o), []).join(", ");
      let {
        setStyle: i
      } = a;
      gt(e, pn, a);
      i(e, pn, r);
    }
    function gO({
      actionTypeId: e
    }, {
      xValue: t,
      yValue: n,
      zValue: a
    }) {
      return e === Pt && a !== undefined || e === Gt && a !== undefined || e === qt && (t !== undefined || n !== undefined);
    }
    var vO = /^rgb/;
    var OO = RegExp(`rgba?${"\\(([^)]+)\\)"}`);
    function _O(e, t) {
      let n = e.exec(t);
      return n ? n[1] : "";
    }
    function LO({
      element: e,
      actionTypeId: t,
      computedStyle: n,
      getStyle: a
    }) {
      let r = Er[t];
      let i = a(e, r);
      let o = vO.test(i) ? i : n[r];
      let s = _O(OO, o).split(En);
      0;
      0;
      0;
      0;
      return {
        rValue: st.default(parseInt(s[0], 10), 255),
        gValue: st.default(parseInt(s[1], 10), 255),
        bValue: st.default(parseInt(s[2], 10), 255),
        aValue: st.default(parseFloat(s[3]), 1)
      };
    }
    function hO(e, t, n, a, r, i) {
      let {
        setStyle: o
      } = i;
      switch (a.actionTypeId) {
        case Wt:
          {
            let {
              widthUnit: s = "",
              heightUnit: l = ""
            } = a.config;
            let {
              widthValue: d,
              heightValue: b
            } = n;
            if (d !== undefined) {
              if (s === lt) {
                s = "px";
              }
              gt(e, ze, i);
              o(e, ze, d + s);
            }
            if (b !== undefined) {
              if (l === lt) {
                l = "px";
              }
              gt(e, je, i);
              o(e, je, b + l);
            }
            break;
          }
        case Tn:
          {
            yO(e, n, a.config, i);
            break;
          }
        case yn:
          {
            mO(e, n, a.config, i);
            break;
          }
        case Qt:
        case Ht:
        case Xt:
          {
            let s = Er[a.actionTypeId];
            let l = Math.round(n.rValue);
            let d = Math.round(n.gValue);
            let b = Math.round(n.bValue);
            let f = n.aValue;
            gt(e, s, i);
            o(e, s, f >= 1 ? `rgb(${l},${d},${b})` : `rgba(${l},${d},${b},${f})`);
            break;
          }
        default:
          {
            let {
              unit: s = ""
            } = a.config;
            gt(e, r, i);
            o(e, r, n.value + s);
            break;
          }
      }
    }
    function RO(e, t, n) {
      let {
        setStyle: a
      } = n;
      switch (t.actionTypeId) {
        case da:
          {
            let {
              value: r
            } = t.config;
            if (r === G8 && Me.IS_BROWSER_ENV) {
              a(e, la, Me.FLEX_PREFIXED);
            } else {
              a(e, la, r);
            }
            return;
          }
      }
    }
    function gt(e, t, n) {
      if (!Me.IS_BROWSER_ENV) {
        return;
      }
      let a = Qu[t];
      if (!a) {
        return;
      }
      let {
        getStyle: r,
        setStyle: i
      } = n;
      let o = r(e, Dt);
      if (!o) {
        i(e, Dt, a);
        return;
      }
      let s = o.split(En).map(Wu);
      if (s.indexOf(a) === -1) {
        i(e, Dt, s.concat(a).join(En));
      }
    }
    function Xu(e, t, n) {
      if (!Me.IS_BROWSER_ENV) {
        return;
      }
      let a = Qu[t];
      if (!a) {
        return;
      }
      let {
        getStyle: r,
        setStyle: i
      } = n;
      let o = r(e, Dt);
      if (!(!o || o.indexOf(a) === -1)) {
        i(e, Dt, o.split(En).map(Wu).filter(s => s !== a).join(En));
      }
    }
    function NO({
      store: e,
      elementApi: t
    }) {
      let {
        ixData: n
      } = e.getState();
      let {
        events: a = {},
        actionLists: r = {}
      } = n;
      Object.keys(a).forEach(i => {
        let o = a[i];
        let {
          config: s
        } = o.action;
        let {
          actionListId: l
        } = s;
        let d = r[l];
        if (d) {
          Uu({
            actionList: d,
            event: o,
            elementApi: t
          });
        }
      });
      Object.keys(r).forEach(i => {
        Uu({
          actionList: r[i],
          elementApi: t
        });
      });
    }
    function Uu({
      actionList: e = {},
      event: t,
      elementApi: n
    }) {
      let {
        actionItemGroups: a,
        continuousParameterGroups: r
      } = e;
      if (a) {
        a.forEach(i => {
          Vu({
            actionGroup: i,
            event: t,
            elementApi: n
          });
        });
      }
      if (r) {
        r.forEach(i => {
          let {
            continuousActionGroups: o
          } = i;
          o.forEach(s => {
            Vu({
              actionGroup: s,
              event: t,
              elementApi: n
            });
          });
        });
      }
    }
    function Vu({
      actionGroup: e,
      event: t,
      elementApi: n
    }) {
      let {
        actionItems: a
      } = e;
      a.forEach(r => {
        let {
          actionTypeId: i,
          config: o
        } = r;
        let s;
        0;
        if (Ke.isPluginType(i)) {
          s = l => (0, Ke.clearPlugin)(i)(l, r);
        } else {
          s = Yu({
            effect: AO,
            actionTypeId: i,
            elementApi: n
          });
        }
        Ir({
          config: o,
          event: t,
          elementApi: n
        }).forEach(s);
      });
    }
    function SO(e, t, n) {
      let {
        setStyle: a,
        getStyle: r
      } = n;
      let {
        actionTypeId: i
      } = t;
      if (i === Wt) {
        let {
          config: o
        } = t;
        if (o.widthUnit === lt) {
          a(e, ze, "");
        }
        if (o.heightUnit === lt) {
          a(e, je, "");
        }
      }
      if (r(e, Dt)) {
        Yu({
          effect: Xu,
          actionTypeId: i,
          elementApi: n
        })(e);
      }
    }
    var Yu = ({
      effect: e,
      actionTypeId: t,
      elementApi: n
    }) => a => {
      switch (t) {
        case Pt:
        case Gt:
        case qt:
        case In:
          e(a, Me.TRANSFORM_PREFIXED, n);
          break;
        case Tn:
          e(a, un, n);
          break;
        case yn:
          e(a, pn, n);
          break;
        case qu:
          e(a, sa, n);
          break;
        case Wt:
          e(a, ze, n);
          e(a, je, n);
          break;
        case Qt:
        case Ht:
        case Xt:
          e(a, Er[t], n);
          break;
        case da:
          e(a, la, n);
          break;
      }
    };
    function AO(e, t, n) {
      let {
        setStyle: a
      } = n;
      Xu(e, t, n);
      a(e, t, "");
      if (t === Me.TRANSFORM_PREFIXED) {
        a(e, Me.TRANSFORM_STYLE_PREFIXED, "");
      }
    }
    function zu(e) {
      let t = 0;
      let n = 0;
      e.forEach((a, r) => {
        let {
          config: i
        } = a;
        let o = i.delay + i.duration;
        if (o >= t) {
          t = o;
          n = r;
        }
      });
      return n;
    }
    function MO(e, t) {
      let {
        actionItemGroups: n,
        useFirstGroupAsInitialState: a
      } = e;
      let {
        actionItem: r,
        verboseTimeElapsed: i = 0
      } = t;
      let o = 0;
      let s = 0;
      n.forEach((l, d) => {
        if (a && d === 0) {
          return;
        }
        let {
          actionItems: b
        } = l;
        let f = b[zu(b)];
        let {
          config: y,
          actionTypeId: T
        } = f;
        if (r.id === f.id) {
          s = o + i;
        }
        let m = Hu(T) === ur ? 0 : y.duration;
        o += y.delay + m;
      });
      return o > 0 ? (0, M8.optimizeFloat)(s / o) : 0;
    }
    function CO({
      actionList: e,
      actionItemId: t,
      rawData: n
    }) {
      let {
        actionItemGroups: a,
        continuousParameterGroups: r
      } = e;
      let i = [];
      let o = s => (i.push((0, Cu.mergeIn)(s, ["config"], {
        delay: 0,
        duration: 0
      })), s.id === t);
      if (a) {
        a.some(({
          actionItems: s
        }) => s.some(o));
      }
      if (r) {
        r.some(s => {
          let {
            continuousActionGroups: l
          } = s;
          return l.some(({
            actionItems: d
          }) => d.some(o));
        });
      }
      0;
      return Cu.setIn(n, ["actionLists"], {
        [e.id]: {
          id: e.id,
          actionItemGroups: [{
            actionItems: i
          }]
        }
      });
    }
    function wO(e, {
      basedOn: t
    }) {
      return e === mt.EventTypeConsts.SCROLLING_IN_VIEW && (t === mt.EventBasedOn.ELEMENT || t == null) || e === mt.EventTypeConsts.MOUSE_MOVE && t === mt.EventBasedOn.ELEMENT;
    }
    function BO(e, t) {
      return e + X8 + t;
    }
    function kO(e, t) {
      return t == null ? true : e.indexOf(t) !== -1;
    }
    function FO(e, t) {
      0;
      return xu.default(e && e.sort(), t && t.sort());
    }
    function UO(e) {
      if (typeof e == "string") {
        return e;
      }
      if (e.pluginElement && e.objectId) {
        return e.pluginElement + cr + e.objectId;
      }
      if (e.objectId) {
        return e.objectId;
      }
      let {
        id: t = "",
        selector: n = "",
        useEventTarget: a = ""
      } = e;
      return t + cr + n + cr + a;
    }
  });
  var bt = u(mr => {
    "use strict";

    Object.defineProperty(mr, "__esModule", {
      value: true
    });
    function VO(e, t) {
      for (var n in t) Object.defineProperty(e, n, {
        enumerable: true,
        get: t[n]
      });
    }
    VO(mr, {
      IX2BrowserSupport: function () {
        return xO;
      },
      IX2EasingUtils: function () {
        return PO;
      },
      IX2Easings: function () {
        return DO;
      },
      IX2ElementsReducer: function () {
        return GO;
      },
      IX2VanillaPlugins: function () {
        return qO;
      },
      IX2VanillaUtils: function () {
        return WO;
      }
    });
    var xO = Yt(Jn());
    var DO = Yt(Wi());
    var PO = Yt(Xi());
    var GO = Yt(Jf());
    var qO = Yt(rr());
    var WO = Yt(ju());
    function Ku(e) {
      if (typeof WeakMap != "function") {
        return null;
      }
      var t = new WeakMap();
      var n = new WeakMap();
      return (Ku = function (a) {
        return a ? n : t;
      })(e);
    }
    function Yt(e, t) {
      if (!t && e && e.__esModule) {
        return e;
      }
      if (e === null || typeof e != "object" && typeof e != "function") {
        return {
          default: e
        };
      }
      var n = Ku(t);
      if (n && n.has(e)) {
        return n.get(e);
      }
      var a = {
        __proto__: null
      };
      var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e) if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
        var o = r ? Object.getOwnPropertyDescriptor(e, i) : null;
        if (o && (o.get || o.set)) {
          Object.defineProperty(a, i, o);
        } else {
          a[i] = e[i];
        }
      }
      a.default = e;
      if (n) {
        n.set(e, a);
      }
      return a;
    }
  });
  var ep = u(br => {
    "use strict";

    Object.defineProperty(br, "__esModule", {
      value: true
    });
    Object.defineProperty(br, "ixInstances", {
      enumerable: true,
      get: function () {
        return n_;
      }
    });
    var $u = we();
    var Zu = bt();
    var zt = Mt();
    var {
      IX2_RAW_DATA_IMPORTED: QO,
      IX2_SESSION_STOPPED: HO,
      IX2_INSTANCE_ADDED: XO,
      IX2_INSTANCE_STARTED: YO,
      IX2_INSTANCE_REMOVED: zO,
      IX2_ANIMATION_FRAME_CHANGED: jO
    } = $u.IX2EngineActionTypes;
    var {
      optimizeFloat: fa,
      applyEasing: Ju,
      createBezierEasing: KO
    } = Zu.IX2EasingUtils;
    var {
      RENDER_GENERAL: $O
    } = $u.IX2EngineConstants;
    var {
      getItemConfigByKey: gr,
      getRenderType: ZO,
      getStyleProp: JO
    } = Zu.IX2VanillaUtils;
    var e_ = (e, t) => {
      let {
        position: n,
        parameterId: a,
        actionGroups: r,
        destinationKeys: i,
        smoothing: o,
        restingValue: s,
        actionTypeId: l,
        customEasingFn: d,
        skipMotion: b,
        skipToValue: f
      } = e;
      let {
        parameters: y
      } = t.payload;
      let T = Math.max(1 - o, .01);
      let m = y[a];
      if (m == null) {
        T = 1;
        m = s;
      }
      let _ = Math.max(m, 0) || 0;
      let R = fa(_ - n);
      let L = b ? f : fa(n + R * T);
      let w = L * 100;
      if (L === n && e.current) {
        return e;
      }
      let B;
      let F;
      let x;
      let V;
      let z = 0;
      for (let {
        length: Z
      } = r; z < Z; z++) {
        let {
          keyframe: ee,
          actionItems: Q
        } = r[z];
        if (z === 0) {
          B = Q[0];
        }
        if (w >= ee) {
          B = Q[0];
          let M = r[z + 1];
          let v = M && w !== ee;
          F = v ? M.actionItems[0] : null;
          if (v) {
            x = ee / 100;
            V = (M.keyframe - ee) / 100;
          }
        }
      }
      let K = {};
      if (B && !F) {
        let z = 0;
        for (let {
          length: Z
        } = i; z < Z; z++) {
          let ee = i[z];
          K[ee] = gr(l, ee, B.config);
        }
      } else if (B && F && x !== undefined && V !== undefined) {
        let z = (L - x) / V;
        let Z = B.config.easing;
        let ee = Ju(Z, z, d);
        let Q = 0;
        for (let {
          length: M
        } = i; Q < M; Q++) {
          let v = i[Q];
          let k = gr(l, v, B.config);
          let te = (gr(l, v, F.config) - k) * ee + k;
          K[v] = te;
        }
      }
      0;
      return zt.merge(e, {
        position: L,
        current: K
      });
    };
    var t_ = (e, t) => {
      let {
        active: n,
        origin: a,
        start: r,
        immediate: i,
        renderType: o,
        verbose: s,
        actionItem: l,
        destination: d,
        destinationKeys: b,
        pluginDuration: f,
        instanceDelay: y,
        customEasingFn: T,
        skipMotion: m
      } = e;
      let _ = l.config.easing;
      let {
        duration: R,
        delay: L
      } = l.config;
      if (f != null) {
        R = f;
      }
      L = y ?? L;
      if (o === $O) {
        R = 0;
      } else if (i || m) {
        R = L = 0;
      }
      let {
        now: w
      } = t.payload;
      if (n && a) {
        let B = w - (r + L);
        if (s) {
          let z = w - r;
          let Z = R + L;
          let ee = fa(Math.min(Math.max(0, z / Z), 1));
          0;
          e = zt.set(e, "verboseTimeElapsed", Z * ee);
        }
        if (B < 0) {
          return e;
        }
        let F = fa(Math.min(Math.max(0, B / R), 1));
        let x = Ju(_, F, T);
        let V = {};
        let K = null;
        if (b.length) {
          K = b.reduce((z, Z) => {
            let ee = d[Z];
            let Q = parseFloat(a[Z]) || 0;
            let v = (parseFloat(ee) - Q) * x + Q;
            z[Z] = v;
            return z;
          }, {});
        }
        V.current = K;
        V.position = F;
        if (F === 1) {
          V.active = false;
          V.complete = true;
        }
        0;
        return zt.merge(e, V);
      }
      return e;
    };
    var n_ = (e = Object.freeze({}), t) => {
      switch (t.type) {
        case QO:
          return t.payload.ixInstances || Object.freeze({});
        case HO:
          return Object.freeze({});
        case XO:
          {
            let {
              instanceId: n,
              elementId: a,
              actionItem: r,
              eventId: i,
              eventTarget: o,
              eventStateKey: s,
              actionListId: l,
              groupIndex: d,
              isCarrier: b,
              origin: f,
              destination: y,
              immediate: T,
              verbose: m,
              continuous: _,
              parameterId: R,
              actionGroups: L,
              smoothing: w,
              restingValue: B,
              pluginInstance: F,
              pluginDuration: x,
              instanceDelay: V,
              skipMotion: K,
              skipToValue: z
            } = t.payload;
            let {
              actionTypeId: Z
            } = r;
            let ee = ZO(Z);
            let Q = JO(ee, Z);
            let M = Object.keys(y).filter(k => y[k] != null && typeof y[k] != "string");
            let {
              easing: v
            } = r.config;
            0;
            return zt.set(e, n, {
              id: n,
              elementId: a,
              active: false,
              position: 0,
              start: 0,
              origin: f,
              destination: y,
              destinationKeys: M,
              immediate: T,
              verbose: m,
              current: null,
              actionItem: r,
              actionTypeId: Z,
              eventId: i,
              eventTarget: o,
              eventStateKey: s,
              actionListId: l,
              groupIndex: d,
              renderType: ee,
              isCarrier: b,
              styleProp: Q,
              continuous: _,
              parameterId: R,
              actionGroups: L,
              smoothing: w,
              restingValue: B,
              pluginInstance: F,
              pluginDuration: x,
              instanceDelay: V,
              skipMotion: K,
              skipToValue: z,
              customEasingFn: Array.isArray(v) && v.length === 4 ? KO(v) : undefined
            });
          }
        case YO:
          {
            let {
              instanceId: n,
              time: a
            } = t.payload;
            0;
            return zt.mergeIn(e, [n], {
              active: true,
              complete: false,
              start: a
            });
          }
        case zO:
          {
            let {
              instanceId: n
            } = t.payload;
            if (!e[n]) {
              return e;
            }
            let a = {};
            let r = Object.keys(e);
            let {
              length: i
            } = r;
            for (let o = 0; o < i; o++) {
              let s = r[o];
              if (s !== n) {
                a[s] = e[s];
              }
            }
            return a;
          }
        case jO:
          {
            let n = e;
            let a = Object.keys(e);
            let {
              length: r
            } = a;
            for (let i = 0; i < r; i++) {
              let o = a[i];
              let s = e[o];
              let l = s.continuous ? e_ : t_;
              0;
              n = zt.set(n, o, l(s, t));
            }
            return n;
          }
        default:
          return e;
      }
    };
  });
  var tp = u(vr => {
    "use strict";

    Object.defineProperty(vr, "__esModule", {
      value: true
    });
    Object.defineProperty(vr, "ixParameters", {
      enumerable: true,
      get: function () {
        return s_;
      }
    });
    var a_ = we();
    var {
      IX2_RAW_DATA_IMPORTED: i_,
      IX2_SESSION_STOPPED: r_,
      IX2_PARAMETER_CHANGED: o_
    } = a_.IX2EngineActionTypes;
    var s_ = (e = {}, t) => {
      switch (t.type) {
        case i_:
          return t.payload.ixParameters || {};
        case r_:
          return {};
        case o_:
          {
            let {
              key: n,
              value: a
            } = t.payload;
            e[n] = a;
            return e;
          }
        default:
          return e;
      }
    };
  });
  var np = u(Or => {
    "use strict";

    Object.defineProperty(Or, "__esModule", {
      value: true
    });
    Object.defineProperty(Or, "default", {
      enumerable: true,
      get: function () {
        return T_;
      }
    });
    var l_ = ei();
    var c_ = Is();
    var d_ = ks();
    var f_ = Us();
    var u_ = bt();
    var p_ = ep();
    var E_ = tp();
    var {
      ixElements: I_
    } = u_.IX2ElementsReducer;
    0;
    var T_ = l_.combineReducers({
      ixData: c_.ixData,
      ixRequest: d_.ixRequest,
      ixSession: f_.ixSession,
      ixElements: I_,
      ixInstances: p_.ixInstances,
      ixParameters: E_.ixParameters
    });
  });
  var ip = u((Mw, ap) => {
    var y_ = it();
    var m_ = he();
    var g_ = et();
    function v_(e) {
      return typeof e == "string" || !m_(e) && g_(e) && y_(e) == "[object String]";
    }
    ap.exports = v_;
  });
  var op = u((Cw, rp) => {
    var O_ = Fi();
    var __ = O_("length");
    rp.exports = __;
  });
  var lp = u((ww, sp) => {
    var C_ = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    function w_(e) {
      return C_.test(e);
    }
    sp.exports = w_;
  });
  var yp = u((Bw, Tp) => {
    var G_ = "(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", "(?:\\ud83c[\\udde6-\\uddff]){2}", "[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|") + ")" + "[\\ufe0e\\ufe0f]?" + "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?" + ")*";
    var q_ = "[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?" + G_;
    var W_ = "(?:" + ["[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?", "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "(?:\\ud83c[\\udde6-\\uddff]){2}", "[\\ud800-\\udbff][\\udc00-\\udfff]", "[\\ud800-\\udfff]"].join("|") + ")";
    var cp = RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|" + W_ + q_, "g");
    function Q_(e) {
      for (var t = cp.lastIndex = 0; cp.test(e);) {
        ++t;
      }
      return t;
    }
    Tp.exports = Q_;
  });
  var gp = u((kw, mp) => {
    var H_ = op();
    var X_ = lp();
    var Y_ = yp();
    function z_(e) {
      return X_(e) ? Y_(e) : H_(e);
    }
    mp.exports = z_;
  });
  var vp = u((Fw, bp) => {
    var j_ = Qn();
    var K_ = Hn();
    var $_ = It();
    var Z_ = ip();
    var J_ = gp();
    function nL(e) {
      if (e == null) {
        return 0;
      }
      if ($_(e)) {
        return Z_(e) ? J_(e) : e.length;
      }
      var t = K_(e);
      return t == "[object Map]" || t == "[object Set]" ? e.size : j_(e).length;
    }
    bp.exports = nL;
  });
  var _p = u((Uw, Op) => {
    function iL(e) {
      if (typeof e != "function") {
        throw new TypeError("Expected a function");
      }
      return function () {
        switch (arguments.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, arguments[0]);
          case 2:
            return !e.call(this, arguments[0], arguments[1]);
          case 3:
            return !e.call(this, arguments[0], arguments[1], arguments[2]);
        }
        return !e.apply(this, arguments);
      };
    }
    Op.exports = iL;
  });
  var hr = u((Vw, Lp) => {
    var rL = rt();
    var oL = function () {
      try {
        var e = rL(Object, "defineProperty");
        e({}, "", {});
        return e;
      } catch {}
    }();
    Lp.exports = oL;
  });
  var Rr = u((xw, Rp) => {
    var hp = hr();
    function sL(e, t, n) {
      if (t == "__proto__" && hp) {
        hp(e, t, {
          configurable: true,
          enumerable: true,
          value: n,
          writable: true
        });
      } else {
        e[t] = n;
      }
    }
    Rp.exports = sL;
  });
  var Sp = u((Dw, Np) => {
    var lL = Rr();
    var cL = kn();
    var dL = Object.prototype;
    var fL = dL.hasOwnProperty;
    function uL(e, t, n) {
      var a = e[t];
      if (!(fL.call(e, t) && cL(a, n)) || n === undefined && !(t in e)) {
        lL(e, t, n);
      }
    }
    Np.exports = uL;
  });
  var Cp = u((Pw, Mp) => {
    var pL = Sp();
    var EL = dn();
    var IL = Pn();
    var Ap = Ye();
    var TL = xt();
    function yL(e, t, n, a) {
      if (!Ap(e)) {
        return e;
      }
      t = EL(t, e);
      var r = -1;
      var i = t.length;
      var o = i - 1;
      for (var s = e; s != null && ++r < i;) {
        var l = TL(t[r]);
        var d = n;
        if (l === "__proto__" || l === "constructor" || l === "prototype") {
          return e;
        }
        if (r != o) {
          var b = s[l];
          d = a ? a(b, l, s) : undefined;
          if (d === undefined) {
            d = Ap(b) ? b : IL(t[r + 1]) ? [] : {};
          }
        }
        pL(s, l, d);
        s = s[l];
      }
      return e;
    }
    Mp.exports = yL;
  });
  var Bp = u((Gw, wp) => {
    var mL = zn();
    var gL = Cp();
    var bL = dn();
    function vL(e, t, n) {
      var a = -1;
      var r = t.length;
      for (var i = {}; ++a < r;) {
        var o = t[a];
        var s = mL(e, o);
        if (n(s, o)) {
          gL(i, bL(o, e), s);
        }
      }
      return i;
    }
    wp.exports = vL;
  });
  var Fp = u((qw, kp) => {
    var OL = xn();
    var _L = Ga();
    var LL = bi();
    var hL = gi();
    var RL = Object.getOwnPropertySymbols;
    var NL = RL ? function (e) {
      for (var t = []; e;) {
        OL(t, LL(e));
        e = _L(e);
      }
      return t;
    } : hL;
    kp.exports = NL;
  });
  var Vp = u((Ww, Up) => {
    function SL(e) {
      var t = [];
      if (e != null) {
        for (var n in Object(e)) t.push(n);
      }
      return t;
    }
    Up.exports = SL;
  });
  var Dp = u((Qw, xp) => {
    var AL = Ye();
    var ML = Wn();
    var CL = Vp();
    var wL = Object.prototype;
    var BL = wL.hasOwnProperty;
    function kL(e) {
      if (!AL(e)) {
        return CL(e);
      }
      var t = ML(e);
      var n = [];
      for (var a in e) if (!(a == "constructor" && (t || !BL.call(e, a)))) {
        n.push(a);
      }
      return n;
    }
    xp.exports = kL;
  });
  var Gp = u((Hw, Pp) => {
    var FL = Oi();
    var UL = Dp();
    var VL = It();
    function xL(e) {
      return VL(e) ? FL(e, true) : UL(e);
    }
    Pp.exports = xL;
  });
  var Wp = u((Xw, qp) => {
    var DL = mi();
    var PL = Fp();
    var GL = Gp();
    function qL(e) {
      return DL(e, GL, PL);
    }
    qp.exports = qL;
  });
  var Hp = u((Yw, Qp) => {
    var WL = ki();
    var QL = ot();
    var HL = Bp();
    var XL = Wp();
    function YL(e, t) {
      if (e == null) {
        return {};
      }
      var n = WL(XL(e), function (a) {
        return [a];
      });
      t = QL(t);
      return HL(e, n, function (a, r) {
        return t(a, r[0]);
      });
    }
    Qp.exports = YL;
  });
  var Yp = u((zw, Xp) => {
    var zL = ot();
    var jL = _p();
    var KL = Hp();
    function $L(e, t) {
      return KL(e, jL(zL(t)));
    }
    Xp.exports = $L;
  });
  var jp = u((jw, zp) => {
    var ZL = Qn();
    var JL = Hn();
    var e9 = an();
    var t9 = he();
    var n9 = It();
    var a9 = Dn();
    var i9 = Wn();
    var r9 = qn();
    var l9 = Object.prototype;
    var c9 = l9.hasOwnProperty;
    function d9(e) {
      if (e == null) {
        return true;
      }
      if (n9(e) && (t9(e) || typeof e == "string" || typeof e.splice == "function" || a9(e) || r9(e) || e9(e))) {
        return !e.length;
      }
      var t = JL(e);
      if (t == "[object Map]" || t == "[object Set]") {
        return !e.size;
      }
      if (i9(e)) {
        return !ZL(e).length;
      }
      for (var n in e) if (c9.call(e, n)) {
        return false;
      }
      return true;
    }
    zp.exports = d9;
  });
  var $p = u((Kw, Kp) => {
    var f9 = Rr();
    var u9 = or();
    var p9 = ot();
    function E9(e, t) {
      var n = {};
      t = p9(t, 3);
      u9(e, function (a, r, i) {
        f9(n, r, t(a, r, i));
      });
      return n;
    }
    Kp.exports = E9;
  });
  var Jp = u(($w, Zp) => {
    function I9(e, t) {
      var n = -1;
      for (var a = e == null ? 0 : e.length; ++n < a && t(e[n], n, e) !== false;) {
        ;
      }
      return e;
    }
    Zp.exports = I9;
  });
  var tE = u((Zw, eE) => {
    var T9 = Kn();
    function y9(e) {
      return typeof e == "function" ? e : T9;
    }
    eE.exports = y9;
  });
  var aE = u((Jw, nE) => {
    var m9 = Jp();
    var g9 = sr();
    var b9 = tE();
    var v9 = he();
    function O9(e, t) {
      var n = v9(e) ? m9 : g9;
      return n(e, b9(t));
    }
    nE.exports = O9;
  });
  var rE = u((eB, iE) => {
    var _9 = qe();
    var L9 = function () {
      return _9.Date.now();
    };
    iE.exports = L9;
  });
  var lE = u((tB, sE) => {
    var h9 = Ye();
    var Nr = rE();
    var oE = $n();
    var N9 = Math.max;
    var S9 = Math.min;
    function A9(e, t, n) {
      var a;
      var r;
      var i;
      var o;
      var s;
      var l;
      var d = 0;
      var b = false;
      var f = false;
      var y = true;
      if (typeof e != "function") {
        throw new TypeError("Expected a function");
      }
      t = oE(t) || 0;
      if (h9(n)) {
        b = !!n.leading;
        f = "maxWait" in n;
        i = f ? N9(oE(n.maxWait) || 0, t) : i;
        y = "trailing" in n ? !!n.trailing : y;
      }
      function T(V) {
        var K = a;
        var z = r;
        a = r = undefined;
        d = V;
        o = e.apply(z, K);
        return o;
      }
      function m(V) {
        d = V;
        s = setTimeout(L, t);
        return b ? T(V) : o;
      }
      function _(V) {
        var K = V - l;
        var z = V - d;
        var Z = t - K;
        return f ? S9(Z, i - z) : Z;
      }
      function R(V) {
        var K = V - l;
        var z = V - d;
        return l === undefined || K >= t || K < 0 || f && z >= i;
      }
      function L() {
        var V = Nr();
        if (R(V)) {
          return w(V);
        }
        s = setTimeout(L, _(V));
      }
      function w(V) {
        s = undefined;
        return y && a ? T(V) : (a = r = undefined, o);
      }
      function B() {
        if (s !== undefined) {
          clearTimeout(s);
        }
        d = 0;
        a = l = r = s = undefined;
      }
      function F() {
        return s === undefined ? o : w(Nr());
      }
      function x() {
        var V = Nr();
        var K = R(V);
        a = arguments;
        r = this;
        l = V;
        if (K) {
          if (s === undefined) {
            return m(l);
          }
          if (f) {
            clearTimeout(s);
            s = setTimeout(L, t);
            return T(l);
          }
        }
        if (s === undefined) {
          s = setTimeout(L, t);
        }
        return o;
      }
      x.cancel = B;
      x.flush = F;
      return x;
    }
    sE.exports = A9;
  });
  var dE = u((nB, cE) => {
    var M9 = lE();
    var C9 = Ye();
    function B9(e, t, n) {
      var a = true;
      var r = true;
      if (typeof e != "function") {
        throw new TypeError("Expected a function");
      }
      if (C9(n)) {
        a = "leading" in n ? !!n.leading : a;
        r = "trailing" in n ? !!n.trailing : r;
      }
      return M9(e, t, {
        leading: a,
        maxWait: t,
        trailing: r
      });
    }
    cE.exports = B9;
  });
  var ua = u(Sr => {
    "use strict";

    Object.defineProperty(Sr, "__esModule", {
      value: true
    });
    function k9(e, t) {
      for (var n in t) Object.defineProperty(e, n, {
        enumerable: true,
        get: t[n]
      });
    }
    k9(Sr, {
      actionListPlaybackChanged: function () {
        return bh;
      },
      animationFrameChanged: function () {
        return Eh;
      },
      clearRequested: function () {
        return dh;
      },
      elementStateChanged: function () {
        return gh;
      },
      eventListenerAdded: function () {
        return fh;
      },
      eventStateChanged: function () {
        return ph;
      },
      instanceAdded: function () {
        return Th;
      },
      instanceRemoved: function () {
        return mh;
      },
      instanceStarted: function () {
        return yh;
      },
      mediaQueriesDefined: function () {
        return Oh;
      },
      parameterChanged: function () {
        return Ih;
      },
      playbackRequested: function () {
        return lh;
      },
      previewRequested: function () {
        return sh;
      },
      rawDataImported: function () {
        return ah;
      },
      sessionInitialized: function () {
        return ih;
      },
      sessionStarted: function () {
        return rh;
      },
      sessionStopped: function () {
        return oh;
      },
      stopRequested: function () {
        return ch;
      },
      testFrameRendered: function () {
        return uh;
      },
      viewportWidthChanged: function () {
        return vh;
      }
    });
    var fE = we();
    var F9 = bt();
    var {
      IX2_RAW_DATA_IMPORTED: U9,
      IX2_SESSION_INITIALIZED: V9,
      IX2_SESSION_STARTED: x9,
      IX2_SESSION_STOPPED: D9,
      IX2_PREVIEW_REQUESTED: P9,
      IX2_PLAYBACK_REQUESTED: G9,
      IX2_STOP_REQUESTED: q9,
      IX2_CLEAR_REQUESTED: W9,
      IX2_EVENT_LISTENER_ADDED: Q9,
      IX2_TEST_FRAME_RENDERED: H9,
      IX2_EVENT_STATE_CHANGED: X9,
      IX2_ANIMATION_FRAME_CHANGED: Y9,
      IX2_PARAMETER_CHANGED: z9,
      IX2_INSTANCE_ADDED: j9,
      IX2_INSTANCE_STARTED: K9,
      IX2_INSTANCE_REMOVED: $9,
      IX2_ELEMENT_STATE_CHANGED: Z9,
      IX2_ACTION_LIST_PLAYBACK_CHANGED: J9,
      IX2_VIEWPORT_WIDTH_CHANGED: eh,
      IX2_MEDIA_QUERIES_DEFINED: th
    } = fE.IX2EngineActionTypes;
    var {
      reifyState: nh
    } = F9.IX2VanillaUtils;
    var ah = e => ({
      type: U9,
      payload: {
        ...nh(e)
      }
    });
    var ih = ({
      hasBoundaryNodes: e,
      reducedMotion: t
    }) => ({
      type: V9,
      payload: {
        hasBoundaryNodes: e,
        reducedMotion: t
      }
    });
    var rh = () => ({
      type: x9
    });
    var oh = () => ({
      type: D9
    });
    var sh = ({
      rawData: e,
      defer: t
    }) => ({
      type: P9,
      payload: {
        defer: t,
        rawData: e
      }
    });
    var lh = ({
      actionTypeId: e = fE.ActionTypeConsts.GENERAL_START_ACTION,
      actionListId: t,
      actionItemId: n,
      eventId: a,
      allowEvents: r,
      immediate: i,
      testManual: o,
      verbose: s,
      rawData: l
    }) => ({
      type: G9,
      payload: {
        actionTypeId: e,
        actionListId: t,
        actionItemId: n,
        testManual: o,
        eventId: a,
        allowEvents: r,
        immediate: i,
        verbose: s,
        rawData: l
      }
    });
    var ch = e => ({
      type: q9,
      payload: {
        actionListId: e
      }
    });
    var dh = () => ({
      type: W9
    });
    var fh = (e, t) => ({
      type: Q9,
      payload: {
        target: e,
        listenerParams: t
      }
    });
    var uh = (e = 1) => ({
      type: H9,
      payload: {
        step: e
      }
    });
    var ph = (e, t) => ({
      type: X9,
      payload: {
        stateKey: e,
        newState: t
      }
    });
    var Eh = (e, t) => ({
      type: Y9,
      payload: {
        now: e,
        parameters: t
      }
    });
    var Ih = (e, t) => ({
      type: z9,
      payload: {
        key: e,
        value: t
      }
    });
    var Th = e => ({
      type: j9,
      payload: {
        ...e
      }
    });
    var yh = (e, t) => ({
      type: K9,
      payload: {
        instanceId: e,
        time: t
      }
    });
    var mh = e => ({
      type: $9,
      payload: {
        instanceId: e
      }
    });
    var gh = (e, t, n, a) => ({
      type: Z9,
      payload: {
        elementId: e,
        actionTypeId: t,
        current: n,
        actionItem: a
      }
    });
    var bh = ({
      actionListId: e,
      isPlaying: t
    }) => ({
      type: J9,
      payload: {
        actionListId: e,
        isPlaying: t
      }
    });
    var vh = ({
      width: e,
      mediaQueries: t
    }) => ({
      type: eh,
      payload: {
        width: e,
        mediaQueries: t
      }
    });
    var Oh = () => ({
      type: th
    });
  });
  var EE = u(Mr => {
    "use strict";

    Object.defineProperty(Mr, "__esModule", {
      value: true
    });
    function _h(e, t) {
      for (var n in t) Object.defineProperty(e, n, {
        enumerable: true,
        get: t[n]
      });
    }
    _h(Mr, {
      elementContains: function () {
        return Fh;
      },
      getChildElements: function () {
        return Vh;
      },
      getClosestElement: function () {
        return Dh;
      },
      getProperty: function () {
        return Mh;
      },
      getQuerySelector: function () {
        return wh;
      },
      getRefType: function () {
        return Ph;
      },
      getSiblingElements: function () {
        return xh;
      },
      getStyle: function () {
        return Ah;
      },
      getValidDocument: function () {
        return Bh;
      },
      isSiblingNode: function () {
        return Uh;
      },
      matchSelector: function () {
        return Ch;
      },
      queryDocument: function () {
        return kh;
      },
      setStyle: function () {
        return Sh;
      }
    });
    var Lh = bt();
    var hh = we();
    var {
      ELEMENT_MATCHES: Ar
    } = Lh.IX2BrowserSupport;
    var {
      IX2_ID_DELIMITER: uE,
      HTML_ELEMENT: Rh,
      PLAIN_OBJECT: Nh,
      WF_PAGE: pE
    } = hh.IX2EngineConstants;
    function Sh(e, t, n) {
      e.style[t] = n;
    }
    function Ah(e, t) {
      if (t.startsWith("--")) {
        return window.getComputedStyle(document.documentElement).getPropertyValue(t);
      }
      if (e.style instanceof CSSStyleDeclaration) {
        return e.style[t];
      }
    }
    function Mh(e, t) {
      return e[t];
    }
    function Ch(e) {
      return t => t[Ar](e);
    }
    function wh({
      id: e,
      selector: t
    }) {
      if (e) {
        let n = e;
        if (e.indexOf(uE) !== -1) {
          let a = e.split(uE);
          let r = a[0];
          n = a[1];
          if (r !== document.documentElement.getAttribute(pE)) {
            return null;
          }
        }
        return `[data-w-id="${n}"], [data-w-id^="${n}_instance"]`;
      }
      return t;
    }
    function Bh(e) {
      return e == null || e === document.documentElement.getAttribute(pE) ? document : null;
    }
    function kh(e, t) {
      return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e));
    }
    function Fh(e, t) {
      return e.contains(t);
    }
    function Uh(e, t) {
      return e !== t && e.parentNode === t.parentNode;
    }
    function Vh(e) {
      let t = [];
      let n = 0;
      for (let {
        length: a
      } = e || []; n < a; n++) {
        let {
          children: r
        } = e[n];
        let {
          length: i
        } = r;
        if (i) {
          for (let o = 0; o < i; o++) {
            t.push(r[o]);
          }
        }
      }
      return t;
    }
    function xh(e = []) {
      let t = [];
      let n = [];
      let a = 0;
      for (let {
        length: r
      } = e; a < r; a++) {
        let {
          parentNode: i
        } = e[a];
        if (!i || !i.children || !i.children.length || n.indexOf(i) !== -1) {
          continue;
        }
        n.push(i);
        let o = i.firstElementChild;
        for (; o != null;) {
          if (e.indexOf(o) === -1) {
            t.push(o);
          }
          o = o.nextElementSibling;
        }
      }
      return t;
    }
    var Dh = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
      if (!document.documentElement.contains(e)) {
        return null;
      }
      let n = e;
      do {
        if (n[Ar] && n[Ar](t)) {
          return n;
        }
        n = n.parentNode;
      } while (n != null);
      return null;
    };
    function Ph(e) {
      return e != null && typeof e == "object" ? e instanceof Element ? Rh : Nh : null;
    }
  });
  var Cr = u((rB, TE) => {
    var Gh = Ye();
    var IE = Object.create;
    var qh = function () {
      function e() {}
      return function (t) {
        if (!Gh(t)) {
          return {};
        }
        if (IE) {
          return IE(t);
        }
        e.prototype = t;
        var n = new e();
        e.prototype = undefined;
        return n;
      };
    }();
    TE.exports = qh;
  });
  var pa = u((oB, yE) => {
    function Wh() {}
    yE.exports = Wh;
  });
  var Ia = u((sB, mE) => {
    var Qh = Cr();
    var Hh = pa();
    function Ea(e, t) {
      this.__wrapped__ = e;
      this.__actions__ = [];
      this.__chain__ = !!t;
      this.__index__ = 0;
      this.__values__ = undefined;
    }
    Ea.prototype = Qh(Hh.prototype);
    Ea.prototype.constructor = Ea;
    mE.exports = Ea;
  });
  var OE = u((lB, vE) => {
    var gE = Nt();
    var Xh = an();
    var Yh = he();
    var bE = gE ? gE.isConcatSpreadable : undefined;
    function zh(e) {
      return Yh(e) || Xh(e) || !!(bE && e && e[bE]);
    }
    vE.exports = zh;
  });
  var hE = u((cB, LE) => {
    var jh = xn();
    var Kh = OE();
    function _E(e, t, n, a, r) {
      var i = -1;
      var o = e.length;
      if (!n) {
        n = Kh;
      }
      for (r || (r = []); ++i < o;) {
        var s = e[i];
        if (t > 0 && n(s)) {
          if (t > 1) {
            _E(s, t - 1, n, a, r);
          } else {
            jh(r, s);
          }
        } else if (!a) {
          r[r.length] = s;
        }
      }
      return r;
    }
    LE.exports = _E;
  });
  var NE = u((dB, RE) => {
    var $h = hE();
    function Zh(e) {
      var t = e == null ? 0 : e.length;
      return t ? $h(e, 1) : [];
    }
    RE.exports = Zh;
  });
  var AE = u((fB, SE) => {
    function Jh(e, t, n) {
      switch (n.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, n[0]);
        case 2:
          return e.call(t, n[0], n[1]);
        case 3:
          return e.call(t, n[0], n[1], n[2]);
      }
      return e.apply(t, n);
    }
    SE.exports = Jh;
  });
  var wE = u((uB, CE) => {
    var eR = AE();
    var ME = Math.max;
    function tR(e, t, n) {
      t = ME(t === undefined ? e.length - 1 : t, 0);
      return function () {
        var r = -1;
        var i = ME(arguments.length - t, 0);
        for (var o = Array(i); ++r < i;) {
          o[r] = arguments[t + r];
        }
        r = -1;
        for (var s = Array(t + 1); ++r < t;) {
          s[r] = arguments[r];
        }
        s[t] = n(o);
        return eR(e, this, s);
      };
    }
    CE.exports = tR;
  });
  var kE = u((pB, BE) => {
    function nR(e) {
      return function () {
        return e;
      };
    }
    BE.exports = nR;
  });
  var VE = u((EB, UE) => {
    var aR = kE();
    var FE = hr();
    var iR = Kn();
    var rR = FE ? function (e, t) {
      return FE(e, "toString", {
        configurable: true,
        enumerable: false,
        value: aR(t),
        writable: true
      });
    } : iR;
    UE.exports = rR;
  });
  var DE = u((IB, xE) => {
    var lR = Date.now;
    function cR(e) {
      var t = 0;
      var n = 0;
      return function () {
        var a = lR();
        var r = 16 - (a - n);
        n = a;
        if (r > 0) {
          if (++t >= 800) {
            return arguments[0];
          }
        } else {
          t = 0;
        }
        return e.apply(undefined, arguments);
      };
    }
    xE.exports = cR;
  });
  var GE = u((TB, PE) => {
    var dR = VE();
    var fR = DE();
    var uR = fR(dR);
    PE.exports = uR;
  });
  var WE = u((yB, qE) => {
    var pR = NE();
    var ER = wE();
    var IR = GE();
    function TR(e) {
      return IR(ER(e, undefined, pR), e + "");
    }
    qE.exports = TR;
  });
  var XE = u((mB, HE) => {
    var QE = _i();
    var yR = QE && new QE();
    HE.exports = yR;
  });
  var zE = u((gB, YE) => {
    function mR() {}
    YE.exports = mR;
  });
  var wr = u((bB, KE) => {
    var jE = XE();
    var gR = zE();
    var bR = jE ? function (e) {
      return jE.get(e);
    } : gR;
    KE.exports = bR;
  });
  var ZE = u((vB, $E) => {
    var vR = {};
    $E.exports = vR;
  });
  var Br = u((OB, eI) => {
    var JE = ZE();
    var OR = Object.prototype;
    var _R = OR.hasOwnProperty;
    function LR(e) {
      var t = e.name + "";
      var n = JE[t];
      for (var a = _R.call(JE, t) ? n.length : 0; a--;) {
        var r = n[a];
        var i = r.func;
        if (i == null || i == e) {
          return r.name;
        }
      }
      return t;
    }
    eI.exports = LR;
  });
  var ya = u((_B, tI) => {
    var hR = Cr();
    var RR = pa();
    function Ta(e) {
      this.__wrapped__ = e;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = 4294967295;
      this.__views__ = [];
    }
    Ta.prototype = hR(RR.prototype);
    Ta.prototype.constructor = Ta;
    tI.exports = Ta;
  });
  var aI = u((LB, nI) => {
    function SR(e, t) {
      var n = -1;
      var a = e.length;
      for (t || (t = Array(a)); ++n < a;) {
        t[n] = e[n];
      }
      return t;
    }
    nI.exports = SR;
  });
  var rI = u((hB, iI) => {
    var AR = ya();
    var MR = Ia();
    var CR = aI();
    function wR(e) {
      if (e instanceof AR) {
        return e.clone();
      }
      var t = new MR(e.__wrapped__, e.__chain__);
      t.__actions__ = CR(e.__actions__);
      t.__index__ = e.__index__;
      t.__values__ = e.__values__;
      return t;
    }
    iI.exports = wR;
  });
  var lI = u((RB, sI) => {
    var BR = ya();
    var oI = Ia();
    var kR = pa();
    var FR = he();
    var UR = et();
    var VR = rI();
    var xR = Object.prototype;
    var DR = xR.hasOwnProperty;
    function ma(e) {
      if (UR(e) && !FR(e) && !(e instanceof BR)) {
        if (e instanceof oI) {
          return e;
        }
        if (DR.call(e, "__wrapped__")) {
          return VR(e);
        }
      }
      return new oI(e);
    }
    ma.prototype = kR.prototype;
    ma.prototype.constructor = ma;
    sI.exports = ma;
  });
  var dI = u((NB, cI) => {
    var PR = ya();
    var GR = wr();
    var qR = Br();
    var WR = lI();
    function QR(e) {
      var t = qR(e);
      var n = WR[t];
      if (typeof n != "function" || !(t in PR.prototype)) {
        return false;
      }
      if (e === n) {
        return true;
      }
      var a = GR(n);
      return !!a && e === a[0];
    }
    cI.exports = QR;
  });
  var EI = u((SB, pI) => {
    var fI = Ia();
    var HR = WE();
    var XR = wr();
    var kr = Br();
    var YR = he();
    var uI = dI();
    function JR(e) {
      return HR(function (t) {
        var n = t.length;
        var a = n;
        var r = fI.prototype.thru;
        for (e && t.reverse(); a--;) {
          var i = t[a];
          if (typeof i != "function") {
            throw new TypeError("Expected a function");
          }
          if (r && !o && kr(i) == "wrapper") {
            var o = new fI([], true);
          }
        }
        for (a = o ? a : n; ++a < n;) {
          i = t[a];
          var s = kr(i);
          var l = s == "wrapper" ? XR(i) : undefined;
          if (l && uI(l[0]) && l[1] == 424 && !l[4].length && l[9] == 1) {
            o = o[kr(l[0])].apply(o, l[3]);
          } else {
            o = i.length == 1 && uI(i) ? o[s]() : o.thru(i);
          }
        }
        return function () {
          var b = arguments[0];
          if (o && arguments.length == 1 && YR(b)) {
            return o.plant(b).value();
          }
          var f = 0;
          for (var y = n ? t[f].apply(this, arguments) : b; ++f < n;) {
            y = t[f].call(this, y);
          }
          return y;
        };
      });
    }
    pI.exports = JR;
  });
  var TI = u((AB, II) => {
    var eN = EI();
    var tN = eN();
    II.exports = tN;
  });
  var mI = u((MB, yI) => {
    function nN(e, t, n) {
      if (e === e) {
        if (n !== undefined) {
          e = e <= n ? e : n;
        }
        if (t !== undefined) {
          e = e >= t ? e : t;
        }
      }
      return e;
    }
    yI.exports = nN;
  });
  var bI = u((CB, gI) => {
    var aN = mI();
    var Fr = $n();
    function iN(e, t, n) {
      if (n === undefined) {
        n = t;
        t = undefined;
      }
      if (n !== undefined) {
        n = Fr(n);
        n = n === n ? n : 0;
      }
      if (t !== undefined) {
        t = Fr(t);
        t = t === t ? t : 0;
      }
      return aN(Fr(e), t, n);
    }
    gI.exports = iN;
  });
  var xI = u(Gr => {
    "use strict";

    Object.defineProperty(Gr, "__esModule", {
      value: true
    });
    Object.defineProperty(Gr, "default", {
      enumerable: true,
      get: function () {
        return PN;
      }
    });
    var rN = TI() && TI().__esModule ? TI() : {
      default: TI()
    };
    var oN = jn() && jn().__esModule ? jn() : {
      default: jn()
    };
    var sN = bI() && bI().__esModule ? bI() : {
      default: bI()
    };
    var vt = we();
    var Ur = qr();
    var ga = ua();
    var lN = bt();
    var {
      MOUSE_CLICK: cN,
      MOUSE_SECOND_CLICK: dN,
      MOUSE_DOWN: fN,
      MOUSE_UP: uN,
      MOUSE_OVER: pN,
      MOUSE_OUT: EN,
      DROPDOWN_CLOSE: IN,
      DROPDOWN_OPEN: TN,
      SLIDER_ACTIVE: yN,
      SLIDER_INACTIVE: mN,
      TAB_ACTIVE: gN,
      TAB_INACTIVE: bN,
      NAVBAR_CLOSE: vN,
      NAVBAR_OPEN: ON,
      MOUSE_MOVE: _N,
      PAGE_SCROLL_DOWN: AI,
      SCROLL_INTO_VIEW: MI,
      SCROLL_OUT_OF_VIEW: LN,
      PAGE_SCROLL_UP: hN,
      SCROLLING_IN_VIEW: RN,
      PAGE_FINISH: CI,
      ECOMMERCE_CART_CLOSE: NN,
      ECOMMERCE_CART_OPEN: SN,
      PAGE_START: wI,
      PAGE_SCROLL: AN
    } = vt.EventTypeConsts;
    var {
      COLON_DELIMITER: vI
    } = vt.IX2EngineConstants;
    var {
      getNamespacedParameterId: OI
    } = lN.IX2VanillaUtils;
    var kI = e => t => typeof t == "object" && e(t) ? true : t;
    var gn = kI(({
      element: e,
      nativeEvent: t
    }) => e === t.target);
    var MN = kI(({
      element: e,
      nativeEvent: t
    }) => e.contains(t.target));
    0;
    var $e = rN.default([gn, MN]);
    var FI = (e, t) => {
      if (t) {
        let {
          ixData: n
        } = e.getState();
        let {
          events: a
        } = n;
        let r = a[t];
        if (r && !wN[r.eventTypeId]) {
          return r;
        }
      }
      return null;
    };
    var CN = ({
      store: e,
      event: t
    }) => {
      let {
        action: n
      } = t;
      let {
        autoStopEventId: a
      } = n.config;
      return !!FI(e, a);
    };
    var ke = ({
      store: e,
      event: t,
      element: n,
      eventStateKey: a
    }, r) => {
      let {
        action: i,
        id: o
      } = t;
      let {
        actionListId: s,
        autoStopEventId: l
      } = i.config;
      let d = FI(e, l);
      if (d) {
        0;
        0;
        Ur.stopActionGroup({
          store: e,
          eventId: l,
          eventTarget: n,
          eventStateKey: l + vI + a.split(vI)[1],
          actionListId: oN.default(d, "action.config.actionListId")
        });
      }
      0;
      Ur.stopActionGroup({
        store: e,
        eventId: o,
        eventTarget: n,
        eventStateKey: a,
        actionListId: s
      });
      0;
      Ur.startActionGroup({
        store: e,
        eventId: o,
        eventTarget: n,
        eventStateKey: a,
        actionListId: s
      });
      return r;
    };
    var We = (e, t) => (n, a) => e(n, a) === true ? t(n, a) : a;
    var bn = {
      handler: We($e, ke)
    };
    var UI = {
      ...bn,
      types: ["COMPONENT_ACTIVE", "COMPONENT_INACTIVE"].join(" ")
    };
    var xr = [{
      target: window,
      types: "resize orientationchange",
      throttle: true
    }, {
      target: document,
      types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
      throttle: true
    }];
    var Dr = {
      types: xr
    };
    var wN = {
      PAGE_START: wI,
      PAGE_FINISH: CI
    };
    var mn = (() => {
      let e = window.pageXOffset !== undefined;
      let n = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
      return () => ({
        scrollLeft: e ? window.pageXOffset : n.scrollLeft,
        scrollTop: e ? window.pageYOffset : n.scrollTop,
        stiffScrollTop: (0, sN.default)(e ? window.pageYOffset : n.scrollTop, 0, n.scrollHeight - window.innerHeight),
        scrollWidth: n.scrollWidth,
        scrollHeight: n.scrollHeight,
        clientWidth: n.clientWidth,
        clientHeight: n.clientHeight,
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      });
    })();
    var kN = ({
      element: e,
      nativeEvent: t
    }) => {
      let {
        type: n,
        target: a,
        relatedTarget: r
      } = t;
      let i = e.contains(a);
      if (n === "mouseover" && i) {
        return true;
      }
      let o = e.contains(r);
      return !!(n === "mouseout" && i && o);
    };
    var FN = e => {
      let {
        element: t,
        event: {
          config: n
        }
      } = e;
      let {
        clientWidth: a,
        clientHeight: r
      } = mn();
      let i = n.scrollOffsetValue;
      let l = n.scrollOffsetUnit === "PX" ? i : r * (i || 0) / 100;
      return !(t.getBoundingClientRect().left > {
        left: 0,
        top: l,
        right: a,
        bottom: r - l
      }.right || t.getBoundingClientRect().right < {
        left: 0,
        top: l,
        right: a,
        bottom: r - l
      }.left || t.getBoundingClientRect().top > {
        left: 0,
        top: l,
        right: a,
        bottom: r - l
      }.bottom || t.getBoundingClientRect().bottom < {
        left: 0,
        top: l,
        right: a,
        bottom: r - l
      }.top);
    };
    var VI = e => (t, n) => {
      let {
        type: a
      } = t.nativeEvent;
      let r = ["COMPONENT_ACTIVE", "COMPONENT_INACTIVE"].indexOf(a) !== -1 ? a === "COMPONENT_ACTIVE" : n.isActive;
      let i = {
        ...n,
        isActive: r
      };
      return (!n || i.isActive !== n.isActive) && e(t, i) || i;
    };
    var LI = e => (t, n) => {
      let a = {
        elementHovered: kN(t)
      };
      return (n ? a.elementHovered !== n.elementHovered : a.elementHovered) && e(t, a) || a;
    };
    var UN = e => (t, n) => {
      let a = {
        ...n,
        elementVisible: FN(t)
      };
      return (n ? a.elementVisible !== n.elementVisible : a.elementVisible) && e(t, a) || a;
    };
    var hI = e => (t, n = {}) => {
      let {
        stiffScrollTop: a,
        scrollHeight: r,
        innerHeight: i
      } = mn();
      let {
        event: {
          config: o,
          eventTypeId: s
        }
      } = t;
      let {
        scrollOffsetValue: l,
        scrollOffsetUnit: d
      } = o;
      let b = d === "PX";
      let f = r - i;
      let y = Number((a / f).toFixed(2));
      if (n && n.percentTop === y) {
        return n;
      }
      let T = (b ? l : i * (l || 0) / 100) / f;
      let m;
      let _;
      let R = 0;
      if (n) {
        m = y > n.percentTop;
        _ = n.scrollingDown !== m;
        R = _ ? y : n.anchorTop;
      }
      let L = s === AI ? y >= R + T : y <= R - T;
      let w = {
        ...n,
        percentTop: y,
        inBounds: L,
        anchorTop: R,
        scrollingDown: m
      };
      return n && L && (_ || w.inBounds !== n.inBounds) && e(t, w) || w;
    };
    var xN = e => (t, n) => {
      let a = {
        finished: document.readyState === "complete"
      };
      if (a.finished && !(n && n.finshed)) {
        e(t);
      }
      return a;
    };
    var DN = e => (t, n) => {
      let a = {
        started: true
      };
      if (!n) {
        e(t);
      }
      return a;
    };
    var RI = e => (t, n = {
      clickCount: 0
    }) => {
      let a = {
        clickCount: n.clickCount % 2 + 1
      };
      return a.clickCount !== n.clickCount && e(t, a) || a;
    };
    var ba = (e = true) => ({
      ...UI,
      handler: We(e ? $e : gn, VI((t, n) => n.isActive ? bn.handler(t, n) : n))
    });
    var va = (e = true) => ({
      ...UI,
      handler: We(e ? $e : gn, VI((t, n) => n.isActive ? n : bn.handler(t, n)))
    });
    var NI = {
      ...Dr,
      handler: UN((e, t) => {
        let {
          elementVisible: n
        } = t;
        let {
          event: a,
          store: r
        } = e;
        let {
          ixData: i
        } = r.getState();
        let {
          events: o
        } = i;
        return !o[a.action.config.autoStopEventId] && t.triggered ? t : a.eventTypeId === MI === n ? (ke(e), {
          ...t,
          triggered: true
        }) : t;
      })
    };
    var PN = {
      [yN]: ba(),
      [mN]: va(),
      [TN]: ba(),
      [IN]: va(),
      [ON]: ba(false),
      [vN]: va(false),
      [gN]: ba(),
      [bN]: va(),
      [SN]: {
        types: "ecommerce-cart-open",
        handler: We($e, ke)
      },
      [NN]: {
        types: "ecommerce-cart-close",
        handler: We($e, ke)
      },
      [cN]: {
        types: "click",
        handler: We($e, RI((e, {
          clickCount: t
        }) => {
          if (CN(e)) {
            if (t === 1) {
              ke(e);
            }
          } else {
            ke(e);
          }
        }))
      },
      [dN]: {
        types: "click",
        handler: We($e, RI((e, {
          clickCount: t
        }) => {
          if (t === 2) {
            ke(e);
          }
        }))
      },
      [fN]: {
        ...bn,
        types: "mousedown"
      },
      [uN]: {
        ...bn,
        types: "mouseup"
      },
      [pN]: {
        types: "mouseover mouseout",
        handler: We($e, LI((e, t) => {
          if (t.elementHovered) {
            ke(e);
          }
        }))
      },
      [EN]: {
        types: "mouseover mouseout",
        handler: We($e, LI((e, t) => {
          if (!t.elementHovered) {
            ke(e);
          }
        }))
      },
      [_N]: {
        types: "mousemove mouseout scroll",
        handler: ({
          store: e,
          element: t,
          eventConfig: n,
          nativeEvent: a,
          eventStateKey: r
        }, i = {
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0
        }) => {
          let {
            basedOn: o,
            selectedAxis: s,
            continuousParameterGroupId: l,
            reverse: d,
            restingState: b = 0
          } = n;
          let {
            clientX: f = i.clientX,
            clientY: y = i.clientY,
            pageX: T = i.pageX,
            pageY: m = i.pageY
          } = a;
          let _ = s === "X_AXIS";
          let R = a.type === "mouseout";
          let L = b / 100;
          let w = l;
          let B = false;
          switch (o) {
            case vt.EventBasedOn.VIEWPORT:
              {
                L = _ ? Math.min(f, window.innerWidth) / window.innerWidth : Math.min(y, window.innerHeight) / window.innerHeight;
                break;
              }
            case vt.EventBasedOn.PAGE:
              {
                let {
                  scrollLeft: F,
                  scrollTop: x,
                  scrollWidth: V,
                  scrollHeight: K
                } = mn();
                L = _ ? Math.min(F + T, V) / V : Math.min(x + m, K) / K;
                break;
              }
            case vt.EventBasedOn.ELEMENT:
            default:
              {
                w = OI(r, l);
                let F = a.type.indexOf("mouse") === 0;
                if (F && $e({
                  element: t,
                  nativeEvent: a
                }) !== true) {
                  break;
                }
                let x = t.getBoundingClientRect();
                let {
                  left: V,
                  top: K,
                  width: z,
                  height: Z
                } = x;
                if (!F && !({
                  left: f,
                  top: y
                }.left > x.left && {
                  left: f,
                  top: y
                }.left < x.right && {
                  left: f,
                  top: y
                }.top > x.top && {
                  left: f,
                  top: y
                }.top < x.bottom)) {
                  break;
                }
                B = true;
                L = _ ? (f - V) / z : (y - K) / Z;
                break;
              }
          }
          if (R && (L > 0.95 || L < .05)) {
            L = Math.round(L);
          }
          if (o !== vt.EventBasedOn.ELEMENT || B || B !== i.elementHovered) {
            L = d ? 1 - L : L;
            0;
            e.dispatch(ga.parameterChanged(w, L));
          }
          return {
            elementHovered: B,
            clientX: f,
            clientY: y,
            pageX: T,
            pageY: m
          };
        }
      },
      [AN]: {
        types: xr,
        handler: ({
          store: e,
          eventConfig: t
        }) => {
          let {
            continuousParameterGroupId: n,
            reverse: a
          } = t;
          let {
            scrollTop: r,
            scrollHeight: i,
            clientHeight: o
          } = mn();
          let s = r / (i - o);
          s = a ? 1 - s : s;
          0;
          e.dispatch(ga.parameterChanged(n, s));
        }
      },
      [RN]: {
        types: xr,
        handler: ({
          element: e,
          store: t,
          eventConfig: n,
          eventStateKey: a
        }, r = {
          scrollPercent: 0
        }) => {
          let {
            scrollLeft: i,
            scrollTop: o,
            scrollWidth: s,
            scrollHeight: l,
            clientHeight: d
          } = mn();
          let {
            basedOn: b,
            selectedAxis: f,
            continuousParameterGroupId: y,
            startsEntering: T,
            startsExiting: m,
            addEndOffset: _,
            addStartOffset: R,
            addOffsetValue: L = 0,
            endOffsetValue: w = 0
          } = n;
          let B = f === "X_AXIS";
          if (b === vt.EventBasedOn.VIEWPORT) {
            let F = B ? i / s : o / l;
            if (F !== r.scrollPercent) {
              0;
              t.dispatch(ga.parameterChanged(y, F));
            }
            return {
              scrollPercent: F
            };
          } else {
            let F = OI(a, y);
            let x = e.getBoundingClientRect();
            let V = (R ? L : 0) / 100;
            let K = (_ ? w : 0) / 100;
            V = T ? V : 1 - V;
            K = m ? K : 1 - K;
            let z = x.top + Math.min(x.height * V, d);
            let ee = x.top + x.height * K - z;
            let Q = Math.min(d + ee, l);
            let v = Math.min(Math.max(0, d - z), Q) / Q;
            if (v !== r.scrollPercent) {
              0;
              t.dispatch(ga.parameterChanged(F, v));
            }
            return {
              scrollPercent: v
            };
          }
        }
      },
      [MI]: NI,
      [LN]: NI,
      [AI]: {
        ...Dr,
        handler: hI((e, t) => {
          if (t.scrollingDown) {
            ke(e);
          }
        })
      },
      [hN]: {
        ...Dr,
        handler: hI((e, t) => {
          if (!t.scrollingDown) {
            ke(e);
          }
        })
      },
      [CI]: {
        types: "readystatechange IX2_PAGE_UPDATE",
        handler: We(gn, xN(ke))
      },
      [wI]: {
        types: "readystatechange IX2_PAGE_UPDATE",
        handler: We(gn, DN(ke))
      }
    };
  });
  var qr = u($r => {
    "use strict";

    Object.defineProperty($r, "__esModule", {
      value: true
    });
    function GN(e, t) {
      for (var n in t) Object.defineProperty(e, n, {
        enumerable: true,
        get: t[n]
      });
    }
    GN($r, {
      observeRequests: function () {
        return IS;
      },
      startActionGroup: function () {
        return zr;
      },
      startEngine: function () {
        return Ra;
      },
      stopActionGroup: function () {
        return Yr;
      },
      stopAllActionGroups: function () {
        return zI;
      },
      stopEngine: function () {
        return Na;
      }
    });
    var qN = Di() && Di().__esModule ? Di() : {
      default: Di()
    };
    var ct = jn() && jn().__esModule ? jn() : {
      default: jn()
    };
    var WN = vp() && vp().__esModule ? vp() : {
      default: vp()
    };
    var QN = Yp() && Yp().__esModule ? Yp() : {
      default: Yp()
    };
    var HN = jp() && jp().__esModule ? jp() : {
      default: jp()
    };
    var XN = $p() && $p().__esModule ? $p() : {
      default: $p()
    };
    var vn = aE() && aE().__esModule ? aE() : {
      default: aE()
    };
    var YN = dE() && dE().__esModule ? dE() : {
      default: dE()
    };
    var Ve = we();
    var GI = bt();
    var be = ua();
    var _e = jN(EE());
    var zN = xI() && xI().__esModule ? xI() : {
      default: xI()
    };
    function qI(e) {
      if (typeof WeakMap != "function") {
        return null;
      }
      var t = new WeakMap();
      var n = new WeakMap();
      return (qI = function (a) {
        return a ? n : t;
      })(e);
    }
    function jN(e, t) {
      if (!t && e && e.__esModule) {
        return e;
      }
      if (e === null || typeof e != "object" && typeof e != "function") {
        return {
          default: e
        };
      }
      var n = qI(t);
      if (n && n.has(e)) {
        return n.get(e);
      }
      var a = {
        __proto__: null
      };
      var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e) if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
        var o = r ? Object.getOwnPropertyDescriptor(e, i) : null;
        if (o && (o.get || o.set)) {
          Object.defineProperty(a, i, o);
        } else {
          a[i] = e[i];
        }
      }
      a.default = e;
      if (n) {
        n.set(e, a);
      }
      return a;
    }
    var KN = Object.keys(Ve.QuickEffectIds);
    var {
      COLON_DELIMITER: Qr,
      BOUNDARY_SELECTOR: Oa,
      HTML_ELEMENT: WI,
      RENDER_GENERAL: $N,
      W_MOD_IX: DI
    } = Ve.IX2EngineConstants;
    var {
      getAffectedElements: _a,
      getElementId: ZN,
      getDestinationValues: Hr,
      observeStore: Ot,
      getInstanceId: JN,
      renderHTMLElement: eS,
      clearAllStyles: QI,
      getMaxDurationItemIndex: tS,
      getComputedStyle: nS,
      getInstanceOrigin: aS,
      reduceListToGroup: iS,
      shouldNamespaceEventParameter: rS,
      getNamespacedParameterId: oS,
      shouldAllowMediaQuery: La,
      cleanupHTMLElement: sS,
      clearObjectCache: lS,
      stringifyTarget: cS,
      mediaQueriesEqual: dS,
      shallowEqual: fS
    } = GI.IX2VanillaUtils;
    var {
      isPluginType: ha,
      createPluginInstance: Xr,
      getPluginDuration: uS
    } = GI.IX2VanillaPlugins;
    var PI = navigator.userAgent;
    var pS = PI.match(/iPad/i) || PI.match(/iPhone/);
    function IS(e) {
      Ot({
        store: e,
        select: ({
          ixRequest: t
        }) => t.preview,
        onChange: mS
      });
      Ot({
        store: e,
        select: ({
          ixRequest: t
        }) => t.playback,
        onChange: gS
      });
      Ot({
        store: e,
        select: ({
          ixRequest: t
        }) => t.stop,
        onChange: bS
      });
      Ot({
        store: e,
        select: ({
          ixRequest: t
        }) => t.clear,
        onChange: vS
      });
    }
    function TS(e) {
      Ot({
        store: e,
        select: ({
          ixSession: t
        }) => t.mediaQueryKey,
        onChange: () => {
          Na(e);
          QI({
            store: e,
            elementApi: _e
          });
          Ra({
            store: e,
            allowEvents: true
          });
          HI();
        }
      });
    }
    function yS(e, t) {
      let n = Ot({
        store: e,
        select: ({
          ixSession: a
        }) => a.tick,
        onChange: a => {
          t(a);
          n();
        }
      });
    }
    function mS({
      rawData: e,
      defer: t
    }, n) {
      let a = () => {
        Ra({
          store: n,
          rawData: e,
          allowEvents: true
        });
        HI();
      };
      if (t) {
        setTimeout(a, 0);
      } else {
        a();
      }
    }
    function HI() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
    function gS(e, t) {
      let {
        actionTypeId: n,
        actionListId: a,
        actionItemId: r,
        eventId: i,
        allowEvents: o,
        immediate: s,
        testManual: l,
        verbose: d = true
      } = e;
      let {
        rawData: b
      } = e;
      if (a && r && b && s) {
        let f = b.actionLists[a];
        if (f) {
          b = iS({
            actionList: f,
            actionItemId: r,
            rawData: b
          });
        }
      }
      Ra({
        store: t,
        rawData: b,
        allowEvents: o,
        testManual: l
      });
      if (a && n === Ve.ActionTypeConsts.GENERAL_START_ACTION || KN.includes(n)) {
        Yr({
          store: t,
          actionListId: a
        });
        YI({
          store: t,
          actionListId: a,
          eventId: i
        });
        let f = zr({
          store: t,
          eventId: i,
          actionListId: a,
          immediate: s,
          verbose: d
        });
        if (d && f) {
          0;
          t.dispatch(be.actionListPlaybackChanged({
            actionListId: a,
            isPlaying: !s
          }));
        }
      }
    }
    function bS({
      actionListId: e
    }, t) {
      if (e) {
        Yr({
          store: t,
          actionListId: e
        });
      } else {
        zI({
          store: t
        });
      }
      Na(t);
    }
    function vS(e, t) {
      Na(t);
      QI({
        store: t,
        elementApi: _e
      });
    }
    function Ra({
      store: e,
      rawData: t,
      allowEvents: n,
      testManual: a
    }) {
      let {
        ixSession: r
      } = e.getState();
      if (t) {
        0;
        e.dispatch(be.rawDataImported(t));
      }
      if (!r.active) {
        0;
        e.dispatch(be.sessionInitialized({
          hasBoundaryNodes: !!document.querySelector(Oa),
          reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        }));
        if (n) {
          NS(e);
          OS();
          if (e.getState().ixSession.hasDefinedMediaQueries) {
            TS(e);
          }
        }
        0;
        e.dispatch(be.sessionStarted());
        _S(e, a);
      }
    }
    function OS() {
      let {
        documentElement: e
      } = document;
      if (e.className.indexOf(DI) === -1) {
        e.className += ` ${DI}`;
      }
    }
    function _S(e, t) {
      let n = a => {
        let {
          ixSession: r,
          ixParameters: i
        } = e.getState();
        if (r.active) {
          0;
          e.dispatch(be.animationFrameChanged(a, i));
          if (t) {
            yS(e, n);
          } else {
            requestAnimationFrame(n);
          }
        }
      };
      n(window.performance.now());
    }
    function Na(e) {
      let {
        ixSession: t
      } = e.getState();
      if (t.active) {
        let {
          eventListeners: n
        } = t;
        n.forEach(LS);
        lS();
        0;
        e.dispatch(be.sessionStopped());
      }
    }
    function LS({
      target: e,
      listenerParams: t
    }) {
      e.removeEventListener.apply(e, t);
    }
    function hS({
      store: e,
      eventStateKey: t,
      eventTarget: n,
      eventId: a,
      eventConfig: r,
      actionListId: i,
      parameterGroup: o,
      smoothing: s,
      restingValue: l
    }) {
      let {
        ixData: d,
        ixSession: b
      } = e.getState();
      let {
        events: f
      } = d;
      let y = f[a];
      let {
        eventTypeId: T
      } = y;
      let m = {};
      let _ = {};
      let R = [];
      let {
        continuousActionGroups: L
      } = o;
      let {
        id: w
      } = o;
      if (rS(T, r)) {
        w = oS(t, w);
      }
      let B = b.hasBoundaryNodes && n ? _e.getClosestElement(n, Oa) : null;
      L.forEach(F => {
        let {
          keyframe: x,
          actionItems: V
        } = F;
        V.forEach(K => {
          let {
            actionTypeId: z
          } = K;
          let {
            target: Z
          } = K.config;
          if (!Z) {
            return;
          }
          let ee = Z.boundaryMode ? B : null;
          let Q = cS(Z) + Qr + z;
          _[Q] = RS(_[Q], x, K);
          if (!m[Q]) {
            m[Q] = true;
            let {
              config: M
            } = K;
            _a({
              config: M,
              event: y,
              eventTarget: n,
              elementRoot: ee,
              elementApi: _e
            }).forEach(v => {
              R.push({
                element: v,
                key: Q
              });
            });
          }
        });
      });
      R.forEach(({
        element: F,
        key: x
      }) => {
        let V = _[x];
        0;
        let K = ct.default(V, "[0].actionItems[0]", {});
        let {
          actionTypeId: z
        } = K;
        let ee = (z === Ve.ActionTypeConsts.PLUGIN_RIVE ? (K.config?.target?.selectorGuids || []).length === 0 : ha(z)) ? Xr(z)(F, K) : null;
        let Q = Hr({
          element: F,
          actionItem: K,
          elementApi: _e
        }, ee);
        jr({
          store: e,
          element: F,
          eventId: a,
          actionListId: i,
          actionItem: K,
          destination: Q,
          continuous: true,
          parameterId: w,
          actionGroups: V,
          smoothing: s,
          restingValue: l,
          pluginInstance: ee
        });
      });
    }
    function RS(e = [], t, n) {
      let a = [...e];
      let r;
      a.some((i, o) => i.keyframe === t ? (r = o, true) : false);
      if (r == null) {
        r = a.length;
        a.push({
          keyframe: t,
          actionItems: []
        });
      }
      a[r].actionItems.push(n);
      return a;
    }
    function NS(e) {
      let {
        ixData: t
      } = e.getState();
      let {
        eventTypeMap: n
      } = t;
      XI(e);
      0;
      vn.default(n, (r, i) => {
        let o = zN.default[i];
        if (!o) {
          console.warn(`IX2 event type not configured: ${i}`);
          return;
        }
        BS({
          logic: o,
          store: e,
          events: r
        });
      });
      let {
        ixSession: a
      } = e.getState();
      if (a.eventListeners.length) {
        AS(e);
      }
    }
    var SS = ["resize", "orientationchange"];
    function AS(e) {
      let t = () => {
        XI(e);
      };
      SS.forEach(n => {
        window.addEventListener(n, t);
        0;
        e.dispatch(be.eventListenerAdded(window, [n, t]));
      });
      t();
    }
    function XI(e) {
      let {
        ixSession: t,
        ixData: n
      } = e.getState();
      let a = window.innerWidth;
      if (a !== t.viewportWidth) {
        let {
          mediaQueries: r
        } = n;
        0;
        e.dispatch(be.viewportWidthChanged({
          width: a,
          mediaQueries: r
        }));
      }
    }
    var MS = (e, t) => (0, QN.default)((0, XN.default)(e, t), HN.default);
    var CS = (e, t) => {
      0;
      vn.default(e, (n, a) => {
        n.forEach((r, i) => {
          let o = a + Qr + i;
          t(r, a, o);
        });
      });
    };
    var wS = e => {
      let t = {
        target: e.target,
        targets: e.targets
      };
      return _a({
        config: t,
        elementApi: _e
      });
    };
    function BS({
      logic: e,
      store: t,
      events: n
    }) {
      kS(n);
      let {
        types: a,
        handler: r
      } = e;
      let {
        ixData: i
      } = t.getState();
      let {
        actionLists: o
      } = i;
      let s = MS(n, wS);
      0;
      if (!WN.default(s)) {
        return;
      }
      0;
      vn.default(s, (f, y) => {
        let T = n[y];
        let {
          action: m,
          id: _,
          mediaQueries: R = i.mediaQueryKeys
        } = T;
        let {
          actionListId: L
        } = m.config;
        if (!dS(R, i.mediaQueryKeys)) {
          0;
          t.dispatch(be.mediaQueriesDefined());
        }
        if (m.actionTypeId === Ve.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
          (Array.isArray(T.config) ? T.config : [T.config]).forEach(B => {
            let {
              continuousParameterGroupId: F
            } = B;
            0;
            let x = ct.default(o, `${L}.continuousParameterGroups`, []);
            0;
            let V = qN.default(x, ({
              id: Z
            }) => Z === F);
            let K = (B.smoothing || 0) / 100;
            let z = (B.restingState || 0) / 100;
            if (V) {
              f.forEach((Z, ee) => {
                let Q = _ + Qr + ee;
                hS({
                  store: t,
                  eventStateKey: Q,
                  eventTarget: Z,
                  eventId: _,
                  eventConfig: B,
                  actionListId: L,
                  parameterGroup: V,
                  smoothing: K,
                  restingValue: z
                });
              });
            }
          });
        }
        if (m.actionTypeId === Ve.ActionTypeConsts.GENERAL_START_ACTION || KN.includes(m.actionTypeId)) {
          YI({
            store: t,
            actionListId: L,
            eventId: _
          });
        }
      });
      let l = f => {
        let {
          ixSession: y
        } = t.getState();
        CS(s, (T, m, _) => {
          let R = n[m];
          let L = y.eventState[_];
          let {
            action: w,
            mediaQueries: B = i.mediaQueryKeys
          } = R;
          if (!La(B, y.mediaQueryKey)) {
            return;
          }
          let F = (x = {}) => {
            let V = r({
              store: t,
              element: T,
              event: R,
              eventConfig: x,
              nativeEvent: f,
              eventStateKey: _
            }, L);
            if (!fS(V, L)) {
              0;
              t.dispatch(be.eventStateChanged(_, V));
            }
          };
          if (w.actionTypeId === Ve.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
            (Array.isArray(R.config) ? R.config : [R.config]).forEach(F);
          } else {
            F();
          }
        });
      };
      0;
      let d = YN.default(l, 12);
      let b = ({
        target: f = document,
        types: y,
        throttle: T
      }) => {
        y.split(" ").filter(Boolean).forEach(m => {
          let _ = T ? d : l;
          f.addEventListener(m, _);
          0;
          t.dispatch(be.eventListenerAdded(f, [m, _]));
        });
      };
      if (Array.isArray(a)) {
        a.forEach(b);
      } else if (typeof a == "string") {
        b(e);
      }
    }
    function kS(e) {
      if (!pS) {
        return;
      }
      let t = {};
      let n = "";
      for (let a in e) {
        let {
          eventTypeId: r,
          target: i
        } = e[a];
        let o = _e.getQuerySelector(i);
        if (!t[o]) {
          if (r === Ve.EventTypeConsts.MOUSE_CLICK || r === Ve.EventTypeConsts.MOUSE_SECOND_CLICK) {
            t[o] = true;
            n += o + "{cursor: pointer;touch-action: manipulation;}";
          }
        }
      }
      if (n) {
        let a = document.createElement("style");
        a.textContent = n;
        document.body.appendChild(a);
      }
    }
    function YI({
      store: e,
      actionListId: t,
      eventId: n
    }) {
      let {
        ixData: a,
        ixSession: r
      } = e.getState();
      let {
        actionLists: i,
        events: o
      } = a;
      let s = o[n];
      let l = i[t];
      if (l && l.useFirstGroupAsInitialState) {
        0;
        let d = ct.default(l, "actionItemGroups[0].actionItems", []);
        0;
        let b = ct.default(s, "mediaQueries", a.mediaQueryKeys);
        if (!La(b, r.mediaQueryKey)) {
          return;
        }
        d.forEach(f => {
          let {
            config: y,
            actionTypeId: T
          } = f;
          let m = y?.target?.useEventTarget === true && y?.target?.objectId == null ? {
            target: s.target,
            targets: s.targets
          } : y;
          let _ = _a({
            config: m,
            event: s,
            elementApi: _e
          });
          let R = ha(T);
          _.forEach(L => {
            let w = R ? Xr(T)(L, f) : null;
            jr({
              destination: Hr({
                element: L,
                actionItem: f,
                elementApi: _e
              }, w),
              immediate: true,
              store: e,
              element: L,
              eventId: n,
              actionItem: f,
              actionListId: t,
              pluginInstance: w
            });
          });
        });
      }
    }
    function zI({
      store: e
    }) {
      let {
        ixInstances: t
      } = e.getState();
      0;
      vn.default(t, n => {
        if (!n.continuous) {
          let {
            actionListId: a,
            verbose: r
          } = n;
          Kr(n, e);
          if (r) {
            0;
            e.dispatch(be.actionListPlaybackChanged({
              actionListId: a,
              isPlaying: false
            }));
          }
        }
      });
    }
    function Yr({
      store: e,
      eventId: t,
      eventTarget: n,
      eventStateKey: a,
      actionListId: r
    }) {
      let {
        ixInstances: i,
        ixSession: o
      } = e.getState();
      let s = o.hasBoundaryNodes && n ? _e.getClosestElement(n, Oa) : null;
      0;
      vn.default(i, l => {
        0;
        let d = ct.default(l, "actionItem.config.target.boundaryMode");
        let b = a ? l.eventStateKey === a : true;
        if (l.actionListId === r && l.eventId === t && b) {
          if (s && d && !_e.elementContains(s, l.element)) {
            return;
          }
          Kr(l, e);
          if (l.verbose) {
            0;
            e.dispatch(be.actionListPlaybackChanged({
              actionListId: r,
              isPlaying: false
            }));
          }
        }
      });
    }
    function zr({
      store: e,
      eventId: t,
      eventTarget: n,
      eventStateKey: a,
      actionListId: r,
      groupIndex: i = 0,
      immediate: o,
      verbose: s
    }) {
      let {
        ixData: l,
        ixSession: d
      } = e.getState();
      let {
        events: b
      } = l;
      let f = b[t] || {};
      let {
        mediaQueries: y = l.mediaQueryKeys
      } = f;
      0;
      let T = ct.default(l, `actionLists.${r}`, {});
      let {
        actionItemGroups: m,
        useFirstGroupAsInitialState: _
      } = T;
      if (!m || !m.length) {
        return false;
      }
      if (i >= m.length && (0, ct.default)(f, "config.loop")) {
        i = 0;
      }
      if (i === 0 && _) {
        i++;
      }
      let L = (i === 0 || i === 1 && _) && KN.includes(f.action?.actionTypeId) ? f.config.delay : undefined;
      0;
      let w = ct.default(m, [i, "actionItems"], []);
      if (!w.length || !La(y, d.mediaQueryKey)) {
        return false;
      }
      let B = d.hasBoundaryNodes && n ? _e.getClosestElement(n, Oa) : null;
      let F = tS(w);
      let x = false;
      w.forEach((V, K) => {
        let {
          config: z,
          actionTypeId: Z
        } = V;
        let ee = ha(Z);
        let {
          target: Q
        } = z;
        if (!Q) {
          return;
        }
        let M = Q.boundaryMode ? B : null;
        _a({
          config: z,
          event: f,
          eventTarget: n,
          elementRoot: M,
          elementApi: _e
        }).forEach((k, D) => {
          let W = ee ? Xr(Z)(k, V) : null;
          let te = ee ? uS(Z)(k, V) : null;
          x = true;
          let ae = F === K && D === 0;
          let de = nS({
            element: k,
            actionItem: V
          });
          let ce = Hr({
            element: k,
            actionItem: V,
            elementApi: _e
          }, W);
          jr({
            store: e,
            element: k,
            actionItem: V,
            eventId: t,
            eventTarget: n,
            eventStateKey: a,
            actionListId: r,
            groupIndex: i,
            isCarrier: ae,
            computedStyle: de,
            destination: ce,
            immediate: o,
            verbose: s,
            pluginInstance: W,
            pluginDuration: te,
            instanceDelay: L
          });
        });
      });
      return x;
    }
    function jr(e) {
      let {
        store: t,
        computedStyle: n,
        ...a
      } = e;
      let {
        element: r,
        actionItem: i,
        immediate: o,
        pluginInstance: s,
        continuous: l,
        restingValue: d,
        eventId: b
      } = a;
      let f = !l;
      let y = JN();
      let {
        ixElements: T,
        ixSession: m,
        ixData: _
      } = t.getState();
      let R = ZN(T, r);
      let {
        refState: L
      } = T[R] || {};
      let w = _e.getRefType(r);
      let B = m.reducedMotion && Ve.ReducedMotionTypes[i.actionTypeId];
      let F;
      if (B && l) {
        switch (_.events[b]?.eventTypeId) {
          case Ve.EventTypeConsts.MOUSE_MOVE:
          case Ve.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            F = d;
            break;
          default:
            F = .5;
            break;
        }
      }
      let x = aS(r, L, n, i, _e, s);
      0;
      t.dispatch(be.instanceAdded({
        instanceId: y,
        elementId: R,
        origin: x,
        refType: w,
        skipMotion: B,
        skipToValue: F,
        ...a
      }));
      jI(document.body, "ix2-animation-started", y);
      if (o) {
        FS(t, y);
        return;
      }
      Ot({
        store: t,
        select: ({
          ixInstances: V
        }) => V[y],
        onChange: KI
      });
      if (f) {
        0;
        t.dispatch(be.instanceStarted(y, m.tick));
      }
    }
    function Kr(e, t) {
      jI(document.body, "ix2-animation-stopping", {
        instanceId: e.id,
        state: t.getState()
      });
      let {
        elementId: n,
        actionItem: a
      } = e;
      let {
        ixElements: r
      } = t.getState();
      let {
        ref: i,
        refType: o
      } = r[n] || {};
      if (o === WI) {
        sS(i, a, _e);
      }
      0;
      t.dispatch(be.instanceRemoved(e.id));
    }
    function jI(e, t, n) {
      let a = document.createEvent("CustomEvent");
      a.initCustomEvent(t, true, true, n);
      e.dispatchEvent(a);
    }
    function FS(e, t) {
      let {
        ixParameters: n
      } = e.getState();
      0;
      e.dispatch(be.instanceStarted(t, 0));
      0;
      e.dispatch(be.animationFrameChanged(performance.now(), n));
      let {
        ixInstances: a
      } = e.getState();
      KI(a[t], e);
    }
    function KI(e, t) {
      let {
        active: n,
        continuous: a,
        complete: r,
        elementId: i,
        actionItem: o,
        actionTypeId: s,
        renderType: l,
        current: d,
        groupIndex: b,
        eventId: f,
        eventTarget: y,
        eventStateKey: T,
        actionListId: m,
        isCarrier: _,
        styleProp: R,
        verbose: L,
        pluginInstance: w
      } = e;
      let {
        ixData: B,
        ixSession: F
      } = t.getState();
      let {
        events: x
      } = B;
      let V = x && x[f] ? x[f] : {};
      let {
        mediaQueries: K = B.mediaQueryKeys
      } = V;
      if (La(K, F.mediaQueryKey) && (a || n || r)) {
        if (d || l === $N && r) {
          0;
          t.dispatch(be.elementStateChanged(i, s, d, o));
          let {
            ixElements: z
          } = t.getState();
          let {
            ref: Z,
            refType: ee,
            refState: Q
          } = z[i] || {};
          let M = Q && Q[s];
          if (ee === WI || ha(s)) {
            eS(Z, Q, M, f, o, R, _e, l, w);
          }
        }
        if (r) {
          if (_) {
            let z = zr({
              store: t,
              eventId: f,
              eventTarget: y,
              eventStateKey: T,
              actionListId: m,
              groupIndex: b + 1,
              verbose: L
            });
            if (L && !z) {
              0;
              t.dispatch(be.actionListPlaybackChanged({
                actionListId: m,
                isPlaying: false
              }));
            }
          }
          Kr(e, t);
        }
      }
    }
  });
  var JI = u(Jr => {
    "use strict";

    Object.defineProperty(Jr, "__esModule", {
      value: true
    });
    function US(e, t) {
      for (var n in t) Object.defineProperty(e, n, {
        enumerable: true,
        get: t[n]
      });
    }
    US(Jr, {
      actions: function () {
        return DS;
      },
      destroy: function () {
        return ZI;
      },
      init: function () {
        return WS;
      },
      setEnv: function () {
        return qS;
      },
      store: function () {
        return Sa;
      }
    });
    var VS = ei();
    var xS = np() && np().__esModule ? np() : {
      default: np()
    };
    var Zr = qr();
    var DS = GS(ua());
    function $I(e) {
      if (typeof WeakMap != "function") {
        return null;
      }
      var t = new WeakMap();
      var n = new WeakMap();
      return ($I = function (a) {
        return a ? n : t;
      })(e);
    }
    function GS(e, t) {
      if (!t && e && e.__esModule) {
        return e;
      }
      if (e === null || typeof e != "object" && typeof e != "function") {
        return {
          default: e
        };
      }
      var n = $I(t);
      if (n && n.has(e)) {
        return n.get(e);
      }
      var a = {
        __proto__: null
      };
      var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e) if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
        var o = r ? Object.getOwnPropertyDescriptor(e, i) : null;
        if (o && (o.get || o.set)) {
          Object.defineProperty(a, i, o);
        } else {
          a[i] = e[i];
        }
      }
      a.default = e;
      if (n) {
        n.set(e, a);
      }
      return a;
    }
    0;
    var Sa = VS.createStore(xS.default);
    function qS(e) {
      if (e()) {
        0;
        Zr.observeRequests(Sa);
      }
    }
    function WS(e) {
      ZI();
      0;
      Zr.startEngine({
        store: Sa,
        rawData: e,
        allowEvents: true
      });
    }
    function ZI() {
      0;
      Zr.stopEngine(Sa);
    }
  });
  var a0 = u((FB, n0) => {
    "use strict";

    var e0 = Ne();
    var t0 = JI();
    t0.setEnv(e0.env);
    e0.define("ix2", n0.exports = function () {
      return t0;
    });
  });
  var o0 = u((UB, r0) => {
    "use strict";

    var eo = window.jQuery;
    var Ze = {
      triggers: {},
      types: {
        INTRO: "w-ix-intro.w-ix",
        OUTRO: "w-ix-outro.w-ix"
      }
    };
    var Aa = [];
    var Ma = {
      reset: function (e, t) {
        t.__wf_intro = null;
      },
      intro: function (e, t) {
        if (!t.__wf_intro) {
          t.__wf_intro = true;
          eo(t).triggerHandler(Ze.types.INTRO);
        }
      },
      outro: function (e, t) {
        if (t.__wf_intro) {
          t.__wf_intro = null;
          eo(t).triggerHandler(Ze.types.OUTRO);
        }
      }
    };
    Ze.init = function () {
      var e = Aa.length;
      for (var t = 0; t < e; t++) {
        var n = Aa[t];
        n[0](0, n[1]);
      }
      Aa = [];
      eo.extend(Ze.triggers, Ma);
    };
    Ze.async = function () {
      for (var e in Ma) {
        var t = Ma[e];
        if (Ma.hasOwnProperty(e)) {
          Ze.triggers[e] = function (n, a) {
            Aa.push([t, a]);
          };
        }
      }
    };
    Ze.async();
    r0.exports = Ze;
  });
  var jt = u((VB, c0) => {
    "use strict";

    var to = o0();
    function s0(e, t) {
      var n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, true, true, null);
      e.dispatchEvent(n);
    }
    var QS = window.jQuery;
    var Ca = {
      triggers: {},
      types: {
        INTRO: "w-ix-intro.w-ix",
        OUTRO: "w-ix-outro.w-ix"
      }
    };
    var HS = {
      reset: function (e, t) {
        to.triggers.reset(e, t);
      },
      intro: function (e, t) {
        to.triggers.intro(e, t);
        s0(t, "COMPONENT_ACTIVE");
      },
      outro: function (e, t) {
        to.triggers.outro(e, t);
        s0(t, "COMPONENT_INACTIVE");
      }
    };
    QS.extend(Ca.triggers, HS);
    c0.exports = Ca;
  });
  var f0 = u((xB, d0) => {
    "use strict";

    var dt = Ne();
    var XS = jt();
    dt.define("navbar", d0.exports = function (e, t) {
      var n = {};
      var a = e.tram;
      var r = e(window);
      var i = e(document);
      var o = t.debounce;
      var s;
      var l;
      var d;
      var b;
      var f = dt.env();
      var B = XS.triggers;
      var F = e();
      n.ready = n.design = n.preview = x;
      n.destroy = function () {
        F = e();
        V();
        if (l && l.length) {
          l.each(ee);
        }
      };
      function x() {
        d = f && dt.env("design");
        b = dt.env("editor");
        s = e(document.body);
        l = i.find(".w-nav");
        if (l.length) {
          l.each(Z);
          V();
          K();
        }
      }
      function V() {
        dt.resize.off(z);
      }
      function K() {
        dt.resize.on(z);
      }
      function z() {
        l.each(E);
      }
      function Z(I, q) {
        var J = e(q);
        var j = e.data(q, ".w-nav");
        if (!j) {
          j = e.data(q, ".w-nav", {
            open: false,
            el: J,
            config: {},
            selectedIdx: -1
          });
        }
        j.menu = J.find(".w-nav-menu");
        j.links = j.menu.find(".w-nav-link");
        j.dropdowns = j.menu.find(".w-dropdown");
        j.dropdownToggle = j.menu.find(".w-dropdown-toggle");
        j.dropdownList = j.menu.find(".w-dropdown-list");
        j.button = J.find(".w-nav-button");
        j.container = J.find(".w-container");
        j.overlayContainerId = "w-nav-overlay-" + I;
        j.outside = O(j);
        var ue = J.find(".w-nav-brand");
        if (ue && ue.attr("href") === "/" && ue.attr("aria-label") == null) {
          ue.attr("aria-label", "home");
        }
        j.button.attr("style", "-webkit-user-select: text;");
        if (j.button.attr("aria-label") == null) {
          j.button.attr("aria-label", "menu");
        }
        j.button.attr("role", "button");
        j.button.attr("tabindex", "0");
        j.button.attr("aria-controls", j.overlayContainerId);
        j.button.attr("aria-haspopup", "menu");
        j.button.attr("aria-expanded", "false");
        j.el.off(".w-nav");
        j.button.off(".w-nav");
        j.menu.off(".w-nav");
        v(j);
        if (d) {
          Q(j);
          j.el.on("setting.w-nav", k(j));
        } else {
          M(j);
          j.button.on("click.w-nav", de(j));
          j.menu.on("click.w-nav", "a", ce(j));
          j.button.on("keydown.w-nav", D(j));
          j.el.on("keydown.w-nav", W(j));
        }
        E(I, q);
      }
      function ee(I, q) {
        var J = e.data(q, ".w-nav");
        if (J) {
          Q(J);
          e.removeData(q, ".w-nav");
        }
      }
      function Q(I) {
        if (I.overlay) {
          X(I, true);
          I.overlay.remove();
          I.overlay = null;
        }
      }
      function M(I) {
        if (!I.overlay) {
          I.overlay = e("<div class=\"w-nav-overlay\" data-wf-ignore />").appendTo(I.el);
          I.overlay.attr("id", I.overlayContainerId);
          I.parent = I.menu.parent();
          X(I, true);
        }
      }
      function v(I) {
        var q = {};
        var J = I.config || {};
        var j = q.animation = I.el.attr("data-animation") || "default";
        q.animOver = /^over/.test(j);
        q.animDirect = /left$/.test(j) ? -1 : 1;
        if (J.animation !== j && I.open) {
          t.defer(ae, I);
        }
        q.easing = I.el.attr("data-easing") || "ease";
        q.easing2 = I.el.attr("data-easing2") || "ease";
        var ue = I.el.attr("data-duration");
        q.duration = ue != null ? Number(ue) : 400;
        q.docHeight = I.el.attr("data-doc-height");
        I.config = q;
      }
      function k(I) {
        return function (q, J) {
          J = J || {};
          var j = r.width();
          v(I);
          if (J.open === true) {
            H(I, true);
          }
          if (J.open === false) {
            X(I, true);
          }
          if (I.open) {
            t.defer(function () {
              if (j !== r.width()) {
                ae(I);
              }
            });
          }
        };
      }
      function D(I) {
        return function (q) {
          switch (q.keyCode) {
            case 32:
            case 13:
              de(I)();
              q.preventDefault();
              return q.stopPropagation();
            case 27:
              X(I);
              q.preventDefault();
              return q.stopPropagation();
            case 39:
            case 40:
            case 36:
            case 35:
              return I.open ? (q.keyCode === 35 ? I.selectedIdx = I.links.length - 1 : I.selectedIdx = 0, te(I), q.preventDefault(), q.stopPropagation()) : (q.preventDefault(), q.stopPropagation());
          }
        };
      }
      function W(I) {
        return function (q) {
          if (I.open) {
            I.selectedIdx = I.links.index(document.activeElement);
            switch (q.keyCode) {
              case 36:
              case 35:
                if (q.keyCode === 35) {
                  I.selectedIdx = I.links.length - 1;
                } else {
                  I.selectedIdx = 0;
                }
                te(I);
                q.preventDefault();
                return q.stopPropagation();
              case 27:
                X(I);
                I.button.focus();
                q.preventDefault();
                return q.stopPropagation();
              case 37:
              case 38:
                I.selectedIdx = Math.max(-1, I.selectedIdx - 1);
                te(I);
                q.preventDefault();
                return q.stopPropagation();
              case 39:
              case 40:
                I.selectedIdx = Math.min(I.links.length - 1, I.selectedIdx + 1);
                te(I);
                q.preventDefault();
                return q.stopPropagation();
            }
          }
        };
      }
      function te(I) {
        if (I.links[I.selectedIdx]) {
          var q = I.links[I.selectedIdx];
          q.focus();
          ce(q);
        }
      }
      function ae(I) {
        if (I.open) {
          X(I, true);
          H(I, true);
        }
      }
      function de(I) {
        return o(function () {
          if (I.open) {
            X(I);
          } else {
            H(I);
          }
        });
      }
      function ce(I) {
        return function (q) {
          var J = e(this);
          var j = J.attr("href");
          if (!dt.validClick(q.currentTarget)) {
            q.preventDefault();
            return;
          }
          if (j && j.indexOf("#") === 0 && I.open) {
            X(I);
          }
        };
      }
      function O(I) {
        if (I.outside) {
          i.off("click.w-nav", I.outside);
        }
        return function (q) {
          var J = e(q.target);
          if (!(b && J.closest(".w-editor-bem-EditorOverlay").length)) {
            g(I, J);
          }
        };
      }
      var g = o(function (I, q) {
        if (I.open) {
          var J = q.closest(".w-nav-menu");
          if (!I.menu.is(J)) {
            X(I);
          }
        }
      });
      function E(I, q) {
        var J = e.data(q, ".w-nav");
        var j = J.collapsed = J.button.css("display") !== "none";
        if (J.open && !j && !d) {
          X(J, true);
        }
        if (J.container.length) {
          var ue = N(J);
          J.links.each(ue);
          J.dropdowns.each(ue);
        }
        if (J.open) {
          ne(J);
        }
      }
      function N(I) {
        var q = I.container.css("max-width");
        if (q === "none") {
          q = "";
        }
        return function (J, j) {
          j = e(j);
          j.css("max-width", "");
          if (j.css("max-width") === "none") {
            j.css("max-width", q);
          }
        };
      }
      function S(I, q) {
        q.setAttribute("data-nav-menu-open", "");
      }
      function A(I, q) {
        q.removeAttribute("data-nav-menu-open");
      }
      function H(I, q) {
        if (I.open) {
          return;
        }
        I.open = true;
        I.menu.each(S);
        I.links.addClass("w--nav-link-open");
        I.dropdowns.addClass("w--nav-dropdown-open");
        I.dropdownToggle.addClass("w--nav-dropdown-toggle-open");
        I.dropdownList.addClass("w--nav-dropdown-list-open");
        I.button.addClass("w--open");
        var J = I.config;
        var j = J.animation;
        if (j === "none" || !a.support.transform || J.duration <= 0) {
          q = true;
        }
        var ue = ne(I);
        var ve = I.menu.outerHeight(true);
        var Le = I.menu.outerWidth(true);
        var p = I.el.height();
        var h = I.el[0];
        E(0, h);
        B.intro(0, h);
        dt.redraw.up();
        if (!d) {
          i.on("click.w-nav", I.outside);
        }
        if (q) {
          P();
          return;
        }
        var C = "transform " + J.duration + "ms " + J.easing;
        if (I.overlay) {
          F = I.menu.prev();
          I.overlay.show().append(I.menu);
        }
        if (J.animOver) {
          a(I.menu).add(C).set({
            x: J.animDirect * Le,
            height: ue
          }).start({
            x: 0
          }).then(P);
          if (I.overlay) {
            I.overlay.width(Le);
          }
          return;
        }
        var U = p + ve;
        a(I.menu).add(C).set({
          y: -U
        }).start({
          y: 0
        }).then(P);
        function P() {
          I.button.attr("aria-expanded", "true");
        }
      }
      function ne(I) {
        var q = I.config;
        var J = q.docHeight ? i.height() : s.height();
        if (q.animOver) {
          I.menu.height(J);
        } else if (I.el.css("position") !== "fixed") {
          J -= I.el.outerHeight(true);
        }
        if (I.overlay) {
          I.overlay.height(J);
        }
        return J;
      }
      function X(I, q) {
        if (!I.open) {
          return;
        }
        I.open = false;
        I.button.removeClass("w--open");
        var J = I.config;
        if (J.animation === "none" || !a.support.transform || J.duration <= 0) {
          q = true;
        }
        B.outro(0, I.el[0]);
        i.off("click.w-nav", I.outside);
        if (q) {
          a(I.menu).stop();
          h();
          return;
        }
        var j = "transform " + J.duration + "ms " + J.easing2;
        var ue = I.menu.outerHeight(true);
        var ve = I.menu.outerWidth(true);
        var Le = I.el.height();
        if (J.animOver) {
          a(I.menu).add(j).start({
            x: ve * J.animDirect
          }).then(h);
          return;
        }
        var p = Le + ue;
        a(I.menu).add(j).start({
          y: -p
        }).then(h);
        function h() {
          I.menu.height("");
          a(I.menu).set({
            x: 0,
            y: 0
          });
          I.menu.each(A);
          I.links.removeClass("w--nav-link-open");
          I.dropdowns.removeClass("w--nav-dropdown-open");
          I.dropdownToggle.removeClass("w--nav-dropdown-toggle-open");
          I.dropdownList.removeClass("w--nav-dropdown-list-open");
          if (I.overlay && I.overlay.children().length) {
            if (F.length) {
              I.menu.insertAfter(F);
            } else {
              I.menu.prependTo(I.parent);
            }
            I.overlay.attr("style", "").hide();
          }
          I.el.triggerHandler("w-close");
          I.button.attr("aria-expanded", "false");
        }
      }
      return n;
    });
  });
  var E0 = u((DB, p0) => {
    "use strict";

    var _t = Ne();
    var YS = jt();
    var zS = /^#[a-zA-Z0-9\-_]+$/;
    _t.define("dropdown", p0.exports = function (e, t) {
      var n = t.debounce;
      var a = {};
      var r = _t.env();
      var i = false;
      var o;
      var s = _t.env.touch;
      var b = YS.triggers;
      var L = (s ? "click" : "mouseup") + ".w-dropdown";
      var F = e(document);
      var x;
      a.ready = V;
      a.design = function () {
        if (i) {
          v();
        }
        i = false;
        V();
      };
      a.preview = function () {
        i = true;
        V();
      };
      function V() {
        o = r && _t.env("design");
        x = F.find(".w-dropdown");
        x.each(K);
      }
      function K(c, N) {
        var S = e(N);
        var A = e.data(N, ".w-dropdown");
        if (!A) {
          A = e.data(N, ".w-dropdown", {
            open: false,
            el: S,
            config: {},
            selectedIdx: -1
          });
        }
        A.toggle = A.el.children(".w-dropdown-toggle");
        A.list = A.el.children(".w-dropdown-list");
        A.links = A.list.find("a:not(.w-dropdown .w-dropdown a)");
        A.complete = W(A);
        A.mouseLeave = ae(A);
        A.mouseUpOutside = D(A);
        A.mouseMoveOutside = de(A);
        z(A);
        var H = A.toggle.attr("id");
        var ne = A.list.attr("id");
        if (!H) {
          H = "w-dropdown-toggle-" + c;
        }
        if (!ne) {
          ne = "w-dropdown-list-" + c;
        }
        A.toggle.attr("id", H);
        A.toggle.attr("aria-controls", ne);
        A.toggle.attr("aria-haspopup", "menu");
        A.toggle.attr("aria-expanded", "false");
        A.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true");
        if (A.toggle.prop("tagName") !== "BUTTON") {
          A.toggle.attr("role", "button");
          if (!A.toggle.attr("tabindex")) {
            A.toggle.attr("tabindex", "0");
          }
        }
        A.list.attr("id", ne);
        A.list.attr("aria-labelledby", H);
        A.links.each(function (I, q) {
          if (!q.hasAttribute("tabindex")) {
            q.setAttribute("tabindex", "0");
          }
          if (zS.test(q.hash)) {
            q.addEventListener("click", M.bind(null, A));
          }
        });
        A.el.off(".w-dropdown");
        A.toggle.off(".w-dropdown");
        if (A.nav) {
          A.nav.off(".w-dropdown");
        }
        var X = ee(A, true);
        if (o) {
          A.el.on("setting.w-dropdown", Z(A));
        }
        if (!o) {
          if (r) {
            A.hovering = false;
            M(A);
          }
          if (A.config.hover) {
            A.toggle.on("mouseenter.w-dropdown", te(A));
          }
          A.el.on("w-close.w-dropdown", X);
          A.el.on("keydown.w-dropdown", ce(A));
          A.el.on("focusout.w-dropdown", E(A));
          A.toggle.on(L, X);
          A.toggle.on("keydown.w-dropdown", g(A));
          A.nav = A.el.closest(".w-nav");
          A.nav.on("w-close.w-dropdown", X);
        }
      }
      function z(c) {
        var N = Number(c.el.css("z-index"));
        c.manageZ = N === 900 || N === 901;
        c.config = {
          hover: c.el.attr("data-hover") === "true" && !s,
          delay: c.el.attr("data-delay")
        };
      }
      function Z(c) {
        return function (N, S) {
          S = S || {};
          z(c);
          if (S.open === true) {
            Q(c);
          }
          if (S.open === false) {
            M(c, {
              immediate: true
            });
          }
        };
      }
      function ee(c, N) {
        return n(function (S) {
          if (c.open || S && S.type === "w-close") {
            return M(c, {
              forceClose: N
            });
          }
          Q(c);
        });
      }
      function Q(c) {
        if (!c.open) {
          k(c);
          c.open = true;
          c.list.addClass("w--open");
          c.toggle.addClass("w--open");
          c.toggle.attr("aria-expanded", "true");
          b.intro(0, c.el[0]);
          _t.redraw.up();
          if (c.manageZ) {
            c.el.css("z-index", 901);
          }
          var N = _t.env("editor");
          if (!o) {
            F.on(L, c.mouseUpOutside);
          }
          if (c.hovering && !N) {
            c.el.on("mouseleave.w-dropdown", c.mouseLeave);
          }
          if (c.hovering && N) {
            F.on("mousemove.w-dropdown", c.mouseMoveOutside);
          }
          window.clearTimeout(c.delayId);
        }
      }
      function M(c, {
        immediate: N,
        forceClose: S
      } = {}) {
        if (c.open && !(c.config.hover && c.hovering && !S)) {
          c.toggle.attr("aria-expanded", "false");
          c.open = false;
          var A = c.config;
          b.outro(0, c.el[0]);
          F.off(L, c.mouseUpOutside);
          F.off("mousemove.w-dropdown", c.mouseMoveOutside);
          c.el.off("mouseleave.w-dropdown", c.mouseLeave);
          window.clearTimeout(c.delayId);
          if (!A.delay || N) {
            return c.complete();
          }
          c.delayId = window.setTimeout(c.complete, A.delay);
        }
      }
      function v() {
        F.find(".w-dropdown").each(function (c, N) {
          e(N).triggerHandler("w-close.w-dropdown");
        });
      }
      function k(c) {
        var N = c.el[0];
        x.each(function (S, A) {
          var H = e(A);
          if (!(H.is(N) || H.has(N).length)) {
            H.triggerHandler("w-close.w-dropdown");
          }
        });
      }
      function D(c) {
        if (c.mouseUpOutside) {
          F.off(L, c.mouseUpOutside);
        }
        return n(function (N) {
          if (c.open) {
            var S = e(N.target);
            if (!S.closest(".w-dropdown-toggle").length) {
              var A = e.inArray(c.el[0], S.parents(".w-dropdown")) === -1;
              var H = _t.env("editor");
              if (A) {
                if (H) {
                  var ne = S.parents().length === 1 && S.parents("svg").length === 1;
                  var X = S.parents(".w-editor-bem-EditorHoverControls").length;
                  if (ne || X) {
                    return;
                  }
                }
                M(c);
              }
            }
          }
        });
      }
      function W(c) {
        return function () {
          c.list.removeClass("w--open");
          c.toggle.removeClass("w--open");
          if (c.manageZ) {
            c.el.css("z-index", "");
          }
        };
      }
      function te(c) {
        return function () {
          c.hovering = true;
          Q(c);
        };
      }
      function ae(c) {
        return function () {
          c.hovering = false;
          if (!c.links.is(":focus")) {
            M(c);
          }
        };
      }
      function de(c) {
        return n(function (N) {
          if (c.open) {
            var S = e(N.target);
            var A = e.inArray(c.el[0], S.parents(".w-dropdown")) === -1;
            if (A) {
              var H = S.parents(".w-editor-bem-EditorHoverControls").length;
              var ne = S.parents(".w-editor-bem-RTToolbar").length;
              var X = e(".w-editor-bem-EditorOverlay");
              var I = X.find(".w-editor-edit-outline").length || X.find(".w-editor-bem-RTToolbar").length;
              if (H || ne || I) {
                return;
              }
              c.hovering = false;
              M(c);
            }
          }
        });
      }
      function ce(c) {
        return function (N) {
          if (!(o || !c.open)) {
            c.selectedIdx = c.links.index(document.activeElement);
            switch (N.keyCode) {
              case 36:
                return c.open ? (c.selectedIdx = 0, O(c), N.preventDefault()) : undefined;
              case 35:
                return c.open ? (c.selectedIdx = c.links.length - 1, O(c), N.preventDefault()) : undefined;
              case 27:
                M(c);
                c.toggle.focus();
                return N.stopPropagation();
              case 39:
              case 40:
                c.selectedIdx = Math.min(c.links.length - 1, c.selectedIdx + 1);
                O(c);
                return N.preventDefault();
              case 37:
              case 38:
                c.selectedIdx = Math.max(-1, c.selectedIdx - 1);
                O(c);
                return N.preventDefault();
            }
          }
        };
      }
      function O(c) {
        if (c.links[c.selectedIdx]) {
          c.links[c.selectedIdx].focus();
        }
      }
      function g(c) {
        var N = ee(c, true);
        return function (S) {
          if (!o) {
            if (!c.open) {
              switch (S.keyCode) {
                case 38:
                case 40:
                  return S.stopPropagation();
              }
            }
            switch (S.keyCode) {
              case 32:
              case 13:
                N();
                S.stopPropagation();
                return S.preventDefault();
            }
          }
        };
      }
      function E(c) {
        return n(function (N) {
          var {
            relatedTarget: S,
            target: A
          } = N;
          var H = c.el[0];
          var ne = H.contains(S) || H.contains(A);
          if (!ne) {
            M(c);
          }
          return N.stopPropagation();
        });
      }
      return a;
    });
  });
  var I0 = u(no => {
    "use strict";

    Object.defineProperty(no, "__esModule", {
      value: true
    });
    Object.defineProperty(no, "default", {
      enumerable: true,
      get: function () {
        return jS;
      }
    });
    function jS(e, t, n, a, r, i, o, s, l, d, b, f, y) {
      return function (T) {
        e(T);
        var m = T.form;
        var _ = {
          name: m.attr("data-name") || m.attr("name") || "Untitled Form",
          pageId: m.attr("data-wf-page-id") || "",
          elementId: m.attr("data-wf-element-id") || "",
          domain: f("html").attr("data-wf-domain") || null,
          source: t.href,
          test: n.env(),
          fields: {},
          fileUploads: {},
          dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(m.html()),
          trackingCookies: a()
        };
        let R = m.attr("data-wf-flow");
        if (R) {
          _.wfFlow = R;
        }
        r(T);
        var L = i(m, _.fields);
        if (L) {
          return o(L);
        }
        _.fileUploads = s(m);
        l(T);
        if (!d) {
          b(T);
          return;
        }
        f.ajax({
          url: y,
          type: "POST",
          data: _,
          dataType: "json",
          crossDomain: true
        }).done(function (w) {
          if (w && w.code === 200) {
            T.success = true;
          }
          b(T);
        }).fail(function () {
          b(T);
        });
      };
    }
  });
  var y0 = u((GB, T0) => {
    "use strict";

    var wa = Ne();
    var KS = (e, t, n, a) => {
      let r = document.createElement("div");
      t.appendChild(r);
      turnstile.render(r, {
        sitekey: e,
        callback: function (i) {
          n(i);
        },
        "error-callback": function () {
          a();
        }
      });
    };
    wa.define("forms", T0.exports = function (e, t) {
      var a = {};
      var r = e(document);
      var i;
      var o = window.location;
      var s = window.XDomainRequest && !window.atob;
      var d;
      var b = /e(-)?mail/i;
      var f = /^\S+@\S+$/;
      var y = window.alert;
      var T = wa.env();
      var m;
      var _;
      var R;
      let L = r.find("[data-turnstile-sitekey]").data("turnstile-sitekey");
      let w;
      var B = /list-manage[1-9]?.com/i;
      var F = t.debounce(function () {
        y("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.");
      }, 100);
      a.ready = a.design = a.preview = function () {
        V();
        x();
        if (!T && !m) {
          z();
        }
      };
      function x() {
        d = e("html").attr("data-wf-site");
        _ = "https://webflow.com/api/v1/form/" + d;
        if (s && _.indexOf("https://webflow.com") >= 0) {
          _ = _.replace("https://webflow.com", "https://formdata.webflow.com");
        }
        R = `${_}/signFile`;
        i = e(".w-form form");
        if (i.length) {
          i.each(K);
        }
      }
      function V() {
        if (L) {
          w = document.createElement("script");
          w.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
          document.head.appendChild(w);
          w.onload = () => {
            r.trigger("TURNSTILE_LOADED");
          };
        }
      }
      function K(E, c) {
        var N = e(c);
        var S = e.data(c, ".w-form");
        if (!S) {
          S = e.data(c, ".w-form", {
            form: N
          });
        }
        Z(S);
        var A = N.closest("div.w-form");
        S.done = A.find("> .w-form-done");
        S.fail = A.find("> .w-form-fail");
        S.fileUploads = A.find(".w-file-upload");
        S.fileUploads.each(function (X) {
          ce(X, S);
        });
        if (L) {
          S.wait = false;
          ee(S);
          r.on(typeof turnstile < "u" ? "ready" : "TURNSTILE_LOADED", function () {
            KS(L, c, X => {
              S.turnstileToken = X;
              Z(S);
            }, () => {
              ee(S);
            });
          });
        }
        var H = S.form.attr("aria-label") || S.form.attr("data-name") || "Form";
        if (!S.done.attr("aria-label")) {
          S.form.attr("aria-label", H);
        }
        S.done.attr("tabindex", "-1");
        S.done.attr("role", "region");
        if (!S.done.attr("aria-label")) {
          S.done.attr("aria-label", H + " success");
        }
        S.fail.attr("tabindex", "-1");
        S.fail.attr("role", "region");
        if (!S.fail.attr("aria-label")) {
          S.fail.attr("aria-label", H + " failure");
        }
        var ne = S.action = N.attr("action");
        S.handler = null;
        S.redirect = N.attr("data-redirect");
        if (B.test(ne)) {
          S.handler = te;
          return;
        }
        if (!ne) {
          if (d) {
            S.handler = (() => {
              let X = I0().default;
              return X(Z, o, wa, k, de, Q, y, M, ee, d, ae, e, _);
            })();
            return;
          }
          F();
        }
      }
      function z() {
        m = true;
        r.on("submit", ".w-form form", function (X) {
          var I = e.data(this, ".w-form");
          if (I.handler) {
            I.evt = X;
            I.handler(I);
          }
        });
        let ne = [["checkbox", ".w-checkbox-input"], ["radio", ".w-radio-input"]];
        r.on("change", ".w-form form input[type=\"checkbox\"]:not(.w-checkbox-input)", X => {
          e(X.target).siblings(".w-checkbox-input").toggleClass("w--redirected-checked");
        });
        r.on("change", ".w-form form input[type=\"radio\"]", X => {
          e(`input[name="${X.target.name}"]:not(${".w-checkbox-input"})`).map((q, J) => e(J).siblings(".w-radio-input").removeClass("w--redirected-checked"));
          let I = e(X.target);
          if (!I.hasClass("w-radio-input")) {
            I.siblings(".w-radio-input").addClass("w--redirected-checked");
          }
        });
        ne.forEach(([X, I]) => {
          r.on("focus", ".w-form" + ` form input[type="${X}"]:not(` + I + ")", q => {
            e(q.target).siblings(I).addClass("w--redirected-focus");
            e(q.target).filter(":focus-visible, [data-wf-focus-visible]").siblings(I).addClass("w--redirected-focus-visible");
          });
          r.on("blur", ".w-form" + ` form input[type="${X}"]:not(` + I + ")", q => {
            e(q.target).siblings(I).removeClass(`${"w--redirected-focus"} ${"w--redirected-focus-visible"}`);
          });
        });
      }
      function Z(E) {
        var c = E.btn = E.form.find(":input[type=\"submit\"]");
        E.wait = E.btn.attr("data-wait") || null;
        E.success = false;
        c.prop("disabled", !!(L && !E.turnstileToken));
        if (E.label) {
          c.val(E.label);
        }
      }
      function ee(E) {
        var c = E.btn;
        var N = E.wait;
        c.prop("disabled", true);
        if (N) {
          E.label = c.val();
          c.val(N);
        }
      }
      function Q(E, c) {
        var N = null;
        c = c || {};
        E.find(":input:not([type=\"submit\"]):not([type=\"file\"])").each(function (S, A) {
          var H = e(A);
          var ne = H.attr("type");
          var X = H.attr("data-name") || H.attr("name") || "Field " + (S + 1);
          X = encodeURIComponent(X);
          var I = H.val();
          if (ne === "checkbox") {
            I = H.is(":checked");
          } else if (ne === "radio") {
            if (c[X] === null || typeof c[X] == "string") {
              return;
            }
            I = E.find("input[name=\"" + H.attr("name") + "\"]:checked").val() || null;
          }
          if (typeof I == "string") {
            I = e.trim(I);
          }
          c[X] = I;
          N = N || D(H, ne, X, I);
        });
        return N;
      }
      function M(E) {
        var c = {};
        E.find(":input[type=\"file\"]").each(function (N, S) {
          var A = e(S);
          var H = A.attr("data-name") || A.attr("name") || "File " + (N + 1);
          var ne = A.attr("data-value");
          if (typeof ne == "string") {
            ne = e.trim(ne);
          }
          c[H] = ne;
        });
        return c;
      }
      let v = {
        _mkto_trk: "marketo"
      };
      function k() {
        return document.cookie.split("; ").reduce(function (c, N) {
          let S = N.split("=");
          let A = S[0];
          if (A in v) {
            let H = v[A];
            let ne = S.slice(1).join("=");
            c[H] = ne;
          }
          return c;
        }, {});
      }
      function D(E, c, N, S) {
        var A = null;
        if (c === "password") {
          A = "Passwords cannot be submitted.";
        } else if (E.attr("required")) {
          if (S) {
            if (b.test(E.attr("type"))) {
              if (!f.test(S)) {
                A = "Please enter a valid email address for: " + N;
              }
            }
          } else {
            A = "Please fill out the required field: " + N;
          }
        } else if (N === "g-recaptcha-response" && !S) {
          A = "Please confirm you’re not a robot.";
        }
        return A;
      }
      function te(E) {
        Z(E);
        var c = E.form;
        var N = {};
        if (/^https/.test(o.href) && !/^https/.test(E.action)) {
          c.attr("method", "post");
          return;
        }
        de(E);
        var S = Q(c, N);
        if (S) {
          return y(S);
        }
        ee(E);
        var A;
        t.each(N, function (I, q) {
          if (b.test(q)) {
            N.EMAIL = I;
          }
          if (/^((full[ _-]?)?name)$/i.test(q)) {
            A = I;
          }
          if (/^(first[ _-]?name)$/i.test(q)) {
            N.FNAME = I;
          }
          if (/^(last[ _-]?name)$/i.test(q)) {
            N.LNAME = I;
          }
        });
        if (A && !N.FNAME) {
          A = A.split(" ");
          N.FNAME = A[0];
          N.LNAME = N.LNAME || A[1];
        }
        var H = E.action.replace("/post?", "/post-json?") + "&c=?";
        var ne = H.indexOf("u=") + 2;
        ne = H.substring(ne, H.indexOf("&", ne));
        var X = H.indexOf("id=") + 3;
        X = H.substring(X, H.indexOf("&", X));
        N["b_" + ne + "_" + X] = "";
        e.ajax({
          url: H,
          data: N,
          dataType: "jsonp"
        }).done(function (I) {
          E.success = I.result === "success" || /already/.test(I.msg);
          if (!E.success) {
            console.info("MailChimp error: " + I.msg);
          }
          ae(E);
        }).fail(function () {
          ae(E);
        });
      }
      function ae(E) {
        var c = E.form;
        var N = E.redirect;
        var S = E.success;
        if (S && N) {
          wa.location(N);
          return;
        }
        E.done.toggle(S);
        E.fail.toggle(!S);
        if (S) {
          E.done.focus();
        } else {
          E.fail.focus();
        }
        c.toggle(!S);
        Z(E);
      }
      function de(E) {
        if (E.evt) {
          E.evt.preventDefault();
        }
        E.evt = null;
      }
      function ce(E, c) {
        if (!c.fileUploads || !c.fileUploads[E]) {
          return;
        }
        var N;
        var S = e(c.fileUploads[E]);
        var A = S.find("> .w-file-upload-default");
        var H = S.find("> .w-file-upload-uploading");
        var ne = S.find("> .w-file-upload-success");
        var X = S.find("> .w-file-upload-error");
        var I = A.find(".w-file-upload-input");
        var q = A.find(".w-file-upload-label");
        var J = q.children();
        var j = X.find(".w-file-upload-error-msg");
        var ue = ne.find(".w-file-upload-file");
        var ve = ne.find(".w-file-remove-link");
        var Le = ue.find(".w-file-upload-file-name");
        var p = j.attr("data-w-size-error");
        var h = j.attr("data-w-type-error");
        var C = j.attr("data-w-generic-error");
        if (!T) {
          q.on("click keydown", function (re) {
            if (!(re.type === "keydown" && re.which !== 13 && re.which !== 32)) {
              re.preventDefault();
              I.click();
            }
          });
        }
        q.find(".w-icon-file-upload-icon").attr("aria-hidden", "true");
        ve.find(".w-icon-file-upload-remove").attr("aria-hidden", "true");
        if (T) {
          I.on("click", function (re) {
            re.preventDefault();
          });
          q.on("click", function (re) {
            re.preventDefault();
          });
          J.on("click", function (re) {
            re.preventDefault();
          });
        } else {
          ve.on("click keydown", function (re) {
            if (re.type === "keydown") {
              if (re.which !== 13 && re.which !== 32) {
                return;
              }
              re.preventDefault();
            }
            I.removeAttr("data-value");
            I.val("");
            Le.html("");
            A.toggle(true);
            ne.toggle(false);
            q.focus();
          });
          I.on("change", function (re) {
            N = re.target && re.target.files && re.target.files[0];
            if (N) {
              A.toggle(false);
              X.toggle(false);
              H.toggle(true);
              H.focus();
              Le.text(N.name);
              if (!se()) {
                ee(c);
              }
              c.fileUploads[E].uploading = true;
              O(N, G);
            }
          });
          var U = q.outerHeight();
          I.height(U);
          I.width(1);
        }
        function P(re) {
          var Y = re.responseJSON && re.responseJSON.msg;
          var le = C;
          if (typeof Y == "string" && Y.indexOf("InvalidFileTypeError") === 0) {
            le = h;
          } else if (typeof Y == "string" && Y.indexOf("MaxFileSizeError") === 0) {
            le = p;
          }
          j.text(le);
          I.removeAttr("data-value");
          I.val("");
          H.toggle(false);
          A.toggle(true);
          X.toggle(true);
          X.focus();
          c.fileUploads[E].uploading = false;
          if (!se()) {
            Z(c);
          }
        }
        function G(re, Y) {
          if (re) {
            return P(re);
          }
          var le = Y.fileName;
          var fe = Y.postData;
          var ge = Y.fileId;
          var Fe = Y.s3Url;
          I.attr("data-value", ge);
          g(Fe, fe, N, le, ie);
        }
        function ie(re) {
          if (re) {
            return P(re);
          }
          H.toggle(false);
          ne.css("display", "inline-block");
          ne.focus();
          c.fileUploads[E].uploading = false;
          if (!se()) {
            Z(c);
          }
        }
        function se() {
          var re = c.fileUploads && c.fileUploads.toArray() || [];
          return re.some(function (Y) {
            return Y.uploading;
          });
        }
      }
      function O(E, c) {
        var N = new URLSearchParams({
          name: E.name,
          size: E.size
        });
        e.ajax({
          type: "GET",
          url: `${R}?${N}`,
          crossDomain: true
        }).done(function (S) {
          c(null, S);
        }).fail(function (S) {
          c(S);
        });
      }
      function g(E, c, N, S, A) {
        var H = new FormData();
        for (var ne in c) H.append(ne, c[ne]);
        H.append("file", N, S);
        e.ajax({
          type: "POST",
          url: E,
          data: H,
          processData: false,
          contentType: false
        }).done(function () {
          A(null);
        }).fail(function (X) {
          A(X);
        });
      }
      return a;
    });
  });
  var b0 = u((qB, g0) => {
    "use strict";

    var ft = Ne();
    var $S = jt();
    ft.define("slider", g0.exports = function (e, t) {
      var n = {};
      var a = e.tram;
      var r = e(document);
      var i;
      var o;
      var s = ft.env();
      var y = $S.triggers;
      var T;
      var m = false;
      n.ready = function () {
        o = ft.env("design");
        _();
      };
      n.design = function () {
        o = true;
        setTimeout(_, 1e3);
      };
      n.preview = function () {
        o = false;
        _();
      };
      n.redraw = function () {
        m = true;
        _();
        m = false;
      };
      n.destroy = R;
      function _() {
        i = r.find(".w-slider");
        if (i.length) {
          i.each(B);
          if (!T) {
            R();
            L();
          }
        }
      }
      function R() {
        ft.resize.off(w);
        ft.redraw.off(n.redraw);
      }
      function L() {
        ft.resize.on(w);
        ft.redraw.on(n.redraw);
      }
      function w() {
        i.filter(":visible").each(W);
      }
      function B(O, g) {
        var E = e(g);
        var c = e.data(g, ".w-slider");
        if (!c) {
          c = e.data(g, ".w-slider", {
            index: 0,
            depth: 1,
            hasFocus: {
              keyboard: false,
              mouse: false
            },
            el: E,
            config: {}
          });
        }
        c.mask = E.children(".w-slider-mask");
        c.left = E.children(".w-slider-arrow-left");
        c.right = E.children(".w-slider-arrow-right");
        c.nav = E.children(".w-slider-nav");
        c.slides = c.mask.children(".w-slide");
        c.slides.each(y.reset);
        if (m) {
          c.maskWidth = 0;
        }
        if (E.attr("role") === undefined) {
          E.attr("role", "region");
        }
        if (E.attr("aria-label") === undefined) {
          E.attr("aria-label", "carousel");
        }
        var N = c.mask.attr("id");
        if (!N) {
          N = "w-slider-mask-" + O;
          c.mask.attr("id", N);
        }
        if (!o && !c.ariaLiveLabel) {
          c.ariaLiveLabel = e("<div aria-live=\"off\" aria-atomic=\"true\" class=\"w-slider-aria-label\" data-wf-ignore />").appendTo(c.mask);
        }
        c.left.attr("role", "button");
        c.left.attr("tabindex", "0");
        c.left.attr("aria-controls", N);
        if (c.left.attr("aria-label") === undefined) {
          c.left.attr("aria-label", "previous slide");
        }
        c.right.attr("role", "button");
        c.right.attr("tabindex", "0");
        c.right.attr("aria-controls", N);
        if (c.right.attr("aria-label") === undefined) {
          c.right.attr("aria-label", "next slide");
        }
        if (!a.support.transform) {
          c.left.hide();
          c.right.hide();
          c.nav.hide();
          T = true;
          return;
        }
        c.el.off(".w-slider");
        c.left.off(".w-slider");
        c.right.off(".w-slider");
        c.nav.off(".w-slider");
        F(c);
        if (o) {
          c.el.on("setting.w-slider", v(c));
          M(c);
          c.hasTimer = false;
        } else {
          c.el.on("swipe.w-slider", v(c));
          c.left.on("click.w-slider", z(c));
          c.right.on("click.w-slider", Z(c));
          c.left.on("keydown.w-slider", K(c, z));
          c.right.on("keydown.w-slider", K(c, Z));
          c.nav.on("keydown.w-slider", "> div", v(c));
          if (c.config.autoplay && !c.hasTimer) {
            c.hasTimer = true;
            c.timerCount = 1;
            Q(c);
          }
          c.el.on("mouseenter.w-slider", V(c, true, "mouse"));
          c.el.on("focusin.w-slider", V(c, true, "keyboard"));
          c.el.on("mouseleave.w-slider", V(c, false, "mouse"));
          c.el.on("focusout.w-slider", V(c, false, "keyboard"));
        }
        c.nav.on("click.w-slider", "> div", v(c));
        if (!s) {
          c.mask.contents().filter(function () {
            return this.nodeType === 3;
          }).remove();
        }
        var S = E.filter(":hidden");
        S.addClass("w-slider-force-show");
        var A = E.parents(":hidden");
        A.addClass("w-slider-force-show");
        if (!m) {
          W(O, g);
        }
        S.removeClass("w-slider-force-show");
        A.removeClass("w-slider-force-show");
      }
      function F(O) {
        var g = {
          crossOver: 0,
          animation: O.el.attr("data-animation") || "slide"
        };
        if (g.animation === "outin") {
          g.animation = "cross";
          g.crossOver = .5;
        }
        g.easing = O.el.attr("data-easing") || "ease";
        var E = O.el.attr("data-duration");
        g.duration = E != null ? parseInt(E, 10) : 500;
        if (O.el.attr("data-infinite") === "1" || O.el.attr("data-infinite") === "true") {
          g.infinite = true;
        }
        if (O.el.attr("data-disable-swipe") === "1" || O.el.attr("data-disable-swipe") === "true") {
          g.disableSwipe = true;
        }
        if (O.el.attr("data-hide-arrows") === "1" || O.el.attr("data-hide-arrows") === "true") {
          g.hideArrows = true;
        } else if (O.config.hideArrows) {
          O.left.show();
          O.right.show();
        }
        if (O.el.attr("data-autoplay") === "1" || O.el.attr("data-autoplay") === "true") {
          g.autoplay = true;
          g.delay = parseInt(O.el.attr("data-delay"), 10) || 2e3;
          g.timerMax = parseInt(O.el.attr("data-autoplay-limit"), 10);
          if (!o) {
            O.el.off("mousedown.w-slider touchstart.w-slider").one("mousedown.w-slider touchstart.w-slider", function () {
              M(O);
            });
          }
        }
        var N = O.right.width();
        g.edge = N ? N + 40 : 100;
        O.config = g;
      }
      function V(O, g, E) {
        return function (c) {
          if (g) {
            O.hasFocus[E] = g;
          } else if (e.contains(O.el.get(0), c.relatedTarget) || (O.hasFocus[E] = g, O.hasFocus.mouse && E === "keyboard" || O.hasFocus.keyboard && E === "mouse")) {
            return;
          }
          if (g) {
            O.ariaLiveLabel.attr("aria-live", "polite");
            if (O.hasTimer) {
              M(O);
            }
          } else {
            O.ariaLiveLabel.attr("aria-live", "off");
            if (O.hasTimer) {
              Q(O);
            }
          }
        };
      }
      function K(O, g) {
        return function (E) {
          switch (E.keyCode) {
            case 32:
            case 13:
              g(O)();
              E.preventDefault();
              return E.stopPropagation();
          }
        };
      }
      function z(O) {
        return function () {
          D(O, {
            index: O.index - 1,
            vector: -1
          });
        };
      }
      function Z(O) {
        return function () {
          D(O, {
            index: O.index + 1,
            vector: 1
          });
        };
      }
      function ee(O, g) {
        var E = null;
        if (g === O.slides.length) {
          _();
          te(O);
        }
        t.each(O.anchors, function (c, N) {
          e(c.els).each(function (S, A) {
            if (e(A).index() === g) {
              E = N;
            }
          });
        });
        if (E != null) {
          D(O, {
            index: E,
            immediate: true
          });
        }
      }
      function Q(O) {
        M(O);
        var g = O.config;
        var E = g.timerMax;
        if (!(E && O.timerCount++ > E)) {
          O.timerId = window.setTimeout(function () {
            if (!(O.timerId == null || o)) {
              Z(O)();
              Q(O);
            }
          }, g.delay);
        }
      }
      function M(O) {
        window.clearTimeout(O.timerId);
        O.timerId = null;
      }
      function v(O) {
        return function (g, E) {
          E = E || {};
          var c = O.config;
          if (o && g.type === "setting") {
            if (E.select === "prev") {
              return z(O)();
            }
            if (E.select === "next") {
              return Z(O)();
            }
            F(O);
            te(O);
            if (E.select == null) {
              return;
            }
            ee(O, E.select);
            return;
          }
          if (g.type === "swipe") {
            return c.disableSwipe || ft.env("editor") ? undefined : E.direction === "left" ? Z(O)() : E.direction === "right" ? z(O)() : undefined;
          }
          if (O.nav.has(g.target).length) {
            var N = e(g.target).index();
            if (g.type === "click") {
              D(O, {
                index: N
              });
            }
            if (g.type === "keydown") {
              switch (g.keyCode) {
                case 13:
                case 32:
                  {
                    D(O, {
                      index: N
                    });
                    g.preventDefault();
                    break;
                  }
                case 37:
                case 38:
                  {
                    k(O.nav, Math.max(N - 1, 0));
                    g.preventDefault();
                    break;
                  }
                case 39:
                case 40:
                  {
                    k(O.nav, Math.min(N + 1, O.pages));
                    g.preventDefault();
                    break;
                  }
                case 36:
                  {
                    k(O.nav, 0);
                    g.preventDefault();
                    break;
                  }
                case 35:
                  {
                    k(O.nav, O.pages);
                    g.preventDefault();
                    break;
                  }
                default:
                  return;
              }
            }
          }
        };
      }
      function k(O, g) {
        var E = O.children().eq(g).focus();
        O.children().not(E);
      }
      function D(O, g) {
        g = g || {};
        var E = O.config;
        var c = O.anchors;
        O.previous = O.index;
        var N = g.index;
        var S = {};
        if (N < 0) {
          N = c.length - 1;
          if (E.infinite) {
            S.x = -O.endX;
            S.from = 0;
            S.to = c[0].width;
          }
        } else if (N >= c.length) {
          N = 0;
          if (E.infinite) {
            S.x = c[c.length - 1].width;
            S.from = -c[c.length - 1].x;
            S.to = S.from - S.x;
          }
        }
        O.index = N;
        var A = O.nav.children().eq(N).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
        O.nav.children().not(A).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1");
        if (E.hideArrows) {
          if (O.index === c.length - 1) {
            O.right.hide();
          } else {
            O.right.show();
          }
          if (O.index === 0) {
            O.left.hide();
          } else {
            O.left.show();
          }
        }
        var H = O.offsetX || 0;
        var ne = O.offsetX = -c[O.index].x;
        var X = {
          x: ne,
          opacity: 1,
          visibility: ""
        };
        var I = e(c[O.index].els);
        var q = e(c[O.previous] && c[O.previous].els);
        var J = O.slides.not(I);
        var j = E.animation;
        var ue = E.easing;
        var ve = Math.round(E.duration);
        var Le = g.vector || (O.index > O.previous ? 1 : -1);
        var p = "opacity " + ve + "ms " + ue;
        var h = "transform " + ve + "ms " + ue;
        I.find("a[href], area[href], [role=\"button\"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]").removeAttr("tabindex");
        I.removeAttr("aria-hidden");
        I.find("*").removeAttr("aria-hidden");
        J.find("a[href], area[href], [role=\"button\"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]").attr("tabindex", "-1");
        J.attr("aria-hidden", "true");
        J.find("*").attr("aria-hidden", "true");
        if (!o) {
          I.each(y.intro);
          J.each(y.outro);
        }
        if (g.immediate && !m) {
          a(I).set(X);
          P();
          return;
        }
        if (O.index === O.previous) {
          return;
        }
        if (!o) {
          O.ariaLiveLabel.text(`Slide ${N + 1} of ${c.length}.`);
        }
        if (j === "cross") {
          var C = Math.round(ve - ve * E.crossOver);
          var U = Math.round(ve - C);
          p = "opacity " + C + "ms " + ue;
          a(q).set({
            visibility: ""
          }).add(p).start({
            opacity: 0
          });
          a(I).set({
            visibility: "",
            x: ne,
            opacity: 0,
            zIndex: O.depth++
          }).add(p).wait(U).then({
            opacity: 1
          }).then(P);
          return;
        }
        if (j === "fade") {
          a(q).set({
            visibility: ""
          }).stop();
          a(I).set({
            visibility: "",
            x: ne,
            opacity: 0,
            zIndex: O.depth++
          }).add(p).start({
            opacity: 1
          }).then(P);
          return;
        }
        if (j === "over") {
          X = {
            x: O.endX
          };
          a(q).set({
            visibility: ""
          }).stop();
          a(I).set({
            visibility: "",
            zIndex: O.depth++,
            x: ne + c[O.index].width * Le
          }).add(h).start({
            x: ne
          }).then(P);
          return;
        }
        if (E.infinite && S.x) {
          a(O.slides.not(q)).set({
            visibility: "",
            x: S.x
          }).add(h).start({
            x: ne
          });
          a(q).set({
            visibility: "",
            x: S.from
          }).add(h).start({
            x: S.to
          });
          O.shifted = q;
        } else {
          if (E.infinite && O.shifted) {
            a(O.shifted).set({
              visibility: "",
              x: H
            });
            O.shifted = null;
          }
          a(O.slides).set({
            visibility: ""
          }).add(h).start({
            x: ne
          });
        }
        function P() {
          I = e(c[O.index].els);
          J = O.slides.not(I);
          if (j !== "slide") {
            X.visibility = "hidden";
          }
          a(J).set(X);
        }
      }
      function W(O, g) {
        var E = e.data(g, ".w-slider");
        if (E) {
          if (de(E)) {
            return te(E);
          }
          if (o && ce(E)) {
            te(E);
          }
        }
      }
      function te(O) {
        var g = 1;
        var E = 0;
        var c = 0;
        var N = 0;
        var S = O.maskWidth;
        var A = S - O.config.edge;
        if (A < 0) {
          A = 0;
        }
        O.anchors = [{
          els: [],
          x: 0,
          width: 0
        }];
        O.slides.each(function (ne, X) {
          if (c - E > A) {
            g++;
            E += S;
            O.anchors[g - 1] = {
              els: [],
              x: c,
              width: 0
            };
          }
          N = e(X).outerWidth(true);
          c += N;
          O.anchors[g - 1].width += N;
          O.anchors[g - 1].els.push(X);
          var I = ne + 1 + " of " + O.slides.length;
          e(X).attr("aria-label", I);
          e(X).attr("role", "group");
        });
        O.endX = c;
        if (o) {
          O.pages = null;
        }
        if (O.nav.length && O.pages !== g) {
          O.pages = g;
          ae(O);
        }
        var H = O.index;
        if (H >= g) {
          H = g - 1;
        }
        D(O, {
          immediate: true,
          index: H
        });
      }
      function ae(O) {
        var g = [];
        var E;
        var c = O.el.attr("data-nav-spacing");
        if (c) {
          c = parseFloat(c) + "px";
        }
        var N = 0;
        for (var S = O.pages; N < S; N++) {
          E = e("<div class=\"w-slider-dot\" data-wf-ignore />");
          E.attr("aria-label", "Show slide " + (N + 1) + " of " + S).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1");
          if (O.nav.hasClass("w-num")) {
            E.text(N + 1);
          }
          if (c != null) {
            E.css({
              "margin-left": c,
              "margin-right": c
            });
          }
          g.push(E);
        }
        O.nav.empty().append(g);
      }
      function de(O) {
        var g = O.mask.width();
        return O.maskWidth !== g ? (O.maskWidth = g, true) : false;
      }
      function ce(O) {
        var g = 0;
        O.slides.each(function (E, c) {
          g += e(c).outerWidth(true);
        });
        return O.slidesWidth !== g ? (O.slidesWidth = g, true) : false;
      }
      return n;
    });
  });
  var v0 = u(() => {
    "use strict";

    (function () {
      if (typeof window > "u") {
        return;
      }
      let e = window.navigator.userAgent.match(/Edge\/(\d{2})\./);
      let t = e ? parseInt(e[1], 10) >= 16 : false;
      if ("objectFit" in document.documentElement.style && !t) {
        window.objectFitPolyfill = function () {
          return false;
        };
        return;
      }
      let a = function (s) {
        let l = window.getComputedStyle(s, null);
        let d = l.getPropertyValue("position");
        let b = l.getPropertyValue("overflow");
        let f = l.getPropertyValue("display");
        if (!d || d === "static") {
          s.style.position = "relative";
        }
        if (b !== "hidden") {
          s.style.overflow = "hidden";
        }
        if (!f || f === "inline") {
          s.style.display = "block";
        }
        if (s.clientHeight === 0) {
          s.style.height = "100%";
        }
        if (s.className.indexOf("object-fit-polyfill") === -1) {
          s.className += " object-fit-polyfill";
        }
      };
      let r = function (s) {
        let l = window.getComputedStyle(s, null);
        let d = {
          "max-width": "none",
          "max-height": "none",
          "min-width": "0px",
          "min-height": "0px",
          top: "auto",
          right: "auto",
          bottom: "auto",
          left: "auto",
          "margin-top": "0px",
          "margin-right": "0px",
          "margin-bottom": "0px",
          "margin-left": "0px"
        };
        for (let b in d) if (l.getPropertyValue(b) !== d[b]) {
          s.style[b] = d[b];
        }
      };
      let i = function (s) {
        let l = s.parentNode;
        a(l);
        r(s);
        s.style.position = "absolute";
        s.style.height = "100%";
        s.style.width = "auto";
        if (s.clientWidth > l.clientWidth) {
          s.style.top = "0";
          s.style.marginTop = "0";
          s.style.left = "50%";
          s.style.marginLeft = s.clientWidth / -2 + "px";
        } else {
          s.style.width = "100%";
          s.style.height = "auto";
          s.style.left = "0";
          s.style.marginLeft = "0";
          s.style.top = "50%";
          s.style.marginTop = s.clientHeight / -2 + "px";
        }
      };
      let o = function (s) {
        if (typeof s > "u" || s instanceof Event) {
          s = document.querySelectorAll("[data-object-fit]");
        } else if (s && s.nodeName) {
          s = [s];
        } else if (typeof s == "object" && s.length && s[0].nodeName) {
          s = s;
        } else {
          return false;
        }
        for (let l = 0; l < s.length; l++) {
          if (!s[l].nodeName) {
            continue;
          }
          let d = s[l].nodeName.toLowerCase();
          if (d === "img") {
            if (t) {
              continue;
            }
            if (s[l].complete) {
              i(s[l]);
            } else {
              s[l].addEventListener("load", function () {
                i(this);
              });
            }
          } else if (d === "video") {
            if (s[l].readyState > 0) {
              i(s[l]);
            } else {
              s[l].addEventListener("loadedmetadata", function () {
                i(this);
              });
            }
          } else {
            i(s[l]);
          }
        }
        return true;
      };
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", o);
      } else {
        o();
      }
      window.addEventListener("resize", o);
      window.objectFitPolyfill = o;
    })();
  });
  var O0 = u(() => {
    "use strict";

    (function () {
      if (typeof window > "u") {
        return;
      }
      function e(a) {
        if (!Webflow.env("design")) {
          $("video").each(function () {
            if (a && $(this).prop("autoplay")) {
              this.play();
            } else {
              this.pause();
            }
          });
          $(".w-background-video--control").each(function () {
            if (a) {
              n($(this));
            } else {
              t($(this));
            }
          });
        }
      }
      function t(a) {
        a.find("> span").each(function (r) {
          $(this).prop("hidden", () => r === 0);
        });
      }
      function n(a) {
        a.find("> span").each(function (r) {
          $(this).prop("hidden", () => r === 1);
        });
      }
      $(document).ready(() => {
        let a = window.matchMedia("(prefers-reduced-motion: reduce)");
        a.addEventListener("change", r => {
          e(!r.matches);
        });
        if (a.matches) {
          e(false);
        }
        $("video:not([autoplay])").each(function () {
          $(this).parent().find(".w-background-video--control").each(function () {
            t($(this));
          });
        });
        $(document).on("click", ".w-background-video--control", function (r) {
          if (Webflow.env("design")) {
            return;
          }
          let i = $(r.currentTarget);
          let o = $(`video#${i.attr("aria-controls")}`).get(0);
          if (o) {
            if (o.paused) {
              let s = o.play();
              n(i);
              if (s && typeof s.catch == "function") {
                s.catch(() => {
                  t(i);
                });
              }
            } else {
              o.pause();
              t(i);
            }
          }
        });
      });
    })();
  });
  var L0 = u((YB, _0) => {
    "use strict";

    var ut = Ne();
    var ZS = jt();
    ut.define("tabs", _0.exports = function (e) {
      var t = {};
      var n = e.tram;
      var a = e(document);
      var r;
      var i;
      var o = ut.env;
      var s = o.safari;
      var l = o();
      var m = ZS.triggers;
      var _ = false;
      t.ready = t.design = t.preview = R;
      t.redraw = function () {
        _ = true;
        R();
        _ = false;
      };
      t.destroy = function () {
        r = a.find(".w-tabs");
        if (r.length) {
          r.each(B);
          L();
        }
      };
      function R() {
        i = l && ut.env("design");
        r = a.find(".w-tabs");
        if (r.length) {
          r.each(F);
          if (ut.env("preview") && !_) {
            r.each(B);
          }
          L();
          w();
        }
      }
      function L() {
        ut.redraw.off(t.redraw);
      }
      function w() {
        ut.redraw.on(t.redraw);
      }
      function B(Q, M) {
        var v = e.data(M, ".w-tabs");
        if (v) {
          if (v.links) {
            v.links.each(m.reset);
          }
          if (v.panes) {
            v.panes.each(m.reset);
          }
        }
      }
      function F(Q, M) {
        var v = ".w-tabs".substr(1) + "-" + Q;
        var k = e(M);
        var D = e.data(M, ".w-tabs");
        if (!D) {
          D = e.data(M, ".w-tabs", {
            el: k,
            config: {}
          });
        }
        D.current = null;
        D.tabIdentifier = v + "-" + "data-w-tab";
        D.paneIdentifier = v + "-" + "data-w-pane";
        D.menu = k.children(".w-tab-menu");
        D.links = D.menu.children(".w-tab-link");
        D.content = k.children(".w-tab-content");
        D.panes = D.content.children(".w-tab-pane");
        D.el.off(".w-tabs");
        D.links.off(".w-tabs");
        D.menu.attr("role", "tablist");
        D.links.attr("tabindex", "-1");
        x(D);
        if (!i) {
          D.links.on("click.w-tabs", K(D));
          D.links.on("keydown.w-tabs", z(D));
          var W = D.links.filter(".w--current");
          var te = W.attr("data-w-tab");
          if (te) {
            Z(D, {
              tab: te,
              immediate: true
            });
          }
        }
      }
      function x(Q) {
        var M = {
          easing: Q.el.attr("data-easing") || "ease"
        };
        var v = parseInt(Q.el.attr("data-duration-in"), 10);
        v = M.intro = v === v ? v : 0;
        var k = parseInt(Q.el.attr("data-duration-out"), 10);
        k = M.outro = k === k ? k : 0;
        M.immediate = !v && !k;
        Q.config = M;
      }
      function V(Q) {
        var M = Q.current;
        return Array.prototype.findIndex.call(Q.links, v => v.getAttribute("data-w-tab") === M, null);
      }
      function K(Q) {
        return function (M) {
          M.preventDefault();
          var v = M.currentTarget.getAttribute("data-w-tab");
          if (v) {
            Z(Q, {
              tab: v
            });
          }
        };
      }
      function z(Q) {
        return function (M) {
          var v = V(Q);
          var k = M.key;
          var D = {
            ArrowLeft: v - 1,
            ArrowUp: v - 1,
            ArrowRight: v + 1,
            ArrowDown: v + 1,
            End: Q.links.length - 1,
            Home: 0
          };
          if (k in D) {
            M.preventDefault();
            var W = D[k];
            if (W === -1) {
              W = Q.links.length - 1;
            }
            if (W === Q.links.length) {
              W = 0;
            }
            var te = Q.links[W];
            var ae = te.getAttribute("data-w-tab");
            if (ae) {
              Z(Q, {
                tab: ae
              });
            }
          }
        };
      }
      function Z(Q, M) {
        M = M || {};
        var v = Q.config;
        var k = v.easing;
        var D = M.tab;
        if (D !== Q.current) {
          Q.current = D;
          var W;
          Q.links.each(function (E, c) {
            var N = e(c);
            if (M.immediate || v.immediate) {
              var S = Q.panes[E];
              if (!c.id) {
                c.id = Q.tabIdentifier + "-" + E;
              }
              if (!S.id) {
                S.id = Q.paneIdentifier + "-" + E;
              }
              c.href = "#" + S.id;
              c.setAttribute("role", "tab");
              c.setAttribute("aria-controls", S.id);
              c.setAttribute("aria-selected", "false");
              S.setAttribute("role", "tabpanel");
              S.setAttribute("aria-labelledby", c.id);
            }
            if (c.getAttribute("data-w-tab") === D) {
              W = c;
              N.addClass("w--current").removeAttr("tabindex").attr({
                "aria-selected": "true"
              }).each(m.intro);
            } else if (N.hasClass("w--current")) {
              N.removeClass("w--current").attr({
                tabindex: "-1",
                "aria-selected": "false"
              }).each(m.outro);
            }
          });
          var te = [];
          var ae = [];
          Q.panes.each(function (E, c) {
            var N = e(c);
            if (c.getAttribute("data-w-tab") === D) {
              te.push(c);
            } else if (N.hasClass("w--tab-active")) {
              ae.push(c);
            }
          });
          var de = e(te);
          var ce = e(ae);
          if (M.immediate || v.immediate) {
            de.addClass("w--tab-active").each(m.intro);
            ce.removeClass("w--tab-active");
            if (!_) {
              ut.redraw.up();
            }
            return;
          } else {
            var O = window.scrollX;
            var g = window.scrollY;
            W.focus();
            window.scrollTo(O, g);
          }
          if (ce.length && v.outro) {
            ce.each(m.outro);
            n(ce).add("opacity " + v.outro + "ms " + k, {
              fallback: s
            }).start({
              opacity: 0
            }).then(() => ee(v, ce, de));
          } else {
            ee(v, ce, de);
          }
        }
      }
      function ee(Q, M, v) {
        M.removeClass("w--tab-active").css({
          opacity: "",
          transition: "",
          transform: "",
          width: "",
          height: ""
        });
        v.addClass("w--tab-active").each(m.intro);
        ut.redraw.up();
        if (!Q.intro) {
          return n(v).set({
            opacity: 1
          });
        }
        n(v).set({
          opacity: 0
        }).redraw().add("opacity " + Q.intro + "ms " + Q.easing, {
          fallback: s
        }).start({
          opacity: 1
        });
      }
      return t;
    });
  });
  var N0 = u((zB, R0) => {
    "use strict";

    var ao = Ne();
    function eA(e) {
      return e.filter(function (t) {
        return !!!(t.$el && t.$el.closest(".w-condition-invisible").length);
      });
    }
    function io(e, t) {
      for (var n = e; n >= 0; n--) {
        if (!!!(t[n].$el && t[n].$el.closest(".w-condition-invisible").length)) {
          return n;
        }
      }
      return -1;
    }
    function ro(e, t) {
      for (var n = e; n <= t.length - 1; n++) {
        if (!!!(t[n].$el && t[n].$el.closest(".w-condition-invisible").length)) {
          return n;
        }
      }
      return -1;
    }
    function On(e, t) {
      if (!e.attr("aria-label")) {
        e.attr("aria-label", t);
      }
    }
    function aA(e, t, n, a) {
      var r = n.tram;
      var i = Array.isArray;
      var l = /(^|\s+)/g;
      var d = [];
      var b;
      var f;
      var y;
      var T = [];
      function m(g, E) {
        d = i(g) ? g : [g];
        if (!f) {
          m.build();
        }
        if (eA(d).length > 1) {
          f.items = f.empty;
          d.forEach(function (c, N) {
            var S = n(t.createElement(undefined || "div")).addClass("thumbnail".replace(l, (undefined ? " ." : " ") + "w-lightbox-"));
            var A = n(t.createElement(undefined || "div")).addClass("item".replace(l, (undefined ? " ." : " ") + "w-lightbox-")).prop("tabIndex", 0).attr("aria-controls", "w-lightbox-view").attr("role", "tab").append(S);
            On(A, `show item ${N + 1} of ${d.length}`);
            if (!!(c.$el && c.$el.closest(".w-condition-invisible").length)) {
              A.addClass("w-condition-invisible");
            }
            f.items = f.items.add(A);
            ee(c.thumbnailUrl || c.url, function (H) {
              if (H.prop("width") > H.prop("height")) {
                H.addClass("wide".replace(l, (undefined ? " ." : " ") + "w-lightbox-"));
              } else {
                H.addClass("tall".replace(l, (undefined ? " ." : " ") + "w-lightbox-"));
              }
              S.append(H.addClass("thumbnail-image".replace(l, (undefined ? " ." : " ") + "w-lightbox-")));
            });
          });
          f.strip.empty().append(f.items);
          f.content.addClass("group".replace(l, (undefined ? " ." : " ") + "w-lightbox-"));
        }
        r(f.lightbox.removeClass("hide".replace(l, (undefined ? " ." : " ") + "w-lightbox-")).trigger("focus")).add("opacity .3s").start({
          opacity: 1
        });
        f.html.addClass("noscroll".replace(l, (undefined ? " ." : " ") + "w-lightbox-"));
        return m.show(E || 0);
      }
      m.build = function () {
        m.destroy();
        f = {
          html: n(t.documentElement),
          empty: n()
        };
        f.arrowLeft = n(t.createElement(undefined || "div")).addClass("control left inactive".replace(l, (undefined ? " ." : " ") + "w-lightbox-")).attr("role", "button").attr("aria-hidden", true).attr("aria-controls", "w-lightbox-view");
        f.arrowRight = n(t.createElement(undefined || "div")).addClass("control right inactive".replace(l, (undefined ? " ." : " ") + "w-lightbox-")).attr("role", "button").attr("aria-hidden", true).attr("aria-controls", "w-lightbox-view");
        f.close = n(t.createElement(undefined || "div")).addClass("control close".replace(l, (undefined ? " ." : " ") + "w-lightbox-")).attr("role", "button");
        On(f.arrowLeft, "previous image");
        On(f.arrowRight, "next image");
        On(f.close, "close lightbox");
        f.spinner = n(t.createElement(undefined || "div")).addClass("spinner".replace(l, (undefined ? " ." : " ") + "w-lightbox-")).attr("role", "progressbar").attr("aria-live", "polite").attr("aria-hidden", false).attr("aria-busy", true).attr("aria-valuemin", 0).attr("aria-valuemax", 100).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image");
        f.strip = n(t.createElement(undefined || "div")).addClass("strip".replace(l, (undefined ? " ." : " ") + "w-lightbox-")).attr("role", "tablist");
        y = new v(f.spinner, "hide".replace(l, (undefined ? " ." : " ") + "w-lightbox-"));
        f.content = n(t.createElement(undefined || "div")).addClass("content".replace(l, (undefined ? " ." : " ") + "w-lightbox-")).append(f.spinner, f.arrowLeft, f.arrowRight, f.close);
        f.container = n(t.createElement(undefined || "div")).addClass("container".replace(l, (undefined ? " ." : " ") + "w-lightbox-")).append(f.content, f.strip);
        f.lightbox = n(t.createElement(undefined || "div")).addClass("backdrop hide".replace(l, (undefined ? " ." : " ") + "w-lightbox-")).append(f.container);
        f.strip.on("click", "item".replace(l, " .w-lightbox-"), B);
        f.content.on("swipe", F).on("click", "left".replace(l, " .w-lightbox-"), R).on("click", "right".replace(l, " .w-lightbox-"), L).on("click", "close".replace(l, " .w-lightbox-"), w).on("click", "image, caption".replace(l, " .w-lightbox-"), L);
        f.container.on("click", "view".replace(l, " .w-lightbox-"), w).on("dragstart", "img".replace(l, " .w-lightbox-"), V);
        f.lightbox.on("keydown", K).on("focusin", x);
        n(a).append(f.lightbox);
        return m;
      };
      m.destroy = function () {
        if (f) {
          f.html.removeClass("noscroll".replace(l, (undefined ? " ." : " ") + "w-lightbox-"));
          f.lightbox.remove();
          f = undefined;
        }
      };
      m.show = function (g) {
        if (g !== b) {
          var E = d[g];
          if (!E) {
            return m.hide();
          }
          if (!!(E.$el && E.$el.closest(".w-condition-invisible").length)) {
            if (g < b) {
              var c = io(g - 1, d);
              g = c > -1 ? c : g;
            } else {
              var N = ro(g + 1, d);
              g = N > -1 ? N : g;
            }
            E = d[g];
          }
          var S = b;
          b = g;
          f.spinner.attr("aria-hidden", false).attr("aria-busy", true).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image");
          y.show();
          var A = E.html && O(E.width, E.height) || E.url;
          ee(A, function (H) {
            if (g !== b) {
              return;
            }
            var ne = n(t.createElement("figure" || "div")).addClass("figure".replace(l, (undefined ? " ." : " ") + "w-lightbox-")).append(H.addClass("image".replace(l, (undefined ? " ." : " ") + "w-lightbox-")));
            var X = n(t.createElement(undefined || "div")).addClass("frame".replace(l, (undefined ? " ." : " ") + "w-lightbox-")).append(ne);
            var I = n(t.createElement(undefined || "div")).addClass("view".replace(l, (undefined ? " ." : " ") + "w-lightbox-")).prop("tabIndex", 0).attr("id", "w-lightbox-view").append(X);
            var q;
            var J;
            if (E.html) {
              q = n(E.html);
              J = q.is("iframe");
              if (J) {
                q.on("load", j);
              }
              ne.append(q.addClass("embed".replace(l, (undefined ? " ." : " ") + "w-lightbox-")));
            }
            if (E.caption) {
              ne.append(n(t.createElement("figcaption" || "div")).addClass("caption".replace(l, (undefined ? " ." : " ") + "w-lightbox-")).text(E.caption));
            }
            f.spinner.before(I);
            if (!J) {
              j();
            }
            function j() {
              f.spinner.attr("aria-hidden", true).attr("aria-busy", false).attr("aria-valuenow", 100).attr("aria-valuetext", "Loaded image");
              y.hide();
              if (g !== b) {
                I.remove();
                return;
              }
              let ue = io(g - 1, d) === -1;
              f.arrowLeft.toggleClass("inactive".replace(l, (undefined ? " ." : " ") + "w-lightbox-"), ue);
              f.arrowLeft.attr("aria-hidden", ue).attr("tabIndex", ue ? -1 : 0);
              if (ue && f.arrowLeft.is(":focus")) {
                f.arrowRight.focus();
              }
              let ve = ro(g + 1, d) === -1;
              f.arrowRight.toggleClass("inactive".replace(l, (undefined ? " ." : " ") + "w-lightbox-"), ve);
              f.arrowRight.attr("aria-hidden", ve).attr("tabIndex", ve ? -1 : 0);
              if (ve && f.arrowRight.is(":focus")) {
                f.arrowLeft.focus();
              }
              if (f.view) {
                r(f.view).add("opacity .3s").start({
                  opacity: 0
                }).then(Q(f.view));
                r(I).add("opacity .3s").add("transform .3s").set({
                  x: g > S ? "80px" : "-80px"
                }).start({
                  opacity: 1,
                  x: 0
                });
              } else {
                I.css("opacity", 1);
              }
              f.view = I;
              f.view.prop("tabIndex", 0);
              if (f.items) {
                f.items.removeClass("active".replace(l, (undefined ? " ." : " ") + "w-lightbox-"));
                f.items.removeAttr("aria-selected");
                var Le = f.items.eq(g);
                Le.addClass("active".replace(l, (undefined ? " ." : " ") + "w-lightbox-"));
                Le.attr("aria-selected", true);
                M(Le);
              }
            }
          });
          f.close.prop("tabIndex", 0);
          n(":focus").addClass("active-lightbox");
          if (T.length === 0) {
            n("body").children().each(function () {
              if (!(n(this).hasClass("w-lightbox-backdrop") || n(this).is("script"))) {
                T.push({
                  node: n(this),
                  hidden: n(this).attr("aria-hidden"),
                  tabIndex: n(this).attr("tabIndex")
                });
                n(this).attr("aria-hidden", true).attr("tabIndex", -1);
              }
            });
            f.close.focus();
          }
          return m;
        }
      };
      m.hide = function () {
        r(f.lightbox).add("opacity .3s").start({
          opacity: 0
        }).then(Z);
        return m;
      };
      m.prev = function () {
        var g = io(b - 1, d);
        if (g > -1) {
          m.show(g);
        }
      };
      m.next = function () {
        var g = ro(b + 1, d);
        if (g > -1) {
          m.show(g);
        }
      };
      function _(g) {
        return function (E) {
          if (this === E.target) {
            E.stopPropagation();
            E.preventDefault();
            g();
          }
        };
      }
      var R = _(m.prev);
      var L = _(m.next);
      var w = _(m.hide);
      var B = function (g) {
        var E = n(this).index();
        g.preventDefault();
        m.show(E);
      };
      var F = function (g, E) {
        g.preventDefault();
        if (E.direction === "left") {
          m.next();
        } else if (E.direction === "right") {
          m.prev();
        }
      };
      var x = function () {
        this.focus();
      };
      function V(g) {
        g.preventDefault();
      }
      function K(g) {
        var E = g.keyCode;
        if (E === 27 || z(E, "close")) {
          m.hide();
        } else if (E === 37 || z(E, "left")) {
          m.prev();
        } else if (E === 39 || z(E, "right")) {
          m.next();
        } else if (z(E, "item")) {
          n(":focus").click();
        }
      }
      function z(g, E) {
        if (g !== 13 && g !== 32) {
          return false;
        }
        var c = n(":focus").attr("class");
        var N = E.replace(l, (undefined ? " ." : " ") + "w-lightbox-").trim();
        return c.includes(N);
      }
      function Z() {
        if (f) {
          f.strip.scrollLeft(0).empty();
          f.html.removeClass("noscroll".replace(l, (undefined ? " ." : " ") + "w-lightbox-"));
          f.lightbox.addClass("hide".replace(l, (undefined ? " ." : " ") + "w-lightbox-"));
          if (f.view) {
            f.view.remove();
          }
          f.content.removeClass("group".replace(l, (undefined ? " ." : " ") + "w-lightbox-"));
          f.arrowLeft.addClass("inactive".replace(l, (undefined ? " ." : " ") + "w-lightbox-"));
          f.arrowRight.addClass("inactive".replace(l, (undefined ? " ." : " ") + "w-lightbox-"));
          b = f.view = undefined;
          T.forEach(function (g) {
            var E = g.node;
            if (E) {
              if (g.hidden) {
                E.attr("aria-hidden", g.hidden);
              } else {
                E.removeAttr("aria-hidden");
              }
              if (g.tabIndex) {
                E.attr("tabIndex", g.tabIndex);
              } else {
                E.removeAttr("tabIndex");
              }
            }
          });
          T = [];
          n(".active-lightbox").removeClass("active-lightbox").focus();
        }
      }
      function ee(g, E) {
        var c = n(t.createElement("img" || "div")).addClass("img".replace(l, (undefined ? " ." : " ") + "w-lightbox-"));
        c.one("load", function () {
          E(c);
        });
        c.attr("src", g);
        return c;
      }
      function Q(g) {
        return function () {
          g.remove();
        };
      }
      function M(g) {
        var E = g.get(0);
        var c = f.strip.get(0);
        var N = E.offsetLeft;
        var S = E.clientWidth;
        var A = c.scrollLeft;
        var H = c.clientWidth;
        var ne = c.scrollWidth - H;
        var X;
        if (N < A) {
          X = Math.max(0, N + S - H);
        } else if (N + S > H + A) {
          X = Math.min(N, ne);
        }
        if (X != null) {
          r(f.strip).add("scroll-left 500ms").start({
            "scroll-left": X
          });
        }
      }
      function v(g, E, c) {
        this.$element = g;
        this.className = E;
        this.delay = c || 200;
        this.hide();
      }
      v.prototype.show = function () {
        var g = this;
        if (!g.timeoutId) {
          g.timeoutId = setTimeout(function () {
            g.$element.removeClass(g.className);
            delete g.timeoutId;
          }, g.delay);
        }
      };
      v.prototype.hide = function () {
        var g = this;
        if (g.timeoutId) {
          clearTimeout(g.timeoutId);
          delete g.timeoutId;
          return;
        }
        g.$element.addClass(g.className);
      };
      function O(g, E) {
        var c = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"" + g + "\" height=\"" + E + "\"/>";
        return "data:image/svg+xml;charset=utf-8," + encodeURI(c);
      }
      (function () {
        var g = e.navigator.userAgent;
        var E = /(iPhone|iPad|iPod);[^OS]*OS (\d)/;
        var c = g.match(E);
        var N = g.indexOf("Android ") > -1 && g.indexOf("Chrome") === -1;
        if (!N && (!c || c[2] > 7)) {
          return;
        }
        var S = t.createElement("style");
        t.head.appendChild(S);
        e.addEventListener("resize", A, true);
        function A() {
          var H = e.innerHeight;
          var ne = e.innerWidth;
          var X = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + H + "px}.w-lightbox-view {width:" + ne + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * H + "px}.w-lightbox-image {max-width:" + ne + "px;max-height:" + H + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * H + "px}.w-lightbox-strip {padding: 0 " + .01 * H + "px}.w-lightbox-item {width:" + .1 * H + "px;padding:" + .02 * H + "px " + .01 * H + "px}.w-lightbox-thumbnail {height:" + .1 * H + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * H + "px}.w-lightbox-content {margin-top:" + .02 * H + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * H + "px}.w-lightbox-image {max-width:" + .96 * ne + "px;max-height:" + .96 * H + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * ne + "px;max-height:" + .84 * H + "px}}";
          S.textContent = X;
        }
        A();
      })();
      return m;
    }
    ao.define("lightbox", R0.exports = function (e) {
      var t = {};
      var n = ao.env();
      var a = aA(window, document, e, n ? "#lightbox-mountpoint" : "body");
      var r = e(document);
      var i;
      var o;
      var l;
      t.ready = t.design = t.preview = d;
      function d() {
        o = n && ao.env("design");
        a.destroy();
        l = {};
        i = r.find(".w-lightbox");
        i.webflowLightBox();
        i.each(function () {
          On(e(this), "open lightbox");
          e(this).attr("aria-haspopup", "dialog");
        });
      }
      jQuery.fn.extend({
        webflowLightBox: function () {
          var T = this;
          e.each(T, function (m, _) {
            var R = e.data(_, ".w-lightbox");
            if (!R) {
              R = e.data(_, ".w-lightbox", {
                el: e(_),
                mode: "images",
                images: [],
                embed: ""
              });
            }
            R.el.off(".w-lightbox");
            b(R);
            if (o) {
              R.el.on("setting.w-lightbox", b.bind(null, R));
            } else {
              R.el.on("click.w-lightbox", f(R)).on("click.w-lightbox", function (L) {
                L.preventDefault();
              });
            }
          });
        }
      });
      function b(T) {
        var m = T.el.children(".w-json").html();
        var _;
        var R;
        if (!m) {
          T.items = [];
          return;
        }
        try {
          m = JSON.parse(m);
        } catch (L) {
          console.error("Malformed lightbox JSON configuration.", L);
        }
        y(m);
        m.items.forEach(function (L) {
          L.$el = T.el;
        });
        _ = m.group;
        if (_) {
          R = l[_];
          if (!R) {
            R = l[_] = [];
          }
          T.items = R;
          if (m.items.length) {
            T.index = R.length;
            R.push.apply(R, m.items);
          }
        } else {
          T.items = m.items;
          T.index = 0;
        }
      }
      function f(T) {
        return function () {
          if (T.items.length) {
            a(T.items, T.index || 0);
          }
        };
      }
      function y(T) {
        if (T.images) {
          T.images.forEach(function (m) {
            m.type = "image";
          });
          T.items = T.images;
        }
        if (T.embed) {
          T.embed.type = "video";
          T.items = [T.embed];
        }
        if (T.groupId) {
          T.group = T.groupId;
        }
      }
      return t;
    });
  });
  go();
  vo();
  _o();
  Ro();
  So();
  Mo();
  wo();
  a0();
  jt();
  f0();
  E0();
  y0();
  b0();
  v0();
  O0();
  L0();
  N0();
  Webflow.require("ix2").init({
    events: {
      "e-59": {
        id: "e-59",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-7",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-60"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c885",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c885",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716360128331
      },
      "e-60": {
        id: "e-60",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-8",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-59"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c885",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c885",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716360128331
      },
      "e-61": {
        id: "e-61",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-7",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-62"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c89f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c89f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716360189098
      },
      "e-62": {
        id: "e-62",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-8",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-61"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c89f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c89f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716360189099
      },
      "e-63": {
        id: "e-63",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-7",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-64"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c892",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c892",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716360201354
      },
      "e-64": {
        id: "e-64",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-8",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-63"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c892",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c892",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716360201354
      },
      "e-65": {
        id: "e-65",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-7",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-66"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c8ac",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c8ac",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716360211505
      },
      "e-66": {
        id: "e-66",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-8",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-65"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c8ac",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|6a220f2c-e3ca-a31f-53ff-ae045cb3c8ac",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716360211505
      },
      "e-67": {
        id: "e-67",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-9",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-68"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4721b|2447c0fc-f61a-6b00-a967-22374d372940",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4721b|2447c0fc-f61a-6b00-a967-22374d372940",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: 0,
          direction: "LEFT",
          effectIn: true
        },
        createdOn: 1716360801299
      },
      "e-68": {
        id: "e-68",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-10",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-67"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4721b|2447c0fc-f61a-6b00-a967-22374d372940",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4721b|2447c0fc-f61a-6b00-a967-22374d372940",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716360801299
      },
      "e-81": {
        id: "e-81",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-11",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-82"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|18e01387-4d46-8e6a-1951-f8d6628c28e5",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|18e01387-4d46-8e6a-1951-f8d6628c28e5",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: true,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1715923319713
      },
      "e-85": {
        id: "e-85",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-86"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c953e135737715128a0|742a78fd-c84b-af2b-1b74-aec38cf08e9c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c953e135737715128a0|742a78fd-c84b-af2b-1b74-aec38cf08e9c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: true,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1715923319713
      },
      "e-87": {
        id: "e-87",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-13",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-88"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c953e135737715128a0|a6751caa-16ba-bdce-1cfc-e25094b44e7b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c953e135737715128a0|a6751caa-16ba-bdce-1cfc-e25094b44e7b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716437977303
      },
      "e-88": {
        id: "e-88",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-14",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-87"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c953e135737715128a0|a6751caa-16ba-bdce-1cfc-e25094b44e7b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c953e135737715128a0|a6751caa-16ba-bdce-1cfc-e25094b44e7b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716437977304
      },
      "e-89": {
        id: "e-89",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-13",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-90"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d066595f5fea3f4c62e|7b075ea5-fb5d-5e4a-8125-eb57caafa9bb",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d066595f5fea3f4c62e|7b075ea5-fb5d-5e4a-8125-eb57caafa9bb",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716440379201
      },
      "e-90": {
        id: "e-90",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-14",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-89"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d066595f5fea3f4c62e|7b075ea5-fb5d-5e4a-8125-eb57caafa9bb",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d066595f5fea3f4c62e|7b075ea5-fb5d-5e4a-8125-eb57caafa9bb",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716440379201
      },
      "e-91": {
        id: "e-91",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-15",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-92"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3cd6098b10043169496a|a7c9d58c-109e-8ae2-0596-dbdc2e18fff1",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3cd6098b10043169496a|a7c9d58c-109e-8ae2-0596-dbdc2e18fff1",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716441113875
      },
      "e-92": {
        id: "e-92",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-16",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-91"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3cd6098b10043169496a|a7c9d58c-109e-8ae2-0596-dbdc2e18fff1",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3cd6098b10043169496a|a7c9d58c-109e-8ae2-0596-dbdc2e18fff1",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716441113876
      },
      "e-93": {
        id: "e-93",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-15",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-94"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|f0146b33-d208-00ca-9e17-3cd306caf986",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|f0146b33-d208-00ca-9e17-3cd306caf986",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716441314812
      },
      "e-94": {
        id: "e-94",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-16",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-93"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|f0146b33-d208-00ca-9e17-3cd306caf986",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|f0146b33-d208-00ca-9e17-3cd306caf986",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716441314813
      },
      "e-95": {
        id: "e-95",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-15",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-96"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|3fca5341-fee6-d6d6-7456-34f1304d210d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|3fca5341-fee6-d6d6-7456-34f1304d210d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716441337096
      },
      "e-96": {
        id: "e-96",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-16",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-95"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|3fca5341-fee6-d6d6-7456-34f1304d210d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|3fca5341-fee6-d6d6-7456-34f1304d210d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716441337097
      },
      "e-97": {
        id: "e-97",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-17",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-98"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3cc9b8ca62a7826fd802|7976bf65-fb89-fa4d-107d-375fe9918d6d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3cc9b8ca62a7826fd802|7976bf65-fb89-fa4d-107d-375fe9918d6d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716445806215
      },
      "e-98": {
        id: "e-98",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-18",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-97"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3cc9b8ca62a7826fd802|7976bf65-fb89-fa4d-107d-375fe9918d6d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3cc9b8ca62a7826fd802|7976bf65-fb89-fa4d-107d-375fe9918d6d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716445806215
      },
      "e-99": {
        id: "e-99",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-17",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-100"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3cb827c2522c910072cc|4bb57b47-3fd6-6605-617f-318b0364a3ed",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3cb827c2522c910072cc|4bb57b47-3fd6-6605-617f-318b0364a3ed",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716451269551
      },
      "e-100": {
        id: "e-100",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-18",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-99"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3cb827c2522c910072cc|4bb57b47-3fd6-6605-617f-318b0364a3ed",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3cb827c2522c910072cc|4bb57b47-3fd6-6605-617f-318b0364a3ed",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716451269551
      },
      "e-101": {
        id: "e-101",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-15",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-102"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd47213|82ee536e-3bf9-6560-cc24-cb5b473965ed",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd47213|82ee536e-3bf9-6560-cc24-cb5b473965ed",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716456699284
      },
      "e-102": {
        id: "e-102",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-16",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-101"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd47213|82ee536e-3bf9-6560-cc24-cb5b473965ed",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd47213|82ee536e-3bf9-6560-cc24-cb5b473965ed",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716456699284
      },
      "e-109": {
        id: "e-109",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-19",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-110"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd47215|6056c3ec-df85-bc4c-aa56-b390dd38104c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd47215|6056c3ec-df85-bc4c-aa56-b390dd38104c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1715942860219
      },
      "e-110": {
        id: "e-110",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-20",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-109"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd47215|6056c3ec-df85-bc4c-aa56-b390dd38104c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd47215|6056c3ec-df85-bc4c-aa56-b390dd38104c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1715942860220
      },
      "e-113": {
        id: "e-113",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-19",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-114"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd47215|c262c689-9bd8-ea4e-6dfa-ff59f64dcafd",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd47215|c262c689-9bd8-ea4e-6dfa-ff59f64dcafd",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716532388542
      },
      "e-114": {
        id: "e-114",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-20",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-113"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd47215|c262c689-9bd8-ea4e-6dfa-ff59f64dcafd",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd47215|c262c689-9bd8-ea4e-6dfa-ff59f64dcafd",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716532388542
      },
      "e-115": {
        id: "e-115",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-19",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-116"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd47215|3ac3d6fd-040e-3dcc-cce5-4358623098b3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd47215|3ac3d6fd-040e-3dcc-cce5-4358623098b3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716532389091
      },
      "e-116": {
        id: "e-116",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-20",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-115"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd47215|3ac3d6fd-040e-3dcc-cce5-4358623098b3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd47215|3ac3d6fd-040e-3dcc-cce5-4358623098b3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716532389091
      },
      "e-117": {
        id: "e-117",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-19",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-118"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd47215|6c8e4e34-fcce-7006-fd29-ba229dace656",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd47215|6c8e4e34-fcce-7006-fd29-ba229dace656",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716532389575
      },
      "e-118": {
        id: "e-118",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-20",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-117"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd47215|6c8e4e34-fcce-7006-fd29-ba229dace656",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd47215|6c8e4e34-fcce-7006-fd29-ba229dace656",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716532389575
      },
      "e-119": {
        id: "e-119",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-19",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-120"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd47215|268cc192-901f-fcd5-de99-a124d0213cea",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd47215|268cc192-901f-fcd5-de99-a124d0213cea",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716532390141
      },
      "e-120": {
        id: "e-120",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-20",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-119"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd47215|268cc192-901f-fcd5-de99-a124d0213cea",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd47215|268cc192-901f-fcd5-de99-a124d0213cea",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716532390141
      },
      "e-121": {
        id: "e-121",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-19",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-122"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd47215|252559ff-e826-870d-67b7-3aa0bc2f4e33",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd47215|252559ff-e826-870d-67b7-3aa0bc2f4e33",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716532390655
      },
      "e-122": {
        id: "e-122",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-20",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-121"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd47215|252559ff-e826-870d-67b7-3aa0bc2f4e33",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd47215|252559ff-e826-870d-67b7-3aa0bc2f4e33",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716532390655
      },
      "e-133": {
        id: "e-133",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-19",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-134"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf916999",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf916999",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716540359156
      },
      "e-134": {
        id: "e-134",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-20",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-133"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf916999",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf916999",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716540359156
      },
      "e-135": {
        id: "e-135",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-19",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-136"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf9169a3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf9169a3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716540359156
      },
      "e-136": {
        id: "e-136",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-20",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-135"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf9169a3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf9169a3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716540359156
      },
      "e-137": {
        id: "e-137",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-19",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-138"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf9169ad",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf9169ad",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716540359156
      },
      "e-138": {
        id: "e-138",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-20",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-137"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf9169ad",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf9169ad",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716540359156
      },
      "e-139": {
        id: "e-139",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-19",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-140"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf9169b7",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf9169b7",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716540359156
      },
      "e-140": {
        id: "e-140",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-20",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-139"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf9169b7",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf9169b7",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716540359156
      },
      "e-141": {
        id: "e-141",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-19",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-142"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ce55a1d9a18aa565245|2eb24bff-40b0-7d18-100f-497ed1d49de4",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ce55a1d9a18aa565245|2eb24bff-40b0-7d18-100f-497ed1d49de4",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716541112815
      },
      "e-142": {
        id: "e-142",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-20",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-141"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ce55a1d9a18aa565245|2eb24bff-40b0-7d18-100f-497ed1d49de4",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ce55a1d9a18aa565245|2eb24bff-40b0-7d18-100f-497ed1d49de4",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716541112815
      },
      "e-145": {
        id: "e-145",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-17",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-146"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|238c6d56-ee49-609e-e3ca-c58c2e020cd7",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|238c6d56-ee49-609e-e3ca-c58c2e020cd7",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716546679801
      },
      "e-146": {
        id: "e-146",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-18",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-145"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|238c6d56-ee49-609e-e3ca-c58c2e020cd7",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|238c6d56-ee49-609e-e3ca-c58c2e020cd7",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716546679801
      },
      "e-149": {
        id: "e-149",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-21",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-150"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|736287c0-3166-9c46-9da9-4524ec0d45f0",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|736287c0-3166-9c46-9da9-4524ec0d45f0",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716552774817
      },
      "e-150": {
        id: "e-150",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-22",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-149"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|736287c0-3166-9c46-9da9-4524ec0d45f0",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|736287c0-3166-9c46-9da9-4524ec0d45f0",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716552774817
      },
      "e-151": {
        id: "e-151",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-21",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-152"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|6bc32b0a-9167-5028-9ae9-b5dbc3dbabe0",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|6bc32b0a-9167-5028-9ae9-b5dbc3dbabe0",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716552775622
      },
      "e-152": {
        id: "e-152",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-22",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-151"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|6bc32b0a-9167-5028-9ae9-b5dbc3dbabe0",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|6bc32b0a-9167-5028-9ae9-b5dbc3dbabe0",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716552775622
      },
      "e-153": {
        id: "e-153",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-21",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-154"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|d3375dd8-985d-4a8e-4412-9db3aef59c0c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|d3375dd8-985d-4a8e-4412-9db3aef59c0c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716552776135
      },
      "e-154": {
        id: "e-154",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-22",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-153"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|d3375dd8-985d-4a8e-4412-9db3aef59c0c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|d3375dd8-985d-4a8e-4412-9db3aef59c0c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716552776135
      },
      "e-155": {
        id: "e-155",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-21",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-156"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|dd404773-a4c2-7e21-b9c9-cdd4c3125881",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|dd404773-a4c2-7e21-b9c9-cdd4c3125881",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716552776822
      },
      "e-156": {
        id: "e-156",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-22",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-155"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|dd404773-a4c2-7e21-b9c9-cdd4c3125881",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|dd404773-a4c2-7e21-b9c9-cdd4c3125881",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716552776822
      },
      "e-157": {
        id: "e-157",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-21",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-158"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|dfb30873-62a0-8252-e37e-667a194e3524",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|dfb30873-62a0-8252-e37e-667a194e3524",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716552777246
      },
      "e-158": {
        id: "e-158",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-22",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-157"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|dfb30873-62a0-8252-e37e-667a194e3524",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|dfb30873-62a0-8252-e37e-667a194e3524",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716552777246
      },
      "e-159": {
        id: "e-159",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-21",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-160"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|715dca46-8ad8-6175-4cb8-d86732e5b823",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|715dca46-8ad8-6175-4cb8-d86732e5b823",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716552777678
      },
      "e-160": {
        id: "e-160",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-22",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-159"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|715dca46-8ad8-6175-4cb8-d86732e5b823",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|715dca46-8ad8-6175-4cb8-d86732e5b823",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716552777678
      },
      "e-161": {
        id: "e-161",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-21",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-162"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|c0dfba58-270e-6d55-fec5-9c6adeebf995",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|c0dfba58-270e-6d55-fec5-9c6adeebf995",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716552778085
      },
      "e-162": {
        id: "e-162",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-22",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-161"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|c0dfba58-270e-6d55-fec5-9c6adeebf995",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|c0dfba58-270e-6d55-fec5-9c6adeebf995",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716552778085
      },
      "e-163": {
        id: "e-163",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-21",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-164"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|664f715f-de1a-aa21-6429-a225fb82fd6b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|664f715f-de1a-aa21-6429-a225fb82fd6b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716552778510
      },
      "e-164": {
        id: "e-164",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-22",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-163"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|664f715f-de1a-aa21-6429-a225fb82fd6b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|664f715f-de1a-aa21-6429-a225fb82fd6b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716552778510
      },
      "e-165": {
        id: "e-165",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-21",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-166"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|d9748447-17a3-23e0-5b01-9b5c8d95d5fa",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|d9748447-17a3-23e0-5b01-9b5c8d95d5fa",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716552778950
      },
      "e-166": {
        id: "e-166",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-22",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-165"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|d9748447-17a3-23e0-5b01-9b5c8d95d5fa",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|d9748447-17a3-23e0-5b01-9b5c8d95d5fa",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716552778950
      },
      "e-167": {
        id: "e-167",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-21",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-168"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|e0b85d8a-9a32-4b56-2e91-37a6ed5647ec",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|e0b85d8a-9a32-4b56-2e91-37a6ed5647ec",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716552779377
      },
      "e-168": {
        id: "e-168",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-22",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-167"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|e0b85d8a-9a32-4b56-2e91-37a6ed5647ec",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|e0b85d8a-9a32-4b56-2e91-37a6ed5647ec",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716552779377
      },
      "e-169": {
        id: "e-169",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-21",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-170"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|39a08aee-ca5d-71be-490a-5715d5d649f5",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|39a08aee-ca5d-71be-490a-5715d5d649f5",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716552779758
      },
      "e-170": {
        id: "e-170",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-22",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-169"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|39a08aee-ca5d-71be-490a-5715d5d649f5",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|39a08aee-ca5d-71be-490a-5715d5d649f5",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716552779758
      },
      "e-171": {
        id: "e-171",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-21",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-172"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|4ec19b8b-2a53-10da-b61b-bf6f3ab0b502",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|4ec19b8b-2a53-10da-b61b-bf6f3ab0b502",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716552780187
      },
      "e-172": {
        id: "e-172",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-22",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-171"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|4ec19b8b-2a53-10da-b61b-bf6f3ab0b502",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|4ec19b8b-2a53-10da-b61b-bf6f3ab0b502",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716552780187
      },
      "e-187": {
        id: "e-187",
        name: "",
        animationType: "preset",
        eventTypeId: "SLIDER_ACTIVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-23",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-188"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abca7",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abca7",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716615376689
      },
      "e-188": {
        id: "e-188",
        name: "",
        animationType: "preset",
        eventTypeId: "SLIDER_INACTIVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-24",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-187"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abca7",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abca7",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716615376689
      },
      "e-189": {
        id: "e-189",
        name: "",
        animationType: "preset",
        eventTypeId: "SLIDER_ACTIVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-23",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-190"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcb6",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcb6",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716615376689
      },
      "e-190": {
        id: "e-190",
        name: "",
        animationType: "preset",
        eventTypeId: "SLIDER_INACTIVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-24",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-189"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcb6",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcb6",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716615376689
      },
      "e-191": {
        id: "e-191",
        name: "",
        animationType: "preset",
        eventTypeId: "SLIDER_ACTIVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-23",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-192"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcc5",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcc5",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716615376689
      },
      "e-192": {
        id: "e-192",
        name: "",
        animationType: "preset",
        eventTypeId: "SLIDER_INACTIVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-24",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-191"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcc5",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcc5",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716615376689
      },
      "e-193": {
        id: "e-193",
        name: "",
        animationType: "preset",
        eventTypeId: "SLIDER_ACTIVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-23",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-194"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcd4",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcd4",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716615376689
      },
      "e-194": {
        id: "e-194",
        name: "",
        animationType: "preset",
        eventTypeId: "SLIDER_INACTIVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-24",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-193"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcd4",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcd4",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716615376689
      },
      "e-213": {
        id: "e-213",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-27",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-214"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|e9c244e1-ea14-4b77-b8b5-025af8311a31",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|e9c244e1-ea14-4b77-b8b5-025af8311a31",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716630449037
      },
      "e-214": {
        id: "e-214",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-28",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-213"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|e9c244e1-ea14-4b77-b8b5-025af8311a31",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|e9c244e1-ea14-4b77-b8b5-025af8311a31",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716630449038
      },
      "e-215": {
        id: "e-215",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-27",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-216"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|a4f99262-4a0b-4775-fb7a-f268e689eae3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|a4f99262-4a0b-4775-fb7a-f268e689eae3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716630544823
      },
      "e-216": {
        id: "e-216",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-28",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-215"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|a4f99262-4a0b-4775-fb7a-f268e689eae3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|a4f99262-4a0b-4775-fb7a-f268e689eae3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716630544824
      },
      "e-217": {
        id: "e-217",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-27",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-218"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|6b4e4005-0f61-84e9-e165-b329146e5117",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|6b4e4005-0f61-84e9-e165-b329146e5117",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716630575680
      },
      "e-218": {
        id: "e-218",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-28",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-217"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|6b4e4005-0f61-84e9-e165-b329146e5117",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|6b4e4005-0f61-84e9-e165-b329146e5117",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716630575709
      },
      "e-219": {
        id: "e-219",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-27",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-220"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|74cf4c14-b85f-86fd-209d-4d9f75d92dcc",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|74cf4c14-b85f-86fd-209d-4d9f75d92dcc",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716630590599
      },
      "e-220": {
        id: "e-220",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-28",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-219"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|74cf4c14-b85f-86fd-209d-4d9f75d92dcc",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|74cf4c14-b85f-86fd-209d-4d9f75d92dcc",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716630590600
      },
      "e-221": {
        id: "e-221",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-17",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-222"
          }
        },
        mediaQueries: ["main", "medium"],
        target: {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcac",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcac",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716631022335
      },
      "e-222": {
        id: "e-222",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-18",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-221"
          }
        },
        mediaQueries: ["main", "medium"],
        target: {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcac",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcac",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716631022336
      },
      "e-223": {
        id: "e-223",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-17",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-224"
          }
        },
        mediaQueries: ["main", "medium"],
        target: {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcbb",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcbb",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716631107511
      },
      "e-224": {
        id: "e-224",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-18",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-223"
          }
        },
        mediaQueries: ["main", "medium"],
        target: {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcbb",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcbb",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716631107512
      },
      "e-225": {
        id: "e-225",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-17",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-226"
          }
        },
        mediaQueries: ["main", "medium"],
        target: {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcca",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcca",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716631123982
      },
      "e-226": {
        id: "e-226",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-18",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-225"
          }
        },
        mediaQueries: ["main", "medium"],
        target: {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcca",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcca",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716631123983
      },
      "e-227": {
        id: "e-227",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-17",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-228"
          }
        },
        mediaQueries: ["main", "medium"],
        target: {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcd9",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcd9",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716631149095
      },
      "e-228": {
        id: "e-228",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-18",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-227"
          }
        },
        mediaQueries: ["main", "medium"],
        target: {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcd9",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abcd9",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716631149096
      },
      "e-229": {
        id: "e-229",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-13",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-230"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|739782a4-feff-f2f1-aa53-910a4c53e620",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|739782a4-feff-f2f1-aa53-910a4c53e620",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716631824805
      },
      "e-230": {
        id: "e-230",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-14",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-229"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|739782a4-feff-f2f1-aa53-910a4c53e620",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|739782a4-feff-f2f1-aa53-910a4c53e620",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716631824806
      },
      "e-231": {
        id: "e-231",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-232"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|b7f376c0-8aa6-1cec-b2a2-a2a668fcbf6b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|b7f376c0-8aa6-1cec-b2a2-a2a668fcbf6b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716632387952
      },
      "e-232": {
        id: "e-232",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-30",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-231"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|b7f376c0-8aa6-1cec-b2a2-a2a668fcbf6b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|b7f376c0-8aa6-1cec-b2a2-a2a668fcbf6b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716632387953
      },
      "e-233": {
        id: "e-233",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-234"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|ee843d1f-31a0-f829-143f-5e238d869a90",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|ee843d1f-31a0-f829-143f-5e238d869a90",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716632473277
      },
      "e-234": {
        id: "e-234",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-30",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-233"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|ee843d1f-31a0-f829-143f-5e238d869a90",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|ee843d1f-31a0-f829-143f-5e238d869a90",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716632473278
      },
      "e-235": {
        id: "e-235",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-236"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|ca6d0280-777f-04e4-3188-c915ce75b903",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|ca6d0280-777f-04e4-3188-c915ce75b903",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716632489076
      },
      "e-236": {
        id: "e-236",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-30",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-235"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|ca6d0280-777f-04e4-3188-c915ce75b903",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|ca6d0280-777f-04e4-3188-c915ce75b903",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716632489077
      },
      "e-237": {
        id: "e-237",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-238"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|9f9fc76a-9f3b-0801-b9c2-1fe1c8d9447e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|9f9fc76a-9f3b-0801-b9c2-1fe1c8d9447e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716632501151
      },
      "e-238": {
        id: "e-238",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-30",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-237"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|9f9fc76a-9f3b-0801-b9c2-1fe1c8d9447e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|9f9fc76a-9f3b-0801-b9c2-1fe1c8d9447e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716632501180
      },
      "e-239": {
        id: "e-239",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-240"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|3b73bb0e-8cac-f265-c5ae-6aa4126c2718",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|3b73bb0e-8cac-f265-c5ae-6aa4126c2718",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716632514390
      },
      "e-240": {
        id: "e-240",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-30",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-239"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|3b73bb0e-8cac-f265-c5ae-6aa4126c2718",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|3b73bb0e-8cac-f265-c5ae-6aa4126c2718",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716632514391
      },
      "e-241": {
        id: "e-241",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-242"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|d0bc5a7b-73a5-cea5-6e44-bbce3f216d89",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|d0bc5a7b-73a5-cea5-6e44-bbce3f216d89",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716632525688
      },
      "e-242": {
        id: "e-242",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-30",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-241"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|d0bc5a7b-73a5-cea5-6e44-bbce3f216d89",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|d0bc5a7b-73a5-cea5-6e44-bbce3f216d89",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716632525963
      },
      "e-243": {
        id: "e-243",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-244"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|5978a797-bf82-27f9-6717-a0e52a88972b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|5978a797-bf82-27f9-6717-a0e52a88972b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716632538950
      },
      "e-244": {
        id: "e-244",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-30",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-243"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|5978a797-bf82-27f9-6717-a0e52a88972b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|5978a797-bf82-27f9-6717-a0e52a88972b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716632538951
      },
      "e-259": {
        id: "e-259",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-260"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bb1",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bb1",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716632563569
      },
      "e-260": {
        id: "e-260",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-30",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-259"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bb1",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bb1",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716632563569
      },
      "e-261": {
        id: "e-261",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-262"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bb4",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bb4",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716632563569
      },
      "e-262": {
        id: "e-262",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-30",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-261"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bb4",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bb4",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716632563569
      },
      "e-263": {
        id: "e-263",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-264"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bb7",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bb7",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716632563569
      },
      "e-264": {
        id: "e-264",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-30",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-263"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bb7",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bb7",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716632563569
      },
      "e-265": {
        id: "e-265",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-266"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bba",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bba",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716632563569
      },
      "e-266": {
        id: "e-266",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-30",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-265"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bba",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bba",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716632563569
      },
      "e-267": {
        id: "e-267",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-268"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bbd",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bbd",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716632563569
      },
      "e-268": {
        id: "e-268",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-30",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-267"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bbd",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bbd",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716632563569
      },
      "e-269": {
        id: "e-269",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-270"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bc0",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bc0",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716632563569
      },
      "e-270": {
        id: "e-270",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-30",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-269"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bc0",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bc0",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716632563569
      },
      "e-271": {
        id: "e-271",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-272"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bc3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bc3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716632563569
      },
      "e-272": {
        id: "e-272",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-30",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-271"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bc3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|87c85ff0-c653-92a8-9e43-6e80c35c4bc3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716632563569
      },
      "e-273": {
        id: "e-273",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-11",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-274"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b5b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b5b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: true,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634027801
      },
      "e-275": {
        id: "e-275",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-276"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b5d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b5d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634027801
      },
      "e-276": {
        id: "e-276",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-30",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-275"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b5d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b5d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634027801
      },
      "e-277": {
        id: "e-277",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-278"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b60",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b60",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634027801
      },
      "e-278": {
        id: "e-278",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-30",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-277"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b60",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b60",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634027801
      },
      "e-279": {
        id: "e-279",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-280"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b63",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b63",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634027801
      },
      "e-280": {
        id: "e-280",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-30",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-279"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b63",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b63",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634027801
      },
      "e-281": {
        id: "e-281",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-282"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b66",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b66",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634027801
      },
      "e-282": {
        id: "e-282",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-30",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-281"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b66",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b66",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634027801
      },
      "e-283": {
        id: "e-283",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-284"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b69",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b69",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634027801
      },
      "e-284": {
        id: "e-284",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-30",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-283"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b69",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b69",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634027801
      },
      "e-285": {
        id: "e-285",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-286"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b6c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b6c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634027801
      },
      "e-286": {
        id: "e-286",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-30",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-285"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b6c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b6c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634027801
      },
      "e-287": {
        id: "e-287",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-288"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b6f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b6f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634027801
      },
      "e-288": {
        id: "e-288",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-30",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-287"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b6f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b6f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634027801
      },
      "e-289": {
        id: "e-289",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-290"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b73",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b73",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634027801
      },
      "e-290": {
        id: "e-290",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-30",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-289"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b73",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b73",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634027801
      },
      "e-291": {
        id: "e-291",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-292"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b76",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b76",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634027801
      },
      "e-292": {
        id: "e-292",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-30",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-291"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b76",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b76",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634027801
      },
      "e-293": {
        id: "e-293",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-294"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b79",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b79",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634027801
      },
      "e-294": {
        id: "e-294",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-30",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-293"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b79",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b79",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634027801
      },
      "e-295": {
        id: "e-295",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-296"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b7c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b7c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634027801
      },
      "e-296": {
        id: "e-296",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-30",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-295"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b7c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b7c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634027801
      },
      "e-297": {
        id: "e-297",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-298"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b7f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b7f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634027801
      },
      "e-298": {
        id: "e-298",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-30",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-297"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b7f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b7f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634027801
      },
      "e-299": {
        id: "e-299",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-300"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b82",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b82",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634027801
      },
      "e-300": {
        id: "e-300",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-30",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-299"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b82",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b82",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634027801
      },
      "e-301": {
        id: "e-301",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-29",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-302"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b85",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b85",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634027801
      },
      "e-302": {
        id: "e-302",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-30",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-301"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b85",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b85",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634027801
      },
      "e-303": {
        id: "e-303",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-27",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-304"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4ac",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4ac",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634407073
      },
      "e-304": {
        id: "e-304",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-28",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-303"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4ac",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4ac",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634407075
      },
      "e-305": {
        id: "e-305",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-27",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-306"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4b6",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4b6",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634429425
      },
      "e-306": {
        id: "e-306",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-28",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-305"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4b6",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4b6",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634429426
      },
      "e-307": {
        id: "e-307",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-27",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-308"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4c0",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4c0",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634445175
      },
      "e-308": {
        id: "e-308",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-28",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-307"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4c0",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4c0",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716634445204
      },
      "e-309": {
        id: "e-309",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-15",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-310"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|8ec35fea-fbee-4f91-de57-1feca197c320",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|8ec35fea-fbee-4f91-de57-1feca197c320",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716968032051
      },
      "e-310": {
        id: "e-310",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-16",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-309"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|8ec35fea-fbee-4f91-de57-1feca197c320",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|8ec35fea-fbee-4f91-de57-1feca197c320",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716968032051
      },
      "e-311": {
        id: "e-311",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-31",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-312"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|d926dc93-bffa-61f0-bbbd-e6387939985a",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|d926dc93-bffa-61f0-bbbd-e6387939985a",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716981754209
      },
      "e-312": {
        id: "e-312",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-32",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-311"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|d926dc93-bffa-61f0-bbbd-e6387939985a",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|d926dc93-bffa-61f0-bbbd-e6387939985a",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716981754210
      },
      "e-313": {
        id: "e-313",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-31",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-314"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|d926dc93-bffa-61f0-bbbd-e63879399858",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|d926dc93-bffa-61f0-bbbd-e63879399858",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716982312091
      },
      "e-314": {
        id: "e-314",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-32",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-313"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|d926dc93-bffa-61f0-bbbd-e63879399858",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|d926dc93-bffa-61f0-bbbd-e63879399858",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716982312093
      },
      "e-315": {
        id: "e-315",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-31",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-316"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|d365d6f4-b6d1-bcf6-94f5-457911601922",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|d365d6f4-b6d1-bcf6-94f5-457911601922",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716983279597
      },
      "e-316": {
        id: "e-316",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-32",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-315"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|d365d6f4-b6d1-bcf6-94f5-457911601922",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|d365d6f4-b6d1-bcf6-94f5-457911601922",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716983279598
      },
      "e-317": {
        id: "e-317",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-31",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-318"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|d365d6f4-b6d1-bcf6-94f5-457911601924",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|d365d6f4-b6d1-bcf6-94f5-457911601924",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716983290884
      },
      "e-318": {
        id: "e-318",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-32",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-317"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|d365d6f4-b6d1-bcf6-94f5-457911601924",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|d365d6f4-b6d1-bcf6-94f5-457911601924",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716983290887
      },
      "e-319": {
        id: "e-319",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-31",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-320"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abce3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abce3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: 0,
          direction: "LEFT",
          effectIn: true
        },
        createdOn: 1716983439581
      },
      "e-320": {
        id: "e-320",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-32",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-319"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abce3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abce3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716983439583
      },
      "e-321": {
        id: "e-321",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-31",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-322"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abce5",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abce5",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716983642326
      },
      "e-322": {
        id: "e-322",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-32",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-321"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abce5",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abce5",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716983642328
      },
      "e-323": {
        id: "e-323",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-31",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-324"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c953e135737715128a0|9bb032d0-e87f-5141-3e39-d4bed52c9eb2",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c953e135737715128a0|9bb032d0-e87f-5141-3e39-d4bed52c9eb2",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716983771964
      },
      "e-324": {
        id: "e-324",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-32",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-323"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c953e135737715128a0|9bb032d0-e87f-5141-3e39-d4bed52c9eb2",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c953e135737715128a0|9bb032d0-e87f-5141-3e39-d4bed52c9eb2",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716983771965
      },
      "e-325": {
        id: "e-325",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-31",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-326"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c953e135737715128a0|9bb032d0-e87f-5141-3e39-d4bed52c9eb4",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c953e135737715128a0|9bb032d0-e87f-5141-3e39-d4bed52c9eb4",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716983786563
      },
      "e-326": {
        id: "e-326",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-32",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-325"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c953e135737715128a0|9bb032d0-e87f-5141-3e39-d4bed52c9eb4",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c953e135737715128a0|9bb032d0-e87f-5141-3e39-d4bed52c9eb4",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716983786565
      },
      "e-327": {
        id: "e-327",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-31",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-328"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ce55a1d9a18aa565245|8740c731-0287-4efd-8cfa-89857e511ba2",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ce55a1d9a18aa565245|8740c731-0287-4efd-8cfa-89857e511ba2",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716983955276
      },
      "e-328": {
        id: "e-328",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-32",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-327"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ce55a1d9a18aa565245|8740c731-0287-4efd-8cfa-89857e511ba2",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ce55a1d9a18aa565245|8740c731-0287-4efd-8cfa-89857e511ba2",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716983955277
      },
      "e-329": {
        id: "e-329",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-31",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-330"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ce55a1d9a18aa565245|8740c731-0287-4efd-8cfa-89857e511ba4",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ce55a1d9a18aa565245|8740c731-0287-4efd-8cfa-89857e511ba4",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716983971628
      },
      "e-330": {
        id: "e-330",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-32",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-329"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ce55a1d9a18aa565245|8740c731-0287-4efd-8cfa-89857e511ba4",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ce55a1d9a18aa565245|8740c731-0287-4efd-8cfa-89857e511ba4",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1716983971629
      },
      "e-331": {
        id: "e-331",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-33",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-332"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|73a7fadb-ae36-45a4-fa6d-1ad663885bd9",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|73a7fadb-ae36-45a4-fa6d-1ad663885bd9",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1717151097834
      },
      "e-332": {
        id: "e-332",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-34",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-331"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|73a7fadb-ae36-45a4-fa6d-1ad663885bd9",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|73a7fadb-ae36-45a4-fa6d-1ad663885bd9",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1717151097836
      },
      "e-333": {
        id: "e-333",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-33",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-334"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|c7e75a68-ba54-dbfb-a047-c5fb489bac5c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|c7e75a68-ba54-dbfb-a047-c5fb489bac5c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1717151231457
      },
      "e-334": {
        id: "e-334",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-34",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-333"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|c7e75a68-ba54-dbfb-a047-c5fb489bac5c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|c7e75a68-ba54-dbfb-a047-c5fb489bac5c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1717151231458
      },
      "e-335": {
        id: "e-335",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-33",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-336"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|d0bc6e16-ca51-2f8f-531d-eb93d51ed56c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|d0bc6e16-ca51-2f8f-531d-eb93d51ed56c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1717151261054
      },
      "e-336": {
        id: "e-336",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-34",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-335"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|d0bc6e16-ca51-2f8f-531d-eb93d51ed56c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|d0bc6e16-ca51-2f8f-531d-eb93d51ed56c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1717151261056
      },
      "e-337": {
        id: "e-337",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInLeft",
            autoStopEventId: "e-338"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd47213|ef30abb9-6932-6a46-f8a8-d168f5a63277",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd47213|ef30abb9-6932-6a46-f8a8-d168f5a63277",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "LEFT",
          effectIn: true
        },
        createdOn: 1718262599918
      },
      "e-339": {
        id: "e-339",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInRight",
            autoStopEventId: "e-340"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd47213|a79644be-5be4-26f2-8498-8fe488d91e08",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd47213|a79644be-5be4-26f2-8498-8fe488d91e08",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "RIGHT",
          effectIn: true
        },
        createdOn: 1718262608978
      },
      "e-341": {
        id: "e-341",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-342"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd47213|06621418-d6bb-7ca0-15ec-629dc18b9aab",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd47213|06621418-d6bb-7ca0-15ec-629dc18b9aab",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718262617681
      },
      "e-343": {
        id: "e-343",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-344"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd47213|caf1ff26-2bf2-0bd5-d83c-d1c6daf227ff",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd47213|caf1ff26-2bf2-0bd5-d83c-d1c6daf227ff",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718262659972
      },
      "e-345": {
        id: "e-345",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-346"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd47213|82ee536e-3bf9-6560-cc24-cb5b473965ea",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd47213|82ee536e-3bf9-6560-cc24-cb5b473965ea",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718262672627
      },
      "e-347": {
        id: "e-347",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-348"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "9807520c-65b7-e828-71bd-909a6cfe1804",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "9807520c-65b7-e828-71bd-909a6cfe1804",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718262714108
      },
      "e-349": {
        id: "e-349",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-350"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "9807520c-65b7-e828-71bd-909a6cfe1801",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "9807520c-65b7-e828-71bd-909a6cfe1801",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718262735762
      },
      "e-351": {
        id: "e-351",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-352"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd47214|4d1494cd-2540-49d1-21fa-fe6893df2a13",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd47214|4d1494cd-2540-49d1-21fa-fe6893df2a13",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718262761216
      },
      "e-353": {
        id: "e-353",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-354"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd47214|5a6f3651-79ca-2810-51c6-38dfb55e81c2",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd47214|5a6f3651-79ca-2810-51c6-38dfb55e81c2",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718262770514
      },
      "e-355": {
        id: "e-355",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-356"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|3cfb94a2-272e-6feb-92ff-50daad6fc9ee",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|3cfb94a2-272e-6feb-92ff-50daad6fc9ee",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718262800618
      },
      "e-357": {
        id: "e-357",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInLeft",
            autoStopEventId: "e-358"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|1cd81e9b-b16c-09d8-e9a4-32450510748f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|1cd81e9b-b16c-09d8-e9a4-32450510748f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "LEFT",
          effectIn: true
        },
        createdOn: 1718262827770
      },
      "e-359": {
        id: "e-359",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInRight",
            autoStopEventId: "e-360"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|748f0872-c4df-86e5-aebc-1ada7a3468e3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|748f0872-c4df-86e5-aebc-1ada7a3468e3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "RIGHT",
          effectIn: true
        },
        createdOn: 1718262844909
      },
      "e-363": {
        id: "e-363",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-364"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b5b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|8e645804-f468-1c80-5395-1d0e1d5e6b5b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718262874439
      },
      "e-365": {
        id: "e-365",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-366"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|c45c1248-442f-bd61-9d0f-37c04d6ef6d6",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|c45c1248-442f-bd61-9d0f-37c04d6ef6d6",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718262888308
      },
      "e-367": {
        id: "e-367",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-368"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|934a11b2-7d2b-e11b-f2b5-dfd2864de64e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|934a11b2-7d2b-e11b-f2b5-dfd2864de64e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718262900756
      },
      "e-369": {
        id: "e-369",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-370"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664c6c771f42dc7e8007d147|238c6d56-ee49-609e-e3ca-c58c2e020cd4",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664c6c771f42dc7e8007d147|238c6d56-ee49-609e-e3ca-c58c2e020cd4",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718262909437
      },
      "e-371": {
        id: "e-371",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-372"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd47215|07eba158-492e-175e-895b-f04e3bb68525",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd47215|07eba158-492e-175e-895b-f04e3bb68525",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718262940612
      },
      "e-373": {
        id: "e-373",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-374"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd47215|0a466629-f086-71d9-8def-c7632ab41053",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd47215|0a466629-f086-71d9-8def-c7632ab41053",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718262953748
      },
      "e-375": {
        id: "e-375",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-376"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd47219|51506210-a64a-fa97-8e8d-e5a7be8b24c2",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd47219|51506210-a64a-fa97-8e8d-e5a7be8b24c2",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718262970493
      },
      "e-377": {
        id: "e-377",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-378"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|3b43402a-582b-62fc-ede0-894cbb577907",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|3b43402a-582b-62fc-ede0-894cbb577907",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718262986373
      },
      "e-379": {
        id: "e-379",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-380"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|4da009e8-fcfd-7767-f650-141b92a26e77",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|4da009e8-fcfd-7767-f650-141b92a26e77",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718262993992
      },
      "e-381": {
        id: "e-381",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-382"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|437de16c-1705-bf2d-e9fb-edeecb11fef6",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|437de16c-1705-bf2d-e9fb-edeecb11fef6",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263003862
      },
      "e-383": {
        id: "e-383",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-384"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ca49829d6b151d13b85|d46c37d5-6fad-1564-50c5-cf30818fe716",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ca49829d6b151d13b85|d46c37d5-6fad-1564-50c5-cf30818fe716",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263020673
      },
      "e-389": {
        id: "e-389",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-390"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ca49829d6b151d13b85|2968ded2-dbba-13e1-d6ac-732af799a4a3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ca49829d6b151d13b85|2968ded2-dbba-13e1-d6ac-732af799a4a3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263063229
      },
      "e-391": {
        id: "e-391",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInLeft",
            autoStopEventId: "e-392"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ca49829d6b151d13b85|f4bb15b3-83f8-89ca-3cec-9417130b4854",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ca49829d6b151d13b85|f4bb15b3-83f8-89ca-3cec-9417130b4854",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "LEFT",
          effectIn: true
        },
        createdOn: 1718263071417
      },
      "e-393": {
        id: "e-393",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInLeft",
            autoStopEventId: "e-394"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ca49829d6b151d13b85|51a742a4-964a-7100-4fbf-61cae26d0e35",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ca49829d6b151d13b85|51a742a4-964a-7100-4fbf-61cae26d0e35",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: "LEFT",
          effectIn: true
        },
        createdOn: 1718263085351
      },
      "e-395": {
        id: "e-395",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInLeft",
            autoStopEventId: "e-396"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ca49829d6b151d13b85|35b2d355-c252-88d2-5eba-af273bbf404e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ca49829d6b151d13b85|35b2d355-c252-88d2-5eba-af273bbf404e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "LEFT",
          effectIn: true
        },
        createdOn: 1718263093934
      },
      "e-397": {
        id: "e-397",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-398"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3cd6098b10043169496a|a7c9d58c-109e-8ae2-0596-dbdc2e18ffee",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3cd6098b10043169496a|a7c9d58c-109e-8ae2-0596-dbdc2e18ffee",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263126814
      },
      "e-399": {
        id: "e-399",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-400"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3cb827c2522c910072cc|69c439e3-9f81-a260-bba1-b37b24b2a1af",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3cb827c2522c910072cc|69c439e3-9f81-a260-bba1-b37b24b2a1af",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263145103
      },
      "e-401": {
        id: "e-401",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-402"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3cb827c2522c910072cc|fca8396e-99fc-7b91-5c00-1a7d3a088456",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3cb827c2522c910072cc|fca8396e-99fc-7b91-5c00-1a7d3a088456",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263176905
      },
      "e-403": {
        id: "e-403",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-404"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3cb827c2522c910072cc|f6137ff7-4c14-6989-0d24-123b8da78d49",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3cb827c2522c910072cc|f6137ff7-4c14-6989-0d24-123b8da78d49",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263199599
      },
      "e-405": {
        id: "e-405",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-406"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3cb827c2522c910072cc|a7db57ba-b2b5-b80b-8804-7026112b7b58",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3cb827c2522c910072cc|a7db57ba-b2b5-b80b-8804-7026112b7b58",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263207079
      },
      "e-407": {
        id: "e-407",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-408"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3cb827c2522c910072cc|622d00b6-4c27-8f2f-8c21-bd7e18ace6fb",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3cb827c2522c910072cc|622d00b6-4c27-8f2f-8c21-bd7e18ace6fb",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263216863
      },
      "e-409": {
        id: "e-409",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInLeft",
            autoStopEventId: "e-410"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3cb827c2522c910072cc|9ae087bc-2bf1-fd97-ff52-c04f8db44ed6",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3cb827c2522c910072cc|9ae087bc-2bf1-fd97-ff52-c04f8db44ed6",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "LEFT",
          effectIn: true
        },
        createdOn: 1718263227136
      },
      "e-411": {
        id: "e-411",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInLeft",
            autoStopEventId: "e-412"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3cb827c2522c910072cc|37d1d56a-56cb-22fb-c695-2d2345f20197",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3cb827c2522c910072cc|37d1d56a-56cb-22fb-c695-2d2345f20197",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: "LEFT",
          effectIn: true
        },
        createdOn: 1718263239632
      },
      "e-413": {
        id: "e-413",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInLeft",
            autoStopEventId: "e-414"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3cb827c2522c910072cc|024bd3f4-2fbb-8bf9-ae4f-152c6b49a343",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3cb827c2522c910072cc|024bd3f4-2fbb-8bf9-ae4f-152c6b49a343",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "LEFT",
          effectIn: true
        },
        createdOn: 1718263247850
      },
      "e-415": {
        id: "e-415",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInLeft",
            autoStopEventId: "e-416"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3cb827c2522c910072cc|c4e574ac-8f5d-4e47-4069-ceb353fc13ff",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3cb827c2522c910072cc|c4e574ac-8f5d-4e47-4069-ceb353fc13ff",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 400,
          direction: "LEFT",
          effectIn: true
        },
        createdOn: 1718263257072
      },
      "e-417": {
        id: "e-417",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-418"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3cb827c2522c910072cc|fd87bd76-358f-6780-7769-fb23eae47cde",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3cb827c2522c910072cc|fd87bd76-358f-6780-7769-fb23eae47cde",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263269113
      },
      "e-419": {
        id: "e-419",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-420"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3cb827c2522c910072cc|d94eb5f3-f432-aef6-76a6-6adea49aa256",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3cb827c2522c910072cc|d94eb5f3-f432-aef6-76a6-6adea49aa256",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263281564
      },
      "e-421": {
        id: "e-421",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-422"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d14f48328e2b8e67d68|bebb3873-7c02-b5a7-15ea-c708f44cdf5f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d14f48328e2b8e67d68|bebb3873-7c02-b5a7-15ea-c708f44cdf5f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263304624
      },
      "e-423": {
        id: "e-423",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-424"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4ab",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4ab",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263326528
      },
      "e-425": {
        id: "e-425",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInLeft",
            autoStopEventId: "e-426"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4cc",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4cc",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "LEFT",
          effectIn: true
        },
        createdOn: 1718263338128
      },
      "e-427": {
        id: "e-427",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInLeft",
            autoStopEventId: "e-428"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4d3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4d3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: "LEFT",
          effectIn: true
        },
        createdOn: 1718263348340
      },
      "e-429": {
        id: "e-429",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInLeft",
            autoStopEventId: "e-430"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4d8",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4d8",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "LEFT",
          effectIn: true
        },
        createdOn: 1718263360439
      },
      "e-431": {
        id: "e-431",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInLeft",
            autoStopEventId: "e-432"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4dd",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d14f48328e2b8e67d68|92b25038-7c84-49ce-7b00-94a4d033c4dd",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 400,
          direction: "LEFT",
          effectIn: true
        },
        createdOn: 1718263371799
      },
      "e-433": {
        id: "e-433",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-434"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d14f48328e2b8e67d68|6b6df9c7-e63c-ae4d-3892-32a6782d1c4e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d14f48328e2b8e67d68|6b6df9c7-e63c-ae4d-3892-32a6782d1c4e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263383117
      },
      "e-435": {
        id: "e-435",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-436"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d14f48328e2b8e67d68|6fb62b58-d04c-4b18-206f-d494b2a74a06",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d14f48328e2b8e67d68|6fb62b58-d04c-4b18-206f-d494b2a74a06",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263400617
      },
      "e-437": {
        id: "e-437",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-438"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d14f48328e2b8e67d68|a309b0ae-d68a-3f8d-cb29-f57cbc70b52c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d14f48328e2b8e67d68|a309b0ae-d68a-3f8d-cb29-f57cbc70b52c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263414306
      },
      "e-439": {
        id: "e-439",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-440"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d14f48328e2b8e67d68|04361781-a6b3-b95e-e5cb-ddac63d3d567",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d14f48328e2b8e67d68|04361781-a6b3-b95e-e5cb-ddac63d3d567",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263421635
      },
      "e-441": {
        id: "e-441",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-442"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d14f48328e2b8e67d68|35567c8f-89e5-1624-1509-47fcbbffc938",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d14f48328e2b8e67d68|35567c8f-89e5-1624-1509-47fcbbffc938",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263429059
      },
      "e-443": {
        id: "e-443",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-444"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ce55a1d9a18aa565245|38a6a120-d427-dd67-3012-e334ca1e6575",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ce55a1d9a18aa565245|38a6a120-d427-dd67-3012-e334ca1e6575",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263461012
      },
      "e-445": {
        id: "e-445",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-446"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ce55a1d9a18aa565245|18201687-df1c-7315-4f8a-f516d8065a2f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ce55a1d9a18aa565245|18201687-df1c-7315-4f8a-f516d8065a2f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263472596
      },
      "e-447": {
        id: "e-447",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-448"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ce55a1d9a18aa565245|18201687-df1c-7315-4f8a-f516d8065a55",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ce55a1d9a18aa565245|18201687-df1c-7315-4f8a-f516d8065a55",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263482779
      },
      "e-449": {
        id: "e-449",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-450"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ce55a1d9a18aa565245|18201687-df1c-7315-4f8a-f516d8065a7d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ce55a1d9a18aa565245|18201687-df1c-7315-4f8a-f516d8065a7d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263491674
      },
      "e-451": {
        id: "e-451",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-452"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ce55a1d9a18aa565245|d154fc11-b7a1-92ea-1214-cd7eac13f613",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ce55a1d9a18aa565245|d154fc11-b7a1-92ea-1214-cd7eac13f613",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263503778
      },
      "e-453": {
        id: "e-453",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-454"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ce55a1d9a18aa565245|d154fc11-b7a1-92ea-1214-cd7eac13f617",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ce55a1d9a18aa565245|d154fc11-b7a1-92ea-1214-cd7eac13f617",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263517811
      },
      "e-455": {
        id: "e-455",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-456"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ce55a1d9a18aa565245|7dac627e-bd2e-9f3b-2281-d86d3c1fb2a0",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ce55a1d9a18aa565245|7dac627e-bd2e-9f3b-2281-d86d3c1fb2a0",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263528729
      },
      "e-457": {
        id: "e-457",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-458"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ce55a1d9a18aa565245|787703af-b548-2eb3-24f4-fc70a37b6324",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ce55a1d9a18aa565245|787703af-b548-2eb3-24f4-fc70a37b6324",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263537553
      },
      "e-459": {
        id: "e-459",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-460"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ce55a1d9a18aa565245|323aaa03-185b-c800-2fbc-943658198bf8",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ce55a1d9a18aa565245|323aaa03-185b-c800-2fbc-943658198bf8",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 400,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263547906
      },
      "e-461": {
        id: "e-461",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-462"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ce55a1d9a18aa565245|8740c731-0287-4efd-8cfa-89857e511b7f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ce55a1d9a18aa565245|8740c731-0287-4efd-8cfa-89857e511b7f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263562219
      },
      "e-463": {
        id: "e-463",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-464"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ce55a1d9a18aa565245|0d968355-2376-6560-0363-3b2a4a08413a",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ce55a1d9a18aa565245|0d968355-2376-6560-0363-3b2a4a08413a",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263580339
      },
      "e-465": {
        id: "e-465",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-466"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf916997",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ce55a1d9a18aa565245|62d5768a-9b8d-bb67-419f-0267cf916997",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263592347
      },
      "e-467": {
        id: "e-467",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-468"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d066595f5fea3f4c62e|7b075ea5-fb5d-5e4a-8125-eb57caafa9b8",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d066595f5fea3f4c62e|7b075ea5-fb5d-5e4a-8125-eb57caafa9b8",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263629678
      },
      "e-469": {
        id: "e-469",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-470"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3cc9b8ca62a7826fd802|589664f0-8594-5e64-8a13-a3238a24df32",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3cc9b8ca62a7826fd802|589664f0-8594-5e64-8a13-a3238a24df32",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263646932
      },
      "e-475": {
        id: "e-475",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-476"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c953e135737715128a0|081409aa-e748-9f25-ba02-79de2d51566f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c953e135737715128a0|081409aa-e748-9f25-ba02-79de2d51566f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263690957
      },
      "e-477": {
        id: "e-477",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-478"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c953e135737715128a0|49a37429-5d36-acfa-07b7-3bf469bd3432",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c953e135737715128a0|49a37429-5d36-acfa-07b7-3bf469bd3432",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263705508
      },
      "e-479": {
        id: "e-479",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-480"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c953e135737715128a0|ae51c95a-058b-9168-a227-8708e27fa740",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c953e135737715128a0|ae51c95a-058b-9168-a227-8708e27fa740",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263733980
      },
      "e-481": {
        id: "e-481",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-482"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c953e135737715128a0|cc1d4aef-c2e2-d738-b068-39077be3f716",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c953e135737715128a0|cc1d4aef-c2e2-d738-b068-39077be3f716",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263742860
      },
      "e-483": {
        id: "e-483",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-484"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c953e135737715128a0|88058f69-d218-d873-71a0-3f19dde8efda",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c953e135737715128a0|88058f69-d218-d873-71a0-3f19dde8efda",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263750964
      },
      "e-485": {
        id: "e-485",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-486"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c953e135737715128a0|1c237287-a737-fbd3-8bf7-3961a9b16c46",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c953e135737715128a0|1c237287-a737-fbd3-8bf7-3961a9b16c46",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263761941
      },
      "e-487": {
        id: "e-487",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-488"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c953e135737715128a0|67877755-80f0-1cf6-602b-c11976010ef2",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c953e135737715128a0|67877755-80f0-1cf6-602b-c11976010ef2",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 400,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263779021
      },
      "e-489": {
        id: "e-489",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-490"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c953e135737715128a0|411b3886-e1ea-1d78-f49f-87e8914482bc",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c953e135737715128a0|411b3886-e1ea-1d78-f49f-87e8914482bc",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263800797
      },
      "e-491": {
        id: "e-491",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-492"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c953e135737715128a0|b99c4a3d-cb1a-1fe6-197d-47d13cd3493f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c953e135737715128a0|b99c4a3d-cb1a-1fe6-197d-47d13cd3493f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263811089
      },
      "e-493": {
        id: "e-493",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-494"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c953e135737715128a0|a6751caa-16ba-bdce-1cfc-e25094b44e78",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c953e135737715128a0|a6751caa-16ba-bdce-1cfc-e25094b44e78",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263823048
      },
      "e-495": {
        id: "e-495",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-496"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c953e135737715128a0|064f1ee3-f684-ee93-90fb-b8cc0504bf1e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c953e135737715128a0|064f1ee3-f684-ee93-90fb-b8cc0504bf1e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263835670
      },
      "e-497": {
        id: "e-497",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-498"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c953e135737715128a0|259c1fcf-a470-2304-38c5-c4d3428a54fc",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c953e135737715128a0|259c1fcf-a470-2304-38c5-c4d3428a54fc",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263847990
      },
      "e-499": {
        id: "e-499",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-500"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|e4dd9b03-d9f6-f754-63db-18dd23bcb795",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|e4dd9b03-d9f6-f754-63db-18dd23bcb795",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263865174
      },
      "e-501": {
        id: "e-501",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-502"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|dc47f25e-3a5f-8bbe-4e38-e9df2b695bd7",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|dc47f25e-3a5f-8bbe-4e38-e9df2b695bd7",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263876546
      },
      "e-503": {
        id: "e-503",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-504"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|48679e5e-8a08-b825-c0d2-b7485a8deb3f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|48679e5e-8a08-b825-c0d2-b7485a8deb3f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263906426
      },
      "e-505": {
        id: "e-505",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-506"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|b10825d0-00f2-7906-1195-250a05d1ac89",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|b10825d0-00f2-7906-1195-250a05d1ac89",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263923240
      },
      "e-507": {
        id: "e-507",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-508"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|0d033437-ddd3-07e7-a0d5-1cdfa9897e54",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|0d033437-ddd3-07e7-a0d5-1cdfa9897e54",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263933434
      },
      "e-509": {
        id: "e-509",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-510"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|a634f175-74ec-307a-7a11-5c5f700b3b40",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|a634f175-74ec-307a-7a11-5c5f700b3b40",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263946664
      },
      "e-511": {
        id: "e-511",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-512"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|839c8eb6-5292-f26e-be1d-67df768bacc3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|839c8eb6-5292-f26e-be1d-67df768bacc3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263960914
      },
      "e-513": {
        id: "e-513",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-514"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|0d3da4f7-deee-5231-9990-3287f5a77dd7",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|0d3da4f7-deee-5231-9990-3287f5a77dd7",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 400,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263973441
      },
      "e-515": {
        id: "e-515",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-516"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abca3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abca3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263982440
      },
      "e-517": {
        id: "e-517",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-518"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abca5",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|ce07cb26-31fb-a58d-994b-a947322abca5",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718263994023
      },
      "e-519": {
        id: "e-519",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-520"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|ea37dbc2-88d3-ed0e-adcf-828ab4cb2f40",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|ea37dbc2-88d3-ed0e-adcf-828ab4cb2f40",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718264009760
      },
      "e-523": {
        id: "e-523",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-524"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|125fc3b4-4dcf-7957-1678-9a532f84a30a",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|125fc3b4-4dcf-7957-1678-9a532f84a30a",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718264030065
      },
      "e-529": {
        id: "e-529",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-530"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|57d76187-7b18-ea04-117c-eacedbd59057",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|57d76187-7b18-ea04-117c-eacedbd59057",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718264076055
      },
      "e-531": {
        id: "e-531",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-532"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|1602f84e-e6a1-a96a-3e98-11ec2b0fa2cf",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|1602f84e-e6a1-a96a-3e98-11ec2b0fa2cf",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718264087087
      },
      "e-533": {
        id: "e-533",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-534"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|d926dc93-bffa-61f0-bbbd-e63879399854",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|d926dc93-bffa-61f0-bbbd-e63879399854",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718264098495
      },
      "e-535": {
        id: "e-535",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-536"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|68dbbe75-3c09-0de2-2acb-62c8ada6a03c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|68dbbe75-3c09-0de2-2acb-62c8ada6a03c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718264115886
      },
      "e-537": {
        id: "e-537",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-538"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|c291018a-df91-d7f1-187e-03fe6644aa3e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|c291018a-df91-d7f1-187e-03fe6644aa3e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718264130602
      },
      "e-539": {
        id: "e-539",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-540"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|d7d99cf5-3856-e2c2-5882-2fe18136e085",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|d7d99cf5-3856-e2c2-5882-2fe18136e085",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718264152903
      },
      "e-541": {
        id: "e-541",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-542"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|d7d99cf5-3856-e2c2-5882-2fe18136e083",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|d7d99cf5-3856-e2c2-5882-2fe18136e083",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718264168895
      },
      "e-543": {
        id: "e-543",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-544"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|d4bf2931-d444-19de-89bc-1fc388f7311e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|d4bf2931-d444-19de-89bc-1fc388f7311e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718264181805
      },
      "e-545": {
        id: "e-545",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-546"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|9509a71e-2fdf-6eb0-2480-99effe088f94",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|9509a71e-2fdf-6eb0-2480-99effe088f94",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718264193477
      },
      "e-547": {
        id: "e-547",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-548"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|15199b90-fa33-7427-a45c-0a45564f28b5",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|15199b90-fa33-7427-a45c-0a45564f28b5",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718264214151
      },
      "e-549": {
        id: "e-549",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-550"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|75cc54a2-184f-aac3-b01c-46336253572f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|75cc54a2-184f-aac3-b01c-46336253572f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718264300877
      },
      "e-551": {
        id: "e-551",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-552"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|ec41c649-9964-886f-e8b8-060864a2d0ce",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|ec41c649-9964-886f-e8b8-060864a2d0ce",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718264310246
      },
      "e-553": {
        id: "e-553",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-554"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b106f1e305b850bd4720e|607726a4-1da8-5bc3-4b3a-3da2eb9bf5a6",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|607726a4-1da8-5bc3-4b3a-3da2eb9bf5a6",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718264335772
      },
      "e-555": {
        id: "e-555",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-556"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c953e135737715128a0|435c44ca-5090-b7b2-2429-edd4620bddde",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c953e135737715128a0|435c44ca-5090-b7b2-2429-edd4620bddde",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718264740816
      },
      "e-559": {
        id: "e-559",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-560"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c953e135737715128a0|901c9dba-72ea-9381-8dc8-547268ae4dca",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c953e135737715128a0|901c9dba-72ea-9381-8dc8-547268ae4dca",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718264770135
      },
      "e-561": {
        id: "e-561",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-562"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ca49829d6b151d13b85|d371ee1c-3e18-68e1-0947-adea0bff45a6",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ca49829d6b151d13b85|d371ee1c-3e18-68e1-0947-adea0bff45a6",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718264979356
      },
      "e-563": {
        id: "e-563",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GROW_EFFECT",
          instant: false,
          config: {
            actionListId: "growIn",
            autoStopEventId: "e-564"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3ca49829d6b151d13b85|d298b79f-995d-b0a1-6c43-716ef8d66242",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3ca49829d6b151d13b85|d298b79f-995d-b0a1-6c43-716ef8d66242",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: null,
          effectIn: true
        },
        createdOn: 1718264991540
      },
      "e-565": {
        id: "e-565",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-21",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-566"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|709f7cdb-7d7b-5fd9-4476-50b236235f50",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|709f7cdb-7d7b-5fd9-4476-50b236235f50",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1718273507160
      },
      "e-566": {
        id: "e-566",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-22",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-565"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|709f7cdb-7d7b-5fd9-4476-50b236235f50",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|709f7cdb-7d7b-5fd9-4476-50b236235f50",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1718273507191
      },
      "e-573": {
        id: "e-573",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-21",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-574"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|a6a92b27-293a-13c8-585b-53e1520792ec",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|a6a92b27-293a-13c8-585b-53e1520792ec",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1718273609435
      },
      "e-574": {
        id: "e-574",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-22",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-573"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|a6a92b27-293a-13c8-585b-53e1520792ec",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|a6a92b27-293a-13c8-585b-53e1520792ec",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1718273609435
      },
      "e-575": {
        id: "e-575",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-21",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-576"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|8246286a-9ed8-3cd3-d1ac-5a7fb38bcf0b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|8246286a-9ed8-3cd3-d1ac-5a7fb38bcf0b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1718273630977
      },
      "e-576": {
        id: "e-576",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-22",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-575"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|8246286a-9ed8-3cd3-d1ac-5a7fb38bcf0b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|8246286a-9ed8-3cd3-d1ac-5a7fb38bcf0b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1718273630977
      },
      "e-577": {
        id: "e-577",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-21",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-578"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|3d387725-1b11-3e1e-4e80-e24f143de452",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|3d387725-1b11-3e1e-4e80-e24f143de452",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1718273643592
      },
      "e-578": {
        id: "e-578",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-22",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-577"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3d24f69ff96597eac8fb|3d387725-1b11-3e1e-4e80-e24f143de452",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3d24f69ff96597eac8fb|3d387725-1b11-3e1e-4e80-e24f143de452",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1718273643592
      },
      "e-579": {
        id: "e-579",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-580"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "664b3c87e3be7883cb5c5472|55e2ca58-2c7a-bc44-2223-9943f93dd140",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b3c87e3be7883cb5c5472|55e2ca58-2c7a-bc44-2223-9943f93dd140",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718276274868
      },
      "e-581": {
        id: "e-581",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-582"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "666bb1fc3300a64c63135d21|c42870f1-678e-bf8e-7a71-14eefeb9cb7b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "666bb1fc3300a64c63135d21|c42870f1-678e-bf8e-7a71-14eefeb9cb7b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718337170994
      },
      "e-583": {
        id: "e-583",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInLeft",
            autoStopEventId: "e-584"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "666bb1fc3300a64c63135d21|e8bc833b-3dec-11cd-6581-602e28097f43",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "666bb1fc3300a64c63135d21|e8bc833b-3dec-11cd-6581-602e28097f43",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "LEFT",
          effectIn: true
        },
        createdOn: 1718340959656
      },
      "e-585": {
        id: "e-585",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInLeft",
            autoStopEventId: "e-586"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "666bb1fc3300a64c63135d21|c2c013c4-2a2d-a3bc-5279-ebf9d6cf829b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "666bb1fc3300a64c63135d21|c2c013c4-2a2d-a3bc-5279-ebf9d6cf829b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "LEFT",
          effectIn: true
        },
        createdOn: 1718341484441
      },
      "e-587": {
        id: "e-587",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInLeft",
            autoStopEventId: "e-588"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "666bb1fc3300a64c63135d21|c339174d-e90b-d868-0cf3-f5e3da870967",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "666bb1fc3300a64c63135d21|c339174d-e90b-d868-0cf3-f5e3da870967",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "LEFT",
          effectIn: true
        },
        createdOn: 1718341484962
      },
      "e-589": {
        id: "e-589",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-590"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "666bb1fc3300a64c63135d21|921deaac-0463-dcce-965e-92a317924bc3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "666bb1fc3300a64c63135d21|921deaac-0463-dcce-965e-92a317924bc3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718343151562
      },
      "e-591": {
        id: "e-591",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-592"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "666bb1fc3300a64c63135d21|042f11f0-eae4-6293-e729-22dbeb302f2f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "666bb1fc3300a64c63135d21|042f11f0-eae4-6293-e729-22dbeb302f2f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718343165760
      },
      "e-593": {
        id: "e-593",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-594"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "666bb1fc3300a64c63135d21|c42870f1-678e-bf8e-7a71-14eefeb9cb8a",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "666bb1fc3300a64c63135d21|c42870f1-678e-bf8e-7a71-14eefeb9cb8a",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718343181804
      },
      "e-595": {
        id: "e-595",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-596"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "666bb1fc3300a64c63135d21|b0b5a6a3-c3ba-60cc-fb9d-3d182234c4a8",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "666bb1fc3300a64c63135d21|b0b5a6a3-c3ba-60cc-fb9d-3d182234c4a8",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718343945776
      },
      "e-597": {
        id: "e-597",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-598"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "666bb1fc3300a64c63135d21|d3b285b2-69bf-5b9e-9d9c-4abfe385a949",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "666bb1fc3300a64c63135d21|d3b285b2-69bf-5b9e-9d9c-4abfe385a949",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718343959200
      },
      "e-599": {
        id: "e-599",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-600"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "666bb1fc3300a64c63135d21|c339174d-e90b-d868-0cf3-f5e3da870963",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "666bb1fc3300a64c63135d21|c339174d-e90b-d868-0cf3-f5e3da870963",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718343972216
      },
      "e-601": {
        id: "e-601",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-602"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "666bb1fc3300a64c63135d21|c2c013c4-2a2d-a3bc-5279-ebf9d6cf8297",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "666bb1fc3300a64c63135d21|c2c013c4-2a2d-a3bc-5279-ebf9d6cf8297",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718343983842
      },
      "e-603": {
        id: "e-603",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: false,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-604"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "666bb1fc3300a64c63135d21|1ea8aba9-8585-aaf1-d7be-65bb0c16d47c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "666bb1fc3300a64c63135d21|1ea8aba9-8585-aaf1-d7be-65bb0c16d47c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: 10,
          scrollOffsetUnit: "%",
          delay: 100,
          direction: "BOTTOM",
          effectIn: true
        },
        createdOn: 1718344061431
      },
      "e-605": {
        id: "e-605",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-25",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-606"
          }
        },
        mediaQueries: ["main"],
        target: {
          id: "664b106f1e305b850bd4720e|d7d99cf5-3856-e2c2-5882-2fe18136e08e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|d7d99cf5-3856-e2c2-5882-2fe18136e08e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1727695644370
      },
      "e-606": {
        id: "e-606",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-26",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-605"
          }
        },
        mediaQueries: ["main"],
        target: {
          id: "664b106f1e305b850bd4720e|d7d99cf5-3856-e2c2-5882-2fe18136e08e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "664b106f1e305b850bd4720e|d7d99cf5-3856-e2c2-5882-2fe18136e08e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1727695644373
      },
      "e-609": {
        id: "e-609",
        name: "",
        animationType: "custom",
        eventTypeId: "DROPDOWN_OPEN",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-3",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-610"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "21faddf9-2fa8-d7ce-691d-0d7223a4203d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "21faddf9-2fa8-d7ce-691d-0d7223a4203d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1727699487416
      },
      "e-610": {
        id: "e-610",
        name: "",
        animationType: "custom",
        eventTypeId: "DROPDOWN_CLOSE",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-4",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-609"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "21faddf9-2fa8-d7ce-691d-0d7223a4203d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "21faddf9-2fa8-d7ce-691d-0d7223a4203d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1727699487420
      },
      "e-611": {
        id: "e-611",
        name: "",
        animationType: "custom",
        eventTypeId: "DROPDOWN_OPEN",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-3",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-612"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "dfa2e72a-ed5d-887d-c48a-f3aba13c7f9e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "dfa2e72a-ed5d-887d-c48a-f3aba13c7f9e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733827643575
      },
      "e-612": {
        id: "e-612",
        name: "",
        animationType: "custom",
        eventTypeId: "DROPDOWN_CLOSE",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-4",
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: "e-611"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "dfa2e72a-ed5d-887d-c48a-f3aba13c7f9e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "dfa2e72a-ed5d-887d-c48a-f3aba13c7f9e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: false,
          playInReverse: false,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1733827643579
      }
    },
    actionLists: {
      "a-7": {
        id: "a-7",
        title: "Service Hover Item [In]",
        actionItemGroups: [{
          actionItems: [{
            id: "a-7-n",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".simple-service-image-wrap",
                selectorGuids: ["74fd4198-390e-26ef-0345-de8c46a6424d"]
              },
              value: 0,
              unit: ""
            }
          }, {
            id: "a-7-n-3",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".button-link-white",
                selectorGuids: ["c475c124-cb47-fda5-cc5e-7f1aa071f0e4"]
              },
              value: 0,
              unit: ""
            }
          }, {
            id: "a-7-n-5",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".button-link-white",
                selectorGuids: ["c475c124-cb47-fda5-cc5e-7f1aa071f0e4"]
              },
              xValue: 1,
              yValue: 1,
              locked: true
            }
          }]
        }, {
          actionItems: [{
            id: "a-7-n-2",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".simple-service-image-wrap",
                selectorGuids: ["74fd4198-390e-26ef-0345-de8c46a6424d"]
              },
              value: 1,
              unit: ""
            }
          }, {
            id: "a-7-n-4",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".button-link-white",
                selectorGuids: ["c475c124-cb47-fda5-cc5e-7f1aa071f0e4"]
              },
              value: 1,
              unit: ""
            }
          }, {
            id: "a-7-n-6",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".button-link-white",
                selectorGuids: ["c475c124-cb47-fda5-cc5e-7f1aa071f0e4"]
              },
              xValue: 1.3,
              yValue: 1.3,
              locked: true
            }
          }]
        }],
        useFirstGroupAsInitialState: true,
        createdOn: 1716360131338
      },
      "a-8": {
        id: "a-8",
        title: "Service Hover Item [Out]",
        actionItemGroups: [{
          actionItems: [{
            id: "a-8-n",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".simple-service-image-wrap",
                selectorGuids: ["74fd4198-390e-26ef-0345-de8c46a6424d"]
              },
              value: 0,
              unit: ""
            }
          }, {
            id: "a-8-n-2",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".button-link-white",
                selectorGuids: ["c475c124-cb47-fda5-cc5e-7f1aa071f0e4"]
              },
              value: 0,
              unit: ""
            }
          }, {
            id: "a-8-n-3",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".button-link-white",
                selectorGuids: ["c475c124-cb47-fda5-cc5e-7f1aa071f0e4"]
              },
              xValue: 1,
              yValue: 1,
              locked: true
            }
          }]
        }],
        useFirstGroupAsInitialState: false,
        createdOn: 1716360131338
      },
      "a-9": {
        id: "a-9",
        title: "Button Hover [In]",
        actionItemGroups: [{
          actionItems: [{
            id: "a-9-n",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".button-icon",
                selectorGuids: ["af4b4538-4d89-dfe7-be92-d81762aa6853"]
              },
              xValue: 5,
              xUnit: "px",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            id: "a-9-n-2",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".button-icon",
                selectorGuids: ["af4b4538-4d89-dfe7-be92-d81762aa6853"]
              },
              xValue: 0,
              xUnit: "px",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }],
        useFirstGroupAsInitialState: true,
        createdOn: 1716360807978
      },
      "a-10": {
        id: "a-10",
        title: "Button Hover [Out]",
        actionItemGroups: [{
          actionItems: [{
            id: "a-10-n",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".button-icon",
                selectorGuids: ["af4b4538-4d89-dfe7-be92-d81762aa6853"]
              },
              xValue: 5,
              xUnit: "px",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }],
        useFirstGroupAsInitialState: false,
        createdOn: 1716360807978
      },
      "a-11": {
        id: "a-11",
        title: "Gallery Marquee [Left to Right]",
        actionItemGroups: [{
          actionItems: [{
            id: "a-11-n",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".gallery-marquee-list",
                selectorGuids: ["4e9c58f2-cdd8-dc16-ffc6-30e499c2f376"]
              },
              xValue: 0,
              xUnit: "px",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            id: "a-11-n-2",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 3e4,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".gallery-marquee-list",
                selectorGuids: ["4e9c58f2-cdd8-dc16-ffc6-30e499c2f376"]
              },
              xValue: -1512,
              xUnit: "px",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            id: "a-11-n-3",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 3e4,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".gallery-marquee-list",
                selectorGuids: ["4e9c58f2-cdd8-dc16-ffc6-30e499c2f376"]
              },
              xValue: 0,
              xUnit: "px",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }],
        useFirstGroupAsInitialState: true,
        createdOn: 1712053097256
      },
      "a-12": {
        id: "a-12",
        title: "Client Marquee [Left to Right]",
        actionItemGroups: [{
          actionItems: [{
            id: "a-12-n",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".client-marquee-list",
                selectorGuids: ["5a8ef8f7-f9c8-b73a-26cf-2c85635564a9"]
              },
              xValue: 0,
              xUnit: "px",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            id: "a-12-n-2",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 2e4,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".client-marquee-list",
                selectorGuids: ["5a8ef8f7-f9c8-b73a-26cf-2c85635564a9"]
              },
              xValue: -1512,
              xUnit: "px",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            id: "a-12-n-3",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 2e4,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".client-marquee-list",
                selectorGuids: ["5a8ef8f7-f9c8-b73a-26cf-2c85635564a9"]
              },
              xValue: 0,
              xUnit: "px",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }],
        useFirstGroupAsInitialState: true,
        createdOn: 1712053097256
      },
      "a-13": {
        id: "a-13",
        title: "Team Hover Item [In]",
        actionItemGroups: [{
          actionItems: [{
            id: "a-13-n",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".team-overlay",
                selectorGuids: ["4dda6ab7-acf4-85a1-4958-a9e29c06e63a"]
              },
              value: 0,
              unit: ""
            }
          }, {
            id: "a-13-n-3",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".team-social",
                selectorGuids: ["6cfd0ce0-260c-20ed-760f-37a5b5eb3d5a"]
              },
              value: 0,
              unit: ""
            }
          }, {
            id: "a-13-n-5",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".team-image",
                selectorGuids: ["212862a0-2e16-3f27-a6f2-7e719db554f1"]
              },
              xValue: 1,
              yValue: 1,
              locked: true
            }
          }]
        }, {
          actionItems: [{
            id: "a-13-n-2",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".team-overlay",
                selectorGuids: ["4dda6ab7-acf4-85a1-4958-a9e29c06e63a"]
              },
              value: .6,
              unit: ""
            }
          }, {
            id: "a-13-n-4",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".team-social",
                selectorGuids: ["6cfd0ce0-260c-20ed-760f-37a5b5eb3d5a"]
              },
              value: 1,
              unit: ""
            }
          }, {
            id: "a-13-n-6",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".team-image",
                selectorGuids: ["212862a0-2e16-3f27-a6f2-7e719db554f1"]
              },
              xValue: 1.1,
              yValue: 1.1,
              locked: true
            }
          }]
        }],
        useFirstGroupAsInitialState: true,
        createdOn: 1716437981108
      },
      "a-14": {
        id: "a-14",
        title: "Team Hover Item [Out]",
        actionItemGroups: [{
          actionItems: [{
            id: "a-14-n",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".team-overlay",
                selectorGuids: ["4dda6ab7-acf4-85a1-4958-a9e29c06e63a"]
              },
              value: 0,
              unit: ""
            }
          }, {
            id: "a-14-n-2",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".team-social",
                selectorGuids: ["6cfd0ce0-260c-20ed-760f-37a5b5eb3d5a"]
              },
              value: 0,
              unit: ""
            }
          }, {
            id: "a-14-n-3",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".team-image",
                selectorGuids: ["212862a0-2e16-3f27-a6f2-7e719db554f1"]
              },
              xValue: 1,
              yValue: 1,
              locked: true
            }
          }]
        }],
        useFirstGroupAsInitialState: false,
        createdOn: 1716437981108
      },
      "a-15": {
        id: "a-15",
        title: "Blog Hover Item [In]",
        actionItemGroups: [{
          actionItems: [{
            id: "a-15-n",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".blog-image",
                selectorGuids: ["e3409b2c-a474-cc86-5381-9bd3b2d4af1a"]
              },
              xValue: 1,
              yValue: 1,
              locked: true
            }
          }]
        }, {
          actionItems: [{
            id: "a-15-n-2",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".blog-image",
                selectorGuids: ["e3409b2c-a474-cc86-5381-9bd3b2d4af1a"]
              },
              xValue: 1.1,
              yValue: 1.1,
              locked: true
            }
          }]
        }],
        useFirstGroupAsInitialState: true,
        createdOn: 1716441118083
      },
      "a-16": {
        id: "a-16",
        title: "Blog Hover Item [Out]",
        actionItemGroups: [{
          actionItems: [{
            id: "a-16-n",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".blog-image",
                selectorGuids: ["e3409b2c-a474-cc86-5381-9bd3b2d4af1a"]
              },
              xValue: 1,
              yValue: 1,
              locked: true
            }
          }]
        }],
        useFirstGroupAsInitialState: false,
        createdOn: 1716441118083
      },
      "a-17": {
        id: "a-17",
        title: "Project Hover Item [In]",
        actionItemGroups: [{
          actionItems: [{
            id: "a-17-n",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".simple-project-image",
                selectorGuids: ["0770e781-098e-eb1b-43f0-a8cdc660b45d"]
              },
              xValue: 1,
              yValue: 1,
              locked: true
            }
          }, {
            id: "a-17-n-3",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".project-detail-image",
                selectorGuids: ["557b8c4a-8a27-d9b5-2d64-faab2777c7a5"]
              },
              xValue: 1,
              yValue: 1,
              locked: true
            }
          }, {
            id: "a-17-n-5",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".project-slider-overlay",
                selectorGuids: ["6256753f-b907-32b7-d9d7-6696a35c6c0d"]
              },
              value: 0,
              unit: ""
            }
          }]
        }, {
          actionItems: [{
            id: "a-17-n-4",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".simple-project-image",
                selectorGuids: ["0770e781-098e-eb1b-43f0-a8cdc660b45d"]
              },
              xValue: 1.2,
              yValue: 1.2,
              locked: true
            }
          }, {
            id: "a-17-n-2",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".project-detail-image",
                selectorGuids: ["557b8c4a-8a27-d9b5-2d64-faab2777c7a5"]
              },
              xValue: 1.2,
              yValue: 1.2,
              locked: true
            }
          }, {
            id: "a-17-n-6",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".project-slider-overlay",
                selectorGuids: ["6256753f-b907-32b7-d9d7-6696a35c6c0d"]
              },
              value: .6,
              unit: ""
            }
          }]
        }],
        useFirstGroupAsInitialState: true,
        createdOn: 1716445811255
      },
      "a-18": {
        id: "a-18",
        title: "Project Hover Item [Out]",
        actionItemGroups: [{
          actionItems: [{
            id: "a-18-n",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".simple-project-image",
                selectorGuids: ["0770e781-098e-eb1b-43f0-a8cdc660b45d"]
              },
              xValue: 1,
              yValue: 1,
              locked: true
            }
          }, {
            id: "a-18-n-2",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".project-detail-image",
                selectorGuids: ["557b8c4a-8a27-d9b5-2d64-faab2777c7a5"]
              },
              xValue: 1,
              yValue: 1,
              locked: true
            }
          }, {
            id: "a-18-n-3",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".project-slider-overlay",
                selectorGuids: ["6256753f-b907-32b7-d9d7-6696a35c6c0d"]
              },
              value: 0,
              unit: ""
            }
          }]
        }],
        useFirstGroupAsInitialState: false,
        createdOn: 1716445811255
      },
      "a-19": {
        id: "a-19",
        title: "🪗 Accordion [Open]",
        actionItemGroups: [{
          actionItems: [{
            id: "a-19-n",
            actionTypeId: "STYLE_SIZE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "SIBLINGS",
                selector: ".accordion-content-wrap",
                selectorGuids: ["7736553f-9748-b4d2-c8a3-fdc3efd9a615"]
              },
              heightValue: 0,
              widthUnit: "PX",
              heightUnit: "px",
              locked: false
            }
          }, {
            id: "a-19-n-4",
            actionTypeId: "TRANSFORM_ROTATE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".accordion-icon-minus",
                selectorGuids: ["7736553f-9748-b4d2-c8a3-fdc3efd9a616"]
              },
              zValue: 90,
              xUnit: "DEG",
              yUnit: "DEG",
              zUnit: "deg"
            }
          }]
        }, {
          actionItems: [{
            id: "a-19-n-5",
            actionTypeId: "STYLE_SIZE",
            config: {
              delay: 0,
              easing: "inOutQuad",
              duration: 400,
              target: {
                useEventTarget: "SIBLINGS",
                selector: ".accordion-content-wrap",
                selectorGuids: ["7736553f-9748-b4d2-c8a3-fdc3efd9a615"]
              },
              widthUnit: "PX",
              heightUnit: "AUTO",
              locked: false
            }
          }, {
            id: "a-19-n-9",
            actionTypeId: "TRANSFORM_ROTATE",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".accordion-icon-minus",
                selectorGuids: ["7736553f-9748-b4d2-c8a3-fdc3efd9a616"]
              },
              zValue: 0,
              xUnit: "DEG",
              yUnit: "DEG",
              zUnit: "deg"
            }
          }]
        }],
        useFirstGroupAsInitialState: true,
        createdOn: 1649057594510
      },
      "a-20": {
        id: "a-20",
        title: "🪗 Accordion [Close]",
        actionItemGroups: [{
          actionItems: [{
            id: "a-20-n",
            actionTypeId: "STYLE_SIZE",
            config: {
              delay: 0,
              easing: "inOutQuad",
              duration: 400,
              target: {
                useEventTarget: "SIBLINGS",
                selector: ".accordion-content-wrap",
                selectorGuids: ["7736553f-9748-b4d2-c8a3-fdc3efd9a615"]
              },
              heightValue: 0,
              widthUnit: "PX",
              heightUnit: "px",
              locked: false
            }
          }, {
            id: "a-20-n-5",
            actionTypeId: "TRANSFORM_ROTATE",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".accordion-icon-minus",
                selectorGuids: ["7736553f-9748-b4d2-c8a3-fdc3efd9a616"]
              },
              zValue: 90,
              xUnit: "DEG",
              yUnit: "DEG",
              zUnit: "deg"
            }
          }]
        }],
        useFirstGroupAsInitialState: false,
        createdOn: 1649057930494
      },
      "a-21": {
        id: "a-21",
        title: "Our Client Hover Item [In]",
        actionItemGroups: [{
          actionItems: [{
            id: "a-21-n",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".client-overlay",
                selectorGuids: ["9d50e020-86ec-5765-5424-4ff6025a7ea8"]
              },
              value: 0,
              unit: ""
            }
          }]
        }, {
          actionItems: [{
            id: "a-21-n-2",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".client-overlay",
                selectorGuids: ["9d50e020-86ec-5765-5424-4ff6025a7ea8"]
              },
              value: .3,
              unit: ""
            }
          }]
        }],
        useFirstGroupAsInitialState: true,
        createdOn: 1716551078513
      },
      "a-22": {
        id: "a-22",
        title: "Our Client Hover Item [Out]",
        actionItemGroups: [{
          actionItems: [{
            id: "a-22-n",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".client-overlay",
                selectorGuids: ["9d50e020-86ec-5765-5424-4ff6025a7ea8"]
              },
              value: 0,
              unit: ""
            }
          }]
        }],
        useFirstGroupAsInitialState: false,
        createdOn: 1716551078513
      },
      "a-23": {
        id: "a-23",
        title: "Project Slide In View",
        actionItemGroups: [{
          actionItems: [{
            id: "a-23-n",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".project-slide-image-wrap",
                selectorGuids: ["5dea6e2f-6f37-41b6-d2ff-8bbb876a5cf7"]
              },
              xValue: 1.1,
              yValue: 1.1,
              locked: true
            }
          }, {
            id: "a-23-n-3",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".project-slide-item",
                selectorGuids: ["0dfa517c-cf2c-50ba-f01c-0b690efbf3c4"]
              },
              xValue: .8,
              yValue: .8,
              locked: true
            }
          }]
        }, {
          actionItems: [{
            id: "a-23-n-2",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "inOutCirc",
              duration: 1800,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".project-slide-image-wrap",
                selectorGuids: ["5dea6e2f-6f37-41b6-d2ff-8bbb876a5cf7"]
              },
              xValue: 1,
              yValue: 1,
              locked: true
            }
          }, {
            id: "a-23-n-4",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "inOutCirc",
              duration: 1800,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".project-slide-item",
                selectorGuids: ["0dfa517c-cf2c-50ba-f01c-0b690efbf3c4"]
              },
              xValue: 1,
              yValue: 1,
              locked: true
            }
          }]
        }],
        useFirstGroupAsInitialState: true,
        createdOn: 1716613894081
      },
      "a-24": {
        id: "a-24",
        title: "Project Slide Out View",
        actionItemGroups: [{
          actionItems: [{
            id: "a-24-n",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "outQuad",
              duration: 600,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".project-slide-image-wrap",
                selectorGuids: ["5dea6e2f-6f37-41b6-d2ff-8bbb876a5cf7"]
              },
              xValue: 1.1,
              yValue: 1.1,
              locked: true
            }
          }, {
            id: "a-24-n-2",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "outQuad",
              duration: 600,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".project-slide-item",
                selectorGuids: ["0dfa517c-cf2c-50ba-f01c-0b690efbf3c4"]
              },
              xValue: .7,
              yValue: .7,
              locked: true
            }
          }]
        }],
        useFirstGroupAsInitialState: false,
        createdOn: 1716613894081
      },
      "a-27": {
        id: "a-27",
        title: "Service Hover Item [In]",
        actionItemGroups: [{
          actionItems: [{
            id: "a-27-n",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-image",
                selectorGuids: ["7707704b-9df8-5d80-5a48-ae746982107b"]
              },
              xValue: 1,
              yValue: 1,
              locked: true
            }
          }]
        }, {
          actionItems: [{
            id: "a-27-n-2",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-image",
                selectorGuids: ["7707704b-9df8-5d80-5a48-ae746982107b"]
              },
              xValue: 1.1,
              yValue: 1.1,
              locked: true
            }
          }]
        }],
        useFirstGroupAsInitialState: true,
        createdOn: 1716630455206
      },
      "a-28": {
        id: "a-28",
        title: "Service Hover Item [Out]",
        actionItemGroups: [{
          actionItems: [{
            id: "a-28-n",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".service-image",
                selectorGuids: ["7707704b-9df8-5d80-5a48-ae746982107b"]
              },
              xValue: 1,
              yValue: 1,
              locked: true
            }
          }]
        }],
        useFirstGroupAsInitialState: false,
        createdOn: 1716630455206
      },
      "a-29": {
        id: "a-29",
        title: "Gallery Image Hover [In]",
        actionItemGroups: [{
          actionItems: [{
            id: "a-29-n",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".gallery-image",
                selectorGuids: ["57b0a6b5-012a-6853-a285-b35905057cfc"]
              },
              xValue: 1,
              yValue: 1,
              locked: true
            }
          }]
        }, {
          actionItems: [{
            id: "a-29-n-2",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".gallery-image",
                selectorGuids: ["57b0a6b5-012a-6853-a285-b35905057cfc"]
              },
              xValue: 1.1,
              yValue: 1.1,
              locked: true
            }
          }]
        }],
        useFirstGroupAsInitialState: true,
        createdOn: 1716632391345
      },
      "a-30": {
        id: "a-30",
        title: "Gallery Image Hover [Out]",
        actionItemGroups: [{
          actionItems: [{
            id: "a-30-n",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".gallery-image",
                selectorGuids: ["57b0a6b5-012a-6853-a285-b35905057cfc"]
              },
              xValue: 1,
              yValue: 1,
              locked: true
            }
          }]
        }],
        useFirstGroupAsInitialState: false,
        createdOn: 1716632391345
      },
      "a-31": {
        id: "a-31",
        title: "Arrow Hover Item [In]",
        actionItemGroups: [{
          actionItems: [{
            id: "a-31-n-3",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".right-arrow-icon-dark",
                selectorGuids: ["145fd73b-974e-279c-4435-1e105f72518d"]
              },
              value: 1,
              unit: ""
            }
          }, {
            id: "a-31-n-5",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".left-arrow-icon-dark",
                selectorGuids: ["e1c8e415-dc5a-8709-30f1-c7a1f659b831"]
              },
              value: 1,
              unit: ""
            }
          }, {
            id: "a-31-n-7",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".left-arrow-icon-light",
                selectorGuids: ["61202de9-3bec-808c-4510-ba5ada7a2b11"]
              },
              value: 0,
              unit: ""
            }
          }, {
            id: "a-31-n-9",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".right-arrow-icon-light",
                selectorGuids: ["f3ca95f7-92c1-3478-cd8d-a85c9ea29fd3"]
              },
              value: 0,
              unit: ""
            }
          }]
        }, {
          actionItems: [{
            id: "a-31-n-4",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".right-arrow-icon-dark",
                selectorGuids: ["145fd73b-974e-279c-4435-1e105f72518d"]
              },
              value: 0,
              unit: ""
            }
          }, {
            id: "a-31-n-6",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".left-arrow-icon-dark",
                selectorGuids: ["e1c8e415-dc5a-8709-30f1-c7a1f659b831"]
              },
              value: 0,
              unit: ""
            }
          }, {
            id: "a-31-n-8",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".left-arrow-icon-light",
                selectorGuids: ["61202de9-3bec-808c-4510-ba5ada7a2b11"]
              },
              value: 1,
              unit: ""
            }
          }, {
            id: "a-31-n-10",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".right-arrow-icon-light",
                selectorGuids: ["f3ca95f7-92c1-3478-cd8d-a85c9ea29fd3"]
              },
              value: 1,
              unit: ""
            }
          }]
        }],
        useFirstGroupAsInitialState: true,
        createdOn: 1716981757754
      },
      "a-32": {
        id: "a-32",
        title: "Arrow Hover Item [Out]",
        actionItemGroups: [{
          actionItems: [{
            id: "a-32-n-2",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".right-arrow-icon-dark",
                selectorGuids: ["145fd73b-974e-279c-4435-1e105f72518d"]
              },
              value: 1,
              unit: ""
            }
          }, {
            id: "a-32-n-3",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".left-arrow-icon-dark",
                selectorGuids: ["e1c8e415-dc5a-8709-30f1-c7a1f659b831"]
              },
              value: 1,
              unit: ""
            }
          }, {
            id: "a-32-n-4",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".left-arrow-icon-light",
                selectorGuids: ["61202de9-3bec-808c-4510-ba5ada7a2b11"]
              },
              value: 0,
              unit: ""
            }
          }, {
            id: "a-32-n-5",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".right-arrow-icon-light",
                selectorGuids: ["f3ca95f7-92c1-3478-cd8d-a85c9ea29fd3"]
              },
              value: 0,
              unit: ""
            }
          }]
        }],
        useFirstGroupAsInitialState: false,
        createdOn: 1716981757754
      },
      "a-33": {
        id: "a-33",
        title: "Map Hover Item [In]",
        actionItemGroups: [{
          actionItems: [{
            id: "a-33-n",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".map-titles",
                selectorGuids: ["388e712a-9119-30d6-6a7c-29fbd08b1226"]
              },
              value: 0,
              unit: ""
            }
          }]
        }, {
          actionItems: [{
            id: "a-33-n-2",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".map-titles",
                selectorGuids: ["388e712a-9119-30d6-6a7c-29fbd08b1226"]
              },
              value: 1,
              unit: ""
            }
          }]
        }],
        useFirstGroupAsInitialState: true,
        createdOn: 1717151100622
      },
      "a-34": {
        id: "a-34",
        title: "Map Hover Item [Out]",
        actionItemGroups: [{
          actionItems: [{
            id: "a-34-n",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".map-titles",
                selectorGuids: ["388e712a-9119-30d6-6a7c-29fbd08b1226"]
              },
              value: 0,
              unit: ""
            }
          }]
        }],
        useFirstGroupAsInitialState: false,
        createdOn: 1717151100622
      },
      "a-25": {
        id: "a-25",
        title: "Project Hover [In]",
        actionItemGroups: [{
          actionItems: [{
            id: "a-25-n",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "SIBLINGS",
                selector: ".project-image-wrap",
                selectorGuids: ["92af055f-5ab4-5513-6f78-ef3213c0760e"]
              },
              value: 0,
              unit: ""
            }
          }, {
            id: "a-25-n-3",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".project-title-wrap",
                selectorGuids: ["37549240-1c71-863b-6bc3-64269fee40e7"]
              },
              value: 1,
              unit: ""
            }
          }]
        }, {
          actionItems: [{
            id: "a-25-n-2",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "SIBLINGS",
                selector: ".project-image-wrap",
                selectorGuids: ["92af055f-5ab4-5513-6f78-ef3213c0760e"]
              },
              value: 1,
              unit: ""
            }
          }, {
            id: "a-25-n-4",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".project-title-wrap",
                selectorGuids: ["37549240-1c71-863b-6bc3-64269fee40e7"]
              },
              value: .4,
              unit: ""
            }
          }]
        }],
        useFirstGroupAsInitialState: true,
        createdOn: 1716623383711
      },
      "a-26": {
        id: "a-26",
        title: "Project Hover [Out]",
        actionItemGroups: [{
          actionItems: [{
            id: "a-26-n",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "SIBLINGS",
                selector: ".project-image-wrap",
                selectorGuids: ["92af055f-5ab4-5513-6f78-ef3213c0760e"]
              },
              value: 0,
              unit: ""
            }
          }, {
            id: "a-26-n-2",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".project-title-wrap",
                selectorGuids: ["37549240-1c71-863b-6bc3-64269fee40e7"]
              },
              value: 1,
              unit: ""
            }
          }]
        }],
        useFirstGroupAsInitialState: false,
        createdOn: 1716623383711
      },
      "a-3": {
        id: "a-3",
        title: "Dropdown [Open]",
        actionItemGroups: [{
          actionItems: [{
            id: "a-3-n",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".dropdown-list",
                selectorGuids: ["afc8397c-9a30-d3f6-eaac-03af741b3547"]
              },
              yValue: 0,
              xUnit: "PX",
              yUnit: "px",
              zUnit: "PX"
            }
          }, {
            id: "a-3-n-2",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".dropdown-list",
                selectorGuids: ["afc8397c-9a30-d3f6-eaac-03af741b3547"]
              },
              value: 1,
              unit: ""
            }
          }]
        }, {
          actionItems: [{
            id: "a-3-n-3",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".dropdown-list",
                selectorGuids: ["afc8397c-9a30-d3f6-eaac-03af741b3547"]
              },
              value: 1,
              unit: ""
            }
          }, {
            id: "a-3-n-4",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".dropdown-list",
                selectorGuids: ["afc8397c-9a30-d3f6-eaac-03af741b3547"]
              },
              yValue: -15,
              xUnit: "PX",
              yUnit: "px",
              zUnit: "PX"
            }
          }]
        }],
        useFirstGroupAsInitialState: true,
        createdOn: 1684479538925
      },
      "a-4": {
        id: "a-4",
        title: "Dropdown [Close]",
        actionItemGroups: [{
          actionItems: [{
            id: "a-4-n",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".dropdown-list",
                selectorGuids: ["afc8397c-9a30-d3f6-eaac-03af741b3547"]
              },
              yValue: 20,
              xUnit: "PX",
              yUnit: "px",
              zUnit: "PX"
            }
          }, {
            id: "a-4-n-2",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".dropdown-list",
                selectorGuids: ["afc8397c-9a30-d3f6-eaac-03af741b3547"]
              },
              value: 0,
              unit: ""
            }
          }]
        }],
        useFirstGroupAsInitialState: false,
        createdOn: 1684479538925
      },
      slideInLeft: {
        id: "slideInLeft",
        useFirstGroupAsInitialState: true,
        actionItemGroups: [{
          actionItems: [{
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              duration: 0,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: true
              },
              value: 0
            }
          }]
        }, {
          actionItems: [{
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              duration: 0,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: true
              },
              xValue: -100,
              yValue: 0,
              xUnit: "PX",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "outQuart",
              duration: 1e3,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: true
              },
              value: 1
            }
          }, {
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "outQuart",
              duration: 1e3,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: true
              },
              xValue: 0,
              yValue: 0,
              xUnit: "PX",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }]
      },
      slideInRight: {
        id: "slideInRight",
        useFirstGroupAsInitialState: true,
        actionItemGroups: [{
          actionItems: [{
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              duration: 0,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: true
              },
              value: 0
            }
          }]
        }, {
          actionItems: [{
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              duration: 0,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: true
              },
              xValue: 100,
              yValue: 0,
              xUnit: "PX",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "outQuart",
              duration: 1e3,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: true
              },
              value: 1
            }
          }, {
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "outQuart",
              duration: 1e3,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: true
              },
              xValue: 0,
              yValue: 0,
              xUnit: "PX",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }]
      },
      slideInBottom: {
        id: "slideInBottom",
        useFirstGroupAsInitialState: true,
        actionItemGroups: [{
          actionItems: [{
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              duration: 0,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: true
              },
              value: 0
            }
          }]
        }, {
          actionItems: [{
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              duration: 0,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: true
              },
              xValue: 0,
              yValue: 100,
              xUnit: "PX",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "outQuart",
              duration: 1e3,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: true
              },
              xValue: 0,
              yValue: 0,
              xUnit: "PX",
              yUnit: "PX",
              zUnit: "PX"
            }
          }, {
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "outQuart",
              duration: 1e3,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: true
              },
              value: 1
            }
          }]
        }]
      },
      growIn: {
        id: "growIn",
        useFirstGroupAsInitialState: true,
        actionItemGroups: [{
          actionItems: [{
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              duration: 0,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: true
              },
              value: 0
            }
          }]
        }, {
          actionItems: [{
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              duration: 0,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: true
              },
              xValue: .7500000000000001,
              yValue: .7500000000000001
            }
          }]
        }, {
          actionItems: [{
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "outQuart",
              duration: 1e3,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: true
              },
              xValue: 1,
              yValue: 1
            }
          }, {
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "outQuart",
              duration: 1e3,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: true
              },
              value: 1
            }
          }]
        }]
      }
    },
    site: {
      mediaQueries: [{
        key: "main",
        min: 992,
        max: 1e4
      }, {
        key: "medium",
        min: 768,
        max: 991
      }, {
        key: "small",
        min: 480,
        max: 767
      }, {
        key: "tiny",
        min: 0,
        max: 479
      }]
    }
  });
})();