// import React from 'react'
// import $ from "jquery";
// const Custom = () => {
//      "use strict";
// var _createClass = function() {
//     function defineProperties(target, props) {
//         for (var i = 0; i < props.length; i++) {
//             var descriptor = props[i];
//             descriptor.enumerable = descriptor.enumerable || !1,
//             descriptor.configurable = !0,
//             "value"in descriptor && (descriptor.writable = !0),
//             Object.defineProperty(target, descriptor.key, descriptor)
//         }
//     }
//     return function(Constructor, protoProps, staticProps) {
//         return protoProps && defineProperties(Constructor.prototype, protoProps),
//         staticProps && defineProperties(Constructor, staticProps),
//         Constructor
//     }
// }();
// function _classCallCheck(instance, Constructor) {
//     if (!(instance instanceof Constructor))
//         throw new TypeError("Cannot call a class as a function")
// }
// var RocketBrowserCompatibilityChecker = function() {
//     function RocketBrowserCompatibilityChecker(options) {
//         _classCallCheck(this, RocketBrowserCompatibilityChecker),
//         this.passiveSupported = !1,
//         this._checkPassiveOption(this),
//         this.options = !!this.passiveSupported && options
//     }
//     return _createClass(RocketBrowserCompatibilityChecker, [{
//         key: "_checkPassiveOption",
//         value: function(self) {
//             try {
//                 var options = {
//                     get passive() {
//                         return !(self.passiveSupported = !0)
//                     }
//                 };
//                 window.addEventListener("test", null, options),
//                 window.removeEventListener("test", null, options)
//             } catch (err) {
//                 self.passiveSupported = !1
//             }
//         }
//     }, {
//         key: "initRequestIdleCallback",
//         value: function() {
//             !1 in window && (window.requestIdleCallback = function(cb) {
//                 var start = Date.now();
//                 return setTimeout(function() {
//                     cb({
//                         didTimeout: !1,
//                         timeRemaining: function() {
//                             return Math.max(0, 50 - (Date.now() - start))
//                         }
//                     })
//                 }, 1)
//             }
//             ),
//             !1 in window && (window.cancelIdleCallback = function(id) {
//                 return clearTimeout(id)
//             }
//             )
//         }
//     }, {
//         key: "isDataSaverModeOn",
//         value: function() {
//             return "connection"in navigator && !0 === navigator.connection.saveData
//         }
//     }, {
//         key: "supportsLinkPrefetch",
//         value: function() {
//             var elem = document.createElement("link");
//             return elem.relList && elem.relList.supports && elem.relList.supports("prefetch") && window.IntersectionObserver && "isIntersecting"in IntersectionObserverEntry.prototype
//         }
//     }, {
//         key: "isSlowConnection",
//         value: function() {
//             return "connection"in navigator && "effectiveType"in navigator.connection && ("2g" === navigator.connection.effectiveType || "slow-2g" === navigator.connection.effectiveType)
//         }
//     }]),
//     RocketBrowserCompatibilityChecker
// }();



// (function() {
//     "use strict";
//     var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
//         return typeof e
//     }
//     : function(e) {
//         return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
//     }
//       , e = function() {
//         function i(e, t) {
//             for (var n = 0; n < t.length; n++) {
//                 var i = t[n];
//                 i.enumerable = i.enumerable || !1,
//                 i.configurable = !0,
//                 "value"in i && (i.writable = !0),
//                 Object.defineProperty(e, i.key, i)
//             }
//         }
//         return function(e, t, n) {
//             return t && i(e.prototype, t),
//             n && i(e, n),
//             e
//         }
//     }();
//     function i(e, t) {
//         if (!(e instanceof t))
//             throw new TypeError("Cannot call a class as a function")
//     }
//     var t = function() {
//         function n(e, t) {
//             i(this, n),
//             this.browser = e,
//             this.config = t,
//             this.options = this.browser.options,
//             this.prefetched = new Set,
//             this.eventTime = null,
//             this.threshold = 1111,
//             this.numOnHover = 0
//         }
//         return e(n, [{
//             key: "init",
//             value: function() {
//                 !this.browser.supportsLinkPrefetch() || this.browser.isDataSaverModeOn() || this.browser.isSlowConnection() || (this.regex = {
//                     excludeUris: RegExp(this.config.excludeUris, "i"),
//                     images: RegExp(".(" + this.config.imageExt + ")$", "i"),
//                     fileExt: RegExp(".(" + this.config.fileExt + ")$", "i")
//                 },
//                 this._initListeners(this))
//             }
//         }, {
//             key: "_initListeners",
//             value: function(e) {
//                 -1 < this.config.onHoverDelay && document.addEventListener("mouseover", e.listener.bind(e), e.listenerOptions),
//                 document.addEventListener("mousedown", e.listener.bind(e), e.listenerOptions),
//                 document.addEventListener("touchstart", e.listener.bind(e), e.listenerOptions)
//             }
//         }, {
//             key: "listener",
//             value: function(e) {
//                 var t = e.target.closest("a")
//                   , n = this._prepareUrl(t);
//                 if (null !== n)
//                     switch (e.type) {
//                     case "mousedown":
//                     case "touchstart":
//                         this._addPrefetchLink(n);
//                         break;
//                     case "mouseover":
//                         this._earlyPrefetch(t, n, "mouseout")
//                     }
//             }
//         }, {
//             key: "_earlyPrefetch",
//             value: function(t, e, n) {
//                 var i = this
//                   , r = setTimeout(function() {
//                     if (r = null,
//                     0 === i.numOnHover)
//                         setTimeout(function() {
//                             return i.numOnHover = 0
//                         }, 1e3);
//                     else if (i.numOnHover > i.config.rateThrottle)
//                         return;
//                     i.numOnHover++,
//                     i._addPrefetchLink(e)
//                 }, this.config.onHoverDelay);
//                 t.addEventListener(n, function e() {
//                     t.removeEventListener(n, e, {
//                         passive: !0
//                     }),
//                     null !== r && (clearTimeout(r),
//                     r = null)
//                 }, {
//                     passive: !0
//                 })
//             }
//         }, {
//             key: "_addPrefetchLink",
//             value: function(i) {
//                 return this.prefetched.add(i.href),
//                 new Promise(function(e, t) {
//                     var n = document.createElement("link");
//                     n.rel = "prefetch",
//                     n.href = i.href,
//                     n.onload = e,
//                     n.onerror = t,
//                     document.head.appendChild(n)
//                 }
//                 ).catch(function() {})
//             }
//         }, {
//             key: "_prepareUrl",
//             value: function(e) {
//                 if (null === e || "object" !== (void 0 === e ? "undefined" : r(e)) || !1 in e || -1 === ["http:", "https:"].indexOf(e.protocol))
//                     return null;
//                 var t = e.href.substring(0, this.config.siteUrl.length)
//                   , n = this._getPathname(e.href, t)
//                   , i = {
//                     original: e.href,
//                     protocol: e.protocol,
//                     origin: t,
//                     pathname: n,
//                     href: t + n
//                 };
//                 return this._isLinkOk(i) ? i : null
//             }
//         }, {
//             key: "_getPathname",
//             value: function(e, t) {
//                 var n = t ? e.substring(this.config.siteUrl.length) : e;
//                 return n.startsWith("/") || (n = "/" + n),
//                 this._shouldAddTrailingSlash(n) ? n + "/" : n
//             }
//         }, {
//             key: "_shouldAddTrailingSlash",
//             value: function(e) {
//                 return this.config.usesTrailingSlash && !e.endsWith("/") && !this.regex.fileExt.test(e)
//             }
//         }, {
//             key: "_isLinkOk",
//             value: function(e) {
//                 return null !== e && "object" === (void 0 === e ? "undefined" : r(e)) && (!this.prefetched.has(e.href) && e.origin === this.config.siteUrl && -1 === e.href.indexOf("?") && -1 === e.href.indexOf("#") && !this.regex.excludeUris.test(e.href) && !this.regex.images.test(e.href))
//             }
//         }], [{
//             key: "run",
//             value: function() {
//                 "undefined" != typeof RocketPreloadLinksConfig && new n(new RocketBrowserCompatibilityChecker({
//                     capture: !0,
//                     passive: !0
//                 }),RocketPreloadLinksConfig).init()
//             }
//         }]),
//         n
//     }();
//     t.run();
// }());

// var localize = {
//     "ajaxurl": "https:\/\/staging.3li.global\/wp-admin\/admin-ajax.php",
//     "nonce": "0600afdc72",
//     "i18n": {
//         "added": "Added ",
//         "compare": "Compare",
//         "loading": "Loading..."
//     },
//     "eael_translate_text": {
//         "required_text": "is a required field",
//         "invalid_text": "Invalid",
//         "billing_text": "Billing",
//         "shipping_text": "Shipping"
//     },
//     "page_permalink": "https:\/\/staging.3li.global\/tools\/hubspot\/",
//     "cart_redirectition": "",
//     "cart_page_url": "",
//     "el_breakpoints": {
//         "mobile": {
//             "label": "Mobile Portrait",
//             "value": 767,
//             "default_value": 767,
//             "direction": "max",
//             "is_enabled": true
//         },
//         "mobile_extra": {
//             "label": "Mobile Landscape",
//             "value": 880,
//             "default_value": 880,
//             "direction": "max",
//             "is_enabled": false
//         },
//         "tablet": {
//             "label": "Tablet Portrait",
//             "value": 1024,
//             "default_value": 1024,
//             "direction": "max",
//             "is_enabled": true
//         },
//         "tablet_extra": {
//             "label": "Tablet Landscape",
//             "value": 1200,
//             "default_value": 1200,
//             "direction": "max",
//             "is_enabled": false
//         },
//         "laptop": {
//             "label": "Laptop",
//             "value": 1366,
//             "default_value": 1366,
//             "direction": "max",
//             "is_enabled": false
//         },
//         "widescreen": {
//             "label": "Widescreen",
//             "value": 2400,
//             "default_value": 2400,
//             "direction": "min",
//             "is_enabled": false
//         }
//     },
//     "ParticleThemesData": {
//         "default": "{\"particles\":{\"number\":{\"value\":160,\"density\":{\"enable\":true,\"value_area\":800}},\"color\":{\"value\":\"#ffffff\"},\"shape\":{\"type\":\"circle\",\"stroke\":{\"width\":0,\"color\":\"#000000\"},\"polygon\":{\"nb_sides\":5},\"image\":{\"src\":\"img\/github.svg\",\"width\":100,\"height\":100}},\"opacity\":{\"value\":0.5,\"random\":false,\"anim\":{\"enable\":false,\"speed\":1,\"opacity_min\":0.1,\"sync\":false}},\"size\":{\"value\":3,\"random\":true,\"anim\":{\"enable\":false,\"speed\":40,\"size_min\":0.1,\"sync\":false}},\"line_linked\":{\"enable\":true,\"distance\":150,\"color\":\"#ffffff\",\"opacity\":0.4,\"width\":1},\"move\":{\"enable\":true,\"speed\":6,\"direction\":\"none\",\"random\":false,\"straight\":false,\"out_mode\":\"out\",\"bounce\":false,\"attract\":{\"enable\":false,\"rotateX\":600,\"rotateY\":1200}}},\"interactivity\":{\"detect_on\":\"canvas\",\"events\":{\"onhover\":{\"enable\":true,\"mode\":\"repulse\"},\"onclick\":{\"enable\":true,\"mode\":\"push\"},\"resize\":true},\"modes\":{\"grab\":{\"distance\":400,\"line_linked\":{\"opacity\":1}},\"bubble\":{\"distance\":400,\"size\":40,\"duration\":2,\"opacity\":8,\"speed\":3},\"repulse\":{\"distance\":200,\"duration\":0.4},\"push\":{\"particles_nb\":4},\"remove\":{\"particles_nb\":2}}},\"retina_detect\":true}",
//         "nasa": "{\"particles\":{\"number\":{\"value\":250,\"density\":{\"enable\":true,\"value_area\":800}},\"color\":{\"value\":\"#ffffff\"},\"shape\":{\"type\":\"circle\",\"stroke\":{\"width\":0,\"color\":\"#000000\"},\"polygon\":{\"nb_sides\":5},\"image\":{\"src\":\"img\/github.svg\",\"width\":100,\"height\":100}},\"opacity\":{\"value\":1,\"random\":true,\"anim\":{\"enable\":true,\"speed\":1,\"opacity_min\":0,\"sync\":false}},\"size\":{\"value\":3,\"random\":true,\"anim\":{\"enable\":false,\"speed\":4,\"size_min\":0.3,\"sync\":false}},\"line_linked\":{\"enable\":false,\"distance\":150,\"color\":\"#ffffff\",\"opacity\":0.4,\"width\":1},\"move\":{\"enable\":true,\"speed\":1,\"direction\":\"none\",\"random\":true,\"straight\":false,\"out_mode\":\"out\",\"bounce\":false,\"attract\":{\"enable\":false,\"rotateX\":600,\"rotateY\":600}}},\"interactivity\":{\"detect_on\":\"canvas\",\"events\":{\"onhover\":{\"enable\":true,\"mode\":\"bubble\"},\"onclick\":{\"enable\":true,\"mode\":\"repulse\"},\"resize\":true},\"modes\":{\"grab\":{\"distance\":400,\"line_linked\":{\"opacity\":1}},\"bubble\":{\"distance\":250,\"size\":0,\"duration\":2,\"opacity\":0,\"speed\":3},\"repulse\":{\"distance\":400,\"duration\":0.4},\"push\":{\"particles_nb\":4},\"remove\":{\"particles_nb\":2}}},\"retina_detect\":true}",
//         "bubble": "{\"particles\":{\"number\":{\"value\":15,\"density\":{\"enable\":true,\"value_area\":800}},\"color\":{\"value\":\"#1b1e34\"},\"shape\":{\"type\":\"polygon\",\"stroke\":{\"width\":0,\"color\":\"#000\"},\"polygon\":{\"nb_sides\":6},\"image\":{\"src\":\"img\/github.svg\",\"width\":100,\"height\":100}},\"opacity\":{\"value\":0.3,\"random\":true,\"anim\":{\"enable\":false,\"speed\":1,\"opacity_min\":0.1,\"sync\":false}},\"size\":{\"value\":50,\"random\":false,\"anim\":{\"enable\":true,\"speed\":10,\"size_min\":40,\"sync\":false}},\"line_linked\":{\"enable\":false,\"distance\":200,\"color\":\"#ffffff\",\"opacity\":1,\"width\":2},\"move\":{\"enable\":true,\"speed\":8,\"direction\":\"none\",\"random\":false,\"straight\":false,\"out_mode\":\"out\",\"bounce\":false,\"attract\":{\"enable\":false,\"rotateX\":600,\"rotateY\":1200}}},\"interactivity\":{\"detect_on\":\"canvas\",\"events\":{\"onhover\":{\"enable\":false,\"mode\":\"grab\"},\"onclick\":{\"enable\":false,\"mode\":\"push\"},\"resize\":true},\"modes\":{\"grab\":{\"distance\":400,\"line_linked\":{\"opacity\":1}},\"bubble\":{\"distance\":400,\"size\":40,\"duration\":2,\"opacity\":8,\"speed\":3},\"repulse\":{\"distance\":200,\"duration\":0.4},\"push\":{\"particles_nb\":4},\"remove\":{\"particles_nb\":2}}},\"retina_detect\":true}",
//         "snow": "{\"particles\":{\"number\":{\"value\":450,\"density\":{\"enable\":true,\"value_area\":800}},\"color\":{\"value\":\"#fff\"},\"shape\":{\"type\":\"circle\",\"stroke\":{\"width\":0,\"color\":\"#000000\"},\"polygon\":{\"nb_sides\":5},\"image\":{\"src\":\"img\/github.svg\",\"width\":100,\"height\":100}},\"opacity\":{\"value\":0.5,\"random\":true,\"anim\":{\"enable\":false,\"speed\":1,\"opacity_min\":0.1,\"sync\":false}},\"size\":{\"value\":5,\"random\":true,\"anim\":{\"enable\":false,\"speed\":40,\"size_min\":0.1,\"sync\":false}},\"line_linked\":{\"enable\":false,\"distance\":500,\"color\":\"#ffffff\",\"opacity\":0.4,\"width\":2},\"move\":{\"enable\":true,\"speed\":6,\"direction\":\"bottom\",\"random\":false,\"straight\":false,\"out_mode\":\"out\",\"bounce\":false,\"attract\":{\"enable\":false,\"rotateX\":600,\"rotateY\":1200}}},\"interactivity\":{\"detect_on\":\"canvas\",\"events\":{\"onhover\":{\"enable\":true,\"mode\":\"bubble\"},\"onclick\":{\"enable\":true,\"mode\":\"repulse\"},\"resize\":true},\"modes\":{\"grab\":{\"distance\":400,\"line_linked\":{\"opacity\":0.5}},\"bubble\":{\"distance\":400,\"size\":4,\"duration\":0.3,\"opacity\":1,\"speed\":3},\"repulse\":{\"distance\":200,\"duration\":0.4},\"push\":{\"particles_nb\":4},\"remove\":{\"particles_nb\":2}}},\"retina_detect\":true}",
//         "nyan_cat": "{\"particles\":{\"number\":{\"value\":150,\"density\":{\"enable\":false,\"value_area\":800}},\"color\":{\"value\":\"#ffffff\"},\"shape\":{\"type\":\"star\",\"stroke\":{\"width\":0,\"color\":\"#000000\"},\"polygon\":{\"nb_sides\":5},\"image\":{\"src\":\"http:\/\/wiki.lexisnexis.com\/academic\/images\/f\/fb\/Itunes_podcast_icon_300.jpg\",\"width\":100,\"height\":100}},\"opacity\":{\"value\":0.5,\"random\":false,\"anim\":{\"enable\":false,\"speed\":1,\"opacity_min\":0.1,\"sync\":false}},\"size\":{\"value\":4,\"random\":true,\"anim\":{\"enable\":false,\"speed\":40,\"size_min\":0.1,\"sync\":false}},\"line_linked\":{\"enable\":false,\"distance\":150,\"color\":\"#ffffff\",\"opacity\":0.4,\"width\":1},\"move\":{\"enable\":true,\"speed\":14,\"direction\":\"left\",\"random\":false,\"straight\":true,\"out_mode\":\"out\",\"bounce\":false,\"attract\":{\"enable\":false,\"rotateX\":600,\"rotateY\":1200}}},\"interactivity\":{\"detect_on\":\"canvas\",\"events\":{\"onhover\":{\"enable\":false,\"mode\":\"grab\"},\"onclick\":{\"enable\":true,\"mode\":\"repulse\"},\"resize\":true},\"modes\":{\"grab\":{\"distance\":200,\"line_linked\":{\"opacity\":1}},\"bubble\":{\"distance\":400,\"size\":40,\"duration\":2,\"opacity\":8,\"speed\":3},\"repulse\":{\"distance\":200,\"duration\":0.4},\"push\":{\"particles_nb\":4},\"remove\":{\"particles_nb\":2}}},\"retina_detect\":true}"
//     },
//     "eael_login_nonce": "b6332850eb",
//     "eael_register_nonce": "94d1d8fb02",
//     "eael_lostpassword_nonce": "d2c2d85085",
//     "eael_resetpassword_nonce": "4a2d13906b"
// };







// var ElementorProFrontendConfig = {
//      "ajaxurl": "https:\/\/staging.3li.global\/wp-admin\/admin-ajax.php",
//      "nonce": "56ab5a2fc0",
//      "urls": {
//          "assets": "https:\/\/staging.3li.global\/wp-content\/plugins\/elementor-pro\/assets\/",
//          "rest": "https:\/\/staging.3li.global\/wp-json\/"
//      },
//      "shareButtonsNetworks": {
//          "facebook": {
//              "title": "Facebook",
//              "has_counter": true
//          },
//          "twitter": {
//              "title": "Twitter"
//          },
//          "linkedin": {
//              "title": "LinkedIn",
//              "has_counter": true
//          },
//          "pinterest": {
//              "title": "Pinterest",
//              "has_counter": true
//          },
//          "reddit": {
//              "title": "Reddit",
//              "has_counter": true
//          },
//          "vk": {
//              "title": "VK",
//              "has_counter": true
//          },
//          "odnoklassniki": {
//              "title": "OK",
//              "has_counter": true
//          },
//          "tumblr": {
//              "title": "Tumblr"
//          },
//          "digg": {
//              "title": "Digg"
//          },
//          "skype": {
//              "title": "Skype"
//          },
//          "stumbleupon": {
//              "title": "StumbleUpon",
//              "has_counter": true
//          },
//          "mix": {
//              "title": "Mix"
//          },
//          "telegram": {
//              "title": "Telegram"
//          },
//          "pocket": {
//              "title": "Pocket",
//              "has_counter": true
//          },
//          "xing": {
//              "title": "XING",
//              "has_counter": true
//          },
//          "whatsapp": {
//              "title": "WhatsApp"
//          },
//          "email": {
//              "title": "Email"
//          },
//          "print": {
//              "title": "Print"
//          }
//      },
//      "facebook_sdk": {
//          "lang": "en_US",
//          "app_id": ""
//      },
//      "lottie": {
//          "defaultAnimationUrl": "https:\/\/staging.3li.global\/wp-content\/plugins\/elementor-pro\/modules\/lottie\/assets\/animations\/default.json"
//      }
//  };


//  var elementorFrontendConfig = {
//      "environmentMode": {
//          "edit": false,
//          "wpPreview": false,
//          "isScriptDebug": false
//      },
//      "i18n": {
//          "shareOnFacebook": "Share on Facebook",
//          "shareOnTwitter": "Share on Twitter",
//          "pinIt": "Pin it",
//          "download": "Download",
//          "downloadImage": "Download image",
//          "fullscreen": "Fullscreen",
//          "zoom": "Zoom",
//          "share": "Share",
//          "playVideo": "Play Video",
//          "previous": "Previous",
//          "next": "Next",
//          "close": "Close"
//      },
//      "is_rtl": false,
//      "breakpoints": {
//          "xs": 0,
//          "sm": 480,
//          "md": 768,
//          "lg": 1025,
//          "xl": 1440,
//          "xxl": 1600
//      },
//      "responsive": {
//          "breakpoints": {
//              "mobile": {
//                  "label": "Mobile Portrait",
//                  "value": 767,
//                  "default_value": 767,
//                  "direction": "max",
//                  "is_enabled": true
//              },
//              "mobile_extra": {
//                  "label": "Mobile Landscape",
//                  "value": 880,
//                  "default_value": 880,
//                  "direction": "max",
//                  "is_enabled": false
//              },
//              "tablet": {
//                  "label": "Tablet Portrait",
//                  "value": 1024,
//                  "default_value": 1024,
//                  "direction": "max",
//                  "is_enabled": true
//              },
//              "tablet_extra": {
//                  "label": "Tablet Landscape",
//                  "value": 1200,
//                  "default_value": 1200,
//                  "direction": "max",
//                  "is_enabled": false
//              },
//              "laptop": {
//                  "label": "Laptop",
//                  "value": 1366,
//                  "default_value": 1366,
//                  "direction": "max",
//                  "is_enabled": false
//              },
//              "widescreen": {
//                  "label": "Widescreen",
//                  "value": 2400,
//                  "default_value": 2400,
//                  "direction": "min",
//                  "is_enabled": false
//              }
//          }
//      },
//      "version": "3.13.1",
//      "is_static": false,
//      "experimentalFeatures": {
//          "e_dom_optimization": true,
//          "e_optimized_assets_loading": true,
//          "e_optimized_css_loading": true,
//          "a11y_improvements": true,
//          "additional_custom_breakpoints": true,
//          "theme_builder_v2": true,
//          "landing-pages": true,
//          "page-transitions": true,
//          "notes": true,
//          "loop": true,
//          "form-submissions": true,
//          "e_scroll_snap": true
//      },
//      "urls": {
//          "assets": "https:\/\/staging.3li.global\/wp-content\/plugins\/elementor\/assets\/"
//      },
//      "swiperClass": "swiper-container",
//      "settings": {
//          "page": [],
//          "editorPreferences": []
//      },
//      "kit": {
//          "active_breakpoints": ["viewport_mobile", "viewport_tablet"],
//          "global_image_lightbox": "yes",
//          "lightbox_enable_counter": "yes",
//          "lightbox_enable_fullscreen": "yes",
//          "lightbox_enable_zoom": "yes",
//          "lightbox_enable_share": "yes",
//          "lightbox_title_src": "title",
//          "lightbox_description_src": "description"
//      },
//      "post": {
//          "id": 4678,
//          "title": "Hubspot%20%E2%80%93%203li%20Global%20%7C%20Global%20Systems%20Integrator%20%26%20CRM%20Experts",
//          "excerpt": "",
//          "featuredImage": false
//      }
//  };


//  $(document).ready(function() {
//      let container = $('.circle-button-container');
//      let wrapper = $('.circle-button-container .button-wrapper');
//      let text = $('.circle-button-container .text');

//      let position = container.offset();

//      let sizes = wrapper.position();

//      let is_move = false

//      let options = {
//          ease: 0.15,
//          magneticForce: 0.3
//      };

//      let mouse = {
//          x: 0,
//          y: 0
//      };

//      let pos = {
//          circleX: 0,
//          circleY: 0,
//          cx: 0,
//          cy: 0,
//          tx: 0,
//          ty: 0,
//          x: 0,
//          y: 0
//      };

//      observe();

//      function observe() {
//          window.addEventListener('resize', resizeHandler);
//          container.on('mousemove', mouseMoveHandler);
//          container.on('mouseleave', mouseLeaveHandler);
//          container.on('mouseenter', mouseEnterHandler);
//      }

//      function resizeHandler() {
//          sizes = wrapper.offset();
//          position = container.offset();
//      }

//      function mouseEnterHandler() {
//          is_move = true;
//          position = container.offset();
//          update();
//      }

//      function mouseMoveHandler(e) {

//          mouse.x = e.pageX;
//          mouse.y = e.pageY;

//          pos.cx = position.left + (wrapper.width() / 2);
//          pos.cy = position.top + (wrapper.height() / 2);

//          let distX = (mouse.x - pos.cx);
//          let distY = (mouse.y - pos.cy);

//          pos.tx = distX - (distX * (1 - options.magneticForce));
//          pos.ty = distY - (distY * (1 - options.magneticForce));
//      }

//      function mouseLeaveHandler(e) {
//          pos.tx = 0;
//          pos.ty = 0;
//          is_move = false
//          toDefaultPosition()
//      }

//      function render() {
//          pos.x += (pos.tx - pos.x) * options.ease;
//          pos.y += (pos.ty - pos.y) * options.ease;
//          pos.circleX += (pos.tx - pos.x) * options.ease / 0.7;
//          pos.circleY += (pos.ty - pos.y) * options.ease / 0.7;

//          setPosition(wrapper, pos.x, pos.y);
//          setPosition(text, pos.circleX, pos.circleY);
//      }

//      function update() {
//          if (!is_move)
//              return;
//          else {
//              render();
//              window.requestAnimationFrame(update);
//          }
//      }

//      function toDefaultPosition() {
//          if (Math.abs(pos.x) < 0.1 && Math.abs(pos.y) < 0.1)
//              return;
//          else {
//              render();
//              window.requestAnimationFrame(toDefaultPosition);
//          }
//      }

//      function setPosition(el, x, y) {
//          let transform2 = 'translateX(' + x + 'px) translateY(' + y + 'px)';

//          el.css('moz-transform', transform2);
//          el.css('ms-transform', transform2);
//          el.css('o-transform', transform2);
//          el.css('transform', transform2);
//      }
//  });

// var $ = jQuery

// $(document).ready(function() {

// var h = []

// $('.sliding-text').each(function() {
// h.push($(this).find('.elementor-widget').clone().html())
// })

// function init() {
// $('.sliding-text').each(function(i) {

//  var $this = $(this)

//  $this.find('.elementor-widget').removeClass('sliding')

//  var amount = Math.ceil($(window).width() / $(this).find('.elementor-widget-container').outerWidth(true)) + 1

//  $this.find('.elementor-widget').empty().addClass('sliding')
//  $this.find('.elementor-widget').html(h[i].repeat(amount))
// })
// }

// init()
// $(window).on('load resize', init)
// })

// window._wpemojiSettings = {
// "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/",
// "ext": ".png",
// "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/",
// "svgExt": ".svg",
// "source": {
// "concatemoji": "https:\/\/staging.3li.global\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.2.1"
// }
// };

// !function(e, a, t) {
// var n, r, o, i = a.createElement("canvas"), p = i.getContext && i.getContext("2d");
// function s(e, t) {
// p.clearRect(0, 0, i.width, i.height),
// p.fillText(e, 0, 0);
// e = i.toDataURL();
// return p.clearRect(0, 0, i.width, i.height),
// p.fillText(t, 0, 0),
// e === i.toDataURL()
// }
// function c(e) {
// var t = a.createElement("script");
// t.src = e,
// t.defer = t.type = "text/javascript",
// a.getElementsByTagName("head")[0].appendChild(t)
// }
// for (o = Array("flag", "emoji"),
// t.supports = {
// everything: !0,
// everythingExceptFlag: !0
// },
// r = 0; r < o.length; r++)
// t.supports[o[r]] = function(e) {
// if (p && p.fillText)
// switch (p.textBaseline = "top",
// p.font = "600 32px Arial",
// e) {
// case "flag":
// return s("\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f", "\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f") ? !1 : !s("\ud83c\uddfa\ud83c\uddf3", "\ud83c\uddfa\u200b\ud83c\uddf3") && !s("\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f", "\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");
// case "emoji":
// return !s("\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c\udfff", "\ud83e\udef1\ud83c\udffb\u200b\ud83e\udef2\ud83c\udfff")
// }
// return !1
// }(o[r]),
// t.supports.everything = t.supports.everything && t.supports[o[r]],
// "flag" !== o[r] && (t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && t.supports[o[r]]);
// t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && !t.supports.flag,
// t.DOMReady = !1,
// t.readyCallback = function() {
// t.DOMReady = !0
// }
// ,
// t.supports.everything || (n = function() {
// t.readyCallback()
// }
// ,
// a.addEventListener ? (a.addEventListener("DOMContentLoaded", n, !1),
// e.addEventListener("load", n, !1)) : (e.attachEvent("onload", n),
// a.attachEvent("onreadystatechange", function() {
// "complete" === a.readyState && t.readyCallback()
// })),
// (e = t.source || {}).concatemoji ? c(e.concatemoji) : e.wpemoji && e.twemoji && (c(e.twemoji),
// c(e.wpemoji)))
// }(window, document, window._wpemojiSettings);
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Custom
