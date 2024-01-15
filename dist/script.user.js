// ==UserScript==
// @name         Anime Subreddit Discussion Link
// @namespace    https://github.com/kiangkuang
// @version      1.3.0
// @author       Kiang Kuang
// @description  Adds a link to Anime Subreddit episode discussion threads on anime platforms.
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @include      *://aniwave.tld/watch/*
// @include      https://www.netflix.com/*
// ==/UserScript==

(function () {
  'use strict';

  function getLink(title, episode) {
    return `https://www.reddit.com/r/anime/search/?q=${encodeURIComponent(
    title
  )} episode ${episode} discussion`;
  }
  function createElement(tag, attrs = {}, children = []) {
    const el = document.createElement(tag);
    Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
    children == null ? void 0 : children.forEach((child) => el.append(child));
    return el;
  }
  const aniwave = () => {
    var _a;
    var e = createElement(
      "a",
      {
        href: "#",
        target: "_blank",
        class: "ctrl"
      },
      [createElement("i", { class: "fab fa-reddit" }), " Reddit"]
    );
    (_a = document.querySelector("#controls .left")) == null ? void 0 : _a.prepend(e);
    e.addEventListener("mouseover", () => {
      var _a2, _b;
      const title = (((_a2 = document.querySelector("#w-info .title")) == null ? void 0 : _a2.textContent) ?? "").replace("(TV)", "").replace(/-/g, " ");
      const epi = (((_b = document.querySelector("#w-servers .tip > div:first-child > b")) == null ? void 0 : _b.textContent) ?? "").replace("Episode ", "");
      e.setAttribute("href", getLink(title, epi));
    });
  };
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var sentinel_umd = { exports: {} };
  (function(module, exports) {
    (function(root, factory) {
      {
        module.exports = factory();
      }
    })(commonjsGlobal, function() {
      var isArray = Array.isArray, selectorToAnimationMap = {}, animationCallbacks = {}, styleEl, styleSheet, cssRules;
      return {
        /**
         * Add watcher.
         * @param {array} cssSelectors - List of CSS selector strings
         * @param {Function} callback - The callback function
         */
        on: function(cssSelectors, callback) {
          if (!callback)
            return;
          if (!styleEl) {
            var doc = document, head = doc.head;
            doc.addEventListener("animationstart", function(ev, callbacks, l, i) {
              callbacks = animationCallbacks[ev.animationName];
              if (!callbacks)
                return;
              ev.stopImmediatePropagation();
              l = callbacks.length;
              for (i = 0; i < l; i++)
                callbacks[i](ev.target);
            }, true);
            styleEl = doc.getElementById("sentinel-css");
            if (!styleEl) {
              styleEl = doc.createElement("style");
              head.insertBefore(styleEl, head.firstChild);
            }
            styleSheet = styleEl.sheet;
            cssRules = styleSheet.cssRules;
          }
          (isArray(cssSelectors) ? cssSelectors : [cssSelectors]).map(function(selector, animId, isCustomName) {
            animId = selectorToAnimationMap[selector];
            if (!animId) {
              isCustomName = selector[0] == "!";
              selectorToAnimationMap[selector] = animId = isCustomName ? selector.slice(1) : "sentinel-" + Math.random().toString(16).slice(2);
              cssRules[styleSheet.insertRule(
                "@keyframes " + animId + "{from{transform:none;}to{transform:none;}}",
                cssRules.length
              )]._id = selector;
              if (!isCustomName) {
                cssRules[styleSheet.insertRule(
                  selector + "{animation-duration:0.0001s;animation-name:" + animId + ";}",
                  cssRules.length
                )]._id = selector;
              }
              selectorToAnimationMap[selector] = animId;
            }
            (animationCallbacks[animId] = animationCallbacks[animId] || []).push(callback);
          });
        },
        /**
         * Remove watcher.
         * @param {array} cssSelectors - List of CSS selector strings
         * @param {Function} callback - The callback function (optional)
         */
        off: function(cssSelectors, callback) {
          (isArray(cssSelectors) ? cssSelectors : [cssSelectors]).map(function(selector, animId, callbackList, i) {
            if (!(animId = selectorToAnimationMap[selector]))
              return;
            callbackList = animationCallbacks[animId];
            if (callback) {
              i = callbackList.length;
              while (i--) {
                if (callbackList[i] === callback)
                  callbackList.splice(i, 1);
              }
            } else {
              callbackList = [];
            }
            if (callbackList.length)
              return;
            i = cssRules.length;
            while (i--) {
              if (cssRules[i]._id == selector)
                styleSheet.deleteRule(i);
            }
            delete selectorToAnimationMap[selector];
            delete animationCallbacks[animId];
          });
        },
        /**
         * Reset watchers and cache
         */
        reset: function() {
          selectorToAnimationMap = {};
          animationCallbacks = {};
          if (styleEl)
            styleEl.parentNode.removeChild(styleEl);
          styleEl = 0;
        }
      };
    });
  })(sentinel_umd);
  var sentinel_umdExports = sentinel_umd.exports;
  const sentinel = /* @__PURE__ */ getDefaultExportFromCjs(sentinel_umdExports);
  const netflix = () => {
    var title = "";
    var epi = "";
    sentinel.on(".watch-video--bottom-controls-container h4", function(el) {
      var _a, _b;
      title = el.innerText;
      epi = (((_b = (_a = el.parentElement) == null ? void 0 : _a.querySelector("span")) == null ? void 0 : _b.innerText) ?? "").replace(
        "E",
        ""
      );
    });
    sentinel.on(".SeamlessControls--container > div:last-of-type", function(el) {
      var _a;
      var button = (_a = el == null ? void 0 : el.querySelector("button")) == null ? void 0 : _a.cloneNode(true);
      button.children[0].innerHTML = "Reddit";
      button.style.marginRight = "1.25rem";
      button.onclick = function() {
        window.open(getLink(title, epi), "_blank");
      };
      el == null ? void 0 : el.prepend(button);
    });
  };
  if (window.location.hostname.includes("aniwave")) {
    aniwave();
  } else if (window.location.hostname.includes("netflix")) {
    netflix();
  }

})();