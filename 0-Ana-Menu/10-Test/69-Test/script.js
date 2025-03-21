!(function ($) {
  $.cookie = function (key, value, options) {
    if (
      arguments.length > 1 &&
      (!/Object/.test(Object.prototype.toString.call(value)) ||
        null === value ||
        void 0 === value)
    ) {
      if (
        ((options = $.extend({}, options)),
        (null !== value && void 0 !== value) || (options.expires = -1),
        "number" == typeof options.expires)
      ) {
        var days = options.expires;
        var t = (options.expires = new Date());
        t.setDate(t.getDate() + days);
      }
      return (
        (value = String(value)),
        (document.cookie = [
          encodeURIComponent(key),
          "=",
          options.raw ? value : encodeURIComponent(value),
          options.expires ? "; expires=" + options.expires.toUTCString() : "",
          options.path ? "; path=" + options.path : "",
          options.domain ? "; domain=" + options.domain : "",
          options.secure ? "; secure" : ""
        ].join(""))
      );
    }
    var pair;
    var decode = (options = value || {}).raw
      ? function (s) {
          return s;
        }
      : decodeURIComponent;
    var directives = document.cookie.split("; ");
    var i = 0;
    for (; (pair = directives[i] && directives[i].split("=")); i++) {
      if (decode(pair[0]) === key) {
        return decode(pair[1] || "");
      }
    }
    return null;
  };
  $.fn.cookieBar = function (opts) {
    var options = $.extend(
      {
        closeButton: "none",
        hideOnClose: true,
        secure: false,
        path: "/",
        domain: ""
      },
      opts
    );
    return this.each(function () {
      var $elem = $(this);
      $elem.hide();
      if ("none" == options.closeButton) {
        $elem.append("");
        $.extend(options, {
          closeButton: ".close-notice"
        });
      }
      if ("hide" != $.cookie("cookiebar")) {
        $elem.show();
      }
      $elem.find(options.closeButton).click(function () {
        return (
          options.hideOnClose && $elem.hide(),
          $.cookie("cookiebar", "hide", {
            path: options.path,
            secure: options.secure,
            domain: options.domain,
            expires: 30
          }),
          $elem.trigger("cookieBar-close"),
          false
        );
      });
    });
  };
})(jQuery),
  $(document).ready(function () {
    $(".cookie-message").cookieBar();
  }),
  (function ($) {
    $.slidebars = function (options) {
      function initialise() {
        if (
          !settings.disableOver ||
          ("number" == typeof settings.disableOver &&
            settings.disableOver >= windowWidth)
        ) {
          enabled = true;
          $("html").addClass("sb-init");
          if (settings.hideControlClasses) {
            $delegate.removeClass("sb-hide");
          }
          init();
        } else {
          if ("number" == typeof settings.disableOver) {
            if (settings.disableOver < windowWidth) {
              enabled = false;
              $("html").removeClass("sb-init");
              if (settings.hideControlClasses) {
                $delegate.addClass("sb-hide");
              }
              res.css("minHeight", "");
              if (program || inverse) {
                close();
              }
            }
          }
        }
      }
      function init() {
        res.css("minHeight", "");
        var rgt = parseInt(res.css("height"), 10);
        if (parseInt($("html").css("height"), 10) > rgt) {
          res.css("minHeight", $("html").css("height"));
        }
        if (element) {
          if (element.hasClass("sb-width-custom")) {
            element.css("width", element.attr("data-sb-width"));
          }
        }
        if (el) {
          if (el.hasClass("sb-width-custom")) {
            el.css("width", el.attr("data-sb-width"));
          }
        }
        if (element) {
          if (
            element.hasClass("sb-style-push") ||
            element.hasClass("sb-style-overlay")
          ) {
            element.css("marginLeft", "-" + element.css("width"));
          }
        }
        if (el) {
          if (el.hasClass("sb-style-push") || el.hasClass("sb-style-overlay")) {
            el.css("marginRight", "-" + el.css("width"));
          }
        }
        if (settings.scrollLock) {
          $("html").addClass("sb-scroll-lock");
        }
      }
      function animate(obj, value, prop) {
        function render() {
          that.removeAttr("style");
          init();
        }
        var that;
        if (
          ((that = obj.hasClass("sb-style-push")
            ? res.add(obj).add(dest)
            : obj.hasClass("sb-style-overlay")
            ? obj
            : res.add(dest)),
          "translate" === animation)
        ) {
          if ("0px" === value) {
            render();
          } else {
            that.css("transform", "translate( " + value + " )");
          }
        } else {
          if ("side" === animation) {
            if ("0px" === value) {
              render();
            } else {
              if ("-" === value[0]) {
                value = value.substr(1);
              }
              that.css(prop, "0px");
              setTimeout(function () {
                that.css(prop, value);
              }, 1);
            }
          } else {
            if ("jQuery" === animation) {
              if ("-" === value[0]) {
                value = value.substr(1);
              }
              var anim = {};
              anim[prop] = value;
              that.stop().animate(anim, 400);
            }
          }
        }
      }
      function open(title) {
        function proceed() {
          if (enabled && "left" === title && element) {
            $("html").addClass("sb-active sb-active-left");
            element.addClass("sb-active");
            animate(element, element.css("width"), "left");
            setTimeout(function () {
              program = true;
            }, 400);
          } else {
            if (enabled) {
              if ("right" === title) {
                if (el) {
                  $("html").addClass("sb-active sb-active-right");
                  el.addClass("sb-active");
                  animate(el, "-" + el.css("width"), "right");
                  setTimeout(function () {
                    inverse = true;
                  }, 400);
                }
              }
            }
          }
        }
        if (
          ("left" === title && element && inverse) ||
          ("right" === title && el && program)
        ) {
          close();
          setTimeout(proceed, 400);
        } else {
          proceed();
        }
      }
      function close(url, target) {
        if (program || inverse) {
          if (program) {
            animate(element, "0px", "left");
            program = false;
          }
          if (inverse) {
            animate(el, "0px", "right");
            inverse = false;
          }
          setTimeout(function () {
            $("html").removeClass("sb-active sb-active-left sb-active-right");
            if (element) {
              element.removeClass("sb-active");
            }
            if (el) {
              el.removeClass("sb-active");
            }
            if (void 0 !== url) {
              if (void 0 === typeof target) {
                target = "_self";
              }
              window.open(url, target);
            }
          }, 400);
        }
      }
      function toggle(var_args) {
        if ("left" === var_args) {
          if (element) {
            if (program) {
              close();
            } else {
              open("left");
            }
          }
        }
        if ("right" === var_args) {
          if (el) {
            if (inverse) {
              close();
            } else {
              open("right");
            }
          }
        }
      }
      function eventHandler(e, event) {
        e.stopPropagation();
        e.preventDefault();
        if ("touchend" === e.type) {
          event.off("click");
        }
      }
      var settings = $.extend(
        {
          siteClose: true,
          scrollLock: false,
          disableOver: false,
          hideControlClasses: false
        },
        options
      );
      var style = document.createElement("div").style;
      var a = false;
      var b = false;
      if (
        "" === style.MozTransition ||
        "" === style.WebkitTransition ||
        "" === style.OTransition ||
        "" === style.transition
      ) {
        a = true;
      }
      if (
        "" === style.MozTransform ||
        "" === style.WebkitTransform ||
        "" === style.OTransform ||
        "" === style.transform
      ) {
        b = true;
      }
      var agent = navigator.userAgent;
      var resampleWidth = false;
      var resampleHeight = false;
      if (/Android/.test(agent)) {
        resampleWidth = agent.substr(agent.indexOf("Android") + 8, 3);
      } else {
        if (/(iPhone|iPod|iPad)/.test(agent)) {
          resampleHeight = agent
            .substr(agent.indexOf("OS ") + 3, 3)
            .replace("_", ".");
        }
      }
      if (
        (resampleWidth && 3 > resampleWidth) ||
        (resampleHeight && 5 > resampleHeight)
      ) {
        $("html").addClass("sb-static");
      }
      var res = $("#site-container, .sb-site-container");
      if ($(".sb-left").length) {
        var element = $(".sb-left");
        var program = false;
      }
      if ($(".sb-right").length) {
        var el = $(".sb-right");
        var inverse = false;
      }
      var enabled = false;
      var windowWidth = $(window).width();
      var $delegate = $(
        ".sb-toggle-left, .sb-toggle-right, .sb-open-left, .sb-open-right, .sb-close"
      );
      var dest = $(".sb-slide");
      initialise();
      $(window).resize(function () {
        var windowWidthNew = $(window).width();
        if (windowWidth !== windowWidthNew) {
          windowWidth = windowWidthNew;
          initialise();
          if (program) {
            open("left");
          }
          if (inverse) {
            open("right");
          }
        }
      });
      var animation;
      if (a && b) {
        animation = "translate";
        if (resampleWidth) {
          if (4.4 > resampleWidth) {
            animation = "side";
          }
        }
      } else {
        animation = "jQuery";
      }
      this.slidebars = {
        open: open,
        close: close,
        toggle: toggle,
        init: function () {
          return enabled;
        },
        active: function (alignment) {
          return "left" === alignment && element
            ? program
            : "right" === alignment && el
            ? inverse
            : void 0;
        },
        destroy: function (alignment) {
          if ("left" === alignment) {
            if (element) {
              if (program) {
                close();
              }
              setTimeout(function () {
                element.remove();
                element = false;
              }, 400);
            }
          }
          if ("right" === alignment) {
            if (el) {
              if (inverse) {
                close();
              }
              setTimeout(function () {
                el.remove();
                el = false;
              }, 400);
            }
          }
        }
      };
      $(".sb-toggle-left").on("touchend click", function (e) {
        eventHandler(e, $(this));
        toggle("left");
      });
      $(".sb-toggle-right").on("touchend click", function (e) {
        eventHandler(e, $(this));
        toggle("right");
      });
      $(".sb-open-left").on("touchend click", function (e) {
        eventHandler(e, $(this));
        open("left");
      });
      $(".sb-open-right").on("touchend click", function (e) {
        eventHandler(e, $(this));
        open("right");
      });
      $(".sb-close").on("touchend click", function (e) {
        if ($(this).is("a") || $(this).children().is("a")) {
          if ("click" === e.type) {
            e.stopPropagation();
            e.preventDefault();
            var $el = $(this).is("a") ? $(this) : $(this).find("a");
            var linkURL = $el.attr("href");
            var basePrototype = $el.attr("target")
              ? $el.attr("target")
              : "_self";
            close(linkURL, basePrototype);
          }
        } else {
          eventHandler(e, $(this));
          close();
        }
      });
      res.on("touchend click", function (e) {
        if (settings.siteClose) {
          if (program || inverse) {
            eventHandler(e, $(this));
            close();
          }
        }
      });
    };
  })(jQuery),
  (window.Modernizr = (function (a, doc, dataAndEvents) {
    function setCss(str) {
      mStyle.cssText = str;
    }
    function is(obj, type) {
      return typeof obj === type;
    }
    var featureName;
    var hasOwn;
    var Modernizr = {};
    var docElement = doc.documentElement;
    var mod = "modernizr";
    var modElem = doc.createElement(mod);
    var mStyle = modElem.style;
    var prefixes = " -webkit- -moz- -o- -ms- ".split(" ");
    var obj = {};
    var classes = [];
    var __slice = classes.slice;
    var injectElementWithStyles = function (rule, callback, nodes, testnames) {
      var style;
      var ret;
      var node;
      var docOverflow;
      var div = doc.createElement("div");
      var body = doc.body;
      var fakeBody = body || doc.createElement("body");
      if (parseInt(nodes, 10)) {
        for (; nodes--; ) {
          node = doc.createElement("div");
          node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
          div.appendChild(node);
        }
      }
      return (
        (style = ["&#173;", '<style id="s', mod, '">', rule, "</style>"].join(
          ""
        )),
        (div.id = mod),
        ((body ? div : fakeBody).innerHTML += style),
        fakeBody.appendChild(div),
        body ||
          ((fakeBody.style.background = ""),
          (fakeBody.style.overflow = "hidden"),
          (docOverflow = docElement.style.overflow),
          (docElement.style.overflow = "hidden"),
          docElement.appendChild(fakeBody)),
        (ret = callback(div, rule)),
        body
          ? div.parentNode.removeChild(div)
          : (fakeBody.parentNode.removeChild(fakeBody),
            (docElement.style.overflow = docOverflow)),
        !!ret
      );
    };
    var _hasOwnProperty = {}.hasOwnProperty;
    hasOwn =
      is(_hasOwnProperty, "undefined") || is(_hasOwnProperty.call, "undefined")
        ? function (object, property) {
            return (
              property in object &&
              is(object.constructor.prototype[property], "undefined")
            );
          }
        : function (object, key) {
            return _hasOwnProperty.call(object, key);
          };
    if (!Function.prototype.bind) {
      Function.prototype.bind = function (context) {
        var parent = this;
        if ("function" != typeof parent) {
          throw new TypeError();
        }
        var args = __slice.call(arguments, 1);
        var bound = function () {
          if (this instanceof bound) {
            var F = function () {};
            F.prototype = parent.prototype;
            var child = new F();
            var result = parent.apply(
              child,
              args.concat(__slice.call(arguments))
            );
            return Object(result) === result ? result : child;
          }
          return parent.apply(context, args.concat(__slice.call(arguments)));
        };
        return bound;
      };
    }
    obj.touch = function () {
      var n;
      return (
        "ontouchstart" in a || (a.DocumentTouch && doc instanceof DocumentTouch)
          ? (n = true)
          : injectElementWithStyles(
              [
                "@media (",
                prefixes.join("touch-enabled),("),
                mod,
                ")",
                "{#modernizr{top:9px;position:absolute}}"
              ].join(""),
              function (td) {
                n = 9 === td.offsetTop;
              }
            ),
        n
      );
    };
    var key;
    for (key in obj) {
      if (hasOwn(obj, key)) {
        featureName = key.toLowerCase();
        Modernizr[featureName] = obj[key]();
        classes.push((Modernizr[featureName] ? "" : "no-") + featureName);
      }
    }
    return (
      (Modernizr.addTest = function (feature, test) {
        if ("object" == typeof feature) {
          var key;
          for (key in feature) {
            if (hasOwn(feature, key)) {
              Modernizr.addTest(key, feature[key]);
            }
          }
        } else {
          if (
            ((feature = feature.toLowerCase()),
            Modernizr[feature] !== dataAndEvents)
          ) {
            return Modernizr;
          }
          test = "function" == typeof test ? test() : test;
          docElement.className += " " + (test ? "" : "no-") + feature;
          Modernizr[feature] = test;
        }
        return Modernizr;
      }),
      setCss(""),
      (modElem = null),
      (function (dataAndEvents, doc) {
        function addStyleSheet(ownerDocument, cssText) {
          var p = ownerDocument.createElement("p");
          var parent =
            ownerDocument.getElementsByTagName("head")[0] ||
            ownerDocument.documentElement;
          return (
            (p.innerHTML = "x<style>" + cssText + "</style>"),
            parent.insertBefore(p.lastChild, parent.firstChild)
          );
        }
        function getElements() {
          var a = html5.elements;
          return "string" == typeof a ? a.split(" ") : a;
        }
        function getExpandoData(ownerDocument) {
          var data = expandoData[ownerDocument[expando]];
          return (
            data ||
              ((data = {}),
              expanID++,
              (ownerDocument[expando] = expanID),
              (expandoData[expanID] = data)),
            data
          );
        }
        function createElement(nodeName, ownerDocument, data) {
          if (
            (ownerDocument || (ownerDocument = doc), supportsUnknownElements)
          ) {
            return ownerDocument.createElement(nodeName);
          }
          if (!data) {
            data = getExpandoData(ownerDocument);
          }
          var node;
          return (
            (node = data.cache[nodeName]
              ? data.cache[nodeName].cloneNode()
              : rchecked.test(nodeName)
              ? (data.cache[nodeName] = data.createElem(nodeName)).cloneNode()
              : data.createElem(nodeName)),
            node.canHaveChildren && !exclude.test(nodeName)
              ? data.frag.appendChild(node)
              : node
          );
        }
        function createDocumentFragment(ownerDocument, data) {
          if (
            (ownerDocument || (ownerDocument = doc), supportsUnknownElements)
          ) {
            return ownerDocument.createDocumentFragment();
          }
          data = data || getExpandoData(ownerDocument);
          var clone = data.frag.cloneNode();
          var i = 0;
          var elems = getElements();
          var length = elems.length;
          for (; i < length; i++) {
            clone.createElement(elems[i]);
          }
          return clone;
        }
        function shivMethods(ownerDocument, data) {
          if (!data.cache) {
            data.cache = {};
            data.createElem = ownerDocument.createElement;
            data.createFrag = ownerDocument.createDocumentFragment;
            data.frag = data.createFrag();
          }
          ownerDocument.createElement = function (nodeName) {
            return html5.shivMethods
              ? createElement(nodeName, ownerDocument, data)
              : data.createElem(nodeName);
          };
          ownerDocument.createDocumentFragment = Function(
            "h,f",
            "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
              getElements()
                .join()
                .replace(/\w+/g, function (nodeName) {
                  return (
                    data.createElem(nodeName),
                    data.frag.createElement(nodeName),
                    'c("' + nodeName + '")'
                  );
                }) +
              ");return n}"
          )(html5, data.frag);
        }
        function shivDocument(ownerDocument) {
          if (!ownerDocument) {
            ownerDocument = doc;
          }
          var data = getExpandoData(ownerDocument);
          return (
            html5.shivCSS &&
              !supportsHtml5Styles &&
              !data.hasCSS &&
              (data.hasCSS = !!addStyleSheet(
                ownerDocument,
                "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}"
              )),
            supportsUnknownElements || shivMethods(ownerDocument, data),
            ownerDocument
          );
        }
        var supportsHtml5Styles;
        var supportsUnknownElements;
        var options = dataAndEvents.html5 || {};
        var exclude = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;
        var rchecked = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;
        var expando = "_html5shiv";
        var expanID = 0;
        var expandoData = {};
        !(function () {
          try {
            var a = doc.createElement("a");
            a.innerHTML = "<xyz></xyz>";
            supportsHtml5Styles = "hidden" in a;
            supportsUnknownElements =
              1 == a.childNodes.length ||
              (function () {
                doc.createElement("a");
                var frag = doc.createDocumentFragment();
                return (
                  void 0 === frag.cloneNode ||
                  void 0 === frag.createDocumentFragment ||
                  void 0 === frag.createElement
                );
              })();
          } catch (e) {
            supportsHtml5Styles = true;
            supportsUnknownElements = true;
          }
        })();
        var html5 = {
          elements:
            options.elements ||
            "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
          shivCSS: false !== options.shivCSS,
          supportsUnknownElements: supportsUnknownElements,
          shivMethods: false !== options.shivMethods,
          type: "default",
          shivDocument: shivDocument,
          createElement: createElement,
          createDocumentFragment: createDocumentFragment
        };
        dataAndEvents.html5 = html5;
        shivDocument(doc);
      })(this, doc),
      (Modernizr._version = "2.6.2"),
      (Modernizr._prefixes = prefixes),
      (Modernizr.testStyles = injectElementWithStyles),
      (docElement.className =
        docElement.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") +
        " js " +
        classes.join(" ")),
      Modernizr
    );
  })(this, this.document)),
  (function (root, doc, undef) {
    function isFunction(fn) {
      return "[object Function]" == toString.call(fn);
    }
    function isString(obj) {
      return "string" == typeof obj;
    }
    function noop() {}
    function isFileReady(rs) {
      return !rs || "loaded" == rs || "complete" == rs || "uninitialized" == rs;
    }
    function executeStack() {
      var args = parts.shift();
      b = 1;
      if (args) {
        if (args.t) {
          sTimeout(function () {
            ("c" == args.t
              ? yepnope.injectCss
              : yepnope.injectJs)(args.s, 0, args.a, args.x, args.e, 1);
          }, 0);
        } else {
          args();
          executeStack();
        }
      } else {
        b = 0;
      }
    }
    function preloadFile(
      type,
      url,
      keepData,
      i,
      dataAndEvents,
      deepDataAndEvents,
      timeout
    ) {
      function onload(e) {
        if (
          !done &&
          isFileReady(preloadElem.readyState) &&
          ((stackObject.r = done = 1),
          !b && executeStack(),
          (preloadElem.onload = preloadElem.onreadystatechange = null),
          e)
        ) {
          if ("img" != type) {
            sTimeout(function () {
              insBeforeObj.removeChild(preloadElem);
            }, 50);
          }
          var i;
          for (i in result[url]) {
            if (result[url].hasOwnProperty(i)) {
              result[url][i].onload();
            }
          }
        }
      }
      timeout = timeout || yepnope.errorTimeout;
      var preloadElem = doc.createElement(type);
      var done = 0;
      var firstFlag = 0;
      var stackObject = {
        t: keepData,
        s: url,
        e: dataAndEvents,
        a: deepDataAndEvents,
        x: timeout
      };
      if (1 === result[url]) {
        firstFlag = 1;
        result[url] = [];
      }
      if ("object" == type) {
        preloadElem.data = url;
      } else {
        preloadElem.src = url;
        preloadElem.type = type;
      }
      preloadElem.width = preloadElem.height = "0";
      preloadElem.onerror = preloadElem.onload = preloadElem.onreadystatechange = function () {
        onload.call(this, firstFlag);
      };
      parts.splice(i, 0, stackObject);
      if ("img" != type) {
        if (firstFlag || 2 === result[url]) {
          insBeforeObj.insertBefore(
            preloadElem,
            isGeckoLTE18 ? null : firstScript
          );
          sTimeout(onload, timeout);
        } else {
          result[url].push(preloadElem);
        }
      }
    }
    function load(value, type, dataAndEvents, deepDataAndEvents, timeout) {
      return (
        (b = 0),
        (type = type || "j"),
        isString(value)
          ? preloadFile(
              "c" == type ? strCssElem : strJsElem,
              value,
              type,
              this.i++,
              dataAndEvents,
              deepDataAndEvents,
              timeout
            )
          : (parts.splice(this.i++, 0, value),
            1 == parts.length && executeStack()),
        this
      );
    }
    function getYepnope() {
      var y = yepnope;
      return (
        (y.loader = {
          load: load,
          i: 0
        }),
        y
      );
    }
    var handler;
    var yepnope;
    var docElement = doc.documentElement;
    var sTimeout = root.setTimeout;
    var firstScript = doc.getElementsByTagName("script")[0];
    var toString = {}.toString;
    var parts = [];
    var b = 0;
    var isGecko = "MozAppearance" in docElement.style;
    var isGeckoLTE18 = isGecko && !!doc.createRange().compareNode;
    var insBeforeObj = isGeckoLTE18 ? docElement : firstScript.parentNode;
    docElement = root.opera && "[object Opera]" == toString.call(root.opera);
    docElement = !!doc.attachEvent && !docElement;
    var strJsElem = isGecko ? "object" : docElement ? "script" : "img";
    var strCssElem = docElement ? "script" : strJsElem;
    var isArray =
      Array.isArray ||
      function (obj) {
        return "[object Array]" == toString.call(obj);
      };
    var configList = [];
    var result = {};
    var prefixes = {
      timeout: function (message, millis) {
        return millis.length && (message.timeout = millis[0]), message;
      }
    };
    yepnope = function (needs) {
      function satisfyPrefixes(matrix) {
        var mFunc;
        var i;
        var prefix_parts;
        matrix = matrix.split("!");
        var valuesLen = configList.length;
        var res = matrix.pop();
        var len = matrix.length;
        res = {
          url: res,
          origUrl: res,
          prefixes: matrix
        };
        i = 0;
        for (; i < len; i++) {
          prefix_parts = matrix[i].split("=");
          if ((mFunc = prefixes[prefix_parts.shift()])) {
            res = mFunc(res, prefix_parts);
          }
        }
        i = 0;
        for (; i < valuesLen; i++) {
          res = configList[i](res);
        }
        return res;
      }
      function loadScriptOrStyle(input, callback, chain, index, testResult) {
        var resource = satisfyPrefixes(input);
        var autoCallback = resource.autoCallback;
        resource.url.split(".").pop().split("?").shift();
        if (!resource.bypass) {
          if (callback) {
            callback = isFunction(callback)
              ? callback
              : callback[input] ||
                callback[index] ||
                callback[input.split("/").pop().split("?")[0]];
          }
          if (resource.instead) {
            resource.instead(input, callback, chain, index, testResult);
          } else {
            if (result[resource.url]) {
              resource.noexec = true;
            } else {
              result[resource.url] = 1;
            }
            chain.load(
              resource.url,
              resource.forceCSS ||
                (!resource.forceJS &&
                  "css" == resource.url.split(".").pop().split("?").shift())
                ? "c"
                : undef,
              resource.noexec,
              resource.attrs,
              resource.timeout
            );
            if (isFunction(callback) || isFunction(autoCallback)) {
              chain.load(function () {
                getYepnope();
                if (callback) {
                  callback(resource.origUrl, testResult, index);
                }
                if (autoCallback) {
                  autoCallback(resource.origUrl, testResult, index);
                }
                result[resource.url] = 2;
              });
            }
          }
        }
      }
      function loadFromTestObject(testObject, chain) {
        function handleGroup(object, moreToCome) {
          if (object) {
            if (isString(object)) {
              if (!moreToCome) {
                callback = function () {
                  var args = [].slice.call(arguments);
                  cbRef.apply(this, args);
                  complete();
                };
              }
              loadScriptOrStyle(object, callback, chain, 0, testResult);
            } else {
              if (Object(object) === object) {
                for (callbackKey in ((a = (function () {
                  var property;
                  var count = 0;
                  for (property in object) {
                    if (object.hasOwnProperty(property)) {
                      count++;
                    }
                  }
                  return count;
                })()),
                object)) {
                  if (object.hasOwnProperty(callbackKey)) {
                    if (!moreToCome) {
                      if (!--a) {
                        if (isFunction(callback)) {
                          callback = function () {
                            var args = [].slice.call(arguments);
                            cbRef.apply(this, args);
                            complete();
                          };
                        } else {
                          callback[callbackKey] = (function (wrapper) {
                            return function () {
                              var args = [].slice.call(arguments);
                              if (wrapper) {
                                wrapper.apply(this, args);
                              }
                              complete();
                            };
                          })(cbRef[callbackKey]);
                        }
                      }
                    }
                    loadScriptOrStyle(
                      object[callbackKey],
                      callback,
                      chain,
                      callbackKey,
                      testResult
                    );
                  }
                }
              }
            }
          } else {
            if (!moreToCome) {
              complete();
            }
          }
        }
        var a;
        var callbackKey;
        var testResult = !!testObject.test;
        var which = testObject.load || testObject.both;
        var callback = testObject.callback || noop;
        var cbRef = callback;
        var complete = testObject.complete || noop;
        handleGroup(testResult ? testObject.yep : testObject.nope, !!which);
        if (which) {
          handleGroup(which);
        }
      }
      var i;
      var need;
      var chain = this.yepnope.loader;
      if (isString(needs)) {
        loadScriptOrStyle(needs, 0, chain, 0);
      } else {
        if (isArray(needs)) {
          i = 0;
          for (; i < needs.length; i++) {
            need = needs[i];
            if (isString(need)) {
              loadScriptOrStyle(need, 0, chain, 0);
            } else {
              if (isArray(need)) {
                yepnope(need);
              } else {
                if (Object(need) === need) {
                  loadFromTestObject(need, chain);
                }
              }
            }
          }
        } else {
          if (Object(needs) === needs) {
            loadFromTestObject(needs, chain);
          }
        }
      }
    };
    yepnope.addPrefix = function (prefix, callback) {
      prefixes[prefix] = callback;
    };
    yepnope.addFilter = function (name) {
      configList.push(name);
    };
    yepnope.errorTimeout = 1e4;
    if (null == doc.readyState) {
      if (doc.addEventListener) {
        doc.readyState = "loading";
        doc.addEventListener(
          "DOMContentLoaded",
          (handler = function () {
            doc.removeEventListener("DOMContentLoaded", handler, 0);
            doc.readyState = "complete";
          }),
          0
        );
      }
    }
    root.yepnope = getYepnope();
    root.yepnope.executeStack = executeStack;
    root.yepnope.injectJs = function (src, cb, attrs, timeout, err, internal) {
      var d;
      var i;
      var script = doc.createElement("script");
      timeout = timeout || yepnope.errorTimeout;
      script.src = src;
      for (i in attrs) {
        script.setAttribute(i, attrs[i]);
      }
      cb = internal ? executeStack : cb || noop;
      script.onreadystatechange = script.onload = function () {
        if (!d) {
          if (isFileReady(script.readyState)) {
            d = 1;
            cb();
            script.onload = script.onreadystatechange = null;
          }
        }
      };
      sTimeout(function () {
        if (!d) {
          d = 1;
          cb(1);
        }
      }, timeout);
      if (err) {
        script.onload();
      } else {
        firstScript.parentNode.insertBefore(script, firstScript);
      }
    };
    root.yepnope.injectCss = function (path, cb, attrs, el, err, internal) {
      var attr;
      el = doc.createElement("link");
      cb = internal ? executeStack : cb || noop;
      el.href = path;
      el.rel = "stylesheet";
      el.type = "text/css";
      for (attr in attrs) {
        el.setAttribute(attr, attrs[attr]);
      }
      if (!err) {
        firstScript.parentNode.insertBefore(el, firstScript);
        sTimeout(cb, 0);
      }
    };
  })(this, document),
  (Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0));
  }),
  (function ($) {
    $(document).ready(function () {
      $.slidebars();
    });
  })(jQuery),
  (function ($) {
    function getParent($this) {
      var selector = $this.attr("data-target");
      if (!selector) {
        selector = $this.attr("href");
        selector =
          selector &&
          /#[A-Za-z]/.test(selector) &&
          selector.replace(/.*(?=#[^\s]*$)/, "");
      }
      var $parent = selector && $(selector);
      return $parent && $parent.length ? $parent : $this.parent();
    }
    function init(e) {
      if (!(e && 3 === e.which)) {
        $(backdrop).remove();
        $(selector).each(function () {
          var $this = $(this);
          var $parent = getParent($this);
          var relatedTarget = {
            relatedTarget: this
          };
          if ($parent.hasClass("open")) {
            if (
              !(
                e &&
                "click" == e.type &&
                /input|textarea/i.test(e.target.tagName) &&
                $.contains($parent[0], e.target)
              )
            ) {
              $parent.trigger((e = $.Event("hide.bs.dropdown", relatedTarget)));
              if (!e.isDefaultPrevented()) {
                $this.attr("aria-expanded", "false");
                $parent
                  .removeClass("open")
                  .trigger($.Event("hidden.bs.dropdown", relatedTarget));
              }
            }
          }
        });
      }
    }
    function setValue(type) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data("bs.dropdown");
        if (!data) {
          $this.data("bs.dropdown", (data = new Dropdown(this)));
        }
        if ("string" == typeof type) {
          data[type].call($this);
        }
      });
    }
    var backdrop = ".dropdown-backdrop";
    var selector = '[data-toggle="dropdown"]';
    var Dropdown = function (element) {
      $(element).on("click.bs.dropdown", this.toggle);
    };
    Dropdown.VERSION = "3.3.5";
    Dropdown.prototype.toggle = function (event) {
      var $this = $(this);
      if (!$this.is(".disabled, :disabled")) {
        var $parent = getParent($this);
        var isActive = $parent.hasClass("open");
        if ((init(), !isActive)) {
          if ("ontouchstart" in document.documentElement) {
            if (!$parent.closest(".navbar-nav").length) {
              $(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter($(this))
                .on("click", init);
            }
          }
          var touch = {
            relatedTarget: this
          };
          if (
            ($parent.trigger((event = $.Event("show.bs.dropdown", touch))),
            event.isDefaultPrevented())
          ) {
            return;
          }
          $this.trigger("focus").attr("aria-expanded", "true");
          $parent
            .toggleClass("open")
            .trigger($.Event("shown.bs.dropdown", touch));
        }
        return false;
      }
    };
    Dropdown.prototype.keydown = function (e) {
      if (
        /(38|40|27|32)/.test(e.which) &&
        !/input|textarea/i.test(e.target.tagName)
      ) {
        var $this = $(this);
        if (
          (e.preventDefault(),
          e.stopPropagation(),
          !$this.is(".disabled, :disabled"))
        ) {
          var $parent = getParent($this);
          var isActive = $parent.hasClass("open");
          if ((!isActive && 27 != e.which) || (isActive && 27 == e.which)) {
            return (
              27 == e.which && $parent.find(selector).trigger("focus"),
              $this.trigger("click")
            );
          }
          var elements = $parent.find(
            ".dropdown-menu li:not(.disabled):visible a"
          );
          if (elements.length) {
            var index = elements.index(e.target);
            if (38 == e.which) {
              if (index > 0) {
                index--;
              }
            }
            if (40 == e.which) {
              if (index < elements.length - 1) {
                index++;
              }
            }
            if (!~index) {
              index = 0;
            }
            elements.eq(index).trigger("focus");
          }
        }
      }
    };
    var old = $.fn.dropdown;
    $.fn.dropdown = setValue;
    $.fn.dropdown.Constructor = Dropdown;
    $.fn.dropdown.noConflict = function () {
      return ($.fn.dropdown = old), this;
    };
    $(document)
      .on("click.bs.dropdown.data-api", init)
      .on("click.bs.dropdown.data-api", ".dropdown form", function (event) {
        event.stopPropagation();
      })
      .on("click.bs.dropdown.data-api", selector, Dropdown.prototype.toggle)
      .on("keydown.bs.dropdown.data-api", selector, Dropdown.prototype.keydown)
      .on(
        "keydown.bs.dropdown.data-api",
        ".dropdown-menu",
        Dropdown.prototype.keydown
      );
  })(jQuery);
!(function ($) {
  function classReg(v22) {
    return new RegExp("(^|\\s+)" + v22 + "(\\s+|$)");
  }
  function toggleClass(c, l) {
    (hasClass(c, l) ? removeClass : addClass)(c, l);
  }
  var hasClass;
  var addClass;
  var removeClass;
  if ("classList" in document.documentElement) {
    hasClass = function (elem, c) {
      return elem.classList.contains(c);
    };
    addClass = function (elem, c) {
      elem.classList.add(c);
    };
    removeClass = function (elem, c) {
      elem.classList.remove(c);
    };
  } else {
    hasClass = function (elem, c) {
      return classReg(c).test(elem.className);
    };
    addClass = function (elem, c) {
      if (!hasClass(elem, c)) {
        elem.className = elem.className + " " + c;
      }
    };
    removeClass = function (elem, c) {
      elem.className = elem.className.replace(classReg(c), " ");
    };
  }
  var classie = {
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass
  };
  if ("function" == typeof define && define.amd) {
    define(classie);
  } else {
    if ("object" == typeof exports) {
      module.exports = classie;
    } else {
      $.classie = classie;
    }
  }
})(window);
var ModalEffects = (function () {
  !(function () {
    var overlay = document.querySelector(".md-overlay");
    [].slice
      .call(document.querySelectorAll(".md-trigger"))
      .forEach(function (el, dataAndEvents) {
        function removeModal(hasPerspective) {
          classie.remove(body, "md-show");
          if (hasPerspective) {
            classie.remove(document.documentElement, "md-perspective");
          }
        }
        function removeModalHandler() {
          removeModal(classie.has(el, "md-setperspective"));
        }
        var body = document.querySelector("#" + el.getAttribute("data-modal"));
        var tableview = body.querySelector(".md-close");
        el.addEventListener("click", function (dataAndEvents) {
          classie.add(body, "md-show");
          overlay.removeEventListener("click", removeModalHandler);
          overlay.addEventListener("click", removeModalHandler);
          if (classie.has(el, "md-setperspective")) {
            setTimeout(function () {
              classie.add(document.documentElement, "md-perspective");
            }, 25);
          }
        });
        tableview.addEventListener("click", function (event) {
          event.stopPropagation();
          removeModalHandler();
        });
      });
  })();
})();
jQuery.fn.putCursorAtEnd = function () {
  return this.each(function () {
    if (this.setSelectionRange) {
      var caretPosition = 2 * $(this).val().length;
      this.setSelectionRange(caretPosition, caretPosition);
    } else {
      $(this).val($(this).val());
    }
  });
};
var i = 0;
var divLength = $(".item-container").children("div").length;
var interval = setInterval(function () {
  $(".item-container")
    .children("div:eq(" + i + ")")
    .css("opacity", "1")
    .css("transform", "scale(1)");
  if (divLength == i + 1) {
    clearInterval(interval);
  }
  i++;
}, 90);
$("#content.inner-container").append(
  '<div style="position:absolute;left:40%;top:20%;z-index:6;" class="load"><div id="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>'
);
$(window).on("load", function () {
  setTimeout(removeLoader, 500);
});
function removeLoader() {
  $(".load").fadeOut(500, function () {
    $(".load").remove();
  });
}