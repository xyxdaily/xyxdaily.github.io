~function (j, i, h, g, f, e, d, c, b, a) {
  c = this || self, d = c["document"], e = [], e["push"](function () {
    return c["setTimeout"](function () {
      c["_cf_chl_done"]();
    }, 4e3), !![];
  }), f = function (A, z, v, u, t, s, r) {
    return t = function t(B, C) {
      if (!v[B]) {
        var D;

        for (v[B] = {}, D = 0; D < B["length"]; v[B][B["charAt"](D)] = D, D++) {}
      }

      return v[B][C];
    }, u = String["fromCharCode"], v = {}, z = {
      'f': function (B) {
        if (null == B) {
          return '';
        }

        switch (B = z['a'](B, 6, function (D) {
          return "RCgTbOVz8jS9s07FlPAdqDcJXatr5hMWULuZY3mKxEHQwBoin26yNkev4I1fGp"["charAt"](D);
        }), B["length"] % 4) {
          default:
          case 0:
            return B;

          case 1:
            return B + "===";

          case 2:
            return B + '==';

          case 3:
            return B + '=';
        }
      },
      'h': function (B) {
        return null == B ? '' : '' == B ? null : z['b'](B["length"], 32, function (C) {
          return t("RCgTbOVz8jS9s07FlPAdqDcJXatr5hMWULuZY3mKxEHQwBoin26yNkev4I1fGp", B["charAt"](C));
        });
      },
      'l': function (B) {
        return null == B ? '' : z['a'](B, 15, function (C) {
          return u(C + 32);
        }) + ' ';
      },
      'o': function (B) {
        return null == B ? '' : '' == B ? null : z['b'](B["length"], 16384, function (C) {
          return B["charCodeAt"](C) - 32;
        });
      },
      'm': function (B) {
        var C, D, E;

        for (B = z['j'](B), C = new Uint8Array(2 * B["length"]), D = 0, E = B["length"]; D < E; D++) {
          var F;
          F = B["charCodeAt"](D), C[2 * D] = F >>> 8, C[2 * D + 1] = F % 256;
        }

        return C;
      },
      's': function (B) {
        var C, D;

        if (null === B || void 0 === B) {
          return z['c'](B);
        }

        var E, F, G;

        for (E = Array(B["length"] / 2), F = 0, G = E["length"]; F < G; E[F] = 256 * B[2 * F] + B[2 * F + 1], F++) {}

        var H;
        return H = [], E["forEach"](function (I) {
          H["push"](u(I));
        }), z['c'](H["join"](''));
      },
      'g': function (B) {
        return null == B ? '' : z['a'](B, 6, function (C) {
          return "HL-YXT2js9VRcAUyQiFPed0tDfvnCwuJoNZWM6balpK+E8SzB$kq541Omgx7I3hGr"["charAt"](C);
        });
      },
      'i': function (B) {
        if (null == B) {
          return '';
        }

        if ('' == B) {
          return null;
        }

        return B = B["replace"](/ /g, '+'), z['b'](B["length"], 32, function (C) {
          return t("HL-YXT2js9VRcAUyQiFPed0tDfvnCwuJoNZWM6balpK+E8SzB$kq541Omgx7I3hGr", B["charAt"](C));
        });
      },
      'j': function (B) {
        var C, D;
        return z['a'](B, 16, function (E) {
          return u(E);
        });
      },
      'a': function (B, C, D) {
        if (null == B) {
          return '';
        }

        var E, F, G, H, I, J, K, L, M, N, O;

        for (F = {}, G = {}, H = '', I = 2, J = 3, K = 2, L = [], M = 0, N = 0, O = 0; O < B["length"]; O += 1) {
          var P, Q;

          if (P = B["charAt"](O), Object["prototype"]["hasOwnProperty"]["call"](F, P) || (F[P] = J++, G[P] = !0), Q = H + P, Object["prototype"]["hasOwnProperty"]["call"](F, Q)) {
            H = Q;
          } else {
            if (Object["prototype"]["hasOwnProperty"]["call"](G, H)) {
              if (256 > H["charCodeAt"](0)) {
                for (E = 0; E < K; (M <<= 1, N == C - 1 ? (N = 0, L["push"](D(M)), M = 0) : N++), E++) {}

                var R;

                for (R = H["charCodeAt"](0), E = 0; 8 > E; (M = M << 1 | R & 1, N == C - 1 ? (N = 0, L["push"](D(M)), M = 0) : N++, R >>= 1), E++) {}
              } else {
                for (R = 1, E = 0; E < K; (M = M << 1 | R, N == C - 1 ? (N = 0, L["push"](D(M)), M = 0) : N++, R = 0), E++) {}

                for (R = H["charCodeAt"](0), E = 0; 16 > E; (M = M << 1 | R & 1, N == C - 1 ? (N = 0, L["push"](D(M)), M = 0) : N++, R >>= 1), E++) {}
              }

              I--, 0 == I && (I = Math["pow"](2, K), K++), delete G[H];
            } else {
              for (R = F[H], E = 0; E < K; E++) M = M << 1 | R & 1, N == C - 1 ? (N = 0, L["push"](D(M)), M = 0) : N++, R >>= 1;
            }

            I--, 0 == I && (I = Math["pow"](2, K), K++), F[Q] = J++, H = String(P);
          }
        }

        if ('' !== H) {
          if (Object["prototype"]["hasOwnProperty"]["call"](G, H)) {
            if (256 > H["charCodeAt"](0)) {
              for (E = 0; E < K; (M <<= 1, N == C - 1 ? (N = 0, L["push"](D(M)), M = 0) : N++), E++) {}

              for (R = H["charCodeAt"](0), E = 0; 8 > E; (M = M << 1 | R & 1, N == C - 1 ? (N = 0, L["push"](D(M)), M = 0) : N++, R >>= 1), E++) {}
            } else {
              for (R = 1, E = 0; E < K; (M = M << 1 | R, N == C - 1 ? (N = 0, L["push"](D(M)), M = 0) : N++, R = 0), E++) {}

              for (R = H["charCodeAt"](0), E = 0; 16 > E; (M = M << 1 | R & 1, N == C - 1 ? (N = 0, L["push"](D(M)), M = 0) : N++, R >>= 1), E++) {}
            }

            I--, 0 == I && (I = Math["pow"](2, K), K++), delete G[H];
          } else {
            for (R = F[H], E = 0; E < K; E++) M = M << 1 | R & 1, N == C - 1 ? (N = 0, L["push"](D(M)), M = 0) : N++, R >>= 1;
          }

          I--, 0 == I && K++;
        }

        for (R = 2, E = 0; E < K; (M = M << 1 | R & 1, N == C - 1 ? (N = 0, L["push"](D(M)), M = 0) : N++, R >>= 1), E++) {}

        for (;;) if (M <<= 1, N == C - 1) {
          L["push"](D(M));
          break;
        } else {
          N++;
        }

        return L["join"]('');
      },
      'c': function (B) {
        return null == B ? '' : '' == B ? null : z['b'](B["length"], 32768, function (C) {
          return B["charCodeAt"](C);
        });
      },
      'b': function (B, C, D) {
        var E, F;
        var G, H, I, J, K, L, M, N, O, P;

        for (G = [], H = 4, I = 4, J = 3, K = [], N = D(0), O = C, P = 1, L = 0; 3 > L; G[L] = L, L += 1) {}

        var Q, R;

        for (Q = 0, R = Math["pow"](2, 2), M = 1; M != R;) {
          var S;
          S = N & O, O >>= 1, 0 == O && (O = C, N = D(P++)), Q |= (0 < S ? 1 : 0) * M, M <<= 1;
        }

        switch (Q) {
          case 0:
            for (Q = 0, R = Math["pow"](2, 8), M = 1; M != R; S = N & O, O >>= 1, 0 == O && (O = C, N = D(P++)), Q |= (0 < S ? 1 : 0) * M, M <<= 1) {}

            var T = u(Q);
            break;

          case 1:
            for (Q = 0, R = Math["pow"](2, 16), M = 1; M != R; S = N & O, O >>= 1, 0 == O && (O = C, N = D(P++)), Q |= (0 < S ? 1 : 0) * M, M <<= 1) {}

            T = u(Q);
            break;

          case 2:
            return '';
        }

        for (L = G[3] = T, K["push"](T);;) {
          if (P > B) {
            return '';
          }

          for (Q = 0, R = Math["pow"](2, J), M = 1; M != R; S = N & O, O >>= 1, 0 == O && (O = C, N = D(P++)), Q |= (0 < S ? 1 : 0) * M, M <<= 1) {}

          switch (T = Q) {
            case 0:
              for (Q = 0, R = Math["pow"](2, 8), M = 1; M != R; S = N & O, O >>= 1, 0 == O && (O = C, N = D(P++)), Q |= (0 < S ? 1 : 0) * M, M <<= 1) {}

              G[I++] = u(Q), T = I - 1, H--;
              break;

            case 1:
              for (Q = 0, R = Math["pow"](2, 16), M = 1; M != R; S = N & O, O >>= 1, 0 == O && (O = C, N = D(P++)), Q |= (0 < S ? 1 : 0) * M, M <<= 1) {}

              G[I++] = u(Q), T = I - 1, H--;
              break;

            case 2:
              return K["join"]('');
          }

          if (0 == H && (H = Math["pow"](2, J), J++), G[T]) {
            T = G[T];
          } else {
            if (T === I) {
              T = L + L["charAt"](0);
            } else {
              return null;
            }
          }

          K["push"](T), G[I++] = L + T["charAt"](0), H--, L = T, 0 == H && (H = Math["pow"](2, J), J++);
        }
      }
    }, A = {
      "compressToBase64": z['f'],
      "compressToEncodedURIComponent": z['g'],
      "decompressFromEncodedURIComponent": z['i'],
      "decompressFromBase64": z['h']
    }, A;
  }(), g = function g(q) {
    var r, s, t, u, v;

    for (t = q + '=', u = d["cookie"]["split"](';'), v = 0; v < u["length"]; v++) {
      var w;

      for (w = u[v]; w["charAt"](0) == ' ';) {
        w = w["substring"](1);
      }

      if (w['indexOf'](t) == 0) {
        return w["substring"](t["length"], w["length"]);
      }
    }

    return '';
  }, h = function h(q, r, s) {
    var t, u, v, w;
    v = new c["Date"](), v["setTime"](v["getTime"]() + s * 1 * 60 * 60 * 1e3), w = "expires=" + v["toUTCString"](), d["cookie"] = q + '=' + r + ';' + w + ";path=/";
  }, i = function i(q) {
    var r, s;
    d["cookie"] = q + "=; Max-Age=-99999999;";
  }, j = function j() {
    var q, r, s, t;
    s = c["parseInt"](g("cf_chl_rc_ni")), isNaN(s) && (s = 0), t = 1e3 * c["Math"]["min"](2 << s, 128), h("cf_chl_rc_ni", s + 1, 1), c["setTimeout"](function () {
      d["location"]["reload"]();
    }, t);
  };
  var k, l, m, n;
  c["onerror"] = function (q, r, s, t, u) {
    var v, w, x, y;

    if (x = q["toLowerCase"](), y = "script error", x["indexOf"](y) > -1) {
      c["alert"]("Script Error: See Browser Console for Detail");
    } else {
      var z;
      z = ["Message: " + q, "URL: " + r, "Line: " + s, "Column: " + t, 'Error object: ' + JSON["stringify"](u)]["join"](" - "), c["console"]["log"]("[[[ERROR]]]:", z), j();
    }

    return ![];
  }, c['sendRequest'] = function (q, r) {
    var s, t, u, v;
    var B, C;
    C = B;
    r = r || 0;

    if (r >= 5) {
      return j(), void 0;
    }

    var A = ![];

    var w = function () {
      if (A) {
        return;
      }

      A = !![], c["setTimeout"](function () {
        sendRequest(q, r + 1);
      }, 50);
    };

    var z = k();

    if (!z) {
      return;
    }

    var y = "POST";
    z["open"](y, q, !![]);
    "timeout" in z && (z["timeout"] = 2500, z["ontimeout"] = function () {
      w();
    });
    z["setRequestHeader"]("Content-type", "application/x-www-form-urlencoded");
    z["setRequestHeader"]("CF-Challenge", c["_cf_chl_opt"]["cHash"]);

    z["onreadystatechange"] = function () {
      if (z["readyState"] != 4) {
        return;
      }

      if (z["status"] != 200 && z["status"] != 304) {
        return w(), void 0;
      }

      h("cf_chl_prog", 'b' + c["_cf_chl_ctx"]["chLog"]['c'], 1), new c["Function"](p(z["responseText"]))(), h("cf_chl_prog", 'a' + c["_cf_chl_ctx"]["chLog"]['c'], 1);
    };

    var x = f["compressToEncodedURIComponent"](JSON["stringify"](c["_cf_chl_ctx"]))["replace"]('+', "%2b");
    z["send"]('v_' + c["_cf_chl_opt"]["cRay"] + '=' + x);
  }, k = function k() {
    var q, r;

    if (c["XMLHttpRequest"]) {
      return new c["XMLHttpRequest"]();
    }

    if (c["ActiveXObject"]) {
      try {
        return new c["ActiveXObject"]("Microsoft.XMLHTTP");
      } catch (t) {}
    }

    c["alert"]("This browser is not supported."), j();
  }, l = function l(q) {
    var r, s;

    if (c["atob"]) {
      return atob(q);
    }

    var t, q, u, v, w, x, y;

    for (t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", q = String(q)['replace'](/[\t\n\f\r ]+/g, ''), q += '=='["slice"](2 - (q["length"] & 3)), v = '', y = 0; y < q["length"]; u = t["indexOf"](q["charAt"](y++)) << 18 | t["indexOf"](q['charAt'](y++)) << 12 | (w = t['indexOf'](q["charAt"](y++))) << 6 | (x = t["indexOf"](q["charAt"](y++))), v += w === 64 ? String["fromCharCode"](u >> 16 & 255) : x === 64 ? String["fromCharCode"](u >> 16 & 255, u >> 8 & 255) : String["fromCharCode"](u >> 16 & 255, u >> 8 & 255, u & 255)) {}

    return v;
  }, "object" !== typeof c["JSON"] && (c["JSON"] = {}), function (O, N, M, L, K, J, I, H, G, F, E, D, C, B, s) {
    if (C = function C(R) {
      return 10 > R ? '0' + R : R;
    }, D = function D() {
      return this["valueOf"]();
    }, E = function E(R) {
      var S, T;
      return K["lastIndex"] = 0, K["test"](R) ? '"' + R["replace"](K, function (U) {
        var V;
        return V = Q[U], "string" === typeof V ? V : "\\u" + ("0000" + U["charCodeAt"](0)["toString"](16))["slice"](-4);
      }) + '"' : '"' + R + '"';
    }, F = function F(R, S) {
      var T, U, V;

      switch (U = M, V = S[R], V && "object" === typeof V && "function" === typeof V["toJSON"] && (V = V['toJSON'](R)), "function" === typeof O && (V = O["call"](S, R, V)), typeof V) {
        case "string":
          return E(V);

        case "number":
          return isFinite(V) ? String(V) : "null";

        case "boolean":
        case "null":
          return String(V);

        case "object":
          if (!V) {
            return "null";
          }

          var W;

          if (M += N, W = [], "[object Array]" === Object["prototype"]['toString']["apply"](V)) {
            var X;

            for (X = V["length"], T = 0; T < X; W[T] = F(T, V) || "null", T += 1) {}

            var Y;
            return Y = 0 === W["length"] ? '[]' : M ? '[\n' + M + W["join"](',\n' + M) + '\n' + U + ']' : '[' + W["join"](',') + ']', M = U, Y;
          }

          if (O && "object" === typeof O) {
            for (X = O["length"], T = 0; T < X; T += 1) {
              if ("string" === typeof O[T]) {
                var Z;
                Z = O[T], (Y = F(Z, V)) && W["push"](E(Z) + (M ? ': ' : ':') + Y);
              }
            }
          } else {
            for (Z in V) Object["prototype"]["hasOwnProperty"]["call"](V, Z) && (Y = F(Z, V)) && W["push"](E(Z) + (M ? ': ' : ':') + Y);
          }

          return Y = 0 === W["length"] ? '{}' : M ? '{\n' + M + W["join"](',\n' + M) + '\n' + U + '}' : '{' + W["join"](',') + '}', M = U, Y;
      }
    }, G = /^[\],:{}\s]*$/, H = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, I = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, J = /(?:^|:|,)(?:\s*\[)+/g, K = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, L = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, "function" !== typeof Date["prototype"]["toJSON"] && (Date["prototype"]['toJSON'] = function () {
      return isFinite(this["valueOf"]() || '') ? this["getUTCFullYear"]() + '-' + C(this["getUTCMonth"]() + 1) + '-' + C(this["getUTCDate"]()) + 'T' + C(this["getUTCHours"]()) + ':' + C(this["getUTCMinutes"]()) + ':' + C(this["getUTCSeconds"]()) + 'Z' : null;
    }, Boolean["toJSON"] = D, Number["toJSON"] = D, String["toJSON"] = D), "function" !== typeof JSON["stringify"]) {
      var P, Q;
      P = {
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"': '\\"',
        '\\': '\\\\'
      }, Q = P, JSON['stringify'] = function (R, S, T) {
        var U;

        if (N = M = '', "number" === typeof T) {
          for (U = 0; U < T; U += 1) N += ' ';
        } else {
          "string" === typeof T && (N = T);
        }

        if ((O = S) && "function" !== typeof S && ("object" !== typeof S || 'number' !== typeof S["length"])) {
          throw Error("JSON.stringify");
        }

        var V;
        return V = {
          '': R
        }, F('', V);
      };
    }

    "function" !== typeof JSON["parse"] && (JSON["parse"] = function (R, S) {
      var T, U, V;

      if (V = function V(Y, Z) {
        var a0, a1;

        if (a1 = Y[Z], a1 && "object" === typeof a1) {
          for (a0 in a1) if (Object["prototype"]["hasOwnProperty"]["call"](a1, a0)) {
            var a2;
            a2 = V(a1, a0), void 0 !== a2 ? a1[a0] = a2 : delete a1[a0];
          }
        }

        return S["call"](Y, Z, a1);
      }, R = String(R), L["lastIndex"] = 0, L["test"](R) && (R = R["replace"](L, function (Y) {
        return "\\u" + ('0000' + Y["charCodeAt"](0)["toString"](16))["slice"](-4);
      })), G["test"](R["replace"](H, '@')["replace"](I, ']')["replace"](J, ''))) {
        var W, X;
        return W = eval('(' + R + ')'), X = {
          '': W
        }, "function" === typeof S ? V(X, '') : W;
      }

      throw new SyntaxError("JSON.parse");
    });
  }(), m = function m(q) {
    var r, s;

    if ("addEventListener" in c) {
      d["addEventListener"]("DOMContentLoaded", q);
    } else {
      d["attachEvent"]("onreadystatechange", q);
    }
  }, m(function (q) {
    if (q["type"] === "readystatechange" && d["readyState"] && d["readyState"] !== "complete") {
      return;
    }

    c["_cf_chl_enter"]();
  }), n = function n(q) {
    var r;
    return r = d["createElement"]('a'), r["href"] = q, r;
  };
  var o, p;
  o = function o() {
    var q, r, s;

    if (s = c["_cf_chl_opt"], h("cf_chl_prog", 'hc', 1), s["cRq"] && s["cRq"]['ru']) {
      var t, u;

      if (t = n(l(s["cRq"]['ru'])), u = t["protocol"] + '//' + t["hostname"], d["location"]["href"]["indexOf"](u) !== 0) {
        var v;

        if (v = d["getElementById"]("location-mismatch-warning"), v) {
          v["style"]["display"] = "block";
        } else {
          var w;

          if (w = d["getElementById"]("challenge-form"), w) {
            if (d["getElementById"]('yjs-content')) {
              w["innerHTML"] += "<div class=\"cf-content\"><p style=\"background-color: #de5052; border-color: #521010; color: #fff;\" class=\"cf-alert cf-alert-error\">&#35813;&#32593;&#31449;&#36164;&#28304;&#26080;&#27861;&#36890;&#36807;&#27492;&#22320;&#22336;&#35775;&#38382;&#12290;</p></div>";
            } else {
              w['innerHTML'] += "<div class=\"cf-content\"><p style=\"background-color: #de5052; border-color: #521010; color: #fff;\" class=\"cf-alert cf-alert-error\">This web property is not accessible via this address.</p></div>";
            }
          }

          var x, y;
          x = d["getElementById"]("cf-please-wait"), x && (x["style"]["display"] = "none"), y = d["getElementById"]("cf-content") || d["getElementById"]("yjs-content"), y && (y["style"]["display"] = "none");
        }

        return h("cf_chl_prog", 'hc', 'F'), ![];
      }
    }

    return !![];
  }, e["push"](function () {
    return o();
  }), c["_cf_chl_enter"] = function () {
    var q, r, s, t, u;

    if (s = c["_cf_chl_opt"], t = "cf_chl_" + s["cvId"], h(t, s["cHash"], 1), u = d["cookie"]["indexOf"](t) === -1 || !c["navigator"]["cookieEnabled"], u) {
      var v;
      return v = d["getElementById"]("no-cookie-warning"), v && (v["style"]["display"] = "block"), void 0;
    }

    var w;

    for (i("cf_chl_" + s["cvId"]), h("cf_chl_prog", 's', 1), w = 0; w < e["length"]; w++) if (e[w]() === ![]) {
      return;
    }

    var x, y;
    h("cf_chl_prog", 'e', 1), x = {
      'c': 0
    }, y = {
      "chLog": x,
      "chReq": s["cType"],
      "cNounce": s["cNounce"],
      "chC": 0,
      'chCAS': 0,
      'oV': 1,
      "cRq": s["cRq"]
    }, c["_cf_chl_ctx"] = y, c["_cf_chl_ctx"]["chLog"][c["_cf_chl_ctx"]["chLog"]['c']++] = {
      'start': new c["Date"]()["getTime"]()
    }, c["setTimeout"](function () {
      var z, A;
      z = s["cFPWv"] ? 'h/' + s["cFPWv"] + '/' : '', A = "/cdn-cgi/challenge-platform/" + z + "generate/ov" + 1 + "/0.7601990444659563:1602333661:9cc9be16e66d6fc150e09ec048ff9b773fd1f44a5e00f6735976e709d2a6fe56/" + s["cRay"] + '/' + s["cHash"], c["sendRequest"](A);
    }, 10);
  }, c["_cf_chl_done_ran"] = ![], c["_cf_chl_done"] = function () {
    h("cf_chl_prog", 'b', 1), c["_cf_chl_done_ran"] = !![];
  }, p = function (q) {
    var t, u, v, w, x, z, A;

    for (v = 1, w = [], x = 0, z = 32, A = 1, (A = c["_cf_chl_opt"]["cRay"] + '_' + 0)['replace'](/./g, function (B, C) {
      z ^= A["charCodeAt"](C);
    }); v; v = q["charCodeAt"](x++), !c["isNaN"](v) && w['push'](c["String"]["fromCharCode"]((v - z) % 65535))) {}

    return w["join"]('');
  }, c["SHA256"] = function (q) {
    var r, s, t, v;
    return t = function t(w, x) {
      var y;
      return y = (w & 65535) + (x & 65535), (w >> 16) + (x >> 16) + (y >> 16) << 16 | y & 65535;
    }, v = function v(w, x) {
      var y, z;
      return w >>> x | w << 32 - x;
    }, q = function (w, y, x) {
      for (w = w["replace"](/\r\n/g, '\n'), x = '', y = 0; y < w["length"]; y++) {
        var z;
        z = w["charCodeAt"](y), 128 > z ? x += String["fromCharCode"](z) : (127 < z && 2048 > z ? x += String["fromCharCode"](z >> 6 | 192) : (x += String["fromCharCode"](z >> 12 | 224), x += String["fromCharCode"](z >> 6 & 63 | 128)), x += String["fromCharCode"](z & 63 | 128));
      }

      return x;
    }(q), function (w, y, x) {
      for (x = '', y = 0; y < 4 * w["length"]; x += "0123456789abcdef"["charAt"](w[y >> 2] >> 8 * (3 - y % 4) + 4 & 15) + "0123456789abcdef"["charAt"](w[y >> 2] >> 8 * (3 - y % 4) & 15), y++) {}

      return x;
    }(function (z, A, F, E, D, C, B) {
      for (B = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], C = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], D = Array(64), z[A >> 5] |= 128 << 24 - A % 32, z[(A + 64 >> 9 << 4) + 15] = A, E = 0; E < z["length"]; E += 16) {
        var G, H, I, J, K, L, M, N;

        for (G = C[0], H = C[1], I = C[2], J = C[3], K = C[4], L = C[5], M = C[6], N = C[7], F = 0; 64 > F; F++) {
          var O;

          if (O = F, 16 > F) {
            var P = z[F + E];
          } else {
            var Q, R;
            P = D[F - 2];
            P = v(P, 17) ^ v(P, 19) ^ P >>> 10;
            P = t(P, D[F - 7]);
            var S = D[F - 15];
            S = v(S, 7) ^ v(S, 18) ^ S >>> 3;
            P = t(t(P, S), D[F - 16]);
          }

          D[O] = P, O = K, O = v(O, 6) ^ v(O, 11) ^ v(O, 25), O = t(t(t(t(N, O), K & L ^ ~K & M), B[F]), D[F]), N = G, N = v(N, 2) ^ v(N, 13) ^ v(N, 22), P = t(N, G & H ^ G & I ^ H & I), N = M, M = L, L = K, K = t(J, O), J = I, I = H, H = G, G = t(O, P);
        }

        C[0] = t(G, C[0]), C[1] = t(H, C[1]), C[2] = t(I, C[2]), C[3] = t(J, C[3]), C[4] = t(K, C[4]), C[5] = t(L, C[5]), C[6] = t(M, C[6]), C[7] = t(N, C[7]);
      }

      return C;
    }(function (w) {
      var x, y;

      for (x = [], y = 0; y < 8 * w["length"]; x[y >> 5] |= (w["charCodeAt"](y / 8) & 255) << 24 - y % 32, y += 8) {}

      return x;
    }(q), 8 * q["length"]));
  };
}();
