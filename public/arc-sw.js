!(function (a) {
  function b(d) {
    if (c[d]) return c[d].exports;
    var e = (c[d] = { i: d, l: !1, exports: {} });
    return a[d].call(e.exports, e, e.exports, b), (e.l = !0), e.exports;
  }
  var c = {};
  (b.m = a),
    (b.c = c),
    (b.d = function (a, c, d) {
      b.o(a, c) || Object.defineProperty(a, c, { enumerable: !0, get: d });
    }),
    (b.r = function (a) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (b.t = function (a, c) {
      if ((1 & c && (a = b(a)), 8 & c)) return a;
      if (4 & c && "object" == typeof a && a && a.__esModule) return a;
      var d = Object.create(null);
      if (
        (b.r(d),
        Object.defineProperty(d, "default", { enumerable: !0, value: a }),
        2 & c && "string" != typeof a)
      )
        for (var e in a)
          b.d(
            d,
            e,
            function (b) {
              return a[b];
            }.bind(null, e)
          );
      return d;
    }),
    (b.n = function (a) {
      var c =
        a && a.__esModule
          ? function () {
              return a.default;
            }
          : function () {
              return a;
            };
      return b.d(c, "a", c), c;
    }),
    (b.o = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }),
    (b.p = ""),
    b((b.s = 93));
})({
  3: function (b, c, e) {
    "use strict";
    e.d(c, "a", function () {
      return g;
    }),
      e.d(c, "c", function () {
        return h;
      }),
      e.d(c, "g", function () {
        return j;
      }),
      e.d(c, "j", function () {
        return i;
      }),
      e.d(c, "i", function () {
        return a;
      }),
      e.d(c, "b", function () {
        return d;
      }),
      e.d(c, "k", function () {
        return f;
      }),
      e.d(c, "d", function () {
        return n;
      }),
      e.d(c, "e", function () {
        return o;
      }),
      e.d(c, "f", function () {
        return l;
      }),
      e.d(c, "h", function () {
        return m;
      });
    var g = {
        images: [
          "bmp",
          "jpeg",
          "jpg",
          "ttf",
          "pict",
          "svg",
          "webp",
          "eps",
          "svgz",
          "gif",
          "png",
          "ico",
          "tif",
          "tiff",
          "bpg",
          "avif",
          "jxl",
        ],
        video: [
          "mp4",
          "3gp",
          "webm",
          "mkv",
          "flv",
          "f4v",
          "f4p",
          "f4bogv",
          "drc",
          "avi",
          "mov",
          "qt",
          "wmv",
          "amv",
          "mpg",
          "mp2",
          "mpeg",
          "mpe",
          "m2v",
          "m4v",
          "3g2",
          "gifv",
          "mpv",
          "av1",
          "ts",
          "tsv",
          "tsa",
          "m2t",
          "m3u8",
        ],
        audio: [
          "mid",
          "midi",
          "aac",
          "aiff",
          "flac",
          "m4a",
          "m4p",
          "mp3",
          "ogg",
          "oga",
          "mogg",
          "opus",
          "ra",
          "rm",
          "wav",
          "webm",
          "f4a",
          "pat",
        ],
        interchange: [
          "json",
          "yaml",
          "xml",
          "csv",
          "toml",
          "ini",
          "bson",
          "asn1",
          "ubj",
        ],
        archives: [
          "jar",
          "iso",
          "tar",
          "tgz",
          "tbz2",
          "tlz",
          "gz",
          "bz2",
          "xz",
          "lz",
          "z",
          "7z",
          "apk",
          "dmg",
          "rar",
          "lzma",
          "txz",
          "zip",
          "zipx",
        ],
        documents: [
          "pdf",
          "ps",
          "doc",
          "docx",
          "ppt",
          "pptx",
          "xls",
          "otf",
          "xlsx",
        ],
        other: ["srt", "swf"],
      },
      h = ["js", "cjs", "mjs", "css"],
      j = {
        COMLINK_INIT: "".concat("arc:", "comlink:init"),
        NODE_ID: "".concat("arc:", ":nodeId"),
        CLIENT_TEARDOWN: "".concat("arc:", "client:teardown"),
        CLIENT_TAB_ID: "".concat("arc:", "client:tabId"),
        CDN_CONFIG: "".concat("arc:", "cdn:config"),
        P2P_CLIENT_READY: "".concat("arc:", "cdn:ready"),
        STORED_FIDS: "".concat("arc:", "cdn:storedFids"),
        SW_HEALTH_CHECK: "".concat("arc:", "cdn:healthCheck"),
        WIDGET_CONFIG: "".concat("arc:", "widget:config"),
        WIDGET_INIT: "".concat("arc:", "widget:init"),
        WIDGET_UI_LOAD: "".concat("arc:", "widget:load"),
        BROKER_LOAD: "".concat("arc:", "broker:load"),
        RENDER_FILE: "".concat("arc:", "inlay:renderFile"),
        FILE_RENDERED: "".concat("arc:", "inlay:fileRendered"),
      },
      i = "serviceWorker",
      a = "/".concat("shared-worker", ".js"),
      d = "/".concat("dedicated-worker", ".js"),
      f = "/".concat("arc-sw-core", ".js"),
      k = "".concat("arc-sw", ".js"),
      n = ("/".concat("arc-sw.js"), "/".concat("arc-sw"), "arc-db"),
      o = "key-val-store",
      l = 131072,
      m = "".concat("https://warden.arc.io", "/mailbox/propertySession");
    "".concat("https://warden.arc.io", "/mailbox/transfers");
  },
  93: function (a, b, d) {
    "use strict";
    d.r(b);
    var e = d(3);
    if ("undefined" != typeof ServiceWorkerGlobalScope) {
      var f = "https://arc.io" + e.k;
      importScripts(f);
    } else if ("undefined" != typeof SharedWorkerGlobalScope) {
      var g = "https://arc.io" + e.i;
      importScripts(g);
    } else if ("undefined" != typeof DedicatedWorkerGlobalScope) {
      var c = "https://arc.io" + e.b;
      importScripts(c);
    }
  },
});
